(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function nv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var rd={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function YS(){if(Og)return Fo;Og=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=t,Fo.jsx=i,Fo.jsxs=i,Fo}var Pg;function ZS(){return Pg||(Pg=1,rd.exports=YS()),rd.exports}var q=ZS(),sd={exports:{}},ft={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function KS(){if(Fg)return ft;Fg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(I,ne,_e){this.props=I,this.context=ne,this.refs=M,this.updater=_e||b}x.prototype.isReactComponent={},x.prototype.setState=function(I,ne){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ne,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function F(){}F.prototype=x.prototype;function L(I,ne,_e){this.props=I,this.context=ne,this.refs=M,this.updater=_e||b}var N=L.prototype=new F;N.constructor=L,T(N,x.prototype),N.isPureReactComponent=!0;var P=Array.isArray;function R(){}var U={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function A(I,ne,_e){var de=_e.ref;return{$$typeof:s,type:I,key:ne,ref:de!==void 0?de:null,props:_e}}function w(I,ne){return A(I.type,ne,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function J(I){var ne={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(_e){return ne[_e]})}var j=/\/+/g;function ie(I,ne){return typeof I=="object"&&I!==null&&I.key!=null?J(""+I.key):ne.toString(36)}function te(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(R,R):(I.status="pending",I.then(function(ne){I.status==="pending"&&(I.status="fulfilled",I.value=ne)},function(ne){I.status==="pending"&&(I.status="rejected",I.reason=ne)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function B(I,ne,_e,de,be){var Q=typeof I;(Q==="undefined"||Q==="boolean")&&(I=null);var ae=!1;if(I===null)ae=!0;else switch(Q){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(I.$$typeof){case s:case t:ae=!0;break;case _:return ae=I._init,B(ae(I._payload),ne,_e,de,be)}}if(ae)return be=be(I),ae=de===""?"."+ie(I,0):de,P(be)?(_e="",ae!=null&&(_e=ae.replace(j,"$&/")+"/"),B(be,ne,_e,"",function(Ge){return Ge})):be!=null&&(H(be)&&(be=w(be,_e+(be.key==null||I&&I.key===be.key?"":(""+be.key).replace(j,"$&/")+"/")+ae)),ne.push(be)),1;ae=0;var Ae=de===""?".":de+":";if(P(I))for(var He=0;He<I.length;He++)de=I[He],Q=Ae+ie(de,He),ae+=B(de,ne,_e,Q,be);else if(He=y(I),typeof He=="function")for(I=He.call(I),He=0;!(de=I.next()).done;)de=de.value,Q=Ae+ie(de,He++),ae+=B(de,ne,_e,Q,be);else if(Q==="object"){if(typeof I.then=="function")return B(te(I),ne,_e,de,be);throw ne=String(I),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ae}function G(I,ne,_e){if(I==null)return I;var de=[],be=0;return B(I,de,"","",function(Q){return ne.call(_e,Q,be++)}),de}function ee(I){if(I._status===-1){var ne=I._result;ne=ne(),ne.then(function(_e){(I._status===0||I._status===-1)&&(I._status=1,I._result=_e)},function(_e){(I._status===0||I._status===-1)&&(I._status=2,I._result=_e)}),I._status===-1&&(I._status=0,I._result=ne)}if(I._status===1)return I._result.default;throw I._result}var ve=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},ge={map:G,forEach:function(I,ne,_e){G(I,function(){ne.apply(this,arguments)},_e)},count:function(I){var ne=0;return G(I,function(){ne++}),ne},toArray:function(I){return G(I,function(ne){return ne})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ft.Activity=g,ft.Children=ge,ft.Component=x,ft.Fragment=i,ft.Profiler=l,ft.PureComponent=L,ft.StrictMode=r,ft.Suspense=m,ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ft.__COMPILER_RUNTIME={__proto__:null,c:function(I){return U.H.useMemoCache(I)}},ft.cache=function(I){return function(){return I.apply(null,arguments)}},ft.cacheSignal=function(){return null},ft.cloneElement=function(I,ne,_e){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var de=T({},I.props),be=I.key;if(ne!=null)for(Q in ne.key!==void 0&&(be=""+ne.key),ne)!z.call(ne,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&ne.ref===void 0||(de[Q]=ne[Q]);var Q=arguments.length-2;if(Q===1)de.children=_e;else if(1<Q){for(var ae=Array(Q),Ae=0;Ae<Q;Ae++)ae[Ae]=arguments[Ae+2];de.children=ae}return A(I.type,be,de)},ft.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ft.createElement=function(I,ne,_e){var de,be={},Q=null;if(ne!=null)for(de in ne.key!==void 0&&(Q=""+ne.key),ne)z.call(ne,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(be[de]=ne[de]);var ae=arguments.length-2;if(ae===1)be.children=_e;else if(1<ae){for(var Ae=Array(ae),He=0;He<ae;He++)Ae[He]=arguments[He+2];be.children=Ae}if(I&&I.defaultProps)for(de in ae=I.defaultProps,ae)be[de]===void 0&&(be[de]=ae[de]);return A(I,Q,be)},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:h,render:I}},ft.isValidElement=H,ft.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ee}},ft.memo=function(I,ne){return{$$typeof:p,type:I,compare:ne===void 0?null:ne}},ft.startTransition=function(I){var ne=U.T,_e={};U.T=_e;try{var de=I(),be=U.S;be!==null&&be(_e,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(R,ve)}catch(Q){ve(Q)}finally{ne!==null&&_e.types!==null&&(ne.types=_e.types),U.T=ne}},ft.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ft.use=function(I){return U.H.use(I)},ft.useActionState=function(I,ne,_e){return U.H.useActionState(I,ne,_e)},ft.useCallback=function(I,ne){return U.H.useCallback(I,ne)},ft.useContext=function(I){return U.H.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I,ne){return U.H.useDeferredValue(I,ne)},ft.useEffect=function(I,ne){return U.H.useEffect(I,ne)},ft.useEffectEvent=function(I){return U.H.useEffectEvent(I)},ft.useId=function(){return U.H.useId()},ft.useImperativeHandle=function(I,ne,_e){return U.H.useImperativeHandle(I,ne,_e)},ft.useInsertionEffect=function(I,ne){return U.H.useInsertionEffect(I,ne)},ft.useLayoutEffect=function(I,ne){return U.H.useLayoutEffect(I,ne)},ft.useMemo=function(I,ne){return U.H.useMemo(I,ne)},ft.useOptimistic=function(I,ne){return U.H.useOptimistic(I,ne)},ft.useReducer=function(I,ne,_e){return U.H.useReducer(I,ne,_e)},ft.useRef=function(I){return U.H.useRef(I)},ft.useState=function(I){return U.H.useState(I)},ft.useSyncExternalStore=function(I,ne,_e){return U.H.useSyncExternalStore(I,ne,_e)},ft.useTransition=function(){return U.H.useTransition()},ft.version="19.2.4",ft}var Ig;function Vh(){return Ig||(Ig=1,sd.exports=KS()),sd.exports}var Be=Vh();const QS=nv(Be);var od={exports:{}},Io={},ld={exports:{}},cd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function JS(){return Bg||(Bg=1,(function(s){function t(B,G){var ee=B.length;B.push(G);e:for(;0<ee;){var ve=ee-1>>>1,ge=B[ve];if(0<l(ge,G))B[ve]=G,B[ee]=ge,ee=ve;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],ee=B.pop();if(ee!==G){B[0]=ee;e:for(var ve=0,ge=B.length,I=ge>>>1;ve<I;){var ne=2*(ve+1)-1,_e=B[ne],de=ne+1,be=B[de];if(0>l(_e,ee))de<ge&&0>l(be,_e)?(B[ve]=be,B[de]=ee,ve=de):(B[ve]=_e,B[ne]=ee,ve=ne);else if(de<ge&&0>l(be,ee))B[ve]=be,B[de]=ee,ve=de;else break e}}return G}function l(B,G){var ee=B.sortIndex-G.sortIndex;return ee!==0?ee:B.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,g=null,v=3,y=!1,b=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(B){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=B)r(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function P(B){if(T=!1,N(B),!b)if(i(m)!==null)b=!0,R||(R=!0,J());else{var G=i(p);G!==null&&te(P,G.startTime-B)}}var R=!1,U=-1,z=5,A=-1;function w(){return M?!0:!(s.unstable_now()-A<z)}function H(){if(M=!1,R){var B=s.unstable_now();A=B;var G=!0;try{e:{b=!1,T&&(T=!1,F(U),U=-1),y=!0;var ee=v;try{t:{for(N(B),g=i(m);g!==null&&!(g.expirationTime>B&&w());){var ve=g.callback;if(typeof ve=="function"){g.callback=null,v=g.priorityLevel;var ge=ve(g.expirationTime<=B);if(B=s.unstable_now(),typeof ge=="function"){g.callback=ge,N(B),G=!0;break t}g===i(m)&&r(m),N(B)}else r(m);g=i(m)}if(g!==null)G=!0;else{var I=i(p);I!==null&&te(P,I.startTime-B),G=!1}}break e}finally{g=null,v=ee,y=!1}G=void 0}}finally{G?J():R=!1}}}var J;if(typeof L=="function")J=function(){L(H)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ie=j.port2;j.port1.onmessage=H,J=function(){ie.postMessage(null)}}else J=function(){x(H,0)};function te(B,G){U=x(function(){B(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var ee=v;v=G;try{return B()}finally{v=ee}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=v;v=B;try{return G()}finally{v=ee}},s.unstable_scheduleCallback=function(B,G,ee){var ve=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ve+ee:ve):ee=ve,B){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=ee+ge,B={id:_++,callback:G,priorityLevel:B,startTime:ee,expirationTime:ge,sortIndex:-1},ee>ve?(B.sortIndex=ee,t(p,B),i(m)===null&&B===i(p)&&(T?(F(U),U=-1):T=!0,te(P,ee-ve))):(B.sortIndex=ge,t(m,B),b||y||(b=!0,R||(R=!0,J()))),B},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(B){var G=v;return function(){var ee=v;v=G;try{return B.apply(this,arguments)}finally{v=ee}}}})(cd)),cd}var zg;function $S(){return zg||(zg=1,ld.exports=JS()),ld.exports}var ud={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function ey(){if(Hg)return Ln;Hg=1;var s=Vh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Ln.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.4",Ln}var Gg;function ty(){if(Gg)return ud.exports;Gg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ud.exports=ey(),ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function ny(){if(Vg)return Io;Vg=1;var s=$S(),t=Vh(),i=ty();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,C=u.child;C;){if(C===a){S=!0,a=u,o=f;break}if(C===o){S=!0,o=u,a=f;break}C=C.sibling}if(!S){for(C=f.child;C;){if(C===a){S=!0,a=f,o=u;break}if(C===o){S=!0,o=f,a=u;break}C=C.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var j=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case R:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case L:return e.displayName||"Context";case F:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:ie(e.type)||"Memo";case z:n=e._payload,e=e._init;try{return ie(e(n))}catch{}}return null}var te=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ve=[],ge=-1;function I(e){return{current:e}}function ne(e){0>ge||(e.current=ve[ge],ve[ge]=null,ge--)}function _e(e,n){ge++,ve[ge]=e.current,e.current=n}var de=I(null),be=I(null),Q=I(null),ae=I(null);function Ae(e,n){switch(_e(Q,n),_e(be,e),_e(de,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ig(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ig(n),e=ag(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ne(de),_e(de,e)}function He(){ne(de),ne(be),ne(Q)}function Ge(e){e.memoizedState!==null&&_e(ae,e);var n=de.current,a=ag(n,e.type);n!==a&&(_e(be,e),_e(de,a))}function ct(e){be.current===e&&(ne(de),ne(be)),ae.current===e&&(ne(ae),No._currentValue=ee)}var jt,pt;function mt(e){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+e+pt}var st=!1;function Ke(e,n){if(!e||st)return"";st=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(fe){var le=fe}Reflect.construct(e,[],Se)}else{try{Se.call()}catch(fe){le=fe}e.call(Se.prototype)}}else{try{throw Error()}catch(fe){le=fe}(Se=e())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(fe){if(fe&&le&&typeof fe.stack=="string")return[fe.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],C=f[1];if(S&&C){var V=S.split(`
`),se=C.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<se.length&&!se[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===se.length)for(o=V.length-1,u=se.length-1;1<=o&&0<=u&&V[o]!==se[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==se[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==se[u]){var me=`
`+V[o].replace(" at new "," at ");return e.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",e.displayName)),me}while(1<=o&&0<=u);break}}}finally{st=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?mt(a):""}function et(e,n){switch(e.tag){case 26:case 27:case 5:return mt(e.type);case 16:return mt("Lazy");case 13:return e.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return Ke(e.type,!1);case 11:return Ke(e.type.render,!1);case 1:return Ke(e.type,!0);case 31:return mt("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=et(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var St=Object.prototype.hasOwnProperty,Qe=s.unstable_scheduleCallback,ut=s.unstable_cancelCallback,Ve=s.unstable_shouldYield,O=s.unstable_requestPaint,E=s.unstable_now,W=s.unstable_getCurrentPriorityLevel,pe=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,he=s.unstable_NormalPriority,ke=s.unstable_LowPriority,Re=s.unstable_IdlePriority,We=s.log,nt=s.unstable_setDisableYieldValue,Ee=null,Ce=null;function Ie(e){if(typeof We=="function"&&nt(e),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Ee,e)}catch{}}var Pe=Math.clz32?Math.clz32:Y,we=Math.log,gt=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(we(e)/gt|0)|0}var Le=256,De=262144,ze=4194304;function Te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Me(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Te(o):(S&=C,S!==0?u=Te(S):a||(a=C&~e,a!==0&&(u=Te(a))))):(C=o&~f,C!==0?u=Te(C):S!==0?u=Te(S):a||(a=o&~e,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ue(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ot(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var e=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),e}function Rt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _i(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,V=e.expirationTimes,se=e.hiddenUpdates;for(a=S&~a;0<a;){var me=31-Pe(a),Se=1<<me;C[me]=0,V[me]=-1;var le=se[me];if(le!==null)for(se[me]=null,me=0;me<le.length;me++){var fe=le[me];fe!==null&&(fe.lane&=-536870913)}a&=~Se}o!==0&&ul(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function ul(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ks(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pe(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Pr(e,n){var a=n&-n;return a=(a&42)!==0?1:Xs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Xs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ws(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Rg(e.type))}function Di(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var ii=Math.random().toString(36).slice(2),sn="__reactFiber$"+ii,Sn="__reactProps$"+ii,vi="__reactContainer$"+ii,Ir="__reactEvents$"+ii,Br="__reactListeners$"+ii,fl="__reactHandles$"+ii,qs="__reactResources$"+ii,rr="__reactMarker$"+ii;function js(e){delete e[sn],delete e[Sn],delete e[Ir],delete e[Br],delete e[fl]}function Ea(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[vi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=fg(e);e!==null;){if(a=e[sn])return a;e=fg(e)}return n}e=a,a=e.parentNode}return null}function ba(e){if(e=e[sn]||e[vi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function sr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ta(e){var n=e[qs];return n||(n=e[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function D(e){e[rr]=!0}var Z=new Set,ue={};function oe(e,n){$(e,n),$(e+"Capture",n)}function $(e,n){for(ue[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xe={},Oe={};function qe(e){return St.call(Oe,e)?!0:St.call(Xe,e)?!1:Ne.test(e)?Oe[e]=!0:(Xe[e]=!0,!1)}function Ye(e,n,a){if(qe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function it(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ze(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function at(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Yt(e){if(!e._valueTracker){var n=Lt(e)?"checked":"value";e._valueTracker=Qt(e,n,""+e[n])}}function Ft(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Lt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function $e(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ot=/[\n"\\]/g;function lt(e){return e.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(e,n,a,o,u,f,S,C){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+at(n)):e.value!==""+at(n)&&(e.value=""+at(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,S,at(n)):a!=null?Mn(e,S,at(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+at(C):e.removeAttribute("name")}function Xi(e,n,a,o,u,f,S,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Yt(e);return}a=a!=null?""+at(a):"",n=n!=null?""+at(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Yt(e)}function Mn(e,n,a){n==="number"&&$e(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ai(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+at(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Bt(e,n,a){if(n!=null&&(n=""+at(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+at(a):""}function En(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(te(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=at(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Yt(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function zr(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Tn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Tn(e,f,n[f])}function xi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return Wv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var tu=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hr=null,Gr=null;function np(e){var n=ba(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;e:switch(e=n.stateNode,n.type){case"input":if(yn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+lt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Sn]||null;if(!u)throw Error(r(90));yn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ft(o)}break e;case"textarea":Bt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ai(e,!!a.multiple,n,!1)}}}var iu=!1;function ip(e,n,a){if(iu)return e(n,a);iu=!0;try{var o=e(n);return o}finally{if(iu=!1,(Hr!==null||Gr!==null)&&($l(),Hr&&(n=Hr,e=Gr,Gr=Hr=null,np(n),e)))for(n=0;n<e.length;n++)np(e[n])}}function Ys(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(qi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){au=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{au=!1}var Aa=null,ru=null,hl=null;function ap(){if(hl)return hl;var e,n=ru,a=n.length,o,u="value"in Aa?Aa.value:Aa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return hl=u.slice(e,1<o?1-o:void 0)}function pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function rp(){return!1}function Bn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ml:rp,this.isPropagationStopped=rp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Bn(or),Ks=g({},or,{view:0,detail:0}),qv=Bn(Ks),su,ou,Qs,_l=g({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qs&&(Qs&&e.type==="mousemove"?(su=e.screenX-Qs.screenX,ou=e.screenY-Qs.screenY):ou=su=0,Qs=e),su)},movementY:function(e){return"movementY"in e?e.movementY:ou}}),sp=Bn(_l),jv=g({},_l,{dataTransfer:0}),Yv=Bn(jv),Zv=g({},Ks,{relatedTarget:0}),lu=Bn(Zv),Kv=g({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=Bn(Kv),Jv=g({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$v=Bn(Jv),ex=g({},or,{data:0}),op=Bn(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ix[e])?!!n[e]:!1}function cu(){return ax}var rx=g({},Ks,{key:function(e){if(e.key){var n=tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sx=Bn(rx),ox=g({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=Bn(ox),lx=g({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),cx=Bn(lx),ux=g({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=Bn(ux),dx=g({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Bn(dx),px=g({},or,{newState:0,oldState:0}),mx=Bn(px),gx=[9,13,27,32],uu=qi&&"CompositionEvent"in window,Js=null;qi&&"documentMode"in document&&(Js=document.documentMode);var _x=qi&&"TextEvent"in window&&!Js,cp=qi&&(!uu||Js&&8<Js&&11>=Js),up=" ",fp=!1;function dp(e,n){switch(e){case"keyup":return gx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function vx(e,n){switch(e){case"compositionend":return hp(n);case"keypress":return n.which!==32?null:(fp=!0,up);case"textInput":return e=n.data,e===up&&fp?null:e;default:return null}}function xx(e,n){if(Vr)return e==="compositionend"||!uu&&dp(e,n)?(e=ap(),hl=ru=Aa=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cp&&n.locale!=="ko"?null:n.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sx[e.type]:n==="textarea"}function mp(e,n,a,o){Hr?Gr?Gr.push(o):Gr=[o]:Hr=o,n=sc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var $s=null,eo=null;function yx(e){Q0(e,0)}function vl(e){var n=sr(e);if(Ft(n))return e}function gp(e,n){if(e==="change")return n}var _p=!1;if(qi){var fu;if(qi){var du="oninput"in document;if(!du){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),du=typeof vp.oninput=="function"}fu=du}else fu=!1;_p=fu&&(!document.documentMode||9<document.documentMode)}function xp(){$s&&($s.detachEvent("onpropertychange",Sp),eo=$s=null)}function Sp(e){if(e.propertyName==="value"&&vl(eo)){var n=[];mp(n,eo,e,nu(e)),ip(yx,n)}}function Mx(e,n,a){e==="focusin"?(xp(),$s=n,eo=a,$s.attachEvent("onpropertychange",Sp)):e==="focusout"&&xp()}function Ex(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(eo)}function bx(e,n){if(e==="click")return vl(n)}function Tx(e,n){if(e==="input"||e==="change")return vl(n)}function Ax(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Ax;function to(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!St.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mp(e,n){var a=yp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yp(a)}}function Ep(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ep(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$e(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$e(e.document)}return n}function hu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Rx=qi&&"documentMode"in document&&11>=document.documentMode,kr=null,pu=null,no=null,mu=!1;function Tp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mu||kr==null||kr!==$e(o)||(o=kr,"selectionStart"in o&&hu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),no&&to(no,o)||(no=o,o=sc(pu,"onSelect"),0<o.length&&(n=new gl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=kr)))}function lr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Xr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},gu={},Ap={};qi&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function cr(e){if(gu[e])return gu[e];if(!Xr[e])return e;var n=Xr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ap)return gu[e]=n[a];return e}var Rp=cr("animationend"),Cp=cr("animationiteration"),wp=cr("animationstart"),Cx=cr("transitionrun"),wx=cr("transitionstart"),Dx=cr("transitioncancel"),Dp=cr("transitionend"),Up=new Map,_u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_u.push("scrollEnd");function Si(e,n){Up.set(e,n),oe(n,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],Wr=0,vu=0;function Sl(){for(var e=Wr,n=vu=Wr=0;n<e;){var a=ri[n];ri[n++]=null;var o=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&Np(a,u,f)}}function yl(e,n,a,o){ri[Wr++]=e,ri[Wr++]=n,ri[Wr++]=a,ri[Wr++]=o,vu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function xu(e,n,a,o){return yl(e,n,a,o),Ml(e)}function ur(e,n){return yl(e,null,null,n),Ml(e)}function Np(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pe(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Ml(e){if(50<To)throw To=0,wf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qr={};function Ux(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,o){return new Ux(e,n,a,o)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function El(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")Su(e)&&(S=1);else if(typeof e=="string")S=FS(e,a,de.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case A:return e=jn(31,a,n,u),e.elementType=A,e.lanes=f,e;case T:return fr(a.children,u,f,n);case M:S=8,u|=24;break;case x:return e=jn(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case P:return e=jn(13,a,n,u),e.elementType=P,e.lanes=f,e;case R:return e=jn(19,a,n,u),e.elementType=R,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:S=10;break e;case F:S=9;break e;case N:S=11;break e;case U:S=14;break e;case z:S=16,o=null;break e}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=jn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function fr(e,n,a,o){return e=jn(7,e,o,n),e.lanes=a,e}function yu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function Op(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function Mu(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Pp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Pp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},Pp.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var jr=[],Yr=0,bl=null,io=0,oi=[],li=0,Ra=null,Ui=1,Ni="";function Yi(e,n){jr[Yr++]=io,jr[Yr++]=bl,bl=e,io=n}function Fp(e,n,a){oi[li++]=Ui,oi[li++]=Ni,oi[li++]=Ra,Ra=e;var o=Ui;e=Ni;var u=32-Pe(o)-1;o&=~(1<<u),a+=1;var f=32-Pe(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ui=1<<32-Pe(n)+u|a<<u|o,Ni=f+e}else Ui=1<<f|a<<u|o,Ni=e}function Eu(e){e.return!==null&&(Yi(e,1),Fp(e,1,0))}function bu(e){for(;e===bl;)bl=jr[--Yr],jr[Yr]=null,io=jr[--Yr],jr[Yr]=null;for(;e===Ra;)Ra=oi[--li],oi[li]=null,Ni=oi[--li],oi[li]=null,Ui=oi[--li],oi[li]=null}function Ip(e,n){oi[li++]=Ui,oi[li++]=Ni,oi[li++]=Ra,Ui=n.id,Ni=n.overflow,Ra=e}var An=null,Zt=null,Tt=!1,Ca=null,ci=!1,Tu=Error(r(519));function wa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ao(si(n,e)),Tu}function Bp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[Sn]=o,a){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)Mt(Ro[a],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),Xi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||tg(n.textContent,a)?(o.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),o.onScroll!=null&&Mt("scroll",n),o.onScrollEnd!=null&&Mt("scrollend",n),o.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||wa(e,!0)}function zp(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:An=An.return}}function Zr(e){if(e!==An)return!1;if(!Tt)return zp(e),Tt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xf(e.type,e.memoizedProps)),a=!a),a&&Zt&&wa(e),zp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=ug(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Zt=ug(e)}else n===27?(n=Zt,ka(e.type)?(e=Zf,Zf=null,Zt=e):Zt=n):Zt=An?fi(e.stateNode.nextSibling):null;return!0}function dr(){Zt=An=null,Tt=!1}function Au(){var e=Ca;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Ca=null),e}function ao(e){Ca===null?Ca=[e]:Ca.push(e)}var Ru=I(null),hr=null,Zi=null;function Da(e,n,a){_e(Ru,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=Ru.current,ne(Ru)}function Cu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function wu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var V=0;V<n.length;V++)if(C.context===n[V]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Cu(f.return,a,e),o||(S=null);break e}f=C.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Cu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Kr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var C=u.type;qn(u.pendingProps.value,S.value)||(e!==null?e.push(C):e=[C])}}else if(u===ae.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(No):e=[No])}u=u.return}e!==null&&wu(n,e,a,o),n.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pr(e){hr=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Hp(hr,e)}function Al(e,n){return hr===null&&pr(e),Hp(e,n)}function Hp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(r(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var Nx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Lx=s.unstable_scheduleCallback,Ox=s.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new Nx,data:new Map,refCount:0}}function ro(e){e.refCount--,e.refCount===0&&Lx(Ox,function(){e.controller.abort()})}var so=null,Uu=0,Qr=0,Jr=null;function Px(e,n){if(so===null){var a=so=[];Uu=0,Qr=Pf(),Jr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uu++,n.then(Gp,Gp),n}function Gp(){if(--Uu===0&&so!==null){Jr!==null&&(Jr.status="fulfilled");var e=so;so=null,Qr=0,Jr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Fx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Vp=B.S;B.S=function(e,n){T0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Px(e,n),Vp!==null&&Vp(e,n)};var mr=I(null);function Nu(){var e=mr.current;return e!==null?e:qt.pooledCache}function Rl(e,n){n===null?_e(mr,mr.current):_e(mr,n.pool)}function kp(){var e=Nu();return e===null?null:{parent:on._currentValue,pool:e}}var $r=Error(r(460)),Lu=Error(r(474)),Cl=Error(r(542)),wl={then:function(){}};function Xp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=qt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e}throw _r=n,$r}}function gr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_r=a,$r):a}}var _r=null;function qp(){if(_r===null)throw Error(r(459));var e=_r;return _r=null,e}function jp(e){if(e===$r||e===Cl)throw Error(r(483))}var es=null,oo=0;function Dl(e){var n=oo;return oo+=1,es===null&&(es=[]),Wp(es,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Yp(e){function n(K,X){if(e){var re=K.deletions;re===null?(K.deletions=[X],K.flags|=16):re.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=ji(K,X),K.index=0,K.sibling=null,K}function f(K,X,re){return K.index=re,e?(re=K.alternate,re!==null?(re=re.index,re<X?(K.flags|=67108866,X):re):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function C(K,X,re,xe){return X===null||X.tag!==6?(X=yu(re,K.mode,xe),X.return=K,X):(X=u(X,re),X.return=K,X)}function V(K,X,re,xe){var tt=re.type;return tt===T?me(K,X,re.props.children,xe,re.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===z&&gr(tt)===X.type)?(X=u(X,re.props),lo(X,re),X.return=K,X):(X=El(re.type,re.key,re.props,null,K.mode,xe),lo(X,re),X.return=K,X)}function se(K,X,re,xe){return X===null||X.tag!==4||X.stateNode.containerInfo!==re.containerInfo||X.stateNode.implementation!==re.implementation?(X=Mu(re,K.mode,xe),X.return=K,X):(X=u(X,re.children||[]),X.return=K,X)}function me(K,X,re,xe,tt){return X===null||X.tag!==7?(X=fr(re,K.mode,xe,tt),X.return=K,X):(X=u(X,re),X.return=K,X)}function Se(K,X,re){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=yu(""+X,K.mode,re),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return re=El(X.type,X.key,X.props,null,K.mode,re),lo(re,X),re.return=K,re;case b:return X=Mu(X,K.mode,re),X.return=K,X;case z:return X=gr(X),Se(K,X,re)}if(te(X)||J(X))return X=fr(X,K.mode,re,null),X.return=K,X;if(typeof X.then=="function")return Se(K,Dl(X),re);if(X.$$typeof===L)return Se(K,Al(K,X),re);Ul(K,X)}return null}function le(K,X,re,xe){var tt=X!==null?X.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return tt!==null?null:C(K,X,""+re,xe);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case y:return re.key===tt?V(K,X,re,xe):null;case b:return re.key===tt?se(K,X,re,xe):null;case z:return re=gr(re),le(K,X,re,xe)}if(te(re)||J(re))return tt!==null?null:me(K,X,re,xe,null);if(typeof re.then=="function")return le(K,X,Dl(re),xe);if(re.$$typeof===L)return le(K,X,Al(K,re),xe);Ul(K,re)}return null}function fe(K,X,re,xe,tt){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return K=K.get(re)||null,C(X,K,""+xe,tt);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case y:return K=K.get(xe.key===null?re:xe.key)||null,V(X,K,xe,tt);case b:return K=K.get(xe.key===null?re:xe.key)||null,se(X,K,xe,tt);case z:return xe=gr(xe),fe(K,X,re,xe,tt)}if(te(xe)||J(xe))return K=K.get(re)||null,me(X,K,xe,tt,null);if(typeof xe.then=="function")return fe(K,X,re,Dl(xe),tt);if(xe.$$typeof===L)return fe(K,X,re,Al(X,xe),tt);Ul(X,xe)}return null}function je(K,X,re,xe){for(var tt=null,wt=null,Je=X,_t=X=0,bt=null;Je!==null&&_t<re.length;_t++){Je.index>_t?(bt=Je,Je=null):bt=Je.sibling;var Dt=le(K,Je,re[_t],xe);if(Dt===null){Je===null&&(Je=bt);break}e&&Je&&Dt.alternate===null&&n(K,Je),X=f(Dt,X,_t),wt===null?tt=Dt:wt.sibling=Dt,wt=Dt,Je=bt}if(_t===re.length)return a(K,Je),Tt&&Yi(K,_t),tt;if(Je===null){for(;_t<re.length;_t++)Je=Se(K,re[_t],xe),Je!==null&&(X=f(Je,X,_t),wt===null?tt=Je:wt.sibling=Je,wt=Je);return Tt&&Yi(K,_t),tt}for(Je=o(Je);_t<re.length;_t++)bt=fe(Je,K,_t,re[_t],xe),bt!==null&&(e&&bt.alternate!==null&&Je.delete(bt.key===null?_t:bt.key),X=f(bt,X,_t),wt===null?tt=bt:wt.sibling=bt,wt=bt);return e&&Je.forEach(function(Ya){return n(K,Ya)}),Tt&&Yi(K,_t),tt}function rt(K,X,re,xe){if(re==null)throw Error(r(151));for(var tt=null,wt=null,Je=X,_t=X=0,bt=null,Dt=re.next();Je!==null&&!Dt.done;_t++,Dt=re.next()){Je.index>_t?(bt=Je,Je=null):bt=Je.sibling;var Ya=le(K,Je,Dt.value,xe);if(Ya===null){Je===null&&(Je=bt);break}e&&Je&&Ya.alternate===null&&n(K,Je),X=f(Ya,X,_t),wt===null?tt=Ya:wt.sibling=Ya,wt=Ya,Je=bt}if(Dt.done)return a(K,Je),Tt&&Yi(K,_t),tt;if(Je===null){for(;!Dt.done;_t++,Dt=re.next())Dt=Se(K,Dt.value,xe),Dt!==null&&(X=f(Dt,X,_t),wt===null?tt=Dt:wt.sibling=Dt,wt=Dt);return Tt&&Yi(K,_t),tt}for(Je=o(Je);!Dt.done;_t++,Dt=re.next())Dt=fe(Je,K,_t,Dt.value,xe),Dt!==null&&(e&&Dt.alternate!==null&&Je.delete(Dt.key===null?_t:Dt.key),X=f(Dt,X,_t),wt===null?tt=Dt:wt.sibling=Dt,wt=Dt);return e&&Je.forEach(function(jS){return n(K,jS)}),Tt&&Yi(K,_t),tt}function Xt(K,X,re,xe){if(typeof re=="object"&&re!==null&&re.type===T&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case y:e:{for(var tt=re.key;X!==null;){if(X.key===tt){if(tt=re.type,tt===T){if(X.tag===7){a(K,X.sibling),xe=u(X,re.props.children),xe.return=K,K=xe;break e}}else if(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===z&&gr(tt)===X.type){a(K,X.sibling),xe=u(X,re.props),lo(xe,re),xe.return=K,K=xe;break e}a(K,X);break}else n(K,X);X=X.sibling}re.type===T?(xe=fr(re.props.children,K.mode,xe,re.key),xe.return=K,K=xe):(xe=El(re.type,re.key,re.props,null,K.mode,xe),lo(xe,re),xe.return=K,K=xe)}return S(K);case b:e:{for(tt=re.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===re.containerInfo&&X.stateNode.implementation===re.implementation){a(K,X.sibling),xe=u(X,re.children||[]),xe.return=K,K=xe;break e}else{a(K,X);break}else n(K,X);X=X.sibling}xe=Mu(re,K.mode,xe),xe.return=K,K=xe}return S(K);case z:return re=gr(re),Xt(K,X,re,xe)}if(te(re))return je(K,X,re,xe);if(J(re)){if(tt=J(re),typeof tt!="function")throw Error(r(150));return re=tt.call(re),rt(K,X,re,xe)}if(typeof re.then=="function")return Xt(K,X,Dl(re),xe);if(re.$$typeof===L)return Xt(K,X,Al(K,re),xe);Ul(K,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,X!==null&&X.tag===6?(a(K,X.sibling),xe=u(X,re),xe.return=K,K=xe):(a(K,X),xe=yu(re,K.mode,xe),xe.return=K,K=xe),S(K)):a(K,X)}return function(K,X,re,xe){try{oo=0;var tt=Xt(K,X,re,xe);return es=null,tt}catch(Je){if(Je===$r||Je===Cl)throw Je;var wt=jn(29,Je,null,K.mode);return wt.lanes=xe,wt.return=K,wt}finally{}}}var vr=Yp(!0),Zp=Yp(!1),Ua=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ml(e),Np(e,null,a),n}return yl(e,o,n,a),Ml(e)}function co(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ks(e,a)}}function Fu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Iu=!1;function uo(){if(Iu){var e=Jr;if(e!==null)throw e}}function fo(e,n,a,o){Iu=!1;var u=e.updateQueue;Ua=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var V=C,se=V.next;V.next=null,S===null?f=se:S.next=se,S=V;var me=e.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==S&&(C===null?me.firstBaseUpdate=se:C.next=se,me.lastBaseUpdate=V))}if(f!==null){var Se=u.baseState;S=0,me=se=V=null,C=f;do{var le=C.lane&-536870913,fe=le!==C.lane;if(fe?(Et&le)===le:(o&le)===le){le!==0&&le===Qr&&(Iu=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var je=e,rt=C;le=n;var Xt=a;switch(rt.tag){case 1:if(je=rt.payload,typeof je=="function"){Se=je.call(Xt,Se,le);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=rt.payload,le=typeof je=="function"?je.call(Xt,Se,le):je,le==null)break e;Se=g({},Se,le);break e;case 2:Ua=!0}}le=C.callback,le!==null&&(e.flags|=64,fe&&(e.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[le]:fe.push(le))}else fe={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(se=me=fe,V=Se):me=me.next=fe,S|=le;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;fe=C,C=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);me===null&&(V=Se),u.baseState=V,u.firstBaseUpdate=se,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Ba|=S,e.lanes=S,e.memoizedState=Se}}function Kp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Qp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Kp(a[e],n)}var ts=I(null),Nl=I(0);function Jp(e,n){e=ra,_e(Nl,e),_e(ts,n),ra=e|n.baseLanes}function Bu(){_e(Nl,ra),_e(ts,ts.current)}function zu(){ra=Nl.current,ne(ts),ne(Nl)}var Yn=I(null),ui=null;function Oa(e){var n=e.alternate;_e(tn,tn.current&1),_e(Yn,e),ui===null&&(n===null||ts.current!==null||n.memoizedState!==null)&&(ui=e)}function Hu(e){_e(tn,tn.current),_e(Yn,e),ui===null&&(ui=e)}function $p(e){e.tag===22?(_e(tn,tn.current),_e(Yn,e),ui===null&&(ui=e)):Pa()}function Pa(){_e(tn,tn.current),_e(Yn,Yn.current)}function Zn(e){ne(Yn),ui===e&&(ui=null),ne(tn)}var tn=I(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jf(a)||Yf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,ht=null,Vt=null,ln=null,Ol=!1,ns=!1,xr=!1,Pl=0,ho=0,is=null,Ix=0;function $t(){throw Error(r(321))}function Gu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function Vu(e,n,a,o,u,f){return Qi=f,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Fm:af,xr=!1,f=a(o,u),xr=!1,ns&&(f=tm(n,a,o,u)),em(e),f}function em(e){B.H=go;var n=Vt!==null&&Vt.next!==null;if(Qi=0,ln=Vt=ht=null,Ol=!1,ho=0,is=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&Tl(e)&&(cn=!0))}function tm(e,n,a,o){ht=e;var u=0;do{if(ns&&(is=null),ho=0,ns=!1,25<=u)throw Error(r(301));if(u+=1,ln=Vt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Im,f=n(a,o)}while(ns);return f}function Bx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?po(n):n,e=e.useState()[0],(Vt!==null?Vt.memoizedState:null)!==e&&(ht.flags|=1024),n}function ku(){var e=Pl!==0;return Pl=0,e}function Xu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Wu(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}Qi=0,ln=Vt=ht=null,ns=!1,ho=Pl=0,is=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ht.memoizedState=ln=e:ln=ln.next=e,ln}function nn(){if(Vt===null){var e=ht.alternate;e=e!==null?e.memoizedState:null}else e=Vt.next;var n=ln===null?ht.memoizedState:ln.next;if(n!==null)ln=n,Vt=e;else{if(e===null)throw ht.alternate===null?Error(r(467)):Error(r(310));Vt=e,e={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},ln===null?ht.memoizedState=ln=e:ln=ln.next=e}return ln}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function po(e){var n=ho;return ho+=1,is===null&&(is=[]),e=Wp(is,e,n),n=ht,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Fm:af),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return po(e);if(e.$$typeof===L)return Rn(e)}throw Error(r(438,String(e)))}function qu(e){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Ji(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=nn();return ju(n,Vt,e)}function ju(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=S=null,V=null,se=n,me=!1;do{var Se=se.lane&-536870913;if(Se!==se.lane?(Et&Se)===Se:(Qi&Se)===Se){var le=se.revertLane;if(le===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),Se===Qr&&(me=!0);else if((Qi&le)===le){se=se.next,le===Qr&&(me=!0);continue}else Se={lane:0,revertLane:se.revertLane,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(C=V=Se,S=f):V=V.next=Se,ht.lanes|=le,Ba|=le;Se=se.action,xr&&a(f,Se),f=se.hasEagerState?se.eagerState:a(f,Se)}else le={lane:Se,revertLane:se.revertLane,gesture:se.gesture,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(C=V=le,S=f):V=V.next=le,ht.lanes|=Se,Ba|=Se;se=se.next}while(se!==null&&se!==n);if(V===null?S=f:V.next=C,!qn(f,e.memoizedState)&&(cn=!0,me&&(a=Jr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Yu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);qn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function nm(e,n,a){var o=ht,u=nn(),f=Tt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!qn((Vt||u).memoizedState,a);if(S&&(u.memoizedState=a,cn=!0),u=u.queue,Qu(rm.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,as(9,{destroy:void 0},am.bind(null,o,u,a,n),null),qt===null)throw Error(r(349));f||(Qi&127)!==0||im(o,n,a)}return a}function im(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=Fl(),ht.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function am(e,n,a,o){n.value=a,n.getSnapshot=o,sm(n)&&om(e)}function rm(e,n,a){return a(function(){sm(n)&&om(e)})}function sm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function om(e){var n=ur(e,2);n!==null&&kn(n,e,2)}function Zu(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),xr){Ie(!0);try{a()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},n}function lm(e,n,a,o){return e.baseState=a,ju(e,Vt,typeof o=="function"?o:Ji)}function zx(e,n,a,o,u){if(Gl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,cm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function cm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var C=a(u,o),V=B.S;V!==null&&V(S,C),um(e,n,C)}catch(se){Ku(e,n,se)}finally{f!==null&&S.types!==null&&(f.types=S.types),B.T=f}}else try{f=a(u,o),um(e,n,f)}catch(se){Ku(e,n,se)}}function um(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){fm(e,n,o)},function(o){return Ku(e,n,o)}):fm(e,n,a)}function fm(e,n,a){n.status="fulfilled",n.value=a,dm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,cm(e,a)))}function Ku(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,dm(n),n=n.next;while(n!==o)}e.action=null}function dm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hm(e,n){return n}function pm(e,n){if(Tt){var a=qt.formState;if(a!==null){e:{var o=ht;if(Tt){if(Zt){t:{for(var u=Zt,f=ci;u.nodeType!==8;){if(!f){u=null;break t}if(u=fi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Zt=fi(u.nextSibling),o=u.data==="F!";break e}}wa(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hm,lastRenderedState:n},a.queue=o,a=Lm.bind(null,ht,o),o.dispatch=a,o=Zu(!1),f=nf.bind(null,ht,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=zx.bind(null,ht,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function mm(e){var n=nn();return gm(n,Vt,e)}function gm(e,n,a){if(n=ju(e,n,hm)[0],e=Bl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=po(n)}catch(S){throw S===$r?Cl:S}else o=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,as(9,{destroy:void 0},Hx.bind(null,u,a),null)),[o,f,e]}function Hx(e,n){e.action=n}function _m(e){var n=nn(),a=Vt;if(a!==null)return gm(n,a,e);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function as(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=Fl(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function vm(){return nn().memoizedState}function zl(e,n,a,o){var u=Fn();ht.flags|=e,u.memoizedState=as(1|n,{destroy:void 0},a,o===void 0?null:o)}function Hl(e,n,a,o){var u=nn();o=o===void 0?null:o;var f=u.memoizedState.inst;Vt!==null&&o!==null&&Gu(o,Vt.memoizedState.deps)?u.memoizedState=as(n,f,a,o):(ht.flags|=e,u.memoizedState=as(1|n,f,a,o))}function xm(e,n){zl(8390656,8,e,n)}function Qu(e,n){Hl(2048,8,e,n)}function Gx(e){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=Fl(),ht.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Sm(e){var n=nn().memoizedState;return Gx({ref:n,nextImpl:e}),function(){if((Pt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ym(e,n){return Hl(4,2,e,n)}function Mm(e,n){return Hl(4,4,e,n)}function Em(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bm(e,n,a){a=a!=null?a.concat([e]):null,Hl(4,4,Em.bind(null,n,e),a)}function Ju(){}function Tm(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Gu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Am(e,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Gu(n,o[1]))return o[0];if(o=e(),xr){Ie(!0);try{e()}finally{Ie(!1)}}return a.memoizedState=[o,n],o}function $u(e,n,a){return a===void 0||(Qi&1073741824)!==0&&(Et&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=R0(),ht.lanes|=e,Ba|=e,a)}function Rm(e,n,a,o){return qn(a,n)?a:ts.current!==null?(e=$u(e,a,o),qn(e,n)||(cn=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(Et&261930)===0?(cn=!0,e.memoizedState=a):(e=R0(),ht.lanes|=e,Ba|=e,n)}function Cm(e,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var S=B.T,C={};B.T=C,nf(e,!1,n,a);try{var V=u(),se=B.S;if(se!==null&&se(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var me=Fx(V,o);mo(e,n,me,Jn(e))}else mo(e,n,o,Jn(e))}catch(Se){mo(e,n,{then:function(){},status:"rejected",reason:Se},Jn())}finally{G.p=f,S!==null&&C.types!==null&&(S.types=C.types),B.T=S}}function Vx(){}function ef(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=wm(e).queue;Cm(e,u,n,ee,a===null?Vx:function(){return Dm(e),a(o)})}function wm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Dm(e){var n=wm(e);n.next===null&&(n=e.alternate.memoizedState),mo(e,n.next.queue,{},Jn())}function tf(){return Rn(No)}function Um(){return nn().memoizedState}function Nm(){return nn().memoizedState}function kx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=Na(a);var o=La(n,e,a);o!==null&&(kn(o,n,a),co(o,n,a)),n={cache:Du()},e.payload=n;return}n=n.return}}function Xx(e,n,a){var o=Jn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?Om(n,a):(a=xu(e,n,a,o),a!==null&&(kn(a,e,o),Pm(a,n,o)))}function Lm(e,n,a){var o=Jn();mo(e,n,a,o)}function mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))Om(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,C=f(S,a);if(u.hasEagerState=!0,u.eagerState=C,qn(C,S))return yl(e,n,u,0),qt===null&&Sl(),!1}catch{}finally{}if(a=xu(e,n,u,o),a!==null)return kn(a,e,o),Pm(a,n,o),!0}return!1}function nf(e,n,a,o){if(o={lane:2,revertLane:Pf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(r(479))}else n=xu(e,a,o,2),n!==null&&kn(n,e,2)}function Gl(e){var n=e.alternate;return e===ht||n!==null&&n===ht}function Om(e,n){ns=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Pm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ks(e,a)}}var go={readContext:Rn,use:Il,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};go.useEffectEvent=$t;var Fm={readContext:Rn,use:Il,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:xm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,zl(4194308,4,Em.bind(null,n,e),a)},useLayoutEffect:function(e,n){return zl(4194308,4,e,n)},useInsertionEffect:function(e,n){zl(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(xr){Ie(!0);try{e()}finally{Ie(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(xr){Ie(!0);try{a(n)}finally{Ie(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Xx.bind(null,ht,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=Zu(e);var n=e.queue,a=Lm.bind(null,ht,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ju,useDeferredValue:function(e,n){var a=Fn();return $u(a,e,n)},useTransition:function(){var e=Zu(!1);return e=Cm.bind(null,ht,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ht,u=Fn();if(Tt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qt===null)throw Error(r(349));(Et&127)!==0||im(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,xm(rm.bind(null,o,f,e),[e]),o.flags|=2048,as(9,{destroy:void 0},am.bind(null,o,f,a,n),null),a},useId:function(){var e=Fn(),n=qt.identifierPrefix;if(Tt){var a=Ni,o=Ui;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ix++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:tf,useFormState:pm,useActionState:pm,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nf.bind(null,ht,!0,a),a.dispatch=n,[e,n]},useMemoCache:qu,useCacheRefresh:function(){return Fn().memoizedState=kx.bind(null,ht)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((Pt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},af={readContext:Rn,use:Il,useCallback:Tm,useContext:Rn,useEffect:Qu,useImperativeHandle:bm,useInsertionEffect:ym,useLayoutEffect:Mm,useMemo:Am,useReducer:Bl,useRef:vm,useState:function(){return Bl(Ji)},useDebugValue:Ju,useDeferredValue:function(e,n){var a=nn();return Rm(a,Vt.memoizedState,e,n)},useTransition:function(){var e=Bl(Ji)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:tf,useFormState:mm,useActionState:mm,useOptimistic:function(e,n){var a=nn();return lm(a,Vt,e,n)},useMemoCache:qu,useCacheRefresh:Nm};af.useEffectEvent=Sm;var Im={readContext:Rn,use:Il,useCallback:Tm,useContext:Rn,useEffect:Qu,useImperativeHandle:bm,useInsertionEffect:ym,useLayoutEffect:Mm,useMemo:Am,useReducer:Yu,useRef:vm,useState:function(){return Yu(Ji)},useDebugValue:Ju,useDeferredValue:function(e,n){var a=nn();return Vt===null?$u(a,e,n):Rm(a,Vt.memoizedState,e,n)},useTransition:function(){var e=Yu(Ji)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:po(e),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:tf,useFormState:_m,useActionState:_m,useOptimistic:function(e,n){var a=nn();return Vt!==null?lm(a,Vt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qu,useCacheRefresh:Nm};Im.useEffectEvent=Sm;function rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=Na(o);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(kn(n,e,o),co(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Jn(),u=Na(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,o),n!==null&&(kn(n,e,o),co(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),o=Na(a);o.tag=2,n!=null&&(o.callback=n),n=La(e,o,a),n!==null&&(kn(n,e,a),co(n,e,a))}};function Bm(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!to(a,o)||!to(u,f):!0}function zm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&sf.enqueueReplaceState(n,n.state,null)}function Sr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Hm(e){xl(e)}function Gm(e){console.error(e)}function Vm(e){xl(e)}function Vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function km(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function of(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,n)},a}function Xm(e){return e=Na(e),e.tag=3,e}function Wm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){km(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){km(n,a,o),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function Wx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Kr(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?ec():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Nf(e,o,u)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Nf(e,o,u)),!1}throw Error(r(435,a.tag))}return Nf(e,o,u),ec(),!1}if(Tt)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Tu&&(e=Error(r(422),{cause:o}),ao(si(e,a)))):(o!==Tu&&(n=Error(r(423),{cause:o}),ao(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=si(o,a),u=of(e.stateNode,o,u),Fu(e,u),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:o});if(f=si(f,a),bo===null?bo=[f]:bo.push(f),en!==4&&(en=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=of(a.stateNode,o,e),Fu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Xm(u),Wm(u,e,a,o),Fu(a,u),!1}a=a.return}while(a!==null);return!1}var lf=Error(r(461)),cn=!1;function Cn(e,n,a,o){n.child=e===null?Zp(n,null,a,o):vr(n,e.child,a,o)}function qm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var C in o)C!=="ref"&&(S[C]=o[C])}else S=o;return pr(n),o=Vu(e,n,a,S,f,u),C=ku(),e!==null&&!cn?(Xu(e,n,u),$i(e,n,u)):(Tt&&C&&Eu(n),n.flags|=1,Cn(e,n,o,u),n.child)}function jm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ym(e,n,f,o,u)):(e=El(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!gf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(S,o)&&e.ref===n.ref)return $i(e,n,u)}return n.flags|=1,e=ji(f,o),e.ref=n.ref,e.return=n,n.child=e}function Ym(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(to(f,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=f,gf(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,$i(e,n,u)}return cf(e,n,a,o,u)}function Zm(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Km(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(n,f!==null?f.cachePool:null),f!==null?Jp(n,f):Bu(),$p(n);else return o=n.lanes=536870912,Km(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Rl(n,f.cachePool),Jp(n,f),Pa(),n.memoizedState=null):(e!==null&&Rl(n,null),Bu(),Pa());return Cn(e,n,u,a),n.child}function _o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Km(e,n,a,o,u){var f=Nu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Rl(n,null),Bu(),$p(n),e!==null&&Kr(e,n,o,!0),n.childLanes=u,null}function kl(e,n){return n=Wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Qm(e,n,a){return vr(n,e.child,null,a),e=kl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function qx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Tt){if(o.mode==="hidden")return e=kl(n,o),n.lanes=536870912,_o(null,e);if(Hu(n),(e=Zt)?(e=cg(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Op(e),a.return=n,n.child=a,An=n,Zt=null)):e=null,e===null)throw wa(n);return n.lanes=536870912,null}return kl(n,o)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(Hu(n),u)if(n.flags&256)n.flags&=-257,n=Qm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Kr(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(o=qt,o!==null&&(S=Pr(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,ur(e,S),kn(o,e,S),lf;ec(),n=Qm(e,n,a)}else e=f.treeContext,Zt=fi(S.nextSibling),An=n,Tt=!0,Ca=null,ci=!1,e!==null&&Ip(n,e),n=kl(n,o),n.flags|=4096;return n}return e=ji(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function cf(e,n,a,o,u){return pr(n),a=Vu(e,n,a,o,void 0,u),o=ku(),e!==null&&!cn?(Xu(e,n,u),$i(e,n,u)):(Tt&&o&&Eu(n),n.flags|=1,Cn(e,n,a,u),n.child)}function Jm(e,n,a,o,u,f){return pr(n),n.updateQueue=null,a=tm(n,o,a,u),em(e),o=ku(),e!==null&&!cn?(Xu(e,n,f),$i(e,n,f)):(Tt&&o&&Eu(n),n.flags|=1,Cn(e,n,a,f),n.child)}function $m(e,n,a,o,u){if(pr(n),n.stateNode===null){var f=qr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Rn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=sf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ou(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Rn(S):qr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(rf(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&sf.enqueueReplaceState(f,f.state,null),fo(n,o,f,u),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,V=Sr(a,C);f.props=V;var se=f.context,me=a.contextType;S=qr,typeof me=="object"&&me!==null&&(S=Rn(me));var Se=a.getDerivedStateFromProps;me=typeof Se=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||se!==S)&&zm(n,f,o,S),Ua=!1;var le=n.memoizedState;f.state=le,fo(n,o,f,u),uo(),se=n.memoizedState,C||le!==se||Ua?(typeof Se=="function"&&(rf(n,a,Se,o),se=n.memoizedState),(V=Ua||Bm(n,a,V,o,le,se,S))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=se),f.props=o,f.state=se,f.context=S,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Pu(e,n),S=n.memoizedProps,me=Sr(a,S),f.props=me,Se=n.pendingProps,le=f.context,se=a.contextType,V=qr,typeof se=="object"&&se!==null&&(V=Rn(se)),C=a.getDerivedStateFromProps,(se=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==Se||le!==V)&&zm(n,f,o,V),Ua=!1,le=n.memoizedState,f.state=le,fo(n,o,f,u),uo();var fe=n.memoizedState;S!==Se||le!==fe||Ua||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof C=="function"&&(rf(n,a,C,o),fe=n.memoizedState),(me=Ua||Bm(n,a,me,o,le,fe,V)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(se||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,fe,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,fe,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&le===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&le===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),f.props=o,f.state=fe,f.context=V,o=me):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&le===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&le===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Xl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=vr(n,e.child,null,u),n.child=vr(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=$i(e,n,u),e}function e0(e,n,a,o){return dr(),n.flags|=256,Cn(e,n,a,o),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(e){return{baseLanes:e,cachePool:kp()}}function df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function t0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Tt){if(u?Oa(n):Pa(),(e=Zt)?(e=cg(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=Op(e),a.return=n,n.child=a,An=n,Zt=null)):e=null,e===null)throw wa(n);return Yf(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Pa(),u=n.mode,C=Wl({mode:"hidden",children:C},u),o=fr(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=ff(a),o.childLanes=df(e,S,a),n.memoizedState=uf,_o(null,o)):(Oa(n),hf(n,C))}var V=e.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(f)n.flags&256?(Oa(n),n.flags&=-257,n=pf(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),C=o.fallback,u=n.mode,o=Wl({mode:"visible",children:o.children},u),C=fr(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,vr(n,e.child,null,a),o=n.child,o.memoizedState=ff(a),o.childLanes=df(e,S,a),n.memoizedState=uf,n=_o(null,o));else if(Oa(n),Yf(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var se=S.dgst;S=se,o=Error(r(419)),o.stack="",o.digest=S,ao({value:o,source:null,stack:null}),n=pf(e,n,a)}else if(cn||Kr(e,n,a,!1),S=(a&e.childLanes)!==0,cn||S){if(S=qt,S!==null&&(o=Pr(S,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,ur(e,o),kn(S,e,o),lf;jf(C)||ec(),n=pf(e,n,a)}else jf(C)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,Zt=fi(C.nextSibling),An=n,Tt=!0,Ca=null,ci=!1,e!==null&&Ip(n,e),n=hf(n,o.children),n.flags|=4096);return n}return u?(Pa(),C=o.fallback,u=n.mode,V=e.child,se=V.sibling,o=ji(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,se!==null?C=ji(se,C):(C=fr(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,_o(null,o),o=n.child,C=e.child.memoizedState,C===null?C=ff(a):(u=C.cachePool,u!==null?(V=on._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=kp(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=df(e,S,a),n.memoizedState=uf,_o(e.child,o)):(Oa(n),a=e.child,e=a.sibling,a=ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function hf(e,n){return n=Wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function pf(e,n,a){return vr(n,e.child,null,a),e=hf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function n0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Cu(e.return,n,a)}function mf(e,n,a,o,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function i0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var S=tn.current,C=(S&2)!==0;if(C?(S=S&1|2,n.flags|=128):S&=1,_e(tn,S),Cn(e,n,o,a),o=Tt?io:0,!C&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&n0(e,a,n);else if(e.tag===19)n0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),mf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ll(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}mf(n,!0,a,null,f,o);break;case"together":mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Kr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function gf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function jx(e,n,a){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),Da(n,on,e.memoizedState.cache),dr();break;case 27:case 5:Ge(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?t0(e,n,a):(Oa(n),e=$i(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Kr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return i0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(tn,tn.current),o)break;return null;case 22:return n.lanes=0,Zm(e,n,a,n.pendingProps);case 24:Da(n,on,e.memoizedState.cache)}return $i(e,n,a)}function a0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!gf(e,a)&&(n.flags&128)===0)return cn=!1,jx(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Tt&&(n.flags&1048576)!==0&&Fp(n,io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=gr(n.elementType),n.type=e,typeof e=="function")Su(e)?(o=Sr(e,o),n.tag=1,n=$m(null,n,e,o,a)):(n.tag=0,n=cf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=qm(null,n,e,o,a);break e}else if(u===U){n.tag=14,n=jm(null,n,e,o,a);break e}}throw n=ie(e)||e,Error(r(306,n,""))}}return n;case 0:return cf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Sr(o,n.pendingProps),$m(e,n,o,u,a);case 3:e:{if(Ae(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Pu(e,n),fo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Da(n,on,o),o!==f.cache&&wu(n,[on],a,!0),uo(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=e0(e,n,o,a);break e}else if(o!==u){u=si(Error(r(424)),n),ao(u),n=e0(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Zt=fi(e.firstChild),An=n,Tt=!0,Ca=null,ci=!0,a=Zp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(dr(),o===u){n=$i(e,n,a);break e}Cn(e,n,o,a)}n=n.child}return n;case 26:return Xl(e,n),e===null?(a=mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,e=n.pendingProps,o=oc(Q.current).createElement(a),o[sn]=n,o[Sn]=e,wn(o,a,e),D(o),n.stateNode=o):n.memoizedState=mg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ge(n),e===null&&Tt&&(o=n.stateNode=dg(n.type,n.pendingProps,Q.current),An=n,ci=!0,u=Zt,ka(n.type)?(Zf=u,Zt=fi(o.firstChild)):Zt=u),Cn(e,n,n.pendingProps.children,a),Xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Tt&&((u=o=Zt)&&(o=ES(o,n.type,n.pendingProps,ci),o!==null?(n.stateNode=o,An=n,Zt=fi(o.firstChild),ci=!1,u=!0):u=!1),u||wa(n)),Ge(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Xf(u,f)?o=null:S!==null&&Xf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Vu(e,n,Bx,null,null,a),No._currentValue=u),Xl(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&Tt&&((e=a=Zt)&&(a=bS(a,n.pendingProps,ci),a!==null?(n.stateNode=a,An=n,Zt=null,e=!0):e=!1),e||wa(n)),null;case 13:return t0(e,n,a);case 4:return Ae(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=vr(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return qm(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Da(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,pr(n),u=Rn(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return jm(e,n,n.type,n.pendingProps,a);case 15:return Ym(e,n,n.type,n.pendingProps,a);case 19:return i0(e,n,a);case 31:return qx(e,n,a);case 22:return Zm(e,n,a,n.pendingProps);case 24:return pr(n),o=Rn(on),e===null?(u=Nu(),u===null&&(u=qt,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ou(n),Da(n,on,u)):((e.lanes&a)!==0&&(Pu(e,n),fo(n,null,null,a),uo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,on,o)):(o=f.cache,Da(n,on,o),o!==u.cache&&wu(n,[on],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ea(e){e.flags|=4}function _f(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(U0())e.flags|=8192;else throw _r=wl,Lu}else e.flags&=-16777217}function r0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sg(n))if(U0())e.flags|=8192;else throw _r=wl,Lu}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?It():536870912,e.lanes|=n,ls|=n)}function vo(e,n){if(!Tt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Kt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Yx(e,n,a){var o=n.pendingProps;switch(bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(on),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?ea(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Au())),Kt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ea(n),f!==null?(Kt(n),r0(n,f)):(Kt(n),_f(n,u,null,o,a))):f?f!==e.memoizedState?(ea(n),Kt(n),r0(n,f)):(Kt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ea(n),Kt(n),_f(n,u,e,o,a)),null;case 27:if(ct(n),a=Q.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}e=de.current,Zr(n)?Bp(n):(e=dg(u,o,a),n.stateNode=e,ea(n))}return Kt(n),null;case 5:if(ct(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}if(f=de.current,Zr(n))Bp(n);else{var S=oc(Q.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}f[sn]=n,f[Sn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(wn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ea(n)}}return Kt(n),_f(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Q.current,Zr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||tg(e.nodeValue,a)),e||wa(n,!0)}else e=oc(e).createTextNode(o),e[sn]=n,n.stateNode=e}return Kt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Zr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[sn]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),e=!1}else a=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Kt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[sn]=n}else dr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),u=!1}else u=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Kt(n),null);case 4:return He(),e===null&&zf(n.stateNode.containerInfo),Kt(n),null;case 10:return Ki(n.type),Kt(n),null;case 19:if(ne(tn),o=n.memoizedState,o===null)return Kt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)vo(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ll(e),f!==null){for(n.flags|=128,vo(o,!1),e=f.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Lp(a,e),a=a.sibling;return _e(tn,tn.current&1|2),Tt&&Yi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>Ql&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ll(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),vo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Tt)return Kt(n),null}else 2*E()-o.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,vo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=tn.current,_e(tn,u?a&1|2:a&1),Tt&&Yi(n,o.treeForkCount),e):(Kt(n),null);case 22:case 23:return Zn(n),zu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ne(mr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(on),Kt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Zx(e,n){switch(bu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(on),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));dr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));dr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ne(tn),null;case 4:return He(),null;case 10:return Ki(n.type),null;case 22:case 23:return Zn(n),zu(),e!==null&&ne(mr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(on),null;case 25:return null;default:return null}}function s0(e,n){switch(bu(n),n.tag){case 3:Ki(on),He();break;case 26:case 27:case 5:ct(n);break;case 4:He();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:ne(tn);break;case 10:Ki(n.type);break;case 22:case 23:Zn(n),zu(),e!==null&&ne(mr);break;case 24:Ki(on)}}function xo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(C){Ht(n,n.return,C)}}function Fa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,u=n;var V=a,se=C;try{se()}catch(me){Ht(u,V,me)}}}o=o.next}while(o!==f)}}catch(me){Ht(n,n.return,me)}}function o0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Qp(n,a)}catch(o){Ht(e,e.return,o)}}}function l0(e,n,a){a.props=Sr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ht(e,n,o)}}function So(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ht(e,n,u)}}function Li(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ht(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(e,n,u)}else a.current=null}function c0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ht(e,e.return,u)}}function vf(e,n,a){try{var o=e.stateNode;_S(o,e.type,a,n),o[Sn]=n}catch(u){Ht(e,e.return,u)}}function u0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||u0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,n,a),e=e.sibling;e!==null;)jl(e,n,a),e=e.sibling}function f0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[sn]=e,n[Sn]=a}catch(f){Ht(e,e.return,f)}}var ta=!1,un=!1,yf=!1,d0=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Kx(e,n){if(e=e.containerInfo,Vf=pc,e=bp(e),hu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,C=-1,V=-1,se=0,me=0,Se=e,le=null;t:for(;;){for(var fe;Se!==a||u!==0&&Se.nodeType!==3||(C=S+u),Se!==f||o!==0&&Se.nodeType!==3||(V=S+o),Se.nodeType===3&&(S+=Se.nodeValue.length),(fe=Se.firstChild)!==null;)le=Se,Se=fe;for(;;){if(Se===e)break t;if(le===a&&++se===u&&(C=S),le===f&&++me===o&&(V=S),(fe=Se.nextSibling)!==null)break;Se=le,le=Se.parentNode}Se=fe}a=C===-1||V===-1?null:{start:C,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:e,selectionRange:a},pc=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var je=Sr(a.type,u);e=o.getSnapshotBeforeUpdate(je,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(rt){Ht(a,a.return,rt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)qf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function h0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),o&4&&xo(5,a);break;case 1:if(ia(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ht(a,a.return,S)}else{var u=Sr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ht(a,a.return,S)}}o&64&&o0(a),o&512&&So(a,a.return);break;case 3:if(ia(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Qp(e,n)}catch(S){Ht(a,a.return,S)}}break;case 27:n===null&&o&4&&f0(a);case 26:case 5:ia(e,a),n===null&&o&4&&c0(a),o&512&&So(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),o&4&&g0(e,a);break;case 13:ia(e,a),o&4&&_0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=rS.bind(null,a),TS(e,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||un,u=ta;var f=un;ta=o,(un=n)&&!f?aa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),ta=u,un=f}break;case 30:break;default:ia(e,a)}}function p0(e){var n=e.alternate;n!==null&&(e.alternate=null,p0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&js(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,zn=!1;function na(e,n,a){for(a=a.child;a!==null;)m0(e,n,a),a=a.sibling}function m0(e,n,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:un||Li(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Li(a,n);var o=Jt,u=zn;ka(a.type)&&(Jt=a.stateNode,zn=!1),na(e,n,a),wo(a.stateNode),Jt=o,zn=u;break;case 5:un||Li(a,n);case 6:if(o=Jt,u=zn,Jt=null,na(e,n,a),Jt=o,zn=u,Jt!==null)if(zn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Ht(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Ht(a,n,f)}break;case 18:Jt!==null&&(zn?(e=Jt,og(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),gs(e)):og(Jt,a.stateNode));break;case 4:o=Jt,u=zn,Jt=a.stateNode.containerInfo,zn=!0,na(e,n,a),Jt=o,zn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),un||Fa(4,a,n),na(e,n,a);break;case 1:un||(Li(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&l0(a,n,o)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,na(e,n,a),un=o;break;default:na(e,n,a)}}function g0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gs(e)}catch(a){Ht(n,n.return,a)}}}function _0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gs(e)}catch(a){Ht(n,n.return,a)}}function Qx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new d0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new d0),n;default:throw Error(r(435,e.tag))}}function Yl(e,n){var a=Qx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=sS.bind(null,e,o);o.then(u,u)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,C=S;e:for(;C!==null;){switch(C.tag){case 27:if(ka(C.type)){Jt=C.stateNode,zn=!1;break e}break;case 5:Jt=C.stateNode,zn=!1;break e;case 3:case 4:Jt=C.stateNode.containerInfo,zn=!0;break e}C=C.return}if(Jt===null)throw Error(r(160));m0(f,S,u),Jt=null,zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)v0(n,e),n=n.sibling}var yi=null;function v0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),o&4&&(Fa(3,e,e.return),xo(3,e),Fa(5,e,e.return));break;case 1:Hn(n,e),Gn(e),o&512&&(un||a===null||Li(a,a.return)),o&64&&ta&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=yi;if(Hn(n,e),Gn(e),o&512&&(un||a===null||Li(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[rr]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,o,a),f[sn]=e,D(f),o=f;break e;case"link":var S=vg("link","href",u).get(o+(a.href||""));if(S){for(var C=0;C<S.length;C++)if(f=S[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(C,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;case"meta":if(S=vg("meta","content",u).get(o+(a.content||""))){for(C=0;C<S.length;C++)if(f=S[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(C,1);break t}}f=u.createElement(o),wn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[sn]=e,D(f),o=f}e.stateNode=o}else xg(u,e.type,e.stateNode);else e.stateNode=_g(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?xg(u,e.type,e.stateNode):_g(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&vf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),o&512&&(un||a===null||Li(a,a.return)),a!==null&&o&4&&vf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),o&512&&(un||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(je){Ht(e,e.return,je)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,vf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(yf=!0);break;case 6:if(Hn(n,e),Gn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(je){Ht(e,e.return,je)}}break;case 3:if(uc=null,u=yi,yi=lc(n.containerInfo),Hn(n,e),yi=u,Gn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{gs(n.containerInfo)}catch(je){Ht(e,e.return,je)}yf&&(yf=!1,x0(e));break;case 4:o=yi,yi=lc(e.stateNode.containerInfo),Hn(n,e),Gn(e),yi=o;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,se=ta,me=un;if(ta=se||u,un=me||V,Hn(n,e),un=me,ta=se,Gn(e),o&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||ta||un||yr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=V.stateNode;var Se=V.memoizedProps.style,le=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(je){Ht(V,V.return,je)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(je){Ht(V,V.return,je)}}}else if(n.tag===18){if(a===null){V=n;try{var fe=V.stateNode;u?lg(fe,!0):lg(V.stateNode,!1)}catch(je){Ht(V,V.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Yl(e,a))));break;case 19:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Yl(e,o)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(u0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=xf(e);jl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(pn(S,""),a.flags&=-33);var C=xf(e);jl(e,C,S);break;case 3:case 4:var V=a.stateNode.containerInfo,se=xf(e);Sf(e,se,V);break;default:throw Error(r(161))}}catch(me){Ht(e,e.return,me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function x0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;x0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)h0(e,n.alternate,n),n=n.sibling}function yr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),yr(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&l0(n,n.return,a),yr(n);break;case 27:wo(n.stateNode);case 26:case 5:Li(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}e=e.sibling}}function aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:aa(u,f,a),xo(4,f);break;case 1:if(aa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(se){Ht(o,o.return,se)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Kp(V[u],C)}catch(se){Ht(o,o.return,se)}}a&&S&64&&o0(f),So(f,f.return);break;case 27:f0(f);case 26:case 5:aa(u,f,a),a&&o===null&&S&4&&c0(f),So(f,f.return);break;case 12:aa(u,f,a);break;case 31:aa(u,f,a),a&&S&4&&g0(u,f);break;case 13:aa(u,f,a),a&&S&4&&_0(u,f);break;case 22:f.memoizedState===null&&aa(u,f,a),So(f,f.return);break;case 30:break;default:aa(u,f,a)}n=n.sibling}}function Mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ro(a))}function Ef(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e))}function Mi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)S0(e,n,a,o),n=n.sibling}function S0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,o),u&2048&&xo(9,n);break;case 1:Mi(e,n,a,o);break;case 3:Mi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ro(e)));break;case 12:if(u&2048){Mi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,C=f.onPostCommit;typeof C=="function"&&C(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ht(n,n.return,V)}}else Mi(e,n,a,o);break;case 31:Mi(e,n,a,o);break;case 13:Mi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,o):yo(e,n):f._visibility&2?Mi(e,n,a,o):(f._visibility|=2,rs(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Mf(S,n);break;case 24:Mi(e,n,a,o),u&2048&&Ef(n.alternate,n);break;default:Mi(e,n,a,o)}}function rs(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,C=a,V=o,se=S.flags;switch(S.tag){case 0:case 11:case 15:rs(f,S,C,V,u),xo(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?rs(f,S,C,V,u):yo(f,S):(me._visibility|=2,rs(f,S,C,V,u)),u&&se&2048&&Mf(S.alternate,S);break;case 24:rs(f,S,C,V,u),u&&se&2048&&Ef(S.alternate,S);break;default:rs(f,S,C,V,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:yo(a,o),u&2048&&Mf(o.alternate,o);break;case 24:yo(a,o),u&2048&&Ef(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var Mo=8192;function ss(e,n,a){if(e.subtreeFlags&Mo)for(e=e.child;e!==null;)y0(e,n,a),e=e.sibling}function y0(e,n,a){switch(e.tag){case 26:ss(e,n,a),e.flags&Mo&&e.memoizedState!==null&&IS(a,yi,e.memoizedState,e.memoizedProps);break;case 5:ss(e,n,a);break;case 3:case 4:var o=yi;yi=lc(e.stateNode.containerInfo),ss(e,n,a),yi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Mo,Mo=16777216,ss(e,n,a),Mo=o):ss(e,n,a));break;default:ss(e,n,a)}}function M0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Eo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,b0(o,e)}M0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)E0(e),e=e.sibling}function E0(e){switch(e.tag){case 0:case 11:case 15:Eo(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Eo(e);break;case 12:Eo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zl(e)):Eo(e);break;default:Eo(e)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,b0(o,e)}M0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}e=e.sibling}}function b0(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ro(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else e:for(a=e;vn!==null;){o=vn;var u=o.sibling,f=o.return;if(p0(o),o===a){vn=null;break e}if(u!==null){u.return=f,vn=u;break e}vn=f}}}var Jx={getCacheForType:function(e){var n=Rn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(on).controller.signal}},$x=typeof WeakMap=="function"?WeakMap:Map,Pt=0,qt=null,yt=null,Et=0,zt=0,Kn=null,Ia=!1,os=!1,bf=!1,ra=0,en=0,Ba=0,Mr=0,Tf=0,Qn=0,ls=0,bo=null,Vn=null,Af=!1,Kl=0,T0=0,Ql=1/0,Jl=null,za=null,mn=0,Ha=null,cs=null,sa=0,Rf=0,Cf=null,A0=null,To=0,wf=null;function Jn(){return(Pt&2)!==0&&Et!==0?Et&-Et:B.T!==null?Pf():Ws()}function R0(){if(Qn===0)if((Et&536870912)===0||Tt){var e=De;De<<=1,(De&3932160)===0&&(De=262144),Qn=e}else Qn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Qn}function kn(e,n,a){(e===qt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(us(e,0),Ga(e,Et,Qn,!1)),Nn(e,a),((Pt&2)===0||e!==qt)&&(e===qt&&((Pt&2)===0&&(Mr|=a),en===4&&Ga(e,Et,Qn,!1)),Oi(e))}function C0(e,n,a){if((Pt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ue(e,n),u=o?nS(e,n):Uf(e,n,!0),f=o;do{if(u===0){os&&!o&&Ga(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!eS(a)){u=Uf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var C=e;u=bo;var V=C.current.memoizedState.isDehydrated;if(V&&(us(C,S).flags|=256),S=Uf(C,S,!1),S!==2){if(bf&&!V){C.errorRecoveryDisabledLanes|=f,Mr|=f,u=4;break e}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){us(e,0),Ga(e,n,0,!0);break}e:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ga(o,n,Qn,!Ia);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Kl+300-E(),10<u)){if(Ga(o,n,Qn,!Ia),Me(o,0,!0)!==0)break e;sa=n,o.timeoutHandle=rg(w0.bind(null,o,a,Vn,Jl,Af,n,Qn,Mr,ls,Ia,f,"Throttled",-0,0),u);break e}w0(o,a,Vn,Jl,Af,n,Qn,Mr,ls,Ia,f,null,-0,0)}}break}while(!0);Oi(e)}function w0(e,n,a,o,u,f,S,C,V,se,me,Se,le,fe){if(e.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},y0(n,f,Se);var je=(f&62914560)===f?Kl-E():(f&4194048)===f?T0-E():0;if(je=BS(Se,je),je!==null){sa=f,e.cancelPendingCommit=je(I0.bind(null,e,n,f,a,o,u,S,C,V,me,Se,null,le,fe)),Ga(e,f,S,!se);return}}I0(e,n,f,a,o,u,S,C,V)}function eS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!qn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(e,n,a,o){n&=~Tf,n&=~Mr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pe(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&ul(e,a,n)}function $l(){return(Pt&6)===0?(Ao(0),!1):!0}function Df(){if(yt!==null){if(zt===0)var e=yt.return;else e=yt,Zi=hr=null,Wu(e),es=null,oo=0,e=yt;for(;e!==null;)s0(e.alternate,e),e=e.return;yt=null}}function us(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,SS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sa=0,Df(),qt=e,yt=a=ji(e.current,null),Et=n,zt=0,Kn=null,Ia=!1,os=Ue(e,n),bf=!1,ls=Qn=Tf=Mr=Ba=en=0,Vn=bo=null,Af=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pe(o),f=1<<u;n|=e[u],o&=~f}return ra=n,Sl(),a}function D0(e,n){ht=null,B.H=go,n===$r||n===Cl?(n=qp(),zt=3):n===Lu?(n=qp(),zt=4):zt=n===lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,yt===null&&(en=1,Vl(e,si(n,e.current)))}function U0(){var e=Yn.current;return e===null?!0:(Et&4194048)===Et?ui===null:(Et&62914560)===Et||(Et&536870912)!==0?e===ui:!1}function N0(){var e=B.H;return B.H=go,e===null?go:e}function L0(){var e=B.A;return B.A=Jx,e}function ec(){en=4,Ia||(Et&4194048)!==Et&&Yn.current!==null||(os=!0),(Ba&134217727)===0&&(Mr&134217727)===0||qt===null||Ga(qt,Et,Qn,!1)}function Uf(e,n,a){var o=Pt;Pt|=2;var u=N0(),f=L0();(qt!==e||Et!==n)&&(Jl=null,us(e,n)),n=!1;var S=en;e:do try{if(zt!==0&&yt!==null){var C=yt,V=Kn;switch(zt){case 8:Df(),S=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var se=zt;if(zt=0,Kn=null,fs(e,C,V,se),a&&os){S=0;break e}break;default:se=zt,zt=0,Kn=null,fs(e,C,V,se)}}tS(),S=en;break}catch(me){D0(e,me)}while(!0);return n&&e.shellSuspendCounter++,Zi=hr=null,Pt=o,B.H=u,B.A=f,yt===null&&(qt=null,Et=0,Sl()),S}function tS(){for(;yt!==null;)O0(yt)}function nS(e,n){var a=Pt;Pt|=2;var o=N0(),u=L0();qt!==e||Et!==n?(Jl=null,Ql=E()+500,us(e,n)):os=Ue(e,n);e:do try{if(zt!==0&&yt!==null){n=yt;var f=Kn;t:switch(zt){case 1:zt=0,Kn=null,fs(e,n,f,1);break;case 2:case 9:if(Xp(f)){zt=0,Kn=null,P0(n);break}n=function(){zt!==2&&zt!==9||qt!==e||(zt=7),Oi(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Xp(f)?(zt=0,Kn=null,P0(n)):(zt=0,Kn=null,fs(e,n,f,7));break;case 5:var S=null;switch(yt.tag){case 26:S=yt.memoizedState;case 5:case 27:var C=yt;if(S?Sg(S):C.stateNode.complete){zt=0,Kn=null;var V=C.sibling;if(V!==null)yt=V;else{var se=C.return;se!==null?(yt=se,tc(se)):yt=null}break t}}zt=0,Kn=null,fs(e,n,f,5);break;case 6:zt=0,Kn=null,fs(e,n,f,6);break;case 8:Df(),en=6;break e;default:throw Error(r(462))}}iS();break}catch(me){D0(e,me)}while(!0);return Zi=hr=null,B.H=o,B.A=u,Pt=a,yt!==null?0:(qt=null,Et=0,Sl(),en)}function iS(){for(;yt!==null&&!Ve();)O0(yt)}function O0(e){var n=a0(e.alternate,e,ra);e.memoizedProps=e.pendingProps,n===null?tc(e):yt=n}function P0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Jm(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=Jm(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:Wu(n);default:s0(a,n),n=yt=Lp(n,ra),n=a0(a,n,ra)}e.memoizedProps=e.pendingProps,n===null?tc(e):yt=n}function fs(e,n,a,o){Zi=hr=null,Wu(n),es=null,oo=0;var u=n.return;try{if(Wx(e,u,n,a,Et)){en=1,Vl(e,si(a,e.current)),yt=null;return}}catch(f){if(u!==null)throw yt=u,f;en=1,Vl(e,si(a,e.current)),yt=null;return}n.flags&32768?(Tt||o===1?e=!0:os||(Et&536870912)!==0?e=!1:(Ia=e=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),F0(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){F0(n,Ia);return}e=n.return;var a=Yx(n.alternate,n,ra);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=e}while(n!==null);en===0&&(en=5)}function F0(e,n){do{var a=Zx(e.alternate,e);if(a!==null){a.flags&=32767,yt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){yt=e;return}yt=e=a}while(e!==null);en=6,yt=null}function I0(e,n,a,o,u,f,S,C,V){e.cancelPendingCommit=null;do nc();while(mn!==0);if((Pt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=vu,_i(e,a,f,S,C,V),e===qt&&(yt=qt=null,Et=0),cs=n,Ha=e,sa=a,Rf=f,Cf=u,A0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,oS(he,function(){return V0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=G.p,G.p=2,S=Pt,Pt|=4;try{Kx(e,n,a)}finally{Pt=S,G.p=u,B.T=o}}mn=1,B0(),z0(),H0()}}function B0(){if(mn===1){mn=0;var e=Ha,n=cs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=Pt;Pt|=4;try{v0(n,e);var f=kf,S=bp(e.containerInfo),C=f.focusedElem,V=f.selectionRange;if(S!==C&&C&&C.ownerDocument&&Ep(C.ownerDocument.documentElement,C)){if(V!==null&&hu(C)){var se=V.start,me=V.end;if(me===void 0&&(me=se),"selectionStart"in C)C.selectionStart=se,C.selectionEnd=Math.min(me,C.value.length);else{var Se=C.ownerDocument||document,le=Se&&Se.defaultView||window;if(le.getSelection){var fe=le.getSelection(),je=C.textContent.length,rt=Math.min(V.start,je),Xt=V.end===void 0?rt:Math.min(V.end,je);!fe.extend&&rt>Xt&&(S=Xt,Xt=rt,rt=S);var K=Mp(C,rt),X=Mp(C,Xt);if(K&&X&&(fe.rangeCount!==1||fe.anchorNode!==K.node||fe.anchorOffset!==K.offset||fe.focusNode!==X.node||fe.focusOffset!==X.offset)){var re=Se.createRange();re.setStart(K.node,K.offset),fe.removeAllRanges(),rt>Xt?(fe.addRange(re),fe.extend(X.node,X.offset)):(re.setEnd(X.node,X.offset),fe.addRange(re))}}}}for(Se=[],fe=C;fe=fe.parentNode;)fe.nodeType===1&&Se.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Se.length;C++){var xe=Se[C];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}pc=!!Vf,kf=Vf=null}finally{Pt=u,G.p=o,B.T=a}}e.current=n,mn=2}}function z0(){if(mn===2){mn=0;var e=Ha,n=cs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=G.p;G.p=2;var u=Pt;Pt|=4;try{h0(e,n.alternate,n)}finally{Pt=u,G.p=o,B.T=a}}mn=3}}function H0(){if(mn===4||mn===3){mn=0,O();var e=Ha,n=cs,a=sa,o=A0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,cs=Ha=null,G0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(za=null),Fr(a),n=n.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=G.p,G.p=2,B.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var C=o[S];f(C.value,{componentStack:C.stack})}}finally{B.T=n,G.p=u}}(sa&3)!==0&&nc(),Oi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===wf?To++:(To=0,wf=e):To=0,Ao(0)}}function G0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ro(n)))}function nc(){return B0(),z0(),H0(),V0()}function V0(){if(mn!==5)return!1;var e=Ha,n=Rf;Rf=0;var a=Fr(sa),o=B.T,u=G.p;try{G.p=32>a?32:a,B.T=null,a=Cf,Cf=null;var f=Ha,S=sa;if(mn=0,cs=Ha=null,sa=0,(Pt&6)!==0)throw Error(r(331));var C=Pt;if(Pt|=4,E0(f.current),S0(f,f.current,S,a),Pt=C,Ao(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{G.p=u,B.T=o,G0(e,n)}}function k0(e,n,a){n=si(a,n),n=of(e.stateNode,n,2),e=La(e,n,2),e!==null&&(Nn(e,2),Oi(e))}function Ht(e,n,a){if(e.tag===3)k0(e,e,a);else for(;n!==null;){if(n.tag===3){k0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(za===null||!za.has(o))){e=si(a,e),a=Xm(2),o=La(n,a,2),o!==null&&(Wm(a,o,n,e),Nn(o,2),Oi(o));break}}n=n.return}}function Nf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new $x;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(bf=!0,u.add(a),e=aS.bind(null,e,n,a),n.then(e,e))}function aS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qt===e&&(Et&a)===a&&(en===4||en===3&&(Et&62914560)===Et&&300>E()-Kl?(Pt&2)===0&&us(e,0):Tf|=a,ls===Et&&(ls=0)),Oi(e)}function X0(e,n){n===0&&(n=It()),e=ur(e,n),e!==null&&(Nn(e,n),Oi(e))}function rS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),X0(e,a)}function sS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),X0(e,a)}function oS(e,n){return Qe(e,n)}var ic=null,ds=null,Lf=!1,ac=!1,Of=!1,Va=0;function Oi(e){e!==ds&&e.next===null&&(ds===null?ic=ds=e:ds=ds.next=e),ac=!0,Lf||(Lf=!0,cS())}function Ao(e,n){if(!Of&&ac){Of=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-Pe(42|e)+1)-1,f&=u&~(S&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Y0(o,f))}else f=Et,f=Me(o,o===qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ue(o,f)||(a=!0,Y0(o,f));o=o.next}while(a);Of=!1}}function lS(){W0()}function W0(){ac=Lf=!1;var e=0;Va!==0&&xS()&&(e=Va);for(var n=E(),a=null,o=ic;o!==null;){var u=o.next,f=q0(o,n);f===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(ds=a)):(a=o,(e!==0||(f&3)!==0)&&(ac=!0)),o=u}mn!==0&&mn!==5||Ao(e),Va!==0&&(Va=0)}function q0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Pe(f),C=1<<S,V=u[S];V===-1?((C&a)===0||(C&o)!==0)&&(u[S]=ot(C,n)):V<=n&&(e.expiredLanes|=C),f&=~C}if(n=qt,a=Et,a=Me(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ut(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ue(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ut(o),Fr(a)){case 2:case 8:a=ye;break;case 32:a=he;break;case 268435456:a=Re;break;default:a=he}return o=j0.bind(null,e),a=Qe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ut(o),e.callbackPriority=2,e.callbackNode=null,2}function j0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=Et;return o=Me(e,e===qt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(C0(e,o,n),q0(e,E()),e.callbackNode!=null&&e.callbackNode===a?j0.bind(null,e):null)}function Y0(e,n){if(nc())return null;C0(e,n,!0)}function cS(){yS(function(){(Pt&6)!==0?Qe(pe,lS):W0()})}function Pf(){if(Va===0){var e=Qr;e===0&&(e=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Va=e}return Va}function Z0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function K0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function uS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Z0((u[Sn]||null).action),S=o.submitter;S&&(n=(n=S[Sn]||null)?Z0(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var C=new gl("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Va!==0){var V=S?K0(u,S):new FormData(u);ef(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(C.preventDefault(),V=S?K0(u,S):new FormData(u),ef(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Ff=0;Ff<_u.length;Ff++){var If=_u[Ff],fS=If.toLowerCase(),dS=If[0].toUpperCase()+If.slice(1);Si(fS,"on"+dS)}Si(Rp,"onAnimationEnd"),Si(Cp,"onAnimationIteration"),Si(wp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Cx,"onTransitionRun"),Si(wx,"onTransitionStart"),Si(Dx,"onTransitionCancel"),Si(Dp,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function Q0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var C=o[S],V=C.instance,se=C.currentTarget;if(C=C.listener,V!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=se;try{f(u)}catch(me){xl(me)}u.currentTarget=null,f=V}else for(S=0;S<o.length;S++){if(C=o[S],V=C.instance,se=C.currentTarget,C=C.listener,V!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=se;try{f(u)}catch(me){xl(me)}u.currentTarget=null,f=V}}}}function Mt(e,n){var a=n[Ir];a===void 0&&(a=n[Ir]=new Set);var o=e+"__bubble";a.has(o)||(J0(n,e,2,!1),a.add(o))}function Bf(e,n,a){var o=0;n&&(o|=4),J0(a,e,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function zf(e){if(!e[rc]){e[rc]=!0,Z.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||Bf(a,!1,e),Bf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rc]||(n[rc]=!0,Bf("selectionchange",!1,n))}}function J0(e,n,a,o){switch(Rg(n)){case 2:var u=GS;break;case 8:u=VS;break;default:u=ed}a=u.bind(null,n,a,e),u=void 0,!au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Hf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var C=o.stateNode.containerInfo;if(C===u)break;if(S===4)for(S=o.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;C!==null;){if(S=Ea(C),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){o=f=S;continue e}C=C.parentNode}}o=o.return}ip(function(){var se=f,me=nu(a),Se=[];e:{var le=Up.get(e);if(le!==void 0){var fe=gl,je=e;switch(e){case"keypress":if(pl(a)===0)break e;case"keydown":case"keyup":fe=sx;break;case"focusin":je="focus",fe=lu;break;case"focusout":je="blur",fe=lu;break;case"beforeblur":case"afterblur":fe=lu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=cx;break;case Rp:case Cp:case wp:fe=Qv;break;case Dp:fe=fx;break;case"scroll":case"scrollend":fe=qv;break;case"wheel":fe=hx;break;case"copy":case"cut":case"paste":fe=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=lp;break;case"toggle":case"beforetoggle":fe=mx}var rt=(n&4)!==0,Xt=!rt&&(e==="scroll"||e==="scrollend"),K=rt?le!==null?le+"Capture":null:le;rt=[];for(var X=se,re;X!==null;){var xe=X;if(re=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||re===null||K===null||(xe=Ys(X,K),xe!=null&&rt.push(Co(X,xe,re))),Xt)break;X=X.return}0<rt.length&&(le=new fe(le,je,null,a,me),Se.push({event:le,listeners:rt}))}}if((n&7)===0){e:{if(le=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",le&&a!==tu&&(je=a.relatedTarget||a.fromElement)&&(Ea(je)||je[vi]))break e;if((fe||le)&&(le=me.window===me?me:(le=me.ownerDocument)?le.defaultView||le.parentWindow:window,fe?(je=a.relatedTarget||a.toElement,fe=se,je=je?Ea(je):null,je!==null&&(Xt=c(je),rt=je.tag,je!==Xt||rt!==5&&rt!==27&&rt!==6)&&(je=null)):(fe=null,je=se),fe!==je)){if(rt=sp,xe="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(rt=lp,xe="onPointerLeave",K="onPointerEnter",X="pointer"),Xt=fe==null?le:sr(fe),re=je==null?le:sr(je),le=new rt(xe,X+"leave",fe,a,me),le.target=Xt,le.relatedTarget=re,xe=null,Ea(me)===se&&(rt=new rt(K,X+"enter",je,a,me),rt.target=re,rt.relatedTarget=Xt,xe=rt),Xt=xe,fe&&je)t:{for(rt=pS,K=fe,X=je,re=0,xe=K;xe;xe=rt(xe))re++;xe=0;for(var tt=X;tt;tt=rt(tt))xe++;for(;0<re-xe;)K=rt(K),re--;for(;0<xe-re;)X=rt(X),xe--;for(;re--;){if(K===X||X!==null&&K===X.alternate){rt=K;break t}K=rt(K),X=rt(X)}rt=null}else rt=null;fe!==null&&$0(Se,le,fe,rt,!1),je!==null&&Xt!==null&&$0(Se,Xt,je,rt,!0)}}e:{if(le=se?sr(se):window,fe=le.nodeName&&le.nodeName.toLowerCase(),fe==="select"||fe==="input"&&le.type==="file")var wt=gp;else if(pp(le))if(_p)wt=Tx;else{wt=Ex;var Je=Mx}else fe=le.nodeName,!fe||fe.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?se&&xi(se.elementType)&&(wt=gp):wt=bx;if(wt&&(wt=wt(e,se))){mp(Se,wt,a,me);break e}Je&&Je(e,le,se),e==="focusout"&&se&&le.type==="number"&&se.memoizedProps.value!=null&&Mn(le,"number",le.value)}switch(Je=se?sr(se):window,e){case"focusin":(pp(Je)||Je.contentEditable==="true")&&(kr=Je,pu=se,no=null);break;case"focusout":no=pu=kr=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Tp(Se,a,me);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":Tp(Se,a,me)}var _t;if(uu)e:{switch(e){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Vr?dp(e,a)&&(bt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(cp&&a.locale!=="ko"&&(Vr||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Vr&&(_t=ap()):(Aa=me,ru="value"in Aa?Aa.value:Aa.textContent,Vr=!0)),Je=sc(se,bt),0<Je.length&&(bt=new op(bt,e,null,a,me),Se.push({event:bt,listeners:Je}),_t?bt.data=_t:(_t=hp(a),_t!==null&&(bt.data=_t)))),(_t=_x?vx(e,a):xx(e,a))&&(bt=sc(se,"onBeforeInput"),0<bt.length&&(Je=new op("onBeforeInput","beforeinput",null,a,me),Se.push({event:Je,listeners:bt}),Je.data=_t)),uS(Se,e,se,a,me)}Q0(Se,n)})}function Co(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ys(e,a),u!=null&&o.unshift(Co(e,u,f)),u=Ys(e,n),u!=null&&o.push(Co(e,u,f))),e.tag===3)return o;e=e.return}return[]}function pS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $0(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var C=a,V=C.alternate,se=C.stateNode;if(C=C.tag,V!==null&&V===o)break;C!==5&&C!==26&&C!==27||se===null||(V=se,u?(se=Ys(a,f),se!=null&&S.unshift(Co(a,se,V))):u||(se=Ys(a,f),se!=null&&S.push(Co(a,se,V)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var mS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function eg(e){return(typeof e=="string"?e:""+e).replace(mS,`
`).replace(gS,"")}function tg(e,n){return n=eg(n),eg(e)===n}function kt(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(e,""+o);break;case"className":it(e,"class",o);break;case"tabIndex":it(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":it(e,a,o);break;case"style":zr(e,o,f);break;case"data":if(n!=="object"){it(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&kt(e,n,"name",u.name,u,null),kt(e,n,"formEncType",u.formEncType,u,null),kt(e,n,"formMethod",u.formMethod,u,null),kt(e,n,"formTarget",u.formTarget,u,null)):(kt(e,n,"encType",u.encType,u,null),kt(e,n,"method",u.method,u,null),kt(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=dl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wi);break;case"onScroll":o!=null&&Mt("scroll",e);break;case"onScrollEnd":o!=null&&Mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Mt("beforetoggle",e),Mt("toggle",e),Ye(e,"popover",o);break;case"xlinkActuate":Ze(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ze(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ze(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ze(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ze(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ze(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ze(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ze(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ze(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xv.get(a)||a,Ye(e,a,o))}}function Gf(e,n,a,o,u,f){switch(a){case"style":zr(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&Mt("scroll",e);break;case"onScrollEnd":o!=null&&Mt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ue.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ye(e,a,o)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",e),Mt("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(e,n,f,S,a,null)}}u&&kt(e,n,"srcSet",a.srcSet,a,null),o&&kt(e,n,"src",a.src,a,null);return;case"input":Mt("invalid",e);var C=f=S=u=null,V=null,se=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":u=me;break;case"type":S=me;break;case"checked":V=me;break;case"defaultChecked":se=me;break;case"value":f=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:kt(e,n,o,me,a,null)}}Xi(e,f,C,V,se,S,u,!1);return;case"select":Mt("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":S=C;break;case"multiple":o=C;default:kt(e,n,u,C,a,null)}n=f,a=S,e.multiple=!!o,n!=null?ai(e,!!o,n,!1):a!=null&&ai(e,!!o,a,!0);return;case"textarea":Mt("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(C=a[S],C!=null))switch(S){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:kt(e,n,S,C,a,null)}En(e,o,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:kt(e,n,V,o,a,null)}return;case"dialog":Mt("beforetoggle",e),Mt("toggle",e),Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":Mt("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)Mt(Ro[o],e);break;case"image":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"embed":case"source":case"link":Mt("error",e),Mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in a)if(a.hasOwnProperty(se)&&(o=a[se],o!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:kt(e,n,se,o,a,null)}return;default:if(xi(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Gf(e,n,me,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&kt(e,n,C,o,a,null))}function _S(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,C=null,V=null,se=null,me=null;for(fe in a){var Se=a[fe];if(a.hasOwnProperty(fe)&&Se!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":V=Se;default:o.hasOwnProperty(fe)||kt(e,n,fe,null,o,Se)}}for(var le in o){var fe=o[le];if(Se=a[le],o.hasOwnProperty(le)&&(fe!=null||Se!=null))switch(le){case"type":f=fe;break;case"name":u=fe;break;case"checked":se=fe;break;case"defaultChecked":me=fe;break;case"value":S=fe;break;case"defaultValue":C=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:fe!==Se&&kt(e,n,le,fe,o,Se)}}yn(e,S,C,V,se,me,f,u);return;case"select":fe=S=C=le=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":fe=V;default:o.hasOwnProperty(f)||kt(e,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":le=f;break;case"defaultValue":C=f;break;case"multiple":S=f;default:f!==V&&kt(e,n,u,f,o,V)}n=C,a=S,o=fe,le!=null?ai(e,!!a,le,!1):!!o!=!!a&&(n!=null?ai(e,!!a,n,!0):ai(e,!!a,a?[]:"",!1));return;case"textarea":fe=le=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:kt(e,n,C,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":le=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&kt(e,n,S,u,o,f)}Bt(e,le,fe);return;case"option":for(var je in a)if(le=a[je],a.hasOwnProperty(je)&&le!=null&&!o.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:kt(e,n,je,null,o,le)}for(V in o)if(le=o[V],fe=a[V],o.hasOwnProperty(V)&&le!==fe&&(le!=null||fe!=null))switch(V){case"selected":e.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:kt(e,n,V,le,o,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)le=a[rt],a.hasOwnProperty(rt)&&le!=null&&!o.hasOwnProperty(rt)&&kt(e,n,rt,null,o,le);for(se in o)if(le=o[se],fe=a[se],o.hasOwnProperty(se)&&le!==fe&&(le!=null||fe!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:kt(e,n,se,le,o,fe)}return;default:if(xi(n)){for(var Xt in a)le=a[Xt],a.hasOwnProperty(Xt)&&le!==void 0&&!o.hasOwnProperty(Xt)&&Gf(e,n,Xt,void 0,o,le);for(me in o)le=o[me],fe=a[me],!o.hasOwnProperty(me)||le===fe||le===void 0&&fe===void 0||Gf(e,n,me,le,o,fe);return}}for(var K in a)le=a[K],a.hasOwnProperty(K)&&le!=null&&!o.hasOwnProperty(K)&&kt(e,n,K,null,o,le);for(Se in o)le=o[Se],fe=a[Se],!o.hasOwnProperty(Se)||le===fe||le==null&&fe==null||kt(e,n,Se,le,o,fe)}function ng(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,S=u.initiatorType,C=u.duration;if(f&&C&&ng(S)){for(S=0,C=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],se=V.startTime;if(se>C)break;var me=V.transferSize,Se=V.initiatorType;me&&ng(Se)&&(V=V.responseEnd,S+=me*(V<C?1:(C-se)/(V-se)))}if(--o,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vf=null,kf=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function ig(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ag(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function xS(){var e=window.event;return e&&e.type==="popstate"?e===Wf?!1:(Wf=e,!0):(Wf=null,!1)}var rg=typeof setTimeout=="function"?setTimeout:void 0,SS=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(e){return sg.resolve(null).then(e).catch(MS)}:rg;function MS(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function og(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),gs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")wo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,wo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,C=f.nodeName;f[rr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&wo(e.ownerDocument.body);a=u}while(a);gs(n)}function lg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),js(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ES(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[rr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function bS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function cg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function jf(e){return e.data==="$?"||e.data==="$~"}function Yf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function TS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zf=null;function ug(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function fg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function dg(e,n,a){switch(n=oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function wo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);js(e)}var di=new Map,hg=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=G.d;G.d={f:AS,r:RS,D:CS,C:wS,L:DS,m:US,X:LS,S:NS,M:OS};function AS(){var e=oa.f(),n=$l();return e||n}function RS(e){var n=ba(e);n!==null&&n.tag===5&&n.type==="form"?Dm(n):oa.r(e)}var hs=typeof document>"u"?null:document;function pg(e,n,a){var o=hs;if(o&&typeof n=="string"&&n){var u=lt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),hg.has(u)||(hg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",e),D(n),o.head.appendChild(n)))}}function CS(e){oa.D(e),pg("dns-prefetch",e,null)}function wS(e,n){oa.C(e,n),pg("preconnect",e,n)}function DS(e,n,a){oa.L(e,n,a);var o=hs;if(o&&e&&n){var u='link[rel="preload"][as="'+lt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+lt(a.imageSizes)+'"]')):u+='[href="'+lt(e)+'"]';var f=u;switch(n){case"style":f=ps(e);break;case"script":f=ms(e)}di.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Do(f))||n==="script"&&o.querySelector(Uo(f))||(n=o.createElement("link"),wn(n,"link",e),D(n),o.head.appendChild(n)))}}function US(e,n){oa.m(e,n);var a=hs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+lt(o)+'"][href="'+lt(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ms(e)}if(!di.has(f)&&(e=g({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}o=a.createElement("link"),wn(o,"link",e),D(o),a.head.appendChild(o)}}}function NS(e,n,a){oa.S(e,n,a);var o=hs;if(o&&e){var u=Ta(o).hoistableStyles,f=ps(e);n=n||"default";var S=u.get(f);if(!S){var C={loading:0,preload:null};if(S=o.querySelector(Do(f)))C.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Kf(e,a);var V=S=o.createElement("link");D(V),wn(V,"link",e),V._p=new Promise(function(se,me){V.onload=se,V.onerror=me}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,cc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:C},u.set(f,S)}}}function LS(e,n){oa.X(e,n);var a=hs;if(a&&e){var o=Ta(a).hoistableScripts,u=ms(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=g({src:e,async:!0},n),(n=di.get(u))&&Qf(e,n),f=a.createElement("script"),D(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function OS(e,n){oa.M(e,n);var a=hs;if(a&&e){var o=Ta(a).hoistableScripts,u=ms(e),f=o.get(u);f||(f=a.querySelector(Uo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=di.get(u))&&Qf(e,n),f=a.createElement("script"),D(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function mg(e,n,a,o){var u=(u=Q.current)?lc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ps(a.href),a=Ta(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ps(a.href);var f=Ta(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Do(e)))&&!f._p&&(S.instance=f,S.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||PS(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ms(a),a=Ta(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ps(e){return'href="'+lt(e)+'"'}function Do(e){return'link[rel="stylesheet"]['+e+"]"}function gg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function PS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),D(n),e.head.appendChild(n))}function ms(e){return'[src="'+lt(e)+'"]'}function Uo(e){return"script[async]"+e}function _g(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+lt(a.href)+'"]');if(o)return n.instance=o,D(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),D(o),wn(o,"style",u),cc(o,a.precedence,e),n.instance=o;case"stylesheet":u=ps(a.href);var f=e.querySelector(Do(u));if(f)return n.state.loading|=4,n.instance=f,D(f),f;o=gg(a),(u=di.get(u))&&Kf(o,u),f=(e.ownerDocument||e).createElement("link"),D(f);var S=f;return S._p=new Promise(function(C,V){S.onload=C,S.onerror=V}),wn(f,"link",o),n.state.loading|=4,cc(f,a.precedence,e),n.instance=f;case"script":return f=ms(a.src),(u=e.querySelector(Uo(f)))?(n.instance=u,D(u),u):(o=a,(u=di.get(f))&&(o=g({},a),Qf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),D(u),wn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,cc(o,a.precedence,e));return n.instance}function cc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var C=o[S];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function vg(e,n,a){if(uc===null){var o=new Map,u=uc=new Map;u.set(a,o)}else u=uc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[rr]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var C=o.get(S);C?C.push(f):o.set(S,[f])}}return o}function xg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function FS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Sg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function IS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ps(o.href),f=n.querySelector(Do(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,D(f);return}f=n.ownerDocument||n,o=gg(o),(u=di.get(u))&&Kf(o,u),f=f.createElement("link"),D(f);var S=f;S._p=new Promise(function(C,V){S.onload=C,S.onerror=V}),wn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Jf=0;function BS(e,n){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Jf===0&&(Jf=62500*vS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,n.forEach(zS,e),dc=null,fc.call(e))}function zS(e,n){if(!(n.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=fc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var No={$$typeof:L,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function HS(e,n,a,o,u,f,S,C,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function yg(e,n,a,o,u,f,S,C,V,se,me,Se){return e=new HS(e,n,a,S,V,se,me,Se,C),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=Du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ou(f),e}function Mg(e){return e?(e=qr,e):qr}function Eg(e,n,a,o,u,f){u=Mg(u),o.context===null?o.context=u:o.pendingContext=u,o=Na(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=La(e,o,n),a!==null&&(kn(a,e,n),co(a,e,n))}function bg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function $f(e,n){bg(e,n),(e=e.alternate)&&bg(e,n)}function Tg(e){if(e.tag===13||e.tag===31){var n=ur(e,67108864);n!==null&&kn(n,e,67108864),$f(e,67108864)}}function Ag(e){if(e.tag===13||e.tag===31){var n=Jn();n=Xs(n);var a=ur(e,n);a!==null&&kn(a,e,n),$f(e,n)}}var pc=!0;function GS(e,n,a,o){var u=B.T;B.T=null;var f=G.p;try{G.p=2,ed(e,n,a,o)}finally{G.p=f,B.T=u}}function VS(e,n,a,o){var u=B.T;B.T=null;var f=G.p;try{G.p=8,ed(e,n,a,o)}finally{G.p=f,B.T=u}}function ed(e,n,a,o){if(pc){var u=td(o);if(u===null)Hf(e,n,o,mc,a),Cg(e,o);else if(XS(u,e,n,a,o))o.stopPropagation();else if(Cg(e,o),n&4&&-1<kS.indexOf(e)){for(;u!==null;){var f=ba(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Te(f.pendingLanes);if(S!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var V=1<<31-Pe(S);C.entanglements[1]|=V,S&=~V}Oi(f),(Pt&6)===0&&(Ql=E()+500,Ao(0))}}break;case 31:case 13:C=ur(f,2),C!==null&&kn(C,f,2),$l(),$f(f,2)}if(f=td(o),f===null&&Hf(e,n,o,mc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Hf(e,n,o,null,a)}}function td(e){return e=nu(e),nd(e)}var mc=null;function nd(e){if(mc=null,e=Ea(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function Rg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case pe:return 2;case ye:return 8;case he:case ke:return 32;case Re:return 268435456;default:return 32}default:return 32}}var id=!1,Xa=null,Wa=null,qa=null,Lo=new Map,Oo=new Map,ja=[],kS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cg(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ba(n),n!==null&&Tg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function XS(e,n,a,o,u){switch(n){case"focusin":return Xa=Po(Xa,e,n,a,o,u),!0;case"dragenter":return Wa=Po(Wa,e,n,a,o,u),!0;case"mouseover":return qa=Po(qa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Lo.set(f,Po(Lo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Oo.set(f,Po(Oo.get(f)||null,e,n,a,o,u)),!0}return!1}function wg(e){var n=Ea(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Di(e.priority,function(){Ag(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Di(e.priority,function(){Ag(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=td(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);tu=o,a.target.dispatchEvent(o),tu=null}else return n=ba(a),n!==null&&Tg(n),e.blockedOn=a,!1;n.shift()}return!0}function Dg(e,n,a){gc(e)&&a.delete(n)}function WS(){id=!1,Xa!==null&&gc(Xa)&&(Xa=null),Wa!==null&&gc(Wa)&&(Wa=null),qa!==null&&gc(qa)&&(qa=null),Lo.forEach(Dg),Oo.forEach(Dg)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,id||(id=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,WS)))}var vc=null;function Ug(e){vc!==e&&(vc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(nd(o||a)===null)continue;break}var f=ba(a);f!==null&&(e.splice(n,3),n-=3,ef(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function gs(e){function n(V){return _c(V,e)}Xa!==null&&_c(Xa,e),Wa!==null&&_c(Wa,e),qa!==null&&_c(qa,e),Lo.forEach(n),Oo.forEach(n);for(var a=0;a<ja.length;a++){var o=ja[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)wg(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[Sn]||null;if(typeof f=="function")S||Ug(a);else if(S){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Sn]||null)C=S.formAction;else if(nd(u)!==null)continue}else C=S.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),Ug(a)}}}function Ng(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ad(e){this._internalRoot=e}xc.prototype.render=ad.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Jn();Eg(a,o,e,n,null,null)},xc.prototype.unmount=ad.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Eg(e.current,2,null,e,null,null),$l(),n[vi]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ws();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,e),a===0&&wg(e)}};var Lg=t.version;if(Lg!=="19.2.4")throw Error(r(527,Lg,"19.2.4"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var qS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{Ee=Sc.inject(qS),Ce=Sc}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Hm,f=Gm,S=Vm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=yg(e,1,!1,null,null,a,o,null,u,f,S,Ng),e[vi]=n.current,zf(e),new ad(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=Hm,S=Gm,C=Vm,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=yg(e,1,!0,n,a??null,o,u,V,f,S,C,Ng),n.context=Mg(null),a=n.current,o=Jn(),o=Xs(o),u=Na(o),u.callback=null,La(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Oi(n),e[vi]=n.current,zf(e),new xc(n)},Io.version="19.2.4",Io}var kg;function iy(){if(kg)return od.exports;kg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),od.exports=ny(),od.exports}var ay=iy();const ry=nv(ay);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="182",sy=0,Xg=1,oy=2,Vc=1,ly=2,Zo=3,ar=0,Wn=1,Ii=2,ma=0,Ls=1,Wg=2,qg=3,jg=4,cy=5,Dr=100,uy=101,fy=102,dy=103,hy=104,py=200,my=201,gy=202,_y=203,jd=204,Yd=205,vy=206,xy=207,Sy=208,yy=209,My=210,Ey=211,by=212,Ty=213,Ay=214,Zd=0,Kd=1,Qd=2,Ps=3,Jd=4,$d=5,eh=6,th=7,iv=0,Ry=1,Cy=2,Hi=0,av=1,rv=2,sv=3,ov=4,lv=5,cv=6,uv=7,fv=300,Or=301,Fs=302,nh=303,ih=304,Kc=306,ah=1e3,ti=1001,rh=1002,Dn=1003,wy=1004,yc=1005,dn=1006,fd=1007,Nr=1008,mi=1009,dv=1010,hv=1011,$o=1012,Xh=1013,ki=1014,Bi=1015,xa=1016,Wh=1017,qh=1018,el=1020,pv=35902,mv=35899,gv=1021,_v=1022,Ci=1023,Sa=1026,Lr=1027,vv=1028,jh=1029,Is=1030,Yh=1031,Zh=1033,kc=33776,Xc=33777,Wc=33778,qc=33779,sh=35840,oh=35841,lh=35842,ch=35843,uh=36196,fh=37492,dh=37496,hh=37488,ph=37489,mh=37490,gh=37491,_h=37808,vh=37809,xh=37810,Sh=37811,yh=37812,Mh=37813,Eh=37814,bh=37815,Th=37816,Ah=37817,Rh=37818,Ch=37819,wh=37820,Dh=37821,Uh=36492,Nh=36494,Lh=36495,Oh=36283,Ph=36284,Fh=36285,Ih=36286,Dy=3200,Uy=0,Ny=1,nr="",pi="srgb",Bs="srgb-linear",Yc="linear",Gt="srgb",_s=7680,Yg=519,Ly=512,Oy=513,Py=514,Kh=515,Fy=516,Iy=517,Qh=518,By=519,Zg=35044,Kg="300 es",zi=2e3,Zc=2001;function xv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zy(){const s=tl("canvas");return s.style.display="block",s}const Qg={};function Jg(...s){const t="THREE."+s.shift();console.log(t,...s)}function dt(...s){const t="THREE."+s.shift();console.warn(t,...s)}function Ut(...s){const t="THREE."+s.shift();console.error(t,...s)}function nl(...s){const t=s.join(" ");t in Qg||(Qg[t]=!0,dt(...s))}function Hy(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Bh=180/Math.PI;function sl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function At(s,t,i){return Math.max(t,Math.min(i,s))}function Gy(s,t){return(s%t+t)%t}function hd(s,t,i){return(1-i)*s+i*t}function Bo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,i=0){Nt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(At(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ol{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],v=c[d+0],y=c[d+1],b=c[d+2],T=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(h>=1){t[i+0]=v,t[i+1]=y,t[i+2]=b,t[i+3]=T;return}if(g!==T||m!==v||p!==y||_!==b){let M=m*v+p*y+_*b+g*T;M<0&&(v=-v,y=-y,b=-b,T=-T,M=-M);let x=1-h;if(M<.9995){const F=Math.acos(M),L=Math.sin(F);x=Math.sin(x*F)/L,h=Math.sin(h*F)/L,m=m*x+v*h,p=p*x+y*h,_=_*x+b*h,g=g*x+T*h}else{m=m*x+v*h,p=p*x+y*h,_=_*x+b*h,g=g*x+T*h;const F=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=F,p*=F,_*=F,g*=F}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[d],v=c[d+1],y=c[d+2],b=c[d+3];return t[i]=h*b+_*g+m*y-p*v,t[i+1]=m*b+_*v+p*g-h*y,t[i+2]=p*b+_*y+h*v-m*g,t[i+3]=_*b-h*g-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),g=h(c/2),v=m(r/2),y=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"YXZ":this._x=v*_*g+p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"ZXY":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g-v*y*b;break;case"ZYX":this._x=v*_*g-p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g+v*y*b;break;case"YZX":this._x=v*_*g+p*y*b,this._y=p*y*g+v*_*b,this._z=p*_*b-v*y*g,this._w=p*_*g-v*y*b;break;case"XZY":this._x=v*_*g-p*y*b,this._y=p*y*g-v*_*b,this._z=p*_*b+v*y*g,this._w=p*_*g+v*y*b;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],v=r+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(At(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-c*m,this._y=l*_+d*m+c*h-r*p,this._z=c*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(t=0,i=0,r=0){ce.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($g.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($g.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),_=2*(h*i-c*l),g=2*(c*r-d*i);return this.x=i+m*p+d*g-h*_,this.y=r+m*_+h*p-c*g,this.z=l+m*g+c*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this.z=At(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this.z=At(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return pd.copy(this).projectOnVector(t),this.sub(pd)}reflect(t){return this.sub(pd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(At(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new ce,$g=new ol;class vt{constructor(t,i,r,l,c,d,h,m,p){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],g=r[7],v=r[2],y=r[5],b=r[8],T=l[0],M=l[3],x=l[6],F=l[1],L=l[4],N=l[7],P=l[2],R=l[5],U=l[8];return c[0]=d*T+h*F+m*P,c[3]=d*M+h*L+m*R,c[6]=d*x+h*N+m*U,c[1]=p*T+_*F+g*P,c[4]=p*M+_*L+g*R,c[7]=p*x+_*N+g*U,c[2]=v*T+y*F+b*P,c[5]=v*M+y*L+b*R,c[8]=v*x+y*N+b*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-r*c*_+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*d-h*p,v=h*m-_*c,y=p*c-d*m,b=i*g+r*v+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=g*T,t[1]=(l*p-_*r)*T,t[2]=(h*r-l*d)*T,t[3]=v*T,t[4]=(_*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=y*T,t[7]=(r*m-p*i)*T,t[8]=(d*i-r*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(md.makeScale(t,i)),this}rotate(t){return this.premultiply(md.makeRotation(-t)),this}translate(t,i){return this.premultiply(md.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const md=new vt,e_=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t_=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vy(){const s={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Gt&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Gt&&(l.r=Os(l.r),l.g=Os(l.g),l.b=Os(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===nr?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return nl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return nl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Bs]:{primaries:t,whitePoint:r,transfer:Yc,toXYZ:e_,fromXYZ:t_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:Gt,toXYZ:e_,fromXYZ:t_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const Ct=Vy();function ga(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class ky{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{vs===void 0&&(vs=tl("canvas")),vs.width=t.width,vs.height=t.height;const l=vs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=tl("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ga(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:t.width,height:t.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xy=0;class Jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=sl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(gd(l[d].image)):c.push(gd(l[d]))}else c=gd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function gd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ky.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let Wy=0;const _d=new ce;class Un extends Hs{constructor(t=Un.DEFAULT_IMAGE,i=Un.DEFAULT_MAPPING,r=ti,l=ti,c=dn,d=Nr,h=Ci,m=mi,p=Un.DEFAULT_ANISOTROPY,_=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=sl(),this.name="",this.source=new Jh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){dt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ah:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ah:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=fv;Un.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],v=m[1],y=m[5],b=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(_-v)<.01&&Math.abs(g-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(y+1)/2,P=(x+1)/2,R=(_+v)/4,U=(g+T)/4,z=(b+M)/4;return L>N&&L>P?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=R/r,c=U/r):N>P?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=R/l,c=z/l):P<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),r=U/c,l=z/c),this.set(r,l,c,i),this}let F=Math.sqrt((M-b)*(M-b)+(g-T)*(g-T)+(v-_)*(v-_));return Math.abs(F)<.001&&(F=1),this.x=(M-b)/F,this.y=(g-T)/F,this.z=(v-_)/F,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this.z=At(this.z,t.z,i.z),this.w=At(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this.z=At(this.z,t,i),this.w=At(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qy extends Hs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Un(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Jh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends qy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Sv extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jy extends Un{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ll{constructor(t=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ei):Ei.fromBufferAttribute(c,d),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mc.copy(r.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),Ec.subVectors(this.max,zo),xs.subVectors(t.a,zo),Ss.subVectors(t.b,zo),ys.subVectors(t.c,zo),Za.subVectors(Ss,xs),Ka.subVectors(ys,Ss),Er.subVectors(xs,ys);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Er.z,Er.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Er.z,0,-Er.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Er.y,Er.x,0];return!vd(i,xs,Ss,ys,Ec)||(i=[1,0,0,0,1,0,0,0,1],!vd(i,xs,Ss,ys,Ec))?!1:(bc.crossVectors(Za,Ka),i=[bc.x,bc.y,bc.z],vd(i,xs,Ss,ys,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(la),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const la=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Ei=new ce,Mc=new ll,xs=new ce,Ss=new ce,ys=new ce,Za=new ce,Ka=new ce,Er=new ce,zo=new ce,Ec=new ce,bc=new ce,br=new ce;function vd(s,t,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){br.fromArray(s,c);const h=l.x*Math.abs(br.x)+l.y*Math.abs(br.y)+l.z*Math.abs(br.z),m=t.dot(br),p=i.dot(br),_=r.dot(br);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Yy=new ll,Ho=new ce,xd=new ce;class $h{constructor(t=new ce,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Yy.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ho.subVectors(t,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ho,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ho.copy(t.center).add(xd)),this.expandByPoint(Ho.copy(t.center).sub(xd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ca=new ce,Sd=new ce,Tc=new ce,Qa=new ce,yd=new ce,Ac=new ce,Md=new ce;class Zy{constructor(t=new ce,i=new ce(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Sd.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),Qa.copy(this.origin).sub(Sd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Tc),h=Qa.dot(this.direction),m=-Qa.dot(Tc),p=Qa.lengthSq(),_=Math.abs(1-d*d);let g,v,y,b;if(_>0)if(g=d*m-h,v=d*h-m,b=c*_,g>=0)if(v>=-b)if(v<=b){const T=1/_;g*=T,v*=T,y=g*(g+d*v+2*h)+v*(d*g+v+2*m)+p}else v=c,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*m)+p;else v<=-b?(g=Math.max(0,-(-d*c+h)),v=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+p):v<=b?(g=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(g=Math.max(0,-(d*c+h)),v=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+p);else v=d>0?-c:c,g=Math.max(0,-(d*v+h)),y=-g*g+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Sd).addScaledVector(Tc,v),y}intersectSphere(t,i){ca.subVectors(t.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),_>=0?(c=(t.min.y-v.y)*_,d=(t.max.y-v.y)*_):(c=(t.max.y-v.y)*_,d=(t.min.y-v.y)*_),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-v.z)*g,m=(t.max.z-v.z)*g):(h=(t.max.z-v.z)*g,m=(t.min.z-v.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ca)!==null}intersectTriangle(t,i,r,l,c){yd.subVectors(i,t),Ac.subVectors(r,t),Md.crossVectors(yd,Ac);let d=this.direction.dot(Md),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Qa.subVectors(this.origin,t);const m=h*this.direction.dot(Ac.crossVectors(Qa,Ac));if(m<0)return null;const p=h*this.direction.dot(yd.cross(Qa));if(p<0||m+p>d)return null;const _=-h*Qa.dot(Md);return _<0?null:this.at(_/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(t,i,r,l,c,d,h,m,p,_,g,v,y,b,T,M){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,_,g,v,y,b,T,M)}set(t,i,r,l,c,d,h,m,p,_,g,v,y,b,T,M){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=b,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/Ms.setFromMatrixColumn(t,0).length(),c=1/Ms.setFromMatrixColumn(t,1).length(),d=1/Ms.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=d*_,y=d*g,b=h*_,T=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=v-T*p,i[9]=-h*m,i[2]=T-v*p,i[6]=b+y*p,i[10]=d*m}else if(t.order==="YXZ"){const v=m*_,y=m*g,b=p*_,T=p*g;i[0]=v+T*h,i[4]=b*h-y,i[8]=d*p,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=y*h-b,i[6]=T+v*h,i[10]=d*m}else if(t.order==="ZXY"){const v=m*_,y=m*g,b=p*_,T=p*g;i[0]=v-T*h,i[4]=-d*g,i[8]=b+y*h,i[1]=y+b*h,i[5]=d*_,i[9]=T-v*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const v=d*_,y=d*g,b=h*_,T=h*g;i[0]=m*_,i[4]=b*p-y,i[8]=v*p+T,i[1]=m*g,i[5]=T*p+v,i[9]=y*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const v=d*m,y=d*p,b=h*m,T=h*p;i[0]=m*_,i[4]=T-v*g,i[8]=b*g+y,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=y*g+b,i[10]=v-T*g}else if(t.order==="XZY"){const v=d*m,y=d*p,b=h*m,T=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=v*g+T,i[5]=d*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=h*_,i[10]=T*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ky,t,Qy)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Ja.crossVectors(r,$n),Ja.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Ja.crossVectors(r,$n)),Ja.normalize(),Rc.crossVectors($n,Ja),l[0]=Ja.x,l[4]=Rc.x,l[8]=$n.x,l[1]=Ja.y,l[5]=Rc.y,l[9]=$n.y,l[2]=Ja.z,l[6]=Rc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],g=r[5],v=r[9],y=r[13],b=r[2],T=r[6],M=r[10],x=r[14],F=r[3],L=r[7],N=r[11],P=r[15],R=l[0],U=l[4],z=l[8],A=l[12],w=l[1],H=l[5],J=l[9],j=l[13],ie=l[2],te=l[6],B=l[10],G=l[14],ee=l[3],ve=l[7],ge=l[11],I=l[15];return c[0]=d*R+h*w+m*ie+p*ee,c[4]=d*U+h*H+m*te+p*ve,c[8]=d*z+h*J+m*B+p*ge,c[12]=d*A+h*j+m*G+p*I,c[1]=_*R+g*w+v*ie+y*ee,c[5]=_*U+g*H+v*te+y*ve,c[9]=_*z+g*J+v*B+y*ge,c[13]=_*A+g*j+v*G+y*I,c[2]=b*R+T*w+M*ie+x*ee,c[6]=b*U+T*H+M*te+x*ve,c[10]=b*z+T*J+M*B+x*ge,c[14]=b*A+T*j+M*G+x*I,c[3]=F*R+L*w+N*ie+P*ee,c[7]=F*U+L*H+N*te+P*ve,c[11]=F*z+L*J+N*B+P*ge,c[15]=F*A+L*j+N*G+P*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],v=t[10],y=t[14],b=t[3],T=t[7],M=t[11],x=t[15],F=m*y-p*v,L=h*y-p*g,N=h*v-m*g,P=d*y-p*_,R=d*v-m*_,U=d*g-h*_;return i*(T*F-M*L+x*N)-r*(b*F-M*P+x*R)+l*(b*L-T*P+x*U)-c*(b*N-T*R+M*U)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],v=t[10],y=t[11],b=t[12],T=t[13],M=t[14],x=t[15],F=g*M*p-T*v*p+T*m*y-h*M*y-g*m*x+h*v*x,L=b*v*p-_*M*p-b*m*y+d*M*y+_*m*x-d*v*x,N=_*T*p-b*g*p+b*h*y-d*T*y-_*h*x+d*g*x,P=b*g*m-_*T*m-b*h*v+d*T*v+_*h*M-d*g*M,R=i*F+r*L+l*N+c*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return t[0]=F*U,t[1]=(T*v*c-g*M*c-T*l*y+r*M*y+g*l*x-r*v*x)*U,t[2]=(h*M*c-T*m*c+T*l*p-r*M*p-h*l*x+r*m*x)*U,t[3]=(g*m*c-h*v*c-g*l*p+r*v*p+h*l*y-r*m*y)*U,t[4]=L*U,t[5]=(_*M*c-b*v*c+b*l*y-i*M*y-_*l*x+i*v*x)*U,t[6]=(b*m*c-d*M*c-b*l*p+i*M*p+d*l*x-i*m*x)*U,t[7]=(d*v*c-_*m*c+_*l*p-i*v*p-d*l*y+i*m*y)*U,t[8]=N*U,t[9]=(b*g*c-_*T*c-b*r*y+i*T*y+_*r*x-i*g*x)*U,t[10]=(d*T*c-b*h*c+b*r*p-i*T*p-d*r*x+i*h*x)*U,t[11]=(_*h*c-d*g*c-_*r*p+i*g*p+d*r*y-i*h*y)*U,t[12]=P*U,t[13]=(_*T*l-b*g*l+b*r*v-i*T*v-_*r*M+i*g*M)*U,t[14]=(b*h*l-d*T*l-b*r*m+i*T*m+d*r*M-i*h*M)*U,t[15]=(d*g*l-_*h*l+_*r*m-i*g*m-d*r*v+i*h*v)*U,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,_=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,_=d+d,g=h+h,v=c*p,y=c*_,b=c*g,T=d*_,M=d*g,x=h*g,F=m*p,L=m*_,N=m*g,P=r.x,R=r.y,U=r.z;return l[0]=(1-(T+x))*P,l[1]=(y+N)*P,l[2]=(b-L)*P,l[3]=0,l[4]=(y-N)*R,l[5]=(1-(v+x))*R,l[6]=(M+F)*R,l[7]=0,l[8]=(b+L)*U,l[9]=(M-F)*U,l[10]=(1-(v+T))*U,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Ms.set(l[0],l[1],l[2]).length();const d=Ms.set(l[4],l[5],l[6]).length(),h=Ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),bi.copy(this);const p=1/c,_=1/d,g=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=_,bi.elements[5]*=_,bi.elements[6]*=_,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,i.setFromRotationMatrix(bi),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=zi,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(r-l),v=(i+t)/(i-t),y=(r+l)/(r-l);let b,T;if(m)b=c/(d-c),T=d*c/(d-c);else if(h===zi)b=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===Zc)b=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=zi,m=!1){const p=this.elements,_=2/(i-t),g=2/(r-l),v=-(i+t)/(i-t),y=-(r+l)/(r-l);let b,T;if(m)b=1/(d-c),T=d/(d-c);else if(h===zi)b=-2/(d-c),T=-(d+c)/(d-c);else if(h===Zc)b=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ms=new ce,bi=new hn,Ky=new ce(0,0,0),Qy=new ce(1,1,1),Ja=new ce,Rc=new ce,$n=new ce,n_=new hn,i_=new ol;class ya{constructor(t=0,i=0,r=0,l=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return n_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(n_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return i_.setFromEuler(this),this.setFromQuaternion(i_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class yv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jy=0;const a_=new ce,Es=new ol,ua=new hn,Cc=new ce,Go=new ce,$y=new ce,eM=new ol,r_=new ce(1,0,0),s_=new ce(0,1,0),o_=new ce(0,0,1),l_={type:"added"},tM={type:"removed"},bs={type:"childadded",child:null},Ed={type:"childremoved",child:null};class ni extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const t=new ce,i=new ya,r=new ol,l=new ce(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new vt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(r_,t)}rotateY(t){return this.rotateOnAxis(s_,t)}rotateZ(t){return this.rotateOnAxis(o_,t)}translateOnAxis(t,i){return a_.copy(t).applyQuaternion(this.quaternion),this.position.add(a_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(r_,t)}translateY(t){return this.translateOnAxis(s_,t)}translateZ(t){return this.translateOnAxis(o_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Cc.copy(t):Cc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Go,Cc,this.up):ua.lookAt(Cc,Go,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),Es.setFromRotationMatrix(ua),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(l_),bs.child=t,this.dispatchEvent(bs),bs.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(tM),Ed.child=t,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(l_),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,t,$y),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,eM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),g=d(t.shapes),v=d(t.skeletons),y=d(t.animations),b=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new ce(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new ce,fa=new ce,bd=new ce,da=new ce,Ts=new ce,As=new ce,c_=new ce,Td=new ce,Ad=new ce,Rd=new ce,Cd=new rn,wd=new rn,Dd=new rn;class Ri{constructor(t=new ce,i=new ce,r=new ce){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ti.subVectors(l,i),fa.subVectors(r,i),bd.subVectors(t,i);const d=Ti.dot(Ti),h=Ti.dot(fa),m=Ti.dot(bd),p=fa.dot(fa),_=fa.dot(bd),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(p*m-h*_)*v,b=(d*_-h*m)*v;return c.set(1-y-b,b,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(d,da.y),m.addScaledVector(h,da.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Cd.setScalar(0),wd.setScalar(0),Dd.setScalar(0),Cd.fromBufferAttribute(t,i),wd.fromBufferAttribute(t,r),Dd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Cd,c.x),d.addScaledVector(wd,c.y),d.addScaledVector(Dd,c.z),d}static isFrontFacing(t,i,r,l){return Ti.subVectors(r,i),fa.subVectors(t,i),Ti.cross(fa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ti.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ri.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Ri.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;Ts.subVectors(l,r),As.subVectors(c,r),Td.subVectors(t,r);const m=Ts.dot(Td),p=As.dot(Td);if(m<=0&&p<=0)return i.copy(r);Ad.subVectors(t,l);const _=Ts.dot(Ad),g=As.dot(Ad);if(_>=0&&g<=_)return i.copy(l);const v=m*g-_*p;if(v<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(Ts,d);Rd.subVectors(t,c);const y=Ts.dot(Rd),b=As.dot(Rd);if(b>=0&&y<=b)return i.copy(c);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(As,h);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return c_.subVectors(c,l),h=(g-_)/(g-_+(y-b)),i.copy(l).addScaledVector(c_,h);const x=1/(M+T+v);return d=T*x,h=v*x,i.copy(r).addScaledVector(Ts,d).addScaledVector(As,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},wc={h:0,s:0,l:0};function Ud(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Wt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ct.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ct.workingColorSpace){if(t=Gy(t,1),i=At(i,0,1),r=At(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Ud(d,c,t+1/3),this.g=Ud(d,c,t),this.b=Ud(d,c,t-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function r(c){c!==void 0&&parseFloat(c)<1&&dt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:dt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const r=Mv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Ct.workingToColorSpace(Pn.copy(this),t),Math.round(At(Pn.r*255,0,255))*65536+Math.round(At(Pn.g*255,0,255))*256+Math.round(At(Pn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ct.workingColorSpace){Ct.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=_<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ct.workingColorSpace){return Ct.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=pi){Ct.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,r=Pn.g,l=Pn.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL($a),this.setHSL($a.h+t,$a.s+i,$a.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL($a),t.getHSL(wc);const r=hd($a.h,wc.h,i),l=hd($a.s,wc.s,i),c=hd($a.l,wc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Wt;Wt.NAMES=Mv;let nM=0;class Qc extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=Ls,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Yd,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){dt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(r.blending=this.blending),this.side!==ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==jd&&(r.blendSrc=this.blendSrc),this.blendDst!==Yd&&(r.blendDst=this.blendDst),this.blendEquation!==Dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ev extends Qc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ya,this.combine=iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new ce,Dc=new Nt;let iM=0;class Vi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Zg,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Bo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Bo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Bo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Bo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zg&&(t.usage=this.usage),t}}class bv extends Vi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Tv extends Vi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class _a extends Vi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let aM=0;const hi=new hn,Nd=new ni,Rs=new ce,ei=new ll,Vo=new ll,xn=new ce;class Ma extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xv(t)?Tv:bv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new vt().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,r){return hi.makeTranslation(t,i,r),this.applyMatrix4(hi),this}scale(t,i,r){return hi.makeScale(t,i,r),this.applyMatrix4(hi),this}lookAt(t){return Nd.lookAt(t),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new _a(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $h);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Vo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(ei.min,Vo.min),ei.expandByPoint(xn),xn.addVectors(ei.max,Vo.max),ei.expandByPoint(xn)):(ei.expandByPoint(Vo.min),ei.expandByPoint(Vo.max))}ei.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)xn.fromBufferAttribute(h,p),m&&(Rs.fromBufferAttribute(t,p),xn.add(Rs)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let z=0;z<r.count;z++)h[z]=new ce,m[z]=new ce;const p=new ce,_=new ce,g=new ce,v=new Nt,y=new Nt,b=new Nt,T=new ce,M=new ce;function x(z,A,w){p.fromBufferAttribute(r,z),_.fromBufferAttribute(r,A),g.fromBufferAttribute(r,w),v.fromBufferAttribute(c,z),y.fromBufferAttribute(c,A),b.fromBufferAttribute(c,w),_.sub(p),g.sub(p),y.sub(v),b.sub(v);const H=1/(y.x*b.y-b.x*y.y);isFinite(H)&&(T.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(H),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(H),h[z].add(T),h[A].add(T),h[w].add(T),m[z].add(M),m[A].add(M),m[w].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let z=0,A=F.length;z<A;++z){const w=F[z],H=w.start,J=w.count;for(let j=H,ie=H+J;j<ie;j+=3)x(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const L=new ce,N=new ce,P=new ce,R=new ce;function U(z){P.fromBufferAttribute(l,z),R.copy(P);const A=h[z];L.copy(A),L.sub(P.multiplyScalar(P.dot(A))).normalize(),N.crossVectors(R,A);const H=N.dot(m[z])<0?-1:1;d.setXYZW(z,L.x,L.y,L.z,H)}for(let z=0,A=F.length;z<A;++z){const w=F[z],H=w.start,J=w.count;for(let j=H,ie=H+J;j<ie;j+=3)U(t.getX(j+0)),U(t.getX(j+1)),U(t.getX(j+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new ce,c=new ce,d=new ce,h=new ce,m=new ce,p=new ce,_=new ce,g=new ce;if(t)for(let v=0,y=t.count;v<y;v+=3){const b=t.getX(v+0),T=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),_.subVectors(d,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),h.add(_),m.add(_),p.add(_),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),_.subVectors(d,c),g.subVectors(l,c),_.cross(g),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,v=new p.constructor(m.length*_);let y=0,b=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*_;for(let x=0;x<_;x++)v[b++]=p[y++]}return new Vi(v,_,g)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ma,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=t(v,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u_=new hn,Tr=new Zy,Uc=new $h,f_=new ce,Nc=new ce,Lc=new ce,Oc=new ce,Ld=new ce,Pc=new ce,d_=new ce,Fc=new ce;class wi extends ni{constructor(t=new Ma,i=new Ev){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(Ld.fromBufferAttribute(g,t),d?Pc.addScaledVector(Ld,_):Pc.addScaledVector(Ld.sub(i),_))}i.add(Pc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(c),Tr.copy(t.ray).recast(t.near),!(Uc.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Uc,f_)===null||Tr.origin.distanceToSquared(f_)>(t.far-t.near)**2))&&(u_.copy(c).invert(),Tr.copy(t.ray).applyMatrix4(u_),!(r.boundingBox!==null&&Tr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Tr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,T=v.length;b<T;b++){const M=v[b],x=d[M.materialIndex],F=Math.max(M.start,y.start),L=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let N=F,P=L;N<P;N+=3){const R=h.getX(N),U=h.getX(N+1),z=h.getX(N+2);l=Ic(this,x,t,r,p,_,g,R,U,z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const F=h.getX(M),L=h.getX(M+1),N=h.getX(M+2);l=Ic(this,d,t,r,p,_,g,F,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,T=v.length;b<T;b++){const M=v[b],x=d[M.materialIndex],F=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let N=F,P=L;N<P;N+=3){const R=N,U=N+1,z=N+2;l=Ic(this,x,t,r,p,_,g,R,U,z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=b,x=T;M<x;M+=3){const F=M,L=M+1,N=M+2;l=Ic(this,d,t,r,p,_,g,F,L,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function rM(s,t,i,r,l,c,d,h){let m;if(t.side===Wn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===ar,h),m===null)return null;Fc.copy(h),Fc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:s}}function Ic(s,t,i,r,l,c,d,h,m,p){s.getVertexPosition(h,Nc),s.getVertexPosition(m,Lc),s.getVertexPosition(p,Oc);const _=rM(s,t,i,r,Nc,Lc,Oc,d_);if(_){const g=new ce;Ri.getBarycoord(d_,Nc,Lc,Oc,g),l&&(_.uv=Ri.getInterpolatedAttribute(l,h,m,p,g,new Nt)),c&&(_.uv1=Ri.getInterpolatedAttribute(c,h,m,p,g,new Nt)),d&&(_.normal=Ri.getInterpolatedAttribute(d,h,m,p,g,new ce),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new ce,materialIndex:0};Ri.getNormal(Nc,Lc,Oc,v.normal),_.face=v,_.barycoord=g}return _}class cl extends Ma{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],_=[],g=[];let v=0,y=0;b("z","y","x",-1,-1,r,i,t,d,c,0),b("z","y","x",1,-1,r,i,-t,d,c,1),b("x","z","y",1,1,t,r,i,l,d,2),b("x","z","y",1,-1,t,r,-i,l,d,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new _a(p,3)),this.setAttribute("normal",new _a(_,3)),this.setAttribute("uv",new _a(g,2));function b(T,M,x,F,L,N,P,R,U,z,A){const w=N/U,H=P/z,J=N/2,j=P/2,ie=R/2,te=U+1,B=z+1;let G=0,ee=0;const ve=new ce;for(let ge=0;ge<B;ge++){const I=ge*H-j;for(let ne=0;ne<te;ne++){const _e=ne*w-J;ve[T]=_e*F,ve[M]=I*L,ve[x]=ie,p.push(ve.x,ve.y,ve.z),ve[T]=0,ve[M]=0,ve[x]=R>0?1:-1,_.push(ve.x,ve.y,ve.z),g.push(ne/U),g.push(1-ge/z),G+=1}}for(let ge=0;ge<z;ge++)for(let I=0;I<U;I++){const ne=v+I+te*ge,_e=v+I+te*(ge+1),de=v+(I+1)+te*(ge+1),be=v+(I+1)+te*ge;m.push(ne,_e,be),m.push(_e,de,be),ee+=6}h.addGroup(y,ee,A),y+=ee,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function In(s){const t={};for(let i=0;i<s.length;i++){const r=zs(s[i]);for(const l in r)t[l]=r[l]}return t}function sM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Av(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ct.workingColorSpace}const oM={clone:zs,merge:In};var lM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Qc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=sM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Rv extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new ce,h_=new Nt,p_=new Nt;class Ai extends Rv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Bh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bh*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,i){return this.getViewBounds(t,h_,p_),i.subVectors(p_,h_)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Cs=-90,ws=1;class uM extends ni{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(Cs,ws,t,i);l.layers=this.layers,this.add(l);const c=new Ai(Cs,ws,t,i);c.layers=this.layers,this.add(c);const d=new Ai(Cs,ws,t,i);d.layers=this.layers,this.add(d);const h=new Ai(Cs,ws,t,i);h.layers=this.layers,this.add(h);const m=new Ai(Cs,ws,t,i);m.layers=this.layers,this.add(m);const p=new Ai(Cs,ws,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Zc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,v,y),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Cv extends Un{constructor(t=[],i=Or,r,l,c,d,h,m,p,_){super(t,i,r,l,c,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wv extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Cv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ma});c.uniforms.tEquirect.value=i;const d=new wi(l,c),h=i.minFilter;return i.minFilter===Nr&&(i.minFilter=dn),new uM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class Ko extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,r),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&v>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Ko;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Dv extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ya,this.environmentIntensity=1,this.environmentRotation=new ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class dM extends Un{constructor(t=null,i=1,r=1,l,c,d,h,m,p=Dn,_=Dn,g,v){super(null,d,h,m,p,_,l,c,g,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pd=new ce,hM=new ce,pM=new vt;class wr{constructor(t=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Pd.subVectors(r,i).cross(hM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Pd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||pM.getNormalMatrix(t),l=this.coplanarPoint(Pd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new $h,mM=new Nt(.5,.5),Bc=new ce;class Uv{constructor(t=new wr,i=new wr,r=new wr,l=new wr,c=new wr,d=new wr){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=zi,r=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],v=c[6],y=c[7],b=c[8],T=c[9],M=c[10],x=c[11],F=c[12],L=c[13],N=c[14],P=c[15];if(l[0].setComponents(p-d,y-_,x-b,P-F).normalize(),l[1].setComponents(p+d,y+_,x+b,P+F).normalize(),l[2].setComponents(p+h,y+g,x+T,P+L).normalize(),l[3].setComponents(p-h,y-g,x-T,P-L).normalize(),r)l[4].setComponents(m,v,M,N).normalize(),l[5].setComponents(p-m,y-v,x-M,P-N).normalize();else if(l[4].setComponents(p-m,y-v,x-M,P-N).normalize(),i===zi)l[5].setComponents(p+m,y+v,x+M,P+N).normalize();else if(i===Zc)l[5].setComponents(m,v,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(t){Ar.center.set(0,0,0);const i=mM.distanceTo(t.center);return Ar.radius=.7071067811865476+i,Ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class m_ extends Un{constructor(t,i,r,l,c,d,h,m,p){super(t,i,r,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class il extends Un{constructor(t,i,r=ki,l,c,d,h=Dn,m=Dn,p,_=Sa,g=1){if(_!==Sa&&_!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:g};super(v,l,c,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gM extends il{constructor(t,i=ki,r=Or,l,c,d=Dn,h=Dn,m,p=Sa){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,r,l,c,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Nv extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gs extends Ma{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,g=t/h,v=i/m,y=[],b=[],T=[],M=[];for(let x=0;x<_;x++){const F=x*v-d;for(let L=0;L<p;L++){const N=L*g-c;b.push(N,-F,0),T.push(0,0,1),M.push(L/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<h;F++){const L=F+p*x,N=F+p*(x+1),P=F+1+p*(x+1),R=F+1+p*x;y.push(L,N,R),y.push(N,P,R)}this.setIndex(y),this.setAttribute("position",new _a(b,3)),this.setAttribute("normal",new _a(T,3)),this.setAttribute("uv",new _a(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.width,t.height,t.widthSegments,t.heightSegments)}}class _M extends gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vM extends Qc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xM extends Qc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fd={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class SM{constructor(t,i,r){const l=this;let c=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){h++,c===!1&&l.onStart!==void 0&&l.onStart(_,d,h),c=!0},this.itemEnd=function(_){d++,l.onProgress!==void 0&&l.onProgress(_,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,v=p.length;g<v;g+=2){const y=p[g],b=p[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yM=new SM;class ep{constructor(t){this.manager=t!==void 0?t:yM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ep.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ds=new WeakMap;class MM extends ep{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,d=Fd.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(d),c.manager.itemEnd(t)},0);else{let g=Ds.get(d);g===void 0&&(g=[],Ds.set(d,g)),g.push({onLoad:i,onError:l})}return d}const h=tl("img");function m(){_(),i&&i(this);const g=Ds.get(this)||[];for(let v=0;v<g.length;v++){const y=g[v];y.onLoad&&y.onLoad(this)}Ds.delete(this),c.manager.itemEnd(t)}function p(g){_(),l&&l(g),Fd.remove(`image:${t}`);const v=Ds.get(this)||[];for(let y=0;y<v.length;y++){const b=v[y];b.onError&&b.onError(g)}Ds.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Fd.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class EM extends ep{constructor(t){super(t)}load(t,i,r,l){const c=new Un,d=new MM(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(t,function(h){c.image=h,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class Jc extends Rv{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class bM extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class TM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function g_(s,t,i,r){const l=AM(r);switch(i){case gv:return s*t;case vv:return s*t/l.components*l.byteLength;case jh:return s*t/l.components*l.byteLength;case Is:return s*t*2/l.components*l.byteLength;case Yh:return s*t*2/l.components*l.byteLength;case _v:return s*t*3/l.components*l.byteLength;case Ci:return s*t*4/l.components*l.byteLength;case Zh:return s*t*4/l.components*l.byteLength;case kc:case Xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wc:case qc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oh:case ch:return Math.max(s,16)*Math.max(t,8)/4;case sh:case lh:return Math.max(s,8)*Math.max(t,8)/2;case uh:case fh:case hh:case ph:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case dh:case mh:case gh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _h:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case yh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case bh:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Th:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case wh:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Uh:case Nh:case Lh:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Oh:case Ph:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fh:case Ih:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AM(s){switch(s){case mi:case dv:return{byteLength:1,components:1};case $o:case hv:case xa:return{byteLength:2,components:1};case Wh:case qh:return{byteLength:2,components:4};case ki:case Xh:case Bi:return{byteLength:4,components:1};case pv:case mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lv(){let s=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function RM(s){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<g.length;y++){const b=g[v],T=g[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++v,g[v]=T)}g.length=v+1;for(let y=0,b=g.length;y<b;y++){const T=g[y];s.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
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
#endif`,DM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
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
#endif`,PM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FM=`#ifdef USE_BATCHING
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
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GM=`#ifdef USE_IRIDESCENCE
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
#endif`,VM=`#ifdef USE_BUMPMAP
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
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QM=`#define PI 3.141592653589793
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
} // validated`,JM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$M=`vec3 transformedNormal = objectNormal;
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
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aE="gl_FragColor = linearToOutputTexel( gl_FragColor );",rE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mE=`#ifdef USE_GRADIENTMAP
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
}`,gE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_E=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xE=`uniform bool receiveShadow;
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
#endif`,SE=`#ifdef USE_ENVMAP
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
#endif`,yE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
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
#endif`,AE=`uniform sampler2D dfgLUT;
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
}`,RE=`
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
#endif`,CE=`#if defined( RE_IndirectDiffuse )
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IE=`#if defined( USE_POINTS_UV )
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
#endif`,BE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`#ifdef USE_MORPHTARGETS
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
#endif`,XE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KE=`#ifdef USE_NORMALMAP
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
#endif`,QE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,db=`float getShadowMask() {
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
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,_b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#ifdef USE_TRANSMISSION
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cb=`uniform sampler2D t2D;
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`#include <common>
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
}`,Ob=`#if DEPTH_PACKING == 3200
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
}`,Pb=`#define DISTANCE
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
}`,Fb=`#define DISTANCE
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
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`uniform float scale;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Gb=`#include <common>
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
}`,Vb=`uniform vec3 diffuse;
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
}`,kb=`#define LAMBERT
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
}`,Xb=`#define LAMBERT
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
}`,Wb=`#define MATCAP
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
}`,qb=`#define MATCAP
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
}`,jb=`#define NORMAL
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
}`,Yb=`#define NORMAL
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
}`,Zb=`#define PHONG
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
}`,Kb=`#define PHONG
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
}`,Qb=`#define STANDARD
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
}`,Jb=`#define STANDARD
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
}`,$b=`#define TOON
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
}`,e1=`#define TOON
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
}`,t1=`uniform float size;
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#include <common>
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
}`,a1=`uniform vec3 color;
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
}`,r1=`uniform float rotation;
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
}`,s1=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:CM,alphahash_pars_fragment:wM,alphamap_fragment:DM,alphamap_pars_fragment:UM,alphatest_fragment:NM,alphatest_pars_fragment:LM,aomap_fragment:OM,aomap_pars_fragment:PM,batching_pars_vertex:FM,batching_vertex:IM,begin_vertex:BM,beginnormal_vertex:zM,bsdfs:HM,iridescence_fragment:GM,bumpmap_pars_fragment:VM,clipping_planes_fragment:kM,clipping_planes_pars_fragment:XM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:qM,color_fragment:jM,color_pars_fragment:YM,color_pars_vertex:ZM,color_vertex:KM,common:QM,cube_uv_reflection_fragment:JM,defaultnormal_vertex:$M,displacementmap_pars_vertex:eE,displacementmap_vertex:tE,emissivemap_fragment:nE,emissivemap_pars_fragment:iE,colorspace_fragment:aE,colorspace_pars_fragment:rE,envmap_fragment:sE,envmap_common_pars_fragment:oE,envmap_pars_fragment:lE,envmap_pars_vertex:cE,envmap_physical_pars_fragment:SE,envmap_vertex:uE,fog_vertex:fE,fog_pars_vertex:dE,fog_fragment:hE,fog_pars_fragment:pE,gradientmap_pars_fragment:mE,lightmap_pars_fragment:gE,lights_lambert_fragment:_E,lights_lambert_pars_fragment:vE,lights_pars_begin:xE,lights_toon_fragment:yE,lights_toon_pars_fragment:ME,lights_phong_fragment:EE,lights_phong_pars_fragment:bE,lights_physical_fragment:TE,lights_physical_pars_fragment:AE,lights_fragment_begin:RE,lights_fragment_maps:CE,lights_fragment_end:wE,logdepthbuf_fragment:DE,logdepthbuf_pars_fragment:UE,logdepthbuf_pars_vertex:NE,logdepthbuf_vertex:LE,map_fragment:OE,map_pars_fragment:PE,map_particle_fragment:FE,map_particle_pars_fragment:IE,metalnessmap_fragment:BE,metalnessmap_pars_fragment:zE,morphinstance_vertex:HE,morphcolor_vertex:GE,morphnormal_vertex:VE,morphtarget_pars_vertex:kE,morphtarget_vertex:XE,normal_fragment_begin:WE,normal_fragment_maps:qE,normal_pars_fragment:jE,normal_pars_vertex:YE,normal_vertex:ZE,normalmap_pars_fragment:KE,clearcoat_normal_fragment_begin:QE,clearcoat_normal_fragment_maps:JE,clearcoat_pars_fragment:$E,iridescence_pars_fragment:eb,opaque_fragment:tb,packing:nb,premultiplied_alpha_fragment:ib,project_vertex:ab,dithering_fragment:rb,dithering_pars_fragment:sb,roughnessmap_fragment:ob,roughnessmap_pars_fragment:lb,shadowmap_pars_fragment:cb,shadowmap_pars_vertex:ub,shadowmap_vertex:fb,shadowmask_pars_fragment:db,skinbase_vertex:hb,skinning_pars_vertex:pb,skinning_vertex:mb,skinnormal_vertex:gb,specularmap_fragment:_b,specularmap_pars_fragment:vb,tonemapping_fragment:xb,tonemapping_pars_fragment:Sb,transmission_fragment:yb,transmission_pars_fragment:Mb,uv_pars_fragment:Eb,uv_pars_vertex:bb,uv_vertex:Tb,worldpos_vertex:Ab,background_vert:Rb,background_frag:Cb,backgroundCube_vert:wb,backgroundCube_frag:Db,cube_vert:Ub,cube_frag:Nb,depth_vert:Lb,depth_frag:Ob,distance_vert:Pb,distance_frag:Fb,equirect_vert:Ib,equirect_frag:Bb,linedashed_vert:zb,linedashed_frag:Hb,meshbasic_vert:Gb,meshbasic_frag:Vb,meshlambert_vert:kb,meshlambert_frag:Xb,meshmatcap_vert:Wb,meshmatcap_frag:qb,meshnormal_vert:jb,meshnormal_frag:Yb,meshphong_vert:Zb,meshphong_frag:Kb,meshphysical_vert:Qb,meshphysical_frag:Jb,meshtoon_vert:$b,meshtoon_frag:e1,points_vert:t1,points_frag:n1,shadow_vert:i1,shadow_frag:a1,sprite_vert:r1,sprite_frag:s1},Fe={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Fi={basic:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Wt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:In([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:In([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Wt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:In([Fe.points,Fe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:In([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:In([Fe.common,Fe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:In([Fe.sprite,Fe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:In([Fe.common,Fe.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:In([Fe.lights,Fe.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Fi.physical={uniforms:In([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const zc={r:0,b:0,g:0},Rr=new ya,o1=new hn;function l1(s,t,i,r,l,c,d){const h=new Wt(0);let m=c===!0?0:1,p,_,g=null,v=0,y=null;function b(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?i:t).get(N)),N}function T(L){let N=!1;const P=b(L);P===null?x(h,m):P&&P.isColor&&(x(P,1),N=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,d):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,N){const P=b(N);P&&(P.isCubeTexture||P.mapping===Kc)?(_===void 0&&(_=new wi(new cl(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:zs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(R,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Rr.copy(N.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(o1.makeRotationFromEuler(Rr)),_.material.toneMapped=Ct.getTransfer(P.colorSpace)!==Gt,(g!==P||v!==P.version||y!==s.toneMapping)&&(_.material.needsUpdate=!0,g=P,v=P.version,y=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new wi(new Gs(2,2),new gi({name:"BackgroundMaterial",uniforms:zs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(P.colorSpace)!==Gt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=P,v=P.version,y=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,N){L.getRGB(zc,Av(s)),r.buffers.color.setClear(zc.r,zc.g,zc.b,N,d)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,N=1){h.set(L),m=N,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(h,m)},render:T,addToRenderList:M,dispose:F}}function c1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,d=!1;function h(w,H,J,j,ie){let te=!1;const B=g(j,J,H);c!==B&&(c=B,p(c.object)),te=y(w,j,J,ie),te&&b(w,j,J,ie),ie!==null&&t.update(ie,s.ELEMENT_ARRAY_BUFFER),(te||d)&&(d=!1,N(w,H,J,j),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function g(w,H,J){const j=J.wireframe===!0;let ie=r[w.id];ie===void 0&&(ie={},r[w.id]=ie);let te=ie[H.id];te===void 0&&(te={},ie[H.id]=te);let B=te[j];return B===void 0&&(B=v(m()),te[j]=B),B}function v(w){const H=[],J=[],j=[];for(let ie=0;ie<i;ie++)H[ie]=0,J[ie]=0,j[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:J,attributeDivisors:j,object:w,attributes:{},index:null}}function y(w,H,J,j){const ie=c.attributes,te=H.attributes;let B=0;const G=J.getAttributes();for(const ee in G)if(G[ee].location>=0){const ge=ie[ee];let I=te[ee];if(I===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(I=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(I=w.instanceColor)),ge===void 0||ge.attribute!==I||I&&ge.data!==I.data)return!0;B++}return c.attributesNum!==B||c.index!==j}function b(w,H,J,j){const ie={},te=H.attributes;let B=0;const G=J.getAttributes();for(const ee in G)if(G[ee].location>=0){let ge=te[ee];ge===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor));const I={};I.attribute=ge,ge&&ge.data&&(I.data=ge.data),ie[ee]=I,B++}c.attributes=ie,c.attributesNum=B,c.index=j}function T(){const w=c.newAttributes;for(let H=0,J=w.length;H<J;H++)w[H]=0}function M(w){x(w,0)}function x(w,H){const J=c.newAttributes,j=c.enabledAttributes,ie=c.attributeDivisors;J[w]=1,j[w]===0&&(s.enableVertexAttribArray(w),j[w]=1),ie[w]!==H&&(s.vertexAttribDivisor(w,H),ie[w]=H)}function F(){const w=c.newAttributes,H=c.enabledAttributes;for(let J=0,j=H.length;J<j;J++)H[J]!==w[J]&&(s.disableVertexAttribArray(J),H[J]=0)}function L(w,H,J,j,ie,te,B){B===!0?s.vertexAttribIPointer(w,H,J,ie,te):s.vertexAttribPointer(w,H,J,j,ie,te)}function N(w,H,J,j){T();const ie=j.attributes,te=J.getAttributes(),B=H.defaultAttributeValues;for(const G in te){const ee=te[G];if(ee.location>=0){let ve=ie[G];if(ve===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(ve=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(ve=w.instanceColor)),ve!==void 0){const ge=ve.normalized,I=ve.itemSize,ne=t.get(ve);if(ne===void 0)continue;const _e=ne.buffer,de=ne.type,be=ne.bytesPerElement,Q=de===s.INT||de===s.UNSIGNED_INT||ve.gpuType===Xh;if(ve.isInterleavedBufferAttribute){const ae=ve.data,Ae=ae.stride,He=ve.offset;if(ae.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ee.locationSize;Ge++)x(ee.location+Ge,ae.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ge=0;Ge<ee.locationSize;Ge++)M(ee.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Ge=0;Ge<ee.locationSize;Ge++)L(ee.location+Ge,I/ee.locationSize,de,ge,Ae*be,(He+I/ee.locationSize*Ge)*be,Q)}else{if(ve.isInstancedBufferAttribute){for(let ae=0;ae<ee.locationSize;ae++)x(ee.location+ae,ve.meshPerAttribute);w.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ae=0;ae<ee.locationSize;ae++)M(ee.location+ae);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let ae=0;ae<ee.locationSize;ae++)L(ee.location+ae,I/ee.locationSize,de,ge,I*be,I/ee.locationSize*ae*be,Q)}}else if(B!==void 0){const ge=B[G];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(ee.location,ge);break;case 3:s.vertexAttrib3fv(ee.location,ge);break;case 4:s.vertexAttrib4fv(ee.location,ge);break;default:s.vertexAttrib1fv(ee.location,ge)}}}}F()}function P(){z();for(const w in r){const H=r[w];for(const J in H){const j=H[J];for(const ie in j)_(j[ie].object),delete j[ie];delete H[J]}delete r[w]}}function R(w){if(r[w.id]===void 0)return;const H=r[w.id];for(const J in H){const j=H[J];for(const ie in j)_(j[ie].object),delete j[ie];delete H[J]}delete r[w.id]}function U(w){for(const H in r){const J=r[H];if(J[w.id]===void 0)continue;const j=J[w.id];for(const ie in j)_(j[ie].object),delete j[ie];delete J[w.id]}}function z(){A(),d=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:M,disableUnusedAttributes:F}}function u1(s,t,i){let r;function l(p){r=p}function c(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function h(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];i.update(y,r,1)}function m(p,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)d(p[b],_[b],v[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,v,0,g);let b=0;for(let T=0;T<g;T++)b+=_[T]*v[T];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function f1(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(U){return!(U!==Ci&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const z=U===xa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==mi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Bi&&!z)}function m(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(dt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),R=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:F,maxVaryings:L,maxFragmentUniforms:N,maxSamples:P,samples:R}}function d1(s){const t=this;let i=null,r=0,l=!1,c=!1;const d=new wr,h=new vt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||r!==0||l;return l=v,r=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,y){const b=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,x=s.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const F=c?0:r,L=F*4;let N=x.clippingState||null;m.value=N,N=_(b,v,L,y);for(let P=0;P!==L;++P)N[P]=i[P];x.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,v,y,b){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const x=y+T*4,F=v.matrixWorldInverse;h.getNormalMatrix(F),(M===null||M.length<x)&&(M=new Float32Array(x));for(let L=0,N=y;L!==T;++L,N+=4)d.copy(g[L]).applyMatrix4(F,h),d.normal.toArray(M,N),M[N+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function h1(s){let t=new WeakMap;function i(d,h){return h===nh?d.mapping=Or:h===ih&&(d.mapping=Fs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===nh||h===ih)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new wv(m.height);return p.fromEquirectangularTexture(s,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const ir=4,__=[.125,.215,.35,.446,.526,.582],Ur=20,p1=256,ko=new Jc,v_=new Wt;let Id=null,Bd=0,zd=0,Hd=!1;const m1=new ce;class x_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=m1}=c;Id=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Id,Bd,zd),this._renderer.xr.enabled=Hd,t.scissorTest=!1,Us(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Or||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Id=this._renderer.getRenderTarget(),Bd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:xa,format:Ci,colorSpace:Bs,depthBuffer:!1},l=S_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=g1(c)),this._blurMaterial=v1(c,t,i),this._ggxMaterial=_1(c,t,i)}return l}_compileMaterial(t){const i=new wi(new Ma,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,r,l,c){const m=new Ai(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(v_),g.toneMapping=Hi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wi(new cl,new Ev({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const F=t.background;F?F.isColor&&(M.color.copy(F),t.background=null,x=!0):(M.color.copy(v_),x=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):N===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const P=this._cubeSize;Us(l,N*P,L>2?P:0,P,P),g.setRenderTarget(l),x&&g.render(T,m),g.render(t,m)}g.toneMapping=y,g.autoClear=v,t.background=F}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Or||t.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=M_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Us(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,ko)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),v=0+p*1.25,y=g*v,{_lodMax:b}=this,T=this._sizeLods[r],M=3*T*(r>b-ir?r-b+ir:0),x=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,Us(c,M,x,3*T,2*T),l.setRenderTarget(c),l.render(h,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Us(t,M,x,3*T,2*T),l.setRenderTarget(t),l.render(h,ko)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const v=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Ur-1),T=c/b,M=isFinite(c)?1+Math.floor(_*T):Ur;M>Ur&&dt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ur}`);const x=[];let F=0;for(let U=0;U<Ur;++U){const z=U/T,A=Math.exp(-z*z/2);x.push(A),U===0?F+=A:U<M&&(F+=2*A)}for(let U=0;U<x.length;U++)x[U]=x[U]/F;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=b,v.mipInt.value=L-r;const N=this._sizeLods[l],P=3*N*(l>L-ir?l-L+ir:0),R=4*(this._cubeSize-N);Us(i,P,R,3*N,2*N),m.setRenderTarget(i),m.render(g,ko)}}function g1(s){const t=[],i=[],r=[];let l=s;const c=s-ir+1+__.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>s-ir?m=__[d-s+ir-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,T=3,M=2,x=1,F=new Float32Array(T*b*y),L=new Float32Array(M*b*y),N=new Float32Array(x*b*y);for(let R=0;R<y;R++){const U=R%3*2/3-1,z=R>2?0:-1,A=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];F.set(A,T*b*R),L.set(v,M*b*R);const w=[R,R,R,R,R,R];N.set(w,x*b*R)}const P=new Ma;P.setAttribute("position",new Vi(F,T)),P.setAttribute("uv",new Vi(L,M)),P.setAttribute("faceIndex",new Vi(N,x)),r.push(new wi(P,null)),l>ir&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function S_(s,t,i){const r=new Gi(s,t,i);return r.texture.mapping=Kc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Us(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function _1(s,t,i){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function v1(s,t,i){const r=new Float32Array(Ur),l=new ce(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$c(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function y_(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function M_(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function x1(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===nh||m===ih,_=m===Or||m===Fs;if(p||_){let g=t.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new x_(s)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new x_(s)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function S1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&nl("WebGLRenderer: "+r+" extension not supported."),l}}}function y1(s,t,i,r){const l={},c=new WeakMap;function d(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",d),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const y in v)t.update(v[y],s.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,b=g.attributes.position;let T=0;if(y!==null){const F=y.array;T=y.version;for(let L=0,N=F.length;L<N;L+=3){const P=F[L+0],R=F[L+1],U=F[L+2];v.push(P,R,R,U,U,P)}}else if(b!==void 0){const F=b.array;T=b.version;for(let L=0,N=F.length/3-1;L<N;L+=3){const P=L+0,R=L+1,U=L+2;v.push(P,R,R,U,U,P)}}else return;const M=new(xv(v)?Tv:bv)(v,1);M.version=T;const x=c.get(g);x&&t.remove(x),c.set(g,M)}function _(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function M1(s,t,i){let r;function l(v){r=v}let c,d;function h(v){c=v.type,d=v.bytesPerElement}function m(v,y){s.drawElements(r,y,c,v*d),i.update(y,r,1)}function p(v,y,b){b!==0&&(s.drawElementsInstanced(r,y,c,v*d,b),i.update(y,r,b))}function _(v,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,v,0,b);let M=0;for(let x=0;x<b;x++)M+=y[x];i.update(M,r,1)}function g(v,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/d,y[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,v,0,T,0,b);let x=0;for(let F=0;F<b;F++)x+=y[F]*T[F];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function E1(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:Ut("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function b1(s,t,i){const r=new WeakMap,l=new rn;function c(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let v=r.get(h);if(v===void 0||v.count!==g){let w=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var y=w;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let N=0;b===!0&&(N=1),T===!0&&(N=2),M===!0&&(N=3);let P=h.attributes.position.count*N,R=1;P>t.maxTextureSize&&(R=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const U=new Float32Array(P*R*4*g),z=new Sv(U,P,R,g);z.type=Bi,z.needsUpdate=!0;const A=N*4;for(let H=0;H<g;H++){const J=x[H],j=F[H],ie=L[H],te=P*R*4*H;for(let B=0;B<J.count;B++){const G=B*A;b===!0&&(l.fromBufferAttribute(J,B),U[te+G+0]=l.x,U[te+G+1]=l.y,U[te+G+2]=l.z,U[te+G+3]=0),T===!0&&(l.fromBufferAttribute(j,B),U[te+G+4]=l.x,U[te+G+5]=l.y,U[te+G+6]=l.z,U[te+G+7]=0),M===!0&&(l.fromBufferAttribute(ie,B),U[te+G+8]=l.x,U[te+G+9]=l.y,U[te+G+10]=l.z,U[te+G+11]=ie.itemSize===4?l.w:1)}}v={count:g,texture:z,size:new Nt(P,R)},r.set(h,v),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function T1(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const A1={[av]:"LINEAR_TONE_MAPPING",[rv]:"REINHARD_TONE_MAPPING",[sv]:"CINEON_TONE_MAPPING",[ov]:"ACES_FILMIC_TONE_MAPPING",[cv]:"AGX_TONE_MAPPING",[uv]:"NEUTRAL_TONE_MAPPING",[lv]:"CUSTOM_TONE_MAPPING"};function R1(s,t,i,r,l){const c=new Gi(t,i,{type:s,depthBuffer:r,stencilBuffer:l}),d=new Gi(t,i,{type:xa,depthBuffer:!1,stencilBuffer:!1}),h=new Ma;h.setAttribute("position",new _a([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _a([0,2,0,0,2,0],2));const m=new _M({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new wi(h,m),_=new Jc(-1,1,1,-1,0,1);let g=null,v=null,y=!1,b,T=null,M=[],x=!1;this.setSize=function(F,L){c.setSize(F,L),d.setSize(F,L);for(let N=0;N<M.length;N++){const P=M[N];P.setSize&&P.setSize(F,L)}},this.setEffects=function(F){M=F,x=M.length>0&&M[0].isRenderPass===!0;const L=c.width,N=c.height;for(let P=0;P<M.length;P++){const R=M[P];R.setSize&&R.setSize(L,N)}},this.begin=function(F,L){if(y||F.toneMapping===Hi&&M.length===0)return!1;if(T=L,L!==null){const N=L.width,P=L.height;(c.width!==N||c.height!==P)&&this.setSize(N,P)}return x===!1&&F.setRenderTarget(c),b=F.toneMapping,F.toneMapping=Hi,!0},this.hasRenderPass=function(){return x},this.end=function(F,L){F.toneMapping=b,y=!0;let N=c,P=d;for(let R=0;R<M.length;R++){const U=M[R];if(U.enabled!==!1&&(U.render(F,P,N,L),U.needsSwap!==!1)){const z=N;N=P,P=z}}if(g!==F.outputColorSpace||v!==F.toneMapping){g=F.outputColorSpace,v=F.toneMapping,m.defines={},Ct.getTransfer(g)===Gt&&(m.defines.SRGB_TRANSFER="");const R=A1[v];R&&(m.defines[R]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,F.setRenderTarget(T),F.render(p,_),T=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const Ov=new Un,zh=new il(1,1),Pv=new Sv,Fv=new jy,Iv=new Cv,E_=[],b_=[],T_=new Float32Array(16),A_=new Float32Array(9),R_=new Float32Array(4);function Vs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=E_[l];if(c===void 0&&(c=new Float32Array(l),E_[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,s[d].toArray(c,h)}return c}function gn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function _n(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function eu(s,t){let i=b_[t];i===void 0&&(i=new Int32Array(t),b_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function C1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function w1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2fv(this.addr,t),_n(i,t)}}function D1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;s.uniform3fv(this.addr,t),_n(i,t)}}function U1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4fv(this.addr,t),_n(i,t)}}function N1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;R_.set(r),s.uniformMatrix2fv(this.addr,!1,R_),_n(i,r)}}function L1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;A_.set(r),s.uniformMatrix3fv(this.addr,!1,A_),_n(i,r)}}function O1(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;T_.set(r),s.uniformMatrix4fv(this.addr,!1,T_),_n(i,r)}}function P1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function F1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2iv(this.addr,t),_n(i,t)}}function I1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3iv(this.addr,t),_n(i,t)}}function B1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4iv(this.addr,t),_n(i,t)}}function z1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function H1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2uiv(this.addr,t),_n(i,t)}}function G1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3uiv(this.addr,t),_n(i,t)}}function V1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4uiv(this.addr,t),_n(i,t)}}function k1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(zh.compareFunction=i.isReversedDepthBuffer()?Qh:Kh,c=zh):c=Ov,i.setTexture2D(t||c,l)}function X1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Fv,l)}function W1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Iv,l)}function q1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Pv,l)}function j1(s){switch(s){case 5126:return C1;case 35664:return w1;case 35665:return D1;case 35666:return U1;case 35674:return N1;case 35675:return L1;case 35676:return O1;case 5124:case 35670:return P1;case 35667:case 35671:return F1;case 35668:case 35672:return I1;case 35669:case 35673:return B1;case 5125:return z1;case 36294:return H1;case 36295:return G1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return q1}}function Y1(s,t){s.uniform1fv(this.addr,t)}function Z1(s,t){const i=Vs(t,this.size,2);s.uniform2fv(this.addr,i)}function K1(s,t){const i=Vs(t,this.size,3);s.uniform3fv(this.addr,i)}function Q1(s,t){const i=Vs(t,this.size,4);s.uniform4fv(this.addr,i)}function J1(s,t){const i=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function $1(s,t){const i=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function eT(s,t){const i=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function tT(s,t){s.uniform1iv(this.addr,t)}function nT(s,t){s.uniform2iv(this.addr,t)}function iT(s,t){s.uniform3iv(this.addr,t)}function aT(s,t){s.uniform4iv(this.addr,t)}function rT(s,t){s.uniform1uiv(this.addr,t)}function sT(s,t){s.uniform2uiv(this.addr,t)}function oT(s,t){s.uniform3uiv(this.addr,t)}function lT(s,t){s.uniform4uiv(this.addr,t)}function cT(s,t,i){const r=this.cache,l=t.length,c=eu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=zh:d=Ov;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,c[h])}function uT(s,t,i){const r=this.cache,l=t.length,c=eu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Fv,c[d])}function fT(s,t,i){const r=this.cache,l=t.length,c=eu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Iv,c[d])}function dT(s,t,i){const r=this.cache,l=t.length,c=eu(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Pv,c[d])}function hT(s){switch(s){case 5126:return Y1;case 35664:return Z1;case 35665:return K1;case 35666:return Q1;case 35674:return J1;case 35675:return $1;case 35676:return eT;case 5124:case 35670:return tT;case 35667:case 35671:return nT;case 35668:case 35672:return iT;case 35669:case 35673:return aT;case 5125:return rT;case 36294:return sT;case 36295:return oT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return dT}}class pT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=j1(i.type)}}class mT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=hT(i.type)}}class gT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function C_(s,t){s.seq.push(t),s.map[t.id]=t}function _T(s,t,i){const r=s.name,l=r.length;for(Gd.lastIndex=0;;){const c=Gd.exec(r),d=Gd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){C_(i,p===void 0?new pT(h,s,t):new mT(h,s,t));break}else{let g=i.map[h];g===void 0&&(g=new gT(h),C_(i,g)),i=g}}}class jc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);_T(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function w_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const vT=37297;let xT=0;function ST(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const D_=new vt;function yT(s){Ct._getMatrix(D_,Ct.workingColorSpace,s);const t=`mat3( ${D_.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Yc:return[t,"LinearTransferOETF"];case Gt:return[t,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function U_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+ST(s.getShaderSource(t),h)}else return c}function MT(s,t){const i=yT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const ET={[av]:"Linear",[rv]:"Reinhard",[sv]:"Cineon",[ov]:"ACESFilmic",[cv]:"AgX",[uv]:"Neutral",[lv]:"Custom"};function bT(s,t){const i=ET[t];return i===void 0?(dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new ce;function TT(){Ct.getLuminanceCoefficients(Hc);const s=Hc.x.toFixed(4),t=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function RT(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function CT(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:s.getAttribLocation(t,d),locationSize:h}}return i}function Qo(s){return s!==""}function N_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function L_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(s){return s.replace(wT,UT)}const DT=new Map;function UT(s,t){let i=xt[t];if(i===void 0){const r=DT.get(t);if(r!==void 0)i=xt[r],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Hh(i)}const NT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function O_(s){return s.replace(NT,LT)}function LT(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function P_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const OT={[Vc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function PT(s){return OT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const FT={[Or]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Kc]:"ENVMAP_TYPE_CUBE_UV"};function IT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":FT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const BT={[Fs]:"ENVMAP_MODE_REFRACTION"};function zT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":BT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HT={[iv]:"ENVMAP_BLENDING_MULTIPLY",[Ry]:"ENVMAP_BLENDING_MIX",[Cy]:"ENVMAP_BLENDING_ADD"};function GT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":HT[s.combine]||"ENVMAP_BLENDING_NONE"}function VT(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function kT(s,t,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=PT(i),p=IT(i),_=zT(i),g=GT(i),v=VT(i),y=AT(i),b=RT(c),T=l.createProgram();let M,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Qo).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Qo).join(`
`),x.length>0&&(x+=`
`)):(M=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),x=[P_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?xt.tonemapping_pars_fragment:"",i.toneMapping!==Hi?bT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,MT("linearToOutputTexel",i.outputColorSpace),TT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),d=Hh(d),d=N_(d,i),d=L_(d,i),h=Hh(h),h=N_(h,i),h=L_(h,i),d=O_(d),h=O_(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=F+M+d,N=F+x+h,P=w_(l,l.VERTEX_SHADER,L),R=w_(l,l.FRAGMENT_SHADER,N);l.attachShader(T,P),l.attachShader(T,R),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function U(H){if(s.debug.checkShaderErrors){const J=l.getProgramInfoLog(T)||"",j=l.getShaderInfoLog(P)||"",ie=l.getShaderInfoLog(R)||"",te=J.trim(),B=j.trim(),G=ie.trim();let ee=!0,ve=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,P,R);else{const ge=U_(l,P,"vertex"),I=U_(l,R,"fragment");Ut("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+te+`
`+ge+`
`+I)}else te!==""?dt("WebGLProgram: Program Info Log:",te):(B===""||G==="")&&(ve=!1);ve&&(H.diagnostics={runnable:ee,programLog:te,vertexShader:{log:B,prefix:M},fragmentShader:{log:G,prefix:x}})}l.deleteShader(P),l.deleteShader(R),z=new jc(l,T),A=CT(l,T)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,vT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=R,this}let XT=0;class WT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new qT(t),i.set(t,r)),r}}class qT{constructor(t){this.id=XT++,this.code=t,this.usedTimes=0}}function jT(s,t,i,r,l,c,d){const h=new yv,m=new WT,p=new Set,_=[],g=new Map,v=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,w,H,J,j){const ie=J.fog,te=j.geometry,B=A.isMeshStandardMaterial?J.environment:null,G=(A.isMeshStandardMaterial?i:t).get(A.envMap||B),ee=G&&G.mapping===Kc?G.image.height:null,ve=b[A.type];A.precision!==null&&(y=l.getMaxPrecision(A.precision),y!==A.precision&&dt("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const ge=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,I=ge!==void 0?ge.length:0;let ne=0;te.morphAttributes.position!==void 0&&(ne=1),te.morphAttributes.normal!==void 0&&(ne=2),te.morphAttributes.color!==void 0&&(ne=3);let _e,de,be,Q;if(ve){const Rt=Fi[ve];_e=Rt.vertexShader,de=Rt.fragmentShader}else _e=A.vertexShader,de=A.fragmentShader,m.update(A),be=m.getVertexShaderID(A),Q=m.getFragmentShaderID(A);const ae=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),He=j.isInstancedMesh===!0,Ge=j.isBatchedMesh===!0,ct=!!A.map,jt=!!A.matcap,pt=!!G,mt=!!A.aoMap,st=!!A.lightMap,Ke=!!A.bumpMap,et=!!A.normalMap,k=!!A.displacementMap,St=!!A.emissiveMap,Qe=!!A.metalnessMap,ut=!!A.roughnessMap,Ve=A.anisotropy>0,O=A.clearcoat>0,E=A.dispersion>0,W=A.iridescence>0,pe=A.sheen>0,ye=A.transmission>0,he=Ve&&!!A.anisotropyMap,ke=O&&!!A.clearcoatMap,Re=O&&!!A.clearcoatNormalMap,We=O&&!!A.clearcoatRoughnessMap,nt=W&&!!A.iridescenceMap,Ee=W&&!!A.iridescenceThicknessMap,Ce=pe&&!!A.sheenColorMap,Ie=pe&&!!A.sheenRoughnessMap,Pe=!!A.specularMap,we=!!A.specularColorMap,gt=!!A.specularIntensityMap,Y=ye&&!!A.transmissionMap,Le=ye&&!!A.thicknessMap,De=!!A.gradientMap,ze=!!A.alphaMap,Te=A.alphaTest>0,Me=!!A.alphaHash,Ue=!!A.extensions;let ot=Hi;A.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ot=s.toneMapping);const It={shaderID:ve,shaderType:A.type,shaderName:A.name,vertexShader:_e,fragmentShader:de,defines:A.defines,customVertexShaderID:be,customFragmentShaderID:Q,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&j._colorsTexture!==null,instancing:He,instancingColor:He&&j.instanceColor!==null,instancingMorph:He&&j.morphTexture!==null,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Bs,alphaToCoverage:!!A.alphaToCoverage,map:ct,matcap:jt,envMap:pt,envMapMode:pt&&G.mapping,envMapCubeUVHeight:ee,aoMap:mt,lightMap:st,bumpMap:Ke,normalMap:et,displacementMap:k,emissiveMap:St,normalMapObjectSpace:et&&A.normalMapType===Ny,normalMapTangentSpace:et&&A.normalMapType===Uy,metalnessMap:Qe,roughnessMap:ut,anisotropy:Ve,anisotropyMap:he,clearcoat:O,clearcoatMap:ke,clearcoatNormalMap:Re,clearcoatRoughnessMap:We,dispersion:E,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:Ee,sheen:pe,sheenColorMap:Ce,sheenRoughnessMap:Ie,specularMap:Pe,specularColorMap:we,specularIntensityMap:gt,transmission:ye,transmissionMap:Y,thicknessMap:Le,gradientMap:De,opaque:A.transparent===!1&&A.blending===Ls&&A.alphaToCoverage===!1,alphaMap:ze,alphaTest:Te,alphaHash:Me,combine:A.combine,mapUv:ct&&T(A.map.channel),aoMapUv:mt&&T(A.aoMap.channel),lightMapUv:st&&T(A.lightMap.channel),bumpMapUv:Ke&&T(A.bumpMap.channel),normalMapUv:et&&T(A.normalMap.channel),displacementMapUv:k&&T(A.displacementMap.channel),emissiveMapUv:St&&T(A.emissiveMap.channel),metalnessMapUv:Qe&&T(A.metalnessMap.channel),roughnessMapUv:ut&&T(A.roughnessMap.channel),anisotropyMapUv:he&&T(A.anisotropyMap.channel),clearcoatMapUv:ke&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Re&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&T(A.sheenRoughnessMap.channel),specularMapUv:Pe&&T(A.specularMap.channel),specularColorMapUv:we&&T(A.specularColorMap.channel),specularIntensityMapUv:gt&&T(A.specularIntensityMap.channel),transmissionMapUv:Y&&T(A.transmissionMap.channel),thicknessMapUv:Le&&T(A.thicknessMap.channel),alphaMapUv:ze&&T(A.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(et||Ve),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!te.attributes.uv&&(ct||ze),fog:!!ie,useFog:A.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ae,skinning:j.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:ct&&A.map.isVideoTexture===!0&&Ct.getTransfer(A.map.colorSpace)===Gt,decodeVideoTextureEmissive:St&&A.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(A.emissiveMap.colorSpace)===Gt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ii,flipSided:A.side===Wn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ue&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&A.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function x(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)w.push(H),w.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(F(w,A),L(w,A),w.push(s.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function F(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function L(A,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),A.push(h.mask)}function N(A){const w=b[A.type];let H;if(w){const J=Fi[w];H=oM.clone(J.uniforms)}else H=A.uniforms;return H}function P(A,w){let H=g.get(w);return H!==void 0?++H.usedTimes:(H=new kT(s,w,A,c),_.push(H),g.set(w,H)),H}function R(A){if(--A.usedTimes===0){const w=_.indexOf(A);_[w]=_[_.length-1],_.pop(),g.delete(A.cacheKey),A.destroy()}}function U(A){m.remove(A)}function z(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:N,acquireProgram:P,releaseProgram:R,releaseShaderCache:U,programs:_,dispose:z}}function YT(){let s=new WeakMap;function t(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function ZT(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function F_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function I_(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(g,v,y,b,T,M){let x=s[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:b,renderOrder:g.renderOrder,z:T,group:M},s[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=T,x.group=M),t++,x}function h(g,v,y,b,T,M){const x=d(g,v,y,b,T,M);y.transmission>0?r.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(g,v,y,b,T,M){const x=d(g,v,y,b,T,M);y.transmission>0?r.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,v){i.length>1&&i.sort(g||ZT),r.length>1&&r.sort(v||F_),l.length>1&&l.sort(v||F_)}function _(){for(let g=t,v=s.length;g<v;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function KT(){let s=new WeakMap;function t(r,l){const c=s.get(r);let d;return c===void 0?(d=new I_,s.set(r,[d])):l>=c.length?(d=new I_,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:t,dispose:i}}function QT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ce,color:new Wt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":i={color:new Wt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return s[t.id]=i,i}}}function JT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let $T=0;function eA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function tA(s){const t=new QT,i=JT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ce);const l=new ce,c=new hn,d=new hn;function h(p){let _=0,g=0,v=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,b=0,T=0,M=0,x=0,F=0,L=0,N=0,P=0,R=0,U=0;p.sort(eA);for(let A=0,w=p.length;A<w;A++){const H=p[A],J=H.color,j=H.intensity,ie=H.distance;let te=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Is?te=H.shadow.map.texture:te=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=J.r*j,g+=J.g*j,v+=J.b*j;else if(H.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(H.sh.coefficients[B],j);U++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,ee=i.get(H);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,r.directionalShadow[y]=ee,r.directionalShadowMap[y]=te,r.directionalShadowMatrix[y]=H.shadow.matrix,F++}r.directional[y]=B,y++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(J).multiplyScalar(j),B.distance=ie,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,r.spot[T]=B;const G=H.shadow;if(H.map&&(r.spotLightMap[P]=H.map,P++,G.updateMatrices(H),H.castShadow&&R++),r.spotLightMatrix[T]=G.matrix,H.castShadow){const ee=i.get(H);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,r.spotShadow[T]=ee,r.spotShadowMap[T]=te,N++}T++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(J).multiplyScalar(j),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=B,M++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const G=H.shadow,ee=i.get(H);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,r.pointShadow[b]=ee,r.pointShadowMap[b]=te,r.pointShadowMatrix[b]=H.shadow.matrix,L++}r.point[b]=B,b++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(j),B.groundColor.copy(H.groundColor).multiplyScalar(j),r.hemi[x]=B,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=v;const z=r.hash;(z.directionalLength!==y||z.pointLength!==b||z.spotLength!==T||z.rectAreaLength!==M||z.hemiLength!==x||z.numDirectionalShadows!==F||z.numPointShadows!==L||z.numSpotShadows!==N||z.numSpotMaps!==P||z.numLightProbes!==U)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=M,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=N+P-R,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=U,z.directionalLength=y,z.pointLength=b,z.spotLength=T,z.rectAreaLength=M,z.hemiLength=x,z.numDirectionalShadows=F,z.numPointShadows=L,z.numSpotShadows=N,z.numSpotMaps=P,z.numLightProbes=U,r.version=$T++)}function m(p,_){let g=0,v=0,y=0,b=0,T=0;const M=_.matrixWorldInverse;for(let x=0,F=p.length;x<F;x++){const L=p[x];if(L.isDirectionalLight){const N=r.directional[g];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),g++}else if(L.isSpotLight){const N=r.spot[y];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),d.identity(),c.copy(L.matrixWorld),c.premultiply(M),d.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),b++}else if(L.isPointLight){const N=r.point[v];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(M),v++}else if(L.isHemisphereLight){const N=r.hemi[T];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:r}}function B_(s){const t=new tA(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function d(_){r.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function nA(s){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new B_(s),t.set(l,[h])):c>=d.length?(h=new B_(s),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const iA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aA=`uniform sampler2D shadow_pass;
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
}`,rA=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],sA=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],z_=new hn,Xo=new ce,Vd=new ce;function oA(s,t,i){let r=new Uv;const l=new Nt,c=new Nt,d=new rn,h=new vM,m=new xM,p={},_=i.maxTextureSize,g={[ar]:Wn,[Wn]:ar,[Ii]:Ii},v=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:iA,fragmentShader:aA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ma;b.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new wi(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let x=this.type;this.render=function(R,U,z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||R.length===0)return;R.type===ly&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Vc);const A=s.getRenderTarget(),w=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),J=s.state;J.setBlending(ma),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const j=x!==this.type;j&&U.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(te=>te.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,te=R.length;ie<te;ie++){const B=R[ie],G=B.shadow;if(G===void 0){dt("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ee=G.getFrameExtents();if(l.multiply(ee),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ee.x),l.x=c.x*ee.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ee.y),l.y=c.y*ee.y,G.mapSize.y=c.y)),G.map===null||j===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Zo){if(B.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Gi(l.x,l.y,{format:Is,type:xa,minFilter:dn,magFilter:dn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new il(l.x,l.y,Bi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Sa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn}else{B.isPointLight?(G.map=new wv(l.x),G.map.depthTexture=new gM(l.x,ki)):(G.map=new Gi(l.x,l.y),G.map.depthTexture=new il(l.x,l.y,ki)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Sa;const ge=s.state.buffers.depth.getReversed();this.type===Vc?(G.map.depthTexture.compareFunction=ge?Qh:Kh,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Dn,G.map.depthTexture.magFilter=Dn)}G.camera.updateProjectionMatrix()}const ve=G.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<ve;ge++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,ge),s.clear();else{ge===0&&(s.setRenderTarget(G.map),s.clear());const I=G.getViewport(ge);d.set(c.x*I.x,c.y*I.y,c.x*I.z,c.y*I.w),J.viewport(d)}if(B.isPointLight){const I=G.camera,ne=G.matrix,_e=B.distance||I.far;_e!==I.far&&(I.far=_e,I.updateProjectionMatrix()),Xo.setFromMatrixPosition(B.matrixWorld),I.position.copy(Xo),Vd.copy(I.position),Vd.add(rA[ge]),I.up.copy(sA[ge]),I.lookAt(Vd),I.updateMatrixWorld(),ne.makeTranslation(-Xo.x,-Xo.y,-Xo.z),z_.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),G._frustum.setFromProjectionMatrix(z_,I.coordinateSystem,I.reversedDepth)}else G.updateMatrices(B);r=G.getFrustum(),N(U,z,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Zo&&F(G,z),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(A,w,H)};function F(R,U){const z=t.update(T);v.defines.VSM_SAMPLES!==R.blurSamples&&(v.defines.VSM_SAMPLES=R.blurSamples,y.defines.VSM_SAMPLES=R.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Gi(l.x,l.y,{format:Is,type:xa})),v.uniforms.shadow_pass.value=R.map.depthTexture,v.uniforms.resolution.value=R.mapSize,v.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(U,null,z,v,T,null),y.uniforms.shadow_pass.value=R.mapPass.texture,y.uniforms.resolution.value=R.mapSize,y.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(U,null,z,y,T,null)}function L(R,U,z,A){let w=null;const H=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)w=H;else if(w=z.isPointLight===!0?m:h,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const J=w.uuid,j=U.uuid;let ie=p[J];ie===void 0&&(ie={},p[J]=ie);let te=ie[j];te===void 0&&(te=w.clone(),ie[j]=te,U.addEventListener("dispose",P)),w=te}if(w.visible=U.visible,w.wireframe=U.wireframe,A===Zo?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:g[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const J=s.properties.get(w);J.light=z}return w}function N(R,U,z,A,w){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===Zo)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const j=t.update(R),ie=R.material;if(Array.isArray(ie)){const te=j.groups;for(let B=0,G=te.length;B<G;B++){const ee=te[B],ve=ie[ee.materialIndex];if(ve&&ve.visible){const ge=L(R,ve,A,w);R.onBeforeShadow(s,R,U,z,j,ge,ee),s.renderBufferDirect(z,null,j,ge,R,ee),R.onAfterShadow(s,R,U,z,j,ge,ee)}}}else if(ie.visible){const te=L(R,ie,A,w);R.onBeforeShadow(s,R,U,z,j,te,null),s.renderBufferDirect(z,null,j,te,R,null),R.onAfterShadow(s,R,U,z,j,te,null)}}const J=R.children;for(let j=0,ie=J.length;j<ie;j++)N(J[j],U,z,A,w)}function P(R){R.target.removeEventListener("dispose",P);for(const z in p){const A=p[z],w=R.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const lA={[Zd]:Kd,[Qd]:eh,[Jd]:th,[Ps]:$d,[Kd]:Zd,[eh]:Qd,[th]:Jd,[$d]:Ps};function cA(s,t){function i(){let Y=!1;const Le=new rn;let De=null;const ze=new rn(0,0,0,0);return{setMask:function(Te){De!==Te&&!Y&&(s.colorMask(Te,Te,Te,Te),De=Te)},setLocked:function(Te){Y=Te},setClear:function(Te,Me,Ue,ot,It){It===!0&&(Te*=ot,Me*=ot,Ue*=ot),Le.set(Te,Me,Ue,ot),ze.equals(Le)===!1&&(s.clearColor(Te,Me,Ue,ot),ze.copy(Le))},reset:function(){Y=!1,De=null,ze.set(-1,0,0,0)}}}function r(){let Y=!1,Le=!1,De=null,ze=null,Te=null;return{setReversed:function(Me){if(Le!==Me){const Ue=t.get("EXT_clip_control");Me?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Le=Me;const ot=Te;Te=null,this.setClear(ot)}},getReversed:function(){return Le},setTest:function(Me){Me?ae(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Me){De!==Me&&!Y&&(s.depthMask(Me),De=Me)},setFunc:function(Me){if(Le&&(Me=lA[Me]),ze!==Me){switch(Me){case Zd:s.depthFunc(s.NEVER);break;case Kd:s.depthFunc(s.ALWAYS);break;case Qd:s.depthFunc(s.LESS);break;case Ps:s.depthFunc(s.LEQUAL);break;case Jd:s.depthFunc(s.EQUAL);break;case $d:s.depthFunc(s.GEQUAL);break;case eh:s.depthFunc(s.GREATER);break;case th:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=Me}},setLocked:function(Me){Y=Me},setClear:function(Me){Te!==Me&&(Le&&(Me=1-Me),s.clearDepth(Me),Te=Me)},reset:function(){Y=!1,De=null,ze=null,Te=null,Le=!1}}}function l(){let Y=!1,Le=null,De=null,ze=null,Te=null,Me=null,Ue=null,ot=null,It=null;return{setTest:function(Rt){Y||(Rt?ae(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Rt){Le!==Rt&&!Y&&(s.stencilMask(Rt),Le=Rt)},setFunc:function(Rt,Nn,_i){(De!==Rt||ze!==Nn||Te!==_i)&&(s.stencilFunc(Rt,Nn,_i),De=Rt,ze=Nn,Te=_i)},setOp:function(Rt,Nn,_i){(Me!==Rt||Ue!==Nn||ot!==_i)&&(s.stencilOp(Rt,Nn,_i),Me=Rt,Ue=Nn,ot=_i)},setLocked:function(Rt){Y=Rt},setClear:function(Rt){It!==Rt&&(s.clearStencil(Rt),It=Rt)},reset:function(){Y=!1,Le=null,De=null,ze=null,Te=null,Me=null,Ue=null,ot=null,It=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},v=new WeakMap,y=[],b=null,T=!1,M=null,x=null,F=null,L=null,N=null,P=null,R=null,U=new Wt(0,0,0),z=0,A=!1,w=null,H=null,J=null,j=null,ie=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ee)[1]),B=G>=1):ee.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),B=G>=2);let ve=null,ge={};const I=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),_e=new rn().fromArray(I),de=new rn().fromArray(ne);function be(Y,Le,De,ze){const Te=new Uint8Array(4),Me=s.createTexture();s.bindTexture(Y,Me),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<De;Ue++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Le+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Me}const Q={};Q[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ae(s.DEPTH_TEST),d.setFunc(Ps),Ke(!1),et(Xg),ae(s.CULL_FACE),mt(ma);function ae(Y){_[Y]!==!0&&(s.enable(Y),_[Y]=!0)}function Ae(Y){_[Y]!==!1&&(s.disable(Y),_[Y]=!1)}function He(Y,Le){return g[Y]!==Le?(s.bindFramebuffer(Y,Le),g[Y]=Le,Y===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Le),Y===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ge(Y,Le){let De=y,ze=!1;if(Y){De=v.get(Le),De===void 0&&(De=[],v.set(Le,De));const Te=Y.textures;if(De.length!==Te.length||De[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Ue=Te.length;Me<Ue;Me++)De[Me]=s.COLOR_ATTACHMENT0+Me;De.length=Te.length,ze=!0}}else De[0]!==s.BACK&&(De[0]=s.BACK,ze=!0);ze&&s.drawBuffers(De)}function ct(Y){return b!==Y?(s.useProgram(Y),b=Y,!0):!1}const jt={[Dr]:s.FUNC_ADD,[uy]:s.FUNC_SUBTRACT,[fy]:s.FUNC_REVERSE_SUBTRACT};jt[dy]=s.MIN,jt[hy]=s.MAX;const pt={[py]:s.ZERO,[my]:s.ONE,[gy]:s.SRC_COLOR,[jd]:s.SRC_ALPHA,[My]:s.SRC_ALPHA_SATURATE,[Sy]:s.DST_COLOR,[vy]:s.DST_ALPHA,[_y]:s.ONE_MINUS_SRC_COLOR,[Yd]:s.ONE_MINUS_SRC_ALPHA,[yy]:s.ONE_MINUS_DST_COLOR,[xy]:s.ONE_MINUS_DST_ALPHA,[Ey]:s.CONSTANT_COLOR,[by]:s.ONE_MINUS_CONSTANT_COLOR,[Ty]:s.CONSTANT_ALPHA,[Ay]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(Y,Le,De,ze,Te,Me,Ue,ot,It,Rt){if(Y===ma){T===!0&&(Ae(s.BLEND),T=!1);return}if(T===!1&&(ae(s.BLEND),T=!0),Y!==cy){if(Y!==M||Rt!==A){if((x!==Dr||N!==Dr)&&(s.blendEquation(s.FUNC_ADD),x=Dr,N=Dr),Rt)switch(Y){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wg:s.blendFunc(s.ONE,s.ONE);break;case qg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case qg:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jg:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Y);break}F=null,L=null,P=null,R=null,U.set(0,0,0),z=0,M=Y,A=Rt}return}Te=Te||Le,Me=Me||De,Ue=Ue||ze,(Le!==x||Te!==N)&&(s.blendEquationSeparate(jt[Le],jt[Te]),x=Le,N=Te),(De!==F||ze!==L||Me!==P||Ue!==R)&&(s.blendFuncSeparate(pt[De],pt[ze],pt[Me],pt[Ue]),F=De,L=ze,P=Me,R=Ue),(ot.equals(U)===!1||It!==z)&&(s.blendColor(ot.r,ot.g,ot.b,It),U.copy(ot),z=It),M=Y,A=!1}function st(Y,Le){Y.side===Ii?Ae(s.CULL_FACE):ae(s.CULL_FACE);let De=Y.side===Wn;Le&&(De=!De),Ke(De),Y.blending===Ls&&Y.transparent===!1?mt(ma):mt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const ze=Y.stencilWrite;h.setTest(ze),ze&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),St(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ae(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(Y){w!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),w=Y)}function et(Y){Y!==sy?(ae(s.CULL_FACE),Y!==H&&(Y===Xg?s.cullFace(s.BACK):Y===oy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),H=Y}function k(Y){Y!==J&&(B&&s.lineWidth(Y),J=Y)}function St(Y,Le,De){Y?(ae(s.POLYGON_OFFSET_FILL),(j!==Le||ie!==De)&&(s.polygonOffset(Le,De),j=Le,ie=De)):Ae(s.POLYGON_OFFSET_FILL)}function Qe(Y){Y?ae(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function ut(Y){Y===void 0&&(Y=s.TEXTURE0+te-1),ve!==Y&&(s.activeTexture(Y),ve=Y)}function Ve(Y,Le,De){De===void 0&&(ve===null?De=s.TEXTURE0+te-1:De=ve);let ze=ge[De];ze===void 0&&(ze={type:void 0,texture:void 0},ge[De]=ze),(ze.type!==Y||ze.texture!==Le)&&(ve!==De&&(s.activeTexture(De),ve=De),s.bindTexture(Y,Le||Q[Y]),ze.type=Y,ze.texture=Le)}function O(){const Y=ge[ve];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function pe(){try{s.texSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ye(){try{s.texSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ke(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Re(){try{s.texStorage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function We(){try{s.texStorage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function nt(){try{s.texImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Ee(){try{s.texImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Ce(Y){_e.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),_e.copy(Y))}function Ie(Y){de.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),de.copy(Y))}function Pe(Y,Le){let De=p.get(Le);De===void 0&&(De=new WeakMap,p.set(Le,De));let ze=De.get(Y);ze===void 0&&(ze=s.getUniformBlockIndex(Le,Y.name),De.set(Y,ze))}function we(Y,Le){const ze=p.get(Le).get(Y);m.get(Le)!==ze&&(s.uniformBlockBinding(Le,ze,Y.__bindingPointIndex),m.set(Le,ze))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ve=null,ge={},g={},v=new WeakMap,y=[],b=null,T=!1,M=null,x=null,F=null,L=null,N=null,P=null,R=null,U=new Wt(0,0,0),z=0,A=!1,w=null,H=null,J=null,j=null,ie=null,_e.set(0,0,s.canvas.width,s.canvas.height),de.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ae,disable:Ae,bindFramebuffer:He,drawBuffers:Ge,useProgram:ct,setBlending:mt,setMaterial:st,setFlipSided:Ke,setCullFace:et,setLineWidth:k,setPolygonOffset:St,setScissorTest:Qe,activeTexture:ut,bindTexture:Ve,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:nt,texImage3D:Ee,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:Re,texStorage3D:We,texSubImage2D:pe,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:ke,scissor:Ce,viewport:Ie,reset:gt}}function uA(s,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return y?new OffscreenCanvas(O,E):tl("canvas")}function T(O,E,W){let pe=1;const ye=Ve(O);if((ye.width>W||ye.height>W)&&(pe=W/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(pe*ye.width),ke=Math.floor(pe*ye.height);g===void 0&&(g=b(he,ke));const Re=E?b(he,ke):g;return Re.width=he,Re.height=ke,Re.getContext("2d").drawImage(O,0,0,he,ke),dt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+ke+")."),Re}else return"data"in O&&dt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),O;return O}function M(O){return O.generateMipmaps}function x(O){s.generateMipmap(O)}function F(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(O,E,W,pe,ye=!1){if(O!==null){if(s[O]!==void 0)return s[O];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=E;if(E===s.RED&&(W===s.FLOAT&&(he=s.R32F),W===s.HALF_FLOAT&&(he=s.R16F),W===s.UNSIGNED_BYTE&&(he=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(he=s.R8UI),W===s.UNSIGNED_SHORT&&(he=s.R16UI),W===s.UNSIGNED_INT&&(he=s.R32UI),W===s.BYTE&&(he=s.R8I),W===s.SHORT&&(he=s.R16I),W===s.INT&&(he=s.R32I)),E===s.RG&&(W===s.FLOAT&&(he=s.RG32F),W===s.HALF_FLOAT&&(he=s.RG16F),W===s.UNSIGNED_BYTE&&(he=s.RG8)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(he=s.RG8UI),W===s.UNSIGNED_SHORT&&(he=s.RG16UI),W===s.UNSIGNED_INT&&(he=s.RG32UI),W===s.BYTE&&(he=s.RG8I),W===s.SHORT&&(he=s.RG16I),W===s.INT&&(he=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(he=s.RGB8UI),W===s.UNSIGNED_SHORT&&(he=s.RGB16UI),W===s.UNSIGNED_INT&&(he=s.RGB32UI),W===s.BYTE&&(he=s.RGB8I),W===s.SHORT&&(he=s.RGB16I),W===s.INT&&(he=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),W===s.UNSIGNED_INT&&(he=s.RGBA32UI),W===s.BYTE&&(he=s.RGBA8I),W===s.SHORT&&(he=s.RGBA16I),W===s.INT&&(he=s.RGBA32I)),E===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),E===s.RGBA){const ke=ye?Yc:Ct.getTransfer(pe);W===s.FLOAT&&(he=s.RGBA32F),W===s.HALF_FLOAT&&(he=s.RGBA16F),W===s.UNSIGNED_BYTE&&(he=ke===Gt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&t.get("EXT_color_buffer_float"),he}function N(O,E){let W;return O?E===null||E===ki||E===el?W=s.DEPTH24_STENCIL8:E===Bi?W=s.DEPTH32F_STENCIL8:E===$o&&(W=s.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ki||E===el?W=s.DEPTH_COMPONENT24:E===Bi?W=s.DEPTH_COMPONENT32F:E===$o&&(W=s.DEPTH_COMPONENT16),W}function P(O,E){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==Dn&&O.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function R(O){const E=O.target;E.removeEventListener("dispose",R),z(E),E.isVideoTexture&&_.delete(E)}function U(O){const E=O.target;E.removeEventListener("dispose",U),w(E)}function z(O){const E=r.get(O);if(E.__webglInit===void 0)return;const W=O.source,pe=v.get(W);if(pe){const ye=pe[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&A(O),Object.keys(pe).length===0&&v.delete(W)}r.remove(O)}function A(O){const E=r.get(O);s.deleteTexture(E.__webglTexture);const W=O.source,pe=v.get(W);delete pe[E.__cacheKey],d.memory.textures--}function w(O){const E=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ye=0;ye<E.__webglFramebuffer[pe].length;ye++)s.deleteFramebuffer(E.__webglFramebuffer[pe][ye]);else s.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[pe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=O.textures;for(let pe=0,ye=W.length;pe<ye;pe++){const he=r.get(W[pe]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),d.memory.textures--),r.remove(W[pe])}r.remove(O)}let H=0;function J(){H=0}function j(){const O=H;return O>=l.maxTextures&&dt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function ie(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function te(O,E){const W=r.get(O);if(O.isVideoTexture&&Qe(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&W.__version!==O.version){const pe=O.image;if(pe===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,O,E);return}}else O.isExternalTexture&&(W.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function B(O,E){const W=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&W.__version!==O.version){Q(W,O,E);return}else O.isExternalTexture&&(W.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function G(O,E){const W=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&W.__version!==O.version){Q(W,O,E);return}i.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function ee(O,E){const W=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&W.__version!==O.version){ae(W,O,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}const ve={[ah]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[rh]:s.MIRRORED_REPEAT},ge={[Dn]:s.NEAREST,[wy]:s.NEAREST_MIPMAP_NEAREST,[yc]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[fd]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},I={[Ly]:s.NEVER,[By]:s.ALWAYS,[Oy]:s.LESS,[Kh]:s.LEQUAL,[Py]:s.EQUAL,[Qh]:s.GEQUAL,[Fy]:s.GREATER,[Iy]:s.NOTEQUAL};function ne(O,E){if(E.type===Bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===fd||E.magFilter===yc||E.magFilter===Nr||E.minFilter===dn||E.minFilter===fd||E.minFilter===yc||E.minFilter===Nr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,ve[E.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,ve[E.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,ve[E.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,ge[E.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,ge[E.minFilter]),E.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==yc&&E.minFilter!==Nr||E.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function _e(O,E){let W=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",R));const pe=E.source;let ye=v.get(pe);ye===void 0&&(ye={},v.set(pe,ye));const he=ie(E);if(he!==O.__cacheKey){ye[he]===void 0&&(ye[he]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,W=!0),ye[he].usedTimes++;const ke=ye[O.__cacheKey];ke!==void 0&&(ye[O.__cacheKey].usedTimes--,ke.usedTimes===0&&A(E)),O.__cacheKey=he,O.__webglTexture=ye[he].texture}return W}function de(O,E,W){return Math.floor(Math.floor(O/W)/E)}function be(O,E,W,pe){const he=O.updateRanges;if(he.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,W,pe,E.data);else{he.sort((Ee,Ce)=>Ee.start-Ce.start);let ke=0;for(let Ee=1;Ee<he.length;Ee++){const Ce=he[ke],Ie=he[Ee],Pe=Ce.start+Ce.count,we=de(Ie.start,E.width,4),gt=de(Ce.start,E.width,4);Ie.start<=Pe+1&&we===gt&&de(Ie.start+Ie.count-1,E.width,4)===we?Ce.count=Math.max(Ce.count,Ie.start+Ie.count-Ce.start):(++ke,he[ke]=Ie)}he.length=ke+1;const Re=s.getParameter(s.UNPACK_ROW_LENGTH),We=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ee=0,Ce=he.length;Ee<Ce;Ee++){const Ie=he[Ee],Pe=Math.floor(Ie.start/4),we=Math.ceil(Ie.count/4),gt=Pe%E.width,Y=Math.floor(Pe/E.width),Le=we,De=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(s.TEXTURE_2D,0,gt,Y,Le,De,W,pe,E.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function Q(O,E,W){let pe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=s.TEXTURE_3D);const ye=_e(O,E),he=E.source;i.bindTexture(pe,O.__webglTexture,s.TEXTURE0+W);const ke=r.get(he);if(he.version!==ke.__version||ye===!0){i.activeTexture(s.TEXTURE0+W);const Re=Ct.getPrimaries(Ct.workingColorSpace),We=E.colorSpace===nr?null:Ct.getPrimaries(E.colorSpace),nt=E.colorSpace===nr||Re===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ee=T(E.image,!1,l.maxTextureSize);Ee=ut(E,Ee);const Ce=c.convert(E.format,E.colorSpace),Ie=c.convert(E.type);let Pe=L(E.internalFormat,Ce,Ie,E.colorSpace,E.isVideoTexture);ne(pe,E);let we;const gt=E.mipmaps,Y=E.isVideoTexture!==!0,Le=ke.__version===void 0||ye===!0,De=he.dataReady,ze=P(E,Ee);if(E.isDepthTexture)Pe=N(E.format===Lr,E.type),Le&&(Y?i.texStorage2D(s.TEXTURE_2D,1,Pe,Ee.width,Ee.height):i.texImage2D(s.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,Ce,Ie,null));else if(E.isDataTexture)if(gt.length>0){Y&&Le&&i.texStorage2D(s.TEXTURE_2D,ze,Pe,gt[0].width,gt[0].height);for(let Te=0,Me=gt.length;Te<Me;Te++)we=gt[Te],Y?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,we.width,we.height,Ce,Ie,we.data):i.texImage2D(s.TEXTURE_2D,Te,Pe,we.width,we.height,0,Ce,Ie,we.data);E.generateMipmaps=!1}else Y?(Le&&i.texStorage2D(s.TEXTURE_2D,ze,Pe,Ee.width,Ee.height),De&&be(E,Ee,Ce,Ie)):i.texImage2D(s.TEXTURE_2D,0,Pe,Ee.width,Ee.height,0,Ce,Ie,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Y&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Pe,gt[0].width,gt[0].height,Ee.depth);for(let Te=0,Me=gt.length;Te<Me;Te++)if(we=gt[Te],E.format!==Ci)if(Ce!==null)if(Y){if(De)if(E.layerUpdates.size>0){const Ue=g_(we.width,we.height,E.format,E.type);for(const ot of E.layerUpdates){const It=we.data.subarray(ot*Ue/we.data.BYTES_PER_ELEMENT,(ot+1)*Ue/we.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,ot,we.width,we.height,1,Ce,It)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,we.width,we.height,Ee.depth,Ce,we.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,Pe,we.width,we.height,Ee.depth,0,we.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?De&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,we.width,we.height,Ee.depth,Ce,Ie,we.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Te,Pe,we.width,we.height,Ee.depth,0,Ce,Ie,we.data)}else{Y&&Le&&i.texStorage2D(s.TEXTURE_2D,ze,Pe,gt[0].width,gt[0].height);for(let Te=0,Me=gt.length;Te<Me;Te++)we=gt[Te],E.format!==Ci?Ce!==null?Y?De&&i.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,we.width,we.height,Ce,we.data):i.compressedTexImage2D(s.TEXTURE_2D,Te,Pe,we.width,we.height,0,we.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,we.width,we.height,Ce,Ie,we.data):i.texImage2D(s.TEXTURE_2D,Te,Pe,we.width,we.height,0,Ce,Ie,we.data)}else if(E.isDataArrayTexture)if(Y){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ze,Pe,Ee.width,Ee.height,Ee.depth),De)if(E.layerUpdates.size>0){const Te=g_(Ee.width,Ee.height,E.format,E.type);for(const Me of E.layerUpdates){const Ue=Ee.data.subarray(Me*Te/Ee.data.BYTES_PER_ELEMENT,(Me+1)*Te/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Me,Ee.width,Ee.height,1,Ce,Ie,Ue)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ce,Ie,Ee.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,Ee.width,Ee.height,Ee.depth,0,Ce,Ie,Ee.data);else if(E.isData3DTexture)Y?(Le&&i.texStorage3D(s.TEXTURE_3D,ze,Pe,Ee.width,Ee.height,Ee.depth),De&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ce,Ie,Ee.data)):i.texImage3D(s.TEXTURE_3D,0,Pe,Ee.width,Ee.height,Ee.depth,0,Ce,Ie,Ee.data);else if(E.isFramebufferTexture){if(Le)if(Y)i.texStorage2D(s.TEXTURE_2D,ze,Pe,Ee.width,Ee.height);else{let Te=Ee.width,Me=Ee.height;for(let Ue=0;Ue<ze;Ue++)i.texImage2D(s.TEXTURE_2D,Ue,Pe,Te,Me,0,Ce,Ie,null),Te>>=1,Me>>=1}}else if(gt.length>0){if(Y&&Le){const Te=Ve(gt[0]);i.texStorage2D(s.TEXTURE_2D,ze,Pe,Te.width,Te.height)}for(let Te=0,Me=gt.length;Te<Me;Te++)we=gt[Te],Y?De&&i.texSubImage2D(s.TEXTURE_2D,Te,0,0,Ce,Ie,we):i.texImage2D(s.TEXTURE_2D,Te,Pe,Ce,Ie,we);E.generateMipmaps=!1}else if(Y){if(Le){const Te=Ve(Ee);i.texStorage2D(s.TEXTURE_2D,ze,Pe,Te.width,Te.height)}De&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Ie,Ee)}else i.texImage2D(s.TEXTURE_2D,0,Pe,Ce,Ie,Ee);M(E)&&x(pe),ke.__version=he.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function ae(O,E,W){if(E.image.length!==6)return;const pe=_e(O,E),ye=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+W);const he=r.get(ye);if(ye.version!==he.__version||pe===!0){i.activeTexture(s.TEXTURE0+W);const ke=Ct.getPrimaries(Ct.workingColorSpace),Re=E.colorSpace===nr?null:Ct.getPrimaries(E.colorSpace),We=E.colorSpace===nr||ke===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let Me=0;Me<6;Me++)!nt&&!Ee?Ce[Me]=T(E.image[Me],!0,l.maxCubemapSize):Ce[Me]=Ee?E.image[Me].image:E.image[Me],Ce[Me]=ut(E,Ce[Me]);const Ie=Ce[0],Pe=c.convert(E.format,E.colorSpace),we=c.convert(E.type),gt=L(E.internalFormat,Pe,we,E.colorSpace),Y=E.isVideoTexture!==!0,Le=he.__version===void 0||pe===!0,De=ye.dataReady;let ze=P(E,Ie);ne(s.TEXTURE_CUBE_MAP,E);let Te;if(nt){Y&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,gt,Ie.width,Ie.height);for(let Me=0;Me<6;Me++){Te=Ce[Me].mipmaps;for(let Ue=0;Ue<Te.length;Ue++){const ot=Te[Ue];E.format!==Ci?Pe!==null?Y?De&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ue,0,0,ot.width,ot.height,Pe,ot.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ue,gt,ot.width,ot.height,0,ot.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ue,0,0,ot.width,ot.height,Pe,we,ot.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ue,gt,ot.width,ot.height,0,Pe,we,ot.data)}}}else{if(Te=E.mipmaps,Y&&Le){Te.length>0&&ze++;const Me=Ve(Ce[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,ze,gt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ee){Y?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ce[Me].width,Ce[Me].height,Pe,we,Ce[Me].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,gt,Ce[Me].width,Ce[Me].height,0,Pe,we,Ce[Me].data);for(let Ue=0;Ue<Te.length;Ue++){const It=Te[Ue].image[Me].image;Y?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ue+1,0,0,It.width,It.height,Pe,we,It.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ue+1,gt,It.width,It.height,0,Pe,we,It.data)}}else{Y?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Pe,we,Ce[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,gt,Pe,we,Ce[Me]);for(let Ue=0;Ue<Te.length;Ue++){const ot=Te[Ue];Y?De&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ue+1,0,0,Pe,we,ot.image[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ue+1,gt,Pe,we,ot.image[Me])}}}M(E)&&x(s.TEXTURE_CUBE_MAP),he.__version=ye.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Ae(O,E,W,pe,ye,he){const ke=c.convert(W.format,W.colorSpace),Re=c.convert(W.type),We=L(W.internalFormat,ke,Re,W.colorSpace),nt=r.get(E),Ee=r.get(W);if(Ee.__renderTarget=E,!nt.__hasExternalTextures){const Ce=Math.max(1,E.width>>he),Ie=Math.max(1,E.height>>he);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?i.texImage3D(ye,he,We,Ce,Ie,E.depth,0,ke,Re,null):i.texImage2D(ye,he,We,Ce,Ie,0,ke,Re,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),St(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ye,Ee.__webglTexture,0,k(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ye,Ee.__webglTexture,he),i.bindFramebuffer(s.FRAMEBUFFER,null)}function He(O,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,O),E.depthBuffer){const pe=E.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,he=N(E.stencilBuffer,ye),ke=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;St(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(E),he,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(E),he,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,he,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,O)}else{const pe=E.textures;for(let ye=0;ye<pe.length;ye++){const he=pe[ye],ke=c.convert(he.format,he.colorSpace),Re=c.convert(he.type),We=L(he.internalFormat,ke,Re,he.colorSpace);St(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k(E),We,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,k(E),We,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,We,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(O,E,W){const pe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(E.depthTexture);if(ye.__renderTarget=E,(!ye.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,E.depthTexture.addEventListener("dispose",R)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E.depthTexture);const nt=c.convert(E.depthTexture.format),Ee=c.convert(E.depthTexture.type);let Ce;E.depthTexture.format===Sa?Ce=s.DEPTH_COMPONENT24:E.depthTexture.format===Lr&&(Ce=s.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ce,E.width,E.height,0,nt,Ee,null)}}else te(E.depthTexture,0);const he=ye.__webglTexture,ke=k(E),Re=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,We=E.depthTexture.format===Lr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Sa)St(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,Re,he,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,We,Re,he,0);else if(E.depthTexture.format===Lr)St(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,Re,he,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,We,Re,he,0);else throw new Error("Unknown depthTexture format")}function ct(O){const E=r.get(O),W=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const pe=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=pe}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let pe=0;pe<6;pe++)Ge(E.__webglFramebuffer[pe],O,pe);else{const pe=O.texture.mipmaps;pe&&pe.length>0?Ge(E.__webglFramebuffer[0],O,0):Ge(E.__webglFramebuffer,O,0)}else if(W){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=s.createRenderbuffer(),He(E.__webglDepthbuffer[pe],O,!1);else{const ye=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}else{const pe=O.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),He(E.__webglDepthbuffer,O,!1);else{const ye=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,he)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(O,E,W){const pe=r.get(O);E!==void 0&&Ae(pe.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&ct(O)}function pt(O){const E=O.texture,W=r.get(O),pe=r.get(E);O.addEventListener("dispose",U);const ye=O.textures,he=O.isWebGLCubeRenderTarget===!0,ke=ye.length>1;if(ke||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=E.version,d.memory.textures++),he){W.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Re]=[];for(let We=0;We<E.mipmaps.length;We++)W.__webglFramebuffer[Re][We]=s.createFramebuffer()}else W.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Re=0;Re<E.mipmaps.length;Re++)W.__webglFramebuffer[Re]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(ke)for(let Re=0,We=ye.length;Re<We;Re++){const nt=r.get(ye[Re]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),d.memory.textures++)}if(O.samples>0&&St(O)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){const We=ye[Re];W.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[Re]);const nt=c.convert(We.format,We.colorSpace),Ee=c.convert(We.type),Ce=L(We.internalFormat,nt,Ee,We.colorSpace,O.isXRRenderTarget===!0),Ie=k(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,Ce,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,W.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),He(W.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){i.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let Re=0;Re<6;Re++)if(E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)Ae(W.__webglFramebuffer[Re][We],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,We);else Ae(W.__webglFramebuffer[Re],O,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);M(E)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ke){for(let Re=0,We=ye.length;Re<We;Re++){const nt=ye[Re],Ee=r.get(nt);let Ce=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ce,Ee.__webglTexture),ne(Ce,nt),Ae(W.__webglFramebuffer,O,nt,s.COLOR_ATTACHMENT0+Re,Ce,0),M(nt)&&x(Ce)}i.unbindTexture()}else{let Re=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Re,pe.__webglTexture),ne(Re,E),E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)Ae(W.__webglFramebuffer[We],O,E,s.COLOR_ATTACHMENT0,Re,We);else Ae(W.__webglFramebuffer,O,E,s.COLOR_ATTACHMENT0,Re,0);M(E)&&x(Re),i.unbindTexture()}O.depthBuffer&&ct(O)}function mt(O){const E=O.textures;for(let W=0,pe=E.length;W<pe;W++){const ye=E[W];if(M(ye)){const he=F(O),ke=r.get(ye).__webglTexture;i.bindTexture(he,ke),x(he),i.unbindTexture()}}}const st=[],Ke=[];function et(O){if(O.samples>0){if(St(O)===!1){const E=O.textures,W=O.width,pe=O.height;let ye=s.COLOR_BUFFER_BIT;const he=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=r.get(O),Re=E.length>1;if(Re)for(let nt=0;nt<E.length;nt++)i.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const We=O.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let nt=0;nt<E.length;nt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[nt]);const Ee=r.get(E[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,W,pe,0,0,W,pe,ye,s.NEAREST),m===!0&&(st.length=0,Ke.length=0,st.push(s.COLOR_ATTACHMENT0+nt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(st.push(he),Ke.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ke)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let nt=0;nt<E.length;nt++){i.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,ke.__webglColorRenderbuffer[nt]);const Ee=r.get(E[nt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,Ee,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function k(O){return Math.min(l.maxSamples,O.samples)}function St(O){const E=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Qe(O){const E=d.render.frame;_.get(O)!==E&&(_.set(O,E),O.update())}function ut(O,E){const W=O.colorSpace,pe=O.format,ye=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||W!==Bs&&W!==nr&&(Ct.getTransfer(W)===Gt?(pe!==Ci||ye!==mi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",W)),E}function Ve(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=j,this.resetTextureUnits=J,this.setTexture2D=te,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=ee,this.rebindTextures=jt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function fA(s,t){function i(r,l=nr){let c;const d=Ct.getTransfer(l);if(r===mi)return s.UNSIGNED_BYTE;if(r===Wh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===pv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===mv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===dv)return s.BYTE;if(r===hv)return s.SHORT;if(r===$o)return s.UNSIGNED_SHORT;if(r===Xh)return s.INT;if(r===ki)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===xa)return s.HALF_FLOAT;if(r===gv)return s.ALPHA;if(r===_v)return s.RGB;if(r===Ci)return s.RGBA;if(r===Sa)return s.DEPTH_COMPONENT;if(r===Lr)return s.DEPTH_STENCIL;if(r===vv)return s.RED;if(r===jh)return s.RED_INTEGER;if(r===Is)return s.RG;if(r===Yh)return s.RG_INTEGER;if(r===Zh)return s.RGBA_INTEGER;if(r===kc||r===Xc||r===Wc||r===qc)if(d===Gt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sh||r===oh||r===lh||r===ch)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===sh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ch)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===uh||r===fh)return d===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===dh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===hh)return c.COMPRESSED_R11_EAC;if(r===ph)return c.COMPRESSED_SIGNED_R11_EAC;if(r===mh)return c.COMPRESSED_RG11_EAC;if(r===gh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===_h||r===vh||r===xh||r===Sh||r===yh||r===Mh||r===Eh||r===bh||r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===_h)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Eh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Th)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ah)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ch)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dh)return d===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uh||r===Nh||r===Lh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Uh)return d===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oh||r===Ph||r===Fh||r===Ih)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Oh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ph)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ih)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===el?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const dA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hA=`
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

}`;class pA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Nv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new gi({vertexShader:dA,fragmentShader:hA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new Gs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mA extends Hs{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,_=null,g=null,v=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new pA,x={},F=i.getContextAttributes();let L=null,N=null;const P=[],R=[],U=new Nt;let z=null;const A=new Ai;A.viewport=new rn;const w=new Ai;w.viewport=new rn;const H=[A,w],J=new bM;let j=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=P[Q];return ae===void 0&&(ae=new Od,P[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=P[Q];return ae===void 0&&(ae=new Od,P[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=P[Q];return ae===void 0&&(ae=new Od,P[Q]=ae),ae.getHandSpace()};function te(Q){const ae=R.indexOf(Q.inputSource);if(ae===-1)return;const Ae=P[ae];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,p||d),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){l.removeEventListener("select",te),l.removeEventListener("selectstart",te),l.removeEventListener("selectend",te),l.removeEventListener("squeeze",te),l.removeEventListener("squeezestart",te),l.removeEventListener("squeezeend",te),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",G);for(let Q=0;Q<P.length;Q++){const ae=R[Q];ae!==null&&(R[Q]=null,P[Q].disconnect(ae))}j=null,ie=null,M.reset();for(const Q in x)delete x[Q];t.setRenderTarget(L),y=null,v=null,g=null,l=null,N=null,be.stop(),r.isPresenting=!1,t.setPixelRatio(z),t.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",te),l.addEventListener("selectstart",te),l.addEventListener("selectend",te),l.addEventListener("squeeze",te),l.addEventListener("squeezestart",te),l.addEventListener("squeezeend",te),l.addEventListener("end",B),l.addEventListener("inputsourceschange",G),F.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(U),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,He=null,Ge=null;F.depth&&(Ge=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=F.stencil?Lr:Sa,He=F.stencil?el:ki);const ct={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(ct),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),N=new Gi(v.textureWidth,v.textureHeight,{format:Ci,type:mi,depthTexture:new il(v.textureWidth,v.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:F.stencil,colorSpace:t.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ae={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ae),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Gi(y.framebufferWidth,y.framebufferHeight,{format:Ci,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),be.setContext(l),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(Q){for(let ae=0;ae<Q.removed.length;ae++){const Ae=Q.removed[ae],He=R.indexOf(Ae);He>=0&&(R[He]=null,P[He].disconnect(Ae))}for(let ae=0;ae<Q.added.length;ae++){const Ae=Q.added[ae];let He=R.indexOf(Ae);if(He===-1){for(let ct=0;ct<P.length;ct++)if(ct>=R.length){R.push(Ae),He=ct;break}else if(R[ct]===null){R[ct]=Ae,He=ct;break}if(He===-1)break}const Ge=P[He];Ge&&Ge.connect(Ae)}}const ee=new ce,ve=new ce;function ge(Q,ae,Ae){ee.setFromMatrixPosition(ae.matrixWorld),ve.setFromMatrixPosition(Ae.matrixWorld);const He=ee.distanceTo(ve),Ge=ae.projectionMatrix.elements,ct=Ae.projectionMatrix.elements,jt=Ge[14]/(Ge[10]-1),pt=Ge[14]/(Ge[10]+1),mt=(Ge[9]+1)/Ge[5],st=(Ge[9]-1)/Ge[5],Ke=(Ge[8]-1)/Ge[0],et=(ct[8]+1)/ct[0],k=jt*Ke,St=jt*et,Qe=He/(-Ke+et),ut=Qe*-Ke;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ut),Q.translateZ(Qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ge[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ve=jt+Qe,O=pt+Qe,E=k-ut,W=St+(He-ut),pe=mt*pt/O*Ve,ye=st*pt/O*Ve;Q.projectionMatrix.makePerspective(E,W,pe,ye,Ve,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function I(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ae=Q.near,Ae=Q.far;M.texture!==null&&(M.depthNear>0&&(ae=M.depthNear),M.depthFar>0&&(Ae=M.depthFar)),J.near=w.near=A.near=ae,J.far=w.far=A.far=Ae,(j!==J.near||ie!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),j=J.near,ie=J.far),J.layers.mask=Q.layers.mask|6,A.layers.mask=J.layers.mask&3,w.layers.mask=J.layers.mask&5;const He=Q.parent,Ge=J.cameras;I(J,He);for(let ct=0;ct<Ge.length;ct++)I(Ge[ct],He);Ge.length===2?ge(J,A,w):J.projectionMatrix.copy(A.projectionMatrix),ne(Q,J,He)};function ne(Q,ae,Ae){Ae===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Bh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(Q){m=Q,v!==null&&(v.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(Q){return x[Q]};let _e=null;function de(Q,ae){if(_=ae.getViewerPose(p||d),b=ae,_!==null){const Ae=_.views;y!==null&&(t.setRenderTargetFramebuffer(N,y.framebuffer),t.setRenderTarget(N));let He=!1;Ae.length!==J.cameras.length&&(J.cameras.length=0,He=!0);for(let pt=0;pt<Ae.length;pt++){const mt=Ae[pt];let st=null;if(y!==null)st=y.getViewport(mt);else{const et=g.getViewSubImage(v,mt);st=et.viewport,pt===0&&(t.setRenderTargetTextures(N,et.colorTexture,et.depthStencilTexture),t.setRenderTarget(N))}let Ke=H[pt];Ke===void 0&&(Ke=new Ai,Ke.layers.enable(pt),Ke.viewport=new rn,H[pt]=Ke),Ke.matrix.fromArray(mt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(mt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(st.x,st.y,st.width,st.height),pt===0&&(J.matrix.copy(Ke.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),He===!0&&J.cameras.push(Ke)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const pt=g.getDepthInformation(Ae[0]);pt&&pt.isValid&&pt.texture&&M.init(pt,l.renderState)}if(Ge&&Ge.includes("camera-access")&&T){t.state.unbindTexture(),g=r.getBinding();for(let pt=0;pt<Ae.length;pt++){const mt=Ae[pt].camera;if(mt){let st=x[mt];st||(st=new Nv,x[mt]=st);const Ke=g.getCameraImage(mt);st.sourceTexture=Ke}}}}for(let Ae=0;Ae<P.length;Ae++){const He=R[Ae],Ge=P[Ae];He!==null&&Ge!==void 0&&Ge.update(He,ae,p||d)}_e&&_e(Q,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),b=null}const be=new Lv;be.setAnimationLoop(de),this.setAnimationLoop=function(Q){_e=Q},this.dispose=function(){}}}const Cr=new ya,gA=new hn;function _A(s,t){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,Av(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,F,L,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,N)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(d(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,F,L):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Wn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Wn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const F=t.get(x),L=F.envMap,N=F.envMapRotation;L&&(M.envMap.value=L,Cr.copy(N),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),M.envMapRotation.value.setFromMatrix4(gA.makeRotationFromEuler(Cr)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,F,L){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*F,M.scale.value=L*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,F){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const F=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function vA(s,t,i,r){let l={},c={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,L){const N=L.program;r.uniformBlockBinding(F,N)}function p(F,L){let N=l[F.id];N===void 0&&(b(F),N=_(F),l[F.id]=N,F.addEventListener("dispose",M));const P=L.program;r.updateUBOMapping(F,P);const R=t.render.frame;c[F.id]!==R&&(v(F),c[F.id]=R)}function _(F){const L=g();F.__bindingPointIndex=L;const N=s.createBuffer(),P=F.__size,R=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,P,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,N),N}function g(){for(let F=0;F<h;F++)if(d.indexOf(F)===-1)return d.push(F),F;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(F){const L=l[F.id],N=F.uniforms,P=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let R=0,U=N.length;R<U;R++){const z=Array.isArray(N[R])?N[R]:[N[R]];for(let A=0,w=z.length;A<w;A++){const H=z[A];if(y(H,R,A,P)===!0){const J=H.__offset,j=Array.isArray(H.value)?H.value:[H.value];let ie=0;for(let te=0;te<j.length;te++){const B=j[te],G=T(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,J+ie,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,ie),ie+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(F,L,N,P){const R=F.value,U=L+"_"+N;if(P[U]===void 0)return typeof R=="number"||typeof R=="boolean"?P[U]=R:P[U]=R.clone(),!0;{const z=P[U];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return P[U]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function b(F){const L=F.uniforms;let N=0;const P=16;for(let U=0,z=L.length;U<z;U++){const A=Array.isArray(L[U])?L[U]:[L[U]];for(let w=0,H=A.length;w<H;w++){const J=A[w],j=Array.isArray(J.value)?J.value:[J.value];for(let ie=0,te=j.length;ie<te;ie++){const B=j[ie],G=T(B),ee=N%P,ve=ee%G.boundary,ge=ee+ve;N+=ve,ge!==0&&P-ge<G.storage&&(N+=P-ge),J.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=G.storage}}}const R=N%P;return R>0&&(N+=P-R),F.__size=N,F.__cache={},this}function T(F){const L={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(L.boundary=4,L.storage=4):F.isVector2?(L.boundary=8,L.storage=8):F.isVector3||F.isColor?(L.boundary=16,L.storage=12):F.isVector4?(L.boundary=16,L.storage=16):F.isMatrix3?(L.boundary=48,L.storage=48):F.isMatrix4?(L.boundary=64,L.storage=64):F.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",F),L}function M(F){const L=F.target;L.removeEventListener("dispose",M);const N=d.indexOf(L.__bindingPointIndex);d.splice(N,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const F in l)s.deleteBuffer(l[F]);d=[],l={},c={}}return{bind:m,update:p,dispose:x}}const xA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function SA(){return Pi===null&&(Pi=new dM(xA,16,16,Is,xa),Pi.name="DFG_LUT",Pi.minFilter=dn,Pi.magFilter=dn,Pi.wrapS=ti,Pi.wrapT=ti,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class Bv{constructor(t={}){const{canvas:i=zy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=mi}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const T=y,M=new Set([Zh,Yh,jh]),x=new Set([mi,ki,$o,el,Wh,qh]),F=new Uint32Array(4),L=new Int32Array(4);let N=null,P=null;const R=[],U=[];let z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=pi;let H=0,J=0,j=null,ie=-1,te=null;const B=new rn,G=new rn;let ee=null;const ve=new Wt(0);let ge=0,I=i.width,ne=i.height,_e=1,de=null,be=null;const Q=new rn(0,0,I,ne),ae=new rn(0,0,I,ne);let Ae=!1;const He=new Uv;let Ge=!1,ct=!1;const jt=new hn,pt=new ce,mt=new rn,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function et(){return j===null?_e:1}let k=r;function St(D,Z){return i.getContext(D,Z)}try{const D={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kh}`),i.addEventListener("webglcontextlost",ot,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),k===null){const Z="webgl2";if(k=St(Z,D),k===null)throw St(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Ut("WebGLRenderer: "+D.message),D}let Qe,ut,Ve,O,E,W,pe,ye,he,ke,Re,We,nt,Ee,Ce,Ie,Pe,we,gt,Y,Le,De,ze,Te;function Me(){Qe=new S1(k),Qe.init(),De=new fA(k,Qe),ut=new f1(k,Qe,t,De),Ve=new cA(k,Qe),ut.reversedDepthBuffer&&v&&Ve.buffers.depth.setReversed(!0),O=new E1(k),E=new YT,W=new uA(k,Qe,Ve,E,ut,De,O),pe=new h1(A),ye=new x1(A),he=new RM(k),ze=new c1(k,he),ke=new y1(k,he,O,ze),Re=new T1(k,ke,he,O),gt=new b1(k,ut,W),Ie=new d1(E),We=new jT(A,pe,ye,Qe,ut,ze,Ie),nt=new _A(A,E),Ee=new KT,Ce=new nA(Qe),we=new l1(A,pe,ye,Ve,Re,b,m),Pe=new oA(A,Re,ut),Te=new vA(k,O,ut,Ve),Y=new u1(k,Qe,O),Le=new M1(k,Qe,O),O.programs=We.programs,A.capabilities=ut,A.extensions=Qe,A.properties=E,A.renderLists=Ee,A.shadowMap=Pe,A.state=Ve,A.info=O}Me(),T!==mi&&(z=new R1(T,i.width,i.height,l,c));const Ue=new mA(A,k);this.xr=Ue,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const D=Qe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Qe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(D){D!==void 0&&(_e=D,this.setSize(I,ne,!1))},this.getSize=function(D){return D.set(I,ne)},this.setSize=function(D,Z,ue=!0){if(Ue.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}I=D,ne=Z,i.width=Math.floor(D*_e),i.height=Math.floor(Z*_e),ue===!0&&(i.style.width=D+"px",i.style.height=Z+"px"),z!==null&&z.setSize(i.width,i.height),this.setViewport(0,0,D,Z)},this.getDrawingBufferSize=function(D){return D.set(I*_e,ne*_e).floor()},this.setDrawingBufferSize=function(D,Z,ue){I=D,ne=Z,_e=ue,i.width=Math.floor(D*ue),i.height=Math.floor(Z*ue),this.setViewport(0,0,D,Z)},this.setEffects=function(D){if(T===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Z=0;Z<D.length;Z++)if(D[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(B)},this.getViewport=function(D){return D.copy(Q)},this.setViewport=function(D,Z,ue,oe){D.isVector4?Q.set(D.x,D.y,D.z,D.w):Q.set(D,Z,ue,oe),Ve.viewport(B.copy(Q).multiplyScalar(_e).round())},this.getScissor=function(D){return D.copy(ae)},this.setScissor=function(D,Z,ue,oe){D.isVector4?ae.set(D.x,D.y,D.z,D.w):ae.set(D,Z,ue,oe),Ve.scissor(G.copy(ae).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(D){Ve.setScissorTest(Ae=D)},this.setOpaqueSort=function(D){de=D},this.setTransparentSort=function(D){be=D},this.getClearColor=function(D){return D.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(D=!0,Z=!0,ue=!0){let oe=0;if(D){let $=!1;if(j!==null){const Ne=j.texture.format;$=M.has(Ne)}if($){const Ne=j.texture.type,Xe=x.has(Ne),Oe=we.getClearColor(),qe=we.getClearAlpha(),Ye=Oe.r,it=Oe.g,Ze=Oe.b;Xe?(F[0]=Ye,F[1]=it,F[2]=Ze,F[3]=qe,k.clearBufferuiv(k.COLOR,0,F)):(L[0]=Ye,L[1]=it,L[2]=Ze,L[3]=qe,k.clearBufferiv(k.COLOR,0,L))}else oe|=k.COLOR_BUFFER_BIT}Z&&(oe|=k.DEPTH_BUFFER_BIT),ue&&(oe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ot,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),we.dispose(),Ee.dispose(),Ce.dispose(),E.dispose(),pe.dispose(),ye.dispose(),Re.dispose(),ze.dispose(),Te.dispose(),We.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Fr),Ue.removeEventListener("sessionend",Ws),Di.stop()};function ot(D){D.preventDefault(),Jg("WebGLRenderer: Context Lost."),w=!0}function It(){Jg("WebGLRenderer: Context Restored."),w=!1;const D=O.autoReset,Z=Pe.enabled,ue=Pe.autoUpdate,oe=Pe.needsUpdate,$=Pe.type;Me(),O.autoReset=D,Pe.enabled=Z,Pe.autoUpdate=ue,Pe.needsUpdate=oe,Pe.type=$}function Rt(D){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Nn(D){const Z=D.target;Z.removeEventListener("dispose",Nn),_i(Z)}function _i(D){ul(D),E.remove(D)}function ul(D){const Z=E.get(D).programs;Z!==void 0&&(Z.forEach(function(ue){We.releaseProgram(ue)}),D.isShaderMaterial&&We.releaseShaderCache(D))}this.renderBufferDirect=function(D,Z,ue,oe,$,Ne){Z===null&&(Z=st);const Xe=$.isMesh&&$.matrixWorld.determinant()<0,Oe=rr(D,Z,ue,oe,$);Ve.setMaterial(oe,Xe);let qe=ue.index,Ye=1;if(oe.wireframe===!0){if(qe=ke.getWireframeAttribute(ue),qe===void 0)return;Ye=2}const it=ue.drawRange,Ze=ue.attributes.position;let at=it.start*Ye,Lt=(it.start+it.count)*Ye;Ne!==null&&(at=Math.max(at,Ne.start*Ye),Lt=Math.min(Lt,(Ne.start+Ne.count)*Ye)),qe!==null?(at=Math.max(at,0),Lt=Math.min(Lt,qe.count)):Ze!=null&&(at=Math.max(at,0),Lt=Math.min(Lt,Ze.count));const Qt=Lt-at;if(Qt<0||Qt===1/0)return;ze.setup($,oe,Oe,ue,qe);let Yt,Ft=Y;if(qe!==null&&(Yt=he.get(qe),Ft=Le,Ft.setIndex(Yt)),$.isMesh)oe.wireframe===!0?(Ve.setLineWidth(oe.wireframeLinewidth*et()),Ft.setMode(k.LINES)):Ft.setMode(k.TRIANGLES);else if($.isLine){let $e=oe.linewidth;$e===void 0&&($e=1),Ve.setLineWidth($e*et()),$.isLineSegments?Ft.setMode(k.LINES):$.isLineLoop?Ft.setMode(k.LINE_LOOP):Ft.setMode(k.LINE_STRIP)}else $.isPoints?Ft.setMode(k.POINTS):$.isSprite&&Ft.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)nl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))Ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const $e=$._multiDrawStarts,Ot=$._multiDrawCounts,lt=$._multiDrawCount,yn=qe?he.get(qe).bytesPerElement:1,Xi=E.get(oe).currentProgram.getUniforms();for(let Mn=0;Mn<lt;Mn++)Xi.setValue(k,"_gl_DrawID",Mn),Ft.render($e[Mn]/yn,Ot[Mn])}else if($.isInstancedMesh)Ft.renderInstances(at,Qt,$.count);else if(ue.isInstancedBufferGeometry){const $e=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ot=Math.min(ue.instanceCount,$e);Ft.renderInstances(at,Qt,Ot)}else Ft.render(at,Qt)};function ks(D,Z,ue){D.transparent===!0&&D.side===Ii&&D.forceSinglePass===!1?(D.side=Wn,D.needsUpdate=!0,Br(D,Z,ue),D.side=ar,D.needsUpdate=!0,Br(D,Z,ue),D.side=Ii):Br(D,Z,ue)}this.compile=function(D,Z,ue=null){ue===null&&(ue=D),P=Ce.get(ue),P.init(Z),U.push(P),ue.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),D!==ue&&D.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(P.pushLight($),$.castShadow&&P.pushShadow($))}),P.setupLights();const oe=new Set;return D.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ne=$.material;if(Ne)if(Array.isArray(Ne))for(let Xe=0;Xe<Ne.length;Xe++){const Oe=Ne[Xe];ks(Oe,ue,$),oe.add(Oe)}else ks(Ne,ue,$),oe.add(Ne)}),P=U.pop(),oe},this.compileAsync=function(D,Z,ue=null){const oe=this.compile(D,Z,ue);return new Promise($=>{function Ne(){if(oe.forEach(function(Xe){E.get(Xe).currentProgram.isReady()&&oe.delete(Xe)}),oe.size===0){$(D);return}setTimeout(Ne,10)}Qe.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Pr=null;function Xs(D){Pr&&Pr(D)}function Fr(){Di.stop()}function Ws(){Di.start()}const Di=new Lv;Di.setAnimationLoop(Xs),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(D){Pr=D,Ue.setAnimationLoop(D),D===null?Di.stop():Di.start()},Ue.addEventListener("sessionstart",Fr),Ue.addEventListener("sessionend",Ws),this.render=function(D,Z){if(Z!==void 0&&Z.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const ue=Ue.enabled===!0&&Ue.isPresenting===!0,oe=z!==null&&(j===null||ue)&&z.begin(A,j);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(Z),Z=Ue.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,Z,j),P=Ce.get(D,U.length),P.init(Z),U.push(P),jt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),He.setFromProjectionMatrix(jt,zi,Z.reversedDepth),ct=this.localClippingEnabled,Ge=Ie.init(this.clippingPlanes,ct),N=Ee.get(D,R.length),N.init(),R.push(N),Ue.enabled===!0&&Ue.isPresenting===!0){const Xe=A.xr.getDepthSensingMesh();Xe!==null&&ii(Xe,Z,-1/0,A.sortObjects)}ii(D,Z,0,A.sortObjects),N.finish(),A.sortObjects===!0&&N.sort(de,be),Ke=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Ke&&we.addToRenderList(N,D),this.info.render.frame++,Ge===!0&&Ie.beginShadows();const $=P.state.shadowsArray;if(Pe.render($,D,Z),Ge===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&z.hasRenderPass())===!1){const Xe=N.opaque,Oe=N.transmissive;if(P.setupLights(),Z.isArrayCamera){const qe=Z.cameras;if(Oe.length>0)for(let Ye=0,it=qe.length;Ye<it;Ye++){const Ze=qe[Ye];Sn(Xe,Oe,D,Ze)}Ke&&we.render(D);for(let Ye=0,it=qe.length;Ye<it;Ye++){const Ze=qe[Ye];sn(N,D,Ze,Ze.viewport)}}else Oe.length>0&&Sn(Xe,Oe,D,Z),Ke&&we.render(D),sn(N,D,Z)}j!==null&&J===0&&(W.updateMultisampleRenderTarget(j),W.updateRenderTargetMipmap(j)),oe&&z.end(A),D.isScene===!0&&D.onAfterRender(A,D,Z),ze.resetDefaultState(),ie=-1,te=null,U.pop(),U.length>0?(P=U[U.length-1],Ge===!0&&Ie.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,R.pop(),R.length>0?N=R[R.length-1]:N=null};function ii(D,Z,ue,oe){if(D.visible===!1)return;if(D.layers.test(Z.layers)){if(D.isGroup)ue=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Z);else if(D.isLight)P.pushLight(D),D.castShadow&&P.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||He.intersectsSprite(D)){oe&&mt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(jt);const Xe=Re.update(D),Oe=D.material;Oe.visible&&N.push(D,Xe,Oe,ue,mt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||He.intersectsObject(D))){const Xe=Re.update(D),Oe=D.material;if(oe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),mt.copy(D.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),mt.copy(Xe.boundingSphere.center)),mt.applyMatrix4(D.matrixWorld).applyMatrix4(jt)),Array.isArray(Oe)){const qe=Xe.groups;for(let Ye=0,it=qe.length;Ye<it;Ye++){const Ze=qe[Ye],at=Oe[Ze.materialIndex];at&&at.visible&&N.push(D,Xe,at,ue,mt.z,Ze)}}else Oe.visible&&N.push(D,Xe,Oe,ue,mt.z,null)}}const Ne=D.children;for(let Xe=0,Oe=Ne.length;Xe<Oe;Xe++)ii(Ne[Xe],Z,ue,oe)}function sn(D,Z,ue,oe){const{opaque:$,transmissive:Ne,transparent:Xe}=D;P.setupLightsView(ue),Ge===!0&&Ie.setGlobalState(A.clippingPlanes,ue),oe&&Ve.viewport(B.copy(oe)),$.length>0&&vi($,Z,ue),Ne.length>0&&vi(Ne,Z,ue),Xe.length>0&&vi(Xe,Z,ue),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Sn(D,Z,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[oe.id]===void 0){const at=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[oe.id]=new Gi(1,1,{generateMipmaps:!0,type:at?xa:mi,minFilter:Nr,samples:ut.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ne=P.state.transmissionRenderTarget[oe.id],Xe=oe.viewport||B;Ne.setSize(Xe.z*A.transmissionResolutionScale,Xe.w*A.transmissionResolutionScale);const Oe=A.getRenderTarget(),qe=A.getActiveCubeFace(),Ye=A.getActiveMipmapLevel();A.setRenderTarget(Ne),A.getClearColor(ve),ge=A.getClearAlpha(),ge<1&&A.setClearColor(16777215,.5),A.clear(),Ke&&we.render(ue);const it=A.toneMapping;A.toneMapping=Hi;const Ze=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),P.setupLightsView(oe),Ge===!0&&Ie.setGlobalState(A.clippingPlanes,oe),vi(D,ue,oe),W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Lt=0,Qt=Z.length;Lt<Qt;Lt++){const Yt=Z[Lt],{object:Ft,geometry:$e,material:Ot,group:lt}=Yt;if(Ot.side===Ii&&Ft.layers.test(oe.layers)){const yn=Ot.side;Ot.side=Wn,Ot.needsUpdate=!0,Ir(Ft,ue,oe,$e,Ot,lt),Ot.side=yn,Ot.needsUpdate=!0,at=!0}}at===!0&&(W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne))}A.setRenderTarget(Oe,qe,Ye),A.setClearColor(ve,ge),Ze!==void 0&&(oe.viewport=Ze),A.toneMapping=it}function vi(D,Z,ue){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,Ne=D.length;$<Ne;$++){const Xe=D[$],{object:Oe,geometry:qe,group:Ye}=Xe;let it=Xe.material;it.allowOverride===!0&&oe!==null&&(it=oe),Oe.layers.test(ue.layers)&&Ir(Oe,Z,ue,qe,it,Ye)}}function Ir(D,Z,ue,oe,$,Ne){D.onBeforeRender(A,Z,ue,oe,$,Ne),D.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(A,Z,ue,oe,D,Ne),$.transparent===!0&&$.side===Ii&&$.forceSinglePass===!1?($.side=Wn,$.needsUpdate=!0,A.renderBufferDirect(ue,Z,oe,$,D,Ne),$.side=ar,$.needsUpdate=!0,A.renderBufferDirect(ue,Z,oe,$,D,Ne),$.side=Ii):A.renderBufferDirect(ue,Z,oe,$,D,Ne),D.onAfterRender(A,Z,ue,oe,$,Ne)}function Br(D,Z,ue){Z.isScene!==!0&&(Z=st);const oe=E.get(D),$=P.state.lights,Ne=P.state.shadowsArray,Xe=$.state.version,Oe=We.getParameters(D,$.state,Ne,Z,ue),qe=We.getProgramCacheKey(Oe);let Ye=oe.programs;oe.environment=D.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(D.isMeshStandardMaterial?ye:pe).get(D.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&D.envMap===null?Z.environmentRotation:D.envMapRotation,Ye===void 0&&(D.addEventListener("dispose",Nn),Ye=new Map,oe.programs=Ye);let it=Ye.get(qe);if(it!==void 0){if(oe.currentProgram===it&&oe.lightsStateVersion===Xe)return qs(D,Oe),it}else Oe.uniforms=We.getUniforms(D),D.onBeforeCompile(Oe,A),it=We.acquireProgram(Oe,qe),Ye.set(qe,it),oe.uniforms=Oe.uniforms;const Ze=oe.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ze.clippingPlanes=Ie.uniform),qs(D,Oe),oe.needsLights=Ea(D),oe.lightsStateVersion=Xe,oe.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMap.value=$.state.directionalShadowMap,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotShadowMap.value=$.state.spotShadowMap,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMap.value=$.state.pointShadowMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),oe.currentProgram=it,oe.uniformsList=null,it}function fl(D){if(D.uniformsList===null){const Z=D.currentProgram.getUniforms();D.uniformsList=jc.seqWithValue(Z.seq,D.uniforms)}return D.uniformsList}function qs(D,Z){const ue=E.get(D);ue.outputColorSpace=Z.outputColorSpace,ue.batching=Z.batching,ue.batchingColor=Z.batchingColor,ue.instancing=Z.instancing,ue.instancingColor=Z.instancingColor,ue.instancingMorph=Z.instancingMorph,ue.skinning=Z.skinning,ue.morphTargets=Z.morphTargets,ue.morphNormals=Z.morphNormals,ue.morphColors=Z.morphColors,ue.morphTargetsCount=Z.morphTargetsCount,ue.numClippingPlanes=Z.numClippingPlanes,ue.numIntersection=Z.numClipIntersection,ue.vertexAlphas=Z.vertexAlphas,ue.vertexTangents=Z.vertexTangents,ue.toneMapping=Z.toneMapping}function rr(D,Z,ue,oe,$){Z.isScene!==!0&&(Z=st),W.resetTextureUnits();const Ne=Z.fog,Xe=oe.isMeshStandardMaterial?Z.environment:null,Oe=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Bs,qe=(oe.isMeshStandardMaterial?ye:pe).get(oe.envMap||Xe),Ye=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,it=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ze=!!ue.morphAttributes.position,at=!!ue.morphAttributes.normal,Lt=!!ue.morphAttributes.color;let Qt=Hi;oe.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Qt=A.toneMapping);const Yt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ft=Yt!==void 0?Yt.length:0,$e=E.get(oe),Ot=P.state.lights;if(Ge===!0&&(ct===!0||D!==te)){const bn=D===te&&oe.id===ie;Ie.setState(oe,D,bn)}let lt=!1;oe.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ot.state.version||$e.outputColorSpace!==Oe||$.isBatchedMesh&&$e.batching===!1||!$.isBatchedMesh&&$e.batching===!0||$.isBatchedMesh&&$e.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&$e.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$.isInstancedMesh&&$e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$e.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&$e.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&$e.instancingMorph===!1&&$.morphTexture!==null||$e.envMap!==qe||oe.fog===!0&&$e.fog!==Ne||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ie.numPlanes||$e.numIntersection!==Ie.numIntersection)||$e.vertexAlphas!==Ye||$e.vertexTangents!==it||$e.morphTargets!==Ze||$e.morphNormals!==at||$e.morphColors!==Lt||$e.toneMapping!==Qt||$e.morphTargetsCount!==Ft)&&(lt=!0):(lt=!0,$e.__version=oe.version);let yn=$e.currentProgram;lt===!0&&(yn=Br(oe,Z,$));let Xi=!1,Mn=!1,ai=!1;const Bt=yn.getUniforms(),En=$e.uniforms;if(Ve.useProgram(yn.program)&&(Xi=!0,Mn=!0,ai=!0),oe.id!==ie&&(ie=oe.id,Mn=!0),Xi||te!==D){Ve.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Bt.setValue(k,"projectionMatrix",D.projectionMatrix),Bt.setValue(k,"viewMatrix",D.matrixWorldInverse);const Tn=Bt.map.cameraPosition;Tn!==void 0&&Tn.setValue(k,pt.setFromMatrixPosition(D.matrixWorld)),ut.logarithmicDepthBuffer&&Bt.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Bt.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),te!==D&&(te=D,Mn=!0,ai=!0)}if($e.needsLights&&(Ot.state.directionalShadowMap.length>0&&Bt.setValue(k,"directionalShadowMap",Ot.state.directionalShadowMap,W),Ot.state.spotShadowMap.length>0&&Bt.setValue(k,"spotShadowMap",Ot.state.spotShadowMap,W),Ot.state.pointShadowMap.length>0&&Bt.setValue(k,"pointShadowMap",Ot.state.pointShadowMap,W)),$.isSkinnedMesh){Bt.setOptional(k,$,"bindMatrix"),Bt.setOptional(k,$,"bindMatrixInverse");const bn=$.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Bt.setValue(k,"boneTexture",bn.boneTexture,W))}$.isBatchedMesh&&(Bt.setOptional(k,$,"batchingTexture"),Bt.setValue(k,"batchingTexture",$._matricesTexture,W),Bt.setOptional(k,$,"batchingIdTexture"),Bt.setValue(k,"batchingIdTexture",$._indirectTexture,W),Bt.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&Bt.setValue(k,"batchingColorTexture",$._colorsTexture,W));const pn=ue.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&gt.update($,ue,yn),(Mn||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,Bt.setValue(k,"receiveShadow",$.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(En.envMap.value=qe,En.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Z.environment!==null&&(En.envMapIntensity.value=Z.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=SA()),Mn&&(Bt.setValue(k,"toneMappingExposure",A.toneMappingExposure),$e.needsLights&&js(En,ai),Ne&&oe.fog===!0&&nt.refreshFogUniforms(En,Ne),nt.refreshMaterialUniforms(En,oe,_e,ne,P.state.transmissionRenderTarget[D.id]),jc.upload(k,fl($e),En,W)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(jc.upload(k,fl($e),En,W),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Bt.setValue(k,"center",$.center),Bt.setValue(k,"modelViewMatrix",$.modelViewMatrix),Bt.setValue(k,"normalMatrix",$.normalMatrix),Bt.setValue(k,"modelMatrix",$.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const bn=oe.uniformsGroups;for(let Tn=0,zr=bn.length;Tn<zr;Tn++){const xi=bn[Tn];Te.update(xi,yn),Te.bind(xi,yn)}}return yn}function js(D,Z){D.ambientLightColor.needsUpdate=Z,D.lightProbe.needsUpdate=Z,D.directionalLights.needsUpdate=Z,D.directionalLightShadows.needsUpdate=Z,D.pointLights.needsUpdate=Z,D.pointLightShadows.needsUpdate=Z,D.spotLights.needsUpdate=Z,D.spotLightShadows.needsUpdate=Z,D.rectAreaLights.needsUpdate=Z,D.hemisphereLights.needsUpdate=Z}function Ea(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(D,Z,ue){const oe=E.get(D);oe.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),E.get(D.texture).__webglTexture=Z,E.get(D.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Z){const ue=E.get(D);ue.__webglFramebuffer=Z,ue.__useDefaultFramebuffer=Z===void 0};const ba=k.createFramebuffer();this.setRenderTarget=function(D,Z=0,ue=0){j=D,H=Z,J=ue;let oe=null,$=!1,Ne=!1;if(D){const Oe=E.get(D);if(Oe.__useDefaultFramebuffer!==void 0){Ve.bindFramebuffer(k.FRAMEBUFFER,Oe.__webglFramebuffer),B.copy(D.viewport),G.copy(D.scissor),ee=D.scissorTest,Ve.viewport(B),Ve.scissor(G),Ve.setScissorTest(ee),ie=-1;return}else if(Oe.__webglFramebuffer===void 0)W.setupRenderTarget(D);else if(Oe.__hasExternalTextures)W.rebindTextures(D,E.get(D.texture).__webglTexture,E.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const it=D.depthTexture;if(Oe.__boundDepthTexture!==it){if(it!==null&&E.has(it)&&(D.width!==it.image.width||D.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(D)}}const qe=D.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const Ye=E.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ye[Z])?oe=Ye[Z][ue]:oe=Ye[Z],$=!0):D.samples>0&&W.useMultisampledRTT(D)===!1?oe=E.get(D).__webglMultisampledFramebuffer:Array.isArray(Ye)?oe=Ye[ue]:oe=Ye,B.copy(D.viewport),G.copy(D.scissor),ee=D.scissorTest}else B.copy(Q).multiplyScalar(_e).floor(),G.copy(ae).multiplyScalar(_e).floor(),ee=Ae;if(ue!==0&&(oe=ba),Ve.bindFramebuffer(k.FRAMEBUFFER,oe)&&Ve.drawBuffers(D,oe),Ve.viewport(B),Ve.scissor(G),Ve.setScissorTest(ee),$){const Oe=E.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Oe.__webglTexture,ue)}else if(Ne){const Oe=Z;for(let qe=0;qe<D.textures.length;qe++){const Ye=E.get(D.textures[qe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+qe,Ye.__webglTexture,ue,Oe)}}else if(D!==null&&ue!==0){const Oe=E.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,ue)}ie=-1},this.readRenderTargetPixels=function(D,Z,ue,oe,$,Ne,Xe,Oe=0){if(!(D&&D.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=E.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe){Ve.bindFramebuffer(k.FRAMEBUFFER,qe);try{const Ye=D.textures[Oe],it=Ye.format,Ze=Ye.type;if(!ut.textureFormatReadable(it)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Ze)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=D.width-oe&&ue>=0&&ue<=D.height-$&&(D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),k.readPixels(Z,ue,oe,$,De.convert(it),De.convert(Ze),Ne))}finally{const Ye=j!==null?E.get(j).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(D,Z,ue,oe,$,Ne,Xe,Oe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=E.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Xe!==void 0&&(qe=qe[Xe]),qe)if(Z>=0&&Z<=D.width-oe&&ue>=0&&ue<=D.height-$){Ve.bindFramebuffer(k.FRAMEBUFFER,qe);const Ye=D.textures[Oe],it=Ye.format,Ze=Ye.type;if(!ut.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.bufferData(k.PIXEL_PACK_BUFFER,Ne.byteLength,k.STREAM_READ),D.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Oe),k.readPixels(Z,ue,oe,$,De.convert(it),De.convert(Ze),0);const Lt=j!==null?E.get(j).__webglFramebuffer:null;Ve.bindFramebuffer(k.FRAMEBUFFER,Lt);const Qt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Hy(k,Qt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,at),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ne),k.deleteBuffer(at),k.deleteSync(Qt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Z=null,ue=0){const oe=Math.pow(2,-ue),$=Math.floor(D.image.width*oe),Ne=Math.floor(D.image.height*oe),Xe=Z!==null?Z.x:0,Oe=Z!==null?Z.y:0;W.setTexture2D(D,0),k.copyTexSubImage2D(k.TEXTURE_2D,ue,0,0,Xe,Oe,$,Ne),Ve.unbindTexture()};const sr=k.createFramebuffer(),Ta=k.createFramebuffer();this.copyTextureToTexture=function(D,Z,ue=null,oe=null,$=0,Ne=null){Ne===null&&($!==0?(nl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=$,$=0):Ne=0);let Xe,Oe,qe,Ye,it,Ze,at,Lt,Qt;const Yt=D.isCompressedTexture?D.mipmaps[Ne]:D.image;if(ue!==null)Xe=ue.max.x-ue.min.x,Oe=ue.max.y-ue.min.y,qe=ue.isBox3?ue.max.z-ue.min.z:1,Ye=ue.min.x,it=ue.min.y,Ze=ue.isBox3?ue.min.z:0;else{const pn=Math.pow(2,-$);Xe=Math.floor(Yt.width*pn),Oe=Math.floor(Yt.height*pn),D.isDataArrayTexture?qe=Yt.depth:D.isData3DTexture?qe=Math.floor(Yt.depth*pn):qe=1,Ye=0,it=0,Ze=0}oe!==null?(at=oe.x,Lt=oe.y,Qt=oe.z):(at=0,Lt=0,Qt=0);const Ft=De.convert(Z.format),$e=De.convert(Z.type);let Ot;Z.isData3DTexture?(W.setTexture3D(Z,0),Ot=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(W.setTexture2DArray(Z,0),Ot=k.TEXTURE_2D_ARRAY):(W.setTexture2D(Z,0),Ot=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const lt=k.getParameter(k.UNPACK_ROW_LENGTH),yn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Xi=k.getParameter(k.UNPACK_SKIP_PIXELS),Mn=k.getParameter(k.UNPACK_SKIP_ROWS),ai=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ye),k.pixelStorei(k.UNPACK_SKIP_ROWS,it),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const Bt=D.isDataArrayTexture||D.isData3DTexture,En=Z.isDataArrayTexture||Z.isData3DTexture;if(D.isDepthTexture){const pn=E.get(D),bn=E.get(Z),Tn=E.get(pn.__renderTarget),zr=E.get(bn.__renderTarget);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let xi=0;xi<qe;xi++)Bt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(D).__webglTexture,$,Ze+xi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,Ne,Qt+xi)),k.blitFramebuffer(Ye,it,Xe,Oe,at,Lt,Xe,Oe,k.DEPTH_BUFFER_BIT,k.NEAREST);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||D.isRenderTargetTexture||E.has(D)){const pn=E.get(D),bn=E.get(Z);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,sr),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ta);for(let Tn=0;Tn<qe;Tn++)Bt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pn.__webglTexture,$,Ze+Tn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pn.__webglTexture,$),En?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bn.__webglTexture,Ne,Qt+Tn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bn.__webglTexture,Ne),$!==0?k.blitFramebuffer(Ye,it,Xe,Oe,at,Lt,Xe,Oe,k.COLOR_BUFFER_BIT,k.NEAREST):En?k.copyTexSubImage3D(Ot,Ne,at,Lt,Qt+Tn,Ye,it,Xe,Oe):k.copyTexSubImage2D(Ot,Ne,at,Lt,Ye,it,Xe,Oe);Ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else En?D.isDataTexture||D.isData3DTexture?k.texSubImage3D(Ot,Ne,at,Lt,Qt,Xe,Oe,qe,Ft,$e,Yt.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(Ot,Ne,at,Lt,Qt,Xe,Oe,qe,Ft,Yt.data):k.texSubImage3D(Ot,Ne,at,Lt,Qt,Xe,Oe,qe,Ft,$e,Yt):D.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ne,at,Lt,Xe,Oe,Ft,$e,Yt.data):D.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ne,at,Lt,Yt.width,Yt.height,Ft,Yt.data):k.texSubImage2D(k.TEXTURE_2D,Ne,at,Lt,Xe,Oe,Ft,$e,Yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,lt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Xi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Mn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ai),Ne===0&&Z.generateMipmaps&&k.generateMipmap(Ot),Ve.unbindTexture()},this.initRenderTarget=function(D){E.get(D).__webglFramebuffer===void 0&&W.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?W.setTextureCube(D,0):D.isData3DTexture?W.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?W.setTexture2DArray(D,0):W.setTexture2D(D,0),Ve.unbindTexture()},this.resetState=function(){H=0,J=0,j=null,Ve.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const yA=()=>{const s=Be.useRef(null),t=Be.useRef(null),i=Be.useRef(null),r=Be.useRef(new Nt(0,0)),l=Be.useRef(0),c=Be.useRef(!0);return Be.useEffect(()=>{if(c.current=!0,!s.current)return;const d=new Dv,h=new Jc(-1,1,1,-1,0,1),m=new Bv({alpha:!1,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!1});m.setPixelRatio(1),m.setSize(window.innerWidth,window.innerHeight),s.current.appendChild(m.domElement),t.current=m;const p=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,_=`
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
    `,g=new Gs(2,2),v=new gi({vertexShader:p,fragmentShader:_,uniforms:{uTime:{value:0},uResolution:{value:new Nt(window.innerWidth,window.innerHeight)},uMouse:{value:new Nt(0,0)}},depthWrite:!1,depthTest:!1});i.current=v;const y=new wi(g,v);d.add(y);const b=new TM,T=()=>{if(!c.current)return;const F=b.getElapsedTime();i.current&&(i.current.uniforms.uTime.value=F,i.current.uniforms.uMouse.value.lerp(r.current,.05)),m.render(d,h),l.current=requestAnimationFrame(T)};l.current=requestAnimationFrame(T);const M=()=>{if(t.current&&i.current){const F=window.innerWidth,L=window.innerHeight;t.current.setSize(F,L),i.current.uniforms.uResolution.value.set(F,L)}},x=F=>{const L=F.clientX/window.innerWidth*2-1,N=-(F.clientY/window.innerHeight)*2+1,P=window.innerWidth/window.innerHeight;r.current.set(L*P,N)};return window.addEventListener("resize",M),window.addEventListener("mousemove",x),()=>{c.current=!1,window.removeEventListener("resize",M),window.removeEventListener("mousemove",x),cancelAnimationFrame(l.current),t.current&&t.current.domElement&&t.current.domElement.parentNode&&(t.current.domElement.parentNode.removeChild(t.current.domElement),t.current.dispose()),g.dispose(),v.dispose()}},[]),q.jsx("div",{ref:s,className:"fixed inset-0 z-0 bg-[#030303]"})},H_=[{count:"5x",name:"HACKATHON WINNER"},{count:"3.55",name:"GPA"},{count:"185",name:"BENCH PRESS"}],kd=[],G_=[{name:"Inspired Island",url:"https://www.youtube.com/c/inspiredisland"},"Victor Wembanyama",{name:"Robert Borghesi",url:"https://robertborghesi.is/"}],MA=["Hey! I'm Shivam Maji, a sophomore at Santa Clara University studying Computer Engineerng and Mechanical Engineering. I build software, design hardware, and like when the two meet in the middle.","On the CS side, I started out modding Minecraft in Java and making games in Unity. Since then I've moved through frontend work in React, picked up Python for AI and computer vision, messed around with C++ and Kotlin, and trained models in PyTorch and TensorFlow. I like learning whatever the project demands and figuring it out as I go. Hackathons have become my favorite way to build fast, break things, and walk away with something that actually works.","I'm a member of my university's Formula SAE team, where I work on aerodynamics and chassis design using SolidWorks and ANSYS. On the hardware side, I've worked with Verilog and ASIC design.","Huge space nerd. The goal is aerospace — NASA, SpaceX, somewhere with a mission control. I also cook, lift, play chess poorly, and have spent way too much money on camera gear.","Open to internships, collaborations, or a good conversation."],Xd={email:"smaji@scu.edu",socials:[{name:"GITHUB",url:"https://github.com/dgne58"},{name:"LINKEDIN",url:"https://www.linkedin.com/in/shivam-maji/"}]};var ha={},Wd={},pa={},V_;function zv(){if(V_)return pa;V_=1,Object.defineProperty(pa,"__esModule",{value:!0}),pa.loop=pa.conditional=pa.parse=void 0;var s=function r(l,c){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d;if(Array.isArray(c))c.forEach(function(p){return r(l,p,d,h)});else if(typeof c=="function")c(l,d,h,r);else{var m=Object.keys(c)[0];Array.isArray(c[m])?(h[m]={},r(l,c[m],d,h[m])):h[m]=c[m](l,d,h,r)}return d};pa.parse=s;var t=function(l,c){return function(d,h,m,p){c(d,h,m)&&p(d,l,h,m)}};pa.conditional=t;var i=function(l,c){return function(d,h,m,p){for(var _=[],g=d.pos;c(d,h,m);){var v={};if(p(d,l,h,v),d.pos===g)break;g=d.pos,_.push(v)}return _}};return pa.loop=i,pa}var an={},k_;function Hv(){if(k_)return an;k_=1,Object.defineProperty(an,"__esModule",{value:!0}),an.readBits=an.readArray=an.readUnsigned=an.readString=an.peekBytes=an.readBytes=an.peekByte=an.readByte=an.buildStream=void 0;var s=function(g){return{data:g,pos:0}};an.buildStream=s;var t=function(){return function(g){return g.data[g.pos++]}};an.readByte=t;var i=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(v){return v.data[v.pos+g]}};an.peekByte=i;var r=function(g){return function(v){return v.data.subarray(v.pos,v.pos+=g)}};an.readBytes=r;var l=function(g){return function(v){return v.data.subarray(v.pos,v.pos+g)}};an.peekBytes=l;var c=function(g){return function(v){return Array.from(r(g)(v)).map(function(y){return String.fromCharCode(y)}).join("")}};an.readString=c;var d=function(g){return function(v){var y=r(2)(v);return g?(y[1]<<8)+y[0]:(y[0]<<8)+y[1]}};an.readUnsigned=d;var h=function(g,v){return function(y,b,T){for(var M=typeof v=="function"?v(y,b,T):v,x=r(g),F=new Array(M),L=0;L<M;L++)F[L]=x(y);return F}};an.readArray=h;var m=function(g,v,y){for(var b=0,T=0;T<y;T++)b+=g[v+T]&&Math.pow(2,y-T-1);return b},p=function(g){return function(v){for(var y=t()(v),b=new Array(8),T=0;T<8;T++)b[7-T]=!!(y&1<<T);return Object.keys(g).reduce(function(M,x){var F=g[x];return F.length?M[x]=m(b,F.index,F.length):M[x]=b[F.index],M},{})}};return an.readBits=p,an}var X_;function EA(){return X_||(X_=1,(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var t=zv(),i=Hv(),r={blocks:function(v){for(var y=0,b=[],T=v.data.length,M=0,x=(0,i.readByte)()(v);x!==y&&x;x=(0,i.readByte)()(v)){if(v.pos+x>=T){var F=T-v.pos;b.push((0,i.readBytes)(F)(v)),M+=F;break}b.push((0,i.readBytes)(x)(v)),M+=x}for(var L=new Uint8Array(M),N=0,P=0;P<b.length;P++)L.set(b[P],N),N+=b[P].length;return L}},l=(0,t.conditional)({gce:[{codes:(0,i.readBytes)(2)},{byteSize:(0,i.readByte)()},{extras:(0,i.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,i.readUnsigned)(!0)},{transparentColorIndex:(0,i.readByte)()},{terminator:(0,i.readByte)()}]},function(g){var v=(0,i.peekBytes)(2)(g);return v[0]===33&&v[1]===249}),c=(0,t.conditional)({image:[{code:(0,i.readByte)()},{descriptor:[{left:(0,i.readUnsigned)(!0)},{top:(0,i.readUnsigned)(!0)},{width:(0,i.readUnsigned)(!0)},{height:(0,i.readUnsigned)(!0)},{lct:(0,i.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,i.readArray)(3,function(g,v,y){return Math.pow(2,y.descriptor.lct.size+1)})},function(g,v,y){return y.descriptor.lct.exists}),{data:[{minCodeSize:(0,i.readByte)()},r]}]},function(g){return(0,i.peekByte)()(g)===44}),d=(0,t.conditional)({text:[{codes:(0,i.readBytes)(2)},{blockSize:(0,i.readByte)()},{preData:function(v,y,b){return(0,i.readBytes)(b.text.blockSize)(v)}},r]},function(g){var v=(0,i.peekBytes)(2)(g);return v[0]===33&&v[1]===1}),h=(0,t.conditional)({application:[{codes:(0,i.readBytes)(2)},{blockSize:(0,i.readByte)()},{id:function(v,y,b){return(0,i.readString)(b.blockSize)(v)}},r]},function(g){var v=(0,i.peekBytes)(2)(g);return v[0]===33&&v[1]===255}),m=(0,t.conditional)({comment:[{codes:(0,i.readBytes)(2)},r]},function(g){var v=(0,i.peekBytes)(2)(g);return v[0]===33&&v[1]===254}),p=[{header:[{signature:(0,i.readString)(3)},{version:(0,i.readString)(3)}]},{lsd:[{width:(0,i.readUnsigned)(!0)},{height:(0,i.readUnsigned)(!0)},{gct:(0,i.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,i.readByte)()},{pixelAspectRatio:(0,i.readByte)()}]},(0,t.conditional)({gct:(0,i.readArray)(3,function(g,v){return Math.pow(2,v.lsd.gct.size+1)})},function(g,v){return v.lsd.gct.exists}),{frames:(0,t.loop)([l,h,m,c,d],function(g){var v=(0,i.peekByte)()(g);return v===33||v===44})}],_=p;s.default=_})(Wd)),Wd}var Wo={},W_;function bA(){if(W_)return Wo;W_=1,Object.defineProperty(Wo,"__esModule",{value:!0}),Wo.deinterlace=void 0;var s=function(i,r){for(var l=new Array(i.length),c=i.length/r,d=function(y,b){var T=i.slice(b*r,(b+1)*r);l.splice.apply(l,[y*r,r].concat(T))},h=[0,4,2,1],m=[8,8,4,2],p=0,_=0;_<4;_++)for(var g=h[_];g<c;g+=m[_])d(g,p),p++;return l};return Wo.deinterlace=s,Wo}var qo={},q_;function TA(){if(q_)return qo;q_=1,Object.defineProperty(qo,"__esModule",{value:!0}),qo.lzw=void 0;var s=function(i,r,l){var c=4096,d=-1,h=l,m,p,_,g,v,y,b,U,T,M,R,x,z,A,H,w,F=new Array(l),L=new Array(c),N=new Array(c),P=new Array(c+1);for(x=i,p=1<<x,v=p+1,m=p+2,b=d,g=x+1,_=(1<<g)-1,T=0;T<p;T++)L[T]=0,N[T]=T;var R,U,z,A,w,H;for(R=U=z=A=w=H=0,M=0;M<h;){if(A===0){if(U<g){R+=r[H]<<U,U+=8,H++;continue}if(T=R&_,R>>=g,U-=g,T>m||T==v)break;if(T==p){g=x+1,_=(1<<g)-1,m=p+2,b=d;continue}if(b==d){P[A++]=N[T],b=T,z=T;continue}for(y=T,T==m&&(P[A++]=z,T=b);T>p;)P[A++]=N[T],T=L[T];z=N[T]&255,P[A++]=z,m<c&&(L[m]=b,N[m]=z,m++,(m&_)===0&&m<c&&(g++,_+=m)),b=y}A--,F[w++]=P[A],M++}for(M=w;M<h;M++)F[M]=0;return F};return qo.lzw=s,qo}var j_;function AA(){if(j_)return ha;j_=1,Object.defineProperty(ha,"__esModule",{value:!0}),ha.decompressFrames=ha.decompressFrame=ha.parseGIF=void 0;var s=c(EA()),t=zv(),i=Hv(),r=bA(),l=TA();function c(_){return _&&_.__esModule?_:{default:_}}var d=function(g){var v=new Uint8Array(g);return(0,t.parse)((0,i.buildStream)(v),s.default)};ha.parseGIF=d;var h=function(g){for(var v=g.pixels.length,y=new Uint8ClampedArray(v*4),b=0;b<v;b++){var T=b*4,M=g.pixels[b],x=g.colorTable[M]||[0,0,0];y[T]=x[0],y[T+1]=x[1],y[T+2]=x[2],y[T+3]=M!==g.transparentIndex?255:0}return y},m=function(g,v,y){if(!g.image){console.warn("gif frame does not have associated image.");return}var b=g.image,T=b.descriptor.width*b.descriptor.height,M=(0,l.lzw)(b.data.minCodeSize,b.data.blocks,T);b.descriptor.lct.interlaced&&(M=(0,r.deinterlace)(M,b.descriptor.width));var x={pixels:M,dims:{top:g.image.descriptor.top,left:g.image.descriptor.left,width:g.image.descriptor.width,height:g.image.descriptor.height}};return b.descriptor.lct&&b.descriptor.lct.exists?x.colorTable=b.lct:x.colorTable=v,g.gce&&(x.delay=(g.gce.delay||10)*10,x.disposalType=g.gce.extras.disposal,g.gce.extras.transparentColorGiven&&(x.transparentIndex=g.gce.transparentColorIndex)),y&&(x.patch=h(x)),x};ha.decompressFrame=m;var p=function(g,v){return g.frames.filter(function(y){return y.image}).map(function(y){return m(y,g.gct,v)})};return ha.decompressFrames=p,ha}var Y_=AA();const RA=({previewState:s})=>{const t=Be.useRef(null),i=Be.useRef(null),r=Be.useRef(null),l=Be.useRef(null),c=Be.useRef(null),d=Be.useRef(null),h=Be.useRef(null),m=Be.useRef(null),p=Be.useRef(null),_=Be.useRef({main:new ce(0,0,0),tl:new ce(-370,115,10),br:new ce(-410,-125,12)}),g=Be.useRef([]),v=Be.useRef(0),y=Be.useRef(0),b=Be.useRef(!1),T=Be.useRef(0),M=Be.useRef(null),x=Be.useRef(0),F=Be.useRef(0),L=Be.useRef({x:0,y:0}),N=Be.useRef({x:0,y:0}),P=Be.useRef({x:0,y:0}),R=Be.useRef({x:0,y:0}),U=Be.useRef({x:0,y:0}),z=Be.useRef({main:{px:Math.random()*Math.PI*2,py:Math.random()*Math.PI*2,pr:Math.random()*Math.PI*2},tl:{px:Math.random()*Math.PI*2,py:Math.random()*Math.PI*2,pr:Math.random()*Math.PI*2},br:{px:Math.random()*Math.PI*2,py:Math.random()*Math.PI*2,pr:Math.random()*Math.PI*2}}),A=Be.useRef(new EM),w=Be.useRef(new Map),H=Be.useRef(null),J=Be.useRef(Math.random()*100),j=Be.useRef(new Map),ie=Be.useRef(null),te=Be.useRef(0),B=1200,G=700,ee=Be.useCallback(()=>{if(typeof window>"u")return{width:B,height:G,scale:1};const de=window.innerWidth,be=window.innerHeight,Q=de*.8/B,ae=be*.75/G,Ae=Math.max(.4,Math.min(1.4,Math.min(Q,ae)));return{width:B*Ae,height:G*Ae,scale:Ae}},[]),[ve,ge]=Be.useState(ee),I=Be.useRef(ve);I.current=ve;const ne=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,_e=`
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

      // Soft edge feather — 4px fade at every edge to eliminate hard geometry aliasing
      vec2 edgeSoft = vec2(4.0) / uResolution;
      float mx = smoothstep(0.0, edgeSoft.x, uv.x) * smoothstep(1.0, 1.0 - edgeSoft.x, uv.x);
      float my = smoothstep(0.0, edgeSoft.y, uv.y) * smoothstep(1.0, 1.0 - edgeSoft.y, uv.y);
      float edgeMask = mx * my;

      vec4 finalColor;
      if (uHasOld > 0.5) {
        finalColor = mix(oldColor, newColor, visible);
      } else {
        finalColor = newColor;
        finalColor.a *= visible;
      }
      finalColor.a *= edgeMask;
      if (finalColor.a < 0.001) discard;
      gl_FragColor = finalColor;
    }
  `;return Be.useEffect(()=>{const de=document.createElement("canvas");de.width=1,de.height=1;const be=de.getContext("2d");be&&(be.fillStyle="rgba(0,0,0,0)",be.fillRect(0,0,1,1));const Q=new m_(de);return H.current=Q,ie.current=window.setInterval(()=>{const ae=performance.now();j.current.forEach((Ae,He)=>{const Ge=ae-Ae.lastFrameTime,ct=Ae.delays[Ae.currentFrame]||100;Ge>=ct&&(Ae.currentFrame=(Ae.currentFrame+1)%Ae.frames.length,Ae.lastFrameTime=ae,Ae.ctx.putImageData(Ae.frames[Ae.currentFrame],0,0),He.needsUpdate=!0)})},16),()=>{ie.current&&clearInterval(ie.current)}},[]),Be.useEffect(()=>{if(!i.current)return;const de=I.current,be=new Dv;r.current=be;const Q=new Jc(B/-2,B/2,G/2,G/-2,1,1e3);Q.position.z=100,l.current=Q;const ae=new Bv({alpha:!0,antialias:!0,powerPreference:"high-performance"});ae.setSize(de.width,de.height),ae.setPixelRatio(Math.min(window.devicePixelRatio,2)),ae.sortObjects=!0,ae.domElement.style.display="block",ae.domElement.style.position="absolute",ae.domElement.style.top="0",ae.domElement.style.left="0",i.current.appendChild(ae.domElement),c.current=ae,t.current&&(t.current.style.width=`${de.width}px`,t.current.style.height=`${de.height}px`);const Ae=new Ko;be.add(Ae),d.current=Ae;const He=(et,k,St,Qe,ut)=>{const Ve=new Gs(et,k),O=new gi({uniforms:{uTexture:{value:null},uTextureOld:{value:null},uHasOld:{value:0},uProgress:{value:0},uSeed:{value:J.current},uResolution:{value:new Nt(et,k)}},transparent:!0,vertexShader:ne,fragmentShader:_e,side:Ii}),E=new wi(Ve,O);return E.position.set(St,Qe,ut),E.visible=!1,Ae.add(E),g.current.push(O),E},Ge=He(483,322,_.current.main.x,_.current.main.y,_.current.main.z);h.current=Ge;const ct=He(253,172,_.current.tl.x,_.current.tl.y,_.current.tl.z);m.current=ct;const jt=He(207,276,_.current.br.x,_.current.br.y,_.current.br.z);p.current=jt;const pt=()=>{if(!(v.current>.001||y.current>.001)){b.current=!1,t.current&&(t.current.style.opacity="0");return}T.current=requestAnimationFrame(pt);const k=y.current<v.current,St=y.current-v.current;v.current+=St*(k?.045:.015),Math.abs(y.current-v.current)<.001&&(v.current=y.current),g.current.forEach(we=>{we&&(we.uniforms.uProgress.value=v.current)});const Qe=L.current;N.current.x+=(Qe.x-N.current.x)*.05,N.current.y+=(Qe.y-N.current.y)*.05,P.current.x+=(Qe.x-P.current.x)*.03,P.current.y+=(Qe.y-P.current.y)*.03,R.current.x+=(Qe.x-R.current.x)*.09,R.current.y+=(Qe.y-R.current.y)*.09,U.current.x+=(Qe.x-U.current.x)*.07,U.current.y+=(Qe.y-U.current.y)*.07;const ut=N.current.x,Ve=N.current.y,O=performance.now()/1e3,E=v.current,W=z.current,pe=Math.sin(O*.45+W.main.px)*6*E,ye=Math.sin(O*.37+W.main.py)*5*E,he=Math.sin(O*.28+W.main.pr)*.008*E,ke=Math.sin(O*.52+W.tl.px)*9*E,Re=Math.sin(O*.41+W.tl.py)*7*E,We=Math.sin(O*.33+W.tl.pr)*.012*E,nt=Math.sin(O*.48+W.br.px)*8*E,Ee=Math.sin(O*.35+W.br.py)*6*E,Ce=Math.sin(O*.25+W.br.pr)*.01*E,Ie=.19;if(d.current&&(d.current.rotation.y=ut*Ie,d.current.rotation.x=-Ve*Ie),h.current){const we=_.current.main;h.current.position.x=we.x+P.current.x*22+pe,h.current.position.y=we.y+P.current.y*22+ye,h.current.rotation.z=he}if(m.current){const we=_.current.tl;m.current.position.x=we.x+R.current.x*48+ke,m.current.position.y=we.y+R.current.y*48+Re,m.current.rotation.z=We}if(p.current){const we=_.current.br;p.current.position.x=we.x+U.current.x*36+nt,p.current.position.y=we.y+U.current.y*36+Ee,p.current.rotation.z=Ce}const Pe=x.current-F.current;F.current+=Pe*.12,t.current&&(t.current.style.transform=`translate3d(-50%, ${F.current}px, 0)`,g.current.length>0&&(v.current>.01?(t.current.style.opacity="1",ae.render(be,Q)):t.current.style.opacity="0"))},mt=()=>{b.current||(b.current=!0,pt())};M.current=mt;const st=et=>{const k=et.clientX/window.innerWidth*2-1,St=-(et.clientY/window.innerHeight*2-1);L.current={x:k,y:St}};window.addEventListener("mousemove",st);const Ke=()=>{const et=ee();ge(et),ae.setSize(et.width,et.height),t.current&&(t.current.style.width=`${et.width}px`,t.current.style.height=`${et.height}px`)};return window.addEventListener("resize",Ke),()=>{cancelAnimationFrame(T.current),window.removeEventListener("mousemove",st),window.removeEventListener("resize",Ke),i.current&&ae.domElement&&i.current.removeChild(ae.domElement),ae.dispose(),g.current.forEach(et=>et.dispose()),g.current=[],M.current=null,d.current=null}},[ee,ge]),Be.useEffect(()=>{var be,Q;const de=Math.random();if(te.current=de,s&&s.project.img){const{project:ae,top:Ae,height:He}=s,ct=Ae+He/2-I.current.height/2;x.current=ct,_.current.main.y=0,v.current<.05&&g.current.length>0&&g.current[0].uniforms.uHasOld.value<.5&&(F.current=ct);const jt=st=>st.toLowerCase().endsWith(".gif"),pt=st=>st?w.current.has(st)?Promise.resolve(w.current.get(st)):jt(st)?fetch(st).then(Ke=>Ke.arrayBuffer()).then(Ke=>{const et=Y_.parseGIF(Ke),k=Y_.decompressFrames(et,!0);if(k.length===0)return H.current;const St=et.lsd.width,Qe=et.lsd.height,ut=document.createElement("canvas");ut.width=St,ut.height=Qe;const Ve=ut.getContext("2d");if(!Ve)return H.current;const O=document.createElement("canvas");O.width=St,O.height=Qe;const E=O.getContext("2d"),W=document.createElement("canvas"),pe=W.getContext("2d"),ye=[];k.forEach((Re,We)=>{if(We>0){const Ee=k[We-1];Ee.disposalType===2&&E.clearRect(Ee.dims.left,Ee.dims.top,Ee.dims.width,Ee.dims.height)}W.width=Re.dims.width,W.height=Re.dims.height;const nt=new ImageData(new Uint8ClampedArray(Re.patch),Re.dims.width,Re.dims.height);pe.putImageData(nt,0,0),E.drawImage(W,Re.dims.left,Re.dims.top),ye.push(E.getImageData(0,0,St,Qe))});const he=k.map(Re=>Re.delay||100);Ve.putImageData(ye[0],0,0);const ke=new m_(ut);return ke.wrapS=ti,ke.wrapT=ti,ke.minFilter=dn,ke.magFilter=dn,ke.generateMipmaps=!1,j.current.set(ke,{frames:ye,delays:he,currentFrame:0,lastFrameTime:performance.now(),canvas:ut,ctx:Ve}),w.current.set(st,ke),ke}).catch(()=>H.current):new Promise(Ke=>{A.current.load(st,et=>{et.wrapS=ti,et.wrapT=ti,et.minFilter=dn,et.magFilter=dn,et.center.set(.5,.5),et.repeat.set(1,1),et.needsUpdate=!0,w.current.set(st,et),Ke(et)},void 0,()=>{Ke(H.current)})}):Promise.resolve(H.current),mt=[ae.img,(be=ae.subImages)==null?void 0:be[0],(Q=ae.subImages)==null?void 0:Q[1]];Promise.all(mt.map(pt)).then(st=>{if(te.current!==de)return;const Ke=g.current,et=[h.current,m.current,p.current],k=v.current>.15;st.forEach((St,Qe)=>{if(Ke[Qe]&&et[Qe]){const ut=Ke[Qe].uniforms.uTexture.value,Ve=et[Qe].visible,O=ut&&ut!==H.current;Ve&&O&&k?(Ke[Qe].uniforms.uTextureOld.value=ut,Ke[Qe].uniforms.uHasOld.value=1):Ke[Qe].uniforms.uHasOld.value=0,Ke[Qe].uniforms.uTexture.value=St;const E=St!==H.current,W=Ke[Qe].uniforms.uHasOld.value>.5;E||W?et[Qe].visible=!0:et[Qe].visible=!1}}),v.current=0,y.current=1,M.current&&M.current()}),M.current&&M.current()}else y.current=0,g.current.forEach(ae=>{ae.uniforms.uHasOld.value=0}),M.current&&M.current()},[s]),q.jsxs("div",{ref:t,className:"fixed top-0 left-1/2 z-50 pointer-events-none",style:{width:`${ve.width}px`,height:`${ve.height}px`,opacity:0,transform:"translate3d(-50%, -2000px, 0)"},children:[q.jsx("div",{ref:i,className:"absolute inset-0 z-0"}),s&&s.project.description&&q.jsxs("div",{className:"absolute top-1/2 bg-black/80 backdrop-blur-md p-6 border border-white/10 text-white text-xs font-mono uppercase leading-relaxed tracking-wider z-[60] shadow-2xl rounded-sm transition-opacity duration-300",style:{left:"72%",width:"280px",transform:"translateY(-50%) translateZ(20px)",opacity:s?1:0},children:[q.jsx("span",{className:"block mb-3 text-white font-bold text-sm border-b border-white/20 pb-2",children:s.project.name}),q.jsx("p",{className:"text-gray-300 normal-case",children:s.project.description})]})]})},CA="1f18c55d021ac35f6da072db92dafacd",wA="ts6ki",DA="https://ws.audioscrobbler.com/2.0/",UA=3e4,NA="2a96cbd8b46e442fc41c2b86b821562f",LA=s=>{var i,r;const t=((i=s==null?void 0:s.find(l=>l.size==="extralarge"))==null?void 0:i["#text"])||((r=s==null?void 0:s[s.length-1])==null?void 0:r["#text"])||"";return!t||t.includes(NA)?null:t},OA=s=>{var t,i;return{name:s.name,artist:((t=s.artist)==null?void 0:t["#text"])??"",album:((i=s.album)==null?void 0:i["#text"])??"",image:LA(s.image),url:s.url,playedAt:s.date?parseInt(s.date.uts,10):null}};function PA(){const[s,t]=Be.useState({status:"loading",track:null}),i=Be.useRef(null);return Be.useEffect(()=>{let r=!1;const l=`${DA}?method=user.getrecenttracks&user=${wA}&api_key=${CA}&format=json&limit=1`,c=async()=>{var p,_,g,v;(p=i.current)==null||p.abort();const m=new AbortController;i.current=m;try{const y=await fetch(l,{signal:m.signal});if(!y.ok)throw new Error(`Last.fm ${y.status}`);const b=await y.json(),T=(g=(_=b==null?void 0:b.recenttracks)==null?void 0:_.track)==null?void 0:g[0];if(!T){r||t({status:"recent",track:null});return}const M=OA(T),x=((v=T["@attr"])==null?void 0:v.nowplaying)==="true";r||t({status:x?"playing":"recent",track:M})}catch(y){if(y.name==="AbortError")return;r||t(b=>b.track?b:{status:"error",track:null})}};c();const d=window.setInterval(()=>{document.hidden||c()},UA),h=()=>{document.hidden||c()};return document.addEventListener("visibilitychange",h),()=>{var m;r=!0,clearInterval(d),(m=i.current)==null||m.abort(),document.removeEventListener("visibilitychange",h)}},[]),s}const FA=[["top-left","┌"],["top-right","┐"],["bottom-left","└"],["bottom-right","┘"]],tr=({children:s,title:t,rightTag:i,className:r="",contentClassName:l=""})=>q.jsxs("div",{className:`tui-panel ${r}`,role:"region","aria-label":t,children:[FA.map(([c,d])=>q.jsx("span",{"aria-hidden":"true",className:`tui-panel__corner tui-panel__corner--${c}`,children:d},c)),q.jsxs("div",{className:"tui-panel__title","aria-hidden":"true",children:[q.jsx("span",{className:"text-white/40",children:"─["}),q.jsx("span",{className:"text-gray-200",children:t}),q.jsx("span",{className:"text-white/40",children:"]─"})]}),i&&q.jsxs("div",{className:"tui-panel__tag","aria-hidden":"true",children:["[",i,"]"]}),q.jsx("div",{className:`tui-panel__content ${l}`,children:s})]}),IA="https://www.last.fm/user/ts6ki",BA=s=>{const t=Math.max(0,Math.floor(Date.now()/1e3-s));if(t<60)return"just now";const i=Math.floor(t/60);if(i<60)return`${i}m ago`;const r=Math.floor(i/60);return r<24?`${r}h ago`:`${Math.floor(r/24)}d ago`},zA=()=>q.jsxs("span",{className:"np-eq","aria-hidden":"true",children:[q.jsx("span",{className:"np-bar"}),q.jsx("span",{className:"np-bar"}),q.jsx("span",{className:"np-bar"})]}),HA=()=>{const{status:s,track:t}=PA();if(s==="error")return null;const i=s==="playing";return q.jsx(tr,{title:"~/now-playing",children:q.jsxs("a",{href:IA,target:"_blank",rel:"noopener noreferrer",title:"Last.fm - ts6ki",className:"group block",children:[q.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3 font-pixel text-[9px] uppercase tracking-[0.14em] text-gray-500",children:[q.jsxs("span",{className:"flex items-center gap-2 transition-colors group-hover:text-white",children:[i?q.jsx(zA,{}):q.jsx("span",{className:"h-1.5 w-1.5 bg-gray-500 group-hover:bg-white"}),"now-playing:"]}),q.jsx("span",{className:"shrink-0 transition-colors group-hover:text-white",children:"last.fm ↗"})]}),q.jsxs("div",{className:"grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3",children:[q.jsx("div",{className:"h-10 w-10 overflow-hidden border border-white/15 bg-white/[0.03] transition-colors group-hover:border-white/40",children:(t==null?void 0:t.image)&&q.jsx("img",{src:t.image,alt:"",width:40,height:40,loading:"lazy",className:"h-full w-full object-cover"})}),q.jsx("div",{className:"min-w-0 truncate text-xs text-gray-300 transition-all group-hover:text-white group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.45)]",children:s==="loading"?q.jsx("span",{className:"text-gray-500",children:"reading recenttracks ..."}):t?q.jsxs(q.Fragment,{children:[t.name," ",q.jsx("span",{className:"text-gray-600",children:"--"})," ",t.artist,!i&&t.playedAt&&q.jsxs("span",{className:"text-gray-600",children:[" / ",BA(t.playedAt)]})]}):q.jsx("span",{className:"text-gray-500",children:"nothing scrobbled yet"})})]})]})})},Ns=({command:s,user:t="shivam",host:i="scu",path:r="~",cursor:l=!0,className:c=""})=>q.jsxs("div",{className:`tui-prompt ${c}`,children:[q.jsxs("span",{className:"text-gray-400",children:[t,"@",i]}),q.jsxs("span",{className:"text-gray-600",children:[":",r,"$"]}),q.jsx("span",{className:"text-gray-200",children:s}),l&&q.jsx("span",{className:"blink-cursor text-white","aria-hidden":"true",children:"▮"})]}),Z_="https://letterboxd.com/shiv8m/",GA="/",K_=[{title:"2001: A Space Odyssey",year:1968,file:"2001-a-space-odyssey.jpg"},{title:"Blade Runner",year:1982,file:"blade-runner.jpg"},{title:"Vampire Hunter D: Bloodlust",year:2e3,file:"vampire-hunter-d.jpg"},{title:"Whiplash",year:2014,file:"whiplash.jpg"}],VA=()=>q.jsxs(tr,{title:"~/favorite-films",rightTag:String(K_.length),children:[q.jsxs("a",{href:Z_,target:"_blank",rel:"noopener noreferrer",className:"group mb-5 flex items-center justify-between gap-3",children:[q.jsx(Ns,{command:"ls ./favorites --posters",cursor:!1}),q.jsx("span",{className:"hidden shrink-0 font-pixel text-[9px] uppercase tracking-[0.14em] text-gray-500 transition-colors group-hover:text-white sm:block",children:"letterboxd ↗"})]}),q.jsx("div",{className:"grid grid-cols-4 gap-1.5 sm:gap-2.5",children:K_.map(s=>q.jsxs("a",{href:Z_,target:"_blank",rel:"noopener noreferrer",title:`${s.title} (${s.year})`,className:"group block min-w-0",children:[q.jsx("img",{src:`${GA}images/films/${s.file}`,alt:s.title,width:200,height:300,loading:"lazy",className:"aspect-[2/3] w-full border border-white/15 object-cover transition-all duration-300 group-hover:border-white/40 group-hover:brightness-110 group-hover:[box-shadow:0_0_12px_rgba(255,255,255,0.25)] motion-safe:group-hover:-translate-y-1"}),q.jsxs("span",{className:"mt-2 hidden truncate font-pixel text-[8px] uppercase tracking-[0.08em] text-gray-600 transition-colors group-hover:text-gray-300 sm:block",children:[s.year," / ",s.title]})]},s.file))})]}),kA=String.raw`
███████╗██╗  ██╗██╗██╗   ██╗ █████╗ ███╗   ███╗    ███╗   ███╗ █████╗      ██╗██╗
██╔════╝██║  ██║██║██║   ██║██╔══██╗████╗ ████║    ████╗ ████║██╔══██╗     ██║██║
███████╗███████║██║██║   ██║███████║██╔████╔██║    ██╔████╔██║███████║     ██║██║
╚════██║██╔══██║██║╚██╗ ██╔╝██╔══██║██║╚██╔╝██║    ██║╚██╔╝██║██╔══██║██   ██║██║
███████║██║  ██║██║ ╚████╔╝ ██║  ██║██║ ╚═╝ ██║    ██║ ╚═╝ ██║██║  ██║╚█████╔╝██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝     ╚═╝    ╚═╝     ╚═╝╚═╝  ╚═╝ ╚════╝ ╚═╝`,XA=({className:s="",ariaHidden:t=!1})=>q.jsx("pre",{"aria-label":t?void 0:"Shivam Maji","aria-hidden":t||void 0,className:`ascii-banner ${s}`,children:kA}),Q_=({children:s,className:t="",position:i="bottom"})=>q.jsx("div",{className:`tui-status-bar tui-status-bar--${i} ${t}`,children:s}),Gc=()=>q.jsx("span",{"aria-hidden":"true",children:"↗"}),qd=({label:s,children:t})=>q.jsxs("div",{className:"grid grid-cols-[3.25rem_1fr] gap-2",children:[q.jsxs("span",{className:"text-white",children:["[ ",s," ]"]}),q.jsx("span",{className:"text-gray-500",children:t})]}),WA=()=>q.jsx("div",{className:"mb-8 px-4 md:hidden",children:q.jsxs("div",{className:"tui-mobile-notice",role:"status","aria-live":"polite",children:[q.jsx("span",{className:"tui-mobile-notice__label","aria-hidden":"true",children:"[ warn ]"}),q.jsxs("p",{children:[q.jsx("span",{className:"text-gray-300",children:"sys.notice:"})," best viewed on"," ",q.jsx("span",{className:"text-white",children:"desktop terminal"})]})]})}),qA=({introComplete:s=!0})=>{const[t,i]=Be.useState(null),[r,l]=Be.useState(null),[c,d]=Be.useState([]),[h,m]=Be.useState(0),[p,_]=Be.useState(null),[g,v]=Be.useState(""),y=Be.useRef(null),b=Be.useRef(null),T=Be.useRef(0),M=Be.useRef(0),x=Be.useRef(0);Be.useEffect(()=>{fetch("/data/projects.json").then(R=>R.json()).then(R=>d(R)).catch(R=>console.error("Failed to load projects",R))},[]),Be.useEffect(()=>{const R="shivam-majis-team-2734",U="first-counter-2734",z="https://api.allorigins.win/raw?url=",A="portfolio_counted_this_session",w="portfolio_last_count",H=sessionStorage.getItem(A);(async()=>{var ie,te;const j=localStorage.getItem(w);j&&m(parseInt(j,10));try{const B=new AbortController,G=setTimeout(()=>B.abort(),5e3),ve=`https://api.counterapi.dev/v2/${R}/${U}/${H?"get":"up"}`,ge=await fetch(`${z}${encodeURIComponent(ve)}`,{signal:B.signal});if(clearTimeout(G),!ge.ok)throw new Error("API error");const I=await ge.json(),ne=((ie=I.data)==null?void 0:ie.up_count)??((te=I.data)==null?void 0:te.count);ne&&(m(ne),localStorage.setItem(w,ne.toString()),sessionStorage.setItem(A,"true"))}catch{if(!j){const B=localStorage.getItem("portfolio_visitor_fallback"),G=(B?parseInt(B,10):14203)+(H?0:1);localStorage.setItem("portfolio_visitor_fallback",G.toString()),m(G)}}})()},[]),Be.useEffect(()=>{(async()=>{try{const z=await(await fetch("https://api.open-meteo.com/v1/forecast?latitude=37.3486&longitude=-121.9367&current_weather=true")).json();_(Math.round(z.current_weather.temperature))}catch(U){console.error("Weather fetch failed",U)}})()},[]),Be.useEffect(()=>{const R=()=>{v(new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date))};R();const U=window.setInterval(R,1e3);return()=>window.clearInterval(U)},[]),Be.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const R=()=>{T.current=window.scrollY},U=()=>{var z;if(y.current){const A=T.current*.35;M.current+=(A-M.current)*.08;const w=((z=b.current)==null?void 0:z.getBoundingClientRect().width)??0,H=w>0?M.current%w:M.current;y.current.style.transform=`translateX(-${H}px)`}x.current=requestAnimationFrame(U)};return window.addEventListener("scroll",R,{passive:!0}),x.current=requestAnimationFrame(U),()=>{window.removeEventListener("scroll",R),cancelAnimationFrame(x.current)}},[]);const F=R=>{const U=R%100;return U>=11&&U<=13?"th":R%10===1?"st":R%10===2?"nd":R%10===3?"rd":"th"},L=R=>{var U;(U=document.getElementById(R))==null||U.scrollIntoView({behavior:"smooth"})},N=()=>r!==null?"opacity-20 blur-[2px]":"opacity-100",P=({label:R,target:U})=>q.jsxs("button",{onClick:()=>L(U),className:"text-gray-400 transition-all hover:text-white hover:[text-shadow:0_0_8px_rgba(255,255,255,0.6)]",children:["[",R,"]"]});return q.jsxs(q.Fragment,{children:[q.jsx(RA,{previewState:t}),q.jsxs("div",{className:"relative z-10 w-full cursor-none font-mono text-[#f0f0f0] selection:bg-white selection:text-black",children:[q.jsx("nav",{className:`fixed inset-x-0 top-0 z-50 mix-blend-difference transition-all duration-500 ${N()}`,children:q.jsxs(Q_,{position:"top",className:"h-9 justify-between px-3 md:px-6",children:[q.jsxs("div",{className:"flex min-w-0 items-center gap-2 md:gap-3",children:[q.jsx("span",{className:"shrink-0 bg-white px-2 py-1 text-black",children:"NORMAL"}),q.jsx("span",{className:"hidden sm:inline",children:"shivam-os 1.0"}),q.jsx("span",{className:"tui-status-separator hidden sm:inline",children:"│"}),q.jsxs("div",{className:"flex items-center gap-2",children:[q.jsx(P,{label:"prj",target:"projects"}),q.jsx(P,{label:"who",target:"about"}),q.jsx(P,{label:"msg",target:"contact"})]})]}),q.jsxs("div",{className:"flex shrink-0 items-center gap-2 md:gap-3",children:[q.jsx("span",{className:"hidden md:inline",children:"tty1"}),q.jsx("span",{className:"tui-status-separator hidden md:inline",children:"│"}),q.jsx("time",{children:g||"--:--:--"})]})]})}),q.jsxs("header",{className:`w-full overflow-hidden pb-20 pt-24 transition-all duration-500 md:pb-28 md:pt-32 ${N()}`,children:[s&&q.jsx(WA,{}),q.jsx("div",{className:"px-4 md:px-12",children:q.jsxs("div",{className:"mb-8 font-pixel text-[9px] uppercase leading-5 tracking-[0.12em] md:text-[10px]",children:[q.jsx(qd,{label:"ok",children:"mounted /dev/portfolio"}),q.jsx(qd,{label:"ok",children:"loaded tui.session"}),q.jsx(qd,{label:"ok",children:"network online"})]})}),q.jsx("div",{ref:y,className:"flex w-max will-change-transform",style:{transform:"translateX(0px)"},children:Array.from({length:5},(R,U)=>q.jsx("div",{ref:U===0?b:void 0,className:"shrink-0",children:q.jsx(XA,{className:"px-4 md:px-12",ariaHidden:U>0})},U))}),q.jsxs("div",{className:"mt-10 max-w-2xl px-4 md:mt-14 md:px-12",children:[q.jsx(Ns,{command:"whoami",className:"mb-5"}),q.jsxs("div",{className:"tui-command-output",children:[q.jsxs("p",{className:"text-sm font-medium leading-relaxed text-gray-300 md:text-base",children:["Shivam Maji, a ",q.jsx("span",{className:"text-white",children:"Computer Engineering"})," and"," ",q.jsx("span",{className:"text-white",children:"Mechanical Engineering"})," student at SCU."]}),q.jsxs("div",{className:"mt-5 flex items-center gap-3 font-pixel text-[9px] uppercase tracking-[0.14em] text-gray-500 md:text-[10px]",children:[q.jsx("span",{className:"h-2 w-2 animate-pulse bg-white shadow-[0_0_8px_white]"}),q.jsxs("span",{children:["session #",h.toLocaleString(),F(h)," visitor"]})]})]})]})]}),q.jsxs("main",{className:"space-y-24 px-4 pb-24 md:space-y-32 md:px-12 md:pb-32",children:[q.jsx("section",{id:"projects",className:"scroll-mt-16",children:q.jsxs(tr,{title:"~/selected-projects",rightTag:c.length?String(c.length):"...",contentClassName:"!p-0",children:[q.jsxs("div",{className:"border-b border-white/10 px-3 py-3 font-pixel text-[8px] uppercase tracking-[0.14em] text-gray-600 md:grid md:grid-cols-[4rem_8rem_1fr_12rem_4rem] md:px-5 md:text-[9px]",children:[q.jsx("span",{children:"mode"}),q.jsx("span",{className:"hidden md:block",children:"type"}),q.jsx("span",{className:"hidden md:block",children:"name"}),q.jsx("span",{className:"hidden md:block",children:"tags"}),q.jsx("span",{className:"hidden md:block text-right",children:"link"})]}),c.length===0&&q.jsx("div",{className:"px-4 py-8 font-pixel text-[10px] uppercase tracking-widest text-gray-500 animate-pulse",children:"reading ./data/projects.json ..."}),c.map((R,U)=>{var w;const z=r===U,A=r!==null&&!z;return q.jsxs("a",{href:R.url,target:"_blank",rel:"noopener noreferrer",onMouseEnter:H=>{const J=H.currentTarget.getBoundingClientRect();i({project:R,top:J.top,height:J.height}),l(U)},onMouseLeave:()=>{i(null),l(null)},className:`group grid min-w-0 grid-cols-[3rem_minmax(0,1fr)_2rem] items-center gap-2 border-b border-white/10 px-3 py-5 transition-all duration-500 last:border-b-0 md:grid-cols-[4rem_8rem_minmax(0,1fr)_12rem_4rem] md:px-5 ${z?"border-white/50 bg-white/[0.04] text-white":""} ${A?"opacity-20 blur-[1px]":""}`,children:[q.jsxs("span",{className:"font-pixel text-[9px] text-gray-500 transition-colors group-hover:text-white md:text-[10px]",children:["-rwx/",R.year]}),q.jsx("span",{className:"hidden truncate font-pixel text-[9px] uppercase text-gray-500 md:block",children:R.type}),q.jsx("span",{className:"min-w-0 truncate text-sm uppercase tracking-tight text-gray-200 transition-all group-hover:translate-x-1 group-hover:text-white group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.4)] md:text-lg",children:R.name}),q.jsx("span",{className:"hidden truncate font-pixel text-[9px] uppercase text-gray-500 md:block",children:(w=R.field)==null?void 0:w.map(H=>`(${H.toLowerCase()})`).join(" ")}),q.jsxs("span",{className:"text-right font-pixel text-[11px] text-gray-500 transition-colors group-hover:text-white",children:["[",q.jsx(Gc,{}),"]"]})]},`${R.year}-${R.name}`)})]})}),q.jsxs("section",{className:`grid grid-cols-1 gap-10 transition-all duration-500 lg:grid-cols-12 lg:gap-8 ${N()}`,children:[q.jsxs("div",{className:"space-y-10 lg:col-span-5",children:[q.jsxs(tr,{title:"~/achievements",rightTag:String(H_.length),children:[q.jsx(Ns,{command:"ls -la ./achievements",cursor:!1,className:"mb-5"}),q.jsx("ul",{className:"space-y-3",children:H_.map(R=>q.jsxs("li",{className:"grid grid-cols-[3.5rem_1fr] gap-3 text-sm text-gray-300 transition-colors hover:text-white",children:[q.jsx("span",{className:"font-pixel text-gray-500",children:R.count}),q.jsx("span",{children:R.name})]},R.name))})]}),q.jsxs(tr,{title:"~/special-thanks",rightTag:String(G_.length),children:[q.jsx(Ns,{command:"cat CREDITS",cursor:!1,className:"mb-5"}),q.jsx("ul",{className:"space-y-3",children:G_.map(R=>{const U=typeof R=="string"?R:R.name;return q.jsxs("li",{className:"flex gap-3 text-sm text-gray-300 transition-colors hover:text-white",children:[q.jsx("span",{className:"text-gray-600",children:"*"}),typeof R=="string"?q.jsx("span",{children:R}):q.jsxs("a",{href:R.url,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:[R.name," ",q.jsx(Gc,{})]})]},U)})})]}),q.jsx("div",{id:"contact",className:"scroll-mt-16",children:q.jsxs(tr,{title:"~/contact",children:[q.jsx(Ns,{command:"cat contact.txt",cursor:!1,className:"mb-5"}),q.jsxs("div",{className:"tui-command-output",children:[q.jsx("p",{className:"mb-7 text-sm leading-relaxed text-gray-300",children:"Here are several ways you can slide into my DMs. I am currently working as a freelancer and open for collaborations, long and short term."}),q.jsxs("ul",{className:"space-y-3",children:[Xd.socials.map(R=>q.jsx("li",{children:q.jsxs("a",{href:R.url,target:"_blank",rel:"noopener noreferrer",className:"group flex items-center gap-3",children:[q.jsx("span",{className:"text-gray-600 group-hover:text-white",children:"->"}),q.jsxs("span",{className:"font-pixel text-[10px] uppercase tracking-widest text-gray-400 transition-all group-hover:text-white group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.55)]",children:[R.name," ",q.jsx(Gc,{})]})]})},R.name)),q.jsx("li",{children:q.jsxs("a",{href:`mailto:${Xd.email}`,className:"group flex items-center gap-3",children:[q.jsx("span",{className:"text-gray-600 group-hover:text-white",children:"->"}),q.jsxs("span",{className:"font-pixel text-[10px] uppercase tracking-widest text-gray-400 transition-all group-hover:text-white group-hover:[text-shadow:0_0_8px_rgba(255,255,255,0.55)]",children:["mail: ",Xd.email]})]})})]})]})]})}),q.jsx(HA,{}),kd.length>0&&q.jsx(tr,{title:"~/publications",rightTag:String(kd.length),children:q.jsx("ul",{className:"space-y-3",children:kd.map(R=>q.jsx("li",{children:q.jsxs("a",{href:R.url,target:"_blank",rel:"noopener noreferrer",className:"group flex gap-3 text-sm text-gray-300 hover:text-white",children:[q.jsx(Gc,{}),q.jsx("span",{className:"group-hover:underline",children:R.name})]})},R.name))})})]}),q.jsxs("div",{className:"space-y-10 self-start lg:col-start-7 lg:col-span-6",children:[q.jsxs(tr,{title:"cat ~/about.txt",className:"scroll-mt-16",contentClassName:"space-y-7",children:[q.jsx("div",{id:"about",className:"scroll-mt-16",children:q.jsx(Ns,{command:"cat about.txt",cursor:!1})}),q.jsx("div",{className:"tui-command-output space-y-6 text-base font-light leading-relaxed text-gray-300 md:text-xl",children:MA.map(R=>q.jsx("p",{className:"transition-colors duration-300 hover:text-white",children:R},R))})]}),q.jsx(VA,{})]})]})]}),q.jsx("footer",{className:`transition-all duration-500 ${N()}`,children:q.jsxs(Q_,{className:"min-h-9 flex-wrap justify-between px-3 py-2 md:px-6",children:[q.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[q.jsx("span",{className:"bg-white px-2 py-1 text-black",children:"portfolio"}),q.jsx("span",{className:"hidden sm:inline",children:"37.3486°n/121.9367°w"}),q.jsx("span",{className:"tui-status-separator hidden sm:inline",children:"│"}),q.jsx("span",{children:p!==null?`${p}°c`:"--°c"})]}),q.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[q.jsxs("span",{className:"flex items-center gap-2 text-gray-300",children:[q.jsx("span",{className:"h-1.5 w-1.5 animate-pulse bg-white shadow-[0_0_5px_white]"}),"online"]}),q.jsx("span",{className:"tui-status-separator",children:"│"}),q.jsx("span",{children:"utf-8"}),q.jsx("span",{className:"tui-status-separator hidden sm:inline",children:"│"}),q.jsx("span",{className:"hidden sm:inline",children:"100%"})]})]})})]})]})},va="$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'. ",tp=(s,t,i)=>Math.max(t,Math.min(i,s));function al(s){const t=tp(s,0,1),i=Math.round((1-t)*(va.length-1));return va[i]}function jA(s,t,i){const r=va.indexOf(s),l=va.indexOf(t);if(r===-1||l===-1)return i<.5?s:t;const c=Math.round(r+(l-r)*tp(i,0,1));return va[c]}function YA(s,t){const i=va.indexOf(s);if(i===-1)return s;const r=Math.round((Math.random()-.5)*2*t);return va[tp(i+r,0,va.length-1)]}const ZA=" ",jo=(s,t,i)=>Math.max(t,Math.min(i,s)),J_=(s,t,i)=>s+(t-s)*i,KA=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,QA=s=>s*s,JA=s=>1-Math.pow(1-s,3);let $A=0;function eR({element:s}){let t=0,i=0,r=8,l=15;function c(){const L=getComputedStyle(s),N=document.createElement("span");N.textContent="0".repeat(20),Object.assign(N.style,{position:"absolute",visibility:"hidden",whiteSpace:"pre",font:L.font,fontFamily:L.fontFamily,fontSize:L.fontSize,fontWeight:L.fontWeight,letterSpacing:L.letterSpacing}),document.body.append(N),r=N.getBoundingClientRect().width/N.textContent.length,N.remove(),l=Number.parseFloat(L.lineHeight)||12,t=Math.max(1,Math.floor(window.innerWidth/r)),i=Math.max(1,Math.ceil(window.innerHeight/l))}const d=()=>({cols:t,rows:i,charWidth:r,lineHeight:l});function h(L,N){return{x:jo(L/(t*r),0,1),y:jo(N/(i*l),0,1)}}function m({x:L,y:N,value:P,context:R=""}){return{uid:$A++,x:L,y:N,homeX:L,homeY:N,vx:0,vy:0,value:P,context:R,morph:null}}function p({text:L,col:N=0,row:P=0,align:R="left",context:U=""}){const z=L.toUpperCase(),A=R==="center"?Math.floor((t-z.length)/2):N,w=[];for(let H=0;H<z.length;H+=1){const J=z[H];J.trim()&&w.push(m({x:(A+H)/t,y:P/i,value:J,context:U}))}return w}function _(){const L=document.createElement("canvas");return L.width=t,L.height=i,L}function g(L,{context:N="canvas",threshold:P=.08,gamma:R=1,luma:U="rec709",solidGlyph:z=null,solidAbove:A=.62}={}){const w=L.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,L.width,L.height).data,H=U==="max"?(j,ie,te)=>Math.max(j,ie,te):U==="average"?(j,ie,te)=>(j+ie+te)/3:(j,ie,te)=>.2126*j+.7152*ie+.0722*te,J=[];for(let j=0;j<L.height;j+=1)for(let ie=0;ie<L.width;ie+=1){const te=(j*L.width+ie)*4,B=w[te+3]/255;let G=H(w[te],w[te+1],w[te+2])/255*B;if(R!==1&&(G=Math.pow(G,R)),G<P)continue;const ee=z&&G>A?z:al(G);J.push(m({x:ie/t,y:j/i,value:ee,context:N}))}return J}function v(L,N,P,R){const z=Math.min(1,320/Math.max(N,P)),A=Math.max(1,Math.round(N*z)),w=Math.max(1,Math.round(P*z)),H=document.createElement("canvas");H.width=A,H.height=w;const J=H.getContext("2d",{willReadFrequently:!0});J.drawImage(L,0,0,A,w);const j=J.getImageData(0,0,A,w).data;let ie=A,te=w,B=-1,G=-1;for(let ve=0;ve<w;ve+=1)for(let ge=0;ge<A;ge+=1){const I=(ve*A+ge)*4;Math.max(j[I],j[I+1],j[I+2])/255*(j[I+3]/255)>R&&(ge<ie&&(ie=ge),ge>B&&(B=ge),ve<te&&(te=ve),ve>G&&(G=ve))}if(B<0)return null;const ee=2;return ie=Math.max(0,ie-ee),te=Math.max(0,te-ee),B=Math.min(A-1,B+ee),G=Math.min(w-1,G+ee),{sx:ie/z,sy:te/z,sw:(B-ie+1)/z,sh:(G-te+1)/z}}function y(L,N,{fit:P="contain",scale:R=1,trim:U=!1,trimThreshold:z=.12,invert:A=!1}={}){const w=L.getContext("2d",{willReadFrequently:!0}),H=N.videoWidth||N.naturalWidth||N.width,J=N.videoHeight||N.naturalHeight||N.height;if(!H||!J)return;let j=0,ie=0,te=H,B=J;if(U){const _e=v(N,H,J,z);_e&&({sx:j,sy:ie,sw:te,sh:B}=_e)}w.imageSmoothingEnabled=!0,w.fillStyle="#000",w.fillRect(0,0,L.width,L.height);const G=L.width*r,ee=L.height*l,ve=[G/te,ee/B],ge=(P==="cover"?Math.max(...ve):Math.min(...ve))*R,I=te*ge/r,ne=B*ge/l;w.drawImage(N,j,ie,te,B,(L.width-I)/2,(L.height-ne)/2,I,ne),A&&(w.globalCompositeOperation="difference",w.fillStyle="#fff",w.fillRect(0,0,L.width,L.height),w.globalCompositeOperation="source-over")}function b(L,N,{duration:P=1700,ease:R="inOut",match:U="scan"}={}){const z=performance.now(),A=R==="in"?QA:R==="out"?JA:KA;if(!N.length)return[];L.length||(L=[m({x:.5,y:.5,value:" "})]);const w=L.slice(),H=N.slice();for(;w.length<H.length;){const j=L[Math.floor(Math.random()*L.length)];w.push(m({x:j.x,y:j.y,value:j.value,context:j.context}))}const J=U==="radial"?j=>Math.atan2(j.y-.5,j.x-.5):j=>j.y*1e3+j.x;w.sort((j,ie)=>J(j)-J(ie)),H.sort((j,ie)=>J(j)-J(ie));for(let j=0;j<w.length;j+=1){const ie=w[j],te=H[j%H.length],B=j>=H.length;ie.morph={sx:ie.x,sy:ie.y,sval:ie.value,tx:te.x,ty:te.y,tval:te.value,context:te.context,start:z,duration:P,easeFn:A,removeAfter:B}}return w}function T(L,N=performance.now()){const P=[];let R=0;for(const U of L){const z=U.morph;if(!z){P.push(U);continue}const A=jo((N-z.start)/z.duration,0,1),w=z.easeFn(A);if(U.x=J_(z.sx,z.tx,w),U.y=J_(z.sy,z.ty,w),A>=1){if(z.removeAfter)continue;U.x=z.tx,U.y=z.ty,U.homeX=z.tx,U.homeY=z.ty,U.value=z.tval,U.context=z.context,U.morph=null}else U.value=jA(z.sval,z.tval,w),R+=1;P.push(U)}return{points:P,active:R}}function M(L,N,{spring:P=.4,friction:R=.7}={}){const U=jo(N*60,0,2);for(const z of L)z.vx+=(z.homeX-z.x)*P,z.vy+=(z.homeY-z.y)*P,z.vx*=R,z.vy*=R,z.x+=z.vx*U,z.y+=z.vy*U}function x(L,N,{gravity:P=1.6,drift:R=0}={}){const U=jo(N*60,0,2);for(const z of L)z.vy+=P*N,z.vx+=R*N,z.x+=z.vx*U,z.y+=z.vy*U}function F(...L){const N=new Array(t*i).fill(ZA);for(const R of L)if(R)for(const U of R){const z=Math.round(U.x*t),A=Math.round(U.y*i);z>=0&&z<t&&A>=0&&A<i&&(N[A*t+z]=U.value)}let P="";for(let R=0;R<i;R+=1)P+=N.slice(R*t,(R+1)*t).join("")+`
`;s.textContent=P}return{measure:c,dimensions:d,pixelToNormalized:h,createPoint:m,createText:p,createCanvas:_,createFromCanvas:g,paintCanvas:y,morph:b,applyMorph:T,applyPhysics:M,applyFall:x,render:F,get cols(){return t},get rows(){return i},ramp:va}}const rl=(s,t,i)=>Math.max(t,Math.min(i,s)),Jo=(s,t,i)=>s+(t-s)*i,Gv=s=>1-Math.pow(1-rl(s,0,1),3);function Gh(s,t){const i=Math.sin(s*127.1+t*311.7)*43758.5453;return i-Math.floor(i)}function tR(s,{elapsed:t,mouseX:i=.5,startupReveal:r=2200,loopDuration:l=9e3}){const{cols:c,rows:d}=s,h=[];if(t<120)return h;const p=Math.max(0,t-r)%l/l,_=Gv(t/r),g=t<r,v=g?_:Math.pow(Math.sin(p*Math.PI),.42);if(v<.035)return h;const y=Jo(-.08,1.08,_),b=.5+(i-.5)*.08,T=(Math.sin(p*Math.PI*2-Math.PI/2)+1)*.5;for(let M=2;M<d-2;M+=1){const x=M/d;if(g&&x>y)continue;const F=Math.abs(x-y),L=Math.sin(x*13+p*Math.PI*4)*.025+Math.sin(x*31-p*Math.PI*3)*.012,N=Jo(.018,.2,T)*v,P=Math.pow(Math.abs(x-.5)*2,1.7),R=g?rl(F/.15,.08,1):1,U=Jo(N*.08,N,P)*R,z=b+L,A=Math.floor((z-U)*c),w=Math.ceil((z+U)*c);for(let H=A;H<=w;H+=1){if(H<0||H>=c)continue;const J=Math.abs(H/c-z)/Math.max(1e-4,U),j=(Math.cos(J*9+p*Math.PI*12+M*.22)+1)*.5;if(j>.3){const ie=1-(J*.65+j*.2);h.push(s.createPoint({x:H/c,y:x,value:al(ie),context:"ribbon"}))}}}return h}function nR(s,{source:t,click:i,elapsed:r,duration:l=1550}){const{cols:c,rows:d}=s,h=d*s.dimensions().lineHeight/(c*s.dimensions().charWidth||1),m=rl(r/l,0,1),p=Jo(0,.85,Gv(m)),_=Jo(.01,.05,m),g=Math.sin(m*Math.PI)*.12,v=t.map(b=>{const T=b.homeX-i.x,M=(b.homeY-i.y)*h,x=Math.hypot(T,M)||1e-4,F=Math.exp(-Math.pow((x-p)/_,2)),L=Math.sin(x*28-m*18)*(1-m)*.006,N=F*g+L;return s.createPoint({x:b.homeX+T/x*N,y:b.homeY+M/x*N*.55,value:YA(b.value,Math.round(F*8)),context:"ripple"})}),y=Math.max(24,Math.floor(p*c));for(let b=0;b<3;b+=1){const T=p-b*_*1.8;if(!(T<=.01))for(let M=0;M<y;M+=1){const x=M/y*Math.PI*2,F=Math.sin(M*4.17+b)*.004;v.push(s.createPoint({x:i.x+Math.cos(x)*(T+F),y:i.y+Math.sin(x)*(T+F)/h,value:s.ramp[12+(M+b*3)%8],context:"ripple-ring"}))}}return v}const iR=[{x:.3,y:.32,rx:.28,ry:.2},{x:.68,y:.3,rx:.25,ry:.18},{x:.48,y:.58,rx:.36,ry:.23},{x:.22,y:.72,rx:.19,ry:.15},{x:.77,y:.7,rx:.2,ry:.17}];function aR(s){const{cols:t,rows:i}=s,r=[];for(let l=1;l<i-1;l+=1)for(let c=1;c<t-1;c+=1){const d=c/t,h=l/i;let m=0;for(const _ of iR){const g=(d-_.x)/_.rx,v=(h-_.y)/_.ry;m=Math.max(m,Math.exp(-(g*g+v*v)*2.2))}const p=Gh(c,l);m>.15&&p<m*.82&&r.push(s.createPoint({x:d,y:h,value:al(m*.8-p*.15),context:"cloud"}))}return r}const rR=s=>s==="max"?(t,i,r)=>Math.max(t,i,r):s==="average"?(t,i,r)=>(t+i+r)/3:(t,i,r)=>.2126*t+.7152*i+.0722*r;function $_(s){return new Promise((t,i)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=()=>i(new Error(`Failed to load image: ${s}`)),r.src=s})}function sR(s,t,{context:i="art",threshold:r=.12,gamma:l=.85,luma:c="rec709",scale:d=.92,fit:h="contain",trim:m=!1,trimThreshold:p=.12,solidGlyph:_=null,solidAbove:g=.62}={}){const v=s.createCanvas();return s.paintCanvas(v,t,{fit:h,scale:d,trim:m,trimThreshold:p}),s.createFromCanvas(v,{context:i,threshold:r,gamma:l,luma:c,solidGlyph:_,solidAbove:g})}function oR(s,t,{context:i="art",fit:r="contain",scale:l=.9,trim:c=!1,luma:d="max",gamma:h=1,bgThreshold:m=.22,fillFloor:p=.16,fillDensity:_=.4,fillJitter:g=.08}={}){const v=s.createCanvas();s.paintCanvas(v,t,{fit:r,scale:l,trim:c});const y=v.width,b=v.height,T=v.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,y,b).data,M=rR(d),x=new Float32Array(y*b);for(let R=0;R<y*b;R+=1){const U=R*4;let z=M(T[U],T[U+1],T[U+2])/255*(T[U+3]/255);h!==1&&(z=Math.pow(z,h)),x[R]=z}const F=new Uint8Array(y*b),L=[],N=(R,U)=>{if(R<0||U<0||R>=y||U>=b)return;const z=U*y+R;F[z]||x[z]>=m||(F[z]=1,L.push(z))};for(let R=0;R<y;R+=1)N(R,0),N(R,b-1);for(let R=0;R<b;R+=1)N(0,R),N(y-1,R);for(;L.length;){const R=L.pop(),U=R%y,z=R/y|0;N(U-1,z),N(U+1,z),N(U,z-1),N(U,z+1)}const P=[];for(let R=0;R<b;R+=1)for(let U=0;U<y;U+=1){const z=R*y+U;if(F[z])continue;const A=x[z];let w;if(A>=m)w=al(A);else{if(Gh(U,R)>_)continue;const H=(Gh(U*1.7,R*2.3)-.5)*2*g;w=al(p+H)}P.push(s.createPoint({x:U/s.cols,y:R/s.rows,value:w,context:i}))}return P}function lR(s,t="SHIVAM"){const{cols:i,rows:r}=s,l=s.createCanvas(),c=l.getContext("2d",{willReadFrequently:!0}),d=i*.86;let h=Math.floor(r*.5);const m=p=>{c.font=`900 ${p}px "Arial Black", Arial, sans-serif`};for(c.textAlign="center",c.textBaseline="middle",m(h);c.measureText(t).width>d&&h>4;)h-=1,m(h);return c.fillStyle="#000",c.fillRect(0,0,i,r),c.fillStyle="#fff",c.fillText(t,i/2,r/2,d),s.createFromCanvas(l,{context:"name",threshold:.16,solidGlyph:">",solidAbove:.7})}const cR=30,ev=2200,uR=1550,fR="/cat.jpg",dR={luma:"max",bgThreshold:.22,fillFloor:.15,fillDensity:.38,trim:!0,scale:.9},hR="/shivam.png",Vv={context:"name",luma:"rec709",threshold:.15,gamma:1,trim:!0,trimThreshold:.35,fit:"contain",scale:.94,solidGlyph:">",solidAbove:.5},pR={...Vv,threshold:.48,gamma:1,trimThreshold:.48,scale:.74,solidAbove:.5},Yo={collapse:480,expand:920,name:2700,exit:6500,fall:1100},tv=900,mR=({onComplete:s})=>{const t=Be.useRef(null),i=Be.useRef(null),r=Be.useRef(s);r.current=s,Be.useEffect(()=>{const c=i.current,d=t.current;if(!c||!d)return;const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=window.matchMedia("(pointer: coarse)").matches?"TAP":"CLICK";if(h){const de=window.setTimeout(()=>r.current(),200);return()=>window.clearTimeout(de)}const _=eR({element:c});let g="idle",v=performance.now(),y=[],b=null,T=null,M=[],x={x:.5,y:.5},F=.5,L=.5,N=0,P=performance.now(),R=0,U=[],z=!1;const A=de=>de-v,w=de=>{g=de,v=performance.now(),d.dataset.phase=de},H=(de,be)=>{U.push(window.setTimeout(de,be))},J=()=>{U.forEach(de=>window.clearTimeout(de)),U=[]},j=de=>{if(!de.length)return{x:.5,y:.5};let be=0,Q=0;for(const ae of de)be+=ae.x,Q+=ae.y;return{x:be/de.length,y:Q/de.length}},ie=()=>b?oR(_,b,dR):aR(_),te=()=>{if(!T)return lR(_,"SHIVAM");const de=window.innerWidth<960||window.innerHeight<600;return sR(_,T,de?pR:Vv)},B=()=>{if(A(performance.now())<ev*.75)return null;const de=rl(Math.floor(F*_.cols)+2,0,_.cols-p.length),be=rl(Math.floor(L*_.rows),0,_.rows-1);return _.createText({text:p,col:de,row:be,context:"ui"})},G=de=>{g==="idle"&&(x=_.pixelToNormalized(window.innerWidth/2,window.innerHeight/2),M=y.map(be=>_.createPoint({x:be.x,y:be.y,value:be.value})),w("ripple"),H(()=>{w("collapse");const be=j(y);for(const Q of y)Q.homeX=be.x,Q.homeY=be.y,Q.vx+=(be.x-Q.x)*.12,Q.vy+=(be.y-Q.y)*.12},Yo.collapse),H(()=>{w("wings"),y=_.morph(y,ie(),{duration:660,ease:"out",match:"radial"})},Yo.expand),H(()=>{w("name"),y=_.morph(y,te(),{duration:900,match:"scan"})},Yo.name),H(ee,Yo.exit))},ee=()=>{if(!(g==="exit"||g==="done")){J(),w("exit");for(const de of y)de.morph=null,de.vx=(Math.random()-.5)*.4,de.vy=-.12-Math.random()*.3;H(()=>{g="done",d.dataset.done="true",H(()=>{z||r.current()},tv)},Yo.fall)}},ve=de=>{const be=Math.min((de-P)/1e3,.033);P=de;const Q=de;switch(g){case"idle":y=tR(_,{elapsed:A(Q),mouseX:F,startupReveal:ev}),_.render(y,B());return;case"ripple":y=nR(_,{source:M,click:x,elapsed:A(Q),duration:uR}),_.render(y);return;case"collapse":_.applyPhysics(y,be,{spring:.55,friction:.5}),_.render(y);return;case"wings":case"name":{y=_.applyMorph(y,Q).points,_.render(y);return}case"exit":_.applyFall(y,be,{gravity:1.8}),_.render(y);return;default:return}},ge=de=>{N=requestAnimationFrame(ge),!(de-R<1e3/cR)&&(R=de,ve(de))},I=()=>_.measure(),ne=de=>{F=de.clientX/window.innerWidth,L=de.clientY/window.innerHeight},_e=()=>G();return window.addEventListener("resize",I),window.addEventListener("pointermove",ne),d.addEventListener("click",_e),(async()=>{_.measure();const[de,be]=await Promise.all([$_(fR).catch(()=>null),$_(hR).catch(()=>null)]);z||(b=de,T=be,w("idle"),N=requestAnimationFrame(ge))})(),()=>{z=!0,J(),cancelAnimationFrame(N),window.removeEventListener("resize",I),window.removeEventListener("pointermove",ne),d.removeEventListener("click",_e)}},[]);const l=c=>{c.stopPropagation(),t.current&&(t.current.dataset.done="true"),window.setTimeout(()=>r.current(),tv)};return q.jsxs("div",{ref:t,className:"ai-intro","data-phase":"idle",children:[q.jsx("div",{ref:i,className:"ai-grid","aria-hidden":"true"}),q.jsx("button",{className:"ai-skip",type:"button",onClick:l,children:"Skip intro"})]})},gR=()=>{const s=Be.useRef(null),t=Be.useRef({x:-100,y:-100}),i=Be.useRef({x:-100,y:-100}),r=Be.useRef(0);return Be.useEffect(()=>{const l=d=>{t.current={x:d.clientX,y:d.clientY}};window.addEventListener("mousemove",l);const c=()=>{const d=t.current.x-i.current.x,h=t.current.y-i.current.y;i.current.x+=d*.15,i.current.y+=h*.15,s.current&&(s.current.style.transform=`translate3d(${i.current.x}px, ${i.current.y}px, 0) translate(-50%, -50%)`),r.current=requestAnimationFrame(c)};return c(),()=>{window.removeEventListener("mousemove",l),cancelAnimationFrame(r.current)}},[]),q.jsx("div",{ref:s,"aria-hidden":"true",className:"custom-block-cursor blink-cursor fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference will-change-transform",style:{boxShadow:"0 0 8px rgba(255,255,255,0.55)"}})},_R=()=>q.jsx("div",{className:"fixed inset-0 z-[90] pointer-events-none opacity-[0.035] mix-blend-overlay will-change-transform",style:{transform:"translate3d(0,0,0)",backfaceVisibility:"hidden"},children:q.jsxs("svg",{className:"w-full h-full",children:[q.jsx("filter",{id:"noiseFilter",children:q.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.80",numOctaves:"3",stitchTiles:"stitch"})}),q.jsx("rect",{width:"100%",height:"100%",filter:"url(#noiseFilter)"})]})}),vR=()=>q.jsxs("div",{className:"crt-root","aria-hidden":"true",children:[q.jsx("div",{className:"crt-layer crt-grid"}),q.jsx("div",{className:"crt-layer crt-scanlines"}),q.jsx("div",{className:"crt-layer crt-vignette"}),q.jsx("div",{className:"crt-layer crt-glare"})]}),xR=()=>{const[s,t]=Be.useState(!0);return q.jsxs(q.Fragment,{children:[q.jsx(gR,{}),q.jsx(_R,{}),q.jsx(vR,{}),s&&q.jsx(mR,{onComplete:()=>t(!1)}),q.jsxs("div",{className:"relative w-full min-h-screen",children:[q.jsx(yA,{}),q.jsx(qA,{introComplete:!s})]})]})},kv=document.getElementById("root");if(!kv)throw new Error("Could not find root element to mount to");const SR=ry.createRoot(kv);SR.render(q.jsx(QS.StrictMode,{children:q.jsx(xR,{})}));
