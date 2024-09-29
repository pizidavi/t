'use strict';

function _defineProperty$1(e,t,i){return (t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return ("string"===t?String:Number)(e)}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return "symbol"==typeof t?t:String(t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s);}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ownKeys(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s);}return i}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(i),!0).forEach((function(t){_defineProperty(e,t,i[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t));}));}return e}var defaults$1={addCSS:!0,thumbWidth:15,watch:!0};function matches$1(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}function trigger(e,t){if(e&&t){var i=new Event(t,{bubbles:!0});e.dispatchEvent(i);}}var getConstructor$1=function(e){return null!=e?e.constructor:null},instanceOf$1=function(e,t){return !!(e&&t&&e instanceof t)},isNullOrUndefined$1=function(e){return null==e},isObject$1=function(e){return getConstructor$1(e)===Object},isNumber$1=function(e){return getConstructor$1(e)===Number&&!Number.isNaN(e)},isString$1=function(e){return getConstructor$1(e)===String},isBoolean$1=function(e){return getConstructor$1(e)===Boolean},isFunction$1=function(e){return getConstructor$1(e)===Function},isArray$1=function(e){return Array.isArray(e)},isNodeList$1=function(e){return instanceOf$1(e,NodeList)},isElement$1=function(e){return instanceOf$1(e,Element)},isEvent$1=function(e){return instanceOf$1(e,Event)},isEmpty$1=function(e){return isNullOrUndefined$1(e)||(isString$1(e)||isArray$1(e)||isNodeList$1(e))&&!e.length||isObject$1(e)&&!Object.keys(e).length},is$1={nullOrUndefined:isNullOrUndefined$1,object:isObject$1,number:isNumber$1,string:isString$1,boolean:isBoolean$1,function:isFunction$1,array:isArray$1,nodeList:isNodeList$1,element:isElement$1,event:isEvent$1,empty:isEmpty$1};function getDecimalPlaces(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}function round(e,t){if(1>t){var i=getDecimalPlaces(t);return parseFloat(e.toFixed(i))}return Math.round(e/t)*t}var RangeTouch=function(){function e(t,i){_classCallCheck(this,e),is$1.element(t)?this.element=t:is$1.string(t)&&(this.element=document.querySelector(t)),is$1.element(this.element)&&is$1.empty(this.element.rangeTouch)&&(this.config=_objectSpread2({},defaults$1,{},i),this.init());}return _createClass(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this);}},{key:"destroy",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="",this.element.style.webKitUserSelect="",this.element.style.touchAction=""),this.listeners(!1),this.element.rangeTouch=null);}},{key:"listeners",value:function(e){var t=this,i=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach((function(e){t.element[i](e,(function(e){return t.set(e)}),!1);}));}},{key:"get",value:function(t){if(!e.enabled||!is$1.event(t))return null;var i,s=t.target,n=t.changedTouches[0],r=parseFloat(s.getAttribute("min"))||0,a=parseFloat(s.getAttribute("max"))||100,o=parseFloat(s.getAttribute("step"))||1,l=s.getBoundingClientRect(),c=100/l.width*(this.config.thumbWidth/2)/100;return 0>(i=100/l.width*(n.clientX-l.left))?i=0:100<i&&(i=100),50>i?i-=(100-2*i)*c:50<i&&(i+=2*(i-50)*c),r+round(i/100*(a-r),o)}},{key:"set",value:function(t){e.enabled&&is$1.event(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),trigger(t.target,"touchend"===t.type?"change":"input"));}}],[{key:"setup",value:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},s=null;if(is$1.empty(t)||is$1.string(t)?s=Array.from(document.querySelectorAll(is$1.string(t)?t:'input[type="range"]')):is$1.element(t)?s=[t]:is$1.nodeList(t)?s=Array.from(t):is$1.array(t)&&(s=t.filter(is$1.element)),is$1.empty(s))return null;var n=_objectSpread2({},defaults$1,{},i);if(is$1.string(t)&&n.watch){var r=new MutationObserver((function(i){Array.from(i).forEach((function(i){Array.from(i.addedNodes).forEach((function(i){is$1.element(i)&&matches$1(i,t)&&new e(i,n);}));}));}));r.observe(document.body,{childList:!0,subtree:!0});}return s.map((function(t){return new e(t,i)}))}},{key:"enabled",get:function(){return "ontouchstart"in document.documentElement}}]),e}();const getConstructor=e=>null!=e?e.constructor:null,instanceOf=(e,t)=>Boolean(e&&t&&e instanceof t),isNullOrUndefined=e=>null==e,isObject=e=>getConstructor(e)===Object,isNumber=e=>getConstructor(e)===Number&&!Number.isNaN(e),isString=e=>getConstructor(e)===String,isBoolean=e=>getConstructor(e)===Boolean,isFunction=e=>"function"==typeof e,isArray=e=>Array.isArray(e),isWeakMap=e=>instanceOf(e,WeakMap),isNodeList=e=>instanceOf(e,NodeList),isTextNode=e=>getConstructor(e)===Text,isEvent=e=>instanceOf(e,Event),isKeyboardEvent=e=>instanceOf(e,KeyboardEvent),isCue=e=>instanceOf(e,window.TextTrackCue)||instanceOf(e,window.VTTCue),isTrack=e=>instanceOf(e,TextTrack)||!isNullOrUndefined(e)&&isString(e.kind),isPromise=e=>instanceOf(e,Promise)&&isFunction(e.then),isElement=e=>null!==e&&"object"==typeof e&&1===e.nodeType&&"object"==typeof e.style&&"object"==typeof e.ownerDocument,isEmpty=e=>isNullOrUndefined(e)||(isString(e)||isArray(e)||isNodeList(e))&&!e.length||isObject(e)&&!Object.keys(e).length,isUrl=e=>{if(instanceOf(e,window.URL))return !0;if(!isString(e))return !1;let t=e;e.startsWith("http://")&&e.startsWith("https://")||(t=`http://${e}`);try{return !isEmpty(new URL(t).hostname)}catch(e){return !1}};var is={nullOrUndefined:isNullOrUndefined,object:isObject,number:isNumber,string:isString,boolean:isBoolean,function:isFunction,array:isArray,weakMap:isWeakMap,nodeList:isNodeList,element:isElement,textNode:isTextNode,event:isEvent,keyboardEvent:isKeyboardEvent,cue:isCue,track:isTrack,promise:isPromise,url:isUrl,empty:isEmpty};const transitionEndEvent=(()=>{const e=document.createElement("span"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i=Object.keys(t).find((t=>void 0!==e.style[t]));return !!is.string(i)&&t[i]})();function repaint(e,t){setTimeout((()=>{try{e.hidden=!0,e.offsetHeight,e.hidden=!1;}catch(e){}}),t);}const isIE=Boolean(window.document.documentMode),isEdge=/Edge/g.test(navigator.userAgent),isWebKit="WebkitAppearance"in document.documentElement.style&&!/Edge/g.test(navigator.userAgent),isIPhone=/iPhone|iPod/gi.test(navigator.userAgent)&&navigator.maxTouchPoints>1,isIPadOS="MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,isIos=/iPad|iPhone|iPod/gi.test(navigator.userAgent)&&navigator.maxTouchPoints>1;var browser={isIE:isIE,isEdge:isEdge,isWebKit:isWebKit,isIPhone:isIPhone,isIPadOS:isIPadOS,isIos:isIos};function cloneDeep(e){return JSON.parse(JSON.stringify(e))}function getDeep(e,t){return t.split(".").reduce(((e,t)=>e&&e[t]),e)}function extend(e={},...t){if(!t.length)return e;const i=t.shift();return is.object(i)?(Object.keys(i).forEach((t=>{is.object(i[t])?(Object.keys(e).includes(t)||Object.assign(e,{[t]:{}}),extend(e[t],i[t])):Object.assign(e,{[t]:i[t]});})),extend(e,...t)):e}function wrap(e,t){const i=e.length?e:[e];Array.from(i).reverse().forEach(((e,i)=>{const s=i>0?t.cloneNode(!0):t,n=e.parentNode,r=e.nextSibling;s.appendChild(e),r?n.insertBefore(s,r):n.appendChild(s);}));}function setAttributes(e,t){is.element(e)&&!is.empty(t)&&Object.entries(t).filter((([,e])=>!is.nullOrUndefined(e))).forEach((([t,i])=>e.setAttribute(t,i)));}function createElement(e,t,i){const s=document.createElement(e);return is.object(t)&&setAttributes(s,t),is.string(i)&&(s.innerText=i),s}function insertAfter(e,t){is.element(e)&&is.element(t)&&t.parentNode.insertBefore(e,t.nextSibling);}function insertElement(e,t,i,s){is.element(t)&&t.appendChild(createElement(e,i,s));}function removeElement(e){is.nodeList(e)||is.array(e)?Array.from(e).forEach(removeElement):is.element(e)&&is.element(e.parentNode)&&e.parentNode.removeChild(e);}function emptyElement(e){if(!is.element(e))return;let{length:t}=e.childNodes;for(;t>0;)e.removeChild(e.lastChild),t-=1;}function replaceElement(e,t){return is.element(t)&&is.element(t.parentNode)&&is.element(e)?(t.parentNode.replaceChild(e,t),e):null}function getAttributesFromSelector(e,t){if(!is.string(e)||is.empty(e))return {};const i={},s=extend({},t);return e.split(",").forEach((e=>{const t=e.trim(),n=t.replace(".",""),r=t.replace(/[[\]]/g,"").split("="),[a]=r,o=r.length>1?r[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":is.string(s.class)?i.class=`${s.class} ${n}`:i.class=n;break;case"#":i.id=t.replace("#","");break;case"[":i[a]=o;}})),extend(s,i)}function toggleHidden(e,t){if(!is.element(e))return;let i=t;is.boolean(i)||(i=!e.hidden),e.hidden=i;}function toggleClass(e,t,i){if(is.nodeList(e))return Array.from(e).map((e=>toggleClass(e,t,i)));if(is.element(e)){let s="toggle";return void 0!==i&&(s=i?"add":"remove"),e.classList[s](t),e.classList.contains(t)}return !1}function hasClass(e,t){return is.element(e)&&e.classList.contains(t)}function matches(e,t){const{prototype:i}=Element;return (i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(){return Array.from(document.querySelectorAll(t)).includes(this)}).call(e,t)}function closest$1(e,t){const{prototype:i}=Element;return (i.closest||function(){let e=this;do{if(matches.matches(e,t))return e;e=e.parentElement||e.parentNode;}while(null!==e&&1===e.nodeType);return null}).call(e,t)}function getElements(e){return this.elements.container.querySelectorAll(e)}function getElement(e){return this.elements.container.querySelector(e)}function setFocus(e=null,t=!1){is.element(e)&&e.focus({preventScroll:!0,focusVisible:t});}const defaultCodecs={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},support={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check(e,t){const i=support[e]||"html5"!==t;return {api:i,ui:i&&support.rangeInput}},pip:!(browser.isIPhone||!is.function(createElement("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||createElement("video").disablePictureInPicture)),airplay:is.function(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime(e){if(is.empty(e))return !1;const[t]=e.split("/");let i=e;if(!this.isHTML5||t!==this.type)return !1;Object.keys(defaultCodecs).includes(i)&&(i+=`; codecs="${defaultCodecs[e]}"`);try{return Boolean(i&&this.media.canPlayType(i).replace(/no/,""))}catch(e){return !1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(()=>{const e=document.createElement("input");return e.type="range","range"===e.type})(),touch:"ontouchstart"in document.documentElement,transitions:!1!==transitionEndEvent,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},supportsPassiveListeners=(()=>{let e=!1;try{const t=Object.defineProperty({},"passive",{get:()=>(e=!0,null)});window.addEventListener("test",null,t),window.removeEventListener("test",null,t);}catch(e){}return e})();function toggleListener(e,t,i,s=!1,n=!0,r=!1){if(!e||!("addEventListener"in e)||is.empty(t)||!is.function(i))return;const a=t.split(" ");let o=r;supportsPassiveListeners&&(o={passive:n,capture:r}),a.forEach((t=>{this&&this.eventListeners&&s&&this.eventListeners.push({element:e,type:t,callback:i,options:o}),e[s?"addEventListener":"removeEventListener"](t,i,o);}));}function on(e,t="",i,s=!0,n=!1){toggleListener.call(this,e,t,i,!0,s,n);}function off(e,t="",i,s=!0,n=!1){toggleListener.call(this,e,t,i,!1,s,n);}function once(e,t="",i,s=!0,n=!1){const r=(...a)=>{off(e,t,r,s,n),i.apply(this,a);};toggleListener.call(this,e,t,r,!0,s,n);}function triggerEvent(e,t="",i=!1,s={}){if(!is.element(e)||is.empty(t))return;const n=new CustomEvent(t,{bubbles:i,detail:{...s,plyr:this}});e.dispatchEvent(n);}function unbindListeners(){this&&this.eventListeners&&(this.eventListeners.forEach((e=>{const{element:t,type:i,callback:s,options:n}=e;t.removeEventListener(i,s,n);})),this.eventListeners=[]);}function ready(){return new Promise((e=>this.ready?setTimeout(e,0):on.call(this,this.elements.container,"ready",e))).then((()=>{}))}function silencePromise(e){is.promise(e)&&e.then(null,(()=>{}));}function dedupe(e){return is.array(e)?e.filter(((t,i)=>e.indexOf(t)===i)):e}function closest(e,t){return is.array(e)&&e.length?e.reduce(((e,i)=>Math.abs(i-t)<Math.abs(e-t)?i:e)):null}function supportsCSS(e){return !(!window||!window.CSS)&&window.CSS.supports(e)}const standardRatios=[[1,1],[4,3],[3,4],[5,4],[4,5],[3,2],[2,3],[16,10],[10,16],[16,9],[9,16],[21,9],[9,21],[32,9],[9,32]].reduce(((e,[t,i])=>({...e,[t/i]:[t,i]})),{});function validateAspectRatio(e){if(!(is.array(e)||is.string(e)&&e.includes(":")))return !1;return (is.array(e)?e:e.split(":")).map(Number).every(is.number)}function reduceAspectRatio(e){if(!is.array(e)||!e.every(is.number))return null;const[t,i]=e,s=(e,t)=>0===t?e:s(t,e%t),n=s(t,i);return [t/n,i/n]}function getAspectRatio(e){const t=e=>validateAspectRatio(e)?e.split(":").map(Number):null;let i=t(e);if(null===i&&(i=t(this.config.ratio)),null===i&&!is.empty(this.embed)&&is.array(this.embed.ratio)&&({ratio:i}=this.embed),null===i&&this.isHTML5){const{videoWidth:e,videoHeight:t}=this.media;i=[e,t];}return reduceAspectRatio(i)}function setAspectRatio(e){if(!this.isVideo)return {};const{wrapper:t}=this.elements,i=getAspectRatio.call(this,e);if(!is.array(i))return {};const[s,n]=reduceAspectRatio(i),r=100/s*n;if(supportsCSS(`aspect-ratio: ${s}/${n}`)?t.style.aspectRatio=`${s}/${n}`:t.style.paddingBottom=`${r}%`,this.isVimeo&&!this.config.vimeo.premium&&this.supported.ui){const e=100/this.media.offsetWidth*parseInt(window.getComputedStyle(this.media).paddingBottom,10),i=(e-r)/(e/50);this.fullscreen.active?t.style.paddingBottom=null:this.media.style.transform=`translateY(-${i}%)`;}else this.isHTML5&&t.classList.add(this.config.classNames.videoFixedRatio);return {padding:r,ratio:i}}function roundAspectRatio(e,t,i=.05){const s=e/t,n=closest(Object.keys(standardRatios),s);return Math.abs(n-s)<=i?standardRatios[n]:[e,t]}function getViewportSize(){return [Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)]}const html5={getSources(){if(!this.isHTML5)return [];return Array.from(this.media.querySelectorAll("source")).filter((e=>{const t=e.getAttribute("type");return !!is.empty(t)||support.mime.call(this,t)}))},getQualityOptions(){return this.config.quality.forced?this.config.quality.options:html5.getSources.call(this).map((e=>Number(e.getAttribute("size")))).filter(Boolean)},setup(){if(!this.isHTML5)return;const e=this;e.options.speed=e.config.speed.options,is.empty(this.config.ratio)||setAspectRatio.call(e),Object.defineProperty(e.media,"quality",{get(){const t=html5.getSources.call(e).find((t=>t.getAttribute("src")===e.source));return t&&Number(t.getAttribute("size"))},set(t){if(e.quality!==t){if(e.config.quality.forced&&is.function(e.config.quality.onChange))e.config.quality.onChange(t);else {const i=html5.getSources.call(e).find((e=>Number(e.getAttribute("size"))===t));if(!i)return;const{currentTime:s,paused:n,preload:r,readyState:a,playbackRate:o}=e.media;e.media.src=i.getAttribute("src"),("none"!==r||a)&&(e.once("loadedmetadata",(()=>{e.speed=o,e.currentTime=s,n||silencePromise(e.play());})),e.media.load());}triggerEvent.call(e,e.media,"qualitychange",!1,{quality:t});}}});},cancelRequests(){this.isHTML5&&(removeElement(html5.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"));}};function generateId(e){return `${e}-${Math.floor(1e4*Math.random())}`}function format(e,...t){return is.empty(e)?e:e.toString().replace(/{(\d+)}/g,((e,i)=>t[i].toString()))}function getPercentage(e,t){return 0===e||0===t||Number.isNaN(e)||Number.isNaN(t)?0:(e/t*100).toFixed(2)}const replaceAll=(e="",t="",i="")=>e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),i.toString()),toTitleCase=(e="")=>e.toString().replace(/\w\S*/g,(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()));function toPascalCase(e=""){let t=e.toString();return t=replaceAll(t,"-"," "),t=replaceAll(t,"_"," "),t=toTitleCase(t),replaceAll(t," ","")}function toCamelCase(e=""){let t=e.toString();return t=toPascalCase(t),t.charAt(0).toLowerCase()+t.slice(1)}function stripHTML(e){const t=document.createDocumentFragment(),i=document.createElement("div");return t.appendChild(i),i.innerHTML=e,t.firstChild.innerText}function getHTML(e){const t=document.createElement("div");return t.appendChild(e),t.innerHTML}const resources={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},i18n={get(e="",t={}){if(is.empty(e)||is.empty(t))return "";let i=getDeep(t.i18n,e);if(is.empty(i))return Object.keys(resources).includes(e)?resources[e]:"";const s={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(s).forEach((([e,t])=>{i=replaceAll(i,e,t);})),i}};class Storage{constructor(e){_defineProperty$1(this,"get",(e=>{if(!Storage.supported||!this.enabled)return null;const t=window.localStorage.getItem(this.key);if(is.empty(t))return null;const i=JSON.parse(t);return is.string(e)&&e.length?i[e]:i})),_defineProperty$1(this,"set",(e=>{if(!Storage.supported||!this.enabled)return;if(!is.object(e))return;let t=this.get();is.empty(t)&&(t={}),extend(t,e);try{window.localStorage.setItem(this.key,JSON.stringify(t));}catch(e){}})),this.enabled=e.config.storage.enabled,this.key=e.config.storage.key;}static get supported(){try{if(!("localStorage"in window))return !1;const e="___test";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return !1}}}function fetch(e,t="text"){return new Promise(((i,s)=>{try{const s=new XMLHttpRequest;if(!("withCredentials"in s))return;s.addEventListener("load",(()=>{if("text"===t)try{i(JSON.parse(s.responseText));}catch(e){i(s.responseText);}else i(s.response);})),s.addEventListener("error",(()=>{throw new Error(s.status)})),s.open("GET",e,!0),s.responseType=t,s.send();}catch(e){s(e);}}))}function loadSprite(e,t){if(!is.string(e))return;const i="cache",s=is.string(t);let n=!1;const r=()=>null!==document.getElementById(t),a=(e,t)=>{e.innerHTML=t,s&&r()||document.body.insertAdjacentElement("afterbegin",e);};if(!s||!r()){const r=Storage.supported,o=document.createElement("div");if(o.setAttribute("hidden",""),s&&o.setAttribute("id",t),r){const e=window.localStorage.getItem(`${i}-${t}`);if(n=null!==e,n){const t=JSON.parse(e);a(o,t.content);}}fetch(e).then((e=>{if(!is.empty(e)){if(r)try{window.localStorage.setItem(`${i}-${t}`,JSON.stringify({content:e}));}catch(e){}a(o,e);}})).catch((()=>{}));}}const getHours=e=>Math.trunc(e/60/60%60,10),getMinutes=e=>Math.trunc(e/60%60,10),getSeconds=e=>Math.trunc(e%60,10);function formatTime(e=0,t=!1,i=!1){if(!is.number(e))return formatTime(void 0,t,i);const s=e=>`0${e}`.slice(-2);let n=getHours(e);const r=getMinutes(e),a=getSeconds(e);return n=t||n>0?`${n}:`:"",`${i&&e>0?"-":""}${n}${s(r)}:${s(a)}`}const controls={getIconUrl(){const e=new URL(this.config.iconUrl,window.location),t=window.location.host?window.location.host:window.top.location.host,i=e.host!==t||browser.isIE&&!window.svg4everybody;return {url:this.config.iconUrl,cors:i}},findElements(){try{return this.elements.controls=getElement.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:getElements.call(this,this.config.selectors.buttons.play),pause:getElement.call(this,this.config.selectors.buttons.pause),restart:getElement.call(this,this.config.selectors.buttons.restart),rewind:getElement.call(this,this.config.selectors.buttons.rewind),fastForward:getElement.call(this,this.config.selectors.buttons.fastForward),mute:getElement.call(this,this.config.selectors.buttons.mute),pip:getElement.call(this,this.config.selectors.buttons.pip),airplay:getElement.call(this,this.config.selectors.buttons.airplay),settings:getElement.call(this,this.config.selectors.buttons.settings),captions:getElement.call(this,this.config.selectors.buttons.captions),fullscreen:getElement.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=getElement.call(this,this.config.selectors.progress),this.elements.inputs={seek:getElement.call(this,this.config.selectors.inputs.seek),volume:getElement.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:getElement.call(this,this.config.selectors.display.buffer),currentTime:getElement.call(this,this.config.selectors.display.currentTime),duration:getElement.call(this,this.config.selectors.display.duration)},is.element(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon(e,t){const i="http://www.w3.org/2000/svg",s=controls.getIconUrl.call(this),n=`${s.cors?"":s.url}#${this.config.iconPrefix}`,r=document.createElementNS(i,"svg");setAttributes(r,extend(t,{"aria-hidden":"true",focusable:"false"}));const a=document.createElementNS(i,"use"),o=`${n}-${e}`;return "href"in a&&a.setAttributeNS("http://www.w3.org/1999/xlink","href",o),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o),r.appendChild(a),r},createLabel(e,t={}){const i=i18n.get(e,this.config);return createElement("span",{...t,class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")},i)},createBadge(e){if(is.empty(e))return null;const t=createElement("span",{class:this.config.classNames.menu.value});return t.appendChild(createElement("span",{class:this.config.classNames.menu.badge},e)),t},createButton(e,t){const i=extend({},t);let s=toCamelCase(e);const n={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach((e=>{Object.keys(i).includes(e)&&(n[e]=i[e],delete i[e]);})),"button"!==n.element||Object.keys(i).includes("type")||(i.type="button"),Object.keys(i).includes("class")?i.class.split(" ").some((e=>e===this.config.classNames.control))||extend(i,{class:`${i.class} ${this.config.classNames.control}`}):i.class=this.config.classNames.control,e){case"play":n.toggle=!0,n.label="play",n.labelPressed="pause",n.icon="play",n.iconPressed="pause";break;case"mute":n.toggle=!0,n.label="mute",n.labelPressed="unmute",n.icon="volume",n.iconPressed="muted";break;case"captions":n.toggle=!0,n.label="enableCaptions",n.labelPressed="disableCaptions",n.icon="captions-off",n.iconPressed="captions-on";break;case"fullscreen":n.toggle=!0,n.label="enterFullscreen",n.labelPressed="exitFullscreen",n.icon="enter-fullscreen",n.iconPressed="exit-fullscreen";break;case"play-large":i.class+=` ${this.config.classNames.control}--overlaid`,s="play",n.label="play",n.icon="play";break;default:is.empty(n.label)&&(n.label=s),is.empty(n.icon)&&(n.icon=e);}const r=createElement(n.element);return n.toggle?(r.appendChild(controls.createIcon.call(this,n.iconPressed,{class:"icon--pressed"})),r.appendChild(controls.createIcon.call(this,n.icon,{class:"icon--not-pressed"})),r.appendChild(controls.createLabel.call(this,n.labelPressed,{class:"label--pressed"})),r.appendChild(controls.createLabel.call(this,n.label,{class:"label--not-pressed"}))):(r.appendChild(controls.createIcon.call(this,n.icon)),r.appendChild(controls.createLabel.call(this,n.label))),extend(i,getAttributesFromSelector(this.config.selectors.buttons[s],i)),setAttributes(r,i),"play"===s?(is.array(this.elements.buttons[s])||(this.elements.buttons[s]=[]),this.elements.buttons[s].push(r)):this.elements.buttons[s]=r,r},createRange(e,t){const i=createElement("input",extend(getAttributesFromSelector(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":i18n.get(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=i,controls.updateRangeFill.call(this,i),RangeTouch.setup(i),i},createProgress(e,t){const i=createElement("progress",extend(getAttributesFromSelector(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){i.appendChild(createElement("span",null,"0"));const t={played:"played",buffer:"buffered"}[e],s=t?i18n.get(t,this.config):"";i.innerText=`% ${s.toLowerCase()}`;}return this.elements.display[e]=i,i},createTime(e,t){const i=getAttributesFromSelector(this.config.selectors.display[e],t),s=createElement("div",extend(i,{class:`${i.class?i.class:""} ${this.config.classNames.display.time} `.trim(),"aria-label":i18n.get(e,this.config),role:"timer"}),"00:00");return this.elements.display[e]=s,s},bindMenuItemShortcuts(e,t){on.call(this,e,"keydown keyup",(i=>{if(![" ","ArrowUp","ArrowDown","ArrowRight"].includes(i.key))return;if(i.preventDefault(),i.stopPropagation(),"keydown"===i.type)return;const s=matches(e,'[role="menuitemradio"]');if(!s&&[" ","ArrowRight"].includes(i.key))controls.showMenuPanel.call(this,t,!0);else {let t;" "!==i.key&&("ArrowDown"===i.key||s&&"ArrowRight"===i.key?(t=e.nextElementSibling,is.element(t)||(t=e.parentNode.firstElementChild)):(t=e.previousElementSibling,is.element(t)||(t=e.parentNode.lastElementChild)),setFocus.call(this,t,!0));}}),!1),on.call(this,e,"keyup",(e=>{"Return"===e.key&&controls.focusFirstMenuItem.call(this,null,!0);}));},createMenuItem({value:e,list:t,type:i,title:s,badge:n=null,checked:r=!1}){const a=getAttributesFromSelector(this.config.selectors.inputs[i]),o=createElement("button",extend(a,{type:"button",role:"menuitemradio",class:`${this.config.classNames.control} ${a.class?a.class:""}`.trim(),"aria-checked":r,value:e})),l=createElement("span");l.innerHTML=s,is.element(n)&&l.appendChild(n),o.appendChild(l),Object.defineProperty(o,"checked",{enumerable:!0,get:()=>"true"===o.getAttribute("aria-checked"),set(e){e&&Array.from(o.parentNode.children).filter((e=>matches(e,'[role="menuitemradio"]'))).forEach((e=>e.setAttribute("aria-checked","false"))),o.setAttribute("aria-checked",e?"true":"false");}}),this.listeners.bind(o,"click keyup",(t=>{if(!is.keyboardEvent(t)||" "===t.key){switch(t.preventDefault(),t.stopPropagation(),o.checked=!0,i){case"language":this.currentTrack=Number(e);break;case"quality":this.quality=e;break;case"speed":this.speed=parseFloat(e);}controls.showMenuPanel.call(this,"home",is.keyboardEvent(t));}}),i,!1),controls.bindMenuItemShortcuts.call(this,o,i),t.appendChild(o);},formatTime(e=0,t=!1){if(!is.number(e))return e;return formatTime(e,getHours(this.duration)>0,t)},updateTimeDisplay(e=null,t=0,i=!1){is.element(e)&&is.number(t)&&(e.innerText=controls.formatTime(t,i));},updateVolume(){this.supported.ui&&(is.element(this.elements.inputs.volume)&&controls.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),is.element(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume));},setRange(e,t=0){is.element(e)&&(e.value=t,controls.updateRangeFill.call(this,e));},updateProgress(e){if(!this.supported.ui||!is.event(e))return;let t=0;const i=(e,t)=>{const i=is.number(t)?t:0,s=is.element(e)?e:this.elements.display.buffer;if(is.element(s)){s.value=i;const e=s.getElementsByTagName("span")[0];is.element(e)&&(e.childNodes[0].nodeValue=i);}};if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":t=getPercentage(this.currentTime,this.duration),"timeupdate"===e.type&&controls.setRange.call(this,this.elements.inputs.seek,t);break;case"playing":case"progress":i(this.elements.display.buffer,100*this.buffered);}},updateRangeFill(e){const t=is.event(e)?e.target:e;if(is.element(t)&&"range"===t.getAttribute("type")){if(matches(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);const e=controls.formatTime(this.currentTime),i=controls.formatTime(this.duration),s=i18n.get("seekLabel",this.config);t.setAttribute("aria-valuetext",s.replace("{currentTime}",e).replace("{duration}",i));}else if(matches(t,this.config.selectors.inputs.volume)){const e=100*t.value;t.setAttribute("aria-valuenow",e),t.setAttribute("aria-valuetext",`${e.toFixed(1)}%`);}else t.setAttribute("aria-valuenow",t.value);(browser.isWebKit||browser.isIPadOS)&&t.style.setProperty("--value",t.value/t.max*100+"%");}},updateSeekTooltip(e){var t,i;if(!this.config.tooltips.seek||!is.element(this.elements.inputs.seek)||!is.element(this.elements.display.seekTooltip)||0===this.duration)return;const s=this.elements.display.seekTooltip,n=`${this.config.classNames.tooltip}--visible`,r=e=>toggleClass(s,n,e);if(this.touch)return void r(!1);let a=0;const o=this.elements.progress.getBoundingClientRect();if(is.event(e))a=100/o.width*(e.pageX-o.left);else {if(!hasClass(s,n))return;a=parseFloat(s.style.left,10);}a<0?a=0:a>100&&(a=100);const l=this.duration/100*a;s.innerText=controls.formatTime(l);const c=null===(t=this.config.markers)||void 0===t||null===(i=t.points)||void 0===i?void 0:i.find((({time:e})=>e===Math.round(l)));c&&s.insertAdjacentHTML("afterbegin",`${c.label}<br>`),s.style.left=`${a}%`,is.event(e)&&["mouseenter","mouseleave"].includes(e.type)&&r("mouseenter"===e.type);},timeUpdate(e){const t=!is.element(this.elements.display.duration)&&this.config.invertTime;controls.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||controls.updateProgress.call(this,e);},durationUpdate(){if(!this.supported.ui||!this.config.invertTime&&this.currentTime)return;if(this.duration>=2**32)return toggleHidden(this.elements.display.currentTime,!0),void toggleHidden(this.elements.progress,!0);is.element(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);const e=is.element(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&controls.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&controls.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),this.config.markers.enabled&&controls.setMarkers.call(this),controls.updateSeekTooltip.call(this);},toggleMenuButton(e,t){toggleHidden(this.elements.settings.buttons[e],!t);},updateSetting(e,t,i){const s=this.elements.settings.panels[e];let n=null,r=t;if("captions"===e)n=this.currentTrack;else {if(n=is.empty(i)?this[e]:i,is.empty(n)&&(n=this.config[e].default),!is.empty(this.options[e])&&!this.options[e].includes(n))return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);if(!this.config[e].options.includes(n))return void this.debug.warn(`Disabled value of '${n}' for ${e}`)}if(is.element(r)||(r=s&&s.querySelector('[role="menu"]')),!is.element(r))return;this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML=controls.getLabel.call(this,e,n);const a=r&&r.querySelector(`[value="${n}"]`);is.element(a)&&(a.checked=!0);},getLabel(e,t){switch(e){case"speed":return 1===t?i18n.get("normal",this.config):`${t}&times;`;case"quality":if(is.number(t)){const e=i18n.get(`qualityLabel.${t}`,this.config);return e.length?e:`${t}p`}return toTitleCase(t);case"captions":return captions.getLabel.call(this);default:return null}},setQualityMenu(e){if(!is.element(this.elements.settings.panels.quality))return;const t="quality",i=this.elements.settings.panels.quality.querySelector('[role="menu"]');is.array(e)&&(this.options.quality=dedupe(e).filter((e=>this.config.quality.options.includes(e))));const s=!is.empty(this.options.quality)&&this.options.quality.length>1;if(controls.toggleMenuButton.call(this,t,s),emptyElement(i),controls.checkMenu.call(this),!s)return;const n=e=>{const t=i18n.get(`qualityBadge.${e}`,this.config);return t.length?controls.createBadge.call(this,t):null};this.options.quality.sort(((e,t)=>{const i=this.config.quality.options;return i.indexOf(e)>i.indexOf(t)?1:-1})).forEach((e=>{controls.createMenuItem.call(this,{value:e,list:i,type:t,title:controls.getLabel.call(this,"quality",e),badge:n(e)});})),controls.updateSetting.call(this,t,i);},setCaptionsMenu(){if(!is.element(this.elements.settings.panels.captions))return;const e="captions",t=this.elements.settings.panels.captions.querySelector('[role="menu"]'),i=captions.getTracks.call(this),s=Boolean(i.length);if(controls.toggleMenuButton.call(this,e,s),emptyElement(t),controls.checkMenu.call(this),!s)return;const n=i.map(((e,i)=>({value:i,checked:this.captions.toggled&&this.currentTrack===i,title:captions.getLabel.call(this,e),badge:e.language&&controls.createBadge.call(this,e.language.toUpperCase()),list:t,type:"language"})));n.unshift({value:-1,checked:!this.captions.toggled,title:i18n.get("disabled",this.config),list:t,type:"language"}),n.forEach(controls.createMenuItem.bind(this)),controls.updateSetting.call(this,e,t);},setSpeedMenu(){if(!is.element(this.elements.settings.panels.speed))return;const e="speed",t=this.elements.settings.panels.speed.querySelector('[role="menu"]');this.options.speed=this.options.speed.filter((e=>e>=this.minimumSpeed&&e<=this.maximumSpeed));const i=!is.empty(this.options.speed)&&this.options.speed.length>1;controls.toggleMenuButton.call(this,e,i),emptyElement(t),controls.checkMenu.call(this),i&&(this.options.speed.forEach((i=>{controls.createMenuItem.call(this,{value:i,list:t,type:e,title:controls.getLabel.call(this,"speed",i)});})),controls.updateSetting.call(this,e,t));},checkMenu(){const{buttons:e}=this.elements.settings,t=!is.empty(e)&&Object.values(e).some((e=>!e.hidden));toggleHidden(this.elements.settings.menu,!t);},focusFirstMenuItem(e,t=!1){if(this.elements.settings.popup.hidden)return;let i=e;is.element(i)||(i=Object.values(this.elements.settings.panels).find((e=>!e.hidden)));const s=i.querySelector('[role^="menuitem"]');setFocus.call(this,s,t);},toggleMenu(e){const{popup:t}=this.elements.settings,i=this.elements.buttons.settings;if(!is.element(t)||!is.element(i))return;const{hidden:s}=t;let n=s;if(is.boolean(e))n=e;else if(is.keyboardEvent(e)&&"Escape"===e.key)n=!1;else if(is.event(e)){const s=is.function(e.composedPath)?e.composedPath()[0]:e.target,r=t.contains(s);if(r||!r&&e.target!==i&&n)return}i.setAttribute("aria-expanded",n),toggleHidden(t,!n),toggleClass(this.elements.container,this.config.classNames.menu.open,n),n&&is.keyboardEvent(e)?controls.focusFirstMenuItem.call(this,null,!0):n||s||setFocus.call(this,i,is.keyboardEvent(e));},getMenuSize(e){const t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);const i=t.scrollWidth,s=t.scrollHeight;return removeElement(t),{width:i,height:s}},showMenuPanel(e="",t=!1){const i=this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);if(!is.element(i))return;const s=i.parentNode,n=Array.from(s.children).find((e=>!e.hidden));if(support.transitions&&!support.reducedMotion){s.style.width=`${n.scrollWidth}px`,s.style.height=`${n.scrollHeight}px`;const e=controls.getMenuSize.call(this,i),t=e=>{e.target===s&&["width","height"].includes(e.propertyName)&&(s.style.width="",s.style.height="",off.call(this,s,transitionEndEvent,t));};on.call(this,s,transitionEndEvent,t),s.style.width=`${e.width}px`,s.style.height=`${e.height}px`;}toggleHidden(n,!0),toggleHidden(i,!1),controls.focusFirstMenuItem.call(this,i,t);},setDownloadUrl(){const e=this.elements.buttons.download;is.element(e)&&e.setAttribute("href",this.download);},create(e){const{bindMenuItemShortcuts:t,createButton:i,createProgress:s,createRange:n,createTime:r,setQualityMenu:a,setSpeedMenu:o,showMenuPanel:l}=controls;this.elements.controls=null,is.array(this.config.controls)&&this.config.controls.includes("play-large")&&this.elements.container.appendChild(i.call(this,"play-large"));const c=createElement("div",getAttributesFromSelector(this.config.selectors.controls.wrapper));this.elements.controls=c;const u={class:"plyr__controls__item"};return dedupe(is.array(this.config.controls)?this.config.controls:[]).forEach((a=>{if("restart"===a&&c.appendChild(i.call(this,"restart",u)),"rewind"===a&&c.appendChild(i.call(this,"rewind",u)),"play"===a&&c.appendChild(i.call(this,"play",u)),"fast-forward"===a&&c.appendChild(i.call(this,"fast-forward",u)),"progress"===a){const t=createElement("div",{class:`${u.class} plyr__progress__container`}),i=createElement("div",getAttributesFromSelector(this.config.selectors.progress));if(i.appendChild(n.call(this,"seek",{id:`plyr-seek-${e.id}`})),i.appendChild(s.call(this,"buffer")),this.config.tooltips.seek){const e=createElement("span",{class:this.config.classNames.tooltip},"00:00");i.appendChild(e),this.elements.display.seekTooltip=e;}this.elements.progress=i,t.appendChild(this.elements.progress),c.appendChild(t);}if("current-time"===a&&c.appendChild(r.call(this,"currentTime",u)),"duration"===a&&c.appendChild(r.call(this,"duration",u)),"mute"===a||"volume"===a){let{volume:t}=this.elements;if(is.element(t)&&c.contains(t)||(t=createElement("div",extend({},u,{class:`${u.class} plyr__volume`.trim()})),this.elements.volume=t,c.appendChild(t)),"mute"===a&&t.appendChild(i.call(this,"mute")),"volume"===a&&!browser.isIos&&!browser.isIPadOS){const i={max:1,step:.05,value:this.config.volume};t.appendChild(n.call(this,"volume",extend(i,{id:`plyr-volume-${e.id}`})));}}if("captions"===a&&c.appendChild(i.call(this,"captions",u)),"settings"===a&&!is.empty(this.config.settings)){const s=createElement("div",extend({},u,{class:`${u.class} plyr__menu`.trim(),hidden:""}));s.appendChild(i.call(this,"settings",{"aria-haspopup":!0,"aria-controls":`plyr-settings-${e.id}`,"aria-expanded":!1}));const n=createElement("div",{class:"plyr__menu__container",id:`plyr-settings-${e.id}`,hidden:""}),r=createElement("div"),a=createElement("div",{id:`plyr-settings-${e.id}-home`}),o=createElement("div",{role:"menu"});a.appendChild(o),r.appendChild(a),this.elements.settings.panels.home=a,this.config.settings.forEach((i=>{const s=createElement("button",extend(getAttributesFromSelector(this.config.selectors.buttons.settings),{type:"button",class:`${this.config.classNames.control} ${this.config.classNames.control}--forward`,role:"menuitem","aria-haspopup":!0,hidden:""}));t.call(this,s,i),on.call(this,s,"click",(()=>{l.call(this,i,!1);}));const n=createElement("span",null,i18n.get(i,this.config)),a=createElement("span",{class:this.config.classNames.menu.value});a.innerHTML=e[i],n.appendChild(a),s.appendChild(n),o.appendChild(s);const c=createElement("div",{id:`plyr-settings-${e.id}-${i}`,hidden:""}),u=createElement("button",{type:"button",class:`${this.config.classNames.control} ${this.config.classNames.control}--back`});u.appendChild(createElement("span",{"aria-hidden":!0},i18n.get(i,this.config))),u.appendChild(createElement("span",{class:this.config.classNames.hidden},i18n.get("menuBack",this.config))),on.call(this,c,"keydown",(e=>{"ArrowLeft"===e.key&&(e.preventDefault(),e.stopPropagation(),l.call(this,"home",!0));}),!1),on.call(this,u,"click",(()=>{l.call(this,"home",!1);})),c.appendChild(u),c.appendChild(createElement("div",{role:"menu"})),r.appendChild(c),this.elements.settings.buttons[i]=s,this.elements.settings.panels[i]=c;})),n.appendChild(r),s.appendChild(n),c.appendChild(s),this.elements.settings.popup=n,this.elements.settings.menu=s;}if("pip"===a&&support.pip&&c.appendChild(i.call(this,"pip",u)),"airplay"===a&&support.airplay&&c.appendChild(i.call(this,"airplay",u)),"download"===a){const e=extend({},u,{element:"a",href:this.download,target:"_blank"});this.isHTML5&&(e.download="");const{download:t}=this.config.urls;!is.url(t)&&this.isEmbed&&extend(e,{icon:`logo-${this.provider}`,label:this.provider}),c.appendChild(i.call(this,"download",e));}"fullscreen"===a&&c.appendChild(i.call(this,"fullscreen",u));})),this.isHTML5&&a.call(this,html5.getQualityOptions.call(this)),o.call(this),c},inject(){if(this.config.loadSprite){const e=controls.getIconUrl.call(this);e.cors&&loadSprite(e.url,"sprite-plyr");}this.id=Math.floor(1e4*Math.random());let e=null;this.elements.controls=null;const t={id:this.id,seektime:this.config.seekTime,title:this.config.title};let i=!0;is.function(this.config.controls)&&(this.config.controls=this.config.controls.call(this,t)),this.config.controls||(this.config.controls=[]),is.element(this.config.controls)||is.string(this.config.controls)?e=this.config.controls:(e=controls.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:captions.getLabel.call(this)}),i=!1);let s;i&&is.string(this.config.controls)&&(e=(e=>{let i=e;return Object.entries(t).forEach((([e,t])=>{i=replaceAll(i,`{${e}}`,t);})),i})(e)),is.string(this.config.selectors.controls.container)&&(s=document.querySelector(this.config.selectors.controls.container)),is.element(s)||(s=this.elements.container);if(s[is.element(e)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",e),is.element(this.elements.controls)||controls.findElements.call(this),!is.empty(this.elements.buttons)){const e=e=>{const t=this.config.classNames.controlPressed;e.setAttribute("aria-pressed","false"),Object.defineProperty(e,"pressed",{configurable:!0,enumerable:!0,get:()=>hasClass(e,t),set(i=!1){toggleClass(e,t,i),e.setAttribute("aria-pressed",i?"true":"false");}});};Object.values(this.elements.buttons).filter(Boolean).forEach((t=>{is.array(t)||is.nodeList(t)?Array.from(t).filter(Boolean).forEach(e):e(t);}));}if(browser.isEdge&&repaint(s),this.config.tooltips.controls){const{classNames:e,selectors:t}=this.config,i=`${t.controls.wrapper} ${t.labels} .${e.hidden}`,s=getElements.call(this,i);Array.from(s).forEach((e=>{toggleClass(e,this.config.classNames.hidden,!1),toggleClass(e,this.config.classNames.tooltip,!0);}));}},setMediaMetadata(){try{"mediaSession"in navigator&&(navigator.mediaSession.metadata=new window.MediaMetadata({title:this.config.mediaMetadata.title,artist:this.config.mediaMetadata.artist,album:this.config.mediaMetadata.album,artwork:this.config.mediaMetadata.artwork}));}catch(e){}},setMarkers(){var e,t;if(!this.duration||this.elements.markers)return;const i=null===(e=this.config.markers)||void 0===e||null===(t=e.points)||void 0===t?void 0:t.filter((({time:e})=>e>0&&e<this.duration));if(null==i||!i.length)return;const s=document.createDocumentFragment(),n=document.createDocumentFragment();let r=null;const a=`${this.config.classNames.tooltip}--visible`,o=e=>toggleClass(r,a,e);i.forEach((e=>{const t=createElement("span",{class:this.config.classNames.marker},""),i=e.time/this.duration*100+"%";r&&(t.addEventListener("mouseenter",(()=>{e.label||(r.style.left=i,r.innerHTML=e.label,o(!0));})),t.addEventListener("mouseleave",(()=>{o(!1);}))),t.addEventListener("click",(()=>{this.currentTime=e.time;})),t.style.left=i,n.appendChild(t);})),s.appendChild(n),this.config.tooltips.seek||(r=createElement("span",{class:this.config.classNames.tooltip},""),s.appendChild(r)),this.elements.markers={points:n,tip:r},this.elements.progress.appendChild(s);}};function parseUrl(e,t=!0){let i=e;if(t){const e=document.createElement("a");e.href=i,i=e.href;}try{return new URL(i)}catch(e){return null}}function buildUrlParams(e){const t=new URLSearchParams;return is.object(e)&&Object.entries(e).forEach((([e,i])=>{t.set(e,i);})),t}const captions={setup(){if(!this.supported.ui)return;if(!this.isVideo||this.isYouTube||this.isHTML5&&!support.textTracks)return void(is.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&controls.setCaptionsMenu.call(this));if(is.element(this.elements.captions)||(this.elements.captions=createElement("div",getAttributesFromSelector(this.config.selectors.captions)),this.elements.captions.setAttribute("dir","auto"),insertAfter(this.elements.captions,this.elements.wrapper)),browser.isIE&&window.URL){const e=this.media.querySelectorAll("track");Array.from(e).forEach((e=>{const t=e.getAttribute("src"),i=parseUrl(t);null!==i&&i.hostname!==window.location.href.hostname&&["http:","https:"].includes(i.protocol)&&fetch(t,"blob").then((t=>{e.setAttribute("src",window.URL.createObjectURL(t));})).catch((()=>{removeElement(e);}));}));}const e=dedupe((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map((e=>e.split("-")[0])));let t=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();"auto"===t&&([t]=e);let i=this.storage.get("captions");if(is.boolean(i)||({active:i}=this.config.captions),Object.assign(this.captions,{toggled:!1,active:i,language:t,languages:e}),this.isHTML5){const e=this.config.captions.update?"addtrack removetrack":"removetrack";on.call(this,this.media.textTracks,e,captions.update.bind(this));}setTimeout(captions.update.bind(this),0);},update(){const e=captions.getTracks.call(this,!0),{active:t,language:i,meta:s,currentTrackNode:n}=this.captions,r=Boolean(e.find((e=>e.language===i)));this.isHTML5&&this.isVideo&&e.filter((e=>!s.get(e))).forEach((e=>{this.debug.log("Track added",e),s.set(e,{default:"showing"===e.mode}),"showing"===e.mode&&(e.mode="hidden"),on.call(this,e,"cuechange",(()=>captions.updateCues.call(this)));})),(r&&this.language!==i||!e.includes(n))&&(captions.setLanguage.call(this,i),captions.toggle.call(this,t&&r)),this.elements&&toggleClass(this.elements.container,this.config.classNames.captions.enabled,!is.empty(e)),is.array(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&controls.setCaptionsMenu.call(this);},toggle(e,t=!0){if(!this.supported.ui)return;const{toggled:i}=this.captions,s=this.config.classNames.captions.active,n=is.nullOrUndefined(e)?!i:e;if(n!==i){if(t||(this.captions.active=n,this.storage.set({captions:n})),!this.language&&n&&!t){const e=captions.getTracks.call(this),t=captions.findTrack.call(this,[this.captions.language,...this.captions.languages],!0);return this.captions.language=t.language,void captions.set.call(this,e.indexOf(t))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=n),toggleClass(this.elements.container,s,n),this.captions.toggled=n,controls.updateSetting.call(this,"captions"),triggerEvent.call(this,this.media,n?"captionsenabled":"captionsdisabled");}setTimeout((()=>{n&&this.captions.toggled&&(this.captions.currentTrackNode.mode="hidden");}));},set(e,t=!0){const i=captions.getTracks.call(this);if(-1!==e)if(is.number(e))if(e in i){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;const s=i[e],{language:n}=s||{};this.captions.currentTrackNode=s,controls.updateSetting.call(this,"captions"),t||(this.captions.language=n,this.storage.set({language:n})),this.isVimeo&&this.embed.enableTextTrack(n),triggerEvent.call(this,this.media,"languagechange");}captions.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&captions.updateCues.call(this);}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else captions.toggle.call(this,!1,t);},setLanguage(e,t=!0){if(!is.string(e))return void this.debug.warn("Invalid language argument",e);const i=e.toLowerCase();this.captions.language=i;const s=captions.getTracks.call(this),n=captions.findTrack.call(this,[i]);captions.set.call(this,s.indexOf(n),t);},getTracks(e=!1){return Array.from((this.media||{}).textTracks||[]).filter((t=>!this.isHTML5||e||this.captions.meta.has(t))).filter((e=>["captions","subtitles"].includes(e.kind)))},findTrack(e,t=!1){const i=captions.getTracks.call(this),s=e=>Number((this.captions.meta.get(e)||{}).default),n=Array.from(i).sort(((e,t)=>s(t)-s(e)));let r;return e.every((e=>(r=n.find((t=>t.language===e)),!r))),r||(t?n[0]:void 0)},getCurrentTrack(){return captions.getTracks.call(this)[this.currentTrack]},getLabel(e){let t=e;return !is.track(t)&&support.textTracks&&this.captions.toggled&&(t=captions.getCurrentTrack.call(this)),is.track(t)?is.empty(t.label)?is.empty(t.language)?i18n.get("enabled",this.config):e.language.toUpperCase():t.label:i18n.get("disabled",this.config)},updateCues(e){if(!this.supported.ui)return;if(!is.element(this.elements.captions))return void this.debug.warn("No captions element to render to");if(!is.nullOrUndefined(e)&&!Array.isArray(e))return void this.debug.warn("updateCues: Invalid input",e);let t=e;if(!t){const e=captions.getCurrentTrack.call(this);t=Array.from((e||{}).activeCues||[]).map((e=>e.getCueAsHTML())).map(getHTML);}const i=t.map((e=>e.trim())).join("\n");if(i!==this.elements.captions.innerHTML){emptyElement(this.elements.captions);const e=createElement("span",getAttributesFromSelector(this.config.selectors.caption));e.innerHTML=i,this.elements.captions.appendChild(e),triggerEvent.call(this,this.media,"cuechange");}}},defaults={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.7.8/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240],forced:!1,onChange:null},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2,4]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",pip:"PIP",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/oembed.json?url={0}"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",marker:"plyr__progress__marker",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id",hash:"data-plyr-embed-hash"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,customControls:!0,referrerPolicy:null,premium:!1},youtube:{rel:0,showinfo:0,iv_load_policy:3,modestbranding:1,customControls:!0,noCookie:!1},mediaMetadata:{title:"",artist:"",album:"",artwork:[]},markers:{enabled:!1,points:[]}},pip={active:"picture-in-picture",inactive:"inline"},providers={html5:"html5",youtube:"youtube",vimeo:"vimeo"},types={audio:"audio",video:"video"};function getProviderByUrl(e){return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e)?providers.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)?providers.vimeo:null}const noop=()=>{};class Console{constructor(e=!1){this.enabled=window.console&&e,this.enabled&&this.log("Debugging enabled");}get log(){return this.enabled?Function.prototype.bind.call(console.log,console):noop}get warn(){return this.enabled?Function.prototype.bind.call(console.warn,console):noop}get error(){return this.enabled?Function.prototype.bind.call(console.error,console):noop}}class Fullscreen{constructor(e){_defineProperty$1(this,"onChange",(()=>{if(!this.supported)return;const e=this.player.elements.buttons.fullscreen;is.element(e)&&(e.pressed=this.active);const t=this.target===this.player.media?this.target:this.player.elements.container;triggerEvent.call(this.player,t,this.active?"enterfullscreen":"exitfullscreen",!0);})),_defineProperty$1(this,"toggleFallback",((e=!1)=>{if(e?this.scrollPosition={x:window.scrollX??0,y:window.scrollY??0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=e?"hidden":"",toggleClass(this.target,this.player.config.classNames.fullscreen.fallback,e),browser.isIos){let t=document.head.querySelector('meta[name="viewport"]');const i="viewport-fit=cover";t||(t=document.createElement("meta"),t.setAttribute("name","viewport"));const s=is.string(t.content)&&t.content.includes(i);e?(this.cleanupViewport=!s,s||(t.content+=`,${i}`)):this.cleanupViewport&&(t.content=t.content.split(",").filter((e=>e.trim()!==i)).join(","));}this.onChange();})),_defineProperty$1(this,"trapFocus",(e=>{if(browser.isIos||browser.isIPadOS||!this.active||"Tab"!==e.key)return;const t=document.activeElement,i=getElements.call(this.player,"a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),[s]=i,n=i[i.length-1];t!==n||e.shiftKey?t===s&&e.shiftKey&&(n.focus(),e.preventDefault()):(s.focus(),e.preventDefault());})),_defineProperty$1(this,"update",(()=>{if(this.supported){let e;e=this.forceFallback?"Fallback (forced)":Fullscreen.nativeSupported?"Native":"Fallback",this.player.debug.log(`${e} fullscreen enabled`);}else this.player.debug.log("Fullscreen not supported and fallback disabled");toggleClass(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.supported);})),_defineProperty$1(this,"enter",(()=>{this.supported&&(browser.isIos&&this.player.config.fullscreen.iosNative?this.player.isVimeo?this.player.embed.requestFullscreen():this.target.webkitEnterFullscreen():!Fullscreen.nativeSupported||this.forceFallback?this.toggleFallback(!0):this.prefix?is.empty(this.prefix)||this.target[`${this.prefix}Request${this.property}`]():this.target.requestFullscreen({navigationUI:"hide"}));})),_defineProperty$1(this,"exit",(()=>{if(this.supported)if(browser.isIos&&this.player.config.fullscreen.iosNative)this.player.isVimeo?this.player.embed.exitFullscreen():this.target.webkitEnterFullscreen(),silencePromise(this.player.play());else if(!Fullscreen.nativeSupported||this.forceFallback)this.toggleFallback(!1);else if(this.prefix){if(!is.empty(this.prefix)){const e="moz"===this.prefix?"Cancel":"Exit";document[`${this.prefix}${e}${this.property}`]();}}else (document.cancelFullScreen||document.exitFullscreen).call(document);})),_defineProperty$1(this,"toggle",(()=>{this.active?this.exit():this.enter();})),this.player=e,this.prefix=Fullscreen.prefix,this.property=Fullscreen.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===e.config.fullscreen.fallback,this.player.elements.fullscreen=e.config.fullscreen.container&&closest$1(this.player.elements.container,e.config.fullscreen.container),on.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":`${this.prefix}fullscreenchange`,(()=>{this.onChange();})),on.call(this.player,this.player.elements.container,"dblclick",(e=>{is.element(this.player.elements.controls)&&this.player.elements.controls.contains(e.target)||this.player.listeners.proxy(e,this.toggle,"fullscreen");})),on.call(this,this.player.elements.container,"keydown",(e=>this.trapFocus(e))),this.update();}static get nativeSupported(){return !!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}get useNative(){return Fullscreen.nativeSupported&&!this.forceFallback}static get prefix(){if(is.function(document.exitFullscreen))return "";let e="";return ["webkit","moz","ms"].some((t=>!(!is.function(document[`${t}ExitFullscreen`])&&!is.function(document[`${t}CancelFullScreen`]))&&(e=t,!0))),e}static get property(){return "moz"===this.prefix?"FullScreen":"Fullscreen"}get supported(){return [this.player.config.fullscreen.enabled,this.player.isVideo,Fullscreen.nativeSupported||this.player.config.fullscreen.fallback,!this.player.isYouTube||Fullscreen.nativeSupported||!browser.isIos||this.player.config.playsinline&&!this.player.config.fullscreen.iosNative].every(Boolean)}get active(){if(!this.supported)return !1;if(!Fullscreen.nativeSupported||this.forceFallback)return hasClass(this.target,this.player.config.classNames.fullscreen.fallback);const e=this.prefix?this.target.getRootNode()[`${this.prefix}${this.property}Element`]:this.target.getRootNode().fullscreenElement;return e&&e.shadowRoot?e===this.target.getRootNode().host:e===this.target}get target(){return browser.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.fullscreen??this.player.elements.container}}function loadImage(e,t=1){return new Promise(((i,s)=>{const n=new Image,r=()=>{delete n.onload,delete n.onerror,(n.naturalWidth>=t?i:s)(n);};Object.assign(n,{onload:r,onerror:r,src:e});}))}const ui={addStyleHook(){toggleClass(this.elements.container,this.config.selectors.container.replace(".",""),!0),toggleClass(this.elements.container,this.config.classNames.uiSupported,this.supported.ui);},toggleNativeControls(e=!1){e&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls");},build(){if(this.listeners.media(),!this.supported.ui)return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`),void ui.toggleNativeControls.call(this,!0);is.element(this.elements.controls)||(controls.inject.call(this),this.listeners.controls()),ui.toggleNativeControls.call(this),this.isHTML5&&captions.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,controls.updateVolume.call(this),controls.timeUpdate.call(this),controls.durationUpdate.call(this),ui.checkPlaying.call(this),toggleClass(this.elements.container,this.config.classNames.pip.supported,support.pip&&this.isHTML5&&this.isVideo),toggleClass(this.elements.container,this.config.classNames.airplay.supported,support.airplay&&this.isHTML5),toggleClass(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout((()=>{triggerEvent.call(this,this.media,"ready");}),0),ui.setTitle.call(this),this.poster&&ui.setPoster.call(this,this.poster,!1).catch((()=>{})),this.config.duration&&controls.durationUpdate.call(this),this.config.mediaMetadata&&controls.setMediaMetadata.call(this);},setTitle(){let e=i18n.get("play",this.config);if(is.string(this.config.title)&&!is.empty(this.config.title)&&(e+=`, ${this.config.title}`),Array.from(this.elements.buttons.play||[]).forEach((t=>{t.setAttribute("aria-label",e);})),this.isEmbed){const e=getElement.call(this,"iframe");if(!is.element(e))return;const t=is.empty(this.config.title)?"video":this.config.title,i=i18n.get("frameTitle",this.config);e.setAttribute("title",i.replace("{title}",t));}},togglePoster(e){toggleClass(this.elements.container,this.config.classNames.posterEnabled,e);},setPoster(e,t=!0){return t&&this.poster?Promise.reject(new Error("Poster already set")):(this.media.setAttribute("data-poster",e),this.elements.poster.removeAttribute("hidden"),ready.call(this).then((()=>loadImage(e))).catch((t=>{throw e===this.poster&&ui.togglePoster.call(this,!1),t})).then((()=>{if(e!==this.poster)throw new Error("setPoster cancelled by later call to setPoster")})).then((()=>(Object.assign(this.elements.poster.style,{backgroundImage:`url('${e}')`,backgroundSize:""}),ui.togglePoster.call(this,!0),e))))},checkPlaying(e){toggleClass(this.elements.container,this.config.classNames.playing,this.playing),toggleClass(this.elements.container,this.config.classNames.paused,this.paused),toggleClass(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach((e=>{Object.assign(e,{pressed:this.playing}),e.setAttribute("aria-label",i18n.get(this.playing?"pause":"play",this.config));})),is.event(e)&&"timeupdate"===e.type||ui.toggleControls.call(this);},checkLoading(e){this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout((()=>{toggleClass(this.elements.container,this.config.classNames.loading,this.loading),ui.toggleControls.call(this);}),this.loading?250:0);},toggleControls(e){const{controls:t}=this.elements;if(t&&this.config.hideControls){const i=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||i));}},migrateStyles(){Object.values({...this.media.style}).filter((e=>!is.empty(e)&&is.string(e)&&e.startsWith("--plyr"))).forEach((e=>{this.elements.container.style.setProperty(e,this.media.style.getPropertyValue(e)),this.media.style.removeProperty(e);})),is.empty(this.media.style)&&this.media.removeAttribute("style");}};class Listeners{constructor(e){_defineProperty$1(this,"firstTouch",(()=>{const{player:e}=this,{elements:t}=e;e.touch=!0,toggleClass(t.container,e.config.classNames.isTouch,!0);})),_defineProperty$1(this,"global",((e=!0)=>{const{player:t}=this;t.config.keyboard.global&&toggleListener.call(t,window,"keydown keyup",this.handleKey,e,!1),toggleListener.call(t,document.body,"click",this.toggleMenu,e),once.call(t,document.body,"touchstart",this.firstTouch);})),_defineProperty$1(this,"container",(()=>{const{player:e}=this,{config:t,elements:i,timers:s}=e;!t.keyboard.global&&t.keyboard.focused&&on.call(e,i.container,"keydown keyup",this.handleKey,!1),on.call(e,i.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",(t=>{const{controls:n}=i;n&&"enterfullscreen"===t.type&&(n.pressed=!1,n.hover=!1);let r=0;["touchstart","touchmove","mousemove"].includes(t.type)&&(ui.toggleControls.call(e,!0),r=e.touch?3e3:2e3),clearTimeout(s.controls),s.controls=setTimeout((()=>ui.toggleControls.call(e,!1)),r);}));const n=()=>{if(!e.isVimeo||e.config.vimeo.premium)return;const t=i.wrapper,{active:s}=e.fullscreen,[n,r]=getAspectRatio.call(e),a=supportsCSS(`aspect-ratio: ${n} / ${r}`);if(!s)return void(a?(t.style.width=null,t.style.height=null):(t.style.maxWidth=null,t.style.margin=null));const[o,l]=getViewportSize(),c=o/l>n/r;a?(t.style.width=c?"auto":"100%",t.style.height=c?"100%":"auto"):(t.style.maxWidth=c?l/r*n+"px":null,t.style.margin=c?"0 auto":null);},r=()=>{clearTimeout(s.resized),s.resized=setTimeout(n,50);};on.call(e,i.container,"enterfullscreen exitfullscreen",(t=>{const{target:s}=e.fullscreen;if(s!==i.container)return;if(!e.isEmbed&&is.empty(e.config.ratio))return;n();("enterfullscreen"===t.type?on:off).call(e,window,"resize",r);}));})),_defineProperty$1(this,"media",(()=>{const{player:e}=this,{elements:t}=e;if(on.call(e,e.media,"timeupdate seeking seeked",(t=>controls.timeUpdate.call(e,t))),on.call(e,e.media,"durationchange loadeddata loadedmetadata",(t=>controls.durationUpdate.call(e,t))),on.call(e,e.media,"ended",(()=>{e.isHTML5&&e.isVideo&&e.config.resetOnEnd&&(e.restart(),e.pause());})),on.call(e,e.media,"progress playing seeking seeked",(t=>controls.updateProgress.call(e,t))),on.call(e,e.media,"volumechange",(t=>controls.updateVolume.call(e,t))),on.call(e,e.media,"playing play pause ended emptied timeupdate",(t=>ui.checkPlaying.call(e,t))),on.call(e,e.media,"waiting canplay seeked playing",(t=>ui.checkLoading.call(e,t))),e.supported.ui&&e.config.clickToPlay&&!e.isAudio){const i=getElement.call(e,`.${e.config.classNames.video}`);if(!is.element(i))return;on.call(e,t.container,"click",(s=>{([t.container,i].includes(s.target)||i.contains(s.target))&&(e.touch&&e.config.hideControls||(e.ended?(this.proxy(s,e.restart,"restart"),this.proxy(s,(()=>{silencePromise(e.play());}),"play")):this.proxy(s,(()=>{silencePromise(e.togglePlay());}),"play")));}));}e.supported.ui&&e.config.disableContextMenu&&on.call(e,t.wrapper,"contextmenu",(e=>{e.preventDefault();}),!1),on.call(e,e.media,"volumechange",(()=>{e.storage.set({volume:e.volume,muted:e.muted});})),on.call(e,e.media,"ratechange",(()=>{controls.updateSetting.call(e,"speed"),e.storage.set({speed:e.speed});})),on.call(e,e.media,"qualitychange",(t=>{controls.updateSetting.call(e,"quality",null,t.detail.quality);})),on.call(e,e.media,"ready qualitychange",(()=>{controls.setDownloadUrl.call(e);}));const i=e.config.events.concat(["keyup","keydown"]).join(" ");on.call(e,e.media,i,(i=>{let{detail:s={}}=i;"error"===i.type&&(s=e.media.error),triggerEvent.call(e,t.container,i.type,!0,s);}));})),_defineProperty$1(this,"proxy",((e,t,i)=>{const{player:s}=this,n=s.config.listeners[i];let r=!0;is.function(n)&&(r=n.call(s,e)),!1!==r&&is.function(t)&&t.call(s,e);})),_defineProperty$1(this,"bind",((e,t,i,s,n=!0)=>{const{player:r}=this,a=r.config.listeners[s],o=is.function(a);on.call(r,e,t,(e=>this.proxy(e,i,s)),n&&!o);})),_defineProperty$1(this,"controls",(()=>{const{player:e}=this,{elements:t}=e,i=browser.isIE?"change":"input";if(t.buttons.play&&Array.from(t.buttons.play).forEach((t=>{this.bind(t,"click",(()=>{silencePromise(e.togglePlay());}),"play");})),this.bind(t.buttons.restart,"click",e.restart,"restart"),this.bind(t.buttons.rewind,"click",(()=>{e.lastSeekTime=Date.now(),e.rewind();}),"rewind"),this.bind(t.buttons.fastForward,"click",(()=>{e.lastSeekTime=Date.now(),e.forward();}),"fastForward"),this.bind(t.buttons.mute,"click",(()=>{e.muted=!e.muted;}),"mute"),this.bind(t.buttons.captions,"click",(()=>e.toggleCaptions())),this.bind(t.buttons.download,"click",(()=>{triggerEvent.call(e,e.media,"download");}),"download"),this.bind(t.buttons.fullscreen,"click",(()=>{e.fullscreen.toggle();}),"fullscreen"),this.bind(t.buttons.pip,"click",(()=>{e.pip="toggle";}),"pip"),this.bind(t.buttons.airplay,"click",e.airplay,"airplay"),this.bind(t.buttons.settings,"click",(t=>{t.stopPropagation(),t.preventDefault(),controls.toggleMenu.call(e,t);}),null,!1),this.bind(t.buttons.settings,"keyup",(t=>{[" ","Enter"].includes(t.key)&&("Enter"!==t.key?(t.preventDefault(),t.stopPropagation(),controls.toggleMenu.call(e,t)):controls.focusFirstMenuItem.call(e,null,!0));}),null,!1),this.bind(t.settings.menu,"keydown",(t=>{"Escape"===t.key&&controls.toggleMenu.call(e,t);})),this.bind(t.inputs.seek,"mousedown mousemove",(e=>{const i=t.progress.getBoundingClientRect(),s=100/i.width*(e.pageX-i.left);e.currentTarget.setAttribute("seek-value",s);})),this.bind(t.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",(t=>{const i=t.currentTarget,s="play-on-seeked";if(is.keyboardEvent(t)&&!["ArrowLeft","ArrowRight"].includes(t.key))return;e.lastSeekTime=Date.now();const n=i.hasAttribute(s),r=["mouseup","touchend","keyup"].includes(t.type);n&&r?(i.removeAttribute(s),silencePromise(e.play())):!r&&e.playing&&(i.setAttribute(s,""),e.pause());})),browser.isIos){const t=getElements.call(e,'input[type="range"]');Array.from(t).forEach((e=>this.bind(e,i,(e=>repaint(e.target)))));}this.bind(t.inputs.seek,i,(t=>{const i=t.currentTarget;let s=i.getAttribute("seek-value");is.empty(s)&&(s=i.value),i.removeAttribute("seek-value"),e.currentTime=s/i.max*e.duration;}),"seek"),this.bind(t.progress,"mouseenter mouseleave mousemove",(t=>controls.updateSeekTooltip.call(e,t))),this.bind(t.progress,"mousemove touchmove",(t=>{const{previewThumbnails:i}=e;i&&i.loaded&&i.startMove(t);})),this.bind(t.progress,"mouseleave touchend click",(()=>{const{previewThumbnails:t}=e;t&&t.loaded&&t.endMove(!1,!0);})),this.bind(t.progress,"mousedown touchstart",(t=>{const{previewThumbnails:i}=e;i&&i.loaded&&i.startScrubbing(t);})),this.bind(t.progress,"mouseup touchend",(t=>{const{previewThumbnails:i}=e;i&&i.loaded&&i.endScrubbing(t);})),browser.isWebKit&&Array.from(getElements.call(e,'input[type="range"]')).forEach((t=>{this.bind(t,"input",(t=>controls.updateRangeFill.call(e,t.target)));})),e.config.toggleInvert&&!is.element(t.display.duration)&&this.bind(t.display.currentTime,"click",(()=>{0!==e.currentTime&&(e.config.invertTime=!e.config.invertTime,controls.timeUpdate.call(e));})),this.bind(t.inputs.volume,i,(t=>{e.volume=t.target.value;}),"volume"),this.bind(t.controls,"mouseenter mouseleave",(i=>{t.controls.hover=!e.touch&&"mouseenter"===i.type;})),t.fullscreen&&Array.from(t.fullscreen.children).filter((e=>!e.contains(t.container))).forEach((i=>{this.bind(i,"mouseenter mouseleave",(i=>{t.controls&&(t.controls.hover=!e.touch&&"mouseenter"===i.type);}));})),this.bind(t.controls,"mousedown mouseup touchstart touchend touchcancel",(e=>{t.controls.pressed=["mousedown","touchstart"].includes(e.type);})),this.bind(t.controls,"focusin",(()=>{const{config:i,timers:s}=e;toggleClass(t.controls,i.classNames.noTransition,!0),ui.toggleControls.call(e,!0),setTimeout((()=>{toggleClass(t.controls,i.classNames.noTransition,!1);}),0);const n=this.touch?3e3:4e3;clearTimeout(s.controls),s.controls=setTimeout((()=>ui.toggleControls.call(e,!1)),n);})),this.bind(t.inputs.volume,"wheel",(t=>{const i=t.webkitDirectionInvertedFromDevice,[s,n]=[t.deltaX,-t.deltaY].map((e=>i?-e:e)),r=Math.sign(Math.abs(s)>Math.abs(n)?s:n);e.increaseVolume(r/50);const{volume:a}=e.media;(1===r&&a<1||-1===r&&a>0)&&t.preventDefault();}),"volume",!1);})),this.player=e,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.firstTouch=this.firstTouch.bind(this);}handleKey(e){const{player:t}=this,{elements:i}=t,{key:s,type:n,altKey:r,ctrlKey:a,metaKey:o,shiftKey:l}=e,c="keydown"===n,u=c&&s===this.lastKey;if(r||a||o||l)return;if(!s)return;if(c){const n=document.activeElement;if(is.element(n)){const{editable:s}=t.config.selectors,{seek:r}=i.inputs;if(n!==r&&matches(n,s))return;if(" "===e.key&&matches(n,'button, [role^="menuitem"]'))return}switch([" ","ArrowLeft","ArrowUp","ArrowRight","ArrowDown","0","1","2","3","4","5","6","7","8","9","c","f","k","l","m"].includes(s)&&(e.preventDefault(),e.stopPropagation()),s){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":u||(d=parseInt(s,10),t.currentTime=t.duration/10*d);break;case" ":case"k":u||silencePromise(t.togglePlay());break;case"ArrowUp":t.increaseVolume(.1);break;case"ArrowDown":t.decreaseVolume(.1);break;case"m":u||(t.muted=!t.muted);break;case"ArrowRight":t.forward();break;case"ArrowLeft":t.rewind();break;case"f":t.fullscreen.toggle();break;case"c":u||t.toggleCaptions();break;case"l":t.loop=!t.loop;}"Escape"===s&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=s;}else this.lastKey=null;var d;}toggleMenu(e){controls.toggleMenu.call(this.player,e);}}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var loadjs_umd=createCommonjsModule((function(e,t){e.exports=function(){var e=function(){},t={},i={},s={};function n(e,t){e=e.push?e:[e];var n,r,a,o=[],l=e.length,c=l;for(n=function(e,i){i.length&&o.push(e),--c||t(o);};l--;)r=e[l],(a=i[r])?n(r,a):(s[r]=s[r]||[]).push(n);}function r(e,t){if(e){var n=s[e];if(i[e]=t,n)for(;n.length;)n[0](e,t),n.splice(0,1);}}function a(t,i){t.call&&(t={success:t}),i.length?(t.error||e)(i):(t.success||e)(t);}function o(t,i,s,n){var r,a,l=document,c=s.async,u=(s.numRetries||0)+1,d=s.before||e,h=t.replace(/[\?|#].*$/,""),m=t.replace(/^(css|img)!/,"");n=n||0,/(^css!|\.css$)/.test(h)?((a=l.createElement("link")).rel="stylesheet",a.href=m,(r="hideFocus"in a)&&a.relList&&(r=0,a.rel="preload",a.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h)?(a=l.createElement("img")).src=m:((a=l.createElement("script")).src=t,a.async=void 0===c||c),a.onload=a.onerror=a.onbeforeload=function(e){var l=e.type[0];if(r)try{a.sheet.cssText.length||(l="e");}catch(e){18!=e.code&&(l="e");}if("e"==l){if((n+=1)<u)return o(t,i,s,n)}else if("preload"==a.rel&&"style"==a.as)return a.rel="stylesheet";i(t,l,e.defaultPrevented);},!1!==d(t,a)&&l.head.appendChild(a);}function l(e,t,i){var s,n,r=(e=e.push?e:[e]).length,a=r,l=[];for(s=function(e,i,s){if("e"==i&&l.push(e),"b"==i){if(!s)return;l.push(e);}--r||t(l);},n=0;n<a;n++)o(e[n],s,i);}function c(e,i,s){var n,o;if(i&&i.trim&&(n=i),o=(n?s:i)||{},n){if(n in t)throw "LoadJS";t[n]=!0;}function c(t,i){l(e,(function(e){a(o,e),t&&a({success:t,error:i},e),r(n,e);}),o);}if(o.returnPromise)return new Promise(c);c();}return c.ready=function(e,t){return n(e,(function(e){a(t,e);})),c},c.done=function(e){r(e,[]);},c.reset=function(){t={},i={},s={};},c.isDefined=function(e){return e in t},c}();}));function loadScript(e){return new Promise(((t,i)=>{loadjs_umd(e,{success:t,error:i});}))}function parseId$1(e){if(is.empty(e))return null;if(is.number(Number(e)))return e;return e.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:e}function parseHash(e){const t=e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);return t&&5===t.length?t[4]:null}function assurePlaybackState$1(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,triggerEvent.call(this,this.media,e?"play":"pause"));}const vimeo={setup(){const e=this;toggleClass(e.elements.wrapper,e.config.classNames.embed,!0),e.options.speed=e.config.speed.options,setAspectRatio.call(e),is.object(window.Vimeo)?vimeo.ready.call(e):loadScript(e.config.urls.vimeo.sdk).then((()=>{vimeo.ready.call(e);})).catch((t=>{e.debug.warn("Vimeo SDK (player.js) failed to load",t);}));},ready(){const e=this,t=e.config.vimeo,{premium:i,referrerPolicy:s,...n}=t;let r=e.media.getAttribute("src"),a="";is.empty(r)?(r=e.media.getAttribute(e.config.attributes.embed.id),a=e.media.getAttribute(e.config.attributes.embed.hash)):a=parseHash(r);const o=a?{h:a}:{};i&&Object.assign(n,{controls:!1,sidedock:!1});const l=buildUrlParams({loop:e.config.loop.active,autoplay:e.autoplay,muted:e.muted,gesture:"media",playsinline:e.config.playsinline,...o,...n}),c=parseId$1(r),u=createElement("iframe"),d=format(e.config.urls.vimeo.iframe,c,l);if(u.setAttribute("src",d),u.setAttribute("allowfullscreen",""),u.setAttribute("allow",["autoplay","fullscreen","picture-in-picture","encrypted-media","accelerometer","gyroscope"].join("; ")),is.empty(s)||u.setAttribute("referrerPolicy",s),i||!t.customControls)u.setAttribute("data-poster",e.poster),e.media=replaceElement(u,e.media);else {const t=createElement("div",{class:e.config.classNames.embedContainer,"data-poster":e.poster});t.appendChild(u),e.media=replaceElement(t,e.media);}t.customControls||fetch(format(e.config.urls.vimeo.api,d)).then((t=>{!is.empty(t)&&t.thumbnail_url&&ui.setPoster.call(e,t.thumbnail_url).catch((()=>{}));})),e.embed=new window.Vimeo.Player(u,{autopause:e.config.autopause,muted:e.muted}),e.media.paused=!0,e.media.currentTime=0,e.supported.ui&&e.embed.disableTextTrack(),e.media.play=()=>(assurePlaybackState$1.call(e,!0),e.embed.play()),e.media.pause=()=>(assurePlaybackState$1.call(e,!1),e.embed.pause()),e.media.stop=()=>{e.pause(),e.currentTime=0;};let{currentTime:h}=e.media;Object.defineProperty(e.media,"currentTime",{get:()=>h,set(t){const{embed:i,media:s,paused:n,volume:r}=e,a=n&&!i.hasPlayed;s.seeking=!0,triggerEvent.call(e,s,"seeking"),Promise.resolve(a&&i.setVolume(0)).then((()=>i.setCurrentTime(t))).then((()=>a&&i.pause())).then((()=>a&&i.setVolume(r))).catch((()=>{}));}});let m=e.config.speed.selected;Object.defineProperty(e.media,"playbackRate",{get:()=>m,set(t){e.embed.setPlaybackRate(t).then((()=>{m=t,triggerEvent.call(e,e.media,"ratechange");})).catch((()=>{e.options.speed=[1];}));}});let{volume:p}=e.config;Object.defineProperty(e.media,"volume",{get:()=>p,set(t){e.embed.setVolume(t).then((()=>{p=t,triggerEvent.call(e,e.media,"volumechange");}));}});let{muted:g}=e.config;Object.defineProperty(e.media,"muted",{get:()=>g,set(t){const i=!!is.boolean(t)&&t;e.embed.setMuted(!!i||e.config.muted).then((()=>{g=i,triggerEvent.call(e,e.media,"volumechange");}));}});let f,{loop:y}=e.config;Object.defineProperty(e.media,"loop",{get:()=>y,set(t){const i=is.boolean(t)?t:e.config.loop.active;e.embed.setLoop(i).then((()=>{y=i;}));}}),e.embed.getVideoUrl().then((t=>{f=t,controls.setDownloadUrl.call(e);})).catch((e=>{this.debug.warn(e);})),Object.defineProperty(e.media,"currentSrc",{get:()=>f}),Object.defineProperty(e.media,"ended",{get:()=>e.currentTime===e.duration}),Promise.all([e.embed.getVideoWidth(),e.embed.getVideoHeight()]).then((t=>{const[i,s]=t;e.embed.ratio=roundAspectRatio(i,s),setAspectRatio.call(this);})),e.embed.setAutopause(e.config.autopause).then((t=>{e.config.autopause=t;})),e.embed.getVideoTitle().then((t=>{e.config.title=t,ui.setTitle.call(this);})),e.embed.getCurrentTime().then((t=>{h=t,triggerEvent.call(e,e.media,"timeupdate");})),e.embed.getDuration().then((t=>{e.media.duration=t,triggerEvent.call(e,e.media,"durationchange");})),e.embed.getTextTracks().then((t=>{e.media.textTracks=t,captions.setup.call(e);})),e.embed.on("cuechange",(({cues:t=[]})=>{const i=t.map((e=>stripHTML(e.text)));captions.updateCues.call(e,i);})),e.embed.on("loaded",(()=>{if(e.embed.getPaused().then((t=>{assurePlaybackState$1.call(e,!t),t||triggerEvent.call(e,e.media,"playing");})),is.element(e.embed.element)&&e.supported.ui){e.embed.element.setAttribute("tabindex",-1);}})),e.embed.on("bufferstart",(()=>{triggerEvent.call(e,e.media,"waiting");})),e.embed.on("bufferend",(()=>{triggerEvent.call(e,e.media,"playing");})),e.embed.on("play",(()=>{assurePlaybackState$1.call(e,!0),triggerEvent.call(e,e.media,"playing");})),e.embed.on("pause",(()=>{assurePlaybackState$1.call(e,!1);})),e.embed.on("timeupdate",(t=>{e.media.seeking=!1,h=t.seconds,triggerEvent.call(e,e.media,"timeupdate");})),e.embed.on("progress",(t=>{e.media.buffered=t.percent,triggerEvent.call(e,e.media,"progress"),1===parseInt(t.percent,10)&&triggerEvent.call(e,e.media,"canplaythrough"),e.embed.getDuration().then((t=>{t!==e.media.duration&&(e.media.duration=t,triggerEvent.call(e,e.media,"durationchange"));}));})),e.embed.on("seeked",(()=>{e.media.seeking=!1,triggerEvent.call(e,e.media,"seeked");})),e.embed.on("ended",(()=>{e.media.paused=!0,triggerEvent.call(e,e.media,"ended");})),e.embed.on("error",(t=>{e.media.error=t,triggerEvent.call(e,e.media,"error");})),t.customControls&&setTimeout((()=>ui.build.call(e)),0);}};function parseId(e){if(is.empty(e))return null;return e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:e}function assurePlaybackState(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,triggerEvent.call(this,this.media,e?"play":"pause"));}function getHost(e){return e.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0}const youtube={setup(){if(toggleClass(this.elements.wrapper,this.config.classNames.embed,!0),is.object(window.YT)&&is.function(window.YT.Player))youtube.ready.call(this);else {const e=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{is.function(e)&&e(),youtube.ready.call(this);},loadScript(this.config.urls.youtube.sdk).catch((e=>{this.debug.warn("YouTube API failed to load",e);}));}},getTitle(e){fetch(format(this.config.urls.youtube.api,e)).then((e=>{if(is.object(e)){const{title:t,height:i,width:s}=e;this.config.title=t,ui.setTitle.call(this),this.embed.ratio=roundAspectRatio(s,i);}setAspectRatio.call(this);})).catch((()=>{setAspectRatio.call(this);}));},ready(){const e=this,t=e.config.youtube,i=e.media&&e.media.getAttribute("id");if(!is.empty(i)&&i.startsWith("youtube-"))return;let s=e.media.getAttribute("src");is.empty(s)&&(s=e.media.getAttribute(this.config.attributes.embed.id));const n=parseId(s),r=createElement("div",{id:generateId(e.provider),"data-poster":t.customControls?e.poster:void 0});if(e.media=replaceElement(r,e.media),t.customControls){const t=e=>`https://i.ytimg.com/vi/${n}/${e}default.jpg`;loadImage(t("maxres"),121).catch((()=>loadImage(t("sd"),121))).catch((()=>loadImage(t("hq")))).then((t=>ui.setPoster.call(e,t.src))).then((t=>{t.includes("maxres")||(e.elements.poster.style.backgroundSize="cover");})).catch((()=>{}));}e.embed=new window.YT.Player(e.media,{videoId:n,host:getHost(t),playerVars:extend({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui&&t.customControls?0:1,disablekb:1,playsinline:e.config.playsinline&&!e.config.fullscreen.iosNative?1:0,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},t),events:{onError(t){if(!e.media.error){const i=t.data,s={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[i]||"An unknown error occurred";e.media.error={code:i,message:s},triggerEvent.call(e,e.media,"error");}},onPlaybackRateChange(t){const i=t.target;e.media.playbackRate=i.getPlaybackRate(),triggerEvent.call(e,e.media,"ratechange");},onReady(i){if(is.function(e.media.play))return;const s=i.target;youtube.getTitle.call(e,n),e.media.play=()=>{assurePlaybackState.call(e,!0),s.playVideo();},e.media.pause=()=>{assurePlaybackState.call(e,!1),s.pauseVideo();},e.media.stop=()=>{s.stopVideo();},e.media.duration=s.getDuration(),e.media.paused=!0,e.media.currentTime=0,Object.defineProperty(e.media,"currentTime",{get:()=>Number(s.getCurrentTime()),set(t){e.paused&&!e.embed.hasPlayed&&e.embed.mute(),e.media.seeking=!0,triggerEvent.call(e,e.media,"seeking"),s.seekTo(t);}}),Object.defineProperty(e.media,"playbackRate",{get:()=>s.getPlaybackRate(),set(e){s.setPlaybackRate(e);}});let{volume:r}=e.config;Object.defineProperty(e.media,"volume",{get:()=>r,set(t){r=t,s.setVolume(100*r),triggerEvent.call(e,e.media,"volumechange");}});let{muted:a}=e.config;Object.defineProperty(e.media,"muted",{get:()=>a,set(t){const i=is.boolean(t)?t:a;a=i,s[i?"mute":"unMute"](),s.setVolume(100*r),triggerEvent.call(e,e.media,"volumechange");}}),Object.defineProperty(e.media,"currentSrc",{get:()=>s.getVideoUrl()}),Object.defineProperty(e.media,"ended",{get:()=>e.currentTime===e.duration});const o=s.getAvailablePlaybackRates();e.options.speed=o.filter((t=>e.config.speed.options.includes(t))),e.supported.ui&&t.customControls&&e.media.setAttribute("tabindex",-1),triggerEvent.call(e,e.media,"timeupdate"),triggerEvent.call(e,e.media,"durationchange"),clearInterval(e.timers.buffering),e.timers.buffering=setInterval((()=>{e.media.buffered=s.getVideoLoadedFraction(),(null===e.media.lastBuffered||e.media.lastBuffered<e.media.buffered)&&triggerEvent.call(e,e.media,"progress"),e.media.lastBuffered=e.media.buffered,1===e.media.buffered&&(clearInterval(e.timers.buffering),triggerEvent.call(e,e.media,"canplaythrough"));}),200),t.customControls&&setTimeout((()=>ui.build.call(e)),50);},onStateChange(i){const s=i.target;clearInterval(e.timers.playing);switch(e.media.seeking&&[1,2].includes(i.data)&&(e.media.seeking=!1,triggerEvent.call(e,e.media,"seeked")),i.data){case-1:triggerEvent.call(e,e.media,"timeupdate"),e.media.buffered=s.getVideoLoadedFraction(),triggerEvent.call(e,e.media,"progress");break;case 0:assurePlaybackState.call(e,!1),e.media.loop?(s.stopVideo(),s.playVideo()):triggerEvent.call(e,e.media,"ended");break;case 1:t.customControls&&!e.config.autoplay&&e.media.paused&&!e.embed.hasPlayed?e.media.pause():(assurePlaybackState.call(e,!0),triggerEvent.call(e,e.media,"playing"),e.timers.playing=setInterval((()=>{triggerEvent.call(e,e.media,"timeupdate");}),50),e.media.duration!==s.getDuration()&&(e.media.duration=s.getDuration(),triggerEvent.call(e,e.media,"durationchange")));break;case 2:e.muted||e.embed.unMute(),assurePlaybackState.call(e,!1);break;case 3:triggerEvent.call(e,e.media,"waiting");}triggerEvent.call(e,e.elements.container,"statechange",!1,{code:i.data});}}});}},media={setup(){this.media?(toggleClass(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),toggleClass(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&toggleClass(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=createElement("div",{class:this.config.classNames.video}),wrap(this.media,this.elements.wrapper),this.elements.poster=createElement("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster)),this.isHTML5?html5.setup.call(this):this.isYouTube?youtube.setup.call(this):this.isVimeo&&vimeo.setup.call(this)):this.debug.warn("No media element found!");}};class Ads{constructor(e){_defineProperty$1(this,"load",(()=>{this.enabled&&(is.object(window.google)&&is.object(window.google.ima)?this.ready():loadScript(this.player.config.urls.googleIMA.sdk).then((()=>{this.ready();})).catch((()=>{this.trigger("error",new Error("Google IMA SDK failed to load"));})));})),_defineProperty$1(this,"ready",(()=>{var e;this.enabled||((e=this).manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then((()=>{this.clearSafetyTimer("onAdsManagerLoaded()");})),this.listeners(),this.setupIMA();})),_defineProperty$1(this,"setupIMA",(()=>{this.elements.container=createElement("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,(e=>this.onAdsManagerLoaded(e)),!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(e=>this.onAdError(e)),!1),this.requestAds();})),_defineProperty$1(this,"requestAds",(()=>{const{container:e}=this.player.elements;try{const t=new google.ima.AdsRequest;t.adTagUrl=this.tagUrl,t.linearAdSlotWidth=e.offsetWidth,t.linearAdSlotHeight=e.offsetHeight,t.nonLinearAdSlotWidth=e.offsetWidth,t.nonLinearAdSlotHeight=e.offsetHeight,t.forceNonLinearFullSlot=!1,t.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(t);}catch(e){this.onAdError(e);}})),_defineProperty$1(this,"pollCountdown",((e=!1)=>{if(!e)return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");this.countdownTimer=setInterval((()=>{const e=formatTime(Math.max(this.manager.getRemainingTime(),0)),t=`${i18n.get("advertisement",this.player.config)} - ${e}`;this.elements.container.setAttribute("data-badge-text",t);}),100);})),_defineProperty$1(this,"onAdsManagerLoaded",(e=>{if(!this.enabled)return;const t=new google.ima.AdsRenderingSettings;t.restoreCustomPlaybackStateOnAdBreakComplete=!0,t.enablePreloading=!0,this.manager=e.getAdsManager(this.player,t),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(e=>this.onAdError(e))),Object.keys(google.ima.AdEvent.Type).forEach((e=>{this.manager.addEventListener(google.ima.AdEvent.Type[e],(e=>this.onAdEvent(e)));})),this.trigger("loaded");})),_defineProperty$1(this,"addCuePoints",(()=>{is.empty(this.cuePoints)||this.cuePoints.forEach((e=>{if(0!==e&&-1!==e&&e<this.player.duration){const t=this.player.elements.progress;if(is.element(t)){const i=100/this.player.duration*e,s=createElement("span",{class:this.player.config.classNames.cues});s.style.left=`${i.toString()}%`,t.appendChild(s);}}}));})),_defineProperty$1(this,"onAdEvent",(e=>{const{container:t}=this.player.elements,i=e.getAd(),s=e.getAdData();switch((e=>{triggerEvent.call(this.player,this.player.media,`ads${e.replace(/_/g,"").toLowerCase()}`);})(e.type),e.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),i.isLinear()||(i.width=t.offsetWidth,i.height=t.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.player.ended?this.loadAds():this.loader.contentComplete();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:s.adError&&this.player.debug.warn(`Non-fatal ad error: ${s.adError.getMessage()}`);}})),_defineProperty$1(this,"onAdError",(e=>{this.cancel(),this.player.debug.warn("Ads error",e);})),_defineProperty$1(this,"listeners",(()=>{const{container:e}=this.player.elements;let t;this.player.on("canplay",(()=>{this.addCuePoints();})),this.player.on("ended",(()=>{this.loader.contentComplete();})),this.player.on("timeupdate",(()=>{t=this.player.currentTime;})),this.player.on("seeked",(()=>{const e=this.player.currentTime;is.empty(this.cuePoints)||this.cuePoints.forEach(((i,s)=>{t<i&&i<e&&(this.manager.discardAdBreak(),this.cuePoints.splice(s,1));}));})),window.addEventListener("resize",(()=>{this.manager&&this.manager.resize(e.offsetWidth,e.offsetHeight,google.ima.ViewMode.NORMAL);}));})),_defineProperty$1(this,"play",(()=>{const{container:e}=this.player.elements;this.managerPromise||this.resumeContent(),this.managerPromise.then((()=>{this.manager.setVolume(this.player.volume),this.elements.displayContainer.initialize();try{this.initialized||(this.manager.init(e.offsetWidth,e.offsetHeight,google.ima.ViewMode.NORMAL),this.manager.start()),this.initialized=!0;}catch(e){this.onAdError(e);}})).catch((()=>{}));})),_defineProperty$1(this,"resumeContent",(()=>{this.elements.container.style.zIndex="",this.playing=!1,silencePromise(this.player.media.play());})),_defineProperty$1(this,"pauseContent",(()=>{this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause();})),_defineProperty$1(this,"cancel",(()=>{this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds();})),_defineProperty$1(this,"loadAds",(()=>{this.managerPromise.then((()=>{this.manager&&this.manager.destroy(),this.managerPromise=new Promise((e=>{this.on("loaded",e),this.player.debug.log(this.manager);})),this.initialized=!1,this.requestAds();})).catch((()=>{}));})),_defineProperty$1(this,"trigger",((e,...t)=>{const i=this.events[e];is.array(i)&&i.forEach((e=>{is.function(e)&&e.apply(this,t);}));})),_defineProperty$1(this,"on",((e,t)=>(is.array(this.events[e])||(this.events[e]=[]),this.events[e].push(t),this))),_defineProperty$1(this,"startSafetyTimer",((e,t)=>{this.player.debug.log(`Safety timer invoked from: ${t}`),this.safetyTimer=setTimeout((()=>{this.cancel(),this.clearSafetyTimer("startSafetyTimer()");}),e);})),_defineProperty$1(this,"clearSafetyTimer",(e=>{is.nullOrUndefined(this.safetyTimer)||(this.player.debug.log(`Safety timer cleared from: ${e}`),clearTimeout(this.safetyTimer),this.safetyTimer=null);})),this.player=e,this.config=e.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise(((e,t)=>{this.on("loaded",e),this.on("error",t);})),this.load();}get enabled(){const{config:e}=this;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!is.empty(e.publisherId)||is.url(e.tagUrl))}get tagUrl(){const{config:e}=this;if(is.url(e.tagUrl))return e.tagUrl;return `https://go.aniview.com/api/adserver6/vast/?${buildUrlParams({AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:e.publisherId})}`}}function clamp(e=0,t=0,i=255){return Math.min(Math.max(e,t),i)}const parseVtt=e=>{const t=[];return e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e=>{const i={};e.split(/\r\n|\n|\r/).forEach((e=>{if(is.number(i.startTime)){if(!is.empty(e.trim())&&is.empty(i.text)){const t=e.trim().split("#xywh=");[i.text]=t,t[1]&&([i.x,i.y,i.w,i.h]=t[1].split(","));}}else {const t=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);t&&(i.startTime=60*Number(t[1]||0)*60+60*Number(t[2])+Number(t[3])+Number(`0.${t[4]}`),i.endTime=60*Number(t[6]||0)*60+60*Number(t[7])+Number(t[8])+Number(`0.${t[9]}`));}})),i.text&&t.push(i);})),t},fitRatio=(e,t)=>{const i={};return e>t.width/t.height?(i.width=t.width,i.height=1/e*t.width):(i.height=t.height,i.width=e*t.height),i};class PreviewThumbnails{constructor(e){_defineProperty$1(this,"load",(()=>{this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then((()=>{this.enabled&&(this.render(),this.determineContainerAutoSizing(),this.listeners(),this.loaded=!0);}));})),_defineProperty$1(this,"getThumbnails",(()=>new Promise((e=>{const{src:t}=this.player.config.previewThumbnails;if(is.empty(t))throw new Error("Missing previewThumbnails.src config attribute");const i=()=>{this.thumbnails.sort(((e,t)=>e.height-t.height)),this.player.debug.log("Preview thumbnails",this.thumbnails),e();};if(is.function(t))t((e=>{this.thumbnails=e,i();}));else {const e=(is.string(t)?[t]:t).map((e=>this.getThumbnail(e)));Promise.all(e).then(i);}})))),_defineProperty$1(this,"getThumbnail",(e=>new Promise((t=>{fetch(e).then((i=>{const s={frames:parseVtt(i),height:null,urlPrefix:""};s.frames[0].text.startsWith("/")||s.frames[0].text.startsWith("http://")||s.frames[0].text.startsWith("https://")||(s.urlPrefix=e.substring(0,e.lastIndexOf("/")+1));const n=new Image;n.onload=()=>{s.height=n.naturalHeight,s.width=n.naturalWidth,this.thumbnails.push(s),t();},n.src=s.urlPrefix+s.frames[0].text;}));})))),_defineProperty$1(this,"startMove",(e=>{if(this.loaded&&is.event(e)&&["touchmove","mousemove"].includes(e.type)&&this.player.media.duration){if("touchmove"===e.type)this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else {var t,i;const s=this.player.elements.progress.getBoundingClientRect(),n=100/s.width*(e.pageX-s.left);this.seekTime=this.player.media.duration*(n/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=e.pageX,this.elements.thumb.time.innerText=formatTime(this.seekTime);const r=null===(t=this.player.config.markers)||void 0===t||null===(i=t.points)||void 0===i?void 0:i.find((({time:e})=>e===Math.round(this.seekTime)));r&&this.elements.thumb.time.insertAdjacentHTML("afterbegin",`${r.label}<br>`);}this.showImageAtCurrentTime();}})),_defineProperty$1(this,"endMove",(()=>{this.toggleThumbContainer(!1,!0);})),_defineProperty$1(this,"startScrubbing",(e=>{(is.nullOrUndefined(e.button)||!1===e.button||0===e.button)&&(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()));})),_defineProperty$1(this,"endScrubbing",(()=>{this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):once.call(this.player,this.player.media,"timeupdate",(()=>{this.mouseDown||this.toggleScrubbingContainer(!1);}));})),_defineProperty$1(this,"listeners",(()=>{this.player.on("play",(()=>{this.toggleThumbContainer(!1,!0);})),this.player.on("seeked",(()=>{this.toggleThumbContainer(!1);})),this.player.on("timeupdate",(()=>{this.lastTime=this.player.media.currentTime;}));})),_defineProperty$1(this,"render",(()=>{this.elements.thumb.container=createElement("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=createElement("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);const e=createElement("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=createElement("span",{},"00:00"),e.appendChild(this.elements.thumb.time),this.elements.thumb.imageContainer.appendChild(e),is.element(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=createElement("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);})),_defineProperty$1(this,"destroy",(()=>{this.elements.thumb.container&&this.elements.thumb.container.remove(),this.elements.scrubbing.container&&this.elements.scrubbing.container.remove();})),_defineProperty$1(this,"showImageAtCurrentTime",(()=>{this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();const e=this.thumbnails[0].frames.findIndex((e=>this.seekTime>=e.startTime&&this.seekTime<=e.endTime)),t=e>=0;let i=0;this.mouseDown||this.toggleThumbContainer(t),t&&(this.thumbnails.forEach(((t,s)=>{this.loadedImages.includes(t.frames[e].text)&&(i=s);})),e!==this.showingThumb&&(this.showingThumb=e,this.loadImage(i)));})),_defineProperty$1(this,"loadImage",((e=0)=>{const t=this.showingThumb,i=this.thumbnails[e],{urlPrefix:s}=i,n=i.frames[t],r=i.frames[t].text,a=s+r;if(this.currentImageElement&&this.currentImageElement.dataset.filename===r)this.showImage(this.currentImageElement,n,e,t,r,!1),this.currentImageElement.dataset.index=t,this.removeOldImages(this.currentImageElement);else {this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);const i=new Image;i.src=a,i.dataset.index=t,i.dataset.filename=r,this.showingThumbFilename=r,this.player.debug.log(`Loading image: ${a}`),i.onload=()=>this.showImage(i,n,e,t,r,!0),this.loadingImage=i,this.removeOldImages(i);}})),_defineProperty$1(this,"showImage",((e,t,i,s,n,r=!0)=>{this.player.debug.log(`Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${r}`),this.setImageSizeAndOffset(e,t),r&&(this.currentImageContainer.appendChild(e),this.currentImageElement=e,this.loadedImages.includes(n)||this.loadedImages.push(n)),this.preloadNearby(s,!0).then(this.preloadNearby(s,!1)).then(this.getHigherQuality(i,e,t,n));})),_defineProperty$1(this,"removeOldImages",(e=>{Array.from(this.currentImageContainer.children).forEach((t=>{if("img"!==t.tagName.toLowerCase())return;const i=this.usingSprites?500:1e3;if(t.dataset.index!==e.dataset.index&&!t.dataset.deleting){t.dataset.deleting=!0;const{currentImageContainer:e}=this;setTimeout((()=>{e.removeChild(t),this.player.debug.log(`Removing thumb: ${t.dataset.filename}`);}),i);}}));})),_defineProperty$1(this,"preloadNearby",((e,t=!0)=>new Promise((i=>{setTimeout((()=>{const s=this.thumbnails[0].frames[e].text;if(this.showingThumbFilename===s){let n;n=t?this.thumbnails[0].frames.slice(e):this.thumbnails[0].frames.slice(0,e).reverse();let r=!1;n.forEach((e=>{const t=e.text;if(t!==s&&!this.loadedImages.includes(t)){r=!0,this.player.debug.log(`Preloading thumb filename: ${t}`);const{urlPrefix:e}=this.thumbnails[0],s=e+t,n=new Image;n.src=s,n.onload=()=>{this.player.debug.log(`Preloaded thumb filename: ${t}`),this.loadedImages.includes(t)||this.loadedImages.push(t),i();};}})),r||i();}}),300);})))),_defineProperty$1(this,"getHigherQuality",((e,t,i,s)=>{if(e<this.thumbnails.length-1){let n=t.naturalHeight;this.usingSprites&&(n=i.h),n<this.thumbContainerHeight&&setTimeout((()=>{this.showingThumbFilename===s&&(this.player.debug.log(`Showing higher quality thumb for: ${s}`),this.loadImage(e+1));}),300);}})),_defineProperty$1(this,"toggleThumbContainer",((e=!1,t=!1)=>{const i=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(i,e),!e&&t&&(this.showingThumb=null,this.showingThumbFilename=null);})),_defineProperty$1(this,"toggleScrubbingContainer",((e=!1)=>{const t=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(t,e),e||(this.showingThumb=null,this.showingThumbFilename=null);})),_defineProperty$1(this,"determineContainerAutoSizing",(()=>{(this.elements.thumb.imageContainer.clientHeight>20||this.elements.thumb.imageContainer.clientWidth>20)&&(this.sizeSpecifiedInCSS=!0);})),_defineProperty$1(this,"setThumbContainerSizeAndPos",(()=>{const{imageContainer:e}=this.elements.thumb;if(this.sizeSpecifiedInCSS){if(e.clientHeight>20&&e.clientWidth<20){const t=Math.floor(e.clientHeight*this.thumbAspectRatio);e.style.width=`${t}px`;}else if(e.clientHeight<20&&e.clientWidth>20){const t=Math.floor(e.clientWidth/this.thumbAspectRatio);e.style.height=`${t}px`;}}else {const t=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);e.style.height=`${this.thumbContainerHeight}px`,e.style.width=`${t}px`;}this.setThumbContainerPos();})),_defineProperty$1(this,"setThumbContainerPos",(()=>{const e=this.player.elements.progress.getBoundingClientRect(),t=this.player.elements.container.getBoundingClientRect(),{container:i}=this.elements.thumb,s=t.left-e.left+10,n=t.right-e.left-i.clientWidth-10,r=this.mousePosX-e.left-i.clientWidth/2,a=clamp(r,s,n);i.style.left=`${a}px`,i.style.setProperty("--preview-arrow-offset",r-a+"px");})),_defineProperty$1(this,"setScrubbingContainerSize",(()=>{const{width:e,height:t}=fitRatio(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight});this.elements.scrubbing.container.style.width=`${e}px`,this.elements.scrubbing.container.style.height=`${t}px`;})),_defineProperty$1(this,"setImageSizeAndOffset",((e,t)=>{if(!this.usingSprites)return;const i=this.thumbContainerHeight/t.h;e.style.height=e.naturalHeight*i+"px",e.style.width=e.naturalWidth*i+"px",e.style.left=`-${t.x*i}px`,e.style.top=`-${t.y*i}px`;})),this.player=e,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load();}get enabled(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}get currentImageContainer(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}get usingSprites(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}get thumbAspectRatio(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}get thumbContainerHeight(){if(this.mouseDown){const{height:e}=fitRatio(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight});return e}return this.sizeSpecifiedInCSS?this.elements.thumb.imageContainer.clientHeight:Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}get currentImageElement(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement}set currentImageElement(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e;}}const source={insertElements(e,t){is.string(t)?insertElement(e,this.media,{src:t}):is.array(t)&&t.forEach((t=>{insertElement(e,this.media,t);}));},change(e){getDeep(e,"sources.length")?(html5.cancelRequests.call(this),this.destroy.call(this,(()=>{this.options.quality=[],removeElement(this.media),this.media=null,is.element(this.elements.container)&&this.elements.container.removeAttribute("class");const{sources:t,type:i}=e,[{provider:s=providers.html5,src:n}]=t,r="html5"===s?i:"div",a="html5"===s?{}:{src:n};Object.assign(this,{provider:s,type:i,supported:support.check(i,s,this.config.playsinline),media:createElement(r,a)}),this.elements.container.appendChild(this.media),is.boolean(e.autoplay)&&(this.config.autoplay=e.autoplay),this.isHTML5&&(this.config.crossorigin&&this.media.setAttribute("crossorigin",""),this.config.autoplay&&this.media.setAttribute("autoplay",""),is.empty(e.poster)||(this.poster=e.poster),this.config.loop.active&&this.media.setAttribute("loop",""),this.config.muted&&this.media.setAttribute("muted",""),this.config.playsinline&&this.media.setAttribute("playsinline","")),ui.addStyleHook.call(this),this.isHTML5&&source.insertElements.call(this,"source",t),this.config.title=e.title,media.setup.call(this),this.isHTML5&&Object.keys(e).includes("tracks")&&source.insertElements.call(this,"track",e.tracks),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&ui.build.call(this),this.isHTML5&&this.media.load(),is.empty(e.previewThumbnails)||(Object.assign(this.config.previewThumbnails,e.previewThumbnails),this.previewThumbnails&&this.previewThumbnails.loaded&&(this.previewThumbnails.destroy(),this.previewThumbnails=null),this.config.previewThumbnails.enabled&&(this.previewThumbnails=new PreviewThumbnails(this))),this.fullscreen.update();}),!0)):this.debug.warn("Invalid source format");}};class Plyr{constructor(e,t){if(_defineProperty$1(this,"play",(()=>is.function(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then((()=>this.ads.play())).catch((()=>silencePromise(this.media.play()))),this.media.play()):null)),_defineProperty$1(this,"pause",(()=>this.playing&&is.function(this.media.pause)?this.media.pause():null)),_defineProperty$1(this,"togglePlay",(e=>(is.boolean(e)?e:!this.playing)?this.play():this.pause())),_defineProperty$1(this,"stop",(()=>{this.isHTML5?(this.pause(),this.restart()):is.function(this.media.stop)&&this.media.stop();})),_defineProperty$1(this,"restart",(()=>{this.currentTime=0;})),_defineProperty$1(this,"rewind",(e=>{this.currentTime-=is.number(e)?e:this.config.seekTime;})),_defineProperty$1(this,"forward",(e=>{this.currentTime+=is.number(e)?e:this.config.seekTime;})),_defineProperty$1(this,"increaseVolume",(e=>{const t=this.media.muted?0:this.volume;this.volume=t+(is.number(e)?e:0);})),_defineProperty$1(this,"decreaseVolume",(e=>{this.increaseVolume(-e);})),_defineProperty$1(this,"airplay",(()=>{support.airplay&&this.media.webkitShowPlaybackTargetPicker();})),_defineProperty$1(this,"toggleControls",(e=>{if(this.supported.ui&&!this.isAudio){const t=hasClass(this.elements.container,this.config.classNames.hideControls),i=void 0===e?void 0:!e,s=toggleClass(this.elements.container,this.config.classNames.hideControls,i);if(s&&is.array(this.config.controls)&&this.config.controls.includes("settings")&&!is.empty(this.config.settings)&&controls.toggleMenu.call(this,!1),s!==t){const e=s?"controlshidden":"controlsshown";triggerEvent.call(this,this.media,e);}return !s}return !1})),_defineProperty$1(this,"on",((e,t)=>{on.call(this,this.elements.container,e,t);})),_defineProperty$1(this,"once",((e,t)=>{once.call(this,this.elements.container,e,t);})),_defineProperty$1(this,"off",((e,t)=>{off(this.elements.container,e,t);})),_defineProperty$1(this,"destroy",((e,t=!1)=>{if(!this.ready)return;const i=()=>{document.body.style.overflow="",this.embed=null,t?(Object.keys(this.elements).length&&(removeElement(this.elements.buttons.play),removeElement(this.elements.captions),removeElement(this.elements.controls),removeElement(this.elements.wrapper),this.elements.buttons.play=null,this.elements.captions=null,this.elements.controls=null,this.elements.wrapper=null),is.function(e)&&e()):(unbindListeners.call(this),html5.cancelRequests.call(this),replaceElement(this.elements.original,this.elements.container),triggerEvent.call(this,this.elements.original,"destroyed",!0),is.function(e)&&e.call(this.elements.original),this.ready=!1,setTimeout((()=>{this.elements=null,this.media=null;}),200));};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(ui.toggleNativeControls.call(this,!0),i()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&is.function(this.embed.destroy)&&this.embed.destroy(),i()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(i),setTimeout(i,200));})),_defineProperty$1(this,"supports",(e=>support.mime.call(this,e))),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=support.touch,this.media=e,is.string(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||is.nodeList(this.media)||is.array(this.media))&&(this.media=this.media[0]),this.config=extend({},defaults,Plyr.defaults,t||{},(()=>{try{return JSON.parse(this.media.getAttribute("data-plyr-config"))}catch(e){return {}}})()),this.elements={container:null,fullscreen:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new Console(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",support),is.nullOrUndefined(this.media)||!is.element(this.media))return void this.debug.error("Setup failed: no suitable element passed");if(this.media.plyr)return void this.debug.warn("Target already setup");if(!this.config.enabled)return void this.debug.error("Setup failed: disabled by config");if(!support.check().api)return void this.debug.error("Setup failed: no support");const i=this.media.cloneNode(!0);i.autoplay=!1,this.elements.original=i;const s=this.media.tagName.toLowerCase();let n=null,r=null;switch(s){case"div":if(n=this.media.querySelector("iframe"),is.element(n)){if(r=parseUrl(n.getAttribute("src")),this.provider=getProviderByUrl(r.toString()),this.elements.container=this.media,this.media=n,this.elements.container.className="",r.search.length){const e=["1","true"];e.includes(r.searchParams.get("autoplay"))&&(this.config.autoplay=!0),e.includes(r.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=e.includes(r.searchParams.get("playsinline")),this.config.youtube.hl=r.searchParams.get("hl")):this.config.playsinline=!0;}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(is.empty(this.provider)||!Object.values(providers).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=types.video;break;case"video":case"audio":this.type=s,this.provider=providers.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=support.check(this.type,this.provider),this.supported.api?(this.eventListeners=[],this.listeners=new Listeners(this),this.storage=new Storage(this),this.media.plyr=this,is.element(this.elements.container)||(this.elements.container=createElement("div"),wrap(this.media,this.elements.container)),ui.migrateStyles.call(this),ui.addStyleHook.call(this),media.setup.call(this),this.config.debug&&on.call(this,this.elements.container,this.config.events.join(" "),(e=>{this.debug.log(`event: ${e.type}`);})),this.fullscreen=new Fullscreen(this),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&ui.build.call(this),this.listeners.container(),this.listeners.global(),this.config.ads.enabled&&(this.ads=new Ads(this)),this.isHTML5&&this.config.autoplay&&this.once("canplay",(()=>silencePromise(this.play()))),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new PreviewThumbnails(this))):this.debug.error("Setup failed: no support");}get isHTML5(){return this.provider===providers.html5}get isEmbed(){return this.isYouTube||this.isVimeo}get isYouTube(){return this.provider===providers.youtube}get isVimeo(){return this.provider===providers.vimeo}get isVideo(){return this.type===types.video}get isAudio(){return this.type===types.audio}get playing(){return Boolean(this.ready&&!this.paused&&!this.ended)}get paused(){return Boolean(this.media.paused)}get stopped(){return Boolean(this.paused&&0===this.currentTime)}get ended(){return Boolean(this.media.ended)}set currentTime(e){if(!this.duration)return;const t=is.number(e)&&e>0;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log(`Seeking to ${this.currentTime} seconds`);}get currentTime(){return Number(this.media.currentTime)}get buffered(){const{buffered:e}=this.media;return is.number(e)?e:e&&e.length&&this.duration>0?e.end(0)/this.duration:0}get seeking(){return Boolean(this.media.seeking)}get duration(){const e=parseFloat(this.config.duration),t=(this.media||{}).duration,i=is.number(t)&&t!==1/0?t:0;return e||i}set volume(e){let t=e;is.string(t)&&(t=Number(t)),is.number(t)||(t=this.storage.get("volume")),is.number(t)||({volume:t}=this.config),t>1&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!is.empty(e)&&this.muted&&t>0&&(this.muted=!1);}get volume(){return Number(this.media.volume)}set muted(e){let t=e;is.boolean(t)||(t=this.storage.get("muted")),is.boolean(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t;}get muted(){return Boolean(this.media.muted)}get hasAudio(){return !this.isHTML5||(!!this.isAudio||(Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)))}set speed(e){let t=null;is.number(e)&&(t=e),is.number(t)||(t=this.storage.get("speed")),is.number(t)||(t=this.config.speed.selected);const{minimumSpeed:i,maximumSpeed:s}=this;t=clamp(t,i,s),this.config.speed.selected=t,setTimeout((()=>{this.media&&(this.media.playbackRate=t);}),0);}get speed(){return Number(this.media.playbackRate)}get minimumSpeed(){return this.isYouTube?Math.min(...this.options.speed):this.isVimeo?.5:.0625}get maximumSpeed(){return this.isYouTube?Math.max(...this.options.speed):this.isVimeo?2:16}set quality(e){const t=this.config.quality,i=this.options.quality;if(!i.length)return;let s=[!is.empty(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(is.number),n=!0;if(!i.includes(s)){const e=closest(i,s);this.debug.warn(`Unsupported quality option: ${s}, using ${e} instead`),s=e,n=!1;}t.selected=s,this.media.quality=s,n&&this.storage.set({quality:s});}get quality(){return this.media.quality}set loop(e){const t=is.boolean(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t;}get loop(){return Boolean(this.media.loop)}set source(e){source.change.call(this,e);}get source(){return this.media.currentSrc}get download(){const{download:e}=this.config.urls;return is.url(e)?e:this.source}set download(e){is.url(e)&&(this.config.urls.download=e,controls.setDownloadUrl.call(this));}set poster(e){this.isVideo?ui.setPoster.call(this,e,!1).catch((()=>{})):this.debug.warn("Poster can only be set for video");}get poster(){return this.isVideo?this.media.getAttribute("poster")||this.media.getAttribute("data-poster"):null}get ratio(){if(!this.isVideo)return null;const e=reduceAspectRatio(getAspectRatio.call(this));return is.array(e)?e.join(":"):e}set ratio(e){this.isVideo?is.string(e)&&validateAspectRatio(e)?(this.config.ratio=reduceAspectRatio(e),setAspectRatio.call(this)):this.debug.error(`Invalid aspect ratio specified (${e})`):this.debug.warn("Aspect ratio can only be set for video");}set autoplay(e){this.config.autoplay=is.boolean(e)?e:this.config.autoplay;}get autoplay(){return Boolean(this.config.autoplay)}toggleCaptions(e){captions.toggle.call(this,e,!1);}set currentTrack(e){captions.set.call(this,e,!1),captions.setup.call(this);}get currentTrack(){const{toggled:e,currentTrack:t}=this.captions;return e?t:-1}set language(e){captions.setLanguage.call(this,e,!1);}get language(){return (captions.getCurrentTrack.call(this)||{}).language}set pip(e){if(!support.pip)return;const t=is.boolean(e)?e:!this.pip;is.function(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?pip.active:pip.inactive),is.function(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture());}get pip(){return support.pip?is.empty(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===pip.active:null}setPreviewThumbnails(e){this.previewThumbnails&&this.previewThumbnails.loaded&&(this.previewThumbnails.destroy(),this.previewThumbnails=null),Object.assign(this.config.previewThumbnails,e),this.config.previewThumbnails.enabled&&(this.previewThumbnails=new PreviewThumbnails(this));}static supported(e,t){return support.check(e,t)}static loadSprite(e,t){return loadSprite(e,t)}static setup(e,t={}){let i=null;return is.string(e)?i=Array.from(document.querySelectorAll(e)):is.nodeList(e)?i=Array.from(e):is.array(e)&&(i=e.filter(is.element)),is.empty(i)?null:i.map((e=>new Plyr(e,t)))}}Plyr.defaults=cloneDeep(defaults);

var plyrStyle = "@charset \"UTF-8\";@keyframes plyr-progress{to{background-position:25px 0;background-position:var(--plyr-progress-loading-size,25px) 0}}@keyframes plyr-popup{0%{opacity:.5;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes plyr-fade-in{0%{opacity:0}to{opacity:1}}.plyr{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;align-items:center;direction:ltr;display:flex;flex-direction:column;font-family:inherit;font-family:var(--plyr-font-family,inherit);font-variant-numeric:tabular-nums;font-weight:400;font-weight:var(--plyr-font-weight-regular,400);line-height:1.7;line-height:var(--plyr-line-height,1.7);max-width:100%;min-width:200px;position:relative;text-shadow:none;transition:box-shadow .3s ease;z-index:0}.plyr audio,.plyr iframe,.plyr video{display:block;height:100%;width:100%}.plyr button{font:inherit;line-height:inherit;width:auto}.plyr:focus{outline:0}.plyr--full-ui{box-sizing:border-box}.plyr--full-ui *,.plyr--full-ui :after,.plyr--full-ui :before{box-sizing:inherit}.plyr--full-ui a,.plyr--full-ui button,.plyr--full-ui input,.plyr--full-ui label{touch-action:manipulation}.plyr__badge{background:#4a5464;background:var(--plyr-badge-background,#4a5464);border-radius:2px;border-radius:var(--plyr-badge-border-radius,2px);color:#fff;color:var(--plyr-badge-text-color,#fff);font-size:9px;font-size:var(--plyr-font-size-badge,9px);line-height:1;padding:3px 4px}.plyr--full-ui ::-webkit-media-text-track-container{display:none}.plyr__captions{animation:plyr-fade-in .3s ease;bottom:0;display:none;font-size:13px;font-size:var(--plyr-font-size-small,13px);left:0;padding:10px;padding:var(--plyr-control-spacing,10px);position:absolute;text-align:center;transition:transform .4s ease-in-out;width:100%}.plyr__captions span:empty{display:none}@media (min-width:480px){.plyr__captions{font-size:15px;font-size:var(--plyr-font-size-base,15px);padding:20px;padding:calc(var(--plyr-control-spacing, 10px)*2)}}@media (min-width:768px){.plyr__captions{font-size:18px;font-size:var(--plyr-font-size-large,18px)}}.plyr--captions-active .plyr__captions{display:block}.plyr:not(.plyr--hide-controls) .plyr__controls:not(:empty)~.plyr__captions{transform:translateY(-40px);transform:translateY(calc(var(--plyr-control-spacing, 10px)*-4))}.plyr__caption{background:#000c;background:var(--plyr-captions-background,#000c);border-radius:2px;-webkit-box-decoration-break:clone;box-decoration-break:clone;color:#fff;color:var(--plyr-captions-text-color,#fff);line-height:185%;padding:.2em .5em;white-space:pre-wrap}.plyr__caption div{display:inline}.plyr__control{background:#0000;border:0;border-radius:4px;border-radius:var(--plyr-control-radius,4px);color:inherit;cursor:pointer;flex-shrink:0;overflow:visible;padding:7px;padding:calc(var(--plyr-control-spacing, 10px)*.7);position:relative;transition:all .3s ease}.plyr__control svg{fill:currentColor;display:block;height:18px;height:var(--plyr-control-icon-size,18px);pointer-events:none;width:18px;width:var(--plyr-control-icon-size,18px)}.plyr__control:focus{outline:0}.plyr__control:focus-visible{outline:2px dashed #00b2ff;outline:2px dashed var(--plyr-focus-visible-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));outline-offset:2px}a.plyr__control{text-decoration:none}.plyr__control.plyr__control--pressed .icon--not-pressed,.plyr__control.plyr__control--pressed .label--not-pressed,.plyr__control:not(.plyr__control--pressed) .icon--pressed,.plyr__control:not(.plyr__control--pressed) .label--pressed,a.plyr__control:after,a.plyr__control:before{display:none}.plyr--full-ui ::-webkit-media-controls{display:none}.plyr__controls{align-items:center;display:flex;justify-content:flex-end;text-align:center}.plyr__controls .plyr__progress__container{flex:1;min-width:0}.plyr__controls .plyr__controls__item{margin-left:2.5px;margin-left:calc(var(--plyr-control-spacing, 10px)/4)}.plyr__controls .plyr__controls__item:first-child{margin-left:0;margin-right:auto}.plyr__controls .plyr__controls__item.plyr__progress__container{padding-left:2.5px;padding-left:calc(var(--plyr-control-spacing, 10px)/4)}.plyr__controls .plyr__controls__item.plyr__time{padding:0 5px;padding:0 calc(var(--plyr-control-spacing, 10px)/2)}.plyr__controls .plyr__controls__item.plyr__progress__container:first-child,.plyr__controls .plyr__controls__item.plyr__time+.plyr__time,.plyr__controls .plyr__controls__item.plyr__time:first-child{padding-left:0}.plyr [data-plyr=airplay],.plyr [data-plyr=captions],.plyr [data-plyr=fullscreen],.plyr [data-plyr=pip],.plyr__controls:empty{display:none}.plyr--airplay-supported [data-plyr=airplay],.plyr--captions-enabled [data-plyr=captions],.plyr--fullscreen-enabled [data-plyr=fullscreen],.plyr--pip-supported [data-plyr=pip]{display:inline-block}.plyr__menu{display:flex;position:relative}.plyr__menu .plyr__control svg{transition:transform .3s ease}.plyr__menu .plyr__control[aria-expanded=true] svg{transform:rotate(90deg)}.plyr__menu .plyr__control[aria-expanded=true] .plyr__tooltip{display:none}.plyr__menu__container{animation:plyr-popup .2s ease;background:#ffffffe6;background:var(--plyr-menu-background,#ffffffe6);border-radius:8px;border-radius:var(--plyr-menu-radius,8px);bottom:100%;box-shadow:0 1px 2px #00000026;box-shadow:var(--plyr-menu-shadow,0 1px 2px #00000026);color:#4a5464;color:var(--plyr-menu-color,#4a5464);font-size:15px;font-size:var(--plyr-font-size-base,15px);margin-bottom:10px;position:absolute;right:-3px;text-align:left;white-space:nowrap;z-index:3}.plyr__menu__container>div{overflow:hidden;transition:height .35s cubic-bezier(.4,0,.2,1),width .35s cubic-bezier(.4,0,.2,1)}.plyr__menu__container:after{border:4px solid #0000;border-top-color:#ffffffe6;border:var(--plyr-menu-arrow-size,4px) solid #0000;border-top-color:var(--plyr-menu-background,#ffffffe6);content:\"\";height:0;position:absolute;right:14px;right:calc(var(--plyr-control-icon-size, 18px)/2 + var(--plyr-control-spacing, 10px)*.7 - var(--plyr-menu-arrow-size, 4px)/2);top:100%;width:0}.plyr__menu__container [role=menu]{padding:7px;padding:calc(var(--plyr-control-spacing, 10px)*.7)}.plyr__menu__container [role=menuitem],.plyr__menu__container [role=menuitemradio]{margin-top:2px}.plyr__menu__container [role=menuitem]:first-child,.plyr__menu__container [role=menuitemradio]:first-child{margin-top:0}.plyr__menu__container .plyr__control{align-items:center;color:#4a5464;color:var(--plyr-menu-color,#4a5464);display:flex;font-size:13px;font-size:var(--plyr-font-size-menu,var(--plyr-font-size-small,13px));padding:4.66667px 10.5px;padding:calc(var(--plyr-control-spacing, 10px)*.7/1.5) calc(var(--plyr-control-spacing, 10px)*.7*1.5);-webkit-user-select:none;user-select:none;width:100%}.plyr__menu__container .plyr__control>span{align-items:inherit;display:flex;width:100%}.plyr__menu__container .plyr__control:after{border:4px solid #0000;border:var(--plyr-menu-item-arrow-size,4px) solid #0000;content:\"\";position:absolute;top:50%;transform:translateY(-50%)}.plyr__menu__container .plyr__control--forward{padding-right:28px;padding-right:calc(var(--plyr-control-spacing, 10px)*.7*4)}.plyr__menu__container .plyr__control--forward:after{border-left-color:#728197;border-left-color:var(--plyr-menu-arrow-color,#728197);right:6.5px;right:calc(var(--plyr-control-spacing, 10px)*.7*1.5 - var(--plyr-menu-item-arrow-size, 4px))}.plyr__menu__container .plyr__control--forward:focus-visible:after,.plyr__menu__container .plyr__control--forward:hover:after{border-left-color:initial}.plyr__menu__container .plyr__control--back{font-weight:400;font-weight:var(--plyr-font-weight-regular,400);margin:7px;margin:calc(var(--plyr-control-spacing, 10px)*.7);margin-bottom:3.5px;margin-bottom:calc(var(--plyr-control-spacing, 10px)*.7/2);padding-left:28px;padding-left:calc(var(--plyr-control-spacing, 10px)*.7*4);position:relative;width:calc(100% - 14px);width:calc(100% - var(--plyr-control-spacing, 10px)*.7*2)}.plyr__menu__container .plyr__control--back:after{border-right-color:#728197;border-right-color:var(--plyr-menu-arrow-color,#728197);left:6.5px;left:calc(var(--plyr-control-spacing, 10px)*.7*1.5 - var(--plyr-menu-item-arrow-size, 4px))}.plyr__menu__container .plyr__control--back:before{background:#dcdfe5;background:var(--plyr-menu-back-border-color,#dcdfe5);box-shadow:0 1px 0 #fff;box-shadow:0 1px 0 var(--plyr-menu-back-border-shadow-color,#fff);content:\"\";height:1px;left:0;margin-top:3.5px;margin-top:calc(var(--plyr-control-spacing, 10px)*.7/2);overflow:hidden;position:absolute;right:0;top:100%}.plyr__menu__container .plyr__control--back:focus-visible:after,.plyr__menu__container .plyr__control--back:hover:after{border-right-color:initial}.plyr__menu__container .plyr__control[role=menuitemradio]{padding-left:7px;padding-left:calc(var(--plyr-control-spacing, 10px)*.7)}.plyr__menu__container .plyr__control[role=menuitemradio]:after,.plyr__menu__container .plyr__control[role=menuitemradio]:before{border-radius:100%}.plyr__menu__container .plyr__control[role=menuitemradio]:before{background:#0000001a;content:\"\";display:block;flex-shrink:0;height:16px;margin-right:10px;margin-right:var(--plyr-control-spacing,10px);transition:all .3s ease;width:16px}.plyr__menu__container .plyr__control[role=menuitemradio]:after{background:#fff;border:0;height:6px;left:12px;opacity:0;top:50%;transform:translateY(-50%) scale(0);transition:transform .3s ease,opacity .3s ease;width:6px}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]:before{background:#00b2ff;background:var(--plyr-control-toggle-checked-background,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)))}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]:after{opacity:1;transform:translateY(-50%) scale(1)}.plyr__menu__container .plyr__control[role=menuitemradio]:focus-visible:before,.plyr__menu__container .plyr__control[role=menuitemradio]:hover:before{background:#23282f1a}.plyr__menu__container .plyr__menu__value{align-items:center;display:flex;margin-left:auto;margin-right:-5px;margin-right:calc(var(--plyr-control-spacing, 10px)*.7*-1 - -2px);overflow:hidden;padding-left:24.5px;padding-left:calc(var(--plyr-control-spacing, 10px)*.7*3.5);pointer-events:none}.plyr--full-ui input[type=range]{-webkit-appearance:none;appearance:none;background:#0000;border:0;border-radius:26px;border-radius:calc(var(--plyr-range-thumb-height, 13px)*2);color:#00b2ff;color:var(--plyr-range-fill-background,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));display:block;height:19px;height:calc(var(--plyr-range-thumb-active-shadow-width, 3px)*2 + var(--plyr-range-thumb-height, 13px));margin:0;min-width:0;padding:0;transition:box-shadow .3s ease;width:100%}.plyr--full-ui input[type=range]::-webkit-slider-runnable-track{background:#0000;background-image:linear-gradient(90deg,currentColor 0,#0000 0);background-image:linear-gradient(to right,currentColor var(--value,0),#0000 var(--value,0));border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height, 5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-webkit-transition:box-shadow .3s ease;transition:box-shadow .3s ease;-webkit-user-select:none;user-select:none}.plyr--full-ui input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33);height:13px;height:var(--plyr-range-thumb-height,13px);margin-top:-4px;margin-top:calc((var(--plyr-range-thumb-height, 13px) - var(--plyr-range-track-height, 5px))/2*-1);position:relative;-webkit-transition:all .2s ease;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px)}.plyr--full-ui input[type=range]::-moz-range-track{background:#0000;border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height, 5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-moz-transition:box-shadow .3s ease;transition:box-shadow .3s ease;user-select:none}.plyr--full-ui input[type=range]::-moz-range-thumb{background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33);height:13px;height:var(--plyr-range-thumb-height,13px);position:relative;-moz-transition:all .2s ease;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px)}.plyr--full-ui input[type=range]::-moz-range-progress{background:currentColor;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height, 5px)/2);height:5px;height:var(--plyr-range-track-height,5px)}.plyr--full-ui input[type=range]::-ms-track{color:#0000}.plyr--full-ui input[type=range]::-ms-fill-upper,.plyr--full-ui input[type=range]::-ms-track{background:#0000;border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height, 5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-ms-transition:box-shadow .3s ease;transition:box-shadow .3s ease;user-select:none}.plyr--full-ui input[type=range]::-ms-fill-lower{background:#0000;background:currentColor;border:0;border-radius:2.5px;border-radius:calc(var(--plyr-range-track-height, 5px)/2);height:5px;height:var(--plyr-range-track-height,5px);-ms-transition:box-shadow .3s ease;transition:box-shadow .3s ease;user-select:none}.plyr--full-ui input[type=range]::-ms-thumb{background:#fff;background:var(--plyr-range-thumb-background,#fff);border:0;border-radius:100%;box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33);height:13px;height:var(--plyr-range-thumb-height,13px);margin-top:0;position:relative;-ms-transition:all .2s ease;transition:all .2s ease;width:13px;width:var(--plyr-range-thumb-height,13px)}.plyr--full-ui input[type=range]::-ms-tooltip{display:none}.plyr--full-ui input[type=range]::-moz-focus-outer{border:0}.plyr--full-ui input[type=range]:focus{outline:0}.plyr--full-ui input[type=range]:focus-visible::-webkit-slider-runnable-track{outline:2px dashed #00b2ff;outline:2px dashed var(--plyr-focus-visible-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));outline-offset:2px}.plyr--full-ui input[type=range]:focus-visible::-moz-range-track{outline:2px dashed #00b2ff;outline:2px dashed var(--plyr-focus-visible-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));outline-offset:2px}.plyr--full-ui input[type=range]:focus-visible::-ms-track{outline:2px dashed #00b2ff;outline:2px dashed var(--plyr-focus-visible-color,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));outline-offset:2px}.plyr__poster{background-color:#000;background-color:var(--plyr-video-background,var(--plyr-video-background,#000));background-position:50% 50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;opacity:0;position:absolute;top:0;transition:opacity .2s ease;width:100%;z-index:1}.plyr--stopped.plyr__poster-enabled .plyr__poster{opacity:1}.plyr--youtube.plyr--paused.plyr__poster-enabled:not(.plyr--stopped) .plyr__poster{display:none}.plyr__time{font-size:13px;font-size:var(--plyr-font-size-time,var(--plyr-font-size-small,13px))}.plyr__time+.plyr__time:before{content:\"⁄\";margin-right:10px;margin-right:var(--plyr-control-spacing,10px)}@media (max-width:767px){.plyr__time+.plyr__time{display:none}}.plyr__tooltip{background:#fff;background:var(--plyr-tooltip-background,#fff);border-radius:5px;border-radius:var(--plyr-tooltip-radius,5px);bottom:100%;box-shadow:0 1px 2px #00000026;box-shadow:var(--plyr-tooltip-shadow,0 1px 2px #00000026);color:#4a5464;color:var(--plyr-tooltip-color,#4a5464);font-size:13px;font-size:var(--plyr-font-size-small,13px);font-weight:400;font-weight:var(--plyr-font-weight-regular,400);left:50%;line-height:1.3;margin-bottom:10px;margin-bottom:calc(var(--plyr-control-spacing, 10px)/2*2);opacity:0;padding:5px 7.5px;padding:calc(var(--plyr-control-spacing, 10px)/2) calc(var(--plyr-control-spacing, 10px)/2*1.5);pointer-events:none;position:absolute;transform:translate(-50%,10px) scale(.8);transform-origin:50% 100%;transition:transform .2s ease .1s,opacity .2s ease .1s;white-space:nowrap;z-index:2}.plyr__tooltip:before{border-left:4px solid #0000;border-left:var(--plyr-tooltip-arrow-size,4px) solid #0000;border-right:4px solid #0000;border-right:var(--plyr-tooltip-arrow-size,4px) solid #0000;border-top:4px solid #fff;border-top:var(--plyr-tooltip-arrow-size,4px) solid var(--plyr-tooltip-background,#fff);bottom:-4px;bottom:calc(var(--plyr-tooltip-arrow-size, 4px)*-1);content:\"\";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr .plyr__control:focus-visible .plyr__tooltip,.plyr .plyr__control:hover .plyr__tooltip,.plyr__tooltip--visible{opacity:1;transform:translate(-50%) scale(1)}.plyr .plyr__control:hover .plyr__tooltip{z-index:3}.plyr__controls>.plyr__control:first-child .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip{left:0;transform:translateY(10px) scale(.8);transform-origin:0 100%}.plyr__controls>.plyr__control:first-child .plyr__tooltip:before,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip:before{left:16px;left:calc(var(--plyr-control-icon-size, 18px)/2 + var(--plyr-control-spacing, 10px)*.7)}.plyr__controls>.plyr__control:last-child .plyr__tooltip{left:auto;right:0;transform:translateY(10px) scale(.8);transform-origin:100% 100%}.plyr__controls>.plyr__control:last-child .plyr__tooltip:before{left:auto;right:16px;right:calc(var(--plyr-control-icon-size, 18px)/2 + var(--plyr-control-spacing, 10px)*.7);transform:translateX(50%)}.plyr__controls>.plyr__control:first-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control:focus-visible .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control:hover .plyr__tooltip,.plyr__controls>.plyr__control:first-child:focus-visible .plyr__tooltip,.plyr__controls>.plyr__control:first-child:hover .plyr__tooltip,.plyr__controls>.plyr__control:last-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:last-child:focus-visible .plyr__tooltip,.plyr__controls>.plyr__control:last-child:hover .plyr__tooltip{transform:translate(0) scale(1)}.plyr__progress{left:6.5px;left:calc(var(--plyr-range-thumb-height, 13px)*.5);margin-right:13px;margin-right:var(--plyr-range-thumb-height,13px);position:relative}.plyr__progress input[type=range],.plyr__progress__buffer{margin-left:-6.5px;margin-left:calc(var(--plyr-range-thumb-height, 13px)*-.5);margin-right:-6.5px;margin-right:calc(var(--plyr-range-thumb-height, 13px)*-.5);width:calc(100% + 13px);width:calc(100% + var(--plyr-range-thumb-height, 13px))}.plyr__progress input[type=range]{position:relative;z-index:2}.plyr__progress .plyr__tooltip{left:0;max-width:120px;overflow-wrap:break-word}.plyr__progress__buffer{-webkit-appearance:none;background:#0000;border:0;border-radius:100px;height:5px;height:var(--plyr-range-track-height,5px);left:0;margin-top:-2.5px;margin-top:calc((var(--plyr-range-track-height, 5px)/2)*-1);padding:0;position:absolute;top:50%}.plyr__progress__buffer::-webkit-progress-bar{background:#0000}.plyr__progress__buffer::-webkit-progress-value{background:currentColor;border-radius:100px;min-width:5px;min-width:var(--plyr-range-track-height,5px);-webkit-transition:width .2s ease;transition:width .2s ease}.plyr__progress__buffer::-moz-progress-bar{background:currentColor;border-radius:100px;min-width:5px;min-width:var(--plyr-range-track-height,5px);-moz-transition:width .2s ease;transition:width .2s ease}.plyr__progress__buffer::-ms-fill{border-radius:100px;-ms-transition:width .2s ease;transition:width .2s ease}.plyr--loading .plyr__progress__buffer{animation:plyr-progress 1s linear infinite;background-image:linear-gradient(-45deg,#23282f99 25%,#0000 0,#0000 50%,#23282f99 0,#23282f99 75%,#0000 0,#0000);background-image:linear-gradient(-45deg,var(--plyr-progress-loading-background,#23282f99) 25%,#0000 25%,#0000 50%,var(--plyr-progress-loading-background,#23282f99) 50%,var(--plyr-progress-loading-background,#23282f99) 75%,#0000 75%,#0000);background-repeat:repeat-x;background-size:25px 25px;background-size:var(--plyr-progress-loading-size,25px) var(--plyr-progress-loading-size,25px);color:#0000}.plyr--video.plyr--loading .plyr__progress__buffer{background-color:#ffffff40;background-color:var(--plyr-video-progress-buffered-background,#ffffff40)}.plyr--audio.plyr--loading .plyr__progress__buffer{background-color:#c1c8d199;background-color:var(--plyr-audio-progress-buffered-background,#c1c8d199)}.plyr__progress__marker{background-color:#fff;background-color:var(--plyr-progress-marker-background,#fff);border-radius:1px;height:5px;height:var(--plyr-range-track-height,5px);position:absolute;top:50%;transform:translate(-50%,-50%);width:3px;width:var(--plyr-progress-marker-width,3px);z-index:3}.plyr__volume{align-items:center;display:flex;position:relative}.plyr__volume input[type=range]{margin-left:5px;margin-left:calc(var(--plyr-control-spacing, 10px)/2);margin-right:5px;margin-right:calc(var(--plyr-control-spacing, 10px)/2);max-width:90px;min-width:60px;position:relative;z-index:2}.plyr--audio{display:block}.plyr--audio .plyr__controls{background:#fff;background:var(--plyr-audio-controls-background,#fff);border-radius:inherit;color:#4a5464;color:var(--plyr-audio-control-color,#4a5464);padding:10px;padding:var(--plyr-control-spacing,10px)}.plyr--audio .plyr__control:focus-visible,.plyr--audio .plyr__control:hover,.plyr--audio .plyr__control[aria-expanded=true]{background:#00b2ff;background:var(--plyr-audio-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));color:#fff;color:var(--plyr-audio-control-color-hover,#fff)}.plyr--full-ui.plyr--audio input[type=range]::-webkit-slider-runnable-track{background-color:#c1c8d199;background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,#c1c8d199))}.plyr--full-ui.plyr--audio input[type=range]::-moz-range-track{background-color:#c1c8d199;background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,#c1c8d199))}.plyr--full-ui.plyr--audio input[type=range]::-ms-track{background-color:#c1c8d199;background-color:var(--plyr-audio-range-track-background,var(--plyr-audio-progress-buffered-background,#c1c8d199))}.plyr--full-ui.plyr--audio input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #23282f1a;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#23282f1a)}.plyr--full-ui.plyr--audio input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #23282f1a;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#23282f1a)}.plyr--full-ui.plyr--audio input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #23282f1a;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#23282f1a)}.plyr--audio .plyr__progress__buffer{color:#c1c8d199;color:var(--plyr-audio-progress-buffered-background,#c1c8d199)}.plyr--video{overflow:hidden}.plyr--video.plyr--menu-open{overflow:visible}.plyr__video-wrapper{background:#000;background:var(--plyr-video-background,var(--plyr-video-background,#000));border-radius:inherit;height:100%;margin:auto;overflow:hidden;position:relative;width:100%}.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{aspect-ratio:16/9}@supports not (aspect-ratio:16/9){.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{height:0;padding-bottom:56.25%;position:relative}}.plyr__video-embed iframe,.plyr__video-wrapper--fixed-ratio video{border:0;height:100%;left:0;position:absolute;top:0;width:100%}.plyr--full-ui .plyr__video-embed>.plyr__video-embed__container{padding-bottom:240%;position:relative;transform:translateY(-38.28125%)}.plyr--video .plyr__controls{background:linear-gradient(#0000,#000000bf);background:var(--plyr-video-controls-background,linear-gradient(#0000,#000000bf));border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0;color:#fff;color:var(--plyr-video-control-color,#fff);left:0;padding:5px;padding:calc(var(--plyr-control-spacing, 10px)/2);padding-top:20px;padding-top:calc(var(--plyr-control-spacing, 10px)*2);position:absolute;right:0;transition:opacity .4s ease-in-out,transform .4s ease-in-out;z-index:3}@media (min-width:480px){.plyr--video .plyr__controls{padding:10px;padding:var(--plyr-control-spacing,10px);padding-top:35px;padding-top:calc(var(--plyr-control-spacing, 10px)*3.5)}}.plyr--video.plyr--hide-controls .plyr__controls{opacity:0;pointer-events:none;transform:translateY(100%)}.plyr--video .plyr__control:focus-visible,.plyr--video .plyr__control:hover,.plyr--video .plyr__control[aria-expanded=true]{background:#00b2ff;background:var(--plyr-video-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));color:#fff;color:var(--plyr-video-control-color-hover,#fff)}.plyr__control--overlaid{background:#00b2ff;background:var(--plyr-video-control-background-hover,var(--plyr-color-main,var(--plyr-color-main,#00b2ff)));border:0;border-radius:100%;color:#fff;color:var(--plyr-video-control-color,#fff);display:none;left:50%;opacity:.9;padding:15px;padding:calc(var(--plyr-control-spacing, 10px)*1.5);position:absolute;top:50%;transform:translate(-50%,-50%);transition:.3s;z-index:2}.plyr__control--overlaid svg{left:2px;position:relative}.plyr__control--overlaid:focus,.plyr__control--overlaid:hover{opacity:1}.plyr--playing .plyr__control--overlaid{opacity:0;visibility:hidden}.plyr--full-ui.plyr--video .plyr__control--overlaid{display:block}.plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{background-color:#ffffff40;background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,#ffffff40))}.plyr--full-ui.plyr--video input[type=range]::-moz-range-track{background-color:#ffffff40;background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,#ffffff40))}.plyr--full-ui.plyr--video input[type=range]::-ms-track{background-color:#ffffff40;background-color:var(--plyr-video-range-track-background,var(--plyr-video-progress-buffered-background,#ffffff40))}.plyr--full-ui.plyr--video input[type=range]:active::-webkit-slider-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #ffffff80;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#ffffff80)}.plyr--full-ui.plyr--video input[type=range]:active::-moz-range-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #ffffff80;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#ffffff80)}.plyr--full-ui.plyr--video input[type=range]:active::-ms-thumb{box-shadow:0 1px 1px #23282f26,0 0 0 1px #23282f33,0 0 0 3px #ffffff80;box-shadow:var(--plyr-range-thumb-shadow,0 1px 1px #23282f26,0 0 0 1px #23282f33),0 0 0 var(--plyr-range-thumb-active-shadow-width,3px) var(--plyr-audio-range-thumb-active-shadow-color,#ffffff80)}.plyr--video .plyr__progress__buffer{color:#ffffff40;color:var(--plyr-video-progress-buffered-background,#ffffff40)}.plyr:fullscreen{background:#000;border-radius:0!important;height:100%;margin:0;width:100%}.plyr:fullscreen video{height:100%}.plyr:fullscreen .plyr__control .icon--exit-fullscreen{display:block}.plyr:fullscreen .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr:fullscreen.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr:fullscreen .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}}.plyr--fullscreen-fallback{background:#000;border-radius:0!important;bottom:0;height:100%;left:0;margin:0;position:fixed;right:0;top:0;width:100%;z-index:10000000}.plyr--fullscreen-fallback video{height:100%}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen{display:block}.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen+svg{display:none}.plyr--fullscreen-fallback.plyr--hide-controls{cursor:none}@media (min-width:1024px){.plyr--fullscreen-fallback .plyr__captions{font-size:21px;font-size:var(--plyr-font-size-xlarge,21px)}}.plyr__ads{border-radius:inherit;bottom:0;cursor:pointer;left:0;overflow:hidden;position:absolute;right:0;top:0;z-index:-1}.plyr__ads>div,.plyr__ads>div iframe{height:100%;position:absolute;width:100%}.plyr__ads:after{background:#23282f;border-radius:2px;bottom:10px;bottom:var(--plyr-control-spacing,10px);color:#fff;content:attr(data-badge-text);font-size:11px;padding:2px 6px;pointer-events:none;position:absolute;right:10px;right:var(--plyr-control-spacing,10px);z-index:3}.plyr__ads:empty:after{display:none}.plyr__cues{background:currentColor;display:block;height:5px;height:var(--plyr-range-track-height,5px);left:0;opacity:.8;position:absolute;top:50%;transform:translateY(-50%);width:3px;z-index:3}.plyr__preview-thumb{background-color:#fff;background-color:var(--plyr-tooltip-background,#fff);border-radius:8px;border-radius:var(--plyr-menu-radius,8px);bottom:100%;box-shadow:0 1px 2px #00000026;box-shadow:var(--plyr-tooltip-shadow,0 1px 2px #00000026);margin-bottom:10px;margin-bottom:calc(var(--plyr-control-spacing, 10px)/2*2);opacity:0;padding:3px;pointer-events:none;position:absolute;transform:translateY(10px) scale(.8);transform-origin:50% 100%;transition:transform .2s ease .1s,opacity .2s ease .1s;z-index:2}.plyr__preview-thumb--is-shown{opacity:1;transform:translate(0) scale(1)}.plyr__preview-thumb:before{border-left:4px solid #0000;border-left:var(--plyr-tooltip-arrow-size,4px) solid #0000;border-right:4px solid #0000;border-right:var(--plyr-tooltip-arrow-size,4px) solid #0000;border-top:4px solid #fff;border-top:var(--plyr-tooltip-arrow-size,4px) solid var(--plyr-tooltip-background,#fff);bottom:-4px;bottom:calc(var(--plyr-tooltip-arrow-size, 4px)*-1);content:\"\";height:0;left:calc(50% + var(--preview-arrow-offset));position:absolute;transform:translateX(-50%);width:0;z-index:2}.plyr__preview-thumb__image-container{background:#c1c8d1;border-radius:7px;border-radius:calc(var(--plyr-menu-radius, 8px) - 1px);overflow:hidden;position:relative;z-index:0}.plyr__preview-thumb__image-container img,.plyr__preview-thumb__image-container:after{height:100%;left:0;position:absolute;top:0;width:100%}.plyr__preview-thumb__image-container:after{border-radius:inherit;box-shadow:inset 0 0 0 1px #00000026;content:\"\";pointer-events:none}.plyr__preview-thumb__image-container img{max-height:none;max-width:none}.plyr__preview-thumb__time-container{background:linear-gradient(#0000,#000000bf);background:var(--plyr-video-controls-background,linear-gradient(#0000,#000000bf));border-bottom-left-radius:7px;border-bottom-left-radius:calc(var(--plyr-menu-radius, 8px) - 1px);border-bottom-right-radius:7px;border-bottom-right-radius:calc(var(--plyr-menu-radius, 8px) - 1px);bottom:0;left:0;line-height:1.1;padding:20px 6px 6px;position:absolute;right:0;z-index:3}.plyr__preview-thumb__time-container span{color:#fff;font-size:13px;font-size:var(--plyr-font-size-time,var(--plyr-font-size-small,13px))}.plyr__preview-scrubbing{bottom:0;filter:blur(1px);height:100%;left:0;margin:auto;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s ease;width:100%;z-index:1}.plyr__preview-scrubbing--is-shown{opacity:1}.plyr__preview-scrubbing img{height:100%;left:0;max-height:none;max-width:none;object-fit:contain;position:absolute;top:0;width:100%}.plyr--no-transition{transition:none!important}.plyr__sr-only{clip:rect(1px,1px,1px,1px);border:0!important;height:1px!important;overflow:hidden;padding:0!important;position:absolute!important;width:1px!important}.plyr [hidden]{display:none!important}";

/*
 * A javascript-based implementation of Spatial Navigation.
 *
 * Copyright (c) 2022 Luke Chang.
 * https://github.com/luke-chang/js-spatial-navigation
 *
 * Licensed under the MPL 2.0.
 */
(function($) {

  /************************/
  /* Global Configuration */
  /************************/
  // Note: an <extSelector> can be one of following types:
  // - a valid selector string for "querySelectorAll" or jQuery (if it exists)
  // - a NodeList or an array containing DOM elements
  // - a single DOM element
  // - a jQuery object
  // - a string "@<sectionId>" to indicate the specified section
  // - a string "@" to indicate the default section
  var GlobalConfig = {
    selector: '',           // can be a valid <extSelector> except "@" syntax.
    straightOnly: false,
    straightOverlapThreshold: 0.5,
    rememberSource: false,
    disabled: false,
    defaultElement: '',     // <extSelector> except "@" syntax.
    enterTo: '',            // '', 'last-focused', 'default-element'
    leaveFor: null,         // {left: <extSelector>, right: <extSelector>,
                            //  up: <extSelector>, down: <extSelector>}
    restrict: 'self-first', // 'self-first', 'self-only', 'none'
    tabIndexIgnoreList:
      'a, input, select, textarea, button, iframe, [contentEditable=true]',
    navigableFilter: null
  };

  /*********************/
  /* Constant Variable */
  /*********************/
  var KEYMAPPING = {
    '37': 'left',
    '38': 'up',
    '39': 'right',
    '40': 'down'
  };

  var REVERSE = {
    'left': 'right',
    'up': 'down',
    'right': 'left',
    'down': 'up'
  };

  var EVENT_PREFIX = 'sn:';
  var ID_POOL_PREFIX = 'section-';

  /********************/
  /* Private Variable */
  /********************/
  var _idPool = 0;
  var _ready = false;
  var _pause = false;
  var _sections = {};
  var _sectionCount = 0;
  var _defaultSectionId = '';
  var _lastSectionId = '';
  var _duringFocusChange = false;

  /************/
  /* Polyfill */
  /************/
  var elementMatchesSelector =
    Element.prototype.matches ||
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    function (selector) {
      var matchedNodes =
        (this.parentNode || this.document).querySelectorAll(selector);
      return [].slice.call(matchedNodes).indexOf(this) >= 0;
    };

  /*****************/
  /* Core Function */
  /*****************/
  function getRect(elem) {
    var cr = elem.getBoundingClientRect();
    var rect = {
        left: cr.left,
        top: cr.top,
        right: cr.right,
        bottom: cr.bottom,
        width: cr.width,
        height: cr.height
    };
    rect.element = elem;
    rect.center = {
      x: rect.left + Math.floor(rect.width / 2),
      y: rect.top + Math.floor(rect.height / 2)
    };
    rect.center.left = rect.center.right = rect.center.x;
    rect.center.top = rect.center.bottom = rect.center.y;
    return rect;
  }

  function partition(rects, targetRect, straightOverlapThreshold) {
    var groups = [[], [], [], [], [], [], [], [], []];

    for (var i = 0; i < rects.length; i++) {
      var rect = rects[i];
      var center = rect.center;
      var x, y, groupId;

      if (center.x < targetRect.left) {
        x = 0;
      } else if (center.x <= targetRect.right) {
        x = 1;
      } else {
        x = 2;
      }

      if (center.y < targetRect.top) {
        y = 0;
      } else if (center.y <= targetRect.bottom) {
        y = 1;
      } else {
        y = 2;
      }

      groupId = y * 3 + x;
      groups[groupId].push(rect);

      if ([0, 2, 6, 8].indexOf(groupId) !== -1) {
        var threshold = straightOverlapThreshold;

        if (rect.left <= targetRect.right - targetRect.width * threshold) {
          if (groupId === 2) {
            groups[1].push(rect);
          } else if (groupId === 8) {
            groups[7].push(rect);
          }
        }

        if (rect.right >= targetRect.left + targetRect.width * threshold) {
          if (groupId === 0) {
            groups[1].push(rect);
          } else if (groupId === 6) {
            groups[7].push(rect);
          }
        }

        if (rect.top <= targetRect.bottom - targetRect.height * threshold) {
          if (groupId === 6) {
            groups[3].push(rect);
          } else if (groupId === 8) {
            groups[5].push(rect);
          }
        }

        if (rect.bottom >= targetRect.top + targetRect.height * threshold) {
          if (groupId === 0) {
            groups[3].push(rect);
          } else if (groupId === 2) {
            groups[5].push(rect);
          }
        }
      }
    }

    return groups;
  }

  function generateDistanceFunction(targetRect) {
    return {
      nearPlumbLineIsBetter: function(rect) {
        var d;
        if (rect.center.x < targetRect.center.x) {
          d = targetRect.center.x - rect.right;
        } else {
          d = rect.left - targetRect.center.x;
        }
        return d < 0 ? 0 : d;
      },
      nearHorizonIsBetter: function(rect) {
        var d;
        if (rect.center.y < targetRect.center.y) {
          d = targetRect.center.y - rect.bottom;
        } else {
          d = rect.top - targetRect.center.y;
        }
        return d < 0 ? 0 : d;
      },
      nearTargetLeftIsBetter: function(rect) {
        var d;
        if (rect.center.x < targetRect.center.x) {
          d = targetRect.left - rect.right;
        } else {
          d = rect.left - targetRect.left;
        }
        return d < 0 ? 0 : d;
      },
      nearTargetTopIsBetter: function(rect) {
        var d;
        if (rect.center.y < targetRect.center.y) {
          d = targetRect.top - rect.bottom;
        } else {
          d = rect.top - targetRect.top;
        }
        return d < 0 ? 0 : d;
      },
      topIsBetter: function(rect) {
        return rect.top;
      },
      bottomIsBetter: function(rect) {
        return -1 * rect.bottom;
      },
      leftIsBetter: function(rect) {
        return rect.left;
      },
      rightIsBetter: function(rect) {
        return -1 * rect.right;
      }
    };
  }

  function prioritize(priorities) {
    var destPriority = null;
    for (var i = 0; i < priorities.length; i++) {
      if (priorities[i].group.length) {
        destPriority = priorities[i];
        break;
      }
    }

    if (!destPriority) {
      return null;
    }

    var destDistance = destPriority.distance;

    destPriority.group.sort(function(a, b) {
      for (var i = 0; i < destDistance.length; i++) {
        var distance = destDistance[i];
        var delta = distance(a) - distance(b);
        if (delta) {
          return delta;
        }
      }
      return 0;
    });

    return destPriority.group;
  }

  function navigate(target, direction, candidates, config) {
    if (!target || !direction || !candidates || !candidates.length) {
      return null;
    }

    var rects = [];
    for (var i = 0; i < candidates.length; i++) {
      var rect = getRect(candidates[i]);
      if (rect) {
        rects.push(rect);
      }
    }
    if (!rects.length) {
      return null;
    }

    var targetRect = getRect(target);
    if (!targetRect) {
      return null;
    }

    var distanceFunction = generateDistanceFunction(targetRect);

    var groups = partition(
      rects,
      targetRect,
      config.straightOverlapThreshold
    );

    var internalGroups = partition(
      groups[4],
      targetRect.center,
      config.straightOverlapThreshold
    );

    var priorities;

    switch (direction) {
      case 'left':
        priorities = [
          {
            group: internalGroups[0].concat(internalGroups[3])
                                     .concat(internalGroups[6]),
            distance: [
              distanceFunction.nearPlumbLineIsBetter,
              distanceFunction.topIsBetter
            ]
          },
          {
            group: groups[3],
            distance: [
              distanceFunction.nearPlumbLineIsBetter,
              distanceFunction.topIsBetter
            ]
          },
          {
            group: groups[0].concat(groups[6]),
            distance: [
              distanceFunction.nearHorizonIsBetter,
              distanceFunction.rightIsBetter,
              distanceFunction.nearTargetTopIsBetter
            ]
          }
        ];
        break;
      case 'right':
        priorities = [
          {
            group: internalGroups[2].concat(internalGroups[5])
                                     .concat(internalGroups[8]),
            distance: [
              distanceFunction.nearPlumbLineIsBetter,
              distanceFunction.topIsBetter
            ]
          },
          {
            group: groups[5],
            distance: [
              distanceFunction.nearPlumbLineIsBetter,
              distanceFunction.topIsBetter
            ]
          },
          {
            group: groups[2].concat(groups[8]),
            distance: [
              distanceFunction.nearHorizonIsBetter,
              distanceFunction.leftIsBetter,
              distanceFunction.nearTargetTopIsBetter
            ]
          }
        ];
        break;
      case 'up':
        priorities = [
          {
            group: internalGroups[0].concat(internalGroups[1])
                                     .concat(internalGroups[2]),
            distance: [
              distanceFunction.nearHorizonIsBetter,
              distanceFunction.leftIsBetter
            ]
          },
          {
            group: groups[1],
            distance: [
              distanceFunction.nearHorizonIsBetter,
              distanceFunction.leftIsBetter
            ]
          },
          {
            group: groups[0].concat(groups[2]),
            distance: [
              distanceFunction.nearPlumbLineIsBetter,
              distanceFunction.bottomIsBetter,
              distanceFunction.nearTargetLeftIsBetter
            ]
          }
        ];
        break;
      case 'down':
        priorities = [
          {
            group: internalGroups[6].concat(internalGroups[7])
                                     .concat(internalGroups[8]),
            distance: [
              distanceFunction.nearHorizonIsBetter,
              distanceFunction.leftIsBetter
            ]
          },
          {
            group: groups[7],
            distance: [
              distanceFunction.nearHorizonIsBetter,
              distanceFunction.leftIsBetter
            ]
          },
          {
            group: groups[6].concat(groups[8]),
            distance: [
              distanceFunction.nearPlumbLineIsBetter,
              distanceFunction.topIsBetter,
              distanceFunction.nearTargetLeftIsBetter
            ]
          }
        ];
        break;
      default:
        return null;
    }

    if (config.straightOnly) {
      priorities.pop();
    }

    var destGroup = prioritize(priorities);
    if (!destGroup) {
      return null;
    }

    var dest = null;
    if (config.rememberSource &&
        config.previous &&
        config.previous.destination === target &&
        config.previous.reverse === direction) {
      for (var j = 0; j < destGroup.length; j++) {
        if (destGroup[j].element === config.previous.target) {
          dest = destGroup[j].element;
          break;
        }
      }
    }

    if (!dest) {
      dest = destGroup[0].element;
    }

    return dest;
  }

  /********************/
  /* Private Function */
  /********************/
  function generateId() {
    var id;
    while(true) {
      id = ID_POOL_PREFIX + String(++_idPool);
      if (!_sections[id]) {
        break;
      }
    }
    return id;
  }

  function parseSelector(selector) {
    var result = [];
    try {
      if (selector) {
        if ($) {
          result = $(selector).get();
        } else if (typeof selector === 'string') {
          result = [].slice.call(document.querySelectorAll(selector));
        } else if (typeof selector === 'object' && selector.length) {
          result = [].slice.call(selector);
        } else if (typeof selector === 'object' && selector.nodeType === 1) {
          result = [selector];
        }
      }
    } catch (err) {
      console.error(err);
    }
    return result;
  }

  function matchSelector(elem, selector) {
    if ($) {
      return $(elem).is(selector);
    } else if (typeof selector === 'string') {
      return elementMatchesSelector.call(elem, selector);
    } else if (typeof selector === 'object' && selector.length) {
      return selector.indexOf(elem) >= 0;
    } else if (typeof selector === 'object' && selector.nodeType === 1) {
      return elem === selector;
    }
    return false;
  }

  function getCurrentFocusedElement() {
    var activeElement = document.activeElement;
    if (activeElement && activeElement !== document.body) {
      return activeElement;
    }
  }

  function extend(out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i]) {
        continue;
      }
      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key) &&
            arguments[i][key] !== undefined) {
          out[key] = arguments[i][key];
        }
      }
    }
    return out;
  }

  function exclude(elemList, excludedElem) {
    if (!Array.isArray(excludedElem)) {
      excludedElem = [excludedElem];
    }
    for (var i = 0, index; i < excludedElem.length; i++) {
      index = elemList.indexOf(excludedElem[i]);
      if (index >= 0) {
        elemList.splice(index, 1);
      }
    }
    return elemList;
  }

  function isNavigable(elem, sectionId, verifySectionSelector) {
    if (! elem || !sectionId ||
        !_sections[sectionId] || _sections[sectionId].disabled) {
      return false;
    }
    if ((elem.offsetWidth <= 0 && elem.offsetHeight <= 0) ||
        elem.hasAttribute('disabled')) {
      return false;
    }
    if (verifySectionSelector &&
        !matchSelector(elem, _sections[sectionId].selector)) {
      return false;
    }
    if (typeof _sections[sectionId].navigableFilter === 'function') {
      if (_sections[sectionId].navigableFilter(elem, sectionId) === false) {
        return false;
      }
    } else if (typeof GlobalConfig.navigableFilter === 'function') {
      if (GlobalConfig.navigableFilter(elem, sectionId) === false) {
        return false;
      }
    }
    return true;
  }

  function getSectionId(elem) {
    for (var id in _sections) {
      if (!_sections[id].disabled &&
          matchSelector(elem, _sections[id].selector)) {
        return id;
      }
    }
  }

  function getSectionNavigableElements(sectionId) {
    return parseSelector(_sections[sectionId].selector).filter(function(elem) {
      return isNavigable(elem, sectionId);
    });
  }

  function getSectionDefaultElement(sectionId) {
    var defaultElement = parseSelector(_sections[sectionId].defaultElement).find(function(elem) {
      return isNavigable(elem, sectionId, true);
    });
    if (!defaultElement) {
      return null;
    }
    return defaultElement;
  }

  function getSectionLastFocusedElement(sectionId) {
    var lastFocusedElement = _sections[sectionId].lastFocusedElement;
    if (!isNavigable(lastFocusedElement, sectionId, true)) {
      return null;
    }
    return lastFocusedElement;
  }

  function fireEvent(elem, type, details, cancelable) {
    if (arguments.length < 4) {
      cancelable = true;
    }
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(EVENT_PREFIX + type, true, cancelable, details);
    return elem.dispatchEvent(evt);
  }

  function focusElement(elem, sectionId, direction) {
    if (!elem) {
      return false;
    }

    var currentFocusedElement = getCurrentFocusedElement();

    var silentFocus = function() {
      if (currentFocusedElement) {
        currentFocusedElement.blur();
      }
      elem.focus();
      focusChanged(elem, sectionId);
    };

    if (_duringFocusChange) {
      silentFocus();
      return true;
    }

    _duringFocusChange = true;

    if (_pause) {
      silentFocus();
      _duringFocusChange = false;
      return true;
    }

    if (currentFocusedElement) {
      var unfocusProperties = {
        nextElement: elem,
        nextSectionId: sectionId,
        direction: direction,
        native: false
      };
      if (!fireEvent(currentFocusedElement, 'willunfocus', unfocusProperties)) {
        _duringFocusChange = false;
        return false;
      }
      currentFocusedElement.blur();
      fireEvent(currentFocusedElement, 'unfocused', unfocusProperties, false);
    }

    var focusProperties = {
      previousElement: currentFocusedElement,
      sectionId: sectionId,
      direction: direction,
      native: false
    };
    if (!fireEvent(elem, 'willfocus', focusProperties)) {
      _duringFocusChange = false;
      return false;
    }
    elem.focus();
    fireEvent(elem, 'focused', focusProperties, false);

    _duringFocusChange = false;

    focusChanged(elem, sectionId);
    return true;
  }

  function focusChanged(elem, sectionId) {
    if (!sectionId) {
      sectionId = getSectionId(elem);
    }
    if (sectionId) {
      _sections[sectionId].lastFocusedElement = elem;
      _lastSectionId = sectionId;
    }
  }

  function focusExtendedSelector(selector, direction) {
    if (selector.charAt(0) == '@') {
      if (selector.length == 1) {
        return focusSection();
      } else {
        var sectionId = selector.substr(1);
        return focusSection(sectionId);
      }
    } else {
      var next = parseSelector(selector)[0];
      if (next) {
        var nextSectionId = getSectionId(next);
        if (isNavigable(next, nextSectionId)) {
          return focusElement(next, nextSectionId, direction);
        }
      }
    }
    return false;
  }

  function focusSection(sectionId) {
    var range = [];
    var addRange = function(id) {
      if (id && range.indexOf(id) < 0 &&
          _sections[id] && !_sections[id].disabled) {
        range.push(id);
      }
    };

    if (sectionId) {
      addRange(sectionId);
    } else {
      addRange(_defaultSectionId);
      addRange(_lastSectionId);
      Object.keys(_sections).map(addRange);
    }

    for (var i = 0; i < range.length; i++) {
      var id = range[i];
      var next;

      if (_sections[id].enterTo == 'last-focused') {
        next = getSectionLastFocusedElement(id) ||
               getSectionDefaultElement(id) ||
               getSectionNavigableElements(id)[0];
      } else {
        next = getSectionDefaultElement(id) ||
               getSectionLastFocusedElement(id) ||
               getSectionNavigableElements(id)[0];
      }

      if (next) {
        return focusElement(next, id);
      }
    }

    return false;
  }

  function fireNavigatefailed(elem, direction) {
    fireEvent(elem, 'navigatefailed', {
      direction: direction
    }, false);
  }

  function gotoLeaveFor(sectionId, direction) {
    if (_sections[sectionId].leaveFor &&
        _sections[sectionId].leaveFor[direction] !== undefined) {
      var next = _sections[sectionId].leaveFor[direction];

      if (typeof next === 'string') {
        if (next === '') {
          return null;
        }
        return focusExtendedSelector(next, direction);
      }

      if ($ && next instanceof $) {
        next = next.get(0);
      }

      var nextSectionId = getSectionId(next);
      if (isNavigable(next, nextSectionId)) {
        return focusElement(next, nextSectionId, direction);
      }
    }
    return false;
  }

  function focusNext(direction, currentFocusedElement, currentSectionId) {
    var extSelector =
      currentFocusedElement.getAttribute('data-sn-' + direction);
    if (typeof extSelector === 'string') {
      if (extSelector === '' ||
          !focusExtendedSelector(extSelector, direction)) {
        fireNavigatefailed(currentFocusedElement, direction);
        return false;
      }
      return true;
    }

    var sectionNavigableElements = {};
    var allNavigableElements = [];
    for (var id in _sections) {
      sectionNavigableElements[id] = getSectionNavigableElements(id);
      allNavigableElements =
        allNavigableElements.concat(sectionNavigableElements[id]);
    }

    var config = extend({}, GlobalConfig, _sections[currentSectionId]);
    var next;

    if (config.restrict == 'self-only' || config.restrict == 'self-first') {
      var currentSectionNavigableElements =
        sectionNavigableElements[currentSectionId];

      next = navigate(
        currentFocusedElement,
        direction,
        exclude(currentSectionNavigableElements, currentFocusedElement),
        config
      );

      if (!next && config.restrict == 'self-first') {
        next = navigate(
          currentFocusedElement,
          direction,
          exclude(allNavigableElements, currentSectionNavigableElements),
          config
        );
      }
    } else {
      next = navigate(
        currentFocusedElement,
        direction,
        exclude(allNavigableElements, currentFocusedElement),
        config
      );
    }

    if (next) {
      _sections[currentSectionId].previous = {
        target: currentFocusedElement,
        destination: next,
        reverse: REVERSE[direction]
      };

      var nextSectionId = getSectionId(next);

      if (currentSectionId != nextSectionId) {
        var result = gotoLeaveFor(currentSectionId, direction);
        if (result) {
          return true;
        } else if (result === null) {
          fireNavigatefailed(currentFocusedElement, direction);
          return false;
        }

        var enterToElement;
        switch (_sections[nextSectionId].enterTo) {
          case 'last-focused':
            enterToElement = getSectionLastFocusedElement(nextSectionId) ||
                             getSectionDefaultElement(nextSectionId);
            break;
          case 'default-element':
            enterToElement = getSectionDefaultElement(nextSectionId);
            break;
        }
        if (enterToElement) {
          next = enterToElement;
        }
      }

      return focusElement(next, nextSectionId, direction);
    } else if (gotoLeaveFor(currentSectionId, direction)) {
      return true;
    }

    fireNavigatefailed(currentFocusedElement, direction);
    return false;
  }

  function onKeyDown(evt) {
    if (!_sectionCount || _pause ||
        evt.altKey || evt.ctrlKey || evt.metaKey || evt.shiftKey) {
      return;
    }

    var currentFocusedElement;
    var preventDefault = function() {
      evt.preventDefault();
      evt.stopPropagation();
      return false;
    };

    var direction = KEYMAPPING[evt.keyCode];
    if (!direction) {
      if (evt.keyCode == 13) {
        currentFocusedElement = getCurrentFocusedElement();
        if (currentFocusedElement && getSectionId(currentFocusedElement)) {
          if (!fireEvent(currentFocusedElement, 'enter-down')) {
            return preventDefault();
          }
        }
      }
      return;
    }

    currentFocusedElement = getCurrentFocusedElement();

    if (!currentFocusedElement) {
      if (_lastSectionId) {
        currentFocusedElement = getSectionLastFocusedElement(_lastSectionId);
      }
      if (!currentFocusedElement) {
        focusSection();
        return preventDefault();
      }
    }

    var currentSectionId = getSectionId(currentFocusedElement);
    if (!currentSectionId) {
      return;
    }

    var willmoveProperties = {
      direction: direction,
      sectionId: currentSectionId,
      cause: 'keydown'
    };

    if (fireEvent(currentFocusedElement, 'willmove', willmoveProperties)) {
      focusNext(direction, currentFocusedElement, currentSectionId);
    }

    return preventDefault();
  }

  function onKeyUp(evt) {
    if (evt.altKey || evt.ctrlKey || evt.metaKey || evt.shiftKey) {
      return;
    }
    if (!_pause && _sectionCount && evt.keyCode == 13) {
      var currentFocusedElement = getCurrentFocusedElement();
      if (currentFocusedElement && getSectionId(currentFocusedElement)) {
        if (!fireEvent(currentFocusedElement, 'enter-up')) {
          evt.preventDefault();
          evt.stopPropagation();
        }
      }
    }
  }

  function onFocus(evt) {
    var target = evt.target;
    if (target !== window && target !== document &&
        _sectionCount && !_duringFocusChange) {
      var sectionId = getSectionId(target);
      if (sectionId) {
        if (_pause) {
          focusChanged(target, sectionId);
          return;
        }

        var focusProperties = {
          sectionId: sectionId,
          native: true
        };

        if (!fireEvent(target, 'willfocus', focusProperties)) {
          _duringFocusChange = true;
          target.blur();
          _duringFocusChange = false;
        } else {
          fireEvent(target, 'focused', focusProperties, false);
          focusChanged(target, sectionId);
        }
      }
    }
  }

  function onBlur(evt) {
    var target = evt.target;
    if (target !== window && target !== document && !_pause &&
        _sectionCount && !_duringFocusChange && getSectionId(target)) {
      var unfocusProperties = {
        native: true
      };
      if (!fireEvent(target, 'willunfocus', unfocusProperties)) {
        _duringFocusChange = true;
        setTimeout(function() {
          target.focus();
          _duringFocusChange = false;
        });
      } else {
        fireEvent(target, 'unfocused', unfocusProperties, false);
      }
    }
  }

  /*******************/
  /* Public Function */
  /*******************/
  var SpatialNavigation = {
    init: function() {
      if (!_ready) {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        window.addEventListener('focus', onFocus, true);
        window.addEventListener('blur', onBlur, true);
        _ready = true;
      }
    },

    uninit: function() {
      window.removeEventListener('blur', onBlur, true);
      window.removeEventListener('focus', onFocus, true);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('keydown', onKeyDown);
      SpatialNavigation.clear();
      _idPool = 0;
      _ready = false;
    },

    clear: function() {
      _sections = {};
      _sectionCount = 0;
      _defaultSectionId = '';
      _lastSectionId = '';
      _duringFocusChange = false;
    },

    // set(<config>);
    // set(<sectionId>, <config>);
    set: function() {
      var sectionId, config;

      if (typeof arguments[0] === 'object') {
        config = arguments[0];
      } else if (typeof arguments[0] === 'string' &&
                 typeof arguments[1] === 'object') {
        sectionId = arguments[0];
        config = arguments[1];
        if (!_sections[sectionId]) {
          throw new Error('Section "' + sectionId + '" doesn\'t exist!');
        }
      } else {
        return;
      }

      for (var key in config) {
        if (GlobalConfig[key] !== undefined) {
          if (sectionId) {
            _sections[sectionId][key] = config[key];
          } else if (config[key] !== undefined) {
            GlobalConfig[key] = config[key];
          }
        }
      }

      if (sectionId) {
        // remove "undefined" items
        _sections[sectionId] = extend({}, _sections[sectionId]);
      }
    },

    // add(<config>);
    // add(<sectionId>, <config>);
    add: function() {
      var sectionId;
      var config = {};

      if (typeof arguments[0] === 'object') {
        config = arguments[0];
      } else if (typeof arguments[0] === 'string' &&
                 typeof arguments[1] === 'object') {
        sectionId = arguments[0];
        config = arguments[1];
      }

      if (!sectionId) {
        sectionId = (typeof config.id === 'string') ? config.id : generateId();
      }

      if (_sections[sectionId]) {
        throw new Error('Section "' + sectionId + '" has already existed!');
      }

      _sections[sectionId] = {};
      _sectionCount++;

      SpatialNavigation.set(sectionId, config);

      return sectionId;
    },

    remove: function(sectionId) {
      if (!sectionId || typeof sectionId !== 'string') {
        throw new Error('Please assign the "sectionId"!');
      }
      if (_sections[sectionId]) {
        _sections[sectionId] = undefined;
        _sections = extend({}, _sections);
        _sectionCount--;
        if (_lastSectionId === sectionId) {
          _lastSectionId = '';
        }
        return true;
      }
      return false;
    },

    disable: function(sectionId) {
      if (_sections[sectionId]) {
        _sections[sectionId].disabled = true;
        return true;
      }
      return false;
    },

    enable: function(sectionId) {
      if (_sections[sectionId]) {
        _sections[sectionId].disabled = false;
        return true;
      }
      return false;
    },

    pause: function() {
      _pause = true;
    },

    resume: function() {
      _pause = false;
    },

    // focus([silent])
    // focus(<sectionId>, [silent])
    // focus(<extSelector>, [silent])
    // Note: "silent" is optional and default to false
    focus: function(elem, silent) {
      var result = false;

      if (silent === undefined && typeof elem === 'boolean') {
        silent = elem;
        elem = undefined;
      }

      var autoPause = !_pause && silent;

      if (autoPause) {
        SpatialNavigation.pause();
      }

      if (!elem) {
        result  = focusSection();
      } else {
        if (typeof elem === 'string') {
          if (_sections[elem]) {
            result = focusSection(elem);
          } else {
            result = focusExtendedSelector(elem);
          }
        } else {
          if ($ && elem instanceof $) {
            elem = elem.get(0);
          }

          var nextSectionId = getSectionId(elem);
          if (isNavigable(elem, nextSectionId)) {
            result = focusElement(elem, nextSectionId);
          }
        }
      }

      if (autoPause) {
        SpatialNavigation.resume();
      }

      return result;
    },

    // move(<direction>)
    // move(<direction>, <selector>)
    move: function(direction, selector) {
      direction = direction.toLowerCase();
      if (!REVERSE[direction]) {
        return false;
      }

      var elem = selector ?
        parseSelector(selector)[0] : getCurrentFocusedElement();
      if (!elem) {
        return false;
      }

      var sectionId = getSectionId(elem);
      if (!sectionId) {
        return false;
      }

      var willmoveProperties = {
        direction: direction,
        sectionId: sectionId,
        cause: 'api'
      };

      if (!fireEvent(elem, 'willmove', willmoveProperties)) {
        return false;
      }

      return focusNext(direction, elem, sectionId);
    },

    // makeFocusable()
    // makeFocusable(<sectionId>)
    makeFocusable: function(sectionId) {
      var doMakeFocusable = function(section) {
        var tabIndexIgnoreList = section.tabIndexIgnoreList !== undefined ?
          section.tabIndexIgnoreList : GlobalConfig.tabIndexIgnoreList;
        parseSelector(section.selector).forEach(function(elem) {
          if (!matchSelector(elem, tabIndexIgnoreList)) {
            if (!elem.getAttribute('tabindex')) {
              elem.setAttribute('tabindex', '-1');
            }
          }
        });
      };

      if (sectionId) {
        if (_sections[sectionId]) {
          doMakeFocusable(_sections[sectionId]);
        } else {
          throw new Error('Section "' + sectionId + '" doesn\'t exist!');
        }
      } else {
        for (var id in _sections) {
          doMakeFocusable(_sections[id]);
        }
      }
    },

    setDefaultSection: function(sectionId) {
      if (!sectionId) {
        _defaultSectionId = '';
      } else if (!_sections[sectionId]) {
        throw new Error('Section "' + sectionId + '" doesn\'t exist!');
      } else {
        _defaultSectionId = sectionId;
      }
    }
  };

  window.SpatialNavigation = SpatialNavigation;

  /**********************/
  /* CommonJS Interface */
  /**********************/
  if (typeof module === 'object') {
      module.exports = SpatialNavigation;
  }

  /********************/
  /* jQuery Interface */
  /********************/
  if ($) {
    $.SpatialNavigation = function() {
      SpatialNavigation.init();

      if (arguments.length > 0) {
        if ($.isPlainObject(arguments[0])) {
          return SpatialNavigation.add(arguments[0]);
        } else if ($.type(arguments[0]) === 'string' &&
                   $.isFunction(SpatialNavigation[arguments[0]])) {
          return SpatialNavigation[arguments[0]]
            .apply(SpatialNavigation, [].slice.call(arguments, 1));
        }
      }

      return $.extend({}, SpatialNavigation);
    };

    $.fn.SpatialNavigation = function() {
      var config;

      if ($.isPlainObject(arguments[0])) {
        config = arguments[0];
      } else {
        config = {
          id: arguments[0]
        };
      }

      config.selector = this;

      SpatialNavigation.init();
      if (config.id) {
        SpatialNavigation.remove(config.id);
      }
      SpatialNavigation.add(config);
      SpatialNavigation.makeFocusable(config.id);

      return this;
    };
  }
})(window.jQuery);

var css = ":focus {\n  outline: 3px solid red !important;\n}\n\n.focusable {\n  outline: 1px solid blue;\n}\n\n.this-message-does-not-harm-to-you-dont-remove-it {\n  display: none !important;\n}\n\n.widget:has(.this-message-does-not-harm-to-you-dont-remove-it) {\n  margin: 0 !important;\n}\n";

/**
 * Main function
 */
function main() {
  // Show the page
  document.body.style.display = 'block';

  // Custom style
  const style = document.createElement('style');
  style.textContent = css + plyrStyle;
  document.head.appendChild(style);

  // Spatial Navigation
  SpatialNavigation.init();
  document.addEventListener('sn:enter-down', e => {
    e.preventDefault();
    e.stopPropagation();
  });
  document.addEventListener('sn:enter-up', e => {
    e.preventDefault();
    e.stopPropagation();

    e.target?.click();
  });

  // Clean up the page
  document.querySelector('.alert.alert-home')?.remove();
  document.querySelector('.widget.slider')?.remove();
  document.querySelector('#header')?.remove();
  document.querySelector('#controls')?.remove();
  document.querySelector('#download')?.remove();

  // Add focusable class
  document
    .querySelectorAll(
      '.item > .inner a:first-child, ' +
        '.episodes > .episode a, ' +
        '.servers-tabs > .tab, ' +
        '#player-cover'
    )
    .forEach(item => item.classList.add('focusable'));

  SpatialNavigation.add({
    selector: '.focusable',
  });
  SpatialNavigation.makeFocusable();
  SpatialNavigation.focus();

  // ---

  const iframeHandler = () => {
    const iframe = document.querySelector('#player iframe');
    iframe?.addEventListener('load', function () {
      if (!this.contentDocument) return;
      const content = this.contentDocument;

      const video = content.querySelector('video');
      if (!video) return;

      iframe.parentElement
        ?.querySelectorAll('.plyr')
        .forEach(item => item.remove());
      iframe.parentElement?.appendChild(video);
      iframe.remove();

      new Plyr(video, {
        controls: [
          'play',
          'progress',
          'current-time',
          'duration',
          'settings',
          'fullscreen',
        ],
        settings: ['speed'],
        disableContextMenu: false,
      });

      // SpatialNavigation.add({
      //   selector: '.plyr__controls button, .plyr__controls input[data-plyr]',
      // });
      // SpatialNavigation.makeFocusable();

      // document.querySelector('.plyr__controls button')?.focus();
    });
  };

  setInterval(() => {
    if (document.querySelector('#player iframe:not(.handled)')) {
      document.querySelector('#player iframe')?.classList.add('handled');
      iframeHandler();
    }
  }, 250);
}

document.body.style.display = 'none';

document.addEventListener('DOMContentLoaded', main);
if (document.readyState === 'interactive' || document.readyState === 'complete')
  main();
