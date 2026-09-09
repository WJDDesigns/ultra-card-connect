export const __webpack_esm_ids__=[4753];export const __webpack_esm_modules__={7574(e,t,i){i.d(t,{UltraBatteryMonitorModule:()=>h});var r=i(2618),o=i(7475),n=i(766),a=i(6478),s=i(5147),l=i(8938),d=i(6673);i(7921);const c="uc-module-patch-by-id";class h extends o.m{constructor(){super(...arguments),this._readingsMemo=new d.p,this._chargingSensorsMemo=new d.p,this.metadata={type:"battery_monitor",title:"Battery Monitor",description:"Auto-discover battery sensors and highlight low / critical devices with 5 visual styles",author:"WJD Designs",version:"1.0.0",icon:"mdi:battery-alert",category:"data",tags:["battery","monitor","low","critical","devices","health","auto"]},this._expandedEntities=new Set}createDefault(e){return{id:e||this.generateId("battery_monitor"),type:"battery_monitor",discovery_mode:"auto",entities:[],exclude_patterns:[],hidden_entities:[],include_battery_level_attribute:!0,include_binary_sensors:!1,style:"list",title:"Battery Monitor",show_title:!0,max_items:25,show_charging_indicator:!0,show_percentage_value:!0,show_item_border:!0,sort_direction:"lowest_first",critical_threshold:10,low_threshold:25,show_only_below_threshold:!1,critical_color:"",low_color:"",ok_color:"",charging_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=e,i=[...super.validate(e).errors];return"manual"!==t.discovery_mode||t.entities&&0!==t.entities.length||i.push((0,a.kg)("editor.battery_monitor.error_manual_empty","en","Add at least one entity, or switch discovery to Auto or Both.")),{valid:0===i.length,errors:i}}renderActionsTab(e,t,i,r){return s.A.render(e,t,e=>r(e))}renderOtherTab(e,t,i,r){return l.X.render(e,t,e=>r(e))}getStyles(){return`\n      ${o.m.getSliderStyles()}\n      .bm-style-grid {\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n        gap: 10px;\n      }\n      .bm-strip {\n        display: flex;\n        height: 28px;\n        border-radius: var(--uc-r-8, 8px);\n        overflow: hidden;\n        border: 1px solid var(--divider-color);\n      }\n      .bm-strip-seg {\n        flex: 1;\n        min-width: 4px;\n        cursor: pointer;\n        position: relative;\n        transition: opacity 0.15s ease;\n      }\n      .bm-strip-seg .uc-bm-remove {\n        position: absolute;\n        top: 2px;\n        right: 2px;\n        margin: 0;\n        padding: 0;\n        z-index: 1;\n      }\n      .bm-strip-seg:hover {\n        opacity: 0.85;\n        filter: brightness(1.08);\n      }\n      .uc-bm-remove {\n        flex-shrink: 0;\n        cursor: pointer;\n        color: var(--error-color);\n        --mdc-icon-size: 18px;\n        padding: 4px;\n        margin-left: 4px;\n      }\n    `}renderGeneralTab(e,t,i,o){var s,l,d,c;const h=e,g=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en";return r.qy`
      ${this.injectUcFormStyles()}
      <style>
        .settings-section {
          background: var(--secondary-background-color);
          border-radius: var(--uc-r-8, 8px);
          padding: 16px;
          margin-bottom: 24px;
        }
        .section-title {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary-color);
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 2px solid var(--primary-color);
          letter-spacing: 0.5px;
        }
        .style-switcher {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 8px;
          margin-bottom: 8px;
        }
        .style-btn {
          padding: 12px 8px;
          border: 2px solid var(--divider-color);
          border-radius: var(--uc-r-12, 12px);
          background: var(--uc-pane-bg, var(--card-background-color));
          cursor: pointer;
          text-align: center;
          transition: all 0.2s ease;
        }
        .style-btn:hover {
          border-color: var(--primary-color);
        }
        .style-btn.active {
          border-color: var(--primary-color);
          background: rgba(var(--rgb-primary-color), 0.08);
        }
        .style-btn ha-icon {
          display: block;
          margin: 0 auto 6px;
          color: var(--primary-color);
          --mdc-icon-size: 26px;
        }
        .style-btn .st-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-text-color);
        }
        .style-btn .st-desc {
          font-size: 10px;
          color: var(--secondary-text-color);
          margin-top: 4px;
          line-height: 1.2;
        }
        .domain-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
          min-height: 32px;
        }
        .domain-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--primary-color);
          color: var(--text-primary-color);
          border-radius: var(--uc-r-16, 16px);
          font-size: 13px;
          position: relative;
        }
        .domain-chip.exclude {
          background: var(--error-color);
        }
        .domain-chip:hover {
          padding-right: 28px;
        }
        .domain-chip .chip-remove {
          cursor: pointer;
          font-size: 16px;
          opacity: 0;
          position: absolute;
          right: 8px;
          transition: opacity 0.2s ease;
        }
        .domain-chip:hover .chip-remove {
          opacity: 1;
        }
        .domain-input-row {
          display: flex;
          gap: 8px;
          margin-top: 8px;
        }
        .domain-input {
          flex: 1;
          padding: 8px;
          border: 1px solid var(--divider-color);
          border-radius: var(--uc-r-4, 4px);
          background: var(--secondary-background-color);
          color: var(--primary-text-color);
          font-size: 14px;
        }
        .add-btn {
          padding: 8px 16px;
          background: var(--primary-color);
          color: var(--text-primary-color);
          border: none;
          border-radius: var(--uc-r-8, 8px);
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .add-btn.full-width {
          width: 100%;
          justify-content: center;
          padding: 12px;
          margin-top: 8px;
        }
        .entity-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          background: var(--uc-pane-bg, var(--card-background-color));
          border-radius: var(--uc-r-8, 8px);
          margin-bottom: 8px;
          border: 1px solid var(--divider-color);
        }
        .entity-info {
          flex: 1;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .entity-info.empty {
          color: var(--secondary-text-color);
          font-style: italic;
        }
        .expand-icon {
          cursor: pointer;
          color: var(--primary-color);
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }
        .expand-icon.expanded {
          transform: rotate(180deg);
        }
        .delete-icon {
          cursor: pointer;
          color: var(--error-color);
          flex-shrink: 0;
        }
        .entity-settings {
          padding: 16px;
          background: rgba(var(--rgb-primary-color), 0.05);
          border-left: 3px solid var(--primary-color);
          border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;
          margin-bottom: 8px;
        }
      </style>

      <div class="module-settings">
        <div class="settings-section">
          <div class="section-title">
            ${(0,a.kg)("editor.battery_monitor.section_style",g,"Style")}
          </div>
          ${this.renderSegmentedField("","",h.style||"list",[{value:"list",label:(0,a.kg)("editor.battery_monitor.style_list",g,"List"),icon:"mdi:format-list-bulleted"},{value:"bars",label:(0,a.kg)("editor.battery_monitor.style_bars",g,"Bars"),icon:"mdi:chart-bar"},{value:"cards",label:(0,a.kg)("editor.battery_monitor.style_cards",g,"Cards"),icon:"mdi:view-grid"},{value:"rings",label:(0,a.kg)("editor.battery_monitor.style_rings",g,"Rings"),icon:"mdi:circle-outline"},{value:"strip",label:(0,a.kg)("editor.battery_monitor.style_strip",g,"Strip"),icon:"mdi:palette-swatch-horizontal"}],e=>{o({style:e}),this.triggerPreviewUpdate()})}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,a.kg)("editor.battery_monitor.section_display",g,"Display")}
          </div>
          ${n.U.renderFieldSection((0,a.kg)("editor.battery_monitor.title",g,"Title"),(0,a.kg)("editor.battery_monitor.title_desc",g,"Header above the list."),t,{title:h.title||"Battery Monitor"},[n.U.text("title")],e=>{o({title:e.detail.value.title}),this.triggerPreviewUpdate()})}
          ${this.renderSettingsSection("","",[{title:(0,a.kg)("editor.battery_monitor.show_title",g,"Show title"),description:(0,a.kg)("editor.battery_monitor.show_title_desc",g,"Display header."),hass:t,data:{show_title:!1!==h.show_title},schema:[this.booleanField("show_title")],onChange:e=>{o({show_title:e.detail.value.show_title}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.battery_monitor.show_charging",g,"Show charging indicator"),description:(0,a.kg)("editor.battery_monitor.show_charging_desc",g,"When a charging binary_sensor is found."),hass:t,data:{show_charging_indicator:!1!==h.show_charging_indicator},schema:[this.booleanField("show_charging_indicator")],onChange:e=>{o({show_charging_indicator:e.detail.value.show_charging_indicator}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.battery_monitor.show_pct",g,"Show percentage"),description:(0,a.kg)("editor.battery_monitor.show_pct_desc",g,"Show numeric % next to each device."),hass:t,data:{show_percentage_value:!1!==h.show_percentage_value},schema:[this.booleanField("show_percentage_value")],onChange:e=>{o({show_percentage_value:e.detail.value.show_percentage_value}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.battery_monitor.show_item_border",g,"Show item border"),description:(0,a.kg)("editor.battery_monitor.show_item_border_desc",g,"Draw a 1px border around each device tile. Turn off for a borderless look."),hass:t,data:{show_item_border:!1!==h.show_item_border},schema:[this.booleanField("show_item_border")],onChange:e=>{o({show_item_border:e.detail.value.show_item_border}),this.triggerPreviewUpdate()}}])}
          ${this.renderSliderField((0,a.kg)("editor.battery_monitor.max_items",g,"Max items"),(0,a.kg)("editor.battery_monitor.max_items_desc",g,"Maximum devices to show."),null!==(l=h.max_items)&&void 0!==l?l:25,25,5,100,1,e=>{o({max_items:e}),this.triggerPreviewUpdate()},"")}
          ${this.renderFieldSection((0,a.kg)("editor.battery_monitor.sort",g,"Sort"),(0,a.kg)("editor.battery_monitor.sort_desc",g,"Order of devices."),t,{sort_direction:h.sort_direction||"lowest_first"},[this.selectField("sort_direction",[{value:"lowest_first",label:(0,a.kg)("editor.battery_monitor.sort_low",g,"Lowest first")},{value:"highest_first",label:(0,a.kg)("editor.battery_monitor.sort_high",g,"Highest first")},{value:"name",label:(0,a.kg)("editor.battery_monitor.sort_name",g,"Name A–Z")},{value:"unchanged",label:(0,a.kg)("editor.battery_monitor.sort_raw",g,"Unchanged")}])],e=>{o({sort_direction:e.detail.value.sort_direction}),this.triggerPreviewUpdate()})}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,a.kg)("editor.battery_monitor.section_thresholds",g,"Thresholds")}
          </div>
          ${this.renderSliderField((0,a.kg)("editor.battery_monitor.critical",g,"Critical threshold"),(0,a.kg)("editor.battery_monitor.critical_desc",g,"At or below this % uses critical color."),null!==(d=h.critical_threshold)&&void 0!==d?d:10,10,0,50,1,e=>{o({critical_threshold:e}),this.triggerPreviewUpdate()},"%")}
          ${this.renderSliderField((0,a.kg)("editor.battery_monitor.low",g,"Low threshold"),(0,a.kg)("editor.battery_monitor.low_desc",g,"At or below this % uses low color (above critical)."),null!==(c=h.low_threshold)&&void 0!==c?c:25,25,0,100,1,e=>{o({low_threshold:e}),this.triggerPreviewUpdate()},"%")}
          ${this.renderSettingsSection("","",[{title:(0,a.kg)("editor.battery_monitor.only_low",g,"Show only below low threshold"),description:(0,a.kg)("editor.battery_monitor.only_low_desc",g,"Hide devices above the low threshold."),hass:t,data:{show_only_below_threshold:!!h.show_only_below_threshold},schema:[this.booleanField("show_only_below_threshold")],onChange:e=>{o({show_only_below_threshold:e.detail.value.show_only_below_threshold}),this.triggerPreviewUpdate()}}])}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,a.kg)("editor.battery_monitor.section_source",g,"Entity source")}
          </div>
          ${this.renderFieldSection((0,a.kg)("editor.battery_monitor.discovery_mode",g,"Discovery mode"),(0,a.kg)("editor.battery_monitor.discovery_mode_desc",g,"Auto scans Home Assistant; manual uses the list below; both merges them."),t,{discovery_mode:h.discovery_mode||"auto"},[this.selectField("discovery_mode",[{value:"auto",label:(0,a.kg)("editor.battery_monitor.mode_auto",g,"Auto")},{value:"manual",label:(0,a.kg)("editor.battery_monitor.mode_manual",g,"Manual")},{value:"both",label:(0,a.kg)("editor.battery_monitor.mode_both",g,"Both")}])],e=>{o({discovery_mode:e.detail.value.discovery_mode}),this.triggerPreviewUpdate()})}
          ${"manual"!==h.discovery_mode?this.renderSettingsSection("","",[{title:(0,a.kg)("editor.battery_monitor.include_bl_attr",g,"Include battery_level attribute"),description:(0,a.kg)("editor.battery_monitor.include_bl_attr_desc",g,"Vacuums, trackers, phones, etc."),hass:t,data:{include_battery_level_attribute:!1!==h.include_battery_level_attribute},schema:[this.booleanField("include_battery_level_attribute")],onChange:e=>{o({include_battery_level_attribute:e.detail.value.include_battery_level_attribute}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.battery_monitor.include_bin",g,"Include binary_sensor battery"),description:(0,a.kg)("editor.battery_monitor.include_bin_desc",g,"Maps on=low / off=ok for device_class battery."),hass:t,data:{include_binary_sensors:!!h.include_binary_sensors},schema:[this.booleanField("include_binary_sensors")],onChange:e=>{o({include_binary_sensors:e.detail.value.include_binary_sensors}),this.triggerPreviewUpdate()}}]):r.s6}
          ${"manual"!==h.discovery_mode?this._renderPatternChips(h,o,g):r.s6}
          ${"manual"!==h.discovery_mode?this._renderHiddenChips(h,o,g):r.s6}

          ${"auto"!==h.discovery_mode?r.qy`
                <div style="margin-top: 16px; font-size: 14px; font-weight: 600; margin-bottom: 8px;">
                  ${(0,a.kg)("editor.battery_monitor.manual_entities",g,"Manual entities")}
                </div>
                <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 12px;">
                  ${(0,a.kg)("editor.battery_monitor.manual_entities_desc",g,"Pick entities to include. Expand a row for overrides.")}
                </div>
                ${(h.entities||[]).map((e,i)=>this._renderEntityRow(e,i,h,t,o,g))}
                <button
                  class="add-btn full-width"
                  @click=${()=>{const e=[...h.entities||[]],t={id:this.generateId("bm_ent"),entity:""};e.push(t),o({entities:e}),this._expandedEntities.add(t.id),this.triggerPreviewUpdate()}}
                >
                  <ha-icon icon="mdi:plus"></ha-icon>
                  ${(0,a.kg)("editor.battery_monitor.add_entity",g,"Add entity")}
                </button>
              `:r.s6}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,a.kg)("editor.battery_monitor.section_colors",g,"Colors")}
          </div>
          ${[["critical_color","editor.battery_monitor.color_critical","Critical","var(--error-color)"],["low_color","editor.battery_monitor.color_low","Low","var(--warning-color)"],["ok_color","editor.battery_monitor.color_ok","OK","var(--success-color)"],["charging_color","editor.battery_monitor.color_charging","Charging","var(--info-color)"],["text_color","editor.battery_monitor.color_text","Text","var(--primary-text-color)"],["secondary_text_color","editor.battery_monitor.color_secondary","Secondary text","var(--secondary-text-color)"],["card_background_color","editor.battery_monitor.color_card_bg","Card background","var(--card-background-color)"]].map(([e,i,n,s])=>r.qy`
              <div style="margin-bottom: 16px;">
                <ultra-color-picker
                  .label=${(0,a.kg)(i,g,n)}
                  .value=${h[e]||""}
                  .defaultValue=${s}
                  .hass=${t}
                  @value-changed=${t=>{o({[e]:t.detail.value}),this.triggerPreviewUpdate()}}
                ></ultra-color-picker>
              </div>
            `)}
        </div>
      </div>
    `}_renderPatternChips(e,t,i){return r.qy`
      <div style="margin-top: 16px;">
        <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
          ${(0,a.kg)("editor.battery_monitor.exclude_patterns",i,"Exclude patterns")}
        </div>
        <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
          ${(0,a.kg)("editor.battery_monitor.exclude_patterns_desc",i,"Entity ids containing these substrings are ignored.")}
        </div>
        <div class="domain-chips">
          ${(e.exclude_patterns||[]).map(i=>r.qy`
              <span class="domain-chip exclude">
                ${i}
                <ha-icon
                  icon="mdi:close"
                  class="chip-remove"
                  @click=${()=>{t({exclude_patterns:(e.exclude_patterns||[]).filter(e=>e!==i)}),this.triggerPreviewUpdate()}}
                ></ha-icon>
              </span>
            `)}
        </div>
        <div class="domain-input-row">
          <input
            type="text"
            class="domain-input"
            placeholder=${(0,a.kg)("editor.battery_monitor.pattern_ph",i,"e.g. test, backup")}
            @keydown=${i=>{if("Enter"===i.key){const r=i.target,o=r.value.trim().toLowerCase();o&&!(e.exclude_patterns||[]).includes(o)&&(t({exclude_patterns:[...e.exclude_patterns||[],o]}),r.value="",this.triggerPreviewUpdate())}}}
          />
          <button
            class="add-btn"
            @click=${i=>{const r=i.target.closest(".domain-input-row"),o=null==r?void 0:r.querySelector("input"),n=null==o?void 0:o.value.trim().toLowerCase();n&&!(e.exclude_patterns||[]).includes(n)&&(t({exclude_patterns:[...e.exclude_patterns||[],n]}),o.value="",this.triggerPreviewUpdate())}}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
      </div>
    `}_renderHiddenChips(e,t,i){return r.qy`
      <div style="margin-top: 24px;">
        <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
          ${(0,a.kg)("editor.battery_monitor.hidden_entities",i,"Hidden entities")}
        </div>
        <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
          ${(0,a.kg)("editor.battery_monitor.hidden_entities_desc",i,"Removed from auto-discovery; click × to show again.")}
        </div>
        <div class="domain-chips">
          ${(e.hidden_entities||[]).map(i=>r.qy`
              <span class="domain-chip">
                ${i}
                <ha-icon
                  icon="mdi:close"
                  class="chip-remove"
                  @click=${()=>{t({hidden_entities:(e.hidden_entities||[]).filter(e=>e!==i)}),this.triggerPreviewUpdate()}}
                ></ha-icon>
              </span>
            `)}
        </div>
      </div>
    `}_renderEntityRow(e,t,i,o,s,l){var d,c,h,g,_;const p=this._expandedEntities.has(e.id);return r.qy`
      <div class="entity-row">
        <div class="entity-info ${e.entity?"":"empty"}">
          ${e.entity||(0,a.kg)("editor.battery_monitor.no_entity",l,"No entity selected")}
        </div>
        <ha-icon
          icon="mdi:chevron-down"
          class="expand-icon ${p?"expanded":""}"
          @click=${()=>{this._expandedEntities.has(e.id)?this._expandedEntities.delete(e.id):this._expandedEntities.add(e.id),this.triggerPreviewUpdate()}}
        ></ha-icon>
        <ha-icon
          icon="mdi:delete"
          class="delete-icon"
          @click=${()=>{const r=[...i.entities||[]];r.splice(t,1),this._expandedEntities.delete(e.id),s({entities:r}),this.triggerPreviewUpdate()}}
        ></ha-icon>
      </div>
      ${p?r.qy`
            <div class="entity-settings">
              ${n.U.renderFieldSection((0,a.kg)("editor.battery_monitor.entity",(null===(d=null==o?void 0:o.locale)||void 0===d?void 0:d.language)||"en","Entity"),(0,a.kg)("editor.battery_monitor.entity_desc",(null===(c=null==o?void 0:o.locale)||void 0===c?void 0:c.language)||"en","Battery or related sensor."),o,{entity:e.entity||""},[n.U.entity("entity")],e=>{const r=[...i.entities||[]];r[t]=Object.assign(Object.assign({},r[t]),{entity:e.detail.value.entity}),s({entities:r}),this.triggerPreviewUpdate()})}
              ${n.U.renderFieldSection((0,a.kg)("editor.battery_monitor.label_override",(null===(h=null==o?void 0:o.locale)||void 0===h?void 0:h.language)||"en","Label override"),"",o,{label:e.label||""},[n.U.text("label")],e=>{const r=[...i.entities||[]];r[t]=Object.assign(Object.assign({},r[t]),{label:e.detail.value.label}),s({entities:r}),this.triggerPreviewUpdate()})}
              ${n.U.renderFieldSection((0,a.kg)("editor.battery_monitor.icon_override",(null===(g=null==o?void 0:o.locale)||void 0===g?void 0:g.language)||"en","Icon override"),"",o,{icon:e.icon||""},[n.U.icon("icon")],e=>{const r=[...i.entities||[]];r[t]=Object.assign(Object.assign({},r[t]),{icon:e.detail.value.icon}),s({entities:r}),this.triggerPreviewUpdate()})}
              <div style="margin-bottom: 16px;">
                <ultra-color-picker
                  .label=${(0,a.kg)("editor.battery_monitor.row_color",(null===(_=null==o?void 0:o.locale)||void 0===_?void 0:_.language)||"en","Row color override")}
                  .value=${e.color||""}
                  .defaultValue=${""}
                  .hass=${o}
                  @value-changed=${e=>{const r=[...i.entities||[]];r[t]=Object.assign(Object.assign({},r[t]),{color:e.detail.value}),s({entities:r}),this.triggerPreviewUpdate()}}
                ></ultra-color-picker>
              </div>
            </div>
          `:""}
    `}renderPreview(e,t,i,o){var n,s,l;const d=e,c=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",h=this.buildStyleString(this.buildDesignStyles(e,t)),g=this.getHoverEffectClass(e);if(!(null==t?void 0:t.states))return this.renderGradientErrorState((0,a.kg)("editor.battery_monitor.err_ha",c,"Waiting for Home Assistant"),(0,a.kg)("editor.battery_monitor.err_ha_desc",c,"Connecting to entity states…"),"mdi:loading");const _=this._collectReadings(d,t,!0);if(0===_.length)return this.renderGradientErrorState((0,a.kg)("editor.battery_monitor.err_empty",c,"No batteries found"),(0,a.kg)("editor.battery_monitor.err_empty_desc",c,"Adjust discovery mode, manual entities, or thresholds in the General tab."),"mdi:battery-off");const p=null!==(s=d.critical_threshold)&&void 0!==s?s:10,v=null!==(l=d.low_threshold)&&void 0!==l?l:25,u=d.critical_color||"var(--error-color)",m=d.low_color||"var(--warning-color)",y=d.ok_color||"var(--success-color)",b=d.charging_color||"var(--info-color)",x=d.text_color||"var(--primary-text-color)",w=d.secondary_text_color||"var(--secondary-text-color)",f=d.card_background_color||"var(--uc-pane-bg, var(--card-background-color))",$="live"===o,k="list"===d.style?this._renderList(d,_,t,i,{crit:p,low:v,cCrit:u,cLow:m,cOk:y,cChg:b,text:x,secondary:w,cardBg:f,lang:c,showDel:$}):"bars"===d.style?this._renderBars(d,_,t,i,{crit:p,low:v,cCrit:u,cLow:m,cOk:y,cChg:b,text:x,secondary:w,cardBg:f,lang:c,showDel:$}):"cards"===d.style?this._renderCards(d,_,t,i,{crit:p,low:v,cCrit:u,cLow:m,cOk:y,cChg:b,text:x,secondary:w,cardBg:f,lang:c,showDel:$}):"rings"===d.style?this._renderRings(d,_,t,i,{crit:p,low:v,cCrit:u,cLow:m,cOk:y,cChg:b,text:x,secondary:w,cardBg:f,lang:c,showDel:$}):this._renderStrip(d,_,t,i,{crit:p,low:v,cCrit:u,cLow:m,cOk:y,cChg:b,text:x,secondary:w,cardBg:f,lang:c,showDel:$});return r.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div class="bm-root ${g}" style="${h}">
        ${this.wrapWithAnimation(r.qy`
            ${!1!==d.show_title?r.qy`<div class="bm-title" style="color:${x};font-weight:700;margin-bottom:10px;">
                  ${d.title||(0,a.kg)("editor.battery_monitor.default_title",c,"Battery Monitor")}
                </div>`:r.s6}
            ${k}
          `,e,t)}
      </div>
    `}_palette(e,t,i,r,o,n,a,s,l){return i?e.charging_color||l:t<=r?e.critical_color||n:t<=o?e.low_color||a:e.ok_color||s}_renderRemove(e,t,i,o){if(!i)return r.qy``;const n=!!(e.entities||[]).some(e=>e.entity===t.entityId);return"auto"===e.discovery_mode&&n?r.qy``:"manual"!==e.discovery_mode||n?r.qy`
      <ha-icon
        class="uc-bm-remove"
        icon="mdi:close"
        title=${(0,a.kg)("editor.battery_monitor.preview_remove",o,"Remove from list")}
        @click=${i=>{if(i.preventDefault(),i.stopPropagation(),n)window.dispatchEvent(new CustomEvent(c,{bubbles:!0,composed:!0,detail:{moduleId:e.id,updates:{entities:(e.entities||[]).filter(e=>e.entity!==t.entityId)}}}));else{const i=[...e.hidden_entities||[]];i.includes(t.entityId)||i.push(t.entityId),window.dispatchEvent(new CustomEvent(c,{bubbles:!0,composed:!0,detail:{moduleId:e.id,updates:{hidden_entities:i}}}))}this.triggerPreviewUpdate(!0)}}
      ></ha-icon>
    `:r.qy``}_rowGestures(e,t,i,r,o){var n;return this.createGestureHandlers(`${e.id}-${t.entityId}-${o}`,{tap_action:(null===(n=e.tap_action)||void 0===n?void 0:n.action)?Object.assign(Object.assign({},e.tap_action),{entity:t.entityId}):{action:"more-info",entity:t.entityId},hold_action:e.hold_action,double_tap_action:e.double_tap_action,entity:t.entityId,module:e},i,r,[".uc-bm-remove"])}_renderList(e,t,i,o,n){const a=!1!==e.show_item_border?"border:1px solid var(--divider-color);":"";return r.qy`
      <div class="bm-list" style="display:flex;flex-direction:column;gap:8px;">
        ${t.map(t=>{var s,l;const d=this._palette(e,t.value,t.charging,n.crit,n.low,n.cCrit,n.cLow,n.cOk,n.cChg),c=(null===(s=t.manual)||void 0===s?void 0:s.color)||d,h=this._rowGestures(e,t,i,o,"list");return r.qy`
            <div
              data-uc-role="pane"
              style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:var(--uc-r-10, 10px);background:${n.cardBg};${a}"
              @pointerdown=${h.onPointerDown}
              @pointermove=${h.onPointerMove}
              @pointerup=${h.onPointerUp}
              @pointerleave=${h.onPointerLeave}
              @pointercancel=${h.onPointerCancel}
            >
              <ha-icon
                icon=${(null===(l=t.manual)||void 0===l?void 0:l.icon)||t.icon}
                style="color:${c};--mdc-icon-size:28px;flex-shrink:0;"
              ></ha-icon>
              <div style="flex:1;min-width:0;">
                <div style="color:${n.text};font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                  ${t.name}
                  ${!1!==e.show_charging_indicator&&t.charging?r.qy`<span style="color:${n.cChg};font-size:11px;margin-left:6px;">⚡</span>`:r.s6}
                </div>
                <div
                  style="height:6px;border-radius:var(--uc-r-4, 4px);background:rgba(127,127,127,0.25);margin-top:6px;overflow:hidden;"
                >
                  <div
                    style="width:${Math.max(0,Math.min(100,t.value))}%;height:100%;background:${c};"
                  ></div>
                </div>
              </div>
              ${!1!==e.show_percentage_value?r.qy`<div style="color:${n.secondary};font-size:13px;font-weight:600;flex-shrink:0;">
                    ${Math.round(t.value)}%
                  </div>`:r.s6}
              ${this._renderRemove(e,t,n.showDel,n.lang)}
            </div>
          `})}
      </div>
    `}_renderBars(e,t,i,o,n){const a=!1!==e.show_item_border?"border:1px solid var(--divider-color);":"";return r.qy`
      <div style="display:flex;flex-direction:column;gap:14px;">
        ${t.map(t=>{var s,l;const d=this._palette(e,t.value,t.charging,n.crit,n.low,n.cCrit,n.cLow,n.cOk,n.cChg),c=(null===(s=t.manual)||void 0===s?void 0:s.color)||d,h=this._rowGestures(e,t,i,o,"bar");return r.qy`
            <div
              data-uc-role="pane"
              style="padding:10px;border-radius:var(--uc-r-10, 10px);background:${n.cardBg};${a}"
              @pointerdown=${h.onPointerDown}
              @pointermove=${h.onPointerMove}
              @pointerup=${h.onPointerUp}
              @pointerleave=${h.onPointerLeave}
              @pointercancel=${h.onPointerCancel}
            >
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
                <span style="color:${n.text};font-weight:600;font-size:14px;display:flex;align-items:center;gap:6px;">
                  <ha-icon icon=${(null===(l=t.manual)||void 0===l?void 0:l.icon)||t.icon} style="color:${c};--mdc-icon-size:22px;"></ha-icon>
                  ${t.name}
                  ${!1!==e.show_charging_indicator&&t.charging?r.qy`<span style="color:${n.cChg};">⚡</span>`:r.s6}
                </span>
                <span style="display:flex;align-items:center;gap:4px;">
                  ${!1!==e.show_percentage_value?r.qy`<span style="color:${n.secondary};font-weight:700;">${Math.round(t.value)}%</span>`:r.s6}
                  ${this._renderRemove(e,t,n.showDel,n.lang)}
                </span>
              </div>
              <div style="height:14px;border-radius:var(--uc-r-8, 8px);background:rgba(127,127,127,0.25);overflow:hidden;">
                <div
                  style="width:${Math.max(0,Math.min(100,t.value))}%;height:100%;background:${c};"
                ></div>
              </div>
            </div>
          `})}
      </div>
    `}_renderCards(e,t,i,o,n){const a=!1!==e.show_item_border;return r.qy`
      <div class="bm-style-grid">
        ${t.map(t=>{var s,l;const d=this._palette(e,t.value,t.charging,n.crit,n.low,n.cCrit,n.cLow,n.cOk,n.cChg),c=(null===(s=t.manual)||void 0===s?void 0:s.color)||d,h=this._rowGestures(e,t,i,o,"card"),g=a?`border:1px solid ${c}55;`:"";return r.qy`
            <div
              style="position:relative;padding:14px;border-radius:var(--uc-r-12, 12px);background:${c}22;${g}text-align:center;"
              @pointerdown=${h.onPointerDown}
              @pointermove=${h.onPointerMove}
              @pointerup=${h.onPointerUp}
              @pointerleave=${h.onPointerLeave}
              @pointercancel=${h.onPointerCancel}
            >
              <div style="position:absolute;top:6px;right:6px;">
                ${this._renderRemove(e,t,n.showDel,n.lang)}
              </div>
              <ha-icon
                icon=${(null===(l=t.manual)||void 0===l?void 0:l.icon)||t.icon}
                style="color:${c};--mdc-icon-size:36px;margin-bottom:8px;"
              ></ha-icon>
              ${!1!==e.show_percentage_value?r.qy`<div style="font-size:26px;font-weight:800;color:${n.text};">${Math.round(t.value)}%</div>`:r.s6}
              <div style="font-size:12px;color:${n.secondary};margin-top:6px;line-height:1.2;">
                ${t.name}
              </div>
              ${!1!==e.show_charging_indicator&&t.charging?r.qy`<div style="color:${n.cChg};font-size:11px;margin-top:4px;">⚡</div>`:r.s6}
            </div>
          `})}
      </div>
    `}_renderRings(e,t,i,o,n){const a=2*Math.PI*36,s=!1!==e.show_item_border?"border:1px solid var(--divider-color);":"";return r.qy`
      <div class="bm-style-grid">
        ${t.map(t=>{var l;const d=this._palette(e,t.value,t.charging,n.crit,n.low,n.cCrit,n.cLow,n.cOk,n.cChg),c=(null===(l=t.manual)||void 0===l?void 0:l.color)||d,h=Math.max(0,Math.min(100,t.value))/100*a,g=this._rowGestures(e,t,i,o,"ring");return r.qy`
            <div
              data-uc-role="pane"
              style="text-align:center;padding:10px;border-radius:var(--uc-r-12, 12px);background:${n.cardBg};${s}position:relative;"
              @pointerdown=${g.onPointerDown}
              @pointermove=${g.onPointerMove}
              @pointerup=${g.onPointerUp}
              @pointerleave=${g.onPointerLeave}
              @pointercancel=${g.onPointerCancel}
            >
              <div style="position:absolute;top:4px;right:4px;">
                ${this._renderRemove(e,t,n.showDel,n.lang)}
              </div>
              <svg viewBox="0 0 ${100} ${100}" style="width:88px;height:88px;margin:0 auto;display:block;">
                <circle
                  cx="50"
                  cy="50"
                  r="${36}"
                  fill="none"
                  stroke="rgba(127,127,127,0.25)"
                  stroke-width="${8}"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="${36}"
                  fill="none"
                  stroke="${c}"
                  stroke-width="${8}"
                  stroke-dasharray="${h} ${a}"
                  stroke-linecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              ${!1!==e.show_percentage_value?r.qy`<div style="font-weight:800;font-size:15px;color:${n.text};margin-top:4px;">
                    ${Math.round(t.value)}%
                  </div>`:r.s6}
              <div style="font-size:11px;color:${n.secondary};margin-top:6px;line-height:1.2;min-height:2.4em;">
                ${t.name}
              </div>
              ${!1!==e.show_charging_indicator&&t.charging?r.qy`<div style="color:${n.cChg};font-size:10px;">⚡</div>`:r.s6}
            </div>
          `})}
      </div>
    `}_renderStrip(e,t,i,o,n){return r.qy`
      <div>
        <div class="bm-strip" style="margin-bottom:12px;">
          ${t.map(t=>{var a;const s=this._palette(e,t.value,t.charging,n.crit,n.low,n.cCrit,n.cLow,n.cOk,n.cChg),l=(null===(a=t.manual)||void 0===a?void 0:a.color)||s,d=this._rowGestures(e,t,i,o,"strip");return r.qy`
              <div
                class="bm-strip-seg"
                style="background:${l};"
                title="${t.name} — ${Math.round(t.value)}%"
                @pointerdown=${d.onPointerDown}
                @pointermove=${d.onPointerMove}
                @pointerup=${d.onPointerUp}
                @pointerleave=${d.onPointerLeave}
                @pointercancel=${d.onPointerCancel}
              >
                ${this._renderRemove(e,t,n.showDel,n.lang)}
              </div>
            `})}
        </div>
        <div style="font-size:12px;color:${n.secondary};">
          ${(0,a.kg)("editor.battery_monitor.strip_hint",n.lang,"Tap a segment for more-info. Colors reflect battery level.")}
        </div>
      </div>
    `}_makeReading(e,t,i,r,o,n){var a,s;const l=!!n&&this._isCharging(t,o,e);return{entityId:t,name:(null==r?void 0:r.label)||(null===(a=e.attributes)||void 0===a?void 0:a.friendly_name)||t,icon:(null==r?void 0:r.icon)||(null===(s=e.attributes)||void 0===s?void 0:s.icon)||"mdi:battery",value:i,charging:l,manual:r}}_isCharging(e,t,i){var r;const o=i.attributes;if(!0===(null==o?void 0:o.charging)||!0===(null==o?void 0:o.is_charging))return!0;const n=this._findChargingBinarySensor(e,t);return!!n&&"on"===(null===(r=t.states[n])||void 0===r?void 0:r.state)}_findChargingBinarySensor(e,t){var i;const r=e.split(".");if(r.length<2)return;const o=r[1],n=[`binary_sensor.${o}_charging`,`binary_sensor.${o}_battery_charging`];for(const e of n){const r=t.states[e];if(r&&("battery_charging"===(null===(i=r.attributes)||void 0===i?void 0:i.device_class)||e.includes("charging")))return e}for(const e of this._chargingSensorIds(t)){const t=e.split(".")[1]||"";if(t.includes(o)||o.includes(t.replace(/_battery_charging$/i,"")))return e}}_chargingSensorIds(e){return this._chargingSensorsMemo.read("all",[e.states],"",()=>Object.keys(e.states).filter(t=>{var i,r;return t.startsWith("binary_sensor.")&&"battery_charging"===(null===(r=null===(i=e.states[t])||void 0===i?void 0:i.attributes)||void 0===r?void 0:r.device_class)}))}_extractPct(e){var t;const i=e.state;if("unavailable"===i||"unknown"===i)return null;const r=parseFloat(String(i));if(!Number.isNaN(r))return Math.max(0,Math.min(100,r));const o=null===(t=e.attributes)||void 0===t?void 0:t.battery_level;if("number"==typeof o)return Math.max(0,Math.min(100,o));if("string"==typeof o){const e=parseFloat(o);if(!Number.isNaN(e))return Math.max(0,Math.min(100,e))}return null}_collectReadings(e,t,i){return this._readingsMemo.read(`${e.id}:${i}`,[t.states],(0,d.W)(e),()=>this._computeReadings(e,t,i))}_computeReadings(e,t,i){var r,o,n,a;const s=new Set((e.hidden_entities||[]).map(e=>e.trim()).filter(Boolean)),l=(e.exclude_patterns||[]).map(e=>e.toLowerCase()),d=e=>!s.has(e)&&!l.some(t=>e.toLowerCase().includes(t)),c=new Map,h=!1!==e.show_charging_indicator;if("manual"!==e.discovery_mode)for(const[i,n]of Object.entries(t.states)){if(!d(i))continue;const a=i.split(".")[0],s=null===(r=n.attributes)||void 0===r?void 0:r.device_class;if("sensor"===a&&"battery"===s){const e=this._extractPct(n);if(null===e)continue;c.set(i,this._makeReading(n,i,e,void 0,t,h))}else if(e.include_binary_sensors&&"binary_sensor"===a&&"battery"===s){const e="on"===n.state?0:100;c.set(i,this._makeReading(n,i,e,void 0,t,h))}else if(!1!==e.include_battery_level_attribute&&"number"==typeof(null===(o=n.attributes)||void 0===o?void 0:o.battery_level)){const e=Math.max(0,Math.min(100,n.attributes.battery_level));c.set(i,this._makeReading(n,i,e,void 0,t,h))}}if("auto"!==e.discovery_mode)for(const i of e.entities||[]){if(!i.entity)continue;const e=t.states[i.entity];if(!e||!d(i.entity))continue;const r=this._extractPct(e);null!==r&&c.set(i.entity,this._makeReading(e,i.entity,r,i,t,h))}let g=[...c.values()];const _=null!==(n=e.low_threshold)&&void 0!==n?n:25;e.critical_threshold,e.show_only_below_threshold&&(g=g.filter(e=>e.value<=_)),g=this._sortReadings(g,e.sort_direction||"lowest_first",t);const p=null!==(a=e.max_items)&&void 0!==a?a:25;return i&&(g=g.slice(0,p)),g}_sortReadings(e,t,i){const r=[...e];return"lowest_first"===t?r.sort((e,t)=>e.value-t.value):"highest_first"===t?r.sort((e,t)=>t.value-e.value):"name"===t&&r.sort((e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:"base"})),r}}},6673(e,t,i){i.d(t,{W:()=>o,p:()=>r});class r{constructor(e=32){this._cache=new Map,this._limit=e}read(e,t,i,r){const o=this._cache.get(e);if(o&&o.key===i&&function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(o.deps,t))return o.value;const n=r();if(this._cache.set(e,{deps:t,key:i,value:n}),this._cache.size>this._limit){const e=this._cache.keys().next().value;void 0!==e&&this._cache.delete(e)}return n}forget(e){this._cache.delete(e)}clear(){this._cache.clear()}}function o(...e){try{return JSON.stringify(e)}catch(e){return`__unserializable__${Math.random()}`}}}};