export const __webpack_esm_ids__=[854];export const __webpack_esm_modules__={8001(e,i,r){r.d(i,{UltraLinkedRowModule:()=>w});var t=r(2618),n=r(4442),o=r(8414),s=r(6478),a=r(3488),d=r(6343),l=r(8711),c=r(8690),u=r(9286);const h="ultra_card_pro_cloud/linked_rows",v="uc_linked_rows_cache_v1";function p(e){var i,r,t;const n=null!==(r=null!==(i=null==e?void 0:e.status_code)&&void 0!==i?i:null==e?void 0:e.status)&&void 0!==r?r:null===(t=null==e?void 0:e.response)||void 0===t?void 0:t.status;return"number"==typeof n?n:void 0}function _(e){const i=e;return!!i&&"object"==typeof i&&"string"==typeof i.id&&"string"==typeof i.name&&Array.isArray(i.modules)&&"number"==typeof i.revision}function g(e){const i=e=>{if(Array.isArray(e))return e.map(i);if(e&&"object"==typeof e){const r={};for(const t of Object.keys(e).sort()){const n=e[t];void 0!==n&&(r[t]=i(n))}return r}return e};return JSON.stringify(i(null!=e?e:[]))}function k(){const e=Math.random().toString(36).slice(2,10);return`lr_${Date.now().toString(36)}${e}`}function y(e,i,r={}){const t=Array.isArray(e.modules)?e.modules:[];if(!e.linked_id||!i||i.id!==e.linked_id)return{modules:t,source:"local",sharedIsNewer:!1,localIsAhead:!1};const n="number"==typeof e.linked_revision?e.linked_revision:0,o=i.revision>n,s=i.revision===n&&g(t)!==g(i.modules);return o&&!r.editor?{modules:i.modules,source:"shared",sharedIsNewer:o,localIsAhead:s}:{modules:t,source:"local",sharedIsNewer:o,localIsAhead:s}}const b=new class{constructor(e=()=>Date.now()){this._now=e,this._rows=new Map,this._absent=new Set,this._checkedAt=new Map,this._inflight=new Map,this._conflicts=new Map,this._autoPushed=new Set,this._endpointMissing=!1,this._hydrated=!1,this._listeners=new Set}subscribe(e){return this._listeners.add(e),()=>this._listeners.delete(e)}_notify(){for(const e of this._listeners)try{e()}catch(e){}}availability(e){var i;if(!(null==e?void 0:e.callApi))return"missing";const r=null===(i=e.config)||void 0===i?void 0:i.components;if(Array.isArray(r)&&!r.includes("ultra_card_pro_cloud"))return"missing";if(this._endpointMissing)return"outdated";const t=(0,c.fu)(e);return t.installed&&(t.outdated||!0!==t.capabilities.linked_rows)?"outdated":"available"}_hydrate(){if(!this._hydrated){this._hydrated=!0;try{const e=(0,u.bi)(v);if(!e)return;const i=JSON.parse(e),r=null==i?void 0:i.rows;if(!r||"object"!=typeof r)return;for(const e of Object.values(r))_(e)&&!this._rows.has(e.id)&&this._rows.set(e.id,e)}catch(e){}}}_persist(){const e={};for(const[i,r]of this._rows)e[i]=r;(0,u.FX)(v,JSON.stringify({rows:e}))}_store(e){const i=this._rows.get(e.id);this._absent.delete(e.id),this._rows.set(e.id,e),this._persist(),i&&i.revision===e.revision&&i.name===e.name||this._notify()}getCached(e){if(e)return this._hydrate(),this._rows.get(e)}isAbsent(e){return!!e&&this._absent.has(e)}getConflict(e){return e?this._conflicts.get(e):void 0}clearConflict(e){this._conflicts.delete(e)&&this._notify()}ensureFresh(e,i){if(!i||"available"!==this.availability(e))return;const r=this._checkedAt.get(i);void 0!==r&&this._now()-r<6e4||this.fetchRow(e,i)}fetchRow(e,i){var r;const t=this._inflight.get(i);if(t)return t;if(!(null==e?void 0:e.callApi)||"available"!==this.availability(e))return Promise.resolve(null!==(r=this.getCached(i))&&void 0!==r?r:null);this._checkedAt.set(i,this._now());const n=e.callApi("GET",`${h}?id=${encodeURIComponent(i)}`).then(e=>{var r;const t=null==e?void 0:e.row;if(_(t))return this._store(t),t;if(null===t){const e=this._absent.has(i);this._absent.add(i),e||this._notify()}return null!==(r=this.getCached(i))&&void 0!==r?r:null}).catch(e=>{var r;return this._handleReadError(e,i),null!==(r=this.getCached(i))&&void 0!==r?r:null}).finally(()=>{this._inflight.delete(i)});return this._inflight.set(i,n),n}async listRows(e){if(!(null==e?void 0:e.callApi)||"available"!==this.availability(e))return null;try{const i=await e.callApi("GET",h);return(Array.isArray(null==i?void 0:i.rows)?i.rows:[]).filter(e=>{const i=e;return!!i&&"string"==typeof i.id&&"string"==typeof i.name})}catch(e){return this._handleReadError(e),null}}_handleReadError(e,i){const r=p(e);404!==r?i&&401!==r&&403!==r&&this._checkedAt.set(i,this._now()-6e4+3e4):this._endpointMissing||(this._endpointMissing=!0,this._notify())}async save(e,i){var r,t;if(!(null==e?void 0:e.callApi)||"available"!==this.availability(e))return{ok:!1,error:"unavailable"};const n={id:i.id,base_revision:i.baseRevision};void 0!==i.modules&&(n.modules=i.modules),void 0!==i.name&&(n.name=i.name),i.force&&(n.force=!0);try{const r=await e.callApi("POST",h,n),t=null==r?void 0:r.row;return _(t)?(this._conflicts.delete(i.id),this._checkedAt.set(i.id,this._now()),this._store(t),{ok:!0,row:t}):{ok:!1,error:"bad_response"}}catch(e){const n=e,o=p(n),s=null===(r=null==n?void 0:n.body)||void 0===r?void 0:r.current;return 409===o&&_(s)?(this._conflicts.set(i.id,s),this._store(s),this._notify(),{ok:!1,conflict:s}):(404===o&&(this._endpointMissing=!0),{ok:!1,error:"string"==typeof(null===(t=null==n?void 0:n.body)||void 0===t?void 0:t.error)?n.body.error:String((null==n?void 0:n.error)||"error"),status:o})}}autoPush(e,i){var r;const t=i.linked_id;if(!t||!(null===(r=null==e?void 0:e.user)||void 0===r?void 0:r.is_admin))return;if("available"!==this.availability(e))return;const n=this.getCached(t);if(!n)return;if(!y(i,n).localIsAhead)return;const o=`${t}:${n.revision}:${g(i.modules)}`;this._autoPushed.has(o)||(this._autoPushed.add(o),this.save(e,{id:t,modules:i.modules||[],baseRevision:n.revision}))}reset(){this._rows.clear(),this._absent.clear(),this._checkedAt.clear(),this._inflight.clear(),this._conflicts.clear(),this._autoPushed.clear(),this._endpointMissing=!1,this._hydrated=!1}};class w extends n.UltraVerticalModule{constructor(){super(...arguments),this.metadata={type:"linked_row",title:"Linked Row",description:"A shared block of modules: edit it once and it updates on every dashboard",author:"WJD Designs",version:"1.0.0",icon:"mdi:link-box-variant-outline",category:"layout",tags:["pro","premium","layout","container","shared","linked","sync","reuse"]},this._editorState=new Map,this._adopted=new Set,this._unsubscribe=null}createDefault(e,i){const r=super.createDefault(e,i);return Object.assign(Object.assign({},r),{id:e||this.generateId("linked_row"),type:"linked_row",linked_id:"",linked_name:""})}validate(e){const i=[];return e.id||i.push("Module ID is required"),e.type||i.push("Module type is required"),{valid:0===i.length,errors:i}}getRuntimeEntityIds(e){const i=e,r=y(i,b.getCached(i.linked_id));if("shared"!==r.source)return[];const{ids:t}=(0,d.k)({type:"custom:ultra-card",layout:{rows:[{id:"linked",columns:[{id:"linked",modules:r.modules}]}]}});return[...t]}_subscribe(){this._unsubscribe||(this._unsubscribe=b.subscribe(()=>this.triggerPreviewUpdate()))}_state(e){let i=this._editorState.get(e);return i||(i={library:null,libraryLoading:!1,newName:"",busy:!1,error:""},this._editorState.set(e,i)),i}renderPreview(e,i,r,n){var o;const d=e,l=(null===(o=null==i?void 0:i.locale)||void 0===o?void 0:o.language)||"en",c="live"===n||"ha-preview"===n||!!(null==r?void 0:r.__ucIsEditorPreview);let u=Array.isArray(d.modules)?d.modules:[],h=t.s6;if(d.linked_id&&(0,a.gf)(i)){this._subscribe(),b.ensureFresh(i,d.linked_id);const e=b.getCached(d.linked_id),r=y(d,e,{editor:c});if(u=r.modules,c&&e){const i=g(d.modules)===g(e.modules);r.sharedIsNewer&&i?this._adoptRevision(d,e):(r.sharedIsNewer&&!i||b.getConflict(d.linked_id))&&(h=this._renderBanner((0,s.kg)("editor.linked_row.preview_newer",l,"This shared row was changed somewhere else. Open its General tab to load the newer copy.")))}else c||b.autoPush(i,d);"shared"===r.source&&this._ensureTypesLoaded(u)}if(0===u.length)return this._renderEmptyHint(d,l);const v=super.renderPreview(Object.assign(Object.assign({},d),{modules:u}),i,r,n);return h===t.s6?v:t.qy`${h}${v}`}_adoptRevision(e,i){const r=`${e.id}:${i.id}:${i.revision}`;this._adopted.has(r)||(this._adopted.add(r),this._patch(e.id,{linked_revision:i.revision,linked_updated_at:i.updated_at,linked_name:i.name}))}_patch(e,i){"undefined"!=typeof window&&queueMicrotask(()=>{window.dispatchEvent(new CustomEvent("uc-module-patch-by-id",{bubbles:!0,composed:!0,detail:{moduleId:e,updates:i}}))})}_ensureTypesLoaded(e){const i=(0,o.oD)(),r=e=>{for(const t of e)(null==t?void 0:t.type)&&(!i.isModuleLoaded(t.type)&&i.canLoadModule(t.type)&&i.ensureModuleLoaded(t.type).then(()=>this.triggerPreviewUpdate()).catch(()=>{}),(0,l.pm)(t,r))};r(e)}_renderBanner(e){return t.qy`
      <div
        role="status"
        style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; margin-bottom: 8px; border-radius: 8px; font-size: 12px; color: var(--primary-text-color); background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.15);"
      >
        <ha-icon icon="mdi:sync-alert" style="--mdc-icon-size: 18px; color: var(--warning-color, #ff9800);"></ha-icon>
        <span>${e}</span>
      </div>
    `}_renderEmptyHint(e,i){const r=e.linked_id?(0,s.kg)("editor.linked_row.empty_linked_title",i,"This shared row is empty"):(0,s.kg)("editor.linked_row.empty_title",i,"Linked Row"),n=(0,s.kg)("editor.linked_row.empty_desc",i,"Add modules to this container, then share it from the General tab, or pick a shared row there.");return t.qy`
      <div
        class="uc-linked-row-empty"
        style="display: flex; align-items: center; gap: 12px; padding: 16px; border: 1px dashed var(--divider-color); border-radius: 12px; background: var(--secondary-background-color, transparent);"
      >
        <ha-icon
          icon="mdi:link-box-variant-outline"
          style="--mdc-icon-size: 28px; color: var(--primary-color); flex-shrink: 0;"
        ></ha-icon>
        <div style="min-width: 0;">
          <div style="font-weight: 600; color: var(--primary-text-color);">${r}</div>
          <div style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;">
            ${n}
          </div>
        </div>
      </div>
    `}renderGeneralTab(e,i,r,n){var o;const d=e,l=(null===(o=null==i?void 0:i.locale)||void 0===o?void 0:o.language)||"en";return(0,a.gf)(i)?(this._subscribe(),t.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this._editorStyles()}
      </style>
      <div class="module-general-settings">
        ${this._renderLinkSection(d,i,n,l)}
      </div>
      ${super.renderGeneralTab(e,i,r,n)}
    `):(0,a.b5)(l,(0,s.kg)("editor.linked_row.pro_description",l,"Linked Row is a Pro feature: build a row of modules once, show it on any dashboard, and edit it in one place to update every copy."),i)}_renderLinkSection(e,i,r,n){const o=b.availability(i),a=(0,s.kg)("editor.linked_row.section_title",n,"Linked Row");if("available"!==o){const e="missing"===o?(0,s.kg)("editor.linked_row.connect_missing",n,"Shared rows are stored by Ultra Card Connect. Install Connect {version} or newer to share this row. Until then it works like a normal container."):(0,s.kg)("editor.linked_row.connect_outdated",n,"Update Ultra Card Connect to {version} or newer to share this row. Until then it shows the copy saved in this card.");return t.qy`
        <div class="settings-section">
          <div class="section-title">${a}</div>
          <div class="uc-lr-note warn">
            ${e.replace("{version}","1.10.0")}
          </div>
        </div>
      `}return e.linked_id?this._renderLinked(e,i,r,n,a):this._renderUnlinked(e,i,r,n,a)}_renderUnlinked(e,i,r,n,o){var a;const d=this._state(e.id);null!==d.library||d.libraryLoading||(d.libraryLoading=!0,b.listRows(i).then(e=>{d.library=null!=e?e:[],d.libraryLoading=!1,this.triggerPreviewUpdate()}));const l=null!==(a=d.library)&&void 0!==a?a:[],c=(e.modules||[]).length>0;return t.qy`
      <div class="settings-section">
        <div class="section-title">${o}</div>
        <div class="uc-lr-note">
          ${(0,s.kg)("editor.linked_row.intro",n,"Build a row once and show it on any dashboard. Edit it in one place and every copy updates.")}
        </div>

        ${l.length>0?this.renderFieldSection((0,s.kg)("editor.linked_row.pick_existing",n,"Use a shared row"),c?(0,s.kg)("editor.linked_row.pick_existing_replace",n,"Replaces the modules in this container with the shared ones."):(0,s.kg)("editor.linked_row.pick_existing_desc",n,"Pick a row you already shared from another card."),i,{linked_pick:""},[this.selectField("linked_pick",[{value:"",label:(0,s.kg)("editor.linked_row.pick_placeholder",n,"Choose a shared row")},...l.map(e=>({value:e.id,label:`${e.name} (${e.module_count})`}))])],t=>{var n;const o=null===(n=t.detail.value)||void 0===n?void 0:n.linked_pick;"string"==typeof o&&o&&this._linkExisting(e,o,i,r)}):t.qy`<div class="uc-lr-note subtle">
              ${d.libraryLoading?(0,s.kg)("editor.linked_row.library_loading",n,"Loading shared rows…"):(0,s.kg)("editor.linked_row.library_empty",n,"No shared rows yet. Create the first one below.")}
            </div>`}

        ${this.renderFieldSection((0,s.kg)("editor.linked_row.create_title",n,"Create a shared row from these modules"),(0,s.kg)("editor.linked_row.create_desc",n,"Give it a name you will recognize when adding it to another card."),i,{linked_new_name:d.newName},[this.textField("linked_new_name")],e=>{var i,r;d.newName=String(null!==(r=null===(i=e.detail.value)||void 0===i?void 0:i.linked_new_name)&&void 0!==r?r:"")})}
        <button
          class="uc-lr-btn primary"
          type="button"
          ?disabled=${d.busy}
          @click=${()=>{this._createShared(e,i,r,n)}}
        >
          <ha-icon icon="mdi:link-plus"></ha-icon>
          ${(0,s.kg)("editor.linked_row.create_button",n,"Create shared row")}
        </button>
        ${d.error?t.qy`<div class="uc-lr-note warn">${d.error}</div>`:t.s6}
      </div>
    `}_renderLinked(e,i,r,n,o){var a;const d=e.linked_id||"",l=this._state(e.id);b.ensureFresh(i,d);const c=b.getCached(d),u=b.getConflict(d),h=b.isAbsent(d),v=y(e,c,{editor:!0}),p=!!c&&g(e.modules)===g(c.modules),_=null!=u?u:v.sharedIsNewer&&!p?c:void 0,k=e.linked_name||(null==c?void 0:c.name)||d,w=c&&p?c.revision:null!==(a=e.linked_revision)&&void 0!==a?a:0,m=(c&&p?c.updated_at:e.linked_updated_at)||"";let f;return f=h?t.qy`
        <div class="uc-lr-note warn">
          ${(0,s.kg)("editor.linked_row.absent",n,"This shared row is no longer in the library. Share it again, or unlink to keep it as a normal container.")}
        </div>
        <button
          class="uc-lr-btn primary"
          type="button"
          ?disabled=${l.busy}
          @click=${()=>{this._share(e,i,r,n,!1)}}
        >
          <ha-icon icon="mdi:cloud-upload-outline"></ha-icon>
          ${(0,s.kg)("editor.linked_row.share_again",n,"Share it again")}
        </button>
      `:_?t.qy`
        <div class="uc-lr-note warn">
          ${(0,s.kg)("editor.linked_row.conflict",n,"This shared row was changed somewhere else (revision {revision}). Load the newer copy, or keep yours and overwrite it.").replace("{revision}",String(_.revision))}
        </div>
        <div class="uc-lr-actions">
          <button
            class="uc-lr-btn primary"
            type="button"
            ?disabled=${l.busy}
            @click=${()=>this._loadShared(e,_,r)}
          >
            <ha-icon icon="mdi:cloud-download-outline"></ha-icon>
            ${(0,s.kg)("editor.linked_row.load_newer",n,"Load the newer copy")}
          </button>
          <button
            class="uc-lr-btn"
            type="button"
            ?disabled=${l.busy}
            @click=${()=>{this._share(e,i,r,n,!0)}}
          >
            <ha-icon icon="mdi:cloud-upload-outline"></ha-icon>
            ${(0,s.kg)("editor.linked_row.overwrite",n,"Keep mine and overwrite")}
          </button>
        </div>
      `:c?v.localIsAhead?t.qy`
        <div class="uc-lr-note">
          ${(0,s.kg)("editor.linked_row.local_ahead",n,"You changed this row. Saving the card shares the change with every card that uses it.")}
        </div>
        <button
          class="uc-lr-btn"
          type="button"
          ?disabled=${l.busy}
          @click=${()=>{this._share(e,i,r,n,!1)}}
        >
          <ha-icon icon="mdi:cloud-upload-outline"></ha-icon>
          ${(0,s.kg)("editor.linked_row.share_now",n,"Share now")}
        </button>
      `:t.qy`
        <div class="uc-lr-note ok">
          ${(0,s.kg)("editor.linked_row.in_sync",n,"Up to date. Edits you save here update every card that uses this row.")}
        </div>
      `:t.qy`
        <div class="uc-lr-note subtle">
          ${(0,s.kg)("editor.linked_row.checking",n,"Checking the shared copy… If Ultra Card Connect is offline, this card keeps showing its saved copy.")}
        </div>
      `,t.qy`
      <div class="settings-section">
        <div class="section-title">${o}</div>
        <div class="uc-lr-linked" data-uc-role="pane">
          <ha-icon icon="mdi:link-variant"></ha-icon>
          <div class="uc-lr-linked-text">
            <div class="uc-lr-linked-name">${k}</div>
            <div class="uc-lr-linked-meta">
              ${(0,s.kg)("editor.linked_row.revision",n,"Revision {revision}").replace("{revision}",String(w))}${m?t.qy` · ${this._formatDate(m,n)}`:t.s6}
            </div>
          </div>
        </div>
        ${f}
        ${l.error?t.qy`<div class="uc-lr-note warn">${l.error}</div>`:t.s6}
        <button
          class="uc-lr-btn subtle"
          type="button"
          ?disabled=${l.busy}
          @click=${()=>this._unlink(e,r)}
        >
          <ha-icon icon="mdi:link-off"></ha-icon>
          ${(0,s.kg)("editor.linked_row.unlink",n,"Unlink (keep a normal copy)")}
        </button>
      </div>
    `}async _linkExisting(e,i,r,t){var n;const o=this._state(e.id);o.busy=!0,o.error="",this.triggerPreviewUpdate();const a=await b.fetchRow(r,i);o.busy=!1,a?this._loadShared(e,a,t):o.error=(0,s.kg)("editor.linked_row.load_failed",(null===(n=null==r?void 0:r.locale)||void 0===n?void 0:n.language)||"en","Could not load that shared row. Check that Ultra Card Connect is running."),this.triggerPreviewUpdate()}_loadShared(e,i,r){b.clearConflict(i.id),r({linked_id:i.id,linked_name:i.name,linked_revision:i.revision,linked_updated_at:i.updated_at,modules:i.modules}),this._state(e.id).error="",this.triggerPreviewUpdate()}async _createShared(e,i,r,t){const n=this._state(e.id),o=n.newName.trim()||(0,s.kg)("editor.linked_row.default_name",t,"Linked row");n.busy=!0,n.error="",this.triggerPreviewUpdate();const a=await b.save(i,{id:k(),name:o,modules:e.modules||[],baseRevision:0});n.busy=!1,a.ok?(n.newName="",n.library=null,r({linked_id:a.row.id,linked_name:a.row.name,linked_revision:a.row.revision,linked_updated_at:a.row.updated_at})):n.error=this._saveError(a,t),this.triggerPreviewUpdate()}async _share(e,i,r,t,n){var o;const s=e.linked_id;if(!s)return;const a=this._state(e.id);a.busy=!0,a.error="",this.triggerPreviewUpdate();const d=b.getCached(s),l=await b.save(i,{id:s,name:e.linked_name||(null==d?void 0:d.name)||void 0,modules:e.modules||[],baseRevision:null!==(o=e.linked_revision)&&void 0!==o?o:0,force:n});a.busy=!1,l.ok?r({linked_name:l.row.name,linked_revision:l.row.revision,linked_updated_at:l.row.updated_at}):"conflict"in l||(a.error=this._saveError(l,t)),this.triggerPreviewUpdate()}_unlink(e,i){e.linked_id&&b.clearConflict(e.linked_id),i({linked_id:"",linked_name:"",linked_revision:void 0,linked_updated_at:void 0}),this.triggerPreviewUpdate()}_saveError(e,i){return 403===e.status?(0,s.kg)("editor.linked_row.admin_only",i,"Only Home Assistant admins can change shared rows."):(0,s.kg)("editor.linked_row.save_failed",i,"Could not save the shared row: {error}").replace("{error}",e.error||"")}_formatDate(e,i){const r=new Date(e);if(Number.isNaN(r.getTime()))return"";try{return r.toLocaleString(i,{dateStyle:"medium",timeStyle:"short"})}catch(e){return r.toISOString()}}_editorStyles(){return"\n      .uc-lr-note {\n        font-size: 13px;\n        line-height: 1.5;\n        color: var(--primary-text-color);\n        padding: 10px 12px;\n        margin: 8px 0 12px;\n        border-radius: 8px;\n        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);\n      }\n      .uc-lr-note.subtle { background: transparent; padding: 4px 0; color: var(--secondary-text-color); }\n      .uc-lr-note.warn { background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.15); }\n      .uc-lr-note.ok { background: rgba(var(--rgb-success-color, 76, 175, 80), 0.15); }\n      .uc-lr-actions { display: flex; flex-wrap: wrap; gap: 8px; }\n      .uc-lr-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        min-height: 44px;\n        padding: 0 16px;\n        margin: 4px 0;\n        border-radius: 8px;\n        border: 1px solid var(--divider-color);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        color: var(--primary-text-color);\n        font: inherit;\n        font-weight: 600;\n        cursor: pointer;\n      }\n      .uc-lr-btn.primary {\n        background: var(--primary-color);\n        border-color: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .uc-lr-btn.subtle { color: var(--secondary-text-color); }\n      .uc-lr-btn[disabled] { opacity: 0.5; cursor: default; }\n      .uc-lr-btn ha-icon { --mdc-icon-size: 18px; }\n      .uc-lr-linked {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        padding: 12px;\n        border-radius: 8px;\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border: 1px solid var(--divider-color);\n      }\n      .uc-lr-linked ha-icon { color: var(--primary-color); }\n      .uc-lr-linked-text { min-width: 0; }\n      .uc-lr-linked-name { font-weight: 600; color: var(--primary-text-color); overflow-wrap: anywhere; }\n      .uc-lr-linked-meta { font-size: 12px; color: var(--secondary-text-color); }\n    "}}},3488(e,i,r){r.d(i,{SB:()=>d,b5:()=>a,gf:()=>s});var t=r(2618),n=r(378),o=r(6478);function s(e){var i,r,t,o;if(!e)return!1;try{const s=n.xd.checkIntegrationAuth(e);if("pro"===(null===(i=null==s?void 0:s.subscription)||void 0===i?void 0:i.tier)&&"active"===(null===(r=null==s?void 0:s.subscription)||void 0===r?void 0:r.status))return!0;if(n.xd.isAuthenticated()){const e=n.xd.getCurrentUser();if("pro"===(null===(t=null==e?void 0:e.subscription)||void 0===t?void 0:t.tier)&&"active"===(null===(o=null==e?void 0:e.subscription)||void 0===o?void 0:o.status))return!0}}catch(e){return!1}return!1}function a(e,i,r){const n=function(e,i){const r=e||function(){var e;try{return null===(e=document.querySelector("home-assistant"))||void 0===e?void 0:e.hass}catch(e){return}}();if(!(null==r?void 0:r.states))return null;const t=r.states["sensor.ultra_card_pro_cloud_authentication_status"];if(!t)return(0,o.kg)("editor.pro.status_not_installed",i,"Already have Pro? Install Ultra Card Connect and sign in to unlock it here.");const n=t.attributes||{};return"unavailable"===t.state||"unknown"===t.state?(0,o.kg)("editor.pro.status_unreachable",i,"Ultra Card Connect can't reach ultracard.io right now. If you have Pro, it unlocks again when the connection is back."):"connected"===t.state&&n.authenticated?"pro"===n.subscription_tier&&n.subscription_status&&"active"!==n.subscription_status?(0,o.kg)("editor.pro.status_inactive",i,"Your Pro subscription is {status}. Renew it on ultracard.io to unlock this.").replace("{status}",String(n.subscription_status)):null:n.needs_reauth?(0,o.kg)("editor.pro.status_reauth",i,"Ultra Card Connect needs you to sign in again (Settings → Devices & services → Ultra Card Connect)."):(0,o.kg)("editor.pro.status_signed_out",i,"Already have Pro? Sign in to Ultra Card Connect from the Ultra Card Hub in the sidebar.")}(r,e);return t.qy`
    <div
      class="pro-lock-container"
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 32px;
        text-align: center;
        background: var(--secondary-background-color);
        border-radius: 12px;
        margin: 16px;
      "
    >
      <ha-icon
        icon="mdi:lock"
        style="color: var(--primary-color); --mdc-icon-size: 48px; margin-bottom: 16px;"
      ></ha-icon>
      <div style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">
        ${(0,o.kg)("editor.pro.feature_locked",e,"Pro Feature")}
      </div>
      <div
        style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 340px; line-height: 1.5;"
      >
        ${i}
      </div>
      ${n?t.qy`<div
            role="status"
            style="font-size: 13px; color: var(--primary-text-color); margin-bottom: 16px; max-width: 340px; line-height: 1.5; padding: 8px 12px; border-radius: 8px; background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);"
          >
            ${n}
          </div>`:""}
      <a
        href="https://ultracard.io/pro"
        target="_blank"
        rel="noopener noreferrer"
        style="
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: var(--primary-color);
          color: var(--text-primary-color, white);
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
        "
      >
        <ha-icon icon="mdi:crown" style="--mdc-icon-size: 20px;"></ha-icon>
        ${(0,o.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
      </a>
    </div>
  `}function d(e,i){return t.qy`
    <div
      style="
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 20px;
        border-radius: 12px;
        background: var(--secondary-background-color);
        border: 1px dashed var(--divider-color);
      "
    >
      <ha-icon
        icon="mdi:lock"
        style="color: var(--primary-color); --mdc-icon-size: 28px;"
      ></ha-icon>
      <div style="min-width: 0;">
        <div style="font-weight: 700; color: var(--primary-text-color);">${i}</div>
        <div style="font-size: 12px; color: var(--secondary-text-color);">
          ${(0,o.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
      </div>
    </div>
  `}}};