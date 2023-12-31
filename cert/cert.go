package cert

import (
	"crypto/rand"
	"crypto/rsa"
	"crypto/tls"
	"crypto/x509"
	"crypto/x509/pkix"
	"encoding/pem"
	"fmt"
	"log"
	"math/big"
	"os"
	"time"
)

// GenerateCert will generate a new certificate and key pair in pem format
func GenerateCert(dir string) error {
	err := os.Mkdir(dir, 0755)
	if err != nil {
		if os.IsExist(err) {
			log.Printf("Keys directory already exists")
		} else {
			return fmt.Errorf("failed to create keys directory, %v", err)
		}
	}

	priv, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		return fmt.Errorf("failed to generate private key, %v", err)
	}

	notBefore := time.Now()
	notAfter := notBefore.Add(3650 * 24 * time.Hour) // Valid for 10 year

	serialNumber, err := rand.Int(rand.Reader, new(big.Int).Lsh(big.NewInt(1), 128))
	if err != nil {
		return fmt.Errorf("failed to generate serial number: %v", err)

	}

	template := x509.Certificate{
		SerialNumber: serialNumber,
		Subject: pkix.Name{
			Organization: []string{"VM manager"},
			CommonName:   "server",
		},
		NotBefore:             notBefore,
		NotAfter:              notAfter,
		KeyUsage:              x509.KeyUsageKeyEncipherment | x509.KeyUsageDigitalSignature,
		ExtKeyUsage:           []x509.ExtKeyUsage{x509.ExtKeyUsageServerAuth},
		DNSNames:              []string{"localhost"},
		BasicConstraintsValid: true,
	}

	certDER, err := x509.CreateCertificate(rand.Reader, &template, &template, &priv.PublicKey, priv)
	if err != nil {
		return fmt.Errorf("failed to create certificate: %v", err)
	}

	// Output the certificate in PEM format
	certOut, err := os.Create("keys/server-cert.pem")
	if err != nil {
		return fmt.Errorf("failed to open cert.pem for writing: %v", err)
	}
	pem.Encode(certOut, &pem.Block{Type: "CERTIFICATE", Bytes: certDER})
	certOut.Close()

	// Output the private key in PEM format
	keyOut, err := os.Create("keys/server-key.pem")
	if err != nil {
		return fmt.Errorf("failed to open key.pem for writing: %v", err)
	}

	pem.Encode(keyOut, &pem.Block{Type: "EC PRIVATE KEY", Bytes: x509.MarshalPKCS1PrivateKey(priv)})
	keyOut.Close()

	log.Printf("Certificate and private key successfully generated!")
	return nil
}

func SetupTLSConfig(dir string) (*tls.Config, error) {
	cert, err := tls.LoadX509KeyPair(dir+"server-cert.pem", dir+"server-key.pem")
	if err != nil {
		// files do not exist
		if os.IsNotExist(err) {
			log.Printf("Generating new certificate and key pair")
			err = GenerateCert(dir)
			if err != nil {
				return nil, fmt.Errorf("could not generate certificate, %s", err)
			}
			cert, err = tls.LoadX509KeyPair(dir+"server-cert.pem", dir+"server-key.pem")
			if err != nil {
				return nil, fmt.Errorf("could not load key pair, %s", err)
			}
		} else {
			return nil, fmt.Errorf("could not load key pair, %s", err)
		}
	}

	// Load the server CA
	caCert, err := os.ReadFile(dir + "server-cert.pem")
	if err != nil {
		return nil, fmt.Errorf("failed to read server CA: %v", err)
	}

	caCertPool := x509.NewCertPool()
	caCertPool.AppendCertsFromPEM(caCert)

	tlsConfig := &tls.Config{
		Certificates: []tls.Certificate{cert},
		RootCAs:      caCertPool,
		ClientAuth:   tls.RequireAnyClientCert,
	}
	return tlsConfig, nil
}
