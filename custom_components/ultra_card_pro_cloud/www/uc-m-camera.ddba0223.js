/*! For license information please see uc-m-camera.ddba0223.js.LICENSE.txt */
export const __webpack_esm_ids__=[4576];export const __webpack_esm_modules__={3333(t,e,i){i.d(e,{UltraCameraModule:()=>x});var n=i(2618),o=i(1299),a=i(7610),r=i(3496),s=i(7475),l=i(8465),d=i(5147),c=i(8938),m=i(9957),p=i(6478),h=i(1001),u=i(5320),g=i(9327),v=i(5121),f=i(5155),_=i(3361);const b=["entity","visible","overlay_text","overlay_color"],y=16/9;class x extends s.m{constructor(){super(...arguments),this._runtime=new Map,this._playerRefs=new Map,this.metadata={type:"camera",title:"Camera",description:"Display live camera feeds with comprehensive control options",author:"WJD Designs",version:"1.0.0",icon:"mdi:camera",category:"content",tags:["camera","live","feed","security","surveillance"]}}createDefault(t,e){return{id:t||this.generateId("camera"),type:"camera",entity:"",camera_name:"",show_name:!0,name_position:"top-left",tap_opens_fullscreen:!1,aspect_ratio_linked:!0,aspect_ratio_value:1.778,image_fit:"cover",crop_left:0,crop_top:0,crop_right:0,crop_bottom:0,show_controls:!1,show_audio_button:!0,view_mode:"auto",refresh_interval:10,audio_enabled:!1,image_quality:"high",rotation:0,show_unavailable:!0,fallback_image:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},unified_template_mode:!1,unified_template:"",design:{width:"100%",max_width:"500px",border_radius:"20px"},display_mode:"always",display_conditions:[]}}renderGeneralTab(t,e,i,o){var a;const r=t,s=(null===(a=e.locale)||void 0===a?void 0:a.language)||"en";return n.qy`
      ${this.injectUcFormStyles()}
      <div class="camera-module-settings">
        <!-- Camera Configuration Section -->
        ${this.renderSettingsSection((0,p.kg)("editor.camera.config.title",s,"Camera Configuration"),(0,p.kg)("editor.camera.config.desc",s,"Configure the camera entity and display settings."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",r.entity||"",t=>{o({entity:t}),this.triggerPreviewUpdate()},["camera"],(0,p.kg)("editor.camera.entity",s,"Camera Entity"))}
        </div>

        <!-- Camera Name Settings with toggle in header -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,p.kg)("editor.camera.show_name",s,"Show Camera Name"),"",e,{show_name:!1!==r.show_name},[this.booleanField("show_name")],t=>{o({show_name:t.detail.value.show_name}),this.triggerPreviewUpdate()})}
          ${!1!==r.show_name?n.qy`
                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.name",s,"Camera Name"),(0,p.kg)("editor.camera.name_desc",s,"Custom name for the camera. Leave empty to use entity name."),e,{camera_name:r.camera_name||""},[this.textField("camera_name")],t=>o(t.detail.value))}
                </div>

                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.name_position.title",s,"Name Position"),(0,p.kg)("editor.camera.name_position.desc",s,"Choose where the camera name appears as an overlay on the camera image."),e,{name_position:r.name_position||"top-left"},[this.selectField("name_position",[{value:"top-left",label:(0,p.kg)("editor.camera.name_position.options.top_left",s,"Top Left")},{value:"top-right",label:(0,p.kg)("editor.camera.name_position.options.top_right",s,"Top Right")},{value:"center",label:(0,p.kg)("editor.camera.name_position.options.center",s,"Center")},{value:"bottom-left",label:(0,p.kg)("editor.camera.name_position.options.bottom_left",s,"Bottom Left")},{value:"bottom-right",label:(0,p.kg)("editor.camera.name_position.options.bottom_right",s,"Bottom Right")},{value:"top-middle",label:(0,p.kg)("editor.camera.name_position.options.top_middle",s,"Top Middle")},{value:"bottom-middle",label:(0,p.kg)("editor.camera.name_position.options.bottom_middle",s,"Bottom Middle")}])],t=>{t.detail.value.name_position!==(r.name_position||"top-left")&&o(t.detail.value)})}
                </div>
              `:n.qy`
                <div
                  style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                >
                  ${(0,p.kg)("editor.camera.show_name_toggle.enable_toggle_desc",s,"Enable the toggle above to configure camera name display")}
                </div>
              `}
        </div>

        <!-- Tap to Open Fullscreen Settings -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,p.kg)("editor.camera.tap_opens_fullscreen",s,"Tap Camera Opens Fullscreen"),"",e,{tap_opens_fullscreen:!0===r.tap_opens_fullscreen},[this.booleanField("tap_opens_fullscreen")],t=>{o({tap_opens_fullscreen:t.detail.value.tap_opens_fullscreen}),this.triggerPreviewUpdate()})}

          <div
            class="field-description"
            style="margin-bottom: 16px; color: var(--secondary-text-color); font-style: italic; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-6, 6px); border-left: 4px solid var(--primary-color);"
          >
            <ha-icon icon="mdi:information" style="font-size: 14px; margin-right: 6px;"></ha-icon>
            ${(0,p.kg)("editor.camera.tap_opens_fullscreen_desc",s,"When enabled, tapping anywhere on the camera will open it in fullscreen mode.")}
          </div>
        </div>

        <!-- Display Settings Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-top: 32px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,p.kg)("editor.camera.display.title",s,"Display Settings")}
          </div>

          <!-- Stream Mode Selector -->
          <div style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,p.kg)("editor.camera.view_mode.title",s,"Stream Mode"),(0,p.kg)("editor.camera.view_mode.desc",s,"Auto: still images refreshed every 10 seconds, exactly like Home Assistant picture cards. Live: a continuous stream. Snapshot: still images on your own refresh interval."),e,{view_mode:r.view_mode||"auto"},[this.selectField("view_mode",[{value:"auto",label:(0,p.kg)("editor.camera.view_mode.options.auto",s,"Auto (HA Default)")},{value:"live",label:(0,p.kg)("editor.camera.view_mode.options.live",s,"Always Live")},{value:"snapshot",label:(0,p.kg)("editor.camera.view_mode.options.snapshot",s,"Snapshot Only")}])],t=>{t.detail.value.view_mode!==(r.view_mode||"auto")&&o(t.detail.value)})}
          </div>

          <!-- Live stream options -->
          ${"live"===(r.view_mode||"auto")?n.qy`
                <div style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.audio_enabled.title",s,"Enable Audio"),(0,p.kg)("editor.camera.audio_enabled.desc",s,"Start the stream unmuted where the browser allows it. Browsers block unmuted autoplay until you interact with the page, so the stream may start muted until you use the sound button."),e,{audio_enabled:!0===r.audio_enabled},[this.booleanField("audio_enabled")],t=>{o(t.detail.value),this.triggerPreviewUpdate()})}
                </div>

                <div style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.show_audio_button.title",s,"Sound Button"),(0,p.kg)("editor.camera.show_audio_button.desc",s,"Show a mute/unmute button over the stream."),e,{show_audio_button:!1!==r.show_audio_button},[this.booleanField("show_audio_button")],t=>{o(t.detail.value),this.triggerPreviewUpdate()})}
                </div>

                <div style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.show_controls.title",s,"Player Controls"),(0,p.kg)("editor.camera.show_controls.desc",s,"Show the browser's native video controls on the stream."),e,{show_controls:!0===r.show_controls},[this.booleanField("show_controls")],t=>{o(t.detail.value),this.triggerPreviewUpdate()})}
                </div>
              `:""}

          <!-- Image Fit -->
          <div style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,p.kg)("editor.camera.image_fit.title",s,"Image Fit"),(0,p.kg)("editor.camera.image_fit.desc",s,"How the feed fills the frame. Cover crops to fill, Contain shows the whole frame with bars, Fill stretches to the frame."),e,{image_fit:r.image_fit||"cover"},[this.selectField("image_fit",[{value:"cover",label:(0,p.kg)("editor.camera.image_fit.options.cover",s,"Cover")},{value:"contain",label:(0,p.kg)("editor.camera.image_fit.options.contain",s,"Contain")},{value:"fill",label:(0,p.kg)("editor.camera.image_fit.options.fill",s,"Fill")}])],t=>{t.detail.value.image_fit!==(r.image_fit||"cover")&&(o(t.detail.value),this.triggerPreviewUpdate())})}
          </div>

          <!-- Refresh Interval (only for Snapshot mode) -->
          ${"snapshot"===(r.view_mode||"auto")?n.qy`
                <div style="margin-top: 24px;">
                  ${this.renderConditionalFieldsGroup((0,p.kg)("editor.camera.snapshot_refresh.section_title",s,"Snapshot Refresh Settings"),n.qy`
                      ${l.Q.renderField((0,p.kg)("editor.camera.refresh_interval.title",s,"Refresh Interval (seconds)"),(0,p.kg)("editor.camera.refresh_interval.desc",s,"How often to refresh the camera snapshot automatically. Range: 1-300 seconds."),e,{refresh_interval:r.refresh_interval||10},[l.Q.createSchemaItem("refresh_interval",{number:{min:1,max:300,mode:"box"}})],t=>o({refresh_interval:t.detail.value.refresh_interval}))}
                    `)}
                </div>
              `:""}

          <!-- Dimensions Section -->
          <div style="margin-bottom: 32px;">
            <div
              class="field-title"
              style="font-size: 18px; font-weight: 700; margin-bottom: 8px; color: var(--primary-color);"
            >
              ${(0,p.kg)("editor.camera.dimensions.title",s,"Dimensions")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-6, 6px); border-left: 4px solid var(--primary-color);"
            >
              <ha-icon icon="mdi:information" style="font-size: 14px; margin-right: 6px;"></ha-icon>
              ${(0,p.kg)("editor.camera.dimensions.responsive_note",s,"Camera now uses responsive sizing by default (100% width). Use the Design tab for full control over dimensions, or adjust these fallback pixel dimensions for specific use cases.")}
            </div>

            <style>
              .aspect-ratio-link-btn {
                width: 40px;
                height: 40px;
                padding: 0;
                border: 2px solid var(--divider-color);
                border-radius: 50%;
                background: var(--secondary-background-color);
                color: var(--primary-text-color);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                flex-shrink: 0;
                margin: 0 auto;
                position: relative;
              }

              .aspect-ratio-link-btn.linked {
                border-color: var(--primary-color);
                background: var(--primary-color);
                color: var(--text-primary-color, #fff);
                transform: scale(1.05);
              }

              .aspect-ratio-link-btn:hover {
                transform: scale(1.1);
                border-color: var(--primary-color);
              }

              .aspect-ratio-link-btn.linked:hover {
                background: var(--primary-color);
                opacity: 0.9;
              }

              .aspect-ratio-link-btn ha-icon {
                font-size: 20px;
                transition: transform 0.2s ease;
              }

              .dimensions-container {
                display: flex;
                flex-direction: column;
                gap: 16px;
              }

              .dimension-group {
                display: flex;
                flex-direction: column;
                gap: 8px;
              }
            </style>

            <div class="dimensions-container">
              <div class="dimension-group">
                ${this.renderSliderField((0,p.kg)("editor.camera.width",s,"Width"),(0,p.kg)("editor.camera.width_desc",s,"Set the width of the camera display. Range: 100–1000px"),r.width||320,320,100,1e3,1,t=>this._handleDimensionChange(r,"width",t,o),"px")}
              </div>

              <!-- Link/Unlink Button -->
              <div style="display: flex; justify-content: center; margin: 8px 0;">
                <button
                  class="aspect-ratio-link-btn ${!1!==r.aspect_ratio_linked?"linked":""}"
                  @click=${()=>{const t=!r.aspect_ratio_linked,e={aspect_ratio_linked:t};if(t){const t=r.width||320,i=r.height||180;e.aspect_ratio_value=t/i}o(e)}}
                  title="${!1!==r.aspect_ratio_linked?(0,p.kg)("editor.camera.unlink_aspect",s,"Unlink aspect ratio"):(0,p.kg)("editor.camera.link_aspect",s,"Link aspect ratio")}"
                >
                  <ha-icon
                    icon="${!1!==r.aspect_ratio_linked?"mdi:link-variant":"mdi:link-variant-off"}"
                  ></ha-icon>
                </button>
              </div>

              <div class="dimension-group">
                ${this.renderSliderField((0,p.kg)("editor.camera.height",s,"Height"),(0,p.kg)("editor.camera.height_desc",s,"Set the height of the camera display. Range: 100–1000px"),r.height||180,180,100,1e3,1,t=>this._handleDimensionChange(r,"height",t,o),"px")}
              </div>
            </div>

            ${!1!==r.aspect_ratio_linked?n.qy`
                  <div
                    style="margin-top: 12px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-8, 8px); border-left: 4px solid var(--primary-color);"
                  >
                    <div
                      style="font-size: 13px; color: var(--primary-color); font-weight: 500; margin-bottom: 4px;"
                    >
                      <ha-icon
                        icon="mdi:link-variant"
                        style="font-size: 14px; margin-right: 6px;"
                      ></ha-icon>
                      ${(0,p.kg)("editor.camera.aspect_linked.title",s,"Aspect Ratio Linked")}
                    </div>
                    <div
                      style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                    >
                      ${(0,p.kg)("editor.camera.aspect_linked.desc",s,"Dimensions maintain {ratio}:1 ratio. Adjusting one dimension automatically updates the other to maintain proportions.").replace("{ratio}",`${(1*(r.aspect_ratio_value||1.778)).toFixed(2)}`)}
                    </div>
                  </div>
                `:n.qy`
                  <div
                    style="margin-top: 12px; padding: 12px; background: rgba(var(--rgb-secondary-text-color), 0.1); border-radius: var(--uc-r-8, 8px); border-left: 4px solid var(--secondary-text-color);"
                  >
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); font-weight: 500; margin-bottom: 4px;"
                    >
                      <ha-icon
                        icon="mdi:link-variant-off"
                        style="font-size: 14px; margin-right: 6px;"
                      ></ha-icon>
                      ${(0,p.kg)("editor.camera.aspect_independent.title",s,"Independent Dimensions")}
                    </div>
                    <div
                      style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                    >
                      ${(0,p.kg)("editor.camera.aspect_independent.desc",s,"Width and height can be adjusted independently. Click the link button above to maintain aspect ratio.")}
                    </div>
                  </div>
                `}
          </div>

          <!-- Rotation Field -->
          <div class="dimension-group" style="margin-top: 16px;">
            ${this.renderSliderField((0,p.kg)("editor.camera.rotation",s,"Rotation"),(0,p.kg)("editor.camera.rotation_desc",s,"Rotate the camera image clockwise (0–360 degrees)."),r.rotation||0,0,0,360,1,t=>{o({rotation:t})},"°")}
          </div>
        </div>

        <!-- Crop & Position Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,p.kg)("editor.camera.crop.title",s,"Crop & Position")}
          </div>
          <div
            class="field-description"
            style="margin-bottom: 20px; color: var(--secondary-text-color); font-style: italic;"
          >
            ${(0,p.kg)("editor.camera.crop.desc",s,"Adjust the crop and position of the camera view. Useful for focusing on specific areas or removing unwanted edges.")}
          </div>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            <!-- Left Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.left_title",s,"Left Crop"),(0,p.kg)("editor.camera.crop.left_desc",s,"Crop from the left edge. Higher values show less of the left side."),r.crop_left||0,0,0,50,1,t=>{o({crop_left:t})},"%")}

            <!-- Right Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.right_title",s,"Right Crop"),(0,p.kg)("editor.camera.crop.right_desc",s,"Crop from the right edge. Higher values show less of the right side."),r.crop_right||0,0,0,50,1,t=>{o({crop_right:t})},"%")}

            <!-- Top Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.top_title",s,"Top Crop"),(0,p.kg)("editor.camera.crop.top_desc",s,"Crop from the top edge. Higher values show less of the top area."),r.crop_top||0,0,0,50,1,t=>{o({crop_top:t})},"%")}

            <!-- Bottom Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.bottom_title",s,"Bottom Crop"),(0,p.kg)("editor.camera.crop.bottom_desc",s,"Crop from the bottom edge. Higher values show less of the bottom area."),r.crop_bottom||0,0,0,50,1,t=>{o({crop_bottom:t})},"%")}
          </div>

          <!-- Crop Status -->
          ${(r.crop_left||0)+(r.crop_top||0)+(r.crop_right||0)+(r.crop_bottom||0)>0?n.qy`
                <div
                  style="margin-top: 16px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-8, 8px); border-left: 4px solid var(--primary-color);"
                >
                  <div
                    style="font-size: 13px; color: var(--primary-color); font-weight: 500; margin-bottom: 4px;"
                  >
                    <ha-icon icon="mdi:crop" style="font-size: 14px; margin-right: 6px;"></ha-icon>
                    ${(0,p.kg)("editor.camera.crop.active_applied",s,"Active Crops Applied")}
                  </div>
                  <div
                    style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                  >
                    L: ${r.crop_left||0}% | T: ${r.crop_top||0}% | R:
                    ${r.crop_right||0}% | B: ${r.crop_bottom||0}%
                  </div>
                </div>
              `:""}

          <!-- Reset All Crops Button -->
          <div style="margin-top: 20px; text-align: center;">
            <button
              style="
                padding: 8px 16px;
                border: 1px solid var(--primary-color);
                border-radius: var(--uc-r-6, 6px);
                background: transparent;
                color: var(--primary-color);
                cursor: pointer;
                font-size: 13px;
                font-weight: 500;
                transition: all 0.2s ease;
              "
              @click=${()=>o({crop_left:0,crop_top:0,crop_right:0,crop_bottom:0})}
              @mouseover=${t=>{const e=t.target;e.style.background="var(--primary-color)",e.style.color="white"}}
              @mouseout=${t=>{const e=t.target;e.style.background="transparent",e.style.color="var(--primary-color)"}}
            >
              <ha-icon icon="mdi:crop-free" style="margin-right: 6px; font-size: 14px;"></ha-icon>
              ${(0,p.kg)("editor.camera.crop.reset_all",s,"Reset All Crops")}
            </button>
          </div>
        </div>

        <!-- Link configuration intentionally omitted for Camera module per design guidelines -->

        <!-- Unified Template Section -->
        <div class="template-section">
          <div class="template-header">
            <div class="switch-container">
              <div class="switch-label-row">
                <label class="switch-label"
                  >${(0,p.kg)("editor.camera.unified_template.toggle",s,"Template Mode")}</label
                >
                <button
                  class="help-btn"
                  style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                  title="${(0,p.kg)("editor.camera.unified_template.cheatsheet",s,"Template cheatsheet")}"
                  @click=${t=>{t.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"camera"}}))}}
                >
                  <ha-icon
                    icon="mdi:help-circle"
                    style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"
                  ></ha-icon>
                </button>
              </div>
              ${this.renderUcForm(e,{unified_template_mode:r.unified_template_mode||!1},[this.booleanField("unified_template_mode")],t=>o({unified_template_mode:t.detail.value.unified_template_mode}))}
            </div>
            <div class="template-description">
              ${(0,p.kg)("editor.camera.unified_template.desc",s,"Return JSON: entity, visible, overlay_text, overlay_color — or a plain entity_id string.")}
            </div>
          </div>

          ${r.unified_template_mode?n.qy`
                <div
                  class="template-content"
                  @mousedown=${t=>{const e=t.target;e.closest("ultra-template-editor")||e.closest(".cm-editor")||t.stopPropagation()}}
                  @dragstart=${t=>t.stopPropagation()}
                  @insert-snippet=${t=>{var e,i,n;const o=t.currentTarget.querySelector("ultra-template-editor");null===(e=null==o?void 0:o.insertAtCursor)||void 0===e||e.call(o,null!==(n=null===(i=t.detail)||void 0===i?void 0:i.value)&&void 0!==n?n:"")}}
                >
                  <ultra-template-editor
                    .hass=${e}
                    .value=${r.unified_template||""}
                    .placeholder=${"{\n  \"entity\": \"{{ 'camera.outdoor' if is_state('weather.home', 'sunny') else 'camera.indoor' }}\"\n}"}
                    .minHeight=${100}
                    .maxHeight=${300}
                    @value-changed=${t=>{o({unified_template:t.detail.value})}}
                  ></ultra-template-editor>
                  ${this.renderTemplateKeyWarning(r.unified_template,b,s)}
                </div>
              `:""}
        </div>
      </div>
    `}renderActionsTab(t,e,i,n){return d.A.render(t,e,t=>n(t))}renderPreview(t,e,i,a){var r,s,l;const d=t,c=d,m=(null===(r=e.locale)||void 0===r?void 0:r.language)||"en";this._hass=e;const h=!!d.unified_template_mode&&!(!d.unified_template||!String(d.unified_template).trim());if(!(h||d.entity&&""!==d.entity.trim()))return this.renderGradientErrorState((0,p.kg)("editor.camera.error_no_entity",m,"Select Camera Entity"),(0,p.kg)("editor.camera.error_no_entity_desc",m,"Choose a camera entity in the General tab"),"mdi:camera-outline");if(h&&!String(d.unified_template).trim())return this.renderGradientErrorState((0,p.kg)("editor.camera.error_no_template",m,"Configure Template"),(0,p.kg)("editor.camera.error_no_template_desc",m,"Enter unified template in the General tab"),"mdi:camera-outline");const _=c.design||{};let b,x,w,k;if(d.unified_template_mode&&d.unified_template&&(!this._templateService&&e?this._templateService=new u.I(e):this._templateService&&e&&this._templateService.updateHass(e),e)){e.__uvc_template_strings||(e.__uvc_template_strings={});const t=(0,f.KD)(d.unified_template,e,i),n=this._hashString(t),o=`unified_camera_${d.id}_${n}`;if(this._templateService){const n=(0,g.pL)(d.entity||"",e,{camera_name:d.camera_name,live_view:d.live_view}),a=(0,g.jh)(d.entity||"",e);this._templateService.subscribeToTemplate(t,o,()=>{"undefined"!=typeof window&&this.triggerPreviewUpdate()},n,i,a)}const a=null===(s=e.__uvc_template_strings)||void 0===s?void 0:s[o];if(a&&""!==String(a).trim()){const t=(0,v.cv)(a);if(!(0,v.HD)(t)){const e=(0,v.B8)(t)||t.entity;e&&(b=e),void 0!==t.visible&&(x=t.visible),t.overlay_text&&(w=t.overlay_text),t.overlay_color&&(k=t.overlay_color)}}}if(!1===x)return n.qy``;let $=b||d.entity;const S=this._runtimeFor(d.id),T=d.view_mode||"auto",C="live"===T;this._isEditorOpen()?($&&this._scheduleCameraUpdate($,C,d,e),$=null!==(l=S.appliedEntity)&&void 0!==l?l:$):$&&this._isValidCameraEntity(e,$)&&(S.appliedEntity=$,S.appliedLive=C);const E=$?e.states[$]:null,F=!E||"unavailable"===E.state;S.renderedEntity=$;const z=`${d.id}|${$||"none"}|${T}`,M=w||d.camera_name||(E?E.attributes.friendly_name||E.entity_id:"Camera"),A={width:"100%",maxWidth:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"left"===_.alignment?"flex-start":"right"===_.alignment?"flex-end":"center",justifyContent:"center",color:_.color||this.getTextColor(c),fontFamily:_.font_family||this.getTextFont(c),fontSize:_.font_size?"number"==typeof _.font_size?`${_.font_size}px`:_.font_size:this.getTextSize(c),fontWeight:_.font_weight||this.getTextWeight(c),textTransform:_.text_transform||void 0,letterSpacing:_.letter_spacing||void 0,lineHeight:_.line_height||void 0,textShadow:_.text_shadow||void 0},L=this._clampCrop(d.crop_left),P=this._clampCrop(d.crop_right),D=this._clampCrop(d.crop_top),O=this._clampCrop(d.crop_bottom),q=Math.max(1,100-L-P),R=Math.max(1,100-D-O),I=L>0||P>0||D>0||O>0,U=_.height&&""!==_.height&&"auto"!==_.height,j=d.width||320,H=d.height||180,W=(!1!==d.aspect_ratio_linked&&(d.aspect_ratio_value||0)>0?d.aspect_ratio_value:j/H)||y,N=W*q/R,B=this._resolveFitMode(d.image_fit),X=d.rotation||0,Y={display:"block",position:"absolute",top:I?`${(-D/R*100).toFixed(4)}%`:"0",left:I?`${(-L/q*100).toFixed(4)}%`:"0",width:I?`${(1e4/q).toFixed(4)}%`:"100%",height:I?`${(1e4/R).toFixed(4)}%`:"100%",transform:0!==X?`rotate(${X}deg)`:void 0,objectFit:B},V={width:_.width||`${Math.max(50,j*q/100).toFixed(0)}px`,height:U?_.height:void 0,aspectRatio:U?void 0:N.toFixed(4),maxWidth:_.max_width||void 0,minWidth:_.min_width||void 0,maxHeight:_.max_height||void 0,minHeight:_.min_height||void 0,position:"relative",overflow:_.overflow||"hidden",borderRadius:_.border_radius||"0px",background:_.background_color||"transparent",backgroundImage:this.getBackgroundImageWithDesign(_,c,e)||void 0,border:this.getBorderWithDesign(_,c)||void 0,padding:"0",margin:this.getMarginWithDesign(_,c),boxShadow:_.box_shadow||void 0,backdropFilter:_.backdrop_filter||void 0,clipPath:_.clip_path||void 0,"--video-max-height":"100%"},G=d.name_position||"top-left",K=this.getCameraNamePositionStyles(G,c,_,k),Q=C&&this._isAudioActive(d),Z=C&&!1!==d.show_audio_button,J=!1!==d.show_name?n.qy`<div
            class="camera-name-overlay"
            style="${this.buildStyleString(K)}"
          >
            ${M}
          </div>`:"",tt=`font-weight: ${_.font_weight||this.getTextWeight(c)}; font-size: ${_.font_size?"number"==typeof _.font_size?`${_.font_size}px`:_.font_size:this.getTextSize(c)};`,et=`font-size: ${"number"==typeof _.font_size?`${Math.max(10,_.font_size-2)}px`:this.getSmallTextSize(c)}; margin-top: 4px; opacity: 0.9;`,it=t=>this.buildStyleString({position:"absolute",inset:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:t,color:_.color||this.getTextColor(c),fontFamily:_.font_family||this.getTextFont(c)}),nt=n.qy`
      <div
        class="camera-module-container"
        data-uc-camera-id="${d.id}"
        style="${this.buildStyleString(A)}"
      >
        <div class="camera-image-container" style="${this.buildStyleString(V)}">
          ${$?F?n.qy`
                  <div
                    class="camera-unavailable"
                    style="${it("var(--error-color, #f44336)")}"
                  >
                    ${d.fallback_image?n.qy`
                          <img
                            src=${d.fallback_image}
                            alt="Fallback"
                            style="width: 100%; height: 100%; object-fit: ${B};"
                          />
                        `:n.qy`
                          <ha-icon
                            icon="mdi:camera-off"
                            style="font-size: 48px; margin-bottom: 8px;"
                          ></ha-icon>
                          <span style="${tt}"
                            >${(0,p.kg)("editor.camera.unavailable",m,"Camera Unavailable")}</span
                          >
                          <span style="${et}">${$}</span>
                        `}
                  </div>
                  ${J}
                `:n.qy`
                  ${(0,o.D)(z,this._renderPlayer(d,e,{cameraEntity:$,stateObj:E,viewMode:T,mediaStyles:Y,fitMode:B,sourceRatio:W,audioActive:Q,state:S}))}
                  ${J}
                  ${Z?n.qy`
                        <button
                          type="button"
                          class="camera-audio-toggle ${Q?"active":"muted"}"
                          title="${Q?(0,p.kg)("editor.camera.audio.mute",m,"Mute"):(0,p.kg)("editor.camera.audio.unmute",m,"Unmute")}"
                          aria-label="${Q?(0,p.kg)("editor.camera.audio.mute",m,"Mute"):(0,p.kg)("editor.camera.audio.unmute",m,"Unmute")}"
                          @mousedown=${t=>t.stopPropagation()}
                          @touchstart=${t=>t.stopPropagation()}
                          @click=${t=>this._toggleAudio(t,d)}
                        >
                          <ha-icon
                            icon="${Q?"mdi:volume-high":"mdi:volume-off"}"
                          ></ha-icon>
                        </button>
                      `:""}
                `:n.qy`
                <div
                  class="camera-unavailable"
                  style="${it("var(--warning-color, #ff9800)")}"
                >
                  <ha-icon
                    icon="mdi:camera-plus"
                    style="font-size: 48px; margin-bottom: 8px;"
                  ></ha-icon>
                  <span style="${tt}"
                    >${(0,p.kg)("editor.camera.error_no_entity",m,"Select Camera Entity")}</span
                  >
                  <span style="${et}"
                    >${(0,p.kg)("editor.camera.error_no_entity_desc",m,"Choose a camera entity in the General tab")}</span
                  >
                </div>
                ${J}
              `}
        </div>
      </div>
    `,ot=this.getHoverEffectClass(t),at=this.buildStyleString(this.buildDesignStyles(t,e)),rt=this.hasActiveLink(d)?n.qy`<div
          class="camera-module-clickable ${ot}"
          style="${at}"
          @click=${t=>this.handleClick(t,d,e)}
          @dblclick=${t=>this.handleDoubleClick(t,d,e)}
          @mousedown=${t=>this.handleMouseDown(t,d,e)}
          @mouseup=${t=>this.handleMouseUp(t,d,e)}
          @mouseleave=${t=>this.handleMouseLeave(t,d,e)}
          @touchstart=${t=>this.handleTouchStart(t,d,e)}
          @touchend=${t=>this.handleTouchEnd(t,d,e)}
        >
          ${nt}
        </div>`:n.qy`<div class="camera-module-container ${ot}" style="${at}">
          ${nt}
        </div>`;return this.wrapWithAnimation(rt,t,e)}_renderPlayer(t,e,i){const{cameraEntity:o,stateObj:r,viewMode:s,mediaStyles:l,fitMode:d,sourceRatio:c,audioActive:m}=i,p=this.buildStyleString(l),h=this._playerRef(t.id);return"live"===s?n.qy`
        <ha-camera-stream
          ${(0,a.K)(h)}
          class="camera-image"
          style="${p}"
          .hass=${e}
          .stateObj=${r}
          .fitMode=${d}
          .muted=${!m}
          .controls=${!0===t.show_controls}
          @load=${()=>this._syncAudio(t)}
        ></ha-camera-stream>
      `:"snapshot"===s?(this._ensureSnapshot(t,o),n.qy`
        <img
          ${(0,a.K)(h)}
          class="camera-image"
          style="${p}"
          alt=${o}
          src=${i.state.snapshotSrc||""}
          @error=${()=>this._onSnapshotError(t,o)}
        />
      `):n.qy`
      <hui-image
        ${(0,a.K)(h)}
        class="camera-image"
        style="${p}"
        .hass=${e}
        .cameraImage=${o}
        .cameraView=${"auto"}
        .fitMode=${d}
        .aspectRatio=${`${c.toFixed(4)}:1`}
      ></hui-image>
    `}_runtimeFor(t){let e=this._runtime.get(t);return e||(e={},this._runtime.set(t,e)),e}_playerRef(t){let e=this._playerRefs.get(t);return e||(e=e=>{this._runtimeFor(t).player=e,e||setTimeout(()=>{var e;(null===(e=this._runtime.get(t))||void 0===e?void 0:e.player)||(this._clearTimers(t),this._runtime.delete(t),this._playerRefs.delete(t))},0)},this._playerRefs.set(t,e)),e}_clearTimers(t){const e=this._runtime.get(t);e&&(e.snapshotTimer&&(clearInterval(e.snapshotTimer),e.snapshotTimer=void 0),e.updateTimer&&(clearTimeout(e.updateTimer),e.updateTimer=void 0),e.clickTimeout&&(clearTimeout(e.clickTimeout),e.clickTimeout=void 0),e.holdTimeout&&(clearTimeout(e.holdTimeout),e.holdTimeout=void 0))}_clampCrop(t){return"number"==typeof t&&isFinite(t)?Math.min(49,Math.max(0,t)):0}_resolveFitMode(t){switch(t){case"contain":case"scale-down":return"contain";case"fill":return"fill";default:return"cover"}}_isEditorOpen(){try{return!!document.querySelector("hui-dialog-edit-card, hui-card-edit-mode")}catch(t){return!1}}_isValidCameraEntity(t,e){var i;if(!t||!e)return!1;const n=null===(i=t.states)||void 0===i?void 0:i[e];return!!n&&"camera"===e.split(".")[0]&&"unavailable"!==n.state&&"unknown"!==n.state}_scheduleCameraUpdate(t,e,i,n){const o=this._runtimeFor(i.id);o.appliedEntity===t&&o.appliedLive===e||(o.pendingProps={entity:t,live:e},o.updateTimer&&clearTimeout(o.updateTimer),o.updateTimer=setTimeout(()=>{o.updateTimer=void 0;const t=o.pendingProps;t&&this._isValidCameraEntity(n,t.entity)&&(o.appliedEntity=t.entity,o.appliedLive=t.live,o.pendingProps=void 0,this.triggerPreviewUpdate())},200))}_ensureSnapshot(t,e){const i=this._runtimeFor(t.id),n=1e3*Math.min(300,Math.max(1,t.refresh_interval||10));i.snapshotEntity!==e&&(i.snapshotEntity=e,i.snapshotSrc=void 0,i.snapshotTimer&&(clearInterval(i.snapshotTimer),i.snapshotTimer=void 0)),i.snapshotSrc||this._refreshSnapshot(t.id,e,!1),i.snapshotTimer&&i.snapshotIntervalMs!==n&&(clearInterval(i.snapshotTimer),i.snapshotTimer=void 0),i.snapshotTimer||(i.snapshotIntervalMs=n,i.snapshotTimer=setInterval(()=>this._refreshSnapshot(t.id,e,!0),n)),this._ensureVisibilityListener()}_refreshSnapshot(t,e,i){var n,o;const a=this._runtime.get(t),r=this._hass;if(!a||!r)return;if(i&&"undefined"!=typeof document&&document.hidden)return;const s=null===(n=r.states)||void 0===n?void 0:n[e],l=null===(o=null==s?void 0:s.attributes)||void 0===o?void 0:o.entity_picture;if(!l)return void this._resolveSignedSnapshot(t,e);const d="function"==typeof r.hassUrl?r.hassUrl(l):l,c=`${d}${d.includes("?")?"&":"?"}_uc=${Date.now()}`;a.snapshotSrc=c;const m=a.player;i&&(m instanceof HTMLImageElement?m.src=c:this.triggerPreviewUpdate())}async _resolveSignedSnapshot(t,e){const i=this._runtime.get(t),n=this._hass;if(i&&n&&!i.snapshotInFlight){i.snapshotInFlight=!0;try{const t=await n.callWS({type:"auth/sign_path",path:`/api/camera_proxy/${e}`});if(!(null==t?void 0:t.path))return;const o="function"==typeof n.hassUrl?n.hassUrl(t.path):t.path;i.snapshotSrc=`${o}${o.includes("?")?"&":"?"}_uc=${Date.now()}`;const a=i.player;a instanceof HTMLImageElement?a.src=i.snapshotSrc:this.triggerPreviewUpdate()}catch(t){}finally{i.snapshotInFlight=!1}}}_onSnapshotError(t,e){const i=this._runtimeFor(t.id);if(t.fallback_image){const e=i.player;return void(e instanceof HTMLImageElement&&e.src!==t.fallback_image&&(e.src=t.fallback_image))}this._resolveSignedSnapshot(t.id,e)}_ensureVisibilityListener(){this._visibilityListener||"undefined"==typeof document||(this._visibilityListener=()=>{document.hidden||this._runtime.forEach((t,e)=>{t.snapshotTimer&&t.snapshotEntity&&this._refreshSnapshot(e,t.snapshotEntity,!0)})},document.addEventListener("visibilitychange",this._visibilityListener))}renderLogicTab(t,e,i,n){return c.X.render(t,e,t=>n(t))}validate(t){const e=t,i=[...super.validate(t).errors];return"snapshot"===e.view_mode&&e.refresh_interval&&(e.refresh_interval<1||e.refresh_interval>300)&&i.push("Refresh interval must be between 1 and 300 seconds for snapshot mode"),e.border_radius&&isNaN(Number(e.border_radius))&&i.push("Border radius must be a number"),void 0!==e.rotation&&null!==e.rotation&&(isNaN(Number(e.rotation))||e.rotation<0||e.rotation>360)&&i.push("Rotation must be a number between 0 and 360 degrees"),e.tap_action&&e.tap_action.action&&i.push(...this.validateAction(e.tap_action)),e.hold_action&&e.hold_action.action&&i.push(...this.validateAction(e.hold_action)),e.double_tap_action&&e.double_tap_action.action&&i.push(...this.validateAction(e.double_tap_action)),{valid:0===i.length,errors:i}}handleClick(t,e,i,n){t.preventDefault();const o=this._runtimeFor(e.id);o.clickTimeout&&clearTimeout(o.clickTimeout),e.double_tap_action&&"nothing"!==e.double_tap_action.action?o.clickTimeout=setTimeout(()=>{o.clickTimeout=void 0,this.handleTapAction(t,e,i,n)},300):this.handleTapAction(t,e,i,n)}handleDoubleClick(t,e,i,n){t.preventDefault();const o=this._runtimeFor(e.id);o.clickTimeout&&(clearTimeout(o.clickTimeout),o.clickTimeout=void 0),this.handleDoubleAction(t,e,i,n)}handleMouseDown(t,e,i,n){const o=this._runtimeFor(e.id);o.isHolding=!1,o.holdTimeout=setTimeout(()=>{o.isHolding=!0,this.handleHoldAction(t,e,i,n)},500)}handleMouseUp(t,e,i){const n=this._runtimeFor(e.id);n.holdTimeout&&(clearTimeout(n.holdTimeout),n.holdTimeout=void 0)}handleMouseLeave(t,e,i){const n=this._runtimeFor(e.id);n.holdTimeout&&(clearTimeout(n.holdTimeout),n.holdTimeout=void 0),n.isHolding=!1}handleTouchStart(t,e,i,n){this.handleMouseDown(t,e,i,n)}handleTouchEnd(t,e,i){this.handleMouseUp(t,e,i)}handleTapAction(t,e,i,n){if(!this._runtimeFor(e.id).isHolding)if(!0!==e.tap_opens_fullscreen)if(e.tap_action){const o="default"===e.tap_action.action?{action:"more-info",entity:e.entity}:e.tap_action;m.K.handleAction(o,i,t.target,n,e.entity,e)}else e.entity&&m.K.handleAction({action:"more-info",entity:e.entity},i,t.target,n,e.entity,e);else this.handleFullscreenClick(t,e,n)}handleHoldAction(t,e,i,n){e.hold_action&&"nothing"!==e.hold_action.action&&m.K.handleAction(e.hold_action,i,t.target,n,e.entity,e)}handleDoubleAction(t,e,i,n){e.double_tap_action&&"nothing"!==e.double_tap_action.action&&m.K.handleAction(e.double_tap_action,i,t.target,n,e.entity,e)}handleFullscreenClick(t,e,n){t.stopPropagation(),t.preventDefault(),!1!==(null==n?void 0:n.haptic_feedback)&&Promise.resolve().then(()=>i(8153)).then(({forwardHaptic:t})=>{t("medium")});const o=t.currentTarget||t.target;this.createFullscreenModal(e,o)}_resolveFullscreenHost(t){var e;const i=(null===(e=null==t?void 0:t.closest)||void 0===e?void 0:e.call(t,".ultra-popup-portal"))?h.Mu.GRAPH_TOOLTIP:h.Mu.CAMERA_FULLSCREEN_OVERLAY,n=document.querySelector("home-assistant");return(null==n?void 0:n.shadowRoot)?{host:n.shadowRoot,zIndex:i}:{host:(0,_.I)(t,i).host,zIndex:i}}createFullscreenModal(t,e){var i,n,o,a,s,l,d;document.querySelectorAll('[id^="ultra-camera-fullscreen-"]').forEach(t=>{var e,i,n;return null!==(n=null===(i=(e=t)._ultraClose)||void 0===i?void 0:i.call(e))&&void 0!==n?n:t.remove()});const c=document.querySelector("home-assistant");null===(i=null==c?void 0:c.shadowRoot)||void 0===i||i.querySelectorAll('[id^="ultra-camera-fullscreen-"]').forEach(t=>{var e,i,n;return null!==(n=null===(i=(e=t)._ultraClose)||void 0===i?void 0:i.call(e))&&void 0!==n?n:t.remove()});const{host:m,zIndex:p}=this._resolveFullscreenHost(e),u=p>=h.Mu.GRAPH_TOOLTIP?p:p+1,g=(null===(n=this._runtime.get(t.id))||void 0===n?void 0:n.renderedEntity)||t.entity;if(!g)return void r.f.error("No camera entity available");const v="ultra-camera-fullscreen-"+Date.now(),f=document.createElement("div");f.id=v,f.style.cssText=`\n      position: fixed !important;\n      top: 0 !important;\n      left: 0 !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      background: rgba(0,0,0,0.95) !important;\n      z-index: ${p} !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      backdrop-filter: blur(10px) !important;\n      touch-action: none !important;\n      user-select: none !important;\n      -webkit-user-select: none !important;\n      -webkit-touch-callout: none !important;\n    `;const _=document.createElement("div");_.style.cssText="\n      position: relative !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      overflow: hidden !important;\n      background: black !important;\n    ";const b=document.createElement("div");b.id=v+"-camera-container",b.style.cssText="\n      width: 100% !important;\n      height: 100% !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      min-height: 300px !important;\n      touch-action: none !important;\n      user-select: none !important;\n    ";const y=document.createElement("button");if(y.innerHTML="✕",y.style.cssText=`\n      position: absolute !important;\n      top: 20px !important;\n      right: 20px !important;\n      width: 50px !important;\n      height: 50px !important;\n      border: 3px solid rgba(255,255,255,0.7) !important;\n      background: rgba(0,0,0,0.8) !important;\n      color: white !important;\n      font-size: 30px !important;\n      font-weight: bold !important;\n      cursor: pointer !important;\n      border-radius: 50% !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      z-index: ${u} !important;\n      backdrop-filter: blur(4px) !important;\n      box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;\n      font-family: Arial, sans-serif !important;\n      line-height: 1 !important;\n      transition: all 0.2s ease !important;\n    `,!1!==t.show_name){const e=document.createElement("div");e.style.cssText="\n        position: absolute !important;\n        top: 20px !important;\n        left: 20px !important;\n        padding: 10px 16px !important;\n        background: rgba(0,0,0,0.8) !important;\n        color: white !important;\n        border-radius: var(--uc-r-8, 8px) !important;\n        font-size: 16px !important;\n        font-weight: 500 !important;\n        backdrop-filter: blur(4px) !important;\n        text-shadow: 0 1px 2px rgba(0,0,0,0.8) !important;\n        border: 1px solid rgba(255,255,255,0.2) !important;\n        box-shadow: 0 2px 8px rgba(0,0,0,0.4) !important;\n      ",e.textContent=t.camera_name||g,_.appendChild(e)}_.appendChild(b),_.appendChild(y),f.appendChild(_),m.appendChild(f);const x=()=>{const t=f._restoreViewport;t&&t(),k.disconnect(),b.replaceChildren(),f.remove(),document.removeEventListener("keydown",T),document.body.style.overflow=""};f._ultraClose=x;const w=()=>{f.removeAttribute("inert"),y.removeAttribute("inert"),f.style.pointerEvents="auto",y.style.pointerEvents="auto",y.addEventListener("click",t=>{t.stopPropagation(),t.preventDefault(),x()},!0),f.addEventListener("click",t=>{t.target===f&&(t.stopPropagation(),t.preventDefault(),x())},!0)};w(),setTimeout(w,100);const k=new MutationObserver(t=>{t.forEach(t=>{if("attributes"===t.type&&"inert"===t.attributeName){const e=t.target;e!==f&&e!==y||(e.removeAttribute("inert"),e.style.pointerEvents="auto")}})});k.observe(f,{attributes:!0}),k.observe(y,{attributes:!0});const $=this._hass||(null===(o=document.querySelector("home-assistant"))||void 0===o?void 0:o.hass);let S=!1;if($){const e=document.createElement("ha-camera-stream");e.setAttribute("data-camera-fullscreen",g),e.hass=$,e.stateObj=null===(a=$.states)||void 0===a?void 0:a[g],e.fitMode="contain",e.muted=!0,e.controls=!0===t.show_controls,e.style.cssText="\n        width: 100vw !important;\n        height: 100vh !important;\n        display: block !important;\n        --video-max-height: 100vh !important;\n        transition: transform 0.2s ease !important;\n        cursor: grab !important;\n        touch-action: none !important;\n      ",b.replaceChildren(e),this.addPinchZoomToCamera(e,b);const i=document.createElement("button");i.type="button",i.className="camera-fullscreen-audio",i.textContent="🔇",i.setAttribute("aria-label","Toggle audio"),i.style.cssText=`\n        position: absolute !important;\n        top: 20px !important;\n        right: 84px !important;\n        width: 50px !important;\n        height: 50px !important;\n        border: 3px solid rgba(255,255,255,0.7) !important;\n        background: rgba(0,0,0,0.8) !important;\n        color: white !important;\n        font-size: 22px !important;\n        cursor: pointer !important;\n        border-radius: 50% !important;\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        z-index: ${u} !important;\n        backdrop-filter: blur(4px) !important;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;\n        line-height: 1 !important;\n      `,i.addEventListener("click",t=>{t.stopPropagation(),t.preventDefault(),S=!S,e.muted=!S,i.textContent=S?"🔊":"🔇";const n=this._findVideoElement(e);n&&(n.muted=!S,n.volume=S?1:0,n.paused&&n.play().catch(()=>{}))}),_.appendChild(i)}else{const t=null===(l=null===(s=this._hass)||void 0===s?void 0:s.states)||void 0===l?void 0:l[g],e=document.createElement("img");e.src=(null===(d=null==t?void 0:t.attributes)||void 0===d?void 0:d.entity_picture)||"",e.style.cssText="\n        width: 100vw !important;\n        height: 100vh !important;\n        display: block !important;\n        object-fit: contain !important;\n        cursor: grab !important;\n        touch-action: none !important;\n      ",b.replaceChildren(e),this.addPinchZoomToCamera(e,b)}const T=t=>{"Escape"===t.key&&x()};document.addEventListener("keydown",T),document.body.style.overflow="hidden";const C=document.querySelector('meta[name="viewport"]'),E=(null==C?void 0:C.content)||"";C&&(C.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),f._restoreViewport=()=>{C&&(C.content=E)}}addPinchZoomToCamera(t,e){let i=1,n=0,o=0,a=0,r=!1,s=!1,l=0,d=0,c=0,m=0;const p=()=>{t.style.transform=`translate(${n}px, ${o}px) scale(${i})`,t.style.transformOrigin="center center",t.style.transition=r||s?"none":"transform 0.2s ease"},h=(t,e)=>{const i=t.clientX-e.clientX,n=t.clientY-e.clientY;return Math.sqrt(i*i+n*n)};e.addEventListener("touchstart",t=>{t.touches.length>1&&t.preventDefault()},{passive:!1}),e.addEventListener("touchmove",t=>{t.touches.length>1&&t.preventDefault()},{passive:!1});const u=()=>{if(i>1){const{maxX:e,maxY:a}=(()=>{const e=t.getBoundingClientRect(),n=e.width*i,o=e.height*i;return{maxX:Math.max(0,(n-window.innerWidth)/2),maxY:Math.max(0,(o-window.innerHeight)/2)}})();n=Math.max(-e,Math.min(e,n)),o=Math.max(-a,Math.min(a,o))}};t.addEventListener("touchstart",t=>{2===t.touches.length?(t.preventDefault(),t.stopPropagation(),r=!0,a=h(t.touches[0],t.touches[1])):1===t.touches.length&&i>1&&(c=t.touches[0].clientX,m=t.touches[0].clientY)},{passive:!1}),t.addEventListener("touchmove",t=>{if(r&&2===t.touches.length){t.preventDefault(),t.stopPropagation();const e=h(t.touches[0],t.touches[1]);a>0&&(i*=e/a,i=Math.max(1,Math.min(6,i)),i>1&&u(),p()),a=e}else if(1===t.touches.length&&i>1){t.preventDefault();const e=t.touches[0].clientX-c,i=t.touches[0].clientY-m;n+=e,o+=i,u(),p(),c=t.touches[0].clientX,m=t.touches[0].clientY}},{passive:!1}),t.addEventListener("touchend",e=>{0===e.touches.length?(r=!1,i<1.02&&(i=1,n=0,o=0),p(),t.style.cursor=i>1?"grab":"default"):1===e.touches.length&&r&&(r=!1,i<1.02&&(i=1,n=0,o=0),p())}),t.addEventListener("touchcancel",()=>{r=!1,i<1.02&&(i=1,n=0,o=0),p(),t.style.cursor=i>1?"grab":"default"}),t.addEventListener("mousedown",e=>{i>1&&(e.preventDefault(),s=!0,l=e.clientX,d=e.clientY,t.style.cursor="grabbing")}),document.addEventListener("mousemove",t=>{if(s&&i>1){t.preventDefault();const e=t.clientX-l,i=t.clientY-d;n+=e,o+=i,u(),p(),l=t.clientX,d=t.clientY}}),document.addEventListener("mouseup",()=>{s&&(s=!1,i<1.02&&(i=1,n=0,o=0,p()),t.style.cursor=i>1?"grab":"default")}),t.addEventListener("wheel",e=>{e.preventDefault();const a=e.deltaY>0?-.15:.15;i=Math.max(1,Math.min(6,i+a)),i<1.02?(i=1,n=0,o=0):i>1&&u(),p(),t.style.cursor=i>1?"grab":"default"},{passive:!1});let g=0,v=0,f=0;t.addEventListener("touchend",e=>{const a=Date.now(),r=a-g;if(r<300&&r>0&&0===e.touches.length)if(i>1)i=1,n=0,o=0,p(),t.style.cursor="default";else{const a=e.changedTouches[0],r=t.getBoundingClientRect(),s=a.clientX-r.left-r.width/2,l=a.clientY-r.top-r.height/2;i=2.5,n=-s*(i-1),o=-l*(i-1),u(),p(),t.style.cursor="grab"}e.changedTouches.length>0&&(v=e.changedTouches[0].clientX,f=e.changedTouches[0].clientY),g=a})}_handleDimensionChange(t,e,i,n){const o={};if(!1!==t.aspect_ratio_linked){const n=t.aspect_ratio_value||1.778;"width"===e?(o.width=i,o.height=Math.round(i/n)):(o.height=i,o.width=Math.round(i*n)),o.width&&(o.width<100||o.width>1e3)&&(o.width=Math.max(100,Math.min(1e3,o.width)),o.height=Math.round(o.width/n)),o.height&&(o.height<100||o.height>1e3)&&(o.height=Math.max(100,Math.min(1e3,o.height)),o.width=Math.round(o.height*n))}else o[e]=i;n(o)}getCameraNamePositionStyles(t,e,i={},n){const o={position:"absolute",padding:"6px 12px",background:"rgba(0, 0, 0, 0.7)",color:n||i.color||this.getTextColor(e),fontSize:i.font_size?"number"==typeof i.font_size?`${i.font_size}px`:i.font_size:this.getTextSize(e),fontWeight:i.font_weight||this.getTextWeight(e),fontFamily:i.font_family||this.getTextFont(e),borderRadius:"4px",zIndex:"0",pointerEvents:"none",backdropFilter:"blur(4px)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textShadow:i.text_shadow||"0 1px 2px rgba(0, 0, 0, 0.8)",transition:"all 0.2s ease",boxSizing:"border-box"};switch(i.text_transform&&(o.textTransform=i.text_transform),i.letter_spacing&&(o.letterSpacing=i.letter_spacing),i.line_height&&(o.lineHeight=i.line_height),t){case"top-left":default:return Object.assign(Object.assign({},o),{top:"8px",left:"8px",maxWidth:"calc(100% - 16px)"});case"top-right":return Object.assign(Object.assign({},o),{top:"8px",right:"8px",maxWidth:"calc(100% - 16px)"});case"top-middle":return Object.assign(Object.assign({},o),{top:"8px",left:"50%",transform:"translateX(-50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"center":return Object.assign(Object.assign({},o),{top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"bottom-left":return Object.assign(Object.assign({},o),{bottom:"8px",left:"8px",maxWidth:"calc(100% - 16px)"});case"bottom-middle":return Object.assign(Object.assign({},o),{bottom:"8px",left:"50%",transform:"translateX(-50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"bottom-right":return Object.assign(Object.assign({},o),{bottom:"8px",right:"8px",maxWidth:"calc(100% - 16px)"})}}_hashString(t){let e=0;for(let i=0;i<t.length;i+=1)e=(e<<5)-e+t.charCodeAt(i),e|=0;return Math.abs(e)}hasActiveLink(t){const e=t.tap_action&&"nothing"!==t.tap_action.action,i=t.hold_action&&"nothing"!==t.hold_action.action,n=t.double_tap_action&&"nothing"!==t.double_tap_action.action,o=!0===t.tap_opens_fullscreen;return e||i||n||o||!!t.entity}_isAudioActive(t){const e=this._runtimeFor(t.id);if(void 0!==e.audioOverride)return e.audioOverride;if(!0!==t.audio_enabled)return!1;const i=null===navigator||void 0===navigator?void 0:navigator.userActivation;return!!i&&!0===i.hasBeenActive}_toggleAudio(t,e){t.preventDefault(),t.stopPropagation(),"live"===(e.view_mode||"auto")&&(this._runtimeFor(e.id).audioOverride=!this._isAudioActive(e),this._syncAudio(e),this.triggerPreviewUpdate(!0))}_syncAudio(t){if("live"!==(t.view_mode||"auto"))return;const e=this._runtime.get(t.id),i=null==e?void 0:e.player;if(!i)return;const n=this._isAudioActive(t);i.muted=!n;const o=this._findVideoElement(i);o&&(o.muted=!n,o.volume=n?1:0,o.playsInline=!0,o.paused&&o.play().catch(()=>{}))}_findVideoElement(t){const e=[t],i=new Set;for(;e.length;){const t=e.shift();if(!t||i.has(t))continue;if(i.add(t),t instanceof HTMLVideoElement)return t;const n=t.shadowRoot;n&&e.push(n),e.push(...Array.from(t.children))}return null}getTextColor(t){return t.text_color||"white"}getTextSize(t){const e=t.text_size||14;return"number"==typeof e?`${e}px`:e}getSmallTextSize(t){const e=t.text_size||14;return`${"number"==typeof e?Math.max(10,e-2):12}px`}getTextWeight(t){return t.text_weight||"500"}getTextFont(t){return t.text_font||'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}styleObjectToCss(t){return Object.entries(t).filter(([t,e])=>null!=e&&""!==e).map(([t,e])=>`${this.camelToKebab(t)}: ${e}`).join("; ")}camelToKebab(t){return t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}addPixelUnit(t){return t&&/^\d+$/.test(t)?`${t}px`:t}getPaddingWithDesign(t,e){return t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:this.getPaddingCSS(e)}getMarginWithDesign(t,e){return t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:this.getMarginCSS(e)}getBorderWithDesign(t,e){return t.border_width&&t.border_style&&t.border_color?`${t.border_width} ${t.border_style} ${t.border_color}`:this.getBorderCSS(e)}getBackgroundImageWithDesign(t,e,i){return"url"===t.background_image_type&&t.background_image?`url('${t.background_image}')`:"entity"===t.background_image_type&&t.background_image_entity&&i.states[t.background_image_entity]?`url('/api/camera_proxy/${t.background_image_entity}')`:this.getBackgroundImageCSS(e,i)}getPaddingCSS(t){return t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${this.addPixelUnit(t.padding_top)||"0px"} ${this.addPixelUnit(t.padding_right)||"0px"} ${this.addPixelUnit(t.padding_bottom)||"0px"} ${this.addPixelUnit(t.padding_left)||"0px"}`:"0"}getMarginCSS(t){return t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${this.addPixelUnit(t.margin_top)||"0px"} ${this.addPixelUnit(t.margin_right)||"0px"} ${this.addPixelUnit(t.margin_bottom)||"0px"} ${this.addPixelUnit(t.margin_left)||"0px"}`:"0"}getBackgroundCSS(t){return t.background_color||"transparent"}getBackgroundImageCSS(t,e){return"url"===t.background_image_type&&t.background_image?`url('${t.background_image}')`:"entity"===t.background_image_type&&t.background_image_entity&&e.states[t.background_image_entity]?`url('/api/camera_proxy/${t.background_image_entity}')`:""}getBorderCSS(t){return t.border_width&&t.border_style&&t.border_color?`${t.border_width} ${t.border_style} ${t.border_color}`:""}validateAction(t){const e=[];return"navigate"!==t.action||t.navigation_path||e.push("Navigation path is required for navigate action"),"call-service"!==t.action||t.service&&t.service_data||e.push("Service and service data are required for call-service action"),e}getStyles(){return`\n      .camera-module-container {\n        width: 100%;\n        box-sizing: border-box;\n        transition: all 0.3s ease;\n      }\n      \n      .camera-name-overlay {\n        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);\n        backdrop-filter: blur(4px);\n        -webkit-backdrop-filter: blur(4px);\n        transition: all 0.2s ease;\n        box-sizing: border-box;\n        word-break: break-word;\n        hyphens: auto;\n      }\n      \n      /* Ensure camera name doesn't overflow container boundaries */\n      .camera-image-container > .camera-name-overlay {\n        contain: layout style;\n      }\n      \n      .camera-image-container {\n        position: relative;\n        overflow: hidden;\n        margin: 0 auto;\n        flex-shrink: 0;\n        display: block;\n        transition: width 0.3s ease, height 0.3s ease;\n      }\n\n      /*\n       * The stage owns the frame; the player fills it absolutely. Home Assistant's players size\n       * their internal <video>/<img> against these, so both need a definite box.\n       */\n      .camera-image {\n        position: absolute;\n        inset: 0;\n        transition: opacity 0.3s ease;\n      }\n\n      .camera-audio-toggle {\n        position: absolute;\n        bottom: 10px;\n        right: 10px;\n        width: 30px;\n        height: 30px;\n        border: none;\n        background: none;\n        color: rgba(255, 255, 255, 0.8);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        z-index: 12;\n        padding: 0;\n        transition: color 0.2s ease, transform 0.2s ease;\n        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);\n      }\n\n      .camera-audio-toggle ha-icon {\n        pointer-events: none;\n        font-size: 20px;\n      }\n\n      .camera-audio-toggle:hover {\n        color: rgba(255, 255, 255, 0.95);\n        transform: scale(1.05);\n      }\n\n      .camera-audio-toggle.active,\n      .camera-audio-toggle.muted {\n        color: rgba(255, 255, 255, 0.9);\n      }\n      \n      .camera-unavailable {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        background-color: var(--disabled-color, #f5f5f5);\n        color: var(--secondary-text-color);\n        text-align: center;\n        padding: 8px;\n        box-sizing: border-box;\n        transition: all 0.3s ease;\n      }\n      \n      .camera-module-clickable {\n        cursor: pointer;\n        transition: transform 0.2s ease;\n      }\n      \n      .camera-module-clickable:hover {\n        transform: scale(1.02);\n      }\n      \n      .camera-module-clickable:active {\n        transform: scale(0.98);\n      }\n\n      /* Standard field styling */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n     \n        margin-bottom: 4px !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n\n      /* Conditional fields grouping */\n      .conditional-fields-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n        animation: slideInFromLeft 0.3s ease-out;\n      }\n\n      @keyframes slideInFromLeft {\n        from {\n          opacity: 0;\n          transform: translateX(-10px);\n        }\n        to {\n          opacity: 1;\n          transform: translateX(0);\n        }\n      }\n\n      /* Global design responsive text */\n      .camera-module-container * {\n        transition: font-size 0.3s ease, color 0.3s ease, font-weight 0.3s ease;\n      }\n\n      /* Enhanced animations for global design changes */\n      @keyframes textSizeChange {\n        0% { transform: scale(1); }\n        50% { transform: scale(1.02); }\n        100% { transform: scale(1); }\n      }\n\n      .camera-module-container.design-updating {\n        animation: textSizeChange 0.3s ease;\n      }\n\n      /* Gap control styles - Standardized Slider Pattern */\n      ${s.m.getSliderStyles()}\n    `}}},8465(t,e,i){i.d(e,{Q:()=>a,w:()=>r});var n=i(2618);let o=!1;class a{static findForm(t){return"undefined"==typeof document?null:document.getElementById(t)}static renderCleanForm(t,e,i,r){const s=`clean-form-${Math.random().toString(36).substr(2,9)}`;return setTimeout(()=>{const t=a.findForm(s);t&&(a.setupFormObserver(t,s),a.aggressiveCleanup(t))},0),setTimeout(()=>{const t=a.findForm(s);t&&a.aggressiveCleanup(t)},100),n.qy`
      <div class="ultra-clean-form" id="${s}">
        <ha-form
          .hass=${t}
          .data=${e}
          .schema=${i}
          .computeLabel=${()=>""}
          .computeDescription=${()=>""}
          @value-changed=${t=>{o||(o=!0,requestAnimationFrame(()=>{o=!1}),r(t),requestAnimationFrame(()=>{const t=document.getElementById(s);t&&a.aggressiveCleanup(t)}))}}
        ></ha-form>
      </div>
    `}static setupFormObserver(t,e){var i;a.activeObservers.has(e)&&(null===(i=a.activeObservers.get(e))||void 0===i||i.disconnect());const n=new MutationObserver(i=>{let n=!1;i.forEach(t=>{"childList"===t.type&&t.addedNodes.forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(n=!0)})}),n&&!a.cleanupQueue.has(e)&&(a.cleanupQueue.add(e),setTimeout(()=>{a.aggressiveCleanup(t),a.cleanupQueue.delete(e)},10))});n.observe(t,{childList:!0,subtree:!0,characterData:!0}),a.activeObservers.set(e,n),setTimeout(()=>{"undefined"!=typeof document&&document.contains(t)||(n.disconnect(),a.activeObservers.delete(e))},3e4)}static aggressiveCleanup(t){var e;if(!t)return;const i=["action","entity","template_mode","icon","name","value","text","url","path","attribute","state","condition","enabled","disabled","template","unified_template","unified_template_mode","mode","type","size","color","style","width","height","radius","opacity","service","data","latitude","longitude","navigation_path","show_icon","label","button"],n=t.querySelector("ha-form");if(!n)return;const o=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,null),a=[];let r;for(;r=o.nextNode();){const t=null===(e=r.textContent)||void 0===e?void 0:e.trim().toLowerCase();t&&i.includes(t)&&a.push(r)}a.forEach(t=>{var e;const i=t.parentElement;if(i){const n=i.querySelector("input, select, ha-entity-picker, ha-selector, mwc-select, mwc-textfield");t.textContent&&t.textContent.trim().length<30&&(n||(null===(e=i.parentElement)||void 0===e?void 0:e.querySelector("input, select, ha-entity-picker, ha-selector")))&&t.remove()}}),n.querySelectorAll("*").forEach(t=>{var e,n;const o=null===(e=t.textContent)||void 0===e?void 0:e.trim().toLowerCase();o&&i.includes(o)&&0===t.children.length&&(null===(n=t.parentElement)||void 0===n?void 0:n.querySelector("input, select, ha-entity-picker, ha-selector"))&&(t.style.cssText="display: none !important; visibility: hidden !important; opacity: 0 !important; height: 0 !important; width: 0 !important; margin: 0 !important; padding: 0 !important;")}),['div[role="group"] > div:first-child:not([class])','div[role="group"] > span:first-child:not([class])',".mdc-form-field__label",".mdc-text-field__label",".mdc-select__label","label:not([for])","div:not([class]):not([id])","span:not([class]):not([id])"].forEach(t=>{try{n.querySelectorAll(t).forEach(t=>{var e;const n=null===(e=t.textContent)||void 0===e?void 0:e.trim().toLowerCase();n&&i.includes(n)&&(t.style.cssText="display: none !important;")})}catch(t){}}),n.querySelectorAll('[class*="mdc-"]').forEach(t=>{var e;const n=null===(e=t.textContent)||void 0===e?void 0:e.trim().toLowerCase();n&&i.includes(n)&&0===t.children.length&&(t.classList.contains("mdc-floating-label")||t.classList.contains("mdc-form-field__label")||t.classList.contains("mdc-text-field__label"))&&(t.style.cssText="display: none !important;")}),setTimeout(()=>{var t;if("undefined"==typeof document)return;const e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,null),o=[];let a;for(;a=e.nextNode();){const e=null===(t=a.textContent)||void 0===t?void 0:t.trim().toLowerCase();e&&i.includes(e)&&o.push(a)}o.forEach(t=>{t.parentNode&&(t.textContent="")})},50)}static getCleanFormStyles(){return"\n      /* Ultra-aggressive label hiding */\n      .ultra-clean-form ha-form label,\n      .ultra-clean-form ha-form .label,\n      .ultra-clean-form ha-form .mdc-floating-label,\n      .ultra-clean-form ha-form .mdc-text-field__label,\n      .ultra-clean-form ha-form .mdc-select__label,\n      .ultra-clean-form ha-form .mdc-form-field__label,\n      .ultra-clean-form ha-form .ha-form-label,\n      .ultra-clean-form ha-form .mdc-notched-outline__leading,\n      .ultra-clean-form ha-form .mdc-notched-outline__notch,\n      .ultra-clean-form ha-form .mdc-notched-outline__trailing,\n      .ultra-clean-form ha-form .mdc-line-ripple {\n        display: none !important;\n        visibility: hidden !important;\n        opacity: 0 !important;\n        height: 0 !important;\n        width: 0 !important;\n        margin: 0 !important;\n        padding: 0 !important;\n        font-size: 0 !important;\n        line-height: 0 !important;\n      }\n\n      /* Override any existing label styles completely */\n      .ultra-clean-form label,\n      .ultra-clean-form .ultra-clean-form label *,\n      .ultra-clean-form ha-form label,\n      .ultra-clean-form ha-form label * {\n        display: none !important;\n        visibility: hidden !important;\n        opacity: 0 !important;\n        height: 0 !important;\n        width: 0 !important;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: none !important;\n        outline: none !important;\n        background: none !important;\n        font-size: 0 !important;\n        line-height: 0 !important;\n        position: absolute !important;\n        left: -9999px !important;\n        top: -9999px !important;\n        z-index: -1 !important;\n        pointer-events: none !important;\n      }\n\n      /* Hide any text that could be a redundant label */\n      .ultra-clean-form ha-form div:not([class]):not([id]),\n      .ultra-clean-form ha-form span:not([class]):not([id]),\n      .ultra-clean-form ha-form p:not([class]):not([id]) {\n        font-size: 0 !important;\n        line-height: 0 !important;\n        color: transparent !important;\n        height: 0 !important;\n        overflow: hidden !important;\n      }\n\n      /* Make sure form inputs still work */\n      .ultra-clean-form ha-form input,\n      .ultra-clean-form ha-form select,\n      .ultra-clean-form ha-form textarea,\n      .ultra-clean-form ha-form ha-entity-picker,\n      .ultra-clean-form ha-form ha-icon-picker,\n      .ultra-clean-form ha-form ha-selector,\n      .ultra-clean-form ha-form .mdc-text-field,\n      .ultra-clean-form ha-form .mdc-select,\n      .ultra-clean-form ha-form .mdc-switch {\n        font-size: 14px !important;\n        line-height: normal !important;\n        color: var(--primary-text-color) !important;\n        height: auto !important;\n        width: auto !important;\n        margin-top: 0 !important;\n        border-radius: 8px !important;\n      }\n\n      /* Ensure dropdowns work */\n      .ultra-clean-form ha-form .mdc-select__selected-text,\n      .ultra-clean-form ha-form .mdc-select__dropdown-icon {\n        font-size: 14px !important;\n        color: var(--primary-text-color) !important;\n        opacity: 1 !important;\n        height: auto !important;\n        width: auto !important;\n      }\n\n      /* Style field titles and descriptions consistently */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n       \n        margin-bottom: 4px !important;\n        display: block !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        display: block !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n    "}static cleanupRedundantLabels(t){a.aggressiveCleanup(t)}static renderField(t,e,i,o,r,s){return n.qy`
      <div class="form-field-container">
        <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
          ${t}
        </div>
        <div
          class="field-description"
          style="font-size: 13px; font-weight: 400; margin-bottom: 12px; color: var(--secondary-text-color);"
        >
          ${e}
        </div>
        ${a.renderCleanForm(i,o,r,s)}
      </div>
    `}static createSchemaItem(t,e){return{name:t,selector:e}}static renderSection(t,e,i){return n.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
        >
          ${t}
        </div>
        ${e?n.qy`
              <div
                class="field-description"
                style="font-size: 13px; font-weight: 400; margin-bottom: 16px; color: var(--secondary-text-color);"
              >
                ${e}
              </div>
            `:""}
        ${i.map(t=>n.qy`
            <div style="margin-bottom: 16px;">
              ${a.renderField(t.title,t.description,t.hass,t.data,t.schema,t.onChange)}
            </div>
          `)}
      </div>
    `}static injectCleanFormStyles(){return n.qy`
      <style>
        ${a.getCleanFormStyles()}
      </style>
    `}}function r(t){const e=t.detail;if(e&&"string"==typeof e.value)return e.value;const i=t.target;return i&&"string"==typeof i.value?i.value:void 0}a.activeObservers=new Map,a.cleanupQueue=new Set},3361(t,e,i){i.d(e,{I:()=>o});var n=i(1001);function o(t,e=n.Mu.DROPDOWN_MENU){var i;const o=null===(i=null==t?void 0:t.closest)||void 0===i?void 0:i.call(t,".ultra-popup-portal");return o instanceof HTMLElement?{host:o,zIndex:n.Mu.GRAPH_TOOLTIP}:{host:document.body,zIndex:e}}},1299(t,e,i){i.d(e,{D:()=>r});var n=i(6752),o=i(7804),a=i(8504);const r=(0,o.u$)(class extends o.WL{constructor(){super(...arguments),this.key=n.s6}render(t,e){return this.key=t,e}update(t,[e,i]){return e!==this.key&&((0,a.mY)(t),this.key=e),i}})}};