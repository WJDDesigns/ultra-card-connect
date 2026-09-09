/*! For license information please see uc-m-auto-entity-list.fa2d721a.js.LICENSE.txt */
export const __webpack_esm_ids__=[7585];export const __webpack_esm_modules__={3917(e,t,i){var o=i(2618),r=i(4791),a=function(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};let n=class extends o.WF{constructor(){super(...arguments),this.value="",this.label="Navigation Target",this.disabled=!1}_valueChanged(e){const t=e.detail.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}render(){return o.qy`
      <div class="navigation-picker">
        ${this.label?o.qy`<label class="label">${this.label}</label>`:""}
        ${this.helper?o.qy`<div class="helper">${this.helper}</div>`:""}

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this.value}
          .disabled=${this.disabled}
          @value-changed=${this._valueChanged}
        ></ha-selector>
      </div>
    `}};n.styles=o.AH`
    :host {
      display: block;
    }

    .navigation-picker {
      width: 100%;
    }

    .label {
      display: block;
      font-weight: 500;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }

    .helper {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
    }

    ha-selector {
      width: 100%;
      display: block;
    }
  `,a([(0,r.MZ)({attribute:!1})],n.prototype,"hass",void 0),a([(0,r.MZ)()],n.prototype,"value",void 0),a([(0,r.MZ)()],n.prototype,"label",void 0),a([(0,r.MZ)()],n.prototype,"helper",void 0),a([(0,r.MZ)({type:Boolean})],n.prototype,"disabled",void 0),n=a([(0,r.EM)("ultra-navigation-picker")],n)},5920(e,t,i){i.d(t,{UltraAutoEntityListModule:()=>h});var o=i(2618),r=i(1299),a=i(7475),n=i(766),s=i(6478),l=i(5147),d=i(8938),c=i(6014),_=i(6673),p=(i(7921),i(3917),i(4830));const u="uc-module-patch-by-id";class h extends a.m{constructor(){super(...arguments),this._entitiesMemo=new _.p,this.metadata={type:"auto_entity_list",title:"Auto Entities List",description:"Dynamically list entities using domain, device_class, area, label, state, and keyword filters",author:"WJD Designs",version:"1.0.0",icon:"mdi:format-list-bulleted-type",category:"data",tags:["auto","entities","list","filter","dynamic","domain","label"]},this._expandedEntities=new Set,this._pinnedEntityPickerKey=0,this._hiddenEntityPickerKey=0}entityShortName(e,t){var i,o;const r=null===(o=null===(i=e.states[t])||void 0===i?void 0:i.attributes)||void 0===o?void 0:o.friendly_name;return"string"==typeof r&&r.trim()?r.trim():(t.split(".").pop()||t).replace(/_/g," ")}createDefault(e){return{id:e||this.generateId("auto_entity_list"),type:"auto_entity_list",include_domains:[],include_device_classes:[],include_areas:[],include_labels:[],include_keywords:[],exclude_keywords:[],show_unavailable:!1,pinned_entities:[],hidden_entities:[],row_style:"theme",title:"Auto Entities List",show_title:!0,empty_state_text:"",empty_state_navigation_path:"",max_items:50,show_icon:!0,show_state:!0,show_last_changed:!1,use_entity_color:!1,row_gap:6,columns:1,sort_by:"name",sort_direction:"asc",card_height:0,card_width:0,text_color:"",secondary_text_color:"",card_background_color:"",accent_color:"",active_color:"",inactive_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=super.validate(e);return{valid:0===t.errors.length,errors:t.errors}}renderActionsTab(e,t,i,o){return l.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return d.X.render(e,t,e=>o(e))}getStyles(){return`\n      ${a.m.getSliderStyles()}\n      .uc-ael-remove {\n        flex-shrink: 0;\n        cursor: pointer;\n        color: var(--error-color);\n        --mdc-icon-size: 18px;\n        padding: 4px;\n        margin-left: 4px;\n        opacity: 0.6;\n        transition: opacity 0.15s ease;\n      }\n      .uc-ael-row:hover .uc-ael-remove {\n        opacity: 1;\n      }\n    `}renderGeneralTab(e,t,i,r){var a;const n=e,s=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";return o.qy`
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
        .state-filter-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .uc-ael-editor-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 8px 0 12px 0;
        }
        .uc-ael-editor-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          border-radius: var(--uc-r-16, 16px);
          font-size: 13px;
          max-width: 100%;
          position: relative;
          cursor: pointer;
          transition: opacity 0.15s ease, padding 0.15s ease, box-shadow 0.15s ease;
        }
        .uc-ael-editor-chip.is-active {
          box-shadow: 0 0 0 2px var(--card-background-color), 0 0 0 4px var(--primary-color);
        }
        .uc-ael-editor-chip--hidden {
          background: var(--error-color);
          cursor: default;
        }
        .uc-ael-editor-chip:hover {
          opacity: 0.95;
          padding-right: 30px;
        }
        .uc-ael-editor-chip .uc-ael-chip-remove {
          cursor: pointer;
          font-size: 16px;
          opacity: 0;
          position: absolute;
          right: 8px;
          transition: opacity 0.15s ease;
        }
        .uc-ael-editor-chip:hover .uc-ael-chip-remove {
          opacity: 1;
        }
        .uc-ael-editor-chip-label {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 220px;
          pointer-events: none;
        }
        .uc-ael-overrides {
          padding: 16px;
          background: rgba(var(--rgb-primary-color), 0.05);
          border-left: 3px solid var(--primary-color);
          border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;
          margin-bottom: 12px;
        }
        .uc-ael-overrides-header {
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-text-color);
          margin-bottom: 8px;
          opacity: 0.85;
        }
      </style>

      <div class="module-settings">
        ${this._renderStyleSection(n,t,r,s,i)}
        ${"card"===(0,p.NS)(i,"auto_entity_list","row_style",n.row_style,"compact")?this._renderCardSizeSection(n,t,r,s):o.s6}
        ${this._renderDisplaySection(n,t,r,s)}
        ${this._renderFiltersSection(n,t,r,s)}
        ${this._renderEntitySourceSection(n,t,r,s)}
        ${this._renderColorsSection(n,t,r,s)}
      </div>
    `}_renderCardSizeSection(e,t,i,r){var a,n;return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_card_size",r,"Card Size")}
        </div>
        ${this.renderSliderField((0,s.kg)("editor.auto_entity_list.card_height",r,"Card height"),(0,s.kg)("editor.auto_entity_list.card_height_desc",r,"Minimum row height. 0 = auto (fits content)."),null!==(a=e.card_height)&&void 0!==a?a:0,0,0,200,1,e=>{i({card_height:e}),this.triggerPreviewUpdate()},"px")}
        ${this.renderSliderField((0,s.kg)("editor.auto_entity_list.card_width",r,"Card width"),(0,s.kg)("editor.auto_entity_list.card_width_desc",r,"Maximum row width in pixels. 0 = fill container."),null!==(n=e.card_width)&&void 0!==n?n:0,0,0,1200,10,e=>{i({card_width:e}),this.triggerPreviewUpdate()},"px")}
      </div>
    `}_renderStyleSection(e,t,i,r,a){var n;const l=null===(n=p.jP.resolveTheme(a))||void 0===n?void 0:n.name,d=(0,p.NS)(a,"auto_entity_list","row_style","theme","compact"),c=e.row_style||"theme";return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_style",r,"Row Style")}
        </div>
        <div class="style-switcher">
          ${[{k:"theme",icon:"mdi:palette-swatch-outline",title:(0,s.kg)("editor.theme.inherit",r,"Inherit from theme"),desc:l?`${l}: ${d}`:d},{k:"compact",icon:"mdi:format-list-bulleted",title:(0,s.kg)("editor.auto_entity_list.style_compact",r,"Compact"),desc:(0,s.kg)("editor.auto_entity_list.style_compact_desc",r,"Icon + name + state")},{k:"detailed",icon:"mdi:format-list-text",title:(0,s.kg)("editor.auto_entity_list.style_detailed",r,"Detailed"),desc:(0,s.kg)("editor.auto_entity_list.style_detailed_desc",r,"Two-line rows")},{k:"slim",icon:"mdi:format-align-justify",title:(0,s.kg)("editor.auto_entity_list.style_slim",r,"Slim"),desc:(0,s.kg)("editor.auto_entity_list.style_slim_desc",r,"Name only, dense")},{k:"card",icon:"mdi:card-text-outline",title:(0,s.kg)("editor.auto_entity_list.style_card",r,"Card"),desc:(0,s.kg)("editor.auto_entity_list.style_card_desc",r,"Pill rows with accent")}].map(e=>o.qy`
              <div
                class="style-btn ${c===e.k?"active":""}"
                @click=${()=>{i({row_style:e.k}),this.triggerPreviewUpdate()}}
              >
                <ha-icon icon=${e.icon}></ha-icon>
                <div class="st-title">${e.title}</div>
                <div class="st-desc">${e.desc}</div>
              </div>
            `)}
        </div>
      </div>
    `}_renderDisplaySection(e,t,i,r){var a,l,d;return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_display",r,"Display")}
        </div>
        ${n.U.renderFieldSection((0,s.kg)("editor.auto_entity_list.title",r,"Title"),(0,s.kg)("editor.auto_entity_list.title_desc",r,"Header above the list."),t,{title:e.title||""},[n.U.text("title")],e=>{i({title:e.detail.value.title}),this.triggerPreviewUpdate()})}
        ${n.U.renderFieldSection((0,s.kg)("editor.auto_entity_list.empty_state_text",r,"Empty list text"),(0,s.kg)("editor.auto_entity_list.empty_state_text_desc",r,"Custom message shown when no entities match the filters. Leave blank for the default hint."),t,{empty_state_text:e.empty_state_text||""},[n.U.text("empty_state_text")],e=>{i({empty_state_text:e.detail.value.empty_state_text}),this.triggerPreviewUpdate()})}
        ${(e.empty_state_text||"").trim()?o.qy`
              <div style="margin-bottom: 16px;">
                <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">
                  ${(0,s.kg)("editor.auto_entity_list.empty_state_link",r,"Empty list link (optional)")}
                </div>
                <div
                  style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;"
                >
                  ${(0,s.kg)("editor.auto_entity_list.empty_state_link_desc",r,"Tapping the empty-list message navigates to this dashboard view or URL.")}
                </div>
                <ultra-navigation-picker
                  .hass=${t}
                  .value=${e.empty_state_navigation_path||""}
                  label=""
                  @value-changed=${e=>{i({empty_state_navigation_path:e.detail.value}),this.triggerPreviewUpdate()}}
                ></ultra-navigation-picker>
              </div>
            `:o.s6}
        ${this.renderSettingsSection("","",[{title:(0,s.kg)("editor.auto_entity_list.show_title",r,"Show title"),description:(0,s.kg)("editor.auto_entity_list.show_title_desc",r,"Display header."),hass:t,data:{show_title:!1!==e.show_title},schema:[this.booleanField("show_title")],onChange:e=>{i({show_title:e.detail.value.show_title}),this.triggerPreviewUpdate()}},{title:(0,s.kg)("editor.auto_entity_list.show_icon",r,"Show icon"),description:(0,s.kg)("editor.auto_entity_list.show_icon_desc",r,"Show each entity's icon."),hass:t,data:{show_icon:!1!==e.show_icon},schema:[this.booleanField("show_icon")],onChange:e=>{i({show_icon:e.detail.value.show_icon}),this.triggerPreviewUpdate()}},{title:(0,s.kg)("editor.auto_entity_list.show_state",r,"Show state"),description:(0,s.kg)("editor.auto_entity_list.show_state_desc",r,"Show current state value."),hass:t,data:{show_state:!1!==e.show_state},schema:[this.booleanField("show_state")],onChange:e=>{i({show_state:e.detail.value.show_state}),this.triggerPreviewUpdate()}},{title:(0,s.kg)("editor.auto_entity_list.show_last_changed",r,"Show last changed"),description:(0,s.kg)("editor.auto_entity_list.show_last_changed_desc",r,'Show "2m ago" style timestamp.'),hass:t,data:{show_last_changed:!!e.show_last_changed},schema:[this.booleanField("show_last_changed")],onChange:e=>{i({show_last_changed:e.detail.value.show_last_changed}),this.triggerPreviewUpdate()}},{title:(0,s.kg)("editor.auto_entity_list.use_entity_color",r,"Color state with entity color"),description:(0,s.kg)("editor.auto_entity_list.use_entity_color_desc",r,"When an entity exposes a color (light bulb RGB, etc.) use it for the state, icon, and card accent."),hass:t,data:{use_entity_color:!!e.use_entity_color},schema:[this.booleanField("use_entity_color")],onChange:e=>{i({use_entity_color:e.detail.value.use_entity_color}),this.triggerPreviewUpdate()}}])}
        ${this.renderSliderField((0,s.kg)("editor.auto_entity_list.max_items",r,"Max items"),(0,s.kg)("editor.auto_entity_list.max_items_desc",r,"Maximum entities to display."),null!==(a=e.max_items)&&void 0!==a?a:50,50,5,200,1,e=>{i({max_items:e}),this.triggerPreviewUpdate()},"")}
        ${this.renderSliderField((0,s.kg)("editor.auto_entity_list.row_gap",r,"Row spacing"),(0,s.kg)("editor.auto_entity_list.row_gap_desc",r,"Vertical gap between rows. Applies to every style."),null!==(l=e.row_gap)&&void 0!==l?l:6,6,0,32,1,e=>{i({row_gap:e}),this.triggerPreviewUpdate()},"px")}
        ${this.renderSliderField((0,s.kg)("editor.auto_entity_list.columns",r,"Columns"),(0,s.kg)("editor.auto_entity_list.columns_desc",r,"Arrange rows in a grid. 1 = single column (default)."),null!==(d=e.columns)&&void 0!==d?d:1,1,1,6,1,e=>{i({columns:e}),this.triggerPreviewUpdate()},"")}
        ${this.renderFieldSection((0,s.kg)("editor.auto_entity_list.sort_by",r,"Sort by"),(0,s.kg)("editor.auto_entity_list.sort_by_desc",r,"Order of entities."),t,{sort_by:e.sort_by||"name"},[this.selectField("sort_by",[{value:"name",label:(0,s.kg)("editor.auto_entity_list.sort_name",r,"Name A–Z")},{value:"last_changed",label:(0,s.kg)("editor.auto_entity_list.sort_last_changed",r,"Last changed")},{value:"state",label:(0,s.kg)("editor.auto_entity_list.sort_state",r,"State (text)")},{value:"domain",label:(0,s.kg)("editor.auto_entity_list.sort_domain",r,"Domain")}])],e=>{i({sort_by:e.detail.value.sort_by}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,s.kg)("editor.auto_entity_list.sort_direction",r,"Sort direction"),"",t,{sort_direction:e.sort_direction||"asc"},[this.selectField("sort_direction",[{value:"asc",label:(0,s.kg)("editor.auto_entity_list.sort_asc",r,"Ascending")},{value:"desc",label:(0,s.kg)("editor.auto_entity_list.sort_desc_dir",r,"Descending")}])],e=>{i({sort_direction:e.detail.value.sort_direction}),this.triggerPreviewUpdate()})}
      </div>
    `}_renderFiltersSection(e,t,i,r){var a;return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_filters",r,"Filters")}
        </div>
        ${this._renderChipInput(e,"include_domains",(0,s.kg)("editor.auto_entity_list.include_domains",r,"Domains"),(0,s.kg)("editor.auto_entity_list.include_domains_desc",r,"Only entities from these domains (e.g. light, binary_sensor). Empty = all."),(0,s.kg)("editor.auto_entity_list.include_domains_ph",r,"e.g. light, sensor"),!1,i)}
        ${this._renderChipInput(e,"include_device_classes",(0,s.kg)("editor.auto_entity_list.include_device_classes",r,"Device classes"),(0,s.kg)("editor.auto_entity_list.include_device_classes_desc",r,"Filter by attributes.device_class (e.g. motion, door, temperature)."),(0,s.kg)("editor.auto_entity_list.include_device_classes_ph",r,"e.g. motion, door"),!1,i)}

        <div style="margin-top: 16px;">
          <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
            ${(0,s.kg)("editor.auto_entity_list.include_areas",r,"Areas")}
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            ${(0,s.kg)("editor.auto_entity_list.include_areas_desc",r,"Only entities assigned to these areas (directly or via their device). Empty = all areas.")}
          </div>
          ${this.renderFieldSection("","",t,{include_areas:e.include_areas||[]},[{name:"include_areas",selector:{area:{multiple:!0}}}],e=>{const t=e.detail.value.include_areas;i({include_areas:Array.isArray(t)?t:t?[t]:[]}),this.triggerPreviewUpdate()})}
        </div>

        <div style="margin-top: 16px;">
          <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
            ${(0,s.kg)("editor.auto_entity_list.include_labels",r,"Labels")}
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            ${(0,s.kg)("editor.auto_entity_list.include_labels_desc",r,"Only entities carrying these Home Assistant labels (on the entity, its device, or its area). Empty = all labels.")}
          </div>
          ${this.renderFieldSection("","",t,{include_labels:e.include_labels||[]},[{name:"include_labels",selector:{label:{multiple:!0}}}],e=>{const t=e.detail.value.include_labels;i({include_labels:Array.isArray(t)?t:t?[t]:[]}),this.triggerPreviewUpdate()})}
        </div>

        <div style="margin-top: 16px;">
          <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
            ${(0,s.kg)("editor.auto_entity_list.state_filter",r,"State condition (optional)")}
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            ${(0,s.kg)("editor.auto_entity_list.state_filter_desc",r,"Only show entities whose state matches. Leave operator empty to disable.")}
          </div>
          <div class="state-filter-row">
            ${this.renderFieldSection("","",t,{state_filter_operator:e.state_filter_operator||""},[this.selectField("state_filter_operator",[{value:"",label:"— None —"},{value:"equals",label:"= equals"},{value:"not_equals",label:"≠ not equals"},{value:"contains",label:"∋ contains"},{value:"greater_than",label:"> greater than"},{value:"less_than",label:"< less than"}])],e=>{const t=e.detail.value.state_filter_operator;i({state_filter_operator:t||void 0}),this.triggerPreviewUpdate()})}
            ${this.renderFieldSection("","",t,{state_filter_value:null!==(a=e.state_filter_value)&&void 0!==a?a:""},[n.U.text("state_filter_value")],e=>{i({state_filter_value:e.detail.value.state_filter_value}),this.triggerPreviewUpdate()})}
          </div>
        </div>

        ${this._renderChipInput(e,"include_keywords",(0,s.kg)("editor.auto_entity_list.include_keywords",r,"Include keywords"),(0,s.kg)("editor.auto_entity_list.include_keywords_desc",r,"Entity id must contain at least one of these substrings."),(0,s.kg)("editor.auto_entity_list.keyword_ph",r,"e.g. living, kitchen"),!1,i)}
        ${this._renderChipInput(e,"exclude_keywords",(0,s.kg)("editor.auto_entity_list.exclude_keywords",r,"Exclude keywords"),(0,s.kg)("editor.auto_entity_list.exclude_keywords_desc",r,"Entity ids containing any of these substrings are ignored."),(0,s.kg)("editor.auto_entity_list.keyword_ph",r,"e.g. test, backup"),!0,i)}

        <div style="margin-top: 16px;">
          ${this.renderSettingsSection("","",[{title:(0,s.kg)("editor.auto_entity_list.show_unavailable",r,"Show unavailable / unknown"),description:(0,s.kg)("editor.auto_entity_list.show_unavailable_desc",r,"When off, entities in unavailable or unknown states are hidden."),hass:t,data:{show_unavailable:!!e.show_unavailable},schema:[this.booleanField("show_unavailable")],onChange:e=>{i({show_unavailable:e.detail.value.show_unavailable}),this.triggerPreviewUpdate()}}])}
        </div>
      </div>
    `}_renderEntitySourceSection(e,t,i,a){const n=e.pinned_entities||[],l=e.hidden_entities||[];return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_source",a,"Entity source")}
        </div>

        <div style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 4px;">
          ${(0,s.kg)("editor.auto_entity_list.pinned_entities",a,"Pinned entities")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 8px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,s.kg)("editor.auto_entity_list.pinned_entities_desc",a,"Always appear first, regardless of filters. Click a chip to edit overrides; hover to remove.")}
        </div>

        ${n.length?o.qy`
              <div class="uc-ael-editor-chips">
                ${n.map((e,r)=>{const l=this._expandedEntities.has(e.id),d=e.entity?e.label||this.entityShortName(t,e.entity):(0,s.kg)("editor.auto_entity_list.no_entity",a,"No entity selected");return o.qy`
                    <div
                      class="uc-ael-editor-chip ${l?"is-active":""}"
                      title=${e.entity||""}
                      @click=${t=>{t.target.closest(".uc-ael-chip-remove")||(this._expandedEntities.has(e.id)?this._expandedEntities.delete(e.id):this._expandedEntities.add(e.id),this.triggerPreviewUpdate())}}
                    >
                      <span class="uc-ael-editor-chip-label">${d}</span>
                      <ha-icon
                        class="uc-ael-chip-remove"
                        icon="mdi:close"
                        @click=${t=>{t.stopPropagation();const o=[...n];o.splice(r,1),this._expandedEntities.delete(e.id),i({pinned_entities:o}),this.triggerPreviewUpdate()}}
                      ></ha-icon>
                    </div>
                  `})}
              </div>
            `:o.s6}

        ${n.map((r,n)=>this._expandedEntities.has(r.id)?this._renderPinnedOverridePanel(r,n,e,t,i,a):o.s6)}

        ${(0,r.D)(this._pinnedEntityPickerKey,this.renderFieldSection((0,s.kg)("editor.auto_entity_list.pinned_add",a,"Add pinned entity"),"",t,{uc_ael_pin_entity:""},[{name:"uc_ael_pin_entity",selector:{entity:{}}}],e=>{var t,o;const r=String(null!==(o=null===(t=e.detail.value)||void 0===t?void 0:t.uc_ael_pin_entity)&&void 0!==o?o:"").trim();if(!r)return;if(n.some(e=>e.entity===r))return;this._pinnedEntityPickerKey+=1;const a={id:this.generateId("ael_pin"),entity:r};i({pinned_entities:[...n,a]}),this.triggerPreviewUpdate()}))}

        <div
          style="margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--divider-color);"
        >
          <div
            style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 4px;"
          >
            ${(0,s.kg)("editor.auto_entity_list.hidden_entities",a,"Hidden entities")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 8px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,s.kg)("editor.auto_entity_list.hidden_entities_desc",a,"Removed from the auto list. Remove with the × on a chip.")}
          </div>

          ${l.length?o.qy`
                <div class="uc-ael-editor-chips">
                  ${l.map(e=>o.qy`
                      <div
                        class="uc-ael-editor-chip uc-ael-editor-chip--hidden"
                        title=${e}
                      >
                        <span class="uc-ael-editor-chip-label"
                          >${this.entityShortName(t,e)}</span
                        >
                        <ha-icon
                          class="uc-ael-chip-remove"
                          icon="mdi:close"
                          @click=${()=>{i({hidden_entities:l.filter(t=>t!==e)}),this.triggerPreviewUpdate()}}
                        ></ha-icon>
                      </div>
                    `)}
                </div>
              `:o.s6}

          ${(0,r.D)(this._hiddenEntityPickerKey,this.renderFieldSection((0,s.kg)("editor.auto_entity_list.hidden_add",a,"Add hidden entity"),"",t,{uc_ael_hidden_entity:""},[{name:"uc_ael_hidden_entity",selector:{entity:{}}}],e=>{var t,o;const r=String(null!==(o=null===(t=e.detail.value)||void 0===t?void 0:t.uc_ael_hidden_entity)&&void 0!==o?o:"").trim();r&&(l.includes(r)||(this._hiddenEntityPickerKey+=1,i({hidden_entities:[...l,r]}),this.triggerPreviewUpdate()))}))}
        </div>
      </div>
    `}_renderColorsSection(e,t,i,r){return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,s.kg)("editor.auto_entity_list.section_colors",r,"Colors")}
        </div>
        ${[["text_color","editor.auto_entity_list.color_text","Text","var(--primary-text-color)"],["secondary_text_color","editor.auto_entity_list.color_secondary","Secondary text","var(--secondary-text-color)"],["card_background_color","editor.auto_entity_list.color_card_bg","Card background","var(--card-background-color)"],["accent_color","editor.auto_entity_list.color_accent","Accent / Icon","var(--primary-color)"],["active_color","editor.auto_entity_list.color_active","Active state","var(--success-color)"],["inactive_color","editor.auto_entity_list.color_inactive","Inactive state","var(--secondary-text-color)"]].map(([a,n,l,d])=>o.qy`
            <div style="margin-bottom: 16px;">
              <ultra-color-picker
                .label=${(0,s.kg)(n,r,l)}
                .value=${e[a]||""}
                .defaultValue=${d}
                .hass=${t}
                @value-changed=${e=>{i({[a]:e.detail.value}),this.triggerPreviewUpdate()}}
              ></ultra-color-picker>
            </div>
          `)}
      </div>
    `}_renderChipInput(e,t,i,r,a,n,s){const l=e[t]||[];return o.qy`
      <div style="margin-top: 16px;">
        <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">${i}</div>
        <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
          ${r}
        </div>
        <div class="domain-chips">
          ${l.map(e=>o.qy`
              <span class="domain-chip ${n?"exclude":""}">
                ${e}
                <ha-icon
                  icon="mdi:close"
                  class="chip-remove"
                  @click=${()=>{s({[t]:l.filter(t=>t!==e)}),this.triggerPreviewUpdate()}}
                ></ha-icon>
              </span>
            `)}
        </div>
        <div class="domain-input-row">
          <input
            type="text"
            class="domain-input"
            placeholder=${a}
            @keydown=${e=>{if("Enter"===e.key){const i=e.target,o=i.value.trim().toLowerCase();o&&!l.includes(o)&&(s({[t]:[...l,o]}),i.value="",this.triggerPreviewUpdate())}}}
          />
          <button
            class="add-btn"
            @click=${e=>{const i=e.target.closest(".domain-input-row"),o=null==i?void 0:i.querySelector("input"),r=null==o?void 0:o.value.trim().toLowerCase();r&&!l.includes(r)&&(s({[t]:[...l,r]}),o.value="",this.triggerPreviewUpdate())}}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
      </div>
    `}_renderPinnedOverridePanel(e,t,i,r,a,l){const d=e.entity?e.label||this.entityShortName(r,e.entity):(0,s.kg)("editor.auto_entity_list.no_entity",l,"No entity selected");return o.qy`
      <div class="uc-ael-overrides">
        <div class="uc-ael-overrides-header">
          ${(0,s.kg)("editor.auto_entity_list.overrides_for",l,"Overrides for")}
          ${d}
        </div>
        ${e.entity?o.s6:n.U.renderFieldSection((0,s.kg)("editor.auto_entity_list.entity",l,"Entity"),(0,s.kg)("editor.auto_entity_list.entity_desc",l,"Entity to pin to the top."),r,{entity:e.entity||""},[n.U.entity("entity")],e=>{const o=[...i.pinned_entities||[]];o[t]=Object.assign(Object.assign({},o[t]),{entity:e.detail.value.entity}),a({pinned_entities:o}),this.triggerPreviewUpdate()})}
        ${n.U.renderFieldSection((0,s.kg)("editor.auto_entity_list.label_override",l,"Label override"),"",r,{label:e.label||""},[n.U.text("label")],e=>{const o=[...i.pinned_entities||[]];o[t]=Object.assign(Object.assign({},o[t]),{label:e.detail.value.label}),a({pinned_entities:o}),this.triggerPreviewUpdate()})}
        ${n.U.renderFieldSection((0,s.kg)("editor.auto_entity_list.icon_override",l,"Icon override"),"",r,{icon:e.icon||""},[n.U.icon("icon")],e=>{const o=[...i.pinned_entities||[]];o[t]=Object.assign(Object.assign({},o[t]),{icon:e.detail.value.icon}),a({pinned_entities:o}),this.triggerPreviewUpdate()})}
        <div style="margin-bottom: 16px;">
          <ultra-color-picker
            .label=${(0,s.kg)("editor.auto_entity_list.row_color",l,"Row color override")}
            .value=${e.color||""}
            .defaultValue=${""}
            .hass=${r}
            @value-changed=${e=>{const o=[...i.pinned_entities||[]];o[t]=Object.assign(Object.assign({},o[t]),{color:e.detail.value}),a({pinned_entities:o}),this.triggerPreviewUpdate()}}
          ></ultra-color-picker>
        </div>
      </div>
    `}renderPreview(e,t,i,r){var a,n,l,d,c;const _=(0,p.Gy)(e,i,"auto_entity_list",{row_style:"compact"}),u=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",h=this.buildStyleString(this.buildDesignStyles(e,t)),v=this.getHoverEffectClass(e);if(!(null==t?void 0:t.states))return this.renderGradientErrorState((0,s.kg)("editor.auto_entity_list.err_ha",u,"Waiting for Home Assistant"),(0,s.kg)("editor.auto_entity_list.err_ha_desc",u,"Connecting to entity states…"),"mdi:loading");const y=this._collectEntities(_,t);if(0===y.length){const e=(_.empty_state_text||"").trim();return e?this._renderCustomEmptyState(_,t,i,e,h,v):this.renderGradientErrorState((0,s.kg)("editor.auto_entity_list.err_empty",u,"No entities match"),(0,s.kg)("editor.auto_entity_list.err_empty_desc",u,"Adjust the filters in the General tab or pin some entities."),"mdi:format-list-bulleted-type")}const g=_.text_color||"var(--primary-text-color)",m={text:g,secondary:_.secondary_text_color||"var(--secondary-text-color)",cardBg:_.card_background_color||"var(--uc-pane-bg, var(--card-background-color))",accent:_.accent_color||"var(--primary-color)",active:_.active_color||"var(--success-color)",inactive:_.inactive_color||"var(--secondary-text-color)",lang:u,showDel:"live"===r,useEntityColor:!!_.use_entity_color,cardHeight:null!==(n=_.card_height)&&void 0!==n?n:0,cardWidth:null!==(l=_.card_width)&&void 0!==l?l:0,rowGap:Math.max(0,null!==(d=_.row_gap)&&void 0!==d?d:6),columns:Math.max(1,Math.min(6,null!==(c=_.columns)&&void 0!==c?c:1))},w="detailed"===_.row_style?this._renderDetailed(_,y,t,i,m):"slim"===_.row_style?this._renderSlim(_,y,t,i,m):"card"===_.row_style?this._renderCard(_,y,t,i,m):this._renderCompact(_,y,t,i,m);return o.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div class="ael-root ${v}" style="${h}">
        ${this.wrapWithAnimation(o.qy`
            ${!1!==_.show_title?o.qy`<div
                  class="ael-title"
                  style="color:${g};font-weight:700;margin-bottom:10px;"
                >
                  ${_.title||(0,s.kg)("editor.auto_entity_list.default_title",u,"Auto Entities List")}
                </div>`:o.s6}
            ${w}
          `,e,t)}
      </div>
    `}_renderCustomEmptyState(e,t,i,r,a,n){var l;const d=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en",_=e.text_color||"var(--primary-text-color)",p=e.secondary_text_color||"var(--secondary-text-color)",u=e.accent_color||"var(--primary-color)",h=(e.empty_state_navigation_path||"").trim(),v=!!h,y=o=>{h&&(o.stopPropagation(),/^https?:\/\//i.test(h)?window.open(h,"_blank","noopener"):c.g.handleAction({action:"navigate",navigation_path:h},t,o.currentTarget,i,void 0,e))};return o.qy`
      <div class="ael-root ${n}" style="${a}">
        ${!1!==e.show_title?o.qy`<div
              class="ael-title"
              style="color:${_};font-weight:700;margin-bottom:10px;"
            >
              ${e.title||(0,s.kg)("editor.auto_entity_list.default_title",d,"Auto Entities List")}
            </div>`:o.s6}
        <div
          style="padding:12px 8px;text-align:center;font-size:14px;line-height:1.5;color:${v?u:p};${v?"cursor:pointer;text-decoration:underline;text-underline-offset:3px;":""}"
          role=${v?"link":o.s6}
          tabindex=${v?"0":o.s6}
          @click=${v?y:null}
          @keydown=${v?e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),y(e))}:null}
        >
          ${r}
        </div>
      </div>
    `}_renderCompact(e,t,i,r,a){return o.qy`
      <div style="${this._wrapperStyle(a)}">
        ${t.map(t=>{const n=this._rowGestures(e,t,i,r,"compact"),s=this._stateColor(t,a);return o.qy`
            <div
              class="uc-ael-row"
              data-uc-role="pane"
              style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:var(--uc-r-8, 8px);background:${a.cardBg};border: var(--uc-pane-border, 1px solid var(--divider-color)); box-shadow: var(--uc-pane-shadow, none);"
              @pointerdown=${n.onPointerDown}
              @pointermove=${n.onPointerMove}
              @pointerup=${n.onPointerUp}
              @pointerleave=${n.onPointerLeave}
              @pointercancel=${n.onPointerCancel}
            >
              ${!1!==e.show_icon?o.qy`<ha-icon
                    icon=${t.icon}
                    style="color:${this._iconColor(t,a)};--mdc-icon-size:22px;flex-shrink:0;"
                  ></ha-icon>`:o.s6}
              <div
                style="flex:1;min-width:0;color:${a.text};font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
              >
                ${t.name}
              </div>
              ${!1!==e.show_state?o.qy`<div
                    style="color:${s};font-size:13px;flex-shrink:0;max-width:50%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                  >
                    ${t.state}
                  </div>`:o.s6}
              ${e.show_last_changed?o.qy`<div style="color:${a.secondary};font-size:11px;flex-shrink:0;">
                    ${this._relativeTime(t.lastChanged)}
                  </div>`:o.s6}
              ${this._renderRemove(e,t,a.showDel,a.lang)}
            </div>
          `})}
      </div>
    `}_renderDetailed(e,t,i,r,a){return o.qy`
      <div style="${this._wrapperStyle(a)}">
        ${t.map(t=>{const n=this._rowGestures(e,t,i,r,"detailed"),s=this._stateColor(t,a);return o.qy`
            <div
              class="uc-ael-row"
              data-uc-role="pane"
              style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:var(--uc-r-10, 10px);background:${a.cardBg};border: var(--uc-pane-border, 1px solid var(--divider-color)); box-shadow: var(--uc-pane-shadow, none);"
              @pointerdown=${n.onPointerDown}
              @pointermove=${n.onPointerMove}
              @pointerup=${n.onPointerUp}
              @pointerleave=${n.onPointerLeave}
              @pointercancel=${n.onPointerCancel}
            >
              ${!1!==e.show_icon?o.qy`<ha-icon
                    icon=${t.icon}
                    style="color:${this._iconColor(t,a)};--mdc-icon-size:30px;flex-shrink:0;"
                  ></ha-icon>`:o.s6}
              <div style="flex:1;min-width:0;">
                <div
                  style="color:${a.text};font-weight:700;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                >
                  ${t.name}
                </div>
                <div
                  style="margin-top:2px;color:${a.secondary};font-size:12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;"
                >
                  ${!1!==e.show_state?o.qy`<span style="color:${s};font-weight:600;">${t.state}</span>`:o.s6}
                  ${e.show_last_changed?o.qy`<span>· ${this._relativeTime(t.lastChanged)}</span>`:o.s6}
                  <span style="opacity:0.6;">· ${t.entityId}</span>
                </div>
              </div>
              ${this._renderRemove(e,t,a.showDel,a.lang)}
            </div>
          `})}
      </div>
    `}_renderSlim(e,t,i,r,a){const n=0===a.rowGap&&1===a.columns;return o.qy`
      <div style="${this._wrapperStyle(a)}">
        ${t.map((s,l)=>{const d=this._rowGestures(e,s,i,r,"slim"),c=this._stateColor(s,a),_=l===t.length-1;return o.qy`
            <div
              class="uc-ael-row"
              data-uc-role="pane"
              style="display:flex;align-items:center;gap:8px;padding:6px 8px;${n&&!_?"border-bottom:1px solid var(--divider-color);":""}"
              @pointerdown=${d.onPointerDown}
              @pointermove=${d.onPointerMove}
              @pointerup=${d.onPointerUp}
              @pointerleave=${d.onPointerLeave}
              @pointercancel=${d.onPointerCancel}
            >
              <div
                style="flex:1;min-width:0;color:${a.text};font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
              >
                ${s.name}
              </div>
              ${!1!==e.show_state?o.qy`<div style="color:${c};font-size:12px;flex-shrink:0;">
                    ${s.state}
                  </div>`:o.s6}
              ${this._renderRemove(e,s,a.showDel,a.lang)}
            </div>
          `})}
      </div>
    `}_renderCard(e,t,i,r,a){const n=1===a.columns&&a.cardWidth>0?"center":"stretch";return o.qy`
      <div style="${this._wrapperStyle(a,n)}">
        ${t.map(t=>{const n=this._rowGestures(e,t,i,r,"card"),s=this._stateColor(t,a),l=t.pinnedColor||s,d=(a.cardHeight>0?`min-height:${a.cardHeight}px;`:"")+(a.cardWidth>0?`width:100%;max-width:${a.cardWidth}px;`:"width:100%;");return o.qy`
            <div
              class="uc-ael-row"
              data-uc-role="pane"
              style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:var(--uc-r-24, 24px);background:${a.cardBg};border-left:4px solid ${l};box-shadow:0 1px 2px rgba(0,0,0,0.05);box-sizing:border-box;${d}"
              @pointerdown=${n.onPointerDown}
              @pointermove=${n.onPointerMove}
              @pointerup=${n.onPointerUp}
              @pointerleave=${n.onPointerLeave}
              @pointercancel=${n.onPointerCancel}
            >
              ${!1!==e.show_icon?o.qy`<ha-icon
                    icon=${t.icon}
                    style="color:${l};--mdc-icon-size:24px;flex-shrink:0;"
                  ></ha-icon>`:o.s6}
              <div style="flex:1;min-width:0;">
                <div
                  style="color:${a.text};font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                >
                  ${t.name}
                </div>
                ${e.show_last_changed?o.qy`<div style="color:${a.secondary};font-size:11px;margin-top:2px;">
                      ${this._relativeTime(t.lastChanged)}
                    </div>`:o.s6}
              </div>
              ${!1!==e.show_state?o.qy`<div
                    style="color:${s};font-weight:700;font-size:14px;flex-shrink:0;max-width:50%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
                  >
                    ${t.state}
                  </div>`:o.s6}
              ${this._renderRemove(e,t,a.showDel,a.lang)}
            </div>
          `})}
      </div>
    `}_wrapperStyle(e,t="stretch"){if(e.columns>1){const i="center"===t?"justify-items:center;":"";return`display:grid;grid-template-columns:repeat(${e.columns},minmax(0,1fr));gap:${e.rowGap}px;${i}`}return`display:flex;flex-direction:column;gap:${e.rowGap}px;align-items:${"center"===t?"center":"stretch"};`}_rowGestures(e,t,i,o,r){var a;return this.createGestureHandlers(`${e.id}-${t.entityId}-${r}`,{tap_action:(null===(a=e.tap_action)||void 0===a?void 0:a.action)?Object.assign(Object.assign({},e.tap_action),{entity:t.entityId}):{action:"more-info",entity:t.entityId},hold_action:e.hold_action,double_tap_action:e.double_tap_action,entity:t.entityId,module:e},i,o,[".uc-ael-remove"])}_renderRemove(e,t,i,r){return i?o.qy`
      <ha-icon
        class="uc-ael-remove"
        icon="mdi:close"
        title=${(0,s.kg)("editor.auto_entity_list.preview_remove",r,"Remove from list")}
        @click=${i=>{if(i.preventDefault(),i.stopPropagation(),t.pinned)window.dispatchEvent(new CustomEvent(u,{bubbles:!0,composed:!0,detail:{moduleId:e.id,updates:{pinned_entities:(e.pinned_entities||[]).filter(e=>e.entity!==t.entityId)}}}));else{const i=[...e.hidden_entities||[]];i.includes(t.entityId)||i.push(t.entityId),window.dispatchEvent(new CustomEvent(u,{bubbles:!0,composed:!0,detail:{moduleId:e.id,updates:{hidden_entities:i}}}))}this.triggerPreviewUpdate(!0)}}
      ></ha-icon>
    `:o.qy``}_stateColor(e,t){const i=e.state.toLowerCase();return i.startsWith("unavailable")||i.startsWith("unknown")?t.inactive:t.useEntityColor&&e.entityColor?e.entityColor:e.isActive?t.active:t.secondary}_iconColor(e,t){return e.pinnedColor?e.pinnedColor:t.useEntityColor&&e.entityColor?e.entityColor:t.accent}_makeRow(e,t,i){var o;const r=t.attributes||{},a=r.friendly_name||e,n=(null==i?void 0:i.icon)||r.icon||this._domainIcon(e.split(".")[0]||""),s=String(null!==(o=t.state)&&void 0!==o?o:""),l=t.last_changed?new Date(t.last_changed):new Date;return{entityId:e,name:(null==i?void 0:i.label)||a,icon:n,state:this._formatState(s,r),domain:e.split(".")[0]||"",deviceClass:String(r.device_class||""),lastChanged:l,isActive:this._isActiveState(s),pinned:!!i,pinnedColor:null==i?void 0:i.color,entityColor:this._extractEntityColor(t)}}_extractEntityColor(e){var t;const i=e.attributes||{},o=String(null!==(t=e.state)&&void 0!==t?t:"").toLowerCase();if("off"===o||"unavailable"===o||"unknown"===o||"idle"===o||"standby"===o||""===o)return;const r=i.rgb_color;if(Array.isArray(r)&&3===r.length){const[e,t,i]=r.map(e=>Math.max(0,Math.min(255,Math.round(Number(e)||0))));return`rgb(${e}, ${t}, ${i})`}const a=i.hs_color;if(Array.isArray(a)&&2===a.length)return`hsl(${Number(a[0])||0}, ${Number(a[1])||0}%, 50%)`;const n=i.color_name;if("string"==typeof n&&n.trim())return n.trim();const s=i.color;return"string"==typeof s&&s.trim()?s.trim():void 0}_formatState(e,t){const i=t.unit_of_measurement;return i&&e&&"unavailable"!==e&&"unknown"!==e?`${e} ${i}`:e}_isActiveState(e){const t=e.toLowerCase();return["on","open","opened","active","triggered","home","playing","unlocked","detected","heat","cool","heat_cool","auto","fan_only"].includes(t)}_matchesStateFilter(e,t,i){if(null==i)return!0;const o=String(i).trim();if(""===o)return!0;if("equals"===t)return e===o;if("not_equals"===t)return e!==o;if("contains"===t)return e.toLowerCase().includes(o.toLowerCase());if("greater_than"===t){const t=parseFloat(e),i=parseFloat(o);return!Number.isNaN(t)&&!Number.isNaN(i)&&t>i}if("less_than"===t){const t=parseFloat(e),i=parseFloat(o);return!Number.isNaN(t)&&!Number.isNaN(i)&&t<i}return!0}_domainIcon(e){return{light:"mdi:lightbulb",switch:"mdi:light-switch",binary_sensor:"mdi:radiobox-marked",sensor:"mdi:eye",climate:"mdi:thermostat",cover:"mdi:window-shutter",fan:"mdi:fan",lock:"mdi:lock",media_player:"mdi:cast",person:"mdi:account",device_tracker:"mdi:map-marker",automation:"mdi:robot",scene:"mdi:palette",script:"mdi:script-text",input_boolean:"mdi:toggle-switch",input_number:"mdi:ray-vertex",input_select:"mdi:form-dropdown",camera:"mdi:camera",vacuum:"mdi:robot-vacuum",alarm_control_panel:"mdi:shield-home",update:"mdi:package-up",timer:"mdi:timer",weather:"mdi:weather-partly-cloudy",sun:"mdi:white-balance-sunny"}[e]||"mdi:circle-outline"}_relativeTime(e){const t=Math.floor((Date.now()-e.getTime())/1e3);if(t<5)return"just now";if(t<60)return`${t}s ago`;const i=Math.floor(t/60);if(i<60)return`${i}m ago`;const o=Math.floor(i/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}_entityAreaId(e,t){var i,o,r;const a=e,n=null===(i=a.entities)||void 0===i?void 0:i[t];return(null==n?void 0:n.area_id)?n.area_id:(null==n?void 0:n.device_id)&&(null===(r=null===(o=a.devices)||void 0===o?void 0:o[n.device_id])||void 0===r?void 0:r.area_id)||void 0}_entityLabels(e,t){var i,o,r,a,n;const s=e,l=new Set,d=e=>{if(Array.isArray(e))for(const t of e)t&&l.add(t)},c=null===(i=s.entities)||void 0===i?void 0:i[t];d(null==c?void 0:c.labels),(null==c?void 0:c.device_id)&&d(null===(r=null===(o=s.devices)||void 0===o?void 0:o[c.device_id])||void 0===r?void 0:r.labels);const _=this._entityAreaId(e,t);return _&&d(null===(n=null===(a=s.areas)||void 0===a?void 0:a[_])||void 0===n?void 0:n.labels),[...l]}_collectEntities(e,t){const i=t;return this._entitiesMemo.read(e.id,[t.states,i.entities,i.devices,i.areas],(0,_.W)(e),()=>this._computeEntities(e,t))}_computeEntities(e,t){var i;const o=new Set((e.hidden_entities||[]).filter(Boolean)),r=new Set((e.pinned_entities||[]).map(e=>e.entity).filter(Boolean)),a=(e.include_domains||[]).map(e=>e.toLowerCase()),n=(e.include_device_classes||[]).map(e=>e.toLowerCase()),s=(e.include_areas||[]).filter(Boolean),l=(e.include_labels||[]).filter(Boolean),d=(e.include_keywords||[]).map(e=>e.toLowerCase()),c=(e.exclude_keywords||[]).map(e=>e.toLowerCase()),_=(i,r)=>{var _,p;if(o.has(i))return!1;const u=i.toLowerCase(),h=i.split(".")[0]||"",v=String((null===(_=r.attributes)||void 0===_?void 0:_.device_class)||"").toLowerCase();if(a.length&&!a.includes(h))return!1;if(n.length&&!n.includes(v))return!1;if(s.length){const e=this._entityAreaId(t,i);if(!e||!s.includes(e))return!1}if(l.length&&!this._entityLabels(t,i).some(e=>l.includes(e)))return!1;if(d.length&&!d.some(e=>u.includes(e)))return!1;if(c.length&&c.some(e=>u.includes(e)))return!1;if(!e.show_unavailable){const e=String(r.state||"").toLowerCase();if("unavailable"===e||"unknown"===e||""===e)return!1}return!(e.state_filter_operator&&void 0!==e.state_filter_value&&!this._matchesStateFilter(String(null!==(p=r.state)&&void 0!==p?p:""),e.state_filter_operator,e.state_filter_value))},p=[];for(const[e,i]of Object.entries(t.states))r.has(e)||_(e,i)&&p.push(this._makeRow(e,i,void 0));return[...(e.pinned_entities||[]).filter(e=>e.entity&&t.states[e.entity]).map(e=>this._makeRow(e.entity,t.states[e.entity],e)),...this._sort(p,e.sort_by||"name",e.sort_direction||"asc")].slice(0,null!==(i=e.max_items)&&void 0!==i?i:50)}_sort(e,t,i){const o=[...e],r="desc"===i?-1:1;return o.sort((e,i)=>{let o=0;return o="last_changed"===t?e.lastChanged.getTime()-i.lastChanged.getTime():"state"===t?e.state.localeCompare(i.state,void 0,{sensitivity:"base"}):"domain"===t&&e.domain.localeCompare(i.domain)||e.name.localeCompare(i.name,void 0,{sensitivity:"base"}),o*r}),o}}},6014(e,t,i){var o=i(9957);class r{constructor(){}static getInstance(){return r.instance||(r.instance=new r),r.instance}async handleAction(e,t,i,r,a,n){await o.K.handleAction(e,t,i,r,a,n)}}const a=r.getInstance();i.d(t,["g",0,a])},6673(e,t,i){i.d(t,{W:()=>r,p:()=>o});class o{constructor(e=32){this._cache=new Map,this._limit=e}read(e,t,i,o){const r=this._cache.get(e);if(r&&r.key===i&&function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(r.deps,t))return r.value;const a=o();if(this._cache.set(e,{deps:t,key:i,value:a}),this._cache.size>this._limit){const e=this._cache.keys().next().value;void 0!==e&&this._cache.delete(e)}return a}forget(e){this._cache.delete(e)}clear(){this._cache.clear()}}function r(...e){try{return JSON.stringify(e)}catch(e){return`__unserializable__${Math.random()}`}}},1299(e,t,i){i.d(t,{D:()=>n});var o=i(6752),r=i(7804),a=i(8504);const n=(0,r.u$)(class extends r.WL{constructor(){super(...arguments),this.key=o.s6}render(e,t){return this.key=e,t}update(e,[t,i]){return t!==this.key&&((0,a.mY)(e),this.key=t),i}})}};