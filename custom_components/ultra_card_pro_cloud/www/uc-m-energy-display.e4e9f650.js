export const __webpack_esm_ids__=[9352];export const __webpack_esm_modules__={4777(e,t,o){o.d(t,{UltraEnergyDisplayModule:()=>p});var i=o(2618),n=o(7475),r=o(5147),a=o(8938),s=o(378),d=o(6478);o(7921);const l={solar:"#f59e0b",grid:"#3b82f6",battery:"#22c55e",home:"#06b6d4",device:"#8b5cf6"},c={solar:"mdi:solar-power",grid:"mdi:transmission-tower",battery:"mdi:battery",home:"mdi:home",device:"mdi:flash"},y={solar:"Solar",grid:"Grid",battery:"Battery",home:"Home",device:"Device"};function h(e,t){return{id:t(`energy_${e}`),node_type:e,entity:"",label:y[e],icon:c[e],color:l[e],show_arrow:!0,enabled:!0}}class p extends n.m{constructor(){super(...arguments),this._draggedDevice=null,this._expandedCoreSections=new Set,this._expandedDeviceIds=new Set,this.handlesOwnDesignStyles=!0,this.metadata={type:"energy_display",title:"Energy Display",description:"Visualize energy flow between grid, solar, battery, home and devices",author:"WJD Designs",version:"1.0.0",icon:"mdi:lightning-bolt",category:"data",tags:["pro","premium","energy","solar","grid","battery","power","flow","sankey"]}}createDefault(e,t){const o=e=>this.generateId(e);return{id:e||this.generateId("energy_display"),type:"energy_display",display_style:"circle_flow",nodes:[h("solar",o),h("grid",o),h("battery",o),h("home",o)],show_self_sufficiency:!0,animation_speed:"normal",flow_line_width:2,show_values:!0,unit_display:"auto",show_labels:!0,show_icons:!0,circle_size:48,node_spacing:24,box_border_width:2,box_border_radius:12,gauge_size:80,sankey_width:400,sankey_curve_factor:.5,sankey_column_spacing:16,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=e,o=[...super.validate(e).errors];return t.nodes&&Array.isArray(t.nodes)||o.push("At least one energy node is required"),{valid:0===o.length,errors:o}}getStyles(){return`\n      ${n.m.getSliderStyles()}\n\n      .core-section-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 10px 12px;\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 8px;\n        cursor: pointer;\n        border: 1px solid var(--divider-color);\n      }\n      .core-section-header:hover { background: var(--primary-color); opacity: 0.9; }\n      .core-section-header ha-icon.expand-icon { transition: transform 0.2s ease; }\n      .core-section-header ha-icon.expand-icon.expanded { transform: rotate(180deg); }\n\n      .entity-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 12px;\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 8px;\n        cursor: move;\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        transition: all 0.2s ease;\n      }\n      .entity-row.dragging { opacity: 0.5; transform: scale(0.95); }\n      .entity-row .drag-handle { cursor: grab; color: var(--secondary-text-color); flex-shrink: 0; }\n      .entity-row .expand-icon { cursor: pointer; flex-shrink: 0; }\n      .entity-row .expand-icon.expanded { transform: rotate(180deg); }\n      .entity-row .delete-icon { cursor: pointer; color: var(--error-color); flex-shrink: 0; }\n\n      .entity-settings {\n        padding: 16px;\n        background: rgba(var(--rgb-primary-color), 0.05);\n        border-left: 3px solid var(--primary-color);\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        margin-bottom: 8px;\n      }\n\n      .add-entity-btn {\n        width: 100%;\n        padding: 12px;\n        background: var(--primary-color);\n        color: var(--text-primary-color);\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        cursor: pointer;\n        font-size: 14px;\n        font-weight: 600;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        margin-top: 8px;\n      }\n\n      .energy-display-preview-wrapper {\n        display: block;\n      }\n      .energy-display-module {\n        position: relative;\n      }\n      .energy-display-module .energy-flow-dot {\n        offset-path: var(--flow-path);\n        offset-distance: 0%;\n        animation: energy-flow-dot var(--flow-duration) linear infinite;\n        will-change: offset-distance;\n      }\n      @keyframes energy-flow-dot {\n        to { offset-distance: 100%; }\n      }\n      .energy-display-module .node-value {\n        transition: opacity 0.5s ease, transform 0.3s ease;\n      }\n      .energy-display-module foreignObject {\n        pointer-events: none;\n      }\n      .energy-display-module foreignObject * {\n        pointer-events: auto;\n      }\n      .energy-display-module .energy-node circle {\n        transition: stroke-width 0.2s ease, filter 0.2s ease;\n      }\n      .energy-display-module .energy-node:hover circle {\n        filter: brightness(1.05);\n      }\n      /* Only max-width so explicit height on SVG is preserved (dashboard flex can collapse height: auto) */\n      .energy-display-module svg {\n        max-width: 100%;\n      }\n      .energy-display-module.energy-circle-flow svg,\n      .energy-display-module.energy-sankey svg {\n        min-height: 200px;\n      }\n    `}renderGeneralTab(e,t,o,i){var n,r,a;const d=e,l=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",c=s.xd.checkIntegrationAuth(t);return"pro"===(null===(r=null==c?void 0:c.subscription)||void 0===r?void 0:r.tier)&&"active"===(null===(a=null==c?void 0:c.subscription)||void 0===a?void 0:a.status)?this._renderEditorContent(d,t,o,i):this._renderProLockUI(l)}_renderProLockUI(e){return i.qy`
      <div
        class="pro-lock-container"
        data-uc-role="pane"
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px;
          text-align: center;
          background: var(--uc-pane-bg, var(--secondary-background-color));
          border-radius: var(--uc-r-12, 12px);
          margin: 16px;
        "
      >
        <ha-icon
          icon="mdi:lock"
          style="color: var(--primary-color); --mdi-icon-size: 48px; margin-bottom: 16px;"
        ></ha-icon>
        <div style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">
          ${(0,d.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
        <div
          style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 300px;"
        >
          ${(0,d.kg)("editor.energy_display.pro_description",e,"Energy Display is a Pro feature. Visualize energy flow between grid, solar, battery, home and devices with Circle Flow, Box Flow, or Sankey styles.")}
        </div>
        <a
          href="https://ultracard.io/pro"
          target="_blank"
          style="
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: var(--primary-color);
            color: var(--text-primary-color, white);
            border-radius: var(--uc-r-8, 8px);
            text-decoration: none;
            font-weight: 600;
          "
        >
          <ha-icon icon="mdi:crown" style="--mdi-icon-size: 20px;"></ha-icon>
          ${(0,d.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
        </a>
      </div>
    `}_getCoreNodes(e){const t=e.nodes||[],o=["solar","grid","battery","home"],i=[];for(const e of o){const o=t.find(t=>t.node_type===e);i.push(o||{id:this.generateId(`energy_${e}`),node_type:e,entity:"",label:y[e],icon:c[e],color:l[e],show_arrow:!0,enabled:!0})}return i}_getDeviceNodes(e){return(e.nodes||[]).filter(e=>"device"===e.node_type)}_setNodes(e,t,o,i){t({nodes:[...o,...i]})}_updateCoreNode(e,t,o,i){const n=this._getCoreNodes(e),r=this._getDeviceNodes(e),a=n.findIndex(e=>e.node_type===t);-1!==a&&(n[a]=Object.assign(Object.assign({},n[a]),o),this._setNodes(e,i,n,r))}_updateDeviceAtIndex(e,t,o,i){const n=this._getCoreNodes(e),r=this._getDeviceNodes(e);t<0||t>=r.length||(r[t]=Object.assign(Object.assign({},r[t]),o),this._setNodes(e,i,n,r))}_addDevice(e,t){const o=this._getCoreNodes(e),i=this._getDeviceNodes(e),n={id:this.generateId("energy_device"),node_type:"device",entity:"",label:"Device",icon:c.device,color:l.device,show_arrow:!0,enabled:!0};this._expandedDeviceIds.add(n.id),this._setNodes(e,t,o,[...i,n])}_deleteDevice(e,t,o){const i=this._getCoreNodes(e),n=this._getDeviceNodes(e),r=n[t];r&&this._expandedDeviceIds.delete(r.id);const a=n.filter((e,o)=>o!==t);this._setNodes(e,o,i,a)}_reorderDevices(e,t,o,i){const n=this._getCoreNodes(e),r=[...this._getDeviceNodes(e)],[a]=r.splice(t,1);r.splice(o,0,a),this._setNodes(e,i,n,r)}_toggleCoreSection(e){this._expandedCoreSections.has(e)?this._expandedCoreSections.delete(e):this._expandedCoreSections.add(e),this.triggerPreviewUpdate()}_toggleDeviceExpand(e){this._expandedDeviceIds.has(e)?this._expandedDeviceIds.delete(e):this._expandedDeviceIds.add(e),this.triggerPreviewUpdate()}_onDeviceDragStart(e,t){this._draggedDevice=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move")}_onDeviceDragEnd(){this._draggedDevice=null,this.triggerPreviewUpdate()}_onDeviceDrop(e,t,o,i){if(e.preventDefault(),!this._draggedDevice)return;const n=this._getDeviceNodes(o).findIndex(e=>e.id===this._draggedDevice.id);-1!==n&&n!==t&&(this._reorderDevices(o,n,t,i),this._draggedDevice=null)}_renderEditorContent(e,t,o,n){var r,a,s,h,p,_,g,u,v,$;const x=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en",f=this._getCoreNodes(e),m=this._getDeviceNodes(e),b=e.display_style||"circle_flow";return i.qy`
      ${this.injectUcFormStyles()}

      <!-- Section 1: Display Style -->
      ${this.renderSettingsSection((0,d.kg)("editor.energy_display.style_title",x,"Display Style"),(0,d.kg)("editor.energy_display.style_desc",x,"Choose the visual layout for the energy flow display."),[{title:(0,d.kg)("editor.energy_display.style",x,"Layout Style"),description:"",hass:t,data:{display_style:b},schema:[this.selectField("display_style",[{value:"circle_flow",label:(0,d.kg)("editor.energy_display.style_circle",x,"Circle Flow")},{value:"box_flow",label:(0,d.kg)("editor.energy_display.style_box",x,"Box Flow")},{value:"sankey",label:(0,d.kg)("editor.energy_display.style_sankey",x,"Sankey")}])],onChange:e=>n({display_style:e.detail.value.display_style})}])}

      <!-- Section 2: Core Energy Nodes -->
      <div class="settings-section" style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;">
        <div class="section-title">${(0,d.kg)("editor.energy_display.core_nodes_title",x,"Core Energy Nodes")}</div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px;">
          ${(0,d.kg)("editor.energy_display.core_nodes_desc",x,"Configure Solar, Grid, Battery, and Home. Use power sensor entities (W).")}
        </div>
        ${f.map(r=>{const a=this._expandedCoreSections.has(r.node_type);return i.qy`
            <div>
              <div
                class="core-section-header"
                @click=${()=>this._toggleCoreSection(r.node_type)}
              >
                <span style="display: flex; align-items: center; gap: 8px;">
                  <ha-icon icon="${r.icon||c[r.node_type]}"></ha-icon>
                  <span>${r.label||y[r.node_type]}</span>
                </span>
                <ha-icon class="expand-icon ${a?"expanded":""}" icon="mdi:chevron-down"></ha-icon>
              </div>
              ${a?i.qy`
                    <div class="entity-settings">
                      ${this.renderEntityPickerWithVariables(t,o,"entity",r.entity||"",t=>this._updateCoreNode(e,r.node_type,{entity:t},n),["sensor"],`${r.node_type} power entity`)}
                      ${"battery"===r.node_type?this.renderEntityPickerWithVariables(t,o,"secondary_entity",r.secondary_entity||"",t=>this._updateCoreNode(e,r.node_type,{secondary_entity:t||void 0},n),["sensor"],"Battery SoC % (optional)"):"grid"===r.node_type?this.renderEntityPickerWithVariables(t,o,"secondary_entity",r.secondary_entity||"",t=>this._updateCoreNode(e,r.node_type,{secondary_entity:t||void 0},n),["sensor"],"Grid export sensor (optional)"):""}
                      ${this.renderFieldSection((0,d.kg)("editor.energy_display.node_label",x,"Label"),"",t,{label:r.label||""},[this.textField("label")],t=>this._updateCoreNode(e,r.node_type,{label:t.detail.value.label},n))}
                      ${this.renderFieldSection((0,d.kg)("editor.energy_display.node_icon",x,"Icon"),"",t,{icon:r.icon||""},[this.iconField("icon")],t=>this._updateCoreNode(e,r.node_type,{icon:t.detail.value.icon},n))}
                      <div class="form-field" style="margin-top: 12px;">
                        <label class="form-label">${(0,d.kg)("editor.energy_display.node_color",x,"Color")}</label>
                        <ultra-color-picker .label="" .value="${r.color||""}" .defaultValue="${l[r.node_type]}" .hass=${t} @value-changed=${t=>this._updateCoreNode(e,r.node_type,{color:t.detail.value},n)}></ultra-color-picker>
                      </div>
                      ${this.renderFieldSection((0,d.kg)("editor.energy_display.show_arrow",x,"Show directional arrow"),"",t,{show_arrow:!1!==r.show_arrow},[this.booleanField("show_arrow")],t=>this._updateCoreNode(e,r.node_type,{show_arrow:t.detail.value.show_arrow},n))}
                      ${this.renderFieldSection((0,d.kg)("editor.energy_display.node_enabled",x,"Enabled"),"",t,{enabled:!1!==r.enabled},[this.booleanField("enabled")],t=>this._updateCoreNode(e,r.node_type,{enabled:t.detail.value.enabled},n))}
                    </div>
                  `:""}
            </div>
          `})}
      </div>

      <!-- Section 3: Custom Device Nodes -->
      <div class="settings-section" style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;">
        <div class="section-title">${(0,d.kg)("editor.energy_display.devices_title",x,"Custom Device Nodes")}</div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px;">
          ${(0,d.kg)("editor.energy_display.devices_desc",x,"Add devices to show individual power consumption. Drag to reorder.")}
        </div>
        <div class="entity-rows-container">
          ${m.map((i,r)=>this._renderDeviceRow(i,r,e,t,o,n,x))}
        </div>
        <button class="add-entity-btn" @click=${()=>this._addDevice(e,n)}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${(0,d.kg)("editor.energy_display.add_device",x,"Add Device")}
        </button>
      </div>

      <!-- Section 4: Flow and Animation -->
      ${this.renderSettingsSection((0,d.kg)("editor.energy_display.flow_title",x,"Flow and Animation"),"",[{title:(0,d.kg)("editor.energy_display.animation_speed",x,"Animation speed"),description:"",hass:t,data:{animation_speed:e.animation_speed||"normal"},schema:[this.selectField("animation_speed",[{value:"none",label:(0,d.kg)("editor.energy_display.speed_none",x,"None")},{value:"slow",label:(0,d.kg)("editor.energy_display.speed_slow",x,"Slow")},{value:"normal",label:(0,d.kg)("editor.energy_display.speed_normal",x,"Normal")},{value:"fast",label:(0,d.kg)("editor.energy_display.speed_fast",x,"Fast")}])],onChange:e=>n({animation_speed:e.detail.value.animation_speed})},{title:(0,d.kg)("editor.energy_display.show_values",x,"Show values"),description:"",hass:t,data:{show_values:!1!==e.show_values},schema:[this.booleanField("show_values")],onChange:e=>n({show_values:e.detail.value.show_values})},{title:(0,d.kg)("editor.energy_display.unit_display",x,"Unit display"),description:"",hass:t,data:{unit_display:e.unit_display||"auto"},schema:[this.selectField("unit_display",[{value:"auto",label:"Auto (W / kW)"},{value:"W",label:"W"},{value:"kW",label:"kW"}])],onChange:e=>n({unit_display:e.detail.value.unit_display})},{title:(0,d.kg)("editor.energy_display.show_labels",x,"Show labels"),description:"",hass:t,data:{show_labels:!1!==e.show_labels},schema:[this.booleanField("show_labels")],onChange:e=>n({show_labels:e.detail.value.show_labels})},{title:(0,d.kg)("editor.energy_display.show_icons",x,"Show icons"),description:"",hass:t,data:{show_icons:!1!==e.show_icons},schema:[this.booleanField("show_icons")],onChange:e=>n({show_icons:e.detail.value.show_icons})},{title:(0,d.kg)("editor.energy_display.show_self_sufficiency",x,"Show self-sufficiency gauge"),description:"",hass:t,data:{show_self_sufficiency:!1!==e.show_self_sufficiency},schema:[this.booleanField("show_self_sufficiency")],onChange:e=>n({show_self_sufficiency:e.detail.value.show_self_sufficiency})}])}
      ${this.renderSliderField((0,d.kg)("editor.energy_display.flow_line_width",x,"Flow line width"),(0,d.kg)("editor.energy_display.flow_line_width_desc",x,"Line thickness (px)"),null!==(a=e.flow_line_width)&&void 0!==a?a:2,2,1,6,1,e=>n({flow_line_width:e}),"px")}
      ${!1!==e.show_self_sufficiency?this.renderEntityPickerWithVariables(t,o,"self_sufficiency_entity",e.self_sufficiency_entity||"",e=>n({self_sufficiency_entity:e||void 0}),["sensor"],"Self-sufficiency entity (optional override)"):""}

      <!-- Section 5: Style-specific options -->
      <div class="settings-section" style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;">
        <div class="section-title">${(0,d.kg)("editor.energy_display.style_options_title",x,"Style Options")}</div>
        ${"circle_flow"===b?i.qy`
              ${this.renderSliderField((0,d.kg)("editor.energy_display.circle_size",x,"Circle size"),(0,d.kg)("editor.energy_display.circle_size_desc",x,"Node circle diameter (px)"),null!==(s=e.circle_size)&&void 0!==s?s:48,48,24,96,4,e=>n({circle_size:e}),"px")}
              ${this.renderSliderField((0,d.kg)("editor.energy_display.node_spacing",x,"Node spacing"),(0,d.kg)("editor.energy_display.node_spacing_desc",x,"Spacing between nodes (px)"),null!==(h=e.node_spacing)&&void 0!==h?h:24,24,8,64,4,e=>n({node_spacing:e}),"px")}
            `:"box_flow"===b?i.qy`
                ${this.renderSliderField((0,d.kg)("editor.energy_display.box_border_width",x,"Box border width"),"px",null!==(p=e.box_border_width)&&void 0!==p?p:2,2,1,8,1,e=>n({box_border_width:e}),"px")}
                ${this.renderSliderField((0,d.kg)("editor.energy_display.box_corner_radius",x,"Box corner radius"),"px",null!==(_=e.box_border_radius)&&void 0!==_?_:12,12,0,32,2,e=>n({box_border_radius:e}),"px")}
                ${this.renderSliderField((0,d.kg)("editor.energy_display.gauge_size",x,"Gauge size"),(0,d.kg)("editor.energy_display.gauge_size_desc",x,"Central gauge diameter (px)"),null!==(g=e.gauge_size)&&void 0!==g?g:80,80,40,160,8,e=>n({gauge_size:e}),"px")}
              `:i.qy`
                ${this.renderSliderField((0,d.kg)("editor.energy_display.sankey_width",x,"Sankey width"),(0,d.kg)("editor.energy_display.sankey_width_desc",x,"Diagram width (px)"),null!==(u=e.sankey_width)&&void 0!==u?u:400,400,200,800,50,e=>n({sankey_width:e}),"px")}
                ${this.renderSliderField((0,d.kg)("editor.energy_display.curve_factor",x,"Curve factor"),(0,d.kg)("editor.energy_display.curve_factor_desc",x,"Path curvature"),null!==(v=e.sankey_curve_factor)&&void 0!==v?v:.5,.5,.1,1,.1,e=>n({sankey_curve_factor:e}))}
                ${this.renderSliderField((0,d.kg)("editor.energy_display.column_spacing",x,"Column spacing"),"px",null!==($=e.sankey_column_spacing)&&void 0!==$?$:16,16,8,48,4,e=>n({sankey_column_spacing:e}),"px")}
              `}
      </div>
    `}_renderDeviceRow(e,t,o,n,r,a,s="en"){var y;const h=this._expandedDeviceIds.has(e.id);return i.qy`
      <div
        class="entity-row ${(null===(y=this._draggedDevice)||void 0===y?void 0:y.id)===e.id?"dragging":""}"
        data-uc-role="pane"
        draggable="true"
        @dragstart=${t=>this._onDeviceDragStart(t,e)}
        @dragend=${()=>this._onDeviceDragEnd()}
        @dragover=${e=>{e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move")}}
        @drop=${e=>this._onDeviceDrop(e,t,o,a)}
      >
        <ha-icon icon="mdi:drag" class="drag-handle"></ha-icon>
        <ha-icon icon="${e.icon||c.device}" style="flex-shrink: 0;"></ha-icon>
        <div class="entity-info" style="flex: 1; font-size: 14px; overflow: hidden; text-overflow: ellipsis;">
          ${e.label||"Device"} ${e.entity?` · ${e.entity}`:" · No entity"}
        </div>
        <ha-icon class="expand-icon ${h?"expanded":""}" icon="mdi:chevron-down" @click=${()=>this._toggleDeviceExpand(e.id)}></ha-icon>
        <ha-icon class="delete-icon" icon="mdi:delete" @click=${()=>this._deleteDevice(o,t,a)}></ha-icon>
      </div>
      ${h?i.qy`
            <div class="entity-settings">
              ${this.renderEntityPickerWithVariables(n,r,"entity",e.entity||"",e=>this._updateDeviceAtIndex(o,t,{entity:e},a),["sensor"],"Power entity")}
              ${this.renderFieldSection((0,d.kg)("editor.energy_display.node_label",s,"Label"),"",n,{label:e.label||""},[this.textField("label")],e=>this._updateDeviceAtIndex(o,t,{label:e.detail.value.label},a))}
              ${this.renderFieldSection((0,d.kg)("editor.energy_display.node_icon",s,"Icon"),"",n,{icon:e.icon||""},[this.iconField("icon")],e=>this._updateDeviceAtIndex(o,t,{icon:e.detail.value.icon},a))}
              <div class="form-field" style="margin-top: 12px;">
                <label class="form-label">${(0,d.kg)("editor.energy_display.node_color",s,"Color")}</label>
                <ultra-color-picker .label="" .value="${e.color||""}" .defaultValue="${l.device}" .hass=${n} @value-changed=${e=>this._updateDeviceAtIndex(o,t,{color:e.detail.value},a)}></ultra-color-picker>
              </div>
            </div>
          `:""}
    `}renderActionsTab(e,t,o,i){return r.A.render(e,t,e=>i(e))}renderOtherTab(e,t,o,i){return a.X.render(e,t,e=>i(e))}renderPreview(e,t,o,n){var r;const a=e,s=a.display_style||"circle_flow";let d;d="circle_flow"===s?this._renderCircleFlow(a,t,o):"box_flow"===s?this._renderBoxFlow(a,t,o):this._renderSankey(a,t,o);const l=this.createGestureHandlers(e.id,{tap_action:a.tap_action,hold_action:a.hold_action,double_tap_action:a.double_tap_action,entity:void 0,module:a},t,o),c=i.qy`
      <div
        class="energy-display-preview-wrapper"
        @pointerdown=${l.onPointerDown}
        @pointermove=${l.onPointerMove}
        @pointerup=${l.onPointerUp}
        @pointerleave=${l.onPointerLeave}
        @pointercancel=${l.onPointerCancel}
        style="cursor: ${"nothing"!==(null===(r=a.tap_action)||void 0===r?void 0:r.action)?"pointer":"default"}; display: block; width: 100%; box-sizing: border-box;"
      >
        ${d}
      </div>
    `;return this.wrapWithAnimation(c,e,t)}_parsePowerFromState(e,t){const o=(null!=e?e:"").toString().trim(),i=(null!=t?t:"").toLowerCase();let n=parseFloat(o.replace(/[^\d.-]/g,""))||0;return(i.includes("kw")||o.toLowerCase().includes("kw"))&&(n*=1e3),{value:n,unit:Math.abs(n)>=1e3?"kW":"W"}}_getNodePower(e,t,o){var i,n;const r=this.resolveEntity(o,t);if(!r||!e.states[r])return{value:0,unit:"W",text:"—"};const a=e.states[r],s=null!==(n=null===(i=a.attributes)||void 0===i?void 0:i.unit_of_measurement)&&void 0!==n?n:"",{value:d,unit:l}=this._parsePowerFromState(a.state,s),c="kW"===l?"kW":"W";return{value:d,unit:l,text:0===d?"0 W":`${("kW"===l?d/1e3:d).toFixed(1)} ${c}`}}_getNodeSecondary(e,t,o){const i=this.resolveEntity(o,t);if(!i||!e.states[i])return"—";const n=e.states[i],r=parseFloat(String(n.state));return isNaN(r)?String(n.state):`${r.toFixed(1)} %`}_formatPower(e,t){const o=Math.abs(e),i=e<0?"−":"";return"kW"===t?`${i}${(o/1e3).toFixed(1)} kW`:"W"===t?`${i}${Math.round(o)} W`:o>=1e3?`${i}${(o/1e3).toFixed(1)} kW`:`${i}${Math.round(o)} W`}_getFlowDuration(e){return"none"===e?"0s":"slow"===e?"3s":"fast"===e?"1s":"2s"}_renderCircleFlow(e,t,o){var n,r,a;const s=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",c=this.buildDesignStyles(e,t),h=this.buildStyleString(c),p=this._getCoreNodes(e),_=this._getDeviceNodes(e),g=!1!==e.show_values,u=!1!==e.show_labels,v=Math.max(24,Math.min(96,null!==(r=e.circle_size)&&void 0!==r?r:48)),$=Math.max(1,Math.min(6,null!==(a=e.flow_line_width)&&void 0!==a?a:2)),x=this._getFlowDuration(e.animation_speed||"normal"),f="0s"!==x,m=v/2,b=_.filter(e=>!1!==e.enabled),w=b.length,k=[];["solar","grid","battery","home"].forEach(e=>{const t=p.find(t=>t.node_type===e);t&&!1!==t.enabled&&k.push(t)});const M=k.length+w,S=Math.max(80,M*(v+10)/(2*Math.PI)),D=m+(u?22:8)+4,W=Math.round(2*(S+D)),C=W,F=W/2,N=C/2,P={solar:-Math.PI/2,grid:Math.PI,home:0,battery:Math.PI/2},z=[];if(k.forEach(e=>{var t;const o=null!==(t=P[e.node_type])&&void 0!==t?t:0;z.push({node:e,x:F+S*Math.cos(o),y:N+S*Math.sin(o)})}),w>0){const e=3*Math.PI/4,t=7*Math.PI/4;b.forEach((o,i)=>{const n=e+(1===w?.5:i/(w-1))*(t-e);z.push({node:o,x:F+S*Math.cos(n),y:N+S*Math.sin(n)})})}if(0===z.length)return i.qy`
        <div class="energy-display-module" style="${h} padding: 16px; min-height: 200px;">
          ${this.renderGradientErrorState((0,d.kg)("editor.energy_display.error_no_nodes",s,"Configure energy nodes"),(0,d.kg)("editor.energy_display.error_no_nodes_desc",s,"Add entities for Solar, Grid, Battery and Home in the General tab."),"mdi:lightning-bolt")}
        </div>
      `;const J=[];return z.forEach(({node:e,x:i,y:n})=>{const r=this.resolveEntity(e.entity,o);let a,s=!1;if(r&&t.states[r]){const i=this._getNodePower(t,o,e.entity);s=Math.abs(i.value)>0}a="battery"===e.node_type?this._getNodePower(t,o,e.entity).value<0:"solar"===e.node_type||"grid"===e.node_type;const d=a?`M ${i} ${n} L ${F} ${N}`:`M ${F} ${N} L ${i} ${n}`;J.push({d,color:e.color||l[e.node_type],hasFlow:s||f})}),i.qy`
      <div class="energy-display-module energy-circle-flow" style="${h} padding: 12px; width: 100%; box-sizing: border-box;">
        <svg viewBox="0 0 ${W} ${C}" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: auto; display: block; margin: 0 auto; overflow: visible;">
          ${J.map((e,t)=>i.JW`
              <path d="${e.d}" fill="none" stroke="${e.color}" stroke-width="${$}" opacity="0.8"/>
              ${f&&e.hasFlow?i.JW`<circle r="4" fill="${e.color}" cx="0" cy="0" style="offset-path: path('${e.d}'); offset-distance: 0%; animation: energy-flow-dot ${x} linear infinite;"/>`:i.JW``}
            `)}
          ${z.map(({node:n,x:r,y:a})=>{const s=this.resolveEntity(n.entity,o);let d="—",c="";if(s&&t.states[s]){const i=this._getNodePower(t,o,n.entity);d=this._formatPower(i.value,e.unit_display||"auto"),!n.secondary_entity||"battery"!==n.node_type&&"grid"!==n.node_type||(c=this._getNodeSecondary(t,o,n.secondary_entity))}const h=n.color||l[n.node_type],p=n.label||y[n.node_type],_=a>=N,v=_?a+m+6:a-m-6;return i.JW`
              <g class="energy-node" data-node-id="${n.id}">
                ${u?i.JW`<text x="${r}" y="${v}" text-anchor="middle" font-size="11" fill="var(--secondary-text-color)" dominant-baseline="${_?"hanging":"auto"}">${p}</text>`:i.JW``}
                <circle cx="${r}" cy="${a}" r="${m}" fill="var(--card-background-color)" stroke="${h}" stroke-width="2"/>
                ${g?i.JW`<text x="${r}" y="${a}" text-anchor="middle" dominant-baseline="central" font-size="11" font-weight="600" fill="var(--primary-text-color)">${d}</text>`:i.JW``}
                ${c?i.JW`<text x="${r}" y="${a+13}" text-anchor="middle" font-size="10" fill="var(--secondary-text-color)">${c}</text>`:i.JW``}
              </g>
            `})}
        </svg>
      </div>
    `}_renderBoxFlow(e,t,o){var n,r,a;const s=this._getCoreNodes(e),d=this._getDeviceNodes(e).filter(e=>!1!==e.enabled),c=!1!==e.show_values,h=!1!==e.show_labels,p=!1!==e.show_self_sufficiency,_=Math.max(0,null!==(n=e.box_border_radius)&&void 0!==n?n:10),g=Math.max(1,null!==(r=e.box_border_width)&&void 0!==r?r:2),u=this._getFlowDuration(e.animation_speed||"normal"),v="0s"!==u,$=Math.max(1,null!==(a=e.flow_line_width)&&void 0!==a?a:2);let x=0;const f=this.resolveEntity(e.self_sufficiency_entity||"",o);if(p&&f&&t.states[f]){const e=parseFloat(String(t.states[f].state));x=isNaN(e)?0:Math.max(0,Math.min(100,e))}const m=["solar","grid","battery","home"].map(e=>s.find(t=>t.node_type===e&&!1!==t.enabled)).filter(Boolean),b=m.find(e=>"home"===e.node_type),w=(null==b?void 0:b.color)||l.home,k=this.buildDesignStyles(e,t),M=this.buildStyleString(k),S=90,D=p?28:0,W=2*D,C=Math.max(W+16,80),F=d.length,N=S+C,P=N+S,z=P/2,J=68,E={solar:45,grid:N+45,battery:45,home:N+45},I={solar:22,grid:22,battery:114,home:114},A=d.map((e,t)=>{const o=0+(1===F?.5:t/(F-1))*P;return Math.max(45,Math.min(P-45,o))});if(F>1){const e=98;for(let t=1;t<F;t++)A[t]-A[t-1]<e&&(A[t]=A[t-1]+e);for(let t=F-2;t>=0;t--)A[t+1]-A[t]<e&&(A[t]=A[t+1]-e);for(let e=0;e<F;e++)A[e]=Math.max(45,Math.min(P-45,A[e]))}const L=F>0?A[F-1]+45:P,q=Math.max(P,L),B=P/2,G=Math.ceil($/2)+1,U=F>0?192+G:136+G,j=[];m.forEach(e=>{const[i,n]=(e=>{const t=E[e],o=I[e],i=z-t,n=J-o,r=(Math.sign(i),Math.sign(n),Math.abs(i)>0?Math.sign(i)*S/2/i:1/0),a=Math.abs(n)>0?44*Math.sign(n)/2/n:1/0;return r<a?[t+Math.sign(i)*S/2,o+n*r]:[t+i*a,o+44*Math.sign(n)/2]})(e.node_type);let r;r="battery"===e.node_type?this._getNodePower(t,o,e.entity).value<0:"solar"===e.node_type||"grid"===e.node_type;const a=r?`M ${i} ${n} L ${B} 68`:`M ${B} 68 L ${i} ${n}`;j.push({d:a,color:e.color||l[e.node_type]})}),d.forEach((e,t)=>{const o=A[t],i=`M ${B} ${J+D+2} L ${o} 148`;j.push({d:i,color:e.color||l.device})});const O=(e,t,o,n,r,a,s,d,l)=>i.JW`
      <rect x="${e}" y="${t}" width="${o}" height="${n}" rx="${d}"
        fill="var(--card-background-color)" stroke="${r}" stroke-width="${l}" opacity="0.95"/>
      ${c?i.JW`<text x="${e+o/2}" y="${t+n/2-(h?7:0)}"
        text-anchor="middle" dominant-baseline="central"
        font-size="13" font-weight="700" fill="var(--primary-text-color)">${s}</text>`:i.JW``}
      ${h?i.JW`<text x="${e+o/2}" y="${t+n/2+(c?10:0)}"
        text-anchor="middle" dominant-baseline="central"
        font-size="10" fill="var(--secondary-text-color)">${a}</text>`:i.JW``}
    `;return i.qy`
      <div class="energy-display-module energy-box-flow" style="${M} padding: 12px; width: 100%; box-sizing: border-box;">
        <svg viewBox="${-G} ${-G} ${q+2*G} ${U+2*G}" preserveAspectRatio="xMidYMid meet"
          style="width: 100%; height: auto; display: block; overflow: hidden;">

          <!-- Flow lines — drawn first so boxes sit on top -->
          ${j.map(e=>i.JW`
            <path d="${e.d}" fill="none" stroke="${e.color}" stroke-width="${$}" opacity="0.75" stroke-linecap="round"/>
            ${v?i.JW`
              <circle r="3" cx="0" cy="0" fill="${e.color}"
                style="offset-path: path('${e.d}'); offset-distance: 0%; animation: energy-flow-dot ${u} linear infinite;"/>
              <circle r="3" cx="0" cy="0" fill="${e.color}"
                style="offset-path: path('${e.d}'); offset-distance: 0%; animation: energy-flow-dot ${u} linear calc(${u} * -0.5) infinite;"/>
            `:i.JW``}
          `)}

          <!-- Hub / gauge center -->
          ${p?i.JW`
            <circle cx="${B}" cy="${J}" r="${D}" fill="var(--card-background-color)" stroke="var(--divider-color)" stroke-width="2"/>
            <circle cx="${B}" cy="${J}" r="${D-4}" fill="none" stroke="${w}" stroke-width="4"
              stroke-dasharray="${(x/100*(2*Math.PI*(D-4))).toFixed(1)} ${(2*Math.PI*(D-4)).toFixed(1)}"
              stroke-dashoffset="${(2*Math.PI*(D-4)*.25).toFixed(1)}"
              stroke-linecap="round"
              style="transition: stroke-dasharray 0.5s ease; transform: rotate(-90deg); transform-origin: ${B}px ${J}px;"/>
            <text x="${B}" y="${63}" text-anchor="middle" font-size="9" font-weight="700" fill="var(--primary-text-color)">${x.toFixed(0)}%</text>
            <text x="${B}" y="${76}" text-anchor="middle" font-size="8" fill="var(--secondary-text-color)">Home</text>
          `:i.JW`<circle cx="${B}" cy="${J}" r="4" fill="var(--divider-color)"/>`}

          <!-- Core node boxes -->
          ${m.map(i=>{const n=this.resolveEntity(i.entity,o);let r="—";if(n&&t.states[n]){const n=this._getNodePower(t,o,i.entity);r=this._formatPower(n.value,e.unit_display||"auto")}const a=i.color||l[i.node_type],s=i.label||y[i.node_type],d="solar"===i.node_type||"battery"===i.node_type?0:N,c="solar"===i.node_type||"grid"===i.node_type?0:92;return O(d,c,S,44,a,s,r,_,g)})}

          <!-- Device boxes -->
          ${d.map((i,n)=>{const r=this.resolveEntity(i.entity,o);let a="—";if(r&&t.states[r]){const n=this._getNodePower(t,o,i.entity);a=this._formatPower(n.value,e.unit_display||"auto")}const s=i.color||l.device,d=i.label||y.device,c=A[n];return O(c-45,148,S,44,s,d,a,_,g)})}
        </svg>
      </div>
    `}_renderSankey(e,t,o){var n;const r=this._getCoreNodes(e),a=this._getDeviceNodes(e).filter(e=>!1!==e.enabled),s=!1!==e.show_values,d=!1!==e.show_labels,c=Math.max(.1,Math.min(1,null!==(n=e.sankey_curve_factor)&&void 0!==n?n:.5)),h=this.buildDesignStyles(e,t),p=this.buildStyleString(h),_=this._getFlowDuration(e.animation_speed||"normal"),g="0s"!==_,u=r.filter(e=>("solar"===e.node_type||"grid"===e.node_type)&&!1!==e.enabled),v=r.find(e=>"home"===e.node_type&&!1!==e.enabled),$=r.find(e=>"battery"===e.node_type&&!1!==e.enabled),x=$?this._getNodePower(t,o,$.entity).value:0,f=Boolean($&&x<0),m=f&&$?[...u,$]:u,b=($&&!f?[$]:[]).concat(a),w=e=>{const i=this.resolveEntity(e.entity,o);return i&&t.states[i]?Math.abs(this._getNodePower(t,o,e.entity).value):0},k=m.map(e=>({node:e,value:w(e)})),M=b.map(e=>({node:e,value:w(e)})),S=Math.max(1,k.reduce((e,t)=>e+t.value,0)),D=Math.max(1,M.reduce((e,t)=>e+t.value,0)),W=v?w(v):0,C=d?18:0,F=s?14:0,N=C+F+14,P=k.length,z=M.length,J=Math.max(200,288-N*Math.max(0,P-1)),E=Math.max(200,288-N*Math.max(0,z-1)),I=k.map(e=>Math.max(36,Math.round(e.value/S*J))),A=M.map(e=>Math.max(36,Math.round(e.value/D*E))),L=I.reduce((e,t)=>e+t,0)+N*Math.max(0,P-1),q=A.reduce((e,t)=>e+t,0)+N*Math.max(0,z-1),B=Math.max(L,q,72),G=(d?C:0)+(s?F:0),U=B+32+G+8,j=16+G,O=j+(B-q)/2;let V=j+(B-L)/2;const H=k.map((e,t)=>{const o={node:e.node,value:e.value,x:0,y:V,w:44,h:I[t],color:e.node.color||l[e.node.node_type]};return V+=I[t]+N,o});V=O;const T=M.map((e,t)=>{const o={node:e.node,value:e.value,x:256,y:V,w:44,h:A[t],color:e.node.color||l[e.node.node_type]};return V+=A[t]+N,o}),R=12*Math.max(0,P-1),Q=B-R,Z=k.map(e=>Math.max(8,Math.round(e.value/S*Q))),Y=Z.reduce((e,t)=>e+t,0),X=Y>Q?Q/Y:1,K=Z.map(e=>Math.max(8,Math.round(e*X)));let ee=j+(B-(K.reduce((e,t)=>e+t,0)+R))/2;const te=12*Math.max(0,z-1),oe=B-te,ie=M.map(e=>Math.max(8,Math.round(e.value/D*oe))),ne=ie.reduce((e,t)=>e+t,0),re=ne>oe?oe/ne:1,ae=ie.map(e=>Math.max(8,Math.round(e*re)));let se=j+(B-(ae.reduce((e,t)=>e+t,0)+te))/2;const de=Math.max(24,84*c*1.5),le=[];H.forEach((e,t)=>{const o=K[t],i=e.y,n=e.y+e.h,r=ee,a=ee+o;ee+=o+12;const s=e.x+e.w,d=`M ${s} ${i} C ${s+de} ${i}, ${128-de} ${r}, 128 ${r}`,l=`L 128 ${a} C ${128-de} ${a}, ${s+de} ${n}, ${s} ${n} Z`,c=(i+n)/2,y=(r+a)/2,h=`M ${s} ${c} C ${s+de} ${c}, ${128-de} ${y}, 128 ${y}`;le.push({shapePath:`${d} ${l}`,centerPath:h,color:e.color,id:`sf-${t}`})});const ce=[];T.forEach((e,t)=>{const o=ae[t],i=se,n=se+o;se+=o+12;const r=e.y,a=e.y+e.h,s=e.x,d=`M 172 ${i} C ${172+de} ${i}, ${s-de} ${r}, ${s} ${r}`,l=`L ${s} ${a} C ${s-de} ${a}, ${172+de} ${n}, 172 ${n} Z`,c=(i+n)/2,y=(r+a)/2,h=`M 172 ${c} C ${172+de} ${c}, ${s-de} ${y}, ${s} ${y}`;ce.push({shapePath:`${d} ${l}`,centerPath:h,color:e.color,id:`cf-${t}`})});const ye=["0s",`calc(${_} * -0.33)`,`calc(${_} * -0.66)`];return i.qy`
      <div class="energy-display-module energy-sankey" style="${p} padding: 12px; width: 100%; box-sizing: border-box;">
        <svg viewBox="0 0 ${300} ${U}" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: auto; display: block; overflow: visible;">

          <!-- Flow bands — rendered first so bars sit on top -->
          ${[...le,...ce].map(e=>i.JW`
            <path d="${e.shapePath}" fill="${e.color}" opacity="0.5"/>
          `)}

          <!-- Animated dots travelling along each flow's center path -->
          ${g?[...le,...ce].map(e=>i.JW`
            ${ye.map((t,o)=>i.JW`
              <circle r="3" cx="0" cy="0" fill="white" opacity="0.85"
                style="offset-path: path('${e.centerPath}'); offset-distance: 0%; animation: energy-flow-dot ${_} linear ${t} infinite;"/>
            `)}
          `):i.JW``}

          <!-- Source bars: only round the LEFT (outer) corners -->
          ${H.map(t=>{const{x:o,y:n,w:r,h:a}=t,l=`M ${o+5} ${n} L ${o+r} ${n} L ${o+r} ${n+a} L ${o+5} ${n+a} Q ${o} ${n+a} ${o} ${n+a-5} L ${o} ${n+5} Q ${o} ${n} ${o+5} ${n} Z`;return i.JW`
              <path d="${l}" fill="${t.color}" opacity="0.95"/>
              ${d?i.JW`<text x="${o+r/2}" y="${n+a+C}" text-anchor="middle" font-size="${10}" font-weight="600" fill="var(--primary-text-color)">${t.node.label||y[t.node.node_type]}</text>`:i.JW``}
              ${s?i.JW`<text x="${o+r/2}" y="${n+a+C+F}" text-anchor="middle" font-size="${10}" fill="var(--secondary-text-color)">${this._formatPower(t.value,e.unit_display||"auto")}</text>`:i.JW``}
            `})}

          <!-- Home bar: no border radius — flows attach flush to both sides -->
          <rect x="${128}" y="${j}" width="${44}" height="${B}" rx="0" fill="var(--secondary-background-color)" stroke="var(--divider-color)" stroke-width="1" opacity="0.9"/>
          ${d?i.JW`<text x="${150}" y="${j-F-8-10}" text-anchor="middle" font-size="${10}" font-weight="600" fill="var(--primary-text-color)">${(null==v?void 0:v.label)||"Home"}</text>`:i.JW``}
          ${s?i.JW`<text x="${150}" y="${j-8}" text-anchor="middle" font-size="${10}" fill="var(--secondary-text-color)">${this._formatPower(W,e.unit_display||"auto")}</text>`:i.JW``}

          <!-- Consumer bars: only round the RIGHT (outer) corners -->
          ${T.map(t=>{const{x:o,y:n,w:r,h:a}=t,l=`M ${o} ${n} L ${o+r-5} ${n} Q ${o+r} ${n} ${o+r} ${n+5} L ${o+r} ${n+a-5} Q ${o+r} ${n+a} ${o+r-5} ${n+a} L ${o} ${n+a} Z`;return i.JW`
              <path d="${l}" fill="${t.color}" opacity="0.95"/>
              ${d?i.JW`<text x="${o+r/2}" y="${n+a+C}" text-anchor="middle" font-size="${10}" font-weight="600" fill="var(--primary-text-color)">${t.node.label||y[t.node.node_type]}</text>`:i.JW``}
              ${s?i.JW`<text x="${o+r/2}" y="${n+a+C+F}" text-anchor="middle" font-size="${10}" fill="var(--secondary-text-color)">${this._formatPower(t.value,e.unit_display||"auto")}</text>`:i.JW``}
            `})}        </svg>
      </div>
    `}}}};