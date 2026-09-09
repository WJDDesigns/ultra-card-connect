export const __webpack_esm_ids__=[8612,9286];export const __webpack_esm_modules__={5844(t,e,s){function a(t){if(null==t||""===t)return"Never";try{const e=t instanceof Date?t:new Date(t),s=e.getTime();if(Number.isNaN(s))return"Unknown";const a=Math.floor((Date.now()-s)/6e4);if(a<1)return"Just now";if(a<60)return`${a}m ago`;const n=Math.floor(a/60);return n<24?`${n}h ago`:e.toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(t){return"Unknown"}}function n(t){if(null==t||""===t)return"";try{const e=t instanceof Date?t:new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch(t){return""}}s.d(e,{f:()=>a,s:()=>n})},8612(t,e,s){s.r(e),s.d(e,{HubFavoritesTab:()=>p});var a=s(2618),n=s(4791),o=s(9286),i=s(3045);class r{constructor(){this._favorites=[],this._listeners=new Set,this._loadFromStorage(),this._setupStorageListener()}getFavorites(){return[...this._favorites].sort((t,e)=>new Date(e.created).getTime()-new Date(t.created).getTime())}addFavorite(t,e,s,a=[]){const n=this._cloneRowWithNewIds(t),o={id:this._generateId(),name:e.trim(),description:null==s?void 0:s.trim(),row:n,created:(new Date).toISOString(),tags:a.map(t=>t.trim().toLowerCase()).filter(Boolean)};return this._favorites.push(o),this._saveToStorage(),this._notifyListeners(),this._broadcastChange(),o}removeFavorite(t){const e=this._favorites.findIndex(e=>e.id===t);return-1!==e&&(this._favorites[e],this._favorites.splice(e,1),this._saveToStorage(),this._notifyListeners(),this._broadcastChange(),!0)}updateFavorite(t,e){const s=this._favorites.findIndex(e=>e.id===t);return-1!==s&&(this._favorites[s]=Object.assign(Object.assign({},this._favorites[s]),e),this._saveToStorage(),this._notifyListeners(),this._broadcastChange(),!0)}getFavorite(t){return this._favorites.find(e=>e.id===t)}searchFavorites(t){const e=t.toLowerCase().trim();return e?this._favorites.filter(t=>{var s;return t.name.toLowerCase().includes(e)||(null===(s=t.description)||void 0===s?void 0:s.toLowerCase().includes(e))||t.tags.some(t=>t.includes(e))}):this.getFavorites()}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}debugFavorites(){i.v3&&console.log("=== Ultra Card Favorites Debug Info ==="),i.v3&&console.log("Storage Key:",r.STORAGE_KEY),i.v3&&console.log("Current Favorites Count:",this._favorites.length),i.v3&&console.log("Listeners Count:",this._listeners.size),i.v3&&console.log("LocalStorage Available:",this._isLocalStorageAvailable());try{const t=(0,o.bi)(r.STORAGE_KEY);if(i.v3&&console.log("Raw Storage Data:",t?`${t.length} characters`:"null"),i.v3&&console.log("Storage Data Valid:",t?"Valid JSON":"No data"),t){const e=JSON.parse(t);i.v3&&console.log("Parsed Data Type:",Array.isArray(e)?"Array":typeof e),i.v3&&console.log("Parsed Data Length:",Array.isArray(e)?e.length:"N/A")}}catch(t){console.error("Storage Data Error:",t)}i.v3&&console.log("Favorites List:",this._favorites.map(t=>({id:t.id,name:t.name,created:t.created,tags:t.tags.length}))),i.v3&&console.log("=====================================")}_cloneRowWithNewIds(t){const e=JSON.parse(JSON.stringify(t));return e.id=`row-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,e.columns=e.columns.map((t,e)=>Object.assign(Object.assign({},t),{id:`col-${Date.now()}-${e}-${Math.random().toString(36).substr(2,9)}`,modules:t.modules.map((t,e)=>Object.assign(Object.assign({},t),{id:`${t.type}-${Date.now()}-${e}-${Math.random().toString(36).substr(2,9)}`}))})),e}_generateId(){return`favorite-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}_loadFromStorage(){try{if(!this._isLocalStorageAvailable())return void(this._favorites=[]);const t=(0,o.bi)(r.STORAGE_KEY);if(t){const e=JSON.parse(t);Array.isArray(e)?this._favorites=e.filter(this._isValidFavorite.bind(this)):this._favorites=[]}else this._favorites=[]}catch(t){console.error("Failed to load favorites from storage:",t),this._favorites=[]}}_saveToStorage(){try{if(!this._isLocalStorageAvailable())return;const t=JSON.stringify(this._favorites);(0,o.FX)(r.STORAGE_KEY,t)}catch(t){console.error("Failed to save favorites to storage:",t),t instanceof DOMException&&t.code===DOMException.QUOTA_EXCEEDED_ERR?(console.error("localStorage quota exceeded! Consider clearing old data or using fewer favorites."),this._handleStorageQuotaExceeded()):console.error("Unknown storage error:",t)}}_setupStorageListener(){window.addEventListener("storage",t=>{t.key===r.STORAGE_KEY&&(this._loadFromStorage(),this._notifyListeners())}),window.addEventListener(r.SYNC_EVENT,()=>{this._loadFromStorage(),this._notifyListeners()})}_notifyListeners(){this._listeners.forEach(t=>t(this.getFavorites()))}_broadcastChange(){window.dispatchEvent(new CustomEvent(r.SYNC_EVENT))}_isValidFavorite(t){return t&&"string"==typeof t.id&&"string"==typeof t.name&&"string"==typeof t.created&&t.row&&"string"==typeof t.row.id&&Array.isArray(t.row.columns)}_isLocalStorageAvailable(){try{const t="__ultra_card_storage_test__";return(0,o.FX)(t,"test"),(0,o.Pw)(t),!0}catch(t){return!1}}_handleStorageQuotaExceeded(){if(i.v3&&console.log("Attempting to free up storage space by removing oldest favorites..."),this._favorites.length<=1)return void console.error("Cannot free up space - only one or no favorites exist");const t=Math.max(1,Math.floor(.25*this._favorites.length)),e=[...this._favorites].sort((t,e)=>new Date(t.created).getTime()-new Date(e.created).getTime()).slice(t);this._favorites=e,i.v3&&console.log(`Removed ${t} oldest favorites to free up storage space`);try{const t=JSON.stringify(this._favorites);(0,o.FX)(r.STORAGE_KEY,t),i.v3&&console.log("Successfully saved favorites after cleanup"),this._notifyListeners(),this._broadcastChange()}catch(t){console.error("Still cannot save after cleanup:",t)}}}r.STORAGE_KEY="ultra-card-favorites",r.SYNC_EVENT="ultra-card-favorites-changed";const c=new r;"undefined"!=typeof window&&(window.debugUltraCardFavorites=()=>c.debugFavorites());var l=s(9978),d=s(378),h=s(7568),u=s(821),g=s(5844),v=s(8716),y=function(t,e,s,a){var n,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,s,a);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(i=(o<3?n(i):o>3?n(e,s,i):n(e,s))||i);return o>3&&i&&Object.defineProperty(e,s,i),i};let p=class extends a.WF{constructor(){super(...arguments),this._favorites=[],this._toastMsg="",this._search="",this._cloudUser=null,this._syncStatus=null,this._syncing=!1}connectedCallback(){super.connectedCallback(),this._favorites=c.getFavorites(),this._unsub=c.subscribe(t=>{this._favorites=t}),this._cloudUser=d.xd.getCurrentUser(),this._syncStatus=h.Q.getSyncStatus(),this._authUnsub=t=>{this._cloudUser=t},d.xd.addListener(this._authUnsub),this._syncUnsub=t=>{this._syncStatus=t},h.Q.addListener(this._syncUnsub)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._unsub)||void 0===t||t.call(this),this._authUnsub&&d.xd.removeListener(this._authUnsub),this._syncUnsub&&h.Q.removeListener(this._syncUnsub),this._toastTimer&&clearTimeout(this._toastTimer)}_showToast(t){this._toastMsg=t,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toastMsg="",2e3)}async _copyRowConfig(t){const e=await(0,v.e)(JSON.stringify(t.row,null,2));this._showToast(e?`Copied "${t.name}"`:"Could not copy — your browser blocked clipboard access")}_removeFavorite(t){c.removeFavorite(t.id)&&(this._favorites=c.getFavorites())}_formatDate(t){return(0,g.s)(t)}_goToAccount(){(0,u.nL)(this,{tab:"account"})}_formatSyncTime(t){return(0,g.f)(t)}async _syncNow(){if(!this._syncing){this._syncing=!0;try{await h.Q.syncFavorites(),this._showToast("Favorites synced ✓")}catch(t){this._showToast("Sync failed — try again")}finally{this._syncing=!1}}}_renderSyncBanner(){var t;if(!this._cloudUser)return a.qy`
        <div class="sync-banner sync-banner-guest">
          <ha-icon icon="mdi:cloud-outline"></ha-icon>
          <div class="sync-banner-body">
            <strong>Back up & sync across all devices</strong>
            <span>Create a free account to keep your favorites safe and available on every device.</span>
          </div>
          <button class="sync-banner-btn" @click=${this._goToAccount}>Sign In</button>
        </div>
      `;const e=null===(t=this._syncStatus)||void 0===t?void 0:t.lastFavoritesSync;return a.qy`
      <div class="sync-banner sync-banner-active">
        <ha-icon icon=${this._syncing?"mdi:cloud-sync":"mdi:cloud-check"}></ha-icon>
        <div class="sync-banner-body">
          <strong>${this._syncing?"Syncing…":"Cloud Sync Active"}</strong>
          <span>Last synced: ${this._formatSyncTime(e)}</span>
        </div>
        <button class="sync-banner-btn" @click=${this._syncNow} ?disabled=${this._syncing}>
          ${this._syncing?"Syncing…":"Sync Now"}
        </button>
      </div>
    `}_getFilteredFavorites(){if(!this._search.trim())return this._favorites;const t=this._search.toLowerCase().trim();return this._favorites.filter(e=>e.name.toLowerCase().includes(t)||(e.description||"").toLowerCase().includes(t)||(e.tags||[]).some(e=>e.toLowerCase().includes(t)))}render(){if(0===this._favorites.length)return a.qy`
        <div class="hub-tab-blurb">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <p><strong>Favorites</strong> are saved layout rows you can reuse. Save a row from the card editor (heart icon), then add it to any card from here.</p>
        </div>
        ${this._renderSyncBanner()}
        <div class="empty-state">
          <div class="empty-state-icon">
            <ha-icon icon="mdi:heart-outline"></ha-icon>
          </div>
          <h3>No Favorites Yet</h3>
          <p>Save rows from the card editor to see them here.</p>
          <p class="empty-hint">Tip: Click the heart icon on any row in the editor to save it as a favorite</p>
        </div>
      `;const t=this._getFilteredFavorites();return a.qy`
      <div class="hub-tab-blurb">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <p><strong>Favorites</strong> are saved layout rows you can reuse. Save a row from the card editor (heart icon), then add it to any card from here.</p>
      </div>
      ${this._renderSyncBanner()}
      <!-- Toolbar -->
      <div class="hub-toolbar">
        ${this._favorites.length>3?a.qy`
              <div class="hub-search">
                <ha-icon icon="mdi:magnify"></ha-icon>
                <input
                  type="search"
                  placeholder="Search favorites…"
                  aria-label="Search favorites"
                  .value=${this._search}
                  @input=${t=>this._search=t.target.value}
                />
              </div>
            `:""}
        <span class="favorites-count">
          <strong>${t.length}</strong> favorite${1!==t.length?"s":""}
        </span>
      </div>

      ${0===t.length?a.qy`
            <div class="empty-state">
              <div class="empty-state-icon">
                <ha-icon icon="mdi:magnify-close"></ha-icon>
              </div>
              <h3>No Results</h3>
              <p>No favorites match "${this._search}"</p>
            </div>
          `:a.qy`
            <div class="favorites-grid">
              ${t.map(t=>this._renderFavoriteCard(t))}
            </div>
          `}

      <div class="toast ${this._toastMsg?"show":""}">${this._toastMsg}</div>
    `}_renderFavoriteCard(t){var e,s,n;const o=null!==(n=null===(s=null===(e=t.row)||void 0===e?void 0:e.columns)||void 0===s?void 0:s.length)&&void 0!==n?n:0,i=this._formatDate(t.created||t.date);return a.qy`
      <div class="favorite-card">
        <div class="fav-header">
          <div class="fav-icon-wrap">
            <ha-icon icon="mdi:heart"></ha-icon>
          </div>
          <div class="fav-title-area">
            <h4 class="fav-name">${t.name}</h4>
            <p class="fav-subtitle">${o} column${1!==o?"s":""}</p>
          </div>
          <div class="fav-actions">
            <button class="action-btn delete" title="Remove" @click=${()=>this._removeFavorite(t)}>
              <ha-icon icon="mdi:delete-outline"></ha-icon>
            </button>
          </div>
        </div>

        ${t.description||t.tags&&t.tags.length?a.qy`
              <div class="fav-body">
                ${t.description?a.qy`<p class="fav-description">${t.description}</p>`:""}
                ${t.tags&&t.tags.length?a.qy`
                      <div class="fav-tags">
                        ${t.tags.slice(0,5).map(t=>a.qy`<span class="fav-tag">${t}</span>`)}
                      </div>
                    `:""}
              </div>
            `:""}

        <div class="fav-footer">
          <div class="fav-meta">
            ${i?a.qy`
                  <span class="meta-item">
                    <ha-icon icon="mdi:calendar-outline"></ha-icon>
                    ${i}
                  </span>
                `:""}
            <span class="meta-item">
              <ha-icon icon="mdi:view-column-outline"></ha-icon>
              ${o} col${1!==o?"s":""}
            </span>
          </div>
          <button class="copy-config-btn" @click=${()=>this._copyRowConfig(t)}>
            <ha-icon icon="mdi:code-json"></ha-icon>
            Copy Config
          </button>
        </div>
      </div>
    `}};p.styles=[l.z,a.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
      }

      /* Toolbar uses shared .hub-toolbar / .hub-search from panelStyles */
      .favorites-count {
        font-size: 13px;
        color: var(--secondary-text-color);
        font-weight: 500;
        white-space: nowrap;
      }

      .favorites-count strong {
        color: var(--primary-text-color);
      }

      /* Favorites grid — matching editor layout */
      .favorites-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 16px;
      }

      @media (max-width: 600px) {
        .favorites-grid {
          grid-template-columns: 1fr;
        }
      }

      /* Favorite card — matches editor */
      .favorite-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
      }

      .favorite-card:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
        border-color: var(--primary-color);
      }

      /* Card header */
      .fav-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 16px 12px;
      }

      .fav-icon-wrap {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--primary-color), var(--accent-color, var(--primary-color)));
      }

      .fav-icon-wrap ha-icon {
        --mdc-icon-size: 22px;
        color: white;
      }

      .fav-title-area {
        flex: 1;
        min-width: 0;
      }

      .fav-name {
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .fav-subtitle {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin: 2px 0 0;
      }

      .fav-actions {
        display: flex;
        gap: 4px;
        flex-shrink: 0;
      }

      /* Card body */
      .fav-body {
        padding: 0 16px 12px;
      }

      .fav-description {
        margin: 0 0 10px;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* Tags */
      .fav-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
      }

      .fav-tag {
        display: inline-flex;
        align-items: center;
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 500;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        color: var(--primary-color);
      }

      /* Footer meta */
      .fav-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 16px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.04));
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.01);
      }

      .fav-meta {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .fav-meta .meta-item {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .fav-meta ha-icon {
        --mdc-icon-size: 14px;
        opacity: 0.6;
      }

      /* Copy config button */
      .copy-config-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        background: none;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 8px;
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .copy-config-btn:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
      }

      .copy-config-btn ha-icon {
        --mdc-icon-size: 14px;
      }

      /* Sync banner styles are shared via panelStyles (.sync-banner*) */
    `],y([(0,n.wk)()],p.prototype,"_favorites",void 0),y([(0,n.wk)()],p.prototype,"_toastMsg",void 0),y([(0,n.wk)()],p.prototype,"_search",void 0),y([(0,n.wk)()],p.prototype,"_cloudUser",void 0),y([(0,n.wk)()],p.prototype,"_syncStatus",void 0),y([(0,n.wk)()],p.prototype,"_syncing",void 0),p=y([(0,n.EM)("hub-favorites-tab")],p)},7568(t,e,s){var a=s(378),n=s(9286);const o="ultra-card-reviews",i="Color sync is not available yet — your colors are saved on this device only.";class r{constructor(){this._syncStatus={isEnabled:!1,lastSync:null,isSyncing:!1,pendingChanges:0,conflicts:[],lastFavoritesSync:null,lastColorsSync:null,lastVariablesSync:null},this._listeners=new Set,this._pendingChanges=new Map,this._loadSyncStatus(),this._loadPendingChanges(),this._setupAuthListener()}getSyncStatus(){return Object.assign({},this._syncStatus)}async setSyncEnabled(t){this._syncStatus.isEnabled=t,this._saveSyncStatus(),this._notifyListeners(),t&&a.xd.isAuthenticated()&&await this.syncAll()}async syncAll(){if(!a.xd.isAuthenticated())throw new Error("Cannot sync: not authenticated");this._syncStatus.isSyncing=!0,this._notifyListeners();try{const[t,e,s,a]=await Promise.all([this.syncFavorites(),this.syncFavoriteColors(),this.syncReviews(),this.syncVariables()]);return this._syncStatus.lastSync=new Date,this._syncStatus.pendingChanges=0,this._clearPendingChanges(),{favorites:t,colors:e,reviews:s,variables:a}}finally{this._syncStatus.isSyncing=!1,this._saveSyncStatus(),this._notifyListeners()}}async syncFavorites(){if(!a.xd.isAuthenticated())throw new Error("Cannot sync favorites: not authenticated");const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const e=this._getLocalFavorites(),s=await this._fetchRemoteFavorites(),{merged:a,conflicts:n}=await this._mergeFavorites(e,s),o=await this._uploadFavorites(a.filter(t=>t._needsUpload)),i=await this._downloadFavorites(a.filter(t=>t._needsDownload));t.success=!0,t.synced=o.length+i.length,t.conflicts=n.length,this._syncStatus.conflicts=[...this._syncStatus.conflicts,...n],this._syncStatus.lastFavoritesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),console.log(`✅ Favorites sync completed: ${t.synced} synced, ${t.conflicts} conflicts`)}catch(e){console.error("❌ Favorites sync failed:",e),t.errors.push(e instanceof Error?e.message:"Unknown error")}return t}isColorSyncAvailable(){return!1}async syncFavoriteColors(){if(!a.xd.isAuthenticated())throw new Error("Cannot sync colors: not authenticated");return{success:!1,synced:0,conflicts:0,errors:[i],lastSync:(new Date).toISOString()}}async syncVariables(){const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{if(!a.xd.isAuthenticated())throw new Error("Not authenticated");const e=(0,n.bi)("ultra-card-custom-variables"),s=e?JSON.parse(e):[],o=await a.xd.authenticatedFetch(`${r.API_BASE}/custom-variables`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({variables:s})});if(o.ok){const e=await o.json();(null==e?void 0:e.variables)&&(0,n.FX)("ultra-card-custom-variables",JSON.stringify(e.variables)),t.success=!0,t.synced=s.length,this._syncStatus.lastVariablesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),console.log(`✅ Variables sync completed: ${t.synced} variables`)}else t.errors.push(`Variables sync failed: ${o.status} ${o.statusText}`),console.warn(`❌ Variables sync failed: ${o.status} ${o.statusText}`)}catch(e){const s=e instanceof Error?e.message:"Unknown error";console.warn("❌ Variables sync failed:",s),t.errors.push(s)}return t}async syncReviews(){if(!this._canSync())throw new Error("Cannot sync reviews: not authenticated");const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const e=this._getLocalReviews(),s=await this._fetchRemoteReviews(),{merged:a,conflicts:n}=await this._mergeReviews(e,s),o=await this._uploadReviews(a.filter(t=>t._needsUpload)),i=await this._downloadReviews(a.filter(t=>t._needsDownload));t.success=!1,t.errors.push("Review sync is not implemented yet."),t.synced=o.length+i.length,t.conflicts=n.length}catch(e){console.error("❌ Reviews sync failed:",e),t.errors.push(e instanceof Error?e.message:"Unknown error")}return t}queueChange(t,e,s){if("color"===t&&!this.isColorSyncAvailable())return;const a=`${t}-${e}-${Date.now()}`;this._pendingChanges.set(a,{type:t,action:e,data:s,timestamp:Date.now()}),this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners(),this._canSync()&&navigator.onLine&&this._processPendingChanges().catch(console.error)}async resolveConflict(t,e){switch(this._syncStatus.conflicts=this._syncStatus.conflicts.filter(e=>e!==t),e){case"local":await this._uploadConflictResolution(t,t.local);break;case"remote":await this._downloadConflictResolution(t,t.remote);break;case"merge":const e=await this._mergeConflictData(t);await this._uploadConflictResolution(t,e)}this._saveSyncStatus(),this._notifyListeners()}addListener(t){this._listeners.add(t)}removeListener(t){this._listeners.delete(t)}_canSync(){return this._syncStatus.isEnabled&&a.xd.isAuthenticated()}_setupAuthListener(){a.xd.addListener(t=>{t?(this._syncStatus.isEnabled=!0,this._saveSyncStatus()):(this._syncStatus.isEnabled=!1,this._syncStatus.conflicts=[],this._clearPendingChanges(),this._saveSyncStatus()),this._notifyListeners()})}_notifyListeners(){this._listeners.forEach(t=>{try{t(this._syncStatus)}catch(t){console.error("Error in sync listener:",t)}})}_getLocalFavorites(){try{const t=(0,n.bi)("ultra-card-favorites");return t?JSON.parse(t):[]}catch(t){return[]}}async _fetchRemoteFavorites(){const t=await a.xd.authenticatedFetch(`${r.API_BASE}/favorites`);if(!t.ok)throw new Error(`Failed to fetch favorites: ${t.statusText}`);return t.json()}async _uploadFavorites(t){const e=[];for(const s of t)try{const t=await a.xd.authenticatedFetch(`${r.API_BASE}/favorites`,{method:"POST",body:JSON.stringify({name:s.name,description:s.description,row_data:JSON.stringify(s.row),tags:s.tags})});t.ok&&e.push(await t.json())}catch(t){console.error("Failed to upload favorite:",t)}return e}async _downloadFavorites(t){const e=t.map(t=>{let e=null;try{e=t.row_data?JSON.parse(t.row_data):null}catch(t){e=null}return{id:t.id,name:t.name,description:t.description,row:e,created:t.created,tags:t.tags}});if(0===e.length)return[];const s=this._getLocalFavorites(),a=new Map(s.filter(t=>t&&"string"==typeof t.id).map(t=>[t.id,t]));for(const t of e)a.set(t.id,Object.assign(Object.assign({},a.get(t.id)),t));const o=Array.from(a.values());if(o.length<s.length)return console.error("[UltraCard] Favorites merge would drop entries; keeping local store untouched."),[];(0,n.FX)("ultra-card-favorites",JSON.stringify(o));try{window.dispatchEvent(new CustomEvent("ultra-card-favorites-changed"))}catch(t){}return e}async _mergeFavorites(t,e){const s=[],a=[],n=new Map(e.map(t=>[t.id,t])),o=new Map(t.map(t=>[t.id,t]));for(const e of t){const t=n.get(e.id);if(t){const n=new Date(e.created||0).getTime(),o=new Date(t.updated).getTime();Math.abs(n-o)>1e3&&a.push({type:"favorite",local:e,remote:t,field:"updated"}),s.push(n>o?e:Object.assign(Object.assign({},this._convertCloudFavorite(t)),{_needsDownload:n<o}))}else s.push(Object.assign(Object.assign({},e),{_needsUpload:!0}))}for(const t of e)o.has(t.id)||s.push(Object.assign(Object.assign({},this._convertCloudFavorite(t)),{_needsDownload:!0}));return{merged:s,conflicts:a}}_convertCloudFavorite(t){let e=null;try{t.row_data?e="string"==typeof t.row_data?JSON.parse(t.row_data):t.row_data:t.data&&(e=t.data)}catch(t){e=null}return{id:t.id,name:t.name,description:t.description,row:e,created:t.created,tags:t.tags}}_getLocalColors(){try{const t=(0,n.bi)("ultra-card-favorite-colors");return t?JSON.parse(t):[]}catch(t){return[]}}async _fetchRemoteColors(){const t=await a.xd.authenticatedFetch(`${r.API_BASE}/colors`);if(!t.ok)throw new Error(`Failed to fetch colors: ${t.statusText}`);return t.json()}async _uploadColors(t){return[]}async _downloadColors(t){return[]}async _mergeColors(t,e){return{merged:[],conflicts:[]}}static _toWordPressPresetId(t){return String(t).replace(/^wp-/,"")}async submitReview(t,e){if(!a.xd.isAuthenticated())throw new Error("Authentication required to submit reviews");const s=r._toWordPressPresetId(t);if(!/^\d+$/.test(s))throw new Error("This preset cannot be rated.");const n=await a.xd.authenticatedFetch(`${r.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:s,rating:e})});if(!n.ok){const t=await n.json().catch(()=>({message:"Submit failed"}));throw new Error(t.message||`HTTP ${n.status}`)}const o=await n.json();return this._saveLocalReview(o),o}async uploadPresetPhoto(t){if(!a.xd.isAuthenticated())throw new Error("Authentication required to upload photos");const e=new FormData;e.append("photo",t,t.name);const s=`${r.API_BASE}/media`,n=await a.xd.authenticatedFetch(s,{method:"POST",body:e});if(!n.ok){const t=await n.json().catch(()=>null),e=(null==t?void 0:t.data)&&"object"==typeof t.data&&null!==t.data&&"message"in t.data?String(t.data.message):"",s="string"==typeof(null==t?void 0:t.message)&&t.message||"string"==typeof(null==t?void 0:t.error)&&t.error||e||`Upload failed (HTTP ${n.status})`;throw new Error(s)}return n.json()}async submitPreset(t,e,s,n){var o;if(!a.xd.isAuthenticated())throw new Error("Authentication required to submit presets");const i=new FormData;i.append("name",t.name),i.append("description",t.description),i.append("category",t.category),i.append("shortcode",t.shortcode),(null===(o=t.tags)||void 0===o?void 0:o.length)&&i.append("tags",t.tags.join(",")),t.source&&i.append("source",t.source),t.integrations&&i.append("integrations",t.integrations),t.card_settings&&Object.keys(t.card_settings).length>0&&i.append("card_settings",JSON.stringify(t.card_settings)),t.custom_variables&&t.custom_variables.length>0&&i.append("custom_variables",JSON.stringify(t.custom_variables)),n&&n>0&&i.append("featured_image_id",String(n)),(null==s?void 0:s.length)?s.forEach(t=>i.append("photo_ids[]",String(t))):(null==e?void 0:e.length)&&e.forEach((t,e)=>i.append(`photos[${e}]`,t,t.name));const c=await a.xd.authenticatedFetch(`${r.API_BASE}/presets`,{method:"POST",body:i});if(!c.ok){const t=await c.json().catch(()=>({message:"Submit failed"}));throw new Error(t.message||`HTTP ${c.status}`)}return c.json()}async fetchPresetCategories(){try{const t=await fetch(`${r.API_BASE}/preset-categories`);if(t.ok){const e=await t.json();if(Array.isArray(e)&&e.length>0)return e}}catch(t){}return[{value:"layout",label:"Layout"},{value:"content",label:"Content"},{value:"data",label:"Data"},{value:"interactive",label:"Controls"},{value:"input",label:"Inputs"},{value:"media",label:"Media"}]}getUserReview(t){const e=a.xd.getCurrentUser();if(!e)return null;const s=r._toWordPressPresetId(t),n=Number(e.id),o=this._getLocalReviews().find(t=>String(t.preset_id)===s&&Number(t.user_id)===n);return null!=o?o:null}async loadUserReviewsFromServer(){if(a.xd.isAuthenticated())try{const t=await this._fetchRemoteReviews(),e=a.xd.getCurrentUser();if(!e)return;const s=Number(e.id);for(const e of t)Number(e.user_id)===s&&this._saveLocalReview(Object.assign(Object.assign({},e),{preset_id:String(e.preset_id)}))}catch(t){console.warn("Could not load user reviews from server:",t)}}_getLocalReviews(){try{const t=(0,n.bi)(o);return t?JSON.parse(t):[]}catch(t){return[]}}_saveLocalReview(t){const e=this._getLocalReviews(),s=String(t.preset_id),a=Number(t.user_id),i=Object.assign(Object.assign({},t),{preset_id:s}),r=e.findIndex(t=>String(t.preset_id)===s&&Number(t.user_id)===a);r>=0?e[r]=i:e.push(i);try{(0,n.FX)(o,JSON.stringify(e))}catch(t){console.error("Failed to save review locally:",t)}}async _fetchRemoteReviews(){const t=await a.xd.authenticatedFetch(`${r.API_BASE}/reviews`);if(!t.ok)throw new Error(`Failed to fetch reviews: ${t.statusText}`);return t.json()}async _uploadReviews(t){const e=[];for(const s of t)try{const t=await a.xd.authenticatedFetch(`${r.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:s.preset_id,rating:s.rating,comment:s.comment})});if(t.ok){const s=await t.json();e.push(s),this._saveLocalReview(s)}}catch(t){console.error("Failed to upload review:",t)}return e}async _downloadReviews(t){return[]}async _mergeReviews(t,e){return{merged:[],conflicts:[]}}async _uploadConflictResolution(t,e){}async _downloadConflictResolution(t,e){}async _mergeConflictData(t){return t.local}async _processPendingChanges(){if(0!==this._pendingChanges.size){for(const[t,e]of this._pendingChanges)try{await this._processChange(e),this._pendingChanges.delete(t)}catch(e){console.error(`Failed to process change ${t}:`,e)}this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners()}}async _processChange(t){switch(t.type){case"favorite":"create"===t.action&&await this._uploadFavorites([t.data]);break;case"color":throw new Error(i);case"review":"create"===t.action&&await this._uploadReviews([t.data])}}_loadSyncStatus(){try{const t=(0,n.bi)(r.SYNC_STATUS_KEY);if(t){const e=JSON.parse(t);this._syncStatus=Object.assign(Object.assign(Object.assign({},this._syncStatus),e),{lastSync:e.lastSync?new Date(e.lastSync):null,lastFavoritesSync:e.lastFavoritesSync?new Date(e.lastFavoritesSync):null,lastColorsSync:e.lastColorsSync?new Date(e.lastColorsSync):null,lastVariablesSync:e.lastVariablesSync?new Date(e.lastVariablesSync):null,isSyncing:!1})}}catch(t){console.error("Failed to load sync status:",t)}}_saveSyncStatus(){var t,e,s,a,o,i,c;try{(0,n.FX)(r.SYNC_STATUS_KEY,JSON.stringify(Object.assign(Object.assign({},this._syncStatus),{lastSync:null===(t=this._syncStatus.lastSync)||void 0===t?void 0:t.toISOString(),lastFavoritesSync:null!==(s=null===(e=this._syncStatus.lastFavoritesSync)||void 0===e?void 0:e.toISOString())&&void 0!==s?s:null,lastColorsSync:null!==(o=null===(a=this._syncStatus.lastColorsSync)||void 0===a?void 0:a.toISOString())&&void 0!==o?o:null,lastVariablesSync:null!==(c=null===(i=this._syncStatus.lastVariablesSync)||void 0===i?void 0:i.toISOString())&&void 0!==c?c:null})))}catch(t){console.error("Failed to save sync status:",t)}}_loadPendingChanges(){try{const t=(0,n.bi)(r.PENDING_CHANGES_KEY);if(t){const e=JSON.parse(t);this._pendingChanges=new Map(Object.entries(e)),this._syncStatus.pendingChanges=this._pendingChanges.size}}catch(t){console.error("Failed to load pending changes:",t)}}_savePendingChanges(){try{const t=Object.fromEntries(this._pendingChanges);(0,n.FX)(r.PENDING_CHANGES_KEY,JSON.stringify(t))}catch(t){console.error("Failed to save pending changes:",t)}}_clearPendingChanges(){this._pendingChanges.clear();try{(0,n.Pw)(r.PENDING_CHANGES_KEY)}catch(t){console.error("Failed to clear pending changes:",t)}}}r.API_BASE="https://ultracard.io/wp-json/ultra-card/v1",r.SYNC_STATUS_KEY="ultra-card-sync-status",r.PENDING_CHANGES_KEY="ultra-card-pending-changes";const c=new r;s.d(e,["Q",0,c])},9286(t,e,s){function a(t){try{return localStorage.getItem(t)}catch(t){return null}}function n(t,e){try{return localStorage.setItem(t,e),!0}catch(t){return!1}}function o(t){try{localStorage.removeItem(t)}catch(t){}}s.d(e,{FX:()=>n,Pw:()=>o,bi:()=>a})},8716(t,e,s){async function a(t){const e="undefined"!=typeof navigator?navigator.clipboard:void 0;if(!(null==e?void 0:e.writeText))return n(t);try{return await e.writeText(t),!0}catch(e){return n(t)}}function n(t){if("undefined"==typeof document||!document.body)return!1;const e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="fixed",e.style.top="0",e.style.left="-9999px",e.style.opacity="0",document.body.appendChild(e);const s=document.getSelection(),a=s&&s.rangeCount>0?s.getRangeAt(0):null;try{return e.focus(),e.select(),e.setSelectionRange(0,e.value.length),document.execCommand("copy")}catch(t){return!1}finally{document.body.removeChild(e),s&&a&&(s.removeAllRanges(),s.addRange(a))}}s.d(e,{e:()=>a})}};