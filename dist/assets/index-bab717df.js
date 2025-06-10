function Vb(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Hb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ny={exports:{}},mu={},Fy={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=Symbol.for("react.element"),Gb=Symbol.for("react.portal"),jb=Symbol.for("react.fragment"),Wb=Symbol.for("react.strict_mode"),$b=Symbol.for("react.profiler"),Xb=Symbol.for("react.provider"),Yb=Symbol.for("react.context"),qb=Symbol.for("react.forward_ref"),Kb=Symbol.for("react.suspense"),Zb=Symbol.for("react.memo"),Qb=Symbol.for("react.lazy"),lg=Symbol.iterator;function Jb(t){return t===null||typeof t!="object"?null:(t=lg&&t[lg]||t["@@iterator"],typeof t=="function"?t:null)}var Oy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zy=Object.assign,By={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=By,this.updater=n||Oy}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vy(){}Vy.prototype=Ls.prototype;function dp(t,e,n){this.props=t,this.context=e,this.refs=By,this.updater=n||Oy}var fp=dp.prototype=new Vy;fp.constructor=dp;zy(fp,Ls.prototype);fp.isPureReactComponent=!0;var cg=Array.isArray,Hy=Object.prototype.hasOwnProperty,hp={current:null},Gy={key:!0,ref:!0,__self:!0,__source:!0};function jy(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Hy.call(e,i)&&!Gy.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:tl,type:t,key:o,ref:s,props:r,_owner:hp.current}}function eE(t,e){return{$$typeof:tl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pp(t){return typeof t=="object"&&t!==null&&t.$$typeof===tl}function tE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ug=/\/+/g;function sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tE(""+t.key):e.toString(36)}function gc(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case tl:case Gb:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+sd(s,0):i,cg(r)?(n="",t!=null&&(n=t.replace(ug,"$&/")+"/"),gc(r,e,n,"",function(c){return c})):r!=null&&(pp(r)&&(r=eE(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(ug,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",cg(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+sd(o,a);s+=gc(o,e,n,l,r)}else if(l=Jb(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+sd(o,a++),s+=gc(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function _l(t,e,n){if(t==null)return t;var i=[],r=0;return gc(t,i,"","",function(o){return e.call(n,o,r++)}),i}function nE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},xc={transition:null},iE={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:xc,ReactCurrentOwner:hp};function Wy(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:_l,forEach:function(t,e,n){_l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _l(t,function(){e++}),e},toArray:function(t){return _l(t,function(e){return e})||[]},only:function(t){if(!pp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Ls;ke.Fragment=jb;ke.Profiler=$b;ke.PureComponent=dp;ke.StrictMode=Wb;ke.Suspense=Kb;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;ke.act=Wy;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=zy({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=hp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hy.call(e,l)&&!Gy.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:tl,type:t.type,key:r,ref:o,props:i,_owner:s}};ke.createContext=function(t){return t={$$typeof:Yb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xb,_context:t},t.Consumer=t};ke.createElement=jy;ke.createFactory=function(t){var e=jy.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:qb,render:t}};ke.isValidElement=pp;ke.lazy=function(t){return{$$typeof:Qb,_payload:{_status:-1,_result:t},_init:nE}};ke.memo=function(t,e){return{$$typeof:Zb,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=xc.transition;xc.transition={};try{t()}finally{xc.transition=e}};ke.unstable_act=Wy;ke.useCallback=function(t,e){return un.current.useCallback(t,e)};ke.useContext=function(t){return un.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return un.current.useDeferredValue(t)};ke.useEffect=function(t,e){return un.current.useEffect(t,e)};ke.useId=function(){return un.current.useId()};ke.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return un.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};ke.useRef=function(t){return un.current.useRef(t)};ke.useState=function(t){return un.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return un.current.useTransition()};ke.version="18.3.1";Fy.exports=ke;var R=Fy.exports;const $y=Hb(R),dg=Vb({__proto__:null,default:$y},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rE=R,oE=Symbol.for("react.element"),sE=Symbol.for("react.fragment"),aE=Object.prototype.hasOwnProperty,lE=rE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cE={key:!0,ref:!0,__self:!0,__source:!0};function Xy(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)aE.call(e,i)&&!cE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:oE,type:t,key:o,ref:s,props:r,_owner:lE.current}}mu.Fragment=sE;mu.jsx=Xy;mu.jsxs=Xy;Ny.exports=mu;var _=Ny.exports,Of={},Yy={exports:{}},Dn={},qy={exports:{}},Ky={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,j){var G=U.length;U.push(j);e:for(;0<G;){var re=G-1>>>1,te=U[re];if(0<r(te,j))U[re]=j,U[G]=te,G=re;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var j=U[0],G=U.pop();if(G!==j){U[0]=G;e:for(var re=0,te=U.length,X=te>>>1;re<X;){var J=2*(re+1)-1,le=U[J],ne=J+1,k=U[ne];if(0>r(le,G))ne<te&&0>r(k,le)?(U[re]=k,U[ne]=G,re=ne):(U[re]=le,U[J]=G,re=J);else if(ne<te&&0>r(k,G))U[re]=k,U[ne]=G,re=ne;else break e}}return j}function r(U,j){var G=U.sortIndex-j.sortIndex;return G!==0?G:U.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,v=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(U){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=U)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function w(U){if(x=!1,y(U),!v)if(n(l)!==null)v=!0,ee(S);else{var j=n(c);j!==null&&$(w,j.startTime-U)}}function S(U,j){v=!1,x&&(x=!1,f(P),P=-1),p=!0;var G=h;try{for(y(j),d=n(l);d!==null&&(!(d.expirationTime>j)||U&&!F());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var te=re(d.expirationTime<=j);j=t.unstable_now(),typeof te=="function"?d.callback=te:d===n(l)&&i(l),y(j)}else i(l);d=n(l)}if(d!==null)var X=!0;else{var J=n(c);J!==null&&$(w,J.startTime-j),X=!1}return X}finally{d=null,h=G,p=!1}}var E=!1,M=null,P=-1,b=5,C=-1;function F(){return!(t.unstable_now()-C<b)}function O(){if(M!==null){var U=t.unstable_now();C=U;var j=!0;try{j=M(!0,U)}finally{j?I():(E=!1,M=null)}}else E=!1}var I;if(typeof m=="function")I=function(){m(O)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,V=z.port2;z.port1.onmessage=O,I=function(){V.postMessage(null)}}else I=function(){g(O,0)};function ee(U){M=U,E||(E=!0,I())}function $(U,j){P=g(function(){U(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,ee(S))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var G=h;h=j;try{return U()}finally{h=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,j){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var G=h;h=U;try{return j()}finally{h=G}},t.unstable_scheduleCallback=function(U,j,G){var re=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?re+G:re):G=re,U){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=G+te,U={id:u++,callback:j,priorityLevel:U,startTime:G,expirationTime:te,sortIndex:-1},G>re?(U.sortIndex=G,e(c,U),n(l)===null&&U===n(c)&&(x?(f(P),P=-1):x=!0,$(w,G-re))):(U.sortIndex=te,e(l,U),v||p||(v=!0,ee(S))),U},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(U){var j=h;return function(){var G=h;h=j;try{return U.apply(this,arguments)}finally{h=G}}}})(Ky);qy.exports=Ky;var uE=qy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dE=R,Pn=uE;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zy=new Set,Ea={};function _o(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(Ea[t]=e,t=0;t<e.length;t++)Zy.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=Object.prototype.hasOwnProperty,fE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fg={},hg={};function hE(t){return zf.call(hg,t)?!0:zf.call(fg,t)?!1:fE.test(t)?hg[t]=!0:(fg[t]=!0,!1)}function pE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mE(t,e,n,i){if(e===null||typeof e>"u"||pE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mp,gp);Ht[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mp,gp);Ht[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mp,gp);Ht[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function xp(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mE(e,n,r,i)&&(n=null),i||r===null?hE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ki=dE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sl=Symbol.for("react.element"),Ho=Symbol.for("react.portal"),Go=Symbol.for("react.fragment"),vp=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),Qy=Symbol.for("react.provider"),Jy=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),Hf=Symbol.for("react.suspense_list"),_p=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),e_=Symbol.for("react.offscreen"),pg=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=pg&&t[pg]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,ad;function ia(t){if(ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ad=e&&e[1]||""}return`
`+ad+t}var ld=!1;function cd(t,e){if(!t||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function gE(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=cd(t.type,!1),t;case 11:return t=cd(t.type.render,!1),t;case 1:return t=cd(t.type,!0),t;default:return""}}function Gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Go:return"Fragment";case Ho:return"Portal";case Bf:return"Profiler";case vp:return"StrictMode";case Vf:return"Suspense";case Hf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jy:return(t.displayName||"Context")+".Consumer";case Qy:return(t._context.displayName||"Context")+".Provider";case yp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _p:return e=t.displayName||null,e!==null?e:Gf(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Gf(t(e))}catch{}}return null}function xE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function t_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vE(t){var e=t_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=vE(t))}function n_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=t_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jf(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function i_(t,e){e=e.checked,e!=null&&xp(t,"checked",e,!1)}function Wf(t,e){i_(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$f(t,e.type,n):e.hasOwnProperty("defaultValue")&&$f(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $f(t,e,n){(e!=="number"||Oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ra(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function r_(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function o_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?o_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bl,s_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bl=bl||document.createElement("div"),bl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yE=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){yE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function a_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function l_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=a_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _E=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qf(t,e){if(e){if(_E[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zf=null;function Sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qf=null,as=null,ls=null;function yg(t){if(t=rl(t)){if(typeof Qf!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=_u(e),Qf(t.stateNode,t.type,e))}}function c_(t){as?ls?ls.push(t):ls=[t]:as=t}function u_(){if(as){var t=as,e=ls;if(ls=as=null,yg(t),e)for(t=0;t<e.length;t++)yg(e[t])}}function d_(t,e){return t(e)}function f_(){}var ud=!1;function h_(t,e,n){if(ud)return t(e,n);ud=!0;try{return d_(t,e,n)}finally{ud=!1,(as!==null||ls!==null)&&(f_(),u_())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=_u(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Jf=!1;if(Gi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Jf=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Jf=!1}function SE(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ua=!1,zc=null,Bc=!1,eh=null,wE={onError:function(t){ua=!0,zc=t}};function bE(t,e,n,i,r,o,s,a,l){ua=!1,zc=null,SE.apply(wE,arguments)}function EE(t,e,n,i,r,o,s,a,l){if(bE.apply(this,arguments),ua){if(ua){var c=zc;ua=!1,zc=null}else throw Error(oe(198));Bc||(Bc=!0,eh=c)}}function So(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _g(t){if(So(t)!==t)throw Error(oe(188))}function ME(t){var e=t.alternate;if(!e){if(e=So(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return _g(r),t;if(o===i)return _g(r),e;o=o.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function m_(t){return t=ME(t),t!==null?g_(t):null}function g_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=g_(t);if(e!==null)return e;t=t.sibling}return null}var x_=Pn.unstable_scheduleCallback,Sg=Pn.unstable_cancelCallback,TE=Pn.unstable_shouldYield,AE=Pn.unstable_requestPaint,xt=Pn.unstable_now,CE=Pn.unstable_getCurrentPriorityLevel,wp=Pn.unstable_ImmediatePriority,v_=Pn.unstable_UserBlockingPriority,Vc=Pn.unstable_NormalPriority,RE=Pn.unstable_LowPriority,y_=Pn.unstable_IdlePriority,gu=null,gi=null;function LE(t){if(gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:IE,PE=Math.log,DE=Math.LN2;function IE(t){return t>>>=0,t===0?32:31-(PE(t)/DE|0)|0}var El=64,Ml=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=oa(a):(o&=s,o!==0&&(i=oa(o)))}else s=n&~r,s!==0?i=oa(s):o!==0&&(i=oa(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function UE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-oi(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=UE(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function __(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function dd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function NE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var $e=0;function S_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var w_,Ep,b_,E_,M_,nh=!1,Tl=[],gr=null,xr=null,vr=null,Aa=new Map,Ca=new Map,fr=[],FE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wg(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function js(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=rl(e),e!==null&&Ep(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function OE(t,e,n,i,r){switch(e){case"focusin":return gr=js(gr,t,e,n,i,r),!0;case"dragenter":return xr=js(xr,t,e,n,i,r),!0;case"mouseover":return vr=js(vr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Aa.set(o,js(Aa.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ca.set(o,js(Ca.get(o)||null,t,e,n,i,r)),!0}return!1}function T_(t){var e=Zr(t.target);if(e!==null){var n=So(e);if(n!==null){if(e=n.tag,e===13){if(e=p_(n),e!==null){t.blockedOn=e,M_(t.priority,function(){b_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zf=i,n.target.dispatchEvent(i),Zf=null}else return e=rl(n),e!==null&&Ep(e),t.blockedOn=n,!1;e.shift()}return!0}function bg(t,e,n){vc(t)&&n.delete(e)}function zE(){nh=!1,gr!==null&&vc(gr)&&(gr=null),xr!==null&&vc(xr)&&(xr=null),vr!==null&&vc(vr)&&(vr=null),Aa.forEach(bg),Ca.forEach(bg)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,nh||(nh=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,zE)))}function Ra(t){function e(r){return Ws(r,t)}if(0<Tl.length){Ws(Tl[0],t);for(var n=1;n<Tl.length;n++){var i=Tl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&Ws(gr,t),xr!==null&&Ws(xr,t),vr!==null&&Ws(vr,t),Aa.forEach(e),Ca.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)T_(n),n.blockedOn===null&&fr.shift()}var cs=Ki.ReactCurrentBatchConfig,Gc=!0;function BE(t,e,n,i){var r=$e,o=cs.transition;cs.transition=null;try{$e=1,Mp(t,e,n,i)}finally{$e=r,cs.transition=o}}function VE(t,e,n,i){var r=$e,o=cs.transition;cs.transition=null;try{$e=4,Mp(t,e,n,i)}finally{$e=r,cs.transition=o}}function Mp(t,e,n,i){if(Gc){var r=ih(t,e,n,i);if(r===null)Sd(t,e,i,jc,n),wg(t,i);else if(OE(r,t,e,n,i))i.stopPropagation();else if(wg(t,i),e&4&&-1<FE.indexOf(t)){for(;r!==null;){var o=rl(r);if(o!==null&&w_(o),o=ih(t,e,n,i),o===null&&Sd(t,e,i,jc,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Sd(t,e,i,null,n)}}var jc=null;function ih(t,e,n,i){if(jc=null,t=Sp(i),t=Zr(t),t!==null)if(e=So(t),e===null)t=null;else if(n=e.tag,n===13){if(t=p_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return jc=t,null}function A_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CE()){case wp:return 1;case v_:return 4;case Vc:case RE:return 16;case y_:return 536870912;default:return 16}default:return 16}}var pr=null,Tp=null,yc=null;function C_(){if(yc)return yc;var t,e=Tp,n=e.length,i,r="value"in pr?pr.value:pr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return yc=r.slice(t,1<i?1-i:void 0)}function _c(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function Eg(){return!1}function In(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Al:Eg,this.isPropagationStopped=Eg,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ap=In(Ps),il=ct({},Ps,{view:0,detail:0}),HE=In(il),fd,hd,$s,xu=ct({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(fd=t.screenX-$s.screenX,hd=t.screenY-$s.screenY):hd=fd=0,$s=t),fd)},movementY:function(t){return"movementY"in t?t.movementY:hd}}),Mg=In(xu),GE=ct({},xu,{dataTransfer:0}),jE=In(GE),WE=ct({},il,{relatedTarget:0}),pd=In(WE),$E=ct({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),XE=In($E),YE=ct({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qE=In(YE),KE=ct({},Ps,{data:0}),Tg=In(KE),ZE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JE[t])?!!e[t]:!1}function Cp(){return eM}var tM=ct({},il,{key:function(t){if(t.key){var e=ZE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cp,charCode:function(t){return t.type==="keypress"?_c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nM=In(tM),iM=ct({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ag=In(iM),rM=ct({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cp}),oM=In(rM),sM=ct({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),aM=In(sM),lM=ct({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cM=In(lM),uM=[9,13,27,32],Rp=Gi&&"CompositionEvent"in window,da=null;Gi&&"documentMode"in document&&(da=document.documentMode);var dM=Gi&&"TextEvent"in window&&!da,R_=Gi&&(!Rp||da&&8<da&&11>=da),Cg=String.fromCharCode(32),Rg=!1;function L_(t,e){switch(t){case"keyup":return uM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jo=!1;function fM(t,e){switch(t){case"compositionend":return P_(e);case"keypress":return e.which!==32?null:(Rg=!0,Cg);case"textInput":return t=e.data,t===Cg&&Rg?null:t;default:return null}}function hM(t,e){if(jo)return t==="compositionend"||!Rp&&L_(t,e)?(t=C_(),yc=Tp=pr=null,jo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R_&&e.locale!=="ko"?null:e.data;default:return null}}var pM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!pM[t.type]:e==="textarea"}function D_(t,e,n,i){c_(i),e=Wc(e,"onChange"),0<e.length&&(n=new Ap("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fa=null,La=null;function mM(t){G_(t,0)}function vu(t){var e=Xo(t);if(n_(e))return t}function gM(t,e){if(t==="change")return e}var I_=!1;if(Gi){var md;if(Gi){var gd="oninput"in document;if(!gd){var Pg=document.createElement("div");Pg.setAttribute("oninput","return;"),gd=typeof Pg.oninput=="function"}md=gd}else md=!1;I_=md&&(!document.documentMode||9<document.documentMode)}function Dg(){fa&&(fa.detachEvent("onpropertychange",U_),La=fa=null)}function U_(t){if(t.propertyName==="value"&&vu(La)){var e=[];D_(e,La,t,Sp(t)),h_(mM,e)}}function xM(t,e,n){t==="focusin"?(Dg(),fa=e,La=n,fa.attachEvent("onpropertychange",U_)):t==="focusout"&&Dg()}function vM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vu(La)}function yM(t,e){if(t==="click")return vu(e)}function _M(t,e){if(t==="input"||t==="change")return vu(e)}function SM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:SM;function Pa(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zf.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function Ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ug(t,e){var n=Ig(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ig(n)}}function k_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function N_(){for(var t=window,e=Oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oc(t.document)}return e}function Lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wM(t){var e=N_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k_(n.ownerDocument.documentElement,n)){if(i!==null&&Lp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Ug(n,o);var s=Ug(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bM=Gi&&"documentMode"in document&&11>=document.documentMode,Wo=null,rh=null,ha=null,oh=!1;function kg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||Wo==null||Wo!==Oc(i)||(i=Wo,"selectionStart"in i&&Lp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ha&&Pa(ha,i)||(ha=i,i=Wc(rh,"onSelect"),0<i.length&&(e=new Ap("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Wo)))}function Cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $o={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},xd={},F_={};Gi&&(F_=document.createElement("div").style,"AnimationEvent"in window||(delete $o.animationend.animation,delete $o.animationiteration.animation,delete $o.animationstart.animation),"TransitionEvent"in window||delete $o.transitionend.transition);function yu(t){if(xd[t])return xd[t];if(!$o[t])return t;var e=$o[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in F_)return xd[t]=e[n];return t}var O_=yu("animationend"),z_=yu("animationiteration"),B_=yu("animationstart"),V_=yu("transitionend"),H_=new Map,Ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){H_.set(t,e),_o(e,[t])}for(var vd=0;vd<Ng.length;vd++){var yd=Ng[vd],EM=yd.toLowerCase(),MM=yd[0].toUpperCase()+yd.slice(1);Pr(EM,"on"+MM)}Pr(O_,"onAnimationEnd");Pr(z_,"onAnimationIteration");Pr(B_,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(V_,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);_o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_o("onBeforeInput",["compositionend","keypress","textInput","paste"]);_o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TM=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function Fg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,EE(i,e,void 0,t),t.currentTarget=null}function G_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Fg(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Fg(r,a,c),o=l}}}if(Bc)throw t=eh,Bc=!1,eh=null,t}function Je(t,e){var n=e[uh];n===void 0&&(n=e[uh]=new Set);var i=t+"__bubble";n.has(i)||(j_(e,t,2,!1),n.add(i))}function _d(t,e,n){var i=0;e&&(i|=4),j_(n,t,i,e)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function Da(t){if(!t[Rl]){t[Rl]=!0,Zy.forEach(function(n){n!=="selectionchange"&&(TM.has(n)||_d(n,!1,t),_d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Rl]||(e[Rl]=!0,_d("selectionchange",!1,e))}}function j_(t,e,n,i){switch(A_(e)){case 1:var r=BE;break;case 4:r=VE;break;default:r=Mp}n=r.bind(null,e,n,t),r=void 0,!Jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Sd(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Zr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}h_(function(){var c=o,u=Sp(n),d=[];e:{var h=H_.get(t);if(h!==void 0){var p=Ap,v=t;switch(t){case"keypress":if(_c(n)===0)break e;case"keydown":case"keyup":p=nM;break;case"focusin":v="focus",p=pd;break;case"focusout":v="blur",p=pd;break;case"beforeblur":case"afterblur":p=pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=jE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=oM;break;case O_:case z_:case B_:p=XE;break;case V_:p=aM;break;case"scroll":p=HE;break;case"wheel":p=cM;break;case"copy":case"cut":case"paste":p=qE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ag}var x=(e&4)!==0,g=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var m=c,y;m!==null;){y=m;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,f!==null&&(w=Ta(m,f),w!=null&&x.push(Ia(m,w,y)))),g)break;m=m.return}0<x.length&&(h=new p(h,v,null,n,u),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Zf&&(v=n.relatedTarget||n.fromElement)&&(Zr(v)||v[ji]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Zr(v):null,v!==null&&(g=So(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Mg,w="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(x=Ag,w="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?h:Xo(p),y=v==null?h:Xo(v),h=new x(w,m+"leave",p,n,u),h.target=g,h.relatedTarget=y,w=null,Zr(u)===c&&(x=new x(f,m+"enter",v,n,u),x.target=y,x.relatedTarget=g,w=x),g=w,p&&v)t:{for(x=p,f=v,m=0,y=x;y;y=bo(y))m++;for(y=0,w=f;w;w=bo(w))y++;for(;0<m-y;)x=bo(x),m--;for(;0<y-m;)f=bo(f),y--;for(;m--;){if(x===f||f!==null&&x===f.alternate)break t;x=bo(x),f=bo(f)}x=null}else x=null;p!==null&&Og(d,h,p,x,!1),v!==null&&g!==null&&Og(d,g,v,x,!0)}}e:{if(h=c?Xo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=gM;else if(Lg(h))if(I_)S=_M;else{S=vM;var E=xM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=yM);if(S&&(S=S(t,c))){D_(d,S,n,u);break e}E&&E(t,h,c),t==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&$f(h,"number",h.value)}switch(E=c?Xo(c):window,t){case"focusin":(Lg(E)||E.contentEditable==="true")&&(Wo=E,rh=c,ha=null);break;case"focusout":ha=rh=Wo=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,kg(d,n,u);break;case"selectionchange":if(bM)break;case"keydown":case"keyup":kg(d,n,u)}var M;if(Rp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else jo?L_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(R_&&n.locale!=="ko"&&(jo||P!=="onCompositionStart"?P==="onCompositionEnd"&&jo&&(M=C_()):(pr=u,Tp="value"in pr?pr.value:pr.textContent,jo=!0)),E=Wc(c,P),0<E.length&&(P=new Tg(P,t,null,n,u),d.push({event:P,listeners:E}),M?P.data=M:(M=P_(n),M!==null&&(P.data=M)))),(M=dM?fM(t,n):hM(t,n))&&(c=Wc(c,"onBeforeInput"),0<c.length&&(u=new Tg("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=M))}G_(d,e)})}function Ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ta(t,n),o!=null&&i.unshift(Ia(t,o,r)),o=Ta(t,e),o!=null&&i.push(Ia(t,o,r))),t=t.return}return i}function bo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Og(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ta(n,o),l!=null&&s.unshift(Ia(n,l,a))):r||(l=Ta(n,o),l!=null&&s.push(Ia(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var AM=/\r\n?/g,CM=/\u0000|\uFFFD/g;function zg(t){return(typeof t=="string"?t:""+t).replace(AM,`
`).replace(CM,"")}function Ll(t,e,n){if(e=zg(e),zg(t)!==e&&n)throw Error(oe(425))}function $c(){}var sh=null,ah=null;function lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,RM=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,LM=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(t){return Bg.resolve(null).then(t).catch(PM)}:ch;function PM(t){setTimeout(function(){throw t})}function wd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),mi="__reactFiber$"+Ds,Ua="__reactProps$"+Ds,ji="__reactContainer$"+Ds,uh="__reactEvents$"+Ds,DM="__reactListeners$"+Ds,IM="__reactHandles$"+Ds;function Zr(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vg(t);t!==null;){if(n=t[mi])return n;t=Vg(t)}return e}t=n,n=t.parentNode}return null}function rl(t){return t=t[mi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function _u(t){return t[Ua]||null}var dh=[],Yo=-1;function Dr(t){return{current:t}}function et(t){0>Yo||(t.current=dh[Yo],dh[Yo]=null,Yo--)}function Qe(t,e){Yo++,dh[Yo]=t.current,t.current=e}var Tr={},Jt=Dr(Tr),xn=Dr(!1),fo=Tr;function xs(t,e){var n=t.type.contextTypes;if(!n)return Tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Xc(){et(xn),et(Jt)}function Hg(t,e,n){if(Jt.current!==Tr)throw Error(oe(168));Qe(Jt,e),Qe(xn,n)}function W_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,xE(t)||"Unknown",r));return ct({},n,i)}function Yc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,fo=Jt.current,Qe(Jt,t),Qe(xn,xn.current),!0}function Gg(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=W_(t,e,fo),i.__reactInternalMemoizedMergedChildContext=t,et(xn),et(Jt),Qe(Jt,t)):et(xn),Qe(xn,n)}var Ni=null,Su=!1,bd=!1;function $_(t){Ni===null?Ni=[t]:Ni.push(t)}function UM(t){Su=!0,$_(t)}function Ir(){if(!bd&&Ni!==null){bd=!0;var t=0,e=$e;try{var n=Ni;for($e=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,Su=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),x_(wp,Ir),r}finally{$e=e,bd=!1}}return null}var qo=[],Ko=0,qc=null,Kc=0,zn=[],Bn=0,ho=null,Oi=1,zi="";function jr(t,e){qo[Ko++]=Kc,qo[Ko++]=qc,qc=t,Kc=e}function X_(t,e,n){zn[Bn++]=Oi,zn[Bn++]=zi,zn[Bn++]=ho,ho=t;var i=Oi;t=zi;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var o=32-oi(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Oi=1<<32-oi(e)+r|n<<r|i,zi=o+t}else Oi=1<<o|n<<r|i,zi=t}function Pp(t){t.return!==null&&(jr(t,1),X_(t,1,0))}function Dp(t){for(;t===qc;)qc=qo[--Ko],qo[Ko]=null,Kc=qo[--Ko],qo[Ko]=null;for(;t===ho;)ho=zn[--Bn],zn[Bn]=null,zi=zn[--Bn],zn[Bn]=null,Oi=zn[--Bn],zn[Bn]=null}var Cn=null,An=null,nt=!1,ni=null;function Y_(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,An=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ho!==null?{id:Oi,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,An=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hh(t){if(nt){var e=An;if(e){var n=e;if(!jg(t,e)){if(fh(t))throw Error(oe(418));e=yr(n.nextSibling);var i=Cn;e&&jg(t,e)?Y_(i,n):(t.flags=t.flags&-4097|2,nt=!1,Cn=t)}}else{if(fh(t))throw Error(oe(418));t.flags=t.flags&-4097|2,nt=!1,Cn=t}}}function Wg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function Pl(t){if(t!==Cn)return!1;if(!nt)return Wg(t),nt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lh(t.type,t.memoizedProps)),e&&(e=An)){if(fh(t))throw q_(),Error(oe(418));for(;e;)Y_(t,e),e=yr(e.nextSibling)}if(Wg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Cn?yr(t.stateNode.nextSibling):null;return!0}function q_(){for(var t=An;t;)t=yr(t.nextSibling)}function vs(){An=Cn=null,nt=!1}function Ip(t){ni===null?ni=[t]:ni.push(t)}var kM=Ki.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Dl(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $g(t){var e=t._init;return e(t._payload)}function K_(t){function e(f,m){if(t){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=br(f,m),f.index=0,f.sibling=null,f}function o(f,m,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=2,m):y):(f.flags|=2,m)):(f.flags|=1048576,m)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,m,y,w){return m===null||m.tag!==6?(m=Ld(y,f.mode,w),m.return=f,m):(m=r(m,y),m.return=f,m)}function l(f,m,y,w){var S=y.type;return S===Go?u(f,m,y.props.children,w,y.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ur&&$g(S)===m.type)?(w=r(m,y.props),w.ref=Xs(f,m,y),w.return=f,w):(w=Ac(y.type,y.key,y.props,null,f.mode,w),w.ref=Xs(f,m,y),w.return=f,w)}function c(f,m,y,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Pd(y,f.mode,w),m.return=f,m):(m=r(m,y.children||[]),m.return=f,m)}function u(f,m,y,w,S){return m===null||m.tag!==7?(m=oo(y,f.mode,w,S),m.return=f,m):(m=r(m,y),m.return=f,m)}function d(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ld(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Sl:return y=Ac(m.type,m.key,m.props,null,f.mode,y),y.ref=Xs(f,null,m),y.return=f,y;case Ho:return m=Pd(m,f.mode,y),m.return=f,m;case ur:var w=m._init;return d(f,w(m._payload),y)}if(ra(m)||Hs(m))return m=oo(m,f.mode,y,null),m.return=f,m;Dl(f,m)}return null}function h(f,m,y,w){var S=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(f,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sl:return y.key===S?l(f,m,y,w):null;case Ho:return y.key===S?c(f,m,y,w):null;case ur:return S=y._init,h(f,m,S(y._payload),w)}if(ra(y)||Hs(y))return S!==null?null:u(f,m,y,w,null);Dl(f,y)}return null}function p(f,m,y,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(y)||null,a(m,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Sl:return f=f.get(w.key===null?y:w.key)||null,l(m,f,w,S);case Ho:return f=f.get(w.key===null?y:w.key)||null,c(m,f,w,S);case ur:var E=w._init;return p(f,m,y,E(w._payload),S)}if(ra(w)||Hs(w))return f=f.get(y)||null,u(m,f,w,S,null);Dl(m,w)}return null}function v(f,m,y,w){for(var S=null,E=null,M=m,P=m=0,b=null;M!==null&&P<y.length;P++){M.index>P?(b=M,M=null):b=M.sibling;var C=h(f,M,y[P],w);if(C===null){M===null&&(M=b);break}t&&M&&C.alternate===null&&e(f,M),m=o(C,m,P),E===null?S=C:E.sibling=C,E=C,M=b}if(P===y.length)return n(f,M),nt&&jr(f,P),S;if(M===null){for(;P<y.length;P++)M=d(f,y[P],w),M!==null&&(m=o(M,m,P),E===null?S=M:E.sibling=M,E=M);return nt&&jr(f,P),S}for(M=i(f,M);P<y.length;P++)b=p(M,f,P,y[P],w),b!==null&&(t&&b.alternate!==null&&M.delete(b.key===null?P:b.key),m=o(b,m,P),E===null?S=b:E.sibling=b,E=b);return t&&M.forEach(function(F){return e(f,F)}),nt&&jr(f,P),S}function x(f,m,y,w){var S=Hs(y);if(typeof S!="function")throw Error(oe(150));if(y=S.call(y),y==null)throw Error(oe(151));for(var E=S=null,M=m,P=m=0,b=null,C=y.next();M!==null&&!C.done;P++,C=y.next()){M.index>P?(b=M,M=null):b=M.sibling;var F=h(f,M,C.value,w);if(F===null){M===null&&(M=b);break}t&&M&&F.alternate===null&&e(f,M),m=o(F,m,P),E===null?S=F:E.sibling=F,E=F,M=b}if(C.done)return n(f,M),nt&&jr(f,P),S;if(M===null){for(;!C.done;P++,C=y.next())C=d(f,C.value,w),C!==null&&(m=o(C,m,P),E===null?S=C:E.sibling=C,E=C);return nt&&jr(f,P),S}for(M=i(f,M);!C.done;P++,C=y.next())C=p(M,f,P,C.value,w),C!==null&&(t&&C.alternate!==null&&M.delete(C.key===null?P:C.key),m=o(C,m,P),E===null?S=C:E.sibling=C,E=C);return t&&M.forEach(function(O){return e(f,O)}),nt&&jr(f,P),S}function g(f,m,y,w){if(typeof y=="object"&&y!==null&&y.type===Go&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Sl:e:{for(var S=y.key,E=m;E!==null;){if(E.key===S){if(S=y.type,S===Go){if(E.tag===7){n(f,E.sibling),m=r(E,y.props.children),m.return=f,f=m;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ur&&$g(S)===E.type){n(f,E.sibling),m=r(E,y.props),m.ref=Xs(f,E,y),m.return=f,f=m;break e}n(f,E);break}else e(f,E);E=E.sibling}y.type===Go?(m=oo(y.props.children,f.mode,w,y.key),m.return=f,f=m):(w=Ac(y.type,y.key,y.props,null,f.mode,w),w.ref=Xs(f,m,y),w.return=f,f=w)}return s(f);case Ho:e:{for(E=y.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(f,m.sibling),m=r(m,y.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=Pd(y,f.mode,w),m.return=f,f=m}return s(f);case ur:return E=y._init,g(f,m,E(y._payload),w)}if(ra(y))return v(f,m,y,w);if(Hs(y))return x(f,m,y,w);Dl(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,y),m.return=f,f=m):(n(f,m),m=Ld(y,f.mode,w),m.return=f,f=m),s(f)):n(f,m)}return g}var ys=K_(!0),Z_=K_(!1),Zc=Dr(null),Qc=null,Zo=null,Up=null;function kp(){Up=Zo=Qc=null}function Np(t){var e=Zc.current;et(Zc),t._currentValue=e}function ph(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function us(t,e){Qc=t,Up=Zo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Up!==t)if(t={context:t,memoizedValue:e,next:null},Zo===null){if(Qc===null)throw Error(oe(308));Zo=t,Qc.dependencies={lanes:0,firstContext:t}}else Zo=Zo.next=t;return e}var Qr=null;function Fp(t){Qr===null?Qr=[t]:Qr.push(t)}function Q_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Fp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Wi(t,i)}function Wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function Op(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ve&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wi(t,n)}return r=i.interleaved,r===null?(e.next=e,Fp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wi(t,n)}function Sc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bp(t,n)}}function Xg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Jc(t,e,n,i){var r=t.updateQueue;dr=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,u=c=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=ct({},d,h);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);mo|=s,t.lanes=s,t.memoizedState=d}}function Yg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var ol={},xi=Dr(ol),ka=Dr(ol),Na=Dr(ol);function Jr(t){if(t===ol)throw Error(oe(174));return t}function zp(t,e){switch(Qe(Na,e),Qe(ka,t),Qe(xi,ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yf(e,t)}et(xi),Qe(xi,e)}function _s(){et(xi),et(ka),et(Na)}function e1(t){Jr(Na.current);var e=Jr(xi.current),n=Yf(e,t.type);e!==n&&(Qe(ka,t),Qe(xi,n))}function Bp(t){ka.current===t&&(et(xi),et(ka))}var rt=Dr(0);function eu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ed=[];function Vp(){for(var t=0;t<Ed.length;t++)Ed[t]._workInProgressVersionPrimary=null;Ed.length=0}var wc=Ki.ReactCurrentDispatcher,Md=Ki.ReactCurrentBatchConfig,po=0,st=null,bt=null,Pt=null,tu=!1,pa=!1,Fa=0,NM=0;function jt(){throw Error(oe(321))}function Hp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Gp(t,e,n,i,r,o){if(po=o,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wc.current=t===null||t.memoizedState===null?BM:VM,t=n(i,r),pa){o=0;do{if(pa=!1,Fa=0,25<=o)throw Error(oe(301));o+=1,Pt=bt=null,e.updateQueue=null,wc.current=HM,t=n(i,r)}while(pa)}if(wc.current=nu,e=bt!==null&&bt.next!==null,po=0,Pt=bt=st=null,tu=!1,e)throw Error(oe(300));return t}function jp(){var t=Fa!==0;return Fa=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?st.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function $n(){if(bt===null){var t=st.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Pt===null?st.memoizedState:Pt.next;if(e!==null)Pt=e,bt=t;else{if(t===null)throw Error(oe(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Pt===null?st.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Oa(t,e){return typeof e=="function"?e(t):e}function Td(t){var e=$n(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((po&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,st.lanes|=u,mo|=u}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,ai(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,st.lanes|=o,mo|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=$n(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);ai(o,e.memoizedState)||(mn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function t1(){}function n1(t,e){var n=st,i=$n(),r=e(),o=!ai(i.memoizedState,r);if(o&&(i.memoizedState=r,mn=!0),i=i.queue,Wp(o1.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,za(9,r1.bind(null,n,i,r,e),void 0,null),It===null)throw Error(oe(349));po&30||i1(n,e,r)}return r}function i1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function r1(t,e,n,i){e.value=n,e.getSnapshot=i,s1(e)&&a1(t)}function o1(t,e,n){return n(function(){s1(e)&&a1(t)})}function s1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function a1(t){var e=Wi(t,1);e!==null&&si(e,t,1,-1)}function qg(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=zM.bind(null,st,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function l1(){return $n().memoizedState}function bc(t,e,n,i){var r=di();st.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function wu(t,e,n,i){var r=$n();i=i===void 0?null:i;var o=void 0;if(bt!==null){var s=bt.memoizedState;if(o=s.destroy,i!==null&&Hp(i,s.deps)){r.memoizedState=za(e,n,o,i);return}}st.flags|=t,r.memoizedState=za(1|e,n,o,i)}function Kg(t,e){return bc(8390656,8,t,e)}function Wp(t,e){return wu(2048,8,t,e)}function c1(t,e){return wu(4,2,t,e)}function u1(t,e){return wu(4,4,t,e)}function d1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f1(t,e,n){return n=n!=null?n.concat([t]):null,wu(4,4,d1.bind(null,e,t),n)}function $p(){}function h1(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function p1(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function m1(t,e,n){return po&21?(ai(n,e)||(n=__(),st.lanes|=n,mo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function FM(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var i=Md.transition;Md.transition={};try{t(!1),e()}finally{$e=n,Md.transition=i}}function g1(){return $n().memoizedState}function OM(t,e,n){var i=wr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},x1(t))v1(e,n);else if(n=Q_(t,e,n,i),n!==null){var r=ln();si(n,t,i,r),y1(n,e,i)}}function zM(t,e,n){var i=wr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(x1(t))v1(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,s)){var l=e.interleaved;l===null?(r.next=r,Fp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Q_(t,e,r,i),n!==null&&(r=ln(),si(n,t,i,r),y1(n,e,i))}}function x1(t){var e=t.alternate;return t===st||e!==null&&e===st}function v1(t,e){pa=tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y1(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bp(t,n)}}var nu={readContext:Wn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},BM={readContext:Wn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:Kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bc(4194308,4,d1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bc(4194308,4,t,e)},useInsertionEffect:function(t,e){return bc(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=OM.bind(null,st,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:qg,useDebugValue:$p,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=qg(!1),e=t[0];return t=FM.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=st,r=di();if(nt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),It===null)throw Error(oe(349));po&30||i1(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Kg(o1.bind(null,i,o,t),[t]),i.flags|=2048,za(9,r1.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=di(),e=It.identifierPrefix;if(nt){var n=zi,i=Oi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VM={readContext:Wn,useCallback:h1,useContext:Wn,useEffect:Wp,useImperativeHandle:f1,useInsertionEffect:c1,useLayoutEffect:u1,useMemo:p1,useReducer:Td,useRef:l1,useState:function(){return Td(Oa)},useDebugValue:$p,useDeferredValue:function(t){var e=$n();return m1(e,bt.memoizedState,t)},useTransition:function(){var t=Td(Oa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:t1,useSyncExternalStore:n1,useId:g1,unstable_isNewReconciler:!1},HM={readContext:Wn,useCallback:h1,useContext:Wn,useEffect:Wp,useImperativeHandle:f1,useInsertionEffect:c1,useLayoutEffect:u1,useMemo:p1,useReducer:Ad,useRef:l1,useState:function(){return Ad(Oa)},useDebugValue:$p,useDeferredValue:function(t){var e=$n();return bt===null?e.memoizedState=t:m1(e,bt.memoizedState,t)},useTransition:function(){var t=Ad(Oa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:t1,useSyncExternalStore:n1,useId:g1,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bu={isMounted:function(t){return(t=t._reactInternals)?So(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=wr(t),o=Bi(i,r);o.payload=e,n!=null&&(o.callback=n),e=_r(t,o,r),e!==null&&(si(e,t,r,i),Sc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=wr(t),o=Bi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=_r(t,o,r),e!==null&&(si(e,t,r,i),Sc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=wr(t),r=Bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=_r(t,r,i),e!==null&&(si(e,t,i,n),Sc(e,t,i))}};function Zg(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,i)||!Pa(r,o):!0}function _1(t,e,n){var i=!1,r=Tr,o=e.contextType;return typeof o=="object"&&o!==null?o=Wn(o):(r=vn(e)?fo:Jt.current,i=e.contextTypes,o=(i=i!=null)?xs(t,r):Tr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Qg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bu.enqueueReplaceState(e,e.state,null)}function gh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Op(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Wn(o):(o=vn(e)?fo:Jt.current,r.context=xs(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(mh(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bu.enqueueReplaceState(r,r.state,null),Jc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",i=e;do n+=gE(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GM=typeof WeakMap=="function"?WeakMap:Map;function S1(t,e,n){n=Bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ru||(ru=!0,Ah=i),xh(t,e)},n}function w1(t,e,n){n=Bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xh(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Jg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new GM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iT.bind(null,t,e,n),e.then(t,t))}function e0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function t0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bi(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var jM=Ki.ReactCurrentOwner,mn=!1;function rn(t,e,n,i){e.child=t===null?Z_(e,null,n,i):ys(e,t.child,n,i)}function n0(t,e,n,i,r){n=n.render;var o=e.ref;return us(e,r),i=Gp(t,e,n,i,o,r),n=jp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(nt&&n&&Pp(e),e.flags|=1,rn(t,e,i,r),e.child)}function i0(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!em(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,b1(t,e,o,i,r)):(t=Ac(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(s,i)&&t.ref===e.ref)return $i(t,e,r)}return e.flags|=1,t=br(o,i),t.ref=e.ref,t.return=e,e.child=t}function b1(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Pa(o,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,$i(t,e,r)}return vh(t,e,n,i,r)}function E1(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(Jo,Tn),Tn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(Jo,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Qe(Jo,Tn),Tn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Qe(Jo,Tn),Tn|=i;return rn(t,e,r,n),e.child}function M1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,i,r){var o=vn(n)?fo:Jt.current;return o=xs(e,o),us(e,r),n=Gp(t,e,n,i,o,r),i=jp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(nt&&i&&Pp(e),e.flags|=1,rn(t,e,n,r),e.child)}function r0(t,e,n,i,r){if(vn(n)){var o=!0;Yc(e)}else o=!1;if(us(e,r),e.stateNode===null)Ec(t,e),_1(e,n,i),gh(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=vn(n)?fo:Jt.current,c=xs(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Qg(e,s,i,c),dr=!1;var h=e.memoizedState;s.state=h,Jc(e,i,s,r),l=e.memoizedState,a!==i||h!==l||xn.current||dr?(typeof u=="function"&&(mh(e,n,u,i),l=e.memoizedState),(a=dr||Zg(e,n,a,i,h,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,J_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),s.props=c,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=vn(n)?fo:Jt.current,l=xs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Qg(e,s,i,l),dr=!1,h=e.memoizedState,s.state=h,Jc(e,i,s,r);var v=e.memoizedState;a!==d||h!==v||xn.current||dr?(typeof p=="function"&&(mh(e,n,p,i),v=e.memoizedState),(c=dr||Zg(e,n,c,i,h,v,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),s.props=i,s.state=v,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return yh(t,e,n,i,o,r)}function yh(t,e,n,i,r,o){M1(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Gg(e,n,!1),$i(t,e,o);i=e.stateNode,jM.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=ys(e,t.child,null,o),e.child=ys(e,null,a,o)):rn(t,e,a,o),e.memoizedState=i.state,r&&Gg(e,n,!0),e.child}function T1(t){var e=t.stateNode;e.pendingContext?Hg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hg(t,e.context,!1),zp(t,e.containerInfo)}function o0(t,e,n,i,r){return vs(),Ip(r),e.flags|=256,rn(t,e,n,i),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function A1(t,e,n){var i=e.pendingProps,r=rt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Qe(rt,r&1),t===null)return hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Tu(s,i,0,null),t=oo(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Sh(n),e.memoizedState=_h,t):Xp(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return WM(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=br(a,o):(o=oo(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Sh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=_h,i}return o=t.child,t=o.sibling,i=br(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xp(t,e){return e=Tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Il(t,e,n,i){return i!==null&&Ip(i),ys(e,t.child,null,n),t=Xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function WM(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Cd(Error(oe(422))),Il(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Tu({mode:"visible",children:i.children},r,0,null),o=oo(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ys(e,t.child,null,s),e.child.memoizedState=Sh(s),e.memoizedState=_h,o);if(!(e.mode&1))return Il(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(oe(419)),i=Cd(o,i,void 0),Il(t,e,s,i)}if(a=(s&t.childLanes)!==0,mn||a){if(i=It,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Wi(t,r),si(i,t,r,-1))}return Jp(),i=Cd(Error(oe(421))),Il(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=rT.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,An=yr(r.nextSibling),Cn=e,nt=!0,ni=null,t!==null&&(zn[Bn++]=Oi,zn[Bn++]=zi,zn[Bn++]=ho,Oi=t.id,zi=t.overflow,ho=e),e=Xp(e,i.children),e.flags|=4096,e)}function s0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ph(t.return,e,n)}function Rd(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function C1(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(rn(t,e,i.children,n),i=rt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&s0(t,n,e);else if(t.tag===19)s0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Qe(rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&eu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Rd(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&eu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Rd(e,!0,n,null,o);break;case"together":Rd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $M(t,e,n){switch(e.tag){case 3:T1(e),vs();break;case 5:e1(e);break;case 1:vn(e.type)&&Yc(e);break;case 4:zp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Qe(Zc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Qe(rt,rt.current&1),e.flags|=128,null):n&e.child.childLanes?A1(t,e,n):(Qe(rt,rt.current&1),t=$i(t,e,n),t!==null?t.sibling:null);Qe(rt,rt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return C1(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Qe(rt,rt.current),i)break;return null;case 22:case 23:return e.lanes=0,E1(t,e,n)}return $i(t,e,n)}var R1,wh,L1,P1;R1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wh=function(){};L1=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(xi.current);var o=null;switch(n){case"input":r=jf(t,r),i=jf(t,i),o=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),o=[];break;case"textarea":r=Xf(t,r),i=Xf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=$c)}qf(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ea.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Je("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};P1=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function XM(t,e,n){var i=e.pendingProps;switch(Dp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return vn(e.type)&&Xc(),Wt(e),null;case 3:return i=e.stateNode,_s(),et(xn),et(Jt),Vp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Lh(ni),ni=null))),wh(t,e),Wt(e),null;case 5:Bp(e);var r=Jr(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)L1(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Wt(e),null}if(t=Jr(xi.current),Pl(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[mi]=e,i[Ua]=o,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",i),Je("close",i);break;case"iframe":case"object":case"embed":Je("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)Je(sa[r],i);break;case"source":Je("error",i);break;case"img":case"image":case"link":Je("error",i),Je("load",i);break;case"details":Je("toggle",i);break;case"input":mg(i,o),Je("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Je("invalid",i);break;case"textarea":xg(i,o),Je("invalid",i)}qf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ll(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ll(i.textContent,a,t),r=["children",""+a]):Ea.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Je("scroll",i)}switch(n){case"input":wl(i),gg(i,o,!0);break;case"textarea":wl(i),vg(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=$c)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=o_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[mi]=e,t[Ua]=i,R1(t,e,!1,!1),e.stateNode=t;e:{switch(s=Kf(n,i),n){case"dialog":Je("cancel",t),Je("close",t),r=i;break;case"iframe":case"object":case"embed":Je("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)Je(sa[r],t);r=i;break;case"source":Je("error",t),r=i;break;case"img":case"image":case"link":Je("error",t),Je("load",t),r=i;break;case"details":Je("toggle",t),r=i;break;case"input":mg(t,i),r=jf(t,i),Je("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),Je("invalid",t);break;case"textarea":xg(t,i),r=Xf(t,i),Je("invalid",t);break;default:r=i}qf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?l_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&s_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ea.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Je("scroll",t):l!=null&&xp(t,o,l,s))}switch(n){case"input":wl(t),gg(t,i,!1);break;case"textarea":wl(t),vg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?ss(t,!!i.multiple,o,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=$c)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)P1(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Jr(Na.current),Jr(xi.current),Pl(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(o=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:Ll(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ll(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return Wt(e),null;case 13:if(et(rt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(nt&&An!==null&&e.mode&1&&!(e.flags&128))q_(),vs(),e.flags|=98560,o=!1;else if(o=Pl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(oe(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(oe(317));o[mi]=e}else vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),o=!1}else ni!==null&&(Lh(ni),ni=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||rt.current&1?Et===0&&(Et=3):Jp())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return _s(),wh(t,e),t===null&&Da(e.stateNode.containerInfo),Wt(e),null;case 10:return Np(e.type._context),Wt(e),null;case 17:return vn(e.type)&&Xc(),Wt(e),null;case 19:if(et(rt),o=e.memoizedState,o===null)return Wt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Ys(o,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=eu(t),s!==null){for(e.flags|=128,Ys(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(rt,rt.current&1|2),e.child}t=t.sibling}o.tail!==null&&xt()>ws&&(e.flags|=128,i=!0,Ys(o,!1),e.lanes=4194304)}else{if(!i)if(t=eu(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!nt)return Wt(e),null}else 2*xt()-o.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,i=!0,Ys(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=xt(),e.sibling=null,n=rt.current,Qe(rt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Qp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function YM(t,e){switch(Dp(e),e.tag){case 1:return vn(e.type)&&Xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),et(xn),et(Jt),Vp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bp(e),null;case 13:if(et(rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return et(rt),null;case 4:return _s(),null;case 10:return Np(e.type._context),null;case 22:case 23:return Qp(),null;case 24:return null;default:return null}}var Ul=!1,Kt=!1,qM=typeof WeakSet=="function"?WeakSet:Set,he=null;function Qo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ft(t,e,i)}else n.current=null}function bh(t,e,n){try{n()}catch(i){ft(t,e,i)}}var a0=!1;function KM(t,e){if(sh=Gc,t=N_(),Lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=s),h===o&&++u===i&&(l=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ah={focusedElem:t,selectionRange:n},Gc=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,g=v.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:ei(e.type,x),g);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(w){ft(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return v=a0,a0=!1,v}function ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&bh(e,n,o)}r=r.next}while(r!==i)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D1(t){var e=t.alternate;e!==null&&(t.alternate=null,D1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[Ua],delete e[uh],delete e[DM],delete e[IM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I1(t){return t.tag===5||t.tag===3||t.tag===4}function l0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$c));else if(i!==4&&(t=t.child,t!==null))for(Mh(t,e,n),t=t.sibling;t!==null;)Mh(t,e,n),t=t.sibling}function Th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}var Nt=null,ti=!1;function rr(t,e,n){for(n=n.child;n!==null;)U1(t,e,n),n=n.sibling}function U1(t,e,n){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:Kt||Qo(n,e);case 6:var i=Nt,r=ti;Nt=null,rr(t,e,n),Nt=i,ti=r,Nt!==null&&(ti?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(ti?(t=Nt,n=n.stateNode,t.nodeType===8?wd(t.parentNode,n):t.nodeType===1&&wd(t,n),Ra(t)):wd(Nt,n.stateNode));break;case 4:i=Nt,r=ti,Nt=n.stateNode.containerInfo,ti=!0,rr(t,e,n),Nt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&bh(n,e,s),r=r.next}while(r!==i)}rr(t,e,n);break;case 1:if(!Kt&&(Qo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ft(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,rr(t,e,n),Kt=i):rr(t,e,n);break;default:rr(t,e,n)}}function c0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qM),e.forEach(function(i){var r=oT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,ti=!1;break e;case 3:Nt=a.stateNode.containerInfo,ti=!0;break e;case 4:Nt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Nt===null)throw Error(oe(160));U1(o,s,r),Nt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){ft(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)k1(e,t),e=e.sibling}function k1(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),ci(t),i&4){try{ma(3,t,t.return),Eu(3,t)}catch(x){ft(t,t.return,x)}try{ma(5,t,t.return)}catch(x){ft(t,t.return,x)}}break;case 1:Yn(e,t),ci(t),i&512&&n!==null&&Qo(n,n.return);break;case 5:if(Yn(e,t),ci(t),i&512&&n!==null&&Qo(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(x){ft(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&i_(r,o),Kf(a,s);var c=Kf(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?l_(r,d):u==="dangerouslySetInnerHTML"?s_(r,d):u==="children"?Ma(r,d):xp(r,u,d,c)}switch(a){case"input":Wf(r,o);break;case"textarea":r_(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ss(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?ss(r,!!o.multiple,o.defaultValue,!0):ss(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ua]=o}catch(x){ft(t,t.return,x)}}break;case 6:if(Yn(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){ft(t,t.return,x)}}break;case 3:if(Yn(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(x){ft(t,t.return,x)}break;case 4:Yn(e,t),ci(t);break;case 13:Yn(e,t),ci(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Kp=xt())),i&4&&c0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||u,Yn(e,t),Kt=c):Yn(e,t),ci(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(he=t,u=t.child;u!==null;){for(d=he=u;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:ma(4,h,h.return);break;case 1:Qo(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){ft(i,n,x)}}break;case 5:Qo(h,h.return);break;case 22:if(h.memoizedState!==null){d0(d);continue}}p!==null?(p.return=h,he=p):d0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=a_("display",s))}catch(x){ft(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){ft(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yn(e,t),ci(t),i&4&&c0(t);break;case 21:break;default:Yn(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I1(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var o=l0(t);Th(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=l0(t);Mh(t,a,s);break;default:throw Error(oe(161))}}catch(l){ft(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ZM(t,e,n){he=t,N1(t)}function N1(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ul;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=Ul;var c=Kt;if(Ul=s,(Kt=l)&&!c)for(he=r;he!==null;)s=he,l=s.child,s.tag===22&&s.memoizedState!==null?f0(r):l!==null?(l.return=s,he=l):f0(r);for(;o!==null;)he=o,N1(o),o=o.sibling;he=r,Ul=a,Kt=c}u0(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,he=o):u0(t)}}function u0(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Yg(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yg(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ra(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Kt||e.flags&512&&Eh(e)}catch(h){ft(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function d0(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function f0(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(l){ft(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ft(e,r,l)}}var o=e.return;try{Eh(e)}catch(l){ft(e,o,l)}break;case 5:var s=e.return;try{Eh(e)}catch(l){ft(e,s,l)}}}catch(l){ft(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var QM=Math.ceil,iu=Ki.ReactCurrentDispatcher,Yp=Ki.ReactCurrentOwner,Gn=Ki.ReactCurrentBatchConfig,Ve=0,It=null,St=null,Bt=0,Tn=0,Jo=Dr(0),Et=0,Ba=null,mo=0,Mu=0,qp=0,ga=null,hn=null,Kp=0,ws=1/0,ki=null,ru=!1,Ah=null,Sr=null,kl=!1,mr=null,ou=0,xa=0,Ch=null,Mc=-1,Tc=0;function ln(){return Ve&6?xt():Mc!==-1?Mc:Mc=xt()}function wr(t){return t.mode&1?Ve&2&&Bt!==0?Bt&-Bt:kM.transition!==null?(Tc===0&&(Tc=__()),Tc):(t=$e,t!==0||(t=window.event,t=t===void 0?16:A_(t.type)),t):1}function si(t,e,n,i){if(50<xa)throw xa=0,Ch=null,Error(oe(185));nl(t,n,i),(!(Ve&2)||t!==It)&&(t===It&&(!(Ve&2)&&(Mu|=n),Et===4&&hr(t,Bt)),yn(t,i),n===1&&Ve===0&&!(e.mode&1)&&(ws=xt()+500,Su&&Ir()))}function yn(t,e){var n=t.callbackNode;kE(t,e);var i=Hc(t,t===It?Bt:0);if(i===0)n!==null&&Sg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sg(n),e===1)t.tag===0?UM(h0.bind(null,t)):$_(h0.bind(null,t)),LM(function(){!(Ve&6)&&Ir()}),n=null;else{switch(S_(i)){case 1:n=wp;break;case 4:n=v_;break;case 16:n=Vc;break;case 536870912:n=y_;break;default:n=Vc}n=j1(n,F1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F1(t,e){if(Mc=-1,Tc=0,Ve&6)throw Error(oe(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var i=Hc(t,t===It?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=su(t,i);else{e=i;var r=Ve;Ve|=2;var o=z1();(It!==t||Bt!==e)&&(ki=null,ws=xt()+500,ro(t,e));do try{tT();break}catch(a){O1(t,a)}while(1);kp(),iu.current=o,Ve=r,St!==null?e=0:(It=null,Bt=0,e=Et)}if(e!==0){if(e===2&&(r=th(t),r!==0&&(i=r,e=Rh(t,r))),e===1)throw n=Ba,ro(t,0),hr(t,i),yn(t,xt()),n;if(e===6)hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!JM(r)&&(e=su(t,i),e===2&&(o=th(t),o!==0&&(i=o,e=Rh(t,o))),e===1))throw n=Ba,ro(t,0),hr(t,i),yn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Wr(t,hn,ki);break;case 3:if(hr(t,i),(i&130023424)===i&&(e=Kp+500-xt(),10<e)){if(Hc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ch(Wr.bind(null,t,hn,ki),e);break}Wr(t,hn,ki);break;case 4:if(hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-oi(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*QM(i/1960))-i,10<i){t.timeoutHandle=ch(Wr.bind(null,t,hn,ki),i);break}Wr(t,hn,ki);break;case 5:Wr(t,hn,ki);break;default:throw Error(oe(329))}}}return yn(t,xt()),t.callbackNode===n?F1.bind(null,t):null}function Rh(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(ro(t,e).flags|=256),t=su(t,e),t!==2&&(e=hn,hn=n,e!==null&&Lh(e)),t}function Lh(t){hn===null?hn=t:hn.push.apply(hn,t)}function JM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!ai(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~qp,e&=~Mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function h0(t){if(Ve&6)throw Error(oe(327));ds();var e=Hc(t,0);if(!(e&1))return yn(t,xt()),null;var n=su(t,e);if(t.tag!==0&&n===2){var i=th(t);i!==0&&(e=i,n=Rh(t,i))}if(n===1)throw n=Ba,ro(t,0),hr(t,e),yn(t,xt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,hn,ki),yn(t,xt()),null}function Zp(t,e){var n=Ve;Ve|=1;try{return t(e)}finally{Ve=n,Ve===0&&(ws=xt()+500,Su&&Ir())}}function go(t){mr!==null&&mr.tag===0&&!(Ve&6)&&ds();var e=Ve;Ve|=1;var n=Gn.transition,i=$e;try{if(Gn.transition=null,$e=1,t)return t()}finally{$e=i,Gn.transition=n,Ve=e,!(Ve&6)&&Ir()}}function Qp(){Tn=Jo.current,et(Jo)}function ro(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RM(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Dp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xc();break;case 3:_s(),et(xn),et(Jt),Vp();break;case 5:Bp(i);break;case 4:_s();break;case 13:et(rt);break;case 19:et(rt);break;case 10:Np(i.type._context);break;case 22:case 23:Qp()}n=n.return}if(It=t,St=t=br(t.current,null),Bt=Tn=e,Et=0,Ba=null,qp=Mu=mo=0,hn=ga=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Qr=null}return t}function O1(t,e){do{var n=St;try{if(kp(),wc.current=nu,tu){for(var i=st.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}tu=!1}if(po=0,Pt=bt=st=null,pa=!1,Fa=0,Yp.current=null,n===null||n.return===null){Et=1,Ba=e,St=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=e0(s);if(p!==null){p.flags&=-257,t0(p,s,a,o,e),p.mode&1&&Jg(o,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Jg(o,c,e),Jp();break e}l=Error(oe(426))}}else if(nt&&a.mode&1){var g=e0(s);if(g!==null){!(g.flags&65536)&&(g.flags|=256),t0(g,s,a,o,e),Ip(Ss(l,a));break e}}o=l=Ss(l,a),Et!==4&&(Et=2),ga===null?ga=[o]:ga.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=S1(o,l,e);Xg(o,f);break e;case 1:a=l;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sr===null||!Sr.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=w1(o,a,e);Xg(o,w);break e}}o=o.return}while(o!==null)}V1(n)}catch(S){e=S,St===n&&n!==null&&(St=n=n.return);continue}break}while(1)}function z1(){var t=iu.current;return iu.current=nu,t===null?nu:t}function Jp(){(Et===0||Et===3||Et===2)&&(Et=4),It===null||!(mo&268435455)&&!(Mu&268435455)||hr(It,Bt)}function su(t,e){var n=Ve;Ve|=2;var i=z1();(It!==t||Bt!==e)&&(ki=null,ro(t,e));do try{eT();break}catch(r){O1(t,r)}while(1);if(kp(),Ve=n,iu.current=i,St!==null)throw Error(oe(261));return It=null,Bt=0,Et}function eT(){for(;St!==null;)B1(St)}function tT(){for(;St!==null&&!TE();)B1(St)}function B1(t){var e=G1(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?V1(t):St=e,Yp.current=null}function V1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YM(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,St=null;return}}else if(n=XM(n,e,Tn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Et===0&&(Et=5)}function Wr(t,e,n){var i=$e,r=Gn.transition;try{Gn.transition=null,$e=1,nT(t,e,n,i)}finally{Gn.transition=r,$e=i}return null}function nT(t,e,n,i){do ds();while(mr!==null);if(Ve&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(NE(t,o),t===It&&(St=It=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,j1(Vc,function(){return ds(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Gn.transition,Gn.transition=null;var s=$e;$e=1;var a=Ve;Ve|=4,Yp.current=null,KM(t,n),k1(n,t),wM(ah),Gc=!!sh,ah=sh=null,t.current=n,ZM(n),AE(),Ve=a,$e=s,Gn.transition=o}else t.current=n;if(kl&&(kl=!1,mr=t,ou=r),o=t.pendingLanes,o===0&&(Sr=null),LE(n.stateNode),yn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ru)throw ru=!1,t=Ah,Ah=null,t;return ou&1&&t.tag!==0&&ds(),o=t.pendingLanes,o&1?t===Ch?xa++:(xa=0,Ch=t):xa=0,Ir(),null}function ds(){if(mr!==null){var t=S_(ou),e=Gn.transition,n=$e;try{if(Gn.transition=null,$e=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,ou=0,Ve&6)throw Error(oe(331));var r=Ve;for(Ve|=4,he=t.current;he!==null;){var o=he,s=o.child;if(he.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var u=he;switch(u.tag){case 0:case 11:case 15:ma(8,u,o)}var d=u.child;if(d!==null)d.return=u,he=d;else for(;he!==null;){u=he;var h=u.sibling,p=u.return;if(D1(u),u===c){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}he=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,he=s;else e:for(;he!==null;){if(o=he,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ma(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,he=f;break e}he=o.return}}var m=t.current;for(he=m;he!==null;){s=he;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,he=y;else e:for(s=m;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eu(9,a)}}catch(S){ft(a,a.return,S)}if(a===s){he=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,he=w;break e}he=a.return}}if(Ve=r,Ir(),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(gu,t)}catch{}i=!0}return i}finally{$e=n,Gn.transition=e}}return!1}function p0(t,e,n){e=Ss(n,e),e=S1(t,e,1),t=_r(t,e,1),e=ln(),t!==null&&(nl(t,1,e),yn(t,e))}function ft(t,e,n){if(t.tag===3)p0(t,t,n);else for(;e!==null;){if(e.tag===3){p0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=Ss(n,t),t=w1(e,t,1),e=_r(e,t,1),t=ln(),e!==null&&(nl(e,1,t),yn(e,t));break}}e=e.return}}function iT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Bt&n)===n&&(Et===4||Et===3&&(Bt&130023424)===Bt&&500>xt()-Kp?ro(t,0):qp|=n),yn(t,e)}function H1(t,e){e===0&&(t.mode&1?(e=Ml,Ml<<=1,!(Ml&130023424)&&(Ml=4194304)):e=1);var n=ln();t=Wi(t,e),t!==null&&(nl(t,e,n),yn(t,n))}function rT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H1(t,n)}function oT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),H1(t,n)}var G1;G1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,$M(t,e,n);mn=!!(t.flags&131072)}else mn=!1,nt&&e.flags&1048576&&X_(e,Kc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ec(t,e),t=e.pendingProps;var r=xs(e,Jt.current);us(e,n),r=Gp(null,e,i,t,r,n);var o=jp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(o=!0,Yc(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Op(e),r.updater=bu,e.stateNode=r,r._reactInternals=e,gh(e,i,t,n),e=yh(null,e,i,!0,o,n)):(e.tag=0,nt&&o&&Pp(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ec(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=aT(i),t=ei(i,t),r){case 0:e=vh(null,e,i,t,n);break e;case 1:e=r0(null,e,i,t,n);break e;case 11:e=n0(null,e,i,t,n);break e;case 14:e=i0(null,e,i,ei(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),vh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),r0(t,e,i,r,n);case 3:e:{if(T1(e),t===null)throw Error(oe(387));i=e.pendingProps,o=e.memoizedState,r=o.element,J_(t,e),Jc(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Ss(Error(oe(423)),e),e=o0(t,e,i,n,r);break e}else if(i!==r){r=Ss(Error(oe(424)),e),e=o0(t,e,i,n,r);break e}else for(An=yr(e.stateNode.containerInfo.firstChild),Cn=e,nt=!0,ni=null,n=Z_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),i===r){e=$i(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return e1(e),t===null&&hh(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,lh(i,r)?s=null:o!==null&&lh(i,o)&&(e.flags|=32),M1(t,e),rn(t,e,s,n),e.child;case 6:return t===null&&hh(e),null;case 13:return A1(t,e,n);case 4:return zp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ys(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),n0(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Qe(Zc,i._currentValue),i._currentValue=s,o!==null)if(ai(o.value,s)){if(o.children===r.children&&!xn.current){e=$i(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Bi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ph(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(oe(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ph(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,us(e,n),r=Wn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),i0(t,e,i,r,n);case 15:return b1(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Ec(t,e),e.tag=1,vn(i)?(t=!0,Yc(e)):t=!1,us(e,n),_1(e,i,r),gh(e,i,r,n),yh(null,e,i,!0,t,n);case 19:return C1(t,e,n);case 22:return E1(t,e,n)}throw Error(oe(156,e.tag))};function j1(t,e){return x_(t,e)}function sT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new sT(t,e,n,i)}function em(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aT(t){if(typeof t=="function")return em(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yp)return 11;if(t===_p)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ac(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")em(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Go:return oo(n.children,r,o,e);case vp:s=8,r|=8;break;case Bf:return t=Hn(12,n,e,r|2),t.elementType=Bf,t.lanes=o,t;case Vf:return t=Hn(13,n,e,r),t.elementType=Vf,t.lanes=o,t;case Hf:return t=Hn(19,n,e,r),t.elementType=Hf,t.lanes=o,t;case e_:return Tu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qy:s=10;break e;case Jy:s=9;break e;case yp:s=11;break e;case _p:s=14;break e;case ur:s=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Hn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function oo(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function Tu(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=e_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ld(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Pd(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dd(0),this.expirationTimes=dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tm(t,e,n,i,r,o,s,a,l){return t=new lT(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Hn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Op(o),t}function cT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ho,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function W1(t){if(!t)return Tr;t=t._reactInternals;e:{if(So(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(vn(n))return W_(t,n,e)}return e}function $1(t,e,n,i,r,o,s,a,l){return t=tm(n,i,!0,t,r,o,s,a,l),t.context=W1(null),n=t.current,i=ln(),r=wr(n),o=Bi(i,r),o.callback=e??null,_r(n,o,r),t.current.lanes=r,nl(t,r,i),yn(t,i),t}function Au(t,e,n,i){var r=e.current,o=ln(),s=wr(r);return n=W1(n),e.context===null?e.context=n:e.pendingContext=n,e=Bi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=_r(r,e,s),t!==null&&(si(t,r,s,o),Sc(t,r,s)),s}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function m0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nm(t,e){m0(t,e),(t=t.alternate)&&m0(t,e)}function uT(){return null}var X1=typeof reportError=="function"?reportError:function(t){console.error(t)};function im(t){this._internalRoot=t}Cu.prototype.render=im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Au(t,e,null,null)};Cu.prototype.unmount=im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;go(function(){Au(null,t,null,null)}),e[ji]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=E_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&T_(t)}};function rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function g0(){}function dT(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=au(s);o.call(c)}}var s=$1(e,i,t,0,null,!1,!1,"",g0);return t._reactRootContainer=s,t[ji]=s.current,Da(t.nodeType===8?t.parentNode:t),go(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=au(l);a.call(c)}}var l=tm(t,0,!1,null,null,!1,!1,"",g0);return t._reactRootContainer=l,t[ji]=l.current,Da(t.nodeType===8?t.parentNode:t),go(function(){Au(e,l,n,i)}),l}function Lu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=au(s);a.call(l)}}Au(e,s,t,r)}else s=dT(n,e,t,r,i);return au(s)}w_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(bp(e,n|1),yn(e,xt()),!(Ve&6)&&(ws=xt()+500,Ir()))}break;case 13:go(function(){var i=Wi(t,1);if(i!==null){var r=ln();si(i,t,1,r)}}),nm(t,1)}};Ep=function(t){if(t.tag===13){var e=Wi(t,134217728);if(e!==null){var n=ln();si(e,t,134217728,n)}nm(t,134217728)}};b_=function(t){if(t.tag===13){var e=wr(t),n=Wi(t,e);if(n!==null){var i=ln();si(n,t,e,i)}nm(t,e)}};E_=function(){return $e};M_=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};Qf=function(t,e,n){switch(e){case"input":if(Wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=_u(i);if(!r)throw Error(oe(90));n_(i),Wf(i,r)}}}break;case"textarea":r_(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};d_=Zp;f_=go;var fT={usingClientEntryPoint:!1,Events:[rl,Xo,_u,c_,u_,Zp]},qs={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hT={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=m_(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||uT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{gu=Nl.inject(hT),gi=Nl}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fT;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rm(e))throw Error(oe(200));return cT(t,e,null,n)};Dn.createRoot=function(t,e){if(!rm(t))throw Error(oe(299));var n=!1,i="",r=X1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tm(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,Da(t.nodeType===8?t.parentNode:t),new im(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=m_(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return go(t)};Dn.hydrate=function(t,e,n){if(!Ru(e))throw Error(oe(200));return Lu(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!rm(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=X1;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=$1(e,null,t,1,n??null,r,!1,o,s),t[ji]=e.current,Da(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Cu(e)};Dn.render=function(t,e,n){if(!Ru(e))throw Error(oe(200));return Lu(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(oe(40));return t._reactRootContainer?(go(function(){Lu(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Dn.unstable_batchedUpdates=Zp;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ru(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Lu(t,e,n,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function Y1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y1)}catch(t){console.error(t)}}Y1(),Yy.exports=Dn;var pT=Yy.exports,x0=pT;Of.createRoot=x0.createRoot,Of.hydrateRoot=x0.hydrateRoot;const mT="modulepreload",gT=function(t){return"/"+t},v0={},xT=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=gT(o),o in v0)return;v0[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const d=r[u];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":mT,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};var om={};Object.defineProperty(om,"__esModule",{value:!0});om.parse=ET;om.serialize=MT;const vT=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,yT=/^[\u0021-\u003A\u003C-\u007E]*$/,_T=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,ST=/^[\u0020-\u003A\u003D-\u007E]*$/,wT=Object.prototype.toString,bT=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function ET(t,e){const n=new bT,i=t.length;if(i<2)return n;const r=(e==null?void 0:e.decode)||TT;let o=0;do{const s=t.indexOf("=",o);if(s===-1)break;const a=t.indexOf(";",o),l=a===-1?i:a;if(s>l){o=t.lastIndexOf(";",s-1)+1;continue}const c=y0(t,o,s),u=_0(t,s,c),d=t.slice(c,u);if(n[d]===void 0){let h=y0(t,s+1,l),p=_0(t,l,h);const v=r(t.slice(h,p));n[d]=v}o=l+1}while(o<i);return n}function y0(t,e,n){do{const i=t.charCodeAt(e);if(i!==32&&i!==9)return e}while(++e<n);return n}function _0(t,e,n){for(;e>n;){const i=t.charCodeAt(--e);if(i!==32&&i!==9)return e+1}return n}function MT(t,e,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!vT.test(t))throw new TypeError(`argument name is invalid: ${t}`);const r=i(e);if(!yT.test(r))throw new TypeError(`argument val is invalid: ${e}`);let o=t+"="+r;if(!n)return o;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);o+="; Max-Age="+n.maxAge}if(n.domain){if(!_T.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);o+="; Domain="+n.domain}if(n.path){if(!ST.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);o+="; Path="+n.path}if(n.expires){if(!AT(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);o+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(o+="; HttpOnly"),n.secure&&(o+="; Secure"),n.partitioned&&(o+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"none":o+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return o}function TT(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function AT(t){return wT.call(t)==="[object Date]"}var S0="popstate";function CT(t={}){function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return Ph("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Va(r)}return LT(e,n,null,t)}function at(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ei(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function RT(){return Math.random().toString(36).substring(2,10)}function w0(t,e){return{usr:t.state,key:t.key,idx:e}}function Ph(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Is(e):e,state:n,key:e&&e.key||i||RT()}}function Va({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function LT(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a="POP",l=null,c=u();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function u(){return(s.state||{idx:null}).idx}function d(){a="POP";let g=u(),f=g==null?null:g-c;c=g,l&&l({action:a,location:x.location,delta:f})}function h(g,f){a="PUSH";let m=Ph(x.location,g,f);n&&n(m,g),c=u()+1;let y=w0(m,c),w=x.createHref(m);try{s.pushState(y,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(w)}o&&l&&l({action:a,location:x.location,delta:1})}function p(g,f){a="REPLACE";let m=Ph(x.location,g,f);n&&n(m,g),c=u();let y=w0(m,c),w=x.createHref(m);s.replaceState(y,"",w),o&&l&&l({action:a,location:x.location,delta:0})}function v(g){return PT(g)}let x={get action(){return a},get location(){return t(r,s)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(S0,d),l=g,()=>{r.removeEventListener(S0,d),l=null}},createHref(g){return e(r,g)},createURL:v,encodeLocation(g){let f=v(g);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(g){return s.go(g)}};return x}function PT(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),at(n,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Va(t);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=n+i),new URL(i,n)}function q1(t,e,n="/"){return DT(t,e,n,!1)}function DT(t,e,n,i){let r=typeof e=="string"?Is(e):e,o=Xi(r.pathname||"/",n);if(o==null)return null;let s=K1(t);IT(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=jT(o);a=HT(s[l],c,i)}return a}function K1(t,e=[],n=[],i=""){let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(at(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let c=Vi([i,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(at(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),K1(o.children,e,u,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:BT(c,o.index),routesMeta:u})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of Z1(o.path))r(o,s,l)}),e}function Z1(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=Z1(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function IT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VT(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var UT=/^:[\w-]+$/,kT=3,NT=2,FT=1,OT=10,zT=-2,b0=t=>t==="*";function BT(t,e){let n=t.split("/"),i=n.length;return n.some(b0)&&(i+=zT),e&&(i+=NT),n.filter(r=>!b0(r)).reduce((r,o)=>r+(UT.test(o)?kT:o===""?FT:OT),i)}function VT(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function HT(t,e,n=!1){let{routesMeta:i}=t,r={},o="/",s=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=o==="/"?e:e.slice(o.length)||"/",d=lu({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&n&&!i[i.length-1].route.index&&(d=lu({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(r,d.params),s.push({params:r,pathname:Vi([o,d.pathname]),pathnameBase:YT(Vi([o,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(o=Vi([o,d.pathnameBase]))}return s}function lu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=GT(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,{paramName:u,isOptional:d},h)=>{if(u==="*"){let v=a[h]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const p=a[h];return d&&!p?c[u]=void 0:c[u]=(p||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function GT(t,e=!1,n=!0){Ei(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function jT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ei(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Xi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function WT(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Is(t):t;return{pathname:n?n.startsWith("/")?n:$T(n,e):e,search:qT(i),hash:KT(r)}}function $T(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Dd(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function XT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Q1(t){let e=XT(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function J1(t,e,n,i=!1){let r;typeof t=="string"?r=Is(t):(r={...t},at(!r.pathname||!r.pathname.includes("?"),Dd("?","pathname","search",r)),at(!r.pathname||!r.pathname.includes("#"),Dd("#","pathname","hash",r)),at(!r.search||!r.search.includes("#"),Dd("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let d=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=WT(r,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var Vi=t=>t.join("/").replace(/\/\/+/g,"/"),YT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,KT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ZT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var eS=["POST","PUT","PATCH","DELETE"];new Set(eS);var QT=["GET",...eS];new Set(QT);var Us=R.createContext(null);Us.displayName="DataRouter";var Pu=R.createContext(null);Pu.displayName="DataRouterState";var tS=R.createContext({isTransitioning:!1});tS.displayName="ViewTransition";var JT=R.createContext(new Map);JT.displayName="Fetchers";var e2=R.createContext(null);e2.displayName="Await";var Ai=R.createContext(null);Ai.displayName="Navigation";var sl=R.createContext(null);sl.displayName="Location";var Zi=R.createContext({outlet:null,matches:[],isDataRoute:!1});Zi.displayName="Route";var sm=R.createContext(null);sm.displayName="RouteError";function t2(t,{relative:e}={}){at(al(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=R.useContext(Ai),{hash:r,pathname:o,search:s}=ll(t,{relative:e}),a=o;return n!=="/"&&(a=o==="/"?n:Vi([n,o])),i.createHref({pathname:a,search:s,hash:r})}function al(){return R.useContext(sl)!=null}function Qi(){return at(al(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(sl).location}var nS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function iS(t){R.useContext(Ai).static||R.useLayoutEffect(t)}function Ji(){let{isDataRoute:t}=R.useContext(Zi);return t?p2():n2()}function n2(){at(al(),"useNavigate() may be used only in the context of a <Router> component.");let t=R.useContext(Us),{basename:e,navigator:n}=R.useContext(Ai),{matches:i}=R.useContext(Zi),{pathname:r}=Qi(),o=JSON.stringify(Q1(i)),s=R.useRef(!1);return iS(()=>{s.current=!0}),R.useCallback((l,c={})=>{if(Ei(s.current,nS),!s.current)return;if(typeof l=="number"){n.go(l);return}let u=J1(l,JSON.parse(o),r,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Vi([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,o,r,t])}R.createContext(null);function ll(t,{relative:e}={}){let{matches:n}=R.useContext(Zi),{pathname:i}=Qi(),r=JSON.stringify(Q1(n));return R.useMemo(()=>J1(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function i2(t,e){return rS(t,e)}function rS(t,e,n,i){var f;at(al(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=R.useContext(Ai),{matches:o}=R.useContext(Zi),s=o[o.length-1],a=s?s.params:{},l=s?s.pathname:"/",c=s?s.pathnameBase:"/",u=s&&s.route;{let m=u&&u.path||"";oS(l,!u||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let d=Qi(),h;if(e){let m=typeof e=="string"?Is(e):e;at(c==="/"||((f=m.pathname)==null?void 0:f.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${m.pathname}" was given in the \`location\` prop.`),h=m}else h=d;let p=h.pathname||"/",v=p;if(c!=="/"){let m=c.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=q1(t,{pathname:v});Ei(u||x!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),Ei(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=l2(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Vi([c,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:Vi([c,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n,i);return e&&g?R.createElement(sl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},g):g}function r2(){let t=h2(),e=ZT(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:o},"ErrorBoundary")," or"," ",R.createElement("code",{style:o},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:r},n):null,s)}var o2=R.createElement(r2,null),s2=class extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?R.createElement(Zi.Provider,{value:this.props.routeContext},R.createElement(sm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function a2({routeContext:t,match:e,children:n}){let i=R.useContext(Us);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),R.createElement(Zi.Provider,{value:t},n)}function l2(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let r=t,o=n==null?void 0:n.errors;if(o!=null){let l=r.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id])!==void 0);at(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),r=r.slice(0,Math.min(r.length,l+1))}let s=!1,a=-1;if(n)for(let l=0;l<r.length;l++){let c=r[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=l),c.route.id){let{loaderData:u,errors:d}=n,h=c.route.loader&&!u.hasOwnProperty(c.route.id)&&(!d||d[c.route.id]===void 0);if(c.route.lazy||h){s=!0,a>=0?r=r.slice(0,a+1):r=[r[0]];break}}}return r.reduceRight((l,c,u)=>{let d,h=!1,p=null,v=null;n&&(d=o&&c.route.id?o[c.route.id]:void 0,p=c.route.errorElement||o2,s&&(a<0&&u===0?(oS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,v=null):a===u&&(h=!0,v=c.route.hydrateFallbackElement||null)));let x=e.concat(r.slice(0,u+1)),g=()=>{let f;return d?f=p:h?f=v:c.route.Component?f=R.createElement(c.route.Component,null):c.route.element?f=c.route.element:f=l,R.createElement(a2,{match:c,routeContext:{outlet:l,matches:x,isDataRoute:n!=null},children:f})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?R.createElement(s2,{location:n.location,revalidation:n.revalidation,component:p,error:d,children:g(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):g()},null)}function am(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function c2(t){let e=R.useContext(Us);return at(e,am(t)),e}function u2(t){let e=R.useContext(Pu);return at(e,am(t)),e}function d2(t){let e=R.useContext(Zi);return at(e,am(t)),e}function lm(t){let e=d2(t),n=e.matches[e.matches.length-1];return at(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function f2(){return lm("useRouteId")}function h2(){var i;let t=R.useContext(sm),e=u2("useRouteError"),n=lm("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function p2(){let{router:t}=c2("useNavigate"),e=lm("useNavigate"),n=R.useRef(!1);return iS(()=>{n.current=!0}),R.useCallback(async(r,o={})=>{Ei(n.current,nS),n.current&&(typeof r=="number"?t.navigate(r):await t.navigate(r,{fromRouteId:e,...o}))},[t,e])}var E0={};function oS(t,e,n){!e&&!E0[t]&&(E0[t]=!0,Ei(!1,n))}R.memo(m2);function m2({routes:t,future:e,state:n}){return rS(t,void 0,n,e)}function $r(t){at(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function g2({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:o=!1}){at(!al(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=t.replace(/^\/*/,"/"),a=R.useMemo(()=>({basename:s,navigator:r,static:o,future:{}}),[s,r,o]);typeof n=="string"&&(n=Is(n));let{pathname:l="/",search:c="",hash:u="",state:d=null,key:h="default"}=n,p=R.useMemo(()=>{let v=Xi(l,s);return v==null?null:{location:{pathname:v,search:c,hash:u,state:d,key:h},navigationType:i}},[s,l,c,u,d,h,i]);return Ei(p!=null,`<Router basename="${s}"> is not able to match the URL "${l}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),p==null?null:R.createElement(Ai.Provider,{value:a},R.createElement(sl.Provider,{children:e,value:p}))}function x2({children:t,location:e}){return i2(Dh(t),e)}function Dh(t,e=[]){let n=[];return R.Children.forEach(t,(i,r)=>{if(!R.isValidElement(i))return;let o=[...e,r];if(i.type===R.Fragment){n.push.apply(n,Dh(i.props.children,o));return}at(i.type===$r,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),at(!i.props.index||!i.props.children,"An index route cannot have child routes.");let s={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Dh(i.props.children,o)),n.push(s)}),n}var Cc="get",Rc="application/x-www-form-urlencoded";function Du(t){return t!=null&&typeof t.tagName=="string"}function v2(t){return Du(t)&&t.tagName.toLowerCase()==="button"}function y2(t){return Du(t)&&t.tagName.toLowerCase()==="form"}function _2(t){return Du(t)&&t.tagName.toLowerCase()==="input"}function S2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function w2(t,e){return t.button===0&&(!e||e==="_self")&&!S2(t)}var Fl=null;function b2(){if(Fl===null)try{new FormData(document.createElement("form"),0),Fl=!1}catch{Fl=!0}return Fl}var E2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Id(t){return t!=null&&!E2.has(t)?(Ei(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Rc}"`),null):t}function M2(t,e){let n,i,r,o,s;if(y2(t)){let a=t.getAttribute("action");i=a?Xi(a,e):null,n=t.getAttribute("method")||Cc,r=Id(t.getAttribute("enctype"))||Rc,o=new FormData(t)}else if(v2(t)||_2(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(i=l?Xi(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Cc,r=Id(t.getAttribute("formenctype"))||Id(a.getAttribute("enctype"))||Rc,o=new FormData(a,t),!b2()){let{name:c,type:u,value:d}=t;if(u==="image"){let h=c?`${c}.`:"";o.append(`${h}x`,"0"),o.append(`${h}y`,"0")}else c&&o.append(c,d)}}else{if(Du(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Cc,i=null,r=Rc,s=t}return o&&r==="text/plain"&&(s=o,o=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:o,body:s}}function cm(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function T2(t,e){if(t.id in e)return e[t.id];try{let n=await xT(()=>import(t.module),[]);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function A2(t){return t!=null&&typeof t.page=="string"}function C2(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function R2(t,e,n){let i=await Promise.all(t.map(async r=>{let o=e.routes[r.route.id];if(o){let s=await T2(o,n);return s.links?s.links():[]}return[]}));return I2(i.flat(1).filter(C2).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function M0(t,e,n,i,r,o){let s=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,a=(l,c)=>{var u;return n[c].pathname!==l.pathname||((u=n[c].route.path)==null?void 0:u.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return o==="assets"?e.filter((l,c)=>s(l,c)||a(l,c)):o==="data"?e.filter((l,c)=>{var d;let u=i.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(s(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function L2(t,e,{includeHydrateFallback:n}={}){return P2(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o}).flat(1))}function P2(t){return[...new Set(t)]}function D2(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function I2(t,e){let n=new Set,i=new Set(e);return t.reduce((r,o)=>{if(e&&!A2(o)&&o.as==="script"&&o.href&&i.has(o.href))return r;let a=JSON.stringify(D2(o));return n.has(a)||(n.add(a),r.push({key:a,link:o})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var U2=new Set([100,101,204,205]);function k2(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&Xi(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function sS(){let t=R.useContext(Us);return cm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function N2(){let t=R.useContext(Pu);return cm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var um=R.createContext(void 0);um.displayName="FrameworkContext";function aS(){let t=R.useContext(um);return cm(t,"You must render this element inside a <HydratedRouter> element"),t}function F2(t,e){let n=R.useContext(um),[i,r]=R.useState(!1),[o,s]=R.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:d}=e,h=R.useRef(null);R.useEffect(()=>{if(t==="render"&&s(!0),t==="viewport"){let x=f=>{f.forEach(m=>{s(m.isIntersecting)})},g=new IntersectionObserver(x,{threshold:.5});return h.current&&g.observe(h.current),()=>{g.disconnect()}}},[t]),R.useEffect(()=>{if(i){let x=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(x)}}},[i]);let p=()=>{r(!0)},v=()=>{r(!1),s(!1)};return n?t!=="intent"?[o,h,{}]:[o,h,{onFocus:Ks(a,p),onBlur:Ks(l,v),onMouseEnter:Ks(c,p),onMouseLeave:Ks(u,v),onTouchStart:Ks(d,p)}]:[!1,h,{}]}function Ks(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function O2({page:t,...e}){let{router:n}=sS(),i=R.useMemo(()=>q1(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?R.createElement(B2,{page:t,matches:i,...e}):null}function z2(t){let{manifest:e,routeModules:n}=aS(),[i,r]=R.useState([]);return R.useEffect(()=>{let o=!1;return R2(t,e,n).then(s=>{o||r(s)}),()=>{o=!0}},[t,e,n]),i}function B2({page:t,matches:e,...n}){let i=Qi(),{manifest:r,routeModules:o}=aS(),{basename:s}=sS(),{loaderData:a,matches:l}=N2(),c=R.useMemo(()=>M0(t,e,l,r,i,"data"),[t,e,l,r,i]),u=R.useMemo(()=>M0(t,e,l,r,i,"assets"),[t,e,l,r,i]),d=R.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let v=new Set,x=!1;if(e.forEach(f=>{var y;let m=r.routes[f.route.id];!m||!m.hasLoader||(!c.some(w=>w.route.id===f.route.id)&&f.route.id in a&&((y=o[f.route.id])!=null&&y.shouldRevalidate)||m.hasClientLoader?x=!0:v.add(f.route.id))}),v.size===0)return[];let g=k2(t,s);return x&&v.size>0&&g.searchParams.set("_routes",e.filter(f=>v.has(f.route.id)).map(f=>f.route.id).join(",")),[g.pathname+g.search]},[s,a,i,r,c,e,t,o]),h=R.useMemo(()=>L2(u,r),[u,r]),p=z2(u);return R.createElement(R.Fragment,null,d.map(v=>R.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),h.map(v=>R.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),p.map(({key:v,link:x})=>R.createElement("link",{key:v,...x})))}function V2(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var lS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lS&&(window.__reactRouterVersion="7.6.2")}catch{}function H2({basename:t,children:e,window:n}){let i=R.useRef();i.current==null&&(i.current=CT({window:n,v5Compat:!0}));let r=i.current,[o,s]=R.useState({action:r.action,location:r.location}),a=R.useCallback(l=>{R.startTransition(()=>s(l))},[s]);return R.useLayoutEffect(()=>r.listen(a),[r,a]),R.createElement(g2,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:r})}var cS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uS=R.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:u,viewTransition:d,...h},p){let{basename:v}=R.useContext(Ai),x=typeof c=="string"&&cS.test(c),g,f=!1;if(typeof c=="string"&&x&&(g=c,lS))try{let b=new URL(window.location.href),C=c.startsWith("//")?new URL(b.protocol+c):new URL(c),F=Xi(C.pathname,v);C.origin===b.origin&&F!=null?c=F+C.search+C.hash:f=!0}catch{Ei(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let m=t2(c,{relative:r}),[y,w,S]=F2(i,h),E=$2(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:d});function M(b){e&&e(b),b.defaultPrevented||E(b)}let P=R.createElement("a",{...h,...S,href:g||m,onClick:f||o?e:M,ref:V2(p,w),target:l,"data-discover":!x&&n==="render"?"true":void 0});return y&&!x?R.createElement(R.Fragment,null,P,R.createElement(O2,{page:m})):P});uS.displayName="Link";var G2=R.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:o,to:s,viewTransition:a,children:l,...c},u){let d=ll(s,{relative:c.relative}),h=Qi(),p=R.useContext(Pu),{navigator:v,basename:x}=R.useContext(Ai),g=p!=null&&Z2(d)&&a===!0,f=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,m=h.pathname,y=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(m=m.toLowerCase(),y=y?y.toLowerCase():null,f=f.toLowerCase()),y&&x&&(y=Xi(y,x)||y);const w=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let S=m===f||!r&&m.startsWith(f)&&m.charAt(w)==="/",E=y!=null&&(y===f||!r&&y.startsWith(f)&&y.charAt(f.length)==="/"),M={isActive:S,isPending:E,isTransitioning:g},P=S?e:void 0,b;typeof i=="function"?b=i(M):b=[i,S?"active":null,E?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let C=typeof o=="function"?o(M):o;return R.createElement(uS,{...c,"aria-current":P,className:b,ref:u,style:C,to:s,viewTransition:a},typeof l=="function"?l(M):l)});G2.displayName="NavLink";var j2=R.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:o,method:s=Cc,action:a,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:d,...h},p)=>{let v=q2(),x=K2(a,{relative:c}),g=s.toLowerCase()==="get"?"get":"post",f=typeof a=="string"&&cS.test(a),m=y=>{if(l&&l(y),y.defaultPrevented)return;y.preventDefault();let w=y.nativeEvent.submitter,S=(w==null?void 0:w.getAttribute("formmethod"))||s;v(w||y.currentTarget,{fetcherKey:e,method:S,navigate:n,replace:r,state:o,relative:c,preventScrollReset:u,viewTransition:d})};return R.createElement("form",{ref:p,method:g,action:x,onSubmit:i?l:m,...h,"data-discover":!f&&t==="render"?"true":void 0})});j2.displayName="Form";function W2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dS(t){let e=R.useContext(Us);return at(e,W2(t)),e}function $2(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:o,viewTransition:s}={}){let a=Ji(),l=Qi(),c=ll(t,{relative:o});return R.useCallback(u=>{if(w2(u,e)){u.preventDefault();let d=n!==void 0?n:Va(l)===Va(c);a(t,{replace:d,state:i,preventScrollReset:r,relative:o,viewTransition:s})}},[l,a,c,n,i,e,t,r,o,s])}var X2=0,Y2=()=>`__${String(++X2)}__`;function q2(){let{router:t}=dS("useSubmit"),{basename:e}=R.useContext(Ai),n=f2();return R.useCallback(async(i,r={})=>{let{action:o,method:s,encType:a,formData:l,body:c}=M2(i,e);if(r.navigate===!1){let u=r.fetcherKey||Y2();await t.fetch(u,n,r.action||o,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||s,formEncType:r.encType||a,flushSync:r.flushSync})}else await t.navigate(r.action||o,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||s,formEncType:r.encType||a,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[t,e,n])}function K2(t,{relative:e}={}){let{basename:n}=R.useContext(Ai),i=R.useContext(Zi);at(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),o={...ll(t||".",{relative:e})},s=Qi();if(t==null){o.search=s.search;let a=new URLSearchParams(o.search),l=a.getAll("index");if(l.some(u=>u==="")){a.delete("index"),l.filter(d=>d).forEach(d=>a.append("index",d));let u=a.toString();o.search=u?`?${u}`:""}}return(!t||t===".")&&r.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:Vi([n,o.pathname])),Va(o)}function Z2(t,e={}){let n=R.useContext(tS);at(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=dS("useViewTransitionState"),r=ll(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=Xi(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=Xi(n.nextLocation.pathname,i)||n.nextLocation.pathname;return lu(r.pathname,s)!=null||lu(r.pathname,o)!=null}[...U2];/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dm="152",Q2=0,T0=1,J2=2,fS=1,eA=2,Ui=3,Ar=0,_n=1,Fi=2,Er=0,fs=1,A0=2,C0=3,R0=4,tA=5,Vo=100,nA=101,iA=102,L0=103,P0=104,rA=200,oA=201,sA=202,aA=203,hS=204,pS=205,lA=206,cA=207,uA=208,dA=209,fA=210,hA=0,pA=1,mA=2,Ih=3,gA=4,xA=5,vA=6,yA=7,mS=0,_A=1,SA=2,Hi=0,wA=1,bA=2,EA=3,MA=4,TA=5,gS=300,bs=301,Es=302,Uh=303,kh=304,Iu=306,Nh=1e3,ri=1001,Fh=1002,on=1003,D0=1004,Ud=1005,Zt=1006,AA=1007,Ha=1008,xo=1009,CA=1010,RA=1011,xS=1012,LA=1013,eo=1014,to=1015,Ga=1016,PA=1017,DA=1018,hs=1020,IA=1021,Vn=1023,UA=1024,kA=1025,so=1026,Ms=1027,NA=1028,FA=1029,OA=1030,zA=1031,BA=1033,kd=33776,Nd=33777,Fd=33778,Od=33779,I0=35840,U0=35841,k0=35842,N0=35843,VA=36196,F0=37492,O0=37496,z0=37808,B0=37809,V0=37810,H0=37811,G0=37812,j0=37813,W0=37814,$0=37815,X0=37816,Y0=37817,q0=37818,K0=37819,Z0=37820,Q0=37821,zd=36492,HA=36283,J0=36284,ex=36285,tx=36286,vS=3e3,ao=3001,GA=3200,jA=3201,WA=0,$A=1,lo="",Le="srgb",Mi="srgb-linear",yS="display-p3",Bd=7680,XA=519,nx=35044,ix="300 es",Oh=1035;class ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=Math.PI/180,zh=180/Math.PI;function cl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function pn(t,e,n){return Math.max(e,Math.min(n,t))}function YA(t,e){return(t%e+e)%e}function Hd(t,e,n){return(1-n)*t+n*e}function rx(t){return(t&t-1)===0&&t!==0}function qA(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ol(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function bn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],v=i[8],x=r[0],g=r[3],f=r[6],m=r[1],y=r[4],w=r[7],S=r[2],E=r[5],M=r[8];return o[0]=s*x+a*m+l*S,o[3]=s*g+a*y+l*E,o[6]=s*f+a*w+l*M,o[1]=c*x+u*m+d*S,o[4]=c*g+u*y+d*E,o[7]=c*f+u*w+d*M,o[2]=h*x+p*m+v*S,o[5]=h*g+p*y+v*E,o[8]=h*f+p*w+v*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,h=a*l-u*o,p=c*o-s*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Gd.makeScale(e,n)),this}rotate(e){return this.premultiply(Gd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gd.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gd=new Oe;function _S(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ja(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const ox={};function va(t){t in ox||(ox[t]=!0,console.warn(t))}function ps(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const KA=new Oe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ZA=new Oe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function QA(t){return t.convertSRGBToLinear().applyMatrix3(ZA)}function JA(t){return t.applyMatrix3(KA).convertLinearToSRGB()}const eC={[Mi]:t=>t,[Le]:t=>t.convertSRGBToLinear(),[yS]:QA},tC={[Mi]:t=>t,[Le]:t=>t.convertLinearToSRGB(),[yS]:JA},qn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Mi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=eC[e],r=tC[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Eo;class SS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Eo===void 0&&(Eo=ja("canvas")),Eo.width=e.width,Eo.height=e.height;const i=Eo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Eo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ja("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=ps(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ps(n[i]/255)*255):n[i]=ps(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wS=class{constructor(e=null){this.isSource=!0,this.uuid=cl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Wd(r[s].image)):o.push(Wd(r[s]))}else o=Wd(r);i.url=o}return n||(e.images[this.uuid]=i),i}};function Wd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?SS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nC=0;class cn extends ks{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=ri,r=ri,o=Zt,s=Ha,a=Vn,l=xo,c=cn.DEFAULT_ANISOTROPY,u=lo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nC++}),this.uuid=cl(),this.name="",this.source=new wS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ao?Le:lo),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nh:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nh:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?ao:vS}set encoding(e){va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ao?Le:lo}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=gS;cn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],v=l[9],x=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,w=(p+1)/2,S=(f+1)/2,E=(u+h)/4,M=(d+x)/4,P=(v+g)/4;return y>w&&y>S?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=E/i,o=M/i):w>S?w<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(w),i=E/r,o=P/r):S<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),i=M/o,r=P/o),this.set(i,r,o,n),this}let m=Math.sqrt((g-v)*(g-v)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(d-x)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vo extends ks{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ao?Le:lo),this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Zt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new wS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bS extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class iC extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=o[s+0],p=o[s+1],v=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||c!==p||u!==v){let g=1-a;const f=l*h+c*p+u*v+d*x,m=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const S=Math.sqrt(y),E=Math.atan2(S,f*m);g=Math.sin(g*E)/S,a=Math.sin(a*E)/S}const w=a*m;if(l=l*g+h*w,c=c*g+p*w,u=u*g+v*w,d=d*g+x*w,g===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=o[s],h=o[s+1],p=o[s+2],v=o[s+3];return e[n]=a*v+u*d+l*p-c*h,e[n+1]=l*v+u*h+c*d-a*p,e[n+2]=c*v+u*p+a*h-l*d,e[n+3]=u*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(o/2),h=l(i/2),p=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"YXZ":this._x=h*u*d+c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"ZXY":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d-h*p*v;break;case"ZYX":this._x=h*u*d-c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d+h*p*v;break;case"YZX":this._x=h*u*d+c*p*v,this._y=c*p*d+h*u*v,this._z=c*u*v-h*p*d,this._w=c*u*d-h*p*v;break;case"XZY":this._x=h*u*d-c*p*v,this._y=c*p*d-h*u*v,this._z=c*u*v+h*p*d,this._w=c*u*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=l*n+s*r-a*i,u=l*i+a*n-o*r,d=l*r+o*i-s*n,h=-o*n-s*i-a*r;return this.x=c*l+h*-o+u*-a-d*-s,this.y=u*l+h*-s+d*-o-c*-a,this.z=d*l+h*-a+c*-s-u*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $d.copy(this).projectOnVector(e),this.sub($d)}reflect(e){return this.sub($d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $d=new W,sx=new ul;class dl{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox),Mo.applyMatrix4(e.matrixWorld),this.union(Mo);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let s=0,a=o.count;s<a;s++)Ri.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Ri)}else r.boundingBox===null&&r.computeBoundingBox(),Mo.copy(r.boundingBox),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),zl.subVectors(this.max,Zs),To.subVectors(e.a,Zs),Ao.subVectors(e.b,Zs),Co.subVectors(e.c,Zs),or.subVectors(Ao,To),sr.subVectors(Co,Ao),Br.subVectors(To,Co);let n=[0,-or.z,or.y,0,-sr.z,sr.y,0,-Br.z,Br.y,or.z,0,-or.x,sr.z,0,-sr.x,Br.z,0,-Br.x,-or.y,or.x,0,-sr.y,sr.x,0,-Br.y,Br.x,0];return!Xd(n,To,Ao,Co,zl)||(n=[1,0,0,0,1,0,0,0,1],!Xd(n,To,Ao,Co,zl))?!1:(Bl.crossVectors(or,sr),n=[Bl.x,Bl.y,Bl.z],Xd(n,To,Ao,Co,zl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new W,new W,new W,new W,new W,new W,new W,new W],Ri=new W,Mo=new dl,To=new W,Ao=new W,Co=new W,or=new W,sr=new W,Br=new W,Zs=new W,zl=new W,Bl=new W,Vr=new W;function Xd(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Vr.fromArray(t,o);const a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=n.dot(Vr),u=i.dot(Vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rC=new dl,Qs=new W,Yd=new W;class fm{constructor(e=new W,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):rC.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const n=Qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Yd)),this.expandByPoint(Qs.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new W,qd=new W,Vl=new W,ar=new W,Kd=new W,Hl=new W,Zd=new W;class oC{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qd.copy(e).add(n).multiplyScalar(.5),Vl.copy(n).sub(e).normalize(),ar.copy(this.origin).sub(qd);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Vl),a=ar.dot(this.direction),l=-ar.dot(Vl),c=ar.lengthSq(),u=Math.abs(1-s*s);let d,h,p,v;if(u>0)if(d=s*l-a,h=s*a-l,v=o*u,d>=0)if(h>=-v)if(h<=v){const x=1/u;d*=x,h*=x,p=d*(d+s*h+2*a)+h*(s*d+h+2*l)+c}else h=o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+c):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+c);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(qd).addScaledVector(Vl,h),p}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,o){Kd.subVectors(n,e),Hl.subVectors(i,e),Zd.crossVectors(Kd,Hl);let s=this.direction.dot(Zd),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ar.subVectors(this.origin,e);const l=a*this.direction.dot(Hl.crossVectors(ar,Hl));if(l<0)return null;const c=a*this.direction.dot(Kd.cross(ar));if(c<0||l+c>s)return null;const u=-a*ar.dot(Zd);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,o,s,a,l,c,u,d,h,p,v,x,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ro.setFromMatrixColumn(e,0).length(),o=1/Ro.setFromMatrixColumn(e,1).length(),s=1/Ro.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*u,p=s*d,v=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=v+p*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,v=c*u,x=c*d;n[0]=h+x*a,n[4]=v*a-p,n[8]=s*c,n[1]=s*d,n[5]=s*u,n[9]=-a,n[2]=p*a-v,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,v=c*u,x=c*d;n[0]=h-x*a,n[4]=-s*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=s*u,n[9]=x-h*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*u,p=s*d,v=a*u,x=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,v=a*l,x=a*c;n[0]=l*u,n[4]=x-h*d,n[8]=v*d+p,n[1]=d,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,p=s*c,v=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+x,n[5]=s*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sC,e,aC)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),lr.crossVectors(i,En),lr.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),lr.crossVectors(i,En)),lr.normalize(),Gl.crossVectors(En,lr),r[0]=lr.x,r[4]=Gl.x,r[8]=En.x,r[1]=lr.y,r[5]=Gl.y,r[9]=En.y,r[2]=lr.z,r[6]=Gl.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],v=i[2],x=i[6],g=i[10],f=i[14],m=i[3],y=i[7],w=i[11],S=i[15],E=r[0],M=r[4],P=r[8],b=r[12],C=r[1],F=r[5],O=r[9],I=r[13],z=r[2],V=r[6],ee=r[10],$=r[14],U=r[3],j=r[7],G=r[11],re=r[15];return o[0]=s*E+a*C+l*z+c*U,o[4]=s*M+a*F+l*V+c*j,o[8]=s*P+a*O+l*ee+c*G,o[12]=s*b+a*I+l*$+c*re,o[1]=u*E+d*C+h*z+p*U,o[5]=u*M+d*F+h*V+p*j,o[9]=u*P+d*O+h*ee+p*G,o[13]=u*b+d*I+h*$+p*re,o[2]=v*E+x*C+g*z+f*U,o[6]=v*M+x*F+g*V+f*j,o[10]=v*P+x*O+g*ee+f*G,o[14]=v*b+x*I+g*$+f*re,o[3]=m*E+y*C+w*z+S*U,o[7]=m*M+y*F+w*V+S*j,o[11]=m*P+y*O+w*ee+S*G,o[15]=m*b+y*I+w*$+S*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],v=e[3],x=e[7],g=e[11],f=e[15];return v*(+o*l*d-r*c*d-o*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+o*s*h-r*s*p+r*c*u-o*l*u)+g*(+n*c*d-n*a*p-o*s*d+i*s*p+o*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*s*d-i*s*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],v=e[12],x=e[13],g=e[14],f=e[15],m=d*g*c-x*h*c+x*l*p-a*g*p-d*l*f+a*h*f,y=v*h*c-u*g*c-v*l*p+s*g*p+u*l*f-s*h*f,w=u*x*c-v*d*c+v*a*p-s*x*p-u*a*f+s*d*f,S=v*d*l-u*x*l-v*a*h+s*x*h+u*a*g-s*d*g,E=n*m+i*y+r*w+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(x*h*o-d*g*o-x*r*p+i*g*p+d*r*f-i*h*f)*M,e[2]=(a*g*o-x*l*o+x*r*c-i*g*c-a*r*f+i*l*f)*M,e[3]=(d*l*o-a*h*o-d*r*c+i*h*c+a*r*p-i*l*p)*M,e[4]=y*M,e[5]=(u*g*o-v*h*o+v*r*p-n*g*p-u*r*f+n*h*f)*M,e[6]=(v*l*o-s*g*o-v*r*c+n*g*c+s*r*f-n*l*f)*M,e[7]=(s*h*o-u*l*o+u*r*c-n*h*c-s*r*p+n*l*p)*M,e[8]=w*M,e[9]=(v*d*o-u*x*o-v*i*p+n*x*p+u*i*f-n*d*f)*M,e[10]=(s*x*o-v*a*o+v*i*c-n*x*c-s*i*f+n*a*f)*M,e[11]=(u*a*o-s*d*o-u*i*c+n*d*c+s*i*p-n*a*p)*M,e[12]=S*M,e[13]=(u*x*r-v*d*r+v*i*h-n*x*h-u*i*g+n*d*g)*M,e[14]=(v*a*r-s*x*r-v*i*l+n*x*l+s*i*g-n*a*g)*M,e[15]=(s*d*r-u*a*r+u*i*l-n*d*l-s*i*h+n*a*h)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,d=a+a,h=o*c,p=o*u,v=o*d,x=s*u,g=s*d,f=a*d,m=l*c,y=l*u,w=l*d,S=i.x,E=i.y,M=i.z;return r[0]=(1-(x+f))*S,r[1]=(p+w)*S,r[2]=(v-y)*S,r[3]=0,r[4]=(p-w)*E,r[5]=(1-(h+f))*E,r[6]=(g+m)*E,r[7]=0,r[8]=(v+y)*M,r[9]=(g-m)*M,r[10]=(1-(h+x))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Ro.set(r[0],r[1],r[2]).length();const s=Ro.set(r[4],r[5],r[6]).length(),a=Ro.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);const c=1/o,u=1/s,d=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,n.setFromRotationMatrix(Kn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s){const a=this.elements,l=2*o/(n-e),c=2*o/(i-r),u=(n+e)/(n-e),d=(i+r)/(i-r),h=-(s+o)/(s-o),p=-2*s*o/(s-o);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,o,s){const a=this.elements,l=1/(n-e),c=1/(i-r),u=1/(s-o),d=(n+e)*l,h=(i+r)*c,p=(s+o)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ro=new W,Kn=new Vt,sC=new W(0,0,0),aC=new W(1,1,1),lr=new W,Gl=new W,En=new W,ax=new Vt,lx=new ul;class Uu{constructor(e=0,n=0,i=0,r=Uu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-pn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ax.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ax,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lx.setFromEuler(this),this.setFromQuaternion(lx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Uu.DEFAULT_ORDER="XYZ";class ES{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lC=0;const cx=new W,Lo=new ul,Pi=new Vt,jl=new W,Js=new W,cC=new W,uC=new ul,ux=new W(1,0,0),dx=new W(0,1,0),fx=new W(0,0,1),dC={type:"added"},hx={type:"removed"};class Rn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lC++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new W,n=new Uu,i=new ul,r=new W(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Oe}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ES,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lo.setFromAxisAngle(e,n),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,n){return Lo.setFromAxisAngle(e,n),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(ux,e)}rotateY(e){return this.rotateOnAxis(dx,e)}rotateZ(e){return this.rotateOnAxis(fx,e)}translateOnAxis(e,n){return cx.copy(e).applyQuaternion(this.quaternion),this.position.add(cx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ux,e)}translateY(e){return this.translateOnAxis(dx,e)}translateZ(e){return this.translateOnAxis(fx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?jl.copy(e):jl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Js,jl,this.up):Pi.lookAt(jl,Js,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),Lo.setFromRotationMatrix(Pi),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(hx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(hx)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,cC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,uC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),v=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rn.DEFAULT_UP=new W(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new W,Di=new W,Qd=new W,Ii=new W,Po=new W,Do=new W,px=new W,Jd=new W,ef=new W,tf=new W;let Wl=!1;class ii{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Zn.subVectors(r,n),Di.subVectors(i,n),Qd.subVectors(e,n);const s=Zn.dot(Zn),a=Zn.dot(Di),l=Zn.dot(Qd),c=Di.dot(Di),u=Di.dot(Qd),d=s*c-a*a;if(d===0)return o.set(-2,-1,-1);const h=1/d,p=(c*l-a*u)*h,v=(s*u-a*l)*h;return o.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ii),Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,n,i,r,o,s,a,l){return Wl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wl=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ii),l.setScalar(0),l.addScaledVector(o,Ii.x),l.addScaledVector(s,Ii.y),l.addScaledVector(a,Ii.z),l}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Di.subVectors(e,n),Zn.cross(Di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Zn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return Wl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wl=!0),ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Po.subVectors(r,i),Do.subVectors(o,i),Jd.subVectors(e,i);const l=Po.dot(Jd),c=Do.dot(Jd);if(l<=0&&c<=0)return n.copy(i);ef.subVectors(e,r);const u=Po.dot(ef),d=Do.dot(ef);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(Po,s);tf.subVectors(e,o);const p=Po.dot(tf),v=Do.dot(tf);if(v>=0&&p<=v)return n.copy(o);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Do,a);const g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return px.subVectors(o,r),a=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(px,a);const f=1/(g+x+h);return s=x*f,a=h*f,n.copy(i).addScaledVector(Po,s).addScaledVector(Do,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let fC=0;class ku extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fC++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=fs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hS,this.blendDst=pS,this.blendEquation=Vo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ih,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=XA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bd,this.stencilZFail=Bd,this.stencilZPass=Bd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const MS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},$l={h:0,s:0,l:0};function nf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=qn.workingColorSpace){return this.r=e,this.g=n,this.b=i,qn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=qn.workingColorSpace){if(e=YA(e,1),n=pn(n,0,1),i=pn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=nf(s,o,e+1/3),this.g=nf(s,o,e),this.b=nf(s,o,e-1/3)}return qn.toWorkingColorSpace(this,r),this}setStyle(e,n=Le){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Le){const i=MS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=jd(e.r),this.g=jd(e.g),this.b=jd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return qn.fromWorkingColorSpace(Xt.copy(this),e),Math.round(pn(Xt.r*255,0,255))*65536+Math.round(pn(Xt.g*255,0,255))*256+Math.round(pn(Xt.b*255,0,255))}getHexString(e=Le){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qn.workingColorSpace){qn.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,o=Xt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=qn.workingColorSpace){return qn.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Le){qn.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Le?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qn),Qn.h+=e,Qn.s+=n,Qn.l+=i,this.setHSL(Qn.h,Qn.s,Qn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qn),e.getHSL($l);const i=Hd(Qn.h,$l.h,n),r=Hd(Qn.s,$l.s,n),o=Hd(Qn.l,$l.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new it;it.NAMES=MS;class Ti extends ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new W,Xl=new tt;class vi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=nx,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xl.fromBufferAttribute(this,n),Xl.applyMatrix3(e),this.setXY(n,Xl.x,Xl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ol(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ol(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ol(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ol(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),r=bn(r,this.array),o=bn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nx&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class TS extends vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class AS extends vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yi extends vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let hC=0;const Nn=new Vt,rf=new Rn,Io=new W,Mn=new dl,ea=new dl,Lt=new W;class Ur extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hC++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_S(e)?AS:TS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Oe().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new yi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];ea.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(Mn.min,ea.min),Mn.expandByPoint(Lt),Lt.addVectors(Mn.max,ea.max),Mn.expandByPoint(Lt)):(Mn.expandByPoint(ea.min),Mn.expandByPoint(ea.max))}Mn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Lt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Io.fromBufferAttribute(e,c),Lt.add(Io)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<a;C++)c[C]=new W,u[C]=new W;const d=new W,h=new W,p=new W,v=new tt,x=new tt,g=new tt,f=new W,m=new W;function y(C,F,O){d.fromArray(r,C*3),h.fromArray(r,F*3),p.fromArray(r,O*3),v.fromArray(s,C*2),x.fromArray(s,F*2),g.fromArray(s,O*2),h.sub(d),p.sub(d),x.sub(v),g.sub(v);const I=1/(x.x*g.y-g.x*x.y);isFinite(I)&&(f.copy(h).multiplyScalar(g.y).addScaledVector(p,-x.y).multiplyScalar(I),m.copy(p).multiplyScalar(x.x).addScaledVector(h,-g.x).multiplyScalar(I),c[C].add(f),c[F].add(f),c[O].add(f),u[C].add(m),u[F].add(m),u[O].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let C=0,F=w.length;C<F;++C){const O=w[C],I=O.start,z=O.count;for(let V=I,ee=I+z;V<ee;V+=3)y(i[V+0],i[V+1],i[V+2])}const S=new W,E=new W,M=new W,P=new W;function b(C){M.fromArray(o,C*3),P.copy(M);const F=c[C];S.copy(F),S.sub(M.multiplyScalar(M.dot(F))).normalize(),E.crossVectors(P,F);const I=E.dot(u[C])<0?-1:1;l[C*4]=S.x,l[C*4+1]=S.y,l[C*4+2]=S.z,l[C*4+3]=I}for(let C=0,F=w.length;C<F;++C){const O=w[C],I=O.start,z=O.count;for(let V=I,ee=I+z;V<ee;V+=3)b(i[V+0]),b(i[V+1]),b(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new W,o=new W,s=new W,a=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let f=0;f<u;f++)h[v++]=c[p++]}return new vi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ur,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mx=new Vt,ui=new oC,Yl=new fm,gx=new W,Uo=new W,ko=new W,No=new W,of=new W,ql=new W,Kl=new tt,Zl=new tt,Ql=new tt,xx=new W,vx=new W,yx=new W,Jl=new W,ec=new W;class sn extends Rn{constructor(e=new Ur,n=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ql.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],d=o[l];u!==0&&(of.fromBufferAttribute(d,e),s?ql.addScaledVector(of,u):ql.addScaledVector(of.sub(n),u))}n.add(ql)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(o),ui.copy(e.ray).recast(e.near),!(Yl.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Yl,gx)===null||ui.origin.distanceToSquared(gx)>(e.far-e.near)**2))&&(mx.copy(o).invert(),ui.copy(e.ray).applyMatrix4(mx),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const r=this.geometry,o=this.material,s=r.index,a=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,h=r.drawRange;if(s!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const x=d[p],g=o[x.materialIndex],f=Math.max(x.start,h.start),m=Math.min(s.count,Math.min(x.start+x.count,h.start+h.count));for(let y=f,w=m;y<w;y+=3){const S=s.getX(y),E=s.getX(y+1),M=s.getX(y+2);i=tc(this,g,e,ui,l,c,u,S,E,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),v=Math.min(s.count,h.start+h.count);for(let x=p,g=v;x<g;x+=3){const f=s.getX(x),m=s.getX(x+1),y=s.getX(x+2);i=tc(this,o,e,ui,l,c,u,f,m,y),i&&(i.faceIndex=Math.floor(x/3),n.push(i))}}else if(a!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const x=d[p],g=o[x.materialIndex],f=Math.max(x.start,h.start),m=Math.min(a.count,Math.min(x.start+x.count,h.start+h.count));for(let y=f,w=m;y<w;y+=3){const S=y,E=y+1,M=y+2;i=tc(this,g,e,ui,l,c,u,S,E,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let x=p,g=v;x<g;x+=3){const f=x,m=x+1,y=x+2;i=tc(this,o,e,ui,l,c,u,f,m,y),i&&(i.faceIndex=Math.floor(x/3),n.push(i))}}}}function pC(t,e,n,i,r,o,s,a){let l;if(e.side===_n?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Ar,a),l===null)return null;ec.copy(a),ec.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ec);return c<n.near||c>n.far?null:{distance:c,point:ec.clone(),object:t}}function tc(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,Uo),t.getVertexPosition(l,ko),t.getVertexPosition(c,No);const u=pC(t,e,n,i,Uo,ko,No,Jl);if(u){r&&(Kl.fromBufferAttribute(r,a),Zl.fromBufferAttribute(r,l),Ql.fromBufferAttribute(r,c),u.uv=ii.getInterpolation(Jl,Uo,ko,No,Kl,Zl,Ql,new tt)),o&&(Kl.fromBufferAttribute(o,a),Zl.fromBufferAttribute(o,l),Ql.fromBufferAttribute(o,c),u.uv1=ii.getInterpolation(Jl,Uo,ko,No,Kl,Zl,Ql,new tt),u.uv2=u.uv1),s&&(xx.fromBufferAttribute(s,a),vx.fromBufferAttribute(s,l),yx.fromBufferAttribute(s,c),u.normal=ii.getInterpolation(Jl,Uo,ko,No,xx,vx,yx,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};ii.getNormal(Uo,ko,No,d.normal),u.face=d}return u}class fl extends Ur{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,s,o,0),v("z","y","x",1,-1,i,n,-e,s,o,1),v("x","z","y",1,1,e,i,n,r,s,2),v("x","z","y",1,-1,e,i,-n,r,s,3),v("x","y","z",1,-1,e,n,i,r,o,4),v("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(u,3)),this.setAttribute("uv",new yi(d,2));function v(x,g,f,m,y,w,S,E,M,P,b){const C=w/M,F=S/P,O=w/2,I=S/2,z=E/2,V=M+1,ee=P+1;let $=0,U=0;const j=new W;for(let G=0;G<ee;G++){const re=G*F-I;for(let te=0;te<V;te++){const X=te*C-O;j[x]=X*m,j[g]=re*y,j[f]=z,c.push(j.x,j.y,j.z),j[x]=0,j[g]=0,j[f]=E>0?1:-1,u.push(j.x,j.y,j.z),d.push(te/M),d.push(1-G/P),$+=1}}for(let G=0;G<P;G++)for(let re=0;re<M;re++){const te=h+re+V*G,X=h+re+V*(G+1),J=h+(re+1)+V*(G+1),le=h+(re+1)+V*G;l.push(te,X,le),l.push(X,J,le),U+=6}a.addGroup(p,U,b),p+=U,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function mC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function CS(t){return t.getRenderTarget()===null?t.outputColorSpace:Mi}const gC={clone:Ts,merge:nn};var xC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yo extends ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xC,this.fragmentShader=vC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=mC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class RS extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends RS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(Vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fo=-90,Oo=1;class yC extends Rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Dt(Fo,Oo,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new Dt(Fo,Oo,e,n);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const s=new Dt(Fo,Oo,e,n);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new Dt(Fo,Oo,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Dt(Fo,Oo,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Dt(Fo,Oo,e,n);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,s,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Hi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class LS extends cn{constructor(e,n,i,r,o,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:bs,super(e,n,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _C extends vo{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ao?Le:lo),this.texture=new LS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fl(5,5,5),o=new yo({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Er});o.uniforms.tEquirect.value=n;const s=new sn(r,o),a=n.minFilter;return n.minFilter===Ha&&(n.minFilter=Zt),new yC(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const sf=new W,SC=new W,wC=new Oe;class Xr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sf.subVectors(i,n).cross(SC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wC.getNormalMatrix(e),r=this.coplanarPoint(sf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new fm,nc=new W;class PS{constructor(e=new Xr,n=new Xr,i=new Xr,r=new Xr,o=new Xr,s=new Xr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7],h=i[8],p=i[9],v=i[10],x=i[11],g=i[12],f=i[13],m=i[14],y=i[15];return n[0].setComponents(a-r,d-l,x-h,y-g).normalize(),n[1].setComponents(a+r,d+l,x+h,y+g).normalize(),n[2].setComponents(a+o,d+c,x+p,y+f).normalize(),n[3].setComponents(a-o,d-c,x-p,y-f).normalize(),n[4].setComponents(a-s,d-u,x-v,y-m).normalize(),n[5].setComponents(a+s,d+u,x+v,y+m).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(nc.x=r.normal.x>0?e.max.x:e.min.x,nc.y=r.normal.y>0?e.max.y:e.min.y,nc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function DS(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function bC(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,d,h),c.onUploadCallback();let v;if(d instanceof Float32Array)v=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=t.SHORT;else if(d instanceof Uint32Array)v=t.UNSIGNED_INT;else if(d instanceof Int32Array)v=t.INT;else if(d instanceof Int8Array)v=t.BYTE;else if(d instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function o(c,u,d){const h=u.array,p=u.updateRange;t.bindBuffer(d,c),p.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(o(d.buffer,c,u),d.version=c.version)}return{get:s,remove:a,update:l}}class hm extends Ur{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],v=[],x=[],g=[];for(let f=0;f<u;f++){const m=f*h-s;for(let y=0;y<c;y++){const w=y*d-o;v.push(w,-m,0),x.push(0,0,1),g.push(y/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<a;m++){const y=m+c*f,w=m+c*(f+1),S=m+1+c*(f+1),E=m+1+c*f;p.push(y,w,E),p.push(w,S,E)}this.setIndex(p),this.setAttribute("position",new yi(v,3)),this.setAttribute("normal",new yi(x,3)),this.setAttribute("uv",new yi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hm(e.width,e.height,e.widthSegments,e.heightSegments)}}var EC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TC=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,AC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LC="vec3 transformed = vec3( position );",PC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IC=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,UC=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,NC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,HC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GC=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,jC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,WC=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$C=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KC="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZC=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QC=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,JC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eR=`#ifdef USE_ENVMAP
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
#endif`,tR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nR=`#ifdef USE_ENVMAP
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
#endif`,iR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aR=`#ifdef USE_GRADIENTMAP
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
}`,lR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,hR=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,pR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,yR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	vec3 f0 = material.specularColor;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_R=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ER=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,TR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,AR=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,CR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LR=`#if defined( USE_POINTS_UV )
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
#endif`,PR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kR=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,NR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,FR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,OR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,GR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$R=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,qR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,aL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lL=`#ifdef USE_SKINNING
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
#endif`,cL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hL=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,pL=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,mL=`#ifdef USE_UV
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
#endif`,gL=`#ifdef USE_UV
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
#endif`,xL=`#ifdef USE_UV
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
#endif`,vL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_L=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,SL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ML=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,TL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,AL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,CL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,PL=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DL=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IL=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,UL=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,NL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,OL=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,HL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,jL=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WL=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,$L=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XL=`uniform float size;
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
}`,YL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qL=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,KL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ZL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,QL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:EC,alphamap_pars_fragment:MC,alphatest_fragment:TC,alphatest_pars_fragment:AC,aomap_fragment:CC,aomap_pars_fragment:RC,begin_vertex:LC,beginnormal_vertex:PC,bsdfs:DC,iridescence_fragment:IC,bumpmap_pars_fragment:UC,clipping_planes_fragment:kC,clipping_planes_pars_fragment:NC,clipping_planes_pars_vertex:FC,clipping_planes_vertex:OC,color_fragment:zC,color_pars_fragment:BC,color_pars_vertex:VC,color_vertex:HC,common:GC,cube_uv_reflection_fragment:jC,defaultnormal_vertex:WC,displacementmap_pars_vertex:$C,displacementmap_vertex:XC,emissivemap_fragment:YC,emissivemap_pars_fragment:qC,encodings_fragment:KC,encodings_pars_fragment:ZC,envmap_fragment:QC,envmap_common_pars_fragment:JC,envmap_pars_fragment:eR,envmap_pars_vertex:tR,envmap_physical_pars_fragment:hR,envmap_vertex:nR,fog_vertex:iR,fog_pars_vertex:rR,fog_fragment:oR,fog_pars_fragment:sR,gradientmap_pars_fragment:aR,lightmap_fragment:lR,lightmap_pars_fragment:cR,lights_lambert_fragment:uR,lights_lambert_pars_fragment:dR,lights_pars_begin:fR,lights_toon_fragment:pR,lights_toon_pars_fragment:mR,lights_phong_fragment:gR,lights_phong_pars_fragment:xR,lights_physical_fragment:vR,lights_physical_pars_fragment:yR,lights_fragment_begin:_R,lights_fragment_maps:SR,lights_fragment_end:wR,logdepthbuf_fragment:bR,logdepthbuf_pars_fragment:ER,logdepthbuf_pars_vertex:MR,logdepthbuf_vertex:TR,map_fragment:AR,map_pars_fragment:CR,map_particle_fragment:RR,map_particle_pars_fragment:LR,metalnessmap_fragment:PR,metalnessmap_pars_fragment:DR,morphcolor_vertex:IR,morphnormal_vertex:UR,morphtarget_pars_vertex:kR,morphtarget_vertex:NR,normal_fragment_begin:FR,normal_fragment_maps:OR,normal_pars_fragment:zR,normal_pars_vertex:BR,normal_vertex:VR,normalmap_pars_fragment:HR,clearcoat_normal_fragment_begin:GR,clearcoat_normal_fragment_maps:jR,clearcoat_pars_fragment:WR,iridescence_pars_fragment:$R,output_fragment:XR,packing:YR,premultiplied_alpha_fragment:qR,project_vertex:KR,dithering_fragment:ZR,dithering_pars_fragment:QR,roughnessmap_fragment:JR,roughnessmap_pars_fragment:eL,shadowmap_pars_fragment:tL,shadowmap_pars_vertex:nL,shadowmap_vertex:iL,shadowmask_pars_fragment:rL,skinbase_vertex:oL,skinning_pars_vertex:sL,skinning_vertex:aL,skinnormal_vertex:lL,specularmap_fragment:cL,specularmap_pars_fragment:uL,tonemapping_fragment:dL,tonemapping_pars_fragment:fL,transmission_fragment:hL,transmission_pars_fragment:pL,uv_pars_fragment:mL,uv_pars_vertex:gL,uv_vertex:xL,worldpos_vertex:vL,background_vert:yL,background_frag:_L,backgroundCube_vert:SL,backgroundCube_frag:wL,cube_vert:bL,cube_frag:EL,depth_vert:ML,depth_frag:TL,distanceRGBA_vert:AL,distanceRGBA_frag:CL,equirect_vert:RL,equirect_frag:LL,linedashed_vert:PL,linedashed_frag:DL,meshbasic_vert:IL,meshbasic_frag:UL,meshlambert_vert:kL,meshlambert_frag:NL,meshmatcap_vert:FL,meshmatcap_frag:OL,meshnormal_vert:zL,meshnormal_frag:BL,meshphong_vert:VL,meshphong_frag:HL,meshphysical_vert:GL,meshphysical_frag:jL,meshtoon_vert:WL,meshtoon_frag:$L,points_vert:XL,points_frag:YL,shadow_vert:qL,shadow_frag:KL,sprite_vert:ZL,sprite_frag:QL},ce={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaTest:{value:0}}},fi={basic:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new it(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:nn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:nn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:nn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new it(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:nn([ce.points,ce.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:nn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:nn([ce.common,ce.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:nn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:nn([ce.sprite,ce.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:nn([ce.common,ce.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:nn([ce.lights,ce.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};fi.physical={uniforms:nn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const ic={r:0,b:0,g:0};function JL(t,e,n,i,r,o,s){const a=new it(0);let l=o===!0?0:1,c,u,d=null,h=0,p=null;function v(g,f){let m=!1,y=f.isScene===!0?f.background:null;switch(y&&y.isTexture&&(y=(f.backgroundBlurriness>0?n:e).get(y)),y===null?x(a,l):y&&y.isColor&&(x(y,1),m=!0),t.xr.getEnvironmentBlendMode()){case"opaque":m=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,s),m=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,s),m=!0;break}(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Iu)?(u===void 0&&(u=new sn(new fl(1,1,1),new yo({name:"BackgroundCubeMaterial",uniforms:Ts(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,M,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=y.colorSpace!==Le,(d!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new sn(new hm(2,2),new yo({name:"BackgroundMaterial",uniforms:Ts(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=y.colorSpace!==Le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,f){g.getRGB(ic,CS(t)),i.buffers.color.setClear(ic.r,ic.g,ic.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(g,f=1){a.set(g),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(a,l)},render:v}}function eP(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=g(null);let c=l,u=!1;function d(z,V,ee,$,U){let j=!1;if(s){const G=x($,ee,V);c!==G&&(c=G,p(c.object)),j=f(z,$,ee,U),j&&m(z,$,ee,U)}else{const G=V.wireframe===!0;(c.geometry!==$.id||c.program!==ee.id||c.wireframe!==G)&&(c.geometry=$.id,c.program=ee.id,c.wireframe=G,j=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,P(z,V,ee,$),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function p(z){return i.isWebGL2?t.bindVertexArray(z):o.bindVertexArrayOES(z)}function v(z){return i.isWebGL2?t.deleteVertexArray(z):o.deleteVertexArrayOES(z)}function x(z,V,ee){const $=ee.wireframe===!0;let U=a[z.id];U===void 0&&(U={},a[z.id]=U);let j=U[V.id];j===void 0&&(j={},U[V.id]=j);let G=j[$];return G===void 0&&(G=g(h()),j[$]=G),G}function g(z){const V=[],ee=[],$=[];for(let U=0;U<r;U++)V[U]=0,ee[U]=0,$[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ee,attributeDivisors:$,object:z,attributes:{},index:null}}function f(z,V,ee,$){const U=c.attributes,j=V.attributes;let G=0;const re=ee.getAttributes();for(const te in re)if(re[te].location>=0){const J=U[te];let le=j[te];if(le===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(le=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(le=z.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;G++}return c.attributesNum!==G||c.index!==$}function m(z,V,ee,$){const U={},j=V.attributes;let G=0;const re=ee.getAttributes();for(const te in re)if(re[te].location>=0){let J=j[te];J===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(J=z.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),U[te]=le,G++}c.attributes=U,c.attributesNum=G,c.index=$}function y(){const z=c.newAttributes;for(let V=0,ee=z.length;V<ee;V++)z[V]=0}function w(z){S(z,0)}function S(z,V){const ee=c.newAttributes,$=c.enabledAttributes,U=c.attributeDivisors;ee[z]=1,$[z]===0&&(t.enableVertexAttribArray(z),$[z]=1),U[z]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,V),U[z]=V)}function E(){const z=c.newAttributes,V=c.enabledAttributes;for(let ee=0,$=V.length;ee<$;ee++)V[ee]!==z[ee]&&(t.disableVertexAttribArray(ee),V[ee]=0)}function M(z,V,ee,$,U,j){i.isWebGL2===!0&&(ee===t.INT||ee===t.UNSIGNED_INT)?t.vertexAttribIPointer(z,V,ee,U,j):t.vertexAttribPointer(z,V,ee,$,U,j)}function P(z,V,ee,$){if(i.isWebGL2===!1&&(z.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const U=$.attributes,j=ee.getAttributes(),G=V.defaultAttributeValues;for(const re in j){const te=j[re];if(te.location>=0){let X=U[re];if(X===void 0&&(re==="instanceMatrix"&&z.instanceMatrix&&(X=z.instanceMatrix),re==="instanceColor"&&z.instanceColor&&(X=z.instanceColor)),X!==void 0){const J=X.normalized,le=X.itemSize,ne=n.get(X);if(ne===void 0)continue;const k=ne.buffer,Re=ne.type,Ae=ne.bytesPerElement;if(X.isInterleavedBufferAttribute){const ue=X.data,Me=ue.stride,je=X.offset;if(ue.isInstancedInterleavedBuffer){for(let ye=0;ye<te.locationSize;ye++)S(te.location+ye,ue.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ye=0;ye<te.locationSize;ye++)w(te.location+ye);t.bindBuffer(t.ARRAY_BUFFER,k);for(let ye=0;ye<te.locationSize;ye++)M(te.location+ye,le/te.locationSize,Re,J,Me*Ae,(je+le/te.locationSize*ye)*Ae)}else{if(X.isInstancedBufferAttribute){for(let ue=0;ue<te.locationSize;ue++)S(te.location+ue,X.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ue=0;ue<te.locationSize;ue++)w(te.location+ue);t.bindBuffer(t.ARRAY_BUFFER,k);for(let ue=0;ue<te.locationSize;ue++)M(te.location+ue,le/te.locationSize,Re,J,le*Ae,le/te.locationSize*ue*Ae)}}else if(G!==void 0){const J=G[re];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(te.location,J);break;case 3:t.vertexAttrib3fv(te.location,J);break;case 4:t.vertexAttrib4fv(te.location,J);break;default:t.vertexAttrib1fv(te.location,J)}}}}E()}function b(){O();for(const z in a){const V=a[z];for(const ee in V){const $=V[ee];for(const U in $)v($[U].object),delete $[U];delete V[ee]}delete a[z]}}function C(z){if(a[z.id]===void 0)return;const V=a[z.id];for(const ee in V){const $=V[ee];for(const U in $)v($[U].object),delete $[U];delete V[ee]}delete a[z.id]}function F(z){for(const V in a){const ee=a[V];if(ee[z.id]===void 0)continue;const $=ee[z.id];for(const U in $)v($[U].object),delete $[U];delete ee[z.id]}}function O(){I(),u=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:w,disableUnusedAttributes:E}}function tP(t,e,n,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,u){t.drawArrays(o,c,u),n.update(u,o,1)}function l(c,u,d){if(d===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](o,c,u,d),n.update(u,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function nP(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,w=s||e.has("OES_texture_float"),S=y&&w,E=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:m,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:S,maxSamples:E}}function iP(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Xr,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,f=t.get(d);if(!r||v===null||v.length===0||o&&!g)o?u(null):c();else{const m=o?0:i,y=m*4;let w=f.clippingState||null;l.value=w,w=u(v,h,y,p);for(let S=0;S!==y;++S)w[S]=n[S];f.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,v){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const f=p+x*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,w=p;y!==x;++y,w+=4)s.copy(d[y]).applyMatrix4(m,a),s.normal.toArray(g,w),g[w+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function rP(t){let e=new WeakMap;function n(s,a){return a===Uh?s.mapping=bs:a===kh&&(s.mapping=Es),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Uh||a===kh)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new _C(l.height/2);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class oP extends RS{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const es=4,_x=[.125,.215,.35,.446,.526,.582],Kr=20,af=new oP,Sx=new it;let lf=null;const Yr=(1+Math.sqrt(5))/2,zo=1/Yr,wx=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Yr,zo),new W(0,Yr,-zo),new W(zo,0,Yr),new W(-zo,0,Yr),new W(Yr,zo,0),new W(-Yr,zo,0)];class bx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){lf=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lf),e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bs||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Ga,format:Vn,colorSpace:Mi,depthBuffer:!1},r=Ex(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ex(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sP(o)),this._blurMaterial=aP(o,e,n)}return r}_compileMaterial(e){const n=new sn(this._lodPlanes[0],e);this._renderer.compile(n,af)}_sceneToCubeUV(e,n,i,r){const a=new Dt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Sx),u.toneMapping=Hi,u.autoClear=!1;const p=new Ti({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),v=new sn(new fl,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Sx),x=!0);for(let f=0;f<6;f++){const m=f%3;m===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):m===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;rc(r,m*y,f>2?y:0,y,y),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===bs||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mx());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new sn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;rc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,af)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=wx[(r-1)%wx.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new sn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Kr-1),x=o/v,g=isFinite(o)?1+Math.floor(u*x):Kr;g>Kr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kr}`);const f=[];let m=0;for(let M=0;M<Kr;++M){const P=M/x,b=Math.exp(-P*P/2);f.push(b),M===0?m+=b:M<g&&(m+=2*b)}for(let M=0;M<f.length;M++)f[M]=f[M]/m;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=v,h.mipInt.value=y-i;const w=this._sizeLods[r],S=3*w*(r>y-es?r-y+es:0),E=4*(this._cubeSize-w);rc(n,S,E,3*w,2*w),l.setRenderTarget(n),l.render(d,af)}}function sP(t){const e=[],n=[],i=[];let r=t;const o=t-es+1+_x.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-es?l=_x[s-t+es-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,x=3,g=2,f=1,m=new Float32Array(x*v*p),y=new Float32Array(g*v*p),w=new Float32Array(f*v*p);for(let E=0;E<p;E++){const M=E%3*2/3-1,P=E>2?0:-1,b=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];m.set(b,x*v*E),y.set(h,g*v*E);const C=[E,E,E,E,E,E];w.set(C,f*v*E)}const S=new Ur;S.setAttribute("position",new vi(m,x)),S.setAttribute("uv",new vi(y,g)),S.setAttribute("faceIndex",new vi(w,f)),e.push(S),r>es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ex(t,e,n){const i=new vo(t,e,n);return i.texture.mapping=Iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function aP(t,e,n){const i=new Float32Array(Kr),r=new W(0,1,0);return new yo({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pm(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Mx(){return new yo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pm(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Tx(){return new yo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function pm(){return`

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
	`}function lP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uh||l===kh,u=l===bs||l===Es;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new bx(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new bx(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function cP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uP(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let g=0,f=x.length;g<f;g++)e.update(x[g],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const m=p.array;x=p.version;for(let y=0,w=m.length;y<w;y+=3){const S=m[y+0],E=m[y+1],M=m[y+2];h.push(S,E,E,M,M,S)}}else{const m=v.array;x=v.version;for(let y=0,w=m.length/3-1;y<w;y+=3){const S=y+0,E=y+1,M=y+2;h.push(S,E,E,M,M,S)}}const g=new(_S(h)?AS:TS)(h,1);g.version=x;const f=o.get(d);f&&e.remove(f),o.set(d,g)}function u(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function dP(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){t.drawElements(o,p,a,h*l),n.update(p,o,1)}function d(h,p,v){if(v===0)return;let x,g;if(r)x=t,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](o,p,a,h*l,v),n.update(p,o,v)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=d}function fP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hP(t,e){return t[0]-e[0]}function pP(t,e){return Math.abs(e[1])-Math.abs(t[1])}function mP(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=v!==void 0?v.length:0;let g=o.get(u);if(g===void 0||g.count!==x){let V=function(){I.dispose(),o.delete(u),u.removeEventListener("dispose",V)};var p=V;g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let b=0;y===!0&&(b=1),w===!0&&(b=2),S===!0&&(b=3);let C=u.attributes.position.count*b,F=1;C>e.maxTextureSize&&(F=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const O=new Float32Array(C*F*4*x),I=new bS(O,C,F,x);I.type=to,I.needsUpdate=!0;const z=b*4;for(let ee=0;ee<x;ee++){const $=E[ee],U=M[ee],j=P[ee],G=C*F*4*ee;for(let re=0;re<$.count;re++){const te=re*z;y===!0&&(s.fromBufferAttribute($,re),O[G+te+0]=s.x,O[G+te+1]=s.y,O[G+te+2]=s.z,O[G+te+3]=0),w===!0&&(s.fromBufferAttribute(U,re),O[G+te+4]=s.x,O[G+te+5]=s.y,O[G+te+6]=s.z,O[G+te+7]=0),S===!0&&(s.fromBufferAttribute(j,re),O[G+te+8]=s.x,O[G+te+9]=s.y,O[G+te+10]=s.z,O[G+te+11]=j.itemSize===4?s.w:1)}}g={count:x,texture:I,size:new tt(C,F)},o.set(u,g),u.addEventListener("dispose",V)}let f=0;for(let y=0;y<h.length;y++)f+=h[y];const m=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",m),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const v=h===void 0?0:h.length;let x=i[u.id];if(x===void 0||x.length!==v){x=[];for(let w=0;w<v;w++)x[w]=[w,0];i[u.id]=x}for(let w=0;w<v;w++){const S=x[w];S[0]=w,S[1]=h[w]}x.sort(pP);for(let w=0;w<8;w++)w<v&&x[w][1]?(a[w][0]=x[w][0],a[w][1]=x[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(hP);const g=u.morphAttributes.position,f=u.morphAttributes.normal;let m=0;for(let w=0;w<8;w++){const S=a[w],E=S[0],M=S[1];E!==Number.MAX_SAFE_INTEGER&&M?(g&&u.getAttribute("morphTarget"+w)!==g[E]&&u.setAttribute("morphTarget"+w,g[E]),f&&u.getAttribute("morphNormal"+w)!==f[E]&&u.setAttribute("morphNormal"+w,f[E]),r[w]=M,m+=M):(g&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),f&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const y=u.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",y),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function gP(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}const IS=new cn,US=new bS,kS=new iC,NS=new LS,Ax=[],Cx=[],Rx=new Float32Array(16),Lx=new Float32Array(9),Px=new Float32Array(4);function Ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Ax[r];if(o===void 0&&(o=new Float32Array(r),Ax[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Tt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nu(t,e){let n=Cx[e];n===void 0&&(n=new Int32Array(e),Cx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Tt(n,e)}}function yP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Tt(n,e)}}function _P(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Tt(n,e)}}function SP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(n,e)}else{if(Mt(n,i))return;Px.set(i),t.uniformMatrix2fv(this.addr,!1,Px),Tt(n,i)}}function wP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(n,e)}else{if(Mt(n,i))return;Lx.set(i),t.uniformMatrix3fv(this.addr,!1,Lx),Tt(n,i)}}function bP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(n,e)}else{if(Mt(n,i))return;Rx.set(i),t.uniformMatrix4fv(this.addr,!1,Rx),Tt(n,i)}}function EP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function MP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Tt(n,e)}}function TP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Tt(n,e)}}function AP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Tt(n,e)}}function CP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Tt(n,e)}}function LP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Tt(n,e)}}function PP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Tt(n,e)}}function DP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||IS,r)}function IP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||kS,r)}function UP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||NS,r)}function kP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||US,r)}function NP(t){switch(t){case 5126:return xP;case 35664:return vP;case 35665:return yP;case 35666:return _P;case 35674:return SP;case 35675:return wP;case 35676:return bP;case 5124:case 35670:return EP;case 35667:case 35671:return MP;case 35668:case 35672:return TP;case 35669:case 35673:return AP;case 5125:return CP;case 36294:return RP;case 36295:return LP;case 36296:return PP;case 35678:case 36198:case 36298:case 36306:case 35682:return DP;case 35679:case 36299:case 36307:return IP;case 35680:case 36300:case 36308:case 36293:return UP;case 36289:case 36303:case 36311:case 36292:return kP}}function FP(t,e){t.uniform1fv(this.addr,e)}function OP(t,e){const n=Ns(e,this.size,2);t.uniform2fv(this.addr,n)}function zP(t,e){const n=Ns(e,this.size,3);t.uniform3fv(this.addr,n)}function BP(t,e){const n=Ns(e,this.size,4);t.uniform4fv(this.addr,n)}function VP(t,e){const n=Ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HP(t,e){const n=Ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GP(t,e){const n=Ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jP(t,e){t.uniform1iv(this.addr,e)}function WP(t,e){t.uniform2iv(this.addr,e)}function $P(t,e){t.uniform3iv(this.addr,e)}function XP(t,e){t.uniform4iv(this.addr,e)}function YP(t,e){t.uniform1uiv(this.addr,e)}function qP(t,e){t.uniform2uiv(this.addr,e)}function KP(t,e){t.uniform3uiv(this.addr,e)}function ZP(t,e){t.uniform4uiv(this.addr,e)}function QP(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||IS,o[s])}function JP(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||kS,o[s])}function e5(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||NS,o[s])}function t5(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Mt(i,o)||(t.uniform1iv(this.addr,o),Tt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||US,o[s])}function n5(t){switch(t){case 5126:return FP;case 35664:return OP;case 35665:return zP;case 35666:return BP;case 35674:return VP;case 35675:return HP;case 35676:return GP;case 5124:case 35670:return jP;case 35667:case 35671:return WP;case 35668:case 35672:return $P;case 35669:case 35673:return XP;case 5125:return YP;case 36294:return qP;case 36295:return KP;case 36296:return ZP;case 35678:case 36198:case 36298:case 36306:case 35682:return QP;case 35679:case 36299:case 36307:return JP;case 35680:case 36300:case 36308:case 36293:return e5;case 36289:case 36303:case 36311:case 36292:return t5}}class i5{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=NP(n.type)}}class r5{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=n5(n.type)}}class o5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const cf=/(\w+)(\])?(\[|\.)?/g;function Dx(t,e){t.seq.push(e),t.map[e.id]=e}function s5(t,e,n){const i=t.name,r=i.length;for(cf.lastIndex=0;;){const o=cf.exec(i),s=cf.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Dx(n,c===void 0?new i5(a,t,e):new r5(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new o5(a),Dx(n,d)),n=d}}}class Lc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);s5(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Ix(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let a5=0;function l5(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function c5(t){switch(t){case Mi:return["Linear","( value )"];case Le:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Ux(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+l5(t.getShaderSource(e),s)}else return r}function u5(t,e){const n=c5(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function d5(t,e){let n;switch(e){case wA:n="Linear";break;case bA:n="Reinhard";break;case EA:n="OptimizedCineon";break;case MA:n="ACESFilmic";break;case TA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function f5(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(aa).join(`
`)}function h5(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function p5(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function aa(t){return t!==""}function kx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(t){return t.replace(m5,g5)}function g5(t,e){const n=De[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Bh(n)}const x5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fx(t){return t.replace(x5,v5)}function v5(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ox(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y5(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===fS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===eA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function _5(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bs:case Es:e="ENVMAP_TYPE_CUBE";break;case Iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function S5(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function w5(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case mS:e="ENVMAP_BLENDING_MULTIPLY";break;case _A:e="ENVMAP_BLENDING_MIX";break;case SA:e="ENVMAP_BLENDING_ADD";break}return e}function b5(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function E5(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=y5(n),c=_5(n),u=S5(n),d=w5(n),h=b5(n),p=n.isWebGL2?"":f5(n),v=h5(o),x=r.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=[v].filter(aa).join(`
`),g.length>0&&(g+=`
`),f=[p,v].filter(aa).join(`
`),f.length>0&&(f+=`
`)):(g=[Ox(n),"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),f=[p,Ox(n),"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?De.tonemapping_pars_fragment:"",n.toneMapping!==Hi?d5("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,u5("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(aa).join(`
`)),s=Bh(s),s=kx(s,n),s=Nx(s,n),a=Bh(a),a=kx(a,n),a=Nx(a,n),s=Fx(s),a=Fx(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===ix?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ix?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=m+g+s,w=m+f+a,S=Ix(r,r.VERTEX_SHADER,y),E=Ix(r,r.FRAGMENT_SHADER,w);if(r.attachShader(x,S),r.attachShader(x,E),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const b=r.getProgramInfoLog(x).trim(),C=r.getShaderInfoLog(S).trim(),F=r.getShaderInfoLog(E).trim();let O=!0,I=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,S,E);else{const z=Ux(r,S,"vertex"),V=Ux(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+z+`
`+V)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(C===""||F==="")&&(I=!1);I&&(this.diagnostics={runnable:O,programLog:b,vertexShader:{log:C,prefix:g},fragmentShader:{log:F,prefix:f}})}r.deleteShader(S),r.deleteShader(E);let M;this.getUniforms=function(){return M===void 0&&(M=new Lc(r,x)),M};let P;return this.getAttributes=function(){return P===void 0&&(P=p5(r,x)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.name=n.shaderName,this.id=a5++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=E,this}let M5=0;class T5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new A5(e),n.set(e,i)),i}}class A5{constructor(e){this.id=M5++,this.code=e,this.usedTimes=0}}function C5(t,e,n,i,r,o,s){const a=new ES,l=new T5,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===1?"uv1":b===2?"uv2":b===3?"uv3":"uv"}function g(b,C,F,O,I){const z=O.fog,V=I.geometry,ee=b.isMeshStandardMaterial?O.environment:null,$=(b.isMeshStandardMaterial?n:e).get(b.envMap||ee),U=$&&$.mapping===Iu?$.image.height:null,j=v[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const G=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=G!==void 0?G.length:0;let te=0;V.morphAttributes.position!==void 0&&(te=1),V.morphAttributes.normal!==void 0&&(te=2),V.morphAttributes.color!==void 0&&(te=3);let X,J,le,ne;if(j){const Ke=fi[j];X=Ke.vertexShader,J=Ke.fragmentShader}else X=b.vertexShader,J=b.fragmentShader,l.update(b),le=l.getVertexShaderID(b),ne=l.getFragmentShaderID(b);const k=t.getRenderTarget(),Re=I.isInstancedMesh===!0,Ae=!!b.map,ue=!!b.matcap,Me=!!$,je=!!b.aoMap,ye=!!b.lightMap,Ne=!!b.bumpMap,At=!!b.normalMap,kt=!!b.displacementMap,Ct=!!b.emissiveMap,wt=!!b.metalnessMap,We=!!b.roughnessMap,ut=b.clearcoat>0,fn=b.iridescence>0,D=b.sheen>0,A=b.transmission>0,Y=ut&&!!b.clearcoatMap,se=ut&&!!b.clearcoatNormalMap,ae=ut&&!!b.clearcoatRoughnessMap,de=fn&&!!b.iridescenceMap,Te=fn&&!!b.iridescenceThicknessMap,me=D&&!!b.sheenColorMap,Z=D&&!!b.sheenRoughnessMap,xe=!!b.specularMap,_e=!!b.specularColorMap,we=!!b.specularIntensityMap,pe=A&&!!b.transmissionMap,ve=A&&!!b.thicknessMap,ze=!!b.gradientMap,Ye=!!b.alphaMap,pt=b.alphaTest>0,N=!!b.extensions,q=!!V.attributes.uv1,ie=!!V.attributes.uv2,fe=!!V.attributes.uv3;return{isWebGL2:u,shaderID:j,shaderName:b.type,vertexShader:X,fragmentShader:J,defines:b.defines,customVertexShaderID:le,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:Re,instancingColor:Re&&I.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:k===null?t.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Mi,map:Ae,matcap:ue,envMap:Me,envMapMode:Me&&$.mapping,envMapCubeUVHeight:U,aoMap:je,lightMap:ye,bumpMap:Ne,normalMap:At,displacementMap:h&&kt,emissiveMap:Ct,normalMapObjectSpace:At&&b.normalMapType===$A,normalMapTangentSpace:At&&b.normalMapType===WA,metalnessMap:wt,roughnessMap:We,clearcoat:ut,clearcoatMap:Y,clearcoatNormalMap:se,clearcoatRoughnessMap:ae,iridescence:fn,iridescenceMap:de,iridescenceThicknessMap:Te,sheen:D,sheenColorMap:me,sheenRoughnessMap:Z,specularMap:xe,specularColorMap:_e,specularIntensityMap:we,transmission:A,transmissionMap:pe,thicknessMap:ve,gradientMap:ze,opaque:b.transparent===!1&&b.blending===fs,alphaMap:Ye,alphaTest:pt,combine:b.combine,mapUv:Ae&&x(b.map.channel),aoMapUv:je&&x(b.aoMap.channel),lightMapUv:ye&&x(b.lightMap.channel),bumpMapUv:Ne&&x(b.bumpMap.channel),normalMapUv:At&&x(b.normalMap.channel),displacementMapUv:kt&&x(b.displacementMap.channel),emissiveMapUv:Ct&&x(b.emissiveMap.channel),metalnessMapUv:wt&&x(b.metalnessMap.channel),roughnessMapUv:We&&x(b.roughnessMap.channel),clearcoatMapUv:Y&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Z&&x(b.sheenRoughnessMap.channel),specularMapUv:xe&&x(b.specularMap.channel),specularColorMapUv:_e&&x(b.specularColorMap.channel),specularIntensityMapUv:we&&x(b.specularIntensityMap.channel),transmissionMapUv:pe&&x(b.transmissionMap.channel),thicknessMapUv:ve&&x(b.thicknessMap.channel),alphaMapUv:Ye&&x(b.alphaMap.channel),vertexTangents:At&&!!V.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:q,vertexUv2s:ie,vertexUv3s:fe,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(Ae||Ye),fog:!!z,useFog:b.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:te,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:b.toneMapped?t.toneMapping:Hi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fi,flipSided:b.side===_n,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:N&&b.extensions.derivatives===!0,extensionFragDepth:N&&b.extensions.fragDepth===!0,extensionDrawBuffers:N&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:N&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)C.push(F),C.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(m(C,b),y(C,b),C.push(t.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function m(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function y(b,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),b.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),b.push(a.mask)}function w(b){const C=v[b.type];let F;if(C){const O=fi[C];F=gC.clone(O.uniforms)}else F=b.uniforms;return F}function S(b,C){let F;for(let O=0,I=c.length;O<I;O++){const z=c[O];if(z.cacheKey===C){F=z,++F.usedTimes;break}}return F===void 0&&(F=new E5(t,C,b,o),c.push(F)),F}function E(b){if(--b.usedTimes===0){const C=c.indexOf(b);c[C]=c[c.length-1],c.pop(),b.destroy()}}function M(b){l.remove(b)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:w,acquireProgram:S,releaseProgram:E,releaseShaderCache:M,programs:c,dispose:P}}function R5(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function L5(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function zx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bx(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,p,v,x,g){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:g},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=x,f.group=g),e++,f}function a(d,h,p,v,x,g){const f=s(d,h,p,v,x,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,v,x,g){const f=s(d,h,p,v,x,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||L5),i.length>1&&i.sort(h||zx),r.length>1&&r.sort(h||zx)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function P5(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Bx,t.set(i,[s])):r>=o.length?(s=new Bx,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function D5(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new it};break;case"SpotLight":n={position:new W,direction:new W,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function I5(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let U5=0;function k5(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function N5(t,e){const n=new D5,i=I5(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new W);const o=new W,s=new Vt,a=new Vt;function l(u,d){let h=0,p=0,v=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let x=0,g=0,f=0,m=0,y=0,w=0,S=0,E=0,M=0,P=0;u.sort(k5);const b=d===!0?Math.PI:1;for(let F=0,O=u.length;F<O;F++){const I=u[F],z=I.color,V=I.intensity,ee=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=z.r*V*b,p+=z.g*V*b,v+=z.b*V*b;else if(I.isLightProbe)for(let U=0;U<9;U++)r.probe[U].addScaledVector(I.sh.coefficients[U],V);else if(I.isDirectionalLight){const U=n.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const j=I.shadow,G=i.get(I);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,r.directionalShadow[x]=G,r.directionalShadowMap[x]=$,r.directionalShadowMatrix[x]=I.shadow.matrix,w++}r.directional[x]=U,x++}else if(I.isSpotLight){const U=n.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(z).multiplyScalar(V*b),U.distance=ee,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,r.spot[f]=U;const j=I.shadow;if(I.map&&(r.spotLightMap[M]=I.map,M++,j.updateMatrices(I),I.castShadow&&P++),r.spotLightMatrix[f]=j.matrix,I.castShadow){const G=i.get(I);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,r.spotShadow[f]=G,r.spotShadowMap[f]=$,E++}f++}else if(I.isRectAreaLight){const U=n.get(I);U.color.copy(z).multiplyScalar(V),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),r.rectArea[m]=U,m++}else if(I.isPointLight){const U=n.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*b),U.distance=I.distance,U.decay=I.decay,I.castShadow){const j=I.shadow,G=i.get(I);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,r.pointShadow[g]=G,r.pointShadowMap[g]=$,r.pointShadowMatrix[g]=I.shadow.matrix,S++}r.point[g]=U,g++}else if(I.isHemisphereLight){const U=n.get(I);U.skyColor.copy(I.color).multiplyScalar(V*b),U.groundColor.copy(I.groundColor).multiplyScalar(V*b),r.hemi[y]=U,y++}}m>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const C=r.hash;(C.directionalLength!==x||C.pointLength!==g||C.spotLength!==f||C.rectAreaLength!==m||C.hemiLength!==y||C.numDirectionalShadows!==w||C.numPointShadows!==S||C.numSpotShadows!==E||C.numSpotMaps!==M)&&(r.directional.length=x,r.spot.length=f,r.rectArea.length=m,r.point.length=g,r.hemi.length=y,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=E+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,C.directionalLength=x,C.pointLength=g,C.spotLength=f,C.rectAreaLength=m,C.hemiLength=y,C.numDirectionalShadows=w,C.numPointShadows=S,C.numSpotShadows=E,C.numSpotMaps=M,r.version=U5++)}function c(u,d){let h=0,p=0,v=0,x=0,g=0;const f=d.matrixWorldInverse;for(let m=0,y=u.length;m<y;m++){const w=u[m];if(w.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(f),h++}else if(w.isSpotLight){const S=r.spot[v];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(o),S.direction.transformDirection(f),v++}else if(w.isRectAreaLight){const S=r.rectArea[x];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),a.identity(),s.copy(w.matrixWorld),s.premultiply(f),a.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(f),p++}else if(w.isHemisphereLight){const S=r.hemi[g];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(f),g++}}}return{setup:l,setupView:c,state:r}}function Vx(t,e){const n=new N5(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function F5(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new Vx(t,e),n.set(o,[l])):s>=a.length?(l=new Vx(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class O5 extends ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class z5 extends ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const B5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function H5(t,e,n){let i=new PS;const r=new tt,o=new tt,s=new zt,a=new O5({depthPacking:jA}),l=new z5,c={},u=n.maxTextureSize,d={[Ar]:_n,[_n]:Ar,[Fi]:Fi},h=new yo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:B5,fragmentShader:V5}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ur;v.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new sn(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fS;let f=this.type;this.render=function(S,E,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const P=t.getRenderTarget(),b=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Er),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=f!==Ui&&this.type===Ui,I=f===Ui&&this.type!==Ui;for(let z=0,V=S.length;z<V;z++){const ee=S[z],$=ee.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const U=$.getFrameExtents();if(r.multiply(U),o.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/U.x),r.x=o.x*U.x,$.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/U.y),r.y=o.y*U.y,$.mapSize.y=o.y)),$.map===null||O===!0||I===!0){const G=this.type!==Ui?{minFilter:on,magFilter:on}:{};$.map!==null&&$.map.dispose(),$.map=new vo(r.x,r.y,G),$.map.texture.name=ee.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const j=$.getViewportCount();for(let G=0;G<j;G++){const re=$.getViewport(G);s.set(o.x*re.x,o.y*re.y,o.x*re.z,o.y*re.w),F.viewport(s),$.updateMatrices(ee,G),i=$.getFrustum(),w(E,M,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===Ui&&m($,M),$.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(P,b,C)};function m(S,E){const M=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new vo(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(E,null,M,h,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(E,null,M,p,x,null)}function y(S,E,M,P){let b=null;const C=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)b=C;else if(b=M.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=b.uuid,O=E.uuid;let I=c[F];I===void 0&&(I={},c[F]=I);let z=I[O];z===void 0&&(z=b.clone(),I[O]=z),b=z}if(b.visible=E.visible,b.wireframe=E.wireframe,P===Ui?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:d[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,M.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=t.properties.get(b);F.light=M}return b}function w(S,E,M,P,b){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===Ui)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);const O=e.update(S),I=S.material;if(Array.isArray(I)){const z=O.groups;for(let V=0,ee=z.length;V<ee;V++){const $=z[V],U=I[$.materialIndex];if(U&&U.visible){const j=y(S,U,P,b);t.renderBufferDirect(M,null,O,j,S,$)}}}else if(I.visible){const z=y(S,I,P,b);t.renderBufferDirect(M,null,O,z,S,null)}}const F=S.children;for(let O=0,I=F.length;O<I;O++)w(F[O],E,M,P,b)}}function G5(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const q=new zt;let ie=null;const fe=new zt(0,0,0,0);return{setMask:function(ge){ie!==ge&&!N&&(t.colorMask(ge,ge,ge,ge),ie=ge)},setLocked:function(ge){N=ge},setClear:function(ge,Ke,Ze,Gt,ir){ir===!0&&(ge*=Gt,Ke*=Gt,Ze*=Gt),q.set(ge,Ke,Ze,Gt),fe.equals(q)===!1&&(t.clearColor(ge,Ke,Ze,Gt),fe.copy(q))},reset:function(){N=!1,ie=null,fe.set(-1,0,0,0)}}}function o(){let N=!1,q=null,ie=null,fe=null;return{setTest:function(ge){ge?k(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(ge){q!==ge&&!N&&(t.depthMask(ge),q=ge)},setFunc:function(ge){if(ie!==ge){switch(ge){case hA:t.depthFunc(t.NEVER);break;case pA:t.depthFunc(t.ALWAYS);break;case mA:t.depthFunc(t.LESS);break;case Ih:t.depthFunc(t.LEQUAL);break;case gA:t.depthFunc(t.EQUAL);break;case xA:t.depthFunc(t.GEQUAL);break;case vA:t.depthFunc(t.GREATER);break;case yA:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=ge}},setLocked:function(ge){N=ge},setClear:function(ge){fe!==ge&&(t.clearDepth(ge),fe=ge)},reset:function(){N=!1,q=null,ie=null,fe=null}}}function s(){let N=!1,q=null,ie=null,fe=null,ge=null,Ke=null,Ze=null,Gt=null,ir=null;return{setTest:function(mt){N||(mt?k(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(mt){q!==mt&&!N&&(t.stencilMask(mt),q=mt)},setFunc:function(mt,kn,li){(ie!==mt||fe!==kn||ge!==li)&&(t.stencilFunc(mt,kn,li),ie=mt,fe=kn,ge=li)},setOp:function(mt,kn,li){(Ke!==mt||Ze!==kn||Gt!==li)&&(t.stencilOp(mt,kn,li),Ke=mt,Ze=kn,Gt=li)},setLocked:function(mt){N=mt},setClear:function(mt){ir!==mt&&(t.clearStencil(mt),ir=mt)},reset:function(){N=!1,q=null,ie=null,fe=null,ge=null,Ke=null,Ze=null,Gt=null,ir=null}}}const a=new r,l=new o,c=new s,u=new WeakMap,d=new WeakMap;let h={},p={},v=new WeakMap,x=[],g=null,f=!1,m=null,y=null,w=null,S=null,E=null,M=null,P=null,b=!1,C=null,F=null,O=null,I=null,z=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,$=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(U)[1]),ee=$>=1):U.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),ee=$>=2);let j=null,G={};const re=t.getParameter(t.SCISSOR_BOX),te=t.getParameter(t.VIEWPORT),X=new zt().fromArray(re),J=new zt().fromArray(te);function le(N,q,ie,fe){const ge=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(N,Ke),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<ie;Ze++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(q,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(q+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return Ke}const ne={};ne[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ne[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),k(t.DEPTH_TEST),l.setFunc(Ih),kt(!1),Ct(T0),k(t.CULL_FACE),Ne(Er);function k(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function Re(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function Ae(N,q){return p[N]!==q?(t.bindFramebuffer(N,q),p[N]=q,i&&(N===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=q),N===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=q)),!0):!1}function ue(N,q){let ie=x,fe=!1;if(N)if(ie=v.get(q),ie===void 0&&(ie=[],v.set(q,ie)),N.isWebGLMultipleRenderTargets){const ge=N.texture;if(ie.length!==ge.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,Ze=ge.length;Ke<Ze;Ke++)ie[Ke]=t.COLOR_ATTACHMENT0+Ke;ie.length=ge.length,fe=!0}}else ie[0]!==t.COLOR_ATTACHMENT0&&(ie[0]=t.COLOR_ATTACHMENT0,fe=!0);else ie[0]!==t.BACK&&(ie[0]=t.BACK,fe=!0);fe&&(n.isWebGL2?t.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Me(N){return g!==N?(t.useProgram(N),g=N,!0):!1}const je={[Vo]:t.FUNC_ADD,[nA]:t.FUNC_SUBTRACT,[iA]:t.FUNC_REVERSE_SUBTRACT};if(i)je[L0]=t.MIN,je[P0]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(je[L0]=N.MIN_EXT,je[P0]=N.MAX_EXT)}const ye={[rA]:t.ZERO,[oA]:t.ONE,[sA]:t.SRC_COLOR,[hS]:t.SRC_ALPHA,[fA]:t.SRC_ALPHA_SATURATE,[uA]:t.DST_COLOR,[lA]:t.DST_ALPHA,[aA]:t.ONE_MINUS_SRC_COLOR,[pS]:t.ONE_MINUS_SRC_ALPHA,[dA]:t.ONE_MINUS_DST_COLOR,[cA]:t.ONE_MINUS_DST_ALPHA};function Ne(N,q,ie,fe,ge,Ke,Ze,Gt){if(N===Er){f===!0&&(Re(t.BLEND),f=!1);return}if(f===!1&&(k(t.BLEND),f=!0),N!==tA){if(N!==m||Gt!==b){if((y!==Vo||E!==Vo)&&(t.blendEquation(t.FUNC_ADD),y=Vo,E=Vo),Gt)switch(N){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case A0:t.blendFunc(t.ONE,t.ONE);break;case C0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case R0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case A0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case C0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case R0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,S=null,M=null,P=null,m=N,b=Gt}return}ge=ge||q,Ke=Ke||ie,Ze=Ze||fe,(q!==y||ge!==E)&&(t.blendEquationSeparate(je[q],je[ge]),y=q,E=ge),(ie!==w||fe!==S||Ke!==M||Ze!==P)&&(t.blendFuncSeparate(ye[ie],ye[fe],ye[Ke],ye[Ze]),w=ie,S=fe,M=Ke,P=Ze),m=N,b=!1}function At(N,q){N.side===Fi?Re(t.CULL_FACE):k(t.CULL_FACE);let ie=N.side===_n;q&&(ie=!ie),kt(ie),N.blending===fs&&N.transparent===!1?Ne(Er):Ne(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const fe=N.stencilWrite;c.setTest(fe),fe&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),We(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?k(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function kt(N){C!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),C=N)}function Ct(N){N!==Q2?(k(t.CULL_FACE),N!==F&&(N===T0?t.cullFace(t.BACK):N===J2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),F=N}function wt(N){N!==O&&(ee&&t.lineWidth(N),O=N)}function We(N,q,ie){N?(k(t.POLYGON_OFFSET_FILL),(I!==q||z!==ie)&&(t.polygonOffset(q,ie),I=q,z=ie)):Re(t.POLYGON_OFFSET_FILL)}function ut(N){N?k(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function fn(N){N===void 0&&(N=t.TEXTURE0+V-1),j!==N&&(t.activeTexture(N),j=N)}function D(N,q,ie){ie===void 0&&(j===null?ie=t.TEXTURE0+V-1:ie=j);let fe=G[ie];fe===void 0&&(fe={type:void 0,texture:void 0},G[ie]=fe),(fe.type!==N||fe.texture!==q)&&(j!==ie&&(t.activeTexture(ie),j=ie),t.bindTexture(N,q||ne[N]),fe.type=N,fe.texture=q)}function A(){const N=G[j];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(N){X.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),X.copy(N))}function ve(N){J.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function ze(N,q){let ie=d.get(q);ie===void 0&&(ie=new WeakMap,d.set(q,ie));let fe=ie.get(N);fe===void 0&&(fe=t.getUniformBlockIndex(q,N.name),ie.set(N,fe))}function Ye(N,q){const fe=d.get(q).get(N);u.get(q)!==fe&&(t.uniformBlockBinding(q,fe,N.__bindingPointIndex),u.set(q,fe))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},j=null,G={},p={},v=new WeakMap,x=[],g=null,f=!1,m=null,y=null,w=null,S=null,E=null,M=null,P=null,b=!1,C=null,F=null,O=null,I=null,z=null,X.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:k,disable:Re,bindFramebuffer:Ae,drawBuffers:ue,useProgram:Me,setBlending:Ne,setMaterial:At,setFlipSided:kt,setCullFace:Ct,setLineWidth:wt,setPolygonOffset:We,setScissorTest:ut,activeTexture:fn,bindTexture:D,unbindTexture:A,compressedTexImage2D:Y,compressedTexImage3D:se,texImage2D:_e,texImage3D:we,updateUBOMapping:ze,uniformBlockBinding:Ye,texStorage2D:Z,texStorage3D:xe,texSubImage2D:ae,texSubImage3D:de,compressedTexSubImage2D:Te,compressedTexSubImage3D:me,scissor:pe,viewport:ve,reset:pt}}function j5(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const g=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,A){return f?new OffscreenCanvas(D,A):ja("canvas")}function y(D,A,Y,se){let ae=1;if((D.width>se||D.height>se)&&(ae=se/Math.max(D.width,D.height)),ae<1||A===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const de=A?qA:Math.floor,Te=de(ae*D.width),me=de(ae*D.height);x===void 0&&(x=m(Te,me));const Z=Y?m(Te,me):x;return Z.width=Te,Z.height=me,Z.getContext("2d").drawImage(D,0,0,Te,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Te+"x"+me+")."),Z}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function w(D){return rx(D.width)&&rx(D.height)}function S(D){return a?!1:D.wrapS!==ri||D.wrapT!==ri||D.minFilter!==on&&D.minFilter!==Zt}function E(D,A){return D.generateMipmaps&&A&&D.minFilter!==on&&D.minFilter!==Zt}function M(D){t.generateMipmap(D)}function P(D,A,Y,se,ae=!1){if(a===!1)return A;if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=A;return A===t.RED&&(Y===t.FLOAT&&(de=t.R32F),Y===t.HALF_FLOAT&&(de=t.R16F),Y===t.UNSIGNED_BYTE&&(de=t.R8)),A===t.RG&&(Y===t.FLOAT&&(de=t.RG32F),Y===t.HALF_FLOAT&&(de=t.RG16F),Y===t.UNSIGNED_BYTE&&(de=t.RG8)),A===t.RGBA&&(Y===t.FLOAT&&(de=t.RGBA32F),Y===t.HALF_FLOAT&&(de=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(de=se===Le&&ae===!1?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)),(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function b(D,A,Y){return E(D,Y)===!0||D.isFramebufferTexture&&D.minFilter!==on&&D.minFilter!==Zt?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function C(D){return D===on||D===D0||D===Ud?t.NEAREST:t.LINEAR}function F(D){const A=D.target;A.removeEventListener("dispose",F),I(A),A.isVideoTexture&&v.delete(A)}function O(D){const A=D.target;A.removeEventListener("dispose",O),V(A)}function I(D){const A=i.get(D);if(A.__webglInit===void 0)return;const Y=D.source,se=g.get(Y);if(se){const ae=se[A.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&z(D),Object.keys(se).length===0&&g.delete(Y)}i.remove(D)}function z(D){const A=i.get(D);t.deleteTexture(A.__webglTexture);const Y=D.source,se=g.get(Y);delete se[A.__cacheKey],s.memory.textures--}function V(D){const A=D.texture,Y=i.get(D),se=i.get(A);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),s.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)t.deleteFramebuffer(Y.__webglFramebuffer[ae]),Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer[ae]);else{if(t.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ae=0;ae<Y.__webglColorRenderbuffer.length;ae++)Y.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(Y.__webglColorRenderbuffer[ae]);Y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let ae=0,de=A.length;ae<de;ae++){const Te=i.get(A[ae]);Te.__webglTexture&&(t.deleteTexture(Te.__webglTexture),s.memory.textures--),i.remove(A[ae])}i.remove(A),i.remove(D)}let ee=0;function $(){ee=0}function U(){const D=ee;return D>=l&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l),ee+=1,D}function j(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function G(D,A){const Y=i.get(D);if(D.isVideoTexture&&ut(D),D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){const se=D.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Y,D,A);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+A)}function re(D,A){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){Re(Y,D,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+A)}function te(D,A){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){Re(Y,D,A);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+A)}function X(D,A){const Y=i.get(D);if(D.version>0&&Y.__version!==D.version){Ae(Y,D,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+A)}const J={[Nh]:t.REPEAT,[ri]:t.CLAMP_TO_EDGE,[Fh]:t.MIRRORED_REPEAT},le={[on]:t.NEAREST,[D0]:t.NEAREST_MIPMAP_NEAREST,[Ud]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[AA]:t.LINEAR_MIPMAP_NEAREST,[Ha]:t.LINEAR_MIPMAP_LINEAR};function ne(D,A,Y){if(Y?(t.texParameteri(D,t.TEXTURE_WRAP_S,J[A.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,J[A.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,J[A.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,le[A.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,le[A.minFilter])):(t.texParameteri(D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(A.wrapS!==ri||A.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(D,t.TEXTURE_MAG_FILTER,C(A.magFilter)),t.texParameteri(D,t.TEXTURE_MIN_FILTER,C(A.minFilter)),A.minFilter!==on&&A.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===on||A.minFilter!==Ud&&A.minFilter!==Ha||A.type===to&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ga&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(t.texParameterf(D,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function k(D,A){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",F));const se=A.source;let ae=g.get(se);ae===void 0&&(ae={},g.set(se,ae));const de=j(A);if(de!==D.__cacheKey){ae[de]===void 0&&(ae[de]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),ae[de].usedTimes++;const Te=ae[D.__cacheKey];Te!==void 0&&(ae[D.__cacheKey].usedTimes--,Te.usedTimes===0&&z(A)),D.__cacheKey=de,D.__webglTexture=ae[de].texture}return Y}function Re(D,A,Y){let se=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(se=t.TEXTURE_3D);const ae=k(D,A),de=A.source;n.bindTexture(se,D.__webglTexture,t.TEXTURE0+Y);const Te=i.get(de);if(de.version!==Te.__version||ae===!0){n.activeTexture(t.TEXTURE0+Y),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const me=S(A)&&w(A.image)===!1;let Z=y(A.image,me,!1,u);Z=fn(A,Z);const xe=w(Z)||a,_e=o.convert(A.format,A.colorSpace);let we=o.convert(A.type),pe=P(A.internalFormat,_e,we,A.colorSpace);ne(se,A,xe);let ve;const ze=A.mipmaps,Ye=a&&A.isVideoTexture!==!0,pt=Te.__version===void 0||ae===!0,N=b(A,Z,xe);if(A.isDepthTexture)pe=t.DEPTH_COMPONENT,a?A.type===to?pe=t.DEPTH_COMPONENT32F:A.type===eo?pe=t.DEPTH_COMPONENT24:A.type===hs?pe=t.DEPTH24_STENCIL8:pe=t.DEPTH_COMPONENT16:A.type===to&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===so&&pe===t.DEPTH_COMPONENT&&A.type!==xS&&A.type!==eo&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=eo,we=o.convert(A.type)),A.format===Ms&&pe===t.DEPTH_COMPONENT&&(pe=t.DEPTH_STENCIL,A.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=hs,we=o.convert(A.type))),pt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,pe,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,pe,Z.width,Z.height,0,_e,we,null));else if(A.isDataTexture)if(ze.length>0&&xe){Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,N,pe,ze[0].width,ze[0].height);for(let q=0,ie=ze.length;q<ie;q++)ve=ze[q],Ye?n.texSubImage2D(t.TEXTURE_2D,q,0,0,ve.width,ve.height,_e,we,ve.data):n.texImage2D(t.TEXTURE_2D,q,pe,ve.width,ve.height,0,_e,we,ve.data);A.generateMipmaps=!1}else Ye?(pt&&n.texStorage2D(t.TEXTURE_2D,N,pe,Z.width,Z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Z.width,Z.height,_e,we,Z.data)):n.texImage2D(t.TEXTURE_2D,0,pe,Z.width,Z.height,0,_e,we,Z.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ye&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,N,pe,ze[0].width,ze[0].height,Z.depth);for(let q=0,ie=ze.length;q<ie;q++)ve=ze[q],A.format!==Vn?_e!==null?Ye?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,Z.depth,_e,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,pe,ve.width,ve.height,Z.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,ve.width,ve.height,Z.depth,_e,we,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,pe,ve.width,ve.height,Z.depth,0,_e,we,ve.data)}else{Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,N,pe,ze[0].width,ze[0].height);for(let q=0,ie=ze.length;q<ie;q++)ve=ze[q],A.format!==Vn?_e!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,ve.width,ve.height,_e,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,q,pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage2D(t.TEXTURE_2D,q,0,0,ve.width,ve.height,_e,we,ve.data):n.texImage2D(t.TEXTURE_2D,q,pe,ve.width,ve.height,0,_e,we,ve.data)}else if(A.isDataArrayTexture)Ye?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,N,pe,Z.width,Z.height,Z.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,_e,we,Z.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,Z.width,Z.height,Z.depth,0,_e,we,Z.data);else if(A.isData3DTexture)Ye?(pt&&n.texStorage3D(t.TEXTURE_3D,N,pe,Z.width,Z.height,Z.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,_e,we,Z.data)):n.texImage3D(t.TEXTURE_3D,0,pe,Z.width,Z.height,Z.depth,0,_e,we,Z.data);else if(A.isFramebufferTexture){if(pt)if(Ye)n.texStorage2D(t.TEXTURE_2D,N,pe,Z.width,Z.height);else{let q=Z.width,ie=Z.height;for(let fe=0;fe<N;fe++)n.texImage2D(t.TEXTURE_2D,fe,pe,q,ie,0,_e,we,null),q>>=1,ie>>=1}}else if(ze.length>0&&xe){Ye&&pt&&n.texStorage2D(t.TEXTURE_2D,N,pe,ze[0].width,ze[0].height);for(let q=0,ie=ze.length;q<ie;q++)ve=ze[q],Ye?n.texSubImage2D(t.TEXTURE_2D,q,0,0,_e,we,ve):n.texImage2D(t.TEXTURE_2D,q,pe,_e,we,ve);A.generateMipmaps=!1}else Ye?(pt&&n.texStorage2D(t.TEXTURE_2D,N,pe,Z.width,Z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,we,Z)):n.texImage2D(t.TEXTURE_2D,0,pe,_e,we,Z);E(A,xe)&&M(se),Te.__version=de.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Ae(D,A,Y){if(A.image.length!==6)return;const se=k(D,A),ae=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+Y);const de=i.get(ae);if(ae.version!==de.__version||se===!0){n.activeTexture(t.TEXTURE0+Y),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Te=A.isCompressedTexture||A.image[0].isCompressedTexture,me=A.image[0]&&A.image[0].isDataTexture,Z=[];for(let q=0;q<6;q++)!Te&&!me?Z[q]=y(A.image[q],!1,!0,c):Z[q]=me?A.image[q].image:A.image[q],Z[q]=fn(A,Z[q]);const xe=Z[0],_e=w(xe)||a,we=o.convert(A.format,A.colorSpace),pe=o.convert(A.type),ve=P(A.internalFormat,we,pe,A.colorSpace),ze=a&&A.isVideoTexture!==!0,Ye=de.__version===void 0||se===!0;let pt=b(A,xe,_e);ne(t.TEXTURE_CUBE_MAP,A,_e);let N;if(Te){ze&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,ve,xe.width,xe.height);for(let q=0;q<6;q++){N=Z[q].mipmaps;for(let ie=0;ie<N.length;ie++){const fe=N[ie];A.format!==Vn?we!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,fe.width,fe.height,we,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,fe.width,fe.height,we,pe,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,ve,fe.width,fe.height,0,we,pe,fe.data)}}}else{N=A.mipmaps,ze&&Ye&&(N.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,ve,Z[0].width,Z[0].height));for(let q=0;q<6;q++)if(me){ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Z[q].width,Z[q].height,we,pe,Z[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ve,Z[q].width,Z[q].height,0,we,pe,Z[q].data);for(let ie=0;ie<N.length;ie++){const ge=N[ie].image[q].image;ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,ge.width,ge.height,we,pe,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,ve,ge.width,ge.height,0,we,pe,ge.data)}}else{ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,we,pe,Z[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ve,we,pe,Z[q]);for(let ie=0;ie<N.length;ie++){const fe=N[ie];ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,we,pe,fe.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,ve,we,pe,fe.image[q])}}}E(A,_e)&&M(t.TEXTURE_CUBE_MAP),de.__version=ae.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ue(D,A,Y,se,ae){const de=o.convert(Y.format,Y.colorSpace),Te=o.convert(Y.type),me=P(Y.internalFormat,de,Te,Y.colorSpace);i.get(A).__hasExternalTextures||(ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,me,A.width,A.height,A.depth,0,de,Te,null):n.texImage2D(ae,0,me,A.width,A.height,0,de,Te,null)),n.bindFramebuffer(t.FRAMEBUFFER,D),We(A)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ae,i.get(Y).__webglTexture,0,wt(A)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ae,i.get(Y).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(D,A,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let se=t.DEPTH_COMPONENT16;if(Y||We(A)){const ae=A.depthTexture;ae&&ae.isDepthTexture&&(ae.type===to?se=t.DEPTH_COMPONENT32F:ae.type===eo&&(se=t.DEPTH_COMPONENT24));const de=wt(A);We(A)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,se,A.width,A.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,de,se,A.width,A.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,A.width,A.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){const se=wt(A);Y&&We(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,A.width,A.height):We(A)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,D)}else{const se=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ae=0;ae<se.length;ae++){const de=se[ae],Te=o.convert(de.format,de.colorSpace),me=o.convert(de.type),Z=P(de.internalFormat,Te,me,de.colorSpace),xe=wt(A);Y&&We(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,Z,A.width,A.height):We(A)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,Z,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Z,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function je(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const se=i.get(A.depthTexture).__webglTexture,ae=wt(A);if(A.depthTexture.format===so)We(A)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(A.depthTexture.format===Ms)We(A)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ye(D){const A=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");je(A.__webglFramebuffer,D)}else if(Y){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]=t.createRenderbuffer(),Me(A.__webglDepthbuffer[se],D,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),Me(A.__webglDepthbuffer,D,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(D,A,Y){const se=i.get(D);A!==void 0&&ue(se.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),Y!==void 0&&ye(D)}function At(D){const A=D.texture,Y=i.get(D),se=i.get(A);D.addEventListener("dispose",O),D.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=A.version,s.memory.textures++);const ae=D.isWebGLCubeRenderTarget===!0,de=D.isWebGLMultipleRenderTargets===!0,Te=w(D)||a;if(ae){Y.__webglFramebuffer=[];for(let me=0;me<6;me++)Y.__webglFramebuffer[me]=t.createFramebuffer()}else{if(Y.__webglFramebuffer=t.createFramebuffer(),de)if(r.drawBuffers){const me=D.texture;for(let Z=0,xe=me.length;Z<xe;Z++){const _e=i.get(me[Z]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&We(D)===!1){const me=de?A:[A];Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Z=0;Z<me.length;Z++){const xe=me[Z];Y.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[Z]);const _e=o.convert(xe.format,xe.colorSpace),we=o.convert(xe.type),pe=P(xe.internalFormat,_e,we,xe.colorSpace,D.isXRRenderTarget===!0),ve=wt(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,pe,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,Y.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),Me(Y.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),ne(t.TEXTURE_CUBE_MAP,A,Te);for(let me=0;me<6;me++)ue(Y.__webglFramebuffer[me],D,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me);E(A,Te)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){const me=D.texture;for(let Z=0,xe=me.length;Z<xe;Z++){const _e=me[Z],we=i.get(_e);n.bindTexture(t.TEXTURE_2D,we.__webglTexture),ne(t.TEXTURE_2D,_e,Te),ue(Y.__webglFramebuffer,D,_e,t.COLOR_ATTACHMENT0+Z,t.TEXTURE_2D),E(_e,Te)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?me=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(me,se.__webglTexture),ne(me,A,Te),ue(Y.__webglFramebuffer,D,A,t.COLOR_ATTACHMENT0,me),E(A,Te)&&M(me),n.unbindTexture()}D.depthBuffer&&ye(D)}function kt(D){const A=w(D)||a,Y=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let se=0,ae=Y.length;se<ae;se++){const de=Y[se];if(E(de,A)){const Te=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,me=i.get(de).__webglTexture;n.bindTexture(Te,me),M(Te),n.unbindTexture()}}}function Ct(D){if(a&&D.samples>0&&We(D)===!1){const A=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],Y=D.width,se=D.height;let ae=t.COLOR_BUFFER_BIT;const de=[],Te=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(D),Z=D.isWebGLMultipleRenderTargets===!0;if(Z)for(let xe=0;xe<A.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<A.length;xe++){de.push(t.COLOR_ATTACHMENT0+xe),D.depthBuffer&&de.push(Te);const _e=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(_e===!1&&(D.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),Z&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[xe]),_e===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Te]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Te])),Z){const we=i.get(A[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,Y,se,0,0,Y,se,ae,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,de)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let xe=0;xe<A.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);const _e=i.get(A[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function wt(D){return Math.min(d,D.samples)}function We(D){const A=i.get(D);return a&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ut(D){const A=s.render.frame;v.get(D)!==A&&(v.set(D,A),D.update())}function fn(D,A){const Y=D.colorSpace,se=D.format,ae=D.type;return D.isCompressedTexture===!0||D.format===Oh||Y!==Mi&&Y!==lo&&(Y===Le?a===!1?e.has("EXT_sRGB")===!0&&se===Vn?(D.format=Oh,D.minFilter=Zt,D.generateMipmaps=!1):A=SS.sRGBToLinear(A):(se!==Vn||ae!==xo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),A}this.allocateTextureUnit=U,this.resetTextureUnits=$,this.setTexture2D=G,this.setTexture2DArray=re,this.setTexture3D=te,this.setTextureCube=X,this.rebindTextures=Ne,this.setupRenderTarget=At,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=We}function W5(t,e,n){const i=n.isWebGL2;function r(o,s=lo){let a;if(o===xo)return t.UNSIGNED_BYTE;if(o===PA)return t.UNSIGNED_SHORT_4_4_4_4;if(o===DA)return t.UNSIGNED_SHORT_5_5_5_1;if(o===CA)return t.BYTE;if(o===RA)return t.SHORT;if(o===xS)return t.UNSIGNED_SHORT;if(o===LA)return t.INT;if(o===eo)return t.UNSIGNED_INT;if(o===to)return t.FLOAT;if(o===Ga)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===IA)return t.ALPHA;if(o===Vn)return t.RGBA;if(o===UA)return t.LUMINANCE;if(o===kA)return t.LUMINANCE_ALPHA;if(o===so)return t.DEPTH_COMPONENT;if(o===Ms)return t.DEPTH_STENCIL;if(o===Oh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===NA)return t.RED;if(o===FA)return t.RED_INTEGER;if(o===OA)return t.RG;if(o===zA)return t.RG_INTEGER;if(o===BA)return t.RGBA_INTEGER;if(o===kd||o===Nd||o===Fd||o===Od)if(s===Le)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===kd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Fd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Od)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===kd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Nd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Fd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Od)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===I0||o===U0||o===k0||o===N0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===I0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===U0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===k0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===N0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===VA)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===F0||o===O0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===F0)return s===Le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===O0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===z0||o===B0||o===V0||o===H0||o===G0||o===j0||o===W0||o===$0||o===X0||o===Y0||o===q0||o===K0||o===Z0||o===Q0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===z0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===B0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===V0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===H0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===G0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===j0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===W0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===$0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===X0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Y0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===q0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===K0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Z0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Q0)return s===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===zd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===zd)return s===Le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===HA||o===J0||o===ex||o===tx)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===zd)return a.COMPRESSED_RED_RGTC1_EXT;if(o===J0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===ex)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===tx)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===hs?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class $5 extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oc extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X5={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),f=this._getHandJoint(c,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(X5)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Y5 extends cn{constructor(e,n,i,r,o,s,a,l,c,u){if(u=u!==void 0?u:so,u!==so&&u!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===so&&(i=eo),i===void 0&&u===Ms&&(i=hs),super(null,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1}}class q5 extends ks{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,v=null;const x=n.getContextAttributes();let g=null,f=null;const m=[],y=[],w=new Set,S=new Map,E=new Dt;E.layers.enable(1),E.viewport=new zt;const M=new Dt;M.layers.enable(2),M.viewport=new zt;const P=[E,M],b=new $5;b.layers.enable(1),b.layers.enable(2);let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=m[X];return J===void 0&&(J=new uf,m[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=m[X];return J===void 0&&(J=new uf,m[X]=J),J.getGripSpace()},this.getHand=function(X){let J=m[X];return J===void 0&&(J=new uf,m[X]=J),J.getHandSpace()};function O(X){const J=y.indexOf(X.inputSource);if(J===-1)return;const le=m[J];le!==void 0&&(le.update(X.inputSource,X.frame,c||s),le.dispatchEvent({type:X.type,data:X.inputSource}))}function I(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",z);for(let X=0;X<m.length;X++){const J=y[X];J!==null&&(y[X]=null,m[X].disconnect(J))}C=null,F=null,e.setRenderTarget(g),p=null,h=null,d=null,r=null,f=null,te.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",I),r.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),f=new vo(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:xo,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,le=null,ne=null;x.depth&&(ne=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=x.stencil?Ms:so,le=x.stencil?hs:eo);const k={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(k),r.updateRenderState({layers:[h]}),f=new vo(h.textureWidth,h.textureHeight,{format:Vn,type:xo,depthTexture:new Y5(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Re=e.properties.get(f);Re.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(X){for(let J=0;J<X.removed.length;J++){const le=X.removed[J],ne=y.indexOf(le);ne>=0&&(y[ne]=null,m[ne].disconnect(le))}for(let J=0;J<X.added.length;J++){const le=X.added[J];let ne=y.indexOf(le);if(ne===-1){for(let Re=0;Re<m.length;Re++)if(Re>=y.length){y.push(le),ne=Re;break}else if(y[Re]===null){y[Re]=le,ne=Re;break}if(ne===-1)break}const k=m[ne];k&&k.connect(le)}}const V=new W,ee=new W;function $(X,J,le){V.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(le.matrixWorld);const ne=V.distanceTo(ee),k=J.projectionMatrix.elements,Re=le.projectionMatrix.elements,Ae=k[14]/(k[10]-1),ue=k[14]/(k[10]+1),Me=(k[9]+1)/k[5],je=(k[9]-1)/k[5],ye=(k[8]-1)/k[0],Ne=(Re[8]+1)/Re[0],At=Ae*ye,kt=Ae*Ne,Ct=ne/(-ye+Ne),wt=Ct*-ye;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(wt),X.translateZ(Ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const We=Ae+Ct,ut=ue+Ct,fn=At-wt,D=kt+(ne-wt),A=Me*ue/ut*We,Y=je*ue/ut*We;X.projectionMatrix.makePerspective(fn,D,A,Y,We,ut),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function U(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;b.near=M.near=E.near=X.near,b.far=M.far=E.far=X.far,(C!==b.near||F!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,F=b.far);const J=X.parent,le=b.cameras;U(b,J);for(let ne=0;ne<le.length;ne++)U(le[ne],J);le.length===2?$(b,E,M):b.projectionMatrix.copy(E.projectionMatrix),j(X,b,J)};function j(X,J,le){le===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0);const ne=X.children;for(let k=0,Re=ne.length;k<Re;k++)ne[k].updateMatrixWorld(!0);X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=zh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.getPlanes=function(){return w};let G=null;function re(X,J){if(u=J.getViewerPose(c||s),v=J,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ne=!1;le.length!==b.cameras.length&&(b.cameras.length=0,ne=!0);for(let k=0;k<le.length;k++){const Re=le[k];let Ae=null;if(p!==null)Ae=p.getViewport(Re);else{const Me=d.getViewSubImage(h,Re);Ae=Me.viewport,k===0&&(e.setRenderTargetTextures(f,Me.colorTexture,h.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(f))}let ue=P[k];ue===void 0&&(ue=new Dt,ue.layers.enable(k),ue.viewport=new zt,P[k]=ue),ue.matrix.fromArray(Re.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Re.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),k===0&&(b.matrix.copy(ue.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ne===!0&&b.cameras.push(ue)}}for(let le=0;le<m.length;le++){const ne=y[le],k=m[le];ne!==null&&k!==void 0&&k.update(ne,J,c||s)}if(G&&G(X,J),J.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let le=null;for(const ne of w)J.detectedPlanes.has(ne)||(le===null&&(le=[]),le.push(ne));if(le!==null)for(const ne of le)w.delete(ne),S.delete(ne),i.dispatchEvent({type:"planeremoved",data:ne});for(const ne of J.detectedPlanes)if(!w.has(ne))w.add(ne),S.set(ne,J.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ne});else{const k=S.get(ne);ne.lastChangedTime>k&&(S.set(ne,ne.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ne}))}}v=null}const te=new DS;te.setAnimationLoop(re),this.setAnimationLoop=function(X){G=X},this.dispose=function(){}}}function K5(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,CS(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,m,y,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(g,f):f.isMeshToonMaterial?(o(g,f),d(g,f)):f.isMeshPhongMaterial?(o(g,f),u(g,f)):f.isMeshStandardMaterial?(o(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,w)):f.isMeshMatcapMaterial?(o(g,f),v(g,f)):f.isMeshDepthMaterial?o(g,f):f.isMeshDistanceMaterial?(o(g,f),x(g,f)):f.isMeshNormalMaterial?o(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,m,y):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===_n&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===_n&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=e.get(f).envMap;if(m&&(g.envMap.value=m,g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;const y=t.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*y,n(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=y*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),e.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&g.clearcoatNormalScale.value.negate())),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){const m=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Z5(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,y){const w=y.program;i.uniformBlockBinding(m,w)}function c(m,y){let w=r[m.id];w===void 0&&(v(m),w=u(m),r[m.id]=w,m.addEventListener("dispose",g));const S=y.program;i.updateUBOMapping(m,S);const E=e.render.frame;o[m.id]!==E&&(h(m),o[m.id]=E)}function u(m){const y=d();m.__bindingPointIndex=y;const w=t.createBuffer(),S=m.__size,E=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,S,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,w),w}function d(){for(let m=0;m<a;m++)if(s.indexOf(m)===-1)return s.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const y=r[m.id],w=m.uniforms,S=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let E=0,M=w.length;E<M;E++){const P=w[E];if(p(P,E,S)===!0){const b=P.__offset,C=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let O=0;O<C.length;O++){const I=C[O],z=x(I);typeof I=="number"?(P.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,b+F,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=I.elements[0],P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=I.elements[0],P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=I.elements[0]):(I.toArray(P.__data,F),F+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,b,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,y,w){const S=m.value;if(w[y]===void 0){if(typeof S=="number")w[y]=S;else{const E=Array.isArray(S)?S:[S],M=[];for(let P=0;P<E.length;P++)M.push(E[P].clone());w[y]=M}return!0}else if(typeof S=="number"){if(w[y]!==S)return w[y]=S,!0}else{const E=Array.isArray(w[y])?w[y]:[w[y]],M=Array.isArray(S)?S:[S];for(let P=0;P<E.length;P++){const b=E[P];if(b.equals(M[P])===!1)return b.copy(M[P]),!0}}return!1}function v(m){const y=m.uniforms;let w=0;const S=16;let E=0;for(let M=0,P=y.length;M<P;M++){const b=y[M],C={boundary:0,storage:0},F=Array.isArray(b.value)?b.value:[b.value];for(let O=0,I=F.length;O<I;O++){const z=F[O],V=x(z);C.boundary+=V.boundary,C.storage+=V.storage}if(b.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=w,M>0){E=w%S;const O=S-E;E!==0&&O-C.boundary<0&&(w+=S-E,b.__offset=w)}w+=C.storage}return E=w%S,E>0&&(w+=S-E),m.__size=w,m.__cache={},this}function x(m){const y={boundary:0,storage:0};return typeof m=="number"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=48,y.storage=48):m.isMatrix4?(y.boundary=64,y.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),y}function g(m){const y=m.target;y.removeEventListener("dispose",g);const w=s.indexOf(y.__bindingPointIndex);s.splice(w,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function f(){for(const m in r)t.deleteBuffer(r[m]);s=[],r={},o={}}return{bind:l,update:c,dispose:f}}function Q5(){const t=ja("canvas");return t.style.display="block",t}class kr{constructor(e={}){const{canvas:n=Q5(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;let p=null,v=null;const x=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Le,this.useLegacyLights=!0,this.toneMapping=Hi,this.toneMappingExposure=1;const f=this;let m=!1,y=0,w=0,S=null,E=-1,M=null;const P=new zt,b=new zt;let C=null,F=n.width,O=n.height,I=1,z=null,V=null;const ee=new zt(0,0,F,O),$=new zt(0,0,F,O);let U=!1;const j=new PS;let G=!1,re=!1,te=null;const X=new Vt,J=new W,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return S===null?I:1}let k=i;function Re(L,H){for(let K=0;K<L.length;K++){const B=L[K],Q=n.getContext(B,H);if(Q!==null)return Q}return null}try{const L={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dm}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",Ye,!1),k===null){const H=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&H.shift(),k=Re(H,L),k===null)throw Re(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Ae,ue,Me,je,ye,Ne,At,kt,Ct,wt,We,ut,fn,D,A,Y,se,ae,de,Te,me,Z,xe,_e;function we(){Ae=new cP(k),ue=new nP(k,Ae,e),Ae.init(ue),Z=new W5(k,Ae,ue),Me=new G5(k,Ae,ue),je=new fP(k),ye=new R5,Ne=new j5(k,Ae,Me,ye,ue,Z,je),At=new rP(f),kt=new lP(f),Ct=new bC(k,ue),xe=new eP(k,Ae,Ct,ue),wt=new uP(k,Ct,je,xe),We=new gP(k,wt,Ct,je),de=new mP(k,ue,Ne),Y=new iP(ye),ut=new C5(f,At,kt,Ae,ue,xe,Y),fn=new K5(f,ye),D=new P5,A=new F5(Ae,ue),ae=new JL(f,At,kt,Me,We,h,l),se=new H5(f,We,ue),_e=new Z5(k,je,ue,Me),Te=new tP(k,Ae,je,ue),me=new dP(k,Ae,je,ue),je.programs=ut.programs,f.capabilities=ue,f.extensions=Ae,f.properties=ye,f.renderLists=D,f.shadowMap=se,f.state=Me,f.info=je}we();const pe=new q5(f,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const L=Ae.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Ae.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(L){L!==void 0&&(I=L,this.setSize(F,O,!1))},this.getSize=function(L){return L.set(F,O)},this.setSize=function(L,H,K=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=L,O=H,n.width=Math.floor(L*I),n.height=Math.floor(H*I),K===!0&&(n.style.width=L+"px",n.style.height=H+"px"),this.setViewport(0,0,L,H)},this.getDrawingBufferSize=function(L){return L.set(F*I,O*I).floor()},this.setDrawingBufferSize=function(L,H,K){F=L,O=H,I=K,n.width=Math.floor(L*K),n.height=Math.floor(H*K),this.setViewport(0,0,L,H)},this.getCurrentViewport=function(L){return L.copy(P)},this.getViewport=function(L){return L.copy(ee)},this.setViewport=function(L,H,K,B){L.isVector4?ee.set(L.x,L.y,L.z,L.w):ee.set(L,H,K,B),Me.viewport(P.copy(ee).multiplyScalar(I).floor())},this.getScissor=function(L){return L.copy($)},this.setScissor=function(L,H,K,B){L.isVector4?$.set(L.x,L.y,L.z,L.w):$.set(L,H,K,B),Me.scissor(b.copy($).multiplyScalar(I).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(L){Me.setScissorTest(U=L)},this.setOpaqueSort=function(L){z=L},this.setTransparentSort=function(L){V=L},this.getClearColor=function(L){return L.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(L=!0,H=!0,K=!0){let B=0;L&&(B|=k.COLOR_BUFFER_BIT),H&&(B|=k.DEPTH_BUFFER_BIT),K&&(B|=k.STENCIL_BUFFER_BIT),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Ye,!1),D.dispose(),A.dispose(),ye.dispose(),At.dispose(),kt.dispose(),We.dispose(),xe.dispose(),_e.dispose(),ut.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ge),pe.removeEventListener("sessionend",Ke),te&&(te.dispose(),te=null),Ze.stop()};function ve(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const L=je.autoReset,H=se.enabled,K=se.autoUpdate,B=se.needsUpdate,Q=se.type;we(),je.autoReset=L,se.enabled=H,se.autoUpdate=K,se.needsUpdate=B,se.type=Q}function Ye(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function pt(L){const H=L.target;H.removeEventListener("dispose",pt),N(H)}function N(L){q(L),ye.remove(L)}function q(L){const H=ye.get(L).programs;H!==void 0&&(H.forEach(function(K){ut.releaseProgram(K)}),L.isShaderMaterial&&ut.releaseShaderCache(L))}this.renderBufferDirect=function(L,H,K,B,Q,Se){H===null&&(H=le);const be=Q.isMesh&&Q.matrixWorld.determinant()<0,Ce=Fb(L,H,K,B,Q);Me.setMaterial(B,be);let Pe=K.index,Ie=1;B.wireframe===!0&&(Pe=wt.getWireframeAttribute(K),Ie=2);const Ue=K.drawRange,Fe=K.attributes.position;let qe=Ue.start*Ie,en=(Ue.start+Ue.count)*Ie;Se!==null&&(qe=Math.max(qe,Se.start*Ie),en=Math.min(en,(Se.start+Se.count)*Ie)),Pe!==null?(qe=Math.max(qe,0),en=Math.min(en,Pe.count)):Fe!=null&&(qe=Math.max(qe,0),en=Math.min(en,Fe.count));const Xn=en-qe;if(Xn<0||Xn===1/0)return;xe.setup(Q,B,Ce,K,Pe);let Fr,vt=Te;if(Pe!==null&&(Fr=Ct.get(Pe),vt=me,vt.setIndex(Fr)),Q.isMesh)B.wireframe===!0?(Me.setLineWidth(B.wireframeLinewidth*ne()),vt.setMode(k.LINES)):vt.setMode(k.TRIANGLES);else if(Q.isLine){let Be=B.linewidth;Be===void 0&&(Be=1),Me.setLineWidth(Be*ne()),Q.isLineSegments?vt.setMode(k.LINES):Q.isLineLoop?vt.setMode(k.LINE_LOOP):vt.setMode(k.LINE_STRIP)}else Q.isPoints?vt.setMode(k.POINTS):Q.isSprite&&vt.setMode(k.TRIANGLES);if(Q.isInstancedMesh)vt.renderInstances(qe,Xn,Q.count);else if(K.isInstancedBufferGeometry){const Be=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,nd=Math.min(K.instanceCount,Be);vt.renderInstances(qe,Xn,nd)}else vt.render(qe,Xn)},this.compile=function(L,H){function K(B,Q,Se){B.transparent===!0&&B.side===Fi&&B.forceSinglePass===!1?(B.side=_n,B.needsUpdate=!0,yl(B,Q,Se),B.side=Ar,B.needsUpdate=!0,yl(B,Q,Se),B.side=Fi):yl(B,Q,Se)}v=A.get(L),v.init(),g.push(v),L.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),v.setupLights(f.useLegacyLights),L.traverse(function(B){const Q=B.material;if(Q)if(Array.isArray(Q))for(let Se=0;Se<Q.length;Se++){const be=Q[Se];K(be,L,B)}else K(Q,L,B)}),g.pop(),v=null};let ie=null;function fe(L){ie&&ie(L)}function ge(){Ze.stop()}function Ke(){Ze.start()}const Ze=new DS;Ze.setAnimationLoop(fe),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(L){ie=L,pe.setAnimationLoop(L),L===null?Ze.stop():Ze.start()},pe.addEventListener("sessionstart",ge),pe.addEventListener("sessionend",Ke),this.render=function(L,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(H),H=pe.getCamera()),L.isScene===!0&&L.onBeforeRender(f,L,H,S),v=A.get(L,g.length),v.init(),g.push(v),X.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),j.setFromProjectionMatrix(X),re=this.localClippingEnabled,G=Y.init(this.clippingPlanes,re),p=D.get(L,x.length),p.init(),x.push(p),Gt(L,H,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(z,V),G===!0&&Y.beginShadows();const K=v.state.shadowsArray;if(se.render(K,L,H),G===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(p,L),v.setupLights(f.useLegacyLights),H.isArrayCamera){const B=H.cameras;for(let Q=0,Se=B.length;Q<Se;Q++){const be=B[Q];ir(p,L,be,be.viewport)}}else ir(p,L,H);S!==null&&(Ne.updateMultisampleRenderTarget(S),Ne.updateRenderTargetMipmap(S)),L.isScene===!0&&L.onAfterRender(f,L,H),xe.resetDefaultState(),E=-1,M=null,g.pop(),g.length>0?v=g[g.length-1]:v=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function Gt(L,H,K,B){if(L.visible===!1)return;if(L.layers.test(H.layers)){if(L.isGroup)K=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(H);else if(L.isLight)v.pushLight(L),L.castShadow&&v.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||j.intersectsSprite(L)){B&&J.setFromMatrixPosition(L.matrixWorld).applyMatrix4(X);const be=We.update(L),Ce=L.material;Ce.visible&&p.push(L,be,Ce,K,J.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||j.intersectsObject(L))){L.isSkinnedMesh&&L.skeleton.frame!==je.render.frame&&(L.skeleton.update(),L.skeleton.frame=je.render.frame);const be=We.update(L),Ce=L.material;if(B&&(be.boundingSphere===null&&be.computeBoundingSphere(),J.copy(be.boundingSphere.center).applyMatrix4(L.matrixWorld).applyMatrix4(X)),Array.isArray(Ce)){const Pe=be.groups;for(let Ie=0,Ue=Pe.length;Ie<Ue;Ie++){const Fe=Pe[Ie],qe=Ce[Fe.materialIndex];qe&&qe.visible&&p.push(L,be,qe,K,J.z,Fe)}}else Ce.visible&&p.push(L,be,Ce,K,J.z,null)}}const Se=L.children;for(let be=0,Ce=Se.length;be<Ce;be++)Gt(Se[be],H,K,B)}function ir(L,H,K,B){const Q=L.opaque,Se=L.transmissive,be=L.transparent;v.setupLightsView(K),G===!0&&Y.setGlobalState(f.clippingPlanes,K),Se.length>0&&mt(Q,Se,H,K),B&&Me.viewport(P.copy(B)),Q.length>0&&kn(Q,H,K),Se.length>0&&kn(Se,H,K),be.length>0&&kn(be,H,K),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function mt(L,H,K,B){if(te===null){const Ce=ue.isWebGL2;te=new vo(1024,1024,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Ga:xo,minFilter:Ha,samples:Ce&&a===!0?4:0})}const Q=f.getRenderTarget();f.setRenderTarget(te),f.clear();const Se=f.toneMapping;f.toneMapping=Hi,kn(L,K,B),Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te);let be=!1;for(let Ce=0,Pe=H.length;Ce<Pe;Ce++){const Ie=H[Ce],Ue=Ie.object,Fe=Ie.geometry,qe=Ie.material,en=Ie.group;if(qe.side===Fi&&Ue.layers.test(B.layers)){const Xn=qe.side;qe.side=_n,qe.needsUpdate=!0,li(Ue,K,B,Fe,qe,en),qe.side=Xn,qe.needsUpdate=!0,be=!0}}be===!0&&(Ne.updateMultisampleRenderTarget(te),Ne.updateRenderTargetMipmap(te)),f.setRenderTarget(Q),f.toneMapping=Se}function kn(L,H,K){const B=H.isScene===!0?H.overrideMaterial:null;for(let Q=0,Se=L.length;Q<Se;Q++){const be=L[Q],Ce=be.object,Pe=be.geometry,Ie=B===null?be.material:B,Ue=be.group;Ce.layers.test(K.layers)&&li(Ce,H,K,Pe,Ie,Ue)}}function li(L,H,K,B,Q,Se){L.onBeforeRender(f,H,K,B,Q,Se),L.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Q.onBeforeRender(f,H,K,B,L,Se),Q.transparent===!0&&Q.side===Fi&&Q.forceSinglePass===!1?(Q.side=_n,Q.needsUpdate=!0,f.renderBufferDirect(K,H,B,Q,L,Se),Q.side=Ar,Q.needsUpdate=!0,f.renderBufferDirect(K,H,B,Q,L,Se),Q.side=Fi):f.renderBufferDirect(K,H,B,Q,L,Se),L.onAfterRender(f,H,K,B,Q,Se)}function yl(L,H,K){H.isScene!==!0&&(H=le);const B=ye.get(L),Q=v.state.lights,Se=v.state.shadowsArray,be=Q.state.version,Ce=ut.getParameters(L,Q.state,Se,H,K),Pe=ut.getProgramCacheKey(Ce);let Ie=B.programs;B.environment=L.isMeshStandardMaterial?H.environment:null,B.fog=H.fog,B.envMap=(L.isMeshStandardMaterial?kt:At).get(L.envMap||B.environment),Ie===void 0&&(L.addEventListener("dispose",pt),Ie=new Map,B.programs=Ie);let Ue=Ie.get(Pe);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===be)return og(L,Ce),Ue}else Ce.uniforms=ut.getUniforms(L),L.onBuild(K,Ce,f),L.onBeforeCompile(Ce,f),Ue=ut.acquireProgram(Ce,Pe),Ie.set(Pe,Ue),B.uniforms=Ce.uniforms;const Fe=B.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Fe.clippingPlanes=Y.uniform),og(L,Ce),B.needsLights=zb(L),B.lightsStateVersion=be,B.needsLights&&(Fe.ambientLightColor.value=Q.state.ambient,Fe.lightProbe.value=Q.state.probe,Fe.directionalLights.value=Q.state.directional,Fe.directionalLightShadows.value=Q.state.directionalShadow,Fe.spotLights.value=Q.state.spot,Fe.spotLightShadows.value=Q.state.spotShadow,Fe.rectAreaLights.value=Q.state.rectArea,Fe.ltc_1.value=Q.state.rectAreaLTC1,Fe.ltc_2.value=Q.state.rectAreaLTC2,Fe.pointLights.value=Q.state.point,Fe.pointLightShadows.value=Q.state.pointShadow,Fe.hemisphereLights.value=Q.state.hemi,Fe.directionalShadowMap.value=Q.state.directionalShadowMap,Fe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Fe.spotShadowMap.value=Q.state.spotShadowMap,Fe.spotLightMatrix.value=Q.state.spotLightMatrix,Fe.spotLightMap.value=Q.state.spotLightMap,Fe.pointShadowMap.value=Q.state.pointShadowMap,Fe.pointShadowMatrix.value=Q.state.pointShadowMatrix);const qe=Ue.getUniforms(),en=Lc.seqWithValue(qe.seq,Fe);return B.currentProgram=Ue,B.uniformsList=en,Ue}function og(L,H){const K=ye.get(L);K.outputColorSpace=H.outputColorSpace,K.instancing=H.instancing,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Fb(L,H,K,B,Q){H.isScene!==!0&&(H=le),Ne.resetTextureUnits();const Se=H.fog,be=B.isMeshStandardMaterial?H.environment:null,Ce=S===null?f.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Mi,Pe=(B.isMeshStandardMaterial?kt:At).get(B.envMap||be),Ie=B.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ue=!!B.normalMap&&!!K.attributes.tangent,Fe=!!K.morphAttributes.position,qe=!!K.morphAttributes.normal,en=!!K.morphAttributes.color,Xn=B.toneMapped?f.toneMapping:Hi,Fr=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,vt=Fr!==void 0?Fr.length:0,Be=ye.get(B),nd=v.state.lights;if(G===!0&&(re===!0||L!==M)){const wn=L===M&&B.id===E;Y.setState(B,L,wn)}let Rt=!1;B.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==nd.state.version||Be.outputColorSpace!==Ce||Q.isInstancedMesh&&Be.instancing===!1||!Q.isInstancedMesh&&Be.instancing===!0||Q.isSkinnedMesh&&Be.skinning===!1||!Q.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Pe||B.fog===!0&&Be.fog!==Se||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Y.numPlanes||Be.numIntersection!==Y.numIntersection)||Be.vertexAlphas!==Ie||Be.vertexTangents!==Ue||Be.morphTargets!==Fe||Be.morphNormals!==qe||Be.morphColors!==en||Be.toneMapping!==Xn||ue.isWebGL2===!0&&Be.morphTargetsCount!==vt)&&(Rt=!0):(Rt=!0,Be.__version=B.version);let Or=Be.currentProgram;Rt===!0&&(Or=yl(B,H,Q));let sg=!1,Vs=!1,id=!1;const tn=Or.getUniforms(),zr=Be.uniforms;if(Me.useProgram(Or.program)&&(sg=!0,Vs=!0,id=!0),B.id!==E&&(E=B.id,Vs=!0),sg||M!==L){if(tn.setValue(k,"projectionMatrix",L.projectionMatrix),ue.logarithmicDepthBuffer&&tn.setValue(k,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),M!==L&&(M=L,Vs=!0,id=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const wn=tn.map.cameraPosition;wn!==void 0&&wn.setValue(k,J.setFromMatrixPosition(L.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&tn.setValue(k,"isOrthographic",L.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||Q.isSkinnedMesh)&&tn.setValue(k,"viewMatrix",L.matrixWorldInverse)}if(Q.isSkinnedMesh){tn.setOptional(k,Q,"bindMatrix"),tn.setOptional(k,Q,"bindMatrixInverse");const wn=Q.skeleton;wn&&(ue.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),tn.setValue(k,"boneTexture",wn.boneTexture,Ne),tn.setValue(k,"boneTextureSize",wn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const rd=K.morphAttributes;if((rd.position!==void 0||rd.normal!==void 0||rd.color!==void 0&&ue.isWebGL2===!0)&&de.update(Q,K,Or),(Vs||Be.receiveShadow!==Q.receiveShadow)&&(Be.receiveShadow=Q.receiveShadow,tn.setValue(k,"receiveShadow",Q.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(zr.envMap.value=Pe,zr.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Vs&&(tn.setValue(k,"toneMappingExposure",f.toneMappingExposure),Be.needsLights&&Ob(zr,id),Se&&B.fog===!0&&fn.refreshFogUniforms(zr,Se),fn.refreshMaterialUniforms(zr,B,I,O,te),Lc.upload(k,Be.uniformsList,zr,Ne)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Lc.upload(k,Be.uniformsList,zr,Ne),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&tn.setValue(k,"center",Q.center),tn.setValue(k,"modelViewMatrix",Q.modelViewMatrix),tn.setValue(k,"normalMatrix",Q.normalMatrix),tn.setValue(k,"modelMatrix",Q.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const wn=B.uniformsGroups;for(let od=0,Bb=wn.length;od<Bb;od++)if(ue.isWebGL2){const ag=wn[od];_e.update(ag,Or),_e.bind(ag,Or)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Or}function Ob(L,H){L.ambientLightColor.needsUpdate=H,L.lightProbe.needsUpdate=H,L.directionalLights.needsUpdate=H,L.directionalLightShadows.needsUpdate=H,L.pointLights.needsUpdate=H,L.pointLightShadows.needsUpdate=H,L.spotLights.needsUpdate=H,L.spotLightShadows.needsUpdate=H,L.rectAreaLights.needsUpdate=H,L.hemisphereLights.needsUpdate=H}function zb(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(L,H,K){ye.get(L.texture).__webglTexture=H,ye.get(L.depthTexture).__webglTexture=K;const B=ye.get(L);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=K===void 0,B.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,H){const K=ye.get(L);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(L,H=0,K=0){S=L,y=H,w=K;let B=!0,Q=null,Se=!1,be=!1;if(L){const Pe=ye.get(L);Pe.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(k.FRAMEBUFFER,null),B=!1):Pe.__webglFramebuffer===void 0?Ne.setupRenderTarget(L):Pe.__hasExternalTextures&&Ne.rebindTextures(L,ye.get(L.texture).__webglTexture,ye.get(L.depthTexture).__webglTexture);const Ie=L.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);const Ue=ye.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Q=Ue[H],Se=!0):ue.isWebGL2&&L.samples>0&&Ne.useMultisampledRTT(L)===!1?Q=ye.get(L).__webglMultisampledFramebuffer:Q=Ue,P.copy(L.viewport),b.copy(L.scissor),C=L.scissorTest}else P.copy(ee).multiplyScalar(I).floor(),b.copy($).multiplyScalar(I).floor(),C=U;if(Me.bindFramebuffer(k.FRAMEBUFFER,Q)&&ue.drawBuffers&&B&&Me.drawBuffers(L,Q),Me.viewport(P),Me.scissor(b),Me.setScissorTest(C),Se){const Pe=ye.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,K)}else if(be){const Pe=ye.get(L.texture),Ie=H||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pe.__webglTexture,K||0,Ie)}E=-1},this.readRenderTargetPixels=function(L,H,K,B,Q,Se,be){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ye.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){Me.bindFramebuffer(k.FRAMEBUFFER,Ce);try{const Pe=L.texture,Ie=Pe.format,Ue=Pe.type;if(Ie!==Vn&&Z.convert(Ie)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===Ga&&(Ae.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ue!==xo&&Z.convert(Ue)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===to&&(ue.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=L.width-B&&K>=0&&K<=L.height-Q&&k.readPixels(H,K,B,Q,Z.convert(Ie),Z.convert(Ue),Se)}finally{const Pe=S!==null?ye.get(S).__webglFramebuffer:null;Me.bindFramebuffer(k.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(L,H,K=0){const B=Math.pow(2,-K),Q=Math.floor(H.image.width*B),Se=Math.floor(H.image.height*B);Ne.setTexture2D(H,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,L.x,L.y,Q,Se),Me.unbindTexture()},this.copyTextureToTexture=function(L,H,K,B=0){const Q=H.image.width,Se=H.image.height,be=Z.convert(K.format),Ce=Z.convert(K.type);Ne.setTexture2D(K,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment),H.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,B,L.x,L.y,Q,Se,be,Ce,H.image.data):H.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,B,L.x,L.y,H.mipmaps[0].width,H.mipmaps[0].height,be,H.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,B,L.x,L.y,be,Ce,H.image),B===0&&K.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(L,H,K,B,Q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=L.max.x-L.min.x+1,be=L.max.y-L.min.y+1,Ce=L.max.z-L.min.z+1,Pe=Z.convert(B.format),Ie=Z.convert(B.type);let Ue;if(B.isData3DTexture)Ne.setTexture3D(B,0),Ue=k.TEXTURE_3D;else if(B.isDataArrayTexture)Ne.setTexture2DArray(B,0),Ue=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);const Fe=k.getParameter(k.UNPACK_ROW_LENGTH),qe=k.getParameter(k.UNPACK_IMAGE_HEIGHT),en=k.getParameter(k.UNPACK_SKIP_PIXELS),Xn=k.getParameter(k.UNPACK_SKIP_ROWS),Fr=k.getParameter(k.UNPACK_SKIP_IMAGES),vt=K.isCompressedTexture?K.mipmaps[0]:K.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,vt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,L.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,L.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,L.min.z),K.isDataTexture||K.isData3DTexture?k.texSubImage3D(Ue,Q,H.x,H.y,H.z,Se,be,Ce,Pe,Ie,vt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ue,Q,H.x,H.y,H.z,Se,be,Ce,Pe,vt.data)):k.texSubImage3D(Ue,Q,H.x,H.y,H.z,Se,be,Ce,Pe,Ie,vt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Fe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qe),k.pixelStorei(k.UNPACK_SKIP_PIXELS,en),k.pixelStorei(k.UNPACK_SKIP_ROWS,Xn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Fr),Q===0&&B.generateMipmaps&&k.generateMipmap(Ue),Me.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Ne.setTextureCube(L,0):L.isData3DTexture?Ne.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ne.setTexture2DArray(L,0):Ne.setTexture2D(L,0),Me.unbindTexture()},this.resetState=function(){y=0,w=0,S=null,Me.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?ao:vS}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ao?Le:Mi}}class J5 extends kr{}J5.prototype.isWebGL1Renderer=!0;class wo extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class e3 extends cn{constructor(e,n,i,r,o,s,a,l,c){super(e,n,i,r,o,s,a,l,c),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:Zt,this.magFilter=o!==void 0?o:Zt,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class er extends Ur{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let c=0;const u=[],d=new W,h=new W,p=[],v=[],x=[],g=[];for(let f=0;f<=i;f++){const m=[],y=f/i;let w=0;f===0&&s===0?w=.5/n:f===i&&l===Math.PI&&(w=-.5/n);for(let S=0;S<=n;S++){const E=S/n;d.x=-e*Math.cos(r+E*o)*Math.sin(s+y*a),d.y=e*Math.cos(s+y*a),d.z=e*Math.sin(r+E*o)*Math.sin(s+y*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),g.push(E+w,1-y),m.push(c++)}u.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const y=u[f][m+1],w=u[f][m],S=u[f+1][m],E=u[f+1][m+1];(f!==0||s>0)&&p.push(y,w,E),(f!==i-1||l<Math.PI)&&p.push(w,S,E)}this.setIndex(p),this.setAttribute("position",new yi(v,3)),this.setAttribute("normal",new yi(x,3)),this.setAttribute("uv",new yi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Hx={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class t3{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,o===!1&&r.onStart!==void 0&&r.onStart(u,s,a),o=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const n3=new t3;class FS{constructor(e){this.manager=e!==void 0?e:n3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class i3 extends FS{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Hx.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=ja("img");function l(){u(),Hx.add(e,this),n&&n(this),o.manager.itemEnd(e)}function c(d){u(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Cr extends FS{constructor(e){super(e)}load(e,n,i,r){const o=new cn,s=new i3(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dm);function Vh(){return Vh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Vh.apply(null,arguments)}var r3=!1;function o3(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function s3(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var a3=function(){function t(n){var i=this;this._insertTag=function(r){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,o),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!r3:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(s3(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=o3(r);try{o.insertRule(i,o.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},t}(),Yt="-ms-",cu="-moz-",He="-webkit-",OS="comm",mm="rule",gm="decl",l3="@import",zS="@keyframes",c3="@layer",u3=Math.abs,Fu=String.fromCharCode,d3=Object.assign;function f3(t,e){return Ot(t,0)^45?(((e<<2^Ot(t,0))<<2^Ot(t,1))<<2^Ot(t,2))<<2^Ot(t,3):0}function BS(t){return t.trim()}function h3(t,e){return(t=e.exec(t))?t[0]:t}function Ge(t,e,n){return t.replace(e,n)}function Hh(t,e){return t.indexOf(e)}function Ot(t,e){return t.charCodeAt(e)|0}function Wa(t,e,n){return t.slice(e,n)}function hi(t){return t.length}function xm(t){return t.length}function sc(t,e){return e.push(t),t}function p3(t,e){return t.map(e).join("")}var Ou=1,As=1,VS=0,Sn=0,_t=0,Fs="";function zu(t,e,n,i,r,o,s){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:Ou,column:As,length:s,return:""}}function ta(t,e){return d3(zu("",null,null,"",null,null,0),t,{length:-t.length},e)}function m3(){return _t}function g3(){return _t=Sn>0?Ot(Fs,--Sn):0,As--,_t===10&&(As=1,Ou--),_t}function Ln(){return _t=Sn<VS?Ot(Fs,Sn++):0,As++,_t===10&&(As=1,Ou++),_t}function _i(){return Ot(Fs,Sn)}function Pc(){return Sn}function hl(t,e){return Wa(Fs,t,e)}function $a(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function HS(t){return Ou=As=1,VS=hi(Fs=t),Sn=0,[]}function GS(t){return Fs="",t}function Dc(t){return BS(hl(Sn-1,Gh(t===91?t+2:t===40?t+1:t)))}function x3(t){for(;(_t=_i())&&_t<33;)Ln();return $a(t)>2||$a(_t)>3?"":" "}function v3(t,e){for(;--e&&Ln()&&!(_t<48||_t>102||_t>57&&_t<65||_t>70&&_t<97););return hl(t,Pc()+(e<6&&_i()==32&&Ln()==32))}function Gh(t){for(;Ln();)switch(_t){case t:return Sn;case 34:case 39:t!==34&&t!==39&&Gh(_t);break;case 40:t===41&&Gh(t);break;case 92:Ln();break}return Sn}function y3(t,e){for(;Ln()&&t+_t!==47+10;)if(t+_t===42+42&&_i()===47)break;return"/*"+hl(e,Sn-1)+"*"+Fu(t===47?t:Ln())}function _3(t){for(;!$a(_i());)Ln();return hl(t,Sn)}function S3(t){return GS(Ic("",null,null,null,[""],t=HS(t),0,[0],t))}function Ic(t,e,n,i,r,o,s,a,l){for(var c=0,u=0,d=s,h=0,p=0,v=0,x=1,g=1,f=1,m=0,y="",w=r,S=o,E=i,M=y;g;)switch(v=m,m=Ln()){case 40:if(v!=108&&Ot(M,d-1)==58){Hh(M+=Ge(Dc(m),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:M+=Dc(m);break;case 9:case 10:case 13:case 32:M+=x3(v);break;case 92:M+=v3(Pc()-1,7);continue;case 47:switch(_i()){case 42:case 47:sc(w3(y3(Ln(),Pc()),e,n),l);break;default:M+="/"}break;case 123*x:a[c++]=hi(M)*f;case 125*x:case 59:case 0:switch(m){case 0:case 125:g=0;case 59+u:f==-1&&(M=Ge(M,/\f/g,"")),p>0&&hi(M)-d&&sc(p>32?jx(M+";",i,n,d-1):jx(Ge(M," ","")+";",i,n,d-2),l);break;case 59:M+=";";default:if(sc(E=Gx(M,e,n,c,u,r,a,y,w=[],S=[],d),o),m===123)if(u===0)Ic(M,e,E,E,w,o,d,a,S);else switch(h===99&&Ot(M,3)===110?100:h){case 100:case 108:case 109:case 115:Ic(t,E,E,i&&sc(Gx(t,E,E,0,0,r,a,y,r,w=[],d),S),r,S,d,a,i?w:S);break;default:Ic(M,E,E,E,[""],S,0,a,S)}}c=u=p=0,x=f=1,y=M="",d=s;break;case 58:d=1+hi(M),p=v;default:if(x<1){if(m==123)--x;else if(m==125&&x++==0&&g3()==125)continue}switch(M+=Fu(m),m*x){case 38:f=u>0?1:(M+="\f",-1);break;case 44:a[c++]=(hi(M)-1)*f,f=1;break;case 64:_i()===45&&(M+=Dc(Ln())),h=_i(),u=d=hi(y=M+=_3(Pc())),m++;break;case 45:v===45&&hi(M)==2&&(x=0)}}return o}function Gx(t,e,n,i,r,o,s,a,l,c,u){for(var d=r-1,h=r===0?o:[""],p=xm(h),v=0,x=0,g=0;v<i;++v)for(var f=0,m=Wa(t,d+1,d=u3(x=s[v])),y=t;f<p;++f)(y=BS(x>0?h[f]+" "+m:Ge(m,/&\f/g,h[f])))&&(l[g++]=y);return zu(t,e,n,r===0?mm:a,l,c,u)}function w3(t,e,n){return zu(t,e,n,OS,Fu(m3()),Wa(t,2,-2),0)}function jx(t,e,n,i){return zu(t,e,n,gm,Wa(t,0,i),Wa(t,i+1,-1),i)}function ms(t,e){for(var n="",i=xm(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function b3(t,e,n,i){switch(t.type){case c3:if(t.children.length)break;case l3:case gm:return t.return=t.return||t.value;case OS:return"";case zS:return t.return=t.value+"{"+ms(t.children,i)+"}";case mm:t.value=t.props.join(",")}return hi(n=ms(t.children,i))?t.return=t.value+"{"+n+"}":""}function E3(t){var e=xm(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function M3(t){return function(e){e.root||(e=e.return)&&t(e)}}function jS(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var T3=function(e,n,i){for(var r=0,o=0;r=o,o=_i(),r===38&&o===12&&(n[i]=1),!$a(o);)Ln();return hl(e,Sn)},A3=function(e,n){var i=-1,r=44;do switch($a(r)){case 0:r===38&&_i()===12&&(n[i]=1),e[i]+=T3(Sn-1,n,i);break;case 2:e[i]+=Dc(r);break;case 4:if(r===44){e[++i]=_i()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=Fu(r)}while(r=Ln());return e},C3=function(e,n){return GS(A3(HS(e),n))},Wx=new WeakMap,R3=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Wx.get(i))&&!r){Wx.set(e,!0);for(var o=[],s=C3(n,o),a=i.props,l=0,c=0;l<s.length;l++)for(var u=0;u<a.length;u++,c++)e.props[c]=o[l]?s[l].replace(/&\f/g,a[u]):a[u]+" "+s[l]}}},L3=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function WS(t,e){switch(f3(t,e)){case 5103:return He+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return He+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return He+t+cu+t+Yt+t+t;case 6828:case 4268:return He+t+Yt+t+t;case 6165:return He+t+Yt+"flex-"+t+t;case 5187:return He+t+Ge(t,/(\w+).+(:[^]+)/,He+"box-$1$2"+Yt+"flex-$1$2")+t;case 5443:return He+t+Yt+"flex-item-"+Ge(t,/flex-|-self/,"")+t;case 4675:return He+t+Yt+"flex-line-pack"+Ge(t,/align-content|flex-|-self/,"")+t;case 5548:return He+t+Yt+Ge(t,"shrink","negative")+t;case 5292:return He+t+Yt+Ge(t,"basis","preferred-size")+t;case 6060:return He+"box-"+Ge(t,"-grow","")+He+t+Yt+Ge(t,"grow","positive")+t;case 4554:return He+Ge(t,/([^-])(transform)/g,"$1"+He+"$2")+t;case 6187:return Ge(Ge(Ge(t,/(zoom-|grab)/,He+"$1"),/(image-set)/,He+"$1"),t,"")+t;case 5495:case 3959:return Ge(t,/(image-set\([^]*)/,He+"$1$`$1");case 4968:return Ge(Ge(t,/(.+:)(flex-)?(.*)/,He+"box-pack:$3"+Yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+He+t+t;case 4095:case 3583:case 4068:case 2532:return Ge(t,/(.+)-inline(.+)/,He+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hi(t)-1-e>6)switch(Ot(t,e+1)){case 109:if(Ot(t,e+4)!==45)break;case 102:return Ge(t,/(.+:)(.+)-([^]+)/,"$1"+He+"$2-$3$1"+cu+(Ot(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Hh(t,"stretch")?WS(Ge(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Ot(t,e+1)!==115)break;case 6444:switch(Ot(t,hi(t)-3-(~Hh(t,"!important")&&10))){case 107:return Ge(t,":",":"+He)+t;case 101:return Ge(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+He+(Ot(t,14)===45?"inline-":"")+"box$3$1"+He+"$2$3$1"+Yt+"$2box$3")+t}break;case 5936:switch(Ot(t,e+11)){case 114:return He+t+Yt+Ge(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return He+t+Yt+Ge(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return He+t+Yt+Ge(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return He+t+Yt+t+t}return t}var P3=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case gm:e.return=WS(e.value,e.length);break;case zS:return ms([ta(e,{value:Ge(e.value,"@","@"+He)})],r);case mm:if(e.length)return p3(e.props,function(o){switch(h3(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ms([ta(e,{props:[Ge(o,/:(read-\w+)/,":"+cu+"$1")]})],r);case"::placeholder":return ms([ta(e,{props:[Ge(o,/:(plac\w+)/,":"+He+"input-$1")]}),ta(e,{props:[Ge(o,/:(plac\w+)/,":"+cu+"$1")]}),ta(e,{props:[Ge(o,/:(plac\w+)/,Yt+"input-$1")]})],r)}return""})}},D3=[P3],I3=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(x){var g=x.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var r=e.stylisPlugins||D3,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var g=x.getAttribute("data-emotion").split(" "),f=1;f<g.length;f++)o[g[f]]=!0;a.push(x)});var l,c=[R3,L3];{var u,d=[b3,M3(function(x){u.insert(x)})],h=E3(c.concat(r,d)),p=function(g){return ms(S3(g),h)};l=function(g,f,m,y){u=m,p(g?g+"{"+f.styles+"}":f.styles),y&&(v.inserted[f.name]=!0)}}var v={key:n,sheet:new a3({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return v.sheet.hydrate(a),v},$S={exports:{}},Xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ut=typeof Symbol=="function"&&Symbol.for,vm=Ut?Symbol.for("react.element"):60103,ym=Ut?Symbol.for("react.portal"):60106,Bu=Ut?Symbol.for("react.fragment"):60107,Vu=Ut?Symbol.for("react.strict_mode"):60108,Hu=Ut?Symbol.for("react.profiler"):60114,Gu=Ut?Symbol.for("react.provider"):60109,ju=Ut?Symbol.for("react.context"):60110,_m=Ut?Symbol.for("react.async_mode"):60111,Wu=Ut?Symbol.for("react.concurrent_mode"):60111,$u=Ut?Symbol.for("react.forward_ref"):60112,Xu=Ut?Symbol.for("react.suspense"):60113,U3=Ut?Symbol.for("react.suspense_list"):60120,Yu=Ut?Symbol.for("react.memo"):60115,qu=Ut?Symbol.for("react.lazy"):60116,k3=Ut?Symbol.for("react.block"):60121,N3=Ut?Symbol.for("react.fundamental"):60117,F3=Ut?Symbol.for("react.responder"):60118,O3=Ut?Symbol.for("react.scope"):60119;function Un(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case vm:switch(t=t.type,t){case _m:case Wu:case Bu:case Hu:case Vu:case Xu:return t;default:switch(t=t&&t.$$typeof,t){case ju:case $u:case qu:case Yu:case Gu:return t;default:return e}}case ym:return e}}}function XS(t){return Un(t)===Wu}Xe.AsyncMode=_m;Xe.ConcurrentMode=Wu;Xe.ContextConsumer=ju;Xe.ContextProvider=Gu;Xe.Element=vm;Xe.ForwardRef=$u;Xe.Fragment=Bu;Xe.Lazy=qu;Xe.Memo=Yu;Xe.Portal=ym;Xe.Profiler=Hu;Xe.StrictMode=Vu;Xe.Suspense=Xu;Xe.isAsyncMode=function(t){return XS(t)||Un(t)===_m};Xe.isConcurrentMode=XS;Xe.isContextConsumer=function(t){return Un(t)===ju};Xe.isContextProvider=function(t){return Un(t)===Gu};Xe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===vm};Xe.isForwardRef=function(t){return Un(t)===$u};Xe.isFragment=function(t){return Un(t)===Bu};Xe.isLazy=function(t){return Un(t)===qu};Xe.isMemo=function(t){return Un(t)===Yu};Xe.isPortal=function(t){return Un(t)===ym};Xe.isProfiler=function(t){return Un(t)===Hu};Xe.isStrictMode=function(t){return Un(t)===Vu};Xe.isSuspense=function(t){return Un(t)===Xu};Xe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Bu||t===Wu||t===Hu||t===Vu||t===Xu||t===U3||typeof t=="object"&&t!==null&&(t.$$typeof===qu||t.$$typeof===Yu||t.$$typeof===Gu||t.$$typeof===ju||t.$$typeof===$u||t.$$typeof===N3||t.$$typeof===F3||t.$$typeof===O3||t.$$typeof===k3)};Xe.typeOf=Un;$S.exports=Xe;var z3=$S.exports,YS=z3,B3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qS={};qS[YS.ForwardRef]=B3;qS[YS.Memo]=V3;var H3=!0;function KS(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):r&&(i+=r+" ")}),i}var Sm=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||H3===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},wm=function(e,n,i){Sm(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+r:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function G3(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var j3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},W3=!1,$3=/[A-Z]|^ms/g,X3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ZS=function(e){return e.charCodeAt(1)===45},$x=function(e){return e!=null&&typeof e!="boolean"},df=jS(function(t){return ZS(t)?t:t.replace($3,"-$&").toLowerCase()}),Xx=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(X3,function(i,r,o){return pi={name:r,styles:o,next:pi},r})}return j3[e]!==1&&!ZS(e)&&typeof n=="number"&&n!==0?n+"px":n},Y3="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Xa(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return pi={name:r.name,styles:r.styles,next:pi},r.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)pi={name:s.name,styles:s.styles,next:pi},s=s.next;var a=o.styles+";";return a}return q3(t,e,n)}case"function":{if(t!==void 0){var l=pi,c=n(t);return pi=l,Xa(t,e,c)}break}}var u=n;if(e==null)return u;var d=e[u];return d!==void 0?d:u}function q3(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=Xa(t,e,n[r])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var a=s;e!=null&&e[a]!==void 0?i+=o+"{"+e[a]+"}":$x(a)&&(i+=df(o)+":"+Xx(o,a)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&W3)throw new Error(Y3);if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var l=0;l<s.length;l++)$x(s[l])&&(i+=df(o)+":"+Xx(o,s[l])+";");else{var c=Xa(t,e,s);switch(o){case"animation":case"animationName":{i+=df(o)+":"+c+";";break}default:i+=o+"{"+c+"}"}}}}return i}var Yx=/label:\s*([^\s;{]+)\s*(;|$)/g,pi;function Ku(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,r="";pi=void 0;var o=t[0];if(o==null||o.raw===void 0)i=!1,r+=Xa(n,e,o);else{var s=o;r+=s[0]}for(var a=1;a<t.length;a++)if(r+=Xa(n,e,t[a]),i){var l=o;r+=l[a]}Yx.lastIndex=0;for(var c="",u;(u=Yx.exec(r))!==null;)c+="-"+u[1];var d=G3(r)+c;return{name:d,styles:r,next:pi}}var K3=function(e){return e()},QS=dg["useInsertionEffect"]?dg["useInsertionEffect"]:!1,JS=QS||K3,qx=QS||R.useLayoutEffect,Z3=!1,ew=R.createContext(typeof HTMLElement<"u"?I3({key:"css"}):null);ew.Provider;var bm=function(e){return R.forwardRef(function(n,i){var r=R.useContext(ew);return e(n,r,i)})},Em=R.createContext({}),Mm={}.hasOwnProperty,jh="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Q3=function(e,n){var i={};for(var r in n)Mm.call(n,r)&&(i[r]=n[r]);return i[jh]=e,i},J3=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return Sm(n,i,r),JS(function(){return wm(n,i,r)}),null},eD=bm(function(t,e,n){var i=t.css;typeof i=="string"&&e.registered[i]!==void 0&&(i=e.registered[i]);var r=t[jh],o=[i],s="";typeof t.className=="string"?s=KS(e.registered,o,t.className):t.className!=null&&(s=t.className+" ");var a=Ku(o,void 0,R.useContext(Em));s+=e.key+"-"+a.name;var l={};for(var c in t)Mm.call(t,c)&&c!=="css"&&c!==jh&&!Z3&&(l[c]=t[c]);return l.className=s,n&&(l.ref=n),R.createElement(R.Fragment,null,R.createElement(J3,{cache:e,serialized:a,isStringTag:typeof r=="string"}),R.createElement(r,l))}),tD=eD,Kx=function(e,n){var i=arguments;if(n==null||!Mm.call(n,"css"))return R.createElement.apply(void 0,i);var r=i.length,o=new Array(r);o[0]=tD,o[1]=Q3(e,n);for(var s=2;s<r;s++)o[s]=i[s];return R.createElement.apply(null,o)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(Kx||(Kx={}));var nD=bm(function(t,e){var n=t.styles,i=Ku([n],void 0,R.useContext(Em)),r=R.useRef();return qx(function(){var o=e.key+"-global",s=new e.sheet.constructor({key:o,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+o+" "+i.name+'"]');return e.sheet.tags.length&&(s.before=e.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",o),s.hydrate([l])),r.current=[s,a],function(){s.flush()}},[e]),qx(function(){var o=r.current,s=o[0],a=o[1];if(a){o[1]=!1;return}if(i.next!==void 0&&wm(e,i.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}e.insert("",i,s,!1)},[e,i.name]),null});function Tm(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Ku(e)}function ht(){var t=Tm.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var iD=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,rD=jS(function(t){return iD.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),oD=!1,sD=rD,aD=function(e){return e!=="theme"},Zx=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?sD:aD},Qx=function(e,n,i){var r;if(n){var o=n.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(s){return e.__emotion_forwardProp(s)&&o(s)}:o}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},lD=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return Sm(n,i,r),JS(function(){return wm(n,i,r)}),null},cD=function t(e,n){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,o,s;n!==void 0&&(o=n.label,s=n.target);var a=Qx(e,n,i),l=a||Zx(r),c=!l("as");return function(){var u=arguments,d=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&d.push("label:"+o+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var h=u[0];d.push(h[0]);for(var p=u.length,v=1;v<p;v++)d.push(u[v],h[v])}var x=bm(function(g,f,m){var y=c&&g.as||r,w="",S=[],E=g;if(g.theme==null){E={};for(var M in g)E[M]=g[M];E.theme=R.useContext(Em)}typeof g.className=="string"?w=KS(f.registered,S,g.className):g.className!=null&&(w=g.className+" ");var P=Ku(d.concat(S),f.registered,E);w+=f.key+"-"+P.name,s!==void 0&&(w+=" "+s);var b=c&&a===void 0?Zx(y):l,C={};for(var F in g)c&&F==="as"||b(F)&&(C[F]=g[F]);return C.className=w,m&&(C.ref=m),R.createElement(R.Fragment,null,R.createElement(lD,{cache:f,serialized:P,isStringTag:typeof y=="string"}),R.createElement(y,C))});return x.displayName=o!==void 0?o:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",x.defaultProps=e.defaultProps,x.__emotion_real=x,x.__emotion_base=r,x.__emotion_styles=d,x.__emotion_forwardProp=a,Object.defineProperty(x,"toString",{value:function(){return s===void 0&&oD?"NO_COMPONENT_SELECTOR":"."+s}}),x.withComponent=function(g,f){var m=t(g,Vh({},n,f,{shouldForwardProp:Qx(x,f,!0)}));return m.apply(void 0,d)},x}},uD=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],T=cD.bind(null);uD.forEach(function(t){T[t]=T(t)});const tw=ht`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;ht`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;ht`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;const dD=ht`
  0% {
    box-shadow: 0 0 5px rgba(255, 193, 7, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 193, 7, 0.6);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 193, 7, 0.3);
  }
`,nw=ht`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,fD=ht`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,hD=T.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 40px;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(${t=>t.isVisible?"0":"-100%"});
  opacity: ${t=>t.isVisible?1:0};
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 193, 7, 0.3) 20%, 
      rgba(255, 193, 7, 0.6) 50%, 
      rgba(255, 193, 7, 0.3) 80%, 
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`,pD=T.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,mD=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${tw} 0.8s ease-out 0.2s both;
  
  &:hover {
    transform: scale(1.05);
    
    .logo-icon {
      animation: ${nw} 1s ease-in-out;
    }
  }
`,gD=T.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ffc107, #ff9800);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '360°';
    font-size: 8px;
    font-weight: bold;
    color: white;
    position: absolute;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background: conic-gradient(transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${nw} 3s linear infinite;
  }
`,xD=T.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,vD=T.div`
  display: flex;
  align-items: center;
  gap: 30px;
  animation: ${tw} 0.8s ease-out 0.4s both;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`,yD=T.div`
  display: flex;
  gap: 8px;
  align-items: center;
  
  @media (max-width: 480px) {
    display: none;
  }
`,Jx=T.span`
  color: ${t=>t.active?"white":"rgba(255, 255, 255, 0.7)"};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${t=>t.active?"600":"400"};
  
  &:hover {
    color: white;
    transform: scale(1.05);
  }
  
  &:not(:last-child)::after {
    content: '/';
    margin-left: 8px;
    color: rgba(255, 255, 255, 0.5);
  }
`,_D=T.div`
  background: linear-gradient(135deg, #ffc107, #ff9800);
  color: #000;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${dD} 3s infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`,SD=T.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
`,ff=T.div`
  width: 24px;
  height: 2px;
  background: white;
  margin: 6px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  
  &:nth-of-type(1) {
    transform: ${t=>t.isOpen?"rotate(45deg) translate(6px, 6px)":"none"};
  }
  
  &:nth-of-type(2) {
    opacity: ${t=>t.isOpen?"0":"1"};
    transform: ${t=>t.isOpen?"scale(0)":"scale(1)"};
  }
  
  &:nth-of-type(3) {
    transform: ${t=>t.isOpen?"rotate(-45deg) translate(8px, -8px)":"none"};
  }
`,wD=T.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(20px);
  z-index: 999;
  opacity: ${t=>t.isOpen?1:0};
  visibility: ${t=>t.isOpen?"visible":"hidden"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 193, 7, 0.05) 0%, transparent 70%);
  }
`,bD=T.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
  opacity: ${t=>t.isOpen?1:0};
  transform: translateY(${t=>t.isOpen?0:50}px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${t=>t.isOpen?"0.2s":"0s"};
`,ED=T.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 60px;
`,MD=T.a`
  color: white;
  text-decoration: none;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${t=>t.isVisible?1:0};
  transform: translateX(${t=>t.isVisible?0:-50}px);
  transition-delay: ${t=>t.delay}s;
  
  &:hover {
    color: #ffc107;
    transform: scale(1.1) translateY(-5px);
    text-shadow: 0 0 30px rgba(255, 193, 7, 0.6);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #ffc107, #ff9800);
    border-radius: 2px;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,TD=T.div`
  background: linear-gradient(135deg, #ffc107, #ff9800);
  color: #000;
  padding: 16px 32px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 700;
  animation: ${fD} 0.6s ease-out 1s both;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(255, 193, 7, 0.5);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 12px 24px;
  }
`,AD=T.button`
  position: absolute;
  top: 30px;
  right: 40px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1) rotate(90deg);
  }
  
  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`,CD=()=>{const[t,e]=R.useState(!1),[n,i]=R.useState("EN"),[r,o]=R.useState(!1),[s,a]=R.useState(0),l=Ji(),c=Qi();R.useEffect(()=>{const p=()=>{const v=window.scrollY,x=window.innerHeight;v>x*.8?o(!0):v<x*.1&&o(!1),a(v)};return p(),window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[s]),R.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const u=[{name:"home",href:"#home",delay:.1},{name:"use cases",href:"#use-cases",delay:.2},{name:"references",href:"#references",delay:.3},{name:"process",href:"#process",delay:.4},{name:"pricing",href:"#pricing",delay:.5},{name:"faq",href:"#faq",delay:.6},{name:"contact",href:"#contact",delay:.7}],d=p=>{if(c.pathname!=="/")l("/"),setTimeout(()=>{const v=document.getElementById(p.replace("#",""));v&&v.scrollIntoView({behavior:"smooth",block:"start"})},100);else{const v=document.getElementById(p.replace("#",""));v&&v.scrollIntoView({behavior:"smooth",block:"start"})}e(!1)},h=()=>{c.pathname!=="/"?l("/"):d("#home")};return _.jsxs(_.Fragment,{children:[_.jsx(hD,{isVisible:r,children:_.jsxs(pD,{children:[_.jsxs(mD,{onClick:h,children:[_.jsx(gD,{className:"logo-icon"}),_.jsx(xD,{children:"boutique360"})]}),_.jsxs(vD,{children:[_.jsxs(yD,{children:[_.jsx(Jx,{active:n==="EN",onClick:()=>i("EN"),children:"EN"}),_.jsx(Jx,{active:n==="NL",onClick:()=>i("NL"),children:"NL"})]}),_.jsx(_D,{children:"30% off"}),_.jsxs(SD,{onClick:()=>e(!t),children:[_.jsx(ff,{isOpen:t}),_.jsx(ff,{isOpen:t}),_.jsx(ff,{isOpen:t})]})]})]})}),_.jsxs(wD,{isOpen:t,children:[_.jsx(AD,{onClick:()=>e(!1),children:"×"}),_.jsxs(bD,{isOpen:t,children:[_.jsx(ED,{children:u.map((p,v)=>_.jsx(MD,{href:p.href,isVisible:t,delay:p.delay,onClick:x=>{x.preventDefault(),d(p.href)},children:p.name},p.name))}),_.jsx(TD,{children:"30% off until 30th June"})]})]})]})},iw=R.createContext({});function RD(t){const e=R.useRef(null);return e.current===null&&(e.current=t()),e.current}const Am=typeof window<"u",LD=Am?R.useLayoutEffect:R.useEffect,Cm=R.createContext(null);function Rm(t,e){t.indexOf(e)===-1&&t.push(e)}function Lm(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Yi=(t,e,n)=>n>e?e:n<t?t:n;let Pm=()=>{};const qi={},rw=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function ow(t){return typeof t=="object"&&t!==null}const sw=t=>/^0[^.\s]+$/u.test(t);function Dm(t){let e;return()=>(e===void 0&&(e=t()),e)}const jn=t=>t,PD=(t,e)=>n=>e(t(n)),pl=(...t)=>t.reduce(PD),Ya=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class Im{constructor(){this.subscriptions=[]}add(e){return Rm(this.subscriptions,e),()=>Lm(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let o=0;o<r;o++){const s=this.subscriptions[o];s&&s(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Si=t=>t*1e3,wi=t=>t/1e3;function aw(t,e){return e?t*(1e3/e):0}const lw=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,DD=1e-7,ID=12;function UD(t,e,n,i,r){let o,s,a=0;do s=e+(n-e)/2,o=lw(s,i,r)-t,o>0?n=s:e=s;while(Math.abs(o)>DD&&++a<ID);return s}function ml(t,e,n,i){if(t===e&&n===i)return jn;const r=o=>UD(o,0,1,t,n);return o=>o===0||o===1?o:lw(r(o),e,i)}const cw=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,uw=t=>e=>1-t(1-e),dw=ml(.33,1.53,.69,.99),Um=uw(dw),fw=cw(Um),hw=t=>(t*=2)<1?.5*Um(t):.5*(2-Math.pow(2,-10*(t-1))),km=t=>1-Math.sin(Math.acos(t)),pw=uw(km),mw=cw(km),kD=ml(.42,0,1,1),ND=ml(0,0,.58,1),gw=ml(.42,0,.58,1),FD=t=>Array.isArray(t)&&typeof t[0]!="number",xw=t=>Array.isArray(t)&&typeof t[0]=="number",OD={linear:jn,easeIn:kD,easeInOut:gw,easeOut:ND,circIn:km,circInOut:mw,circOut:pw,backIn:Um,backInOut:fw,backOut:dw,anticipate:hw},zD=t=>typeof t=="string",ev=t=>{if(xw(t)){Pm(t.length===4);const[e,n,i,r]=t;return ml(e,n,i,r)}else if(zD(t))return OD[t];return t},ac=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],tv={value:null,addProjectionMetrics:null};function BD(t,e){let n=new Set,i=new Set,r=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},l=0;function c(d){s.has(d)&&(u.schedule(d),t()),l++,d(a)}const u={schedule:(d,h=!1,p=!1)=>{const x=p&&r?n:i;return h&&s.add(d),x.has(d)||x.add(d),d},cancel:d=>{i.delete(d),s.delete(d)},process:d=>{if(a=d,r){o=!0;return}r=!0,[n,i]=[i,n],n.forEach(c),e&&tv.value&&tv.value.frameloop[e].push(l),l=0,n.clear(),r=!1,o&&(o=!1,u.process(d))}};return u}const VD=40;function vw(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=ac.reduce((y,w)=>(y[w]=BD(o,e?w:void 0),y),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:h,render:p,postRender:v}=s,x=()=>{const y=qi.useManualTiming?r.timestamp:performance.now();n=!1,qi.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(y-r.timestamp,VD),1)),r.timestamp=y,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),h.process(r),p.process(r),v.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(x))},g=()=>{n=!0,i=!0,r.isProcessing||t(x)};return{schedule:ac.reduce((y,w)=>{const S=s[w];return y[w]=(E,M=!1,P=!1)=>(n||g(),S.schedule(E,M,P)),y},{}),cancel:y=>{for(let w=0;w<ac.length;w++)s[ac[w]].cancel(y)},state:r,steps:s}}const{schedule:lt,cancel:Rr,state:Ft,steps:hf}=vw(typeof requestAnimationFrame<"u"?requestAnimationFrame:jn,!0);let Uc;function HD(){Uc=void 0}const gn={now:()=>(Uc===void 0&&gn.set(Ft.isProcessing||qi.useManualTiming?Ft.timestamp:performance.now()),Uc),set:t=>{Uc=t,queueMicrotask(HD)}},yw=t=>e=>typeof e=="string"&&e.startsWith(t),Nm=yw("--"),GD=yw("var(--"),Fm=t=>GD(t)?jD.test(t.split("/*")[0].trim()):!1,jD=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Os={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},qa={...Os,transform:t=>Yi(0,1,t)},lc={...Os,default:1},ya=t=>Math.round(t*1e5)/1e5,Om=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function WD(t){return t==null}const $D=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,zm=(t,e)=>n=>!!(typeof n=="string"&&$D.test(n)&&n.startsWith(t)||e&&!WD(n)&&Object.prototype.hasOwnProperty.call(n,e)),_w=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,o,s,a]=i.match(Om);return{[t]:parseFloat(r),[e]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},XD=t=>Yi(0,255,t),pf={...Os,transform:t=>Math.round(XD(t))},no={test:zm("rgb","red"),parse:_w("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+pf.transform(t)+", "+pf.transform(e)+", "+pf.transform(n)+", "+ya(qa.transform(i))+")"};function YD(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Wh={test:zm("#"),parse:YD,transform:no.transform},gl=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),cr=gl("deg"),bi=gl("%"),Ee=gl("px"),qD=gl("vh"),KD=gl("vw"),nv=(()=>({...bi,parse:t=>bi.parse(t)/100,transform:t=>bi.transform(t*100)}))(),ts={test:zm("hsl","hue"),parse:_w("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+bi.transform(ya(e))+", "+bi.transform(ya(n))+", "+ya(qa.transform(i))+")"},qt={test:t=>no.test(t)||Wh.test(t)||ts.test(t),parse:t=>no.test(t)?no.parse(t):ts.test(t)?ts.parse(t):Wh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?no.transform(t):ts.transform(t)},ZD=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function QD(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Om))==null?void 0:e.length)||0)+(((n=t.match(ZD))==null?void 0:n.length)||0)>0}const Sw="number",ww="color",JD="var",eI="var(",iv="${}",tI=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ka(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let o=0;const a=e.replace(tI,l=>(qt.test(l)?(i.color.push(o),r.push(ww),n.push(qt.parse(l))):l.startsWith(eI)?(i.var.push(o),r.push(JD),n.push(l)):(i.number.push(o),r.push(Sw),n.push(parseFloat(l))),++o,iv)).split(iv);return{values:n,split:a,indexes:i,types:r}}function bw(t){return Ka(t).values}function Ew(t){const{split:e,types:n}=Ka(t),i=e.length;return r=>{let o="";for(let s=0;s<i;s++)if(o+=e[s],r[s]!==void 0){const a=n[s];a===Sw?o+=ya(r[s]):a===ww?o+=qt.transform(r[s]):o+=r[s]}return o}}const nI=t=>typeof t=="number"?0:t;function iI(t){const e=bw(t);return Ew(t)(e.map(nI))}const Lr={test:QD,parse:bw,createTransformer:Ew,getAnimatableNone:iI};function mf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function rI({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,o=0,s=0;if(!e)r=o=s=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=mf(l,a,t+1/3),o=mf(l,a,t),s=mf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:i}}function uu(t,e){return n=>n>0?e:t}const ot=(t,e,n)=>t+(e-t)*n,gf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},oI=[Wh,no,ts],sI=t=>oI.find(e=>e.test(t));function rv(t){const e=sI(t);if(!e)return!1;let n=e.parse(t);return e===ts&&(n=rI(n)),n}const ov=(t,e)=>{const n=rv(t),i=rv(e);if(!n||!i)return uu(t,e);const r={...n};return o=>(r.red=gf(n.red,i.red,o),r.green=gf(n.green,i.green,o),r.blue=gf(n.blue,i.blue,o),r.alpha=ot(n.alpha,i.alpha,o),no.transform(r))},$h=new Set(["none","hidden"]);function aI(t,e){return $h.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function lI(t,e){return n=>ot(t,e,n)}function Bm(t){return typeof t=="number"?lI:typeof t=="string"?Fm(t)?uu:qt.test(t)?ov:dI:Array.isArray(t)?Mw:typeof t=="object"?qt.test(t)?ov:cI:uu}function Mw(t,e){const n=[...t],i=n.length,r=t.map((o,s)=>Bm(o)(o,e[s]));return o=>{for(let s=0;s<i;s++)n[s]=r[s](o);return n}}function cI(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Bm(t[r])(t[r],e[r]));return r=>{for(const o in i)n[o]=i[o](r);return n}}function uI(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],s=t.indexes[o][i[o]],a=t.values[s]??0;n[r]=a,i[o]++}return n}const dI=(t,e)=>{const n=Lr.createTransformer(e),i=Ka(t),r=Ka(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?$h.has(t)&&!r.values.length||$h.has(e)&&!i.values.length?aI(t,e):pl(Mw(uI(i,r),r.values),n):uu(t,e)};function Tw(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ot(t,e,n):Bm(t)(t,e)}const fI=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>lt.update(e,n),stop:()=>Rr(e),now:()=>Ft.isProcessing?Ft.timestamp:gn.now()}},Aw=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let o=0;o<r;o++)i+=t(o/(r-1))+", ";return`linear(${i.substring(0,i.length-2)})`},du=2e4;function Vm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<du;)e+=n,i=t.next(e);return e>=du?1/0:e}function hI(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Vm(i),du);return{type:"keyframes",ease:o=>i.next(r*o).value/e,duration:wi(r)}}const pI=5;function Cw(t,e,n){const i=Math.max(e-pI,0);return aw(n-t(i),e-i)}const dt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},xf=.001;function mI({duration:t=dt.duration,bounce:e=dt.bounce,velocity:n=dt.velocity,mass:i=dt.mass}){let r,o,s=1-e;s=Yi(dt.minDamping,dt.maxDamping,s),t=Yi(dt.minDuration,dt.maxDuration,wi(t)),s<1?(r=c=>{const u=c*s,d=u*t,h=u-n,p=Xh(c,s),v=Math.exp(-d);return xf-h/p*v},o=c=>{const d=c*s*t,h=d*n+n,p=Math.pow(s,2)*Math.pow(c,2)*t,v=Math.exp(-d),x=Xh(Math.pow(c,2),s);return(-r(c)+xf>0?-1:1)*((h-p)*v)/x}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-xf+u*d},o=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=xI(r,o,a);if(t=Si(t),isNaN(l))return{stiffness:dt.stiffness,damping:dt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:s*2*Math.sqrt(i*c),duration:t}}}const gI=12;function xI(t,e,n){let i=n;for(let r=1;r<gI;r++)i=i-t(i)/e(i);return i}function Xh(t,e){return t*Math.sqrt(1-e*e)}const vI=["duration","bounce"],yI=["stiffness","damping","mass"];function sv(t,e){return e.some(n=>t[n]!==void 0)}function _I(t){let e={velocity:dt.velocity,stiffness:dt.stiffness,damping:dt.damping,mass:dt.mass,isResolvedFromDuration:!1,...t};if(!sv(t,yI)&&sv(t,vI))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,o=2*Yi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:dt.mass,stiffness:r,damping:o}}else{const n=mI(t);e={...e,...n,mass:dt.mass},e.isResolvedFromDuration=!0}return e}function fu(t=dt.visualDuration,e=dt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:c,mass:u,duration:d,velocity:h,isResolvedFromDuration:p}=_I({...n,velocity:-wi(n.velocity||0)}),v=h||0,x=c/(2*Math.sqrt(l*u)),g=s-o,f=wi(Math.sqrt(l/u)),m=Math.abs(g)<5;i||(i=m?dt.restSpeed.granular:dt.restSpeed.default),r||(r=m?dt.restDelta.granular:dt.restDelta.default);let y;if(x<1){const S=Xh(f,x);y=E=>{const M=Math.exp(-x*f*E);return s-M*((v+x*f*g)/S*Math.sin(S*E)+g*Math.cos(S*E))}}else if(x===1)y=S=>s-Math.exp(-f*S)*(g+(v+f*g)*S);else{const S=f*Math.sqrt(x*x-1);y=E=>{const M=Math.exp(-x*f*E),P=Math.min(S*E,300);return s-M*((v+x*f*g)*Math.sinh(P)+S*g*Math.cosh(P))/S}}const w={calculatedDuration:p&&d||null,next:S=>{const E=y(S);if(p)a.done=S>=d;else{let M=S===0?v:0;x<1&&(M=S===0?Si(v):Cw(y,S,E));const P=Math.abs(M)<=i,b=Math.abs(s-E)<=r;a.done=P&&b}return a.value=a.done?s:E,a},toString:()=>{const S=Math.min(Vm(w),du),E=Aw(M=>w.next(S*M).value,S,30);return S+"ms "+E},toTransition:()=>{}};return w}fu.applyToOptions=t=>{const e=hI(t,100,fu);return t.ease=e.ease,t.duration=Si(e.duration),t.type="keyframes",t};function Yh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],h={done:!1,value:d},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,v=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let x=n*e;const g=d+x,f=s===void 0?g:s(g);f!==g&&(x=f-d);const m=P=>-x*Math.exp(-P/i),y=P=>f+m(P),w=P=>{const b=m(P),C=y(P);h.done=Math.abs(b)<=c,h.value=h.done?f:C};let S,E;const M=P=>{p(h.value)&&(S=P,E=fu({keyframes:[h.value,v(h.value)],velocity:Cw(y,P,h.value),damping:r,stiffness:o,restDelta:c,restSpeed:u}))};return M(0),{calculatedDuration:null,next:P=>{let b=!1;return!E&&S===void 0&&(b=!0,w(P),M(P)),S!==void 0&&P>=S?E.next(P-S):(!b&&w(P),h)}}}function SI(t,e,n){const i=[],r=n||qi.mix||Tw,o=t.length-1;for(let s=0;s<o;s++){let a=r(t[s],t[s+1]);if(e){const l=Array.isArray(e)?e[s]||jn:e;a=pl(l,a)}i.push(a)}return i}function wI(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const o=t.length;if(Pm(o===e.length),o===1)return()=>e[0];if(o===2&&e[0]===e[1])return()=>e[1];const s=t[0]===t[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=SI(e,i,r),l=a.length,c=u=>{if(s&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const h=Ya(t[d],t[d+1],u);return a[d](h)};return n?u=>c(Yi(t[0],t[o-1],u)):c}function bI(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ya(0,e,i);t.push(ot(n,1,r))}}function EI(t){const e=[0];return bI(e,t.length-1),e}function MI(t,e){return t.map(n=>n*e)}function TI(t,e){return t.map(()=>e||gw).splice(0,t.length-1)}function _a({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=FD(i)?i.map(ev):ev(i),o={done:!1,value:e[0]},s=MI(n&&n.length===e.length?n:EI(e),t),a=wI(s,e,{ease:Array.isArray(r)?r:TI(e,r)});return{calculatedDuration:t,next:l=>(o.value=a(l),o.done=l>=t,o)}}const AI=t=>t!==null;function Hm(t,{repeat:e,repeatType:n="loop"},i,r=1){const o=t.filter(AI),a=r<0||e&&n!=="loop"&&e%2===1?0:o.length-1;return!a||i===void 0?o[a]:i}const CI={decay:Yh,inertia:Yh,tween:_a,keyframes:_a,spring:fu};function Rw(t){typeof t.type=="string"&&(t.type=CI[t.type])}class Gm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const RI=t=>t/100;class jm extends Gm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==gn.now()&&this.tick(gn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Rw(e);const{type:n=_a,repeat:i=0,repeatDelay:r=0,repeatType:o,velocity:s=0}=e;let{keyframes:a}=e;const l=n||_a;l!==_a&&typeof a[0]!="number"&&(this.mixKeyframes=pl(RI,Tw(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});o==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=Vm(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:h,repeatDelay:p,type:v,onUpdate:x,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const f=this.currentTime-c*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?f<0:f>r;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let y=this.currentTime,w=i;if(d){const P=Math.min(this.currentTime,r)/a;let b=Math.floor(P),C=P%1;!C&&P>=1&&(C=1),C===1&&b--,b=Math.min(b,d+1),!!(b%2)&&(h==="reverse"?(C=1-C,p&&(C-=p/a)):h==="mirror"&&(w=s)),y=Yi(0,1,C)*a}const S=m?{done:!1,value:u[0]}:w.next(y);o&&(S.value=o(S.value));let{done:E}=S;!m&&l!==null&&(E=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const M=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return M&&v!==Yh&&(S.value=Hm(u,this.options,g,this.speed)),x&&x(S.value),M&&this.finish(),S}then(e,n){return this.finished.then(e,n)}get duration(){return wi(this.calculatedDuration)}get time(){return wi(this.currentTime)}set time(e){var n;e=Si(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(gn.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=wi(this.currentTime))}play(){var r,o;if(this.isStopped)return;const{driver:e=fI,startTime:n}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),(o=(r=this.options).onPlay)==null||o.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(gn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function LI(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const io=t=>t*180/Math.PI,qh=t=>{const e=io(Math.atan2(t[1],t[0]));return Kh(e)},PI={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:qh,rotateZ:qh,skewX:t=>io(Math.atan(t[1])),skewY:t=>io(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Kh=t=>(t=t%360,t<0&&(t+=360),t),av=qh,lv=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),cv=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),DI={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:lv,scaleY:cv,scale:t=>(lv(t)+cv(t))/2,rotateX:t=>Kh(io(Math.atan2(t[6],t[5]))),rotateY:t=>Kh(io(Math.atan2(-t[2],t[0]))),rotateZ:av,rotate:av,skewX:t=>io(Math.atan(t[4])),skewY:t=>io(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Zh(t){return t.includes("scale")?1:0}function Qh(t,e){if(!t||t==="none")return Zh(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=DI,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=PI,r=a}if(!r)return Zh(e);const o=i[e],s=r[1].split(",").map(UI);return typeof o=="function"?o(s):s[o]}const II=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Qh(n,e)};function UI(t){return parseFloat(t.trim())}const zs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Bs=(()=>new Set(zs))(),uv=t=>t===Os||t===Ee,kI=new Set(["x","y","z"]),NI=zs.filter(t=>!kI.has(t));function FI(t){const e=[];return NI.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const co={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Qh(e,"x"),y:(t,{transform:e})=>Qh(e,"y")};co.translateX=co.x;co.translateY=co.y;const uo=new Set;let Jh=!1,ep=!1,tp=!1;function Lw(){if(ep){const t=Array.from(uo).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=FI(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([o,s])=>{var a;(a=i.getValue(o))==null||a.set(s)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}ep=!1,Jh=!1,uo.forEach(t=>t.complete(tp)),uo.clear()}function Pw(){uo.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ep=!0)})}function OI(){tp=!0,Pw(),Lw(),tp=!1}class Wm{constructor(e,n,i,r,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(uo.add(this),Jh||(Jh=!0,lt.read(Pw),lt.resolveKeyframes(Lw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const o=r==null?void 0:r.get(),s=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const a=i.readValue(n,s);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=s),r&&o===void 0&&r.set(e[0])}LI(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),uo.delete(this)}cancel(){this.state==="scheduled"&&(uo.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const zI=t=>t.startsWith("--");function BI(t,e,n){zI(e)?t.style.setProperty(e,n):t.style[e]=n}const VI=Dm(()=>window.ScrollTimeline!==void 0),HI={};function GI(t,e){const n=Dm(t);return()=>HI[e]??n()}const Dw=GI(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),la=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,dv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:la([0,.65,.55,1]),circOut:la([.55,0,1,.45]),backIn:la([.31,.01,.66,-.59]),backOut:la([.33,1.53,.69,.99])};function Iw(t,e){if(t)return typeof t=="function"?Dw()?Aw(t,e):"ease-out":xw(t)?la(t):Array.isArray(t)?t.map(n=>Iw(n,e)||dv.easeOut):dv[t]}function jI(t,e,n,{delay:i=0,duration:r=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=Iw(a,r);Array.isArray(d)&&(u.easing=d);const h={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),t.animate(u,h)}function Uw(t){return typeof t=="function"&&"applyToOptions"in t}function WI({type:t,...e}){return Uw(t)&&Dw()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class $I extends Gm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=e,Pm(typeof e.type!="string");const c=WI(e);this.animation=jI(n,i,r,c,o),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const u=Hm(r,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(u):BI(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,n;this.isPseudoElement||(n=(e=this.animation).commitStyles)==null||n.call(e)}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return wi(Number(e))}get time(){return wi(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Si(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&VI()?(this.animation.timeline=e,jn):n(this)}}const kw={anticipate:hw,backInOut:fw,circInOut:mw};function XI(t){return t in kw}function YI(t){typeof t.ease=="string"&&XI(t.ease)&&(t.ease=kw[t.ease])}const fv=10;class qI extends $I{constructor(e){YI(e),Rw(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:o,...s}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new jm({...s,autoplay:!1}),l=Si(this.finishedTime??this.time);n.setWithVelocity(a.sample(l-fv).value,a.sample(l).value,fv),a.stop()}}const hv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Lr.test(t)||t==="0")&&!t.startsWith("url("));function KI(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function ZI(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const o=t[t.length-1],s=hv(r,e),a=hv(o,e);return!s||!a?!1:KI(t)||(n==="spring"||Uw(n))&&i}function Nw(t){return ow(t)&&"offsetHeight"in t}const QI=new Set(["opacity","clipPath","filter","transform"]),JI=Dm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function eU(t){var c;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:o,type:s}=t;if(!Nw((c=e==null?void 0:e.owner)==null?void 0:c.current))return!1;const{onUpdate:a,transformTemplate:l}=e.owner.getProps();return JI()&&n&&QI.has(n)&&(n!=="transform"||!l)&&!a&&!i&&r!=="mirror"&&o!==0&&s!=="inertia"}const tU=40;class nU extends Gm{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:l,motionValue:c,element:u,...d}){var v;super(),this.stop=()=>{var x,g;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(g=this.keyframeResolver)==null||g.cancel()},this.createdAt=gn.now();const h={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:o,repeatType:s,name:l,motionValue:c,element:u,...d},p=(u==null?void 0:u.KeyframeResolver)||Wm;this.keyframeResolver=new p(a,(x,g,f)=>this.onKeyframesResolved(x,g,h,!f),l,c,u),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(e,n,i,r){this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=gn.now(),ZI(e,o,s,a)||((qi.instantAnimations||!l)&&(u==null||u(Hm(e,i,n))),e[0]=e[e.length-1],i.duration=0,i.repeat=0);const h={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>tU?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},p=!c&&eU(h)?new qI({...h,element:h.motionValue.owner.current}):new jm(h);p.finished.then(()=>this.notifyFinished()).catch(jn),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),OI()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const iU=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function rU(t){const e=iU.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function Fw(t,e,n=1){const[i,r]=rU(t);if(!i)return;const o=window.getComputedStyle(e).getPropertyValue(i);if(o){const s=o.trim();return rw(s)?parseFloat(s):s}return Fm(r)?Fw(r,e,n+1):r}function $m(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const Ow=new Set(["width","height","top","left","right","bottom",...zs]),oU={test:t=>t==="auto",parse:t=>t},zw=t=>e=>e.test(t),Bw=[Os,Ee,bi,cr,KD,qD,oU],pv=t=>Bw.find(zw(t));function sU(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||sw(t):!0}const aU=new Set(["brightness","contrast","saturate","opacity"]);function lU(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Om)||[];if(!i)return t;const r=n.replace(i,"");let o=aU.has(e)?1:0;return i!==n&&(o*=100),e+"("+o+r+")"}const cU=/\b([a-z-]*)\(.*?\)/gu,np={...Lr,getAnimatableNone:t=>{const e=t.match(cU);return e?e.map(lU).join(" "):t}},mv={...Os,transform:Math.round},uU={rotate:cr,rotateX:cr,rotateY:cr,rotateZ:cr,scale:lc,scaleX:lc,scaleY:lc,scaleZ:lc,skew:cr,skewX:cr,skewY:cr,distance:Ee,translateX:Ee,translateY:Ee,translateZ:Ee,x:Ee,y:Ee,z:Ee,perspective:Ee,transformPerspective:Ee,opacity:qa,originX:nv,originY:nv,originZ:Ee},Xm={borderWidth:Ee,borderTopWidth:Ee,borderRightWidth:Ee,borderBottomWidth:Ee,borderLeftWidth:Ee,borderRadius:Ee,radius:Ee,borderTopLeftRadius:Ee,borderTopRightRadius:Ee,borderBottomRightRadius:Ee,borderBottomLeftRadius:Ee,width:Ee,maxWidth:Ee,height:Ee,maxHeight:Ee,top:Ee,right:Ee,bottom:Ee,left:Ee,padding:Ee,paddingTop:Ee,paddingRight:Ee,paddingBottom:Ee,paddingLeft:Ee,margin:Ee,marginTop:Ee,marginRight:Ee,marginBottom:Ee,marginLeft:Ee,backgroundPositionX:Ee,backgroundPositionY:Ee,...uU,zIndex:mv,fillOpacity:qa,strokeOpacity:qa,numOctaves:mv},dU={...Xm,color:qt,backgroundColor:qt,outlineColor:qt,fill:qt,stroke:qt,borderColor:qt,borderTopColor:qt,borderRightColor:qt,borderBottomColor:qt,borderLeftColor:qt,filter:np,WebkitFilter:np},Vw=t=>dU[t];function Hw(t,e){let n=Vw(t);return n!==np&&(n=Lr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const fU=new Set(["auto","none","0"]);function hU(t,e,n){let i=0,r;for(;i<t.length&&!r;){const o=t[i];typeof o=="string"&&!fU.has(o)&&Ka(o).values.length&&(r=t[i]),i++}if(r&&n)for(const o of e)t[o]=Hw(n,r)}class pU extends Wm{constructor(e,n,i,r,o){super(e,n,i,r,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Fm(c))){const u=Fw(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Ow.has(i)||e.length!==2)return;const[r,o]=e,s=pv(r),a=pv(o);if(s!==a)if(uv(s)&&uv(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else co[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||sU(e[r]))&&i.push(r);i.length&&hU(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=co[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const o=i.length-1,s=i[o];i[o]=co[n](e.measureViewportBox(),window.getComputedStyle(e.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function mU(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;e&&(i=e.current);const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}const Gw=(t,e)=>e&&typeof t=="number"?e.transform(t):t,gv=30,gU=t=>!isNaN(parseFloat(t));class xU{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{var s,a;const o=gn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty();r&&((a=this.events.renderRequest)==null||a.notify(this.current))},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=gn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=gU(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Im);const i=this.events[e].add(n);return e==="change"?()=>{i(),lt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=gn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>gv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,gv);return aw(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Cs(t,e){return new xU(t,e)}const{schedule:Ym,cancel:SV}=vw(queueMicrotask,!1),Jn={x:!1,y:!1};function jw(){return Jn.x||Jn.y}function vU(t){return t==="x"||t==="y"?Jn[t]?null:(Jn[t]=!0,()=>{Jn[t]=!1}):Jn.x||Jn.y?null:(Jn.x=Jn.y=!0,()=>{Jn.x=Jn.y=!1})}function Ww(t,e){const n=mU(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function xv(t){return!(t.pointerType==="touch"||jw())}function yU(t,e,n={}){const[i,r,o]=Ww(t,n),s=a=>{if(!xv(a))return;const{target:l}=a,c=e(l,a);if(typeof c!="function"||!l)return;const u=d=>{xv(d)&&(c(d),l.removeEventListener("pointerleave",u))};l.addEventListener("pointerleave",u,r)};return i.forEach(a=>{a.addEventListener("pointerenter",s,r)}),o}const $w=(t,e)=>e?t===e?!0:$w(t,e.parentElement):!1,qm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,_U=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function SU(t){return _U.has(t.tagName)||t.tabIndex!==-1}const kc=new WeakSet;function vv(t){return e=>{e.key==="Enter"&&t(e)}}function vf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const wU=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=vv(()=>{if(kc.has(n))return;vf(n,"down");const r=vv(()=>{vf(n,"up")}),o=()=>vf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",o,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function yv(t){return qm(t)&&!jw()}function bU(t,e,n={}){const[i,r,o]=Ww(t,n),s=a=>{const l=a.currentTarget;if(!yv(a))return;kc.add(l);const c=e(l,a),u=(p,v)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),kc.has(l)&&kc.delete(l),yv(p)&&typeof c=="function"&&c(p,{success:v})},d=p=>{u(p,l===window||l===document||n.useGlobalTarget||$w(l,p.target))},h=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,r),Nw(a)&&(a.addEventListener("focus",c=>wU(c,r)),!SU(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function Xw(t){return ow(t)&&"ownerSVGElement"in t}function EU(t){return Xw(t)&&t.tagName==="svg"}const Qt=t=>!!(t&&t.getVelocity),MU=[...Bw,qt,Lr],TU=t=>MU.find(zw(t)),Yw=R.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function AU(t=!0){const e=R.useContext(Cm);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,o=R.useId();R.useEffect(()=>{if(t)return r(o)},[t]);const s=R.useCallback(()=>t&&i&&i(o),[o,i,t]);return!n&&i?[!1,s]:[!0]}const qw=R.createContext({strict:!1}),_v={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Rs={};for(const t in _v)Rs[t]={isEnabled:e=>_v[t].some(n=>!!e[n])};function CU(t){for(const e in t)Rs[e]={...Rs[e],...t[e]}}const RU=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function hu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||RU.has(t)}let Kw=t=>!hu(t);function LU(t){t&&(Kw=e=>e.startsWith("on")?!hu(e):t(e))}try{LU(require("@emotion/is-prop-valid").default)}catch{}function PU(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(Kw(r)||n===!0&&hu(r)||!e&&!hu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function DU(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const Zu=R.createContext({});function Qu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Za(t){return typeof t=="string"||Array.isArray(t)}const Km=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zm=["initial",...Km];function Ju(t){return Qu(t.animate)||Zm.some(e=>Za(t[e]))}function Zw(t){return!!(Ju(t)||t.variants)}function IU(t,e){if(Ju(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Za(n)?n:void 0,animate:Za(i)?i:void 0}}return t.inherit!==!1?e:{}}function UU(t){const{initial:e,animate:n}=IU(t,R.useContext(Zu));return R.useMemo(()=>({initial:e,animate:n}),[Sv(e),Sv(n)])}function Sv(t){return Array.isArray(t)?t.join(" "):t}const kU=Symbol.for("motionComponentSymbol");function ns(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function NU(t,e,n){return R.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):ns(n)&&(n.current=i))},[e])}const Qm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),FU="framerAppearId",Qw="data-"+Qm(FU),Jw=R.createContext({});function OU(t,e,n,i,r){var x,g;const{visualElement:o}=R.useContext(Zu),s=R.useContext(qw),a=R.useContext(Cm),l=R.useContext(Yw).reducedMotion,c=R.useRef(null);i=i||s.renderer,!c.current&&i&&(c.current=i(t,{visualState:e,parent:o,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const u=c.current,d=R.useContext(Jw);u&&!u.projection&&r&&(u.type==="html"||u.type==="svg")&&zU(c.current,n,r,d);const h=R.useRef(!1);R.useInsertionEffect(()=>{u&&h.current&&u.update(n,a)});const p=n[Qw],v=R.useRef(!!p&&!((x=window.MotionHandoffIsComplete)!=null&&x.call(window,p))&&((g=window.MotionHasOptimisedAnimation)==null?void 0:g.call(window,p)));return LD(()=>{u&&(h.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),Ym.render(u.render),v.current&&u.animationState&&u.animationState.animateChanges())}),R.useEffect(()=>{u&&(!v.current&&u.animationState&&u.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)==null||f.call(window,p)}),v.current=!1))}),u}function zU(t,e,n,i){const{layoutId:r,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:eb(t.parent)),t.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:!!s||a&&ns(a),visualElement:t,animationType:typeof o=="string"?o:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}function eb(t){if(t)return t.options.allowProjection!==!1?t.projection:eb(t.parent)}function BU({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&CU(t);function o(a,l){let c;const u={...R.useContext(Yw),...a,layoutId:VU(a)},{isStatic:d}=u,h=UU(a),p=i(a,d);if(!d&&Am){HU();const v=GU(u);c=v.MeasureLayout,h.visualElement=OU(r,p,u,e,v.ProjectionNode)}return _.jsxs(Zu.Provider,{value:h,children:[c&&h.visualElement?_.jsx(c,{visualElement:h.visualElement,...u}):null,n(r,a,NU(p,h.visualElement,l),p,d,h.visualElement)]})}o.displayName=`motion.${typeof r=="string"?r:`create(${r.displayName??r.name??""})`}`;const s=R.forwardRef(o);return s[kU]=r,s}function VU({layoutId:t}){const e=R.useContext(iw).id;return e&&t!==void 0?e+"-"+t:t}function HU(t,e){R.useContext(qw).strict}function GU(t){const{drag:e,layout:n}=Rs;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Qa={};function jU(t){for(const e in t)Qa[e]=t[e],Nm(e)&&(Qa[e].isCSSVariable=!0)}function tb(t,{layout:e,layoutId:n}){return Bs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Qa[t]||t==="opacity")}const WU={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$U=zs.length;function XU(t,e,n){let i="",r=!0;for(let o=0;o<$U;o++){const s=zs[o],a=t[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=Gw(a,Xm[s]);if(!l){r=!1;const u=WU[s]||s;i+=`${u}(${c}) `}n&&(e[s]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Jm(t,e,n){const{style:i,vars:r,transformOrigin:o}=t;let s=!1,a=!1;for(const l in e){const c=e[l];if(Bs.has(l)){s=!0;continue}else if(Nm(l)){r[l]=c;continue}else{const u=Gw(c,Xm[l]);l.startsWith("origin")?(a=!0,o[l]=u):i[l]=u}}if(e.transform||(s||n?i.transform=XU(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=o;i.transformOrigin=`${l} ${c} ${u}`}}const eg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function nb(t,e,n){for(const i in e)!Qt(e[i])&&!tb(i,n)&&(t[i]=e[i])}function YU({transformTemplate:t},e){return R.useMemo(()=>{const n=eg();return Jm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function qU(t,e){const n=t.style||{},i={};return nb(i,n,t),Object.assign(i,YU(t,e)),i}function KU(t,e){const n={},i=qU(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const ZU={offset:"stroke-dashoffset",array:"stroke-dasharray"},QU={offset:"strokeDashoffset",array:"strokeDasharray"};function JU(t,e,n=1,i=0,r=!0){t.pathLength=1;const o=r?ZU:QU;t[o.offset]=Ee.transform(-i);const s=Ee.transform(e),a=Ee.transform(n);t[o.array]=`${s} ${a}`}function ib(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:o=1,pathOffset:s=0,...a},l,c,u){if(Jm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:h}=t;d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&JU(d,r,o,s,!1)}const rb=()=>({...eg(),attrs:{}}),ob=t=>typeof t=="string"&&t.toLowerCase()==="svg";function ek(t,e,n,i){const r=R.useMemo(()=>{const o=rb();return ib(o,e,ob(i),t.transformTemplate,t.style),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};nb(o,t.style,t),r.style={...o,...r.style}}return r}const tk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tg(t){return typeof t!="string"||t.includes("-")?!1:!!(tk.indexOf(t)>-1||/[A-Z]/u.test(t))}function nk(t=!1){return(n,i,r,{latestValues:o},s)=>{const l=(tg(n)?ek:KU)(i,o,s,n),c=PU(i,typeof n=="string",t),u=n!==R.Fragment?{...c,...l,ref:r}:{},{children:d}=i,h=R.useMemo(()=>Qt(d)?d.get():d,[d]);return R.createElement(n,{...u,children:h})}}function wv(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function ng(t,e,n,i){if(typeof e=="function"){const[r,o]=wv(i);e=e(n!==void 0?n:t.custom,r,o)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,o]=wv(i);e=e(n!==void 0?n:t.custom,r,o)}return e}function Nc(t){return Qt(t)?t.get():t}function ik({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:rk(n,i,r,t),renderState:e()}}const sb=t=>(e,n)=>{const i=R.useContext(Zu),r=R.useContext(Cm),o=()=>ik(t,e,i,r);return n?o():RD(o)};function rk(t,e,n,i){const r={},o=i(t,{});for(const h in o)r[h]=Nc(o[h]);let{initial:s,animate:a}=t;const l=Ju(t),c=Zw(t);e&&c&&!l&&t.inherit!==!1&&(s===void 0&&(s=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||s===!1;const d=u?a:s;if(d&&typeof d!="boolean"&&!Qu(d)){const h=Array.isArray(d)?d:[d];for(let p=0;p<h.length;p++){const v=ng(t,h[p]);if(v){const{transitionEnd:x,transition:g,...f}=v;for(const m in f){let y=f[m];if(Array.isArray(y)){const w=u?y.length-1:0;y=y[w]}y!==null&&(r[m]=y)}for(const m in x)r[m]=x[m]}}}return r}function ig(t,e,n){var o;const{style:i}=t,r={};for(const s in i)(Qt(i[s])||e.style&&Qt(e.style[s])||tb(s,t)||((o=n==null?void 0:n.getValue(s))==null?void 0:o.liveStyle)!==void 0)&&(r[s]=i[s]);return r}const ok={useVisualState:sb({scrapeMotionValuesFromProps:ig,createRenderState:eg})};function ab(t,e,n){const i=ig(t,e,n);for(const r in t)if(Qt(t[r])||Qt(e[r])){const o=zs.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[o]=t[r]}return i}const sk={useVisualState:sb({scrapeMotionValuesFromProps:ab,createRenderState:rb})};function ak(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const s={...tg(i)?sk:ok,preloadedFeatures:t,useRender:nk(r),createVisualElement:e,Component:i};return BU(s)}}function Ja(t,e,n){const i=t.getProps();return ng(i,e,n!==void 0?n:i.custom,t)}const ip=t=>Array.isArray(t);function lk(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Cs(n))}function ck(t){return ip(t)?t[t.length-1]||0:t}function uk(t,e){const n=Ja(t,e);let{transitionEnd:i={},transition:r={},...o}=n||{};o={...o,...i};for(const s in o){const a=ck(o[s]);lk(t,s,a)}}function dk(t){return!!(Qt(t)&&t.add)}function rp(t,e){const n=t.getValue("willChange");if(dk(n))return n.add(e);if(!n&&qi.WillChange){const i=new qi.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function lb(t){return t.props[Qw]}const fk=t=>t!==null;function hk(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(fk),o=e&&n!=="loop"&&e%2===1?0:r.length-1;return!o||i===void 0?r[o]:i}const pk={type:"spring",stiffness:500,damping:25,restSpeed:10},mk=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),gk={type:"keyframes",duration:.8},xk={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},vk=(t,{keyframes:e})=>e.length>2?gk:Bs.has(t)?t.startsWith("scale")?mk(e[1]):pk:xk;function yk({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const rg=(t,e,n,i={},r,o)=>s=>{const a=$m(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Si(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:o?void 0:r};yk(a)||Object.assign(u,vk(t,u)),u.duration&&(u.duration=Si(u.duration)),u.repeatDelay&&(u.repeatDelay=Si(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),(qi.instantAnimations||qi.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!o&&e.get()!==void 0){const h=hk(u.keyframes,a);if(h!==void 0){lt.update(()=>{u.onUpdate(h),u.onComplete()});return}}return a.isSync?new jm(u):new nU(u)};function _k({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function cb(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:s,...a}=e;i&&(o=i);const l=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const u in a){const d=t.getValue(u,t.latestValues[u]??null),h=a[u];if(h===void 0||c&&_k(c,u))continue;const p={delay:n,...$m(o||{},u)},v=d.get();if(v!==void 0&&!d.isAnimating&&!Array.isArray(h)&&h===v&&!p.velocity)continue;let x=!1;if(window.MotionHandoffAnimation){const f=lb(t);if(f){const m=window.MotionHandoffAnimation(f,u,lt);m!==null&&(p.startTime=m,x=!0)}}rp(t,u),d.start(rg(u,d,h,t.shouldReduceMotion&&Ow.has(u)?{type:!1}:p,t,x));const g=d.animation;g&&l.push(g)}return s&&Promise.all(l).then(()=>{lt.update(()=>{s&&uk(t,s)})}),l}function op(t,e,n={}){var l;const i=Ja(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const o=i?()=>Promise.all(cb(t,i,n)):()=>Promise.resolve(),s=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=r;return Sk(t,e,u+c,d,h,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[o,s]:[s,o];return c().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function Sk(t,e,n=0,i=0,r=1,o){const s=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(wk).forEach((c,u)=>{c.notify("AnimationStart",e),s.push(op(c,e,{...o,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(s)}function wk(t,e){return t.sortNodePosition(e)}function bk(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(o=>op(t,o,n));i=Promise.all(r)}else if(typeof e=="string")i=op(t,e,n);else{const r=typeof e=="function"?Ja(t,e,n.custom):e;i=Promise.all(cb(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}function ub(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const Ek=Zm.length;function db(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?db(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Ek;n++){const i=Zm[n],r=t.props[i];(Za(r)||r===!1)&&(e[i]=r)}return e}const Mk=[...Km].reverse(),Tk=Km.length;function Ak(t){return e=>Promise.all(e.map(({animation:n,options:i})=>bk(t,n,i)))}function Ck(t){let e=Ak(t),n=bv(),i=!0;const r=l=>(c,u)=>{var h;const d=Ja(t,u,l==="exit"?(h=t.presenceContext)==null?void 0:h.custom:void 0);if(d){const{transition:p,transitionEnd:v,...x}=d;c={...c,...x,...v}}return c};function o(l){e=l(t)}function s(l){const{props:c}=t,u=db(t.parent)||{},d=[],h=new Set;let p={},v=1/0;for(let g=0;g<Tk;g++){const f=Mk[g],m=n[f],y=c[f]!==void 0?c[f]:u[f],w=Za(y),S=f===l?m.isActive:null;S===!1&&(v=g);let E=y===u[f]&&y!==c[f]&&w;if(E&&i&&t.manuallyAnimateOnMount&&(E=!1),m.protectedKeys={...p},!m.isActive&&S===null||!y&&!m.prevProp||Qu(y)||typeof y=="boolean")continue;const M=Rk(m.prevProp,y);let P=M||f===l&&m.isActive&&!E&&w||g>v&&w,b=!1;const C=Array.isArray(y)?y:[y];let F=C.reduce(r(f),{});S===!1&&(F={});const{prevResolvedValues:O={}}=m,I={...O,...F},z=$=>{P=!0,h.has($)&&(b=!0,h.delete($)),m.needsAnimating[$]=!0;const U=t.getValue($);U&&(U.liveStyle=!1)};for(const $ in I){const U=F[$],j=O[$];if(p.hasOwnProperty($))continue;let G=!1;ip(U)&&ip(j)?G=!ub(U,j):G=U!==j,G?U!=null?z($):h.add($):U!==void 0&&h.has($)?z($):m.protectedKeys[$]=!0}m.prevProp=y,m.prevResolvedValues=F,m.isActive&&(p={...p,...F}),i&&t.blockInitialAnimation&&(P=!1),P&&(!(E&&M)||b)&&d.push(...C.map($=>({animation:$,options:{type:f}})))}if(h.size){const g={};if(typeof c.initial!="boolean"){const f=Ja(t,Array.isArray(c.initial)?c.initial[0]:c.initial);f&&f.transition&&(g.transition=f.transition)}h.forEach(f=>{const m=t.getBaseTarget(f),y=t.getValue(f);y&&(y.liveStyle=!0),g[f]=m??null}),d.push({animation:g})}let x=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(x=!1),i=!1,x?e(d):Promise.resolve()}function a(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(h=>{var p;return(p=h.animationState)==null?void 0:p.setActive(l,c)}),n[l].isActive=c;const u=s(l);for(const h in n)n[h].protectedKeys={};return u}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=bv(),i=!0}}}function Rk(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!ub(e,t):!1}function Gr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function bv(){return{animate:Gr(!0),whileInView:Gr(),whileHover:Gr(),whileTap:Gr(),whileDrag:Gr(),whileFocus:Gr(),exit:Gr()}}class Nr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Lk extends Nr{constructor(e){super(e),e.animationState||(e.animationState=Ck(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Qu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let Pk=0;class Dk extends Nr{constructor(){super(...arguments),this.id=Pk++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const Ik={animation:{Feature:Lk},exit:{Feature:Dk}};function el(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function xl(t){return{point:{x:t.pageX,y:t.pageY}}}const Uk=t=>e=>qm(e)&&t(e,xl(e));function Sa(t,e,n,i){return el(t,e,Uk(n),i)}function fb({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function kk({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Nk(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}const hb=1e-4,Fk=1-hb,Ok=1+hb,pb=.01,zk=0-pb,Bk=0+pb;function an(t){return t.max-t.min}function Vk(t,e,n){return Math.abs(t-e)<=n}function Ev(t,e,n,i=.5){t.origin=i,t.originPoint=ot(e.min,e.max,t.origin),t.scale=an(n)/an(e),t.translate=ot(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Fk&&t.scale<=Ok||isNaN(t.scale))&&(t.scale=1),(t.translate>=zk&&t.translate<=Bk||isNaN(t.translate))&&(t.translate=0)}function wa(t,e,n,i){Ev(t.x,e.x,n.x,i?i.originX:void 0),Ev(t.y,e.y,n.y,i?i.originY:void 0)}function Mv(t,e,n){t.min=n.min+e.min,t.max=t.min+an(e)}function Hk(t,e,n){Mv(t.x,e.x,n.x),Mv(t.y,e.y,n.y)}function Tv(t,e,n){t.min=e.min-n.min,t.max=t.min+an(e)}function ba(t,e,n){Tv(t.x,e.x,n.x),Tv(t.y,e.y,n.y)}const Av=()=>({translate:0,scale:1,origin:0,originPoint:0}),is=()=>({x:Av(),y:Av()}),Cv=()=>({min:0,max:0}),gt=()=>({x:Cv(),y:Cv()});function On(t){return[t("x"),t("y")]}function yf(t){return t===void 0||t===1}function sp({scale:t,scaleX:e,scaleY:n}){return!yf(t)||!yf(e)||!yf(n)}function qr(t){return sp(t)||mb(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function mb(t){return Rv(t.x)||Rv(t.y)}function Rv(t){return t&&t!=="0%"}function pu(t,e,n){const i=t-n,r=e*i;return n+r}function Lv(t,e,n,i,r){return r!==void 0&&(t=pu(t,r,i)),pu(t,n,i)+e}function ap(t,e=0,n=1,i,r){t.min=Lv(t.min,e,n,i,r),t.max=Lv(t.max,e,n,i,r)}function gb(t,{x:e,y:n}){ap(t.x,e.translate,e.scale,e.originPoint),ap(t.y,n.translate,n.scale,n.originPoint)}const Pv=.999999999999,Dv=1.0000000000001;function Gk(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let o,s;for(let a=0;a<r;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&o.options.layoutScroll&&o.scroll&&o!==o.root&&os(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(e.x*=s.x.scale,e.y*=s.y.scale,gb(t,s)),i&&qr(o.latestValues)&&os(t,o.latestValues))}e.x<Dv&&e.x>Pv&&(e.x=1),e.y<Dv&&e.y>Pv&&(e.y=1)}function rs(t,e){t.min=t.min+e,t.max=t.max+e}function Iv(t,e,n,i,r=.5){const o=ot(t.min,t.max,r);ap(t,e,n,o,i)}function os(t,e){Iv(t.x,e.x,e.scaleX,e.scale,e.originX),Iv(t.y,e.y,e.scaleY,e.scale,e.originY)}function xb(t,e){return fb(Nk(t.getBoundingClientRect(),e))}function jk(t,e,n){const i=xb(t,n),{scroll:r}=e;return r&&(rs(i.x,r.offset.x),rs(i.y,r.offset.y)),i}const vb=({current:t})=>t?t.ownerDocument.defaultView:null,Uv=(t,e)=>Math.abs(t-e);function Wk(t,e){const n=Uv(t.x,e.x),i=Uv(t.y,e.y);return Math.sqrt(n**2+i**2)}class yb{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Sf(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=Wk(d.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:v}=d,{timestamp:x}=Ft;this.history.push({...v,timestamp:x});const{onStart:g,onMove:f}=this.handlers;h||(g&&g(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,d)},this.handlePointerMove=(d,h)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=_f(h,this.transformPagePoint),lt.update(this.updatePoint,!0)},this.handlePointerUp=(d,h)=>{this.end();const{onEnd:p,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Sf(d.type==="pointercancel"?this.lastMoveEventInfo:_f(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,g),v&&v(d,g)},!qm(e))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const s=xl(e),a=_f(s,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ft;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Sf(a,this.history)),this.removeListeners=pl(Sa(this.contextWindow,"pointermove",this.handlePointerMove),Sa(this.contextWindow,"pointerup",this.handlePointerUp),Sa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Rr(this.updatePoint)}}function _f(t,e){return e?{point:e(t.point)}:t}function kv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Sf({point:t},e){return{point:t,delta:kv(t,_b(e)),offset:kv(t,$k(e)),velocity:Xk(e,.1)}}function $k(t){return t[0]}function _b(t){return t[t.length-1]}function Xk(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=_b(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Si(e)));)n--;if(!i)return{x:0,y:0};const o=wi(r.timestamp-i.timestamp);if(o===0)return{x:0,y:0};const s={x:(r.x-i.x)/o,y:(r.y-i.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Yk(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ot(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ot(n,t,i.max):Math.min(t,n)),t}function Nv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function qk(t,{top:e,left:n,bottom:i,right:r}){return{x:Nv(t.x,n,r),y:Nv(t.y,e,i)}}function Fv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Kk(t,e){return{x:Fv(t.x,e.x),y:Fv(t.y,e.y)}}function Zk(t,e){let n=.5;const i=an(t),r=an(e);return r>i?n=Ya(e.min,e.max-i,t.min):i>r&&(n=Ya(t.min,t.max-r,e.min)),Yi(0,1,n)}function Qk(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const lp=.35;function Jk(t=lp){return t===!1?t=0:t===!0&&(t=lp),{x:Ov(t,"left","right"),y:Ov(t,"top","bottom")}}function Ov(t,e,n){return{min:zv(t,e),max:zv(t,n)}}function zv(t,e){return typeof t=="number"?t:t[e]||0}const eN=new WeakMap;class tN{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=gt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(xl(u).point)},o=(u,d)=>{const{drag:h,dragPropagation:p,onDragStart:v}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=vU(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),On(g=>{let f=this.getAxisMotionValue(g).get()||0;if(bi.test(f)){const{projection:m}=this.visualElement;if(m&&m.layout){const y=m.layout.layoutBox[g];y&&(f=an(y)*(parseFloat(f)/100))}}this.originPoint[g]=f}),v&&lt.postRender(()=>v(u,d)),rp(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(u,d)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:v,onDrag:x}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:g}=d;if(p&&this.currentDirection===null){this.currentDirection=nN(g),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",d.point,g),this.updateAxis("y",d.point,g),this.visualElement.render(),x&&x(u,d)},a=(u,d)=>this.stop(u,d),l=()=>On(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)==null?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new yb(e,{onSessionStart:r,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:vb(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:o}=this.getProps();o&&lt.postRender(()=>o(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!cc(e,r,this.currentDirection))return;const o=this.getAxisMotionValue(e);let s=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(s=Yk(s,this.constraints[e],this.elastic[e])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,r=this.constraints;e&&ns(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=qk(i.layoutBox,e):this.constraints=!1,this.elastic=Jk(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&On(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=Qk(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!ns(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const o=jk(i,r.root,this.visualElement.getTransformPagePoint());let s=Kk(r.layout.layoutBox,o);if(n){const a=n(kk(s));this.hasMutatedConstraints=!!a,a&&(s=fb(a))}return s}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=On(u=>{if(!cc(u,n,this.currentDirection))return;let d=l&&l[u]||{};s&&(d={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[u]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return rp(this.visualElement,e),i.start(rg(e,i,0,n,this.visualElement,!1))}stopAnimation(){On(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){On(e=>{var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){On(n=>{const{drag:i}=this.getProps();if(!cc(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(n);if(r&&r.layout){const{min:s,max:a}=r.layout.layoutBox[n];o.set(e[n]-ot(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!ns(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};On(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();r[s]=Zk({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),On(s=>{if(!cc(s,e,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(ot(l,c,r[s]))})}addListeners(){if(!this.visualElement.current)return;eN.set(this.visualElement,this);const e=this.visualElement.current,n=Sa(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();ns(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,o=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),lt.read(i);const s=el(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(On(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:s=lp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function cc(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function nN(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class iN extends Nr{constructor(e){super(e),this.removeGroupControls=jn,this.removeListeners=jn,this.controls=new tN(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||jn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Bv=t=>(e,n)=>{t&&lt.postRender(()=>t(e,n))};class rN extends Nr{constructor(){super(...arguments),this.removePointerDownListener=jn}onPointerDown(e){this.session=new yb(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:vb(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Bv(e),onStart:Bv(n),onMove:i,onEnd:(o,s)=>{delete this.session,r&&lt.postRender(()=>r(o,s))}}}mount(){this.removePointerDownListener=Sa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Fc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Vv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const na={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ee.test(t))t=parseFloat(t);else return t;const n=Vv(t,e.target.x),i=Vv(t,e.target.y);return`${n}% ${i}%`}},oN={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Lr.parse(t);if(r.length>5)return i;const o=Lr.createTransformer(t),s=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+s]/=a,r[1+s]/=l;const c=ot(a,l,.5);return typeof r[2+s]=="number"&&(r[2+s]/=c),typeof r[3+s]=="number"&&(r[3+s]/=c),o(r)}};class sN extends R.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:o}=e;jU(aN),o&&(n.group&&n.group.add(o),i&&i.register&&r&&i.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Fc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:o}=this.props,{projection:s}=i;return s&&(s.isPresent=o,r||e.layoutDependency!==n||n===void 0||e.isPresent!==o?s.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?s.promote():s.relegate()||lt.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ym.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Sb(t){const[e,n]=AU(),i=R.useContext(iw);return _.jsx(sN,{...t,layoutGroup:i,switchLayoutGroup:R.useContext(Jw),isPresent:e,safeToRemove:n})}const aN={borderRadius:{...na,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:na,borderTopRightRadius:na,borderBottomLeftRadius:na,borderBottomRightRadius:na,boxShadow:oN};function lN(t,e,n){const i=Qt(t)?t:Cs(t);return i.start(rg("",i,e,n)),i.animation}const cN=(t,e)=>t.depth-e.depth;class uN{constructor(){this.children=[],this.isDirty=!1}add(e){Rm(this.children,e),this.isDirty=!0}remove(e){Lm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(cN),this.isDirty=!1,this.children.forEach(e)}}function dN(t,e){const n=gn.now(),i=({timestamp:r})=>{const o=r-n;o>=e&&(Rr(i),t(o-e))};return lt.setup(i,!0),()=>Rr(i)}const wb=["TopLeft","TopRight","BottomLeft","BottomRight"],fN=wb.length,Hv=t=>typeof t=="string"?parseFloat(t):t,Gv=t=>typeof t=="number"||Ee.test(t);function hN(t,e,n,i,r,o){r?(t.opacity=ot(0,n.opacity??1,pN(i)),t.opacityExit=ot(e.opacity??1,0,mN(i))):o&&(t.opacity=ot(e.opacity??1,n.opacity??1,i));for(let s=0;s<fN;s++){const a=`border${wb[s]}Radius`;let l=jv(e,a),c=jv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Gv(l)===Gv(c)?(t[a]=Math.max(ot(Hv(l),Hv(c),i),0),(bi.test(c)||bi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ot(e.rotate||0,n.rotate||0,i))}function jv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const pN=bb(0,.5,pw),mN=bb(.5,.95,jn);function bb(t,e,n){return i=>i<t?0:i>e?1:n(Ya(t,e,i))}function Wv(t,e){t.min=e.min,t.max=e.max}function Fn(t,e){Wv(t.x,e.x),Wv(t.y,e.y)}function $v(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Xv(t,e,n,i,r){return t-=e,t=pu(t,1/n,i),r!==void 0&&(t=pu(t,1/r,i)),t}function gN(t,e=0,n=1,i=.5,r,o=t,s=t){if(bi.test(e)&&(e=parseFloat(e),e=ot(s.min,s.max,e/100)-s.min),typeof e!="number")return;let a=ot(o.min,o.max,i);t===o&&(a-=e),t.min=Xv(t.min,e,n,a,r),t.max=Xv(t.max,e,n,a,r)}function Yv(t,e,[n,i,r],o,s){gN(t,e[n],e[i],e[r],e.scale,o,s)}const xN=["x","scaleX","originX"],vN=["y","scaleY","originY"];function qv(t,e,n,i){Yv(t.x,e,xN,n?n.x:void 0,i?i.x:void 0),Yv(t.y,e,vN,n?n.y:void 0,i?i.y:void 0)}function Kv(t){return t.translate===0&&t.scale===1}function Eb(t){return Kv(t.x)&&Kv(t.y)}function Zv(t,e){return t.min===e.min&&t.max===e.max}function yN(t,e){return Zv(t.x,e.x)&&Zv(t.y,e.y)}function Qv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Mb(t,e){return Qv(t.x,e.x)&&Qv(t.y,e.y)}function Jv(t){return an(t.x)/an(t.y)}function ey(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class _N{constructor(){this.members=[]}add(e){Rm(this.members,e),e.scheduleRender()}remove(e){if(Lm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1){i=o;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function SN(t,e,n){let i="";const r=t.x.translate/e.x,o=t.y.translate/e.y,s=(n==null?void 0:n.z)||0;if((r||o||s)&&(i=`translate3d(${r}px, ${o}px, ${s}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:h,skewX:p,skewY:v}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const wf=["","X","Y","Z"],wN={visibility:"hidden"},bN=1e3;let EN=0;function bf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function Tb(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=lb(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:o}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",lt,!(r||o))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&Tb(i)}function Ab({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(s={},a=e==null?void 0:e()){this.id=EN++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(AN),this.nodes.forEach(DN),this.nodes.forEach(IN),this.nodes.forEach(CN)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new uN)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Im),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=Xw(s)&&!EU(s),this.instance=s;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u;const d=()=>this.root.updateBlockedByResize=!1;t(s,()=>{this.root.updateBlockedByResize=!0,u&&u(),u=dN(d,250),Fc.hasAnimatedSinceResize&&(Fc.hasAnimatedSinceResize=!1,this.nodes.forEach(ny))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||c.getDefaultTransition()||ON,{onLayoutAnimationStart:x,onLayoutAnimationComplete:g}=c.getProps(),f=!this.targetLayout||!Mb(this.targetLayout,p),m=!d&&h;if(this.options.layoutRoot||this.resumeFrom||m||d&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const y={...$m(v,"layout"),onPlay:x,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y),this.setAnimationOrigin(u,m)}else d||ny(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Rr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(UN),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Tb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ty);return}this.isUpdating||this.nodes.forEach(LN),this.isUpdating=!1,this.nodes.forEach(PN),this.nodes.forEach(MN),this.nodes.forEach(TN),this.clearAllSnapshots();const a=gn.now();Ft.delta=Yi(0,1e3/60,a-Ft.timestamp),Ft.timestamp=a,Ft.isProcessing=!0,hf.update.process(Ft),hf.preRender.process(Ft),hf.render.process(Ft),Ft.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ym.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(RN),this.sharedNodes.forEach(kN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,lt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){lt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!an(this.snapshot.measuredBox.x)&&!an(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=gt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Eb(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;s&&this.instance&&(a||qr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),zN(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:s}=this.options;if(!s)return gt();const a=s.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(BN))){const{scroll:u}=this.root;u&&(rs(a.x,u.offset.x),rs(a.y,u.offset.y))}return a}removeElementScroll(s){var l;const a=gt();if(Fn(a,s),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:h}=u;u!==this.root&&d&&h.layoutScroll&&(d.wasRoot&&Fn(a,s),rs(a.x,d.offset.x),rs(a.y,d.offset.y))}return a}applyTransform(s,a=!1){const l=gt();Fn(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&os(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),qr(u.latestValues)&&os(l,u.latestValues)}return qr(this.latestValues)&&os(l,this.latestValues),l}removeTransform(s){const a=gt();Fn(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!qr(c.latestValues))continue;sp(c.latestValues)&&c.updateSnapshot();const u=gt(),d=c.measurePageBox();Fn(u,d),qv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return qr(this.latestValues)&&qv(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ft.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var h;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(s||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!(!this.layout||!(u||d))){if(this.resolvedRelativeTargetAt=Ft.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=gt(),this.relativeTargetOrigin=gt(),ba(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=gt(),this.targetWithTransforms=gt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Hk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Fn(this.target,this.layout.layoutBox),gb(this.target,this.targetDelta)):Fn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=gt(),this.relativeTargetOrigin=gt(),ba(this.relativeTargetOrigin,this.target,p.target),Fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||sp(this.parent.latestValues)||mb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var v;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let l=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Ft.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Fn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;Gk(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=gt());const{target:p}=s;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():($v(this.prevProjectionDelta.x,this.projectionDelta.x),$v(this.prevProjectionDelta.y,this.projectionDelta.y)),wa(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!ey(this.projectionDelta.x,this.prevProjectionDelta.x)||!ey(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=is(),this.projectionDelta=is(),this.projectionDeltaWithTransform=is()}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=is();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=gt(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=p!==v,g=this.getStack(),f=!g||g.members.length<=1,m=!!(x&&!f&&this.options.crossfade===!0&&!this.path.some(FN));this.animationProgress=0;let y;this.mixTargetDelta=w=>{const S=w/1e3;iy(d.x,s.x,S),iy(d.y,s.y,S),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ba(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),NN(this.relativeTarget,this.relativeTargetOrigin,h,S),y&&yN(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=gt()),Fn(y,this.relativeTarget)),x&&(this.animationValues=u,hN(u,c,this.latestValues,S,m,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Rr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=lt.update(()=>{Fc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Cs(0)),this.currentAnimation=lN(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),s.onUpdate&&s.onUpdate(u)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(bN),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&Cb(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||gt();const d=an(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const h=an(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}Fn(a,l),os(a,u),wa(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new _N),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&bf("z",s,c,this.animationValues);for(let u=0;u<wf.length;u++)bf(`rotate${wf[u]}`,s,c,this.animationValues),bf(`skew${wf[u]}`,s,c,this.animationValues);s.render();for(const u in c)s.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);s.scheduleRender()}getProjectionStyles(s){if(!this.instance||this.isSVG)return;if(!this.isVisible)return wN;const a={visibility:""},l=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,a.opacity="",a.pointerEvents=Nc(s==null?void 0:s.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none",a;const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=Nc(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!qr(this.latestValues)&&(p.transform=l?l({},""):"none",this.hasProjected=!1),p}const u=c.animationValues||c.latestValues;this.applyTransformsToTarget(),a.transform=SN(this.projectionDeltaWithTransform,this.treeScale,u),l&&(a.transform=l(u,a.transform));const{x:d,y:h}=this.projectionDelta;a.transformOrigin=`${d.origin*100}% ${h.origin*100}% 0`,c.animationValues?a.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:a.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const p in Qa){if(u[p]===void 0)continue;const{correct:v,applyTo:x,isCSSVariable:g}=Qa[p],f=a.transform==="none"?u[p]:v(u[p],c);if(x){const m=x.length;for(let y=0;y<m;y++)a[x[y]]=f}else g?this.options.visualElement.renderState.vars[p]=f:a[p]=f}return this.options.layoutId&&(a.pointerEvents=c===this?Nc(s==null?void 0:s.pointerEvents)||"":"none"),a}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(ty),this.root.sharedNodes.clear()}}}function MN(t){t.updateLayout()}function TN(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:o}=t.options,s=e.source!==t.layout.source;o==="size"?On(d=>{const h=s?e.measuredBox[d]:e.layoutBox[d],p=an(h);h.min=i[d].min,h.max=h.min+p}):Cb(o,e.layoutBox,i)&&On(d=>{const h=s?e.measuredBox[d]:e.layoutBox[d],p=an(i[d]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=is();wa(a,i,e.layoutBox);const l=is();s?wa(l,t.applyTransform(r,!0),e.measuredBox):wa(l,i,e.layoutBox);const c=!Eb(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:p}=d;if(h&&p){const v=gt();ba(v,e.layoutBox,h.layoutBox);const x=gt();ba(x,i,p.layoutBox),Mb(v,x)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=v,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function AN(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function CN(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function RN(t){t.clearSnapshot()}function ty(t){t.clearMeasurements()}function LN(t){t.isLayoutDirty=!1}function PN(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function ny(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function DN(t){t.resolveTargetDelta()}function IN(t){t.calcProjection()}function UN(t){t.resetSkewAndRotation()}function kN(t){t.removeLeadSnapshot()}function iy(t,e,n){t.translate=ot(e.translate,0,n),t.scale=ot(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function ry(t,e,n,i){t.min=ot(e.min,n.min,i),t.max=ot(e.max,n.max,i)}function NN(t,e,n,i){ry(t.x,e.x,n.x,i),ry(t.y,e.y,n.y,i)}function FN(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const ON={duration:.45,ease:[.4,0,.1,1]},oy=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),sy=oy("applewebkit/")&&!oy("chrome/")?Math.round:jn;function ay(t){t.min=sy(t.min),t.max=sy(t.max)}function zN(t){ay(t.x),ay(t.y)}function Cb(t,e,n){return t==="position"||t==="preserve-aspect"&&!Vk(Jv(e),Jv(n),.2)}function BN(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const VN=Ab({attachResizeListener:(t,e)=>el(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ef={current:void 0},Rb=Ab({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ef.current){const t=new VN({});t.mount(window),t.setOptions({layoutScroll:!0}),Ef.current=t}return Ef.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),HN={pan:{Feature:rN},drag:{Feature:iN,ProjectionNode:Rb,MeasureLayout:Sb}};function ly(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,o=i[r];o&&lt.postRender(()=>o(e,xl(e)))}class GN extends Nr{mount(){const{current:e}=this.node;e&&(this.unmount=yU(e,(n,i)=>(ly(this.node,i,"Start"),r=>ly(this.node,r,"End"))))}unmount(){}}class jN extends Nr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=pl(el(this.node.current,"focus",()=>this.onFocus()),el(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function cy(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),o=i[r];o&&lt.postRender(()=>o(e,xl(e)))}class WN extends Nr{mount(){const{current:e}=this.node;e&&(this.unmount=bU(e,(n,i)=>(cy(this.node,i,"Start"),(r,{success:o})=>cy(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const cp=new WeakMap,Mf=new WeakMap,$N=t=>{const e=cp.get(t.target);e&&e(t)},XN=t=>{t.forEach($N)};function YN({root:t,...e}){const n=t||document;Mf.has(n)||Mf.set(n,{});const i=Mf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(XN,{root:t,...e})),i[r]}function qN(t,e,n){const i=YN(e);return cp.set(t,n),i.observe(t),()=>{cp.delete(t),i.unobserve(t)}}const KN={some:0,all:1};class ZN extends Nr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:o}=e,s={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:KN[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=c?u:d;h&&h(l)};return qN(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(QN(e,n))&&this.startObserver()}unmount(){}}function QN({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const JN={inView:{Feature:ZN},tap:{Feature:WN},focus:{Feature:jN},hover:{Feature:GN}},eF={layout:{ProjectionNode:Rb,MeasureLayout:Sb}},up={current:null},Lb={current:!1};function tF(){if(Lb.current=!0,!!Am)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>up.current=t.matches;t.addListener(e),e()}else up.current=!1}const nF=new WeakMap;function iF(t,e,n){for(const i in e){const r=e[i],o=n[i];if(Qt(r))t.addValue(i,r);else if(Qt(o))t.addValue(i,Cs(r,{owner:t}));else if(o!==r)if(t.hasValue(i)){const s=t.getValue(i);s.liveStyle===!0?s.jump(r):s.hasAnimated||s.set(r)}else{const s=t.getStaticValue(i);t.addValue(i,Cs(s!==void 0?s:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const uy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class rF{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Wm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=gn.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,lt.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=Ju(n),this.isVariantNode=Zw(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in d){const p=d[h];l[h]!==void 0&&Qt(p)&&p.set(l[h],!1)}}mount(e){this.current=e,nF.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Lb.current||tF(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:up.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Rr(this.notifyUpdate),Rr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Bs.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&lt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Rs){const n=Rs[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const o=this.features[e];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):gt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<uy.length;i++){const r=uy[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o="on"+r,s=e[o];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=iF(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Cs(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(rw(i)||sw(i))?i=parseFloat(i):!TU(i)&&Lr.test(n)&&(i=Hw(e,n)),this.setBaseTarget(e,Qt(i)?i.get():i)),Qt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var o;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const s=ng(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(i=s[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Qt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Im),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Pb extends rF{constructor(){super(...arguments),this.KeyframeResolver=pU}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Qt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Db(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const o in n)t.style.setProperty(o,n[o])}function oF(t){return window.getComputedStyle(t)}class sF extends Pb{constructor(){super(...arguments),this.type="html",this.renderInstance=Db}readValueFromInstance(e,n){var i;if(Bs.has(n))return(i=this.projection)!=null&&i.isProjecting?Zh(n):II(e,n);{const r=oF(e),o=(Nm(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:n}){return xb(e,n)}build(e,n,i){Jm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return ig(e,n,i)}}const Ib=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function aF(t,e,n,i){Db(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Ib.has(r)?r:Qm(r),e.attrs[r])}class lF extends Pb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=gt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Bs.has(n)){const i=Vw(n);return i&&i.default||0}return n=Ib.has(n)?n:Qm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return ab(e,n,i)}build(e,n,i){ib(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){aF(e,n,i,r)}mount(e){this.isSVGTag=ob(e.tagName),super.mount(e)}}const cF=(t,e)=>tg(t)?new lF(e):new sF(e,{allowProjection:t!==R.Fragment}),uF=ak({...Ik,...JN,...HN,...eF},cF),vl=DU(uF),dF=T.section`
  background-color: #0a0a0a;
  padding: 80px 0;
  color: white;
  overflow: hidden;
`,fF=T.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: white;
`,hF=T.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1200px) {
    padding: 0 40px;
  }
`,pF=T(vl.div)`
  background: ${t=>{var e,n;return t.expanded?((e=t.bgColor)==null?void 0:e.expanded)||"transparent":((n=t.bgColor)==null?void 0:n.collapsed)||"transparent"}};
  border: 1px solid ${t=>{var e,n;return t.expanded?((e=t.bgColor)==null?void 0:e.borderExpanded)||"rgba(255, 255, 255, 0.1)":((n=t.bgColor)==null?void 0:n.borderCollapsed)||"rgba(255, 255, 255, 0.1)"}};
  border-radius: 15px;
  width: 320px;
  min-height: ${t=>t.expanded?"400px":"280px"};
  padding: 30px;
  display: flex;
  flex-direction: column;
  perspective: 1000px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(184, 134, 11, 0.5);
    transform: translateY(-5px);
  }
`,mF=T(vl.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${t=>t.expanded?"rotateY(180deg)":"rotateY(0deg)"};
`,gF=T.div`
  position: ${t=>t.expanded?"absolute":"relative"};
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  opacity: ${t=>t.expanded?0:1};
  transform: ${t=>t.expanded?"scale(0.8)":"scale(1)"};
  transition: all 0.4s ease;
`,xF=T.div`
  position: ${t=>t.expanded?"relative":"absolute"};
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  opacity: ${t=>t.expanded?1:0};
  transform: ${t=>t.expanded?"rotateY(180deg) scale(1)":"rotateY(180deg) scale(0.8)"};
  transition: all 0.4s ease;
`,dy=T.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
`,vF=T.div`
  background: transparent;
  border: 1px solid ${t=>t.themeColor||"#b8860b"};
  border-radius: 15px;
  padding: 25px;
  display: ${t=>t.expanded?"none":"flex"};
  align-items: center;
  justify-content: center;
`,yF=T.i`
  font-size: 3rem;
  color: ${t=>t.themeColor||"#b8860b"};
`,fy=T(vl.div)`
  width: 50px;
  height: 50px;
  border: 2px solid ${t=>t.themeColor||"#b8860b"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: ${t=>t.themeColor?`${t.themeColor}1a`:"rgba(184, 134, 11, 0.1)"};
    transform: scale(1.1);
  }
`,hy=T(vl.span)`
  color: ${t=>t.themeColor||"#b8860b"};
  font-size: 1.8rem;
  font-weight: bold;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`,py=T.h3`
  font-size: 2.2rem;
  margin-bottom: ${t=>t.expanded?"25px":"0"};
  color: white;
  font-weight: 600;
  margin-top: ${t=>t.expanded?"0":"auto"};
`,_F=T(vl.p)`
  color: #ccc;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-top: 25px;
`,SF=T.div`
  text-align: center;
  margin-top: 60px;
  color: #999;
  font-size: 1.2rem;
  padding: 0 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,wF=[{id:1,icon:"bi bi-building",title:"Hospitality",description:"Don't let your guests do their research on TripAdvisor or Booking.com. 360° tours capture attention and differentiate, leading to more direct bookings and fewer price-based decisions.",bgColor:{expanded:"rgba(255, 165, 0, 0.15)",collapsed:"rgba(255, 165, 0, 0.05)",borderExpanded:"#ff8c00",borderCollapsed:"rgba(255, 165, 0, 0.3)"}},{id:2,icon:"bi bi-calendar-event",title:"Event Venues",description:"360° tours showcase your space's versatility with different layouts and lighting, generating more qualified inquiries by helping planners visualize possibilities before contacting you.",bgColor:{expanded:"rgba(34, 139, 34, 0.15)",collapsed:"rgba(34, 139, 34, 0.05)",borderExpanded:"#32cd32",borderCollapsed:"rgba(34, 139, 34, 0.3)"}},{id:3,icon:"bi bi-house-door",title:"Real Estate",description:"Give potential buyers a realistic view of properties, saving time on showings and attracting serious buyers who have already experienced the space virtually.",bgColor:{expanded:"rgba(220, 20, 60, 0.15)",collapsed:"rgba(220, 20, 60, 0.05)",borderExpanded:"#dc143c",borderCollapsed:"rgba(220, 20, 60, 0.3)"}},{id:4,icon:"bi bi-shop",title:"Airbnb Hosts",description:"Stand out in the marketplace with virtual tours that give guests confidence in their booking decisions and reduce cancellations due to unmet expectations.",bgColor:{expanded:"rgba(138, 43, 226, 0.15)",collapsed:"rgba(138, 43, 226, 0.05)",borderExpanded:"#9932cc",borderCollapsed:"rgba(138, 43, 226, 0.3)"}}],bF=()=>{const[t,e]=R.useState(null);return _.jsxs(dF,{children:[_.jsx(fF,{children:"360° Use Cases"}),_.jsx(hF,{children:wF.map(n=>{var r,o,s,a,l,c;const i=t===n.id;return _.jsx(pF,{layout:!0,expanded:i,bgColor:n.bgColor,whileHover:{scale:1.02,transition:{duration:.2}},whileTap:{scale:.98},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:n.id*.1},children:_.jsxs(mF,{expanded:i,children:[_.jsxs(gF,{expanded:i,children:[_.jsxs(dy,{children:[_.jsx(vF,{expanded:i,themeColor:(r=n.bgColor)==null?void 0:r.borderExpanded,children:_.jsx(yF,{className:n.icon,themeColor:(o=n.bgColor)==null?void 0:o.borderExpanded})}),_.jsx(fy,{onClick:()=>e(i?null:n.id),themeColor:(s=n.bgColor)==null?void 0:s.borderExpanded,whileTap:{scale:.9},transition:{duration:.2},children:_.jsx(hy,{themeColor:(a=n.bgColor)==null?void 0:a.borderExpanded,animate:{rotate:i?180:0,scale:i?1.2:1},transition:{duration:.3,ease:"easeInOut"},children:i?"×":"+"})})]}),_.jsx(py,{expanded:i,children:n.title})]}),_.jsxs(xF,{expanded:i,children:[_.jsxs(dy,{children:[_.jsx("div",{}),_.jsx(fy,{onClick:()=>e(i?null:n.id),themeColor:(l=n.bgColor)==null?void 0:l.borderExpanded,whileTap:{scale:.9},transition:{duration:.2},children:_.jsx(hy,{themeColor:(c=n.bgColor)==null?void 0:c.borderExpanded,animate:{rotate:i?180:0,scale:i?1.2:1},transition:{duration:.3,ease:"easeInOut"},children:i?"×":"+"})})]}),_.jsx(py,{expanded:i,children:n.title}),_.jsx(_F,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:n.description})]})]})},n.id)})}),_.jsx(SF,{children:_.jsx("p",{children:"And more... From restaurants and yoga studios to coworking spaces and boutique shops – any space with real character can benefit from 360° solutions."})})]})},tr="/assets/room1-71318f2d.jpg",EF="/assets/office_sample-20f81f01.mp4",MF=T.section`
  background-color: #0a0a0a;
  padding: 80px 0;
  min-height: 100vh;
`,TF=T.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`,AF=T.h1`
  font-size: 4rem;
  color: white;
  text-align: center;
  font-weight: 400;
  margin-bottom: 80px;
  letter-spacing: -0.02em;
`,CF=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`,my=T.div`
  display: flex;
  flex-direction: column;
`,gy=T.div`
  position: relative;
  width: 100%;
  height: 350px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 40px;
  background: #1a1a1a;
  cursor: grab;
  transition: all 0.3s ease;
  
  &:active {
    cursor: grabbing;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
  
  &:hover .hover-overlay {
    opacity: 1;
    visibility: visible;
  }
  
  &:hover .step-in-button {
    opacity: 1;
  }
`,xy=T.div`
  width: 100%;
  height: 100%;
  position: relative;
  
  canvas {
    width: 100% !important;
    height: 100% !important;
    border-radius: 12px;
  }
`,vy=T.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  z-index: 10;
  pointer-events: none;
`,yy=T.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 15;
  pointer-events: none;
  border-radius: 12px;
`,_y=T.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 4px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: 20;
  pointer-events: auto;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%) translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`,Sy=T.div`
  color: white;
`,wy=T.h2`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: white;
`,by=T.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  
  strong {
    color: white;
  }
`,Ey=T.div`
  margin-top: 30px;
`,My=T.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
`,Ty=T.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Bo=T.li`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
  position: relative;
  padding-left: 20px;
  
  &::before {
    content: '•';
    color: #4a90e2;
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }
`,RF=()=>{const t=R.useRef(null),e=R.useRef(null),n=R.useRef(null),i=R.useRef(null),r=R.useRef(null),o=Ji(),s=l=>{o("/roomview")},a=(l,c,u=!1)=>{if(!l.current)return;const d=new wo;c.current=d;const h=new Dt(75,l.current.offsetWidth/l.current.offsetHeight,.1,1e3);h.position.set(0,0,.1);let p;try{p=new kr({antialias:!0,alpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),p.setSize(l.current.offsetWidth,l.current.offsetHeight),l.current.appendChild(p.domElement)}catch(O){return console.error("WebGL initialization failed:",O),l.current.innerHTML='<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; background: #333;">WebGL not supported</div>',()=>{}}const v=new er(500,60,40);v.scale(-1,1,1);let x,g;if(u){const O=document.createElement("video");O.src=EF,O.crossOrigin="anonymous",O.loop=!0,O.muted=!0,O.playsInline=!0,O.autoplay=!0,r.current=O;const I=new e3(O);I.minFilter=Zt,I.magFilter=Zt,I.format=Vn,x=new Ti({map:I}),O.play().catch(z=>{console.log("Auto-play was prevented:",z)})}else{const O=new Cr;x=new Ti,O.load(tr,I=>{x.map=I,x.needsUpdate=!0},void 0,I=>{console.error("Error loading texture:",I)})}g=new sn(v,x),d.add(g);let f=!1,m={x:0,y:0},y=!0,w=u?.003:.002;const S=O=>{f=!0,y=!1;const I=O.clientX!==void 0?O.clientX:O.touches[0].clientX,z=O.clientY!==void 0?O.clientY:O.touches[0].clientY;m={x:I,y:z},u&&r.current&&r.current.paused&&r.current.play().catch(V=>{console.log("Video play failed:",V)})},E=O=>{if(!f)return;const I=O.clientX!==void 0?O.clientX:O.touches[0].clientX,z=O.clientY!==void 0?O.clientY:O.touches[0].clientY,V={x:I-m.x,y:z-m.y};g.rotation.y+=V.x*.005,g.rotation.x+=V.y*.005,m={x:I,y:z}},M=()=>{f=!1,setTimeout(()=>{f||(y=!0)},2e3)},P=p.domElement;P.addEventListener("mousedown",S),P.addEventListener("mousemove",E),P.addEventListener("mouseup",M),P.addEventListener("mouseleave",M),P.addEventListener("touchstart",S),P.addEventListener("touchmove",E),P.addEventListener("touchend",M);let b;const C=()=>{b=requestAnimationFrame(C),y&&!f&&(g.rotation.y+=w),p.render(d,h)};C();const F=()=>{if(l.current){const O=l.current.offsetWidth,I=l.current.offsetHeight;h.aspect=O/I,h.updateProjectionMatrix(),p.setSize(O,I)}};return window.addEventListener("resize",F),()=>{b&&cancelAnimationFrame(b),window.removeEventListener("resize",F),P.removeEventListener("mousedown",S),P.removeEventListener("mousemove",E),P.removeEventListener("mouseup",M),P.removeEventListener("mouseleave",M),P.removeEventListener("touchstart",S),P.removeEventListener("touchmove",E),P.removeEventListener("touchend",M),l.current&&p.domElement&&l.current.removeChild(p.domElement),v.dispose(),x.dispose(),x.map&&x.map.dispose(),p.dispose(),u&&r.current&&(r.current.pause(),r.current=null)}};return R.useEffect(()=>{const l=a(t,n,!1),c=a(e,i,!0);return()=>{l&&l(),c&&c()}},[]),_.jsx(MF,{children:_.jsxs(TF,{children:[_.jsx(AF,{children:"Showcase"}),_.jsxs(CF,{children:[_.jsxs(my,{children:[_.jsxs(gy,{children:[_.jsx(xy,{ref:t}),_.jsx(vy,{children:"The Overlook Hotel"}),_.jsx(yy,{className:"hover-overlay"}),_.jsx(_y,{className:"step-in-button",onClick:()=>s(),children:"Step In"})]}),_.jsxs(Sy,{children:[_.jsx(wy,{children:"360° Images"}),_.jsxs(by,{children:["A basic version of a ",_.jsx("strong",{children:"virtual tour with images"})," in a hotel room. Including four different lighting scenes with smooth transitions, branding elements, auto-rotation toggle, and show/hide user interface functionality."]}),_.jsxs(Ey,{children:[_.jsx(My,{children:"Great for:"}),_.jsxs(Ty,{children:[_.jsx(Bo,{children:"Small locations"}),_.jsx(Bo,{children:"Airbnb hosts and real estate"}),_.jsx(Bo,{children:"Showing the space without people"})]})]})]})]}),_.jsxs(my,{children:[_.jsxs(gy,{children:[_.jsx(xy,{ref:e}),_.jsx(vy,{children:"Van 't Hof Foodgroup"}),_.jsx(yy,{className:"hover-overlay"}),_.jsx(_y,{className:"step-in-button",onClick:()=>s(),children:"Step In"})]}),_.jsxs(Sy,{children:[_.jsx(wy,{children:"360° Videos"}),_.jsxs(by,{children:["A basic version of a ",_.jsx("strong",{children:"virtual tour with videos"})," in a production line of a dutch spring roll manufacturing company Van 't Hof. Including five different viewpoints with smooth transitions, branding elements, auto-rotation toggle, and show/hide user interface functionality."]}),_.jsxs(Ey,{children:[_.jsx(My,{children:"Great for:"}),_.jsxs(Ty,{children:[_.jsx(Bo,{children:"Large locations"}),_.jsx(Bo,{children:"Hospitality and event venues"}),_.jsx(Bo,{children:"Showing the space with people"})]})]})]})]})]})]})})},LF=()=>{try{const t=document.createElement("canvas");return!!(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch{return!1}},PF=T.section`
  background-color: #0a0a0a;
  padding: 80px 0;
  color: white;
  overflow: hidden;
`,DF=T.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: white;
  font-weight: 600;
`,IF=T.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 600px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  background: ${t=>t.fallback?`url(${tr}) center/cover`:"transparent"};
`,UF=T.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  gap: 20px;
`,kF=T.h3`
  font-size: 2rem;
  margin-bottom: 10px;
`,Ay=T.p`
  font-size: 1.1rem;
  max-width: 500px;
  line-height: 1.6;
  opacity: 0.9;
`,NF=T.div`
  width: 100%;
  height: 100%;
  position: relative;
`,FF=T.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
`,Tf=T.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }

  &.active {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.8);
  }
`,OF=T.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: ${t=>t.show?1:0};
  transition: opacity 0.3s ease;
`,zF=T.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  opacity: ${t=>t.show?1:0};
  visibility: ${t=>t.show?"visible":"hidden"};
  transition: all 0.4s ease;
  pointer-events: ${t=>t.show?"all":"none"};
`,BF=T.button`
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 20px 40px;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  backdrop-filter: blur(15px);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.6);
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  }

  &:active {
    transform: scale(0.98);
  }
`,VF=()=>{const t=R.useRef(null),e=R.useRef(null),n=R.useRef(null),[i,r]=R.useState(!0),[o,s]=R.useState(!1),[a,l]=R.useState(!0),[c,u]=R.useState(!1),[d,h]=R.useState(!0),p=R.useRef(1),v=R.useRef(null);R.useEffect(()=>{if(!LF()){console.warn("WebGL is not supported. Falling back to static image."),h(!1);return}let y,w,S,E,M,P=!1,b={x:0,y:0};const F=(()=>{try{y=new wo,e.current=y,w=new Dt(75,t.current.clientWidth/t.current.clientHeight,.1,1e3),w.position.set(0,0,.1),n.current=w,S=new kr({antialias:!0,powerPreference:"high-performance"}),S.setSize(t.current.clientWidth,t.current.clientHeight),t.current.appendChild(S.domElement);const O=new er(1e3,60,40);O.scale(-1,1,1);const I=new Cr,z=new Ti({}),V=I.load(tr,ne=>{z.map=ne,z.needsUpdate=!0},void 0,ne=>{console.error("Error loading texture:",ne)});E=new sn(O,z),y.add(E);const ee=()=>{r(!0),s(!1),u(!1),l(!0)},$=ne=>{o&&(P=!0,r(!1),u(!0),l(!1),v.current&&clearTimeout(v.current),b={x:ne.clientX,y:ne.clientY})},U=ne=>{if(P&&o){const k={x:ne.clientX-b.x,y:ne.clientY-b.y};E.rotation.y+=k.x*.005,E.rotation.x+=k.y*.005,b={x:ne.clientX,y:ne.clientY}}},j=()=>{P&&(P=!1,v.current=setTimeout(ee,2e3))},G=()=>{P&&(P=!1,ee())},re=ne=>{o&&ne.touches.length===1&&(P=!0,r(!1),u(!0),l(!1),v.current&&clearTimeout(v.current),b={x:ne.touches[0].clientX,y:ne.touches[0].clientY})},te=ne=>{if(P&&o&&ne.touches.length===1){const k={x:ne.touches[0].clientX-b.x,y:ne.touches[0].clientY-b.y};E.rotation.y+=k.x*.005,E.rotation.x+=k.y*.005,b={x:ne.touches[0].clientX,y:ne.touches[0].clientY}}},X=()=>{P&&(P=!1,v.current=setTimeout(ee,2e3))};t.current&&(t.current.addEventListener("mousedown",$),t.current.addEventListener("mousemove",U),t.current.addEventListener("mouseup",j),t.current.addEventListener("mouseleave",G),t.current.addEventListener("touchstart",re),t.current.addEventListener("touchmove",te),t.current.addEventListener("touchend",X));const J=()=>{M=requestAnimationFrame(J),i&&!P&&(E.rotation.y+=.003),S.render(y,w)};J();const le=()=>{t.current&&w&&S&&(w.aspect=t.current.clientWidth/t.current.clientHeight,w.updateProjectionMatrix(),S.setSize(t.current.clientWidth,t.current.clientHeight))};return window.addEventListener("resize",le),()=>{window.removeEventListener("resize",le),v.current&&clearTimeout(v.current),t.current&&(t.current.removeEventListener("mousedown",$),t.current.removeEventListener("mousemove",U),t.current.removeEventListener("mouseup",j),t.current.removeEventListener("mouseleave",G),t.current.removeEventListener("touchstart",re),t.current.removeEventListener("touchmove",te),t.current.removeEventListener("touchend",X))}}catch(O){return console.error("Error initializing Three.js scene:",O),h(!1),()=>{}}})();return()=>{if(M&&cancelAnimationFrame(M),v.current&&clearTimeout(v.current),t.current&&t.current.firstChild)try{t.current.removeChild(t.current.firstChild)}catch(O){console.warn("Error removing canvas:",O)}F&&F(),e.current&&e.current.traverse(O=>{O.geometry&&O.geometry.dispose(),O.material&&(O.material.map&&O.material.map.dispose(),O.material.dispose())})}},[i,o,d]),R.useEffect(()=>()=>{v.current&&clearTimeout(v.current)},[]);const x=()=>{d&&(s(!0),r(!1),l(!1),u(!0))},g=()=>{n.current&&p.current<3&&(p.current+=.2,n.current.fov=75/p.current,n.current.updateProjectionMatrix())},f=()=>{n.current&&p.current>.5&&(p.current-=.2,n.current.fov=75/p.current,n.current.updateProjectionMatrix())},m=()=>{d&&(s(!o),o?(r(!0),l(!0)):(r(!1),l(!1)))};return _.jsxs(PF,{children:[_.jsx(DF,{children:"Try it yourself"}),_.jsx(IF,{fallback:!d,children:d?_.jsxs(_.Fragment,{children:[_.jsx(NF,{ref:t}),_.jsx(zF,{show:a&&!c,children:_.jsxs(BF,{onClick:x,children:[_.jsx("i",{className:"bi bi-hand-index"}),"Try it yourself"]})}),_.jsxs(OF,{show:o&&c,children:[_.jsx("i",{className:"bi bi-cursor-fill"}),"Drag to explore"]}),_.jsxs(FF,{children:[_.jsx(Tf,{onClick:g,title:"Zoom In",children:_.jsx("i",{className:"bi bi-zoom-in"})}),_.jsx(Tf,{onClick:f,title:"Zoom Out",children:_.jsx("i",{className:"bi bi-zoom-out"})}),_.jsx(Tf,{onClick:m,className:o?"active":"",title:o?"Auto Rotate":"Drag Mode",children:_.jsx("i",{className:o?"bi bi-play-fill":"bi bi-hand-index"})})]})]}):_.jsxs(UF,{children:[_.jsx(kF,{children:"360° Room View"}),_.jsx(Ay,{children:"Experience our immersive virtual tours with interactive 360° room exploration. This preview shows the beautiful room design that can be fully explored with WebGL-enabled browsers."}),_.jsx(Ay,{style:{opacity:.7,fontSize:"0.9rem"},children:"For the full interactive experience, please use a modern browser with WebGL support."})]})})]})},HF=ht`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`,GF=T.section`
  background-color: #0a0a0a;
  padding: 80px 0;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(10, 10, 10, 0.9) 0%,
      rgba(20, 20, 20, 0.8) 50%,
      rgba(10, 10, 10, 0.9) 100%
    );
    z-index: 1;
  }
`,jF=T.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: white;
  font-weight: 600;
  position: relative;
  z-index: 2;
`,WF=T.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 2;
`,$F=T.div`
  display: flex;
  animation: ${HF} 25s linear infinite;
  gap: 60px;
  align-items: center;
  white-space: nowrap;
  width: fit-content;
`,XF=T.div`
  flex-shrink: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  padding: 0 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`,YF=T.img`
  max-height: 60px;
  max-width: 160px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: brightness(0.8) contrast(1.2);
  transition: all 0.3s ease;
  
  &:hover {
    filter: brightness(1) contrast(1.3);
  }
`,qF=()=>{const t=[{name:"Tiger Hotel",url:"https://picsum.photos/200/80?random=1"},{name:"Lion Suites",url:"https://picsum.photos/200/80?random=2"},{name:"Eagle Resort",url:"https://picsum.photos/200/80?random=3"},{name:"Dolphin Stays",url:"https://picsum.photos/200/80?random=4"},{name:"Wolf Lodge",url:"https://picsum.photos/200/80?random=5"},{name:"Bear Hotels",url:"https://picsum.photos/200/80?random=6"},{name:"Fox Inns",url:"https://picsum.photos/200/80?random=7"},{name:"Owl Resorts",url:"https://picsum.photos/200/80?random=8"}],e=[...t,...t,...t];return _.jsxs(GF,{children:[_.jsx(jF,{children:"Trusted by"}),_.jsx(WF,{children:_.jsx($F,{children:e.map((n,i)=>_.jsx(XF,{children:_.jsx(YF,{src:n.url,alt:n.name,loading:"lazy"})},`${n.name}-${i}`))})})]})};const KF=T.section`
  background-color: #0a0a0a;
  padding: 100px 0;
  min-height: 100vh;
`,ZF=T.h1`
  font-size: 5rem;
  font-weight: 400;
  color: white;
  text-align: center;
  margin-bottom: 80px;
  line-height: 1.2;
  
  .highlight {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      height: 6px;
      background: #4ade80;
      z-index: -1;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 60px;
  }
`,QF=T.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
`,JF=T.div`
  position: relative;
  height: 500px;
  width: 100%;
`,nr=T.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: float 6s ease-in-out infinite;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
    animation-play-state: paused;
  }
  
  i {
    font-size: 2rem;
    color: ${t=>t.iconColor||"#4a90e2"};
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`,eO=T(nr)`
  top: 30px;
  left: 60px;
  background: rgba(46, 125, 50, 0.3);
  border-color: rgba(46, 125, 50, 0.4);
  animation-delay: 0s;
`,tO=T(nr)`
  top: 80px;
  right: 80px;
  background: rgba(139, 69, 19, 0.3);
  border-color: rgba(139, 69, 19, 0.4);
  animation-delay: 1s;
`,nO=T(nr)`
  top: 200px;
  left: 20px;
  background: rgba(139, 69, 19, 0.3);
  border-color: rgba(139, 69, 19, 0.4);
  animation-delay: 2s;
`,iO=T(nr)`
  top: 160px;
  left: 180px;
  background: rgba(25, 25, 112, 0.3);
  border-color: rgba(25, 25, 112, 0.4);
  animation-delay: 0.5s;
`,rO=T(nr)`
  top: 250px;
  right: 60px;
  background: rgba(30, 144, 255, 0.3);
  border-color: rgba(30, 144, 255, 0.4);
  animation-delay: 1.5s;
`,oO=T(nr)`
  top: 380px;
  left: 40px;
  background: rgba(75, 0, 130, 0.3);
  border-color: rgba(75, 0, 130, 0.4);
  animation-delay: 3s;
`,sO=T(nr)`
  top: 420px;
  left: 170px;
  background: rgba(46, 125, 50, 0.3);
  border-color: rgba(46, 125, 50, 0.4);
  animation-delay: 2.5s;
`,aO=T(nr)`
  top: 340px;
  right: 120px;
  background: rgba(64, 64, 64, 0.3);
  border-color: rgba(64, 64, 64, 0.4);
  animation-delay: 4s;
`,lO=T(nr)`
  top: 460px;
  right: 40px;
  background: rgba(139, 69, 19, 0.3);
  border-color: rgba(139, 69, 19, 0.4);
  animation-delay: 3.5s;
`,cO=T.div`
  color: white;
`,uO=T.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;T.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;const dO=T.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 50px;
  max-width: 500px;
`,fO=T.div`
  margin-top: 20px;
`,hO=T.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 25px;
  color: white;
`,pO=T.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,uc=T.li`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  position: relative;
  padding-left: 25px;
  
  &::before {
    content: '•';
    color: #4ade80;
    position: absolute;
    left: 0;
    font-size: 1.3rem;
    font-weight: bold;
  }
`,mO=()=>_.jsxs(KF,{children:[_.jsxs(ZF,{children:["Share ",_.jsx("span",{className:"highlight",children:"anywhere"})]}),_.jsxs(QF,{children:[_.jsxs(JF,{children:[_.jsx(eO,{children:_.jsx("i",{className:"bi bi-play-circle"})}),_.jsx(tO,{children:_.jsx("i",{className:"bi bi-tablet"})}),_.jsx(rO,{children:_.jsx("i",{className:"bi bi-phone"})}),_.jsx(oO,{children:_.jsx("i",{className:"bi bi-display"})}),_.jsx(aO,{children:_.jsx("i",{className:"bi bi-camera"})}),_.jsx(lO,{children:_.jsx("i",{className:"bi bi-linkedin"})}),_.jsx(nO,{children:_.jsx("i",{className:"bi bi-tiktok"})}),_.jsx(sO,{children:_.jsx("i",{className:"bi bi-google"})}),_.jsx(iO,{children:_.jsx("i",{className:"bi bi-telephone"})})]}),_.jsxs(cO,{children:[_.jsx(uO,{children:"Instant access with any device"}),_.jsx(dO,{children:"Our 360° experiences work across all modern devices. Your audience can explore your location instantly on desktop, tablet, or mobile - no downloads or special apps required."}),_.jsxs(fO,{children:[_.jsx(hO,{children:"Great for:"}),_.jsxs(pO,{children:[_.jsx(uc,{children:"Embedding in your website"}),_.jsx(uc,{children:"Trade shows and info screens"}),_.jsx(uc,{children:"Sharing across marketing channels"}),_.jsx(uc,{children:"Sending directly to potential clients"})]})]})]})]})]}),gO=T.section`
  position: relative;
  height: 55vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,xO=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,vO=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`,yO=T.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 40px;
`,_O=T.h1`
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 40px;
  color: white;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 30px;
  }
`,SO=T.p`
  font-size: 1.3rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
  
  .highlight {
    color: #fbbf24;
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,wO=T.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin: 0;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: underline;
    
    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }
  }
`,bO=()=>{const t=R.useRef(null),e=R.useRef(null);return R.useEffect(()=>{if(!t.current)return;const n=new wo;e.current=n;const i=new Dt(75,t.current.offsetWidth/t.current.offsetHeight,.1,1e3);i.position.set(0,0,.1);let r;try{r=new kr({antialias:!0,alpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),r.setSize(t.current.offsetWidth,t.current.offsetHeight),t.current.appendChild(r.domElement)}catch(h){console.error("WebGL initialization failed:",h),t.current.innerHTML='<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; background: #333;">WebGL not supported</div>';return}const o=new er(500,60,40);o.scale(-1,1,1);const s=new Cr,a=new Ti;s.load(tr,h=>{a.map=h,a.needsUpdate=!0},void 0,h=>{console.error("Error loading texture:",h)});const l=new sn(o,a);n.add(l);let c;const u=()=>{c=requestAnimationFrame(u),l.rotation.y+=.001,r.render(n,i)};u();const d=()=>{if(t.current){const h=t.current.offsetWidth,p=t.current.offsetHeight;i.aspect=h/p,i.updateProjectionMatrix(),r.setSize(h,p)}};return window.addEventListener("resize",d),()=>{c&&cancelAnimationFrame(c),window.removeEventListener("resize",d),t.current&&r.domElement&&t.current.removeChild(r.domElement),o.dispose(),a.dispose(),a.map&&a.map.dispose(),r.dispose()}},[]),_.jsxs(gO,{children:[_.jsx(xO,{ref:t}),_.jsx(vO,{}),_.jsxs(yO,{children:[_.jsx(_O,{children:"Proven results"}),_.jsxs(SO,{children:["Studies show that interactive 360° visualizations can increase booking rates by ",_.jsx("span",{className:"highlight",children:"up to 67%*"}),". We bring these results to independent spaces with character."]}),_.jsxs(wO,{children:["*Source: ",_.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:"thevivestrg.com"})]})]})]})},EO=T.section`
  background-color: #0a0a0a;
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`,MO=T.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
`,TO=T.h1`
  font-size: 4rem;
  color: white;
  text-align: center;
  font-weight: 400;
  margin-bottom: 80px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 60px;
  }
`,AO=T.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 60px;
  }
`,CO=T.div`
  background: rgba(15, 15, 15, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: #fbbf24;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    
    &::before {
      opacity: 1;
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(245, 158, 11, 0.02) 100%);
    }
    
    .process-number {
      transform: scale(1.1);
      color: #fbbf24;
    }
    
    .process-title {
      color: #fbbf24;
    }
    
    .process-description {
      color: rgba(255, 255, 255, 0.95);
    }
  }
`,RO=T.div`
  font-size: 3rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
`,LO=T.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,PO=T.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,DO=T.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`,IO=T.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  
  .highlight {
    color: #fbbf24;
  }
`,UO=T.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,kO=[{number:"01",title:"Consultation",description:"We begin by understanding your property's unique features and identifying which viewpoints and lighting scenarios will showcase your space best.",isHighlight:!1},{number:"02",title:"Capture",description:"Our specialists visit your location in person to capture high-resolution 360° images or videos using professional equipment, ensuring every detail is preserved.",isHighlight:!1},{number:"03",title:"Enhancement",description:"We process the materials and build interactive elements, optimize for all devices, and ensure seamless navigation between viewpoints.",isHighlight:!1},{number:"04",title:"Live",description:"We deliver the final product with simple implementation instructions and full technical support for integration into your booking system, website, and marketing materials.",isHighlight:!1}],NO=()=>_.jsx(EO,{children:_.jsxs(MO,{children:[_.jsx(TO,{children:"Our process"}),_.jsx(AO,{children:kO.map((t,e)=>_.jsxs(CO,{children:[_.jsx(RO,{className:"process-number",children:t.number}),_.jsx(LO,{className:"process-title",children:t.title}),_.jsx(PO,{className:"process-description",children:t.description})]},e))}),_.jsxs(DO,{children:[_.jsx(IO,{children:_.jsx("span",{className:"highlight",children:"14-day delivery, zero hassle."})}),_.jsx(UO,{children:"Our turnkey solution includes technical support and customizations – everything you need to showcase your property professionally and in alignment with your brand. From capture to driving more business in less than two weeks."})]})]})}),FO=T.section`
  background-color: #0a0a0a;
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`,OO=T.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
`,zO=T.h1`
  font-size: 4rem;
  color: white;
  text-align: center;
  font-weight: 400;
  margin-bottom: 80px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 60px;
  }
`,BO=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 500px;
    margin: 0 auto 60px auto;
  }
`,VO=T.div`
  background: rgba(15, 15, 15, 0.8);
  border: 2px solid ${t=>t.isHighlighted?"#fbbf24":"rgba(255, 255, 255, 0.1)"};
  border-radius: 16px;
  padding: 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: fit-content;
  
  ${t=>t.isHighlighted&&`
    transform: scale(1.05);
    box-shadow: 0 25px 50px rgba(251, 191, 36, 0.2);
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${t=>t.isHighlighted?"linear-gradient(135deg, rgba(251, 191, 36, 0.05) 0%, rgba(251, 191, 36, 0.02) 100%)":"linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%)"};
    opacity: ${t=>t.isHighlighted?1:0};
    transition: opacity 0.4s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: ${t=>t.isHighlighted?"scale(1.08)":"translateY(-10px) scale(1.02)"};
    border-color: #fbbf24;
    box-shadow: 0 25px 50px rgba(251, 191, 36, 0.15);
    
    &::before {
      opacity: 1;
      background: linear-gradient(135deg, rgba(251, 191, 36, 0.05) 0%, rgba(251, 191, 36, 0.02) 100%);
    }
  }
`,HO=T.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,GO=T.div`
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
`,jO=T.div`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through;
  margin-bottom: 8px;
`,WO=T.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fbbf24;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,$O=T.div`
  font-size: 2rem;
  font-weight: 600;
  color: #fbbf24;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`,XO=T.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  position: relative;
  z-index: 2;
`,YO=T.li`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 16px;
  position: relative;
  padding-left: 20px;
  line-height: 1.4;
  
  &::before {
    content: '•';
    color: #10b981;
    position: absolute;
    left: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
`,qO=T.div`
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
`,KO=T.div`
  font-size: 1rem;
  font-weight: 600;
  color: #fbbf24;
  margin-bottom: 10px;
`,ZO=T.div`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
`,QO=T.button`
  width: 100%;
  background: ${t=>t.variant==="primary"?"#fbbf24":"rgba(255, 255, 255, 0.1)"};
  border: 1px solid ${t=>t.variant==="primary"?"#fbbf24":"rgba(255, 255, 255, 0.2)"};
  color: ${t=>t.variant==="primary"?"#000":"white"};
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: ${t=>t.variant==="primary"?"#f59e0b":"rgba(255, 255, 255, 0.2)"};
    border-color: ${t=>t.variant==="primary"?"#f59e0b":"rgba(255, 255, 255, 0.3)"};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`,JO=T.p`
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  margin: 0;
  max-width: 800px;
  margin: 0 auto;
`,e4=[{title:"360° Image Tour",originalPrice:"€1,200",currentPrice:"€840",features:["1-3 viewpoints","Up to four lighting scenarios","Basic website integration","Basic branding elements","3-month hosting"],idealFor:"small spaces, boutique hoteliers, airbnb hosts, real estate",buttonText:"See example",buttonVariant:"secondary",isHighlighted:!1},{title:"360° Video Tour",originalPrice:"€2,800",currentPrice:"€1,960",features:["3-5 viewpoints","Up to 4 setups each","Full integration support","Custom branding elements","6-month hosting"],idealFor:"large spaces, event venues, luxury properties, amenities, atmosphere",buttonText:"See example",buttonVariant:"primary",isHighlighted:!0},{title:"360° Custom Tour",customPricing:"Custom pricing",features:["Tailored and unique experience","Full integration support","Custom branding elements","Custom interactive elements","Custom hosting options"],idealFor:"any business looking to grow and differentiate",buttonText:"Contact us",buttonVariant:"secondary",isHighlighted:!1}],t4=()=>_.jsx(FO,{children:_.jsxs(OO,{children:[_.jsx(zO,{children:"360° Virtual Tour packages"}),_.jsx(BO,{children:e4.map((t,e)=>_.jsxs(VO,{isHighlighted:t.isHighlighted,children:[_.jsx(HO,{children:t.title}),_.jsxs(GO,{children:[t.originalPrice&&_.jsx(jO,{children:t.originalPrice}),t.currentPrice?_.jsx(WO,{children:t.currentPrice}):_.jsx($O,{children:t.customPricing})]}),_.jsx(XO,{children:t.features.map((n,i)=>_.jsx(YO,{children:n},i))}),_.jsxs(qO,{children:[_.jsx(KO,{children:"Ideal for:"}),_.jsx(ZO,{children:t.idealFor})]}),_.jsx(QO,{variant:t.buttonVariant,children:t.buttonText})]},e))}),_.jsx(JO,{children:"All prices shown are excluding VAT and travel expenses. 30% off is valid until 30th of June 2025"})]})}),n4=T.section`
  background-color: #0a0a0a;
  padding: 10px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`,i4=T.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
`,r4=T.h1`
  font-size: 4rem;
  color: white;
  text-align: center;
  font-weight: 400;
  margin-bottom: 80px;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 60px;
  }
`,o4=T.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,s4=T.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${t=>t.isOpen?"#fbbf24":"rgba(255, 255, 255, 0.6)"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${t=>t.isOpen?"rotate(45deg)":"rotate(0deg)"};
`,a4=T.div`
  background: rgba(15, 15, 15, 0.6);
  border: 1px solid ${t=>t.isOpen?"#fbbf24":"rgba(255, 255, 255, 0.1)"};
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &:hover {
    border-color: ${t=>t.isOpen?"#fbbf24":"rgba(255, 255, 255, 0.2)"};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    
    .faq-icon {
      color: #fbbf24 !important;
      transform: ${t=>t.isOpen?"rotate(45deg) scale(1.1)":"rotate(0deg) scale(1.1)"} !important;
    }
  }
`,l4=T.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  background: ${t=>t.isOpen?"rgba(251, 191, 36, 0.05)":"transparent"};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 25px 30px;
  }
`,c4=T.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  margin: 0;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding-right: 20px;
  }
`,u4=T.div`
  max-height: ${t=>t.isOpen?"500px":"0"};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${t=>t.isOpen?1:0};
  transform: translateY(${t=>t.isOpen?"0":"-10px"});
`,d4=T.div`
  padding: 0 40px 40px 40px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.7;
  
  p {
    margin: 0 0 20px 0;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0 30px 30px 30px;
    font-size: 0.95rem;
  }
`,f4=[{id:1,question:"What is a 360° Virtual Tour?",answer:`A 360° virtual tour allows potential guests to explore your spaces from every angle, just as if they were physically there.

Unlike traditional photos, our tours let users look up, down, and all around, giving them a genuine sense of your space's dimensions, lighting, and atmosphere.

Each tour works seamlessly on mobile, desktop, and even VR headsets.`},{id:2,question:"How does this increase bookings?",answer:`Virtual tours significantly reduce booking uncertainty by giving guests complete transparency about your space. Studies show they can increase direct bookings by up to 67% while reducing cancellations and disappointment.

Guests who view a virtual tour are more likely to book and become repeat customers because they know exactly what to expect. This builds trust and confidence in your property before they arrive.`},{id:3,question:"How disruptive is the process?",answer:`Our process is designed to be minimally disruptive to your operations. The entire capture process typically takes 2-4 hours depending on your space size.

We work around your schedule and can often capture during off-peak hours or between bookings. No special preparation is needed beyond ensuring the space is clean and well-lit.

The final product is delivered within 14 days with zero additional effort required from you.`},{id:4,question:"How do we integrate this into our website?",answer:`Integration is simple and works with any website platform. We provide you with a simple embed code that works just like adding a YouTube video.

Our tours are responsive and work perfectly on all devices without requiring any special plugins or downloads. We also provide technical support and can assist with the integration process if needed.

The tours load quickly and are optimized for SEO, helping improve your website's search rankings.`}],h4=()=>{const[t,e]=R.useState(new Set([1])),n=i=>{const r=new Set(t);r.has(i)?r.delete(i):r.add(i),e(r)};return _.jsx(n4,{children:_.jsxs(i4,{children:[_.jsx(r4,{children:"Frequently Asked Questions"}),_.jsx(o4,{children:f4.map(i=>{const r=t.has(i.id);return _.jsxs(a4,{isOpen:r,onClick:()=>n(i.id),children:[_.jsxs(l4,{isOpen:r,children:[_.jsx(c4,{isOpen:r,children:i.question}),_.jsx(s4,{isOpen:r,className:"faq-icon",children:"+"})]}),_.jsx(u4,{isOpen:r,children:_.jsx(d4,{children:i.answer.split(`

`).map((o,s)=>_.jsx("p",{children:o},s))})})]},i.id)})})]})})},p4=T.section`
  position: relative;
  min-height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: white;
`,m4=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,g4=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`,x4=T.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`,v4=T.div`
  flex: 1;
  max-width: 500px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`,y4=T.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  line-height: 1.1;
  
  .highlight {
    color: #10b981;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,_4=T.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,S4=T.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
`,dc=T.div`
  background: rgba(120, 113, 108, 0.9);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 20px;
  min-width: 100px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: #fbbf24;
    box-shadow: 0 10px 30px rgba(251, 191, 36, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    min-width: 80px;
  }
`,fc=T.div`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`,hc=T.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: lowercase;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`,w4=T.div`
  margin-top: 40px;
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`,b4=T.input`
  flex: 1;
  padding: 15px 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #fbbf24;
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.2);
  }
`,E4=T.button`
  padding: 15px 30px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(251, 191, 36, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`,M4=()=>{const t=R.useRef(null),e=R.useRef(null),[n,i]=R.useState({days:0,hours:0,minutes:0,seconds:0}),[r,o]=R.useState(""),s=new Date("2025-06-30T23:59:59").getTime();R.useEffect(()=>{if(!t.current)return;const l=new wo;e.current=l;const c=new Dt(75,t.current.offsetWidth/t.current.offsetHeight,.1,1e3);c.position.set(0,0,.1);let u;try{u=new kr({antialias:!0,alpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"}),u.setSize(t.current.offsetWidth,t.current.offsetHeight),t.current.appendChild(u.domElement)}catch(m){console.error("WebGL initialization failed:",m),t.current.innerHTML='<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; background: #333;">WebGL not supported</div>';return}const d=new er(500,60,40);d.scale(-1,1,1);const h=new Cr,p=new Ti;h.load(tr,m=>{p.map=m,p.needsUpdate=!0},void 0,m=>{console.error("Error loading texture:",m)});const v=new sn(d,p);l.add(v);let x;const g=()=>{x=requestAnimationFrame(g),v.rotation.y+=.001,u.render(l,c)};g();const f=()=>{if(t.current){const m=t.current.offsetWidth,y=t.current.offsetHeight;c.aspect=m/y,c.updateProjectionMatrix(),u.setSize(m,y)}};return window.addEventListener("resize",f),()=>{x&&cancelAnimationFrame(x),window.removeEventListener("resize",f),t.current&&u.domElement&&t.current.removeChild(u.domElement),d.dispose(),p.dispose(),p.map&&p.map.dispose(),u.dispose()}},[]),R.useEffect(()=>{const l=()=>{const d=new Date().getTime(),h=s-d;if(h>0){const p=Math.floor(h/864e5),v=Math.floor(h%(1e3*60*60*24)/(1e3*60*60)),x=Math.floor(h%(1e3*60*60)/(1e3*60)),g=Math.floor(h%(1e3*60)/1e3),f={days:p,hours:v,minutes:x,seconds:g};localStorage.setItem("countdownTimer",JSON.stringify({timeLeft:f,lastUpdated:d})),i(f)}else i({days:0,hours:0,minutes:0,seconds:0})},c=localStorage.getItem("countdownTimer");if(c)try{const d=JSON.parse(c);new Date().getTime()-d.lastUpdated<2e3&&i(d.timeLeft)}catch(d){console.error("Error parsing localStorage data:",d)}l();const u=setInterval(l,1e3);return()=>clearInterval(u)},[s]);const a=l=>{if(l.preventDefault(),r){const c=JSON.parse(localStorage.getItem("prelaunchEmails")||"[]");c.includes(r)||(c.push(r),localStorage.setItem("prelaunchEmails",JSON.stringify(c))),alert("Thank you! We'll notify you about the exclusive pre-launch pricing."),o("")}};return _.jsxs(p4,{children:[_.jsx(m4,{ref:t}),_.jsx(g4,{}),_.jsxs(x4,{children:[_.jsxs(v4,{children:[_.jsxs(y4,{children:["Limited time ",_.jsx("span",{className:"highlight",children:"offer"})]}),_.jsx(_4,{children:"boutique360 pre-launch pricing is available exclusively for all orders received before the end of June 2025. Redeem your discount by submitting your email address below."}),_.jsx("form",{onSubmit:a,children:_.jsxs(w4,{children:[_.jsx(b4,{type:"email",placeholder:"Enter your email address",value:r,onChange:l=>o(l.target.value),required:!0}),_.jsx(E4,{type:"submit",children:"Get Discount"})]})})]}),_.jsxs(S4,{children:[_.jsxs(dc,{children:[_.jsx(fc,{children:n.days}),_.jsx(hc,{children:"days"})]}),_.jsxs(dc,{children:[_.jsx(fc,{children:n.hours}),_.jsx(hc,{children:"hours"})]}),_.jsxs(dc,{children:[_.jsx(fc,{children:n.minutes}),_.jsx(hc,{children:"minutes"})]}),_.jsxs(dc,{children:[_.jsx(fc,{children:n.seconds}),_.jsx(hc,{children:"seconds"})]})]})]})]})},ed=ht`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,T4=ht`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,A4=ht`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`,C4=T.section`
  background-color: #000000;
  min-height: 50vh;
  // top: 100px;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(30, 30, 30, 0.3) 0%, transparent 70%);
    z-index: 1;
  }
`,R4=T.div`
  max-width: 600px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
  animation: ${T4} 1s ease-out;
`,L4=T.h1`
  font-size: 4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 60px;
  letter-spacing: -0.02em;
  animation: ${ed} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 40px;
  }
`,P4=T.div`
  margin-bottom: 40px;
  animation: ${ed} 0.8s ease-out 0.2s both;
`,D4=T.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  font-weight: 500;
  letter-spacing: 0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,I4=T.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin-bottom: 50px;
  animation: ${ed} 0.8s ease-out 0.4s both;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
`,U4=T.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: ${ed} 0.8s ease-out 0.6s both;
`,k4=T.div`
  position: relative;
  width: 100%;
`,N4=T.input`
  width: 100%;
  padding: 20px 25px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  box-sizing: border-box;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.3s ease;
  }
  
  &:focus {
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    animation: ${A4} 2s infinite;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
      transform: translateY(-2px);
    }
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-1px);
  }
`,F4=T.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
  
  @media (max-width: 768px) {
    text-align: left;
    justify-content: flex-start;
  }
`,O4=T.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`,z4=T.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`,B4=T.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  
  &::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: white;
    font-size: 12px;
    font-weight: bold;
    transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .hidden-checkbox:checked + & {
    border-color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.1);
    
    &::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  .hidden-checkbox:focus + & {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.05);
  }
`,V4=T.label`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  cursor: pointer;
  margin-left: 15px;
  transition: color 0.3s ease;
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,H4=T.button`
  padding: 18px 50px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-width: 150px;
  align-self: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    letter-spacing: 0.02em;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`,G4=T.div`
  color: #10b981;
  font-size: 1rem;
  margin-top: 20px;
  opacity: ${t=>t.show?1:0};
  transform: translateY(${t=>t.show?0:20}px);
  transition: all 0.3s ease;
`,j4=()=>{const[t,e]=R.useState(""),[n,i]=R.useState(!1),[r,o]=R.useState(!1),[s,a]=R.useState(!1),l=async c=>{c.preventDefault(),!(!t||!n)&&(o(!0),setTimeout(()=>{const u=JSON.parse(localStorage.getItem("contactEmails")||"[]");u.includes(t)||(u.push({email:t,timestamp:new Date().toISOString(),agreed:n}),localStorage.setItem("contactEmails",JSON.stringify(u))),o(!1),a(!0),e(""),i(!1),setTimeout(()=>{a(!1)},3e3)},1e3))};return _.jsx(C4,{children:_.jsxs(R4,{children:[_.jsx(L4,{children:"Contact us"}),_.jsx(P4,{children:_.jsx(D4,{children:"hello@btq360.com / +358 44 537 9042"})}),_.jsx(I4,{children:"or leave your email address and we'll reach out within 24 hours to discuss your vision."}),_.jsxs(U4,{onSubmit:l,children:[_.jsx(k4,{children:_.jsx(N4,{type:"email",placeholder:"Your email",value:t,onChange:c=>e(c.target.value),required:!0})}),_.jsx(F4,{children:_.jsxs(O4,{children:[_.jsx(z4,{type:"checkbox",checked:n,onChange:c=>i(c.target.checked),required:!0,className:"hidden-checkbox"}),_.jsx(B4,{}),_.jsx(V4,{children:"I agree to be contacted about boutique360 services"})]})}),_.jsx(H4,{type:"submit",disabled:!t||!n||r,children:r?"Sending...":"Send"}),_.jsx(G4,{show:s,children:"Thank you! We'll reach out within 24 hours."})]})]})})},W4=ht`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,$4=ht`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;ht`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;const X4=ht`
  0% {
    box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 193, 7, 0.5);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
  }
`,Y4=T.section`
  background-color: #000000;
  min-height: 100vh;
  padding: 100px 40px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 40%, rgba(30, 30, 30, 0.4) 0%, transparent 50%);
    z-index: 1;
  }
`,q4=T.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  animation: ${$4} 1.2s ease-out;
`,K4=T.h1`
  font-size: 4.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 100px;
  letter-spacing: -0.02em;
  animation: ${W4} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 60px;
  }
`,Z4=T.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 60px;
    top: 100px;
    bottom: 100px;
    width: 2px;
    background: linear-gradient(to bottom, 
      rgba(255, 193, 7, 0.8) 0%,
      rgba(255, 193, 7, 0.6) 33%,
      rgba(255, 193, 7, 0.4) 66%,
      rgba(255, 193, 7, 0.2) 100%
    );
    z-index: 1;
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
  
  @media (max-width: 768px) {
    gap: 60px;
  }
`,Q4=T.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  z-index: 2;
  opacity: ${t=>t.isVisible?1:0};
  transform: translateY(${t=>t.isVisible?0:40}px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${t=>t.delay}s;
  
  &:hover .story-title {
    color: #ffc107;
  }
  
  &:hover .story-description {
    color: rgba(255, 255, 255, 0.95);
  }
  
  @media (max-width: 768px) {
    gap: 25px;
  }
`,J4=T.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(40, 40, 40, 0.8);
  border: 2px solid rgba(255, 193, 7, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: scale(1.1);
    border-color: rgba(255, 193, 7, 0.8);
    animation: ${X4} 2s infinite;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: linear-gradient(45deg, 
      rgba(255, 193, 7, 0.2), 
      rgba(255, 193, 7, 0.1), 
      rgba(255, 193, 7, 0.2)
    );
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`,ez=T.div`
  font-size: 2.5rem;
  color: #ffc107;
  transition: all 0.3s ease;
  
  .icon-bulb::before {
    content: '💡';
  }
  
  .icon-search::before {
    content: '🔍';
  }
  
  .icon-rocket::before {
    content: '🚀';
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,tz=T.div`
  flex: 1;
  padding-top: 10px;
`,nz=T.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 25px;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`,iz=T.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`,rz=()=>{const[t,e]=R.useState(new Set),n=R.useRef([]),i=[{id:1,title:"The Concept",description:"While working in hospitality tech, we needed to showcase the dramatic impact of well-designed lighting scenes in hotel rooms. The challenge was how could we show this online?",icon:"icon-bulb",delay:.2},{id:2,title:"The Insight",description:"We realized that many carefully designed spaces look incredible in person, but photos fail to capture the experience. This disconnect sends potential customers to third-party review sites, taking them away from your carefully crafted brand experience.",icon:"icon-search",delay:.4},{id:3,title:"The Solution",description:"Since 2020, we've been developing 360° technology and shooting hotels across Europe. Now we're making our expertise available to businesses beyond hospitality. Our mission is to help distinctive independent spaces showcase their unique atmosphere and connect with customers before they even visit.",icon:"icon-rocket",delay:.6}];return R.useEffect(()=>{const r={threshold:.3,rootMargin:"-50px 0px"},o=new IntersectionObserver(s=>{s.forEach(a=>{const l=parseInt(a.target.dataset.itemId);a.isIntersecting&&e(c=>new Set([...c,l]))})},r);return n.current.forEach(s=>{s&&o.observe(s)}),()=>{n.current.forEach(s=>{s&&o.unobserve(s)})}},[]),_.jsx(Y4,{children:_.jsxs(q4,{children:[_.jsx(K4,{children:"Our story"}),_.jsx(Z4,{children:i.map((r,o)=>_.jsxs(Q4,{ref:s=>n.current[o]=s,"data-item-id":r.id,isVisible:t.has(r.id),delay:r.delay,children:[_.jsx(J4,{children:_.jsx(ez,{children:_.jsx("span",{className:r.icon})})}),_.jsxs(tz,{children:[_.jsx(nz,{className:"story-title",children:r.title}),_.jsx(iz,{className:"story-description",children:r.description})]})]},r.id))})]})})},oz=ht`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,sz=ht`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,az=ht`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,lz=ht`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,cz=ht`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`,uz=ht`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }
`,dz=T.footer`
  background-color: #000000;
  color: white;
  padding: 80px 40px 40px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.3) 20%, 
      rgba(255, 255, 255, 0.6) 50%, 
      rgba(255, 255, 255, 0.3) 80%, 
      transparent 100%
    );
    animation: ${uz} 3s infinite;
  }
`,fz=T.div`
  max-width: 1400px;
  margin: 0 auto;
  animation: ${sz} 1s ease-out;
`,hz=T.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`,pz=T.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: ${az} 0.8s ease-out 0.2s both;
`,mz=T.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    color: #ffc107;
    transform: translateY(-2px);
    animation: ${cz} 1s ease-in-out;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #ffc107, #ff9800);
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::after {
    width: 100%;
  }
`,gz=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Af=T.p`
  margin: 0;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  transition: all 0.3s ease;
  opacity: ${t=>t.isVisible?1:0};
  transform: translateY(${t=>t.isVisible?0:20}px);
  transition-delay: ${t=>t.delay}s;
  
  &:hover {
    color: rgba(255, 255, 255, 1);
    transform: translateX(5px);
  }
`,xz=T.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  margin-top: 20px;
  display: inline-block;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${t=>t.isVisible?1:0};
  transform: translateY(${t=>t.isVisible?0:20}px);
  transition-delay: 0.6s;
  
  &:hover {
    color: #ffc107;
    transform: translateY(-2px);
    
    &::before {
      width: 100%;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: #ffc107;
    transition: width 0.3s ease;
  }
`,vz=T.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  animation: ${lz} 0.8s ease-out 0.4s both;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`,yz=T.nav`
  display: flex;
  gap: 40px;
  
  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`,_z=T.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${t=>t.isVisible?1:0};
  transform: translateY(${t=>t.isVisible?0:20}px);
  transition-delay: ${t=>t.delay}s;
  
  &:hover {
    color: white;
    transform: translateY(-3px);
    
    &::after {
      transform: scaleX(1);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #ffc107, #ff9800);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
`,Sz=T.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`,wz=T.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  opacity: ${t=>t.isVisible?1:0};
  transform: scale(${t=>t.isVisible?1:.5});
  transition-delay: ${t=>t.delay}s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: scale(1.15) rotate(5deg);
    background: rgba(255, 193, 7, 0.2);
    border-color: rgba(255, 193, 7, 0.6);
    color: #ffc107;
    box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: scale(1.05);
  }
`,bz=T.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  animation: ${oz} 0.8s ease-out 0.8s both;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`,Ez=T.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`,Mz=T.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`,Cf=T.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
    
    &::after {
      width: 100%;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.6);
    transition: width 0.3s ease;
  }
  
  &:not(:last-child)::before {
    content: '|';
    position: absolute;
    right: -15px;
    color: rgba(255, 255, 255, 0.3);
  }
`,Tz=T.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,Cy=T.span`
  color: ${t=>t.active?"white":"rgba(255, 255, 255, 0.6)"};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${t=>t.active?"600":"400"};
  
  &:hover {
    color: white;
    transform: scale(1.05);
  }
  
  &:not(:last-child)::after {
    content: '/';
    margin-left: 8px;
    color: rgba(255, 255, 255, 0.4);
  }
`,Az=()=>{const[t,e]=R.useState(!1),[n,i]=R.useState("EN"),r=R.useRef(null);R.useEffect(()=>{const a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&e(!0)})},{threshold:.1});return r.current&&a.observe(r.current),()=>{r.current&&a.unobserve(r.current)}},[]);const o=[{name:"Showcase",href:"#showcase",delay:.1},{name:"Contact",href:"#contact",delay:.2},{name:"petsq.works",href:"https://petsq.works",delay:.3}],s=[{icon:"𝕏",href:"https://linkedin.com",delay:.4},{icon:"📷",href:"https://instagram.com",delay:.5}];return _.jsx(dz,{ref:r,children:_.jsxs(fz,{children:[_.jsxs(hz,{children:[_.jsxs(pz,{children:[_.jsx(mz,{children:"boutique360"}),_.jsxs(gz,{children:[_.jsx(Af,{isVisible:t,delay:.2,children:"Schiekade 189"}),_.jsx(Af,{isVisible:t,delay:.3,children:"3013 BR Rotterdam"}),_.jsx(Af,{isVisible:t,delay:.4,children:"The Netherlands"})]}),_.jsx(xz,{href:"mailto:hello@btq360.com",isVisible:t,children:"hello@btq360.com"})]}),_.jsxs(vz,{children:[_.jsx(yz,{children:o.map((a,l)=>_.jsx(_z,{href:a.href,isVisible:t,delay:a.delay,children:a.name},a.name))}),_.jsx(Sz,{children:s.map((a,l)=>_.jsx(wz,{href:a.href,target:"_blank",rel:"noopener noreferrer",isVisible:t,delay:a.delay,children:a.icon},l))})]})]}),_.jsxs(bz,{children:[_.jsx(Ez,{children:"© 2025 boutique360"}),_.jsxs(Mz,{children:[_.jsx(Cf,{href:"#terms",children:"Terms & Conditions"}),_.jsx(Cf,{href:"#privacy",children:"Privacy Policy"}),_.jsx(Cf,{href:"#sitemap",children:"Sitemap"})]}),_.jsxs(Tz,{children:[_.jsx(Cy,{active:n==="EN",onClick:()=>i("EN"),children:"EN"}),_.jsx(Cy,{active:n==="NL",onClick:()=>i("NL"),children:"NL"})]})]})]})})},Cz=()=>_.jsx(nD,{styles:Tm`
      @import url('https://db.onlinewebfonts.com/c/ceaab1dfa6450f0f06256aa859882c8d?family=Oregon+LDO+Book');
      
      * {
        box-sizing: border-box;
      }
      
      
      html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        width: 100%;
        font-family: 'Oregon LDO Book', sans-serif;
      }
      
      #root {
        width: 100%;
        overflow-x: hidden;
        font-family: 'Oregon LDO Book', sans-serif;
      }
      
      * {
        font-family: 'Oregon LDO Book', sans-serif !important;
      }
    `}),Rz=()=>{try{const t=document.createElement("canvas");return!!(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch{return!1}},Lz=T.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  position: relative;
  background: ${t=>t.fallback?`url(${tr}) center/cover`:"black"};
  overflow: hidden;
`,Pz=T.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: ${t=>t.show?"block":"none"};
`,Dz=T.div`
  position: absolute;
  top: 20%;
  left: 10%;
  max-width: 600px;
  color: white;
  z-index: 1;
`,Iz=T.h1`
  color: rgba(35, 35, 35, 0.9);
  padding: 0.5rem 1rem;
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  line-height: 1.2;
`,Uz=T.p`
  color: rgba(35, 35, 35, 0.9);
  padding: 1rem;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`,kz=T.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: black;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
`,Nz=()=>{const t=R.useRef(null),e=R.useRef(null),[n,i]=R.useState(!0),r=Ji();R.useEffect(()=>{if(!Rz()){console.warn("WebGL is not supported. Falling back to static background."),i(!1);return}let s,a,l,c,u;const h=(()=>{try{if(console.log("Initializing Three.js scene..."),s=new wo,e.current=s,console.log("Scene created"),a=new Dt(75,window.innerWidth/window.innerHeight,.1,1e3),a.position.set(0,0,.1),console.log("Camera created"),l=new kr({antialias:!0,powerPreference:"high-performance"}),l.setSize(window.innerWidth,window.innerHeight),!t.current){console.error("mountRef.current is null"),i(!1);return}t.current.appendChild(l.domElement),console.log("Renderer created and added to DOM");const p=new er(1e3,60,40);p.scale(-1,1,1),console.log("Geometry created");const v=new Cr;let x=new Ti({});const g=v.load(tr,b=>{console.log("Texture loaded successfully"),console.log("Texture dimensions:",b.image.width,"x",b.image.height),x.map=b,x.needsUpdate=!0},b=>{console.log("Loading progress:",b)},b=>{console.error("Error loading texture:",b),console.log("Using fallback color material")});c=new sn(p,x),s.add(c),console.log("Sphere mesh created and added to scene");const f=()=>{a&&l&&(a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",f);let m=!1,y={x:0,y:0},w=.001;const S=b=>{m=!0,y={x:b.clientX,y:b.clientY}},E=b=>{if(m){const C={x:b.clientX-y.x,y:b.clientY-y.y};c.rotation.y+=C.x*.005,c.rotation.x+=C.y*.005,y={x:b.clientX,y:b.clientY}}},M=()=>{m=!1};t.current&&(t.current.addEventListener("mousedown",S),t.current.addEventListener("mousemove",E),t.current.addEventListener("mouseup",M),t.current.addEventListener("mouseleave",M));const P=()=>{u=requestAnimationFrame(P),m||(c.rotation.y+=w),l.render(s,a)};return P(),()=>{window.removeEventListener("resize",f),t.current&&(t.current.removeEventListener("mousedown",S),t.current.removeEventListener("mousemove",E),t.current.removeEventListener("mouseup",M),t.current.removeEventListener("mouseleave",M))}}catch(p){return console.error("Error initializing Three.js scene:",p),i(!1),()=>{}}})();return()=>{if(u&&cancelAnimationFrame(u),t.current&&t.current.firstChild)try{t.current.removeChild(t.current.firstChild)}catch(p){console.warn("Error removing canvas:",p)}h&&h(),e.current&&e.current.traverse(p=>{p.geometry&&p.geometry.dispose(),p.material&&(p.material.map&&p.material.map.dispose(),p.material.dispose())})}},[n]);const o=()=>{r("/IslandExp")};return _.jsxs(_.Fragment,{children:[_.jsx(Cz,{}),_.jsx(CD,{}),_.jsxs(Lz,{fallback:!n,id:"home",children:[n&&_.jsx("div",{ref:t}),_.jsx(Pz,{show:!n}),_.jsxs(Dz,{children:[_.jsx(Iz,{children:"Immersive 360° solutions for spaces worth experiencing"}),_.jsx(Uz,{children:"Our interactive, high-quality virtual tours eliminate doubt and boost direct bookings. Designed for independent spaces, simple to implement, ready in days."}),_.jsx(kz,{onClick:o,children:"Learn more"})]})]}),_.jsx("div",{id:"use-cases",children:_.jsx(bF,{})}),_.jsx(VF,{}),_.jsx(qF,{}),_.jsx("div",{id:"references",children:_.jsx(RF,{})}),_.jsx(mO,{}),_.jsx(bO,{}),_.jsx("div",{id:"process",children:_.jsx(NO,{})}),_.jsx("div",{id:"pricing",children:_.jsx(t4,{})}),_.jsx("div",{id:"faq",children:_.jsx(h4,{})}),_.jsx(M4,{}),_.jsx("div",{id:"contact",children:_.jsx(j4,{})}),_.jsx(rz,{}),_.jsx(Az,{})]})},Fz="/assets/room2-6284517d.png",Oz="/assets/roomview3-5c4b30d4.png",zz=()=>{try{const t=document.createElement("canvas");return!!(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch{return!1}};ht`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;const Bz=ht`
    0%, 100% { box-shadow: 0 0 20px rgba(255, 193, 7, 0.3); }
    50% { box-shadow: 0 0 40px rgba(255, 193, 7, 0.8); }
`,Vz=T.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #000;
    overflow: hidden;
    cursor: grab;
    
    &:active {
        cursor: grabbing;
    }
    
    canvas {
        cursor: grab;
        
        &:active {
            cursor: grabbing;
        }
    }
`,Hz=T.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`,Gz=T.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 100;
`,jz=T.div`
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 60px;
    pointer-events: all;
`,Wz=T.button`
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
    backdrop-filter: blur(20px);
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
        background: rgba(0, 0, 0, 0.9);
        border-color: #ffd700;
        transform: translateY(-2px);
    }
`,$z=T.div`
    text-align: center;
    color: white;
`,Xz=T.h1`
    font-size: 42px;
    font-weight: 100;
    letter-spacing: 8px;
    margin: 0;
    text-transform: uppercase;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
    font-family: 'Oregon LDO Book', sans-serif;
`,Yz=T.div`
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 2px;
    opacity: 0.8;
    margin-top: 8px;
`,qz=T.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    gap: 16px;
    pointer-events: all;
`,Kz=T.button`
    background: ${t=>t.active?"rgba(255, 215, 0, 0.95)":"rgba(0, 0, 0, 0.7)"};
    color: ${t=>t.active?"#000":"white"};
    border: 1px solid ${t=>t.active?"#ffd700":"rgba(255, 255, 255, 0.2)"};
    padding: 16px 24px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};
    backdrop-filter: blur(20px);
    border-radius: 12px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${t=>t.disabled?.4:1};
    min-width: 90px;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    &:hover:not(:disabled) {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        border-color: #ffd700;
        
        &::before {
            left: 100%;
        }
    }

    &:active:not(:disabled) {
        transform: translateY(-1px);
    }

    ${t=>t.active&&Tm`
        animation: ${Bz} 2s infinite;
    `}
`,Zz=T.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 200;
    opacity: ${t=>t.show?1:0};
    visibility: ${t=>t.show?"visible":"hidden"};
    transition: all 0.6s ease;
`,Qz=T.div`
    width: 60px;
    height: 60px;
    border: 3px solid rgba(255, 215, 0, 0.1);
    border-top: 3px solid #ffd700;
    border-radius: 50%;
    animation: spin 1.2s linear infinite;
    margin-bottom: 30px;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`,Jz=T.div`
    color: white;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
`,eB=T.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px 40px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 215, 0, 0.3);
    opacity: ${t=>t.show?1:0};
    transition: opacity 0.3s ease;
    pointer-events: none;
`,pc={day:{label:"Day",image:tr,lightIntensity:1.2,ambientColor:16777215,fogColor:15792383},evening:{label:"Evening",image:Fz,lightIntensity:.8,ambientColor:16766115,fogColor:2889744},night:{label:"Night",image:Oz,lightIntensity:.3,ambientColor:1719644,fogColor:657946},off:{label:"Off",image:null,lightIntensity:0,ambientColor:0,fogColor:0}},tB=()=>{const t=Ji(),e=R.useRef(null),n=R.useRef(null),i=R.useRef(null),r=R.useRef(null),o=R.useRef(null),s=R.useRef(null),[a,l]=R.useState("day"),[c,u]=R.useState(!0),[d,h]=R.useState(!0),[p,v]=R.useState(!1),[x,g]=R.useState(!0);R.useEffect(()=>{if(!zz()){console.error("WebGL not supported"),h(!1),u(!1);return}return(()=>{try{console.log("🚀 Initializing 3D scene...");const E=new wo;n.current=E,console.log("✅ Scene created");const M=new Dt(75,window.innerWidth/window.innerHeight,.1,1e3);M.position.set(0,0,.1),o.current=M,console.log("✅ Camera created");const P=new kr({antialias:!0,powerPreference:"high-performance"});P.setSize(window.innerWidth,window.innerHeight),P.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.current=P,console.log("✅ Renderer created"),e.current&&(e.current.appendChild(P.domElement),console.log("✅ Canvas added to DOM"));const b=new er(1e3,60,40);b.scale(-1,1,1),console.log("✅ Sphere geometry created");const C=new Cr;let F=new Ti({});const O=C.load(pc.day.image,z=>{console.log("✅ Texture loaded successfully"),console.log("📏 Texture dimensions:",z.image.width,"x",z.image.height),F.map=z,F.needsUpdate=!0},z=>{console.log("📊 Loading progress:",z)},z=>{console.error("❌ Error loading texture:",z),console.log("Using fallback color material")}),I=new sn(b,F);E.add(I),r.current=I,console.log("✅ Sphere mesh created and added to scene"),f(),m(),u(!1),console.log("🎉 Scene initialization complete")}catch(E){console.error("❌ Failed to initialize 3D scene:",E),h(!1),u(!1)}})(),()=>{s.current&&cancelAnimationFrame(s.current),w()}},[]);const f=()=>{var z;const S=(z=i.current)==null?void 0:z.domElement;if(!S)return;let E=!1,M={x:0,y:0};const P=V=>{E=!0,g(!1),M={x:V.clientX,y:V.clientY}},b=V=>{if(E&&r.current){const ee={x:V.clientX-M.x,y:V.clientY-M.y};r.current.rotation.y+=ee.x*.005,r.current.rotation.x+=ee.y*.005,r.current.rotation.x=Math.max(-Math.PI/3,Math.min(Math.PI/3,r.current.rotation.x)),M={x:V.clientX,y:V.clientY}}},C=()=>{E=!1,setTimeout(()=>g(!0),2e3)},F=V=>{V.touches.length===1&&(E=!0,g(!1),M={x:V.touches[0].clientX,y:V.touches[0].clientY})},O=V=>{if(E&&V.touches.length===1&&r.current){V.preventDefault();const ee={x:V.touches[0].clientX-M.x,y:V.touches[0].clientY-M.y};r.current.rotation.y+=ee.x*.005,r.current.rotation.x+=ee.y*.005,r.current.rotation.x=Math.max(-Math.PI/3,Math.min(Math.PI/3,r.current.rotation.x)),M={x:V.touches[0].clientX,y:V.touches[0].clientY}}},I=()=>{E=!1,setTimeout(()=>g(!0),2e3)};return S.addEventListener("mousedown",P),S.addEventListener("mousemove",b),S.addEventListener("mouseup",C),S.addEventListener("mouseleave",C),S.addEventListener("touchstart",F,{passive:!1}),S.addEventListener("touchmove",O,{passive:!1}),S.addEventListener("touchend",I),()=>{S.removeEventListener("mousedown",P),S.removeEventListener("mousemove",b),S.removeEventListener("mouseup",C),S.removeEventListener("mouseleave",C),S.removeEventListener("touchstart",F),S.removeEventListener("touchmove",O),S.removeEventListener("touchend",I)}},m=()=>{s.current=requestAnimationFrame(m),r.current&&x&&(r.current.rotation.y+=.001),i.current&&n.current&&o.current&&i.current.render(n.current,o.current)};R.useEffect(()=>{const S=()=>{o.current&&i.current&&(o.current.aspect=window.innerWidth/window.innerHeight,o.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]);const y=S=>{if(console.log("🔄 Changing time to:",S),S===a||p||!r.current){console.log("⏭️ Skipping change - same time or transitioning or no sphere");return}v(!0),console.log("🔄 Starting transition...");try{const E=pc[S];if(console.log("⚙️ Time config:",E),S==="off"){console.log("⚫ Setting OFF mode");const P=r.current.material;P.color.setHex(0),P.map=null,P.needsUpdate=!0,l(S),v(!1);return}console.log("📥 Loading new texture for:",S),new Cr().load(E.image,P=>{console.log("✅ New texture loaded successfully"),console.log("📏 Texture dimensions:",P.image.width,"x",P.image.height);const b=r.current.material,C=b.map;b.map=P,b.color.setHex(16777215),b.needsUpdate=!0,console.log("🔄 Material updated with new texture"),C&&(C.dispose(),console.log("🗑️ Old texture disposed")),l(S),v(!1),console.log("✅ Time change completed successfully")},P=>{console.log("📊 Loading progress:",P)},P=>{console.error("❌ Failed to change time:",P),v(!1)})}catch(E){console.error("❌ Failed to change time:",E),v(!1)}},w=()=>{if(e.current&&i.current){const S=i.current.domElement;S&&S.parentNode&&S.parentNode.removeChild(S)}n.current&&n.current.traverse(S=>{S.geometry&&S.geometry.dispose(),S.material&&(S.material.map&&S.material.map.dispose(),S.material.dispose())}),i.current&&i.current.dispose()};return _.jsxs(Vz,{children:[_.jsxs(Zz,{show:c,children:[_.jsx(Qz,{}),_.jsx(Jz,{children:"Loading Panoramic Experience"})]}),d&&_.jsx(Hz,{ref:e}),_.jsxs(Gz,{children:[_.jsxs(jz,{children:[_.jsx(Wz,{onClick:()=>t("/"),children:"← Back to Home"}),_.jsxs($z,{children:[_.jsx(Xz,{children:"THE OVERLOOK HOTEL"}),_.jsx(Yz,{children:"39.7392° N, 105.9903° E"})]}),_.jsx("div",{style:{width:"140px"}})," "]}),_.jsx(qz,{children:Object.keys(pc).map(S=>_.jsx(Kz,{active:a===S,disabled:c||p||!d,onClick:()=>y(S),children:pc[S].label},S))}),!d&&_.jsx(eB,{show:!0,children:"WebGL not supported - Please use a modern browser"})]})]})},nB=()=>_.jsx(tB,{}),td="/assets/chirping-birds-ambience-217410-b08729e1.mp3",iB="/assets/video1-47daa41e.mp4",rB=T.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #000;
    overflow: hidden;
`,oB=T.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`,sB=T.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    pointer-events: none;
`,aB=T.button`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        left: 15px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        left: 10px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,lB=T.button`
    position: absolute;
    top: 20px;
    right: 80px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        right: 70px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        right: 60px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,cB=T.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        right: 15px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,uB=T.div`
    position: absolute;
    bottom: ${t=>t.footerVisible?"220px":"40px"};
    left: 40px;
    width: 280px;
    height: 200px;
    background: transparent;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    pointer-events: all;
    backdrop-filter: blur(10px);
    transition: bottom 0.3s ease;

    @media (max-width: 768px) {
        width: 240px;
        height: 170px;
        left: 20px;
        padding: 15px;
        bottom: ${t=>t.footerVisible?"200px":"20px"};
    }

    @media (max-width: 480px) {
        width: 200px;
        height: 140px;
        left: 10px;
        padding: 10px;
        bottom: ${t=>t.footerVisible?"180px":"10px"};
        border-radius: 10px;
    }
`,dB=T.svg`
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,fB=T.div`
    position: absolute;
    bottom: ${t=>t.show?"0":"-200px"};
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    padding: 30px 40px;
    color: white;
    pointer-events: all;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    transition: bottom 0.3s ease;
    z-index: 15;

    @media (max-width: 768px) {
        padding: 20px 25px;
        bottom: ${t=>t.show?"0":"-180px"};
    }

    @media (max-width: 480px) {
        padding: 15px 20px;
        bottom: ${t=>t.show?"0":"-160px"};
    }
`,hB=T.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 40px;
    align-items: start;
    position: relative;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 200px;
        gap: 20px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 15px;
    }
`,pB=T.div`
    flex: 1;
`,mB=T.h2`
    font-size: 32px;
    font-weight: 400;
    margin: 0 0 20px 0;
    color: white;

    @media (max-width: 768px) {
        font-size: 24px;
        margin: 0 0 15px 0;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        margin: 0 0 10px 0;
    }
`,gB=T.p`
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 1.5;
    }

    @media (max-width: 480px) {
        font-size: 13px;
        line-height: 1.4;
    }
`,xB=T.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);

    @media (max-width: 768px) {
        gap: 15px;
        padding-left: 15px;
    }

    @media (max-width: 480px) {
        gap: 10px;
        padding-left: 0;
        border-left: none;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
`;T.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;const Rf=T.div`
    text-align: left;
`,Lf=T.div`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 5px;
`,Pf=T.div`
    font-size: 14px;
    font-weight: 500;
    color: white;
`,vB=T.div`
    position: absolute;
    right: 0;
    top: -60px;
    display: flex;
    gap: 15px;
    pointer-events: all;

    @media (max-width: 768px) {
        top: -50px;
        gap: 10px;
    }

    @media (max-width: 480px) {
        position: relative;
        top: 15px;
        right: auto;
        justify-content: center;
        margin-top: 15px;
        gap: 8px;
    }
`,yB=T.div`
    display: flex;
    gap: 15px;
`,Ry=T.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }

    @media (max-width: 768px) {
        width: 44px;
        height: 44px;
        font-size: 16px;
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
        font-size: 14px;
    }
`,_B=T.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,Ub=({onNavigate:t,onBack:e})=>{const n=Ji(),i=R.useRef(null),r=R.useRef(null),[o,s]=R.useState(0),[a,l]=R.useState(!0),[c,u]=R.useState(!0),[d,h]=R.useState(!1),p=[{title:"Summer Shepherds",description:"Each summer, sheep are brought to Isokari as part of a traditional method for managing the landscape. Volunteers stay in the old pilot house and help care for the animals, supporting the island's biodiversity by keeping open habitats from becoming overgrown.",date:"12/05/2025",time:"17:56",coordinates:"60.7153°N, 21.0128°E"}];R.useEffect(()=>{i.current&&i.current.play()},[]),R.useEffect(()=>{const w=new Audio(td);w.loop=!0,w.volume=.3,w.preload="auto";const S=()=>{h(!0),console.log("🎵 Audio loaded and ready to play")},E=M=>{console.error("❌ Audio loading error:",M)};return w.addEventListener("canplaythrough",S),w.addEventListener("error",E),r.current=w,()=>{w.removeEventListener("canplaythrough",S),w.removeEventListener("error",E),r.current&&(r.current.pause(),r.current=null)}},[]);const v=()=>{e?e():n("/IslandExp")},x=()=>{l(!a)},g=()=>{const w=!c;u(w),r.current&&d&&(w?(r.current.pause(),console.log("🔇 Audio muted")):(r.current.play().catch(S=>{console.error("❌ Error playing audio:",S),console.log("ℹ️ Audio play blocked - user interaction may be required")}),console.log("🔊 Audio unmuted")))},f=()=>{t&&t("next")},m=()=>{t&&t("prev")},y=p[o];return _.jsxs(rB,{children:[_.jsx(oB,{ref:i,src:iB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),_.jsxs(sB,{children:[_.jsx(aB,{onClick:v,children:"←"}),_.jsx(lB,{onClick:x,children:"≡"}),_.jsx(cB,{onClick:g,children:c?"🔇":"🔊"}),_.jsx(uB,{footerVisible:a,children:_.jsxs(dB,{viewBox:"0 0 280 160",children:[_.jsxs("g",{fill:"#E8F4F8",stroke:"#B0D4E3",strokeWidth:"1",children:[_.jsx("path",{d:"M50 20 L50 120 L80 140 L120 130 L150 110 L180 100 L200 80 L210 60 L200 40 L180 30 L160 25 L140 20 L120 15 L100 10 L80 15 Z"}),_.jsx("path",{d:"M90 25 L95 35 L100 30 L105 40 L110 35 L115 45 L120 40 L125 50 L130 45 L135 55 L140 50 L145 60 L150 55 L155 65 L160 60 L165 70 L170 65 L175 75 L180 70 L185 80 L190 75 L195 85 L200 80"})]}),_.jsx("circle",{cx:"85",cy:"95",r:"4",fill:"#FF6B35",stroke:"white",strokeWidth:"2"}),_.jsx("circle",{cx:"85",cy:"95",r:"8",fill:"rgba(255, 107, 53, 0.3)"}),_.jsxs("circle",{cx:"85",cy:"95",r:"2",fill:"#FF6B35",children:[_.jsx("animate",{attributeName:"r",values:"2;6;2",dur:"2s",repeatCount:"indefinite"}),_.jsx("animate",{attributeName:"opacity",values:"1;0.3;1",dur:"2s",repeatCount:"indefinite"})]})]})}),_.jsx(fB,{show:a,children:_.jsxs(hB,{children:[_.jsxs(pB,{children:[_.jsx(mB,{children:y.title}),_.jsx(gB,{children:y.description})]}),_.jsxs(xB,{children:[_.jsxs(Rf,{children:[_.jsx(Lf,{children:"DATE"}),_.jsx(Pf,{children:y.date})]}),_.jsxs(Rf,{children:[_.jsx(Lf,{children:"TIME"}),_.jsx(Pf,{children:y.time})]}),_.jsxs(Rf,{children:[_.jsx(Lf,{children:"LOCATION"}),_.jsx(Pf,{children:y.coordinates})]})]}),_.jsxs(vB,{children:[_.jsx(_B,{children:"?"}),_.jsxs(yB,{children:[_.jsx(Ry,{onClick:m,children:"←"}),_.jsx(Ry,{onClick:f,children:"→"})]})]})]})})]})]})},SB=()=>{try{const t=document.createElement("canvas");return!!(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch{return!1}},wB=T.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #000;
    overflow: hidden;
    cursor: grab;
    
    &:active {
        cursor: grabbing;
    }
    
    canvas {
        cursor: grab;
        
        &:active {
            cursor: grabbing;
        }
    }
`,bB=T.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 100;
    
`,EB=T.button`
    position: absolute;
    top: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.7);
        border-color: rgba(255, 255, 255, 0.5);
    }
`,MB=T.button`
    position: absolute;
    top: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.7);
        border-color: rgba(255, 255, 255, 0.5);
    }
`,TB=T.button`
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.7);
        border-color: rgba(255, 255, 255, 0.5);
    }
`,AB=T.div`
    position: absolute;
    bottom: 100px;
    right: 30px;
    background: transparent;
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 30px;
    color: black;
    max-width: 400px;
    min-width: 350px;
    pointer-events: all;
    border: 1px solid rgba(255, 255, 255, 0.1);
    opacity: ${t=>t.show?1:0};
    visibility: ${t=>t.show?"visible":"hidden"};
    transform: ${t=>t.show?"translateY(0)":"translateY(20px)"};
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`,CB=T.h3`
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 20px 0;
    color: black;
`,RB=T.p`
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    color: black;
`,Ly=T.a`
    color: black;
    text-decoration: underline;
    cursor: pointer;
    
    &:hover {
        color: #ffd700;
    }
`,LB=T.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    color: white;
    max-width: 500px;
    pointer-events: all;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
`,PB=T.h1`
    font-size: 48px;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 300;
    letter-spacing: 3px;
    margin: 0 0 20px 0;
    text-transform: uppercase;
`,DB=T.p`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.9);
    line-height: 1.6;
    margin: 0 0 40px 0;
    opacity: 0.9;
    font-weight: 300;
`,IB=T.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    
`,Py=T.button`
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 140px;
    backdrop-filter: blur(10px);

    &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
    }
`;T.span`
    font-size: 14px;
    opacity: 0.8;
`;const Dy=T.span`
    font-size: 24px;
`,Iy=T.span`
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
    color: black;
`,UB=({onExperienceSelect:t})=>{const e=Ji();Qi();const n=R.useRef(null),i=R.useRef(null),r=R.useRef(null),o=R.useRef(null),s=R.useRef(null),a=R.useRef(null),l=R.useRef(null),[c,u]=R.useState(!0),[d,h]=R.useState(!0),[p,v]=R.useState(!0),[x,g]=R.useState(!1),[f,m]=R.useState(!1);R.useEffect(()=>{if(!SB()){console.error("WebGL not supported"),u(!1);return}return(()=>{try{console.log("🚀 Initializing Island 3D scene...");const O=new wo;i.current=O;const I=new Dt(75,window.innerWidth/window.innerHeight,.1,1e3);I.position.set(0,0,.1),s.current=I;const z=new kr({antialias:!0,powerPreference:"high-performance"});z.setSize(window.innerWidth,window.innerHeight),z.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.current=z,n.current&&n.current.appendChild(z.domElement);const V=new er(1e3,60,40);V.scale(-1,1,1);const ee=new Cr;let $=new Ti({});ee.load(tr,j=>{console.log("✅ Texture loaded successfully"),$.map=j,$.needsUpdate=!0},j=>{console.log("📊 Loading progress:",j)},j=>{console.error("❌ Error loading texture:",j)});const U=new sn(V,$);O.add(U),o.current=U,y(),w(),console.log("🎉 Island scene initialization complete")}catch(O){console.error("❌ Failed to initialize Island 3D scene:",O),u(!1)}})(),()=>{a.current&&cancelAnimationFrame(a.current),S()}},[]),R.useEffect(()=>{const F=new Audio(td);F.loop=!0,F.volume=.3,F.preload="auto";const O=()=>{m(!0),console.log("🎵 Audio loaded and ready to play")},I=z=>{console.error("❌ Audio loading error:",z)};return F.addEventListener("canplaythrough",O),F.addEventListener("error",I),l.current=F,()=>{F.removeEventListener("canplaythrough",O),F.removeEventListener("error",I),l.current&&(l.current.pause(),l.current=null)}},[]);const y=()=>{var G;const F=(G=r.current)==null?void 0:G.domElement;if(!F)return;let O=!1,I={x:0,y:0};const z=re=>{O=!0,h(!1),I={x:re.clientX,y:re.clientY}},V=re=>{if(O&&o.current){const te={x:re.clientX-I.x,y:re.clientY-I.y};o.current.rotation.y+=te.x*.005,o.current.rotation.x+=te.y*.005,o.current.rotation.x=Math.max(-Math.PI/3,Math.min(Math.PI/3,o.current.rotation.x)),I={x:re.clientX,y:re.clientY}}},ee=()=>{O=!1,setTimeout(()=>h(!0),2e3)},$=re=>{re.touches.length===1&&(O=!0,h(!1),I={x:re.touches[0].clientX,y:re.touches[0].clientY})},U=re=>{if(O&&re.touches.length===1&&o.current){re.preventDefault();const te={x:re.touches[0].clientX-I.x,y:re.touches[0].clientY-I.y};o.current.rotation.y+=te.x*.005,o.current.rotation.x+=te.y*.005,o.current.rotation.x=Math.max(-Math.PI/3,Math.min(Math.PI/3,o.current.rotation.x)),I={x:re.touches[0].clientX,y:re.touches[0].clientY}}},j=()=>{O=!1,setTimeout(()=>h(!0),2e3)};return F.addEventListener("mousedown",z),F.addEventListener("mousemove",V),F.addEventListener("mouseup",ee),F.addEventListener("mouseleave",ee),F.addEventListener("touchstart",$,{passive:!1}),F.addEventListener("touchmove",U,{passive:!1}),F.addEventListener("touchend",j),()=>{F.removeEventListener("mousedown",z),F.removeEventListener("mousemove",V),F.removeEventListener("mouseup",ee),F.removeEventListener("mouseleave",ee),F.removeEventListener("touchstart",$),F.removeEventListener("touchmove",U),F.removeEventListener("touchend",j)}},w=()=>{a.current=requestAnimationFrame(w),o.current&&d&&(o.current.rotation.y+=.001),r.current&&i.current&&s.current&&r.current.render(i.current,s.current)};R.useEffect(()=>{const F=()=>{s.current&&r.current&&(s.current.aspect=window.innerWidth/window.innerHeight,s.current.updateProjectionMatrix(),r.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[]);const S=()=>{if(n.current&&r.current){const F=r.current.domElement;F&&F.parentNode&&F.parentNode.removeChild(F)}i.current&&i.current.traverse(F=>{F.geometry&&F.geometry.dispose(),F.material&&(F.material.map&&F.material.map.dispose(),F.material.dispose())}),r.current&&r.current.dispose()},E=()=>{t&&t("island")},M=()=>{t&&t("house")},P=()=>{const F=!p;v(F),l.current&&f&&(F?(l.current.pause(),console.log("🔇 Audio muted")):(l.current.play().catch(O=>{console.error("❌ Error playing audio:",O),console.log("ℹ️ Audio play blocked - user interaction may be required")}),console.log("🔊 Audio unmuted")))},b=()=>{g(!x)},C=()=>{e("/")};return _.jsxs(wB,{children:[c&&_.jsx("div",{ref:n}),_.jsxs(bB,{children:[_.jsx(MB,{onClick:C,children:"←"}),_.jsx(EB,{onClick:P,children:p?"🔇":"🔊"}),_.jsxs(LB,{children:[_.jsx(PB,{children:"ISOKARI 360°"}),_.jsx(DB,{children:"Journey to Finland's edge where lighthouse keepers once watched over the Gulf of Bothnia. Experience Isokari island's raw beauty and learn about nature and history in immersive 360°."}),_.jsxs(IB,{children:[_.jsxs(Py,{onClick:E,children:[_.jsx(Dy,{children:"⚡"}),_.jsxs(Iy,{children:["Island",_.jsx("br",{}),"Experience"]})]}),_.jsxs(Py,{onClick:M,children:[_.jsx(Dy,{children:"🏠"}),_.jsx(Iy,{children:"Old Pilot House"})]})]})]}),_.jsx(TB,{onClick:b,children:"ℹ"}),_.jsxs(AB,{show:x,children:[_.jsx(CB,{children:"About Isokari 360°"}),_.jsxs(RB,{children:["This interactive experience is provided by"," ",_.jsx(Ly,{href:"https://boutique360.com",target:"_blank",rel:"noopener noreferrer",children:"boutique360"}),". Learn more about Isokari at"," ",_.jsx(Ly,{href:"https://isokari.fi",target:"_blank",rel:"noopener noreferrer",children:"isokari.fi"}),"."]})]})]})]})},kB="/assets/island2-f7d81851.mp4",NB=T.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #000;
    overflow: hidden;
`,FB=T.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`,OB=T.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    pointer-events: none;
`,zB=T.button`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        left: 15px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        left: 10px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,BB=T.button`
    position: absolute;
    top: 20px;
    right: 80px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        right: 70px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        right: 60px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,VB=T.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        right: 15px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,HB=T.div`
    position: absolute;
    bottom: ${t=>t.footerVisible?"220px":"40px"};
    left: 40px;
    width: 280px;
    height: 200px;
    background: transparent;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    pointer-events: all;
    backdrop-filter: blur(10px);
    transition: bottom 0.3s ease;

    @media (max-width: 768px) {
        width: 240px;
        height: 170px;
        left: 20px;
        padding: 15px;
        bottom: ${t=>t.footerVisible?"200px":"20px"};
    }

    @media (max-width: 480px) {
        width: 200px;
        height: 140px;
        left: 10px;
        padding: 10px;
        bottom: ${t=>t.footerVisible?"180px":"10px"};
        border-radius: 10px;
    }
`,GB=T.svg`
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,jB=T.div`
    position: absolute;
    bottom: ${t=>t.show?"0":"-200px"};
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    padding: 30px 40px;
    color: white;
    pointer-events: all;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    transition: bottom 0.3s ease;
    z-index: 15;

    @media (max-width: 768px) {
        padding: 20px 25px;
        bottom: ${t=>t.show?"0":"-180px"};
    }

    @media (max-width: 480px) {
        padding: 15px 20px;
        bottom: ${t=>t.show?"0":"-160px"};
    }
`,WB=T.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 40px;
    align-items: start;
    position: relative;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 200px;
        gap: 20px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 15px;
    }
`,$B=T.div`
    flex: 1;
`,XB=T.h2`
    font-size: 32px;
    font-weight: 400;
    margin: 0 0 20px 0;
    color: white;

    @media (max-width: 768px) {
        font-size: 24px;
        margin: 0 0 15px 0;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        margin: 0 0 10px 0;
    }
`,YB=T.p`
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 1.5;
    }

    @media (max-width: 480px) {
        font-size: 13px;
        line-height: 1.4;
    }
`,qB=T.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);

    @media (max-width: 768px) {
        gap: 15px;
        padding-left: 15px;
    }

    @media (max-width: 480px) {
        gap: 10px;
        padding-left: 0;
        border-left: none;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
`,Df=T.div`
    text-align: left;
`,If=T.div`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 5px;
`,Uf=T.div`
    font-size: 14px;
    font-weight: 500;
    color: white;
`,KB=T.div`
    position: absolute;
    right: 0;
    top: -60px;
    display: flex;
    gap: 15px;
    pointer-events: all;

    @media (max-width: 768px) {
        top: -50px;
        gap: 10px;
    }

    @media (max-width: 480px) {
        position: relative;
        top: 15px;
        right: auto;
        justify-content: center;
        margin-top: 15px;
        gap: 8px;
    }
`,ZB=T.div`
    display: flex;
    gap: 15px;
`,Uy=T.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }

    @media (max-width: 768px) {
        width: 44px;
        height: 44px;
        font-size: 16px;
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
        font-size: 14px;
    }
`,QB=T.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,kb=({onNavigate:t,onBack:e})=>{const n=Ji(),i=R.useRef(null),r=R.useRef(null);R.useState(0);const[o,s]=R.useState(!0),[a,l]=R.useState(!0),[c,u]=R.useState(!1),d={title:"Lighthouse Keepers",description:"The historic lighthouse of Isokari has guided ships through the treacherous waters of the Gulf of Bothnia for over a century. Brave lighthouse keepers lived in isolation, maintaining the beacon that saved countless lives from the rocky shores.",date:"15/07/2025",time:"14:23",coordinates:"60.7201°N, 21.0165°E"};R.useEffect(()=>{i.current&&i.current.play()},[]),R.useEffect(()=>{const f=new Audio(td);f.loop=!0,f.volume=.3,f.preload="auto";const m=()=>{u(!0),console.log("🎵 Audio loaded and ready to play")},y=w=>{console.error("❌ Audio loading error:",w)};return f.addEventListener("canplaythrough",m),f.addEventListener("error",y),r.current=f,()=>{f.removeEventListener("canplaythrough",m),f.removeEventListener("error",y),r.current&&(r.current.pause(),r.current=null)}},[]);const h=()=>{e?e():n("/IslandExp")},p=()=>{s(!o)},v=()=>{const f=!a;l(f),r.current&&c&&(f?(r.current.pause(),console.log("🔇 Audio muted")):(r.current.play().catch(m=>{console.error("❌ Error playing audio:",m),console.log("ℹ️ Audio play blocked - user interaction may be required")}),console.log("🔊 Audio unmuted")))},x=()=>{t&&t("next")},g=()=>{t&&t("prev")};return _.jsxs(NB,{children:[_.jsx(FB,{ref:i,src:kB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),_.jsxs(OB,{children:[_.jsx(zB,{onClick:h,children:"←"}),_.jsx(BB,{onClick:p,children:"≡"}),_.jsx(VB,{onClick:v,children:a?"🔇":"🔊"}),_.jsx(HB,{footerVisible:o,children:_.jsxs(GB,{viewBox:"0 0 280 160",children:[_.jsxs("g",{fill:"#E8F4F8",stroke:"#B0D4E3",strokeWidth:"1",children:[_.jsx("path",{d:"M50 20 L50 120 L80 140 L120 130 L150 110 L180 100 L200 80 L210 60 L200 40 L180 30 L160 25 L140 20 L120 15 L100 10 L80 15 Z"}),_.jsx("path",{d:"M90 25 L95 35 L100 30 L105 40 L110 35 L115 45 L120 40 L125 50 L130 45 L135 55 L140 50 L145 60 L150 55 L155 65 L160 60 L165 70 L170 65 L175 75 L180 70 L185 80 L190 75 L195 85 L200 80"})]}),_.jsx("circle",{cx:"95",cy:"80",r:"4",fill:"#FF6B35",stroke:"white",strokeWidth:"2"}),_.jsx("circle",{cx:"95",cy:"80",r:"8",fill:"rgba(255, 107, 53, 0.3)"}),_.jsxs("circle",{cx:"95",cy:"80",r:"2",fill:"#FF6B35",children:[_.jsx("animate",{attributeName:"r",values:"2;6;2",dur:"2s",repeatCount:"indefinite"}),_.jsx("animate",{attributeName:"opacity",values:"1;0.3;1",dur:"2s",repeatCount:"indefinite"})]})]})}),_.jsx(jB,{show:o,children:_.jsxs(WB,{children:[_.jsxs($B,{children:[_.jsx(XB,{children:d.title}),_.jsx(YB,{children:d.description})]}),_.jsxs(qB,{children:[_.jsxs(Df,{children:[_.jsx(If,{children:"DATE"}),_.jsx(Uf,{children:d.date})]}),_.jsxs(Df,{children:[_.jsx(If,{children:"TIME"}),_.jsx(Uf,{children:d.time})]}),_.jsxs(Df,{children:[_.jsx(If,{children:"LOCATION"}),_.jsx(Uf,{children:d.coordinates})]})]}),_.jsxs(KB,{children:[_.jsx(QB,{children:"?"}),_.jsxs(ZB,{children:[_.jsx(Uy,{onClick:g,children:"←"}),_.jsx(Uy,{onClick:x,children:"→"})]})]})]})})]})]})},JB="/assets/video3-c1ef9721.mp4",eV=T.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background: #000;
    overflow: hidden;
`,tV=T.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`,nV=T.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    pointer-events: none;
`,iV=T.button`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        left: 15px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        left: 10px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,rV=T.button`
    position: absolute;
    top: 20px;
    right: 80px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        right: 70px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        right: 60px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,oV=T.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        top: 15px;
        right: 15px;
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        top: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,sV=T.div`
    position: absolute;
    bottom: ${t=>t.footerVisible?"220px":"40px"};
    left: 40px;
    width: 280px;
    height: 200px;
    background: transparent;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    pointer-events: all;
    backdrop-filter: blur(10px);
    transition: bottom 0.3s ease;

    @media (max-width: 768px) {
        width: 240px;
        height: 170px;
        left: 20px;
        padding: 15px;
        bottom: ${t=>t.footerVisible?"200px":"20px"};
    }

    @media (max-width: 480px) {
        width: 200px;
        height: 140px;
        left: 10px;
        padding: 10px;
        bottom: ${t=>t.footerVisible?"180px":"10px"};
        border-radius: 10px;
    }
`,aV=T.svg`
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`,lV=T.div`
    position: absolute;
    bottom: ${t=>t.show?"0":"-200px"};
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    padding: 30px 40px;
    color: white;
    pointer-events: all;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    transition: bottom 0.3s ease;
    z-index: 15;

    @media (max-width: 768px) {
        padding: 20px 25px;
        bottom: ${t=>t.show?"0":"-180px"};
    }

    @media (max-width: 480px) {
        padding: 15px 20px;
        bottom: ${t=>t.show?"0":"-160px"};
    }
`,cV=T.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 40px;
    align-items: start;
    position: relative;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 200px;
        gap: 20px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 15px;
    }
`,uV=T.div`
    flex: 1;
`,dV=T.h2`
    font-size: 32px;
    font-weight: 400;
    margin: 0 0 20px 0;
    color: white;

    @media (max-width: 768px) {
        font-size: 24px;
        margin: 0 0 15px 0;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        margin: 0 0 10px 0;
    }
`,fV=T.p`
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    color: rgba(255, 255, 255, 0.9);

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 1.5;
    }

    @media (max-width: 480px) {
        font-size: 13px;
        line-height: 1.4;
    }
`,hV=T.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);

    @media (max-width: 768px) {
        gap: 15px;
        padding-left: 15px;
    }

    @media (max-width: 480px) {
        gap: 10px;
        padding-left: 0;
        border-left: none;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
`,kf=T.div`
    text-align: left;
`,Nf=T.div`
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 5px;
`,Ff=T.div`
    font-size: 14px;
    font-weight: 500;
    color: white;
`,pV=T.div`
    position: absolute;
    right: 0;
    top: -60px;
    display: flex;
    gap: 15px;
    pointer-events: all;

    @media (max-width: 768px) {
        top: -50px;
        gap: 10px;
    }

    @media (max-width: 480px) {
        position: relative;
        top: 15px;
        right: auto;
        justify-content: center;
        margin-top: 15px;
        gap: 8px;
    }
`,mV=T.div`
    display: flex;
    gap: 15px;
`,ky=T.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }

    @media (max-width: 768px) {
        width: 44px;
        height: 44px;
        font-size: 16px;
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
        font-size: 14px;
    }
`,gV=T.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    color: #666;
    font-size: 20px;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(255, 255, 255, 1);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        width: 44px;
        height: 44px;
        font-size: 18px;
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
`,Nb=({onNavigate:t,onBack:e})=>{const n=Ji(),i=R.useRef(null),r=R.useRef(null);R.useState(0);const[o,s]=R.useState(!0),[a,l]=R.useState(!0),[c,u]=R.useState(!1),d={title:"Arctic Seabirds",description:"Isokari serves as a crucial nesting ground for countless seabirds migrating through the Baltic Sea. The island's protected status ensures these magnificent creatures have a safe haven to rest, breed, and continue their ancient journeys across the northern waters.",date:"22/08/2025",time:"09:15",coordinates:"60.7089°N, 21.0241°E"};R.useEffect(()=>{i.current&&i.current.play()},[]),R.useEffect(()=>{const f=new Audio(td);f.loop=!0,f.volume=.3,f.preload="auto";const m=()=>{u(!0),console.log("🎵 Audio loaded and ready to play")},y=w=>{console.error("❌ Audio loading error:",w)};return f.addEventListener("canplaythrough",m),f.addEventListener("error",y),r.current=f,()=>{f.removeEventListener("canplaythrough",m),f.removeEventListener("error",y),r.current&&(r.current.pause(),r.current=null)}},[]);const h=()=>{e?e():n("/IslandExp")},p=()=>{s(!o)},v=()=>{const f=!a;l(f),r.current&&c&&(f?(r.current.pause(),console.log("🔇 Audio muted")):(r.current.play().catch(m=>{console.error("❌ Error playing audio:",m),console.log("ℹ️ Audio play blocked - user interaction may be required")}),console.log("🔊 Audio unmuted")))},x=()=>{t&&t("next")},g=()=>{t&&t("prev")};return _.jsxs(eV,{children:[_.jsx(tV,{ref:i,src:JB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),_.jsxs(nV,{children:[_.jsx(iV,{onClick:h,children:"←"}),_.jsx(rV,{onClick:p,children:"≡"}),_.jsx(oV,{onClick:v,children:a?"🔇":"🔊"}),_.jsx(sV,{footerVisible:o,children:_.jsxs(aV,{viewBox:"0 0 280 160",children:[_.jsxs("g",{fill:"#E8F4F8",stroke:"#B0D4E3",strokeWidth:"1",children:[_.jsx("path",{d:"M50 20 L50 120 L80 140 L120 130 L150 110 L180 100 L200 80 L210 60 L200 40 L180 30 L160 25 L140 20 L120 15 L100 10 L80 15 Z"}),_.jsx("path",{d:"M90 25 L95 35 L100 30 L105 40 L110 35 L115 45 L120 40 L125 50 L130 45 L135 55 L140 50 L145 60 L150 55 L155 65 L160 60 L165 70 L170 65 L175 75 L180 70 L185 80 L190 75 L195 85 L200 80"})]}),_.jsx("circle",{cx:"110",cy:"60",r:"4",fill:"#FF6B35",stroke:"white",strokeWidth:"2"}),_.jsx("circle",{cx:"110",cy:"60",r:"8",fill:"rgba(255, 107, 53, 0.3)"}),_.jsxs("circle",{cx:"110",cy:"60",r:"2",fill:"#FF6B35",children:[_.jsx("animate",{attributeName:"r",values:"2;6;2",dur:"2s",repeatCount:"indefinite"}),_.jsx("animate",{attributeName:"opacity",values:"1;0.3;1",dur:"2s",repeatCount:"indefinite"})]})]})}),_.jsx(lV,{show:o,children:_.jsxs(cV,{children:[_.jsxs(uV,{children:[_.jsx(dV,{children:d.title}),_.jsx(fV,{children:d.description})]}),_.jsxs(hV,{children:[_.jsxs(kf,{children:[_.jsx(Nf,{children:"DATE"}),_.jsx(Ff,{children:d.date})]}),_.jsxs(kf,{children:[_.jsx(Nf,{children:"TIME"}),_.jsx(Ff,{children:d.time})]}),_.jsxs(kf,{children:[_.jsx(Nf,{children:"LOCATION"}),_.jsx(Ff,{children:d.coordinates})]})]}),_.jsxs(pV,{children:[_.jsx(gV,{children:"?"}),_.jsxs(mV,{children:[_.jsx(ky,{onClick:g,children:"←"}),_.jsx(ky,{onClick:x,children:"→"})]})]})]})})]})]})},xV=T.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background: #000;
`,mc=T.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${t=>t.isVisible?1:0};
    transition: opacity 0.5s ease-in-out;
    pointer-events: ${t=>t.isVisible?"all":"none"};
`,vV=()=>{const[t,e]=R.useState("main"),[n,i]=R.useState(1),[r,o]=R.useState(!1),s=c=>{c==="island"?(o(!0),setTimeout(()=>{e("island1"),i(1),setTimeout(()=>{o(!1)},250)},250)):c==="house"&&console.log("House experience selected")},a=()=>{o(!0),setTimeout(()=>{e("main"),i(1),setTimeout(()=>{o(!1)},250)},250)},l=c=>{r||(o(!0),setTimeout(()=>{c==="next"?n===1?(e("island2"),i(2)):n===2&&(e("island3"),i(3)):c==="prev"&&(n===2?(e("island1"),i(1)):n===3&&(e("island2"),i(2))),setTimeout(()=>{o(!1)},250)},250))};return _.jsxs(xV,{children:[_.jsx(mc,{isVisible:t==="main"&&!r,children:_.jsx(UB,{onExperienceSelect:s})}),_.jsx(mc,{isVisible:t==="island1"&&!r,children:_.jsx(Ub,{onNavigate:l,onBack:a})}),_.jsx(mc,{isVisible:t==="island2"&&!r,children:_.jsx(kb,{onNavigate:l,onBack:a})}),_.jsx(mc,{isVisible:t==="island3"&&!r,children:_.jsx(Nb,{onNavigate:l,onBack:a})})]})},yV=()=>_.jsx(H2,{children:_.jsxs(x2,{children:[_.jsx($r,{path:"/",element:_.jsx(Nz,{})}),_.jsx($r,{path:"/roomview",element:_.jsx(nB,{})}),_.jsx($r,{path:"/IslandExp",element:_.jsx(vV,{})}),_.jsx($r,{path:"/island1",element:_.jsx(Ub,{})}),_.jsx($r,{path:"/island2",element:_.jsx(kb,{})}),_.jsx($r,{path:"/island3",element:_.jsx(Nb,{})})]})});Of.createRoot(document.getElementById("root")).render(_.jsx($y.StrictMode,{children:_.jsx(yV,{})}));
