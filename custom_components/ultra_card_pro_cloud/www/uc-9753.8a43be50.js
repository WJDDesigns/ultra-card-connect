export const __webpack_esm_ids__=[9753];export const __webpack_esm_modules__={5844(e,t,a){function i(e){if(null==e||""===e)return"Never";try{const t=e instanceof Date?e:new Date(e),a=t.getTime();if(Number.isNaN(a))return"Unknown";const i=Math.floor((Date.now()-a)/6e4);if(i<1)return"Just now";if(i<60)return`${i}m ago`;const r=Math.floor(i/60);return r<24?`${r}h ago`:t.toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(e){return"Unknown"}}function r(e){if(null==e||""===e)return"";try{const t=e instanceof Date?e:new Date(e);return Number.isNaN(t.getTime())?"":t.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch(e){return""}}a.d(t,{f:()=>i,s:()=>r})},9753(e,t,a){a.r(t),a.d(t,{HubVariablesTab:()=>m});var i=a(2618),r=a(4791),s=a(9286),o=a(3045);class n{constructor(){this._haSyncStarted=!1,this._pushTimer=null,this._variables=[],this._listeners=new Set,this._backupVersion=0,this._loadFromStorage(),this._setupStorageListener()}getVariables(){return[...this._variables].filter(e=>!1!==e.isGlobal).sort((e,t)=>e.order-t.order)}getVariablesForCard(e){return[...this.getVariables(),...((null==e?void 0:e._customVariables)||[]).filter(e=>!0!==e.isGlobal).sort((e,t)=>e.order-t.order)]}getCardSpecificVariables(e){return((null==e?void 0:e._customVariables)||[]).filter(e=>!0!==e.isGlobal).sort((e,t)=>e.order-t.order)}getVariableByName(e){return this._variables.find(t=>t.name.toLowerCase()===e.toLowerCase()&&!1!==t.isGlobal)}getVariableByNameInContext(e,t){return((null==t?void 0:t._customVariables)||[]).find(t=>t.name.toLowerCase()===e.toLowerCase()&&!0!==t.isGlobal)||this.getVariableByName(e)}addVariable(e,t,a="state",i=!0,r,s=[],o){const n=this._sanitizeVariableName(e);if(!n)return console.error("Invalid variable name. Use only letters, numbers, and underscores."),null;if(this._variables.some(e=>e.name.toLowerCase()===n.toLowerCase()))return console.error(`Variable with name "${n}" already exists as a global variable.`),null;if(s.some(e=>e.name.toLowerCase()===n.toLowerCase()))return console.error(`Variable with name "${n}" already exists as a card-specific variable.`),null;const l=Object.assign({id:this._generateId(),name:n,entity:t,value_type:a,attribute_name:"attribute"===a?r:void 0,order:this._getNextOrder(),created:(new Date).toISOString(),isGlobal:i},(null==o?void 0:o.trim())?{group:o.trim()}:{});this._variables.push(l);const c=this._saveToStorage();return this._notifyListeners(),c&&this._broadcastChange(),l}createCardVariable(e,t,a="state",i=[],r){const s=this._sanitizeVariableName(e);if(!s)return console.error("Invalid variable name. Use only letters, numbers, and underscores."),null;if(i.some(e=>e.name.toLowerCase()===s.toLowerCase()))return console.error(`Variable with name "${s}" already exists in this card.`),null;if(this._variables.some(e=>e.name.toLowerCase()===s.toLowerCase()))return console.error(`Variable with name "${s}" already exists as a global variable.`),null;const o=i.length>0?Math.max(...i.map(e=>e.order))+1:0;return{id:this._generateId(),name:s,entity:t,value_type:a,attribute_name:"attribute"===a?r:void 0,order:o,created:(new Date).toISOString(),isGlobal:!1}}updateVariable(e,t,a=[]){var i;const r=this._variables.findIndex(t=>t.id===e);if(-1===r)return!1;if(t.name){const i=this._sanitizeVariableName(t.name);if(!i)return console.error("Invalid variable name. Use only letters, numbers, and underscores."),!1;if(this._variables.some(t=>t.id!==e&&t.name.toLowerCase()===i.toLowerCase()))return console.error(`Variable with name "${i}" already exists as a global variable.`),!1;if(a.some(e=>e.name.toLowerCase()===i.toLowerCase()))return console.error(`Variable with name "${i}" already exists as a card-specific variable.`),!1;t.name=i}"group"in t&&(t.group=(null===(i=t.group)||void 0===i?void 0:i.trim())||void 0),this._variables[r]=Object.assign(Object.assign({},this._variables[r]),t);const s=this._saveToStorage();return this._notifyListeners(),s&&this._broadcastChange(),!0}deleteVariable(e){const t=this._variables.findIndex(t=>t.id===e);if(-1===t)return!1;this._variables.splice(t,1);const a=this._saveToStorage();return this._notifyListeners(),a&&this._broadcastChange(),!0}reorderVariables(e){const t=new Set(this._variables.map(e=>e.id));if(!e.every(e=>t.has(e))||e.length!==this._variables.length)return!1;e.forEach((e,t)=>{const a=this._variables.find(t=>t.id===e);a&&(a.order=t)});const a=this._saveToStorage();return this._notifyListeners(),a&&this._broadcastChange(),!0}resolveVariable(e,t){const a=this.getVariableByName(e);return this._resolveVariableValue(a,t)}resolveVariableInContext(e,t,a){const i=this.getVariableByNameInContext(e,a);return this._resolveVariableValue(i,t)}_resolveVariableValue(e,t){if(!e)return null;switch(e.value_type){case"entity_id":default:return e.entity;case"state":return`states('${e.entity}')`;case"attribute":return e.attribute_name?`state_attr('${e.entity}', '${e.attribute_name}')`:e.entity}}resolveEntityField(e,t){if(!e)return e;if(e.startsWith("$")){const a=e.substring(1),i=this.getVariableByNameInContext(a,t);return i?i.entity:void 0}return e}isVariableReference(e){return!!e&&e.startsWith("$")}getVariableInfo(e,t){if(!e||!e.startsWith("$"))return{isVariable:!1};const a=e.substring(1),i=this.getVariableByNameInContext(a,t);return{isVariable:!0,variableName:e,resolvedEntity:null==i?void 0:i.entity,variable:i}}getVariableNames(){return this._variables.filter(e=>!1!==e.isGlobal).map(e=>e.name)}getVariableNamesInContext(e){return[...this.getVariableNames(),...((null==e?void 0:e._customVariables)||[]).filter(e=>!0!==e.isGlobal).map(e=>e.name)]}resolveConfigVariables(e){return this._deepResolveVariables(e,e)}resolveModuleVariables(e,t){return this._deepResolveVariables(e,t||{})}_deepResolveVariables(e,t){if(null==e)return e;if("string"==typeof e)return e.startsWith("$")&&this.resolveEntityField(e,t)||e;if(Array.isArray(e)){let a=null;for(let i=0;i<e.length;i++){const r=this._deepResolveVariables(e[i],t);r===e[i]||a||(a=e.slice(0,i)),a&&a.push(r)}return null!=a?a:e}if("object"==typeof e){let a=null;for(const i of Object.keys(e)){const r=e[i],s=this._isEntityFieldKey(i)&&"string"==typeof r&&r.startsWith("$")?this.resolveEntityField(r,t)||r:this._deepResolveVariables(r,t);s===r||a||(a=Object.assign({},e)),a&&(a[i]=s)}return null!=a?a:e}return e}_isEntityFieldKey(e){return["entity","entity_id","entities","camera_entity","media_player","target_entity","source_entity","destination_entity"].includes(e)||e.endsWith("_entity")||e.endsWith("_entity_id")}subscribe(e){this._listeners.add(e);const t=this.getVariables();return e(t),()=>{this._listeners.delete(e)}}clearAll(){this._variables=[],this._saveToStorage(),this._notifyListeners(),this._broadcastChange()}importVariables(e,t=!0,a=[]){const i={imported:0,skipped:[]};if(!Array.isArray(e)||0===e.length)return i;if(t){const t=new Set(this._variables.map(e=>e.name.toLowerCase())),r=new Set(a.map(e=>e.name.toLowerCase()));e.forEach(e=>{const a=(null==e?void 0:e.name)||"unknown";if(!this._isValidVariable(e))return void i.skipped.push({name:a,reason:"invalid"});const s=e.name.toLowerCase();t.has(s)?i.skipped.push({name:e.name,reason:"global-exists"}):r.has(s)?i.skipped.push({name:e.name,reason:"card-conflict"}):(this._variables.push(Object.assign(Object.assign({},e),{id:e.id||this._generateId(),order:this._getNextOrder()})),t.add(s),i.imported++)})}else{const t=new Set(a.map(e=>e.name.toLowerCase())),r=e.filter(e=>{const a=(null==e?void 0:e.name)||"unknown";return this._isValidVariable(e)?!t.has(e.name.toLowerCase())||(i.skipped.push({name:e.name,reason:"card-conflict"}),!1):(i.skipped.push({name:a,reason:"invalid"}),!1)});this._variables=r.map((e,t)=>Object.assign(Object.assign({},e),{id:e.id||this._generateId(),order:t})),i.imported=r.length}return this._saveToStorage(),this._notifyListeners(),this._broadcastChange(),i}exportVariables(){return this.getVariables()}getVariablesForBackup(){return{variables:this.getVariables(),version:this._backupVersion}}needsRestoreFromBackup(){return this._isLocalStorageAvailable()?!(0,s.bi)(n.STORAGE_KEY)&&0===this._variables.length:0===this._variables.length}restoreFromBackup(e){if(this._variables.length>0)return!1;const t=Array.isArray(e)?e:e.variables;return!(!t||0===t.length||(this._variables=t.filter(e=>this._isValidVariable(e)&&!1!==e.isGlobal),this._saveToStorage(0),this._notifyListeners(),0))}_requestBackup(){this._backupVersion++,window.dispatchEvent(new CustomEvent(n.BACKUP_EVENT,{detail:this.getVariablesForBackup()}))}subscribeToBackupRequests(e){const t=t=>{e(t.detail)};return window.addEventListener(n.BACKUP_EVENT,t),()=>window.removeEventListener(n.BACKUP_EVENT,t)}hasVariable(e){return this._variables.some(t=>t.name.toLowerCase()===e.toLowerCase()&&!1!==t.isGlobal)}hasVariableInContext(e,t){return!!((null==t?void 0:t._customVariables)||[]).some(t=>t.name.toLowerCase()===e.toLowerCase()&&!0!==t.isGlobal)||this.hasVariable(e)}isValidVariableName(e){return/^[a-zA-Z][a-zA-Z0-9_]*$/.test(e)}debugVariables(){o.v&&console.log("=== Ultra Card Custom Variables Debug Info ==="),o.v&&console.log("Storage Key:",n.STORAGE_KEY),o.v&&console.log("Current Variables Count:",this._variables.length),o.v&&console.log("Listeners Count:",this._listeners.size),o.v&&console.log("LocalStorage Available:",this._isLocalStorageAvailable());try{const e=(0,s.bi)(n.STORAGE_KEY);if(o.v&&console.log("Raw Storage Data:",e?`${e.length} characters`:"null"),e){const t=JSON.parse(e);o.v&&o.v&&console.log("Parsed Data Type:",Array.isArray(t)?"Array":typeof t),o.v&&o.v&&console.log("Parsed Data Length:",Array.isArray(t)?t.length:"N/A")}}catch(e){console.error("Storage Data Error:",e)}o.v&&o.v&&console.log("Variables List:",this._variables.map(e=>({id:e.id,name:e.name,entity:e.entity,value_type:e.value_type,order:e.order}))),o.v&&console.log("==========================================")}_sanitizeVariableName(e){let t=e.trim();return t=t.replace(/[\s-]+/g,"_"),t=t.replace(/[^a-zA-Z0-9_]/g,""),/^[0-9]/.test(t)&&(t="v_"+t),t&&this.isValidVariableName(t)?t:""}syncWithHomeAssistant(e){(null==e?void 0:e.callWS)&&(this._hass=e,this._haSyncStarted||(this._haSyncStarted=!0,e.callWS({type:"frontend/get_user_data",key:n.USER_DATA_KEY}).then(e=>{const t=null==e?void 0:e.value,a=Number(null==t?void 0:t.updated)||0,i=this._getLocalUpdated();if(t&&Array.isArray(t.variables)&&a>i)this._variables=t.variables.filter(e=>this._isValidVariable(e)&&!1!==e.isGlobal),this._saveToStorage(a),this._notifyListeners(),window.dispatchEvent(new CustomEvent(n.SYNC_EVENT));else if(this._variables.length>0&&(!t||i>a)){const e=i||Date.now();(0,s.FX)(n.UPDATED_KEY,String(e)),this._schedulePush(e)}}).catch(()=>{})))}_getLocalUpdated(){return Number((0,s.bi)(n.UPDATED_KEY))||0}_schedulePush(e){this._pushTimer&&clearTimeout(this._pushTimer),this._pushTimer=setTimeout(()=>{var t;this._pushTimer=null,null===(t=this._hass)||void 0===t||t.callWS({type:"frontend/set_user_data",key:n.USER_DATA_KEY,value:{variables:this.getVariables(),updated:e}}).catch(()=>{})},500)}_loadFromStorage(){try{if(!this._isLocalStorageAvailable())return void(this._variables=[]);const e=(0,s.bi)(n.STORAGE_KEY);if(e){const t=JSON.parse(e);Array.isArray(t)?this._variables=t.filter(this._isValidVariable.bind(this)):this._variables=[]}else this._variables=[]}catch(e){console.error("Failed to load custom variables from storage:",e),this._variables=[]}}_saveToStorage(e){const t=null!=e?e:Date.now();void 0===e&&this._schedulePush(t);try{if(!this._isLocalStorageAvailable())return!1;const e=JSON.stringify(this._variables);return(0,s.FX)(n.STORAGE_KEY,e),(0,s.FX)(n.UPDATED_KEY,String(t)),!0}catch(e){return e instanceof DOMException&&e.code===DOMException.QUOTA_EXCEEDED_ERR?console.error('localStorage quota exceeded. Run: localStorage.removeItem("ultra-card-pending-backup")'):console.error("Failed to save custom variables:",e),!1}}_setupStorageListener(){window.addEventListener("storage",e=>{e.key===n.STORAGE_KEY&&(this._loadFromStorage(),this._notifyListeners())}),window.addEventListener(n.SYNC_EVENT,()=>{try{const e="__uc_test__";(0,s.FX)(e,"1"),(0,s.Pw)(e),this._loadFromStorage(),this._notifyListeners()}catch(e){}})}_broadcastChange(){window.dispatchEvent(new CustomEvent(n.SYNC_EVENT)),this._requestBackup()}_notifyListeners(){const e=this.getVariables();this._listeners.forEach(t=>{try{t(e)}catch(e){console.warn("Error notifying custom variables listener:",e)}})}_generateId(){return`var-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}_getNextOrder(){return 0===this._variables.length?0:Math.max(...this._variables.map(e=>e.order))+1}_isValidVariable(e){return e&&"string"==typeof e.id&&"string"==typeof e.name&&"string"==typeof e.entity&&"number"==typeof e.order&&["entity_id","state","attribute","full_object"].includes(e.value_type)&&this.isValidVariableName(e.name)}_isLocalStorageAvailable(){try{const e="__ultra_card_variables_storage_test__";return(0,s.FX)(e,"test"),(0,s.Pw)(e),!0}catch(e){return!1}}}n.STORAGE_KEY="ultra-card-custom-variables",n.SYNC_EVENT="ultra-card-custom-variables-changed",n.UPDATED_KEY="ultra-card-custom-variables-updated",n.USER_DATA_KEY="ultra-card-custom-variables",n.BACKUP_EVENT="ultra-card-variables-backup-needed";const l=new n;"undefined"!=typeof window&&(window.ucCustomVariablesService=l,o.v&&(window.debugUltraCardCustomVariables=()=>l.debugVariables()));var c=a(9978),d=a(378),u=a(7568),h=a(821),p=a(5844),v=a(8716),b=function(e,t,a,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(o=(s<3?r(o):s>3?r(t,a,o):r(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o};let g=class extends i.WF{constructor(){super(...arguments),this.value="",this.placeholder="Search entities…",this._open=!1,this._active=-1}_matches(){var e,t,a;const i=null===(e=this.hass)||void 0===e?void 0:e.states;if(!i)return[];const r=this.value.toLowerCase().trim().split(/\s+/).filter(Boolean),s=[];for(const e of Object.keys(i).sort()){const o=i[e],n=String(null!==(a=null===(t=o.attributes)||void 0===t?void 0:t.friendly_name)&&void 0!==a?a:""),l=`${e} ${n}`.toLowerCase();if(r.every(e=>l.includes(e))&&(s.push({id:e,name:n,state:o.state}),s.length>=40))break}return s}_set(e){this.value=e,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e},bubbles:!0,composed:!0}))}_pick(e){this._set(e),this._open=!1,this._active=-1}_onKey(e,t){"ArrowDown"===e.key?(e.preventDefault(),this._open=!0,this._active=Math.min(t.length-1,this._active+1)):"ArrowUp"===e.key?(e.preventDefault(),this._active=Math.max(0,this._active-1)):"Enter"===e.key&&this._open&&t[this._active]?(e.preventDefault(),this._pick(t[this._active].id)):"Escape"===e.key&&(this._open=!1)}render(){const e=this._open?this._matches():[];return i.qy`
      <ha-icon class="search-icon" icon="mdi:magnify"></ha-icon>
      <input
        type="text"
        autocomplete="off"
        spellcheck="false"
        role="combobox"
        aria-expanded=${this._open?"true":"false"}
        .value=${this.value}
        placeholder=${this.placeholder}
        @focus=${()=>this._open=!0}
        @blur=${()=>setTimeout(()=>this._open=!1,150)}
        @input=${e=>{this._open=!0,this._active=-1,this._set(e.target.value)}}
        @keydown=${t=>this._onKey(t,e)}
      />
      ${this._open?i.qy`
            <ul class="list" role="listbox">
              ${0===e.length?i.qy`<li class="empty">No matching entities</li>`:e.map((e,t)=>{var a;return i.qy`
                      <li
                        class="item ${t===this._active?"active":""}"
                        role="option"
                        aria-selected=${t===this._active?"true":"false"}
                        @mousedown=${t=>{t.preventDefault(),this._pick(e.id)}}
                      >
                        ${(null===(a=this.hass)||void 0===a?void 0:a.states[e.id])?i.qy`<ha-state-icon
                              .hass=${this.hass}
                              .stateObj=${this.hass.states[e.id]}
                            ></ha-state-icon>`:i.s6}
                        <span class="text">
                          <span class="name">${e.name||e.id}</span>
                          ${e.name?i.qy`<span class="id">${e.id}</span>`:i.s6}
                        </span>
                        <span class="state">${e.state}</span>
                      </li>
                    `})}
            </ul>
          `:i.s6}
    `}};g.styles=i.AH`
    :host {
      display: block;
      position: relative;
      flex: 1;
      min-width: 0;
    }
    input {
      width: 100%;
      box-sizing: border-box;
      font: inherit;
      font-size: 13px;
      padding: 8px 10px 8px 32px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      background: var(--uc-entity-search-bg, var(--secondary-background-color, transparent));
      color: var(--primary-text-color);
      outline: none;
    }
    input:focus {
      border-color: var(--primary-color);
    }
    .search-icon {
      position: absolute;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
      pointer-events: none;
    }
    .list {
      position: absolute;
      z-index: 20;
      left: 0;
      right: 0;
      top: calc(100% + 4px);
      max-height: 280px;
      overflow-y: auto;
      margin: 0;
      padding: 4px;
      list-style: none;
      border-radius: 10px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      background: var(--card-background-color, #1f1f1f);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }
    .item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px 8px;
      border-radius: 6px;
      cursor: pointer;
    }
    .item.active,
    .item:hover {
      background: color-mix(in srgb, var(--primary-color) 14%, transparent);
    }
    .item ha-state-icon,
    .item ha-icon {
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }
    .text {
      display: flex;
      flex-direction: column;
      min-width: 0;
      flex: 1;
    }
    .name,
    .id {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .name {
      font-size: 13px;
      color: var(--primary-text-color);
    }
    .id {
      font-size: 11px;
      color: var(--secondary-text-color);
      font-family: var(--code-font-family, monospace);
    }
    .state {
      font-size: 11px;
      color: var(--secondary-text-color);
      flex-shrink: 0;
      max-width: 80px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .empty {
      padding: 8px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
  `,b([(0,r.MZ)({attribute:!1})],g.prototype,"hass",void 0),b([(0,r.MZ)({type:String})],g.prototype,"value",void 0),b([(0,r.MZ)({type:String})],g.prototype,"placeholder",void 0),b([(0,r.wk)()],g.prototype,"_open",void 0),b([(0,r.wk)()],g.prototype,"_active",void 0),g=b([(0,r.EM)("uc-entity-search")],g);var y=function(e,t,a,i){var r,s=arguments.length,o=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(o=(s<3?r(o):s>3?r(t,a,o):r(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o};const _="\0none";let m=class extends i.WF{constructor(){super(...arguments),this._variables=[],this._toastMsg="",this._search="",this._showAddForm=!1,this._newName="",this._newEntity="",this._newValueType="state",this._newAttribute="",this._newGroup="",this._groupFilter="",this._editingId=null,this._editName="",this._editEntity="",this._editValueType="state",this._editAttribute="",this._editGroup="",this._cloudUser=null,this._syncStatus=null,this._syncing=!1}connectedCallback(){super.connectedCallback(),this._variables=l.getVariables(),this._unsub=l.subscribe(e=>{this._variables=e}),this._cloudUser=d.xd.getCurrentUser(),this._syncStatus=u.Q.getSyncStatus(),this._authUnsub=e=>{this._cloudUser=e},d.xd.addListener(this._authUnsub),this._syncUnsub=e=>{this._syncStatus=e},u.Q.addListener(this._syncUnsub)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._unsub)||void 0===e||e.call(this),this._authUnsub&&d.xd.removeListener(this._authUnsub),this._syncUnsub&&u.Q.removeListener(this._syncUnsub),this._toastTimer&&clearTimeout(this._toastTimer)}_goToAccount(){(0,h.nL)(this,{tab:"account"})}_formatSyncTime(e){return(0,p.f)(e)}async _syncNow(){if(!this._syncing){this._syncing=!0;try{await u.Q.syncVariables(),this._showToast("Variables synced ✓")}catch(e){this._showToast("Sync failed — try again")}finally{this._syncing=!1}}}_renderSyncBanner(){var e;return this._cloudUser?i.qy`
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
    `:i.qy`
        <div class="sync-banner sync-banner-guest">
          <ha-icon icon="mdi:cloud-outline"></ha-icon>
          <div class="sync-banner-body">
            <strong>Back up & sync across all devices</strong>
            <span>Create a free account to keep your variables synced everywhere — change one entity and every card updates.</span>
          </div>
          <button class="sync-banner-btn" @click=${this._goToAccount}>Sign In</button>
        </div>
      `}_showToast(e){this._toastMsg=e,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toastMsg="",2e3)}async _copyVarRef(e){const t=await(0,v.e)(`$${e}`);this._showToast(t?`Copied $${e}`:"Could not copy — your browser blocked clipboard access")}_addVariable(){const e=this._newName.trim(),t=this._newEntity.trim();if(!e||!t)return;const a=l.addVariable(e,t,this._newValueType,!0,"attribute"===this._newValueType?this._newAttribute:void 0,[],this._newGroup);a?(this._newName="",this._newEntity="",this._newValueType="state",this._newAttribute="",this._newGroup="",this._showAddForm=!1,this._showToast(`Added variable $${a.name}`)):this._showToast("Could not add variable (name may already exist)")}_deleteVariable(e){l.deleteVariable(e.id),this._showToast(`Deleted $${e.name}`)}_startEdit(e){this._editingId=e.id,this._editName=e.name,this._editEntity=e.entity,this._editValueType=e.value_type,this._editAttribute=e.attribute_name||"",this._editGroup=e.group||""}_saveEdit(){this._editingId&&(l.updateVariable(this._editingId,{name:this._editName,entity:this._editEntity,value_type:this._editValueType,attribute_name:"attribute"===this._editValueType?this._editAttribute:void 0,group:this._editGroup})?(this._editingId=null,this._showToast("Variable updated")):this._showToast("Could not update (name conflict?)"))}_cancelEdit(){this._editingId=null}_getResolvedValue(e){return this.hass&&l.resolveVariable(e.name,this.hass)||"—"}_getCurrentState(e){var t;if(!(null===(t=this.hass)||void 0===t?void 0:t.states))return"—";const a=this.hass.states[e.entity];if(!a)return"unavailable";if("attribute"===e.value_type&&e.attribute_name){const t=a.attributes[e.attribute_name];return null!=t?String(t):"—"}return a.state}_getTypeIcon(e){switch(e){case"entity_id":return"mdi:identifier";case"state":return"mdi:state-machine";case"attribute":return"mdi:code-braces";default:return"mdi:variable"}}_getGroups(){const e=new Set;for(const t of this._variables)t.group&&e.add(t.group);return[...e].sort((e,t)=>e.localeCompare(t))}_effectiveGroupFilter(){const e=this._groupFilter;return e?e===_?this._variables.some(e=>!e.group)?e:"":this._variables.some(t=>t.group===e)?e:"":""}_getFilteredVariables(){let e=this._variables;const t=this._effectiveGroupFilter();if(t===_?e=e.filter(e=>!e.group):t&&(e=e.filter(e=>e.group===t)),!this._search.trim())return e;const a=this._search.toLowerCase().trim();return e.filter(e=>e.name.toLowerCase().includes(a)||e.entity.toLowerCase().includes(a)||(e.attribute_name||"").toLowerCase().includes(a)||(e.group||"").toLowerCase().includes(a))}_renderGroupFilter(){const e=this._getGroups();if(0===e.length)return i.s6;const t=this._variables.some(e=>!e.group),a=this._effectiveGroupFilter(),r=(e,t,r)=>i.qy`
      <button
        class="group-chip ${a===e?"active":""}"
        @click=${()=>this._groupFilter=e}
      >
        ${t}<span class="group-chip-count">${r}</span>
      </button>
    `;return i.qy`
      <div class="group-filter">
        <ha-icon icon="mdi:tag-multiple-outline"></ha-icon>
        ${r("","All",this._variables.length)}
        ${e.map(e=>r(e,e,this._variables.filter(t=>t.group===e).length))}
        ${t?r(_,"No group",this._variables.filter(e=>!e.group).length):i.s6}
      </div>
    `}_renderGroupDatalist(){return i.qy`
      <datalist id="uc-var-groups">
        ${this._getGroups().map(e=>i.qy`<option value=${e}></option>`)}
      </datalist>
    `}render(){if(0===this._variables.length&&!this._showAddForm)return i.qy`
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
      `;const e=this._getFilteredVariables();return i.qy`
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
          ${this._variables.length>3?i.qy`
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

      ${this._renderGroupFilter()}

      <!-- Add form -->
      ${this._showAddForm?this._renderAddForm():i.s6}
      ${this._renderGroupDatalist()}

      <!-- Variables grid -->
      ${0===e.length&&(this._search||this._effectiveGroupFilter())?i.qy`
            <div class="empty-state">
              <div class="empty-state-icon"><ha-icon icon="mdi:magnify-close"></ha-icon></div>
              <h3>No Results</h3>
              <p>${this._search?`No variables match "${this._search}"`:"No variables in this group"}</p>
            </div>
          `:i.qy`
            <div class="vars-grid">
              ${e.map(e=>this._renderVariableCard(e))}
            </div>
          `}

      <div class="toast ${this._toastMsg?"show":""}">${this._toastMsg}</div>
    `}_renderAddForm(){const e=!this._newName.trim()||l.isValidVariableName(this._newName.trim()),t=this._newName.trim()&&l.hasVariable(this._newName.trim()),a=this._newName.trim()&&this._newEntity.trim()&&e&&!t;return i.qy`
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
          <uc-entity-search
            class="form-entity"
            .hass=${this.hass}
            .value=${this._newEntity}
            placeholder="Search, e.g. living room temperature"
            @value-changed=${e=>this._newEntity=e.detail.value}
          ></uc-entity-search>
        </div>

        <div class="form-row">
          <span class="form-label">Group</span>
          <input
            type="text"
            class="form-input"
            list="uc-var-groups"
            placeholder="Optional, e.g. Living room"
            .value=${this._newGroup}
            @input=${e=>this._newGroup=e.target.value}
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

        ${"attribute"===this._newValueType?i.qy`
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
            `:i.s6}

        ${t?i.qy`
              <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:rgba(244,67,54,0.08);border:1px solid rgba(244,67,54,0.2);border-radius:8px;margin-bottom:12px;font-size:12px;color:#f44336;">
                <ha-icon icon="mdi:alert-circle" style="--mdc-icon-size:16px;flex-shrink:0"></ha-icon>
                A variable named "$${this._newName}" already exists.
              </div>
            `:i.s6}

        <div class="form-actions">
          <button class="form-btn secondary" @click=${()=>this._showAddForm=!1}>Cancel</button>
          <button class="form-btn primary" ?disabled=${!a} @click=${this._addVariable}>
            <ha-icon icon="mdi:check"></ha-icon>
            Add Variable
          </button>
        </div>
      </div>
    `}_renderVariableCard(e){const t=this._editingId===e.id,a=this._getCurrentState(e);return i.qy`
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
            ${t?i.s6:i.qy`
                  <button class="action-btn" title="Edit" @click=${()=>this._startEdit(e)}>
                    <ha-icon icon="mdi:pencil"></ha-icon>
                  </button>
                  <button class="action-btn delete" title="Delete" @click=${()=>this._deleteVariable(e)}>
                    <ha-icon icon="mdi:delete-outline"></ha-icon>
                  </button>
                `}
          </div>
        </div>

        ${t?i.qy`
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
                  <uc-entity-search
                    .hass=${this.hass}
                    .value=${this._editEntity}
                    @value-changed=${e=>this._editEntity=e.detail.value}
                  ></uc-entity-search>
                </div>
                <div class="edit-row">
                  <span class="edit-label">Group</span>
                  <input
                    type="text"
                    class="edit-input"
                    list="uc-var-groups"
                    placeholder="Optional"
                    .value=${this._editGroup}
                    @input=${e=>this._editGroup=e.target.value}
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
                ${"attribute"===this._editValueType?i.qy`
                      <div class="edit-row">
                        <span class="edit-label">Attribute</span>
                        <input
                          type="text"
                          class="edit-input"
                          .value=${this._editAttribute}
                          @input=${e=>this._editAttribute=e.target.value}
                        />
                      </div>
                    `:i.s6}
                <div class="edit-row" style="justify-content: flex-end; gap: 6px; margin-top: 4px;">
                  <button class="action-btn" title="Save" @click=${this._saveEdit}>
                    <ha-icon icon="mdi:check"></ha-icon>
                  </button>
                  <button class="action-btn" title="Cancel" @click=${this._cancelEdit}>
                    <ha-icon icon="mdi:close"></ha-icon>
                  </button>
                </div>
              </div>
            `:i.qy`
              <div class="var-details">
                <div class="detail-row">
                  <span class="detail-label">Type</span>
                  <span class="type-badge ${e.value_type}">${e.value_type.replace("_"," ")}</span>
                </div>
                ${e.group?i.qy`
                      <div class="detail-row">
                        <span class="detail-label">Group</span>
                        <button class="group-badge" title="Show only this group" @click=${()=>this._groupFilter=e.group||""}>
                          <ha-icon icon="mdi:tag-outline"></ha-icon>${e.group}
                        </button>
                      </div>
                    `:i.s6}
                ${"attribute"===e.value_type&&e.attribute_name?i.qy`
                      <div class="detail-row">
                        <span class="detail-label">Attribute</span>
                        <span class="detail-value">${e.attribute_name}</span>
                      </div>
                    `:i.s6}
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
    `}};m.styles=[c.z,i.AH`
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
      uc-entity-search {
        --uc-entity-search-bg: var(--primary-background-color);
      }

      .group-filter {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        margin-bottom: 16px;
      }

      .group-filter > ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
        margin-right: 2px;
      }

      .group-chip {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 999px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: transparent;
        color: var(--primary-text-color);
        font: inherit;
        font-size: 12px;
        cursor: pointer;
      }

      .group-chip.active {
        border-color: var(--primary-color);
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
      }

      .group-chip-count {
        font-size: 11px;
        color: var(--secondary-text-color);
      }

      .group-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 8px;
        border-radius: 999px;
        border: none;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
        color: var(--primary-text-color);
        font: inherit;
        font-size: 12px;
        cursor: pointer;
        --mdc-icon-size: 14px;
      }

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
        overflow: visible;
        transform: none;
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
    `],y([(0,r.MZ)({attribute:!1})],m.prototype,"hass",void 0),y([(0,r.wk)()],m.prototype,"_variables",void 0),y([(0,r.wk)()],m.prototype,"_toastMsg",void 0),y([(0,r.wk)()],m.prototype,"_search",void 0),y([(0,r.wk)()],m.prototype,"_showAddForm",void 0),y([(0,r.wk)()],m.prototype,"_newName",void 0),y([(0,r.wk)()],m.prototype,"_newEntity",void 0),y([(0,r.wk)()],m.prototype,"_newValueType",void 0),y([(0,r.wk)()],m.prototype,"_newAttribute",void 0),y([(0,r.wk)()],m.prototype,"_newGroup",void 0),y([(0,r.wk)()],m.prototype,"_groupFilter",void 0),y([(0,r.wk)()],m.prototype,"_editingId",void 0),y([(0,r.wk)()],m.prototype,"_editName",void 0),y([(0,r.wk)()],m.prototype,"_editEntity",void 0),y([(0,r.wk)()],m.prototype,"_editValueType",void 0),y([(0,r.wk)()],m.prototype,"_editAttribute",void 0),y([(0,r.wk)()],m.prototype,"_editGroup",void 0),y([(0,r.wk)()],m.prototype,"_cloudUser",void 0),y([(0,r.wk)()],m.prototype,"_syncStatus",void 0),y([(0,r.wk)()],m.prototype,"_syncing",void 0),m=y([(0,r.EM)("hub-variables-tab")],m)},7568(e,t,a){var i=a(378),r=a(9286),s=a(3045);const o="ultra-card-reviews",n="Color sync is not available yet — your colors are saved on this device only.";class l{constructor(){this._syncStatus={isEnabled:!1,lastSync:null,isSyncing:!1,pendingChanges:0,conflicts:[],lastFavoritesSync:null,lastColorsSync:null,lastVariablesSync:null},this._listeners=new Set,this._pendingChanges=new Map,this._loadSyncStatus(),this._loadPendingChanges(),this._setupAuthListener()}getSyncStatus(){return Object.assign({},this._syncStatus)}async setSyncEnabled(e){this._syncStatus.isEnabled=e,this._saveSyncStatus(),this._notifyListeners(),e&&i.xd.isAuthenticated()&&await this.syncAll()}async syncAll(){if(!i.xd.isAuthenticated())throw new Error("Cannot sync: not authenticated");this._syncStatus.isSyncing=!0,this._notifyListeners();try{const[e,t,a,i]=await Promise.all([this.syncFavorites(),this.syncFavoriteColors(),this.syncReviews(),this.syncVariables()]);return this._syncStatus.lastSync=new Date,this._syncStatus.pendingChanges=0,this._clearPendingChanges(),{favorites:e,colors:t,reviews:a,variables:i}}finally{this._syncStatus.isSyncing=!1,this._saveSyncStatus(),this._notifyListeners()}}async syncFavorites(){if(!i.xd.isAuthenticated())throw new Error("Cannot sync favorites: not authenticated");const e={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const t=this._getLocalFavorites(),a=await this._fetchRemoteFavorites(),{merged:i,conflicts:r}=await this._mergeFavorites(t,a),o=await this._uploadFavorites(i.filter(e=>e._needsUpload)),n=await this._downloadFavorites(i.filter(e=>e._needsDownload));e.success=!0,e.synced=o.length+n.length,e.conflicts=r.length,this._syncStatus.conflicts=[...this._syncStatus.conflicts,...r],this._syncStatus.lastFavoritesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),s.v&&console.log(`✅ Favorites sync completed: ${e.synced} synced, ${e.conflicts} conflicts`)}catch(t){console.error("❌ Favorites sync failed:",t),e.errors.push(t instanceof Error?t.message:"Unknown error")}return e}isColorSyncAvailable(){return!1}async syncFavoriteColors(){if(!i.xd.isAuthenticated())throw new Error("Cannot sync colors: not authenticated");return{success:!1,synced:0,conflicts:0,errors:[n],lastSync:(new Date).toISOString()}}async syncVariables(){const e={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{if(!i.xd.isAuthenticated())throw new Error("Not authenticated");const t=(0,r.bi)("ultra-card-custom-variables"),a=t?JSON.parse(t):[],o=await i.xd.authenticatedFetch(`${l.API_BASE}/custom-variables`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({variables:a})});if(o.ok){const t=await o.json();(null==t?void 0:t.variables)&&(0,r.FX)("ultra-card-custom-variables",JSON.stringify(t.variables)),e.success=!0,e.synced=a.length,this._syncStatus.lastVariablesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),s.v&&console.log(`✅ Variables sync completed: ${e.synced} variables`)}else e.errors.push(`Variables sync failed: ${o.status} ${o.statusText}`),console.warn(`❌ Variables sync failed: ${o.status} ${o.statusText}`)}catch(t){const a=t instanceof Error?t.message:"Unknown error";console.warn("❌ Variables sync failed:",a),e.errors.push(a)}return e}async syncReviews(){if(!this._canSync())throw new Error("Cannot sync reviews: not authenticated");const e={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const t=this._getLocalReviews(),a=await this._fetchRemoteReviews(),{merged:i,conflicts:r}=await this._mergeReviews(t,a),s=await this._uploadReviews(i.filter(e=>e._needsUpload)),o=await this._downloadReviews(i.filter(e=>e._needsDownload));e.success=!1,e.errors.push("Review sync is not implemented yet."),e.synced=s.length+o.length,e.conflicts=r.length}catch(t){console.error("❌ Reviews sync failed:",t),e.errors.push(t instanceof Error?t.message:"Unknown error")}return e}queueChange(e,t,a){if("color"===e&&!this.isColorSyncAvailable())return;const i=`${e}-${t}-${Date.now()}`;this._pendingChanges.set(i,{type:e,action:t,data:a,timestamp:Date.now()}),this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners(),this._canSync()&&navigator.onLine&&this._processPendingChanges().catch(console.error)}async resolveConflict(e,t){switch(this._syncStatus.conflicts=this._syncStatus.conflicts.filter(t=>t!==e),t){case"local":await this._uploadConflictResolution(e,e.local);break;case"remote":await this._downloadConflictResolution(e,e.remote);break;case"merge":const t=await this._mergeConflictData(e);await this._uploadConflictResolution(e,t)}this._saveSyncStatus(),this._notifyListeners()}addListener(e){this._listeners.add(e)}removeListener(e){this._listeners.delete(e)}_canSync(){return this._syncStatus.isEnabled&&i.xd.isAuthenticated()}_setupAuthListener(){i.xd.addListener(e=>{e?(this._syncStatus.isEnabled=!0,this._saveSyncStatus()):(this._syncStatus.isEnabled=!1,this._syncStatus.conflicts=[],this._clearPendingChanges(),this._saveSyncStatus()),this._notifyListeners()})}_notifyListeners(){this._listeners.forEach(e=>{try{e(this._syncStatus)}catch(e){console.error("Error in sync listener:",e)}})}_getLocalFavorites(){try{const e=(0,r.bi)("ultra-card-favorites");return e?JSON.parse(e):[]}catch(e){return[]}}async _fetchRemoteFavorites(){const e=await i.xd.authenticatedFetch(`${l.API_BASE}/favorites`);if(!e.ok)throw new Error(`Failed to fetch favorites: ${e.statusText}`);return e.json()}async _uploadFavorites(e){const t=[];for(const a of e)try{const e=await i.xd.authenticatedFetch(`${l.API_BASE}/favorites`,{method:"POST",body:JSON.stringify({name:a.name,description:a.description,row_data:JSON.stringify(a.row),tags:a.tags})});e.ok&&t.push(await e.json())}catch(e){console.error("Failed to upload favorite:",e)}return t}async _downloadFavorites(e){const t=e.map(e=>{let t=null;try{t=e.row_data?JSON.parse(e.row_data):null}catch(e){t=null}return{id:e.id,name:e.name,description:e.description,row:t,created:e.created,tags:e.tags}});if(0===t.length)return[];const a=this._getLocalFavorites(),i=new Map(a.filter(e=>e&&"string"==typeof e.id).map(e=>[e.id,e]));for(const e of t)i.set(e.id,Object.assign(Object.assign({},i.get(e.id)),e));const s=Array.from(i.values());if(s.length<a.length)return console.error("[UltraCard] Favorites merge would drop entries; keeping local store untouched."),[];(0,r.FX)("ultra-card-favorites",JSON.stringify(s));try{window.dispatchEvent(new CustomEvent("ultra-card-favorites-changed"))}catch(e){}return t}async _mergeFavorites(e,t){const a=[],i=[],r=new Map(t.map(e=>[e.id,e])),s=new Map(e.map(e=>[e.id,e]));for(const t of e){const e=r.get(t.id);if(e){const r=new Date(t.created||0).getTime(),s=new Date(e.updated).getTime();Math.abs(r-s)>1e3&&i.push({type:"favorite",local:t,remote:e,field:"updated"}),a.push(r>s?t:Object.assign(Object.assign({},this._convertCloudFavorite(e)),{_needsDownload:r<s}))}else a.push(Object.assign(Object.assign({},t),{_needsUpload:!0}))}for(const e of t)s.has(e.id)||a.push(Object.assign(Object.assign({},this._convertCloudFavorite(e)),{_needsDownload:!0}));return{merged:a,conflicts:i}}_convertCloudFavorite(e){let t=null;try{e.row_data?t="string"==typeof e.row_data?JSON.parse(e.row_data):e.row_data:e.data&&(t=e.data)}catch(e){t=null}return{id:e.id,name:e.name,description:e.description,row:t,created:e.created,tags:e.tags}}_getLocalColors(){try{const e=(0,r.bi)("ultra-card-favorite-colors");return e?JSON.parse(e):[]}catch(e){return[]}}async _fetchRemoteColors(){const e=await i.xd.authenticatedFetch(`${l.API_BASE}/colors`);if(!e.ok)throw new Error(`Failed to fetch colors: ${e.statusText}`);return e.json()}async _uploadColors(e){return[]}async _downloadColors(e){return[]}async _mergeColors(e,t){return{merged:[],conflicts:[]}}static _toWordPressPresetId(e){return String(e).replace(/^wp-/,"")}async submitReview(e,t){if(!i.xd.isAuthenticated())throw new Error("Authentication required to submit reviews");const a=l._toWordPressPresetId(e);if(!/^\d+$/.test(a))throw new Error("This preset cannot be rated.");const r=await i.xd.authenticatedFetch(`${l.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:a,rating:t})});if(!r.ok){const e=await r.json().catch(()=>({message:"Submit failed"}));throw new Error(e.message||`HTTP ${r.status}`)}const s=await r.json();return this._saveLocalReview(s),s}async uploadPresetPhoto(e){if(!i.xd.isAuthenticated())throw new Error("Authentication required to upload photos");const t=new FormData;t.append("photo",e,e.name);const a=`${l.API_BASE}/media`,r=await i.xd.authenticatedFetch(a,{method:"POST",body:t});if(!r.ok){const e=await r.json().catch(()=>null),t=(null==e?void 0:e.data)&&"object"==typeof e.data&&null!==e.data&&"message"in e.data?String(e.data.message):"",a="string"==typeof(null==e?void 0:e.message)&&e.message||"string"==typeof(null==e?void 0:e.error)&&e.error||t||`Upload failed (HTTP ${r.status})`;throw new Error(a)}return r.json()}async submitPreset(e,t,a,r){var s;if(!i.xd.isAuthenticated())throw new Error("Authentication required to submit presets");const o=new FormData;o.append("name",e.name),o.append("description",e.description),o.append("category",e.category),o.append("shortcode",e.shortcode),(null===(s=e.tags)||void 0===s?void 0:s.length)&&o.append("tags",e.tags.join(",")),e.source&&o.append("source",e.source),e.integrations&&o.append("integrations",e.integrations),e.card_settings&&Object.keys(e.card_settings).length>0&&o.append("card_settings",JSON.stringify(e.card_settings)),e.custom_variables&&e.custom_variables.length>0&&o.append("custom_variables",JSON.stringify(e.custom_variables)),r&&r>0&&o.append("featured_image_id",String(r)),(null==a?void 0:a.length)?a.forEach(e=>o.append("photo_ids[]",String(e))):(null==t?void 0:t.length)&&t.forEach((e,t)=>o.append(`photos[${t}]`,e,e.name));const n=await i.xd.authenticatedFetch(`${l.API_BASE}/presets`,{method:"POST",body:o});if(!n.ok){const e=await n.json().catch(()=>({message:"Submit failed"}));throw new Error(e.message||`HTTP ${n.status}`)}return n.json()}async fetchPresetCategories(){try{const e=await fetch(`${l.API_BASE}/preset-categories`);if(e.ok){const t=await e.json();if(Array.isArray(t)&&t.length>0)return t}}catch(e){}return[{value:"layout",label:"Layout"},{value:"content",label:"Content"},{value:"data",label:"Data"},{value:"interactive",label:"Controls"},{value:"input",label:"Inputs"},{value:"media",label:"Media"}]}getUserReview(e){const t=i.xd.getCurrentUser();if(!t)return null;const a=l._toWordPressPresetId(e),r=Number(t.id),s=this._getLocalReviews().find(e=>String(e.preset_id)===a&&Number(e.user_id)===r);return null!=s?s:null}async loadUserReviewsFromServer(){if(i.xd.isAuthenticated())try{const e=await this._fetchRemoteReviews(),t=i.xd.getCurrentUser();if(!t)return;const a=Number(t.id);for(const t of e)Number(t.user_id)===a&&this._saveLocalReview(Object.assign(Object.assign({},t),{preset_id:String(t.preset_id)}))}catch(e){console.warn("Could not load user reviews from server:",e)}}_getLocalReviews(){try{const e=(0,r.bi)(o);return e?JSON.parse(e):[]}catch(e){return[]}}_saveLocalReview(e){const t=this._getLocalReviews(),a=String(e.preset_id),i=Number(e.user_id),s=Object.assign(Object.assign({},e),{preset_id:a}),n=t.findIndex(e=>String(e.preset_id)===a&&Number(e.user_id)===i);n>=0?t[n]=s:t.push(s);try{(0,r.FX)(o,JSON.stringify(t))}catch(e){console.error("Failed to save review locally:",e)}}async _fetchRemoteReviews(){const e=await i.xd.authenticatedFetch(`${l.API_BASE}/reviews`);if(!e.ok)throw new Error(`Failed to fetch reviews: ${e.statusText}`);return e.json()}async _uploadReviews(e){const t=[];for(const a of e)try{const e=await i.xd.authenticatedFetch(`${l.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:a.preset_id,rating:a.rating,comment:a.comment})});if(e.ok){const a=await e.json();t.push(a),this._saveLocalReview(a)}}catch(e){console.error("Failed to upload review:",e)}return t}async _downloadReviews(e){return[]}async _mergeReviews(e,t){return{merged:[],conflicts:[]}}async _uploadConflictResolution(e,t){}async _downloadConflictResolution(e,t){}async _mergeConflictData(e){return e.local}async _processPendingChanges(){if(0!==this._pendingChanges.size){for(const[e,t]of this._pendingChanges)try{await this._processChange(t),this._pendingChanges.delete(e)}catch(t){console.error(`Failed to process change ${e}:`,t)}this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners()}}async _processChange(e){switch(e.type){case"favorite":"create"===e.action&&await this._uploadFavorites([e.data]);break;case"color":throw new Error(n);case"review":"create"===e.action&&await this._uploadReviews([e.data])}}_loadSyncStatus(){try{const e=(0,r.bi)(l.SYNC_STATUS_KEY);if(e){const t=JSON.parse(e);this._syncStatus=Object.assign(Object.assign(Object.assign({},this._syncStatus),t),{lastSync:t.lastSync?new Date(t.lastSync):null,lastFavoritesSync:t.lastFavoritesSync?new Date(t.lastFavoritesSync):null,lastColorsSync:t.lastColorsSync?new Date(t.lastColorsSync):null,lastVariablesSync:t.lastVariablesSync?new Date(t.lastVariablesSync):null,isSyncing:!1})}}catch(e){console.error("Failed to load sync status:",e)}}_saveSyncStatus(){var e,t,a,i,s,o,n;try{(0,r.FX)(l.SYNC_STATUS_KEY,JSON.stringify(Object.assign(Object.assign({},this._syncStatus),{lastSync:null===(e=this._syncStatus.lastSync)||void 0===e?void 0:e.toISOString(),lastFavoritesSync:null!==(a=null===(t=this._syncStatus.lastFavoritesSync)||void 0===t?void 0:t.toISOString())&&void 0!==a?a:null,lastColorsSync:null!==(s=null===(i=this._syncStatus.lastColorsSync)||void 0===i?void 0:i.toISOString())&&void 0!==s?s:null,lastVariablesSync:null!==(n=null===(o=this._syncStatus.lastVariablesSync)||void 0===o?void 0:o.toISOString())&&void 0!==n?n:null})))}catch(e){console.error("Failed to save sync status:",e)}}_loadPendingChanges(){try{const e=(0,r.bi)(l.PENDING_CHANGES_KEY);if(e){const t=JSON.parse(e);this._pendingChanges=new Map(Object.entries(t)),this._syncStatus.pendingChanges=this._pendingChanges.size}}catch(e){console.error("Failed to load pending changes:",e)}}_savePendingChanges(){try{const e=Object.fromEntries(this._pendingChanges);(0,r.FX)(l.PENDING_CHANGES_KEY,JSON.stringify(e))}catch(e){console.error("Failed to save pending changes:",e)}}_clearPendingChanges(){this._pendingChanges.clear();try{(0,r.Pw)(l.PENDING_CHANGES_KEY)}catch(e){console.error("Failed to clear pending changes:",e)}}}l.API_BASE="https://ultracard.io/wp-json/ultra-card/v1",l.SYNC_STATUS_KEY="ultra-card-sync-status",l.PENDING_CHANGES_KEY="ultra-card-pending-changes";const c=new l;a.d(t,["Q",0,c])},9286(e,t,a){function i(e){try{return localStorage.getItem(e)}catch(e){return null}}function r(e,t){try{return localStorage.setItem(e,t),!0}catch(e){return!1}}function s(e){try{localStorage.removeItem(e)}catch(e){}}a.d(t,{FX:()=>r,Pw:()=>s,bi:()=>i})},8716(e,t,a){async function i(e){const t="undefined"!=typeof navigator?navigator.clipboard:void 0;if(!(null==t?void 0:t.writeText))return r(e);try{return await t.writeText(e),!0}catch(t){return r(e)}}function r(e){if("undefined"==typeof document||!document.body)return!1;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="0",t.style.left="-9999px",t.style.opacity="0",document.body.appendChild(t);const a=document.getSelection(),i=a&&a.rangeCount>0?a.getRangeAt(0):null;try{return t.focus(),t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy")}catch(e){return!1}finally{document.body.removeChild(t),a&&i&&(a.removeAllRanges(),a.addRange(i))}}a.d(t,{e:()=>i})}};