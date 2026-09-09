export const __webpack_esm_ids__=[1154,9286];export const __webpack_esm_modules__={5844(e,t,a){function s(e){if(null==e||""===e)return"Never";try{const t=e instanceof Date?e:new Date(e),a=t.getTime();if(Number.isNaN(a))return"Unknown";const s=Math.floor((Date.now()-a)/6e4);if(s<1)return"Just now";if(s<60)return`${s}m ago`;const i=Math.floor(s/60);return i<24?`${i}h ago`:t.toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(e){return"Unknown"}}function i(e){if(null==e||""===e)return"";try{const t=e instanceof Date?e:new Date(e);return Number.isNaN(t.getTime())?"":t.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch(e){return""}}a.d(t,{f:()=>s,s:()=>i})},1154(e,t,a){a.r(t),a.d(t,{HubVariablesTab:()=>v});var s=a(2618),i=a(4791),r=a(9286),n=a(3045);class o{constructor(){this._variables=[],this._listeners=new Set,this._backupVersion=0,this._loadFromStorage(),this._setupStorageListener()}getVariables(){return[...this._variables].filter(e=>!1!==e.isGlobal).sort((e,t)=>e.order-t.order)}getVariablesForCard(e){return[...this.getVariables(),...((null==e?void 0:e._customVariables)||[]).filter(e=>!0!==e.isGlobal).sort((e,t)=>e.order-t.order)]}getCardSpecificVariables(e){return((null==e?void 0:e._customVariables)||[]).filter(e=>!0!==e.isGlobal).sort((e,t)=>e.order-t.order)}getVariableByName(e){return this._variables.find(t=>t.name.toLowerCase()===e.toLowerCase()&&!1!==t.isGlobal)}getVariableByNameInContext(e,t){return((null==t?void 0:t._customVariables)||[]).find(t=>t.name.toLowerCase()===e.toLowerCase()&&!0!==t.isGlobal)||this.getVariableByName(e)}addVariable(e,t,a="state",s=!0,i,r=[]){const n=this._sanitizeVariableName(e);if(!n)return console.error("Invalid variable name. Use only letters, numbers, and underscores."),null;if(this._variables.some(e=>e.name.toLowerCase()===n.toLowerCase()))return console.error(`Variable with name "${n}" already exists as a global variable.`),null;if(r.some(e=>e.name.toLowerCase()===n.toLowerCase()))return console.error(`Variable with name "${n}" already exists as a card-specific variable.`),null;const o={id:this._generateId(),name:n,entity:t,value_type:a,attribute_name:"attribute"===a?i:void 0,order:this._getNextOrder(),created:(new Date).toISOString(),isGlobal:s};this._variables.push(o);const l=this._saveToStorage();return this._notifyListeners(),l&&this._broadcastChange(),o}createCardVariable(e,t,a="state",s=[],i){const r=this._sanitizeVariableName(e);if(!r)return console.error("Invalid variable name. Use only letters, numbers, and underscores."),null;if(s.some(e=>e.name.toLowerCase()===r.toLowerCase()))return console.error(`Variable with name "${r}" already exists in this card.`),null;if(this._variables.some(e=>e.name.toLowerCase()===r.toLowerCase()))return console.error(`Variable with name "${r}" already exists as a global variable.`),null;const n=s.length>0?Math.max(...s.map(e=>e.order))+1:0;return{id:this._generateId(),name:r,entity:t,value_type:a,attribute_name:"attribute"===a?i:void 0,order:n,created:(new Date).toISOString(),isGlobal:!1}}updateVariable(e,t,a=[]){const s=this._variables.findIndex(t=>t.id===e);if(-1===s)return!1;if(t.name){const s=this._sanitizeVariableName(t.name);if(!s)return console.error("Invalid variable name. Use only letters, numbers, and underscores."),!1;if(this._variables.some(t=>t.id!==e&&t.name.toLowerCase()===s.toLowerCase()))return console.error(`Variable with name "${s}" already exists as a global variable.`),!1;if(a.some(e=>e.name.toLowerCase()===s.toLowerCase()))return console.error(`Variable with name "${s}" already exists as a card-specific variable.`),!1;t.name=s}this._variables[s]=Object.assign(Object.assign({},this._variables[s]),t);const i=this._saveToStorage();return this._notifyListeners(),i&&this._broadcastChange(),!0}deleteVariable(e){const t=this._variables.findIndex(t=>t.id===e);if(-1===t)return!1;this._variables.splice(t,1);const a=this._saveToStorage();return this._notifyListeners(),a&&this._broadcastChange(),!0}reorderVariables(e){const t=new Set(this._variables.map(e=>e.id));if(!e.every(e=>t.has(e))||e.length!==this._variables.length)return!1;e.forEach((e,t)=>{const a=this._variables.find(t=>t.id===e);a&&(a.order=t)});const a=this._saveToStorage();return this._notifyListeners(),a&&this._broadcastChange(),!0}resolveVariable(e,t){const a=this.getVariableByName(e);return this._resolveVariableValue(a,t)}resolveVariableInContext(e,t,a){const s=this.getVariableByNameInContext(e,a);return this._resolveVariableValue(s,t)}_resolveVariableValue(e,t){if(!e)return null;switch(e.value_type){case"entity_id":default:return e.entity;case"state":return`states('${e.entity}')`;case"attribute":return e.attribute_name?`state_attr('${e.entity}', '${e.attribute_name}')`:e.entity}}resolveEntityField(e,t){if(!e)return e;if(e.startsWith("$")){const a=e.substring(1),s=this.getVariableByNameInContext(a,t);return s?s.entity:void 0}return e}isVariableReference(e){return!!e&&e.startsWith("$")}getVariableInfo(e,t){if(!e||!e.startsWith("$"))return{isVariable:!1};const a=e.substring(1),s=this.getVariableByNameInContext(a,t);return{isVariable:!0,variableName:e,resolvedEntity:null==s?void 0:s.entity,variable:s}}getVariableNames(){return this._variables.filter(e=>!1!==e.isGlobal).map(e=>e.name)}getVariableNamesInContext(e){return[...this.getVariableNames(),...((null==e?void 0:e._customVariables)||[]).filter(e=>!0!==e.isGlobal).map(e=>e.name)]}resolveConfigVariables(e){return this._deepResolveVariables(e,e)}resolveModuleVariables(e,t){return this._deepResolveVariables(e,t||{})}_deepResolveVariables(e,t){if(null==e)return e;if("string"==typeof e)return e.startsWith("$")&&this.resolveEntityField(e,t)||e;if(Array.isArray(e))return e.map(e=>this._deepResolveVariables(e,t));if("object"==typeof e){const a={};for(const s of Object.keys(e)){const i=e[s];this._isEntityFieldKey(s)&&"string"==typeof i&&i.startsWith("$")?a[s]=this.resolveEntityField(i,t)||i:a[s]=this._deepResolveVariables(i,t)}return a}return e}_isEntityFieldKey(e){return["entity","entity_id","entities","camera_entity","media_player","target_entity","source_entity","destination_entity"].includes(e)||e.endsWith("_entity")||e.endsWith("_entity_id")}subscribe(e){this._listeners.add(e);const t=this.getVariables();return e(t),()=>{this._listeners.delete(e)}}clearAll(){this._variables=[],this._saveToStorage(),this._notifyListeners(),this._broadcastChange()}importVariables(e,t=!0,a=[]){const s={imported:0,skipped:[]};if(!Array.isArray(e)||0===e.length)return s;if(t){const t=new Set(this._variables.map(e=>e.name.toLowerCase())),i=new Set(a.map(e=>e.name.toLowerCase()));e.forEach(e=>{const a=(null==e?void 0:e.name)||"unknown";if(!this._isValidVariable(e))return void s.skipped.push({name:a,reason:"invalid"});const r=e.name.toLowerCase();t.has(r)?s.skipped.push({name:e.name,reason:"global-exists"}):i.has(r)?s.skipped.push({name:e.name,reason:"card-conflict"}):(this._variables.push(Object.assign(Object.assign({},e),{id:e.id||this._generateId(),order:this._getNextOrder()})),t.add(r),s.imported++)})}else{const t=new Set(a.map(e=>e.name.toLowerCase())),i=e.filter(e=>{const a=(null==e?void 0:e.name)||"unknown";return this._isValidVariable(e)?!t.has(e.name.toLowerCase())||(s.skipped.push({name:e.name,reason:"card-conflict"}),!1):(s.skipped.push({name:a,reason:"invalid"}),!1)});this._variables=i.map((e,t)=>Object.assign(Object.assign({},e),{id:e.id||this._generateId(),order:t})),s.imported=i.length}return this._saveToStorage(),this._notifyListeners(),this._broadcastChange(),s}exportVariables(){return this.getVariables()}getVariablesForBackup(){return{variables:this.getVariables(),version:this._backupVersion}}needsRestoreFromBackup(){return this._isLocalStorageAvailable()?!(0,r.bi)(o.STORAGE_KEY)&&0===this._variables.length:0===this._variables.length}restoreFromBackup(e){if(this._variables.length>0)return!1;const t=Array.isArray(e)?e:e.variables;return!(!t||0===t.length||(this._variables=t.filter(e=>this._isValidVariable(e)&&!1!==e.isGlobal),this._saveToStorage(),this._notifyListeners(),0))}_requestBackup(){this._backupVersion++,window.dispatchEvent(new CustomEvent(o.BACKUP_EVENT,{detail:this.getVariablesForBackup()}))}subscribeToBackupRequests(e){const t=t=>{e(t.detail)};return window.addEventListener(o.BACKUP_EVENT,t),()=>window.removeEventListener(o.BACKUP_EVENT,t)}hasVariable(e){return this._variables.some(t=>t.name.toLowerCase()===e.toLowerCase()&&!1!==t.isGlobal)}hasVariableInContext(e,t){return!!((null==t?void 0:t._customVariables)||[]).some(t=>t.name.toLowerCase()===e.toLowerCase()&&!0!==t.isGlobal)||this.hasVariable(e)}isValidVariableName(e){return/^[a-zA-Z][a-zA-Z0-9_]*$/.test(e)}debugVariables(){n.v3&&console.log("=== Ultra Card Custom Variables Debug Info ==="),n.v3&&console.log("Storage Key:",o.STORAGE_KEY),n.v3&&console.log("Current Variables Count:",this._variables.length),n.v3&&console.log("Listeners Count:",this._listeners.size),n.v3&&console.log("LocalStorage Available:",this._isLocalStorageAvailable());try{const e=(0,r.bi)(o.STORAGE_KEY);if(n.v3&&console.log("Raw Storage Data:",e?`${e.length} characters`:"null"),e){const t=JSON.parse(e);n.v3&&console.log("Parsed Data Type:",Array.isArray(t)?"Array":typeof t),n.v3&&console.log("Parsed Data Length:",Array.isArray(t)?t.length:"N/A")}}catch(e){console.error("Storage Data Error:",e)}n.v3&&console.log("Variables List:",this._variables.map(e=>({id:e.id,name:e.name,entity:e.entity,value_type:e.value_type,order:e.order}))),n.v3&&console.log("==========================================")}_sanitizeVariableName(e){let t=e.trim();return t=t.replace(/[\s-]+/g,"_"),t=t.replace(/[^a-zA-Z0-9_]/g,""),/^[0-9]/.test(t)&&(t="v_"+t),t&&this.isValidVariableName(t)?t:""}_loadFromStorage(){try{if(!this._isLocalStorageAvailable())return void(this._variables=[]);const e=(0,r.bi)(o.STORAGE_KEY);if(e){const t=JSON.parse(e);Array.isArray(t)?this._variables=t.filter(this._isValidVariable.bind(this)):this._variables=[]}else this._variables=[]}catch(e){console.error("Failed to load custom variables from storage:",e),this._variables=[]}}_saveToStorage(){try{if(!this._isLocalStorageAvailable())return!1;const e=JSON.stringify(this._variables);return(0,r.FX)(o.STORAGE_KEY,e),!0}catch(e){return e instanceof DOMException&&e.code===DOMException.QUOTA_EXCEEDED_ERR?console.error('localStorage quota exceeded. Run: localStorage.removeItem("ultra-card-pending-backup")'):console.error("Failed to save custom variables:",e),!1}}_setupStorageListener(){window.addEventListener("storage",e=>{e.key===o.STORAGE_KEY&&(this._loadFromStorage(),this._notifyListeners())}),window.addEventListener(o.SYNC_EVENT,()=>{try{const e="__uc_test__";(0,r.FX)(e,"1"),(0,r.Pw)(e),this._loadFromStorage(),this._notifyListeners()}catch(e){}})}_broadcastChange(){window.dispatchEvent(new CustomEvent(o.SYNC_EVENT)),this._requestBackup()}_notifyListeners(){const e=this.getVariables();this._listeners.forEach(t=>{try{t(e)}catch(e){console.warn("Error notifying custom variables listener:",e)}})}_generateId(){return`var-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}_getNextOrder(){return 0===this._variables.length?0:Math.max(...this._variables.map(e=>e.order))+1}_isValidVariable(e){return e&&"string"==typeof e.id&&"string"==typeof e.name&&"string"==typeof e.entity&&"number"==typeof e.order&&["entity_id","state","attribute","full_object"].includes(e.value_type)&&this.isValidVariableName(e.name)}_isLocalStorageAvailable(){try{const e="__ultra_card_variables_storage_test__";return(0,r.FX)(e,"test"),(0,r.Pw)(e),!0}catch(e){return!1}}}o.STORAGE_KEY="ultra-card-custom-variables",o.SYNC_EVENT="ultra-card-custom-variables-changed",o.BACKUP_EVENT="ultra-card-variables-backup-needed";const l=new o;"undefined"!=typeof window&&(window.ucCustomVariablesService=l,window.debugUltraCardCustomVariables=()=>l.debugVariables());var c=a(9978),d=a(378),u=a(7568),h=a(821),p=a(5844),b=a(8716),y=function(e,t,a,s){var i,r=arguments.length,n=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(n=(r<3?i(n):r>3?i(t,a,n):i(t,a))||n);return r>3&&n&&Object.defineProperty(t,a,n),n};let v=class extends s.WF{constructor(){super(...arguments),this._variables=[],this._toastMsg="",this._search="",this._showAddForm=!1,this._newName="",this._newEntity="",this._newValueType="state",this._newAttribute="",this._editingId=null,this._editName="",this._editEntity="",this._editValueType="state",this._editAttribute="",this._cloudUser=null,this._syncStatus=null,this._syncing=!1}connectedCallback(){super.connectedCallback(),this._variables=l.getVariables(),this._unsub=l.subscribe(e=>{this._variables=e}),this._cloudUser=d.xd.getCurrentUser(),this._syncStatus=u.Q.getSyncStatus(),this._authUnsub=e=>{this._cloudUser=e},d.xd.addListener(this._authUnsub),this._syncUnsub=e=>{this._syncStatus=e},u.Q.addListener(this._syncUnsub)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._unsub)||void 0===e||e.call(this),this._authUnsub&&d.xd.removeListener(this._authUnsub),this._syncUnsub&&u.Q.removeListener(this._syncUnsub),this._toastTimer&&clearTimeout(this._toastTimer)}_goToAccount(){(0,h.nL)(this,{tab:"account"})}_formatSyncTime(e){return(0,p.f)(e)}async _syncNow(){if(!this._syncing){this._syncing=!0;try{await u.Q.syncVariables(),this._showToast("Variables synced ✓")}catch(e){this._showToast("Sync failed — try again")}finally{this._syncing=!1}}}_renderSyncBanner(){var e;return this._cloudUser?s.qy`
      <div class="sync-banner sync-banner-active">
        <ha-icon icon=${this._syncing?"mdi:cloud-sync":"mdi:cloud-check"}></ha-icon>
        <div class="sync-banner-body">
          <strong>${this._syncing?"Syncing…":"Cloud Sync Active"}</strong>
          <span>Last synced: ${this._formatSyncTime(null===(e=this._syncStatus)||void 0===e?void 0:e.lastVariablesSync)}</span>
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
            <span>Create a free account to keep your variables synced everywhere — change one entity and every card updates.</span>
          </div>
          <button class="sync-banner-btn" @click=${this._goToAccount}>Sign In</button>
        </div>
      `}_showToast(e){this._toastMsg=e,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toastMsg="",2e3)}async _copyVarRef(e){const t=await(0,b.e)(`$${e}`);this._showToast(t?`Copied $${e}`:"Could not copy — your browser blocked clipboard access")}_addVariable(){const e=this._newName.trim(),t=this._newEntity.trim();if(!e||!t)return;const a=l.addVariable(e,t,this._newValueType,!0,"attribute"===this._newValueType?this._newAttribute:void 0);a?(this._newName="",this._newEntity="",this._newValueType="state",this._newAttribute="",this._showAddForm=!1,this._showToast(`Added variable $${a.name}`)):this._showToast("Could not add variable (name may already exist)")}_deleteVariable(e){l.deleteVariable(e.id),this._showToast(`Deleted $${e.name}`)}_startEdit(e){this._editingId=e.id,this._editName=e.name,this._editEntity=e.entity,this._editValueType=e.value_type,this._editAttribute=e.attribute_name||""}_saveEdit(){this._editingId&&(l.updateVariable(this._editingId,{name:this._editName,entity:this._editEntity,value_type:this._editValueType,attribute_name:"attribute"===this._editValueType?this._editAttribute:void 0})?(this._editingId=null,this._showToast("Variable updated")):this._showToast("Could not update (name conflict?)"))}_cancelEdit(){this._editingId=null}_getResolvedValue(e){return this.hass&&l.resolveVariable(e.name,this.hass)||"—"}_getCurrentState(e){var t;if(!(null===(t=this.hass)||void 0===t?void 0:t.states))return"—";const a=this.hass.states[e.entity];if(!a)return"unavailable";if("attribute"===e.value_type&&e.attribute_name){const t=a.attributes[e.attribute_name];return null!=t?String(t):"—"}return a.state}_getTypeIcon(e){switch(e){case"entity_id":return"mdi:identifier";case"state":return"mdi:state-machine";case"attribute":return"mdi:code-braces";default:return"mdi:variable"}}_getFilteredVariables(){if(!this._search.trim())return this._variables;const e=this._search.toLowerCase().trim();return this._variables.filter(t=>t.name.toLowerCase().includes(e)||t.entity.toLowerCase().includes(e)||(t.attribute_name||"").toLowerCase().includes(e))}render(){if(0===this._variables.length&&!this._showAddForm)return s.qy`
        <div class="hub-tab-blurb">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <p><strong>Variables</strong> let you reference entities by name (e.g. <code>$living_room_temp</code>) in templates and module fields. These are global and shared across all cards; card-specific variables are in each card’s Card Settings tab.</p>
        </div>
        ${this._renderSyncBanner()}
        <div class="empty-state">
          <div class="empty-state-icon">
            <ha-icon icon="mdi:variable"></ha-icon>
          </div>
          <h3>No Variables</h3>
          <p>Create variables to use entity references like <code style="background: rgba(0,0,0,0.06); padding: 2px 6px; border-radius: 4px; font-size: 13px;">$my_sensor</code> across all your Ultra Cards.</p>
          <p class="empty-hint">Variables let you change one entity and update all cards at once</p>
          <button class="add-btn" style="margin-top: 16px;" @click=${()=>this._showAddForm=!0}>
            <ha-icon icon="mdi:plus"></ha-icon>
            Add Variable
          </button>
        </div>
      `;const e=this._getFilteredVariables();return s.qy`
      <div class="hub-tab-blurb">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <p><strong>Variables</strong> let you reference entities by name (e.g. <code>$living_room_temp</code>) in templates and module fields. These are global and shared across all cards; card-specific variables are in each card’s Card Settings tab.</p>
      </div>
      ${this._renderSyncBanner()}

      <!-- Header -->
      <div class="vars-header">
        <div class="vars-header-left">
          <span class="vars-count">
            <strong>${e.length}</strong> global variable${1!==e.length?"s":""}
          </span>
          ${this._variables.length>3?s.qy`
                <div class="search-box">
                  <ha-icon icon="mdi:magnify"></ha-icon>
                  <input
                    type="text"
                    placeholder="Search variables…"
                    .value=${this._search}
                    @input=${e=>this._search=e.target.value}
                  />
                </div>
              `:""}
        </div>
        <button class="add-btn" @click=${()=>this._showAddForm=!this._showAddForm}>
          <ha-icon icon=${this._showAddForm?"mdi:close":"mdi:plus"}></ha-icon>
          ${this._showAddForm?"Cancel":"Add Variable"}
        </button>
      </div>

      <!-- Add form -->
      ${this._showAddForm?this._renderAddForm():s.s6}

      <!-- Variables grid -->
      ${0===e.length&&this._search?s.qy`
            <div class="empty-state">
              <div class="empty-state-icon"><ha-icon icon="mdi:magnify-close"></ha-icon></div>
              <h3>No Results</h3>
              <p>No variables match "${this._search}"</p>
            </div>
          `:s.qy`
            <div class="vars-grid">
              ${e.map(e=>this._renderVariableCard(e))}
            </div>
          `}

      <div class="toast ${this._toastMsg?"show":""}">${this._toastMsg}</div>
    `}_renderAddForm(){const e=!this._newName.trim()||l.isValidVariableName(this._newName.trim()),t=this._newName.trim()&&l.hasVariable(this._newName.trim()),a=this._newName.trim()&&this._newEntity.trim()&&e&&!t;return s.qy`
      <div class="add-form">
        <h3><ha-icon icon="mdi:variable-box"></ha-icon> Add Global Variable</h3>

        <div class="form-row">
          <span class="form-label">Name</span>
          <input
            type="text"
            class="form-input"
            placeholder="e.g. living_room_temp"
            .value=${this._newName}
            @input=${e=>this._newName=e.target.value}
          />
        </div>
        <div class="form-hint">
          Use in cards as <strong>$${this._newName||"name"}</strong>. Letters, numbers, underscores only.
        </div>

        <div class="form-row">
          <span class="form-label">Entity</span>
          <input
            type="text"
            class="form-input"
            placeholder="e.g. sensor.living_room_temperature"
            .value=${this._newEntity}
            @input=${e=>this._newEntity=e.target.value}
          />
        </div>

        <div class="form-row">
          <span class="form-label">Value Type</span>
          <select
            class="form-select"
            .value=${this._newValueType}
            @change=${e=>this._newValueType=e.target.value}
          >
            <option value="state">State — returns states('entity')</option>
            <option value="entity_id">Entity ID — returns the entity ID directly</option>
            <option value="attribute">Attribute — returns a specific attribute</option>
          </select>
        </div>

        ${"attribute"===this._newValueType?s.qy`
              <div class="form-row">
                <span class="form-label">Attribute</span>
                <input
                  type="text"
                  class="form-input"
                  placeholder="e.g. temperature, friendly_name"
                  .value=${this._newAttribute}
                  @input=${e=>this._newAttribute=e.target.value}
                />
              </div>
            `:s.s6}

        ${t?s.qy`
              <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:rgba(244,67,54,0.08);border:1px solid rgba(244,67,54,0.2);border-radius:8px;margin-bottom:12px;font-size:12px;color:#f44336;">
                <ha-icon icon="mdi:alert-circle" style="--mdc-icon-size:16px;flex-shrink:0"></ha-icon>
                A variable named "$${this._newName}" already exists.
              </div>
            `:s.s6}

        <div class="form-actions">
          <button class="form-btn secondary" @click=${()=>this._showAddForm=!1}>Cancel</button>
          <button class="form-btn primary" ?disabled=${!a} @click=${this._addVariable}>
            <ha-icon icon="mdi:check"></ha-icon>
            Add Variable
          </button>
        </div>
      </div>
    `}_renderVariableCard(e){const t=this._editingId===e.id,a=this._getCurrentState(e);return s.qy`
      <div class="var-card ${t?"editing":""}">
        <div class="var-header">
          <div class="var-icon-wrap ${e.value_type}">
            <ha-icon icon=${this._getTypeIcon(e.value_type)}></ha-icon>
          </div>
          <div class="var-title-area">
            <h4 class="var-name">
              <span class="var-name-prefix">$</span><span class="var-name-text">${e.name}</span>
            </h4>
            <p class="var-subtitle">${e.entity}</p>
          </div>
          <div class="var-actions">
            <button class="copy-var-btn" title="Copy reference" @click=${()=>this._copyVarRef(e.name)}>
              <ha-icon icon="mdi:content-copy"></ha-icon>
              $${e.name}
            </button>
            ${t?s.s6:s.qy`
                  <button class="action-btn" title="Edit" @click=${()=>this._startEdit(e)}>
                    <ha-icon icon="mdi:pencil"></ha-icon>
                  </button>
                  <button class="action-btn delete" title="Delete" @click=${()=>this._deleteVariable(e)}>
                    <ha-icon icon="mdi:delete-outline"></ha-icon>
                  </button>
                `}
          </div>
        </div>

        ${t?s.qy`
              <div class="edit-section">
                <div class="edit-row">
                  <span class="edit-label">Name</span>
                  <input
                    type="text"
                    class="edit-input"
                    .value=${this._editName}
                    @input=${e=>this._editName=e.target.value}
                  />
                </div>
                <div class="edit-row">
                  <span class="edit-label">Entity</span>
                  <input
                    type="text"
                    class="edit-input"
                    .value=${this._editEntity}
                    @input=${e=>this._editEntity=e.target.value}
                  />
                </div>
                <div class="edit-row">
                  <span class="edit-label">Type</span>
                  <select
                    class="edit-select"
                    .value=${this._editValueType}
                    @change=${e=>this._editValueType=e.target.value}
                  >
                    <option value="state">State</option>
                    <option value="entity_id">Entity ID</option>
                    <option value="attribute">Attribute</option>
                  </select>
                </div>
                ${"attribute"===this._editValueType?s.qy`
                      <div class="edit-row">
                        <span class="edit-label">Attribute</span>
                        <input
                          type="text"
                          class="edit-input"
                          .value=${this._editAttribute}
                          @input=${e=>this._editAttribute=e.target.value}
                        />
                      </div>
                    `:s.s6}
                <div class="edit-row" style="justify-content: flex-end; gap: 6px; margin-top: 4px;">
                  <button class="action-btn" title="Save" @click=${this._saveEdit}>
                    <ha-icon icon="mdi:check"></ha-icon>
                  </button>
                  <button class="action-btn" title="Cancel" @click=${this._cancelEdit}>
                    <ha-icon icon="mdi:close"></ha-icon>
                  </button>
                </div>
              </div>
            `:s.qy`
              <div class="var-details">
                <div class="detail-row">
                  <span class="detail-label">Type</span>
                  <span class="type-badge ${e.value_type}">${e.value_type.replace("_"," ")}</span>
                </div>
                ${"attribute"===e.value_type&&e.attribute_name?s.qy`
                      <div class="detail-row">
                        <span class="detail-label">Attribute</span>
                        <span class="detail-value">${e.attribute_name}</span>
                      </div>
                    `:s.s6}
                <div class="detail-row">
                  <span class="detail-label">Current</span>
                  <span class="detail-value" title="${a}">${a}</span>
                </div>
              </div>

              <div class="resolved-value">
                <span class="resolved-label">Resolves to:</span>
                <span class="resolved-text">${this._getResolvedValue(e)}</span>
              </div>
            `}
      </div>
    `}};v.styles=[c.z,s.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
      }

      /* Header */
      .vars-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 20px;
        flex-wrap: wrap;
      }

      .vars-header-left {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
        min-width: 0;
      }

      .vars-count {
        font-size: 13px;
        color: var(--secondary-text-color);
        font-weight: 500;
        white-space: nowrap;
      }

      .vars-count strong {
        color: var(--primary-text-color);
      }

      .search-box {
        flex: 1;
        min-width: 150px;
        max-width: 280px;
        position: relative;
      }

      .search-box input {
        width: 100%;
        padding: 8px 14px 8px 36px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 10px;
        background: var(--ha-card-background, var(--card-background-color));
        color: var(--primary-text-color);
        font-size: 13px;
        outline: none;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }

      .search-box input:focus {
        border-color: var(--primary-color);
      }

      .search-box ha-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
        pointer-events: none;
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
        white-space: nowrap;
      }

      .add-btn:hover {
        filter: brightness(1.1);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      }

      .add-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      /* Add form */
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
        gap: 12px;
        margin-bottom: 14px;
      }

      .form-label {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        min-width: 80px;
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

      .form-select {
        flex: 1;
        padding: 10px 14px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 8px;
        background: var(--primary-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
        outline: none;
        box-sizing: border-box;
      }

      .form-hint {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: -6px;
        margin-bottom: 12px;
        padding-left: 92px;
      }

      .form-actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        margin-top: 20px;
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

      .form-btn ha-icon {
        --mdc-icon-size: 16px;
      }

      /* Variables list */
      .vars-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        gap: 16px;
      }

      @media (max-width: 600px) {
        .vars-grid {
          grid-template-columns: 1fr;
        }
      }

      .var-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
      }

      .var-card:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
        border-color: var(--primary-color);
      }

      .var-card.editing {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);
      }

      .var-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
      }

      .var-icon-wrap {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .var-icon-wrap.entity_id {
        background: linear-gradient(135deg, #2196f3, #42a5f5);
      }

      .var-icon-wrap.state {
        background: linear-gradient(135deg, #4caf50, #66bb6a);
      }

      .var-icon-wrap.attribute {
        background: linear-gradient(135deg, #ff9800, #ffb74d);
      }

      .var-icon-wrap ha-icon {
        --mdc-icon-size: 22px;
        color: white;
      }

      .var-title-area {
        flex: 1;
        min-width: 0;
      }

      .var-name {
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin: 0;
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .var-name-prefix {
        color: var(--primary-color);
        font-family: 'SF Mono', 'Fira Code', monospace;
      }

      .var-name-text {
        font-family: 'SF Mono', 'Fira Code', monospace;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .var-subtitle {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .var-actions {
        display: flex;
        gap: 4px;
        flex-shrink: 0;
      }

      /* Details section */
      .var-details {
        padding: 0 16px 14px;
      }

      .detail-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 0;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.04));
        font-size: 13px;
      }

      .detail-row:last-child {
        border-bottom: none;
      }

      .detail-label {
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .detail-value {
        color: var(--primary-text-color);
        font-family: 'SF Mono', 'Fira Code', monospace;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 200px;
        text-align: right;
      }

      .type-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.3px;
      }

      .type-badge.entity_id {
        background: rgba(33, 150, 243, 0.1);
        color: #2196f3;
      }

      .type-badge.state {
        background: rgba(76, 175, 80, 0.1);
        color: #4caf50;
      }

      .type-badge.attribute {
        background: rgba(255, 152, 0, 0.1);
        color: #ff9800;
      }

      /* Resolved value display */
      .resolved-value {
        padding: 10px 16px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.03);
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.04));
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
      }

      .resolved-label {
        color: var(--secondary-text-color);
        font-weight: 500;
        white-space: nowrap;
      }

      .resolved-text {
        flex: 1;
        font-family: 'SF Mono', 'Fira Code', monospace;
        color: var(--primary-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* Copy var name button */
      .copy-var-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        background: none;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 6px;
        color: var(--secondary-text-color);
        font-size: 11px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
        font-family: 'SF Mono', 'Fira Code', monospace;
      }

      .copy-var-btn:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
      }

      .copy-var-btn ha-icon {
        --mdc-icon-size: 12px;
      }

      /* Edit inline */
      .edit-section {
        padding: 14px 16px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.02);
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

      .edit-select {
        padding: 6px 10px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 6px;
        background: var(--primary-background-color);
        color: var(--primary-text-color);
        font-size: 13px;
        outline: none;
      }

      .edit-label {
        font-size: 11px;
        color: var(--secondary-text-color);
        font-weight: 500;
        min-width: 60px;
      }

      /* Sync banner styles are shared via panelStyles (.sync-banner*) */
    `],y([(0,i.MZ)({attribute:!1})],v.prototype,"hass",void 0),y([(0,i.wk)()],v.prototype,"_variables",void 0),y([(0,i.wk)()],v.prototype,"_toastMsg",void 0),y([(0,i.wk)()],v.prototype,"_search",void 0),y([(0,i.wk)()],v.prototype,"_showAddForm",void 0),y([(0,i.wk)()],v.prototype,"_newName",void 0),y([(0,i.wk)()],v.prototype,"_newEntity",void 0),y([(0,i.wk)()],v.prototype,"_newValueType",void 0),y([(0,i.wk)()],v.prototype,"_newAttribute",void 0),y([(0,i.wk)()],v.prototype,"_editingId",void 0),y([(0,i.wk)()],v.prototype,"_editName",void 0),y([(0,i.wk)()],v.prototype,"_editEntity",void 0),y([(0,i.wk)()],v.prototype,"_editValueType",void 0),y([(0,i.wk)()],v.prototype,"_editAttribute",void 0),y([(0,i.wk)()],v.prototype,"_cloudUser",void 0),y([(0,i.wk)()],v.prototype,"_syncStatus",void 0),y([(0,i.wk)()],v.prototype,"_syncing",void 0),v=y([(0,i.EM)("hub-variables-tab")],v)},7568(e,t,a){var s=a(378),i=a(9286);const r="ultra-card-reviews",n="Color sync is not available yet — your colors are saved on this device only.";class o{constructor(){this._syncStatus={isEnabled:!1,lastSync:null,isSyncing:!1,pendingChanges:0,conflicts:[],lastFavoritesSync:null,lastColorsSync:null,lastVariablesSync:null},this._listeners=new Set,this._pendingChanges=new Map,this._loadSyncStatus(),this._loadPendingChanges(),this._setupAuthListener()}getSyncStatus(){return Object.assign({},this._syncStatus)}async setSyncEnabled(e){this._syncStatus.isEnabled=e,this._saveSyncStatus(),this._notifyListeners(),e&&s.xd.isAuthenticated()&&await this.syncAll()}async syncAll(){if(!s.xd.isAuthenticated())throw new Error("Cannot sync: not authenticated");this._syncStatus.isSyncing=!0,this._notifyListeners();try{const[e,t,a,s]=await Promise.all([this.syncFavorites(),this.syncFavoriteColors(),this.syncReviews(),this.syncVariables()]);return this._syncStatus.lastSync=new Date,this._syncStatus.pendingChanges=0,this._clearPendingChanges(),{favorites:e,colors:t,reviews:a,variables:s}}finally{this._syncStatus.isSyncing=!1,this._saveSyncStatus(),this._notifyListeners()}}async syncFavorites(){if(!s.xd.isAuthenticated())throw new Error("Cannot sync favorites: not authenticated");const e={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const t=this._getLocalFavorites(),a=await this._fetchRemoteFavorites(),{merged:s,conflicts:i}=await this._mergeFavorites(t,a),r=await this._uploadFavorites(s.filter(e=>e._needsUpload)),n=await this._downloadFavorites(s.filter(e=>e._needsDownload));e.success=!0,e.synced=r.length+n.length,e.conflicts=i.length,this._syncStatus.conflicts=[...this._syncStatus.conflicts,...i],this._syncStatus.lastFavoritesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),console.log(`✅ Favorites sync completed: ${e.synced} synced, ${e.conflicts} conflicts`)}catch(t){console.error("❌ Favorites sync failed:",t),e.errors.push(t instanceof Error?t.message:"Unknown error")}return e}isColorSyncAvailable(){return!1}async syncFavoriteColors(){if(!s.xd.isAuthenticated())throw new Error("Cannot sync colors: not authenticated");return{success:!1,synced:0,conflicts:0,errors:[n],lastSync:(new Date).toISOString()}}async syncVariables(){const e={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{if(!s.xd.isAuthenticated())throw new Error("Not authenticated");const t=(0,i.bi)("ultra-card-custom-variables"),a=t?JSON.parse(t):[],r=await s.xd.authenticatedFetch(`${o.API_BASE}/custom-variables`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({variables:a})});if(r.ok){const t=await r.json();(null==t?void 0:t.variables)&&(0,i.FX)("ultra-card-custom-variables",JSON.stringify(t.variables)),e.success=!0,e.synced=a.length,this._syncStatus.lastVariablesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),console.log(`✅ Variables sync completed: ${e.synced} variables`)}else e.errors.push(`Variables sync failed: ${r.status} ${r.statusText}`),console.warn(`❌ Variables sync failed: ${r.status} ${r.statusText}`)}catch(t){const a=t instanceof Error?t.message:"Unknown error";console.warn("❌ Variables sync failed:",a),e.errors.push(a)}return e}async syncReviews(){if(!this._canSync())throw new Error("Cannot sync reviews: not authenticated");const e={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const t=this._getLocalReviews(),a=await this._fetchRemoteReviews(),{merged:s,conflicts:i}=await this._mergeReviews(t,a),r=await this._uploadReviews(s.filter(e=>e._needsUpload)),n=await this._downloadReviews(s.filter(e=>e._needsDownload));e.success=!1,e.errors.push("Review sync is not implemented yet."),e.synced=r.length+n.length,e.conflicts=i.length}catch(t){console.error("❌ Reviews sync failed:",t),e.errors.push(t instanceof Error?t.message:"Unknown error")}return e}queueChange(e,t,a){if("color"===e&&!this.isColorSyncAvailable())return;const s=`${e}-${t}-${Date.now()}`;this._pendingChanges.set(s,{type:e,action:t,data:a,timestamp:Date.now()}),this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners(),this._canSync()&&navigator.onLine&&this._processPendingChanges().catch(console.error)}async resolveConflict(e,t){switch(this._syncStatus.conflicts=this._syncStatus.conflicts.filter(t=>t!==e),t){case"local":await this._uploadConflictResolution(e,e.local);break;case"remote":await this._downloadConflictResolution(e,e.remote);break;case"merge":const t=await this._mergeConflictData(e);await this._uploadConflictResolution(e,t)}this._saveSyncStatus(),this._notifyListeners()}addListener(e){this._listeners.add(e)}removeListener(e){this._listeners.delete(e)}_canSync(){return this._syncStatus.isEnabled&&s.xd.isAuthenticated()}_setupAuthListener(){s.xd.addListener(e=>{e?(this._syncStatus.isEnabled=!0,this._saveSyncStatus()):(this._syncStatus.isEnabled=!1,this._syncStatus.conflicts=[],this._clearPendingChanges(),this._saveSyncStatus()),this._notifyListeners()})}_notifyListeners(){this._listeners.forEach(e=>{try{e(this._syncStatus)}catch(e){console.error("Error in sync listener:",e)}})}_getLocalFavorites(){try{const e=(0,i.bi)("ultra-card-favorites");return e?JSON.parse(e):[]}catch(e){return[]}}async _fetchRemoteFavorites(){const e=await s.xd.authenticatedFetch(`${o.API_BASE}/favorites`);if(!e.ok)throw new Error(`Failed to fetch favorites: ${e.statusText}`);return e.json()}async _uploadFavorites(e){const t=[];for(const a of e)try{const e=await s.xd.authenticatedFetch(`${o.API_BASE}/favorites`,{method:"POST",body:JSON.stringify({name:a.name,description:a.description,row_data:JSON.stringify(a.row),tags:a.tags})});e.ok&&t.push(await e.json())}catch(e){console.error("Failed to upload favorite:",e)}return t}async _downloadFavorites(e){const t=e.map(e=>{let t=null;try{t=e.row_data?JSON.parse(e.row_data):null}catch(e){t=null}return{id:e.id,name:e.name,description:e.description,row:t,created:e.created,tags:e.tags}});if(0===t.length)return[];const a=this._getLocalFavorites(),s=new Map(a.filter(e=>e&&"string"==typeof e.id).map(e=>[e.id,e]));for(const e of t)s.set(e.id,Object.assign(Object.assign({},s.get(e.id)),e));const r=Array.from(s.values());if(r.length<a.length)return console.error("[UltraCard] Favorites merge would drop entries; keeping local store untouched."),[];(0,i.FX)("ultra-card-favorites",JSON.stringify(r));try{window.dispatchEvent(new CustomEvent("ultra-card-favorites-changed"))}catch(e){}return t}async _mergeFavorites(e,t){const a=[],s=[],i=new Map(t.map(e=>[e.id,e])),r=new Map(e.map(e=>[e.id,e]));for(const t of e){const e=i.get(t.id);if(e){const i=new Date(t.created||0).getTime(),r=new Date(e.updated).getTime();Math.abs(i-r)>1e3&&s.push({type:"favorite",local:t,remote:e,field:"updated"}),a.push(i>r?t:Object.assign(Object.assign({},this._convertCloudFavorite(e)),{_needsDownload:i<r}))}else a.push(Object.assign(Object.assign({},t),{_needsUpload:!0}))}for(const e of t)r.has(e.id)||a.push(Object.assign(Object.assign({},this._convertCloudFavorite(e)),{_needsDownload:!0}));return{merged:a,conflicts:s}}_convertCloudFavorite(e){let t=null;try{e.row_data?t="string"==typeof e.row_data?JSON.parse(e.row_data):e.row_data:e.data&&(t=e.data)}catch(e){t=null}return{id:e.id,name:e.name,description:e.description,row:t,created:e.created,tags:e.tags}}_getLocalColors(){try{const e=(0,i.bi)("ultra-card-favorite-colors");return e?JSON.parse(e):[]}catch(e){return[]}}async _fetchRemoteColors(){const e=await s.xd.authenticatedFetch(`${o.API_BASE}/colors`);if(!e.ok)throw new Error(`Failed to fetch colors: ${e.statusText}`);return e.json()}async _uploadColors(e){return[]}async _downloadColors(e){return[]}async _mergeColors(e,t){return{merged:[],conflicts:[]}}static _toWordPressPresetId(e){return String(e).replace(/^wp-/,"")}async submitReview(e,t){if(!s.xd.isAuthenticated())throw new Error("Authentication required to submit reviews");const a=o._toWordPressPresetId(e);if(!/^\d+$/.test(a))throw new Error("This preset cannot be rated.");const i=await s.xd.authenticatedFetch(`${o.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:a,rating:t})});if(!i.ok){const e=await i.json().catch(()=>({message:"Submit failed"}));throw new Error(e.message||`HTTP ${i.status}`)}const r=await i.json();return this._saveLocalReview(r),r}async uploadPresetPhoto(e){if(!s.xd.isAuthenticated())throw new Error("Authentication required to upload photos");const t=new FormData;t.append("photo",e,e.name);const a=`${o.API_BASE}/media`,i=await s.xd.authenticatedFetch(a,{method:"POST",body:t});if(!i.ok){const e=await i.json().catch(()=>null),t=(null==e?void 0:e.data)&&"object"==typeof e.data&&null!==e.data&&"message"in e.data?String(e.data.message):"",a="string"==typeof(null==e?void 0:e.message)&&e.message||"string"==typeof(null==e?void 0:e.error)&&e.error||t||`Upload failed (HTTP ${i.status})`;throw new Error(a)}return i.json()}async submitPreset(e,t,a,i){var r;if(!s.xd.isAuthenticated())throw new Error("Authentication required to submit presets");const n=new FormData;n.append("name",e.name),n.append("description",e.description),n.append("category",e.category),n.append("shortcode",e.shortcode),(null===(r=e.tags)||void 0===r?void 0:r.length)&&n.append("tags",e.tags.join(",")),e.source&&n.append("source",e.source),e.integrations&&n.append("integrations",e.integrations),e.card_settings&&Object.keys(e.card_settings).length>0&&n.append("card_settings",JSON.stringify(e.card_settings)),e.custom_variables&&e.custom_variables.length>0&&n.append("custom_variables",JSON.stringify(e.custom_variables)),i&&i>0&&n.append("featured_image_id",String(i)),(null==a?void 0:a.length)?a.forEach(e=>n.append("photo_ids[]",String(e))):(null==t?void 0:t.length)&&t.forEach((e,t)=>n.append(`photos[${t}]`,e,e.name));const l=await s.xd.authenticatedFetch(`${o.API_BASE}/presets`,{method:"POST",body:n});if(!l.ok){const e=await l.json().catch(()=>({message:"Submit failed"}));throw new Error(e.message||`HTTP ${l.status}`)}return l.json()}async fetchPresetCategories(){try{const e=await fetch(`${o.API_BASE}/preset-categories`);if(e.ok){const t=await e.json();if(Array.isArray(t)&&t.length>0)return t}}catch(e){}return[{value:"layout",label:"Layout"},{value:"content",label:"Content"},{value:"data",label:"Data"},{value:"interactive",label:"Controls"},{value:"input",label:"Inputs"},{value:"media",label:"Media"}]}getUserReview(e){const t=s.xd.getCurrentUser();if(!t)return null;const a=o._toWordPressPresetId(e),i=Number(t.id),r=this._getLocalReviews().find(e=>String(e.preset_id)===a&&Number(e.user_id)===i);return null!=r?r:null}async loadUserReviewsFromServer(){if(s.xd.isAuthenticated())try{const e=await this._fetchRemoteReviews(),t=s.xd.getCurrentUser();if(!t)return;const a=Number(t.id);for(const t of e)Number(t.user_id)===a&&this._saveLocalReview(Object.assign(Object.assign({},t),{preset_id:String(t.preset_id)}))}catch(e){console.warn("Could not load user reviews from server:",e)}}_getLocalReviews(){try{const e=(0,i.bi)(r);return e?JSON.parse(e):[]}catch(e){return[]}}_saveLocalReview(e){const t=this._getLocalReviews(),a=String(e.preset_id),s=Number(e.user_id),n=Object.assign(Object.assign({},e),{preset_id:a}),o=t.findIndex(e=>String(e.preset_id)===a&&Number(e.user_id)===s);o>=0?t[o]=n:t.push(n);try{(0,i.FX)(r,JSON.stringify(t))}catch(e){console.error("Failed to save review locally:",e)}}async _fetchRemoteReviews(){const e=await s.xd.authenticatedFetch(`${o.API_BASE}/reviews`);if(!e.ok)throw new Error(`Failed to fetch reviews: ${e.statusText}`);return e.json()}async _uploadReviews(e){const t=[];for(const a of e)try{const e=await s.xd.authenticatedFetch(`${o.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:a.preset_id,rating:a.rating,comment:a.comment})});if(e.ok){const a=await e.json();t.push(a),this._saveLocalReview(a)}}catch(e){console.error("Failed to upload review:",e)}return t}async _downloadReviews(e){return[]}async _mergeReviews(e,t){return{merged:[],conflicts:[]}}async _uploadConflictResolution(e,t){}async _downloadConflictResolution(e,t){}async _mergeConflictData(e){return e.local}async _processPendingChanges(){if(0!==this._pendingChanges.size){for(const[e,t]of this._pendingChanges)try{await this._processChange(t),this._pendingChanges.delete(e)}catch(t){console.error(`Failed to process change ${e}:`,t)}this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners()}}async _processChange(e){switch(e.type){case"favorite":"create"===e.action&&await this._uploadFavorites([e.data]);break;case"color":throw new Error(n);case"review":"create"===e.action&&await this._uploadReviews([e.data])}}_loadSyncStatus(){try{const e=(0,i.bi)(o.SYNC_STATUS_KEY);if(e){const t=JSON.parse(e);this._syncStatus=Object.assign(Object.assign(Object.assign({},this._syncStatus),t),{lastSync:t.lastSync?new Date(t.lastSync):null,lastFavoritesSync:t.lastFavoritesSync?new Date(t.lastFavoritesSync):null,lastColorsSync:t.lastColorsSync?new Date(t.lastColorsSync):null,lastVariablesSync:t.lastVariablesSync?new Date(t.lastVariablesSync):null,isSyncing:!1})}}catch(e){console.error("Failed to load sync status:",e)}}_saveSyncStatus(){var e,t,a,s,r,n,l;try{(0,i.FX)(o.SYNC_STATUS_KEY,JSON.stringify(Object.assign(Object.assign({},this._syncStatus),{lastSync:null===(e=this._syncStatus.lastSync)||void 0===e?void 0:e.toISOString(),lastFavoritesSync:null!==(a=null===(t=this._syncStatus.lastFavoritesSync)||void 0===t?void 0:t.toISOString())&&void 0!==a?a:null,lastColorsSync:null!==(r=null===(s=this._syncStatus.lastColorsSync)||void 0===s?void 0:s.toISOString())&&void 0!==r?r:null,lastVariablesSync:null!==(l=null===(n=this._syncStatus.lastVariablesSync)||void 0===n?void 0:n.toISOString())&&void 0!==l?l:null})))}catch(e){console.error("Failed to save sync status:",e)}}_loadPendingChanges(){try{const e=(0,i.bi)(o.PENDING_CHANGES_KEY);if(e){const t=JSON.parse(e);this._pendingChanges=new Map(Object.entries(t)),this._syncStatus.pendingChanges=this._pendingChanges.size}}catch(e){console.error("Failed to load pending changes:",e)}}_savePendingChanges(){try{const e=Object.fromEntries(this._pendingChanges);(0,i.FX)(o.PENDING_CHANGES_KEY,JSON.stringify(e))}catch(e){console.error("Failed to save pending changes:",e)}}_clearPendingChanges(){this._pendingChanges.clear();try{(0,i.Pw)(o.PENDING_CHANGES_KEY)}catch(e){console.error("Failed to clear pending changes:",e)}}}o.API_BASE="https://ultracard.io/wp-json/ultra-card/v1",o.SYNC_STATUS_KEY="ultra-card-sync-status",o.PENDING_CHANGES_KEY="ultra-card-pending-changes";const l=new o;a.d(t,["Q",0,l])},9286(e,t,a){function s(e){try{return localStorage.getItem(e)}catch(e){return null}}function i(e,t){try{return localStorage.setItem(e,t),!0}catch(e){return!1}}function r(e){try{localStorage.removeItem(e)}catch(e){}}a.d(t,{FX:()=>i,Pw:()=>r,bi:()=>s})},8716(e,t,a){async function s(e){const t="undefined"!=typeof navigator?navigator.clipboard:void 0;if(!(null==t?void 0:t.writeText))return i(e);try{return await t.writeText(e),!0}catch(t){return i(e)}}function i(e){if("undefined"==typeof document||!document.body)return!1;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="0",t.style.left="-9999px",t.style.opacity="0",document.body.appendChild(t);const a=document.getSelection(),s=a&&a.rangeCount>0?a.getRangeAt(0):null;try{return t.focus(),t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy")}catch(e){return!1}finally{document.body.removeChild(t),a&&s&&(a.removeAllRanges(),a.addRange(s))}}a.d(t,{e:()=>s})}};