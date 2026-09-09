export const __webpack_esm_ids__=[7861];export const __webpack_esm_modules__={2562(e,t,i){i.d(t,{UltraAccordionModule:()=>g});var o=i(2618),n=i(7475),a=i(8414),r=i(230),d=i(378),l=i(2034),c=i(6478),s=i(5064);class g extends n.m{constructor(){super(...arguments),this.metadata={type:"accordion",title:"Accordion",description:"Collapsible container with customizable header for organizing modules",author:"WJD Designs",version:"1.0.0",icon:"mdi:chevron-down",category:"layout",tags:["layout","accordion","collapsible","container","organization"]},this.accordionStates=new Map,this.accordionLogicStates=new Map,this.accordionInitConfigs=new Map,this.accordionResolvedDirections=new Map,this.outsideClickCleanups=new Map}createDefault(e,t){return{id:e||this.generateId("accordion"),type:"accordion",modules:[],title_mode:"custom",title_text:"Accordion Title",title_entity:"",show_entity_name:!1,icon:"mdi:chevron-down",header_alignment:"apart",icon_side:"right",default_open:!1,expand_direction:"down",expand_style:"push",close_on_outside_click:!1,open_mode:"manual",open_conditions:[],tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderDesignTab(e,t,i,n){var a;const r=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}

      <div class="module-design-settings">
        <!-- Standard Design Tab Content (from GlobalDesignTab) -->
        <div
          style="font-size: 14px; font-weight: 600; color: var(--secondary-text-color); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;"
        >
          ${(0,c.kg)("editor.accordion.design.general_title",r,"General Module Design")}
        </div>
        ${super.renderDesignTab(e,t,i,n)}
      </div>
    `}renderGeneralTab(e,t,i,n){var a,r,d,l,s,g,u;const p=e,_=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",v=p.design||{};return o.qy`
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
        ${this.renderSettingsSection((0,c.kg)("editor.accordion.title.section_title",_,"Title Configuration"),(0,c.kg)("editor.accordion.title.section_desc",_,"Configure the accordion header title source and content."),[{title:(0,c.kg)("editor.accordion.title.mode",_,"Title Mode"),description:(0,c.kg)("editor.accordion.title.mode_desc",_,"Choose whether to use custom text or entity state as title."),hass:t,data:{title_mode:p.title_mode||"custom"},schema:[this.selectField("title_mode",[{value:"custom",label:(0,c.kg)("editor.common.custom_text",_,"Custom Text")},{value:"entity",label:(0,c.kg)("editor.common.entity_state",_,"Entity State")}])],onChange:e=>{e.detail.value.title_mode!==(p.title_mode||"custom")&&(n(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}

        <!-- Conditional: Custom Title Text -->
        ${"custom"===p.title_mode?o.qy`
              <div style="margin-top: -16px; margin-bottom: 32px;">
                ${this.renderConditionalFieldsGroup((0,c.kg)("editor.accordion.title.custom_config",_,"Custom Title Configuration"),this.renderFieldSection((0,c.kg)("editor.accordion.title.custom_text",_,"Title Text"),(0,c.kg)("editor.accordion.title.custom_text_desc",_,"Enter the custom text to display in the accordion header."),t,{title_text:p.title_text||""},[this.textField("title_text")],e=>{n({title_text:e.detail.value.title_text}),this.triggerPreviewUpdate()}))}
              </div>
            `:""}

        <!-- Conditional: Entity Title -->
        ${"entity"===p.title_mode?o.qy`
              <div style="margin-top: -16px; margin-bottom: 32px;">
                ${this.renderConditionalFieldsGroup((0,c.kg)("editor.accordion.title.entity_config",_,"Entity Title Configuration"),o.qy`
                    ${this.renderEntityPickerWithVariables(t,i,"title_entity",p.title_entity||"",e=>{n({title_entity:e}),setTimeout(()=>{this.triggerPreviewUpdate()},50)},void 0,(0,c.kg)("editor.accordion.title.entity",_,"Title Entity"))}
                    <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
                      ${(0,c.kg)("editor.accordion.title.entity_desc",_,"Select an entity whose state will be used as the accordion header title.")}
                    </div>

                    <!-- Show Entity Name Toggle -->
                    ${this.renderSettingsSection((0,c.kg)("editor.accordion.title.show_name",_,"Display Options"),(0,c.kg)("editor.accordion.title.show_name_desc",_,"Choose whether to show the entity name along with the state."),[{title:(0,c.kg)("editor.accordion.title.show_entity_name",_,"Show Entity Name"),description:(0,c.kg)("editor.accordion.title.show_entity_name_desc",_,"Display the entity friendly name before the state value."),hass:t,data:{show_entity_name:p.show_entity_name||!1},schema:[this.booleanField("show_entity_name")],onChange:e=>{n(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}
                  `)}
              </div>
            `:""}

        <!-- Icon Configuration Section -->
        ${this.renderSettingsSection((0,c.kg)("editor.accordion.icon.section_title",_,"Control Icon"),(0,c.kg)("editor.accordion.icon.section_desc",_,"Configure the control icon displayed in the accordion header (defaults to chevron-down)."),[{title:(0,c.kg)("editor.accordion.icon.custom",_,"Icon"),description:(0,c.kg)("editor.accordion.icon.custom_desc",_,"Select the icon to display as the control indicator."),hass:t,data:{icon:p.icon||"mdi:chevron-down"},schema:[this.iconField("icon")],onChange:e=>{n(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}

        <!-- Header Alignment Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,c.kg)("editor.accordion.alignment.section_title",_,"Header Alignment")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,c.kg)("editor.accordion.alignment.section_desc",_,"Choose how the title and icon are positioned in the header.")}
          </div>

          <!-- Alignment Mode: Center or Apart -->
          ${this.renderSegmentedField((0,c.kg)("editor.accordion.alignment.mode",_,"Alignment Mode"),"",p.header_alignment||"apart",[{value:"center",label:(0,c.kg)("editor.common.center",_,"Center"),icon:"mdi:align-horizontal-center"},{value:"apart",label:(0,c.kg)("editor.common.apart",_,"Apart"),icon:"mdi:arrow-left-right"}],e=>{n({header_alignment:e}),this.triggerPreviewUpdate()})}

          <!-- Icon Side: Left or Right -->
          ${this.renderSegmentedField((0,c.kg)("editor.accordion.alignment.icon_side",_,"Icon Side"),"",p.icon_side||"right",[{value:"left",label:(0,c.kg)("editor.common.left",_,"Left"),icon:"mdi:arrow-left"},{value:"right",label:(0,c.kg)("editor.common.right",_,"Right"),icon:"mdi:arrow-right"}],e=>{n({icon_side:e}),this.triggerPreviewUpdate()})}
        </div>

        <!-- Expand Behavior Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,c.kg)("editor.accordion.behavior.section_title",_,"Expand Behavior")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,c.kg)("editor.accordion.behavior.section_desc",_,"Control which direction the content opens and how it interacts with the rest of the page.")}
          </div>

          <!-- Expand Direction -->
          ${this.renderSegmentedField((0,c.kg)("editor.accordion.behavior.direction",_,"Expand Direction"),(0,c.kg)("editor.accordion.behavior.direction_desc",_,"Auto opens upward when the accordion sits in the lower half of the screen."),p.expand_direction||"down",[{value:"down",label:(0,c.kg)("editor.accordion.behavior.direction_down",_,"Down"),icon:"mdi:arrow-down"},{value:"up",label:(0,c.kg)("editor.accordion.behavior.direction_up",_,"Up"),icon:"mdi:arrow-up"},{value:"auto",label:(0,c.kg)("editor.accordion.behavior.direction_auto",_,"Auto"),icon:"mdi:arrow-up-down"}],e=>{n({expand_direction:e}),this.triggerPreviewUpdate()})}

          <!-- Expand Style -->
          ${this.renderSegmentedField((0,c.kg)("editor.accordion.behavior.style",_,"Expand Style"),(0,c.kg)("editor.accordion.behavior.style_desc",_,"In Place grows the accordion and pushes content aside. Overlay floats the open content over the page like a dropdown menu."),p.expand_style||"push",[{value:"push",label:(0,c.kg)("editor.accordion.behavior.style_push",_,"In Place"),icon:"mdi:arrow-expand-vertical"},{value:"overlay",label:(0,c.kg)("editor.accordion.behavior.style_overlay",_,"Overlay"),icon:"mdi:layers-outline"}],e=>{n({expand_style:e}),this.triggerPreviewUpdate()})}

          <!-- Close on Outside Click -->
          ${this.renderSettingsSection("","",[{title:(0,c.kg)("editor.accordion.behavior.outside_click",_,"Close on Outside Click"),description:(0,c.kg)("editor.accordion.behavior.outside_click_desc",_,"Collapse the accordion whenever you click or tap anywhere outside it."),hass:t,data:{close_on_outside_click:p.close_on_outside_click||!1},schema:[this.booleanField("close_on_outside_click")],onChange:e=>{n(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}
        </div>

        <!-- Open/Close Logic Section -->
        ${this._renderOpenCloseLogic(p,t,n)}

        <!-- Default State Section (only shown when open_mode is manual) -->
        ${"manual"===(p.open_mode||"manual")?this.renderSettingsSection((0,c.kg)("editor.accordion.state.section_title",_,"Default State"),(0,c.kg)("editor.accordion.state.section_desc",_,"Configure whether this accordion starts open or closed when the card loads."),[{title:(0,c.kg)("editor.accordion.state.default_open",_,"Open by Default"),description:(0,c.kg)("editor.accordion.state.default_open_desc",_,"When enabled, the accordion will be expanded when the card initially loads."),hass:t,data:{default_open:p.default_open||!1},schema:[this.booleanField("default_open")],onChange:e=>{n(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}]):""}

        <!-- Container Customization Section -->
        <div class="design-subsection">
          <div class="subsection-title">
            ${(0,c.kg)("editor.accordion.design.container_title",_,"Container Customization")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,c.kg)("editor.accordion.design.container_desc",_,"Customize the outer wrapper styling of the accordion.")}
          </div>

          <!-- Container Background & Border Color Row -->
          <div class="color-row">
            <ultra-color-picker
              .label=${(0,c.kg)("editor.accordion.design.container_bg_color",_,"Background Color")}
              .value=${v.container_background_color||""}
              .defaultValue=${"var(--card-background-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},v),{container_background_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>

            <ultra-color-picker
              .label=${(0,c.kg)("editor.accordion.design.container_border_color",_,"Border Color")}
              .value=${v.container_border_color||""}
              .defaultValue=${"var(--divider-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},v),{container_border_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>

          <!-- Container Border Width & Radius -->
          <div class="field-row">
            <div>
              ${this.renderSliderField((0,c.kg)("editor.accordion.design.container_border_width",_,"Border Width"),"",null!==(r=v.container_border_width)&&void 0!==r?r:1,1,0,10,1,e=>{const t=Object.assign(Object.assign({},v),{container_border_width:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
            <div>
              ${this.renderSliderField((0,c.kg)("editor.accordion.design.container_border_radius",_,"Border Radius"),"",null!==(d=v.container_border_radius)&&void 0!==d?d:8,8,0,50,1,e=>{const t=Object.assign(Object.assign({},v),{container_border_radius:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
          </div>

          <!-- Box Shadow -->
          ${this.renderFieldSection((0,c.kg)("editor.accordion.design.container_shadow",_,"Box Shadow"),(0,c.kg)("editor.accordion.design.container_shadow_desc",_,"CSS box-shadow value (e.g., 0 2px 8px rgba(0,0,0,0.1))"),t,{container_shadow:v.container_shadow||""},[this.textField("container_shadow")],e=>{const t=Object.assign(Object.assign({},v),{container_shadow:e.detail.value.container_shadow});n({design:t}),this.triggerPreviewUpdate()})}
        </div>

        <!-- Header Customization Section -->
        <div class="design-subsection">
          <div class="subsection-title">
            ${(0,c.kg)("editor.accordion.design.header_title",_,"Header Customization")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,c.kg)("editor.accordion.design.header_desc",_,"Customize the clickable header bar appearance.")}
          </div>

          <!-- Header Text & Background Colors -->
          <div class="color-row">
            <ultra-color-picker
              .label=${(0,c.kg)("editor.accordion.design.header_text_color",_,"Text Color")}
              .value=${v.header_text_color||""}
              .defaultValue=${"var(--primary-text-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},v),{header_text_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>

            <ultra-color-picker
              .label=${(0,c.kg)("editor.accordion.design.header_bg_color",_,"Background Color")}
              .value=${v.header_background_color||""}
              .defaultValue=${"var(--card-background-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},v),{header_background_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>

          <!-- Header Hover Background -->
          <div class="design-field">
            <ultra-color-picker
              .label=${(0,c.kg)("editor.accordion.design.header_hover_color",_,"Hover Background Color")}
              .value=${v.header_hover_color||""}
              .defaultValue=${"rgba(var(--rgb-primary-color), 0.1)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},v),{header_hover_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>

          <!-- Icon Color & Size -->
          <div class="color-row">
            <ultra-color-picker
              .label=${(0,c.kg)("editor.accordion.design.icon_color",_,"Icon Color")}
              .value=${v.icon_color||""}
              .defaultValue=${"var(--primary-text-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},v),{icon_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>

            <div>
              ${this.renderSliderField((0,c.kg)("editor.accordion.design.icon_size",_,"Icon Size"),"",null!==(l=v.icon_size)&&void 0!==l?l:24,24,12,48,1,e=>{const t=Object.assign(Object.assign({},v),{icon_size:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
          </div>

          <!-- Header Font Size & Weight -->
          <div class="field-row">
            <div>
              ${this.renderSliderField((0,c.kg)("editor.accordion.design.header_font_size",_,"Font Size"),"",v.header_font_size||16,16,8,48,1,e=>{const t=Object.assign(Object.assign({},v),{header_font_size:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
            <div>
              ${this.renderFieldSection((0,c.kg)("editor.accordion.design.header_font_weight",_,"Font Weight"),"",t,{header_font_weight:v.header_font_weight||"normal"},[this.selectField("header_font_weight",[{value:"normal",label:"Normal"},{value:"300",label:"Light"},{value:"500",label:"Medium"},{value:"600",label:"Semi-Bold"},{value:"bold",label:"Bold"},{value:"800",label:"Extra Bold"}])],e=>{const t=Object.assign(Object.assign({},v),{header_font_weight:e.detail.value.header_font_weight});n({design:t}),this.triggerPreviewUpdate()})}
            </div>
          </div>

          <!-- Header Padding -->
          ${this.renderSliderField((0,c.kg)("editor.accordion.design.header_padding",_,"Header Padding"),(0,c.kg)("editor.accordion.design.header_padding_desc",_,"Padding inside the header (in pixels)."),null!==(s=v.header_padding)&&void 0!==s?s:12,12,0,48,1,e=>{const t=Object.assign(Object.assign({},v),{header_padding:e});n({design:t}),this.triggerPreviewUpdate()},"px")}

          <!-- Header Border Bottom -->
          <div class="color-row">
            <ultra-color-picker
              .label=${(0,c.kg)("editor.accordion.design.header_border_color",_,"Border Bottom Color")}
              .value=${v.header_border_color||""}
              .defaultValue=${"var(--divider-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},v),{header_border_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>

            <div>
              ${this.renderSliderField((0,c.kg)("editor.accordion.design.header_border_width",_,"Border Width"),"",null!==(g=v.header_border_width)&&void 0!==g?g:1,1,0,5,1,e=>{const t=Object.assign(Object.assign({},v),{header_border_width:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
          </div>
        </div>

        <!-- Content Customization Section -->
        <div class="design-subsection">
          <div class="subsection-title">
            ${(0,c.kg)("editor.accordion.design.content_title",_,"Content Customization")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,c.kg)("editor.accordion.design.content_desc",_,"Customize the expanded content area appearance.")}
          </div>

          <!-- Content Background Color -->
          <div class="design-field">
            <ultra-color-picker
              .label=${(0,c.kg)("editor.accordion.design.content_bg_color",_,"Background Color")}
              .value=${v.content_background_color||""}
              .defaultValue=${"transparent"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},v),{content_background_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>

          <!-- Content Padding -->
          ${this.renderSliderField((0,c.kg)("editor.accordion.design.content_padding",_,"Content Padding"),(0,c.kg)("editor.accordion.design.content_padding_desc",_,"Padding around the content area (in pixels)."),v.content_padding||16,16,0,48,1,e=>{const t=Object.assign(Object.assign({},v),{content_padding:e});n({design:t}),this.triggerPreviewUpdate()},"px")}

          <!-- Content Border -->
          <div class="color-row">
            <ultra-color-picker
              .label=${(0,c.kg)("editor.accordion.design.content_border_color",_,"Border Color")}
              .value=${v.content_border_color||""}
              .defaultValue=${"transparent"}
              .hass=${t}
              @value-changed=${e=>{const t=Object.assign(Object.assign({},v),{content_border_color:e.detail.value});n({design:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>

            <div>
              ${this.renderSliderField((0,c.kg)("editor.accordion.design.content_border_width",_,"Border Width"),"",null!==(u=v.content_border_width)&&void 0!==u?u:0,0,0,5,1,e=>{const t=Object.assign(Object.assign({},v),{content_border_width:e});n({design:t}),this.triggerPreviewUpdate()},"px")}
            </div>
          </div>
        </div>
      </div>
    `}_renderOpenCloseLogic(e,t,i){var n;const a=e.open_conditions||[],r=e.open_mode||"manual",d=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";return o.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-top: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,c.kg)("editor.accordion.open_logic.section_title",d,"Open/Close Logic")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,c.kg)("editor.accordion.open_logic.section_desc",d,"Control when this accordion automatically opens or closes based on conditions.")}
        </div>

        <!-- Open Mode Selection -->
        ${this.renderFieldSection((0,c.kg)("editor.accordion.open_logic.mode_title",d,"Accordion State Control"),(0,c.kg)("editor.accordion.open_logic.mode_desc",d,"Choose how the accordion state is controlled."),t,{open_mode:r},[this.selectField("open_mode",[{value:"manual",label:(0,c.kg)("editor.accordion.open_logic.mode_manual",d,"Manual")},{value:"always",label:(0,c.kg)("editor.accordion.open_logic.mode_always",d,"Always Open")},{value:"every",label:(0,c.kg)("editor.accordion.open_logic.mode_every",d,"Open if EVERY condition is met")},{value:"any",label:(0,c.kg)("editor.accordion.open_logic.mode_any",d,"Open if ANY condition is met")}])],e=>{i({open_mode:e.detail.value.open_mode}),setTimeout(()=>{this.triggerPreviewUpdate()},50)})}

        <!-- Conditions List -->
        ${"manual"!==r&&"always"!==r?o.qy`
              <div style="margin-top: 24px;">
                <div
                  style="display:flex; align-items:center; justify-content: space-between; margin-bottom: 12px;"
                >
                  <div style="font-size: 16px; font-weight: 600;">
                    ${(0,c.kg)("editor.accordion.open_logic.conditions",d,"Conditions")}
                  </div>
                  <button
                    @click=${()=>{const e={id:`cond_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,type:"entity_state",ui_expanded:!0,entity:"",operator:"=",value:""},t=[...a,e];i({open_conditions:t})}}
                    style="display:flex; align-items:center; gap:8px; padding:6px 10px; border:1px dashed var(--primary-color); background:none; color:var(--primary-color); border-radius:var(--uc-r-6, 6px); cursor:pointer;"
                  >
                    <ha-icon icon="mdi:plus"></ha-icon>
                    ${(0,c.kg)("editor.accordion.open_logic.add_condition",d,"Add Condition")}
                  </button>
                </div>

                <div style="display:flex; flex-direction: column; gap: 12px;">
                  ${0===a.length?o.qy`
                        <div
                          style="text-align: center; padding: 24px; color: var(--secondary-text-color); font-style: italic;"
                        >
                          ${(0,c.kg)("editor.accordion.open_logic.no_conditions",d,'No conditions added yet. Click "Add Condition" to get started.')}
                        </div>
                      `:""}
                  ${a.map((e,o)=>this._renderOpenCondition(e,o,a,t,i))}
                </div>
              </div>
            `:"always"===r?o.qy`
                <div
                  style="margin-top: 16px; padding: 16px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-8, 8px); text-align: center; color: var(--secondary-text-color); font-style: italic;"
                >
                  ${(0,c.kg)("editor.accordion.open_logic.always_note",d,"Accordion will always remain open. Users can still manually close it, but it will reopen automatically.")}
                </div>
              `:o.qy`
                <div
                  style="margin-top: 16px; padding: 16px; background: rgba(var(--rgb-secondary-text-color), 0.05); border-radius: var(--uc-r-8, 8px); text-align: center; color: var(--secondary-text-color); font-style: italic;"
                >
                  ${(0,c.kg)("editor.accordion.open_logic.manual_note",d,"Accordion state is controlled manually by user clicks. Set Default State above to choose initial state.")}
                </div>
              `}
      </div>
    `}_renderOpenCondition(e,t,i,n,a){var r;const d=(null===(r=null==n?void 0:n.locale)||void 0===r?void 0:r.language)||"en",l=o=>{const n=[...i];n[t]=Object.assign(Object.assign({},e),o),a({open_conditions:n})},s=!1!==e.ui_expanded,g=e.custom_name||`Condition ${t+1}`;return o.qy`
      <div
        class="uc-condition-item"
        style="border:1px solid var(--divider-color); border-radius: var(--uc-r-8, 8px); background: var(--uc-pane-bg, var(--card-background-color)); overflow: hidden;"
      >
        <div
          class="uc-condition-header"
          style="display:flex; align-items:center; justify-content: space-between; gap:10px; padding: 12px 14px; border-bottom: ${s?"1px solid var(--divider-color)":"none"};"
        >
          <div style="display:flex; align-items:center; gap:10px; min-width:0;">
            <button
              @click=${()=>l({ui_expanded:!s})}
              title=${s?"Collapse":"Expand"}
              style="background:none; border:none; color:var(--secondary-text-color); cursor:pointer; padding:4px;"
            >
              <ha-icon icon=${s?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
            </button>
            <span
              style="font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;"
              >${g}</span
            >
          </div>
          <div style="display:flex; align-items:center; gap:4px; flex-shrink:0;">
            <button
              @click=${()=>{const o=Object.assign(Object.assign({},e),{id:`cond_${Date.now()}_${Math.random().toString(36).slice(2,7)}`}),n=[...i];n.splice(t+1,0,o),a({open_conditions:n})}}
              style="background:none; border:none; padding:4px; cursor:pointer; color: var(--secondary-text-color);"
              title="Duplicate Condition"
            >
              <ha-icon icon="mdi:content-copy" style="--mdc-icon-size: 18px;"></ha-icon>
            </button>
            <button
              @click=${()=>{const e=i.filter((e,i)=>i!==t);a({open_conditions:e})}}
              style="background:none; border:none; padding:4px; cursor:pointer; color: var(--error-color);"
              title="Remove Condition"
            >
              <ha-icon icon="mdi:trash-can-outline" style="--mdc-icon-size: 18px;"></ha-icon>
            </button>
          </div>
        </div>

        ${s?o.qy`
              <div style="padding: 12px 14px; display:flex; flex-direction:column; gap:12px;">
                ${this.renderFieldSection((0,c.kg)("editor.accordion.open_logic.custom_name",d,"Custom Name"),(0,c.kg)("editor.accordion.open_logic.custom_name_desc",d,"Optional: Give this condition a custom name"),n,{custom_name:e.custom_name||""},[this.textField("custom_name")],e=>l(e.detail.value))}
                ${this.renderFieldSection((0,c.kg)("editor.accordion.open_logic.condition_type",d,"Condition Type"),"",n,{type:e.type||"entity_state"},[this.selectField("type",[{value:"entity_state",label:(0,c.kg)("editor.accordion.open_logic.type_entity_state",d,"Entity State")},{value:"entity_attribute",label:(0,c.kg)("editor.accordion.open_logic.type_entity_attribute",d,"Entity Attribute")},{value:"time",label:(0,c.kg)("editor.accordion.open_logic.type_time",d,"Time Range")},{value:"template",label:(0,c.kg)("editor.accordion.open_logic.type_template",d,"Template")}])],e=>{const t=e.detail.value.type,i={type:t};"entity_state"===t?Object.assign(i,{entity:"",operator:"=",value:""}):"entity_attribute"===t?Object.assign(i,{entity:"",attribute:"",operator:"=",value:""}):"time"===t?Object.assign(i,{time_from:"00:00",time_to:"23:59"}):"template"===t&&Object.assign(i,{template:""}),l(i)})}
                ${(()=>"entity_state"===(e.type||"entity_state")?o.qy`
                      ${this.renderEntityPickerWithVariables(n,void 0,"entity",e.entity||"",e=>l({entity:e}),void 0,(0,c.kg)("editor.accordion.open_logic.entity",d,"Entity"))}
                      ${this.renderFieldSection((0,c.kg)("editor.accordion.open_logic.operator",d,"Operator"),"",n,{operator:e.operator||"="},[this.selectField("operator",[{value:"=",label:"="},{value:"!=",label:"!="},{value:">",label:">"},{value:">=",label:">="},{value:"<",label:"<"},{value:"<=",label:"<="},{value:"contains",label:"Contains"},{value:"not_contains",label:"Not Contains"},{value:"has_value",label:"Has Value"},{value:"no_value",label:"No Value"}])],e=>l(e.detail.value))}
                      ${this.renderFieldSection((0,c.kg)("editor.accordion.open_logic.value",d,"Value"),"",n,{value:e.value||""},[this.textField("value")],e=>l(e.detail.value))}
                    `:"entity_attribute"===e.type?o.qy`
                      ${this.renderEntityPickerWithVariables(n,void 0,"entity",e.entity||"",e=>l({entity:e}),void 0,(0,c.kg)("editor.accordion.open_logic.entity",d,"Entity"))}
                      ${this.renderFieldSection((0,c.kg)("editor.accordion.open_logic.attribute",d,"Attribute"),"",n,{attribute:e.attribute||""},[this.textField("attribute")],e=>l(e.detail.value))}
                      ${this.renderFieldSection((0,c.kg)("editor.accordion.open_logic.operator",d,"Operator"),"",n,{operator:e.operator||"="},[this.selectField("operator",[{value:"=",label:"="},{value:"!=",label:"!="},{value:">",label:">"},{value:">=",label:">="},{value:"<",label:"<"},{value:"<=",label:"<="},{value:"contains",label:"Contains"},{value:"not_contains",label:"Not Contains"}])],e=>l(e.detail.value))}
                      ${this.renderFieldSection((0,c.kg)("editor.accordion.open_logic.value",d,"Value"),"",n,{value:e.value||""},[this.textField("value")],e=>l(e.detail.value))}
                    `:"time"===e.type?o.qy`
                      ${this.renderFieldSection((0,c.kg)("editor.accordion.open_logic.time_from",d,"From"),"",n,{time_from:e.time_from||"00:00"},[this.textField("time_from")],e=>l(e.detail.value))}
                      ${this.renderFieldSection((0,c.kg)("editor.accordion.open_logic.time_to",d,"To"),"",n,{time_to:e.time_to||"23:59"},[this.textField("time_to")],e=>l(e.detail.value))}
                    `:o.qy`
                    <div class="field-container" style="margin-bottom: 16px;">
                      <div
                        class="field-title"
                        style="font-size: 14px; font-weight: 600; margin-bottom: 8px;"
                      >
                        ${(0,c.kg)("editor.accordion.open_logic.template",d,"Template")}
                      </div>
                      <div
                        class="field-description"
                        style="font-size: 12px; margin-bottom: 8px; color: var(--secondary-text-color);"
                      >
                        ${(0,c.kg)("editor.accordion.open_logic.template_desc",d,"Jinja2 template that should evaluate to true/false to open the accordion.")}
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
    `}_syncOutsideClickListener(e,t,i){const o=this.outsideClickCleanups.get(e);if(!i)return void(o&&(o(),this.outsideClickCleanups.delete(e)));if(o)return;const n=i=>{i.composedPath().some(e=>{var i;return e instanceof Element&&(null===(i=e.classList)||void 0===i?void 0:i.contains(t))})||(document.removeEventListener("pointerdown",n,!0),this.outsideClickCleanups.delete(e),this.accordionStates.get(e)&&(this.accordionStates.set(e,!1),this.triggerPreviewUpdate(!0)))};document.addEventListener("pointerdown",n,!0),this.outsideClickCleanups.set(e,()=>document.removeEventListener("pointerdown",n,!0))}renderPreview(e,t,i,n){var a,d,l,s,g,u,p,_;const v=e,h=v,m=h.design||{},b=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",y=this.buildStyleString(this.buildDesignStyles(e,t)),x=this.getHoverEffectClass(e),w=v.open_mode||"manual";let k=null;"always"===w?k=!0:"every"!==w&&"any"!==w||(r.S.setHass(t),k=r.S.evaluateDisplayConditions(v.open_conditions||[],w));const f=v.default_open||!1,$=this.accordionInitConfigs.get(v.id);if(!$||$.defaultOpen===f&&$.openMode===w||(this.accordionStates.delete(v.id),this.accordionLogicStates.delete(v.id)),this.accordionInitConfigs.set(v.id,{defaultOpen:f,openMode:w}),this.accordionStates.has(v.id))null!==k&&this.accordionLogicStates.get(v.id)!==k&&this.accordionStates.set(v.id,k);else{const e=null!==k?k:f;this.accordionStates.set(v.id,e)}this.accordionLogicStates.set(v.id,k);const C=this.accordionStates.get(v.id)||!1,S="overlay"===(v.expand_style||"push"),O=v.expand_direction||"down",P="up"===O||"auto"===O&&"up"===this.accordionResolvedDirections.get(v.id);let j="";if("entity"===v.title_mode&&v.title_entity){const e=this.resolveEntity(v.title_entity,i)||v.title_entity,o=null==t?void 0:t.states[e],n=(null===(d=null==o?void 0:o.attributes)||void 0===d?void 0:d.friendly_name)||e.split(".")[1]||e,a=(null==o?void 0:o.state)||e;j=v.show_entity_name?`${n}: ${a}`:a}else j=v.title_text||(0,c.kg)("editor.accordion.preview.title_fallback",b,"Accordion Title");const F=v.icon||"mdi:chevron-down",z=v.header_alignment||"apart",T=v.icon_side||"right";let U="space-between",E=1,B=2;"center"===z?(U="center","left"===T?(E=2,B=1):(E=1,B=2)):(U="space-between","left"===T?(E=2,B=1):(E=1,B=2));const D=null!==(l=m.container_border_width)&&void 0!==l?l:1,A=m.container_border_color||"var(--divider-color)",q=null!==(s=m.container_border_radius)&&void 0!==s?s:8,L=m.container_background_color||"var(--uc-pane-bg, var(--card-background-color))",H={border:`${D}px solid ${A}`,borderRadius:`${q}px`,overflow:S?"visible":"hidden",position:"relative",display:"flex",flexDirection:!S&&P?"column-reverse":"column",background:L,boxShadow:m.container_shadow||"none"},M=null!==(g=m.header_padding)&&void 0!==g?g:12,I=null!==(u=m.header_border_width)&&void 0!==u?u:1,V=m.header_border_color||"var(--divider-color)",R={display:"flex",alignItems:"center",justifyContent:U,padding:`${M}px 16px`,cursor:"pointer",background:m.header_background_color||"var(--uc-pane-bg, var(--card-background-color))",color:m.header_text_color||"var(--primary-text-color)",fontSize:m.header_font_size?`${m.header_font_size}px`:"16px",fontWeight:m.header_font_weight||"normal",transition:"background 0.2s",userSelect:"none",gap:"center"===z?"8px":"0"};R[!S&&P?"borderTop":"borderBottom"]=`${I}px solid ${V}`;const W=null!==(p=m.content_border_width)&&void 0!==p?p:0,N=m.content_border_color||"transparent",G=m.content_background_color||"transparent",J={maxHeight:C?"10000px":"0",overflow:C?"visible":"hidden",transition:"max-height 0.3s ease-in-out, padding 0.3s ease-in-out",background:G,padding:C?`${m.content_padding||16}px`:"0",borderTop:W>0?`${W}px solid ${N}`:"none"};S&&Object.assign(J,{position:"absolute",left:"0",right:"0",[P?"bottom":"top"]:"100%",[P?"marginBottom":"marginTop"]:"4px",zIndex:"1000",background:"transparent"!==G?G:L,borderRadius:`${q}px`,border:C?`${D}px solid ${A}`:"none",boxShadow:C?m.container_shadow||"0 4px 16px rgba(0, 0, 0, 0.25)":"none"});const Y=null!==(_=m.icon_size)&&void 0!==_?_:24,Z={transform:C?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease",order:B,flexShrink:0,color:m.icon_color||"inherit"},K={order:E,flexShrink:"apart"===z?1:0,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},Q=m.header_hover_color||"rgba(var(--rgb-primary-color), 0.1)",X=this.createGestureHandlers(v.id,{tap_action:v.tap_action,hold_action:v.hold_action,double_tap_action:v.double_tap_action,entity:v.entity,module:v},t,i),ee=e=>!!e&&"nothing"!==e.action&&"default"!==e.action,te=ee(v.tap_action)||ee(v.hold_action)||ee(v.double_tap_action),ie=e=>e.stopPropagation(),oe=e=>{var t;e.stopPropagation();const i=this.accordionStates.get(v.id)||!1;if(!i&&"auto"===O){const i=e.currentTarget,o=null===(t=null==i?void 0:i.getBoundingClientRect)||void 0===t?void 0:t.call(i),n="undefined"!=typeof window?window.innerHeight:0;this.accordionResolvedDirections.set(v.id,o&&n&&o.top+o.height/2>n/2?"up":"down")}this.accordionStates.set(v.id,!i),this.triggerPreviewUpdate(!0)},ne=v.modules&&v.modules.length>0,ae=`accordion-${v.id.replace(/[^a-zA-Z0-9]/g,"")}`;return this._syncOutsideClickListener(v.id,ae,C&&!!v.close_on_outside_click),this.wrapWithAnimation(o.qy`
      <style>
        .${ae} .ultra-accordion-header:hover {
          background: ${Q} !important;
        }
      </style>
      <div
        class="ultra-accordion-container ${x} ${ae}"
        data-uc-role="pane"
        style="${this.buildStyleString(H)}; ${y}${te?"; cursor: pointer":""}"
        @pointerdown=${te?X.onPointerDown:null}
        @pointermove=${te?X.onPointerMove:null}
        @pointerup=${te?X.onPointerUp:null}
        @pointercancel=${te?X.onPointerCancel:null}
        @pointerleave=${te?X.onPointerLeave:null}
      >
        <!-- Accordion Header -->
        <div
          class="ultra-accordion-header"
          style="${this.buildStyleString(R)}"
          role="button"
          tabindex="0"
          aria-expanded="${C}"
          aria-label="${j}${C?", expanded":", collapsed"}"
          @pointerdown=${te?ie:null}
          @pointerup=${te?ie:null}
          @click=${oe}
          @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),oe(e))}}
        >
          <!-- Title -->
          <span class="ultra-accordion-title" style="${this.buildStyleString(K)}"
            >${j}</span
          >

          <!-- Control Icon (Chevron) -->
          <ha-icon
            icon="${F}"
            style="${this.buildStyleString(Z)}; --mdc-icon-size: ${Y}px;"
          ></ha-icon>
        </div>

        <!-- Accordion Content -->
        <div class="ultra-accordion-content" style="${this.buildStyleString(J)}">
          ${C&&ne?v.modules.map(e=>this._renderAccordionChild(e,t,h,i,n)):C&&!ne?o.qy`
                  <div
                    style="padding: 24px; text-align: center; color: var(--secondary-text-color); font-style: italic;"
                  >
                    ${(0,c.kg)("editor.accordion.preview.no_modules",b,"No modules added. Add modules to this accordion in the Layout tab.")}
                  </div>
                `:""}
        </div>
      </div>
    `,e,t)}_renderAccordionChild(e,t,i,n,c){var g,u,p,_,v,h,m,b,y,x,w,k,f,$,C,S,O,P,j,F;const z=(0,a.oD)().getModule(e.type);if(!z)return l.E.renderModuleLoadingState(e);const T=this.applyLayoutDesignToChild(e,i);r.S.setHass(t);const U=T,E=r.S.evaluateModuleVisibility(T),B=r.S.evaluateLogicProperties({logic_entity:null===(g=null==U?void 0:U.design)||void 0===g?void 0:g.logic_entity,logic_attribute:null===(u=null==U?void 0:U.design)||void 0===u?void 0:u.logic_attribute,logic_operator:null===(p=null==U?void 0:U.design)||void 0===p?void 0:p.logic_operator,logic_value:null===(_=null==U?void 0:U.design)||void 0===_?void 0:_.logic_value});if(!E||!B)return o.qy``;const D=(null===(h=null===(v=z.metadata)||void 0===v?void 0:v.tags)||void 0===h?void 0:h.includes("pro"))||(null===(b=null===(m=z.metadata)||void 0===m?void 0:m.tags)||void 0===b?void 0:b.includes("premium"))||!1;let A=!1;const q=d.xd.checkIntegrationAuth(t);if("pro"===(null===(y=null==q?void 0:q.subscription)||void 0===y?void 0:y.tier)&&"active"===(null===(x=null==q?void 0:q.subscription)||void 0===x?void 0:x.status))A=!0;else if(d.xd.isAuthenticated()){const e=d.xd.getCurrentUser();"pro"===(null===(w=null==e?void 0:e.subscription)||void 0===w?void 0:w.tier)&&"active"===(null===(k=null==e?void 0:e.subscription)||void 0===k?void 0:k.status)&&(A=!0)}if(D&&!A)return o.qy`
        <div
          style="padding: 16px; text-align: center; color: var(--secondary-text-color); font-style: italic; background: rgba(var(--rgb-warning-color), 0.1); border: 1px dashed var(--warning-color); border-radius: var(--uc-r-8, 8px); margin: 8px 0;"
        >
          🔒 ${z.metadata.title} - Pro Feature
        </div>
      `;const L=o.qy`
      <div class="accordion-child-module" style="margin-bottom: 8px;">
        ${z.renderPreview((0,s.l8)(T),t,n,c)}
      </div>
    `,H=T,M=H.animation_type||(null===(f=H.design)||void 0===f?void 0:f.animation_type);if(M&&"none"!==M){const e=H.animation_duration||(null===($=H.design)||void 0===$?void 0:$.animation_duration)||"2s",i=H.animation_delay||(null===(C=H.design)||void 0===C?void 0:C.animation_delay)||"0s",n=H.animation_timing||(null===(S=H.design)||void 0===S?void 0:S.animation_timing)||"ease",a=H.animation_entity||(null===(O=H.design)||void 0===O?void 0:O.animation_entity),r=H.animation_trigger_type||(null===(P=H.design)||void 0===P?void 0:P.animation_trigger_type)||"state",d=H.animation_attribute||(null===(j=H.design)||void 0===j?void 0:j.animation_attribute),l=H.animation_state||(null===(F=H.design)||void 0===F?void 0:F.animation_state);let c=!1;if(a){if(l&&t&&t.states[a]){const e=t.states[a];c="attribute"===r&&d?String(e.attributes[d])===l:e.state===l}}else c=!0;if(c)return o.qy`
          <div
            class="module-animation-wrapper animation-${M}"
            style="
              --animation-duration: ${e};
              --animation-delay: ${i};
              --animation-timing: ${n};
            "
          >
            ${L}
          </div>
        `}return L}applyLayoutDesignToChild(e,t){const i=Object.assign({},e),o=e.design||{};return void 0!==o.margin_top||void 0!==o.margin_bottom||void 0!==o.margin_left||void 0!==o.margin_right||void 0!==e.margin_top||void 0!==e.margin_bottom||void 0!==e.margin_left||void 0!==e.margin_right||(i.margin_top="0",i.margin_bottom="0",i.margin_left="0",i.margin_right="0"),t.color&&(i.color=t.color),t.font_size&&(i.font_size=t.font_size),t.font_family&&(i.font_family=t.font_family),t.font_weight&&(i.font_weight=t.font_weight),t.text_align&&(i.text_align=t.text_align),t.line_height&&(i.line_height=t.line_height),t.letter_spacing&&(i.letter_spacing=t.letter_spacing),t.text_transform&&(i.text_transform=t.text_transform),t.font_style&&(i.font_style=t.font_style),t.white_space&&(i.white_space=t.white_space),t.text_shadow_h&&(i.text_shadow_h=t.text_shadow_h),t.text_shadow_v&&(i.text_shadow_v=t.text_shadow_v),t.text_shadow_blur&&(i.text_shadow_blur=t.text_shadow_blur),t.text_shadow_color&&(i.text_shadow_color=t.text_shadow_color),t.box_shadow_h&&(i.box_shadow_h=t.box_shadow_h),t.box_shadow_v&&(i.box_shadow_v=t.box_shadow_v),t.box_shadow_blur&&(i.box_shadow_blur=t.box_shadow_blur),t.box_shadow_spread&&(i.box_shadow_spread=t.box_shadow_spread),t.box_shadow_color&&(i.box_shadow_color=t.box_shadow_color),t.animation_type&&(i.animation_type=t.animation_type),t.animation_entity&&(i.animation_entity=t.animation_entity),t.animation_trigger_type&&(i.animation_trigger_type=t.animation_trigger_type),t.animation_attribute&&(i.animation_attribute=t.animation_attribute),t.animation_state&&(i.animation_state=t.animation_state),t.intro_animation&&(i.intro_animation=t.intro_animation),t.outro_animation&&(i.outro_animation=t.outro_animation),t.animation_duration&&(i.animation_duration=t.animation_duration),t.animation_delay&&(i.animation_delay=t.animation_delay),t.animation_timing&&(i.animation_timing=t.animation_timing),i}validate(e){var t,i;const o=e,n=[...super.validate(e).errors];return o.modules||n.push("Modules array is required"),"custom"!==o.title_mode||(null===(t=o.title_text)||void 0===t?void 0:t.trim())||n.push("Title text is required when using custom title mode"),"entity"!==o.title_mode||(null===(i=o.title_entity)||void 0===i?void 0:i.trim())||n.push("Title entity is required when using entity title mode"),{valid:0===n.length,errors:n}}getStyles(){return`\n      ${n.m.getSliderStyles()}\n    `}}}};