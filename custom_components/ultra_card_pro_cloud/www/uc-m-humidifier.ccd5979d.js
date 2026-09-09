export const __webpack_esm_ids__=[6929];export const __webpack_esm_modules__={2268(e,i,t){t.d(i,{UltraHumidifierModule:()=>c});var r=t(2618),o=t(7475),n=t(6478),a=t(5147),d=t(8938);t(7921);const s={normal:"mdi:water-percent",eco:"mdi:leaf",away:"mdi:account-arrow-right",boost:"mdi:rocket-launch",comfort:"mdi:sofa",home:"mdi:home",sleep:"mdi:sleep",auto:"mdi:refresh-auto",baby:"mdi:baby-carriage"};class c extends o.m{constructor(){super(...arguments),this.metadata={type:"humidifier",title:"Humidifier Control",description:"Control humidifiers and dehumidifiers with target humidity, power, and modes",author:"WJD Designs",version:"1.0.0",icon:"mdi:air-humidifier",category:"interactive",tags:["humidifier","dehumidifier","humidity","control","interactive"]},this._pendingTargets=new Map}createDefault(e){return{id:e||this.generateId("humidifier"),type:"humidifier",entity:"",name:"",icon:"",show_name:!0,show_current_humidity:!0,show_target_slider:!0,show_modes:!0,show_power_button:!0,active_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderActionsTab(e,i,t,r){return a.A.render(e,i,e=>r(e))}renderOtherTab(e,i,t,r){return d.X.render(e,i,e=>r(e))}renderGeneralTab(e,i,t,o){var a;const d=e,s=(null===(a=null==i?void 0:i.locale)||void 0===a?void 0:a.language)||"en";return r.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,n.kg)("editor.humidifier.entity_section",s,"Entity"),(0,n.kg)("editor.humidifier.entity_section_desc",s,"Choose the humidifier to control."),[{title:(0,n.kg)("editor.humidifier.entity",s,"Entity"),description:(0,n.kg)("editor.humidifier.entity_desc",s,"A humidifier or dehumidifier entity."),hass:i,data:{entity:d.entity||""},schema:[{name:"entity",selector:{entity:{domain:"humidifier"}}}],onChange:e=>{var i,t;o({entity:null!==(t=null===(i=e.detail.value)||void 0===i?void 0:i.entity)&&void 0!==t?t:""}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.humidifier.name",s,"Name override"),description:(0,n.kg)("editor.humidifier.name_desc",s,"Leave blank to use the entity friendly name."),hass:i,data:{name:d.name||""},schema:[this.textField("name")],onChange:e=>{var i,t;o({name:null!==(t=null===(i=e.detail.value)||void 0===i?void 0:i.name)&&void 0!==t?t:""}),this.triggerPreviewUpdate()}}])}
        ${this.renderIconField((0,n.kg)("editor.humidifier.icon",s,"Icon override"),(0,n.kg)("editor.humidifier.icon_desc",s,"Leave blank to use the entity icon."),i,d.icon||"",e=>{o({icon:e}),this.triggerPreviewUpdate()})}
        ${this.renderSettingsSection((0,n.kg)("editor.humidifier.display_section",s,"Display"),(0,n.kg)("editor.humidifier.display_section_desc",s,"Choose which controls to show."),[{title:(0,n.kg)("editor.humidifier.show_name",s,"Show name"),description:"",hass:i,data:{show_name:!1!==d.show_name},schema:[this.booleanField("show_name")],onChange:e=>{o({show_name:e.detail.value.show_name}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.humidifier.show_current",s,"Show current humidity"),description:(0,n.kg)("editor.humidifier.show_current_desc",s,"Large reading when the device reports it."),hass:i,data:{show_current_humidity:!1!==d.show_current_humidity},schema:[this.booleanField("show_current_humidity")],onChange:e=>{o({show_current_humidity:e.detail.value.show_current_humidity}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.humidifier.show_slider",s,"Show target slider"),description:"",hass:i,data:{show_target_slider:!1!==d.show_target_slider},schema:[this.booleanField("show_target_slider")],onChange:e=>{o({show_target_slider:e.detail.value.show_target_slider}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.humidifier.show_modes",s,"Show modes"),description:(0,n.kg)("editor.humidifier.show_modes_desc",s,"Mode buttons when the device supports them."),hass:i,data:{show_modes:!1!==d.show_modes},schema:[this.booleanField("show_modes")],onChange:e=>{o({show_modes:e.detail.value.show_modes}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.humidifier.show_power",s,"Show power button"),description:"",hass:i,data:{show_power_button:!1!==d.show_power_button},schema:[this.booleanField("show_power_button")],onChange:e=>{o({show_power_button:e.detail.value.show_power_button}),this.triggerPreviewUpdate()}}])}
        ${this.renderColorField((0,n.kg)("editor.humidifier.active_color",s,"Active color"),(0,n.kg)("editor.humidifier.active_color_desc",s,"Accent used when the device is on."),i,d.active_color||"","var(--primary-color)",e=>{o({active_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.humidifier.text_color",s,"Text color"),"",i,d.text_color||"","var(--primary-text-color)",e=>{o({text_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.humidifier.card_bg",s,"Card background"),"",i,d.card_background_color||"","var(--card-background-color)",e=>{o({card_background_color:e}),this.triggerPreviewUpdate()})}
      </div>
    `}renderPreview(e,i,t,o){var a,d,c;const l=e,h=(null===(a=null==i?void 0:i.locale)||void 0===a?void 0:a.language)||"en",u=this.resolveEntity(l.entity,t)||l.entity;if(!u||!(null==i?void 0:i.states[u]))return this.renderGradientErrorState((0,n.kg)("editor.humidifier.config_needed",h,"Select a humidifier"),(0,n.kg)("editor.humidifier.config_needed_desc",h,"Choose an entity in the General tab"),"mdi:air-humidifier");const m=i.states[u],p=m.attributes||{},g="on"===m.state,_="unavailable"===m.state||"unknown"===m.state,y=(null===(d=l.name)||void 0===d?void 0:d.trim())||p.friendly_name||u,v=l.icon||p.icon||"mdi:air-humidifier",w=l.active_color||"var(--primary-color)",f=l.text_color||"var(--primary-text-color)",b=l.secondary_text_color||"var(--secondary-text-color)",x=l.card_background_color||"var(--uc-pane-bg, var(--card-background-color))",$=g?w:b,k="number"==typeof p.min_humidity?p.min_humidity:0,S="number"==typeof p.max_humidity?p.max_humidity:100,C="number"==typeof p.humidity?p.humidity:void 0,P=this._pendingTargets.get(u),U=P&&Date.now()-P.ts<5e3&&P.value!==C?P.value:C;P&&(P.value===C||Date.now()-P.ts>=5e3)&&this._pendingTargets.delete(u);const q="number"==typeof p.current_humidity?p.current_humidity:void 0,z=Array.isArray(p.available_modes)?p.available_modes:[],D=p.mode,F=p.action,A=this.buildStyleString(this.buildDesignStyles(e,i)),T=this.getHoverEffectClass(e),M=this.createGestureHandlers(l.id,{tap_action:(null===(c=l.tap_action)||void 0===c?void 0:c.action)?Object.assign(Object.assign({},l.tap_action),{entity:u}):{action:"more-info",entity:u},hold_action:l.hold_action,double_tap_action:l.double_tap_action,entity:u,module:l},i,t,[".uc-hum-ctl"]),L=_?(0,n.kg)("editor.humidifier.unavailable",h,"Unavailable"):"humidifying"===F?(0,n.kg)("editor.humidifier.humidifying",h,"Humidifying"):"drying"===F?(0,n.kg)("editor.humidifier.drying",h,"Drying"):g?(0,n.kg)("editor.humidifier.on",h,"On"):(0,n.kg)("editor.humidifier.off",h,"Off");return r.qy`
      <div
        class="uc-humidifier-wrapper ${T}"
        data-uc-role="pane"
        style="padding:16px;border-radius:var(--uc-r-12, 12px);background:${x};${A}"
        @pointerdown=${M.onPointerDown}
        @pointermove=${M.onPointerMove}
        @pointerup=${M.onPointerUp}
        @pointerleave=${M.onPointerLeave}
        @pointercancel=${M.onPointerCancel}
      >
        ${this.wrapWithAnimation(r.qy`
            <div style="display:flex;align-items:center;gap:10px;">
              <ha-icon
                icon="${v}"
                style="color:${$};--mdc-icon-size:28px;flex-shrink:0;${"humidifying"===F||"drying"===F?"animation:uc-hum-pulse 2s ease-in-out infinite;":""}"
              ></ha-icon>
              <div style="flex:1;min-width:0;">
                ${!1!==l.show_name?r.qy`<div
                      style="color:${f};font-weight:600;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                    >
                      ${y}
                    </div>`:r.s6}
                <div style="color:${$};font-size:12px;font-weight:500;">
                  ${L}${D&&g?` · ${D}`:""}
                </div>
              </div>
              ${!1!==l.show_current_humidity&&void 0!==q?r.qy`<div style="text-align:right;flex-shrink:0;">
                    <span style="color:${f};font-size:24px;font-weight:700;">${Math.round(q)}</span>
                    <span style="color:${b};font-size:13px;">%</span>
                  </div>`:r.s6}
              ${!1!==l.show_power_button?r.qy`
                    <button
                      class="uc-hum-ctl"
                      style="flex-shrink:0;width:40px;height:40px;border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;background:${g?w:"rgba(127,127,127,0.15)"};color:${g?"var(--text-primary-color,#fff)":b};"
                      ?disabled=${_}
                      title=${(0,n.kg)("editor.humidifier.toggle_power",h,"Toggle power")}
                      @click=${e=>{e.stopPropagation(),i.callService("humidifier",g?"turn_off":"turn_on",{entity_id:u})}}
                    >
                      <ha-icon icon="mdi:power" style="--mdc-icon-size:20px;"></ha-icon>
                    </button>
                  `:r.s6}
            </div>

            ${!1!==l.show_target_slider&&void 0!==U?r.qy`
                  <div class="uc-hum-ctl" style="margin-top:14px;">
                    <div
                      style="display:flex;justify-content:space-between;font-size:12px;color:${b};margin-bottom:4px;"
                    >
                      <span>${(0,n.kg)("editor.humidifier.target",h,"Target humidity")}</span>
                      <span style="color:${f};font-weight:600;">${Math.round(U)}%</span>
                    </div>
                    <input
                      type="range"
                      class="uc-hum-slider"
                      style="--uc-hum-accent:${g?w:"rgba(127,127,127,0.5)"};"
                      min=${String(k)}
                      max=${String(S)}
                      step="1"
                      .value=${String(Math.round(U))}
                      ?disabled=${_||!g}
                      @click=${e=>e.stopPropagation()}
                      @change=${e=>{e.stopPropagation();const t=Number(e.target.value);this._pendingTargets.set(u,{value:t,ts:Date.now()}),i.callService("humidifier","set_humidity",{entity_id:u,humidity:t})}}
                    />
                  </div>
                `:r.s6}

            ${!1!==l.show_modes&&z.length>0?r.qy`
                  <div class="uc-hum-ctl" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:12px;">
                    ${z.map(e=>{const t=e===D&&g;return r.qy`
                        <button
                          style="display:inline-flex;align-items:center;gap:5px;padding:6px 12px;border-radius:var(--uc-r-16, 16px);border:1px solid ${t?w:"var(--divider-color)"};background:${t?`${this._cssColorWithAlpha(w)}`:"transparent"};color:${t?w:b};font-size:12px;font-weight:600;cursor:pointer;text-transform:capitalize;"
                          ?disabled=${_}
                          @click=${t=>{t.stopPropagation(),i.callService("humidifier","set_mode",{entity_id:u,mode:e})}}
                        >
                          ${s[e.toLowerCase()]?r.qy`<ha-icon
                                icon=${s[e.toLowerCase()]}
                                style="--mdc-icon-size:14px;"
                              ></ha-icon>`:r.s6}
                          ${e}
                        </button>
                      `})}
                  </div>
                `:r.s6}
          `,e,i)}
      </div>
    `}_cssColorWithAlpha(e){return e.startsWith("var(")?`color-mix(in srgb, ${e} 14%, transparent)`:`${e}24`}validate(e){const i=[],t=e;return e.id||i.push("Module ID is required"),e.type||i.push("Module type is required"),t.entity||i.push("Select a humidifier entity"),{valid:0===i.length,errors:i}}getStyles(){return`\n      .uc-humidifier-wrapper { box-sizing: border-box; }\n      @keyframes uc-hum-pulse {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.5; }\n      }\n      .uc-hum-slider {\n        width: 100%;\n        height: 6px;\n        -webkit-appearance: none;\n        appearance: none;\n        border-radius: var(--uc-r-4, 4px);\n        background: rgba(127, 127, 127, 0.25);\n        outline: none;\n        cursor: pointer;\n      }\n      .uc-hum-slider::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 18px;\n        height: 18px;\n        border-radius: 50%;\n        background: var(--uc-hum-accent, var(--primary-color));\n        border: 2px solid var(--card-background-color);\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n        cursor: pointer;\n      }\n      .uc-hum-slider::-moz-range-thumb {\n        width: 18px;\n        height: 18px;\n        border-radius: 50%;\n        background: var(--uc-hum-accent, var(--primary-color));\n        border: 2px solid var(--card-background-color);\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n        cursor: pointer;\n      }\n      .uc-hum-slider:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n      }\n      ${o.m.getSliderStyles()}\n    `}}}};