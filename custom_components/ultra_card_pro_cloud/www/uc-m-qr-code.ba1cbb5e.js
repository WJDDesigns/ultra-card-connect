export const __webpack_esm_ids__=[8794];export const __webpack_esm_modules__={8885(e,t,o){o.d(t,{UltraQrCodeModule:()=>x});var i=o(2618),r=o(7283),n=o.n(r),l=o(7475),a=o(5147),d=o(8938),s=o(378),c=o(6478),g=o(5320),_=o(5121),u=o(5155),p=o(7907);o(7921);const m="uc-qr-data-ready",h=new Map,v=new Set,b=new Map,y=new Set;function f(e,t){var o;if(!e.logo_enabled)return"";const i=e.logo_image_type||"url";if("url"===i||"upload"===i){const o=e.logo_url||"";return o?t?(0,p.VG)(t,o):o:""}if(!t)return"";const r=e.logo_image_entity;if(!r||!t.states[r])return"";const n=t.states[r];if("entity"===i){const e=null===(o=n.attributes)||void 0===o?void 0:o.entity_picture;return e?(0,p.VG)(t,String(e)):n.state?(0,p.VG)(t,n.state):""}if("attribute"===i){const o=e.logo_image_attribute||"";if(!o)return"";const i=o.split(".");let r=n.attributes;for(const e of i){if(null==r||"object"!=typeof r){r=void 0;break}r=r[e]}return null!=r?(0,p.VG)(t,String(r)):""}return""}const q=["qr_content","content"];class x extends l.m{constructor(){super(...arguments),this.metadata={type:"qr_code",title:"QR Code",description:"Generate QR codes from URL, text, template, or entity state",author:"WJD Designs",version:"1.0.0",icon:"mdi:qrcode",category:"content",tags:["qr","qrcode","pro","premium","barcode"]}}createDefault(e,t){return{id:e||this.generateId("qr_code"),type:"qr_code",content_mode:"static",content_static:"https://www.home-assistant.io",unified_template_mode:!1,unified_template:"",size:200,alignment:"center",show_label:!1,label_text:"",label_below:!0,fg_color:"#000000",bg_color:"#ffffff",error_correction:"M",qr_margin:1,dot_style:"square",corner_square_style:"square",corner_dot_style:"square",logo_enabled:!1,logo_image_type:"url",logo_url:"",logo_image_entity:"",logo_image_attribute:"",logo_size:.25,logo_margin:2,logo_hide_bg_dots:!0,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderActionsTab(e,t,o,i){return a.A.render(e,t,e=>i(e))}renderOtherTab(e,t,o,i){return d.X.render(e,t,e=>i(e))}renderGeneralTab(e,t,o,r){var n,l,a,d,g,_,u,m,v;const y=e,f=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",x=s.xd.checkIntegrationAuth(t);return"pro"===(null===(l=null==x?void 0:x.subscription)||void 0===l?void 0:l.tier)&&"active"===(null===(a=null==x?void 0:x.subscription)||void 0===a?void 0:a.status)?i.qy`
      ${this.injectUcFormStyles()}

      <!-- Content source -->
      ${this.renderSettingsSection((0,c.kg)("editor.qr_code.content_title",f,"Content"),(0,c.kg)("editor.qr_code.content_title_desc",f,"Configure the text or URL to encode."),[{title:(0,c.kg)("editor.qr_code.content_mode",f,"Source"),description:(0,c.kg)("editor.qr_code.content_mode_desc",f,"Where to get the text to encode"),hass:t,data:{content_mode:y.content_mode||"static"},schema:[this.selectField("content_mode",[{value:"static",label:(0,c.kg)("editor.qr_code.static",f,"Static URL / Text")},{value:"unified",label:(0,c.kg)("editor.qr_code.unified_template",f,"Unified template")},{value:"entity",label:(0,c.kg)("editor.qr_code.entity",f,"Entity State")}])],onChange:e=>{const t=e.detail.value.content_mode;r(Object.assign({content_mode:t,unified_template_mode:"unified"===t},"unified"!==t?{unified_template:""}:{})),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
      ${"static"===y.content_mode?this.renderFieldSection((0,c.kg)("editor.qr_code.static_content",f,"URL or text"),(0,c.kg)("editor.qr_code.static_desc",f,"Text or URL to encode in the QR code"),t,{content_static:y.content_static||""},[this.textField("content_static")],e=>{r({content_static:e.detail.value.content_static}),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}
      ${"unified"===y.content_mode||y.unified_template_mode?i.qy`
            <div>
              <div
                style="font-size: 13px; color: var(--secondary-text-color); margin: 8px 0 12px; display:flex; align-items:center; gap:8px; flex-wrap:wrap;"
              >
                <span
                  >${(0,c.kg)("editor.qr_code.unified_template_desc",f,'JSON with "qr_content" (URL or text to encode), or a plain Jinja string result.')}</span
                >
                <button
                  type="button"
                  class="help-btn"
                  style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                  title="${(0,c.kg)("editor.qr_code.unified_cheatsheet",f,"Template cheatsheet")}"
                  @click=${e=>{e.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"qr"}}))}}
                >
                  <ha-icon
                    icon="mdi:help-circle"
                    style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"
                  ></ha-icon>
                </button>
              </div>
            <div
              style="margin-top: 12px;"
              @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
              @dragstart=${e=>e.stopPropagation()}
            >
              <ultra-template-editor
                .hass=${t}
                .value=${y.unified_template||""}
                .placeholder=${'{\n  "qr_content": "{{ states(\'sensor.door_lock\') }}"\n}'}
                .minHeight=${120}
                .maxHeight=${360}
                @value-changed=${e=>{r({unified_template:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
              ></ultra-template-editor>
              ${this.renderTemplateKeyWarning(y.unified_template,q,f)}
            </div>
            </div>
          `:""}
      ${"entity"===y.content_mode?i.qy`
            ${this.renderEntityPickerWithVariables(t,o,"content_entity",y.content_entity||"",e=>{r({content_entity:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},void 0,(0,c.kg)("editor.qr_code.entity_picker",f,"Entity"))}
            <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
              ${(0,c.kg)("editor.qr_code.entity_picker_desc",f,"Select an entity whose state (or attribute) will be encoded into the QR code.")}
            </div>
            ${this.renderFieldSection((0,c.kg)("editor.qr_code.attribute",f,"Attribute (optional)"),(0,c.kg)("editor.qr_code.attribute_desc",f,"Leave empty to use state; or e.g. friendly_name"),t,{content_attribute:y.content_attribute||""},[this.textField("content_attribute")],e=>{r({content_attribute:e.detail.value.content_attribute||void 0}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          `:""}

      <!-- Display -->
      ${this.renderSettingsSection((0,c.kg)("editor.qr_code.display_title",f,"Display"),"",[{title:(0,c.kg)("editor.qr_code.alignment",f,"Alignment"),description:"",hass:t,data:{alignment:y.alignment||"center"},schema:[this.selectField("alignment",[{value:"left",label:(0,c.kg)("editor.qr_code.align_left",f,"Left")},{value:"center",label:(0,c.kg)("editor.qr_code.align_center",f,"Center")},{value:"right",label:(0,c.kg)("editor.qr_code.align_right",f,"Right")}])],onChange:e=>{r({alignment:e.detail.value.alignment}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.qr_code.show_label",f,"Show label"),description:"",hass:t,data:{show_label:null!==(d=y.show_label)&&void 0!==d&&d},schema:[this.booleanField("show_label")],onChange:e=>{r({show_label:e.detail.value.show_label}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
      ${this.renderSliderField((0,c.kg)("editor.qr_code.size",f,"Size"),(0,c.kg)("editor.qr_code.size_desc",f,"Width and height in pixels"),null!==(g=y.size)&&void 0!==g?g:200,200,64,512,8,e=>{r({size:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}
      ${y.show_label?i.qy`
            ${this.renderFieldSection((0,c.kg)("editor.qr_code.label_text",f,"Label text"),"",t,{label_text:y.label_text||""},[this.textField("label_text")],e=>{r({label_text:e.detail.value.label_text}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            ${this.renderFieldSection((0,c.kg)("editor.qr_code.label_below",f,"Label below QR"),"",t,{label_below:!1!==y.label_below},[this.booleanField("label_below")],e=>{r({label_below:e.detail.value.label_below}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          `:""}

      <!-- Style -->
      ${this.renderSettingsSection((0,c.kg)("editor.qr_code.style_title",f,"Style"),"",[{title:(0,c.kg)("editor.qr_code.dot_style",f,"Dot pattern"),description:(0,c.kg)("editor.qr_code.dot_style_desc",f,"Shape of each individual data module"),hass:t,data:{dot_style:y.dot_style||"square"},schema:[this.selectField("dot_style",[{value:"square",label:(0,c.kg)("editor.qr_code.dot_square",f,"Square")},{value:"dots",label:(0,c.kg)("editor.qr_code.dot_dots",f,"Dots")},{value:"rounded",label:(0,c.kg)("editor.qr_code.dot_rounded",f,"Rounded")},{value:"extra-rounded",label:(0,c.kg)("editor.qr_code.dot_extra_rounded",f,"Extra Rounded")},{value:"classy",label:(0,c.kg)("editor.qr_code.dot_classy",f,"Classy")},{value:"classy-rounded",label:(0,c.kg)("editor.qr_code.dot_classy_rounded",f,"Classy Rounded")}])],onChange:e=>{r({dot_style:e.detail.value.dot_style}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.qr_code.corner_square_style",f,"Corner squares"),description:(0,c.kg)("editor.qr_code.corner_square_desc",f,"Shape of the three large corner finder squares"),hass:t,data:{corner_square_style:y.corner_square_style||"square"},schema:[this.selectField("corner_square_style",[{value:"square",label:(0,c.kg)("editor.qr_code.cs_square",f,"Square")},{value:"dot",label:(0,c.kg)("editor.qr_code.cs_dot",f,"Dot")},{value:"extra-rounded",label:(0,c.kg)("editor.qr_code.cs_extra_rounded",f,"Extra Rounded")}])],onChange:e=>{r({corner_square_style:e.detail.value.corner_square_style}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.qr_code.corner_dot_style",f,"Corner dots"),description:(0,c.kg)("editor.qr_code.corner_dot_desc",f,"Shape of the small inner dots inside each corner square"),hass:t,data:{corner_dot_style:y.corner_dot_style||"square"},schema:[this.selectField("corner_dot_style",[{value:"square",label:(0,c.kg)("editor.qr_code.cd_square",f,"Square")},{value:"dot",label:(0,c.kg)("editor.qr_code.cd_dot",f,"Dot")}])],onChange:e=>{r({corner_dot_style:e.detail.value.corner_dot_style}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

      <!-- Logo -->
      ${this.renderSettingsSection((0,c.kg)("editor.qr_code.logo_title",f,"Logo / Icon"),"",[{title:(0,c.kg)("editor.qr_code.logo_enabled",f,"Show logo in center"),description:"",hass:t,data:{logo_enabled:null!==(_=y.logo_enabled)&&void 0!==_&&_},schema:[this.booleanField("logo_enabled")],onChange:e=>{r({logo_enabled:e.detail.value.logo_enabled}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
      ${y.logo_enabled?i.qy`
            ${this.renderFieldSection((0,c.kg)("editor.qr_code.logo_image_type",f,"Logo source"),(0,c.kg)("editor.qr_code.logo_image_type_desc",f,"Where to load the logo image from"),t,{logo_image_type:y.logo_image_type||"url"},[this.selectField("logo_image_type",[{value:"url",label:(0,c.kg)("editor.qr_code.logo_source_url",f,"Image URL")},{value:"upload",label:(0,c.kg)("editor.qr_code.logo_source_upload",f,"Upload Image")},{value:"entity",label:(0,c.kg)("editor.qr_code.logo_source_entity",f,"Entity Image")},{value:"attribute",label:(0,c.kg)("editor.qr_code.logo_source_attribute",f,"Entity Attribute")}])],e=>{r({logo_image_type:e.detail.value.logo_image_type}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

            ${"url"===(y.logo_image_type||"url")?i.qy`
                  ${this.renderFieldSection((0,c.kg)("editor.qr_code.logo_url",f,"Logo image URL"),(0,c.kg)("editor.qr_code.logo_url_desc",f,"Direct URL to a PNG, JPG, or SVG image. Use /local/ paths for best results."),t,{logo_url:y.logo_url||""},[this.textField("logo_url")],e=>{const t=e.detail.value.logo_url;if(t!==y.logo_url){b.delete(y.logo_url||""),b.delete(t);for(const e of[...h.keys()])e.includes("logo:")&&h.delete(e)}r({logo_url:t})})}
                  ${y.logo_url&&""===b.get(y.logo_url)?i.qy`
                        <div style="display:flex;align-items:flex-start;gap:8px;padding:10px 12px;margin-bottom:12px;background:rgba(var(--warning-color-int,255,152,0),0.12);border:1px solid var(--warning-color,#ff9800);border-radius:var(--uc-r-8, 8px);font-size:13px;">
                          <ha-icon icon="mdi:alert-outline" style="--mdi-icon-size:18px;color:var(--warning-color,#ff9800);flex-shrink:0;margin-top:1px;"></ha-icon>
                          <div>
                            <strong>${(0,c.kg)("editor.qr_code.cors_title",f,"Image blocked by CORS")}</strong><br/>
                            <span style="color:var(--secondary-text-color);">${(0,c.kg)("editor.qr_code.cors_hint",f,"Copy the image to /config/www/ and use /local/your-image.png instead.")}</span>
                          </div>
                        </div>
                      `:""}
                `:""}

            ${"upload"===(y.logo_image_type||"url")?this.renderFileField((0,c.kg)("editor.qr_code.logo_upload_label",f,"Upload logo image"),(0,c.kg)("editor.qr_code.logo_upload_desc",f,"Click to upload an image (PNG, JPG, GIF, WebP, AVIF, SVG…) from your device."),t,y.logo_url||"",e=>{if(e){b.delete(e),b.delete((0,p.VG)(t,e));for(const e of[...h.keys()])e.includes("logo:")&&h.delete(e);r({logo_url:e,logo_image_type:"upload"})}else b.delete(y.logo_url||""),r({logo_url:""});setTimeout(()=>this.triggerPreviewUpdate(),50)},"image/*"):""}

            ${"entity"===(y.logo_image_type||"url")?this.renderEntityPickerWithVariables(t,o,"logo_image_entity",y.logo_image_entity||"",e=>{e!==y.logo_image_entity&&b.delete(y.logo_url||""),r({logo_image_entity:e})},void 0,(0,c.kg)("editor.qr_code.logo_entity",f,"Entity")):""}

            ${"attribute"===(y.logo_image_type||"url")?i.qy`
                  ${this.renderEntityPickerWithVariables(t,o,"logo_image_entity",y.logo_image_entity||"",e=>{e!==y.logo_image_entity&&b.delete(y.logo_url||""),r({logo_image_entity:e})},void 0,(0,c.kg)("editor.qr_code.logo_entity",f,"Entity"))}
                  ${this.renderFieldSection((0,c.kg)("editor.qr_code.logo_attribute",f,"Attribute name"),(0,c.kg)("editor.qr_code.logo_attribute_desc",f,"Attribute path containing the image URL (dot notation supported)."),t,{logo_image_attribute:y.logo_image_attribute||""},[this.textField("logo_image_attribute")],e=>{b.delete(y.logo_url||""),r({logo_image_attribute:e.detail.value.logo_image_attribute||void 0})})}
                `:""}

            ${this.renderSliderField((0,c.kg)("editor.qr_code.logo_size",f,"Logo size"),(0,c.kg)("editor.qr_code.logo_size_desc",f,"Logo as a fraction of the QR code area (10–30%)."),Math.round(100*(null!==(u=y.logo_size)&&void 0!==u?u:.25)),25,10,30,5,e=>{r({logo_size:e/100}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"%")}
            ${this.renderSliderField((0,c.kg)("editor.qr_code.logo_margin",f,"Logo margin"),(0,c.kg)("editor.qr_code.logo_margin_desc",f,"Padding around the logo in pixels."),null!==(m=y.logo_margin)&&void 0!==m?m:2,2,0,8,1,e=>{r({logo_margin:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}
            ${"H"!==(y.error_correction||"M")?i.qy`
                  <div style="display:flex;align-items:flex-start;gap:8px;padding:10px 12px;margin-bottom:12px;background:rgba(var(--info-color-int,33,150,243),0.1);border:1px solid var(--info-color,#2196f3);border-radius:var(--uc-r-8, 8px);font-size:13px;">
                    <ha-icon icon="mdi:information-outline" style="--mdi-icon-size:18px;color:var(--info-color,#2196f3);flex-shrink:0;margin-top:1px;"></ha-icon>
                    <div>
                      <strong>${(0,c.kg)("editor.qr_code.logo_ec_tip_title",f,"Tip: use H error correction")}</strong><br/>
                      <span style="color:var(--secondary-text-color);">${(0,c.kg)("editor.qr_code.logo_ec_tip",f,"Set error correction to H (30%) in the Advanced section for the best logo clarity.")}</span>
                    </div>
                  </div>
                `:""}
            ${this.renderFieldSection((0,c.kg)("editor.qr_code.logo_hide_bg_dots",f,"Hide dots behind logo"),"",t,{logo_hide_bg_dots:!1!==y.logo_hide_bg_dots},[this.booleanField("logo_hide_bg_dots")],e=>{r({logo_hide_bg_dots:e.detail.value.logo_hide_bg_dots}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          `:""}

      <!-- Advanced -->
      <div class="settings-section" style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;">
        <div class="section-title">${(0,c.kg)("editor.qr_code.advanced_title",f,"Advanced")}</div>
        <div class="field-title" style="margin-top: 8px;">${(0,c.kg)("editor.qr_code.fg_color",f,"Foreground color")}</div>
        <ultra-color-picker
          .label="${""}"
          .value="${y.fg_color||"#000000"}"
          .defaultValue="${"#000000"}"
          .hass="${t}"
          @value-changed="${e=>{r({fg_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}"
        ></ultra-color-picker>
        <div class="field-title" style="margin-top: 16px;">${(0,c.kg)("editor.qr_code.bg_color",f,"Background color")}</div>
        <ultra-color-picker
          .label="${""}"
          .value="${y.bg_color||"#ffffff"}"
          .defaultValue="${"#ffffff"}"
          .hass="${t}"
          @value-changed="${e=>{r({bg_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}"
        ></ultra-color-picker>
        ${this.renderFieldSection((0,c.kg)("editor.qr_code.error_correction",f,"Error correction"),(0,c.kg)("editor.qr_code.error_correction_desc",f,"Higher = more damage tolerance, larger code"),t,{error_correction:y.error_correction||"M"},[this.selectField("error_correction",[{value:"L",label:"L (7%)"},{value:"M",label:"M (15%)"},{value:"Q",label:"Q (25%)"},{value:"H",label:"H (30%)"}])],e=>{r({error_correction:e.detail.value.error_correction}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        ${this.renderSliderField((0,c.kg)("editor.qr_code.quiet_zone",f,"Quiet zone (margin)"),(0,c.kg)("editor.qr_code.quiet_zone_desc",f,"Modules around the QR code (0–10)"),null!==(v=y.qr_margin)&&void 0!==v?v:1,1,0,10,1,e=>{r({qr_margin:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
      </div>
    `:this.renderProLockUI(f)}_hashString(e){let t=0;for(let o=0;o<e.length;o++)t=(t<<5)-t+e.charCodeAt(o),t&=t;return Math.abs(t).toString(36)}renderProLockUI(e){return i.qy`
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
          ${(0,c.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
        <div
          style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 300px;"
        >
          ${(0,c.kg)("editor.qr_code.pro_description",e,"QR Code is a Pro feature that generates scannable QR codes from URLs, text, templates, or entity state.")}
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
          ${(0,c.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
        </a>
      </div>
    `}_renderQrGenerating(e){var t;return i.qy`
      <div class="qr-code-module-preview qr-code-loading" style="text-align: center; padding: 24px; color: var(--secondary-text-color);">
        <ha-icon icon="mdi:loading" class="qr-code-spinner" style="--mdi-icon-size: 32px;"></ha-icon>
        <div style="margin-top: 8px; font-size: 14px;">${(0,c.kg)("editor.qr_code.generating",(null===(t=null==e?void 0:e.locale)||void 0===t?void 0:t.language)||"en","Generating QR...")}</div>
      </div>
    `}_resolveContent(e,t,o){var i,r,n;const l="template"===e.content_mode&&e.content_template,a=!0===e.unified_template_mode||"unified"===e.content_mode||!!l,d=l?String(e.content_template):(e.unified_template||"").trim();if(a&&d&&t){const r=(0,u.KD)(d,t,o),n=this._hashString(r),l=`qr_unified_${e.id}_${n}`,a=null===(i=t.__uvc_template_strings)||void 0===i?void 0:i[l];if(null!=a){const e=(0,_.cv)(a);if(!(0,_.HD)(e)){const t=(0,_.ly)(e);if(t)return t.trim()}}try{new g.I(t).subscribeToTemplate(r,l,()=>{window.dispatchEvent(new CustomEvent(m))},{},o)}catch(e){}return""}const s=e.content_mode||"static";if("static"===s)return(e.content_static||"").trim()||"https://www.home-assistant.io";if("entity"===s&&e.content_entity&&(null===(r=null==t?void 0:t.states)||void 0===r?void 0:r[e.content_entity])){const o=t.states[e.content_entity];if(e.content_attribute){const t=null===(n=o.attributes)||void 0===n?void 0:n[e.content_attribute];return null!=t?String(t):""}return null!=o.state?String(o.state):""}return""}renderPreview(e,t,o,r){var l,a,d,s,g,_,u,p;const q=e,x="template"===q.content_mode&&q.content_template,k=(q.unified_template_mode||"unified"===q.content_mode||!!x)&&String(x||q.unified_template||"").trim().length>0,w=this._resolveContent(q,t,o),$=Math.min(512,Math.max(64,null!==(l=q.size)&&void 0!==l?l:200)),S=q.fg_color||"#000000",U=q.bg_color||"#ffffff",P=q.error_correction||"M",z=null!==(a=q.qr_margin)&&void 0!==a?a:1,F=q.alignment||"center",T=null!==(d=q.show_label)&&void 0!==d&&d,R=(q.label_text||"").trim(),C=!1!==q.label_below;let L,E=!1;const A=f(q,t);if(q.logo_enabled&&A){const e=b.get(A);void 0===e?function(e,t){var o,i;if(y.has(e))return;y.add(e);const r={};!((e.startsWith("http://")||e.startsWith("https://"))&&!e.startsWith(`${window.location.protocol}//${window.location.host}`))&&(null===(i=null===(o=null==t?void 0:t.auth)||void 0===o?void 0:o.data)||void 0===i?void 0:i.access_token)&&(r.Authorization=`Bearer ${t.auth.data.access_token}`),fetch(e,{mode:"cors",headers:r}).then(e=>{if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.blob()}).then(e=>new Promise((t,o)=>{const i=new FileReader;i.onloadend=()=>t(i.result),i.onerror=o,i.readAsDataURL(e)})).then(t=>{b.set(e,t),y.delete(e);for(const e of[...h.keys()])e.includes("logo:pending")&&h.delete(e);window.dispatchEvent(new CustomEvent(m))}).catch(()=>{b.set(e,""),y.delete(e);for(const e of[...h.keys()])e.includes("logo:pending")&&h.delete(e);window.dispatchEvent(new CustomEvent(m))})}(A,t):""===e?E=!0:L=e}const D=function(e,t,o){var i,r,n;const l=e.size||200,a=e.fg_color||"#000000",d=e.bg_color||"#ffffff",s=e.error_correction||"M",c=null!==(i=e.qr_margin)&&void 0!==i?i:1,g=e.dot_style||"square",_=e.corner_square_style||"square",u=e.corner_dot_style||"square",p=f(e,o),m=e.logo_enabled&&p?`${function(e,t){if(!e.logo_enabled)return"nologo";const o=f(e,t);if(!o)return"nologo";const i=b.get(o);return void 0===i?"logo:pending":""===i?"logo:failed":"logo:loaded"}(e,o)}|${null!==(r=e.logo_size)&&void 0!==r?r:.25}|${null!==(n=e.logo_margin)&&void 0!==n?n:4}|${!1!==e.logo_hide_bg_dots}`:"nologo";return`${e.id}|${t}|${l}|${a}|${d}|${s}|${c}|${g}|${_}|${u}|${m}`}(q,w,t),G=h.get(D);if(!w&&!k)return i.qy`
        <div class="qr-code-module-preview qr-code-placeholder" style="text-align: center; padding: 24px; color: var(--secondary-text-color);">
          <ha-icon icon="mdi:qrcode" style="--mdi-icon-size: 48px; opacity: 0.5;"></ha-icon>
          <div style="margin-top: 8px; font-size: 14px;">${(0,c.kg)("editor.qr_code.no_content",(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en","Add content in General tab")}</div>
        </div>
      `;if(!G&&w){if(v.has(D))return this._renderQrGenerating(t);v.add(D);const e=()=>{v.delete(D),window.dispatchEvent(new CustomEvent(m))};return new(n())(Object.assign(Object.assign({width:$,height:$,data:w,margin:z},L?{image:L}:{}),{qrOptions:{errorCorrectionLevel:P},dotsOptions:{type:q.dot_style||"square",color:S},cornersSquareOptions:{type:q.corner_square_style||"square",color:S},cornersDotOptions:{type:q.corner_dot_style||"square",color:S},backgroundOptions:{color:U},imageOptions:{margin:L?null!==(g=q.logo_margin)&&void 0!==g?g:4:0,imageSize:L?null!==(_=q.logo_size)&&void 0!==_?_:.25:.4,hideBackgroundDots:!L||!1!==q.logo_hide_bg_dots,saveAsBlob:!0}})).getRawData("png").then(t=>{if(!t)return h.set(D,""),void e();const o=new FileReader;o.onloadend=()=>{h.set(D,o.result||""),e()},o.onerror=()=>{h.set(D,""),e()},o.readAsDataURL(t)}).catch(()=>{h.set(D,""),e()}),this._renderQrGenerating(t)}if(!G)return i.qy`
        <div class="qr-code-module-preview qr-code-placeholder" style="text-align: center; padding: 24px; color: var(--secondary-text-color);">
          <ha-icon icon="mdi:qrcode" style="--mdi-icon-size: 48px; opacity: 0.5;"></ha-icon>
        </div>
      `;const Q=this.createGestureHandlers(e.id,{tap_action:q.tap_action,hold_action:q.hold_action,double_tap_action:q.double_tap_action,entity:void 0,module:q},t,o),M="center"===F?"margin-left: auto; margin-right: auto;":"right"===F?"margin-left: auto; margin-right: 0;":"margin-left: 0; margin-right: auto;",W=T&&R?i.qy`
            <div
              class="qr-code-label"
              style="font-size: 14px; color: var(--primary-text-color); margin-top: ${C?8:0}px; margin-bottom: ${C?0:8}px; text-align: center;"
            >
              ${R}
            </div>
          `:"",H=i.qy`
      <img
        src="${G}"
        alt="QR Code"
        width="${$}"
        height="${$}"
        style="display: block; ${M}"
      />
    `,O="url"===(q.logo_image_type||"url")&&(q.logo_url||"").startsWith("http")&&!q.logo_url.startsWith(`${window.location.protocol}//${window.location.host}`),V=E&&O?i.qy`
          <div
            class="qr-cors-warning"
            style="display:flex;align-items:center;gap:6px;padding:6px 10px;margin-top:6px;background:rgba(var(--warning-color-int,255,152,0),0.15);border:1px solid var(--warning-color,#ff9800);border-radius:var(--uc-r-6, 6px);font-size:12px;color:var(--primary-text-color);"
          >
            <ha-icon icon="mdi:alert-outline" style="--mdi-icon-size:16px;color:var(--warning-color,#ff9800);flex-shrink:0;"></ha-icon>
            <span>${(0,c.kg)("editor.qr_code.cors_error",(null===(u=null==t?void 0:t.locale)||void 0===u?void 0:u.language)||"en","Logo not loaded — the image server blocked cross-origin requests. Use a /local/ path or a CORS-enabled URL.")}</span>
          </div>
        `:"",I=this.getHoverEffectClass(e),j=this.buildStyleString(this.buildDesignStyles(e,t));return this.wrapWithAnimation(i.qy`
      <div
        class="qr-code-module-preview ${I}"
        @pointerdown="${Q.onPointerDown}"
        @pointermove="${Q.onPointerMove}"
        @pointerup="${Q.onPointerUp}"
        @pointerleave="${Q.onPointerLeave}"
        @pointercancel="${Q.onPointerCancel}"
        @keydown="${Q.onKeyDown}"
        role=${Q.isActionable?"button":i.s6}
        tabindex=${Q.isActionable?"0":i.s6}
        style="${j}; cursor: ${"nothing"!==(null===(p=q.tap_action)||void 0===p?void 0:p.action)?"pointer":"default"};"
      >
        ${C?H:W}
        ${C?W:H}
        ${V}
      </div>
    `,e,t)}validate(e){var t;const o=e,i=[...super.validate(e).errors],r=o.content_mode||"static";"static"!==r||(o.content_static||"").trim()||i.push("Static content is required when source is Static"),"unified"!==r&&!o.unified_template_mode||String(o.unified_template||"").trim()||i.push("Unified template is required when source is Unified template"),"entity"!==r||(o.content_entity||"").trim()||i.push("Entity is required when source is Entity");const n=null!==(t=o.size)&&void 0!==t?t:200;return(n<64||n>512)&&i.push("Size must be between 64 and 512"),{valid:0===i.length,errors:i}}getStyles(){return`\n      ${l.m.getSliderStyles()}\n      .qr-code-module-preview img {\n        display: block;\n      }\n      .qr-code-loading .qr-code-spinner,\n      .qr-code-loading ha-icon.qr-code-spinner {\n        animation: qr-spin 1s linear infinite;\n        display: inline-block;\n      }\n      @keyframes qr-spin {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n    `}}}};