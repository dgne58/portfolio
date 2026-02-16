(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function F_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Qf={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function RS(){if(Mg)return Oo;Mg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Oo.Fragment=t,Oo.jsx=i,Oo.jsxs=i,Oo}var Eg;function CS(){return Eg||(Eg=1,Qf.exports=RS()),Qf.exports}var he=CS(),Jf={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function wS(){if(bg)return ft;bg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function _(N,Z,fe){this.props=N,this.context=Z,this.refs=M,this.updater=fe||b}_.prototype.isReactComponent={},_.prototype.setState=function(N,Z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Z,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function w(){}w.prototype=_.prototype;function U(N,Z,fe){this.props=N,this.context=Z,this.refs=M,this.updater=fe||b}var L=U.prototype=new w;L.constructor=U,T(L,_.prototype),L.isPureReactComponent=!0;var z=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function A(N,Z,fe){var be=fe.ref;return{$$typeof:o,type:N,key:Z,ref:be!==void 0?be:null,props:fe}}function D(N,Z){return A(N.type,Z,N.props)}function V(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function J(N){var Z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(fe){return Z[fe]})}var Q=/\/+/g;function se(N,Z){return typeof N=="object"&&N!==null&&N.key!=null?J(""+N.key):Z.toString(36)}function ue(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(Z){N.status==="pending"&&(N.status="fulfilled",N.value=Z)},function(Z){N.status==="pending"&&(N.status="rejected",N.reason=Z)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function F(N,Z,fe,be,ze){var ee=typeof N;(ee==="undefined"||ee==="boolean")&&(N=null);var de=!1;if(N===null)de=!0;else switch(ee){case"bigint":case"string":case"number":de=!0;break;case"object":switch(N.$$typeof){case o:case t:de=!0;break;case v:return de=N._init,F(de(N._payload),Z,fe,be,ze)}}if(de)return ze=ze(N),de=be===""?"."+se(N,0):be,z(ze)?(fe="",de!=null&&(fe=de.replace(Q,"$&/")+"/"),F(ze,Z,fe,"",function(we){return we})):ze!=null&&(V(ze)&&(ze=D(ze,fe+(ze.key==null||N&&N.key===ze.key?"":(""+ze.key).replace(Q,"$&/")+"/")+de)),Z.push(ze)),1;de=0;var Ce=be===""?".":be+":";if(z(N))for(var Ve=0;Ve<N.length;Ve++)be=N[Ve],ee=Ce+se(be,Ve),de+=F(be,Z,fe,ee,ze);else if(Ve=y(N),typeof Ve=="function")for(N=Ve.call(N),Ve=0;!(be=N.next()).done;)be=be.value,ee=Ce+se(be,Ve++),de+=F(be,Z,fe,ee,ze);else if(ee==="object"){if(typeof N.then=="function")return F(ue(N),Z,fe,be,ze);throw Z=String(N),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return de}function H(N,Z,fe){if(N==null)return N;var be=[],ze=0;return F(N,be,"","",function(ee){return Z.call(fe,ee,ze++)}),be}function ne(N){if(N._status===-1){var Z=N._result;Z=Z(),Z.then(function(fe){(N._status===0||N._status===-1)&&(N._status=1,N._result=fe)},function(fe){(N._status===0||N._status===-1)&&(N._status=2,N._result=fe)}),N._status===-1&&(N._status=0,N._result=Z)}if(N._status===1)return N._result.default;throw N._result}var pe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ve={map:H,forEach:function(N,Z,fe){H(N,function(){Z.apply(this,arguments)},fe)},count:function(N){var Z=0;return H(N,function(){Z++}),Z},toArray:function(N){return H(N,function(Z){return Z})||[]},only:function(N){if(!V(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ft.Activity=g,ft.Children=ve,ft.Component=_,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=U,ft.StrictMode=r,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ft.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},ft.cache=function(N){return function(){return N.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(N,Z,fe){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var be=T({},N.props),ze=N.key;if(Z!=null)for(ee in Z.key!==void 0&&(ze=""+Z.key),Z)!q.call(Z,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&Z.ref===void 0||(be[ee]=Z[ee]);var ee=arguments.length-2;if(ee===1)be.children=fe;else if(1<ee){for(var de=Array(ee),Ce=0;Ce<ee;Ce++)de[Ce]=arguments[Ce+2];be.children=de}return A(N.type,ze,be)},ft.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ft.createElement=function(N,Z,fe){var be,ze={},ee=null;if(Z!=null)for(be in Z.key!==void 0&&(ee=""+Z.key),Z)q.call(Z,be)&&be!=="key"&&be!=="__self"&&be!=="__source"&&(ze[be]=Z[be]);var de=arguments.length-2;if(de===1)ze.children=fe;else if(1<de){for(var Ce=Array(de),Ve=0;Ve<de;Ve++)Ce[Ve]=arguments[Ve+2];ze.children=Ce}if(N&&N.defaultProps)for(be in de=N.defaultProps,de)ze[be]===void 0&&(ze[be]=de[be]);return A(N,ee,ze)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(N){return{$$typeof:h,render:N}},ft.isValidElement=V,ft.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:ne}},ft.memo=function(N,Z){return{$$typeof:p,type:N,compare:Z===void 0?null:Z}},ft.startTransition=function(N){var Z=P.T,fe={};P.T=fe;try{var be=N(),ze=P.S;ze!==null&&ze(fe,be),typeof be=="object"&&be!==null&&typeof be.then=="function"&&be.then(B,pe)}catch(ee){pe(ee)}finally{Z!==null&&fe.types!==null&&(Z.types=fe.types),P.T=Z}},ft.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ft.use=function(N){return P.H.use(N)},ft.useActionState=function(N,Z,fe){return P.H.useActionState(N,Z,fe)},ft.useCallback=function(N,Z){return P.H.useCallback(N,Z)},ft.useContext=function(N){return P.H.useContext(N)},ft.useDebugValue=function(){},ft.useDeferredValue=function(N,Z){return P.H.useDeferredValue(N,Z)},ft.useEffect=function(N,Z){return P.H.useEffect(N,Z)},ft.useEffectEvent=function(N){return P.H.useEffectEvent(N)},ft.useId=function(){return P.H.useId()},ft.useImperativeHandle=function(N,Z,fe){return P.H.useImperativeHandle(N,Z,fe)},ft.useInsertionEffect=function(N,Z){return P.H.useInsertionEffect(N,Z)},ft.useLayoutEffect=function(N,Z){return P.H.useLayoutEffect(N,Z)},ft.useMemo=function(N,Z){return P.H.useMemo(N,Z)},ft.useOptimistic=function(N,Z){return P.H.useOptimistic(N,Z)},ft.useReducer=function(N,Z,fe){return P.H.useReducer(N,Z,fe)},ft.useRef=function(N){return P.H.useRef(N)},ft.useState=function(N){return P.H.useState(N)},ft.useSyncExternalStore=function(N,Z,fe){return P.H.useSyncExternalStore(N,Z,fe)},ft.useTransition=function(){return P.H.useTransition()},ft.version="19.2.4",ft}var Tg;function Uh(){return Tg||(Tg=1,Jf.exports=wS()),Jf.exports}var He=Uh();const DS=F_(He);var $f={exports:{}},Po={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function US(){return Ag||(Ag=1,(function(o){function t(F,H){var ne=F.length;F.push(H);e:for(;0<ne;){var pe=ne-1>>>1,ve=F[pe];if(0<l(ve,H))F[pe]=H,F[ne]=ve,ne=pe;else break e}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],ne=F.pop();if(ne!==H){F[0]=ne;e:for(var pe=0,ve=F.length,N=ve>>>1;pe<N;){var Z=2*(pe+1)-1,fe=F[Z],be=Z+1,ze=F[be];if(0>l(fe,ne))be<ve&&0>l(ze,fe)?(F[pe]=ze,F[be]=ne,pe=be):(F[pe]=fe,F[Z]=ne,pe=Z);else if(be<ve&&0>l(ze,ne))F[pe]=ze,F[be]=ne,pe=be;else break e}}return H}function l(F,H){var ne=F.sortIndex-H.sortIndex;return ne!==0?ne:F.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,x=3,y=!1,b=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(F){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=F)r(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function z(F){if(T=!1,L(F),!b)if(i(m)!==null)b=!0,B||(B=!0,J());else{var H=i(p);H!==null&&ue(z,H.startTime-F)}}var B=!1,P=-1,q=5,A=-1;function D(){return M?!0:!(o.unstable_now()-A<q)}function V(){if(M=!1,B){var F=o.unstable_now();A=F;var H=!0;try{e:{b=!1,T&&(T=!1,w(P),P=-1),y=!0;var ne=x;try{t:{for(L(F),g=i(m);g!==null&&!(g.expirationTime>F&&D());){var pe=g.callback;if(typeof pe=="function"){g.callback=null,x=g.priorityLevel;var ve=pe(g.expirationTime<=F);if(F=o.unstable_now(),typeof ve=="function"){g.callback=ve,L(F),H=!0;break t}g===i(m)&&r(m),L(F)}else r(m);g=i(m)}if(g!==null)H=!0;else{var N=i(p);N!==null&&ue(z,N.startTime-F),H=!1}}break e}finally{g=null,x=ne,y=!1}H=void 0}}finally{H?J():B=!1}}}var J;if(typeof U=="function")J=function(){U(V)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,se=Q.port2;Q.port1.onmessage=V,J=function(){se.postMessage(null)}}else J=function(){_(V,0)};function ue(F,H){P=_(function(){F(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(F){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var ne=x;x=H;try{return F()}finally{x=ne}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ne=x;x=F;try{return H()}finally{x=ne}},o.unstable_scheduleCallback=function(F,H,ne){var pe=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?pe+ne:pe):ne=pe,F){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=ne+ve,F={id:v++,callback:H,priorityLevel:F,startTime:ne,expirationTime:ve,sortIndex:-1},ne>pe?(F.sortIndex=ne,t(p,F),i(m)===null&&F===i(p)&&(T?(w(P),P=-1):T=!0,ue(z,ne-pe))):(F.sortIndex=ve,t(m,F),b||y||(b=!0,B||(B=!0,J()))),F},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(F){var H=x;return function(){var ne=x;x=H;try{return F.apply(this,arguments)}finally{x=ne}}}})(td)),td}var Rg;function NS(){return Rg||(Rg=1,ed.exports=US()),ed.exports}var nd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function LS(){if(Cg)return Ln;Cg=1;var o=Uh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Ln.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.4",Ln}var wg;function OS(){if(wg)return nd.exports;wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),nd.exports=LS(),nd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function PS(){if(Dg)return Po;Dg=1;var o=NS(),t=Uh(),i=OS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,s=f;break}if(R===s){S=!0,s=u,a=f;break}R=R.sibling}if(!S){for(R=f.child;R;){if(R===a){S=!0,a=f,s=u;break}if(R===s){S=!0,s=f,a=u;break}R=R.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:se(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return se(e(n))}catch{}}return null}var ue=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},pe=[],ve=-1;function N(e){return{current:e}}function Z(e){0>ve||(e.current=pe[ve],pe[ve]=null,ve--)}function fe(e,n){ve++,pe[ve]=e.current,e.current=n}var be=N(null),ze=N(null),ee=N(null),de=N(null);function Ce(e,n){switch(fe(ee,n),fe(ze,e),fe(be,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?W0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=W0(n),e=q0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(be),fe(be,e)}function Ve(){Z(be),Z(ze),Z(ee)}function we(e){e.memoizedState!==null&&fe(de,e);var n=be.current,a=q0(n,e.type);n!==a&&(fe(ze,e),fe(be,a))}function ke(e){ze.current===e&&(Z(be),Z(ze)),de.current===e&&(Z(de),Do._currentValue=ne)}var lt,st;function nt(e){if(lt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);lt=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lt+e+st}var tt=!1;function Je(e,n){if(!e||tt)return"";tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var ae=le}Reflect.construct(e,[],xe)}else{try{xe.call()}catch(le){ae=le}e.call(xe.prototype)}}else{try{throw Error()}catch(le){ae=le}(xe=e())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],R=f[1];if(S&&R){var I=S.split(`
`),te=R.split(`
`);for(u=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(s===I.length||u===te.length)for(s=I.length-1,u=te.length-1;1<=s&&0<=u&&I[s]!==te[u];)u--;for(;1<=s&&0<=u;s--,u--)if(I[s]!==te[u]){if(s!==1||u!==1)do if(s--,u--,0>u||I[s]!==te[u]){var me=`
`+I[s].replace(" at new "," at ");return e.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",e.displayName)),me}while(1<=s&&0<=u);break}}}finally{tt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?nt(a):""}function Tt(e,n){switch(e.tag){case 26:case 27:case 5:return nt(e.type);case 16:return nt("Lazy");case 13:return e.child!==n&&n!==null?nt("Suspense Fallback"):nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return Je(e.type,!1);case 11:return Je(e.type.render,!1);case 1:return Je(e.type,!0);case 31:return nt("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=Tt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var zt=Object.prototype.hasOwnProperty,pt=o.unstable_scheduleCallback,Ct=o.unstable_cancelCallback,Xe=o.unstable_shouldYield,O=o.unstable_requestPaint,E=o.unstable_now,X=o.unstable_getCurrentPriorityLevel,ge=o.unstable_ImmediatePriority,ye=o.unstable_UserBlockingPriority,ce=o.unstable_NormalPriority,Qe=o.unstable_LowPriority,De=o.unstable_IdlePriority,Ye=o.log,ot=o.unstable_setDisableYieldValue,Ee=null,Te=null;function Ie(e){if(typeof Ye=="function"&&ot(e),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Ee,e)}catch{}}var Fe=Math.clz32?Math.clz32:W,Ue=Math.log,mt=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ue(e)/mt|0)|0}var Le=256,Ae=262144,Be=4194304;function Me(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Se(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?u=Me(s):(S&=R,S!==0?u=Me(S):a||(a=R&~e,a!==0&&(u=Me(a))))):(R=s&~f,R!==0?u=Me(R):S!==0?u=Me(S):a||(a=s&~e,a!==0&&(u=Me(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Re(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ct(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),e}function At(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _i(e,n,a,s,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,I=e.expirationTimes,te=e.hiddenUpdates;for(a=S&~a;0<a;){var me=31-Fe(a),xe=1<<me;R[me]=0,I[me]=-1;var ae=te[me];if(ae!==null)for(te[me]=null,me=0;me<ae.length;me++){var le=ae[me];le!==null&&(le.lane&=-536870913)}a&=~xe}s!==0&&nl(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function nl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Fe(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Gs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Fe(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Lr(e,n){var a=n&-n;return a=(a&42)!==0?1:Vs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Vs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Or(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ks(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:mg(e.type))}function Di(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var ii=Math.random().toString(36).slice(2),sn="__reactFiber$"+ii,Sn="__reactProps$"+ii,vi="__reactContainer$"+ii,Pr="__reactEvents$"+ii,zr="__reactListeners$"+ii,il="__reactHandles$"+ii,Xs="__reactResources$"+ii,ir="__reactMarker$"+ii;function Ws(e){delete e[sn],delete e[Sn],delete e[Pr],delete e[zr],delete e[il]}function Ma(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[vi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=$0(e);e!==null;){if(a=e[sn])return a;e=$0(e)}return n}e=a,a=e.parentNode}return null}function Ea(e){if(e=e[sn]||e[vi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ar(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ba(e){var n=e[Xs];return n||(n=e[Xs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[ir]=!0}var Y=new Set,oe={};function ie(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(oe[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ge={},Oe={};function We(e){return zt.call(Oe,e)?!0:zt.call(Ge,e)?!1:Ne.test(e)?Oe[e]=!0:(Ge[e]=!0,!1)}function je(e,n,a){if(We(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function it(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ze(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function at(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function jt(e){if(!e._valueTracker){var n=Lt(e)?"checked":"value";e._valueTracker=Qt(e,n,""+e[n])}}function Ft(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Lt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function $e(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ot=/[\n"\\]/g;function ut(e){return e.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(e,n,a,s,u,f,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+at(n)):e.value!==""+at(n)&&(e.value=""+at(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,S,at(n)):a!=null?Mn(e,S,at(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+at(R):e.removeAttribute("name")}function Xi(e,n,a,s,u,f,S,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){jt(e);return}a=a!=null?""+at(a):"",n=n!=null?""+at(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=R?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),jt(e)}function Mn(e,n,a){n==="number"&&$e(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ai(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+at(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function It(e,n,a){if(n!=null&&(n=""+at(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+at(a):""}function En(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ue(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=at(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),jt(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Fr(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Tn(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Tn(e,f,n[f])}function xi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ev=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return bv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var Yc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Br=null,Ir=null;function Xh(e){var n=Ea(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;e:switch(e=n.stateNode,n.type){case"input":if(yn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ut(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[Sn]||null;if(!u)throw Error(r(90));yn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ft(s)}break e;case"textarea":It(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ai(e,!!a.multiple,n,!1)}}}var Zc=!1;function Wh(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var s=e(n);return s}finally{if(Zc=!1,(Br!==null||Ir!==null)&&(Wl(),Br&&(n=Br,e=Ir,Ir=Br=null,Xh(n),e)))for(n=0;n<e.length;n++)Xh(e[n])}}function qs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Sn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(qi)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Kc=!1}var Ta=null,Qc=null,rl=null;function qh(){if(rl)return rl;var e,n=Qc,a=n.length,s,u="value"in Ta?Ta.value:Ta.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return rl=u.slice(e,1<s?1-s:void 0)}function sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function Yh(){return!1}function Bn(e){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:Yh,this.isPropagationStopped=Yh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Bn(rr),js=g({},rr,{view:0,detail:0}),Tv=Bn(js),Jc,$c,Zs,cl=g({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zs&&(Zs&&e.type==="mousemove"?(Jc=e.screenX-Zs.screenX,$c=e.screenY-Zs.screenY):$c=Jc=0,Zs=e),Jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),jh=Bn(cl),Av=g({},cl,{dataTransfer:0}),Rv=Bn(Av),Cv=g({},js,{relatedTarget:0}),eu=Bn(Cv),wv=g({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=Bn(wv),Uv=g({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nv=Bn(Uv),Lv=g({},rr,{data:0}),Zh=Bn(Lv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zv[e])?!!n[e]:!1}function tu(){return Fv}var Bv=g({},js,{key:function(e){if(e.key){var n=Ov[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Iv=Bn(Bv),Hv=g({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=Bn(Hv),Gv=g({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Vv=Bn(Gv),kv=g({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=Bn(kv),Wv=g({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=Bn(Wv),Yv=g({},rr,{newState:0,oldState:0}),jv=Bn(Yv),Zv=[9,13,27,32],nu=qi&&"CompositionEvent"in window,Ks=null;qi&&"documentMode"in document&&(Ks=document.documentMode);var Kv=qi&&"TextEvent"in window&&!Ks,Qh=qi&&(!nu||Ks&&8<Ks&&11>=Ks),Jh=" ",$h=!1;function ep(e,n){switch(e){case"keyup":return Zv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function Qv(e,n){switch(e){case"compositionend":return tp(n);case"keypress":return n.which!==32?null:($h=!0,Jh);case"textInput":return e=n.data,e===Jh&&$h?null:e;default:return null}}function Jv(e,n){if(Hr)return e==="compositionend"||!nu&&ep(e,n)?(e=qh(),rl=Qc=Ta=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qh&&n.locale!=="ko"?null:n.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$v[e.type]:n==="textarea"}function ip(e,n,a,s){Br?Ir?Ir.push(s):Ir=[s]:Br=s,n=Jl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Qs=null,Js=null;function ex(e){I0(e,0)}function ul(e){var n=ar(e);if(Ft(n))return e}function ap(e,n){if(e==="change")return n}var rp=!1;if(qi){var iu;if(qi){var au="oninput"in document;if(!au){var sp=document.createElement("div");sp.setAttribute("oninput","return;"),au=typeof sp.oninput=="function"}iu=au}else iu=!1;rp=iu&&(!document.documentMode||9<document.documentMode)}function op(){Qs&&(Qs.detachEvent("onpropertychange",lp),Js=Qs=null)}function lp(e){if(e.propertyName==="value"&&ul(Js)){var n=[];ip(n,Js,e,jc(e)),Wh(ex,n)}}function tx(e,n,a){e==="focusin"?(op(),Qs=n,Js=a,Qs.attachEvent("onpropertychange",lp)):e==="focusout"&&op()}function nx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Js)}function ix(e,n){if(e==="click")return ul(n)}function ax(e,n){if(e==="input"||e==="change")return ul(n)}function rx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:rx;function $s(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!zt.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function up(e,n){var a=cp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cp(a)}}function fp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$e(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$e(e.document)}return n}function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var sx=qi&&"documentMode"in document&&11>=document.documentMode,Gr=null,su=null,eo=null,ou=!1;function hp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||Gr==null||Gr!==$e(s)||(s=Gr,"selectionStart"in s&&ru(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),eo&&$s(eo,s)||(eo=s,s=Jl(su,"onSelect"),0<s.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Gr)))}function sr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Vr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},lu={},pp={};qi&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function or(e){if(lu[e])return lu[e];if(!Vr[e])return e;var n=Vr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in pp)return lu[e]=n[a];return e}var mp=or("animationend"),gp=or("animationiteration"),_p=or("animationstart"),ox=or("transitionrun"),lx=or("transitionstart"),cx=or("transitioncancel"),vp=or("transitionend"),xp=new Map,cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cu.push("scrollEnd");function Si(e,n){xp.set(e,n),ie(n,[e])}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],kr=0,uu=0;function dl(){for(var e=kr,n=uu=kr=0;n<e;){var a=ri[n];ri[n++]=null;var s=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&Sp(a,u,f)}}function hl(e,n,a,s){ri[kr++]=e,ri[kr++]=n,ri[kr++]=a,ri[kr++]=s,uu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function fu(e,n,a,s){return hl(e,n,a,s),pl(e)}function lr(e,n){return hl(e,null,null,n),pl(e)}function Sp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Fe(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function pl(e){if(50<Eo)throw Eo=0,yf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xr={};function ux(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,s){return new ux(e,n,a,s)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function yp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ml(e,n,a,s,u,f){var S=0;if(s=e,typeof e=="function")du(e)&&(S=1);else if(typeof e=="string")S=mS(e,a,be.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case A:return e=Yn(31,a,n,u),e.elementType=A,e.lanes=f,e;case T:return cr(a.children,u,f,n);case M:S=8,u|=24;break;case _:return e=Yn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case z:return e=Yn(13,a,n,u),e.elementType=z,e.lanes=f,e;case B:return e=Yn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:S=10;break e;case w:S=9;break e;case L:S=11;break e;case P:S=14;break e;case q:S=16,s=null;break e}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Yn(S,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function cr(e,n,a,s){return e=Yn(7,e,s,n),e.lanes=a,e}function hu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function Mp(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function pu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ep=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Ep.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Ep.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var Wr=[],qr=0,gl=null,to=0,oi=[],li=0,Aa=null,Ui=1,Ni="";function ji(e,n){Wr[qr++]=to,Wr[qr++]=gl,gl=e,to=n}function bp(e,n,a){oi[li++]=Ui,oi[li++]=Ni,oi[li++]=Aa,Aa=e;var s=Ui;e=Ni;var u=32-Fe(s)-1;s&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Ui=1<<32-Fe(n)+u|a<<u|s,Ni=f+e}else Ui=1<<f|a<<u|s,Ni=e}function mu(e){e.return!==null&&(ji(e,1),bp(e,1,0))}function gu(e){for(;e===gl;)gl=Wr[--qr],Wr[qr]=null,to=Wr[--qr],Wr[qr]=null;for(;e===Aa;)Aa=oi[--li],oi[li]=null,Ni=oi[--li],oi[li]=null,Ui=oi[--li],oi[li]=null}function Tp(e,n){oi[li++]=Ui,oi[li++]=Ni,oi[li++]=Aa,Ui=n.id,Ni=n.overflow,Aa=e}var An=null,Zt=null,Et=!1,Ra=null,ci=!1,_u=Error(r(519));function Ca(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw no(si(n,e)),_u}function Ap(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[sn]=e,n[Sn]=s,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)St(To[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Xi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),En(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||k0(n.textContent,a)?(s.popover!=null&&(St("beforetoggle",n),St("toggle",n)),s.onScroll!=null&&St("scroll",n),s.onScrollEnd!=null&&St("scrollend",n),s.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ca(e,!0)}function Rp(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:An=An.return}}function Yr(e){if(e!==An)return!1;if(!Et)return Rp(e),Et=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&Zt&&Ca(e),Rp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=J0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=J0(e)}else n===27?(n=Zt,Va(e.type)?(e=Gf,Gf=null,Zt=e):Zt=n):Zt=An?fi(e.stateNode.nextSibling):null;return!0}function ur(){Zt=An=null,Et=!1}function vu(){var e=Ra;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Ra=null),e}function no(e){Ra===null?Ra=[e]:Ra.push(e)}var xu=N(null),fr=null,Zi=null;function wa(e,n,a){fe(xu,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=xu.current,Z(xu)}function Su(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function yu(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var I=0;I<n.length;I++)if(R.context===n[I]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Su(f.return,a,e),s||(S=null);break e}f=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Su(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function jr(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=u.type;qn(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===de.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Do):e=[Do])}u=u.return}e!==null&&yu(n,e,a,s),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dr(e){fr=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Cp(fr,e)}function vl(e,n){return fr===null&&dr(e),Cp(e,n)}function Cp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(r(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var fx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},dx=o.unstable_scheduleCallback,hx=o.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new fx,data:new Map,refCount:0}}function io(e){e.refCount--,e.refCount===0&&dx(hx,function(){e.controller.abort()})}var ao=null,Eu=0,Zr=0,Kr=null;function px(e,n){if(ao===null){var a=ao=[];Eu=0,Zr=Rf(),Kr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Eu++,n.then(wp,wp),n}function wp(){if(--Eu===0&&ao!==null){Kr!==null&&(Kr.status="fulfilled");var e=ao;ao=null,Zr=0,Kr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function mx(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Dp=F.S;F.S=function(e,n){h0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&px(e,n),Dp!==null&&Dp(e,n)};var hr=N(null);function bu(){var e=hr.current;return e!==null?e:Yt.pooledCache}function xl(e,n){n===null?fe(hr,hr.current):fe(hr,n.pool)}function Up(){var e=bu();return e===null?null:{parent:on._currentValue,pool:e}}var Qr=Error(r(460)),Tu=Error(r(474)),Sl=Error(r(542)),yl={then:function(){}};function Np(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=Yt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pp(e),e}throw mr=n,Qr}}function pr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,Qr):a}}var mr=null;function Op(){if(mr===null)throw Error(r(459));var e=mr;return mr=null,e}function Pp(e){if(e===Qr||e===Sl)throw Error(r(483))}var Jr=null,ro=0;function Ml(e){var n=ro;return ro+=1,Jr===null&&(Jr=[]),Lp(Jr,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function El(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function zp(e){function n(j,k){if(e){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function s(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=Yi(j,k),j.index=0,j.sibling=null,j}function f(j,k,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function S(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function R(j,k,$,_e){return k===null||k.tag!==6?(k=hu($,j.mode,_e),k.return=j,k):(k=u(k,$),k.return=j,k)}function I(j,k,$,_e){var et=$.type;return et===T?me(j,k,$.props.children,_e,$.key):k!==null&&(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===q&&pr(et)===k.type)?(k=u(k,$.props),so(k,$),k.return=j,k):(k=ml($.type,$.key,$.props,null,j.mode,_e),so(k,$),k.return=j,k)}function te(j,k,$,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=pu($,j.mode,_e),k.return=j,k):(k=u(k,$.children||[]),k.return=j,k)}function me(j,k,$,_e,et){return k===null||k.tag!==7?(k=cr($,j.mode,_e,et),k.return=j,k):(k=u(k,$),k.return=j,k)}function xe(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=hu(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return $=ml(k.type,k.key,k.props,null,j.mode,$),so($,k),$.return=j,$;case b:return k=pu(k,j.mode,$),k.return=j,k;case q:return k=pr(k),xe(j,k,$)}if(ue(k)||J(k))return k=cr(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return xe(j,Ml(k),$);if(k.$$typeof===U)return xe(j,vl(j,k),$);El(j,k)}return null}function ae(j,k,$,_e){var et=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return et!==null?null:R(j,k,""+$,_e);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===et?I(j,k,$,_e):null;case b:return $.key===et?te(j,k,$,_e):null;case q:return $=pr($),ae(j,k,$,_e)}if(ue($)||J($))return et!==null?null:me(j,k,$,_e,null);if(typeof $.then=="function")return ae(j,k,Ml($),_e);if($.$$typeof===U)return ae(j,k,vl(j,$),_e);El(j,$)}return null}function le(j,k,$,_e,et){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return j=j.get($)||null,R(k,j,""+_e,et);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case y:return j=j.get(_e.key===null?$:_e.key)||null,I(k,j,_e,et);case b:return j=j.get(_e.key===null?$:_e.key)||null,te(k,j,_e,et);case q:return _e=pr(_e),le(j,k,$,_e,et)}if(ue(_e)||J(_e))return j=j.get($)||null,me(k,j,_e,et,null);if(typeof _e.then=="function")return le(j,k,$,Ml(_e),et);if(_e.$$typeof===U)return le(j,k,$,vl(k,_e),et);El(k,_e)}return null}function qe(j,k,$,_e){for(var et=null,wt=null,Ke=k,gt=k=0,Mt=null;Ke!==null&&gt<$.length;gt++){Ke.index>gt?(Mt=Ke,Ke=null):Mt=Ke.sibling;var Dt=ae(j,Ke,$[gt],_e);if(Dt===null){Ke===null&&(Ke=Mt);break}e&&Ke&&Dt.alternate===null&&n(j,Ke),k=f(Dt,k,gt),wt===null?et=Dt:wt.sibling=Dt,wt=Dt,Ke=Mt}if(gt===$.length)return a(j,Ke),Et&&ji(j,gt),et;if(Ke===null){for(;gt<$.length;gt++)Ke=xe(j,$[gt],_e),Ke!==null&&(k=f(Ke,k,gt),wt===null?et=Ke:wt.sibling=Ke,wt=Ke);return Et&&ji(j,gt),et}for(Ke=s(Ke);gt<$.length;gt++)Mt=le(Ke,j,gt,$[gt],_e),Mt!==null&&(e&&Mt.alternate!==null&&Ke.delete(Mt.key===null?gt:Mt.key),k=f(Mt,k,gt),wt===null?et=Mt:wt.sibling=Mt,wt=Mt);return e&&Ke.forEach(function(Ya){return n(j,Ya)}),Et&&ji(j,gt),et}function rt(j,k,$,_e){if($==null)throw Error(r(151));for(var et=null,wt=null,Ke=k,gt=k=0,Mt=null,Dt=$.next();Ke!==null&&!Dt.done;gt++,Dt=$.next()){Ke.index>gt?(Mt=Ke,Ke=null):Mt=Ke.sibling;var Ya=ae(j,Ke,Dt.value,_e);if(Ya===null){Ke===null&&(Ke=Mt);break}e&&Ke&&Ya.alternate===null&&n(j,Ke),k=f(Ya,k,gt),wt===null?et=Ya:wt.sibling=Ya,wt=Ya,Ke=Mt}if(Dt.done)return a(j,Ke),Et&&ji(j,gt),et;if(Ke===null){for(;!Dt.done;gt++,Dt=$.next())Dt=xe(j,Dt.value,_e),Dt!==null&&(k=f(Dt,k,gt),wt===null?et=Dt:wt.sibling=Dt,wt=Dt);return Et&&ji(j,gt),et}for(Ke=s(Ke);!Dt.done;gt++,Dt=$.next())Dt=le(Ke,j,gt,Dt.value,_e),Dt!==null&&(e&&Dt.alternate!==null&&Ke.delete(Dt.key===null?gt:Dt.key),k=f(Dt,k,gt),wt===null?et=Dt:wt.sibling=Dt,wt=Dt);return e&&Ke.forEach(function(AS){return n(j,AS)}),Et&&ji(j,gt),et}function Wt(j,k,$,_e){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:e:{for(var et=$.key;k!==null;){if(k.key===et){if(et=$.type,et===T){if(k.tag===7){a(j,k.sibling),_e=u(k,$.props.children),_e.return=j,j=_e;break e}}else if(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===q&&pr(et)===k.type){a(j,k.sibling),_e=u(k,$.props),so(_e,$),_e.return=j,j=_e;break e}a(j,k);break}else n(j,k);k=k.sibling}$.type===T?(_e=cr($.props.children,j.mode,_e,$.key),_e.return=j,j=_e):(_e=ml($.type,$.key,$.props,null,j.mode,_e),so(_e,$),_e.return=j,j=_e)}return S(j);case b:e:{for(et=$.key;k!==null;){if(k.key===et)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(j,k.sibling),_e=u(k,$.children||[]),_e.return=j,j=_e;break e}else{a(j,k);break}else n(j,k);k=k.sibling}_e=pu($,j.mode,_e),_e.return=j,j=_e}return S(j);case q:return $=pr($),Wt(j,k,$,_e)}if(ue($))return qe(j,k,$,_e);if(J($)){if(et=J($),typeof et!="function")throw Error(r(150));return $=et.call($),rt(j,k,$,_e)}if(typeof $.then=="function")return Wt(j,k,Ml($),_e);if($.$$typeof===U)return Wt(j,k,vl(j,$),_e);El(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(j,k.sibling),_e=u(k,$),_e.return=j,j=_e):(a(j,k),_e=hu($,j.mode,_e),_e.return=j,j=_e),S(j)):a(j,k)}return function(j,k,$,_e){try{ro=0;var et=Wt(j,k,$,_e);return Jr=null,et}catch(Ke){if(Ke===Qr||Ke===Sl)throw Ke;var wt=Yn(29,Ke,null,j.mode);return wt.lanes=_e,wt.return=j,wt}finally{}}}var gr=zp(!0),Fp=zp(!1),Da=!1;function Au(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Pt&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=pl(e),Sp(e,null,a),n}return hl(e,s,n,a),pl(e)}function oo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Gs(e,a)}}function Cu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var wu=!1;function lo(){if(wu){var e=Kr;if(e!==null)throw e}}function co(e,n,a,s){wu=!1;var u=e.updateQueue;Da=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var I=R,te=I.next;I.next=null,S===null?f=te:S.next=te,S=I;var me=e.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==S&&(R===null?me.firstBaseUpdate=te:R.next=te,me.lastBaseUpdate=I))}if(f!==null){var xe=u.baseState;S=0,me=te=I=null,R=f;do{var ae=R.lane&-536870913,le=ae!==R.lane;if(le?(yt&ae)===ae:(s&ae)===ae){ae!==0&&ae===Zr&&(wu=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=e,rt=R;ae=n;var Wt=a;switch(rt.tag){case 1:if(qe=rt.payload,typeof qe=="function"){xe=qe.call(Wt,xe,ae);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=rt.payload,ae=typeof qe=="function"?qe.call(Wt,xe,ae):qe,ae==null)break e;xe=g({},xe,ae);break e;case 2:Da=!0}}ae=R.callback,ae!==null&&(e.flags|=64,le&&(e.flags|=8192),le=u.callbacks,le===null?u.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(te=me=le,I=xe):me=me.next=le,S|=ae;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;le=R,R=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);me===null&&(I=xe),u.baseState=I,u.firstBaseUpdate=te,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Fa|=S,e.lanes=S,e.memoizedState=xe}}function Bp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Ip(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Bp(a[e],n)}var $r=N(null),bl=N(0);function Hp(e,n){e=ra,fe(bl,e),fe($r,n),ra=e|n.baseLanes}function Du(){fe(bl,ra),fe($r,$r.current)}function Uu(){ra=bl.current,Z($r),Z(bl)}var jn=N(null),ui=null;function La(e){var n=e.alternate;fe(tn,tn.current&1),fe(jn,e),ui===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(ui=e)}function Nu(e){fe(tn,tn.current),fe(jn,e),ui===null&&(ui=e)}function Gp(e){e.tag===22?(fe(tn,tn.current),fe(jn,e),ui===null&&(ui=e)):Oa()}function Oa(){fe(tn,tn.current),fe(jn,jn.current)}function Zn(e){Z(jn),ui===e&&(ui=null),Z(tn)}var tn=N(0);function Tl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||If(a)||Hf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,ht=null,kt=null,ln=null,Al=!1,es=!1,_r=!1,Rl=0,uo=0,ts=null,gx=0;function $t(){throw Error(r(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Ou(e,n,a,s,u,f){return Qi=f,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?bm:Zu,_r=!1,f=a(s,u),_r=!1,es&&(f=kp(n,a,s,u)),Vp(e),f}function Vp(e){F.H=po;var n=kt!==null&&kt.next!==null;if(Qi=0,ln=kt=ht=null,Al=!1,uo=0,ts=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&_l(e)&&(cn=!0))}function kp(e,n,a,s){ht=e;var u=0;do{if(es&&(ts=null),uo=0,es=!1,25<=u)throw Error(r(301));if(u+=1,ln=kt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=Tm,f=n(a,s)}while(es);return f}function _x(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?fo(n):n,e=e.useState()[0],(kt!==null?kt.memoizedState:null)!==e&&(ht.flags|=1024),n}function Pu(){var e=Rl!==0;return Rl=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fu(e){if(Al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Al=!1}Qi=0,ln=kt=ht=null,es=!1,uo=Rl=0,ts=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ht.memoizedState=ln=e:ln=ln.next=e,ln}function nn(){if(kt===null){var e=ht.alternate;e=e!==null?e.memoizedState:null}else e=kt.next;var n=ln===null?ht.memoizedState:ln.next;if(n!==null)ln=n,kt=e;else{if(e===null)throw ht.alternate===null?Error(r(467)):Error(r(310));kt=e,e={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},ln===null?ht.memoizedState=ln=e:ln=ln.next=e}return ln}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(e){var n=uo;return uo+=1,ts===null&&(ts=[]),e=Lp(ts,e,n),n=ht,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?bm:Zu),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fo(e);if(e.$$typeof===U)return Rn(e)}throw Error(r(438,String(e)))}function Bu(e){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ht.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=D;return n.index++,a}function Ji(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=nn();return Iu(n,kt,e)}function Iu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=S=null,I=null,te=n,me=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(yt&xe)===xe:(Qi&xe)===xe){var ae=te.revertLane;if(ae===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===Zr&&(me=!0);else if((Qi&ae)===ae){te=te.next,ae===Zr&&(me=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},I===null?(R=I=xe,S=f):I=I.next=xe,ht.lanes|=ae,Fa|=ae;xe=te.action,_r&&a(f,xe),f=te.hasEagerState?te.eagerState:a(f,xe)}else ae={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},I===null?(R=I=ae,S=f):I=I.next=ae,ht.lanes|=xe,Fa|=xe;te=te.next}while(te!==null&&te!==n);if(I===null?S=f:I.next=R,!qn(f,e.memoizedState)&&(cn=!0,me&&(a=Kr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=I,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Hu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);qn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Xp(e,n,a){var s=ht,u=nn(),f=Et;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!qn((kt||u).memoizedState,a);if(S&&(u.memoizedState=a,cn=!0),u=u.queue,ku(Yp.bind(null,s,u,e),[e]),u.getSnapshot!==n||S||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,ns(9,{destroy:void 0},qp.bind(null,s,u,a,n),null),Yt===null)throw Error(r(349));f||(Qi&127)!==0||Wp(s,n,a)}return a}function Wp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Cl(),ht.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function qp(e,n,a,s){n.value=a,n.getSnapshot=s,jp(n)&&Zp(e)}function Yp(e,n,a){return a(function(){jp(n)&&Zp(e)})}function jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function Zp(e){var n=lr(e,2);n!==null&&kn(n,e,2)}function Gu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),_r){Ie(!0);try{a()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},n}function Kp(e,n,a,s){return e.baseState=a,Iu(e,kt,typeof s=="function"?s:Ji)}function vx(e,n,a,s,u){if(Ll(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};F.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Qp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Qp(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=F.T,S={};F.T=S;try{var R=a(u,s),I=F.S;I!==null&&I(S,R),Jp(e,n,R)}catch(te){Vu(e,n,te)}finally{f!==null&&S.types!==null&&(f.types=S.types),F.T=f}}else try{f=a(u,s),Jp(e,n,f)}catch(te){Vu(e,n,te)}}function Jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){$p(e,n,s)},function(s){return Vu(e,n,s)}):$p(e,n,a)}function $p(e,n,a){n.status="fulfilled",n.value=a,em(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Qp(e,a)))}function Vu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,em(n),n=n.next;while(n!==s)}e.action=null}function em(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function tm(e,n){return n}function nm(e,n){if(Et){var a=Yt.formState;if(a!==null){e:{var s=ht;if(Et){if(Zt){t:{for(var u=Zt,f=ci;u.nodeType!==8;){if(!f){u=null;break t}if(u=fi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=fi(u.nextSibling),s=u.data==="F!";break e}}Ca(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tm,lastRenderedState:n},a.queue=s,a=ym.bind(null,ht,s),s.dispatch=a,s=Gu(!1),f=ju.bind(null,ht,!1,s.queue),s=zn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=vx.bind(null,ht,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function im(e){var n=nn();return am(n,kt,e)}function am(e,n,a){if(n=Iu(e,n,tm)[0],e=Dl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=fo(n)}catch(S){throw S===Qr?Sl:S}else s=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,ns(9,{destroy:void 0},xx.bind(null,u,a),null)),[s,f,e]}function xx(e,n){e.action=n}function rm(e){var n=nn(),a=kt;if(a!==null)return am(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function ns(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Cl(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function sm(){return nn().memoizedState}function Ul(e,n,a,s){var u=zn();ht.flags|=e,u.memoizedState=ns(1|n,{destroy:void 0},a,s===void 0?null:s)}function Nl(e,n,a,s){var u=nn();s=s===void 0?null:s;var f=u.memoizedState.inst;kt!==null&&s!==null&&Lu(s,kt.memoizedState.deps)?u.memoizedState=ns(n,f,a,s):(ht.flags|=e,u.memoizedState=ns(1|n,f,a,s))}function om(e,n){Ul(8390656,8,e,n)}function ku(e,n){Nl(2048,8,e,n)}function Sx(e){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=Cl(),ht.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function lm(e){var n=nn().memoizedState;return Sx({ref:n,nextImpl:e}),function(){if((Pt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function cm(e,n){return Nl(4,2,e,n)}function um(e,n){return Nl(4,4,e,n)}function fm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function dm(e,n,a){a=a!=null?a.concat([e]):null,Nl(4,4,fm.bind(null,n,e),a)}function Xu(){}function hm(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Lu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function pm(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Lu(n,s[1]))return s[0];if(s=e(),_r){Ie(!0);try{e()}finally{Ie(!1)}}return a.memoizedState=[s,n],s}function Wu(e,n,a){return a===void 0||(Qi&1073741824)!==0&&(yt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=m0(),ht.lanes|=e,Fa|=e,a)}function mm(e,n,a,s){return qn(a,n)?a:$r.current!==null?(e=Wu(e,a,s),qn(e,n)||(cn=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(yt&261930)===0?(cn=!0,e.memoizedState=a):(e=m0(),ht.lanes|=e,Fa|=e,n)}function gm(e,n,a,s,u){var f=H.p;H.p=f!==0&&8>f?f:8;var S=F.T,R={};F.T=R,ju(e,!1,n,a);try{var I=u(),te=F.S;if(te!==null&&te(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var me=mx(I,s);ho(e,n,me,Jn(e))}else ho(e,n,s,Jn(e))}catch(xe){ho(e,n,{then:function(){},status:"rejected",reason:xe},Jn())}finally{H.p=f,S!==null&&R.types!==null&&(S.types=R.types),F.T=S}}function yx(){}function qu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=_m(e).queue;gm(e,u,n,ne,a===null?yx:function(){return vm(e),a(s)})}function _m(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function vm(e){var n=_m(e);n.next===null&&(n=e.alternate.memoizedState),ho(e,n.next.queue,{},Jn())}function Yu(){return Rn(Do)}function xm(){return nn().memoizedState}function Sm(){return nn().memoizedState}function Mx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=Ua(a);var s=Na(n,e,a);s!==null&&(kn(s,n,a),oo(s,n,a)),n={cache:Mu()},e.payload=n;return}n=n.return}}function Ex(e,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ll(e)?Mm(n,a):(a=fu(e,n,a,s),a!==null&&(kn(a,e,s),Em(a,n,s)))}function ym(e,n,a){var s=Jn();ho(e,n,a,s)}function ho(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ll(e))Mm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,R=f(S,a);if(u.hasEagerState=!0,u.eagerState=R,qn(R,S))return hl(e,n,u,0),Yt===null&&dl(),!1}catch{}finally{}if(a=fu(e,n,u,s),a!==null)return kn(a,e,s),Em(a,n,s),!0}return!1}function ju(e,n,a,s){if(s={lane:2,revertLane:Rf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ll(e)){if(n)throw Error(r(479))}else n=fu(e,a,s,2),n!==null&&kn(n,e,2)}function Ll(e){var n=e.alternate;return e===ht||n!==null&&n===ht}function Mm(e,n){es=Al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Em(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Gs(e,a)}}var po={readContext:Rn,use:wl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};po.useEffectEvent=$t;var bm={readContext:Rn,use:wl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:om,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,fm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var s=e();if(_r){Ie(!0);try{e()}finally{Ie(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=zn();if(a!==void 0){var u=a(n);if(_r){Ie(!0);try{a(n)}finally{Ie(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=Ex.bind(null,ht,e),[s.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Gu(e);var n=e.queue,a=ym.bind(null,ht,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(e,n){var a=zn();return Wu(a,e,n)},useTransition:function(){var e=Gu(!1);return e=gm.bind(null,ht,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ht,u=zn();if(Et){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(yt&127)!==0||Wp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,om(Yp.bind(null,s,f,e),[e]),s.flags|=2048,ns(9,{destroy:void 0},qp.bind(null,s,f,a,n),null),a},useId:function(){var e=zn(),n=Yt.identifierPrefix;if(Et){var a=Ni,s=Ui;a=(s&~(1<<32-Fe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:nm,useActionState:nm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,ht,!0,a),a.dispatch=n,[e,n]},useMemoCache:Bu,useCacheRefresh:function(){return zn().memoizedState=Mx.bind(null,ht)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:Rn,use:wl,useCallback:hm,useContext:Rn,useEffect:ku,useImperativeHandle:dm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Dl,useRef:sm,useState:function(){return Dl(Ji)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=nn();return mm(a,kt.memoizedState,e,n)},useTransition:function(){var e=Dl(Ji)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:Xp,useId:xm,useHostTransitionStatus:Yu,useFormState:im,useActionState:im,useOptimistic:function(e,n){var a=nn();return Kp(a,kt,e,n)},useMemoCache:Bu,useCacheRefresh:Sm};Zu.useEffectEvent=lm;var Tm={readContext:Rn,use:wl,useCallback:hm,useContext:Rn,useEffect:ku,useImperativeHandle:dm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Hu,useRef:sm,useState:function(){return Hu(Ji)},useDebugValue:Xu,useDeferredValue:function(e,n){var a=nn();return kt===null?Wu(a,e,n):mm(a,kt.memoizedState,e,n)},useTransition:function(){var e=Hu(Ji)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:fo(e),n]},useSyncExternalStore:Xp,useId:xm,useHostTransitionStatus:Yu,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=nn();return kt!==null?Kp(a,kt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:Sm};Tm.useEffectEvent=lm;function Ku(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Jn(),u=Ua(s);u.payload=n,a!=null&&(u.callback=a),n=Na(e,u,s),n!==null&&(kn(n,e,s),oo(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Jn(),u=Ua(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(e,u,s),n!==null&&(kn(n,e,s),oo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),s=Ua(a);s.tag=2,n!=null&&(s.callback=n),n=Na(e,s,a),n!==null&&(kn(n,e,a),oo(n,e,a))}};function Am(e,n,a,s,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!$s(a,s)||!$s(u,f):!0}function Rm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Qu.enqueueReplaceState(n,n.state,null)}function vr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Cm(e){fl(e)}function wm(e){console.error(e)}function Dm(e){fl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Um(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ju(e,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function Nm(e){return e=Ua(e),e.tag=3,e}function Lm(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){Um(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Um(n,a,s),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function bx(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&jr(n,a,u,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?ql():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),bf(e,s,u)),!1;case 22:return a.flags|=65536,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),bf(e,s,u)),!1}throw Error(r(435,a.tag))}return bf(e,s,u),ql(),!1}if(Et)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==_u&&(e=Error(r(422),{cause:s}),no(si(e,a)))):(s!==_u&&(n=Error(r(423),{cause:s}),no(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=si(s,a),u=Ju(e.stateNode,s,u),Cu(e,u),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=si(f,a),Mo===null?Mo=[f]:Mo.push(f),en!==4&&(en=2),n===null)return!0;s=si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ju(a.stateNode,s,e),Cu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Nm(u),Lm(u,e,a,s),Cu(a,u),!1}a=a.return}while(a!==null);return!1}var $u=Error(r(461)),cn=!1;function Cn(e,n,a,s){n.child=e===null?Fp(n,null,a,s):gr(n,e.child,a,s)}function Om(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var R in s)R!=="ref"&&(S[R]=s[R])}else S=s;return dr(n),s=Ou(e,n,a,S,f,u),R=Pu(),e!==null&&!cn?(zu(e,n,u),$i(e,n,u)):(Et&&R&&mu(n),n.flags|=1,Cn(e,n,s,u),n.child)}function Pm(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,zm(e,n,f,s,u)):(e=ml(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!lf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:$s,a(S,s)&&e.ref===n.ref)return $i(e,n,u)}return n.flags|=1,e=Yi(f,s),e.ref=n.ref,e.return=n,n.child=e}function zm(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if($s(f,s)&&e.ref===n.ref)if(cn=!1,n.pendingProps=s=f,lf(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,$i(e,n,u)}return ef(e,n,a,s,u)}function Fm(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Bm(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xl(n,f!==null?f.cachePool:null),f!==null?Hp(n,f):Du(),Gp(n);else return s=n.lanes=536870912,Bm(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(xl(n,f.cachePool),Hp(n,f),Oa(),n.memoizedState=null):(e!==null&&xl(n,null),Du(),Oa());return Cn(e,n,u,a),n.child}function mo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Bm(e,n,a,s,u){var f=bu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&xl(n,null),Du(),Gp(n),e!==null&&jr(e,n,s,!0),n.childLanes=u,null}function Pl(e,n){return n=Fl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Im(e,n,a){return gr(n,e.child,null,a),e=Pl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function Tx(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Et){if(s.mode==="hidden")return e=Pl(n,s),n.lanes=536870912,mo(null,e);if(Nu(n),(e=Zt)?(e=Q0(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Mp(e),a.return=n,n.child=a,An=n,Zt=null)):e=null,e===null)throw Ca(n);return n.lanes=536870912,null}return Pl(n,s)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(Nu(n),u)if(n.flags&256)n.flags&=-257,n=Im(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||jr(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(s=Yt,s!==null&&(S=Lr(s,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,lr(e,S),kn(s,e,S),$u;ql(),n=Im(e,n,a)}else e=f.treeContext,Zt=fi(S.nextSibling),An=n,Et=!0,Ra=null,ci=!1,e!==null&&Tp(n,e),n=Pl(n,s),n.flags|=4096;return n}return e=Yi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ef(e,n,a,s,u){return dr(n),a=Ou(e,n,a,s,void 0,u),s=Pu(),e!==null&&!cn?(zu(e,n,u),$i(e,n,u)):(Et&&s&&mu(n),n.flags|=1,Cn(e,n,a,u),n.child)}function Hm(e,n,a,s,u,f){return dr(n),n.updateQueue=null,a=kp(n,s,a,u),Vp(e),s=Pu(),e!==null&&!cn?(zu(e,n,f),$i(e,n,f)):(Et&&s&&mu(n),n.flags|=1,Cn(e,n,a,f),n.child)}function Gm(e,n,a,s,u){if(dr(n),n.stateNode===null){var f=Xr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Au(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):Xr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ku(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Qu.enqueueReplaceState(f,f.state,null),co(n,s,f,u),lo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,I=vr(a,R);f.props=I;var te=f.context,me=a.contextType;S=Xr,typeof me=="object"&&me!==null&&(S=Rn(me));var xe=a.getDerivedStateFromProps;me=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||te!==S)&&Rm(n,f,s,S),Da=!1;var ae=n.memoizedState;f.state=ae,co(n,s,f,u),lo(),te=n.memoizedState,R||ae!==te||Da?(typeof xe=="function"&&(Ku(n,a,xe,s),te=n.memoizedState),(I=Da||Am(n,a,I,s,ae,te,S))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=te),f.props=s,f.state=te,f.context=S,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Ru(e,n),S=n.memoizedProps,me=vr(a,S),f.props=me,xe=n.pendingProps,ae=f.context,te=a.contextType,I=Xr,typeof te=="object"&&te!==null&&(I=Rn(te)),R=a.getDerivedStateFromProps,(te=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==xe||ae!==I)&&Rm(n,f,s,I),Da=!1,ae=n.memoizedState,f.state=ae,co(n,s,f,u),lo();var le=n.memoizedState;S!==xe||ae!==le||Da||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof R=="function"&&(Ku(n,a,R,s),le=n.memoizedState),(me=Da||Am(n,a,me,s,ae,le,I)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,le,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,le,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),f.props=s,f.state=le,f.context=I,s=me):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,zl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=gr(n,e.child,null,u),n.child=gr(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=$i(e,n,u),e}function Vm(e,n,a,s){return ur(),n.flags|=256,Cn(e,n,a,s),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:Up()}}function af(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function km(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Et){if(u?La(n):Oa(),(e=Zt)?(e=Q0(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Mp(e),a.return=n,n.child=a,An=n,Zt=null)):e=null,e===null)throw Ca(n);return Hf(e)?n.lanes=32:n.lanes=536870912,null}var R=s.children;return s=s.fallback,u?(Oa(),u=n.mode,R=Fl({mode:"hidden",children:R},u),s=cr(s,u,a,null),R.return=n,s.return=n,R.sibling=s,n.child=R,s=n.child,s.memoizedState=nf(a),s.childLanes=af(e,S,a),n.memoizedState=tf,mo(null,s)):(La(n),rf(n,R))}var I=e.memoizedState;if(I!==null&&(R=I.dehydrated,R!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(Oa(),n.child=e.child,n.flags|=128,n=null):(Oa(),R=s.fallback,u=n.mode,s=Fl({mode:"visible",children:s.children},u),R=cr(R,u,a,null),R.flags|=2,s.return=n,R.return=n,s.sibling=R,n.child=s,gr(n,e.child,null,a),s=n.child,s.memoizedState=nf(a),s.childLanes=af(e,S,a),n.memoizedState=tf,n=mo(null,s));else if(La(n),Hf(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var te=S.dgst;S=te,s=Error(r(419)),s.stack="",s.digest=S,no({value:s,source:null,stack:null}),n=sf(e,n,a)}else if(cn||jr(e,n,a,!1),S=(a&e.childLanes)!==0,cn||S){if(S=Yt,S!==null&&(s=Lr(S,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,lr(e,s),kn(S,e,s),$u;If(R)||ql(),n=sf(e,n,a)}else If(R)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Zt=fi(R.nextSibling),An=n,Et=!0,Ra=null,ci=!1,e!==null&&Tp(n,e),n=rf(n,s.children),n.flags|=4096);return n}return u?(Oa(),R=s.fallback,u=n.mode,I=e.child,te=I.sibling,s=Yi(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,te!==null?R=Yi(te,R):(R=cr(R,u,a,null),R.flags|=2),R.return=n,s.return=n,s.sibling=R,n.child=s,mo(null,s),s=n.child,R=e.child.memoizedState,R===null?R=nf(a):(u=R.cachePool,u!==null?(I=on._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Up(),R={baseLanes:R.baseLanes|a,cachePool:u}),s.memoizedState=R,s.childLanes=af(e,S,a),n.memoizedState=tf,mo(e.child,s)):(La(n),a=e.child,e=a.sibling,a=Yi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Fl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function sf(e,n,a){return gr(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Xm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Su(e.return,n,a)}function of(e,n,a,s,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=s,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function Wm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var S=tn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,fe(tn,S),Cn(e,n,s,a),s=Et?to:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xm(e,a,n);else if(e.tag===19)Xm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Tl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),of(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Tl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}of(n,!0,a,null,f,s);break;case"together":of(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(jr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Yi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Yi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function Ax(e,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),wa(n,on,e.memoizedState.cache),ur();break;case 27:case 5:we(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?km(e,n,a):(La(n),e=$i(e,n,a),e!==null?e.sibling:null);La(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(jr(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Wm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),fe(tn,tn.current),s)break;return null;case 22:return n.lanes=0,Fm(e,n,a,n.pendingProps);case 24:wa(n,on,e.memoizedState.cache)}return $i(e,n,a)}function qm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!lf(e,a)&&(n.flags&128)===0)return cn=!1,Ax(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Et&&(n.flags&1048576)!==0&&bp(n,to,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=pr(n.elementType),n.type=e,typeof e=="function")du(e)?(s=vr(e,s),n.tag=1,n=Gm(null,n,e,s,a)):(n.tag=0,n=ef(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=Om(null,n,e,s,a);break e}else if(u===P){n.tag=14,n=Pm(null,n,e,s,a);break e}}throw n=se(e)||e,Error(r(306,n,""))}}return n;case 0:return ef(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=vr(s,n.pendingProps),Gm(e,n,s,u,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Ru(e,n),co(n,s,null,a);var S=n.memoizedState;if(s=S.cache,wa(n,on,s),s!==f.cache&&yu(n,[on],a,!0),lo(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vm(e,n,s,a);break e}else if(s!==u){u=si(Error(r(424)),n),no(u),n=Vm(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Zt=fi(e.firstChild),An=n,Et=!0,Ra=null,ci=!0,a=Fp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ur(),s===u){n=$i(e,n,a);break e}Cn(e,n,s,a)}n=n.child}return n;case 26:return zl(e,n),e===null?(a=ig(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,e=n.pendingProps,s=$l(ee.current).createElement(a),s[sn]=n,s[Sn]=e,wn(s,a,e),C(s),n.stateNode=s):n.memoizedState=ig(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return we(n),e===null&&Et&&(s=n.stateNode=eg(n.type,n.pendingProps,ee.current),An=n,ci=!0,u=Zt,Va(n.type)?(Gf=u,Zt=fi(s.firstChild)):Zt=u),Cn(e,n,n.pendingProps.children,a),zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Et&&((u=s=Zt)&&(s=nS(s,n.type,n.pendingProps,ci),s!==null?(n.stateNode=s,An=n,Zt=fi(s.firstChild),ci=!1,u=!0):u=!1),u||Ca(n)),we(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,zf(u,f)?s=null:S!==null&&zf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Ou(e,n,_x,null,null,a),Do._currentValue=u),zl(e,n),Cn(e,n,s,a),n.child;case 6:return e===null&&Et&&((e=a=Zt)&&(a=iS(a,n.pendingProps,ci),a!==null?(n.stateNode=a,An=n,Zt=null,e=!0):e=!1),e||Ca(n)),null;case 13:return km(e,n,a);case 4:return Ce(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=gr(n,null,s,a):Cn(e,n,s,a),n.child;case 11:return Om(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,wa(n,n.type,s.value),Cn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,dr(n),u=Rn(u),s=s(u),n.flags|=1,Cn(e,n,s,a),n.child;case 14:return Pm(e,n,n.type,n.pendingProps,a);case 15:return zm(e,n,n.type,n.pendingProps,a);case 19:return Wm(e,n,a);case 31:return Tx(e,n,a);case 22:return Fm(e,n,a,n.pendingProps);case 24:return dr(n),s=Rn(on),e===null?(u=bu(),u===null&&(u=Yt,f=Mu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Au(n),wa(n,on,u)):((e.lanes&a)!==0&&(Ru(e,n),co(n,null,null,a),lo()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,on,s)):(s=f.cache,wa(n,on,s),s!==u.cache&&yu(n,[on],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ea(e){e.flags|=4}function cf(e,n,a,s,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(x0())e.flags|=8192;else throw mr=yl,Tu}else e.flags&=-16777217}function Ym(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lg(n))if(x0())e.flags|=8192;else throw mr=yl,Tu}function Bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Bt():536870912,e.lanes|=n,ss|=n)}function go(e,n){if(!Et)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Kt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Rx(e,n,a){var s=n.pendingProps;switch(gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ki(on),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yr(n)?ea(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vu())),Kt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ea(n),f!==null?(Kt(n),Ym(n,f)):(Kt(n),cf(n,u,null,s,a))):f?f!==e.memoizedState?(ea(n),Kt(n),Ym(n,f)):(Kt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&ea(n),Kt(n),cf(n,u,e,s,a)),null;case 27:if(ke(n),a=ee.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}e=be.current,Yr(n)?Ap(n):(e=eg(u,s,a),n.stateNode=e,ea(n))}return Kt(n),null;case 5:if(ke(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}if(f=be.current,Yr(n))Ap(n);else{var S=$l(ee.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?S.createElement("select",{is:s.is}):S.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?S.createElement(u,{is:s.is}):S.createElement(u)}}f[sn]=n,f[Sn]=s;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(wn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ea(n)}}return Kt(n),cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ea(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ee.current,Yr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=An,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||k0(e.nodeValue,a)),e||Ca(n,!0)}else e=$l(e).createTextNode(s),e[sn]=n,n.stateNode=e}return Kt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Yr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[sn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),e=!1}else a=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Kt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Yr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),Kt(n),null);case 4:return Ve(),e===null&&Uf(n.stateNode.containerInfo),Kt(n),null;case 10:return Ki(n.type),Kt(n),null;case 19:if(Z(tn),s=n.memoizedState,s===null)return Kt(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)go(s,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Tl(e),f!==null){for(n.flags|=128,go(s,!1),e=f.updateQueue,n.updateQueue=e,Bl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)yp(a,e),a=a.sibling;return fe(tn,tn.current&1|2),Et&&ji(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&E()>kl&&(n.flags|=128,u=!0,go(s,!1),n.lanes=4194304)}else{if(!u)if(e=Tl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Bl(n,e),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Et)return Kt(n),null}else 2*E()-s.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,u=!0,go(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=E(),e.sibling=null,a=tn.current,fe(tn,u?a&1|2:a&1),Et&&ji(n,s.treeForkCount),e):(Kt(n),null);case 22:case 23:return Zn(n),Uu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Z(hr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(on),Kt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Cx(e,n){switch(gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(on),Ve(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ke(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ur()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(tn),null;case 4:return Ve(),null;case 10:return Ki(n.type),null;case 22:case 23:return Zn(n),Uu(),e!==null&&Z(hr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(on),null;case 25:return null;default:return null}}function jm(e,n){switch(gu(n),n.tag){case 3:Ki(on),Ve();break;case 26:case 27:case 5:ke(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:Z(tn);break;case 10:Ki(n.type);break;case 22:case 23:Zn(n),Uu(),e!==null&&Z(hr);break;case 24:Ki(on)}}function _o(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(R){Gt(n,n.return,R)}}function Pa(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var S=s.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var I=a,te=R;try{te()}catch(me){Gt(u,I,me)}}}s=s.next}while(s!==f)}}catch(me){Gt(n,n.return,me)}}function Zm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ip(n,a)}catch(s){Gt(e,e.return,s)}}}function Km(e,n,a){a.props=vr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Gt(e,n,s)}}function vo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Gt(e,n,u)}}function Li(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Gt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(e,n,u)}else a.current=null}function Qm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Gt(e,e.return,u)}}function uf(e,n,a){try{var s=e.stateNode;Kx(s,e.type,a,n),s[Sn]=n}catch(u){Gt(e,e.return,u)}}function Jm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function ff(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(s!==4&&(s===27&&Va(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(df(e,n,a),e=e.sibling;e!==null;)df(e,n,a),e=e.sibling}function Il(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Il(e,n,a),e=e.sibling;e!==null;)Il(e,n,a),e=e.sibling}function $m(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,s,a),n[sn]=e,n[Sn]=a}catch(f){Gt(e,e.return,f)}}var ta=!1,un=!1,hf=!1,e0=typeof WeakSet=="function"?WeakSet:Set,vn=null;function wx(e,n){if(e=e.containerInfo,Of=sc,e=dp(e),ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,R=-1,I=-1,te=0,me=0,xe=e,ae=null;t:for(;;){for(var le;xe!==a||u!==0&&xe.nodeType!==3||(R=S+u),xe!==f||s!==0&&xe.nodeType!==3||(I=S+s),xe.nodeType===3&&(S+=xe.nodeValue.length),(le=xe.firstChild)!==null;)ae=xe,xe=le;for(;;){if(xe===e)break t;if(ae===a&&++te===u&&(R=S),ae===f&&++me===s&&(I=S),(le=xe.nextSibling)!==null)break;xe=ae,ae=xe.parentNode}xe=le}a=R===-1||I===-1?null:{start:R,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:e,selectionRange:a},sc=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var qe=vr(a.type,u);e=s.getSnapshotBeforeUpdate(qe,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(rt){Gt(a,a.return,rt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Bf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function t0(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),s&4&&_o(5,a);break;case 1:if(ia(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Gt(a,a.return,S)}else{var u=vr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Gt(a,a.return,S)}}s&64&&Zm(a),s&512&&vo(a,a.return);break;case 3:if(ia(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ip(e,n)}catch(S){Gt(a,a.return,S)}}break;case 27:n===null&&s&4&&$m(a);case 26:case 5:ia(e,a),n===null&&s&4&&Qm(a),s&512&&vo(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),s&4&&a0(e,a);break;case 13:ia(e,a),s&4&&r0(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bx.bind(null,a),aS(e,a))));break;case 22:if(s=a.memoizedState!==null||ta,!s){n=n!==null&&n.memoizedState!==null||un,u=ta;var f=un;ta=s,(un=n)&&!f?aa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),ta=u,un=f}break;case 30:break;default:ia(e,a)}}function n0(e){var n=e.alternate;n!==null&&(e.alternate=null,n0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ws(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,In=!1;function na(e,n,a){for(a=a.child;a!==null;)i0(e,n,a),a=a.sibling}function i0(e,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:un||Li(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Li(a,n);var s=Jt,u=In;Va(a.type)&&(Jt=a.stateNode,In=!1),na(e,n,a),Ro(a.stateNode),Jt=s,In=u;break;case 5:un||Li(a,n);case 6:if(s=Jt,u=In,Jt=null,na(e,n,a),Jt=s,In=u,Jt!==null)if(In)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Gt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Gt(a,n,f)}break;case 18:Jt!==null&&(In?(e=Jt,Z0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ps(e)):Z0(Jt,a.stateNode));break;case 4:s=Jt,u=In,Jt=a.stateNode.containerInfo,In=!0,na(e,n,a),Jt=s,In=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),un||Pa(4,a,n),na(e,n,a);break;case 1:un||(Li(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Km(a,n,s)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,na(e,n,a),un=s;break;default:na(e,n,a)}}function a0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ps(e)}catch(a){Gt(n,n.return,a)}}}function r0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ps(e)}catch(a){Gt(n,n.return,a)}}function Dx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new e0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new e0),n;default:throw Error(r(435,e.tag))}}function Hl(e,n){var a=Dx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Ix.bind(null,e,s);s.then(u,u)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(Va(R.type)){Jt=R.stateNode,In=!1;break e}break;case 5:Jt=R.stateNode,In=!1;break e;case 3:case 4:Jt=R.stateNode.containerInfo,In=!0;break e}R=R.return}if(Jt===null)throw Error(r(160));i0(f,S,u),Jt=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)s0(n,e),n=n.sibling}var yi=null;function s0(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),s&4&&(Pa(3,e,e.return),_o(3,e),Pa(5,e,e.return));break;case 1:Hn(n,e),Gn(e),s&512&&(un||a===null||Li(a,a.return)),s&64&&ta&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=yi;if(Hn(n,e),Gn(e),s&512&&(un||a===null||Li(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ir]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,s,a),f[sn]=e,C(f),s=f;break e;case"link":var S=sg("link","href",u).get(s+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(f=S[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break t}}f=u.createElement(s),wn(f,s,a),u.head.appendChild(f);break;case"meta":if(S=sg("meta","content",u).get(s+(a.content||""))){for(R=0;R<S.length;R++)if(f=S[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break t}}f=u.createElement(s),wn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=e,C(f),s=f}e.stateNode=s}else og(u,e.type,e.stateNode);else e.stateNode=rg(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?og(u,e.type,e.stateNode):rg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&uf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),s&512&&(un||a===null||Li(a,a.return)),a!==null&&s&4&&uf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),s&512&&(un||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(qe){Gt(e,e.return,qe)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,uf(e,u,a!==null?a.memoizedProps:u)),s&1024&&(hf=!0);break;case 6:if(Hn(n,e),Gn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(qe){Gt(e,e.return,qe)}}break;case 3:if(nc=null,u=yi,yi=ec(n.containerInfo),Hn(n,e),yi=u,Gn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(qe){Gt(e,e.return,qe)}hf&&(hf=!1,o0(e));break;case 4:s=yi,yi=ec(e.stateNode.containerInfo),Hn(n,e),Gn(e),yi=s;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Hl(e,s)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vl=E()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Hl(e,s)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,te=ta,me=un;if(ta=te||u,un=me||I,Hn(n,e),un=me,ta=te,Gn(e),s&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||ta||un||xr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=I.stateNode;var xe=I.memoizedProps.style,ae=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(qe){Gt(I,I.return,qe)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(qe){Gt(I,I.return,qe)}}}else if(n.tag===18){if(a===null){I=n;try{var le=I.stateNode;u?K0(le,!0):K0(I.stateNode,!1)}catch(qe){Gt(I,I.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Hl(e,a))));break;case 19:Hn(n,e),Gn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Hl(e,s)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Jm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=ff(e);Il(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(pn(S,""),a.flags&=-33);var R=ff(e);Il(e,R,S);break;case 3:case 4:var I=a.stateNode.containerInfo,te=ff(e);df(e,te,I);break;default:throw Error(r(161))}}catch(me){Gt(e,e.return,me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function o0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;o0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)t0(e,n.alternate,n),n=n.sibling}function xr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),xr(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Km(n,n.return,a),xr(n);break;case 27:Ro(n.stateNode);case 26:case 5:Li(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}e=e.sibling}}function aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:aa(u,f,a),_o(4,f);break;case 1:if(aa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Gt(s,s.return,te)}if(s=f,u=s.updateQueue,u!==null){var R=s.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Bp(I[u],R)}catch(te){Gt(s,s.return,te)}}a&&S&64&&Zm(f),vo(f,f.return);break;case 27:$m(f);case 26:case 5:aa(u,f,a),a&&s===null&&S&4&&Qm(f),vo(f,f.return);break;case 12:aa(u,f,a);break;case 31:aa(u,f,a),a&&S&4&&a0(u,f);break;case 13:aa(u,f,a),a&&S&4&&r0(u,f);break;case 22:f.memoizedState===null&&aa(u,f,a),vo(f,f.return);break;case 30:break;default:aa(u,f,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&io(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e))}function Mi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)l0(e,n,a,s),n=n.sibling}function l0(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,s),u&2048&&_o(9,n);break;case 1:Mi(e,n,a,s);break;case 3:Mi(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&io(e)));break;case 12:if(u&2048){Mi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,R=f.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Gt(n,n.return,I)}}else Mi(e,n,a,s);break;case 31:Mi(e,n,a,s);break;case 13:Mi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,s):xo(e,n):f._visibility&2?Mi(e,n,a,s):(f._visibility|=2,is(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&pf(S,n);break;case 24:Mi(e,n,a,s),u&2048&&mf(n.alternate,n);break;default:Mi(e,n,a,s)}}function is(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,R=a,I=s,te=S.flags;switch(S.tag){case 0:case 11:case 15:is(f,S,R,I,u),_o(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?is(f,S,R,I,u):xo(f,S):(me._visibility|=2,is(f,S,R,I,u)),u&&te&2048&&pf(S.alternate,S);break;case 24:is(f,S,R,I,u),u&&te&2048&&mf(S.alternate,S);break;default:is(f,S,R,I,u)}n=n.sibling}}function xo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:xo(a,s),u&2048&&pf(s.alternate,s);break;case 24:xo(a,s),u&2048&&mf(s.alternate,s);break;default:xo(a,s)}n=n.sibling}}var So=8192;function as(e,n,a){if(e.subtreeFlags&So)for(e=e.child;e!==null;)c0(e,n,a),e=e.sibling}function c0(e,n,a){switch(e.tag){case 26:as(e,n,a),e.flags&So&&e.memoizedState!==null&&gS(a,yi,e.memoizedState,e.memoizedProps);break;case 5:as(e,n,a);break;case 3:case 4:var s=yi;yi=ec(e.stateNode.containerInfo),as(e,n,a),yi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=So,So=16777216,as(e,n,a),So=s):as(e,n,a));break;default:as(e,n,a)}}function u0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function yo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,d0(s,e)}u0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)f0(e),e=e.sibling}function f0(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Gl(e)):yo(e);break;default:yo(e)}}function Gl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,d0(s,e)}u0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}e=e.sibling}}function d0(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:io(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,vn=s;else e:for(a=e;vn!==null;){s=vn;var u=s.sibling,f=s.return;if(n0(s),s===a){vn=null;break e}if(u!==null){u.return=f,vn=u;break e}vn=f}}}var Ux={getCacheForType:function(e){var n=Rn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(on).controller.signal}},Nx=typeof WeakMap=="function"?WeakMap:Map,Pt=0,Yt=null,xt=null,yt=0,Ht=0,Kn=null,za=!1,rs=!1,gf=!1,ra=0,en=0,Fa=0,Sr=0,_f=0,Qn=0,ss=0,Mo=null,Vn=null,vf=!1,Vl=0,h0=0,kl=1/0,Xl=null,Ba=null,mn=0,Ia=null,os=null,sa=0,xf=0,Sf=null,p0=null,Eo=0,yf=null;function Jn(){return(Pt&2)!==0&&yt!==0?yt&-yt:F.T!==null?Rf():ks()}function m0(){if(Qn===0)if((yt&536870912)===0||Et){var e=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),Qn=e}else Qn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Qn}function kn(e,n,a){(e===Yt&&(Ht===2||Ht===9)||e.cancelPendingCommit!==null)&&(ls(e,0),Ha(e,yt,Qn,!1)),Nn(e,a),((Pt&2)===0||e!==Yt)&&(e===Yt&&((Pt&2)===0&&(Sr|=a),en===4&&Ha(e,yt,Qn,!1)),Oi(e))}function g0(e,n,a){if((Pt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Re(e,n),u=s?Px(e,n):Ef(e,n,!0),f=s;do{if(u===0){rs&&!s&&Ha(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Lx(a)){u=Ef(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=e;u=Mo;var I=R.current.memoizedState.isDehydrated;if(I&&(ls(R,S).flags|=256),S=Ef(R,S,!1),S!==2){if(gf&&!I){R.errorRecoveryDisabledLanes|=f,Sr|=f,u=4;break e}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){ls(e,0),Ha(e,n,0,!0);break}e:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ha(s,n,Qn,!za);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Vl+300-E(),10<u)){if(Ha(s,n,Qn,!za),Se(s,0,!0)!==0)break e;sa=n,s.timeoutHandle=Y0(_0.bind(null,s,a,Vn,Xl,vf,n,Qn,Sr,ss,za,f,"Throttled",-0,0),u);break e}_0(s,a,Vn,Xl,vf,n,Qn,Sr,ss,za,f,null,-0,0)}}break}while(!0);Oi(e)}function _0(e,n,a,s,u,f,S,R,I,te,me,xe,ae,le){if(e.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},c0(n,f,xe);var qe=(f&62914560)===f?Vl-E():(f&4194048)===f?h0-E():0;if(qe=_S(xe,qe),qe!==null){sa=f,e.cancelPendingCommit=qe(T0.bind(null,e,n,f,a,s,u,S,R,I,me,xe,null,ae,le)),Ha(e,f,S,!te);return}}T0(e,n,f,a,s,u,S,R,I)}function Lx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(e,n,a,s){n&=~_f,n&=~Sr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&nl(e,a,n)}function Wl(){return(Pt&6)===0?(bo(0),!1):!0}function Mf(){if(xt!==null){if(Ht===0)var e=xt.return;else e=xt,Zi=fr=null,Fu(e),Jr=null,ro=0,e=xt;for(;e!==null;)jm(e.alternate,e),e=e.return;xt=null}}function ls(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,$x(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,Mf(),Yt=e,xt=a=Yi(e.current,null),yt=n,Ht=0,Kn=null,za=!1,rs=Re(e,n),gf=!1,ss=Qn=_f=Sr=Fa=en=0,Vn=Mo=null,vf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Fe(s),f=1<<u;n|=e[u],s&=~f}return ra=n,dl(),a}function v0(e,n){ht=null,F.H=po,n===Qr||n===Sl?(n=Op(),Ht=3):n===Tu?(n=Op(),Ht=4):Ht=n===$u?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,xt===null&&(en=1,Ol(e,si(n,e.current)))}function x0(){var e=jn.current;return e===null?!0:(yt&4194048)===yt?ui===null:(yt&62914560)===yt||(yt&536870912)!==0?e===ui:!1}function S0(){var e=F.H;return F.H=po,e===null?po:e}function y0(){var e=F.A;return F.A=Ux,e}function ql(){en=4,za||(yt&4194048)!==yt&&jn.current!==null||(rs=!0),(Fa&134217727)===0&&(Sr&134217727)===0||Yt===null||Ha(Yt,yt,Qn,!1)}function Ef(e,n,a){var s=Pt;Pt|=2;var u=S0(),f=y0();(Yt!==e||yt!==n)&&(Xl=null,ls(e,n)),n=!1;var S=en;e:do try{if(Ht!==0&&xt!==null){var R=xt,I=Kn;switch(Ht){case 8:Mf(),S=6;break e;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var te=Ht;if(Ht=0,Kn=null,cs(e,R,I,te),a&&rs){S=0;break e}break;default:te=Ht,Ht=0,Kn=null,cs(e,R,I,te)}}Ox(),S=en;break}catch(me){v0(e,me)}while(!0);return n&&e.shellSuspendCounter++,Zi=fr=null,Pt=s,F.H=u,F.A=f,xt===null&&(Yt=null,yt=0,dl()),S}function Ox(){for(;xt!==null;)M0(xt)}function Px(e,n){var a=Pt;Pt|=2;var s=S0(),u=y0();Yt!==e||yt!==n?(Xl=null,kl=E()+500,ls(e,n)):rs=Re(e,n);e:do try{if(Ht!==0&&xt!==null){n=xt;var f=Kn;t:switch(Ht){case 1:Ht=0,Kn=null,cs(e,n,f,1);break;case 2:case 9:if(Np(f)){Ht=0,Kn=null,E0(n);break}n=function(){Ht!==2&&Ht!==9||Yt!==e||(Ht=7),Oi(e)},f.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:Np(f)?(Ht=0,Kn=null,E0(n)):(Ht=0,Kn=null,cs(e,n,f,7));break;case 5:var S=null;switch(xt.tag){case 26:S=xt.memoizedState;case 5:case 27:var R=xt;if(S?lg(S):R.stateNode.complete){Ht=0,Kn=null;var I=R.sibling;if(I!==null)xt=I;else{var te=R.return;te!==null?(xt=te,Yl(te)):xt=null}break t}}Ht=0,Kn=null,cs(e,n,f,5);break;case 6:Ht=0,Kn=null,cs(e,n,f,6);break;case 8:Mf(),en=6;break e;default:throw Error(r(462))}}zx();break}catch(me){v0(e,me)}while(!0);return Zi=fr=null,F.H=s,F.A=u,Pt=a,xt!==null?0:(Yt=null,yt=0,dl(),en)}function zx(){for(;xt!==null&&!Xe();)M0(xt)}function M0(e){var n=qm(e.alternate,e,ra);e.memoizedProps=e.pendingProps,n===null?Yl(e):xt=n}function E0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hm(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Hm(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Fu(n);default:jm(a,n),n=xt=yp(n,ra),n=qm(a,n,ra)}e.memoizedProps=e.pendingProps,n===null?Yl(e):xt=n}function cs(e,n,a,s){Zi=fr=null,Fu(n),Jr=null,ro=0;var u=n.return;try{if(bx(e,u,n,a,yt)){en=1,Ol(e,si(a,e.current)),xt=null;return}}catch(f){if(u!==null)throw xt=u,f;en=1,Ol(e,si(a,e.current)),xt=null;return}n.flags&32768?(Et||s===1?e=!0:rs||(yt&536870912)!==0?e=!1:(za=e=!0,(s===2||s===9||s===3||s===6)&&(s=jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),b0(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){b0(n,za);return}e=n.return;var a=Rx(n.alternate,n,ra);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=e}while(n!==null);en===0&&(en=5)}function b0(e,n){do{var a=Cx(e.alternate,e);if(a!==null){a.flags&=32767,xt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xt=e;return}xt=e=a}while(e!==null);en=6,xt=null}function T0(e,n,a,s,u,f,S,R,I){e.cancelPendingCommit=null;do jl();while(mn!==0);if((Pt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=uu,_i(e,a,f,S,R,I),e===Yt&&(xt=Yt=null,yt=0),os=n,Ia=e,sa=a,xf=f,Sf=u,p0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hx(ce,function(){return D0(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null,u=H.p,H.p=2,S=Pt,Pt|=4;try{wx(e,n,a)}finally{Pt=S,H.p=u,F.T=s}}mn=1,A0(),R0(),C0()}}function A0(){if(mn===1){mn=0;var e=Ia,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var s=H.p;H.p=2;var u=Pt;Pt|=4;try{s0(n,e);var f=Pf,S=dp(e.containerInfo),R=f.focusedElem,I=f.selectionRange;if(S!==R&&R&&R.ownerDocument&&fp(R.ownerDocument.documentElement,R)){if(I!==null&&ru(R)){var te=I.start,me=I.end;if(me===void 0&&(me=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(me,R.value.length);else{var xe=R.ownerDocument||document,ae=xe&&xe.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),qe=R.textContent.length,rt=Math.min(I.start,qe),Wt=I.end===void 0?rt:Math.min(I.end,qe);!le.extend&&rt>Wt&&(S=Wt,Wt=rt,rt=S);var j=up(R,rt),k=up(R,Wt);if(j&&k&&(le.rangeCount!==1||le.anchorNode!==j.node||le.anchorOffset!==j.offset||le.focusNode!==k.node||le.focusOffset!==k.offset)){var $=xe.createRange();$.setStart(j.node,j.offset),le.removeAllRanges(),rt>Wt?(le.addRange($),le.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),le.addRange($))}}}}for(xe=[],le=R;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var _e=xe[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}sc=!!Of,Pf=Of=null}finally{Pt=u,H.p=s,F.T=a}}e.current=n,mn=2}}function R0(){if(mn===2){mn=0;var e=Ia,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var s=H.p;H.p=2;var u=Pt;Pt|=4;try{t0(e,n.alternate,n)}finally{Pt=u,H.p=s,F.T=a}}mn=3}}function C0(){if(mn===4||mn===3){mn=0,O();var e=Ia,n=os,a=sa,s=p0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,os=Ia=null,w0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ba=null),Or(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=F.T,u=H.p,H.p=2,F.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var R=s[S];f(R.value,{componentStack:R.stack})}}finally{F.T=n,H.p=u}}(sa&3)!==0&&jl(),Oi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===yf?Eo++:(Eo=0,yf=e):Eo=0,bo(0)}}function w0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,io(n)))}function jl(){return A0(),R0(),C0(),D0()}function D0(){if(mn!==5)return!1;var e=Ia,n=xf;xf=0;var a=Or(sa),s=F.T,u=H.p;try{H.p=32>a?32:a,F.T=null,a=Sf,Sf=null;var f=Ia,S=sa;if(mn=0,os=Ia=null,sa=0,(Pt&6)!==0)throw Error(r(331));var R=Pt;if(Pt|=4,f0(f.current),l0(f,f.current,S,a),Pt=R,bo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{H.p=u,F.T=s,w0(e,n)}}function U0(e,n,a){n=si(a,n),n=Ju(e.stateNode,n,2),e=Na(e,n,2),e!==null&&(Nn(e,2),Oi(e))}function Gt(e,n,a){if(e.tag===3)U0(e,e,a);else for(;n!==null;){if(n.tag===3){U0(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ba===null||!Ba.has(s))){e=si(a,e),a=Nm(2),s=Na(n,a,2),s!==null&&(Lm(a,s,n,e),Nn(s,2),Oi(s));break}}n=n.return}}function bf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Nx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(gf=!0,u.add(a),e=Fx.bind(null,e,n,a),n.then(e,e))}function Fx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Yt===e&&(yt&a)===a&&(en===4||en===3&&(yt&62914560)===yt&&300>E()-Vl?(Pt&2)===0&&ls(e,0):_f|=a,ss===yt&&(ss=0)),Oi(e)}function N0(e,n){n===0&&(n=Bt()),e=lr(e,n),e!==null&&(Nn(e,n),Oi(e))}function Bx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),N0(e,a)}function Ix(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),N0(e,a)}function Hx(e,n){return pt(e,n)}var Zl=null,us=null,Tf=!1,Kl=!1,Af=!1,Ga=0;function Oi(e){e!==us&&e.next===null&&(us===null?Zl=us=e:us=us.next=e),Kl=!0,Tf||(Tf=!0,Vx())}function bo(e,n){if(!Af&&Kl){Af=!0;do for(var a=!1,s=Zl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-Fe(42|e)+1)-1,f&=u&~(S&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,z0(s,f))}else f=yt,f=Se(s,s===Yt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Re(s,f)||(a=!0,z0(s,f));s=s.next}while(a);Af=!1}}function Gx(){L0()}function L0(){Kl=Tf=!1;var e=0;Ga!==0&&Jx()&&(e=Ga);for(var n=E(),a=null,s=Zl;s!==null;){var u=s.next,f=O0(s,n);f===0?(s.next=null,a===null?Zl=u:a.next=u,u===null&&(us=a)):(a=s,(e!==0||(f&3)!==0)&&(Kl=!0)),s=u}mn!==0&&mn!==5||bo(e),Ga!==0&&(Ga=0)}function O0(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Fe(f),R=1<<S,I=u[S];I===-1?((R&a)===0||(R&s)!==0)&&(u[S]=ct(R,n)):I<=n&&(e.expiredLanes|=R),f&=~R}if(n=Yt,a=yt,a=Se(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ht===2||Ht===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Ct(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Re(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Ct(s),Or(a)){case 2:case 8:a=ye;break;case 32:a=ce;break;case 268435456:a=De;break;default:a=ce}return s=P0.bind(null,e),a=pt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Ct(s),e.callbackPriority=2,e.callbackNode=null,2}function P0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var s=yt;return s=Se(e,e===Yt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(g0(e,s,n),O0(e,E()),e.callbackNode!=null&&e.callbackNode===a?P0.bind(null,e):null)}function z0(e,n){if(jl())return null;g0(e,n,!0)}function Vx(){eS(function(){(Pt&6)!==0?pt(ge,Gx):L0()})}function Rf(){if(Ga===0){var e=Zr;e===0&&(e=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Ga=e}return Ga}function F0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function B0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function kx(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=F0((u[Sn]||null).action),S=s.submitter;S&&(n=(n=S[Sn]||null)?F0(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var R=new ll("action","action",null,s,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ga!==0){var I=S?B0(u,S):new FormData(u);qu(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(R.preventDefault(),I=S?B0(u,S):new FormData(u),qu(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Cf=0;Cf<cu.length;Cf++){var wf=cu[Cf],Xx=wf.toLowerCase(),Wx=wf[0].toUpperCase()+wf.slice(1);Si(Xx,"on"+Wx)}Si(mp,"onAnimationEnd"),Si(gp,"onAnimationIteration"),Si(_p,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(ox,"onTransitionRun"),Si(lx,"onTransitionStart"),Si(cx,"onTransitionCancel"),Si(vp,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function I0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var R=s[S],I=R.instance,te=R.currentTarget;if(R=R.listener,I!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(me){fl(me)}u.currentTarget=null,f=I}else for(S=0;S<s.length;S++){if(R=s[S],I=R.instance,te=R.currentTarget,R=R.listener,I!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=te;try{f(u)}catch(me){fl(me)}u.currentTarget=null,f=I}}}}function St(e,n){var a=n[Pr];a===void 0&&(a=n[Pr]=new Set);var s=e+"__bubble";a.has(s)||(H0(n,e,2,!1),a.add(s))}function Df(e,n,a){var s=0;n&&(s|=4),H0(a,e,s,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Uf(e){if(!e[Ql]){e[Ql]=!0,Y.forEach(function(a){a!=="selectionchange"&&(qx.has(a)||Df(a,!1,e),Df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Df("selectionchange",!1,n))}}function H0(e,n,a,s){switch(mg(n)){case 2:var u=SS;break;case 8:u=yS;break;default:u=qf}a=u.bind(null,n,a,e),u=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Nf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var R=s.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=s.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=Ma(R),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){s=f=S;continue e}R=R.parentNode}}s=s.return}Wh(function(){var te=f,me=jc(a),xe=[];e:{var ae=xp.get(e);if(ae!==void 0){var le=ll,qe=e;switch(e){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":le=Iv;break;case"focusin":qe="focus",le=eu;break;case"focusout":qe="blur",le=eu;break;case"beforeblur":case"afterblur":le=eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Vv;break;case mp:case gp:case _p:le=Dv;break;case vp:le=Xv;break;case"scroll":case"scrollend":le=Tv;break;case"wheel":le=qv;break;case"copy":case"cut":case"paste":le=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Kh;break;case"toggle":case"beforetoggle":le=jv}var rt=(n&4)!==0,Wt=!rt&&(e==="scroll"||e==="scrollend"),j=rt?ae!==null?ae+"Capture":null:ae;rt=[];for(var k=te,$;k!==null;){var _e=k;if($=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||$===null||j===null||(_e=qs(k,j),_e!=null&&rt.push(Ao(k,_e,$))),Wt)break;k=k.return}0<rt.length&&(ae=new le(ae,qe,null,a,me),xe.push({event:ae,listeners:rt}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ae&&a!==Yc&&(qe=a.relatedTarget||a.fromElement)&&(Ma(qe)||qe[vi]))break e;if((le||ae)&&(ae=me.window===me?me:(ae=me.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(qe=a.relatedTarget||a.toElement,le=te,qe=qe?Ma(qe):null,qe!==null&&(Wt=c(qe),rt=qe.tag,qe!==Wt||rt!==5&&rt!==27&&rt!==6)&&(qe=null)):(le=null,qe=te),le!==qe)){if(rt=jh,_e="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(rt=Kh,_e="onPointerLeave",j="onPointerEnter",k="pointer"),Wt=le==null?ae:ar(le),$=qe==null?ae:ar(qe),ae=new rt(_e,k+"leave",le,a,me),ae.target=Wt,ae.relatedTarget=$,_e=null,Ma(me)===te&&(rt=new rt(j,k+"enter",qe,a,me),rt.target=$,rt.relatedTarget=Wt,_e=rt),Wt=_e,le&&qe)t:{for(rt=Yx,j=le,k=qe,$=0,_e=j;_e;_e=rt(_e))$++;_e=0;for(var et=k;et;et=rt(et))_e++;for(;0<$-_e;)j=rt(j),$--;for(;0<_e-$;)k=rt(k),_e--;for(;$--;){if(j===k||k!==null&&j===k.alternate){rt=j;break t}j=rt(j),k=rt(k)}rt=null}else rt=null;le!==null&&G0(xe,ae,le,rt,!1),qe!==null&&Wt!==null&&G0(xe,Wt,qe,rt,!0)}}e:{if(ae=te?ar(te):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var wt=ap;else if(np(ae))if(rp)wt=ax;else{wt=nx;var Ke=tx}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&xi(te.elementType)&&(wt=ap):wt=ix;if(wt&&(wt=wt(e,te))){ip(xe,wt,a,me);break e}Ke&&Ke(e,ae,te),e==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&Mn(ae,"number",ae.value)}switch(Ke=te?ar(te):window,e){case"focusin":(np(Ke)||Ke.contentEditable==="true")&&(Gr=Ke,su=te,eo=null);break;case"focusout":eo=su=Gr=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,hp(xe,a,me);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":hp(xe,a,me)}var gt;if(nu)e:{switch(e){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Hr?ep(e,a)&&(Mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Qh&&a.locale!=="ko"&&(Hr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Hr&&(gt=qh()):(Ta=me,Qc="value"in Ta?Ta.value:Ta.textContent,Hr=!0)),Ke=Jl(te,Mt),0<Ke.length&&(Mt=new Zh(Mt,e,null,a,me),xe.push({event:Mt,listeners:Ke}),gt?Mt.data=gt:(gt=tp(a),gt!==null&&(Mt.data=gt)))),(gt=Kv?Qv(e,a):Jv(e,a))&&(Mt=Jl(te,"onBeforeInput"),0<Mt.length&&(Ke=new Zh("onBeforeInput","beforeinput",null,a,me),xe.push({event:Ke,listeners:Mt}),Ke.data=gt)),kx(xe,e,te,a,me)}I0(xe,n)})}function Ao(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Jl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=qs(e,a),u!=null&&s.unshift(Ao(e,u,f)),u=qs(e,n),u!=null&&s.push(Ao(e,u,f))),e.tag===3)return s;e=e.return}return[]}function Yx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function G0(e,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var R=a,I=R.alternate,te=R.stateNode;if(R=R.tag,I!==null&&I===s)break;R!==5&&R!==26&&R!==27||te===null||(I=te,u?(te=qs(a,f),te!=null&&S.unshift(Ao(a,te,I))):u||(te=qs(a,f),te!=null&&S.push(Ao(a,te,I)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var jx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function V0(e){return(typeof e=="string"?e:""+e).replace(jx,`
`).replace(Zx,"")}function k0(e,n){return n=V0(n),V0(e)===n}function Xt(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||pn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&pn(e,""+s);break;case"className":it(e,"class",s);break;case"tabIndex":it(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":it(e,a,s);break;case"style":Fr(e,s,f);break;case"data":if(n!=="object"){it(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=al(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xt(e,n,"name",u.name,u,null),Xt(e,n,"formEncType",u.formEncType,u,null),Xt(e,n,"formMethod",u.formMethod,u,null),Xt(e,n,"formTarget",u.formTarget,u,null)):(Xt(e,n,"encType",u.encType,u,null),Xt(e,n,"method",u.method,u,null),Xt(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=al(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Wi);break;case"onScroll":s!=null&&St("scroll",e);break;case"onScrollEnd":s!=null&&St("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=al(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":St("beforetoggle",e),St("toggle",e),je(e,"popover",s);break;case"xlinkActuate":Ze(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ze(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ze(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ze(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ze(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ze(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ze(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ze(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ze(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":je(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ev.get(a)||a,je(e,a,s))}}function Lf(e,n,a,s,u,f){switch(a){case"style":Fr(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?pn(e,s):(typeof s=="number"||typeof s=="bigint")&&pn(e,""+s);break;case"onScroll":s!=null&&St("scroll",e);break;case"onScrollEnd":s!=null&&St("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):je(e,a,s)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",e),St("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(e,n,f,S,a,null)}}u&&Xt(e,n,"srcSet",a.srcSet,a,null),s&&Xt(e,n,"src",a.src,a,null);return;case"input":St("invalid",e);var R=f=S=u=null,I=null,te=null;for(s in a)if(a.hasOwnProperty(s)){var me=a[s];if(me!=null)switch(s){case"name":u=me;break;case"type":S=me;break;case"checked":I=me;break;case"defaultChecked":te=me;break;case"value":f=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:Xt(e,n,s,me,a,null)}}Xi(e,f,R,I,te,S,u,!1);return;case"select":St("invalid",e),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":S=R;break;case"multiple":s=R;default:Xt(e,n,u,R,a,null)}n=f,a=S,e.multiple=!!s,n!=null?ai(e,!!s,n,!1):a!=null&&ai(e,!!s,a,!0);return;case"textarea":St("invalid",e),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":s=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Xt(e,n,S,R,a,null)}En(e,s,u,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Xt(e,n,I,s,a,null)}return;case"dialog":St("beforetoggle",e),St("toggle",e),St("cancel",e),St("close",e);break;case"iframe":case"object":St("load",e);break;case"video":case"audio":for(s=0;s<To.length;s++)St(To[s],e);break;case"image":St("error",e),St("load",e);break;case"details":St("toggle",e);break;case"embed":case"source":case"link":St("error",e),St("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(s=a[te],s!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(e,n,te,s,a,null)}return;default:if(xi(n)){for(me in a)a.hasOwnProperty(me)&&(s=a[me],s!==void 0&&Lf(e,n,me,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Xt(e,n,R,s,a,null))}function Kx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,R=null,I=null,te=null,me=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":I=xe;default:s.hasOwnProperty(le)||Xt(e,n,le,null,s,xe)}}for(var ae in s){var le=s[ae];if(xe=a[ae],s.hasOwnProperty(ae)&&(le!=null||xe!=null))switch(ae){case"type":f=le;break;case"name":u=le;break;case"checked":te=le;break;case"defaultChecked":me=le;break;case"value":S=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==xe&&Xt(e,n,ae,le,s,xe)}}yn(e,S,R,I,te,me,f,u);return;case"select":le=S=R=ae=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":le=I;default:s.hasOwnProperty(f)||Xt(e,n,f,null,s,I)}for(u in s)if(f=s[u],I=a[u],s.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":ae=f;break;case"defaultValue":R=f;break;case"multiple":S=f;default:f!==I&&Xt(e,n,u,f,s,I)}n=R,a=S,s=le,ae!=null?ai(e,!!a,ae,!1):!!s!=!!a&&(n!=null?ai(e,!!a,n,!0):ai(e,!!a,a?[]:"",!1));return;case"textarea":le=ae=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xt(e,n,R,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":ae=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Xt(e,n,S,u,s,f)}It(e,ae,le);return;case"option":for(var qe in a)if(ae=a[qe],a.hasOwnProperty(qe)&&ae!=null&&!s.hasOwnProperty(qe))switch(qe){case"selected":e.selected=!1;break;default:Xt(e,n,qe,null,s,ae)}for(I in s)if(ae=s[I],le=a[I],s.hasOwnProperty(I)&&ae!==le&&(ae!=null||le!=null))switch(I){case"selected":e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Xt(e,n,I,ae,s,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)ae=a[rt],a.hasOwnProperty(rt)&&ae!=null&&!s.hasOwnProperty(rt)&&Xt(e,n,rt,null,s,ae);for(te in s)if(ae=s[te],le=a[te],s.hasOwnProperty(te)&&ae!==le&&(ae!=null||le!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:Xt(e,n,te,ae,s,le)}return;default:if(xi(n)){for(var Wt in a)ae=a[Wt],a.hasOwnProperty(Wt)&&ae!==void 0&&!s.hasOwnProperty(Wt)&&Lf(e,n,Wt,void 0,s,ae);for(me in s)ae=s[me],le=a[me],!s.hasOwnProperty(me)||ae===le||ae===void 0&&le===void 0||Lf(e,n,me,ae,s,le);return}}for(var j in a)ae=a[j],a.hasOwnProperty(j)&&ae!=null&&!s.hasOwnProperty(j)&&Xt(e,n,j,null,s,ae);for(xe in s)ae=s[xe],le=a[xe],!s.hasOwnProperty(xe)||ae===le||ae==null&&le==null||Xt(e,n,xe,ae,s,le)}function X0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,S=u.initiatorType,R=u.duration;if(f&&R&&X0(S)){for(S=0,R=u.responseEnd,s+=1;s<a.length;s++){var I=a[s],te=I.startTime;if(te>R)break;var me=I.transferSize,xe=I.initiatorType;me&&X0(xe)&&(I=I.responseEnd,S+=me*(I<R?1:(R-te)/(I-te)))}if(--s,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Of=null,Pf=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function W0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Jx(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var Y0=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(tS)}:Y0;function tS(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function Z0(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),ps(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Ro(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ro(a);for(var f=a.firstChild;f;){var S=f.nextSibling,R=f.nodeName;f[ir]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Ro(e.ownerDocument.body);a=u}while(a);ps(n)}function K0(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Bf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),Ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function nS(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ir])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function iS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function Q0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function If(e){return e.data==="$?"||e.data==="$~"}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function aS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Gf=null;function J0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function $0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function eg(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ro(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ws(e)}var di=new Map,tg=new Set;function ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=H.d;H.d={f:rS,r:sS,D:oS,C:lS,L:cS,m:uS,X:dS,S:fS,M:hS};function rS(){var e=oa.f(),n=Wl();return e||n}function sS(e){var n=Ea(e);n!==null&&n.tag===5&&n.type==="form"?vm(n):oa.r(e)}var fs=typeof document>"u"?null:document;function ng(e,n,a){var s=fs;if(s&&typeof n=="string"&&n){var u=ut(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),tg.has(u)||(tg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),wn(n,"link",e),C(n),s.head.appendChild(n)))}}function oS(e){oa.D(e),ng("dns-prefetch",e,null)}function lS(e,n){oa.C(e,n),ng("preconnect",e,n)}function cS(e,n,a){oa.L(e,n,a);var s=fs;if(s&&e&&n){var u='link[rel="preload"][as="'+ut(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ut(a.imageSizes)+'"]')):u+='[href="'+ut(e)+'"]';var f=u;switch(n){case"style":f=ds(e);break;case"script":f=hs(e)}di.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(Co(f))||n==="script"&&s.querySelector(wo(f))||(n=s.createElement("link"),wn(n,"link",e),C(n),s.head.appendChild(n)))}}function uS(e,n){oa.m(e,n);var a=fs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ut(s)+'"][href="'+ut(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hs(e)}if(!di.has(f)&&(e=g({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(f)))return}s=a.createElement("link"),wn(s,"link",e),C(s),a.head.appendChild(s)}}}function fS(e,n,a){oa.S(e,n,a);var s=fs;if(s&&e){var u=ba(s).hoistableStyles,f=ds(e);n=n||"default";var S=u.get(f);if(!S){var R={loading:0,preload:null};if(S=s.querySelector(Co(f)))R.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Vf(e,a);var I=S=s.createElement("link");C(I),wn(I,"link",e),I._p=new Promise(function(te,me){I.onload=te,I.onerror=me}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,tc(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(f,S)}}}function dS(e,n){oa.X(e,n);var a=fs;if(a&&e){var s=ba(a).hoistableScripts,u=hs(e),f=s.get(u);f||(f=a.querySelector(wo(u)),f||(e=g({src:e,async:!0},n),(n=di.get(u))&&kf(e,n),f=a.createElement("script"),C(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function hS(e,n){oa.M(e,n);var a=fs;if(a&&e){var s=ba(a).hoistableScripts,u=hs(e),f=s.get(u);f||(f=a.querySelector(wo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=di.get(u))&&kf(e,n),f=a.createElement("script"),C(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function ig(e,n,a,s){var u=(u=ee.current)?ec(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ds(a.href),a=ba(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ds(a.href);var f=ba(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Co(e)))&&!f._p&&(S.instance=f,S.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||pS(u,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hs(a),a=ba(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ds(e){return'href="'+ut(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function ag(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function pS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),wn(n,"link",a),C(n),e.head.appendChild(n))}function hs(e){return'[src="'+ut(e)+'"]'}function wo(e){return"script[async]"+e}function rg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+ut(a.href)+'"]');if(s)return n.instance=s,C(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),C(s),wn(s,"style",u),tc(s,a.precedence,e),n.instance=s;case"stylesheet":u=ds(a.href);var f=e.querySelector(Co(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;s=ag(a),(u=di.get(u))&&Vf(s,u),f=(e.ownerDocument||e).createElement("link"),C(f);var S=f;return S._p=new Promise(function(R,I){S.onload=R,S.onerror=I}),wn(f,"link",s),n.state.loading|=4,tc(f,a.precedence,e),n.instance=f;case"script":return f=hs(a.src),(u=e.querySelector(wo(f)))?(n.instance=u,C(u),u):(s=a,(u=di.get(f))&&(s=g({},a),kf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),wn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,tc(s,a.precedence,e));return n.instance}function tc(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var R=s[S];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nc=null;function sg(e,n,a){if(nc===null){var s=new Map,u=nc=new Map;u.set(a,s)}else u=nc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ir]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var R=s.get(S);R?R.push(f):s.set(S,[f])}}return s}function og(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function mS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function lg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gS(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ds(s.href),f=n.querySelector(Co(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ic.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,s=ag(s),(u=di.get(u))&&Vf(s,u),f=f.createElement("link"),C(f);var S=f;S._p=new Promise(function(R,I){S.onload=R,S.onerror=I}),wn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ic.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function _S(e,n){return e.stylesheets&&e.count===0&&rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Xf===0&&(Xf=62500*Qx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Xf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ac=null;function rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ac=new Map,n.forEach(vS,e),ac=null,ic.call(e))}function vS(e,n){if(!(n.state.loading&4)){var a=ac.get(e);if(a)var s=a.get(null);else{a=new Map,ac.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=ic.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Do={$$typeof:U,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function xS(e,n,a,s,u,f,S,R,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function cg(e,n,a,s,u,f,S,R,I,te,me,xe){return e=new xS(e,n,a,S,I,te,me,xe,R),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Au(f),e}function ug(e){return e?(e=Xr,e):Xr}function fg(e,n,a,s,u,f){u=ug(u),s.context===null?s.context=u:s.pendingContext=u,s=Ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Na(e,s,n),a!==null&&(kn(a,e,n),oo(a,e,n))}function dg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){dg(e,n),(e=e.alternate)&&dg(e,n)}function hg(e){if(e.tag===13||e.tag===31){var n=lr(e,67108864);n!==null&&kn(n,e,67108864),Wf(e,67108864)}}function pg(e){if(e.tag===13||e.tag===31){var n=Jn();n=Vs(n);var a=lr(e,n);a!==null&&kn(a,e,n),Wf(e,n)}}var sc=!0;function SS(e,n,a,s){var u=F.T;F.T=null;var f=H.p;try{H.p=2,qf(e,n,a,s)}finally{H.p=f,F.T=u}}function yS(e,n,a,s){var u=F.T;F.T=null;var f=H.p;try{H.p=8,qf(e,n,a,s)}finally{H.p=f,F.T=u}}function qf(e,n,a,s){if(sc){var u=Yf(s);if(u===null)Nf(e,n,s,oc,a),gg(e,s);else if(ES(u,e,n,a,s))s.stopPropagation();else if(gg(e,s),n&4&&-1<MS.indexOf(e)){for(;u!==null;){var f=Ea(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Me(f.pendingLanes);if(S!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var I=1<<31-Fe(S);R.entanglements[1]|=I,S&=~I}Oi(f),(Pt&6)===0&&(kl=E()+500,bo(0))}}break;case 31:case 13:R=lr(f,2),R!==null&&kn(R,f,2),Wl(),Wf(f,2)}if(f=Yf(s),f===null&&Nf(e,n,s,oc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Nf(e,n,s,null,a)}}function Yf(e){return e=jc(e),jf(e)}var oc=null;function jf(e){if(oc=null,e=Ma(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return oc=e,null}function mg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X()){case ge:return 2;case ye:return 8;case ce:case Qe:return 32;case De:return 268435456;default:return 32}default:return 32}}var Zf=!1,ka=null,Xa=null,Wa=null,Uo=new Map,No=new Map,qa=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gg(e,n){switch(e){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Lo(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ea(n),n!==null&&hg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function ES(e,n,a,s,u){switch(n){case"focusin":return ka=Lo(ka,e,n,a,s,u),!0;case"dragenter":return Xa=Lo(Xa,e,n,a,s,u),!0;case"mouseover":return Wa=Lo(Wa,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Uo.set(f,Lo(Uo.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,No.set(f,Lo(No.get(f)||null,e,n,a,s,u)),!0}return!1}function _g(e){var n=Ma(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Di(e.priority,function(){pg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Di(e.priority,function(){pg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Yc=s,a.target.dispatchEvent(s),Yc=null}else return n=Ea(a),n!==null&&hg(n),e.blockedOn=a,!1;n.shift()}return!0}function vg(e,n,a){lc(e)&&a.delete(n)}function bS(){Zf=!1,ka!==null&&lc(ka)&&(ka=null),Xa!==null&&lc(Xa)&&(Xa=null),Wa!==null&&lc(Wa)&&(Wa=null),Uo.forEach(vg),No.forEach(vg)}function cc(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,bS)))}var uc=null;function xg(e){uc!==e&&(uc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){uc===e&&(uc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(jf(s||a)===null)continue;break}var f=Ea(a);f!==null&&(e.splice(n,3),n-=3,qu(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ps(e){function n(I){return cc(I,e)}ka!==null&&cc(ka,e),Xa!==null&&cc(Xa,e),Wa!==null&&cc(Wa,e),Uo.forEach(n),No.forEach(n);for(var a=0;a<qa.length;a++){var s=qa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)_g(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[Sn]||null;if(typeof f=="function")S||xg(a);else if(S){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Sn]||null)R=S.formAction;else if(jf(u)!==null)continue}else R=S.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),xg(a)}}}function Sg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Kf(e){this._internalRoot=e}fc.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();fg(a,s,e,n,null,null)},fc.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;fg(e.current,2,null,e,null,null),Wl(),n[vi]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ks();e={blockedOn:null,target:e,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,e),a===0&&_g(e)}};var yg=t.version;if(yg!=="19.2.4")throw Error(r(527,yg,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var TS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{Ee=dc.inject(TS),Te=dc}catch{}}return Po.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=Cm,f=wm,S=Dm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=cg(e,1,!1,null,null,a,s,null,u,f,S,Sg),e[vi]=n.current,Uf(e),new Kf(n)},Po.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=Cm,S=wm,R=Dm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=cg(e,1,!0,n,a??null,s,u,I,f,S,R,Sg),n.context=ug(null),a=n.current,s=Jn(),s=Vs(s),u=Ua(s),u.callback=null,Na(a,u,s),a=s,n.current.lanes=a,Nn(n,a),Oi(n),e[vi]=n.current,Uf(e),new fc(n)},Po.version="19.2.4",Po}var Ug;function zS(){if(Ug)return $f.exports;Ug=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),$f.exports=PS(),$f.exports}var FS=zS();const BS=F_(FS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nh="182",IS=0,Ng=1,HS=2,Oc=1,GS=2,Wo=3,nr=0,Wn=1,Fi=2,ma=0,Us=1,Lg=2,Og=3,Pg=4,VS=5,Cr=100,kS=101,XS=102,WS=103,qS=104,YS=200,jS=201,ZS=202,KS=203,Fd=204,Bd=205,QS=206,JS=207,$S=208,ey=209,ty=210,ny=211,iy=212,ay=213,ry=214,Id=0,Hd=1,Gd=2,Ls=3,Vd=4,kd=5,Xd=6,Wd=7,B_=0,sy=1,oy=2,Hi=0,I_=1,H_=2,G_=3,V_=4,k_=5,X_=6,W_=7,q_=300,Nr=301,Os=302,qd=303,Yd=304,Vc=306,jd=1e3,ti=1001,Zd=1002,Dn=1003,ly=1004,hc=1005,dn=1006,id=1007,Dr=1008,mi=1009,Y_=1010,j_=1011,Yo=1012,Lh=1013,ki=1014,Bi=1015,va=1016,Oh=1017,Ph=1018,jo=1020,Z_=35902,K_=35899,Q_=1021,J_=1022,Ci=1023,xa=1026,Ur=1027,$_=1028,zh=1029,Ps=1030,Fh=1031,Bh=1033,Pc=33776,zc=33777,Fc=33778,Bc=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,eh=36196,th=37492,nh=37496,ih=37488,ah=37489,rh=37490,sh=37491,oh=37808,lh=37809,ch=37810,uh=37811,fh=37812,dh=37813,hh=37814,ph=37815,mh=37816,gh=37817,_h=37818,vh=37819,xh=37820,Sh=37821,yh=36492,Mh=36494,Eh=36495,bh=36283,Th=36284,Ah=36285,Rh=36286,cy=3200,uy=0,fy=1,er="",pi="srgb",zs="srgb-linear",Hc="linear",Vt="srgb",ms=7680,zg=519,dy=512,hy=513,py=514,Ih=515,my=516,gy=517,Hh=518,_y=519,Fg=35044,Bg="300 es",Ii=2e3,Gc=2001;function ev(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Zo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function vy(){const o=Zo("canvas");return o.style.display="block",o}const Ig={};function Hg(...o){const t="THREE."+o.shift();console.log(t,...o)}function dt(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Ut(...o){const t="THREE."+o.shift();console.error(t,...o)}function Ko(...o){const t=o.join(" ");t in Ig||(Ig[t]=!0,dt(...o))}function xy(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=Math.PI/180,Ch=180/Math.PI;function Jo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function bt(o,t,i){return Math.max(t,Math.min(i,o))}function Sy(o,t){return(o%t+t)%t}function rd(o,t,i){return(1-i)*o+i*t}function zo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,i=0){Nt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(bt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $o{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3],x=c[d+0],y=c[d+1],b=c[d+2],T=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(h>=1){t[i+0]=x,t[i+1]=y,t[i+2]=b,t[i+3]=T;return}if(g!==T||m!==x||p!==y||v!==b){let M=m*x+p*y+v*b+g*T;M<0&&(x=-x,y=-y,b=-b,T=-T,M=-M);let _=1-h;if(M<.9995){const w=Math.acos(M),U=Math.sin(w);_=Math.sin(_*w)/U,h=Math.sin(h*w)/U,m=m*_+x*h,p=p*_+y*h,v=v*_+b*h,g=g*_+T*h}else{m=m*_+x*h,p=p*_+y*h,v=v*_+b*h,g=g*_+T*h;const w=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=w,p*=w,v*=w,g*=w}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=c[d],x=c[d+1],y=c[d+2],b=c[d+3];return t[i]=h*b+v*g+m*y-p*x,t[i+1]=m*b+v*x+p*g-h*y,t[i+2]=p*b+v*y+h*x-m*g,t[i+3]=v*b-h*g-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(c/2),x=m(r/2),y=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=x*v*g+p*y*b,this._y=p*y*g-x*v*b,this._z=p*v*b+x*y*g,this._w=p*v*g-x*y*b;break;case"YXZ":this._x=x*v*g+p*y*b,this._y=p*y*g-x*v*b,this._z=p*v*b-x*y*g,this._w=p*v*g+x*y*b;break;case"ZXY":this._x=x*v*g-p*y*b,this._y=p*y*g+x*v*b,this._z=p*v*b+x*y*g,this._w=p*v*g-x*y*b;break;case"ZYX":this._x=x*v*g-p*y*b,this._y=p*y*g+x*v*b,this._z=p*v*b-x*y*g,this._w=p*v*g+x*y*b;break;case"YZX":this._x=x*v*g+p*y*b,this._y=p*y*g+x*v*b,this._z=p*v*b-x*y*g,this._w=p*v*g-x*y*b;break;case"XZY":this._x=x*v*g-p*y*b,this._y=p*y*g-x*v*b,this._z=p*v*b+x*y*g,this._w=p*v*g+x*y*b;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=r+h+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(v-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-c*m,this._y=l*v+d*m+c*h-r*p,this._z=c*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,r=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Gg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Gg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),v=2*(h*i-c*l),g=2*(c*r-d*i);return this.x=i+m*p+d*g-h*v,this.y=r+m*v+h*p-c*g,this.z=l+m*g+c*v-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this.z=bt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this.z=bt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return sd.copy(this).projectOnVector(t),this.sub(sd)}reflect(t){return this.sub(sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(bt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new re,Gg=new $o;class _t{constructor(t,i,r,l,c,d,h,m,p){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=h,v[3]=i,v[4]=c,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],x=r[2],y=r[5],b=r[8],T=l[0],M=l[3],_=l[6],w=l[1],U=l[4],L=l[7],z=l[2],B=l[5],P=l[8];return c[0]=d*T+h*w+m*z,c[3]=d*M+h*U+m*B,c[6]=d*_+h*L+m*P,c[1]=p*T+v*w+g*z,c[4]=p*M+v*U+g*B,c[7]=p*_+v*L+g*P,c[2]=x*T+y*w+b*z,c[5]=x*M+y*U+b*B,c[8]=x*_+y*L+b*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return i*d*v-i*h*p-r*c*v+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=v*d-h*p,x=h*m-v*c,y=p*c-d*m,b=i*g+r*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=g*T,t[1]=(l*p-v*r)*T,t[2]=(h*r-l*d)*T,t[3]=x*T,t[4]=(v*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=y*T,t[7]=(r*m-p*i)*T,t[8]=(d*i-r*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(od.makeScale(t,i)),this}rotate(t){return this.premultiply(od.makeRotation(-t)),this}translate(t,i){return this.premultiply(od.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const od=new _t,Vg=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kg=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yy(){const o={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?Hc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[zs]:{primaries:t,whitePoint:r,transfer:Hc,toXYZ:Vg,fromXYZ:kg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:Vt,toXYZ:Vg,fromXYZ:kg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const Rt=yy();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ns(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gs;class My{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{gs===void 0&&(gs=Zo("canvas")),gs.width=t.width,gs.height=t.height;const l=gs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=gs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zo("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ga(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:t.width,height:t.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ey=0;class Gh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(ld(l[d].image)):c.push(ld(l[d]))}else c=ld(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function ld(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?My.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let by=0;const cd=new re;class Un extends Bs{constructor(t=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=ti,l=ti,c=dn,d=Dr,h=Ci,m=mi,p=Un.DEFAULT_ANISOTROPY,v=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Jo(),this.name="",this.source=new Gh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){dt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==q_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=q_;Un.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],x=m[1],y=m[5],b=m[9],T=m[2],M=m[6],_=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,L=(y+1)/2,z=(_+1)/2,B=(v+x)/4,P=(g+T)/4,q=(b+M)/4;return U>L&&U>z?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=B/r,c=P/r):L>z?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=B/l,c=q/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=P/c,l=q/c),this.set(r,l,c,i),this}let w=Math.sqrt((M-b)*(M-b)+(g-T)*(g-T)+(x-v)*(x-v));return Math.abs(w)<.001&&(w=1),this.x=(M-b)/w,this.y=(g-T)/w,this.z=(x-v)/w,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this.z=bt(this.z,t.z,i.z),this.w=bt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this.z=bt(this.z,t,i),this.w=bt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ty extends Bs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Un(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Gh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Ty{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class tv extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ay extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ei):Ei.fromBufferAttribute(c,d),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pc.copy(r.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),mc.subVectors(this.max,Fo),_s.subVectors(t.a,Fo),vs.subVectors(t.b,Fo),xs.subVectors(t.c,Fo),ja.subVectors(vs,_s),Za.subVectors(xs,vs),yr.subVectors(_s,xs);let i=[0,-ja.z,ja.y,0,-Za.z,Za.y,0,-yr.z,yr.y,ja.z,0,-ja.x,Za.z,0,-Za.x,yr.z,0,-yr.x,-ja.y,ja.x,0,-Za.y,Za.x,0,-yr.y,yr.x,0];return!ud(i,_s,vs,xs,mc)||(i=[1,0,0,0,1,0,0,0,1],!ud(i,_s,vs,xs,mc))?!1:(gc.crossVectors(ja,Za),i=[gc.x,gc.y,gc.z],ud(i,_s,vs,xs,mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(la),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const la=[new re,new re,new re,new re,new re,new re,new re,new re],Ei=new re,pc=new el,_s=new re,vs=new re,xs=new re,ja=new re,Za=new re,yr=new re,Fo=new re,mc=new re,gc=new re,Mr=new re;function ud(o,t,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){Mr.fromArray(o,c);const h=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=t.dot(Mr),p=i.dot(Mr),v=r.dot(Mr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const Ry=new el,Bo=new re,fd=new re;class Vh{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Ry.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(fd)),this.expandByPoint(Bo.copy(t.center).sub(fd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new re,dd=new re,_c=new re,Ka=new re,hd=new re,vc=new re,pd=new re;class Cy{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){dd.copy(t).add(i).multiplyScalar(.5),_c.copy(i).sub(t).normalize(),Ka.copy(this.origin).sub(dd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(_c),h=Ka.dot(this.direction),m=-Ka.dot(_c),p=Ka.lengthSq(),v=Math.abs(1-d*d);let g,x,y,b;if(v>0)if(g=d*m-h,x=d*h-m,b=c*v,g>=0)if(x>=-b)if(x<=b){const T=1/v;g*=T,x*=T,y=g*(g+d*x+2*h)+x*(d*g+x+2*m)+p}else x=c,g=Math.max(0,-(d*x+h)),y=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(d*x+h)),y=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-d*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(g=Math.max(0,-(d*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p);else x=d>0?-c:c,g=Math.max(0,-(d*x+h)),y=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(dd).addScaledVector(_c,x),y}intersectSphere(t,i){ca.subVectors(t.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),v>=0?(c=(t.min.y-x.y)*v,d=(t.max.y-x.y)*v):(c=(t.max.y-x.y)*v,d=(t.min.y-x.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(h=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,i,r,l,c){hd.subVectors(i,t),vc.subVectors(r,t),pd.crossVectors(hd,vc);let d=this.direction.dot(pd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ka.subVectors(this.origin,t);const m=h*this.direction.dot(vc.crossVectors(Ka,vc));if(m<0)return null;const p=h*this.direction.dot(hd.cross(Ka));if(p<0||m+p>d)return null;const v=-h*Ka.dot(pd);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(t,i,r,l,c,d,h,m,p,v,g,x,y,b,T,M){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,v,g,x,y,b,T,M)}set(t,i,r,l,c,d,h,m,p,v,g,x,y,b,T,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=x,_[3]=y,_[7]=b,_[11]=T,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Ss.setFromMatrixColumn(t,0).length(),c=1/Ss.setFromMatrixColumn(t,1).length(),d=1/Ss.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=d*v,y=d*g,b=h*v,T=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=x-T*p,i[9]=-h*m,i[2]=T-x*p,i[6]=b+y*p,i[10]=d*m}else if(t.order==="YXZ"){const x=m*v,y=m*g,b=p*v,T=p*g;i[0]=x+T*h,i[4]=b*h-y,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=y*h-b,i[6]=T+x*h,i[10]=d*m}else if(t.order==="ZXY"){const x=m*v,y=m*g,b=p*v,T=p*g;i[0]=x-T*h,i[4]=-d*g,i[8]=b+y*h,i[1]=y+b*h,i[5]=d*v,i[9]=T-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const x=d*v,y=d*g,b=h*v,T=h*g;i[0]=m*v,i[4]=b*p-y,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=y*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const x=d*m,y=d*p,b=h*m,T=h*p;i[0]=m*v,i[4]=T-x*g,i[8]=b*g+y,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=y*g+b,i[10]=x-T*g}else if(t.order==="XZY"){const x=d*m,y=d*p,b=h*m,T=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+T,i[5]=d*v,i[9]=y*g-b,i[2]=b*g-y,i[6]=h*v,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wy,t,Dy)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Qa.crossVectors(r,$n),Qa.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Qa.crossVectors(r,$n)),Qa.normalize(),xc.crossVectors($n,Qa),l[0]=Qa.x,l[4]=xc.x,l[8]=$n.x,l[1]=Qa.y,l[5]=xc.y,l[9]=$n.y,l[2]=Qa.z,l[6]=xc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],x=r[9],y=r[13],b=r[2],T=r[6],M=r[10],_=r[14],w=r[3],U=r[7],L=r[11],z=r[15],B=l[0],P=l[4],q=l[8],A=l[12],D=l[1],V=l[5],J=l[9],Q=l[13],se=l[2],ue=l[6],F=l[10],H=l[14],ne=l[3],pe=l[7],ve=l[11],N=l[15];return c[0]=d*B+h*D+m*se+p*ne,c[4]=d*P+h*V+m*ue+p*pe,c[8]=d*q+h*J+m*F+p*ve,c[12]=d*A+h*Q+m*H+p*N,c[1]=v*B+g*D+x*se+y*ne,c[5]=v*P+g*V+x*ue+y*pe,c[9]=v*q+g*J+x*F+y*ve,c[13]=v*A+g*Q+x*H+y*N,c[2]=b*B+T*D+M*se+_*ne,c[6]=b*P+T*V+M*ue+_*pe,c[10]=b*q+T*J+M*F+_*ve,c[14]=b*A+T*Q+M*H+_*N,c[3]=w*B+U*D+L*se+z*ne,c[7]=w*P+U*V+L*ue+z*pe,c[11]=w*q+U*J+L*F+z*ve,c[15]=w*A+U*Q+L*H+z*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],v=t[2],g=t[6],x=t[10],y=t[14],b=t[3],T=t[7],M=t[11],_=t[15],w=m*y-p*x,U=h*y-p*g,L=h*x-m*g,z=d*y-p*v,B=d*x-m*v,P=d*g-h*v;return i*(T*w-M*U+_*L)-r*(b*w-M*z+_*B)+l*(b*U-T*z+_*P)-c*(b*L-T*B+M*P)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=t[9],x=t[10],y=t[11],b=t[12],T=t[13],M=t[14],_=t[15],w=g*M*p-T*x*p+T*m*y-h*M*y-g*m*_+h*x*_,U=b*x*p-v*M*p-b*m*y+d*M*y+v*m*_-d*x*_,L=v*T*p-b*g*p+b*h*y-d*T*y-v*h*_+d*g*_,z=b*g*m-v*T*m-b*h*x+d*T*x+v*h*M-d*g*M,B=i*w+r*U+l*L+c*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return t[0]=w*P,t[1]=(T*x*c-g*M*c-T*l*y+r*M*y+g*l*_-r*x*_)*P,t[2]=(h*M*c-T*m*c+T*l*p-r*M*p-h*l*_+r*m*_)*P,t[3]=(g*m*c-h*x*c-g*l*p+r*x*p+h*l*y-r*m*y)*P,t[4]=U*P,t[5]=(v*M*c-b*x*c+b*l*y-i*M*y-v*l*_+i*x*_)*P,t[6]=(b*m*c-d*M*c-b*l*p+i*M*p+d*l*_-i*m*_)*P,t[7]=(d*x*c-v*m*c+v*l*p-i*x*p-d*l*y+i*m*y)*P,t[8]=L*P,t[9]=(b*g*c-v*T*c-b*r*y+i*T*y+v*r*_-i*g*_)*P,t[10]=(d*T*c-b*h*c+b*r*p-i*T*p-d*r*_+i*h*_)*P,t[11]=(v*h*c-d*g*c-v*r*p+i*g*p+d*r*y-i*h*y)*P,t[12]=z*P,t[13]=(v*T*l-b*g*l+b*r*x-i*T*x-v*r*M+i*g*M)*P,t[14]=(b*h*l-d*T*l-b*r*m+i*T*m+d*r*M-i*h*M)*P,t[15]=(d*g*l-v*h*l+v*r*m-i*g*m-d*r*x+i*h*x)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,v=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,v=d+d,g=h+h,x=c*p,y=c*v,b=c*g,T=d*v,M=d*g,_=h*g,w=m*p,U=m*v,L=m*g,z=r.x,B=r.y,P=r.z;return l[0]=(1-(T+_))*z,l[1]=(y+L)*z,l[2]=(b-U)*z,l[3]=0,l[4]=(y-L)*B,l[5]=(1-(x+_))*B,l[6]=(M+w)*B,l[7]=0,l[8]=(b+U)*P,l[9]=(M-w)*P,l[10]=(1-(x+T))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Ss.set(l[0],l[1],l[2]).length();const d=Ss.set(l[4],l[5],l[6]).length(),h=Ss.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),bi.copy(this);const p=1/c,v=1/d,g=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,i.setFromRotationMatrix(bi),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let b,T;if(m)b=c/(d-c),T=d*c/(d-c);else if(h===Ii)b=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===Gc)b=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=Ii,m=!1){const p=this.elements,v=2/(i-t),g=2/(r-l),x=-(i+t)/(i-t),y=-(r+l)/(r-l);let b,T;if(m)b=1/(d-c),T=d/(d-c);else if(h===Ii)b=-2/(d-c),T=-(d+c)/(d-c);else if(h===Gc)b=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ss=new re,bi=new hn,wy=new re(0,0,0),Dy=new re(1,1,1),Qa=new re,xc=new re,$n=new re,Xg=new hn,Wg=new $o;class Sa{constructor(t=0,i=0,r=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Xg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Wg.setFromEuler(this),this.setFromQuaternion(Wg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class nv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Uy=0;const qg=new re,ys=new $o,ua=new hn,Sc=new re,Io=new re,Ny=new re,Ly=new $o,Yg=new re(1,0,0),jg=new re(0,1,0),Zg=new re(0,0,1),Kg={type:"added"},Oy={type:"removed"},Ms={type:"childadded",child:null},md={type:"childremoved",child:null};class ni extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const t=new re,i=new Sa,r=new $o,l=new re(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new _t}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(Yg,t)}rotateY(t){return this.rotateOnAxis(jg,t)}rotateZ(t){return this.rotateOnAxis(Zg,t)}translateOnAxis(t,i){return qg.copy(t).applyQuaternion(this.quaternion),this.position.add(qg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Yg,t)}translateY(t){return this.translateOnAxis(jg,t)}translateZ(t){return this.translateOnAxis(Zg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Sc.copy(t):Sc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Io,Sc,this.up):ua.lookAt(Sc,Io,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(ua),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kg),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Oy),md.child=t,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kg),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,Ny),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Ly,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),v=d(t.images),g=d(t.shapes),x=d(t.skeletons),y=d(t.animations),b=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new re(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new re,fa=new re,gd=new re,da=new re,Es=new re,bs=new re,Qg=new re,_d=new re,vd=new re,xd=new re,Sd=new rn,yd=new rn,Md=new rn;class Ri{constructor(t=new re,i=new re,r=new re){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ti.subVectors(l,i),fa.subVectors(r,i),gd.subVectors(t,i);const d=Ti.dot(Ti),h=Ti.dot(fa),m=Ti.dot(gd),p=fa.dot(fa),v=fa.dot(gd),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,y=(p*m-h*v)*x,b=(d*v-h*m)*x;return c.set(1-y-b,b,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(d,da.y),m.addScaledVector(h,da.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Sd.setScalar(0),yd.setScalar(0),Md.setScalar(0),Sd.fromBufferAttribute(t,i),yd.fromBufferAttribute(t,r),Md.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Sd,c.x),d.addScaledVector(yd,c.y),d.addScaledVector(Md,c.z),d}static isFrontFacing(t,i,r,l){return Ti.subVectors(r,i),fa.subVectors(t,i),Ti.cross(fa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ti.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ri.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Ri.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;Es.subVectors(l,r),bs.subVectors(c,r),_d.subVectors(t,r);const m=Es.dot(_d),p=bs.dot(_d);if(m<=0&&p<=0)return i.copy(r);vd.subVectors(t,l);const v=Es.dot(vd),g=bs.dot(vd);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(Es,d);xd.subVectors(t,c);const y=Es.dot(xd),b=bs.dot(xd);if(b>=0&&y<=b)return i.copy(c);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(bs,h);const M=v*b-y*g;if(M<=0&&g-v>=0&&y-b>=0)return Qg.subVectors(c,l),h=(g-v)/(g-v+(y-b)),i.copy(l).addScaledVector(Qg,h);const _=1/(M+T+x);return d=T*_,h=x*_,i.copy(r).addScaledVector(Es,d).addScaledVector(bs,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const iv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},yc={h:0,s:0,l:0};function Ed(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class qt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Rt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Rt.workingColorSpace){if(t=Sy(t,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Ed(d,c,t+1/3),this.g=Ed(d,c,t),this.b=Ed(d,c,t-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function r(c){c!==void 0&&parseFloat(c)<1&&dt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:dt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const r=iv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Rt.workingToColorSpace(Pn.copy(this),t),Math.round(bt(Pn.r*255,0,255))*65536+Math.round(bt(Pn.g*255,0,255))*256+Math.round(bt(Pn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Rt.workingColorSpace){Rt.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=pi){Rt.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,l=Pn.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ja),this.setHSL(Ja.h+t,Ja.s+i,Ja.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ja),t.getHSL(yc);const r=rd(Ja.h,yc.h,i),l=rd(Ja.s,yc.s,i),c=rd(Ja.l,yc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new qt;qt.NAMES=iv;let Py=0;class kc extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=Us,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Bd,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){dt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fd&&(r.blendSrc=this.blendSrc),this.blendDst!==Bd&&(r.blendDst=this.blendDst),this.blendEquation!==Cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class av extends kc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=B_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new re,Mc=new Nt;let zy=0;class Vi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Fg,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=zo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=zo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=zo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=zo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=zo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fg&&(t.usage=this.usage),t}}class rv extends Vi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class sv extends Vi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class _a extends Vi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Fy=0;const hi=new hn,bd=new ni,Ts=new re,ei=new el,Ho=new el,xn=new re;class ya extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ev(t)?sv:rv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new _t().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,r){return hi.makeTranslation(t,i,r),this.applyMatrix4(hi),this}scale(t,i,r){return hi.makeScale(t,i,r),this.applyMatrix4(hi),this}lookAt(t){return bd.lookAt(t),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new _a(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(ei.min,Ho.min),ei.expandByPoint(xn),xn.addVectors(ei.max,Ho.max),ei.expandByPoint(xn)):(ei.expandByPoint(Ho.min),ei.expandByPoint(Ho.max))}ei.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)xn.fromBufferAttribute(h,p),m&&(Ts.fromBufferAttribute(t,p),xn.add(Ts)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<r.count;q++)h[q]=new re,m[q]=new re;const p=new re,v=new re,g=new re,x=new Nt,y=new Nt,b=new Nt,T=new re,M=new re;function _(q,A,D){p.fromBufferAttribute(r,q),v.fromBufferAttribute(r,A),g.fromBufferAttribute(r,D),x.fromBufferAttribute(c,q),y.fromBufferAttribute(c,A),b.fromBufferAttribute(c,D),v.sub(p),g.sub(p),y.sub(x),b.sub(x);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(T.copy(v).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(V),M.copy(g).multiplyScalar(y.x).addScaledVector(v,-b.x).multiplyScalar(V),h[q].add(T),h[A].add(T),h[D].add(T),m[q].add(M),m[A].add(M),m[D].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let q=0,A=w.length;q<A;++q){const D=w[q],V=D.start,J=D.count;for(let Q=V,se=V+J;Q<se;Q+=3)_(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const U=new re,L=new re,z=new re,B=new re;function P(q){z.fromBufferAttribute(l,q),B.copy(z);const A=h[q];U.copy(A),U.sub(z.multiplyScalar(z.dot(A))).normalize(),L.crossVectors(B,A);const V=L.dot(m[q])<0?-1:1;d.setXYZW(q,U.x,U.y,U.z,V)}for(let q=0,A=w.length;q<A;++q){const D=w[q],V=D.start,J=D.count;for(let Q=V,se=V+J;Q<se;Q+=3)P(t.getX(Q+0)),P(t.getX(Q+1)),P(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new re,c=new re,d=new re,h=new re,m=new re,p=new re,v=new re,g=new re;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),T=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),v.subVectors(d,c),g.subVectors(l,c),v.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),h.add(v),m.add(v),p.add(v),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),v.subVectors(d,c),g.subVectors(l,c),v.cross(g),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,g=h.normalized,x=new p.constructor(m.length*v);let y=0,b=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*v;for(let _=0;_<v;_++)x[b++]=p[y++]}return new Vi(x,v,g)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ya,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const x=p[v],y=t(x,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];v.push(y.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let x=0,y=g.length;x<y;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jg=new hn,Er=new Cy,Ec=new Vh,$g=new re,bc=new re,Tc=new re,Ac=new re,Td=new re,Rc=new re,e_=new re,Cc=new re;class wi extends ni{constructor(t=new ya,i=new av){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Rc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(Td.fromBufferAttribute(g,t),d?Rc.addScaledVector(Td,v):Rc.addScaledVector(Td.sub(i),v))}i.add(Rc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(c),Er.copy(t.ray).recast(t.near),!(Ec.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ec,$g)===null||Er.origin.distanceToSquared($g)>(t.far-t.near)**2))&&(Jg.copy(c).invert(),Er.copy(t.ray).applyMatrix4(Jg),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Er)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,T=x.length;b<T;b++){const M=x[b],_=d[M.materialIndex],w=Math.max(M.start,y.start),U=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let L=w,z=U;L<z;L+=3){const B=h.getX(L),P=h.getX(L+1),q=h.getX(L+2);l=wc(this,_,t,r,p,v,g,B,P,q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=b,_=T;M<_;M+=3){const w=h.getX(M),U=h.getX(M+1),L=h.getX(M+2);l=wc(this,d,t,r,p,v,g,w,U,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,T=x.length;b<T;b++){const M=x[b],_=d[M.materialIndex],w=Math.max(M.start,y.start),U=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let L=w,z=U;L<z;L+=3){const B=L,P=L+1,q=L+2;l=wc(this,_,t,r,p,v,g,B,P,q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=b,_=T;M<_;M+=3){const w=M,U=M+1,L=M+2;l=wc(this,d,t,r,p,v,g,w,U,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function By(o,t,i,r,l,c,d,h){let m;if(t.side===Wn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===nr,h),m===null)return null;Cc.copy(h),Cc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Cc);return p<i.near||p>i.far?null:{distance:p,point:Cc.clone(),object:o}}function wc(o,t,i,r,l,c,d,h,m,p){o.getVertexPosition(h,bc),o.getVertexPosition(m,Tc),o.getVertexPosition(p,Ac);const v=By(o,t,i,r,bc,Tc,Ac,e_);if(v){const g=new re;Ri.getBarycoord(e_,bc,Tc,Ac,g),l&&(v.uv=Ri.getInterpolatedAttribute(l,h,m,p,g,new Nt)),c&&(v.uv1=Ri.getInterpolatedAttribute(c,h,m,p,g,new Nt)),d&&(v.normal=Ri.getInterpolatedAttribute(d,h,m,p,g,new re),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new re,materialIndex:0};Ri.getNormal(bc,Tc,Ac,x.normal),v.face=x,v.barycoord=g}return v}class tl extends ya{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],g=[];let x=0,y=0;b("z","y","x",-1,-1,r,i,t,d,c,0),b("z","y","x",1,-1,r,i,-t,d,c,1),b("x","z","y",1,1,t,r,i,l,d,2),b("x","z","y",1,-1,t,r,-i,l,d,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new _a(p,3)),this.setAttribute("normal",new _a(v,3)),this.setAttribute("uv",new _a(g,2));function b(T,M,_,w,U,L,z,B,P,q,A){const D=L/P,V=z/q,J=L/2,Q=z/2,se=B/2,ue=P+1,F=q+1;let H=0,ne=0;const pe=new re;for(let ve=0;ve<F;ve++){const N=ve*V-Q;for(let Z=0;Z<ue;Z++){const fe=Z*D-J;pe[T]=fe*w,pe[M]=N*U,pe[_]=se,p.push(pe.x,pe.y,pe.z),pe[T]=0,pe[M]=0,pe[_]=B>0?1:-1,v.push(pe.x,pe.y,pe.z),g.push(Z/P),g.push(1-ve/q),H+=1}}for(let ve=0;ve<q;ve++)for(let N=0;N<P;N++){const Z=x+N+ue*ve,fe=x+N+ue*(ve+1),be=x+(N+1)+ue*(ve+1),ze=x+(N+1)+ue*ve;m.push(Z,fe,ze),m.push(fe,be,ze),ne+=6}h.addGroup(y,ne,A),y+=ne,x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const r=Fs(o[i]);for(const l in r)t[l]=r[l]}return t}function Iy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function ov(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Rt.workingColorSpace}const Hy={clone:Fs,merge:Fn};var Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends kc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=Iy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class lv extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new re,t_=new Nt,n_=new Nt;class Ai extends lv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ch*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ad*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ch*2*Math.atan(Math.tan(ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-t/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($a.x,$a.y).multiplyScalar(-t/$a.z)}getViewSize(t,i){return this.getViewBounds(t,t_,n_),i.subVectors(n_,t_)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ad*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const As=-90,Rs=1;class ky extends ni{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(As,Rs,t,i);l.layers=this.layers,this.add(l);const c=new Ai(As,Rs,t,i);c.layers=this.layers,this.add(c);const d=new Ai(As,Rs,t,i);d.layers=this.layers,this.add(d);const h=new Ai(As,Rs,t,i);h.layers=this.layers,this.add(h);const m=new Ai(As,Rs,t,i);m.layers=this.layers,this.add(m);const p=new Ai(As,Rs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,v]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,v),t.setRenderTarget(g,x,y),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class cv extends Un{constructor(t=[],i=Nr,r,l,c,d,h,m,p,v){super(t,i,r,l,c,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uv extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new cv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new tl(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ma});c.uniforms.tEquirect.value=i;const d=new wi(l,c),h=i.minFilter;return i.minFilter===Dr&&(i.minFilter=dn),new ky(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class Dc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xy={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,r),_=this._getHandJoint(p,T);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Xy)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Dc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class fv extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Wy extends Un{constructor(t=null,i=1,r=1,l,c,d,h,m,p=Dn,v=Dn,g,x){super(null,d,h,m,p,v,l,c,g,x),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rd=new re,qy=new re,Yy=new _t;class Rr{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Rd.subVectors(r,i).cross(qy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Yy.getNormalMatrix(t),l=this.coplanarPoint(Rd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Vh,jy=new Nt(.5,.5),Uc=new re;class dv{constructor(t=new Rr,i=new Rr,r=new Rr,l=new Rr,c=new Rr,d=new Rr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ii,r=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],x=c[6],y=c[7],b=c[8],T=c[9],M=c[10],_=c[11],w=c[12],U=c[13],L=c[14],z=c[15];if(l[0].setComponents(p-d,y-v,_-b,z-w).normalize(),l[1].setComponents(p+d,y+v,_+b,z+w).normalize(),l[2].setComponents(p+h,y+g,_+T,z+U).normalize(),l[3].setComponents(p-h,y-g,_-T,z-U).normalize(),r)l[4].setComponents(m,x,M,L).normalize(),l[5].setComponents(p-m,y-x,_-M,z-L).normalize();else if(l[4].setComponents(p-m,y-x,_-M,z-L).normalize(),i===Ii)l[5].setComponents(p+m,y+x,_+M,z+L).normalize();else if(i===Gc)l[5].setComponents(m,x,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);const i=jy.distanceTo(t.center);return br.radius=.7071067811865476+i,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Uc.x=l.normal.x>0?t.max.x:t.min.x,Uc.y=l.normal.y>0?t.max.y:t.min.y,Uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class i_ extends Un{constructor(t,i,r,l,c,d,h,m,p){super(t,i,r,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qo extends Un{constructor(t,i,r=ki,l,c,d,h=Dn,m=Dn,p,v=xa,g=1){if(v!==xa&&v!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Zy extends Qo{constructor(t,i=ki,r=Nr,l,c,d=Dn,h=Dn,m,p=xa){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,i,r,l,c,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class hv extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Is extends ya{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=t/h,x=i/m,y=[],b=[],T=[],M=[];for(let _=0;_<v;_++){const w=_*x-d;for(let U=0;U<p;U++){const L=U*g-c;b.push(L,-w,0),T.push(0,0,1),M.push(U/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let w=0;w<h;w++){const U=w+p*_,L=w+p*(_+1),z=w+1+p*(_+1),B=w+1+p*_;y.push(U,L,B),y.push(L,z,B)}this.setIndex(y),this.setAttribute("position",new _a(b,3)),this.setAttribute("normal",new _a(T,3)),this.setAttribute("uv",new _a(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ky extends gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qy extends kc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jy extends kc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cd={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class $y{constructor(t,i,r){const l=this;let c=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(v){h++,c===!1&&l.onStart!==void 0&&l.onStart(v,d,h),c=!0},this.itemEnd=function(v){d++,l.onProgress!==void 0&&l.onProgress(v,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,g){return p.push(v,g),this},this.removeHandler=function(v){const g=p.indexOf(v);return g!==-1&&p.splice(g,2),this},this.getHandler=function(v){for(let g=0,x=p.length;g<x;g+=2){const y=p[g],b=p[g+1];if(y.global&&(y.lastIndex=0),y.test(v))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const eM=new $y;class kh{constructor(t){this.manager=t!==void 0?t:eM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}kh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cs=new WeakMap;class tM extends kh{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,d=Cd.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(d),c.manager.itemEnd(t)},0);else{let g=Cs.get(d);g===void 0&&(g=[],Cs.set(d,g)),g.push({onLoad:i,onError:l})}return d}const h=Zo("img");function m(){v(),i&&i(this);const g=Cs.get(this)||[];for(let x=0;x<g.length;x++){const y=g[x];y.onLoad&&y.onLoad(this)}Cs.delete(this),c.manager.itemEnd(t)}function p(g){v(),l&&l(g),Cd.remove(`image:${t}`);const x=Cs.get(this)||[];for(let y=0;y<x.length;y++){const b=x[y];b.onError&&b.onError(g)}Cs.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function v(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Cd.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class nM extends kh{constructor(t){super(t)}load(t,i,r,l){const c=new Un,d=new tM(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class Xc extends lv{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class iM extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class aM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function a_(o,t,i,r){const l=rM(r);switch(i){case Q_:return o*t;case $_:return o*t/l.components*l.byteLength;case zh:return o*t/l.components*l.byteLength;case Ps:return o*t*2/l.components*l.byteLength;case Fh:return o*t*2/l.components*l.byteLength;case J_:return o*t*3/l.components*l.byteLength;case Ci:return o*t*4/l.components*l.byteLength;case Bh:return o*t*4/l.components*l.byteLength;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Fc:case Bc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(t,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(t,8)/2;case eh:case th:case ih:case ah:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nh:case rh:case sh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case ch:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case uh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case fh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case dh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case hh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case ph:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case mh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case gh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case _h:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case vh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case xh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case yh:case Mh:case Eh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case bh:case Th:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Ah:case Rh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rM(o){switch(o){case mi:case Y_:return{byteLength:1,components:1};case Yo:case j_:case va:return{byteLength:2,components:1};case Oh:case Ph:return{byteLength:2,components:4};case ki:case Lh:case Bi:return{byteLength:4,components:1};case Z_:case K_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pv(){let o=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function sM(o){const t=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,v),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,v);else{g.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<g.length;y++){const b=g[x],T=g[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,g[x]=T)}g.length=x+1;for(let y=0,b=g.length;y<b;y++){const T=g[y];o.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$M=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ob=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ub=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vt={alphahash_fragment:oM,alphahash_pars_fragment:lM,alphamap_fragment:cM,alphamap_pars_fragment:uM,alphatest_fragment:fM,alphatest_pars_fragment:dM,aomap_fragment:hM,aomap_pars_fragment:pM,batching_pars_vertex:mM,batching_vertex:gM,begin_vertex:_M,beginnormal_vertex:vM,bsdfs:xM,iridescence_fragment:SM,bumpmap_pars_fragment:yM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:bM,clipping_planes_vertex:TM,color_fragment:AM,color_pars_fragment:RM,color_pars_vertex:CM,color_vertex:wM,common:DM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:NM,displacementmap_pars_vertex:LM,displacementmap_vertex:OM,emissivemap_fragment:PM,emissivemap_pars_fragment:zM,colorspace_fragment:FM,colorspace_pars_fragment:BM,envmap_fragment:IM,envmap_common_pars_fragment:HM,envmap_pars_fragment:GM,envmap_pars_vertex:VM,envmap_physical_pars_fragment:$M,envmap_vertex:kM,fog_vertex:XM,fog_pars_vertex:WM,fog_fragment:qM,fog_pars_fragment:YM,gradientmap_pars_fragment:jM,lightmap_pars_fragment:ZM,lights_lambert_fragment:KM,lights_lambert_pars_fragment:QM,lights_pars_begin:JM,lights_toon_fragment:eE,lights_toon_pars_fragment:tE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:aE,lights_physical_pars_fragment:rE,lights_fragment_begin:sE,lights_fragment_maps:oE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:dE,map_fragment:hE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:vE,morphinstance_vertex:xE,morphcolor_vertex:SE,morphnormal_vertex:yE,morphtarget_pars_vertex:ME,morphtarget_vertex:EE,normal_fragment_begin:bE,normal_fragment_maps:TE,normal_pars_fragment:AE,normal_pars_vertex:RE,normal_vertex:CE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:LE,opaque_fragment:OE,packing:PE,premultiplied_alpha_fragment:zE,project_vertex:FE,dithering_fragment:BE,dithering_pars_fragment:IE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:kE,shadowmap_vertex:XE,shadowmask_pars_fragment:WE,skinbase_vertex:qE,skinning_pars_vertex:YE,skinning_vertex:jE,skinnormal_vertex:ZE,specularmap_fragment:KE,specularmap_pars_fragment:QE,tonemapping_fragment:JE,tonemapping_pars_fragment:$E,transmission_fragment:eb,transmission_pars_fragment:tb,uv_pars_fragment:nb,uv_pars_vertex:ib,uv_vertex:ab,worldpos_vertex:rb,background_vert:sb,background_frag:ob,backgroundCube_vert:lb,backgroundCube_frag:cb,cube_vert:ub,cube_frag:fb,depth_vert:db,depth_frag:hb,distance_vert:pb,distance_frag:mb,equirect_vert:gb,equirect_frag:_b,linedashed_vert:vb,linedashed_frag:xb,meshbasic_vert:Sb,meshbasic_frag:yb,meshlambert_vert:Mb,meshlambert_frag:Eb,meshmatcap_vert:bb,meshmatcap_frag:Tb,meshnormal_vert:Ab,meshnormal_frag:Rb,meshphong_vert:Cb,meshphong_frag:wb,meshphysical_vert:Db,meshphysical_frag:Ub,meshtoon_vert:Nb,meshtoon_frag:Lb,points_vert:Ob,points_frag:Pb,shadow_vert:zb,shadow_frag:Fb,sprite_vert:Bb,sprite_frag:Ib},Pe={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},zi={basic:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new qt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Fn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Fn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Fn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new qt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Fn([Pe.points,Pe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Fn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Fn([Pe.common,Pe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Fn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Fn([Pe.sprite,Pe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Fn([Pe.common,Pe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Fn([Pe.lights,Pe.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};zi.physical={uniforms:Fn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Nc={r:0,b:0,g:0},Tr=new Sa,Hb=new hn;function Gb(o,t,i,r,l,c,d){const h=new qt(0);let m=c===!0?0:1,p,v,g=null,x=0,y=null;function b(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?i:t).get(L)),L}function T(U){let L=!1;const z=b(U);z===null?_(h,m):z&&z.isColor&&(_(z,1),L=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,d):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,L){const z=b(L);z&&(z.isCubeTexture||z.mapping===Vc)?(v===void 0&&(v=new wi(new tl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Fs(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,P,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Tr.copy(L.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(Tr)),v.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Vt,(g!==z||x!==z.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,g=z,x=z.version,y=o.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new wi(new Is(2,2),new gi({name:"BackgroundMaterial",uniforms:Fs(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Vt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||x!==z.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=z,x=z.version,y=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,L){U.getRGB(Nc,ov(o)),r.buffers.color.setClear(Nc.r,Nc.g,Nc.b,L,d)}function w(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,L=1){h.set(U),m=L,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:T,addToRenderList:M,dispose:w}}function Vb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,d=!1;function h(D,V,J,Q,se){let ue=!1;const F=g(Q,J,V);c!==F&&(c=F,p(c.object)),ue=y(D,Q,J,se),ue&&b(D,Q,J,se),se!==null&&t.update(se,o.ELEMENT_ARRAY_BUFFER),(ue||d)&&(d=!1,L(D,V,J,Q),se!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(se).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function v(D){return o.deleteVertexArray(D)}function g(D,V,J){const Q=J.wireframe===!0;let se=r[D.id];se===void 0&&(se={},r[D.id]=se);let ue=se[V.id];ue===void 0&&(ue={},se[V.id]=ue);let F=ue[Q];return F===void 0&&(F=x(m()),ue[Q]=F),F}function x(D){const V=[],J=[],Q=[];for(let se=0;se<i;se++)V[se]=0,J[se]=0,Q[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:Q,object:D,attributes:{},index:null}}function y(D,V,J,Q){const se=c.attributes,ue=V.attributes;let F=0;const H=J.getAttributes();for(const ne in H)if(H[ne].location>=0){const ve=se[ne];let N=ue[ne];if(N===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(N=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(N=D.instanceColor)),ve===void 0||ve.attribute!==N||N&&ve.data!==N.data)return!0;F++}return c.attributesNum!==F||c.index!==Q}function b(D,V,J,Q){const se={},ue=V.attributes;let F=0;const H=J.getAttributes();for(const ne in H)if(H[ne].location>=0){let ve=ue[ne];ve===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor));const N={};N.attribute=ve,ve&&ve.data&&(N.data=ve.data),se[ne]=N,F++}c.attributes=se,c.attributesNum=F,c.index=Q}function T(){const D=c.newAttributes;for(let V=0,J=D.length;V<J;V++)D[V]=0}function M(D){_(D,0)}function _(D,V){const J=c.newAttributes,Q=c.enabledAttributes,se=c.attributeDivisors;J[D]=1,Q[D]===0&&(o.enableVertexAttribArray(D),Q[D]=1),se[D]!==V&&(o.vertexAttribDivisor(D,V),se[D]=V)}function w(){const D=c.newAttributes,V=c.enabledAttributes;for(let J=0,Q=V.length;J<Q;J++)V[J]!==D[J]&&(o.disableVertexAttribArray(J),V[J]=0)}function U(D,V,J,Q,se,ue,F){F===!0?o.vertexAttribIPointer(D,V,J,se,ue):o.vertexAttribPointer(D,V,J,Q,se,ue)}function L(D,V,J,Q){T();const se=Q.attributes,ue=J.getAttributes(),F=V.defaultAttributeValues;for(const H in ue){const ne=ue[H];if(ne.location>=0){let pe=se[H];if(pe===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),pe!==void 0){const ve=pe.normalized,N=pe.itemSize,Z=t.get(pe);if(Z===void 0)continue;const fe=Z.buffer,be=Z.type,ze=Z.bytesPerElement,ee=be===o.INT||be===o.UNSIGNED_INT||pe.gpuType===Lh;if(pe.isInterleavedBufferAttribute){const de=pe.data,Ce=de.stride,Ve=pe.offset;if(de.isInstancedInterleavedBuffer){for(let we=0;we<ne.locationSize;we++)_(ne.location+we,de.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let we=0;we<ne.locationSize;we++)M(ne.location+we);o.bindBuffer(o.ARRAY_BUFFER,fe);for(let we=0;we<ne.locationSize;we++)U(ne.location+we,N/ne.locationSize,be,ve,Ce*ze,(Ve+N/ne.locationSize*we)*ze,ee)}else{if(pe.isInstancedBufferAttribute){for(let de=0;de<ne.locationSize;de++)_(ne.location+de,pe.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let de=0;de<ne.locationSize;de++)M(ne.location+de);o.bindBuffer(o.ARRAY_BUFFER,fe);for(let de=0;de<ne.locationSize;de++)U(ne.location+de,N/ne.locationSize,be,ve,N*ze,N/ne.locationSize*de*ze,ee)}}else if(F!==void 0){const ve=F[H];if(ve!==void 0)switch(ve.length){case 2:o.vertexAttrib2fv(ne.location,ve);break;case 3:o.vertexAttrib3fv(ne.location,ve);break;case 4:o.vertexAttrib4fv(ne.location,ve);break;default:o.vertexAttrib1fv(ne.location,ve)}}}}w()}function z(){q();for(const D in r){const V=r[D];for(const J in V){const Q=V[J];for(const se in Q)v(Q[se].object),delete Q[se];delete V[J]}delete r[D]}}function B(D){if(r[D.id]===void 0)return;const V=r[D.id];for(const J in V){const Q=V[J];for(const se in Q)v(Q[se].object),delete Q[se];delete V[J]}delete r[D.id]}function P(D){for(const V in r){const J=r[V];if(J[D.id]===void 0)continue;const Q=J[D.id];for(const se in Q)v(Q[se].object),delete Q[se];delete J[D.id]}}function q(){A(),d=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:A,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:w}}function kb(o,t,i){let r;function l(p){r=p}function c(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,g){g!==0&&(o.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let y=0;for(let b=0;b<g;b++)y+=v[b];i.update(y,r,1)}function m(p,v,g,x){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)d(p[b],v[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,g);let b=0;for(let T=0;T<g;T++)b+=v[T]*x[T];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Xb(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Ci&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const q=P===va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==mi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Bi&&!q)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(dt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:L,maxSamples:z,samples:B}}function Wb(o){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Rr,h=new _t,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||r!==0||l;return l=x,r=g.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,y){const b=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||b===null||b.length===0||c&&!M)c?v(null):p();else{const w=c?0:r,U=w*4;let L=_.clippingState||null;m.value=L,L=v(b,x,U,y);for(let z=0;z!==U;++z)L[z]=i[z];_.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function v(g,x,y,b){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const _=y+T*4,w=x.matrixWorldInverse;h.getNormalMatrix(w),(M===null||M.length<_)&&(M=new Float32Array(_));for(let U=0,L=y;U!==T;++U,L+=4)d.copy(g[U]).applyMatrix4(w,h),d.normal.toArray(M,L),M[L+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function qb(o){let t=new WeakMap;function i(d,h){return h===qd?d.mapping=Nr:h===Yd&&(d.mapping=Os),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===qd||h===Yd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new uv(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const tr=4,r_=[.125,.215,.35,.446,.526,.582],wr=20,Yb=256,Go=new Xc,s_=new qt;let wd=null,Dd=0,Ud=0,Nd=!1;const jb=new re;class o_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=jb}=c;wd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wd,Dd,Ud),this._renderer.xr.enabled=Nd,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Nr||t.mapping===Os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:va,format:Ci,colorSpace:zs,depthBuffer:!1},l=l_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l_(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zb(c)),this._blurMaterial=Qb(c,t,i),this._ggxMaterial=Kb(c,t,i)}return l}_compileMaterial(t){const i=new wi(new ya,t);this._renderer.compile(i,Go)}_sceneToCubeUV(t,i,r,l,c){const m=new Ai(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(s_),g.toneMapping=Hi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new tl,new av({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let _=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,_=!0):(M.color.copy(s_),_=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):L===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const z=this._cubeSize;ws(l,L*z,U>2?z:0,z,z),g.setRenderTarget(l),_&&g.render(T,m),g.render(t,m)}g.toneMapping=y,g.autoClear=x,t.background=w}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Nr||t.mapping===Os;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=u_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;ws(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Go)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=0+p*1.25,y=g*x,{_lodMax:b}=this,T=this._sizeLods[r],M=3*T*(r>b-tr?r-b+tr:0),_=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,ws(c,M,_,3*T,2*T),l.setRenderTarget(c),l.render(h,Go),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,ws(t,M,_,3*T,2*T),l.setRenderTarget(t),l.render(h,Go)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*wr-1),T=c/b,M=isFinite(c)?1+Math.floor(v*T):wr;M>wr&&dt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${wr}`);const _=[];let w=0;for(let P=0;P<wr;++P){const q=P/T,A=Math.exp(-q*q/2);_.push(A),P===0?w+=A:P<M&&(w+=2*A)}for(let P=0;P<_.length;P++)_[P]=_[P]/w;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-r;const L=this._sizeLods[l],z=3*L*(l>U-tr?l-U+tr:0),B=4*(this._cubeSize-L);ws(i,z,B,3*L,2*L),m.setRenderTarget(i),m.render(g,Go)}}function Zb(o){const t=[],i=[],r=[];let l=o;const c=o-tr+1+r_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-tr?m=r_[d-o+tr-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,b=6,T=3,M=2,_=1,w=new Float32Array(T*b*y),U=new Float32Array(M*b*y),L=new Float32Array(_*b*y);for(let B=0;B<y;B++){const P=B%3*2/3-1,q=B>2?0:-1,A=[P,q,0,P+2/3,q,0,P+2/3,q+1,0,P,q,0,P+2/3,q+1,0,P,q+1,0];w.set(A,T*b*B),U.set(x,M*b*B);const D=[B,B,B,B,B,B];L.set(D,_*b*B)}const z=new ya;z.setAttribute("position",new Vi(w,T)),z.setAttribute("uv",new Vi(U,M)),z.setAttribute("faceIndex",new Vi(L,_)),r.push(new wi(z,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function l_(o,t,i){const r=new Gi(o,t,i);return r.texture.mapping=Vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ws(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function Kb(o,t,i){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Qb(o,t,i){const r=new Float32Array(wr),l=new re(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function c_(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function u_(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jb(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===qd||m===Yd,v=m===Nr||m===Os;if(p||v){let g=t.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new o_(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new o_(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function $b(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ko("WebGLRenderer: "+r+" extension not supported."),l}}}function eT(o,t,i,r){const l={},c=new WeakMap;function d(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",d),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const y in x)t.update(x[y],o.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,b=g.attributes.position;let T=0;if(y!==null){const w=y.array;T=y.version;for(let U=0,L=w.length;U<L;U+=3){const z=w[U+0],B=w[U+1],P=w[U+2];x.push(z,B,B,P,P,z)}}else if(b!==void 0){const w=b.array;T=b.version;for(let U=0,L=w.length/3-1;U<L;U+=3){const z=U+0,B=U+1,P=U+2;x.push(z,B,B,P,P,z)}}else return;const M=new(ev(x)?sv:rv)(x,1);M.version=T;const _=c.get(g);_&&t.remove(_),c.set(g,M)}function v(g){const x=c.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function tT(o,t,i){let r;function l(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function m(x,y){o.drawElements(r,y,c,x*d),i.update(y,r,1)}function p(x,y,b){b!==0&&(o.drawElementsInstanced(r,y,c,x*d,b),i.update(y,r,b))}function v(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,r,1)}function g(x,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/d,y[_],T[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,T,0,b);let _=0;for(let w=0;w<b;w++)_+=y[w]*T[w];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function nT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:Ut("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function iT(o,t,i){const r=new WeakMap,l=new rn;function c(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let x=r.get(h);if(x===void 0||x.count!==g){let D=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var y=D;x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let L=0;b===!0&&(L=1),T===!0&&(L=2),M===!0&&(L=3);let z=h.attributes.position.count*L,B=1;z>t.maxTextureSize&&(B=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const P=new Float32Array(z*B*4*g),q=new tv(P,z,B,g);q.type=Bi,q.needsUpdate=!0;const A=L*4;for(let V=0;V<g;V++){const J=_[V],Q=w[V],se=U[V],ue=z*B*4*V;for(let F=0;F<J.count;F++){const H=F*A;b===!0&&(l.fromBufferAttribute(J,F),P[ue+H+0]=l.x,P[ue+H+1]=l.y,P[ue+H+2]=l.z,P[ue+H+3]=0),T===!0&&(l.fromBufferAttribute(Q,F),P[ue+H+4]=l.x,P[ue+H+5]=l.y,P[ue+H+6]=l.z,P[ue+H+7]=0),M===!0&&(l.fromBufferAttribute(se,F),P[ue+H+8]=l.x,P[ue+H+9]=l.y,P[ue+H+10]=l.z,P[ue+H+11]=se.itemSize===4?l.w:1)}}x={count:g,texture:q,size:new Nt(z,B)},r.set(h,x),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function aT(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const rT={[I_]:"LINEAR_TONE_MAPPING",[H_]:"REINHARD_TONE_MAPPING",[G_]:"CINEON_TONE_MAPPING",[V_]:"ACES_FILMIC_TONE_MAPPING",[X_]:"AGX_TONE_MAPPING",[W_]:"NEUTRAL_TONE_MAPPING",[k_]:"CUSTOM_TONE_MAPPING"};function sT(o,t,i,r,l){const c=new Gi(t,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Gi(t,i,{type:va,depthBuffer:!1,stencilBuffer:!1}),h=new ya;h.setAttribute("position",new _a([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _a([0,2,0,0,2,0],2));const m=new Ky({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new wi(h,m),v=new Xc(-1,1,1,-1,0,1);let g=null,x=null,y=!1,b,T=null,M=[],_=!1;this.setSize=function(w,U){c.setSize(w,U),d.setSize(w,U);for(let L=0;L<M.length;L++){const z=M[L];z.setSize&&z.setSize(w,U)}},this.setEffects=function(w){M=w,_=M.length>0&&M[0].isRenderPass===!0;const U=c.width,L=c.height;for(let z=0;z<M.length;z++){const B=M[z];B.setSize&&B.setSize(U,L)}},this.begin=function(w,U){if(y||w.toneMapping===Hi&&M.length===0)return!1;if(T=U,U!==null){const L=U.width,z=U.height;(c.width!==L||c.height!==z)&&this.setSize(L,z)}return _===!1&&w.setRenderTarget(c),b=w.toneMapping,w.toneMapping=Hi,!0},this.hasRenderPass=function(){return _},this.end=function(w,U){w.toneMapping=b,y=!0;let L=c,z=d;for(let B=0;B<M.length;B++){const P=M[B];if(P.enabled!==!1&&(P.render(w,z,L,U),P.needsSwap!==!1)){const q=L;L=z,z=q}}if(g!==w.outputColorSpace||x!==w.toneMapping){g=w.outputColorSpace,x=w.toneMapping,m.defines={},Rt.getTransfer(g)===Vt&&(m.defines.SRGB_TRANSFER="");const B=rT[x];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,w.setRenderTarget(T),w.render(p,v),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const mv=new Un,wh=new Qo(1,1),gv=new tv,_v=new Ay,vv=new cv,f_=[],d_=[],h_=new Float32Array(16),p_=new Float32Array(9),m_=new Float32Array(4);function Hs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=f_[l];if(c===void 0&&(c=new Float32Array(l),f_[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function _n(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function qc(o,t){let i=d_[t];i===void 0&&(i=new Int32Array(t),d_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function oT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function lT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),_n(i,t)}}function cT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),_n(i,t)}}function uT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),_n(i,t)}}function fT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;m_.set(r),o.uniformMatrix2fv(this.addr,!1,m_),_n(i,r)}}function dT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;p_.set(r),o.uniformMatrix3fv(this.addr,!1,p_),_n(i,r)}}function hT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;h_.set(r),o.uniformMatrix4fv(this.addr,!1,h_),_n(i,r)}}function pT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function mT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),_n(i,t)}}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),_n(i,t)}}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),_n(i,t)}}function vT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function xT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),_n(i,t)}}function ST(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),_n(i,t)}}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),_n(i,t)}}function MT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(wh.compareFunction=i.isReversedDepthBuffer()?Hh:Ih,c=wh):c=mv,i.setTexture2D(t||c,l)}function ET(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||_v,l)}function bT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||vv,l)}function TT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||gv,l)}function AT(o){switch(o){case 5126:return oT;case 35664:return lT;case 35665:return cT;case 35666:return uT;case 35674:return fT;case 35675:return dT;case 35676:return hT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return vT;case 36294:return xT;case 36295:return ST;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return TT}}function RT(o,t){o.uniform1fv(this.addr,t)}function CT(o,t){const i=Hs(t,this.size,2);o.uniform2fv(this.addr,i)}function wT(o,t){const i=Hs(t,this.size,3);o.uniform3fv(this.addr,i)}function DT(o,t){const i=Hs(t,this.size,4);o.uniform4fv(this.addr,i)}function UT(o,t){const i=Hs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function NT(o,t){const i=Hs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function LT(o,t){const i=Hs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function OT(o,t){o.uniform1iv(this.addr,t)}function PT(o,t){o.uniform2iv(this.addr,t)}function zT(o,t){o.uniform3iv(this.addr,t)}function FT(o,t){o.uniform4iv(this.addr,t)}function BT(o,t){o.uniform1uiv(this.addr,t)}function IT(o,t){o.uniform2uiv(this.addr,t)}function HT(o,t){o.uniform3uiv(this.addr,t)}function GT(o,t){o.uniform4uiv(this.addr,t)}function VT(o,t,i){const r=this.cache,l=t.length,c=qc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=wh:d=mv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,c[h])}function kT(o,t,i){const r=this.cache,l=t.length,c=qc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||_v,c[d])}function XT(o,t,i){const r=this.cache,l=t.length,c=qc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||vv,c[d])}function WT(o,t,i){const r=this.cache,l=t.length,c=qc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||gv,c[d])}function qT(o){switch(o){case 5126:return RT;case 35664:return CT;case 35665:return wT;case 35666:return DT;case 35674:return UT;case 35675:return NT;case 35676:return LT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return zT;case 35669:case 35673:return FT;case 5125:return BT;case 36294:return IT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return WT}}class YT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=AT(i.type)}}class jT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qT(i.type)}}class ZT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function g_(o,t){o.seq.push(t),o.map[t.id]=t}function KT(o,t,i){const r=o.name,l=r.length;for(Ld.lastIndex=0;;){const c=Ld.exec(r),d=Ld.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){g_(i,p===void 0?new YT(h,o,t):new jT(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new ZT(h),g_(i,g)),i=g}}}class Ic{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);KT(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function __(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const QT=37297;let JT=0;function $T(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const v_=new _t;function e1(o){Rt._getMatrix(v_,Rt.workingColorSpace,o);const t=`mat3( ${v_.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(o)){case Hc:return[t,"LinearTransferOETF"];case Vt:return[t,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function x_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+$T(o.getShaderSource(t),h)}else return c}function t1(o,t){const i=e1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const n1={[I_]:"Linear",[H_]:"Reinhard",[G_]:"Cineon",[V_]:"ACESFilmic",[X_]:"AgX",[W_]:"Neutral",[k_]:"Custom"};function i1(o,t){const i=n1[t];return i===void 0?(dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new re;function a1(){Rt.getLuminanceCoefficients(Lc);const o=Lc.x.toFixed(4),t=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function s1(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function o1(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function qo(o){return o!==""}function S_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function y_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(o){return o.replace(l1,u1)}const c1=new Map;function u1(o,t){let i=vt[t];if(i===void 0){const r=c1.get(t);if(r!==void 0)i=vt[r],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Dh(i)}const f1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M_(o){return o.replace(f1,d1)}function d1(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function E_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const h1={[Oc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function p1(o){return h1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const m1={[Nr]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function g1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":m1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const _1={[Os]:"ENVMAP_MODE_REFRACTION"};function v1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":_1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const x1={[B_]:"ENVMAP_BLENDING_MULTIPLY",[sy]:"ENVMAP_BLENDING_MIX",[oy]:"ENVMAP_BLENDING_ADD"};function S1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":x1[o.combine]||"ENVMAP_BLENDING_NONE"}function y1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function M1(o,t,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=p1(i),p=g1(i),v=v1(i),g=S1(i),x=y1(i),y=r1(i),b=s1(c),T=l.createProgram();let M,_,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(M=[E_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[E_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?vt.tonemapping_pars_fragment:"",i.toneMapping!==Hi?i1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,t1("linearToOutputTexel",i.outputColorSpace),a1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),d=Dh(d),d=S_(d,i),d=y_(d,i),h=Dh(h),h=S_(h,i),h=y_(h,i),d=M_(d),h=M_(h),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Bg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Bg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=w+M+d,L=w+_+h,z=__(l,l.VERTEX_SHADER,U),B=__(l,l.FRAGMENT_SHADER,L);l.attachShader(T,z),l.attachShader(T,B),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(V){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(T)||"",Q=l.getShaderInfoLog(z)||"",se=l.getShaderInfoLog(B)||"",ue=J.trim(),F=Q.trim(),H=se.trim();let ne=!0,pe=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ne=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,z,B);else{const ve=x_(l,z,"vertex"),N=x_(l,B,"fragment");Ut("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ue+`
`+ve+`
`+N)}else ue!==""?dt("WebGLProgram: Program Info Log:",ue):(F===""||H==="")&&(pe=!1);pe&&(V.diagnostics={runnable:ne,programLog:ue,vertexShader:{log:F,prefix:M},fragmentShader:{log:H,prefix:_}})}l.deleteShader(z),l.deleteShader(B),q=new Ic(l,T),A=o1(l,T)}let q;this.getUniforms=function(){return q===void 0&&P(this),q};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,QT)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=B,this}let E1=0;class b1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new T1(t),i.set(t,r)),r}}class T1{constructor(t){this.id=E1++,this.code=t,this.usedTimes=0}}function A1(o,t,i,r,l,c,d){const h=new nv,m=new b1,p=new Set,v=[],g=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,D,V,J,Q){const se=J.fog,ue=Q.geometry,F=A.isMeshStandardMaterial?J.environment:null,H=(A.isMeshStandardMaterial?i:t).get(A.envMap||F),ne=H&&H.mapping===Vc?H.image.height:null,pe=b[A.type];A.precision!==null&&(y=l.getMaxPrecision(A.precision),y!==A.precision&&dt("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const ve=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,N=ve!==void 0?ve.length:0;let Z=0;ue.morphAttributes.position!==void 0&&(Z=1),ue.morphAttributes.normal!==void 0&&(Z=2),ue.morphAttributes.color!==void 0&&(Z=3);let fe,be,ze,ee;if(pe){const At=zi[pe];fe=At.vertexShader,be=At.fragmentShader}else fe=A.vertexShader,be=A.fragmentShader,m.update(A),ze=m.getVertexShaderID(A),ee=m.getFragmentShaderID(A);const de=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),Ve=Q.isInstancedMesh===!0,we=Q.isBatchedMesh===!0,ke=!!A.map,lt=!!A.matcap,st=!!H,nt=!!A.aoMap,tt=!!A.lightMap,Je=!!A.bumpMap,Tt=!!A.normalMap,G=!!A.displacementMap,zt=!!A.emissiveMap,pt=!!A.metalnessMap,Ct=!!A.roughnessMap,Xe=A.anisotropy>0,O=A.clearcoat>0,E=A.dispersion>0,X=A.iridescence>0,ge=A.sheen>0,ye=A.transmission>0,ce=Xe&&!!A.anisotropyMap,Qe=O&&!!A.clearcoatMap,De=O&&!!A.clearcoatNormalMap,Ye=O&&!!A.clearcoatRoughnessMap,ot=X&&!!A.iridescenceMap,Ee=X&&!!A.iridescenceThicknessMap,Te=ge&&!!A.sheenColorMap,Ie=ge&&!!A.sheenRoughnessMap,Fe=!!A.specularMap,Ue=!!A.specularColorMap,mt=!!A.specularIntensityMap,W=ye&&!!A.transmissionMap,Le=ye&&!!A.thicknessMap,Ae=!!A.gradientMap,Be=!!A.alphaMap,Me=A.alphaTest>0,Se=!!A.alphaHash,Re=!!A.extensions;let ct=Hi;A.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ct=o.toneMapping);const Bt={shaderID:pe,shaderType:A.type,shaderName:A.name,vertexShader:fe,fragmentShader:be,defines:A.defines,customVertexShaderID:ze,customFragmentShaderID:ee,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:we,batchingColor:we&&Q._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&Q.instanceColor!==null,instancingMorph:Ve&&Q.morphTexture!==null,outputColorSpace:de===null?o.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:zs,alphaToCoverage:!!A.alphaToCoverage,map:ke,matcap:lt,envMap:st,envMapMode:st&&H.mapping,envMapCubeUVHeight:ne,aoMap:nt,lightMap:tt,bumpMap:Je,normalMap:Tt,displacementMap:G,emissiveMap:zt,normalMapObjectSpace:Tt&&A.normalMapType===fy,normalMapTangentSpace:Tt&&A.normalMapType===uy,metalnessMap:pt,roughnessMap:Ct,anisotropy:Xe,anisotropyMap:ce,clearcoat:O,clearcoatMap:Qe,clearcoatNormalMap:De,clearcoatRoughnessMap:Ye,dispersion:E,iridescence:X,iridescenceMap:ot,iridescenceThicknessMap:Ee,sheen:ge,sheenColorMap:Te,sheenRoughnessMap:Ie,specularMap:Fe,specularColorMap:Ue,specularIntensityMap:mt,transmission:ye,transmissionMap:W,thicknessMap:Le,gradientMap:Ae,opaque:A.transparent===!1&&A.blending===Us&&A.alphaToCoverage===!1,alphaMap:Be,alphaTest:Me,alphaHash:Se,combine:A.combine,mapUv:ke&&T(A.map.channel),aoMapUv:nt&&T(A.aoMap.channel),lightMapUv:tt&&T(A.lightMap.channel),bumpMapUv:Je&&T(A.bumpMap.channel),normalMapUv:Tt&&T(A.normalMap.channel),displacementMapUv:G&&T(A.displacementMap.channel),emissiveMapUv:zt&&T(A.emissiveMap.channel),metalnessMapUv:pt&&T(A.metalnessMap.channel),roughnessMapUv:Ct&&T(A.roughnessMap.channel),anisotropyMapUv:ce&&T(A.anisotropyMap.channel),clearcoatMapUv:Qe&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&T(A.sheenRoughnessMap.channel),specularMapUv:Fe&&T(A.specularMap.channel),specularColorMapUv:Ue&&T(A.specularColorMap.channel),specularIntensityMapUv:mt&&T(A.specularIntensityMap.channel),transmissionMapUv:W&&T(A.transmissionMap.channel),thicknessMapUv:Le&&T(A.thicknessMap.channel),alphaMapUv:Be&&T(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Tt||Xe),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ue.attributes.uv&&(ke||Be),fog:!!se,useFog:A.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ce,skinning:Q.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Z,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ct,decodeVideoTexture:ke&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===Vt,decodeVideoTextureEmissive:zt&&A.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(A.emissiveMap.colorSpace)===Vt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fi,flipSided:A.side===Wn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Re&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&A.extensions.multiDraw===!0||we)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function _(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)D.push(V),D.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(w(D,A),U(D,A),D.push(o.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function w(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function U(A,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),A.push(h.mask)}function L(A){const D=b[A.type];let V;if(D){const J=zi[D];V=Hy.clone(J.uniforms)}else V=A.uniforms;return V}function z(A,D){let V=g.get(D);return V!==void 0?++V.usedTimes:(V=new M1(o,D,A,c),v.push(V),g.set(D,V)),V}function B(A){if(--A.usedTimes===0){const D=v.indexOf(A);v[D]=v[v.length-1],v.pop(),g.delete(A.cacheKey),A.destroy()}}function P(A){m.remove(A)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:L,acquireProgram:z,releaseProgram:B,releaseShaderCache:P,programs:v,dispose:q}}function R1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function C1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function b_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function T_(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(g,x,y,b,T,M){let _=o[t];return _===void 0?(_={id:g.id,object:g,geometry:x,material:y,groupOrder:b,renderOrder:g.renderOrder,z:T,group:M},o[t]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=y,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=T,_.group=M),t++,_}function h(g,x,y,b,T,M){const _=d(g,x,y,b,T,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(g,x,y,b,T,M){const _=d(g,x,y,b,T,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||C1),r.length>1&&r.sort(x||b_),l.length>1&&l.sort(x||b_)}function v(){for(let g=t,x=o.length;g<x;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:v,sort:p}}function w1(){let o=new WeakMap;function t(r,l){const c=o.get(r);let d;return c===void 0?(d=new T_,o.set(r,[d])):l>=c.length?(d=new T_,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function D1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new qt};break;case"SpotLight":i={position:new re,direction:new re,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new qt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":i={color:new qt,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function U1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let N1=0;function L1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function O1(o){const t=new D1,i=U1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const l=new re,c=new hn,d=new hn;function h(p){let v=0,g=0,x=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,b=0,T=0,M=0,_=0,w=0,U=0,L=0,z=0,B=0,P=0;p.sort(L1);for(let A=0,D=p.length;A<D;A++){const V=p[A],J=V.color,Q=V.intensity,se=V.distance;let ue=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ps?ue=V.shadow.map.texture:ue=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=J.r*Q,g+=J.g*Q,x+=J.b*Q;else if(V.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(V.sh.coefficients[F],Q);P++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,ne=i.get(V);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,r.directionalShadow[y]=ne,r.directionalShadowMap[y]=ue,r.directionalShadowMatrix[y]=V.shadow.matrix,w++}r.directional[y]=F,y++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(J).multiplyScalar(Q),F.distance=se,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,r.spot[T]=F;const H=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,H.updateMatrices(V),V.castShadow&&B++),r.spotLightMatrix[T]=H.matrix,V.castShadow){const ne=i.get(V);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,r.spotShadow[T]=ne,r.spotShadowMap[T]=ue,L++}T++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(J).multiplyScalar(Q),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=F,M++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const H=V.shadow,ne=i.get(V);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,ne.shadowCameraNear=H.camera.near,ne.shadowCameraFar=H.camera.far,r.pointShadow[b]=ne,r.pointShadowMap[b]=ue,r.pointShadowMatrix[b]=V.shadow.matrix,U++}r.point[b]=F,b++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(Q),F.groundColor.copy(V.groundColor).multiplyScalar(Q),r.hemi[_]=F,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=x;const q=r.hash;(q.directionalLength!==y||q.pointLength!==b||q.spotLength!==T||q.rectAreaLength!==M||q.hemiLength!==_||q.numDirectionalShadows!==w||q.numPointShadows!==U||q.numSpotShadows!==L||q.numSpotMaps!==z||q.numLightProbes!==P)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=L+z-B,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=P,q.directionalLength=y,q.pointLength=b,q.spotLength=T,q.rectAreaLength=M,q.hemiLength=_,q.numDirectionalShadows=w,q.numPointShadows=U,q.numSpotShadows=L,q.numSpotMaps=z,q.numLightProbes=P,r.version=N1++)}function m(p,v){let g=0,x=0,y=0,b=0,T=0;const M=v.matrixWorldInverse;for(let _=0,w=p.length;_<w;_++){const U=p[_];if(U.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),g++}else if(U.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const L=r.rectArea[b];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),d.identity(),c.copy(U.matrixWorld),c.premultiply(M),d.extractRotation(c),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),b++}else if(U.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),x++}else if(U.isHemisphereLight){const L=r.hemi[T];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:r}}function A_(o){const t=new O1(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function c(v){i.push(v)}function d(v){r.push(v)}function h(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function P1(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new A_(o),t.set(l,[h])):c>=d.length?(h=new A_(o),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,B1=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],I1=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],R_=new hn,Vo=new re,Od=new re;function H1(o,t,i){let r=new dv;const l=new Nt,c=new Nt,d=new rn,h=new Qy,m=new Jy,p={},v=i.maxTextureSize,g={[nr]:Wn,[Wn]:nr,[Fi]:Fi},x=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:z1,fragmentShader:F1}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new ya;b.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new wi(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let _=this.type;this.render=function(B,P,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===GS&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Oc);const A=o.getRenderTarget(),D=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),J=o.state;J.setBlending(ma),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Q=_!==this.type;Q&&P.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(ue=>ue.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,ue=B.length;se<ue;se++){const F=B[se],H=F.shadow;if(H===void 0){dt("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ne=H.getFrameExtents();if(l.multiply(ne),c.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ne.x),l.x=c.x*ne.x,H.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ne.y),l.y=c.y*ne.y,H.mapSize.y=c.y)),H.map===null||Q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Wo){if(F.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Gi(l.x,l.y,{format:Ps,type:va,minFilter:dn,magFilter:dn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new Qo(l.x,l.y,Bi),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=xa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn}else{F.isPointLight?(H.map=new uv(l.x),H.map.depthTexture=new Zy(l.x,ki)):(H.map=new Gi(l.x,l.y),H.map.depthTexture=new Qo(l.x,l.y,ki)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=xa;const ve=o.state.buffers.depth.getReversed();this.type===Oc?(H.map.depthTexture.compareFunction=ve?Hh:Ih,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Dn,H.map.depthTexture.magFilter=Dn)}H.camera.updateProjectionMatrix()}const pe=H.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<pe;ve++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,ve),o.clear();else{ve===0&&(o.setRenderTarget(H.map),o.clear());const N=H.getViewport(ve);d.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),J.viewport(d)}if(F.isPointLight){const N=H.camera,Z=H.matrix,fe=F.distance||N.far;fe!==N.far&&(N.far=fe,N.updateProjectionMatrix()),Vo.setFromMatrixPosition(F.matrixWorld),N.position.copy(Vo),Od.copy(N.position),Od.add(B1[ve]),N.up.copy(I1[ve]),N.lookAt(Od),N.updateMatrixWorld(),Z.makeTranslation(-Vo.x,-Vo.y,-Vo.z),R_.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H._frustum.setFromProjectionMatrix(R_,N.coordinateSystem,N.reversedDepth)}else H.updateMatrices(F);r=H.getFrustum(),L(P,q,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===Wo&&w(H,q),H.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(A,D,V)};function w(B,P){const q=t.update(T);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Gi(l.x,l.y,{format:Ps,type:va})),x.uniforms.shadow_pass.value=B.map.depthTexture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(P,null,q,x,T,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(P,null,q,y,T,null)}function U(B,P,q,A){let D=null;const V=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)D=V;else if(D=q.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const J=D.uuid,Q=P.uuid;let se=p[J];se===void 0&&(se={},p[J]=se);let ue=se[Q];ue===void 0&&(ue=D.clone(),se[Q]=ue,P.addEventListener("dispose",z)),D=ue}if(D.visible=P.visible,D.wireframe=P.wireframe,A===Wo?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:g[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const J=o.properties.get(D);J.light=q}return D}function L(B,P,q,A,D){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===Wo)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const Q=t.update(B),se=B.material;if(Array.isArray(se)){const ue=Q.groups;for(let F=0,H=ue.length;F<H;F++){const ne=ue[F],pe=se[ne.materialIndex];if(pe&&pe.visible){const ve=U(B,pe,A,D);B.onBeforeShadow(o,B,P,q,Q,ve,ne),o.renderBufferDirect(q,null,Q,ve,B,ne),B.onAfterShadow(o,B,P,q,Q,ve,ne)}}}else if(se.visible){const ue=U(B,se,A,D);B.onBeforeShadow(o,B,P,q,Q,ue,null),o.renderBufferDirect(q,null,Q,ue,B,null),B.onAfterShadow(o,B,P,q,Q,ue,null)}}const J=B.children;for(let Q=0,se=J.length;Q<se;Q++)L(J[Q],P,q,A,D)}function z(B){B.target.removeEventListener("dispose",z);for(const q in p){const A=p[q],D=B.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}const G1={[Id]:Hd,[Gd]:Xd,[Vd]:Wd,[Ls]:kd,[Hd]:Id,[Xd]:Gd,[Wd]:Vd,[kd]:Ls};function V1(o,t){function i(){let W=!1;const Le=new rn;let Ae=null;const Be=new rn(0,0,0,0);return{setMask:function(Me){Ae!==Me&&!W&&(o.colorMask(Me,Me,Me,Me),Ae=Me)},setLocked:function(Me){W=Me},setClear:function(Me,Se,Re,ct,Bt){Bt===!0&&(Me*=ct,Se*=ct,Re*=ct),Le.set(Me,Se,Re,ct),Be.equals(Le)===!1&&(o.clearColor(Me,Se,Re,ct),Be.copy(Le))},reset:function(){W=!1,Ae=null,Be.set(-1,0,0,0)}}}function r(){let W=!1,Le=!1,Ae=null,Be=null,Me=null;return{setReversed:function(Se){if(Le!==Se){const Re=t.get("EXT_clip_control");Se?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),Le=Se;const ct=Me;Me=null,this.setClear(ct)}},getReversed:function(){return Le},setTest:function(Se){Se?de(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(Se){Ae!==Se&&!W&&(o.depthMask(Se),Ae=Se)},setFunc:function(Se){if(Le&&(Se=G1[Se]),Be!==Se){switch(Se){case Id:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Gd:o.depthFunc(o.LESS);break;case Ls:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case kd:o.depthFunc(o.GEQUAL);break;case Xd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Be=Se}},setLocked:function(Se){W=Se},setClear:function(Se){Me!==Se&&(Le&&(Se=1-Se),o.clearDepth(Se),Me=Se)},reset:function(){W=!1,Ae=null,Be=null,Me=null,Le=!1}}}function l(){let W=!1,Le=null,Ae=null,Be=null,Me=null,Se=null,Re=null,ct=null,Bt=null;return{setTest:function(At){W||(At?de(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(At){Le!==At&&!W&&(o.stencilMask(At),Le=At)},setFunc:function(At,Nn,_i){(Ae!==At||Be!==Nn||Me!==_i)&&(o.stencilFunc(At,Nn,_i),Ae=At,Be=Nn,Me=_i)},setOp:function(At,Nn,_i){(Se!==At||Re!==Nn||ct!==_i)&&(o.stencilOp(At,Nn,_i),Se=At,Re=Nn,ct=_i)},setLocked:function(At){W=At},setClear:function(At){Bt!==At&&(o.clearStencil(At),Bt=At)},reset:function(){W=!1,Le=null,Ae=null,Be=null,Me=null,Se=null,Re=null,ct=null,Bt=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,y=[],b=null,T=!1,M=null,_=null,w=null,U=null,L=null,z=null,B=null,P=new qt(0,0,0),q=0,A=!1,D=null,V=null,J=null,Q=null,se=null;const ue=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const ne=o.getParameter(o.VERSION);ne.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ne)[1]),F=H>=1):ne.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),F=H>=2);let pe=null,ve={};const N=o.getParameter(o.SCISSOR_BOX),Z=o.getParameter(o.VIEWPORT),fe=new rn().fromArray(N),be=new rn().fromArray(Z);function ze(W,Le,Ae,Be){const Me=new Uint8Array(4),Se=o.createTexture();o.bindTexture(W,Se),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Re=0;Re<Ae;Re++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,Be,0,o.RGBA,o.UNSIGNED_BYTE,Me):o.texImage2D(Le+Re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Me);return Se}const ee={};ee[o.TEXTURE_2D]=ze(o.TEXTURE_2D,o.TEXTURE_2D,1),ee[o.TEXTURE_CUBE_MAP]=ze(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[o.TEXTURE_2D_ARRAY]=ze(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ee[o.TEXTURE_3D]=ze(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),de(o.DEPTH_TEST),d.setFunc(Ls),Je(!1),Tt(Ng),de(o.CULL_FACE),nt(ma);function de(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function Ce(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function Ve(W,Le){return g[W]!==Le?(o.bindFramebuffer(W,Le),g[W]=Le,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Le),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function we(W,Le){let Ae=y,Be=!1;if(W){Ae=x.get(Le),Ae===void 0&&(Ae=[],x.set(Le,Ae));const Me=W.textures;if(Ae.length!==Me.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let Se=0,Re=Me.length;Se<Re;Se++)Ae[Se]=o.COLOR_ATTACHMENT0+Se;Ae.length=Me.length,Be=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,Be=!0);Be&&o.drawBuffers(Ae)}function ke(W){return b!==W?(o.useProgram(W),b=W,!0):!1}const lt={[Cr]:o.FUNC_ADD,[kS]:o.FUNC_SUBTRACT,[XS]:o.FUNC_REVERSE_SUBTRACT};lt[WS]=o.MIN,lt[qS]=o.MAX;const st={[YS]:o.ZERO,[jS]:o.ONE,[ZS]:o.SRC_COLOR,[Fd]:o.SRC_ALPHA,[ty]:o.SRC_ALPHA_SATURATE,[$S]:o.DST_COLOR,[QS]:o.DST_ALPHA,[KS]:o.ONE_MINUS_SRC_COLOR,[Bd]:o.ONE_MINUS_SRC_ALPHA,[ey]:o.ONE_MINUS_DST_COLOR,[JS]:o.ONE_MINUS_DST_ALPHA,[ny]:o.CONSTANT_COLOR,[iy]:o.ONE_MINUS_CONSTANT_COLOR,[ay]:o.CONSTANT_ALPHA,[ry]:o.ONE_MINUS_CONSTANT_ALPHA};function nt(W,Le,Ae,Be,Me,Se,Re,ct,Bt,At){if(W===ma){T===!0&&(Ce(o.BLEND),T=!1);return}if(T===!1&&(de(o.BLEND),T=!0),W!==VS){if(W!==M||At!==A){if((_!==Cr||L!==Cr)&&(o.blendEquation(o.FUNC_ADD),_=Cr,L=Cr),At)switch(W){case Us:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lg:o.blendFunc(o.ONE,o.ONE);break;case Og:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Pg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ut("WebGLState: Invalid blending: ",W);break}else switch(W){case Us:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Og:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pg:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",W);break}w=null,U=null,z=null,B=null,P.set(0,0,0),q=0,M=W,A=At}return}Me=Me||Le,Se=Se||Ae,Re=Re||Be,(Le!==_||Me!==L)&&(o.blendEquationSeparate(lt[Le],lt[Me]),_=Le,L=Me),(Ae!==w||Be!==U||Se!==z||Re!==B)&&(o.blendFuncSeparate(st[Ae],st[Be],st[Se],st[Re]),w=Ae,U=Be,z=Se,B=Re),(ct.equals(P)===!1||Bt!==q)&&(o.blendColor(ct.r,ct.g,ct.b,Bt),P.copy(ct),q=Bt),M=W,A=!1}function tt(W,Le){W.side===Fi?Ce(o.CULL_FACE):de(o.CULL_FACE);let Ae=W.side===Wn;Le&&(Ae=!Ae),Je(Ae),W.blending===Us&&W.transparent===!1?nt(ma):nt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Be=W.stencilWrite;h.setTest(Be),Be&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),zt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function Je(W){D!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),D=W)}function Tt(W){W!==IS?(de(o.CULL_FACE),W!==V&&(W===Ng?o.cullFace(o.BACK):W===HS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),V=W}function G(W){W!==J&&(F&&o.lineWidth(W),J=W)}function zt(W,Le,Ae){W?(de(o.POLYGON_OFFSET_FILL),(Q!==Le||se!==Ae)&&(o.polygonOffset(Le,Ae),Q=Le,se=Ae)):Ce(o.POLYGON_OFFSET_FILL)}function pt(W){W?de(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function Ct(W){W===void 0&&(W=o.TEXTURE0+ue-1),pe!==W&&(o.activeTexture(W),pe=W)}function Xe(W,Le,Ae){Ae===void 0&&(pe===null?Ae=o.TEXTURE0+ue-1:Ae=pe);let Be=ve[Ae];Be===void 0&&(Be={type:void 0,texture:void 0},ve[Ae]=Be),(Be.type!==W||Be.texture!==Le)&&(pe!==Ae&&(o.activeTexture(Ae),pe=Ae),o.bindTexture(W,Le||ee[W]),Be.type=W,Be.texture=Le)}function O(){const W=ve[pe];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function X(){try{o.compressedTexImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function ge(){try{o.texSubImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function ye(){try{o.texSubImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function ce(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Qe(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function De(){try{o.texStorage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Ye(){try{o.texStorage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function ot(){try{o.texImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Ee(){try{o.texImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Te(W){fe.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),fe.copy(W))}function Ie(W){be.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),be.copy(W))}function Fe(W,Le){let Ae=p.get(Le);Ae===void 0&&(Ae=new WeakMap,p.set(Le,Ae));let Be=Ae.get(W);Be===void 0&&(Be=o.getUniformBlockIndex(Le,W.name),Ae.set(W,Be))}function Ue(W,Le){const Be=p.get(Le).get(W);m.get(Le)!==Be&&(o.uniformBlockBinding(Le,Be,W.__bindingPointIndex),m.set(Le,Be))}function mt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},pe=null,ve={},g={},x=new WeakMap,y=[],b=null,T=!1,M=null,_=null,w=null,U=null,L=null,z=null,B=null,P=new qt(0,0,0),q=0,A=!1,D=null,V=null,J=null,Q=null,se=null,fe.set(0,0,o.canvas.width,o.canvas.height),be.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:de,disable:Ce,bindFramebuffer:Ve,drawBuffers:we,useProgram:ke,setBlending:nt,setMaterial:tt,setFlipSided:Je,setCullFace:Tt,setLineWidth:G,setPolygonOffset:zt,setScissorTest:pt,activeTexture:Ct,bindTexture:Xe,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:ot,texImage3D:Ee,updateUBOMapping:Fe,uniformBlockBinding:Ue,texStorage2D:De,texStorage3D:Ye,texSubImage2D:ge,texSubImage3D:ye,compressedTexSubImage2D:ce,compressedTexSubImage3D:Qe,scissor:Te,viewport:Ie,reset:mt}}function k1(o,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,v=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return y?new OffscreenCanvas(O,E):Zo("canvas")}function T(O,E,X){let ge=1;const ye=Xe(O);if((ye.width>X||ye.height>X)&&(ge=X/Math.max(ye.width,ye.height)),ge<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ce=Math.floor(ge*ye.width),Qe=Math.floor(ge*ye.height);g===void 0&&(g=b(ce,Qe));const De=E?b(ce,Qe):g;return De.width=ce,De.height=Qe,De.getContext("2d").drawImage(O,0,0,ce,Qe),dt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+ce+"x"+Qe+")."),De}else return"data"in O&&dt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),O;return O}function M(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function w(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(O,E,X,ge,ye=!1){if(O!==null){if(o[O]!==void 0)return o[O];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ce=E;if(E===o.RED&&(X===o.FLOAT&&(ce=o.R32F),X===o.HALF_FLOAT&&(ce=o.R16F),X===o.UNSIGNED_BYTE&&(ce=o.R8)),E===o.RED_INTEGER&&(X===o.UNSIGNED_BYTE&&(ce=o.R8UI),X===o.UNSIGNED_SHORT&&(ce=o.R16UI),X===o.UNSIGNED_INT&&(ce=o.R32UI),X===o.BYTE&&(ce=o.R8I),X===o.SHORT&&(ce=o.R16I),X===o.INT&&(ce=o.R32I)),E===o.RG&&(X===o.FLOAT&&(ce=o.RG32F),X===o.HALF_FLOAT&&(ce=o.RG16F),X===o.UNSIGNED_BYTE&&(ce=o.RG8)),E===o.RG_INTEGER&&(X===o.UNSIGNED_BYTE&&(ce=o.RG8UI),X===o.UNSIGNED_SHORT&&(ce=o.RG16UI),X===o.UNSIGNED_INT&&(ce=o.RG32UI),X===o.BYTE&&(ce=o.RG8I),X===o.SHORT&&(ce=o.RG16I),X===o.INT&&(ce=o.RG32I)),E===o.RGB_INTEGER&&(X===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),X===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),X===o.UNSIGNED_INT&&(ce=o.RGB32UI),X===o.BYTE&&(ce=o.RGB8I),X===o.SHORT&&(ce=o.RGB16I),X===o.INT&&(ce=o.RGB32I)),E===o.RGBA_INTEGER&&(X===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),X===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),X===o.UNSIGNED_INT&&(ce=o.RGBA32UI),X===o.BYTE&&(ce=o.RGBA8I),X===o.SHORT&&(ce=o.RGBA16I),X===o.INT&&(ce=o.RGBA32I)),E===o.RGB&&(X===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),X===o.UNSIGNED_INT_10F_11F_11F_REV&&(ce=o.R11F_G11F_B10F)),E===o.RGBA){const Qe=ye?Hc:Rt.getTransfer(ge);X===o.FLOAT&&(ce=o.RGBA32F),X===o.HALF_FLOAT&&(ce=o.RGBA16F),X===o.UNSIGNED_BYTE&&(ce=Qe===Vt?o.SRGB8_ALPHA8:o.RGBA8),X===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),X===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function L(O,E){let X;return O?E===null||E===ki||E===jo?X=o.DEPTH24_STENCIL8:E===Bi?X=o.DEPTH32F_STENCIL8:E===Yo&&(X=o.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ki||E===jo?X=o.DEPTH_COMPONENT24:E===Bi?X=o.DEPTH_COMPONENT32F:E===Yo&&(X=o.DEPTH_COMPONENT16),X}function z(O,E){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Dn&&O.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function B(O){const E=O.target;E.removeEventListener("dispose",B),q(E),E.isVideoTexture&&v.delete(E)}function P(O){const E=O.target;E.removeEventListener("dispose",P),D(E)}function q(O){const E=r.get(O);if(E.__webglInit===void 0)return;const X=O.source,ge=x.get(X);if(ge){const ye=ge[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&A(O),Object.keys(ge).length===0&&x.delete(X)}r.remove(O)}function A(O){const E=r.get(O);o.deleteTexture(E.__webglTexture);const X=O.source,ge=x.get(X);delete ge[E.__cacheKey],d.memory.textures--}function D(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(E.__webglFramebuffer[ge]))for(let ye=0;ye<E.__webglFramebuffer[ge].length;ye++)o.deleteFramebuffer(E.__webglFramebuffer[ge][ye]);else o.deleteFramebuffer(E.__webglFramebuffer[ge]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ge])}else{if(Array.isArray(E.__webglFramebuffer))for(let ge=0;ge<E.__webglFramebuffer.length;ge++)o.deleteFramebuffer(E.__webglFramebuffer[ge]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ge=0;ge<E.__webglColorRenderbuffer.length;ge++)E.__webglColorRenderbuffer[ge]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ge]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=O.textures;for(let ge=0,ye=X.length;ge<ye;ge++){const ce=r.get(X[ge]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),d.memory.textures--),r.remove(X[ge])}r.remove(O)}let V=0;function J(){V=0}function Q(){const O=V;return O>=l.maxTextures&&dt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function se(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ue(O,E){const X=r.get(O);if(O.isVideoTexture&&pt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&X.__version!==O.version){const ge=O.image;if(ge===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(X,O,E);return}}else O.isExternalTexture&&(X.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,X.__webglTexture,o.TEXTURE0+E)}function F(O,E){const X=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&X.__version!==O.version){ee(X,O,E);return}else O.isExternalTexture&&(X.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,X.__webglTexture,o.TEXTURE0+E)}function H(O,E){const X=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&X.__version!==O.version){ee(X,O,E);return}i.bindTexture(o.TEXTURE_3D,X.__webglTexture,o.TEXTURE0+E)}function ne(O,E){const X=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&X.__version!==O.version){de(X,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,X.__webglTexture,o.TEXTURE0+E)}const pe={[jd]:o.REPEAT,[ti]:o.CLAMP_TO_EDGE,[Zd]:o.MIRRORED_REPEAT},ve={[Dn]:o.NEAREST,[ly]:o.NEAREST_MIPMAP_NEAREST,[hc]:o.NEAREST_MIPMAP_LINEAR,[dn]:o.LINEAR,[id]:o.LINEAR_MIPMAP_NEAREST,[Dr]:o.LINEAR_MIPMAP_LINEAR},N={[dy]:o.NEVER,[_y]:o.ALWAYS,[hy]:o.LESS,[Ih]:o.LEQUAL,[py]:o.EQUAL,[Hh]:o.GEQUAL,[my]:o.GREATER,[gy]:o.NOTEQUAL};function Z(O,E){if(E.type===Bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===id||E.magFilter===hc||E.magFilter===Dr||E.minFilter===dn||E.minFilter===id||E.minFilter===hc||E.minFilter===Dr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,pe[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,pe[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,pe[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,ve[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==hc&&E.minFilter!==Dr||E.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function fe(O,E){let X=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",B));const ge=E.source;let ye=x.get(ge);ye===void 0&&(ye={},x.set(ge,ye));const ce=se(E);if(ce!==O.__cacheKey){ye[ce]===void 0&&(ye[ce]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,X=!0),ye[ce].usedTimes++;const Qe=ye[O.__cacheKey];Qe!==void 0&&(ye[O.__cacheKey].usedTimes--,Qe.usedTimes===0&&A(E)),O.__cacheKey=ce,O.__webglTexture=ye[ce].texture}return X}function be(O,E,X){return Math.floor(Math.floor(O/X)/E)}function ze(O,E,X,ge){const ce=O.updateRanges;if(ce.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,X,ge,E.data);else{ce.sort((Ee,Te)=>Ee.start-Te.start);let Qe=0;for(let Ee=1;Ee<ce.length;Ee++){const Te=ce[Qe],Ie=ce[Ee],Fe=Te.start+Te.count,Ue=be(Ie.start,E.width,4),mt=be(Te.start,E.width,4);Ie.start<=Fe+1&&Ue===mt&&be(Ie.start+Ie.count-1,E.width,4)===Ue?Te.count=Math.max(Te.count,Ie.start+Ie.count-Te.start):(++Qe,ce[Qe]=Ie)}ce.length=Qe+1;const De=o.getParameter(o.UNPACK_ROW_LENGTH),Ye=o.getParameter(o.UNPACK_SKIP_PIXELS),ot=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Ee=0,Te=ce.length;Ee<Te;Ee++){const Ie=ce[Ee],Fe=Math.floor(Ie.start/4),Ue=Math.ceil(Ie.count/4),mt=Fe%E.width,W=Math.floor(Fe/E.width),Le=Ue,Ae=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,mt),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,mt,W,Le,Ae,X,ge,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,De),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ye),o.pixelStorei(o.UNPACK_SKIP_ROWS,ot)}}function ee(O,E,X){let ge=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=o.TEXTURE_3D);const ye=fe(O,E),ce=E.source;i.bindTexture(ge,O.__webglTexture,o.TEXTURE0+X);const Qe=r.get(ce);if(ce.version!==Qe.__version||ye===!0){i.activeTexture(o.TEXTURE0+X);const De=Rt.getPrimaries(Rt.workingColorSpace),Ye=E.colorSpace===er?null:Rt.getPrimaries(E.colorSpace),ot=E.colorSpace===er||De===Ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Ee=T(E.image,!1,l.maxTextureSize);Ee=Ct(E,Ee);const Te=c.convert(E.format,E.colorSpace),Ie=c.convert(E.type);let Fe=U(E.internalFormat,Te,Ie,E.colorSpace,E.isVideoTexture);Z(ge,E);let Ue;const mt=E.mipmaps,W=E.isVideoTexture!==!0,Le=Qe.__version===void 0||ye===!0,Ae=ce.dataReady,Be=z(E,Ee);if(E.isDepthTexture)Fe=L(E.format===Ur,E.type),Le&&(W?i.texStorage2D(o.TEXTURE_2D,1,Fe,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,Te,Ie,null));else if(E.isDataTexture)if(mt.length>0){W&&Le&&i.texStorage2D(o.TEXTURE_2D,Be,Fe,mt[0].width,mt[0].height);for(let Me=0,Se=mt.length;Me<Se;Me++)Ue=mt[Me],W?Ae&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,Ie,Ue.data):i.texImage2D(o.TEXTURE_2D,Me,Fe,Ue.width,Ue.height,0,Te,Ie,Ue.data);E.generateMipmaps=!1}else W?(Le&&i.texStorage2D(o.TEXTURE_2D,Be,Fe,Ee.width,Ee.height),Ae&&ze(E,Ee,Te,Ie)):i.texImage2D(o.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,Te,Ie,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Fe,mt[0].width,mt[0].height,Ee.depth);for(let Me=0,Se=mt.length;Me<Se;Me++)if(Ue=mt[Me],E.format!==Ci)if(Te!==null)if(W){if(Ae)if(E.layerUpdates.size>0){const Re=a_(Ue.width,Ue.height,E.format,E.type);for(const ct of E.layerUpdates){const Bt=Ue.data.subarray(ct*Re/Ue.data.BYTES_PER_ELEMENT,(ct+1)*Re/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,ct,Ue.width,Ue.height,1,Te,Bt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,Ee.depth,Te,Ue.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Fe,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ae&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,Ee.depth,Te,Ie,Ue.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,Fe,Ue.width,Ue.height,Ee.depth,0,Te,Ie,Ue.data)}else{W&&Le&&i.texStorage2D(o.TEXTURE_2D,Be,Fe,mt[0].width,mt[0].height);for(let Me=0,Se=mt.length;Me<Se;Me++)Ue=mt[Me],E.format!==Ci?Te!==null?W?Ae&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,Ue.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,Fe,Ue.width,Ue.height,0,Ue.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ae&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,Te,Ie,Ue.data):i.texImage2D(o.TEXTURE_2D,Me,Fe,Ue.width,Ue.height,0,Te,Ie,Ue.data)}else if(E.isDataArrayTexture)if(W){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Fe,Ee.width,Ee.height,Ee.depth),Ae)if(E.layerUpdates.size>0){const Me=a_(Ee.width,Ee.height,E.format,E.type);for(const Se of E.layerUpdates){const Re=Ee.data.subarray(Se*Me/Ee.data.BYTES_PER_ELEMENT,(Se+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Se,Ee.width,Ee.height,1,Te,Ie,Re)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,Ie,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Fe,Ee.width,Ee.height,Ee.depth,0,Te,Ie,Ee.data);else if(E.isData3DTexture)W?(Le&&i.texStorage3D(o.TEXTURE_3D,Be,Fe,Ee.width,Ee.height,Ee.depth),Ae&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Te,Ie,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,Fe,Ee.width,Ee.height,Ee.depth,0,Te,Ie,Ee.data);else if(E.isFramebufferTexture){if(Le)if(W)i.texStorage2D(o.TEXTURE_2D,Be,Fe,Ee.width,Ee.height);else{let Me=Ee.width,Se=Ee.height;for(let Re=0;Re<Be;Re++)i.texImage2D(o.TEXTURE_2D,Re,Fe,Me,Se,0,Te,Ie,null),Me>>=1,Se>>=1}}else if(mt.length>0){if(W&&Le){const Me=Xe(mt[0]);i.texStorage2D(o.TEXTURE_2D,Be,Fe,Me.width,Me.height)}for(let Me=0,Se=mt.length;Me<Se;Me++)Ue=mt[Me],W?Ae&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Te,Ie,Ue):i.texImage2D(o.TEXTURE_2D,Me,Fe,Te,Ie,Ue);E.generateMipmaps=!1}else if(W){if(Le){const Me=Xe(Ee);i.texStorage2D(o.TEXTURE_2D,Be,Fe,Me.width,Me.height)}Ae&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Te,Ie,Ee)}else i.texImage2D(o.TEXTURE_2D,0,Fe,Te,Ie,Ee);M(E)&&_(ge),Qe.__version=ce.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function de(O,E,X){if(E.image.length!==6)return;const ge=fe(O,E),ye=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+X);const ce=r.get(ye);if(ye.version!==ce.__version||ge===!0){i.activeTexture(o.TEXTURE0+X);const Qe=Rt.getPrimaries(Rt.workingColorSpace),De=E.colorSpace===er?null:Rt.getPrimaries(E.colorSpace),Ye=E.colorSpace===er||Qe===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const ot=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,Te=[];for(let Se=0;Se<6;Se++)!ot&&!Ee?Te[Se]=T(E.image[Se],!0,l.maxCubemapSize):Te[Se]=Ee?E.image[Se].image:E.image[Se],Te[Se]=Ct(E,Te[Se]);const Ie=Te[0],Fe=c.convert(E.format,E.colorSpace),Ue=c.convert(E.type),mt=U(E.internalFormat,Fe,Ue,E.colorSpace),W=E.isVideoTexture!==!0,Le=ce.__version===void 0||ge===!0,Ae=ye.dataReady;let Be=z(E,Ie);Z(o.TEXTURE_CUBE_MAP,E);let Me;if(ot){W&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,mt,Ie.width,Ie.height);for(let Se=0;Se<6;Se++){Me=Te[Se].mipmaps;for(let Re=0;Re<Me.length;Re++){const ct=Me[Re];E.format!==Ci?Fe!==null?W?Ae&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re,0,0,ct.width,ct.height,Fe,ct.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re,mt,ct.width,ct.height,0,ct.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re,0,0,ct.width,ct.height,Fe,Ue,ct.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re,mt,ct.width,ct.height,0,Fe,Ue,ct.data)}}}else{if(Me=E.mipmaps,W&&Le){Me.length>0&&Be++;const Se=Xe(Te[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,mt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ee){W?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Te[Se].width,Te[Se].height,Fe,Ue,Te[Se].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,mt,Te[Se].width,Te[Se].height,0,Fe,Ue,Te[Se].data);for(let Re=0;Re<Me.length;Re++){const Bt=Me[Re].image[Se].image;W?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re+1,0,0,Bt.width,Bt.height,Fe,Ue,Bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re+1,mt,Bt.width,Bt.height,0,Fe,Ue,Bt.data)}}else{W?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Fe,Ue,Te[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,mt,Fe,Ue,Te[Se]);for(let Re=0;Re<Me.length;Re++){const ct=Me[Re];W?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re+1,0,0,Fe,Ue,ct.image[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Re+1,mt,Fe,Ue,ct.image[Se])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),ce.__version=ye.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Ce(O,E,X,ge,ye,ce){const Qe=c.convert(X.format,X.colorSpace),De=c.convert(X.type),Ye=U(X.internalFormat,Qe,De,X.colorSpace),ot=r.get(E),Ee=r.get(X);if(Ee.__renderTarget=E,!ot.__hasExternalTextures){const Te=Math.max(1,E.width>>ce),Ie=Math.max(1,E.height>>ce);ye===o.TEXTURE_3D||ye===o.TEXTURE_2D_ARRAY?i.texImage3D(ye,ce,Ye,Te,Ie,E.depth,0,Qe,De,null):i.texImage2D(ye,ce,Ye,Te,Ie,0,Qe,De,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),zt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ge,ye,Ee.__webglTexture,0,G(E)):(ye===o.TEXTURE_2D||ye>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ge,ye,Ee.__webglTexture,ce),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ve(O,E,X){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const ge=E.depthTexture,ye=ge&&ge.isDepthTexture?ge.type:null,ce=L(E.stencilBuffer,ye),Qe=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;zt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),ce,E.width,E.height):X?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),ce,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ce,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Qe,o.RENDERBUFFER,O)}else{const ge=E.textures;for(let ye=0;ye<ge.length;ye++){const ce=ge[ye],Qe=c.convert(ce.format,ce.colorSpace),De=c.convert(ce.type),Ye=U(ce.internalFormat,Qe,De,ce.colorSpace);zt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),Ye,E.width,E.height):X?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),Ye,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ye,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function we(O,E,X){const ge=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(E.depthTexture);if(ye.__renderTarget=E,(!ye.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ge){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),ye.__webglTexture===void 0){ye.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ye.__webglTexture),Z(o.TEXTURE_CUBE_MAP,E.depthTexture);const ot=c.convert(E.depthTexture.format),Ee=c.convert(E.depthTexture.type);let Te;E.depthTexture.format===xa?Te=o.DEPTH_COMPONENT24:E.depthTexture.format===Ur&&(Te=o.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Te,E.width,E.height,0,ot,Ee,null)}}else ue(E.depthTexture,0);const ce=ye.__webglTexture,Qe=G(E),De=ge?o.TEXTURE_CUBE_MAP_POSITIVE_X+X:o.TEXTURE_2D,Ye=E.depthTexture.format===Ur?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===xa)zt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ye,De,ce,0,Qe):o.framebufferTexture2D(o.FRAMEBUFFER,Ye,De,ce,0);else if(E.depthTexture.format===Ur)zt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ye,De,ce,0,Qe):o.framebufferTexture2D(o.FRAMEBUFFER,Ye,De,ce,0);else throw new Error("Unknown depthTexture format")}function ke(O){const E=r.get(O),X=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ge=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ge){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ge.removeEventListener("dispose",ye)};ge.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=ge}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let ge=0;ge<6;ge++)we(E.__webglFramebuffer[ge],O,ge);else{const ge=O.texture.mipmaps;ge&&ge.length>0?we(E.__webglFramebuffer[0],O,0):we(E.__webglFramebuffer,O,0)}else if(X){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]===void 0)E.__webglDepthbuffer[ge]=o.createRenderbuffer(),Ve(E.__webglDepthbuffer[ge],O,!1);else{const ye=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[ge];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,ce)}}else{const ge=O.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ve(E.__webglDepthbuffer,O,!1);else{const ye=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,ce)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function lt(O,E,X){const ge=r.get(O);E!==void 0&&Ce(ge.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),X!==void 0&&ke(O)}function st(O){const E=O.texture,X=r.get(O),ge=r.get(E);O.addEventListener("dispose",P);const ye=O.textures,ce=O.isWebGLCubeRenderTarget===!0,Qe=ye.length>1;if(Qe||(ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture()),ge.__version=E.version,d.memory.textures++),ce){X.__webglFramebuffer=[];for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[De]=[];for(let Ye=0;Ye<E.mipmaps.length;Ye++)X.__webglFramebuffer[De][Ye]=o.createFramebuffer()}else X.__webglFramebuffer[De]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let De=0;De<E.mipmaps.length;De++)X.__webglFramebuffer[De]=o.createFramebuffer()}else X.__webglFramebuffer=o.createFramebuffer();if(Qe)for(let De=0,Ye=ye.length;De<Ye;De++){const ot=r.get(ye[De]);ot.__webglTexture===void 0&&(ot.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&zt(O)===!1){X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let De=0;De<ye.length;De++){const Ye=ye[De];X.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,X.__webglColorRenderbuffer[De]);const ot=c.convert(Ye.format,Ye.colorSpace),Ee=c.convert(Ye.type),Te=U(Ye.internalFormat,ot,Ee,Ye.colorSpace,O.isXRRenderTarget===!0),Ie=G(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,Te,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,X.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),Ve(X.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){i.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),Z(o.TEXTURE_CUBE_MAP,E);for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)Ce(X.__webglFramebuffer[De][Ye],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Ye);else Ce(X.__webglFramebuffer[De],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qe){for(let De=0,Ye=ye.length;De<Ye;De++){const ot=ye[De],Ee=r.get(ot);let Te=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Te=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Te,Ee.__webglTexture),Z(Te,ot),Ce(X.__webglFramebuffer,O,ot,o.COLOR_ATTACHMENT0+De,Te,0),M(ot)&&_(Te)}i.unbindTexture()}else{let De=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(De=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,ge.__webglTexture),Z(De,E),E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)Ce(X.__webglFramebuffer[Ye],O,E,o.COLOR_ATTACHMENT0,De,Ye);else Ce(X.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,De,0);M(E)&&_(De),i.unbindTexture()}O.depthBuffer&&ke(O)}function nt(O){const E=O.textures;for(let X=0,ge=E.length;X<ge;X++){const ye=E[X];if(M(ye)){const ce=w(O),Qe=r.get(ye).__webglTexture;i.bindTexture(ce,Qe),_(ce),i.unbindTexture()}}}const tt=[],Je=[];function Tt(O){if(O.samples>0){if(zt(O)===!1){const E=O.textures,X=O.width,ge=O.height;let ye=o.COLOR_BUFFER_BIT;const ce=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Qe=r.get(O),De=E.length>1;if(De)for(let ot=0;ot<E.length;ot++)i.bindFramebuffer(o.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer);const Ye=O.texture.mipmaps;Ye&&Ye.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let ot=0;ot<E.length;ot++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ye|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ye|=o.STENCIL_BUFFER_BIT)),De){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Qe.__webglColorRenderbuffer[ot]);const Ee=r.get(E[ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,X,ge,0,0,X,ge,ye,o.NEAREST),m===!0&&(tt.length=0,Je.length=0,tt.push(o.COLOR_ATTACHMENT0+ot),O.depthBuffer&&O.resolveDepthBuffer===!1&&(tt.push(ce),Je.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Je)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,tt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let ot=0;ot<E.length;ot++){i.bindFramebuffer(o.FRAMEBUFFER,Qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ot,o.RENDERBUFFER,Qe.__webglColorRenderbuffer[ot]);const Ee=r.get(E[ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ot,o.TEXTURE_2D,Ee,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function G(O){return Math.min(l.maxSamples,O.samples)}function zt(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(O){const E=d.render.frame;v.get(O)!==E&&(v.set(O,E),O.update())}function Ct(O,E){const X=O.colorSpace,ge=O.format,ye=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||X!==zs&&X!==er&&(Rt.getTransfer(X)===Vt?(ge!==Ci||ye!==mi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",X)),E}function Xe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=J,this.setTexture2D=ue,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=ne,this.rebindTextures=lt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function X1(o,t){function i(r,l=er){let c;const d=Rt.getTransfer(l);if(r===mi)return o.UNSIGNED_BYTE;if(r===Oh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ph)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Z_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===K_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Y_)return o.BYTE;if(r===j_)return o.SHORT;if(r===Yo)return o.UNSIGNED_SHORT;if(r===Lh)return o.INT;if(r===ki)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===va)return o.HALF_FLOAT;if(r===Q_)return o.ALPHA;if(r===J_)return o.RGB;if(r===Ci)return o.RGBA;if(r===xa)return o.DEPTH_COMPONENT;if(r===Ur)return o.DEPTH_STENCIL;if(r===$_)return o.RED;if(r===zh)return o.RED_INTEGER;if(r===Ps)return o.RG;if(r===Fh)return o.RG_INTEGER;if(r===Bh)return o.RGBA_INTEGER;if(r===Pc||r===zc||r===Fc||r===Bc)if(d===Vt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Kd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eh||r===th||r===nh||r===ih||r===ah||r===rh||r===sh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===eh||r===th)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===nh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===ih)return c.COMPRESSED_R11_EAC;if(r===ah)return c.COMPRESSED_SIGNED_R11_EAC;if(r===rh)return c.COMPRESSED_RG11_EAC;if(r===sh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===_h||r===vh||r===xh||r===Sh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===oh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ch)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ph)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_h)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yh||r===Mh||r===Eh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===yh)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Eh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bh||r===Th||r===Ah||r===Rh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===bh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Th)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ah)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const W1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new hv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new gi({vertexShader:W1,fragmentShader:q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new Is(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j1 extends Bs{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,x=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new Y1,_={},w=i.getContextAttributes();let U=null,L=null;const z=[],B=[],P=new Nt;let q=null;const A=new Ai;A.viewport=new rn;const D=new Ai;D.viewport=new rn;const V=[A,D],J=new iM;let Q=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=z[ee];return de===void 0&&(de=new Ad,z[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=z[ee];return de===void 0&&(de=new Ad,z[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=z[ee];return de===void 0&&(de=new Ad,z[ee]=de),de.getHandSpace()};function ue(ee){const de=B.indexOf(ee.inputSource);if(de===-1)return;const Ce=z[de];Ce!==void 0&&(Ce.update(ee.inputSource,ee.frame,p||d),Ce.dispatchEvent({type:ee.type,data:ee.inputSource}))}function F(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",H);for(let ee=0;ee<z.length;ee++){const de=B[ee];de!==null&&(B[ee]=null,z[ee].disconnect(de))}Q=null,se=null,M.reset();for(const ee in _)delete _[ee];t.setRenderTarget(U),y=null,x=null,g=null,l=null,L=null,ze.stop(),r.isPresenting=!1,t.setPixelRatio(q),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){c=ee,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){h=ee,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ee){if(l=ee,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",F),l.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await i.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ve=null,we=null;w.depth&&(we=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=w.stencil?Ur:xa,Ve=w.stencil?jo:ki);const ke={colorFormat:i.RGBA8,depthFormat:we,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(ke),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),L=new Gi(x.textureWidth,x.textureHeight,{format:Ci,type:mi,depthTexture:new Qo(x.textureWidth,x.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ce={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Gi(y.framebufferWidth,y.framebufferHeight,{format:Ci,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),ze.setContext(l),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ee){for(let de=0;de<ee.removed.length;de++){const Ce=ee.removed[de],Ve=B.indexOf(Ce);Ve>=0&&(B[Ve]=null,z[Ve].disconnect(Ce))}for(let de=0;de<ee.added.length;de++){const Ce=ee.added[de];let Ve=B.indexOf(Ce);if(Ve===-1){for(let ke=0;ke<z.length;ke++)if(ke>=B.length){B.push(Ce),Ve=ke;break}else if(B[ke]===null){B[ke]=Ce,Ve=ke;break}if(Ve===-1)break}const we=z[Ve];we&&we.connect(Ce)}}const ne=new re,pe=new re;function ve(ee,de,Ce){ne.setFromMatrixPosition(de.matrixWorld),pe.setFromMatrixPosition(Ce.matrixWorld);const Ve=ne.distanceTo(pe),we=de.projectionMatrix.elements,ke=Ce.projectionMatrix.elements,lt=we[14]/(we[10]-1),st=we[14]/(we[10]+1),nt=(we[9]+1)/we[5],tt=(we[9]-1)/we[5],Je=(we[8]-1)/we[0],Tt=(ke[8]+1)/ke[0],G=lt*Je,zt=lt*Tt,pt=Ve/(-Je+Tt),Ct=pt*-Je;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ct),ee.translateZ(pt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),we[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Xe=lt+pt,O=st+pt,E=G-Ct,X=zt+(Ve-Ct),ge=nt*st/O*Xe,ye=tt*st/O*Xe;ee.projectionMatrix.makePerspective(E,X,ge,ye,Xe,O),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function N(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(l===null)return;let de=ee.near,Ce=ee.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(Ce=M.depthFar)),J.near=D.near=A.near=de,J.far=D.far=A.far=Ce,(Q!==J.near||se!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),Q=J.near,se=J.far),J.layers.mask=ee.layers.mask|6,A.layers.mask=J.layers.mask&3,D.layers.mask=J.layers.mask&5;const Ve=ee.parent,we=J.cameras;N(J,Ve);for(let ke=0;ke<we.length;ke++)N(we[ke],Ve);we.length===2?ve(J,A,D):J.projectionMatrix.copy(A.projectionMatrix),Z(ee,J,Ve)};function Z(ee,de,Ce){Ce===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(Ce.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ch*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(ee){m=ee,x!==null&&(x.fixedFoveation=ee),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(ee){return _[ee]};let fe=null;function be(ee,de){if(v=de.getViewerPose(p||d),b=de,v!==null){const Ce=v.views;y!==null&&(t.setRenderTargetFramebuffer(L,y.framebuffer),t.setRenderTarget(L));let Ve=!1;Ce.length!==J.cameras.length&&(J.cameras.length=0,Ve=!0);for(let st=0;st<Ce.length;st++){const nt=Ce[st];let tt=null;if(y!==null)tt=y.getViewport(nt);else{const Tt=g.getViewSubImage(x,nt);tt=Tt.viewport,st===0&&(t.setRenderTargetTextures(L,Tt.colorTexture,Tt.depthStencilTexture),t.setRenderTarget(L))}let Je=V[st];Je===void 0&&(Je=new Ai,Je.layers.enable(st),Je.viewport=new rn,V[st]=Je),Je.matrix.fromArray(nt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(nt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(tt.x,tt.y,tt.width,tt.height),st===0&&(J.matrix.copy(Je.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ve===!0&&J.cameras.push(Je)}const we=l.enabledFeatures;if(we&&we.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const st=g.getDepthInformation(Ce[0]);st&&st.isValid&&st.texture&&M.init(st,l.renderState)}if(we&&we.includes("camera-access")&&T){t.state.unbindTexture(),g=r.getBinding();for(let st=0;st<Ce.length;st++){const nt=Ce[st].camera;if(nt){let tt=_[nt];tt||(tt=new hv,_[nt]=tt);const Je=g.getCameraImage(nt);tt.sourceTexture=Je}}}}for(let Ce=0;Ce<z.length;Ce++){const Ve=B[Ce],we=z[Ce];Ve!==null&&we!==void 0&&we.update(Ve,de,p||d)}fe&&fe(ee,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),b=null}const ze=new pv;ze.setAnimationLoop(be),this.setAnimationLoop=function(ee){fe=ee},this.dispose=function(){}}}const Ar=new Sa,Z1=new hn;function K1(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,ov(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,w,U,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),v(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,L)):_.isMeshMatcapMaterial?(c(M,_),b(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),T(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,w,U):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Wn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Wn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const w=t.get(_),U=w.envMap,L=w.envMapRotation;U&&(M.envMap.value=U,Ar.copy(L),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),M.envMapRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(Ar)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,w,U){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*w,M.scale.value=U*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,w){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function T(M,_){const w=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Q1(o,t,i,r){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const L=U.program;r.uniformBlockBinding(w,L)}function p(w,U){let L=l[w.id];L===void 0&&(b(w),L=v(w),l[w.id]=L,w.addEventListener("dispose",M));const z=U.program;r.updateUBOMapping(w,z);const B=t.render.frame;c[w.id]!==B&&(x(w),c[w.id]=B)}function v(w){const U=g();w.__bindingPointIndex=U;const L=o.createBuffer(),z=w.__size,B=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,z,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,L),L}function g(){for(let w=0;w<h;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const U=l[w.id],L=w.uniforms,z=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let B=0,P=L.length;B<P;B++){const q=Array.isArray(L[B])?L[B]:[L[B]];for(let A=0,D=q.length;A<D;A++){const V=q[A];if(y(V,B,A,z)===!0){const J=V.__offset,Q=Array.isArray(V.value)?V.value:[V.value];let se=0;for(let ue=0;ue<Q.length;ue++){const F=Q[ue],H=T(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,J+se,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,se),se+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(w,U,L,z){const B=w.value,P=U+"_"+L;if(z[P]===void 0)return typeof B=="number"||typeof B=="boolean"?z[P]=B:z[P]=B.clone(),!0;{const q=z[P];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return z[P]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function b(w){const U=w.uniforms;let L=0;const z=16;for(let P=0,q=U.length;P<q;P++){const A=Array.isArray(U[P])?U[P]:[U[P]];for(let D=0,V=A.length;D<V;D++){const J=A[D],Q=Array.isArray(J.value)?J.value:[J.value];for(let se=0,ue=Q.length;se<ue;se++){const F=Q[se],H=T(F),ne=L%z,pe=ne%H.boundary,ve=ne+pe;L+=pe,ve!==0&&z-ve<H.storage&&(L+=z-ve),J.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=L,L+=H.storage}}}const B=L%z;return B>0&&(L+=z-B),w.__size=L,w.__cache={},this}function T(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",w),U}function M(w){const U=w.target;U.removeEventListener("dispose",M);const L=d.indexOf(U.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const w in l)o.deleteBuffer(l[w]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}const J1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function $1(){return Pi===null&&(Pi=new Wy(J1,16,16,Ps,va),Pi.name="DFG_LUT",Pi.minFilter=dn,Pi.magFilter=dn,Pi.wrapS=ti,Pi.wrapT=ti,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class xv{constructor(t={}){const{canvas:i=vy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:y=mi}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const T=y,M=new Set([Bh,Fh,zh]),_=new Set([mi,ki,Yo,jo,Oh,Ph]),w=new Uint32Array(4),U=new Int32Array(4);let L=null,z=null;const B=[],P=[];let q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1;this._outputColorSpace=pi;let V=0,J=0,Q=null,se=-1,ue=null;const F=new rn,H=new rn;let ne=null;const pe=new qt(0);let ve=0,N=i.width,Z=i.height,fe=1,be=null,ze=null;const ee=new rn(0,0,N,Z),de=new rn(0,0,N,Z);let Ce=!1;const Ve=new dv;let we=!1,ke=!1;const lt=new hn,st=new re,nt=new rn,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Tt(){return Q===null?fe:1}let G=r;function zt(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nh}`),i.addEventListener("webglcontextlost",ct,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",At,!1),G===null){const Y="webgl2";if(G=zt(Y,C),G===null)throw zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ut("WebGLRenderer: "+C.message),C}let pt,Ct,Xe,O,E,X,ge,ye,ce,Qe,De,Ye,ot,Ee,Te,Ie,Fe,Ue,mt,W,Le,Ae,Be,Me;function Se(){pt=new $b(G),pt.init(),Ae=new X1(G,pt),Ct=new Xb(G,pt,t,Ae),Xe=new V1(G,pt),Ct.reversedDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),O=new nT(G),E=new R1,X=new k1(G,pt,Xe,E,Ct,Ae,O),ge=new qb(A),ye=new Jb(A),ce=new sM(G),Be=new Vb(G,ce),Qe=new eT(G,ce,O,Be),De=new aT(G,Qe,ce,O),mt=new iT(G,Ct,X),Ie=new Wb(E),Ye=new A1(A,ge,ye,pt,Ct,Be,Ie),ot=new K1(A,E),Ee=new w1,Te=new P1(pt),Ue=new Gb(A,ge,ye,Xe,De,b,m),Fe=new H1(A,De,Ct),Me=new Q1(G,O,Ct,Xe),W=new kb(G,pt,O),Le=new tT(G,pt,O),O.programs=Ye.programs,A.capabilities=Ct,A.extensions=pt,A.properties=E,A.renderLists=Ee,A.shadowMap=Fe,A.state=Xe,A.info=O}Se(),T!==mi&&(q=new sT(T,i.width,i.height,l,c));const Re=new j1(A,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(N,Z,!1))},this.getSize=function(C){return C.set(N,Z)},this.setSize=function(C,Y,oe=!0){if(Re.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,Z=Y,i.width=Math.floor(C*fe),i.height=Math.floor(Y*fe),oe===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),q!==null&&q.setSize(i.width,i.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(N*fe,Z*fe).floor()},this.setDrawingBufferSize=function(C,Y,oe){N=C,Z=Y,fe=oe,i.width=Math.floor(C*oe),i.height=Math.floor(Y*oe),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(T===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(ee)},this.setViewport=function(C,Y,oe,ie){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,Y,oe,ie),Xe.viewport(F.copy(ee).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(de)},this.setScissor=function(C,Y,oe,ie){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,Y,oe,ie),Xe.scissor(H.copy(de).multiplyScalar(fe).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(C){Xe.setScissorTest(Ce=C)},this.setOpaqueSort=function(C){be=C},this.setTransparentSort=function(C){ze=C},this.getClearColor=function(C){return C.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,oe=!0){let ie=0;if(C){let K=!1;if(Q!==null){const Ne=Q.texture.format;K=M.has(Ne)}if(K){const Ne=Q.texture.type,Ge=_.has(Ne),Oe=Ue.getClearColor(),We=Ue.getClearAlpha(),je=Oe.r,it=Oe.g,Ze=Oe.b;Ge?(w[0]=je,w[1]=it,w[2]=Ze,w[3]=We,G.clearBufferuiv(G.COLOR,0,w)):(U[0]=je,U[1]=it,U[2]=Ze,U[3]=We,G.clearBufferiv(G.COLOR,0,U))}else ie|=G.COLOR_BUFFER_BIT}Y&&(ie|=G.DEPTH_BUFFER_BIT),oe&&(ie|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ct,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),Ue.dispose(),Ee.dispose(),Te.dispose(),E.dispose(),ge.dispose(),ye.dispose(),De.dispose(),Be.dispose(),Me.dispose(),Ye.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Or),Re.removeEventListener("sessionend",ks),Di.stop()};function ct(C){C.preventDefault(),Hg("WebGLRenderer: Context Lost."),D=!0}function Bt(){Hg("WebGLRenderer: Context Restored."),D=!1;const C=O.autoReset,Y=Fe.enabled,oe=Fe.autoUpdate,ie=Fe.needsUpdate,K=Fe.type;Se(),O.autoReset=C,Fe.enabled=Y,Fe.autoUpdate=oe,Fe.needsUpdate=ie,Fe.type=K}function At(C){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Nn(C){const Y=C.target;Y.removeEventListener("dispose",Nn),_i(Y)}function _i(C){nl(C),E.remove(C)}function nl(C){const Y=E.get(C).programs;Y!==void 0&&(Y.forEach(function(oe){Ye.releaseProgram(oe)}),C.isShaderMaterial&&Ye.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,oe,ie,K,Ne){Y===null&&(Y=tt);const Ge=K.isMesh&&K.matrixWorld.determinant()<0,Oe=ir(C,Y,oe,ie,K);Xe.setMaterial(ie,Ge);let We=oe.index,je=1;if(ie.wireframe===!0){if(We=Qe.getWireframeAttribute(oe),We===void 0)return;je=2}const it=oe.drawRange,Ze=oe.attributes.position;let at=it.start*je,Lt=(it.start+it.count)*je;Ne!==null&&(at=Math.max(at,Ne.start*je),Lt=Math.min(Lt,(Ne.start+Ne.count)*je)),We!==null?(at=Math.max(at,0),Lt=Math.min(Lt,We.count)):Ze!=null&&(at=Math.max(at,0),Lt=Math.min(Lt,Ze.count));const Qt=Lt-at;if(Qt<0||Qt===1/0)return;Be.setup(K,ie,Oe,oe,We);let jt,Ft=W;if(We!==null&&(jt=ce.get(We),Ft=Le,Ft.setIndex(jt)),K.isMesh)ie.wireframe===!0?(Xe.setLineWidth(ie.wireframeLinewidth*Tt()),Ft.setMode(G.LINES)):Ft.setMode(G.TRIANGLES);else if(K.isLine){let $e=ie.linewidth;$e===void 0&&($e=1),Xe.setLineWidth($e*Tt()),K.isLineSegments?Ft.setMode(G.LINES):K.isLineLoop?Ft.setMode(G.LINE_LOOP):Ft.setMode(G.LINE_STRIP)}else K.isPoints?Ft.setMode(G.POINTS):K.isSprite&&Ft.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $e=K._multiDrawStarts,Ot=K._multiDrawCounts,ut=K._multiDrawCount,yn=We?ce.get(We).bytesPerElement:1,Xi=E.get(ie).currentProgram.getUniforms();for(let Mn=0;Mn<ut;Mn++)Xi.setValue(G,"_gl_DrawID",Mn),Ft.render($e[Mn]/yn,Ot[Mn])}else if(K.isInstancedMesh)Ft.renderInstances(at,Qt,K.count);else if(oe.isInstancedBufferGeometry){const $e=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ot=Math.min(oe.instanceCount,$e);Ft.renderInstances(at,Qt,Ot)}else Ft.render(at,Qt)};function Gs(C,Y,oe){C.transparent===!0&&C.side===Fi&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,zr(C,Y,oe),C.side=nr,C.needsUpdate=!0,zr(C,Y,oe),C.side=Fi):zr(C,Y,oe)}this.compile=function(C,Y,oe=null){oe===null&&(oe=C),z=Te.get(oe),z.init(Y),P.push(z),oe.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(z.pushLight(K),K.castShadow&&z.pushShadow(K))}),C!==oe&&C.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(z.pushLight(K),K.castShadow&&z.pushShadow(K))}),z.setupLights();const ie=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ne=K.material;if(Ne)if(Array.isArray(Ne))for(let Ge=0;Ge<Ne.length;Ge++){const Oe=Ne[Ge];Gs(Oe,oe,K),ie.add(Oe)}else Gs(Ne,oe,K),ie.add(Ne)}),z=P.pop(),ie},this.compileAsync=function(C,Y,oe=null){const ie=this.compile(C,Y,oe);return new Promise(K=>{function Ne(){if(ie.forEach(function(Ge){E.get(Ge).currentProgram.isReady()&&ie.delete(Ge)}),ie.size===0){K(C);return}setTimeout(Ne,10)}pt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Lr=null;function Vs(C){Lr&&Lr(C)}function Or(){Di.stop()}function ks(){Di.start()}const Di=new pv;Di.setAnimationLoop(Vs),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){Lr=C,Re.setAnimationLoop(C),C===null?Di.stop():Di.start()},Re.addEventListener("sessionstart",Or),Re.addEventListener("sessionend",ks),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const oe=Re.enabled===!0&&Re.isPresenting===!0,ie=q!==null&&(Q===null||oe)&&q.begin(A,Q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Y),Y=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Y,Q),z=Te.get(C,P.length),z.init(Y),P.push(z),lt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ve.setFromProjectionMatrix(lt,Ii,Y.reversedDepth),ke=this.localClippingEnabled,we=Ie.init(this.clippingPlanes,ke),L=Ee.get(C,B.length),L.init(),B.push(L),Re.enabled===!0&&Re.isPresenting===!0){const Ge=A.xr.getDepthSensingMesh();Ge!==null&&ii(Ge,Y,-1/0,A.sortObjects)}ii(C,Y,0,A.sortObjects),L.finish(),A.sortObjects===!0&&L.sort(be,ze),Je=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Je&&Ue.addToRenderList(L,C),this.info.render.frame++,we===!0&&Ie.beginShadows();const K=z.state.shadowsArray;if(Fe.render(K,C,Y),we===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&q.hasRenderPass())===!1){const Ge=L.opaque,Oe=L.transmissive;if(z.setupLights(),Y.isArrayCamera){const We=Y.cameras;if(Oe.length>0)for(let je=0,it=We.length;je<it;je++){const Ze=We[je];Sn(Ge,Oe,C,Ze)}Je&&Ue.render(C);for(let je=0,it=We.length;je<it;je++){const Ze=We[je];sn(L,C,Ze,Ze.viewport)}}else Oe.length>0&&Sn(Ge,Oe,C,Y),Je&&Ue.render(C),sn(L,C,Y)}Q!==null&&J===0&&(X.updateMultisampleRenderTarget(Q),X.updateRenderTargetMipmap(Q)),ie&&q.end(A),C.isScene===!0&&C.onAfterRender(A,C,Y),Be.resetDefaultState(),se=-1,ue=null,P.pop(),P.length>0?(z=P[P.length-1],we===!0&&Ie.setGlobalState(A.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?L=B[B.length-1]:L=null};function ii(C,Y,oe,ie){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)z.pushLight(C),C.castShadow&&z.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ve.intersectsSprite(C)){ie&&nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(lt);const Ge=De.update(C),Oe=C.material;Oe.visible&&L.push(C,Ge,Oe,oe,nt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ve.intersectsObject(C))){const Ge=De.update(C),Oe=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nt.copy(C.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),nt.copy(Ge.boundingSphere.center)),nt.applyMatrix4(C.matrixWorld).applyMatrix4(lt)),Array.isArray(Oe)){const We=Ge.groups;for(let je=0,it=We.length;je<it;je++){const Ze=We[je],at=Oe[Ze.materialIndex];at&&at.visible&&L.push(C,Ge,at,oe,nt.z,Ze)}}else Oe.visible&&L.push(C,Ge,Oe,oe,nt.z,null)}}const Ne=C.children;for(let Ge=0,Oe=Ne.length;Ge<Oe;Ge++)ii(Ne[Ge],Y,oe,ie)}function sn(C,Y,oe,ie){const{opaque:K,transmissive:Ne,transparent:Ge}=C;z.setupLightsView(oe),we===!0&&Ie.setGlobalState(A.clippingPlanes,oe),ie&&Xe.viewport(F.copy(ie)),K.length>0&&vi(K,Y,oe),Ne.length>0&&vi(Ne,Y,oe),Ge.length>0&&vi(Ge,Y,oe),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Sn(C,Y,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ie.id]===void 0){const at=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ie.id]=new Gi(1,1,{generateMipmaps:!0,type:at?va:mi,minFilter:Dr,samples:Ct.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ne=z.state.transmissionRenderTarget[ie.id],Ge=ie.viewport||F;Ne.setSize(Ge.z*A.transmissionResolutionScale,Ge.w*A.transmissionResolutionScale);const Oe=A.getRenderTarget(),We=A.getActiveCubeFace(),je=A.getActiveMipmapLevel();A.setRenderTarget(Ne),A.getClearColor(pe),ve=A.getClearAlpha(),ve<1&&A.setClearColor(16777215,.5),A.clear(),Je&&Ue.render(oe);const it=A.toneMapping;A.toneMapping=Hi;const Ze=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),z.setupLightsView(ie),we===!0&&Ie.setGlobalState(A.clippingPlanes,ie),vi(C,oe,ie),X.updateMultisampleRenderTarget(Ne),X.updateRenderTargetMipmap(Ne),pt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Lt=0,Qt=Y.length;Lt<Qt;Lt++){const jt=Y[Lt],{object:Ft,geometry:$e,material:Ot,group:ut}=jt;if(Ot.side===Fi&&Ft.layers.test(ie.layers)){const yn=Ot.side;Ot.side=Wn,Ot.needsUpdate=!0,Pr(Ft,oe,ie,$e,Ot,ut),Ot.side=yn,Ot.needsUpdate=!0,at=!0}}at===!0&&(X.updateMultisampleRenderTarget(Ne),X.updateRenderTargetMipmap(Ne))}A.setRenderTarget(Oe,We,je),A.setClearColor(pe,ve),Ze!==void 0&&(ie.viewport=Ze),A.toneMapping=it}function vi(C,Y,oe){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,Ne=C.length;K<Ne;K++){const Ge=C[K],{object:Oe,geometry:We,group:je}=Ge;let it=Ge.material;it.allowOverride===!0&&ie!==null&&(it=ie),Oe.layers.test(oe.layers)&&Pr(Oe,Y,oe,We,it,je)}}function Pr(C,Y,oe,ie,K,Ne){C.onBeforeRender(A,Y,oe,ie,K,Ne),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(A,Y,oe,ie,C,Ne),K.transparent===!0&&K.side===Fi&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,A.renderBufferDirect(oe,Y,ie,K,C,Ne),K.side=nr,K.needsUpdate=!0,A.renderBufferDirect(oe,Y,ie,K,C,Ne),K.side=Fi):A.renderBufferDirect(oe,Y,ie,K,C,Ne),C.onAfterRender(A,Y,oe,ie,K,Ne)}function zr(C,Y,oe){Y.isScene!==!0&&(Y=tt);const ie=E.get(C),K=z.state.lights,Ne=z.state.shadowsArray,Ge=K.state.version,Oe=Ye.getParameters(C,K.state,Ne,Y,oe),We=Ye.getProgramCacheKey(Oe);let je=ie.programs;ie.environment=C.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(C.isMeshStandardMaterial?ye:ge).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,je===void 0&&(C.addEventListener("dispose",Nn),je=new Map,ie.programs=je);let it=je.get(We);if(it!==void 0){if(ie.currentProgram===it&&ie.lightsStateVersion===Ge)return Xs(C,Oe),it}else Oe.uniforms=Ye.getUniforms(C),C.onBeforeCompile(Oe,A),it=Ye.acquireProgram(Oe,We),je.set(We,it),ie.uniforms=Oe.uniforms;const Ze=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Ie.uniform),Xs(C,Oe),ie.needsLights=Ma(C),ie.lightsStateVersion=Ge,ie.needsLights&&(Ze.ambientLightColor.value=K.state.ambient,Ze.lightProbe.value=K.state.probe,Ze.directionalLights.value=K.state.directional,Ze.directionalLightShadows.value=K.state.directionalShadow,Ze.spotLights.value=K.state.spot,Ze.spotLightShadows.value=K.state.spotShadow,Ze.rectAreaLights.value=K.state.rectArea,Ze.ltc_1.value=K.state.rectAreaLTC1,Ze.ltc_2.value=K.state.rectAreaLTC2,Ze.pointLights.value=K.state.point,Ze.pointLightShadows.value=K.state.pointShadow,Ze.hemisphereLights.value=K.state.hemi,Ze.directionalShadowMap.value=K.state.directionalShadowMap,Ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ze.spotShadowMap.value=K.state.spotShadowMap,Ze.spotLightMatrix.value=K.state.spotLightMatrix,Ze.spotLightMap.value=K.state.spotLightMap,Ze.pointShadowMap.value=K.state.pointShadowMap,Ze.pointShadowMatrix.value=K.state.pointShadowMatrix),ie.currentProgram=it,ie.uniformsList=null,it}function il(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Ic.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Xs(C,Y){const oe=E.get(C);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function ir(C,Y,oe,ie,K){Y.isScene!==!0&&(Y=tt),X.resetTextureUnits();const Ne=Y.fog,Ge=ie.isMeshStandardMaterial?Y.environment:null,Oe=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:zs,We=(ie.isMeshStandardMaterial?ye:ge).get(ie.envMap||Ge),je=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,it=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!oe.morphAttributes.position,at=!!oe.morphAttributes.normal,Lt=!!oe.morphAttributes.color;let Qt=Hi;ie.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Qt=A.toneMapping);const jt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ft=jt!==void 0?jt.length:0,$e=E.get(ie),Ot=z.state.lights;if(we===!0&&(ke===!0||C!==ue)){const bn=C===ue&&ie.id===se;Ie.setState(ie,C,bn)}let ut=!1;ie.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ot.state.version||$e.outputColorSpace!==Oe||K.isBatchedMesh&&$e.batching===!1||!K.isBatchedMesh&&$e.batching===!0||K.isBatchedMesh&&$e.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$e.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$e.instancing===!1||!K.isInstancedMesh&&$e.instancing===!0||K.isSkinnedMesh&&$e.skinning===!1||!K.isSkinnedMesh&&$e.skinning===!0||K.isInstancedMesh&&$e.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$e.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$e.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$e.instancingMorph===!1&&K.morphTexture!==null||$e.envMap!==We||ie.fog===!0&&$e.fog!==Ne||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ie.numPlanes||$e.numIntersection!==Ie.numIntersection)||$e.vertexAlphas!==je||$e.vertexTangents!==it||$e.morphTargets!==Ze||$e.morphNormals!==at||$e.morphColors!==Lt||$e.toneMapping!==Qt||$e.morphTargetsCount!==Ft)&&(ut=!0):(ut=!0,$e.__version=ie.version);let yn=$e.currentProgram;ut===!0&&(yn=zr(ie,Y,K));let Xi=!1,Mn=!1,ai=!1;const It=yn.getUniforms(),En=$e.uniforms;if(Xe.useProgram(yn.program)&&(Xi=!0,Mn=!0,ai=!0),ie.id!==se&&(se=ie.id,Mn=!0),Xi||ue!==C){Xe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),It.setValue(G,"projectionMatrix",C.projectionMatrix),It.setValue(G,"viewMatrix",C.matrixWorldInverse);const Tn=It.map.cameraPosition;Tn!==void 0&&Tn.setValue(G,st.setFromMatrixPosition(C.matrixWorld)),Ct.logarithmicDepthBuffer&&It.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&It.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),ue!==C&&(ue=C,Mn=!0,ai=!0)}if($e.needsLights&&(Ot.state.directionalShadowMap.length>0&&It.setValue(G,"directionalShadowMap",Ot.state.directionalShadowMap,X),Ot.state.spotShadowMap.length>0&&It.setValue(G,"spotShadowMap",Ot.state.spotShadowMap,X),Ot.state.pointShadowMap.length>0&&It.setValue(G,"pointShadowMap",Ot.state.pointShadowMap,X)),K.isSkinnedMesh){It.setOptional(G,K,"bindMatrix"),It.setOptional(G,K,"bindMatrixInverse");const bn=K.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),It.setValue(G,"boneTexture",bn.boneTexture,X))}K.isBatchedMesh&&(It.setOptional(G,K,"batchingTexture"),It.setValue(G,"batchingTexture",K._matricesTexture,X),It.setOptional(G,K,"batchingIdTexture"),It.setValue(G,"batchingIdTexture",K._indirectTexture,X),It.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&It.setValue(G,"batchingColorTexture",K._colorsTexture,X));const pn=oe.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&mt.update(K,oe,yn),(Mn||$e.receiveShadow!==K.receiveShadow)&&($e.receiveShadow=K.receiveShadow,It.setValue(G,"receiveShadow",K.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(En.envMap.value=We,En.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Y.environment!==null&&(En.envMapIntensity.value=Y.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=$1()),Mn&&(It.setValue(G,"toneMappingExposure",A.toneMappingExposure),$e.needsLights&&Ws(En,ai),Ne&&ie.fog===!0&&ot.refreshFogUniforms(En,Ne),ot.refreshMaterialUniforms(En,ie,fe,Z,z.state.transmissionRenderTarget[C.id]),Ic.upload(G,il($e),En,X)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ic.upload(G,il($e),En,X),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&It.setValue(G,"center",K.center),It.setValue(G,"modelViewMatrix",K.modelViewMatrix),It.setValue(G,"normalMatrix",K.normalMatrix),It.setValue(G,"modelMatrix",K.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const bn=ie.uniformsGroups;for(let Tn=0,Fr=bn.length;Tn<Fr;Tn++){const xi=bn[Tn];Me.update(xi,yn),Me.bind(xi,yn)}}return yn}function Ws(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Ma(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(C,Y,oe){const ie=E.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=Y,E.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const oe=E.get(C);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const Ea=G.createFramebuffer();this.setRenderTarget=function(C,Y=0,oe=0){Q=C,V=Y,J=oe;let ie=null,K=!1,Ne=!1;if(C){const Oe=E.get(C);if(Oe.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(G.FRAMEBUFFER,Oe.__webglFramebuffer),F.copy(C.viewport),H.copy(C.scissor),ne=C.scissorTest,Xe.viewport(F),Xe.scissor(H),Xe.setScissorTest(ne),se=-1;return}else if(Oe.__webglFramebuffer===void 0)X.setupRenderTarget(C);else if(Oe.__hasExternalTextures)X.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(Oe.__boundDepthTexture!==it){if(it!==null&&E.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(C)}}const We=C.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ne=!0);const je=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(je[Y])?ie=je[Y][oe]:ie=je[Y],K=!0):C.samples>0&&X.useMultisampledRTT(C)===!1?ie=E.get(C).__webglMultisampledFramebuffer:Array.isArray(je)?ie=je[oe]:ie=je,F.copy(C.viewport),H.copy(C.scissor),ne=C.scissorTest}else F.copy(ee).multiplyScalar(fe).floor(),H.copy(de).multiplyScalar(fe).floor(),ne=Ce;if(oe!==0&&(ie=Ea),Xe.bindFramebuffer(G.FRAMEBUFFER,ie)&&Xe.drawBuffers(C,ie),Xe.viewport(F),Xe.scissor(H),Xe.setScissorTest(ne),K){const Oe=E.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe.__webglTexture,oe)}else if(Ne){const Oe=Y;for(let We=0;We<C.textures.length;We++){const je=E.get(C.textures[We]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+We,je.__webglTexture,oe,Oe)}}else if(C!==null&&oe!==0){const Oe=E.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,oe)}se=-1},this.readRenderTargetPixels=function(C,Y,oe,ie,K,Ne,Ge,Oe=0){if(!(C&&C.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){Xe.bindFramebuffer(G.FRAMEBUFFER,We);try{const je=C.textures[Oe],it=je.format,Ze=je.type;if(!Ct.textureFormatReadable(it)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Ze)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ie&&oe>=0&&oe<=C.height-K&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(Y,oe,ie,K,Ae.convert(it),Ae.convert(Ze),Ne))}finally{const je=Q!==null?E.get(Q).__webglFramebuffer:null;Xe.bindFramebuffer(G.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(C,Y,oe,ie,K,Ne,Ge,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(Y>=0&&Y<=C.width-ie&&oe>=0&&oe<=C.height-K){Xe.bindFramebuffer(G.FRAMEBUFFER,We);const je=C.textures[Oe],it=je.format,Ze=je.type;if(!Ct.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,at),G.bufferData(G.PIXEL_PACK_BUFFER,Ne.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(Y,oe,ie,K,Ae.convert(it),Ae.convert(Ze),0);const Lt=Q!==null?E.get(Q).__webglFramebuffer:null;Xe.bindFramebuffer(G.FRAMEBUFFER,Lt);const Qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await xy(G,Qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,at),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ne),G.deleteBuffer(at),G.deleteSync(Qt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,oe=0){const ie=Math.pow(2,-oe),K=Math.floor(C.image.width*ie),Ne=Math.floor(C.image.height*ie),Ge=Y!==null?Y.x:0,Oe=Y!==null?Y.y:0;X.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Ge,Oe,K,Ne),Xe.unbindTexture()};const ar=G.createFramebuffer(),ba=G.createFramebuffer();this.copyTextureToTexture=function(C,Y,oe=null,ie=null,K=0,Ne=null){Ne===null&&(K!==0?(Ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=K,K=0):Ne=0);let Ge,Oe,We,je,it,Ze,at,Lt,Qt;const jt=C.isCompressedTexture?C.mipmaps[Ne]:C.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,je=oe.min.x,it=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{const pn=Math.pow(2,-K);Ge=Math.floor(jt.width*pn),Oe=Math.floor(jt.height*pn),C.isDataArrayTexture?We=jt.depth:C.isData3DTexture?We=Math.floor(jt.depth*pn):We=1,je=0,it=0,Ze=0}ie!==null?(at=ie.x,Lt=ie.y,Qt=ie.z):(at=0,Lt=0,Qt=0);const Ft=Ae.convert(Y.format),$e=Ae.convert(Y.type);let Ot;Y.isData3DTexture?(X.setTexture3D(Y,0),Ot=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(X.setTexture2DArray(Y,0),Ot=G.TEXTURE_2D_ARRAY):(X.setTexture2D(Y,0),Ot=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const ut=G.getParameter(G.UNPACK_ROW_LENGTH),yn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Xi=G.getParameter(G.UNPACK_SKIP_PIXELS),Mn=G.getParameter(G.UNPACK_SKIP_ROWS),ai=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,jt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,jt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,je),G.pixelStorei(G.UNPACK_SKIP_ROWS,it),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ze);const It=C.isDataArrayTexture||C.isData3DTexture,En=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const pn=E.get(C),bn=E.get(Y),Tn=E.get(pn.__renderTarget),Fr=E.get(bn.__renderTarget);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let xi=0;xi<We;xi++)It&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(C).__webglTexture,K,Ze+xi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Ne,Qt+xi)),G.blitFramebuffer(je,it,Ge,Oe,at,Lt,Ge,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||E.has(C)){const pn=E.get(C),bn=E.get(Y);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,ar),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,ba);for(let Tn=0;Tn<We;Tn++)It?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,K,Ze+Tn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,K),En?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bn.__webglTexture,Ne,Qt+Tn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bn.__webglTexture,Ne),K!==0?G.blitFramebuffer(je,it,Ge,Oe,at,Lt,Ge,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):En?G.copyTexSubImage3D(Ot,Ne,at,Lt,Qt+Tn,je,it,Ge,Oe):G.copyTexSubImage2D(Ot,Ne,at,Lt,je,it,Ge,Oe);Xe.bindFramebuffer(G.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else En?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Ot,Ne,at,Lt,Qt,Ge,Oe,We,Ft,$e,jt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ot,Ne,at,Lt,Qt,Ge,Oe,We,Ft,jt.data):G.texSubImage3D(Ot,Ne,at,Lt,Qt,Ge,Oe,We,Ft,$e,jt):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ne,at,Lt,Ge,Oe,Ft,$e,jt.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ne,at,Lt,jt.width,jt.height,Ft,jt.data):G.texSubImage2D(G.TEXTURE_2D,Ne,at,Lt,Ge,Oe,Ft,$e,jt);G.pixelStorei(G.UNPACK_ROW_LENGTH,ut),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Xi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Mn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ai),Ne===0&&Y.generateMipmaps&&G.generateMipmap(Ot),Xe.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&X.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?X.setTextureCube(C,0):C.isData3DTexture?X.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?X.setTexture2DArray(C,0):X.setTexture2D(C,0),Xe.unbindTexture()},this.resetState=function(){V=0,J=0,Q=null,Xe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Rt._getUnpackColorSpace()}}const eA=()=>{const o=He.useRef(null),t=He.useRef(null),i=He.useRef(null),r=He.useRef(new Nt(0,0)),l=He.useRef(0),c=He.useRef(!0);return He.useEffect(()=>{if(c.current=!0,!o.current)return;const d=new fv,h=new Xc(-1,1,1,-1,0,1),m=new xv({alpha:!1,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!1});m.setPixelRatio(1),m.setSize(window.innerWidth,window.innerHeight),o.current.appendChild(m.domElement),t.current=m;const p=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,v=`
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      varying vec2 vUv;

      // --- Noise Functions ---
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // --- Dither Matrix (Bayer 4x4) ---
      // Optimized branching for GPU performance
      float dither4x4(vec2 position, float brightness) {
        int x = int(mod(position.x, 4.0));
        int y = int(mod(position.y, 4.0));
        int index = x + y * 4;
        float limit = 0.0;

        if (index < 8) {
          if (index < 4) {
            if (index == 0) limit = 0.0625;
            else if (index == 1) limit = 0.5625;
            else if (index == 2) limit = 0.1875;
            else limit = 0.6875;
          } else {
            if (index == 4) limit = 0.8125;
            else if (index == 5) limit = 0.3125;
            else if (index == 6) limit = 0.9375;
            else limit = 0.4375;
          }
        } else {
          if (index < 12) {
            if (index == 8) limit = 0.25;
            else if (index == 9) limit = 0.75;
            else if (index == 10) limit = 0.125;
            else limit = 0.625;
          } else {
            if (index == 12) limit = 1.0;
            else if (index == 13) limit = 0.5;
            else if (index == 14) limit = 0.875;
            else limit = 0.375;
          }
        }
        
        return brightness < limit ? 0.0 : 1.0;
      }

      void main() {
        vec2 uv = vUv;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= uResolution.x / uResolution.y;

        float time = uTime * 0.15;
        
        // Use two layers of noise for smoky effect
        float n1 = snoise(p * 1.5 + vec2(time * 0.5, time * 0.2));
        float n2 = snoise(p * 3.0 - vec2(time * 0.2, time * 0.4) + n1);
        
        float mouseDist = length(p - uMouse);
        float mouseInteraction = smoothstep(0.8, 0.0, mouseDist) * 0.4;
        
        float finalNoise = (n1 + n2 * 0.5) + mouseInteraction;
        
        // Mapped to avoid hitting 1.0 or 0.0 too hard
        // This keeps the dither pattern active instead of creating solid blobs
        float brightness = finalNoise * 0.35 + 0.3; 
        
        // Clamp upper bound to 0.9 to ensure the highest dither threshold (1.0) is never met.
        // This guarantees that at least 1/16 pixels are black in the brightest areas.
        brightness = min(brightness, 0.9);
        brightness = max(brightness, 0.0);
        
        // Gamma correction for smoother gradients
        brightness = pow(brightness, 1.1);

        vec2 screenPos = gl_FragCoord.xy;
        float dither = dither4x4(screenPos, brightness);
        
        // Dark theme colors
        vec3 colorBg = vec3(0.01, 0.01, 0.01); 
        vec3 colorFg = vec3(0.14, 0.14, 0.15); 
        
        vec3 finalColor = mix(colorBg, colorFg, dither);
        
        // Vignette
        float vign = 1.0 - length(uv - 0.5) * 1.2;
        vign = smoothstep(0.0, 1.0, vign);
        finalColor *= vign;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,g=new Is(2,2),x=new gi({vertexShader:p,fragmentShader:v,uniforms:{uTime:{value:0},uResolution:{value:new Nt(window.innerWidth,window.innerHeight)},uMouse:{value:new Nt(0,0)}},depthWrite:!1,depthTest:!1});i.current=x;const y=new wi(g,x);d.add(y);const b=new aM,T=()=>{if(!c.current)return;const w=b.getElapsedTime();i.current&&(i.current.uniforms.uTime.value=w,i.current.uniforms.uMouse.value.lerp(r.current,.05)),m.render(d,h),l.current=requestAnimationFrame(T)};l.current=requestAnimationFrame(T);const M=()=>{if(t.current&&i.current){const w=window.innerWidth,U=window.innerHeight;t.current.setSize(w,U),i.current.uniforms.uResolution.value.set(w,U)}},_=w=>{const U=w.clientX/window.innerWidth*2-1,L=-(w.clientY/window.innerHeight)*2+1,z=window.innerWidth/window.innerHeight;r.current.set(U*z,L)};return window.addEventListener("resize",M),window.addEventListener("mousemove",_),()=>{c.current=!1,window.removeEventListener("resize",M),window.removeEventListener("mousemove",_),cancelAnimationFrame(l.current),t.current&&t.current.domElement&&t.current.domElement.parentNode&&(t.current.domElement.parentNode.removeChild(t.current.domElement),t.current.dispose()),g.dispose(),x.dispose()}},[]),he.jsx("div",{ref:o,className:"fixed inset-0 z-0 bg-[#030303]"})},tA=[{count:"4x",name:"HACKATHON WINNER"},{count:"3.55",name:"GPA"},{count:"185",name:"BENCH PRESS"}],C_=[],nA=[{name:"Inspired Island",url:"https://www.youtube.com/c/inspiredisland"},"Victor Wembanyama",{name:"Robert Borghesi",url:"https://robertborghesi.is/"}],iA=["Hey! I'm Shivam Maji, a sophomore at Santa Clara University studying Computer Engineerng and Mechanical Engineering. I build software, design hardware, and like when the two meet in the middle.","On the CS side, I started out modding Minecraft in Java and making games in Unity. Since then I've moved through frontend work in React, picked up Python for AI and computer vision, messed around with C++ and Kotlin, and trained models in PyTorch and TensorFlow. I like learning whatever the project demands and figuring it out as I go. Hackathons have become my favorite way to build fast, break things, and walk away with something that actually works.","I'm a member of my university's Formula SAE team, where I work on aerodynamics and chassis design using SolidWorks and ANSYS. On the hardware side, I've worked with Verilog and ASIC design.","Huge space nerd. The goal is aerospace — NASA, SpaceX, somewhere with a mission control. I also cook, lift, play chess poorly, and have spent way too much money on camera gear.","Open to internships, collaborations, or a good conversation."],w_={email:"smaji@scu.edu",socials:[{name:"GITHUB",url:"https://github.com/dgne58"},{name:"LINKEDIN",url:"https://www.linkedin.com/in/shivam-maji/"}]};var ha={},Pd={},pa={},D_;function Sv(){if(D_)return pa;D_=1,Object.defineProperty(pa,"__esModule",{value:!0}),pa.loop=pa.conditional=pa.parse=void 0;var o=function r(l,c){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d;if(Array.isArray(c))c.forEach(function(p){return r(l,p,d,h)});else if(typeof c=="function")c(l,d,h,r);else{var m=Object.keys(c)[0];Array.isArray(c[m])?(h[m]={},r(l,c[m],d,h[m])):h[m]=c[m](l,d,h,r)}return d};pa.parse=o;var t=function(l,c){return function(d,h,m,p){c(d,h,m)&&p(d,l,h,m)}};pa.conditional=t;var i=function(l,c){return function(d,h,m,p){for(var v=[],g=d.pos;c(d,h,m);){var x={};if(p(d,l,h,x),d.pos===g)break;g=d.pos,v.push(x)}return v}};return pa.loop=i,pa}var an={},U_;function yv(){if(U_)return an;U_=1,Object.defineProperty(an,"__esModule",{value:!0}),an.readBits=an.readArray=an.readUnsigned=an.readString=an.peekBytes=an.readBytes=an.peekByte=an.readByte=an.buildStream=void 0;var o=function(g){return{data:g,pos:0}};an.buildStream=o;var t=function(){return function(g){return g.data[g.pos++]}};an.readByte=t;var i=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(x){return x.data[x.pos+g]}};an.peekByte=i;var r=function(g){return function(x){return x.data.subarray(x.pos,x.pos+=g)}};an.readBytes=r;var l=function(g){return function(x){return x.data.subarray(x.pos,x.pos+g)}};an.peekBytes=l;var c=function(g){return function(x){return Array.from(r(g)(x)).map(function(y){return String.fromCharCode(y)}).join("")}};an.readString=c;var d=function(g){return function(x){var y=r(2)(x);return g?(y[1]<<8)+y[0]:(y[0]<<8)+y[1]}};an.readUnsigned=d;var h=function(g,x){return function(y,b,T){for(var M=typeof x=="function"?x(y,b,T):x,_=r(g),w=new Array(M),U=0;U<M;U++)w[U]=_(y);return w}};an.readArray=h;var m=function(g,x,y){for(var b=0,T=0;T<y;T++)b+=g[x+T]&&Math.pow(2,y-T-1);return b},p=function(g){return function(x){for(var y=t()(x),b=new Array(8),T=0;T<8;T++)b[7-T]=!!(y&1<<T);return Object.keys(g).reduce(function(M,_){var w=g[_];return w.length?M[_]=m(b,w.index,w.length):M[_]=b[w.index],M},{})}};return an.readBits=p,an}var N_;function aA(){return N_||(N_=1,(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=Sv(),i=yv(),r={blocks:function(x){for(var y=0,b=[],T=x.data.length,M=0,_=(0,i.readByte)()(x);_!==y&&_;_=(0,i.readByte)()(x)){if(x.pos+_>=T){var w=T-x.pos;b.push((0,i.readBytes)(w)(x)),M+=w;break}b.push((0,i.readBytes)(_)(x)),M+=_}for(var U=new Uint8Array(M),L=0,z=0;z<b.length;z++)U.set(b[z],L),L+=b[z].length;return U}},l=(0,t.conditional)({gce:[{codes:(0,i.readBytes)(2)},{byteSize:(0,i.readByte)()},{extras:(0,i.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,i.readUnsigned)(!0)},{transparentColorIndex:(0,i.readByte)()},{terminator:(0,i.readByte)()}]},function(g){var x=(0,i.peekBytes)(2)(g);return x[0]===33&&x[1]===249}),c=(0,t.conditional)({image:[{code:(0,i.readByte)()},{descriptor:[{left:(0,i.readUnsigned)(!0)},{top:(0,i.readUnsigned)(!0)},{width:(0,i.readUnsigned)(!0)},{height:(0,i.readUnsigned)(!0)},{lct:(0,i.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,i.readArray)(3,function(g,x,y){return Math.pow(2,y.descriptor.lct.size+1)})},function(g,x,y){return y.descriptor.lct.exists}),{data:[{minCodeSize:(0,i.readByte)()},r]}]},function(g){return(0,i.peekByte)()(g)===44}),d=(0,t.conditional)({text:[{codes:(0,i.readBytes)(2)},{blockSize:(0,i.readByte)()},{preData:function(x,y,b){return(0,i.readBytes)(b.text.blockSize)(x)}},r]},function(g){var x=(0,i.peekBytes)(2)(g);return x[0]===33&&x[1]===1}),h=(0,t.conditional)({application:[{codes:(0,i.readBytes)(2)},{blockSize:(0,i.readByte)()},{id:function(x,y,b){return(0,i.readString)(b.blockSize)(x)}},r]},function(g){var x=(0,i.peekBytes)(2)(g);return x[0]===33&&x[1]===255}),m=(0,t.conditional)({comment:[{codes:(0,i.readBytes)(2)},r]},function(g){var x=(0,i.peekBytes)(2)(g);return x[0]===33&&x[1]===254}),p=[{header:[{signature:(0,i.readString)(3)},{version:(0,i.readString)(3)}]},{lsd:[{width:(0,i.readUnsigned)(!0)},{height:(0,i.readUnsigned)(!0)},{gct:(0,i.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,i.readByte)()},{pixelAspectRatio:(0,i.readByte)()}]},(0,t.conditional)({gct:(0,i.readArray)(3,function(g,x){return Math.pow(2,x.lsd.gct.size+1)})},function(g,x){return x.lsd.gct.exists}),{frames:(0,t.loop)([l,h,m,c,d],function(g){var x=(0,i.peekByte)()(g);return x===33||x===44})}],v=p;o.default=v})(Pd)),Pd}var ko={},L_;function rA(){if(L_)return ko;L_=1,Object.defineProperty(ko,"__esModule",{value:!0}),ko.deinterlace=void 0;var o=function(i,r){for(var l=new Array(i.length),c=i.length/r,d=function(y,b){var T=i.slice(b*r,(b+1)*r);l.splice.apply(l,[y*r,r].concat(T))},h=[0,4,2,1],m=[8,8,4,2],p=0,v=0;v<4;v++)for(var g=h[v];g<c;g+=m[v])d(g,p),p++;return l};return ko.deinterlace=o,ko}var Xo={},O_;function sA(){if(O_)return Xo;O_=1,Object.defineProperty(Xo,"__esModule",{value:!0}),Xo.lzw=void 0;var o=function(i,r,l){var c=4096,d=-1,h=l,m,p,v,g,x,y,b,P,T,M,B,_,q,A,V,D,w=new Array(l),U=new Array(c),L=new Array(c),z=new Array(c+1);for(_=i,p=1<<_,x=p+1,m=p+2,b=d,g=_+1,v=(1<<g)-1,T=0;T<p;T++)U[T]=0,L[T]=T;var B,P,q,A,D,V;for(B=P=q=A=D=V=0,M=0;M<h;){if(A===0){if(P<g){B+=r[V]<<P,P+=8,V++;continue}if(T=B&v,B>>=g,P-=g,T>m||T==x)break;if(T==p){g=_+1,v=(1<<g)-1,m=p+2,b=d;continue}if(b==d){z[A++]=L[T],b=T,q=T;continue}for(y=T,T==m&&(z[A++]=q,T=b);T>p;)z[A++]=L[T],T=U[T];q=L[T]&255,z[A++]=q,m<c&&(U[m]=b,L[m]=q,m++,(m&v)===0&&m<c&&(g++,v+=m)),b=y}A--,w[D++]=z[A],M++}for(M=D;M<h;M++)w[M]=0;return w};return Xo.lzw=o,Xo}var P_;function oA(){if(P_)return ha;P_=1,Object.defineProperty(ha,"__esModule",{value:!0}),ha.decompressFrames=ha.decompressFrame=ha.parseGIF=void 0;var o=c(aA()),t=Sv(),i=yv(),r=rA(),l=sA();function c(v){return v&&v.__esModule?v:{default:v}}var d=function(g){var x=new Uint8Array(g);return(0,t.parse)((0,i.buildStream)(x),o.default)};ha.parseGIF=d;var h=function(g){for(var x=g.pixels.length,y=new Uint8ClampedArray(x*4),b=0;b<x;b++){var T=b*4,M=g.pixels[b],_=g.colorTable[M]||[0,0,0];y[T]=_[0],y[T+1]=_[1],y[T+2]=_[2],y[T+3]=M!==g.transparentIndex?255:0}return y},m=function(g,x,y){if(!g.image){console.warn("gif frame does not have associated image.");return}var b=g.image,T=b.descriptor.width*b.descriptor.height,M=(0,l.lzw)(b.data.minCodeSize,b.data.blocks,T);b.descriptor.lct.interlaced&&(M=(0,r.deinterlace)(M,b.descriptor.width));var _={pixels:M,dims:{top:g.image.descriptor.top,left:g.image.descriptor.left,width:g.image.descriptor.width,height:g.image.descriptor.height}};return b.descriptor.lct&&b.descriptor.lct.exists?_.colorTable=b.lct:_.colorTable=x,g.gce&&(_.delay=(g.gce.delay||10)*10,_.disposalType=g.gce.extras.disposal,g.gce.extras.transparentColorGiven&&(_.transparentIndex=g.gce.transparentColorIndex)),y&&(_.patch=h(_)),_};ha.decompressFrame=m;var p=function(g,x){return g.frames.filter(function(y){return y.image}).map(function(y){return m(y,g.gct,x)})};return ha.decompressFrames=p,ha}var z_=oA();const lA=({previewState:o})=>{const t=He.useRef(null),i=He.useRef(null),r=He.useRef(null),l=He.useRef(null),c=He.useRef(null),d=He.useRef(null),h=He.useRef(null),m=He.useRef(null),p=He.useRef({main:new re(0,0,0),tl:new re(-300,100,10),br:new re(-340,-110,12)}),v=He.useRef([]),g=He.useRef(0),x=He.useRef(0),y=He.useRef(!1),b=He.useRef(0),T=He.useRef(null),M=He.useRef(0),_=He.useRef(0),w=He.useRef({x:0,y:0}),U=He.useRef({x:0,y:0}),L=He.useRef(new nM),z=He.useRef(new Map),B=He.useRef(null),P=He.useRef(Math.random()*100),q=He.useRef(new Map),A=He.useRef(null),D=He.useRef(0),V=1200,J=700,Q=He.useCallback(()=>{if(typeof window>"u")return{width:V,height:J,scale:1};const pe=window.innerWidth,fe=Math.max(.4,Math.min(1.2,pe*.8/V));return{width:V*fe,height:J*fe,scale:fe}},[]),[se,ue]=He.useState(Q),F=He.useRef(se);F.current=se;const H=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,ne=`
    uniform sampler2D uTexture;
    uniform sampler2D uTextureOld;
    uniform float uHasOld;
    uniform float uProgress;
    uniform float uSeed;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float hash(vec2 p) {
      vec3 p3  = fract(vec3(p.xyx) * .1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), 
        u.y
      );
    }

    void main() {
      vec2 uv = vUv;
      float aspect = uResolution.x / uResolution.y;
      float p = uProgress;
      
      // If no old texture and progress is very low, discard to keep transparent
      if (uHasOld < 0.5 && p < 0.01) discard;

      // Pixelation Transition for NEW image
      // As p goes 0->1, res goes low->high
      float startRes = 60.0; 
      float endRes = 800.0; 
      float res = mix(startRes, endRes, pow(p, 3.0)); 
      
      vec2 gridSize = vec2(res, res / aspect);
      vec2 gridUv = floor(uv * gridSize) / gridSize;
      gridUv += (1.0 / gridSize) * 0.5;

      // Noise Mask for growth
      float maskRes = 40.0;
      vec2 maskGridSize = vec2(maskRes, maskRes / aspect);
      vec2 maskCell = floor(uv * maskGridSize);
      
      float noiseVal = noise((maskCell * 0.15) + uSeed);
      
      // visible: 1.0 = Show New, 0.0 = Show Old (or Transparent)
      float visible = step(noiseVal, p * 1.15);

      vec4 newColor = texture2D(uTexture, gridUv);
      vec4 oldColor = texture2D(uTextureOld, uv); 

      if (uHasOld > 0.5) {
        // Overlap Mode:
        // When p=0, visible=0 -> Show Old.
        // When p=1, visible=1 -> Show New.
        gl_FragColor = mix(oldColor, newColor, visible);
      } else {
        // Standard Reveal Mode (No Old Image):
        // When p=0, visible=0 -> Discard.
        // When p=1, visible=1 -> Show New.
        if (visible < 0.5) discard;
        gl_FragColor = newColor;
      }
    }
  `;return He.useEffect(()=>{const pe=document.createElement("canvas");pe.width=1,pe.height=1;const ve=pe.getContext("2d");ve&&(ve.fillStyle="rgba(0,0,0,0)",ve.fillRect(0,0,1,1));const N=new i_(pe);return B.current=N,A.current=window.setInterval(()=>{const Z=performance.now();q.current.forEach((fe,be)=>{const ze=Z-fe.lastFrameTime,ee=fe.delays[fe.currentFrame]||100;ze>=ee&&(fe.currentFrame=(fe.currentFrame+1)%fe.frames.length,fe.lastFrameTime=Z,fe.ctx.putImageData(fe.frames[fe.currentFrame],0,0),be.needsUpdate=!0)})},16),()=>{A.current&&clearInterval(A.current)}},[]),He.useEffect(()=>{if(!i.current)return;const pe=F.current,ve=new fv;r.current=ve;const N=new Xc(V/-2,V/2,J/2,J/-2,1,1e3);N.position.z=100,l.current=N;const Z=new xv({alpha:!0,antialias:!1,powerPreference:"high-performance"});Z.setSize(pe.width,pe.height),Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.sortObjects=!0,Z.domElement.style.display="block",Z.domElement.style.position="absolute",Z.domElement.style.top="0",Z.domElement.style.left="0",i.current.appendChild(Z.domElement),c.current=Z,t.current&&(t.current.style.width=`${pe.width}px`,t.current.style.height=`${pe.height}px`);const fe=(ke,lt,st,nt,tt)=>{const Je=new Is(ke,lt),Tt=new gi({uniforms:{uTexture:{value:null},uTextureOld:{value:null},uHasOld:{value:0},uProgress:{value:0},uSeed:{value:P.current},uResolution:{value:new Nt(ke,lt)}},transparent:!0,vertexShader:H,fragmentShader:ne,side:Fi}),G=new wi(Je,Tt);return G.position.set(st,nt,tt),G.visible=!1,ve.add(G),v.current.push(Tt),G},be=fe(420,280,p.current.main.x,p.current.main.y,p.current.main.z);d.current=be;const ze=fe(220,150,p.current.tl.x,p.current.tl.y,p.current.tl.z);h.current=ze;const ee=fe(180,240,p.current.br.x,p.current.br.y,p.current.br.z);m.current=ee;const de=()=>{if(!(g.current>.001||x.current>.001)){y.current=!1,t.current&&(t.current.style.opacity="0");return}b.current=requestAnimationFrame(de);const lt=x.current-g.current;g.current+=lt*.015,Math.abs(x.current-g.current)<.001&&(g.current=x.current),v.current.forEach(Tt=>{Tt&&(Tt.uniforms.uProgress.value=g.current)});const st=.05;U.current.x+=(w.current.x-U.current.x)*st,U.current.y+=(w.current.y-U.current.y)*st;const nt=U.current.x,tt=U.current.y;d.current&&(d.current.position.x=p.current.main.x+nt*20,d.current.position.y=p.current.main.y+tt*20,d.current.rotation.y=nt*.05,d.current.rotation.x=-tt*.05),h.current&&(h.current.position.x=p.current.tl.x+nt*40,h.current.position.y=p.current.tl.y+tt*40,h.current.rotation.z=-nt*.05),m.current&&(m.current.position.x=p.current.br.x+nt*30,m.current.position.y=p.current.br.y+tt*30,m.current.rotation.z=nt*.03);const Je=M.current-_.current;_.current+=Je*.12,t.current&&(t.current.style.transform=`translate3d(-50%, ${_.current}px, 0)`,v.current.length>0&&(g.current>.01?(t.current.style.opacity="1",Z.render(ve,N)):t.current.style.opacity="0"))},Ce=()=>{y.current||(y.current=!0,de())};T.current=Ce;const Ve=ke=>{const lt=ke.clientX/window.innerWidth*2-1,st=-(ke.clientY/window.innerHeight*2-1);w.current={x:lt,y:st}};window.addEventListener("mousemove",Ve);const we=()=>{const ke=Q();ue(ke),Z.setSize(ke.width,ke.height),t.current&&(t.current.style.width=`${ke.width}px`,t.current.style.height=`${ke.height}px`)};return window.addEventListener("resize",we),()=>{cancelAnimationFrame(b.current),window.removeEventListener("mousemove",Ve),window.removeEventListener("resize",we),i.current&&Z.domElement&&i.current.removeChild(Z.domElement),Z.dispose(),v.current.forEach(ke=>ke.dispose()),v.current=[],T.current=null}},[Q,ue]),He.useEffect(()=>{var ve,N;const pe=Math.random();if(D.current=pe,o&&o.project.img){const{project:Z,top:fe,height:be}=o,ee=fe+be/2-F.current.height/2;M.current=ee,p.current.main.y=0,g.current<.05&&v.current.length>0&&v.current[0].uniforms.uHasOld.value<.5&&(_.current=ee);const de=we=>we.toLowerCase().endsWith(".gif"),Ce=we=>we?z.current.has(we)?Promise.resolve(z.current.get(we)):de(we)?fetch(we).then(ke=>ke.arrayBuffer()).then(ke=>{const lt=z_.parseGIF(ke),st=z_.decompressFrames(lt,!0);if(st.length===0)return B.current;const nt=lt.lsd.width,tt=lt.lsd.height,Je=document.createElement("canvas");Je.width=nt,Je.height=tt;const Tt=Je.getContext("2d");if(!Tt)return B.current;const G=document.createElement("canvas");G.width=nt,G.height=tt;const zt=G.getContext("2d"),pt=document.createElement("canvas"),Ct=pt.getContext("2d"),Xe=[];st.forEach((X,ge)=>{if(ge>0){const ce=st[ge-1];ce.disposalType===2&&zt.clearRect(ce.dims.left,ce.dims.top,ce.dims.width,ce.dims.height)}pt.width=X.dims.width,pt.height=X.dims.height;const ye=new ImageData(new Uint8ClampedArray(X.patch),X.dims.width,X.dims.height);Ct.putImageData(ye,0,0),zt.drawImage(pt,X.dims.left,X.dims.top),Xe.push(zt.getImageData(0,0,nt,tt))});const O=st.map(X=>X.delay||100);Tt.putImageData(Xe[0],0,0);const E=new i_(Je);return E.wrapS=ti,E.wrapT=ti,E.minFilter=dn,E.magFilter=dn,E.generateMipmaps=!1,q.current.set(E,{frames:Xe,delays:O,currentFrame:0,lastFrameTime:performance.now(),canvas:Je,ctx:Tt}),z.current.set(we,E),E}).catch(()=>B.current):new Promise(ke=>{L.current.load(we,lt=>{lt.wrapS=ti,lt.wrapT=ti,lt.minFilter=dn,lt.magFilter=dn,lt.center.set(.5,.5),lt.repeat.set(1,1),lt.needsUpdate=!0,z.current.set(we,lt),ke(lt)},void 0,()=>{ke(B.current)})}):Promise.resolve(B.current),Ve=[Z.img,(ve=Z.subImages)==null?void 0:ve[0],(N=Z.subImages)==null?void 0:N[1]];Promise.all(Ve.map(Ce)).then(we=>{if(D.current!==pe)return;const ke=v.current,lt=[d.current,h.current,m.current],st=g.current>.15;we.forEach((nt,tt)=>{if(ke[tt]&&lt[tt]){const Je=ke[tt].uniforms.uTexture.value,Tt=lt[tt].visible,G=Je&&Je!==B.current;Tt&&G&&st?(ke[tt].uniforms.uTextureOld.value=Je,ke[tt].uniforms.uHasOld.value=1):ke[tt].uniforms.uHasOld.value=0,ke[tt].uniforms.uTexture.value=nt;const zt=nt!==B.current,pt=ke[tt].uniforms.uHasOld.value>.5;zt||pt?lt[tt].visible=!0:lt[tt].visible=!1}}),g.current=0,x.current=1,T.current&&T.current()}),T.current&&T.current()}else x.current=0,v.current.forEach(Z=>{Z.uniforms.uHasOld.value=0}),T.current&&T.current()},[o]),he.jsxs("div",{ref:t,className:"fixed top-0 left-1/2 z-50 pointer-events-none",style:{width:`${se.width}px`,height:`${se.height}px`,opacity:0,transform:"translate3d(-50%, -2000px, 0)"},children:[he.jsx("div",{ref:i,className:"absolute inset-0 z-0"}),o&&o.project.description&&he.jsxs("div",{className:"absolute top-1/2 bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono uppercase leading-relaxed tracking-wider z-[60] shadow-2xl rounded-sm transition-opacity duration-300",style:{left:"68%",width:`${Math.max(180,280*se.scale)}px`,padding:`${Math.max(12,24*se.scale)}px`,fontSize:`${Math.max(10,12*se.scale)}px`,transform:"translateY(-50%) translateZ(20px)",opacity:o?1:0},children:[he.jsx("span",{className:"block text-white font-bold border-b border-white/20",style:{fontSize:`${Math.max(12,14*se.scale)}px`,marginBottom:`${Math.max(8,12*se.scale)}px`,paddingBottom:`${Math.max(6,8*se.scale)}px`},children:o.project.name}),he.jsx("p",{className:"text-gray-300 normal-case",children:o.project.description})]})]})},Ds=()=>he.jsxs("svg",{className:"w-3 h-3 inline-block ml-1 opacity-70",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[he.jsx("line",{x1:"7",y1:"7",x2:"17",y2:"17"}),he.jsx("polyline",{points:"17 7 17 17 7 17"})]}),zd=({className:o=""})=>he.jsxs("svg",{className:`w-3 h-3 inline-block ${o}`,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[he.jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),he.jsx("polyline",{points:"7 7 17 7 17 17"})]}),cA=()=>{const[o,t]=He.useState(null),[i,r]=He.useState(null),[l,c]=He.useState([]),[d,h]=He.useState(0),[m,p]=He.useState(null),v=He.useRef(null),g=He.useRef(0),x=He.useRef(0);He.useEffect(()=>{fetch("/data/projects.json").then(_=>_.json()).then(_=>c(_)).catch(_=>console.error("Failed to load projects",_))},[]),He.useEffect(()=>{const _="shivam-majis-team-2734",w="first-counter-2734",U="https://api.allorigins.win/raw?url=",L="portfolio_counted_this_session",z="portfolio_last_count",B=sessionStorage.getItem(L);(async()=>{var A,D;const q=localStorage.getItem(z);q&&h(parseInt(q,10));try{const V=new AbortController,J=setTimeout(()=>V.abort(),5e3),se=`https://api.counterapi.dev/v2/${_}/${w}/${B?"get":"up"}`,ue=await fetch(`${U}${encodeURIComponent(se)}`,{signal:V.signal});if(clearTimeout(J),!ue.ok)throw new Error("API error");const F=await ue.json(),H=((A=F.data)==null?void 0:A.up_count)??((D=F.data)==null?void 0:D.count);H&&(h(H),localStorage.setItem(z,H.toString()),sessionStorage.setItem(L,"true"))}catch{if(!q){const J=localStorage.getItem("portfolio_visitor_fallback"),Q=(J?parseInt(J,10):14203)+(B?0:1);localStorage.setItem("portfolio_visitor_fallback",Q.toString()),h(Q)}}})()},[]);const y=_=>{const w=_%100;if(w>=11&&w<=13)return"th";switch(_%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}};He.useEffect(()=>{(async()=>{try{const U=await(await fetch("https://api.open-meteo.com/v1/forecast?latitude=37.3486&longitude=-121.9367&current_weather=true")).json();p(Math.round(U.current_weather.temperature))}catch(w){console.error("Weather fetch failed",w)}})()},[]),He.useEffect(()=>{const _=()=>{g.current=window.scrollY},w=()=>{if(v.current){const U=g.current*.35;v.current.style.transform=`translateX(-${U}px)`}x.current=requestAnimationFrame(w)};return window.addEventListener("scroll",_,{passive:!0}),x.current=requestAnimationFrame(w),()=>{window.removeEventListener("scroll",_),cancelAnimationFrame(x.current)}},[]);const b=_=>{const w=document.getElementById(_);w==null||w.scrollIntoView({behavior:"smooth"})},T=({label:_,target:w})=>he.jsxs("button",{onClick:()=>b(w),className:"group relative text-sm font-bold text-gray-400 hover:text-white transition-colors duration-300",children:[he.jsx("span",{className:"absolute -left-3 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-gray-500",children:"("}),_,he.jsx("span",{className:"absolute -right-3 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-gray-500",children:")"})]}),M=()=>i!==null?"opacity-20 blur-[2px]":"opacity-100";return he.jsxs(he.Fragment,{children:[he.jsx(lA,{previewState:o}),he.jsxs("div",{className:"relative z-10 w-full text-[#f0f0f0] font-sans selection:bg-white selection:text-black cursor-none",children:[he.jsxs("nav",{className:`fixed top-0 left-0 w-full flex justify-between items-start px-6 py-6 md:px-12 mix-blend-difference z-50 transition-all duration-500 ${M()}`,children:[he.jsx("div",{className:"text-xs font-bold tracking-[0.2em] uppercase text-white",children:he.jsxs("div",{children:["©2026:",he.jsx("span",{className:"text-gray-500",children:"V.1"})]})}),he.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 hidden md:block font-mono text-xs",children:he.jsx("span",{className:"inline-block animate-[spin_4s_linear_infinite] opacity-60 text-white",children:"( + )"})}),he.jsxs("div",{className:"flex gap-8",children:[he.jsx(T,{label:"PRJ",target:"projects"}),he.jsx(T,{label:"WHO",target:"about"}),he.jsx(T,{label:"MSG",target:"contact"})]})]}),he.jsxs("header",{className:`pt-32 pb-8 md:pt-48 md:pb-16 overflow-hidden w-full transition-all duration-500 ${M()}`,children:[he.jsx("h1",{ref:v,className:"text-[16.5vw] leading-[0.75] font-bold uppercase tracking-tighter whitespace-nowrap will-change-transform text-[#f5f5f5]",style:{transform:"translateX(0px)",fontFamily:"OffBit, sans-serif"},children:"Shivam Maji"}),he.jsxs("div",{className:"px-6 md:px-12 mt-8 md:mt-12 max-w-lg",children:[he.jsxs("p",{className:"text-sm md:text-base font-medium leading-relaxed text-gray-200",children:["I'm Shivam Maji, a ",he.jsx("span",{className:"text-white",children:"Computer Engineering"})," and ",he.jsx("span",{className:"text-white",children:"Mechanical Engineering"})," student at SCU."]}),he.jsxs("div",{className:"mt-6 flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest opacity-80",children:[he.jsx("span",{className:"w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"}),he.jsxs("span",{children:["You are the ",d.toLocaleString(),y(d)," visitor"]})]})]})]}),he.jsxs("section",{id:"projects",className:"px-6 md:px-12 mb-32 md:mb-48",children:[he.jsxs("div",{className:`text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-2 flex items-center gap-2 transition-all duration-500 ${M()}`,children:["Selected Projects ",he.jsx(Ds,{})]}),he.jsxs("div",{className:"w-full",children:[l.length===0&&he.jsx("div",{className:"py-8 text-center text-gray-500 font-mono text-xs uppercase animate-pulse",children:"Loading Projects Data..."}),l.map((_,w)=>{var z;const U=i===w,L=i!==null&&!U;return he.jsxs("a",{href:_.url,target:"_blank",rel:"noopener noreferrer",onMouseEnter:B=>{const P=B.currentTarget.getBoundingClientRect();t({project:_,top:P.top,height:P.height}),r(w)},onMouseLeave:()=>{t(null),r(null)},className:`
                      group grid grid-cols-[50px_1fr_auto] md:grid-cols-[60px_120px_1fr_auto_100px] 
                      items-baseline py-6 border-b 
                      transition-all duration-500 gap-y-2 cursor-none
                      ${U?"border-white opacity-100":"border-white/10"}
                      ${L?"opacity-20 blur-[1px]":""}
                      ${i===null?"hover:border-white/30":""}
                    `,children:[he.jsxs("span",{className:`text-xs font-mono transition-colors pointer-events-none ${U?"text-white":"text-gray-500"}`,children:[he.jsx("span",{className:"text-gray-500 opacity-60",children:"//"}),_.year]}),he.jsx("span",{className:`text-xs font-mono hidden md:block pointer-events-none transition-colors ${U?"text-white opacity-100":"text-gray-500 opacity-60"}`,children:_.type}),he.jsx("span",{className:`
                      text-xl md:text-3xl font-light uppercase tracking-tighter transition-all duration-300 col-span-2 md:col-span-1 pointer-events-none
                      ${U?"text-white translate-x-4":"text-gray-200"}
                    `,children:_.name}),he.jsx("div",{className:"hidden md:flex justify-end gap-2 text-[10px] font-mono text-gray-400 tracking-wider w-full text-right px-4 pointer-events-none",children:(z=_.field)==null?void 0:z.map((B,P)=>he.jsxs("span",{children:["(",B,")"]},P))}),he.jsx("div",{className:"flex justify-end items-center pointer-events-none",children:he.jsxs("span",{className:`
                        text-[10px] uppercase tracking-widest px-3 py-1 rounded transition-all flex items-center gap-2
                        ${U?"text-white bg-white/10":"text-gray-400"}
                      `,children:["Launch ",he.jsx(zd,{})]})})]},w)})]})]}),he.jsxs("section",{id:"about",className:`px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 transition-all duration-500 ${M()}`,children:[he.jsxs("div",{className:"md:col-span-5 flex flex-col gap-16",children:[he.jsxs("div",{children:[he.jsxs("h3",{className:"text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2",children:["Achievements ",he.jsx(Ds,{})]}),he.jsx("ul",{className:"space-y-3",children:tA.map((_,w)=>he.jsxs("li",{className:"text-sm font-mono text-gray-300 flex gap-6 hover:text-white transition-colors cursor-none",children:[he.jsx("span",{className:"text-gray-500 w-8",children:_.count}),he.jsx("span",{children:_.name})]},w))})]}),C_.length>0&&he.jsxs("div",{children:[he.jsxs("h3",{className:"text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2",children:["Publications ",he.jsx(Ds,{})]}),he.jsx("ul",{className:"space-y-3",children:C_.map((_,w)=>he.jsxs("li",{className:"text-sm font-mono text-gray-300 flex gap-6 group hover:text-white transition-colors cursor-none items-center",children:[he.jsx("span",{className:"w-8 flex items-center text-gray-500 group-hover:text-white transition-colors",children:he.jsx(zd,{})}),he.jsx("a",{href:_.url,target:"_blank",rel:"noopener noreferrer",className:"decoration-1 underline-offset-4 group-hover:underline cursor-none",children:_.name})]},w))})]}),he.jsxs("div",{children:[he.jsxs("h3",{className:"text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2",children:["Special thanks ",he.jsx(Ds,{})]}),he.jsx("ul",{className:"space-y-3",children:nA.map((_,w)=>he.jsxs("li",{className:"text-sm font-mono text-gray-300 flex gap-6 hover:text-white transition-colors cursor-none items-center",children:[he.jsx("span",{className:"w-8 flex items-center text-gray-500 group-hover:text-white transition-colors",children:he.jsx(zd,{})}),typeof _=="string"?he.jsx("span",{children:_}):he.jsx("a",{href:_.url,target:"_blank",rel:"noopener noreferrer",className:"decoration-1 underline-offset-4 hover:underline cursor-none",children:_.name})]},w))})]}),he.jsxs("div",{id:"contact",children:[he.jsxs("h3",{className:"text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2",children:["Get in touch ",he.jsx(Ds,{})]}),he.jsx("div",{className:"text-sm font-mono text-gray-300 mb-6",children:he.jsx("p",{children:"Here several ways you can slide into my DMs. I'm currently working as a freelancer and open for collaborations long and short term."})}),he.jsxs("ul",{className:"space-y-3",children:[w_.socials.map((_,w)=>he.jsx("li",{children:he.jsxs("a",{href:_.url,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center gap-3 cursor-none",children:[he.jsx("span",{className:"w-2 h-2 rounded-full transition-colors bg-gray-600 group-hover:bg-white"}),he.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors",children:_.name})]})},w)),he.jsx("li",{children:he.jsxs("a",{href:`mailto:${w_.email}`,className:"group flex items-center gap-3 cursor-none",children:[he.jsx("span",{className:"w-2 h-2 bg-gray-600 group-hover:bg-white rounded-full transition-colors"}),he.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors",children:"MAIL"})]})})]})]})]}),he.jsx("div",{className:"md:col-start-7 md:col-span-6 flex flex-col gap-24",children:he.jsxs("div",{children:[he.jsxs("h3",{className:"text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-2",children:["About ",he.jsx(Ds,{})]}),he.jsx("div",{className:"text-xl md:text-3xl font-light leading-snug text-gray-200 space-y-8",children:iA.map((_,w)=>he.jsx("p",{className:"hover:text-white transition-colors duration-500",children:_},w))})]})})]}),he.jsxs("footer",{className:`px-6 md:px-12 pb-8 flex justify-between items-end text-[10px] text-gray-500 font-mono tracking-widest transition-all duration-500 ${M()}`,children:[he.jsxs("div",{className:"flex gap-6",children:[he.jsx("span",{children:"COORDS: 37.3486° N / 121.9367° W"}),he.jsxs("span",{className:"hidden md:inline",children:["TEMP: ",he.jsx("span",{className:"text-gray-300",children:m!==null?`${m}°C`:"..."})]})]}),he.jsxs("div",{className:"flex items-center",children:[he.jsx("span",{className:"w-2 h-2 bg-white rounded-full inline-block animate-pulse mr-2 shadow-[0_0_5px_white]"}),he.jsx("span",{children:"ONLINE"})]})]})]})]})},uA=({onComplete:o})=>{const[t,i]=He.useState(0),[r,l]=He.useState(!1),[c,d]=He.useState(!1),h=He.useRef(null),m=He.useRef(0),p=He.useRef(Math.random()*100),v=He.useRef(0),g=He.useRef(0),x=He.useRef([]),y=He.useRef(0),b=w=>w-Math.floor(w),T=(w,U)=>b(Math.sin(w*12.9898+U*78.233+p.current)*43758.5453),M=(w,U)=>{const L=Math.floor(w),z=Math.floor(U),B=b(w),P=b(U),q=B*B*(3-2*B),A=P*P*(3-2*P),D=T(L,z),V=T(L+1,z),J=T(L,z+1),Q=T(L+1,z+1);return D+(V-D)*q+(J-D)*A+(D-V-J+Q)*q*A};He.useEffect(()=>{const w=h.current;if(!w)return;const U=w.getContext("2d",{alpha:!0});if(!U)return;const L=()=>{const B=Math.min(window.devicePixelRatio,2);w.width=window.innerWidth*B,w.height=window.innerHeight*B,w.style.width="100%",w.style.height="100%",U.scale(B,B);const P=window.innerWidth,q=window.innerHeight,A=32,D=Math.ceil(P/A)+1,V=Math.ceil(q/A)+1;v.current=D,g.current=V;const J=new Array(D*V);for(let Q=0;Q<V;Q++)for(let se=0;se<D;se++){const ue=M(se*.06,Q*.06);J[Q*D+se]=ue}x.current=J};window.addEventListener("resize",L),L();const z=()=>{if(!U||!w)return;const B=window.innerWidth,P=window.innerHeight;U.clearRect(0,0,B,P);const q=32,A=v.current,D=g.current,J=y.current*1.6-.4;for(let Q=0;Q<D;Q++)for(let se=0;se<A;se++){const F=x.current[Q*A+se]-J;if(F<0)continue;const H=se*q+q/2,ne=Q*q+q/2;if(F<.05){U.fillStyle="#ffffff";const pe=q*.25;U.fillRect(H-pe/2,ne-pe/2,pe,pe)}else if(F<.15){U.fillStyle="#333333";const pe=q*.5;U.fillRect(H-pe/2,ne-pe/2,pe,pe)}else if(F<.25){U.fillStyle="#111111";const pe=q*.75;U.fillRect(H-pe/2,ne-pe/2,pe,pe)}else U.fillStyle="#000000",U.fillRect(se*q,Q*q,q+.5,q+.5)}m.current=requestAnimationFrame(z)};return z(),()=>{window.removeEventListener("resize",L),cancelAnimationFrame(m.current)}},[]),He.useEffect(()=>{if(c){let w=null;const U=1800,L=z=>{w||(w=z);const B=z-w,P=Math.min(B/U,1);y.current=P,P<1?requestAnimationFrame(L):o()};requestAnimationFrame(L)}},[c,o]),He.useEffect(()=>{const w=setInterval(()=>{i(U=>U>=100?(clearInterval(w),l(!0),100):Math.min(U+Math.floor(Math.random()*5)+2,100))},50);return()=>clearInterval(w)},[]);const _=()=>{!r||c||d(!0)};return he.jsxs("div",{className:`fixed inset-0 z-[100] cursor-pointer transition-colors duration-300 ${c?"bg-transparent":"bg-[#030303]"}`,onClick:_,children:[he.jsx("canvas",{ref:h,className:"absolute inset-0 z-0 pointer-events-none"}),he.jsx("div",{className:`absolute inset-0 z-10 flex flex-col items-center justify-center text-white font-mono transition-opacity duration-300 ${c?"opacity-0":"opacity-100"}`,children:he.jsxs("div",{className:"text-center mix-blend-difference",children:[he.jsxs("div",{className:"text-9xl font-bold tracking-tighter mb-8 tabular-nums",children:[t,"%"]}),he.jsx("div",{className:"h-12 flex items-center justify-center",children:r?he.jsx("div",{className:"animate-pulse text-xs tracking-[0.4em] uppercase border border-white/20 px-4 py-3 hover:bg-white hover:text-black transition-colors",children:"Click to Initialize"}):he.jsxs("div",{className:"text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-3 justify-center",children:[he.jsx("span",{className:"block w-1 h-1 bg-white animate-ping"}),"Loading Assets"]})})]})})]})},fA=()=>{const o=He.useRef(null),t=He.useRef({x:-100,y:-100}),i=He.useRef({x:-100,y:-100}),r=He.useRef(0);return He.useEffect(()=>{const l=d=>{t.current={x:d.clientX,y:d.clientY}};window.addEventListener("mousemove",l);const c=()=>{const d=t.current.x-i.current.x,h=t.current.y-i.current.y;i.current.x+=d*.15,i.current.y+=h*.15,o.current&&(o.current.style.transform=`translate3d(${i.current.x}px, ${i.current.y}px, 0) translate(-50%, -50%)`),r.current=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("mousemove",l),cancelAnimationFrame(r.current)}},[]),he.jsx("div",{ref:o,className:"fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform",style:{boxShadow:"0 0 10px rgba(255,255,255,0.5)"}})},dA=()=>he.jsx("div",{className:"fixed inset-0 z-[90] pointer-events-none opacity-[0.035] mix-blend-overlay will-change-transform",style:{transform:"translate3d(0,0,0)",backfaceVisibility:"hidden"},children:he.jsxs("svg",{className:"w-full h-full",children:[he.jsx("filter",{id:"noiseFilter",children:he.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.80",numOctaves:"3",stitchTiles:"stitch"})}),he.jsx("rect",{width:"100%",height:"100%",filter:"url(#noiseFilter)"})]})}),hA=()=>{const[o,t]=He.useState(!0);return he.jsxs(he.Fragment,{children:[he.jsx(fA,{}),he.jsx(dA,{}),o&&he.jsx(uA,{onComplete:()=>t(!1)}),he.jsxs("div",{className:"relative w-full min-h-screen",children:[he.jsx(eA,{}),he.jsx(cA,{})]})]})},Mv=document.getElementById("root");if(!Mv)throw new Error("Could not find root element to mount to");const pA=BS.createRoot(Mv);pA.render(he.jsx(DS.StrictMode,{children:he.jsx(hA,{})}));
