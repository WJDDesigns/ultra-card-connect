export const __webpack_esm_ids__=[7861];export const __webpack_esm_modules__={9682(e,t,i){i.d(t,{UltraAccordionModule:()=>b});var o=i(2618),n=i(3307),r=i(1091),a=i(8414),d=i(230),l=i(378),c=i(2034),s=i(935),g=i(5064),p=i(7610);const u=new Set(["HUI-VIEW","HUI-MASONRY-VIEW","HUI-SECTIONS-VIEW","HUI-PANEL-VIEW","HUI-SIDEBAR-VIEW","HUI-ROOT","HA-DIALOG","HA-MD-DIALOG","HA-WA-DIALOG","DIALOG","BODY","HTML"]),h=new WeakMap;function v(e){if(e.parentElement)return e.parentElement;const t=e.getRootNode();return t instanceof ShadowRoot?t.host:null}function _(e,t){const i=e.position,o=/flex|grid/.test(t);if("auto"!==e.zIndex&&("static"!==i||o))return!0;if("fixed"===i||"sticky"===i)return!0;if(parseFloat(e.opacity)<1)return!0;if(e.transform&&"none"!==e.transform)return!0;if(e.filter&&"none"!==e.filter)return!0;const n=e;if(n.backdropFilter&&"none"!==n.backdropFilter)return!0;if(e.perspective&&"none"!==e.perspective)return!0;if("isolate"===e.isolation)return!0;if(e.mixBlendMode&&"normal"!==e.mixBlendMode)return!0;if(e.clipPath&&"none"!==e.clipPath)return!0;const r=e.contain||"";if(/layout|paint|strict|content/.test(r))return!0;const a=n.containerType;if(a&&"normal"!==a)return!0;const d=e.willChange||"";return!!/transform|opacity|filter|z-index|isolation/.test(d)}function m(e,t=3){const i=[];if("undefined"==typeof window||"function"!=typeof getComputedStyle)return()=>{};let o=v(e);for(let e=0;o&&e<40&&!u.has(o.tagName);e++){const e=v(o);if(o instanceof HTMLElement){const n=h.get(o);if(n)n.count++,i.push(o);else{const n=getComputedStyle(o),r=e?getComputedStyle(e).display:"";if("contents"!==n.display&&_(n,r)){const e=parseInt(n.zIndex,10);if("auto"===n.zIndex||Number.isNaN(e)||e<t){h.set(o,{count:1,prevZIndex:o.style.zIndex,prevPosition:o.style.position});const e=/flex|grid/.test(r);"static"!==n.position||e||(o.style.position="relative"),o.style.zIndex=String(t),i.push(o)}}}}o=e}let n=!1;return()=>{if(!n){n=!0;for(const e of i){const t=h.get(e);t&&(t.count--,t.count<=0&&(e.style.zIndex=t.prevZIndex,e.style.position=t.prevPosition,h.delete(e)))}}}}class b extends n.m{constructor(){super(...arguments),this.metadata={type:"accordion",title:"Accordion",description:"Collapsible container with customizable header for organizing modules",author:"WJD Designs",version:"1.0.0",icon:"mdi:chevron-down",category:"layout",tags:["layout","accordion","collapsible","container","organization"]},this.accordionStates=new Map,this.accordionLogicStates=new Map,this.accordionInitConfigs=new Map,this.accordionResolvedDirections=new Map,this.outsideClickCleanups=new Map,this.overlayContentEls=new Map,this.overlayLiftWanted=new Map,this.overlayLifts=new Map,this.overlayReleaseTimers=new Map,this.overlayRefCallbacks=new Map}createDefault(e,t){return{id:e||this.generateId("accordion"),type:"accordion",modules:[],title_mode:"custom",title_text:"Accordion Title",title_entity:"",show_entity_name:!1,icon:"mdi:chevron-down",header_alignment:"apart",icon_side:"right",default_open:!1,expand_direction:"down",expand_style:"push",close_on_outside_click:!1,open_mode:"manual",open_conditions:[],tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderDesignTab(e,t,i,n){var r;const a=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}

      <div class="module-design-settings">
        <!-- Standard Design Tab Content (from GlobalDesignTab) -->
        <div
          style="font-size: 14px; font-weight: 600; color: var(--secondary-text-color); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;"
        >
          ${(0,s.kg)("editor.accordion.design.general_title",a,"General Module Design")}
        </div>
        ${super.renderDesignTab(e,t,i,n)}
      </div>
    `}renderGeneralTab(e,t,i,n){var r,a,d,l,c,g,p,u;const h=e,v=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en",_=h.design||{};return o.qy`
      ${this.injectUcFormStyles()}
      <style>
        .color-row {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 16px;
        }
        .color-row > * {
          width: 100%;
          min-width: 0;
        }
        .design-field {
          margin-bottom: 16px;
        }
        .field-row {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 16px;
        }
        .field-row > * {
          width: 100%;
          min-width: 0;
        }
        .design-subsection {
          background: rgba(var(--rgb-primary-color), 0.05);
          border-left: 3px solid var(--primary-color);
          padding: 16px;
          margin-bottom: 24px;
          border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;
          overflow: visible;
        }
        .design-subsection ultra-color-picker {
          width: 100%;
          display: block;
        }
        .subsection-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      </style>

      <div class="module-general-settings">
        <!-- Title Configuration Section -->
        ${this.renderSettingsSection((0,s.kg)("editor.accordion.title.section_title",v,"Title Configuration"),(0,s.kg)("editor.accordion.title.section_desc",v,"Configure the accordion header title source and content."),[{title:(0,s.kg)("editor.accordion.title.mode",v,"Title Mode"),description:(0,s.kg)("editor.accordion.title.mode_desc",v,"Choose whether to use custom text or entity state as title."),hass:t,data:{title_mode:h.title_mode||"custom"},schema:[this.selectField("title_mode",[{value:"custom",label:(0,s.kg)("editor.common.custom_text",v,"Custom Text")},{value:"entity",label:(0,s.kg)("editor.common.entity_state",v,"Entity State")}])],onChange:e=>{e.detail.value.title_mode!==(h.title_mode||"custom")&&(n(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}

        <!-- Conditional: Custom Title Text -->
        ${"custom"===h.title_mode?o.qy`
              <div style="margin-top: -16px; margin-bottom: 32px;">
                ${this.renderConditionalFieldsGroup((0,s.kg)("editor.accordion.title.custom_config",v,"Custom Title Configuration"),this.renderFieldSection((0,s.kg)("editor.accordion.title.custom_text",v,"Title Text"),(0,s.kg)("editor.accordion.title.custom_text_desc",v,"Enter the custom text to display in the accordion header."),t,{title_text:h.title_text||""},[this.textField("title_text")],e=>{n({title_text:e.detail.value.title_text}),this.triggerPreviewUpdate()}))}
              </div>
            `:""}

        <!-- Conditional: Entity Title -->
        ${"entity"===h.title_mode?o.qy`
              <div style="margin-top: -16px; margin-bottom: 32px;">
                ${this.renderConditionalFieldsGroup((0,s.kg)("editor.accordion.title.entity_config",v,"Entity Title Configuration"),o.qy`
                    ${this.renderEntityPickerWithVariables(t,i,"title_entity",h.title_entity||"",e=>{n({title_entity:e}),setTimeout(()=>{this.triggerPreviewUpdate()},50)},void 0,(0,s.kg)("editor.accordion.title.entity",v,"Title Entity"))}
                    <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
                      ${(0,s.kg)("editor.accordion.title.entity_desc",v,"Select an entity whose state will be used as the accordion header title.")}
                    </div>

                    <!-- Show Entity Name Toggle -->
                    ${this.renderSettingsSection((0,s.kg)("editor.accordion.title.show_name",v,"Display Options"),(0,s.kg)("editor.accordion.title.show_name_desc",v,"Choose whether to show the entity name along with the state."),[{title:(0,s.kg)("editor.accordion.title.show_entity_name",v,"Show Entity Name"),description:(0,s.kg)("editor.accordion.title.show_entity_name_desc",v,"Display the entity friendly name before the state value."),hass:t,data:{show_entity_name:h.show_entity_name||!1},schema:[this.booleanField("show_entity_name")],onChange:e=>{n(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}
                  `)}
              </div>
            `:""}

        <!-- Title Icon (before or after the title text) -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,s.kg)("editor.accordion.title_icon.section_title",v,"Title Icon")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,s.kg)("editor.accordion.title_icon.section_desc",v,"Optional icon shown next to the title. Leave empty for none.")}
          </div>
          ${this.renderFieldSection((0,s.kg)("editor.accordion.title_icon.icon",v,"Icon"),"",t,{title_icon:h.title_icon||""},[this.iconField("title_icon")],e=>{var t;n({title_icon:(null===(t=e.detail.value)||void 0===t?void 0:t.title_icon)||""}),setTimeout(()=>{this.triggerPreviewUpdate()},50)})}
          ${h.title_icon?o.qy`
                ${this.renderSegmentedField((0,s.kg)("editor.text.icon_position",v,"Icon Position"),"",h.title_icon_position||"before",[{value:"before",label:(0,s.kg)("editor.text.before_text",v,"Before Text"),icon:"mdi:format-align-left"},{value:"after",label:(0,s.kg)("editor.text.after_text",v,"After Text"),icon:"mdi:format-align-right"}],e=>{n({title_icon_position:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                ${this.renderColorField((0,s.kg)("editor.accordion.title_icon.color",v,"Title icon color"),"",t,h.title_icon_color||"","",e=>{n({title_icon_color:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
              `:""}
        </div>

        <!-- Icon Configuration Section -->
        ${this.renderSettingsSection((0,s.kg)("editor.accordion.icon.section_title",v,"Control Icon"),(0,s.kg)("editor.accordion.icon.section_desc",v,"Configure the control icon displayed in the accordion header (defaults to chevron-down)."),[{title:(0,s.kg)("editor.accordion.icon.custom",v,"Icon"),description:(0,s.kg)("editor.accordion.icon.custom_desc",v,"Select the icon to display as the control indicator."),hass:t,data:{icon:h.icon||"mdi:chevron-down"},schema:[this.iconField("icon")],onChange:e=>{n(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}

        <!-- Header Alignment Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,s.kg)("editor.accordion.alignment.section_title",v,"Header Alignment")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,s.kg)("editor.accordion.alignment.section_desc",v,"Choose how the title and icon are positioned in the header.")}
          </div>

          <!-- Alignment Mode: Center or Apart -->
          ${this.renderSegmentedField((0,s.kg)("editor.accordion.alignment.mode",v,"Alignment Mode"),"",h.header_alignment||"apart",[{value:"center",label:(0,s.kg)("editor.common.center",v,"Center"),icon:"mdi:align-horizontal-center"},{value:"apart",label:(0,s.kg)("editor.common.apart",v,"Apart"),icon:"mdi:arrow-left-right"}],e=>{n({header_alignment:e}),this.triggerPreviewUpdate()})}

          <!-- Icon Side: Left or Right -->
          ${this.renderSegmentedField((0,s.kg)("editor.accordion.alignment.icon_side",v,"Icon Side"),"",h.icon_side||"right",[{value:"left",label:(0,s.kg)("editor.common.left",v,"Left"),icon:"mdi:arrow-left"},{value:"right",label:(0,s.kg)("editor.common.right",v,"Right"),icon:"mdi:arrow-right"}],e=>{n({icon_side:e}),this.triggerPreviewUpdate()})}
        </div>

        <!-- Expand Behavior Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,s.kg)("editor.accordion.behavior.section_title",v,"Expand Behavior")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,s.kg)("editor.accordion.behavior.section_desc",v,"Control which direction the content opens and how it interacts with the rest of the page.")}
          </div>

          <!-- Expand Direction -->
          ${this.renderSegmentedField((0,s.kg)("editor.accordion.behavior.direction",v,"Expand Direction"),(0,s.kg)("editor.accordion.behavior.direction_desc",v,"Left and Right open the content sideways. Auto opens upward when the accordion sits in the lower half of the screen."),h.expand_direction||"down",[{value:"down",label:(0,s.kg)("editor.accordion.behavior.direction_down",v,"Down"),icon:"mdi:arrow-down"},{value:"up",label:(0,s.kg)("editor.accordion.behavior.direction_up",v,"Up"),icon:"mdi:arrow-up"},{value:"left",label:(0,s.kg)("editor.accordion.behavior.direction_left",v,"Left"),icon:"mdi:arrow-left"},{value:"right",label:(0,s.kg)("editor.accordion.behavior.direction_right",v,"Right"),icon:"mdi:arrow-right"},{value:"auto",label:(0,s.kg)("editor.accordion.behavior.direction_auto",v,"Auto"),icon:"mdi:arrow-up-down"}],e=>{n({expand_direction:e}),this.triggerPreviewUpdate()})}

          ${"left"===h.expand_direction||"right"===h.expand_direction?o.qy`
                <!-- Side header style (left/right only) -->
                ${this.renderSegmentedField((0,s.kg)("editor.accordion.behavior.side_header",v,"Header Style"),(0,s.kg)("editor.accordion.behavior.side_header_desc",v,"Vertical Tab turns the header into a slim strip with the title running sideways. Bar keeps the normal header."),h.side_header_style||"vertical",[{value:"vertical",label:(0,s.kg)("editor.accordion.behavior.side_header_vertical",v,"Vertical Tab"),icon:"mdi:tab"},{value:"horizontal",label:(0,s.kg)("editor.accordion.behavior.side_header_horizontal",v,"Bar"),icon:"mdi:view-agenda-outline"}],e=>{n({side_header_style:e}),this.triggerPreviewUpdate()})}

                ${"vertical"===(h.side_header_style||"vertical")?this.renderSegmentedField((0,s.kg)("editor.accordion.behavior.side_title_direction",v,"Title Direction"),(0,s.kg)("editor.accordion.behavior.side_title_direction_desc",v,"Which way the sideways title reads. Auto reads upward on a tab at the left and downward on a tab at the right."),h.side_title_direction||"auto",[{value:"auto",label:(0,s.kg)("editor.accordion.behavior.side_title_auto",v,"Auto"),icon:"mdi:auto-fix"},{value:"up",label:(0,s.kg)("editor.accordion.behavior.side_title_up",v,"Reads Up"),icon:"mdi:arrow-up"},{value:"down",label:(0,s.kg)("editor.accordion.behavior.side_title_down",v,"Reads Down"),icon:"mdi:arrow-down"}],e=>{n({side_title_direction:e}),this.triggerPreviewUpdate()}):""}

                <!-- Panel width (left/right only) -->
                ${this.renderSettingsSection("","",[{title:(0,s.kg)("editor.accordion.behavior.panel_width",v,"Panel Width"),description:(0,s.kg)("editor.accordion.behavior.panel_width_desc",v,"How wide the content panel is when it opens sideways, in pixels. It never grows wider than the screen."),hass:t,data:{panel_width:null!==(a=h.panel_width)&&void 0!==a?a:300},schema:[this.numberField("panel_width",80,1200,10)],onChange:e=>{var t;const i=Number(null===(t=e.detail.value)||void 0===t?void 0:t.panel_width);n({panel_width:Number.isFinite(i)&&i>0?i:void 0}),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}
              `:""}

          <!-- Expand Style -->
          ${this.renderSegmentedField((0,s.kg)("editor.accordion.behavior.style",v,"Expand Style"),(0,s.kg)("editor.accordion.behavior.style_desc",v,"In Place grows the accordion and pushes content aside. Overlay floats the open content over the page like a dropdown menu."),h.expand_style||"push",[{value:"push",label:(0,s.kg)("editor.accordion.behavior.style_push",v,"In Place"),icon:"mdi:arrow-expand-vertical"},{value:"overlay",label:(0,s.kg)("editor.accordion.behavior.style_overlay",v,"Overlay"),icon:"mdi:layers-outline"}],e=>{n({expand_style:e}),this.triggerPreviewUpdate()})}

          <!-- Close on Outside Click -->
          ${this.renderSettingsSection("","",[{title:(0,s.kg)("editor.accordion.behavior.outside_click",v,"Close on Outside Click"),description:(0,s.kg)("editor.accordion.behavior.outside_click_desc",v,"Collapse the accordion whenever you click or tap anywhere outside it."),hass:t,data:{close_on_outside_click:h.close_on_outside_click||!1},schema:[this.booleanField("close_on_outside_click")],onChange:e=>{n(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}
        </div>

        <!-- Open/Close Logic Section -->
        ${this._renderOpenCloseLogic(h,t,n)}

        <!-- Default State Section (only shown when open_mode is manual) -->
        ${"manual"===(h.open_mode||"manual")?this.renderSettingsSection((0,s.kg)("editor.accordion.state.section_title",v,"Default State"),(0,s.kg)("editor.accordion.state.section_desc",v,"Configure whether this accordion starts open or closed when the card loads."),[{title:(0,s.kg)("editor.accordion.state.default_open",v,"Open by Default"),description:(0,s.kg)("editor.accordion.state.default_open_desc",v,"When enabled, the accordion will be expanded when the card initially loads."),hass:t,data:{default_open:h.default_open||!1},schema:[this.booleanField("default_open")],onChange:e=>{n(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}]):""}

        <!-- Container Customization Section -->
        <div class="design-subsection">
          <div class="subsection-title">
            ${(0,s.kg)("editor.accordion.design.container_title",v,"Container Customization")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,s.kg)("editor.accordion.design.container_desc",v,"Customize the outer wrapper styling of the accordion.")}
          </div>

          <!-- Container Background & Border Color Row -->
          <div class="color-row">
            <ultra-color-picker
              .label=${(0,s.kg)("editor.accordion.design.container_bg_color",v,"Background Color")}
              .value=${_.container_background_color||""}
              .defaultValue=${"var(--card-background-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},_),{container_background_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>

            <ultra-color-picker
              .label=${(0,s.kg)("editor.accordion.design.container_border_color",v,"Border Color")}
              .value=${_.container_border_color||""}
              .defaultValue=${"var(--divider-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},_),{container_border_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>

          <!-- Container Border Width & Radius -->
          <div class="field-row">
            <div>
              ${this.renderSliderField((0,s.kg)("editor.accordion.design.container_border_width",v,"Border Width"),"",null!==(d=_.container_border_width)&&void 0!==d?d:1,1,0,10,1,e=>{const t=Object.assign(Object.assign({},_),{container_border_width:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
            <div>
              ${this.renderSliderField((0,s.kg)("editor.accordion.design.container_border_radius",v,"Border Radius"),"",null!==(l=_.container_border_radius)&&void 0!==l?l:8,8,0,50,1,e=>{const t=Object.assign(Object.assign({},_),{container_border_radius:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
          </div>

          <!-- Box Shadow -->
          ${this.renderFieldSection((0,s.kg)("editor.accordion.design.container_shadow",v,"Box Shadow"),(0,s.kg)("editor.accordion.design.container_shadow_desc",v,"CSS box-shadow value (e.g., 0 2px 8px rgba(0,0,0,0.1))"),t,{container_shadow:_.container_shadow||""},[this.textField("container_shadow")],e=>{const t=Object.assign(Object.assign({},_),{container_shadow:e.detail.value.container_shadow});n({design:t}),this.triggerPreviewUpdate()})}
        </div>

        <!-- Header Customization Section -->
        <div class="design-subsection">
          <div class="subsection-title">
            ${(0,s.kg)("editor.accordion.design.header_title",v,"Header Customization")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,s.kg)("editor.accordion.design.header_desc",v,"Customize the clickable header bar appearance.")}
          </div>

          <!-- Header Text & Background Colors -->
          <div class="color-row">
            <ultra-color-picker
              .label=${(0,s.kg)("editor.accordion.design.header_text_color",v,"Text Color")}
              .value=${_.header_text_color||""}
              .defaultValue=${"var(--primary-text-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},_),{header_text_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>

            <ultra-color-picker
              .label=${(0,s.kg)("editor.accordion.design.header_bg_color",v,"Background Color")}
              .value=${_.header_background_color||""}
              .defaultValue=${"var(--card-background-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},_),{header_background_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>

          <!-- Header Hover Background -->
          <div class="design-field">
            <ultra-color-picker
              .label=${(0,s.kg)("editor.accordion.design.header_hover_color",v,"Hover Background Color")}
              .value=${_.header_hover_color||""}
              .defaultValue=${"rgba(var(--rgb-primary-color), 0.1)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},_),{header_hover_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>

          <!-- Icon Color & Size -->
          <div class="color-row">
            <ultra-color-picker
              .label=${(0,s.kg)("editor.accordion.design.icon_color",v,"Icon Color")}
              .value=${_.icon_color||""}
              .defaultValue=${"var(--primary-text-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},_),{icon_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>

            <div>
              ${this.renderSliderField((0,s.kg)("editor.accordion.design.icon_size",v,"Icon Size"),"",null!==(c=_.icon_size)&&void 0!==c?c:24,24,12,48,1,e=>{const t=Object.assign(Object.assign({},_),{icon_size:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
          </div>

          <!-- Header Font Size & Weight -->
          <div class="field-row">
            <div>
              ${this.renderSliderField((0,s.kg)("editor.accordion.design.header_font_size",v,"Font Size"),"",_.header_font_size||16,16,8,48,1,e=>{const t=Object.assign(Object.assign({},_),{header_font_size:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
            <div>
              ${this.renderFieldSection((0,s.kg)("editor.accordion.design.header_font_weight",v,"Font Weight"),"",t,{header_font_weight:_.header_font_weight||"normal"},[this.selectField("header_font_weight",[{value:"normal",label:"Normal"},{value:"300",label:"Light"},{value:"500",label:"Medium"},{value:"600",label:"Semi-Bold"},{value:"bold",label:"Bold"},{value:"800",label:"Extra Bold"}])],e=>{const t=Object.assign(Object.assign({},_),{header_font_weight:e.detail.value.header_font_weight});n({design:t}),this.triggerPreviewUpdate()})}
            </div>
          </div>

          <!-- Header Padding -->
          ${this.renderSliderField((0,s.kg)("editor.accordion.design.header_padding",v,"Header Padding"),(0,s.kg)("editor.accordion.design.header_padding_desc",v,"Padding inside the header (in pixels)."),null!==(g=_.header_padding)&&void 0!==g?g:12,12,0,48,1,e=>{const t=Object.assign(Object.assign({},_),{header_padding:e});n({design:t}),this.triggerPreviewUpdate()},"px")}

          <!-- Header Border Bottom -->
          <div class="color-row">
            <ultra-color-picker
              .label=${(0,s.kg)("editor.accordion.design.header_border_color",v,"Border Bottom Color")}
              .value=${_.header_border_color||""}
              .defaultValue=${"var(--divider-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},_),{header_border_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>

            <div>
              ${this.renderSliderField((0,s.kg)("editor.accordion.design.header_border_width",v,"Border Width"),"",null!==(p=_.header_border_width)&&void 0!==p?p:1,1,0,5,1,e=>{const t=Object.assign(Object.assign({},_),{header_border_width:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
          </div>
        </div>

        <!-- Content Customization Section -->
        <div class="design-subsection">
          <div class="subsection-title">
            ${(0,s.kg)("editor.accordion.design.content_title",v,"Content Customization")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,s.kg)("editor.accordion.design.content_desc",v,"Customize the expanded content area appearance.")}
          </div>

          <!-- Content Background Color -->
          <div class="design-field">
            <ultra-color-picker
              .label=${(0,s.kg)("editor.accordion.design.content_bg_color",v,"Background Color")}
              .value=${_.content_background_color||""}
              .defaultValue=${"transparent"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},_),{content_background_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>

          <!-- Content Padding -->
          ${this.renderSliderField((0,s.kg)("editor.accordion.design.content_padding",v,"Content Padding"),(0,s.kg)("editor.accordion.design.content_padding_desc",v,"Padding around the content area (in pixels)."),_.content_padding||16,16,0,48,1,e=>{const t=Object.assign(Object.assign({},_),{content_padding:e});n({design:t}),this.triggerPreviewUpdate()},"px")}

          <!-- Content Border -->
          <div class="color-row">
            <ultra-color-picker
              .label=${(0,s.kg)("editor.accordion.design.content_border_color",v,"Border Color")}
              .value=${_.content_border_color||""}
              .defaultValue=${"transparent"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},_),{content_border_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>

            <div>
              ${this.renderSliderField((0,s.kg)("editor.accordion.design.content_border_width",v,"Border Width"),"",null!==(u=_.content_border_width)&&void 0!==u?u:0,0,0,5,1,e=>{const t=Object.assign(Object.assign({},_),{content_border_width:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
          </div>
        </div>
      </div>
    `}_renderOpenCloseLogic(e,t,i){var n;const r=e.open_conditions||[],a=e.open_mode||"manual",d=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";return o.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-top: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,s.kg)("editor.accordion.open_logic.section_title",d,"Open/Close Logic")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,s.kg)("editor.accordion.open_logic.section_desc",d,"Control when this accordion automatically opens or closes based on conditions.")}
        </div>

        <!-- Open Mode Selection -->
        ${this.renderFieldSection((0,s.kg)("editor.accordion.open_logic.mode_title",d,"Accordion State Control"),(0,s.kg)("editor.accordion.open_logic.mode_desc",d,"Choose how the accordion state is controlled."),t,{open_mode:a},[this.selectField("open_mode",[{value:"manual",label:(0,s.kg)("editor.accordion.open_logic.mode_manual",d,"Manual")},{value:"always",label:(0,s.kg)("editor.accordion.open_logic.mode_always",d,"Always Open")},{value:"every",label:(0,s.kg)("editor.accordion.open_logic.mode_every",d,"Open if EVERY condition is met")},{value:"any",label:(0,s.kg)("editor.accordion.open_logic.mode_any",d,"Open if ANY condition is met")}])],e=>{i({open_mode:e.detail.value.open_mode}),setTimeout(()=>{this.triggerPreviewUpdate()},50)})}

        <!-- Conditions List -->
        ${"manual"!==a&&"always"!==a?o.qy`
              <div style="margin-top: 24px;">
                <div
                  style="display:flex; align-items:center; justify-content: space-between; margin-bottom: 12px;"
                >
                  <div style="font-size: 16px; font-weight: 600;">
                    ${(0,s.kg)("editor.accordion.open_logic.conditions",d,"Conditions")}
                  </div>
                  <button
                    @click=${()=>{const e={id:`cond_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,type:"entity_state",ui_expanded:!0,entity:"",operator:"=",value:""},t=[...r,e];i({open_conditions:t})}}
                    style="display:flex; align-items:center; gap:8px; padding:6px 10px; border:1px dashed var(--primary-color); background:none; color:var(--primary-color); border-radius:var(--uc-r-6, 6px); cursor:pointer;"
                  >
                    <ha-icon icon="mdi:plus"></ha-icon>
                    ${(0,s.kg)("editor.accordion.open_logic.add_condition",d,"Add Condition")}
                  </button>
                </div>

                <div style="display:flex; flex-direction: column; gap: 12px;">
                  ${0===r.length?o.qy`
                        <div
                          style="text-align: center; padding: 24px; color: var(--secondary-text-color); font-style: italic;"
                        >
                          ${(0,s.kg)("editor.accordion.open_logic.no_conditions",d,'No conditions added yet. Click "Add Condition" to get started.')}
                        </div>
                      `:""}
                  ${r.map((e,o)=>this._renderOpenCondition(e,o,r,t,i))}
                </div>
              </div>
            `:"always"===a?o.qy`
                <div
                  style="margin-top: 16px; padding: 16px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-8, 8px); text-align: center; color: var(--secondary-text-color); font-style: italic;"
                >
                  ${(0,s.kg)("editor.accordion.open_logic.always_note",d,"Accordion will always remain open. Users can still manually close it, but it will reopen automatically.")}
                </div>
              `:o.qy`
                <div
                  style="margin-top: 16px; padding: 16px; background: rgba(var(--rgb-secondary-text-color), 0.05); border-radius: var(--uc-r-8, 8px); text-align: center; color: var(--secondary-text-color); font-style: italic;"
                >
                  ${(0,s.kg)("editor.accordion.open_logic.manual_note",d,"Accordion state is controlled manually by user clicks. Set Default State above to choose initial state.")}
                </div>
              `}
      </div>
    `}_renderOpenCondition(e,t,i,n,r){var a;const d=(null===(a=null==n?void 0:n.locale)||void 0===a?void 0:a.language)||"en",l=o=>{const n=[...i];n[t]=Object.assign(Object.assign({},e),o),r({open_conditions:n})},c=!1!==e.ui_expanded,g=e.custom_name||`Condition ${t+1}`;return o.qy`
      <div
        class="uc-condition-item"
        style="border:1px solid var(--divider-color); border-radius: var(--uc-r-8, 8px); background: var(--uc-pane-bg, var(--card-background-color)); overflow: hidden;"
      >
        <div
          class="uc-condition-header"
          style="display:flex; align-items:center; justify-content: space-between; gap:10px; padding: 12px 14px; border-bottom: ${c?"1px solid var(--divider-color)":"none"};"
        >
          <div style="display:flex; align-items:center; gap:10px; min-width:0;">
            <button
              @click=${()=>l({ui_expanded:!c})}
              title=${c?"Collapse":"Expand"}
              style="background:none; border:none; color:var(--secondary-text-color); cursor:pointer; padding:4px;"
            >
              <ha-icon icon=${c?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
            </button>
            <span
              style="font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;"
              >${g}</span
            >
          </div>
          <div style="display:flex; align-items:center; gap:4px; flex-shrink:0;">
            <button
              @click=${()=>{const o=Object.assign(Object.assign({},e),{id:`cond_${Date.now()}_${Math.random().toString(36).slice(2,7)}`}),n=[...i];n.splice(t+1,0,o),r({open_conditions:n})}}
              style="background:none; border:none; padding:4px; cursor:pointer; color: var(--secondary-text-color);"
              title="Duplicate Condition"
            >
              <ha-icon icon="mdi:content-copy" style="--mdc-icon-size: 18px;"></ha-icon>
            </button>
            <button
              @click=${()=>{const e=i.filter((e,i)=>i!==t);r({open_conditions:e})}}
              style="background:none; border:none; padding:4px; cursor:pointer; color: var(--error-color);"
              title="Remove Condition"
            >
              <ha-icon icon="mdi:trash-can-outline" style="--mdc-icon-size: 18px;"></ha-icon>
            </button>
          </div>
        </div>

        ${c?o.qy`
              <div style="padding: 12px 14px; display:flex; flex-direction:column; gap:12px;">
                ${this.renderFieldSection((0,s.kg)("editor.accordion.open_logic.custom_name",d,"Custom Name"),(0,s.kg)("editor.accordion.open_logic.custom_name_desc",d,"Optional: Give this condition a custom name"),n,{custom_name:e.custom_name||""},[this.textField("custom_name")],e=>l(e.detail.value))}
                ${this.renderFieldSection((0,s.kg)("editor.accordion.open_logic.condition_type",d,"Condition Type"),"",n,{type:e.type||"entity_state"},[this.selectField("type",[{value:"entity_state",label:(0,s.kg)("editor.accordion.open_logic.type_entity_state",d,"Entity State")},{value:"entity_attribute",label:(0,s.kg)("editor.accordion.open_logic.type_entity_attribute",d,"Entity Attribute")},{value:"time",label:(0,s.kg)("editor.accordion.open_logic.type_time",d,"Time Range")},{value:"template",label:(0,s.kg)("editor.accordion.open_logic.type_template",d,"Template")}])],e=>{const t=e.detail.value.type,i={type:t};"entity_state"===t?Object.assign(i,{entity:"",operator:"=",value:""}):"entity_attribute"===t?Object.assign(i,{entity:"",attribute:"",operator:"=",value:""}):"time"===t?Object.assign(i,{time_from:"00:00",time_to:"23:59"}):"template"===t&&Object.assign(i,{template:""}),l(i)})}
                ${(()=>"entity_state"===(e.type||"entity_state")?o.qy`
                      ${this.renderEntityPickerWithVariables(n,void 0,"entity",e.entity||"",e=>l({entity:e}),void 0,(0,s.kg)("editor.accordion.open_logic.entity",d,"Entity"))}
                      ${this.renderFieldSection((0,s.kg)("editor.accordion.open_logic.operator",d,"Operator"),"",n,{operator:e.operator||"="},[this.selectField("operator",[{value:"=",label:"="},{value:"!=",label:"!="},{value:">",label:">"},{value:">=",label:">="},{value:"<",label:"<"},{value:"<=",label:"<="},{value:"contains",label:"Contains"},{value:"not_contains",label:"Not Contains"},{value:"has_value",label:"Has Value"},{value:"no_value",label:"No Value"}])],e=>l(e.detail.value))}
                      ${this.renderFieldSection((0,s.kg)("editor.accordion.open_logic.value",d,"Value"),"",n,{value:e.value||""},[this.conditionValueField("value",n,e)],e=>l(e.detail.value))}
                    `:"entity_attribute"===e.type?o.qy`
                      ${this.renderEntityPickerWithVariables(n,void 0,"entity",e.entity||"",e=>l({entity:e}),void 0,(0,s.kg)("editor.accordion.open_logic.entity",d,"Entity"))}
                      ${this.renderFieldSection((0,s.kg)("editor.accordion.open_logic.attribute",d,"Attribute"),"",n,{attribute:e.attribute||""},[this.textField("attribute")],e=>l(e.detail.value))}
                      ${this.renderFieldSection((0,s.kg)("editor.accordion.open_logic.operator",d,"Operator"),"",n,{operator:e.operator||"="},[this.selectField("operator",[{value:"=",label:"="},{value:"!=",label:"!="},{value:">",label:">"},{value:">=",label:">="},{value:"<",label:"<"},{value:"<=",label:"<="},{value:"contains",label:"Contains"},{value:"not_contains",label:"Not Contains"}])],e=>l(e.detail.value))}
                      ${this.renderFieldSection((0,s.kg)("editor.accordion.open_logic.value",d,"Value"),"",n,{value:e.value||""},[this.conditionValueField("value",n,e)],e=>l(e.detail.value))}
                    `:"time"===e.type?o.qy`
                      ${this.renderFieldSection((0,s.kg)("editor.accordion.open_logic.time_from",d,"From"),"",n,{time_from:e.time_from||"00:00"},[this.textField("time_from")],e=>l(e.detail.value))}
                      ${this.renderFieldSection((0,s.kg)("editor.accordion.open_logic.time_to",d,"To"),"",n,{time_to:e.time_to||"23:59"},[this.textField("time_to")],e=>l(e.detail.value))}
                    `:o.qy`
                    <div class="field-container" style="margin-bottom: 16px;">
                      <div
                        class="field-title"
                        style="font-size: 14px; font-weight: 600; margin-bottom: 8px;"
                      >
                        ${(0,s.kg)("editor.accordion.open_logic.template",d,"Template")}
                      </div>
                      <div
                        class="field-description"
                        style="font-size: 12px; margin-bottom: 8px; color: var(--secondary-text-color);"
                      >
                        ${(0,s.kg)("editor.accordion.open_logic.template_desc",d,"Jinja2 template that should evaluate to true/false to open the accordion.")}
                      </div>
                      <ultra-template-editor
                        .hass=${n}
                        .value=${e.template||""}
                        .placeholder=${"{% if states('sensor.example') | int > 50 %}true{% else %}false{% endif %}"}
                        .minHeight=${100}
                        .maxHeight=${300}
                        @value-changed=${e=>l({template:e.detail.value})}
                      ></ultra-template-editor>
                    </div>
                  `)()}
              </div>
            `:""}
      </div>
    `}_overlayRef(e){let t=this.overlayRefCallbacks.get(e);return t||(t=t=>{this.overlayContentEls.set(e,t instanceof HTMLElement?t:void 0),this._applyOverlayLift(e)},this.overlayRefCallbacks.set(e,t)),t}_syncOverlayLift(e,t){this.overlayLiftWanted.set(e,t),this._applyOverlayLift(e)}_applyOverlayLift(e){const t=this.overlayContentEls.get(e),i=!!this.overlayLiftWanted.get(e)&&!!t,o=this.overlayLifts.get(e),n=this.overlayReleaseTimers.get(e);if(i&&t){if(n&&(clearTimeout(n),this.overlayReleaseTimers.delete(e)),o&&o.el===t&&t.isConnected)return;o&&(o.release(),this.overlayLifts.delete(e));const i=()=>{var i;t.isConnected&&this.overlayLiftWanted.get(e)&&this.overlayContentEls.get(e)===t&&(null===(i=this.overlayLifts.get(e))||void 0===i?void 0:i.el)!==t&&this.overlayLifts.set(e,{el:t,release:m(t)})};return void(t.isConnected?i():"function"==typeof requestAnimationFrame&&requestAnimationFrame(i))}if(!o||n)return;const r=setTimeout(()=>{this.overlayReleaseTimers.delete(e);const t=this.overlayLifts.get(e);t&&!this.overlayLiftWanted.get(e)?(t.release(),this.overlayLifts.delete(e)):t&&this.overlayContentEls.get(e)!==t.el&&(t.release(),this.overlayLifts.delete(e),this._applyOverlayLift(e))},320);this.overlayReleaseTimers.set(e,r)}_syncOutsideClickListener(e,t,i){const o=this.outsideClickCleanups.get(e);if(!i)return void(o&&(o(),this.outsideClickCleanups.delete(e)));if(o)return;const n=i=>{i.composedPath().some(e=>{var i;return e instanceof Element&&(null===(i=e.classList)||void 0===i?void 0:i.contains(t))})||(document.removeEventListener("pointerdown",n,!0),this.outsideClickCleanups.delete(e),this.accordionStates.get(e)&&(this.accordionStates.set(e,!1),this.triggerPreviewUpdate(!0)))};document.addEventListener("pointerdown",n,!0),this.outsideClickCleanups.set(e,()=>document.removeEventListener("pointerdown",n,!0))}renderPreview(e,t,i,n){var r,a,l,c,g,u,h,v,_;const m=e,b=m,y=b.design||{},x=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en",f=this.buildStyleString(this.buildDesignStyles(e,t)),w=this.getHoverEffectClass(e),k=m.open_mode||"manual";let $=null;"always"===k?$=!0:"every"!==k&&"any"!==k||(d.S.setHass(t),$=d.S.evaluateDisplayConditions(m.open_conditions||[],k));const S=m.default_open||!1,C=this.accordionInitConfigs.get(m.id);if(!C||C.defaultOpen===S&&C.openMode===k||(this.accordionStates.delete(m.id),this.accordionLogicStates.delete(m.id)),this.accordionInitConfigs.set(m.id,{defaultOpen:S,openMode:k}),this.accordionStates.has(m.id))null!==$&&this.accordionLogicStates.get(m.id)!==$&&this.accordionStates.set(m.id,$);else{const e=null!==$?$:S;this.accordionStates.set(m.id,e)}this.accordionLogicStates.set(m.id,$);const O=this.accordionStates.get(m.id)||!1,P="overlay"===(m.expand_style||"push"),T=m.expand_direction||"down",z="up"===T||"auto"===T&&"up"===this.accordionResolvedDirections.get(m.id),F="left"===T||"right"===T,j="right"===T,L=F&&"vertical"===(m.side_header_style||"vertical"),U=`min(${Math.max(80,Number(m.panel_width)||300)}px, calc(100vw - 96px))`;let I="";if("entity"===m.title_mode&&m.title_entity){const e=this.resolveEntity(m.title_entity,i)||m.title_entity,o=null==t?void 0:t.states[e],n=(null===(a=null==o?void 0:o.attributes)||void 0===a?void 0:a.friendly_name)||e.split(".")[1]||e,r=(null==o?void 0:o.state)||e;I=m.show_entity_name?`${n}: ${r}`:r}else I=m.title_text||(0,s.kg)("editor.accordion.preview.title_fallback",x,"Accordion Title");const E=(null===(l=m.title_icon)||void 0===l?void 0:l.trim())||"",A=m.icon||"mdi:chevron-down",D=m.header_alignment||"apart",B=m.icon_side||"right";let H="space-between",M=1,R=2;"center"===D?(H="center","left"===B?(M=2,R=1):(M=1,R=2)):(H="space-between","left"===B?(M=2,R=1):(M=1,R=2));const q=null!==(c=y.container_border_width)&&void 0!==c?c:1,W=y.container_border_color||"var(--divider-color)",V=null!==(g=y.container_border_radius)&&void 0!==g?g:8,N=y.container_background_color||"var(--uc-pane-bg, var(--card-background-color))",G={border:`${q}px solid ${W}`,borderRadius:`${V}px`,overflow:P?"visible":"hidden",position:"relative",display:"flex",flexDirection:!P&&z?"column-reverse":"column",background:N,boxShadow:y.container_shadow||"none"};F&&Object.assign(G,{flexDirection:P||j?"row":"row-reverse",alignItems:"stretch",width:"fit-content",maxWidth:"100%"});const Y=null!==(u=y.header_padding)&&void 0!==u?u:12,Z=null!==(h=y.header_border_width)&&void 0!==h?h:1,J=y.header_border_color||"var(--divider-color)",K={display:"flex",alignItems:"center",justifyContent:H,padding:`${Y}px 16px`,cursor:"pointer",background:y.header_background_color||"var(--uc-pane-bg, var(--card-background-color))",color:y.header_text_color||"var(--primary-text-color)",fontSize:y.header_font_size?`${y.header_font_size}px`:"16px",fontWeight:y.header_font_weight||"normal",transition:"background 0.2s",userSelect:"none",gap:"center"===D?"8px":"0"};F?(K.flexShrink="0",L&&Object.assign(K,{flexDirection:"column",padding:`16px ${Y}px`,gap:"8px"}),!P&&O&&(K[j?"borderRight":"borderLeft"]=`${Z}px solid ${J}`)):K[!P&&z?"borderTop":"borderBottom"]=`${Z}px solid ${J}`;const Q=null!==(v=y.content_border_width)&&void 0!==v?v:0,X=y.content_border_color||"transparent",ee=y.content_background_color||"transparent",te="transparent"!==ee?ee:N,ie={maxHeight:O?"10000px":"0",overflow:O?"visible":"hidden",transition:"max-height 0.3s ease-in-out, padding 0.3s ease-in-out",background:ee,padding:O?`${y.content_padding||16}px`:"0",borderTop:Q>0?`${Q}px solid ${X}`:"none"};P&&Object.assign(ie,{position:"absolute",left:"0",right:"0",[z?"bottom":"top"]:"100%",[z?"marginBottom":"marginTop"]:"4px",zIndex:"1000",background:"var(--card-background-color, var(--ha-card-background, var(--primary-background-color, #fff)))",borderRadius:`${V}px`,border:O?`${q}px solid ${W}`:"none",boxShadow:O?y.container_shadow||"0 4px 16px rgba(0, 0, 0, 0.25)":"none"}),F&&(Object.assign(ie,{maxHeight:"none",width:O?U:"0",flexShrink:"0",overflow:"hidden",padding:"0",transition:"width 0.3s ease-in-out",borderTop:"none",[j?"borderLeft":"borderRight"]:Q>0?`${Q}px solid ${X}`:"none"}),P&&Object.assign(ie,{top:"0",bottom:"auto",left:j?"100%":"auto",right:j?"auto":"100%",marginTop:"0",marginBottom:"0",[j?"marginLeft":"marginRight"]:"4px",minHeight:"100%"}));const oe=null!==(_=y.icon_size)&&void 0!==_?_:24,ne=y.icon_color||"inherit",re=j?-90:90,ae={transform:F?`rotate(${O?-re:re}deg)`:O?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease",order:R,flexShrink:0,color:ne},de={order:M,flexShrink:"apart"===D?1:0,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"};if(L){de.writingMode="vertical-rl",de.minHeight=0;const e=m.side_title_direction||"auto";("auto"===e?j:"up"===e)&&(de.transform="rotate(180deg)")}const le=y.header_hover_color||"rgba(var(--rgb-primary-color), 0.1)",ce=this.createGestureHandlers(m.id,{tap_action:m.tap_action,hold_action:m.hold_action,double_tap_action:m.double_tap_action,entity:m.entity,module:m},t,i),se=e=>!!e&&"nothing"!==e.action&&"default"!==e.action,ge=se(m.tap_action)||se(m.hold_action)||se(m.double_tap_action),pe=e=>e.stopPropagation(),ue=e=>{var t;e.stopPropagation();const i=this.accordionStates.get(m.id)||!1;if(!i&&"auto"===T){const i=e.currentTarget,o=null===(t=null==i?void 0:i.getBoundingClientRect)||void 0===t?void 0:t.call(i),n="undefined"!=typeof window?window.innerHeight:0;this.accordionResolvedDirections.set(m.id,o&&n&&o.top+o.height/2>n/2?"up":"down")}this.accordionStates.set(m.id,!i),this.triggerPreviewUpdate(!0)},he=m.modules&&m.modules.length>0,ve=`accordion-${m.id.replace(/[^a-zA-Z0-9]/g,"")}`;this._syncOutsideClickListener(m.id,ve,O&&!!m.close_on_outside_click),this._syncOverlayLift(m.id,O&&P);const _e=()=>O&&he?m.modules.map(e=>this._renderAccordionChild(e,t,b,i,n)):O&&!he?o.qy`
              <div
                style="padding: 24px; text-align: center; color: var(--secondary-text-color); font-style: italic;"
              >
                ${(0,s.kg)("editor.accordion.preview.no_modules",x,"No modules added. Add modules to this accordion in the Layout tab.")}
              </div>
            `:"";return this.wrapWithAnimation(o.qy`
      <style>
        .${ve} .ultra-accordion-header:hover {
          background: ${le} !important;
        }
        ${P?`.${ve} > .ultra-accordion-content::before {\n              content: '';\n              position: absolute;\n              inset: 0;\n              z-index: -1;\n              border-radius: inherit;\n              pointer-events: none;\n              background: ${te};\n            }`:""}
      </style>
      <div
        class="ultra-accordion-container ${w} ${ve}"
        data-uc-role="pane"
        style="${this.buildStyleString(G)}; ${f}${ge?"; cursor: pointer":""}"
        @pointerdown=${ge?ce.onPointerDown:null}
        @pointermove=${ge?ce.onPointerMove:null}
        @pointerup=${ge?ce.onPointerUp:null}
        @pointercancel=${ge?ce.onPointerCancel:null}
        @pointerleave=${ge?ce.onPointerLeave:null}
      >
        <!-- Accordion Header -->
        <div
          class="ultra-accordion-header"
          style="${this.buildStyleString(K)}"
          role="button"
          tabindex="0"
          aria-expanded="${O}"
          aria-label="${I}${O?", expanded":", collapsed"}"
          @pointerdown=${ge?pe:null}
          @pointerup=${ge?pe:null}
          @click=${ue}
          @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),ue(e))}}
        >
          <!-- Title -->
          ${E?o.qy`<span
                class="ultra-accordion-title ultra-accordion-title--with-icon"
                style="${this.buildStyleString(Object.assign(Object.assign({},de),{display:"flex",alignItems:"center",gap:"8px"}))}"
              >
                ${"after"===m.title_icon_position?o.qy`<span style="min-width: 0; overflow: hidden; text-overflow: ellipsis;">${I}</span>
                      <ha-icon
                        icon="${E}"
                        style="flex-shrink: 0; --mdc-icon-size: 1.25em; color: ${m.title_icon_color||"inherit"};"
                      ></ha-icon>`:o.qy`<ha-icon
                        icon="${E}"
                        style="flex-shrink: 0; --mdc-icon-size: 1.25em; color: ${m.title_icon_color||"inherit"};"
                      ></ha-icon>
                      <span style="min-width: 0; overflow: hidden; text-overflow: ellipsis;">${I}</span>`}
              </span>`:o.qy`<span class="ultra-accordion-title" style="${this.buildStyleString(de)}"
                >${I}</span
              >`}

          <!-- Control Icon (Chevron) -->
          <ha-icon
            icon="${A}"
            style="${this.buildStyleString(ae)}; --mdc-icon-size: ${oe}px;"
          ></ha-icon>
        </div>

        <!-- Accordion Content -->
        <div
          class="ultra-accordion-content"
          style="${this.buildStyleString(ie)}"
          ${(0,p.K)(this._overlayRef(m.id))}
        >
          ${F?o.qy`<div
                class="ultra-accordion-side-panel"
                style="width: ${U}; box-sizing: border-box; padding: ${y.content_padding||16}px;"
              >
                ${_e()}
              </div>`:_e()}
        </div>
      </div>
    `,e,t)}_renderAccordionChild(e,t,i,n,s){var p,u,h,v,_,m,b,y,x,f,w,k;const $=(0,a.oD)().getModule(e.type);if(!$)return c.E.renderModuleLoadingState(e);const S=this.applyLayoutDesignToChild(e,i);d.S.setHass(t);const C=S,O=d.S.evaluateModuleVisibility(S),P=d.S.evaluateLogicProperties({logic_entity:null===(p=null==C?void 0:C.design)||void 0===p?void 0:p.logic_entity,logic_attribute:null===(u=null==C?void 0:C.design)||void 0===u?void 0:u.logic_attribute,logic_operator:null===(h=null==C?void 0:C.design)||void 0===h?void 0:h.logic_operator,logic_value:null===(v=null==C?void 0:C.design)||void 0===v?void 0:v.logic_value});if(!O||!P)return o.qy``;const T=(null===(m=null===(_=$.metadata)||void 0===_?void 0:_.tags)||void 0===m?void 0:m.includes("pro"))||(null===(y=null===(b=$.metadata)||void 0===b?void 0:b.tags)||void 0===y?void 0:y.includes("premium"))||!1;let z=!1;const F=l.xd.checkIntegrationAuth(t);if("pro"===(null===(x=null==F?void 0:F.subscription)||void 0===x?void 0:x.tier)&&"active"===(null===(f=null==F?void 0:F.subscription)||void 0===f?void 0:f.status))z=!0;else if(l.xd.isAuthenticated()){const e=l.xd.getCurrentUser();"pro"===(null===(w=null==e?void 0:e.subscription)||void 0===w?void 0:w.tier)&&"active"===(null===(k=null==e?void 0:e.subscription)||void 0===k?void 0:k.status)&&(z=!0)}if(T&&!z)return o.qy`
        <div
          style="padding: 16px; text-align: center; color: var(--secondary-text-color); font-style: italic; background: rgba(var(--rgb-warning-color), 0.1); border: 1px dashed var(--warning-color); border-radius: var(--uc-r-8, 8px); margin: 8px 0;"
        >
          🔒 ${$.metadata.title} - Pro Feature
        </div>
      `;const j=o.qy`
      <div class="accordion-child-module" style="margin-bottom: 8px;">
        ${$.renderPreview((0,g.l8)(S),t,n,s)}
      </div>
    `;return(0,r.vZ)(S,t,j)}applyLayoutDesignToChild(e,t){const i=Object.assign({},e),o=e.design||{};return void 0!==o.margin_top||void 0!==o.margin_bottom||void 0!==o.margin_left||void 0!==o.margin_right||void 0!==e.margin_top||void 0!==e.margin_bottom||void 0!==e.margin_left||void 0!==e.margin_right||(i.margin_top="0",i.margin_bottom="0",i.margin_left="0",i.margin_right="0"),t.color&&(i.color=t.color),t.font_size&&(i.font_size=t.font_size),t.font_family&&(i.font_family=t.font_family),t.font_weight&&(i.font_weight=t.font_weight),t.text_align&&(i.text_align=t.text_align),t.line_height&&(i.line_height=t.line_height),t.letter_spacing&&(i.letter_spacing=t.letter_spacing),t.text_transform&&(i.text_transform=t.text_transform),t.font_style&&(i.font_style=t.font_style),t.white_space&&(i.white_space=t.white_space),t.text_shadow_h&&(i.text_shadow_h=t.text_shadow_h),t.text_shadow_v&&(i.text_shadow_v=t.text_shadow_v),t.text_shadow_blur&&(i.text_shadow_blur=t.text_shadow_blur),t.text_shadow_color&&(i.text_shadow_color=t.text_shadow_color),t.box_shadow_h&&(i.box_shadow_h=t.box_shadow_h),t.box_shadow_v&&(i.box_shadow_v=t.box_shadow_v),t.box_shadow_blur&&(i.box_shadow_blur=t.box_shadow_blur),t.box_shadow_spread&&(i.box_shadow_spread=t.box_shadow_spread),t.box_shadow_color&&(i.box_shadow_color=t.box_shadow_color),t.animation_type&&(i.animation_type=t.animation_type),t.animation_entity&&(i.animation_entity=t.animation_entity),t.animation_trigger_type&&(i.animation_trigger_type=t.animation_trigger_type),t.animation_attribute&&(i.animation_attribute=t.animation_attribute),t.animation_state&&(i.animation_state=t.animation_state),t.intro_animation&&(i.intro_animation=t.intro_animation),t.outro_animation&&(i.outro_animation=t.outro_animation),t.animation_duration&&(i.animation_duration=t.animation_duration),t.animation_delay&&(i.animation_delay=t.animation_delay),t.animation_timing&&(i.animation_timing=t.animation_timing),i}validate(e){var t,i;const o=e,n=[...super.validate(e).errors];return o.modules||n.push("Modules array is required"),"custom"!==o.title_mode||(null===(t=o.title_text)||void 0===t?void 0:t.trim())||n.push("Title text is required when using custom title mode"),"entity"!==o.title_mode||(null===(i=o.title_entity)||void 0===i?void 0:i.trim())||n.push("Title entity is required when using entity title mode"),{valid:0===n.length,errors:n}}getStyles(){return`\n      ${n.m.getSliderStyles()}\n    `}}}};