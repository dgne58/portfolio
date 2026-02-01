(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function M_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var qf={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function uS(){if(gg)return Uo;gg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=t,Uo.jsx=i,Uo.jsxs=i,Uo}var _g;function fS(){return _g||(_g=1,qf.exports=uS()),qf.exports}var fe=fS(),Yf={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function dS(){if(vg)return rt;vg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function x(L,te,he){this.props=L,this.context=te,this.refs=y,this.updater=he||b}x.prototype.isReactComponent={},x.prototype.setState=function(L,te){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,te,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function N(){}N.prototype=x.prototype;function D(L,te,he){this.props=L,this.context=te,this.refs=y,this.updater=he||b}var O=D.prototype=new N;O.constructor=D,R(O,x.prototype),O.isPureReactComponent=!0;var F=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function C(L,te,he){var Me=he.ref;return{$$typeof:o,type:L,key:te,ref:Me!==void 0?Me:null,props:he}}function w(L,te){return C(L.type,te,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ne(L){var te={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(he){return te[he]})}var Z=/\/+/g;function le(L,te){return typeof L=="object"&&L!==null&&L.key!=null?ne(""+L.key):te.toString(36)}function re(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(I,I):(L.status="pending",L.then(function(te){L.status==="pending"&&(L.status="fulfilled",L.value=te)},function(te){L.status==="pending"&&(L.status="rejected",L.reason=te)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,te,he,Me,we){var Q=typeof L;(Q==="undefined"||Q==="boolean")&&(L=null);var ue=!1;if(L===null)ue=!0;else switch(Q){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(L.$$typeof){case o:case t:ue=!0;break;case _:return ue=L._init,P(ue(L._payload),te,he,Me,we)}}if(ue)return we=we(L),ue=Me===""?"."+le(L,0):Me,F(we)?(he="",ue!=null&&(he=ue.replace(Z,"$&/")+"/"),P(we,te,he,"",function(Fe){return Fe})):we!=null&&(V(we)&&(we=w(we,he+(we.key==null||L&&L.key===we.key?"":(""+we.key).replace(Z,"$&/")+"/")+ue)),te.push(we)),1;ue=0;var Te=Me===""?".":Me+":";if(F(L))for(var ze=0;ze<L.length;ze++)Me=L[ze],Q=Te+le(Me,ze),ue+=P(Me,te,he,Q,we);else if(ze=M(L),typeof ze=="function")for(L=ze.call(L),ze=0;!(Me=L.next()).done;)Me=Me.value,Q=Te+le(Me,ze++),ue+=P(Me,te,he,Q,we);else if(Q==="object"){if(typeof L.then=="function")return P(re(L),te,he,Me,we);throw te=String(L),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ue}function H(L,te,he){if(L==null)return L;var Me=[],we=0;return P(L,Me,"","",function(Q){return te.call(he,Q,we++)}),Me}function ee(L){if(L._status===-1){var te=L._result;te=te(),te.then(function(he){(L._status===0||L._status===-1)&&(L._status=1,L._result=he)},function(he){(L._status===0||L._status===-1)&&(L._status=2,L._result=he)}),L._status===-1&&(L._status=0,L._result=te)}if(L._status===1)return L._result.default;throw L._result}var _e=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Se={map:H,forEach:function(L,te,he){H(L,function(){te.apply(this,arguments)},he)},count:function(L){var te=0;return H(L,function(){te++}),te},toArray:function(L){return H(L,function(te){return te})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=g,rt.Children=Se,rt.Component=x,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=D,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,te,he){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Me=R({},L.props),we=L.key;if(te!=null)for(Q in te.key!==void 0&&(we=""+te.key),te)!j.call(te,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&te.ref===void 0||(Me[Q]=te[Q]);var Q=arguments.length-2;if(Q===1)Me.children=he;else if(1<Q){for(var ue=Array(Q),Te=0;Te<Q;Te++)ue[Te]=arguments[Te+2];Me.children=ue}return C(L.type,we,Me)},rt.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},rt.createElement=function(L,te,he){var Me,we={},Q=null;if(te!=null)for(Me in te.key!==void 0&&(Q=""+te.key),te)j.call(te,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(we[Me]=te[Me]);var ue=arguments.length-2;if(ue===1)we.children=he;else if(1<ue){for(var Te=Array(ue),ze=0;ze<ue;ze++)Te[ze]=arguments[ze+2];we.children=Te}if(L&&L.defaultProps)for(Me in ue=L.defaultProps,ue)we[Me]===void 0&&(we[Me]=ue[Me]);return C(L,Q,we)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:h,render:L}},rt.isValidElement=V,rt.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:ee}},rt.memo=function(L,te){return{$$typeof:p,type:L,compare:te===void 0?null:te}},rt.startTransition=function(L){var te=z.T,he={};z.T=he;try{var Me=L(),we=z.S;we!==null&&we(he,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(I,_e)}catch(Q){_e(Q)}finally{te!==null&&he.types!==null&&(te.types=he.types),z.T=te}},rt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},rt.use=function(L){return z.H.use(L)},rt.useActionState=function(L,te,he){return z.H.useActionState(L,te,he)},rt.useCallback=function(L,te){return z.H.useCallback(L,te)},rt.useContext=function(L){return z.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,te){return z.H.useDeferredValue(L,te)},rt.useEffect=function(L,te){return z.H.useEffect(L,te)},rt.useEffectEvent=function(L){return z.H.useEffectEvent(L)},rt.useId=function(){return z.H.useId()},rt.useImperativeHandle=function(L,te,he){return z.H.useImperativeHandle(L,te,he)},rt.useInsertionEffect=function(L,te){return z.H.useInsertionEffect(L,te)},rt.useLayoutEffect=function(L,te){return z.H.useLayoutEffect(L,te)},rt.useMemo=function(L,te){return z.H.useMemo(L,te)},rt.useOptimistic=function(L,te){return z.H.useOptimistic(L,te)},rt.useReducer=function(L,te,he){return z.H.useReducer(L,te,he)},rt.useRef=function(L){return z.H.useRef(L)},rt.useState=function(L){return z.H.useState(L)},rt.useSyncExternalStore=function(L,te,he){return z.H.useSyncExternalStore(L,te,he)},rt.useTransition=function(){return z.H.useTransition()},rt.version="19.2.4",rt}var xg;function Th(){return xg||(xg=1,Yf.exports=dS()),Yf.exports}var Ye=Th();const hS=M_(Ye);var jf={exports:{}},No={},Zf={exports:{}},Kf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function pS(){return Sg||(Sg=1,(function(o){function t(P,H){var ee=P.length;P.push(H);e:for(;0<ee;){var _e=ee-1>>>1,Se=P[_e];if(0<l(Se,H))P[_e]=H,P[ee]=Se,ee=_e;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var H=P[0],ee=P.pop();if(ee!==H){P[0]=ee;e:for(var _e=0,Se=P.length,L=Se>>>1;_e<L;){var te=2*(_e+1)-1,he=P[te],Me=te+1,we=P[Me];if(0>l(he,ee))Me<Se&&0>l(we,he)?(P[_e]=we,P[Me]=ee,_e=Me):(P[_e]=he,P[te]=ee,_e=te);else if(Me<Se&&0>l(we,ee))P[_e]=we,P[Me]=ee,_e=Me;else break e}}return H}function l(P,H){var ee=P.sortIndex-H.sortIndex;return ee!==0?ee:P.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,g=null,S=3,M=!1,b=!1,R=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function O(P){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=P)r(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function F(P){if(R=!1,O(P),!b)if(i(m)!==null)b=!0,I||(I=!0,ne());else{var H=i(p);H!==null&&re(F,H.startTime-P)}}var I=!1,z=-1,j=5,C=-1;function w(){return y?!0:!(o.unstable_now()-C<j)}function V(){if(y=!1,I){var P=o.unstable_now();C=P;var H=!0;try{e:{b=!1,R&&(R=!1,N(z),z=-1),M=!0;var ee=S;try{t:{for(O(P),g=i(m);g!==null&&!(g.expirationTime>P&&w());){var _e=g.callback;if(typeof _e=="function"){g.callback=null,S=g.priorityLevel;var Se=_e(g.expirationTime<=P);if(P=o.unstable_now(),typeof Se=="function"){g.callback=Se,O(P),H=!0;break t}g===i(m)&&r(m),O(P)}else r(m);g=i(m)}if(g!==null)H=!0;else{var L=i(p);L!==null&&re(F,L.startTime-P),H=!1}}break e}finally{g=null,S=ee,M=!1}H=void 0}}finally{H?ne():I=!1}}}var ne;if(typeof D=="function")ne=function(){D(V)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,le=Z.port2;Z.port1.onmessage=V,ne=function(){le.postMessage(null)}}else ne=function(){x(V,0)};function re(P,H){z=x(function(){P(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var ee=S;S=H;try{return P()}finally{S=ee}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ee=S;S=P;try{return H()}finally{S=ee}},o.unstable_scheduleCallback=function(P,H,ee){var _e=o.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?_e+ee:_e):ee=_e,P){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ee+Se,P={id:_++,callback:H,priorityLevel:P,startTime:ee,expirationTime:Se,sortIndex:-1},ee>_e?(P.sortIndex=ee,t(p,P),i(m)===null&&P===i(p)&&(R?(N(z),z=-1):R=!0,re(F,ee-_e))):(P.sortIndex=Se,t(m,P),b||M||(b=!0,I||(I=!0,ne()))),P},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(P){var H=S;return function(){var ee=S;S=H;try{return P.apply(this,arguments)}finally{S=ee}}}})(Kf)),Kf}var yg;function mS(){return yg||(yg=1,Zf.exports=pS()),Zf.exports}var Qf={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function gS(){if(Mg)return Un;Mg=1;var o=Th();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Un.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.4",Un}var Eg;function _S(){if(Eg)return Qf.exports;Eg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Qf.exports=gS(),Qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function vS(){if(bg)return No;bg=1;var o=mS(),t=Th(),i=_S();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,s=f;break}if(T===s){v=!0,s=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=c;break}if(T===s){v=!0,s=f,a=c;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}var re=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},_e=[],Se=-1;function L(e){return{current:e}}function te(e){0>Se||(e.current=_e[Se],_e[Se]=null,Se--)}function he(e,n){Se++,_e[Se]=e.current,e.current=n}var Me=L(null),we=L(null),Q=L(null),ue=L(null);function Te(e,n){switch(he(Q,n),he(we,e),he(Me,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?B0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=B0(n),e=H0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}te(Me),he(Me,e)}function ze(){te(Me),te(we),te(Q)}function Fe(e){e.memoizedState!==null&&he(ue,e);var n=Me.current,a=H0(n,e.type);n!==a&&(he(we,e),he(Me,a))}function ht(e){we.current===e&&(te(Me),te(we)),ue.current===e&&(te(ue),Ro._currentValue=ee)}var jt,pt;function mt(e){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+e+pt}var wt=!1;function ot(e,n){if(!e||wt)return"";wt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ce){var ae=ce}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(ce){ae=ce}e.call(ve.prototype)}}else{try{throw Error()}catch(ce){ae=ce}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ce){if(ce&&ae&&typeof ce.stack=="string")return[ce.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var B=v.split(`
`),$=T.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===$.length)for(s=B.length-1,c=$.length-1;1<=s&&0<=c&&B[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==$[c]){var pe=`
`+B[s].replace(" at new "," at ");return e.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",e.displayName)),pe}while(1<=s&&0<=c);break}}}finally{wt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?mt(a):""}function Jt(e,n){switch(e.tag){case 26:case 27:case 5:return mt(e.type);case 16:return mt("Lazy");case 13:return e.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return mt("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=Jt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Zt=Object.prototype.hasOwnProperty,Mt=o.unstable_scheduleCallback,Lt=o.unstable_cancelCallback,je=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,me=o.unstable_ImmediatePriority,ye=o.unstable_UserBlockingPriority,de=o.unstable_NormalPriority,Ke=o.unstable_LowPriority,De=o.unstable_IdlePriority,Xe=o.log,nt=o.unstable_setDisableYieldValue,be=null,Ae=null;function He(e){if(typeof Xe=="function"&&nt(e),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(be,e)}catch{}}var Ie=Math.clz32?Math.clz32:X,Ue=Math.log,ct=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ue(e)/ct|0)|0}var Le=256,Re=262144,Be=4194304;function Ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=Ee(s):(v&=T,v!==0?c=Ee(v):a||(a=T&~e,a!==0&&(c=Ee(a))))):(T=s&~f,T!==0?c=Ee(T):v!==0?c=Ee(v):a||(a=s&~e,a!==0&&(c=Ee(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ce(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=Be;return Be<<=1,(Be&62914560)===0&&(Be=4194304),e}function Et(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mi(e,n,a,s,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,$=e.hiddenUpdates;for(a=v&~a;0<a;){var pe=31-Ie(a),ve=1<<pe;T[pe]=0,B[pe]=-1;var ae=$[pe];if(ae!==null)for($[pe]=null,pe=0;pe<ae.length;pe++){var ce=ae[pe];ce!==null&&(ce.lane&=-536870913)}a&=~ve}s!==0&&Qo(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Qo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ie(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Is(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ie(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Ur(e,n){var a=n&-n;return a=(a&42)!==0?1:Bs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Bs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Nr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hs(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:cg(e.type))}function Ci(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var ti=Math.random().toString(36).slice(2),rn="__reactFiber$"+ti,vn="__reactProps$"+ti,gi="__reactContainer$"+ti,Lr="__reactEvents$"+ti,Or="__reactListeners$"+ti,Jo="__reactHandles$"+ti,Gs="__reactResources$"+ti,er="__reactMarker$"+ti;function Vs(e){delete e[rn],delete e[vn],delete e[Lr],delete e[Or],delete e[Jo]}function xa(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[gi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Y0(e);e!==null;){if(a=e[rn])return a;e=Y0(e)}return n}e=a,a=e.parentNode}return null}function Sa(e){if(e=e[rn]||e[gi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function tr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ya(e){var n=e[Gs];return n||(n=e[Gs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(e){e[er]=!0}var q=new Set,oe={};function ie(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for(oe[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ge={},Oe={};function Ve(e){return Zt.call(Oe,e)?!0:Zt.call(Ge,e)?!1:Ne.test(e)?Oe[e]=!0:(Ge[e]=!0,!1)}function We(e,n,a){if(Ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function $e(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qe(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wt(e){if(!e._valueTracker){var n=Dt(e)?"checked":"value";e._valueTracker=Kt(e,n,""+e[n])}}function Ot(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Dt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Qe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function at(e){return e.replace(Ut,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xn(e,n,a,s,c,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+et(n)):e.value!==""+et(n)&&(e.value=""+et(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Sn(e,v,et(n)):a!=null?Sn(e,v,et(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+et(T):e.removeAttribute("name")}function Vi(e,n,a,s,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(e);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Wt(e)}function Sn(e,n,a){n==="number"&&Qe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ni(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function zt(e,n,a){if(n!=null&&(n=""+et(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+et(a):""}function yn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(re(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=et(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Wt(e)}function dn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Pr(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&En(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&En(e,f,n[f])}function _i(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(e){return ov.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var Vc=null;function kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Fr=null;function Ih(e){var n=Sa(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;e:switch(e=n.stateNode,n.type){case"input":if(xn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[vn]||null;if(!c)throw Error(r(90));xn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ot(s)}break e;case"textarea":zt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ni(e,!!a.multiple,n,!1)}}}var Xc=!1;function Bh(e,n,a){if(Xc)return e(n,a);Xc=!0;try{var s=e(n);return s}finally{if(Xc=!1,(zr!==null||Fr!==null)&&(Hl(),zr&&(n=zr,e=Fr,Fr=zr=null,Ih(n),e)))for(n=0;n<e.length;n++)Ih(e[n])}}function ks(e,n){var a=e.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(Xi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Wc=!1}var Ma=null,qc=null,el=null;function Hh(){if(el)return el;var e,n=qc,a=n.length,s,c="value"in Ma?Ma.value:Ma.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(s=1;s<=v&&n[a-s]===c[f-s];s++);return el=c.slice(e,1<s?1-s:void 0)}function tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function Gh(){return!1}function Fn(e){function n(a,s,c,f,v){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:Gh,this.isPropagationStopped=Gh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Fn(nr),Ws=g({},nr,{view:0,detail:0}),lv=Fn(Ws),Yc,jc,qs,al=g({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qs&&(qs&&e.type==="mousemove"?(Yc=e.screenX-qs.screenX,jc=e.screenY-qs.screenY):jc=Yc=0,qs=e),Yc)},movementY:function(e){return"movementY"in e?e.movementY:jc}}),Vh=Fn(al),cv=g({},al,{dataTransfer:0}),uv=Fn(cv),fv=g({},Ws,{relatedTarget:0}),Zc=Fn(fv),dv=g({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=Fn(dv),pv=g({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mv=Fn(pv),gv=g({},nr,{data:0}),kh=Fn(gv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xv[e])?!!n[e]:!1}function Kc(){return Sv}var yv=g({},Ws,{key:function(e){if(e.key){var n=_v[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kc,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mv=Fn(yv),Ev=g({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=Fn(Ev),bv=g({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kc}),Tv=Fn(bv),Av=g({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=Fn(Av),Cv=g({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Fn(Cv),Dv=g({},nr,{newState:0,oldState:0}),Uv=Fn(Dv),Nv=[9,13,27,32],Qc=Xi&&"CompositionEvent"in window,Ys=null;Xi&&"documentMode"in document&&(Ys=document.documentMode);var Lv=Xi&&"TextEvent"in window&&!Ys,Wh=Xi&&(!Qc||Ys&&8<Ys&&11>=Ys),qh=" ",Yh=!1;function jh(e,n){switch(e){case"keyup":return Nv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function Ov(e,n){switch(e){case"compositionend":return Zh(n);case"keypress":return n.which!==32?null:(Yh=!0,qh);case"textInput":return e=n.data,e===qh&&Yh?null:e;default:return null}}function Pv(e,n){if(Ir)return e==="compositionend"||!Qc&&jh(e,n)?(e=Hh(),el=qc=Ma=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wh&&n.locale!=="ko"?null:n.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zv[e.type]:n==="textarea"}function Qh(e,n,a,s){zr?Fr?Fr.push(s):Fr=[s]:zr=s,n=Yl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var js=null,Zs=null;function Fv(e){L0(e,0)}function rl(e){var n=tr(e);if(Ot(n))return e}function Jh(e,n){if(e==="change")return n}var $h=!1;if(Xi){var Jc;if(Xi){var $c="oninput"in document;if(!$c){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),$c=typeof ep.oninput=="function"}Jc=$c}else Jc=!1;$h=Jc&&(!document.documentMode||9<document.documentMode)}function tp(){js&&(js.detachEvent("onpropertychange",np),Zs=js=null)}function np(e){if(e.propertyName==="value"&&rl(Zs)){var n=[];Qh(n,Zs,e,kc(e)),Bh(Fv,n)}}function Iv(e,n,a){e==="focusin"?(tp(),js=n,Zs=a,js.attachEvent("onpropertychange",np)):e==="focusout"&&tp()}function Bv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Zs)}function Hv(e,n){if(e==="click")return rl(n)}function Gv(e,n){if(e==="input"||e==="change")return rl(n)}function Vv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Vv;function Ks(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Zt.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ap(e,n){var a=ip(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ip(a)}}function rp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?rp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function sp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qe(e.document)}return n}function eu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var kv=Xi&&"documentMode"in document&&11>=document.documentMode,Br=null,tu=null,Qs=null,nu=!1;function op(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||Br==null||Br!==Qe(s)||(s=Br,"selectionStart"in s&&eu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Qs&&Ks(Qs,s)||(Qs=s,s=Yl(tu,"onSelect"),0<s.length&&(n=new il("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Br)))}function ir(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},iu={},lp={};Xi&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function ar(e){if(iu[e])return iu[e];if(!Hr[e])return e;var n=Hr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in lp)return iu[e]=n[a];return e}var cp=ar("animationend"),up=ar("animationiteration"),fp=ar("animationstart"),Xv=ar("transitionrun"),Wv=ar("transitionstart"),qv=ar("transitioncancel"),dp=ar("transitionend"),hp=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function vi(e,n){hp.set(e,n),ie(n,[e])}var sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],Gr=0,ru=0;function ol(){for(var e=Gr,n=ru=Gr=0;n<e;){var a=ii[n];ii[n++]=null;var s=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}f!==0&&pp(a,c,f)}}function ll(e,n,a,s){ii[Gr++]=e,ii[Gr++]=n,ii[Gr++]=a,ii[Gr++]=s,ru|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function su(e,n,a,s){return ll(e,n,a,s),cl(e)}function rr(e,n){return ll(e,null,null,n),cl(e)}function pp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ie(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function cl(e){if(50<So)throw So=0,gf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function Yv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,s){return new Yv(e,n,a,s)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function mp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ul(e,n,a,s,c,f){var v=0;if(s=e,typeof e=="function")ou(e)&&(v=1);else if(typeof e=="string")v=Jx(e,a,Me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case C:return e=qn(31,a,n,c),e.elementType=C,e.lanes=f,e;case R:return sr(a.children,c,f,n);case y:v=8,c|=24;break;case x:return e=qn(12,a,n,c|2),e.elementType=x,e.lanes=f,e;case F:return e=qn(13,a,n,c),e.elementType=F,e.lanes=f,e;case I:return e=qn(19,a,n,c),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:v=10;break e;case N:v=9;break e;case O:v=11;break e;case z:v=14;break e;case j:v=16,s=null;break e}v=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=qn(v,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function sr(e,n,a,s){return e=qn(7,e,s,n),e.lanes=a,e}function lu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function gp(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function cu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var _p=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=_p.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},_p.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var kr=[],Xr=0,fl=null,Js=0,ri=[],si=0,Ea=null,wi=1,Di="";function qi(e,n){kr[Xr++]=Js,kr[Xr++]=fl,fl=e,Js=n}function vp(e,n,a){ri[si++]=wi,ri[si++]=Di,ri[si++]=Ea,Ea=e;var s=wi;e=Di;var c=32-Ie(s)-1;s&=~(1<<c),a+=1;var f=32-Ie(n)+c;if(30<f){var v=c-c%5;f=(s&(1<<v)-1).toString(32),s>>=v,c-=v,wi=1<<32-Ie(n)+c|a<<c|s,Di=f+e}else wi=1<<f|a<<c|s,Di=e}function uu(e){e.return!==null&&(qi(e,1),vp(e,1,0))}function fu(e){for(;e===fl;)fl=kr[--Xr],kr[Xr]=null,Js=kr[--Xr],kr[Xr]=null;for(;e===Ea;)Ea=ri[--si],ri[si]=null,Di=ri[--si],ri[si]=null,wi=ri[--si],ri[si]=null}function xp(e,n){ri[si++]=wi,ri[si++]=Di,ri[si++]=Ea,wi=n.id,Di=n.overflow,Ea=e}var bn=null,qt=null,St=!1,ba=null,oi=!1,du=Error(r(519));function Ta(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $s(ai(n,e)),du}function Sp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[rn]=e,n[vn]=s,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)_t(Mo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Vi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),yn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||F0(n.textContent,a)?(s.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),s.onScroll!=null&&_t("scroll",n),s.onScrollEnd!=null&&_t("scrollend",n),s.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ta(e,!0)}function yp(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:bn=bn.return}}function Wr(e){if(e!==bn)return!1;if(!St)return yp(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Uf(e.type,e.memoizedProps)),a=!a),a&&qt&&Ta(e),yp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qt=q0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));qt=q0(e)}else n===27?(n=qt,Ba(e.type)?(e=zf,zf=null,qt=e):qt=n):qt=bn?ci(e.stateNode.nextSibling):null;return!0}function or(){qt=bn=null,St=!1}function hu(){var e=ba;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),ba=null),e}function $s(e){ba===null?ba=[e]:ba.push(e)}var pu=L(null),lr=null,Yi=null;function Aa(e,n,a){he(pu,n._currentValue),n._currentValue=a}function ji(e){e._currentValue=pu.current,te(pu)}function mu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function gu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),mu(f.return,a,e),s||(v=null);break e}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),mu(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function qr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=c.type;Wn(c.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(c===ue.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}c=c.return}e!==null&&gu(n,e,a,s),n.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,Yi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Mp(lr,e)}function hl(e,n){return lr===null&&cr(e),Mp(e,n)}function Mp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(e===null)throw Error(r(308));Yi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Yi=Yi.next=n;return a}var jv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Zv=o.unstable_scheduleCallback,Kv=o.unstable_NormalPriority,sn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _u(){return{controller:new jv,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&Zv(Kv,function(){e.controller.abort()})}var to=null,vu=0,Yr=0,jr=null;function Qv(e,n){if(to===null){var a=to=[];vu=0,Yr=Mf(),jr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return vu++,n.then(Ep,Ep),n}function Ep(){if(--vu===0&&to!==null){jr!==null&&(jr.status="fulfilled");var e=to;to=null,Yr=0,jr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var bp=P.S;P.S=function(e,n){o0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qv(e,n),bp!==null&&bp(e,n)};var ur=L(null);function xu(){var e=ur.current;return e!==null?e:Xt.pooledCache}function pl(e,n){n===null?he(ur,ur.current):he(ur,n.pool)}function Tp(){var e=xu();return e===null?null:{parent:sn._currentValue,pool:e}}var Zr=Error(r(460)),Su=Error(r(474)),ml=Error(r(542)),gl={then:function(){}};function Ap(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,wp(e),e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=Xt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,wp(e),e}throw dr=n,Zr}}function fr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dr=a,Zr):a}}var dr=null;function Cp(){if(dr===null)throw Error(r(459));var e=dr;return dr=null,e}function wp(e){if(e===Zr||e===ml)throw Error(r(483))}var Kr=null,no=0;function _l(e){var n=no;return no+=1,Kr===null&&(Kr=[]),Rp(Kr,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vl(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Dp(e){function n(Y,k){if(e){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function s(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function c(Y,k){return Y=Wi(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function v(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,k,J,ge){return k===null||k.tag!==6?(k=lu(J,Y.mode,ge),k.return=Y,k):(k=c(k,J),k.return=Y,k)}function B(Y,k,J,ge){var Je=J.type;return Je===R?pe(Y,k,J.props.children,ge,J.key):k!==null&&(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===j&&fr(Je)===k.type)?(k=c(k,J.props),io(k,J),k.return=Y,k):(k=ul(J.type,J.key,J.props,null,Y.mode,ge),io(k,J),k.return=Y,k)}function $(Y,k,J,ge){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=cu(J,Y.mode,ge),k.return=Y,k):(k=c(k,J.children||[]),k.return=Y,k)}function pe(Y,k,J,ge,Je){return k===null||k.tag!==7?(k=sr(J,Y.mode,ge,Je),k.return=Y,k):(k=c(k,J),k.return=Y,k)}function ve(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=lu(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=ul(k.type,k.key,k.props,null,Y.mode,J),io(J,k),J.return=Y,J;case b:return k=cu(k,Y.mode,J),k.return=Y,k;case j:return k=fr(k),ve(Y,k,J)}if(re(k)||ne(k))return k=sr(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return ve(Y,_l(k),J);if(k.$$typeof===D)return ve(Y,hl(Y,k),J);vl(Y,k)}return null}function ae(Y,k,J,ge){var Je=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Je!==null?null:T(Y,k,""+J,ge);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Je?B(Y,k,J,ge):null;case b:return J.key===Je?$(Y,k,J,ge):null;case j:return J=fr(J),ae(Y,k,J,ge)}if(re(J)||ne(J))return Je!==null?null:pe(Y,k,J,ge,null);if(typeof J.then=="function")return ae(Y,k,_l(J),ge);if(J.$$typeof===D)return ae(Y,k,hl(Y,J),ge);vl(Y,J)}return null}function ce(Y,k,J,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get(J)||null,T(k,Y,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return Y=Y.get(ge.key===null?J:ge.key)||null,B(k,Y,ge,Je);case b:return Y=Y.get(ge.key===null?J:ge.key)||null,$(k,Y,ge,Je);case j:return ge=fr(ge),ce(Y,k,J,ge,Je)}if(re(ge)||ne(ge))return Y=Y.get(J)||null,pe(k,Y,ge,Je,null);if(typeof ge.then=="function")return ce(Y,k,J,_l(ge),Je);if(ge.$$typeof===D)return ce(Y,k,J,hl(k,ge),Je);vl(k,ge)}return null}function ke(Y,k,J,ge){for(var Je=null,Tt=null,Ze=k,ut=k=0,xt=null;Ze!==null&&ut<J.length;ut++){Ze.index>ut?(xt=Ze,Ze=null):xt=Ze.sibling;var At=ae(Y,Ze,J[ut],ge);if(At===null){Ze===null&&(Ze=xt);break}e&&Ze&&At.alternate===null&&n(Y,Ze),k=f(At,k,ut),Tt===null?Je=At:Tt.sibling=At,Tt=At,Ze=xt}if(ut===J.length)return a(Y,Ze),St&&qi(Y,ut),Je;if(Ze===null){for(;ut<J.length;ut++)Ze=ve(Y,J[ut],ge),Ze!==null&&(k=f(Ze,k,ut),Tt===null?Je=Ze:Tt.sibling=Ze,Tt=Ze);return St&&qi(Y,ut),Je}for(Ze=s(Ze);ut<J.length;ut++)xt=ce(Ze,Y,ut,J[ut],ge),xt!==null&&(e&&xt.alternate!==null&&Ze.delete(xt.key===null?ut:xt.key),k=f(xt,k,ut),Tt===null?Je=xt:Tt.sibling=xt,Tt=xt);return e&&Ze.forEach(function(Xa){return n(Y,Xa)}),St&&qi(Y,ut),Je}function tt(Y,k,J,ge){if(J==null)throw Error(r(151));for(var Je=null,Tt=null,Ze=k,ut=k=0,xt=null,At=J.next();Ze!==null&&!At.done;ut++,At=J.next()){Ze.index>ut?(xt=Ze,Ze=null):xt=Ze.sibling;var Xa=ae(Y,Ze,At.value,ge);if(Xa===null){Ze===null&&(Ze=xt);break}e&&Ze&&Xa.alternate===null&&n(Y,Ze),k=f(Xa,k,ut),Tt===null?Je=Xa:Tt.sibling=Xa,Tt=Xa,Ze=xt}if(At.done)return a(Y,Ze),St&&qi(Y,ut),Je;if(Ze===null){for(;!At.done;ut++,At=J.next())At=ve(Y,At.value,ge),At!==null&&(k=f(At,k,ut),Tt===null?Je=At:Tt.sibling=At,Tt=At);return St&&qi(Y,ut),Je}for(Ze=s(Ze);!At.done;ut++,At=J.next())At=ce(Ze,Y,ut,At.value,ge),At!==null&&(e&&At.alternate!==null&&Ze.delete(At.key===null?ut:At.key),k=f(At,k,ut),Tt===null?Je=At:Tt.sibling=At,Tt=At);return e&&Ze.forEach(function(cS){return n(Y,cS)}),St&&qi(Y,ut),Je}function Vt(Y,k,J,ge){if(typeof J=="object"&&J!==null&&J.type===R&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:e:{for(var Je=J.key;k!==null;){if(k.key===Je){if(Je=J.type,Je===R){if(k.tag===7){a(Y,k.sibling),ge=c(k,J.props.children),ge.return=Y,Y=ge;break e}}else if(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===j&&fr(Je)===k.type){a(Y,k.sibling),ge=c(k,J.props),io(ge,J),ge.return=Y,Y=ge;break e}a(Y,k);break}else n(Y,k);k=k.sibling}J.type===R?(ge=sr(J.props.children,Y.mode,ge,J.key),ge.return=Y,Y=ge):(ge=ul(J.type,J.key,J.props,null,Y.mode,ge),io(ge,J),ge.return=Y,Y=ge)}return v(Y);case b:e:{for(Je=J.key;k!==null;){if(k.key===Je)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(Y,k.sibling),ge=c(k,J.children||[]),ge.return=Y,Y=ge;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}ge=cu(J,Y.mode,ge),ge.return=Y,Y=ge}return v(Y);case j:return J=fr(J),Vt(Y,k,J,ge)}if(re(J))return ke(Y,k,J,ge);if(ne(J)){if(Je=ne(J),typeof Je!="function")throw Error(r(150));return J=Je.call(J),tt(Y,k,J,ge)}if(typeof J.then=="function")return Vt(Y,k,_l(J),ge);if(J.$$typeof===D)return Vt(Y,k,hl(Y,J),ge);vl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(Y,k.sibling),ge=c(k,J),ge.return=Y,Y=ge):(a(Y,k),ge=lu(J,Y.mode,ge),ge.return=Y,Y=ge),v(Y)):a(Y,k)}return function(Y,k,J,ge){try{no=0;var Je=Vt(Y,k,J,ge);return Kr=null,Je}catch(Ze){if(Ze===Zr||Ze===ml)throw Ze;var Tt=qn(29,Ze,null,Y.mode);return Tt.lanes=ge,Tt.return=Y,Tt}finally{}}}var hr=Dp(!0),Up=Dp(!1),Ra=!1;function yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Nt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=cl(e),pp(e,null,a),n}return ll(e,s,n,a),cl(e)}function ao(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Is(e,a)}}function Eu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var bu=!1;function ro(){if(bu){var e=jr;if(e!==null)throw e}}function so(e,n,a,s){bu=!1;var c=e.updateQueue;Ra=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,$=B.next;B.next=null,v===null?f=$:v.next=$,v=B;var pe=e.alternate;pe!==null&&(pe=pe.updateQueue,T=pe.lastBaseUpdate,T!==v&&(T===null?pe.firstBaseUpdate=$:T.next=$,pe.lastBaseUpdate=B))}if(f!==null){var ve=c.baseState;v=0,pe=$=B=null,T=f;do{var ae=T.lane&-536870913,ce=ae!==T.lane;if(ce?(vt&ae)===ae:(s&ae)===ae){ae!==0&&ae===Yr&&(bu=!0),pe!==null&&(pe=pe.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ke=e,tt=T;ae=n;var Vt=a;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){ve=ke.call(Vt,ve,ae);break e}ve=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,ae=typeof ke=="function"?ke.call(Vt,ve,ae):ke,ae==null)break e;ve=g({},ve,ae);break e;case 2:Ra=!0}}ae=T.callback,ae!==null&&(e.flags|=64,ce&&(e.flags|=8192),ce=c.callbacks,ce===null?c.callbacks=[ae]:ce.push(ae))}else ce={lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pe===null?($=pe=ce,B=ve):pe=pe.next=ce,v|=ae;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ce=T,T=ce.next,ce.next=null,c.lastBaseUpdate=ce,c.shared.pending=null}}while(!0);pe===null&&(B=ve),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=pe,f===null&&(c.shared.lanes=0),Oa|=v,e.lanes=v,e.memoizedState=ve}}function Np(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Lp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Np(a[e],n)}var Qr=L(null),xl=L(0);function Op(e,n){e=ia,he(xl,e),he(Qr,n),ia=e|n.baseLanes}function Tu(){he(xl,ia),he(Qr,Qr.current)}function Au(){ia=xl.current,te(Qr),te(xl)}var Yn=L(null),li=null;function Da(e){var n=e.alternate;he(tn,tn.current&1),he(Yn,e),li===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(li=e)}function Ru(e){he(tn,tn.current),he(Yn,e),li===null&&(li=e)}function Pp(e){e.tag===22?(he(tn,tn.current),he(Yn,e),li===null&&(li=e)):Ua()}function Ua(){he(tn,tn.current),he(Yn,Yn.current)}function jn(e){te(Yn),li===e&&(li=null),te(tn)}var tn=L(0);function Sl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Of(a)||Pf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,lt=null,Ht=null,on=null,yl=!1,Jr=!1,pr=!1,Ml=0,oo=0,$r=null,$v=0;function $t(){throw Error(r(321))}function Cu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function wu(e,n,a,s,c,f){return Zi=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?vm:Xu,pr=!1,f=a(s,c),pr=!1,Jr&&(f=Fp(n,a,s,c)),zp(e),f}function zp(e){P.H=uo;var n=Ht!==null&&Ht.next!==null;if(Zi=0,on=Ht=lt=null,yl=!1,oo=0,$r=null,n)throw Error(r(300));e===null||ln||(e=e.dependencies,e!==null&&dl(e)&&(ln=!0))}function Fp(e,n,a,s){lt=e;var c=0;do{if(Jr&&($r=null),oo=0,Jr=!1,25<=c)throw Error(r(301));if(c+=1,on=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=xm,f=n(a,s)}while(Jr);return f}function ex(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?lo(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(lt.flags|=1024),n}function Du(){var e=Ml!==0;return Ml=0,e}function Uu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Nu(e){if(yl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}yl=!1}Zi=0,on=Ht=lt=null,Jr=!1,oo=Ml=0,$r=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?lt.memoizedState=on=e:on=on.next=e,on}function nn(){if(Ht===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=on===null?lt.memoizedState:on.next;if(n!==null)on=n,Ht=e;else{if(e===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},on===null?lt.memoizedState=on=e:on=on.next=e}return on}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(e){var n=oo;return oo+=1,$r===null&&($r=[]),e=Rp($r,e,n),n=lt,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?vm:Xu),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return lo(e);if(e.$$typeof===D)return Tn(e)}throw Error(r(438,String(e)))}function Lu(e){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=lt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=w;return n.index++,a}function Ki(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=nn();return Ou(n,Ht,e)}function Ou(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=v=null,B=null,$=n,pe=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(vt&ve)===ve:(Zi&ve)===ve){var ae=$.revertLane;if(ae===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===Yr&&(pe=!0);else if((Zi&ae)===ae){$=$.next,ae===Yr&&(pe=!0);continue}else ve={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=ve,v=f):B=B.next=ve,lt.lanes|=ae,Oa|=ae;ve=$.action,pr&&a(f,ve),f=$.hasEagerState?$.eagerState:a(f,ve)}else ae={lane:ve,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=ae,v=f):B=B.next=ae,lt.lanes|=ve,Oa|=ve;$=$.next}while($!==null&&$!==n);if(B===null?v=f:B.next=T,!Wn(f,e.memoizedState)&&(ln=!0,pe&&(a=jr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Pu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Ip(e,n,a){var s=lt,c=nn(),f=St;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Wn((Ht||c).memoizedState,a);if(v&&(c.memoizedState=a,ln=!0),c=c.queue,Iu(Gp.bind(null,s,c,e),[e]),c.getSnapshot!==n||v||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,es(9,{destroy:void 0},Hp.bind(null,s,c,a,n),null),Xt===null)throw Error(r(349));f||(Zi&127)!==0||Bp(s,n,a)}return a}function Bp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=El(),lt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Hp(e,n,a,s){n.value=a,n.getSnapshot=s,Vp(n)&&kp(e)}function Gp(e,n,a){return a(function(){Vp(n)&&kp(e)})}function Vp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function kp(e){var n=rr(e,2);n!==null&&Vn(n,e,2)}function zu(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),pr){He(!0);try{a()}finally{He(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},n}function Xp(e,n,a,s){return e.baseState=a,Ou(e,Ht,typeof s=="function"?s:Ki)}function tx(e,n,a,s,c){if(Cl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var T=a(c,s),B=P.S;B!==null&&B(v,T),qp(e,n,T)}catch($){Fu(e,n,$)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(c,s),qp(e,n,f)}catch($){Fu(e,n,$)}}function qp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Yp(e,n,s)},function(s){return Fu(e,n,s)}):Yp(e,n,a)}function Yp(e,n,a){n.status="fulfilled",n.value=a,jp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wp(e,a)))}function Fu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,jp(n),n=n.next;while(n!==s)}e.action=null}function jp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Zp(e,n){return n}function Kp(e,n){if(St){var a=Xt.formState;if(a!==null){e:{var s=lt;if(St){if(qt){t:{for(var c=qt,f=oi;c.nodeType!==8;){if(!f){c=null;break t}if(c=ci(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){qt=ci(c.nextSibling),s=c.data==="F!";break e}}Ta(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:n},a.queue=s,a=mm.bind(null,lt,s),s.dispatch=a,s=zu(!1),f=ku.bind(null,lt,!1,s.queue),s=Pn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=tx.bind(null,lt,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Qp(e){var n=nn();return Jp(n,Ht,e)}function Jp(e,n,a){if(n=Ou(e,n,Zp)[0],e=Tl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=lo(n)}catch(v){throw v===Zr?ml:v}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,es(9,{destroy:void 0},nx.bind(null,c,a),null)),[s,f,e]}function nx(e,n){e.action=n}function $p(e){var n=nn(),a=Ht;if(a!==null)return Jp(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function es(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=lt.updateQueue,n===null&&(n=El(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function em(){return nn().memoizedState}function Al(e,n,a,s){var c=Pn();lt.flags|=e,c.memoizedState=es(1|n,{destroy:void 0},a,s===void 0?null:s)}function Rl(e,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ht!==null&&s!==null&&Cu(s,Ht.memoizedState.deps)?c.memoizedState=es(n,f,a,s):(lt.flags|=e,c.memoizedState=es(1|n,f,a,s))}function tm(e,n){Al(8390656,8,e,n)}function Iu(e,n){Rl(2048,8,e,n)}function ix(e){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=El(),lt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function nm(e){var n=nn().memoizedState;return ix({ref:n,nextImpl:e}),function(){if((Nt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function im(e,n){return Rl(4,2,e,n)}function am(e,n){return Rl(4,4,e,n)}function rm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function sm(e,n,a){a=a!=null?a.concat([e]):null,Rl(4,4,rm.bind(null,n,e),a)}function Bu(){}function om(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Cu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function lm(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Cu(n,s[1]))return s[0];if(s=e(),pr){He(!0);try{e()}finally{He(!1)}}return a.memoizedState=[s,n],s}function Hu(e,n,a){return a===void 0||(Zi&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=c0(),lt.lanes|=e,Oa|=e,a)}function cm(e,n,a,s){return Wn(a,n)?a:Qr.current!==null?(e=Hu(e,a,s),Wn(e,n)||(ln=!0),e):(Zi&42)===0||(Zi&1073741824)!==0&&(vt&261930)===0?(ln=!0,e.memoizedState=a):(e=c0(),lt.lanes|=e,Oa|=e,n)}function um(e,n,a,s,c){var f=H.p;H.p=f!==0&&8>f?f:8;var v=P.T,T={};P.T=T,ku(e,!1,n,a);try{var B=c(),$=P.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pe=Jv(B,s);co(e,n,pe,Qn(e))}else co(e,n,s,Qn(e))}catch(ve){co(e,n,{then:function(){},status:"rejected",reason:ve},Qn())}finally{H.p=f,v!==null&&T.types!==null&&(v.types=T.types),P.T=v}}function ax(){}function Gu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=fm(e).queue;um(e,c,n,ee,a===null?ax:function(){return dm(e),a(s)})}function fm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function dm(e){var n=fm(e);n.next===null&&(n=e.alternate.memoizedState),co(e,n.next.queue,{},Qn())}function Vu(){return Tn(Ro)}function hm(){return nn().memoizedState}function pm(){return nn().memoizedState}function rx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=Ca(a);var s=wa(n,e,a);s!==null&&(Vn(s,n,a),ao(s,n,a)),n={cache:_u()},e.payload=n;return}n=n.return}}function sx(e,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?gm(n,a):(a=su(e,n,a,s),a!==null&&(Vn(a,e,s),_m(a,n,s)))}function mm(e,n,a){var s=Qn();co(e,n,a,s)}function co(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))gm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,v))return ll(e,n,c,0),Xt===null&&ol(),!1}catch{}finally{}if(a=su(e,n,c,s),a!==null)return Vn(a,e,s),_m(a,n,s),!0}return!1}function ku(e,n,a,s){if(s={lane:2,revertLane:Mf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(r(479))}else n=su(e,a,s,2),n!==null&&Vn(n,e,2)}function Cl(e){var n=e.alternate;return e===lt||n!==null&&n===lt}function gm(e,n){Jr=yl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function _m(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Is(e,a)}}var uo={readContext:Tn,use:bl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};uo.useEffectEvent=$t;var vm={readContext:Tn,use:bl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:tm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Al(4194308,4,rm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Al(4194308,4,e,n)},useInsertionEffect:function(e,n){Al(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var s=e();if(pr){He(!0);try{e()}finally{He(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Pn();if(a!==void 0){var c=a(n);if(pr){He(!0);try{a(n)}finally{He(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=sx.bind(null,lt,e),[s.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=zu(e);var n=e.queue,a=mm.bind(null,lt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Bu,useDeferredValue:function(e,n){var a=Pn();return Hu(a,e,n)},useTransition:function(){var e=zu(!1);return e=um.bind(null,lt,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=lt,c=Pn();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(vt&127)!==0||Bp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tm(Gp.bind(null,s,f,e),[e]),s.flags|=2048,es(9,{destroy:void 0},Hp.bind(null,s,f,a,n),null),a},useId:function(){var e=Pn(),n=Xt.identifierPrefix;if(St){var a=Di,s=wi;a=(s&~(1<<32-Ie(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=$v++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Vu,useFormState:Kp,useActionState:Kp,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,lt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Lu,useCacheRefresh:function(){return Pn().memoizedState=rx.bind(null,lt)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Xu={readContext:Tn,use:bl,useCallback:om,useContext:Tn,useEffect:Iu,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:Tl,useRef:em,useState:function(){return Tl(Ki)},useDebugValue:Bu,useDeferredValue:function(e,n){var a=nn();return cm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Tl(Ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Ip,useId:hm,useHostTransitionStatus:Vu,useFormState:Qp,useActionState:Qp,useOptimistic:function(e,n){var a=nn();return Xp(a,Ht,e,n)},useMemoCache:Lu,useCacheRefresh:pm};Xu.useEffectEvent=nm;var xm={readContext:Tn,use:bl,useCallback:om,useContext:Tn,useEffect:Iu,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:Pu,useRef:em,useState:function(){return Pu(Ki)},useDebugValue:Bu,useDeferredValue:function(e,n){var a=nn();return Ht===null?Hu(a,e,n):cm(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Pu(Ki)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Ip,useId:hm,useHostTransitionStatus:Vu,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=nn();return Ht!==null?Xp(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Lu,useCacheRefresh:pm};xm.useEffectEvent=nm;function Wu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var qu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Qn(),c=Ca(s);c.payload=n,a!=null&&(c.callback=a),n=wa(e,c,s),n!==null&&(Vn(n,e,s),ao(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Qn(),c=Ca(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=wa(e,c,s),n!==null&&(Vn(n,e,s),ao(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),s=Ca(a);s.tag=2,n!=null&&(s.callback=n),n=wa(e,s,a),n!==null&&(Vn(n,e,a),ao(n,e,a))}};function Sm(e,n,a,s,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!Ks(a,s)||!Ks(c,f):!0}function ym(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&qu.enqueueReplaceState(n,n.state,null)}function mr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Mm(e){sl(e)}function Em(e){console.error(e)}function bm(e){sl(e)}function wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Yu(e,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(e,n)},a}function Am(e){return e=Ca(e),e.tag=3,e}function Rm(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Tm(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Tm(n,a,s),typeof c!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function ox(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Gl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),xf(e,s,c)),!1;case 22:return a.flags|=65536,s===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),xf(e,s,c)),!1}throw Error(r(435,a.tag))}return xf(e,s,c),Gl(),!1}if(St)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==du&&(e=Error(r(422),{cause:s}),$s(ai(e,a)))):(s!==du&&(n=Error(r(423),{cause:s}),$s(ai(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ai(s,a),c=Yu(e.stateNode,s,c),Eu(e,c),en!==4&&(en=2)),!1;var f=Error(r(520),{cause:s});if(f=ai(f,a),xo===null?xo=[f]:xo.push(f),en!==4&&(en=2),n===null)return!0;s=ai(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Yu(a.stateNode,s,e),Eu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Am(c),Rm(c,e,a,s),Eu(a,c),!1}a=a.return}while(a!==null);return!1}var ju=Error(r(461)),ln=!1;function An(e,n,a,s){n.child=e===null?Up(n,null,a,s):hr(n,e.child,a,s)}function Cm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return cr(n),s=wu(e,n,a,v,f,c),T=Du(),e!==null&&!ln?(Uu(e,n,c),Qi(e,n,c)):(St&&T&&uu(n),n.flags|=1,An(e,n,s,c),n.child)}function wm(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dm(e,n,f,s,c)):(e=ul(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!nf(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(v,s)&&e.ref===n.ref)return Qi(e,n,c)}return n.flags|=1,e=Wi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Dm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Ks(f,s)&&e.ref===n.ref)if(ln=!1,n.pendingProps=s=f,nf(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Qi(e,n,c)}return Zu(e,n,a,s,c)}function Um(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Nm(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&pl(n,f!==null?f.cachePool:null),f!==null?Op(n,f):Tu(),Pp(n);else return s=n.lanes=536870912,Nm(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(pl(n,f.cachePool),Op(n,f),Ua(),n.memoizedState=null):(e!==null&&pl(n,null),Tu(),Ua());return An(e,n,c,a),n.child}function fo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Nm(e,n,a,s,c){var f=xu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&pl(n,null),Tu(),Pp(n),e!==null&&qr(e,n,s,!0),n.childLanes=c,null}function Dl(e,n){return n=Nl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Lm(e,n,a){return hr(n,e.child,null,a),e=Dl(n,n.pendingProps),e.flags|=2,jn(n),n.memoizedState=null,e}function lx(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(s.mode==="hidden")return e=Dl(n,s),n.lanes=536870912,fo(null,e);if(Ru(n),(e=qt)?(e=W0(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=gp(e),a.return=n,n.child=a,bn=n,qt=null)):e=null,e===null)throw Ta(n);return n.lanes=536870912,null}return Dl(n,s)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Ru(n),c)if(n.flags&256)n.flags&=-257,n=Lm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||qr(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(s=Xt,s!==null&&(v=Ur(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,rr(e,v),Vn(s,e,v),ju;Gl(),n=Lm(e,n,a)}else e=f.treeContext,qt=ci(v.nextSibling),bn=n,St=!0,ba=null,oi=!1,e!==null&&xp(n,e),n=Dl(n,s),n.flags|=4096;return n}return e=Wi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ul(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Zu(e,n,a,s,c){return cr(n),a=wu(e,n,a,s,void 0,c),s=Du(),e!==null&&!ln?(Uu(e,n,c),Qi(e,n,c)):(St&&s&&uu(n),n.flags|=1,An(e,n,a,c),n.child)}function Om(e,n,a,s,c,f){return cr(n),n.updateQueue=null,a=Fp(n,s,a,c),zp(e),s=Du(),e!==null&&!ln?(Uu(e,n,f),Qi(e,n,f)):(St&&s&&uu(n),n.flags|=1,An(e,n,a,f),n.child)}function Pm(e,n,a,s,c){if(cr(n),n.stateNode===null){var f=Vr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Tn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=qu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},yu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Tn(v):Vr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Wu(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&qu.enqueueReplaceState(f,f.state,null),so(n,s,f,c),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=mr(a,T);f.props=B;var $=f.context,pe=a.contextType;v=Vr,typeof pe=="object"&&pe!==null&&(v=Tn(pe));var ve=a.getDerivedStateFromProps;pe=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==v)&&ym(n,f,s,v),Ra=!1;var ae=n.memoizedState;f.state=ae,so(n,s,f,c),ro(),$=n.memoizedState,T||ae!==$||Ra?(typeof ve=="function"&&(Wu(n,a,ve,s),$=n.memoizedState),(B=Ra||Sm(n,a,B,s,ae,$,v))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=v,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Mu(e,n),v=n.memoizedProps,pe=mr(a,v),f.props=pe,ve=n.pendingProps,ae=f.context,$=a.contextType,B=Vr,typeof $=="object"&&$!==null&&(B=Tn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ve||ae!==B)&&ym(n,f,s,B),Ra=!1,ae=n.memoizedState,f.state=ae,so(n,s,f,c),ro();var ce=n.memoizedState;v!==ve||ae!==ce||Ra||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof T=="function"&&(Wu(n,a,T,s),ce=n.memoizedState),(pe=Ra||Sm(n,a,pe,s,ae,ce,B)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ce,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ce,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ce),f.props=s,f.state=ce,f.context=B,s=pe):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ul(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=hr(n,e.child,null,c),n.child=hr(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Qi(e,n,c),e}function zm(e,n,a,s){return or(),n.flags|=256,An(e,n,a,s),n.child}var Ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qu(e){return{baseLanes:e,cachePool:Tp()}}function Ju(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function Fm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(c?Da(n):Ua(),(e=qt)?(e=W0(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=gp(e),a.return=n,n.child=a,bn=n,qt=null)):e=null,e===null)throw Ta(n);return Pf(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(Ua(),c=n.mode,T=Nl({mode:"hidden",children:T},c),s=sr(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=Qu(a),s.childLanes=Ju(e,v,a),n.memoizedState=Ku,fo(null,s)):(Da(n),$u(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=ef(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),T=s.fallback,c=n.mode,s=Nl({mode:"visible",children:s.children},c),T=sr(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,hr(n,e.child,null,a),s=n.child,s.memoizedState=Qu(a),s.childLanes=Ju(e,v,a),n.memoizedState=Ku,n=fo(null,s));else if(Da(n),Pf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var $=v.dgst;v=$,s=Error(r(419)),s.stack="",s.digest=v,$s({value:s,source:null,stack:null}),n=ef(e,n,a)}else if(ln||qr(e,n,a,!1),v=(a&e.childLanes)!==0,ln||v){if(v=Xt,v!==null&&(s=Ur(v,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,rr(e,s),Vn(v,e,s),ju;Of(T)||Gl(),n=ef(e,n,a)}else Of(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,qt=ci(T.nextSibling),bn=n,St=!0,ba=null,oi=!1,e!==null&&xp(n,e),n=$u(n,s.children),n.flags|=4096);return n}return c?(Ua(),T=s.fallback,c=n.mode,B=e.child,$=B.sibling,s=Wi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,$!==null?T=Wi($,T):(T=sr(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,fo(null,s),s=n.child,T=e.child.memoizedState,T===null?T=Qu(a):(c=T.cachePool,c!==null?(B=sn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Tp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=Ju(e,v,a),n.memoizedState=Ku,fo(e.child,s)):(Da(n),a=e.child,e=a.sibling,a=Wi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function $u(e,n){return n=Nl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Nl(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function ef(e,n,a){return hr(n,e.child,null,a),e=$u(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Im(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),mu(e.return,n,a)}function tf(e,n,a,s,c,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function Bm(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var v=tn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,he(tn,v),An(e,n,s,a),s=St?Js:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Im(e,a,n);else if(e.tag===19)Im(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Sl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),tf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Sl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}tf(n,!0,a,null,f,s);break;case"together":tf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Wi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Wi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function nf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function cx(e,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Aa(n,sn,e.memoizedState.cache),or();break;case 27:case 5:Fe(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ru(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Fm(e,n,a):(Da(n),e=Qi(e,n,a),e!==null?e.sibling:null);Da(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Bm(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),he(tn,tn.current),s)break;return null;case 22:return n.lanes=0,Um(e,n,a,n.pendingProps);case 24:Aa(n,sn,e.memoizedState.cache)}return Qi(e,n,a)}function Hm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!nf(e,a)&&(n.flags&128)===0)return ln=!1,cx(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,St&&(n.flags&1048576)!==0&&vp(n,Js,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=fr(n.elementType),n.type=e,typeof e=="function")ou(e)?(s=mr(e,s),n.tag=1,n=Pm(null,n,e,s,a)):(n.tag=0,n=Zu(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===O){n.tag=11,n=Cm(null,n,e,s,a);break e}else if(c===z){n.tag=14,n=wm(null,n,e,s,a);break e}}throw n=le(e)||e,Error(r(306,n,""))}}return n;case 0:return Zu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=mr(s,n.pendingProps),Pm(e,n,s,c,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Mu(e,n),so(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Aa(n,sn,s),s!==f.cache&&gu(n,[sn],a,!0),ro(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=zm(e,n,s,a);break e}else if(s!==c){c=ai(Error(r(424)),n),$s(c),n=zm(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qt=ci(e.firstChild),bn=n,St=!0,ba=null,oi=!0,a=Up(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(or(),s===c){n=Qi(e,n,a);break e}An(e,n,s,a)}n=n.child}return n;case 26:return Ul(e,n),e===null?(a=Q0(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,e=n.pendingProps,s=jl(Q.current).createElement(a),s[rn]=n,s[vn]=e,Rn(s,a,e),A(s),n.stateNode=s):n.memoizedState=Q0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Fe(n),e===null&&St&&(s=n.stateNode=j0(n.type,n.pendingProps,Q.current),bn=n,oi=!0,c=qt,Ba(n.type)?(zf=c,qt=ci(s.firstChild)):qt=c),An(e,n,n.pendingProps.children,a),Ul(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((c=s=qt)&&(s=Bx(s,n.type,n.pendingProps,oi),s!==null?(n.stateNode=s,bn=n,qt=ci(s.firstChild),oi=!1,c=!0):c=!1),c||Ta(n)),Fe(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,s=f.children,Uf(c,f)?s=null:v!==null&&Uf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=wu(e,n,ex,null,null,a),Ro._currentValue=c),Ul(e,n),An(e,n,s,a),n.child;case 6:return e===null&&St&&((e=a=qt)&&(a=Hx(a,n.pendingProps,oi),a!==null?(n.stateNode=a,bn=n,qt=null,e=!0):e=!1),e||Ta(n)),null;case 13:return Fm(e,n,a);case 4:return Te(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=hr(n,null,s,a):An(e,n,s,a),n.child;case 11:return Cm(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Aa(n,n.type,s.value),An(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,cr(n),c=Tn(c),s=s(c),n.flags|=1,An(e,n,s,a),n.child;case 14:return wm(e,n,n.type,n.pendingProps,a);case 15:return Dm(e,n,n.type,n.pendingProps,a);case 19:return Bm(e,n,a);case 31:return lx(e,n,a);case 22:return Um(e,n,a,n.pendingProps);case 24:return cr(n),s=Tn(sn),e===null?(c=xu(),c===null&&(c=Xt,f=_u(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},yu(n),Aa(n,sn,c)):((e.lanes&a)!==0&&(Mu(e,n),so(n,null,null,a),ro()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Aa(n,sn,s)):(s=f.cache,Aa(n,sn,s),s!==c.cache&&gu(n,[sn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ji(e){e.flags|=4}function af(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(h0())e.flags|=8192;else throw dr=gl,Su}else e.flags&=-16777217}function Gm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ng(n))if(h0())e.flags|=8192;else throw dr=gl,Su}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,as|=n)}function ho(e,n){if(!St)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Yt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function ux(e,n,a){var s=n.pendingProps;switch(fu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ji(sn),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wr(n)?Ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hu())),Yt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ji(n),f!==null?(Yt(n),Gm(n,f)):(Yt(n),af(n,c,null,s,a))):f?f!==e.memoizedState?(Ji(n),Yt(n),Gm(n,f)):(Yt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ji(n),Yt(n),af(n,c,e,s,a)),null;case 27:if(ht(n),a=Q.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}e=Me.current,Wr(n)?Sp(n):(e=j0(c,s,a),n.stateNode=e,Ji(n))}return Yt(n),null;case 5:if(ht(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(f=Me.current,Wr(n))Sp(n);else{var v=jl(Q.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(c,{is:s.is}):v.createElement(c)}}f[rn]=n,f[vn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Rn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Ji(n)}}return Yt(n),af(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Q.current,Wr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||F0(e.nodeValue,a)),e||Ta(n,!0)}else e=jl(e).createTextNode(s),e[rn]=n,n.stateNode=e}return Yt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Wr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),e=!1}else a=hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Yt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Wr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),c=!1}else c=hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),Yt(n),null);case 4:return ze(),e===null&&Af(n.stateNode.containerInfo),Yt(n),null;case 10:return ji(n.type),Yt(n),null;case 19:if(te(tn),s=n.memoizedState,s===null)return Yt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ho(s,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Sl(e),f!==null){for(n.flags|=128,ho(s,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)mp(a,e),a=a.sibling;return he(tn,tn.current&1|2),St&&qi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&E()>Il&&(n.flags|=128,c=!0,ho(s,!1),n.lanes=4194304)}else{if(!c)if(e=Sl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!St)return Yt(n),null}else 2*E()-s.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,c=!0,ho(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=E(),e.sibling=null,a=tn.current,he(tn,c?a&1|2:a&1),St&&qi(n,s.treeForkCount),e):(Yt(n),null);case 22:case 23:return jn(n),Au(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&te(ur),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(sn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function fx(e,n){switch(fu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ji(sn),ze(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ht(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return te(tn),null;case 4:return ze(),null;case 10:return ji(n.type),null;case 22:case 23:return jn(n),Au(),e!==null&&te(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ji(sn),null;case 25:return null;default:return null}}function Vm(e,n){switch(fu(n),n.tag){case 3:ji(sn),ze();break;case 26:case 27:case 5:ht(n);break;case 4:ze();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:te(tn);break;case 10:ji(n.type);break;case 22:case 23:jn(n),Au(),e!==null&&te(ur);break;case 24:ji(sn)}}function po(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==c)}}catch(T){It(n,n.return,T)}}function Na(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var B=a,$=T;try{$()}catch(pe){It(c,B,pe)}}}s=s.next}while(s!==f)}}catch(pe){It(n,n.return,pe)}}function km(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Lp(n,a)}catch(s){It(e,e.return,s)}}}function Xm(e,n,a){a.props=mr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){It(e,n,s)}}function mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){It(e,n,c)}}function Ui(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){It(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){It(e,n,c)}else a.current=null}function Wm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){It(e,e.return,c)}}function rf(e,n,a){try{var s=e.stateNode;Lx(s,e.type,a,n),s[vn]=n}catch(c){It(e,e.return,c)}}function qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function sf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function of(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(s!==4&&(s===27&&Ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(of(e,n,a),e=e.sibling;e!==null;)of(e,n,a),e=e.sibling}function Ol(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ol(e,n,a),e=e.sibling;e!==null;)Ol(e,n,a),e=e.sibling}function Ym(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,s,a),n[rn]=e,n[vn]=a}catch(f){It(e,e.return,f)}}var $i=!1,cn=!1,lf=!1,jm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function dx(e,n){if(e=e.containerInfo,wf=tc,e=sp(e),eu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,B=-1,$=0,pe=0,ve=e,ae=null;t:for(;;){for(var ce;ve!==a||c!==0&&ve.nodeType!==3||(T=v+c),ve!==f||s!==0&&ve.nodeType!==3||(B=v+s),ve.nodeType===3&&(v+=ve.nodeValue.length),(ce=ve.firstChild)!==null;)ae=ve,ve=ce;for(;;){if(ve===e)break t;if(ae===a&&++$===c&&(T=v),ae===f&&++pe===s&&(B=v),(ce=ve.nextSibling)!==null)break;ve=ae,ae=ve.parentNode}ve=ce}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:e,selectionRange:a},tc=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ke=mr(a.type,c);e=s.getSnapshotBeforeUpdate(ke,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(tt){It(a,a.return,tt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Lf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function Zm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),s&4&&po(5,a);break;case 1:if(ta(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){It(a,a.return,v)}else{var c=mr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){It(a,a.return,v)}}s&64&&km(a),s&512&&mo(a,a.return);break;case 3:if(ta(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lp(e,n)}catch(v){It(a,a.return,v)}}break;case 27:n===null&&s&4&&Ym(a);case 26:case 5:ta(e,a),n===null&&s&4&&Wm(a),s&512&&mo(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),s&4&&Jm(e,a);break;case 13:ta(e,a),s&4&&$m(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=yx.bind(null,a),Gx(e,a))));break;case 22:if(s=a.memoizedState!==null||$i,!s){n=n!==null&&n.memoizedState!==null||cn,c=$i;var f=cn;$i=s,(cn=n)&&!f?na(e,a,(a.subtreeFlags&8772)!==0):ta(e,a),$i=c,cn=f}break;case 30:break;default:ta(e,a)}}function Km(e){var n=e.alternate;n!==null&&(e.alternate=null,Km(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,In=!1;function ea(e,n,a){for(a=a.child;a!==null;)Qm(e,n,a),a=a.sibling}function Qm(e,n,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:cn||Ui(a,n),ea(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ui(a,n);var s=Qt,c=In;Ba(a.type)&&(Qt=a.stateNode,In=!1),ea(e,n,a),bo(a.stateNode),Qt=s,In=c;break;case 5:cn||Ui(a,n);case 6:if(s=Qt,c=In,Qt=null,ea(e,n,a),Qt=s,In=c,Qt!==null)if(In)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){It(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){It(a,n,f)}break;case 18:Qt!==null&&(In?(e=Qt,k0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ds(e)):k0(Qt,a.stateNode));break;case 4:s=Qt,c=In,Qt=a.stateNode.containerInfo,In=!0,ea(e,n,a),Qt=s,In=c;break;case 0:case 11:case 14:case 15:Na(2,a,n),cn||Na(4,a,n),ea(e,n,a);break;case 1:cn||(Ui(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Xm(a,n,s)),ea(e,n,a);break;case 21:ea(e,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,ea(e,n,a),cn=s;break;default:ea(e,n,a)}}function Jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ds(e)}catch(a){It(n,n.return,a)}}}function $m(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ds(e)}catch(a){It(n,n.return,a)}}function hx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new jm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new jm),n;default:throw Error(r(435,e.tag))}}function Pl(e,n){var a=hx(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Mx.bind(null,e,s);s.then(c,c)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Ba(T.type)){Qt=T.stateNode,In=!1;break e}break;case 5:Qt=T.stateNode,In=!1;break e;case 3:case 4:Qt=T.stateNode.containerInfo,In=!0;break e}T=T.return}if(Qt===null)throw Error(r(160));Qm(f,v,c),Qt=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)e0(n,e),n=n.sibling}var xi=null;function e0(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Hn(e),s&4&&(Na(3,e,e.return),po(3,e),Na(5,e,e.return));break;case 1:Bn(n,e),Hn(e),s&512&&(cn||a===null||Ui(a,a.return)),s&64&&$i&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=xi;if(Bn(n,e),Hn(e),s&512&&(cn||a===null||Ui(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[er]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,s,a),f[rn]=e,A(f),s=f;break e;case"link":var v=eg("link","href",c).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;case"meta":if(v=eg("meta","content",c).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=e,A(f),s=f}e.stateNode=s}else tg(c,e.type,e.stateNode);else e.stateNode=$0(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?tg(c,e.type,e.stateNode):$0(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&rf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Hn(e),s&512&&(cn||a===null||Ui(a,a.return)),a!==null&&s&4&&rf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Hn(e),s&512&&(cn||a===null||Ui(a,a.return)),e.flags&32){c=e.stateNode;try{dn(c,"")}catch(ke){It(e,e.return,ke)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,rf(e,c,a!==null?a.memoizedProps:c)),s&1024&&(lf=!0);break;case 6:if(Bn(n,e),Hn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(ke){It(e,e.return,ke)}}break;case 3:if(Ql=null,c=xi,xi=Zl(n.containerInfo),Bn(n,e),xi=c,Hn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(ke){It(e,e.return,ke)}lf&&(lf=!1,t0(e));break;case 4:s=xi,xi=Zl(e.stateNode.containerInfo),Bn(n,e),Hn(e),xi=s;break;case 12:Bn(n,e),Hn(e);break;case 31:Bn(n,e),Hn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Pl(e,s)));break;case 13:Bn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=E()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Pl(e,s)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=$i,pe=cn;if($i=$||c,cn=pe||B,Bn(n,e),cn=pe,$i=$,Hn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||$i||cn||gr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=B.stateNode;var ve=B.memoizedProps.style,ae=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;T.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(ke){It(B,B.return,ke)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(ke){It(B,B.return,ke)}}}else if(n.tag===18){if(a===null){B=n;try{var ce=B.stateNode;c?X0(ce,!0):X0(B.stateNode,!1)}catch(ke){It(B,B.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Pl(e,a))));break;case 19:Bn(n,e),Hn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Pl(e,s)));break;case 30:break;case 21:break;default:Bn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(qm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=sf(e);Ol(e,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(dn(v,""),a.flags&=-33);var T=sf(e);Ol(e,T,v);break;case 3:case 4:var B=a.stateNode.containerInfo,$=sf(e);of(e,$,B);break;default:throw Error(r(161))}}catch(pe){It(e,e.return,pe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function t0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;t0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zm(e,n.alternate,n),n=n.sibling}function gr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),gr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xm(n,n.return,a),gr(n);break;case 27:bo(n.stateNode);case 26:case 5:Ui(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}e=e.sibling}}function na(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:na(c,f,a),po(4,f);break;case 1:if(na(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){It(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Np(B[c],T)}catch($){It(s,s.return,$)}}a&&v&64&&km(f),mo(f,f.return);break;case 27:Ym(f);case 26:case 5:na(c,f,a),a&&s===null&&v&4&&Wm(f),mo(f,f.return);break;case 12:na(c,f,a);break;case 31:na(c,f,a),a&&v&4&&Jm(c,f);break;case 13:na(c,f,a),a&&v&4&&$m(c,f);break;case 22:f.memoizedState===null&&na(c,f,a),mo(f,f.return);break;case 30:break;default:na(c,f,a)}n=n.sibling}}function cf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function uf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function Si(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)n0(e,n,a,s),n=n.sibling}function n0(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,s),c&2048&&po(9,n);break;case 1:Si(e,n,a,s);break;case 3:Si(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(c&2048){Si(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){It(n,n.return,B)}}else Si(e,n,a,s);break;case 31:Si(e,n,a,s);break;case 13:Si(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Si(e,n,a,s):go(e,n):f._visibility&2?Si(e,n,a,s):(f._visibility|=2,ts(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&cf(v,n);break;case 24:Si(e,n,a,s),c&2048&&uf(n.alternate,n);break;default:Si(e,n,a,s)}}function ts(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,B=s,$=v.flags;switch(v.tag){case 0:case 11:case 15:ts(f,v,T,B,c),po(8,v);break;case 23:break;case 22:var pe=v.stateNode;v.memoizedState!==null?pe._visibility&2?ts(f,v,T,B,c):go(f,v):(pe._visibility|=2,ts(f,v,T,B,c)),c&&$&2048&&cf(v.alternate,v);break;case 24:ts(f,v,T,B,c),c&&$&2048&&uf(v.alternate,v);break;default:ts(f,v,T,B,c)}n=n.sibling}}function go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:go(a,s),c&2048&&cf(s.alternate,s);break;case 24:go(a,s),c&2048&&uf(s.alternate,s);break;default:go(a,s)}n=n.sibling}}var _o=8192;function ns(e,n,a){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)i0(e,n,a),e=e.sibling}function i0(e,n,a){switch(e.tag){case 26:ns(e,n,a),e.flags&_o&&e.memoizedState!==null&&$x(a,xi,e.memoizedState,e.memoizedProps);break;case 5:ns(e,n,a);break;case 3:case 4:var s=xi;xi=Zl(e.stateNode.containerInfo),ns(e,n,a),xi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=_o,_o=16777216,ns(e,n,a),_o=s):ns(e,n,a));break;default:ns(e,n,a)}}function a0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,s0(s,e)}a0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)r0(e),e=e.sibling}function r0(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Na(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):vo(e);break;default:vo(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];gn=s,s0(s,e)}a0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Na(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function s0(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:eo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,gn=s;else e:for(a=e;gn!==null;){s=gn;var c=s.sibling,f=s.return;if(Km(s),s===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var px={getCacheForType:function(e){var n=Tn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(sn).controller.signal}},mx=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Xt=null,gt=null,vt=0,Ft=0,Zn=null,La=!1,is=!1,ff=!1,ia=0,en=0,Oa=0,_r=0,df=0,Kn=0,as=0,xo=null,Gn=null,hf=!1,Fl=0,o0=0,Il=1/0,Bl=null,Pa=null,hn=0,za=null,rs=null,aa=0,pf=0,mf=null,l0=null,So=0,gf=null;function Qn(){return(Nt&2)!==0&&vt!==0?vt&-vt:P.T!==null?Mf():Hs()}function c0(){if(Kn===0)if((vt&536870912)===0||St){var e=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),Kn=e}else Kn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Kn}function Vn(e,n,a){(e===Xt&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)&&(ss(e,0),Fa(e,vt,Kn,!1)),Dn(e,a),((Nt&2)===0||e!==Xt)&&(e===Xt&&((Nt&2)===0&&(_r|=a),en===4&&Fa(e,vt,Kn,!1)),Ni(e))}function u0(e,n,a){if((Nt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ce(e,n),c=s?vx(e,n):vf(e,n,!0),f=s;do{if(c===0){is&&!s&&Fa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!gx(a)){c=vf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=e;c=xo;var B=T.current.memoizedState.isDehydrated;if(B&&(ss(T,v).flags|=256),v=vf(T,v,!1),v!==2){if(ff&&!B){T.errorRecoveryDisabledLanes|=f,_r|=f,c=4;break e}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){ss(e,0),Fa(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(s,n,Kn,!La);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Fl+300-E(),10<c)){if(Fa(s,n,Kn,!La),xe(s,0,!0)!==0)break e;aa=n,s.timeoutHandle=G0(f0.bind(null,s,a,Gn,Bl,hf,n,Kn,_r,as,La,f,"Throttled",-0,0),c);break e}f0(s,a,Gn,Bl,hf,n,Kn,_r,as,La,f,null,-0,0)}}break}while(!0);Ni(e)}function f0(e,n,a,s,c,f,v,T,B,$,pe,ve,ae,ce){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},i0(n,f,ve);var ke=(f&62914560)===f?Fl-E():(f&4194048)===f?o0-E():0;if(ke=eS(ve,ke),ke!==null){aa=f,e.cancelPendingCommit=ke(x0.bind(null,e,n,f,a,s,c,v,T,B,pe,ve,null,ae,ce)),Fa(e,f,v,!$);return}}x0(e,n,f,a,s,c,v,T,B)}function gx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(e,n,a,s){n&=~df,n&=~_r,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Ie(c),v=1<<f;s[f]=-1,c&=~v}a!==0&&Qo(e,a,n)}function Hl(){return(Nt&6)===0?(yo(0),!1):!0}function _f(){if(gt!==null){if(Ft===0)var e=gt.return;else e=gt,Yi=lr=null,Nu(e),Kr=null,no=0,e=gt;for(;e!==null;)Vm(e.alternate,e),e=e.return;gt=null}}function ss(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,zx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,_f(),Xt=e,gt=a=Wi(e.current,null),vt=n,Ft=0,Zn=null,La=!1,is=Ce(e,n),ff=!1,as=Kn=df=_r=Oa=en=0,Gn=xo=null,hf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Ie(s),f=1<<c;n|=e[c],s&=~f}return ia=n,ol(),a}function d0(e,n){lt=null,P.H=uo,n===Zr||n===ml?(n=Cp(),Ft=3):n===Su?(n=Cp(),Ft=4):Ft=n===ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,gt===null&&(en=1,wl(e,ai(n,e.current)))}function h0(){var e=Yn.current;return e===null?!0:(vt&4194048)===vt?li===null:(vt&62914560)===vt||(vt&536870912)!==0?e===li:!1}function p0(){var e=P.H;return P.H=uo,e===null?uo:e}function m0(){var e=P.A;return P.A=px,e}function Gl(){en=4,La||(vt&4194048)!==vt&&Yn.current!==null||(is=!0),(Oa&134217727)===0&&(_r&134217727)===0||Xt===null||Fa(Xt,vt,Kn,!1)}function vf(e,n,a){var s=Nt;Nt|=2;var c=p0(),f=m0();(Xt!==e||vt!==n)&&(Bl=null,ss(e,n)),n=!1;var v=en;e:do try{if(Ft!==0&&gt!==null){var T=gt,B=Zn;switch(Ft){case 8:_f(),v=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var $=Ft;if(Ft=0,Zn=null,os(e,T,B,$),a&&is){v=0;break e}break;default:$=Ft,Ft=0,Zn=null,os(e,T,B,$)}}_x(),v=en;break}catch(pe){d0(e,pe)}while(!0);return n&&e.shellSuspendCounter++,Yi=lr=null,Nt=s,P.H=c,P.A=f,gt===null&&(Xt=null,vt=0,ol()),v}function _x(){for(;gt!==null;)g0(gt)}function vx(e,n){var a=Nt;Nt|=2;var s=p0(),c=m0();Xt!==e||vt!==n?(Bl=null,Il=E()+500,ss(e,n)):is=Ce(e,n);e:do try{if(Ft!==0&&gt!==null){n=gt;var f=Zn;t:switch(Ft){case 1:Ft=0,Zn=null,os(e,n,f,1);break;case 2:case 9:if(Ap(f)){Ft=0,Zn=null,_0(n);break}n=function(){Ft!==2&&Ft!==9||Xt!==e||(Ft=7),Ni(e)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:Ap(f)?(Ft=0,Zn=null,_0(n)):(Ft=0,Zn=null,os(e,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var T=gt;if(v?ng(v):T.stateNode.complete){Ft=0,Zn=null;var B=T.sibling;if(B!==null)gt=B;else{var $=T.return;$!==null?(gt=$,Vl($)):gt=null}break t}}Ft=0,Zn=null,os(e,n,f,5);break;case 6:Ft=0,Zn=null,os(e,n,f,6);break;case 8:_f(),en=6;break e;default:throw Error(r(462))}}xx();break}catch(pe){d0(e,pe)}while(!0);return Yi=lr=null,P.H=s,P.A=c,Nt=a,gt!==null?0:(Xt=null,vt=0,ol(),en)}function xx(){for(;gt!==null&&!je();)g0(gt)}function g0(e){var n=Hm(e.alternate,e,ia);e.memoizedProps=e.pendingProps,n===null?Vl(e):gt=n}function _0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Om(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Om(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Nu(n);default:Vm(a,n),n=gt=mp(n,ia),n=Hm(a,n,ia)}e.memoizedProps=e.pendingProps,n===null?Vl(e):gt=n}function os(e,n,a,s){Yi=lr=null,Nu(n),Kr=null,no=0;var c=n.return;try{if(ox(e,c,n,a,vt)){en=1,wl(e,ai(a,e.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;en=1,wl(e,ai(a,e.current)),gt=null;return}n.flags&32768?(St||s===1?e=!0:is||(vt&536870912)!==0?e=!1:(La=e=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),v0(n,e)):Vl(n)}function Vl(e){var n=e;do{if((n.flags&32768)!==0){v0(n,La);return}e=n.return;var a=ux(n.alternate,n,ia);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);en===0&&(en=5)}function v0(e,n){do{var a=fx(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);en=6,gt=null}function x0(e,n,a,s,c,f,v,T,B){e.cancelPendingCommit=null;do kl();while(hn!==0);if((Nt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ru,mi(e,a,f,v,T,B),e===Xt&&(gt=Xt=null,vt=0),rs=n,za=e,aa=a,pf=f,mf=c,l0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ex(de,function(){return b0(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=H.p,H.p=2,v=Nt,Nt|=4;try{dx(e,n,a)}finally{Nt=v,H.p=c,P.T=s}}hn=1,S0(),y0(),M0()}}function S0(){if(hn===1){hn=0;var e=za,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=H.p;H.p=2;var c=Nt;Nt|=4;try{e0(n,e);var f=Df,v=sp(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&rp(T.ownerDocument.documentElement,T)){if(B!==null&&eu(T)){var $=B.start,pe=B.end;if(pe===void 0&&(pe=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(pe,T.value.length);else{var ve=T.ownerDocument||document,ae=ve&&ve.defaultView||window;if(ae.getSelection){var ce=ae.getSelection(),ke=T.textContent.length,tt=Math.min(B.start,ke),Vt=B.end===void 0?tt:Math.min(B.end,ke);!ce.extend&&tt>Vt&&(v=Vt,Vt=tt,tt=v);var Y=ap(T,tt),k=ap(T,Vt);if(Y&&k&&(ce.rangeCount!==1||ce.anchorNode!==Y.node||ce.anchorOffset!==Y.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var J=ve.createRange();J.setStart(Y.node,Y.offset),ce.removeAllRanges(),tt>Vt?(ce.addRange(J),ce.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ce.addRange(J))}}}}for(ve=[],ce=T;ce=ce.parentNode;)ce.nodeType===1&&ve.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ve.length;T++){var ge=ve[T];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}tc=!!wf,Df=wf=null}finally{Nt=c,H.p=s,P.T=a}}e.current=n,hn=2}}function y0(){if(hn===2){hn=0;var e=za,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=H.p;H.p=2;var c=Nt;Nt|=4;try{Zm(e,n.alternate,n)}finally{Nt=c,H.p=s,P.T=a}}hn=3}}function M0(){if(hn===4||hn===3){hn=0,U();var e=za,n=rs,a=aa,s=l0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,rs=za=null,E0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Pa=null),Nr(a),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=H.p,H.p=2,P.T=null;try{for(var f=e.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{P.T=n,H.p=c}}(aa&3)!==0&&kl(),Ni(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===gf?So++:(So=0,gf=e):So=0,yo(0)}}function E0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function kl(){return S0(),y0(),M0(),b0()}function b0(){if(hn!==5)return!1;var e=za,n=pf;pf=0;var a=Nr(aa),s=P.T,c=H.p;try{H.p=32>a?32:a,P.T=null,a=mf,mf=null;var f=za,v=aa;if(hn=0,rs=za=null,aa=0,(Nt&6)!==0)throw Error(r(331));var T=Nt;if(Nt|=4,r0(f.current),n0(f,f.current,v,a),Nt=T,yo(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{H.p=c,P.T=s,E0(e,n)}}function T0(e,n,a){n=ai(a,n),n=Yu(e.stateNode,n,2),e=wa(e,n,2),e!==null&&(Dn(e,2),Ni(e))}function It(e,n,a){if(e.tag===3)T0(e,e,a);else for(;n!==null;){if(n.tag===3){T0(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))){e=ai(a,e),a=Am(2),s=wa(n,a,2),s!==null&&(Rm(a,s,n,e),Dn(s,2),Ni(s));break}}n=n.return}}function xf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new mx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(ff=!0,c.add(a),e=Sx.bind(null,e,n,a),n.then(e,e))}function Sx(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xt===e&&(vt&a)===a&&(en===4||en===3&&(vt&62914560)===vt&&300>E()-Fl?(Nt&2)===0&&ss(e,0):df|=a,as===vt&&(as=0)),Ni(e)}function A0(e,n){n===0&&(n=Pt()),e=rr(e,n),e!==null&&(Dn(e,n),Ni(e))}function yx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),A0(e,a)}function Mx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),A0(e,a)}function Ex(e,n){return Mt(e,n)}var Xl=null,ls=null,Sf=!1,Wl=!1,yf=!1,Ia=0;function Ni(e){e!==ls&&e.next===null&&(ls===null?Xl=ls=e:ls=ls.next=e),Wl=!0,Sf||(Sf=!0,Tx())}function yo(e,n){if(!yf&&Wl){yf=!0;do for(var a=!1,s=Xl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Ie(42|e)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,D0(s,f))}else f=vt,f=xe(s,s===Xt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ce(s,f)||(a=!0,D0(s,f));s=s.next}while(a);yf=!1}}function bx(){R0()}function R0(){Wl=Sf=!1;var e=0;Ia!==0&&Px()&&(e=Ia);for(var n=E(),a=null,s=Xl;s!==null;){var c=s.next,f=C0(s,n);f===0?(s.next=null,a===null?Xl=c:a.next=c,c===null&&(ls=a)):(a=s,(e!==0||(f&3)!==0)&&(Wl=!0)),s=c}hn!==0&&hn!==5||yo(e),Ia!==0&&(Ia=0)}function C0(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ie(f),T=1<<v,B=c[v];B===-1?((T&a)===0||(T&s)!==0)&&(c[v]=it(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=Xt,a=vt,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Lt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ce(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Lt(s),Nr(a)){case 2:case 8:a=ye;break;case 32:a=de;break;case 268435456:a=De;break;default:a=de}return s=w0.bind(null,e),a=Mt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Lt(s),e.callbackPriority=2,e.callbackNode=null,2}function w0(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(kl()&&e.callbackNode!==a)return null;var s=vt;return s=xe(e,e===Xt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(u0(e,s,n),C0(e,E()),e.callbackNode!=null&&e.callbackNode===a?w0.bind(null,e):null)}function D0(e,n){if(kl())return null;u0(e,n,!0)}function Tx(){Fx(function(){(Nt&6)!==0?Mt(me,bx):R0()})}function Mf(){if(Ia===0){var e=Yr;e===0&&(e=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Ia=e}return Ia}function U0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$o(""+e)}function N0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ax(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=U0((c[vn]||null).action),v=s.submitter;v&&(n=(n=v[vn]||null)?U0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new il("action","action",null,s,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ia!==0){var B=v?N0(c,v):new FormData(c);Gu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=v?N0(c,v):new FormData(c),Gu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Ef=0;Ef<au.length;Ef++){var bf=au[Ef],Rx=bf.toLowerCase(),Cx=bf[0].toUpperCase()+bf.slice(1);vi(Rx,"on"+Cx)}vi(cp,"onAnimationEnd"),vi(up,"onAnimationIteration"),vi(fp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(Xv,"onTransitionRun"),vi(Wv,"onTransitionStart"),vi(qv,"onTransitionCancel"),vi(dp,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function L0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(pe){sl(pe)}c.currentTarget=null,f=B}else for(v=0;v<s.length;v++){if(T=s[v],B=T.instance,$=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(pe){sl(pe)}c.currentTarget=null,f=B}}}}function _t(e,n){var a=n[Lr];a===void 0&&(a=n[Lr]=new Set);var s=e+"__bubble";a.has(s)||(O0(n,e,2,!1),a.add(s))}function Tf(e,n,a){var s=0;n&&(s|=4),O0(a,e,s,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Af(e){if(!e[ql]){e[ql]=!0,q.forEach(function(a){a!=="selectionchange"&&(wx.has(a)||Tf(a,!1,e),Tf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Tf("selectionchange",!1,n))}}function O0(e,n,a,s){switch(cg(n)){case 2:var c=iS;break;case 8:c=aS;break;default:c=Gf}a=c.bind(null,n,a,e),c=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Rf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=s.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=xa(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){s=f=v;continue e}T=T.parentNode}}s=s.return}Bh(function(){var $=f,pe=kc(a),ve=[];e:{var ae=hp.get(e);if(ae!==void 0){var ce=il,ke=e;switch(e){case"keypress":if(tl(a)===0)break e;case"keydown":case"keyup":ce=Mv;break;case"focusin":ke="focus",ce=Zc;break;case"focusout":ke="blur",ce=Zc;break;case"beforeblur":case"afterblur":ce=Zc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=Tv;break;case cp:case up:case fp:ce=hv;break;case dp:ce=Rv;break;case"scroll":case"scrollend":ce=lv;break;case"wheel":ce=wv;break;case"copy":case"cut":case"paste":ce=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Xh;break;case"toggle":case"beforetoggle":ce=Uv}var tt=(n&4)!==0,Vt=!tt&&(e==="scroll"||e==="scrollend"),Y=tt?ae!==null?ae+"Capture":null:ae;tt=[];for(var k=$,J;k!==null;){var ge=k;if(J=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||J===null||Y===null||(ge=ks(k,Y),ge!=null&&tt.push(Eo(k,ge,J))),Vt)break;k=k.return}0<tt.length&&(ae=new ce(ae,ke,null,a,pe),ve.push({event:ae,listeners:tt}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",ce=e==="mouseout"||e==="pointerout",ae&&a!==Vc&&(ke=a.relatedTarget||a.fromElement)&&(xa(ke)||ke[gi]))break e;if((ce||ae)&&(ae=pe.window===pe?pe:(ae=pe.ownerDocument)?ae.defaultView||ae.parentWindow:window,ce?(ke=a.relatedTarget||a.toElement,ce=$,ke=ke?xa(ke):null,ke!==null&&(Vt=u(ke),tt=ke.tag,ke!==Vt||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(ce=null,ke=$),ce!==ke)){if(tt=Vh,ge="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(tt=Xh,ge="onPointerLeave",Y="onPointerEnter",k="pointer"),Vt=ce==null?ae:tr(ce),J=ke==null?ae:tr(ke),ae=new tt(ge,k+"leave",ce,a,pe),ae.target=Vt,ae.relatedTarget=J,ge=null,xa(pe)===$&&(tt=new tt(Y,k+"enter",ke,a,pe),tt.target=J,tt.relatedTarget=Vt,ge=tt),Vt=ge,ce&&ke)t:{for(tt=Dx,Y=ce,k=ke,J=0,ge=Y;ge;ge=tt(ge))J++;ge=0;for(var Je=k;Je;Je=tt(Je))ge++;for(;0<J-ge;)Y=tt(Y),J--;for(;0<ge-J;)k=tt(k),ge--;for(;J--;){if(Y===k||k!==null&&Y===k.alternate){tt=Y;break t}Y=tt(Y),k=tt(k)}tt=null}else tt=null;ce!==null&&P0(ve,ae,ce,tt,!1),ke!==null&&Vt!==null&&P0(ve,Vt,ke,tt,!0)}}e:{if(ae=$?tr($):window,ce=ae.nodeName&&ae.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ae.type==="file")var Tt=Jh;else if(Kh(ae))if($h)Tt=Gv;else{Tt=Bv;var Ze=Iv}else ce=ae.nodeName,!ce||ce.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?$&&_i($.elementType)&&(Tt=Jh):Tt=Hv;if(Tt&&(Tt=Tt(e,$))){Qh(ve,Tt,a,pe);break e}Ze&&Ze(e,ae,$),e==="focusout"&&$&&ae.type==="number"&&$.memoizedProps.value!=null&&Sn(ae,"number",ae.value)}switch(Ze=$?tr($):window,e){case"focusin":(Kh(Ze)||Ze.contentEditable==="true")&&(Br=Ze,tu=$,Qs=null);break;case"focusout":Qs=tu=Br=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,op(ve,a,pe);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":op(ve,a,pe)}var ut;if(Qc)e:{switch(e){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Ir?jh(e,a)&&(xt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(Wh&&a.locale!=="ko"&&(Ir||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Ir&&(ut=Hh()):(Ma=pe,qc="value"in Ma?Ma.value:Ma.textContent,Ir=!0)),Ze=Yl($,xt),0<Ze.length&&(xt=new kh(xt,e,null,a,pe),ve.push({event:xt,listeners:Ze}),ut?xt.data=ut:(ut=Zh(a),ut!==null&&(xt.data=ut)))),(ut=Lv?Ov(e,a):Pv(e,a))&&(xt=Yl($,"onBeforeInput"),0<xt.length&&(Ze=new kh("onBeforeInput","beforeinput",null,a,pe),ve.push({event:Ze,listeners:xt}),Ze.data=ut)),Ax(ve,e,$,a,pe)}L0(ve,n)})}function Eo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Yl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=ks(e,a),c!=null&&s.unshift(Eo(e,c,f)),c=ks(e,n),c!=null&&s.push(Eo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function Dx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function P0(e,n,a,s,c){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||$===null||(B=$,c?($=ks(a,f),$!=null&&v.unshift(Eo(a,$,B))):c||($=ks(a,f),$!=null&&v.push(Eo(a,$,B)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Ux=/\r\n?/g,Nx=/\u0000|\uFFFD/g;function z0(e){return(typeof e=="string"?e:""+e).replace(Ux,`
`).replace(Nx,"")}function F0(e,n){return n=z0(n),z0(e)===n}function Gt(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||dn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&dn(e,""+s);break;case"className":$e(e,"class",s);break;case"tabIndex":$e(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(e,a,s);break;case"style":Pr(e,s,f);break;case"data":if(n!=="object"){$e(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=$o(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Gt(e,n,"name",c.name,c,null),Gt(e,n,"formEncType",c.formEncType,c,null),Gt(e,n,"formMethod",c.formMethod,c,null),Gt(e,n,"formTarget",c.formTarget,c,null)):(Gt(e,n,"encType",c.encType,c,null),Gt(e,n,"method",c.method,c,null),Gt(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=$o(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=ki);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=$o(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":_t("beforetoggle",e),_t("toggle",e),We(e,"popover",s);break;case"xlinkActuate":qe(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qe(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qe(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qe(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qe(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qe(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qe(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":We(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sv.get(a)||a,We(e,a,s))}}function Cf(e,n,a,s,c,f){switch(a){case"style":Pr(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?dn(e,s):(typeof s=="number"||typeof s=="bigint")&&dn(e,""+s);break;case"onScroll":s!=null&&_t("scroll",e);break;case"onScrollEnd":s!=null&&_t("scrollend",e);break;case"onClick":s!=null&&(e.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):We(e,a,s)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,f,v,a,null)}}c&&Gt(e,n,"srcSet",a.srcSet,a,null),s&&Gt(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var T=f=v=c=null,B=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var pe=a[s];if(pe!=null)switch(s){case"name":c=pe;break;case"type":v=pe;break;case"checked":B=pe;break;case"defaultChecked":$=pe;break;case"value":f=pe;break;case"defaultValue":T=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Gt(e,n,s,pe,a,null)}}Vi(e,f,T,B,$,v,c,!1);return;case"select":_t("invalid",e),s=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:Gt(e,n,c,T,a,null)}n=f,a=v,e.multiple=!!s,n!=null?ni(e,!!s,n,!1):a!=null&&ni(e,!!s,a,!0);return;case"textarea":_t("invalid",e),f=c=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Gt(e,n,v,T,a,null)}yn(e,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Gt(e,n,B,s,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(s=0;s<Mo.length;s++)_t(Mo[s],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Gt(e,n,$,s,a,null)}return;default:if(_i(n)){for(pe in a)a.hasOwnProperty(pe)&&(s=a[pe],s!==void 0&&Cf(e,n,pe,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Gt(e,n,T,s,a,null))}function Lx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,B=null,$=null,pe=null;for(ce in a){var ve=a[ce];if(a.hasOwnProperty(ce)&&ve!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":B=ve;default:s.hasOwnProperty(ce)||Gt(e,n,ce,null,s,ve)}}for(var ae in s){var ce=s[ae];if(ve=a[ae],s.hasOwnProperty(ae)&&(ce!=null||ve!=null))switch(ae){case"type":f=ce;break;case"name":c=ce;break;case"checked":$=ce;break;case"defaultChecked":pe=ce;break;case"value":v=ce;break;case"defaultValue":T=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==ve&&Gt(e,n,ae,ce,s,ve)}}xn(e,v,T,B,$,pe,f,c);return;case"select":ce=v=T=ae=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ce=B;default:s.hasOwnProperty(f)||Gt(e,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":ae=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==B&&Gt(e,n,c,f,s,B)}n=T,a=v,s=ce,ae!=null?ni(e,!!a,ae,!1):!!s!=!!a&&(n!=null?ni(e,!!a,n,!0):ni(e,!!a,a?[]:"",!1));return;case"textarea":ce=ae=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Gt(e,n,T,null,s,c)}for(v in s)if(c=s[v],f=a[v],s.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":ae=c;break;case"defaultValue":ce=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Gt(e,n,v,c,s,f)}zt(e,ae,ce);return;case"option":for(var ke in a)if(ae=a[ke],a.hasOwnProperty(ke)&&ae!=null&&!s.hasOwnProperty(ke))switch(ke){case"selected":e.selected=!1;break;default:Gt(e,n,ke,null,s,ae)}for(B in s)if(ae=s[B],ce=a[B],s.hasOwnProperty(B)&&ae!==ce&&(ae!=null||ce!=null))switch(B){case"selected":e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Gt(e,n,B,ae,s,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)ae=a[tt],a.hasOwnProperty(tt)&&ae!=null&&!s.hasOwnProperty(tt)&&Gt(e,n,tt,null,s,ae);for($ in s)if(ae=s[$],ce=a[$],s.hasOwnProperty($)&&ae!==ce&&(ae!=null||ce!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:Gt(e,n,$,ae,s,ce)}return;default:if(_i(n)){for(var Vt in a)ae=a[Vt],a.hasOwnProperty(Vt)&&ae!==void 0&&!s.hasOwnProperty(Vt)&&Cf(e,n,Vt,void 0,s,ae);for(pe in s)ae=s[pe],ce=a[pe],!s.hasOwnProperty(pe)||ae===ce||ae===void 0&&ce===void 0||Cf(e,n,pe,ae,s,ce);return}}for(var Y in a)ae=a[Y],a.hasOwnProperty(Y)&&ae!=null&&!s.hasOwnProperty(Y)&&Gt(e,n,Y,null,s,ae);for(ve in s)ae=s[ve],ce=a[ve],!s.hasOwnProperty(ve)||ae===ce||ae==null&&ce==null||Gt(e,n,ve,ae,s,ce)}function I0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ox(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&I0(v)){for(v=0,T=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],$=B.startTime;if($>T)break;var pe=B.transferSize,ve=B.initiatorType;pe&&I0(ve)&&(B=B.responseEnd,v+=pe*(B<T?1:(T-$)/(B-$)))}if(--s,n+=8*(f+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wf=null,Df=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function B0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Uf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nf=null;function Px(){var e=window.event;return e&&e.type==="popstate"?e===Nf?!1:(Nf=e,!0):(Nf=null,!1)}var G0=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(e){return V0.resolve(null).then(e).catch(Ix)}:G0;function Ix(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function k0(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),ds(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[er]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&bo(e.ownerDocument.body);a=c}while(a);ds(n)}function X0(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Lf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Lf(a),Vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Bx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[er])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function Hx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ci(e.nextSibling),e===null))return null;return e}function W0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function Of(e){return e.data==="$?"||e.data==="$~"}function Pf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Gx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var zf=null;function q0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Y0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function j0(e,n,a){switch(n=jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vs(e)}var ui=new Map,Z0=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=H.d;H.d={f:Vx,r:kx,D:Xx,C:Wx,L:qx,m:Yx,X:Zx,S:jx,M:Kx};function Vx(){var e=ra.f(),n=Hl();return e||n}function kx(e){var n=Sa(e);n!==null&&n.tag===5&&n.type==="form"?dm(n):ra.r(e)}var cs=typeof document>"u"?null:document;function K0(e,n,a){var s=cs;if(s&&typeof n=="string"&&n){var c=at(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Z0.has(c)||(Z0.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Rn(n,"link",e),A(n),s.head.appendChild(n)))}}function Xx(e){ra.D(e),K0("dns-prefetch",e,null)}function Wx(e,n){ra.C(e,n),K0("preconnect",e,n)}function qx(e,n,a){ra.L(e,n,a);var s=cs;if(s&&e&&n){var c='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+at(a.imageSizes)+'"]')):c+='[href="'+at(e)+'"]';var f=c;switch(n){case"style":f=us(e);break;case"script":f=fs(e)}ui.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(To(f))||n==="script"&&s.querySelector(Ao(f))||(n=s.createElement("link"),Rn(n,"link",e),A(n),s.head.appendChild(n)))}}function Yx(e,n){ra.m(e,n);var a=cs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+at(s)+'"][href="'+at(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=fs(e)}if(!ui.has(f)&&(e=g({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}s=a.createElement("link"),Rn(s,"link",e),A(s),a.head.appendChild(s)}}}function jx(e,n,a){ra.S(e,n,a);var s=cs;if(s&&e){var c=ya(s).hoistableStyles,f=us(e);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(To(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&Ff(e,a);var B=v=s.createElement("link");A(B),Rn(B,"link",e),B._p=new Promise(function($,pe){B.onload=$,B.onerror=pe}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Kl(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function Zx(e,n){ra.X(e,n);var a=cs;if(a&&e){var s=ya(a).hoistableScripts,c=fs(e),f=s.get(c);f||(f=a.querySelector(Ao(c)),f||(e=g({src:e,async:!0},n),(n=ui.get(c))&&If(e,n),f=a.createElement("script"),A(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Kx(e,n){ra.M(e,n);var a=cs;if(a&&e){var s=ya(a).hoistableScripts,c=fs(e),f=s.get(c);f||(f=a.querySelector(Ao(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ui.get(c))&&If(e,n),f=a.createElement("script"),A(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Q0(e,n,a,s){var c=(c=Q.current)?Zl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=ya(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var f=ya(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(To(e)))&&!f._p&&(v.instance=f,v.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||Qx(c,e,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=ya(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+at(e)+'"'}function To(e){return'link[rel="stylesheet"]['+e+"]"}function J0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Qx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),A(n),e.head.appendChild(n))}function fs(e){return'[src="'+at(e)+'"]'}function Ao(e){return"script[async]"+e}function $0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+at(a.href)+'"]');if(s)return n.instance=s,A(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),A(s),Rn(s,"style",c),Kl(s,a.precedence,e),n.instance=s;case"stylesheet":c=us(a.href);var f=e.querySelector(To(c));if(f)return n.state.loading|=4,n.instance=f,A(f),f;s=J0(a),(c=ui.get(c))&&Ff(s,c),f=(e.ownerDocument||e).createElement("link"),A(f);var v=f;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Rn(f,"link",s),n.state.loading|=4,Kl(f,a.precedence,e),n.instance=f;case"script":return f=fs(a.src),(c=e.querySelector(Ao(f)))?(n.instance=c,A(c),c):(s=a,(c=ui.get(f))&&(s=g({},a),If(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),A(c),Rn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Kl(s,a.precedence,e));return n.instance}function Kl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ff(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function If(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ql=null;function eg(e,n,a){if(Ql===null){var s=new Map,c=Ql=new Map;c.set(a,s)}else c=Ql,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[er]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function tg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Jx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ng(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $x(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=us(s.href),f=n.querySelector(To(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,s=J0(s),(c=ui.get(c))&&Ff(s,c),f=f.createElement("link"),A(f);var v=f;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Rn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Bf=0;function eS(e,n){return e.stylesheets&&e.count===0&&ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Bf===0&&(Bf=62500*Ox());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Bf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function ec(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,n.forEach(tS,e),$l=null,Jl.call(e))}function tS(e,n){if(!(n.state.loading&4)){var a=$l.get(e);if(a)var s=a.get(null);else{a=new Map,$l.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,c),a.set(v,c),this.count++,s=Jl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:D,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function nS(e,n,a,s,c,f,v,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Et(0),this.hiddenUpdates=Et(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function ig(e,n,a,s,c,f,v,T,B,$,pe,ve){return e=new nS(e,n,a,v,B,$,pe,ve,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=_u(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},yu(f),e}function ag(e){return e?(e=Vr,e):Vr}function rg(e,n,a,s,c,f){c=ag(c),s.context===null?s.context=c:s.pendingContext=c,s=Ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=wa(e,s,n),a!==null&&(Vn(a,e,n),ao(a,e,n))}function sg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Hf(e,n){sg(e,n),(e=e.alternate)&&sg(e,n)}function og(e){if(e.tag===13||e.tag===31){var n=rr(e,67108864);n!==null&&Vn(n,e,67108864),Hf(e,67108864)}}function lg(e){if(e.tag===13||e.tag===31){var n=Qn();n=Bs(n);var a=rr(e,n);a!==null&&Vn(a,e,n),Hf(e,n)}}var tc=!0;function iS(e,n,a,s){var c=P.T;P.T=null;var f=H.p;try{H.p=2,Gf(e,n,a,s)}finally{H.p=f,P.T=c}}function aS(e,n,a,s){var c=P.T;P.T=null;var f=H.p;try{H.p=8,Gf(e,n,a,s)}finally{H.p=f,P.T=c}}function Gf(e,n,a,s){if(tc){var c=Vf(s);if(c===null)Rf(e,n,s,nc,a),ug(e,s);else if(sS(c,e,n,a,s))s.stopPropagation();else if(ug(e,s),n&4&&-1<rS.indexOf(e)){for(;c!==null;){var f=Sa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ee(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-Ie(v);T.entanglements[1]|=B,v&=~B}Ni(f),(Nt&6)===0&&(Il=E()+500,yo(0))}}break;case 31:case 13:T=rr(f,2),T!==null&&Vn(T,f,2),Hl(),Hf(f,2)}if(f=Vf(s),f===null&&Rf(e,n,s,nc,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Rf(e,n,s,null,a)}}function Vf(e){return e=kc(e),kf(e)}var nc=null;function kf(e){if(nc=null,e=xa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return nc=e,null}function cg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case me:return 2;case ye:return 8;case de:case Ke:return 32;case De:return 268435456;default:return 32}default:return 32}}var Xf=!1,Ha=null,Ga=null,Va=null,Co=new Map,wo=new Map,ka=[],rS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ug(e,n){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Sa(n),n!==null&&og(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function sS(e,n,a,s,c){switch(n){case"focusin":return Ha=Do(Ha,e,n,a,s,c),!0;case"dragenter":return Ga=Do(Ga,e,n,a,s,c),!0;case"mouseover":return Va=Do(Va,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Co.set(f,Do(Co.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,wo.set(f,Do(wo.get(f)||null,e,n,a,s,c)),!0}return!1}function fg(e){var n=xa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ci(e.priority,function(){lg(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ci(e.priority,function(){lg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ic(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Vf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Vc=s,a.target.dispatchEvent(s),Vc=null}else return n=Sa(a),n!==null&&og(n),e.blockedOn=a,!1;n.shift()}return!0}function dg(e,n,a){ic(e)&&a.delete(n)}function oS(){Xf=!1,Ha!==null&&ic(Ha)&&(Ha=null),Ga!==null&&ic(Ga)&&(Ga=null),Va!==null&&ic(Va)&&(Va=null),Co.forEach(dg),wo.forEach(dg)}function ac(e,n){e.blockedOn===n&&(e.blockedOn=null,Xf||(Xf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,oS)))}var rc=null;function hg(e){rc!==e&&(rc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(kf(s||a)===null)continue;break}var f=Sa(a);f!==null&&(e.splice(n,3),n-=3,Gu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ds(e){function n(B){return ac(B,e)}Ha!==null&&ac(Ha,e),Ga!==null&&ac(Ga,e),Va!==null&&ac(Va,e),Co.forEach(n),wo.forEach(n);for(var a=0;a<ka.length;a++){var s=ka[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)fg(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],v=c[vn]||null;if(typeof f=="function")v||hg(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[vn]||null)T=v.formAction;else if(kf(c)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),hg(a)}}}function pg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Wf(e){this._internalRoot=e}sc.prototype.render=Wf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();rg(a,s,e,n,null,null)},sc.prototype.unmount=Wf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;rg(e.current,2,null,e,null,null),Hl(),n[gi]=null}};function sc(e){this._internalRoot=e}sc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,e),a===0&&fg(e)}};var mg=t.version;if(mg!=="19.2.4")throw Error(r(527,mg,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var lS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{be=oc.inject(lS),Ae=oc}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Mm,f=Em,v=bm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=ig(e,1,!1,null,null,a,s,null,c,f,v,pg),e[gi]=n.current,Af(e),new Wf(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Mm,v=Em,T=bm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=ig(e,1,!0,n,a??null,s,c,B,f,v,T,pg),n.context=ag(null),a=n.current,s=Qn(),s=Bs(s),c=Ca(s),c.callback=null,wa(a,c,s),a=s,n.current.lanes=a,Dn(n,a),Ni(n),e[gi]=n.current,Af(e),new sc(n)},No.version="19.2.4",No}var Tg;function xS(){if(Tg)return jf.exports;Tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),jf.exports=vS(),jf.exports}var SS=xS();const yS=M_(SS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ah="182",MS=0,Ag=1,ES=2,wc=1,bS=2,Ho=3,$a=0,Xn=1,Pi=2,da=0,Cs=1,Rg=2,Cg=3,wg=4,TS=5,Ar=100,AS=101,RS=102,CS=103,wS=104,DS=200,US=201,NS=202,LS=203,Ud=204,Nd=205,OS=206,PS=207,zS=208,FS=209,IS=210,BS=211,HS=212,GS=213,VS=214,Ld=0,Od=1,Pd=2,Ds=3,zd=4,Fd=5,Id=6,Bd=7,E_=0,kS=1,XS=2,Ii=0,b_=1,T_=2,A_=3,R_=4,C_=5,w_=6,D_=7,U_=300,Dr=301,Us=302,Hd=303,Gd=304,Fc=306,Vd=1e3,fa=1001,kd=1002,Cn=1003,WS=1004,lc=1005,On=1006,Jf=1007,Cr=1008,hi=1009,N_=1010,L_=1011,Vo=1012,Rh=1013,Gi=1014,zi=1015,ma=1016,Ch=1017,wh=1018,ko=1020,O_=35902,P_=35899,z_=1021,F_=1022,Ai=1023,ga=1026,wr=1027,I_=1028,Dh=1029,Ns=1030,Uh=1031,Nh=1033,Dc=33776,Uc=33777,Nc=33778,Lc=33779,Xd=35840,Wd=35841,qd=35842,Yd=35843,jd=36196,Zd=37492,Kd=37496,Qd=37488,Jd=37489,$d=37490,eh=37491,th=37808,nh=37809,ih=37810,ah=37811,rh=37812,sh=37813,oh=37814,lh=37815,ch=37816,uh=37817,fh=37818,dh=37819,hh=37820,ph=37821,mh=36492,gh=36494,_h=36495,vh=36283,xh=36284,Sh=36285,yh=36286,qS=3200,YS=0,jS=1,Qa="",di="srgb",Ls="srgb-linear",Pc="linear",Bt="srgb",hs=7680,Dg=519,ZS=512,KS=513,QS=514,Lh=515,JS=516,$S=517,Oh=518,ey=519,Ug=35044,Ng="300 es",Fi=2e3,zc=2001;function B_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Xo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ty(){const o=Xo("canvas");return o.style.display="block",o}const Lg={};function Og(...o){const t="THREE."+o.shift();console.log(t,...o)}function st(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Rt(...o){const t="THREE."+o.shift();console.error(t,...o)}function Wo(...o){const t=o.join(" ");t in Lg||(Lg[t]=!0,st(...o))}function ny(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=Math.PI/180,Mh=180/Math.PI;function Yo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function yt(o,t,i){return Math.max(t,Math.min(i,o))}function iy(o,t){return(o%t+t)%t}function ed(o,t,i){return(1-i)*o+i*t}function Lo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,i=0){Ct.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(yt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],S=u[d+0],M=u[d+1],b=u[d+2],R=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(h>=1){t[i+0]=S,t[i+1]=M,t[i+2]=b,t[i+3]=R;return}if(g!==R||m!==S||p!==M||_!==b){let y=m*S+p*M+_*b+g*R;y<0&&(S=-S,M=-M,b=-b,R=-R,y=-y);let x=1-h;if(y<.9995){const N=Math.acos(y),D=Math.sin(N);x=Math.sin(x*N)/D,h=Math.sin(h*N)/D,m=m*x+S*h,p=p*x+M*h,_=_*x+b*h,g=g*x+R*h}else{m=m*x+S*h,p=p*x+M*h,_=_*x+b*h,g=g*x+R*h;const N=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=N,p*=N,_*=N,g*=N}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[d],S=u[d+1],M=u[d+2],b=u[d+3];return t[i]=h*b+_*g+m*M-p*S,t[i+1]=m*b+_*S+p*g-h*M,t[i+2]=p*b+_*M+h*S-m*g,t[i+3]=_*b-h*g-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),g=h(u/2),S=m(r/2),M=m(l/2),b=m(u/2);switch(d){case"XYZ":this._x=S*_*g+p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g-S*M*b;break;case"YXZ":this._x=S*_*g+p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g+S*M*b;break;case"ZXY":this._x=S*_*g-p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g-S*M*b;break;case"ZYX":this._x=S*_*g-p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g+S*M*b;break;case"YZX":this._x=S*_*g+p*M*b,this._y=p*M*g+S*_*b,this._z=p*_*b-S*M*g,this._w=p*_*g-S*M*b;break;case"XZY":this._x=S*_*g-p*M*b,this._y=p*M*g-S*_*b,this._z=p*_*b+S*M*g,this._w=p*_*g+S*M*b;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=r+h+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-r*p,this._z=u*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(t=0,i=0,r=0){se.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Pg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Pg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),_=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*_,this.y=r+m*_+h*p-u*g,this.z=l+m*g+u*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return td.copy(this).projectOnVector(t),this.sub(td)}reflect(t){return this.sub(td.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(yt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new se,Pg=new jo;class ft{constructor(t,i,r,l,u,d,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],g=r[7],S=r[2],M=r[5],b=r[8],R=l[0],y=l[3],x=l[6],N=l[1],D=l[4],O=l[7],F=l[2],I=l[5],z=l[8];return u[0]=d*R+h*N+m*F,u[3]=d*y+h*D+m*I,u[6]=d*x+h*O+m*z,u[1]=p*R+_*N+g*F,u[4]=p*y+_*D+g*I,u[7]=p*x+_*O+g*z,u[2]=S*R+M*N+b*F,u[5]=S*y+M*D+b*I,u[8]=S*x+M*O+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-r*u*_+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*d-h*p,S=h*m-_*u,M=p*u-d*m,b=i*g+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=g*R,t[1]=(l*p-_*r)*R,t[2]=(h*r-l*d)*R,t[3]=S*R,t[4]=(_*i-l*m)*R,t[5]=(l*u-h*i)*R,t[6]=M*R,t[7]=(r*m-p*i)*R,t[8]=(d*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(nd.makeScale(t,i)),this}rotate(t){return this.premultiply(nd.makeRotation(-t)),this}translate(t,i){return this.premultiply(nd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new ft,zg=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ay(){const o={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Bt&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Bt&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?Pc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Wo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Wo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ls]:{primaries:t,whitePoint:r,transfer:Pc,toXYZ:zg,fromXYZ:Fg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:r,transfer:Bt,toXYZ:zg,fromXYZ:Fg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const bt=ay();function ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ws(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ps;class ry{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ps===void 0&&(ps=Xo("canvas")),ps.width=t.width,ps.height=t.height;const l=ps.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xo("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ha(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ha(i[r]/255)*255):i[r]=ha(i[r]);return{data:i,width:t.width,height:t.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sy=0;class Ph{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=Yo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(id(l[d].image)):u.push(id(l[d]))}else u=id(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function id(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ry.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let oy=0;const ad=new se;class wn extends Ps{constructor(t=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,r=fa,l=fa,u=On,d=Cr,h=Ai,m=hi,p=wn.DEFAULT_ANISOTROPY,_=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Yo(),this.name="",this.source=new Ph(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==U_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vd:t.x=t.x-Math.floor(t.x);break;case fa:t.x=t.x<0?0:1;break;case kd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vd:t.y=t.y-Math.floor(t.y);break;case fa:t.y=t.y<0?0:1;break;case kd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=U_;wn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],g=m[8],S=m[1],M=m[5],b=m[9],R=m[2],y=m[6],x=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,O=(M+1)/2,F=(x+1)/2,I=(_+S)/4,z=(g+R)/4,j=(b+y)/4;return D>O&&D>F?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=I/r,u=z/r):O>F?O<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),r=I/l,u=j/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=z/u,l=j/u),this.set(r,l,u,i),this}let N=Math.sqrt((y-b)*(y-b)+(g-R)*(g-R)+(S-_)*(S-_));return Math.abs(N)<.001&&(N=1),this.x=(y-b)/N,this.y=(g-R)/N,this.z=(S-_)/N,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this.w=yt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this.w=yt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ly extends Ps{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new wn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ph(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends ly{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class H_ extends wn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cy extends wn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(t=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,yi):yi.fromBufferAttribute(u,d),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cc.copy(r.boundingBox)),cc.applyMatrix4(t.matrixWorld),this.union(cc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),uc.subVectors(this.max,Oo),ms.subVectors(t.a,Oo),gs.subVectors(t.b,Oo),_s.subVectors(t.c,Oo),Wa.subVectors(gs,ms),qa.subVectors(_s,gs),vr.subVectors(ms,_s);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-vr.z,vr.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,vr.z,0,-vr.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-vr.y,vr.x,0];return!rd(i,ms,gs,_s,uc)||(i=[1,0,0,0,1,0,0,0,1],!rd(i,ms,gs,_s,uc))?!1:(fc.crossVectors(Wa,qa),i=[fc.x,fc.y,fc.z],rd(i,ms,gs,_s,uc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new se,new se,new se,new se,new se,new se,new se,new se],yi=new se,cc=new Zo,ms=new se,gs=new se,_s=new se,Wa=new se,qa=new se,vr=new se,Oo=new se,uc=new se,fc=new se,xr=new se;function rd(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){xr.fromArray(o,u);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=t.dot(xr),p=i.dot(xr),_=r.dot(xr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const uy=new Zo,Po=new se,sd=new se;class zh{constructor(t=new se,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):uy.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Po,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(sd)),this.expandByPoint(Po.copy(t.center).sub(sd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const oa=new se,od=new se,dc=new se,Ya=new se,ld=new se,hc=new se,cd=new se;class fy{constructor(t=new se,i=new se(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=oa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){od.copy(t).add(i).multiplyScalar(.5),dc.copy(i).sub(t).normalize(),Ya.copy(this.origin).sub(od);const u=t.distanceTo(i)*.5,d=-this.direction.dot(dc),h=Ya.dot(this.direction),m=-Ya.dot(dc),p=Ya.lengthSq(),_=Math.abs(1-d*d);let g,S,M,b;if(_>0)if(g=d*m-h,S=d*h-m,b=u*_,g>=0)if(S>=-b)if(S<=b){const R=1/_;g*=R,S*=R,M=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;else S<=-b?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p):S<=b?(g=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),M=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(od).addScaledVector(dc,S),M}intersectSphere(t,i){oa.subVectors(t.center,this.origin);const r=oa.dot(this.direction),l=oa.dot(oa)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,d=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,d=(t.min.y-S.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(h=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,oa)!==null}intersectTriangle(t,i,r,l,u){ld.subVectors(i,t),hc.subVectors(r,t),cd.crossVectors(ld,hc);let d=this.direction.dot(cd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ya.subVectors(this.origin,t);const m=h*this.direction.dot(hc.crossVectors(Ya,hc));if(m<0)return null;const p=h*this.direction.dot(ld.cross(Ya));if(p<0||m+p>d)return null;const _=-h*Ya.dot(cd);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(t,i,r,l,u,d,h,m,p,_,g,S,M,b,R,y){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,_,g,S,M,b,R,y)}set(t,i,r,l,u,d,h,m,p,_,g,S,M,b,R,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=S,x[3]=M,x[7]=b,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,r=t.elements,l=1/vs.setFromMatrixColumn(t,0).length(),u=1/vs.setFromMatrixColumn(t,1).length(),d=1/vs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const S=d*_,M=d*g,b=h*_,R=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=S-R*p,i[9]=-h*m,i[2]=R-S*p,i[6]=b+M*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*_,M=m*g,b=p*_,R=p*g;i[0]=S+R*h,i[4]=b*h-M,i[8]=d*p,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=M*h-b,i[6]=R+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*_,M=m*g,b=p*_,R=p*g;i[0]=S-R*h,i[4]=-d*g,i[8]=b+M*h,i[1]=M+b*h,i[5]=d*_,i[9]=R-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*_,M=d*g,b=h*_,R=h*g;i[0]=m*_,i[4]=b*p-M,i[8]=S*p+R,i[1]=m*g,i[5]=R*p+S,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,M=d*p,b=h*m,R=h*p;i[0]=m*_,i[4]=R-S*g,i[8]=b*g+M,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*g+b,i[10]=S-R*g}else if(t.order==="XZY"){const S=d*m,M=d*p,b=h*m,R=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+R,i[5]=d*_,i[9]=M*g-b,i[2]=b*g-M,i[6]=h*_,i[10]=R*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dy,t,hy)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),ja.crossVectors(r,Jn),ja.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),ja.crossVectors(r,Jn)),ja.normalize(),pc.crossVectors(Jn,ja),l[0]=ja.x,l[4]=pc.x,l[8]=Jn.x,l[1]=ja.y,l[5]=pc.y,l[9]=Jn.y,l[2]=ja.z,l[6]=pc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],g=r[5],S=r[9],M=r[13],b=r[2],R=r[6],y=r[10],x=r[14],N=r[3],D=r[7],O=r[11],F=r[15],I=l[0],z=l[4],j=l[8],C=l[12],w=l[1],V=l[5],ne=l[9],Z=l[13],le=l[2],re=l[6],P=l[10],H=l[14],ee=l[3],_e=l[7],Se=l[11],L=l[15];return u[0]=d*I+h*w+m*le+p*ee,u[4]=d*z+h*V+m*re+p*_e,u[8]=d*j+h*ne+m*P+p*Se,u[12]=d*C+h*Z+m*H+p*L,u[1]=_*I+g*w+S*le+M*ee,u[5]=_*z+g*V+S*re+M*_e,u[9]=_*j+g*ne+S*P+M*Se,u[13]=_*C+g*Z+S*H+M*L,u[2]=b*I+R*w+y*le+x*ee,u[6]=b*z+R*V+y*re+x*_e,u[10]=b*j+R*ne+y*P+x*Se,u[14]=b*C+R*Z+y*H+x*L,u[3]=N*I+D*w+O*le+F*ee,u[7]=N*z+D*V+O*re+F*_e,u[11]=N*j+D*ne+O*P+F*Se,u[15]=N*C+D*Z+O*H+F*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],S=t[10],M=t[14],b=t[3],R=t[7],y=t[11],x=t[15],N=m*M-p*S,D=h*M-p*g,O=h*S-m*g,F=d*M-p*_,I=d*S-m*_,z=d*g-h*_;return i*(R*N-y*D+x*O)-r*(b*N-y*F+x*I)+l*(b*D-R*F+x*z)-u*(b*O-R*I+y*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],S=t[10],M=t[11],b=t[12],R=t[13],y=t[14],x=t[15],N=g*y*p-R*S*p+R*m*M-h*y*M-g*m*x+h*S*x,D=b*S*p-_*y*p-b*m*M+d*y*M+_*m*x-d*S*x,O=_*R*p-b*g*p+b*h*M-d*R*M-_*h*x+d*g*x,F=b*g*m-_*R*m-b*h*S+d*R*S+_*h*y-d*g*y,I=i*N+r*D+l*O+u*F;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return t[0]=N*z,t[1]=(R*S*u-g*y*u-R*l*M+r*y*M+g*l*x-r*S*x)*z,t[2]=(h*y*u-R*m*u+R*l*p-r*y*p-h*l*x+r*m*x)*z,t[3]=(g*m*u-h*S*u-g*l*p+r*S*p+h*l*M-r*m*M)*z,t[4]=D*z,t[5]=(_*y*u-b*S*u+b*l*M-i*y*M-_*l*x+i*S*x)*z,t[6]=(b*m*u-d*y*u-b*l*p+i*y*p+d*l*x-i*m*x)*z,t[7]=(d*S*u-_*m*u+_*l*p-i*S*p-d*l*M+i*m*M)*z,t[8]=O*z,t[9]=(b*g*u-_*R*u-b*r*M+i*R*M+_*r*x-i*g*x)*z,t[10]=(d*R*u-b*h*u+b*r*p-i*R*p-d*r*x+i*h*x)*z,t[11]=(_*h*u-d*g*u-_*r*p+i*g*p+d*r*M-i*h*M)*z,t[12]=F*z,t[13]=(_*R*l-b*g*l+b*r*S-i*R*S-_*r*y+i*g*y)*z,t[14]=(b*h*l-d*R*l-b*r*m+i*R*m+d*r*y-i*h*y)*z,t[15]=(d*g*l-_*h*l+_*r*m-i*g*m-d*r*S+i*h*S)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,_=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,g=h+h,S=u*p,M=u*_,b=u*g,R=d*_,y=d*g,x=h*g,N=m*p,D=m*_,O=m*g,F=r.x,I=r.y,z=r.z;return l[0]=(1-(R+x))*F,l[1]=(M+O)*F,l[2]=(b-D)*F,l[3]=0,l[4]=(M-O)*I,l[5]=(1-(S+x))*I,l[6]=(y+N)*I,l[7]=0,l[8]=(b+D)*z,l[9]=(y-N)*z,l[10]=(1-(S+R))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=vs.set(l[0],l[1],l[2]).length();const d=vs.set(l[4],l[5],l[6]).length(),h=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Mi.copy(this);const p=1/u,_=1/d,g=1/h;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=_,Mi.elements[5]*=_,Mi.elements[6]*=_,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,i.setFromRotationMatrix(Mi),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Fi,m=!1){const p=this.elements,_=2*u/(i-t),g=2*u/(r-l),S=(i+t)/(i-t),M=(r+l)/(r-l);let b,R;if(m)b=u/(d-u),R=d*u/(d-u);else if(h===Fi)b=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===zc)b=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Fi,m=!1){const p=this.elements,_=2/(i-t),g=2/(r-l),S=-(i+t)/(i-t),M=-(r+l)/(r-l);let b,R;if(m)b=1/(d-u),R=d/(d-u);else if(h===Fi)b=-2/(d-u),R=-(d+u)/(d-u);else if(h===zc)b=-1/(d-u),R=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const vs=new se,Mi=new fn,dy=new se(0,0,0),hy=new se(1,1,1),ja=new se,pc=new se,Jn=new se,Ig=new fn,Bg=new jo;class _a{constructor(t=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Ig.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ig,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Bg.setFromEuler(this),this.setFromQuaternion(Bg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class G_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let py=0;const Hg=new se,xs=new jo,la=new fn,mc=new se,zo=new se,my=new se,gy=new jo,Gg=new se(1,0,0),Vg=new se(0,1,0),kg=new se(0,0,1),Xg={type:"added"},_y={type:"removed"},Ss={type:"childadded",child:null},ud={type:"childremoved",child:null};class ei extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const t=new se,i=new _a,r=new jo,l=new se(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new ft}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,i){return xs.setFromAxisAngle(t,i),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(Gg,t)}rotateY(t){return this.rotateOnAxis(Vg,t)}rotateZ(t){return this.rotateOnAxis(kg,t)}translateOnAxis(t,i){return Hg.copy(t).applyQuaternion(this.quaternion),this.position.add(Hg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Gg,t)}translateY(t){return this.translateOnAxis(Vg,t)}translateZ(t){return this.translateOnAxis(kg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?mc.copy(t):mc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(zo,mc,this.up):la.lookAt(mc,zo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),xs.setFromRotationMatrix(la),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xg),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_y),ud.child=t,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),la.multiply(t.parent.matrixWorld)),t.applyMatrix4(la),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xg),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,my),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,gy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),g=d(t.shapes),S=d(t.skeletons),M=d(t.animations),b=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ei.DEFAULT_UP=new se(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new se,ca=new se,fd=new se,ua=new se,ys=new se,Ms=new se,Wg=new se,dd=new se,hd=new se,pd=new se,md=new an,gd=new an,_d=new an;class Ti{constructor(t=new se,i=new se,r=new se){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ei.subVectors(t,i),l.cross(Ei);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ei.subVectors(l,i),ca.subVectors(r,i),fd.subVectors(t,i);const d=Ei.dot(Ei),h=Ei.dot(ca),m=Ei.dot(fd),p=ca.dot(ca),_=ca.dot(fd),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,M=(p*m-h*_)*S,b=(d*_-h*m)*S;return u.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(d,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return md.setScalar(0),gd.setScalar(0),_d.setScalar(0),md.fromBufferAttribute(t,i),gd.fromBufferAttribute(t,r),_d.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(md,u.x),d.addScaledVector(gd,u.y),d.addScaledVector(_d,u.z),d}static isFrontFacing(t,i,r,l){return Ei.subVectors(r,i),ca.subVectors(t,i),Ei.cross(ca).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ei.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Ti.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ys.subVectors(l,r),Ms.subVectors(u,r),dd.subVectors(t,r);const m=ys.dot(dd),p=Ms.dot(dd);if(m<=0&&p<=0)return i.copy(r);hd.subVectors(t,l);const _=ys.dot(hd),g=Ms.dot(hd);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(ys,d);pd.subVectors(t,u);const M=ys.dot(pd),b=Ms.dot(pd);if(b>=0&&M<=b)return i.copy(u);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(Ms,h);const y=_*b-M*g;if(y<=0&&g-_>=0&&M-b>=0)return Wg.subVectors(u,l),h=(g-_)/(g-_+(M-b)),i.copy(l).addScaledVector(Wg,h);const x=1/(y+R+S);return d=R*x,h=S*x,i.copy(r).addScaledVector(ys,d).addScaledVector(Ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const V_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},gc={h:0,s:0,l:0};function vd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class kt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=bt.workingColorSpace){return this.r=t,this.g=i,this.b=r,bt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=bt.workingColorSpace){if(t=iy(t,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=vd(d,u,t+1/3),this.g=vd(d,u,t),this.b=vd(d,u,t-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function r(u){u!==void 0&&parseFloat(u)<1&&st("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:st("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);st("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const r=V_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return bt.workingToColorSpace(Ln.copy(this),t),Math.round(yt(Ln.r*255,0,255))*65536+Math.round(yt(Ln.g*255,0,255))*256+Math.round(yt(Ln.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=bt.workingColorSpace){bt.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=_<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=bt.workingColorSpace){return bt.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=di){bt.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,l=Ln.b;return t!==di?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+i,Za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Za),t.getHSL(gc);const r=ed(Za.h,gc.h,i),l=ed(Za.s,gc.s,i),u=ed(Za.l,gc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new kt;kt.NAMES=V_;let vy=0;class Ic extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Cs,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Nd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ud&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class k_ extends Ic{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=E_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new se,_c=new Ct;let xy=0;class Hi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Ug,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(t),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ug&&(t.usage=this.usage),t}}class X_ extends Hi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class W_ extends Hi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class pa extends Hi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Sy=0;const fi=new fn,xd=new ei,Es=new se,$n=new Zo,Fo=new Zo,_n=new se;class va extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(B_(t)?W_:X_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,r){return fi.makeTranslation(t,i,r),this.applyMatrix4(fi),this}scale(t,i,r){return fi.makeScale(t,i,r),this.applyMatrix4(fi),this}lookAt(t){return xd.lookAt(t),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new pa(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(_n.addVectors($n.min,Fo.min),$n.expandByPoint(_n),_n.addVectors($n.max,Fo.max),$n.expandByPoint(_n)):($n.expandByPoint(Fo.min),$n.expandByPoint(Fo.max))}$n.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)_n.fromBufferAttribute(h,p),m&&(Es.fromBufferAttribute(t,p),_n.add(Es)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let j=0;j<r.count;j++)h[j]=new se,m[j]=new se;const p=new se,_=new se,g=new se,S=new Ct,M=new Ct,b=new Ct,R=new se,y=new se;function x(j,C,w){p.fromBufferAttribute(r,j),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,w),S.fromBufferAttribute(u,j),M.fromBufferAttribute(u,C),b.fromBufferAttribute(u,w),_.sub(p),g.sub(p),M.sub(S),b.sub(S);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(R.copy(_).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(V),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(V),h[j].add(R),h[C].add(R),h[w].add(R),m[j].add(y),m[C].add(y),m[w].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let j=0,C=N.length;j<C;++j){const w=N[j],V=w.start,ne=w.count;for(let Z=V,le=V+ne;Z<le;Z+=3)x(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const D=new se,O=new se,F=new se,I=new se;function z(j){F.fromBufferAttribute(l,j),I.copy(F);const C=h[j];D.copy(C),D.sub(F.multiplyScalar(F.dot(C))).normalize(),O.crossVectors(I,C);const V=O.dot(m[j])<0?-1:1;d.setXYZW(j,D.x,D.y,D.z,V)}for(let j=0,C=N.length;j<C;++j){const w=N[j],V=w.start,ne=w.count;for(let Z=V,le=V+ne;Z<le;Z+=3)z(t.getX(Z+0)),z(t.getX(Z+1)),z(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Hi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new se,u=new se,d=new se,h=new se,m=new se,p=new se,_=new se,g=new se;if(t)for(let S=0,M=t.count;S<M;S+=3){const b=t.getX(S+0),R=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,y),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),h.add(_),m.add(_),p.add(_),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,S=new p.constructor(m.length*_);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?M=m[R]*h.data.stride+h.offset:M=m[R]*_;for(let x=0;x<_;x++)S[b++]=p[M++]}return new Hi(S,_,g)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new va,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,g=p.length;_<g;_++){const S=p[_],M=t(S,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const M=p[g];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let S=0,M=g.length;S<M;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qg=new fn,Sr=new fy,vc=new zh,Yg=new se,xc=new se,Sc=new se,yc=new se,Sd=new se,Mc=new se,jg=new se,Ec=new se;class Ri extends ei{constructor(t=new va,i=new k_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Mc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],g=u[m];_!==0&&(Sd.fromBufferAttribute(g,t),d?Mc.addScaledVector(Sd,_):Mc.addScaledVector(Sd.sub(i),_))}i.add(Mc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vc.copy(r.boundingSphere),vc.applyMatrix4(u),Sr.copy(t.ray).recast(t.near),!(vc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(vc,Yg)===null||Sr.origin.distanceToSquared(Yg)>(t.far-t.near)**2))&&(qg.copy(u).invert(),Sr.copy(t.ray).applyMatrix4(qg),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Sr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,S=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,R=S.length;b<R;b++){const y=S[b],x=d[y.materialIndex],N=Math.max(y.start,M.start),D=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let O=N,F=D;O<F;O+=3){const I=h.getX(O),z=h.getX(O+1),j=h.getX(O+2);l=bc(this,x,t,r,p,_,g,I,z,j),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const N=h.getX(y),D=h.getX(y+1),O=h.getX(y+2);l=bc(this,d,t,r,p,_,g,N,D,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,R=S.length;b<R;b++){const y=S[b],x=d[y.materialIndex],N=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let O=N,F=D;O<F;O+=3){const I=O,z=O+1,j=O+2;l=bc(this,x,t,r,p,_,g,I,z,j),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const N=y,D=y+1,O=y+2;l=bc(this,d,t,r,p,_,g,N,D,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function yy(o,t,i,r,l,u,d,h){let m;if(t.side===Xn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===$a,h),m===null)return null;Ec.copy(h),Ec.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Ec);return p<i.near||p>i.far?null:{distance:p,point:Ec.clone(),object:o}}function bc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,xc),o.getVertexPosition(m,Sc),o.getVertexPosition(p,yc);const _=yy(o,t,i,r,xc,Sc,yc,jg);if(_){const g=new se;Ti.getBarycoord(jg,xc,Sc,yc,g),l&&(_.uv=Ti.getInterpolatedAttribute(l,h,m,p,g,new Ct)),u&&(_.uv1=Ti.getInterpolatedAttribute(u,h,m,p,g,new Ct)),d&&(_.normal=Ti.getInterpolatedAttribute(d,h,m,p,g,new se),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new se,materialIndex:0};Ti.getNormal(xc,Sc,yc,S.normal),_.face=S,_.barycoord=g}return _}class Ko extends va{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],g=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,t,d,u,0),b("z","y","x",1,-1,r,i,-t,d,u,1),b("x","z","y",1,1,t,r,i,l,d,2),b("x","z","y",1,-1,t,r,-i,l,d,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new pa(p,3)),this.setAttribute("normal",new pa(_,3)),this.setAttribute("uv",new pa(g,2));function b(R,y,x,N,D,O,F,I,z,j,C){const w=O/z,V=F/j,ne=O/2,Z=F/2,le=I/2,re=z+1,P=j+1;let H=0,ee=0;const _e=new se;for(let Se=0;Se<P;Se++){const L=Se*V-Z;for(let te=0;te<re;te++){const he=te*w-ne;_e[R]=he*N,_e[y]=L*D,_e[x]=le,p.push(_e.x,_e.y,_e.z),_e[R]=0,_e[y]=0,_e[x]=I>0?1:-1,_.push(_e.x,_e.y,_e.z),g.push(te/z),g.push(1-Se/j),H+=1}}for(let Se=0;Se<j;Se++)for(let L=0;L<z;L++){const te=S+L+re*Se,he=S+L+re*(Se+1),Me=S+(L+1)+re*(Se+1),we=S+(L+1)+re*Se;m.push(te,he,we),m.push(he,Me,we),ee+=6}h.addGroup(M,ee,C),M+=ee,S+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const r=Os(o[i]);for(const l in r)t[l]=r[l]}return t}function My(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function q_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:bt.workingColorSpace}const Ey={clone:Os,merge:zn};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Ic{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=My(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Y_ extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new se,Zg=new Ct,Kg=new Ct;class bi extends Y_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Mh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($f*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan($f*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z)}getViewSize(t,i){return this.getViewBounds(t,Zg,Kg),i.subVectors(Kg,Zg)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan($f*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const bs=-90,Ts=1;class Ay extends ei{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(bs,Ts,t,i);l.layers=this.layers,this.add(l);const u=new bi(bs,Ts,t,i);u.layers=this.layers,this.add(u);const d=new bi(bs,Ts,t,i);d.layers=this.layers,this.add(d);const h=new bi(bs,Ts,t,i);h.layers=this.layers,this.add(h);const m=new bi(bs,Ts,t,i);m.layers=this.layers,this.add(m);const p=new bi(bs,Ts,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===zc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,S,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class j_ extends wn{constructor(t=[],i=Dr,r,l,u,d,h,m,p,_){super(t,i,r,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Z_ extends Bi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new j_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ko(5,5,5),u=new pi({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:da});u.uniforms.tEquirect.value=i;const d=new Ri(l,u),h=i.minFilter;return i.minFilter===Cr&&(i.minFilter=On),new Ay(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class Tc extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ry={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,r),x=this._getHandJoint(p,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ry)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Tc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class K_ extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Cy extends wn{constructor(t=null,i=1,r=1,l,u,d,h,m,p=Cn,_=Cn,g,S){super(null,d,h,m,p,_,l,u,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Md=new se,wy=new se,Dy=new ft;class Tr{constructor(t=new se(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Md.subVectors(r,i).cross(wy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Md),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Dy.getNormalMatrix(t),l=this.coplanarPoint(Md).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new zh,Uy=new Ct(.5,.5),Ac=new se;class Q_{constructor(t=new Tr,i=new Tr,r=new Tr,l=new Tr,u=new Tr,d=new Tr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Fi,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],g=u[5],S=u[6],M=u[7],b=u[8],R=u[9],y=u[10],x=u[11],N=u[12],D=u[13],O=u[14],F=u[15];if(l[0].setComponents(p-d,M-_,x-b,F-N).normalize(),l[1].setComponents(p+d,M+_,x+b,F+N).normalize(),l[2].setComponents(p+h,M+g,x+R,F+D).normalize(),l[3].setComponents(p-h,M-g,x-R,F-D).normalize(),r)l[4].setComponents(m,S,y,O).normalize(),l[5].setComponents(p-m,M-S,x-y,F-O).normalize();else if(l[4].setComponents(p-m,M-S,x-y,F-O).normalize(),i===Fi)l[5].setComponents(p+m,M+S,x+y,F+O).normalize();else if(i===zc)l[5].setComponents(m,S,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){yr.center.set(0,0,0);const i=Uy.distanceTo(t.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Ac.x=l.normal.x>0?t.max.x:t.min.x,Ac.y=l.normal.y>0?t.max.y:t.min.y,Ac.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ny extends wn{constructor(t,i,r,l,u,d,h,m,p){super(t,i,r,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qo extends wn{constructor(t,i,r=Gi,l,u,d,h=Cn,m=Cn,p,_=ga,g=1){if(_!==ga&&_!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,u,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ph(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ly extends qo{constructor(t,i=Gi,r=Dr,l,u,d=Cn,h=Cn,m,p=ga){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,r,l,u,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class J_ extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class zs extends va{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,g=t/h,S=i/m,M=[],b=[],R=[],y=[];for(let x=0;x<_;x++){const N=x*S-d;for(let D=0;D<p;D++){const O=D*g-u;b.push(O,-N,0),R.push(0,0,1),y.push(D/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let N=0;N<h;N++){const D=N+p*x,O=N+p*(x+1),F=N+1+p*(x+1),I=N+1+p*x;M.push(D,O,I),M.push(O,F,I)}this.setIndex(M),this.setAttribute("position",new pa(b,3)),this.setAttribute("normal",new pa(R,3)),this.setAttribute("uv",new pa(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Oy extends pi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Py extends Ic{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zy extends Ic{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ed={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Fy{constructor(t,i,r){const l=this;let u=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){h++,u===!1&&l.onStart!==void 0&&l.onStart(_,d,h),u=!0},this.itemEnd=function(_){d++,l.onProgress!==void 0&&l.onProgress(_,d,h),d===h&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,S=p.length;g<S;g+=2){const M=p[g],b=p[g+1];if(M.global&&(M.lastIndex=0),M.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Iy=new Fy;class Fh{constructor(t){this.manager=t!==void 0?t:Iy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,u){r.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Fh.DEFAULT_MATERIAL_NAME="__DEFAULT";const As=new WeakMap;class By extends Fh{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,d=Ed.get(`image:${t}`);if(d!==void 0){if(d.complete===!0)u.manager.itemStart(t),setTimeout(function(){i&&i(d),u.manager.itemEnd(t)},0);else{let g=As.get(d);g===void 0&&(g=[],As.set(d,g)),g.push({onLoad:i,onError:l})}return d}const h=Xo("img");function m(){_(),i&&i(this);const g=As.get(this)||[];for(let S=0;S<g.length;S++){const M=g[S];M.onLoad&&M.onLoad(this)}As.delete(this),u.manager.itemEnd(t)}function p(g){_(),l&&l(g),Ed.remove(`image:${t}`);const S=As.get(this)||[];for(let M=0;M<S.length;M++){const b=S[M];b.onError&&b.onError(g)}As.delete(this),u.manager.itemError(t),u.manager.itemEnd(t)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Ed.add(`image:${t}`,h),u.manager.itemStart(t),h.src=t,h}}class Hy extends Fh{constructor(t){super(t)}load(t,i,r,l){const u=new wn,d=new By(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(t,function(h){u.image=h,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class Bc extends Y_{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Gy extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Vy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Qg(o,t,i,r){const l=ky(r);switch(i){case z_:return o*t;case I_:return o*t/l.components*l.byteLength;case Dh:return o*t/l.components*l.byteLength;case Ns:return o*t*2/l.components*l.byteLength;case Uh:return o*t*2/l.components*l.byteLength;case F_:return o*t*3/l.components*l.byteLength;case Ai:return o*t*4/l.components*l.byteLength;case Nh:return o*t*4/l.components*l.byteLength;case Dc:case Uc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Nc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wd:case Yd:return Math.max(o,16)*Math.max(t,8)/4;case Xd:case qd:return Math.max(o,8)*Math.max(t,8)/2;case jd:case Zd:case Qd:case Jd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Kd:case $d:case eh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case th:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case nh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case ih:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ah:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case rh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case sh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case oh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case lh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ch:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case uh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case fh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case dh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case hh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ph:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case mh:case gh:case _h:return Math.ceil(o/4)*Math.ceil(t/4)*16;case vh:case xh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Sh:case yh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ky(o){switch(o){case hi:case N_:return{byteLength:1,components:1};case Vo:case L_:case ma:return{byteLength:2,components:1};case Ch:case wh:return{byteLength:2,components:4};case Gi:case Rh:case zi:return{byteLength:4,components:1};case O_:case P_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $_(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Xy(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,_);else{g.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<g.length;M++){const b=g[S],R=g[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,g[S]=R)}g.length=S+1;for(let M=0,b=g.length;M<b;M++){const R=g[M];o.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var Wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
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
#endif`,Yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qy=`#ifdef USE_AOMAP
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
#endif`,Jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$y=`#ifdef USE_BATCHING
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
#endif`,eM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aM=`#ifdef USE_IRIDESCENCE
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
#endif`,rM=`#ifdef USE_BUMPMAP
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pM=`#define PI 3.141592653589793
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
} // validated`,mM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gM=`vec3 transformedNormal = objectNormal;
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
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yM="gl_FragColor = linearToOutputTexel( gl_FragColor );",MM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,CM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
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
}`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zM=`uniform bool receiveShadow;
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
#endif`,FM=`#ifdef USE_ENVMAP
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
#endif`,IM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VM=`PhysicalMaterial material;
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
#endif`,kM=`uniform sampler2D dfgLUT;
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
}`,XM=`
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
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
#endif`,qM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eE=`#if defined( USE_POINTS_UV )
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
#endif`,tE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`#ifdef USE_MORPHTARGETS
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
#endif`,oE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hE=`#ifdef USE_NORMALMAP
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
#endif`,pE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ME=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wE=`float getShadowMask() {
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
}`,DE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UE=`#ifdef USE_SKINNING
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
#endif`,NE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LE=`#ifdef USE_SKINNING
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
#endif`,OE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,BE=`#ifdef USE_TRANSMISSION
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
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WE=`uniform sampler2D t2D;
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
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KE=`#include <common>
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
}`,QE=`#if DEPTH_PACKING == 3200
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
}`,JE=`#define DISTANCE
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
}`,$E=`#define DISTANCE
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`uniform float scale;
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
}`,ib=`uniform vec3 diffuse;
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
}`,ab=`#include <common>
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
}`,rb=`uniform vec3 diffuse;
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
}`,sb=`#define LAMBERT
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
}`,ob=`#define LAMBERT
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
}`,lb=`#define MATCAP
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
}`,cb=`#define MATCAP
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
}`,ub=`#define NORMAL
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
}`,fb=`#define NORMAL
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
}`,db=`#define PHONG
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
}`,hb=`#define PHONG
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
}`,pb=`#define STANDARD
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
}`,mb=`#define STANDARD
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
}`,gb=`#define TOON
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
}`,_b=`#define TOON
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
}`,vb=`uniform float size;
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
}`,xb=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,yb=`uniform vec3 color;
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
}`,Mb=`uniform float rotation;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:Wy,alphahash_pars_fragment:qy,alphamap_fragment:Yy,alphamap_pars_fragment:jy,alphatest_fragment:Zy,alphatest_pars_fragment:Ky,aomap_fragment:Qy,aomap_pars_fragment:Jy,batching_pars_vertex:$y,batching_vertex:eM,begin_vertex:tM,beginnormal_vertex:nM,bsdfs:iM,iridescence_fragment:aM,bumpmap_pars_fragment:rM,clipping_planes_fragment:sM,clipping_planes_pars_fragment:oM,clipping_planes_pars_vertex:lM,clipping_planes_vertex:cM,color_fragment:uM,color_pars_fragment:fM,color_pars_vertex:dM,color_vertex:hM,common:pM,cube_uv_reflection_fragment:mM,defaultnormal_vertex:gM,displacementmap_pars_vertex:_M,displacementmap_vertex:vM,emissivemap_fragment:xM,emissivemap_pars_fragment:SM,colorspace_fragment:yM,colorspace_pars_fragment:MM,envmap_fragment:EM,envmap_common_pars_fragment:bM,envmap_pars_fragment:TM,envmap_pars_vertex:AM,envmap_physical_pars_fragment:FM,envmap_vertex:RM,fog_vertex:CM,fog_pars_vertex:wM,fog_fragment:DM,fog_pars_fragment:UM,gradientmap_pars_fragment:NM,lightmap_pars_fragment:LM,lights_lambert_fragment:OM,lights_lambert_pars_fragment:PM,lights_pars_begin:zM,lights_toon_fragment:IM,lights_toon_pars_fragment:BM,lights_phong_fragment:HM,lights_phong_pars_fragment:GM,lights_physical_fragment:VM,lights_physical_pars_fragment:kM,lights_fragment_begin:XM,lights_fragment_maps:WM,lights_fragment_end:qM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:ZM,logdepthbuf_vertex:KM,map_fragment:QM,map_pars_fragment:JM,map_particle_fragment:$M,map_particle_pars_fragment:eE,metalnessmap_fragment:tE,metalnessmap_pars_fragment:nE,morphinstance_vertex:iE,morphcolor_vertex:aE,morphnormal_vertex:rE,morphtarget_pars_vertex:sE,morphtarget_vertex:oE,normal_fragment_begin:lE,normal_fragment_maps:cE,normal_pars_fragment:uE,normal_pars_vertex:fE,normal_vertex:dE,normalmap_pars_fragment:hE,clearcoat_normal_fragment_begin:pE,clearcoat_normal_fragment_maps:mE,clearcoat_pars_fragment:gE,iridescence_pars_fragment:_E,opaque_fragment:vE,packing:xE,premultiplied_alpha_fragment:SE,project_vertex:yE,dithering_fragment:ME,dithering_pars_fragment:EE,roughnessmap_fragment:bE,roughnessmap_pars_fragment:TE,shadowmap_pars_fragment:AE,shadowmap_pars_vertex:RE,shadowmap_vertex:CE,shadowmask_pars_fragment:wE,skinbase_vertex:DE,skinning_pars_vertex:UE,skinning_vertex:NE,skinnormal_vertex:LE,specularmap_fragment:OE,specularmap_pars_fragment:PE,tonemapping_fragment:zE,tonemapping_pars_fragment:FE,transmission_fragment:IE,transmission_pars_fragment:BE,uv_pars_fragment:HE,uv_pars_vertex:GE,uv_vertex:VE,worldpos_vertex:kE,background_vert:XE,background_frag:WE,backgroundCube_vert:qE,backgroundCube_frag:YE,cube_vert:jE,cube_frag:ZE,depth_vert:KE,depth_frag:QE,distance_vert:JE,distance_frag:$E,equirect_vert:eb,equirect_frag:tb,linedashed_vert:nb,linedashed_frag:ib,meshbasic_vert:ab,meshbasic_frag:rb,meshlambert_vert:sb,meshlambert_frag:ob,meshmatcap_vert:lb,meshmatcap_frag:cb,meshnormal_vert:ub,meshnormal_frag:fb,meshphong_vert:db,meshphong_frag:hb,meshphysical_vert:pb,meshphysical_frag:mb,meshtoon_vert:gb,meshtoon_frag:_b,points_vert:vb,points_frag:xb,shadow_vert:Sb,shadow_frag:yb,sprite_vert:Mb,sprite_frag:Eb},Pe={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Oi={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new kt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new kt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Oi.physical={uniforms:zn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Rc={r:0,b:0,g:0},Mr=new _a,bb=new fn;function Tb(o,t,i,r,l,u,d){const h=new kt(0);let m=u===!0?0:1,p,_,g=null,S=0,M=null;function b(D){let O=D.isScene===!0?D.background:null;return O&&O.isTexture&&(O=(D.backgroundBlurriness>0?i:t).get(O)),O}function R(D){let O=!1;const F=b(D);F===null?x(h,m):F&&F.isColor&&(x(F,1),O=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,d):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(D,O){const F=b(O);F&&(F.isCubeTexture||F.mapping===Fc)?(_===void 0&&(_=new Ri(new Ko(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Os(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Mr.copy(O.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),_.material.uniforms.envMap.value=F,_.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(bb.makeRotationFromEuler(Mr)),_.material.toneMapped=bt.getTransfer(F.colorSpace)!==Bt,(g!==F||S!==F.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,g=F,S=F.version,M=o.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Ri(new zs(2,2),new pi({name:"BackgroundMaterial",uniforms:Os(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=bt.getTransfer(F.colorSpace)!==Bt,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||S!==F.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,g=F,S=F.version,M=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function x(D,O){D.getRGB(Rc,q_(o)),r.buffers.color.setClear(Rc.r,Rc.g,Rc.b,O,d)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,O=1){h.set(D),m=O,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,x(h,m)},render:R,addToRenderList:y,dispose:N}}function Ab(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(w,V,ne,Z,le){let re=!1;const P=g(Z,ne,V);u!==P&&(u=P,p(u.object)),re=M(w,Z,ne,le),re&&b(w,Z,ne,le),le!==null&&t.update(le,o.ELEMENT_ARRAY_BUFFER),(re||d)&&(d=!1,O(w,V,ne,Z),le!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function g(w,V,ne){const Z=ne.wireframe===!0;let le=r[w.id];le===void 0&&(le={},r[w.id]=le);let re=le[V.id];re===void 0&&(re={},le[V.id]=re);let P=re[Z];return P===void 0&&(P=S(m()),re[Z]=P),P}function S(w){const V=[],ne=[],Z=[];for(let le=0;le<i;le++)V[le]=0,ne[le]=0,Z[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ne,attributeDivisors:Z,object:w,attributes:{},index:null}}function M(w,V,ne,Z){const le=u.attributes,re=V.attributes;let P=0;const H=ne.getAttributes();for(const ee in H)if(H[ee].location>=0){const Se=le[ee];let L=re[ee];if(L===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),Se===void 0||Se.attribute!==L||L&&Se.data!==L.data)return!0;P++}return u.attributesNum!==P||u.index!==Z}function b(w,V,ne,Z){const le={},re=V.attributes;let P=0;const H=ne.getAttributes();for(const ee in H)if(H[ee].location>=0){let Se=re[ee];Se===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor));const L={};L.attribute=Se,Se&&Se.data&&(L.data=Se.data),le[ee]=L,P++}u.attributes=le,u.attributesNum=P,u.index=Z}function R(){const w=u.newAttributes;for(let V=0,ne=w.length;V<ne;V++)w[V]=0}function y(w){x(w,0)}function x(w,V){const ne=u.newAttributes,Z=u.enabledAttributes,le=u.attributeDivisors;ne[w]=1,Z[w]===0&&(o.enableVertexAttribArray(w),Z[w]=1),le[w]!==V&&(o.vertexAttribDivisor(w,V),le[w]=V)}function N(){const w=u.newAttributes,V=u.enabledAttributes;for(let ne=0,Z=V.length;ne<Z;ne++)V[ne]!==w[ne]&&(o.disableVertexAttribArray(ne),V[ne]=0)}function D(w,V,ne,Z,le,re,P){P===!0?o.vertexAttribIPointer(w,V,ne,le,re):o.vertexAttribPointer(w,V,ne,Z,le,re)}function O(w,V,ne,Z){R();const le=Z.attributes,re=ne.getAttributes(),P=V.defaultAttributeValues;for(const H in re){const ee=re[H];if(ee.location>=0){let _e=le[H];if(_e===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor)),_e!==void 0){const Se=_e.normalized,L=_e.itemSize,te=t.get(_e);if(te===void 0)continue;const he=te.buffer,Me=te.type,we=te.bytesPerElement,Q=Me===o.INT||Me===o.UNSIGNED_INT||_e.gpuType===Rh;if(_e.isInterleavedBufferAttribute){const ue=_e.data,Te=ue.stride,ze=_e.offset;if(ue.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ee.locationSize;Fe++)x(ee.location+Fe,ue.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Fe=0;Fe<ee.locationSize;Fe++)y(ee.location+Fe);o.bindBuffer(o.ARRAY_BUFFER,he);for(let Fe=0;Fe<ee.locationSize;Fe++)D(ee.location+Fe,L/ee.locationSize,Me,Se,Te*we,(ze+L/ee.locationSize*Fe)*we,Q)}else{if(_e.isInstancedBufferAttribute){for(let ue=0;ue<ee.locationSize;ue++)x(ee.location+ue,_e.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ue=0;ue<ee.locationSize;ue++)y(ee.location+ue);o.bindBuffer(o.ARRAY_BUFFER,he);for(let ue=0;ue<ee.locationSize;ue++)D(ee.location+ue,L/ee.locationSize,Me,Se,L*we,L/ee.locationSize*ue*we,Q)}}else if(P!==void 0){const Se=P[H];if(Se!==void 0)switch(Se.length){case 2:o.vertexAttrib2fv(ee.location,Se);break;case 3:o.vertexAttrib3fv(ee.location,Se);break;case 4:o.vertexAttrib4fv(ee.location,Se);break;default:o.vertexAttrib1fv(ee.location,Se)}}}}N()}function F(){j();for(const w in r){const V=r[w];for(const ne in V){const Z=V[ne];for(const le in Z)_(Z[le].object),delete Z[le];delete V[ne]}delete r[w]}}function I(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const ne in V){const Z=V[ne];for(const le in Z)_(Z[le].object),delete Z[le];delete V[ne]}delete r[w.id]}function z(w){for(const V in r){const ne=r[V];if(ne[w.id]===void 0)continue;const Z=ne[w.id];for(const le in Z)_(Z[le].object),delete Z[le];delete ne[w.id]}}function j(){C(),d=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:y,disableUnusedAttributes:N}}function Rb(o,t,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function h(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b];i.update(M,r,1)}function m(p,_,g,S){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)d(p[b],_[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,g);let b=0;for(let R=0;R<g;R++)b+=_[R]*S[R];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Cb(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ai&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const j=z===ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==hi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==zi&&!j)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(st("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:O,maxSamples:F,samples:I}}function wb(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new Tr,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||r!==0||l;return l=S,r=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,M){const b=g.clippingPlanes,R=g.clipIntersection,y=g.clipShadows,x=o.get(g);if(!l||b===null||b.length===0||u&&!y)u?_(null):p();else{const N=u?0:r,D=N*4;let O=x.clippingState||null;m.value=O,O=_(b,S,D,M);for(let F=0;F!==D;++F)O[F]=i[F];x.clippingState=O,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,S,M,b){const R=g!==null?g.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const x=M+R*4,N=S.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,O=M;D!==R;++D,O+=4)d.copy(g[D]).applyMatrix4(N,h),d.normal.toArray(y,O),y[O+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function Db(o){let t=new WeakMap;function i(d,h){return h===Hd?d.mapping=Dr:h===Gd&&(d.mapping=Us),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Hd||h===Gd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Z_(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ja=4,Jg=[.125,.215,.35,.446,.526,.582],Rr=20,Ub=256,Io=new Bc,$g=new kt;let bd=null,Td=0,Ad=0,Rd=!1;const Nb=new se;class e_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=Nb}=u;bd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bd,Td,Ad),this._renderer.xr.enabled=Rd,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Dr||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Ad=this._renderer.getActiveMipmapLevel(),Rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:ma,format:Ai,colorSpace:Ls,depthBuffer:!1},l=t_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Lb(u)),this._blurMaterial=Pb(u,t,i),this._ggxMaterial=Ob(u,t,i)}return l}_compileMaterial(t){const i=new Ri(new va,t);this._renderer.compile(i,Io)}_sceneToCubeUV(t,i,r,l,u){const m=new bi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,M=g.toneMapping;g.getClearColor($g),g.toneMapping=Ii,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new Ko,new k_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let x=!1;const N=t.background;N?N.isColor&&(y.color.copy(N),t.background=null,x=!0):(y.color.copy($g),x=!0);for(let D=0;D<6;D++){const O=D%3;O===0?(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[D],u.y,u.z)):O===1?(m.up.set(0,0,p[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[D],u.z)):(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[D]));const F=this._cubeSize;Rs(l,O*F,D>2?F:0,F,F),g.setRenderTarget(l),x&&g.render(R,m),g.render(t,m)}g.toneMapping=M,g.autoClear=S,t.background=N}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Dr||t.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;Rs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Io)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=0+p*1.25,M=g*S,{_lodMax:b}=this,R=this._sizeLods[r],y=3*R*(r>b-Ja?r-b+Ja:0),x=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Rs(u,y,x,3*R,2*R),l.setRenderTarget(u),l.render(h,Io),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,Rs(t,y,x,3*R,2*R),l.setRenderTarget(t),l.render(h,Io)}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Rt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Rr-1),R=u/b,y=isFinite(u)?1+Math.floor(_*R):Rr;y>Rr&&st(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rr}`);const x=[];let N=0;for(let z=0;z<Rr;++z){const j=z/R,C=Math.exp(-j*j/2);x.push(C),z===0?N+=C:z<y&&(N+=2*C)}for(let z=0;z<x.length;z++)x[z]=x[z]/N;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:D}=this;S.dTheta.value=b,S.mipInt.value=D-r;const O=this._sizeLods[l],F=3*O*(l>D-Ja?l-D+Ja:0),I=4*(this._cubeSize-O);Rs(i,F,I,3*O,2*O),m.setRenderTarget(i),m.render(g,Io)}}function Lb(o){const t=[],i=[],r=[];let l=o;const u=o-Ja+1+Jg.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Ja?m=Jg[d-o+Ja-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,b=6,R=3,y=2,x=1,N=new Float32Array(R*b*M),D=new Float32Array(y*b*M),O=new Float32Array(x*b*M);for(let I=0;I<M;I++){const z=I%3*2/3-1,j=I>2?0:-1,C=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];N.set(C,R*b*I),D.set(S,y*b*I);const w=[I,I,I,I,I,I];O.set(w,x*b*I)}const F=new va;F.setAttribute("position",new Hi(N,R)),F.setAttribute("uv",new Hi(D,y)),F.setAttribute("faceIndex",new Hi(O,x)),r.push(new Ri(F,null)),l>Ja&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function t_(o,t,i){const r=new Bi(o,t,i);return r.texture.mapping=Fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rs(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function Ob(o,t,i){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ub,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function Pb(o,t,i){const r=new Float32Array(Rr),l=new se(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function n_(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function i_(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}function zb(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Hd||m===Gd,_=m===Dr||m===Us;if(p||_){let g=t.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new e_(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new e_(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Fb(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Wo("WebGLRenderer: "+r+" extension not supported."),l}}}function Ib(o,t,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",d),delete l[S.id];const M=u.get(S);M&&(t.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(g){const S=[],M=g.index,b=g.attributes.position;let R=0;if(M!==null){const N=M.array;R=M.version;for(let D=0,O=N.length;D<O;D+=3){const F=N[D+0],I=N[D+1],z=N[D+2];S.push(F,I,I,z,z,F)}}else if(b!==void 0){const N=b.array;R=b.version;for(let D=0,O=N.length/3-1;D<O;D+=3){const F=D+0,I=D+1,z=D+2;S.push(F,I,I,z,z,F)}}else return;const y=new(B_(S)?W_:X_)(S,1);y.version=R;const x=u.get(g);x&&t.remove(x),u.set(g,y)}function _(g){const S=u.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function Bb(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*d),i.update(M,r,1)}function p(S,M,b){b!==0&&(o.drawElementsInstanced(r,M,u,S*d,b),i.update(M,r,b))}function _(S,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];i.update(y,r,1)}function g(S,M,b,R){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/d,M[x],R[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,R,0,b);let x=0;for(let N=0;N<b;N++)x+=M[N]*R[N];i.update(x,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function Hb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Rt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Gb(o,t,i){const r=new WeakMap,l=new an;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let w=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let O=0;b===!0&&(O=1),R===!0&&(O=2),y===!0&&(O=3);let F=h.attributes.position.count*O,I=1;F>t.maxTextureSize&&(I=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const z=new Float32Array(F*I*4*g),j=new H_(z,F,I,g);j.type=zi,j.needsUpdate=!0;const C=O*4;for(let V=0;V<g;V++){const ne=x[V],Z=N[V],le=D[V],re=F*I*4*V;for(let P=0;P<ne.count;P++){const H=P*C;b===!0&&(l.fromBufferAttribute(ne,P),z[re+H+0]=l.x,z[re+H+1]=l.y,z[re+H+2]=l.z,z[re+H+3]=0),R===!0&&(l.fromBufferAttribute(Z,P),z[re+H+4]=l.x,z[re+H+5]=l.y,z[re+H+6]=l.z,z[re+H+7]=0),y===!0&&(l.fromBufferAttribute(le,P),z[re+H+8]=l.x,z[re+H+9]=l.y,z[re+H+10]=l.z,z[re+H+11]=le.itemSize===4?l.w:1)}}S={count:g,texture:j,size:new Ct(F,I)},r.set(h,S),h.addEventListener("dispose",w)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function Vb(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const kb={[b_]:"LINEAR_TONE_MAPPING",[T_]:"REINHARD_TONE_MAPPING",[A_]:"CINEON_TONE_MAPPING",[R_]:"ACES_FILMIC_TONE_MAPPING",[w_]:"AGX_TONE_MAPPING",[D_]:"NEUTRAL_TONE_MAPPING",[C_]:"CUSTOM_TONE_MAPPING"};function Xb(o,t,i,r,l){const u=new Bi(t,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Bi(t,i,{type:ma,depthBuffer:!1,stencilBuffer:!1}),h=new va;h.setAttribute("position",new pa([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pa([0,2,0,0,2,0],2));const m=new Oy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ri(h,m),_=new Bc(-1,1,1,-1,0,1);let g=null,S=null,M=!1,b,R=null,y=[],x=!1;this.setSize=function(N,D){u.setSize(N,D),d.setSize(N,D);for(let O=0;O<y.length;O++){const F=y[O];F.setSize&&F.setSize(N,D)}},this.setEffects=function(N){y=N,x=y.length>0&&y[0].isRenderPass===!0;const D=u.width,O=u.height;for(let F=0;F<y.length;F++){const I=y[F];I.setSize&&I.setSize(D,O)}},this.begin=function(N,D){if(M||N.toneMapping===Ii&&y.length===0)return!1;if(R=D,D!==null){const O=D.width,F=D.height;(u.width!==O||u.height!==F)&&this.setSize(O,F)}return x===!1&&N.setRenderTarget(u),b=N.toneMapping,N.toneMapping=Ii,!0},this.hasRenderPass=function(){return x},this.end=function(N,D){N.toneMapping=b,M=!0;let O=u,F=d;for(let I=0;I<y.length;I++){const z=y[I];if(z.enabled!==!1&&(z.render(N,F,O,D),z.needsSwap!==!1)){const j=O;O=F,F=j}}if(g!==N.outputColorSpace||S!==N.toneMapping){g=N.outputColorSpace,S=N.toneMapping,m.defines={},bt.getTransfer(g)===Bt&&(m.defines.SRGB_TRANSFER="");const I=kb[S];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,N.setRenderTarget(R),N.render(p,_),R=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const ev=new wn,Eh=new qo(1,1),tv=new H_,nv=new cy,iv=new j_,a_=[],r_=[],s_=new Float32Array(16),o_=new Float32Array(9),l_=new Float32Array(4);function Fs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=a_[l];if(u===void 0&&(u=new Float32Array(l),a_[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function pn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function mn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Gc(o,t){let i=r_[t];i===void 0&&(i=new Int32Array(t),r_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Wb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function qb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2fv(this.addr,t),mn(i,t)}}function Yb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;o.uniform3fv(this.addr,t),mn(i,t)}}function jb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4fv(this.addr,t),mn(i,t)}}function Zb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;l_.set(r),o.uniformMatrix2fv(this.addr,!1,l_),mn(i,r)}}function Kb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;o_.set(r),o.uniformMatrix3fv(this.addr,!1,o_),mn(i,r)}}function Qb(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;s_.set(r),o.uniformMatrix4fv(this.addr,!1,s_),mn(i,r)}}function Jb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function $b(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2iv(this.addr,t),mn(i,t)}}function eT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3iv(this.addr,t),mn(i,t)}}function tT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4iv(this.addr,t),mn(i,t)}}function nT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function iT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;o.uniform2uiv(this.addr,t),mn(i,t)}}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;o.uniform3uiv(this.addr,t),mn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;o.uniform4uiv(this.addr,t),mn(i,t)}}function sT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Eh.compareFunction=i.isReversedDepthBuffer()?Oh:Lh,u=Eh):u=ev,i.setTexture2D(t||u,l)}function oT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||nv,l)}function lT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||iv,l)}function cT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||tv,l)}function uT(o){switch(o){case 5126:return Wb;case 35664:return qb;case 35665:return Yb;case 35666:return jb;case 35674:return Zb;case 35675:return Kb;case 35676:return Qb;case 5124:case 35670:return Jb;case 35667:case 35671:return $b;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return aT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return sT;case 35679:case 36299:case 36307:return oT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}function fT(o,t){o.uniform1fv(this.addr,t)}function dT(o,t){const i=Fs(t,this.size,2);o.uniform2fv(this.addr,i)}function hT(o,t){const i=Fs(t,this.size,3);o.uniform3fv(this.addr,i)}function pT(o,t){const i=Fs(t,this.size,4);o.uniform4fv(this.addr,i)}function mT(o,t){const i=Fs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function gT(o,t){const i=Fs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function _T(o,t){const i=Fs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function vT(o,t){o.uniform1iv(this.addr,t)}function xT(o,t){o.uniform2iv(this.addr,t)}function ST(o,t){o.uniform3iv(this.addr,t)}function yT(o,t){o.uniform4iv(this.addr,t)}function MT(o,t){o.uniform1uiv(this.addr,t)}function ET(o,t){o.uniform2uiv(this.addr,t)}function bT(o,t){o.uniform3uiv(this.addr,t)}function TT(o,t){o.uniform4uiv(this.addr,t)}function AT(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Eh:d=ev;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function RT(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||nv,u[d])}function CT(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||iv,u[d])}function wT(o,t,i){const r=this.cache,l=t.length,u=Gc(i,l);pn(r,u)||(o.uniform1iv(this.addr,u),mn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||tv,u[d])}function DT(o){switch(o){case 5126:return fT;case 35664:return dT;case 35665:return hT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return _T;case 5124:case 35670:return vT;case 35667:case 35671:return xT;case 35668:case 35672:return ST;case 35669:case 35673:return yT;case 5125:return MT;case 36294:return ET;case 36295:return bT;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return RT;case 35680:case 36300:case 36308:case 36293:return CT;case 36289:case 36303:case 36311:case 36292:return wT}}class UT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=uT(i.type)}}class NT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=DT(i.type)}}class LT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function c_(o,t){o.seq.push(t),o.map[t.id]=t}function OT(o,t,i){const r=o.name,l=r.length;for(Cd.lastIndex=0;;){const u=Cd.exec(r),d=Cd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){c_(i,p===void 0?new UT(h,o,t):new NT(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new LT(h),c_(i,g)),i=g}}}class Oc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);OT(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function u_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const PT=37297;let zT=0;function FT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const f_=new ft;function IT(o){bt._getMatrix(f_,bt.workingColorSpace,o);const t=`mat3( ${f_.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(o)){case Pc:return[t,"LinearTransferOETF"];case Bt:return[t,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function d_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+FT(o.getShaderSource(t),h)}else return u}function BT(o,t){const i=IT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const HT={[b_]:"Linear",[T_]:"Reinhard",[A_]:"Cineon",[R_]:"ACESFilmic",[w_]:"AgX",[D_]:"Neutral",[C_]:"Custom"};function GT(o,t){const i=HT[t];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new se;function VT(){bt.getLuminanceCoefficients(Cc);const o=Cc.x.toFixed(4),t=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function XT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function WT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Go(o){return o!==""}function h_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function p_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(o){return o.replace(qT,jT)}const YT=new Map;function jT(o,t){let i=dt[t];if(i===void 0){const r=YT.get(t);if(r!==void 0)i=dt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return bh(i)}const ZT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(o){return o.replace(ZT,KT)}function KT(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function g_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const QT={[wc]:"SHADOWMAP_TYPE_PCF",[Ho]:"SHADOWMAP_TYPE_VSM"};function JT(o){return QT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $T={[Dr]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Fc]:"ENVMAP_TYPE_CUBE_UV"};function e1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":$T[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const t1={[Us]:"ENVMAP_MODE_REFRACTION"};function n1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":t1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i1={[E_]:"ENVMAP_BLENDING_MULTIPLY",[kS]:"ENVMAP_BLENDING_MIX",[XS]:"ENVMAP_BLENDING_ADD"};function a1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":i1[o.combine]||"ENVMAP_BLENDING_NONE"}function r1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function s1(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=JT(i),p=e1(i),_=n1(i),g=a1(i),S=r1(i),M=kT(i),b=XT(u),R=l.createProgram();let y,x,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),x.length>0&&(x+=`
`)):(y=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),x=[g_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ii?"#define TONE_MAPPING":"",i.toneMapping!==Ii?dt.tonemapping_pars_fragment:"",i.toneMapping!==Ii?GT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,BT("linearToOutputTexel",i.outputColorSpace),VT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),d=bh(d),d=h_(d,i),d=p_(d,i),h=bh(h),h=h_(h,i),h=p_(h,i),d=m_(d),h=m_(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=N+y+d,O=N+x+h,F=u_(l,l.VERTEX_SHADER,D),I=u_(l,l.FRAGMENT_SHADER,O);l.attachShader(R,F),l.attachShader(R,I),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(V){if(o.debug.checkShaderErrors){const ne=l.getProgramInfoLog(R)||"",Z=l.getShaderInfoLog(F)||"",le=l.getShaderInfoLog(I)||"",re=ne.trim(),P=Z.trim(),H=le.trim();let ee=!0,_e=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ee=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,F,I);else{const Se=d_(l,F,"vertex"),L=d_(l,I,"fragment");Rt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+re+`
`+Se+`
`+L)}else re!==""?st("WebGLProgram: Program Info Log:",re):(P===""||H==="")&&(_e=!1);_e&&(V.diagnostics={runnable:ee,programLog:re,vertexShader:{log:P,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(F),l.deleteShader(I),j=new Oc(l,R),C=WT(l,R)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,PT)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zT++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=I,this}let o1=0;class l1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new c1(t),i.set(t,r)),r}}class c1{constructor(t){this.id=o1++,this.code=t,this.usedTimes=0}}function u1(o,t,i,r,l,u,d){const h=new G_,m=new l1,p=new Set,_=[],g=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,w,V,ne,Z){const le=ne.fog,re=Z.geometry,P=C.isMeshStandardMaterial?ne.environment:null,H=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),ee=H&&H.mapping===Fc?H.image.height:null,_e=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&st("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Se=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,L=Se!==void 0?Se.length:0;let te=0;re.morphAttributes.position!==void 0&&(te=1),re.morphAttributes.normal!==void 0&&(te=2),re.morphAttributes.color!==void 0&&(te=3);let he,Me,we,Q;if(_e){const Et=Oi[_e];he=Et.vertexShader,Me=Et.fragmentShader}else he=C.vertexShader,Me=C.fragmentShader,m.update(C),we=m.getVertexShaderID(C),Q=m.getFragmentShaderID(C);const ue=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),ze=Z.isInstancedMesh===!0,Fe=Z.isBatchedMesh===!0,ht=!!C.map,jt=!!C.matcap,pt=!!H,mt=!!C.aoMap,wt=!!C.lightMap,ot=!!C.bumpMap,Jt=!!C.normalMap,G=!!C.displacementMap,Zt=!!C.emissiveMap,Mt=!!C.metalnessMap,Lt=!!C.roughnessMap,je=C.anisotropy>0,U=C.clearcoat>0,E=C.dispersion>0,W=C.iridescence>0,me=C.sheen>0,ye=C.transmission>0,de=je&&!!C.anisotropyMap,Ke=U&&!!C.clearcoatMap,De=U&&!!C.clearcoatNormalMap,Xe=U&&!!C.clearcoatRoughnessMap,nt=W&&!!C.iridescenceMap,be=W&&!!C.iridescenceThicknessMap,Ae=me&&!!C.sheenColorMap,He=me&&!!C.sheenRoughnessMap,Ie=!!C.specularMap,Ue=!!C.specularColorMap,ct=!!C.specularIntensityMap,X=ye&&!!C.transmissionMap,Le=ye&&!!C.thicknessMap,Re=!!C.gradientMap,Be=!!C.alphaMap,Ee=C.alphaTest>0,xe=!!C.alphaHash,Ce=!!C.extensions;let it=Ii;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=o.toneMapping);const Pt={shaderID:_e,shaderType:C.type,shaderName:C.name,vertexShader:he,fragmentShader:Me,defines:C.defines,customVertexShaderID:we,customFragmentShaderID:Q,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Fe,batchingColor:Fe&&Z._colorsTexture!==null,instancing:ze,instancingColor:ze&&Z.instanceColor!==null,instancingMorph:ze&&Z.morphTexture!==null,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ls,alphaToCoverage:!!C.alphaToCoverage,map:ht,matcap:jt,envMap:pt,envMapMode:pt&&H.mapping,envMapCubeUVHeight:ee,aoMap:mt,lightMap:wt,bumpMap:ot,normalMap:Jt,displacementMap:G,emissiveMap:Zt,normalMapObjectSpace:Jt&&C.normalMapType===jS,normalMapTangentSpace:Jt&&C.normalMapType===YS,metalnessMap:Mt,roughnessMap:Lt,anisotropy:je,anisotropyMap:de,clearcoat:U,clearcoatMap:Ke,clearcoatNormalMap:De,clearcoatRoughnessMap:Xe,dispersion:E,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:be,sheen:me,sheenColorMap:Ae,sheenRoughnessMap:He,specularMap:Ie,specularColorMap:Ue,specularIntensityMap:ct,transmission:ye,transmissionMap:X,thicknessMap:Le,gradientMap:Re,opaque:C.transparent===!1&&C.blending===Cs&&C.alphaToCoverage===!1,alphaMap:Be,alphaTest:Ee,alphaHash:xe,combine:C.combine,mapUv:ht&&R(C.map.channel),aoMapUv:mt&&R(C.aoMap.channel),lightMapUv:wt&&R(C.lightMap.channel),bumpMapUv:ot&&R(C.bumpMap.channel),normalMapUv:Jt&&R(C.normalMap.channel),displacementMapUv:G&&R(C.displacementMap.channel),emissiveMapUv:Zt&&R(C.emissiveMap.channel),metalnessMapUv:Mt&&R(C.metalnessMap.channel),roughnessMapUv:Lt&&R(C.roughnessMap.channel),anisotropyMapUv:de&&R(C.anisotropyMap.channel),clearcoatMapUv:Ke&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:De&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:be&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:He&&R(C.sheenRoughnessMap.channel),specularMapUv:Ie&&R(C.specularMap.channel),specularColorMapUv:Ue&&R(C.specularColorMap.channel),specularIntensityMapUv:ct&&R(C.specularIntensityMap.channel),transmissionMapUv:X&&R(C.transmissionMap.channel),thicknessMapUv:Le&&R(C.thicknessMap.channel),alphaMapUv:Be&&R(C.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Jt||je),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!re.attributes.uv&&(ht||Be),fog:!!le,useFog:C.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Te,skinning:Z.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:te,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:ht&&C.map.isVideoTexture===!0&&bt.getTransfer(C.map.colorSpace)===Bt,decodeVideoTextureEmissive:Zt&&C.emissiveMap.isVideoTexture===!0&&bt.getTransfer(C.emissiveMap.colorSpace)===Bt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Pi,flipSided:C.side===Xn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ce&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&C.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function x(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)w.push(V),w.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(N(w,C),D(w,C),w.push(o.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function N(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function D(C,w){h.disableAll(),w.instancing&&h.enable(0),w.instancingColor&&h.enable(1),w.instancingMorph&&h.enable(2),w.matcap&&h.enable(3),w.envMap&&h.enable(4),w.normalMapObjectSpace&&h.enable(5),w.normalMapTangentSpace&&h.enable(6),w.clearcoat&&h.enable(7),w.iridescence&&h.enable(8),w.alphaTest&&h.enable(9),w.vertexColors&&h.enable(10),w.vertexAlphas&&h.enable(11),w.vertexUv1s&&h.enable(12),w.vertexUv2s&&h.enable(13),w.vertexUv3s&&h.enable(14),w.vertexTangents&&h.enable(15),w.anisotropy&&h.enable(16),w.alphaHash&&h.enable(17),w.batching&&h.enable(18),w.dispersion&&h.enable(19),w.batchingColor&&h.enable(20),w.gradientMap&&h.enable(21),C.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),C.push(h.mask)}function O(C){const w=b[C.type];let V;if(w){const ne=Oi[w];V=Ey.clone(ne.uniforms)}else V=C.uniforms;return V}function F(C,w){let V=g.get(w);return V!==void 0?++V.usedTimes:(V=new s1(o,w,C,u),_.push(V),g.set(w,V)),V}function I(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),g.delete(C.cacheKey),C.destroy()}}function z(C){m.remove(C)}function j(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:O,acquireProgram:F,releaseProgram:I,releaseShaderCache:z,programs:_,dispose:j}}function f1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function d1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function __(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function v_(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(g,S,M,b,R,y){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:S,material:M,groupOrder:b,renderOrder:g.renderOrder,z:R,group:y},o[t]=x):(x.id=g.id,x.object=g,x.geometry=S,x.material=M,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=R,x.group=y),t++,x}function h(g,S,M,b,R,y){const x=d(g,S,M,b,R,y);M.transmission>0?r.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(g,S,M,b,R,y){const x=d(g,S,M,b,R,y);M.transmission>0?r.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,S){i.length>1&&i.sort(g||d1),r.length>1&&r.sort(S||__),l.length>1&&l.sort(S||__)}function _(){for(let g=t,S=o.length;g<S;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function h1(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new v_,o.set(r,[d])):l>=u.length?(d=new v_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function p1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new se,color:new kt};break;case"SpotLight":i={position:new se,direction:new se,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":i={color:new kt,position:new se,halfWidth:new se,halfHeight:new se};break}return o[t.id]=i,i}}}function m1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let g1=0;function _1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function v1(o){const t=new p1,i=m1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new se);const l=new se,u=new fn,d=new fn;function h(p){let _=0,g=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,b=0,R=0,y=0,x=0,N=0,D=0,O=0,F=0,I=0,z=0;p.sort(_1);for(let C=0,w=p.length;C<w;C++){const V=p[C],ne=V.color,Z=V.intensity,le=V.distance;let re=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ns?re=V.shadow.map.texture:re=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=ne.r*Z,g+=ne.g*Z,S+=ne.b*Z;else if(V.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(V.sh.coefficients[P],Z);z++}else if(V.isDirectionalLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,ee=i.get(V);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.directionalShadow[M]=ee,r.directionalShadowMap[M]=re,r.directionalShadowMatrix[M]=V.shadow.matrix,N++}r.directional[M]=P,M++}else if(V.isSpotLight){const P=t.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(ne).multiplyScalar(Z),P.distance=le,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,r.spot[R]=P;const H=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,H.updateMatrices(V),V.castShadow&&I++),r.spotLightMatrix[R]=H.matrix,V.castShadow){const ee=i.get(V);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.spotShadow[R]=ee,r.spotShadowMap[R]=re,O++}R++}else if(V.isRectAreaLight){const P=t.get(V);P.color.copy(ne).multiplyScalar(Z),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=P,y++}else if(V.isPointLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const H=V.shadow,ee=i.get(V);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,r.pointShadow[b]=ee,r.pointShadowMap[b]=re,r.pointShadowMatrix[b]=V.shadow.matrix,D++}r.point[b]=P,b++}else if(V.isHemisphereLight){const P=t.get(V);P.skyColor.copy(V.color).multiplyScalar(Z),P.groundColor.copy(V.groundColor).multiplyScalar(Z),r.hemi[x]=P,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==M||j.pointLength!==b||j.spotLength!==R||j.rectAreaLength!==y||j.hemiLength!==x||j.numDirectionalShadows!==N||j.numPointShadows!==D||j.numSpotShadows!==O||j.numSpotMaps!==F||j.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=O+F-I,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,j.directionalLength=M,j.pointLength=b,j.spotLength=R,j.rectAreaLength=y,j.hemiLength=x,j.numDirectionalShadows=N,j.numPointShadows=D,j.numSpotShadows=O,j.numSpotMaps=F,j.numLightProbes=z,r.version=g1++)}function m(p,_){let g=0,S=0,M=0,b=0,R=0;const y=_.matrixWorldInverse;for(let x=0,N=p.length;x<N;x++){const D=p[x];if(D.isDirectionalLight){const O=r.directional[g];O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),g++}else if(D.isSpotLight){const O=r.spot[M];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const O=r.rectArea[b];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(y),d.identity(),u.copy(D.matrixWorld),u.premultiply(y),d.extractRotation(u),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),b++}else if(D.isPointLight){const O=r.point[S];O.position.setFromMatrixPosition(D.matrixWorld),O.position.applyMatrix4(y),S++}else if(D.isHemisphereLight){const O=r.hemi[R];O.direction.setFromMatrixPosition(D.matrixWorld),O.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:r}}function x_(o){const t=new v1(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function x1(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new x_(o),t.set(l,[h])):u>=d.length?(h=new x_(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const S1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y1=`uniform sampler2D shadow_pass;
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
}`,M1=[new se(1,0,0),new se(-1,0,0),new se(0,1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1)],E1=[new se(0,-1,0),new se(0,-1,0),new se(0,0,1),new se(0,0,-1),new se(0,-1,0),new se(0,-1,0)],S_=new fn,Bo=new se,wd=new se;function b1(o,t,i){let r=new Q_;const l=new Ct,u=new Ct,d=new an,h=new Py,m=new zy,p={},_=i.maxTextureSize,g={[$a]:Xn,[Xn]:$a,[Pi]:Pi},S=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:S1,fragmentShader:y1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new va;b.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ri(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let x=this.type;this.render=function(I,z,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===bS&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=wc);const C=o.getRenderTarget(),w=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),ne=o.state;ne.setBlending(da),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const Z=x!==this.type;Z&&z.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(re=>re.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,re=I.length;le<re;le++){const P=I[le],H=P.shadow;if(H===void 0){st("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ee=H.getFrameExtents();if(l.multiply(ee),u.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/ee.x),l.x=u.x*ee.x,H.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/ee.y),l.y=u.y*ee.y,H.mapSize.y=u.y)),H.map===null||Z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ho){if(P.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Bi(l.x,l.y,{format:Ns,type:ma,minFilter:On,magFilter:On,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new qo(l.x,l.y,zi),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=ga,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else{P.isPointLight?(H.map=new Z_(l.x),H.map.depthTexture=new Ly(l.x,Gi)):(H.map=new Bi(l.x,l.y),H.map.depthTexture=new qo(l.x,l.y,Gi)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=ga;const Se=o.state.buffers.depth.getReversed();this.type===wc?(H.map.depthTexture.compareFunction=Se?Oh:Lh,H.map.depthTexture.minFilter=On,H.map.depthTexture.magFilter=On):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn)}H.camera.updateProjectionMatrix()}const _e=H.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<_e;Se++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,Se),o.clear();else{Se===0&&(o.setRenderTarget(H.map),o.clear());const L=H.getViewport(Se);d.set(u.x*L.x,u.y*L.y,u.x*L.z,u.y*L.w),ne.viewport(d)}if(P.isPointLight){const L=H.camera,te=H.matrix,he=P.distance||L.far;he!==L.far&&(L.far=he,L.updateProjectionMatrix()),Bo.setFromMatrixPosition(P.matrixWorld),L.position.copy(Bo),wd.copy(L.position),wd.add(M1[Se]),L.up.copy(E1[Se]),L.lookAt(wd),L.updateMatrixWorld(),te.makeTranslation(-Bo.x,-Bo.y,-Bo.z),S_.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),H._frustum.setFromProjectionMatrix(S_,L.coordinateSystem,L.reversedDepth)}else H.updateMatrices(P);r=H.getFrustum(),O(z,j,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===Ho&&N(H,j),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(C,w,V)};function N(I,z){const j=t.update(R);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Bi(l.x,l.y,{format:Ns,type:ma})),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,j,S,R,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,j,M,R,null)}function D(I,z,j,C){let w=null;const V=j.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)w=V;else if(w=j.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ne=w.uuid,Z=z.uuid;let le=p[ne];le===void 0&&(le={},p[ne]=le);let re=le[Z];re===void 0&&(re=w.clone(),le[Z]=re,z.addEventListener("dispose",F)),w=re}if(w.visible=z.visible,w.wireframe=z.wireframe,C===Ho?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:g[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ne=o.properties.get(w);ne.light=j}return w}function O(I,z,j,C,w){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===Ho)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld);const Z=t.update(I),le=I.material;if(Array.isArray(le)){const re=Z.groups;for(let P=0,H=re.length;P<H;P++){const ee=re[P],_e=le[ee.materialIndex];if(_e&&_e.visible){const Se=D(I,_e,C,w);I.onBeforeShadow(o,I,z,j,Z,Se,ee),o.renderBufferDirect(j,null,Z,Se,I,ee),I.onAfterShadow(o,I,z,j,Z,Se,ee)}}}else if(le.visible){const re=D(I,le,C,w);I.onBeforeShadow(o,I,z,j,Z,re,null),o.renderBufferDirect(j,null,Z,re,I,null),I.onAfterShadow(o,I,z,j,Z,re,null)}}const ne=I.children;for(let Z=0,le=ne.length;Z<le;Z++)O(ne[Z],z,j,C,w)}function F(I){I.target.removeEventListener("dispose",F);for(const j in p){const C=p[j],w=I.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const T1={[Ld]:Od,[Pd]:Id,[zd]:Bd,[Ds]:Fd,[Od]:Ld,[Id]:Pd,[Bd]:zd,[Fd]:Ds};function A1(o,t){function i(){let X=!1;const Le=new an;let Re=null;const Be=new an(0,0,0,0);return{setMask:function(Ee){Re!==Ee&&!X&&(o.colorMask(Ee,Ee,Ee,Ee),Re=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,xe,Ce,it,Pt){Pt===!0&&(Ee*=it,xe*=it,Ce*=it),Le.set(Ee,xe,Ce,it),Be.equals(Le)===!1&&(o.clearColor(Ee,xe,Ce,it),Be.copy(Le))},reset:function(){X=!1,Re=null,Be.set(-1,0,0,0)}}}function r(){let X=!1,Le=!1,Re=null,Be=null,Ee=null;return{setReversed:function(xe){if(Le!==xe){const Ce=t.get("EXT_clip_control");xe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Le=xe;const it=Ee;Ee=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(xe){xe?ue(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(xe){Re!==xe&&!X&&(o.depthMask(xe),Re=xe)},setFunc:function(xe){if(Le&&(xe=T1[xe]),Be!==xe){switch(xe){case Ld:o.depthFunc(o.NEVER);break;case Od:o.depthFunc(o.ALWAYS);break;case Pd:o.depthFunc(o.LESS);break;case Ds:o.depthFunc(o.LEQUAL);break;case zd:o.depthFunc(o.EQUAL);break;case Fd:o.depthFunc(o.GEQUAL);break;case Id:o.depthFunc(o.GREATER);break;case Bd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Be=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Ee!==xe&&(Le&&(xe=1-xe),o.clearDepth(xe),Ee=xe)},reset:function(){X=!1,Re=null,Be=null,Ee=null,Le=!1}}}function l(){let X=!1,Le=null,Re=null,Be=null,Ee=null,xe=null,Ce=null,it=null,Pt=null;return{setTest:function(Et){X||(Et?ue(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Et){Le!==Et&&!X&&(o.stencilMask(Et),Le=Et)},setFunc:function(Et,Dn,mi){(Re!==Et||Be!==Dn||Ee!==mi)&&(o.stencilFunc(Et,Dn,mi),Re=Et,Be=Dn,Ee=mi)},setOp:function(Et,Dn,mi){(xe!==Et||Ce!==Dn||it!==mi)&&(o.stencilOp(Et,Dn,mi),xe=Et,Ce=Dn,it=mi)},setLocked:function(Et){X=Et},setClear:function(Et){Pt!==Et&&(o.clearStencil(Et),Pt=Et)},reset:function(){X=!1,Le=null,Re=null,Be=null,Ee=null,xe=null,Ce=null,it=null,Pt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,M=[],b=null,R=!1,y=null,x=null,N=null,D=null,O=null,F=null,I=null,z=new kt(0,0,0),j=0,C=!1,w=null,V=null,ne=null,Z=null,le=null;const re=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const ee=o.getParameter(o.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),P=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),P=H>=2);let _e=null,Se={};const L=o.getParameter(o.SCISSOR_BOX),te=o.getParameter(o.VIEWPORT),he=new an().fromArray(L),Me=new an().fromArray(te);function we(X,Le,Re,Be){const Ee=new Uint8Array(4),xe=o.createTexture();o.bindTexture(X,xe),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ce=0;Ce<Re;Ce++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,Be,0,o.RGBA,o.UNSIGNED_BYTE,Ee):o.texImage2D(Le+Ce,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ee);return xe}const Q={};Q[o.TEXTURE_2D]=we(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=we(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=we(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=we(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(o.DEPTH_TEST),d.setFunc(Ds),ot(!1),Jt(Ag),ue(o.CULL_FACE),mt(da);function ue(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Te(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function ze(X,Le){return g[X]!==Le?(o.bindFramebuffer(X,Le),g[X]=Le,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Le),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function Fe(X,Le){let Re=M,Be=!1;if(X){Re=S.get(Le),Re===void 0&&(Re=[],S.set(Le,Re));const Ee=X.textures;if(Re.length!==Ee.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let xe=0,Ce=Ee.length;xe<Ce;xe++)Re[xe]=o.COLOR_ATTACHMENT0+xe;Re.length=Ee.length,Be=!0}}else Re[0]!==o.BACK&&(Re[0]=o.BACK,Be=!0);Be&&o.drawBuffers(Re)}function ht(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const jt={[Ar]:o.FUNC_ADD,[AS]:o.FUNC_SUBTRACT,[RS]:o.FUNC_REVERSE_SUBTRACT};jt[CS]=o.MIN,jt[wS]=o.MAX;const pt={[DS]:o.ZERO,[US]:o.ONE,[NS]:o.SRC_COLOR,[Ud]:o.SRC_ALPHA,[IS]:o.SRC_ALPHA_SATURATE,[zS]:o.DST_COLOR,[OS]:o.DST_ALPHA,[LS]:o.ONE_MINUS_SRC_COLOR,[Nd]:o.ONE_MINUS_SRC_ALPHA,[FS]:o.ONE_MINUS_DST_COLOR,[PS]:o.ONE_MINUS_DST_ALPHA,[BS]:o.CONSTANT_COLOR,[HS]:o.ONE_MINUS_CONSTANT_COLOR,[GS]:o.CONSTANT_ALPHA,[VS]:o.ONE_MINUS_CONSTANT_ALPHA};function mt(X,Le,Re,Be,Ee,xe,Ce,it,Pt,Et){if(X===da){R===!0&&(Te(o.BLEND),R=!1);return}if(R===!1&&(ue(o.BLEND),R=!0),X!==TS){if(X!==y||Et!==C){if((x!==Ar||O!==Ar)&&(o.blendEquation(o.FUNC_ADD),x=Ar,O=Ar),Et)switch(X){case Cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rg:o.blendFunc(o.ONE,o.ONE);break;case Cg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case wg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Rt("WebGLState: Invalid blending: ",X);break}else switch(X){case Cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Cg:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wg:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",X);break}N=null,D=null,F=null,I=null,z.set(0,0,0),j=0,y=X,C=Et}return}Ee=Ee||Le,xe=xe||Re,Ce=Ce||Be,(Le!==x||Ee!==O)&&(o.blendEquationSeparate(jt[Le],jt[Ee]),x=Le,O=Ee),(Re!==N||Be!==D||xe!==F||Ce!==I)&&(o.blendFuncSeparate(pt[Re],pt[Be],pt[xe],pt[Ce]),N=Re,D=Be,F=xe,I=Ce),(it.equals(z)===!1||Pt!==j)&&(o.blendColor(it.r,it.g,it.b,Pt),z.copy(it),j=Pt),y=X,C=!1}function wt(X,Le){X.side===Pi?Te(o.CULL_FACE):ue(o.CULL_FACE);let Re=X.side===Xn;Le&&(Re=!Re),ot(Re),X.blending===Cs&&X.transparent===!1?mt(da):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const Be=X.stencilWrite;h.setTest(Be),Be&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Zt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function Jt(X){X!==MS?(ue(o.CULL_FACE),X!==V&&(X===Ag?o.cullFace(o.BACK):X===ES?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),V=X}function G(X){X!==ne&&(P&&o.lineWidth(X),ne=X)}function Zt(X,Le,Re){X?(ue(o.POLYGON_OFFSET_FILL),(Z!==Le||le!==Re)&&(o.polygonOffset(Le,Re),Z=Le,le=Re)):Te(o.POLYGON_OFFSET_FILL)}function Mt(X){X?ue(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function Lt(X){X===void 0&&(X=o.TEXTURE0+re-1),_e!==X&&(o.activeTexture(X),_e=X)}function je(X,Le,Re){Re===void 0&&(_e===null?Re=o.TEXTURE0+re-1:Re=_e);let Be=Se[Re];Be===void 0&&(Be={type:void 0,texture:void 0},Se[Re]=Be),(Be.type!==X||Be.texture!==Le)&&(_e!==Re&&(o.activeTexture(Re),_e=Re),o.bindTexture(X,Le||Q[X]),Be.type=X,Be.texture=Le)}function U(){const X=Se[_e];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function me(){try{o.texSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function ye(){try{o.texSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function de(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ke(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function De(){try{o.texStorage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Xe(){try{o.texStorage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function nt(){try{o.texImage2D(...arguments)}catch(X){Rt("WebGLState:",X)}}function be(){try{o.texImage3D(...arguments)}catch(X){Rt("WebGLState:",X)}}function Ae(X){he.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),he.copy(X))}function He(X){Me.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Me.copy(X))}function Ie(X,Le){let Re=p.get(Le);Re===void 0&&(Re=new WeakMap,p.set(Le,Re));let Be=Re.get(X);Be===void 0&&(Be=o.getUniformBlockIndex(Le,X.name),Re.set(X,Be))}function Ue(X,Le){const Be=p.get(Le).get(X);m.get(Le)!==Be&&(o.uniformBlockBinding(Le,Be,X.__bindingPointIndex),m.set(Le,Be))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},_e=null,Se={},g={},S=new WeakMap,M=[],b=null,R=!1,y=null,x=null,N=null,D=null,O=null,F=null,I=null,z=new kt(0,0,0),j=0,C=!1,w=null,V=null,ne=null,Z=null,le=null,he.set(0,0,o.canvas.width,o.canvas.height),Me.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ue,disable:Te,bindFramebuffer:ze,drawBuffers:Fe,useProgram:ht,setBlending:mt,setMaterial:wt,setFlipSided:ot,setCullFace:Jt,setLineWidth:G,setPolygonOffset:Zt,setScissorTest:Mt,activeTexture:Lt,bindTexture:je,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:nt,texImage3D:be,updateUBOMapping:Ie,uniformBlockBinding:Ue,texStorage2D:De,texStorage3D:Xe,texSubImage2D:me,texSubImage3D:ye,compressedTexSubImage2D:de,compressedTexSubImage3D:Ke,scissor:Ae,viewport:He,reset:ct}}function R1(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,_=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return M?new OffscreenCanvas(U,E):Xo("canvas")}function R(U,E,W){let me=1;const ye=je(U);if((ye.width>W||ye.height>W)&&(me=W/Math.max(ye.width,ye.height)),me<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(me*ye.width),Ke=Math.floor(me*ye.height);g===void 0&&(g=b(de,Ke));const De=E?b(de,Ke):g;return De.width=de,De.height=Ke,De.getContext("2d").drawImage(U,0,0,de,Ke),st("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+de+"x"+Ke+")."),De}else return"data"in U&&st("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(U,E,W,me,ye=!1){if(U!==null){if(o[U]!==void 0)return o[U];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=E;if(E===o.RED&&(W===o.FLOAT&&(de=o.R32F),W===o.HALF_FLOAT&&(de=o.R16F),W===o.UNSIGNED_BYTE&&(de=o.R8)),E===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(de=o.R8UI),W===o.UNSIGNED_SHORT&&(de=o.R16UI),W===o.UNSIGNED_INT&&(de=o.R32UI),W===o.BYTE&&(de=o.R8I),W===o.SHORT&&(de=o.R16I),W===o.INT&&(de=o.R32I)),E===o.RG&&(W===o.FLOAT&&(de=o.RG32F),W===o.HALF_FLOAT&&(de=o.RG16F),W===o.UNSIGNED_BYTE&&(de=o.RG8)),E===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(de=o.RG8UI),W===o.UNSIGNED_SHORT&&(de=o.RG16UI),W===o.UNSIGNED_INT&&(de=o.RG32UI),W===o.BYTE&&(de=o.RG8I),W===o.SHORT&&(de=o.RG16I),W===o.INT&&(de=o.RG32I)),E===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(de=o.RGB8UI),W===o.UNSIGNED_SHORT&&(de=o.RGB16UI),W===o.UNSIGNED_INT&&(de=o.RGB32UI),W===o.BYTE&&(de=o.RGB8I),W===o.SHORT&&(de=o.RGB16I),W===o.INT&&(de=o.RGB32I)),E===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(de=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(de=o.RGBA16UI),W===o.UNSIGNED_INT&&(de=o.RGBA32UI),W===o.BYTE&&(de=o.RGBA8I),W===o.SHORT&&(de=o.RGBA16I),W===o.INT&&(de=o.RGBA32I)),E===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(de=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(de=o.R11F_G11F_B10F)),E===o.RGBA){const Ke=ye?Pc:bt.getTransfer(me);W===o.FLOAT&&(de=o.RGBA32F),W===o.HALF_FLOAT&&(de=o.RGBA16F),W===o.UNSIGNED_BYTE&&(de=Ke===Bt?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(de=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(de=o.RGB5_A1)}return(de===o.R16F||de===o.R32F||de===o.RG16F||de===o.RG32F||de===o.RGBA16F||de===o.RGBA32F)&&t.get("EXT_color_buffer_float"),de}function O(U,E){let W;return U?E===null||E===Gi||E===ko?W=o.DEPTH24_STENCIL8:E===zi?W=o.DEPTH32F_STENCIL8:E===Vo&&(W=o.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===ko?W=o.DEPTH_COMPONENT24:E===zi?W=o.DEPTH_COMPONENT32F:E===Vo&&(W=o.DEPTH_COMPONENT16),W}function F(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Cn&&U.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function I(U){const E=U.target;E.removeEventListener("dispose",I),j(E),E.isVideoTexture&&_.delete(E)}function z(U){const E=U.target;E.removeEventListener("dispose",z),w(E)}function j(U){const E=r.get(U);if(E.__webglInit===void 0)return;const W=U.source,me=S.get(W);if(me){const ye=me[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&C(U),Object.keys(me).length===0&&S.delete(W)}r.remove(U)}function C(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const W=U.source,me=S.get(W);delete me[E.__cacheKey],d.memory.textures--}function w(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(E.__webglFramebuffer[me]))for(let ye=0;ye<E.__webglFramebuffer[me].length;ye++)o.deleteFramebuffer(E.__webglFramebuffer[me][ye]);else o.deleteFramebuffer(E.__webglFramebuffer[me]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[me])}else{if(Array.isArray(E.__webglFramebuffer))for(let me=0;me<E.__webglFramebuffer.length;me++)o.deleteFramebuffer(E.__webglFramebuffer[me]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let me=0;me<E.__webglColorRenderbuffer.length;me++)E.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[me]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=U.textures;for(let me=0,ye=W.length;me<ye;me++){const de=r.get(W[me]);de.__webglTexture&&(o.deleteTexture(de.__webglTexture),d.memory.textures--),r.remove(W[me])}r.remove(U)}let V=0;function ne(){V=0}function Z(){const U=V;return U>=l.maxTextures&&st("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function le(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function re(U,E){const W=r.get(U);if(U.isVideoTexture&&Mt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&W.__version!==U.version){const me=U.image;if(me===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,U,E);return}}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+E)}function P(U,E){const W=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){Q(W,U,E);return}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+E)}function H(U,E){const W=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){Q(W,U,E);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+E)}function ee(U,E){const W=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&W.__version!==U.version){ue(W,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+E)}const _e={[Vd]:o.REPEAT,[fa]:o.CLAMP_TO_EDGE,[kd]:o.MIRRORED_REPEAT},Se={[Cn]:o.NEAREST,[WS]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[On]:o.LINEAR,[Jf]:o.LINEAR_MIPMAP_NEAREST,[Cr]:o.LINEAR_MIPMAP_LINEAR},L={[ZS]:o.NEVER,[ey]:o.ALWAYS,[KS]:o.LESS,[Lh]:o.LEQUAL,[QS]:o.EQUAL,[Oh]:o.GEQUAL,[JS]:o.GREATER,[$S]:o.NOTEQUAL};function te(U,E){if(E.type===zi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===Jf||E.magFilter===lc||E.magFilter===Cr||E.minFilter===On||E.minFilter===Jf||E.minFilter===lc||E.minFilter===Cr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,_e[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,_e[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,_e[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Se[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==lc&&E.minFilter!==Cr||E.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function he(U,E){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",I));const me=E.source;let ye=S.get(me);ye===void 0&&(ye={},S.set(me,ye));const de=le(E);if(de!==U.__cacheKey){ye[de]===void 0&&(ye[de]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,W=!0),ye[de].usedTimes++;const Ke=ye[U.__cacheKey];Ke!==void 0&&(ye[U.__cacheKey].usedTimes--,Ke.usedTimes===0&&C(E)),U.__cacheKey=de,U.__webglTexture=ye[de].texture}return W}function Me(U,E,W){return Math.floor(Math.floor(U/W)/E)}function we(U,E,W,me){const de=U.updateRanges;if(de.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,W,me,E.data);else{de.sort((be,Ae)=>be.start-Ae.start);let Ke=0;for(let be=1;be<de.length;be++){const Ae=de[Ke],He=de[be],Ie=Ae.start+Ae.count,Ue=Me(He.start,E.width,4),ct=Me(Ae.start,E.width,4);He.start<=Ie+1&&Ue===ct&&Me(He.start+He.count-1,E.width,4)===Ue?Ae.count=Math.max(Ae.count,He.start+He.count-Ae.start):(++Ke,de[Ke]=He)}de.length=Ke+1;const De=o.getParameter(o.UNPACK_ROW_LENGTH),Xe=o.getParameter(o.UNPACK_SKIP_PIXELS),nt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let be=0,Ae=de.length;be<Ae;be++){const He=de[be],Ie=Math.floor(He.start/4),Ue=Math.ceil(He.count/4),ct=Ie%E.width,X=Math.floor(Ie/E.width),Le=Ue,Re=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ct,X,Le,Re,W,me,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,De),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xe),o.pixelStorei(o.UNPACK_SKIP_ROWS,nt)}}function Q(U,E,W){let me=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=o.TEXTURE_3D);const ye=he(U,E),de=E.source;i.bindTexture(me,U.__webglTexture,o.TEXTURE0+W);const Ke=r.get(de);if(de.version!==Ke.__version||ye===!0){i.activeTexture(o.TEXTURE0+W);const De=bt.getPrimaries(bt.workingColorSpace),Xe=E.colorSpace===Qa?null:bt.getPrimaries(E.colorSpace),nt=E.colorSpace===Qa||De===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let be=R(E.image,!1,l.maxTextureSize);be=Lt(E,be);const Ae=u.convert(E.format,E.colorSpace),He=u.convert(E.type);let Ie=D(E.internalFormat,Ae,He,E.colorSpace,E.isVideoTexture);te(me,E);let Ue;const ct=E.mipmaps,X=E.isVideoTexture!==!0,Le=Ke.__version===void 0||ye===!0,Re=de.dataReady,Be=F(E,be);if(E.isDepthTexture)Ie=O(E.format===wr,E.type),Le&&(X?i.texStorage2D(o.TEXTURE_2D,1,Ie,be.width,be.height):i.texImage2D(o.TEXTURE_2D,0,Ie,be.width,be.height,0,Ae,He,null));else if(E.isDataTexture)if(ct.length>0){X&&Le&&i.texStorage2D(o.TEXTURE_2D,Be,Ie,ct[0].width,ct[0].height);for(let Ee=0,xe=ct.length;Ee<xe;Ee++)Ue=ct[Ee],X?Re&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ae,He,Ue.data):i.texImage2D(o.TEXTURE_2D,Ee,Ie,Ue.width,Ue.height,0,Ae,He,Ue.data);E.generateMipmaps=!1}else X?(Le&&i.texStorage2D(o.TEXTURE_2D,Be,Ie,be.width,be.height),Re&&we(E,be,Ae,He)):i.texImage2D(o.TEXTURE_2D,0,Ie,be.width,be.height,0,Ae,He,be.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Ie,ct[0].width,ct[0].height,be.depth);for(let Ee=0,xe=ct.length;Ee<xe;Ee++)if(Ue=ct[Ee],E.format!==Ai)if(Ae!==null)if(X){if(Re)if(E.layerUpdates.size>0){const Ce=Qg(Ue.width,Ue.height,E.format,E.type);for(const it of E.layerUpdates){const Pt=Ue.data.subarray(it*Ce/Ue.data.BYTES_PER_ELEMENT,(it+1)*Ce/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,it,Ue.width,Ue.height,1,Ae,Pt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Ue.width,Ue.height,be.depth,Ae,Ue.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ee,Ie,Ue.width,Ue.height,be.depth,0,Ue.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Re&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,Ue.width,Ue.height,be.depth,Ae,He,Ue.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ee,Ie,Ue.width,Ue.height,be.depth,0,Ae,He,Ue.data)}else{X&&Le&&i.texStorage2D(o.TEXTURE_2D,Be,Ie,ct[0].width,ct[0].height);for(let Ee=0,xe=ct.length;Ee<xe;Ee++)Ue=ct[Ee],E.format!==Ai?Ae!==null?X?Re&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ae,Ue.data):i.compressedTexImage2D(o.TEXTURE_2D,Ee,Ie,Ue.width,Ue.height,0,Ue.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Re&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,Ae,He,Ue.data):i.texImage2D(o.TEXTURE_2D,Ee,Ie,Ue.width,Ue.height,0,Ae,He,Ue.data)}else if(E.isDataArrayTexture)if(X){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Be,Ie,be.width,be.height,be.depth),Re)if(E.layerUpdates.size>0){const Ee=Qg(be.width,be.height,E.format,E.type);for(const xe of E.layerUpdates){const Ce=be.data.subarray(xe*Ee/be.data.BYTES_PER_ELEMENT,(xe+1)*Ee/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xe,be.width,be.height,1,Ae,He,Ce)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ae,He,be.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ie,be.width,be.height,be.depth,0,Ae,He,be.data);else if(E.isData3DTexture)X?(Le&&i.texStorage3D(o.TEXTURE_3D,Be,Ie,be.width,be.height,be.depth),Re&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ae,He,be.data)):i.texImage3D(o.TEXTURE_3D,0,Ie,be.width,be.height,be.depth,0,Ae,He,be.data);else if(E.isFramebufferTexture){if(Le)if(X)i.texStorage2D(o.TEXTURE_2D,Be,Ie,be.width,be.height);else{let Ee=be.width,xe=be.height;for(let Ce=0;Ce<Be;Ce++)i.texImage2D(o.TEXTURE_2D,Ce,Ie,Ee,xe,0,Ae,He,null),Ee>>=1,xe>>=1}}else if(ct.length>0){if(X&&Le){const Ee=je(ct[0]);i.texStorage2D(o.TEXTURE_2D,Be,Ie,Ee.width,Ee.height)}for(let Ee=0,xe=ct.length;Ee<xe;Ee++)Ue=ct[Ee],X?Re&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Ae,He,Ue):i.texImage2D(o.TEXTURE_2D,Ee,Ie,Ae,He,Ue);E.generateMipmaps=!1}else if(X){if(Le){const Ee=je(be);i.texStorage2D(o.TEXTURE_2D,Be,Ie,Ee.width,Ee.height)}Re&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae,He,be)}else i.texImage2D(o.TEXTURE_2D,0,Ie,Ae,He,be);y(E)&&x(me),Ke.__version=de.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ue(U,E,W){if(E.image.length!==6)return;const me=he(U,E),ye=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+W);const de=r.get(ye);if(ye.version!==de.__version||me===!0){i.activeTexture(o.TEXTURE0+W);const Ke=bt.getPrimaries(bt.workingColorSpace),De=E.colorSpace===Qa?null:bt.getPrimaries(E.colorSpace),Xe=E.colorSpace===Qa||Ke===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let xe=0;xe<6;xe++)!nt&&!be?Ae[xe]=R(E.image[xe],!0,l.maxCubemapSize):Ae[xe]=be?E.image[xe].image:E.image[xe],Ae[xe]=Lt(E,Ae[xe]);const He=Ae[0],Ie=u.convert(E.format,E.colorSpace),Ue=u.convert(E.type),ct=D(E.internalFormat,Ie,Ue,E.colorSpace),X=E.isVideoTexture!==!0,Le=de.__version===void 0||me===!0,Re=ye.dataReady;let Be=F(E,He);te(o.TEXTURE_CUBE_MAP,E);let Ee;if(nt){X&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,ct,He.width,He.height);for(let xe=0;xe<6;xe++){Ee=Ae[xe].mipmaps;for(let Ce=0;Ce<Ee.length;Ce++){const it=Ee[Ce];E.format!==Ai?Ie!==null?X?Re&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,it.width,it.height,Ie,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ct,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,it.width,it.height,Ie,Ue,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,ct,it.width,it.height,0,Ie,Ue,it.data)}}}else{if(Ee=E.mipmaps,X&&Le){Ee.length>0&&Be++;const xe=je(Ae[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Be,ct,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(be){X?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ae[xe].width,Ae[xe].height,Ie,Ue,Ae[xe].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Ae[xe].width,Ae[xe].height,0,Ie,Ue,Ae[xe].data);for(let Ce=0;Ce<Ee.length;Ce++){const Pt=Ee[Ce].image[xe].image;X?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,Pt.width,Pt.height,Ie,Ue,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ct,Pt.width,Pt.height,0,Ie,Ue,Pt.data)}}else{X?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie,Ue,Ae[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ct,Ie,Ue,Ae[xe]);for(let Ce=0;Ce<Ee.length;Ce++){const it=Ee[Ce];X?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,Ie,Ue,it.image[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,ct,Ie,Ue,it.image[xe])}}}y(E)&&x(o.TEXTURE_CUBE_MAP),de.__version=ye.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Te(U,E,W,me,ye,de){const Ke=u.convert(W.format,W.colorSpace),De=u.convert(W.type),Xe=D(W.internalFormat,Ke,De,W.colorSpace),nt=r.get(E),be=r.get(W);if(be.__renderTarget=E,!nt.__hasExternalTextures){const Ae=Math.max(1,E.width>>de),He=Math.max(1,E.height>>de);ye===o.TEXTURE_3D||ye===o.TEXTURE_2D_ARRAY?i.texImage3D(ye,de,Xe,Ae,He,E.depth,0,Ke,De,null):i.texImage2D(ye,de,Xe,Ae,He,0,Ke,De,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Zt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,ye,be.__webglTexture,0,G(E)):(ye===o.TEXTURE_2D||ye>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,ye,be.__webglTexture,de),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ze(U,E,W){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const me=E.depthTexture,ye=me&&me.isDepthTexture?me.type:null,de=O(E.stencilBuffer,ye),Ke=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Zt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),de,E.width,E.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),de,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,de,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ke,o.RENDERBUFFER,U)}else{const me=E.textures;for(let ye=0;ye<me.length;ye++){const de=me[ye],Ke=u.convert(de.format,de.colorSpace),De=u.convert(de.type),Xe=D(de.internalFormat,Ke,De,de.colorSpace);Zt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),Xe,E.width,E.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),Xe,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xe,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Fe(U,E,W){const me=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(E.depthTexture);if(ye.__renderTarget=E,(!ye.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),me){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),ye.__webglTexture===void 0){ye.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ye.__webglTexture),te(o.TEXTURE_CUBE_MAP,E.depthTexture);const nt=u.convert(E.depthTexture.format),be=u.convert(E.depthTexture.type);let Ae;E.depthTexture.format===ga?Ae=o.DEPTH_COMPONENT24:E.depthTexture.format===wr&&(Ae=o.DEPTH24_STENCIL8);for(let He=0;He<6;He++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ae,E.width,E.height,0,nt,be,null)}}else re(E.depthTexture,0);const de=ye.__webglTexture,Ke=G(E),De=me?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Xe=E.depthTexture.format===wr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ga)Zt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,De,de,0,Ke):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,De,de,0);else if(E.depthTexture.format===wr)Zt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xe,De,de,0,Ke):o.framebufferTexture2D(o.FRAMEBUFFER,Xe,De,de,0);else throw new Error("Unknown depthTexture format")}function ht(U){const E=r.get(U),W=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const me=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),me){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,me.removeEventListener("dispose",ye)};me.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=me}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let me=0;me<6;me++)Fe(E.__webglFramebuffer[me],U,me);else{const me=U.texture.mipmaps;me&&me.length>0?Fe(E.__webglFramebuffer[0],U,0):Fe(E.__webglFramebuffer,U,0)}else if(W){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]===void 0)E.__webglDepthbuffer[me]=o.createRenderbuffer(),ze(E.__webglDepthbuffer[me],U,!1);else{const ye=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,de)}}else{const me=U.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ze(E.__webglDepthbuffer,U,!1);else{const ye=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,de),o.framebufferRenderbuffer(o.FRAMEBUFFER,ye,o.RENDERBUFFER,de)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(U,E,W){const me=r.get(U);E!==void 0&&Te(me.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&ht(U)}function pt(U){const E=U.texture,W=r.get(U),me=r.get(E);U.addEventListener("dispose",z);const ye=U.textures,de=U.isWebGLCubeRenderTarget===!0,Ke=ye.length>1;if(Ke||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=E.version,d.memory.textures++),de){W.__webglFramebuffer=[];for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[De]=[];for(let Xe=0;Xe<E.mipmaps.length;Xe++)W.__webglFramebuffer[De][Xe]=o.createFramebuffer()}else W.__webglFramebuffer[De]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let De=0;De<E.mipmaps.length;De++)W.__webglFramebuffer[De]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Ke)for(let De=0,Xe=ye.length;De<Xe;De++){const nt=r.get(ye[De]);nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture(),d.memory.textures++)}if(U.samples>0&&Zt(U)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let De=0;De<ye.length;De++){const Xe=ye[De];W.__webglColorRenderbuffer[De]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[De]);const nt=u.convert(Xe.format,Xe.colorSpace),be=u.convert(Xe.type),Ae=D(Xe.internalFormat,nt,be,Xe.colorSpace,U.isXRRenderTarget===!0),He=G(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,He,Ae,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,W.__webglColorRenderbuffer[De])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),ze(W.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(de){i.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),te(o.TEXTURE_CUBE_MAP,E);for(let De=0;De<6;De++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)Te(W.__webglFramebuffer[De][Xe],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,Xe);else Te(W.__webglFramebuffer[De],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);y(E)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let De=0,Xe=ye.length;De<Xe;De++){const nt=ye[De],be=r.get(nt);let Ae=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ae,be.__webglTexture),te(Ae,nt),Te(W.__webglFramebuffer,U,nt,o.COLOR_ATTACHMENT0+De,Ae,0),y(nt)&&x(Ae)}i.unbindTexture()}else{let De=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(De=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(De,me.__webglTexture),te(De,E),E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)Te(W.__webglFramebuffer[Xe],U,E,o.COLOR_ATTACHMENT0,De,Xe);else Te(W.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,De,0);y(E)&&x(De),i.unbindTexture()}U.depthBuffer&&ht(U)}function mt(U){const E=U.textures;for(let W=0,me=E.length;W<me;W++){const ye=E[W];if(y(ye)){const de=N(U),Ke=r.get(ye).__webglTexture;i.bindTexture(de,Ke),x(de),i.unbindTexture()}}}const wt=[],ot=[];function Jt(U){if(U.samples>0){if(Zt(U)===!1){const E=U.textures,W=U.width,me=U.height;let ye=o.COLOR_BUFFER_BIT;const de=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ke=r.get(U),De=E.length>1;if(De)for(let nt=0;nt<E.length;nt++)i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Xe=U.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let nt=0;nt<E.length;nt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ye|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ye|=o.STENCIL_BUFFER_BIT)),De){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const be=r.get(E[nt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,be,0)}o.blitFramebuffer(0,0,W,me,0,0,W,me,ye,o.NEAREST),m===!0&&(wt.length=0,ot.length=0,wt.push(o.COLOR_ATTACHMENT0+nt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(wt.push(de),ot.push(de),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ot)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,wt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),De)for(let nt=0;nt<E.length;nt++){i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const be=r.get(E[nt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+nt,o.TEXTURE_2D,be,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function G(U){return Math.min(l.maxSamples,U.samples)}function Zt(U){const E=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(U){const E=d.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Lt(U,E){const W=U.colorSpace,me=U.format,ye=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==Ls&&W!==Qa&&(bt.getTransfer(W)===Bt?(me!==Ai||ye!==hi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",W)),E}function je(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=ne,this.setTexture2D=re,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=jt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function C1(o,t){function i(r,l=Qa){let u;const d=bt.getTransfer(l);if(r===hi)return o.UNSIGNED_BYTE;if(r===Ch)return o.UNSIGNED_SHORT_4_4_4_4;if(r===wh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===O_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===P_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===N_)return o.BYTE;if(r===L_)return o.SHORT;if(r===Vo)return o.UNSIGNED_SHORT;if(r===Rh)return o.INT;if(r===Gi)return o.UNSIGNED_INT;if(r===zi)return o.FLOAT;if(r===ma)return o.HALF_FLOAT;if(r===z_)return o.ALPHA;if(r===F_)return o.RGB;if(r===Ai)return o.RGBA;if(r===ga)return o.DEPTH_COMPONENT;if(r===wr)return o.DEPTH_STENCIL;if(r===I_)return o.RED;if(r===Dh)return o.RED_INTEGER;if(r===Ns)return o.RG;if(r===Uh)return o.RG_INTEGER;if(r===Nh)return o.RGBA_INTEGER;if(r===Dc||r===Uc||r===Nc||r===Lc)if(d===Bt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xd||r===Wd||r===qd||r===Yd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Xd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===eh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===jd||r===Zd)return d===Bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Kd)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Qd)return u.COMPRESSED_R11_EAC;if(r===Jd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===$d)return u.COMPRESSED_RG11_EAC;if(r===eh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===th||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===th)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ih)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ah)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===oh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ch)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ph)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mh||r===gh||r===_h)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===mh)return d===Bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vh||r===xh||r===Sh||r===yh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===vh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ko?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const w1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D1=`
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

}`;class U1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new J_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new pi({vertexShader:w1,fragmentShader:D1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new zs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N1 extends Ps{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,g=null,S=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new U1,x={},N=i.getContextAttributes();let D=null,O=null;const F=[],I=[],z=new Ct;let j=null;const C=new bi;C.viewport=new an;const w=new bi;w.viewport=new an;const V=[C,w],ne=new Gy;let Z=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=F[Q];return ue===void 0&&(ue=new yd,F[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=F[Q];return ue===void 0&&(ue=new yd,F[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=F[Q];return ue===void 0&&(ue=new yd,F[Q]=ue),ue.getHandSpace()};function re(Q){const ue=I.indexOf(Q.inputSource);if(ue===-1)return;const Te=F[ue];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,p||d),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function P(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let Q=0;Q<F.length;Q++){const ue=I[Q];ue!==null&&(I[Q]=null,F[Q].disconnect(ue))}Z=null,le=null,y.reset();for(const Q in x)delete x[Q];t.setRenderTarget(D),M=null,S=null,g=null,l=null,O=null,we.stop(),r.isPresenting=!1,t.setPixelRatio(j),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),N.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ze=null,Fe=null;N.depth&&(Fe=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=N.stencil?wr:ga,ze=N.stencil?ko:Gi);const ht={colorFormat:i.RGBA8,depthFormat:Fe,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(ht),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),O=new Bi(S.textureWidth,S.textureHeight,{format:Ai,type:hi,depthTexture:new qo(S.textureWidth,S.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Te={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),O=new Bi(M.framebufferWidth,M.framebufferHeight,{format:Ai,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),we.setContext(l),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(Q){for(let ue=0;ue<Q.removed.length;ue++){const Te=Q.removed[ue],ze=I.indexOf(Te);ze>=0&&(I[ze]=null,F[ze].disconnect(Te))}for(let ue=0;ue<Q.added.length;ue++){const Te=Q.added[ue];let ze=I.indexOf(Te);if(ze===-1){for(let ht=0;ht<F.length;ht++)if(ht>=I.length){I.push(Te),ze=ht;break}else if(I[ht]===null){I[ht]=Te,ze=ht;break}if(ze===-1)break}const Fe=F[ze];Fe&&Fe.connect(Te)}}const ee=new se,_e=new se;function Se(Q,ue,Te){ee.setFromMatrixPosition(ue.matrixWorld),_e.setFromMatrixPosition(Te.matrixWorld);const ze=ee.distanceTo(_e),Fe=ue.projectionMatrix.elements,ht=Te.projectionMatrix.elements,jt=Fe[14]/(Fe[10]-1),pt=Fe[14]/(Fe[10]+1),mt=(Fe[9]+1)/Fe[5],wt=(Fe[9]-1)/Fe[5],ot=(Fe[8]-1)/Fe[0],Jt=(ht[8]+1)/ht[0],G=jt*ot,Zt=jt*Jt,Mt=ze/(-ot+Jt),Lt=Mt*-ot;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Lt),Q.translateZ(Mt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Fe[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const je=jt+Mt,U=pt+Mt,E=G-Lt,W=Zt+(ze-Lt),me=mt*pt/U*je,ye=wt*pt/U*je;Q.projectionMatrix.makePerspective(E,W,me,ye,je,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function L(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let ue=Q.near,Te=Q.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),ne.near=w.near=C.near=ue,ne.far=w.far=C.far=Te,(Z!==ne.near||le!==ne.far)&&(l.updateRenderState({depthNear:ne.near,depthFar:ne.far}),Z=ne.near,le=ne.far),ne.layers.mask=Q.layers.mask|6,C.layers.mask=ne.layers.mask&3,w.layers.mask=ne.layers.mask&5;const ze=Q.parent,Fe=ne.cameras;L(ne,ze);for(let ht=0;ht<Fe.length;ht++)L(Fe[ht],ze);Fe.length===2?Se(ne,C,w):ne.projectionMatrix.copy(C.projectionMatrix),te(Q,ne,ze)};function te(Q,ue,Te){Te===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Mh*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Q){m=Q,S!==null&&(S.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ne)},this.getCameraTexture=function(Q){return x[Q]};let he=null;function Me(Q,ue){if(_=ue.getViewerPose(p||d),b=ue,_!==null){const Te=_.views;M!==null&&(t.setRenderTargetFramebuffer(O,M.framebuffer),t.setRenderTarget(O));let ze=!1;Te.length!==ne.cameras.length&&(ne.cameras.length=0,ze=!0);for(let pt=0;pt<Te.length;pt++){const mt=Te[pt];let wt=null;if(M!==null)wt=M.getViewport(mt);else{const Jt=g.getViewSubImage(S,mt);wt=Jt.viewport,pt===0&&(t.setRenderTargetTextures(O,Jt.colorTexture,Jt.depthStencilTexture),t.setRenderTarget(O))}let ot=V[pt];ot===void 0&&(ot=new bi,ot.layers.enable(pt),ot.viewport=new an,V[pt]=ot),ot.matrix.fromArray(mt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(mt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(wt.x,wt.y,wt.width,wt.height),pt===0&&(ne.matrix.copy(ot.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),ze===!0&&ne.cameras.push(ot)}const Fe=l.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const pt=g.getDepthInformation(Te[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,l.renderState)}if(Fe&&Fe.includes("camera-access")&&R){t.state.unbindTexture(),g=r.getBinding();for(let pt=0;pt<Te.length;pt++){const mt=Te[pt].camera;if(mt){let wt=x[mt];wt||(wt=new J_,x[mt]=wt);const ot=g.getCameraImage(mt);wt.sourceTexture=ot}}}}for(let Te=0;Te<F.length;Te++){const ze=I[Te],Fe=F[Te];ze!==null&&Fe!==void 0&&Fe.update(ze,ue,p||d)}he&&he(Q,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),b=null}const we=new $_;we.setAnimationLoop(Me),this.setAnimationLoop=function(Q){he=Q},this.dispose=function(){}}}const Er=new _a,L1=new fn;function O1(o,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,q_(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,N,D,O){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),g(y,x)):x.isMeshPhongMaterial?(u(y,x),_(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,O)):x.isMeshMatcapMaterial?(u(y,x),b(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),R(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,N,D):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Xn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Xn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const N=t.get(x),D=N.envMap,O=N.envMapRotation;D&&(y.envMap.value=D,Er.copy(O),Er.x*=-1,Er.y*=-1,Er.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(L1.makeRotationFromEuler(Er)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,N,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*N,y.scale.value=D*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,N){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const N=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function P1(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,D){const O=D.program;r.uniformBlockBinding(N,O)}function p(N,D){let O=l[N.id];O===void 0&&(b(N),O=_(N),l[N.id]=O,N.addEventListener("dispose",y));const F=D.program;r.updateUBOMapping(N,F);const I=t.render.frame;u[N.id]!==I&&(S(N),u[N.id]=I)}function _(N){const D=g();N.__bindingPointIndex=D;const O=o.createBuffer(),F=N.__size,I=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,F,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,O),O}function g(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(N){const D=l[N.id],O=N.uniforms,F=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let I=0,z=O.length;I<z;I++){const j=Array.isArray(O[I])?O[I]:[O[I]];for(let C=0,w=j.length;C<w;C++){const V=j[C];if(M(V,I,C,F)===!0){const ne=V.__offset,Z=Array.isArray(V.value)?V.value:[V.value];let le=0;for(let re=0;re<Z.length;re++){const P=Z[re],H=R(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ne+le,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,le),le+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ne,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,D,O,F){const I=N.value,z=D+"_"+O;if(F[z]===void 0)return typeof I=="number"||typeof I=="boolean"?F[z]=I:F[z]=I.clone(),!0;{const j=F[z];if(typeof I=="number"||typeof I=="boolean"){if(j!==I)return F[z]=I,!0}else if(j.equals(I)===!1)return j.copy(I),!0}return!1}function b(N){const D=N.uniforms;let O=0;const F=16;for(let z=0,j=D.length;z<j;z++){const C=Array.isArray(D[z])?D[z]:[D[z]];for(let w=0,V=C.length;w<V;w++){const ne=C[w],Z=Array.isArray(ne.value)?ne.value:[ne.value];for(let le=0,re=Z.length;le<re;le++){const P=Z[le],H=R(P),ee=O%F,_e=ee%H.boundary,Se=ee+_e;O+=_e,Se!==0&&F-Se<H.storage&&(O+=F-Se),ne.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=O,O+=H.storage}}}const I=O%F;return I>0&&(O+=F-I),N.__size=O,N.__cache={},this}function R(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",N),D}function y(N){const D=N.target;D.removeEventListener("dispose",y);const O=d.indexOf(D.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function x(){for(const N in l)o.deleteBuffer(l[N]);d=[],l={},u={}}return{bind:m,update:p,dispose:x}}const z1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function F1(){return Li===null&&(Li=new Cy(z1,16,16,Ns,ma),Li.name="DFG_LUT",Li.minFilter=On,Li.magFilter=On,Li.wrapS=fa,Li.wrapT=fa,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class av{constructor(t={}){const{canvas:i=ty(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:M=hi}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const R=M,y=new Set([Nh,Uh,Dh]),x=new Set([hi,Gi,Vo,ko,Ch,wh]),N=new Uint32Array(4),D=new Int32Array(4);let O=null,F=null;const I=[],z=[];let j=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=di;let V=0,ne=0,Z=null,le=-1,re=null;const P=new an,H=new an;let ee=null;const _e=new kt(0);let Se=0,L=i.width,te=i.height,he=1,Me=null,we=null;const Q=new an(0,0,L,te),ue=new an(0,0,L,te);let Te=!1;const ze=new Q_;let Fe=!1,ht=!1;const jt=new fn,pt=new se,mt=new an,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Jt(){return Z===null?he:1}let G=r;function Zt(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ah}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),G===null){const q="webgl2";if(G=Zt(q,A),G===null)throw Zt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Rt("WebGLRenderer: "+A.message),A}let Mt,Lt,je,U,E,W,me,ye,de,Ke,De,Xe,nt,be,Ae,He,Ie,Ue,ct,X,Le,Re,Be,Ee;function xe(){Mt=new Fb(G),Mt.init(),Re=new C1(G,Mt),Lt=new Cb(G,Mt,t,Re),je=new A1(G,Mt),Lt.reversedDepthBuffer&&S&&je.buffers.depth.setReversed(!0),U=new Hb(G),E=new f1,W=new R1(G,Mt,je,E,Lt,Re,U),me=new Db(C),ye=new zb(C),de=new Xy(G),Be=new Ab(G,de),Ke=new Ib(G,de,U,Be),De=new Vb(G,Ke,de,U),ct=new Gb(G,Lt,W),He=new wb(E),Xe=new u1(C,me,ye,Mt,Lt,Be,He),nt=new O1(C,E),be=new h1,Ae=new x1(Mt),Ue=new Tb(C,me,ye,je,De,b,m),Ie=new b1(C,De,Lt),Ee=new P1(G,U,Lt,je),X=new Rb(G,Mt,U),Le=new Bb(G,Mt,U),U.programs=Xe.programs,C.capabilities=Lt,C.extensions=Mt,C.properties=E,C.renderLists=be,C.shadowMap=Ie,C.state=je,C.info=U}xe(),R!==hi&&(j=new Xb(R,i.width,i.height,l,u));const Ce=new N1(C,G);this.xr=Ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(L,te,!1))},this.getSize=function(A){return A.set(L,te)},this.setSize=function(A,q,oe=!0){if(Ce.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,te=q,i.width=Math.floor(A*he),i.height=Math.floor(q*he),oe===!0&&(i.style.width=A+"px",i.style.height=q+"px"),j!==null&&j.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(L*he,te*he).floor()},this.setDrawingBufferSize=function(A,q,oe){L=A,te=q,he=oe,i.width=Math.floor(A*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(R===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,q,oe,ie){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,q,oe,ie),je.viewport(P.copy(Q).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,q,oe,ie){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,q,oe,ie),je.scissor(H.copy(ue).multiplyScalar(he).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){je.setScissorTest(Te=A)},this.setOpaqueSort=function(A){Me=A},this.setTransparentSort=function(A){we=A},this.getClearColor=function(A){return A.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,oe=!0){let ie=0;if(A){let K=!1;if(Z!==null){const Ne=Z.texture.format;K=y.has(Ne)}if(K){const Ne=Z.texture.type,Ge=x.has(Ne),Oe=Ue.getClearColor(),Ve=Ue.getClearAlpha(),We=Oe.r,$e=Oe.g,qe=Oe.b;Ge?(N[0]=We,N[1]=$e,N[2]=qe,N[3]=Ve,G.clearBufferuiv(G.COLOR,0,N)):(D[0]=We,D[1]=$e,D[2]=qe,D[3]=Ve,G.clearBufferiv(G.COLOR,0,D))}else ie|=G.COLOR_BUFFER_BIT}q&&(ie|=G.DEPTH_BUFFER_BIT),oe&&(ie|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),Ue.dispose(),be.dispose(),Ae.dispose(),E.dispose(),me.dispose(),ye.dispose(),De.dispose(),Be.dispose(),Ee.dispose(),Xe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Nr),Ce.removeEventListener("sessionend",Hs),Ci.stop()};function it(A){A.preventDefault(),Og("WebGLRenderer: Context Lost."),w=!0}function Pt(){Og("WebGLRenderer: Context Restored."),w=!1;const A=U.autoReset,q=Ie.enabled,oe=Ie.autoUpdate,ie=Ie.needsUpdate,K=Ie.type;xe(),U.autoReset=A,Ie.enabled=q,Ie.autoUpdate=oe,Ie.needsUpdate=ie,Ie.type=K}function Et(A){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Dn(A){const q=A.target;q.removeEventListener("dispose",Dn),mi(q)}function mi(A){Qo(A),E.remove(A)}function Qo(A){const q=E.get(A).programs;q!==void 0&&(q.forEach(function(oe){Xe.releaseProgram(oe)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,oe,ie,K,Ne){q===null&&(q=wt);const Ge=K.isMesh&&K.matrixWorld.determinant()<0,Oe=er(A,q,oe,ie,K);je.setMaterial(ie,Ge);let Ve=oe.index,We=1;if(ie.wireframe===!0){if(Ve=Ke.getWireframeAttribute(oe),Ve===void 0)return;We=2}const $e=oe.drawRange,qe=oe.attributes.position;let et=$e.start*We,Dt=($e.start+$e.count)*We;Ne!==null&&(et=Math.max(et,Ne.start*We),Dt=Math.min(Dt,(Ne.start+Ne.count)*We)),Ve!==null?(et=Math.max(et,0),Dt=Math.min(Dt,Ve.count)):qe!=null&&(et=Math.max(et,0),Dt=Math.min(Dt,qe.count));const Kt=Dt-et;if(Kt<0||Kt===1/0)return;Be.setup(K,ie,Oe,oe,Ve);let Wt,Ot=X;if(Ve!==null&&(Wt=de.get(Ve),Ot=Le,Ot.setIndex(Wt)),K.isMesh)ie.wireframe===!0?(je.setLineWidth(ie.wireframeLinewidth*Jt()),Ot.setMode(G.LINES)):Ot.setMode(G.TRIANGLES);else if(K.isLine){let Qe=ie.linewidth;Qe===void 0&&(Qe=1),je.setLineWidth(Qe*Jt()),K.isLineSegments?Ot.setMode(G.LINES):K.isLineLoop?Ot.setMode(G.LINE_LOOP):Ot.setMode(G.LINE_STRIP)}else K.isPoints?Ot.setMode(G.POINTS):K.isSprite&&Ot.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Wo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qe=K._multiDrawStarts,Ut=K._multiDrawCounts,at=K._multiDrawCount,xn=Ve?de.get(Ve).bytesPerElement:1,Vi=E.get(ie).currentProgram.getUniforms();for(let Sn=0;Sn<at;Sn++)Vi.setValue(G,"_gl_DrawID",Sn),Ot.render(Qe[Sn]/xn,Ut[Sn])}else if(K.isInstancedMesh)Ot.renderInstances(et,Kt,K.count);else if(oe.isInstancedBufferGeometry){const Qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ut=Math.min(oe.instanceCount,Qe);Ot.renderInstances(et,Kt,Ut)}else Ot.render(et,Kt)};function Is(A,q,oe){A.transparent===!0&&A.side===Pi&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,Or(A,q,oe),A.side=$a,A.needsUpdate=!0,Or(A,q,oe),A.side=Pi):Or(A,q,oe)}this.compile=function(A,q,oe=null){oe===null&&(oe=A),F=Ae.get(oe),F.init(q),z.push(F),oe.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),A!==oe&&A.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(F.pushLight(K),K.castShadow&&F.pushShadow(K))}),F.setupLights();const ie=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ne=K.material;if(Ne)if(Array.isArray(Ne))for(let Ge=0;Ge<Ne.length;Ge++){const Oe=Ne[Ge];Is(Oe,oe,K),ie.add(Oe)}else Is(Ne,oe,K),ie.add(Ne)}),F=z.pop(),ie},this.compileAsync=function(A,q,oe=null){const ie=this.compile(A,q,oe);return new Promise(K=>{function Ne(){if(ie.forEach(function(Ge){E.get(Ge).currentProgram.isReady()&&ie.delete(Ge)}),ie.size===0){K(A);return}setTimeout(Ne,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ur=null;function Bs(A){Ur&&Ur(A)}function Nr(){Ci.stop()}function Hs(){Ci.start()}const Ci=new $_;Ci.setAnimationLoop(Bs),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){Ur=A,Ce.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},Ce.addEventListener("sessionstart",Nr),Ce.addEventListener("sessionend",Hs),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const oe=Ce.enabled===!0&&Ce.isPresenting===!0,ie=j!==null&&(Z===null||oe)&&j.begin(C,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,q,Z),F=Ae.get(A,z.length),F.init(q),z.push(F),jt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ze.setFromProjectionMatrix(jt,Fi,q.reversedDepth),ht=this.localClippingEnabled,Fe=He.init(this.clippingPlanes,ht),O=be.get(A,I.length),O.init(),I.push(O),Ce.enabled===!0&&Ce.isPresenting===!0){const Ge=C.xr.getDepthSensingMesh();Ge!==null&&ti(Ge,q,-1/0,C.sortObjects)}ti(A,q,0,C.sortObjects),O.finish(),C.sortObjects===!0&&O.sort(Me,we),ot=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ot&&Ue.addToRenderList(O,A),this.info.render.frame++,Fe===!0&&He.beginShadows();const K=F.state.shadowsArray;if(Ie.render(K,A,q),Fe===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&j.hasRenderPass())===!1){const Ge=O.opaque,Oe=O.transmissive;if(F.setupLights(),q.isArrayCamera){const Ve=q.cameras;if(Oe.length>0)for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We];vn(Ge,Oe,A,qe)}ot&&Ue.render(A);for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We];rn(O,A,qe,qe.viewport)}}else Oe.length>0&&vn(Ge,Oe,A,q),ot&&Ue.render(A),rn(O,A,q)}Z!==null&&ne===0&&(W.updateMultisampleRenderTarget(Z),W.updateRenderTargetMipmap(Z)),ie&&j.end(C),A.isScene===!0&&A.onAfterRender(C,A,q),Be.resetDefaultState(),le=-1,re=null,z.pop(),z.length>0?(F=z[z.length-1],Fe===!0&&He.setGlobalState(C.clippingPlanes,F.state.camera)):F=null,I.pop(),I.length>0?O=I[I.length-1]:O=null};function ti(A,q,oe,ie){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ze.intersectsSprite(A)){ie&&mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(jt);const Ge=De.update(A),Oe=A.material;Oe.visible&&O.push(A,Ge,Oe,oe,mt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ze.intersectsObject(A))){const Ge=De.update(A),Oe=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),mt.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),mt.copy(Ge.boundingSphere.center)),mt.applyMatrix4(A.matrixWorld).applyMatrix4(jt)),Array.isArray(Oe)){const Ve=Ge.groups;for(let We=0,$e=Ve.length;We<$e;We++){const qe=Ve[We],et=Oe[qe.materialIndex];et&&et.visible&&O.push(A,Ge,et,oe,mt.z,qe)}}else Oe.visible&&O.push(A,Ge,Oe,oe,mt.z,null)}}const Ne=A.children;for(let Ge=0,Oe=Ne.length;Ge<Oe;Ge++)ti(Ne[Ge],q,oe,ie)}function rn(A,q,oe,ie){const{opaque:K,transmissive:Ne,transparent:Ge}=A;F.setupLightsView(oe),Fe===!0&&He.setGlobalState(C.clippingPlanes,oe),ie&&je.viewport(P.copy(ie)),K.length>0&&gi(K,q,oe),Ne.length>0&&gi(Ne,q,oe),Ge.length>0&&gi(Ge,q,oe),je.buffers.depth.setTest(!0),je.buffers.depth.setMask(!0),je.buffers.color.setMask(!0),je.setPolygonOffset(!1)}function vn(A,q,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ie.id]===void 0){const et=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ie.id]=new Bi(1,1,{generateMipmaps:!0,type:et?ma:hi,minFilter:Cr,samples:Lt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Ne=F.state.transmissionRenderTarget[ie.id],Ge=ie.viewport||P;Ne.setSize(Ge.z*C.transmissionResolutionScale,Ge.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget(),Ve=C.getActiveCubeFace(),We=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(_e),Se=C.getClearAlpha(),Se<1&&C.setClearColor(16777215,.5),C.clear(),ot&&Ue.render(oe);const $e=C.toneMapping;C.toneMapping=Ii;const qe=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),F.setupLightsView(ie),Fe===!0&&He.setGlobalState(C.clippingPlanes,ie),gi(A,oe,ie),W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Dt=0,Kt=q.length;Dt<Kt;Dt++){const Wt=q[Dt],{object:Ot,geometry:Qe,material:Ut,group:at}=Wt;if(Ut.side===Pi&&Ot.layers.test(ie.layers)){const xn=Ut.side;Ut.side=Xn,Ut.needsUpdate=!0,Lr(Ot,oe,ie,Qe,Ut,at),Ut.side=xn,Ut.needsUpdate=!0,et=!0}}et===!0&&(W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Oe,Ve,We),C.setClearColor(_e,Se),qe!==void 0&&(ie.viewport=qe),C.toneMapping=$e}function gi(A,q,oe){const ie=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Ne=A.length;K<Ne;K++){const Ge=A[K],{object:Oe,geometry:Ve,group:We}=Ge;let $e=Ge.material;$e.allowOverride===!0&&ie!==null&&($e=ie),Oe.layers.test(oe.layers)&&Lr(Oe,q,oe,Ve,$e,We)}}function Lr(A,q,oe,ie,K,Ne){A.onBeforeRender(C,q,oe,ie,K,Ne),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(C,q,oe,ie,A,Ne),K.transparent===!0&&K.side===Pi&&K.forceSinglePass===!1?(K.side=Xn,K.needsUpdate=!0,C.renderBufferDirect(oe,q,ie,K,A,Ne),K.side=$a,K.needsUpdate=!0,C.renderBufferDirect(oe,q,ie,K,A,Ne),K.side=Pi):C.renderBufferDirect(oe,q,ie,K,A,Ne),A.onAfterRender(C,q,oe,ie,K,Ne)}function Or(A,q,oe){q.isScene!==!0&&(q=wt);const ie=E.get(A),K=F.state.lights,Ne=F.state.shadowsArray,Ge=K.state.version,Oe=Xe.getParameters(A,K.state,Ne,q,oe),Ve=Xe.getProgramCacheKey(Oe);let We=ie.programs;ie.environment=A.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(A.isMeshStandardMaterial?ye:me).get(A.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",Dn),We=new Map,ie.programs=We);let $e=We.get(Ve);if($e!==void 0){if(ie.currentProgram===$e&&ie.lightsStateVersion===Ge)return Gs(A,Oe),$e}else Oe.uniforms=Xe.getUniforms(A),A.onBeforeCompile(Oe,C),$e=Xe.acquireProgram(Oe,Ve),We.set(Ve,$e),ie.uniforms=Oe.uniforms;const qe=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=He.uniform),Gs(A,Oe),ie.needsLights=xa(A),ie.lightsStateVersion=Ge,ie.needsLights&&(qe.ambientLightColor.value=K.state.ambient,qe.lightProbe.value=K.state.probe,qe.directionalLights.value=K.state.directional,qe.directionalLightShadows.value=K.state.directionalShadow,qe.spotLights.value=K.state.spot,qe.spotLightShadows.value=K.state.spotShadow,qe.rectAreaLights.value=K.state.rectArea,qe.ltc_1.value=K.state.rectAreaLTC1,qe.ltc_2.value=K.state.rectAreaLTC2,qe.pointLights.value=K.state.point,qe.pointLightShadows.value=K.state.pointShadow,qe.hemisphereLights.value=K.state.hemi,qe.directionalShadowMap.value=K.state.directionalShadowMap,qe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qe.spotShadowMap.value=K.state.spotShadowMap,qe.spotLightMatrix.value=K.state.spotLightMatrix,qe.spotLightMap.value=K.state.spotLightMap,qe.pointShadowMap.value=K.state.pointShadowMap,qe.pointShadowMatrix.value=K.state.pointShadowMatrix),ie.currentProgram=$e,ie.uniformsList=null,$e}function Jo(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Oc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Gs(A,q){const oe=E.get(A);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function er(A,q,oe,ie,K){q.isScene!==!0&&(q=wt),W.resetTextureUnits();const Ne=q.fog,Ge=ie.isMeshStandardMaterial?q.environment:null,Oe=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ls,Ve=(ie.isMeshStandardMaterial?ye:me).get(ie.envMap||Ge),We=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,$e=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!oe.morphAttributes.position,et=!!oe.morphAttributes.normal,Dt=!!oe.morphAttributes.color;let Kt=Ii;ie.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Kt=C.toneMapping);const Wt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ot=Wt!==void 0?Wt.length:0,Qe=E.get(ie),Ut=F.state.lights;if(Fe===!0&&(ht===!0||A!==re)){const Mn=A===re&&ie.id===le;He.setState(ie,A,Mn)}let at=!1;ie.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ut.state.version||Qe.outputColorSpace!==Oe||K.isBatchedMesh&&Qe.batching===!1||!K.isBatchedMesh&&Qe.batching===!0||K.isBatchedMesh&&Qe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Qe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Qe.instancing===!1||!K.isInstancedMesh&&Qe.instancing===!0||K.isSkinnedMesh&&Qe.skinning===!1||!K.isSkinnedMesh&&Qe.skinning===!0||K.isInstancedMesh&&Qe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Qe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Qe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Qe.instancingMorph===!1&&K.morphTexture!==null||Qe.envMap!==Ve||ie.fog===!0&&Qe.fog!==Ne||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==He.numPlanes||Qe.numIntersection!==He.numIntersection)||Qe.vertexAlphas!==We||Qe.vertexTangents!==$e||Qe.morphTargets!==qe||Qe.morphNormals!==et||Qe.morphColors!==Dt||Qe.toneMapping!==Kt||Qe.morphTargetsCount!==Ot)&&(at=!0):(at=!0,Qe.__version=ie.version);let xn=Qe.currentProgram;at===!0&&(xn=Or(ie,q,K));let Vi=!1,Sn=!1,ni=!1;const zt=xn.getUniforms(),yn=Qe.uniforms;if(je.useProgram(xn.program)&&(Vi=!0,Sn=!0,ni=!0),ie.id!==le&&(le=ie.id,Sn=!0),Vi||re!==A){je.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(G,"projectionMatrix",A.projectionMatrix),zt.setValue(G,"viewMatrix",A.matrixWorldInverse);const En=zt.map.cameraPosition;En!==void 0&&En.setValue(G,pt.setFromMatrixPosition(A.matrixWorld)),Lt.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&zt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),re!==A&&(re=A,Sn=!0,ni=!0)}if(Qe.needsLights&&(Ut.state.directionalShadowMap.length>0&&zt.setValue(G,"directionalShadowMap",Ut.state.directionalShadowMap,W),Ut.state.spotShadowMap.length>0&&zt.setValue(G,"spotShadowMap",Ut.state.spotShadowMap,W),Ut.state.pointShadowMap.length>0&&zt.setValue(G,"pointShadowMap",Ut.state.pointShadowMap,W)),K.isSkinnedMesh){zt.setOptional(G,K,"bindMatrix"),zt.setOptional(G,K,"bindMatrixInverse");const Mn=K.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),zt.setValue(G,"boneTexture",Mn.boneTexture,W))}K.isBatchedMesh&&(zt.setOptional(G,K,"batchingTexture"),zt.setValue(G,"batchingTexture",K._matricesTexture,W),zt.setOptional(G,K,"batchingIdTexture"),zt.setValue(G,"batchingIdTexture",K._indirectTexture,W),zt.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&zt.setValue(G,"batchingColorTexture",K._colorsTexture,W));const dn=oe.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ct.update(K,oe,xn),(Sn||Qe.receiveShadow!==K.receiveShadow)&&(Qe.receiveShadow=K.receiveShadow,zt.setValue(G,"receiveShadow",K.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(yn.envMap.value=Ve,yn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(yn.envMapIntensity.value=q.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=F1()),Sn&&(zt.setValue(G,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&Vs(yn,ni),Ne&&ie.fog===!0&&nt.refreshFogUniforms(yn,Ne),nt.refreshMaterialUniforms(yn,ie,he,te,F.state.transmissionRenderTarget[A.id]),Oc.upload(G,Jo(Qe),yn,W)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Oc.upload(G,Jo(Qe),yn,W),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&zt.setValue(G,"center",K.center),zt.setValue(G,"modelViewMatrix",K.modelViewMatrix),zt.setValue(G,"normalMatrix",K.normalMatrix),zt.setValue(G,"modelMatrix",K.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Mn=ie.uniformsGroups;for(let En=0,Pr=Mn.length;En<Pr;En++){const _i=Mn[En];Ee.update(_i,xn),Ee.bind(_i,xn)}}return xn}function Vs(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function xa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,q,oe){const ie=E.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=q,E.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const oe=E.get(A);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const Sa=G.createFramebuffer();this.setRenderTarget=function(A,q=0,oe=0){Z=A,V=q,ne=oe;let ie=null,K=!1,Ne=!1;if(A){const Oe=E.get(A);if(Oe.__useDefaultFramebuffer!==void 0){je.bindFramebuffer(G.FRAMEBUFFER,Oe.__webglFramebuffer),P.copy(A.viewport),H.copy(A.scissor),ee=A.scissorTest,je.viewport(P),je.scissor(H),je.setScissorTest(ee),le=-1;return}else if(Oe.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Oe.__hasExternalTextures)W.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&E.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ne=!0);const We=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[q])?ie=We[q][oe]:ie=We[q],K=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?ie=E.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?ie=We[oe]:ie=We,P.copy(A.viewport),H.copy(A.scissor),ee=A.scissorTest}else P.copy(Q).multiplyScalar(he).floor(),H.copy(ue).multiplyScalar(he).floor(),ee=Te;if(oe!==0&&(ie=Sa),je.bindFramebuffer(G.FRAMEBUFFER,ie)&&je.drawBuffers(A,ie),je.viewport(P),je.scissor(H),je.setScissorTest(ee),K){const Oe=E.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,oe)}else if(Ne){const Oe=q;for(let Ve=0;Ve<A.textures.length;Ve++){const We=E.get(A.textures[Ve]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ve,We.__webglTexture,oe,Oe)}}else if(A!==null&&oe!==0){const Oe=E.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,oe)}le=-1},this.readRenderTargetPixels=function(A,q,oe,ie,K,Ne,Ge,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve){je.bindFramebuffer(G.FRAMEBUFFER,Ve);try{const We=A.textures[Oe],$e=We.format,qe=We.type;if(!Lt.textureFormatReadable($e)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(qe)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ie&&oe>=0&&oe<=A.height-K&&(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(q,oe,ie,K,Re.convert($e),Re.convert(qe),Ne))}finally{const We=Z!==null?E.get(Z).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,q,oe,ie,K,Ne,Ge,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve)if(q>=0&&q<=A.width-ie&&oe>=0&&oe<=A.height-K){je.bindFramebuffer(G.FRAMEBUFFER,Ve);const We=A.textures[Oe],$e=We.format,qe=We.type;if(!Lt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.bufferData(G.PIXEL_PACK_BUFFER,Ne.byteLength,G.STREAM_READ),A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(q,oe,ie,K,Re.convert($e),Re.convert(qe),0);const Dt=Z!==null?E.get(Z).__webglFramebuffer:null;je.bindFramebuffer(G.FRAMEBUFFER,Dt);const Kt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await ny(G,Kt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ne),G.deleteBuffer(et),G.deleteSync(Kt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,oe=0){const ie=Math.pow(2,-oe),K=Math.floor(A.image.width*ie),Ne=Math.floor(A.image.height*ie),Ge=q!==null?q.x:0,Oe=q!==null?q.y:0;W.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,Ge,Oe,K,Ne),je.unbindTexture()};const tr=G.createFramebuffer(),ya=G.createFramebuffer();this.copyTextureToTexture=function(A,q,oe=null,ie=null,K=0,Ne=null){Ne===null&&(K!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=K,K=0):Ne=0);let Ge,Oe,Ve,We,$e,qe,et,Dt,Kt;const Wt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(oe!==null)Ge=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,We=oe.min.x,$e=oe.min.y,qe=oe.isBox3?oe.min.z:0;else{const dn=Math.pow(2,-K);Ge=Math.floor(Wt.width*dn),Oe=Math.floor(Wt.height*dn),A.isDataArrayTexture?Ve=Wt.depth:A.isData3DTexture?Ve=Math.floor(Wt.depth*dn):Ve=1,We=0,$e=0,qe=0}ie!==null?(et=ie.x,Dt=ie.y,Kt=ie.z):(et=0,Dt=0,Kt=0);const Ot=Re.convert(q.format),Qe=Re.convert(q.type);let Ut;q.isData3DTexture?(W.setTexture3D(q,0),Ut=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Ut=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Ut=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const at=G.getParameter(G.UNPACK_ROW_LENGTH),xn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Vi=G.getParameter(G.UNPACK_SKIP_PIXELS),Sn=G.getParameter(G.UNPACK_SKIP_ROWS),ni=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,We),G.pixelStorei(G.UNPACK_SKIP_ROWS,$e),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qe);const zt=A.isDataArrayTexture||A.isData3DTexture,yn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const dn=E.get(A),Mn=E.get(q),En=E.get(dn.__renderTarget),Pr=E.get(Mn.__renderTarget);je.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let _i=0;_i<Ve;_i++)zt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(A).__webglTexture,K,qe+_i),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Ne,Kt+_i)),G.blitFramebuffer(We,$e,Ge,Oe,et,Dt,Ge,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||E.has(A)){const dn=E.get(A),Mn=E.get(q);je.bindFramebuffer(G.READ_FRAMEBUFFER,tr),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,ya);for(let En=0;En<Ve;En++)zt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,K,qe+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,K),yn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Ne,Kt+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Ne),K!==0?G.blitFramebuffer(We,$e,Ge,Oe,et,Dt,Ge,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):yn?G.copyTexSubImage3D(Ut,Ne,et,Dt,Kt+En,We,$e,Ge,Oe):G.copyTexSubImage2D(Ut,Ne,et,Dt,We,$e,Ge,Oe);je.bindFramebuffer(G.READ_FRAMEBUFFER,null),je.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else yn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ut,Ne,et,Dt,Kt,Ge,Oe,Ve,Ot,Qe,Wt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ut,Ne,et,Dt,Kt,Ge,Oe,Ve,Ot,Wt.data):G.texSubImage3D(Ut,Ne,et,Dt,Kt,Ge,Oe,Ve,Ot,Qe,Wt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ne,et,Dt,Ge,Oe,Ot,Qe,Wt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ne,et,Dt,Wt.width,Wt.height,Ot,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Ne,et,Dt,Ge,Oe,Ot,Qe,Wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,at),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Vi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Sn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ni),Ne===0&&q.generateMipmaps&&G.generateMipmap(Ut),je.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),je.unbindTexture()},this.resetState=function(){V=0,ne=0,Z=null,je.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(t),i.unpackColorSpace=bt._getUnpackColorSpace()}}const I1=()=>{const o=Ye.useRef(null),t=Ye.useRef(null),i=Ye.useRef(null),r=Ye.useRef(new Ct(0,0));return Ye.useEffect(()=>{if(!o.current)return;const l=new K_,u=new Bc(-1,1,1,-1,0,1),d=new av({alpha:!1,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!1});d.setPixelRatio(1),d.setSize(window.innerWidth,window.innerHeight),o.current.appendChild(d.domElement),t.current=d;const h=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,m=`
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
    `,p=new zs(2,2),_=new pi({vertexShader:h,fragmentShader:m,uniforms:{uTime:{value:0},uResolution:{value:new Ct(window.innerWidth,window.innerHeight)},uMouse:{value:new Ct(0,0)}},depthWrite:!1,depthTest:!1});i.current=_;const g=new Ri(p,_);l.add(g);const S=new Vy;let M;const b=()=>{M=requestAnimationFrame(b);const x=S.getElapsedTime();i.current&&(i.current.uniforms.uTime.value=x,i.current.uniforms.uMouse.value.lerp(r.current,.05)),d.render(l,u)};b();const R=()=>{if(t.current&&i.current){const x=window.innerWidth,N=window.innerHeight;t.current.setSize(x,N),i.current.uniforms.uResolution.value.set(x,N)}},y=x=>{const N=x.clientX/window.innerWidth*2-1,D=-(x.clientY/window.innerHeight)*2+1,O=window.innerWidth/window.innerHeight;r.current.set(N*O,D)};return window.addEventListener("resize",R),window.addEventListener("mousemove",y),()=>{window.removeEventListener("resize",R),window.removeEventListener("mousemove",y),cancelAnimationFrame(M),t.current&&(t.current.dispose(),o.current&&o.current.removeChild(t.current.domElement)),p.dispose(),_.dispose()}},[]),fe.jsx("div",{ref:o,className:"fixed inset-0 z-0 bg-[#030303]"})},B1=[{count:"4x",name:"HACKATHON WINNER"},{count:"15x",name:"FWA SOTD"},{count:"225",name:"BENCH PRESS"}],H1=[{year:"'24",name:"AWWWARDS – Valencia"},{year:"'24",name:"TOUCH – Tbilisi"}],G1=[{name:"DO — How to React-Three-Fiber",url:"#"},{name:"Codrops — Procedural Clouds",url:"#"}],V1=[{name:"Inspired Island",url:"https://www.youtube.com/c/inspiredisland"},"Victor Wembanyama",{name:"Robert Borghesi",url:"https://robertborghesi.is/"}],k1=["Hey! I'm Shivam Maji, a sophomore at Santa Clara University studying Computer Engineerng and Mechanical Engineering. I build software, design hardware, and like when the two meet in the middle.","On the CS side, I started out modding Minecraft in Java and making games in Unity. Since then I've moved through frontend work in React, picked up Python for AI and computer vision, messed around with C++ and Kotlin, and trained models in PyTorch and TensorFlow. I like learning whatever the project demands and figuring it out as I go. Hackathons have become my favorite way to build fast, break things, and walk away with something that actually works.","I'm a member of my university's Formula SAE team, where I work on aerodynamics and chassis design using SolidWorks and ANSYS. On the hardware side, I've worked with Verilog and ASIC design.","Huge space nerd. The goal is aerospace — NASA, SpaceX, somewhere with a mission control. I also cook, lift, play chess poorly, and have spent way too much money on camera gear.","Open to internships, collaborations, or a good conversation."],y_={email:"smaji@scu.edu",socials:[{name:"GITHUB",url:"https://github.com/dgne58"},{name:"LINKEDIN",url:"https://www.linkedin.com/in/shivam-maji/"}]},X1=({previewState:o})=>{const t=Ye.useRef(null),i=Ye.useRef(null),r=Ye.useRef(null),l=Ye.useRef(null),u=Ye.useRef(null),d=Ye.useRef(null),h=Ye.useRef(null),m=Ye.useRef(null),p=Ye.useRef({main:new se(0,0,0),tl:new se(-300,100,10),br:new se(-340,-110,12)}),_=Ye.useRef([]),g=Ye.useRef(0),S=Ye.useRef(0),M=Ye.useRef(!1),b=Ye.useRef(0),R=Ye.useRef(null),y=Ye.useRef(0),x=Ye.useRef(0),N=Ye.useRef({x:0,y:0}),D=Ye.useRef({x:0,y:0}),O=Ye.useRef(new Hy),F=Ye.useRef(new Map),I=Ye.useRef(null),z=Ye.useRef(Math.random()*100),j=Ye.useRef(0),C=1200,w=700,V=`
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
  `;return Ye.useEffect(()=>{const Z=document.createElement("canvas");Z.width=1,Z.height=1;const le=Z.getContext("2d");le&&(le.fillStyle="rgba(0,0,0,0)",le.fillRect(0,0,1,1));const re=new Ny(Z);I.current=re},[]),Ye.useEffect(()=>{if(!i.current)return;const Z=new K_;r.current=Z;const le=new Bc(C/-2,C/2,w/2,w/-2,1,1e3);le.position.z=100,l.current=le;const re=new av({alpha:!0,antialias:!1,powerPreference:"high-performance"});re.setSize(C,w),re.setPixelRatio(Math.min(window.devicePixelRatio,2)),re.sortObjects=!0,re.domElement.style.display="block",re.domElement.style.position="absolute",re.domElement.style.top="0",re.domElement.style.left="0",i.current.appendChild(re.domElement),u.current=re;const P=(he,Me,we,Q,ue)=>{const Te=new zs(he,Me),ze=new pi({uniforms:{uTexture:{value:null},uTextureOld:{value:null},uHasOld:{value:0},uProgress:{value:0},uSeed:{value:z.current},uResolution:{value:new Ct(he,Me)}},transparent:!0,vertexShader:V,fragmentShader:ne,side:Pi}),Fe=new Ri(Te,ze);return Fe.position.set(we,Q,ue),Fe.visible=!1,Z.add(Fe),_.current.push(ze),Fe},H=P(420,280,p.current.main.x,p.current.main.y,p.current.main.z);d.current=H;const ee=P(220,150,p.current.tl.x,p.current.tl.y,p.current.tl.z);h.current=ee;const _e=P(180,240,p.current.br.x,p.current.br.y,p.current.br.z);m.current=_e;const Se=()=>{if(!(g.current>.001||S.current>.001)){M.current=!1,t.current&&(t.current.style.opacity="0");return}b.current=requestAnimationFrame(Se);const Me=S.current-g.current;g.current+=Me*.04,Math.abs(S.current-g.current)<.001&&(g.current=S.current),_.current.forEach(ze=>{ze&&(ze.uniforms.uProgress.value=g.current)});const we=.05;D.current.x+=(N.current.x-D.current.x)*we,D.current.y+=(N.current.y-D.current.y)*we;const Q=D.current.x,ue=D.current.y;d.current&&(d.current.position.x=p.current.main.x+Q*20,d.current.position.y=p.current.main.y+ue*20,d.current.rotation.y=Q*.05,d.current.rotation.x=-ue*.05),h.current&&(h.current.position.x=p.current.tl.x+Q*40,h.current.position.y=p.current.tl.y+ue*40,h.current.rotation.z=-Q*.05),m.current&&(m.current.position.x=p.current.br.x+Q*30,m.current.position.y=p.current.br.y+ue*30,m.current.rotation.z=Q*.03);const Te=y.current-x.current;x.current+=Te*.12,t.current&&(t.current.style.transform=`translate3d(-50%, ${x.current}px, 0)`,_.current.length>0&&(g.current>.01?(t.current.style.opacity="1",re.render(Z,le)):t.current.style.opacity="0"))},L=()=>{M.current||(M.current=!0,Se())};R.current=L;const te=he=>{const Me=he.clientX/window.innerWidth*2-1,we=-(he.clientY/window.innerHeight*2-1);N.current={x:Me,y:we}};return window.addEventListener("mousemove",te),()=>{cancelAnimationFrame(b.current),window.removeEventListener("mousemove",te),i.current&&re.domElement&&i.current.removeChild(re.domElement),re.dispose(),_.current.forEach(he=>he.dispose()),_.current=[],R.current=null}},[]),Ye.useEffect(()=>{var le,re;const Z=Math.random();if(j.current=Z,o&&o.project.img){const{project:P,top:H,height:ee}=o,Se=H+ee/2-w/2;y.current=Se,p.current.main.y=0,g.current<.05&&_.current.length>0&&_.current[0].uniforms.uHasOld.value<.5&&(x.current=Se);const L=he=>he?F.current.has(he)?Promise.resolve(F.current.get(he)):new Promise(Me=>{O.current.load(he,we=>{F.current.set(he,we),Me(we)},void 0,()=>{Me(I.current)})}):Promise.resolve(I.current),te=[P.img,(le=P.subImages)==null?void 0:le[0],(re=P.subImages)==null?void 0:re[1]];Promise.all(te.map(L)).then(he=>{if(j.current!==Z)return;const Me=_.current,we=[d.current,h.current,m.current],Q=g.current>.15;he.forEach((ue,Te)=>{if(Me[Te]&&we[Te]){const ze=Me[Te].uniforms.uTexture.value,Fe=we[Te].visible,ht=ze&&ze!==I.current;Fe&&ht&&Q?(Me[Te].uniforms.uTextureOld.value=ze,Me[Te].uniforms.uHasOld.value=1):Me[Te].uniforms.uHasOld.value=0,Me[Te].uniforms.uTexture.value=ue;const jt=ue!==I.current,pt=Me[Te].uniforms.uHasOld.value>.5;jt||pt?we[Te].visible=!0:we[Te].visible=!1}}),g.current=0,S.current=1,R.current&&R.current()}),R.current&&R.current()}else S.current=0,_.current.forEach(P=>{P.uniforms.uHasOld.value=0}),R.current&&R.current()},[o]),fe.jsxs("div",{ref:t,className:"fixed top-0 left-1/2 z-50 pointer-events-none",style:{width:`${C}px`,height:`${w}px`,opacity:0,transform:"translate3d(-50%, -2000px, 0)"},children:[fe.jsx("div",{ref:i,className:"absolute inset-0 z-0"}),o&&o.project.description&&fe.jsxs("div",{className:"absolute top-1/2 bg-black/80 backdrop-blur-md p-6 border border-white/10 text-white text-xs font-mono uppercase leading-relaxed tracking-wider z-[60] shadow-2xl rounded-sm transition-opacity duration-300",style:{left:"68%",width:"280px",transform:"translateY(-50%) translateZ(20px)",opacity:o?1:0},children:[fe.jsx("span",{className:"block mb-3 text-white font-bold text-sm border-b border-white/20 pb-2",children:o.project.name}),fe.jsx("p",{className:"text-gray-300 normal-case",children:o.project.description})]})]})},br=()=>fe.jsxs("svg",{className:"w-3 h-3 inline-block ml-1 opacity-70",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[fe.jsx("line",{x1:"7",y1:"7",x2:"17",y2:"17"}),fe.jsx("polyline",{points:"17 7 17 17 7 17"})]}),Dd=({className:o=""})=>fe.jsxs("svg",{className:`w-3 h-3 inline-block ${o}`,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[fe.jsx("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),fe.jsx("polyline",{points:"7 7 17 7 17 17"})]}),W1=()=>{const[o,t]=Ye.useState(null),[i,r]=Ye.useState(null),[l,u]=Ye.useState([]),[d,h]=Ye.useState(0),m=Ye.useRef(null),p=Ye.useRef(0),_=Ye.useRef(0);Ye.useEffect(()=>{fetch("/data/projects.json").then(b=>b.json()).then(b=>u(b)).catch(b=>console.error("Failed to load projects",b))},[]),Ye.useEffect(()=>{const b=localStorage.getItem("borghesi_visitor_count");let R=b?parseInt(b,10):14203;sessionStorage.getItem("borghesi_session_visited")||(R+=1,localStorage.setItem("borghesi_visitor_count",R.toString()),sessionStorage.setItem("borghesi_session_visited","true")),h(R)},[]),Ye.useEffect(()=>{const b=()=>{p.current=window.scrollY},R=()=>{if(m.current){const y=p.current*.35;m.current.style.transform=`translateX(-${y}px)`}_.current=requestAnimationFrame(R)};return window.addEventListener("scroll",b,{passive:!0}),_.current=requestAnimationFrame(R),()=>{window.removeEventListener("scroll",b),cancelAnimationFrame(_.current)}},[]);const g=b=>{const R=document.getElementById(b);R==null||R.scrollIntoView({behavior:"smooth"})},S=({label:b,target:R})=>fe.jsxs("button",{onClick:()=>g(R),className:"group relative text-sm font-bold text-gray-400 hover:text-white transition-colors duration-300",children:[fe.jsx("span",{className:"absolute -left-3 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-gray-500",children:"("}),b,fe.jsx("span",{className:"absolute -right-3 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-gray-500",children:")"})]}),M=()=>i!==null?"opacity-20 blur-[2px]":"opacity-100";return fe.jsxs(fe.Fragment,{children:[fe.jsx(X1,{previewState:o}),fe.jsxs("div",{className:"relative z-10 w-full text-[#f0f0f0] font-sans selection:bg-white selection:text-black cursor-none",children:[fe.jsxs("nav",{className:`fixed top-0 left-0 w-full flex justify-between items-start px-6 py-6 md:px-12 mix-blend-difference z-50 transition-all duration-500 ${M()}`,children:[fe.jsx("div",{className:"text-xs font-bold tracking-[0.2em] uppercase text-white",children:fe.jsxs("div",{children:["©2026:",fe.jsx("span",{className:"text-gray-500",children:"V.1"})]})}),fe.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 hidden md:block font-mono text-xs",children:fe.jsx("span",{className:"inline-block animate-[spin_4s_linear_infinite] opacity-60 text-white",children:"( + )"})}),fe.jsxs("div",{className:"flex gap-8",children:[fe.jsx(S,{label:"PRJ",target:"projects"}),fe.jsx(S,{label:"WHO",target:"about"}),fe.jsx(S,{label:"MSG",target:"contact"})]})]}),fe.jsxs("header",{className:`pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden w-full transition-all duration-500 ${M()}`,children:[fe.jsx("h1",{ref:m,className:"text-[19vw] leading-[0.75] font-bold uppercase tracking-tighter whitespace-nowrap will-change-transform text-[#f5f5f5]",style:{transform:"translateX(0px)"},children:"Shivam Maji"}),fe.jsxs("div",{className:"px-6 md:px-12 mt-16 md:mt-32 max-w-lg",children:[fe.jsxs("p",{className:"text-sm md:text-base font-medium leading-relaxed text-gray-200",children:["I'm Shivam Maji, a ",fe.jsx("span",{className:"text-white",children:"Computer Engineering"})," and ",fe.jsx("span",{className:"text-white",children:"Mechanical Engineering"})," student at SCU."]}),fe.jsxs("div",{className:"mt-6 flex items-center gap-3 text-xs font-mono text-gray-500 uppercase tracking-widest opacity-80",children:[fe.jsx("span",{className:"w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"}),fe.jsxs("span",{children:["You are the ",d.toLocaleString(),"th visitor"]})]})]})]}),fe.jsxs("section",{id:"projects",className:"px-6 md:px-12 mb-32 md:mb-48",children:[fe.jsxs("div",{className:`text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-2 flex items-center gap-2 transition-all duration-500 ${M()}`,children:["Selected Projects ",fe.jsx(br,{})]}),fe.jsxs("div",{className:"w-full",children:[l.length===0&&fe.jsx("div",{className:"py-8 text-center text-gray-500 font-mono text-xs uppercase animate-pulse",children:"Loading Projects Data..."}),l.map((b,R)=>{var N;const y=i===R,x=i!==null&&!y;return fe.jsxs("a",{href:b.url,onMouseEnter:D=>{const O=D.currentTarget.getBoundingClientRect();t({project:b,top:O.top,height:O.height}),r(R)},onMouseLeave:()=>{t(null),r(null)},className:`
                      group grid grid-cols-[50px_1fr_auto] md:grid-cols-[60px_120px_1fr_auto_100px] 
                      items-baseline py-6 border-b 
                      transition-all duration-500 gap-y-2 cursor-none
                      ${y?"border-white opacity-100":"border-white/10"}
                      ${x?"opacity-20 blur-[1px]":""}
                      ${i===null?"hover:border-white/30":""}
                    `,children:[fe.jsxs("span",{className:`text-xs font-mono transition-colors pointer-events-none ${y?"text-white":"text-gray-500"}`,children:[fe.jsx("span",{className:"text-gray-500 opacity-60",children:"//"}),b.year]}),fe.jsx("span",{className:`text-xs font-mono hidden md:block pointer-events-none transition-colors ${y?"text-white opacity-100":"text-gray-500 opacity-60"}`,children:b.type}),fe.jsx("span",{className:`
                      text-xl md:text-3xl font-light uppercase tracking-tighter transition-all duration-300 col-span-2 md:col-span-1 pointer-events-none
                      ${y?"text-white translate-x-4":"text-gray-200"}
                    `,children:b.name}),fe.jsx("div",{className:"hidden md:flex justify-end gap-2 text-[10px] font-mono text-gray-400 tracking-wider w-full text-right px-4 pointer-events-none",children:(N=b.field)==null?void 0:N.map((D,O)=>fe.jsxs("span",{children:["(",D,")"]},O))}),fe.jsx("div",{className:"flex justify-end items-center pointer-events-none",children:fe.jsxs("span",{className:`
                        text-[10px] uppercase tracking-widest px-3 py-1 rounded transition-all flex items-center gap-2
                        ${y?"text-white bg-white/10":"text-gray-400"}
                      `,children:["Launch ",fe.jsx(Dd,{})]})})]},R)})]})]}),fe.jsxs("section",{id:"about",className:`px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 transition-all duration-500 ${M()}`,children:[fe.jsxs("div",{className:"md:col-span-5 flex flex-col gap-16",children:[fe.jsxs("div",{children:[fe.jsxs("h3",{className:"text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2",children:["Achievements ",fe.jsx(br,{})]}),fe.jsx("ul",{className:"space-y-3",children:B1.map((b,R)=>fe.jsxs("li",{className:"text-sm font-mono text-gray-300 flex gap-6 hover:text-white transition-colors cursor-none",children:[fe.jsx("span",{className:"text-gray-500 w-8",children:b.count}),fe.jsx("span",{children:b.name})]},R))})]}),fe.jsxs("div",{children:[fe.jsxs("h3",{className:"text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2",children:["Conferences Talks ",fe.jsx(br,{})]}),fe.jsx("ul",{className:"space-y-3",children:H1.map((b,R)=>fe.jsxs("li",{className:"text-sm font-mono text-gray-300 flex gap-6 hover:text-white transition-colors cursor-none",children:[fe.jsx("span",{className:"text-gray-500 w-8",children:b.year}),fe.jsx("span",{children:b.name})]},R))})]}),fe.jsxs("div",{children:[fe.jsxs("h3",{className:"text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2",children:["Publications ",fe.jsx(br,{})]}),fe.jsx("ul",{className:"space-y-3",children:G1.map((b,R)=>fe.jsxs("li",{className:"text-sm font-mono text-gray-300 flex gap-6 group hover:text-white transition-colors cursor-none items-center",children:[fe.jsx("span",{className:"w-8 flex items-center text-gray-500 group-hover:text-white transition-colors",children:fe.jsx(Dd,{})}),fe.jsx("a",{href:b.url,className:"decoration-1 underline-offset-4 group-hover:underline cursor-none",children:b.name})]},R))})]}),fe.jsxs("div",{children:[fe.jsxs("h3",{className:"text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-6 border-b border-white/20 pb-2",children:["Special thanks ",fe.jsx(br,{})]}),fe.jsx("ul",{className:"space-y-3",children:V1.map((b,R)=>fe.jsxs("li",{className:"text-sm font-mono text-gray-300 flex gap-6 hover:text-white transition-colors cursor-none items-center",children:[fe.jsx("span",{className:"w-8 flex items-center text-gray-500 group-hover:text-white transition-colors",children:fe.jsx(Dd,{})}),typeof b=="string"?fe.jsx("span",{children:b}):fe.jsx("a",{href:b.url,className:"decoration-1 underline-offset-4 hover:underline cursor-none",children:b.name})]},R))})]})]}),fe.jsxs("div",{className:"md:col-start-7 md:col-span-6 flex flex-col gap-24",children:[fe.jsxs("div",{children:[fe.jsxs("h3",{className:"text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-2",children:["About ",fe.jsx(br,{})]}),fe.jsx("div",{className:"text-xl md:text-3xl font-light leading-snug text-gray-200 space-y-8",children:k1.map((b,R)=>fe.jsx("p",{className:"hover:text-white transition-colors duration-500",children:b},R))})]}),fe.jsxs("div",{id:"contact",children:[fe.jsxs("h3",{className:"text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-2",children:["Get in touch ",fe.jsx(br,{})]}),fe.jsx("div",{className:"text-xl md:text-2xl font-light leading-snug text-gray-300 mb-12 max-w-lg",children:fe.jsx("p",{children:"Here several ways you can slide into my DMs. I'm currently working as a freelancer and open for collaborations long and short term."})}),fe.jsxs("ul",{className:"grid grid-cols-2 gap-y-4",children:[y_.socials.map((b,R)=>fe.jsx("li",{children:fe.jsxs("a",{href:b.url,className:"group flex items-center gap-3 cursor-none",children:[fe.jsx("span",{className:"w-2 h-2 rounded-full transition-colors bg-gray-600 group-hover:bg-white"}),fe.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors",children:b.name})]})},R)),fe.jsx("li",{children:fe.jsxs("a",{href:`mailto:${y_.email}`,className:"group flex items-center gap-3 cursor-none",children:[fe.jsx("span",{className:"w-2 h-2 bg-gray-600 group-hover:bg-white rounded-full transition-colors"}),fe.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors",children:"MAIL"})]})})]})]})]})]}),fe.jsxs("footer",{className:`px-6 md:px-12 pb-8 flex justify-between items-end text-[10px] text-gray-500 font-mono tracking-widest transition-all duration-500 ${M()}`,children:[fe.jsxs("div",{className:"flex gap-6",children:[fe.jsx("span",{children:"COORDS: 34.0522° N / 118.2437° W"}),fe.jsxs("span",{className:"hidden md:inline",children:["TEMP: ",fe.jsx("span",{className:"text-gray-300",children:"72°F"})]})]}),fe.jsxs("div",{className:"flex items-center",children:[fe.jsx("span",{className:"w-2 h-2 bg-white rounded-full inline-block animate-pulse mr-2 shadow-[0_0_5px_white]"}),fe.jsx("span",{children:"ONLINE"})]})]})]})]})},q1=({onComplete:o})=>{const[t,i]=Ye.useState(0),[r,l]=Ye.useState(!1),[u,d]=Ye.useState(!1),h=Ye.useRef(null),m=Ye.useRef(0),p=Ye.useRef(Math.random()*100),_=Ye.useRef(0),g=Ye.useRef(0),S=Ye.useRef([]),M=Ye.useRef(0),b=N=>N-Math.floor(N),R=(N,D)=>b(Math.sin(N*12.9898+D*78.233+p.current)*43758.5453),y=(N,D)=>{const O=Math.floor(N),F=Math.floor(D),I=b(N),z=b(D),j=I*I*(3-2*I),C=z*z*(3-2*z),w=R(O,F),V=R(O+1,F),ne=R(O,F+1),Z=R(O+1,F+1);return w+(V-w)*j+(ne-w)*C+(w-V-ne+Z)*j*C};Ye.useEffect(()=>{const N=h.current;if(!N)return;const D=N.getContext("2d",{alpha:!0});if(!D)return;const O=()=>{const I=Math.min(window.devicePixelRatio,2);N.width=window.innerWidth*I,N.height=window.innerHeight*I,N.style.width="100%",N.style.height="100%",D.scale(I,I);const z=window.innerWidth,j=window.innerHeight,C=32,w=Math.ceil(z/C)+1,V=Math.ceil(j/C)+1;_.current=w,g.current=V;const ne=new Array(w*V);for(let Z=0;Z<V;Z++)for(let le=0;le<w;le++){const re=y(le*.06,Z*.06);ne[Z*w+le]=re}S.current=ne};window.addEventListener("resize",O),O();const F=()=>{if(!D||!N)return;const I=window.innerWidth,z=window.innerHeight;D.clearRect(0,0,I,z);const j=32,C=_.current,w=g.current,ne=M.current*1.6-.4;for(let Z=0;Z<w;Z++)for(let le=0;le<C;le++){const P=S.current[Z*C+le]-ne;if(P<0)continue;const H=le*j+j/2,ee=Z*j+j/2;if(P<.05){D.fillStyle="#ffffff";const _e=j*.25;D.fillRect(H-_e/2,ee-_e/2,_e,_e)}else if(P<.15){D.fillStyle="#333333";const _e=j*.5;D.fillRect(H-_e/2,ee-_e/2,_e,_e)}else if(P<.25){D.fillStyle="#111111";const _e=j*.75;D.fillRect(H-_e/2,ee-_e/2,_e,_e)}else D.fillStyle="#000000",D.fillRect(le*j,Z*j,j+.5,j+.5)}m.current=requestAnimationFrame(F)};return F(),()=>{window.removeEventListener("resize",O),cancelAnimationFrame(m.current)}},[]),Ye.useEffect(()=>{if(u){let N=null;const D=1800,O=F=>{N||(N=F);const I=F-N,z=Math.min(I/D,1);M.current=z,z<1?requestAnimationFrame(O):o()};requestAnimationFrame(O)}},[u,o]),Ye.useEffect(()=>{const N=setInterval(()=>{i(D=>D>=100?(clearInterval(N),l(!0),100):Math.min(D+Math.floor(Math.random()*5)+2,100))},50);return()=>clearInterval(N)},[]);const x=()=>{!r||u||d(!0)};return fe.jsxs("div",{className:`fixed inset-0 z-[100] cursor-pointer transition-colors duration-300 ${u?"bg-transparent":"bg-[#030303]"}`,onClick:x,children:[fe.jsx("canvas",{ref:h,className:"absolute inset-0 z-0 pointer-events-none"}),fe.jsx("div",{className:`absolute inset-0 z-10 flex flex-col items-center justify-center text-white font-mono transition-opacity duration-300 ${u?"opacity-0":"opacity-100"}`,children:fe.jsxs("div",{className:"text-center mix-blend-difference",children:[fe.jsxs("div",{className:"text-9xl font-bold tracking-tighter mb-8 tabular-nums",children:[t,"%"]}),fe.jsx("div",{className:"h-12 flex items-center justify-center",children:r?fe.jsx("div",{className:"animate-pulse text-xs tracking-[0.4em] uppercase border border-white/20 px-4 py-3 hover:bg-white hover:text-black transition-colors",children:"Click to Initialize"}):fe.jsxs("div",{className:"text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-3 justify-center",children:[fe.jsx("span",{className:"block w-1 h-1 bg-white animate-ping"}),"Loading Assets"]})})]})})]})},Y1=()=>{const o=Ye.useRef(null),t=Ye.useRef({x:-100,y:-100}),i=Ye.useRef({x:-100,y:-100}),r=Ye.useRef(0);return Ye.useEffect(()=>{const l=d=>{t.current={x:d.clientX,y:d.clientY}};window.addEventListener("mousemove",l);const u=()=>{const d=t.current.x-i.current.x,h=t.current.y-i.current.y;i.current.x+=d*.15,i.current.y+=h*.15,o.current&&(o.current.style.transform=`translate3d(${i.current.x}px, ${i.current.y}px, 0) translate(-50%, -50%)`),r.current=requestAnimationFrame(u)};return u(),()=>{window.removeEventListener("mousemove",l),cancelAnimationFrame(r.current)}},[]),fe.jsx("div",{ref:o,className:"fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform",style:{boxShadow:"0 0 10px rgba(255,255,255,0.5)"}})},j1=()=>fe.jsx("div",{className:"fixed inset-0 z-[90] pointer-events-none opacity-[0.035] mix-blend-overlay will-change-transform",style:{transform:"translate3d(0,0,0)",backfaceVisibility:"hidden"},children:fe.jsxs("svg",{className:"w-full h-full",children:[fe.jsx("filter",{id:"noiseFilter",children:fe.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.80",numOctaves:"3",stitchTiles:"stitch"})}),fe.jsx("rect",{width:"100%",height:"100%",filter:"url(#noiseFilter)"})]})}),Z1=()=>{const[o,t]=Ye.useState(!0);return fe.jsxs(fe.Fragment,{children:[fe.jsx(Y1,{}),fe.jsx(j1,{}),o&&fe.jsx(q1,{onComplete:()=>t(!1)}),fe.jsxs("div",{className:"relative w-full min-h-screen",children:[fe.jsx(I1,{}),fe.jsx(W1,{})]})]})},rv=document.getElementById("root");if(!rv)throw new Error("Could not find root element to mount to");const K1=yS.createRoot(rv);K1.render(fe.jsx(hS.StrictMode,{children:fe.jsx(Z1,{})}));
