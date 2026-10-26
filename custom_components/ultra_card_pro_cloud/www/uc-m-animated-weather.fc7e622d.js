export const __webpack_esm_ids__=[5617];export const __webpack_esm_modules__={3949(e,t,i){i.d(t,{UltraAnimatedWeatherModule:()=>y});var n=i(2618),r=i(3307),o=(i(7921),i(9957)),a=i(6478),l=i(5363);const d={location:{id:"location",label:"Location",icon:"mdi:map-marker",column:"left"},condition:{id:"condition",label:"Condition",icon:"mdi:weather-partly-cloudy",column:"left"},custom_entity:{id:"custom_entity",label:"Custom Entity",icon:"mdi:plus-circle",column:"left"},precipitation:{id:"precipitation",label:"Precipitation",icon:"mdi:weather-pouring",column:"left"},precipitation_probability:{id:"precipitation_probability",label:"Precipitation Probability",icon:"mdi:weather-rainy",column:"left"},wind:{id:"wind",label:"Wind",icon:"mdi:weather-windy",column:"left"},pressure:{id:"pressure",label:"Pressure",icon:"mdi:gauge",column:"left"},visibility:{id:"visibility",label:"Visibility",icon:"mdi:eye",column:"left"},humidity:{id:"humidity",label:"Humidity",icon:"mdi:water-percent",column:"left"},feels_like:{id:"feels_like",label:"Feels Like",icon:"mdi:thermometer-lines",column:"left"},dew_point:{id:"dew_point",label:"Dew Point",icon:"mdi:thermometer-water",column:"left"},wind_gust:{id:"wind_gust",label:"Wind Gust",icon:"mdi:weather-windy-variant",column:"left"},uv_index:{id:"uv_index",label:"UV Index",icon:"mdi:sun-wireless",column:"left"},wind_compass:{id:"wind_compass",label:"Wind Compass",icon:"mdi:compass-outline",column:"left"},date:{id:"date",label:"Date",icon:"mdi:calendar",column:"right"},temperature:{id:"temperature",label:"Temperature",icon:"mdi:thermometer",column:"right"},temp_range:{id:"temp_range",label:"High/Low",icon:"mdi:thermometer-lines",column:"right"}},s={humidity:"humidity",feels_like:"feels_like",dew_point:"dew_point",wind_gust:"wind_gust",uv_index:"uv_index",wind_compass:null},c={precipitation:"precipitation",pressure:"pressure",humidity:"humidity",feels_like:"feels_like",dew_point:"dew_point",wind_gust:"wind_gust",uv_index:"uv_index",wind_compass:"wind_direction"};function m(e,t){const i=e[`show_${t}`];if(t in s){if(!0===i||!1===i)return i;const n=s[t];return!!n&&(0,l.Zl)(e,n)}return!1!==i}function p(e,t,i){const n=e.weather_entity?null==t?void 0:t.states[e.weather_entity]:void 0,r=(null==n?void 0:n.attributes)||{},o=n=>void 0!==(0,l.y8)(t,r,e,n,i);return e=>!!d[e]&&("precipitation_probability"===e?null!=r.precipitation_probability:"visibility"===e?null!=r.visibility:"wind"===e?o("wind_speed")||o("wind_direction"):!c[e]||o(c[e]))}function u(e,t){const i=["location","condition"];e.custom_entity&&i.push("custom_entity");for(const e of["precipitation","precipitation_probability","wind","pressure","visibility"])t(e)&&i.push(e);const n=[...e.left_column_order||i],r=[...e.right_column_order||["date","temperature","temp_range"]];for(const e of Object.keys(s))n.includes(e)||r.includes(e)||!t(e)||n.push(e);return{left:n,right:r}}const _={},g={item:null,activeZone:null};function h(e,t,i,o,s){var c,h,w,v,y;const f=t,b=(null===(c=i.locale)||void 0===c?void 0:c.language)||"en",x=p(f,i,t=>{var i;return(null===(i=e.resolveEntity)||void 0===i?void 0:i.call(e,t,o))||t}),$=u(f,x),k=$.left.filter(x),z=$.right.filter(x),S=f.id||"default",W=()=>_[S]||null,C=e=>{e.target.classList.remove("wm-dragging"),g.item=null,g.activeZone&&(g.activeZone.classList.remove("wm-drop-active"),g.activeZone=null)},U=e=>{g.item&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"))},E=e=>{if(!g.item)return;e.preventDefault();const t=e.currentTarget;g.activeZone&&g.activeZone!==t&&g.activeZone.classList.remove("wm-drop-active"),g.activeZone=t,t.classList.add("wm-drop-active")},P=e=>{const t=e.currentTarget,i=e.relatedTarget;i&&t.contains(i)||(t.classList.remove("wm-drop-active"),g.activeZone===t&&(g.activeZone=null))},A=(t,i,r=!1)=>n.qy`
    <div
      class="wm-drop-zone${r?" wm-drop-zone-empty":""}"
      @dragover=${U}
      @dragenter=${E}
      @dragleave=${P}
      @drop=${n=>((t,i,n)=>{t.preventDefault();const r=t.currentTarget;r.classList.remove("wm-drop-active"),g.activeZone===r&&(g.activeZone=null);const o=g.item;if(!o)return;g.item=null;const{itemId:a,fromColumn:l,fromIndex:d}=o,c=[...k],m=[...z];"left"===l?c.splice(d,1):m.splice(d,1);let p=n;l===i&&d<n&&(p=n-1),"left"===i?c.splice(p,0,a):m.splice(p,0,a),c.join(",")===k.join(",")&&m.join(",")===z.join(",")||(s({left_column_order:c,right_column_order:m}),setTimeout(()=>e.triggerPreviewUpdate(),50))})(n,t,i)}
    >
      <div class="wm-drop-line"></div>
      ${r?n.qy`<span class="wm-drop-hint">Drop here</span>`:""}
    </div>
  `,D=(t,r,o)=>{var l;const c=d[t];if(!c)return n.qy``;const p=`show_${t}`,u=`${t}_size`,h=`${t}_color`,w=m(f,t),v=W()===t;return n.qy`
      <div
        class="wm-item"
        draggable="true"
        @dragstart=${e=>((e,t,i,n)=>{g.item={itemId:t,fromColumn:i,fromIndex:n},e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t)),requestAnimationFrame(()=>e.target.classList.add("wm-dragging"))})(e,t,r,o)}
        @dragend=${C}
      >
        <div class="wm-item-header ${v?"expanded":""}">
          <ha-icon icon="mdi:drag" class="wm-drag-handle"></ha-icon>
          <ha-icon icon="${c.icon}" class="wm-item-icon"></ha-icon>
          <span class="wm-item-label">${c.label}</span>
          <ha-icon
            icon="${w?"mdi:eye":"mdi:eye-off"}"
            class="wm-visibility ${w?"on":"off"}"
            @click=${t=>{t.stopPropagation(),s({[p]:!w}),setTimeout(()=>e.triggerPreviewUpdate(),50)}}
          ></ha-icon>
          <ha-icon
            icon="mdi:chevron-${v?"up":"down"}"
            class="wm-chevron"
            @click=${e=>{var i;e.stopPropagation(),i=W()===t?null:t,_[S]=i,s({})}}
          ></ha-icon>
        </div>

        ${v?n.qy`
          <div class="wm-item-content">
            ${e.renderSliderField((0,a.kg)("editor.animated_weather.item_size",b,"Size"),"",null!==(l=f[u])&&void 0!==l?l:"wind_compass"===t?96:"left"===r?14:16,"wind_compass"===t?96:"left"===r?14:16,"wind_compass"===t?48:0,"wind_compass"===t?240:128,1,e=>{s({[u]:e})},"px")}
            <div class="wm-color-row">
              <div class="wm-color-label">${(0,a.kg)("editor.animated_weather.item_color",b,"Color")}</div>
              <ultra-color-picker
                .value="${f[h]||"var(--primary-text-color)"}"
                .hass="${i}"
                @value-changed=${t=>{s({[h]:t.detail.value}),setTimeout(()=>e.triggerPreviewUpdate(),50)}}
              ></ultra-color-picker>
            </div>
          </div>
        `:""}
      </div>
    `},L=(e,t,i)=>n.qy`
    <div class="wm-column">
      <div class="wm-column-title">${e}</div>
      ${0===i.length?A(t,0,!0):n.qy`
            ${A(t,0)}
            ${i.map((e,i)=>n.qy`
              ${D(e,t,i)}
              ${A(t,i+1)}
            `)}
          `}
    </div>
  `;return n.qy`
    ${e.injectUcFormStyles()}
    <style>
      ${r.m.getSliderStyles()}

      .wm-editor {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 16px;
      }

      .wm-section {
        background: var(--secondary-background-color);
        border-radius: var(--uc-r-8, 8px);
        padding: 16px;
      }

      .wm-section-title {
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--primary-color);
        color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color));
        margin-bottom: 16px;
        letter-spacing: 0.5px;
      }

      .wm-section-desc {
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.4;
        margin-bottom: 0;
      }

      /* ── Two-column grid ─────────────────────── */

      .wm-columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 24px;
      }

      .wm-column {
        background: var(--secondary-background-color);
        border-radius: var(--uc-r-8, 8px);
        padding: 16px;
        min-height: 180px;
      }

      .wm-column-title {
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--primary-color);
        color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color));
        letter-spacing: 0.5px;
        margin-bottom: 8px;
      }

      /* ── Draggable items ─────────────────────── */

      .wm-item {
        background: var(--primary-background-color);
        border-radius: var(--uc-r-6, 6px);
        border: 1px solid transparent;
        transition: opacity 0.15s, transform 0.15s, border-color 0.15s;
        cursor: grab;
        user-select: none;
      }

      .wm-item:active { cursor: grabbing; }

      /* Applied one rAF after dragstart so the drag ghost looks normal */
      .wm-item.wm-dragging {
        opacity: 0.3;
        transform: scale(0.97);
        border-color: var(--primary-color);
      }

      .wm-item-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        cursor: pointer;
      }

      .wm-drag-handle {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
        cursor: grab;
        flex-shrink: 0;
      }

      .wm-item-icon {
        --mdc-icon-size: 18px;
        color: var(--primary-color);
        flex-shrink: 0;
      }

      .wm-item-label {
        flex: 1;
        font-size: 13px;
        font-weight: 500;
        color: var(--primary-text-color);
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .wm-visibility {
        --mdc-icon-size: 18px;
        cursor: pointer;
        flex-shrink: 0;
        transition: color 0.15s;
      }
      .wm-visibility.on  { color: var(--primary-color); }
      .wm-visibility.off { color: var(--disabled-text-color, #888); }

      .wm-chevron {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
        flex-shrink: 0;
        transition: transform 0.2s;
      }

      .wm-item-header.expanded .wm-chevron {
        transform: rotate(180deg);
      }

      .wm-item-content {
        padding: 0 12px 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        border-top: 1px solid var(--divider-color);
      }

      .wm-color-row {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .wm-color-label {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      /* ── Drop zones ──────────────────────────── */

      /*
       * Each zone is a small invisible strip between items.
       * .wm-drop-line is the visual indicator — pointer-events:none
       * so moving the cursor onto it doesn't trigger dragleave on the parent.
       */

      .wm-drop-zone {
        height: 10px;
        position: relative;
        border-radius: var(--uc-r-4, 4px);
        /* A slightly expanded hit area makes it easier to target */
        margin: -1px 0;
        z-index: 1;
      }

      .wm-drop-line {
        pointer-events: none;
        position: absolute;
        inset: 0;
        top: 50%;
        left: 8px;
        right: 8px;
        height: 2px;
        transform: translateY(-50%);
        border-radius: var(--uc-r-2, 2px);
        background: transparent;
        transition: background 0.1s, box-shadow 0.1s, height 0.1s;
      }

      /* Active: grow the zone and show the colored insert line */
      .wm-drop-zone.wm-drop-active {
        height: 36px;
      }

      .wm-drop-zone.wm-drop-active .wm-drop-line {
        background: var(--primary-color);
        height: 3px;
        box-shadow:
          0 0 0 3px rgba(var(--rgb-primary-color, 3, 169, 244), 0.18),
          0 0 10px rgba(var(--rgb-primary-color, 3, 169, 244), 0.35);
      }

      /* Caret dots at each end of the line */
      .wm-drop-zone.wm-drop-active .wm-drop-line::before,
      .wm-drop-zone.wm-drop-active .wm-drop-line::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--primary-color);
      }
      .wm-drop-zone.wm-drop-active .wm-drop-line::before { left: -4px; }
      .wm-drop-zone.wm-drop-active .wm-drop-line::after  { right: -4px; }

      /* Empty column drop target */
      .wm-drop-zone-empty {
        height: 72px !important;
        border: 2px dashed var(--divider-color);
        border-radius: var(--uc-r-8, 8px);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border-color 0.15s, background 0.15s;
      }

      .wm-drop-zone-empty .wm-drop-line {
        display: none;
      }

      .wm-drop-hint {
        pointer-events: none;
        font-size: 12px;
        color: var(--secondary-text-color);
        transition: color 0.15s;
      }

      .wm-drop-zone-empty.wm-drop-active {
        border-color: var(--primary-color);
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.07);
      }

      .wm-drop-zone-empty.wm-drop-active .wm-drop-hint {
        color: var(--primary-color);
        font-weight: 600;
      }

      /* ── Layout ──────────────────────────────── */

      .wm-control-row {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .wm-control-label {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      @media (max-width: 600px) {
        .wm-columns { grid-template-columns: 1fr; }
      }
    </style>

    <div class="wm-editor">

      <!-- Weather Entity -->
      <div class="wm-section">
        <div class="wm-section-title">${(0,a.kg)("editor.animated_weather.entity_section",b,"Weather Entity")}</div>
        ${e.renderEntityPickerWithVariables(i,o,"weather_entity",f.weather_entity||"",t=>{s({weather_entity:t}),e.triggerPreviewUpdate()},["weather"],(0,a.kg)("editor.animated_weather.entity",b,"Weather Entity"))}
        <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
          ${(0,a.kg)("editor.animated_weather.entity_desc",b,"Select a weather entity to drive the animated background and forecast display.")}
        </div>
      </div>

      <!-- Weather Station Sensors -->
      <div class="wm-section">
        <div class="wm-section-title">${(0,a.kg)("editor.animated_weather.station_section",b,"Weather Station Sensors")}</div>
        <div class="wm-section-desc" style="margin-bottom: 16px;">
          ${(0,a.kg)("editor.animated_weather.station_section_desc",b,"Optional. Use your own weather station for the current values. The animated icon and high/low still come from the weather entity. New items like Feels Like and UV Index appear in the Left Column once their sensor is set.")}
        </div>
        ${l.Gm.map(t=>e.renderEntityPickerWithVariables(i,o,t.field,f[t.field]||"",i=>{s({[t.field]:i}),e.triggerPreviewUpdate()},["sensor"],(0,a.kg)(`editor.weather.sensor.${t.key}`,b,t.label)))}
      </div>

      <!-- Layout Settings -->
      <div class="wm-section">
        <div class="wm-section-title">${(0,a.kg)("editor.animated_weather.layout_section",b,"Layout Settings")}</div>

        ${e.renderSliderField((0,a.kg)("editor.animated_weather.layout_spread",b,"Layout Spread"),(0,a.kg)("editor.animated_weather.layout_spread_desc",b,"0% Compact ↔ 100% Full-Width"),null!==(h=f.layout_spread)&&void 0!==h?h:100,100,0,100,1,e=>s({layout_spread:e}),"%")}
        ${e.renderSliderField((0,a.kg)("editor.animated_weather.left_column_gap",b,"Left Column Gap"),(0,a.kg)("editor.animated_weather.left_column_gap_desc",b,"0–32px"),null!==(w=f.left_column_gap)&&void 0!==w?w:8,8,0,32,1,e=>s({left_column_gap:e}),"px")}
        ${e.renderSliderField((0,a.kg)("editor.animated_weather.right_column_gap",b,"Right Column Gap"),(0,a.kg)("editor.animated_weather.right_column_gap_desc",b,"0–32px"),null!==(v=f.right_column_gap)&&void 0!==v?v:8,8,0,32,1,e=>s({right_column_gap:e}),"px")}
      </div>

      <!-- Center Column (Weather Icon) -->
      <div class="wm-section">
        <div class="wm-section-title">${(0,a.kg)("editor.animated_weather.icon_section",b,"Center Column (Weather Icon)")}</div>

        ${e.renderSliderField((0,a.kg)("editor.animated_weather.icon_size",b,"Icon Size"),(0,a.kg)("editor.animated_weather.icon_size_desc",b,"0–300px"),null!==(y=f.main_icon_size)&&void 0!==y?y:120,120,0,300,10,e=>s({main_icon_size:e}),"px")}

        <div class="wm-control-row">
          <div class="wm-control-label">${(0,a.kg)("editor.animated_weather.icon_style",b,"Icon Style")}</div>
          ${e.renderUcForm(i,{icon_style:f.icon_style||"fill"},[e.selectField("icon_style",[{value:"fill",label:(0,a.kg)("editor.animated_weather.icon_style_filled",b,"Filled")},{value:"line",label:(0,a.kg)("editor.animated_weather.icon_style_outlined",b,"Outlined")}])],t=>{t.detail.value.icon_style!==f.icon_style&&(s(t.detail.value),setTimeout(()=>e.triggerPreviewUpdate(),50))},!1)}
        </div>
      </div>

      <!-- Drag & Drop header -->
      <div class="wm-section" style="padding-bottom: 0;">
        <div class="wm-section-title">${(0,a.kg)("editor.animated_weather.column_items_section",b,"Column Items")}</div>
        <div class="wm-section-desc">
          ${(0,a.kg)("editor.animated_weather.column_items_desc",b,"Drag items to reorder within or between columns — a blue line shows exactly where the item will land. Click the eye to toggle visibility, the chevron to edit size & color.")}
        </div>
      </div>

      <!-- Drag & Drop columns -->
      <div class="wm-columns">
        ${L((0,a.kg)("editor.animated_weather.left_column",b,"Left Column"),"left",k)}
        ${L((0,a.kg)("editor.animated_weather.right_column",b,"Right Column"),"right",z)}
      </div>

    </div>
  `}var w=i(9760),v=i(2318);class y extends r.m{constructor(){super(...arguments),this.metadata={type:"animated_weather",title:"Animated Weather",description:"Current weather display with animated icons",author:"WJD Designs",version:"1.0.0",icon:"mdi:weather-partly-cloudy",category:"content",tags:["weather","current","pro","premium","animated"]}}createDefault(e,t){const i=this._findWeatherEntity(t);return{id:e||this.generateId("animated_weather"),type:"animated_weather",weather_entity:i,temperature_entity:"",condition_entity:"",custom_entity:"",custom_entity_name:"",show_left_column:!0,show_center_column:!0,show_right_column:!0,layout_spread:100,left_column_gap:8,right_column_gap:8,location_override_mode:"text",location_name:"",location_entity:"",show_location:!0,show_condition:!0,show_custom_entity:!0,show_precipitation:!1,show_precipitation_probability:!1,show_wind:!1,show_pressure:!1,show_visibility:!1,show_date:!0,show_temperature:!0,show_temp_range:!0,location_size:16,condition_size:24,custom_entity_size:18,precipitation_size:14,wind_size:14,pressure_size:14,visibility_size:14,location_color:"var(--primary-text-color)",condition_color:"var(--primary-text-color)",custom_entity_color:"var(--primary-text-color)",precipitation_color:"var(--primary-text-color)",wind_color:"var(--primary-text-color)",pressure_color:"var(--primary-text-color)",visibility_color:"var(--primary-text-color)",main_icon_size:120,icon_style:"fill",date_size:16,temperature_size:64,temp_range_size:18,date_color:"var(--primary-text-color)",temperature_color:"var(--primary-text-color)",temp_range_color:"var(--primary-text-color)",module_background:"transparent",module_border:"transparent",tap_action:void 0,hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}_findWeatherEntity(e){if(!e)return"";const t=Object.keys(e.states).filter(e=>e.startsWith("weather."));return t.length>0?t[0]:""}_getColumnOrder(e,t,i){return u(e,p(e,t,e=>this.resolveEntity(e,i)||e))}renderGeneralTab(e,t,i,n){return h(this,e,t,i,n)}renderPreview(e,t,i,r){var a,l,d,s,c;const m=e,p=m,u=m.design||{},_={color:m.color||u.color,background_color:m.background_color||u.background_color,background_image:m.background_image||u.background_image,background_image_type:m.background_image_type||u.background_image_type,background_image_entity:m.background_image_entity||u.background_image_entity,background_image_upload:m.background_image_upload||u.background_image_upload,background_image_url:m.background_image_url||u.background_image_url,background_size:m.background_size||u.background_size,background_position:m.background_position||u.background_position,background_repeat:m.background_repeat||u.background_repeat,padding_top:void 0!==u.padding_top?u.padding_top:m.padding_top,padding_bottom:void 0!==u.padding_bottom?u.padding_bottom:m.padding_bottom,padding_left:void 0!==u.padding_left?u.padding_left:m.padding_left,padding_right:void 0!==u.padding_right?u.padding_right:m.padding_right,margin_top:void 0!==u.margin_top?u.margin_top:m.margin_top,margin_bottom:void 0!==u.margin_bottom?u.margin_bottom:m.margin_bottom,margin_left:void 0!==u.margin_left?u.margin_left:m.margin_left,margin_right:void 0!==u.margin_right?u.margin_right:m.margin_right,border_radius:m.border_radius||u.border_radius,border_style:m.border_style||u.border_style,border_width:m.border_width||u.border_width,border_color:m.border_color||u.border_color},g=this._getWeatherData(t,m,i),h=(new Date).toLocaleDateString((null===(a=t.locale)||void 0===a?void 0:a.language)||"en",{weekday:"long",month:"long",day:"numeric"}),v=(g.temperatureUnit,Math.round(g.temperature)),y=m.icon_style||"fill",f=g.forecast[0],b="number"==typeof(null==f?void 0:f.temperature)?f.temperature:void 0,x=void 0!==b?Math.round(b):v,$=void 0!==b?Math.round(null!==(l=null==f?void 0:f.templow)&&void 0!==l?l:b-10):v-10,k=!1!==m.show_left_column,z=!1!==m.show_center_column,S=!1!==m.show_right_column,W=null!==(d=m.layout_spread)&&void 0!==d?d:100,C=W<50;let U="";const E=[];C?(k&&E.push("auto"),z&&E.push("auto"),S&&E.push("auto")):(k&&E.push("minmax(0, 1fr)"),z&&E.push("auto"),S&&E.push("minmax(0, 1fr)")),U=E.join(" ")||"auto";let P=null,A=null,D=!1,L=0,q=0;const T=m.tap_action&&"nothing"!==m.tap_action.action||m.hold_action&&"nothing"!==m.hold_action.action||m.double_tap_action&&"nothing"!==m.double_tap_action.action,j=this.buildStyleString(this.buildDesignStyles(e,t)),F=this.getHoverEffectClass(e),I=`box-sizing: border-box; cursor: ${T?"pointer":"default"};`,N=_.color,Z=N||m.location_color||"var(--primary-text-color)",G=N||m.condition_color||"var(--primary-text-color)",M=N||m.custom_entity_color||"var(--primary-text-color)",O=N||m.date_color||"var(--primary-text-color)",V=N||m.temperature_color||"var(--primary-text-color)",B=N||m.temp_range_color||"var(--primary-text-color)",J=((_.padding_top||_.padding_bottom||_.padding_left||_.padding_right||p.padding_top||p.padding_bottom||p.padding_left||p.padding_right)&&(this.addPixelUnit(_.padding_top||p.padding_top),this.addPixelUnit(_.padding_right||p.padding_right),this.addPixelUnit(_.padding_bottom||p.padding_bottom),this.addPixelUnit(_.padding_left||p.padding_left)),(_.margin_top||_.margin_bottom||_.margin_left||_.margin_right||p.margin_top||p.margin_bottom||p.margin_left||p.margin_right)&&(_.margin_top||p.margin_top,_.margin_right||p.margin_right,_.margin_bottom||p.margin_bottom,_.margin_left||p.margin_left),_.background_color||p.background_color||m.module_background,this.getBackgroundImageCSS(Object.assign(Object.assign({},p),_),t),_.background_size||p.background_size,_.background_position||p.background_position,_.background_repeat||p.background_repeat,(_.border_style||p.border_style)&&"none"!==(_.border_style||p.border_style)?(this.addPixelUnit(_.border_width||p.border_width),_.border_style||p.border_style,_.border_color||p.border_color||m.module_border):m.module_border&&"transparent"!==m.module_border&&m.module_border,this.addPixelUnit(_.border_radius||p.border_radius),Math.round(W/100*12)),R=C?"center":"normal";return this.wrapWithAnimation(n.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div
        class="${F}"
        style="${j}; ${I}"
        @pointerdown=${e=>{e.preventDefault(),D=!1,P=setTimeout(()=>{D=!0,m.hold_action&&"nothing"===m.hold_action.action||o.K.handleAction(m.hold_action||{action:"default"},t,e.target,i,m.entity,m)},500)}}
        @pointerup=${e=>{if(e.preventDefault(),P&&(clearTimeout(P),P=null),D)return void(D=!1);const n=Date.now();n-q<300&&1===L?(A&&(clearTimeout(A),A=null),L=0,m.double_tap_action&&"nothing"===m.double_tap_action.action||o.K.handleAction(m.double_tap_action||{action:"default"},t,e.target,i,m.entity,m)):(L=1,q=n,A=setTimeout(()=>{L=0,m.tap_action&&"nothing"===m.tap_action.action||o.K.handleAction(m.tap_action||{action:"default"},t,e.target,i,m.entity,m)},300))}}
      >
        <div
          class="animated-weather-module-container"
          style="
            --column-gap: ${J}px;
            --justify-content: ${R};
            --left-column-gap: ${null!==(s=m.left_column_gap)&&void 0!==s?s:8}px;
            --right-column-gap: ${null!==(c=m.right_column_gap)&&void 0!==c?c:8}px;
            --location-size: ${m.location_size||16}px;
            --condition-size: ${m.condition_size||24}px;
            --custom-entity-size: ${m.custom_entity_size||18}px;
            --precipitation-size: ${m.precipitation_size||14}px;
            --wind-size: ${m.wind_size||14}px;
            --pressure-size: ${m.pressure_size||14}px;
            --visibility-size: ${m.visibility_size||14}px;
            --date-size: ${m.date_size||16}px;
            --temperature-size: ${m.temperature_size||64}px;
            --temp-range-size: ${m.temp_range_size||18}px;
            --main-icon-size: ${m.main_icon_size||120}px;
            --location-color: ${Z};
            --condition-color: ${G};
            --custom-entity-color: ${M};
            --precipitation-color: ${N||m.precipitation_color||"var(--primary-text-color)"};
            --wind-color: ${N||m.wind_color||"var(--primary-text-color)"};
            --pressure-color: ${N||m.pressure_color||"var(--primary-text-color)"};
            --visibility-color: ${N||m.visibility_color||"var(--primary-text-color)"};
            --date-color: ${O};
            --temperature-color: ${V};
            --temp-range-color: ${B};
            --module-background: ${m.module_background||"transparent"};
            --module-border: ${m.module_border||"transparent"};
          "
        >
        <div class="weather-main-grid" style="grid-template-columns: ${U};">
          <!-- Left Column: Location & Condition -->
          ${k?n.qy`
                <div class="weather-info-left">
                  ${this._renderColumnItems("left",m,t,g,h,v,x,$,i)}
                </div>
              `:""}

          <!-- Center Column: Weather Icon -->
          ${z?n.qy`
                <div class="weather-icon-center">
                  <img
                    src="${this._getWeatherIcon(g.condition,y)}"
                    alt="${m.weather_entity&&g.weatherEntity?(0,w.formatEntityState)(t,m.weather_entity):this._formatCondition(g.condition)}"
                    class="meteocon-icon large"
                  />
                </div>
              `:""}

          <!-- Right Column: Date & Temperature -->
          ${S?n.qy`
                <div class="weather-info-right">
                  ${this._renderColumnItems("right",m,t,g,h,v,x,$,i)}
                </div>
              `:""}
        </div>
      </div>
    `,e,t)}_renderColumnItems(e,t,i,r,o,a,d,s,c){var p;const u=this._getColumnOrder(t,i,c),_="left"===e?u.left:u.right,g=t.color||(null===(p=t.design)||void 0===p?void 0:p.color),h=(e,i,o="")=>{const a=r.readings[e];if(!m(t,e)||!a)return n.s6;const d=t[`${e}_size`]||14,s=g||t[`${e}_color`]||"var(--primary-text-color)";return n.qy`
        <div
          class="weather-detail weather-${e.replace(/_/g,"-")}"
          style="font-size:${d}px;color:${s};"
        >
          <ha-icon icon=${i} style="--mdc-icon-size:${d+2}px;"></ha-icon>
          ${o}${(0,l.GJ)(e,a)}
        </div>
      `},v={location:()=>!1!==t.show_location?n.qy`
              <div class="weather-location">
                <ha-icon icon="mdi:map-marker"></ha-icon>
                ${r.location}
              </div>
            `:n.s6,condition:()=>!1!==t.show_condition?n.qy`
              <div class="weather-condition">
                ${t.weather_entity&&r.weatherEntity?(0,w.formatEntityState)(i,t.weather_entity):this._formatCondition(r.condition)}
              </div>
            `:n.s6,custom_entity:()=>!1!==t.show_custom_entity&&t.custom_entity&&i.states[t.custom_entity]?n.qy`
              <div class="weather-custom-entity">
                ${t.custom_entity_name||i.states[t.custom_entity].attributes.friendly_name||t.custom_entity}:
                ${i.states[t.custom_entity].state}${i.states[t.custom_entity].attributes.unit_of_measurement||""}
              </div>
            `:n.s6,precipitation:()=>!1!==t.show_precipitation&&void 0!==r.precipitation&&null!==r.precipitation?n.qy`
              <div class="weather-precipitation">
                <ha-icon icon="mdi:weather-pouring"></ha-icon>
                ${(0,l.GJ)("precipitation",r.readings.precipitation)}
              </div>
            `:n.s6,precipitation_probability:()=>!1!==t.show_precipitation_probability&&void 0!==r.precipitationProbability&&null!==r.precipitationProbability?n.qy`
              <div class="weather-precipitation-probability">
                <ha-icon icon="mdi:weather-rainy"></ha-icon>
                ${this._formatPrecipitationProbability(r.precipitationProbability)}
              </div>
            `:n.s6,wind:()=>!1===t.show_wind||void 0===r.windSpeed&&void 0===r.windBearing?n.s6:n.qy`
              <div class="weather-wind">
                <ha-icon icon="mdi:weather-windy"></ha-icon>
                ${this._formatWind(r.readings.wind_speed,r.windBearing)}
              </div>
            `,pressure:()=>!1!==t.show_pressure&&void 0!==r.pressure&&null!==r.pressure?n.qy`
              <div class="weather-pressure">
                <ha-icon icon="mdi:gauge"></ha-icon>
                ${(0,l.GJ)("pressure",r.readings.pressure)}
              </div>
            `:n.s6,visibility:()=>!1!==t.show_visibility&&void 0!==r.visibility&&null!==r.visibility?n.qy`
              <div class="weather-visibility">
                <ha-icon icon="mdi:eye"></ha-icon>
                ${this._formatVisibility(r.visibility,r.weatherEntity)}
              </div>
            `:n.s6,humidity:()=>h("humidity","mdi:water-percent"),feels_like:()=>h("feels_like","mdi:thermometer-lines"),dew_point:()=>h("dew_point","mdi:thermometer-water"),wind_gust:()=>h("wind_gust","mdi:weather-windy-variant"),uv_index:()=>h("uv_index","mdi:sun-wireless","UV "),wind_compass:()=>{const e=r.readings.wind_direction;if(!m(t,"wind_compass")||!e)return n.s6;const i=r.readings.wind_speed;return n.qy`
          <div class="weather-wind-compass">
            ${(0,l.Bc)(e.value,i?(0,l.GJ)("wind_speed",i):"",t.wind_compass_size||96,{needle:t.wind_compass_color||"var(--primary-color)",text:g||"var(--primary-text-color)"})}
          </div>
        `},date:()=>!1!==t.show_date?n.qy` <div class="weather-date">${o}</div> `:n.s6,temperature:()=>!1!==t.show_temperature?n.qy` <div class="weather-temp">${a}°</div> `:n.s6,temp_range:()=>!1!==t.show_temp_range?n.qy` <div class="weather-temp-range">${d}° / ${s}°</div> `:n.s6};return _.filter(e=>v[e]).map(e=>v[e]()).filter(e=>e!==n.s6)}objectToStyleString(e){return Object.entries(e).filter(([e,t])=>null!=t&&""!==t).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${t}`).join("; ")}getBackgroundImageCSS(e,t){const i=e.background_image_type||"none";if("entity"===i&&e.background_image_entity&&t){const i=t.states[e.background_image_entity];if(i&&i.attributes.entity_picture)return`url('${i.attributes.entity_picture}')`}else{if("upload"===i&&e.background_image_upload)return`url('${e.background_image_upload}')`;if("url"===i&&e.background_image_url)return`url('${e.background_image_url}')`}return""}_getWeatherData(e,t,i){var n,r,o,a,d,s,c,m,p,u,_,g,h;const w=e.states[t.weather_entity||""],y=e.states[t.condition_entity||""],f=(null==w?void 0:w.attributes)||{},b=e=>this.resolveEntity(e,i)||e,x={};for(const i of l.Gm){const n=(0,l.y8)(e,f,t,i.key,b);n&&(x[i.key]=n)}const $=t.weather_entity?(0,v.eq)(e,t.weather_entity,"daily",()=>this.triggerPreviewUpdate()):[];let k="Unknown Location";if("entity"===t.location_override_mode&&t.location_entity){const i=e.states[t.location_entity];i&&(k=i.state||(null===(n=i.attributes)||void 0===n?void 0:n.friendly_name)||k)}else k=t.location_name?t.location_name:(null===(r=null==w?void 0:w.attributes)||void 0===r?void 0:r.friendly_name)||k;const z=(null===(o=x.temperature)||void 0===o?void 0:o.unit)||(null===(a=null==w?void 0:w.attributes)||void 0===a?void 0:a.temperature_unit)||"°F";return{temperature:null!==(s=null===(d=x.temperature)||void 0===d?void 0:d.value)&&void 0!==s?s:72,temperatureUnit:z,condition:(null==w?void 0:w.state)||(null==y?void 0:y.state)||"sunny",location:k,forecast:$,readings:x,humidity:null===(c=x.humidity)||void 0===c?void 0:c.value,windSpeed:null===(m=x.wind_speed)||void 0===m?void 0:m.value,windBearing:null===(p=x.wind_direction)||void 0===p?void 0:p.value,precipitation:null===(u=x.precipitation)||void 0===u?void 0:u.value,precipitationProbability:null===(_=null==w?void 0:w.attributes)||void 0===_?void 0:_.precipitation_probability,pressure:null===(g=x.pressure)||void 0===g?void 0:g.value,visibility:null===(h=null==w?void 0:w.attributes)||void 0===h?void 0:h.visibility,weatherEntity:w}}_getWeatherIcon(e,t="fill"){return`https://cdn.jsdelivr.net/gh/basmilius/weather-icons@dev/production/${t}/svg/${{"clear-night":"clear-night","clear-day":"clear-day",cloudy:"cloudy",exceptional:"not-available",fog:"fog",hail:"hail",lightning:"thunderstorms","lightning-rainy":"thunderstorms-rain",partlycloudy:"partly-cloudy-day","partly-cloudy-night":"partly-cloudy-night",pouring:"extreme-rain",rainy:"rain",snowy:"snow","snowy-rainy":"sleet",sunny:"clear-day",windy:"wind","windy-variant":"extreme-wind"}[e]||"partly-cloudy-day"}.svg`}_formatCondition(e){return e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}_formatPrecipitationProbability(e){return null==e?"":`${Math.round(e)}%`}_formatWind(e,t){const i=[];return e&&i.push(`${e.value.toFixed(1)} ${e.unit}`),null!=t&&i.push((0,l.cL)(t)),i.join(" ")}_formatVisibility(e,t){var i;if(null==e)return"";const n=(null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.visibility_unit)||"km";return`${e.toFixed(1)} ${n}`}getStyles(){return`\n      ${r.m.getSliderStyles()}\n      .animated-weather-module-container {\n        padding: 0;\n        position: relative;\n        overflow: hidden;\n        background: var(--module-background);\n        border: none;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* ========== MAIN WEATHER GRID ========== */\n      .weather-main-grid {\n        display: grid;\n        gap: var(--column-gap, 12px);\n        align-items: center;\n        justify-content: var(--justify-content, normal);\n        width: 100%;\n      }\n\n\n      /* Left Column */\n      .weather-info-left {\n        display: flex;\n        flex-direction: column;\n        gap: var(--left-column-gap, 8px) !important;\n        align-items: flex-start;\n        min-width: 0;\n        justify-content: center;\n      }\n\n\n      .weather-location {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: var(--location-size);\n        font-weight: 600;\n        color: var(--location-color);\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      .weather-location ha-icon {\n        --mdc-icon-size: calc(var(--location-size) + 2px);\n        flex-shrink: 0;\n      }\n\n      .weather-condition {\n        font-size: var(--condition-size);\n        font-weight: 500;\n        color: var(--condition-color);\n        text-transform: capitalize;\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      .weather-custom-entity {\n        font-size: var(--custom-entity-size);\n        font-weight: 500;\n        color: var(--custom-entity-color);\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      .weather-precipitation,\n      .weather-precipitation-probability,\n      .weather-wind,\n      .weather-pressure,\n      .weather-visibility {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: var(--precipitation-size);\n        font-weight: 500;\n        color: var(--precipitation-color);\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      .weather-precipitation ha-icon,\n      .weather-precipitation-probability ha-icon,\n      .weather-wind ha-icon,\n      .weather-pressure ha-icon,\n      .weather-visibility ha-icon {\n        --mdc-icon-size: calc(var(--precipitation-size) + 2px);\n        flex-shrink: 0;\n      }\n\n      .weather-wind {\n        font-size: var(--wind-size);\n        color: var(--wind-color);\n      }\n\n      .weather-wind ha-icon {\n        --mdc-icon-size: calc(var(--wind-size) + 2px);\n      }\n\n      .weather-pressure {\n        font-size: var(--pressure-size);\n        color: var(--pressure-color);\n      }\n\n      .weather-pressure ha-icon {\n        --mdc-icon-size: calc(var(--pressure-size) + 2px);\n      }\n\n      .weather-visibility {\n        font-size: var(--visibility-size);\n        color: var(--visibility-color);\n      }\n\n      .weather-visibility ha-icon {\n        --mdc-icon-size: calc(var(--visibility-size) + 2px);\n      }\n\n      .weather-detail {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-weight: 500;\n        overflow-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      .weather-detail ha-icon {\n        flex-shrink: 0;\n      }\n\n      .weather-wind-compass {\n        display: flex;\n        line-height: 0;\n      }\n\n      /* Center Column - Weather Icon */\n      .weather-icon-center {\n        width: var(--main-icon-size);\n        height: var(--main-icon-size);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .meteocon-icon {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n      }\n\n      .meteocon-icon.large {\n        width: var(--main-icon-size);\n        height: var(--main-icon-size);\n      }\n\n      /* Right Column */\n      .weather-info-right {\n        display: flex;\n        flex-direction: column;\n        gap: var(--right-column-gap, 8px) !important;\n        align-items: flex-end;\n        text-align: right;\n        min-width: 0;\n        justify-content: center;\n      }\n\n\n      .weather-date {\n        font-size: var(--date-size);\n        font-weight: 500;\n        color: var(--date-color);\n        text-transform: capitalize;\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      .weather-temp {\n        font-size: var(--temperature-size);\n        font-weight: 300;\n        color: var(--temperature-color);\n        line-height: 1;\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n      }\n\n      .weather-temp-range {\n        font-size: var(--temp-range-size);\n        font-weight: 500;\n        color: var(--temp-range-color);\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      /* ========== RESPONSIVE ========== */\n      @media (max-width: 768px) {\n        .animated-weather-module-container {\n          transform: scale(min(1, calc(100vw / 500)));\n          transform-origin: top center;\n        }\n      }\n    `}validate(e){const t=[],i=e;return i.weather_entity||i.temperature_entity||t.push("At least one weather or temperature entity is required"),{valid:0===t.length,errors:t}}}},2318(e,t,i){i.d(t,{P$:()=>d,eq:()=>a,z6:()=>l});var n=i(9482);const r=new Map,o={daily:["forecast","forecast_daily","daily","forecasts"],hourly:["forecast_hourly","hourly"]};function a(e,t,i,a=()=>(0,n.dd)({source:"module-update",immediate:!0})){var l,d,s;if(!e||!t)return[];const c=function(e,t){if(e)for(const i of o[t]){const t=e[i];if(Array.isArray(t)&&t.length>0)return t}}(null===(d=null===(l=e.states)||void 0===l?void 0:l[t])||void 0===d?void 0:d.attributes,i);if(c)return c;const m=`${t}|${i}`,p=r.get(m);if(!(p&&Date.now()-p.fetchedAt<9e5)&&!(null==p?void 0:p.fetching)&&e.callWS&&(null===(s=e.states)||void 0===s?void 0:s[t])){const n={slots:(null==p?void 0:p.slots)||[],fetchedAt:(null==p?void 0:p.fetchedAt)||0,fetching:!0};r.set(m,n),e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:i},target:{entity_id:t},return_response:!0}).then(e=>{var i,n;const o=(null===(n=null===(i=null==e?void 0:e.response)||void 0===i?void 0:i[t])||void 0===n?void 0:n.forecast)||[];r.set(m,{slots:o,fetchedAt:Date.now(),fetching:!1}),a()}).catch(()=>{r.set(m,{slots:n.slots,fetchedAt:Date.now(),fetching:!1})})}return(null==p?void 0:p.slots)||[]}function l(e){if(e)for(const t of[...r.keys()])t.startsWith(`${e}|`)&&r.delete(t);else r.clear()}function d(e){const t=new Date(e);if(Number.isNaN(t.getTime()))return"";const i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${t.getFullYear()}-${i}-${n}`}},5363(e,t,i){i.d(t,{Bc:()=>u,Cu:()=>p,GJ:()=>m,Zl:()=>c,cL:()=>a,y8:()=>s});var n=i(2618);const r=[{key:"temperature",field:"temperature_entity",label:"Temperature",icon:"mdi:thermometer",attribute:"temperature",unitAttribute:"temperature_unit",defaultUnit:"°"},{key:"humidity",field:"humidity_entity",label:"Humidity",icon:"mdi:water-percent",attribute:"humidity",defaultUnit:"%"},{key:"feels_like",field:"feels_like_entity",label:"Feels like",icon:"mdi:thermometer-lines",attribute:"apparent_temperature",unitAttribute:"temperature_unit",defaultUnit:"°"},{key:"dew_point",field:"dew_point_entity",label:"Dew point",icon:"mdi:thermometer-water",attribute:"dew_point",unitAttribute:"temperature_unit",defaultUnit:"°"},{key:"pressure",field:"pressure_entity",label:"Pressure",icon:"mdi:gauge",attribute:"pressure",unitAttribute:"pressure_unit",defaultUnit:"hPa"},{key:"wind_speed",field:"wind_speed_entity",label:"Wind speed",icon:"mdi:weather-windy",attribute:"wind_speed",unitAttribute:"wind_speed_unit",defaultUnit:"km/h"},{key:"wind_gust",field:"wind_gust_entity",label:"Wind gust",icon:"mdi:weather-windy-variant",attribute:"wind_gust_speed",unitAttribute:"wind_speed_unit",defaultUnit:"km/h"},{key:"wind_direction",field:"wind_direction_entity",label:"Wind direction",icon:"mdi:compass-outline",attribute:"wind_bearing",defaultUnit:"°"},{key:"precipitation",field:"precipitation_entity",label:"Rain",icon:"mdi:weather-pouring",attribute:"precipitation",unitAttribute:"precipitation_unit",defaultUnit:"mm"},{key:"uv_index",field:"uv_index_entity",label:"UV index",icon:"mdi:sun-wireless",attribute:"uv_index",defaultUnit:""}],o=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];function a(e){const t=(e%360+360)%360;return o[Math.round(t/22.5)%16]}function l(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"!=typeof e)return;const t=e.trim();if(!t)return;const i=Number(t.replace(",","."));if(Number.isFinite(i))return i;const n=o.indexOf(t.toUpperCase());return n>=0?22.5*n:void 0}function d(e){if("number"==typeof e)return Number.isFinite(e)?e:void 0;if("string"!=typeof e||""===e.trim())return;const t=Number(e.replace(",","."));return Number.isFinite(t)?t:void 0}function s(e,t,i,n,o){var a,s,c,m;const p=r.find(e=>e.key===n);if(!p)return;const u=i[p.field],_=u?o?o(u):u:"",g=_?null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[_]:void 0;if(g){const e="wind_direction"===n?l(g.state):d(g.state);if(void 0!==e)return{value:e,unit:null!==(c=null===(s=g.attributes)||void 0===s?void 0:s.unit_of_measurement)&&void 0!==c?c:p.defaultUnit,fromSensor:!0}}const h=t||{},w=h[p.attribute],v="wind_direction"===n?l(w):d(w);return void 0!==v?{value:v,unit:p.unitAttribute&&null!==(m=h[p.unitAttribute])&&void 0!==m?m:p.defaultUnit,fromSensor:!1}:void 0}function c(e,t){const i=r.find(e=>e.key===t);return!(!i||!e[i.field])}function m(e,t){const i="precipitation"===e||"uv_index"===e?1:0,n=10**i,r=Math.round(t.value*n)/n,o=i?r.toFixed(i).replace(/\.0$/,""):String(r);return t.unit&&"uv_index"!==e?"%"===t.unit||t.unit.startsWith("°")?`${o}${t.unit}`:`${o} ${t.unit}`:o}function p(e,t=14,i="currentColor"){const r=(e+180)%360;return n.JW`
    <svg width=${t} height=${t} viewBox="0 0 24 24" aria-hidden="true"
      style="transform:rotate(${r}deg);flex-shrink:0;">
      <path d="M12 2 L18 20 L12 16 L6 20 Z" fill=${i}></path>
    </svg>
  `}function u(e,t,i=96,r={}){const o=r.ring||"var(--divider-color, rgba(127,127,127,0.4))",l=r.needle||"var(--primary-color)",d=r.text||"var(--primary-text-color)",s=Array.from({length:16},(e,t)=>22.5*t),c=a(e);return n.JW`
    <svg width=${i} height=${i} viewBox="0 0 100 100" role="img"
      aria-label=${`Wind from ${c}`}>
      <circle cx="50" cy="50" r="44" fill="none" stroke=${o} stroke-width="2"></circle>
      ${s.map(e=>n.JW`<line x1="50" y1=${e%90==0?8:10} x2="50" y2="14" stroke=${o}
          stroke-width=${e%90==0?2.5:1.2} transform=${`rotate(${e} 50 50)`}></line>`)}
      <text x="50" y="25" text-anchor="middle" font-size="9" font-weight="700" fill=${d}>N</text>
      <text x="77" y="53" text-anchor="middle" font-size="9" fill=${d} opacity="0.7">E</text>
      <text x="50" y="82" text-anchor="middle" font-size="9" fill=${d} opacity="0.7">S</text>
      <text x="23" y="53" text-anchor="middle" font-size="9" fill=${d} opacity="0.7">W</text>
      <g transform=${`rotate(${e} 50 50)`}>
        <path d="M50 4 L56 16 L50 13 L44 16 Z" fill=${l}></path>
      </g>
      <text x="50" y="49" text-anchor="middle" font-size="11" font-weight="700" fill=${d}>${c}</text>
      <text x="50" y="62" text-anchor="middle" font-size="9" fill=${d} opacity="0.8">${t}</text>
    </svg>
  `}i.d(t,["Gm",0,r])}};