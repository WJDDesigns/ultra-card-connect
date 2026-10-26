export const __webpack_esm_ids__=[6971];export const __webpack_esm_modules__={7604(o,e,t){t.d(e,{UltraLockModule:()=>g});var n=t(2618),r=t(6478),i=t(3307),c=t(187);var a=t(4791),l=function(o,e,t,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(c=(i<3?r(c):i>3?r(e,t,c):r(e,t))||c);return i>3&&c&&Object.defineProperty(e,t,c),c};let s=class extends n.WF{constructor(){super(...arguments),this.label="",this.icon="mdi:lock",this.doneIcon="",this.disabled=!1,this._offset=0,this._dragging=!1,this._startX=0,this._max=0,this._pointerId=null}_onDown(o){var e;if(o.stopPropagation(),this.disabled)return;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".track"),n=o.currentTarget;t&&(this._max=Math.max(0,t.clientWidth-n.offsetWidth-6),this._startX=o.clientX-this._offset,this._pointerId=o.pointerId,n.setPointerCapture(o.pointerId),this._dragging=!0)}_onMove(o){this._dragging&&o.pointerId===this._pointerId&&(o.stopPropagation(),this._offset=Math.max(0,Math.min(this._max,o.clientX-this._startX)))}_onUp(o){this._dragging&&o.pointerId===this._pointerId&&(o.stopPropagation(),this._dragging=!1,this._pointerId=null,this._max>0&&this._offset>=.9*this._max&&(this._offset=this._max,this._confirm()),this._offset=0)}_onKey(o){this.disabled||"Enter"!==o.key&&"ArrowRight"!==o.key||(o.preventDefault(),this._confirm())}_confirm(){this.dispatchEvent(new CustomEvent("confirmed",{bubbles:!0,composed:!0}))}render(){const o=this._max>0&&this._offset>=.9*this._max&&this.doneIcon?this.doneIcon:this.icon;return n.qy`
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
    `}};s.styles=n.AH`
    :host {
      display: block;
      width: 100%;
      --uc-slide-height: 48px;
    }
    .track {
      position: relative;
      height: var(--uc-slide-height);
      border-radius: 999px;
      background: color-mix(in srgb, var(--primary-color) 14%, var(--secondary-background-color, #2a2a2a));
      border: 1px solid color-mix(in srgb, var(--primary-color) 30%, transparent);
      overflow: hidden;
      user-select: none;
      -webkit-user-select: none;
      touch-action: pan-y;
    }
    .fill {
      position: absolute;
      inset: 0 auto 0 0;
      border-radius: 999px;
      background: color-mix(in srgb, var(--primary-color) 30%, transparent);
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
      background: var(--primary-color);
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
  `,l([(0,a.MZ)({type:String})],s.prototype,"label",void 0),l([(0,a.MZ)({type:String})],s.prototype,"icon",void 0),l([(0,a.MZ)({type:String,attribute:"done-icon"})],s.prototype,"doneIcon",void 0),l([(0,a.MZ)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),l([(0,a.wk)()],s.prototype,"_offset",void 0),l([(0,a.wk)()],s.prototype,"_dragging",void 0),s=l([(0,a.EM)("uc-slide-confirm")],s);var d=function(o,e,t,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,t,n);else for(var a=o.length-1;a>=0;a--)(r=o[a])&&(c=(i<3?r(c):i>3?r(e,t,c):r(e,t))||c);return i>3&&c&&Object.defineProperty(e,t,c),c};const u=[50,150,250].flatMap(o=>[50,150,250].map(e=>[e,o]));let p=class extends n.WF{constructor(){super(...arguments),this.pattern="",this.status="",this.disabled=!1,this._path=[],this._pointer=null,this._pointerId=null}clear(){this._path=[],this._pointer=null}updated(){this.status?this.setAttribute("data-status",this.status):this.removeAttribute("data-status")}_toViewBox(o){const e=o.currentTarget.getBoundingClientRect();return[(o.clientX-e.left)/e.width*300,(o.clientY-e.top)/e.height*300]}_hit([o,e]){const t=u.findIndex(([t,n])=>Math.hypot(o-t,e-n)<=42);if(t<0)return;const n=t+1;if(this._path.includes(n))return;const r=[...this._path],i=r[r.length-1];if(i){const o=function(o,e){const[t,n]=u[o-1],[r,i]=u[e-1],c=(t+r)/2,a=(n+i)/2,l=u.findIndex(([o,e])=>o===c&&e===a);return l>=0?l+1:null}(i,n);o&&!r.includes(o)&&r.push(o)}r.push(n),this._path=r}_onDown(o){if(this.disabled||null!==this._pointerId)return;o.preventDefault(),this._pointerId=o.pointerId,o.currentTarget.setPointerCapture(o.pointerId),this.status="",this._path=[];const e=this._toViewBox(o);this._pointer=e,this._hit(e)}_onMove(o){if(o.pointerId!==this._pointerId)return;const e=this._toViewBox(o);this._pointer=e,this._hit(e)}_onUp(o){o.pointerId===this._pointerId&&(this._pointerId=null,this._pointer=null,0!==this._path.length&&this.dispatchEvent(new CustomEvent("pattern-complete",{detail:{pattern:this._path.join("")},bubbles:!0,composed:!0})))}render(){const o=null!==this._pointerId||this._path.length>0?this._path:this.pattern.split("").map(Number).filter(o=>o>=1&&o<=9),e=o.map(o=>u[o-1].join(",")).join(" "),t=o.length?u[o[o.length-1]-1]:null;return n.qy`
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
        ${u.map(([e,t],r)=>{const i=o.includes(r+1);return n.JW`
            ${i?n.JW`<circle class="ring" cx=${e} cy=${t} r="28"></circle>`:n.s6}
            <circle class="dot ${i?"on":""}" cx=${e} cy=${t} r=${i?12:9}></circle>
          `})}
      </svg>
    `}};function k(o){const e=o.supported_features;return"number"==typeof e?e:0}function h(o){return!!(1&o)}p.styles=n.AH`
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
  `,d([(0,a.MZ)({type:String})],p.prototype,"pattern",void 0),d([(0,a.MZ)({type:String})],p.prototype,"status",void 0),d([(0,a.MZ)({type:Boolean,reflect:!0})],p.prototype,"disabled",void 0),d([(0,a.wk)()],p.prototype,"_path",void 0),d([(0,a.wk)()],p.prototype,"_pointer",void 0),p=d([(0,a.EM)("uc-pattern-pad")],p);class g extends i.m{constructor(){super(...arguments),this._lockPending=new Map,this.handlesOwnDesignStyles=!0,this.metadata={type:"lock",title:"Lock Control",description:"Modern lock control with lock, unlock, and open when supported",author:"WJD Designs",version:"1.0.0",icon:"mdi:lock",category:"interactive",tags:["lock","security","door","interactive"]}}createDefault(o,e){return{id:o||this.generateId("lock"),type:"lock",entity:"",name:"",icon:"",layout:"standard",alignment:"center",show_title:!0,show_icon:!0,show_state:!0,show_open_button:!0,show_lock_buttons:!0,require_confirmation:!0,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(o){var e;const t=[],n=o;return o.id||t.push("Module ID is required"),o.type&&"lock"===o.type||t.push("Module type must be lock"),(null===(e=n.entity)||void 0===e?void 0:e.trim())||t.push("Select a lock entity"),{valid:0===t.length,errors:t}}getLayoutOptions(o){return[{value:"hero",label:(0,r.kg)("editor.lock.layout_hero",o,"Hero")},{value:"standard",label:(0,r.kg)("editor.lock.layout_standard",o,"Standard")},{value:"compact",label:(0,r.kg)("editor.lock.layout_compact",o,"Compact")}]}renderGeneralTab(o,e,t,i){var c,a;const l=o,s=(null===(c=null==e?void 0:e.locale)||void 0===c?void 0:c.language)||"en",d=l.entity?null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[l.entity]:void 0,u=!d||h(k(d.attributes||{}));return n.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.lock.entity_section",s,"Entity"),(0,r.kg)("editor.lock.entity_section_desc",s,"Select the lock to control."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,t,"entity",l.entity||"",o=>{i({entity:o}),setTimeout(()=>this.triggerPreviewUpdate(),50)},["lock"],(0,r.kg)("editor.lock.entity",s,"Lock entity"))}
        </div>
        ${this.renderSettingsSection("","",[{title:(0,r.kg)("editor.lock.icon_override",s,"Icon override"),description:(0,r.kg)("editor.lock.icon_override_desc",s,"Optional mdi: icon; leave empty for default lock icons"),hass:e,data:{icon:l.icon||""},schema:[this.textField("icon")],onChange:o=>{var e,t;i({icon:null!==(t=null===(e=o.detail.value)||void 0===e?void 0:e.icon)&&void 0!==t?t:""}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        ${this.renderSettingsSection((0,r.kg)("editor.lock.display_section",s,"Display"),(0,r.kg)("editor.lock.display_desc",s,"Choose what to show on the card."),[{title:(0,r.kg)("editor.lock.show_title",s,"Show title"),description:(0,r.kg)("editor.lock.show_title_desc",s,"Display the lock name"),hass:e,data:{show_title:!1!==l.show_title},schema:[this.booleanField("show_title")],onChange:o=>{var e,t;i({show_title:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.show_title)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.lock.show_icon",s,"Show icon"),description:(0,r.kg)("editor.lock.show_icon_desc",s,"Show lock icon (standard / compact / hero)"),hass:e,data:{show_icon:!1!==l.show_icon},schema:[this.booleanField("show_icon")],onChange:o=>{var e,t;i({show_icon:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.show_icon)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.lock.show_state",s,"Show state"),description:(0,r.kg)("editor.lock.show_state_desc",s,"Display locked / unlocked text"),hass:e,data:{show_state:!1!==l.show_state},schema:[this.booleanField("show_state")],onChange:o=>{var e,t;i({show_state:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.show_state)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.lock.show_lock_buttons",s,"Show lock / unlock buttons"),description:(0,r.kg)("editor.lock.show_lock_buttons_desc",s,"Show the Lock and Unlock buttons (the compact layout shows one toggle button)"),hass:e,data:{show_lock_buttons:!1!==l.show_lock_buttons},schema:[this.booleanField("show_lock_buttons")],onChange:o=>{var e,t;i({show_lock_buttons:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.show_lock_buttons)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.lock.show_open_button",s,"Show open button"),description:u?(0,r.kg)("editor.lock.show_open_button_desc",s,"Show Open when the lock supports unlatch (OPEN feature)"):(0,r.kg)("editor.lock.show_open_button_unsupported",s,"This lock can't unlatch (no Open feature), so there's no Open button to show"),hass:e,data:{show_open_button:!1!==l.show_open_button},schema:[Object.assign(Object.assign({},this.booleanField("show_open_button")),{disabled:!u})],onChange:o=>{var e,t;i({show_open_button:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.show_open_button)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        ${this.renderSettingsSection((0,r.kg)("editor.lock.behavior_section",s,"Behavior"),(0,r.kg)("editor.lock.behavior_desc",s,"Safety options for lock actions."),[{title:(0,r.kg)("editor.lock.require_confirmation",s,"Confirm unlock / open"),description:(0,r.kg)("editor.lock.require_confirmation_desc",s,"Ask for confirmation before unlocking or opening"),hass:e,data:{require_confirmation:!1!==l.require_confirmation},schema:[this.booleanField("require_confirmation")],onChange:o=>{var e,t;i({require_confirmation:null===(t=null===(e=o.detail.value)||void 0===e?void 0:e.require_confirmation)||void 0===t||t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.lock.unlock_style",s,"Unlock with"),description:(0,r.kg)("editor.lock.unlock_style_desc",s,"Slide replaces the Unlock and Open buttons with sliders, so a stray tap can't unlock. Hero and Standard layouts."),hass:e,data:{unlock_style:l.unlock_style||"buttons"},schema:[this.selectField("unlock_style",[{value:"buttons",label:(0,r.kg)("editor.lock.unlock_style_buttons",s,"Buttons")},{value:"slide",label:(0,r.kg)("editor.lock.unlock_style_slide",s,"Slide to unlock")},{value:"pattern",label:(0,r.kg)("editor.lock.unlock_style_pattern",s,"Draw a pattern")}])],onChange:o=>{var e;i({unlock_style:(null===(e=o.detail.value)||void 0===e?void 0:e.unlock_style)||"buttons"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.lock.ask_code",s,"Ask for PIN code"),description:(0,r.kg)("editor.lock.ask_code_desc",s,"Shows a keypad and sends the code to the lock. Automatic asks when the lock needs a code. Choose Never if you set a default code for the lock in Home Assistant."),hass:e,data:{ask_code:l.ask_code||"auto"},schema:[this.selectField("ask_code",[{value:"auto",label:(0,r.kg)("editor.lock.ask_code_auto",s,"Automatic")},{value:"always",label:(0,r.kg)("editor.lock.ask_code_always",s,"Always")},{value:"never",label:(0,r.kg)("editor.lock.ask_code_never",s,"Never")}])],onChange:o=>{var e;i({ask_code:(null===(e=o.detail.value)||void 0===e?void 0:e.ask_code)||"auto"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        ${"pattern"===l.unlock_style?this.renderPatternRecorder(l,i,s):n.s6}

        ${this.renderSettingsSection((0,r.kg)("editor.lock.layout_section",s,"Layout"),(0,r.kg)("editor.lock.layout_desc",s,"Visual style of the lock control."),[{title:(0,r.kg)("editor.lock.layout",s,"Layout"),description:(0,r.kg)("editor.lock.layout_style_desc",s,"Hero, standard, or compact"),hass:e,data:{layout:l.layout||"standard"},schema:[this.selectField("layout",this.getLayoutOptions(s))],onChange:o=>{var e;i({layout:(null===(e=o.detail.value)||void 0===e?void 0:e.layout)||"standard"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.lock.alignment",s,"Alignment"),description:(0,r.kg)("editor.lock.alignment_desc",s,"Align content"),hass:e,data:{alignment:l.alignment||"center"},schema:[this.selectField("alignment",[{value:"left",label:(0,r.kg)("editor.lock.align_left",s,"Left")},{value:"center",label:"hero"===(l.layout||"standard")?(0,r.kg)("editor.lock.align_center",s,"Center"):(0,r.kg)("editor.lock.align_spread",s,"Spread out")},{value:"right",label:(0,r.kg)("editor.lock.align_right",s,"Right")}])],onChange:o=>{var e;i({alignment:(null===(e=o.detail.value)||void 0===e?void 0:e.alignment)||"center"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
      </div>
    `}renderPatternRecorder(o,e,t){const i=o.unlock_pattern||"",c=i.length>=4?(0,r.kg)("editor.lock.pattern_saved",t,"Pattern saved. Draw again to change it."):(0,r.kg)("editor.lock.pattern_none",t,"No pattern yet, so unlocking uses the normal confirmation.");return n.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.lock.pattern_title",t,"Unlock pattern")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,r.kg)("editor.lock.pattern_desc",t,"Draw the pattern that unlocks and opens this lock. It's saved in the dashboard, so it stops accidental unlocks but isn't a real password.")}
        </div>
        <uc-pattern-pad .pattern=${i} @pattern-complete=${o=>{var n;const i=o.currentTarget,a=null===(n=i.parentElement)||void 0===n?void 0:n.querySelector(".uc-lock-pattern-msg"),l=o.detail.pattern;if(l.length<4)return i.status="error",a&&(a.textContent=(0,r.kg)("editor.lock.pattern_too_short",t,"Connect at least 4 dots")),void setTimeout(()=>{i.clear(),i.status="",a&&(a.textContent=c)},900);i.clear(),e({unlock_pattern:l}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}></uc-pattern-pad>
        <div
          class="uc-lock-pattern-msg"
          style="font-size: 13px; text-align: center; margin-top: 12px; color: var(--secondary-text-color);"
        >
          ${c}
        </div>
      </div>
    `}injectLockStyles(){return n.qy`<style>
      ${this.getStyles()}
    </style>`}syncLockPending(o,e){const t=this._lockPending.get(o);t&&(("lock"!==t||"locked"!==e&&"locking"!==e)&&("unlock"!==t||"unlocked"!==e&&"unlocking"!==e)&&("open"!==t||"unlocked"!==e&&"unlocking"!==e)||this._lockPending.delete(o))}renderPreview(o,e,t,i){var a,l,s,d,u;const p=o,g=this.resolveEntity(p.entity,t)||p.entity,v=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en";if(!g||!(null===(l=null==e?void 0:e.states)||void 0===l?void 0:l[g]))return n.qy`
        ${this.injectLockStyles()}
        <div
          class="uc-lock-wrapper"
          data-uc-role="pane"
          style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border-radius: var(--uc-r-16, 16px); overflow: hidden;"
        >
          ${this.renderGradientErrorState((0,r.kg)("editor.lock.config_needed",v,"Select a lock"),(0,r.kg)("editor.lock.config_needed_desc",v,"Choose a lock entity in the General tab"),"mdi:lock")}
        </div>
      `;const m=e.states[g],b=m.attributes||{},y=String(m.state).toLowerCase();this.syncLockPending(g,y);const _=h(k(b)),x=!1!==p.show_open_button&&_,f=!1!==p.show_lock_buttons,w=f||x,$="unavailable"===y||"unknown"===y,C="locking"===y||"unlocking"===y,E="jammed"===y,S="locked"===y,q="unlocked"===y,P=p.layout||"standard",L=!1!==p.show_title,j=!1!==p.show_icon,T=!1!==p.show_state,z=null===(s=p.icon)||void 0===s?void 0:s.trim(),I=(null===(d=p.name)||void 0===d?void 0:d.trim())||("string"==typeof b.friendly_name?b.friendly_name:"")||(null===(u=g.split(".").pop())||void 0===u?void 0:u.replace(/_/g," "))||"Lock",U=$?(0,r.kg)("editor.lock.unavailable",v,"Unavailable"):E?(0,r.kg)("editor.lock.jammed",v,"Jammed"):"locking"===y?(0,r.kg)("editor.lock.locking",v,"Locking…"):"unlocking"===y?(0,r.kg)("editor.lock.unlocking",v,"Unlocking…"):S?(0,r.kg)("editor.lock.locked",v,"Locked"):q?(0,r.kg)("editor.lock.unlocked",v,"Unlocked"):y.replace(/_/g," "),D=z||(S?"mdi:lock":"mdi:lock-open-variant"),A="string"==typeof b.code_format?b.code_format:void 0,M=p.ask_code||"auto",O="always"===M||"auto"===M&&!!A,N="slide"===p.unlock_style&&"compact"!==P,F=p.unlock_pattern||"",R="pattern"===p.unlock_style&&F.length>=4,W=o=>"open"===o?(0,r.kg)("editor.lock.action_open",v,"Open"):"unlock"===o?(0,r.kg)("editor.lock.action_unlock",v,"Unlock"):(0,r.kg)("editor.lock.action_lock",v,"Lock"),B=async o=>{return O?(e={title:`${W(o)} ${I}`,codeFormat:A,confirmText:W(o),cancelText:(0,r.kg)("editor.lock.cancel",v,"Cancel"),clearLabel:(0,r.kg)("editor.lock.code_clear",v,"Clear"),placeholder:(0,r.kg)("editor.lock.code_placeholder",v,"Code")},new Promise(o=>{const t=!(n=e.codeFormat)||/^\^?\\d(\{\d+(,\d*)?\}|[+*])?\$?$/.test(n);var n;const r=function(o){if(!o)return null;try{return new RegExp(o)}catch(o){return null}}(e.codeFormat),i=document.createElement("div");i.className="uc-code-overlay",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label",e.title);const c=document.createElement("div");c.className="uc-code-backdrop";const a=document.createElement("div");a.className="uc-code-panel";const l=document.createElement("h2");l.className="uc-code-title",l.textContent=e.title;const s=document.createElement("input");s.className="uc-code-input",s.type="password",s.autocomplete="off",s.placeholder=e.placeholder,t&&(s.readOnly=!0);const d=document.createElement("div");d.className="uc-code-actions";const u=document.createElement("button");u.type="button",u.className="uc-code-btn",u.textContent=e.cancelText;const p=document.createElement("button");p.type="button",p.className="uc-code-btn primary",p.textContent=e.confirmText,d.append(u,p);const k=()=>{const o=s.value;return!!o&&(!r||r.test(o))},h=()=>{p.disabled=!k()};if(a.append(l,s),t){const o=document.createElement("div");o.className="uc-code-pad";const t=["1","2","3","4","5","6","7","8","9","clear","0","back"];for(const n of t){const t=document.createElement("button");t.type="button",t.className="uc-code-key","clear"===n?(t.textContent=e.clearLabel,t.classList.add("uc-code-key--small")):"back"===n?(t.textContent="⌫",t.setAttribute("aria-label","Backspace")):t.textContent=n,t.addEventListener("click",()=>{"clear"===n?s.value="":"back"===n?s.value=s.value.slice(0,-1):s.value+=n,h()}),o.appendChild(t)}a.appendChild(o)}a.appendChild(d),i.append(c,a);const g=document.createElement("style");g.textContent="\n      .uc-code-overlay {\n        position: fixed;\n        inset: 0;\n        z-index: 2147483647;\n        display: grid;\n        place-items: center;\n      }\n      .uc-code-backdrop {\n        position: absolute;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.56);\n      }\n      .uc-code-panel {\n        position: relative;\n        width: min(88vw, 320px);\n        border-radius: 18px;\n        background: var(--card-background-color, #1f1f1f);\n        color: var(--primary-text-color);\n        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42);\n        padding: 20px;\n        display: flex;\n        flex-direction: column;\n        gap: 14px;\n        box-sizing: border-box;\n      }\n      .uc-code-title {\n        margin: 0;\n        font-size: 18px;\n        line-height: 1.25;\n        text-align: center;\n      }\n      .uc-code-input {\n        font: inherit;\n        font-size: 22px;\n        letter-spacing: 6px;\n        text-align: center;\n        padding: 10px 12px;\n        border-radius: 12px;\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        outline: none;\n        width: 100%;\n        box-sizing: border-box;\n      }\n      .uc-code-input:focus {\n        border-color: var(--primary-color);\n      }\n      .uc-code-pad {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 10px;\n      }\n      .uc-code-key {\n        font: inherit;\n        font-size: 22px;\n        font-weight: 500;\n        height: 56px;\n        border-radius: 14px;\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        cursor: pointer;\n      }\n      .uc-code-key--small {\n        font-size: 14px;\n      }\n      .uc-code-key:active {\n        background: color-mix(in srgb, var(--primary-color) 25%, var(--secondary-background-color));\n      }\n      .uc-code-actions {\n        display: flex;\n        gap: 10px;\n      }\n      .uc-code-btn {\n        flex: 1;\n        font: inherit;\n        font-weight: 600;\n        min-height: 40px;\n        border-radius: 999px;\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        cursor: pointer;\n      }\n      .uc-code-btn.primary {\n        border-color: var(--primary-color);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .uc-code-btn:disabled {\n        opacity: 0.45;\n        cursor: default;\n      }\n    ";let v=!1;const m=e=>{v||(v=!0,document.removeEventListener("keydown",b,{capture:!0}),i.remove(),g.remove(),o(e))},b=o=>{"Escape"===o.key?(o.preventDefault(),o.stopPropagation(),m(null)):"Enter"===o.key?(o.preventDefault(),o.stopPropagation(),k()&&m(s.value)):t&&/^[0-9]$/.test(o.key)?(o.preventDefault(),o.stopPropagation(),s.value+=o.key,h()):t&&"Backspace"===o.key&&(o.preventDefault(),o.stopPropagation(),s.value=s.value.slice(0,-1),h())};s.addEventListener("input",h),u.addEventListener("click",()=>m(null)),p.addEventListener("click",()=>{k()&&m(s.value)}),c.addEventListener("click",()=>m(null)),h(),document.head.appendChild(g),document.body.appendChild(i),document.addEventListener("keydown",b,{capture:!0}),t||requestAnimationFrame(()=>s.focus())})):"";var e},H=(o,t)=>{e.callService("lock",o,t?{entity_id:g,code:t}:{entity_id:g})},Z=o=>{this._lockPending.set(g,o),this.triggerPreviewUpdate(!0)},X=async o=>{return R?(t={title:`${W(o)} ${I}`,expected:F,hint:(0,r.kg)("editor.lock.pattern_prompt",v,"Draw your pattern"),wrongText:(0,r.kg)("editor.lock.pattern_wrong",v,"Wrong pattern, try again"),cancelText:(0,r.kg)("editor.lock.cancel",v,"Cancel")},new Promise(o=>{const e=document.createElement("div");e.className="uc-pattern-overlay",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label",t.title);const n=document.createElement("div");n.className="uc-pattern-backdrop";const r=document.createElement("div");r.className="uc-pattern-panel";const i=document.createElement("h2");i.className="uc-pattern-title",i.textContent=t.title;const c=document.createElement("div");c.className="uc-pattern-message",c.textContent=t.hint;const a=document.createElement("uc-pattern-pad"),l=document.createElement("button");l.type="button",l.className="uc-pattern-btn",l.textContent=t.cancelText,r.append(i,c,a,l),e.append(n,r);const s=document.createElement("style");s.textContent="\n      .uc-pattern-overlay {\n        position: fixed;\n        inset: 0;\n        z-index: 2147483647;\n        display: grid;\n        place-items: center;\n      }\n      .uc-pattern-backdrop {\n        position: absolute;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.56);\n      }\n      .uc-pattern-panel {\n        position: relative;\n        width: min(88vw, 320px);\n        border-radius: 18px;\n        background: var(--card-background-color, #1f1f1f);\n        color: var(--primary-text-color);\n        box-shadow: 0 16px 36px rgba(0, 0, 0, 0.42);\n        padding: 20px;\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        box-sizing: border-box;\n      }\n      .uc-pattern-title {\n        margin: 0;\n        font-size: 18px;\n        line-height: 1.25;\n        text-align: center;\n      }\n      .uc-pattern-message {\n        min-height: 18px;\n        font-size: 13px;\n        text-align: center;\n        color: var(--secondary-text-color);\n      }\n      .uc-pattern-message.error {\n        color: var(--error-color, #db4437);\n      }\n      .uc-pattern-btn {\n        font: inherit;\n        font-weight: 600;\n        min-height: 40px;\n        border-radius: 999px;\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        cursor: pointer;\n      }\n    ";let d,u=!1;const p=t=>{u||(u=!0,clearTimeout(d),document.removeEventListener("keydown",k,{capture:!0}),e.remove(),s.remove(),o(t))},k=o=>{"Escape"===o.key&&(o.preventDefault(),o.stopPropagation(),p(!1))};a.addEventListener("pattern-complete",o=>{const e=o.detail.pattern;if(clearTimeout(d),e===t.expected)return a.status="ok",a.disabled=!0,void setTimeout(()=>p(!0),250);a.status="error",c.textContent=t.wrongText,c.classList.add("error"),d=setTimeout(()=>{a.clear(),a.status="",c.textContent=t.hint,c.classList.remove("error")},900)}),a.addEventListener("pointerdown",()=>{clearTimeout(d),a.status="",c.textContent=t.hint,c.classList.remove("error")}),l.addEventListener("click",()=>p(!1)),n.addEventListener("click",()=>p(!1)),document.head.appendChild(s),document.body.appendChild(e),document.addEventListener("keydown",k,{capture:!0})})):!(!1!==p.require_confirmation&&!O&&!N)||(c.n.setHass(e),c.n.showConfirmation({action:"perform-action",perform_action:`lock.${o}`,entity:g},{confirmText:"open"===o?(0,r.kg)("editor.lock.action_open",v,"Open"):(0,r.kg)("editor.lock.action_unlock",v,"Unlock"),cancelText:(0,r.kg)("editor.lock.cancel",v,"Cancel")}));var t},J=async()=>{const o=await B("lock");null!==o&&(Z("lock"),H("lock",o))},V=async()=>{if(!await X("unlock"))return;const o=await B("unlock");null!==o&&(Z("unlock"),H("unlock",o))},G=async()=>{if(!await X("open"))return;const o=await B("open");null!==o&&(Z("open"),H("open",o))},K=$||C,Y=S||"locking"===y,Q=o=>n.qy`
      <ha-icon
        class="uc-lock-ha-icon ${Y?"uc-lock-ha-icon--locked":""}"
        style="--mdc-icon-size: ${o}px; color: var(--primary-color);"
        icon="${D}"
      ></ha-icon>
    `,oo=()=>N&&w?n.qy`<div class="uc-lock__slides">
            ${f&&!q?n.qy`<uc-slide-confirm
                  .label=${(0,r.kg)("editor.lock.slide_to_unlock",v,"Slide to unlock")}
                  .icon=${"mdi:lock"}
                  .doneIcon=${"mdi:lock-open-variant"}
                  ?disabled=${K}
                  @confirmed=${V}
                ></uc-slide-confirm>`:n.s6}
            ${x?n.qy`<uc-slide-confirm
                  .label=${(0,r.kg)("editor.lock.slide_to_open",v,"Slide to open")}
                  .icon=${"mdi:door-closed"}
                  .doneIcon=${"mdi:door-open"}
                  ?disabled=${K}
                  @confirmed=${G}
                ></uc-slide-confirm>`:n.s6}
          </div>`:n.s6,eo=()=>N?n.qy`${f&&q?n.qy`<button
              type="button"
              class="uc-lock-btn"
              @click=${J}
              ?disabled=${K}
            >
              <ha-icon style="--mdc-icon-size: 18px;" icon="mdi:lock"></ha-icon>
              ${(0,r.kg)("editor.lock.action_lock",v,"Lock")}
            </button>`:n.s6}`:n.qy`
      ${f?n.qy`<button
        type="button"
        class="uc-lock-btn ${S?"uc-lock-btn--active":""}"
        @click=${J}
        ?disabled=${K}
      >
        <ha-icon style="--mdc-icon-size: 18px;" icon="mdi:lock"></ha-icon>
        ${(0,r.kg)("editor.lock.action_lock",v,"Lock")}
      </button>
      <button
        type="button"
        class="uc-lock-btn ${q?"uc-lock-btn--active":""}"
        @click=${V}
        ?disabled=${K}
      >
        <ha-icon style="--mdc-icon-size: 18px;" icon="mdi:lock-open-variant"></ha-icon>
        ${(0,r.kg)("editor.lock.action_unlock",v,"Unlock")}
      </button>`:n.s6}
      ${x?n.qy`<button
            type="button"
            class="uc-lock-btn uc-lock-btn--ghost"
            @click=${G}
            ?disabled=${K}
          >
            <ha-icon style="--mdc-icon-size: 18px;" icon="mdi:door-open"></ha-icon>
            ${(0,r.kg)("editor.lock.action_open",v,"Open")}
          </button>`:n.s6}
    `;let to;const no=p.alignment||"center",ro="center"===no?"":`uc-lock--align-${no}`;to="hero"===P?n.qy`
        <div class="uc-lock uc-lock--hero ${ro}">
          <div class="uc-lock__visual">
            <div class="uc-lock__glow ${Y?"uc-lock__glow--on":""}"></div>
            <div class="uc-lock-circle ${Y?"uc-lock-circle--locked":""} ${E?"uc-lock-circle--jammed":""}">
              ${j?Q(56):n.s6}
            </div>
          </div>
          <div class="uc-lock__identity">
            ${L?n.qy`<h2 class="uc-lock-title">${I}</h2>`:n.s6}
            ${T?n.qy`<span class="uc-lock-badge ${Y?"uc-lock-badge--locked":""} ${E?"uc-lock-badge--jammed":""} ${$?"uc-lock-badge--unavail":""}">
                  ${Y&&!$?n.qy`<span class="uc-lock-status-dot"></span>`:n.s6}
                  ${U}
                </span>`:n.s6}
          </div>
          ${E?n.qy`<p class="uc-lock-warn">${(0,r.kg)("editor.lock.jammed_hint",v,"Check the lock hardware.")}</p>`:n.s6}
          ${w?n.qy`<div class="uc-lock__actions" role="group">${eo()}</div>`:n.s6}
          ${oo()}
        </div>
      `:"compact"===P?n.qy`
        <div class="uc-lock uc-lock--compact ${ro}">
          <div class="uc-lock-compact__row">
            ${j?n.qy`<div class="uc-lock-icon-well ${Y?"uc-lock-icon-well--locked":""} ${E?"uc-lock-icon-well--jammed":""}">
                  ${Q(18)}
                </div>`:n.s6}
            <span class="uc-lock-chip-label">
              ${L?n.qy`<span class="uc-lock-chip-name">${I}</span>`:T?n.qy`<span class="uc-lock-chip-name">${U}</span>`:n.s6}
              ${L&&T?n.qy`<span class="uc-lock-chip-state">${U}</span>`:n.s6}
            </span>
            ${f?n.qy`<button
                  type="button"
                  class="uc-lock-chip-btn ${Y?"":"uc-lock-chip-btn--active"}"
                  @click=${S?V:J}
                  ?disabled=${K}
                >
                  ${S?(0,r.kg)("editor.lock.action_unlock",v,"Unlock"):(0,r.kg)("editor.lock.action_lock",v,"Lock")}
                </button>`:n.s6}
          </div>
        </div>
      `:n.qy`
        <div class="uc-lock uc-lock--standard ${ro}">
          <div class="uc-lock-std__row">
            ${j?n.qy`<div class="uc-lock-icon-well uc-lock-icon-well--std ${Y?"uc-lock-icon-well--locked":""} ${E?"uc-lock-icon-well--jammed":""}">
                  ${Q(28)}
                </div>`:n.s6}
            <div class="uc-lock-std__meta">
              ${L?n.qy`<h2 class="uc-lock-title uc-lock-title--std">${I}</h2>`:n.s6}
              ${T?n.qy`<p class="uc-lock-subtitle">${U}</p>`:n.s6}
            </div>
            ${w?n.qy`<div class="uc-lock-std__actions" role="group">${eo()}</div>`:n.s6}
          </div>
          ${oo()}
          ${E?n.qy`<p class="uc-lock-warn">${(0,r.kg)("editor.lock.jammed_hint",v,"Check the lock hardware.")}</p>`:n.s6}
        </div>
      `;const io=this.buildDesignStyles(o,e),co=Object.entries(io).filter(([,o])=>null!=o&&""!==o).map(([o,e])=>`${o.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${e}`).join("; "),ao=this.getHoverEffectClass(o);return n.qy`
      ${this.injectLockStyles()}
      <div
        class="uc-lock-wrapper ${ao} ${E?"uc-lock-wrapper--jammed":""}"
        data-uc-role="pane"
        style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none); border-radius: var(--uc-r-18, 18px); overflow: hidden; ${co}"
      >
        ${this.wrapWithAnimation(to,o,e)}
      </div>
    `}getStyles(){return"\n      .uc-lock-wrapper { box-sizing: border-box; }\n      .uc-lock { box-sizing: border-box; color: var(--primary-text-color); }\n\n      /* ═══ HERO ═══════════════════════════════════ */\n      .uc-lock--hero {\n        padding: 28px 20px 24px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 16px;\n      }\n      .uc-lock__visual {\n        position: relative;\n        width: 140px;\n        height: 140px;\n        flex-shrink: 0;\n      }\n      .uc-lock__glow {\n        position: absolute;\n        inset: -14px;\n        border-radius: 50%;\n        background: radial-gradient(circle, color-mix(in srgb, var(--primary-color) 12%, transparent) 0%, transparent 70%);\n        opacity: 0;\n        transition: opacity 0.4s ease;\n        pointer-events: none;\n      }\n      .uc-lock__glow--on { opacity: 1; }\n      .uc-lock-circle {\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        background: radial-gradient(\n          circle at 38% 32%,\n          color-mix(in srgb, var(--primary-color) 12%, var(--card-background-color, var(--ha-card-background))) 0%,\n          color-mix(in srgb, var(--card-background-color, var(--ha-card-background)) 92%, var(--primary-color)) 100%\n        );\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 40%, transparent);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        box-shadow: inset 0 2px 16px rgba(0,0,0,0.12);\n        transition: border-color 0.3s ease, box-shadow 0.3s ease;\n        position: relative;\n        z-index: 1;\n      }\n      .uc-lock-circle--locked {\n        border-color: color-mix(in srgb, var(--primary-color) 35%, transparent);\n        box-shadow: inset 0 2px 16px rgba(0,0,0,0.14), 0 0 40px color-mix(in srgb, var(--primary-color) 12%, transparent);\n      }\n      .uc-lock-circle--jammed {\n        border-color: color-mix(in srgb, var(--error-color, #db4437) 45%, transparent);\n      }\n      .uc-lock__identity {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 8px;\n        text-align: center;\n      }\n      .uc-lock--hero .uc-lock__actions {\n        display: flex;\n        gap: 8px;\n        width: 100%;\n        max-width: 340px;\n      }\n      .uc-lock__slides {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        width: 100%;\n      }\n      .uc-lock--hero .uc-lock__slides {\n        max-width: 340px;\n      }\n      .uc-lock--hero .uc-lock__actions:empty {\n        display: none;\n      }\n      .uc-lock--standard .uc-lock__slides {\n        margin-top: 12px;\n      }\n      .uc-lock--hero.uc-lock--align-left { align-items: flex-start; }\n      .uc-lock--hero.uc-lock--align-left .uc-lock__identity { align-items: flex-start; text-align: left; }\n      .uc-lock--hero.uc-lock--align-right { align-items: flex-end; }\n      .uc-lock--hero.uc-lock--align-right .uc-lock__identity { align-items: flex-end; text-align: right; }\n\n      /* ═══ STANDARD (single row) ══════════════════ */\n      .uc-lock--standard { padding: 14px 16px; }\n      .uc-lock-std__row {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        gap: 12px;\n      }\n      /* 140px basis: when the title can't get that much room (narrow cards), the\n         action buttons wrap onto their own line instead of truncating the title. */\n      .uc-lock-std__meta { flex: 1 1 140px; min-width: 0; overflow: hidden; }\n      .uc-lock-std__actions {\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        gap: 7px;\n      }\n      .uc-lock-std__actions .uc-lock-btn {\n        padding: 7px 14px;\n        font-size: 0.8125rem;\n        border-radius: 999px;\n      }\n      .uc-lock-icon-well--std { width: 40px; height: 40px; }\n      .uc-lock-title--std { font-size: 0.9375rem; font-weight: 700; }\n      .uc-lock-subtitle {\n        margin: 3px 0 0;\n        font-size: 0.8125rem;\n        line-height: 1.35;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      /* Left / Right pack the row to one side; the default spreads it across the card */\n      .uc-lock--standard.uc-lock--align-left .uc-lock-std__meta,\n      .uc-lock--standard.uc-lock--align-right .uc-lock-std__meta { flex: 0 1 auto; }\n      .uc-lock--standard.uc-lock--align-right .uc-lock-std__row { justify-content: flex-end; }\n      .uc-lock--standard.uc-lock--align-right .uc-lock-std__meta { text-align: right; }\n      .uc-lock--compact.uc-lock--align-left .uc-lock-chip-label,\n      .uc-lock--compact.uc-lock--align-right .uc-lock-chip-label { flex: 0 1 auto; }\n      .uc-lock--compact.uc-lock--align-right .uc-lock-compact__row { justify-content: flex-end; }\n      .uc-lock--compact.uc-lock--align-right .uc-lock-chip-label { text-align: right; }\n\n      /* ═══ COMPACT (chip) ═════════════════════════ */\n      .uc-lock--compact { padding: 6px 10px; }\n      .uc-lock-compact__row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n      .uc-lock-chip-label {\n        flex: 1;\n        min-width: 0;\n        display: flex;\n        flex-direction: column;\n        font-size: 0.8125rem;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n      }\n      .uc-lock-chip-name {\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lock-chip-state {\n        font-size: 0.6875rem;\n        font-weight: 500;\n        color: var(--secondary-text-color);\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lock-chip-btn {\n        flex-shrink: 0;\n        font: inherit;\n        font-size: 0.75rem;\n        font-weight: 700;\n        padding: 5px 12px;\n        border-radius: 999px;\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 75%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        transition: background 0.15s, border-color 0.15s, color 0.15s;\n      }\n      .uc-lock-chip-btn:disabled { opacity: 0.45; cursor: not-allowed; }\n      .uc-lock-chip-btn:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n      .uc-lock-chip-btn--active {\n        border-color: color-mix(in srgb, var(--primary-color) 50%, transparent);\n        background: color-mix(in srgb, var(--primary-color) 14%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-color);\n      }\n\n      /* ═══ SHARED ═════════════════════════════════ */\n      .uc-lock-icon-well {\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 50%;\n        background: color-mix(in srgb, var(--primary-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        border: 1px solid color-mix(in srgb, var(--divider-color) 55%, transparent);\n        transition: box-shadow 0.2s ease, border-color 0.2s ease;\n      }\n      .uc-lock--compact .uc-lock-icon-well {\n        width: 28px; height: 28px;\n        background: transparent;\n        border: none;\n      }\n      .uc-lock-icon-well--locked {\n        border-color: color-mix(in srgb, var(--primary-color) 38%, transparent);\n        box-shadow: 0 2px 14px color-mix(in srgb, var(--primary-color) 12%, transparent);\n      }\n      .uc-lock-icon-well--jammed {\n        border-color: color-mix(in srgb, var(--error-color, #db4437) 40%, transparent);\n      }\n      .uc-lock-ha-icon { line-height: 1; transition: transform 0.28s ease; }\n      .uc-lock-ha-icon--locked { transform: scale(1.05); }\n      @media (prefers-reduced-motion: reduce) {\n        .uc-lock-ha-icon { transition: none; }\n        .uc-lock-ha-icon--locked { transform: none; }\n      }\n\n      .uc-lock-title {\n        margin: 0;\n        font-size: 1.25rem;\n        font-weight: 800;\n        letter-spacing: -0.02em;\n        line-height: 1.25;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lock-badge {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 4px 14px;\n        border-radius: 999px;\n        font-size: 0.75rem;\n        font-weight: 700;\n        letter-spacing: 0.03em;\n        text-transform: uppercase;\n        background: color-mix(in srgb, var(--divider-color) 15%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--secondary-text-color);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 35%, transparent);\n      }\n      .uc-lock-badge--locked {\n        background: color-mix(in srgb, var(--primary-color) 12%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-color);\n        border-color: color-mix(in srgb, var(--primary-color) 25%, transparent);\n      }\n      .uc-lock-badge--jammed {\n        background: color-mix(in srgb, var(--error-color, #db4437) 12%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--error-color, #db4437);\n        border-color: color-mix(in srgb, var(--error-color, #db4437) 25%, transparent);\n      }\n      .uc-lock-badge--unavail { opacity: 0.6; }\n      .uc-lock-status-dot {\n        width: 7px; height: 7px;\n        border-radius: 50%;\n        background: var(--primary-color);\n        box-shadow: 0 0 6px color-mix(in srgb, var(--primary-color) 60%, transparent);\n        flex-shrink: 0;\n      }\n      .uc-lock-warn {\n        margin: 0;\n        font-size: 0.8125rem;\n        color: var(--error-color, #db4437);\n        font-weight: 600;\n      }\n      .uc-lock-wrapper--jammed .uc-lock-badge {\n        color: color-mix(in srgb, var(--error-color, #db4437) 70%, var(--secondary-text-color));\n      }\n\n      .uc-lock-btn {\n        flex: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        font: inherit;\n        font-size: 0.8125rem;\n        font-weight: 700;\n        padding: 10px 14px;\n        border-radius: var(--uc-r-14, 14px);\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 60%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 6%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        transition: background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s, transform 0.1s;\n      }\n      .uc-lock-btn:active:not(:disabled) { transform: scale(0.97); }\n      .uc-lock-btn:disabled { opacity: 0.4; cursor: not-allowed; }\n      .uc-lock-btn--active {\n        border-color: color-mix(in srgb, var(--primary-color) 50%, transparent);\n        background: color-mix(in srgb, var(--primary-color) 14%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-color);\n      }\n      .uc-lock-btn:hover:not(:disabled) {\n        border-color: color-mix(in srgb, var(--primary-color) 30%, transparent);\n        box-shadow: 0 4px 16px color-mix(in srgb, var(--primary-color) 10%, transparent);\n      }\n      .uc-lock-btn:focus-visible {\n        border-color: color-mix(in srgb, var(--primary-color) 30%, transparent);\n        box-shadow: 0 4px 16px color-mix(in srgb, var(--primary-color) 10%, transparent);\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n      .uc-lock-btn--ghost {\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        background: transparent;\n        border-color: color-mix(in srgb, var(--divider-color) 40%, transparent);\n      }\n    "}}}};