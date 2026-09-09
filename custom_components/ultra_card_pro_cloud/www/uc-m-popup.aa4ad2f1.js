export const __webpack_esm_ids__=[2141];export const __webpack_esm_modules__={6086(e,t,o){o.d(t,{UltraPopupModule:()=>F});var i=o(2618),r=o(6781),n=o(31),a=o(7475),l=o(8414),s=o(230),d=o(378),p=o(2034),g=o(6478),u=o(1001),c=o(7907),_=o(6461),m=(o(7921),o(5064)),v=o(6831),h=o(4830);const y="__ultraPopupStore__",{portals:b,states:f,timers:x,logicStates:k,manuallyOpened:$,timerEnabled:w,needsRefresh:S,lastRenderedHassRef:T}=(()=>{const e=window;return e[y]||(e[y]={portals:new Map,states:new Map,timers:new Map,logicStates:new Map,manuallyOpened:new Set,timerEnabled:new Map,needsRefresh:new Map,lastRenderedHassRef:new Map}),e[y]})(),C=new Map,I=e=>{const t=e._ultraKeydownHandler;t&&(document.removeEventListener("keydown",t),delete e._ultraKeydownHandler);const o=e._ultraPrevFocus;if(delete e._ultraPrevFocus,o&&o.isConnected&&"function"==typeof o.focus)try{o.focus()}catch(e){}},P=()=>{document.querySelectorAll("[data-ultra-popup-original-z-index]").forEach(e=>{const t=e,o=t.dataset.ultraPopupOriginalZIndex||"";t.style.zIndex=o||"",t.style.pointerEvents="",delete t.dataset.ultraPopupOriginalZIndex})};class F extends a.m{constructor(){super(...arguments),this.metadata={type:"popup",title:"Popup",description:"Modal popup container with customizable trigger and content",author:"WJD Designs",version:"1.0.0",icon:"mdi:window-maximize",category:"layout",tags:["layout","popup","modal","overlay","container"]}}closePortalsForModule(e){(e=>{if(!e)return;const t=[];b.forEach((o,i)=>{(i===e||i.endsWith(`:${e}`))&&t.push(i)});for(const e of t){const t=b.get(e);if(t){const o=t._ultraInertObserver;o&&o.disconnect(),I(t),t.remove(),b.delete(e)}f.set(e,!1),$.delete(e),S.delete(e),T.delete(e),C.delete(e);const o=x.get(e);void 0!==o&&(window.clearTimeout(o),x.delete(e))}t.length>0&&P()})(e)}createDefault(e,t){return{id:e||this.generateId("popup"),type:"popup",modules:[],show_title:!1,title_mode:"custom",title_text:"Popup Title",title_entity:"",show_entity_name:!1,trigger_type:"button",trigger_module_id:"",trigger_button_text:"Open Popup",trigger_button_icon:"",trigger_image_type:"url",trigger_image_url:"",trigger_image_entity:"",trigger_icon:"mdi:information",trigger_alignment:"center",trigger_button_full_width:!1,trigger_image_full_width:!1,trigger_icon_size:24,trigger_icon_color:"",trigger_button_style:"theme",trigger_button_background_color:"var(--primary-color)",trigger_button_text_color:"white",trigger_button_icon_position:"before",trigger_button_icon_size:"24px",trigger_button_use_entity_color:!1,trigger_button_color_entity:"",trigger_button_state_colors:{},layout:"default",animation:"fade",popup_width:"600px",popup_padding:"5%",popup_border_radius:"8px",close_button_position:"inside",close_button_color:"#ffffff",close_button_size:32,close_button_icon:"mdi:close",close_button_offset_x:"0px",close_button_offset_y:"0px",auto_close_timer_enabled:!1,auto_close_timer_seconds:30,title_background_color:"var(--primary-color)",title_text_color:"#ffffff",popup_background_color:"var(--card-background-color)",popup_text_color:"var(--primary-text-color)",show_overlay:!0,overlay_background:"rgba(0,0,0,0.85)",trigger_mode:"manual",trigger_conditions:[],auto_close:!0,default_open:!1,display_mode:"always",display_conditions:[]}}renderDesignTab(e,t,o,r){var n;const a=e,l=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}
      <style>
        .design-subsection {
          background: rgba(var(--rgb-primary-color), 0.05);
          border-left: 3px solid var(--primary-color);
          padding: 16px;
          margin-bottom: 24px;
          border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;
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

      <div class="module-design-settings">
        <!-- Trigger Styling Section - controls are in the General tab -->

        <!-- Title Styling Section -->
        ${a.show_title?i.qy`
              <div class="design-subsection">
                <div class="subsection-title">
                  ${(0,g.kg)("editor.popup.design.title",l,"Title Styling")}
                </div>
                <div
                  style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                >
                  ${(0,g.kg)("editor.popup.design.title_desc",l,"Customize the appearance of the popup title bar.")}
                </div>

                <!-- Title Background Color -->
                <div style="margin-bottom: 16px;">
                  <ultra-color-picker
                    .label=${(0,g.kg)("editor.popup.design.title_bg",l,"Title Background")}
                    .value=${a.title_background_color||""}
                    .defaultValue=${"var(--primary-color)"}
                    .hass=${t}
                    @value-changed=${e=>{const t=e.detail.value;r({title_background_color:t}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>

                <!-- Title Text Color -->
                <div style="margin-bottom: 16px;">
                  <ultra-color-picker
                    .label=${(0,g.kg)("editor.popup.design.title_text",l,"Title Text")}
                    .value=${a.title_text_color||""}
                    .defaultValue=${"#ffffff"}
                    .hass=${t}
                    @value-changed=${e=>{const t=e.detail.value;r({title_text_color:t}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              </div>
            `:""}

        <!-- Popup Content Styling Section -->
        <div class="design-subsection">
          <div class="subsection-title">
            ${(0,g.kg)("editor.popup.design.content",l,"Popup Content Styling")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,g.kg)("editor.popup.design.content_desc",l,"Customize the appearance of the popup content area.")}
          </div>

          <!-- Popup Background Color -->
          <div style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,g.kg)("editor.popup.design.popup_bg",l,"Popup Background")}
              .value=${a.popup_background_color||""}
              .defaultValue=${"var(--card-background-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=e.detail.value;r({popup_background_color:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>

          <!-- Popup Text Color -->
          <div style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,g.kg)("editor.popup.design.popup_text",l,"Popup Text")}
              .value=${a.popup_text_color||""}
              .defaultValue=${"var(--primary-text-color)"}
              .hass=${t}
              @value-changed=${e=>{const t=e.detail.value;r({popup_text_color:t}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>
        </div>

        <!-- Overlay Styling Section (only shown when overlay is enabled) -->
        ${!1!==a.show_overlay?i.qy`
              <div class="design-subsection">
                <div class="subsection-title">
                  ${(0,g.kg)("editor.popup.design.overlay",l,"Background Overlay")}
                </div>
                <div
                  style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                >
                  ${(0,g.kg)("editor.popup.design.overlay_desc",l,"Customize the backdrop behind the popup.")}
                </div>

                <!-- Overlay Background Color -->
                <div style="margin-bottom: 16px;">
                  <ultra-color-picker
                    .label=${(0,g.kg)("editor.popup.design.overlay_bg",l,"Background Overlay")}
                    .value=${a.overlay_background||""}
                    .defaultValue=${"rgba(0,0,0,0.85)"}
                    .hass=${t}
                    @value-changed=${e=>{const t=e.detail.value;r({overlay_background:t}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              </div>
            `:""}

        <!-- Close Button Styling Section -->
        ${"none"!==a.close_button_position?i.qy`
              <div class="design-subsection">
                <div class="subsection-title">
                  ${(0,g.kg)("editor.popup.design.close_button",l,"Close Button Styling")}
                </div>
                <div
                  style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                >
                  ${(0,g.kg)("editor.popup.design.close_button_desc",l,"Customize the appearance of the close button.")}
                </div>

                <!-- Close Button Color -->
                <div style="margin-bottom: 16px;">
                  <ultra-color-picker
                    .label=${(0,g.kg)("editor.popup.design.close_button_color",l,"Close Button")}
                    .value=${a.close_button_color||""}
                    .defaultValue=${"#ffffff"}
                    .hass=${t}
                    @value-changed=${e=>{const t=e.detail.value;r({close_button_color:t}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>

                <!-- Close Button Size -->
                ${this.renderSliderField((0,g.kg)("editor.popup.design.close_button_size",l,"Close Button Size"),(0,g.kg)("editor.popup.design.close_button_size_desc",l,"Size of the close button icon (in pixels)."),a.close_button_size||32,32,16,64,1,e=>r({close_button_size:e}))}

                <!-- Close Button Icon -->
                ${this.renderFieldSection((0,g.kg)("editor.popup.design.close_button_icon",l,"Close Button Icon"),(0,g.kg)("editor.popup.design.close_button_icon_desc",l,"Icon to display on the close button."),t,{close_button_icon:a.close_button_icon||"mdi:close"},[this.iconField("close_button_icon")],e=>{r({close_button_icon:e.detail.value.close_button_icon}),setTimeout(()=>{this.triggerPreviewUpdate()},50)})}

                <!-- Close Button Offset X -->
                ${this.renderFieldSection((0,g.kg)("editor.popup.design.close_button_offset_x",l,"Horizontal Offset"),(0,g.kg)("editor.popup.design.close_button_offset_x_desc",l,"Horizontal position adjustment (e.g., 10px, 1rem)."),t,{close_button_offset_x:a.close_button_offset_x||"0px"},[this.textField("close_button_offset_x")],e=>{r({close_button_offset_x:e.detail.value.close_button_offset_x})})}

                <!-- Close Button Offset Y -->
                ${this.renderFieldSection((0,g.kg)("editor.popup.design.close_button_offset_y",l,"Vertical Offset"),(0,g.kg)("editor.popup.design.close_button_offset_y_desc",l,"Vertical position adjustment (e.g., 10px, 1rem)."),t,{close_button_offset_y:a.close_button_offset_y||"0px"},[this.textField("close_button_offset_y")],e=>{r({close_button_offset_y:e.detail.value.close_button_offset_y})})}
              </div>
            `:""}

        <!-- Standard Design Tab Content (from GlobalDesignTab) -->
        <div style="margin-top: 24px;">
          <div
            style="font-size: 14px; font-weight: 600; color: var(--secondary-text-color); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;"
          >
            ${(0,g.kg)("editor.popup.design.general_title",l,"General Trigger Design")}
          </div>
          ${super.renderDesignTab(e,t,o,r)}
        </div>
      </div>
    `}renderGeneralTab(e,t,o,r){var n,a,l;const s=e,d=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",p=this._isOpenedViaNavigation(s.id,o);return i.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- Trigger Configuration Section -->
        ${p?i.qy`
              <div
                class="settings-section"
                style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
              >
                <div
                  class="section-title"
                  style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
                >
                  ${(0,g.kg)("editor.popup.trigger.section_title",d,"Trigger Configuration")}
                </div>
                <div
                  style="display: flex; align-items: center; gap: 12px; background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.1); border: 1px solid rgba(var(--rgb-primary-color, 33, 150, 243), 0.3); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-top: 8px;"
                >
                  <ha-icon
                    icon="mdi:navigation-variant"
                    style="color: var(--primary-color); flex-shrink: 0; --mdc-icon-size: 24px;"
                  ></ha-icon>
                  <div style="flex: 1;">
                    <div style="font-weight: 600; font-size: 14px; color: var(--primary-text-color); margin-bottom: 4px;">
                      Opened via Navigation
                    </div>
                    <div style="font-size: 13px; color: var(--secondary-text-color); line-height: 1.4;">
                      This popup is configured to open from <strong>${p}</strong>. The trigger
                      type is managed by the navigation module and cannot be changed here.
                    </div>
                  </div>
                </div>
              </div>
            `:this.renderSettingsSection((0,g.kg)("editor.popup.trigger.section_title",d,"Trigger Configuration"),(0,g.kg)("editor.popup.trigger.section_desc",d,"Configure how the popup is triggered to open."),[{title:(0,g.kg)("editor.popup.trigger.type",d,"Trigger Type"),description:(0,g.kg)("editor.popup.trigger.type_desc",d,"Choose how the popup will be opened."),hass:t,data:{trigger_type:s.trigger_type||"button"},schema:[this.selectField("trigger_type",[{value:"button",label:(0,g.kg)("editor.popup.trigger.button",d,"Button")},{value:"image",label:(0,g.kg)("editor.popup.trigger.image",d,"Image")},{value:"icon",label:(0,g.kg)("editor.popup.trigger.icon",d,"Icon")},{value:"module",label:(0,g.kg)("editor.popup.trigger.module",d,"Module")},{value:"page_load",label:(0,g.kg)("editor.popup.trigger.page_load",d,"Page Load")},{value:"logic",label:(0,g.kg)("editor.popup.trigger.logic",d,"Logic Conditions")}])],onChange:e=>{e.detail.value.trigger_type!==(s.trigger_type||"button")&&(r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}

        <!-- Trigger sub-options: hidden when opened via navigation -->
        ${p?"":i.qy`
              <!-- Conditional: Button Trigger -->
              ${"button"===s.trigger_type?i.qy`
                    <div style="margin-top: -16px; margin-bottom: 32px;">
                      ${this.renderConditionalFieldsGroup((0,g.kg)("editor.popup.trigger.button",d,"Button"),i.qy`
                          ${this.renderFieldSection((0,g.kg)("editor.popup.trigger.button_text",d,"Button Text"),(0,g.kg)("editor.popup.trigger.button_text_desc",d,"Text to display on the trigger button."),t,{trigger_button_text:s.trigger_button_text||""},[this.textField("trigger_button_text")],e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)})}
                          ${this.renderFieldSection((0,g.kg)("editor.popup.trigger.button_icon",d,"Button Icon"),(0,g.kg)("editor.popup.trigger.button_icon_desc",d,"Icon to display on the trigger button."),t,{trigger_button_icon:s.trigger_button_icon||""},[this.iconField("trigger_button_icon")],e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)})}
                          ${this.renderSettingsSection("","",[{title:(0,g.kg)("editor.popup.trigger.button_full_width",d,"Full Width"),description:(0,g.kg)("editor.popup.trigger.button_full_width_desc",d,"Make the button span the full width of the container."),hass:t,data:{trigger_button_full_width:s.trigger_button_full_width||!1},schema:[this.booleanField("trigger_button_full_width")],onChange:e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}
                        `)}
                    </div>

                    <!-- Button Styling -->
                    <div style="margin-top: -16px; margin-bottom: 32px;">
                      ${this.renderConditionalFieldsGroup((0,g.kg)("editor.popup.design.trigger_button",d,"Trigger Button Styling"),i.qy`
                          <!-- Button Style -->
                          ${this.renderFieldSection((0,g.kg)("editor.button.style.title",d,"Button Style"),(0,g.kg)("editor.button.style.desc",d,"Visual style of the button"),t,{trigger_button_style:s.trigger_button_style||"theme"},[this.selectField("trigger_button_style",this.withThemeInheritOption(d,o,"popup","trigger_button_style","flat",[{value:"flat",label:(0,g.kg)("editor.button.styles.flat",d,"Flat (Default)")},{value:"glossy",label:(0,g.kg)("editor.button.styles.glossy",d,"Glossy")},{value:"embossed",label:(0,g.kg)("editor.button.styles.embossed",d,"Embossed")},{value:"inset",label:(0,g.kg)("editor.button.styles.inset",d,"Inset")},{value:"gradient-overlay",label:(0,g.kg)("editor.button.styles.gradient_overlay",d,"Gradient Overlay")},{value:"neon-glow",label:(0,g.kg)("editor.button.styles.neon_glow",d,"Neon Glow")},{value:"outline",label:(0,g.kg)("editor.button.styles.outline",d,"Outline")},{value:"glass",label:(0,g.kg)("editor.button.styles.glass",d,"Glass")},{value:"metallic",label:(0,g.kg)("editor.button.styles.metallic",d,"Metallic")},{value:"neumorphic",label:(0,g.kg)("editor.button.styles.neumorphic",d,"Neumorphic")}]))],e=>{e.detail.value.trigger_button_style!==(s.trigger_button_style||"theme")&&(r(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))})}

                          <!-- Icon Position & Size (only when icon is set) -->
                          ${s.trigger_button_icon?i.qy`
                                <div style="margin-top: 16px;">
                                  ${this.renderFieldSection((0,g.kg)("editor.button.icon_position",d,"Icon Position"),(0,g.kg)("editor.button.icon_position_desc",d,"Position of the icon relative to text"),t,{trigger_button_icon_position:s.trigger_button_icon_position||"before"},[this.selectField("trigger_button_icon_position",[{value:"before",label:(0,g.kg)("editor.button.icon.before",d,"Before Text")},{value:"after",label:(0,g.kg)("editor.button.icon.after",d,"After Text")}])],e=>{r(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                                </div>
                                <div style="margin-top: 16px;">
                                  ${this.renderSliderField((0,g.kg)("editor.button.icon_size",d,"Icon Size"),(0,g.kg)("editor.button.icon_size_desc",d,"Size of the icon in pixels"),parseInt(String(s.trigger_button_icon_size||"24").replace("px",""))||24,24,12,64,1,e=>{r({trigger_button_icon_size:`${e}px`}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                                </div>
                              `:""}

                          <!-- Colors Section -->
                          <div style="margin-top: 16px;">
                            ${this.renderSettingsSection((0,g.kg)("editor.button.colors.title",d,"Colors"),"",[{title:(0,g.kg)("editor.button.use_entity_color",d,"Use Entity Color"),description:(0,g.kg)("editor.button.use_entity_color_desc",d,"Change button background color based on entity state"),hass:t,data:{trigger_button_use_entity_color:s.trigger_button_use_entity_color||!1},schema:[this.booleanField("trigger_button_use_entity_color")],onChange:e=>{const t=e.detail.value.trigger_button_use_entity_color;r({trigger_button_use_entity_color:t,trigger_button_color_entity:t?s.trigger_button_color_entity:""}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
                          </div>

                          ${s.trigger_button_use_entity_color?i.qy`
                                <div style="margin-top: 16px;">
                                  ${this.renderEntityPickerWithVariables(t,o,"trigger_button_color_entity",s.trigger_button_color_entity||"",e=>{r({trigger_button_color_entity:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},void 0,(0,g.kg)("editor.button.background_color_entity",d,"Entity"))}
                                </div>
                                <div style="margin-top: 16px;">
                                  <div class="field-title" style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 8px;">
                                    ${(0,g.kg)("editor.button.state_colors",d,"State Colors")}
                                  </div>
                                  <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);">
                                    ${(0,g.kg)("editor.button.state_colors_desc",d,"Optional: Map specific entity states to colors (e.g., on: green, off: gray). If not set, will use entity RGB color or state-based defaults.")}
                                  </div>
                                  ${this._renderTriggerStateColorsEditor(s.trigger_button_state_colors||{},t,d,e=>{r({trigger_button_state_colors:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                                </div>
                              `:i.qy`
                                <div style="margin-top: 16px;">
                                  <ultra-color-picker
                                    .label=${(0,g.kg)("editor.button.colors.background",d,"Background Color")}
                                    .value=${s.trigger_button_background_color||"var(--primary-color)"}
                                    .defaultValue=${"var(--primary-color)"}
                                    .hass=${t}
                                    @value-changed=${e=>{r({trigger_button_background_color:e.detail.value}),this.triggerPreviewUpdate()}}
                                  ></ultra-color-picker>
                                </div>
                              `}

                          <div style="margin-top: 16px;">
                            <ultra-color-picker
                              .label=${(0,g.kg)("editor.button.colors.text",d,"Text Color")}
                              .value=${s.trigger_button_text_color||"white"}
                              .defaultValue=${"white"}
                              .hass=${t}
                              @value-changed=${e=>{r({trigger_button_text_color:e.detail.value}),this.triggerPreviewUpdate()}}
                            ></ultra-color-picker>
                          </div>
                        `)}
                    </div>
                  `:""}

              <!-- Conditional: Image Trigger -->
              ${"image"===s.trigger_type?i.qy`
                    <div style="margin-top: -16px; margin-bottom: 32px;">
                      ${this.renderConditionalFieldsGroup((0,g.kg)("editor.popup.trigger.image",d,"Image"),i.qy`
                          ${this.renderSettingsSection("","",[{title:(0,g.kg)("editor.popup.trigger.image_type",d,"Image Type"),description:(0,g.kg)("editor.popup.trigger.image_type_desc",d,"Choose how to provide the image for the trigger."),hass:t,data:{trigger_image_type:s.trigger_image_type||"url"},schema:[this.selectField("trigger_image_type",[{value:"upload",label:(0,g.kg)("editor.design.bg_upload",d,"Upload Image")},{value:"entity",label:(0,g.kg)("editor.design.bg_entity",d,"Entity Image")},{value:"url",label:(0,g.kg)("editor.design.bg_url",d,"Image URL")}])],onChange:e=>{e.detail.value.trigger_image_type!==(s.trigger_image_type||"url")&&(r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}
                          ${"upload"===s.trigger_image_type?this.renderFileField((0,g.kg)("editor.design.upload_bg_image",d,"Upload Image"),"",t,s.trigger_image_url||"",e=>{r(e?{trigger_image_url:e,trigger_image_type:"upload"}:{trigger_image_url:""}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"image/*"):""}
                          ${"entity"===s.trigger_image_type?i.qy`
                                ${this.renderEntityPickerWithVariables(t,o,"trigger_image_entity",s.trigger_image_entity||"",e=>{r({trigger_image_entity:e}),setTimeout(()=>{this.triggerPreviewUpdate()},50)},void 0,(0,g.kg)("editor.design.bg_image_entity",d,"Image Entity"))}
                              `:""}
                          ${"url"===s.trigger_image_type?i.qy`
                                ${this.renderFieldSection((0,g.kg)("editor.popup.trigger.image_url",d,"Image URL"),(0,g.kg)("editor.popup.trigger.image_url_desc",d,"URL of the image to use as the trigger."),t,{trigger_image_url:s.trigger_image_url||""},[this.textField("trigger_image_url")],e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)})}
                              `:""}
                          ${this.renderSettingsSection("","",[{title:(0,g.kg)("editor.popup.trigger.image_full_width",d,"Full Width"),description:(0,g.kg)("editor.popup.trigger.image_full_width_desc",d,"Make the image span the full width of the container."),hass:t,data:{trigger_image_full_width:s.trigger_image_full_width||!1},schema:[this.booleanField("trigger_image_full_width")],onChange:e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}
                        `)}
                    </div>
                  `:""}

              <!-- Conditional: Icon Trigger -->
              ${"icon"===s.trigger_type?i.qy`
                    <div style="margin-top: -16px; margin-bottom: 32px;">
                      ${this.renderConditionalFieldsGroup((0,g.kg)("editor.popup.trigger.icon",d,"Icon"),i.qy`
                          ${this.renderFieldSection((0,g.kg)("editor.popup.trigger.icon",d,"Trigger Icon"),(0,g.kg)("editor.popup.trigger.icon_desc",d,"Icon to display as the trigger."),t,{trigger_icon:s.trigger_icon||""},[this.iconField("trigger_icon")],e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)})}

                          <!-- Trigger Icon Size -->
                          ${this.renderSliderField((0,g.kg)("editor.popup.trigger.icon_size",d,"Trigger Icon Size"),(0,g.kg)("editor.popup.trigger.icon_size_desc",d,"Size of the trigger icon in pixels."),s.trigger_icon_size||24,24,10,100,1,e=>r({trigger_icon_size:e}))}

                          <!-- Trigger Icon Color -->
                          ${this.renderFieldSection((0,g.kg)("editor.popup.trigger.icon_use_entity_color",d,"Use Entity Color"),(0,g.kg)("editor.popup.trigger.icon_use_entity_color_desc",d,"Color the icon from an entity state instead of a fixed color."),t,{trigger_icon_use_entity_color:s.trigger_icon_use_entity_color||!1},[this.booleanField("trigger_icon_use_entity_color")],e=>{const t=!!e.detail.value.trigger_icon_use_entity_color;r({trigger_icon_use_entity_color:t,trigger_icon_color_entity:t?s.trigger_icon_color_entity:""}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                          ${s.trigger_icon_use_entity_color?i.qy`
                                <div style="margin-bottom: 16px;">
                                  ${this.renderEntityPickerWithVariables(t,o,"trigger_icon_color_entity",s.trigger_icon_color_entity||"",e=>{r({trigger_icon_color_entity:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},void 0,(0,g.kg)("editor.button.background_color_entity",d,"Entity"))}
                                </div>
                                <div style="margin-bottom: 16px;">
                                  <div class="field-title" style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 8px;">
                                    ${(0,g.kg)("editor.button.state_colors",d,"State Colors")}
                                  </div>
                                  <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);">
                                    ${(0,g.kg)("editor.button.state_colors_desc",d,"Optional: Map specific entity states to colors (e.g., on: green, off: gray). If not set, will use entity RGB color or state-based defaults.")}
                                  </div>
                                  ${this._renderTriggerStateColorsEditor(s.trigger_icon_state_colors||{},t,d,e=>{r({trigger_icon_state_colors:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                                </div>
                              `:i.qy`
                                <div style="margin-bottom: 16px;">
                                  <ultra-color-picker
                                    .label=${(0,g.kg)("editor.popup.trigger.icon_color",d,"Trigger Icon Color")}
                                    .value=${s.trigger_icon_color||""}
                                    .defaultValue=${""}
                                    .hass=${t}
                                    @value-changed=${e=>{const t=e.detail.value;r({trigger_icon_color:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}
                                  ></ultra-color-picker>
                                </div>
                              `}

                          <!-- Trigger Icon Background -->
                          ${this.renderSegmentedField((0,g.kg)("editor.popup.trigger.icon_background",d,"Icon Background"),(0,g.kg)("editor.popup.trigger.icon_background_desc",d,"Shape drawn behind the icon, like the Icon module."),s.trigger_icon_background||"none",[{value:"none",label:(0,g.kg)("editor.popup.trigger.icon_background_none",d,"None"),icon:"mdi:close"},{value:"circle",label:(0,g.kg)("editor.popup.trigger.icon_background_circle",d,"Circle"),icon:"mdi:circle-outline"},{value:"rounded-square",label:(0,g.kg)("editor.popup.trigger.icon_background_rounded",d,"Rounded"),icon:"mdi:square-rounded-outline"}],e=>r({trigger_icon_background:e}))}
                          ${"none"!==(s.trigger_icon_background||"none")?i.qy`
                                <div style="margin-bottom: 16px;">
                                  <ultra-color-picker
                                    .label=${(0,g.kg)("editor.popup.trigger.icon_background_color",d,"Icon Background Color")}
                                    .value=${s.trigger_icon_background_color||""}
                                    .defaultValue=${"var(--secondary-background-color)"}
                                    .hass=${t}
                                    @value-changed=${e=>{r({trigger_icon_background_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                                  ></ultra-color-picker>
                                </div>
                                ${this.renderSliderField((0,g.kg)("editor.popup.trigger.icon_background_padding",d,"Icon Background Padding"),(0,g.kg)("editor.popup.trigger.icon_background_padding_desc",d,"Space between the icon and the edge of its background."),null!==(a=s.trigger_icon_background_padding)&&void 0!==a?a:8,8,0,40,1,e=>r({trigger_icon_background_padding:e}))}
                              `:""}
                        `)}
                    </div>
                  `:""}

              <!-- Conditional: Module Trigger -->
              ${"module"===s.trigger_type?i.qy`
                    <div style="margin-top: -16px; margin-bottom: 32px;">
                      ${this.renderConditionalFieldsGroup((0,g.kg)("editor.popup.trigger.module_config",d,"Module Trigger"),i.qy`
                          ${this._renderModuleTriggerConfig(s,t,o,r,d)}
                        `)}
                    </div>
                  `:""}

              <!-- Conditional: Logic Trigger -->
              ${"logic"===s.trigger_type?i.qy`
                    <div style="margin-top: -16px; margin-bottom: 32px;">
                      ${this.renderConditionalFieldsGroup((0,g.kg)("editor.popup.trigger.logic_config",d,"Logic Configuration"),i.qy` ${this._renderTriggerLogic(s,t,r)} `)}
                    </div>
                  `:""}

              <!-- Trigger Alignment (shown for button, icon, image triggers) -->
              ${"button"===s.trigger_type||"icon"===s.trigger_type||"image"===s.trigger_type?i.qy`
                    ${this.renderSettingsSection((0,g.kg)("editor.popup.trigger.alignment_section",d,"Trigger Alignment"),(0,g.kg)("editor.popup.trigger.alignment_desc",d,"Choose how the trigger element is aligned."),[{title:(0,g.kg)("editor.popup.trigger.alignment",d,"Alignment"),description:(0,g.kg)("editor.popup.trigger.alignment_help",d,"Align the trigger element to the left, center, or right."),hass:t,data:{trigger_alignment:s.trigger_alignment||"center"},schema:[this.selectField("trigger_alignment",[{value:"left",label:(0,g.kg)("editor.common.left",d,"Left")},{value:"center",label:(0,g.kg)("editor.common.center",d,"Center")},{value:"right",label:(0,g.kg)("editor.common.right",d,"Right")}])],onChange:e=>{e.detail.value.trigger_alignment!==(s.trigger_alignment||"center")&&(r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}
                  `:""}
            `}

        <!-- Title Configuration Section -->
        ${this.renderSettingsSection((0,g.kg)("editor.popup.title.section_title",d,"Title Configuration"),(0,g.kg)("editor.popup.title.section_desc",d,"Configure whether to show a title bar in the popup."),[{title:(0,g.kg)("editor.popup.title.show",d,"Show Title"),description:(0,g.kg)("editor.popup.title.show_desc",d,"Display a title bar at the top of the popup."),hass:t,data:{show_title:s.show_title||!1},schema:[this.booleanField("show_title")],onChange:e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}

        <!-- Conditional: Title Settings -->
        ${s.show_title?i.qy`
              <div style="margin-top: -16px; margin-bottom: 32px;">
                ${this.renderConditionalFieldsGroup((0,g.kg)("editor.popup.title.configuration",d,"Title Configuration"),i.qy`
                    ${this.renderSettingsSection("","",[{title:(0,g.kg)("editor.popup.title.mode",d,"Title Mode"),description:(0,g.kg)("editor.popup.title.mode_desc",d,"Choose whether to use custom text or entity state as title."),hass:t,data:{title_mode:s.title_mode||"custom"},schema:[this.selectField("title_mode",[{value:"custom",label:(0,g.kg)("editor.common.custom_text",d,"Custom Text")},{value:"entity",label:(0,g.kg)("editor.common.entity_state",d,"Entity State")}])],onChange:e=>{e.detail.value.title_mode!==(s.title_mode||"custom")&&(r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}
                    ${"custom"===s.title_mode?i.qy`
                          ${this.renderFieldSection((0,g.kg)("editor.popup.title.text",d,"Title Text"),(0,g.kg)("editor.popup.title.text_desc",d,"Enter the custom text to display in the popup title."),t,{title_text:s.title_text||""},[this.textField("title_text")],e=>{r(e.detail.value)})}
                        `:i.qy`
                          ${this.renderEntityPickerWithVariables(t,o,"title_entity",s.title_entity||"",e=>{r({title_entity:e}),setTimeout(()=>{this.triggerPreviewUpdate()},50)},void 0,(0,g.kg)("editor.popup.title.entity",d,"Title Entity"))}
                          ${this.renderSettingsSection("","",[{title:(0,g.kg)("editor.popup.title.show_entity_name",d,"Show Entity Name"),description:(0,g.kg)("editor.popup.title.show_entity_name_desc",d,"Display the entity friendly name before the state value."),hass:t,data:{show_entity_name:s.show_entity_name||!1},schema:[this.booleanField("show_entity_name")],onChange:e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}
                        `}
                  `)}
              </div>
            `:""}

        <!-- Layout Settings Section -->
        ${this.renderSettingsSection((0,g.kg)("editor.popup.layout.section_title",d,"Layout Settings"),(0,g.kg)("editor.popup.layout.section_desc",d,"Configure how the popup is displayed on screen."),[{title:(0,g.kg)("editor.popup.layout.type",d,"Layout"),description:(0,g.kg)("editor.popup.layout.type_desc",d,"Choose the layout style for the popup."),hass:t,data:{layout:s.layout||"default"},schema:[this.selectField("layout",[{value:"default",label:(0,g.kg)("editor.popup.layout.default",d,"Default")},{value:"full_screen",label:(0,g.kg)("editor.popup.layout.full_screen",d,"Full Screen")},{value:"left_panel",label:(0,g.kg)("editor.popup.layout.left_panel",d,"Left Panel")},{value:"right_panel",label:(0,g.kg)("editor.popup.layout.right_panel",d,"Right Panel")},{value:"top_panel",label:(0,g.kg)("editor.popup.layout.top_panel",d,"Top Panel")},{value:"bottom_panel",label:(0,g.kg)("editor.popup.layout.bottom_panel",d,"Bottom Panel")}])],onChange:e=>{e.detail.value.layout!==(s.layout||"default")&&(r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}},{title:(0,g.kg)("editor.popup.animation.type",d,"Animation"),description:(0,g.kg)("editor.popup.animation.type_desc",d,"Choose the animation style when the popup opens."),hass:t,data:{animation:s.animation||"fade"},schema:[this.selectField("animation",[{value:"fade",label:(0,g.kg)("editor.popup.animation.fade",d,"Fade")},{value:"scale_up",label:(0,g.kg)("editor.popup.animation.scale_up",d,"Scale Up")},{value:"scale_down",label:(0,g.kg)("editor.popup.animation.scale_down",d,"Scale Down")},{value:"slide_top",label:(0,g.kg)("editor.popup.animation.slide_top",d,"Slide from Top")},{value:"slide_left",label:(0,g.kg)("editor.popup.animation.slide_left",d,"Slide from Left")},{value:"slide_right",label:(0,g.kg)("editor.popup.animation.slide_right",d,"Slide from Right")},{value:"slide_bottom",label:(0,g.kg)("editor.popup.animation.slide_bottom",d,"Slide from Bottom")}])],onChange:e=>{e.detail.value.animation!==(s.animation||"fade")&&(r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}},{title:(0,g.kg)("editor.popup.animation.easing",d,"Animation Easing"),description:(0,g.kg)("editor.popup.animation.easing_desc",d,"How the motion accelerates. Spring adds a little overshoot."),hass:t,data:{open_animation_easing:s.open_animation_easing||"ease"},schema:[this.selectField("open_animation_easing",[{value:"ease",label:(0,g.kg)("editor.popup.animation.easing_ease",d,"Ease")},{value:"ease-out",label:(0,g.kg)("editor.popup.animation.easing_ease_out",d,"Ease Out")},{value:"ease-in-out",label:(0,g.kg)("editor.popup.animation.easing_ease_in_out",d,"Ease In Out")},{value:"linear",label:(0,g.kg)("editor.popup.animation.easing_linear",d,"Linear")},{value:"spring",label:(0,g.kg)("editor.popup.animation.easing_spring",d,"Spring")}])],onChange:e=>{const t=e.detail.value.open_animation_easing;t&&t!==(s.open_animation_easing||"ease")&&(r({open_animation_easing:t}),setTimeout(()=>this.triggerPreviewUpdate(),50))}},...(s.animation||"fade").startsWith("slide_")?[{title:(0,g.kg)("editor.popup.animation.from_edge",d,"Slide From Screen Edge"),description:(0,g.kg)("editor.popup.animation.from_edge_desc",d,"Start the slide off-screen so the popup glides in like a panel instead of nudging into place."),hass:t,data:{open_animation_from_edge:s.open_animation_from_edge||!1},schema:[this.booleanField("open_animation_from_edge")],onChange:e=>{r({open_animation_from_edge:!!e.detail.value.open_animation_from_edge}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}]:[]])}
        <div class="settings-section" style="margin-top: -8px; margin-bottom: 24px;">
          ${this.renderSliderField((0,g.kg)("editor.popup.animation.duration",d,"Animation Speed"),(0,g.kg)("editor.popup.animation.duration_desc",d,"How long the open animation runs, in milliseconds."),null!==(l=s.open_animation_duration)&&void 0!==l?l:400,400,100,2e3,50,e=>r({open_animation_duration:e}),"ms")}
        </div>

        <!-- Background Overlay Section -->
        ${this.renderSettingsSection((0,g.kg)("editor.popup.overlay.section_title",d,"Background Overlay"),"",[{title:(0,g.kg)("editor.popup.overlay.show",d,"Show Background Overlay"),description:(0,g.kg)("editor.popup.overlay.show_desc",d,"Display a dimmed overlay behind the popup when open."),hass:t,data:{show_overlay:!1!==s.show_overlay},schema:[this.booleanField("show_overlay")],onChange:e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}

        <!-- Popup Dimensions Section -->
        <!-- Width is ignored for full-width layouts (full_screen, top_panel, bottom_panel) -->
        ${["full_screen","top_panel","bottom_panel"].includes(s.layout||"default")?"":this.renderFieldSection((0,g.kg)("editor.popup.popup_width",d,"Popup Width"),(0,g.kg)("editor.popup.popup_width_desc",d,"Width of the popup (e.g., 600px, 100%, 14rem, 10vw)."),t,{popup_width:s.popup_width||"600px"},[this.textField("popup_width")],e=>{r(e.detail.value)})}
        ${this.renderFieldSection((0,g.kg)("editor.popup.popup_padding",d,"Popup Padding"),(0,g.kg)("editor.popup.popup_padding_desc",d,"Padding inside the popup (e.g., 5%, 20px, 1rem, 2vw)."),t,{popup_padding:s.popup_padding||"5%"},[this.textField("popup_padding")],e=>{r(e.detail.value)})}
        ${this.renderFieldSection((0,g.kg)("editor.popup.popup_border_radius",d,"Popup Border Radius"),(0,g.kg)("editor.popup.popup_border_radius_desc",d,"Border radius of the popup (e.g., 5px, 50%, 0.3em, 12px 0)."),t,{popup_border_radius:s.popup_border_radius||"8px"},[this.textField("popup_border_radius")],e=>{r(e.detail.value)})}

        <!-- Close Button Configuration Section -->
        ${this.renderSettingsSection((0,g.kg)("editor.popup.close_button.section_title",d,"Close Button"),(0,g.kg)("editor.popup.close_button.section_desc",d,"Configure the close button position and behavior."),[{title:(0,g.kg)("editor.popup.close_button.position",d,"Close Button Position"),description:(0,g.kg)("editor.popup.close_button.position_desc",d,"Choose where the close button appears."),hass:t,data:{close_button_position:s.close_button_position||"inside"},schema:[this.selectField("close_button_position",[{value:"inside",label:(0,g.kg)("editor.popup.close_button.inside",d,"Inside the Popup")},{value:"none",label:(0,g.kg)("editor.popup.close_button.none",d,"None")}])],onChange:e=>{e.detail.value.close_button_position!==(s.close_button_position||"inside")&&(r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}

        <!-- Auto-Close Timer Section -->
        ${this.renderSettingsSection((0,g.kg)("editor.popup.auto_close_timer.section_title",d,"Auto-Close Timer"),(0,g.kg)("editor.popup.auto_close_timer.section_desc",d,"Configure automatic popup closing after a specified time."),[{title:(0,g.kg)("editor.popup.auto_close_timer.enabled",d,"Enable Auto-Close Timer"),description:(0,g.kg)("editor.popup.auto_close_timer.enabled_desc",d,"Automatically close the popup after a specified time."),hass:t,data:{auto_close_timer_enabled:s.auto_close_timer_enabled||!1},schema:[this.booleanField("auto_close_timer_enabled")],onChange:e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}])}

        <!-- Conditional: Timer Duration -->
        ${s.auto_close_timer_enabled?i.qy`
              <div style="margin-top: -16px; margin-bottom: 32px;">
                ${this.renderConditionalFieldsGroup((0,g.kg)("editor.popup.auto_close_timer.configuration",d,"Timer Configuration"),i.qy`
                    ${this.renderSliderField((0,g.kg)("editor.popup.auto_close_timer.seconds",d,"Close After (Seconds)"),(0,g.kg)("editor.popup.auto_close_timer.seconds_desc",d,"Number of seconds before the popup automatically closes."),s.auto_close_timer_seconds||30,30,1,300,1,e=>r({auto_close_timer_seconds:e}),"s")}
                  `)}
              </div>
            `:""}

        <!-- Default State Section (only shown when trigger is manual or button/icon/image) -->
        ${"page_load"!==s.trigger_type&&"logic"!==s.trigger_type?this.renderSettingsSection((0,g.kg)("editor.popup.state.section_title",d,"Default State"),(0,g.kg)("editor.popup.state.section_desc",d,"Configure whether this popup starts open or closed when the card loads."),[{title:(0,g.kg)("editor.popup.state.default_open",d,"Open by Default"),description:(0,g.kg)("editor.popup.state.default_open_desc",d,"When enabled, the popup will be open when the card initially loads."),hass:t,data:{default_open:s.default_open||!1},schema:[this.booleanField("default_open")],onChange:e=>{r(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}]):""}
      </div>
    `}_renderTriggerStateColorsEditor(e,t,o,r){return i.qy`
      <div class="state-color-editor">
        ${Object.entries(e).map(([o,n])=>i.qy`
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; min-width: 0; overflow: hidden;">
              <input
                type="text"
                placeholder="State (e.g., on, off)"
                .value=${o}
                style="flex: 0 0 120px; padding: 8px; border: 1px solid var(--divider-color); border-radius: var(--uc-r-4, 4px); background: var(--secondary-background-color); color: var(--primary-text-color); flex-shrink: 0;"
                @input=${t=>{const i=t.target.value,a=Object.assign({},e);delete a[o],i.trim()&&(a[i.trim()]=n),r(a)}}
              />
              <div style="flex: 1; min-width: 0; overflow: hidden;">
                <ultra-color-picker
                  .label=${""}
                  .value=${n}
                  .defaultValue=${"gray"}
                  .hass=${t}
                  style="width: 100%;"
                  @value-changed=${t=>{const i=Object.assign(Object.assign({},e),{[o]:t.detail.value});r(i)}}
                ></ultra-color-picker>
              </div>
              <ha-icon
                icon="mdi:delete"
                style="cursor: pointer; color: var(--error-color); margin-left: 8px; flex-shrink: 0;"
                @click=${()=>{const t=Object.assign({},e);delete t[o],r(t)}}
              ></ha-icon>
            </div>
          `)}
        <button
          style="margin-top: 8px; padding: 8px 16px; background: var(--primary-color); color: var(--text-primary-color, #fff); border: none; border-radius: var(--uc-r-4, 4px); cursor: pointer; font-size: 14px;"
          @click=${()=>{const t=Object.assign(Object.assign({},e),{new_state:"gray"});r(t)}}
        >
          <ha-icon icon="mdi:plus" style="margin-right: 4px;"></ha-icon>
          ${(0,g.kg)("editor.button.add_state_color",o,"Add State Color")}
        </button>
      </div>
    `}_getTriggerButtonEntityColor(e,t,o){return e.trigger_button_use_entity_color?this._getTriggerEntityColor(e.trigger_button_color_entity,e.trigger_button_state_colors,t,o):null}_getTriggerIconEntityColor(e,t,o){return e.trigger_icon_use_entity_color?this._getTriggerEntityColor(e.trigger_icon_color_entity,e.trigger_icon_state_colors,t,o):null}_getTriggerEntityColor(e,t,o,i){if(!e||!o)return null;const r=this.resolveEntity(e,i)||e,n=o.states[r];if(!n)return null;if(t&&Object.keys(t).length>0){const e=t[n.state];if(e)return e}if(!n.attributes)return null;if(n.attributes.rgb_color&&Array.isArray(n.attributes.rgb_color))return`rgb(${n.attributes.rgb_color.join(",")})`;if(n.attributes.hs_color&&Array.isArray(n.attributes.hs_color)){const[e,t]=n.attributes.hs_color,o=e/360,i=t/100,r=1,a=Math.floor(6*o),l=6*o-a,s=r*(1-i),d=r*(1-l*i),p=r*(1-(1-l)*i);let g=0,u=0,c=0;switch(a%6){case 0:g=r,u=p,c=s;break;case 1:g=d,u=r,c=s;break;case 2:g=s,u=r,c=p;break;case 3:g=s,u=d,c=r;break;case 4:g=p,u=s,c=r;break;case 5:g=r,u=s,c=d}return`rgb(${Math.round(255*g)},${Math.round(255*u)},${Math.round(255*c)})`}if(n.attributes.color_name)return n.attributes.color_name;if(n.attributes.color&&"string"==typeof n.attributes.color)return n.attributes.color;if(n.entity_id){const e=n.entity_id.split(".")[0],t=n.state;switch(e){case"light":return"on"===t?"#FFA500":"#666666";case"switch":return"on"===t?"#4CAF50":"#666666";case"binary_sensor":return"on"===t?"#F44336":"#4CAF50";default:return"on"===t||"open"===t||"active"===t?"var(--primary-color)":"#666666"}}return null}_isOpenedViaNavigation(e,t){var o;if(!(null===(o=null==t?void 0:t.layout)||void 0===o?void 0:o.rows))return null;const i=t=>{var o,i,r,n,a,l;return"open-popup"===(null===(o=t.tap_action)||void 0===o?void 0:o.action)&&(null===(i=t.tap_action)||void 0===i?void 0:i.popup_id)===e||"open-popup"===(null===(r=t.hold_action)||void 0===r?void 0:r.action)&&(null===(n=t.hold_action)||void 0===n?void 0:n.popup_id)===e||"open-popup"===(null===(a=t.double_tap_action)||void 0===a?void 0:a.action)&&(null===(l=t.double_tap_action)||void 0===l?void 0:l.popup_id)===e},r=t=>{var o,n,a,l;if(!t||!Array.isArray(t))return null;for(const s of t){if("navigation"===s.type){const t=s,r=s.module_name||t.name||`Navigation (${t.id.slice(-6)})`;if(t.nav_routes)for(const e of t.nav_routes)if(i(e))return r;if(t.nav_stacks)for(const e of t.nav_stacks)if(e.children)for(const t of e.children)if(i(t))return r;if("open-popup"===(null===(n=null===(o=t.nav_media_player)||void 0===o?void 0:o.inactive_tap_action)||void 0===n?void 0:n.action)&&(null===(l=null===(a=t.nav_media_player)||void 0===a?void 0:a.inactive_tap_action)||void 0===l?void 0:l.popup_id)===e)return r}if(s.columns&&Array.isArray(s.columns))for(const e of s.columns)if(e.modules){const t=r(e.modules);if(t)return t}if(s.modules&&Array.isArray(s.modules)){const e=r(s.modules);if(e)return e}}return null};return r(t.layout.rows)}_getAvailableModulesForTrigger(e,t){const o=[];if(!t||!t.layout||!t.layout.rows)return o;const i=(t,r=0)=>{var n,a,l,s,d,p,g,u;if(t&&Array.isArray(t))for(const c of t)if(c.id!==e&&"popup"!==c.type&&"pagebreak"!==c.type)if(c.columns&&Array.isArray(c.columns))for(const e of c.columns)e.modules&&i(e.modules,r+1);else{if(c.type){const e=c.type.charAt(0).toUpperCase()+c.type.slice(1);let t=null;if(c.module_name&&"string"==typeof c.module_name&&c.module_name.trim()?t=c.module_name.trim():c.name&&"string"==typeof c.name&&c.name.trim()&&(t=c.name.trim()),!t)switch(c.type){case"info":(null===(a=null===(n=c.info_entities)||void 0===n?void 0:n[0])||void 0===a?void 0:a.label)&&c.info_entities[0].label.trim()?t=c.info_entities[0].label.trim():(null===(s=null===(l=c.info_entities)||void 0===l?void 0:l[0])||void 0===s?void 0:s.entity)&&(t=c.info_entities[0].entity.split(".").pop()||null);break;case"icon":(null===(p=null===(d=c.icons)||void 0===d?void 0:d[0])||void 0===p?void 0:p.label)&&c.icons[0].label.trim()?t=c.icons[0].label.trim():(null===(u=null===(g=c.icons)||void 0===g?void 0:g[0])||void 0===u?void 0:u.entity)&&(t=c.icons[0].entity.split(".").pop()||null);break;case"bar":case"button":case"text":case"camera":case"climate":case"light":case"slider":t=c.label&&c.label.trim()||c.title&&c.title.trim()||(c.entity?c.entity.split(".").pop():null);break;case"image":case"graphs":case"horizontal":case"vertical":case"accordion":t=c.title&&c.title.trim()||null;break;default:t=c.title&&c.title.trim()||c.title_text&&c.title_text.trim()||c.trigger_button_text&&c.trigger_button_text.trim()||null}if(!t){const e=c.id.match(/\d{13}/);t=e?`ID: ...${e[0].slice(-6)}`:`ID: ${c.id.slice(-12)}`}const i=`${e}: ${t}`;o.push({value:c.id,label:i})}c.modules&&Array.isArray(c.modules)&&i(c.modules,r+1)}};return i(t.layout.rows),o}_renderModuleTriggerConfig(e,t,o,r,n){const a=this._getAvailableModulesForTrigger(e.id,o),l=e.trigger_module_id||"",s=a.find(e=>e.value===l);return i.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,g.kg)("editor.popup.trigger.module_trigger_title",n,"Module Trigger")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,g.kg)("editor.popup.trigger.module_trigger_desc",n,"Select a module in this card that will open the popup when tapped. The selected module will have its tap action overridden to open this popup instead.")}
        </div>

        ${a.length>0?i.qy`
              ${this.renderFieldSection((0,g.kg)("editor.popup.trigger.select_module",n,"Select Module"),(0,g.kg)("editor.popup.trigger.select_module_desc",n,"Choose which module should trigger this popup when clicked."),t,{trigger_module_id:l},[this.selectField("trigger_module_id",[{value:"",label:(0,g.kg)("editor.popup.trigger.no_module",n,"-- Select a Module --")},...a])],e=>{const t=e.detail.value.trigger_module_id;t!==l&&(r({trigger_module_id:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50))})}
              ${s?i.qy`
                    <div
                      style="margin-top: 12px; padding: 12px; background: rgba(var(--rgb-success-color, 76, 175, 80), 0.1); border-left: 3px solid var(--success-color, #4caf50); border-radius: var(--uc-r-4, 4px); font-size: 13px; line-height: 1.5;"
                    >
                      <div
                        style="font-weight: 600; margin-bottom: 4px; color: var(--success-color, #4caf50);"
                      >
                        <ha-icon
                          icon="mdi:check-circle"
                          style="--mdc-icon-size: 16px; vertical-align: middle;"
                        ></ha-icon>
                        ${(0,g.kg)("editor.popup.trigger.module_linked",n,"Module Linked")}
                      </div>
                      <div style="color: var(--primary-text-color);">
                        ${(0,g.kg)("editor.popup.trigger.module_linked_desc",n,'Tapping on "${module}" will now open this popup.').replace("${module}",s.label)}
                      </div>
                    </div>
                  `:""}
            `:i.qy`
              <div
                style="padding: 16px; background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.1); border-left: 3px solid var(--warning-color, #ff9800); border-radius: var(--uc-r-4, 4px); font-size: 13px; line-height: 1.5;"
              >
                <div
                  style="font-weight: 600; margin-bottom: 4px; color: var(--warning-color, #ff9800);"
                >
                  <ha-icon
                    icon="mdi:alert"
                    style="--mdc-icon-size: 16px; vertical-align: middle;"
                  ></ha-icon>
                  ${(0,g.kg)("editor.popup.trigger.no_modules_available",n,"No Modules Available")}
                </div>
                <div style="color: var(--primary-text-color);">
                  ${(0,g.kg)("editor.popup.trigger.no_modules_available_desc",n,"Add other modules to this card first, then you can select one to trigger this popup.")}
                </div>
              </div>
            `}
      </div>
    `}_renderTriggerLogic(e,t,o){var n;const a=e.trigger_conditions||[],l=e.trigger_mode||"manual",s=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";return i.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,g.kg)("editor.popup.trigger_logic.section_title",s,"Trigger Logic")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,g.kg)("editor.popup.trigger_logic.section_desc",s,"Control when this popup automatically opens based on conditions.")}
        </div>
        <div
          style="margin-bottom: 16px; padding: 12px; background: rgba(var(--rgb-info-color, 3, 169, 244), 0.1); border-left: 3px solid var(--info-color, #03a9f4); border-radius: var(--uc-r-4, 4px); font-size: 13px; line-height: 1.5;"
        >
          <div style="font-weight: 600; margin-bottom: 4px; color: var(--info-color, #03a9f4);">
            <ha-icon
              icon="mdi:information"
              style="--mdc-icon-size: 16px; vertical-align: middle;"
            ></ha-icon>
            ${(0,g.kg)("editor.popup.trigger_logic.note_title",s,"Important Note")}
          </div>
          <div style="color: var(--primary-text-color);">
            ${(0,r._)((0,g.kg)("editor.popup.trigger_logic.note_message",s,"These trigger conditions control <strong>when the popup opens</strong>. This is different from the Logic tab, which controls <strong>whether this module is visible</strong> on the card."))}
          </div>
        </div>

        <!-- Trigger Mode Selection -->
        ${this.renderFieldSection((0,g.kg)("editor.popup.trigger_logic.mode_title",s,"Popup State Control"),(0,g.kg)("editor.popup.trigger_logic.mode_desc",s,"Choose how the popup state is controlled."),t,{trigger_mode:l},[this.selectField("trigger_mode",[{value:"manual",label:(0,g.kg)("editor.popup.trigger_logic.mode_manual",s,"Manual")},{value:"every",label:(0,g.kg)("editor.popup.trigger_logic.mode_every",s,"Open if EVERY condition is met")},{value:"any",label:(0,g.kg)("editor.popup.trigger_logic.mode_any",s,"Open if ANY condition is met")}])],e=>{o({trigger_mode:e.detail.value.trigger_mode}),setTimeout(()=>{this.triggerPreviewUpdate()},50)})}

        <!-- Auto Close Toggle (for logic triggers) -->
        ${"manual"!==l?this.renderSettingsSection("","",[{title:(0,g.kg)("editor.popup.trigger_logic.auto_close",s,"Auto Close"),description:(0,g.kg)("editor.popup.trigger_logic.auto_close_desc",s,"Automatically close popup when conditions become false."),hass:t,data:{auto_close:!1!==e.auto_close},schema:[this.booleanField("auto_close")],onChange:e=>{o(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50)}}]):""}

        <!-- Conditions List -->
        ${"manual"!==l?i.qy`
              <div style="margin-top: 24px;">
                <div
                  style="display:flex; align-items:center; justify-content: space-between; margin-bottom: 12px;"
                >
                  <div style="font-size: 16px; font-weight: 600;">
                    ${(0,g.kg)("editor.popup.trigger_logic.conditions",s,"Conditions")}
                  </div>
                  <button
                    @click=${()=>{const e={id:`cond_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,type:"entity_state",ui_expanded:!0,entity:"",operator:"=",value:""},t=[...a,e];o({trigger_conditions:t})}}
                    style="display:flex; align-items:center; gap:8px; padding:6px 10px; border:1px dashed var(--primary-color); background:none; color:var(--primary-color); border-radius:var(--uc-r-6, 6px); cursor:pointer;"
                  >
                    <ha-icon icon="mdi:plus"></ha-icon>
                    ${(0,g.kg)("editor.popup.trigger_logic.add_condition",s,"Add Condition")}
                  </button>
                </div>

                <div style="display:flex; flex-direction: column; gap: 12px;">
                  ${0===a.length?i.qy`
                        <div
                          style="padding: 20px; background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.1); border: 1px dashed var(--warning-color, #ff9800); border-radius: var(--uc-r-8, 8px);"
                        >
                          <div
                            style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;"
                          >
                            <ha-icon
                              icon="mdi:alert-circle-outline"
                              style="--mdc-icon-size: 24px; color: var(--warning-color, #ff9800);"
                            ></ha-icon>
                            <span style="font-weight: 600; color: var(--primary-text-color);">
                              ${(0,g.kg)("editor.popup.trigger_logic.no_conditions_title",s,"No Conditions Configured")}
                            </span>
                          </div>
                          <div
                            style="color: var(--secondary-text-color); line-height: 1.5; margin-bottom: 12px;"
                          >
                            ${(0,g.kg)("editor.popup.trigger_logic.no_conditions",s,'Click "Add Condition" below to create your first trigger condition. The popup will remain closed until you add at least one condition.')}
                          </div>
                          <div
                            style="font-size: 12px; color: var(--secondary-text-color); font-style: italic; padding: 8px; background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06); border-radius: var(--uc-r-4, 4px);"
                          >
                            <strong>Tip:</strong> ${(0,r._)((0,g.kg)("editor.popup.trigger_logic.helper_tip",s,"To open a popup based on a helper, add an <strong>Entity State</strong> condition, select your helper entity, set operator to <strong>=</strong>, and enter <strong>on</strong> as the value."))}
                          </div>
                        </div>
                      `:""}
                  ${a.map((e,i)=>this._renderTriggerCondition(e,i,a,t,o))}
                </div>
              </div>
            `:i.qy`
              <div
                style="margin-top: 16px; padding: 16px; background: rgba(var(--rgb-secondary-text-color), 0.05); border-radius: var(--uc-r-8, 8px); color: var(--secondary-text-color);"
              >
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                  <ha-icon icon="mdi:hand-pointing-right" style="--mdc-icon-size: 20px;"></ha-icon>
                  <span style="font-weight: 600; color: var(--primary-text-color);">
                    ${(0,g.kg)("editor.popup.trigger_logic.manual_mode_title",s,"Manual Mode")}
                  </span>
                </div>
                <div style="line-height: 1.5;">
                  ${(0,r._)((0,g.kg)("editor.popup.trigger_logic.manual_note",s,"Popup state is controlled manually by user interaction. Use the <strong>Default State</strong> setting in the <strong>General</strong> tab to choose whether the popup starts open or closed when the card loads."))}
                </div>
              </div>
            `}
      </div>
    `}_renderTriggerCondition(e,t,o,r,n){var a;const l=(null===(a=null==r?void 0:r.locale)||void 0===a?void 0:a.language)||"en",s=i=>{const r=[...o];r[t]=Object.assign(Object.assign({},e),i),n({trigger_conditions:r})},d=!1!==e.ui_expanded,p=e.custom_name||`Condition ${t+1}`;return i.qy`
      <div
        class="uc-condition-item"
        style="border:1px solid var(--divider-color); border-radius: var(--uc-r-8, 8px); background: var(--uc-pane-bg, var(--card-background-color)); overflow: hidden;"
      >
        <div
          class="uc-condition-header"
          style="display:flex; align-items:center; justify-content: space-between; gap:10px; padding: 12px 14px; border-bottom: ${d?"1px solid var(--divider-color)":"none"};"
        >
          <div style="display:flex; align-items:center; gap:10px; min-width:0;">
            <button
              @click=${()=>s({ui_expanded:!d})}
              title=${d?"Collapse":"Expand"}
              style="background:none; border:none; color:var(--secondary-text-color); cursor:pointer; padding:4px;"
            >
              <ha-icon icon=${d?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
            </button>
            <span
              style="font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;"
              >${p}</span
            >
          </div>
          <div style="display:flex; align-items:center; gap:4px; flex-shrink:0;">
            <button
              @click=${()=>{const i=Object.assign(Object.assign({},e),{id:`cond_${Date.now()}_${Math.random().toString(36).slice(2,7)}`}),r=[...o];r.splice(t+1,0,i),n({trigger_conditions:r})}}
              style="background:none; border:none; padding:4px; cursor:pointer; color: var(--secondary-text-color);"
              title="Duplicate Condition"
            >
              <ha-icon icon="mdi:content-copy" style="--mdc-icon-size: 18px;"></ha-icon>
            </button>
            <button
              @click=${()=>{const e=o.filter((e,o)=>o!==t);n({trigger_conditions:e})}}
              style="background:none; border:none; padding:4px; cursor:pointer; color: var(--error-color);"
              title="Remove Condition"
            >
              <ha-icon icon="mdi:trash-can-outline" style="--mdc-icon-size: 18px;"></ha-icon>
            </button>
          </div>
        </div>

        ${d?i.qy`
              <div style="padding: 12px 14px; display:flex; flex-direction:column; gap:12px;">
                ${this.renderFieldSection((0,g.kg)("editor.popup.trigger_logic.custom_name",l,"Custom Name"),(0,g.kg)("editor.popup.trigger_logic.custom_name_desc",l,"Optional: Give this condition a custom name"),r,{custom_name:e.custom_name||""},[this.textField("custom_name")],e=>s(e.detail.value))}
                ${this.renderFieldSection((0,g.kg)("editor.popup.trigger_logic.condition_type",l,"Condition Type"),"",r,{type:e.type||"entity_state"},[this.selectField("type",[{value:"entity_state",label:(0,g.kg)("editor.popup.trigger_logic.type_entity_state",l,"Entity State")},{value:"entity_attribute",label:(0,g.kg)("editor.popup.trigger_logic.type_entity_attribute",l,"Entity Attribute")},{value:"time",label:(0,g.kg)("editor.popup.trigger_logic.type_time",l,"Time Range")},{value:"template",label:(0,g.kg)("editor.popup.trigger_logic.type_template",l,"Template")}])],e=>{const t=e.detail.value.type,o={type:t};"entity_state"===t?Object.assign(o,{entity:"",operator:"=",value:""}):"entity_attribute"===t?Object.assign(o,{entity:"",attribute:"",operator:"=",value:""}):"time"===t?Object.assign(o,{time_from:"00:00",time_to:"23:59"}):"template"===t&&Object.assign(o,{template:""}),s(o)})}
                ${(()=>"entity_state"===(e.type||"entity_state")?i.qy`
                      ${this.renderEntityPickerWithVariables(r,void 0,"entity",e.entity||"",e=>s({entity:e}),void 0,(0,g.kg)("editor.popup.trigger_logic.entity",l,"Entity"))}
                      ${this.renderFieldSection((0,g.kg)("editor.popup.trigger_logic.operator",l,"Operator"),"",r,{operator:e.operator||"="},[this.selectField("operator",[{value:"=",label:"="},{value:"!=",label:"!="},{value:">",label:">"},{value:">=",label:">="},{value:"<",label:"<"},{value:"<=",label:"<="},{value:"contains",label:"Contains"},{value:"not_contains",label:"Not Contains"},{value:"has_value",label:"Has Value"},{value:"no_value",label:"No Value"}])],e=>s(e.detail.value))}
                      ${this.renderFieldSection((0,g.kg)("editor.popup.trigger_logic.value",l,"Value"),"",r,{value:e.value||""},[this.textField("value")],e=>s(e.detail.value))}
                    `:"entity_attribute"===e.type?i.qy`
                      ${this.renderEntityPickerWithVariables(r,void 0,"entity",e.entity||"",e=>s({entity:e}),void 0,(0,g.kg)("editor.popup.trigger_logic.entity",l,"Entity"))}
                      ${this.renderFieldSection((0,g.kg)("editor.popup.trigger_logic.attribute",l,"Attribute"),"",r,{attribute:e.attribute||""},[this.textField("attribute")],e=>s(e.detail.value))}
                      ${this.renderFieldSection((0,g.kg)("editor.popup.trigger_logic.operator",l,"Operator"),"",r,{operator:e.operator||"="},[this.selectField("operator",[{value:"=",label:"="},{value:"!=",label:"!="},{value:">",label:">"},{value:">=",label:">="},{value:"<",label:"<"},{value:"<=",label:"<="},{value:"contains",label:"Contains"},{value:"not_contains",label:"Not Contains"}])],e=>s(e.detail.value))}
                      ${this.renderFieldSection((0,g.kg)("editor.popup.trigger_logic.value",l,"Value"),"",r,{value:e.value||""},[this.textField("value")],e=>s(e.detail.value))}
                    `:"time"===e.type?i.qy`
                      ${this.renderFieldSection((0,g.kg)("editor.popup.trigger_logic.time_from",l,"From"),"",r,{time_from:e.time_from||"00:00"},[this.textField("time_from")],e=>s(e.detail.value))}
                      ${this.renderFieldSection((0,g.kg)("editor.popup.trigger_logic.time_to",l,"To"),"",r,{time_to:e.time_to||"23:59"},[this.textField("time_to")],e=>s(e.detail.value))}
                    `:i.qy`
                    <div class="field-container" style="margin-bottom: 16px;">
                      <div
                        class="field-title"
                        style="font-size: 14px; font-weight: 600; margin-bottom: 8px;"
                      >
                        ${(0,g.kg)("editor.popup.trigger_logic.template",l,"Template")}
                      </div>
                      <div
                        class="field-description"
                        style="font-size: 12px; margin-bottom: 8px; color: var(--secondary-text-color);"
                      >
                        ${(0,g.kg)("editor.popup.trigger_logic.template_desc",l,"Jinja2 template that should evaluate to true/false to open the popup.")}
                      </div>
                      <ultra-template-editor
                        .hass=${r}
                        .value=${e.template||""}
                        .placeholder=${"{% if states('sensor.example') | int > 50 %}true{% else %}false{% endif %}"}
                        .minHeight=${100}
                        .maxHeight=${300}
                        @value-changed=${e=>s({template:e.detail.value})}
                      ></ultra-template-editor>
                    </div>
                  `)()}
              </div>
            `:""}
      </div>
    `}renderPreview(e,t,o,r){var a,y;const x=e,F=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",z=(null==o?void 0:o.__ucInstanceId)||"",E=z?`${z}:${x.id}`:x.id,q=JSON.stringify(x),A=x.trigger_type||"button",U="logic"!==A?"manual":x.trigger_mode||"manual";"module"===A&&x.trigger_module_id?(0,_.S3)(x.id,x.trigger_module_id):(0,_.$3)(x.id);const O=!0===x.auto_close_timer_enabled;w.set(E,O),O||this._clearAutoCloseTimer(E);let M=null;if("logic"===A){const e=U;if("every"===e||"any"===e){const o=x.trigger_conditions||[];o.some(e=>{if(!e||!e.type)return!1;switch(e.type){case"entity_state":return e.entity&&""!==e.entity.trim();case"entity_attribute":return e.entity&&""!==e.entity.trim()&&e.attribute&&""!==e.attribute.trim();case"time":return e.time_from&&e.time_to;case"template":return e.template&&""!==e.template.trim();default:return!1}})?(s.S.setHass(t),M=s.S.evaluateDisplayConditions(o,e)):M=!1}}else"page_load"===A&&(f.has(E)||(M=!0));if(f.has(E)){if(null!==M&&"logic"===A){const e=k.get(E)!==M;k.set(E,M);const t=$.has(E);if(e&&!t){const e=f.get(E)||!1;M?(f.set(E,!0),!1===x.auto_close&&$.add(E),!e&&x.auto_close_timer_enabled&&this._startAutoCloseTimer(x,E)):!1!==x.auto_close&&(f.set(E,!1),this._clearAutoCloseTimer(E))}}}else{const e=null!==M?M:x.default_open||!1;f.set(E,e),null!==M&&k.set(E,M),e&&"logic"===A&&!1===x.auto_close&&$.add(E),e&&x.auto_close_timer_enabled&&this._startAutoCloseTimer(x,E)}let L,B=f.get(E)||!1;$.has(E)&&!B&&(f.set(E,!0),B=!0);const D=`__ultraPopupOpenListener_${x.id}`,V=window;V[D]&&(window.removeEventListener("ultra-popup-open",V[D]),delete V[D]);const j=e=>{var t;(null===(t=e.detail)||void 0===t?void 0:t.popupId)===x.id&&(f.set(E,!0),$.add(E),x.auto_close_timer_enabled&&this._startAutoCloseTimer(x,E),setTimeout(()=>{L&&(L(!1),setTimeout(()=>{f.get(E)&&(S.set(E,!0),this.triggerPreviewUpdate(!0))},500))},0))};window.addEventListener("ultra-popup-open",j),V[D]=j;const N=`__ultraPopupChildUpdateListener_${x.id}`;V[N]&&(window.removeEventListener("ultra-card-template-update",V[N]),delete V[N]);const R=e=>{f.get(E)&&b.has(E)&&(S.set(E,!0),setTimeout(()=>{L&&f.get(E)&&L(!1)},10))};window.addEventListener("ultra-card-template-update",R),V[N]=R;let G=0,W=0;const H=e=>{const t=e.touches[0];t&&(G=t.clientX,W=t.clientY)},Y=e=>t=>{const o=t.changedTouches[0];o&&Math.hypot(o.clientX-G,o.clientY-W)>10||(t.preventDefault(),t.stopPropagation(),e(t))},X=e=>{e.stopPropagation(),"logic"===A&&"manual"!==U||(f.set(E,!0),$.add(E),x.auto_close_timer_enabled&&this._startAutoCloseTimer(x,E),L(!1),setTimeout(()=>{f.get(E)&&(S.set(E,!0),this.triggerPreviewUpdate(!0))},500))},K=e=>{e.stopPropagation(),e.preventDefault(),f.set(E,!1),$.delete(E),this._clearAutoCloseTimer(E),P();const t=b.get(E);if(t){const e=t._ultraInertObserver;e&&e.disconnect(),I(t),t.remove(),b.delete(E)}this.triggerPreviewUpdate(!0)},J=e=>{e.stopPropagation(),K(e)},Z=`__ultraPopupCloseListener_${x.id}`;V[Z]&&(window.removeEventListener("ultra-popup-close",V[Z]),delete V[Z]);const Q=e=>{const t=e.detail||{};(t.popupKey?t.popupKey===E:t.popupId===x.id)&&K(e)};window.addEventListener("ultra-popup-close",Q),V[Z]=Q;let ee="";if(x.show_title)if("entity"===x.title_mode&&x.title_entity){const e=this.resolveEntity(x.title_entity,o)||x.title_entity,i=null==t?void 0:t.states[e],r=(null===(y=null==i?void 0:i.attributes)||void 0===y?void 0:y.friendly_name)||e.split(".")[1]||e,n=(null==i?void 0:i.state)||e;ee=x.show_entity_name?`${r}: ${n}`:n}else ee=x.title_text||"Popup Title";const te=Math.max(0,Number(x.open_animation_duration)||400),oe=(()=>{switch(x.open_animation_easing){case"linear":return"linear";case"ease-out":return"ease-out";case"ease-in-out":return"ease-in-out";case"spring":return"cubic-bezier(0.34, 1.56, 0.64, 1)";default:return"ease"}})(),ie=x.layout||"default";let re="",ne="";"full_screen"===ie?(ne="ultra-popup-layout-full_screen",re="width: 100vw; height: 100vh; height: 100dvh; max-width: 100vw; max-height: 100vh; max-height: 100dvh; border-radius: 0;"):"left_panel"===ie?(ne="ultra-popup-layout-left_panel",re=`width: ${x.popup_width||"600px"}; height: 100vh; max-height: 100vh; margin: 0; position: absolute; left: 0; top: 0; border-radius: 0;`):"right_panel"===ie?(ne="ultra-popup-layout-right_panel",re=`width: ${x.popup_width||"600px"}; height: 100vh; max-height: 100vh; margin: 0; position: absolute; right: 0; top: 0; border-radius: 0;`):"top_panel"===ie?(ne="ultra-popup-layout-top_panel",re="width: 100vw; max-width: 100vw; margin: 0; position: absolute; top: 0; left: 0; border-radius: 0;"):"bottom_panel"===ie?(ne="ultra-popup-layout-bottom_panel",re="width: 100vw; max-width: 100vw; margin: 0; position: absolute; bottom: 0; left: 0; border-radius: 0;"):re=`width: ${x.popup_width||"600px"}; max-width: 90vw;`;const ae=`${u.Mu.DIALOG_CONTENT}`,le=x.modules&&x.modules.length>0,se=(0,l.oD)();L=(e=!1)=>{const a=`ultra-popup-portal-${E}`;let l=b.get(E);const c=$.has(E);let _=f.get(E)||!1;if(c&&(f.set(E,!0),_=!0),!_&&!c){if(l){const e=l._ultraInertObserver;e&&e.disconnect(),I(l),P(),l.remove(),b.delete(E),T.delete(E),C.delete(E)}return}_||f.set(E,!0);const v=!l;if(l||(l=document.createElement("div"),l.id=a,l.className="ultra-popup-portal",l._ultraPrevFocus=document.activeElement,l.style.position="fixed",l.style.top="0",l.style.left="0",l.style.width="100%",l.style.height="100%",l.style.pointerEvents="auto",l.style.zIndex=`${u.Mu.DIALOG_OVERLAY}`,l.removeAttribute("inert"),document.body.appendChild(l),b.set(E,l)),l.removeAttribute("inert"),l.style.position="fixed",l.style.top="0",l.style.left="0",l.style.width="100%",l.style.height="100%",l.style.pointerEvents="auto",l.style.zIndex=`${u.Mu.DIALOG_OVERLAY}`,!l._ultraInertObserver){const e=new MutationObserver(e=>{e.forEach(e=>{"attributes"===e.type&&"inert"===e.attributeName&&l.hasAttribute("inert")&&l.removeAttribute("inert")})});e.observe(l,{attributes:!0,attributeFilter:["inert"]}),l._ultraInertObserver=e}if(!l._ultraKeydownHandler){const e=l,t=t=>{if("Escape"===t.key)return t.stopPropagation(),void K(t);if("Tab"===t.key){const o=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(e=>!e.hasAttribute("disabled"));if(0===o.length)return;const i=o[0],r=o[o.length-1],n=document.activeElement;t.shiftKey?n!==i&&e.contains(n)||(t.preventDefault(),r.focus()):n!==r&&e.contains(n)||(t.preventDefault(),i.focus())}};document.addEventListener("keydown",t),l._ultraKeydownHandler=t}const h="ha-preview"===r||"live"===r,y=`${u.Mu.DIALOG_OVERLAY}`;h&&document.querySelectorAll(".edit-mode, ha-card[edit-mode], [data-edit-mode]").forEach(e=>{const t=e;t.dataset.ultraPopupOriginalZIndex||(t.dataset.ultraPopupOriginalZIndex=t.style.zIndex||""),t.style.zIndex="-1",t.style.pointerEvents="none"});const k=!0===S.get(E),w=!v&&T.get(E)!==t,z=!v&&C.get(E)!==q,A=v||k||w||z;if(k&&S.delete(E),!A)return;v&&(l.innerHTML="");const U=i.qy`
        <style>
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes zoomOut {
            from {
              opacity: 0;
              transform: scale(1.1);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animation-fadeIn {
            animation-name: fadeIn;
          }
          .animation-zoomIn {
            animation-name: zoomIn;
          }
          .animation-zoomOut {
            animation-name: zoomOut;
          }
          .animation-slideInDown {
            animation-name: slideInDown;
          }
          .animation-slideInUp {
            animation-name: slideInUp;
          }
          .animation-slideInLeft {
            animation-name: slideInLeft;
          }
          .animation-slideInRight {
            animation-name: slideInRight;
          }
          @keyframes slideInDownEdge {
            from {
              transform: translateY(-100vh);
            }
            to {
              transform: translateY(0);
            }
          }
          @keyframes slideInUpEdge {
            from {
              transform: translateY(100vh);
            }
            to {
              transform: translateY(0);
            }
          }
          @keyframes slideInLeftEdge {
            from {
              transform: translateX(-100vw);
            }
            to {
              transform: translateX(0);
            }
          }
          @keyframes slideInRightEdge {
            from {
              transform: translateX(100vw);
            }
            to {
              transform: translateX(0);
            }
          }
          .animation-slideInDown.from-edge {
            animation-name: slideInDownEdge;
          }
          .animation-slideInUp.from-edge {
            animation-name: slideInUpEdge;
          }
          .animation-slideInLeft.from-edge {
            animation-name: slideInLeftEdge;
          }
          .animation-slideInRight.from-edge {
            animation-name: slideInRightEdge;
          }
          @media (prefers-reduced-motion: reduce) {
            .ultra-popup-container {
              animation-name: fadeIn !important;
              animation-duration: 150ms !important;
            }
          }
        </style>
        <div
          class="ultra-popup-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="${(0,n.J)(x.show_title?void 0:(ee||"Popup").trim()||"Popup")}"
          aria-labelledby="${(0,n.J)(x.show_title?`ultra-popup-title-${x.id}`:void 0)}"
          @click=${J}
          style="
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: ${y};
            background: ${!1!==x.show_overlay?x.overlay_background||"rgba(0,0,0,0.85)":"transparent"};
            ${!1!==x.show_overlay?"backdrop-filter: blur(2px);":""}
            animation: fadeIn ${Math.min(te,300)}ms ease both;
            pointer-events: auto !important;
          "
        >
          <div
            class="ultra-popup-container ${ne} ${(()=>{const e=x.animation||"fade",t={fade:"animation-fadeIn",scale_up:"animation-zoomIn",scale_down:"animation-zoomOut",slide_top:"animation-slideInDown",slide_left:"animation-slideInLeft",slide_right:"animation-slideInRight",slide_bottom:"animation-slideInUp"}[e]||"animation-fadeIn";return x.open_animation_from_edge&&e.startsWith("slide_")?`${t} from-edge`:t})()}"
            data-uc-role="pane"
            tabindex="-1"
            @click=${e=>e.stopPropagation()}
            style="
              position: relative;
              ${re}
              ${"full_screen"===ie?"max-height: 100vh; max-height: 100dvh;":"max-height: 90vh;"}
              overflow-y: auto;
              background: ${x.popup_background_color||"var(--uc-pane-bg, var(--card-background-color))"};
              color: ${x.popup_text_color||"var(--primary-text-color)"};
              border: var(--uc-pane-border, none);
              border-radius: ${"default"===ie?x.popup_border_radius||"8px":"0"};
              box-shadow: var(--uc-pane-shadow, 0 10px 40px rgba(0, 0, 0, 0.3));
              animation-duration: ${te}ms;
              animation-fill-mode: both;
              animation-timing-function: ${oe};
              pointer-events: auto !important;
              z-index: ${u.Mu.DIALOG_CONTENT};
              isolation: isolate;
            "
          >
            ${(()=>{if("none"===x.close_button_position)return"";const e=x.close_button_icon||"mdi:close",t=x.close_button_size||32,o=x.close_button_color||"#ffffff",r=x.close_button_offset_x||"0px",n=x.close_button_offset_y||"0px";return i.qy`
        <button
          type="button"
          aria-label="${(0,g.kg)("editor.popup.close_button.label",F,"Close")}"
          @click=${K}
          @touchstart=${H}
          @touchend=${Y(K)}
          class="ultra-popup-close-button swiper-no-swiping"
          style="
            position: absolute;
            top: calc(10px + ${n});
            right: calc(10px + ${r});
            z-index: ${ae};
            background: none;
            border: none;
            padding: 8px;
            margin: 0;
            cursor: pointer !important;
            pointer-events: auto !important;
            touch-action: manipulation;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.2s ease, transform 0.2s ease;
            isolation: isolate;
          "
          @mouseover=${e=>{const t=e.currentTarget;t.style.background="rgba(255,255,255,0.1)",t.style.transform="scale(1.1)"}}
          @mouseout=${e=>{const t=e.currentTarget;t.style.background="none",t.style.transform="scale(1)"}}
        >
          <ha-icon
            icon="${e}"
            style="
              color: ${o};
              --mdc-icon-size: ${t}px;
              pointer-events: none;
            "
          ></ha-icon>
        </button>
      `})()}
            ${x.show_title?i.qy`
                  <div
                    class="ultra-popup-title"
                    id="ultra-popup-title-${x.id}"
                    style="
                      background: ${x.title_background_color||"var(--primary-color)"};
                      color: ${x.title_text_color||"#ffffff"};
                      padding: 16px 20px;
                      font-size: 20px;
                      font-weight: 600;
                      border-bottom: 1px solid var(--divider-color);
                    "
                  >
                    ${ee}
                  </div>
                `:""}

            <div
              class="ultra-popup-content"
              style="
                padding: ${x.popup_padding||"5%"};
              "
            >
              ${le?x.modules.map(e=>{var n,a,l,g,u,c;const _=se.getModule(e.type);if(!_)return p.E.renderModuleLoadingState(e);if(s.S.setHass(t),!s.S.evaluateModuleVisibility(e))return"";const v=(null===(a=null===(n=_.metadata)||void 0===n?void 0:n.tags)||void 0===a?void 0:a.includes("pro"))||(null===(g=null===(l=_.metadata)||void 0===l?void 0:l.tags)||void 0===g?void 0:g.includes("premium"))||!1;let h=!1;const y=d.xd.checkIntegrationAuth(t);if("pro"===(null===(u=null==y?void 0:y.subscription)||void 0===u?void 0:u.tier)&&"active"===(null===(c=null==y?void 0:y.subscription)||void 0===c?void 0:c.status)&&(h=!0),v&&!h)return i.qy`
                        <div
                          style="padding: 16px; text-align: center; color: var(--secondary-text-color); font-style: italic; background: rgba(var(--rgb-warning-color), 0.1); border: 1px dashed var(--warning-color); border-radius: var(--uc-r-8, 8px); margin: 8px 0;"
                        >
                          🔒 ${_.metadata.title} - Pro Feature
                        </div>
                      `;const b=e,f=b.design||{},x=b.background_color||f.background_color||"",k=b.border_radius||f.border_radius||"",$=b.border||f.border||null,w=b.backdrop_filter||f.backdrop_filter||"";let S="margin-bottom: 8px;";return x&&(S+=` background: ${x};`),k&&(S+=` border-radius: ${k};`),$&&$.style&&"none"!==$.style&&(S+=` border: ${$.width||"1px"} ${$.style} ${$.color||"var(--divider-color)"};`,$.radius&&(S+=` border-radius: ${"number"==typeof $.radius?$.radius+"px":$.radius};`)),w&&(S+=` backdrop-filter: ${w};`),i.qy`
                      <div class="popup-child-module" style="${S}">
                        ${_.renderPreview((0,m.l8)(e),t,o,r)}
                      </div>
                    `}):i.qy`
                    <div
                      style="padding: 24px; text-align: center; color: var(--secondary-text-color); font-style: italic;"
                    >
                      ${(0,g.kg)("editor.popup.preview.no_modules",F,"No modules added. Add modules to this popup in the Layout tab.")}
                    </div>
                  `}
            </div>
          </div>
        </div>
      `;(0,i.XX)(U,l),T.set(E,t),C.set(E,q),requestAnimationFrame(()=>{const t=l.querySelector(".ultra-popup-overlay"),o=l.querySelector(".ultra-popup-close-button"),i=l.querySelector(".ultra-popup-container");if(t&&(t.removeAttribute("inert"),e||(t.style.pointerEvents="auto"),t.style.zIndex=y.toString()),o&&(o.removeAttribute("inert"),e||(o.style.pointerEvents="auto",o.style.cursor="pointer"),o.style.zIndex=ae.toString()),i&&(i.removeAttribute("inert"),e||(i.style.pointerEvents="auto")),t&&(t.onclick=e=>{e.target===t&&K(e)}),o&&(o.onclick=e=>{e.stopPropagation(),K(e)}),i&&(i.onclick=e=>{e.stopPropagation()}),v&&!e){const e=o||i;if(e)try{e.focus()}catch(e){}}})};const de=f.get(E)||!1,pe=b.has(E),ge=$.has(E),ue=!0===S.get(E),ce=de||ge,_e=ce&&pe&&T.get(E)!==t,me=ce&&pe&&C.get(E)!==q;if(ce&&(!pe||ue||_e||me))L(!1);else if(!ce&&pe){const e=b.get(E);if(e){const t=e._ultraInertObserver;t&&t.disconnect(),I(e),P(),e.remove(),b.delete(E),T.delete(E),C.delete(E)}}const ve=null!==this._isOpenedViaNavigation(x.id,o);if("page_load"===A||"logic"===A||"module"===A||ve)return i.qy`<div style="display: contents;"></div>`;const he=this.getHoverEffectClass(e),ye=this.buildStyleString(this.buildDesignStyles(e,t));return this.wrapWithAnimation(i.qy`<div class="${he}" style="${ye}">${(()=>{var e,r;if("page_load"===A||"logic"===A)return i.qy``;const n=x.trigger_alignment||"center",a="left"===n?"flex-start":"right"===n?"flex-end":"center";let l=i.qy``;if("button"===A){const e=x.trigger_button_text||"Open Popup",r=x.trigger_button_icon||"",n=x.trigger_button_full_width||!1,a=(0,h.NS)(o,"popup","trigger_button_style",x.trigger_button_style,"flat"),s=x.trigger_button_icon_position||"before",d=x.trigger_button_icon_size||"24px",p=!!x.trigger_button_text_color;let g=x.trigger_button_background_color||"var(--primary-color)";const u=this._getTriggerButtonEntityColor(x,t,o);u&&(g=u);const c=x.trigger_button_text_color||"white",_=(0,v.bT)(a,{background:g,hasCustomTextColor:p}),m=["display: flex","align-items: center","justify-content: center","gap: "+(r?"8px":"0"),"padding: 12px 24px",`color: ${_.color||c}`,"border-radius: var(--uc-r-8, 8px)","cursor: pointer","font-size: 16px","font-weight: 500","transition: all 0.2s ease","touch-action: manipulation","pointer-events: auto","min-height: 40px",n?"width: 100%":"",`background: ${_.background||g}`,`border: ${_.border||"none"}`,_.boxShadow?`box-shadow: ${_.boxShadow}`:"",_.backdropFilter?`backdrop-filter: ${_.backdropFilter}`:""].filter(Boolean).join("; "),y=r?i.qy`<ha-icon
              icon="${r}"
              style="--mdc-icon-size: ${d}; width: ${d}; height: ${d};"
            ></ha-icon>`:"";l=i.qy`
          <button
            type="button"
            class="swiper-no-swiping popup-trigger"
            data-uc-surface="${a}"
            data-uc-role="control"
            @click=${X}
            @touchstart=${H}
            @touchend=${Y(X)}
            style="${m}"
          >
            ${r&&"before"===s?y:""}
            ${e}
            ${r&&"after"===s?y:""}
          </button>
        `}else if("image"===A){const r=x.trigger_image_type||"url",n=x.trigger_image_full_width||!1;let a="";if("upload"===r||"url"===r)a=x.trigger_image_url||"",a&&"upload"===r&&(a=(0,c.VG)(t,a));else if("entity"===r&&x.trigger_image_entity){const i=this.resolveEntity(x.trigger_image_entity,o)||x.trigger_image_entity,r=null==t?void 0:t.states[i];(null===(e=null==r?void 0:r.attributes)||void 0===e?void 0:e.entity_picture)?(a=r.attributes.entity_picture,a.startsWith("/")&&(a=`${(t.hassUrl?t.hassUrl():"").replace(/\/$/,"")}${a}`)):(null==r?void 0:r.state)&&(r.state.startsWith("http")||r.state.startsWith("/")||r.state.startsWith("data:"))&&(a=r.state,a.startsWith("/"))&&(a=`${(t.hassUrl?t.hassUrl():"").replace(/\/$/,"")}${a}`)}l=a?i.qy`
            <img
              class="swiper-no-swiping popup-trigger"
              src="${a}"
              @click=${X}
              @touchstart=${H}
              @touchend=${Y(X)}
              style="${n?"width: 100%;":"max-width: 200px;"} cursor: pointer; border-radius: var(--uc-r-8, 8px); transition: transform 0.2s ease; display: block; touch-action: manipulation; pointer-events: auto;"
              @mouseover=${e=>{e.target.style.transform="scale(1.05)"}}
              @mouseout=${e=>{e.target.style.transform="scale(1)"}}
            />
          `:i.qy`
            <div
              style="padding: 24px; text-align: center; color: var(--secondary-text-color); border: 1px dashed var(--divider-color); border-radius: var(--uc-r-8, 8px);"
            >
              ${(0,g.kg)("editor.popup.trigger.no_image",F,"No image configured")}
            </div>
          `}else if("icon"===A){const e=x.trigger_icon||"mdi:information",n=x.trigger_icon_size||24,a=this._getTriggerIconEntityColor(x,t,o)||x.trigger_icon_color||"var(--primary-color)",s=x.trigger_icon_background||"none",d=["display: inline-flex","align-items: center","justify-content: center","cursor: pointer","transition: transform 0.2s ease","touch-action: manipulation","pointer-events: auto","none"!==s?`background: ${x.trigger_icon_background_color||"var(--secondary-background-color)"}`:"","none"!==s?`padding: ${null!==(r=x.trigger_icon_background_padding)&&void 0!==r?r:8}px`:"","circle"===s?"border-radius: 50%":"rounded-square"===s?"border-radius: var(--uc-r-8, 8px)":""].filter(Boolean).join("; ");l=i.qy`
          <div
            class="swiper-no-swiping popup-trigger"
            @click=${X}
            @touchstart=${H}
            @touchend=${Y(X)}
            style="${d}"
            @mouseover=${e=>{e.currentTarget.style.transform="scale(1.1)"}}
            @mouseout=${e=>{e.currentTarget.style.transform="scale(1)"}}
          >
            <ha-icon
              icon="${e}"
              style="--mdc-icon-size: ${n}px; color: ${a}; display: flex;"
            ></ha-icon>
          </div>
        `}return i.qy`
        <div
          class="swiper-no-swiping"
          style="display: inline-flex; justify-content: ${a}; width: ${"left"===n||"right"===n?"auto":"100%"}; pointer-events: auto;"
        >
          ${l}
        </div>
      `})()}</div>`,e,t)}validate(e){var t,o,i,r,n,a,l;const s=e,d=[...super.validate(e).errors];s.modules||d.push("Modules array is required"),s.show_title&&"custom"===s.title_mode&&!(null===(t=s.title_text)||void 0===t?void 0:t.trim())&&d.push("Title text is required when using custom title mode"),s.show_title&&"entity"===s.title_mode&&!(null===(o=s.title_entity)||void 0===o?void 0:o.trim())&&d.push("Title entity is required when using entity title mode");const p=s.trigger_type||"button";if("button"===p&&(null===(i=s.trigger_button_text)||void 0===i||i.trim()),"module"!==p||(null===(r=s.trigger_module_id)||void 0===r?void 0:r.trim())||d.push("Trigger module is required when using module trigger type"),"image"===p){const e=s.trigger_image_type||"url";"url"!==e||(null===(n=s.trigger_image_url)||void 0===n?void 0:n.trim())?"upload"!==e||(null===(a=s.trigger_image_url)||void 0===a?void 0:a.trim())?"entity"!==e||(null===(l=s.trigger_image_entity)||void 0===l?void 0:l.trim())||d.push("Image entity is required for image trigger"):d.push("Uploaded image is required for image trigger"):d.push("Image URL is required for image trigger")}if(s.modules&&s.modules.length>0)for(const e of s.modules)"popup"===e.type&&d.push("Popup modules cannot contain other popup modules");return{valid:0===d.length,errors:d}}_startAutoCloseTimer(e,t){this._clearAutoCloseTimer(t);const o=1e3*(e.auto_close_timer_seconds||30),i=window.setTimeout(()=>{if(!0!==w.get(t))return void x.delete(t);f.set(t,!1),$.delete(t),x.delete(t),P();const e=b.get(t);if(e){const o=e._ultraInertObserver;o&&o.disconnect(),I(e),e.remove(),b.delete(t)}this.triggerPreviewUpdate(!0)},o);x.set(t,i)}_clearAutoCloseTimer(e){const t=x.get(e);void 0!==t&&(window.clearTimeout(t),x.delete(e))}getStyles(){return`\n      ${a.m.getSliderStyles()}\n    `}}}};