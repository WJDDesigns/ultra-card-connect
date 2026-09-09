export const __webpack_esm_ids__=[8840,9286];export const __webpack_esm_modules__={5844(t,e,o){function s(t){if(null==t||""===t)return"Never";try{const e=t instanceof Date?t:new Date(t),o=e.getTime();if(Number.isNaN(o))return"Unknown";const s=Math.floor((Date.now()-o)/6e4);if(s<1)return"Just now";if(s<60)return`${s}m ago`;const i=Math.floor(s/60);return i<24?`${i}h ago`:e.toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(t){return"Unknown"}}function i(t){if(null==t||""===t)return"";try{const e=t instanceof Date?t:new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch(t){return""}}o.d(e,{f:()=>s,s:()=>i})},8840(t,e,o){o.r(e),o.d(e,{HubColorsTab:()=>y});var s=o(2618),i=o(4791),r=o(9286),a=o(8690),n=o(3045);class c{constructor(){this._favorites=[],this._listeners=new Set,this._instanceId=`inst-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,this._isBroadcasting=!1,this._hass=null,this._haLoaded=!1,this._logged404=!1,this._loggedOutdated=!1,this._integrationMissing=!1,this._loadPromise=null,this._loadFromStorage(),this._setupStorageListener()}getFavorites(){return[...this._favorites].sort((t,e)=>t.order-e.order)}addFavorite(t,e){const o={id:this._generateId(),name:t.trim(),color:e,order:this._getNextOrder()};return this._favorites.push(o),this._saveToStorage(),this._notifyListeners(),this._broadcastChange(),this._syncToHAIfAvailable(),o}updateFavorite(t,e){var o;const s=this._favorites.findIndex(e=>e.id===t);return-1!==s&&(this._favorites[s]=Object.assign(Object.assign(Object.assign({},this._favorites[s]),e),{name:(null===(o=e.name)||void 0===o?void 0:o.trim())||this._favorites[s].name}),this._saveToStorage(),this._notifyListeners(),this._broadcastChange(),this._syncToHAIfAvailable(),!0)}deleteFavorite(t){const e=this._favorites.findIndex(e=>e.id===t);return-1!==e&&(this._favorites[e],this._favorites.splice(e,1),this._saveToStorage(),this._notifyListeners(),this._broadcastChange(),this._syncToHAIfAvailable(),!0)}reorderFavorites(t){const e=new Set(this._favorites.map(t=>t.id));return!(!t.every(t=>e.has(t))||t.length!==this._favorites.length||(t.forEach((t,e)=>{const o=this._favorites.find(e=>e.id===t);o&&(o.order=e)}),this._saveToStorage(),this._notifyListeners(),this._broadcastChange(),this._syncToHAIfAvailable(),0))}importFromConfig(t){if(!Array.isArray(t)||0===t.length)return;const e=new Set(this._favorites.map(t=>t.color.toLowerCase()));t.forEach(t=>{var o,s;!e.has(t.color.toLowerCase())&&this._isValidColor(t.color)&&this._favorites.push({id:t.id||this._generateId(),name:(null===(o=t.name)||void 0===o?void 0:o.trim())||"Unnamed Color",color:t.color,order:null!==(s=t.order)&&void 0!==s?s:this._getNextOrder()})}),this._saveToStorage(),this._notifyListeners(),this._broadcastChange(),this._syncToHAIfAvailable()}exportForConfig(){return this.getFavorites()}hasColor(t){return this._favorites.some(e=>e.color.toLowerCase()===t.toLowerCase())}refreshFromStorage(){this._loadFromStorage(),this._notifyListeners()}setHass(t){if(this._hass=null!=t?t:null,!this._haLoaded&&(null==t?void 0:t.callApi))return!1===this._isIntegrationInstalled(t)?(this._integrationMissing=!0,this._haLoaded=!0,void this._logMissingIntegrationOnce()):void this.loadFromHA(t).catch(()=>{})}isStoredInHomeAssistant(){return this._haLoaded&&!this._integrationMissing}_isIntegrationInstalled(t){var e;const o=null===(e=null==t?void 0:t.config)||void 0===e?void 0:e.components;if(Array.isArray(o))return o.includes("ultra_card_pro_cloud")}_logMissingIntegrationOnce(){this._logged404||(this._logged404=!0,n.v3&&console.info('Ultra Card: Favorite colors sync requires the "Ultra Card Connect" integration. Install it from HACS (Integration: Ultra Card Connect) to persist colors across devices and after logout.'))}_logOutdatedIntegrationOnce(t){if(this._loggedOutdated)return;this._loggedOutdated=!0;const e=(0,a.Jd)(t,"Favorite colors sync")||"Ultra Card: Favorite colors sync needs Ultra Card Connect 1.6.0 or newer. Please update the integration.";n.v3&&console.info(e)}async loadFromHA(t){if((null==t?void 0:t.callApi)&&!this._integrationMissing)return this._loadPromise||(this._loadPromise=this._doLoadFromHA(t).finally(()=>{this._loadPromise=null})),this._loadPromise}async _doLoadFromHA(t){var e,o,s;try{const e=(0,a.fu)(t);if(e.installed&&e.outdated)return this._haLoaded=!0,this._integrationMissing=!0,void this._logOutdatedIntegrationOnce(t);const o=await t.callApi("GET","ultra_card_pro_cloud/favorite_colors");this._haLoaded=!0;const s=null==o?void 0:o.colors;if(Array.isArray(s)&&s.length>0){const t=s.filter(t=>this._isValidFavorite(t));t.length>0&&(this._favorites=t,this._saveToStorage(),this._notifyListeners(),this._broadcastChange())}}catch(i){const r=null!==(o=null!==(e=null==i?void 0:i.status)&&void 0!==e?e:null==i?void 0:i.status_code)&&void 0!==o?o:null===(s=null==i?void 0:i.response)||void 0===s?void 0:s.status;if(404===r)return this._haLoaded=!0,this._integrationMissing=!0,void((0,a.fu)(t).installed?this._logOutdatedIntegrationOnce(t):this._logMissingIntegrationOnce());if(401===r||403===r)return this._haLoaded=!0,void(n.v3&&console.debug("Failed to load favorite colors from HA (auth error):",i));n.v3&&console.debug("Failed to load favorite colors from HA (will retry):",i)}}async syncToHA(t){var e,o,s;if(null==t?void 0:t.callApi)if(this._integrationMissing||!1===this._isIntegrationInstalled(t))this._integrationMissing=!0;else try{await t.callApi("POST","ultra_card_pro_cloud/favorite_colors",{colors:this._favorites})}catch(i){if(404===(null!==(o=null!==(e=null==i?void 0:i.status)&&void 0!==e?e:null==i?void 0:i.status_code)&&void 0!==o?o:null===(s=null==i?void 0:i.response)||void 0===s?void 0:s.status))return this._integrationMissing=!0,void((0,a.fu)(t).installed?this._logOutdatedIntegrationOnce(t):this._logMissingIntegrationOnce());n.v3&&console.debug("Failed to sync favorite colors to HA:",i)}}_syncToHAIfAvailable(){var t;(null===(t=this._hass)||void 0===t?void 0:t.callApi)&&this.syncToHA(this._hass).catch(()=>{})}subscribe(t){this._listeners.add(t);const e=this.getFavorites();return t(e),()=>{this._listeners.delete(t)}}clearAll(){this._favorites=[],this._saveToStorage(),this._notifyListeners(),this._broadcastChange(),this._syncToHAIfAvailable()}testService(){n.v3&&console.log("UcFavoriteColorsService: Test method called"),n.v3&&console.log("Current favorites:",this._favorites),n.v3&&console.log("Number of listeners:",this._listeners.size);const t=this.addFavorite("Test Color","#ff0000");n.v3&&console.log("Test color added:",t);const e=this.getFavorites();n.v3&&console.log("All favorites after test add:",e)}debugFavoriteColors(){n.v3&&console.log("=== Ultra Card Favorite Colors Debug Info ==="),n.v3&&console.log("Storage Key:",c.STORAGE_KEY),n.v3&&console.log("Current Favorite Colors Count:",this._favorites.length),n.v3&&console.log("Listeners Count:",this._listeners.size),n.v3&&console.log("LocalStorage Available:",this._isLocalStorageAvailable());try{const t=(0,r.bi)(c.STORAGE_KEY);if(n.v3&&console.log("Raw Storage Data:",t?`${t.length} characters`:"null"),n.v3&&console.log("Storage Data Valid:",t?"Valid JSON":"No data"),t){const e=JSON.parse(t);n.v3&&console.log("Parsed Data Type:",Array.isArray(e)?"Array":typeof e),n.v3&&console.log("Parsed Data Length:",Array.isArray(e)?e.length:"N/A")}}catch(t){console.error("Storage Data Error:",t)}n.v3&&console.log("Favorite Colors List:",this._favorites.map(t=>({id:t.id,name:t.name,color:t.color,order:t.order}))),n.v3&&console.log("==========================================")}_loadFromStorage(){try{if(!this._isLocalStorageAvailable())return void(this._favorites=[]);const t=(0,r.bi)(c.STORAGE_KEY);if(t){const e=JSON.parse(t);Array.isArray(e)?this._favorites=e.filter(this._isValidFavorite.bind(this)):this._favorites=[]}else this._favorites=[]}catch(t){console.error("Failed to load favorite colors from storage:",t),this._favorites=[]}}_saveToStorage(){try{if(!this._isLocalStorageAvailable())return;const t=JSON.stringify(this._favorites);(0,r.FX)(c.STORAGE_KEY,t)}catch(t){console.error("Failed to save favorite colors to storage:",t),t instanceof DOMException&&t.code===DOMException.QUOTA_EXCEEDED_ERR?(console.error("localStorage quota exceeded! Consider clearing old data or using fewer favorite colors."),this._handleStorageQuotaExceeded()):console.error("Unknown storage error:",t)}}_setupStorageListener(){window.addEventListener("storage",t=>{t.key===c.STORAGE_KEY&&(this._loadFromStorage(),this._notifyListeners())}),window.addEventListener(c.SYNC_EVENT,t=>{var e;(null===(e=t.detail)||void 0===e?void 0:e.sourceInstance)===this._instanceId||this._isBroadcasting||(this._loadFromStorage(),this._notifyListeners())})}_broadcastChange(){this._isBroadcasting=!0,window.dispatchEvent(new CustomEvent(c.SYNC_EVENT,{detail:{sourceInstance:this._instanceId}})),setTimeout(()=>{this._isBroadcasting=!1},0)}_notifyListeners(){const t=this.getFavorites();this._listeners.forEach(e=>{try{e(t)}catch(t){console.warn("Error notifying favorite colors listener:",t)}})}_generateId(){return`fav-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}_getNextOrder(){return 0===this._favorites.length?0:Math.max(...this._favorites.map(t=>t.order))+1}_isValidFavorite(t){return t&&"string"==typeof t.id&&"string"==typeof t.name&&"string"==typeof t.color&&"number"==typeof t.order&&this._isValidColor(t.color)}_isValidColor(t){if(!t||"string"!=typeof t)return!1;const e=t.trim();if(0===e.length)return!1;if(e.toLowerCase().includes("gradient"))return/^(linear-gradient|radial-gradient|conic-gradient|repeating-linear-gradient|repeating-radial-gradient)\s*\(.*\)\s*$/i.test(e);if(e.startsWith("var("))return e.includes("--")&&e.endsWith(")");if([/^#([A-Fa-f0-9]{3,8})$/,/^rgb\s*\(/i,/^rgba\s*\(/i,/^hsl\s*\(/i,/^hsla\s*\(/i,/^hwb\s*\(/i,/^lab\s*\(/i,/^lch\s*\(/i,/^oklch\s*\(/i,/^oklab\s*\(/i,/^color\s*\(/i].some(t=>t.test(e)))return!0;const o=e.toLowerCase();return!!["transparent","currentcolor","inherit","initial","unset","red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","grey","cyan","magenta","lime","navy","teal","silver","maroon","olive","aqua","fuchsia","coral","crimson","gold","indigo","ivory","khaki","lavender","plum","salmon","sienna","tan","tomato","turquoise","violet","wheat"].includes(o)||!!/^[a-zA-Z][a-zA-Z0-9-]*$/.test(e)}_isLocalStorageAvailable(){try{const t="__ultra_card_colors_storage_test__";return(0,r.FX)(t,"test"),(0,r.Pw)(t),!0}catch(t){return!1}}_handleStorageQuotaExceeded(){if(n.v3&&console.log("Attempting to free up storage space by removing oldest favorite colors..."),this._favorites.length<=1)return void console.error("Cannot free up space - only one or no favorite colors exist");const t=Math.max(1,Math.floor(.25*this._favorites.length)),e=[...this._favorites].sort((t,e)=>t.order-e.order).slice(0,this._favorites.length-t);this._favorites=e,n.v3&&console.log(`Removed ${t} oldest favorite colors to free up storage space`);try{const t=JSON.stringify(this._favorites);(0,r.FX)(c.STORAGE_KEY,t),n.v3&&console.log("Successfully saved favorite colors after cleanup"),this._notifyListeners(),this._broadcastChange()}catch(t){console.error("Still cannot save after cleanup:",t)}}}c.STORAGE_KEY="ultra-card-favorite-colors",c.SYNC_EVENT="ultra-card-favorite-colors-changed";const l=new c;"undefined"!=typeof window&&(window.ucFavoriteColorsService=l,window.debugUltraCardFavoriteColors=()=>l.debugFavoriteColors());var d=o(9978),h=o(378),u=o(7568),g=o(821),p=o(5844),v=o(8716),_=function(t,e,o,s){var i,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,s);else for(var n=t.length-1;n>=0;n--)(i=t[n])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let y=class extends s.WF{constructor(){super(...arguments),this._colors=[],this._toastMsg="",this._showAddForm=!1,this._newColorName="",this._newColorValue="#3498db",this._editingId=null,this._editName="",this._editColor="",this._cloudUser=null,this._syncStatus=null,this._syncing=!1}connectedCallback(){super.connectedCallback(),l.refreshFromStorage(),this.hass&&(l.setHass(this.hass),l.isStoredInHomeAssistant()||Promise.resolve(l.loadFromHA(this.hass)).catch(()=>{}).then(()=>this.requestUpdate())),this._colors=l.getFavorites(),this._unsub=l.subscribe(t=>{this._colors=t}),this._cloudUser=h.xd.getCurrentUser(),this._syncStatus=u.Q.getSyncStatus(),this._authUnsub=t=>{this._cloudUser=t},h.xd.addListener(this._authUnsub),this._syncUnsub=t=>{this._syncStatus=t},u.Q.addListener(this._syncUnsub)}updated(t){t.has("hass")&&this.hass&&l.setHass(this.hass)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._unsub)||void 0===t||t.call(this),this._authUnsub&&h.xd.removeListener(this._authUnsub),this._syncUnsub&&u.Q.removeListener(this._syncUnsub),this._toastTimer&&clearTimeout(this._toastTimer)}_goToAccount(){(0,g.nL)(this,{tab:"account"})}_formatSyncTime(t){return(0,p.f)(t)}async _syncNow(){if(!this._syncing){this._syncing=!0;try{const t=await u.Q.syncFavoriteColors();t.success?this._showToast("Colors synced ✓"):this._showToast(t.errors[0]||"Sync failed — try again")}catch(t){this._showToast("Sync failed — try again")}finally{this._syncing=!1}}}_renderSyncBanner(){var t;if(!u.Q.isColorSyncAvailable()){const t=l.isStoredInHomeAssistant();return s.qy`
        <div class="sync-banner ${t?"sync-banner-active":"sync-banner-guest"}">
          <ha-icon icon=${t?"mdi:home-assistant":"mdi:content-save-outline"}></ha-icon>
          <div class="sync-banner-body">
            <strong>${t?"Saved in Home Assistant":"Saved in this browser"}</strong>
            <span>
              ${t?"Ultra Card Connect stores your palette on this Home Assistant server, so it follows you to every browser and device that signs in here.":"Install Ultra Card Connect to keep colors on your Home Assistant server instead of a single browser. Cloud sync for colors is coming."}
            </span>
          </div>
        </div>
      `}return this._cloudUser?s.qy`
      <div class="sync-banner sync-banner-active">
        <ha-icon icon=${this._syncing?"mdi:cloud-sync":"mdi:cloud-check"}></ha-icon>
        <div class="sync-banner-body">
          <strong>${this._syncing?"Syncing…":"Cloud Sync Active"}</strong>
          <span>Last synced: ${this._formatSyncTime(null===(t=this._syncStatus)||void 0===t?void 0:t.lastColorsSync)}</span>
        </div>
        <button class="sync-banner-btn" @click=${this._syncNow} ?disabled=${this._syncing}>
          ${this._syncing?"Syncing…":"Sync Now"}
        </button>
      </div>
    `:s.qy`
        <div class="sync-banner sync-banner-guest">
          <ha-icon icon="mdi:cloud-outline"></ha-icon>
          <div class="sync-banner-body">
            <strong>Back up & sync across all devices</strong>
            <span>Create a free account to keep your color palette available everywhere.</span>
          </div>
          <button class="sync-banner-btn" @click=${this._goToAccount}>Sign In</button>
        </div>
      `}_showToast(t){this._toastMsg=t,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toastMsg="",2e3)}async _copyColor(t){const e=await(0,v.e)(t);this._showToast(e?`Copied ${t}`:"Could not copy — your browser blocked clipboard access")}_deleteColor(t){l.deleteFavorite(t.id),this._colors=l.getFavorites()}_addColor(){const t=this._newColorName.trim(),e=this._newColorValue.trim();t&&e&&(l.hasColor(e)?this._showToast("This color already exists"):(l.addFavorite(t,e),this._colors=l.getFavorites(),this._newColorName="",this._newColorValue="#3498db",this._showAddForm=!1,this._showToast(`Added "${t}"`)))}_startEdit(t){this._editingId=t.id,this._editName=t.name,this._editColor=t.color}_saveEdit(){this._editingId&&(l.updateFavorite(this._editingId,{name:this._editName,color:this._editColor}),this._colors=l.getFavorites(),this._editingId=null,this._showToast("Color updated"))}_cancelEdit(){this._editingId=null}_isLight(t){try{const e=t.replace("#","");if(e.length<6)return!0;const o=parseInt(e.substring(0,2),16);return(299*o+587*parseInt(e.substring(2,4),16)+114*parseInt(e.substring(4,6),16))/1e3>155}catch(t){return!1}}render(){if(0===this._colors.length&&!this._showAddForm)return s.qy`
        <div class="hub-tab-blurb">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <p><strong>Favorite colors</strong> appear in every Ultra Card color picker so you can reuse your palette. Add colors here or save them from any picker with the heart icon.</p>
        </div>
        ${this._renderSyncBanner()}
        <div class="empty-state">
          <div class="empty-state-icon">
            <ha-icon icon="mdi:palette-swatch-variant"></ha-icon>
          </div>
          <h3>No Saved Colors</h3>
          <p>Save your favorite colors here for quick access across all your cards.</p>
          <p class="empty-hint">Add colors below or use the heart icon in any card's color picker</p>
          <button class="add-btn" style="margin-top: 16px;" @click=${()=>this._showAddForm=!0}>
            <ha-icon icon="mdi:plus"></ha-icon>
            Add Color
          </button>
        </div>
      `;const t=this._newColorValue&&l.hasColor(this._newColorValue);return s.qy`
      <div class="hub-tab-blurb">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <p><strong>Favorite colors</strong> appear in every Ultra Card color picker so you can reuse your palette. Add colors here or save them from any picker with the heart icon.</p>
      </div>
      ${this._renderSyncBanner()}
      <div class="colors-header">
        <span class="colors-count">
          <strong>${this._colors.length}</strong> saved color${1!==this._colors.length?"s":""}
        </span>
        <button class="add-btn" @click=${()=>this._showAddForm=!this._showAddForm}>
          <ha-icon icon=${this._showAddForm?"mdi:close":"mdi:plus"}></ha-icon>
          ${this._showAddForm?"Cancel":"Add Color"}
        </button>
      </div>

      ${this._showAddForm?s.qy`
            <div class="add-form">
              <h3><ha-icon icon="mdi:palette-swatch"></ha-icon> Add New Color</h3>

              <div class="form-row">
                <span class="form-label">Color</span>
                <div class="color-input-group">
                  <input
                    type="color"
                    class="color-picker-input"
                    .value=${this._newColorValue}
                    @input=${t=>this._newColorValue=t.target.value}
                  />
                  <input
                    type="text"
                    class="form-input"
                    placeholder="#3498db or rgb(52, 152, 219)"
                    .value=${this._newColorValue}
                    @input=${t=>this._newColorValue=t.target.value}
                  />
                  <div class="color-preview-large" style="background: ${this._newColorValue}"></div>
                </div>
              </div>

              <div class="form-row">
                <span class="form-label">Name</span>
                <input
                  type="text"
                  class="form-input"
                  placeholder="e.g. Ocean Blue"
                  .value=${this._newColorName}
                  @input=${t=>this._newColorName=t.target.value}
                  @keydown=${t=>"Enter"===t.key&&this._addColor()}
                />
              </div>

              ${t?s.qy`
                    <div class="duplicate-warning">
                      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                      This color value already exists in your favorites.
                    </div>
                  `:""}

              <div class="form-actions">
                <button class="form-btn secondary" @click=${()=>this._showAddForm=!1}>
                  Cancel
                </button>
                <button
                  class="form-btn primary"
                  ?disabled=${!this._newColorName.trim()||!this._newColorValue.trim()||!!t}
                  @click=${this._addColor}
                >
                  <ha-icon icon="mdi:check"></ha-icon>
                  Add Color
                </button>
              </div>
            </div>
          `:""}

      <!-- Color cards -->
      <div class="colors-grid">
        ${this._colors.map(t=>this._renderColorCard(t))}
      </div>

      <div class="toast ${this._toastMsg?"show":""}">${this._toastMsg}</div>
    `}_renderColorCard(t){const e=this._editingId===t.id;return s.qy`
      <div class="color-card ${e?"editing":""}">
        <div
          class="color-swatch-area"
          style="background: ${e?this._editColor:t.color}"
          @click=${()=>this._copyColor(t.color)}
          title="Click to copy"
        >
          <div class="swatch-overlay">
            <ha-icon icon="mdi:content-copy" @click=${e=>{e.stopPropagation(),this._copyColor(t.color)}}></ha-icon>
            <ha-icon icon="mdi:pencil" @click=${e=>{e.stopPropagation(),this._startEdit(t)}}></ha-icon>
          </div>
        </div>

        ${e?s.qy`
              <div class="edit-inline">
                <div class="edit-row">
                  <input
                    type="color"
                    class="edit-color-input"
                    .value=${this._editColor}
                    @input=${t=>this._editColor=t.target.value}
                  />
                  <input
                    type="text"
                    class="edit-input"
                    .value=${this._editColor}
                    @input=${t=>this._editColor=t.target.value}
                  />
                </div>
                <div class="edit-row">
                  <input
                    type="text"
                    class="edit-input"
                    .value=${this._editName}
                    placeholder="Color name"
                    @input=${t=>this._editName=t.target.value}
                    @keydown=${t=>"Enter"===t.key&&this._saveEdit()}
                  />
                  <div class="edit-actions">
                    <button class="action-btn" title="Save" @click=${this._saveEdit}>
                      <ha-icon icon="mdi:check"></ha-icon>
                    </button>
                    <button class="action-btn" title="Cancel" @click=${this._cancelEdit}>
                      <ha-icon icon="mdi:close"></ha-icon>
                    </button>
                  </div>
                </div>
              </div>
            `:s.qy`
              <div class="color-info">
                <div class="color-details">
                  <div class="color-name">${t.name}</div>
                  <div class="color-value">${t.color}</div>
                </div>
                <div class="color-actions">
                  <button class="action-btn" title="Edit" @click=${()=>this._startEdit(t)}>
                    <ha-icon icon="mdi:pencil"></ha-icon>
                  </button>
                  <button class="action-btn delete" title="Remove" @click=${()=>this._deleteColor(t)}>
                    <ha-icon icon="mdi:delete-outline"></ha-icon>
                  </button>
                </div>
              </div>
            `}
      </div>
    `}};y.styles=[d.z,s.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
      }

      .colors-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
      }

      .colors-count {
        font-size: 13px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .colors-count strong {
        color: var(--primary-text-color);
      }

      .add-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .add-btn:hover {
        filter: brightness(1.1);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      }

      .add-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      /* Add color form */
      .add-form {
        background: var(--ha-card-background, var(--card-background-color));
        border: 2px solid var(--primary-color);
        border-radius: 16px;
        padding: 24px;
        margin-bottom: 24px;
        animation: fadeSlideIn 0.2s ease-out;
      }

      .add-form h3 {
        margin: 0 0 20px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .add-form h3 ha-icon {
        --mdc-icon-size: 20px;
        color: var(--primary-color);
      }

      .form-row {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
      }

      .form-row:last-of-type {
        margin-bottom: 20px;
      }

      .form-label {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        min-width: 60px;
      }

      .form-input {
        flex: 1;
        padding: 10px 14px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 8px;
        background: var(--primary-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
        outline: none;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .form-input:focus {
        border-color: var(--primary-color);
      }

      .color-input-group {
        flex: 1;
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .color-picker-input {
        width: 48px;
        height: 48px;
        border: 2px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 12px;
        cursor: pointer;
        padding: 2px;
        background: var(--primary-background-color);
        transition: border-color 0.2s;
      }

      .color-picker-input:hover {
        border-color: var(--primary-color);
      }

      .color-preview-large {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        border: 2px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        flex-shrink: 0;
      }

      .form-actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }

      .form-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        border: none;
        transition: all 0.2s ease;
      }

      .form-btn.primary {
        background: var(--primary-color);
        color: white;
      }

      .form-btn.primary:hover:not(:disabled) {
        filter: brightness(1.1);
      }

      .form-btn.primary:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .form-btn.secondary {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        color: var(--primary-text-color);
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      }

      .form-btn.secondary:hover {
        border-color: var(--primary-color);
      }

      .form-btn ha-icon {
        --mdc-icon-size: 16px;
      }

      /* Duplicate warning */
      .duplicate-warning {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        background: rgba(255, 152, 0, 0.1);
        border: 1px solid rgba(255, 152, 0, 0.3);
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 12px;
        color: #f57c00;
      }

      .duplicate-warning ha-icon {
        --mdc-icon-size: 16px;
        flex-shrink: 0;
      }

      /* Color grid */
      .colors-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
      }

      @media (max-width: 600px) {
        .colors-grid {
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }
      }

      .color-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 16px;
        overflow: hidden;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
      }

      .color-card:hover {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        transform: translateY(-3px);
      }

      .color-card.editing {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);
      }

      .color-swatch-area {
        width: 100%;
        height: 100px;
        position: relative;
        cursor: pointer;
        transition: height 0.2s ease;
      }

      .color-card:hover .color-swatch-area {
        height: 108px;
      }

      .swatch-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 8px 12px;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.4));
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        opacity: 0;
        transition: opacity 0.2s;
      }

      .color-card:hover .swatch-overlay {
        opacity: 1;
      }

      .swatch-overlay ha-icon {
        --mdc-icon-size: 18px;
        color: white;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
        cursor: pointer;
      }

      .color-info {
        padding: 12px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }

      .color-details {
        flex: 1;
        min-width: 0;
      }

      .color-name {
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 2px;
      }

      .color-value {
        font-size: 12px;
        font-family: 'SF Mono', 'Fira Code', monospace;
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .color-actions {
        display: flex;
        gap: 4px;
        flex-shrink: 0;
      }

      /* Edit inline form within card */
      .edit-inline {
        padding: 12px 14px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        overflow: visible;
      }

      .edit-row {
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 8px;
      }

      .edit-row:last-child {
        margin-bottom: 0;
      }

      .edit-input {
        flex: 1;
        min-width: 0;
        padding: 6px 10px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 6px;
        background: var(--primary-background-color);
        color: var(--primary-text-color);
        font-size: 13px;
        outline: none;
        box-sizing: border-box;
      }

      .edit-input:focus {
        border-color: var(--primary-color);
      }

      .edit-color-input {
        width: 32px;
        height: 32px;
        min-width: 32px;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        cursor: pointer;
        padding: 1px;
        flex-shrink: 0;
      }

      .edit-actions {
        display: flex;
        gap: 4px;
        flex-shrink: 0;
      }

      /* Sync banner styles are shared via panelStyles (.sync-banner*) */
    `],_([(0,i.MZ)({attribute:!1})],y.prototype,"hass",void 0),_([(0,i.wk)()],y.prototype,"_colors",void 0),_([(0,i.wk)()],y.prototype,"_toastMsg",void 0),_([(0,i.wk)()],y.prototype,"_showAddForm",void 0),_([(0,i.wk)()],y.prototype,"_newColorName",void 0),_([(0,i.wk)()],y.prototype,"_newColorValue",void 0),_([(0,i.wk)()],y.prototype,"_editingId",void 0),_([(0,i.wk)()],y.prototype,"_editName",void 0),_([(0,i.wk)()],y.prototype,"_editColor",void 0),_([(0,i.wk)()],y.prototype,"_cloudUser",void 0),_([(0,i.wk)()],y.prototype,"_syncStatus",void 0),_([(0,i.wk)()],y.prototype,"_syncing",void 0),y=_([(0,i.EM)("hub-colors-tab")],y)},7568(t,e,o){var s=o(378),i=o(9286);const r="ultra-card-reviews",a="Color sync is not available yet — your colors are saved on this device only.";class n{constructor(){this._syncStatus={isEnabled:!1,lastSync:null,isSyncing:!1,pendingChanges:0,conflicts:[],lastFavoritesSync:null,lastColorsSync:null,lastVariablesSync:null},this._listeners=new Set,this._pendingChanges=new Map,this._loadSyncStatus(),this._loadPendingChanges(),this._setupAuthListener()}getSyncStatus(){return Object.assign({},this._syncStatus)}async setSyncEnabled(t){this._syncStatus.isEnabled=t,this._saveSyncStatus(),this._notifyListeners(),t&&s.xd.isAuthenticated()&&await this.syncAll()}async syncAll(){if(!s.xd.isAuthenticated())throw new Error("Cannot sync: not authenticated");this._syncStatus.isSyncing=!0,this._notifyListeners();try{const[t,e,o,s]=await Promise.all([this.syncFavorites(),this.syncFavoriteColors(),this.syncReviews(),this.syncVariables()]);return this._syncStatus.lastSync=new Date,this._syncStatus.pendingChanges=0,this._clearPendingChanges(),{favorites:t,colors:e,reviews:o,variables:s}}finally{this._syncStatus.isSyncing=!1,this._saveSyncStatus(),this._notifyListeners()}}async syncFavorites(){if(!s.xd.isAuthenticated())throw new Error("Cannot sync favorites: not authenticated");const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const e=this._getLocalFavorites(),o=await this._fetchRemoteFavorites(),{merged:s,conflicts:i}=await this._mergeFavorites(e,o),r=await this._uploadFavorites(s.filter(t=>t._needsUpload)),a=await this._downloadFavorites(s.filter(t=>t._needsDownload));t.success=!0,t.synced=r.length+a.length,t.conflicts=i.length,this._syncStatus.conflicts=[...this._syncStatus.conflicts,...i],this._syncStatus.lastFavoritesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),console.log(`✅ Favorites sync completed: ${t.synced} synced, ${t.conflicts} conflicts`)}catch(e){console.error("❌ Favorites sync failed:",e),t.errors.push(e instanceof Error?e.message:"Unknown error")}return t}isColorSyncAvailable(){return!1}async syncFavoriteColors(){if(!s.xd.isAuthenticated())throw new Error("Cannot sync colors: not authenticated");return{success:!1,synced:0,conflicts:0,errors:[a],lastSync:(new Date).toISOString()}}async syncVariables(){const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{if(!s.xd.isAuthenticated())throw new Error("Not authenticated");const e=(0,i.bi)("ultra-card-custom-variables"),o=e?JSON.parse(e):[],r=await s.xd.authenticatedFetch(`${n.API_BASE}/custom-variables`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({variables:o})});if(r.ok){const e=await r.json();(null==e?void 0:e.variables)&&(0,i.FX)("ultra-card-custom-variables",JSON.stringify(e.variables)),t.success=!0,t.synced=o.length,this._syncStatus.lastVariablesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),console.log(`✅ Variables sync completed: ${t.synced} variables`)}else t.errors.push(`Variables sync failed: ${r.status} ${r.statusText}`),console.warn(`❌ Variables sync failed: ${r.status} ${r.statusText}`)}catch(e){const o=e instanceof Error?e.message:"Unknown error";console.warn("❌ Variables sync failed:",o),t.errors.push(o)}return t}async syncReviews(){if(!this._canSync())throw new Error("Cannot sync reviews: not authenticated");const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const e=this._getLocalReviews(),o=await this._fetchRemoteReviews(),{merged:s,conflicts:i}=await this._mergeReviews(e,o),r=await this._uploadReviews(s.filter(t=>t._needsUpload)),a=await this._downloadReviews(s.filter(t=>t._needsDownload));t.success=!1,t.errors.push("Review sync is not implemented yet."),t.synced=r.length+a.length,t.conflicts=i.length}catch(e){console.error("❌ Reviews sync failed:",e),t.errors.push(e instanceof Error?e.message:"Unknown error")}return t}queueChange(t,e,o){if("color"===t&&!this.isColorSyncAvailable())return;const s=`${t}-${e}-${Date.now()}`;this._pendingChanges.set(s,{type:t,action:e,data:o,timestamp:Date.now()}),this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners(),this._canSync()&&navigator.onLine&&this._processPendingChanges().catch(console.error)}async resolveConflict(t,e){switch(this._syncStatus.conflicts=this._syncStatus.conflicts.filter(e=>e!==t),e){case"local":await this._uploadConflictResolution(t,t.local);break;case"remote":await this._downloadConflictResolution(t,t.remote);break;case"merge":const e=await this._mergeConflictData(t);await this._uploadConflictResolution(t,e)}this._saveSyncStatus(),this._notifyListeners()}addListener(t){this._listeners.add(t)}removeListener(t){this._listeners.delete(t)}_canSync(){return this._syncStatus.isEnabled&&s.xd.isAuthenticated()}_setupAuthListener(){s.xd.addListener(t=>{t?(this._syncStatus.isEnabled=!0,this._saveSyncStatus()):(this._syncStatus.isEnabled=!1,this._syncStatus.conflicts=[],this._clearPendingChanges(),this._saveSyncStatus()),this._notifyListeners()})}_notifyListeners(){this._listeners.forEach(t=>{try{t(this._syncStatus)}catch(t){console.error("Error in sync listener:",t)}})}_getLocalFavorites(){try{const t=(0,i.bi)("ultra-card-favorites");return t?JSON.parse(t):[]}catch(t){return[]}}async _fetchRemoteFavorites(){const t=await s.xd.authenticatedFetch(`${n.API_BASE}/favorites`);if(!t.ok)throw new Error(`Failed to fetch favorites: ${t.statusText}`);return t.json()}async _uploadFavorites(t){const e=[];for(const o of t)try{const t=await s.xd.authenticatedFetch(`${n.API_BASE}/favorites`,{method:"POST",body:JSON.stringify({name:o.name,description:o.description,row_data:JSON.stringify(o.row),tags:o.tags})});t.ok&&e.push(await t.json())}catch(t){console.error("Failed to upload favorite:",t)}return e}async _downloadFavorites(t){const e=t.map(t=>{let e=null;try{e=t.row_data?JSON.parse(t.row_data):null}catch(t){e=null}return{id:t.id,name:t.name,description:t.description,row:e,created:t.created,tags:t.tags}});if(0===e.length)return[];const o=this._getLocalFavorites(),s=new Map(o.filter(t=>t&&"string"==typeof t.id).map(t=>[t.id,t]));for(const t of e)s.set(t.id,Object.assign(Object.assign({},s.get(t.id)),t));const r=Array.from(s.values());if(r.length<o.length)return console.error("[UltraCard] Favorites merge would drop entries; keeping local store untouched."),[];(0,i.FX)("ultra-card-favorites",JSON.stringify(r));try{window.dispatchEvent(new CustomEvent("ultra-card-favorites-changed"))}catch(t){}return e}async _mergeFavorites(t,e){const o=[],s=[],i=new Map(e.map(t=>[t.id,t])),r=new Map(t.map(t=>[t.id,t]));for(const e of t){const t=i.get(e.id);if(t){const i=new Date(e.created||0).getTime(),r=new Date(t.updated).getTime();Math.abs(i-r)>1e3&&s.push({type:"favorite",local:e,remote:t,field:"updated"}),o.push(i>r?e:Object.assign(Object.assign({},this._convertCloudFavorite(t)),{_needsDownload:i<r}))}else o.push(Object.assign(Object.assign({},e),{_needsUpload:!0}))}for(const t of e)r.has(t.id)||o.push(Object.assign(Object.assign({},this._convertCloudFavorite(t)),{_needsDownload:!0}));return{merged:o,conflicts:s}}_convertCloudFavorite(t){let e=null;try{t.row_data?e="string"==typeof t.row_data?JSON.parse(t.row_data):t.row_data:t.data&&(e=t.data)}catch(t){e=null}return{id:t.id,name:t.name,description:t.description,row:e,created:t.created,tags:t.tags}}_getLocalColors(){try{const t=(0,i.bi)("ultra-card-favorite-colors");return t?JSON.parse(t):[]}catch(t){return[]}}async _fetchRemoteColors(){const t=await s.xd.authenticatedFetch(`${n.API_BASE}/colors`);if(!t.ok)throw new Error(`Failed to fetch colors: ${t.statusText}`);return t.json()}async _uploadColors(t){return[]}async _downloadColors(t){return[]}async _mergeColors(t,e){return{merged:[],conflicts:[]}}static _toWordPressPresetId(t){return String(t).replace(/^wp-/,"")}async submitReview(t,e){if(!s.xd.isAuthenticated())throw new Error("Authentication required to submit reviews");const o=n._toWordPressPresetId(t);if(!/^\d+$/.test(o))throw new Error("This preset cannot be rated.");const i=await s.xd.authenticatedFetch(`${n.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:o,rating:e})});if(!i.ok){const t=await i.json().catch(()=>({message:"Submit failed"}));throw new Error(t.message||`HTTP ${i.status}`)}const r=await i.json();return this._saveLocalReview(r),r}async uploadPresetPhoto(t){if(!s.xd.isAuthenticated())throw new Error("Authentication required to upload photos");const e=new FormData;e.append("photo",t,t.name);const o=`${n.API_BASE}/media`,i=await s.xd.authenticatedFetch(o,{method:"POST",body:e});if(!i.ok){const t=await i.json().catch(()=>null),e=(null==t?void 0:t.data)&&"object"==typeof t.data&&null!==t.data&&"message"in t.data?String(t.data.message):"",o="string"==typeof(null==t?void 0:t.message)&&t.message||"string"==typeof(null==t?void 0:t.error)&&t.error||e||`Upload failed (HTTP ${i.status})`;throw new Error(o)}return i.json()}async submitPreset(t,e,o,i){var r;if(!s.xd.isAuthenticated())throw new Error("Authentication required to submit presets");const a=new FormData;a.append("name",t.name),a.append("description",t.description),a.append("category",t.category),a.append("shortcode",t.shortcode),(null===(r=t.tags)||void 0===r?void 0:r.length)&&a.append("tags",t.tags.join(",")),t.source&&a.append("source",t.source),t.integrations&&a.append("integrations",t.integrations),t.card_settings&&Object.keys(t.card_settings).length>0&&a.append("card_settings",JSON.stringify(t.card_settings)),t.custom_variables&&t.custom_variables.length>0&&a.append("custom_variables",JSON.stringify(t.custom_variables)),i&&i>0&&a.append("featured_image_id",String(i)),(null==o?void 0:o.length)?o.forEach(t=>a.append("photo_ids[]",String(t))):(null==e?void 0:e.length)&&e.forEach((t,e)=>a.append(`photos[${e}]`,t,t.name));const c=await s.xd.authenticatedFetch(`${n.API_BASE}/presets`,{method:"POST",body:a});if(!c.ok){const t=await c.json().catch(()=>({message:"Submit failed"}));throw new Error(t.message||`HTTP ${c.status}`)}return c.json()}async fetchPresetCategories(){try{const t=await fetch(`${n.API_BASE}/preset-categories`);if(t.ok){const e=await t.json();if(Array.isArray(e)&&e.length>0)return e}}catch(t){}return[{value:"layout",label:"Layout"},{value:"content",label:"Content"},{value:"data",label:"Data"},{value:"interactive",label:"Controls"},{value:"input",label:"Inputs"},{value:"media",label:"Media"}]}getUserReview(t){const e=s.xd.getCurrentUser();if(!e)return null;const o=n._toWordPressPresetId(t),i=Number(e.id),r=this._getLocalReviews().find(t=>String(t.preset_id)===o&&Number(t.user_id)===i);return null!=r?r:null}async loadUserReviewsFromServer(){if(s.xd.isAuthenticated())try{const t=await this._fetchRemoteReviews(),e=s.xd.getCurrentUser();if(!e)return;const o=Number(e.id);for(const e of t)Number(e.user_id)===o&&this._saveLocalReview(Object.assign(Object.assign({},e),{preset_id:String(e.preset_id)}))}catch(t){console.warn("Could not load user reviews from server:",t)}}_getLocalReviews(){try{const t=(0,i.bi)(r);return t?JSON.parse(t):[]}catch(t){return[]}}_saveLocalReview(t){const e=this._getLocalReviews(),o=String(t.preset_id),s=Number(t.user_id),a=Object.assign(Object.assign({},t),{preset_id:o}),n=e.findIndex(t=>String(t.preset_id)===o&&Number(t.user_id)===s);n>=0?e[n]=a:e.push(a);try{(0,i.FX)(r,JSON.stringify(e))}catch(t){console.error("Failed to save review locally:",t)}}async _fetchRemoteReviews(){const t=await s.xd.authenticatedFetch(`${n.API_BASE}/reviews`);if(!t.ok)throw new Error(`Failed to fetch reviews: ${t.statusText}`);return t.json()}async _uploadReviews(t){const e=[];for(const o of t)try{const t=await s.xd.authenticatedFetch(`${n.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:o.preset_id,rating:o.rating,comment:o.comment})});if(t.ok){const o=await t.json();e.push(o),this._saveLocalReview(o)}}catch(t){console.error("Failed to upload review:",t)}return e}async _downloadReviews(t){return[]}async _mergeReviews(t,e){return{merged:[],conflicts:[]}}async _uploadConflictResolution(t,e){}async _downloadConflictResolution(t,e){}async _mergeConflictData(t){return t.local}async _processPendingChanges(){if(0!==this._pendingChanges.size){for(const[t,e]of this._pendingChanges)try{await this._processChange(e),this._pendingChanges.delete(t)}catch(e){console.error(`Failed to process change ${t}:`,e)}this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners()}}async _processChange(t){switch(t.type){case"favorite":"create"===t.action&&await this._uploadFavorites([t.data]);break;case"color":throw new Error(a);case"review":"create"===t.action&&await this._uploadReviews([t.data])}}_loadSyncStatus(){try{const t=(0,i.bi)(n.SYNC_STATUS_KEY);if(t){const e=JSON.parse(t);this._syncStatus=Object.assign(Object.assign(Object.assign({},this._syncStatus),e),{lastSync:e.lastSync?new Date(e.lastSync):null,lastFavoritesSync:e.lastFavoritesSync?new Date(e.lastFavoritesSync):null,lastColorsSync:e.lastColorsSync?new Date(e.lastColorsSync):null,lastVariablesSync:e.lastVariablesSync?new Date(e.lastVariablesSync):null,isSyncing:!1})}}catch(t){console.error("Failed to load sync status:",t)}}_saveSyncStatus(){var t,e,o,s,r,a,c;try{(0,i.FX)(n.SYNC_STATUS_KEY,JSON.stringify(Object.assign(Object.assign({},this._syncStatus),{lastSync:null===(t=this._syncStatus.lastSync)||void 0===t?void 0:t.toISOString(),lastFavoritesSync:null!==(o=null===(e=this._syncStatus.lastFavoritesSync)||void 0===e?void 0:e.toISOString())&&void 0!==o?o:null,lastColorsSync:null!==(r=null===(s=this._syncStatus.lastColorsSync)||void 0===s?void 0:s.toISOString())&&void 0!==r?r:null,lastVariablesSync:null!==(c=null===(a=this._syncStatus.lastVariablesSync)||void 0===a?void 0:a.toISOString())&&void 0!==c?c:null})))}catch(t){console.error("Failed to save sync status:",t)}}_loadPendingChanges(){try{const t=(0,i.bi)(n.PENDING_CHANGES_KEY);if(t){const e=JSON.parse(t);this._pendingChanges=new Map(Object.entries(e)),this._syncStatus.pendingChanges=this._pendingChanges.size}}catch(t){console.error("Failed to load pending changes:",t)}}_savePendingChanges(){try{const t=Object.fromEntries(this._pendingChanges);(0,i.FX)(n.PENDING_CHANGES_KEY,JSON.stringify(t))}catch(t){console.error("Failed to save pending changes:",t)}}_clearPendingChanges(){this._pendingChanges.clear();try{(0,i.Pw)(n.PENDING_CHANGES_KEY)}catch(t){console.error("Failed to clear pending changes:",t)}}}n.API_BASE="https://ultracard.io/wp-json/ultra-card/v1",n.SYNC_STATUS_KEY="ultra-card-sync-status",n.PENDING_CHANGES_KEY="ultra-card-pending-changes";const c=new n;o.d(e,["Q",0,c])},9286(t,e,o){function s(t){try{return localStorage.getItem(t)}catch(t){return null}}function i(t,e){try{return localStorage.setItem(t,e),!0}catch(t){return!1}}function r(t){try{localStorage.removeItem(t)}catch(t){}}o.d(e,{FX:()=>i,Pw:()=>r,bi:()=>s})},8716(t,e,o){async function s(t){const e="undefined"!=typeof navigator?navigator.clipboard:void 0;if(!(null==e?void 0:e.writeText))return i(t);try{return await e.writeText(t),!0}catch(e){return i(t)}}function i(t){if("undefined"==typeof document||!document.body)return!1;const e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="fixed",e.style.top="0",e.style.left="-9999px",e.style.opacity="0",document.body.appendChild(e);const o=document.getSelection(),s=o&&o.rangeCount>0?o.getRangeAt(0):null;try{return e.focus(),e.select(),e.setSelectionRange(0,e.value.length),document.execCommand("copy")}catch(t){return!1}finally{document.body.removeChild(e),o&&s&&(o.removeAllRanges(),o.addRange(s))}}o.d(e,{e:()=>s})}};