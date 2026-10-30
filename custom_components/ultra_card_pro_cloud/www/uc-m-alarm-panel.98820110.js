export const __webpack_esm_ids__=[2185];export const __webpack_esm_modules__={6710(a,e,r){r.d(e,{UltraAlarmPanelModule:()=>m});var o=r(2618),t=r(6478),n=r(3307);const i=new Set(["disarmed"]),s=new Set(["triggered"]),l=new Set(["arming","disarming","pending"]),d=new Set(["armed_home","armed_away","armed_night","armed_vacation","armed_custom_bypass"]);function c(a){const e=a.supported_features;return"number"==typeof e?e:0}class m extends n.m{constructor(){super(...arguments),this._pending=new Map,this._pendingTimeouts=new Map,this._codeBuffer=new Map,this._pendingArmMode=new Map,this._compactChooser=new Set,this.handlesOwnDesignStyles=!0,this.metadata={type:"alarm_panel",title:"Alarm Panel",description:"Arm, disarm, and monitor your security alarm with a PIN pad and status ring",author:"WJD Designs",version:"1.0.0",icon:"mdi:shield-home",category:"interactive",tags:["alarm","security","panel","keypad","pro","premium","arm","disarm"]}}createDefault(a,e){return{id:a||this.generateId("alarm_panel"),type:"alarm_panel",entity:"",name:"",icon:"",layout:"hero",show_title:!0,show_icon:!0,show_state:!0,show_keypad:!0,show_arm_home:void 0,show_arm_away:void 0,show_arm_night:void 0,show_arm_vacation:void 0,show_arm_custom:void 0,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(a){var e;const r=[],o=a;return a.id||r.push("Module ID is required"),(null===(e=o.entity)||void 0===e?void 0:e.trim())||r.push((0,t.kg)("editor.alarm_panel.error_entity","en","Select an alarm_control_panel entity")),{valid:0===r.length,errors:r}}renderGeneralTab(a,e,r,n){var i,s,l,d,m,p,h;const u=a,_=(null===(i=null==e?void 0:e.locale)||void 0===i?void 0:i.language)||"en",g=this.resolveEntity(u.entity,r)||u.entity,v=g?null===(s=null==e?void 0:e.states)||void 0===s?void 0:s[g]:void 0,b=v?c(v.attributes||{}):0,y=a=>!v||!!(b&a),w={show_arm_home:1,show_arm_away:2,show_arm_night:4,show_arm_vacation:8,show_arm_custom:16},x=a=>v?y(w[a])?(0,t.kg)("editor.alarm_panel.mode_desc_supported",_,"Your alarm supports this mode"):(0,t.kg)("editor.alarm_panel.mode_desc_unsupported",_,"Your alarm does not report this mode; turn on to show it anyway"):(0,t.kg)("editor.alarm_panel.mode_desc_auto",_,"Follows what the alarm supports");return o.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">

        ${this.renderSettingsSection((0,t.kg)("editor.alarm_panel.entity_section",_,"Alarm Entity"),(0,t.kg)("editor.alarm_panel.entity_section_desc",_,"Select the alarm_control_panel entity to control."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,r,"entity",u.entity||"",a=>{n({entity:a}),setTimeout(()=>this.triggerPreviewUpdate(),50)},["alarm_control_panel"],(0,t.kg)("editor.alarm_panel.entity",_,"Alarm entity"))}
        </div>

        ${this.renderSettingsSection((0,t.kg)("editor.alarm_panel.display_section",_,"Display"),(0,t.kg)("editor.alarm_panel.display_desc",_,"Choose what to show."),[{title:(0,t.kg)("editor.alarm_panel.show_title",_,"Show title"),description:(0,t.kg)("editor.alarm_panel.show_title_desc",_,"Display the alarm name"),hass:e,data:{show_title:!1!==u.show_title},schema:[this.booleanField("show_title")],onChange:a=>{var e,r;n({show_title:null===(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_title)||void 0===r||r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_icon",_,"Show icon"),description:(0,t.kg)("editor.alarm_panel.show_icon_desc",_,"Show shield icon in the status ring"),hass:e,data:{show_icon:!1!==u.show_icon},schema:[this.booleanField("show_icon")],onChange:a=>{var e,r;n({show_icon:null===(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_icon)||void 0===r||r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_state",_,"Show state text"),description:(0,t.kg)("editor.alarm_panel.show_state_desc",_,"Display the alarm state badge"),hass:e,data:{show_state:!1!==u.show_state},schema:[this.booleanField("show_state")],onChange:a=>{var e,r;n({show_state:null===(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_state)||void 0===r||r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_keypad",_,"Show keypad"),description:(0,t.kg)("editor.alarm_panel.show_keypad_desc",_,"Always show the PIN keypad"),hass:e,data:{show_keypad:!1!==u.show_keypad},schema:[this.booleanField("show_keypad")],onChange:a=>{var e,r;n({show_keypad:null===(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_keypad)||void 0===r||r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        ${this.renderSettingsSection((0,t.kg)("editor.alarm_panel.layout_section",_,"Layout"),(0,t.kg)("editor.alarm_panel.layout_desc",_,"Visual style of the alarm panel."),[{title:(0,t.kg)("editor.alarm_panel.layout",_,"Layout"),description:(0,t.kg)("editor.alarm_panel.layout_style_desc",_,"Hero shows full PIN pad, standard is a single row, compact is a chip"),hass:e,data:{layout:u.layout||"hero"},schema:[this.selectField("layout",[{value:"hero",label:(0,t.kg)("editor.alarm_panel.layout_hero",_,"Hero")},{value:"standard",label:(0,t.kg)("editor.alarm_panel.layout_standard",_,"Standard")},{value:"compact",label:(0,t.kg)("editor.alarm_panel.layout_compact",_,"Compact")}])],onChange:a=>{var e;n({layout:(null===(e=a.detail.value)||void 0===e?void 0:e.layout)||"hero"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        ${this.renderSettingsSection((0,t.kg)("editor.alarm_panel.arm_modes_section",_,"Arm Modes"),(0,t.kg)("editor.alarm_panel.arm_modes_desc",_,"Choose which arm mode buttons to show. Leave unset to auto-detect from the entity."),[{title:(0,t.kg)("editor.alarm_panel.show_arm_home",_,"Show Arm Home"),description:x("show_arm_home"),hass:e,data:{show_arm_home:null!==(l=u.show_arm_home)&&void 0!==l?l:y(1)},schema:[this.booleanField("show_arm_home")],onChange:a=>{var e;n({show_arm_home:!!(null===(e=a.detail.value)||void 0===e?void 0:e.show_arm_home)}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_arm_away",_,"Show Arm Away"),description:x("show_arm_away"),hass:e,data:{show_arm_away:null!==(d=u.show_arm_away)&&void 0!==d?d:y(2)},schema:[this.booleanField("show_arm_away")],onChange:a=>{var e;n({show_arm_away:!!(null===(e=a.detail.value)||void 0===e?void 0:e.show_arm_away)}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_arm_night",_,"Show Arm Night"),description:x("show_arm_night"),hass:e,data:{show_arm_night:null!==(m=u.show_arm_night)&&void 0!==m?m:y(4)},schema:[this.booleanField("show_arm_night")],onChange:a=>{var e;n({show_arm_night:!!(null===(e=a.detail.value)||void 0===e?void 0:e.show_arm_night)}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_arm_vacation",_,"Show Arm Vacation"),description:x("show_arm_vacation"),hass:e,data:{show_arm_vacation:null!==(p=u.show_arm_vacation)&&void 0!==p?p:y(8)},schema:[this.booleanField("show_arm_vacation")],onChange:a=>{var e;n({show_arm_vacation:!!(null===(e=a.detail.value)||void 0===e?void 0:e.show_arm_vacation)}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_arm_custom",_,"Show Arm Custom Bypass"),description:x("show_arm_custom"),hass:e,data:{show_arm_custom:null!==(h=u.show_arm_custom)&&void 0!==h?h:y(16)},schema:[this.booleanField("show_arm_custom")],onChange:a=>{var e;n({show_arm_custom:!!(null===(e=a.detail.value)||void 0===e?void 0:e.show_arm_custom)}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

      </div>
    `}_stateColor(a){return s.has(a)?"var(--error-color, #db4437)":"armed_away"===a||"armed_vacation"===a?"#f59e0b":d.has(a)?"var(--primary-color)":l.has(a)?"#f59e0b":"var(--success-color, #43a047)"}_stateLabel(a,e){const r={disarmed:["editor.alarm_panel.state_disarmed","Disarmed"],armed_home:["editor.alarm_panel.state_armed_home","Armed Home"],armed_away:["editor.alarm_panel.state_armed_away","Armed Away"],armed_night:["editor.alarm_panel.state_armed_night","Armed Night"],armed_vacation:["editor.alarm_panel.state_armed_vacation","Armed Vacation"],armed_custom_bypass:["editor.alarm_panel.state_armed_custom_bypass","Custom Bypass"],pending:["editor.alarm_panel.state_pending","Pending…"],arming:["editor.alarm_panel.state_arming","Arming…"],disarming:["editor.alarm_panel.state_disarming","Disarming…"],triggered:["editor.alarm_panel.state_triggered","TRIGGERED"],unavailable:["editor.alarm_panel.state_unavailable","Unavailable"]}[a];return r?(0,t.kg)(r[0],e,r[1]):a.replace(/_/g," ")}_armModeLabel(a,e){const r={arm_home:["editor.alarm_panel.mode_home","Home"],arm_away:["editor.alarm_panel.mode_away","Away"],arm_night:["editor.alarm_panel.mode_night","Night"],arm_vacation:["editor.alarm_panel.mode_vacation","Vacation"],arm_custom_bypass:["editor.alarm_panel.mode_custom","Custom"]}[a];return r?(0,t.kg)(r[0],e,r[1]):a}_armModeIcon(a){return{arm_home:"mdi:home",arm_away:"mdi:car",arm_night:"mdi:moon-waning-crescent",arm_vacation:"mdi:airplane",arm_custom_bypass:"mdi:shield-edit"}[a]}_getVisibleModes(a,e){return[["arm_home",1,a.show_arm_home],["arm_away",2,a.show_arm_away],["arm_night",4,a.show_arm_night],["arm_vacation",8,a.show_arm_vacation],["arm_custom_bypass",16,a.show_arm_custom]].filter(([,a,r])=>!1!==r&&(!0===r||!!(e&a))).map(([a])=>a)}_appendDigit(a,e){const r=this._codeBuffer.get(a)||"";r.length>=8||(this._codeBuffer.set(a,r+e),this.triggerPreviewUpdate(!0))}_clearCode(a){this._codeBuffer.set(a,""),this.triggerPreviewUpdate(!0)}_callAlarm(a,e,r,o){const t={entity_id:e};o&&(t.code=o),a.callService("alarm_control_panel",r,t),this._codeBuffer.set(e,""),this._pendingArmMode.delete(e),this._pending.set(e,r);const n=this._pendingTimeouts.get(e);n&&clearTimeout(n),this._pendingTimeouts.set(e,setTimeout(()=>{this._pendingTimeouts.delete(e),this._pending.delete(e)&&this.triggerPreviewUpdate()},15e3)),this.triggerPreviewUpdate(!0)}_submitCode(a,e){const r=this._codeBuffer.get(a)||"",o=this._pendingArmMode.get(a)||"alarm_disarm";this._callAlarm(e,a,o,r)}_cancelCodeEntry(a){this._pendingArmMode.delete(a),this._codeBuffer.set(a,""),this.triggerPreviewUpdate(!0)}_renderKeypad(a,e,r){const n=this._codeBuffer.get(a)||"",i="●".repeat(n.length);return o.qy`
      <div class="uc-alarm-keypad" role="group" tabindex="0"
        aria-label="${(0,t.kg)("editor.alarm_panel.keypad_label",r,"PIN keypad")}"
        @keydown=${r=>{if(/^[0-9]$/.test(r.key))r.preventDefault(),r.stopPropagation(),this._appendDigit(a,r.key);else if("Backspace"===r.key){r.preventDefault(),r.stopPropagation();const e=this._codeBuffer.get(a)||"";this._codeBuffer.set(a,e.slice(0,-1)),this.triggerPreviewUpdate(!0)}else"Enter"===r.key?(r.preventDefault(),r.stopPropagation(),this._codeBuffer.get(a)&&this._submitCode(a,e)):"Escape"===r.key&&(r.preventDefault(),r.stopPropagation(),this._cancelCodeEntry(a))}}>
        <div class="uc-alarm-code-display" aria-live="polite">
          ${i||o.qy`<span style="opacity:0.3">${(0,t.kg)("editor.alarm_panel.code_placeholder",r,"Enter code")}</span>`}
        </div>
        <div class="uc-alarm-keypad-grid">
          ${["1","2","3","4","5","6","7","8","9","*","0","#"].map(i=>"*"===i?o.qy`<button type="button" class="uc-alarm-key uc-alarm-key--action"
                @click=${()=>this._clearCode(a)} aria-label="${(0,t.kg)("editor.alarm_panel.clear",r,"Clear")}">
                <ha-icon style="--mdc-icon-size:18px" icon="mdi:backspace-outline"></ha-icon>
              </button>`:"#"===i?o.qy`<button type="button" class="uc-alarm-key uc-alarm-key--confirm ${n?"":"uc-alarm-key--dim"}"
                @click=${()=>this._submitCode(a,e)}
                aria-label="${(0,t.kg)("editor.alarm_panel.confirm",r,"Confirm")}">
                <ha-icon style="--mdc-icon-size:18px" icon="mdi:check"></ha-icon>
              </button>`:o.qy`<button type="button" class="uc-alarm-key" aria-label="${i}"
              @click=${()=>this._appendDigit(a,i)}>${i}</button>`)}
        </div>
      </div>
    `}renderPreview(a,e,r,n){var m,p,h,u,_;const g=a,v=(null===(m=null==e?void 0:e.locale)||void 0===m?void 0:m.language)||"en",b=this.resolveEntity(g.entity,r)||g.entity;if(!b||!(null===(p=null==e?void 0:e.states)||void 0===p?void 0:p[b]))return o.qy`
        <style>${this.getStyles()}</style>
        <div
          class="uc-alarm-wrapper"
          data-uc-role="pane"
          style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border-radius: var(--uc-r-16, 16px); overflow: hidden;"
        >
          ${this.renderGradientErrorState((0,t.kg)("editor.alarm_panel.config_needed",v,"Select an alarm panel"),(0,t.kg)("editor.alarm_panel.config_needed_desc",v,"Choose an alarm_control_panel entity in the General tab"),"mdi:shield-home")}
        </div>
      `;const y=e.states[b],w=y.attributes||{},x=String(y.state).toLowerCase();if(this._pending.get(b)&&(i.has(x)||d.has(x)||s.has(x))){this._pending.delete(b);const a=this._pendingTimeouts.get(b);a&&(clearTimeout(a),this._pendingTimeouts.delete(b))}const f=i.has(x),k=s.has(x),$=d.has(x),A=l.has(x),C="unavailable"===x||"unknown"===x,S=this._stateColor(x),q=this._stateLabel(x,v),P=w.code_format,M=!1!==w.code_arm_required,z=c(w),D=$||k||A||f&&M,U=!1!==g.show_keypad&&D&&null!=P,T=f?this._getVisibleModes(g,z):[],B=M&&null!=P,E=null!=P,I=this._pendingArmMode.get(b),L=(null===(h=g.name)||void 0===h?void 0:h.trim())||("string"==typeof w.friendly_name?w.friendly_name:"")||(null===(u=b.split(".").pop())||void 0===u?void 0:u.replace(/_/g," "))||"Alarm",j=(null===(_=g.icon)||void 0===_?void 0:_.trim())||(k?"mdi:bell-ring":$?"mdi:shield-check":"mdi:shield-home-outline"),F=g.layout||"hero",N=(()=>{const r=this.buildDesignStyles(a,e);return Object.entries(r).filter(([,a])=>null!=a&&""!==a).map(([a,e])=>`${a.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${e}`).join("; ")})(),H=this.getHoverEffectClass(a),V=a=>{U||B?(this._pendingArmMode.set(b,a),this._codeBuffer.set(b,""),this.triggerPreviewUpdate(!0)):this._callAlarm(e,b,a,"")};f||this._compactChooser.delete(b);const K=f&&this._compactChooser.has(b),G=(a=V)=>o.qy`
      <div class="uc-alarm-arm-btns" role="group" aria-label="${(0,t.kg)("editor.alarm_panel.arm_modes_label",v,"Arm modes")}">
        ${T.map(e=>o.qy`
          <button type="button"
            class="uc-alarm-arm-btn ${this._pendingArmMode.get(b)===e?"uc-alarm-arm-btn--active":""}"
            ?disabled=${A||C}
            @click=${()=>a(e)}
          >
            <ha-icon style="--mdc-icon-size:16px;" icon="${this._armModeIcon(e)}"></ha-icon>
            ${this._armModeLabel(e,v)}
          </button>
        `)}
      </div>
    `,W=()=>f||U?o.s6:o.qy`
        <button type="button" class="uc-alarm-disarm-btn"
          ?disabled=${A||C}
          @click=${()=>{E?(this._pendingArmMode.set(b,"alarm_disarm"),this._codeBuffer.set(b,""),this.triggerPreviewUpdate(!0)):this._callAlarm(e,b,"alarm_disarm","")}}>
          <ha-icon style="--mdc-icon-size:18px" icon="mdi:shield-off-outline"></ha-icon>
          ${(0,t.kg)("editor.alarm_panel.action_disarm",v,"Disarm")}
        </button>
      `,O=()=>I?o.qy`
        <div class="uc-alarm-pending-mode-label">
          ${"alarm_disarm"===I?o.qy`
                <ha-icon style="--mdc-icon-size:16px; margin-right:6px;" icon="mdi:shield-off-outline"></ha-icon>
                ${(0,t.kg)("editor.alarm_panel.code_for",v,"Code for")} ${(0,t.kg)("editor.alarm_panel.action_disarm",v,"Disarm")}
              `:o.qy`
                <ha-icon style="--mdc-icon-size:16px; margin-right:6px;" icon="${this._armModeIcon(I)}"></ha-icon>
                ${(0,t.kg)("editor.alarm_panel.code_for",v,"Code for")} ${this._armModeLabel(I,v)}
              `}
          <button type="button" class="uc-alarm-cancel-btn"
            @click=${()=>this._cancelCodeEntry(b)}>
            ${(0,t.kg)("editor.alarm_panel.cancel",v,"Cancel")}
          </button>
        </div>
      `:o.s6;if("hero"===F){const r=this._pendingArmMode.get(b),n=(this._codeBuffer.get(b),()=>f&&!r?o.qy`${G()}`:f&&r&&"alarm_disarm"!==r?o.qy`
            <div class="uc-alarm-pending-mode-label">
              <ha-icon style="--mdc-icon-size:16px; margin-right:6px;" icon="${this._armModeIcon(r)}"></ha-icon>
              ${(0,t.kg)("editor.alarm_panel.code_for",v,"Code for")} ${this._armModeLabel(r,v)}
              <button type="button" class="uc-alarm-cancel-btn"
                @click=${()=>this._cancelCodeEntry(b)}>
                ${(0,t.kg)("editor.alarm_panel.cancel",v,"Cancel")}
              </button>
            </div>
            ${this._renderKeypad(b,e,v)}
          `:!$&&!k||!U&&"alarm_disarm"!==I?$||k?o.qy`${W()}`:o.s6:o.qy`
            ${U?o.s6:O()}
            ${this._renderKeypad(b,e,v)}
          `);return o.qy`
        <style>${this.getStyles()}</style>
        <div class="uc-alarm-wrapper ${H} ${k?"uc-alarm-wrapper--triggered":""}"
          data-uc-role="pane"
          style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none); border-radius: var(--uc-r-20, 20px); overflow: hidden; ${N}">
          ${this.wrapWithAnimation(o.qy`
            <div class="uc-alarm uc-alarm--hero">

              <!-- Status ring -->
              <div class="uc-alarm__visual">
                <div class="uc-alarm__glow ${f?"":"uc-alarm__glow--on"}"
                  style="--alarm-color:${S}"></div>
                <div class="uc-alarm-ring ${k?"uc-alarm-ring--triggered":""}"
                  style="--alarm-color:${S}">
                  ${!1!==g.show_icon?o.qy`
                    <ha-icon icon="${j}"
                      style="--mdc-icon-size:52px; color:${S}; transition: color 0.3s;"></ha-icon>
                  `:o.s6}
                </div>
              </div>

              <!-- Name + state badge -->
              <div class="uc-alarm__identity">
                ${!1!==g.show_title?o.qy`<h2 class="uc-alarm-title">${L}</h2>`:o.s6}
                ${!1!==g.show_state?o.qy`
                  <span class="uc-alarm-badge" style="--alarm-color:${S}">
                    ${f||C?o.s6:o.qy`<span class="uc-alarm-dot"></span>`}
                    ${q}
                  </span>
                `:o.s6}
              </div>

              <!-- Action area (arm buttons / keypad / disarm) -->
              <div class="uc-alarm__actions">
                ${n()}
              </div>
            </div>
          `,a,e)}
        </div>
      `}return"standard"===F?o.qy`
        <style>${this.getStyles()}</style>
        <div class="uc-alarm-wrapper ${H}"
          data-uc-role="pane"
          style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none); border-radius: var(--uc-r-16, 16px); overflow: hidden; ${N}">
          ${this.wrapWithAnimation(o.qy`
            <div class="uc-alarm uc-alarm--standard">
              <div class="uc-alarm-std__row">
                ${!1!==g.show_icon?o.qy`
                  <div class="uc-alarm-icon-well" style="--alarm-color:${S}">
                    <ha-icon icon="${j}" style="--mdc-icon-size:26px; color:${S};"></ha-icon>
                  </div>
                `:o.s6}
                <div class="uc-alarm-std__meta">
                  ${!1!==g.show_title?o.qy`<h2 class="uc-alarm-std-title">${L}</h2>`:o.s6}
                  ${!1!==g.show_state?o.qy`<p class="uc-alarm-std-subtitle" style="color:${S}">${q}</p>`:o.s6}
                </div>
                <div class="uc-alarm-std__actions" role="group">
                  ${f?T.map(a=>o.qy`
                        <button type="button" class="uc-alarm-std-btn ${I===a?"uc-alarm-arm-btn--active":""}"
                          ?disabled=${A||C}
                          @click=${()=>{B?(this._pendingArmMode.set(b,a),this._codeBuffer.set(b,""),this.triggerPreviewUpdate(!0)):this._callAlarm(e,b,a,"")}}>
                          <ha-icon style="--mdc-icon-size:15px;" icon="${this._armModeIcon(a)}"></ha-icon>
                          ${this._armModeLabel(a,v)}
                        </button>
                      `):o.qy`
                        <button type="button" class="uc-alarm-std-btn uc-alarm-std-btn--disarm"
                          ?disabled=${A||C}
                          @click=${()=>{E?(this._pendingArmMode.set(b,"alarm_disarm"),this._codeBuffer.set(b,""),this.triggerPreviewUpdate(!0)):this._callAlarm(e,b,"alarm_disarm","")}}>
                          <ha-icon style="--mdc-icon-size:15px;" icon="mdi:shield-off-outline"></ha-icon>
                          ${(0,t.kg)("editor.alarm_panel.action_disarm",v,"Disarm")}
                        </button>
                      `}
                </div>
              </div>
              ${I?O():o.s6}
              ${U||I?this._renderKeypad(b,e,v):o.s6}
            </div>
          `,a,e)}
        </div>
      `:o.qy`
      <style>${this.getStyles()}</style>
      <div class="uc-alarm-wrapper ${H}"
        data-uc-role="pane"
        style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none); border-radius: ${I||K?"20px":"999px"}; overflow: hidden; ${N}">
        ${this.wrapWithAnimation(o.qy`
          <div class="uc-alarm uc-alarm--compact">
            <div class="uc-alarm-compact__row">
              ${!1!==g.show_icon?o.qy`
                <div class="uc-alarm-icon-compact" style="--alarm-color:${S}">
                  <ha-icon icon="${j}" style="--mdc-icon-size:16px; color:${S};"></ha-icon>
                </div>
              `:o.s6}
              <span class="uc-alarm-compact-label" style="color:${S}">
                ${!1!==g.show_title?o.qy`${L} · `:o.s6}${q}
              </span>
              ${f?0===T.length?o.s6:o.qy`
                    <button type="button" class="uc-alarm-compact-btn ${K?"uc-alarm-arm-btn--active":""}"
                      ?disabled=${A||C}
                      @click=${()=>{if(T.length>1)return K?this._compactChooser.delete(b):this._compactChooser.add(b),void this.triggerPreviewUpdate(!0);V(T[0])}}>
                      <ha-icon style="--mdc-icon-size:13px;" icon="${1===T.length?this._armModeIcon(T[0]):"mdi:shield-check"}"></ha-icon>
                      ${1===T.length?this._armModeLabel(T[0],v):(0,t.kg)("editor.alarm_panel.action_arm",v,"Arm")}
                    </button>
                  `:o.qy`
                    <button type="button" class="uc-alarm-compact-btn uc-alarm-compact-btn--disarm"
                      ?disabled=${A||C}
                      @click=${()=>{E?(this._pendingArmMode.set(b,"alarm_disarm"),this._codeBuffer.set(b,""),this.triggerPreviewUpdate(!0)):this._callAlarm(e,b,"alarm_disarm","")}}>
                      <ha-icon style="--mdc-icon-size:13px;" icon="mdi:shield-off-outline"></ha-icon>
                      ${(0,t.kg)("editor.alarm_panel.action_disarm",v,"Disarm")}
                    </button>
                  `}
            </div>
            ${K&&!I?o.qy`<div class="uc-alarm-compact__modes">${G(a=>{this._compactChooser.delete(b),V(a)})}</div>`:o.s6}
            ${I?o.qy`
                  <div class="uc-alarm-compact__keypad">
                    ${O()}
                    ${this._renderKeypad(b,e,v)}
                  </div>
                `:o.s6}
          </div>
        `,a,e)}
      </div>
    `}getStyles(){return"\n      .uc-alarm-wrapper { box-sizing: border-box; }\n      .uc-alarm { box-sizing: border-box; color: var(--primary-text-color); }\n\n      /* ═══ HERO ══════════════════════════════════════════════════════ */\n      .uc-alarm--hero {\n        padding: 28px 20px 24px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 18px;\n      }\n\n      /* Status ring */\n      .uc-alarm__visual {\n        position: relative;\n        width: 148px;\n        height: 148px;\n        flex-shrink: 0;\n      }\n      .uc-alarm__glow {\n        position: absolute;\n        inset: -16px;\n        border-radius: 50%;\n        background: radial-gradient(circle, color-mix(in srgb, var(--alarm-color) 14%, transparent) 0%, transparent 70%);\n        opacity: 0;\n        transition: opacity 0.4s ease;\n        pointer-events: none;\n      }\n      .uc-alarm__glow--on { opacity: 1; }\n      .uc-alarm-ring {\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        background: radial-gradient(\n          circle at 38% 32%,\n          color-mix(in srgb, var(--alarm-color) 10%, var(--card-background-color, var(--ha-card-background))) 0%,\n          color-mix(in srgb, var(--card-background-color, var(--ha-card-background)) 90%, var(--alarm-color)) 100%\n        );\n        border: 2px solid color-mix(in srgb, var(--alarm-color) 35%, transparent);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        box-shadow: inset 0 2px 18px rgba(0,0,0,0.12),\n                    0 0 0 6px color-mix(in srgb, var(--alarm-color) 8%, transparent);\n        transition: border-color 0.3s ease, box-shadow 0.3s ease;\n        position: relative;\n        z-index: 1;\n      }\n      @keyframes uc-alarm-pulse {\n        0%, 100% { box-shadow: inset 0 2px 18px rgba(0,0,0,0.12), 0 0 0 6px color-mix(in srgb, var(--error-color, #db4437) 12%, transparent); }\n        50%       { box-shadow: inset 0 2px 18px rgba(0,0,0,0.12), 0 0 0 18px color-mix(in srgb, var(--error-color, #db4437) 4%, transparent); }\n      }\n      @media (prefers-reduced-motion: no-preference) {\n        .uc-alarm-ring--triggered { animation: uc-alarm-pulse 1.2s ease-in-out infinite; }\n      }\n\n      /* Identity row */\n      .uc-alarm__identity {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 8px;\n        text-align: center;\n      }\n      .uc-alarm-title {\n        margin: 0;\n        font-size: 1.25rem;\n        font-weight: 800;\n        letter-spacing: -0.02em;\n        color: var(--primary-text-color);\n      }\n      .uc-alarm-badge {\n        display: inline-flex;\n        align-items: center;\n        gap: 7px;\n        padding: 5px 16px;\n        border-radius: 999px;\n        font-size: 0.75rem;\n        font-weight: 700;\n        letter-spacing: 0.04em;\n        text-transform: uppercase;\n        background: color-mix(in srgb, var(--alarm-color) 10%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: color-mix(in srgb, var(--alarm-color) 60%, var(--primary-text-color));\n        border: 1px solid color-mix(in srgb, var(--alarm-color) 28%, transparent);\n      }\n      .uc-alarm-dot {\n        width: 7px; height: 7px;\n        border-radius: 50%;\n        background: var(--alarm-color);\n        box-shadow: 0 0 6px color-mix(in srgb, var(--alarm-color) 65%, transparent);\n        flex-shrink: 0;\n      }\n\n      /* Actions area */\n      .uc-alarm__actions { width: 100%; max-width: 360px; display: flex; flex-direction: column; align-items: center; gap: 12px; }\n\n      /* Arm mode buttons */\n      .uc-alarm-arm-btns { display: flex; flex-wrap: wrap; gap: 8px; width: 100%; justify-content: center; }\n      .uc-alarm-arm-btn {\n        flex: 1 1 auto;\n        min-width: 80px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        font: inherit;\n        font-size: 0.8125rem;\n        font-weight: 700;\n        padding: 10px 14px;\n        border-radius: var(--uc-r-14, 14px);\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 60%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 6%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.1s;\n      }\n      .uc-alarm-arm-btn:active:not(:disabled) { transform: scale(0.97); }\n      .uc-alarm-arm-btn:disabled { opacity: 0.38; cursor: not-allowed; }\n      .uc-alarm-arm-btn--active, .uc-alarm-arm-btn:hover:not(:disabled) {\n        border-color: color-mix(in srgb, var(--primary-color) 40%, transparent);\n        background: color-mix(in srgb, var(--primary-color) 12%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-color);\n      }\n\n      .uc-alarm-disarm-btn {\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        font: inherit;\n        font-size: 0.875rem;\n        font-weight: 700;\n        padding: 12px 20px;\n        border-radius: var(--uc-r-14, 14px);\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--success-color, #43a047) 45%, transparent);\n        background: color-mix(in srgb, var(--success-color, #43a047) 10%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--success-color, #43a047);\n        transition: background 0.15s, transform 0.1s;\n      }\n      .uc-alarm-disarm-btn:active:not(:disabled) { transform: scale(0.98); }\n      .uc-alarm-disarm-btn:disabled { opacity: 0.38; cursor: not-allowed; }\n\n      /* Pending arm mode label */\n      .uc-alarm-pending-mode-label {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 0.8125rem;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        padding: 4px 0;\n      }\n      .uc-alarm-cancel-btn {\n        margin-left: 8px;\n        font: inherit;\n        font-size: 0.75rem;\n        padding: 3px 10px;\n        border-radius: 999px;\n        cursor: pointer;\n        border: 1px solid color-mix(in srgb, var(--divider-color) 55%, transparent);\n        background: transparent;\n        color: var(--secondary-text-color);\n        transition: background 0.1s;\n      }\n      .uc-alarm-cancel-btn:hover { background: color-mix(in srgb, var(--divider-color) 12%, transparent); }\n\n      /* ═══ KEYPAD ═════════════════════════════════════════════════════ */\n      .uc-alarm-keypad { width: 100%; max-width: 220px; display: flex; flex-direction: column; gap: 10px; }\n      .uc-alarm-code-display {\n        text-align: center;\n        font-size: 1.25rem;\n        letter-spacing: 0.25em;\n        font-weight: 600;\n        min-height: 34px;\n        color: var(--primary-text-color);\n        padding: 4px 0;\n      }\n      .uc-alarm-keypad-grid {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 8px;\n      }\n      .uc-alarm-key {\n        aspect-ratio: 1;\n        font: inherit;\n        font-size: 1.125rem;\n        font-weight: 600;\n        border-radius: 50%;\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 55%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 6%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: background 0.12s, transform 0.1s;\n        min-height: 48px;\n      }\n      .uc-alarm-key:active:not(:disabled) { transform: scale(0.92); background: color-mix(in srgb, var(--primary-color) 14%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background)))); }\n      .uc-alarm-key--action {\n        background: transparent;\n        border-color: transparent;\n        color: var(--secondary-text-color);\n      }\n      .uc-alarm-key--confirm {\n        background: color-mix(in srgb, var(--success-color, #43a047) 14%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        border-color: color-mix(in srgb, var(--success-color, #43a047) 40%, transparent);\n        color: var(--success-color, #43a047);\n      }\n      .uc-alarm-key--dim { opacity: 0.35; cursor: default; }\n\n      /* ═══ STANDARD ═══════════════════════════════════════════════════ */\n      .uc-alarm--standard { padding: 14px 16px; }\n      .uc-alarm--standard .uc-alarm-keypad { margin: 12px auto 0; }\n      .uc-alarm--standard .uc-alarm-pending-mode-label { justify-content: center; margin-top: 10px; }\n      .uc-alarm-std__row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }\n      .uc-alarm-icon-well {\n        flex-shrink: 0;\n        width: 44px; height: 44px;\n        border-radius: 50%;\n        border: 1.5px solid color-mix(in srgb, var(--alarm-color) 35%, transparent);\n        background: color-mix(in srgb, var(--alarm-color) 10%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        display: flex; align-items: center; justify-content: center;\n      }\n      .uc-alarm-std__meta { flex: 1 1 120px; min-width: 0; overflow: hidden; }\n      .uc-alarm-std-title { margin: 0; font-size: 0.9375rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n      .uc-alarm-std-subtitle { margin: 3px 0 0; font-size: 0.8125rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n      .uc-alarm-std__actions { flex: 0 1 auto; display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; margin-left: auto; }\n      .uc-alarm-std-btn {\n        display: flex; align-items: center; gap: 5px;\n        font: inherit; font-size: 0.78rem; font-weight: 700;\n        padding: 7px 12px; border-radius: 999px;\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 60%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 6%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        transition: background 0.12s, transform 0.1s;\n      }\n      .uc-alarm-std-btn:disabled { opacity: 0.38; cursor: not-allowed; }\n      .uc-alarm-std-btn--disarm {\n        border-color: color-mix(in srgb, var(--success-color, #43a047) 45%, transparent);\n        color: var(--success-color, #43a047);\n      }\n\n      /* ═══ COMPACT ═══════════════════════════════════════════════════ */\n      .uc-alarm--compact { padding: 7px 12px; }\n      .uc-alarm-compact__keypad {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 8px;\n        padding: 10px 4px 8px;\n      }\n      .uc-alarm-compact__row { display: flex; align-items: center; gap: 8px; }\n      .uc-alarm-compact__modes { padding: 8px 2px 4px; }\n      .uc-alarm-icon-compact {\n        flex-shrink: 0;\n        width: 26px; height: 26px;\n        border-radius: 50%;\n        background: color-mix(in srgb, var(--alarm-color) 10%, transparent);\n        display: flex; align-items: center; justify-content: center;\n      }\n      .uc-alarm-compact-label {\n        flex: 1; min-width: 0;\n        font-size: 0.8125rem; font-weight: 600;\n        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n      }\n      .uc-alarm-compact-btn {\n        flex-shrink: 0;\n        display: flex; align-items: center; gap: 4px;\n        font: inherit; font-size: 0.75rem; font-weight: 700;\n        padding: 5px 12px; border-radius: 999px;\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 60%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 6%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        transition: background 0.12s;\n      }\n      .uc-alarm-compact-btn:disabled { opacity: 0.38; cursor: not-allowed; }\n      .uc-alarm-compact-btn--disarm {\n        border-color: color-mix(in srgb, var(--success-color, #43a047) 45%, transparent);\n        color: var(--success-color, #43a047);\n      }\n\n      /* Triggered wrapper highlight */\n      .uc-alarm-wrapper--triggered {\n        outline: 2px solid color-mix(in srgb, var(--error-color, #db4437) 45%, transparent);\n      }\n\n      @media (prefers-reduced-motion: reduce) {\n        .uc-alarm-ring--triggered { animation: none; }\n      }\n    "}}}};