export const __webpack_esm_ids__=[8458];export const __webpack_esm_modules__={2125(e,t,i){i.d(t,{UltraClimateModule:()=>r});var o=i(2618),n=i(6478),a=i(7475);i(7921);class r extends a.m{constructor(){super(...arguments),this.metadata={type:"climate",title:"Climate Control",description:"Interactive circular thermostat control for climate entities",author:"WJD Designs",version:"1.0.0",icon:"mdi:thermostat",category:"interactive",tags:["climate","thermostat","temperature","hvac","heating","cooling","pro"]},this._liveTargetValue=new Map,this._liveTargetLow=new Map,this._liveTargetHigh=new Map,this._lastRenderedEntity=new Map}createDefault(e,t){return{id:e||this.generateId("climate"),type:"climate",entity:"",name:"",show_current_temp:!0,show_target_temp:!0,show_humidity:!0,show_mode_switcher:!0,show_power_button:!0,show_fan_controls:!1,show_preset_modes:!1,show_temp_controls:!0,show_dial:!0,enable_dial_interaction:!0,enable_animations:!0,dial_size:280,dynamic_colors:!0,temperature_unit:"auto",temp_control_size:26,fan_layout:"chips",preset_layout:"chips",humidity_icon:"mdi:water-percent",current_temp_color:"var(--primary-text-color)",target_temp_color:"var(--secondary-text-color)",mode_text_color:"var(--secondary-text-color)",humidity_color:"var(--secondary-text-color)",tap_action:{action:"default"},hold_action:{action:"default"},double_tap_action:{action:"default"}}}renderGeneralTab(e,t,i,a){var r;const l=e,s=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}

      <!-- Entity Configuration (title + entity picker in a single settings-section box) -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.climate.entity_config_title",s,"Entity Configuration")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,n.kg)("editor.climate.entity_config_desc",s,"Select the climate entity to control")}
        </div>
        ${this.renderEntityPickerWithVariables(t,i,"entity",l.entity||"",e=>{a({entity:e}),this.triggerPreviewUpdate()},["climate"],(0,n.kg)("editor.climate.entity",s,"Climate Entity"))}
      </div>

      <!-- Dial & Temperature -->
      ${this.renderSettingsSection("Dial & Temperature","Control the primary dial and temperature stack",[{title:"Show Dial",description:"Display the circular dial and arc",hass:t,data:{show_dial:!1!==l.show_dial},schema:[this.booleanField("show_dial")],onChange:e=>{a({show_dial:e.detail.value.show_dial}),this.triggerPreviewUpdate()}},{title:"Enable HVAC Animation",description:"Display the pulsing background while actively heating or cooling",hass:t,data:{enable_animations:!1!==l.enable_animations},schema:[this.booleanField("enable_animations")],onChange:e=>{a({enable_animations:e.detail.value.enable_animations}),this.triggerPreviewUpdate()}},{title:"Show Current Temperature",description:"Display the current temperature in the dial center",hass:t,data:{show_current_temp:!1!==l.show_current_temp},schema:[this.booleanField("show_current_temp")],onChange:e=>{a({show_current_temp:e.detail.value.show_current_temp}),this.triggerPreviewUpdate()}},{title:"Show Target Temperature",description:"Display the target/set temperature",hass:t,data:{show_target_temp:!1!==l.show_target_temp},schema:[this.booleanField("show_target_temp")],onChange:e=>{a({show_target_temp:e.detail.value.show_target_temp}),this.triggerPreviewUpdate()}},{title:"Show Temperature Controls",description:"Display +/- buttons for temperature adjustment",hass:t,data:{show_temp_controls:!1!==l.show_temp_controls},schema:[this.booleanField("show_temp_controls")],onChange:e=>{a({show_temp_controls:e.detail.value.show_temp_controls}),this.triggerPreviewUpdate()}},{title:"Show Humidity",description:"Display current humidity percentage",hass:t,data:{show_humidity:!1!==l.show_humidity},schema:[this.booleanField("show_humidity")],onChange:e=>{a({show_humidity:e.detail.value.show_humidity}),this.triggerPreviewUpdate()}}])}

      <!-- Control Buttons -->
      ${this.renderSettingsSection("Control Buttons","Toggle the optional buttons below the dial",[{title:"Show Mode Switcher",description:"Display HVAC mode buttons (heat, cool, off, etc.)",hass:t,data:{show_mode_switcher:!1!==l.show_mode_switcher},schema:[this.booleanField("show_mode_switcher")],onChange:e=>{a({show_mode_switcher:e.detail.value.show_mode_switcher}),this.triggerPreviewUpdate()}},{title:"Show Power Toggle",description:"Display the power on/off button",hass:t,data:{show_power_button:!1!==l.show_power_button},schema:[this.booleanField("show_power_button")],onChange:e=>{a({show_power_button:e.detail.value.show_power_button}),this.triggerPreviewUpdate()}},{title:"Show Fan Controls",description:"Display fan mode controls",hass:t,data:{show_fan_controls:l.show_fan_controls||!1},schema:[this.booleanField("show_fan_controls")],onChange:e=>{a({show_fan_controls:e.detail.value.show_fan_controls}),this.triggerPreviewUpdate()}},{title:"Show Preset Modes",description:"Display preset mode controls (home, away, sleep, etc.)",hass:t,data:{show_preset_modes:l.show_preset_modes||!1},schema:[this.booleanField("show_preset_modes")],onChange:e=>{a({show_preset_modes:e.detail.value.show_preset_modes}),this.triggerPreviewUpdate()}}])}

      <!-- Dial Configuration -->
      <!-- Dial Configuration -->
      ${this.renderSliderField("Dial Size","Diameter of the circular dial in pixels (200-400)",l.dial_size||280,280,200,400,10,e=>a({dial_size:e}),"px")}

      ${this.renderSettingsSection("","",[{title:"Temperature Unit",description:"Display unit for temperature (auto-detects from entity)",hass:t,data:{temperature_unit:l.temperature_unit||"auto"},schema:[this.selectField("temperature_unit",[{value:"auto",label:"Auto (from entity)"},{value:"fahrenheit",label:"Fahrenheit (°F)"},{value:"celsius",label:"Celsius (°C)"}])],onChange:e=>{a({temperature_unit:e.detail.value.temperature_unit}),this.triggerPreviewUpdate()}}])}

      ${this.renderSliderField("Control Button Size","Size of the +/- temperature control buttons (24-60px)",l.temp_control_size||26,26,24,60,2,e=>a({temp_control_size:e}),"px")}

      <!-- Colors -->
      <div class="settings-section">
        <div class="section-header">
          <h3 class="section-title">Colors</h3>
          <p class="section-description">Customize colors for different states and elements</p>
        </div>
        <div class="section-content">
          <!-- Dynamic Colors Toggle -->
          <div style="margin-bottom: 16px;">
            <div
              style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;"
            >
              <div
                class="field-title"
                style="font-size: 16px; font-weight: 600; margin: 0; white-space: nowrap;"
              >
                Dynamic Colors
              </div>
              ${this.renderUcForm(t,{dynamic_colors:!1!==l.dynamic_colors},[this.booleanField("dynamic_colors")],e=>{a({dynamic_colors:e.detail.value.dynamic_colors}),this.triggerPreviewUpdate()},!1)}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
            >
              Automatically use reddish-orange for heating and blue for cooling. When disabled, use
              custom colors below.
            </div>
          </div>

          <!-- Conditional Color Pickers -->
          ${!1===l.dynamic_colors?o.qy`
                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 12px;"
                  >
                    Heating Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Dial color when heating is active
                  </div>
                  <ultra-color-picker
                    .value=${l.dial_color_heating||"#ff6b6b"}
                    .defaultValue=${"#ff6b6b"}
                    .hass=${t}
                    @value-changed=${e=>{a({dial_color_heating:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>

                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 12px;"
                  >
                    Cooling Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Dial color when cooling is active
                  </div>
                  <ultra-color-picker
                    .value=${l.dial_color_cooling||"#4dabf7"}
                    .defaultValue=${"#4dabf7"}
                    .hass=${t}
                    @value-changed=${e=>{a({dial_color_cooling:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>

                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 12px;"
                  >
                    Idle Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Dial color when idle (on but not actively heating/cooling)
                  </div>
                  <ultra-color-picker
                    .value=${l.dial_color_idle||"var(--primary-color)"}
                    .defaultValue=${"var(--primary-color)"}
                    .hass=${t}
                    @value-changed=${e=>{a({dial_color_idle:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>

                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 12px;"
                  >
                    Off Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Dial color when HVAC is off
                  </div>
                  <ultra-color-picker
                    .value=${l.dial_color_off||"var(--disabled-text-color)"}
                    .defaultValue=${"var(--disabled-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>{a({dial_color_off:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              `:""}

          <!-- Current Temperature Color (hidden when Dynamic Colors is enabled) -->
          ${!1===l.dynamic_colors?o.qy`
                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 12px;"
                  >
                    Current Temperature Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Color of the large temperature value in the dial center
                  </div>
                  <ultra-color-picker
                    .value=${l.current_temp_color||"var(--primary-text-color)"}
                    .defaultValue=${"var(--primary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>{a({current_temp_color:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              `:""}

          <!-- Target Temperature Color (hidden when Dynamic Colors is enabled) -->
          ${!1===l.dynamic_colors?o.qy`
                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 12px;"
                  >
                    Target Temperature Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Color of the set temperature row
                  </div>
                  <ultra-color-picker
                    .value=${l.target_temp_color||"var(--secondary-text-color)"}
                    .defaultValue=${"var(--secondary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>{a({target_temp_color:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              `:""}

          <!-- Preset Text Color (hidden when Dynamic Colors is enabled) -->
          ${!1===l.dynamic_colors?o.qy`
                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 12px;"
                  >
                    Preset Text Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Color for preset mode labels in the top display
                  </div>
                  <ultra-color-picker
                    .value=${l.mode_text_color||"var(--secondary-text-color)"}
                    .defaultValue=${"var(--secondary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>{a({mode_text_color:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              `:""}

          <!-- Humidity Color (hidden when Dynamic Colors is enabled) -->
          ${!1===l.dynamic_colors?o.qy`
                <div style="margin-bottom: 0;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 12px;"
                  >
                    Humidity Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Color of the humidity label and value
                  </div>
                  <ultra-color-picker
                    .value=${l.humidity_color||"var(--secondary-text-color)"}
                    .defaultValue=${"var(--secondary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>{a({humidity_color:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              `:""}
        </div>
      </div>
    `}renderPreview(e,t,i,a){var r,l,s,c,d,p,m,u,h,v,g,f,y,_,b,w;const x=e,$=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";if(!x.entity)return this.renderGradientErrorState((0,n.kg)("editor.climate.error_no_entity",$,"No Climate Entity"),(0,n.kg)("editor.climate.error_no_entity_desc",$,"Select a climate entity in the General tab"));const C=this.resolveEntity(x.entity,i)||x.entity,k=t.states[C];if(!k)return this.renderGradientErrorState((0,n.kg)("editor.climate.error_not_found",$,"Entity Not Found"),`Climate entity "${C}" not found`);const z=k.attributes.current_temperature,T=k.attributes.temperature,S=k.attributes.target_temp_high,P=k.attributes.target_temp_low,q="°C"===(null===(s=null===(l=t.config)||void 0===l?void 0:l.unit_system)||void 0===s?void 0:s.temperature),D=null!==(c=k.attributes.min_temp)&&void 0!==c?c:q?7:44.6,U=null!==(d=k.attributes.max_temp)&&void 0!==d?d:q?35:95,M=x.temp_step_override||k.attributes.target_temp_step||.5,F=k.attributes.current_humidity,L=null!=F&&!isNaN(Number(F)),E=L?Number(F):void 0,N=k.state,H=k.attributes.hvac_action,A=k.attributes.hvac_modes||[],V=k.attributes.fan_mode,I=null!=V,j=I?V:void 0,B=k.attributes.fan_modes,W=null!=B&&Array.isArray(B)&&B.length>0?B:[],G=k.attributes.preset_mode,R=null!=G,O=R?G:void 0,Y=k.attributes.preset_modes,J=null!=Y&&Array.isArray(Y)&&Y.length>0?Y:[],K=x.dial_size||280,Q=!1!==x.show_dial;let X="°F";if("fahrenheit"===x.temperature_unit)X="°F";else if("celsius"===x.temperature_unit)X="°C";else{const e=k.attributes.unit_of_measurement,t=k.attributes.temperature_unit;t?X="C"===t?"°C":"°F":e&&(X=e.includes("C")?"°C":"°F")}let Z=x.dial_color_idle||"var(--primary-color)";Z=!1!==x.dynamic_colors?"off"===N?"#6b7280":"heating"===H||"heat"===N?"#ff4500":"cooling"===H||"cool"===N?"#1e90ff":"heat_cool"===N||"auto"===N?"heating"===H?"#ff4500":"cooling"===H?"#1e90ff":"#6366f1":"#6366f1":"off"===N?x.dial_color_off||"var(--disabled-text-color)":"heating"===H||"heat"===N?x.dial_color_heating||"#ff6b6b":"cooling"===H||"cool"===N?x.dial_color_cooling||"#4dabf7":x.dial_color_idle||"var(--primary-color)";const ee=x.target_temp_color||"var(--secondary-text-color)",te=x.id;this._lastRenderedEntity.get(te)!==C&&(this._liveTargetValue.delete(te),this._liveTargetLow.delete(te),this._liveTargetHigh.delete(te),this._lastRenderedEntity.set(te,C));const ie=Q&&"heat_cool"===N&&void 0!==P&&void 0!==S;ie||(this._liveTargetLow.delete(te),this._liveTargetHigh.delete(te));const oe=null!==(p={heat:"start",cool:"end",heat_cool:"full",auto:"full",dry:"full",fan_only:"full",off:"full"}[N])&&void 0!==p?p:"full",ne=null!==(m=null!=T?T:z)&&void 0!==m?m:D,ae=null!==(h=null!==(u=this._liveTargetValue.get(te))&&void 0!==u?u:ne)&&void 0!==h?h:D,re=null!==(f=null!==(g=null!==(v=this._liveTargetLow.get(te))&&void 0!==v?v:P)&&void 0!==g?g:ne)&&void 0!==f?f:D,le=null!==(b=null!==(_=null!==(y=this._liveTargetHigh.get(te))&&void 0!==y?y:S)&&void 0!==_?_:ne)&&void 0!==b?b:U,se=!1!==x.dynamic_colors?"#ff4500":x.dial_color_heating||"#ff6b6b",ce=!1!==x.dynamic_colors?"#1e90ff":x.dial_color_cooling||"#4dabf7",de=[`--control-circular-slider-color: ${Z}`,"--control-circular-slider-background: rgba(var(--rgb-primary-text-color), 0.12)","--control-circular-slider-background-opacity: 0.5"];ie&&(de.push(`--control-circular-slider-low-color: ${se}`),de.push(`--control-circular-slider-high-color: ${ce}`));const pe=de.join("; "),me=!Q||!1===x.enable_dial_interaction,ue="off"===N||!Q,he=e=>e?e.split("_").filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):"None",ve=he(O),ge=e=>{me||("number"==typeof e.detail.value?this._liveTargetValue.set(te,e.detail.value):this._liveTargetValue.delete(te))},fe=async e=>{var i;if(me)return;const o="number"==typeof e.detail.value?e.detail.value:null!==(i=this._liveTargetValue.get(te))&&void 0!==i?i:T;this._liveTargetValue.delete(te),this.triggerPreviewUpdate(!0),void 0===o||Number.isNaN(o)||await this.callClimateService("set_temperature",C,{temperature:o},t)},ye=e=>({heat:"mdi:fire",cool:"mdi:snowflake",heat_cool:"mdi:thermostat-auto",auto:"mdi:thermostat-auto",off:"mdi:power",dry:"mdi:water-percent",fan_only:"mdi:fan"}[e]||"mdi:thermostat"),_e=null!=T,be=null!=P&&null!=S,we=_e?T<U:be&&S<U,xe=_e?T>D:be&&P>D,$e=async e=>{if(e.stopPropagation(),_e){const e=Math.min(U,T+M);await this.callClimateService("set_temperature",C,{temperature:e},t)}else if(be){const e=Math.min(U,S+M);await this.callClimateService("set_temperature",C,{target_temp_low:P,target_temp_high:e},t)}},Ce=async e=>{if(e.stopPropagation(),_e){const e=Math.max(D,T-M);await this.callClimateService("set_temperature",C,{temperature:e},t)}else if(be){const e=Math.max(D,P-M);await this.callClimateService("set_temperature",C,{target_temp_low:e,target_temp_high:S},t)}},ke=async e=>{await this.callClimateService("set_hvac_mode",C,{hvac_mode:e},t)},ze=async e=>{await this.callClimateService("set_fan_mode",C,{fan_mode:e},t)},Te=async e=>{await this.callClimateService("set_preset_mode",C,{preset_mode:e},t)},Se=(null===(w=x.design)||void 0===w||w.hover_effect,this.getHoverEffectClass(e)),Pe=this.buildStyleString(this.buildDesignStyles(e,t));return this.wrapWithAnimation(o.qy`
      <style>
        ${this.getStyles()}
      </style>

      <div
        class="climate-module-container ${Se}"
        style="${Pe}"
        @click=${e=>{const t=e.target;t.closest(".climate-mode-popup")||t.closest(".climate-fan-popup")||t.closest(".climate-preset-popup")||t.closest(".climate-info-popup")||t.closest(".climate-bottom-icon")||t.closest(".climate-preset-display")||e.currentTarget.querySelectorAll(".climate-mode-popup.show, .climate-fan-popup.show, .climate-preset-popup.show, .climate-info-popup.show").forEach(e=>e.classList.remove("show"))}}
      >
        <!-- Circular Dial -->
        <div
          class="climate-dial-wrapper"
          style="--dial-color: ${Z}; --dial-size: ${K}px;"
        >
          <!-- Pulse Circles (shown when heating/cooling) - Background layer -->
          ${!1===x.enable_animations||"heating"!==H&&"cooling"!==H?"":o.qy`
                <div class="climate-pulse-background" style="--pulse-color: ${Z};">
                  <div class="climate-pulse-circle"></div>
                  <div class="climate-pulse-circle"></div>
                  <div class="climate-pulse-circle"></div>
                  <div class="climate-pulse-circle"></div>
                  <!-- Center mask to hide animation in the middle -->
                  <div class="climate-pulse-mask"></div>
                </div>
              `}
          ${Q?ie?o.qy`
                  <ha-control-circular-slider
                    class="climate-ha-slider"
                    style="${pe}"
                    .dual=${!0}
                    .mode=${oe}
                    .low=${re}
                    .high=${le}
                    .current=${z}
                    .min=${D}
                    .max=${U}
                    .step=${M}
                    .inactive=${ue}
                    .disabled=${me}
                    .readonly=${me}
                    @low-changing=${e=>{ie&&!me&&("number"==typeof e.detail.value?this._liveTargetLow.set(te,e.detail.value):this._liveTargetLow.delete(te))}}
                    @low-changed=${async e=>{var i,o,n;if(!ie||me)return;const a="number"==typeof e.detail.value?e.detail.value:null!==(i=this._liveTargetLow.get(te))&&void 0!==i?i:P,r=null!==(n=null!==(o=this._liveTargetHigh.get(te))&&void 0!==o?o:S)&&void 0!==n?n:a;this._liveTargetLow.delete(te),this.triggerPreviewUpdate(!0),void 0===a||Number.isNaN(a)||void 0===r||Number.isNaN(r)||await this.callClimateService("set_temperature",C,{target_temp_low:a,target_temp_high:r},t)}}
                    @high-changing=${e=>{ie&&!me&&("number"==typeof e.detail.value?this._liveTargetHigh.set(te,e.detail.value):this._liveTargetHigh.delete(te))}}
                    @high-changed=${async e=>{var i,o,n;if(!ie||me)return;const a="number"==typeof e.detail.value?e.detail.value:null!==(i=this._liveTargetHigh.get(te))&&void 0!==i?i:S,r=null!==(n=null!==(o=this._liveTargetLow.get(te))&&void 0!==o?o:P)&&void 0!==n?n:a;this._liveTargetHigh.delete(te),this.triggerPreviewUpdate(!0),void 0===a||Number.isNaN(a)||void 0===r||Number.isNaN(r)||await this.callClimateService("set_temperature",C,{target_temp_low:r,target_temp_high:a},t)}}
                    @value-changing=${ge}
                    @value-changed=${fe}
                  ></ha-control-circular-slider>
                `:o.qy`
                  <ha-control-circular-slider
                    class="climate-ha-slider"
                    style="${pe}"
                    .mode=${oe}
                    .value=${ae}
                    .current=${z}
                    .min=${D}
                    .max=${U}
                    .step=${M}
                    .inactive=${ue}
                    .disabled=${me}
                    .readonly=${me}
                    @value-changing=${ge}
                    @value-changed=${fe}
                  ></ha-control-circular-slider>
                `:""}

          <!-- Center content -->
          <div class="climate-dial-center">
            <!-- Items wrapper for centering when some are disabled -->
            <div class="climate-dial-items">
              <!-- Preset Display -->
              ${x.show_preset_modes&&R&&J.length>0?o.qy`
                    <div
                      class="climate-preset-display"
                      style="color: ${!1===x.dynamic_colors&&x.mode_text_color||"var(--secondary-text-color)"};"
                      @click=${e=>{e.stopPropagation();const t=e.currentTarget.closest(".climate-dial-wrapper");null==t||t.querySelectorAll(".climate-mode-popup.show, .climate-fan-popup.show").forEach(e=>e.classList.remove("show"));const i=null==t?void 0:t.querySelector(".climate-preset-popup");i&&i.classList.toggle("show")}}
                      title="Current preset"
                    >
                      <span class="climate-preset-value">${ve}</span>
                    </div>
                  `:""}

              <!-- Current Temperature -->
              ${!1!==x.show_current_temp&&void 0!==z?o.qy`
                    <div
                      class="climate-current-temp"
                      style="color: ${x.current_temp_color||"var(--primary-text-color)"}; cursor: pointer;"
                      @click=${e=>{e.stopPropagation();const t=e.currentTarget.closest(".climate-dial-wrapper");null==t||t.querySelectorAll(".climate-info-popup.show").forEach(e=>e.classList.remove("show"));const i=null==t?void 0:t.querySelector(".climate-temp-info-popup");i&&i.classList.toggle("show")}}
                      title="Tap for temperature details"
                    >
                      ${Math.round(z)}${X}
                    </div>
                  `:""}

              <!-- Target Temperature -->
              ${(()=>{if(!1===x.show_target_temp&&!1===x.show_temp_controls||!1===x.show_target_temp&&"off"===N)return"";const e=x.temp_control_size||26,t=!1!==x.show_temp_controls&&"off"!==N,i=e-6,a=Math.max(12,Math.floor(.5*i));return o.qy`
                  <div class="climate-target-stack" style="color: ${ee}">
                    <div class="climate-target-row">
                      ${t?o.qy`
                            <button
                              class="climate-control-btn-inline"
                              style="width: ${i}px; height: ${i}px; --icon-size: ${a}px; border-color: ${Z}; color: ${Z};"
                              @click=${Ce}
                              ?disabled=${!xe}
                              aria-label=${(0,n.kg)("editor.climate.decrease_temp",$,"Decrease target temperature")}
                            >
                              <ha-icon icon="mdi:minus"></ha-icon>
                            </button>
                          `:""}
                      ${!1!==x.show_target_temp?o.qy`
                            <div
                              class="climate-target-temp"
                              @click=${e=>{e.stopPropagation();const t=e.currentTarget.closest(".climate-dial-wrapper");null==t||t.querySelectorAll(".climate-info-popup.show").forEach(e=>e.classList.remove("show"));const i=null==t?void 0:t.querySelector(".climate-target-info-popup");i&&i.classList.toggle("show")}}
                              title="Tap for target temperature details"
                              style="cursor: pointer;"
                            >
                              ${ie&&void 0!==re&&void 0!==le?o.qy`${Math.round(re)}-${Math.round(le)}${X}`:void 0!==ae?o.qy`${Math.round(ae)}${X}`:""}
                            </div>
                          `:""}
                      ${t?o.qy`
                            <button
                              class="climate-control-btn-inline"
                              style="width: ${i}px; height: ${i}px; --icon-size: ${a}px; border-color: ${Z}; color: ${Z};"
                              @click=${$e}
                              ?disabled=${!we}
                              aria-label=${(0,n.kg)("editor.climate.increase_temp",$,"Increase target temperature")}
                            >
                              <ha-icon icon="mdi:plus"></ha-icon>
                            </button>
                          `:""}
                    </div>
                  </div>
                `})()}

              <!-- Humidity Display (Below target temp) -->
              ${x.show_humidity&&L&&void 0!==E?o.qy`
                    <div
                      class="climate-humidity-row"
                      style="color: ${!1===x.dynamic_colors&&x.humidity_color||"var(--secondary-text-color)"}; cursor: pointer;"
                      @click=${e=>{e.stopPropagation();const t=e.currentTarget.closest(".climate-dial-wrapper");null==t||t.querySelectorAll(".climate-info-popup.show").forEach(e=>e.classList.remove("show"));const i=null==t?void 0:t.querySelector(".climate-humidity-info-popup");i&&i.classList.toggle("show")}}
                      title="Tap for humidity details"
                    >
                      <span class="climate-humidity-label">Humidity:</span>
                      <span class="climate-humidity-value">${Math.round(E)}%</span>
                    </div>
                  `:""}

              <!-- Bottom Control Icons (power, mode, fan) -->
            ${(()=>{const e=(!1!==x.show_mode_switcher?1:0)+(!1!==x.show_power_button?1:0)+(x.show_fan_controls&&W.length>0?1:0);return o.qy`
                <div class="climate-bottom-controls climate-bottom-controls-${e}">
                  <!-- Mode Icon -->
                  ${!1!==x.show_mode_switcher?o.qy`
                        <div
                          class="climate-bottom-icon ${"off"!==N?"active":""}"
                          style="${"off"!==N?`background-color: ${Z}; border-color: ${Z};`:""}"
                          @click=${e=>{e.stopPropagation();const t=e.currentTarget.closest(".climate-dial-wrapper");null==t||t.querySelectorAll(".climate-fan-popup.show, .climate-preset-popup.show").forEach(e=>e.classList.remove("show"));const i=null==t?void 0:t.querySelector(".climate-mode-popup");i&&i.classList.toggle("show")}}
                          title="${N.replace("_"," ").toUpperCase()}"
                        >
                          <ha-icon icon="${ye(N)}"></ha-icon>
                        </div>
                      `:""}

                  <!-- Power Icon -->
                  ${!1!==x.show_power_button?o.qy`
                        <div
                          class="climate-bottom-icon ${"off"===N?"power-off":"active"}"
                          style="${"off"!==N?`background-color: ${Z}; border-color: ${Z};`:""}"
                          @click=${async e=>{e.stopPropagation();const t=A.find(e=>"off"!==e)||"heat",i="off"===N?t:"off";await ke(i)}}
                          title="Power ${"off"===N?"On":"Off"}"
                        >
                          <ha-icon icon="mdi:power"></ha-icon>
                        </div>
                      `:""}

                  <!-- Fan Icon -->
                  ${x.show_fan_controls&&I&&W.length>0?o.qy`
                        <div
                          class="climate-bottom-icon ${"on"===j||"auto"===j?"active":""}"
                          style="${"on"===j||"auto"===j?`background-color: ${Z}; border-color: ${Z};`:""}"
                          @click=${e=>{e.stopPropagation();const t=e.currentTarget.closest(".climate-dial-wrapper");null==t||t.querySelectorAll(".climate-mode-popup.show, .climate-preset-popup.show").forEach(e=>e.classList.remove("show"));const i=null==t?void 0:t.querySelector(".climate-fan-popup");i&&i.classList.toggle("show")}}
                          title="Fan: ${(j||"auto").replace("_"," ").toUpperCase()}"
                        >
                          <ha-icon icon="mdi:fan"></ha-icon>
                        </div>
                      `:""}
                </div>
              `})()}
            </div>

            <!-- Mode Popup (hidden by default, shows when mode icon clicked) -->
            ${!1!==x.show_mode_switcher&&A.length>0?o.qy`
                  <div class="climate-mode-popup">
                    <div class="climate-mode-popup-content" data-uc-role="pane">
                      ${A.map(e=>o.qy`
                          <button
                            class="climate-mode-popup-btn ${e===N?"active":""}"
                            @click=${t=>{t.stopPropagation(),ke(e);const i=t.currentTarget.closest(".climate-mode-popup");i&&i.classList.remove("show")}}
                          >
                            <ha-icon icon="${ye(e)}"></ha-icon>
                            <span>${e.replace("_"," ")}</span>
                          </button>
                        `)}
                    </div>
                  </div>
                `:""}

            <!-- Fan Popup (hidden by default, shows when fan icon clicked) -->
            ${x.show_fan_controls&&I&&W.length>0?o.qy`
                  <div class="climate-fan-popup climate-mode-popup">
                    <div class="climate-mode-popup-content" data-uc-role="pane">
                      ${W.map(e=>o.qy`
                          <button
                            class="climate-mode-popup-btn ${e===j?"active":""}"
                            @click=${t=>{t.stopPropagation(),ze(e);const i=t.currentTarget.closest(".climate-fan-popup");i&&i.classList.remove("show")}}
                          >
                            <ha-icon icon="mdi:fan"></ha-icon>
                            <span>${e.replace("_"," ").toUpperCase()}</span>
                          </button>
                        `)}
                    </div>
                  </div>
                `:""}
            ${x.show_preset_modes&&R&&J.length>0?o.qy`
                  <div class="climate-preset-popup climate-mode-popup">
                    <div class="climate-mode-popup-content" data-uc-role="pane">
                      ${J.map(e=>o.qy`
                          <button
                            class="climate-mode-popup-btn ${e===O?"active":""}"
                            @click=${t=>{t.stopPropagation(),Te(e);const i=t.currentTarget.closest(".climate-preset-popup");i&&i.classList.remove("show")}}
                          >
                            <span>${he(e)}</span>
                          </button>
                        `)}
                    </div>
                  </div>
                `:""}

            <!-- Temperature Info Popup -->
            <div class="climate-info-popup climate-temp-info-popup">
              <div class="climate-info-popup-content" data-uc-role="pane">
                <div class="climate-info-popup-title">Current Temperature</div>
                <div class="climate-info-popup-value">${Math.round(z)}${X}</div>
                <div class="climate-info-popup-detail">Min: ${Math.round(D)}${X}</div>
                <div class="climate-info-popup-detail">Max: ${Math.round(U)}${X}</div>
              </div>
            </div>

            <!-- Target Temperature Info Popup -->
            <div class="climate-info-popup climate-target-info-popup">
              <div class="climate-info-popup-content" data-uc-role="pane">
                <div class="climate-info-popup-title">Target Temperature</div>
                <div class="climate-info-popup-value">
                  ${ie&&void 0!==re&&void 0!==le?o.qy`${Math.round(re)}-${Math.round(le)}${X}`:void 0!==ae?o.qy`${Math.round(ae)}${X}`:"N/A"}
                </div>
                <div class="climate-info-popup-detail">Step: ${M}${X}</div>
              </div>
            </div>

            <!-- Humidity Info Popup -->
            ${L&&void 0!==E?o.qy`
                  <div class="climate-info-popup climate-humidity-info-popup">
                    <div class="climate-info-popup-content" data-uc-role="pane">
                      <div class="climate-info-popup-title">Humidity</div>
                      <div class="climate-info-popup-value">${Math.round(E)}%</div>
                      <div class="climate-info-popup-detail">Relative Humidity</div>
                    </div>
                  </div>
                `:""}
          </div>
        </div>
      </div>
    `,e,t)}validate(e){const t=e,i=[...super.validate(e).errors];return t.entity&&""!==t.entity.trim()||i.push("Climate entity is required"),!t.entity||t.entity.startsWith("$")||t.entity.startsWith("climate.")||i.push("Entity must be a climate domain entity (climate.*)"),t.dial_size&&(t.dial_size<200||t.dial_size>400)&&i.push("Dial size must be between 200 and 400 pixels"),{valid:0===i.length,errors:i}}async callClimateService(e,t,i,o){try{await o.callService("climate",e,Object.assign({entity_id:t},i))}catch(t){console.error(`Failed to call climate.${e}:`,t)}}getStyles(){return`\n      ${a.m.getSliderStyles()}\n      /* Climate Module Container */\n      .climate-module-container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 16px;\n        padding: 16px;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* Info Section */\n      .climate-info-top,\n      .climate-info-bottom {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        width: 100%;\n        max-width: 320px;\n      }\n\n      .climate-mode-display,\n      .climate-humidity {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 14px;\n        font-weight: 500;\n        color: var(--primary-text-color);\n      }\n\n      .climate-mode-display ha-icon,\n      .climate-humidity ha-icon {\n        --mdc-icon-size: 20px;\n        color: var(--primary-color);\n      }\n\n      /* Dial Wrapper */\n      .climate-dial-wrapper {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: var(--dial-size, 280px);\n        height: var(--dial-size, 280px);\n        z-index: 1;\n      }\n \n      .climate-ha-slider {\n        width: 100%;\n        height: auto;\n        display: block;\n        z-index: 1;\n        position: relative;\n      }\n\n      /* Dial Center Content */\n      .climate-dial-center {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        pointer-events: none;\n        width: 80%;\n        height: 80%;\n        z-index: 10;\n      }\n\n      /* Enable pointer events on interactive elements inside dial center */\n      .climate-dial-center .climate-preset-display,\n      .climate-dial-center .climate-current-temp,\n      .climate-dial-center .climate-target-stack,\n      .climate-dial-center .climate-humidity-row,\n      .climate-dial-center .climate-bottom-controls,\n      .climate-dial-center .climate-mode-popup,\n      .climate-dial-center .climate-fan-popup,\n      .climate-dial-center .climate-preset-popup,\n      .climate-dial-center .climate-info-popup {\n        pointer-events: auto;\n      }\n\n      /* Dial items wrapper to keep items centered when some are disabled */\n      .climate-dial-items {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 0;\n        padding-top: 20px;\n        width: 100%;\n        height: 100%;\n      }\n\n      .climate-mode-indicator {\n        position: absolute;\n        top: 2%;\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0.5px;\n        cursor: pointer;\n        padding: 4px 8px;\n        border-radius: var(--uc-r-4, 4px);\n        transition: all 0.2s ease;\n        pointer-events: auto;\n      }\n\n      .climate-mode-indicator:hover {\n        background: rgba(var(--rgb-primary-color), 0.1);\n      }\n\n      .climate-humidity-row {\n        position: static;\n        transform: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        font-size: 11px;\n        font-weight: 500;\n        opacity: 0.7;\n        text-align: center;\n        flex: 0 0 auto;\n        margin-top: 8px;\n      }\n\n      .climate-humidity-label {\n        text-transform: uppercase;\n        letter-spacing: 0.6px;\n        font-weight: 700;\n        opacity: 0.8;\n      }\n\n      .climate-humidity-value {\n        font-weight: 700;\n      }\n\n      .climate-current-temp {\n        position: static;\n        transform: none;\n        font-size: 56px;\n        font-weight: 700;\n        line-height: 1;\n        transition: font-size 0.3s ease;\n        flex: 0 0 auto;\n      }\n\n      .climate-target-temp {\n        position: static;\n        transform: none;\n        font-size: 14px;\n        font-weight: 500;\n        opacity: 0.8;\n        text-align: center;\n      }\n\n      .climate-target-stack {\n        position: static;\n        transform: none;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 4px;\n        pointer-events: auto;\n        flex: 0 0 auto;\n        padding-top: 4px;\n      }\n \n       .climate-target-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n       }\n \n       /* Bottom Control Icons (power, mode, fan) */\n       .climate-bottom-controls {\n         position: static;\n         transform: none;\n         display: flex;\n         gap: 9px;\n         align-items: center;\n         justify-content: center;\n         pointer-events: auto;\n         margin-top: 10px;\n         flex: 0 0 auto;\n       }\n\n       /* Center button groups based on count */\n       .climate-bottom-controls-1 {\n         width: 50px;\n       }\n\n       .climate-bottom-controls-2 {\n         width: 100px;\n       }\n\n       .climate-bottom-controls-3 {\n         width: 150px;\n       }\n \n       .climate-preset-display {\n         position: static;\n         transform: none;\n         display: inline-flex;\n         align-items: center;\n         padding: 1px 10px;\n         border-radius: 999px;\n         border: none;\n         background: rgba(var(--rgb-card-background-color, 255, 255, 255), 0.18);\n         font-size: 12px;\n         font-weight: 600;\n         letter-spacing: 0.3px;\n         cursor: pointer;\n         pointer-events: auto;\n         transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;\n         flex: 0 0 auto;\n         margin-bottom: 4px;\n       }\n\n       .climate-preset-display:hover {\n        background: rgba(var(--rgb-primary-color), 0.22);\n        color: var(--text-primary-color);\n        transform: translateY(-1px);\n      }\n\n      .climate-preset-value {\n        text-transform: capitalize;\n        font-weight: 700;\n      }\n\n      .climate-bottom-icon {\n        width: 24px;\n        height: 24px;\n        border-radius: 50%;\n        border: 2px solid var(--divider-color);\n        background: rgba(var(--rgb-card-background-color, 255, 255, 255), 0.05);\n        color: var(--primary-text-color);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        transition: all 0.2s ease;\n      }\n\n      .climate-bottom-icon:hover {\n        background: rgba(var(--rgb-primary-color), 0.2);\n        border-color: var(--primary-color);\n        transform: scale(1.05);\n      }\n\n      .climate-bottom-icon.active {\n        background: var(--primary-color);\n        color: var(--text-primary-color);\n        border-color: var(--primary-color);\n      }\n\n      .climate-bottom-icon ha-icon {\n        --mdc-icon-size: 14px;\n        transform: translateY(-1px);\n        display: block;\n      }\n\n      .climate-bottom-icon.power-off {\n        opacity: 0.5;\n      }\n\n      .climate-control-btn-inline {\n        /* Size controlled via inline style, color controlled via inline style */\n        border-radius: 50%;\n        border: 2px solid;\n        background: rgba(var(--rgb-card-background-color, 255, 255, 255), 0.9);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        backdrop-filter: blur(10px);\n      }\n\n      .climate-control-btn-inline:hover:not(:disabled) {\n        transform: scale(1.1);\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n        opacity: 0.8;\n      }\n\n      .climate-control-btn-inline:active:not(:disabled) {\n        transform: scale(0.95);\n      }\n\n      .climate-control-btn-inline:disabled {\n        opacity: 0.3;\n        cursor: not-allowed;\n      }\n\n      .climate-control-btn-inline ha-icon {\n        --mdc-icon-size: var(--icon-size, 20px);\n        display: block;\n      }\n\n      /* Mode Popup */\n      .climate-mode-popup {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 9999;\n        opacity: 0;\n        visibility: hidden;\n        pointer-events: none;\n        transition: all 0.2s ease;\n      }\n\n      .climate-mode-popup.show {\n        opacity: 1;\n        visibility: visible;\n        pointer-events: auto;\n      }\n\n      .climate-mode-popup-content {\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border-radius: var(--uc-r-12, 12px);\n        padding: 8px;\n        box-shadow: var(--uc-pane-shadow, 0 4px 20px rgba(0, 0, 0, 0.3));\n        border: var(--uc-pane-border, 2px solid var(--divider-color));\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n        min-width: 140px;\n      }\n\n      .climate-mode-popup-btn {\n        padding: 12px 16px;\n        border-radius: var(--uc-r-8, 8px);\n        border: none;\n        background: var(--uc-pane-bg, var(--card-background-color));\n        color: var(--primary-text-color);\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        font-size: 13px;\n        font-weight: 500;\n        text-transform: capitalize;\n        text-align: left;\n      }\n\n      .climate-mode-popup-btn ha-icon {\n        --mdc-icon-size: 20px;\n        color: var(--primary-color);\n      }\n\n      .climate-mode-popup-btn:hover {\n        background: var(--secondary-background-color);\n      }\n\n      .climate-mode-popup-btn.active {\n        background: var(--primary-color);\n        color: var(--text-primary-color);\n      }\n\n      .climate-mode-popup-btn.active ha-icon {\n        color: var(--text-primary-color);\n      }\n\n      /* Info Popups */\n      .climate-info-popup {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 9999;\n        opacity: 0;\n        visibility: hidden;\n        pointer-events: none;\n        transition: all 0.2s ease;\n      }\n\n      .climate-info-popup.show {\n        opacity: 1;\n        visibility: visible;\n        pointer-events: auto;\n      }\n\n      .climate-info-popup-content {\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border-radius: var(--uc-r-12, 12px);\n        padding: 16px;\n        box-shadow: var(--uc-pane-shadow, 0 4px 20px rgba(0, 0, 0, 0.3));\n        border: var(--uc-pane-border, 2px solid var(--divider-color));\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        min-width: 160px;\n        text-align: center;\n      }\n\n      .climate-info-popup-title {\n        font-size: 12px;\n        font-weight: 600;\n        text-transform: uppercase;\n        color: var(--secondary-text-color);\n        letter-spacing: 0.5px;\n      }\n\n      .climate-info-popup-value {\n        font-size: 24px;\n        font-weight: 700;\n        color: var(--primary-text-color);\n        line-height: 1;\n      }\n\n      .climate-info-popup-detail {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        opacity: 0.8;\n      }\n\n      /* Fan and Preset Controls */\n      .climate-fan-controls,\n      .climate-preset-controls {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        width: 100%;\n        max-width: 320px;\n      }\n\n      .climate-control-label {\n        font-size: 12px;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n      }\n\n      .climate-chip-group {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n      }\n\n      .climate-chip {\n        padding: 6px 12px;\n        border-radius: var(--uc-r-16, 16px);\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        color: var(--primary-text-color);\n        font-size: 12px;\n        font-weight: 500;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        text-transform: capitalize;\n      }\n\n      .climate-chip:hover {\n        background: var(--secondary-background-color);\n        border-color: var(--primary-color);\n      }\n\n      .climate-chip.active {\n        background: var(--primary-color);\n        color: var(--text-primary-color);\n        border-color: var(--primary-color);\n      }\n\n      /* Pulse Effect - Growing circles when heating/cooling (background) */\n      .climate-pulse-background {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: var(--dial-size, 280px);\n        height: var(--dial-size, 280px);\n        border-radius: 50%;\n        pointer-events: none;\n        z-index: 1;\n      }\n\n      .climate-pulse-circle {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        background-color: var(--pulse-color);\n        border-radius: 50%;\n        opacity: 0.3;\n        animation: climate-pulse-grow 2s ease-out infinite;\n      }\n\n      .climate-pulse-circle:nth-of-type(1) {\n        animation-delay: 0s;\n      }\n\n      .climate-pulse-circle:nth-of-type(2) {\n        animation-delay: 0.5s;\n      }\n\n      .climate-pulse-circle:nth-of-type(3) {\n        animation-delay: 1s;\n      }\n\n      .climate-pulse-circle:nth-of-type(4) {\n        animation-delay: 1.5s;\n      }\n\n      @keyframes climate-pulse-grow {\n        0% {\n          width: 60%;\n          height: 60%;\n          opacity: 0.4;\n        }\n        100% {\n          width: 100%;\n          height: 100%;\n          opacity: 0;\n        }\n      }\n\n      .climate-pulse-mask {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 75%;\n        height: 75%;\n        border-radius: 50%;\n        background-color: var(--card-background-color, var(--ha-card-background, white));\n        z-index: 5;\n        pointer-events: none;\n      }\n\n      /* Dial style variations removed */\n\n      /* Animations removed */\n\n      /* Responsive Design */\n      @media (max-width: 768px) {\n        .climate-module-container {\n          padding: 12px;\n        }\n\n        .climate-current-temp {\n          font-size: 36px;\n        }\n\n        .climate-target-temp {\n          font-size: 12px;\n        }\n\n        .climate-mode-btn {\n          min-width: 60px;\n          padding: 6px 10px;\n          font-size: 10px;\n        }\n      }\n    `}}}};