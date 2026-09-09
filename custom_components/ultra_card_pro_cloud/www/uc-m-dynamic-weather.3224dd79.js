export const __webpack_esm_ids__=[9655];export const __webpack_esm_modules__={5776(e,t,i){i.d(t,{UltraDynamicWeatherModule:()=>d});var a=i(2618),r=i(7475),o=i(8938),n=i(378),l=i(1713),s=i(6478);class d extends r.m{constructor(){super(...arguments),this.metadata={type:"dynamic_weather",title:"Dynamic Weather",description:"Add animated weather effects (rain, snow, fog, sun beams) to your dashboard view.",author:"WJD Designs",version:"1.0.0",icon:"mdi:weather-partly-rainy",category:"media",tags:["weather","effects","pro","premium","animated","rain","snow","fog"]}}createDefault(e,t){const i=this._findWeatherEntity(t);return{id:e||this.generateId("dynamic_weather"),type:"dynamic_weather",enabled:!0,mode:"automatic",weather_entity:i,manual_effect:"rain",position:"background",opacity:50,matrix_rain_color:"#00ff00",enable_on_mobile:!0,respect_reduced_motion:!0,display_mode:"always",display_conditions:[]}}_findWeatherEntity(e){if(!e)return"";const t=Object.keys(e.states).filter(e=>e.startsWith("weather."));return t.length>0?t[0]:""}renderGeneralTab(e,t,i,r){var o,s,d,c;const u=e,g=(null===(o=null==t?void 0:t.locale)||void 0===o?void 0:o.language)||"en",p=n.xd.checkIntegrationAuth(t);return"pro"===(null===(s=null==p?void 0:p.subscription)||void 0===s?void 0:s.tier)&&"active"===(null===(d=null==p?void 0:p.subscription)||void 0===d?void 0:d.status)?a.qy`
      <div class="uc-dynamic-weather-settings">
        ${this.injectUcFormStyles()}

        <!-- Module Info -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
        >
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <ha-icon
              icon="mdi:weather-partly-rainy"
              style="color: var(--primary-color); --mdi-icon-size: 32px;"
            ></ha-icon>
            <div>
              <div style="font-size: 18px; font-weight: 700;">Dynamic Weather Effects (Pro)</div>
              <div style="font-size: 12px; color: var(--secondary-text-color);">
                View-wide animated weather effects with automatic or manual control
              </div>
            </div>
          </div>

          <div
            style="padding: 12px; background: rgba(var(--rgb-info-color), 0.1); border-radius: var(--uc-r-6, 6px); border-left: 4px solid var(--info-color);"
          >
            <div style="font-size: 13px; line-height: 1.5;">
              <strong>Note:</strong> This module controls weather effects for the entire view. It
              will not display as a visible card. Only the topmost enabled module with passing logic
              conditions will render.
            </div>
          </div>

          <div
            style="margin-top: 12px; padding: 10px; background: rgba(var(--rgb-warning-color), 0.12); border-radius: var(--uc-r-6, 6px); border-left: 4px solid var(--warning-color); color: var(--warning-color); font-size: 12px; line-height: 1.4;"
          >
            ⚠️ Lightning effects (Rain Storm) include rapid flashes.
          </div>
        </div>

        <!-- Core Settings -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px;"
          >
            CORE SETTINGS
          </div>

          <!-- Enable Toggle -->
          ${this.renderSettingsSection("","",[{title:"Enable Weather Effects",description:"Turn the weather effects on or off",hass:t,data:{enabled:u.enabled},schema:[this.booleanField("enabled")],onChange:e=>r(e.detail.value)}])}

          <!-- Mode Selection -->
          ${this.renderFieldSection("Mode","Choose how weather effects are controlled",t,{mode:u.mode||"automatic"},[this.selectField("mode",[{value:"automatic",label:"Automatic (from weather entity)"},{value:"manual",label:"Manual (select effect)"}])],e=>r(e.detail.value))}

          <!-- Automatic Mode Settings -->
          ${"automatic"===u.mode?a.qy`
                <div style="margin-top: 16px;">
                  ${this.renderConditionalFieldsGroup("Automatic Mode",a.qy`
                      ${this.renderEntityPickerWithVariables(t,i,"weather_entity",u.weather_entity||"",e=>{r({weather_entity:e}),this.triggerPreviewUpdate()},void 0,"Weather Entity")}
                      <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
                        Select a weather entity so the animation automatically matches current conditions.
                      </div>

                      <!-- Current Effect Preview -->
                      ${u.weather_entity&&t.states[u.weather_entity]?a.qy`
                            <div style="margin-top: 16px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-6, 6px);">
                              <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
                                Current Detection:
                              </div>
                              <div style="font-size: 13px; color: var(--secondary-text-color);">
                                Weather State: <strong>${t.states[u.weather_entity].state}</strong>
                              </div>
                              <div style="font-size: 13px; color: var(--secondary-text-color);">
                                Effect: <strong>${(0,l.$A)((0,l.Gi)(t,u.weather_entity))}</strong>
                              </div>
                            </div>
                          `:""}
                    `)}
                </div>
              `:""}

          <!-- Manual Mode Settings -->
          ${"manual"===u.mode?a.qy`
                <div style="margin-top: 16px;">
                  ${this.renderConditionalFieldsGroup("Manual Mode",a.qy`
                      ${this.renderFieldSection("Weather Effect","Choose which weather effect to display",t,{manual_effect:u.manual_effect||"rain"},[this.selectField("manual_effect",(0,l.Mn)().map(e=>({value:e.value,label:e.label})))],e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)})}

                      <!-- Matrix Rain Color Picker (only shown when matrix_rain is selected) -->
                      ${"matrix_rain"===u.manual_effect?a.qy`
                            <div style="margin-top: 16px;">
                              <ultra-color-picker
                                .label=${"Matrix Rain Color"}
                                .value=${u.matrix_rain_color||"#00ff00"}
                                .defaultValue=${"#00ff00"}
                                .hass=${t}
                                @value-changed=${e=>{r({matrix_rain_color:e.detail.value})}}
                              ></ultra-color-picker>
                            </div>
                          `:""}
                    `)}
                </div>
              `:""}
        </div>

        <!-- Display Settings -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px;"
          >
            DISPLAY SETTINGS
          </div>

          <!-- Position -->
          ${this.renderFieldSection("Position","Place effects in the foreground (above cards) or background (behind cards)",t,{position:u.position||"background"},[this.selectField("position",[{value:"background",label:"Background (behind cards)"},{value:"foreground",label:"Foreground (above cards)"}])],e=>r(e.detail.value))}

          <!-- Opacity Slider -->
          ${this.renderSliderField("Opacity","Control the transparency of weather effects (0–100%)",null!==(c=u.opacity)&&void 0!==c?c:50,50,0,100,1,e=>{r({opacity:e})},"%")}
        </div>

        <!-- Mobile & Accessibility Settings -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px;"
          >
            MOBILE & ACCESSIBILITY
          </div>

          ${this.renderSettingsSection("","",[{title:"Enable on Mobile",description:"Show weather effects on mobile devices (reduced particle count)",hass:t,data:{enable_on_mobile:u.enable_on_mobile},schema:[this.booleanField("enable_on_mobile")],onChange:e=>r(e.detail.value)},{title:"Respect Reduced Motion",description:"Disable effects when user prefers reduced motion",hass:t,data:{respect_reduced_motion:u.respect_reduced_motion},schema:[this.booleanField("respect_reduced_motion")],onChange:e=>r(e.detail.value)}])}
        </div>
      </div>
    `:this.renderProLockUI(g)}renderProLockUI(e){return a.qy`
      <div
        data-uc-role="pane"
        style="padding: 32px; text-align: center; background: var(--uc-pane-bg, var(--secondary-background-color)); border-radius: var(--uc-r-8, 8px); margin: 16px;"
      >
        <ha-icon
          icon="mdi:lock"
          style="color: var(--warning-color); --mdi-icon-size: 64px; margin-bottom: 16px;"
        ></ha-icon>
        <div style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">
          ${(0,s.kg)("editor.pro_feature",e,"Pro Feature")}
        </div>
        <div style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 24px;">
          Dynamic Weather Effects is a Pro feature. Upgrade to unlock animated weather effects
          including rain, snow, fog, and sun beams.
        </div>
        <a
          href="https://ultracardpro.com"
          target="_blank"
          style="display: inline-block; padding: 12px 24px; background: var(--primary-color); color: var(--text-primary-color, #fff); text-decoration: none; border-radius: var(--uc-r-8, 8px); font-weight: 600;"
        >
          Upgrade to Pro
        </a>
      </div>
    `}renderLogicTab(e,t,i){return o.X.render(e,t,i)}renderPreview(e,t,i,r){const o=e,n=(()=>{if("dashboard"===r)return!0;try{return"1"===new URLSearchParams(window.location.search).get("edit")}catch(e){return!1}})();return"live"===r||"ha-preview"===r||"dashboard"===r||n?this.wrapWithAnimation(a.qy`
        <div
          style="padding: 16px; text-align: center; color: var(--secondary-text-color); font-style: italic; background: rgba(var(--rgb-primary-color), 0.05); border-radius: var(--uc-r-8, 8px); border: 2px dashed var(--divider-color);"
        >
          <ha-icon
            icon="mdi:weather-partly-rainy"
            style="--mdi-icon-size: 48px; color: var(--primary-color); margin-bottom: 8px;"
          ></ha-icon>
          <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">
            Dynamic Weather Effects
          </div>
          <div style="font-size: 12px;">
            ${o.enabled?"automatic"===o.mode?`Auto: ${o.weather_entity||"No entity selected"}`:`Manual: ${(0,l.$A)(o.manual_effect||"none")}`:"Disabled"}
          </div>
          <div style="font-size: 11px; margin-top: 8px; opacity: 0.7;">
            Effects are rendered view-wide. Check your dashboard to see them in action.
          </div>
        </div>
      `,e,t):a.qy``}validate(e){const t=e,i=[];return"automatic"!==t.mode||t.weather_entity||i.push("Weather entity is required in automatic mode"),"manual"!==t.mode||t.manual_effect||i.push("Manual effect selection is required in manual mode"),(t.opacity<0||t.opacity>100)&&i.push("Opacity must be between 0 and 100"),{valid:0===i.length,errors:i}}getStyles(){return`\n      ${r.m.getSliderStyles()}\n    `}}},1713(e,t,i){function a(e,t){if(!t||!e.states[t])return"none";const i=e.states[t],a=i.state.toLowerCase(),r=i.attributes;if("lightning-rainy"===a||"lightning_rainy"===a)return"rain_storm";if("pouring"===a)return"rain_storm";if("rainy"===a){const e=r.precipitation||0;return e>10?"rain_storm":e>0&&e<=2?"rain_drizzle":"rain"}if("hail"===a)return"hail";if("lightning"===a)return"lightning";if("snowy"===a||"snow"===a)return(r.wind_speed||0)>20?"snow_storm":"snow_gentle";if("snowy-rainy"===a||"snowy_rainy"===a)return"snow_storm";if("fog"===a||"foggy"===a){const e=r.visibility;return void 0!==e&&e<1e3?"fog_dense":"fog_light"}return"sunny"===a||"clear"===a?"sun_beams":"clear-night"===a||"clear_night"===a?"none":"cloudy"===a||"partlycloudy"===a||"partly-cloudy"===a||"partly_cloudy"===a?"clouds":"windy-variant"===a||"windy_variant"===a?"wind":"none"}function r(e){return{none:"None",rain:"Rain",rain_storm:"Rain Storm",rain_drizzle:"Drizzle",hail:"Hail",acid_rain:"Acid Rain",matrix_rain:"Matrix Rain",lightning:"Lightning",snow_gentle:"Gentle Snow",snow_storm:"Snow Storm",fog_light:"Light Fog",fog_dense:"Dense Fog",sun_beams:"Sun Beams",clouds:"Clouds",wind:"Wind"}[e]||"Unknown"}function o(){return[{value:"none",label:"None"},{value:"rain",label:"Rain"},{value:"rain_storm",label:"Rain Storm (Lightning)"},{value:"rain_drizzle",label:"Drizzle"},{value:"hail",label:"Hail"},{value:"acid_rain",label:"Acid Rain"},{value:"matrix_rain",label:"Matrix Rain"},{value:"lightning",label:"Lightning"},{value:"snow_gentle",label:"Gentle Snow"},{value:"snow_storm",label:"Snow Storm"},{value:"fog_light",label:"Light Fog"},{value:"fog_dense",label:"Dense Fog"},{value:"sun_beams",label:"Sun Beams"},{value:"clouds",label:"Clouds"},{value:"wind",label:"Wind"}]}i.d(t,{$A:()=>r,Gi:()=>a,Mn:()=>o})}};