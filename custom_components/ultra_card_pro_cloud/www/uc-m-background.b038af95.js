export const __webpack_esm_ids__=[825];export const __webpack_esm_modules__={6868(e,t,o){o.d(t,{UltraBackgroundModule:()=>d});var i=o(2618),a=o(7475),r=o(8938),n=o(6478);class d extends a.m{constructor(){super(...arguments),this.metadata={type:"background",title:"Background",description:"Add custom background images to your dashboard view",author:"WJD Designs",version:"1.0.0",icon:"mdi:image-outline",category:"media",tags:["background","image","view"]}}createDefault(e){return{id:e||this.generateId("background"),type:"background",background_type:"none",background_image:"",background_image_entity:"",background_size:"cover",background_position:"center",background_repeat:"no-repeat",opacity:100,display_mode:"always",display_conditions:[]}}renderGeneralTab(e,t,o,a){var r;const d=e,c=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">

        <!-- Module Info Banner -->
        ${this.renderSettingsSection((0,n.kg)("editor.background.info_title",c,"View Background"),(0,n.kg)("editor.background.info_desc",c,"Apply custom background images to your dashboard view. Only the topmost enabled module with passing logic conditions will be applied."),[])}

        <!-- Background Source (type selector + source-specific fields, one card) -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.background.source_title",c,"Background Source")}
          </div>
          ${this.renderSegmentedField((0,n.kg)("editor.background.type",c,"Background Type"),(0,n.kg)("editor.background.type_desc",c,"Select the source type for your background image."),d.background_type||"none",[{value:"none",label:(0,n.kg)("editor.background.type_none",c,"None"),icon:"mdi:image-off-outline"},{value:"upload",label:(0,n.kg)("editor.background.type_upload",c,"Upload Image"),icon:"mdi:upload"},{value:"entity",label:(0,n.kg)("editor.background.type_entity",c,"Entity Image"),icon:"mdi:account-circle"},{value:"url",label:(0,n.kg)("editor.background.type_url",c,"Image URL"),icon:"mdi:link-variant"}],e=>{e!==(d.background_type||"none")&&(a({background_type:e}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          ${"url"===d.background_type?i.qy`
                <div style="margin-top: 8px;">
                  ${this.renderFieldSection((0,n.kg)("editor.background.image_url",c,"Image URL"),(0,n.kg)("editor.background.image_url_desc",c,"Enter the direct URL to the background image."),t,{background_image:d.background_image||""},[this.textField("background_image")],e=>a({background_image:e.detail.value.background_image}))}
                </div>
              `:""}
          ${"upload"===d.background_type?i.qy`
                <div style="margin-top: 8px;">
                  ${this.renderFileField((0,n.kg)("editor.background.upload",c,"Upload Image"),(0,n.kg)("editor.background.upload_desc",c,"Click to upload a background image file from your device."),t,d.background_image||"",e=>{a({background_image:e}),this.triggerPreviewUpdate()})}
                </div>
              `:""}
          ${"entity"===d.background_type?i.qy`
                <div style="margin-top: 8px;">
                  ${this.renderEntityPickerWithVariables(t,o,"background_image_entity",d.background_image_entity||"",e=>{e!==(d.background_image_entity||"")&&a({background_image_entity:e})},void 0,(0,n.kg)("editor.background.entity",c,"Entity"))}
                  <div class="field-description" style="margin-top: 4px;">
                    ${(0,n.kg)("editor.background.entity_desc",c,"Select an entity that provides a picture URL or image (e.g. person, camera, or media player).")}
                  </div>
                </div>
              `:""}
        </div>

        <!-- Background Settings -->
        ${"none"!==d.background_type?this.renderSettingsSection((0,n.kg)("editor.background.settings_title",c,"Background Settings"),(0,n.kg)("editor.background.settings_desc",c,"Control how the background image is displayed."),[{title:(0,n.kg)("editor.background.size",c,"Background Size"),description:(0,n.kg)("editor.background.size_desc",c,"Control how the background image is sized within the view."),hass:t,data:{background_size:d.background_size||"cover"},schema:[this.selectField("background_size",[{value:"cover",label:(0,n.kg)("editor.background.size_cover",c,"Cover (Fill entire area)")},{value:"contain",label:(0,n.kg)("editor.background.size_contain",c,"Contain (Fit within area)")},{value:"fill",label:(0,n.kg)("editor.background.size_fill",c,"Fill (Stretch to fit)")},{value:"auto",label:(0,n.kg)("editor.background.size_auto",c,"Auto (Original size)")}])],onChange:e=>{const t=e.detail.value.background_size;t!==(d.background_size||"cover")&&a({background_size:t})}},{title:(0,n.kg)("editor.background.position",c,"Background Position"),description:(0,n.kg)("editor.background.position_desc",c,"Set the position (e.g., center, top left, bottom right)."),hass:t,data:{background_position:d.background_position||"center"},schema:[this.textField("background_position")],onChange:e=>a({background_position:e.detail.value.background_position})},{title:(0,n.kg)("editor.background.repeat",c,"Background Repeat"),description:(0,n.kg)("editor.background.repeat_desc",c,"Control how the background image repeats."),hass:t,data:{background_repeat:d.background_repeat||"no-repeat"},schema:[this.selectField("background_repeat",[{value:"no-repeat",label:(0,n.kg)("editor.background.repeat_none",c,"No Repeat")},{value:"repeat",label:(0,n.kg)("editor.background.repeat_both",c,"Repeat")},{value:"repeat-x",label:(0,n.kg)("editor.background.repeat_x",c,"Repeat Horizontally")},{value:"repeat-y",label:(0,n.kg)("editor.background.repeat_y",c,"Repeat Vertically")}])],onChange:e=>{const t=e.detail.value.background_repeat;t!==(d.background_repeat||"no-repeat")&&a({background_repeat:t})}}]):""}

        <!-- Opacity Slider -->
        ${"none"!==d.background_type?this.renderSliderField((0,n.kg)("editor.background.opacity",c,"Opacity"),(0,n.kg)("editor.background.opacity_desc",c,"Control the opacity of the background image (0–100%)."),void 0!==d.opacity?d.opacity:100,100,0,100,1,e=>a({opacity:e}),"%"):""}

      </div>
    `}renderLogicTab(e,t,o,i){return r.X.render(e,t,i)}renderPreview(e,t,o,a){const r=e,n=this.buildStyleString(this.buildDesignStyles(e,t)),d=this.getHoverEffectClass(e),c=(()=>{if("live"===a||"ha-preview"===a)return!1;try{return"1"===new URLSearchParams(window.location.search).get("edit")}catch(e){return!1}})();if("live"===a||"ha-preview"===a||c){const o="none"!==r.background_type?("upload"===r.background_type?"Uploaded Image":"entity"===r.background_type?"Entity Image":"url"===r.background_type?"URL Image":"No Background")+" • Per View":"No Background";return this.wrapWithAnimation(i.qy`
        <div
          class="${d}"
          style="${n}; padding: 16px; text-align: center; color: var(--secondary-text-color); font-style: italic; background: rgba(var(--rgb-primary-color), 0.05); border-radius: var(--uc-r-8, 8px); border: 2px dashed var(--divider-color);"
        >
          <ha-icon
            icon="mdi:image-outline"
            style="--mdi-icon-size: 48px; color: var(--primary-color); margin-bottom: 8px;"
          ></ha-icon>
          <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">
            View Background
          </div>
          <div style="font-size: 12px;">
            ${o}
          </div>
          <div style="font-size: 11px; margin-top: 8px; opacity: 0.7;">
            Background is applied to the current view. Check your dashboard to see it in action.
          </div>
        </div>
      `,e,t)}return i.qy``}validate(e){const t=e,o=[];return"upload"!==t.background_type&&"url"!==t.background_type||t.background_image&&""!==t.background_image.trim()||o.push("Background image is required for upload/url type"),"entity"===t.background_type&&(t.background_image_entity&&""!==t.background_image_entity.trim()||o.push("Entity is required for entity type")),void 0!==t.opacity&&(t.opacity<0||t.opacity>100)&&o.push("Opacity must be between 0 and 100"),{valid:0===o.length,errors:o}}getStyles(){return a.m.getSliderStyles()}}}};