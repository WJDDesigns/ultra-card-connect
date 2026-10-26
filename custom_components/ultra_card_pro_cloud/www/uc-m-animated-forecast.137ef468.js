export const __webpack_esm_ids__=[312];export const __webpack_esm_modules__={3909(e,t,r){var a=r(2618),o=r(4791),i=function(e,t,r,a){var o,i=arguments.length,n=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n};let n=class extends a.WF{constructor(){super(...arguments),this.value="",this.options=[],this.label="",this.description="",this.disabled=!1}_select(e){this.disabled||e===this.value||this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e},bubbles:!0,composed:!0}))}_resolveColumns(){var e,t;if(this.columns&&this.columns>0)return this.columns;const r=null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0;return 4===r?2:6===r?3:8===r?4:9===r?3:void 0}render(){const e=Array.isArray(this.options)?this.options:[],t=this._resolveColumns(),r=t?`--uc-seg-cols: ${t};`:"";return a.qy`
      ${this.label?a.qy`<span class="uc-seg-label">${this.label}</span>`:a.s6}
      ${this.description?a.qy`<span class="uc-seg-desc">${this.description}</span>`:a.s6}
      <div
        class="uc-seg-row ${t?"uc-seg-grid":""}"
        style=${r}
        role="tablist"
      >
        ${e.map(e=>a.qy`
            <button
              type="button"
              class="uc-seg-btn"
              role="tab"
              aria-selected=${this.value===e.value}
              ?data-active=${this.value===e.value}
              ?disabled=${this.disabled}
              @click=${()=>this._select(e.value)}
            >
              ${e.icon?a.qy`<ha-icon icon=${e.icon}></ha-icon>`:a.s6}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `}};n.styles=a.AH`
    :host {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
    .uc-seg-label {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
      /* Match the same gap that field-description leaves above its control so
         the title doesn't visually hug the first segmented button. */
      margin: 0 0 12px 0;
      display: block;
    }
    .uc-seg-desc {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin: 0 0 12px 0;
      opacity: 0.85;
      line-height: 1.4;
      display: block;
    }
    /* When a label is present, the description sits right under it; tighten the
       label-to-description gap so the description still reads as a sub-line. */
    .uc-seg-label + .uc-seg-desc {
      margin-top: -8px;
    }
    .uc-seg-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .uc-seg-row.uc-seg-grid {
      display: grid;
      grid-template-columns: repeat(var(--uc-seg-cols, 2), minmax(0, 1fr));
      gap: 8px;
    }
    .uc-seg-btn {
      flex: 1 1 auto;
      min-width: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px 12px;
      border: 2px solid var(--divider-color);
      border-radius: 10px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
    }
    .uc-seg-btn:hover:not([data-active]):not(:disabled) {
      border-color: var(--primary-color);
      background: rgba(var(--rgb-primary-color), 0.06);
    }
    .uc-seg-btn[data-active] {
      border-color: var(--primary-color);
      background: rgba(var(--rgb-primary-color), 0.12);
      color: var(--primary-color);
      color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color));
    }
    .uc-seg-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .uc-seg-btn ha-icon {
      flex-shrink: 0;
      --mdc-icon-size: 18px;
    }
  `,i([(0,o.MZ)({type:String})],n.prototype,"value",void 0),i([(0,o.MZ)({type:Array})],n.prototype,"options",void 0),i([(0,o.MZ)({type:String})],n.prototype,"label",void 0),i([(0,o.MZ)({type:String})],n.prototype,"description",void 0),i([(0,o.MZ)({type:Boolean})],n.prototype,"disabled",void 0),i([(0,o.MZ)({type:Number})],n.prototype,"columns",void 0),n=i([(0,o.EM)("ultra-segmented")],n)},3077(e,t,r){r.d(t,{UltraAnimatedForecastModule:()=>y});var a=r(2618),o=r(3307),i=(r(7921),r(9957)),n=(r(3909),r(6478));function s(e,t,r,i,s){var d;const l=t,p=(null===(d=r.locale)||void 0===d?void 0:d.language)||"en";return a.qy`
    ${e.injectUcFormStyles()}
    <style>${o.m.getSliderStyles()}</style>
    <div class="module-general-settings">
      <!-- ============================================ -->
      <!-- ENTITY CONFIGURATION SECTION -->
      <!-- ============================================ -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.animated_forecast.entities.title",p,"⚙️ Forecast Entities")}
        </div>

        <!-- Weather Entity -->
        <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
          ${(0,n.kg)("editor.animated_forecast.weather_entity",p,"Weather Entity")}
        </div>
        <div class="field-description" style="font-size: 13px; opacity: 0.7; margin-bottom: 12px;">
          ${(0,n.kg)("editor.animated_forecast.weather_entity_desc",p,"Primary weather.* entity with forecast data")}
        </div>
        ${e.renderEntityPickerWithVariables(r,i,"weather_entity",l.weather_entity||"",t=>{s({weather_entity:t}),e.triggerPreviewUpdate()},["weather"],(0,n.kg)("editor.animated_forecast.weather_entity",p,"Weather Entity"))}

        <!-- Forecast Entity (Optional) -->
        <div
          class="field-title"
          style="font-size: 16px; font-weight: 600; margin-bottom: 4px; margin-top: 24px;"
        >
          ${(0,n.kg)("editor.animated_forecast.forecast_entity",p,"Forecast Entity (Optional)")}
        </div>
        <div class="field-description" style="font-size: 13px; opacity: 0.7; margin-bottom: 12px;">
          ${(0,n.kg)("editor.animated_forecast.forecast_entity_desc",p,"Separate forecast entity if available")}
        </div>
        ${e.renderEntityPickerWithVariables(r,i,"forecast_entity",l.forecast_entity||"",t=>{s({forecast_entity:t}),e.triggerPreviewUpdate()},void 0,(0,n.kg)("editor.animated_forecast.forecast_entity",p,"Forecast Entity"))}
      </div>

      <!-- ============================================ -->
      <!-- CONFIGURATION SECTION -->
      <!-- ============================================ -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.animated_forecast.config.title",p,"⚙️ Forecast Configuration")}
        </div>

        <!-- Forecast Days -->
        ${e.renderSliderField((0,n.kg)("editor.animated_forecast.forecast_days",p,"Forecast Days"),(0,n.kg)("editor.animated_forecast.forecast_days_desc",p,"Number of forecast days (3-7)"),l.forecast_days||5,5,3,7,1,e=>s({forecast_days:e}),"")}

        <!-- Daily / Hourly -->
        ${e.renderSegmentedField((0,n.kg)("editor.animated_forecast.forecast_type",p,"Show First"),(0,n.kg)("editor.animated_forecast.forecast_type_desc",p,"Hourly needs a weather integration that provides an hourly forecast."),l.forecast_type||"daily",[{value:"daily",label:(0,n.kg)("editor.animated_forecast.daily",p,"Daily")},{value:"hourly",label:(0,n.kg)("editor.animated_forecast.hourly",p,"Hourly")}],t=>{s({forecast_type:t}),e.triggerPreviewUpdate()})}

        ${"hourly"!==l.forecast_type?e.renderFieldSection((0,n.kg)("editor.animated_forecast.day_tap_hourly",p,"Tap a Day to See Its Hours"),(0,n.kg)("editor.animated_forecast.day_tap_hourly_desc",p,"Tapping a day switches to that day's hourly forecast. Tap Back to return. Day taps no longer run the module tap action."),r,{day_tap_hourly:!0===l.day_tap_hourly},[e.booleanField("day_tap_hourly")],t=>{s({day_tap_hourly:t.detail.value.day_tap_hourly}),e.triggerPreviewUpdate()}):""}

        ${"hourly"===l.forecast_type||l.day_tap_hourly?e.renderSliderField((0,n.kg)("editor.animated_forecast.forecast_hours",p,"Forecast Hours"),(0,n.kg)("editor.animated_forecast.forecast_hours_desc",p,"Hours shown in the hourly view (3-12)"),l.forecast_hours||8,8,3,12,1,e=>s({forecast_hours:e}),""):""}

        ${"hourly"===l.forecast_type||l.day_tap_hourly?e.renderFieldSection((0,n.kg)("editor.animated_forecast.hour_number_only",p,"Hour Number Only"),(0,n.kg)("editor.animated_forecast.hour_number_only_desc",p,"Shows just the hour, for example 14 instead of 14 Uhr. AM and PM stay for 12-hour languages."),r,{hour_number_only:!0===l.hour_number_only},[e.booleanField("hour_number_only")],t=>{s({hour_number_only:t.detail.value.hour_number_only}),e.triggerPreviewUpdate()}):""}

        ${e.renderFieldSection((0,n.kg)("editor.animated_forecast.swipe_more",p,"Swipe for More"),(0,n.kg)("editor.animated_forecast.swipe_more_desc",p,"Loads every day or hour your weather service offers and lets you swipe sideways through them. The Forecast Days and Hours settings become how many show at once."),r,{swipe_more:!0===l.swipe_more},[e.booleanField("swipe_more")],t=>{s({swipe_more:t.detail.value.swipe_more}),e.triggerPreviewUpdate()})}
      </div>

      <!-- ============================================ -->
      <!-- CHART SECTION -->
      <!-- ============================================ -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.animated_forecast.chart.title",p,"📊 Chart")}
        </div>

        ${e.renderFieldSection((0,n.kg)("editor.animated_forecast.show_chart",p,"Show Chart Under Forecast"),(0,n.kg)("editor.animated_forecast.show_chart_desc",p,"Adds a small bar or line row per value, lined up with each day or hour."),r,{show_chart:!0===l.show_chart},[e.booleanField("show_chart")],t=>{s({show_chart:t.detail.value.show_chart}),e.triggerPreviewUpdate()})}

        ${!0===l.show_chart?a.qy`
              ${function(e,t,r,o){var i;const s=(null!==(i=e.chart_metrics)&&void 0!==i?i:["precipitation_probability"]).filter(e=>c.some(t=>t.value===e)),d=c.map(e=>e.value).filter(e=>!s.includes(e)),l=[...s,...d],p=e.chart_style||"bar",u=e=>{r(e),o.triggerPreviewUpdate()},g=(e,t)=>{const r=s.indexOf(e),a=r+t;if(r<0||a<0||a>=s.length)return;const o=[...s];[o[r],o[a]]=[o[a],o[r]],u({chart_metrics:o})},_=[{value:"bar",label:(0,n.kg)("editor.animated_forecast.chart_style_bar",t,"Bars")},{value:"line",label:(0,n.kg)("editor.animated_forecast.chart_style_line",t,"Line")}],m="background:none;border:1px solid var(--divider-color);border-radius:6px;color:var(--primary-text-color);width:28px;height:28px;padding:0;cursor:pointer;display:grid;place-items:center;--mdc-icon-size:18px;";return a.qy`
    <div class="field-section" style="margin-bottom: 16px;">
      <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
        ${(0,n.kg)("editor.animated_forecast.chart_metrics",t,"Values")}
      </div>
      <div
        class="field-description"
        style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
      >
        ${(0,n.kg)("editor.animated_forecast.chart_values_desc",t,"Tick the values to show, pick Bars or Line for each, and use the arrows to change their order. Values your weather integration doesn't provide are skipped.")}
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${l.map(r=>{var o;const i=s.includes(r),d=s.indexOf(r);return a.qy`
            <div
              style="display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:8px;background:rgba(var(--rgb-primary-text-color, 255, 255, 255), 0.04);border:1px solid ${i?"var(--primary-color)":"var(--divider-color)"};"
            >
              <ha-checkbox .checked=${i} @change=${()=>(e=>u({chart_metrics:s.includes(e)?s.filter(t=>t!==e):[...s,e]}))(r)}></ha-checkbox>
              <span style="flex:1;min-width:0;font-size:14px;${i?"":"opacity:0.6;"}">${(e=>{var r,a;return(0,n.kg)(`editor.animated_forecast.metric.${e}`,t,null!==(a=null===(r=c.find(t=>t.value===e))||void 0===r?void 0:r.fallback)&&void 0!==a?a:e)})(r)}</span>
              ${i?a.qy`
                    <ultra-segmented
                      style="width:150px;flex-shrink:0;"
                      .value=${(null===(o=e.chart_metric_styles)||void 0===o?void 0:o[r])||p}
                      .options=${_}
                      @value-changed=${t=>((t,r)=>u({chart_metric_styles:Object.assign(Object.assign({},e.chart_metric_styles||{}),{[t]:r})}))(r,t.detail.value)}
                    ></ultra-segmented>
                    <button
                      type="button"
                      style=${m}
                      title=${(0,n.kg)("editor.animated_forecast.move_up",t,"Move up")}
                      ?disabled=${0===d}
                      @click=${()=>g(r,-1)}
                    >
                      <ha-icon icon="mdi:chevron-up"></ha-icon>
                    </button>
                    <button
                      type="button"
                      style=${m}
                      title=${(0,n.kg)("editor.animated_forecast.move_down",t,"Move down")}
                      ?disabled=${d===s.length-1}
                      @click=${()=>g(r,1)}
                    >
                      <ha-icon icon="mdi:chevron-down"></ha-icon>
                    </button>
                  `:""}
            </div>
          `})}
      </div>
    </div>
  `}(l,p,s,e)}
              ${e.renderSliderField((0,n.kg)("editor.animated_forecast.chart_height",p,"Row Height"),"24-120px",l.chart_height||48,48,24,120,4,e=>s({chart_height:e}),"px")}
              ${e.renderSegmentedField((0,n.kg)("editor.animated_forecast.chart_color_mode",p,"Colors"),(0,n.kg)("editor.animated_forecast.chart_color_mode_desc",p,"By Value colors each bar or point by its value: UV by the WHO scale, temperature from blue to red, rain from light to dark blue, wind from green to red."),l.chart_color_mode||"single",[{value:"single",label:(0,n.kg)("editor.animated_forecast.chart_color_single",p,"One Color")},{value:"value",label:(0,n.kg)("editor.animated_forecast.chart_color_value",p,"By Value")}],t=>{s({chart_color_mode:t}),e.triggerPreviewUpdate()})}
              ${"value"===l.chart_color_mode?"":a.qy`<div class="field-title" style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
                ${(0,n.kg)("editor.animated_forecast.chart_color",p,"Chart Color")}
              </div>
              <ultra-color-picker
                .value="${l.chart_color||""}"
                .defaultValue=${"var(--primary-color)"}
                .hass="${r}"
                @value-changed=${t=>{s({chart_color:t.detail.value}),setTimeout(()=>e.triggerPreviewUpdate(),50)}}
              ></ultra-color-picker>`}
            `:""}
      </div>

      <!-- ============================================ -->
      <!-- TEXT SIZES SECTION -->
      <!-- ============================================ -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.animated_forecast.text_sizes.title",p,"📏 Text Sizes")}
        </div>

        <div
          style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;"
        >
          <!-- Forecast Day Size -->
          <div>
            ${e.renderSliderField((0,n.kg)("editor.animated_forecast.forecast_day_size",p,"Forecast Day Name Size"),"10-24px",l.forecast_day_size||14,14,10,24,1,e=>s({forecast_day_size:e}),"px")}
          </div>

          <!-- Forecast Temp Size -->
          <div>
            ${e.renderSliderField((0,n.kg)("editor.animated_forecast.forecast_temp_size",p,"Forecast Temp Size"),"10-24px",l.forecast_temp_size||14,14,10,24,1,e=>s({forecast_temp_size:e}),"px")}
          </div>
        </div>
      </div>

      <!-- ============================================ -->
      <!-- ICON SETTINGS SECTION -->
      <!-- ============================================ -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.animated_forecast.icon_settings.title",p,"🎨 Icon Settings")}
        </div>

        <!-- Forecast Icon Size -->
        ${e.renderSliderField((0,n.kg)("editor.animated_forecast.forecast_icon_size",p,"Forecast Icon Size"),(0,n.kg)("editor.animated_forecast.forecast_icon_size_desc",p,"Size of forecast weather icons (32-80px)"),l.forecast_icon_size||48,48,32,80,4,e=>s({forecast_icon_size:e}),"px")}

        <!-- Icon Style -->
        <div
          class="field-title"
          style="font-size: 16px; font-weight: 600; margin-bottom: 4px; margin-top: 24px;"
        >
          ${(0,n.kg)("editor.animated_forecast.icon_style",p,"Icon Style")}
        </div>
        <div class="field-description" style="font-size: 13px; opacity: 0.7; margin-bottom: 12px;">
          ${(0,n.kg)("editor.animated_forecast.icon_style_desc",p,"Choose between filled or outlined animated icons")}
        </div>
        ${e.renderUcForm(r,{icon_style:l.icon_style||"fill"},[e.selectField("icon_style",[{value:"fill",label:(0,n.kg)("editor.animated_forecast.icon_style_fill",p,"Filled")},{value:"line",label:(0,n.kg)("editor.animated_forecast.icon_style_line",p,"Outlined")}])],t=>{t.detail.value.icon_style!==l.icon_style&&(s(t.detail.value),setTimeout(()=>e.triggerPreviewUpdate(),50))},!1)}
      </div>

      <!-- ============================================ -->
      <!-- COLORS SECTION -->
      <!-- ============================================ -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.animated_forecast.colors.title",p,"🎨 Colors")}
        </div>

        <div
          style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 24px;"
        >
          <!-- Forecast Day Color -->
          <div>
            <div class="field-title" style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
              ${(0,n.kg)("editor.animated_forecast.forecast_day_color",p,"Forecast Day Names")}
            </div>
            <ultra-color-picker
              .value="${l.forecast_day_color||"var(--primary-text-color)"}"
              .hass="${r}"
              @value-changed=${t=>{s({forecast_day_color:t.detail.value}),setTimeout(()=>e.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>

          <!-- Forecast Temp Color -->
          <div>
            <div class="field-title" style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
              ${(0,n.kg)("editor.animated_forecast.forecast_temp_color",p,"Forecast Temps")}
            </div>
            <ultra-color-picker
              .value="${l.forecast_temp_color||"var(--primary-text-color)"}"
              .hass="${r}"
              @value-changed=${t=>{s({forecast_temp_color:t.detail.value}),setTimeout(()=>e.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
        </div>
      </div>

      <!-- ============================================ -->
      <!-- BACKGROUND SECTION -->
      <!-- ============================================ -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.animated_forecast.background.title",p,"🎨 Background")}
        </div>

        <!-- Forecast Background -->
        <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
          ${(0,n.kg)("editor.animated_forecast.forecast_background",p,"Forecast Background")}
        </div>
        <div class="field-description" style="font-size: 13px; opacity: 0.7; margin-bottom: 12px;">
          ${(0,n.kg)("editor.animated_forecast.forecast_background_desc",p,"Background for the forecast section (theme-aware by default)")}
        </div>
        <ultra-color-picker
          .value="${l.forecast_background||"rgba(var(--rgb-primary-text-color), 0.05)"}"
          .hass="${r}"
          @value-changed=${t=>{s({forecast_background:t.detail.value}),setTimeout(()=>e.triggerPreviewUpdate(),50)}}
        ></ultra-color-picker>
      </div>
    </div>
  `}const c=[{value:"precipitation_probability",fallback:"Chance of rain"},{value:"precipitation",fallback:"Rain amount"},{value:"uv_index",fallback:"UV index"},{value:"temperature",fallback:"Temperature"},{value:"wind_speed",fallback:"Wind speed"}];var d=r(2318);const l=[[-10,"#7c3aed"],[0,"#3b82f6"],[10,"#06b6d4"],[18,"#22c55e"],[25,"#eab308"],[30,"#f97316"],[38,"#dc2626"]],p=[[0,"#bfdbfe"],[50,"#3b82f6"],[100,"#1e3a8a"]],u=[[0,"#bfdbfe"],[2.5,"#60a5fa"],[10,"#2563eb"],[25,"#1e3a8a"]],g=[[0,"#86efac"],[20,"#22c55e"],[40,"#eab308"],[60,"#f97316"],[90,"#dc2626"]];function _(e){const t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,255&t]}function m(e,t){if(t<=e[0][0])return e[0][1];const r=e[e.length-1];if(t>=r[0])return r[1];for(let r=1;r<e.length;r++){const[a,o]=e[r];if(t<=a){const[i,n]=e[r-1],s=(t-i)/(a-i),c=_(n),d=_(o),l=c.map((e,t)=>Math.round(e+(d[t]-e)*s));return`rgb(${l[0]}, ${l[1]}, ${l[2]})`}}return r[1]}const f=new Map,h={precipitation_probability:"Chance of rain",precipitation:"Rain amount",uv_index:"UV index",temperature:"Temperature",wind_speed:"Wind speed"};class y extends o.m{constructor(){super(...arguments),this.metadata={type:"animated_forecast",title:"Animated Forecast",description:"Multi-day weather forecast with animated icons",author:"WJD Designs",version:"1.0.0",icon:"mdi:weather-cloudy",category:"content",tags:["weather","forecast","pro","premium","animated"]}}createDefault(e,t){const r=this._findWeatherEntity(t);return{id:e||this.generateId("animated_forecast"),type:"animated_forecast",weather_entity:r,forecast_entity:"",forecast_days:5,allow_wrap:!0,forecast_day_size:14,forecast_temp_size:14,forecast_icon_size:48,icon_style:"fill",text_color:"var(--primary-text-color)",accent_color:"var(--primary-color)",forecast_day_color:"var(--primary-text-color)",forecast_temp_color:"var(--primary-text-color)",forecast_background:"rgba(var(--rgb-primary-text-color), 0.05)",tap_action:void 0,hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}_findWeatherEntity(e){if(!e)return"";const t=Object.keys(e.states).filter(e=>e.startsWith("weather."));return t.length>0?t[0]:""}renderGeneralTab(e,t,r,a){return s(this,e,t,r,a)}renderPreview(e,t,r,o){var n;const s=e,c=s,d=s.design||{},l=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",p={color:s.color||d.color,background_color:s.background_color||d.background_color,background_image:s.background_image||d.background_image,background_image_type:s.background_image_type||d.background_image_type,background_image_entity:s.background_image_entity||d.background_image_entity,background_image_upload:s.background_image_upload||d.background_image_upload,background_image_url:s.background_image_url||d.background_image_url,background_size:s.background_size||d.background_size,background_position:s.background_position||d.background_position,background_repeat:s.background_repeat||d.background_repeat,padding_top:void 0!==d.padding_top?d.padding_top:s.padding_top,padding_bottom:void 0!==d.padding_bottom?d.padding_bottom:s.padding_bottom,padding_left:void 0!==d.padding_left?d.padding_left:s.padding_left,padding_right:void 0!==d.padding_right?d.padding_right:s.padding_right,margin_top:void 0!==d.margin_top?d.margin_top:s.margin_top,margin_bottom:void 0!==d.margin_bottom?d.margin_bottom:s.margin_bottom,margin_left:void 0!==d.margin_left?d.margin_left:s.margin_left,margin_right:void 0!==d.margin_right?d.margin_right:s.margin_right,border_radius:s.border_radius||d.border_radius,border_style:s.border_style||d.border_style,border_width:s.border_width||d.border_width,border_color:s.border_color||d.border_color},u=this._getWeatherData(t,s),g=s.icon_style||"fill";u.temperatureUnit;let _=null,m=null,f=!1,h=0,y=0,v=0,b=0,x=!1;const w=()=>{_&&(clearTimeout(_),_=null)},k=s.tap_action&&"nothing"!==s.tap_action.action||s.hold_action&&"nothing"!==s.hold_action.action||s.double_tap_action&&"nothing"!==s.double_tap_action.action,$=this.buildStyleString(this.buildDesignStyles(e,t)),z=this.getHoverEffectClass(e),S=`box-sizing: border-box; cursor: ${k?"pointer":"default"};`,F=p.color,T=F||s.forecast_day_color||"var(--primary-text-color)",C=F||s.forecast_temp_color||"var(--primary-text-color)";return(p.padding_top||p.padding_bottom||p.padding_left||p.padding_right||c.padding_top||c.padding_bottom||c.padding_left||c.padding_right)&&(this.addPixelUnit(p.padding_top||c.padding_top),this.addPixelUnit(p.padding_right||c.padding_right),this.addPixelUnit(p.padding_bottom||c.padding_bottom),this.addPixelUnit(p.padding_left||c.padding_left)),(p.margin_top||p.margin_bottom||p.margin_left||p.margin_right||c.margin_top||c.margin_bottom||c.margin_left||c.margin_right)&&(p.margin_top||c.margin_top,p.margin_right||c.margin_right,p.margin_bottom||c.margin_bottom,p.margin_left||c.margin_left),p.background_color||c.background_color,this.getBackgroundImageCSS(Object.assign(Object.assign({},c),p),t),p.background_size||c.background_size,p.background_position||c.background_position,p.background_repeat||c.background_repeat,(p.border_style||c.border_style)&&"none"!==(p.border_style||c.border_style)&&(this.addPixelUnit(p.border_width||c.border_width),p.border_style||c.border_style,p.border_color||c.border_color),this.addPixelUnit(p.border_radius||c.border_radius),this.wrapWithAnimation(a.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div
        class="${z}"
        style="${$}; ${S}"
        @pointerdown=${e=>{e.preventDefault(),f=!1,x=!1,v=e.clientX,b=e.clientY,_=setTimeout(()=>{f=!0,s.hold_action&&"nothing"===s.hold_action.action||i.K.handleAction(s.hold_action||{action:"default"},t,e.target,r,s.entity,s)},500)}}
        @pointermove=${e=>{!x&&Math.hypot(e.clientX-v,e.clientY-b)>10&&(x=!0,w())}}
        @pointerup=${e=>{if(e.preventDefault(),w(),x)return;if(f)return void(f=!1);const a=Date.now();a-y<300&&1===h?(m&&(clearTimeout(m),m=null),h=0,s.double_tap_action&&"nothing"===s.double_tap_action.action||i.K.handleAction(s.double_tap_action||{action:"default"},t,e.target,r,s.entity,s)):(h=1,y=a,m=setTimeout(()=>{h=0,s.tap_action&&"nothing"===s.tap_action.action||i.K.handleAction(s.tap_action||{action:"default"},t,e.target,r,s.entity,s)},300))}}
        @pointercancel=${()=>{x=!0,w()}}
      >
        <div
          class="animated-forecast-module-container"
          style="
            --forecast-days: ${u.columns};
            --forecast-visible: ${u.visible||u.columns};
            --forecast-day-size: ${s.forecast_day_size||14}px;
            --forecast-temp-size: ${s.forecast_temp_size||14}px;
            --forecast-icon-size: ${s.forecast_icon_size||48}px;
            --forecast-day-color: ${T};
            --forecast-temp-color: ${C};
            --forecast-background: ${s.forecast_background||"rgba(var(--rgb-primary-text-color), 0.05)"};
            --forecast-allow-wrap: ${!1===s.allow_wrap?"column":"row"};
            overflow: visible;
            max-width: 100%;
            box-sizing: border-box;
          "
        >
        ${this._renderForecastBody(s,t,u,g,l)}
      </div>
    `,e,t)}_renderForecastBody(e,t,r,o,i){if(0===r.slots.length&&!r.openDay)return a.qy`<div class="weather-forecast">
        <div style="text-align: center; opacity: 0.6; padding: 16px; grid-column: 1 / -1;">
          ${(0,n.kg)("editor.animated_forecast.preview.no_data",i,"No forecast data available")}
        </div>
      </div>`;const s="hourly"===r.view,c=!s&&!0===e.day_tap_hourly,l=e=>e.stopPropagation(),p=(t,r)=>{t.stopPropagation(),f.set(e.id,r),this.triggerPreviewUpdate(!0)};return a.qy`
      <div class="weather-forecast ${r.visible?"swipe":""}">
        ${r.openDay?a.qy`
              <div class="forecast-hourly-header" @pointerdown=${l}>
                <button class="forecast-back" type="button" @pointerup=${t=>{t.stopPropagation(),f.set(e.id,null),this.triggerPreviewUpdate(!0)}} @click=${l}>
                  <ha-icon icon="mdi:chevron-left"></ha-icon>
                  ${(0,n.kg)("editor.animated_forecast.back",i,"Back")}
                </button>
                <span class="forecast-hourly-title">
                  ${new Date(`${r.openDay}T12:00:00`).toLocaleDateString(i,{weekday:"long",month:"short",day:"numeric"})}
                </span>
              </div>
            `:a.s6}
        ${0===r.slots.length?a.qy`<div style="text-align: center; opacity: 0.6; padding: 16px; grid-column: 1 / -1;">
              ${(0,n.kg)("editor.animated_forecast.preview.no_hourly",i,"No hourly forecast for this day")}
            </div>`:a.s6}
        ${r.slots.map(t=>{var r;const n=new Date(t.datetime),u=s?function(e,t,r){var a,o,i;if(!r)return e.toLocaleTimeString(t,{hour:"numeric"});try{const r=new Intl.DateTimeFormat(t,{hour:"numeric"}).formatToParts(e),n=null!==(o=null===(a=r.find(e=>"hour"===e.type))||void 0===a?void 0:a.value)&&void 0!==o?o:String(e.getHours()),s=null===(i=r.find(e=>"dayPeriod"===e.type))||void 0===i?void 0:i.value,c=r.findIndex(e=>"dayPeriod"===e.type)<r.findIndex(e=>"hour"===e.type);return s?c?`${s} ${n}`:`${n} ${s}`:n}catch(t){return String(e.getHours())}}(n,i,!0===e.hour_number_only):n.toLocaleDateString(i,{weekday:"short"}),g="number"==typeof t.temperature?Math.round(t.temperature):void 0,_=void 0!==g?Math.round(null!==(r=t.templow)&&void 0!==r?r:t.temperature-10):void 0,m=(0,d.P$)(t.datetime);return a.qy`
            <div
              class="forecast-day ${c?"tappable":""}"
              role=${c?"button":a.s6}
              tabindex=${c?"0":a.s6}
              @pointerdown=${c?l:a.s6}
              @pointerup=${c?e=>p(e,m):a.s6}
              @keydown=${c?e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),p(e,m))}:a.s6}
            >
              <div class="forecast-day-name">${u}</div>
              <img
                src="${this._getWeatherIcon(t.condition||"",o)}"
                alt="${t.condition||""}"
                class="forecast-icon meteocon-icon"
              />
              <div class="forecast-temps">
                <span class="forecast-high">${void 0!==g?`${g}°`:"—"}</span>
                ${s||void 0===_?a.s6:a.qy`<span class="forecast-low">${_}°</span>`}
              </div>
            </div>
          `})}
        ${!0===e.show_chart?this._renderChartRows(e,r.slots,i,r.units):a.s6}
      </div>
    `}_renderChartRows(e,t,r,o){var i;const s=(null===(i=e.chart_metrics)||void 0===i?void 0:i.length)?e.chart_metrics:["precipitation_probability"],c=e.chart_height||48,d=e.chart_color||e.accent_color||"var(--primary-color)",_=e.chart_style||"bar",f="value"===e.chart_color_mode,y=s.map(e=>{const r=t.map(t=>{const r=t[e],a="number"==typeof r?r:"string"==typeof r?parseFloat(r):NaN;return Number.isFinite(a)?a:void 0});return{metric:e,values:r}}).filter(e=>e.values.some(e=>void 0!==e));return 0===y.length?a.s6:a.qy`
      ${y.map(({metric:t,values:i})=>{var s;const y=i.filter(e=>void 0!==e);let v,b=0;"precipitation_probability"===t?v=100:"uv_index"===t?v=Math.max(11,...y):"temperature"===t?(b=Math.min(...y),v=Math.max(...y)):v=Math.max(...y),v<=b&&(v=b+1);const x=e=>Math.max(0,Math.min(1,(e-b)/(v-b))),w=e=>"precipitation_probability"===t?`${Math.round(e)}%`:"temperature"===t?`${Math.round(e)}°`:"precipitation"===t||"uv_index"===t?""+Math.round(10*e)/10:`${Math.round(e)}`,k=(0,n.kg)(`editor.animated_forecast.metric.${t}`,r,h[t]),$=e=>f?function(e,t,r={}){switch(e){case"uv_index":return(i=t)<3?"#4caf50":i<6?"#fdd835":i<8?"#fb8c00":i<11?"#e53935":"#8e24aa";case"temperature":return m(l,(a=t,(o=r.temperature)&&o.includes("F")?5*(a-32)/9:a));case"precipitation_probability":return m(p,t);case"precipitation":return m(u,function(e,t){return t&&t.toLowerCase().startsWith("in")?25.4*e:e}(t,r.precipitation));case"wind_speed":return m(g,function(e,t){switch((t||"km/h").toLowerCase()){case"mph":return 1.609344*e;case"m/s":return 3.6*e;case"kn":case"kt":case"knots":return 1.852*e;case"ft/s":return 1.09728*e;default:return e}}(t,r.wind_speed));default:return"var(--primary-color)"}var a,o,i}(t,e,o):d;if("line"===((null===(s=e.chart_metric_styles)||void 0===s?void 0:s[t])||_)){const r=i.length,o=`uc-fc-${e.id}-${t}`.replace(/[^\w-]/g,"_"),n=f?i.map((e,t)=>void 0===e?a.s6:a.JW`<stop offset=${(t+.5)/r*100+"%"} stop-color=${$(e)}></stop>`):[],s=i.map((e,t)=>void 0===e?null:`${(t+.5)/r*100},${90*(1-x(e))+5}`).filter(Boolean).join(" ");return a.qy`
            <div class="forecast-chart-row" aria-label=${k}>
              <div class="forecast-chart-label">${k}</div>
              <div
                class="forecast-chart-line"
                style="grid-column:1 / -1;height:${c}px;margin:0 -8px;overflow:hidden;"
              >
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  style="display:block;width:100%;height:100%;"
                >
                  ${f?a.JW`<defs><linearGradient id=${o} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0">${n}</linearGradient></defs>`:a.s6}
                  ${a.JW`<polyline points=${s} fill="none" stroke=${f?`url(#${o})`:d} stroke-width="2"
                    vector-effect="non-scaling-stroke" stroke-linejoin="round" stroke-linecap="round"></polyline>`}
                </svg>
              </div>
              ${i.map(e=>a.qy`<div class="forecast-chart-value">${void 0!==e?w(e):""}</div>`)}
            </div>
          `}return a.qy`
          <div class="forecast-chart-row" aria-label=${k}>
            <div class="forecast-chart-label">${k}</div>
            ${i.map(e=>a.qy`
                <div class="forecast-chart-cell">
                  <div class="forecast-chart-track" style="height:${c}px;">
                    ${void 0!==e?a.qy`<div
                          class="forecast-chart-bar"
                          style="height:${Math.max(2,100*x(e))}%;background:${$(e)};"
                        ></div>`:a.s6}
                  </div>
                  <div class="forecast-chart-value">${void 0!==e?w(e):""}</div>
                </div>
              `)}
          </div>
        `})}
    `}objectToStyleString(e){return Object.entries(e).filter(([e,t])=>null!=t&&""!==t).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${t}`).join("; ")}getBackgroundImageCSS(e,t){const r=e.background_image_type||"none";if("entity"===r&&e.background_image_entity&&t){const r=t.states[e.background_image_entity];if(r&&r.attributes.entity_picture)return`url('${r.attributes.entity_picture}')`}else{if("upload"===r&&e.background_image_upload)return`url('${e.background_image_upload}')`;if("url"===r&&e.background_image_url)return`url('${e.background_image_url}')`}return""}_getWeatherData(e,t){var r,a,o,i,n,s,c;const l=e.states[t.weather_entity||""],p=Math.max(3,Math.min(7,t.forecast_days||5)),u=Math.max(3,Math.min(12,t.forecast_hours||8)),g=!0===t.swipe_more,_=()=>this.triggerPreviewUpdate();let m=[];const h=t.forecast_entity?null===(a=null===(r=e.states[t.forecast_entity])||void 0===r?void 0:r.attributes)||void 0===a?void 0:a.forecast:void 0;!(null===(i=null===(o=null==l?void 0:l.attributes)||void 0===o?void 0:o.forecast)||void 0===i?void 0:i.length)&&Array.isArray(h)&&h.length?m=h:t.weather_entity&&(m=(0,d.eq)(e,t.weather_entity,"daily",_));const y="hourly"!==t.forecast_type&&!0===t.day_tap_hourly&&f.get(t.id)||null,v="hourly"===t.forecast_type||y?"hourly":"daily";let b;if("hourly"===v&&t.weather_entity){const r=(0,d.eq)(e,t.weather_entity,"hourly",_),a=Date.now()-36e5,o=r.filter(e=>new Date(e.datetime).getTime()>=a);b=(y?o.filter(e=>(0,d.P$)(e.datetime)===y):o).slice(0,g?48:u)}else b=m.slice(0,g?14:p);const x=(null===(n=null==l?void 0:l.attributes)||void 0===n?void 0:n.temperature_unit)||"°F",w="hourly"===v?u:p;return{slots:b,view:v,openDay:y,columns:Math.max(1,b.length||p),visible:g&&b.length>w?w:0,temperatureUnit:x,units:{temperature:x,wind_speed:null===(s=null==l?void 0:l.attributes)||void 0===s?void 0:s.wind_speed_unit,precipitation:null===(c=null==l?void 0:l.attributes)||void 0===c?void 0:c.precipitation_unit}}}_getWeatherIcon(e,t="fill"){return`https://cdn.jsdelivr.net/gh/basmilius/weather-icons@dev/production/${t}/svg/${{"clear-night":"clear-night","clear-day":"clear-day",cloudy:"cloudy",exceptional:"not-available",fog:"fog",hail:"hail",lightning:"thunderstorms","lightning-rainy":"thunderstorms-rain",partlycloudy:"partly-cloudy-day","partly-cloudy-night":"partly-cloudy-night",pouring:"extreme-rain",rainy:"rain",snowy:"snow","snowy-rainy":"sleet",sunny:"clear-day",windy:"wind","windy-variant":"extreme-wind"}[e]||"partly-cloudy-day"}.svg`}getStyles(){return`\n      ${o.m.getSliderStyles()}\n      .animated-forecast-module-container {\n        padding: 0;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* ========== FORECAST ========== */\n      .weather-forecast {\n        display: grid;\n        grid-template-columns: repeat(var(--forecast-days, 5), minmax(0, 1fr));\n        grid-auto-flow: var(--forecast-allow-wrap, row);\n        gap: 16px;\n        padding: 20px 16px 16px 16px;\n        background: var(--forecast-background);\n        border-radius: var(--uc-r-12, 12px);\n      }\n\n      /* Swipe for more: columns sized so --forecast-visible fit, the rest scroll sideways.\n         Chart rows are subgrids of this grid, so they scroll with their columns. */\n      .weather-forecast.swipe {\n        grid-template-columns: repeat(\n          var(--forecast-days),\n          calc((100% - (var(--forecast-visible) - 1) * 16px) / var(--forecast-visible))\n        );\n        grid-auto-flow: row;\n        overflow-x: auto;\n        overscroll-behavior-x: contain;\n        scroll-snap-type: x mandatory;\n        scroll-padding-inline: 16px;\n        scrollbar-width: thin;\n        touch-action: pan-x pan-y;\n      }\n\n      .weather-forecast.swipe .forecast-day {\n        scroll-snap-align: start;\n      }\n\n      .weather-forecast.swipe .forecast-chart-label,\n      .weather-forecast.swipe .forecast-hourly-header {\n        justify-self: start;\n        position: sticky;\n        left: 0;\n      }\n\n      .forecast-day {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 8px;\n      }\n\n      .forecast-day-name {\n        font-size: var(--forecast-day-size);\n        font-weight: 600;\n        color: var(--forecast-day-color);\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n      }\n\n      .forecast-icon {\n        width: var(--forecast-icon-size);\n        height: var(--forecast-icon-size);\n      }\n\n      .meteocon-icon {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n      }\n\n      .forecast-temps {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 2px;\n        font-size: var(--forecast-temp-size);\n        color: var(--forecast-temp-color);\n      }\n\n      .forecast-high {\n        font-weight: 600;\n      }\n\n      .forecast-day.tappable {\n        cursor: pointer;\n        border-radius: var(--uc-r-8, 8px);\n        transition: background 0.15s;\n      }\n\n      .forecast-day.tappable:hover,\n      .forecast-day.tappable:focus-visible {\n        background: rgba(var(--rgb-primary-text-color, 127, 127, 127), 0.08);\n        outline: none;\n      }\n\n      .forecast-hourly-header {\n        grid-column: 1 / -1;\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        color: var(--forecast-day-color);\n        font-size: var(--forecast-day-size);\n      }\n\n      .forecast-back {\n        display: inline-flex;\n        align-items: center;\n        gap: 2px;\n        padding: 4px 10px 4px 4px;\n        border: none;\n        border-radius: var(--uc-r-16, 16px);\n        background: rgba(var(--rgb-primary-text-color, 127, 127, 127), 0.1);\n        color: inherit;\n        font: inherit;\n        cursor: pointer;\n      }\n\n      .forecast-back ha-icon {\n        --mdc-icon-size: 18px;\n      }\n\n      .forecast-hourly-title {\n        font-weight: 600;\n      }\n\n      /* Chart rows: a sub-grid so cells line up with the forecast columns */\n      .forecast-chart-row {\n        grid-column: 1 / -1;\n        display: grid;\n        grid-template-columns: repeat(var(--forecast-days, 5), minmax(0, 1fr));\n        grid-template-columns: subgrid;\n        column-gap: 16px;\n        position: relative;\n        row-gap: 2px;\n      }\n\n      .forecast-chart-label {\n        grid-column: 1 / -1;\n        font-size: 11px;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n        color: var(--forecast-day-color);\n        opacity: 0.7;\n      }\n\n      .forecast-chart-cell {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 2px;\n      }\n\n      .forecast-chart-track {\n        width: 100%;\n        max-width: 28px;\n        display: flex;\n        align-items: flex-end;\n        border-radius: var(--uc-r-4, 4px);\n        background: rgba(var(--rgb-primary-text-color, 127, 127, 127), 0.06);\n        overflow: hidden;\n      }\n\n      .forecast-chart-bar {\n        width: 100%;\n        border-radius: var(--uc-r-4, 4px) var(--uc-r-4, 4px) 0 0;\n      }\n\n      /* The line spans every column; widening it by one gap (half on each side) puts point\n         (i + 0.5) / n exactly over column i's centre instead of drifting up to 8px at the ends. */\n      .forecast-chart-line {\n        grid-column: 1 / -1;\n        margin: 0 -8px;\n      }\n\n      .forecast-chart-line svg {\n        width: 100%;\n        height: 100%;\n        display: block;\n        overflow: visible;\n      }\n\n      .forecast-chart-value {\n        font-size: 11px;\n        text-align: center;\n        color: var(--forecast-temp-color);\n        opacity: 0.85;\n      }\n\n      .forecast-low {\n        opacity: 0.7;\n      }\n\n      /* ========== RESPONSIVE ========== */\n      @media (max-width: 768px) {\n        .animated-forecast-module-container {\n          transform: scale(min(1, calc(100vw / 600)));\n          transform-origin: top center;\n        }\n      }\n    `}validate(e){const t=[],r=e;return r.weather_entity||t.push("Weather entity is required for forecast data"),r.forecast_hours&&(r.forecast_hours<3||r.forecast_hours>12)&&t.push("Forecast hours must be between 3 and 12"),r.forecast_days&&(r.forecast_days<3||r.forecast_days>7)&&t.push("Forecast days must be between 3 and 7"),{valid:0===t.length,errors:t}}}},2318(e,t,r){r.d(t,{P$:()=>c,eq:()=>n,z6:()=>s});var a=r(9482);const o=new Map,i={daily:["forecast","forecast_daily","daily","forecasts"],hourly:["forecast_hourly","hourly"]};function n(e,t,r,n=()=>(0,a.dd)({source:"module-update",immediate:!0})){var s,c,d;if(!e||!t)return[];const l=function(e,t){if(e)for(const r of i[t]){const t=e[r];if(Array.isArray(t)&&t.length>0)return t}}(null===(c=null===(s=e.states)||void 0===s?void 0:s[t])||void 0===c?void 0:c.attributes,r);if(l)return l;const p=`${t}|${r}`,u=o.get(p);if(!(u&&Date.now()-u.fetchedAt<9e5)&&!(null==u?void 0:u.fetching)&&e.callWS&&(null===(d=e.states)||void 0===d?void 0:d[t])){const a={slots:(null==u?void 0:u.slots)||[],fetchedAt:(null==u?void 0:u.fetchedAt)||0,fetching:!0};o.set(p,a),e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:r},target:{entity_id:t},return_response:!0}).then(e=>{var r,a;const i=(null===(a=null===(r=null==e?void 0:e.response)||void 0===r?void 0:r[t])||void 0===a?void 0:a.forecast)||[];o.set(p,{slots:i,fetchedAt:Date.now(),fetching:!1}),n()}).catch(()=>{o.set(p,{slots:a.slots,fetchedAt:Date.now(),fetching:!1})})}return(null==u?void 0:u.slots)||[]}function s(e){if(e)for(const t of[...o.keys()])t.startsWith(`${e}|`)&&o.delete(t);else o.clear()}function c(e){const t=new Date(e);if(Number.isNaN(t.getTime()))return"";const r=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${t.getFullYear()}-${r}-${a}`}}};