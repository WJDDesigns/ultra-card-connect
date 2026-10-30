export const __webpack_esm_ids__=[6971];export const __webpack_esm_modules__={7604(o,e,t){t.d(e,{UltraLockModule:()=>v});var n=t(2618),c=t(6478),r=t(3307),i=t(187);function a(o){return new Promise(e=>{const t=!(n=o.codeFormat)||/^\^?\\d(\{\d+(,\d*)?\}|[+*])?\$?$/.test(n);var n;const c=function(o){if(!o)return null;try{return new RegExp(o)}catch(o){return null}}(o.codeFormat),r=document.createElement("div");r.className="uc-code-overlay",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-label",o.title);const i=document.createElement("div");i.className="uc-code-backdrop";const a=document.createElement("div");a.className="uc-code-panel";const l=document.createElement("h2");l.className="uc-code-title",l.textContent=o.title;const s=document.createElement("input");s.className="uc-code-input",s.type="password",s.autocomplete="off",s.placeholder=o.placeholder,t&&(s.readOnly=!0);const d=document.createElement("div");d.className="uc-code-actions";const u=document.createElement("button");u.type="button",u.className="uc-code-btn",u.textContent=o.cancelText;const p=document.createElement("button");p.type="button",p.className="uc-code-btn primary",p.textContent=o.confirmText,d.append(u,p);const k=()=>{if(h())return void 0!==o.expected&&s.value!==o.expected?(s.value="",s.placeholder=o.wrongText||o.placeholder,s.classList.remove("uc-code-input--wrong"),s.offsetWidth,s.classList.add("uc-code-input--wrong"),void g()):void b(s.value)},h=()=>{const o=s.value;return!!o&&(!c||c.test(o))},g=()=>{p.disabled=!h()};if(a.append(l,s),t){const e=document.createElement("div");e.className="uc-code-pad";const t=["1","2","3","4","5","6","7","8","9","clear","0","back"];for(const n of t){const t=document.createElement("button");t.type="button",t.className="uc-code-key","clear"===n?(t.textContent=o.clearLabel,t.classList.add("uc-code-key--small")):"back"===n?(t.textContent="⌫",t.setAttribute("aria-label","Backspace")):t.textContent=n,t.addEventListener("click",()=>{"clear"===n?s.value="":"back"===n?s.value=s.value.slice(0,-1):s.value+=n,g()}),e.appendChild(t)}a.appendChild(e)}a.appendChild(d),r.append(i,a);const v=document.createElement("style");v.textContent='\n      .uc-code-overlay {\n        position: fixed;\n        inset: 0;\n        z-index: 2147483647;\n        display: grid;\n        place-items: center;\n      }\n      .uc-code-backdrop {\n        position: absolute;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.56);\n      }\n      .uc-code-panel {\n        position: relative;\n        width: min(88vw, 320px);\n        border-radius: 18px;\n        background: var(--card-background-color, #1f1f1f);\n        color: var(--primary-text-color);\n        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42);\n        padding: 20px;\n        display: flex;\n        flex-direction: column;\n        gap: 14px;\n        box-sizing: border-box;\n      }\n      .uc-code-title {\n        margin: 0;\n        font-size: 18px;\n        line-height: 1.25;\n        text-align: center;\n      }\n      .uc-code-input {\n        font: inherit;\n        font-size: 22px;\n        letter-spacing: 6px;\n        text-align: center;\n        padding: 10px 12px;\n        border-radius: 12px;\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        outline: none;\n        width: 100%;\n        box-sizing: border-box;\n      }\n      .uc-code-input:focus {\n        border-color: var(--primary-color);\n      }\n      /* The wide code spacing is for the dots; a hint like "Geben Sie Ihre PIN ein" needs normal spacing */\n      .uc-code-input::placeholder {\n        letter-spacing: normal;\n        font-size: 15px;\n      }\n      .uc-code-input--wrong {\n        border-color: var(--error-color, #db4437);\n        animation: uc-code-shake 0.35s ease;\n      }\n      .uc-code-input--wrong::placeholder {\n        color: var(--error-color, #db4437);\n      }\n      @keyframes uc-code-shake {\n        0%, 100% { transform: translateX(0); }\n        25% { transform: translateX(-6px); }\n        75% { transform: translateX(6px); }\n      }\n      .uc-code-pad {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 10px;\n      }\n      .uc-code-key {\n        font: inherit;\n        font-size: 22px;\n        font-weight: 500;\n        height: 56px;\n        border-radius: 14px;\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        cursor: pointer;\n      }\n      .uc-code-key--small {\n        font-size: 14px;\n      }\n      .uc-code-key:active {\n        background: color-mix(in srgb, var(--primary-color) 25%, var(--secondary-background-color));\n      }\n      .uc-code-actions {\n        display: flex;\n        gap: 10px;\n      }\n      .uc-code-btn {\n        flex: 1;\n        font: inherit;\n        font-weight: 600;\n        min-height: 40px;\n        border-radius: 999px;\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        cursor: pointer;\n      }\n      .uc-code-btn.primary {\n        border-color: var(--primary-color);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .uc-code-btn:disabled {\n        opacity: 0.45;\n        cursor: default;\n      }\n    ';let m=!1;const b=o=>{m||(m=!0,document.removeEventListener("keydown",_,{capture:!0}),r.remove(),v.remove(),e(o))},_=o=>{"Escape"===o.key?(o.preventDefault(),o.stopPropagation(),b(null)):"Enter"===o.key?(o.preventDefault(),o.stopPropagation(),k()):t&&/^[0-9]$/.test(o.key)?(o.preventDefault(),o.stopPropagation(),s.value+=o.key,g()):t&&"Backspace"===o.key&&(o.preventDefault(),o.stopPropagation(),s.value=s.value.slice(0,-1),g())};s.addEventListener("input",g),u.addEventListener("click",()=>b(null)),p.addEventListener("click",k),i.addEventListener("click",()=>b(null)),g(),document.head.appendChild(v),document.body.appendChild(r),document.addEventListener("keydown",_,{capture:!0}),t||requestAnimationFrame(()=>s.focus())})}var l=t(4791),s=function(o,e,t,n){var c,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(c=o[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};let d=class extends n.WF{constructor(){super(...arguments),this.label="",this.icon="mdi:lock",this.doneIcon="",this.disabled=!1,this._offset=0,this._dragging=!1,this._startX=0,this._max=0,this._pointerId=null}_onDown(o){var e;if(o.stopPropagation(),this.disabled)return;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".track"),n=o.currentTarget;t&&(this._max=Math.max(0,t.clientWidth-n.offsetWidth-6),this._startX=o.clientX-this._offset,this._pointerId=o.pointerId,n.setPointerCapture(o.pointerId),this._dragging=!0)}_onMove(o){this._dragging&&o.pointerId===this._pointerId&&(o.stopPropagation(),this._offset=Math.max(0,Math.min(this._max,o.clientX-this._startX)))}_onUp(o){this._dragging&&o.pointerId===this._pointerId&&(o.stopPropagation(),this._dragging=!1,this._pointerId=null,this._max>0&&this._offset>=.9*this._max&&(this._offset=this._max,this._confirm()),this._offset=0)}_onKey(o){this.disabled||"Enter"!==o.key&&"ArrowRight"!==o.key||(o.preventDefault(),this._confirm())}_confirm(){this.dispatchEvent(new CustomEvent("confirmed",{bubbles:!0,composed:!0}))}render(){const o=this._max>0&&this._offset>=.9*this._max&&this.doneIcon?this.doneIcon:this.icon;return n.qy`
      <div class="track">
        <div class="fill" style="width:${this._offset+40+6}px;"></div>
        <div class="label">${this.label}</div>
        <button
          type="button"
          class="knob ${this._dragging?"dragging":""}"
          role="slider"
          aria-label=${this.label}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow=${this._max?Math.round(this._offset/this._max*100):0}
          aria-disabled=${this.disabled?"true":"false"}
          style="transform: translateX(${this._offset}px);"
          @pointerdown=${this._onDown}
          @pointermove=${this._onMove}
          @pointerup=${this._onUp}
          @pointercancel=${this._onUp}
          @click=${o=>o.stopPropagation()}
          @keydown=${this._onKey}
        >
          <ha-icon icon=${o}></ha-icon>
        </button>
      </div>
    `}};d.styles=n.AH`
    :host {
      display: block;
      width: 100%;
      --uc-slide-height: 48px;
    }
    .track {
      position: relative;
      height: var(--uc-slide-height);
      border-radius: 999px;
      background: color-mix(in srgb, var(--uc-slide-accent, var(--primary-color)) 14%, var(--secondary-background-color, #2a2a2a));
      border: 1px solid color-mix(in srgb, var(--uc-slide-accent, var(--primary-color)) 30%, transparent);
      overflow: hidden;
      user-select: none;
      -webkit-user-select: none;
      touch-action: pan-y;
    }
    .fill {
      position: absolute;
      inset: 0 auto 0 0;
      border-radius: 999px;
      background: color-mix(in srgb, var(--uc-slide-accent, var(--primary-color)) 30%, transparent);
      pointer-events: none;
    }
    .label {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: var(--uc-slide-height);
      font-size: 14px;
      font-weight: 600;
      color: var(--primary-text-color);
      opacity: 0.8;
      pointer-events: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .knob {
      position: absolute;
      top: 3px;
      left: 3px;
      width: calc(var(--uc-slide-height) - 8px);
      height: calc(var(--uc-slide-height) - 8px);
      border-radius: 50%;
      border: none;
      padding: 0;
      display: grid;
      place-items: center;
      background: var(--uc-slide-accent, var(--primary-color));
      color: var(--text-primary-color, #fff);
      cursor: grab;
      touch-action: none;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      --mdc-icon-size: 22px;
    }
    .knob ha-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--mdc-icon-size);
      height: var(--mdc-icon-size);
      line-height: 0;
    }
    .knob:not(.dragging) {
      transition: transform 0.25s ease;
    }
    .knob.dragging {
      cursor: grabbing;
    }
    .knob:focus-visible {
      outline: 2px solid var(--primary-text-color);
      outline-offset: 2px;
    }
    :host([disabled]) .track {
      opacity: 0.5;
    }
    :host([disabled]) .knob {
      cursor: default;
    }
  `,s([(0,l.MZ)({type:String})],d.prototype,"label",void 0),s([(0,l.MZ)({type:String})],d.prototype,"icon",void 0),s([(0,l.MZ)({type:String,attribute:"done-icon"})],d.prototype,"doneIcon",void 0),s([(0,l.MZ)({type:Boolean,reflect:!0})],d.prototype,"disabled",void 0),s([(0,l.wk)()],d.prototype,"_offset",void 0),s([(0,l.wk)()],d.prototype,"_dragging",void 0),d=s([(0,l.EM)("uc-slide-confirm")],d);var u=function(o,e,t,n){var c,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(c=o[a])&&(i=(r<3?c(i):r>3?c(e,t,i):c(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i};const p=[50,150,250].flatMap(o=>[50,150,250].map(e=>[e,o]));let k=class extends n.WF{constructor(){super(...arguments),this.pattern="",this.status="",this.disabled=!1,this._path=[],this._pointer=null,this._pointerId=null}clear(){this._path=[],this._pointer=null}updated(){this.status?this.setAttribute("data-status",this.status):this.removeAttribute("data-status")}_toViewBox(o){const e=o.currentTarget.getBoundingClientRect();return[(o.clientX-e.left)/e.width*300,(o.clientY-e.top)/e.height*300]}_hit([o,e]){const t=p.findIndex(([t,n])=>Math.hypot(o-t,e-n)<=42);if(t<0)return;const n=t+1;if(this._path.includes(n))return;const c=[...this._path],r=c[c.length-1];if(r){const o=function(o,e){const[t,n]=p[o-1],[c,r]=p[e-1],i=(t+c)/2,a=(n+r)/2,l=p.findIndex(([o,e])=>o===i&&e===a);return l>=0?l+1:null}(r,n);o&&!c.includes(o)&&c.push(o)}c.push(n),this._path=c}_onDown(o){if(this.disabled||null!==this._pointerId)return;o.preventDefault(),this._pointerId=o.pointerId,o.currentTarget.setPointerCapture(o.pointerId),this.status="",this._path=[];const e=this._toViewBox(o);this._pointer=e,this._hit(e)}_onMove(o){if(o.pointerId!==this._pointerId)return;const e=this._toViewBox(o);this._pointer=e,this._hit(e)}_onUp(o){o.pointerId===this._pointerId&&(this._pointerId=null,this._pointer=null,0!==this._path.length&&this.dispatchEvent(new CustomEvent("pattern-complete",{detail:{pattern:this._path.join("")},bubbles:!0,composed:!0})))}render(){const o=null!==this._pointerId||this._path.length>0?this._path:this.pattern.split("").map(Number).filter(o=>o>=1&&o<=9),e=o.map(o=>p[o-1].join(",")).join(" "),t=o.length?p[o[o.length-1]-1]:null;return n.qy`
      <svg
        viewBox="0 0 300 300"
        role="img"
        aria-label="Pattern"
        @pointerdown=${this._onDown}
        @pointermove=${this._onMove}
        @pointerup=${this._onUp}
        @pointercancel=${this._onUp}
      >
        ${o.length>1?n.JW`<polyline class="line" points=${e}></polyline>`:n.s6}
        ${t&&this._pointer?n.JW`<line class="line" x1=${t[0]} y1=${t[1]} x2=${this._pointer[0]} y2=${this._pointer[1]}></line>`:n.s6}
        ${p.map(([e,t],c)=>{const r=o.includes(c+1);return n.JW`
            ${r?n.JW`<circle class="ring" cx=${e} cy=${t} r="28"></circle>`:n.s6}
            <circle class="dot ${r?"on":""}" cx=${e} cy=${t} r=${r?12:9}></circle>
          `})}
      </svg>
    `}};function h(o){const e=o.supported_features;return"number"==typeof e?e:0}function g(o){return!!(1&o)}k.styles=n.AH`
    :host {
      display: block;
      width: 100%;
      max-width: 260px;
      margin: 0 auto;
      --uc-pattern-color: var(--primary-color);
    }
    :host([disabled]) {
      opacity: 0.5;
      pointer-events: none;
    }
    svg {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 1;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
      cursor: pointer;
    }
    .dot {
      fill: var(--secondary-text-color);
      opacity: 0.55;
    }
    .dot.on {
      fill: var(--uc-pattern-color);
      opacity: 1;
    }
    .ring {
      fill: color-mix(in srgb, var(--uc-pattern-color) 20%, transparent);
    }
    .line {
      fill: none;
      stroke: var(--uc-pattern-color);
      stroke-width: 8;
      stroke-linecap: round;
      stroke-linejoin: round;
      opacity: 0.8;
    }
    :host([data-status='error']) {
      --uc-pattern-color: var(--error-color, #db4437);
    }
    :host([data-status='ok']) {
      --uc-pattern-color: var(--success-color, #43a047);
    }
  `,u([(0,l.MZ)({type:String})],k.prototype,"pattern",void 0),u([(0,l.MZ)({type:String})],k.prototype,"status",void 0),u([(0,l.MZ)({type:Boolean,reflect:!0})],k.prototype,"disabled",void 0),u([(0,l.wk)()],k.prototype,"_path",void 0),u([(0,l.wk)()],k.prototype,"_pointer",void 0),k=u([(0,l.EM)("uc-pattern-pad")],k);class v extends r.m{constructor(){super(...arguments),this._lockPending=new Map,this.handlesOwnDesignStyles=!0,this.metadata={type:"lock",title:"Lock Control",description:"Modern lock control with lock, unlock, and open when supported",author:"WJD Designs",version:"1.0.0",icon:"mdi:lock",category:"interactive",tags:["lock","security","door","interactive"]}}createDefault(o,e){return{id:o||this.generateId("lock"),type:"lock",entity:"",name:"",icon:"",layout:"standard",alignment:"center",show_title:!0,show_icon:!0,show_state:!0,show_open_button:!0,show_lock_buttons:!0,require_confirmation:!0,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(o){var e;const t=[],n=o;return o.id||t.push("Module ID is required"),o.type&&"lock"===o.type||t.push("Module type must be lock"),(null===(e=n.entity)||void 0===e?void 0:e.trim())||t.push("Select a lock entity"),{valid:0===t.length,errors:t}}getLayoutOptions(o){return[{value:"hero",label:(0,c.kg)("editor.lock.layout_hero",o,"Hero")},{value:"standard",label:(0,c.kg)("editor.lock.layout_standard",o,"Standard")},{value:"compact",label:(0,c.kg)("editor.lock.layout_compact",o,"Compact")}]}renderGeneralTab(o,e,t,r){var i,a,l;const s=o,d=s,u=(null===(i=null==e?void 0:e.locale)||void 0===i?void 0:i.language)||"en",p=s.entity?null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[s.entity]:void 0,k=!p||g(h(p.attributes||{}));return n.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,c.kg)("editor.lock.entity_section",u,"Entity"),(0,c.kg)("editor.lock.entity_section_desc",u,"Select the lock to control."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,t,"entity",s.entity||"",o=>{r({entity:o}),setTimeout(()=>this.triggerPreviewUpdate(),50)},["lock"],(0,c.kg)("editor.lock.entity",u,"Lock entity"))}
        </div>
        ${this.renderSettingsSection("","",[{title:(0,c.kg)("editor.lock.name",u,"Name"),description:(0,c.kg)("editor.lock.name_desc",u,"Shown instead of the lock's name from Home Assistant. Leave empty to use that name."),hass:e,data:{name:s.name||""},schema:[this.textField("name")],onChange:o=>{var e,t;r({name:null!==(t=null===(e=o.detail.value)||void 0===e?void 0:e.name)&&void 0!==t?t:""}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
        ${this.renderIconField((0,c.kg)("editor.lock.icon_override",u,"Icon"),(0,c.kg)("editor.lock.icon_override_desc",u,"Search for an icon, or leave empty for the default lock icons. Used in every state unless you set an unlocked icon below."),e,s.icon||"",o=>r({icon:o}))}
        ${this.renderIconField((0,c.kg)("editor.lock.icon_unlocked",u,"Unlocked icon"),(0,c.kg)("editor.lock.icon_unlocked_desc",u,"Optional icon while the lock is unlocked or open"),e,s.icon_unlocked||"",o=>r({icon_unlocked:o}))}

        ${this.renderSettingsSection((0,c.kg)("editor.lock.colors_section",u,"Colors"),(0,c.kg)("editor.lock.colors_desc",u,"Colour the icon, ring, active button and status by state. Leave empty to use the theme colour."),[])}
        ${this.renderColorField((0,c.kg)("editor.lock.locked_color",u,"Locked colour"),"",e,s.locked_color||"","",o=>r({locked_color:o}))}
        ${this.renderColorField((0,c.kg)("editor.lock.unlocked_color",u,"Unlocked colour"),"",e,s.unlocked_color||"","",o=>r({unlocked_color:o}))}
        ${this.renderColorField((0,c.kg)("editor.lock.card_color",u,"Card colour"),(0,c.kg)("editor.lock.card_color_desc",u,"Background of the lock card. Same setting as Background colour in the Design tab."),e,(null===(l=d.design)||void 0===l?void 0:l.background_color)||d.background_color||"","",o=>r(Object.assign({background_color:o},d.design?{design:Object.assign(Object.assign({},d.design),{background_color:o})}:{})))}
        <div style="margin-bottom: 24px;"></div>

        ${this.renderSettingsSection((0,c.kg)("editor.lock.display_section",u,"Display"),(0,c.kg)("editor.lock.display_desc",u,"Choose what to show on the card."),[{title:(0,c.kg)("editor.lock.show_title",u,"Show title"),description:(0,c.kg)("editor.lock.show_title_desc",u,"Display the lock name"),hass:e,data:{show_title:!1!==s.show_title},schema:[this.booleanField("show_title")],onChange:o=>{var e,t;r({show_title:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.show_title)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.lock.show_icon",u,"Show icon"),description:(0,c.kg)("editor.lock.show_icon_desc",u,"Show lock icon (standard / compact / hero)"),hass:e,data:{show_icon:!1!==s.show_icon},schema:[this.booleanField("show_icon")],onChange:o=>{var e,t;r({show_icon:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.show_icon)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.lock.show_state",u,"Show state"),description:(0,c.kg)("editor.lock.show_state_desc",u,"Display locked / unlocked text"),hass:e,data:{show_state:!1!==s.show_state},schema:[this.booleanField("show_state")],onChange:o=>{var e,t;r({show_state:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.show_state)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.lock.show_lock_buttons",u,"Show lock / unlock buttons"),description:(0,c.kg)("editor.lock.show_lock_buttons_desc",u,"Show the Lock and Unlock buttons (the compact layout shows one toggle button). Without them, set the tap action to Toggle to lock and unlock by tapping the card."),hass:e,data:{show_lock_buttons:!1!==s.show_lock_buttons},schema:[this.booleanField("show_lock_buttons")],onChange:o=>{var e,t;r({show_lock_buttons:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.show_lock_buttons)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.lock.show_open_button",u,"Show open button"),description:k?(0,c.kg)("editor.lock.show_open_button_desc",u,"Show Open when the lock supports unlatch (OPEN feature)"):(0,c.kg)("editor.lock.show_open_button_unsupported",u,"This lock can't unlatch (no Open feature), so there's no Open button to show"),hass:e,data:{show_open_button:!1!==s.show_open_button},schema:[Object.assign(Object.assign({},this.booleanField("show_open_button")),{disabled:!k})],onChange:o=>{var e,t;r({show_open_button:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.show_open_button)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        ${this.renderSettingsSection((0,c.kg)("editor.lock.behavior_section",u,"Behavior"),(0,c.kg)("editor.lock.behavior_desc",u,"Safety options for lock actions."),[{title:(0,c.kg)("editor.lock.require_confirmation",u,"Confirm unlock / open"),description:(0,c.kg)("editor.lock.require_confirmation_desc",u,"Ask for confirmation before unlocking or opening"),hass:e,data:{require_confirmation:!1!==s.require_confirmation},schema:[this.booleanField("require_confirmation")],onChange:o=>{var e,t;r({require_confirmation:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.require_confirmation)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.lock.unlock_style",u,"Unlock with"),description:(0,c.kg)("editor.lock.unlock_style_desc",u,"Slide replaces the Unlock and Open buttons with sliders, so a stray tap can't unlock (Hero and Standard layouts; elsewhere it asks for confirmation). Pattern and PIN are checked in the card before unlocking."),hass:e,data:{unlock_style:s.unlock_style||"buttons"},schema:[this.selectField("unlock_style",[{value:"buttons",label:(0,c.kg)("editor.lock.unlock_style_buttons",u,"Buttons")},{value:"slide",label:(0,c.kg)("editor.lock.unlock_style_slide",u,"Slide to unlock")},{value:"pattern",label:(0,c.kg)("editor.lock.unlock_style_pattern",u,"Draw a pattern")},{value:"pin",label:(0,c.kg)("editor.lock.unlock_style_pin",u,"Enter a PIN")}])],onChange:o=>{var e;r({unlock_style:(null===(e=o.detail.value)||void 0===e?void 0:e.unlock_style)||"buttons"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.lock.ask_code",u,"Ask for PIN code"),description:(0,c.kg)("editor.lock.ask_code_desc",u,"Shows a keypad and sends the code to the lock. Automatic asks when the lock needs a code. Choose Never if you set a default code for the lock in Home Assistant."),hass:e,data:{ask_code:s.ask_code||"auto"},schema:[this.selectField("ask_code",[{value:"auto",label:(0,c.kg)("editor.lock.ask_code_auto",u,"Automatic")},{value:"always",label:(0,c.kg)("editor.lock.ask_code_always",u,"Always")},{value:"never",label:(0,c.kg)("editor.lock.ask_code_never",u,"Never")}])],onChange:o=>{var e;r({ask_code:(null===(e=o.detail.value)||void 0===e?void 0:e.ask_code)||"auto"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        ${"pattern"===s.unlock_style?this.renderPatternRecorder(s,r,u):n.s6}
        ${"pin"===s.unlock_style?this.renderPinSetting(s,e,r,u):n.s6}

        ${this.renderSettingsSection((0,c.kg)("editor.lock.layout_section",u,"Layout"),(0,c.kg)("editor.lock.layout_desc",u,"Visual style of the lock control."),[{title:(0,c.kg)("editor.lock.layout",u,"Layout"),description:(0,c.kg)("editor.lock.layout_style_desc",u,"Hero, standard, or compact"),hass:e,data:{layout:s.layout||"standard"},schema:[this.selectField("layout",this.getLayoutOptions(u))],onChange:o=>{var e;r({layout:(null===(e=o.detail.value)||void 0===e?void 0:e.layout)||"standard"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.lock.alignment",u,"Alignment"),description:(0,c.kg)("editor.lock.alignment_desc",u,"Align content"),hass:e,data:{alignment:s.alignment||"center"},schema:[this.selectField("alignment",[{value:"left",label:(0,c.kg)("editor.lock.align_left",u,"Left")},{value:"center",label:"hero"===(s.layout||"standard")?(0,c.kg)("editor.lock.align_center",u,"Center"):(0,c.kg)("editor.lock.align_spread",u,"Spread out")},{value:"right",label:(0,c.kg)("editor.lock.align_right",u,"Right")}])],onChange:o=>{var e;r({alignment:(null===(e=o.detail.value)||void 0===e?void 0:e.alignment)||"center"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
      </div>
    `}renderPatternRecorder(o,e,t){const r=o.unlock_pattern||"",i=r.length>=4?(0,c.kg)("editor.lock.pattern_saved",t,"Pattern saved. Draw again to change it."):(0,c.kg)("editor.lock.pattern_none",t,"No pattern yet, so unlocking uses the normal confirmation.");return n.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,c.kg)("editor.lock.pattern_title",t,"Unlock pattern")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,c.kg)("editor.lock.pattern_desc",t,"Draw the pattern that unlocks and opens this lock. It's saved in the dashboard, so it stops accidental unlocks but isn't a real password.")}
        </div>
        <uc-pattern-pad .pattern=${r} @pattern-complete=${o=>{var n;const r=o.currentTarget,a=null===(n=r.parentElement)||void 0===n?void 0:n.querySelector(".uc-lock-pattern-msg"),l=o.detail.pattern;if(l.length<4)return r.status="error",a&&(a.textContent=(0,c.kg)("editor.lock.pattern_too_short",t,"Connect at least 4 dots")),void setTimeout(()=>{r.clear(),r.status="",a&&(a.textContent=i)},900);r.clear(),e({unlock_pattern:l}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}></uc-pattern-pad>
        <div
          class="uc-lock-pattern-msg"
          style="font-size: 13px; text-align: center; margin-top: 12px; color: var(--secondary-text-color);"
        >
          ${i}
        </div>
      </div>
    `}renderPinSetting(o,e,t,r){const i=o.unlock_pin||"",a=i.length>=4?(0,c.kg)("editor.lock.pin_saved",r,"PIN saved."):(0,c.kg)("editor.lock.pin_none",r,"Enter at least 4 digits. Until then, unlocking uses the normal confirmation.");return n.qy`
      ${this.renderSettingsSection((0,c.kg)("editor.lock.pin_title",r,"Unlock PIN"),(0,c.kg)("editor.lock.pin_desc",r,"The PIN that unlocks and opens this lock. It's checked in the card and saved in the dashboard, so it stops accidental unlocks but isn't a real password. It is not sent to the lock."),[{title:(0,c.kg)("editor.lock.pin_field",r,"PIN"),description:a,hass:e,data:{unlock_pin:i},schema:[this.textField("unlock_pin")],onChange:o=>{var e,n;const c=String(null!==(n=null===(e=o.detail.value)||void 0===e?void 0:e.unlock_pin)&&void 0!==n?n:"").replace(/\D/g,"");t({unlock_pin:c}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
    `}injectLockStyles(){return n.qy`<style>
      ${this.getStyles()}
    </style>`}syncLockPending(o,e){const t=this._lockPending.get(o);t&&(("lock"!==t||"locked"!==e&&"locking"!==e)&&("unlock"!==t||"unlocked"!==e&&"unlocking"!==e)&&("open"!==t||"unlocked"!==e&&"unlocking"!==e)||this._lockPending.delete(o))}renderPreview(o,e,t,r){var l,s,d,u,p,k;const v=o,m=this.resolveEntity(v.entity,t)||v.entity,b=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";if(!m||!(null===(s=null==e?void 0:e.states)||void 0===s?void 0:s[m]))return n.qy`
        ${this.injectLockStyles()}
        <div
          class="uc-lock-wrapper"
          data-uc-role="pane"
          style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border-radius: var(--uc-r-16, 16px); overflow: hidden;"
        >
          ${this.renderGradientErrorState((0,c.kg)("editor.lock.config_needed",b,"Select a lock"),(0,c.kg)("editor.lock.config_needed_desc",b,"Choose a lock entity in the General tab"),"mdi:lock")}
        </div>
      `;const _=e.states[m],y=_.attributes||{},x=String(_.state).toLowerCase();this.syncLockPending(m,x);const f=g(h(y)),w=!1!==v.show_open_button&&f,$=!1!==v.show_lock_buttons,C=$||w,P="unavailable"===x||"unknown"===x,S="locking"===x||"unlocking"===x,E="jammed"===x,L="locked"===x,q="unlocked"===x,I=v.layout||"standard",j=!1!==v.show_title,T=!1!==v.show_icon,z=!1!==v.show_state,U=null===(d=v.icon)||void 0===d?void 0:d.trim(),D=(null===(u=v.name)||void 0===u?void 0:u.trim())||("string"==typeof y.friendly_name?y.friendly_name:"")||(null===(p=m.split(".").pop())||void 0===p?void 0:p.replace(/_/g," "))||"Lock",N=P?(0,c.kg)("editor.lock.unavailable",b,"Unavailable"):E?(0,c.kg)("editor.lock.jammed",b,"Jammed"):"locking"===x?(0,c.kg)("editor.lock.locking",b,"Locking…"):"unlocking"===x?(0,c.kg)("editor.lock.unlocking",b,"Unlocking…"):L?(0,c.kg)("editor.lock.locked",b,"Locked"):q?(0,c.kg)("editor.lock.unlocked",b,"Unlocked"):x.replace(/_/g," "),A=L?"mdi:lock":"mdi:lock-open-variant",O=null===(k=v.icon_unlocked)||void 0===k?void 0:k.trim(),M=(q||"unlocking"===x||"open"===x||"opening"===x)&&O||U||A,F="string"==typeof y.code_format?y.code_format:void 0,R=v.ask_code||"auto",W="always"===R||"auto"===R&&!!F,B="slide"===v.unlock_style&&"compact"!==I,H=v.unlock_pattern||"",X="pattern"===v.unlock_style&&H.length>=4,Z=v.unlock_pin||"",J="pin"===v.unlock_style&&Z.length>=4,G=o=>"open"===o?(0,c.kg)("editor.lock.action_open",b,"Open"):"unlock"===o?(0,c.kg)("editor.lock.action_unlock",b,"Unlock"):(0,c.kg)("editor.lock.action_lock",b,"Lock"),V=async o=>W?a({title:`${G(o)} ${D}`,codeFormat:F,confirmText:G(o),cancelText:(0,c.kg)("editor.lock.cancel",b,"Cancel"),clearLabel:(0,c.kg)("editor.lock.code_clear",b,"Clear"),placeholder:(0,c.kg)("editor.lock.code_placeholder",b,"Code")}):"",K=(o,t)=>{e.callService("lock",o,t?{entity_id:m,code:t}:{entity_id:m})},Y=o=>{this._lockPending.set(m,o),this.triggerPreviewUpdate(!0)},Q=async(o,t=!1)=>{return X?(n={title:`${G(o)} ${D}`,expected:H,hint:(0,c.kg)("editor.lock.pattern_prompt",b,"Draw your pattern"),wrongText:(0,c.kg)("editor.lock.pattern_wrong",b,"Wrong pattern, try again"),cancelText:(0,c.kg)("editor.lock.cancel",b,"Cancel")},new Promise(o=>{const e=document.createElement("div");e.className="uc-pattern-overlay",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",n.title);const t=document.createElement("div");t.className="uc-pattern-backdrop";const c=document.createElement("div");c.className="uc-pattern-panel";const r=document.createElement("h2");r.className="uc-pattern-title",r.textContent=n.title;const i=document.createElement("div");i.className="uc-pattern-message",i.textContent=n.hint;const a=document.createElement("uc-pattern-pad"),l=document.createElement("button");l.type="button",l.className="uc-pattern-btn",l.textContent=n.cancelText,c.append(r,i,a,l),e.append(t,c);const s=document.createElement("style");s.textContent="\n      .uc-pattern-overlay {\n        position: fixed;\n        inset: 0;\n        z-index: 2147483647;\n        display: grid;\n        place-items: center;\n      }\n      .uc-pattern-backdrop {\n        position: absolute;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.56);\n      }\n      .uc-pattern-panel {\n        position: relative;\n        width: min(88vw, 320px);\n        border-radius: 18px;\n        background: var(--card-background-color, #1f1f1f);\n        color: var(--primary-text-color);\n        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42);\n        padding: 20px;\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        box-sizing: border-box;\n      }\n      .uc-pattern-title {\n        margin: 0;\n        font-size: 18px;\n        line-height: 1.25;\n        text-align: center;\n      }\n      .uc-pattern-message {\n        min-height: 18px;\n        font-size: 13px;\n        text-align: center;\n        color: var(--secondary-text-color);\n      }\n      .uc-pattern-message.error {\n        color: var(--error-color, #db4437);\n      }\n      .uc-pattern-btn {\n        font: inherit;\n        font-weight: 600;\n        min-height: 40px;\n        border-radius: 999px;\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        cursor: pointer;\n      }\n    ";let d,u=!1;const p=t=>{u||(u=!0,clearTimeout(d),document.removeEventListener("keydown",k,{capture:!0}),e.remove(),s.remove(),o(t))},k=o=>{"Escape"===o.key&&(o.preventDefault(),o.stopPropagation(),p(!1))};a.addEventListener("pattern-complete",o=>{const e=o.detail.pattern;if(clearTimeout(d),e===n.expected)return a.status="ok",a.disabled=!0,void setTimeout(()=>p(!0),250);a.status="error",i.textContent=n.wrongText,i.classList.add("error"),d=setTimeout(()=>{a.clear(),a.status="",i.textContent=n.hint,i.classList.remove("error")},900)}),a.addEventListener("pointerdown",()=>{clearTimeout(d),a.status="",i.textContent=n.hint,i.classList.remove("error")}),l.addEventListener("click",()=>p(!1)),t.addEventListener("click",()=>p(!1)),document.head.appendChild(s),document.body.appendChild(e),document.addEventListener("keydown",k,{capture:!0})})):J?null!==await a({title:`${G(o)} ${D}`,confirmText:G(o),cancelText:(0,c.kg)("editor.lock.cancel",b,"Cancel"),clearLabel:(0,c.kg)("editor.lock.code_clear",b,"Clear"),placeholder:(0,c.kg)("editor.lock.pin_prompt",b,"Enter your PIN"),expected:Z,wrongText:(0,c.kg)("editor.lock.pin_wrong",b,"Wrong PIN, try again")}):!(!t&&!W)||!1===v.require_confirmation&&!B||(i.n.setHass(e),i.n.showConfirmation({action:"perform-action",perform_action:`lock.${o}`,entity:m},{confirmText:"open"===o?(0,c.kg)("editor.lock.action_open",b,"Open"):(0,c.kg)("editor.lock.action_unlock",b,"Unlock"),cancelText:(0,c.kg)("editor.lock.cancel",b,"Cancel")}));var n},oo=async()=>{const o=await V("lock");null!==o&&(Y("lock"),K("lock",o))},eo=async(o=!1)=>{if(!await Q("unlock",o))return;const e=await V("unlock");null!==e&&(Y("unlock"),K("unlock",e))},to=async(o=!1)=>{if(!await Q("open",o))return;const e=await V("open");null!==e&&(Y("open"),K("open",e))},no=P||S,co=this.createGestureHandlers(`${o.id}-lock`,{tap_action:v.tap_action||{action:"nothing"},hold_action:v.hold_action||{action:"nothing"},double_tap_action:v.double_tap_action||{action:"nothing"},entity:m,module:o,onToggle:()=>{no||(L?eo():oo())}},e,t,[".uc-lock-btn",".uc-lock-chip-btn","uc-slide-confirm"]),ro=L||"locking"===x,io=o=>n.qy`
      <ha-icon
        class="uc-lock-ha-icon ${ro?"uc-lock-ha-icon--locked":""}"
        style="--mdc-icon-size: ${o}px; color: var(--uc-lock-accent, var(--primary-color));"
        icon="${M}"
      ></ha-icon>
    `,ao=()=>B&&C?n.qy`<div class="uc-lock__slides">
            ${$&&!q?n.qy`<uc-slide-confirm
                  .label=${(0,c.kg)("editor.lock.slide_to_unlock",b,"Slide to unlock")}
                  .icon=${"mdi:lock"}
                  .doneIcon=${"mdi:lock-open-variant"}
                  ?disabled=${no}
                  @confirmed=${()=>eo(!0)}
                ></uc-slide-confirm>`:n.s6}
            ${w?n.qy`<uc-slide-confirm
                  .label=${(0,c.kg)("editor.lock.slide_to_open",b,"Slide to open")}
                  .icon=${"mdi:door-closed"}
                  .doneIcon=${"mdi:door-open"}
                  ?disabled=${no}
                  @confirmed=${()=>to(!0)}
                ></uc-slide-confirm>`:n.s6}
          </div>`:n.s6,lo=()=>B?n.qy`${$&&q?n.qy`<button
              type="button"
              class="uc-lock-btn"
              @click=${oo}
              ?disabled=${no}
            >
              <ha-icon style="--mdc-icon-size: 18px;" icon="mdi:lock"></ha-icon>
              ${(0,c.kg)("editor.lock.action_lock",b,"Lock")}
            </button>`:n.s6}`:n.qy`
      ${$?n.qy`<button
        type="button"
        class="uc-lock-btn ${L?"uc-lock-btn--active":""}"
        @click=${oo}
        ?disabled=${no}
      >
        <ha-icon style="--mdc-icon-size: 18px;" icon="mdi:lock"></ha-icon>
        ${(0,c.kg)("editor.lock.action_lock",b,"Lock")}
      </button>
      <button
        type="button"
        class="uc-lock-btn ${q?"uc-lock-btn--active":""}"
        @click=${eo}
        ?disabled=${no}
      >
        <ha-icon style="--mdc-icon-size: 18px;" icon="mdi:lock-open-variant"></ha-icon>
        ${(0,c.kg)("editor.lock.action_unlock",b,"Unlock")}
      </button>`:n.s6}
      ${w?n.qy`<button
            type="button"
            class="uc-lock-btn uc-lock-btn--ghost"
            @click=${to}
            ?disabled=${no}
          >
            <ha-icon style="--mdc-icon-size: 18px;" icon="mdi:door-open"></ha-icon>
            ${(0,c.kg)("editor.lock.action_open",b,"Open")}
          </button>`:n.s6}
    `;let so;const uo=v,po=Object.assign(Object.assign({},uo),uo.design||{}),ko=("left"===po.text_align||"center"===po.text_align||"right"===po.text_align?po.text_align:"")||v.alignment||"center",ho="center"===ko?"":`uc-lock--align-${ko}`,go=T&&!j&&!z&&!C&&!E,vo=go?"uc-lock--icon-only":"";so="hero"===I?n.qy`
        <div class="uc-lock uc-lock--hero ${ho}">
          <div class="uc-lock__visual">
            <div class="uc-lock__glow ${ro?"uc-lock__glow--on":""}"></div>
            <div class="uc-lock-circle ${ro?"uc-lock-circle--locked":""} ${E?"uc-lock-circle--jammed":""}">
              ${T?io(56):n.s6}
            </div>
          </div>
          <div class="uc-lock__identity">
            ${j?n.qy`<h2 class="uc-lock-title">${D}</h2>`:n.s6}
            ${z?n.qy`<span class="uc-lock-badge ${ro?"uc-lock-badge--locked":""} ${E?"uc-lock-badge--jammed":""} ${P?"uc-lock-badge--unavail":""}">
                  ${ro&&!P?n.qy`<span class="uc-lock-status-dot"></span>`:n.s6}
                  ${N}
                </span>`:n.s6}
          </div>
          ${E?n.qy`<p class="uc-lock-warn">${(0,c.kg)("editor.lock.jammed_hint",b,"Check the lock hardware.")}</p>`:n.s6}
          ${C?n.qy`<div class="uc-lock__actions" role="group">${lo()}</div>`:n.s6}
          ${ao()}
        </div>
      `:"compact"===I?n.qy`
        <div class="uc-lock uc-lock--compact ${ho} ${vo}">
          <div class="uc-lock-compact__row">
            ${T?n.qy`<div class="uc-lock-icon-well ${ro?"uc-lock-icon-well--locked":""} ${E?"uc-lock-icon-well--jammed":""}">
                  ${io(18)}
                </div>`:n.s6}
            <span class="uc-lock-chip-label">
              ${j?n.qy`<span class="uc-lock-chip-name">${D}</span>`:z?n.qy`<span class="uc-lock-chip-name">${N}</span>`:n.s6}
              ${j&&z?n.qy`<span class="uc-lock-chip-state">${N}</span>`:n.s6}
            </span>
            ${$?n.qy`<button
                  type="button"
                  class="uc-lock-chip-btn ${ro?"":"uc-lock-chip-btn--active"}"
                  @click=${L?eo:oo}
                  ?disabled=${no}
                >
                  ${L?(0,c.kg)("editor.lock.action_unlock",b,"Unlock"):(0,c.kg)("editor.lock.action_lock",b,"Lock")}
                </button>`:n.s6}
          </div>
        </div>
      `:n.qy`
        <div class="uc-lock uc-lock--standard ${ho} ${vo}">
          <div class="uc-lock-std__row">
            ${T?n.qy`<div class="uc-lock-icon-well uc-lock-icon-well--std ${ro?"uc-lock-icon-well--locked":""} ${E?"uc-lock-icon-well--jammed":""}">
                  ${io(28)}
                </div>`:n.s6}
            ${go?n.s6:n.qy`<div class="uc-lock-std__meta">
                  ${j?n.qy`<h2 class="uc-lock-title uc-lock-title--std">${D}</h2>`:n.s6}
                  ${z?n.qy`<p class="uc-lock-subtitle">${N}</p>`:n.s6}
                </div>`}
            ${C?n.qy`<div class="uc-lock-std__actions" role="group">${lo()}</div>`:n.s6}
          </div>
          ${ao()}
          ${E?n.qy`<p class="uc-lock-warn">${(0,c.kg)("editor.lock.jammed_hint",b,"Check the lock hardware.")}</p>`:n.s6}
        </div>
      `;const mo=this.buildDesignStyles(o,e),bo=Object.entries(mo).filter(([,o])=>null!=o&&""!==o).map(([o,e])=>`${o.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${e}`).join("; "),_o=this.getHoverEffectClass(o),yo=ro?v.locked_color:v.unlocked_color,xo=[yo?`--uc-lock-accent: ${yo}`:"",po.color?`--uc-lock-text: ${po.color}`:"",po.font_size?`--uc-lock-title-size: ${fo=po.font_size,/^\d+(\.\d+)?$/.test(String(fo))?`${fo}px`:String(fo)}`:"",po.font_weight?`--uc-lock-title-weight: ${po.font_weight}`:"",po.font_family?`--uc-lock-font: ${po.font_family}`:""].filter(Boolean).join("; ");var fo;return n.qy`
      ${this.injectLockStyles()}
      <div
        class="uc-lock-wrapper ${_o} ${E?"uc-lock-wrapper--jammed":""} ${co.isActionable?"uc-lock-wrapper--actionable":""}"
        data-uc-role="pane"
        @pointerdown=${co.onPointerDown}
        @pointermove=${co.onPointerMove}
        @pointerup=${co.onPointerUp}
        @pointerleave=${co.onPointerLeave}
        @pointercancel=${co.onPointerCancel}
        @keydown=${co.onKeyDown}
        role=${co.isActionable?"button":n.s6}
        tabindex=${co.isActionable?"0":n.s6}
        style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none); border-radius: var(--uc-r-18, 18px); overflow: hidden; ${xo}; ${bo}"
      >
        ${this.wrapWithAnimation(so,o,e)}
      </div>
    `}getStyles(){return"\n      .uc-lock-wrapper { box-sizing: border-box; }\n      .uc-lock-wrapper--actionable { cursor: pointer; }\n      /* Sliders follow the locked / unlocked colour like the buttons do */\n      .uc-lock-wrapper uc-slide-confirm { --uc-slide-accent: var(--uc-lock-accent, var(--primary-color)); }\n      .uc-lock {\n        box-sizing: border-box;\n        color: var(--uc-lock-text, var(--primary-text-color));\n        font-family: var(--uc-lock-font, inherit);\n      }\n\n      /* ═══ HERO ═══════════════════════════════════ */\n      .uc-lock--hero {\n        padding: 28px 20px 24px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 16px;\n      }\n      .uc-lock__visual {\n        position: relative;\n        width: 140px;\n        height: 140px;\n        flex-shrink: 0;\n      }\n      .uc-lock__glow {\n        position: absolute;\n        inset: -14px;\n        border-radius: 50%;\n        background: radial-gradient(circle, color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 12%, transparent) 0%, transparent 70%);\n        opacity: 0;\n        transition: opacity 0.4s ease;\n        pointer-events: none;\n      }\n      .uc-lock__glow--on { opacity: 1; }\n      .uc-lock-circle {\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        background: radial-gradient(\n          circle at 38% 32%,\n          color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 12%, var(--card-background-color, var(--ha-card-background))) 0%,\n          color-mix(in srgb, var(--card-background-color, var(--ha-card-background)) 92%, var(--uc-lock-accent, var(--primary-color))) 100%\n        );\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 40%, transparent);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        box-shadow: inset 0 2px 16px rgba(0,0,0,0.12);\n        transition: border-color 0.3s ease, box-shadow 0.3s ease;\n        position: relative;\n        z-index: 1;\n      }\n      .uc-lock-circle--locked {\n        border-color: color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 35%, transparent);\n        box-shadow: inset 0 2px 16px rgba(0,0,0,0.14), 0 0 40px color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 12%, transparent);\n      }\n      .uc-lock-circle--jammed {\n        border-color: color-mix(in srgb, var(--error-color, #db4437) 45%, transparent);\n      }\n      .uc-lock__identity {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 8px;\n        text-align: center;\n      }\n      .uc-lock--hero .uc-lock__actions {\n        display: flex;\n        gap: 8px;\n        width: 100%;\n        max-width: 340px;\n      }\n      .uc-lock__slides {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        width: 100%;\n      }\n      .uc-lock--hero .uc-lock__slides {\n        max-width: 340px;\n      }\n      .uc-lock--hero .uc-lock__actions:empty {\n        display: none;\n      }\n      .uc-lock--standard .uc-lock__slides {\n        margin-top: 12px;\n      }\n      .uc-lock--hero.uc-lock--align-left { align-items: flex-start; }\n      .uc-lock--hero.uc-lock--align-left .uc-lock__identity { align-items: flex-start; text-align: left; }\n      .uc-lock--hero.uc-lock--align-right { align-items: flex-end; }\n      .uc-lock--hero.uc-lock--align-right .uc-lock__identity { align-items: flex-end; text-align: right; }\n\n      /* ═══ STANDARD (single row) ══════════════════ */\n      .uc-lock--standard { padding: 14px 16px; }\n      .uc-lock-std__row {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        gap: 12px;\n      }\n      /* 140px basis: when the title can't get that much room (narrow cards), the\n         action buttons wrap onto their own line instead of truncating the title. */\n      .uc-lock-std__meta { flex: 1 1 140px; min-width: 0; overflow: hidden; }\n      .uc-lock-std__actions {\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        gap: 7px;\n      }\n      .uc-lock-std__actions .uc-lock-btn {\n        padding: 7px 14px;\n        font-size: 0.8125rem;\n        border-radius: 999px;\n      }\n      .uc-lock-icon-well--std { width: 40px; height: 40px; }\n      .uc-lock-title--std {\n        font-size: var(--uc-lock-title-size, 0.9375rem);\n        font-weight: var(--uc-lock-title-weight, 700);\n      }\n      .uc-lock-subtitle {\n        margin: 3px 0 0;\n        font-size: 0.8125rem;\n        line-height: 1.35;\n        color: var(--uc-lock-text, var(--secondary-text-color));\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      /* Left / Right pack the row to one side; the default spreads it across the card */\n      .uc-lock--standard.uc-lock--align-left .uc-lock-std__meta,\n      .uc-lock--standard.uc-lock--align-right .uc-lock-std__meta { flex: 0 1 auto; }\n      .uc-lock--standard.uc-lock--align-right .uc-lock-std__row { justify-content: flex-end; }\n      .uc-lock--standard.uc-lock--align-right .uc-lock-std__meta { text-align: right; }\n      .uc-lock--compact.uc-lock--align-left .uc-lock-chip-label,\n      .uc-lock--compact.uc-lock--align-right .uc-lock-chip-label { flex: 0 1 auto; }\n      .uc-lock--compact.uc-lock--align-right .uc-lock-compact__row { justify-content: flex-end; }\n      .uc-lock--compact.uc-lock--align-right .uc-lock-chip-label { text-align: right; }\n\n      /* Icon only: no padding, centred unless Left / Right is picked */\n      .uc-lock--standard.uc-lock--icon-only,\n      .uc-lock--compact.uc-lock--icon-only { padding: 0; }\n      .uc-lock--icon-only .uc-lock-std__row,\n      .uc-lock--icon-only .uc-lock-compact__row { justify-content: center; }\n      .uc-lock--icon-only.uc-lock--align-left .uc-lock-std__row,\n      .uc-lock--icon-only.uc-lock--align-left .uc-lock-compact__row { justify-content: flex-start; }\n      .uc-lock--icon-only.uc-lock--align-right .uc-lock-std__row,\n      .uc-lock--icon-only.uc-lock--align-right .uc-lock-compact__row { justify-content: flex-end; }\n      .uc-lock--compact.uc-lock--icon-only .uc-lock-chip-label { display: none; }\n\n      /* ═══ COMPACT (chip) ═════════════════════════ */\n      .uc-lock--compact { padding: 6px 10px; }\n      .uc-lock-compact__row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n      .uc-lock-chip-label {\n        flex: 1;\n        min-width: 0;\n        display: flex;\n        flex-direction: column;\n        font-size: 0.8125rem;\n        font-weight: 600;\n        color: var(--uc-lock-text, var(--primary-text-color));\n        white-space: nowrap;\n        overflow: hidden;\n      }\n      .uc-lock-chip-name {\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lock-chip-state {\n        font-size: 0.6875rem;\n        font-weight: 500;\n        color: var(--secondary-text-color);\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lock-chip-btn {\n        flex-shrink: 0;\n        font: inherit;\n        font-size: 0.75rem;\n        font-weight: 700;\n        padding: 5px 12px;\n        border-radius: 999px;\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 75%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        transition: background 0.15s, border-color 0.15s, color 0.15s;\n      }\n      .uc-lock-chip-btn:disabled { opacity: 0.45; cursor: not-allowed; }\n      .uc-lock-chip-btn:focus-visible {\n        outline: 2px solid var(--uc-lock-accent, var(--primary-color));\n        outline-offset: 2px;\n      }\n      .uc-lock-chip-btn--active {\n        border-color: color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 50%, transparent);\n        background: color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 14%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--uc-lock-accent, var(--primary-color));\n      }\n\n      /* ═══ SHARED ═════════════════════════════════ */\n      .uc-lock-icon-well {\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        background: color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        border: 1px solid color-mix(in srgb, var(--divider-color) 55%, transparent);\n        transition: box-shadow 0.2s ease, border-color 0.2s ease;\n      }\n      .uc-lock--compact .uc-lock-icon-well {\n        width: 28px; height: 28px;\n        background: transparent;\n        border: none;\n      }\n      .uc-lock-icon-well--locked {\n        border-color: color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 38%, transparent);\n        box-shadow: 0 2px 14px color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 12%, transparent);\n      }\n      .uc-lock-icon-well--jammed {\n        border-color: color-mix(in srgb, var(--error-color, #db4437) 40%, transparent);\n      }\n      .uc-lock-ha-icon { line-height: 1; transition: transform 0.28s ease; }\n      .uc-lock-ha-icon--locked { transform: scale(1.05); }\n      @media (prefers-reduced-motion: reduce) {\n        .uc-lock-ha-icon { transition: none; }\n        .uc-lock-ha-icon--locked { transform: none; }\n      }\n\n      .uc-lock-title {\n        margin: 0;\n        font-size: var(--uc-lock-title-size, 1.25rem);\n        font-weight: var(--uc-lock-title-weight, 800);\n        letter-spacing: -0.02em;\n        line-height: 1.25;\n        color: var(--uc-lock-text, var(--primary-text-color));\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lock-badge {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 4px 14px;\n        border-radius: 999px;\n        font-size: 0.75rem;\n        font-weight: 700;\n        letter-spacing: 0.03em;\n        text-transform: uppercase;\n        background: color-mix(in srgb, var(--divider-color) 15%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--secondary-text-color);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 35%, transparent);\n      }\n      .uc-lock-badge--locked {\n        background: color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 12%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--uc-lock-accent, var(--primary-color));\n        border-color: color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 25%, transparent);\n      }\n      .uc-lock-badge--jammed {\n        background: color-mix(in srgb, var(--error-color, #db4437) 12%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--error-color, #db4437);\n        border-color: color-mix(in srgb, var(--error-color, #db4437) 25%, transparent);\n      }\n      .uc-lock-badge--unavail { opacity: 0.6; }\n      .uc-lock-status-dot {\n        width: 7px; height: 7px;\n        border-radius: 50%;\n        background: var(--uc-lock-accent, var(--primary-color));\n        box-shadow: 0 0 6px color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 60%, transparent);\n        flex-shrink: 0;\n      }\n      .uc-lock-warn {\n        margin: 0;\n        font-size: 0.8125rem;\n        color: var(--error-color, #db4437);\n        font-weight: 600;\n      }\n      .uc-lock-wrapper--jammed .uc-lock-badge {\n        color: color-mix(in srgb, var(--error-color, #db4437) 70%, var(--secondary-text-color));\n      }\n\n      .uc-lock-btn {\n        flex: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        font: inherit;\n        font-size: 0.8125rem;\n        font-weight: 700;\n        padding: 10px 14px;\n        border-radius: var(--uc-r-14, 14px);\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 60%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 6%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        transition: background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s, transform 0.1s;\n      }\n      .uc-lock-btn:active:not(:disabled) { transform: scale(0.97); }\n      .uc-lock-btn:disabled { opacity: 0.4; cursor: not-allowed; }\n      .uc-lock-btn--active {\n        border-color: color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 50%, transparent);\n        background: color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 14%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--uc-lock-accent, var(--primary-color));\n      }\n      .uc-lock-btn:hover:not(:disabled) {\n        border-color: color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 30%, transparent);\n        box-shadow: 0 4px 16px color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 10%, transparent);\n      }\n      .uc-lock-btn:focus-visible {\n        border-color: color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 30%, transparent);\n        box-shadow: 0 4px 16px color-mix(in srgb, var(--uc-lock-accent, var(--primary-color)) 10%, transparent);\n        outline: 2px solid var(--uc-lock-accent, var(--primary-color));\n        outline-offset: 2px;\n      }\n      .uc-lock-btn--ghost {\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        background: transparent;\n        border-color: color-mix(in srgb, var(--divider-color) 40%, transparent);\n      }\n    "}}}};