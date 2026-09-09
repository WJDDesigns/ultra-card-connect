export const __webpack_esm_ids__=[5617];export const __webpack_esm_modules__={3949(t,i,e){e.d(i,{UltraAnimatedWeatherModule:()=>m});var o=e(2618),r=e(7475),n=(e(7921),e(9957)),a=e(6478);const l={location:{id:"location",label:"Location",icon:"mdi:map-marker",column:"left"},condition:{id:"condition",label:"Condition",icon:"mdi:weather-partly-cloudy",column:"left"},custom_entity:{id:"custom_entity",label:"Custom Entity",icon:"mdi:plus-circle",column:"left"},precipitation:{id:"precipitation",label:"Precipitation",icon:"mdi:weather-pouring",column:"left"},precipitation_probability:{id:"precipitation_probability",label:"Precipitation Probability",icon:"mdi:weather-rainy",column:"left"},wind:{id:"wind",label:"Wind",icon:"mdi:weather-windy",column:"left"},pressure:{id:"pressure",label:"Pressure",icon:"mdi:gauge",column:"left"},visibility:{id:"visibility",label:"Visibility",icon:"mdi:eye",column:"left"},date:{id:"date",label:"Date",icon:"mdi:calendar",column:"right"},temperature:{id:"temperature",label:"Temperature",icon:"mdi:thermometer",column:"right"},temp_range:{id:"temp_range",label:"High/Low",icon:"mdi:thermometer-lines",column:"right"}},d={},s={item:null,activeZone:null};function c(t,i,e,n,c){var p,m,u,_,g,v,h,w,y,b,f;const x=i,$=(null===(p=e.locale)||void 0===p?void 0:p.language)||"en",k=x.weather_entity?e.states[x.weather_entity]:null,z=null!=(null===(m=null==k?void 0:k.attributes)||void 0===m?void 0:m.precipitation),S=null!=(null===(u=null==k?void 0:k.attributes)||void 0===u?void 0:u.precipitation_probability),C=void 0!==(null===(_=null==k?void 0:k.attributes)||void 0===_?void 0:_.wind_speed)||void 0!==(null===(g=null==k?void 0:k.attributes)||void 0===g?void 0:g.wind_bearing),W=null!=(null===(v=null==k?void 0:k.attributes)||void 0===v?void 0:v.pressure),P=null!=(null===(h=null==k?void 0:k.attributes)||void 0===h?void 0:h.visibility),E=t=>!(!l[t]||"precipitation"===t&&!z||"precipitation_probability"===t&&!S||"wind"===t&&!C||"pressure"===t&&!W||"visibility"===t&&!P),D=t=>{if("left"===t){const t=["location","condition"];return x.custom_entity&&t.push("custom_entity"),z&&t.push("precipitation"),S&&t.push("precipitation_probability"),C&&t.push("wind"),W&&t.push("pressure"),P&&t.push("visibility"),t}return["date","temperature","temp_range"]},q=(x.left_column_order||D("left")).filter(E),j=(x.right_column_order||D("right")).filter(E),T=x.id||"default",I=()=>d[T]||null,L=t=>{t.target.classList.remove("wm-dragging"),s.item=null,s.activeZone&&(s.activeZone.classList.remove("wm-drop-active"),s.activeZone=null)},U=t=>{s.item&&(t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="move"))},A=t=>{if(!s.item)return;t.preventDefault();const i=t.currentTarget;s.activeZone&&s.activeZone!==i&&s.activeZone.classList.remove("wm-drop-active"),s.activeZone=i,i.classList.add("wm-drop-active")},F=t=>{const i=t.currentTarget,e=t.relatedTarget;e&&i.contains(e)||(i.classList.remove("wm-drop-active"),s.activeZone===i&&(s.activeZone=null))},Z=(i,e,r=!1)=>o.qy`
    <div
      class="wm-drop-zone${r?" wm-drop-zone-empty":""}"
      @dragover=${U}
      @dragenter=${A}
      @dragleave=${F}
      @drop=${o=>((i,e,o)=>{i.preventDefault();const r=i.currentTarget;r.classList.remove("wm-drop-active"),s.activeZone===r&&(s.activeZone=null);const n=s.item;if(!n)return;s.item=null;const{itemId:a,fromColumn:l,fromIndex:d}=n,p=[...q],m=[...j];"left"===l?p.splice(d,1):m.splice(d,1);let u=o;l===e&&d<o&&(u=o-1),"left"===e?p.splice(u,0,a):m.splice(u,0,a),p.join(",")===q.join(",")&&m.join(",")===j.join(",")||(c({left_column_order:p,right_column_order:m}),setTimeout(()=>t.triggerPreviewUpdate(),50))})(o,i,e)}
    >
      <div class="wm-drop-line"></div>
      ${r?o.qy`<span class="wm-drop-hint">Drop here</span>`:""}
    </div>
  `,N=(i,r,n)=>{var p;const m=l[i];if(!m)return o.qy``;const u=`show_${i}`,_=`${i}_size`,g=`${i}_color`,v=!1!==x[u],h=I()===i;return o.qy`
      <div
        class="wm-item"
        draggable="true"
        @dragstart=${t=>((t,i,e,o)=>{s.item={itemId:i,fromColumn:e,fromIndex:o},t.dataTransfer&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",i)),requestAnimationFrame(()=>t.target.classList.add("wm-dragging"))})(t,i,r,n)}
        @dragend=${L}
      >
        <div class="wm-item-header ${h?"expanded":""}">
          <ha-icon icon="mdi:drag" class="wm-drag-handle"></ha-icon>
          <ha-icon icon="${m.icon}" class="wm-item-icon"></ha-icon>
          <span class="wm-item-label">${m.label}</span>
          <ha-icon
            icon="${v?"mdi:eye":"mdi:eye-off"}"
            class="wm-visibility ${v?"on":"off"}"
            @click=${i=>{i.stopPropagation(),c({[u]:!v}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}
          ></ha-icon>
          <ha-icon
            icon="mdi:chevron-${h?"up":"down"}"
            class="wm-chevron"
            @click=${t=>{var e;t.stopPropagation(),e=I()===i?null:i,d[T]=e,c({})}}
          ></ha-icon>
        </div>

        ${h?o.qy`
          <div class="wm-item-content">
            ${t.renderSliderField((0,a.kg)("editor.animated_weather.item_size",$,"Size"),"",null!==(p=x[_])&&void 0!==p?p:"left"===r?14:16,"left"===r?14:16,0,128,1,t=>{c({[_]:t})},"px")}
            <div class="wm-color-row">
              <div class="wm-color-label">${(0,a.kg)("editor.animated_weather.item_color",$,"Color")}</div>
              <ultra-color-picker
                .value="${x[g]||"var(--primary-text-color)"}"
                .hass="${e}"
                @value-changed=${i=>{c({[g]:i.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}
              ></ultra-color-picker>
            </div>
          </div>
        `:""}
      </div>
    `},M=(t,i,e)=>o.qy`
    <div class="wm-column">
      <div class="wm-column-title">${t}</div>
      ${0===e.length?Z(i,0,!0):o.qy`
            ${Z(i,0)}
            ${e.map((t,e)=>o.qy`
              ${N(t,i,e)}
              ${Z(i,e+1)}
            `)}
          `}
    </div>
  `;return o.qy`
    ${t.injectUcFormStyles()}
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
        <div class="wm-section-title">${(0,a.kg)("editor.animated_weather.entity_section",$,"Weather Entity")}</div>
        ${t.renderEntityPickerWithVariables(e,n,"weather_entity",x.weather_entity||"",i=>{c({weather_entity:i}),t.triggerPreviewUpdate()},["weather"],(0,a.kg)("editor.animated_weather.entity",$,"Weather Entity"))}
        <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
          ${(0,a.kg)("editor.animated_weather.entity_desc",$,"Select a weather entity to drive the animated background and forecast display.")}
        </div>
      </div>

      <!-- Layout Settings -->
      <div class="wm-section">
        <div class="wm-section-title">${(0,a.kg)("editor.animated_weather.layout_section",$,"Layout Settings")}</div>

        ${t.renderSliderField((0,a.kg)("editor.animated_weather.layout_spread",$,"Layout Spread"),(0,a.kg)("editor.animated_weather.layout_spread_desc",$,"0% Compact ↔ 100% Full-Width"),null!==(w=x.layout_spread)&&void 0!==w?w:100,100,0,100,1,t=>c({layout_spread:t}),"%")}
        ${t.renderSliderField((0,a.kg)("editor.animated_weather.left_column_gap",$,"Left Column Gap"),(0,a.kg)("editor.animated_weather.left_column_gap_desc",$,"0–32px"),null!==(y=x.left_column_gap)&&void 0!==y?y:8,8,0,32,1,t=>c({left_column_gap:t}),"px")}
        ${t.renderSliderField((0,a.kg)("editor.animated_weather.right_column_gap",$,"Right Column Gap"),(0,a.kg)("editor.animated_weather.right_column_gap_desc",$,"0–32px"),null!==(b=x.right_column_gap)&&void 0!==b?b:8,8,0,32,1,t=>c({right_column_gap:t}),"px")}
      </div>

      <!-- Center Column (Weather Icon) -->
      <div class="wm-section">
        <div class="wm-section-title">${(0,a.kg)("editor.animated_weather.icon_section",$,"Center Column (Weather Icon)")}</div>

        ${t.renderSliderField((0,a.kg)("editor.animated_weather.icon_size",$,"Icon Size"),(0,a.kg)("editor.animated_weather.icon_size_desc",$,"0–300px"),null!==(f=x.main_icon_size)&&void 0!==f?f:120,120,0,300,10,t=>c({main_icon_size:t}),"px")}

        <div class="wm-control-row">
          <div class="wm-control-label">${(0,a.kg)("editor.animated_weather.icon_style",$,"Icon Style")}</div>
          ${t.renderUcForm(e,{icon_style:x.icon_style||"fill"},[t.selectField("icon_style",[{value:"fill",label:(0,a.kg)("editor.animated_weather.icon_style_filled",$,"Filled")},{value:"line",label:(0,a.kg)("editor.animated_weather.icon_style_outlined",$,"Outlined")}])],i=>{i.detail.value.icon_style!==x.icon_style&&(c(i.detail.value),setTimeout(()=>t.triggerPreviewUpdate(),50))},!1)}
        </div>
      </div>

      <!-- Drag & Drop header -->
      <div class="wm-section" style="padding-bottom: 0;">
        <div class="wm-section-title">${(0,a.kg)("editor.animated_weather.column_items_section",$,"Column Items")}</div>
        <div class="wm-section-desc">
          ${(0,a.kg)("editor.animated_weather.column_items_desc",$,"Drag items to reorder within or between columns — a blue line shows exactly where the item will land. Click the eye to toggle visibility, the chevron to edit size & color.")}
        </div>
      </div>

      <!-- Drag & Drop columns -->
      <div class="wm-columns">
        ${M((0,a.kg)("editor.animated_weather.left_column",$,"Left Column"),"left",q)}
        ${M((0,a.kg)("editor.animated_weather.right_column",$,"Right Column"),"right",j)}
      </div>

    </div>
  `}var p=e(9760);class m extends r.m{constructor(){super(...arguments),this.metadata={type:"animated_weather",title:"Animated Weather",description:"Current weather display with animated icons",author:"WJD Designs",version:"1.0.0",icon:"mdi:weather-partly-cloudy",category:"content",tags:["weather","current","pro","premium","animated"]}}createDefault(t,i){const e=this._findWeatherEntity(i);return{id:t||this.generateId("animated_weather"),type:"animated_weather",weather_entity:e,temperature_entity:"",condition_entity:"",custom_entity:"",custom_entity_name:"",show_left_column:!0,show_center_column:!0,show_right_column:!0,layout_spread:100,left_column_gap:8,right_column_gap:8,location_override_mode:"text",location_name:"",location_entity:"",show_location:!0,show_condition:!0,show_custom_entity:!0,show_precipitation:!1,show_precipitation_probability:!1,show_wind:!1,show_pressure:!1,show_visibility:!1,show_date:!0,show_temperature:!0,show_temp_range:!0,location_size:16,condition_size:24,custom_entity_size:18,precipitation_size:14,wind_size:14,pressure_size:14,visibility_size:14,location_color:"var(--primary-text-color)",condition_color:"var(--primary-text-color)",custom_entity_color:"var(--primary-text-color)",precipitation_color:"var(--primary-text-color)",wind_color:"var(--primary-text-color)",pressure_color:"var(--primary-text-color)",visibility_color:"var(--primary-text-color)",main_icon_size:120,icon_style:"fill",date_size:16,temperature_size:64,temp_range_size:18,date_color:"var(--primary-text-color)",temperature_color:"var(--primary-text-color)",temp_range_color:"var(--primary-text-color)",module_background:"transparent",module_border:"transparent",tap_action:void 0,hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}_findWeatherEntity(t){if(!t)return"";const i=Object.keys(t.states).filter(t=>t.startsWith("weather."));return i.length>0?i[0]:""}_getDefaultColumnOrder(t,i){var e,o,r,n,a,l,d,s,c,p;const m=t.weather_entity?null==i?void 0:i.states[t.weather_entity]:null,u=void 0!==(null===(e=null==m?void 0:m.attributes)||void 0===e?void 0:e.precipitation)&&null!==(null===(o=null==m?void 0:m.attributes)||void 0===o?void 0:o.precipitation),_=void 0!==(null===(r=null==m?void 0:m.attributes)||void 0===r?void 0:r.precipitation_probability)&&null!==(null===(n=null==m?void 0:m.attributes)||void 0===n?void 0:n.precipitation_probability),g=void 0!==(null===(a=null==m?void 0:m.attributes)||void 0===a?void 0:a.wind_speed)||void 0!==(null===(l=null==m?void 0:m.attributes)||void 0===l?void 0:l.wind_bearing),v=void 0!==(null===(d=null==m?void 0:m.attributes)||void 0===d?void 0:d.pressure)&&null!==(null===(s=null==m?void 0:m.attributes)||void 0===s?void 0:s.pressure),h=void 0!==(null===(c=null==m?void 0:m.attributes)||void 0===c?void 0:c.visibility)&&null!==(null===(p=null==m?void 0:m.attributes)||void 0===p?void 0:p.visibility),w=[];return w.push("location"),w.push("condition"),t.custom_entity&&w.push("custom_entity"),u&&w.push("precipitation"),_&&w.push("precipitation_probability"),g&&w.push("wind"),v&&w.push("pressure"),h&&w.push("visibility"),{left:w,right:["date","temperature","temp_range"]}}renderGeneralTab(t,i,e,o){return c(this,t,i,e,o)}renderPreview(t,i,e,r){var a,l,d,s,c;const m=t,u=m,_=m.design||{},g={color:m.color||_.color,background_color:m.background_color||_.background_color,background_image:m.background_image||_.background_image,background_image_type:m.background_image_type||_.background_image_type,background_image_entity:m.background_image_entity||_.background_image_entity,background_image_upload:m.background_image_upload||_.background_image_upload,background_image_url:m.background_image_url||_.background_image_url,background_size:m.background_size||_.background_size,background_position:m.background_position||_.background_position,background_repeat:m.background_repeat||_.background_repeat,padding_top:void 0!==_.padding_top?_.padding_top:m.padding_top,padding_bottom:void 0!==_.padding_bottom?_.padding_bottom:m.padding_bottom,padding_left:void 0!==_.padding_left?_.padding_left:m.padding_left,padding_right:void 0!==_.padding_right?_.padding_right:m.padding_right,margin_top:void 0!==_.margin_top?_.margin_top:m.margin_top,margin_bottom:void 0!==_.margin_bottom?_.margin_bottom:m.margin_bottom,margin_left:void 0!==_.margin_left?_.margin_left:m.margin_left,margin_right:void 0!==_.margin_right?_.margin_right:m.margin_right,border_radius:m.border_radius||_.border_radius,border_style:m.border_style||_.border_style,border_width:m.border_width||_.border_width,border_color:m.border_color||_.border_color},v=this._getWeatherData(i,m),h=(new Date).toLocaleDateString((null===(a=i.locale)||void 0===a?void 0:a.language)||"en",{weekday:"long",month:"long",day:"numeric"}),w=(v.temperatureUnit,Math.round(v.temperature)),y=m.icon_style||"fill",b=v.forecast[0],f=b?Math.round(b.temperature):w,x=b?Math.round(null!==(l=b.templow)&&void 0!==l?l:b.temperature-10):w-10,$=!1!==m.show_left_column,k=!1!==m.show_center_column,z=!1!==m.show_right_column,S=null!==(d=m.layout_spread)&&void 0!==d?d:100,C=S<50;let W="";const P=[];C?($&&P.push("auto"),k&&P.push("auto"),z&&P.push("auto")):($&&P.push("minmax(0, 1fr)"),k&&P.push("auto"),z&&P.push("minmax(0, 1fr)")),W=P.join(" ")||"auto";let E=null,D=null,q=!1,j=0,T=0;const I=m.tap_action&&"nothing"!==m.tap_action.action||m.hold_action&&"nothing"!==m.hold_action.action||m.double_tap_action&&"nothing"!==m.double_tap_action.action,L=this.buildStyleString(this.buildDesignStyles(t,i)),U=this.getHoverEffectClass(t),A=`box-sizing: border-box; cursor: ${I?"pointer":"default"};`,F=g.color,Z=F||m.location_color||"var(--primary-text-color)",N=F||m.condition_color||"var(--primary-text-color)",M=F||m.custom_entity_color||"var(--primary-text-color)",O=F||m.date_color||"var(--primary-text-color)",B=F||m.temperature_color||"var(--primary-text-color)",R=F||m.temp_range_color||"var(--primary-text-color)",V=((g.padding_top||g.padding_bottom||g.padding_left||g.padding_right||u.padding_top||u.padding_bottom||u.padding_left||u.padding_right)&&(this.addPixelUnit(g.padding_top||u.padding_top),this.addPixelUnit(g.padding_right||u.padding_right),this.addPixelUnit(g.padding_bottom||u.padding_bottom),this.addPixelUnit(g.padding_left||u.padding_left)),(g.margin_top||g.margin_bottom||g.margin_left||g.margin_right||u.margin_top||u.margin_bottom||u.margin_left||u.margin_right)&&(g.margin_top||u.margin_top,g.margin_right||u.margin_right,g.margin_bottom||u.margin_bottom,g.margin_left||u.margin_left),g.background_color||u.background_color||m.module_background,this.getBackgroundImageCSS(Object.assign(Object.assign({},u),g),i),g.background_size||u.background_size,g.background_position||u.background_position,g.background_repeat||u.background_repeat,(g.border_style||u.border_style)&&"none"!==(g.border_style||u.border_style)?(this.addPixelUnit(g.border_width||u.border_width),g.border_style||u.border_style,g.border_color||u.border_color||m.module_border):m.module_border&&"transparent"!==m.module_border&&m.module_border,this.addPixelUnit(g.border_radius||u.border_radius),Math.round(S/100*12)),G=C?"center":"normal";return this.wrapWithAnimation(o.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div
        class="${U}"
        style="${L}; ${A}"
        @pointerdown=${t=>{t.preventDefault(),q=!1,E=setTimeout(()=>{q=!0,m.hold_action&&"nothing"===m.hold_action.action||n.K.handleAction(m.hold_action||{action:"default"},i,t.target,e,m.entity,m)},500)}}
        @pointerup=${t=>{if(t.preventDefault(),E&&(clearTimeout(E),E=null),q)return void(q=!1);const o=Date.now();o-T<300&&1===j?(D&&(clearTimeout(D),D=null),j=0,m.double_tap_action&&"nothing"===m.double_tap_action.action||n.K.handleAction(m.double_tap_action||{action:"default"},i,t.target,e,m.entity,m)):(j=1,T=o,D=setTimeout(()=>{j=0,m.tap_action&&"nothing"===m.tap_action.action||n.K.handleAction(m.tap_action||{action:"default"},i,t.target,e,m.entity,m)},300))}}
      >
        <div
          class="animated-weather-module-container"
          style="
            --column-gap: ${V}px;
            --justify-content: ${G};
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
            --condition-color: ${N};
            --custom-entity-color: ${M};
            --precipitation-color: ${F||m.precipitation_color||"var(--primary-text-color)"};
            --wind-color: ${F||m.wind_color||"var(--primary-text-color)"};
            --pressure-color: ${F||m.pressure_color||"var(--primary-text-color)"};
            --visibility-color: ${F||m.visibility_color||"var(--primary-text-color)"};
            --date-color: ${O};
            --temperature-color: ${B};
            --temp-range-color: ${R};
            --module-background: ${m.module_background||"transparent"};
            --module-border: ${m.module_border||"transparent"};
          "
        >
        <div class="weather-main-grid" style="grid-template-columns: ${W};">
          <!-- Left Column: Location & Condition -->
          ${$?o.qy`
                <div class="weather-info-left">
                  ${this._renderColumnItems("left",m,i,v,h,w,f,x)}
                </div>
              `:""}

          <!-- Center Column: Weather Icon -->
          ${k?o.qy`
                <div class="weather-icon-center">
                  <img
                    src="${this._getWeatherIcon(v.condition,y)}"
                    alt="${m.weather_entity&&v.weatherEntity?(0,p.formatEntityState)(i,m.weather_entity):this._formatCondition(v.condition)}"
                    class="meteocon-icon large"
                  />
                </div>
              `:""}

          <!-- Right Column: Date & Temperature -->
          ${z?o.qy`
                <div class="weather-info-right">
                  ${this._renderColumnItems("right",m,i,v,h,w,f,x)}
                </div>
              `:""}
        </div>
      </div>
    `,t,i)}_renderColumnItems(t,i,e,r,n,a,l,d){const s=this._getDefaultColumnOrder(i,e),c="left"===t?i.left_column_order||s.left:i.right_column_order||s.right,m={location:()=>!1!==i.show_location?o.qy`
              <div class="weather-location">
                <ha-icon icon="mdi:map-marker"></ha-icon>
                ${r.location}
              </div>
            `:o.s6,condition:()=>!1!==i.show_condition?o.qy`
              <div class="weather-condition">
                ${i.weather_entity&&r.weatherEntity?(0,p.formatEntityState)(e,i.weather_entity):this._formatCondition(r.condition)}
              </div>
            `:o.s6,custom_entity:()=>!1!==i.show_custom_entity&&i.custom_entity&&e.states[i.custom_entity]?o.qy`
              <div class="weather-custom-entity">
                ${i.custom_entity_name||e.states[i.custom_entity].attributes.friendly_name||i.custom_entity}:
                ${e.states[i.custom_entity].state}${e.states[i.custom_entity].attributes.unit_of_measurement||""}
              </div>
            `:o.s6,precipitation:()=>!1!==i.show_precipitation&&void 0!==r.precipitation&&null!==r.precipitation?o.qy`
              <div class="weather-precipitation">
                <ha-icon icon="mdi:weather-pouring"></ha-icon>
                ${this._formatPrecipitation(r.precipitation,r.weatherEntity)}
              </div>
            `:o.s6,precipitation_probability:()=>!1!==i.show_precipitation_probability&&void 0!==r.precipitationProbability&&null!==r.precipitationProbability?o.qy`
              <div class="weather-precipitation-probability">
                <ha-icon icon="mdi:weather-rainy"></ha-icon>
                ${this._formatPrecipitationProbability(r.precipitationProbability)}
              </div>
            `:o.s6,wind:()=>!1===i.show_wind||void 0===r.windSpeed&&void 0===r.windBearing?o.s6:o.qy`
              <div class="weather-wind">
                <ha-icon icon="mdi:weather-windy"></ha-icon>
                ${this._formatWind(r.windSpeed,r.windBearing,r.weatherEntity)}
              </div>
            `,pressure:()=>!1!==i.show_pressure&&void 0!==r.pressure&&null!==r.pressure?o.qy`
              <div class="weather-pressure">
                <ha-icon icon="mdi:gauge"></ha-icon>
                ${this._formatPressure(r.pressure,r.weatherEntity)}
              </div>
            `:o.s6,visibility:()=>!1!==i.show_visibility&&void 0!==r.visibility&&null!==r.visibility?o.qy`
              <div class="weather-visibility">
                <ha-icon icon="mdi:eye"></ha-icon>
                ${this._formatVisibility(r.visibility,r.weatherEntity)}
              </div>
            `:o.s6,date:()=>!1!==i.show_date?o.qy` <div class="weather-date">${n}</div> `:o.s6,temperature:()=>!1!==i.show_temperature?o.qy` <div class="weather-temp">${a}°</div> `:o.s6,temp_range:()=>!1!==i.show_temp_range?o.qy` <div class="weather-temp-range">${l}° / ${d}°</div> `:o.s6};return c.filter(t=>m[t]).map(t=>m[t]()).filter(t=>t!==o.s6)}objectToStyleString(t){return Object.entries(t).filter(([t,i])=>null!=i&&""!==i).map(([t,i])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${i}`).join("; ")}addPixelUnit(t){if(t)return"string"==typeof t&&(t.includes("px")||t.includes("%")||t.includes("em")||t.includes("rem")||t.includes("vh")||t.includes("vw"))?t:`${t}px`}getBackgroundImageCSS(t,i){const e=t.background_image_type||"none";if("entity"===e&&t.background_image_entity&&i){const e=i.states[t.background_image_entity];if(e&&e.attributes.entity_picture)return`url('${e.attributes.entity_picture}')`}else{if("upload"===e&&t.background_image_upload)return`url('${t.background_image_upload}')`;if("url"===e&&t.background_image_url)return`url('${t.background_image_url}')`}return""}_getWeatherData(t,i){var e,o,r,n,a,l,d,s,c,p,m,u,_,g,v;const h=t.states[i.weather_entity||""],w=t.states[i.temperature_entity||""],y=t.states[i.condition_entity||""];let b=(null===(e=null==h?void 0:h.attributes)||void 0===e?void 0:e.forecast)||[];0===b.length&&h&&(b=(null===(o=h.attributes)||void 0===o?void 0:o.forecast_daily)||(null===(r=h.attributes)||void 0===r?void 0:r.daily)||(null===(n=h.attributes)||void 0===n?void 0:n.forecasts)||[]);let f="Unknown Location";if("entity"===i.location_override_mode&&i.location_entity){const e=t.states[i.location_entity];e&&(f=e.state||(null===(a=e.attributes)||void 0===a?void 0:a.friendly_name)||f)}else f=i.location_name?i.location_name:(null===(l=null==h?void 0:h.attributes)||void 0===l?void 0:l.friendly_name)||f;const x=(null===(d=null==h?void 0:h.attributes)||void 0===d?void 0:d.temperature_unit)||"°F";return{temperature:(null===(s=null==h?void 0:h.attributes)||void 0===s?void 0:s.temperature)||parseFloat(null==w?void 0:w.state)||72,temperatureUnit:x,condition:(null==h?void 0:h.state)||(null==y?void 0:y.state)||"sunny",location:f,forecast:b,humidity:null===(c=null==h?void 0:h.attributes)||void 0===c?void 0:c.humidity,windSpeed:null===(p=null==h?void 0:h.attributes)||void 0===p?void 0:p.wind_speed,windBearing:null===(m=null==h?void 0:h.attributes)||void 0===m?void 0:m.wind_bearing,precipitation:null===(u=null==h?void 0:h.attributes)||void 0===u?void 0:u.precipitation,precipitationProbability:null===(_=null==h?void 0:h.attributes)||void 0===_?void 0:_.precipitation_probability,pressure:null===(g=null==h?void 0:h.attributes)||void 0===g?void 0:g.pressure,visibility:null===(v=null==h?void 0:h.attributes)||void 0===v?void 0:v.visibility,weatherEntity:h}}_getWeatherIcon(t,i="fill"){return`https://cdn.jsdelivr.net/gh/basmilius/weather-icons@dev/production/${i}/svg/${{"clear-night":"clear-night","clear-day":"clear-day",cloudy:"cloudy",exceptional:"not-available",fog:"fog",hail:"hail",lightning:"thunderstorms","lightning-rainy":"thunderstorms-rain",partlycloudy:"partly-cloudy-day","partly-cloudy-night":"partly-cloudy-night",pouring:"extreme-rain",rainy:"rain",snowy:"snow","snowy-rainy":"sleet",sunny:"clear-day",windy:"wind","windy-variant":"extreme-wind"}[t]||"partly-cloudy-day"}.svg`}_formatCondition(t){return t.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}_formatPrecipitation(t,i){var e;if(null==t)return"";const o=(null===(e=null==i?void 0:i.attributes)||void 0===e?void 0:e.precipitation_unit)||"mm";return`${t.toFixed(1)} ${o}`}_formatPrecipitationProbability(t){return null==t?"":`${Math.round(t)}%`}_formatWind(t,i,e){var o;const r=[];if(null!=t){const i=(null===(o=null==e?void 0:e.attributes)||void 0===o?void 0:o.wind_speed_unit)||"km/h";r.push(`${t.toFixed(1)} ${i}`)}return null!=i&&r.push(this._formatWindBearing(i)),r.join(" ")}_formatWindBearing(t){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round(t/22.5)%16]}_formatPressure(t,i){var e;if(null==t)return"";const o=(null===(e=null==i?void 0:i.attributes)||void 0===e?void 0:e.pressure_unit)||"hPa";return`${Math.round(t)} ${o}`}_formatVisibility(t,i){var e;if(null==t)return"";const o=(null===(e=null==i?void 0:i.attributes)||void 0===e?void 0:e.visibility_unit)||"km";return`${t.toFixed(1)} ${o}`}getStyles(){return`\n      ${r.m.getSliderStyles()}\n      .animated-weather-module-container {\n        padding: 0;\n        position: relative;\n        overflow: hidden;\n        background: var(--module-background);\n        border: none;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* ========== MAIN WEATHER GRID ========== */\n      .weather-main-grid {\n        display: grid;\n        gap: var(--column-gap, 12px);\n        align-items: center;\n        justify-content: var(--justify-content, normal);\n        width: 100%;\n      }\n\n\n      /* Left Column */\n      .weather-info-left {\n        display: flex;\n        flex-direction: column;\n        gap: var(--left-column-gap, 8px) !important;\n        align-items: flex-start;\n        min-width: 0;\n        justify-content: center;\n      }\n\n\n      .weather-location {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: var(--location-size);\n        font-weight: 600;\n        color: var(--location-color);\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      .weather-location ha-icon {\n        --mdc-icon-size: calc(var(--location-size) + 2px);\n        flex-shrink: 0;\n      }\n\n      .weather-condition {\n        font-size: var(--condition-size);\n        font-weight: 500;\n        color: var(--condition-color);\n        text-transform: capitalize;\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      .weather-custom-entity {\n        font-size: var(--custom-entity-size);\n        font-weight: 500;\n        color: var(--custom-entity-color);\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      .weather-precipitation,\n      .weather-precipitation-probability,\n      .weather-wind,\n      .weather-pressure,\n      .weather-visibility {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: var(--precipitation-size);\n        font-weight: 500;\n        color: var(--precipitation-color);\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      .weather-precipitation ha-icon,\n      .weather-precipitation-probability ha-icon,\n      .weather-wind ha-icon,\n      .weather-pressure ha-icon,\n      .weather-visibility ha-icon {\n        --mdc-icon-size: calc(var(--precipitation-size) + 2px);\n        flex-shrink: 0;\n      }\n\n      .weather-wind {\n        font-size: var(--wind-size);\n        color: var(--wind-color);\n      }\n\n      .weather-wind ha-icon {\n        --mdc-icon-size: calc(var(--wind-size) + 2px);\n      }\n\n      .weather-pressure {\n        font-size: var(--pressure-size);\n        color: var(--pressure-color);\n      }\n\n      .weather-pressure ha-icon {\n        --mdc-icon-size: calc(var(--pressure-size) + 2px);\n      }\n\n      .weather-visibility {\n        font-size: var(--visibility-size);\n        color: var(--visibility-color);\n      }\n\n      .weather-visibility ha-icon {\n        --mdc-icon-size: calc(var(--visibility-size) + 2px);\n      }\n\n      /* Center Column - Weather Icon */\n      .weather-icon-center {\n        width: var(--main-icon-size);\n        height: var(--main-icon-size);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .meteocon-icon {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n      }\n\n      .meteocon-icon.large {\n        width: var(--main-icon-size);\n        height: var(--main-icon-size);\n      }\n\n      /* Right Column */\n      .weather-info-right {\n        display: flex;\n        flex-direction: column;\n        gap: var(--right-column-gap, 8px) !important;\n        align-items: flex-end;\n        text-align: right;\n        min-width: 0;\n        justify-content: center;\n      }\n\n\n      .weather-date {\n        font-size: var(--date-size);\n        font-weight: 500;\n        color: var(--date-color);\n        text-transform: capitalize;\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      .weather-temp {\n        font-size: var(--temperature-size);\n        font-weight: 300;\n        color: var(--temperature-color);\n        line-height: 1;\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n      }\n\n      .weather-temp-range {\n        font-size: var(--temp-range-size);\n        font-weight: 500;\n        color: var(--temp-range-color);\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n        margin: 0;\n        padding: 0;\n        line-height: 1.2;\n      }\n\n      /* ========== RESPONSIVE ========== */\n      @media (max-width: 768px) {\n        .animated-weather-module-container {\n          transform: scale(min(1, calc(100vw / 500)));\n          transform-origin: top center;\n        }\n      }\n    `}validate(t){const i=[],e=t;return e.weather_entity||e.temperature_entity||i.push("At least one weather or temperature entity is required"),{valid:0===i.length,errors:i}}}}};