export const __webpack_esm_ids__=[1417];export const __webpack_esm_modules__={8780(t,e,o){o.d(e,{UltraToggleModule:()=>u});var i=o(2618),a=o(7475),n=o(766),r=o(5147),l=o(8938),c=o(6478),s=o(5320),d=o(5121),g=o(5155),p=o(9327);o(7921);const _=["match"];class u extends a.m{constructor(){super(...arguments),this.metadata={type:"toggle",title:"Toggle",description:"Interactive toggles and multi-state switchers with custom actions",author:"WJD Designs",version:"1.0.0",icon:"mdi:toggle-switch",category:"interactive",tags:["toggle","switch","button","state","control","interactive"]},this._expandedTogglePoints=new Set,this._draggedItem=null,this._activeTogglePointIds=new Map,this._optimisticActive=new Map,this._actionFormChangeGuard=!1,this._templateService=null}createDefault(t,e){const o={id:this.generateId("toggle_point"),label:"Off",icon:"mdi:power-off",tap_action:{action:"nothing"},background_color:"var(--secondary-background-color)",text_color:"var(--primary-text-color)",active_background_color:"var(--error-color)",active_text_color:"white"},i={id:this.generateId("toggle_point"),label:"On",icon:"mdi:power-on",tap_action:{action:"nothing"},background_color:"var(--secondary-background-color)",text_color:"var(--primary-text-color)",active_background_color:"var(--primary-color)",active_text_color:"white"};return{id:t||this.generateId("toggle"),type:"toggle",toggle_points:[o,i],visual_style:"segmented",title:"Toggle",show_title:!1,orientation:"horizontal",alignment:"center",size:"normal",spacing:8,show_icons:!0,icon_size:"24px",icon_position:"left",default_background_color:"var(--secondary-background-color)",default_text_color:"var(--primary-text-color)",default_active_background_color:"var(--primary-color)",default_active_text_color:"white",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(t){const e=t,o=[...super.validate(t).errors];return(!e.toggle_points||e.toggle_points.length<2)&&o.push("Toggle module must have at least 2 toggle points"),"ios_toggle"===e.visual_style&&2!==e.toggle_points.length&&o.push("iOS toggle style requires exactly 2 toggle points"),e.toggle_points&&e.toggle_points.forEach((t,e)=>{t.label&&""!==t.label.trim()||o.push(`Toggle point ${e+1} must have a label`);const i=t.unified_template_mode,a=String(t.unified_template||"").trim();i&&!a&&o.push(`Toggle point ${e+1}: unified template is required when template match mode is on`)}),{valid:0===o.length,errors:o}}renderActionsTab(t,e,o,i){return r.A.render(t,e,t=>i(t))}renderLogicTab(t,e,o,i){return l.X.render(t,e,t=>i(t))}renderGeneralTab(t,e,o,r){var l;const s=t,d=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";this._hass=e;const g=t=>{r(t),this.triggerPreviewUpdate()};return i.qy`
      ${this.injectUcFormStyles()}
      <style>${a.m.getSliderStyles()}</style>
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

        .toggle-point-rows-container {
          margin-top: 16px;
        }

        .toggle-point-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          background: var(--uc-pane-bg, var(--card-background-color));
          border-radius: var(--uc-r-8, 8px);
          margin-bottom: 8px;
          cursor: move;
          border: 1px solid var(--divider-color);
          transition: all 0.2s ease;
        }

        .toggle-point-row:hover {
          background: var(--primary-color);
          opacity: 0.9;
        }

        .toggle-point-row.currently-active {
          border-left: 4px solid var(--success-color);
          background: rgba(var(--rgb-success-color), 0.1);
        }

        .toggle-point-row.dragging {
          opacity: 0.5;
          transform: scale(0.95);
        }

        .toggle-point-row.drag-over {
          border-top: 3px solid var(--primary-color);
        }

        .drag-handle {
          cursor: grab;
          color: var(--secondary-text-color);
          flex-shrink: 0;
        }

        .drag-handle:active {
          cursor: grabbing;
        }

        .toggle-point-info {
          flex: 1;
          font-size: 14px;
          color: var(--primary-text-color);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .toggle-point-info.no-label {
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

        .delete-icon:hover {
          opacity: 0.7;
        }

        .toggle-point-settings {
          padding: 16px;
          background: rgba(var(--rgb-primary-color), 0.05);
          border-left: 3px solid var(--primary-color);
          border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;
          margin-bottom: 8px;
          animation: slideDown 0.3s ease;
          overflow: visible;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .add-toggle-point-btn {
          width: 100%;
          padding: 12px;
          background: var(--primary-color);
          color: var(--text-primary-color);
          border: none;
          border-radius: var(--uc-r-8, 8px);
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .add-toggle-point-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .color-controls {
          display: grid;
          gap: 16px;
        }

        /* Ensure ha-form dropdowns render properly */
        ha-form {
          display: block;
        }

        ha-select {
          position: relative;
          overflow: visible;
          z-index: 9999;
        }

        ha-select mwc-menu {
          position: fixed !important;
          z-index: 10001 !important;
        }
      </style>

      <div class="module-settings">
        <!-- Display Settings Section -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,c.kg)("editor.toggle.display_settings",d,"DISPLAY SETTINGS")}
          </div>

          ${this.renderSettingsSection("","",[{title:(0,c.kg)("editor.toggle.title",d,"Title"),description:(0,c.kg)("editor.toggle.title_desc",d,"Title to display above the toggle"),hass:e,data:{title:s.title||"Toggle"},schema:[this.textField("title")],onChange:t=>g({title:t.detail.value.title})},{title:(0,c.kg)("editor.toggle.show_title",d,"Show Title"),description:(0,c.kg)("editor.toggle.show_title_desc",d,"Display the title above the toggle"),hass:e,data:{show_title:s.show_title},schema:[this.booleanField("show_title")],onChange:t=>g({show_title:t.detail.value.show_title})}])}
          ${this.renderFieldSection((0,c.kg)("editor.toggle.visual_style",d,"Visual Style"),(0,c.kg)("editor.toggle.visual_style_desc",d,"How the toggle should be displayed"),e,{visual_style:s.visual_style||"segmented"},[this.selectField("visual_style",[{value:"ios_toggle",label:"Basic Toggle (2 states only)"},{value:"segmented",label:"Segmented Control"},{value:"button_group",label:"Button Group"},{value:"slider_track",label:"Slider Track"},{value:"timeline",label:"Timeline"},{value:"minimal",label:"Minimal"}])],t=>{const e=t.detail.value.visual_style;e!==(s.visual_style||"segmented")&&(g({visual_style:e}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          ${this.renderFieldSection((0,c.kg)("editor.toggle.orientation",d,"Orientation"),(0,c.kg)("editor.toggle.orientation_desc",d,"Layout direction of toggle points"),e,{orientation:s.orientation||"horizontal"},[this.selectField("orientation",[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}])],t=>{const e=t.detail.value.orientation;e!==(s.orientation||"horizontal")&&(g({orientation:e}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          ${this.renderFieldSection((0,c.kg)("editor.toggle.alignment",d,"Alignment"),(0,c.kg)("editor.toggle.alignment_desc",d,"How the toggle is aligned within its container"),e,{alignment:s.alignment||"center"},[this.selectField("alignment",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify (Full Width)"}])],t=>{const e=t.detail.value.alignment;e!==(s.alignment||"center")&&(g({alignment:e}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          ${this.renderFieldSection((0,c.kg)("editor.toggle.size",d,"Size"),(0,c.kg)("editor.toggle.size_desc",d,"Size of the toggle control"),e,{size:s.size||"normal"},[this.selectField("size",[{value:"compact",label:"Compact"},{value:"normal",label:"Normal"},{value:"large",label:"Large"}])],t=>{const e=t.detail.value.size;e!==(s.size||"normal")&&(g({size:e}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}

          <div class="field-container" style="margin-bottom: 16px;">
            ${this.renderSliderField((0,c.kg)("editor.toggle.spacing",d,"Spacing"),(0,c.kg)("editor.toggle.spacing_desc",d,"Gap between toggle points in pixels"),s.spacing||8,8,0,100,1,t=>{g({spacing:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
        </div>

        <!-- Quick Setup Section -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,c.kg)("editor.toggle.quick_setup",d,"QUICK SETUP")}
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 16px;">
            ${(0,c.kg)("editor.toggle.quick_setup_desc",d,"Automatically create toggle points based on an entity type (replaces existing points)")}
          </div>

          ${n.U.renderFieldSection((0,c.kg)("editor.toggle.quick_setup_entity",d,"Select Entity"),(0,c.kg)("editor.toggle.quick_setup_entity_desc",d,'Choose an entity, then click "Create Toggle Points" below to auto-generate points based on the entity type'),e,{quick_setup_entity:this._quickSetupEntity||""},[n.U.entity("quick_setup_entity")],t=>{const e=t.detail.value.quick_setup_entity;this._quickSetupEntity=e})}
          ${this._quickSetupEntity?i.qy`
                <button
                  class="add-toggle-point-btn"
                  style="margin-top: 12px; background: var(--success-color);"
                  @click=${()=>{this.quickSetupFromEntity(this._quickSetupEntity,s,e,g),this._quickSetupEntity=void 0}}
                >
                  <ha-icon icon="mdi:auto-fix"></ha-icon>
                  ${(0,c.kg)("editor.toggle.create_toggle_points",d,"Create Toggle Points")}
                </button>
                <div
                  style="font-size: 11px; color: var(--warning-color); margin-top: 8px; padding: 8px; background: rgba(var(--rgb-warning-color), 0.1); border-radius: var(--uc-r-4, 4px);"
                >
                  <ha-icon icon="mdi:alert" style="--mdc-icon-size: 14px;"></ha-icon>
                  ${(0,c.kg)("editor.toggle.quick_setup_warning",d,"This will replace all existing toggle points with auto-generated ones based on the entity type.")}
                </div>
              `:""}
        </div>

        <!-- Entity Tracking Section -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,c.kg)("editor.toggle.entity_tracking",d,"ADVANCED TRACKING")}
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 16px;">
            ${(0,c.kg)("editor.toggle.entity_tracking_desc",d,'Optional: Set a shared entity to track across all toggle points. Use "Quick Setup" above to auto-create toggle points — this field does NOT create them.')}
          </div>

          ${this.renderEntityPickerWithVariables(e,o,"tracking_entity",s.tracking_entity||"",t=>g({tracking_entity:t}),void 0,(0,c.kg)("editor.toggle.tracking_entity",d,"Global Tracking Entity"))}
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-top: 4px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,c.kg)("editor.toggle.tracking_entity_desc",d,"The entity whose state determines the active toggle point. Toggle points with a matching match_state (or no match_entity set) will be compared against this entity.")}
          </div>
        </div>

        <!-- Icon Settings Section -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,c.kg)("editor.toggle.icon_settings",d,"ICON SETTINGS")}
          </div>

          ${this.renderSettingsSection("","",[{title:(0,c.kg)("editor.toggle.show_icons",d,"Show Icons"),description:(0,c.kg)("editor.toggle.show_icons_desc",d,"Display icons on toggle points"),hass:e,data:{show_icons:s.show_icons},schema:[this.booleanField("show_icons")],onChange:t=>g({show_icons:t.detail.value.show_icons})}])}
          ${s.show_icons?i.qy`
                ${n.U.renderFieldSection((0,c.kg)("editor.toggle.icon_size",d,"Icon Size"),(0,c.kg)("editor.toggle.icon_size_desc",d,"Size of icons in pixels"),e,{icon_size:s.icon_size||"24px"},[n.U.text("icon_size")],t=>g({icon_size:t.detail.value.icon_size}))}
                ${this.renderFieldSection((0,c.kg)("editor.toggle.icon_position",d,"Icon Position"),(0,c.kg)("editor.toggle.icon_position_desc",d,"Position of icons relative to labels"),e,{icon_position:s.icon_position||"left"},[this.selectField("icon_position",[{value:"above",label:"Above"},{value:"left",label:"Left"},{value:"right",label:"Right"},{value:"below",label:"Below"}])],t=>{const e=t.detail.value.icon_position;e!==(s.icon_position||"left")&&(g({icon_position:e}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
              `:""}
        </div>

        <!-- Default Colors Section -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,c.kg)("editor.toggle.default_colors",d,"DEFAULT COLORS")}
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 16px;">
            ${(0,c.kg)("editor.toggle.default_colors_desc",d,"Default colors for toggle points (can be overridden per point)")}
          </div>

          <div class="color-controls">
            <ultra-color-picker
              .label=${(0,c.kg)("editor.toggle.default_background_color",d,"Background Color")}
              .value=${s.default_background_color||"var(--secondary-background-color)"}
              .defaultValue=${"var(--secondary-background-color)"}
              .hass=${e}
              @value-changed=${t=>g({default_background_color:t.detail.value})}
            ></ultra-color-picker>

            <ultra-color-picker
              .label=${(0,c.kg)("editor.toggle.default_text_color",d,"Text Color")}
              .value=${s.default_text_color||"var(--primary-text-color)"}
              .defaultValue=${"var(--primary-text-color)"}
              .hass=${e}
              @value-changed=${t=>g({default_text_color:t.detail.value})}
            ></ultra-color-picker>

            <ultra-color-picker
              .label=${(0,c.kg)("editor.toggle.default_active_background_color",d,"Active Background Color")}
              .value=${s.default_active_background_color||"var(--primary-color)"}
              .defaultValue=${"var(--primary-color)"}
              .hass=${e}
              @value-changed=${t=>g({default_active_background_color:t.detail.value})}
            ></ultra-color-picker>

            <ultra-color-picker
              .label=${(0,c.kg)("editor.toggle.default_active_text_color",d,"Active Text Color")}
              .value=${s.default_active_text_color||"white"}
              .defaultValue=${"white"}
              .hass=${e}
              @value-changed=${t=>g({default_active_text_color:t.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>

        <!-- Toggle Points Management Section -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,c.kg)("editor.toggle.toggle_points",d,"TOGGLE POINTS")}
          </div>

          <div class="toggle-point-rows-container">
            ${s.toggle_points.map((t,i)=>this.renderTogglePointRow(t,i,s,e,o,g))}
          </div>

          <button
            class="add-toggle-point-btn"
            @click=${()=>this.addTogglePoint(s,g)}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
            ${(0,c.kg)("editor.toggle.add_toggle_point",d,"Add Toggle Point")}
          </button>
        </div>
      </div>
    `}renderTogglePointRow(t,e,o,a,n,r){var l,c;const s=this._expandedTogglePoints.has(t.id),d=(null===(l=null==a?void 0:a.locale)||void 0===l||l.language,this.determineActiveTogglePoint(o,a)===t.id);return i.qy`
      <div
        class="toggle-point-row ${(null===(c=this._draggedItem)||void 0===c?void 0:c.id)===t.id?"dragging":""} ${d?"currently-active":""}"
        draggable="true"
        @dragstart=${e=>this.handleDragStart(e,t)}
        @dragend=${()=>this.handleDragEnd()}
        @dragover=${t=>this.handleDragOver(t)}
        @drop=${t=>this.handleDrop(t,e,o,r)}
      >
        <ha-icon icon="mdi:drag" class="drag-handle"></ha-icon>
        ${d?i.qy`<ha-icon
              icon="mdi:check-circle"
              style="color: var(--success-color); flex-shrink: 0;"
            ></ha-icon>`:i.qy`<ha-icon
              icon="mdi:circle-outline"
              style="color: var(--disabled-text-color); flex-shrink: 0; opacity: 0.5;"
            ></ha-icon>`}
        <div class="toggle-point-info ${t.label?"":"no-label"}">
          ${t.label||"No label set"}
          ${t.match_entity?i.qy`<div
                style="font-size: 11px; color: var(--secondary-text-color); margin-top: 2px;"
              >
                ${t.match_entity} =
                ${Array.isArray(t.match_state)?t.match_state.join(", "):t.match_state||"any"}
              </div>`:""}
        </div>
        <ha-icon
          icon="mdi:chevron-down"
          class="expand-icon ${s?"expanded":""}"
          @click=${()=>this.toggleExpand(t.id)}
        ></ha-icon>
        <ha-icon
          icon="mdi:delete"
          class="delete-icon"
          @click=${()=>this.deleteTogglePoint(e,o,r)}
        ></ha-icon>
      </div>

      ${s?i.qy`
            <div class="toggle-point-settings">
              ${this.renderTogglePointConfig(t,e,o,a,n,r)}
            </div>
          `:""}
    `}renderTogglePointConfig(t,e,o,a,r,l){var s;const d=(null===(s=null==a?void 0:a.locale)||void 0===s?void 0:s.language)||"en";return i.qy`
      ${n.U.renderFieldSection((0,c.kg)("editor.toggle.point_label",d,"Label"),(0,c.kg)("editor.toggle.point_label_desc",d,"Display text for this toggle point"),a,{label:t.label||""},[n.U.text("label")],t=>this.updateTogglePoint(e,{label:t.detail.value.label},o,l))}
      ${n.U.renderFieldSection((0,c.kg)("editor.toggle.point_icon",d,"Icon"),(0,c.kg)("editor.toggle.point_icon_desc",d,"Icon to display for this toggle point"),a,{icon:t.icon||""},[n.U.icon("icon")],t=>this.updateTogglePoint(e,{icon:t.detail.value.icon},o,l))}

      <div style="margin-top: 16px; margin-bottom: 16px;">
        <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
          ${(0,c.kg)("editor.toggle.point_auto_select",d,"Auto-Select Conditions")}
        </div>
        <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 12px;">
          ${(0,c.kg)("editor.toggle.point_auto_select_desc",d,"Automatically select this toggle point based on entity state or template conditions")}
        </div>

        <!-- Match Mode Selector -->
        ${this.renderFieldSection((0,c.kg)("editor.toggle.point_match_mode",d,"Match Mode"),(0,c.kg)("editor.toggle.point_match_mode_desc",d,"Choose how to determine when this toggle point should be active"),a,{match_mode:t.unified_template_mode?"template":"entity"},[this.selectField("match_mode",[{value:"entity",label:(0,c.kg)("editor.toggle.match_mode_entity",d,"Entity State")},{value:"template",label:(0,c.kg)("editor.toggle.match_mode_template",d,"Template (Advanced)")}])],i=>{const a=i.detail.value.match_mode;"template"===a!=!!t.unified_template_mode&&("entity"===a?this.updateTogglePoint(e,{unified_template_mode:!1,unified_template:""},o,l):this.updateTogglePoint(e,{unified_template_mode:!0,match_entity:"",match_state:""},o,l),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
        ${t.unified_template_mode?i.qy`
              <div
                style="border-left: 3px solid var(--primary-color); padding-left: 12px; margin-top: 12px;"
              >
                <div
                  style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 8px; display:flex; align-items:center; gap:8px; flex-wrap:wrap;"
                >
                  <span
                    >${(0,c.kg)("editor.toggle.unified_match_desc",d,'JSON with a boolean "match" key, or a plain Jinja expression that renders to true/false when this point should be active.')}</span
                  >
                  <button
                    type="button"
                    class="help-btn"
                    style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                    title="${(0,c.kg)("editor.toggle.template_cheatsheet",d,"Template cheatsheet")}"
                    @click=${t=>{t.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"toggle"}}))}}
                  >
                    <ha-icon
                      icon="mdi:help-circle"
                      style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"
                    ></ha-icon>
                  </button>
                </div>
                <div
                  style="margin-top: 12px;"
                  @mousedown=${t=>{const e=t.target;e.closest("ultra-template-editor")||e.closest(".cm-editor")||t.stopPropagation()}}
                  @dragstart=${t=>t.stopPropagation()}
                >
                  <ultra-template-editor
                    .hass=${a}
                    .value=${t.unified_template||""}
                    .placeholder=${"{\n  \"match\": \"{{ state_attr('cover.garage', 'current_position') | int >= 15 }}\"\n}"}
                    .minHeight=${120}
                    .maxHeight=${360}
                    @value-changed=${t=>this.updateTogglePoint(e,{unified_template:t.detail.value},o,l)}
                  ></ultra-template-editor>
                  ${this.renderTemplateKeyWarning(t.unified_template,_,d)}
                </div>
              </div>
            `:i.qy`
              <!-- Entity State Mode UI -->
              <div
                style="border-left: 3px solid var(--primary-color); padding-left: 12px; margin-top: 12px;"
              >
                ${this.renderEntityPickerWithVariables(a,r,"match_entity",t.match_entity||"",t=>this.updateTogglePoint(e,{match_entity:t},o,l),void 0,(0,c.kg)("editor.toggle.point_match_entity",d,"Match Entity"))}
                <div
                  style="font-size: 12px; color: var(--secondary-text-color); margin: 4px 0 12px; opacity: 0.8;"
                >
                  ${(0,c.kg)("editor.toggle.point_match_entity_desc",d,"Entity to match")}
                </div>
                ${n.U.renderFieldSection((0,c.kg)("editor.toggle.point_match_state",d,"Match State"),(0,c.kg)("editor.toggle.point_match_state_desc",d,'State value to match (e.g., "on", "off", "heat", "cool")'),a,{match_state:Array.isArray(t.match_state)?t.match_state.join(", "):t.match_state||""},[n.U.text("match_state")],t=>{const i=t.detail.value.match_state,a=i.includes(",")?i.split(",").map(t=>t.trim()).filter(Boolean):i;this.updateTogglePoint(e,{match_state:a},o,l)})}
                <div
                  style="font-size: 11px; color: var(--secondary-text-color); margin-top: 4px; padding: 8px; background: var(--uc-pane-bg, var(--card-background-color)); border-radius: var(--uc-r-4, 4px);"
                >
                  <strong>Tip:</strong> Use comma-separated values to match multiple states (e.g.,
                  "on, open")
                </div>
              </div>
            `}
      </div>

      <div style="margin-top: 16px; margin-bottom: 16px;">
        <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
          ${(0,c.kg)("editor.toggle.point_colors",d,"Colors")}
        </div>

        <div class="color-controls">
          <ultra-color-picker
            .label=${(0,c.kg)("editor.toggle.point_background_color",d,"Background Color")}
            .value=${t.background_color||o.default_background_color||""}
            .defaultValue=${o.default_background_color||"var(--secondary-background-color)"}
            .hass=${a}
            @value-changed=${t=>this.updateTogglePoint(e,{background_color:t.detail.value},o,l)}
          ></ultra-color-picker>

          <ultra-color-picker
            .label=${(0,c.kg)("editor.toggle.point_text_color",d,"Text Color")}
            .value=${t.text_color||o.default_text_color||""}
            .defaultValue=${o.default_text_color||"var(--primary-text-color)"}
            .hass=${a}
            @value-changed=${t=>this.updateTogglePoint(e,{text_color:t.detail.value},o,l)}
          ></ultra-color-picker>

          <ultra-color-picker
            .label=${(0,c.kg)("editor.toggle.point_active_background_color",d,"Active Background Color")}
            .value=${t.active_background_color||o.default_active_background_color||""}
            .defaultValue=${o.default_active_background_color||"var(--primary-color)"}
            .hass=${a}
            @value-changed=${t=>this.updateTogglePoint(e,{active_background_color:t.detail.value},o,l)}
          ></ultra-color-picker>

          <ultra-color-picker
            .label=${(0,c.kg)("editor.toggle.point_active_text_color",d,"Active Text Color")}
            .value=${t.active_text_color||o.default_active_text_color||""}
            .defaultValue=${o.default_active_text_color||"white"}
            .hass=${a}
            @value-changed=${t=>this.updateTogglePoint(e,{active_text_color:t.detail.value},o,l)}
          ></ultra-color-picker>
        </div>
      </div>

      <div style="margin-top: 16px;">
        <div style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
          ${(0,c.kg)("editor.toggle.point_action",d,"Action")}
        </div>
        <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 12px;">
          ${(0,c.kg)("editor.toggle.point_action_desc",d,"Configure what happens when this toggle point is activated")}
        </div>

        <div style="position: relative; overflow: visible;">
          <ha-form
            .hass=${a}
            .data=${{tap_action:t.tap_action||{action:"nothing"}}}
            .schema=${[{name:"tap_action",selector:{ui_action:{}}}]}
            .computeLabel=${t=>a.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}
            @value-changed=${i=>{if(this._actionFormChangeGuard)return;i.stopPropagation(),i.stopImmediatePropagation();const a=i.detail.value.tap_action,n=t.tap_action;JSON.stringify(n)!==JSON.stringify(a)&&(this._actionFormChangeGuard=!0,this.updateTogglePoint(e,{tap_action:a},o,l),setTimeout(()=>{this._actionFormChangeGuard=!1,this.triggerPreviewUpdate()},50))}}
          ></ha-form>
        </div>
      </div>
    `}addTogglePoint(t,e){const o={id:this.generateId("toggle_point"),label:`Point ${t.toggle_points.length+1}`,icon:"",tap_action:{action:"nothing"},background_color:t.default_background_color,text_color:t.default_text_color,active_background_color:t.default_active_background_color,active_text_color:t.default_active_text_color};e({toggle_points:[...t.toggle_points,o]}),this._expandedTogglePoints.add(o.id)}quickSetupFromEntity(t,e,o,i){if(!t||!o.states[t])return;const a=t.split(".")[0],n=o.states[t];let r=[];switch(a){case"light":case"switch":case"input_boolean":case"fan":r=[{id:this.generateId("toggle_point"),label:"Off",icon:"light"===a?"mdi:lightbulb-off":"fan"===a?"mdi:fan-off":"mdi:power-off",match_entity:t,match_state:"off",tap_action:{action:"toggle",entity:t},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--disabled-text-color)",active_text_color:"white"},{id:this.generateId("toggle_point"),label:"On",icon:"light"===a?"mdi:lightbulb-on":"fan"===a?"mdi:fan":"mdi:power",match_entity:t,match_state:"on",tap_action:{action:"toggle",entity:t},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--primary-color)",active_text_color:"white"}];break;case"climate":r=[{id:this.generateId("toggle_point"),label:"Off",icon:"mdi:power-off",match_entity:t,match_state:"off",tap_action:{action:"perform-action",perform_action:"climate.set_hvac_mode",data:{entity_id:t,hvac_mode:"off"}},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--disabled-text-color)",active_text_color:"white"},{id:this.generateId("toggle_point"),label:"Heat",icon:"mdi:fire",match_entity:t,match_state:"heat",tap_action:{action:"perform-action",perform_action:"climate.set_hvac_mode",data:{entity_id:t,hvac_mode:"heat"}},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--error-color)",active_text_color:"white"},{id:this.generateId("toggle_point"),label:"Cool",icon:"mdi:snowflake",match_entity:t,match_state:"cool",tap_action:{action:"perform-action",perform_action:"climate.set_hvac_mode",data:{entity_id:t,hvac_mode:"cool"}},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--info-color)",active_text_color:"white"},{id:this.generateId("toggle_point"),label:"Auto",icon:"mdi:autorenew",match_entity:t,match_state:"auto",tap_action:{action:"perform-action",perform_action:"climate.set_hvac_mode",data:{entity_id:t,hvac_mode:"auto"}},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--primary-color)",active_text_color:"white"}];break;case"cover":r=[{id:this.generateId("toggle_point"),label:"Closed",icon:"mdi:window-shutter",match_entity:t,match_state:"closed",tap_action:{action:"perform-action",perform_action:"cover.close_cover",data:{entity_id:t}},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--disabled-text-color)",active_text_color:"white"},{id:this.generateId("toggle_point"),label:"Open",icon:"mdi:window-shutter-open",match_entity:t,match_state:"open",tap_action:{action:"perform-action",perform_action:"cover.open_cover",data:{entity_id:t}},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--primary-color)",active_text_color:"white"}];break;case"media_player":r=[{id:this.generateId("toggle_point"),label:"Off",icon:"mdi:power-off",match_entity:t,match_state:"off",tap_action:{action:"perform-action",perform_action:"media_player.turn_off",data:{entity_id:t}},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--disabled-text-color)",active_text_color:"white"},{id:this.generateId("toggle_point"),label:"Playing",icon:"mdi:play",match_entity:t,match_state:"playing",tap_action:{action:"perform-action",perform_action:"media_player.media_play",data:{entity_id:t}},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--primary-color)",active_text_color:"white"},{id:this.generateId("toggle_point"),label:"Paused",icon:"mdi:pause",match_entity:t,match_state:"paused",tap_action:{action:"perform-action",perform_action:"media_player.media_pause",data:{entity_id:t}},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--warning-color)",active_text_color:"white"}];break;case"input_select":case"select":const o=n.attributes.options||[],i="select"===a?"select.select_option":"input_select.select_option";r=o.map((o,a)=>({id:this.generateId("toggle_point"),label:o,icon:"",match_entity:t,match_state:o,tap_action:{action:"perform-action",perform_action:i,data:{entity_id:t,option:o}},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:0===a?"var(--primary-color)":1===a?"var(--info-color)":"var(--success-color)",active_text_color:"white"}));break;default:r=[{id:this.generateId("toggle_point"),label:"Off",icon:"mdi:circle-outline",match_entity:t,match_state:"off",tap_action:{action:"more-info",entity:t},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--disabled-text-color)",active_text_color:"white"},{id:this.generateId("toggle_point"),label:"On",icon:"mdi:circle",match_entity:t,match_state:"on",tap_action:{action:"more-info",entity:t},background_color:e.default_background_color,text_color:e.default_text_color,active_background_color:"var(--primary-color)",active_text_color:"white"}]}i({toggle_points:r,tracking_entity:t}),r.forEach(t=>this._expandedTogglePoints.add(t.id)),setTimeout(()=>this.triggerPreviewUpdate(),50)}deleteTogglePoint(t,e,o){const i=[...e.toggle_points],a=i.splice(t,1);a[0]&&this._expandedTogglePoints.delete(a[0].id),o({toggle_points:i})}updateTogglePoint(t,e,o,i){const a=[...o.toggle_points];a[t]=Object.assign(Object.assign({},a[t]),e),i({toggle_points:a})}toggleExpand(t){this._expandedTogglePoints.has(t)?this._expandedTogglePoints.delete(t):this._expandedTogglePoints.add(t),"undefined"!=typeof window&&this.triggerPreviewUpdate()}handleDragStart(t,e){this._draggedItem=e,t.dataTransfer&&(t.dataTransfer.effectAllowed="move")}handleDragEnd(){this._draggedItem=null,"undefined"!=typeof window&&this.triggerPreviewUpdate()}handleDragOver(t){t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="move")}handleDrop(t,e,o,i){if(t.preventDefault(),!this._draggedItem)return;const a=[...o.toggle_points],n=a.findIndex(t=>t.id===this._draggedItem.id);if(-1===n||n===e)return;const[r]=a.splice(n,1);a.splice(e,0,r),i({toggle_points:a}),this._draggedItem=null}renderPreview(t,e,o){var a;const n=t;let r;if(this._hass=e,!this._templateService&&e?this._templateService=new s.I(e):this._templateService&&e&&this._templateService.updateHass(e),this._subscribeToToggleTemplates(n,e,o),n.tracking_entity||n.toggle_points.some(t=>t.match_entity&&t.match_state||t.unified_template_mode&&t.unified_template)){const t=this._optimisticActive.get(n.id);if(t){const i=Date.now()-t.timestamp>u.OPTIMISTIC_ACTIVE_WINDOW_MS,a=this._trackingStateSignature(n,e,o)!==t.stateSignature;(i||a)&&this._optimisticActive.delete(n.id)}const i=this._optimisticActive.get(n.id);r=i?i.pointId:this.determineActiveTogglePoint(n,e,o),r&&this._activeTogglePointIds.set(n.id,r)}else this._activeTogglePointIds.has(n.id)?r=this._activeTogglePointIds.get(n.id):(r=null===(a=n.toggle_points[0])||void 0===a?void 0:a.id,r&&this._activeTogglePointIds.set(n.id,r));const l=this.getHoverEffectClass(t),c=this.buildStyleString(this.buildDesignStyles(t,e)),d=(()=>{switch(n.visual_style){case"ios_toggle":return this.renderIOSToggle(n,e,r);case"segmented":default:return this.renderSegmented(n,e,r);case"button_group":return this.renderButtonGroup(n,e,r);case"slider_track":return this.renderSliderTrack(n,e,r);case"timeline":return this.renderTimeline(n,e,r);case"minimal":return this.renderMinimal(n,e,r)}})(),g=t=>!!(null==t?void 0:t.action)&&"nothing"!==t.action&&"default"!==t.action;if(g(n.tap_action)||g(n.hold_action)||g(n.double_tap_action)){const a=this.createGestureHandlers(n.id,{tap_action:n.tap_action,hold_action:n.hold_action,double_tap_action:n.double_tap_action,entity:this.resolveEntity(n.tracking_entity,o)||n.tracking_entity,module:n},e,o,[".segmented-button",".group-button",".slider-marker",".timeline-point",".minimal-option",".ios-toggle-track"]);return this.wrapWithAnimation(i.qy`<div
          class="${l}"
          style="${c}"
          @pointerdown=${a.onPointerDown}
          @pointermove=${a.onPointerMove}
          @pointerup=${a.onPointerUp}
          @pointerleave=${a.onPointerLeave}
          @pointercancel=${a.onPointerCancel}
          @keydown=${a.onKeyDown}
          role=${a.isActionable?"button":i.s6}
          tabindex=${a.isActionable?"0":i.s6}
        >
          ${d}
        </div>`,t,e)}return this.wrapWithAnimation(i.qy`<div class="${l}" style="${c}">${d}</div>`,t,e)}_subscribeToToggleTemplates(t,e,o){if(this._templateService&&e){e.__uvc_template_strings||(e.__uvc_template_strings={});for(const i of t.toggle_points){const a=i.unified_template;if(i.unified_template_mode&&a){const n=this.resolveEntity(i.match_entity,o)||this.resolveEntity(t.tracking_entity,o)||"",r=(0,g.KD)(a,e,void 0),l=this._hashString(r),c=`unified_toggle_${t.id}_${i.id}_${l}`,s=(0,p.pL)(n,e,{}),d=(0,p.jh)(n,e);this._templateService.subscribeToTemplate(r,c,()=>{this.triggerPreviewUpdate()},s,void 0,d)}}}}_hashString(t){let e=0;for(let o=0;o<t.length;o++)e=(e<<5)-e+t.charCodeAt(o),e&=e;return Math.abs(e).toString(36)}determineActiveTogglePoint(t,e,o){var i,a;const n=this.resolveEntity(t.tracking_entity,o)||t.tracking_entity;for(const a of t.toggle_points){const n=a.unified_template;if(a.unified_template_mode&&n){this.resolveEntity(a.match_entity,o);const r=(0,g.KD)(n,e,void 0),l=this._hashString(r),c=`unified_toggle_${t.id}_${a.id}_${l}`,s=null===(i=e.__uvc_template_strings)||void 0===i?void 0:i[c];if(void 0!==s){const t=(0,d.cv)(s);if(!(0,d.HD)(t)){const e=void 0!==t.match?t.match:t._isString&&void 0!==t.content?t.content:s;if(this._parseTemplateResultAsBoolean(e))return a.id}}}}if(n&&e.states[n]){const i=e.states[n].state,a=t.toggle_points.find(t=>!t.unified_template_mode&&(!((this.resolveEntity(t.match_entity,o)||t.match_entity)!==n&&t.match_entity)&&this._matchesState(t.match_state,i)));if(a)return a.id}for(const i of t.toggle_points){if(i.unified_template_mode)continue;const t=this.resolveEntity(i.match_entity,o);if(t&&e.states[t]){const o=e.states[t].state;if(this._matchesState(i.match_state,o))return i.id}}return null===(a=t.toggle_points[0])||void 0===a?void 0:a.id}_trackingStateSignature(t,e,o){const i=[],a=this.resolveEntity(t.tracking_entity,o)||t.tracking_entity;a&&e.states[a]&&i.push(`${a}:${e.states[a].state}`);for(const n of t.toggle_points){const t=this.resolveEntity(n.match_entity,o)||n.match_entity;t&&t!==a&&e.states[t]&&i.push(`${t}:${e.states[t].state}`)}return i.join("|")}_matchesState(t,e){if(!t)return!1;const o=this._tryParseNumber(e);return Array.isArray(t)?t.some(t=>this._valuesEqual(t,e,o)):this._valuesEqual(t,e,o)}_tryParseNumber(t){if("number"==typeof t)return t;if("string"==typeof t){const e=parseFloat(t);return isNaN(e)?null:e}return null}_valuesEqual(t,e,o){const i=this._tryParseNumber(t);return null!==i&&null!==o?i===o:String(t).toLowerCase()===String(e).toLowerCase()}_parseTemplateResultAsBoolean(t){if(null==t)return!1;if("boolean"==typeof t)return t;if("number"==typeof t)return 0!==t;if("string"==typeof t){const e=t.toLowerCase().trim();return"true"===e||"on"===e||"yes"===e||"1"===e}return!1}handleTogglePointClick(t,e,o,i){if(i.stopPropagation(),this._activeTogglePointIds.set(e.id,t.id),this._optimisticActive.set(e.id,{pointId:t.id,timestamp:Date.now(),stateSignature:this._trackingStateSignature(e,o)}),this.triggerPreviewUpdate(!0),t.tap_action&&"nothing"!==t.tap_action.action){const a="perform-action"===t.tap_action.action&&(t.tap_action.data||t.tap_action.service_data)?t.tap_action.entity:t.tap_action.entity||this.resolveEntity(t.match_entity)||this.resolveEntity(e.tracking_entity),n=a&&!t.tap_action.entity?Object.assign(Object.assign({},t.tap_action),{entity:a}):t.tap_action;this.handleModuleAction(n,o,i.target,void 0,a,e)}}renderIOSToggle(t,e,o){if(2!==t.toggle_points.length)return i.qy`
        <div style="padding: 16px; color: var(--error-color); text-align: center;">
          Basic toggle requires exactly 2 toggle points
        </div>
      `;const a=t.toggle_points[0],n=t.toggle_points[1],r=o===a.id,l="vertical"===t.orientation,c={compact:{width:"44px",height:"24px",thumbSize:"18px"},normal:{width:"52px",height:"28px",thumbSize:"22px"},large:{width:"64px",height:"34px",thumbSize:"28px"}}[t.size||"normal"],s=l?c.height:c.width,d=l?c.width:c.height;return i.qy`
      <style>
        .ios-toggle-container {
          display: flex;
          flex-direction: column;
          align-items: ${"left"===t.alignment?"flex-start":"right"===t.alignment?"flex-end":"center"};
          padding: 8px;
          gap: 8px;
        }

        .ios-toggle-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-text-color);
        }

        .ios-toggle-track {
          position: relative;
          width: ${s};
          height: ${d};
          border-radius: ${l?s:d};
          cursor: pointer;
          transition: background-color 0.3s ease;
          background-color: ${r?a.active_background_color||t.default_active_background_color:n.active_background_color||t.default_active_background_color};
        }

        .ios-toggle-thumb {
          position: absolute;
          ${l?`\n            left: 50%;\n            transform: translateX(-50%) ${r?"translateY(3px)":`translateY(calc(${d} - ${c.thumbSize} - 3px))`};\n          `:`\n            top: 50%;\n            transform: translateY(-50%) ${r?"translateX(3px)":`translateX(calc(${s} - ${c.thumbSize} - 3px))`};\n          `}
          width: ${c.thumbSize};
          height: ${c.thumbSize};
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }
      </style>

      <div class="ios-toggle-container">
        ${t.show_title&&t.title?i.qy`<div class="ios-toggle-title">${t.title}</div>`:""}
        <div
          class="ios-toggle-track"
          role="switch"
          tabindex="0"
          aria-checked="${r?"false":"true"}"
          aria-label="${t.title||"Toggle"}"
          @click=${o=>this.handleTogglePointClick(r?n:a,t,e,o)}
          @keydown=${o=>{"Enter"!==o.key&&" "!==o.key||(o.preventDefault(),this.handleTogglePointClick(r?n:a,t,e,o))}}
        >
          <div class="ios-toggle-thumb"></div>
        </div>
      </div>
    `}renderSegmented(t,e,o){const a="horizontal"===t.orientation,n={compact:{padding:"6px 12px",fontSize:"12px",iconSize:"16px"},normal:{padding:"8px 16px",fontSize:"14px",iconSize:"20px"},large:{padding:"12px 24px",fontSize:"16px",iconSize:"24px"}}[t.size||"normal"];return i.qy`
      <style>
        .segmented-container {
          display: flex;
          flex-direction: column;
          align-items: ${"justify"===t.alignment?"stretch":"left"===t.alignment?"flex-start":"right"===t.alignment?"flex-end":"center"};
          padding: 8px;
          gap: ${t.spacing||8}px;
          width: ${"justify"===t.alignment?"100%":"auto"};
          box-sizing: border-box;
        }

        .segmented-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-text-color);
        }

        .segmented-control {
          display: flex;
          flex-direction: ${a?"row":"column"};
          background: var(--uc-pane-bg, var(--card-background-color));
          border: var(--uc-pane-border, none);
          box-shadow: var(--uc-pane-shadow, none);
          border-radius: var(--uc-r-8, 8px);
          padding: 4px;
          gap: ${t.spacing||0}px;
          width: ${"justify"===t.alignment?"100%":"auto"};
          box-sizing: border-box;
        }

        .segmented-button {
          flex: ${"justify"===t.alignment?"1":"0 0 auto"};
          padding: ${n.padding};
          font-size: ${n.fontSize};
          border: none;
          background: transparent;
          color: var(--primary-text-color);
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: var(--uc-r-6, 6px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-direction: ${"above"===t.icon_position?"column":"below"===t.icon_position?"column-reverse":"right"===t.icon_position?"row-reverse":"row"};
        }

        .segmented-button.active {
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          transform: scale(1.02);
        }

        .segmented-button ha-icon {
          --mdc-icon-size: ${n.iconSize};
        }
      </style>

      <div class="segmented-container">
        ${t.show_title&&t.title?i.qy`<div class="segmented-title">${t.title}</div>`:""}
        <div class="segmented-control" data-uc-role="pane" role="group" aria-label="${t.title||"Toggle"}">
          ${t.toggle_points.map(a=>i.qy`
              <button
                class="segmented-button ${o===a.id?"active":""}"
                aria-pressed="${o===a.id?"true":"false"}"
                style="
                  background-color: ${o===a.id?a.active_background_color||t.default_active_background_color||"var(--primary-color)":a.background_color||t.default_background_color||"transparent"};
                  color: ${o===a.id?a.active_text_color||t.default_active_text_color||"white":a.text_color||t.default_text_color||"var(--primary-text-color)"};
                "
                @click=${o=>this.handleTogglePointClick(a,t,e,o)}
              >
                ${t.show_icons&&a.icon?i.qy`<ha-icon icon="${a.icon}"></ha-icon>`:""}
                <span>${a.label}</span>
              </button>
            `)}
        </div>
      </div>
    `}renderButtonGroup(t,e,o){const a="horizontal"===t.orientation,n={compact:{padding:"6px 12px",fontSize:"12px",iconSize:"16px"},normal:{padding:"10px 20px",fontSize:"14px",iconSize:"20px"},large:{padding:"14px 28px",fontSize:"16px",iconSize:"24px"}}[t.size||"normal"];return i.qy`
      <style>
        .button-group-container {
          display: flex;
          flex-direction: column;
          align-items: ${"left"===t.alignment?"flex-start":"right"===t.alignment?"flex-end":"center"};
          padding: 8px;
          gap: ${t.spacing||8}px;
          width: ${"justify"===t.alignment?"100%":"auto"};
        }

        .button-group-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-text-color);
        }

        .button-group {
          display: flex;
          flex-direction: ${a?"row":"column"};
          gap: ${t.spacing||8}px;
          flex-wrap: wrap;
          width: ${"justify"===t.alignment?"100%":"auto"};
        }

        .group-button {
          flex: ${"justify"===t.alignment?"1":"0 0 auto"};
          padding: ${n.padding};
          font-size: ${n.fontSize};
          border: 2px solid var(--divider-color);
          border-radius: var(--uc-r-8, 8px);
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-direction: ${"above"===t.icon_position?"column":"below"===t.icon_position?"column-reverse":"right"===t.icon_position?"row-reverse":"row"};
        }

        .group-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .group-button.active {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 1px var(--primary-color);
        }

        .group-button ha-icon {
          --mdc-icon-size: ${n.iconSize};
        }
      </style>

      <div class="button-group-container">
        ${t.show_title&&t.title?i.qy`<div class="button-group-title">${t.title}</div>`:""}
        <div class="button-group" role="group" aria-label="${t.title||"Toggle"}">
          ${t.toggle_points.map(a=>i.qy`
              <button
                class="group-button ${o===a.id?"active":""}"
                aria-pressed="${o===a.id?"true":"false"}"
                style="
                  background-color: ${o===a.id?a.active_background_color||t.default_active_background_color||"var(--primary-color)":a.background_color||t.default_background_color||"var(--secondary-background-color)"};
                  color: ${o===a.id?a.active_text_color||t.default_active_text_color||"white":a.text_color||t.default_text_color||"var(--primary-text-color)"};
                  border-color: ${o===a.id?"var(--primary-color)":"var(--divider-color)"};
                "
                @click=${o=>this.handleTogglePointClick(a,t,e,o)}
              >
                ${t.show_icons&&a.icon?i.qy`<ha-icon icon="${a.icon}"></ha-icon>`:""}
                <span>${a.label}</span>
              </button>
            `)}
        </div>
      </div>
    `}renderSliderTrack(t,e,o){const a=t.toggle_points.findIndex(t=>t.id===o),n=t.toggle_points.length>1?a/(t.toggle_points.length-1)*100:0,r="vertical"===t.orientation,l=t.spacing||0,c=t.toggle_points.length,s="justify"===t.alignment?"100%":40*c+l*(c+1)+"px";return i.qy`
      <style>
        .slider-track-container {
          display: flex;
          flex-direction: column;
          align-items: ${"left"===t.alignment?"flex-start":"right"===t.alignment?"flex-end":"center"};
          padding: 8px;
          gap: 12px;
          width: ${"justify"===t.alignment?"100%":"auto"};
        }

        .slider-track-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-text-color);
        }

        .slider-track-wrapper {
          position: relative;
          ${r?`\n            width: 40px;\n            height: ${s};\n          `:`\n            width: ${s};\n            height: 40px;\n          `}
          background: var(--secondary-background-color);
          border-radius: var(--uc-r-20, 20px);
          overflow: hidden;
        }

        .slider-track-progress {
          position: absolute;
          background: var(--primary-color);
          transition: ${r?"height":"width"} 0.3s ease;
          border-radius: var(--uc-r-20, 20px);
          ${r?`\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: ${n}%;\n          `:`\n            top: 0;\n            left: 0;\n            height: 100%;\n            width: ${n}%;\n          `}
        }

        .slider-track-markers {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: ${r?"column":"row"};
          align-items: center;
          justify-content: space-evenly;
          padding: 0;
        }

        .slider-marker {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1;
          transition: transform 0.2s ease;
        }

        .slider-marker:hover {
          transform: scale(1.1);
        }

        .slider-marker.active {
          transform: scale(1.2);
        }

        .slider-marker span {
          font-size: 12px;
          font-weight: 600;
          color: var(--primary-text-color);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
      </style>

      <div class="slider-track-container">
        ${t.show_title&&t.title?i.qy`<div class="slider-track-title">${t.title}</div>`:""}
        <div class="slider-track-wrapper">
          <div class="slider-track-progress"></div>
          <div class="slider-track-markers">
            ${t.toggle_points.map(a=>i.qy`
                <div
                  class="slider-marker ${o===a.id?"active":""}"
                  role="button"
                  tabindex="0"
                  aria-pressed="${o===a.id?"true":"false"}"
                  aria-label="${a.label}"
                  @click=${o=>this.handleTogglePointClick(a,t,e,o)}
                  @keydown=${o=>{"Enter"!==o.key&&" "!==o.key||(o.preventDefault(),this.handleTogglePointClick(a,t,e,o))}}
                >
                  ${t.show_icons&&a.icon?i.qy`<ha-icon icon="${a.icon}"></ha-icon>`:i.qy`<span>${a.label}</span>`}
                </div>
              `)}
          </div>
        </div>
      </div>
    `}renderTimeline(t,e,o){const a="vertical"===t.orientation,n=(t.toggle_points.findIndex(t=>t.id===o),{compact:{dotSize:"12px",lineThickness:"2px",fontSize:"11px",iconSize:"14px"},normal:{dotSize:"16px",lineThickness:"3px",fontSize:"13px",iconSize:"18px"},large:{dotSize:"20px",lineThickness:"4px",fontSize:"15px",iconSize:"22px"}}[t.size||"normal"]);return i.qy`
      <style>
        .timeline-container {
          display: flex;
          flex-direction: column;
          align-items: ${"left"===t.alignment?"flex-start":"right"===t.alignment?"flex-end":"center"};
          padding: 8px;
          gap: 12px;
          width: ${"justify"===t.alignment?"100%":"auto"};
        }

        .timeline-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-text-color);
        }

        .timeline-track {
          display: flex;
          flex-direction: ${a?"column":"row"};
          align-items: ${"flex-start"};
          position: relative;
          gap: ${t.spacing||8}px;
        }

        .timeline-line {
          position: absolute;
          background: var(--divider-color);
          z-index: 0;
          ${a?`\n            left: 16%;\n            top: calc(${n.dotSize} / 2);\n            bottom: calc(${n.dotSize} / 2);\n            width: ${n.lineThickness};\n          `:`\n            top: calc(17px / 2 - 3px / 2);\n            left: calc(${n.dotSize} / 2);\n            right: calc(${n.dotSize} / 2);\n            height: ${n.lineThickness};\n          `}
        }

        .timeline-point {
          position: relative;
          display: flex;
          flex-direction: ${a?"row":"column"};
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          cursor: pointer;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .timeline-dot {
          width: ${n.dotSize};
          height: ${n.dotSize};
          border-radius: 50%;
          border: ${n.lineThickness} solid var(--primary-color);
          background: var(--uc-pane-bg, var(--card-background-color));
          transition: all 0.3s ease;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
          box-sizing: border-box;
        }

        .timeline-point.active .timeline-dot {
          background: var(--primary-color);
          transform: scale(1.3);
          box-shadow: 0 0 12px rgba(var(--rgb-primary-color), 0.6);
        }

        .timeline-point:hover .timeline-dot {
          transform: scale(1.15);
        }

        .timeline-label {
          font-size: ${n.fontSize};
          font-weight: 500;
          color: var(--secondary-text-color);
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .timeline-point.active .timeline-label {
          color: var(--primary-color);
          font-weight: 600;
        }

        .timeline-point ha-icon {
          --mdc-icon-size: ${n.iconSize};
          color: var(--secondary-text-color);
          transition: color 0.3s ease;
        }

        .timeline-point.active ha-icon {
          color: var(--primary-color);
        }
      </style>

      <div class="timeline-container">
        ${t.show_title&&t.title?i.qy`<div class="timeline-title">${t.title}</div>`:""}
        <div class="timeline-track">
          <div class="timeline-line"></div>
          ${t.toggle_points.map(a=>i.qy`
              <div
                class="timeline-point ${o===a.id?"active":""}"
                role="button"
                tabindex="0"
                aria-pressed="${o===a.id?"true":"false"}"
                aria-label="${a.label}"
                @click=${o=>this.handleTogglePointClick(a,t,e,o)}
                @keydown=${o=>{"Enter"!==o.key&&" "!==o.key||(o.preventDefault(),this.handleTogglePointClick(a,t,e,o))}}
              >
                <div class="timeline-dot"></div>
                ${t.show_icons&&a.icon?i.qy`<ha-icon icon="${a.icon}"></ha-icon>`:i.qy`<span class="timeline-label">${a.label}</span>`}
              </div>
            `)}
        </div>
      </div>
    `}renderMinimal(t,e,o){const a="horizontal"===t.orientation,n={compact:{padding:"4px 8px",fontSize:"12px",iconSize:"16px"},normal:{padding:"6px 12px",fontSize:"14px",iconSize:"20px"},large:{padding:"8px 16px",fontSize:"16px",iconSize:"24px"}}[t.size||"normal"];return i.qy`
      <style>
        .minimal-container {
          display: flex;
          flex-direction: column;
          align-items: ${"left"===t.alignment?"flex-start":"right"===t.alignment?"flex-end":"center"};
          padding: 8px;
          gap: ${t.spacing||8}px;
          width: ${"justify"===t.alignment?"100%":"auto"};
        }

        .minimal-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-text-color);
        }

        .minimal-options {
          display: flex;
          flex-direction: ${a?"row":"column"};
          gap: ${t.spacing||8}px;
          width: ${"justify"===t.alignment?"100%":"auto"};
        }

        .minimal-option {
          flex: ${"justify"===t.alignment?"1":"0 0 auto"};
          padding: ${n.padding};
          font-size: ${n.fontSize};
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          opacity: 0.6;
          flex-direction: ${"above"===t.icon_position?"column":"below"===t.icon_position?"column-reverse":"right"===t.icon_position?"row-reverse":"row"};
        }

        .minimal-option:hover {
          opacity: 0.8;
        }

        .minimal-option.active {
          opacity: 1;
          font-weight: 600;
        }

        .minimal-option ha-icon {
          --mdc-icon-size: ${n.iconSize};
        }
      </style>

      <div class="minimal-container">
        ${t.show_title&&t.title?i.qy`<div class="minimal-title">${t.title}</div>`:""}
        <div class="minimal-options" role="group" aria-label="${t.title||"Toggle"}">
          ${t.toggle_points.map(a=>i.qy`
              <button
                class="minimal-option ${o===a.id?"active":""}"
                aria-pressed="${o===a.id?"true":"false"}"
                style="
                  color: ${o===a.id?a.active_text_color||t.default_active_text_color||"var(--primary-color)":a.text_color||t.default_text_color||"var(--primary-text-color)"};
                "
                @click=${o=>this.handleTogglePointClick(a,t,e,o)}
              >
                ${t.show_icons&&a.icon?i.qy`<ha-icon icon="${a.icon}"></ha-icon>`:""}
                <span>${a.label}</span>
              </button>
            `)}
        </div>
      </div>
    `}getStyles(){return`${a.m.getSliderStyles()}`}}u.OPTIMISTIC_ACTIVE_WINDOW_MS=4e3}};