export const __webpack_esm_ids__=[2185];export const __webpack_esm_modules__={6710(a,e,r){r.d(e,{UltraAlarmPanelModule:()=>c});var n=r(2618),t=r(6478),o=r(7475);const i=new Set(["disarmed"]),l=new Set(["triggered"]),s=new Set(["arming","disarming","pending"]),d=new Set(["armed_home","armed_away","armed_night","armed_vacation","armed_custom_bypass"]);class c extends o.m{constructor(){super(...arguments),this._pending=new Map,this._pendingTimeouts=new Map,this._codeBuffer=new Map,this._pendingArmMode=new Map,this.handlesOwnDesignStyles=!0,this.metadata={type:"alarm_panel",title:"Alarm Panel",description:"Arm, disarm, and monitor your security alarm with a PIN pad and status ring",author:"WJD Designs",version:"1.0.0",icon:"mdi:shield-home",category:"interactive",tags:["alarm","security","panel","keypad","pro","premium","arm","disarm"]}}createDefault(a,e){return{id:a||this.generateId("alarm_panel"),type:"alarm_panel",entity:"",name:"",icon:"",layout:"hero",show_title:!0,show_icon:!0,show_state:!0,show_keypad:!0,show_arm_home:void 0,show_arm_away:void 0,show_arm_night:void 0,show_arm_vacation:void 0,show_arm_custom:void 0,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(a){var e;const r=[],n=a;return a.id||r.push("Module ID is required"),(null===(e=n.entity)||void 0===e?void 0:e.trim())||r.push((0,t.kg)("editor.alarm_panel.error_entity","en","Select an alarm_control_panel entity")),{valid:0===r.length,errors:r}}renderGeneralTab(a,e,r,o){var i,l,s,d,c,m;const p=a,u=(null===(i=null==e?void 0:e.locale)||void 0===i?void 0:i.language)||"en";return n.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">

        ${this.renderSettingsSection((0,t.kg)("editor.alarm_panel.entity_section",u,"Alarm Entity"),(0,t.kg)("editor.alarm_panel.entity_section_desc",u,"Select the alarm_control_panel entity to control."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,r,"entity",p.entity||"",a=>{o({entity:a}),setTimeout(()=>this.triggerPreviewUpdate(),50)},["alarm_control_panel"],(0,t.kg)("editor.alarm_panel.entity",u,"Alarm entity"))}
        </div>

        ${this.renderSettingsSection((0,t.kg)("editor.alarm_panel.display_section",u,"Display"),(0,t.kg)("editor.alarm_panel.display_desc",u,"Choose what to show."),[{title:(0,t.kg)("editor.alarm_panel.show_title",u,"Show title"),description:(0,t.kg)("editor.alarm_panel.show_title_desc",u,"Display the alarm name"),hass:e,data:{show_title:!1!==p.show_title},schema:[this.booleanField("show_title")],onChange:a=>{var e,r;o({show_title:null===(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_title)||void 0===r||r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_icon",u,"Show icon"),description:(0,t.kg)("editor.alarm_panel.show_icon_desc",u,"Show shield icon in the status ring"),hass:e,data:{show_icon:!1!==p.show_icon},schema:[this.booleanField("show_icon")],onChange:a=>{var e,r;o({show_icon:null===(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_icon)||void 0===r||r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_state",u,"Show state text"),description:(0,t.kg)("editor.alarm_panel.show_state_desc",u,"Display the alarm state badge"),hass:e,data:{show_state:!1!==p.show_state},schema:[this.booleanField("show_state")],onChange:a=>{var e,r;o({show_state:null===(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_state)||void 0===r||r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_keypad",u,"Show keypad"),description:(0,t.kg)("editor.alarm_panel.show_keypad_desc",u,"Always show the PIN keypad"),hass:e,data:{show_keypad:!1!==p.show_keypad},schema:[this.booleanField("show_keypad")],onChange:a=>{var e,r;o({show_keypad:null===(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_keypad)||void 0===r||r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        ${this.renderSettingsSection((0,t.kg)("editor.alarm_panel.layout_section",u,"Layout"),(0,t.kg)("editor.alarm_panel.layout_desc",u,"Visual style of the alarm panel."),[{title:(0,t.kg)("editor.alarm_panel.layout",u,"Layout"),description:(0,t.kg)("editor.alarm_panel.layout_style_desc",u,"Hero shows full PIN pad, standard is a single row, compact is a chip"),hass:e,data:{layout:p.layout||"hero"},schema:[this.selectField("layout",[{value:"hero",label:(0,t.kg)("editor.alarm_panel.layout_hero",u,"Hero")},{value:"standard",label:(0,t.kg)("editor.alarm_panel.layout_standard",u,"Standard")},{value:"compact",label:(0,t.kg)("editor.alarm_panel.layout_compact",u,"Compact")}])],onChange:a=>{var e;o({layout:(null===(e=a.detail.value)||void 0===e?void 0:e.layout)||"hero"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        ${this.renderSettingsSection((0,t.kg)("editor.alarm_panel.arm_modes_section",u,"Arm Modes"),(0,t.kg)("editor.alarm_panel.arm_modes_desc",u,"Choose which arm mode buttons to show. Leave unset to auto-detect from the entity."),[{title:(0,t.kg)("editor.alarm_panel.show_arm_home",u,"Show Arm Home"),description:(0,t.kg)("editor.alarm_panel.show_arm_home_desc",u,"Auto-detected when not set"),hass:e,data:{show_arm_home:null===(l=p.show_arm_home)||void 0===l||l},schema:[this.booleanField("show_arm_home")],onChange:a=>{var e,r;o({show_arm_home:null===(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_arm_home)||void 0===r||r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_arm_away",u,"Show Arm Away"),description:(0,t.kg)("editor.alarm_panel.show_arm_away_desc",u,"Auto-detected when not set"),hass:e,data:{show_arm_away:null===(s=p.show_arm_away)||void 0===s||s},schema:[this.booleanField("show_arm_away")],onChange:a=>{var e,r;o({show_arm_away:null===(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_arm_away)||void 0===r||r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_arm_night",u,"Show Arm Night"),description:(0,t.kg)("editor.alarm_panel.show_arm_night_desc",u,"Auto-detected when not set"),hass:e,data:{show_arm_night:null===(d=p.show_arm_night)||void 0===d||d},schema:[this.booleanField("show_arm_night")],onChange:a=>{var e,r;o({show_arm_night:null===(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_arm_night)||void 0===r||r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_arm_vacation",u,"Show Arm Vacation"),description:(0,t.kg)("editor.alarm_panel.show_arm_vacation_desc",u,"Auto-detected when not set"),hass:e,data:{show_arm_vacation:null!==(c=p.show_arm_vacation)&&void 0!==c&&c},schema:[this.booleanField("show_arm_vacation")],onChange:a=>{var e,r;o({show_arm_vacation:null!==(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_arm_vacation)&&void 0!==r&&r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,t.kg)("editor.alarm_panel.show_arm_custom",u,"Show Arm Custom Bypass"),description:(0,t.kg)("editor.alarm_panel.show_arm_custom_desc",u,"Auto-detected when not set"),hass:e,data:{show_arm_custom:null!==(m=p.show_arm_custom)&&void 0!==m&&m},schema:[this.booleanField("show_arm_custom")],onChange:a=>{var e,r;o({show_arm_custom:null!==(r=null===(e=a.detail.value)||void 0===e?void 0:e.show_arm_custom)&&void 0!==r&&r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

      </div>
    `}_stateColor(a){return l.has(a)?"var(--error-color, #db4437)":"armed_away"===a||"armed_vacation"===a?"#f59e0b":d.has(a)?"var(--primary-color)":s.has(a)?"#f59e0b":"var(--success-color, #43a047)"}_stateLabel(a,e){const r={disarmed:["editor.alarm_panel.state_disarmed","Disarmed"],armed_home:["editor.alarm_panel.state_armed_home","Armed Home"],armed_away:["editor.alarm_panel.state_armed_away","Armed Away"],armed_night:["editor.alarm_panel.state_armed_night","Armed Night"],armed_vacation:["editor.alarm_panel.state_armed_vacation","Armed Vacation"],armed_custom_bypass:["editor.alarm_panel.state_armed_custom_bypass","Custom Bypass"],pending:["editor.alarm_panel.state_pending","Pending…"],arming:["editor.alarm_panel.state_arming","Arming…"],disarming:["editor.alarm_panel.state_disarming","Disarming…"],triggered:["editor.alarm_panel.state_triggered","TRIGGERED"],unavailable:["editor.alarm_panel.state_unavailable","Unavailable"]}[a];return r?(0,t.kg)(r[0],e,r[1]):a.replace(/_/g," ")}_armModeLabel(a,e){const r={arm_home:["editor.alarm_panel.mode_home","Home"],arm_away:["editor.alarm_panel.mode_away","Away"],arm_night:["editor.alarm_panel.mode_night","Night"],arm_vacation:["editor.alarm_panel.mode_vacation","Vacation"],arm_custom_bypass:["editor.alarm_panel.mode_custom","Custom"]}[a];return r?(0,t.kg)(r[0],e,r[1]):a}_armModeIcon(a){return{arm_home:"mdi:home",arm_away:"mdi:car",arm_night:"mdi:moon-waning-crescent",arm_vacation:"mdi:airplane",arm_custom_bypass:"mdi:shield-edit"}[a]}_getVisibleModes(a,e){return[["arm_home",1,a.show_arm_home],["arm_away",2,a.show_arm_away],["arm_night",4,a.show_arm_night],["arm_vacation",8,a.show_arm_vacation],["arm_custom_bypass",16,a.show_arm_custom]].filter(([,a,r])=>!1!==r&&(!0===r||!!(e&a))).map(([a])=>a)}_appendDigit(a,e){const r=this._codeBuffer.get(a)||"";r.length>=8||(this._codeBuffer.set(a,r+e),this.triggerPreviewUpdate(!0))}_clearCode(a){this._codeBuffer.set(a,""),this.triggerPreviewUpdate(!0)}_callAlarm(a,e,r,n){const t={entity_id:e};n&&(t.code=n),a.callService("alarm_control_panel",r,t),this._codeBuffer.set(e,""),this._pendingArmMode.delete(e),this._pending.set(e,r);const o=this._pendingTimeouts.get(e);o&&clearTimeout(o),this._pendingTimeouts.set(e,setTimeout(()=>{this._pendingTimeouts.delete(e),this._pending.delete(e)&&this.triggerPreviewUpdate()},15e3)),this.triggerPreviewUpdate(!0)}_submitCode(a,e){const r=this._codeBuffer.get(a)||"",n=this._pendingArmMode.get(a)||"alarm_disarm";this._callAlarm(e,a,n,r)}_cancelCodeEntry(a){this._pendingArmMode.delete(a),this._codeBuffer.set(a,""),this.triggerPreviewUpdate(!0)}_renderKeypad(a,e,r){const o=this._codeBuffer.get(a)||"",i="●".repeat(o.length);return n.qy`
      <div class="uc-alarm-keypad" role="group" tabindex="0"
        aria-label="${(0,t.kg)("editor.alarm_panel.keypad_label",r,"PIN keypad")}"
        @keydown=${r=>{if(/^[0-9]$/.test(r.key))r.preventDefault(),r.stopPropagation(),this._appendDigit(a,r.key);else if("Backspace"===r.key){r.preventDefault(),r.stopPropagation();const e=this._codeBuffer.get(a)||"";this._codeBuffer.set(a,e.slice(0,-1)),this.triggerPreviewUpdate(!0)}else"Enter"===r.key?(r.preventDefault(),r.stopPropagation(),this._codeBuffer.get(a)&&this._submitCode(a,e)):"Escape"===r.key&&(r.preventDefault(),r.stopPropagation(),this._cancelCodeEntry(a))}}>
        <div class="uc-alarm-code-display" aria-live="polite">
          ${i||n.qy`<span style="opacity:0.3">${(0,t.kg)("editor.alarm_panel.code_placeholder",r,"Enter code")}</span>`}
        </div>
        <div class="uc-alarm-keypad-grid">
          ${["1","2","3","4","5","6","7","8","9","*","0","#"].map(i=>"*"===i?n.qy`<button type="button" class="uc-alarm-key uc-alarm-key--action"
                @click=${()=>this._clearCode(a)} aria-label="${(0,t.kg)("editor.alarm_panel.clear",r,"Clear")}">
                <ha-icon style="--mdc-icon-size:18px" icon="mdi:backspace-outline"></ha-icon>
              </button>`:"#"===i?n.qy`<button type="button" class="uc-alarm-key uc-alarm-key--confirm ${o?"":"uc-alarm-key--dim"}"
                @click=${()=>this._submitCode(a,e)}
                aria-label="${(0,t.kg)("editor.alarm_panel.confirm",r,"Confirm")}">
                <ha-icon style="--mdc-icon-size:18px" icon="mdi:check"></ha-icon>
              </button>`:n.qy`<button type="button" class="uc-alarm-key" aria-label="${i}"
              @click=${()=>this._appendDigit(a,i)}>${i}</button>`)}
        </div>
      </div>
    `}renderPreview(a,e,r,o){var c,m,p,u,h;const _=a,g=(null===(c=null==e?void 0:e.locale)||void 0===c?void 0:c.language)||"en",v=this.resolveEntity(_.entity,r)||_.entity;if(!v||!(null===(m=null==e?void 0:e.states)||void 0===m?void 0:m[v]))return n.qy`
        <style>${this.getStyles()}</style>
        <div
          class="uc-alarm-wrapper"
          data-uc-role="pane"
          style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border-radius: var(--uc-r-16, 16px); overflow: hidden;"
        >
          ${this.renderGradientErrorState((0,t.kg)("editor.alarm_panel.config_needed",g,"Select an alarm panel"),(0,t.kg)("editor.alarm_panel.config_needed_desc",g,"Choose an alarm_control_panel entity in the General tab"),"mdi:shield-home")}
        </div>
      `;const b=e.states[v],y=b.attributes||{},w=String(b.state).toLowerCase();if(this._pending.get(v)&&(i.has(w)||d.has(w)||l.has(w))){this._pending.delete(v);const a=this._pendingTimeouts.get(v);a&&(clearTimeout(a),this._pendingTimeouts.delete(v))}const x=i.has(w),f=l.has(w),k=d.has(w),$=s.has(w),A="unavailable"===w||"unknown"===w,C=this._stateColor(w),S=this._stateLabel(w,g),q=y.code_format,P=!1!==y.code_arm_required,M=function(a){const e=a.supported_features;return"number"==typeof e?e:0}(y),z=k||f||$||x&&P,D=!1!==_.show_keypad&&z&&null!=q,U=x?this._getVisibleModes(_,M):[],T=P&&null!=q,B=null!=q,E=this._pendingArmMode.get(v),I=(null===(p=_.name)||void 0===p?void 0:p.trim())||("string"==typeof y.friendly_name?y.friendly_name:"")||(null===(u=v.split(".").pop())||void 0===u?void 0:u.replace(/_/g," "))||"Alarm",L=(null===(h=_.icon)||void 0===h?void 0:h.trim())||(f?"mdi:bell-ring":k?"mdi:shield-check":"mdi:shield-home-outline"),j=_.layout||"hero",F=(()=>{const r=this.buildDesignStyles(a,e);return Object.entries(r).filter(([,a])=>null!=a&&""!==a).map(([a,e])=>`${a.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${e}`).join("; ")})(),N=this.getHoverEffectClass(a),H=()=>n.qy`
      <div class="uc-alarm-arm-btns" role="group" aria-label="${(0,t.kg)("editor.alarm_panel.arm_modes_label",g,"Arm modes")}">
        ${U.map(a=>n.qy`
          <button type="button"
            class="uc-alarm-arm-btn ${this._pendingArmMode.get(v)===a?"uc-alarm-arm-btn--active":""}"
            ?disabled=${$||A}
            @click=${()=>{D||T?(this._pendingArmMode.set(v,a),this._codeBuffer.set(v,""),this.triggerPreviewUpdate(!0)):this._callAlarm(e,v,a,"")}}
          >
            <ha-icon style="--mdc-icon-size:16px;" icon="${this._armModeIcon(a)}"></ha-icon>
            ${this._armModeLabel(a,g)}
          </button>
        `)}
      </div>
    `,V=()=>x||D?n.s6:n.qy`
        <button type="button" class="uc-alarm-disarm-btn"
          ?disabled=${$||A}
          @click=${()=>{B?(this._pendingArmMode.set(v,"alarm_disarm"),this._codeBuffer.set(v,""),this.triggerPreviewUpdate(!0)):this._callAlarm(e,v,"alarm_disarm","")}}>
          <ha-icon style="--mdc-icon-size:18px" icon="mdi:shield-off-outline"></ha-icon>
          ${(0,t.kg)("editor.alarm_panel.action_disarm",g,"Disarm")}
        </button>
      `,K=()=>E?n.qy`
        <div class="uc-alarm-pending-mode-label">
          ${"alarm_disarm"===E?n.qy`
                <ha-icon style="--mdc-icon-size:16px; margin-right:6px;" icon="mdi:shield-off-outline"></ha-icon>
                ${(0,t.kg)("editor.alarm_panel.code_for",g,"Code for")} ${(0,t.kg)("editor.alarm_panel.action_disarm",g,"Disarm")}
              `:n.qy`
                <ha-icon style="--mdc-icon-size:16px; margin-right:6px;" icon="${this._armModeIcon(E)}"></ha-icon>
                ${(0,t.kg)("editor.alarm_panel.code_for",g,"Code for")} ${this._armModeLabel(E,g)}
              `}
          <button type="button" class="uc-alarm-cancel-btn"
            @click=${()=>this._cancelCodeEntry(v)}>
            ${(0,t.kg)("editor.alarm_panel.cancel",g,"Cancel")}
          </button>
        </div>
      `:n.s6;if("hero"===j){const r=this._pendingArmMode.get(v),o=(this._codeBuffer.get(v),()=>x&&!r?n.qy`${H()}`:x&&r&&"alarm_disarm"!==r?n.qy`
            <div class="uc-alarm-pending-mode-label">
              <ha-icon style="--mdc-icon-size:16px; margin-right:6px;" icon="${this._armModeIcon(r)}"></ha-icon>
              ${(0,t.kg)("editor.alarm_panel.code_for",g,"Code for")} ${this._armModeLabel(r,g)}
              <button type="button" class="uc-alarm-cancel-btn"
                @click=${()=>this._cancelCodeEntry(v)}>
                ${(0,t.kg)("editor.alarm_panel.cancel",g,"Cancel")}
              </button>
            </div>
            ${this._renderKeypad(v,e,g)}
          `:!k&&!f||!D&&"alarm_disarm"!==E?k||f?n.qy`${V()}`:n.s6:n.qy`
            ${D?n.s6:K()}
            ${this._renderKeypad(v,e,g)}
          `);return n.qy`
        <style>${this.getStyles()}</style>
        <div class="uc-alarm-wrapper ${N} ${f?"uc-alarm-wrapper--triggered":""}"
          data-uc-role="pane"
          style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none); border-radius: var(--uc-r-20, 20px); overflow: hidden; ${F}">
          ${this.wrapWithAnimation(n.qy`
            <div class="uc-alarm uc-alarm--hero">

              <!-- Status ring -->
              <div class="uc-alarm__visual">
                <div class="uc-alarm__glow ${x?"":"uc-alarm__glow--on"}"
                  style="--alarm-color:${C}"></div>
                <div class="uc-alarm-ring ${f?"uc-alarm-ring--triggered":""}"
                  style="--alarm-color:${C}">
                  ${!1!==_.show_icon?n.qy`
                    <ha-icon icon="${L}"
                      style="--mdc-icon-size:52px; color:${C}; transition: color 0.3s;"></ha-icon>
                  `:n.s6}
                </div>
              </div>

              <!-- Name + state badge -->
              <div class="uc-alarm__identity">
                ${!1!==_.show_title?n.qy`<h2 class="uc-alarm-title">${I}</h2>`:n.s6}
                ${!1!==_.show_state?n.qy`
                  <span class="uc-alarm-badge" style="--alarm-color:${C}">
                    ${x||A?n.s6:n.qy`<span class="uc-alarm-dot"></span>`}
                    ${S}
                  </span>
                `:n.s6}
              </div>

              <!-- Action area (arm buttons / keypad / disarm) -->
              <div class="uc-alarm__actions">
                ${o()}
              </div>
            </div>
          `,a,e)}
        </div>
      `}return"standard"===j?n.qy`
        <style>${this.getStyles()}</style>
        <div class="uc-alarm-wrapper ${N}"
          data-uc-role="pane"
          style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none); border-radius: var(--uc-r-16, 16px); overflow: hidden; ${F}">
          ${this.wrapWithAnimation(n.qy`
            <div class="uc-alarm uc-alarm--standard">
              <div class="uc-alarm-std__row">
                ${!1!==_.show_icon?n.qy`
                  <div class="uc-alarm-icon-well" style="--alarm-color:${C}">
                    <ha-icon icon="${L}" style="--mdc-icon-size:26px; color:${C};"></ha-icon>
                  </div>
                `:n.s6}
                <div class="uc-alarm-std__meta">
                  ${!1!==_.show_title?n.qy`<h2 class="uc-alarm-std-title">${I}</h2>`:n.s6}
                  ${!1!==_.show_state?n.qy`<p class="uc-alarm-std-subtitle" style="color:${C}">${S}</p>`:n.s6}
                </div>
                <div class="uc-alarm-std__actions" role="group">
                  ${x?U.slice(0,2).map(a=>n.qy`
                        <button type="button" class="uc-alarm-std-btn ${E===a?"uc-alarm-arm-btn--active":""}"
                          ?disabled=${$||A}
                          @click=${()=>{T?(this._pendingArmMode.set(v,a),this._codeBuffer.set(v,""),this.triggerPreviewUpdate(!0)):this._callAlarm(e,v,a,"")}}>
                          <ha-icon style="--mdc-icon-size:15px;" icon="${this._armModeIcon(a)}"></ha-icon>
                          ${this._armModeLabel(a,g)}
                        </button>
                      `):n.qy`
                        <button type="button" class="uc-alarm-std-btn uc-alarm-std-btn--disarm"
                          ?disabled=${$||A}
                          @click=${()=>{B?(this._pendingArmMode.set(v,"alarm_disarm"),this._codeBuffer.set(v,""),this.triggerPreviewUpdate(!0)):this._callAlarm(e,v,"alarm_disarm","")}}>
                          <ha-icon style="--mdc-icon-size:15px;" icon="mdi:shield-off-outline"></ha-icon>
                          ${(0,t.kg)("editor.alarm_panel.action_disarm",g,"Disarm")}
                        </button>
                      `}
                </div>
              </div>
              ${E?K():n.s6}
              ${D||E?this._renderKeypad(v,e,g):n.s6}
            </div>
          `,a,e)}
        </div>
      `:n.qy`
      <style>${this.getStyles()}</style>
      <div class="uc-alarm-wrapper ${N}"
        data-uc-role="pane"
        style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none); border-radius: ${E?"20px":"999px"}; overflow: hidden; ${F}">
        ${this.wrapWithAnimation(n.qy`
          <div class="uc-alarm uc-alarm--compact">
            <div class="uc-alarm-compact__row">
              ${!1!==_.show_icon?n.qy`
                <div class="uc-alarm-icon-compact" style="--alarm-color:${C}">
                  <ha-icon icon="${L}" style="--mdc-icon-size:16px; color:${C};"></ha-icon>
                </div>
              `:n.s6}
              <span class="uc-alarm-compact-label" style="color:${C}">
                ${!1!==_.show_title?n.qy`${I} · `:n.s6}${S}
              </span>
              ${x?n.qy`
                    <button type="button" class="uc-alarm-compact-btn"
                      ?disabled=${$||A}
                      @click=${()=>{T?(this._pendingArmMode.set(v,"arm_away"),this._codeBuffer.set(v,""),this.triggerPreviewUpdate(!0)):this._callAlarm(e,v,"arm_away","")}}>
                      <ha-icon style="--mdc-icon-size:13px;" icon="mdi:shield-check"></ha-icon>
                      ${(0,t.kg)("editor.alarm_panel.action_arm",g,"Arm")}
                    </button>
                  `:n.qy`
                    <button type="button" class="uc-alarm-compact-btn uc-alarm-compact-btn--disarm"
                      ?disabled=${$||A}
                      @click=${()=>{B?(this._pendingArmMode.set(v,"alarm_disarm"),this._codeBuffer.set(v,""),this.triggerPreviewUpdate(!0)):this._callAlarm(e,v,"alarm_disarm","")}}>
                      <ha-icon style="--mdc-icon-size:13px;" icon="mdi:shield-off-outline"></ha-icon>
                      ${(0,t.kg)("editor.alarm_panel.action_disarm",g,"Disarm")}
                    </button>
                  `}
            </div>
            ${E?n.qy`
                  <div class="uc-alarm-compact__keypad">
                    ${K()}
                    ${this._renderKeypad(v,e,g)}
                  </div>
                `:n.s6}
          </div>
        `,a,e)}
      </div>
    `}getStyles(){return"\n      .uc-alarm-wrapper { box-sizing: border-box; }\n      .uc-alarm { box-sizing: border-box; color: var(--primary-text-color); }\n\n      /* ═══ HERO ══════════════════════════════════════════════════════ */\n      .uc-alarm--hero {\n        padding: 28px 20px 24px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 18px;\n      }\n\n      /* Status ring */\n      .uc-alarm__visual {\n        position: relative;\n        width: 148px;\n        height: 148px;\n        flex-shrink: 0;\n      }\n      .uc-alarm__glow {\n        position: absolute;\n        inset: -16px;\n        border-radius: 50%;\n        background: radial-gradient(circle, color-mix(in srgb, var(--alarm-color) 14%, transparent) 0%, transparent 70%);\n        opacity: 0;\n        transition: opacity 0.4s ease;\n        pointer-events: none;\n      }\n      .uc-alarm__glow--on { opacity: 1; }\n      .uc-alarm-ring {\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        background: radial-gradient(\n          circle at 38% 32%,\n          color-mix(in srgb, var(--alarm-color) 10%, var(--card-background-color, var(--ha-card-background))) 0%,\n          color-mix(in srgb, var(--card-background-color, var(--ha-card-background)) 90%, var(--alarm-color)) 100%\n        );\n        border: 2px solid color-mix(in srgb, var(--alarm-color) 35%, transparent);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        box-shadow: inset 0 2px 18px rgba(0,0,0,0.12),\n                    0 0 0 6px color-mix(in srgb, var(--alarm-color) 8%, transparent);\n        transition: border-color 0.3s ease, box-shadow 0.3s ease;\n        position: relative;\n        z-index: 1;\n      }\n      @keyframes uc-alarm-pulse {\n        0%, 100% { box-shadow: inset 0 2px 18px rgba(0,0,0,0.12), 0 0 0 6px color-mix(in srgb, var(--error-color, #db4437) 12%, transparent); }\n        50%       { box-shadow: inset 0 2px 18px rgba(0,0,0,0.12), 0 0 0 18px color-mix(in srgb, var(--error-color, #db4437) 4%, transparent); }\n      }\n      @media (prefers-reduced-motion: no-preference) {\n        .uc-alarm-ring--triggered { animation: uc-alarm-pulse 1.2s ease-in-out infinite; }\n      }\n\n      /* Identity row */\n      .uc-alarm__identity {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 8px;\n        text-align: center;\n      }\n      .uc-alarm-title {\n        margin: 0;\n        font-size: 1.25rem;\n        font-weight: 800;\n        letter-spacing: -0.02em;\n        color: var(--primary-text-color);\n      }\n      .uc-alarm-badge {\n        display: inline-flex;\n        align-items: center;\n        gap: 7px;\n        padding: 5px 16px;\n        border-radius: 999px;\n        font-size: 0.75rem;\n        font-weight: 700;\n        letter-spacing: 0.04em;\n        text-transform: uppercase;\n        background: color-mix(in srgb, var(--alarm-color) 10%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--alarm-color);\n        border: 1px solid color-mix(in srgb, var(--alarm-color) 28%, transparent);\n      }\n      .uc-alarm-dot {\n        width: 7px; height: 7px;\n        border-radius: 50%;\n        background: var(--alarm-color);\n        box-shadow: 0 0 6px color-mix(in srgb, var(--alarm-color) 65%, transparent);\n        flex-shrink: 0;\n      }\n\n      /* Actions area */\n      .uc-alarm__actions { width: 100%; max-width: 360px; display: flex; flex-direction: column; align-items: center; gap: 12px; }\n\n      /* Arm mode buttons */\n      .uc-alarm-arm-btns { display: flex; flex-wrap: wrap; gap: 8px; width: 100%; justify-content: center; }\n      .uc-alarm-arm-btn {\n        flex: 1 1 auto;\n        min-width: 80px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        font: inherit;\n        font-size: 0.8125rem;\n        font-weight: 700;\n        padding: 10px 14px;\n        border-radius: var(--uc-r-14, 14px);\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 60%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 6%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.1s;\n      }\n      .uc-alarm-arm-btn:active:not(:disabled) { transform: scale(0.97); }\n      .uc-alarm-arm-btn:disabled { opacity: 0.38; cursor: not-allowed; }\n      .uc-alarm-arm-btn--active, .uc-alarm-arm-btn:hover:not(:disabled) {\n        border-color: color-mix(in srgb, var(--primary-color) 40%, transparent);\n        background: color-mix(in srgb, var(--primary-color) 12%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-color);\n      }\n\n      .uc-alarm-disarm-btn {\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        font: inherit;\n        font-size: 0.875rem;\n        font-weight: 700;\n        padding: 12px 20px;\n        border-radius: var(--uc-r-14, 14px);\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--success-color, #43a047) 45%, transparent);\n        background: color-mix(in srgb, var(--success-color, #43a047) 10%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--success-color, #43a047);\n        transition: background 0.15s, transform 0.1s;\n      }\n      .uc-alarm-disarm-btn:active:not(:disabled) { transform: scale(0.98); }\n      .uc-alarm-disarm-btn:disabled { opacity: 0.38; cursor: not-allowed; }\n\n      /* Pending arm mode label */\n      .uc-alarm-pending-mode-label {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 0.8125rem;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        padding: 4px 0;\n      }\n      .uc-alarm-cancel-btn {\n        margin-left: 8px;\n        font: inherit;\n        font-size: 0.75rem;\n        padding: 3px 10px;\n        border-radius: 999px;\n        cursor: pointer;\n        border: 1px solid color-mix(in srgb, var(--divider-color) 55%, transparent);\n        background: transparent;\n        color: var(--secondary-text-color);\n        transition: background 0.1s;\n      }\n      .uc-alarm-cancel-btn:hover { background: color-mix(in srgb, var(--divider-color) 12%, transparent); }\n\n      /* ═══ KEYPAD ═════════════════════════════════════════════════════ */\n      .uc-alarm-keypad { width: 100%; max-width: 220px; display: flex; flex-direction: column; gap: 10px; }\n      .uc-alarm-code-display {\n        text-align: center;\n        font-size: 1.25rem;\n        letter-spacing: 0.25em;\n        font-weight: 600;\n        min-height: 34px;\n        color: var(--primary-text-color);\n        padding: 4px 0;\n      }\n      .uc-alarm-keypad-grid {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 8px;\n      }\n      .uc-alarm-key {\n        aspect-ratio: 1;\n        font: inherit;\n        font-size: 1.125rem;\n        font-weight: 600;\n        border-radius: 50%;\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 55%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 6%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: background 0.12s, transform 0.1s;\n        min-height: 48px;\n      }\n      .uc-alarm-key:active:not(:disabled) { transform: scale(0.92); background: color-mix(in srgb, var(--primary-color) 14%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background)))); }\n      .uc-alarm-key--action {\n        background: transparent;\n        border-color: transparent;\n        color: var(--secondary-text-color);\n      }\n      .uc-alarm-key--confirm {\n        background: color-mix(in srgb, var(--success-color, #43a047) 14%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        border-color: color-mix(in srgb, var(--success-color, #43a047) 40%, transparent);\n        color: var(--success-color, #43a047);\n      }\n      .uc-alarm-key--dim { opacity: 0.35; cursor: default; }\n\n      /* ═══ STANDARD ═══════════════════════════════════════════════════ */\n      .uc-alarm--standard { padding: 14px 16px; }\n      .uc-alarm--standard .uc-alarm-keypad { margin: 12px auto 0; }\n      .uc-alarm--standard .uc-alarm-pending-mode-label { justify-content: center; margin-top: 10px; }\n      .uc-alarm-std__row { display: flex; align-items: center; gap: 12px; }\n      .uc-alarm-icon-well {\n        flex-shrink: 0;\n        width: 44px; height: 44px;\n        border-radius: 50%;\n        border: 1.5px solid color-mix(in srgb, var(--alarm-color) 35%, transparent);\n        background: color-mix(in srgb, var(--alarm-color) 10%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        display: flex; align-items: center; justify-content: center;\n      }\n      .uc-alarm-std__meta { flex: 1; min-width: 0; overflow: hidden; }\n      .uc-alarm-std-title { margin: 0; font-size: 0.9375rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n      .uc-alarm-std-subtitle { margin: 3px 0 0; font-size: 0.8125rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n      .uc-alarm-std__actions { flex-shrink: 0; display: flex; gap: 6px; flex-wrap: wrap; max-width: 220px; }\n      .uc-alarm-std-btn {\n        display: flex; align-items: center; gap: 5px;\n        font: inherit; font-size: 0.78rem; font-weight: 700;\n        padding: 7px 12px; border-radius: 999px;\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 60%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 6%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        transition: background 0.12s, transform 0.1s;\n      }\n      .uc-alarm-std-btn:disabled { opacity: 0.38; cursor: not-allowed; }\n      .uc-alarm-std-btn--disarm {\n        border-color: color-mix(in srgb, var(--success-color, #43a047) 45%, transparent);\n        color: var(--success-color, #43a047);\n      }\n\n      /* ═══ COMPACT ═══════════════════════════════════════════════════ */\n      .uc-alarm--compact { padding: 7px 12px; }\n      .uc-alarm-compact__keypad {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 8px;\n        padding: 10px 4px 8px;\n      }\n      .uc-alarm-compact__row { display: flex; align-items: center; gap: 8px; }\n      .uc-alarm-icon-compact {\n        flex-shrink: 0;\n        width: 26px; height: 26px;\n        border-radius: 50%;\n        background: color-mix(in srgb, var(--alarm-color) 10%, transparent);\n        display: flex; align-items: center; justify-content: center;\n      }\n      .uc-alarm-compact-label {\n        flex: 1; min-width: 0;\n        font-size: 0.8125rem; font-weight: 600;\n        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n      }\n      .uc-alarm-compact-btn {\n        flex-shrink: 0;\n        display: flex; align-items: center; gap: 4px;\n        font: inherit; font-size: 0.75rem; font-weight: 700;\n        padding: 5px 12px; border-radius: 999px;\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--divider-color) 60%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 6%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--primary-text-color);\n        transition: background 0.12s;\n      }\n      .uc-alarm-compact-btn:disabled { opacity: 0.38; cursor: not-allowed; }\n      .uc-alarm-compact-btn--disarm {\n        border-color: color-mix(in srgb, var(--success-color, #43a047) 45%, transparent);\n        color: var(--success-color, #43a047);\n      }\n\n      /* Triggered wrapper highlight */\n      .uc-alarm-wrapper--triggered {\n        outline: 2px solid color-mix(in srgb, var(--error-color, #db4437) 45%, transparent);\n      }\n\n      @media (prefers-reduced-motion: reduce) {\n        .uc-alarm-ring--triggered { animation: none; }\n      }\n    "}}}};