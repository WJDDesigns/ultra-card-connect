export const __webpack_esm_ids__=[6885];export const __webpack_esm_modules__={7801(t,e,i){i.r(e),i.d(e,{UltraFreeSpaceViewImpl:()=>V});var s=i(2618),n=i(4791),o=i(9165),r=i(2737),a=i(1162),l=i(8690),d=i(2063),c=i(6478),h=i(9123),u=i(6344);function p(t,e){return!e||e<=0?t:Math.round(t/e)*e}function _(t,e){return b(!e||e<=0?t:Object.assign(Object.assign({},t),{x:p(t.x,e),y:p(t.y,e),w:Math.max(80,p(t.w,e)),h:Math.max(60,p(t.h,e))}))}function b(t){const e={x:Number.isFinite(t.x)?t.x:0,y:Number.isFinite(t.y)?Math.max(0,t.y):0,w:Number.isFinite(t.w)?Math.max(80,t.w):320,h:Number.isFinite(t.h)?Math.max(60,t.h):160,r:Number.isFinite(t.r)?x(t.r):0,z:Number.isFinite(t.z)?Math.round(t.z):0};return t.pin&&"left"!==t.pin&&Number.isFinite(t.ref_w)&&t.ref_w>0&&(e.pin=t.pin,e.ref_w=Math.round(t.ref_w)),e}function v(t,e){if(!(t.pin&&"left"!==t.pin&&t.ref_w&&e>0))return t;const i=e-t.ref_w;if(0===i)return t;const s=Object.assign(Object.assign({},t),{ref_w:Math.round(e)});return"right"===t.pin?s.x=t.x+i:"center"===t.pin?s.x=t.x+i/2:"stretch"===t.pin&&(s.w=Math.max(80,t.w+i)),s}function g(t,e,i){const{pin:s,ref_w:n}=t,o=function(t,e){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(i[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(t);n<s.length;n++)e.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(t,s[n])&&(i[s[n]]=t[s[n]])}return i}(t,["pin","ref_w"]);return"left"!==e&&i>0?Object.assign(Object.assign({},o),{pin:e,ref_w:Math.round(i)}):o}const f=16;function y(t){return{left:Math.min(...t.map(t=>t.x)),top:Math.min(...t.map(t=>t.y)),right:Math.max(...t.map(t=>t.x+t.w)),bottom:Math.max(...t.map(t=>t.y+t.h))}}function m(t,e){if(!(t.length&&e>0))return{scale:1,tx:0,right:0};const i=t.map($),s=Math.min(...i.map(t=>t.left))-16,n=Math.max(...i.map(t=>t.right))+16,o=n-s,r=o>e?e/o:1;return{scale:r,tx:(e-o*r)/2-s*r,right:n}}function x(t){let e=t%360;return e>180&&(e-=360),e<=-180&&(e+=360),e}function w(t,e,i,s){return 180*Math.atan2(s-e,i-t)/Math.PI}function k(t){return{cx:t.x+t.w/2,cy:t.y+t.h/2}}function $(t){if(!t.r)return{left:t.x,top:t.y,right:t.x+t.w,bottom:t.y+t.h};const{cx:e,cy:i}=k(t),s=t.r*Math.PI/180,n=Math.abs(Math.cos(s)),o=Math.abs(Math.sin(s)),r=(t.w*n+t.h*o)/2,a=(t.w*o+t.h*n)/2;return{left:e-r,top:i-a,right:e+r,bottom:i+a}}function M(t,e,i=8){const s=$(t),n=$(e);return!(s.right+i<=n.left||n.right+i<=s.left||s.bottom+i<=n.top||n.bottom+i<=s.top)}function C(t,e,i=320,s=160,n=8){const o=Math.max(n||8,i),r=Math.max(n||8,s),a=Math.max(1,Math.floor((e-i)/o)+1),l=t.length?Math.max(...t.map(t=>t.z))+1:0;for(let e=0;e<200;e++)for(let d=0;d<a;d++){const a=b({x:d*o,y:e*r,w:i,h:s,r:0,z:l});if(!t.some(t=>M(a,t)))return n>0?_(a,n):a}return b({x:0,y:t.reduce((t,e)=>Math.max(t,$(e).bottom),0)+16,w:i,h:s,r:0,z:l})}function O(t){return!!t&&"object"==typeof t&&!Array.isArray(t)}function L(t,e){const i="number"==typeof t?t:Number(t);return Number.isFinite(i)?i:e}function A(t){return O(t)?function(t){const e=O(t)?t:{},i="scale"===e.narrow?"scale":"stack",s=Math.max(320,Math.round(L(e.canvas_width,h.Mf.canvas_width))),n=Math.max(200,Math.round(L(e.min_height,h.Mf.min_height))),o=Math.max(0,Math.round(L(e.grid,h.Mf.grid))),r=function(t){if(!O(t))return;const e={};let i=!1;for(const s of u.eC){if(void 0===t[s]||null===t[s]||""===t[s])continue;const n=Math.round(L(t[s],NaN));Number.isFinite(n)&&(e[s]=Math.max(280,n),i=!0)}return i?e:void 0}(e.canvas_widths),a={canvas_width:s,min_height:n,grid:o,narrow:i};return r&&(a.canvas_widths=r,r.desktop&&(a.canvas_width=r.desktop)),a}(t.freespace):Object.assign({},h.Mf)}function E(t,e){var i;const s=null===(i=t.canvas_widths)||void 0===i?void 0:i[e];return"number"==typeof s&&Number.isFinite(s)?Math.max(280,Math.round(s)):"desktop"===e?t.canvas_width:u.HL[e].canvasWidth}function S(t){if(!function(t){return!!O(t)&&Number.isFinite(Number(t.x))&&Number.isFinite(Number(t.y))&&Number.isFinite(Number(t.w))&&Number.isFinite(Number(t.h))}(t))return null;const e=L(t.r,0),i=Math.round(L(t.z,0)),s={x:Number(t.x),y:Number(t.y),w:Number(t.w),h:Number(t.h),r:e,z:i};return h.Ce.includes(t.pin)&&(s.pin=t.pin,s.ref_w=L(t.ref_w,NaN)),b(s)}function z(t){if(!O(t))return{};const e={};if((0,u.G6)(t))for(const i of u.eC){const s=S(t[i]);s&&(e[i]=s)}if((0,u._e)(t)&&!e.desktop){const i=S(t);i&&(e.desktop=i)}return e}function B(t){const e=u.eC.filter(e=>t[e]);if(0===e.length)return{};if(1===e.length&&"desktop"===e[0]&&t.desktop)return Object.assign({},t.desktop);const i={};for(const s of e)i[s]=Object.assign({},t[s]);return i}function I(t,e){return!!t[e]}function j(t,e,i){if(!O(t))return null;const s=function(t,e){for(const i of u.z7[e]){const e=t[i];if(e)return{layout:Object.assign({},e),from:i}}return null}(z(t.view_layout),e);return s?s.from===e?s.layout:function(t,e){return t.pin&&"left"!==t.pin&&e>0?Object.assign(Object.assign({},t),{ref_w:Math.round(e)}):t}(s.layout,i):null}function P(t,e,i,s="desktop"){var n;const o=E(e,s),r=[];for(let a=0;a<t.length;a++){const l=null!==(n=null==i?void 0:i[a])&&void 0!==n?n:null,d=null!=l?l:j(t[a],s,o);d?r.push(d):r.push(C(r,o,320,160,e.grid))}return r}function D(t,e){let i=0;for(const e of t)i=Math.max(i,e.y+e.h);return Math.max(e,i+24)}function W(t,e,i,s,n=0,o="desktop"){const r=n>0?_(s,n):b(s),a=Array.isArray(null==t?void 0:t.views)?[...t.views]:[],l=O(a[e])?Object.assign({},a[e]):{},d=Array.isArray(l.cards)?[...l.cards]:[],c=O(d[i])?Object.assign({},d[i]):{},h=z(c.view_layout);return h[o]=Object.assign({},r),c.view_layout=B(h),d[i]=c,l.cards=d,a[e]=l,Object.assign(Object.assign({},t),{views:a})}function F(t,e,i,s="desktop"){const n=Array.isArray(null==t?void 0:t.views)?[...t.views]:[],o=O(n[e])?Object.assign({},n[e]):{},r=Array.isArray(o.cards)?[...o.cards]:[];for(let t=0;t<r.length&&t<i.length;t++){const e=O(r[t])?Object.assign({},r[t]):{},n=z(e.view_layout);n[s]=Object.assign({},i[t]),e.view_layout=B(n),r[t]=e}return o.cards=r,n[e]=o,Object.assign(Object.assign({},t),{views:n})}function q(t,e){const i=O(t)?t:{},s=Array.isArray(i.cards)?i.cards:[],n=A(i),o=E(n,e),r=P(s,n,void 0,"desktop"),a=m(r,o);return r.map(t=>function(t,e,i){const s=Object.assign(Object.assign({},t),{x:Math.round(t.x*e.scale+e.tx),y:Math.round(t.y*e.scale),w:Math.round(t.w*e.scale),h:Math.round(t.h*e.scale)});return s.pin&&"left"!==s.pin&&(s.ref_w=Math.round(i)),b(s)}(t,a,o))}function T(t,e,i){if("desktop"===i||!(0,u.OY)(i))return t;const s=Array.isArray(null==t?void 0:t.views)?[...t.views]:[],n=O(s[e])?Object.assign({},s[e]):{},o=Array.isArray(n.cards)?[...n.cards]:[],r=q(n,i);for(let t=0;t<o.length;t++){const e=O(o[t])?Object.assign({},o[t]):{},s=z(e.view_layout);s[i]||(s[i]=r[t],e.view_layout=B(s),o[t]=e)}return n.cards=o,s[e]=n,Object.assign(Object.assign({},t),{views:s})}function H(t){t.map((t,e)=>({i:e,z:t.z})).sort((t,e)=>t.z-e.z||t.i-e.i).forEach((e,i)=>{t[e.i].z=i})}class K{constructor(t){this._state=null,this._longPressTimer=null,this._scale=1,this._shiftKey=!1,this._lastClick=null,this._additive=!1,this._artboardOrigin={left:0,top:0},this._callbacks=t,this._onKeyDown=t=>{this._shiftKey=t.shiftKey,"Escape"===t.key&&this._state&&this.cancel()},this._onKeyUp=t=>{this._shiftKey=t.shiftKey}}get state(){return this._state}setScale(t){this._scale=t>0?t:1}attachWindowListeners(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}detachWindowListeners(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this._clearLongPress()}pointerDown(t,e){if(this._state)return;const i="touch"===t.pointerType;this._shiftKey=t.shiftKey,this._additive=t.shiftKey||t.ctrlKey||t.metaKey;const s=()=>{var i,s,n,o;const r=k(e.origin),a=this._clientToArtboard(t.clientX,t.clientY),l={mode:e.mode,cardIndex:e.cardIndex,startX:a.x,startY:a.y,origin:Object.assign({},e.origin),current:Object.assign({},e.origin),pointerId:t.pointerId,moved:!1,clientStartX:t.clientX,clientStartY:t.clientY};void 0!==e.handle&&(l.handle=e.handle),"rotate"===e.mode&&(l.startAngle=w(r.cx,r.cy,a.x,a.y)),this._state=l;try{null===(s=(i=e.captureTarget).setPointerCapture)||void 0===s||s.call(i,t.pointerId)}catch(t){}null===(o=(n=this._callbacks).onStart)||void 0===o||o.call(n,l)};if(i&&"move"===e.mode)return this._clearLongPress(),this._longPressTimer=window.setTimeout(()=>{this._longPressTimer=null,s()},250),void(this._state={mode:"idle",cardIndex:e.cardIndex,startX:0,startY:0,origin:Object.assign({},e.origin),current:Object.assign({},e.origin),pointerId:t.pointerId,moved:!1,clientStartX:t.clientX,clientStartY:t.clientY});t.preventDefault(),s()}pointerMove(t){var e,i,s,n;if(null!==this._longPressTimer){const o=t.clientX-(null!==(i=null===(e=this._state)||void 0===e?void 0:e.clientStartX)&&void 0!==i?i:t.clientX),r=t.clientY-(null!==(n=null===(s=this._state)||void 0===s?void 0:s.clientStartY)&&void 0!==n?n:t.clientY);return void(Math.hypot(o,r)>4&&(this._clearLongPress(),this._state=null))}if(!this._state||"idle"===this._state.mode)return;if(t.pointerId!==this._state.pointerId)return;const o=t.clientX-this._state.clientStartX,r=t.clientY-this._state.clientStartY;if(!this._state.moved&&Math.hypot(o,r)<4)return;this._state.moved=!0,this._shiftKey=t.shiftKey;const a=this._clientToArtboard(t.clientX,t.clientY),l=a.x-this._state.startX,d=a.y-this._state.startY;let c;if("move"===this._state.mode)c=function(t,e,i){return b(Object.assign(Object.assign({},t),{x:t.x+e,y:Math.max(0,t.y+i)}))}(this._state.origin,l,d);else if("resize"===this._state.mode&&this._state.handle)c=function(t,e,i,s){let{x:n,y:o,w:r,h:a}=t;return e.includes("e")&&(r=t.w+i),e.includes("w")&&(r=t.w-i,n=t.x+i),e.includes("s")&&(a=t.h+s),e.includes("n")&&(a=t.h-s,o=t.y+s),r<80&&(e.includes("w")&&(n=t.x+t.w-80),r=80),a<60&&(e.includes("n")&&(o=t.y+t.h-60),a=60),b(Object.assign(Object.assign({},t),{x:n,y:o,w:r,h:a}))}(this._state.origin,this._state.handle,l,d);else{if("rotate"!==this._state.mode||void 0===this._state.startAngle)return;{const t=k(this._state.origin),e=w(t.cx,t.cy,a.x,a.y);c=function(t,e,i,s){let n=t.r+(i-e);return s&&(n=function(t,e=15){return p(t,e)}(n,15)),b(Object.assign(Object.assign({},t),{r:n}))}(this._state.origin,this._state.startAngle,e,this._shiftKey)}}this._state.current=c,this._callbacks.onMove(this._state)}pointerUp(t){var e;if(null!==this._longPressTimer){this._clearLongPress();const t=null===(e=this._state)||void 0===e?void 0:e.cardIndex;return this._state=null,void(void 0!==t&&this._emitClick(t))}if(!this._state||"idle"===this._state.mode)return void(this._state=null);if(t.pointerId!==this._state.pointerId)return;const i=this._state;this._state=null,i.moved||"move"!==i.mode?this._callbacks.onEnd(i,!1):this._emitClick(i.cardIndex)}_emitClick(t){var e,i,s,n,o,r;if(this._additive)return this._lastClick=null,void(null===(i=(e=this._callbacks).onClick)||void 0===i||i.call(e,t,!0));const a=Date.now(),l=this._lastClick;if(l&&l.index===t&&a-l.time<=350)return this._lastClick=null,void(null===(n=(s=this._callbacks).onDoubleClick)||void 0===n||n.call(s,t));this._lastClick={index:t,time:a},null===(r=(o=this._callbacks).onClick)||void 0===r||r.call(o,t,!1)}cancel(){if(this._clearLongPress(),!this._state||"idle"===this._state.mode)return void(this._state=null);const t=this._state;t.current=Object.assign({},t.origin),this._state=null,this._callbacks.onEnd(t,!0)}_clientToArtboard(t,e){const i=this._artboardOrigin;return{x:(t-i.left)/this._scale,y:(e-i.top)/this._scale}}setArtboardOrigin(t,e){this._artboardOrigin={left:t,top:e}}_clearLongPress(){null!==this._longPressTimer&&(clearTimeout(this._longPressTimer),this._longPressTimer=null)}}var N=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const R={left:{icon:o.GuD,key:"menu_pin_left",label:"Left"},center:{icon:o.kVQ,key:"menu_pin_center",label:"Center"},right:{icon:o.BIl,key:"menu_pin_right",label:"Right"},stretch:{icon:o.M1z,key:"menu_pin_stretch",label:"Left & right"}},X=["n","s","e","w","ne","nw","se","sw"];let U=class extends s.WF{constructor(){super(...arguments),this.card=null,this.cardIndex=0,this.editMode=!1,this.selected=!1,this.stacked=!1,this.editingAllowed=!0,this.scale=1,this.language="en",this._hover=!1,this._menuOpen=!1,this._touchStarted=!1,this._onFocus=()=>{this._hover=!0},this._onBlur=()=>{this._menuOpen||(this._hover=!1)},this._onMouseEnter=()=>{this._touchStarted||(this._hover=!0)},this._onMouseLeave=()=>{this._menuOpen||(this._hover=!1)},this._documentClicked=t=>{this._hover=t.composedPath().includes(this),this._hover||(this._menuOpen=!1),document.removeEventListener("click",this._documentClicked)},this._onContextMenu=t=>{this.editMode&&this.editingAllowed&&(t.preventDefault(),t.stopPropagation(),this._hover=!0,this._menuOpen=!0,this._fire("fs-select-card",{cardIndex:this.cardIndex}),document.addEventListener("click",this._documentClicked))}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._onFocus),this.addEventListener("blur",this._onBlur),this.addEventListener("mouseenter",this._onMouseEnter),this.addEventListener("mouseleave",this._onMouseLeave),this.addEventListener("contextmenu",this._onContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._onFocus),this.removeEventListener("blur",this._onBlur),this.removeEventListener("mouseenter",this._onMouseEnter),this.removeEventListener("mouseleave",this._onMouseLeave),this.removeEventListener("contextmenu",this._onContextMenu),document.removeEventListener("click",this._documentClicked)}updated(t){(t.has("layout")||t.has("stacked"))&&this._applyPosition(),t.has("card")&&this.card&&this._mountCard(),t.has("editMode")&&(this.toggleAttribute("tabindex",this.editMode&&this.editingAllowed),this.editMode&&this.editingAllowed?this.setAttribute("tabindex","0"):this.removeAttribute("tabindex")),(t.has("selected")||t.has("editMode"))&&(this.toggleAttribute("selected",this.selected&&this.editMode),this.editMode||(this._menuOpen=!1)),t.has("stacked")&&this.toggleAttribute("stacked",this.stacked)}_applyPosition(){var t;!this.stacked&&this.layout&&(this.style.left=`${this.layout.x}px`,this.style.top=`${this.layout.y}px`,this.style.width=`${this.layout.w}px`,this.style.height=`${this.layout.h}px`,this.style.zIndex=String(null!==(t=this.layout.z)&&void 0!==t?t:0),this.style.transform=this.layout.r?`rotate(${this.layout.r}deg)`:"")}_mountCard(){var t;const e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(".card-slot");if(e&&this.card){for(;e.firstChild;)e.removeChild(e.firstChild);try{this.card.layout="grid"}catch(t){}e.appendChild(this.card)}}firstUpdated(){this._mountCard(),this._applyPosition()}_showChrome(){return this.editMode&&this.editingAllowed&&(this._hover||this.selected||this._menuOpen)}_icon(t){return s.qy`<svg viewBox="0 0 24 24"><path d=${t}></path></svg>`}_t(t,e){return(0,c.kg)(`freespace.${t}`,this.language,e)}_fire(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}_onOverlayPointerDown(t){this.editMode&&this.editingAllowed&&(t.target.closest(".more, .menu, .handle, .rotate-zone")||("touch"===t.pointerType&&(this._touchStarted=!0),this._fire("fs-interaction-start",{cardIndex:this.cardIndex,mode:"move",origin:this.layout,pointerEvent:t,captureTarget:this})))}_onHandlePointerDown(t,e){t.stopPropagation(),t.preventDefault(),this._fire("fs-interaction-start",{cardIndex:this.cardIndex,mode:"resize",handle:e,origin:this.layout,pointerEvent:t,captureTarget:this})}_onRotatePointerDown(t){t.stopPropagation(),t.preventDefault(),this._fire("fs-interaction-start",{cardIndex:this.cardIndex,mode:"rotate",origin:this.layout,pointerEvent:t,captureTarget:this})}_toggleMenu(t){t.stopPropagation(),this._menuOpen=!this._menuOpen,this._menuOpen&&(document.addEventListener("click",this._documentClicked),this._fire("fs-select-card",{cardIndex:this.cardIndex}))}_setPin(t,e){e.stopPropagation(),this._menuOpen=!1,this._fire("fs-set-pin",{cardIndex:this.cardIndex,pin:t})}_menuAction(t,e){switch(e.stopPropagation(),this._menuOpen=!1,t){case"edit":this._fire("fs-edit-card",{cardIndex:this.cardIndex});break;case"duplicate":this._fire("fs-duplicate-card",{cardIndex:this.cardIndex});break;case"copy":this._fire("fs-copy-card",{cardIndex:this.cardIndex});break;case"cut":this._fire("fs-cut-card",{cardIndex:this.cardIndex});break;case"delete":this._fire("fs-delete-card",{cardIndex:this.cardIndex});break;case"forward":case"backward":case"front":case"back":this._fire("fs-z-order",{cardIndex:this.cardIndex,action:t});break;case"reset-rotation":this._fire("fs-reset-rotation",{cardIndex:this.cardIndex})}}render(){const t=this._showChrome();return s.qy`
      <div class="frame">
        <div class="card-slot"></div>
        ${this.editMode&&this.editingAllowed?s.qy`
              <div
                class="overlay ${t?"visible":""}"
                @pointerdown=${this._onOverlayPointerDown}
              >
                <div class="control-overlay"></div>
                <div class="control-icon">${this._icon(o.iEg)}</div>
                <button
                  type="button"
                  class="more"
                  aria-label=${this._t("menu_options","Card options")}
                  @click=${this._toggleMenu}
                  @pointerdown=${t=>t.stopPropagation()}
                >
                  ${this._icon(o.TdJ)}
                </button>
                ${this._menuOpen?s.qy`
                      <ul class="menu" role="menu">
                        <li>
                          <button type="button" @click=${t=>this._menuAction("edit",t)}>
                            ${this._icon(o.Q43)} ${this._t("menu_edit","Edit")}
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            @click=${t=>this._menuAction("duplicate",t)}
                          >
                            ${this._icon(o.df3)} ${this._t("tb_duplicate","Duplicate")}
                          </button>
                        </li>
                        <li>
                          <button type="button" @click=${t=>this._menuAction("copy",t)}>
                            ${this._icon(o.$BT)} ${this._t("menu_copy","Copy")}
                          </button>
                        </li>
                        <li>
                          <button type="button" @click=${t=>this._menuAction("cut",t)}>
                            ${this._icon(o.y0W)} ${this._t("menu_cut","Cut")}
                          </button>
                        </li>
                        <li class="divider" role="separator"></li>
                        <li>
                          <button
                            type="button"
                            @click=${t=>this._menuAction("forward",t)}
                          >
                            ${this._icon(o.QP)} ${this._t("tb_forward","Bring forward")}
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            @click=${t=>this._menuAction("backward",t)}
                          >
                            ${this._icon(o.cUU)} ${this._t("tb_backward","Send backward")}
                          </button>
                        </li>
                        <li>
                          <button type="button" @click=${t=>this._menuAction("front",t)}>
                            ${this._icon(o.lml)} ${this._t("tb_front","Bring to front")}
                          </button>
                        </li>
                        <li>
                          <button type="button" @click=${t=>this._menuAction("back",t)}>
                            ${this._icon(o.DDH)} ${this._t("tb_back","Send to back")}
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            @click=${t=>this._menuAction("reset-rotation",t)}
                          >
                            ${this._icon(o.VWA)} ${this._t("menu_reset_rotation","Reset rotation")}
                          </button>
                        </li>
                        <li class="divider" role="separator"></li>
                        <li class="menu-label" role="presentation">${this._t("menu_pin_to","Pin to")}</li>
                        ${h.Ce.map(t=>{var e,i,n,o;return s.qy`
                            <li>
                              <button
                                type="button"
                                role="menuitemradio"
                                aria-checked=${(null!==(i=null===(e=this.layout)||void 0===e?void 0:e.pin)&&void 0!==i?i:"left")===t?"true":"false"}
                                class=${(null!==(o=null===(n=this.layout)||void 0===n?void 0:n.pin)&&void 0!==o?o:"left")===t?"active":""}
                                @click=${e=>this._setPin(t,e)}
                              >
                                ${this._icon(R[t].icon)} ${this._t(R[t].key,R[t].label)}
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
                            ${this._icon(o.y_G)} ${this._t("tb_delete","Delete")}
                          </button>
                        </li>
                      </ul>
                    `:s.s6}
              </div>
              ${t?s.qy`
                    ${X.map(t=>s.qy`
                        <div
                          class="handle ${t}"
                          @pointerdown=${e=>this._onHandlePointerDown(e,t)}
                        ></div>
                      `)}
                  `:s.s6}
              ${this.selected?s.qy`
                    <div
                      class="rotate-zone nw"
                      title=${this._t("menu_rotate","Rotate")}
                      @pointerdown=${this._onRotatePointerDown}
                    >
                      ${this._icon(o.VWA)}
                    </div>
                  `:s.s6}
            `:s.s6}
      </div>
    `}};U.styles=s.AH`
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
  `,N([(0,n.MZ)({attribute:!1})],U.prototype,"card",void 0),N([(0,n.MZ)({attribute:!1})],U.prototype,"layout",void 0),N([(0,n.MZ)({type:Number})],U.prototype,"cardIndex",void 0),N([(0,n.MZ)({type:Boolean})],U.prototype,"editMode",void 0),N([(0,n.MZ)({type:Boolean})],U.prototype,"selected",void 0),N([(0,n.MZ)({type:Boolean})],U.prototype,"stacked",void 0),N([(0,n.MZ)({type:Boolean})],U.prototype,"editingAllowed",void 0),N([(0,n.MZ)({type:Number})],U.prototype,"scale",void 0),N([(0,n.MZ)({attribute:!1})],U.prototype,"language",void 0),N([(0,n.wk)()],U.prototype,"_hover",void 0),N([(0,n.wk)()],U.prototype,"_menuOpen",void 0),U=N([(0,n.EM)(h.WS)],U);var Y=function(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};const Z={desktop:o.F5c,laptop:o.Jf0,tablet:o.Fzw,phone:o.vrq};let V=class extends s.WF{get _selected(){return this._selection.length?this._selection[this._selection.length-1]:null}set _selected(t){this._selection=null===t?[]:[t]}constructor(){super(),this.index=0,this.narrow=!1,this.isStrategy=!1,this.cards=[],this.badges=[],this.sections=[],this._options=A(void 0),this._layouts=[],this._alignTarget="selection",this._snapOn=!0,this._scale=1,this._artboardWidth=1200,this._artboardHeight=800,this._artboardOffsetX=0,this._devicePreview=!1,this._showWidthBounds=!1,this._following=!1,this._frameLeft=0,this._frameWidth=0,this._selection=[],this._marquee=null,this._groupOrigins=null,this._marqueeStart=null,this._guides={vertical:[],horizontal:[]},this._discoverable=!1,this._connectInstalled=!1,this._liveBreakpoint="desktop",this._editBreakpoint="desktop",this._containerWidth=1200,this._resizeObserver=null,this._optimistic=new Map,this._optimisticCardCount=-1,this._saving=!1,this._pendingSave=null,this._savingAll=!1,this._pendingAll=null,this._fillHeightPx=0,this._rawLayouts=[],this._pinWidth=-1,this._unsubSectionsWidth=null,this._onWindowResize=()=>{this._fillHeightPx=0,this._updateScale()},this._onFsStart=t=>{var e;const i=t.detail;if(!this._editingAllowed())return;const s=this._artboardRect();s&&this._engine.setArtboardOrigin(s.left,s.top);const n=i.pointerEvent,o=n.shiftKey||n.ctrlKey||n.metaKey,r=this._selection.includes(i.cardIndex);o||r||(this._selected=i.cardIndex),this._groupOrigins="move"===i.mode&&this._selection.length>1&&this._selection.includes(i.cardIndex)?new Map(this._selection.filter(t=>t!==i.cardIndex&&this._layouts[t]).map(t=>[t,this._layouts[t]])):null,this._engine.pointerDown(i.pointerEvent,Object.assign(Object.assign({cardIndex:i.cardIndex,mode:i.mode},void 0!==i.handle?{handle:i.handle}:{}),{origin:null!==(e=this._layouts[i.cardIndex])&&void 0!==e?e:i.origin,captureTarget:i.captureTarget}))},this._onPointerMove=t=>{this._engine.pointerMove(t)},this._onPointerUp=t=>{this._engine.pointerUp(t)},this._onMarqueeMove=t=>{const e=this._marqueeStart;if(!e||t.pointerId!==e.pointerId)return;if(!e.moved&&Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY)<4)return;e.moved=!0;const i=this._artboardPoint(t.clientX,t.clientY);if(!i)return;const s={left:Math.min(e.x,i.x),top:Math.min(e.y,i.y),right:Math.max(e.x,i.x),bottom:Math.max(e.y,i.y)};this._marquee=s;const n=function(t,e){const i=[];return t.forEach((t,s)=>{const n=$(t);n.left<e.right&&n.right>e.left&&n.top<e.bottom&&n.bottom>e.top&&i.push(s)}),i}(this._layouts,s);this._selection=e.additive?[...new Set([...e.base,...n])]:n},this._onMarqueeUp=t=>{const e=this._marqueeStart;e&&t.pointerId===e.pointerId&&(window.removeEventListener("pointermove",this._onMarqueeMove),window.removeEventListener("pointerup",this._onMarqueeUp),window.removeEventListener("pointercancel",this._onMarqueeUp),this._marqueeStart=null,this._marquee=null,e.moved||e.additive||(this._selection=[]))},this._onFsSelect=t=>{const{cardIndex:e}=t.detail;this._selection.includes(e)||(this._selected=e)},this._onArtboardPointerDown=t=>{if(!this._editMode())return;if(t.composedPath().some(t=>t instanceof HTMLElement&&t.tagName.toLowerCase()===h.WS))return;const e=this._artboardPoint(t.clientX,t.clientY);this._editingAllowed()&&"touch"!==t.pointerType&&0===t.button&&e?(t.preventDefault(),this._marqueeStart={x:e.x,y:e.y,additive:t.shiftKey||t.ctrlKey||t.metaKey,base:[...this._selection],pointerId:t.pointerId,moved:!1,clientX:t.clientX,clientY:t.clientY},window.addEventListener("pointermove",this._onMarqueeMove),window.addEventListener("pointerup",this._onMarqueeUp),window.addEventListener("pointercancel",this._onMarqueeUp)):this._selected=null},this._onFsEdit=t=>{const{cardIndex:e}=t.detail;this._editCard(e)},this._onFsDuplicate=t=>{const{cardIndex:e}=t.detail;this.dispatchEvent(new CustomEvent("ll-duplicate-card",{detail:{path:[this.index,e]},bubbles:!0,composed:!0}))},this._onFsCopy=t=>{const{cardIndex:e}=t.detail;this.dispatchEvent(new CustomEvent("ll-copy-card",{detail:{path:[this.index,e]},bubbles:!0,composed:!0}))},this._onFsCut=t=>{const{cardIndex:e}=t.detail;this.dispatchEvent(new CustomEvent("ll-copy-card",{detail:{path:[this.index,e]},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("ll-delete-card",{detail:{path:[this.index,e],silent:!0},bubbles:!0,composed:!0}))},this._onFsDelete=t=>{const{cardIndex:e}=t.detail;this.dispatchEvent(new CustomEvent("ll-delete-card",{detail:{path:[this.index,e],silent:!1},bubbles:!0,composed:!0}))},this._onFsZOrder=async t=>{const{cardIndex:e,action:i}=t.detail,s=function(t,e,i){if(e<0||e>=t.length)return t.map(t=>Object.assign({},t));const s=t.map(t=>Object.assign({},t)),n=s.map(t=>t.z),o=Math.max(0,...n),r=Math.min(0,...n),a=s[e].z;switch(i){case"front":s[e].z=o+1;break;case"back":s[e].z=r-1;break;case"forward":{const t=n.filter(t=>t>a).sort((t,e)=>t-e);s[e].z=t.length?t[0]+.001:a+1,H(s);break}case"backward":{const t=n.filter(t=>t<a).sort((t,e)=>e-t);s[e].z=t.length?t[0]-.001:a-1,H(s);break}}return s}(this._layouts,e,i);await this._persistAllLayouts(s)},this._onFsResetRotation=async t=>{const{cardIndex:e}=t.detail,i=this._layouts[e];i&&await this._updateCardLayout(e,Object.assign(Object.assign({},i),{r:0}))},this._onFsSetPin=async t=>{const{cardIndex:e,pin:i}=t.detail;this._setPin(e,i)},this._onKeyDown=t=>{if(!this._editingAllowed())return;const e=t.composedPath()[0];if(e&&("INPUT"===e.tagName||"TEXTAREA"===e.tagName))return;if((t.metaKey||t.ctrlKey)&&"a"===t.key.toLowerCase())return t.preventDefault(),void(this._selection=this._layouts.map((t,e)=>e));if(null===this._selected)return;const i=this._selected,s=this._layouts[i];if(!s)return;const n=t.shiftKey?10:1,o=this._selection.length>1;if("Escape"===t.key)return this._selected=null,void this._engine.cancel();if("Enter"===t.key)return t.preventDefault(),void this._editCard(i);if("Delete"===t.key||"Backspace"===t.key)return t.preventDefault(),o?void this._deleteSelection():void this.dispatchEvent(new CustomEvent("ll-delete-card",{detail:{path:[this.index,i],silent:!1},bubbles:!0,composed:!0}));if(o&&t.key.startsWith("Arrow")){t.preventDefault();const e="ArrowLeft"===t.key?-n:"ArrowRight"===t.key?n:0,i="ArrowUp"===t.key?-n:"ArrowDown"===t.key?n:0,s=new Set(this._selection);return void this._persistAllLayouts(this._layouts.map((t,n)=>s.has(n)?b(Object.assign(Object.assign({},t),{x:t.x+e,y:t.y+i})):t))}if("["===t.key)return t.preventDefault(),void this._onFsZOrder(new CustomEvent("fs-z-order",{detail:{cardIndex:i,action:"backward"}}));if("]"===t.key)return t.preventDefault(),void this._onFsZOrder(new CustomEvent("fs-z-order",{detail:{cardIndex:i,action:"forward"}}));let r=s;if("ArrowLeft"===t.key)r=Object.assign(Object.assign({},s),{x:s.x-n});else if("ArrowRight"===t.key)r=Object.assign(Object.assign({},s),{x:s.x+n});else if("ArrowUp"===t.key)r=Object.assign(Object.assign({},s),{y:Math.max(0,s.y-n)});else{if("ArrowDown"!==t.key)return;r=Object.assign(Object.assign({},s),{y:s.y+n})}t.preventDefault(),this._updateCardLayout(i,r)},this._engine=new K({onMove:t=>this._onInteractionMove(t),onEnd:(t,e)=>this._onInteractionEnd(t,e),onClick:(t,e)=>{e?this._selection=this._selection.includes(t)?this._selection.filter(e=>e!==t):[...this._selection,t]:this._selected=t},onDoubleClick:t=>this._editCard(t)})}setConfig(t){this._config=t,this._options=A(t),this._rebuildLayouts()}connectedCallback(){super.connectedCallback(),this._engine.attachWindowListeners(),this._unsubSectionsWidth=a.Es.subscribe(()=>{this._applyFullWidthAttr(),this._fillHeightPx=0,this._updateScale()}),this._refreshGating(),this._applyFullWidthAttr(),window.addEventListener("resize",this._onWindowResize),this.addEventListener("pointermove",this._onPointerMove),this.addEventListener("pointerup",this._onPointerUp),this.addEventListener("pointercancel",this._onPointerUp),this.addEventListener("fs-interaction-start",this._onFsStart),this.addEventListener("fs-select-card",this._onFsSelect),this.addEventListener("fs-edit-card",this._onFsEdit),this.addEventListener("fs-duplicate-card",this._onFsDuplicate),this.addEventListener("fs-copy-card",this._onFsCopy),this.addEventListener("fs-cut-card",this._onFsCut),this.addEventListener("fs-delete-card",this._onFsDelete),this.addEventListener("fs-z-order",this._onFsZOrder),this.addEventListener("fs-reset-rotation",this._onFsResetRotation),this.addEventListener("fs-set-pin",this._onFsSetPin),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var t,e;super.disconnectedCallback(),this._engine.detachWindowListeners(),window.removeEventListener("pointermove",this._onMarqueeMove),window.removeEventListener("pointerup",this._onMarqueeUp),window.removeEventListener("pointercancel",this._onMarqueeUp),this._marqueeStart=null,null===(t=this._unsubSectionsWidth)||void 0===t||t.call(this),this._unsubSectionsWidth=null,null===(e=this._resizeObserver)||void 0===e||e.disconnect(),this._resizeObserver=null,window.removeEventListener("resize",this._onWindowResize),this.removeEventListener("pointermove",this._onPointerMove),this.removeEventListener("pointerup",this._onPointerUp),this.removeEventListener("pointercancel",this._onPointerUp),this.removeEventListener("fs-interaction-start",this._onFsStart),this.removeEventListener("fs-select-card",this._onFsSelect),this.removeEventListener("fs-edit-card",this._onFsEdit),this.removeEventListener("fs-duplicate-card",this._onFsDuplicate),this.removeEventListener("fs-copy-card",this._onFsCopy),this.removeEventListener("fs-cut-card",this._onFsCut),this.removeEventListener("fs-delete-card",this._onFsDelete),this.removeEventListener("fs-z-order",this._onFsZOrder),this.removeEventListener("fs-reset-rotation",this._onFsResetRotation),this.removeEventListener("fs-set-pin",this._onFsSetPin),this.removeEventListener("keydown",this._onKeyDown)}firstUpdated(){const t=this.renderRoot.querySelector(".viewport");t&&"undefined"!=typeof ResizeObserver&&(this._resizeObserver=new ResizeObserver(()=>this._updateScale()),this._resizeObserver.observe(t)),this._updateScale()}willUpdate(t){var e;if((t.has("cards")||t.has("_config"))&&this._rebuildLayouts(),t.has("hass")&&this._refreshGating(),t.has("lovelace")){const t=!!(null===(e=this.lovelace)||void 0===e?void 0:e.editMode),i=t!==this.hasAttribute("edit");this.toggleAttribute("edit",t),t||(this._selected=null,this._guides={vertical:[],horizontal:[]}),i&&this._rebuildLayouts()}}updated(t){(t.has("_options")||t.has("_layouts")||t.has("_editBreakpoint"))&&this._updateScale()}_lang(){var t,e,i;return null!==(i=null===(e=null===(t=this.hass)||void 0===t?void 0:t.locale)||void 0===e?void 0:e.language)&&void 0!==i?i:"en"}_t(t,e){return(0,c.kg)(`freespace.${t}`,this._lang(),e)}_refreshGating(){this._connectInstalled=(0,l.Jo)(this.hass),this._discoverable=r.D.isDiscoverable(this.hass)}_applyFullWidthAttr(){const t=a.Es.get().mode;this.toggleAttribute("data-uc-full-width","full"===t)}_preferFullWidth(){return"full"===a.Es.get().mode}_cardsOutsideWidthBounds(){if(!(this._showWidthBounds&&this._artboardWidth>0))return!1;const t=this._artboardWidth;return this._layouts.some(e=>e.x<0||e.x+e.w>t)}_editMode(){var t;return!!(null===(t=this.lovelace)||void 0===t?void 0:t.editMode)&&!this.isStrategy}_activeBreakpoint(){return this._editMode()?this._editBreakpoint:this._liveBreakpoint}_optKey(t,e){return`${null!=e?e:this._activeBreakpoint()}:${t}`}_canvasWidth(){return E(this._options,this._activeBreakpoint())}_editingAllowed(){return this._editMode()&&this._discoverable&&!this._useStacked()&&!this._following}_useStacked(){if("phone"!==this._activeBreakpoint())return!1;const t=this._viewConfig();return function(t,e){if("stack"!==e.narrow)return!1;for(const e of t)if(O(e)&&I(z(e.view_layout),"phone"))return!1;return!0}(Array.isArray(t.cards)?t.cards:[],this._options)}_viewConfig(){var t,e,i,s,n;return null!==(n=null!==(s=null===(i=null===(e=null===(t=this.lovelace)||void 0===t?void 0:t.config)||void 0===e?void 0:e.views)||void 0===i?void 0:i[this.index])&&void 0!==s?s:this._config)&&void 0!==n?n:{}}_rebuildLayouts(){this._computeLayouts(),this._updateScale()}_followsDesktop(t){return("laptop"===t||"tablet"===t)&&!this._isCustom(t,{views:[this._viewConfig()]},0)}_computeLayouts(){var t,e;const i=this._activeBreakpoint();this._following=this._followsDesktop(i);const s=this._following?"desktop":i,n=this._viewConfig(),o=Array.isArray(n.cards)?n.cards:[],r=Math.max(null!==(e=null===(t=this.cards)||void 0===t?void 0:t.length)&&void 0!==e?e:0,o.length);r!==this._optimisticCardCount&&(this._optimistic.clear(),this._optimisticCardCount=r);const a=Array.from({length:r},(t,e)=>{var i;return null!==(i=o[e])&&void 0!==i?i:{}}),l=Array.from({length:r},(t,e)=>{var i;return null!==(i=this._optimistic.get(this._optKey(e,s)))&&void 0!==i?i:null});this._rawLayouts=P(a,this._options,l,s),this._layouts=this._rawLayouts,this._pinWidth=-1}_commitLayouts(t){this._rawLayouts=t,this._pinWidth=this._artboardWidth,this._layouts=t}_commitLayout(t,e){this._optimistic.set(this._optKey(t),e),this._commitLayouts(this._layouts.map((i,s)=>s===t?e:i))}_grid(){return this._snapOn?this._options.grid:0}_availableViewportPx(){if("undefined"==typeof window)return 0;if(this._fillHeightPx>0)return this._fillHeightPx;const t=this.getBoundingClientRect().top,e=t>=-40&&t<window.innerHeight?Math.floor(window.innerHeight-Math.max(0,t)-8):Math.floor(.85*window.innerHeight);return this._fillHeightPx=Math.max(320,e),this._fillHeightPx}_artboardRect(){var t,e;const i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(".artboard");return null!==(e=null==i?void 0:i.getBoundingClientRect())&&void 0!==e?e:null}_onInteractionMove(t){let e=t.current;const i="move"===t.mode?this._groupOrigins:null;if("move"===t.mode){const s=this._layouts.filter((e,s)=>s===t.cardIndex||!(null==i?void 0:i.has(s))),n=s.indexOf(this._layouts[t.cardIndex]),o=function(t,e){const i=[],s=[];return t.forEach((t,n)=>{if(n===e)return;const o=$(t);i.push(o.left,(o.left+o.right)/2,o.right),s.push(o.top,(o.top+o.bottom)/2,o.bottom)}),{vertical:i,horizontal:s}}(s,n),r=function(t,e,i=6){const s=$(t),n=[s.left,(s.left+s.right)/2,s.right],o=[s.top,(s.top+s.bottom)/2,s.bottom];let r=0,a=0;const l=[],d=[];let c=i+1;for(const t of e.vertical)for(const e of n){const s=t-e;Math.abs(s)<c?(c=Math.abs(s),r=s,l.length=0,l.push(t)):Math.abs(s)===c&&Math.abs(s)<=i&&l.push(t)}c>i&&(r=0,l.length=0);let h=i+1;for(const t of e.horizontal)for(const e of o){const s=t-e;Math.abs(s)<h?(h=Math.abs(s),a=s,d.length=0,d.push(t)):Math.abs(s)===h&&Math.abs(s)<=i&&d.push(t)}return h>i&&(a=0,d.length=0),{layout:b(Object.assign(Object.assign({},t),{x:t.x+r,y:t.y+a})),activeV:l,activeH:d}}(e,o);e=r.layout,this._guides={vertical:r.activeV,horizontal:r.activeH}}else this._guides={vertical:[],horizontal:[]};if(this._grid()>0&&"rotate"!==t.mode&&(e=_(e,this._grid())),!i)return void this._commitLayout(t.cardIndex,e);const s=e.x-t.origin.x,n=e.y-t.origin.y;this._commitLayouts(this._layouts.map((o,r)=>{if(r===t.cardIndex)return e;const a=i.get(r);return a?b(Object.assign(Object.assign({},a),{x:a.x+s,y:a.y+n})):o}))}async _onInteractionEnd(t,e){var i;this._guides={vertical:[],horizontal:[]};const s=this._groupOrigins;if(this._groupOrigins=null,e)return this._optimistic.delete(this._optKey(t.cardIndex)),null==s||s.forEach((t,e)=>this._optimistic.delete(this._optKey(e))),void this._rebuildLayouts();if(s)return void await this._persistAllLayouts(this._layouts);let n=null!==(i=this._layouts[t.cardIndex])&&void 0!==i?i:t.current;this._grid()>0&&"rotate"!==t.mode&&(n=_(n,this._grid())),this._commitLayout(t.cardIndex,n),await this._persistLayout(t.cardIndex,n)}_artboardPoint(t,e){const i=this._artboardRect();return i&&this._scale>0?{x:(t-i.left)/this._scale,y:(e-i.top)/this._scale}:null}async _persistLayout(t,e){var i;if(!(null===(i=this.lovelace)||void 0===i?void 0:i.saveConfig))return;let s=this._activeBreakpoint();if(this._saving)this._pendingSave={cardIndex:t,layout:e,breakpoint:s};else{this._saving=!0;try{let i={cardIndex:t,layout:e,breakpoint:s};for(;i;){t=i.cardIndex,e=i.layout,s=i.breakpoint,this._pendingSave=null;const n=W(this._breakpointBase(this.lovelace.config,s),this.index,t,e,this._grid(),s);await this.lovelace.saveConfig(n),this._dropOptimistic(this._optKey(t,s),e),i=this._pendingSave}}catch(e){console.warn("[FreeSpace] save failed",e),this._optimistic.delete(this._optKey(t,s)),this._rebuildLayouts()}finally{this._saving=!1}}}async _persistAllLayouts(t){var e;if(!(null===(e=this.lovelace)||void 0===e?void 0:e.saveConfig))return;const i=this._activeBreakpoint();if(t.forEach((t,e)=>this._optimistic.set(this._optKey(e,i),t)),this._commitLayouts(t),this._savingAll)return void(this._pendingAll={layouts:t,bp:i});this._savingAll=!0;let s={layouts:t,bp:i};try{for(;s;){const t=s;this._pendingAll=null;try{const e=this._breakpointBase(this.lovelace.config,t.bp);await this.lovelace.saveConfig(F(e,this.index,t.layouts,t.bp)),t.layouts.forEach((e,i)=>this._dropOptimistic(this._optKey(i,t.bp),e))}catch(e){console.warn("[FreeSpace] save failed",e),t.layouts.forEach((e,i)=>this._dropOptimistic(this._optKey(i,t.bp),e)),this._rebuildLayouts()}s=this._pendingAll}}finally{this._savingAll=!1}}_dropOptimistic(t,e){this._optimistic.get(t)===e&&this._optimistic.delete(t)}_isCustom(t,e,i){var s,n,o;void 0===e&&(e=null===(s=this.lovelace)||void 0===s?void 0:s.config),void 0===i&&(i=this.index);const r=null===(o=null===(n=null==e?void 0:e.views)||void 0===n?void 0:n[i])||void 0===o?void 0:o.cards;return function(t,e){return"desktop"===e||t.some(t=>O(t)&&I(z(t.view_layout),e))}(Array.isArray(r)?r:[],t)}_breakpointBase(t,e){return"desktop"===e||this._isCustom(e,t)?t:T(t,this.index,e)}async _setBreakpointMode(t){var e;const i=this._editBreakpoint;if(!(null===(e=this.lovelace)||void 0===e?void 0:e.saveConfig)||"desktop"===i)return;if("custom"===t===this._isCustom(i))return;const s=u.HL[i].label;if("desktop"!==t||await d.W.confirm(this._t("reset_to_desktop_title","Use the Desktop layout?").replace("{bp}",s),this._t("reset_to_desktop_body","Your {bp} positions will be removed and {bp} will follow the Desktop layout again.").replace(/\{bp\}/g,s),{destructive:!0,confirmText:this._t("reset_to_desktop_confirm","Use Desktop")}))try{const e=this.lovelace.config,s="custom"===t?T(e,this.index,i):function(t,e,i){if("desktop"===i)return t;const s=Array.isArray(null==t?void 0:t.views)?[...t.views]:[],n=O(s[e])?Object.assign({},s[e]):{},o=Array.isArray(n.cards)?[...n.cards]:[];for(let t=0;t<o.length;t++){if(!O(o[t]))continue;const e=z(o[t].view_layout);e[i]&&(delete e[i],o[t]=Object.assign(Object.assign({},o[t]),{view_layout:B(e)}))}return n.cards=o,s[e]=n,Object.assign(Object.assign({},t),{views:s})}(e,this.index,i);this._selection=[],this._optimistic.clear(),await this.lovelace.saveConfig(s),this._rebuildLayouts()}catch(t){console.warn("[FreeSpace] breakpoint layout change failed",t)}}async _deleteSelection(){var t;const e=[...this._selection];if(e.length&&(null===(t=this.lovelace)||void 0===t?void 0:t.saveConfig)&&await d.W.confirm(this._t("delete_selected_title","Delete {count} cards?").replace("{count}",String(e.length)),this._t("delete_selected_body","The selected cards will be removed from this view."),{destructive:!0,confirmText:this._t("tb_delete","Delete")}))try{this._selection=[],this._optimistic.clear(),await this.lovelace.saveConfig(function(t,e,i){const s=new Set(i),n=Array.isArray(null==t?void 0:t.views)?[...t.views]:[],o=O(n[e])?Object.assign({},n[e]):{},r=Array.isArray(o.cards)?o.cards:[];return o.cards=r.filter((t,e)=>!s.has(e)),n[e]=o,Object.assign(Object.assign({},t),{views:n})}(this.lovelace.config,this.index,e))}catch(t){console.warn("[FreeSpace] delete failed",t)}}_alignSelection(t){this._persistAllLayouts("canvas"===this._alignTarget?function(t,e,i,s){const n=e.map(e=>t[e]).filter(Boolean);if(!n.length)return t;const o=y(n);let r=0,a=0;if("left"===i)r=f-o.left;else if("center"===i)r=(s-(o.right-o.left))/2-o.left;else if("right"===i)r=s-f-o.right;else{if("top"!==i)return t;a=f-o.top}const l=new Set(e);return t.map((t,e)=>l.has(e)?b(Object.assign(Object.assign({},t),{x:Math.round(t.x+r),y:Math.round(t.y+a)})):t)}(this._layouts,this._selection,t,this._artboardWidth):function(t,e,i){const s=e.map(e=>t[e]).filter(Boolean);if(s.length<2)return t;const n=y(s),o=new Set(e);return t.map((t,e)=>{if(!o.has(e))return t;let{x:s,y:r}=t;return"left"===i?s=n.left:"right"===i?s=n.right-t.w:"center"===i?s=(n.left+n.right)/2-t.w/2:"top"===i?r=n.top:"bottom"===i?r=n.bottom-t.h:"middle"===i&&(r=(n.top+n.bottom)/2-t.h/2),b(Object.assign(Object.assign({},t),{x:Math.round(s),y:Math.round(r)}))})}(this._layouts,this._selection,t))}_resetSelectionToDesktop(){const t=this._activeBreakpoint();if("desktop"===t||!this._selection.length)return;const e=q(this._viewConfig(),t),i=new Set(this._selection);this._persistAllLayouts(this._layouts.map((t,s)=>i.has(s)&&e[s]?v(e[s],this._artboardWidth):t))}_resetDesktopButton(){if("desktop"===this._activeBreakpoint())return s.s6;const t=u.HL[this._activeBreakpoint()].label;return this._tbButton({icon:o.r6y,label:this._t("tb_reset_desktop","Reset to Desktop"),title:this._t("tb_reset_desktop_hint","Put the selected cards back where Desktop has them, shrunk to fit {bp}").replace("{bp}",t),onClick:()=>this._resetSelectionToDesktop()})}_distributeSelection(t){this._persistAllLayouts(function(t,e,i){if(e.length<3)return t;const s="horizontal"===i?"x":"y",n="horizontal"===i?"w":"h",o=[...e].filter(e=>t[e]).sort((e,i)=>t[e][s]-t[i][s]),r=t[o[0]],a=t[o[o.length-1]],l=(a[s]+a[n]-r[s]-o.reduce((e,i)=>e+t[i][n],0))/(o.length-1),d=[...t];let c=r[s];for(const e of o)d[e]=b(Object.assign(Object.assign({},t[e]),{[s]:Math.round(c)})),c+=t[e][n]+l;return d}(this._layouts,this._selection,t))}_pinSelection(t){const e=new Set(this._selection);this._persistAllLayouts(this._layouts.map((i,s)=>e.has(s)?g(i,t,this._artboardWidth):i))}_editCard(t){this._selected=t,this.dispatchEvent(new CustomEvent("ll-edit-card",{detail:{path:[this.index,t]},bubbles:!0,composed:!0}))}_setEditBreakpoint(t){t!==this._editBreakpoint&&(this._selected=null,this._editBreakpoint=t,this._fillHeightPx=0,this._rebuildLayouts(),this._updateScale())}_updateScale(){var t;const e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(".viewport");if(!e)return this._scale=1,this._artboardOffsetX=0,this._devicePreview=!1,this._showWidthBounds=!1,void this._engine.setScale(1);const i=e.clientWidth||this._canvasWidth();this._containerWidth=i;const s=(0,u.iW)(i);if(s!==this._liveBreakpoint&&(this._liveBreakpoint=s,this._editMode()||this._computeLayouts()),this._useStacked())return this._scale=1,this._artboardWidth=i,this._artboardOffsetX=0,this._devicePreview=!1,this._showWidthBounds=!1,0!==this._pinWidth&&(this._pinWidth=0,this._layouts=this._rawLayouts),this._engine.setScale(1),this._artboardHeight=D(this._layouts,this._options.min_height),e.style.height="",void(e.style.minHeight="");const n=this._canvasWidth(),o=this._preferFullWidth(),r=this._editMode()&&u.HL[this._editBreakpoint].minWidth<u.HL[s].minWidth;if(this._following){const t=r?n:i,e=r?Math.max(0,Math.round((i-t)/2)):0,s=m(this._rawLayouts,t);this._devicePreview=r,this._showWidthBounds=r,this._frameLeft=e,this._frameWidth=t,this._scale=s.scale,this._artboardOffsetX=e+s.tx,this._artboardWidth=Math.max(s.right,1),this._engine.setScale(this._scale),this._pinWidth=-2,this._layouts=this._rawLayouts}else r?(this._devicePreview=!0,this._showWidthBounds=!0,this._artboardWidth=n,this._scale=1,this._artboardOffsetX=Math.max(0,Math.round((i-n)/2))):!o&&n>0&&n<i?(this._devicePreview=!1,this._showWidthBounds=!0,this._artboardWidth=n,this._scale=1,this._artboardOffsetX=Math.max(0,Math.round((i-n)/2))):n>i&&i>0&&!o?(this._devicePreview=!1,this._showWidthBounds=!1,this._artboardWidth=n,this._scale=i/n,this._artboardOffsetX=0):(this._devicePreview=!1,this._showWidthBounds=!1,this._artboardWidth=Math.max(i,1),this._scale=1,this._artboardOffsetX=0);this._following||(this._frameLeft=this._artboardOffsetX,this._frameWidth=Math.round(this._artboardWidth*this._scale),this._engine.setScale(this._scale),this._pinWidth!==this._artboardWidth&&(this._pinWidth=this._artboardWidth,this._layouts=function(t,e){return t.map(t=>v(t,e))}(this._rawLayouts,this._artboardWidth)));const a=D(this._layouts,this._options.min_height),l=this._availableViewportPx(),d=this._scale>0&&l>0?Math.ceil(l/this._scale):0;this._artboardHeight=Math.max(a,d,1),e.style.height=this._artboardHeight*this._scale+"px",e.style.minHeight=""}async _updateCardLayout(t,e){this._commitLayout(t,e),await this._persistLayout(t,e)}_setPin(t,e){var i;const s=this._layouts[t];s&&(null!==(i=s.pin)&&void 0!==i?i:"left")!==e&&this._updateCardLayout(t,g(s,e,this._artboardWidth))}_align(t,e){const i=this._layouts[t];i&&this._updateCardLayout(t,function(t,e,i){let{x:s,y:n}=t;return"left"===e?s=f:"right"===e?s=i-t.w-f:"center"===e?s=(i-t.w)/2:"top"===e&&(n=f),b(Object.assign(Object.assign({},t),{x:Math.round(s),y:Math.round(n)}))}(i,e,this._artboardWidth))}_setField(t,e,i){const s=this._layouts[t],n=Number(i);s&&""!==i.trim()&&Number.isFinite(n)?this._updateCardLayout(t,b(Object.assign(Object.assign({},s),{[e]:n}))):this.requestUpdate()}_addCard(){this.dispatchEvent(new CustomEvent("ll-create-card",{bubbles:!0,composed:!0}))}async _importSections(){var t;if(!(null===(t=this.lovelace)||void 0===t?void 0:t.saveConfig))return;const e=function(t,e){const i=null!=e?e:A(t),s=Array.isArray(null==t?void 0:t.cards)?[...t.cards]:[],n=Array.isArray(null==t?void 0:t.sections)?t.sections:[];for(const t of n){if(!O(t))continue;const e=Array.isArray(t.cards)?t.cards:[];for(const t of e)s.push(t)}const o=P(s,i,void 0,"desktop"),r=s.map((t,e)=>{const i=O(t)?Object.assign({},t):{};return i.view_layout=B({desktop:o[e]}),i}),a=Object.assign(Object.assign({},t),{cards:r});return delete a.sections,a}(this._viewConfig(),this._options);e.type="custom:ultra-freespace-view",e.freespace=Object.assign({},this._options);const i=[...this.lovelace.config.views];i[this.index]=e;try{await this.lovelace.saveConfig(Object.assign(Object.assign({},this.lovelace.config),{views:i})),this._optimistic.clear(),this.setConfig(e)}catch(t){console.warn("[FreeSpace] import sections failed",t)}}_icon(t){return s.qy`<svg viewBox="0 0 24 24"><path d=${t}></path></svg>`}_tbButton(t){var e;return s.qy`
      <button
        type="button"
        class="tb-btn ${t.active?"active":""} ${t.danger?"danger":""}"
        title=${null!==(e=t.title)&&void 0!==e?e:t.label}
        aria-label=${t.label}
        aria-pressed=${void 0===t.active?s.s6:t.active?"true":"false"}
        @click=${t.onClick}
      >
        ${this._icon(t.icon)}
        ${t.showLabel?s.qy`<span class="tb-label">${t.label}</span>`:s.s6}
      </button>
    `}_tbField(t,e,i,n){return s.qy`
      <label class="tb-field" title=${this._t(`tb_field_${e}`,i)}>
        ${i}
        <input
          type="number"
          inputmode="decimal"
          .value=${String(Math.round(n))}
          @change=${i=>this._setField(t,e,i.target.value)}
          @keydown=${t=>{"Enter"===t.key&&t.target.blur()}}
        />
      </label>
    `}_renderSelectionTools(t,e){var i;const n=null!==(i=e.pin)&&void 0!==i?i:"left",r=this._preferFullWidth(),a=r?"":` ${this._t("tb_pin_inactive","(takes effect when Full width is on in Hub → Home)")}`,l=this._pinMeta(),d=e=>{this._onFsZOrder(new CustomEvent("fs-z-order",{detail:{cardIndex:t,action:e}}))};return s.qy`
      <span class="tb-sep"></span>
      <div class="tb-group">
        ${this._tbField(t,"x","X",e.x)} ${this._tbField(t,"y","Y",e.y)}
        ${this._tbField(t,"w","W",e.w)} ${this._tbField(t,"h","H",e.h)}
        ${this._tbField(t,"r","°",e.r)}
      </div>
      <span class="tb-sep"></span>
      <div
        class="tb-group ${r?"":"muted"}"
        role="radiogroup"
        aria-label=${this._t("tb_pin","Horizontal pin")}
      >
        ${h.Ce.map(e=>this._tbButton({icon:l[e].icon,label:l[e].label,title:`${l[e].label}${a}`,active:n===e,onClick:()=>this._setPin(t,e)}))}
      </div>
      <span class="tb-sep"></span>
      <div class="tb-group" aria-label=${this._t("tb_align","Align")}>
        ${[["left",o.XTc,this._t("tb_align_left","Align left")],["center",o.DV9,this._t("tb_align_center","Align center")],["right",o.U6c,this._t("tb_align_right","Align right")],["top",o.diJ,this._t("tb_align_top","Align top")]].map(([e,i,s])=>this._tbButton({icon:i,label:s,onClick:()=>this._align(t,e)}))}
      </div>
      <span class="tb-sep"></span>
      <div class="tb-group" aria-label=${this._t("tb_layer","Layer")}>
        ${this._tbButton({icon:o.lml,label:this._t("tb_front","Bring to front"),onClick:()=>d("front")})}
        ${this._tbButton({icon:o.QP,label:this._t("tb_forward","Bring forward"),onClick:()=>d("forward")})}
        ${this._tbButton({icon:o.cUU,label:this._t("tb_backward","Send backward"),onClick:()=>d("backward")})}
        ${this._tbButton({icon:o.DDH,label:this._t("tb_back","Send to back"),onClick:()=>d("back")})}
      </div>
      <span class="tb-sep"></span>
      <div class="tb-group">
        ${this._resetDesktopButton()}
        ${this._tbButton({icon:o.Q43,label:this._t("tb_edit","Edit card"),onClick:()=>this._editCard(t)})}
        ${this._tbButton({icon:o.rt5,label:this._t("tb_duplicate","Duplicate"),onClick:()=>this._onFsDuplicate(new CustomEvent("fs-duplicate-card",{detail:{cardIndex:t}}))})}
        ${this._tbButton({icon:o.y_G,label:this._t("tb_delete","Delete"),danger:!0,onClick:()=>this._onFsDelete(new CustomEvent("fs-delete-card",{detail:{cardIndex:t}}))})}
      </div>
    `}_pinMeta(){return{left:{icon:o.GuD,label:this._t("tb_pin_left","Pin left")},center:{icon:o.kVQ,label:this._t("tb_pin_center","Pin center")},right:{icon:o.BIl,label:this._t("tb_pin_right","Pin right")},stretch:{icon:o.M1z,label:this._t("tb_pin_stretch","Pin left & right (stretch)")}}}_renderMultiTools(){const t=this._selection,e=t.map(t=>this._layouts[t]).filter(Boolean),i=new Set(e.map(t=>{var e;return null!==(e=t.pin)&&void 0!==e?e:"left"})),n=1===i.size?[...i][0]:null,r=this._preferFullWidth(),a=r?"":` ${this._t("tb_pin_inactive","(takes effect when Full width is on in Hub → Home)")}`,l=this._pinMeta(),d=[["left",o.XTc,this._t("tb_align_left","Align left")],["center",o.DV9,this._t("tb_align_center","Align center")],["right",o.U6c,this._t("tb_align_right","Align right")],["top",o.diJ,this._t("tb_align_top","Align top")],["middle",o.LAA,this._t("tb_align_middle","Align middle")],["bottom",o.D3_,this._t("tb_align_bottom","Align bottom")]],c=t.length>=3,u="canvas"===this._alignTarget,p=u?d.filter(([t])=>"middle"!==t&&"bottom"!==t):d;return s.qy`
      <span class="tb-sep"></span>
      <span class="tb-count">
        ${this._t("tb_selected","{count} selected").replace("{count}",String(t.length))}
      </span>
      <span class="tb-sep"></span>
      <div class="tb-segment" role="radiogroup" aria-label=${this._t("tb_align_to","Align to")}>
        ${this._tbButton({icon:o.Lny,label:this._t("tb_align_selection","Selection"),title:this._t("tb_align_selection_hint","Line the cards up with each other"),active:!u,onClick:()=>this._alignTarget="selection"})}
        ${this._tbButton({icon:o.k$o,label:this._t("tb_align_canvas","Canvas"),title:this._t("tb_align_canvas_hint","Move the cards together against the canvas, keeping their spacing"),active:u,onClick:()=>this._alignTarget="canvas"})}
      </div>
      <div class="tb-group" aria-label=${this._t("tb_align","Align")}>
        ${p.map(([t,e,i])=>this._tbButton({icon:e,label:i,onClick:()=>this._alignSelection(t)}))}
      </div>
      <span class="tb-sep"></span>
      <div class="tb-group ${c?"":"muted"}" aria-label=${this._t("tb_distribute","Distribute")}>
        ${this._tbButton({icon:o.lQ0,label:this._t("tb_distribute_h","Distribute horizontally"),title:c?this._t("tb_distribute_h","Distribute horizontally"):this._t("tb_distribute_need","Select 3 or more cards to distribute"),onClick:()=>c&&this._distributeSelection("horizontal")})}
        ${this._tbButton({icon:o.RXF,label:this._t("tb_distribute_v","Distribute vertically"),title:c?this._t("tb_distribute_v","Distribute vertically"):this._t("tb_distribute_need","Select 3 or more cards to distribute"),onClick:()=>c&&this._distributeSelection("vertical")})}
      </div>
      <span class="tb-sep"></span>
      <div
        class="tb-group ${r?"":"muted"}"
        role="radiogroup"
        aria-label=${this._t("tb_pin","Horizontal pin")}
      >
        ${h.Ce.map(t=>this._tbButton({icon:l[t].icon,label:l[t].label,title:`${l[t].label}${a}`,active:n===t,onClick:()=>this._pinSelection(t)}))}
      </div>
      <span class="tb-sep"></span>
      <div class="tb-group">
        ${this._resetDesktopButton()}
        ${this._tbButton({icon:o.y_G,label:this._t("tb_delete","Delete"),danger:!0,onClick:()=>{this._deleteSelection()}})}
      </div>
    `}_renderToolbar(){if(!this._editMode()||!this._discoverable)return s.s6;const t=this._editBreakpoint,e=this._editingAllowed(),i=e?this._selected:null,n=null!==i?this._layouts[i]:void 0,r=e&&this._selection.length>1,a=this._isCustom(t);return s.qy`
      <div class="toolbar" role="toolbar" aria-label=${this._t("toolbar","FreeSpace tools")}>
        <div class="tb-group" role="radiogroup" aria-label=${this._t("breakpoints","Breakpoints")}>
          ${u.eC.map(e=>{const i=u.HL[e];return this._tbButton({icon:Z[e],label:this._t(`bp_${e}`,i.label),title:`${i.label} (≥ ${i.minWidth}px)`,active:e===t,showLabel:!0,onClick:()=>this._setEditBreakpoint(e)})})}
        </div>
        ${"desktop"!==t?s.qy`
              <span class="tb-sep"></span>
              <div
                class="tb-segment"
                role="radiogroup"
                aria-label=${this._t("bp_layout","{bp} layout").replace("{bp}",u.HL[t].label)}
              >
                ${this._tbButton({icon:o.F5c,label:this._t("use_desktop","Use Desktop"),title:this._t("use_desktop_hint","Show the Desktop layout, shrunk and centered to fit this screen size."),active:!a,showLabel:!0,onClick:()=>{this._setBreakpointMode("desktop")}})}
                ${this._tbButton({icon:o.Q43,label:this._t("custom_layout","Custom"),title:this._t("custom_layout_hint","Arrange this screen size on its own"),active:a,showLabel:!0,onClick:()=>{this._setBreakpointMode("custom")}})}
              </div>
            `:s.s6}
        ${r?this._renderMultiTools():null!==i&&n?this._renderSelectionTools(i,n):s.qy`
              <span class="tb-sep"></span>
              <div class="tb-group">
                ${this._options.grid>0?this._tbButton({icon:o.t4N,label:this._t("tb_snap","Snap to grid"),active:this._snapOn,showLabel:!0,onClick:()=>this._snapOn=!this._snapOn}):s.s6}
                ${this._editingAllowed()?this._tbButton({icon:o.biz,label:this._t("add_card","Add card"),showLabel:!0,onClick:()=>this._addCard()}):s.s6}
              </div>
              ${e?s.qy`<span class="tb-meta">
                    ${this._t("tb_multi_hint","Shift-click or drag on empty space to select several")}
                  </span>`:s.s6}
            `}
      </div>
    `}_renderPinLines(){if(!this._editMode()||null===this._selected||this._selection.length>1)return s.s6;const t=this._layouts[this._selected];if(!(null==t?void 0:t.pin)||"left"===t.pin)return s.s6;const e=this._artboardWidth,i=t.y+t.h/2,n=s.qy`<div class="pin-line" style="left:0;width:${Math.max(0,t.x)}px;top:${i}px"></div>`,o=s.qy`<div
      class="pin-line"
      style="left:${t.x+t.w}px;width:${Math.max(0,e-t.x-t.w)}px;top:${i}px"
    ></div>`;return"right"===t.pin?o:"stretch"===t.pin?s.qy`${n}${o}`:s.qy`<div
      class="pin-line vertical"
      style="left:${e/2}px;top:${t.y-12}px;height:${t.h+24}px"
    ></div>`}render(){var t,e;const i=this._editMode(),n=this._useStacked(),r=this._editingAllowed(),a=function(t){if(!O(t)||!Array.isArray(t.sections))return 0;let e=0;for(const i of t.sections)O(i)&&Array.isArray(i.cards)&&(e+=i.cards.length);return e}(this._viewConfig()),l=n?this._layouts.map((t,e)=>({i:e,y:t.y,x:t.x})).sort((t,e)=>t.y-e.y||t.x-e.x||t.i-e.i).map(t=>t.i):this._layouts.map((t,e)=>e);return s.qy`
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

      ${i&&n?s.qy`
            <p class="hint">
              ${this._t("narrow_hint","Phone is using the Desktop layout, stacked for readability. Choose Custom in the toolbar to arrange a Phone layout.")}
            </p>
          `:s.s6}

      ${i&&this._following&&this._discoverable?s.qy`
            <p class="hint">
              ${this._t("follow_hint","{bp} is using the Desktop layout, shrunk to fit. Choose Custom in the toolbar to arrange {bp} on its own.").replace(/\{bp\}/g,u.HL[this._activeBreakpoint()].label)}
            </p>
          `:s.s6}

      ${i&&r?s.qy`
            <p class="hint">
              ${this._t("select_hint","Click to select, Shift-click or drag on empty space to select several. Double-click to edit. Right-click for the card menu.")}
              ${this._devicePreview?` ${this._t("device_preview_hint","Showing {bp} at true size. Dashed lines mark the device edges.").replace("{bp}",u.HL[this._activeBreakpoint()].label)}`:this._showWidthBounds?` ${this._t("width_bounds_hint","Dashed lines mark the design canvas width (Hub → Home → Full width is off).")}`:""}${this._showWidthBounds&&this._cardsOutsideWidthBounds()?` ${this._t("outside_bounds_hint","Some cards sit outside the lines. They still work; drag them back to keep them inside the canvas.")}`:""}
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
          class="artboard ${n?"stacked":""} ${this._following?"following":""} ${i&&this._devicePreview&&!this._following?"device-preview":""} ${i&&this._showWidthBounds&&!this._following?"width-bounds":""}"
          style=${n?"":`width:${this._artboardWidth}px;height:${this._artboardHeight}px;transform:scale(${this._scale});left:${this._artboardOffsetX}px`}
          @pointerdown=${this._onArtboardPointerDown}
        >
          ${(null===(e=this.cards)||void 0===e?void 0:e.length)?l.map(t=>{const e=this.cards[t];if(!e)return s.s6;const o=this._layouts[t];return o?s.qy`
                  <uc-freespace-item
                    .card=${e}
                    .layout=${o}
                    .cardIndex=${t}
                    .editMode=${i}
                    .editingAllowed=${r}
                    .selected=${this._selection.includes(t)}
                    .stacked=${n}
                    .scale=${this._scale}
                    .language=${this._lang()}
                    @focus=${()=>{this._selection.includes(t)||(this._selected=t)}}
                  ></uc-freespace-item>
                `:s.s6}):s.qy`<div class="empty">${this._t("empty","Add a card to start building.")}</div>`}
          ${n||!this._guides.vertical.length&&!this._guides.horizontal.length?s.s6:s.qy`
                <div class="guides">
                  ${this._guides.vertical.map(t=>s.qy`<div class="guide-v" style="left:${t}px"></div>`)}
                  ${this._guides.horizontal.map(t=>s.qy`<div class="guide-h" style="top:${t}px"></div>`)}
                </div>
              `}
          ${n?s.s6:this._renderPinLines()}
          ${this._marquee?s.qy`<div
                class="marquee"
                style="left:${this._marquee.left}px;top:${this._marquee.top}px;width:${this._marquee.right-this._marquee.left}px;height:${this._marquee.bottom-this._marquee.top}px"
              ></div>`:s.s6}
        </div>
      </div>

      ${r?s.qy`
            <button
              type="button"
              class="fab"
              aria-label=${this._t("add_card","Add card")}
              @click=${()=>this._addCard()}
            >
              <svg viewBox="0 0 24 24"><path d=${o.biz}></path></svg>
            </button>
          `:s.s6}
    `}};V.styles=s.AH`
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
  `,Y([(0,n.MZ)({attribute:!1})],V.prototype,"hass",void 0),Y([(0,n.MZ)({attribute:!1})],V.prototype,"lovelace",void 0),Y([(0,n.MZ)({type:Number})],V.prototype,"index",void 0),Y([(0,n.MZ)({type:Boolean})],V.prototype,"narrow",void 0),Y([(0,n.MZ)({type:Boolean})],V.prototype,"isStrategy",void 0),Y([(0,n.MZ)({attribute:!1})],V.prototype,"cards",void 0),Y([(0,n.MZ)({attribute:!1})],V.prototype,"badges",void 0),Y([(0,n.MZ)({attribute:!1})],V.prototype,"sections",void 0),Y([(0,n.wk)()],V.prototype,"_config",void 0),Y([(0,n.wk)()],V.prototype,"_options",void 0),Y([(0,n.wk)()],V.prototype,"_layouts",void 0),Y([(0,n.wk)()],V.prototype,"_alignTarget",void 0),Y([(0,n.wk)()],V.prototype,"_snapOn",void 0),Y([(0,n.wk)()],V.prototype,"_scale",void 0),Y([(0,n.wk)()],V.prototype,"_artboardWidth",void 0),Y([(0,n.wk)()],V.prototype,"_artboardHeight",void 0),Y([(0,n.wk)()],V.prototype,"_artboardOffsetX",void 0),Y([(0,n.wk)()],V.prototype,"_devicePreview",void 0),Y([(0,n.wk)()],V.prototype,"_showWidthBounds",void 0),Y([(0,n.wk)()],V.prototype,"_following",void 0),Y([(0,n.wk)()],V.prototype,"_frameLeft",void 0),Y([(0,n.wk)()],V.prototype,"_frameWidth",void 0),Y([(0,n.wk)()],V.prototype,"_selection",void 0),Y([(0,n.wk)()],V.prototype,"_marquee",void 0),Y([(0,n.wk)()],V.prototype,"_guides",void 0),Y([(0,n.wk)()],V.prototype,"_discoverable",void 0),Y([(0,n.wk)()],V.prototype,"_connectInstalled",void 0),Y([(0,n.wk)()],V.prototype,"_liveBreakpoint",void 0),Y([(0,n.wk)()],V.prototype,"_editBreakpoint",void 0),Y([(0,n.wk)()],V.prototype,"_containerWidth",void 0),V=Y([(0,n.EM)(h.Zm)],V),h.WS},2063(t,e,i){var s=i(1001);const n=new class{confirm(t,e,i={}){return new Promise(s=>{const{destructive:n=!1,confirmText:o="Confirm",cancelText:r="Cancel"}=i,{overlay:a,style:l}=this._buildOverlay();a.innerHTML='\n        <div class="uc-cd-backdrop"></div>\n        <div class="uc-cd-panel" role="dialog" aria-modal="true" aria-labelledby="uc-cd-title">\n          <h2 class="uc-cd-title" id="uc-cd-title"></h2>\n          <p class="uc-cd-message"></p>\n          <div class="uc-cd-actions"></div>\n        </div>\n      ',a.querySelector(".uc-cd-title").textContent=t,a.querySelector(".uc-cd-message").textContent=e;const d=a.querySelector(".uc-cd-actions"),c=this._makeButton(r,!1,n),h=this._makeButton(o,!0,n);d.appendChild(c),d.appendChild(h);let u=!1;const p=t=>{u||(u=!0,document.removeEventListener("keydown",_),l.remove(),a.remove(),s(t))},_=t=>{if("Escape"===t.key)return t.preventDefault(),void p(!1);if("Enter"===t.key){const e=document.activeElement;if(e===c)return t.preventDefault(),void p(!1);if(e===h)return t.preventDefault(),void p(!0);if(n)return;t.preventDefault(),p(!0)}};a.querySelector(".uc-cd-backdrop").addEventListener("click",()=>p(!1)),c.addEventListener("click",()=>p(!1)),h.addEventListener("click",()=>p(!0)),document.body.appendChild(a),document.addEventListener("keydown",_),requestAnimationFrame(()=>(n?c:h).focus())})}prompt(t,e,i=""){return new Promise(s=>{const{overlay:n,style:o}=this._buildOverlay();n.innerHTML='\n        <div class="uc-cd-backdrop"></div>\n        <div class="uc-cd-panel" role="dialog" aria-modal="true" aria-labelledby="uc-cd-title">\n          <h2 class="uc-cd-title" id="uc-cd-title"></h2>\n          <p class="uc-cd-message"></p>\n          <input class="uc-cd-input" type="text" />\n          <div class="uc-cd-actions"></div>\n        </div>\n      ',n.querySelector(".uc-cd-title").textContent=t,n.querySelector(".uc-cd-message").textContent=e;const r=n.querySelector(".uc-cd-input");r.value=i;const a=n.querySelector(".uc-cd-actions"),l=this._makeButton("Cancel",!1,!1),d=this._makeButton("OK",!0,!1);a.appendChild(l),a.appendChild(d);let c=!1;const h=t=>{c||(c=!0,document.removeEventListener("keydown",u),o.remove(),n.remove(),s(t))},u=t=>{"Escape"===t.key&&(t.preventDefault(),h(null)),"Enter"===t.key&&(t.preventDefault(),h(r.value.trim()||null))};n.querySelector(".uc-cd-backdrop").addEventListener("click",()=>h(null)),l.addEventListener("click",()=>h(null)),d.addEventListener("click",()=>h(r.value.trim()||null)),document.body.appendChild(n),document.addEventListener("keydown",u),requestAnimationFrame(()=>r.focus())})}_makeButton(t,e,i){const s=document.createElement("button");return s.type="button",s.className=e?"uc-cd-btn primary":"uc-cd-btn secondary",e&&i&&s.classList.add("destructive"),s.textContent=t,s}_buildOverlay(){const t=document.createElement("div");t.className="uc-cd-overlay";const e=document.createElement("style");return e.textContent=`\n      .uc-cd-overlay {\n        position: fixed;\n        inset: 0;\n        z-index: ${s.Mu.DIALOG_OVERLAY};\n        display: grid;\n        place-items: center;\n      }\n      .uc-cd-backdrop {\n        position: absolute;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.5);\n      }\n      .uc-cd-panel {\n        position: relative;\n        width: min(92vw, 480px);\n        border-radius: 12px;\n        background: var(--card-background-color, #1f1f1f);\n        color: var(--primary-text-color);\n        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);\n        padding: 20px 20px 16px;\n      }\n      .uc-cd-title {\n        margin: 0 0 8px;\n        font-size: 18px;\n        font-weight: 600;\n        line-height: 1.3;\n        color: var(--primary-text-color);\n      }\n      .uc-cd-message {\n        margin: 0 0 16px;\n        font-size: 14px;\n        line-height: 1.5;\n        color: var(--secondary-text-color);\n      }\n      .uc-cd-input {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 8px 10px;\n        margin-bottom: 16px;\n        border: 1px solid var(--divider-color);\n        border-radius: 6px;\n        background: var(--secondary-background-color, #2b2b2b);\n        color: var(--primary-text-color);\n        font-size: 14px;\n        outline: none;\n      }\n      .uc-cd-input:focus {\n        border-color: var(--primary-color);\n      }\n      .uc-cd-actions {\n        display: flex;\n        justify-content: flex-end;\n        gap: 8px;\n      }\n      .uc-cd-btn {\n        border-radius: 6px;\n        min-height: 36px;\n        padding: 0 16px;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        transition: opacity 0.15s ease;\n      }\n      .uc-cd-btn:hover { opacity: 0.85; }\n      .uc-cd-btn.secondary {\n        border: 1px solid var(--divider-color);\n        background: transparent;\n        color: var(--primary-text-color);\n      }\n      .uc-cd-btn.primary {\n        border: 1px solid var(--primary-color);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .uc-cd-btn.primary.destructive {\n        border-color: var(--error-color, #f44336);\n        background: var(--error-color, #f44336);\n        color: #fff;\n      }\n    `,document.head.appendChild(e),{overlay:t,style:e}}};i.d(e,["W",0,n])}};