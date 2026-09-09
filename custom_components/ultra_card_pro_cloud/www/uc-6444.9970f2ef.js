export const __webpack_esm_ids__=[6444];export const __webpack_esm_modules__={5387(t,e,s){var n=s(2618);s(378);class a extends n.WF{_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}render(){return n.qy`
      <ha-dialog open @closed=${this._close} .heading=${"Sign in to Ultra Card"}>
        <div class="login-dialog-content">
          <div class="login-section">
            <p class="login-section-title">Connect with Ultra Card Connect</p>
            <p class="login-section-desc">
              The fastest way to connect — installs in 30 seconds. Syncs across all your devices.
            </p>
            <a
              class="login-cta-btn"
              href="/config/integrations/integration/ultra_card_pro_cloud"
              target="_top"
            >
              <ha-icon icon="mdi:cog"></ha-icon>
              Configure Ultra Card Connect
            </a>
          </div>

          <div class="login-divider"></div>

          <p class="login-note">
            Already have the integration? Open the <strong>Account</strong> tab in the Ultra Card hub to sign in or create an account.
          </p>
        </div>
      </ha-dialog>
    `}}a.styles=n.AH`
    .login-dialog-content {
      padding: 8px 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .login-section {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .login-section-title {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--secondary-text-color);
      margin: 0 0 4px 0;
    }

    .login-section-desc {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin: 0 0 8px 0;
      line-height: 1.4;
    }

    .login-cta-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: 8px;
      border: none;
      background: var(--primary-color);
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.15s ease;
    }

    .login-cta-btn:hover {
      opacity: 0.9;
    }

    .login-cta-btn ha-icon {
      --mdc-icon-size: 18px;
    }

    .login-divider {
      height: 1px;
      background: var(--divider-color, rgba(0, 0, 0, 0.08));
      margin: 4px 0;
    }

    .login-note {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
      margin: 0;
    }

    .login-note a {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 500;
    }

    .login-note a:hover {
      text-decoration: underline;
    }
  `,customElements.get("uc-hub-login-dialog")||customElements.define("uc-hub-login-dialog",a)},7894(t,e,s){var n=s(2618),a=s(4791),i=s(7568),r=function(t,e,s,n){var a,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(i<3?a(r):i>3?a(e,s,r):a(e,s))||r);return i>3&&r&&Object.defineProperty(e,s,r),r};class o extends n.WF{constructor(){super(...arguments),this.presetId="",this.presetName="",this.existingRating=0,this.heading="",this._selectedRating=0,this._hoveredRating=0,this._submitting=!1,this._error=""}willUpdate(t){(t.has("existingRating")||t.has("presetId"))&&0===this._selectedRating&&this.existingRating>0&&(this._selectedRating=this.existingRating)}_close(){this._selectedRating=0,this._hoveredRating=0,this._error="",this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_displayRating(){return this._hoveredRating>0?this._hoveredRating:this._selectedRating}_ratingLabel(t){var e;return null!==(e=["","Poor","Fair","Good","Great","Excellent"][t])&&void 0!==e?e:""}async _handleSubmit(){if(!(this._selectedRating<1||this._submitting)&&this.presetId){this._submitting=!0,this._error="";try{let t;if(this.submitRating){const e=await this.submitRating(this._selectedRating);t={rating:e.rating,count:e.count}}else{const e=await i.Q.submitReview(this.presetId,this._selectedRating);t={rating:e.preset_rating,count:e.preset_rating_count}}this.dispatchEvent(new CustomEvent("rating-submitted",{detail:{presetId:this.presetId,rating:this._selectedRating,presetRating:t.rating,presetRatingCount:t.count},bubbles:!0,composed:!0})),this._close()}catch(t){this._error=t instanceof Error?t.message:"Failed to submit rating"}finally{this._submitting=!1}}}render(){const t=this._displayRating();return n.qy`
      <div class="overlay" @click=${t=>{t.target===t.currentTarget&&this._close()}}>
        <div class="dialog-surface">

          <div class="dialog-header">
            <h2 class="dialog-title">${this.heading||"Rate this preset"}</h2>
            <button class="dialog-close" @click=${this._close} ?disabled=${this._submitting}>
              <ha-icon icon="mdi:close" style="--mdc-icon-size:20px;"></ha-icon>
            </button>
          </div>

          ${this.presetName?n.qy`<p class="rate-dialog-subtitle">${this.presetName}</p>`:""}

          <div class="rate-stars-row" @mouseleave=${()=>this._hoveredRating=0}>
            ${[1,2,3,4,5].map(e=>n.qy`
              <ha-icon
                icon=${e<=t?"mdi:star":"mdi:star-outline"}
                class=${e<=t?"":"empty"}
                @mouseenter=${()=>this._hoveredRating=e}
                @click=${()=>this._selectedRating=e}
              ></ha-icon>
            `)}
          </div>

          <p class="rate-hint">${this._ratingLabel(t)}</p>

          ${this._error?n.qy`<p class="rate-error">${this._error}</p>`:""}

          <div class="rate-actions">
            <button
              class="rate-btn rate-btn-submit"
              ?disabled=${this._selectedRating<1||this._submitting}
              @click=${this._handleSubmit}
            >
              ${this._submitting?n.qy`<ha-icon icon="mdi:loading" class="rate-spin"></ha-icon> Submitting…`:this.existingRating>0?"Update rating":"Submit rating"}
            </button>
            <button class="rate-btn rate-btn-cancel" @click=${this._close} ?disabled=${this._submitting}>
              Cancel
            </button>
          </div>

        </div>
      </div>
    `}}o.styles=n.AH`
    /* Full-screen backdrop — position: fixed so it escapes any parent stacking context */
    .overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.55);
      animation: fadeIn 0.15s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    .dialog-surface {
      background: var(--ha-card-background, var(--card-background-color, #1c1c1e));
      border-radius: 16px;
      padding: 24px 28px;
      min-width: 300px;
      max-width: min(480px, 90vw);
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
      animation: slideUp 0.18s ease;
    }

    @keyframes slideUp {
      from { transform: translateY(12px); opacity: 0; }
      to   { transform: translateY(0);    opacity: 1; }
    }

    .dialog-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .dialog-title {
      font-size: 17px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin: 0;
    }

    .dialog-close {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--secondary-text-color);
      padding: 4px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      transition: background 0.15s;
    }

    .dialog-close:hover {
      background: rgba(var(--rgb-primary-text-color, 255, 255, 255), 0.08);
    }

    .rate-dialog-subtitle {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin: 0 0 20px;
    }

    .rate-stars-row {
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      user-select: none;
      margin-bottom: 8px;
    }

    .rate-stars-row ha-icon {
      --mdc-icon-size: 36px;
      color: #ffb300;
      transition: transform 0.1s ease;
    }

    .rate-stars-row ha-icon.empty {
      color: var(--secondary-text-color);
      opacity: 0.35;
    }

    .rate-stars-row ha-icon:hover {
      transform: scale(1.15);
    }

    .rate-hint {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 20px;
      min-height: 18px;
    }

    .rate-actions {
      display: flex;
      gap: 10px;
    }

    .rate-btn {
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 9px 16px;
      border-radius: 8px;
      border: none;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.15s ease, background 0.15s ease;
    }

    .rate-btn-submit {
      background: var(--primary-color);
      color: white;
    }

    .rate-btn-submit:hover:not(:disabled) {
      opacity: 0.88;
    }

    .rate-btn-submit:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .rate-btn-cancel {
      background: transparent;
      color: var(--secondary-text-color);
      border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
    }

    .rate-btn-cancel:hover:not(:disabled) {
      background: rgba(var(--rgb-primary-text-color, 255,255,255), 0.06);
    }

    .rate-error {
      font-size: 12px;
      color: var(--error-color, #db4437);
      margin: 4px 0 0;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .rate-spin {
      animation: spin 0.8s linear infinite;
    }
  `,r([(0,a.MZ)()],o.prototype,"presetId",void 0),r([(0,a.MZ)()],o.prototype,"presetName",void 0),r([(0,a.MZ)({type:Number})],o.prototype,"existingRating",void 0),r([(0,a.MZ)()],o.prototype,"heading",void 0),r([(0,a.MZ)({attribute:!1})],o.prototype,"submitRating",void 0),r([(0,a.wk)()],o.prototype,"_selectedRating",void 0),r([(0,a.wk)()],o.prototype,"_hoveredRating",void 0),r([(0,a.wk)()],o.prototype,"_submitting",void 0),r([(0,a.wk)()],o.prototype,"_error",void 0),customElements.get("uc-hub-rate-dialog")||customElements.define("uc-hub-rate-dialog",o)},7568(t,e,s){var n=s(378),a=s(9286);const i="ultra-card-reviews",r="Color sync is not available yet — your colors are saved on this device only.";class o{constructor(){this._syncStatus={isEnabled:!1,lastSync:null,isSyncing:!1,pendingChanges:0,conflicts:[],lastFavoritesSync:null,lastColorsSync:null,lastVariablesSync:null},this._listeners=new Set,this._pendingChanges=new Map,this._loadSyncStatus(),this._loadPendingChanges(),this._setupAuthListener()}getSyncStatus(){return Object.assign({},this._syncStatus)}async setSyncEnabled(t){this._syncStatus.isEnabled=t,this._saveSyncStatus(),this._notifyListeners(),t&&n.xd.isAuthenticated()&&await this.syncAll()}async syncAll(){if(!n.xd.isAuthenticated())throw new Error("Cannot sync: not authenticated");this._syncStatus.isSyncing=!0,this._notifyListeners();try{const[t,e,s,n]=await Promise.all([this.syncFavorites(),this.syncFavoriteColors(),this.syncReviews(),this.syncVariables()]);return this._syncStatus.lastSync=new Date,this._syncStatus.pendingChanges=0,this._clearPendingChanges(),{favorites:t,colors:e,reviews:s,variables:n}}finally{this._syncStatus.isSyncing=!1,this._saveSyncStatus(),this._notifyListeners()}}async syncFavorites(){if(!n.xd.isAuthenticated())throw new Error("Cannot sync favorites: not authenticated");const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const e=this._getLocalFavorites(),s=await this._fetchRemoteFavorites(),{merged:n,conflicts:a}=await this._mergeFavorites(e,s),i=await this._uploadFavorites(n.filter(t=>t._needsUpload)),r=await this._downloadFavorites(n.filter(t=>t._needsDownload));t.success=!0,t.synced=i.length+r.length,t.conflicts=a.length,this._syncStatus.conflicts=[...this._syncStatus.conflicts,...a],this._syncStatus.lastFavoritesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),console.log(`✅ Favorites sync completed: ${t.synced} synced, ${t.conflicts} conflicts`)}catch(e){console.error("❌ Favorites sync failed:",e),t.errors.push(e instanceof Error?e.message:"Unknown error")}return t}isColorSyncAvailable(){return!1}async syncFavoriteColors(){if(!n.xd.isAuthenticated())throw new Error("Cannot sync colors: not authenticated");return{success:!1,synced:0,conflicts:0,errors:[r],lastSync:(new Date).toISOString()}}async syncVariables(){const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{if(!n.xd.isAuthenticated())throw new Error("Not authenticated");const e=(0,a.bi)("ultra-card-custom-variables"),s=e?JSON.parse(e):[],i=await n.xd.authenticatedFetch(`${o.API_BASE}/custom-variables`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({variables:s})});if(i.ok){const e=await i.json();(null==e?void 0:e.variables)&&(0,a.FX)("ultra-card-custom-variables",JSON.stringify(e.variables)),t.success=!0,t.synced=s.length,this._syncStatus.lastVariablesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),console.log(`✅ Variables sync completed: ${t.synced} variables`)}else t.errors.push(`Variables sync failed: ${i.status} ${i.statusText}`),console.warn(`❌ Variables sync failed: ${i.status} ${i.statusText}`)}catch(e){const s=e instanceof Error?e.message:"Unknown error";console.warn("❌ Variables sync failed:",s),t.errors.push(s)}return t}async syncReviews(){if(!this._canSync())throw new Error("Cannot sync reviews: not authenticated");const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const e=this._getLocalReviews(),s=await this._fetchRemoteReviews(),{merged:n,conflicts:a}=await this._mergeReviews(e,s),i=await this._uploadReviews(n.filter(t=>t._needsUpload)),r=await this._downloadReviews(n.filter(t=>t._needsDownload));t.success=!1,t.errors.push("Review sync is not implemented yet."),t.synced=i.length+r.length,t.conflicts=a.length}catch(e){console.error("❌ Reviews sync failed:",e),t.errors.push(e instanceof Error?e.message:"Unknown error")}return t}queueChange(t,e,s){if("color"===t&&!this.isColorSyncAvailable())return;const n=`${t}-${e}-${Date.now()}`;this._pendingChanges.set(n,{type:t,action:e,data:s,timestamp:Date.now()}),this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners(),this._canSync()&&navigator.onLine&&this._processPendingChanges().catch(console.error)}async resolveConflict(t,e){switch(this._syncStatus.conflicts=this._syncStatus.conflicts.filter(e=>e!==t),e){case"local":await this._uploadConflictResolution(t,t.local);break;case"remote":await this._downloadConflictResolution(t,t.remote);break;case"merge":const e=await this._mergeConflictData(t);await this._uploadConflictResolution(t,e)}this._saveSyncStatus(),this._notifyListeners()}addListener(t){this._listeners.add(t)}removeListener(t){this._listeners.delete(t)}_canSync(){return this._syncStatus.isEnabled&&n.xd.isAuthenticated()}_setupAuthListener(){n.xd.addListener(t=>{t?(this._syncStatus.isEnabled=!0,this._saveSyncStatus()):(this._syncStatus.isEnabled=!1,this._syncStatus.conflicts=[],this._clearPendingChanges(),this._saveSyncStatus()),this._notifyListeners()})}_notifyListeners(){this._listeners.forEach(t=>{try{t(this._syncStatus)}catch(t){console.error("Error in sync listener:",t)}})}_getLocalFavorites(){try{const t=(0,a.bi)("ultra-card-favorites");return t?JSON.parse(t):[]}catch(t){return[]}}async _fetchRemoteFavorites(){const t=await n.xd.authenticatedFetch(`${o.API_BASE}/favorites`);if(!t.ok)throw new Error(`Failed to fetch favorites: ${t.statusText}`);return t.json()}async _uploadFavorites(t){const e=[];for(const s of t)try{const t=await n.xd.authenticatedFetch(`${o.API_BASE}/favorites`,{method:"POST",body:JSON.stringify({name:s.name,description:s.description,row_data:JSON.stringify(s.row),tags:s.tags})});t.ok&&e.push(await t.json())}catch(t){console.error("Failed to upload favorite:",t)}return e}async _downloadFavorites(t){const e=t.map(t=>{let e=null;try{e=t.row_data?JSON.parse(t.row_data):null}catch(t){e=null}return{id:t.id,name:t.name,description:t.description,row:e,created:t.created,tags:t.tags}});if(0===e.length)return[];const s=this._getLocalFavorites(),n=new Map(s.filter(t=>t&&"string"==typeof t.id).map(t=>[t.id,t]));for(const t of e)n.set(t.id,Object.assign(Object.assign({},n.get(t.id)),t));const i=Array.from(n.values());if(i.length<s.length)return console.error("[UltraCard] Favorites merge would drop entries; keeping local store untouched."),[];(0,a.FX)("ultra-card-favorites",JSON.stringify(i));try{window.dispatchEvent(new CustomEvent("ultra-card-favorites-changed"))}catch(t){}return e}async _mergeFavorites(t,e){const s=[],n=[],a=new Map(e.map(t=>[t.id,t])),i=new Map(t.map(t=>[t.id,t]));for(const e of t){const t=a.get(e.id);if(t){const a=new Date(e.created||0).getTime(),i=new Date(t.updated).getTime();Math.abs(a-i)>1e3&&n.push({type:"favorite",local:e,remote:t,field:"updated"}),s.push(a>i?e:Object.assign(Object.assign({},this._convertCloudFavorite(t)),{_needsDownload:a<i}))}else s.push(Object.assign(Object.assign({},e),{_needsUpload:!0}))}for(const t of e)i.has(t.id)||s.push(Object.assign(Object.assign({},this._convertCloudFavorite(t)),{_needsDownload:!0}));return{merged:s,conflicts:n}}_convertCloudFavorite(t){let e=null;try{t.row_data?e="string"==typeof t.row_data?JSON.parse(t.row_data):t.row_data:t.data&&(e=t.data)}catch(t){e=null}return{id:t.id,name:t.name,description:t.description,row:e,created:t.created,tags:t.tags}}_getLocalColors(){try{const t=(0,a.bi)("ultra-card-favorite-colors");return t?JSON.parse(t):[]}catch(t){return[]}}async _fetchRemoteColors(){const t=await n.xd.authenticatedFetch(`${o.API_BASE}/colors`);if(!t.ok)throw new Error(`Failed to fetch colors: ${t.statusText}`);return t.json()}async _uploadColors(t){return[]}async _downloadColors(t){return[]}async _mergeColors(t,e){return{merged:[],conflicts:[]}}static _toWordPressPresetId(t){return String(t).replace(/^wp-/,"")}async submitReview(t,e){if(!n.xd.isAuthenticated())throw new Error("Authentication required to submit reviews");const s=o._toWordPressPresetId(t);if(!/^\d+$/.test(s))throw new Error("This preset cannot be rated.");const a=await n.xd.authenticatedFetch(`${o.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:s,rating:e})});if(!a.ok){const t=await a.json().catch(()=>({message:"Submit failed"}));throw new Error(t.message||`HTTP ${a.status}`)}const i=await a.json();return this._saveLocalReview(i),i}async uploadPresetPhoto(t){if(!n.xd.isAuthenticated())throw new Error("Authentication required to upload photos");const e=new FormData;e.append("photo",t,t.name);const s=`${o.API_BASE}/media`,a=await n.xd.authenticatedFetch(s,{method:"POST",body:e});if(!a.ok){const t=await a.json().catch(()=>null),e=(null==t?void 0:t.data)&&"object"==typeof t.data&&null!==t.data&&"message"in t.data?String(t.data.message):"",s="string"==typeof(null==t?void 0:t.message)&&t.message||"string"==typeof(null==t?void 0:t.error)&&t.error||e||`Upload failed (HTTP ${a.status})`;throw new Error(s)}return a.json()}async submitPreset(t,e,s,a){var i;if(!n.xd.isAuthenticated())throw new Error("Authentication required to submit presets");const r=new FormData;r.append("name",t.name),r.append("description",t.description),r.append("category",t.category),r.append("shortcode",t.shortcode),(null===(i=t.tags)||void 0===i?void 0:i.length)&&r.append("tags",t.tags.join(",")),t.source&&r.append("source",t.source),t.integrations&&r.append("integrations",t.integrations),t.card_settings&&Object.keys(t.card_settings).length>0&&r.append("card_settings",JSON.stringify(t.card_settings)),t.custom_variables&&t.custom_variables.length>0&&r.append("custom_variables",JSON.stringify(t.custom_variables)),a&&a>0&&r.append("featured_image_id",String(a)),(null==s?void 0:s.length)?s.forEach(t=>r.append("photo_ids[]",String(t))):(null==e?void 0:e.length)&&e.forEach((t,e)=>r.append(`photos[${e}]`,t,t.name));const c=await n.xd.authenticatedFetch(`${o.API_BASE}/presets`,{method:"POST",body:r});if(!c.ok){const t=await c.json().catch(()=>({message:"Submit failed"}));throw new Error(t.message||`HTTP ${c.status}`)}return c.json()}async fetchPresetCategories(){try{const t=await fetch(`${o.API_BASE}/preset-categories`);if(t.ok){const e=await t.json();if(Array.isArray(e)&&e.length>0)return e}}catch(t){}return[{value:"layout",label:"Layout"},{value:"content",label:"Content"},{value:"data",label:"Data"},{value:"interactive",label:"Controls"},{value:"input",label:"Inputs"},{value:"media",label:"Media"}]}getUserReview(t){const e=n.xd.getCurrentUser();if(!e)return null;const s=o._toWordPressPresetId(t),a=Number(e.id),i=this._getLocalReviews().find(t=>String(t.preset_id)===s&&Number(t.user_id)===a);return null!=i?i:null}async loadUserReviewsFromServer(){if(n.xd.isAuthenticated())try{const t=await this._fetchRemoteReviews(),e=n.xd.getCurrentUser();if(!e)return;const s=Number(e.id);for(const e of t)Number(e.user_id)===s&&this._saveLocalReview(Object.assign(Object.assign({},e),{preset_id:String(e.preset_id)}))}catch(t){console.warn("Could not load user reviews from server:",t)}}_getLocalReviews(){try{const t=(0,a.bi)(i);return t?JSON.parse(t):[]}catch(t){return[]}}_saveLocalReview(t){const e=this._getLocalReviews(),s=String(t.preset_id),n=Number(t.user_id),r=Object.assign(Object.assign({},t),{preset_id:s}),o=e.findIndex(t=>String(t.preset_id)===s&&Number(t.user_id)===n);o>=0?e[o]=r:e.push(r);try{(0,a.FX)(i,JSON.stringify(e))}catch(t){console.error("Failed to save review locally:",t)}}async _fetchRemoteReviews(){const t=await n.xd.authenticatedFetch(`${o.API_BASE}/reviews`);if(!t.ok)throw new Error(`Failed to fetch reviews: ${t.statusText}`);return t.json()}async _uploadReviews(t){const e=[];for(const s of t)try{const t=await n.xd.authenticatedFetch(`${o.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:s.preset_id,rating:s.rating,comment:s.comment})});if(t.ok){const s=await t.json();e.push(s),this._saveLocalReview(s)}}catch(t){console.error("Failed to upload review:",t)}return e}async _downloadReviews(t){return[]}async _mergeReviews(t,e){return{merged:[],conflicts:[]}}async _uploadConflictResolution(t,e){}async _downloadConflictResolution(t,e){}async _mergeConflictData(t){return t.local}async _processPendingChanges(){if(0!==this._pendingChanges.size){for(const[t,e]of this._pendingChanges)try{await this._processChange(e),this._pendingChanges.delete(t)}catch(e){console.error(`Failed to process change ${t}:`,e)}this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners()}}async _processChange(t){switch(t.type){case"favorite":"create"===t.action&&await this._uploadFavorites([t.data]);break;case"color":throw new Error(r);case"review":"create"===t.action&&await this._uploadReviews([t.data])}}_loadSyncStatus(){try{const t=(0,a.bi)(o.SYNC_STATUS_KEY);if(t){const e=JSON.parse(t);this._syncStatus=Object.assign(Object.assign(Object.assign({},this._syncStatus),e),{lastSync:e.lastSync?new Date(e.lastSync):null,lastFavoritesSync:e.lastFavoritesSync?new Date(e.lastFavoritesSync):null,lastColorsSync:e.lastColorsSync?new Date(e.lastColorsSync):null,lastVariablesSync:e.lastVariablesSync?new Date(e.lastVariablesSync):null,isSyncing:!1})}}catch(t){console.error("Failed to load sync status:",t)}}_saveSyncStatus(){var t,e,s,n,i,r,c;try{(0,a.FX)(o.SYNC_STATUS_KEY,JSON.stringify(Object.assign(Object.assign({},this._syncStatus),{lastSync:null===(t=this._syncStatus.lastSync)||void 0===t?void 0:t.toISOString(),lastFavoritesSync:null!==(s=null===(e=this._syncStatus.lastFavoritesSync)||void 0===e?void 0:e.toISOString())&&void 0!==s?s:null,lastColorsSync:null!==(i=null===(n=this._syncStatus.lastColorsSync)||void 0===n?void 0:n.toISOString())&&void 0!==i?i:null,lastVariablesSync:null!==(c=null===(r=this._syncStatus.lastVariablesSync)||void 0===r?void 0:r.toISOString())&&void 0!==c?c:null})))}catch(t){console.error("Failed to save sync status:",t)}}_loadPendingChanges(){try{const t=(0,a.bi)(o.PENDING_CHANGES_KEY);if(t){const e=JSON.parse(t);this._pendingChanges=new Map(Object.entries(e)),this._syncStatus.pendingChanges=this._pendingChanges.size}}catch(t){console.error("Failed to load pending changes:",t)}}_savePendingChanges(){try{const t=Object.fromEntries(this._pendingChanges);(0,a.FX)(o.PENDING_CHANGES_KEY,JSON.stringify(t))}catch(t){console.error("Failed to save pending changes:",t)}}_clearPendingChanges(){this._pendingChanges.clear();try{(0,a.Pw)(o.PENDING_CHANGES_KEY)}catch(t){console.error("Failed to clear pending changes:",t)}}}o.API_BASE="https://ultracard.io/wp-json/ultra-card/v1",o.SYNC_STATUS_KEY="ultra-card-sync-status",o.PENDING_CHANGES_KEY="ultra-card-pending-changes";const c=new o;s.d(e,["Q",0,c])}};