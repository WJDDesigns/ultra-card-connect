/*! For license information please see uc-m-camera.3e15252a.js.LICENSE.txt */
export const __webpack_esm_ids__=[4576];export const __webpack_esm_modules__={7627(t,e,i){i.d(e,{UltraCameraModule:()=>E});var n=i(2618),o=i(1299),a=i(7610),r=i(3496),s=i(3307),l=i(8465),c=i(5147),d=i(8938),m=i(9957),p=i(6478),u=i(1001),h=i(5320),g=i(9327),v=i(5121),f=i(5155),_=i(3361),b=i(64);const y=new Set(["on","open","opening","detected","home","playing","true"]),x=t=>t.split(".")[0]||"",w=(t,e)=>{var i;const n=null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i[e];return"string"==typeof n&&n?n:void 0};function k(t){return"boolean"==typeof t.confirm?t.confirm:"lock"===x(t.entity)}function $(t,e){return!!e&&("lock"===x(t)?"unlocked"===e.state||"open"===e.state||"opening"===e.state:y.has(e.state))}function S(t,e){var i,n;if(t.icon)return t.icon;const o=null==e?void 0:e.state;switch(x(t.entity)){case"lock":return"jammed"===o?"mdi:lock-alert":"locking"===o||"unlocking"===o?"mdi:lock-clock":"locked"===o?"mdi:lock":"mdi:lock-open-variant";case"cover":return"garage"===(null===(i=null==e?void 0:e.attributes)||void 0===i?void 0:i.device_class)?"closed"===o?"mdi:garage":"mdi:garage-open":"gate"===(null===(n=null==e?void 0:e.attributes)||void 0===n?void 0:n.device_class)?"closed"===o?"mdi:gate":"mdi:gate-open":"closed"===o?"mdi:window-shutter":"mdi:window-shutter-open";case"light":return"mdi:lightbulb";case"siren":return"mdi:bullhorn";case"button":case"input_button":return w(e,"icon")||"mdi:gesture-tap-button";default:return w(e,"icon")||"mdi:gesture-tap"}}function T(t,e){return t.label||w(e,"friendly_name")||t.entity}const C=["entity","visible","overlay_text","overlay_color"],F=16/9;class E extends s.m{constructor(){super(...arguments),this._runtime=new Map,this._playerRefs=new Map,this.metadata={type:"camera",title:"Camera",description:"Display live camera feeds with comprehensive control options",author:"WJD Designs",version:"1.0.0",icon:"mdi:camera",category:"content",tags:["camera","live","feed","security","surveillance"]}}createDefault(t,e){return{id:t||this.generateId("camera"),type:"camera",entity:"",camera_name:"",show_name:!0,name_position:"top-left",tap_opens_fullscreen:!1,aspect_ratio_linked:!0,aspect_ratio_value:1.778,image_fit:"cover",crop_left:0,crop_top:0,crop_right:0,crop_bottom:0,show_controls:!1,show_audio_button:!0,view_mode:"auto",refresh_interval:10,audio_enabled:!1,live_trigger_entity:"",live_trigger_hold:60,action_buttons:[],action_buttons_position:"bottom-center",image_quality:"high",rotation:0,show_unavailable:!0,fallback_image:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},unified_template_mode:!1,unified_template:"",design:{width:"100%",max_width:"500px",border_radius:"20px"},display_mode:"always",display_conditions:[]}}renderGeneralTab(t,e,i,o){var a,r;const s=t,c=(null===(a=e.locale)||void 0===a?void 0:a.language)||"en";return n.qy`
      ${this.injectUcFormStyles()}
      <div class="camera-module-settings">
        <!-- Camera Configuration Section -->
        ${this.renderSettingsSection((0,p.kg)("editor.camera.config.title",c,"Camera Configuration"),(0,p.kg)("editor.camera.config.desc",c,"Configure the camera entity and display settings."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",s.entity||"",t=>{o({entity:t}),this.triggerPreviewUpdate()},["camera"],(0,p.kg)("editor.camera.entity",c,"Camera Entity"))}
        </div>

        <!-- Camera Name Settings with toggle in header -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,p.kg)("editor.camera.show_name",c,"Show Camera Name"),"",e,{show_name:!1!==s.show_name},[this.booleanField("show_name")],t=>{o({show_name:t.detail.value.show_name}),this.triggerPreviewUpdate()})}
          ${!1!==s.show_name?n.qy`
                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.name",c,"Camera Name"),(0,p.kg)("editor.camera.name_desc",c,"Custom name for the camera. Leave empty to use entity name."),e,{camera_name:s.camera_name||""},[this.textField("camera_name")],t=>o(t.detail.value))}
                </div>

                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.name_position.title",c,"Name Position"),(0,p.kg)("editor.camera.name_position.desc",c,"Choose where the camera name appears as an overlay on the camera image."),e,{name_position:s.name_position||"top-left"},[this.selectField("name_position",[{value:"top-left",label:(0,p.kg)("editor.camera.name_position.options.top_left",c,"Top Left")},{value:"top-right",label:(0,p.kg)("editor.camera.name_position.options.top_right",c,"Top Right")},{value:"center",label:(0,p.kg)("editor.camera.name_position.options.center",c,"Center")},{value:"bottom-left",label:(0,p.kg)("editor.camera.name_position.options.bottom_left",c,"Bottom Left")},{value:"bottom-right",label:(0,p.kg)("editor.camera.name_position.options.bottom_right",c,"Bottom Right")},{value:"top-middle",label:(0,p.kg)("editor.camera.name_position.options.top_middle",c,"Top Middle")},{value:"bottom-middle",label:(0,p.kg)("editor.camera.name_position.options.bottom_middle",c,"Bottom Middle")}])],t=>{t.detail.value.name_position!==(s.name_position||"top-left")&&o(t.detail.value)})}
                </div>
              `:n.qy`
                <div
                  style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                >
                  ${(0,p.kg)("editor.camera.show_name_toggle.enable_toggle_desc",c,"Enable the toggle above to configure camera name display")}
                </div>
              `}
        </div>

        <!-- Tap to Open Fullscreen Settings -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,p.kg)("editor.camera.tap_opens_fullscreen",c,"Tap Camera Opens Fullscreen"),"",e,{tap_opens_fullscreen:!0===s.tap_opens_fullscreen},[this.booleanField("tap_opens_fullscreen")],t=>{o({tap_opens_fullscreen:t.detail.value.tap_opens_fullscreen}),this.triggerPreviewUpdate()})}

          <div
            class="field-description"
            style="margin-bottom: 16px; color: var(--secondary-text-color); font-style: italic; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-6, 6px); border-left: 4px solid var(--primary-color);"
          >
            <ha-icon icon="mdi:information" style="font-size: 14px; margin-right: 6px;"></ha-icon>
            ${(0,p.kg)("editor.camera.tap_opens_fullscreen_desc",c,"When enabled, tapping anywhere on the camera will open it in fullscreen mode.")}
          </div>
        </div>

        <!-- Action Buttons -->
        ${this._renderActionButtonsEditor(s,e,o)}

        <!-- Display Settings Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-top: 32px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,p.kg)("editor.camera.display.title",c,"Display Settings")}
          </div>

          <!-- Stream Mode Selector -->
          <div style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,p.kg)("editor.camera.view_mode.title",c,"Stream Mode"),(0,p.kg)("editor.camera.view_mode.desc",c,"Auto: still images refreshed every 10 seconds, exactly like Home Assistant picture cards. Live: a continuous stream. Snapshot: still images on your own refresh interval."),e,{view_mode:s.view_mode||"auto"},[this.selectField("view_mode",[{value:"auto",label:(0,p.kg)("editor.camera.view_mode.options.auto",c,"Auto (HA Default)")},{value:"live",label:(0,p.kg)("editor.camera.view_mode.options.live",c,"Always Live")},{value:"snapshot",label:(0,p.kg)("editor.camera.view_mode.options.snapshot",c,"Snapshot Only")}])],t=>{t.detail.value.view_mode!==(s.view_mode||"auto")&&o(t.detail.value)})}
          </div>

          <!-- Go live while an entity is on (doorbell ring, motion) -->
          ${"live"!==(s.view_mode||"auto")?n.qy`
                  <div style="margin-bottom: 16px;">
                    ${this.renderFieldSection((0,p.kg)("editor.camera.live_trigger.title",c,"Go Live When"),(0,p.kg)("editor.camera.live_trigger.desc",c,"Switch to a live stream while this entity is on, such as a doorbell ring, motion sensor or toggle helper. Event entities go live each time they fire."),e,{live_trigger_entity:s.live_trigger_entity||""},[this.entityField("live_trigger_entity",["event","binary_sensor","input_boolean","switch"])],t=>{o({live_trigger_entity:t.detail.value.live_trigger_entity||""}),this.triggerPreviewUpdate()})}
                  </div>
                  ${s.live_trigger_entity?n.qy`
                          <div style="margin-bottom: 16px;">
                            ${this.renderFieldSection((0,p.kg)("editor.camera.live_trigger_hold.title",c,"Stay Live For (seconds)"),(0,p.kg)("editor.camera.live_trigger_hold.desc",c,"How long the stream stays live after the entity turns off or the event fires. Range: 0-3600 seconds."),e,{live_trigger_hold:null!==(r=s.live_trigger_hold)&&void 0!==r?r:60},[l.Q.createSchemaItem("live_trigger_hold",{number:{min:0,max:3600,mode:"box"}})],t=>o({live_trigger_hold:t.detail.value.live_trigger_hold}))}
                          </div>
                        `:""}
                `:""}

          <!-- Live stream options -->
          ${"live"===(s.view_mode||"auto")?n.qy`
                <div style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.audio_enabled.title",c,"Enable Audio"),(0,p.kg)("editor.camera.audio_enabled.desc",c,"Start the stream unmuted where the browser allows it. Browsers block unmuted autoplay until you interact with the page, so the stream may start muted until you use the sound button."),e,{audio_enabled:!0===s.audio_enabled},[this.booleanField("audio_enabled")],t=>{o(t.detail.value),this.triggerPreviewUpdate()})}
                </div>

                <div style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.show_audio_button.title",c,"Sound Button"),(0,p.kg)("editor.camera.show_audio_button.desc",c,"Show a mute/unmute button over the stream."),e,{show_audio_button:!1!==s.show_audio_button},[this.booleanField("show_audio_button")],t=>{o(t.detail.value),this.triggerPreviewUpdate()})}
                </div>

                <div style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.show_mode_badge.title",c,"Live / Snapshot Badge"),(0,p.kg)("editor.camera.show_mode_badge.desc",c,"Show a small badge in the top corner saying whether the camera is streaming live or showing still snapshots."),e,{show_mode_badge:!0===s.show_mode_badge},[this.booleanField("show_mode_badge")],t=>{o(t.detail.value),this.triggerPreviewUpdate()})}
                </div>

                <div style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.show_controls.title",c,"Player Controls"),(0,p.kg)("editor.camera.show_controls.desc",c,"Show the browser's native video controls on the stream."),e,{show_controls:!0===s.show_controls},[this.booleanField("show_controls")],t=>{o(t.detail.value),this.triggerPreviewUpdate()})}
                </div>
              `:""}

          <!-- Image Fit -->
          <div style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,p.kg)("editor.camera.image_fit.title",c,"Image Fit"),(0,p.kg)("editor.camera.image_fit.desc",c,"How the feed fills the frame. Cover crops to fill, Contain shows the whole frame with bars, Fill stretches to the frame."),e,{image_fit:s.image_fit||"cover"},[this.selectField("image_fit",[{value:"cover",label:(0,p.kg)("editor.camera.image_fit.options.cover",c,"Cover")},{value:"contain",label:(0,p.kg)("editor.camera.image_fit.options.contain",c,"Contain")},{value:"fill",label:(0,p.kg)("editor.camera.image_fit.options.fill",c,"Fill")}])],t=>{t.detail.value.image_fit!==(s.image_fit||"cover")&&(o(t.detail.value),this.triggerPreviewUpdate())})}
          </div>

          <!-- Refresh Interval (only for Snapshot mode) -->
          ${"snapshot"===(s.view_mode||"auto")?n.qy`
                <div style="margin-top: 24px;">
                  ${this.renderConditionalFieldsGroup((0,p.kg)("editor.camera.snapshot_refresh.section_title",c,"Snapshot Refresh Settings"),n.qy`
                      ${l.Q.renderField((0,p.kg)("editor.camera.refresh_interval.title",c,"Refresh Interval (seconds)"),(0,p.kg)("editor.camera.refresh_interval.desc",c,"How often to refresh the camera snapshot automatically. Range: 1-300 seconds."),e,{refresh_interval:s.refresh_interval||10},[l.Q.createSchemaItem("refresh_interval",{number:{min:1,max:300,mode:"box"}})],t=>o({refresh_interval:t.detail.value.refresh_interval}))}
                    `)}
                </div>
              `:""}

          <!-- Dimensions Section -->
          <div style="margin-bottom: 32px;">
            <div
              class="field-title"
              style="font-size: 18px; font-weight: 700; margin-bottom: 8px; color: var(--primary-color);"
            >
              ${(0,p.kg)("editor.camera.dimensions.title",c,"Dimensions")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-6, 6px); border-left: 4px solid var(--primary-color);"
            >
              <ha-icon icon="mdi:information" style="font-size: 14px; margin-right: 6px;"></ha-icon>
              ${(0,p.kg)("editor.camera.dimensions.responsive_note",c,"Camera now uses responsive sizing by default (100% width). Use the Design tab for full control over dimensions, or adjust these fallback pixel dimensions for specific use cases.")}
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
                ${this.renderSliderField((0,p.kg)("editor.camera.width",c,"Width"),(0,p.kg)("editor.camera.width_desc",c,"Set the width of the camera display. Range: 100–1000px"),s.width||320,320,100,1e3,1,t=>this._handleDimensionChange(s,"width",t,o),"px")}
              </div>

              <!-- Link/Unlink Button -->
              <div style="display: flex; justify-content: center; margin: 8px 0;">
                <button
                  class="aspect-ratio-link-btn ${!1!==s.aspect_ratio_linked?"linked":""}"
                  @click=${()=>{const t=!s.aspect_ratio_linked,e={aspect_ratio_linked:t};if(t){const t=s.width||320,i=s.height||180;e.aspect_ratio_value=t/i}o(e)}}
                  title="${!1!==s.aspect_ratio_linked?(0,p.kg)("editor.camera.unlink_aspect",c,"Unlink aspect ratio"):(0,p.kg)("editor.camera.link_aspect",c,"Link aspect ratio")}"
                >
                  <ha-icon
                    icon="${!1!==s.aspect_ratio_linked?"mdi:link-variant":"mdi:link-variant-off"}"
                  ></ha-icon>
                </button>
              </div>

              <div class="dimension-group">
                ${this.renderSliderField((0,p.kg)("editor.camera.height",c,"Height"),(0,p.kg)("editor.camera.height_desc",c,"Set the height of the camera display. Range: 100–1000px"),s.height||180,180,100,1e3,1,t=>this._handleDimensionChange(s,"height",t,o),"px")}
              </div>
            </div>

            ${!1!==s.aspect_ratio_linked?n.qy`
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
                      ${(0,p.kg)("editor.camera.aspect_linked.title",c,"Aspect Ratio Linked")}
                    </div>
                    <div
                      style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                    >
                      ${(0,p.kg)("editor.camera.aspect_linked.desc",c,"Dimensions maintain {ratio}:1 ratio. Adjusting one dimension automatically updates the other to maintain proportions.").replace("{ratio}",`${(1*(s.aspect_ratio_value||1.778)).toFixed(2)}`)}
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
                      ${(0,p.kg)("editor.camera.aspect_independent.title",c,"Independent Dimensions")}
                    </div>
                    <div
                      style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                    >
                      ${(0,p.kg)("editor.camera.aspect_independent.desc",c,"Width and height can be adjusted independently. Click the link button above to maintain aspect ratio.")}
                    </div>
                  </div>
                `}
          </div>

          <!-- Rotation Field -->
          <div class="dimension-group" style="margin-top: 16px;">
            ${this.renderSliderField((0,p.kg)("editor.camera.rotation",c,"Rotation"),(0,p.kg)("editor.camera.rotation_desc",c,"Rotate the camera image clockwise (0–360 degrees)."),s.rotation||0,0,0,360,1,t=>{o({rotation:t})},"°")}
          </div>
        </div>

        <!-- Crop & Position Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,p.kg)("editor.camera.crop.title",c,"Crop & Position")}
          </div>
          <div
            class="field-description"
            style="margin-bottom: 20px; color: var(--secondary-text-color); font-style: italic;"
          >
            ${(0,p.kg)("editor.camera.crop.desc",c,"Adjust the crop and position of the camera view. Useful for focusing on specific areas or removing unwanted edges.")}
          </div>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            <!-- Left Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.left_title",c,"Left Crop"),(0,p.kg)("editor.camera.crop.left_desc",c,"Crop from the left edge. Higher values show less of the left side."),s.crop_left||0,0,0,50,1,t=>{o({crop_left:t})},"%")}

            <!-- Right Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.right_title",c,"Right Crop"),(0,p.kg)("editor.camera.crop.right_desc",c,"Crop from the right edge. Higher values show less of the right side."),s.crop_right||0,0,0,50,1,t=>{o({crop_right:t})},"%")}

            <!-- Top Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.top_title",c,"Top Crop"),(0,p.kg)("editor.camera.crop.top_desc",c,"Crop from the top edge. Higher values show less of the top area."),s.crop_top||0,0,0,50,1,t=>{o({crop_top:t})},"%")}

            <!-- Bottom Crop -->
            ${this.renderSliderField((0,p.kg)("editor.camera.crop.bottom_title",c,"Bottom Crop"),(0,p.kg)("editor.camera.crop.bottom_desc",c,"Crop from the bottom edge. Higher values show less of the bottom area."),s.crop_bottom||0,0,0,50,1,t=>{o({crop_bottom:t})},"%")}
          </div>

          <!-- Crop Status -->
          ${(s.crop_left||0)+(s.crop_top||0)+(s.crop_right||0)+(s.crop_bottom||0)>0?n.qy`
                <div
                  style="margin-top: 16px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-8, 8px); border-left: 4px solid var(--primary-color);"
                >
                  <div
                    style="font-size: 13px; color: var(--primary-color); font-weight: 500; margin-bottom: 4px;"
                  >
                    <ha-icon icon="mdi:crop" style="font-size: 14px; margin-right: 6px;"></ha-icon>
                    ${(0,p.kg)("editor.camera.crop.active_applied",c,"Active Crops Applied")}
                  </div>
                  <div
                    style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                  >
                    L: ${s.crop_left||0}% | T: ${s.crop_top||0}% | R:
                    ${s.crop_right||0}% | B: ${s.crop_bottom||0}%
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
              ${(0,p.kg)("editor.camera.crop.reset_all",c,"Reset All Crops")}
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
                  >${(0,p.kg)("editor.camera.unified_template.toggle",c,"Template Mode")}</label
                >
                <button
                  class="help-btn"
                  style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                  title="${(0,p.kg)("editor.camera.unified_template.cheatsheet",c,"Template cheatsheet")}"
                  @click=${t=>{t.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"camera"}}))}}
                >
                  <ha-icon
                    icon="mdi:help-circle"
                    style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"
                  ></ha-icon>
                </button>
              </div>
              ${this.renderUcForm(e,{unified_template_mode:s.unified_template_mode||!1},[this.booleanField("unified_template_mode")],t=>o({unified_template_mode:t.detail.value.unified_template_mode}))}
            </div>
            <div class="template-description">
              ${(0,p.kg)("editor.camera.unified_template.desc",c,"Return JSON: entity, visible, overlay_text, overlay_color — or a plain entity_id string.")}
            </div>
          </div>

          ${s.unified_template_mode?n.qy`
                <div
                  class="template-content"
                  @mousedown=${t=>{const e=t.target;e.closest("ultra-template-editor")||e.closest(".cm-editor")||t.stopPropagation()}}
                  @dragstart=${t=>t.stopPropagation()}
                  @insert-snippet=${t=>{var e,i,n;const o=t.currentTarget.querySelector("ultra-template-editor");null===(e=null==o?void 0:o.insertAtCursor)||void 0===e||e.call(o,null!==(n=null===(i=t.detail)||void 0===i?void 0:i.value)&&void 0!==n?n:"")}}
                >
                  <ultra-template-editor
                    .hass=${e}
                    .value=${s.unified_template||""}
                    .placeholder=${"{\n  \"entity\": \"{{ 'camera.outdoor' if is_state('weather.home', 'sunny') else 'camera.indoor' }}\"\n}"}
                    .minHeight=${100}
                    .maxHeight=${300}
                    @value-changed=${t=>{o({unified_template:t.detail.value})}}
                  ></ultra-template-editor>
                  ${this.renderTemplateKeyWarning(s.unified_template,C,c)}
                </div>
              `:""}
        </div>
      </div>
    `}renderActionsTab(t,e,i,n){return c.A.render(t,e,t=>n(t))}renderPreview(t,e,i,a){var r,s,l;const c=t,d=c,m=(null===(r=e.locale)||void 0===r?void 0:r.language)||"en";this._hass=e;const u=!!c.unified_template_mode&&!(!c.unified_template||!String(c.unified_template).trim());if(!(u||c.entity&&""!==c.entity.trim()))return this.renderGradientErrorState((0,p.kg)("editor.camera.error_no_entity",m,"Select Camera Entity"),(0,p.kg)("editor.camera.error_no_entity_desc",m,"Choose a camera entity in the General tab"),"mdi:camera-outline");if(u&&!String(c.unified_template).trim())return this.renderGradientErrorState((0,p.kg)("editor.camera.error_no_template",m,"Configure Template"),(0,p.kg)("editor.camera.error_no_template_desc",m,"Enter unified template in the General tab"),"mdi:camera-outline");const _=d.design||{};let b,w,k,$;if(c.unified_template_mode&&c.unified_template&&(!this._templateService&&e?this._templateService=new h.I(e):this._templateService&&e&&this._templateService.updateHass(e),e)){e.__uvc_template_strings||(e.__uvc_template_strings={});const t=(0,f.KD)(c.unified_template,e,i),n=this._hashString(t),o=`unified_camera_${c.id}_${n}`;if(this._templateService){const n=(0,g.pL)(c.entity||"",e,{camera_name:c.camera_name,live_view:c.live_view}),a=(0,g.jh)(c.entity||"",e);this._templateService.subscribeToTemplate(t,o,()=>{"undefined"!=typeof window&&this.triggerPreviewUpdate()},n,i,a)}const a=null===(s=e.__uvc_template_strings)||void 0===s?void 0:s[o];if(a&&""!==String(a).trim()){const t=(0,v.cv)(a);if(!(0,v.HD)(t)){const e=(0,v.B8)(t)||t.entity;e&&(b=e),void 0!==t.visible&&(w=t.visible),t.overlay_text&&(k=t.overlay_text),t.overlay_color&&($=t.overlay_color)}}}if(!1===w)return n.qy``;let S=b||c.entity;const T=this._runtimeFor(c.id),C=c.view_mode||"auto",E="live"===C?{live:!1}:function(t,e,i,n=Date.now()){if(!e||!(null==t?void 0:t.states))return{live:!1};const o=t.states[e];if(!o||"unavailable"===o.state||"unknown"===o.state)return{live:!1};const a=1e3*Math.max(0,Number.isFinite(i)?i:60);if("event"===x(e)){const t=Date.parse(o.state);if(!Number.isFinite(t))return{live:!1};const e=t+a;return e>n?{live:!0,until:e}:{live:!1}}if(y.has(o.state))return{live:!0};const r=o.last_changed?Date.parse(o.last_changed):NaN;if(!Number.isFinite(r))return{live:!1};const s=r+a;return s>n?{live:!0,until:s}:{live:!1}}(e,c.live_trigger_entity,c.live_trigger_hold);this._scheduleTriggerExpiry(T,E.until);const A=E.live?"live":C,z="live"===A;T.renderedLive=z,this._isEditorOpen()?(S&&this._scheduleCameraUpdate(S,z,c,e),S=null!==(l=T.appliedEntity)&&void 0!==l?l:S):S&&this._isValidCameraEntity(e,S)&&(T.appliedEntity=S,T.appliedLive=z);const L=S?e.states[S]:null,M=!L||"unavailable"===L.state;T.renderedEntity=S;const P=`${c.id}|${S||"none"}|${A}|${T.streamEpoch||0}`;z&&this._ensureVisibilityListener();const D=k||c.camera_name||(L?L.attributes.friendly_name||L.entity_id:"Camera"),q={width:"100%",maxWidth:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"left"===_.alignment?"flex-start":"right"===_.alignment?"flex-end":"center",justifyContent:"center",color:_.color||this.getTextColor(d),fontFamily:_.font_family||this.getTextFont(d),fontSize:_.font_size?"number"==typeof _.font_size?`${_.font_size}px`:_.font_size:this.getTextSize(d),fontWeight:_.font_weight||this.getTextWeight(d),textTransform:_.text_transform||void 0,letterSpacing:_.letter_spacing||void 0,lineHeight:_.line_height||void 0,textShadow:_.text_shadow||void 0},U=this._clampCrop(c.crop_left),O=this._clampCrop(c.crop_right),B=this._clampCrop(c.crop_top),I=this._clampCrop(c.crop_bottom),R=Math.max(1,100-U-O),j=Math.max(1,100-B-I),H=U>0||O>0||B>0||I>0,W=_.height&&""!==_.height&&"auto"!==_.height,N=c.width||320,X=c.height||180,V=(!1!==c.aspect_ratio_linked&&(c.aspect_ratio_value||0)>0?c.aspect_ratio_value:N/X)||F,Y=V*R/j,G=this._resolveFitMode(c.image_fit),K=c.rotation||0,Q={display:"block",position:"absolute",top:H?`${(-B/j*100).toFixed(4)}%`:"0",left:H?`${(-U/R*100).toFixed(4)}%`:"0",width:H?`${(1e4/R).toFixed(4)}%`:"100%",height:H?`${(1e4/j).toFixed(4)}%`:"100%",transform:0!==K?`rotate(${K}deg)`:void 0,objectFit:G},Z={width:_.width||`${Math.max(50,N*R/100).toFixed(0)}px`,height:W?_.height:void 0,aspectRatio:W?void 0:Y.toFixed(4),maxWidth:_.max_width||void 0,minWidth:_.min_width||void 0,maxHeight:_.max_height||void 0,minHeight:_.min_height||void 0,position:"relative",overflow:_.overflow||"hidden",borderRadius:_.border_radius||"0px",background:_.background_color||"transparent",backgroundImage:this.getBackgroundImageWithDesign(_,d,e)||void 0,border:this.getBorderWithDesign(_,d)||void 0,padding:"0",margin:this.getMarginWithDesign(_,d),boxShadow:_.box_shadow||void 0,backdropFilter:_.backdrop_filter||void 0,clipPath:_.clip_path||void 0,"--video-max-height":"100%"},J=c.name_position||"top-left",tt=this.getCameraNamePositionStyles(J,d,_,$),et=z&&this._isAudioActive(c),it=z&&!1!==c.show_audio_button,nt=!0===c.show_mode_badge?n.qy`<div class="camera-mode-badge ${z?"live":"snapshot"}">
            <span class="camera-mode-badge-dot"></span>
            ${z?(0,p.kg)("editor.camera.mode_badge.live",m,"Live"):(0,p.kg)("editor.camera.mode_badge.snapshot",m,"Snapshot")}
          </div>`:"",ot=!1!==c.show_name?n.qy`<div
            class="camera-name-overlay"
            style="${this.buildStyleString(tt)}"
          >
            ${D}
          </div>`:"",at=`font-weight: ${_.font_weight||this.getTextWeight(d)}; font-size: ${_.font_size?"number"==typeof _.font_size?`${_.font_size}px`:_.font_size:this.getTextSize(d)};`,rt=`font-size: ${"number"==typeof _.font_size?`${Math.max(10,_.font_size-2)}px`:this.getSmallTextSize(d)}; margin-top: 4px; opacity: 0.9;`,st=t=>this.buildStyleString({position:"absolute",inset:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:t,color:_.color||this.getTextColor(d),fontFamily:_.font_family||this.getTextFont(d)}),lt=n.qy`
      <div
        class="camera-module-container"
        data-uc-camera-id="${c.id}"
        style="${this.buildStyleString(q)}"
      >
        <div class="camera-image-container" style="${this.buildStyleString(Z)}">
          ${S?M?n.qy`
                  <div
                    class="camera-unavailable"
                    style="${st("var(--error-color, #f44336)")}"
                  >
                    ${c.fallback_image?n.qy`
                          <img
                            src=${c.fallback_image}
                            alt="Fallback"
                            style="width: 100%; height: 100%; object-fit: ${G};"
                          />
                        `:n.qy`
                          <ha-icon
                            icon="mdi:camera-off"
                            style="font-size: 48px; margin-bottom: 8px;"
                          ></ha-icon>
                          <span style="${at}"
                            >${(0,p.kg)("editor.camera.unavailable",m,"Camera Unavailable")}</span
                          >
                          <span style="${rt}">${S}</span>
                        `}
                  </div>
                  ${ot}
                `:n.qy`
                  ${(0,o.D)(P,this._renderPlayer(c,e,{cameraEntity:S,stateObj:L,viewMode:A,mediaStyles:Q,fitMode:G,sourceRatio:V,audioActive:et,state:T}))}
                  ${ot}
                  ${nt}
                  ${it?n.qy`
                        <button
                          type="button"
                          class="camera-audio-toggle ${et?"active":"muted"}"
                          title="${et?(0,p.kg)("editor.camera.audio.mute",m,"Mute"):(0,p.kg)("editor.camera.audio.unmute",m,"Unmute")}"
                          aria-label="${et?(0,p.kg)("editor.camera.audio.mute",m,"Mute"):(0,p.kg)("editor.camera.audio.unmute",m,"Unmute")}"
                          @mousedown=${t=>t.stopPropagation()}
                          @touchstart=${t=>t.stopPropagation()}
                          @click=${t=>this._toggleAudio(t,c)}
                        >
                          <ha-icon
                            icon="${et?"mdi:volume-high":"mdi:volume-off"}"
                          ></ha-icon>
                        </button>
                      `:""}
                `:n.qy`
                <div
                  class="camera-unavailable"
                  style="${st("var(--warning-color, #ff9800)")}"
                >
                  <ha-icon
                    icon="mdi:camera-plus"
                    style="font-size: 48px; margin-bottom: 8px;"
                  ></ha-icon>
                  <span style="${at}"
                    >${(0,p.kg)("editor.camera.error_no_entity",m,"Select Camera Entity")}</span
                  >
                  <span style="${rt}"
                    >${(0,p.kg)("editor.camera.error_no_entity_desc",m,"Choose a camera entity in the General tab")}</span
                  >
                </div>
                ${ot}
              `}
          ${this._renderActionBar(c,e,it)}
        </div>
      </div>
    `,ct=this.getHoverEffectClass(t),dt=this.buildStyleString(this.buildDesignStyles(t,e)),mt=this.hasActiveLink(c)?n.qy`<div
          class="camera-module-clickable ${ct}"
          style="${dt}"
          @click=${t=>this.handleClick(t,c,e)}
          @dblclick=${t=>this.handleDoubleClick(t,c,e)}
          @mousedown=${t=>this.handleMouseDown(t,c,e)}
          @mouseup=${t=>this.handleMouseUp(t,c,e)}
          @mouseleave=${t=>this.handleMouseLeave(t,c,e)}
          @touchstart=${t=>this.handleTouchStart(t,c,e)}
          @touchend=${t=>this.handleTouchEnd(t,c,e)}
        >
          ${lt}
        </div>`:n.qy`<div class="camera-module-container ${ct}" style="${dt}">
          ${lt}
        </div>`;return this.wrapWithAnimation(mt,t,e)}_renderActionButtonsEditor(t,e,i){var o;const a=(null===(o=e.locale)||void 0===o?void 0:o.language)||"en",r=t.action_buttons||[],s=t=>{i({action_buttons:t}),this.triggerPreviewUpdate()},l=(t,e)=>s(r.map((i,n)=>n===t?Object.assign(Object.assign({},i),e):i));return n.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div class="section-title" style="margin-bottom: 8px;">
          ${(0,p.kg)("editor.camera.action_buttons.title",a,"Action Buttons")}
        </div>
        <div class="field-description">
          ${(0,p.kg)("editor.camera.action_buttons.desc",a,"Buttons over the feed that also show in fullscreen, such as unlocking the front door. Locks unlock or lock, covers open or close, buttons and scripts run, and anything else toggles.")}
        </div>

        ${r.map((t,i)=>n.qy`
            <div
              style="border: 1px solid var(--divider-color); border-radius: var(--uc-r-8, 8px); padding: 12px; margin-bottom: 12px;"
            >
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div class="field-title" style="margin: 0;">
                  ${(0,p.kg)("editor.camera.action_buttons.button",a,"Button")} ${i+1}
                </div>
                <button
                  type="button"
                  class="uc-cam-ed-icon-btn"
                  title=${(0,p.kg)("editor.camera.action_buttons.remove",a,"Remove button")}
                  aria-label=${(0,p.kg)("editor.camera.action_buttons.remove",a,"Remove button")}
                  @click=${()=>(t=>s(r.filter((e,i)=>i!==t)))(i)}
                >
                  <ha-icon icon="mdi:delete-outline"></ha-icon>
                </button>
              </div>
              ${this.renderFieldSection((0,p.kg)("editor.camera.action_buttons.entity",a,"Entity"),"",e,{entity:t.entity||""},[this.entityField("entity")],t=>l(i,{entity:t.detail.value.entity||""}))}
              ${this.renderFieldSection((0,p.kg)("editor.camera.action_buttons.icon",a,"Icon"),(0,p.kg)("editor.camera.action_buttons.icon_desc",a,"Leave empty to follow the entity, such as an open or closed lock."),e,{icon:t.icon||""},[this.iconField("icon")],t=>l(i,{icon:t.detail.value.icon||void 0}))}
              ${this.renderFieldSection((0,p.kg)("editor.camera.action_buttons.label",a,"Label"),(0,p.kg)("editor.camera.action_buttons.label_desc",a,"Shown in fullscreen and as the tooltip. Leave empty to use the entity name."),e,{label:t.label||""},[this.textField("label")],t=>l(i,{label:t.detail.value.label||void 0}))}
              ${this.renderFieldSection((0,p.kg)("editor.camera.action_buttons.confirm",a,"Tap Twice to Confirm"),(0,p.kg)("editor.camera.action_buttons.confirm_desc",a,"Ask for a second tap before running, so a stray tap cannot unlock a door. On by default for locks."),e,{confirm:k(t)},[this.booleanField("confirm")],t=>l(i,{confirm:t.detail.value.confirm}))}
            </div>
          `)}

        <button type="button" class="uc-cam-ed-btn" @click=${()=>s([...r,{id:this.generateId("camera_action"),entity:""}])}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${(0,p.kg)("editor.camera.action_buttons.add",a,"Add Button")}
        </button>

        ${r.length?n.qy`
                <div style="margin-top: 16px;">
                  ${this.renderFieldSection((0,p.kg)("editor.camera.action_buttons.position",a,"Button Position"),"",e,{action_buttons_position:t.action_buttons_position||"bottom-center"},[this.selectField("action_buttons_position",[{value:"bottom-left",label:(0,p.kg)("editor.camera.name_position.options.bottom_left",a,"Bottom Left")},{value:"bottom-center",label:(0,p.kg)("editor.camera.name_position.options.bottom_middle",a,"Bottom Middle")},{value:"bottom-right",label:(0,p.kg)("editor.camera.name_position.options.bottom_right",a,"Bottom Right")}])],e=>{const n=e.detail.value.action_buttons_position;n!==(t.action_buttons_position||"bottom-center")&&(i({action_buttons_position:n}),this.triggerPreviewUpdate())})}
                </div>
              `:""}
      </div>
    `}_scheduleTriggerExpiry(t,e){t.triggerUntil!==e&&(t.triggerTimer&&clearTimeout(t.triggerTimer),t.triggerTimer=void 0,t.triggerUntil=e,void 0!==e&&(t.triggerTimer=setTimeout(()=>{t.triggerTimer=void 0,t.triggerUntil=void 0,this.triggerPreviewUpdate(!0,!0)},Math.max(0,e-Date.now())+250)))}_appHass(){var t;return null===(t=document.querySelector("home-assistant"))||void 0===t?void 0:t.hass}_validActionButtons(t){return(t.action_buttons||[]).filter(t=>!!(null==t?void 0:t.entity))}_renderActionBar(t,e,i=!1){var o;const a=this._validActionButtons(t);if(!a.length)return"";const r=(null===(o=null==e?void 0:e.locale)||void 0===o?void 0:o.language)||"en",s=this._runtimeFor(t.id),l=t.action_buttons_position||"bottom-center",c=t=>t.stopPropagation();return n.qy`
      <div class="camera-action-bar ${l} ${i?"has-audio":""}">
        ${a.map(i=>{var o;const a=null===(o=null==e?void 0:e.states)||void 0===o?void 0:o[i.entity],l=s.confirmButton===i.id,d=T(i,a),m=l?(0,p.kg)("editor.camera.action_buttons.tap_again",r,"Tap again to confirm"):d;return n.qy`
            <button
              type="button"
              class="camera-action-btn ${$(i.entity,a)?"active":""} ${l?"confirming":""}"
              title=${m}
              aria-label=${m}
              @mousedown=${c}
              @mouseup=${c}
              @touchstart=${c}
              @touchend=${c}
              @dblclick=${c}
              @click=${e=>this._onActionButton(e,t,i)}
            >
              <ha-icon icon=${S(i,a)}></ha-icon>
              ${l?n.qy`<span class="camera-action-confirm"
                      >${(0,p.kg)("editor.camera.action_buttons.tap_again",r,"Tap again to confirm")}</span
                    >`:""}
            </button>
          `})}
      </div>
    `}_onActionButton(t,e,i){t.stopPropagation(),t.preventDefault();const n=this._runtimeFor(e.id);if(n.confirmTimer&&clearTimeout(n.confirmTimer),n.confirmTimer=void 0,k(i)&&n.confirmButton!==i.id)return n.confirmButton=i.id,n.confirmTimer=setTimeout(()=>{n.confirmButton=void 0,n.confirmTimer=void 0,this.triggerPreviewUpdate(!0,!0)},4e3),void this.triggerPreviewUpdate(!0,!0);n.confirmButton=void 0,this.triggerPreviewUpdate(!0,!0),this._runAction(i)}_runAction(t){const e=this._hass||this._appHass();e&&(Promise.resolve().then(()=>i(1212)).then(({forwardHaptic:t})=>t("light")),async function(t,e){var i;const n=null===(i=t.states)||void 0===i?void 0:i[e.entity],{domain:o,service:a}=function(t,e){const i=x(t);return"automation"===i?{domain:i,service:"trigger"}:"script"===i?{domain:i,service:"turn_on"}:(0,b.Z0)(t,e)}(e.entity,n);await t.callService(o,a,{entity_id:e.entity})}(e,t).catch(e=>{r.f.error(e instanceof Error&&e.message?e.message:`Could not run ${t.entity}`)}))}_buildFullscreenActionBar(t,e){const i=this._validActionButtons(t);if(!i.length)return;const n=document.createElement("div");let o,a;n.className="camera-fullscreen-actions",n.style.cssText=`\n      position: absolute !important;\n      left: 50% !important;\n      bottom: calc(24px + env(safe-area-inset-bottom, 0px)) !important;\n      transform: translateX(-50%) !important;\n      display: flex !important;\n      gap: 12px !important;\n      flex-wrap: wrap !important;\n      justify-content: center !important;\n      max-width: calc(100vw - 32px) !important;\n      z-index: ${e} !important;\n    `;const r=()=>this._appHass()||this._hass,s=()=>{var t,e;return(null===(e=null===(t=r())||void 0===t?void 0:t.locale)||void 0===e?void 0:e.language)||"en"},l=i.map(t=>{const e=document.createElement("button");e.type="button",e.style.cssText="\n        display: inline-flex !important;\n        align-items: center !important;\n        gap: 8px !important;\n        min-height: 52px !important;\n        padding: 0 20px !important;\n        border-radius: 26px !important;\n        border: 2px solid rgba(255,255,255,0.6) !important;\n        color: white !important;\n        font-size: 16px !important;\n        font-weight: 500 !important;\n        font-family: inherit !important;\n        cursor: pointer !important;\n        backdrop-filter: blur(6px) !important;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;\n        transition: background 0.2s ease !important;\n      ";const i=document.createElement("ha-icon");i.style.cssText="--mdc-icon-size: 26px; pointer-events: none;";const n=document.createElement("span");return n.style.pointerEvents="none",e.append(i,n),e.addEventListener("click",e=>{if(e.stopPropagation(),e.preventDefault(),a&&clearTimeout(a),a=void 0,k(t)&&o!==t.id)return o=t.id,a=setTimeout(()=>{o=void 0,c()},4e3),void c();o=void 0,c(),this._runAction(t)}),{button:t,el:e,icon:i,text:n}}),c=()=>{var t;const e=r();for(const i of l){const n=null===(t=null==e?void 0:e.states)||void 0===t?void 0:t[i.button.entity],a=o===i.button.id;i.icon.icon=S(i.button,n),i.text.textContent=a?(0,p.kg)("editor.camera.action_buttons.tap_again",s(),"Tap again to confirm"):T(i.button,n);const r=a?"rgba(244,67,54,0.85)":$(i.button.entity,n)?"rgba(255,152,0,0.85)":"rgba(0,0,0,0.7)";i.el.style.setProperty("background",r,"important"),i.el.setAttribute("aria-label",i.text.textContent||"")}};l.forEach(t=>n.appendChild(t.el)),c();const d=setInterval(c,1e3);return{element:n,dispose:()=>{clearInterval(d),a&&clearTimeout(a)}}}_renderPlayer(t,e,i){const{cameraEntity:o,stateObj:r,viewMode:s,mediaStyles:l,fitMode:c,sourceRatio:d,audioActive:m}=i,p=this.buildStyleString(l),u=this._playerRef(t.id);return"live"===s?n.qy`
        <ha-camera-stream
          ${(0,a.K)(u)}
          class="camera-image"
          style="${p}"
          .hass=${e}
          .stateObj=${r}
          .fitMode=${c}
          .muted=${!m}
          .controls=${!0===t.show_controls}
          @load=${()=>this._syncAudio(t)}
        ></ha-camera-stream>
      `:"snapshot"===s?(this._ensureSnapshot(t,o),n.qy`
        <img
          ${(0,a.K)(u)}
          class="camera-image"
          style="${p}"
          alt=${o}
          src=${i.state.snapshotSrc||""}
          @error=${()=>this._onSnapshotError(t,o)}
        />
      `):n.qy`
      <hui-image
        ${(0,a.K)(u)}
        class="camera-image"
        style="${p}"
        .hass=${e}
        .cameraImage=${o}
        .cameraView=${"auto"}
        .fitMode=${c}
        .aspectRatio=${`${d.toFixed(4)}:1`}
      ></hui-image>
    `}_runtimeFor(t){let e=this._runtime.get(t);return e||(e={},this._runtime.set(t,e)),e}_playerRef(t){let e=this._playerRefs.get(t);return e||(e=e=>{this._runtimeFor(t).player=e,e||setTimeout(()=>{var e;(null===(e=this._runtime.get(t))||void 0===e?void 0:e.player)||(this._clearTimers(t),this._runtime.delete(t),this._playerRefs.delete(t))},0)},this._playerRefs.set(t,e)),e}_clearTimers(t){const e=this._runtime.get(t);e&&(e.snapshotTimer&&(clearInterval(e.snapshotTimer),e.snapshotTimer=void 0),e.updateTimer&&(clearTimeout(e.updateTimer),e.updateTimer=void 0),e.clickTimeout&&(clearTimeout(e.clickTimeout),e.clickTimeout=void 0),e.holdTimeout&&(clearTimeout(e.holdTimeout),e.holdTimeout=void 0),e.triggerTimer&&(clearTimeout(e.triggerTimer),e.triggerTimer=void 0,e.triggerUntil=void 0),e.confirmTimer&&(clearTimeout(e.confirmTimer),e.confirmTimer=void 0,e.confirmButton=void 0))}_clampCrop(t){return"number"==typeof t&&isFinite(t)?Math.min(49,Math.max(0,t)):0}_resolveFitMode(t){switch(t){case"contain":case"scale-down":return"contain";case"fill":return"fill";default:return"cover"}}_isEditorOpen(){try{return!!document.querySelector("hui-dialog-edit-card, hui-card-edit-mode")}catch(t){return!1}}_isValidCameraEntity(t,e){var i;if(!t||!e)return!1;const n=null===(i=t.states)||void 0===i?void 0:i[e];return!!n&&"camera"===e.split(".")[0]&&"unavailable"!==n.state&&"unknown"!==n.state}_scheduleCameraUpdate(t,e,i,n){const o=this._runtimeFor(i.id);o.appliedEntity===t&&o.appliedLive===e||(o.pendingProps={entity:t,live:e},o.updateTimer&&clearTimeout(o.updateTimer),o.updateTimer=setTimeout(()=>{o.updateTimer=void 0;const t=o.pendingProps;t&&this._isValidCameraEntity(n,t.entity)&&(o.appliedEntity=t.entity,o.appliedLive=t.live,o.pendingProps=void 0,this.triggerPreviewUpdate())},200))}_ensureSnapshot(t,e){const i=this._runtimeFor(t.id),n=1e3*Math.min(300,Math.max(1,t.refresh_interval||10));i.snapshotEntity!==e&&(i.snapshotEntity=e,i.snapshotSrc=void 0,i.snapshotTimer&&(clearInterval(i.snapshotTimer),i.snapshotTimer=void 0)),i.snapshotSrc||this._refreshSnapshot(t.id,e,!1),i.snapshotTimer&&i.snapshotIntervalMs!==n&&(clearInterval(i.snapshotTimer),i.snapshotTimer=void 0),i.snapshotTimer||(i.snapshotIntervalMs=n,i.snapshotTimer=setInterval(()=>this._refreshSnapshot(t.id,e,!0),n)),this._ensureVisibilityListener()}_refreshSnapshot(t,e,i){var n,o;const a=this._runtime.get(t),r=this._hass;if(!a||!r)return;if(i&&"undefined"!=typeof document&&document.hidden)return;const s=null===(n=r.states)||void 0===n?void 0:n[e],l=null===(o=null==s?void 0:s.attributes)||void 0===o?void 0:o.entity_picture;if(!l)return void this._resolveSignedSnapshot(t,e);const c="function"==typeof r.hassUrl?r.hassUrl(l):l,d=`${c}${c.includes("?")?"&":"?"}_uc=${Date.now()}`;i?this._swapSnapshot(t,e,d,!0):a.snapshotSrc=d}_swapSnapshot(t,e,i,n){const o=this._runtime.get(t);if(!o)return;const a=o.player;if(!(a instanceof HTMLImageElement)||"undefined"==typeof Image)return o.snapshotSrc=i,void this.triggerPreviewUpdate();const r=new Image;r.onload=()=>{const e=this._runtime.get(t);e&&e.player===a&&(e.snapshotSrc=i,a.src=i)},r.onerror=()=>{n&&this._resolveSignedSnapshot(t,e)},r.src=i}async _resolveSignedSnapshot(t,e){const i=this._runtime.get(t),n=this._hass;if(i&&n&&!i.snapshotInFlight){i.snapshotInFlight=!0;try{const i=await n.callWS({type:"auth/sign_path",path:`/api/camera_proxy/${e}`});if(!(null==i?void 0:i.path))return;const o="function"==typeof n.hassUrl?n.hassUrl(i.path):i.path;this._swapSnapshot(t,e,`${o}${o.includes("?")?"&":"?"}_uc=${Date.now()}`,!1)}catch(t){}finally{i.snapshotInFlight=!1}}}_onSnapshotError(t,e){const i=this._runtimeFor(t.id);if(t.fallback_image){const e=i.player;return void(e instanceof HTMLImageElement&&e.src!==t.fallback_image&&(e.src=t.fallback_image))}this._resolveSignedSnapshot(t.id,e)}_ensureVisibilityListener(){this._visibilityListener||"undefined"==typeof document||(this._visibilityListener=()=>{if(document.hidden)return void(this._hiddenAt=Date.now());const t=void 0!==this._hiddenAt&&Date.now()-this._hiddenAt>=3e4;this._hiddenAt=void 0;let e=!1;this._runtime.forEach((i,n)=>{i.snapshotTimer&&i.snapshotEntity&&this._resolveSignedSnapshot(n,i.snapshotEntity),t&&i.renderedLive&&(i.streamEpoch=(i.streamEpoch||0)+1,e=!0)}),e&&this.triggerPreviewUpdate(!0,!0)},document.addEventListener("visibilitychange",this._visibilityListener))}renderLogicTab(t,e,i,n){return d.X.render(t,e,t=>n(t))}validate(t){const e=t,i=[...super.validate(t).errors];return"snapshot"===e.view_mode&&e.refresh_interval&&(e.refresh_interval<1||e.refresh_interval>300)&&i.push("Refresh interval must be between 1 and 300 seconds for snapshot mode"),e.border_radius&&isNaN(Number(e.border_radius))&&i.push("Border radius must be a number"),void 0!==e.rotation&&null!==e.rotation&&(isNaN(Number(e.rotation))||e.rotation<0||e.rotation>360)&&i.push("Rotation must be a number between 0 and 360 degrees"),e.tap_action&&e.tap_action.action&&i.push(...this.validateAction(e.tap_action)),e.hold_action&&e.hold_action.action&&i.push(...this.validateAction(e.hold_action)),e.double_tap_action&&e.double_tap_action.action&&i.push(...this.validateAction(e.double_tap_action)),{valid:0===i.length,errors:i}}handleClick(t,e,i,n){t.preventDefault();const o=this._runtimeFor(e.id);o.clickTimeout&&clearTimeout(o.clickTimeout),e.double_tap_action&&"nothing"!==e.double_tap_action.action?o.clickTimeout=setTimeout(()=>{o.clickTimeout=void 0,this.handleTapAction(t,e,i,n)},300):this.handleTapAction(t,e,i,n)}handleDoubleClick(t,e,i,n){t.preventDefault();const o=this._runtimeFor(e.id);o.clickTimeout&&(clearTimeout(o.clickTimeout),o.clickTimeout=void 0),this.handleDoubleAction(t,e,i,n)}handleMouseDown(t,e,i,n){const o=this._runtimeFor(e.id);o.isHolding=!1,o.holdTimeout=setTimeout(()=>{o.isHolding=!0,this.handleHoldAction(t,e,i,n)},500)}handleMouseUp(t,e,i){const n=this._runtimeFor(e.id);n.holdTimeout&&(clearTimeout(n.holdTimeout),n.holdTimeout=void 0)}handleMouseLeave(t,e,i){const n=this._runtimeFor(e.id);n.holdTimeout&&(clearTimeout(n.holdTimeout),n.holdTimeout=void 0),n.isHolding=!1}handleTouchStart(t,e,i,n){this.handleMouseDown(t,e,i,n)}handleTouchEnd(t,e,i){this.handleMouseUp(t,e,i)}handleTapAction(t,e,i,n){if(!this._runtimeFor(e.id).isHolding)if(!0!==e.tap_opens_fullscreen)if(e.tap_action){const o="default"===e.tap_action.action?{action:"more-info",entity:e.entity}:e.tap_action;m.K.handleAction(o,i,t.target,n,e.entity,e)}else e.entity&&m.K.handleAction({action:"more-info",entity:e.entity},i,t.target,n,e.entity,e);else this.handleFullscreenClick(t,e,n)}handleHoldAction(t,e,i,n){e.hold_action&&"nothing"!==e.hold_action.action&&m.K.handleAction(e.hold_action,i,t.target,n,e.entity,e)}handleDoubleAction(t,e,i,n){e.double_tap_action&&"nothing"!==e.double_tap_action.action&&m.K.handleAction(e.double_tap_action,i,t.target,n,e.entity,e)}handleFullscreenClick(t,e,n){t.stopPropagation(),t.preventDefault(),!1!==(null==n?void 0:n.haptic_feedback)&&Promise.resolve().then(()=>i(1212)).then(({forwardHaptic:t})=>{t("medium")});const o=t.currentTarget||t.target;this.createFullscreenModal(e,o)}_resolveFullscreenHost(t){var e;const i=(null===(e=null==t?void 0:t.closest)||void 0===e?void 0:e.call(t,".ultra-popup-portal"))?u.Mu.GRAPH_TOOLTIP:u.Mu.CAMERA_FULLSCREEN_OVERLAY,n=document.querySelector("home-assistant");return(null==n?void 0:n.shadowRoot)?{host:n.shadowRoot,zIndex:i}:{host:(0,_.I)(t,i).host,zIndex:i}}createFullscreenModal(t,e){var i,n,o,a,s,l,c;document.querySelectorAll('[id^="ultra-camera-fullscreen-"]').forEach(t=>{var e,i,n;return null!==(n=null===(i=(e=t)._ultraClose)||void 0===i?void 0:i.call(e))&&void 0!==n?n:t.remove()});const d=document.querySelector("home-assistant");null===(i=null==d?void 0:d.shadowRoot)||void 0===i||i.querySelectorAll('[id^="ultra-camera-fullscreen-"]').forEach(t=>{var e,i,n;return null!==(n=null===(i=(e=t)._ultraClose)||void 0===i?void 0:i.call(e))&&void 0!==n?n:t.remove()});const{host:m,zIndex:p}=this._resolveFullscreenHost(e),h=p>=u.Mu.GRAPH_TOOLTIP?p:p+1,g=(null===(n=this._runtime.get(t.id))||void 0===n?void 0:n.renderedEntity)||t.entity;if(!g)return void r.f.error("No camera entity available");const v="ultra-camera-fullscreen-"+Date.now(),f=document.createElement("div");f.id=v,f.style.cssText=`\n      position: fixed !important;\n      top: 0 !important;\n      left: 0 !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      background: rgba(0,0,0,0.95) !important;\n      z-index: ${p} !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      backdrop-filter: blur(10px) !important;\n      touch-action: none !important;\n      user-select: none !important;\n      -webkit-user-select: none !important;\n      -webkit-touch-callout: none !important;\n    `;const _=document.createElement("div");_.style.cssText="\n      position: relative !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      overflow: hidden !important;\n      background: black !important;\n    ";const b=document.createElement("div");b.id=v+"-camera-container",b.style.cssText="\n      width: 100% !important;\n      height: 100% !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      min-height: 300px !important;\n      touch-action: none !important;\n      user-select: none !important;\n    ";const y=document.createElement("button");if(y.innerHTML="✕",y.style.cssText=`\n      position: absolute !important;\n      top: 20px !important;\n      right: 20px !important;\n      width: 50px !important;\n      height: 50px !important;\n      border: 3px solid rgba(255,255,255,0.7) !important;\n      background: rgba(0,0,0,0.8) !important;\n      color: white !important;\n      font-size: 30px !important;\n      font-weight: bold !important;\n      cursor: pointer !important;\n      border-radius: 50% !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      z-index: ${h} !important;\n      backdrop-filter: blur(4px) !important;\n      box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;\n      font-family: Arial, sans-serif !important;\n      line-height: 1 !important;\n      transition: all 0.2s ease !important;\n    `,!1!==t.show_name){const e=document.createElement("div");e.style.cssText="\n        position: absolute !important;\n        top: 20px !important;\n        left: 20px !important;\n        padding: 10px 16px !important;\n        background: rgba(0,0,0,0.8) !important;\n        color: white !important;\n        border-radius: var(--uc-r-8, 8px) !important;\n        font-size: 16px !important;\n        font-weight: 500 !important;\n        backdrop-filter: blur(4px) !important;\n        text-shadow: 0 1px 2px rgba(0,0,0,0.8) !important;\n        border: 1px solid rgba(255,255,255,0.2) !important;\n        box-shadow: 0 2px 8px rgba(0,0,0,0.4) !important;\n      ",e.textContent=t.camera_name||g,_.appendChild(e)}_.appendChild(b),_.appendChild(y);const x=this._buildFullscreenActionBar(t,h);x&&_.appendChild(x.element),f.appendChild(_),m.appendChild(f);const w=()=>{const t=f._restoreViewport;t&&t(),$.disconnect(),null==x||x.dispose(),b.replaceChildren(),f.remove(),document.removeEventListener("keydown",C),document.body.style.overflow=""};f._ultraClose=w;const k=()=>{f.removeAttribute("inert"),y.removeAttribute("inert"),f.style.pointerEvents="auto",y.style.pointerEvents="auto",y.addEventListener("click",t=>{t.stopPropagation(),t.preventDefault(),w()},!0),f.addEventListener("click",t=>{t.target===f&&(t.stopPropagation(),t.preventDefault(),w())},!0)};k(),setTimeout(k,100);const $=new MutationObserver(t=>{t.forEach(t=>{if("attributes"===t.type&&"inert"===t.attributeName){const e=t.target;e!==f&&e!==y||(e.removeAttribute("inert"),e.style.pointerEvents="auto")}})});$.observe(f,{attributes:!0}),$.observe(y,{attributes:!0});const S=this._hass||(null===(o=document.querySelector("home-assistant"))||void 0===o?void 0:o.hass);let T=!1;if(S){const e=document.createElement("ha-camera-stream");e.setAttribute("data-camera-fullscreen",g),e.hass=S,e.stateObj=null===(a=S.states)||void 0===a?void 0:a[g],e.fitMode="contain",e.muted=!0,e.controls=!0===t.show_controls,e.style.cssText="\n        width: 100vw !important;\n        height: 100vh !important;\n        display: block !important;\n        --video-max-height: 100vh !important;\n        transition: transform 0.2s ease !important;\n        cursor: grab !important;\n        touch-action: none !important;\n      ",b.replaceChildren(e),this.addPinchZoomToCamera(e,b);const i=document.createElement("button");i.type="button",i.className="camera-fullscreen-audio",i.textContent="🔇",i.setAttribute("aria-label","Toggle audio"),i.style.cssText=`\n        position: absolute !important;\n        top: 20px !important;\n        right: 84px !important;\n        width: 50px !important;\n        height: 50px !important;\n        border: 3px solid rgba(255,255,255,0.7) !important;\n        background: rgba(0,0,0,0.8) !important;\n        color: white !important;\n        font-size: 22px !important;\n        cursor: pointer !important;\n        border-radius: 50% !important;\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        z-index: ${h} !important;\n        backdrop-filter: blur(4px) !important;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;\n        line-height: 1 !important;\n      `,i.addEventListener("click",t=>{t.stopPropagation(),t.preventDefault(),T=!T,e.muted=!T,i.textContent=T?"🔊":"🔇";const n=this._findVideoElement(e);n&&(n.muted=!T,n.volume=T?1:0,n.paused&&n.play().catch(()=>{}))}),_.appendChild(i)}else{const t=null===(l=null===(s=this._hass)||void 0===s?void 0:s.states)||void 0===l?void 0:l[g],e=document.createElement("img");e.src=(null===(c=null==t?void 0:t.attributes)||void 0===c?void 0:c.entity_picture)||"",e.style.cssText="\n        width: 100vw !important;\n        height: 100vh !important;\n        display: block !important;\n        object-fit: contain !important;\n        cursor: grab !important;\n        touch-action: none !important;\n      ",b.replaceChildren(e),this.addPinchZoomToCamera(e,b)}const C=t=>{"Escape"===t.key&&w()};document.addEventListener("keydown",C),document.body.style.overflow="hidden";const F=document.querySelector('meta[name="viewport"]'),E=(null==F?void 0:F.content)||"";F&&(F.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),f._restoreViewport=()=>{F&&(F.content=E)}}addPinchZoomToCamera(t,e){let i=1,n=0,o=0,a=0,r=!1,s=!1,l=0,c=0,d=0,m=0;const p=()=>{t.style.transform=`translate(${n}px, ${o}px) scale(${i})`,t.style.transformOrigin="center center",t.style.transition=r||s?"none":"transform 0.2s ease"},u=(t,e)=>{const i=t.clientX-e.clientX,n=t.clientY-e.clientY;return Math.sqrt(i*i+n*n)};e.addEventListener("touchstart",t=>{t.touches.length>1&&t.preventDefault()},{passive:!1}),e.addEventListener("touchmove",t=>{t.touches.length>1&&t.preventDefault()},{passive:!1});const h=()=>{if(i>1){const{maxX:e,maxY:a}=(()=>{const e=t.getBoundingClientRect(),n=e.width*i,o=e.height*i;return{maxX:Math.max(0,(n-window.innerWidth)/2),maxY:Math.max(0,(o-window.innerHeight)/2)}})();n=Math.max(-e,Math.min(e,n)),o=Math.max(-a,Math.min(a,o))}};t.addEventListener("touchstart",t=>{2===t.touches.length?(t.preventDefault(),t.stopPropagation(),r=!0,a=u(t.touches[0],t.touches[1])):1===t.touches.length&&i>1&&(d=t.touches[0].clientX,m=t.touches[0].clientY)},{passive:!1}),t.addEventListener("touchmove",t=>{if(r&&2===t.touches.length){t.preventDefault(),t.stopPropagation();const e=u(t.touches[0],t.touches[1]);a>0&&(i*=e/a,i=Math.max(1,Math.min(6,i)),i>1&&h(),p()),a=e}else if(1===t.touches.length&&i>1){t.preventDefault();const e=t.touches[0].clientX-d,i=t.touches[0].clientY-m;n+=e,o+=i,h(),p(),d=t.touches[0].clientX,m=t.touches[0].clientY}},{passive:!1}),t.addEventListener("touchend",e=>{0===e.touches.length?(r=!1,i<1.02&&(i=1,n=0,o=0),p(),t.style.cursor=i>1?"grab":"default"):1===e.touches.length&&r&&(r=!1,i<1.02&&(i=1,n=0,o=0),p())}),t.addEventListener("touchcancel",()=>{r=!1,i<1.02&&(i=1,n=0,o=0),p(),t.style.cursor=i>1?"grab":"default"}),t.addEventListener("mousedown",e=>{i>1&&(e.preventDefault(),s=!0,l=e.clientX,c=e.clientY,t.style.cursor="grabbing")}),document.addEventListener("mousemove",t=>{if(s&&i>1){t.preventDefault();const e=t.clientX-l,i=t.clientY-c;n+=e,o+=i,h(),p(),l=t.clientX,c=t.clientY}}),document.addEventListener("mouseup",()=>{s&&(s=!1,i<1.02&&(i=1,n=0,o=0,p()),t.style.cursor=i>1?"grab":"default")}),t.addEventListener("wheel",e=>{e.preventDefault();const a=e.deltaY>0?-.15:.15;i=Math.max(1,Math.min(6,i+a)),i<1.02?(i=1,n=0,o=0):i>1&&h(),p(),t.style.cursor=i>1?"grab":"default"},{passive:!1});let g=0,v=0,f=0;t.addEventListener("touchend",e=>{const a=Date.now(),r=a-g;if(r<300&&r>0&&0===e.touches.length)if(i>1)i=1,n=0,o=0,p(),t.style.cursor="default";else{const a=e.changedTouches[0],r=t.getBoundingClientRect(),s=a.clientX-r.left-r.width/2,l=a.clientY-r.top-r.height/2;i=2.5,n=-s*(i-1),o=-l*(i-1),h(),p(),t.style.cursor="grab"}e.changedTouches.length>0&&(v=e.changedTouches[0].clientX,f=e.changedTouches[0].clientY),g=a})}_handleDimensionChange(t,e,i,n){const o={};if(!1!==t.aspect_ratio_linked){const n=t.aspect_ratio_value||1.778;"width"===e?(o.width=i,o.height=Math.round(i/n)):(o.height=i,o.width=Math.round(i*n)),o.width&&(o.width<100||o.width>1e3)&&(o.width=Math.max(100,Math.min(1e3,o.width)),o.height=Math.round(o.width/n)),o.height&&(o.height<100||o.height>1e3)&&(o.height=Math.max(100,Math.min(1e3,o.height)),o.width=Math.round(o.height*n))}else o[e]=i;n(o)}getCameraNamePositionStyles(t,e,i={},n){const o={position:"absolute",padding:"6px 12px",background:"rgba(0, 0, 0, 0.7)",color:n||i.color||this.getTextColor(e),fontSize:i.font_size?"number"==typeof i.font_size?`${i.font_size}px`:i.font_size:this.getTextSize(e),fontWeight:i.font_weight||this.getTextWeight(e),fontFamily:i.font_family||this.getTextFont(e),borderRadius:"4px",zIndex:"0",pointerEvents:"none",backdropFilter:"blur(4px)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textShadow:i.text_shadow||"0 1px 2px rgba(0, 0, 0, 0.8)",transition:"all 0.2s ease",boxSizing:"border-box"};switch(i.text_transform&&(o.textTransform=i.text_transform),i.letter_spacing&&(o.letterSpacing=i.letter_spacing),i.line_height&&(o.lineHeight=i.line_height),t){case"top-left":default:return Object.assign(Object.assign({},o),{top:"8px",left:"8px",maxWidth:"calc(100% - 16px)"});case"top-right":return Object.assign(Object.assign({},o),{top:"8px",right:"8px",maxWidth:"calc(100% - 16px)"});case"top-middle":return Object.assign(Object.assign({},o),{top:"8px",left:"50%",transform:"translateX(-50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"center":return Object.assign(Object.assign({},o),{top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"bottom-left":return Object.assign(Object.assign({},o),{bottom:"8px",left:"8px",maxWidth:"calc(100% - 16px)"});case"bottom-middle":return Object.assign(Object.assign({},o),{bottom:"8px",left:"50%",transform:"translateX(-50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"bottom-right":return Object.assign(Object.assign({},o),{bottom:"8px",right:"8px",maxWidth:"calc(100% - 16px)"})}}_hashString(t){let e=0;for(let i=0;i<t.length;i+=1)e=(e<<5)-e+t.charCodeAt(i),e|=0;return Math.abs(e)}hasActiveLink(t){const e=t.tap_action&&"nothing"!==t.tap_action.action,i=t.hold_action&&"nothing"!==t.hold_action.action,n=t.double_tap_action&&"nothing"!==t.double_tap_action.action,o=!0===t.tap_opens_fullscreen;return e||i||n||o||!!t.entity}_isAudioActive(t){const e=this._runtimeFor(t.id);if(void 0!==e.audioOverride)return e.audioOverride;if(!0!==t.audio_enabled)return!1;const i=null===navigator||void 0===navigator?void 0:navigator.userActivation;return!!i&&!0===i.hasBeenActive}_toggleAudio(t,e){t.preventDefault(),t.stopPropagation();const i=this._runtimeFor(e.id);i.renderedLive&&(i.audioOverride=!this._isAudioActive(e),this._syncAudio(e),this.triggerPreviewUpdate(!0))}_syncAudio(t){const e=this._runtime.get(t.id);if(!(null==e?void 0:e.renderedLive))return;const i=e.player;if(!i)return;const n=this._isAudioActive(t);i.muted=!n;const o=this._findVideoElement(i);o&&(o.muted=!n,o.volume=n?1:0,o.playsInline=!0,o.paused&&o.play().catch(()=>{n&&(e.audioOverride=!1,i.muted=!0,o.muted=!0,o.volume=0,o.play().catch(()=>{}),this.triggerPreviewUpdate(!0))}))}_findVideoElement(t){const e=[t],i=new Set;for(;e.length;){const t=e.shift();if(!t||i.has(t))continue;if(i.add(t),t instanceof HTMLVideoElement)return t;const n=t.shadowRoot;n&&e.push(n),e.push(...Array.from(t.children))}return null}getTextColor(t){return t.text_color||"white"}getTextSize(t){const e=t.text_size||14;return"number"==typeof e?`${e}px`:e}getSmallTextSize(t){const e=t.text_size||14;return`${"number"==typeof e?Math.max(10,e-2):12}px`}getTextWeight(t){return t.text_weight||"500"}getTextFont(t){return t.text_font||'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}getPaddingWithDesign(t,e){return t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:this.getPaddingCSS(e)}getMarginWithDesign(t,e){return t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:this.getMarginCSS(e)}getBorderWithDesign(t,e){return t.border_width&&t.border_style&&t.border_color?`${t.border_width} ${t.border_style} ${t.border_color}`:this.getBorderCSS(e)}getBackgroundImageWithDesign(t,e,i){return"url"===t.background_image_type&&t.background_image?`url('${t.background_image}')`:"entity"===t.background_image_type&&t.background_image_entity&&i.states[t.background_image_entity]?`url('/api/camera_proxy/${t.background_image_entity}')`:this.getBackgroundImageCSS(e,i)}getPaddingCSS(t){return t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${this.addPixelUnit(t.padding_top)||"0px"} ${this.addPixelUnit(t.padding_right)||"0px"} ${this.addPixelUnit(t.padding_bottom)||"0px"} ${this.addPixelUnit(t.padding_left)||"0px"}`:"0"}getMarginCSS(t){return t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${this.addPixelUnit(t.margin_top)||"0px"} ${this.addPixelUnit(t.margin_right)||"0px"} ${this.addPixelUnit(t.margin_bottom)||"0px"} ${this.addPixelUnit(t.margin_left)||"0px"}`:"0"}getBackgroundCSS(t){return t.background_color||"transparent"}getBackgroundImageCSS(t,e){return"url"===t.background_image_type&&t.background_image?`url('${t.background_image}')`:"entity"===t.background_image_type&&t.background_image_entity&&e.states[t.background_image_entity]?`url('/api/camera_proxy/${t.background_image_entity}')`:""}getBorderCSS(t){return t.border_width&&t.border_style&&t.border_color?`${t.border_width} ${t.border_style} ${t.border_color}`:""}validateAction(t){const e=[];return"navigate"!==t.action||t.navigation_path||e.push("Navigation path is required for navigate action"),"call-service"!==t.action||t.service&&t.service_data||e.push("Service and service data are required for call-service action"),e}getStyles(){return`\n      .camera-module-container {\n        width: 100%;\n        box-sizing: border-box;\n        transition: all 0.3s ease;\n      }\n      \n      .camera-name-overlay {\n        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);\n        backdrop-filter: blur(4px);\n        -webkit-backdrop-filter: blur(4px);\n        transition: all 0.2s ease;\n        box-sizing: border-box;\n        word-break: break-word;\n        hyphens: auto;\n      }\n      \n      /* Ensure camera name doesn't overflow container boundaries */\n      .camera-image-container > .camera-name-overlay {\n        contain: layout style;\n      }\n      \n      .camera-image-container {\n        position: relative;\n        overflow: hidden;\n        margin: 0 auto;\n        flex-shrink: 0;\n        display: block;\n        transition: width 0.3s ease, height 0.3s ease;\n      }\n\n      /*\n       * The stage owns the frame; the player fills it absolutely. Home Assistant's players size\n       * their internal <video>/<img> against these, so both need a definite box.\n       */\n      .camera-image {\n        position: absolute;\n        inset: 0;\n        transition: opacity 0.3s ease;\n      }\n\n      .camera-mode-badge {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        z-index: 12;\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 3px 8px;\n        border-radius: 999px;\n        background: rgba(0, 0, 0, 0.55);\n        color: #fff;\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0.04em;\n        text-transform: uppercase;\n        line-height: 1.4;\n        pointer-events: none;\n      }\n      .camera-mode-badge-dot {\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        background: rgba(255, 255, 255, 0.7);\n      }\n      .camera-mode-badge.live .camera-mode-badge-dot {\n        background: #e53935;\n        animation: camera-live-pulse 1.6s ease-in-out infinite;\n      }\n      @keyframes camera-live-pulse {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.35; }\n      }\n      .camera-audio-toggle {\n        position: absolute;\n        bottom: 10px;\n        right: 10px;\n        width: 30px;\n        height: 30px;\n        border: none;\n        background: none;\n        color: rgba(255, 255, 255, 0.8);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        z-index: 12;\n        padding: 0;\n        transition: color 0.2s ease, transform 0.2s ease;\n        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);\n      }\n\n      .camera-audio-toggle ha-icon {\n        pointer-events: none;\n        font-size: 20px;\n      }\n\n      .camera-audio-toggle:hover {\n        color: rgba(255, 255, 255, 0.95);\n        transform: scale(1.05);\n      }\n\n      .camera-audio-toggle.active,\n      .camera-audio-toggle.muted {\n        color: rgba(255, 255, 255, 0.9);\n      }\n      \n      .camera-action-bar {\n        position: absolute;\n        bottom: 10px;\n        z-index: 12;\n        display: flex;\n        gap: 8px;\n        max-width: calc(100% - 20px);\n        flex-wrap: wrap;\n      }\n      .camera-action-bar.bottom-left {\n        left: 10px;\n      }\n      .camera-action-bar.bottom-right {\n        right: 10px;\n      }\n      .camera-action-bar.bottom-right.has-audio {\n        right: 48px;\n      }\n      .camera-action-bar.bottom-center {\n        left: 50%;\n        transform: translateX(-50%);\n        justify-content: center;\n      }\n\n      .camera-action-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        min-width: 40px;\n        height: 40px;\n        padding: 0 8px;\n        border: none;\n        border-radius: 20px;\n        background: rgba(0, 0, 0, 0.55);\n        color: #fff;\n        cursor: pointer;\n        backdrop-filter: blur(6px);\n        -webkit-backdrop-filter: blur(6px);\n        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n        font: inherit;\n        font-size: 13px;\n        font-weight: 500;\n        transition: background 0.2s ease, transform 0.15s ease;\n      }\n\n      .camera-action-btn ha-icon {\n        --mdc-icon-size: 22px;\n        pointer-events: none;\n      }\n\n      .camera-action-btn:hover {\n        transform: scale(1.05);\n      }\n\n      .camera-action-btn:focus-visible {\n        outline: 2px solid #fff;\n        outline-offset: 2px;\n      }\n\n      .camera-action-btn.active {\n        background: color-mix(in srgb, var(--warning-color, #ff9800) 85%, transparent);\n      }\n\n      .camera-action-btn.confirming {\n        background: color-mix(in srgb, var(--error-color, #f44336) 85%, transparent);\n        padding: 0 12px;\n      }\n\n      .camera-action-confirm {\n        white-space: nowrap;\n        pointer-events: none;\n      }\n\n      .camera-unavailable {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        background-color: var(--disabled-color, #f5f5f5);\n        color: var(--secondary-text-color);\n        text-align: center;\n        padding: 8px;\n        box-sizing: border-box;\n        transition: all 0.3s ease;\n      }\n      \n      .camera-module-clickable {\n        cursor: pointer;\n        transition: transform 0.2s ease;\n      }\n      \n      .camera-module-clickable:hover {\n        transform: scale(1.02);\n      }\n      \n      .camera-module-clickable:active {\n        transform: scale(0.98);\n      }\n\n      .uc-cam-ed-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 8px 14px;\n        border: 1px solid var(--primary-color);\n        border-radius: var(--uc-r-8, 8px);\n        background: transparent;\n        color: var(--primary-color);\n        font: inherit;\n        font-weight: 500;\n        cursor: pointer;\n      }\n      .uc-cam-ed-btn:hover {\n        background: rgba(var(--rgb-primary-color), 0.08);\n      }\n      .uc-cam-ed-icon-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 36px;\n        height: 36px;\n        border: none;\n        border-radius: 50%;\n        background: transparent;\n        color: var(--secondary-text-color);\n        cursor: pointer;\n      }\n      .uc-cam-ed-icon-btn:hover {\n        color: var(--error-color, #f44336);\n        background: rgba(var(--rgb-primary-color), 0.08);\n      }\n\n      /* Standard field styling */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n     \n        margin-bottom: 4px !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)) !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n\n      /* Conditional fields grouping */\n      .conditional-fields-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n        animation: slideInFromLeft 0.3s ease-out;\n      }\n\n      @keyframes slideInFromLeft {\n        from {\n          opacity: 0;\n          transform: translateX(-10px);\n        }\n        to {\n          opacity: 1;\n          transform: translateX(0);\n        }\n      }\n\n      /* Global design responsive text */\n      .camera-module-container * {\n        transition: font-size 0.3s ease, color 0.3s ease, font-weight 0.3s ease;\n      }\n\n      /* Enhanced animations for global design changes */\n      @keyframes textSizeChange {\n        0% { transform: scale(1); }\n        50% { transform: scale(1.02); }\n        100% { transform: scale(1); }\n      }\n\n      .camera-module-container.design-updating {\n        animation: textSizeChange 0.3s ease;\n      }\n\n      /* Gap control styles - Standardized Slider Pattern */\n      ${s.m.getSliderStyles()}\n    `}}},8465(t,e,i){i.d(e,{Q:()=>a,w:()=>r});var n=i(2618);let o=!1;class a{static findForm(t){return"undefined"==typeof document?null:document.getElementById(t)}static renderCleanForm(t,e,i,r){const s=`clean-form-${Math.random().toString(36).substr(2,9)}`;return setTimeout(()=>{const t=a.findForm(s);t&&(a.setupFormObserver(t,s),a.aggressiveCleanup(t))},0),setTimeout(()=>{const t=a.findForm(s);t&&a.aggressiveCleanup(t)},100),n.qy`
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
    `}static setupFormObserver(t,e){var i;a.activeObservers.has(e)&&(null===(i=a.activeObservers.get(e))||void 0===i||i.disconnect());const n=new MutationObserver(i=>{let n=!1;i.forEach(t=>{"childList"===t.type&&t.addedNodes.forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(n=!0)})}),n&&!a.cleanupQueue.has(e)&&(a.cleanupQueue.add(e),setTimeout(()=>{a.aggressiveCleanup(t),a.cleanupQueue.delete(e)},10))});n.observe(t,{childList:!0,subtree:!0,characterData:!0}),a.activeObservers.set(e,n),setTimeout(()=>{"undefined"!=typeof document&&document.contains(t)||(n.disconnect(),a.activeObservers.delete(e))},3e4)}static aggressiveCleanup(t){var e;if(!t)return;const i=["action","entity","template_mode","icon","name","value","text","url","path","attribute","state","condition","enabled","disabled","template","unified_template","unified_template_mode","mode","type","size","color","style","width","height","radius","opacity","service","data","latitude","longitude","navigation_path","show_icon","label","button"],n=t.querySelector("ha-form");if(!n)return;const o=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,null),a=[];let r;for(;r=o.nextNode();){const t=null===(e=r.textContent)||void 0===e?void 0:e.trim().toLowerCase();t&&i.includes(t)&&a.push(r)}a.forEach(t=>{var e;const i=t.parentElement;if(i){const n=i.querySelector("input, select, ha-entity-picker, ha-selector, mwc-select, mwc-textfield");t.textContent&&t.textContent.trim().length<30&&(n||(null===(e=i.parentElement)||void 0===e?void 0:e.querySelector("input, select, ha-entity-picker, ha-selector")))&&t.remove()}}),n.querySelectorAll("*").forEach(t=>{var e,n;const o=null===(e=t.textContent)||void 0===e?void 0:e.trim().toLowerCase();o&&i.includes(o)&&0===t.children.length&&(null===(n=t.parentElement)||void 0===n?void 0:n.querySelector("input, select, ha-entity-picker, ha-selector"))&&(t.style.cssText="display: none !important; visibility: hidden !important; opacity: 0 !important; height: 0 !important; width: 0 !important; margin: 0 !important; padding: 0 !important;")}),['div[role="group"] > div:first-child:not([class])','div[role="group"] > span:first-child:not([class])',".mdc-form-field__label",".mdc-text-field__label",".mdc-select__label","label:not([for])","div:not([class]):not([id])","span:not([class]):not([id])"].forEach(t=>{try{n.querySelectorAll(t).forEach(t=>{var e;const n=null===(e=t.textContent)||void 0===e?void 0:e.trim().toLowerCase();n&&i.includes(n)&&(t.style.cssText="display: none !important;")})}catch(t){}}),n.querySelectorAll('[class*="mdc-"]').forEach(t=>{var e;const n=null===(e=t.textContent)||void 0===e?void 0:e.trim().toLowerCase();n&&i.includes(n)&&0===t.children.length&&(t.classList.contains("mdc-floating-label")||t.classList.contains("mdc-form-field__label")||t.classList.contains("mdc-text-field__label"))&&(t.style.cssText="display: none !important;")}),setTimeout(()=>{var t;if("undefined"==typeof document)return;const e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT,null),o=[];let a;for(;a=e.nextNode();){const e=null===(t=a.textContent)||void 0===t?void 0:t.trim().toLowerCase();e&&i.includes(e)&&o.push(a)}o.forEach(t=>{t.parentNode&&(t.textContent="")})},50)}static getCleanFormStyles(){return"\n      /* Ultra-aggressive label hiding */\n      .ultra-clean-form ha-form label,\n      .ultra-clean-form ha-form .label,\n      .ultra-clean-form ha-form .mdc-floating-label,\n      .ultra-clean-form ha-form .mdc-text-field__label,\n      .ultra-clean-form ha-form .mdc-select__label,\n      .ultra-clean-form ha-form .mdc-form-field__label,\n      .ultra-clean-form ha-form .ha-form-label,\n      .ultra-clean-form ha-form .mdc-notched-outline__leading,\n      .ultra-clean-form ha-form .mdc-notched-outline__notch,\n      .ultra-clean-form ha-form .mdc-notched-outline__trailing,\n      .ultra-clean-form ha-form .mdc-line-ripple {\n        display: none !important;\n        visibility: hidden !important;\n        opacity: 0 !important;\n        height: 0 !important;\n        width: 0 !important;\n        margin: 0 !important;\n        padding: 0 !important;\n        font-size: 0 !important;\n        line-height: 0 !important;\n      }\n\n      /* Override any existing label styles completely */\n      .ultra-clean-form label,\n      .ultra-clean-form .ultra-clean-form label *,\n      .ultra-clean-form ha-form label,\n      .ultra-clean-form ha-form label * {\n        display: none !important;\n        visibility: hidden !important;\n        opacity: 0 !important;\n        height: 0 !important;\n        width: 0 !important;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: none !important;\n        outline: none !important;\n        background: none !important;\n        font-size: 0 !important;\n        line-height: 0 !important;\n        position: absolute !important;\n        left: -9999px !important;\n        top: -9999px !important;\n        z-index: -1 !important;\n        pointer-events: none !important;\n      }\n\n      /* Hide any text that could be a redundant label */\n      .ultra-clean-form ha-form div:not([class]):not([id]),\n      .ultra-clean-form ha-form span:not([class]):not([id]),\n      .ultra-clean-form ha-form p:not([class]):not([id]) {\n        font-size: 0 !important;\n        line-height: 0 !important;\n        color: transparent !important;\n        height: 0 !important;\n        overflow: hidden !important;\n      }\n\n      /* Make sure form inputs still work */\n      .ultra-clean-form ha-form input,\n      .ultra-clean-form ha-form select,\n      .ultra-clean-form ha-form textarea,\n      .ultra-clean-form ha-form ha-entity-picker,\n      .ultra-clean-form ha-form ha-icon-picker,\n      .ultra-clean-form ha-form ha-selector,\n      .ultra-clean-form ha-form .mdc-text-field,\n      .ultra-clean-form ha-form .mdc-select,\n      .ultra-clean-form ha-form .mdc-switch {\n        font-size: 14px !important;\n        line-height: normal !important;\n        color: var(--primary-text-color) !important;\n        height: auto !important;\n        width: auto !important;\n        margin-top: 0 !important;\n        border-radius: 8px !important;\n      }\n\n      /* Ensure dropdowns work */\n      .ultra-clean-form ha-form .mdc-select__selected-text,\n      .ultra-clean-form ha-form .mdc-select__dropdown-icon {\n        font-size: 14px !important;\n        color: var(--primary-text-color) !important;\n        opacity: 1 !important;\n        height: auto !important;\n        width: auto !important;\n      }\n\n      /* Style field titles and descriptions consistently */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n       \n        margin-bottom: 4px !important;\n        display: block !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        display: block !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)) !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n    "}static cleanupRedundantLabels(t){a.aggressiveCleanup(t)}static renderField(t,e,i,o,r,s){return n.qy`
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
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
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