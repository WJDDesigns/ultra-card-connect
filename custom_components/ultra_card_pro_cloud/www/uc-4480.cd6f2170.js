export const __webpack_esm_ids__=[4480];export const __webpack_esm_modules__={4480(t,e,i){var o=i(2618),a=i(4791),s=i(7568),r=i(5650),n=i(7907),d=i(6478),l=function(t,e,i,o){var a,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(s<3?a(r):s>3?a(e,i,r):a(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};const p=268435456;class c extends o.WF{constructor(){super(...arguments),this.payload=null,this.mode="create",this.existing=null,this.language="en",this._title="",this._description="",this._category="",this._tags="",this._code="",this._integrations="",this._photos=[],this._keptPhotos=[],this._featuredFile=null,this._keptFeatured=null,this._featuredUploadState=null,this._submitting=!1,this._submitted=!1,this._error="",this._categories=[],this._loadingCategories=!0,this._showValidation=!1,this._photoStates=[],this._submitStep="",this._prefilledExistingId=null}_t(t,e){return(0,d.kg)(t,this.language,e)}connectedCallback(){var t;super.connectedCallback(),"edit"===this.mode&&this.existing?this._prefillFromExisting(this.existing):(null===(t=this.payload)||void 0===t?void 0:t.shortcode)&&(this._code=this.payload.shortcode),s.Q.fetchPresetCategories().then(t=>{this._categories=t,this._loadingCategories=!1})}updated(t){var e;t.has("payload")&&(null===(e=this.payload)||void 0===e?void 0:e.shortcode)&&"create"===this.mode&&(this._code=this.payload.shortcode),(t.has("existing")||t.has("mode"))&&"edit"===this.mode&&this.existing&&this.existing.id!==this._prefilledExistingId&&this._prefillFromExisting(this.existing)}_prefillFromExisting(t){var e,i;this._prefilledExistingId=t.id,this._title=t.name||"",this._description=t.description||"",this._category=t.category||"",this._tags=Array.isArray(t.tags)?t.tags.join(", "):"",this._code=t.shortcode||"",this._integrations=t.integrations||"",this._photos=[],this._photoStates=[],this._featuredFile=null,this._keptFeatured=null,this._featuredUploadState=null,this._submitted=!1,this._error="",this._showValidation=!1;const o=null!==(e=t.photo_ids)&&void 0!==e?e:[],a=null!==(i=t.gallery)&&void 0!==i?i:[],s=t.featured_image_id||o[0]||0,r=t.featured_image||a[0]||"";this._keptFeatured=s||r?{id:s||void 0,url:r}:null,o.length>0?this._keptPhotos=o.map((t,e)=>({id:t,url:a[e]||""})).filter((e,i)=>!(s&&e.id===s||!t.featured_image_id&&0===i)):a.length>1?this._keptPhotos=a.slice(1).map(t=>({url:t})):this._keptPhotos=[]}_close(){this._reset(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_reset(){var t,e;this._title="",this._description="",this._category="",this._tags="",this._code=null!==(e=null===(t=this.payload)||void 0===t?void 0:t.shortcode)&&void 0!==e?e:"",this._integrations="",this._photos=[],this._keptPhotos=[],this._featuredFile=null,this._keptFeatured=null,this._featuredUploadState=null,this._prefilledExistingId=null,this._error="",this._submitted=!1,this._showValidation=!1,this._photoStates=[],this._submitStep=""}_updateCodeFromLayout(){var t;(null===(t=this.payload)||void 0===t?void 0:t.shortcode)&&(this._code=this.payload.shortcode,this._error="")}_removeKeptPhoto(t){this._keptPhotos=this._keptPhotos.filter((e,i)=>i!==t)}get _totalPhotoCount(){return this._keptPhotos.length+this._photos.length}get _hasFeatured(){return!(!this._keptFeatured&&!this._featuredFile)}get _titleValid(){return this._title.trim().length>0}get _descriptionValid(){return this._description.trim().length>0}get _categoryValid(){return""!==this._category}_categoryIcon(t){return{layout:"mdi:view-dashboard-outline",content:"mdi:text-box-outline",data:"mdi:chart-box-outline",interactive:"mdi:gesture-tap",input:"mdi:form-textbox",media:"mdi:image-multiple-outline",badges:"mdi:text-box-outline",layouts:"mdi:view-dashboard-outline",widgets:"mdi:chart-box-outline"}[t]||"mdi:tag-outline"}get _codeValid(){return this._code.trim().length>0}get _canSubmit(){return this._titleValid&&this._descriptionValid&&this._categoryValid&&this._codeValid&&this._hasFeatured&&!this._submitting}_trySubmit(){this._showValidation=!0,this._canSubmit&&this._handleSubmit()}_renderPrivacyNotice(){var t,e;if(!(null===(t=this.payload)||void 0===t?void 0:t.shortcode))return o.s6;const i=null!==(e=this.payload.redactions)&&void 0!==e?e:[];return o.qy`
      <div class="privacy-notice">
        <ha-icon icon="mdi:shield-check-outline"></ha-icon>
        <div>
          ${i.length?o.qy`
                <strong>Replaced before sharing:</strong>
                <ul>
                  ${i.map(t=>o.qy`<li>${t.description} (${t.count})</li>`)}
                </ul>
              `:o.qy`<strong>No IP addresses or personal names were detected.</strong>`}
          <div class="privacy-notice-foot">
            Your entity IDs and friendly names are still part of the preset code above.
            Review it before submitting.
          </div>
        </div>
      </div>
    `}_formatBytes(t){return t<1024?`${t} B`:t<1048576?`${(t/1024).toFixed(1)} KB`:`${(t/1048576).toFixed(1)} MB`}_handleFileInput(t){var e;const i=t.target,o=Array.from(null!==(e=i.files)&&void 0!==e?e:[]);if(0===o.length)return;const a=o.filter(t=>t.size<=p),s=o.filter(t=>t.size>p);s.length&&(this._error=`${s.length} file(s) exceed the 256 MB limit and were skipped.`);const r=Math.max(0,5-this._keptPhotos.length),n=[...this._photos,...a];this._photos=n.slice(0,r),i.value=""}_handleFeaturedInput(t){var e;const i=t.target,o=null===(e=i.files)||void 0===e?void 0:e[0];if(o){if(o.size>p)return this._error="Featured image exceeds the 256 MB limit.",void(i.value="");this._featuredFile=o,this._keptFeatured=null,this._error="",i.value=""}}_removeFeatured(){this._featuredFile=null,this._keptFeatured=null,this._featuredUploadState=null}_removePhoto(t){this._photos=this._photos.filter((e,i)=>i!==t)}_showHaToast(t){window.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:t,duration:4e3}}))}async _uploadFeatured(){var t;if(this._featuredFile){this._submitStep="featured",this._featuredUploadState={file:this._featuredFile,status:"uploading"},await this.updateComplete;try{const t=await s.Q.uploadPresetPhoto(this._featuredFile);return this._featuredUploadState={file:this._featuredFile,status:"done",id:t.id},this._showHaToast(`Featured image uploaded — "${this._featuredFile.name}"`),t.id}catch(t){const e=t instanceof Error?t.message:"Upload failed";throw this._featuredUploadState={file:this._featuredFile,status:"error",error:e},t instanceof Error?t:new Error(String(t))}}if((null===(t=this._keptFeatured)||void 0===t?void 0:t.id)&&this._keptFeatured.id>0)return this._keptFeatured.id;if("edit"!==this.mode||!this._keptFeatured)throw new Error("Featured image is required.")}async _uploadNewPhotos(){const t=[];if(0===this._photos.length)return t;this._submitStep="photos",this._photoStates=this._photos.map(t=>({file:t,status:"pending"})),await this.updateComplete;for(let e=0;e<this._photos.length;e++){const i=this._photos[e];this._photoStates=this._photoStates.map((t,i)=>i===e?Object.assign(Object.assign({},t),{status:"uploading"}):t),await this.updateComplete;try{const o=await s.Q.uploadPresetPhoto(i);t.push(o.id),this._photoStates=this._photoStates.map((t,i)=>i===e?Object.assign(Object.assign({},t),{status:"done",id:o.id}):t),this._showHaToast(`Photo ${e+1} of ${this._photos.length} uploaded — "${i.name}"`),await this.updateComplete}catch(t){const i=t instanceof Error?t.message:"Upload failed";if(this._photoStates=this._photoStates.map((t,o)=>o===e?Object.assign(Object.assign({},t),{status:"error",error:i}):t),await this.updateComplete,t instanceof Error)throw t;throw new Error(String(t))}}return t}async _handleSubmit(){var t,e;if(!this._canSubmit)return;this._submitting=!0,this._error="",await this.updateComplete;const i=this._tags.trim()?this._tags.split(",").map(t=>t.trim()).filter(Boolean):void 0,o=this._integrations.trim()||void 0;try{const a=await this._uploadFeatured(),n=this._keptPhotos.map(t=>t.id).filter(t=>"number"==typeof t&&t>0),d=await this._uploadNewPhotos(),l=[...n,...d].filter(t=>t!==a);if(this._submitStep="preset",await this.updateComplete,"edit"===this.mode&&this.existing){const t={name:this._title.trim(),description:this._description.trim(),category:this._category,shortcode:this._code.trim(),photo_ids:l};a&&a>0&&(t.featured_image_id=a),i&&(t.tags=i),void 0!==o&&(t.integrations=o),await r.a.update(this.existing.id,t),this._submitted=!0,this.dispatchEvent(new CustomEvent("preset-updated",{detail:{success:!0,id:this.existing.id},bubbles:!0,composed:!0}))}else{const r={name:this._title.trim(),description:this._description.trim(),category:this._category,shortcode:this._code.trim(),source:"community"};i&&(r.tags=i),o&&(r.integrations=o),(null===(t=this.payload)||void 0===t?void 0:t.card_settings)&&Object.keys(this.payload.card_settings).length>0&&(r.card_settings=this.payload.card_settings),(null===(e=this.payload)||void 0===e?void 0:e.custom_variables)&&this.payload.custom_variables.length>0&&(r.custom_variables=this.payload.custom_variables),await s.Q.submitPreset(r,void 0,l.length?l:void 0,a&&a>0?a:void 0),this._submitted=!0,this.dispatchEvent(new CustomEvent("preset-submitted",{detail:{success:!0},bubbles:!0,composed:!0}))}}catch(t){this._error=t instanceof Error?t.message:"edit"===this.mode?"Failed to update preset. Please try again.":"Failed to submit preset. Please try again."}finally{this._submitting=!1,this._submitStep=""}}render(){const t="edit"===this.mode,e=t?this._t("hub.submit_preset.edit_title","Edit your preset"):this._t("hub.submit_preset.create_title","Share your layout"),i=t?this._t("hub.submit_preset.edit_subtitle","Update on ultracard.io"):this._t("hub.submit_preset.create_subtitle","Submit to ultracard.io");return o.qy`
      <ha-dialog
        open
        width="large"
        header-title=${e}
        header-subtitle=${i}
        @closed=${this._close}
      >
        <!-- Replace default leading close; close control lives in headerActionItems (right). -->
        <span slot="headerNavigationIcon" class="header-nav-placeholder"></span>
        <ha-icon-button
          slot="headerActionItems"
          .label=${"Close"}
          @click=${this._close}
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>

        <div class="dialog-body">
          ${this._submitted?this._renderSuccess():this._renderForm()}
        </div>

        ${this._submitted?"":o.qy`
              <div slot="footer" class="dialog-footer-actions">
                <button
                  type="button"
                  class="btn btn-secondary footer-btn"
                  @click=${this._close}
                  ?disabled=${this._submitting}
                >
                  ${this._t("hub.submit_preset.cancel","Cancel")}
                </button>
                <button
                  type="button"
                  class="btn btn-primary footer-btn"
                  ?disabled=${!this._canSubmit||this._submitting}
                  @click=${this._trySubmit}
                >
                  ${this._submitting?"featured"===this._submitStep?o.qy`<ha-icon icon="mdi:loading" class="spin"></ha-icon>
                          ${this._t("hub.submit_preset.uploading_featured","Uploading featured image…")}`:"photos"===this._submitStep?o.qy`<ha-icon icon="mdi:loading" class="spin"></ha-icon>
                          ${this._t("hub.submit_preset.uploading_photo","Uploading photo")}
                          ${this._photoStates.filter(t=>"pending"!==t.status).length}
                          of ${this._photos.length}…`:o.qy`<ha-icon icon="mdi:loading" class="spin"></ha-icon>
                          ${t?this._t("hub.submit_preset.saving","Saving…"):this._t("hub.submit_preset.sending","Sending…")}`:t?o.qy`<ha-icon icon="mdi:content-save"></ha-icon>
                          ${this._t("hub.submit_preset.save","Save")}`:o.qy`<ha-icon icon="mdi:send"></ha-icon>
                          ${this._t("hub.submit_preset.send","Send")}`}
                </button>
              </div>
            `}
      </ha-dialog>
    `}_renderSuccess(){var t;const e="edit"===this.mode,i="publish"===(null===(t=this.existing)||void 0===t?void 0:t.status),a=e?this._t("hub.submit_preset.success_edit_title","Preset updated"):this._t("hub.submit_preset.success_create_title","Preset Submitted!"),s=e?i?this._t("hub.submit_preset.success_edit_review","Update submitted for review. Your live preset stays online until the update is approved."):this._t("hub.submit_preset.success_edit_saved","Saved."):this._t("hub.submit_preset.success_create_body","Thank you for sharing! Your preset is now pending review. Once our team reviews and approves it, it will appear in the Preset Gallery.");return o.qy`
      <div class="submit-success">
        <ha-icon icon="mdi:check-circle"></ha-icon>
        <h3>${a}</h3>
        <p>${s}</p>
        <button class="btn btn-primary" @click=${this._close}>
          <ha-icon icon="mdi:check"></ha-icon>
          ${this._t("hub.submit_preset.got_it","Got it, thanks!")}
        </button>
      </div>
    `}_renderForm(){var t,e,i;const a="edit"===this.mode;return o.qy`
      <p class="dialog-subtitle">
        ${a?this._t("hub.submit_preset.edit_blurb","Update the details below. Changes to a live preset are queued for review while the current version stays online."):this._t("hub.submit_preset.create_blurb","Share your layout with the Ultra Card community. Fill in the details below and submit — once our team reviews and approves it, it will appear in the Preset Gallery.")}
      </p>

      <!-- Title -->
      <div class="field">
        <label>${this._t("hub.submit_preset.field_title","Preset Title")}<span class="required-star">*</span></label>
        <input
          type="text"
          class=${this._showValidation&&!this._titleValid?"invalid":""}
          .value=${this._title}
          @input=${t=>{this._title=t.target.value,this._error=""}}
          placeholder="My Awesome Preset"
          ?disabled=${this._submitting}
        />
        ${this._showValidation&&!this._titleValid?o.qy`<span class="field-error">${this._t("hub.submit_preset.title_required","Title is required.")}</span>`:""}
      </div>

      <!-- Description -->
      <div class="field">
        <label>${this._t("hub.submit_preset.field_description","Preset Description")}<span class="required-star">*</span></label>
        <textarea
          class=${this._showValidation&&!this._descriptionValid?"invalid":""}
          .value=${this._description}
          @input=${t=>{this._description=t.target.value,this._error=""}}
          placeholder="Describe what this preset does and when to use it…"
          ?disabled=${this._submitting}
        ></textarea>
        ${this._showValidation&&!this._descriptionValid?o.qy`<span class="field-error">${this._t("hub.submit_preset.description_required","Description is required.")}</span>`:""}
      </div>

      <!-- Category + Tags -->
      <div class="field-row">
        <div class="field">
          <label>${this._t("hub.submit_preset.field_category","Preset Category")}<span class="required-star">*</span></label>
          <div
            class=${"cat-chips"+(this._showValidation&&!this._categoryValid?" invalid":"")}
            role="group"
            aria-label=${this._t("hub.submit_preset.field_category","Preset Category")}
          >
            ${this._categories.map(t=>{const e=this._categoryIcon(t.value);return o.qy`
                <button
                  type="button"
                  class="cat-chip ${this._category===t.value?"active":""}"
                  ?disabled=${this._submitting||this._loadingCategories}
                  @click=${()=>{this._category=t.value}}
                >
                  <ha-icon icon=${e}></ha-icon>
                  ${t.label}
                </button>
              `})}
          </div>
          ${this._loadingCategories?o.qy`<span class="field-hint">${this._t("hub.submit_preset.loading_categories","Loading categories…")}</span>`:this._showValidation&&!this._categoryValid?o.qy`<span class="field-error">${this._t("hub.submit_preset.category_required","Please select a category.")}</span>`:""}
        </div>
        <div class="field">
          <label>${this._t("hub.submit_preset.field_tags","Preset Tags")}</label>
          <input
            type="text"
            .value=${this._tags}
            @input=${t=>{this._tags=t.target.value}}
            placeholder="dashboard, minimal, ev"
            ?disabled=${this._submitting}
          />
          <span class="field-hint">${this._t("hub.submit_preset.tags_hint","Comma-separated")}</span>
        </div>
      </div>

      <!-- Preset Code -->
      <div class="field">
        <label>${this._t("hub.submit_preset.field_code","Preset Code")}<span class="required-star">*</span></label>
        <textarea
          class=${"code-field"+(this._showValidation&&!this._codeValid?" invalid":"")}
          .value=${this._code}
          @input=${t=>{this._code=t.target.value,this._error=""}}
          placeholder="Please enter your Ultra Card Preset Code"
          ?disabled=${this._submitting}
        ></textarea>
        ${this._showValidation&&!this._codeValid?o.qy`<span class="field-error">${this._t("hub.submit_preset.code_required","Preset code is required.")}</span>`:o.qy`<span class="field-hint">
              ${(null===(t=this.payload)||void 0===t?void 0:t.shortcode)?this._t("hub.submit_preset.code_hint_layout","Auto-filled from your current card layout. Edit if needed."):this._t("hub.submit_preset.code_hint_paste","Paste your Ultra Card layout JSON here.")}
            </span>`}
        ${a&&(null===(e=this.payload)||void 0===e?void 0:e.shortcode)?o.qy`
              <button
                type="button"
                class="update-code-btn"
                ?disabled=${this._submitting}
                @click=${this._updateCodeFromLayout}
              >
                <ha-icon icon="mdi:refresh"></ha-icon>
                ${this._t("hub.submit_preset.update_code_from_layout","Update code from current layout")}
              </button>
            `:o.s6}
        ${this._renderPrivacyNotice()}
      </div>

      <!-- Featured image (required) -->
      <div class="field">
        <label>
          ${this._t("hub.submit_preset.field_featured","Featured Image")}
          <span class="required-star">*</span>
        </label>
        ${this._keptFeatured||this._featuredFile?o.qy`
              ${(null===(i=this._keptFeatured)||void 0===i?void 0:i.url)?o.qy`<img class="featured-preview" src=${this._keptFeatured.url} alt="" />`:this._featuredFile?o.qy`<div class="file-table" style="margin-bottom: 8px;">
                      <div class="file-row">
                        <span class="file-name">${this._featuredFile.name}</span>
                        <span class="file-size">${this._formatBytes(this._featuredFile.size)}</span>
                        <span></span>
                      </div>
                    </div>`:o.s6}
              <button
                type="button"
                class="btn btn-secondary"
                style="margin-bottom: 8px;"
                @click=${this._removeFeatured}
                ?disabled=${this._submitting}
              >
                <ha-icon icon="mdi:close"></ha-icon>
                ${this._t("hub.submit_preset.replace_featured","Remove / replace")}
              </button>
            `:o.qy`
              <label class="upload-zone" for="featured-upload">
                <span class="upload-zone-label">
                  <ha-icon icon="mdi:image-outline"></ha-icon>
                  <strong>${this._t("hub.submit_preset.upload_featured","Click to upload featured image")}</strong>
                  <span>${this._t("hub.submit_preset.featured_hint","Required · Used as the gallery thumbnail")}</span>
                </span>
                <input
                  id="featured-upload"
                  type="file"
                  accept=${n.iC}
                  @change=${this._handleFeaturedInput}
                  @input=${this._handleFeaturedInput}
                  ?disabled=${this._submitting}
                />
              </label>
            `}
        ${this._showValidation&&!this._hasFeatured?o.qy`<span class="field-error">${this._t("hub.submit_preset.featured_required","Featured image is required.")}</span>`:o.s6}
      </div>

      <!-- Additional photos (optional) -->
      <div class="field">
        <label>
          ${this._t("hub.submit_preset.field_photos","Preset Photos")}
          <span style="font-weight: 500; opacity: 0.7; margin-left: 4px;">
            ${this._t("hub.submit_preset.optional","(optional)")}
          </span>
        </label>
        ${this._keptPhotos.length>0?o.qy`
              <div class="file-table" style="margin-bottom: 10px;">
                <div class="file-table-header">
                  <span>${this._t("hub.submit_preset.existing_photos","Existing photos")}</span>
                  <span></span>
                  <span></span>
                </div>
                ${this._keptPhotos.map((t,e)=>{var i;return o.qy`
                    <div class="file-row">
                      ${t.url?o.qy`<img class="kept-photo-thumb" src=${t.url} alt="" />`:o.qy`<span class="kept-photo-label">#${null!==(i=t.id)&&void 0!==i?i:e+1}</span>`}
                      <span class="file-name kept-photo-label">
                        ${t.id?this._t("hub.submit_preset.kept_photo","Uploaded photo"):this._t("hub.submit_preset.gallery_photo","Gallery photo")}
                      </span>
                      <button
                        class="file-remove-btn"
                        @click=${()=>this._removeKeptPhoto(e)}
                        title="Remove"
                        ?disabled=${this._submitting}
                      >
                        <ha-icon icon="mdi:close"></ha-icon>
                      </button>
                    </div>
                  `})}
              </div>
            `:o.s6}
        <label class="upload-zone" for="photo-upload">
          <span class="upload-zone-label">
            <ha-icon icon="mdi:image-multiple-outline"></ha-icon>
            <strong>${this._t("hub.submit_preset.upload_photos","Click to upload additional photos")}</strong>
            <span>PNG, JPG, GIF, WebP, AVIF, SVG… · ${this._t("hub.submit_preset.photos_hint","Up to 5")}</span>
          </span>
          <input
            id="photo-upload"
            type="file"
            accept=${n.iC}
            multiple
            @change=${this._handleFileInput}
            @input=${this._handleFileInput}
            ?disabled=${this._submitting||this._totalPhotoCount>=5}
          />
        </label>
        <div class="file-table">
          <div class="file-table-header">
            <span>File Name</span>
            <span>Size</span>
            <span></span>
          </div>
          ${0===this._photos.length?o.qy`<div class="file-empty">${this._t("hub.submit_preset.no_new_photos","No additional photos")}</div>`:this._photos.map((t,e)=>{var i;const a=this._photoStates[e];return o.qy`
                  <div class="file-row">
                    <span class="file-name" title=${t.name}>${t.name}</span>
                    <span class="file-size">${this._formatBytes(t.size)}</span>
                    ${a?o.qy`<span class="upload-status-icon ${a.status}">
                          ${"done"===a.status?o.qy`<ha-icon icon="mdi:check-circle" title="Uploaded"></ha-icon>`:"error"===a.status?o.qy`<ha-icon icon="mdi:alert-circle" title=${null!==(i=a.error)&&void 0!==i?i:"Error"}></ha-icon>`:"uploading"===a.status?o.qy`<ha-icon icon="mdi:loading" class="spin" title="Uploading…"></ha-icon>`:o.qy`<ha-icon icon="mdi:clock-outline" title="Waiting…"></ha-icon>`}
                        </span>`:o.qy`<button
                            class="file-remove-btn"
                            @click=${()=>this._removePhoto(e)}
                            title="Remove"
                          >
                            <ha-icon icon="mdi:close"></ha-icon>
                          </button>`}
                  </div>
                `})}
        </div>
        ${this._submitting&&"photos"===this._submitStep&&this._photoStates.length>0?(()=>{const t=this._photoStates.length,e=this._photoStates.filter(t=>"done"===t.status).length,i=Math.round(e/t*100),a=this._photoStates.every(t=>"pending"===t.status);return o.qy`
                <div class="photo-upload-progress">
                  <div class="photo-upload-progress-label">
                    <span>Uploading image${t>1?"s":""}…</span>
                    <span>${a?"…":`${e}/${t}`}</span>
                  </div>
                  <div class="photo-upload-progress-track">
                    <div
                      class="photo-upload-progress-fill ${a?"indeterminate":""}"
                      style=${a?"":`width:${i}%`}
                    ></div>
                  </div>
                </div>
              `})():o.s6}
      </div>

      <!-- Integrations -->
      <div class="field">
        <label>${this._t("hub.submit_preset.field_integrations","Integrations")}</label>
        <input
          type="text"
          .value=${this._integrations}
          @input=${t=>{this._integrations=t.target.value}}
          placeholder="e.g. Tesla, Hue, Google"
          ?disabled=${this._submitting}
        />
        <span class="field-hint">${this._t("hub.submit_preset.integrations_hint","Comma-separated list of integrations this preset uses")}</span>
      </div>

      ${this._error?o.qy`<div class="submit-error">${this._error}</div>`:""}
    `}}c.styles=o.AH`
    :host {
      display: contents;
    }

    ha-dialog {
      /* New ha-dialog (wa-dialog) width + legacy fallbacks */
      --ha-dialog-width-lg: min(680px, calc(100vw - 16px));
      --ha-dialog-max-width: min(680px, calc(100vw - 16px));
      --mdc-dialog-min-width: min(560px, calc(100vw - 32px));
      --mdc-dialog-max-width: min(680px, calc(100vw - 16px));
      /* Comfortable body padding (HA default is 0 top — header carries the title) */
      --dialog-content-padding: var(--ha-space-4) var(--ha-space-6) var(--ha-space-6)
        var(--ha-space-6);
      /* Boost above ALL editor overlays (context menus at 5005, popups at 1002, etc.) */
      --mdc-dialog-z-index: 8000;
      --dialog-z-index: 8000;
    }

    @media (max-width: 600px) {
      ha-dialog {
        --ha-dialog-width-lg: calc(100vw - 16px);
        --ha-dialog-max-width: calc(100vw - 16px);
        --mdc-dialog-min-width: calc(100vw - 32px);
        --mdc-dialog-max-width: calc(100vw - 16px);
        /* Full-screen-ish on mobile: anchor to bottom of viewport */
        --mdc-dialog-max-height: calc(100dvh - 32px);
      }
    }

    .dialog-body {
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    /* Footer bar: ha-dialog assigns slot="footer"; border separates from scrollable body */
    /* Suppress default leading close button content (close is in headerActionItems). */
    .header-nav-placeholder {
      display: inline-block;
      width: 0;
      height: 0;
      overflow: hidden;
      pointer-events: none;
    }

    .dialog-footer-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      gap: var(--ha-space-3);
      width: 100%;
      box-sizing: border-box;
      border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    }

    .dialog-subtitle {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin: 0 0 20px;
      line-height: 1.5;
    }

    /* Field group */
    .field {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 16px;
    }

    .field label {
      font-size: 12px;
      font-weight: 600;
      color: var(--secondary-text-color);
      letter-spacing: 0.2px;
    }

    .required-star {
      color: var(--error-color, #db4437);
      margin-left: 2px;
    }

    .field input,
    .field select,
    .field textarea {
      width: 100%;
      padding: 9px 12px;
      border-radius: 7px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
      background: var(--card-background-color, var(--ha-card-background));
      color: var(--primary-text-color);
      font-size: 14px;
      font-family: inherit;
      box-sizing: border-box;
      transition: border-color 0.15s ease;
    }

    .field input:focus,
    .field select:focus,
    .field textarea:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .field textarea {
      min-height: 80px;
      resize: vertical;
      line-height: 1.4;
    }

    .field textarea.code-field {
      min-height: 100px;
      font-family: 'SF Mono', 'Fira Code', monospace;
      font-size: 12px;
      line-height: 1.5;
    }

    .field select option[value=''] {
      color: var(--secondary-text-color);
    }

    .cat-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .cat-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 12px;
      border-radius: 999px;
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      background: transparent;
      color: var(--secondary-text-color, #9aa3b2);
      font: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }
    .cat-chip ha-icon {
      --mdc-icon-size: 16px;
    }
    .cat-chip:hover {
      color: var(--primary-text-color, #fff);
      border-color: var(--primary-color, #29b6f6);
    }
    .cat-chip.active {
      color: var(--primary-text-color, #fff);
      border-color: var(--primary-color, #29b6f6);
      background: color-mix(in srgb, var(--primary-color, #29b6f6) 16%, transparent);
    }
    .cat-chips.invalid {
      outline: 1px solid var(--error-color, #f87171);
      outline-offset: 2px;
      border-radius: 12px;
    }

    /* Field hint */
    .field-hint {
      font-size: 11px;
      color: var(--secondary-text-color);
      opacity: 0.8;
      margin-top: 2px;
    }

    /* Privacy disclosure under the preset code */
    .privacy-notice {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      margin-top: 8px;
      padding: 10px 12px;
      border-radius: 8px;
      background: var(--secondary-background-color);
      font-size: 12px;
      line-height: 1.5;
      color: var(--primary-text-color);
    }
    .privacy-notice ha-icon {
      flex: 0 0 auto;
      --mdc-icon-size: 18px;
      color: var(--primary-color);
    }
    .privacy-notice ul {
      margin: 4px 0 0;
      padding-left: 18px;
    }
    .privacy-notice-foot {
      margin-top: 6px;
      color: var(--secondary-text-color);
    }

    /* Two-column row — collapses to single column on mobile */
    .field-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 16px;
    }

    .field-row .field {
      margin-bottom: 0;
    }

    @media (max-width: 480px) {
      .field-row {
        grid-template-columns: 1fr;
        gap: 0;
      }
      .field-row .field {
        margin-bottom: 16px;
      }
    }

    /* File upload */
    .upload-zone {
      border: 2px dashed var(--divider-color, rgba(0, 0, 0, 0.18));
      border-radius: 8px;
      padding: 14px 16px;
      cursor: pointer;
      transition: border-color 0.2s ease, background 0.2s ease;
      text-align: center;
    }

    .upload-zone:hover {
      border-color: var(--primary-color);
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.04);
    }

    .upload-zone input[type='file'] {
      display: none;
    }

    .upload-zone-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      color: var(--secondary-text-color);
      font-size: 13px;
    }

    .upload-zone-label ha-icon {
      --mdc-icon-size: 28px;
      color: var(--primary-color);
      opacity: 0.7;
    }

    .upload-zone-label strong {
      color: var(--primary-color);
    }

    .upload-zone-label span {
      font-size: 11px;
    }

    /* File list table */
    .file-table {
      margin-top: 10px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
      border-radius: 7px;
      overflow: hidden;
    }

    .file-table-header {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 8px;
      padding: 7px 12px;
      background: rgba(0, 0, 0, 0.03);
      font-size: 11px;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.4px;
      border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
    }

    .file-row {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 8px;
      padding: 8px 12px;
      align-items: center;
      font-size: 13px;
      border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.05));
    }

    .file-row:last-child {
      border-bottom: none;
    }

    .file-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--primary-text-color);
    }

    .file-size {
      color: var(--secondary-text-color);
      font-size: 12px;
      white-space: nowrap;
    }

    .file-remove-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--secondary-text-color);
      padding: 2px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      transition: color 0.15s;
    }

    .file-remove-btn:hover {
      color: var(--error-color, #db4437);
    }

    .file-remove-btn ha-icon {
      --mdc-icon-size: 16px;
    }

    .file-empty {
      padding: 12px;
      text-align: center;
      font-size: 12px;
      color: var(--secondary-text-color);
      opacity: 0.7;
    }

    .upload-meta {
      font-size: 11px;
      color: var(--secondary-text-color);
      margin-top: 6px;
      opacity: 0.8;
    }

    /* Error */
    .submit-error {
      font-size: 13px;
      color: var(--error-color, #db4437);
      padding: 10px 12px;
      background: rgba(219, 68, 55, 0.07);
      border-radius: 6px;
      margin-bottom: 8px;
    }

    /* Success */
    .submit-success {
      text-align: center;
      padding: 24px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .submit-success ha-icon {
      --mdc-icon-size: 48px;
      color: var(--success-color, #4caf50);
    }

    .submit-success h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
    }

    .submit-success p {
      margin: 0;
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
    }

    /* Footer action buttons (slot-based) */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 9px 18px;
      border-radius: 8px;
      border: none;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.15s ease, background 0.15s ease;
    }

    .btn ha-icon {
      --mdc-icon-size: 18px;
    }

    .btn-primary {
      background: var(--primary-color);
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      opacity: 0.88;
    }

    .btn-primary:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    .btn-secondary {
      background: transparent;
      color: var(--secondary-text-color);
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.15));
    }

    .btn-secondary:hover {
      background: rgba(0, 0, 0, 0.04);
    }

    /* Footer button sizing — slightly larger than default inline buttons */
    .footer-btn {
      min-width: 120px;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.2px;
      border-radius: 10px;
      cursor: pointer;
      user-select: none;
      transition: opacity 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
    }

    .footer-btn.btn-primary {
      box-shadow: 0 2px 8px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
    }

    .footer-btn.btn-primary:hover:not(:disabled) {
      opacity: 0.9;
      box-shadow: 0 4px 14px rgba(var(--rgb-primary-color, 3, 169, 244), 0.45);
    }

    .footer-btn.btn-primary:active:not(:disabled) {
      opacity: 1;
      box-shadow: none;
      transform: scale(0.98);
    }

    .footer-btn.btn-secondary:hover:not(:disabled) {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.06);
      border-color: var(--primary-color);
      color: var(--primary-color);
    }

    .footer-btn.btn-secondary:active:not(:disabled) {
      transform: scale(0.98);
    }

    @media (max-width: 480px) {
      .footer-btn {
        min-width: 0;
        flex: 1;
        justify-content: center;
      }
    }

    /* Validation error on field */
    .field-error {
      font-size: 11px;
      color: var(--error-color, #db4437);
      margin-top: 2px;
    }

    .field input.invalid,
    .field select.invalid,
    .field textarea.invalid {
      border-color: var(--error-color, #db4437);
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .spin {
      animation: spin 0.8s linear infinite;
    }

    @media (max-width: 480px) {
      ha-dialog {
        --dialog-content-padding: var(--ha-space-3) var(--ha-space-4) var(--ha-space-4)
          var(--ha-space-4);
      }
      .dialog-subtitle {
        font-size: 12px;
        margin-bottom: 16px;
      }
      .field input,
      .field select,
      .field textarea {
        font-size: 16px; /* prevents iOS auto-zoom on focus */
      }
      .file-table-header,
      .file-row {
        grid-template-columns: 1fr auto auto;
        padding: 6px 10px;
        font-size: 12px;
      }
      .file-size {
        font-size: 11px;
      }
      .upload-zone {
        padding: 12px;
      }
    }

    /* Divider */
    .section-divider {
      height: 1px;
      background: var(--divider-color, rgba(0, 0, 0, 0.08));
      margin: 4px 0 20px;
    }

    .section-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: var(--secondary-text-color);
      opacity: 0.7;
      margin-bottom: 14px;
    }

    /* Per-photo upload status icons in the file table */
    .upload-status-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .upload-status-icon ha-icon {
      --mdc-icon-size: 16px;
    }

    .upload-status-icon.done ha-icon   { color: var(--success-color, #4caf50); }
    .upload-status-icon.error ha-icon  { color: var(--error-color, #db4437); }
    .upload-status-icon.uploading ha-icon { color: var(--primary-color); }
    .upload-status-icon.pending ha-icon { color: var(--secondary-text-color); opacity: 0.45; }

    /* Photo upload progress bar */
    .photo-upload-progress {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .photo-upload-progress-label {
      font-size: 12px;
      color: var(--secondary-text-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .photo-upload-progress-label span:last-child {
      font-variant-numeric: tabular-nums;
      color: var(--primary-color);
      font-weight: 600;
    }

    .photo-upload-progress-track {
      height: 5px;
      border-radius: 99px;
      background: var(--divider-color, rgba(0, 0, 0, 0.1));
      overflow: hidden;
      position: relative;
    }

    .photo-upload-progress-fill {
      height: 100%;
      border-radius: 99px;
      background: var(--primary-color);
      transition: width 0.3s ease;
      min-width: 6px;
    }

    /* Indeterminate shimmer when all files are pending (just started) */
    .photo-upload-progress-fill.indeterminate {
      width: 40% !important;
      animation: upload-shimmer 1.4s ease-in-out infinite;
    }

    @keyframes upload-shimmer {
      0%   { transform: translateX(-150%); }
      100% { transform: translateX(350%); }
    }

    .kept-photo-thumb {
      width: 28px;
      height: 28px;
      border-radius: 4px;
      object-fit: cover;
      background: var(--secondary-background-color);
    }

    .featured-preview {
      width: 100%;
      max-width: 280px;
      height: 160px;
      border-radius: 10px;
      object-fit: cover;
      border: 1px solid var(--divider-color);
      display: block;
      margin-bottom: 8px;
    }

    .kept-photo-label {
      font-size: 12px;
      color: var(--secondary-text-color);
    }

    .update-code-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
      padding: 6px 12px;
      border-radius: 7px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.15));
      background: transparent;
      color: var(--primary-color);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
    }

    .update-code-btn:hover:not(:disabled) {
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.06);
    }

    .update-code-btn:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    .update-code-btn ha-icon {
      --mdc-icon-size: 16px;
    }
  `,l([(0,a.MZ)({attribute:!1})],c.prototype,"payload",void 0),l([(0,a.MZ)()],c.prototype,"mode",void 0),l([(0,a.MZ)({attribute:!1})],c.prototype,"existing",void 0),l([(0,a.MZ)()],c.prototype,"language",void 0),l([(0,a.wk)()],c.prototype,"_title",void 0),l([(0,a.wk)()],c.prototype,"_description",void 0),l([(0,a.wk)()],c.prototype,"_category",void 0),l([(0,a.wk)()],c.prototype,"_tags",void 0),l([(0,a.wk)()],c.prototype,"_code",void 0),l([(0,a.wk)()],c.prototype,"_integrations",void 0),l([(0,a.wk)()],c.prototype,"_photos",void 0),l([(0,a.wk)()],c.prototype,"_keptPhotos",void 0),l([(0,a.wk)()],c.prototype,"_featuredFile",void 0),l([(0,a.wk)()],c.prototype,"_keptFeatured",void 0),l([(0,a.wk)()],c.prototype,"_featuredUploadState",void 0),l([(0,a.wk)()],c.prototype,"_submitting",void 0),l([(0,a.wk)()],c.prototype,"_submitted",void 0),l([(0,a.wk)()],c.prototype,"_error",void 0),l([(0,a.wk)()],c.prototype,"_categories",void 0),l([(0,a.wk)()],c.prototype,"_loadingCategories",void 0),l([(0,a.wk)()],c.prototype,"_showValidation",void 0),l([(0,a.wk)()],c.prototype,"_photoStates",void 0),l([(0,a.wk)()],c.prototype,"_submitStep",void 0),customElements.get("uc-hub-submit-preset-dialog")||customElements.define("uc-hub-submit-preset-dialog",c)},5650(t,e,i){var o=i(378);const a="https://ultracard.io/wp-json/ultra-card/v1";function s(t){if(null==t||"object"!=typeof t)return t;const e=t;return"_body"in e&&void 0!==e._body?s(e._body):"data"in e&&null!=e.data&&"object"==typeof e.data&&!("id"in e)?e.data:t}function r(t,e){if(!t||"object"!=typeof t)return e;const i=t;if("string"==typeof i.message&&i.message)return i.message;if("string"==typeof i.error&&i.error)return i.error;if(i.data&&"object"==typeof i.data&&null!==i.data&&"message"in i.data){const t=i.data.message;if("string"==typeof t&&t)return t}return e}function n(t){var e,i,o,a,r,n,d;const l=null!==(e=s(t))&&void 0!==e?e:{},p=Number(l.id);if(!Number.isFinite(p)||p<=0)throw new Error("Invalid preset response: missing id");const c=function(t){if(!Array.isArray(t))return;const e=t.map(t=>"number"==typeof t?t:Number(t)).filter(t=>Number.isFinite(t)&&t>0);return e.length?e:void 0}(l.photo_ids),h={id:p,name:String(null!==(i=l.name)&&void 0!==i?i:""),description:String(null!==(o=l.description)&&void 0!==o?o:""),category:String(null!==(a=l.category)&&void 0!==a?a:""),tags:(g=l.tags,Array.isArray(g)?g.map(t=>String(t)).filter(Boolean):"string"==typeof g&&g.trim()?g.split(",").map(t=>t.trim()).filter(Boolean):[]),shortcode:String(null!==(r=l.shortcode)&&void 0!==r?r:""),status:String(null!==(n=l.status)&&void 0!==n?n:"pending"),review_status:String(null!==(d=l.review_status)&&void 0!==d?d:"pending")||"pending",has_pending_revision:Boolean(l.has_pending_revision),gallery:(u=l.gallery,Array.isArray(u)?u.map(t=>String(t)).filter(Boolean):[]),downloads:Number(l.downloads)||0,rating:Number(l.rating)||0,rating_count:Number(l.rating_count)||0};var u,g;if("string"==typeof l.integrations&&(h.integrations=l.integrations),"string"==typeof l.moderator_note&&(h.moderator_note=l.moderator_note),void 0!==l.pending_revision&&(h.pending_revision=l.pending_revision&&"object"==typeof l.pending_revision?l.pending_revision:null),c&&(h.photo_ids=c),"string"==typeof l.featured_image&&l.featured_image&&(h.featured_image=l.featured_image),null!=l.featured_image_id&&Number.isFinite(Number(l.featured_image_id))){const t=Number(l.featured_image_id);t>0&&(h.featured_image_id=t)}return"string"==typeof l.preset_url&&(h.preset_url=l.preset_url),"string"==typeof l.submitted_at&&(h.submitted_at=l.submitted_at),"string"==typeof l.reviewed_at&&(h.reviewed_at=l.reviewed_at),null!=l.author_id&&Number.isFinite(Number(l.author_id))&&(h.author_id=Number(l.author_id)),h}async function d(t){return t.json().catch(()=>null)}const l=new class{async listMine(){if(!o.xd.isAuthenticated())throw new Error("Authentication required to list your presets");const t=await o.xd.authenticatedFetch(`${a}/presets/mine`);if(!t.ok){const e=r(await d(t),`Failed to load your presets (HTTP ${t.status})`),i=new Error(e);throw i.status=t.status,i}const e=s(await d(t));let i=[];if(Array.isArray(e))i=e;else if(e&&"object"==typeof e){const t=e;Array.isArray(t.presets)&&(i=t.presets)}return i.map(t=>n(t))}async get(t){if(!o.xd.isAuthenticated())throw new Error("Authentication required");const e=await o.xd.authenticatedFetch(`${a}/presets/${t}`);if(!e.ok){const t=await d(e);throw new Error(r(t,`Failed to load preset (HTTP ${e.status})`))}return n(await d(e))}async update(t,e){if(!o.xd.isAuthenticated())throw new Error("Authentication required to update presets");const i={};void 0!==e.name&&(i.name=e.name),void 0!==e.description&&(i.description=e.description),void 0!==e.category&&(i.category=e.category),void 0!==e.tags&&(i.tags=e.tags),void 0!==e.shortcode&&(i.shortcode=e.shortcode),void 0!==e.integrations&&(i.integrations=e.integrations),void 0!==e.featured_image_id&&(i.featured_image_id=e.featured_image_id),void 0!==e.photo_ids&&(i.photo_ids=e.photo_ids);const s=await o.xd.authenticatedFetch(`${a}/presets/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!s.ok){const t=await d(s);throw new Error(r(t,`Failed to update preset (HTTP ${s.status})`))}return n(await d(s))}async remove(t){if(!o.xd.isAuthenticated())throw new Error("Authentication required to delete presets");const e=await o.xd.authenticatedFetch(`${a}/presets/${t}`,{method:"DELETE"});if(!e.ok){const t=await d(e);throw new Error(r(t,`Failed to delete preset (HTTP ${e.status})`))}}async withdraw(t){if(!o.xd.isAuthenticated())throw new Error("Authentication required to withdraw presets");const e=await o.xd.authenticatedFetch(`${a}/presets/${t}/withdraw`,{method:"POST"});if(!e.ok){const t=await d(e);throw new Error(r(t,`Failed to withdraw preset (HTTP ${e.status})`))}return n(await d(e))}};i.d(e,["a",0,l])}};