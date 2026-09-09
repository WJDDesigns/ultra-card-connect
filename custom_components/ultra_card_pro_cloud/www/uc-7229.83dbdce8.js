/*! For license information please see uc-7229.83dbdce8.js.LICENSE.txt */
export const __webpack_esm_ids__=[1172,7229,9286];export const __webpack_esm_modules__={3378(e,t,i){i.r(t),i.d(t,{HubPresetsTab:()=>m});var r=i(2618),s=i(4791),o=i(6781),a=i(8717),n=i(378),d=i(7568),l=i(5650),c=i(9978),p=i(8716),h=i(1172),u=i(6478),g=(i(5387),i(7894),i(4480),function(e,t,i,r){var s,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(o<3?s(a):o>3?s(t,i,a):s(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a});let m=class extends r.WF{constructor(){super(...arguments),this.initialView="browse",this._view="browse",this._presets=[],this._category="all",this._loading=!1,this._error=null,this._search="",this._toastMsg="",this._expandedId=null,this._cloudUser=null,this._showLoginDialog=!1,this._ratingPreset=null,this._pendingRateAfterLogin=null,this._userReviews=new Map,this._readMoreId=null,this._myPresets=[],this._myLoading=!1,this._myError=null,this._myForbidden=!1,this._editingPreset=null,this._actionBusyId=null}_lang(){var e,t,i;return null!==(i=null===(t=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===t?void 0:t.language)&&void 0!==i?i:"en"}_t(e,t){return(0,u.kg)(e,this._lang(),t)}_getSanitizedPresetDescription(e){const t=this._readMoreId===e.id&&e.description_full||e.description;return(0,h.sanitizePresetHtml)(t||"")}refresh(){a.ucPresetsService.ensureWordPressLoaded(),a.ucPresetsService.refreshWordPressPresets(),"mine"===this._view&&this._cloudUser&&this._loadMyPresets()}connectedCallback(){super.connectedCallback(),a.ucPresetsService.ensureWordPressLoaded(),this._cloudUser=n.xd.getCurrentUser(),this._authListener=e=>{this._cloudUser=e,e?(this._showLoginDialog=!1,d.Q.loadUserReviewsFromServer().then(()=>this.requestUpdate()),"mine"===this._view&&this._loadMyPresets()):(this._myPresets=[],this._myError=null,this._myForbidden=!1)},n.xd.addListener(this._authListener),this._cloudUser&&d.Q.loadUserReviewsFromServer().then(()=>this.requestUpdate()),this._presets=a.ucPresetsService.getAllPresets(),this._unsub=a.ucPresetsService.subscribe(e=>{this._presets=e});const e=a.ucPresetsService.getWordPressStatus();this._loading=e.loading,this._error=e.error,this._statusUnsub=a.ucPresetsService.subscribeToStatus(e=>{this._loading=e.loading,this._error=e.error})}updated(e){e.has("initialView")&&"mine"===this.initialView&&(this._setView("mine"),this.dispatchEvent(new CustomEvent("presets-view-applied",{bubbles:!0,composed:!0})))}disconnectedCallback(){var e,t;super.disconnectedCallback(),null===(e=this._unsub)||void 0===e||e.call(this),null===(t=this._statusUnsub)||void 0===t||t.call(this),this._authListener&&(n.xd.removeListener(this._authListener),this._authListener=void 0),this._toastTimer&&clearTimeout(this._toastTimer)}_setView(e){this._view=e,"mine"===e&&this._cloudUser&&this._loadMyPresets()}async _loadMyPresets(){if(n.xd.isAuthenticated()){this._myLoading=!0,this._myError=null,this._myForbidden=!1;try{this._myPresets=await l.a.listMine()}catch(e){403===(null==e?void 0:e.status)?(this._myForbidden=!0,this._myError=this._t("hub.my_presets.admin_only_message","Preset authoring is available to Home Assistant administrators only. Sign in as an admin (via Ultra Card Connect) to manage your submissions.")):this._myError=e instanceof Error?e.message:this._t("hub.my_presets.load_error","Could not load your presets."),this._myPresets=[]}finally{this._myLoading=!1}}}_statusChip(e){return"changes_requested"===e.review_status?{key:"changes_requested",label:this._t("hub.my_presets.status.changes_requested","Changes requested"),className:"changes_requested"}:"rejected"===e.review_status||"rejected"===e.status?{key:"rejected",label:this._t("hub.my_presets.status.rejected","Rejected"),className:"rejected"}:"publish"===e.status&&"approved"===e.review_status?{key:"live",label:this._t("hub.my_presets.status.live","Live"),className:"live"}:"draft"===e.status?{key:"draft",label:this._t("hub.my_presets.status.draft","Draft"),className:"draft"}:"publish"===e.status?{key:"live",label:this._t("hub.my_presets.status.live","Live"),className:"live"}:{key:"pending",label:this._t("hub.my_presets.status.pending","Pending review"),className:"pending"}}_openEdit(e){this._editingPreset=e}async _withdraw(e){if(window.confirm(this._t("hub.my_presets.confirm_withdraw","Withdraw this pending submission or revision?"))){this._actionBusyId=e.id;try{await l.a.withdraw(e.id),this._showToast(this._t("hub.my_presets.withdrawn","Submission withdrawn")),await this._loadMyPresets()}catch(e){this._showToast(e instanceof Error?e.message:"Withdraw failed")}finally{this._actionBusyId=null}}}async _delete(e){if(window.confirm(this._t("hub.my_presets.confirm_delete","Delete this preset? This cannot be undone."))){this._actionBusyId=e.id;try{await l.a.remove(e.id),this._showToast(this._t("hub.my_presets.deleted","Preset deleted")),await this._loadMyPresets()}catch(e){this._showToast(e instanceof Error?e.message:"Delete failed")}finally{this._actionBusyId=null}}}_showToast(e){this._toastMsg=e,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toastMsg="",2500)}_getFilteredPresets(){let e=this._presets;if("all"!==this._category&&(e=e.filter(e=>e.category===this._category)),this._search.trim()){const t=this._search.toLowerCase().trim();e=e.filter(e=>e.name.toLowerCase().includes(t)||(e.description||"").toLowerCase().includes(t)||(e.author||"").toLowerCase().includes(t))}return e}_refreshPresets(){this.refresh()}_getOriginLabel(e){return"wordpress"===e.source||"community"===e.origin?"community":"default"===e.origin||"default"===e.source?"default":"builtin"===e.origin||"builtin"===e.source?"builtin":"community"}_isNewPreset(e){var t,i;const r=(null===(t=e.metadata)||void 0===t?void 0:t.created)||(null===(i=e.metadata)||void 0===i?void 0:i.date);return!!r&&new Date(r)>new Date(Date.now()-2592e6)}_buildPresetConfig(e){const t={};return e.layout&&(t.layout=e.layout),e.cardSettings&&Object.entries(e.cardSettings).forEach(([e,i])=>{null!=i&&(t[e]=i)}),e.customVariables&&e.customVariables.length>0&&(t._customVariables=e.customVariables),t}async _copyPresetConfig(e){try{const t=this._buildPresetConfig(e);if(0===Object.keys(t).length)return void this._showToast("No config data in this preset");const i=JSON.stringify(t,null,2),r=await(0,p.e)(i);this._showToast(r?`Copied "${e.name}" config`:"Could not copy — your browser blocked clipboard access")}catch(e){console.warn("Copy preset config failed:",e),this._showToast("Could not copy this preset")}a.ucPresetsService.trackPresetDownload(e.id).catch(()=>{})}async _copyPresetLayout(e){try{if(!e.layout)return void this._showToast("No layout data in this preset");const t=JSON.stringify(e.layout,null,2),i=await(0,p.e)(t);this._showToast(i?`Copied layout for "${e.name}"`:"Could not copy — your browser blocked clipboard access")}catch(e){console.warn("Copy preset layout failed:",e),this._showToast("Could not copy this layout")}a.ucPresetsService.trackPresetDownload(e.id).catch(()=>{})}_toggleDetails(e){this._expandedId=this._expandedId===e?null:e}_renderStars(e){const t=[];for(let i=1;i<=5;i++)t.push(r.qy`<ha-icon
          icon=${i<=Math.round(e)?"mdi:star":"mdi:star-outline"}
          class=${i<=Math.round(e)?"":"empty"}
        ></ha-icon>`);return r.qy`<div class="star-rating">${t}</div>`}_getUserRatingForPreset(e){var t;const i=this._userReviews.get(e);if(null!=i)return i;const r=d.Q.getUserReview(e);return null!==(t=null==r?void 0:r.rating)&&void 0!==t?t:null}_renderInteractiveStars(e,t){var i;const s=this._getUserRatingForPreset(e.id),o=null!==(i=null!=s?s:t.rating)&&void 0!==i?i:0;if(o<=0&&!this._cloudUser)return r.qy`<span class="preset-rating-hint" title="Sign in to rate">Rate it</span>`;const a=[],n=Math.round(o);for(let e=1;e<=5;e++)a.push(r.qy`<ha-icon
          icon=${e<=n?"mdi:star":"mdi:star-outline"}
          class=${e<=n?"":"empty"}
        ></ha-icon>`);return r.qy`<span class="star-rating">${a}</span>`}_handleStarClick(e,t){if(t.stopPropagation(),!this._cloudUser)return this._pendingRateAfterLogin={id:e.id,name:e.name},void(this._showLoginDialog=!0);this._ratingPreset={id:e.id,name:e.name}}_handleRatingSubmitted(e){const{presetId:t,rating:i,presetRating:r,presetRatingCount:s}=e.detail;this._userReviews=new Map(this._userReviews).set(t,i),this._applyAggregateRating(t,r,s),this._ratingPreset=null,this._showToast("Thanks for your rating!")}_applyAggregateRating(e,t,i){if(null==t)return;const r=this._presets.find(t=>t.id===e);r&&(r.metadata=Object.assign(Object.assign(Object.assign({},r.metadata),{rating:t}),null!=i?{rating_count:i}:{}),this._presets=[...this._presets])}render(){var e,t,i;return r.qy`
      ${this._showLoginDialog?r.qy`
            <uc-hub-login-dialog
              @close=${()=>{this._showLoginDialog=!1,this._pendingRateAfterLogin=null}}
            ></uc-hub-login-dialog>
          `:""}
      ${this._ratingPreset?r.qy`
            <uc-hub-rate-dialog
              .presetId=${this._ratingPreset.id}
              .presetName=${this._ratingPreset.name}
              .existingRating=${null!==(i=null!==(e=this._userReviews.get(this._ratingPreset.id))&&void 0!==e?e:null===(t=d.Q.getUserReview(this._ratingPreset.id))||void 0===t?void 0:t.rating)&&void 0!==i?i:0}
              @rating-submitted=${this._handleRatingSubmitted}
              @close=${()=>{this._ratingPreset=null}}
            ></uc-hub-rate-dialog>
          `:""}
      ${this._editingPreset?r.qy`
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
    `}_renderBrowse(){const e=this._getFilteredPresets();return r.qy`
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
        ${[{key:"all",label:"All",icon:"mdi:view-grid"},{key:"layout",label:"Layout",icon:"mdi:view-dashboard-outline"},{key:"content",label:"Content",icon:"mdi:text-box-outline"},{key:"data",label:"Data",icon:"mdi:chart-box-outline"},{key:"interactive",label:"Controls",icon:"mdi:gesture-tap"},{key:"input",label:"Inputs",icon:"mdi:form-textbox"},{key:"media",label:"Media",icon:"mdi:image-multiple-outline"}].map(e=>r.qy`
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
          ${this._loading&&0===this._presets.length?"Loading presets…":r.qy`Showing <strong>${e.length}</strong> of ${this._presets.length} presets`}
        </span>
      </div>

      <!-- States -->
      ${this._loading?r.qy`
            <div class="loading-state">
              <ha-icon icon="mdi:loading" class="spinning"></ha-icon>
              Loading presets…
            </div>
          `:""}
      ${this._error?r.qy`<div class="error-state">${this._error}</div>`:""}

      <!-- Grid -->
      ${this._loading||0!==e.length?r.qy`
            ${e.length>0?r.qy`
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
          `:r.qy`
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
    `}_renderMyPresets(){return this._cloudUser?this._myForbidden?r.qy`
        <div class="my-admin-only">
          <ha-icon icon="mdi:shield-account-outline"></ha-icon>
          <h3>${this._t("hub.my_presets.admin_only_title","Admin access required")}</h3>
          <p>${this._myError}</p>
        </div>
      `:r.qy`
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

      ${this._myLoading?r.qy`
            <div class="loading-state">
              <ha-icon icon="mdi:loading" class="spinning"></ha-icon>
              ${this._t("hub.my_presets.loading","Loading your presets…")}
            </div>
          `:r.s6}
      ${this._myError&&!this._myForbidden?r.qy`<div class="error-state">${this._myError}</div>`:r.s6}
      ${this._myLoading||this._myError||0!==this._myPresets.length?r.qy`
            <div class="my-presets-list">
              ${this._myPresets.map(e=>this._renderMyPresetRow(e))}
            </div>
          `:r.qy`
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
    `:r.qy`
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
      `}_renderMyPresetRow(e){var t;const i=this._statusChip(e),s=null===(t=e.gallery)||void 0===t?void 0:t[0],o=this._actionBusyId===e.id,a="pending"===e.review_status||e.has_pending_revision||"pending"===e.status;return r.qy`
      <div class="my-preset-row">
        ${s?r.qy`<img class="my-preset-thumb" src=${s} alt="" loading="lazy" />`:r.qy`
              <div class="my-preset-thumb-placeholder">
                <ha-icon icon="mdi:card-text-outline"></ha-icon>
              </div>
            `}
        <div class="my-preset-info">
          <h4>${e.name}</h4>
          <div class="my-preset-meta">
            <span class="status-chip ${i.className}">${i.label}</span>
            ${e.has_pending_revision?r.qy`
                  <span class="revision-badge">
                    <ha-icon icon="mdi:clock-outline"></ha-icon>
                    ${this._t("hub.my_presets.pending_revision","Update awaiting review")}
                  </span>
                `:r.s6}
          </div>
          ${e.moderator_note?r.qy`
                <div class="moderator-note">
                  <strong>${this._t("hub.my_presets.moderator_note","Moderator note")}:</strong>
                  ${e.moderator_note}
                </div>
              `:r.s6}
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
          ${a?r.qy`
                <button
                  type="button"
                  class="my-action-btn"
                  ?disabled=${o}
                  @click=${()=>this._withdraw(e)}
                >
                  <ha-icon icon="mdi:undo"></ha-icon>
                  ${this._t("hub.my_presets.withdraw","Withdraw")}
                </button>
              `:r.s6}
          <button
            type="button"
            class="my-action-btn danger"
            ?disabled=${o}
            @click=${()=>this._delete(e)}
          >
            <ha-icon icon="mdi:delete-outline"></ha-icon>
            ${this._t("hub.my_presets.delete","Delete")}
          </button>
          ${e.preset_url?r.qy`
                <a
                  class="my-action-btn"
                  href=${e.preset_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ha-icon icon="mdi:open-in-new"></ha-icon>
                  ${this._t("hub.my_presets.view_on_site","View on site")}
                </a>
              `:r.s6}
        </div>
      </div>
    `}_renderPresetCard(e){var t,i,s,a,n,d;const l=this._getOriginLabel(e),c=e.metadata||{},p=!!e.thumbnail||!!e.image||!!e.preview_url,h=e.thumbnail||e.image||e.preview_url,u=this._expandedId===e.id;return r.qy`
      <div class="preset-card">
        <div class="preset-header">
          <div class="preset-header-left">
            <div class="preset-title-info">
              <h4 class="preset-header-title">${e.name}</h4>
              ${e.author?r.qy`<span class="preset-header-author">by ${e.author}</span>`:r.s6}
            </div>
          </div>
          <span class="origin-badge ${l}">${l}</span>
          ${this._isNewPreset(e)?r.qy`<span class="new-badge">New</span>`:r.s6}
        </div>

        ${p?r.qy`
              <div class="preset-preview">
                <img src="${h}" alt="${e.name}" loading="lazy" />
              </div>
            `:r.qy`
              <div class="preset-preview">
                <div class="preset-icon-placeholder">
                  <ha-icon icon="mdi:card-text-outline"></ha-icon>
                </div>
              </div>
            `}

        <div class="preset-content">
          ${e.description?r.qy`
                <div class="preset-description ${this._readMoreId===e.id?"expanded":""}">${(0,o._)(this._getSanitizedPresetDescription(e))}</div>
                ${e.description_full&&e.description_full!==e.description?r.qy`<button class="read-more-link" @click=${t=>{t.stopPropagation(),this._readMoreId=this._readMoreId===e.id?null:e.id}}>${this._readMoreId===e.id?"Read Less ↑":"Read More ↓"}</button>`:r.s6}
              `:r.s6}

          <div class="preset-stats">
            <span class="stat">
              <ha-icon icon="mdi:download"></ha-icon>
              ${null!==(i=null!==(t=c.downloads)&&void 0!==t?t:e.downloads)&&void 0!==i?i:0}
            </span>
            <div
              class="preset-rating-interactive"
              @click=${t=>this._handleStarClick(e,t)}
              title=${this._cloudUser?"Rate this preset":"Sign in to rate"}
            >
              ${this._renderInteractiveStars(e,c)}
              <span class="rating-count">(${null!==(d=null!==(n=null!==(a=null!==(s=c.rating_count)&&void 0!==s?s:c.reviews_count)&&void 0!==a?a:e.rating_count)&&void 0!==n?n:e.reviews_count)&&void 0!==d?d:0})</span>
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

        ${u?this._renderDetails(e):r.s6}
      </div>
    `}_renderDetails(e){var t,i,s,o,a;const n=null!==(s=null===(i=null===(t=e.layout)||void 0===t?void 0:t.rows)||void 0===i?void 0:i.length)&&void 0!==s?s:0,d=null!==(a=null===(o=e.customVariables)||void 0===o?void 0:o.length)&&void 0!==a?a:0,l=!!(e.cardSettings&&Object.keys(e.cardSettings).length>0);return r.qy`
      <div class="preset-details">
        <dl class="detail-info">
          <dt>Category</dt>
          <dd>${e.category}</dd>
          <dt>Version</dt>
          <dd>${e.version||"—"}</dd>
          <dt>Rows</dt>
          <dd>${n}</dd>
          ${d>0?r.qy`<dt>Variables</dt><dd>${d}</dd>`:r.s6}
          ${l?r.qy`<dt>Card settings</dt><dd>Included</dd>`:r.s6}
          ${e.integrations&&e.integrations.length>0?r.qy`<dt>Requires</dt><dd>${e.integrations.join(", ")}</dd>`:r.s6}
        </dl>
        ${e.tags&&e.tags.length>0?r.qy`
              <div class="detail-tags">
                ${e.tags.map(e=>r.qy`<span class="detail-tag">${e}</span>`)}
              </div>
            `:r.s6}
      </div>
    `}};m.styles=[c.z,r.AH`
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
    `],g([(0,s.MZ)({attribute:!1})],m.prototype,"hass",void 0),g([(0,s.MZ)()],m.prototype,"initialView",void 0),g([(0,s.wk)()],m.prototype,"_view",void 0),g([(0,s.wk)()],m.prototype,"_presets",void 0),g([(0,s.wk)()],m.prototype,"_category",void 0),g([(0,s.wk)()],m.prototype,"_loading",void 0),g([(0,s.wk)()],m.prototype,"_error",void 0),g([(0,s.wk)()],m.prototype,"_search",void 0),g([(0,s.wk)()],m.prototype,"_toastMsg",void 0),g([(0,s.wk)()],m.prototype,"_expandedId",void 0),g([(0,s.wk)()],m.prototype,"_cloudUser",void 0),g([(0,s.wk)()],m.prototype,"_showLoginDialog",void 0),g([(0,s.wk)()],m.prototype,"_ratingPreset",void 0),g([(0,s.wk)()],m.prototype,"_pendingRateAfterLogin",void 0),g([(0,s.wk)()],m.prototype,"_userReviews",void 0),g([(0,s.wk)()],m.prototype,"_readMoreId",void 0),g([(0,s.wk)()],m.prototype,"_myPresets",void 0),g([(0,s.wk)()],m.prototype,"_myLoading",void 0),g([(0,s.wk)()],m.prototype,"_myError",void 0),g([(0,s.wk)()],m.prototype,"_myForbidden",void 0),g([(0,s.wk)()],m.prototype,"_editingPreset",void 0),g([(0,s.wk)()],m.prototype,"_actionBusyId",void 0),m=g([(0,s.EM)("hub-presets-tab")],m)},1172(e,t,i){i.r(t),i.d(t,{escapeHtml:()=>h,sanitizeMarkdownHtml:()=>l,sanitizePresetHtml:()=>c,sanitizeRichTextHtml:()=>p,stripCssFetches:()=>a});var r=i(9418);const s=["script","iframe","object","embed","form","input","button","textarea","select","option"],o=/url\s*\(|image-set\s*\(|-moz-binding|behavior\s*:|@import/i;function a(e){return e&&o.test(e)?e.split(";").filter(e=>e.includes(":")&&!o.test(e)).map(e=>e.trim()).filter(Boolean).join("; "):e}let n=!1;function d(e,t){n=!e;try{return t()}finally{n=!1}}function l(e,t,i){const o=!1!==(null==i?void 0:i.trusted);return d(o,()=>r.A.sanitize(e,{USE_PROFILES:{html:!0},FORBID_TAGS:t&&o?s:[...s,"style"],FORCE_BODY:t}))}function c(e){return d(!1,()=>r.A.sanitize(e,{USE_PROFILES:{html:!0},FORBID_TAGS:[...s,"style"]}))}function p(e,t){return d(!1!==(null==t?void 0:t.trusted),()=>r.A.sanitize(e,{ALLOWED_TAGS:["p","br","strong","b","em","i","u","s","span","a","mark"],ALLOWED_ATTR:["style","href","target","rel","class","data-color"]}))}function h(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}r.A.addHook("afterSanitizeAttributes",e=>{var t;if(!n)return;const i=e,r=null===(t=i.getAttribute)||void 0===t?void 0:t.call(i,"style");if(!r)return;const s=a(r);s!==r&&(s?i.setAttribute("style",s):i.removeAttribute("style"))})},7907(e,t,i){i.d(t,{iC:()=>r}),new Map,new Map,new Set;const r=["image/*","image/png","image/jpeg","image/gif","image/webp","image/avif","image/svg+xml","image/bmp","image/tiff","image/x-icon","image/vnd.microsoft.icon","image/heic","image/heif","image/jxl","image/apng",".png",".jpg",".jpeg",".gif",".webp",".avif",".svg",".bmp",".tif",".tiff",".ico",".heic",".heif",".jxl",".apng"].join(",")},9286(e,t,i){function r(e){try{return localStorage.getItem(e)}catch(e){return null}}function s(e,t){try{return localStorage.setItem(e,t),!0}catch(e){return!1}}function o(e){try{localStorage.removeItem(e)}catch(e){}}i.d(t,{FX:()=>s,Pw:()=>o,bi:()=>r})},8716(e,t,i){async function r(e){const t="undefined"!=typeof navigator?navigator.clipboard:void 0;if(!(null==t?void 0:t.writeText))return s(e);try{return await t.writeText(e),!0}catch(t){return s(e)}}function s(e){if("undefined"==typeof document||!document.body)return!1;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="0",t.style.left="-9999px",t.style.opacity="0",document.body.appendChild(t);const i=document.getSelection(),r=i&&i.rangeCount>0?i.getRangeAt(0):null;try{return t.focus(),t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy")}catch(e){return!1}finally{document.body.removeChild(t),i&&r&&(i.removeAllRanges(),i.addRange(r))}}i.d(t,{e:()=>r})},7804(e,t,i){i.d(t,{WL:()=>r});class r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}i.d(t,["OA",0,{ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},"u$",0,e=>(...t)=>({_$litDirective$:e,values:t})])},6781(e,t,i){i.d(t,{_:()=>a});var r=i(6752),s=i(7804);class o extends s.WL{constructor(e){if(super(e),this.it=r.s6,e.type!==s.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===r.s6||null==e)return this._t=void 0,this.it=e;if(e===r.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;const a=(0,s.u$)(o)}};