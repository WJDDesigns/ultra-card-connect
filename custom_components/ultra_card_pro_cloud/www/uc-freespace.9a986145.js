export const __webpack_esm_ids__=[6885];export const __webpack_esm_modules__={1097(t,e,i){i.r(e),i.d(e,{UltraFreeSpaceViewImpl:()=>pt});var s=i(2618),o=i(4791),n=i(754),r=i(9165),a=i(2737),l=i(1162),d=i(8690),h=i(2063),c=i(6478),u=i(9123),p=i(6344);function _(t,e){return!e||e<=0?t:Math.round(t/e)*e}function b(t,e){return v(!e||e<=0?t:Object.assign(Object.assign({},t),{x:_(t.x,e),y:_(t.y,e),w:Math.max(80,_(t.w,e)),h:Math.max(60,_(t.h,e))}))}function v(t){const e={x:Number.isFinite(t.x)?t.x:0,y:Number.isFinite(t.y)?Math.max(0,t.y):0,w:Number.isFinite(t.w)?Math.max(80,t.w):320,h:Number.isFinite(t.h)?Math.max(60,t.h):160,r:Number.isFinite(t.r)?k(t.r):0,z:Number.isFinite(t.z)?Math.round(t.z):0};t.pin&&"left"!==t.pin&&Number.isFinite(t.ref_w)&&t.ref_w>0&&(e.pin=t.pin,e.ref_w=Math.round(t.ref_w));for(const i of u.Ct)!0===t[i]&&(e[i]=!0);return"string"==typeof t.group&&t.group&&(e.group=t.group),e}function g(t,e){if(!(t.pin&&"left"!==t.pin&&t.ref_w&&e>0))return t;const i=e-t.ref_w;if(0===i)return t;const s=Object.assign(Object.assign({},t),{ref_w:Math.round(e)});return"right"===t.pin?s.x=t.x+i:"center"===t.pin?s.x=t.x+i/2:"stretch"===t.pin&&(s.w=Math.max(80,t.w+i)),s}function f(t,e){return t.map(t=>g(t,e))}function y(t,e,i){const{pin:s,ref_w:o}=t,n=function(t,e){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(i[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(t);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(t,s[o])&&(i[s[o]]=t[s[o]])}return i}(t,["pin","ref_w"]);return"left"!==e&&i>0?Object.assign(Object.assign({},n),{pin:e,ref_w:Math.round(i)}):n}const m=16;function w(t){return{left:Math.min(...t.map(t=>t.x)),top:Math.min(...t.map(t=>t.y)),right:Math.max(...t.map(t=>t.x+t.w)),bottom:Math.max(...t.map(t=>t.y+t.h))}}function x(t,e){if(!(t.length&&e>0))return{scale:1,tx:0,right:0};const i=t.map(O),s=Math.min(...i.map(t=>t.left))-16,o=Math.max(...i.map(t=>t.right))+16,n=o-s,r=n>e?e/n:1;return{scale:r,tx:(e-n*r)/2-s*r,right:o}}function k(t){let e=t%360;return e>180&&(e-=360),e<=-180&&(e+=360),e}function $(t,e,i,s){return 180*Math.atan2(s-e,i-t)/Math.PI}function M(t){return{cx:t.x+t.w/2,cy:t.y+t.h/2}}function O(t){if(!t.r)return{left:t.x,top:t.y,right:t.x+t.w,bottom:t.y+t.h};const{cx:e,cy:i}=M(t),s=t.r*Math.PI/180,o=Math.abs(Math.cos(s)),n=Math.abs(Math.sin(s)),r=(t.w*o+t.h*n)/2,a=(t.w*n+t.h*o)/2;return{left:e-r,top:i-a,right:e+r,bottom:i+a}}function C(t,e,i=8){const s=O(t),o=O(e);return!(s.right+i<=o.left||o.right+i<=s.left||s.bottom+i<=o.top||o.bottom+i<=s.top)}function L(t,e,i=320,s=160,o=8){const n=Math.max(o||8,i),r=Math.max(o||8,s),a=Math.max(1,Math.floor((e-i)/n)+1),l=t.length?Math.max(...t.map(t=>t.z))+1:0;for(let e=0;e<200;e++)for(let d=0;d<a;d++){const a=v({x:d*n,y:e*r,w:i,h:s,r:0,z:l});if(!t.some(t=>C(a,t)))return o>0?b(a,o):a}return v({x:0,y:t.reduce((t,e)=>Math.max(t,O(e).bottom),0)+16,w:i,h:s,r:0,z:l})}function z(t){const e=t.filter(t=>!t.hidden);return e.length?e:t}function A(t){return!!t&&"object"==typeof t&&!Array.isArray(t)}function S(t,e){const i="number"==typeof t?t:Number(t);return Number.isFinite(i)?i:e}const E=["fit_width","cover","contain","stretch","repeat","original"];function j(t){return"string"==typeof t&&t.trim()?t.trim():void 0}function B(t){return A(t)?function(t){const e=A(t)?t:{},i="scale"===e.narrow?"scale":"stack",s=Math.max(320,Math.round(S(e.canvas_width,u.Mf.canvas_width))),o=Math.max(200,Math.round(S(e.min_height,u.Mf.min_height))),n=Math.max(0,Math.round(S(e.grid,u.Mf.grid))),r=function(t){if(!A(t))return;const e={};let i=!1;for(const s of p.eC){if(void 0===t[s]||null===t[s]||""===t[s])continue;const o=Math.round(S(t[s],NaN));Number.isFinite(o)&&(e[s]=Math.max(280,o),i=!0)}return i?e:void 0}(e.canvas_widths),a={canvas_width:s,min_height:o,grid:n,narrow:i};"screen"===e.fit&&(a.fit="screen");const l=function(t){var e;if(!A(t))return;const i=j(t.image),s=j(t.color),o={};if(A(t.images))for(const e of["laptop","tablet","phone"]){const i=j(t.images[e]);i&&(o[e]=i)}if(!i&&!s&&!Object.keys(o).length)return;const n={size:E.includes(t.size)?t.size:"fit_width",position:null!==(e=j(t.position))&&void 0!==e?e:"top center",opacity:Math.min(100,Math.max(0,Math.round(S(t.opacity,100))))};return i&&(n.image=i),s&&(n.color=s),Object.keys(o).length&&(n.images=o),n}(e.background);return l&&(a.background=l),r&&(a.canvas_widths=r,r.desktop&&(a.canvas_width=r.desktop)),a}(t.freespace):Object.assign({},u.Mf)}function I(t,e){var i;const s=null===(i=t.canvas_widths)||void 0===i?void 0:i[e];return"number"==typeof s&&Number.isFinite(s)?Math.max(280,Math.round(s)):"desktop"===e?t.canvas_width:p.HL[e].canvasWidth}function P(t){if(!function(t){return!!A(t)&&Number.isFinite(Number(t.x))&&Number.isFinite(Number(t.y))&&Number.isFinite(Number(t.w))&&Number.isFinite(Number(t.h))}(t))return null;const e=S(t.r,0),i=Math.round(S(t.z,0)),s={x:Number(t.x),y:Number(t.y),w:Number(t.w),h:Number(t.h),r:e,z:i};u.Ce.includes(t.pin)&&(s.pin=t.pin,s.ref_w=S(t.ref_w,NaN));for(const e of u.Ct)!0===t[e]&&(s[e]=!0);return"string"==typeof t.group&&t.group&&(s.group=t.group),v(s)}function F(t){if(!A(t))return{};const e={};if((0,p.G6)(t))for(const i of p.eC){const s=P(t[i]);s&&(e[i]=s)}if((0,p._e)(t)&&!e.desktop){const i=P(t);i&&(e.desktop=i)}return e}function W(t){const e=p.eC.filter(e=>t[e]);if(0===e.length)return{};if(1===e.length&&"desktop"===e[0]&&t.desktop)return Object.assign({},t.desktop);const i={};for(const s of e)i[s]=Object.assign({},t[s]);return i}function q(t,e){return!!t[e]}function D(t,e,i){if(!A(t))return null;const s=function(t,e){for(const i of p.z7[e]){const e=t[i];if(e)return{layout:Object.assign({},e),from:i}}return null}(F(t.view_layout),e);return s?s.from===e?s.layout:function(t,e){return t.pin&&"left"!==t.pin&&e>0?Object.assign(Object.assign({},t),{ref_w:Math.round(e)}):t}(s.layout,i):null}function H(t,e,i,s="desktop"){var o;const n=I(e,s),r=[];for(let a=0;a<t.length;a++){const l=null!==(o=null==i?void 0:i[a])&&void 0!==o?o:null,d=null!=l?l:D(t[a],s,n);d?r.push(d):r.push(L(r,n,320,160,e.grid))}return r}function T(t,e){let i=0;for(const e of t)i=Math.max(i,e.y+e.h);return Math.max(e,i+24)}function R(t,e,i,s,o=0,n="desktop"){const r=o>0?b(s,o):v(s),a=Array.isArray(null==t?void 0:t.views)?[...t.views]:[],l=A(a[e])?Object.assign({},a[e]):{},d=Array.isArray(l.cards)?[...l.cards]:[],h=A(d[i])?Object.assign({},d[i]):{},c=F(h.view_layout);return c[n]=Object.assign({},r),h.view_layout=W(c),d[i]=h,l.cards=d,a[e]=l,Object.assign(Object.assign({},t),{views:a})}function K(t,e,i,s="desktop"){const o=Array.isArray(null==t?void 0:t.views)?[...t.views]:[],n=A(o[e])?Object.assign({},o[e]):{},r=Array.isArray(n.cards)?[...n.cards]:[];for(let t=0;t<r.length&&t<i.length;t++){const e=A(r[t])?Object.assign({},r[t]):{},o=F(e.view_layout);o[s]=Object.assign({},i[t]),e.view_layout=W(o),r[t]=e}return n.cards=r,o[e]=n,Object.assign(Object.assign({},t),{views:o})}function U(t,e){const i=A(t)?t:{},s=Array.isArray(i.cards)?i.cards:[],o=B(i),n=I(o,e),r=H(s,o,void 0,"desktop"),a=x(z(r),n);return r.map(t=>function(t,e,i){const s=Object.assign(Object.assign({},t),{x:Math.round(t.x*e.scale+e.tx),y:Math.round(t.y*e.scale),w:Math.round(t.w*e.scale),h:Math.round(t.h*e.scale)});return s.pin&&"left"!==s.pin&&(s.ref_w=Math.round(i)),v(s)}(t,a,n))}function N(t,e,i){if("desktop"===i||!(0,p.OY)(i))return t;const s=Array.isArray(null==t?void 0:t.views)?[...t.views]:[],o=A(s[e])?Object.assign({},s[e]):{},n=Array.isArray(o.cards)?[...o.cards]:[],r=U(o,i);for(let t=0;t<n.length;t++){const e=A(n[t])?Object.assign({},n[t]):{},s=F(e.view_layout);s[i]||(s[i]=r[t],e.view_layout=W(s),n[t]=e)}return o.cards=n,s[e]=o,Object.assign(Object.assign({},t),{views:s})}function X(t){t.map((t,e)=>({i:e,z:t.z})).sort((t,e)=>t.z-e.z||t.i-e.i).forEach((e,i)=>{t[e.i].z=i})}function V(t,e){var i;const s=null===(i=t[e])||void 0===i?void 0:i.group;return s?[...t.flatMap((t,i)=>t.group===s&&i!==e?[i]:[]),e]:[e]}function Y(t,e){const i=new Set;for(const s of e)for(const e of V(t,s))i.add(e);const s=e[e.length-1];return void 0!==s&&i.has(s)?(i.delete(s),[...i,s]):[...i]}class Z{constructor(t){this._state=null,this._longPressTimer=null,this._scale=1,this._shiftKey=!1,this._lastClick=null,this._additive=!1,this._artboardOrigin={left:0,top:0},this._callbacks=t,this._onKeyDown=t=>{this._shiftKey=t.shiftKey,"Escape"===t.key&&this._state&&this.cancel()},this._onKeyUp=t=>{this._shiftKey=t.shiftKey}}get state(){return this._state}setScale(t){this._scale=t>0?t:1}attachWindowListeners(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}detachWindowListeners(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this._clearLongPress()}pointerDown(t,e){if(this._state)return;const i="touch"===t.pointerType;this._shiftKey=t.shiftKey,this._additive=t.shiftKey||t.ctrlKey||t.metaKey;const s=()=>{var i,s,o,n;const r=M(e.origin),a=this._clientToArtboard(t.clientX,t.clientY),l={mode:e.mode,cardIndex:e.cardIndex,startX:a.x,startY:a.y,origin:Object.assign({},e.origin),current:Object.assign({},e.origin),pointerId:t.pointerId,moved:!1,clientStartX:t.clientX,clientStartY:t.clientY};void 0!==e.handle&&(l.handle=e.handle),"rotate"===e.mode&&(l.startAngle=$(r.cx,r.cy,a.x,a.y)),this._state=l;try{null===(s=(i=e.captureTarget).setPointerCapture)||void 0===s||s.call(i,t.pointerId)}catch(t){}null===(n=(o=this._callbacks).onStart)||void 0===n||n.call(o,l)};if(i&&"move"===e.mode)return this._clearLongPress(),this._longPressTimer=window.setTimeout(()=>{this._longPressTimer=null,s()},250),void(this._state={mode:"idle",cardIndex:e.cardIndex,startX:0,startY:0,origin:Object.assign({},e.origin),current:Object.assign({},e.origin),pointerId:t.pointerId,moved:!1,clientStartX:t.clientX,clientStartY:t.clientY});t.preventDefault(),s()}pointerMove(t){var e,i,s,o;if(null!==this._longPressTimer){const n=t.clientX-(null!==(i=null===(e=this._state)||void 0===e?void 0:e.clientStartX)&&void 0!==i?i:t.clientX),r=t.clientY-(null!==(o=null===(s=this._state)||void 0===s?void 0:s.clientStartY)&&void 0!==o?o:t.clientY);return void(Math.hypot(n,r)>4&&(this._clearLongPress(),this._state=null))}if(!this._state||"idle"===this._state.mode)return;if(t.pointerId!==this._state.pointerId)return;const n=t.clientX-this._state.clientStartX,r=t.clientY-this._state.clientStartY;if(!this._state.moved&&Math.hypot(n,r)<4)return;this._state.moved=!0,this._shiftKey=t.shiftKey;const a=this._clientToArtboard(t.clientX,t.clientY),l=a.x-this._state.startX,d=a.y-this._state.startY;let h;if("move"===this._state.mode)h=function(t,e,i){return v(Object.assign(Object.assign({},t),{x:t.x+e,y:Math.max(0,t.y+i)}))}(this._state.origin,l,d);else if("resize"===this._state.mode&&this._state.handle){const t=this._shiftKey!==!!this._state.origin.keep_ratio;h=function(t,e,i,s,o=!1){if(o)return function(t,e,i,s){const o=t.w/Math.max(1,t.h),n=e.includes("e")?i:e.includes("w")?-i:0,r=e.includes("s")?s:e.includes("n")?-s:0;let a="e"===e||"w"===e||2===e.length&&Math.abs(n)>=Math.abs(r*o)?t.w+n:(t.h+r)*o;a=Math.max(a,80,60*o);const l=a/o;let d=t.x,h=t.y;return e.includes("w")?d=t.x+t.w-a:"n"!==e&&"s"!==e||(d=t.x+(t.w-a)/2),e.includes("n")?h=t.y+t.h-l:"e"!==e&&"w"!==e||(h=t.y+(t.h-l)/2),v(Object.assign(Object.assign({},t),{x:d,y:h,w:a,h:l}))}(t,e,i,s);let{x:n,y:r,w:a,h:l}=t;return e.includes("e")&&(a=t.w+i),e.includes("w")&&(a=t.w-i,n=t.x+i),e.includes("s")&&(l=t.h+s),e.includes("n")&&(l=t.h-s,r=t.y+s),a<80&&(e.includes("w")&&(n=t.x+t.w-80),a=80),l<60&&(e.includes("n")&&(r=t.y+t.h-60),l=60),v(Object.assign(Object.assign({},t),{x:n,y:r,w:a,h:l}))}(this._state.origin,this._state.handle,l,d,t)}else{if("rotate"!==this._state.mode||void 0===this._state.startAngle)return;{const t=M(this._state.origin),e=$(t.cx,t.cy,a.x,a.y);h=function(t,e,i,s){let o=t.r+(i-e);return s&&(o=function(t,e=15){return _(t,e)}(o,15)),v(Object.assign(Object.assign({},t),{r:o}))}(this._state.origin,this._state.startAngle,e,this._shiftKey)}}this._state.current=h,this._callbacks.onMove(this._state)}pointerUp(t){var e;if(null!==this._longPressTimer){this._clearLongPress();const t=null===(e=this._state)||void 0===e?void 0:e.cardIndex;return this._state=null,void(void 0!==t&&this._emitClick(t))}if(!this._state||"idle"===this._state.mode)return void(this._state=null);if(t.pointerId!==this._state.pointerId)return;const i=this._state;this._state=null,i.moved||"move"!==i.mode?this._callbacks.onEnd(i,!1):this._emitClick(i.cardIndex)}_emitClick(t){var e,i,s,o,n,r;if(this._additive)return this._lastClick=null,void(null===(i=(e=this._callbacks).onClick)||void 0===i||i.call(e,t,!0));const a=Date.now(),l=this._lastClick;if(l&&l.index===t&&a-l.time<=350)return this._lastClick=null,void(null===(o=(s=this._callbacks).onDoubleClick)||void 0===o||o.call(s,t));this._lastClick={index:t,time:a},null===(r=(n=this._callbacks).onClick)||void 0===r||r.call(n,t,!1)}cancel(){if(this._clearLongPress(),!this._state||"idle"===this._state.mode)return void(this._state=null);const t=this._state;t.current=Object.assign({},t.origin),this._state=null,this._callbacks.onEnd(t,!0)}_clientToArtboard(t,e){const i=this._artboardOrigin;return{x:(t-i.left)/this._scale,y:(e-i.top)/this._scale}}setArtboardOrigin(t,e){this._artboardOrigin={left:t,top:e}}_clearLongPress(){null!==this._longPressTimer&&(clearTimeout(this._longPressTimer),this._longPressTimer=null)}}class G{constructor(t=50,e=600,i=()=>Date.now()){this._limit=t,this._mergeMs=e,this._now=i,this._past=[],this._future=[],this._lastPushAt=0}get canUndo(){return this._past.length>0}get canRedo(){return this._future.length>0}record(t){const e=this._now(),i=this._past.length>0&&e-this._lastPushAt<this._mergeMs;this._lastPushAt=e,this._future=[],i||(this._past.push(t),this._past.length>this._limit&&this._past.shift())}undo(t){const e=this._past.pop();if(void 0!==e)return this._future.push(t),this._lastPushAt=0,e}redo(t){const e=this._future.pop();if(void 0!==e)return this._past.push(t),this._lastPushAt=0,e}clear(){this._past=[],this._future=[],this._lastPushAt=0}}const J={wall:{id:"wall",fit:"screen",slots:[{kind:"clock",desktop:[16,16,760,168]},{kind:"weather",desktop:[792,16,392,168]},{kind:"light",desktop:[16,200,280,96]},{kind:"light",desktop:[312,200,280,96]},{kind:"light",desktop:[608,200,280,96]},{kind:"light",desktop:[904,200,280,96]},{kind:"camera",desktop:[16,312,576,328]},{kind:"climate",desktop:[608,312,576,328]}]},phone:{id:"phone",slots:[{kind:"clock",desktop:[16,16,568,136],phone:[16,16,358,120]},{kind:"weather",desktop:[600,16,584,136],phone:[16,152,358,136]},{kind:"light",desktop:[16,168,280,96],phone:[16,304,171,96]},{kind:"light",desktop:[312,168,280,96],phone:[203,304,171,96]},{kind:"light",desktop:[608,168,280,96],phone:[16,416,171,96]},{kind:"light",desktop:[904,168,280,96],phone:[203,416,171,96]},{kind:"media",desktop:[16,280,584,200],phone:[16,528,358,200]},{kind:"climate",desktop:[616,280,568,320],phone:[16,744,358,320]}]},desktop:{id:"desktop",slots:[{kind:"clock",desktop:[16,16,376,160]},{kind:"weather",desktop:[408,16,376,160]},{kind:"sensor",desktop:[800,16,384,160]},{kind:"camera",desktop:[16,192,768,432]},{kind:"light",desktop:[800,192,384,96]},{kind:"light",desktop:[800,304,384,96]},{kind:"light",desktop:[800,416,384,96]},{kind:"light",desktop:[800,528,384,96]},{kind:"climate",desktop:[16,640,568,320]},{kind:"media",desktop:[600,640,584,320]}]}},Q=["wall","phone","desktop"],tt={weather:"weather",camera:"camera",climate:"climate",light:"light",media:"media_player",sensor:"sensor"},et={clock:"",weather:"Weather",camera:"Camera",climate:"Thermostat",light:"Light",media:"Media player",sensor:"Sensor"};function it([t,e,i,s],o){return{x:t,y:e,w:i,h:s,r:0,z:o}}function st(t,e){const i=J[t],s=Object.keys(null!=e?e:{}).sort(),o=new Set,n=i.slots.map((t,e)=>{const i={desktop:it(t.desktop,e)};return t.phone&&(i.phone=it(t.phone,e)),Object.assign(Object.assign({},function(t,e){if("clock"===t)return{type:"markdown",content:"# {{ now().strftime('%H:%M') }}\n{{ now().strftime('%A %d %B') }}"};if(!e)return function(t){return{type:"markdown",content:`### ${et[t]}\nEdit this card to choose what it shows.`}}(t);switch(t){case"weather":return{type:"weather-forecast",entity:e,forecast_type:"daily"};case"camera":return{type:"picture-entity",entity:e,camera_view:"auto",show_state:!1};case"climate":return{type:"thermostat",entity:e};case"media":return{type:"media-control",entity:e};default:return{type:"tile",entity:e}}}(t.kind,(t=>{if("clock"===t)return;const e=`${tt[t]}.`,i=s.find(t=>t.startsWith(e)&&!o.has(t));return i&&o.add(i),i})(t.kind))),{view_layout:W(i)})});return i.fit?{cards:n,fit:i.fit}:{cards:n}}var ot=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const nt={left:{icon:r.GuD,key:"menu_pin_left",label:"Left"},center:{icon:r.kVQ,key:"menu_pin_center",label:"Center"},right:{icon:r.BIl,key:"menu_pin_right",label:"Right"},stretch:{icon:r.M1z,key:"menu_pin_stretch",label:"Left & right"}},rt=["n","s","e","w","ne","nw","se","sw"];let at=class extends s.WF{constructor(){super(...arguments),this.card=null,this.cardIndex=0,this.editMode=!1,this.selected=!1,this.stacked=!1,this.editingAllowed=!0,this.scale=1,this.language="en",this._hover=!1,this._menuOpen=!1,this._clipped=!1,this._touchStarted=!1,this._sizeObserver=null,this._lastMeasuredH=0,this._onFocus=()=>{this._hover=!0},this._onBlur=()=>{this._menuOpen||(this._hover=!1)},this._onMouseEnter=()=>{this._touchStarted||(this._hover=!0)},this._onMouseLeave=()=>{this._menuOpen||(this._hover=!1)},this._documentClicked=t=>{this._hover=t.composedPath().includes(this),this._hover||(this._menuOpen=!1),document.removeEventListener("click",this._documentClicked)},this._onContextMenu=t=>{this.editMode&&this.editingAllowed&&(t.preventDefault(),t.stopPropagation(),this._hover=!0,this._menuOpen=!0,this._fire("fs-select-card",{cardIndex:this.cardIndex}),document.addEventListener("click",this._documentClicked))}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._onFocus),this.addEventListener("blur",this._onBlur),this.addEventListener("mouseenter",this._onMouseEnter),this.addEventListener("mouseleave",this._onMouseLeave),this.addEventListener("contextmenu",this._onContextMenu)}disconnectedCallback(){var t;super.disconnectedCallback(),this.removeEventListener("focus",this._onFocus),this.removeEventListener("blur",this._onBlur),this.removeEventListener("mouseenter",this._onMouseEnter),this.removeEventListener("mouseleave",this._onMouseLeave),this.removeEventListener("contextmenu",this._onContextMenu),document.removeEventListener("click",this._documentClicked),null===(t=this._sizeObserver)||void 0===t||t.disconnect(),this._sizeObserver=null}updated(t){var e,i;(t.has("layout")||t.has("stacked")||t.has("_menuOpen"))&&this._applyPosition(),t.has("card")&&this.card&&this._mountCard(),t.has("editMode")&&(this.toggleAttribute("tabindex",this.editMode&&this.editingAllowed),this.editMode&&this.editingAllowed?this.setAttribute("tabindex","0"):this.removeAttribute("tabindex")),(t.has("selected")||t.has("editMode"))&&(this.toggleAttribute("selected",this.selected&&this.editMode),this.editMode||(this._menuOpen=!1)),t.has("stacked")&&this.toggleAttribute("stacked",this.stacked),(t.has("layout")||t.has("editMode"))&&(this.toggleAttribute("hidden-here",!!(null===(e=this.layout)||void 0===e?void 0:e.hidden)&&this.editMode),this.toggleAttribute("locked",!!(null===(i=this.layout)||void 0===i?void 0:i.locked))),(t.has("layout")||t.has("stacked")||t.has("editMode"))&&this._measure()}_autoHeight(){var t;return!!(null===(t=this.layout)||void 0===t?void 0:t.auto_h)&&!this.stacked}_measure(){var t,e;if(!(this._autoHeight()||this.editMode&&!this.stacked))return null===(t=this._sizeObserver)||void 0===t||t.disconnect(),this._sizeObserver=null,void(this._clipped=!1);if(!this._sizeObserver&&"undefined"!=typeof ResizeObserver){this._sizeObserver=new ResizeObserver(()=>this._onResize()),this._sizeObserver.observe(this);const t=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".card-slot");t&&this._sizeObserver.observe(t),this.card&&this._sizeObserver.observe(this.card)}this._onResize()}_onResize(){var t;const e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(".card-slot");if(this._autoHeight()){this._clipped=!1;const t=Math.max(60,Math.round(this.offsetHeight));return void(t>0&&Math.abs(t-this._lastMeasuredH)>=1&&(this._lastMeasuredH=t,this._fire("fs-measured",{cardIndex:this.cardIndex,h:t})))}if(this._lastMeasuredH=0,!e||!this.editMode)return void(this._clipped=!1);const i=Math.max(e.scrollHeight,...Array.from(e.children).map(t=>t.scrollHeight||0));this._clipped=i>e.clientHeight+2}_applyPosition(){var t;!this.stacked&&this.layout&&(this.style.left=`${this.layout.x}px`,this.style.top=`${this.layout.y}px`,this.style.width=`${this.layout.w}px`,this.style.height=this._autoHeight()?"auto":`${this.layout.h}px`,this.style.minHeight=this._autoHeight()?"60px":"",this.toggleAttribute("auto-h",this._autoHeight()),this.style.zIndex=this._menuOpen?String(9e3):String(null!==(t=this.layout.z)&&void 0!==t?t:0),this.style.transform=this.layout.r?`rotate(${this.layout.r}deg)`:"")}_mountCard(){var t;const e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(".card-slot");if(e&&this.card){for(;e.firstChild;)e.removeChild(e.firstChild);try{this.card.layout="grid"}catch(t){}e.appendChild(this.card),this._sizeObserver&&(this._sizeObserver.disconnect(),this._sizeObserver=null,this._measure())}}firstUpdated(){this._mountCard(),this._applyPosition()}_showChrome(){return this.editMode&&this.editingAllowed&&(this._hover||this.selected||this._menuOpen)}_icon(t){return s.qy`<svg viewBox="0 0 24 24"><path d=${t}></path></svg>`}_t(t,e){return(0,c.kg)(`freespace.${t}`,this.language,e)}_fire(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}_onOverlayPointerDown(t){this.editMode&&this.editingAllowed&&(t.target.closest(".more, .menu, .handle, .rotate-zone")||("touch"===t.pointerType&&(this._touchStarted=!0),this._fire("fs-interaction-start",{cardIndex:this.cardIndex,mode:"move",origin:this.layout,pointerEvent:t,captureTarget:this})))}_onHandlePointerDown(t,e){t.stopPropagation(),t.preventDefault(),this._fire("fs-interaction-start",{cardIndex:this.cardIndex,mode:"resize",handle:e,origin:this.layout,pointerEvent:t,captureTarget:this})}_onRotatePointerDown(t){t.stopPropagation(),t.preventDefault(),this._fire("fs-interaction-start",{cardIndex:this.cardIndex,mode:"rotate",origin:this.layout,pointerEvent:t,captureTarget:this})}_toggleMenu(t){t.stopPropagation(),this._menuOpen=!this._menuOpen,this._menuOpen&&(document.addEventListener("click",this._documentClicked),this._fire("fs-select-card",{cardIndex:this.cardIndex}))}_setPin(t,e){e.stopPropagation(),this._menuOpen=!1,this._fire("fs-set-pin",{cardIndex:this.cardIndex,pin:t})}_menuAction(t,e){switch(e.stopPropagation(),this._menuOpen=!1,t){case"edit":this._fire("fs-edit-card",{cardIndex:this.cardIndex});break;case"duplicate":this._fire("fs-duplicate-card",{cardIndex:this.cardIndex});break;case"copy":this._fire("fs-copy-card",{cardIndex:this.cardIndex});break;case"cut":this._fire("fs-cut-card",{cardIndex:this.cardIndex});break;case"delete":this._fire("fs-delete-card",{cardIndex:this.cardIndex});break;case"forward":case"backward":case"front":case"back":this._fire("fs-z-order",{cardIndex:this.cardIndex,action:t});break;case"reset-rotation":this._fire("fs-reset-rotation",{cardIndex:this.cardIndex});break;case"lock":case"hidden":case"auto_h":this._fire("fs-toggle-flag",{cardIndex:this.cardIndex,flag:t})}}_renderBadges(){var t,e;if(!this.editMode||this.stacked)return s.s6;const i=!!(null===(t=this.layout)||void 0===t?void 0:t.locked),o=!!(null===(e=this.layout)||void 0===e?void 0:e.hidden);return i||o||this._clipped?s.qy`
      <div class="badges">
        ${i?s.qy`<span class="badge" title=${this._t("badge_locked_hint","Locked: unlock it to move or resize")}
              >${this._icon(r.kHm)}</span
            >`:s.s6}
        ${o?s.qy`<span class="badge" title=${this._t("badge_hidden_hint","Hidden on this screen size")}
              >${this._icon(r.tQ_)} ${this._t("badge_hidden","Hidden")}</span
            >`:s.s6}
        ${this._clipped?s.qy`<span
              class="badge warn"
              title=${this._t("badge_clipped_hint","The content is taller than this card and is cut off. Make the card taller or set its height to Auto.")}
              >${this._t("badge_clipped","Cut off")}</span
            >`:s.s6}
      </div>
    `:s.s6}render(){var t,e,i;const o=this._showChrome(),n=!!(null===(t=this.layout)||void 0===t?void 0:t.locked),a=!!(null===(e=this.layout)||void 0===e?void 0:e.hidden);return s.qy`
      <div class="frame">
        <div class="card-slot"></div>
        ${this._renderBadges()}
        ${this.editMode&&this.editingAllowed?s.qy`
              <div
                class="overlay ${o?"visible":""}"
                @pointerdown=${this._onOverlayPointerDown}
              >
                <div class="control-overlay"></div>
                <div class="control-icon">${this._icon(n?r.kHm:r.iEg)}</div>
                <button
                  type="button"
                  class="more"
                  aria-label=${this._t("menu_options","Card options")}
                  @click=${this._toggleMenu}
                  @pointerdown=${t=>t.stopPropagation()}
                >
                  ${this._icon(r.TdJ)}
                </button>
                ${this._menuOpen?s.qy`
                      <ul class="menu" role="menu">
                        <li>
                          <button type="button" @click=${t=>this._menuAction("edit",t)}>
                            ${this._icon(r.Q43)} ${this._t("menu_edit","Edit")}
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            @click=${t=>this._menuAction("duplicate",t)}
                          >
                            ${this._icon(r.df3)} ${this._t("tb_duplicate","Duplicate")}
                          </button>
                        </li>
                        <li>
                          <button type="button" @click=${t=>this._menuAction("copy",t)}>
                            ${this._icon(r.$BT)} ${this._t("menu_copy","Copy")}
                          </button>
                        </li>
                        <li>
                          <button type="button" @click=${t=>this._menuAction("cut",t)}>
                            ${this._icon(r.y0W)} ${this._t("menu_cut","Cut")}
                          </button>
                        </li>
                        <li class="divider" role="separator"></li>
                        <li>
                          <button
                            type="button"
                            @click=${t=>this._menuAction("forward",t)}
                          >
                            ${this._icon(r.QP)} ${this._t("tb_forward","Bring forward")}
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            @click=${t=>this._menuAction("backward",t)}
                          >
                            ${this._icon(r.cUU)} ${this._t("tb_backward","Send backward")}
                          </button>
                        </li>
                        <li>
                          <button type="button" @click=${t=>this._menuAction("front",t)}>
                            ${this._icon(r.lml)} ${this._t("tb_front","Bring to front")}
                          </button>
                        </li>
                        <li>
                          <button type="button" @click=${t=>this._menuAction("back",t)}>
                            ${this._icon(r.DDH)} ${this._t("tb_back","Send to back")}
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            @click=${t=>this._menuAction("reset-rotation",t)}
                          >
                            ${this._icon(r.VWA)} ${this._t("menu_reset_rotation","Reset rotation")}
                          </button>
                        </li>
                        <li class="divider" role="separator"></li>
                        <li>
                          <button type="button" @click=${t=>this._menuAction("lock",t)}>
                            ${n?s.qy`${this._icon(r.D1t)} ${this._t("menu_unlock","Unlock")}`:s.qy`${this._icon(r.kHm)} ${this._t("menu_lock","Lock")}`}
                          </button>
                        </li>
                        <li>
                          <button type="button" @click=${t=>this._menuAction("auto_h",t)}>
                            ${this._icon(r.JgA)}
                            ${(null===(i=this.layout)||void 0===i?void 0:i.auto_h)?this._t("menu_fixed_height","Fixed height"):this._t("menu_auto_height","Auto height")}
                          </button>
                        </li>
                        <li>
                          <button type="button" @click=${t=>this._menuAction("hidden",t)}>
                            ${a?s.qy`${this._icon(r._r5)} ${this._t("menu_show_here","Show on this screen")}`:s.qy`${this._icon(r.tQ_)} ${this._t("menu_hide_here","Hide on this screen")}`}
                          </button>
                        </li>
                        <li class="divider" role="separator"></li>
                        <li class="menu-label" role="presentation">${this._t("menu_pin_to","Pin to")}</li>
                        ${u.Ce.map(t=>{var e,i,o,n;return s.qy`
                            <li>
                              <button
                                type="button"
                                role="menuitemradio"
                                aria-checked=${(null!==(i=null===(e=this.layout)||void 0===e?void 0:e.pin)&&void 0!==i?i:"left")===t?"true":"false"}
                                class=${(null!==(n=null===(o=this.layout)||void 0===o?void 0:o.pin)&&void 0!==n?n:"left")===t?"active":""}
                                @click=${e=>this._setPin(t,e)}
                              >
                                ${this._icon(nt[t].icon)} ${this._t(nt[t].key,nt[t].label)}
                              </button>
                            </li>
                          `})}
                        <li class="divider" role="separator"></li>
                        <li>
                          <button
                            type="button"
                            class="danger"
                            @click=${t=>this._menuAction("delete",t)}
                          >
                            ${this._icon(r.y_G)} ${this._t("tb_delete","Delete")}
                          </button>
                        </li>
                      </ul>
                    `:s.s6}
              </div>
              ${o&&!n?s.qy`
                    ${rt.map(t=>s.qy`
                        <div
                          class="handle ${t}"
                          @pointerdown=${e=>this._onHandlePointerDown(e,t)}
                        ></div>
                      `)}
                  `:s.s6}
              ${this.selected&&!n?s.qy`
                    <div
                      class="rotate-zone nw"
                      title=${this._t("menu_rotate","Rotate")}
                      @pointerdown=${this._onRotatePointerDown}
                    >
                      ${this._icon(r.VWA)}
                    </div>
                  `:s.s6}
            `:s.s6}
      </div>
    `}};at.styles=s.AH`
    :host {
      display: block;
      position: absolute;
      box-sizing: border-box;
      outline: none;
    }
    :host([stacked]) {
      position: relative;
      left: auto !important;
      top: auto !important;
      width: 100% !important;
      height: auto !important;
      transform: none !important;
      margin-bottom: 12px;
    }
    .frame {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg, 12px));
    }
    :host([stacked]) .frame {
      height: auto;
    }
    .card-slot {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      overflow: hidden;
    }
    :host([stacked]) .card-slot {
      height: auto;
      overflow: visible;
    }
    .card-slot > * {
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }
    :host([stacked]) .card-slot > * {
      height: auto;
    }

    .overlay {
      position: absolute;
      inset: 0;
      opacity: 0;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 180ms ease-in-out;
      border-radius: inherit;
      z-index: 2;
      cursor: move;
    }
    .overlay.visible {
      opacity: 1;
      pointer-events: auto;
      /* Without this the browser claims touch drags for scrolling and cancels the pointer. */
      touch-action: none;
    }
    .control-overlay {
      position: absolute;
      inset: 0;
      opacity: 0.8;
      background-color: var(--primary-background-color);
      border: 1px solid var(--divider-color);
      border-radius: inherit;
      z-index: 0;
    }
    .control-icon {
      position: relative;
      z-index: 1;
      display: flex;
      color: var(--primary-text-color);
      border-radius: 50%;
      padding: 8px;
      background: var(--secondary-background-color);
    }
    .control-icon svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .more {
      position: absolute;
      right: -6px;
      top: -6px;
      z-index: 3;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    .more svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
    .more:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    .menu {
      position: absolute;
      right: 0;
      top: 28px;
      z-index: 4;
      min-width: 200px;
      padding: 4px 0;
      margin: 0;
      list-style: none;
      background: var(--card-background-color, var(--ha-card-background, #fff));
      color: var(--primary-text-color);
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
      border: 1px solid var(--divider-color);
    }
    .menu button {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
      padding: 10px 16px;
      border: none;
      background: transparent;
      color: inherit;
      font: inherit;
      font-size: 14px;
      cursor: pointer;
      text-align: left;
    }
    .menu button:hover,
    .menu button:focus-visible {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
      outline: none;
    }
    .menu button.danger {
      color: var(--error-color, #db4437);
    }
    .menu button.active {
      color: var(--primary-color);
    }
    .menu .menu-label {
      padding: 6px 12px 2px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: var(--secondary-text-color);
    }
    .menu button svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
      flex-shrink: 0;
    }
    .menu .divider {
      height: 1px;
      margin: 4px 0;
      background: var(--divider-color);
    }

    .handle {
      position: absolute;
      width: 10px;
      height: 10px;
      background: var(--primary-color);
      border: 1px solid var(--card-background-color, #fff);
      border-radius: 2px;
      z-index: 3;
      box-sizing: border-box;
      touch-action: none;
    }
    .handle.n {
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
      cursor: ns-resize;
    }
    .handle.s {
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      cursor: ns-resize;
    }
    .handle.e {
      right: -5px;
      top: 50%;
      transform: translateY(-50%);
      cursor: ew-resize;
    }
    .handle.w {
      left: -5px;
      top: 50%;
      transform: translateY(-50%);
      cursor: ew-resize;
    }
    .handle.ne {
      top: -5px;
      right: -5px;
      cursor: nesw-resize;
    }
    .handle.nw {
      top: -5px;
      left: -5px;
      cursor: nwse-resize;
    }
    .handle.se {
      bottom: -5px;
      right: -5px;
      cursor: nwse-resize;
    }
    .handle.sw {
      bottom: -5px;
      left: -5px;
      cursor: nesw-resize;
    }

    .rotate-zone {
      position: absolute;
      width: 22px;
      height: 22px;
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
      cursor: grab;
      touch-action: none;
      /* Only when the item is selected (highlighted) */
      opacity: 0;
      pointer-events: none;
      transition: opacity 120ms ease-in-out;
    }
    :host([selected]) .rotate-zone {
      opacity: 1;
      pointer-events: auto;
    }
    .rotate-zone svg {
      width: 14px;
      height: 14px;
      fill: currentColor;
      filter: drop-shadow(0 0 1px var(--card-background-color, #fff));
    }
    /* Single rotate control: top-left only */
    .rotate-zone.nw {
      top: -28px;
      left: -28px;
    }

    :host(:focus-visible) .frame {
      box-shadow: 0 0 0 2px var(--primary-color);
    }
    :host([selected]) .frame {
      box-shadow: 0 0 0 2px var(--primary-color);
    }
    :host([locked]) .overlay {
      cursor: default;
    }
    /* Height follows the card's content. */
    :host([auto-h]) .frame,
    :host([auto-h]) .card-slot,
    :host([auto-h]) .card-slot > * {
      height: auto;
    }
    /* Hidden on this screen: only drawn in edit mode, faded. */
    :host([hidden-here]) .card-slot {
      opacity: 0.35;
      filter: grayscale(1);
    }
    .badges {
      position: absolute;
      left: 6px;
      bottom: 6px;
      z-index: 3;
      display: flex;
      gap: 4px;
      pointer-events: none;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 22px;
      padding: 0 6px;
      border-radius: 11px;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    .badge.warn {
      background: var(--warning-color, #ffa600);
      color: #000;
    }
    .badge svg {
      width: 14px;
      height: 14px;
      fill: currentColor;
    }
  `,ot([(0,o.MZ)({attribute:!1})],at.prototype,"card",void 0),ot([(0,o.MZ)({attribute:!1})],at.prototype,"layout",void 0),ot([(0,o.MZ)({type:Number})],at.prototype,"cardIndex",void 0),ot([(0,o.MZ)({type:Boolean})],at.prototype,"editMode",void 0),ot([(0,o.MZ)({type:Boolean})],at.prototype,"selected",void 0),ot([(0,o.MZ)({type:Boolean})],at.prototype,"stacked",void 0),ot([(0,o.MZ)({type:Boolean})],at.prototype,"editingAllowed",void 0),ot([(0,o.MZ)({type:Number})],at.prototype,"scale",void 0),ot([(0,o.MZ)({attribute:!1})],at.prototype,"language",void 0),ot([(0,o.wk)()],at.prototype,"_hover",void 0),ot([(0,o.wk)()],at.prototype,"_menuOpen",void 0),ot([(0,o.wk)()],at.prototype,"_clipped",void 0),at=ot([(0,o.EM)(u.WS)],at);var lt=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const dt="ultra-card:freespace:snap",ht={fit_width:{size:"100% auto",repeat:"no-repeat"},cover:{size:"cover",repeat:"no-repeat"},contain:{size:"contain",repeat:"no-repeat"},stretch:{size:"100% 100%",repeat:"no-repeat"},repeat:{size:"auto",repeat:"repeat"},original:{size:"auto",repeat:"no-repeat"}},ct={wall:r.Fou,phone:r.BYm,desktop:r.T8n},ut={desktop:r.F5c,laptop:r.Jf0,tablet:r.Fzw,phone:r.vrq};let pt=class extends s.WF{get _selected(){return this._selection.length?this._selection[this._selection.length-1]:null}set _selected(t){this._selection=null===t?[]:[t]}constructor(){super(),this.index=0,this.narrow=!1,this.isStrategy=!1,this.cards=[],this.badges=[],this.sections=[],this._options=B(void 0),this._layouts=[],this._alignTarget="selection",this._snapOn=function(){var t;try{return"off"!==(null===(t=window.localStorage)||void 0===t?void 0:t.getItem(dt))}catch(t){return!0}}(),this._gaps=[],this._historyTick=0,this._scale=1,this._artboardWidth=1200,this._artboardHeight=800,this._artboardOffsetX=0,this._devicePreview=!1,this._showWidthBounds=!1,this._following=!1,this._frameLeft=0,this._frameWidth=0,this._selection=[],this._marquee=null,this._groupOrigins=null,this._marqueeStart=null,this._guides={vertical:[],horizontal:[]},this._discoverable=!1,this._connectInstalled=!1,this._liveBreakpoint="desktop",this._editBreakpoint="desktop",this._containerWidth=1200,this._history=new G,this._lastView=void 0,this._restoringView=void 0,this._measuredH=new Map,this._resizeObserver=null,this._optimistic=new Map,this._optimisticCardCount=-1,this._saving=!1,this._pendingSave=null,this._savingAll=!1,this._pendingAll=null,this._fillHeightPx=0,this._rawLayouts=[],this._pinWidth=-1,this._unsubSectionsWidth=null,this._onWindowResize=()=>{this._fillHeightPx=0,this._updateScale()},this._onFsMeasured=t=>{const{cardIndex:e,h:i}=t.detail;if(this._measuredH.get(e)===i)return;this._measuredH.set(e,i);const s=t=>t.map((t,s)=>s===e&&t.auto_h&&t.h!==i?Object.assign(Object.assign({},t),{h:i}):t);this._rawLayouts=s(this._rawLayouts),this._layouts=s(this._layouts),this._updateScale()},this._onFsToggleFlag=t=>{const{cardIndex:e,flag:i}=t.detail,s=this._selection.includes(e)?this._selection:[e];this._toggleFlag(s,"lock"===i?"locked":i)},this._onFsStart=t=>{var e;const i=t.detail;if(!this._editingAllowed())return;const s=this._artboardRect();s&&this._engine.setArtboardOrigin(s.left,s.top);const o=i.pointerEvent,n=o.shiftKey||o.ctrlKey||o.metaKey,r=this._selection.includes(i.cardIndex);n||r||(this._selection=V(this._layouts,i.cardIndex)),this._groupOrigins="move"===i.mode&&this._selection.length>1&&this._selection.includes(i.cardIndex)?new Map(this._movable(this._selection).filter(t=>t!==i.cardIndex).map(t=>[t,this._layouts[t]])):null,this._engine.pointerDown(i.pointerEvent,Object.assign(Object.assign({cardIndex:i.cardIndex,mode:i.mode},void 0!==i.handle?{handle:i.handle}:{}),{origin:null!==(e=this._layouts[i.cardIndex])&&void 0!==e?e:i.origin,captureTarget:i.captureTarget}))},this._onPointerMove=t=>{this._engine.pointerMove(t)},this._onPointerUp=t=>{this._engine.pointerUp(t)},this._onMarqueeMove=t=>{const e=this._marqueeStart;if(!e||t.pointerId!==e.pointerId)return;if(!e.moved&&Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)<4)return;e.moved=!0;const i=this._artboardPoint(t.clientX,t.clientY);if(!i)return;const s={left:Math.min(e.x,i.x),top:Math.min(e.y,i.y),right:Math.max(e.x,i.x),bottom:Math.max(e.y,i.y)};this._marquee=s;const o=Y(this._layouts,function(t,e){const i=[];return t.forEach((t,s)=>{const o=O(t);o.left<e.right&&o.right>e.left&&o.top<e.bottom&&o.bottom>e.top&&i.push(s)}),i}(this._layouts,s));this._selection=e.additive?[...new Set([...e.base,...o])]:o},this._onMarqueeUp=t=>{const e=this._marqueeStart;e&&t.pointerId===e.pointerId&&(window.removeEventListener("pointermove",this._onMarqueeMove),window.removeEventListener("pointerup",this._onMarqueeUp),window.removeEventListener("pointercancel",this._onMarqueeUp),this._marqueeStart=null,this._marquee=null,e.moved||e.additive||(this._selection=[]))},this._onFsSelect=t=>{const{cardIndex:e}=t.detail;this._selection.includes(e)||(this._selection=V(this._layouts,e))},this._onArtboardPointerDown=t=>{if(!this._editMode())return;if(t.composedPath().some(t=>t instanceof HTMLElement&&t.tagName.toLowerCase()===u.WS))return;const e=this._artboardPoint(t.clientX,t.clientY);this._editingAllowed()&&"touch"!==t.pointerType&&0===t.button&&e?(t.preventDefault(),this._marqueeStart={x:e.x,y:e.y,additive:t.shiftKey||t.ctrlKey||t.metaKey,base:[...this._selection],pointerId:t.pointerId,moved:!1,clientX:t.clientX,clientY:t.clientY},window.addEventListener("pointermove",this._onMarqueeMove),window.addEventListener("pointerup",this._onMarqueeUp),window.addEventListener("pointercancel",this._onMarqueeUp)):this._selected=null},this._onFsEdit=t=>{const{cardIndex:e}=t.detail;this._editCard(e)},this._onFsDuplicate=t=>{const{cardIndex:e}=t.detail;this.dispatchEvent(new CustomEvent("ll-duplicate-card",{detail:{path:[this.index,e]},bubbles:!0,composed:!0}))},this._onFsCopy=t=>{const{cardIndex:e}=t.detail;this.dispatchEvent(new CustomEvent("ll-copy-card",{detail:{path:[this.index,e]},bubbles:!0,composed:!0}))},this._onFsCut=t=>{const{cardIndex:e}=t.detail;this.dispatchEvent(new CustomEvent("ll-copy-card",{detail:{path:[this.index,e]},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("ll-delete-card",{detail:{path:[this.index,e],silent:!0},bubbles:!0,composed:!0}))},this._onFsDelete=t=>{const{cardIndex:e}=t.detail;this.dispatchEvent(new CustomEvent("ll-delete-card",{detail:{path:[this.index,e],silent:!1},bubbles:!0,composed:!0}))},this._onFsZOrder=async t=>{const{cardIndex:e,action:i}=t.detail,s=function(t,e,i){if(e<0||e>=t.length)return t.map(t=>Object.assign({},t));const s=t.map(t=>Object.assign({},t)),o=s.map(t=>t.z),n=Math.max(0,...o),r=Math.min(0,...o),a=s[e].z;switch(i){case"front":s[e].z=n+1;break;case"back":s[e].z=r-1;break;case"forward":{const t=o.filter(t=>t>a).sort((t,e)=>t-e);s[e].z=t.length?t[0]+.001:a+1,X(s);break}case"backward":{const t=o.filter(t=>t<a).sort((t,e)=>e-t);s[e].z=t.length?t[0]-.001:a-1,X(s);break}}return s}(this._layouts,e,i);await this._persistAllLayouts(s)},this._onFsResetRotation=async t=>{const{cardIndex:e}=t.detail,i=this._layouts[e];i&&!i.locked&&await this._updateCardLayout(e,Object.assign(Object.assign({},i),{r:0}))},this._onFsSetPin=async t=>{const{cardIndex:e,pin:i}=t.detail;this._setPin(e,i)},this._onKeyDown=t=>{if(!this._editMode()||!this._discoverable)return;const e=t.composedPath()[0];if(e&&("INPUT"===e.tagName||"TEXTAREA"===e.tagName))return;const i=t.key.toLowerCase();if((t.metaKey||t.ctrlKey)&&("z"===i||"y"===i))return t.preventDefault(),void this._undoRedo("y"===i||t.shiftKey?"redo":"undo");if(!this._editingAllowed())return;if((t.metaKey||t.ctrlKey)&&"a"===t.key.toLowerCase())return t.preventDefault(),void(this._selection=this._layouts.map((t,e)=>e));if(null===this._selected)return;const s=this._selected,o=this._layouts[s];if(!o)return;const n=t.shiftKey?10:1,r=this._selection.length>1;if("Escape"===t.key)return this._selected=null,void this._engine.cancel();if("Enter"===t.key)return t.preventDefault(),void this._editCard(s);if("Delete"===t.key||"Backspace"===t.key)return t.preventDefault(),r?void this._deleteSelection():void this.dispatchEvent(new CustomEvent("ll-delete-card",{detail:{path:[this.index,s],silent:!1},bubbles:!0,composed:!0}));if(r&&t.key.startsWith("Arrow")){t.preventDefault();const e="ArrowLeft"===t.key?-n:"ArrowRight"===t.key?n:0,i="ArrowUp"===t.key?-n:"ArrowDown"===t.key?n:0,s=new Set(this._movable(this._selection));if(!s.size)return;return void this._persistAllLayouts(this._layouts.map((t,o)=>s.has(o)?v(Object.assign(Object.assign({},t),{x:t.x+e,y:t.y+i})):t))}if("["===t.key)return t.preventDefault(),void this._onFsZOrder(new CustomEvent("fs-z-order",{detail:{cardIndex:s,action:"backward"}}));if("]"===t.key)return t.preventDefault(),void this._onFsZOrder(new CustomEvent("fs-z-order",{detail:{cardIndex:s,action:"forward"}}));if(o.locked&&t.key.startsWith("Arrow"))return;let a=o;if("ArrowLeft"===t.key)a=Object.assign(Object.assign({},o),{x:o.x-n});else if("ArrowRight"===t.key)a=Object.assign(Object.assign({},o),{x:o.x+n});else if("ArrowUp"===t.key)a=Object.assign(Object.assign({},o),{y:Math.max(0,o.y-n)});else{if("ArrowDown"!==t.key)return;a=Object.assign(Object.assign({},o),{y:o.y+n})}t.preventDefault(),this._updateCardLayout(s,a)},this._engine=new Z({onMove:t=>this._onInteractionMove(t),onEnd:(t,e)=>this._onInteractionEnd(t,e),onClick:(t,e)=>{this._selection=e?this._selection.includes(t)?this._selection.filter(e=>e!==t):[...this._selection,t]:V(this._layouts,t)},onDoubleClick:t=>this._editCard(t)})}setConfig(t){this._config=t,this._options=B(t),this._rebuildLayouts()}connectedCallback(){super.connectedCallback(),this._engine.attachWindowListeners(),this._unsubSectionsWidth=l.Es.subscribe(()=>{this._applyFullWidthAttr(),this._fillHeightPx=0,this._updateScale()}),this._refreshGating(),this._applyFullWidthAttr(),window.addEventListener("resize",this._onWindowResize),this.addEventListener("pointermove",this._onPointerMove),this.addEventListener("pointerup",this._onPointerUp),this.addEventListener("pointercancel",this._onPointerUp),this.addEventListener("fs-interaction-start",this._onFsStart),this.addEventListener("fs-select-card",this._onFsSelect),this.addEventListener("fs-edit-card",this._onFsEdit),this.addEventListener("fs-duplicate-card",this._onFsDuplicate),this.addEventListener("fs-copy-card",this._onFsCopy),this.addEventListener("fs-cut-card",this._onFsCut),this.addEventListener("fs-delete-card",this._onFsDelete),this.addEventListener("fs-z-order",this._onFsZOrder),this.addEventListener("fs-reset-rotation",this._onFsResetRotation),this.addEventListener("fs-set-pin",this._onFsSetPin),this.addEventListener("fs-toggle-flag",this._onFsToggleFlag),this.addEventListener("fs-measured",this._onFsMeasured),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var t,e;super.disconnectedCallback(),this._engine.detachWindowListeners(),window.removeEventListener("pointermove",this._onMarqueeMove),window.removeEventListener("pointerup",this._onMarqueeUp),window.removeEventListener("pointercancel",this._onMarqueeUp),this._marqueeStart=null,null===(t=this._unsubSectionsWidth)||void 0===t||t.call(this),this._unsubSectionsWidth=null,null===(e=this._resizeObserver)||void 0===e||e.disconnect(),this._resizeObserver=null,window.removeEventListener("resize",this._onWindowResize),this.removeEventListener("pointermove",this._onPointerMove),this.removeEventListener("pointerup",this._onPointerUp),this.removeEventListener("pointercancel",this._onPointerUp),this.removeEventListener("fs-interaction-start",this._onFsStart),this.removeEventListener("fs-select-card",this._onFsSelect),this.removeEventListener("fs-edit-card",this._onFsEdit),this.removeEventListener("fs-duplicate-card",this._onFsDuplicate),this.removeEventListener("fs-copy-card",this._onFsCopy),this.removeEventListener("fs-cut-card",this._onFsCut),this.removeEventListener("fs-delete-card",this._onFsDelete),this.removeEventListener("fs-z-order",this._onFsZOrder),this.removeEventListener("fs-reset-rotation",this._onFsResetRotation),this.removeEventListener("fs-set-pin",this._onFsSetPin),this.removeEventListener("fs-toggle-flag",this._onFsToggleFlag),this.removeEventListener("fs-measured",this._onFsMeasured),this.removeEventListener("keydown",this._onKeyDown)}firstUpdated(){const t=this.renderRoot.querySelector(".viewport");t&&"undefined"!=typeof ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>this._updateScale()),this._resizeObserver.observe(t)),this._updateScale()}willUpdate(t){var e;if(t.has("index")&&(this._history.clear(),this._lastView=void 0,this._historyTick++),(t.has("cards")||t.has("_config"))&&this._rebuildLayouts(),t.has("hass")&&this._refreshGating(),t.has("lovelace")){const t=!!(null===(e=this.lovelace)||void 0===e?void 0:e.editMode),i=t!==this.hasAttribute("edit");this.toggleAttribute("edit",t),t||(this._selected=null,this._guides={vertical:[],horizontal:[]}),i&&this._rebuildLayouts(),this._trackHistory(t)}}_trackHistory(t){var e,i,s;const o=null===(s=null===(i=null===(e=this.lovelace)||void 0===e?void 0:e.config)||void 0===i?void 0:i.views)||void 0===s?void 0:s[this.index];if(!t)return(this._history.canUndo||this._history.canRedo)&&(this._history.clear(),this._historyTick++),this._restoringView=void 0,void(this._lastView=o);void 0!==this._lastView&&void 0!==o&&o!==this._lastView&&(void 0===this._restoringView||o!==this._restoringView&&JSON.stringify(o)!==JSON.stringify(this._restoringView)?(this._history.record(this._lastView),this._historyTick++):this._restoringView=void 0),this._lastView=o}_busy(){return this._saving||this._savingAll||!!this._engine.state}async _undoRedo(t){var e,i,s;if(!(null===(e=this.lovelace)||void 0===e?void 0:e.saveConfig)||this._busy())return;const o=null===(s=null===(i=this.lovelace.config)||void 0===i?void 0:i.views)||void 0===s?void 0:s[this.index];if(void 0===o)return;const n="undo"===t?this._history.undo(o):this._history.redo(o);if(this._historyTick++,void 0===n)return;const r=[...this.lovelace.config.views];r[this.index]=n,this._restoringView=n,this._selection=[],this._optimistic.clear();try{await this.lovelace.saveConfig(Object.assign(Object.assign({},this.lovelace.config),{views:r}))}catch(t){throw this._restoringView=void 0,t}finally{this._rebuildLayouts()}}updated(t){(t.has("_options")||t.has("_layouts")||t.has("_editBreakpoint"))&&this._updateScale()}_lang(){var t,e,i;return null!==(i=null===(e=null===(t=this.hass)||void 0===t?void 0:t.locale)||void 0===e?void 0:e.language)&&void 0!==i?i:"en"}_t(t,e){return(0,c.kg)(`freespace.${t}`,this._lang(),e)}_refreshGating(){this._connectInstalled=(0,d.Jo)(this.hass),this._discoverable=a.D.isDiscoverable(this.hass)}_applyFullWidthAttr(){const t=l.Es.get().mode;this.toggleAttribute("data-uc-full-width","full"===t)}_preferFullWidth(){return"full"===l.Es.get().mode}_cardsOutsideWidthBounds(){if(!(this._showWidthBounds&&this._artboardWidth>0))return!1;const t=this._artboardWidth;return this._layouts.some(e=>e.x<0||e.x+e.w>t)}_editMode(){var t;return!!(null===(t=this.lovelace)||void 0===t?void 0:t.editMode)&&!this.isStrategy}_activeBreakpoint(){return this._editMode()?this._editBreakpoint:this._liveBreakpoint}_optKey(t,e){return`${null!=e?e:this._activeBreakpoint()}:${t}`}_canvasWidth(){return I(this._options,this._activeBreakpoint())}_editingAllowed(){return this._editMode()&&this._discoverable&&!this._useStacked()&&!this._following}_useStacked(){if("phone"!==this._activeBreakpoint())return!1;const t=this._viewConfig();return function(t,e){if("stack"!==e.narrow)return!1;for(const e of t)if(A(e)&&q(F(e.view_layout),"phone"))return!1;return!0}(Array.isArray(t.cards)?t.cards:[],this._options)}_viewConfig(){var t,e,i,s,o;return null!==(o=null!==(s=null===(i=null===(e=null===(t=this.lovelace)||void 0===t?void 0:t.config)||void 0===e?void 0:e.views)||void 0===i?void 0:i[this.index])&&void 0!==s?s:this._config)&&void 0!==o?o:{}}_rebuildLayouts(){this._computeLayouts(),this._updateScale()}_followsDesktop(t){return("laptop"===t||"tablet"===t)&&!this._isCustom(t,{views:[this._viewConfig()]},0)}_computeLayouts(){var t,e;const i=this._activeBreakpoint();this._following=this._followsDesktop(i);const s=this._following?"desktop":i,o=this._viewConfig(),n=Array.isArray(o.cards)?o.cards:[],r=Math.max(null!==(e=null===(t=this.cards)||void 0===t?void 0:t.length)&&void 0!==e?e:0,n.length);r!==this._optimisticCardCount&&(this._optimistic.clear(),this._measuredH.clear(),this._optimisticCardCount=r);const a=Array.from({length:r},(t,e)=>{var i;return null!==(i=n[e])&&void 0!==i?i:{}}),l=Array.from({length:r},(t,e)=>{var i;return null!==(i=this._optimistic.get(this._optKey(e,s)))&&void 0!==i?i:null});this._rawLayouts=this._withMeasured(H(a,this._options,l,s)),this._layouts=this._rawLayouts,this._pinWidth=-1}_withMeasured(t){return this._measuredH.size?t.map((t,e)=>{const i=this._measuredH.get(e);return t.auto_h&&void 0!==i&&i!==t.h?Object.assign(Object.assign({},t),{h:i}):t}):t}_movable(t){return t.filter(t=>{const e=this._layouts[t];return!!e&&!e.locked})}_toggleFlag(t,e){if(!this._editingAllowed()||!t.length)return;const i=!t.every(t=>{var i;return null===(i=this._layouts[t])||void 0===i?void 0:i[e]});this._persistAllLayouts(function(t,e,i,s){const o=new Set(e);return t.map((t,e)=>{if(!o.has(e))return t;const n=Object.assign({},t);return s?n[i]=!0:delete n[i],n})}(this._layouts,t,e,i))}_setGroupFor(t,e){if(!this._editingAllowed()||!t.length)return;const i=e?t:Y(this._layouts,t);this._persistAllLayouts(function(t,e,i){const s=new Set(e);return t.map((t,e)=>{if(!s.has(e))return t;const{group:o}=t,n=function(t,e){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(i[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(t);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(t,s[o])&&(i[s[o]]=t[s[o]])}return i}(t,["group"]);return i?Object.assign(Object.assign({},n),{group:i}):n})}(this._layouts,i,e?function(t){const e=new Set(t.map(t=>t.group).filter(Boolean));let i=1;for(;e.has(`g${i}`);)i++;return`g${i}`}(this._layouts):null)),this._selection=i}_commitLayouts(t){this._rawLayouts=t,this._pinWidth=this._artboardWidth,this._layouts=t}_commitLayout(t,e){this._optimistic.set(this._optKey(t),e),this._commitLayouts(this._layouts.map((i,s)=>s===t?e:i))}_grid(){return this._snapOn?this._options.grid:0}_availableViewportPx(){if("undefined"==typeof window)return 0;if(this._fillHeightPx>0)return this._fillHeightPx;const t=this.getBoundingClientRect().top,e=t>=-40&&t<window.innerHeight?Math.floor(window.innerHeight-Math.max(0,t)-8):Math.floor(.85*window.innerHeight);return this._fillHeightPx=Math.max(320,e),this._fillHeightPx}_artboardRect(){var t,e;const i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(".artboard");return null!==(e=null==i?void 0:i.getBoundingClientRect())&&void 0!==e?e:null}_onInteractionMove(t){var e,i;if(null===(e=this._layouts[t.cardIndex])||void 0===e?void 0:e.locked)return;let s=t.current;if("resize"===t.mode&&/[ns]/.test(null!==(i=t.handle)&&void 0!==i?i:"")&&s.auto_h){const{auto_h:e}=s,i=function(t,e){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(i[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(t);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(t,s[o])&&(i[s[o]]=t[s[o]])}return i}(s,["auto_h"]);s=i,this._measuredH.delete(t.cardIndex)}const o="move"===t.mode?this._groupOrigins:null;if("move"===t.mode){const e=this._layouts.filter((e,i)=>i===t.cardIndex||!(null==o?void 0:o.has(i))),i=e.indexOf(this._layouts[t.cardIndex]),n=function(t,e){const i=[],s=[];return t.forEach((t,o)=>{if(o===e)return;const n=O(t);i.push(n.left,(n.left+n.right)/2,n.right),s.push(n.top,(n.top+n.bottom)/2,n.bottom)}),{vertical:i,horizontal:s}}(e,i),r=function(t,e,i=6){const s=O(t),o=[s.left,(s.left+s.right)/2,s.right],n=[s.top,(s.top+s.bottom)/2,s.bottom];let r=0,a=0;const l=[],d=[];let h=i+1;for(const t of e.vertical)for(const e of o){const s=t-e;Math.abs(s)<h?(h=Math.abs(s),r=s,l.length=0,l.push(t)):Math.abs(s)===h&&Math.abs(s)<=i&&l.push(t)}h>i&&(r=0,l.length=0);let c=i+1;for(const t of e.horizontal)for(const e of n){const s=t-e;Math.abs(s)<c?(c=Math.abs(s),a=s,d.length=0,d.push(t)):Math.abs(s)===c&&Math.abs(s)<=i&&d.push(t)}return c>i&&(a=0,d.length=0),{layout:v(Object.assign(Object.assign({},t),{x:t.x+r,y:t.y+a})),activeV:l,activeH:d}}(s,n);s=r.layout,this._guides={vertical:r.activeV,horizontal:r.activeH}}else this._guides={vertical:[],horizontal:[]};if(this._grid()>0&&"rotate"!==t.mode&&(s=b(s,this._grid())),!o)return this._commitLayout(t.cardIndex,s),void(this._gaps="rotate"===t.mode?[]:function(t,e,i=new Set){const s=t[e];if(!s)return[];const o=O(s),n={left:null,right:null,top:null,bottom:null},r=t=>t?t.to-t.from:1/0;return t.forEach((t,s)=>{if(s===e||i.has(s)||t.hidden)return;const a=O(t),l=Math.min(o.bottom,a.bottom)-Math.max(o.top,a.top),d=Math.min(o.right,a.right)-Math.max(o.left,a.left);if(l>0){const t=(Math.max(o.top,a.top)+Math.min(o.bottom,a.bottom))/2;if(a.right<=o.left){const e={axis:"x",from:a.right,to:o.left,at:t};r(e)<r(n.left)&&(n.left=e)}else if(a.left>=o.right){const e={axis:"x",from:o.right,to:a.left,at:t};r(e)<r(n.right)&&(n.right=e)}}if(d>0){const t=(Math.max(o.left,a.left)+Math.min(o.right,a.right))/2;if(a.bottom<=o.top){const e={axis:"y",from:a.bottom,to:o.top,at:t};r(e)<r(n.top)&&(n.top=e)}else if(a.top>=o.bottom){const e={axis:"y",from:o.bottom,to:a.top,at:t};r(e)<r(n.bottom)&&(n.bottom=e)}}}),Object.values(n).filter(t=>!!t&&t.to-t.from>0)}(this._layouts,t.cardIndex));this._gaps=[];const n=s.x-t.origin.x,r=s.y-t.origin.y;this._commitLayouts(this._layouts.map((e,i)=>{if(i===t.cardIndex)return s;const a=o.get(i);return a?v(Object.assign(Object.assign({},a),{x:a.x+n,y:a.y+r})):e}))}async _onInteractionEnd(t,e){var i,s;this._guides={vertical:[],horizontal:[]},this._gaps=[];const o=this._groupOrigins;if(this._groupOrigins=null,null===(i=this._layouts[t.cardIndex])||void 0===i?void 0:i.locked)return;if(e)return this._optimistic.delete(this._optKey(t.cardIndex)),null==o||o.forEach((t,e)=>this._optimistic.delete(this._optKey(e))),void this._rebuildLayouts();if(o)return void await this._persistAllLayouts(this._layouts);let n=null!==(s=this._layouts[t.cardIndex])&&void 0!==s?s:t.current;this._grid()>0&&"rotate"!==t.mode&&(n=b(n,this._grid())),this._commitLayout(t.cardIndex,n),await this._persistLayout(t.cardIndex,n)}_artboardPoint(t,e){const i=this._artboardRect();return i&&this._scale>0?{x:(t-i.left)/this._scale,y:(e-i.top)/this._scale}:null}async _persistLayout(t,e){var i;if(!(null===(i=this.lovelace)||void 0===i?void 0:i.saveConfig))return;let s=this._activeBreakpoint();if(this._saving)this._pendingSave={cardIndex:t,layout:e,breakpoint:s};else{this._saving=!0;try{let i={cardIndex:t,layout:e,breakpoint:s};for(;i;){t=i.cardIndex,e=i.layout,s=i.breakpoint,this._pendingSave=null;const o=R(this._breakpointBase(this.lovelace.config,s),this.index,t,e,this._grid(),s);await this.lovelace.saveConfig(o),this._dropOptimistic(this._optKey(t,s),e),i=this._pendingSave}}catch(e){console.warn("[FreeSpace] save failed",e),this._optimistic.delete(this._optKey(t,s)),this._rebuildLayouts()}finally{this._saving=!1}}}async _persistAllLayouts(t){var e;if(!(null===(e=this.lovelace)||void 0===e?void 0:e.saveConfig))return;const i=this._activeBreakpoint();if(t.forEach((t,e)=>this._optimistic.set(this._optKey(e,i),t)),this._commitLayouts(t),this._savingAll)return void(this._pendingAll={layouts:t,bp:i});this._savingAll=!0;let s={layouts:t,bp:i};try{for(;s;){const t=s;this._pendingAll=null;try{const e=this._breakpointBase(this.lovelace.config,t.bp);await this.lovelace.saveConfig(K(e,this.index,t.layouts,t.bp)),t.layouts.forEach((e,i)=>this._dropOptimistic(this._optKey(i,t.bp),e))}catch(e){console.warn("[FreeSpace] save failed",e),t.layouts.forEach((e,i)=>this._dropOptimistic(this._optKey(i,t.bp),e)),this._rebuildLayouts()}s=this._pendingAll}}finally{this._savingAll=!1}}_dropOptimistic(t,e){this._optimistic.get(t)===e&&this._optimistic.delete(t)}_isCustom(t,e,i){var s,o,n;void 0===e&&(e=null===(s=this.lovelace)||void 0===s?void 0:s.config),void 0===i&&(i=this.index);const r=null===(n=null===(o=null==e?void 0:e.views)||void 0===o?void 0:o[i])||void 0===n?void 0:n.cards;return function(t,e){return"desktop"===e||t.some(t=>A(t)&&q(F(t.view_layout),e))}(Array.isArray(r)?r:[],t)}_breakpointBase(t,e){return"desktop"===e||this._isCustom(e,t)?t:N(t,this.index,e)}async _setBreakpointMode(t){var e;const i=this._editBreakpoint;if(!(null===(e=this.lovelace)||void 0===e?void 0:e.saveConfig)||"desktop"===i)return;if("custom"===t===this._isCustom(i))return;const s=p.HL[i].label;if("desktop"!==t||await h.W.confirm(this._t("reset_to_desktop_title","Use the Desktop layout?").replace("{bp}",s),this._t("reset_to_desktop_body","Your {bp} positions will be removed and {bp} will follow the Desktop layout again.").replace(/\{bp\}/g,s),{destructive:!0,confirmText:this._t("reset_to_desktop_confirm","Use Desktop")}))try{const e=this.lovelace.config,s="custom"===t?N(e,this.index,i):function(t,e,i){if("desktop"===i)return t;const s=Array.isArray(null==t?void 0:t.views)?[...t.views]:[],o=A(s[e])?Object.assign({},s[e]):{},n=Array.isArray(o.cards)?[...o.cards]:[];for(let t=0;t<n.length;t++){if(!A(n[t]))continue;const e=F(n[t].view_layout);e[i]&&(delete e[i],n[t]=Object.assign(Object.assign({},n[t]),{view_layout:W(e)}))}return o.cards=n,s[e]=o,Object.assign(Object.assign({},t),{views:s})}(e,this.index,i);this._selection=[],this._optimistic.clear(),await this.lovelace.saveConfig(s),this._rebuildLayouts()}catch(t){console.warn("[FreeSpace] breakpoint layout change failed",t)}}async _deleteSelection(){var t;const e=[...this._selection];if(e.length&&(null===(t=this.lovelace)||void 0===t?void 0:t.saveConfig)&&await h.W.confirm(this._t("delete_selected_title","Delete {count} cards?").replace("{count}",String(e.length)),this._t("delete_selected_body","The selected cards will be removed from this view."),{destructive:!0,confirmText:this._t("tb_delete","Delete")}))try{this._selection=[],this._optimistic.clear(),await this.lovelace.saveConfig(function(t,e,i){const s=new Set(i),o=Array.isArray(null==t?void 0:t.views)?[...t.views]:[],n=A(o[e])?Object.assign({},o[e]):{},r=Array.isArray(n.cards)?n.cards:[];return n.cards=r.filter((t,e)=>!s.has(e)),o[e]=n,Object.assign(Object.assign({},t),{views:o})}(this.lovelace.config,this.index,e))}catch(t){console.warn("[FreeSpace] delete failed",t)}}_alignSelection(t){const e=this._movable(this._selection);e.length&&this._persistAllLayouts("canvas"===this._alignTarget?function(t,e,i,s){const o=e.map(e=>t[e]).filter(Boolean);if(!o.length)return t;const n=w(o);let r=0,a=0;if("left"===i)r=m-n.left;else if("center"===i)r=(s-(n.right-n.left))/2-n.left;else if("right"===i)r=s-m-n.right;else{if("top"!==i)return t;a=m-n.top}const l=new Set(e);return t.map((t,e)=>l.has(e)?v(Object.assign(Object.assign({},t),{x:Math.round(t.x+r),y:Math.round(t.y+a)})):t)}(this._layouts,e,t,this._artboardWidth):function(t,e,i){const s=e.map(e=>t[e]).filter(Boolean);if(s.length<2)return t;const o=w(s),n=new Set(e);return t.map((t,e)=>{if(!n.has(e))return t;let{x:s,y:r}=t;return"left"===i?s=o.left:"right"===i?s=o.right-t.w:"center"===i?s=(o.left+o.right)/2-t.w/2:"top"===i?r=o.top:"bottom"===i?r=o.bottom-t.h:"middle"===i&&(r=(o.top+o.bottom)/2-t.h/2),v(Object.assign(Object.assign({},t),{x:Math.round(s),y:Math.round(r)}))})}(this._layouts,e,t))}_resetSelectionToDesktop(){const t=this._activeBreakpoint();if("desktop"===t||!this._selection.length)return;const e=U(this._viewConfig(),t),i=new Set(this._movable(this._selection));this._persistAllLayouts(this._layouts.map((t,s)=>i.has(s)&&e[s]?g(e[s],this._artboardWidth):t))}_resetDesktopButton(){if("desktop"===this._activeBreakpoint())return s.s6;const t=p.HL[this._activeBreakpoint()].label;return this._tbButton({icon:r.r6y,label:this._t("tb_reset_desktop","Reset to Desktop"),title:this._t("tb_reset_desktop_hint","Put the selected cards back where Desktop has them, shrunk to fit {bp}").replace("{bp}",t),onClick:()=>this._resetSelectionToDesktop()})}_distributeSelection(t){const e=this._movable(this._selection);e.length<3||this._persistAllLayouts(function(t,e,i){if(e.length<3)return t;const s="horizontal"===i?"x":"y",o="horizontal"===i?"w":"h",n=[...e].filter(e=>t[e]).sort((e,i)=>t[e][s]-t[i][s]),r=t[n[0]],a=t[n[n.length-1]],l=(a[s]+a[o]-r[s]-n.reduce((e,i)=>e+t[i][o],0))/(n.length-1),d=[...t];let h=r[s];for(const e of n)d[e]=v(Object.assign(Object.assign({},t[e]),{[s]:Math.round(h)})),h+=t[e][o]+l;return d}(this._layouts,e,t))}_pinSelection(t){const e=new Set(this._selection);this._persistAllLayouts(this._layouts.map((i,s)=>e.has(s)?y(i,t,this._artboardWidth):i))}_editCard(t){this._selected=t,this.dispatchEvent(new CustomEvent("ll-edit-card",{detail:{path:[this.index,t]},bubbles:!0,composed:!0}))}_setEditBreakpoint(t){t!==this._editBreakpoint&&(this._selected=null,this._editBreakpoint=t,this._fillHeightPx=0,this._rebuildLayouts(),this._updateScale())}_updateScale(){var t;const e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(".viewport");if(!e)return this._scale=1,this._artboardOffsetX=0,this._devicePreview=!1,this._showWidthBounds=!1,void this._engine.setScale(1);const i=e.clientWidth||this._canvasWidth();this._containerWidth=i;const s=(0,p.iW)(i);if(s!==this._liveBreakpoint&&(this._liveBreakpoint=s,this._editMode()||this._computeLayouts()),this._useStacked())return this._scale=1,this._artboardWidth=i,this._artboardOffsetX=0,this._devicePreview=!1,this._showWidthBounds=!1,0!==this._pinWidth&&(this._pinWidth=0,this._layouts=this._rawLayouts),this._engine.setScale(1),this._artboardHeight=T(this._layouts,this._options.min_height),e.style.height="",void(e.style.minHeight="");const o=this._canvasWidth(),n=this._preferFullWidth(),r=this._editMode()&&p.HL[this._editBreakpoint].minWidth<p.HL[s].minWidth,a="screen"===this._options.fit&&!r;let l=0;if(a){const t=this._following?I(this._options,"desktop"):o,s=this._following?this._rawLayouts:f(this._rawLayouts,t),n=this._editMode()?s:z(s),r=Math.max(function(t,e=16){return t.length?Math.max(...t.map(t=>O(t).bottom))+e:0}(n),1),a=e.getBoundingClientRect().top-this.getBoundingClientRect().top;l=Math.max(200,this._availableViewportPx()-Math.max(0,Math.round(a))),this._scale=function(t,e,i,s){return t>0&&e>0&&i>0&&s>0?Math.min(i/t,s/e):1}(t,r,i,l),this._devicePreview=!1,this._showWidthBounds=!1,this._artboardWidth=t,this._artboardOffsetX=Math.max(0,Math.round((i-t*this._scale)/2)),this._following&&(this._frameLeft=this._artboardOffsetX,this._frameWidth=Math.round(t*this._scale),this._engine.setScale(this._scale),this._pinWidth=-2,this._layouts=this._rawLayouts)}else if(this._following){const t=r?o:i,e=r?Math.max(0,Math.round((i-t)/2)):0,s=x(z(this._rawLayouts),t);this._devicePreview=r,this._showWidthBounds=r,this._frameLeft=e,this._frameWidth=t,this._scale=s.scale,this._artboardOffsetX=e+s.tx,this._artboardWidth=Math.max(s.right,1),this._engine.setScale(this._scale),this._pinWidth=-2,this._layouts=this._rawLayouts}else r?(this._devicePreview=!0,this._showWidthBounds=!0,this._artboardWidth=o,this._scale=1,this._artboardOffsetX=Math.max(0,Math.round((i-o)/2))):!n&&o>0&&o<i?(this._devicePreview=!1,this._showWidthBounds=!0,this._artboardWidth=o,this._scale=1,this._artboardOffsetX=Math.max(0,Math.round((i-o)/2))):o>i&&i>0&&!n?(this._devicePreview=!1,this._showWidthBounds=!1,this._artboardWidth=o,this._scale=i/o,this._artboardOffsetX=0):(this._devicePreview=!1,this._showWidthBounds=!1,this._artboardWidth=Math.max(i,1),this._scale=1,this._artboardOffsetX=0);if(this._following||(this._frameLeft=this._artboardOffsetX,this._frameWidth=Math.round(this._artboardWidth*this._scale),this._engine.setScale(this._scale),this._pinWidth!==this._artboardWidth&&(this._pinWidth=this._artboardWidth,this._layouts=f(this._rawLayouts,this._artboardWidth))),a)return this._artboardHeight=Math.max(Math.ceil(l/this._scale),1),e.style.height=`${l}px`,void(e.style.minHeight="");const d=T(this._editMode()?this._layouts:this._layouts.filter(t=>!t.hidden),this._options.min_height),h=this._availableViewportPx(),c=this._scale>0&&h>0?Math.ceil(h/this._scale):0;this._artboardHeight=Math.max(d,c,1),e.style.height=this._artboardHeight*this._scale+"px",e.style.minHeight=""}async _updateCardLayout(t,e){this._commitLayout(t,e),await this._persistLayout(t,e)}_setPin(t,e){var i;const s=this._layouts[t];s&&(null!==(i=s.pin)&&void 0!==i?i:"left")!==e&&this._updateCardLayout(t,y(s,e,this._artboardWidth))}_align(t,e){const i=this._layouts[t];i&&!i.locked&&this._updateCardLayout(t,function(t,e,i){let{x:s,y:o}=t;return"left"===e?s=m:"right"===e?s=i-t.w-m:"center"===e?s=(i-t.w)/2:"top"===e&&(o=m),v(Object.assign(Object.assign({},t),{x:Math.round(s),y:Math.round(o)}))}(i,e,this._artboardWidth))}_setField(t,e,i){const s=this._layouts[t],o=Number(i);if(!s||s.locked||""===i.trim()||!Number.isFinite(o))return void this.requestUpdate();let n=Object.assign(Object.assign({},s),{[e]:o});if("h"===e&&n.auto_h&&(delete n.auto_h,this._measuredH.delete(t)),s.keep_ratio&&("w"===e||"h"===e)&&s.w>0&&s.h>0){const t=s.w/s.h;n="w"===e?Object.assign(Object.assign({},n),{h:Math.round(o/t)}):Object.assign(Object.assign({},n),{w:Math.round(o*t)})}this._updateCardLayout(t,v(n))}async _applyStarter(t){var e,i,s;if(!(null===(e=this.lovelace)||void 0===e?void 0:e.saveConfig))return;const o=this._viewConfig(),n=st(t,null===(i=this.hass)||void 0===i?void 0:i.states),r=Object.assign(Object.assign({},o),{cards:n.cards});n.fit&&(r.freespace=Object.assign(Object.assign({},null!==(s=o.freespace)&&void 0!==s?s:{}),{fit:n.fit}));const a=[...this.lovelace.config.views];a[this.index]=r,this._optimistic.clear(),await this.lovelace.saveConfig(Object.assign(Object.assign({},this.lovelace.config),{views:a}))}_addCard(){this.dispatchEvent(new CustomEvent("ll-create-card",{bubbles:!0,composed:!0}))}async _importSections(){var t;if(!(null===(t=this.lovelace)||void 0===t?void 0:t.saveConfig))return;const e=function(t,e){const i=null!=e?e:B(t),s=Array.isArray(null==t?void 0:t.cards)?[...t.cards]:[],o=Array.isArray(null==t?void 0:t.sections)?t.sections:[];for(const t of o){if(!A(t))continue;const e=Array.isArray(t.cards)?t.cards:[];for(const t of e)s.push(t)}const n=H(s,i,void 0,"desktop"),r=s.map((t,e)=>{const i=A(t)?Object.assign({},t):{};return i.view_layout=W({desktop:n[e]}),i}),a=Object.assign(Object.assign({},t),{cards:r});return delete a.sections,a}(this._viewConfig(),this._options);e.type="custom:ultra-freespace-view",e.freespace=Object.assign({},this._options);const i=[...this.lovelace.config.views];i[this.index]=e;try{await this.lovelace.saveConfig(Object.assign(Object.assign({},this.lovelace.config),{views:i})),this._optimistic.clear(),this.setConfig(e)}catch(t){console.warn("[FreeSpace] import sections failed",t)}}_icon(t){return s.qy`<svg viewBox="0 0 24 24"><path d=${t}></path></svg>`}_tbButton(t){var e;return s.qy`
      <button
        type="button"
        class="tb-btn ${t.active?"active":""} ${t.danger?"danger":""}"
        title=${null!==(e=t.title)&&void 0!==e?e:t.label}
        aria-label=${t.label}
        aria-pressed=${void 0===t.active?s.s6:t.active?"true":"false"}
        ?disabled=${!!t.disabled}
        @click=${t.onClick}
      >
        ${this._icon(t.icon)}
        ${t.showLabel?s.qy`<span class="tb-label">${t.label}</span>`:s.s6}
      </button>
    `}_tbField(t,e,i,o,n=!1){return s.qy`
      <label class="tb-field" title=${this._t(`tb_field_${e}`,i)}>
        ${i}
        <input
          type="number"
          inputmode="decimal"
          ?disabled=${n}
          .value=${String(Math.round(o))}
          @change=${i=>this._setField(t,e,i.target.value)}
          @keydown=${t=>{"Enter"===t.key&&t.target.blur()}}
        />
      </label>
    `}_renderSelectionTools(t,e){var i;const o=null!==(i=e.pin)&&void 0!==i?i:"left",n=this._preferFullWidth(),a=n?"":` ${this._t("tb_pin_inactive","(takes effect when Full width is on in Hub → Home)")}`,l=this._pinMeta(),d=e=>{this._onFsZOrder(new CustomEvent("fs-z-order",{detail:{cardIndex:t,action:e}}))},h=!!e.locked;return s.qy`
      <span class="tb-sep"></span>
      <div class="tb-group">
        ${this._tbField(t,"x","X",e.x,h)} ${this._tbField(t,"y","Y",e.y,h)}
        ${this._tbField(t,"w","W",e.w,h)}
        ${this._tbField(t,"h","H",e.h,h||!!e.auto_h)}
        ${this._tbButton({icon:r.JgA,label:this._t("tb_auto_height","Auto height"),title:this._t("tb_auto_height_hint","Auto height: the card is as tall as its content"),active:!!e.auto_h,disabled:h,onClick:()=>this._toggleFlag([t],"auto_h")})}
        ${this._tbButton({icon:r.Ms,label:this._t("tb_keep_ratio","Keep ratio"),title:this._t("tb_keep_ratio_hint","Keep the width and height in proportion when resizing (hold Shift to switch it for one drag)"),active:!!e.keep_ratio,disabled:h,onClick:()=>this._toggleFlag([t],"keep_ratio")})}
        ${this._tbField(t,"r","°",e.r,h)}
      </div>
      <span class="tb-sep"></span>
      <div class="tb-group">${this._cardStateButtons([t])}</div>
      <span class="tb-sep"></span>
      <div
        class="tb-group ${n?"":"muted"}"
        role="radiogroup"
        aria-label=${this._t("tb_pin","Horizontal pin")}
      >
        ${u.Ce.map(e=>this._tbButton({icon:l[e].icon,label:l[e].label,title:`${l[e].label}${a}`,active:o===e,onClick:()=>this._setPin(t,e)}))}
      </div>
      <span class="tb-sep"></span>
      <div class="tb-group ${h?"muted":""}" aria-label=${this._t("tb_align","Align")}>
        ${[["left",r.XTc,this._t("tb_align_left","Align left")],["center",r.DV9,this._t("tb_align_center","Align center")],["right",r.U6c,this._t("tb_align_right","Align right")],["top",r.diJ,this._t("tb_align_top","Align top")]].map(([e,i,s])=>this._tbButton({icon:i,label:s,disabled:h,onClick:()=>this._align(t,e)}))}
      </div>
      <span class="tb-sep"></span>
      <div class="tb-group" aria-label=${this._t("tb_layer","Layer")}>
        ${this._tbButton({icon:r.lml,label:this._t("tb_front","Bring to front"),onClick:()=>d("front")})}
        ${this._tbButton({icon:r.QP,label:this._t("tb_forward","Bring forward"),onClick:()=>d("forward")})}
        ${this._tbButton({icon:r.cUU,label:this._t("tb_backward","Send backward"),onClick:()=>d("backward")})}
        ${this._tbButton({icon:r.DDH,label:this._t("tb_back","Send to back"),onClick:()=>d("back")})}
      </div>
      <span class="tb-sep"></span>
      <div class="tb-group">
        ${this._resetDesktopButton()}
        ${this._tbButton({icon:r.Q43,label:this._t("tb_edit","Edit card"),onClick:()=>this._editCard(t)})}
        ${this._tbButton({icon:r.rt5,label:this._t("tb_duplicate","Duplicate"),onClick:()=>this._onFsDuplicate(new CustomEvent("fs-duplicate-card",{detail:{cardIndex:t}}))})}
        ${this._tbButton({icon:r.y_G,label:this._t("tb_delete","Delete"),danger:!0,onClick:()=>this._onFsDelete(new CustomEvent("fs-delete-card",{detail:{cardIndex:t}}))})}
      </div>
    `}_cardStateButtons(t){const e=t.map(t=>this._layouts[t]).filter(Boolean),i=e.length>0&&e.every(t=>t.locked),o=e.length>0&&e.every(t=>t.hidden),n=p.HL[this._activeBreakpoint()].label,a=e.some(t=>t.group),l=e.length>1&&a&&1===new Set(e.map(t=>t.group)).size;return s.qy`
      ${this._tbButton({icon:i?r.kHm:r.D1t,label:i?this._t("tb_unlock","Unlock"):this._t("tb_lock","Lock"),title:i?this._t("tb_unlock_hint","Unlock so it can be moved and resized again"):this._t("tb_lock_hint","Lock so it cannot be moved or resized by accident"),active:i,onClick:()=>this._toggleFlag(t,"locked")})}
      ${this._tbButton({icon:o?r.tQ_:r._r5,label:o?this._t("tb_show_here","Show on {bp}").replace("{bp}",n):this._t("tb_hide_here","Hide on {bp}").replace("{bp}",n),title:o?this._t("tb_show_here","Show on {bp}").replace("{bp}",n):this._t("tb_hide_here_hint","Hide on {bp}. Hidden cards stay visible, faded, while editing.").replace("{bp}",n),active:o,onClick:()=>this._toggleFlag(t,"hidden")})}
      ${t.length>1&&!l?this._tbButton({icon:r.kOJ,label:this._t("tb_group","Group"),title:this._t("tb_group_hint","Group: select and move these cards together"),onClick:()=>this._setGroupFor(t,!0)}):s.s6}
      ${a?this._tbButton({icon:r.V7q,label:this._t("tb_ungroup","Ungroup"),onClick:()=>this._setGroupFor(t,!1)}):s.s6}
    `}_pinMeta(){return{left:{icon:r.GuD,label:this._t("tb_pin_left","Pin left")},center:{icon:r.kVQ,label:this._t("tb_pin_center","Pin center")},right:{icon:r.BIl,label:this._t("tb_pin_right","Pin right")},stretch:{icon:r.M1z,label:this._t("tb_pin_stretch","Pin left & right (stretch)")}}}_renderMultiTools(){const t=this._selection,e=t.map(t=>this._layouts[t]).filter(Boolean),i=new Set(e.map(t=>{var e;return null!==(e=t.pin)&&void 0!==e?e:"left"})),o=1===i.size?[...i][0]:null,n=this._preferFullWidth(),a=n?"":` ${this._t("tb_pin_inactive","(takes effect when Full width is on in Hub → Home)")}`,l=this._pinMeta(),d=[["left",r.XTc,this._t("tb_align_left","Align left")],["center",r.DV9,this._t("tb_align_center","Align center")],["right",r.U6c,this._t("tb_align_right","Align right")],["top",r.diJ,this._t("tb_align_top","Align top")],["middle",r.LAA,this._t("tb_align_middle","Align middle")],["bottom",r.D3_,this._t("tb_align_bottom","Align bottom")]],h=t.length>=3,c="canvas"===this._alignTarget,p=c?d.filter(([t])=>"middle"!==t&&"bottom"!==t):d;return s.qy`
      <span class="tb-sep"></span>
      <span class="tb-count">
        ${this._t("tb_selected","{count} selected").replace("{count}",String(t.length))}
      </span>
      <span class="tb-sep"></span>
      <div class="tb-segment" role="radiogroup" aria-label=${this._t("tb_align_to","Align to")}>
        ${this._tbButton({icon:r.Lny,label:this._t("tb_align_selection","Selection"),title:this._t("tb_align_selection_hint","Line the cards up with each other"),active:!c,onClick:()=>this._alignTarget="selection"})}
        ${this._tbButton({icon:r.k$o,label:this._t("tb_align_canvas","Canvas"),title:this._t("tb_align_canvas_hint","Move the cards together against the canvas, keeping their spacing"),active:c,onClick:()=>this._alignTarget="canvas"})}
      </div>
      <div class="tb-group" aria-label=${this._t("tb_align","Align")}>
        ${p.map(([t,e,i])=>this._tbButton({icon:e,label:i,onClick:()=>this._alignSelection(t)}))}
      </div>
      <span class="tb-sep"></span>
      <div class="tb-group ${h?"":"muted"}" aria-label=${this._t("tb_distribute","Distribute")}>
        ${this._tbButton({icon:r.lQ0,label:this._t("tb_distribute_h","Distribute horizontally"),title:h?this._t("tb_distribute_h","Distribute horizontally"):this._t("tb_distribute_need","Select 3 or more cards to distribute"),onClick:()=>h&&this._distributeSelection("horizontal")})}
        ${this._tbButton({icon:r.RXF,label:this._t("tb_distribute_v","Distribute vertically"),title:h?this._t("tb_distribute_v","Distribute vertically"):this._t("tb_distribute_need","Select 3 or more cards to distribute"),onClick:()=>h&&this._distributeSelection("vertical")})}
      </div>
      <span class="tb-sep"></span>
      <div
        class="tb-group ${n?"":"muted"}"
        role="radiogroup"
        aria-label=${this._t("tb_pin","Horizontal pin")}
      >
        ${u.Ce.map(t=>this._tbButton({icon:l[t].icon,label:l[t].label,title:`${l[t].label}${a}`,active:o===t,onClick:()=>this._pinSelection(t)}))}
      </div>
      <span class="tb-sep"></span>
      <div class="tb-group">${this._cardStateButtons(t)}</div>
      <span class="tb-sep"></span>
      <div class="tb-group">
        ${this._resetDesktopButton()}
        ${this._tbButton({icon:r.y_G,label:this._t("tb_delete","Delete"),danger:!0,onClick:()=>{this._deleteSelection()}})}
      </div>
    `}_historyButtons(){return this._historyTick,s.qy`
      <div class="tb-group" aria-label=${this._t("tb_history","History")}>
        ${this._tbButton({icon:r.P$h,label:this._t("tb_undo","Undo"),title:this._t("tb_undo_hint","Undo (Ctrl+Z)"),disabled:!this._history.canUndo,onClick:()=>{this._undoRedo("undo")}})}
        ${this._tbButton({icon:r.xJN,label:this._t("tb_redo","Redo"),title:this._t("tb_redo_hint","Redo (Ctrl+Shift+Z)"),disabled:!this._history.canRedo,onClick:()=>{this._undoRedo("redo")}})}
      </div>
      <span class="tb-sep"></span>
    `}_renderToolbar(){if(!this._editMode()||!this._discoverable)return s.s6;const t=this._editBreakpoint,e=this._editingAllowed(),i=e?this._selected:null,o=null!==i?this._layouts[i]:void 0,n=e&&this._selection.length>1,a=this._isCustom(t);return s.qy`
      <div class="toolbar" role="toolbar" aria-label=${this._t("toolbar","FreeSpace tools")}>
        ${this._historyButtons()}
        <div class="tb-group" role="radiogroup" aria-label=${this._t("breakpoints","Breakpoints")}>
          ${p.eC.map(e=>{const i=p.HL[e];return this._tbButton({icon:ut[e],label:this._t(`bp_${e}`,i.label),title:`${i.label} (≥ ${i.minWidth}px)`,active:e===t,showLabel:!0,onClick:()=>this._setEditBreakpoint(e)})})}
        </div>
        ${"desktop"!==t?s.qy`
              <span class="tb-sep"></span>
              <div
                class="tb-segment"
                role="radiogroup"
                aria-label=${this._t("bp_layout","{bp} layout").replace("{bp}",p.HL[t].label)}
              >
                ${this._tbButton({icon:r.F5c,label:this._t("use_desktop","Use Desktop"),title:this._t("use_desktop_hint","Show the Desktop layout, shrunk and centered to fit this screen size."),active:!a,showLabel:!0,onClick:()=>{this._setBreakpointMode("desktop")}})}
                ${this._tbButton({icon:r.Q43,label:this._t("custom_layout","Custom"),title:this._t("custom_layout_hint","Arrange this screen size on its own"),active:a,showLabel:!0,onClick:()=>{this._setBreakpointMode("custom")}})}
              </div>
            `:s.s6}
        ${n?this._renderMultiTools():null!==i&&o?this._renderSelectionTools(i,o):s.qy`
              <span class="tb-sep"></span>
              <div class="tb-group">
                ${this._options.grid>0?this._tbButton({icon:r.t4N,label:this._t("tb_snap","Snap to grid"),active:this._snapOn,showLabel:!0,onClick:()=>{this._snapOn=!this._snapOn,function(t){var e;try{null===(e=window.localStorage)||void 0===e||e.setItem(dt,t?"on":"off")}catch(t){}}(this._snapOn)}}):s.s6}
                ${this._editingAllowed()?this._tbButton({icon:r.biz,label:this._t("add_card","Add card"),showLabel:!0,onClick:()=>this._addCard()}):s.s6}
              </div>
              ${e?s.qy`<span class="tb-meta">
                    ${this._t("tb_multi_hint","Shift-click or drag on empty space to select several")}
                  </span>`:s.s6}
            `}
      </div>
    `}_renderPinLines(){if(!this._editMode()||null===this._selected||this._selection.length>1)return s.s6;const t=this._layouts[this._selected];if(!(null==t?void 0:t.pin)||"left"===t.pin)return s.s6;const e=this._artboardWidth,i=t.y+t.h/2,o=s.qy`<div class="pin-line" style="left:0;width:${Math.max(0,t.x)}px;top:${i}px"></div>`,n=s.qy`<div
      class="pin-line"
      style="left:${t.x+t.w}px;width:${Math.max(0,e-t.x-t.w)}px;top:${i}px"
    ></div>`;return"right"===t.pin?n:"stretch"===t.pin?s.qy`${o}${n}`:s.qy`<div
      class="pin-line vertical"
      style="left:${e/2}px;top:${t.y-12}px;height:${t.h+24}px"
    ></div>`}_renderBackground(){const t=this._options.background;if(!t)return s.s6;const e=function(t,e){var i,s;if(t)return null!==(s="desktop"!==e?null===(i=t.images)||void 0===i?void 0:i[e]:void 0)&&void 0!==s?s:t.image}(t,this._following?"desktop":this._activeBreakpoint()),i=`${this._following?I(this._options,"desktop"):this._artboardWidth}px`,o=ht[t.size],r=null==e?void 0:e.replace(/["\\\n\r]/g,t=>encodeURIComponent(t));return s.qy`
      ${t.color?s.qy`<div class="canvas-bg" style=${(0,n.W)({width:i,background:t.color})}></div>`:s.s6}
      ${r?s.qy`<div
            class="canvas-bg-img"
            style=${(0,n.W)({width:i,backgroundImage:`url("${r}")`,backgroundSize:o.size,backgroundRepeat:o.repeat,backgroundPosition:t.position,opacity:String(t.opacity/100)})}
          ></div>`:s.s6}
    `}_renderGaps(){if(!this._gaps.length)return s.s6;const t=`${Math.round(11/(this._scale||1))}px`;return this._gaps.map(e=>{const i=(e.from+e.to)/2,o=s.qy`<div
        class="gap-label"
        style="left:${"x"===e.axis?i:e.at}px;top:${"x"===e.axis?e.at:i}px;font-size:${t}"
      >
        ${Math.round(e.to-e.from)}
      </div>`;return"x"===e.axis?s.qy`<div class="gap-line x" style="left:${e.from}px;top:${e.at}px;width:${e.to-e.from}px"></div>
            ${o}`:s.qy`<div class="gap-line y" style="left:${e.at}px;top:${e.from}px;height:${e.to-e.from}px"></div>
            ${o}`})}_renderEmpty(){var t;const e=this._editingAllowed()&&!!(null===(t=this.lovelace)||void 0===t?void 0:t.saveConfig),i={wall:{title:this._t("starter_wall","Wall tablet"),desc:this._t("starter_wall_desc","Fills the screen, no scrolling")},phone:{title:this._t("starter_phone","Phone home"),desc:this._t("starter_phone_desc","With its own Phone layout")},desktop:{title:this._t("starter_desktop","Desktop overview"),desc:this._t("starter_desktop_desc","Camera, lights and climate")}};return s.qy`<div class="empty">
      ${e?s.qy`
            ${this._t("empty_starters","Add a card to start building, or begin with a starter layout:")}
            <div class="starters">
              ${Q.map(t=>s.qy`<button type="button" class="starter" @click=${()=>{this._applyStarter(t)}}>
                  ${this._icon(ct[t])}
                  <strong>${i[t].title}</strong>
                  <span>${i[t].desc}</span>
                </button>`)}
            </div>
          `:this._t("empty","Add a card to start building.")}
    </div>`}render(){var t,e;const i=this._editMode(),o=this._useStacked(),n=this._editingAllowed(),a=function(t){if(!A(t)||!Array.isArray(t.sections))return 0;let e=0;for(const i of t.sections)A(i)&&Array.isArray(i.cards)&&(e+=i.cards.length);return e}(this._viewConfig()),l=o?this._layouts.map((t,e)=>({i:e,y:t.y,x:t.x})).sort((t,e)=>t.y-e.y||t.x-e.x||t.i-e.i).map(t=>t.i):this._layouts.map((t,e)=>e);return s.qy`
      <div class="grid-layer" aria-hidden="true"></div>
      ${(null===(t=this.badges)||void 0===t?void 0:t.length)?s.qy`<div class="badges">${this.badges.map(t=>t)}</div>`:s.s6}

      ${this._renderToolbar()}

      ${i&&a>0?s.qy`
            <div class="banner">
              <span>
                ${this._t("import_sections","This view still has {count} cards in Sections. Import them into FreeSpace?").replace("{count}",String(a))}
              </span>
              <button type="button" @click=${()=>this._importSections()}>
                ${this._t("import_sections_action","Import sections")}
              </button>
            </div>
          `:s.s6}

      ${i&&!this._connectInstalled?s.qy`
            <p class="hint">
              ${this._t("requires_connect","Install Ultra Card Connect to arrange FreeSpace cards.")}
            </p>
          `:s.s6}

      ${i&&o?s.qy`
            <p class="hint">
              ${this._t("narrow_hint","Phone is using the Desktop layout, stacked for readability. Choose Custom in the toolbar to arrange a Phone layout.")}
            </p>
          `:s.s6}

      ${i&&this._following&&this._discoverable?s.qy`
            <p class="hint">
              ${this._t("follow_hint","{bp} is using the Desktop layout, shrunk to fit. Choose Custom in the toolbar to arrange {bp} on its own.").replace(/\{bp\}/g,p.HL[this._activeBreakpoint()].label)}
            </p>
          `:s.s6}

      ${i&&n?s.qy`
            <p class="hint">
              ${this._t("select_hint","Click to select, Shift-click or drag on empty space to select several. Double-click to edit. Right-click for the card menu.")}
              ${this._devicePreview?` ${this._t("device_preview_hint","Showing {bp} at true size. Dashed lines mark the device edges.").replace("{bp}",p.HL[this._activeBreakpoint()].label)}`:this._showWidthBounds?` ${this._t("width_bounds_hint","Dashed lines mark the design canvas width (Hub → Home → Full width is off).")}`:""}${this._showWidthBounds&&this._cardsOutsideWidthBounds()?` ${this._t("outside_bounds_hint","Some cards sit outside the lines. They still work; drag them back to keep them inside the canvas.")}`:""}
            </p>
          `:s.s6}

      <div class="viewport">
        ${i&&this._showWidthBounds?s.qy`
              <div
                class="width-bound visible"
                style="left:${this._frameLeft}px"
                title=${this._t("width_bound","Design canvas edge")}
              ></div>
              <div
                class="width-bound visible"
                style="left:${this._frameLeft+this._frameWidth}px"
                title=${this._t("width_bound","Design canvas edge")}
              ></div>
            `:s.s6}
        <div
          class="artboard ${o?"stacked":""} ${this._following?"following":""} ${i&&this._devicePreview&&!this._following?"device-preview":""} ${i&&this._showWidthBounds&&!this._following?"width-bounds":""}"
          style=${o?"":`width:${this._artboardWidth}px;height:${this._artboardHeight}px;transform:scale(${this._scale});left:${this._artboardOffsetX}px`}
          @pointerdown=${this._onArtboardPointerDown}
        >
          ${o?s.s6:this._renderBackground()}
          ${(null===(e=this.cards)||void 0===e?void 0:e.length)?l.map(t=>{const e=this.cards[t];if(!e)return s.s6;const r=this._layouts[t];return!r||r.hidden&&!i?s.s6:s.qy`
                  <uc-freespace-item
                    .card=${e}
                    .layout=${r}
                    .cardIndex=${t}
                    .editMode=${i}
                    .editingAllowed=${n}
                    .selected=${this._selection.includes(t)}
                    .stacked=${o}
                    .scale=${this._scale}
                    .language=${this._lang()}
                    @focus=${()=>{this._selection.includes(t)||(this._selected=t)}}
                  ></uc-freespace-item>
                `}):this._renderEmpty()}
          ${o||!this._guides.vertical.length&&!this._guides.horizontal.length?s.s6:s.qy`
                <div class="guides">
                  ${this._guides.vertical.map(t=>s.qy`<div class="guide-v" style="left:${t}px"></div>`)}
                  ${this._guides.horizontal.map(t=>s.qy`<div class="guide-h" style="top:${t}px"></div>`)}
                </div>
              `}
          ${o?s.s6:this._renderPinLines()}
          ${o?s.s6:this._renderGaps()}
          ${this._marquee?s.qy`<div
                class="marquee"
                style="left:${this._marquee.left}px;top:${this._marquee.top}px;width:${this._marquee.right-this._marquee.left}px;height:${this._marquee.bottom-this._marquee.top}px"
              ></div>`:s.s6}
        </div>
      </div>

      ${n?s.qy`
            <button
              type="button"
              class="fab"
              aria-label=${this._t("add_card","Add card")}
              @click=${()=>this._addCard()}
            >
              <svg viewBox="0 0 24 24"><path d=${r.biz}></path></svg>
            </button>
          `:s.s6}
    `}};pt.styles=s.AH`
    :host {
      display: flex;
      flex-direction: column;
      position: relative;
      flex: 1 1 auto;
      min-height: 100%;
      height: 100%;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }
    /* Hub → Home → Full width: FreeSpace uses the whole content column. */
    :host([data-uc-full-width]) {
      width: 100%;
      max-width: none;
      margin-inline: 0;
    }
    .badges {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
      padding: 12px 16px 0;
      position: relative;
      z-index: 2;
    }
    .viewport {
      position: relative;
      width: 100%;
      flex: 1 1 auto;
      min-height: 0;
      /* Fixed to the *scaled* artboard size so the unscaled child cannot
         expand the page (transform: scale does not affect layout). */
      overflow: hidden;
      background: transparent;
      z-index: 1;
    }
    /* Full-bleed edit grid: covers the entire FreeSpace host (behind cards),
       not only the artboard / empty gaps. */
    .grid-layer {
      display: none;
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background-color: var(--primary-background-color, #111);
      background-image: radial-gradient(
        circle,
        var(--divider-color, rgba(127, 127, 127, 0.45)) 1px,
        transparent 1px
      );
      background-size: 16px 16px;
      background-repeat: repeat;
      background-position: 0 0;
    }
    :host([edit]) .grid-layer {
      display: block;
    }
    .artboard {
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: top left;
      box-sizing: border-box;
      background: transparent;
    }
    /* Outline only — keep the grid layer visible through the frame. */
    .artboard.device-preview {
      box-shadow: 0 0 0 1px var(--divider-color, rgba(127, 127, 127, 0.45));
    }
    /* Full-width off (edit only): left/right edges mark the design canvas. */
    :host([edit]) .artboard.width-bounds {
      box-shadow:
        inset 1px 0 0 var(--primary-color, #03a9f4),
        inset -1px 0 0 var(--primary-color, #03a9f4);
      /* Keep cards that sit past the lines visible & draggable. */
      overflow: visible;
    }
    .width-bound {
      display: none;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 0;
      pointer-events: none;
      z-index: 3;
      border-left: 1px dashed rgba(var(--rgb-primary-color, 3, 169, 244), 0.85);
    }
    :host([edit]) .width-bound.visible {
      display: block;
    }
    /* "Use Desktop" preview in edit mode: look, don't operate the cards. */
    :host([edit]) .artboard.following uc-freespace-item {
      pointer-events: none;
    }
    .artboard.stacked {
      position: relative;
      transform: none !important;
      width: 100% !important;
      height: auto !important;
      min-height: 100%;
      padding: 12px 16px 80px;
      box-sizing: border-box;
      background: none;
    }
    .guides {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 9999;
    }
    .guide-v,
    .guide-h {
      position: absolute;
      background: var(--primary-color);
      opacity: 0.7;
    }
    .guide-v {
      top: 0;
      bottom: 0;
      width: 1px;
    }
    .guide-h {
      left: 0;
      right: 0;
      height: 1px;
    }
    .banner {
      margin: 12px 16px 0;
      padding: 12px 16px;
      border-radius: 12px;
      border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      color: var(--primary-text-color);
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
      font-size: 14px;
      position: relative;
      z-index: 2;
    }
    .banner button {
      margin-left: auto;
      border: 1px solid var(--primary-color);
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-radius: 8px;
      padding: 6px 12px;
      font: inherit;
      font-weight: 600;
      cursor: pointer;
    }
    .hint {
      margin: 8px 16px;
      color: var(--secondary-text-color);
      font-size: 13px;
      position: relative;
      z-index: 2;
    }
    .fab {
      position: fixed;
      right: calc(16px + env(safe-area-inset-right));
      bottom: calc(16px + env(safe-area-inset-bottom));
      z-index: 10;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: none;
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fab svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }
    .fab:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 3px;
    }
    .empty {
      padding: 48px 24px;
      text-align: center;
      color: var(--secondary-text-color);
    }
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 6;
      container-type: inline-size;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 4px;
      margin: 8px 16px 0;
      padding: 4px 6px;
      border-radius: 12px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color, var(--ha-card-background, #1c1c1c));
      box-shadow: var(--ha-card-box-shadow, 0 2px 8px rgba(0, 0, 0, 0.25));
    }
    .tb-group {
      display: inline-flex;
      align-items: center;
      gap: 2px;
    }
    .tb-group.muted {
      opacity: 0.55;
    }
    .tb-sep {
      width: 1px;
      height: 22px;
      margin: 0 4px;
      background: var(--divider-color);
    }
    .tb-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      height: 32px;
      min-width: 32px;
      padding: 0 8px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      box-sizing: border-box;
    }
    .tb-btn:hover {
      background: rgba(127, 127, 127, 0.14);
    }
    .tb-btn.active {
      color: var(--primary-color);
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
    }
    .tb-btn.danger {
      color: var(--error-color, #db4437);
    }
    .tb-btn:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 1px;
    }
    .tb-btn svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
      flex-shrink: 0;
    }
    .tb-field {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 32px;
      padding: 0 6px;
      border-radius: 8px;
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      color: var(--secondary-text-color);
      font-size: 11px;
      font-weight: 600;
      box-sizing: border-box;
    }
    .tb-field:focus-within {
      outline: 2px solid var(--primary-color);
    }
    .tb-field input {
      width: 48px;
      border: none;
      outline: none;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 12px;
      font-variant-numeric: tabular-nums;
      -moz-appearance: textfield;
    }
    .tb-field input::-webkit-outer-spin-button,
    .tb-field input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .tb-segment {
      display: inline-flex;
      align-items: center;
      gap: 2px;
      padding: 2px;
      border-radius: 10px;
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
    }
    .tb-count {
      padding: 0 6px;
      font-size: 12px;
      font-weight: 600;
      color: var(--primary-color);
      white-space: nowrap;
    }
    .marquee {
      position: absolute;
      border: 1px solid var(--primary-color);
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
      pointer-events: none;
      z-index: 9997;
    }
    .tb-meta {
      margin-left: auto;
      padding: 0 6px;
      font-size: 12px;
      color: var(--secondary-text-color);
      white-space: nowrap;
    }
    @container (max-width: 1100px) {
      .tb-btn .tb-label {
        display: none;
      }
    }
    .pin-line {
      position: absolute;
      height: 0;
      border-top: 1px dashed var(--primary-color);
      pointer-events: none;
      z-index: 9998;
    }
    .pin-line.vertical {
      width: 0;
      height: auto;
      border-top: none;
      border-left: 1px dashed var(--primary-color);
    }
    .tb-btn:disabled {
      opacity: 0.4;
      cursor: default;
      background: transparent;
    }
    .tb-field input:disabled {
      color: var(--secondary-text-color);
    }
    /* Canvas background: behind every card, moves and scales with them. */
    .canvas-bg,
    .canvas-bg-img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      pointer-events: none;
      z-index: -100000;
    }
    .gap-line {
      position: absolute;
      pointer-events: none;
      z-index: 9998;
      border-color: var(--accent-color, #ff9800);
      border-style: solid;
      border-width: 0;
    }
    .gap-line.x {
      height: 0;
      border-top-width: 1px;
    }
    .gap-line.y {
      width: 0;
      border-left-width: 1px;
    }
    .gap-label {
      position: absolute;
      transform: translate(-50%, -50%);
      padding: 1px 4px;
      border-radius: 4px;
      background: var(--accent-color, #ff9800);
      color: #000;
      font-weight: 600;
      line-height: 1.3;
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
    }
    .starters {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      margin-top: 16px;
    }
    .starter {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      width: 160px;
      padding: 16px 12px;
      border-radius: 12px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color, var(--ha-card-background, #1c1c1c));
      color: var(--primary-text-color);
      font: inherit;
      cursor: pointer;
    }
    .starter:hover,
    .starter:focus-visible {
      border-color: var(--primary-color);
      outline: none;
    }
    .starter svg {
      width: 32px;
      height: 32px;
      fill: var(--primary-color);
    }
    .starter strong {
      font-size: 14px;
    }
    .starter span {
      font-size: 12px;
      color: var(--secondary-text-color);
    }
  `,lt([(0,o.MZ)({attribute:!1})],pt.prototype,"hass",void 0),lt([(0,o.MZ)({attribute:!1})],pt.prototype,"lovelace",void 0),lt([(0,o.MZ)({type:Number})],pt.prototype,"index",void 0),lt([(0,o.MZ)({type:Boolean})],pt.prototype,"narrow",void 0),lt([(0,o.MZ)({type:Boolean})],pt.prototype,"isStrategy",void 0),lt([(0,o.MZ)({attribute:!1})],pt.prototype,"cards",void 0),lt([(0,o.MZ)({attribute:!1})],pt.prototype,"badges",void 0),lt([(0,o.MZ)({attribute:!1})],pt.prototype,"sections",void 0),lt([(0,o.wk)()],pt.prototype,"_config",void 0),lt([(0,o.wk)()],pt.prototype,"_options",void 0),lt([(0,o.wk)()],pt.prototype,"_layouts",void 0),lt([(0,o.wk)()],pt.prototype,"_alignTarget",void 0),lt([(0,o.wk)()],pt.prototype,"_snapOn",void 0),lt([(0,o.wk)()],pt.prototype,"_gaps",void 0),lt([(0,o.wk)()],pt.prototype,"_historyTick",void 0),lt([(0,o.wk)()],pt.prototype,"_scale",void 0),lt([(0,o.wk)()],pt.prototype,"_artboardWidth",void 0),lt([(0,o.wk)()],pt.prototype,"_artboardHeight",void 0),lt([(0,o.wk)()],pt.prototype,"_artboardOffsetX",void 0),lt([(0,o.wk)()],pt.prototype,"_devicePreview",void 0),lt([(0,o.wk)()],pt.prototype,"_showWidthBounds",void 0),lt([(0,o.wk)()],pt.prototype,"_following",void 0),lt([(0,o.wk)()],pt.prototype,"_frameLeft",void 0),lt([(0,o.wk)()],pt.prototype,"_frameWidth",void 0),lt([(0,o.wk)()],pt.prototype,"_selection",void 0),lt([(0,o.wk)()],pt.prototype,"_marquee",void 0),lt([(0,o.wk)()],pt.prototype,"_guides",void 0),lt([(0,o.wk)()],pt.prototype,"_discoverable",void 0),lt([(0,o.wk)()],pt.prototype,"_connectInstalled",void 0),lt([(0,o.wk)()],pt.prototype,"_liveBreakpoint",void 0),lt([(0,o.wk)()],pt.prototype,"_editBreakpoint",void 0),lt([(0,o.wk)()],pt.prototype,"_containerWidth",void 0),pt=lt([(0,o.EM)(u.Zm)],pt),u.WS},2063(t,e,i){var s=i(1001);const o=new class{confirm(t,e,i={}){return new Promise(s=>{const{destructive:o=!1,confirmText:n="Confirm",cancelText:r="Cancel"}=i,{overlay:a,style:l}=this._buildOverlay();a.innerHTML='\n        <div class="uc-cd-backdrop"></div>\n        <div class="uc-cd-panel" role="dialog" aria-modal="true" aria-labelledby="uc-cd-title">\n          <h2 class="uc-cd-title" id="uc-cd-title"></h2>\n          <p class="uc-cd-message"></p>\n          <div class="uc-cd-actions"></div>\n        </div>\n      ',a.querySelector(".uc-cd-title").textContent=t,a.querySelector(".uc-cd-message").textContent=e;const d=a.querySelector(".uc-cd-actions"),h=this._makeButton(r,!1,o),c=this._makeButton(n,!0,o);d.appendChild(h),d.appendChild(c);let u=!1;const p=t=>{u||(u=!0,document.removeEventListener("keydown",_),l.remove(),a.remove(),s(t))},_=t=>{if("Escape"===t.key)return t.preventDefault(),void p(!1);if("Enter"===t.key){const e=document.activeElement;if(e===h)return t.preventDefault(),void p(!1);if(e===c)return t.preventDefault(),void p(!0);if(o)return;t.preventDefault(),p(!0)}};a.querySelector(".uc-cd-backdrop").addEventListener("click",()=>p(!1)),h.addEventListener("click",()=>p(!1)),c.addEventListener("click",()=>p(!0)),document.body.appendChild(a),document.addEventListener("keydown",_),requestAnimationFrame(()=>(o?h:c).focus())})}prompt(t,e,i=""){return new Promise(s=>{const{overlay:o,style:n}=this._buildOverlay();o.innerHTML='\n        <div class="uc-cd-backdrop"></div>\n        <div class="uc-cd-panel" role="dialog" aria-modal="true" aria-labelledby="uc-cd-title">\n          <h2 class="uc-cd-title" id="uc-cd-title"></h2>\n          <p class="uc-cd-message"></p>\n          <input class="uc-cd-input" type="text" />\n          <div class="uc-cd-actions"></div>\n        </div>\n      ',o.querySelector(".uc-cd-title").textContent=t,o.querySelector(".uc-cd-message").textContent=e;const r=o.querySelector(".uc-cd-input");r.value=i;const a=o.querySelector(".uc-cd-actions"),l=this._makeButton("Cancel",!1,!1),d=this._makeButton("OK",!0,!1);a.appendChild(l),a.appendChild(d);let h=!1;const c=t=>{h||(h=!0,document.removeEventListener("keydown",u),n.remove(),o.remove(),s(t))},u=t=>{"Escape"===t.key&&(t.preventDefault(),c(null)),"Enter"===t.key&&(t.preventDefault(),c(r.value.trim()||null))};o.querySelector(".uc-cd-backdrop").addEventListener("click",()=>c(null)),l.addEventListener("click",()=>c(null)),d.addEventListener("click",()=>c(r.value.trim()||null)),document.body.appendChild(o),document.addEventListener("keydown",u),requestAnimationFrame(()=>r.focus())})}_makeButton(t,e,i){const s=document.createElement("button");return s.type="button",s.className=e?"uc-cd-btn primary":"uc-cd-btn secondary",e&&i&&s.classList.add("destructive"),s.textContent=t,s}_buildOverlay(){const t=document.createElement("div");t.className="uc-cd-overlay";const e=document.createElement("style");return e.textContent=`\n      .uc-cd-overlay {\n        position: fixed;\n        inset: 0;\n        z-index: ${s.Mu.DIALOG_OVERLAY};\n        display: grid;\n        place-items: center;\n      }\n      .uc-cd-backdrop {\n        position: absolute;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.5);\n      }\n      .uc-cd-panel {\n        position: relative;\n        width: min(92vw, 480px);\n        border-radius: 12px;\n        background: var(--card-background-color, #1f1f1f);\n        color: var(--primary-text-color);\n        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);\n        padding: 20px 20px 16px;\n      }\n      .uc-cd-title {\n        margin: 0 0 8px;\n        font-size: 18px;\n        font-weight: 600;\n        line-height: 1.3;\n        color: var(--primary-text-color);\n      }\n      .uc-cd-message {\n        margin: 0 0 16px;\n        font-size: 14px;\n        line-height: 1.5;\n        color: var(--secondary-text-color);\n      }\n      .uc-cd-input {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 8px 10px;\n        margin-bottom: 16px;\n        border: 1px solid var(--divider-color);\n        border-radius: 6px;\n        background: var(--secondary-background-color, #2b2b2b);\n        color: var(--primary-text-color);\n        font-size: 14px;\n        outline: none;\n      }\n      .uc-cd-input:focus {\n        border-color: var(--primary-color);\n      }\n      .uc-cd-actions {\n        display: flex;\n        justify-content: flex-end;\n        gap: 8px;\n      }\n      .uc-cd-btn {\n        border-radius: 6px;\n        min-height: 36px;\n        padding: 0 16px;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        transition: opacity 0.15s ease;\n      }\n      .uc-cd-btn:hover { opacity: 0.85; }\n      .uc-cd-btn.secondary {\n        border: 1px solid var(--divider-color);\n        background: transparent;\n        color: var(--primary-text-color);\n      }\n      .uc-cd-btn.primary {\n        border: 1px solid var(--primary-color);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .uc-cd-btn.primary.destructive {\n        border-color: var(--error-color, #f44336);\n        background: var(--error-color, #f44336);\n        color: #fff;\n      }\n    `,document.head.appendChild(e),{overlay:t,style:e}}};i.d(e,["W",0,o])}};