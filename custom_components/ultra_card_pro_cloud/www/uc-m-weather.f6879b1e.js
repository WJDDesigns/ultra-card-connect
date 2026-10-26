export const __webpack_esm_ids__=[2907];export const __webpack_esm_modules__={9908(e,t,i){i.d(t,{UltraWeatherModule:()=>w});var r=i(2618),o=i(3307),n=i(6478),a=i(5147),d=i(8938),s=(i(7921),i(5363)),l=i(2318);const c={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",exceptional:"mdi:alert-circle-outline",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant"},h={"clear-night":"Clear night",cloudy:"Cloudy",exceptional:"Exceptional",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Thunderstorms",partlycloudy:"Partly cloudy",pouring:"Pouring",rainy:"Rainy",snowy:"Snowy","snowy-rainy":"Snow and rain",sunny:"Sunny",windy:"Windy","windy-variant":"Windy"},u=[{key:"feels_like",show:"show_feels_like",label:"Feels like"},{key:"wind_gust",show:"show_wind_gust",label:"Wind gust"},{key:"pressure",show:"show_pressure",label:"Pressure"},{key:"precipitation",show:"show_precipitation",label:"Rain"},{key:"uv_index",show:"show_uv_index",label:"UV index"},{key:"dew_point",show:"show_dew_point",label:"Dew point"}];class w extends o.m{constructor(){super(...arguments),this.metadata={type:"weather",title:"Weather",description:"Current conditions and a simple forecast with clean static icons",author:"WJD Designs",version:"1.0.0",icon:"mdi:weather-partly-cloudy",category:"data",tags:["weather","forecast","temperature","conditions"]}}createDefault(e){return{id:e||this.generateId("weather"),type:"weather",weather_entity:"",name:"",show_current:!0,show_condition_label:!0,show_humidity:!0,show_wind:!0,show_wind_direction:!0,show_forecast:!0,forecast_type:"daily",forecast_count:5,icon_color:"",temp_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderActionsTab(e,t,i,r){return a.A.render(e,t,e=>r(e))}renderOtherTab(e,t,i,r){return d.X.render(e,t,e=>r(e))}renderGeneralTab(e,t,i,o){var a,d;const s=e,c=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";return r.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,n.kg)("editor.weather.entity_section",c,"Entity"),(0,n.kg)("editor.weather.entity_section_desc",c,"Choose the weather source."),[{title:(0,n.kg)("editor.weather.entity",c,"Weather entity"),description:"",hass:t,data:{weather_entity:s.weather_entity||""},schema:[{name:"weather_entity",selector:{entity:{domain:"weather"}}}],onChange:e=>{var t,i;o({weather_entity:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.weather_entity)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.weather.name",c,"Location name"),description:(0,n.kg)("editor.weather.name_desc",c,"Leave blank to use the entity name."),hass:t,data:{name:s.name||""},schema:[this.textField("name")],onChange:e=>{o({name:e.detail.value.name}),this.triggerPreviewUpdate()}}])}
        ${this._renderStationSensors(s,t,i,o,c)}
        ${this.renderSettingsSection((0,n.kg)("editor.weather.current_section",c,"Current conditions"),(0,n.kg)("editor.weather.current_section_desc",c,"The large current weather block."),[{title:(0,n.kg)("editor.weather.show_current",c,"Show current conditions"),description:"",hass:t,data:{show_current:!1!==s.show_current},schema:[this.booleanField("show_current")],onChange:e=>{o({show_current:e.detail.value.show_current}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.weather.show_label",c,"Show condition label"),description:"",hass:t,data:{show_condition_label:!1!==s.show_condition_label},schema:[this.booleanField("show_condition_label")],onChange:e=>{o({show_condition_label:e.detail.value.show_condition_label}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.weather.show_humidity",c,"Show humidity"),description:"",hass:t,data:{show_humidity:!1!==s.show_humidity},schema:[this.booleanField("show_humidity")],onChange:e=>{o({show_humidity:e.detail.value.show_humidity}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.weather.show_wind",c,"Show wind"),description:"",hass:t,data:{show_wind:!1!==s.show_wind},schema:[this.booleanField("show_wind")],onChange:e=>{o({show_wind:e.detail.value.show_wind}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.weather.show_wind_direction",c,"Show wind direction"),description:(0,n.kg)("editor.weather.show_wind_direction_desc",c,"An arrow showing which way the wind blows."),hass:t,data:{show_wind_direction:!1!==s.show_wind_direction},schema:[this.booleanField("show_wind_direction")],onChange:e=>{o({show_wind_direction:e.detail.value.show_wind_direction}),this.triggerPreviewUpdate()}}])}
        ${this.renderSettingsSection((0,n.kg)("editor.weather.details_section",c,"Extra details"),(0,n.kg)("editor.weather.details_section_desc",c,"Small values under the condition. Each turns on by itself when you pick its station sensor."),u.map(e=>({title:(0,n.kg)(`editor.weather.detail.${e.key}`,c,e.label),description:"",hass:t,data:{[e.show]:this._isDetailShown(s,e.key,e.show)},schema:[this.booleanField(e.show)],onChange:t=>{o({[e.show]:t.detail.value[e.show]}),this.triggerPreviewUpdate()}})))}
        ${this.renderSettingsSection((0,n.kg)("editor.weather.forecast_section",c,"Forecast"),(0,n.kg)("editor.weather.forecast_section_desc",c,"The forecast strip below."),[{title:(0,n.kg)("editor.weather.show_forecast",c,"Show forecast"),description:"",hass:t,data:{show_forecast:!1!==s.show_forecast},schema:[this.booleanField("show_forecast")],onChange:e=>{o({show_forecast:e.detail.value.show_forecast}),this.triggerPreviewUpdate()}}])}
        ${!1!==s.show_forecast?r.qy`
              ${this.renderSegmentedField((0,n.kg)("editor.weather.forecast_type",c,"Forecast type"),"",s.forecast_type||"daily",[{value:"daily",label:(0,n.kg)("editor.weather.daily",c,"Daily")},{value:"hourly",label:(0,n.kg)("editor.weather.hourly",c,"Hourly")}],e=>{o({forecast_type:e}),(0,l.z6)(s.weather_entity),this.triggerPreviewUpdate()})}
              ${this.renderSliderField((0,n.kg)("editor.weather.forecast_count",c,"Forecast items"),(0,n.kg)("editor.weather.forecast_count_desc",c,"Days or hours to show."),null!==(d=s.forecast_count)&&void 0!==d?d:5,5,1,8,1,e=>{o({forecast_count:e}),this.triggerPreviewUpdate()},"")}
            `:r.s6}
        ${this.renderColorField((0,n.kg)("editor.weather.icon_color",c,"Icon color"),"",t,s.icon_color||"","var(--primary-color)",e=>{o({icon_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.weather.temp_color",c,"Temperature color"),"",t,s.temp_color||"","var(--primary-text-color)",e=>{o({temp_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.weather.card_bg",c,"Card background"),"",t,s.card_background_color||"","var(--card-background-color)",e=>{o({card_background_color:e}),this.triggerPreviewUpdate()})}
      </div>
    `}_isDetailShown(e,t,i){const r=e[i];return!0===r||!1===r?r:(0,s.Zl)(e,t)}_renderStationSensors(e,t,i,o,a){return r.qy`
      <div
        class="settings-section uc-weather-station-sensors"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.weather.station_section",a,"Weather station sensors")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,n.kg)("editor.weather.station_section_desc",a,"Optional. Use your own weather station for the current values. The icon and forecast still come from the weather entity.")}
        </div>
        ${s.Gm.map(r=>this.renderEntityPickerWithVariables(t,i,r.field,e[r.field]||"",e=>{o({[r.field]:e}),this.triggerPreviewUpdate()},["sensor"],(0,n.kg)(`editor.weather.sensor.${r.key}`,a,r.label)))}
      </div>
    `}renderPreview(e,t,i,o){var a,d,l,w,y,p;const _=e,g=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",m=this.resolveEntity(_.weather_entity,i)||_.weather_entity,v=m?null==t?void 0:t.states[m]:void 0,f=e=>this.resolveEntity(e,i)||e,b=_.temperature_entity?f(_.temperature_entity):"";if(!(v||b&&(null==t?void 0:t.states[b])))return this.renderGradientErrorState((0,n.kg)("editor.weather.config_needed",g,"Select a weather entity"),(0,n.kg)("editor.weather.config_needed_desc",g,"Choose an entity in the General tab"),"mdi:weather-partly-cloudy");const $=(null==v?void 0:v.attributes)||{},x=e=>(0,s.y8)(t,$,_,e,f),k=(null==v?void 0:v.state)||"",S=(null===(d=_.name)||void 0===d?void 0:d.trim())||$.friendly_name||(b?null===(w=null===(l=t.states[b])||void 0===l?void 0:l.attributes)||void 0===w?void 0:w.friendly_name:"")||m,U=x("temperature"),W=(null==U?void 0:U.unit)||$.temperature_unit||"°",F=null==U?void 0:U.value,P=$.temperature_unit||W,C=x("humidity"),z=x("wind_speed"),A=x("wind_direction"),D=u.filter(e=>this._isDetailShown(_,e.key,e.show)).flatMap(e=>{const t=s.Gm.find(t=>t.key===e.key),i=x(e.key);return t&&i?[{def:t,reading:i}]:[]}),q=!1!==_.show_wind_direction?null==A?void 0:A.value:void 0,E=_.icon_color||"var(--primary-color)",N=_.temp_color||"var(--primary-text-color)",M=_.text_color||"var(--primary-text-color)",L=_.secondary_text_color||"var(--secondary-text-color)",T=_.card_background_color||"var(--uc-pane-bg, var(--card-background-color))",G=this.buildStyleString(this.buildDesignStyles(e,t)),J=this.getHoverEffectClass(e),H=m||b,I=this.createGestureHandlers(_.id,{tap_action:(null===(y=_.tap_action)||void 0===y?void 0:y.action)?Object.assign(Object.assign({},_.tap_action),{entity:H}):{action:"more-info",entity:H},hold_action:_.hold_action,double_tap_action:_.double_tap_action,entity:H,module:_},t,i),O=Math.max(1,Math.min(8,null!==(p=_.forecast_count)&&void 0!==p?p:5)),V=!1!==_.show_forecast&&v?this._getForecast(m,_.forecast_type||"daily",t).slice(0,O):[],Z=!1!==_.show_wind&&(void 0!==z||void 0!==q),j=!1!==_.show_humidity?null==C?void 0:C.value:void 0,B="display:inline-flex;align-items:center;gap:3px;white-space:nowrap;";return r.qy`
      <div
        class="uc-weather-wrapper ${J}"
        data-uc-role="pane"
        style="padding:16px;border-radius:var(--uc-r-12, 12px);background:${T};${G}"
        @pointerdown=${I.onPointerDown}
        @pointermove=${I.onPointerMove}
        @pointerup=${I.onPointerUp}
        @pointerleave=${I.onPointerLeave}
        @pointercancel=${I.onPointerCancel}
      >
        ${this.wrapWithAnimation(r.qy`
            ${!1!==_.show_current?r.qy`
                  <div style="display:flex;align-items:center;gap:14px;">
                    <ha-icon
                      icon=${v?c[k]||"mdi:weather-partly-cloudy":"mdi:thermometer"}
                      style="color:${E};--mdc-icon-size:52px;flex-shrink:0;"
                    ></ha-icon>
                    <div style="flex:1;min-width:0;">
                      <div
                        style="color:${M};font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                      >
                        ${S}
                      </div>
                      ${!1!==_.show_condition_label&&v?r.qy`<div style="color:${L};font-size:13px;">
                            ${(0,n.kg)(`editor.weather.condition.${k}`,g,h[k]||k)}
                          </div>`:r.s6}
                      ${void 0!==j||Z||D.length>0?r.qy`
                            <div
                              style="display:flex;flex-wrap:wrap;column-gap:12px;row-gap:2px;color:${L};font-size:12px;margin-top:4px;"
                            >
                              ${void 0!==j?r.qy`<span style=${B}>
                                    <ha-icon
                                      icon="mdi:water-percent"
                                      style="--mdc-icon-size:14px;"
                                    ></ha-icon>
                                    ${Math.round(j)}%
                                  </span>`:r.s6}
                              ${Z?r.qy`<span
                                    style=${B}
                                    title=${void 0!==q?(0,s.cL)(q):""}
                                  >
                                    <ha-icon
                                      icon="mdi:weather-windy"
                                      style="--mdc-icon-size:14px;"
                                    ></ha-icon>
                                    ${void 0!==z?(0,s.GJ)("wind_speed",z):""}
                                    ${void 0!==q?r.qy`${(0,s.Cu)(q,12)}
                                          <span>${(0,s.cL)(q)}</span>`:r.s6}
                                  </span>`:r.s6}
                              ${D.map(e=>r.qy`<span
                                  style=${B}
                                  title=${(0,n.kg)(`editor.weather.detail.${e.def.key}`,g,e.def.label)}
                                >
                                  <ha-icon icon=${e.def.icon} style="--mdc-icon-size:14px;"></ha-icon>
                                  ${"uv_index"===e.def.key?"UV ":""}${(0,s.GJ)(e.def.key,e.reading)}
                                </span>`)}
                            </div>
                          `:r.s6}
                    </div>
                    ${void 0!==F?r.qy`<div style="flex-shrink:0;color:${N};font-size:40px;font-weight:700;line-height:1;">
                          ${Math.round(F)}<span style="font-size:20px;font-weight:500;">${W}</span>
                        </div>`:r.s6}
                  </div>
                `:r.s6}
            ${V.length>0?r.qy`
                  <div
                    style="display:grid;grid-template-columns:repeat(${V.length},1fr);gap:8px;margin-top:${!1!==_.show_current?"16px":"0"};"
                  >
                    ${V.map(e=>this._renderSlot(e,_,P,g,{iconColor:E,text:M,secondary:L}))}
                  </div>
                `:r.s6}
          `,e,t)}
      </div>
    `}_renderSlot(e,t,i,o,n){const a="hourly"===(t.forecast_type||"daily");let d;try{const t=new Date(e.datetime);d=a?new Intl.DateTimeFormat(o,{hour:"numeric"}).format(t):new Intl.DateTimeFormat(o,{weekday:"short"}).format(t)}catch(e){d="—"}return r.qy`
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;min-width:0;">
        <div style="color:${n.secondary};font-size:11px;font-weight:600;text-transform:uppercase;">
          ${d}
        </div>
        <ha-icon
          icon=${c[e.condition||""]||"mdi:weather-partly-cloudy"}
          style="color:${n.iconColor};--mdc-icon-size:26px;"
        ></ha-icon>
        <div style="color:${n.text};font-size:13px;font-weight:600;">
          ${void 0!==e.temperature?`${Math.round(e.temperature)}${i}`:"—"}
        </div>
        ${a||void 0===e.templow?r.s6:r.qy`<div style="color:${n.secondary};font-size:11px;">
              ${Math.round(e.templow)}${i}
            </div>`}
      </div>
    `}_getForecast(e,t,i){return(0,l.eq)(i,e,t,()=>this.triggerPreviewUpdate())}validate(e){const t=[],i=e;return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),i.weather_entity||i.temperature_entity||t.push("Select a weather entity"),{valid:0===t.length,errors:t}}getStyles(){return`\n      .uc-weather-wrapper { box-sizing: border-box; }\n      ${o.m.getSliderStyles()}\n    `}}},2318(e,t,i){i.d(t,{P$:()=>s,eq:()=>a,z6:()=>d});var r=i(9482);const o=new Map,n={daily:["forecast","forecast_daily","daily","forecasts"],hourly:["forecast_hourly","hourly"]};function a(e,t,i,a=()=>(0,r.dd)({source:"module-update",immediate:!0})){var d,s,l;if(!e||!t)return[];const c=function(e,t){if(e)for(const i of n[t]){const t=e[i];if(Array.isArray(t)&&t.length>0)return t}}(null===(s=null===(d=e.states)||void 0===d?void 0:d[t])||void 0===s?void 0:s.attributes,i);if(c)return c;const h=`${t}|${i}`,u=o.get(h);if(!(u&&Date.now()-u.fetchedAt<9e5)&&!(null==u?void 0:u.fetching)&&e.callWS&&(null===(l=e.states)||void 0===l?void 0:l[t])){const r={slots:(null==u?void 0:u.slots)||[],fetchedAt:(null==u?void 0:u.fetchedAt)||0,fetching:!0};o.set(h,r),e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:i},target:{entity_id:t},return_response:!0}).then(e=>{var i,r;const n=(null===(r=null===(i=null==e?void 0:e.response)||void 0===i?void 0:i[t])||void 0===r?void 0:r.forecast)||[];o.set(h,{slots:n,fetchedAt:Date.now(),fetching:!1}),a()}).catch(()=>{o.set(h,{slots:r.slots,fetchedAt:Date.now(),fetching:!1})})}return(null==u?void 0:u.slots)||[]}function d(e){if(e)for(const t of[...o.keys()])t.startsWith(`${e}|`)&&o.delete(t);else o.clear()}function s(e){const t=new Date(e);if(Number.isNaN(t.getTime()))return"";const i=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${t.getFullYear()}-${i}-${r}`}},5363(e,t,i){i.d(t,{Bc:()=>w,Cu:()=>u,GJ:()=>h,Zl:()=>c,cL:()=>a,y8:()=>l});var r=i(2618);const o=[{key:"temperature",field:"temperature_entity",label:"Temperature",icon:"mdi:thermometer",attribute:"temperature",unitAttribute:"temperature_unit",defaultUnit:"°"},{key:"humidity",field:"humidity_entity",label:"Humidity",icon:"mdi:water-percent",attribute:"humidity",defaultUnit:"%"},{key:"feels_like",field:"feels_like_entity",label:"Feels like",icon:"mdi:thermometer-lines",attribute:"apparent_temperature",unitAttribute:"temperature_unit",defaultUnit:"°"},{key:"dew_point",field:"dew_point_entity",label:"Dew point",icon:"mdi:thermometer-water",attribute:"dew_point",unitAttribute:"temperature_unit",defaultUnit:"°"},{key:"pressure",field:"pressure_entity",label:"Pressure",icon:"mdi:gauge",attribute:"pressure",unitAttribute:"pressure_unit",defaultUnit:"hPa"},{key:"wind_speed",field:"wind_speed_entity",label:"Wind speed",icon:"mdi:weather-windy",attribute:"wind_speed",unitAttribute:"wind_speed_unit",defaultUnit:"km/h"},{key:"wind_gust",field:"wind_gust_entity",label:"Wind gust",icon:"mdi:weather-windy-variant",attribute:"wind_gust_speed",unitAttribute:"wind_speed_unit",defaultUnit:"km/h"},{key:"wind_direction",field:"wind_direction_entity",label:"Wind direction",icon:"mdi:compass-outline",attribute:"wind_bearing",defaultUnit:"°"},{key:"precipitation",field:"precipitation_entity",label:"Rain",icon:"mdi:weather-pouring",attribute:"precipitation",unitAttribute:"precipitation_unit",defaultUnit:"mm"},{key:"uv_index",field:"uv_index_entity",label:"UV index",icon:"mdi:sun-wireless",attribute:"uv_index",defaultUnit:""}],n=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function a(e){const t=(e%360+360)%360;return n[Math.round(t/22.5)%16]}function d(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"!=typeof e)return;const t=e.trim();if(!t)return;const i=Number(t.replace(",","."));if(Number.isFinite(i))return i;const r=n.indexOf(t.toUpperCase());return r>=0?22.5*r:void 0}function s(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"!=typeof e||""===e.trim())return;const t=Number(e.replace(",","."));return Number.isFinite(t)?t:void 0}function l(e,t,i,r,n){var a,l,c,h;const u=o.find(e=>e.key===r);if(!u)return;const w=i[u.field],y=w?n?n(w):w:"",p=y?null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[y]:void 0;if(p){const e="wind_direction"===r?d(p.state):s(p.state);if(void 0!==e)return{value:e,unit:null!==(c=null===(l=p.attributes)||void 0===l?void 0:l.unit_of_measurement)&&void 0!==c?c:u.defaultUnit,fromSensor:!0}}const _=t||{},g=_[u.attribute],m="wind_direction"===r?d(g):s(g);return void 0!==m?{value:m,unit:u.unitAttribute&&null!==(h=_[u.unitAttribute])&&void 0!==h?h:u.defaultUnit,fromSensor:!1}:void 0}function c(e,t){const i=o.find(e=>e.key===t);return!(!i||!e[i.field])}function h(e,t){const i="precipitation"===e||"uv_index"===e?1:0,r=10**i,o=Math.round(t.value*r)/r,n=i?o.toFixed(i).replace(/\.0$/,""):String(o);return t.unit&&"uv_index"!==e?"%"===t.unit||t.unit.startsWith("°")?`${n}${t.unit}`:`${n} ${t.unit}`:n}function u(e,t=14,i="currentColor"){const o=(e+180)%360;return r.JW`
    <svg width=${t} height=${t} viewBox="0 0 24 24" aria-hidden="true"
      style="transform:rotate(${o}deg);flex-shrink:0;">
      <path d="M12 2 L18 20 L12 16 L6 20 Z" fill=${i}></path>
    </svg>
  `}function w(e,t,i=96,o={}){const n=o.ring||"var(--divider-color, rgba(127,127,127,0.4))",d=o.needle||"var(--primary-color)",s=o.text||"var(--primary-text-color)",l=Array.from({length:16},(e,t)=>22.5*t),c=a(e);return r.JW`
    <svg width=${i} height=${i} viewBox="0 0 100 100" role="img"
      aria-label=${`Wind from ${c}`}>
      <circle cx="50" cy="50" r="44" fill="none" stroke=${n} stroke-width="2"></circle>
      ${l.map(e=>r.JW`<line x1="50" y1=${e%90==0?8:10} x2="50" y2="14" stroke=${n}
          stroke-width=${e%90==0?2.5:1.2} transform=${`rotate(${e} 50 50)`}></line>`)}
      <text x="50" y="25" text-anchor="middle" font-size="9" font-weight="700" fill=${s}>N</text>
      <text x="77" y="53" text-anchor="middle" font-size="9" fill=${s} opacity="0.7">E</text>
      <text x="50" y="82" text-anchor="middle" font-size="9" fill=${s} opacity="0.7">S</text>
      <text x="23" y="53" text-anchor="middle" font-size="9" fill=${s} opacity="0.7">W</text>
      <g transform=${`rotate(${e} 50 50)`}>
        <path d="M50 4 L56 16 L50 13 L44 16 Z" fill=${d}></path>
      </g>
      <text x="50" y="49" text-anchor="middle" font-size="11" font-weight="700" fill=${s}>${c}</text>
      <text x="50" y="62" text-anchor="middle" font-size="9" fill=${s} opacity="0.8">${t}</text>
    </svg>
  `}i.d(t,["Gm",0,o])}};