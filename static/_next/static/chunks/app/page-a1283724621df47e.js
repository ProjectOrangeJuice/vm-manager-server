(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2601:function(t,o,s){"use strict";var i,a;t.exports=(null==(i=s.g.process)?void 0:i.env)&&"object"==typeof(null==(a=s.g.process)?void 0:a.env)?s.g.process:s(8960)},7873:function(t,o,s){Promise.resolve().then(s.bind(s,2849))},2849:function(t,o,s){"use strict";s.r(o),s.d(o,{default:function(){return Home}});var i=s(7437),a=s(2265),clsx_m=function(){for(var t,o,s=0,i="";s<arguments.length;)(t=arguments[s++])&&(o=function r(t){var o,s,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(s=r(t[o]))&&(i&&(i+=" "),i+=s);else for(o in t)t[o]&&(i&&(i+=" "),i+=o)}return i}(t))&&(i&&(i+=" "),i+=o);return i};let u=t=>"number"==typeof t&&!isNaN(t),d=t=>"string"==typeof t,p=t=>"function"==typeof t,m=t=>d(t)||p(t)?t:null,f=t=>(0,a.isValidElement)(t)||d(t)||p(t)||u(t);function h(t){let{enter:o,exit:s,appendPosition:i=!1,collapse:c=!0,collapseDuration:g=300}=t;return function(t){let{children:x,position:j,preventExitTransition:w,done:R,nodeRef:k,isIn:P}=t,A=i?`${o}--${j}`:o,D=i?`${s}--${j}`:s,$=(0,a.useRef)(0);return(0,a.useLayoutEffect)(()=>{let t=k.current,o=A.split(" "),n=s=>{s.target===k.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",n),t.removeEventListener("animationcancel",n),0===$.current&&"animationcancel"!==s.type&&t.classList.remove(...o))};t.classList.add(...o),t.addEventListener("animationend",n),t.addEventListener("animationcancel",n)},[]),(0,a.useEffect)(()=>{let t=k.current,e=()=>{t.removeEventListener("animationend",e),c?function(t,o,s){void 0===s&&(s=300);let{scrollHeight:i,style:a}=t;requestAnimationFrame(()=>{a.minHeight="initial",a.height=i+"px",a.transition=`all ${s}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(o,s)})})}(t,R,g):R()};P||(w?e():($.current=1,t.className+=` ${D}`,t.addEventListener("animationend",e)))},[P]),a.createElement(a.Fragment,null,x)}}function y(t,o){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:o}:{}}let c={list:new Map,emitQueue:new Map,on(t,o){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(o),this},off(t,o){if(o){let s=this.list.get(t).filter(t=>t!==o);return this.list.set(t,s),this}return this.list.delete(t),this},cancelEmit(t){let o=this.emitQueue.get(t);return o&&(o.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(o=>{let s=setTimeout(()=>{o(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(s)})}},T=t=>{let{theme:o,type:s,...i}=t;return a.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===o?"currentColor":`var(--toastify-icon-color-${s})`,...i})},g={info:function(t){return a.createElement(T,{...t},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return a.createElement(T,{...t},a.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return a.createElement(T,{...t},a.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return a.createElement(T,{...t},a.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return a.createElement("div",{className:"Toastify__spinner"})}};function b(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function I(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function L(t){let{closeToast:o,theme:s,ariaLabel:i="close"}=t;return a.createElement("button",{className:`Toastify__close-button Toastify__close-button--${s}`,type:"button",onClick:t=>{t.stopPropagation(),o(t)},"aria-label":i},a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function O(t){let{delay:o,isRunning:s,closeToast:i,type:c="default",hide:g,className:x,style:j,controlledProgress:w,progress:R,rtl:k,isIn:P,theme:A}=t,D=g||w&&0===R,$={...j,animationDuration:`${o}ms`,animationPlayState:s?"running":"paused",opacity:D?0:1};w&&($.transform=`scaleX(${R})`);let B=clsx_m("Toastify__progress-bar",w?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${A}`,`Toastify__progress-bar--${c}`,{"Toastify__progress-bar--rtl":k}),U=p(x)?x({rtl:k,type:c,defaultClassName:B}):clsx_m(B,x);return a.createElement("div",{role:"progressbar","aria-hidden":D?"true":"false","aria-label":"notification timer",className:U,style:$,[w&&R>=1?"onTransitionEnd":"onAnimationEnd"]:w&&R<1?null:()=>{P&&i()}})}let N=t=>{let{isRunning:o,preventExitTransition:s,toastRef:i,eventHandlers:c}=function(t){let[o,s]=(0,a.useState)(!1),[i,c]=(0,a.useState)(!1),g=(0,a.useRef)(null),x=(0,a.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,j=(0,a.useRef)(t),{autoClose:w,pauseOnHover:R,closeToast:k,onClick:P,closeOnClick:A}=t;function v(o){if(t.draggable){"touchstart"===o.nativeEvent.type&&o.nativeEvent.preventDefault(),x.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",L),document.addEventListener("touchmove",_),document.addEventListener("touchend",L);let s=g.current;x.canCloseOnClick=!0,x.canDrag=!0,x.boundingRect=s.getBoundingClientRect(),s.style.transition="",x.x=b(o.nativeEvent),x.y=I(o.nativeEvent),"x"===t.draggableDirection?(x.start=x.x,x.removalDistance=s.offsetWidth*(t.draggablePercent/100)):(x.start=x.y,x.removalDistance=s.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(o){if(x.boundingRect){let{top:s,bottom:i,left:a,right:c}=x.boundingRect;"touchend"!==o.nativeEvent.type&&t.pauseOnHover&&x.x>=a&&x.x<=c&&x.y>=s&&x.y<=i?C():E()}}function E(){s(!0)}function C(){s(!1)}function _(s){let i=g.current;x.canDrag&&i&&(x.didMove=!0,o&&C(),x.x=b(s),x.y=I(s),x.delta="x"===t.draggableDirection?x.x-x.start:x.y-x.start,x.start!==x.x&&(x.canCloseOnClick=!1),i.style.transform=`translate${t.draggableDirection}(${x.delta}px)`,i.style.opacity=""+(1-Math.abs(x.delta/x.removalDistance)))}function L(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",L);let o=g.current;if(x.canDrag&&x.didMove&&o){if(x.canDrag=!1,Math.abs(x.delta)>x.removalDistance)return c(!0),void t.closeToast();o.style.transition="transform 0.2s, opacity 0.2s",o.style.transform=`translate${t.draggableDirection}(0)`,o.style.opacity="1"}}(0,a.useEffect)(()=>{j.current=t}),(0,a.useEffect)(()=>(g.current&&g.current.addEventListener("d",E,{once:!0}),p(t.onOpen)&&t.onOpen((0,a.isValidElement)(t.children)&&t.children.props),()=>{let t=j.current;p(t.onClose)&&t.onClose((0,a.isValidElement)(t.children)&&t.children.props)}),[]),(0,a.useEffect)(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",E),window.addEventListener("blur",C)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",C))}),[t.pauseOnFocusLoss]);let D={onMouseDown:v,onTouchStart:v,onMouseUp:T,onTouchEnd:T};return w&&R&&(D.onMouseEnter=C,D.onMouseLeave=E),A&&(D.onClick=t=>{P&&P(t),x.canCloseOnClick&&k()}),{playToast:E,pauseToast:C,isRunning:o,preventExitTransition:i,toastRef:g,eventHandlers:D}}(t),{closeButton:g,children:x,autoClose:j,onClick:w,type:R,hideProgressBar:k,closeToast:P,transition:A,position:D,className:$,style:B,bodyClassName:U,bodyStyle:z,progressClassName:F,progressStyle:V,updateId:W,role:Y,progress:G,rtl:X,toastId:J,deleteToast:K,isIn:Z,isLoading:ee,iconOut:et,closeOnClick:en,theme:eo}=t,es=clsx_m("Toastify__toast",`Toastify__toast-theme--${eo}`,`Toastify__toast--${R}`,{"Toastify__toast--rtl":X},{"Toastify__toast--close-on-click":en}),er=p($)?$({rtl:X,position:D,type:R,defaultClassName:es}):clsx_m(es,$),ei=!!G||!j,ea={closeToast:P,type:R,theme:eo},el=null;return!1===g||(el=p(g)?g(ea):(0,a.isValidElement)(g)?(0,a.cloneElement)(g,ea):L(ea)),a.createElement(A,{isIn:Z,done:K,position:D,preventExitTransition:s,nodeRef:i},a.createElement("div",{id:J,onClick:w,className:er,...c,style:B,ref:i},a.createElement("div",{...Z&&{role:Y},className:p(U)?U({type:R}):clsx_m("Toastify__toast-body",U),style:z},null!=et&&a.createElement("div",{className:clsx_m("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ee})},et),a.createElement("div",null,x)),el,a.createElement(O,{...W&&!ei?{key:`pb-${W}`}:{},rtl:X,theme:eo,delay:j,isRunning:o,isIn:Z,closeToast:P,hide:k,type:R,style:V,className:F,controlledProgress:ei,progress:G||0})))},M=function(t,o){return void 0===o&&(o=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:o}},x=h(M("bounce",!0)),j=(h(M("slide",!0)),h(M("zoom")),h(M("flip")),(0,a.forwardRef)((t,o)=>{let{getToastToRender:s,containerRef:i,isToastActive:x}=function(t){let[,o]=(0,a.useReducer)(t=>t+1,0),[s,i]=(0,a.useState)([]),x=(0,a.useRef)(null),j=(0,a.useRef)(new Map).current,T=t=>-1!==s.indexOf(t),w=(0,a.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:T,getToast:t=>j.get(t)}).current;function b(t){let{containerId:o}=t,{limit:s}=w.props;!s||o&&w.containerId!==o||(w.count-=w.queue.length,w.queue=[])}function I(t){i(o=>null==t?[]:o.filter(o=>o!==t))}function _(){let{toastContent:t,toastProps:o,staleId:s}=w.queue.shift();O(t,o,s)}function L(t,s){var i,R;let{delay:k,staleId:P,...A}=s;if(!f(t)||!x.current||w.props.enableMultiContainer&&A.containerId!==w.props.containerId||j.has(A.toastId)&&null==A.updateId)return;let{toastId:D,updateId:$,data:B}=A,{props:U}=w,L=()=>I(D),z=null==$;z&&w.count++;let F={...U,style:U.toastStyle,key:w.toastKey++,...Object.fromEntries(Object.entries(A).filter(t=>{let[o,s]=t;return null!=s})),toastId:D,updateId:$,data:B,closeToast:L,isIn:!1,className:m(A.className||U.toastClassName),bodyClassName:m(A.bodyClassName||U.bodyClassName),progressClassName:m(A.progressClassName||U.progressClassName),autoClose:!A.isLoading&&(i=A.autoClose,R=U.autoClose,!1===i||u(i)&&i>0?i:R),deleteToast(){let t=y(j.get(D),"removed");j.delete(D),c.emit(4,t);let s=w.queue.length;if(w.count=null==D?w.count-w.displayedToast:w.count-1,w.count<0&&(w.count=0),s>0){let t=null==D?w.props.limit:1;if(1===s||1===t)w.displayedToast++,_();else{let o=t>s?s:t;w.displayedToast=o;for(let t=0;t<o;t++)_()}}else o()}};F.iconOut=function(t){let{theme:o,type:s,isLoading:i,icon:c}=t,x=null,j={theme:o,type:s};return!1===c||(p(c)?x=c(j):(0,a.isValidElement)(c)?x=(0,a.cloneElement)(c,j):d(c)||u(c)?x=c:i?x=g.spinner():s in g&&(x=g[s](j))),x}(F),p(A.onOpen)&&(F.onOpen=A.onOpen),p(A.onClose)&&(F.onClose=A.onClose),F.closeButton=U.closeButton,!1===A.closeButton||f(A.closeButton)?F.closeButton=A.closeButton:!0===A.closeButton&&(F.closeButton=!f(U.closeButton)||U.closeButton);let V=t;(0,a.isValidElement)(t)&&!d(t.type)?V=(0,a.cloneElement)(t,{closeToast:L,toastProps:F,data:B}):p(t)&&(V=t({closeToast:L,toastProps:F,data:B})),U.limit&&U.limit>0&&w.count>U.limit&&z?w.queue.push({toastContent:V,toastProps:F,staleId:P}):u(k)?setTimeout(()=>{O(V,F,P)},k):O(V,F,P)}function O(t,o,s){let{toastId:a}=o;s&&j.delete(s);let g={content:t,props:o};j.set(a,g),i(t=>[...t,a].filter(t=>t!==s)),c.emit(4,y(g,null==g.props.updateId?"added":"updated"))}return(0,a.useEffect)(()=>(w.containerId=t.containerId,c.cancelEmit(3).on(0,L).on(1,t=>x.current&&I(t)).on(5,b).emit(2,w),()=>{j.clear(),c.emit(3,w)}),[]),(0,a.useEffect)(()=>{w.props=t,w.isToastActive=T,w.displayedToast=s.length}),{getToastToRender:function(o){let s=new Map,i=Array.from(j.values());return t.newestOnTop&&i.reverse(),i.forEach(t=>{let{position:o}=t.props;s.has(o)||s.set(o,[]),s.get(o).push(t)}),Array.from(s,t=>o(t[0],t[1]))},containerRef:x,isToastActive:T}}(t),{className:j,style:w,rtl:R,containerId:k}=t;return(0,a.useEffect)(()=>{o&&(o.current=i.current)},[]),a.createElement("div",{ref:i,className:"Toastify",id:k},s((t,o)=>{let s=o.length?{...w}:{...w,pointerEvents:"none"};return a.createElement("div",{className:function(t){let o=clsx_m("Toastify__toast-container",`Toastify__toast-container--${t}`,{"Toastify__toast-container--rtl":R});return p(j)?j({position:t,rtl:R,defaultClassName:o}):clsx_m(o,m(j))}(t),style:s,key:`container-${t}`},o.map((t,s)=>{let{content:i,props:c}=t;return a.createElement(N,{...c,isIn:x(c.toastId),style:{...c.style,"--nth":s+1,"--len":o.length},key:`toast-${c.key}`},i)}))}))}));j.displayName="ToastContainer",j.defaultProps={position:"top-right",transition:x,autoClose:5e3,closeButton:L,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let w,R=new Map,k=[],P=1;function H(t,o){return R.size>0?c.emit(0,t,o):k.push({content:t,options:o}),o.toastId}function S(t,o){return{...o,type:o&&o.type||t,toastId:o&&(d(o.toastId)||u(o.toastId))?o.toastId:""+P++}}function q(t){return(o,s)=>H(o,S(t,s))}function Q(t,o){return H(t,S("default",o))}Q.loading=(t,o)=>H(t,S("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...o})),Q.promise=function(t,o,s){let i,{pending:a,error:c,success:g}=o;a&&(i=d(a)?Q.loading(a,s):Q.loading(a.render,{...s,...a}));let x={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(t,o,a)=>{if(null==o)return void Q.dismiss(i);let c={type:t,...x,...s,data:a},g=d(o)?{render:o}:o;return i?Q.update(i,{...c,...g}):Q(g.render,{...c,...g}),a},j=p(t)?t():t;return j.then(t=>l("success",g,t)).catch(t=>l("error",c,t)),j},Q.success=q("success"),Q.info=q("info"),Q.error=q("error"),Q.warning=q("warning"),Q.warn=Q.warning,Q.dark=(t,o)=>H(t,S("default",{theme:"dark",...o})),Q.dismiss=t=>{R.size>0?c.emit(1,t):k=k.filter(o=>null!=t&&o.options.toastId!==t)},Q.clearWaitingQueue=function(t){return void 0===t&&(t={}),c.emit(5,t)},Q.isActive=t=>{let o=!1;return R.forEach(s=>{s.isToastActive&&s.isToastActive(t)&&(o=!0)}),o},Q.update=function(t,o){void 0===o&&(o={}),setTimeout(()=>{let s=function(t,o){let{containerId:s}=o,i=R.get(s||w);return i&&i.getToast(t)}(t,o);if(s){let{props:i,content:a}=s,c={delay:100,...i,...o,toastId:o.toastId||t,updateId:""+P++};c.toastId!==t&&(c.staleId=t);let g=c.render||a;delete c.render,H(g,c)}},0)},Q.done=t=>{Q.update(t,{progress:1})},Q.onChange=t=>(c.on(4,t),()=>{c.off(4,t)}),Q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},c.on(2,t=>{w=t.containerId||t,R.set(w,t),k.forEach(t=>{c.emit(0,t.content,t.options)}),k=[]}).on(3,t=>{R.delete(t.containerId||t),0===R.size&&c.off(0).off(1).off(5)});var A=s(2601);s(3343);var D=s(2601);function Home(){let[t,o]=(0,a.useState)({ActiveClients:[],DisconnectedClients:[],WaitingClients:[]});return(0,a.useEffect)(()=>{let fetchVmDetails=async()=>{let t=await fetch("".concat(D.env.API_URL,"/api/list")),s=await t.json();o(s)};fetchVmDetails();let t=setInterval(()=>{fetchVmDetails()},5e3);return()=>clearInterval(t)},[]),(0,i.jsxs)("body",{className:"h-full",children:[function(t){(null==t.ActiveClients||0==t.ActiveClients.length)&&(t.ActiveClients=[]),(null==t.DisconnectedClients||0==t.DisconnectedClients.length)&&(t.DisconnectedClients=[]);let updateClient=t=>()=>{fetch("".concat(A.env.API_URL,"/api/update/").concat(t),{method:"POST"}).then(t=>{200==t.status?Q.success("Update started"):Q.error("Update failed")})};return(0,i.jsxs)("div",{className:"container m-auto grid md:grid-cols-3",children:[t.ActiveClients.map(t=>(0,i.jsxs)("div",{className:"tile border border-green-200",children:[(0,i.jsxs)("h1",{className:"text-lg text-center",children:[t.Name,"(",t.Hostname,")"]}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)("img",{src:"server-icon.png",alt:"server icon",className:"w-20 h-20"})}),(0,i.jsx)("div",{className:"tile",children:(0,i.jsxs)("h3",{children:["Version: ",(0,i.jsx)("b",{children:t.Version})," ",(0,i.jsx)("button",{className:"border",onClick:updateClient(t.Serial),children:"Update"})]})}),(0,i.jsxs)("div",{className:"grid grid-cols-2",children:[(0,i.jsx)("div",{className:"tile",children:(0,i.jsxs)("h3",{children:["CPU: ",(0,i.jsxs)("b",{children:[t.CPU.toFixed(1),"%"]})]})}),(0,i.jsx)("div",{className:"tile",children:(0,i.jsxs)("h3",{children:["Memory: ",(0,i.jsxs)("b",{children:[t.Memory.toFixed(1),"%"]})]})})]}),(0,i.jsx)("hr",{}),t.Storage.map(t=>(0,i.jsxs)("div",{className:"grid grid-cols-2",children:[(0,i.jsx)("div",{className:"tile",children:(0,i.jsxs)("h3",{children:[t.Mount," (",t.Name,")"]})}),(0,i.jsx)("div",{className:"tile",children:(0,i.jsxs)("h3",{children:["Space Used: ",(0,i.jsxs)("b",{children:[t.SpaceUsed.toFixed(1),"%"]})]})})]}))]})),t.DisconnectedClients.map(t=>(0,i.jsxs)("div",{className:"tile border border-green-200",children:[(0,i.jsxs)("h1",{className:"text-lg text-center",children:[t.Name," ",(0,i.jsx)("span",{className:"text-red-600",children:"-disconnected-"})]}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)("img",{src:"server-icon.png",alt:"server icon",className:"w-20 h-20"})})]}))]})}(t),function(t){if(null==t.WaitingClients||0==t.WaitingClients.length)return(0,i.jsx)("div",{});let decline=t=>()=>{fetch("".concat(A.env.API_URL,"/api/waiting/{id}"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allow:!1})})},accept=t=>()=>{fetch("".concat(A.env.API_URL,"/api/waiting/").concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({allow:!0})})};return(0,i.jsxs)("table",{className:"table-auto",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Serial"}),(0,i.jsx)("th",{})]})}),(0,i.jsx)("tbody",{children:t.WaitingClients.map(t=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:t.Name}),(0,i.jsx)("td",{children:t.Serial}),(0,i.jsxs)("td",{children:[(0,i.jsx)("button",{onClick:accept(t.Serial),className:"bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",children:"Accept"}),(0,i.jsx)("button",{onClick:decline(t.Serial),className:"bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:"Decline"})]})]}))})]})}(t),(0,i.jsx)(j,{})]})}},3343:function(){},8960:function(t){!function(){var o={229:function(t){var o,s,i,a=t.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(t){if(o===setTimeout)return setTimeout(t,0);if((o===defaultSetTimout||!o)&&setTimeout)return o=setTimeout,setTimeout(t,0);try{return o(t,0)}catch(s){try{return o.call(null,t,0)}catch(s){return o.call(this,t,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(t){o=defaultSetTimout}try{s="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(t){s=defaultClearTimeout}}();var c=[],g=!1,x=-1;function cleanUpNextTick(){g&&i&&(g=!1,i.length?c=i.concat(c):x=-1,c.length&&drainQueue())}function drainQueue(){if(!g){var t=runTimeout(cleanUpNextTick);g=!0;for(var o=c.length;o;){for(i=c,c=[];++x<o;)i&&i[x].run();x=-1,o=c.length}i=null,g=!1,function(t){if(s===clearTimeout)return clearTimeout(t);if((s===defaultClearTimeout||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(t);try{s(t)}catch(o){try{return s.call(null,t)}catch(o){return s.call(this,t)}}}(t)}}function Item(t,o){this.fun=t,this.array=o}function noop(){}a.nextTick=function(t){var o=Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)o[s-1]=arguments[s];c.push(new Item(t,o)),1!==c.length||g||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=noop,a.addListener=noop,a.once=noop,a.off=noop,a.removeListener=noop,a.removeAllListeners=noop,a.emit=noop,a.prependListener=noop,a.prependOnceListener=noop,a.listeners=function(t){return[]},a.binding=function(t){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},s={};function __nccwpck_require__(t){var i=s[t];if(void 0!==i)return i.exports;var a=s[t]={exports:{}},c=!0;try{o[t](a,a.exports,__nccwpck_require__),c=!1}finally{c&&delete s[t]}return a.exports}__nccwpck_require__.ab="//";var i=__nccwpck_require__(229);t.exports=i}()},622:function(t,o,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=s(2265),a=Symbol.for("react.element"),c=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),g=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function q(t,o,s){var i,j={},w=null,R=null;for(i in void 0!==s&&(w=""+s),void 0!==o.key&&(w=""+o.key),void 0!==o.ref&&(R=o.ref),o)c.call(o,i)&&!x.hasOwnProperty(i)&&(j[i]=o[i]);if(t&&t.defaultProps)for(i in o=t.defaultProps)void 0===j[i]&&(j[i]=o[i]);return{$$typeof:a,type:t,key:w,ref:R,props:j,_owner:g.current}}o.jsx=q,o.jsxs=q},7437:function(t,o,s){"use strict";t.exports=s(622)}},function(t){t.O(0,[971,472,744],function(){return t(t.s=7873)}),_N_E=t.O()}]);