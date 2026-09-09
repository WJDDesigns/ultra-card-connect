export const __webpack_esm_ids__=[2907];export const __webpack_esm_modules__={9908(e,t,i){i.d(t,{UltraWeatherModule:()=>c});var o=i(2618),r=i(7475),a=i(6478),n=i(5147),s=i(8938);i(7921);const d={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",exceptional:"mdi:alert-circle-outline",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant"},l={"clear-night":"Clear night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Thunderstorms",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snow and rain",sunny:"Sunny",windy:"Windy","windy-variant":"Windy"};class c extends r.m{constructor(){super(...arguments),this.metadata={type:"weather",title:"Weather",description:"Current conditions and a simple forecast with clean static icons",author:"WJD Designs",version:"1.0.0",icon:"mdi:weather-partly-cloudy",category:"data",tags:["weather","forecast","temperature","conditions"]},this._forecastCache=new Map}createDefault(e){return{id:e||this.generateId("weather"),type:"weather",weather_entity:"",name:"",show_current:!0,show_condition_label:!0,show_humidity:!0,show_wind:!0,show_forecast:!0,forecast_type:"daily",forecast_count:5,icon_color:"",temp_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderActionsTab(e,t,i,o){return n.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return s.X.render(e,t,e=>o(e))}renderGeneralTab(e,t,i,r){var n,s;const d=e,l=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,a.kg)("editor.weather.entity_section",l,"Entity"),(0,a.kg)("editor.weather.entity_section_desc",l,"Choose the weather source."),[{title:(0,a.kg)("editor.weather.entity",l,"Weather entity"),description:"",hass:t,data:{weather_entity:d.weather_entity||""},schema:[{name:"weather_entity",selector:{entity:{domain:"weather"}}}],onChange:e=>{var t,i;r({weather_entity:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.weather_entity)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.weather.name",l,"Location name"),description:(0,a.kg)("editor.weather.name_desc",l,"Leave blank to use the entity name."),hass:t,data:{name:d.name||""},schema:[this.textField("name")],onChange:e=>{r({name:e.detail.value.name}),this.triggerPreviewUpdate()}}])}
        ${this.renderSettingsSection((0,a.kg)("editor.weather.current_section",l,"Current conditions"),(0,a.kg)("editor.weather.current_section_desc",l,"The large current weather block."),[{title:(0,a.kg)("editor.weather.show_current",l,"Show current conditions"),description:"",hass:t,data:{show_current:!1!==d.show_current},schema:[this.booleanField("show_current")],onChange:e=>{r({show_current:e.detail.value.show_current}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.weather.show_label",l,"Show condition label"),description:"",hass:t,data:{show_condition_label:!1!==d.show_condition_label},schema:[this.booleanField("show_condition_label")],onChange:e=>{r({show_condition_label:e.detail.value.show_condition_label}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.weather.show_humidity",l,"Show humidity"),description:"",hass:t,data:{show_humidity:!1!==d.show_humidity},schema:[this.booleanField("show_humidity")],onChange:e=>{r({show_humidity:e.detail.value.show_humidity}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.weather.show_wind",l,"Show wind"),description:"",hass:t,data:{show_wind:!1!==d.show_wind},schema:[this.booleanField("show_wind")],onChange:e=>{r({show_wind:e.detail.value.show_wind}),this.triggerPreviewUpdate()}}])}
        ${this.renderSettingsSection((0,a.kg)("editor.weather.forecast_section",l,"Forecast"),(0,a.kg)("editor.weather.forecast_section_desc",l,"The forecast strip below."),[{title:(0,a.kg)("editor.weather.show_forecast",l,"Show forecast"),description:"",hass:t,data:{show_forecast:!1!==d.show_forecast},schema:[this.booleanField("show_forecast")],onChange:e=>{r({show_forecast:e.detail.value.show_forecast}),this.triggerPreviewUpdate()}}])}
        ${!1!==d.show_forecast?o.qy`
              ${this.renderSegmentedField((0,a.kg)("editor.weather.forecast_type",l,"Forecast type"),"",d.forecast_type||"daily",[{value:"daily",label:(0,a.kg)("editor.weather.daily",l,"Daily")},{value:"hourly",label:(0,a.kg)("editor.weather.hourly",l,"Hourly")}],e=>{r({forecast_type:e}),this._forecastCache.clear(),this.triggerPreviewUpdate()})}
              ${this.renderSliderField((0,a.kg)("editor.weather.forecast_count",l,"Forecast items"),(0,a.kg)("editor.weather.forecast_count_desc",l,"Days or hours to show."),null!==(s=d.forecast_count)&&void 0!==s?s:5,5,1,8,1,e=>{r({forecast_count:e}),this.triggerPreviewUpdate()},"")}
            `:o.s6}
        ${this.renderColorField((0,a.kg)("editor.weather.icon_color",l,"Icon color"),"",t,d.icon_color||"","var(--primary-color)",e=>{r({icon_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,a.kg)("editor.weather.temp_color",l,"Temperature color"),"",t,d.temp_color||"","var(--primary-text-color)",e=>{r({temp_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,a.kg)("editor.weather.card_bg",l,"Card background"),"",t,d.card_background_color||"","var(--card-background-color)",e=>{r({card_background_color:e}),this.triggerPreviewUpdate()})}
      </div>
    `}renderPreview(e,t,i,r){var n,s,c,h;const w=e,y=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",u=this.resolveEntity(w.weather_entity,i)||w.weather_entity;if(!u||!(null==t?void 0:t.states[u]))return this.renderGradientErrorState((0,a.kg)("editor.weather.config_needed",y,"Select a weather entity"),(0,a.kg)("editor.weather.config_needed_desc",y,"Choose an entity in the General tab"),"mdi:weather-partly-cloudy");const p=t.states[u],_=p.attributes||{},g=p.state,m=(null===(s=w.name)||void 0===s?void 0:s.trim())||_.friendly_name||u,v=_.temperature_unit||"°",f="number"==typeof _.temperature?_.temperature:void 0,$="number"==typeof _.humidity?_.humidity:void 0,x="number"==typeof _.wind_speed?_.wind_speed:void 0,b=_.wind_speed_unit||"",k=w.icon_color||"var(--primary-color)",S=w.temp_color||"var(--primary-text-color)",C=w.text_color||"var(--primary-text-color)",P=w.secondary_text_color||"var(--secondary-text-color)",F=w.card_background_color||"var(--uc-pane-bg, var(--card-background-color))",U=this.buildStyleString(this.buildDesignStyles(e,t)),q=this.getHoverEffectClass(e),D=this.createGestureHandlers(w.id,{tap_action:(null===(c=w.tap_action)||void 0===c?void 0:c.action)?Object.assign(Object.assign({},w.tap_action),{entity:u}):{action:"more-info",entity:u},hold_action:w.hold_action,double_tap_action:w.double_tap_action,entity:u,module:w},t,i),z=Math.max(1,Math.min(8,null!==(h=w.forecast_count)&&void 0!==h?h:5)),M=!1!==w.show_forecast?this._getForecast(u,w.forecast_type||"daily",t,_).slice(0,z):[];return o.qy`
      <div
        class="uc-weather-wrapper ${q}"
        data-uc-role="pane"
        style="padding:16px;border-radius:var(--uc-r-12, 12px);background:${F};${U}"
        @pointerdown=${D.onPointerDown}
        @pointermove=${D.onPointerMove}
        @pointerup=${D.onPointerUp}
        @pointerleave=${D.onPointerLeave}
        @pointercancel=${D.onPointerCancel}
      >
        ${this.wrapWithAnimation(o.qy`
            ${!1!==w.show_current?o.qy`
                  <div style="display:flex;align-items:center;gap:14px;">
                    <ha-icon
                      icon=${d[g]||"mdi:weather-partly-cloudy"}
                      style="color:${k};--mdc-icon-size:52px;flex-shrink:0;"
                    ></ha-icon>
                    <div style="flex:1;min-width:0;">
                      <div
                        style="color:${C};font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                      >
                        ${m}
                      </div>
                      ${!1!==w.show_condition_label?o.qy`<div style="color:${P};font-size:13px;">
                            ${(0,a.kg)(`editor.weather.condition.${g}`,y,l[g]||g)}
                          </div>`:o.s6}
                      ${!1!==w.show_humidity&&void 0!==$||!1!==w.show_wind&&void 0!==x?o.qy`
                            <div
                              style="display:flex;gap:12px;color:${P};font-size:12px;margin-top:4px;"
                            >
                              ${!1!==w.show_humidity&&void 0!==$?o.qy`<span style="display:inline-flex;align-items:center;gap:3px;">
                                    <ha-icon
                                      icon="mdi:water-percent"
                                      style="--mdc-icon-size:14px;"
                                    ></ha-icon>
                                    ${Math.round($)}%
                                  </span>`:o.s6}
                              ${!1!==w.show_wind&&void 0!==x?o.qy`<span style="display:inline-flex;align-items:center;gap:3px;">
                                    <ha-icon
                                      icon="mdi:weather-windy"
                                      style="--mdc-icon-size:14px;"
                                    ></ha-icon>
                                    ${Math.round(x)} ${b}
                                  </span>`:o.s6}
                            </div>
                          `:o.s6}
                    </div>
                    ${void 0!==f?o.qy`<div style="flex-shrink:0;color:${S};font-size:40px;font-weight:700;line-height:1;">
                          ${Math.round(f)}<span style="font-size:20px;font-weight:500;">${v}</span>
                        </div>`:o.s6}
                  </div>
                `:o.s6}
            ${M.length>0?o.qy`
                  <div
                    style="display:grid;grid-template-columns:repeat(${M.length},1fr);gap:8px;margin-top:${!1!==w.show_current?"16px":"0"};"
                  >
                    ${M.map(e=>this._renderSlot(e,w,v,y,{iconColor:k,text:C,secondary:P}))}
                  </div>
                `:o.s6}
          `,e,t)}
      </div>
    `}_renderSlot(e,t,i,r,a){const n="hourly"===(t.forecast_type||"daily");let s;try{const t=new Date(e.datetime);s=n?new Intl.DateTimeFormat(r,{hour:"numeric"}).format(t):new Intl.DateTimeFormat(r,{weekday:"short"}).format(t)}catch(e){s="—"}return o.qy`
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;min-width:0;">
        <div style="color:${a.secondary};font-size:11px;font-weight:600;text-transform:uppercase;">
          ${s}
        </div>
        <ha-icon
          icon=${d[e.condition||""]||"mdi:weather-partly-cloudy"}
          style="color:${a.iconColor};--mdc-icon-size:26px;"
        ></ha-icon>
        <div style="color:${a.text};font-size:13px;font-weight:600;">
          ${void 0!==e.temperature?`${Math.round(e.temperature)}${i}`:"—"}
        </div>
        ${n||void 0===e.templow?o.s6:o.qy`<div style="color:${a.secondary};font-size:11px;">
              ${Math.round(e.templow)}${i}
            </div>`}
      </div>
    `}_getForecast(e,t,i,o){const r=o.forecast;if(Array.isArray(r)&&r.length>0)return r;const a=`${e}|${t}`,n=this._forecastCache.get(a);if(!(n&&Date.now()-n.fetchedAt<9e5)&&!(null==n?void 0:n.fetching)&&i.callWS){const o={slots:(null==n?void 0:n.slots)||[],fetchedAt:(null==n?void 0:n.fetchedAt)||0,fetching:!0};this._forecastCache.set(a,o),i.callWS({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:t},target:{entity_id:e},return_response:!0}).then(t=>{var i,o;const r=(null===(o=null===(i=null==t?void 0:t.response)||void 0===i?void 0:i[e])||void 0===o?void 0:o.forecast)||[];this._forecastCache.set(a,{slots:r,fetchedAt:Date.now(),fetching:!1}),this.triggerPreviewUpdate()}).catch(()=>{this._forecastCache.set(a,{slots:o.slots,fetchedAt:Date.now(),fetching:!1})})}return(null==n?void 0:n.slots)||[]}validate(e){const t=[],i=e;return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),i.weather_entity||t.push("Select a weather entity"),{valid:0===t.length,errors:t}}getStyles(){return`\n      .uc-weather-wrapper { box-sizing: border-box; }\n      ${r.m.getSliderStyles()}\n    `}}}};