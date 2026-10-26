/*! For license information please see uc-9142.3658980c.js.LICENSE.txt */
export const __webpack_esm_ids__=[1172,1883,9142];export const __webpack_esm_modules__={3378(e,t,r){r.r(t),r.d(t,{HubPresetsTab:()=>m});var i=r(2618),s=r(4791),o=r(6781),a=r(5691),n=r(378),c=r(7568),l=r(5650),d=r(9978),p=r(8716),h=r(1172),u=r(6478),g=(r(5387),r(7894),r(4480),function(e,t,r,i){var s,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(o<3?s(a):o>3?s(t,r,a):s(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a});let m=class extends i.WF{constructor(){super(...arguments),this.initialView="browse",this._view="browse",this._presets=[],this._category="all",this._loading=!1,this._error=null,this._search="",this._toastMsg="",this._expandedId=null,this._cloudUser=null,this._showLoginDialog=!1,this._ratingPreset=null,this._pendingRateAfterLogin=null,this._userReviews=new Map,this._readMoreId=null,this._myPresets=[],this._myLoading=!1,this._myError=null,this._myForbidden=!1,this._editingPreset=null,this._actionBusyId=null}_lang(){var e,t,r;return null!==(r=null===(t=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===t?void 0:t.language)&&void 0!==r?r:"en"}_t(e,t){return(0,u.kg)(e,this._lang(),t)}_getSanitizedPresetDescription(e){const t=this._readMoreId===e.id&&e.description_full||e.description;return(0,h.sanitizePresetHtml)(t||"")}refresh(e=!1){a.ucPresetsService.ensureWordPressLoaded(),a.ucPresetsService.refreshWordPressPresets(e),"mine"===this._view&&this._cloudUser&&this._loadMyPresets()}connectedCallback(){super.connectedCallback(),a.ucPresetsService.ensureWordPressLoaded(),this._cloudUser=n.xd.getCurrentUser(),this._authListener=e=>{this._cloudUser=e,e?(this._showLoginDialog=!1,c.Q.loadUserReviewsFromServer().then(()=>this.requestUpdate()),"mine"===this._view&&this._loadMyPresets()):(this._myPresets=[],this._myError=null,this._myForbidden=!1)},n.xd.addListener(this._authListener),this._cloudUser&&c.Q.loadUserReviewsFromServer().then(()=>this.requestUpdate()),this._presets=a.ucPresetsService.getAllPresets(),this._unsub=a.ucPresetsService.subscribe(e=>{this._presets=e});const e=a.ucPresetsService.getWordPressStatus();this._loading=e.loading,this._error=e.error,this._statusUnsub=a.ucPresetsService.subscribeToStatus(e=>{this._loading=e.loading,this._error=e.error})}updated(e){e.has("initialView")&&"mine"===this.initialView&&(this._setView("mine"),this.dispatchEvent(new CustomEvent("presets-view-applied",{bubbles:!0,composed:!0})))}disconnectedCallback(){var e,t;super.disconnectedCallback(),null===(e=this._unsub)||void 0===e||e.call(this),null===(t=this._statusUnsub)||void 0===t||t.call(this),this._authListener&&(n.xd.removeListener(this._authListener),this._authListener=void 0),this._toastTimer&&clearTimeout(this._toastTimer)}_setView(e){this._view=e,"mine"===e&&this._cloudUser&&this._loadMyPresets()}async _loadMyPresets(){if(n.xd.isAuthenticated()){this._myLoading=!0,this._myError=null,this._myForbidden=!1;try{this._myPresets=await l.a.listMine()}catch(e){403===(null==e?void 0:e.status)?(this._myForbidden=!0,this._myError=this._t("hub.my_presets.admin_only_message","Preset authoring is available to Home Assistant administrators only. Sign in as an admin (via Ultra Card Connect) to manage your submissions.")):this._myError=e instanceof Error?e.message:this._t("hub.my_presets.load_error","Could not load your presets."),this._myPresets=[]}finally{this._myLoading=!1}}}_statusChip(e){return"changes_requested"===e.review_status?{key:"changes_requested",label:this._t("hub.my_presets.status.changes_requested","Changes requested"),className:"changes_requested"}:"rejected"===e.review_status||"rejected"===e.status?{key:"rejected",label:this._t("hub.my_presets.status.rejected","Rejected"),className:"rejected"}:"publish"===e.status&&"approved"===e.review_status?{key:"live",label:this._t("hub.my_presets.status.live","Live"),className:"live"}:"draft"===e.status?{key:"draft",label:this._t("hub.my_presets.status.draft","Draft"),className:"draft"}:"publish"===e.status?{key:"live",label:this._t("hub.my_presets.status.live","Live"),className:"live"}:{key:"pending",label:this._t("hub.my_presets.status.pending","Pending review"),className:"pending"}}_openEdit(e){this._editingPreset=e}async _withdraw(e){if(window.confirm(this._t("hub.my_presets.confirm_withdraw","Withdraw this pending submission or revision?"))){this._actionBusyId=e.id;try{await l.a.withdraw(e.id),this._showToast(this._t("hub.my_presets.withdrawn","Submission withdrawn")),await this._loadMyPresets()}catch(e){this._showToast(e instanceof Error?e.message:"Withdraw failed")}finally{this._actionBusyId=null}}}async _delete(e){if(window.confirm(this._t("hub.my_presets.confirm_delete","Delete this preset? This cannot be undone."))){this._actionBusyId=e.id;try{await l.a.remove(e.id),this._showToast(this._t("hub.my_presets.deleted","Preset deleted")),await this._loadMyPresets()}catch(e){this._showToast(e instanceof Error?e.message:"Delete failed")}finally{this._actionBusyId=null}}}_showToast(e){this._toastMsg=e,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toastMsg="",2500)}_getFilteredPresets(){let e=this._presets;if("all"!==this._category&&(e=e.filter(e=>e.category===this._category)),this._search.trim()){const t=this._search.toLowerCase().trim();e=e.filter(e=>e.name.toLowerCase().includes(t)||(e.description||"").toLowerCase().includes(t)||(e.author||"").toLowerCase().includes(t))}return e}_refreshPresets(){this.refresh(!0)}_getOriginLabel(e){return"wordpress"===e.source||"community"===e.origin?"community":"default"===e.origin||"default"===e.source?"default":"builtin"===e.origin||"builtin"===e.source?"builtin":"community"}_isNewPreset(e){var t,r;const i=(null===(t=e.metadata)||void 0===t?void 0:t.created)||(null===(r=e.metadata)||void 0===r?void 0:r.date);return!!i&&new Date(i)>new Date(Date.now()-2592e6)}_buildPresetConfig(e){const t={};return e.layout&&(t.layout=e.layout),e.cardSettings&&Object.entries(e.cardSettings).forEach(([e,r])=>{null!=r&&(t[e]=r)}),e.customVariables&&e.customVariables.length>0&&(t._customVariables=e.customVariables),t}async _copyPresetConfig(e){try{const t=this._buildPresetConfig(e);if(0===Object.keys(t).length)return void this._showToast("No config data in this preset");const r=JSON.stringify(t,null,2),i=await(0,p.e)(r);this._showToast(i?`Copied "${e.name}" config`:"Could not copy — your browser blocked clipboard access")}catch(e){console.warn("Copy preset config failed:",e),this._showToast("Could not copy this preset")}a.ucPresetsService.trackPresetDownload(e.id).catch(()=>{})}async _copyPresetLayout(e){try{if(!e.layout)return void this._showToast("No layout data in this preset");const t=JSON.stringify(e.layout,null,2),r=await(0,p.e)(t);this._showToast(r?`Copied layout for "${e.name}"`:"Could not copy — your browser blocked clipboard access")}catch(e){console.warn("Copy preset layout failed:",e),this._showToast("Could not copy this layout")}a.ucPresetsService.trackPresetDownload(e.id).catch(()=>{})}_toggleDetails(e){this._expandedId=this._expandedId===e?null:e}_renderStars(e){const t=[];for(let r=1;r<=5;r++)t.push(i.qy`<ha-icon
          icon=${r<=Math.round(e)?"mdi:star":"mdi:star-outline"}
          class=${r<=Math.round(e)?"":"empty"}
        ></ha-icon>`);return i.qy`<div class="star-rating">${t}</div>`}_getUserRatingForPreset(e){var t;const r=this._userReviews.get(e);if(null!=r)return r;const i=c.Q.getUserReview(e);return null!==(t=null==i?void 0:i.rating)&&void 0!==t?t:null}_renderInteractiveStars(e,t){var r;const s=this._getUserRatingForPreset(e.id),o=null!==(r=null!=s?s:t.rating)&&void 0!==r?r:0;if(o<=0&&!this._cloudUser)return i.qy`<span class="preset-rating-hint" title="Sign in to rate">Rate it</span>`;const a=[],n=Math.round(o);for(let e=1;e<=5;e++)a.push(i.qy`<ha-icon
          icon=${e<=n?"mdi:star":"mdi:star-outline"}
          class=${e<=n?"":"empty"}
        ></ha-icon>`);return i.qy`<span class="star-rating">${a}</span>`}_handleStarClick(e,t){if(t.stopPropagation(),!this._cloudUser)return this._pendingRateAfterLogin={id:e.id,name:e.name},void(this._showLoginDialog=!0);this._ratingPreset={id:e.id,name:e.name}}_handleRatingSubmitted(e){const{presetId:t,rating:r,presetRating:i,presetRatingCount:s}=e.detail;this._userReviews=new Map(this._userReviews).set(t,r),this._applyAggregateRating(t,i,s),this._ratingPreset=null,this._showToast("Thanks for your rating!")}_applyAggregateRating(e,t,r){if(null==t)return;const i=this._presets.find(t=>t.id===e);i&&(i.metadata=Object.assign(Object.assign(Object.assign({},i.metadata),{rating:t}),null!=r?{rating_count:r}:{}),this._presets=[...this._presets])}render(){var e,t,r;return i.qy`
      ${this._showLoginDialog?i.qy`
            <uc-hub-login-dialog
              @close=${()=>{this._showLoginDialog=!1,this._pendingRateAfterLogin=null}}
            ></uc-hub-login-dialog>
          `:""}
      ${this._ratingPreset?i.qy`
            <uc-hub-rate-dialog
              .presetId=${this._ratingPreset.id}
              .presetName=${this._ratingPreset.name}
              .existingRating=${null!==(r=null!==(e=this._userReviews.get(this._ratingPreset.id))&&void 0!==e?e:null===(t=c.Q.getUserReview(this._ratingPreset.id))||void 0===t?void 0:t.rating)&&void 0!==r?r:0}
              @rating-submitted=${this._handleRatingSubmitted}
              @close=${()=>{this._ratingPreset=null}}
            ></uc-hub-rate-dialog>
          `:""}
      ${this._editingPreset?i.qy`
            <uc-hub-submit-preset-dialog
              mode="edit"
              .existing=${this._editingPreset}
              .language=${this._lang()}
              @preset-updated=${()=>{this._editingPreset=null,this._showToast(this._t("hub.my_presets.updated","Preset update saved")),this._loadMyPresets()}}
              @close=${()=>{this._editingPreset=null}}
            ></uc-hub-submit-preset-dialog>
          `:""}

      <div class="presets-view-switch" role="tablist" aria-label=${this._t("hub.my_presets.view_switch","Presets view")}>
        <button
          class="presets-view-option ${"browse"===this._view?"active":""}"
          role="tab"
          aria-selected=${"browse"===this._view?"true":"false"}
          @click=${()=>this._setView("browse")}
        >
          <ha-icon icon="mdi:view-grid-outline"></ha-icon>
          ${this._t("hub.my_presets.browse","Browse")}
        </button>
        <button
          class="presets-view-option ${"mine"===this._view?"active":""}"
          role="tab"
          aria-selected=${"mine"===this._view?"true":"false"}
          @click=${()=>this._setView("mine")}
        >
          <ha-icon icon="mdi:account-edit-outline"></ha-icon>
          ${this._t("hub.my_presets.mine","My Presets")}
        </button>
      </div>

      ${"mine"===this._view?this._renderMyPresets():this._renderBrowse()}

      <div class="toast ${this._toastMsg?"show":""}">${this._toastMsg}</div>
    `}_renderBrowse(){const e=this._getFilteredPresets();return i.qy`
      <div class="hub-tab-blurb">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <p><strong>Presets</strong> are ready-made layouts you can add to any card. Browse by the same categories as modules, search, or add a preset from the card editor to get started quickly.</p>
      </div>
      <!-- Toolbar -->
      <div class="presets-toolbar">
        <div class="search-box">
          <ha-icon icon="mdi:magnify"></ha-icon>
          <input
            type="text"
            placeholder="Search presets…"
            .value=${this._search}
            @input=${e=>this._search=e.target.value}
          />
        </div>
        <button class="refresh-btn" ?disabled=${this._loading} @click=${this._refreshPresets}>
          <ha-icon icon="mdi:refresh" class=${this._loading?"spinning":""}></ha-icon>
          Refresh
        </button>
      </div>

      <!-- Filter chips -->
      <div class="filter-row" style="margin-bottom: 16px;">
        ${[{key:"all",label:"All",icon:"mdi:view-grid"},{key:"layout",label:"Layout",icon:"mdi:view-dashboard-outline"},{key:"content",label:"Content",icon:"mdi:text-box-outline"},{key:"data",label:"Data",icon:"mdi:chart-box-outline"},{key:"interactive",label:"Controls",icon:"mdi:gesture-tap"},{key:"input",label:"Inputs",icon:"mdi:form-textbox"},{key:"media",label:"Media",icon:"mdi:image-multiple-outline"}].map(e=>i.qy`
            <button
              class="filter-chip ${this._category===e.key?"active":""}"
              @click=${()=>this._category=e.key}
            >
              <ha-icon icon=${e.icon}></ha-icon>
              ${e.label}
            </button>
          `)}
      </div>

      <!-- Status bar -->
      <div class="status-bar">
        <span class="count">
          ${this._loading&&0===this._presets.length?"Loading presets…":i.qy`Showing <strong>${e.length}</strong> of ${this._presets.length} presets`}
        </span>
      </div>

      <!-- States -->
      ${this._loading?i.qy`
            <div class="loading-state">
              <ha-icon icon="mdi:loading" class="spinning"></ha-icon>
              Loading presets…
            </div>
          `:""}
      ${this._error?i.qy`<div class="error-state">${this._error}</div>`:""}

      <!-- Grid -->
      ${this._loading||0!==e.length?i.qy`
            ${e.length>0?i.qy`
                  <div class="presets-hint">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    <span>
                      <strong>Copy Config</strong> copies the full preset (layout + settings + variables) as JSON — paste into your card's raw YAML editor.
                      <strong>Copy Layout</strong> copies only the row/column structure without card styling.
                    </span>
                  </div>
                `:""}
            <div class="presets-grid">
              ${e.map(e=>this._renderPresetCard(e))}
            </div>
          `:i.qy`
            <div class="empty-state">
              <div class="empty-state-icon">
                <ha-icon icon="mdi:package-variant"></ha-icon>
              </div>
              <h3>No Presets Found</h3>
              <p>
                ${this._search?`No presets match "${this._search}". Try a different search.`:"No presets in this category. Use the card editor to browse and add presets."}
              </p>
            </div>
          `}
    `}_renderMyPresets(){return this._cloudUser?this._myForbidden?i.qy`
        <div class="my-admin-only">
          <ha-icon icon="mdi:shield-account-outline"></ha-icon>
          <h3>${this._t("hub.my_presets.admin_only_title","Admin access required")}</h3>
          <p>${this._myError}</p>
        </div>
      `:i.qy`
      <div class="hub-tab-blurb">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <p>
          ${this._t("hub.my_presets.blurb","Track your submissions, respond to moderator feedback, and update presets without leaving Home Assistant.")}
        </p>
      </div>
      <div class="presets-toolbar">
        <button class="refresh-btn" ?disabled=${this._myLoading} @click=${()=>this._loadMyPresets()}>
          <ha-icon icon="mdi:refresh" class=${this._myLoading?"spinning":""}></ha-icon>
          ${this._t("hub.my_presets.refresh","Refresh")}
        </button>
      </div>

      ${this._myLoading?i.qy`
            <div class="loading-state">
              <ha-icon icon="mdi:loading" class="spinning"></ha-icon>
              ${this._t("hub.my_presets.loading","Loading your presets…")}
            </div>
          `:i.s6}
      ${this._myError&&!this._myForbidden?i.qy`<div class="error-state">${this._myError}</div>`:i.s6}
      ${this._myLoading||this._myError||0!==this._myPresets.length?i.qy`
            <div class="my-presets-list">
              ${this._myPresets.map(e=>this._renderMyPresetRow(e))}
            </div>
          `:i.qy`
            <div class="empty-state">
              <div class="empty-state-icon">
                <ha-icon icon="mdi:upload-outline"></ha-icon>
              </div>
              <h3>${this._t("hub.my_presets.empty_title","No submissions yet")}</h3>
              <p>
                ${this._t("hub.my_presets.empty_message","Share a layout from the card editor to submit your first preset.")}
              </p>
            </div>
          `}
    `:i.qy`
        <div class="my-login-cta">
          <ha-icon icon="mdi:account-lock-outline"></ha-icon>
          <h3>${this._t("hub.my_presets.login_title","Sign in to manage your presets")}</h3>
          <p>
            ${this._t("hub.my_presets.login_message","View submission status, moderator feedback, and update your presets from here.")}
          </p>
          <button type="button" @click=${()=>this._showLoginDialog=!0}>
            <ha-icon icon="mdi:login"></ha-icon>
            ${this._t("hub.my_presets.login_button","Sign in")}
          </button>
        </div>
      `}_renderMyPresetRow(e){var t;const r=this._statusChip(e),s=null===(t=e.gallery)||void 0===t?void 0:t[0],o=this._actionBusyId===e.id,a="pending"===e.review_status||e.has_pending_revision||"pending"===e.status;return i.qy`
      <div class="my-preset-row">
        ${s?i.qy`<img class="my-preset-thumb" src=${s} alt="" loading="lazy" />`:i.qy`
              <div class="my-preset-thumb-placeholder">
                <ha-icon icon="mdi:card-text-outline"></ha-icon>
              </div>
            `}
        <div class="my-preset-info">
          <h4>${e.name}</h4>
          <div class="my-preset-meta">
            <span class="status-chip ${r.className}">${r.label}</span>
            ${e.has_pending_revision?i.qy`
                  <span class="revision-badge">
                    <ha-icon icon="mdi:clock-outline"></ha-icon>
                    ${this._t("hub.my_presets.pending_revision","Update awaiting review")}
                  </span>
                `:i.s6}
          </div>
          ${e.moderator_note?i.qy`
                <div class="moderator-note">
                  <strong>${this._t("hub.my_presets.moderator_note","Moderator note")}:</strong>
                  ${e.moderator_note}
                </div>
              `:i.s6}
        </div>
        <div class="my-preset-actions">
          <button
            type="button"
            class="my-action-btn"
            ?disabled=${o}
            @click=${()=>this._openEdit(e)}
          >
            <ha-icon icon="mdi:pencil"></ha-icon>
            ${this._t("hub.my_presets.edit","Edit")}
          </button>
          ${a?i.qy`
                <button
                  type="button"
                  class="my-action-btn"
                  ?disabled=${o}
                  @click=${()=>this._withdraw(e)}
                >
                  <ha-icon icon="mdi:undo"></ha-icon>
                  ${this._t("hub.my_presets.withdraw","Withdraw")}
                </button>
              `:i.s6}
          <button
            type="button"
            class="my-action-btn danger"
            ?disabled=${o}
            @click=${()=>this._delete(e)}
          >
            <ha-icon icon="mdi:delete-outline"></ha-icon>
            ${this._t("hub.my_presets.delete","Delete")}
          </button>
          ${e.preset_url?i.qy`
                <a
                  class="my-action-btn"
                  href=${e.preset_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ha-icon icon="mdi:open-in-new"></ha-icon>
                  ${this._t("hub.my_presets.view_on_site","View on site")}
                </a>
              `:i.s6}
        </div>
      </div>
    `}_renderPresetCard(e){var t,r,s,a,n,c;const l=this._getOriginLabel(e),d=e.metadata||{},p=!!e.thumbnail||!!e.image||!!e.preview_url,h=e.thumbnail||e.image||e.preview_url,u=this._expandedId===e.id;return i.qy`
      <div class="preset-card">
        <div class="preset-header">
          <div class="preset-header-left">
            <div class="preset-title-info">
              <h4 class="preset-header-title">${e.name}</h4>
              ${e.author?i.qy`<span class="preset-header-author">by ${e.author}</span>`:i.s6}
            </div>
          </div>
          <span class="origin-badge ${l}">${l}</span>
          ${this._isNewPreset(e)?i.qy`<span class="new-badge">New</span>`:i.s6}
        </div>

        ${p?i.qy`
              <div class="preset-preview">
                <img src="${h}" alt="${e.name}" loading="lazy" />
              </div>
            `:i.qy`
              <div class="preset-preview">
                <div class="preset-icon-placeholder">
                  <ha-icon icon="mdi:card-text-outline"></ha-icon>
                </div>
              </div>
            `}

        <div class="preset-content">
          ${e.description?i.qy`
                <div class="preset-description ${this._readMoreId===e.id?"expanded":""}">${(0,o._)(this._getSanitizedPresetDescription(e))}</div>
                ${e.description_full&&e.description_full!==e.description?i.qy`<button class="read-more-link" @click=${t=>{t.stopPropagation(),this._readMoreId=this._readMoreId===e.id?null:e.id}}>${this._readMoreId===e.id?"Read Less ↑":"Read More ↓"}</button>`:i.s6}
              `:i.s6}

          <div class="preset-stats">
            <span class="stat">
              <ha-icon icon="mdi:download"></ha-icon>
              ${null!==(r=null!==(t=d.downloads)&&void 0!==t?t:e.downloads)&&void 0!==r?r:0}
            </span>
            <div
              class="preset-rating-interactive"
              @click=${t=>this._handleStarClick(e,t)}
              title=${this._cloudUser?"Rate this preset":"Sign in to rate"}
            >
              ${this._renderInteractiveStars(e,d)}
              <span class="rating-count">(${null!==(c=null!==(n=null!==(a=null!==(s=d.rating_count)&&void 0!==s?s:d.reviews_count)&&void 0!==a?a:e.rating_count)&&void 0!==n?n:e.reviews_count)&&void 0!==c?c:0})</span>
            </div>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="preset-actions">
          <button
            class="preset-action-btn primary"
            title="Copy preset code — paste into your card via Import"
            @click=${()=>this._copyPresetConfig(e)}
          >
            <ha-icon icon="mdi:content-copy"></ha-icon>
            Copy Code
          </button>
          <button
            class="preset-action-btn"
            @click=${()=>this._toggleDetails(e.id)}
          >
            <ha-icon icon=${u?"mdi:chevron-up":"mdi:information-outline"}></ha-icon>
            ${u?"Less":"Details"}
          </button>
        </div>

        ${u?this._renderDetails(e):i.s6}
      </div>
    `}_renderDetails(e){var t,r,s,o,a;const n=null!==(s=null===(r=null===(t=e.layout)||void 0===t?void 0:t.rows)||void 0===r?void 0:r.length)&&void 0!==s?s:0,c=null!==(a=null===(o=e.customVariables)||void 0===o?void 0:o.length)&&void 0!==a?a:0,l=!!(e.cardSettings&&Object.keys(e.cardSettings).length>0);return i.qy`
      <div class="preset-details">
        <dl class="detail-info">
          <dt>Category</dt>
          <dd>${e.category}</dd>
          <dt>Version</dt>
          <dd>${e.version||"—"}</dd>
          <dt>Rows</dt>
          <dd>${n}</dd>
          ${c>0?i.qy`<dt>Variables</dt><dd>${c}</dd>`:i.s6}
          ${l?i.qy`<dt>Card settings</dt><dd>Included</dd>`:i.s6}
          ${e.integrations&&e.integrations.length>0?i.qy`<dt>Requires</dt><dd>${e.integrations.join(", ")}</dd>`:i.s6}
        </dl>
        ${e.tags&&e.tags.length>0?i.qy`
              <div class="detail-tags">
                ${e.tags.map(e=>i.qy`<span class="detail-tag">${e}</span>`)}
              </div>
            `:i.s6}
      </div>
    `}};m.styles=[d.z,i.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
      }

      /* Toolbar */
      .presets-toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
        margin-bottom: 20px;
      }

      .search-box {
        flex: 1;
        min-width: 180px;
        position: relative;
      }

      .search-box input {
        width: 100%;
        padding: 10px 16px 10px 40px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 10px;
        background: var(--ha-card-background, var(--card-background-color));
        color: var(--primary-text-color);
        font-size: 14px;
        outline: none;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .search-box input:focus {
        border-color: var(--primary-color);
      }

      .search-box ha-icon {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }

      .refresh-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 20px;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 12px;
        font-weight: 500;
      }

      .refresh-btn:hover:not(:disabled) {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }

      .refresh-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .refresh-btn ha-icon {
        --mdc-icon-size: 16px;
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .spinning {
        animation: spin 1s linear infinite;
      }

      /* Preset grid */
      .presets-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
      }

      @media (max-width: 600px) {
        .presets-grid {
          grid-template-columns: 1fr;
        }
      }

      /* Preset card */
      .preset-card {
        display: flex;
        flex-direction: column;
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
      }

      .preset-card:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
        border-color: var(--primary-color);
      }

      /* Card header */
      .preset-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.02);
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        gap: 12px;
      }

      .preset-header-left {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
        min-width: 0;
      }

      .preset-title-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
        min-width: 0;
      }

      .preset-header-title {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        line-height: 1.3;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .preset-header-author {
        font-size: 11px;
        color: var(--secondary-text-color);
        font-style: italic;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .origin-badge {
        padding: 4px 10px;
        border-radius: 8px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        flex-shrink: 0;
      }

      .origin-badge.community {
        background: rgba(255, 152, 0, 0.9);
        color: white;
      }

      .origin-badge.default,
      .origin-badge.standard {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.9);
        color: white;
      }

      .origin-badge.builtin {
        background: rgba(var(--rgb-secondary-text-color, 128, 128, 128), 0.7);
        color: white;
      }

      .new-badge {
        padding: 4px 10px;
        border-radius: 8px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        flex-shrink: 0;
        background: rgba(76, 175, 80, 0.9);
        color: white;
      }

      /* Preview area */
      .preset-preview {
        width: 100%;
        height: 160px;
        background: var(--secondary-background-color, #f5f5f5);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 8px;
        box-sizing: border-box;
      }

      .preset-preview img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 6px;
        transition: transform 0.3s ease;
      }

      .preset-card:hover .preset-preview img {
        transform: scale(1.05);
      }

      .preset-icon-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 72px;
        height: 72px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        border-radius: 50%;
      }

      .preset-icon-placeholder ha-icon {
        --mdc-icon-size: 36px;
        color: var(--primary-color);
        opacity: 0.4;
      }

      /* Content section */
      .preset-content {
        padding: 14px 16px;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .preset-description {
        margin: 0;
        font-size: 13px;
        line-height: 1.4;
        color: var(--secondary-text-color);
        overflow: hidden;
        max-height: 4.2em; /* ~3 lines */
      }

      .preset-description.expanded {
        max-height: none;
        overflow: visible;
      }

      .read-more-link {
        background: none;
        border: none;
        padding: 2px 0;
        font-size: 12px;
        color: var(--primary-color);
        cursor: pointer;
        font-weight: 500;
        display: block;
        margin-top: 4px;
      }

      /* Scoped styles for WordPress HTML in descriptions */
      .preset-description p,
      .preset-description li {
        margin: 0 0 4px;
        font-size: 13px;
        line-height: 1.4;
        color: var(--secondary-text-color);
      }

      .preset-description a {
        color: var(--primary-color);
        text-decoration: underline;
      }

      .preset-description h1,
      .preset-description h2,
      .preset-description h3 {
        font-size: 13px;
        font-weight: 600;
        margin: 6px 0 2px;
        color: var(--primary-text-color);
      }

      .preset-description ul,
      .preset-description ol {
        padding-left: 16px;
        margin: 2px 0;
      }

      .preset-description img {
        max-width: 100%;
        border-radius: 6px;
      }

      /* Stats row */
      .preset-stats {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 12px;
        color: var(--secondary-text-color);
        padding-top: 4px;
      }

      .preset-stats .stat {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .preset-stats ha-icon {
        --mdc-icon-size: 14px;
        opacity: 0.6;
      }

      /* Rating stars */
      .star-rating {
        display: flex;
        gap: 2px;
      }

      .star-rating ha-icon {
        --mdc-icon-size: 14px;
        color: #ffb300;
        opacity: 1;
      }

      .star-rating ha-icon.empty {
        opacity: 0.25;
      }

      .preset-rating-interactive {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        user-select: none;
      }

      .preset-rating-interactive .rating-count {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-left: 2px;
      }

      .preset-rating-hint {
        font-size: 12px;
        color: var(--primary-color);
        opacity: 0.9;
      }

      /* Action bar at card bottom */
      .preset-actions {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 8px 12px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.02);
      }

      .preset-action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        flex: 1;
        padding: 5px 10px;
        border-radius: 6px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: var(--ha-card-background, var(--card-background-color));
        color: var(--secondary-text-color);
        font-size: 11px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
      }

      .preset-action-btn:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.06);
      }

      .preset-action-btn.primary {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }

      .preset-action-btn.primary:hover {
        filter: brightness(1.1);
        color: white;
      }

      .preset-action-btn ha-icon {
        --mdc-icon-size: 14px;
      }

      /* Hint banner above presets grid */
      .presets-hint {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px;
        margin-bottom: 16px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
        border-radius: 10px;
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }

      .presets-hint ha-icon {
        --mdc-icon-size: 18px;
        color: var(--primary-color);
        flex-shrink: 0;
      }

      .presets-hint strong {
        color: var(--primary-text-color);
      }

      /* Details panel */
      .preset-details {
        padding: 12px 16px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.02);
        animation: fadeSlideIn 0.2s ease-out;
      }

      .detail-info {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 6px 12px;
        font-size: 12px;
        margin-bottom: 10px;
      }

      .detail-info dt {
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .detail-info dd {
        margin: 0;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .detail-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 6px;
      }

      .detail-tag {
        display: inline-block;
        padding: 2px 8px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        border-radius: 4px;
        font-size: 11px;
        color: var(--primary-color);
        font-weight: 500;
      }

      /* Status bar */
      .status-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        padding: 10px 14px;
        background: var(--ha-card-background, var(--card-background-color));
        border-radius: 10px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
      }

      .status-bar .count {
        font-size: 13px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .status-bar .count strong {
        color: var(--primary-text-color);
      }

      /* Loading */
      .loading-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
        text-align: center;
        padding: 40px;
        color: var(--secondary-text-color);
        font-size: 14px;
      }

      .loading-state ha-icon {
        --mdc-icon-size: 32px;
        color: var(--primary-color);
      }

      /* Error */
      .error-state {
        text-align: center;
        padding: 32px;
        color: var(--error-color, #f44336);
        font-size: 14px;
      }

      /* Browse | My Presets segmented control */
      .presets-view-switch {
        display: flex;
        gap: 4px;
        padding: 4px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 14px;
        margin-bottom: 16px;
      }

      .presets-view-option {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 14px;
        border: none;
        border-radius: 10px;
        background: transparent;
        color: var(--secondary-text-color);
        font-size: 14px;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
        transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
      }

      .presets-view-option ha-icon {
        --mdc-icon-size: 18px;
      }

      .presets-view-option:hover:not(.active) {
        color: var(--primary-text-color);
      }

      .presets-view-option.active {
        background: var(--ha-card-background, var(--card-background-color));
        color: var(--primary-color);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.14);
      }

      /* My Presets list */
      .my-presets-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .my-preset-row {
        display: grid;
        grid-template-columns: 72px 1fr auto;
        gap: 14px;
        align-items: start;
        padding: 14px;
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 12px;
      }

      @media (max-width: 600px) {
        .my-preset-row {
          grid-template-columns: 56px 1fr;
        }
        .my-preset-actions {
          grid-column: 1 / -1;
        }
      }

      .my-preset-thumb {
        width: 72px;
        height: 72px;
        border-radius: 8px;
        object-fit: cover;
        background: var(--secondary-background-color);
      }

      .my-preset-thumb-placeholder {
        width: 72px;
        height: 72px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        color: var(--secondary-text-color);
      }

      .my-preset-thumb-placeholder ha-icon {
        --mdc-icon-size: 28px;
      }

      .my-preset-info h4 {
        margin: 0 0 6px;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .my-preset-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        margin-bottom: 6px;
      }

      .status-chip {
        display: inline-flex;
        align-items: center;
        padding: 2px 10px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.2px;
      }

      .status-chip.pending {
        background: rgba(255, 152, 0, 0.15);
        color: #ef6c00;
      }

      .status-chip.live {
        background: rgba(76, 175, 80, 0.15);
        color: #2e7d32;
      }

      .status-chip.changes_requested {
        background: rgba(33, 150, 243, 0.15);
        color: #1565c0;
      }

      .status-chip.rejected {
        background: rgba(244, 67, 54, 0.12);
        color: #c62828;
      }

      .status-chip.draft {
        background: rgba(158, 158, 158, 0.18);
        color: var(--secondary-text-color);
      }

      .revision-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 8px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
        color: var(--primary-color);
      }

      .revision-badge ha-icon {
        --mdc-icon-size: 14px;
      }

      .moderator-note {
        margin: 6px 0 0;
        padding: 8px 10px;
        border-radius: 8px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        font-size: 12px;
        line-height: 1.45;
        color: var(--primary-text-color);
      }

      .moderator-note strong {
        color: var(--secondary-text-color);
        font-weight: 600;
      }

      .my-preset-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        justify-content: flex-end;
      }

      .my-action-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 6px 10px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: transparent;
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        text-decoration: none;
        box-sizing: border-box;
      }

      .my-action-btn:hover:not(:disabled) {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }

      .my-action-btn.danger:hover:not(:disabled) {
        border-color: var(--error-color, #f44336);
        color: var(--error-color, #f44336);
      }

      .my-action-btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      .my-action-btn ha-icon {
        --mdc-icon-size: 14px;
      }

      .my-login-cta,
      .my-admin-only {
        text-align: center;
        padding: 36px 20px;
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
      }

      .my-login-cta ha-icon,
      .my-admin-only ha-icon {
        --mdc-icon-size: 40px;
        color: var(--primary-color);
        margin-bottom: 12px;
      }

      .my-login-cta h3,
      .my-admin-only h3 {
        margin: 0 0 8px;
        font-size: 18px;
      }

      .my-login-cta p,
      .my-admin-only p {
        margin: 0 0 16px;
        color: var(--secondary-text-color);
        font-size: 14px;
        line-height: 1.5;
      }

      .my-login-cta button,
      .my-admin-only button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 10px 18px;
        border: none;
        border-radius: 10px;
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        font-size: 14px;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
      }
    `],g([(0,s.MZ)({attribute:!1})],m.prototype,"hass",void 0),g([(0,s.MZ)()],m.prototype,"initialView",void 0),g([(0,s.wk)()],m.prototype,"_view",void 0),g([(0,s.wk)()],m.prototype,"_presets",void 0),g([(0,s.wk)()],m.prototype,"_category",void 0),g([(0,s.wk)()],m.prototype,"_loading",void 0),g([(0,s.wk)()],m.prototype,"_error",void 0),g([(0,s.wk)()],m.prototype,"_search",void 0),g([(0,s.wk)()],m.prototype,"_toastMsg",void 0),g([(0,s.wk)()],m.prototype,"_expandedId",void 0),g([(0,s.wk)()],m.prototype,"_cloudUser",void 0),g([(0,s.wk)()],m.prototype,"_showLoginDialog",void 0),g([(0,s.wk)()],m.prototype,"_ratingPreset",void 0),g([(0,s.wk)()],m.prototype,"_pendingRateAfterLogin",void 0),g([(0,s.wk)()],m.prototype,"_userReviews",void 0),g([(0,s.wk)()],m.prototype,"_readMoreId",void 0),g([(0,s.wk)()],m.prototype,"_myPresets",void 0),g([(0,s.wk)()],m.prototype,"_myLoading",void 0),g([(0,s.wk)()],m.prototype,"_myError",void 0),g([(0,s.wk)()],m.prototype,"_myForbidden",void 0),g([(0,s.wk)()],m.prototype,"_editingPreset",void 0),g([(0,s.wk)()],m.prototype,"_actionBusyId",void 0),m=g([(0,s.EM)("hub-presets-tab")],m)},1883(e,t,r){var i=r(9286),s=r(3045);class o extends Error{constructor(e,t){super(`HTTP ${e}: ${t}`),this.status=e}}function a(e){if(e instanceof o)return!0;const t=null==e?void 0:e.name;return"TimeoutError"===t||"AbortError"===t}class n{constructor(){this._inflight=new Map,this._failureCount=0,this._backoffUntil=0,this.cache=new Map,this.localStorageDisabled=!1,this.corsProxies=["https://api.allorigins.win/raw?url=","https://corsproxy.io/?","https://cors-anywhere.herokuapp.com/"]}async fetchPresets(e={}){const t=`presets_${JSON.stringify(e)}`,r=this.cache.get(t);if(r&&Date.now()-r.timestamp<n.CACHE_DURATION)return r.data;const i=this._getFromLocalStorage(t);if(i)return this.cache.set(t,i),i.data;if(Date.now()<this._backoffUntil)return this._cachedFallback(t);const s=this._inflight.get(t);if(s)return s;const o=this._fetchPresetsFromNetwork(e,t).finally(()=>this._inflight.delete(t));return this._inflight.set(t,o),o}async _fetchPresetsFromNetwork(e,t){try{const r=new URLSearchParams;e.page&&r.set("page",e.page.toString()),e.per_page&&r.set("per_page",e.per_page.toString()),e.category&&r.set("category",e.category),e.search&&r.set("search",e.search),e.sort&&r.set("sort",e.sort);const i=`${n.UC_API_BASE}/presets?${r.toString()}`;try{const r=await this._fetchWithCorsResilience(i),s=this._mapNativeCatalog(r,e.page||1);if(s&&Array.isArray(null==r?void 0:r.presets)){const e={data:s,timestamp:Date.now()};return this.cache.set(t,e),this._saveToLocalStorage(t,e),this._recordSuccess(),s}}catch(e){if(a(e)&&!(e instanceof o&&404===e.status))throw e}r.set("_embed","true");const s=`${n.API_BASE}/presets_dir_ltg?${r.toString()}`,c=await this._fetchWithCorsResilience(s),l={presets:Array.isArray(c)?c.map(e=>{var t,r,i,s,o,a,n,c,l,d,p,h,u,g,m,y,_,v,b,f,w;const x=e.preset_meta||{},$=x.tags?x.tags.split(",").map(e=>e.trim()):[],k=x.integrations?String(x.integrations).split(",").map(e=>e.trim()).filter(Boolean):[],A=this._stripHtml(x.description||(null===(t=e.excerpt)||void 0===t?void 0:t.rendered)||(null===(r=e.content)||void 0===r?void 0:r.rendered)||"No description available"),S=this._ensureHtml((null===(i=e.content)||void 0===i?void 0:i.rendered)||(null===(s=e.excerpt)||void 0===s?void 0:s.rendered)||x.description_html||A),P=(null===(n=null===(a=null===(o=e._embedded)||void 0===o?void 0:o["wp:featuredmedia"])||void 0===a?void 0:a[0])||void 0===n?void 0:n.source_url)||x.featured_image||e.featured_media_src_url||"";return{id:e.id,name:this._decodeHtmlEntities((null===(c=e.title)||void 0===c?void 0:c.rendered)||"Untitled Preset"),description:this._truncateDescription(A,15),description_full:S,shortcode:x.shortcode||'{"rows":[]}',category:x.category||"content",tags:$,integrations:k,author:(null===(p=null===(d=null===(l=e._embedded)||void 0===l?void 0:l.author)||void 0===d?void 0:d[0])||void 0===p?void 0:p.display_name)||(null===(g=null===(u=null===(h=e._embedded)||void 0===h?void 0:h.author)||void 0===u?void 0:u[0])||void 0===g?void 0:g.name)||(null===(_=null===(y=null===(m=e._embedded)||void 0===m?void 0:m.author)||void 0===y?void 0:y[0])||void 0===_?void 0:_.slug)||"Community",author_avatar:(null===(w=null===(f=null===(b=null===(v=e._embedded)||void 0===v?void 0:v.author)||void 0===b?void 0:b[0])||void 0===f?void 0:f.avatar_urls)||void 0===w?void 0:w[48])||"",downloads:parseInt(x.downloads)||0,rating:parseFloat(x.rating)||0,reviews_count:parseInt(x.rating_count)||0,rating_count:parseInt(x.rating_count)||0,created:e.date,updated:e.modified,is_featured:!1,difficulty:x.difficulty||"beginner",compatibility:x.compatibility?x.compatibility.split(","):[],featured_image:P,gallery:Array.isArray(x.gallery)&&x.gallery.length>0?x.gallery:[],preset_url:e.link||`https://ultracard.io/presets/${e.slug}/`}}):[],total:c.length||0,pages:1,current_page:1};if(!Array.isArray(c))throw new Error("Invalid response format: expected array of posts");const d={data:l,timestamp:Date.now()};return this.cache.set(t,d),this._saveToLocalStorage(t,d),this._recordSuccess(),l}catch(e){return console.error("Failed to fetch Directories Pro presets:",e),this._recordFailure(),this._cachedFallback(t)}}_recordSuccess(){this._failureCount=0,this._backoffUntil=0}_recordFailure(){this._failureCount++;const e=Math.min(n.FAILURE_BACKOFF_BASE*2**(this._failureCount-1),n.FAILURE_BACKOFF_MAX);this._backoffUntil=Date.now()+e}_cachedFallback(e){const t=this.cache.get(e);if(t)return t.data;const r=this._getFromLocalStorage(e,!0);if(r)return console.warn("Using stale cached presets due to fetch error"),r.data;const i=this._getFallbackCache();return i?(console.warn("Using fallback cached presets due to fetch error"),i):{presets:[],total:0,pages:0,current_page:1}}async fetchPreset(e){var t,r,i,s,o,a,c,l,d,p,h,u,g,m,y,_,v,b;const f=`preset_${e}`,w=this.cache.get(f);if(w&&Date.now()-w.timestamp<n.CACHE_DURATION)return w.data;try{const w=`${n.API_BASE}/presets_dir_ltg/${e}?_embed=true`,x=await this._fetchWithCorsResilience(w),$=x.preset_meta||{},k=$.tags?$.tags.split(",").map(e=>e.trim()):[],A=$.integrations?String($.integrations).split(",").map(e=>e.trim()).filter(Boolean):[],S=this._stripHtml((null===(t=x.excerpt)||void 0===t?void 0:t.rendered)||(null===(r=x.content)||void 0===r?void 0:r.rendered)||"No description available"),P=this._ensureHtml((null===(i=x.content)||void 0===i?void 0:i.rendered)||(null===(s=x.excerpt)||void 0===s?void 0:s.rendered)||$.description_html||S),C={id:x.id,name:this._decodeHtmlEntities((null===(o=x.title)||void 0===o?void 0:o.rendered)||"Untitled Preset"),description:this._truncateDescription(S,15),description_full:P,shortcode:$.shortcode||'{"rows":[]}',category:$.category||"content",tags:k,integrations:A,author:(null===(l=null===(c=null===(a=x._embedded)||void 0===a?void 0:a.author)||void 0===c?void 0:c[0])||void 0===l?void 0:l.display_name)||(null===(h=null===(p=null===(d=x._embedded)||void 0===d?void 0:d.author)||void 0===p?void 0:p[0])||void 0===h?void 0:h.name)||(null===(m=null===(g=null===(u=x._embedded)||void 0===u?void 0:u.author)||void 0===g?void 0:g[0])||void 0===m?void 0:m.slug)||"Community",author_avatar:(null===(b=null===(v=null===(_=null===(y=x._embedded)||void 0===y?void 0:y.author)||void 0===_?void 0:_[0])||void 0===v?void 0:v.avatar_urls)||void 0===b?void 0:b[48])||"",downloads:parseInt($.downloads)||0,rating:parseFloat($.rating)||0,reviews_count:parseInt($.rating_count)||0,rating_count:parseInt($.rating_count)||0,created:x.date,updated:x.modified,is_featured:!1,difficulty:$.difficulty||"beginner",compatibility:$.compatibility?$.compatibility.split(","):[],featured_image:$.featured_image||x.featured_media_src_url||"",gallery:Array.isArray($.gallery)?$.gallery:[],preset_url:x.link||`https://ultracard.io/presets/${x.slug}/`},E={data:C,timestamp:Date.now()};return this.cache.set(f,E),C}catch(t){return console.error(`Failed to fetch preset ${e}:`,t),null}}async trackDownload(e){try{const t=`${n.API_BASE.replace("/wp/v2","/ultra-card/v1")}/presets/${e}/track-download`;await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"}})}catch(t){console.warn(`Failed to track download for preset ${e}:`,t)}}async getCategories(){const e="categories",t=this.cache.get(e);if(t&&Date.now()-t.timestamp<n.CACHE_DURATION)return t.data;try{const t=await fetch(`${n.API_BASE}/categories`,{signal:AbortSignal.timeout(5e3)});if(t.ok){const r=await t.json(),i={data:r,timestamp:Date.now()};return this.cache.set(e,i),r}}catch(e){console.warn("Failed to fetch categories:",e)}return["layout","content","data","interactive","input","media"]}clearCache(){this.cache.clear(),Object.keys(localStorage).forEach(e=>{e.startsWith("wp-presets-cache-")&&(0,i.Pw)(e)})}async testConnection(){const e=`${n.API_BASE}/presets_dir_ltg?per_page=1`,t=[];try{await fetch(e,{method:"GET",headers:{Accept:"application/json"},signal:AbortSignal.timeout(5e3)}),t.push({method:"Direct Fetch",success:!0})}catch(e){t.push({method:"Direct Fetch",success:!1,error:e instanceof Error?e.message:"Unknown error"})}for(const r of this.corsProxies)try{const i=`${r}${encodeURIComponent(e)}`;await fetch(i,{method:"GET",headers:{Accept:"application/json"},signal:AbortSignal.timeout(8e3)}),t.push({method:`Proxy: ${r}`,success:!0})}catch(e){t.push({method:`Proxy: ${r}`,success:!1,error:e instanceof Error?e.message:"Unknown error"})}return t}getCacheStats(){return{memoryEntries:this.cache.size,localStorageEntries:Object.keys(localStorage).filter(e=>e.startsWith("wp-presets-cache-")).length}}_saveToLocalStorage(e,t){if(!this.localStorageDisabled)try{this._cleanupExpiredCache();const r=JSON.stringify(t);if(new Blob([r]).size>n.MAX_ENTRY_SIZE)return;const s=`wp-presets-cache-${e}`;(0,i.FX)(s,r)}catch(r){if(r instanceof DOMException&&"QuotaExceededError"===r.name){this._clearAllPresetCache();try{const r=JSON.stringify(t);if(new Blob([r]).size<=n.MAX_ENTRY_SIZE){const t=`wp-presets-cache-${e}`;(0,i.FX)(t,r)}}catch(e){this.localStorageDisabled=!0,this._clearAllPresetCache()}}}}_getFromLocalStorage(e,t=!1){if(this.localStorageDisabled)return null;try{const r=`wp-presets-cache-${e}`,s=(0,i.bi)(r);if(!s)return null;const o=JSON.parse(s);return Date.now()-o.timestamp>(t?n.EXTENDED_CACHE_DURATION:n.CACHE_DURATION)?(t||(0,i.Pw)(r),t?o:null):o}catch(e){return console.warn("Failed to read from localStorage:",e),null}}_mapNativeCatalog(e,t){var r,i,s;if(!e||"object"!=typeof e)return null;const o=Array.isArray(e.presets)?e.presets:Array.isArray(e)?e:null;if(!o)return null;const a=o.map(e=>{const t=Array.isArray(e.tags)?e.tags.map(e=>String(e).trim()).filter(Boolean):"string"==typeof e.tags?e.tags.split(",").map(e=>e.trim()).filter(Boolean):[],r=e.integrations?String(e.integrations).split(",").map(e=>e.trim()).filter(Boolean):[],i=this._stripHtml(e.description||""),s=Array.isArray(e.gallery)?e.gallery.map(String):[];return{id:Number(e.id),name:String(e.name||""),description:i.slice(0,200),description_full:e.description||i,shortcode:String(e.shortcode||""),category:String(e.category||"content"),tags:t,integrations:r.length?r:void 0,author:String(e.author||""),featured_image:String(e.featured_image||s[0]||""),gallery:s,downloads:Number(e.downloads||0),rating:Number(e.rating||0),reviews_count:Number(e.rating_count||0),rating_count:Number(e.rating_count||0),created:String(e.date||""),updated:String(e.modified||""),is_featured:"official"===String(e.source||""),difficulty:"beginner",preset_url:e.preset_url?String(e.preset_url):void 0}});return{presets:a,total:Number(null!==(r=e.total)&&void 0!==r?r:a.length),pages:Number(null!==(i=e.total_pages)&&void 0!==i?i:1),current_page:Number(null!==(s=e.page)&&void 0!==s?s:t)}}_stripHtml(e){if(!e)return"";const t=document.createElement("div");return t.innerHTML=e,(t.textContent||t.innerText||"").trim().replace(/\s+/g," ")}_ensureHtml(e){if(!e)return"";if(/<(p|br|ul|ol|li|h[1-6]|blockquote)\b/i.test(e))return e;let t=e.replace(/`([^`\n]+)`/g,"<code>$1</code>");return t.includes("\n")?"<p>"+t.replace(/\n\n+/g,"</p><p>").replace(/\n/g,"<br>")+"</p>":(t=t.replace(/\s+-\s+/g,"<br>– "),`<p>${t}</p>`)}_decodeHtmlEntities(e){if(!e)return"";const t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||e}_truncateDescription(e,t=15){if(!e)return"";const r=e.split(" ");return r.length<=t?e:r.slice(0,t).join(" ")+"..."}async _fetchWithCorsResilience(e){try{const t=await fetch(e,{method:"GET",headers:{Accept:"application/json"},signal:AbortSignal.timeout(8e3)});if(!t.ok)throw new o(t.status,t.statusText);return await t.json()}catch(t){if(a(t))throw t;for(const t of this.corsProxies)try{const r=`${t}${encodeURIComponent(e)}`,i=await fetch(r,{method:"GET",headers:{Accept:"application/json"},signal:AbortSignal.timeout(1e4)});if(!i.ok)throw new Error(`Proxy HTTP ${i.status}: ${i.statusText}`);const o=await i.json();return s.v&&console.log(`Successfully fetched via proxy: ${t}`),o}catch(e){continue}try{return await this._fetchViaJsonp(e)}catch(e){console.warn("JSONP fetch failed:",e)}throw new Error("All CORS-resilient fetch methods failed")}}async _fetchViaJsonp(e){return new Promise((t,r)=>{const i=`ultracard_jsonp_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,s=document.createElement("script"),o=setTimeout(()=>{a(),r(new Error("JSONP timeout"))},15e3),a=()=>{s.parentNode&&s.parentNode.removeChild(s),delete window[i],clearTimeout(o)};window[i]=e=>{a(),t(e)},s.onerror=()=>{a(),r(new Error("JSONP script error"))};const n=e.includes("?")?"&":"?";s.src=`${e}${n}callback=${i}`,document.head.appendChild(s)})}_cleanupExpiredCache(){if(!this.localStorageDisabled)try{const e=Object.keys(localStorage).filter(e=>e.startsWith("wp-presets-cache-")),t=Date.now();let r=0;e.forEach(e=>{try{const s=(0,i.bi)(e);if(!s)return;const o=JSON.parse(s);t-o.timestamp>n.CACHE_DURATION&&((0,i.Pw)(e),r++)}catch(t){(0,i.Pw)(e),r++}});const s=Object.keys(localStorage).filter(e=>e.startsWith("wp-presets-cache-"));if(s.length>n.MAX_CACHE_ENTRIES){const e=s.map(e=>{try{const t=(0,i.bi)(e);return t?{key:e,timestamp:JSON.parse(t).timestamp}:null}catch(t){return{key:e,timestamp:0}}}).filter(Boolean).sort((e,t)=>((null==e?void 0:e.timestamp)||0)-((null==t?void 0:t.timestamp)||0));e.slice(0,e.length-n.MAX_CACHE_ENTRIES).forEach(e=>{(null==e?void 0:e.key)&&((0,i.Pw)(e.key),r++)})}}catch(e){console.warn("Failed to cleanup expired cache:",e)}}_cleanupCacheAggressively(){try{const e=Object.keys(localStorage).filter(e=>e.startsWith("wp-presets-cache-"));if(e.length<=n.MAX_CACHE_ENTRIES)return;const t=e.map(e=>{try{const t=(0,i.bi)(e);return t?{key:e,timestamp:JSON.parse(t).timestamp}:null}catch(t){return{key:e,timestamp:0}}}).filter(Boolean).sort((e,t)=>((null==e?void 0:e.timestamp)||0)-((null==t?void 0:t.timestamp)||0));t.slice(0,t.length-n.MAX_CACHE_ENTRIES).forEach(e=>{(null==e?void 0:e.key)&&(0,i.Pw)(e.key)})}catch(e){}}_clearAllPresetCache(){try{Object.keys(localStorage).filter(e=>e.startsWith("wp-presets-cache-")).forEach(e=>{try{(0,i.Pw)(e)}catch(e){}})}catch(e){}}_getFallbackCache(){if(this.localStorageDisabled)return null;try{const e=Object.keys(localStorage).filter(e=>e.startsWith("wp-presets-cache-presets_")).map(e=>{try{const t=(0,i.bi)(e);if(!t)return null;const r=JSON.parse(t);return{key:e,timestamp:r.timestamp,data:r.data}}catch(e){return null}}).filter(Boolean).sort((e,t)=>((null==t?void 0:t.timestamp)||0)-((null==e?void 0:e.timestamp)||0));if(e.length>0&&e[0])return e[0].data}catch(e){console.warn("Failed to get fallback cache:",e)}return null}}n.API_BASE="https://ultracard.io/wp-json/wp/v2",n.UC_API_BASE="https://ultracard.io/wp-json/ultra-card/v1",n.CACHE_KEY="ultra-card-directories-pro-presets-v2",n.CACHE_TIMESTAMP_KEY="ultra-card-directories-pro-presets-v2-timestamp",n.CACHE_DURATION=216e5,n.EXTENDED_CACHE_DURATION=864e5,n.MAX_CACHE_ENTRIES=10,n.MAX_ENTRY_SIZE=512e3,n.FAILURE_BACKOFF_BASE=3e5,n.FAILURE_BACKOFF_MAX=216e5;const c=new n;r.d(t,["N",0,c])},1172(e,t,r){r.r(t),r.d(t,{escapeHtml:()=>h,sanitizeMarkdownHtml:()=>l,sanitizePresetHtml:()=>d,sanitizeRichTextHtml:()=>p,stripCssFetches:()=>a});var i=r(9418);const s=["script","iframe","object","embed","form","input","button","textarea","select","option"],o=/url\s*\(|image-set\s*\(|-moz-binding|behavior\s*:|@import/i;function a(e){return e&&o.test(e)?e.split(";").filter(e=>e.includes(":")&&!o.test(e)).map(e=>e.trim()).filter(Boolean).join("; "):e}let n=!1;function c(e,t){n=!e;try{return t()}finally{n=!1}}function l(e,t,r){const o=!1!==(null==r?void 0:r.trusted);return c(o,()=>i.A.sanitize(e,{USE_PROFILES:{html:!0},FORBID_TAGS:t&&o?s:[...s,"style"],FORCE_BODY:t}))}function d(e){return c(!1,()=>i.A.sanitize(e,{USE_PROFILES:{html:!0},FORBID_TAGS:[...s,"style"]}))}function p(e,t){return c(!1!==(null==t?void 0:t.trusted),()=>i.A.sanitize(e,{ALLOWED_TAGS:["p","br","strong","b","em","i","u","s","span","a","mark"],ALLOWED_ATTR:["style","href","target","rel","class","data-color"]}))}function h(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}i.A.addHook("afterSanitizeAttributes",e=>{var t;if(!n)return;const r=e,i=null===(t=r.getAttribute)||void 0===t?void 0:t.call(r,"style");if(!i)return;const s=a(i);s!==i&&(s?r.setAttribute("style",s):r.removeAttribute("style"))})},7907(e,t,r){r.d(t,{iC:()=>i}),new Map,new Map,new Set,r(3045);const i=["image/*","image/png","image/jpeg","image/gif","image/webp","image/avif","image/svg+xml","image/bmp","image/tiff","image/x-icon","image/vnd.microsoft.icon","image/heic","image/heif","image/jxl","image/apng",".png",".jpg",".jpeg",".gif",".webp",".avif",".svg",".bmp",".tif",".tiff",".ico",".heic",".heif",".jxl",".apng"].join(",")},9286(e,t,r){function i(e){try{return localStorage.getItem(e)}catch(e){return null}}function s(e,t){try{return localStorage.setItem(e,t),!0}catch(e){return!1}}function o(e){try{localStorage.removeItem(e)}catch(e){}}r.d(t,{FX:()=>s,Pw:()=>o,bi:()=>i})},8716(e,t,r){async function i(e){const t="undefined"!=typeof navigator?navigator.clipboard:void 0;if(!(null==t?void 0:t.writeText))return s(e);try{return await t.writeText(e),!0}catch(t){return s(e)}}function s(e){if("undefined"==typeof document||!document.body)return!1;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="0",t.style.left="-9999px",t.style.opacity="0",document.body.appendChild(t);const r=document.getSelection(),i=r&&r.rangeCount>0?r.getRangeAt(0):null;try{return t.focus(),t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy")}catch(e){return!1}finally{document.body.removeChild(t),r&&i&&(r.removeAllRanges(),r.addRange(i))}}r.d(t,{e:()=>i})},6201(e,t,r){r.d(t,{Kq:()=>p});var i=r(8504),s=r(7804);const o=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const e of r)e._$AO?.(t,!1),o(e,t);return!0},a=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},n=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),d(t)}};function c(e){void 0!==this._$AN?(a(this),this._$AM=e,n(this)):this._$AM=e}function l(e,t=!1,r=0){const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(i))for(let e=r;e<i.length;e++)o(i[e],!1),a(i[e]);else null!=i&&(o(i,!1),a(i));else o(this,e)}const d=e=>{e.type==s.OA.CHILD&&(e._$AP??=l,e._$AQ??=c)};class p extends s.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),n(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(o(this,e),a(this))}setValue(e){if((0,i.Rt)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}},8504(e,t,r){var i=r(6752);const{I:s}=i.ge;r.d(t,["Rt",0,e=>void 0===e.strings,"sO",0,e=>null===e||"object"!=typeof e&&"function"!=typeof e])},7804(e,t,r){r.d(t,{WL:()=>i});class i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}r.d(t,["OA",0,{ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},"u$",0,e=>(...t)=>({_$litDirective$:e,values:t})])},302(e,t,r){r.d(t,{Kq:()=>i.Kq});var i=r(6201)},6781(e,t,r){r.d(t,{_:()=>a});var i=r(6752),s=r(7804);class o extends s.WL{constructor(e){if(super(e),this.it=i.s6,e.type!==s.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===i.s6||null==e)return this._t=void 0,this.it=e;if(e===i.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;const a=(0,s.u$)(o)}};