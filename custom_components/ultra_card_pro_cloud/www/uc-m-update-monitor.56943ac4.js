export const __webpack_esm_ids__=[7303];export const __webpack_esm_modules__={8297(e,t,i){i.d(t,{UltraUpdateMonitorModule:()=>l});var o=i(2618),r=i(3307),n=i(6478),a=i(5147),s=i(8938),d=i(6673);i(7921);class l extends r.m{constructor(){super(...arguments),this._readingsMemo=new d.p,this.metadata={type:"update_monitor",title:"Update Monitor",description:"Auto-discover update entities and surface pending updates with install actions",author:"WJD Designs",version:"1.0.0",icon:"mdi:update",category:"data",tags:["update","monitor","version","firmware","devices","maintenance","auto"]}}createDefault(e){return{id:e||this.generateId("update_monitor"),type:"update_monitor",title:"Updates",show_title:!0,show_up_to_date:!1,show_version_info:!0,show_install_button:!0,show_entity_picture:!0,max_items:25,sort_direction:"updates_first",exclude_patterns:[],hidden_entities:[],update_color:"",ok_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderActionsTab(e,t,i,o){return a.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return s.X.render(e,t,e=>o(e))}renderGeneralTab(e,t,i,r){var a,s;const d=e,l=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,n.kg)("editor.update_monitor.section_display",l,"Display"),(0,n.kg)("editor.update_monitor.section_display_desc",l,"What the module shows."),[{title:(0,n.kg)("editor.update_monitor.title",l,"Title"),description:(0,n.kg)("editor.update_monitor.title_desc",l,"Header above the list."),hass:t,data:{title:d.title||"Updates"},schema:[this.textField("title")],onChange:e=>{r({title:e.detail.value.title}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.update_monitor.show_title",l,"Show title"),description:(0,n.kg)("editor.update_monitor.show_title_desc",l,"Display the header."),hass:t,data:{show_title:!1!==d.show_title},schema:[this.booleanField("show_title")],onChange:e=>{r({show_title:e.detail.value.show_title}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.update_monitor.show_up_to_date",l,"Show up-to-date entities"),description:(0,n.kg)("editor.update_monitor.show_up_to_date_desc",l,"Also list entities without a pending update."),hass:t,data:{show_up_to_date:!!d.show_up_to_date},schema:[this.booleanField("show_up_to_date")],onChange:e=>{r({show_up_to_date:e.detail.value.show_up_to_date}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.update_monitor.hide_when_empty",l,"Hide when up to date"),description:(0,n.kg)("editor.update_monitor.hide_when_empty_desc",l,"On the dashboard, hide this module when no updates are pending. A column, row or card left empty hides too."),hass:t,data:{hide_when_empty:!0===d.hide_when_empty},schema:[this.booleanField("hide_when_empty")],onChange:e=>{r({hide_when_empty:e.detail.value.hide_when_empty}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.update_monitor.show_version",l,"Show version info"),description:(0,n.kg)("editor.update_monitor.show_version_desc",l,"Installed and latest version under each name."),hass:t,data:{show_version_info:!1!==d.show_version_info},schema:[this.booleanField("show_version_info")],onChange:e=>{r({show_version_info:e.detail.value.show_version_info}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.update_monitor.show_install",l,"Show install button"),description:(0,n.kg)("editor.update_monitor.show_install_desc",l,"One-tap install when the integration supports it."),hass:t,data:{show_install_button:!1!==d.show_install_button},schema:[this.booleanField("show_install_button")],onChange:e=>{r({show_install_button:e.detail.value.show_install_button}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.update_monitor.show_picture",l,"Show entity picture"),description:(0,n.kg)("editor.update_monitor.show_picture_desc",l,"Use the integration logo when available."),hass:t,data:{show_entity_picture:!1!==d.show_entity_picture},schema:[this.booleanField("show_entity_picture")],onChange:e=>{r({show_entity_picture:e.detail.value.show_entity_picture}),this.triggerPreviewUpdate()}}])}
        ${this.renderSliderField((0,n.kg)("editor.update_monitor.max_items",l,"Max items"),(0,n.kg)("editor.update_monitor.max_items_desc",l,"Maximum entities to show."),null!==(s=d.max_items)&&void 0!==s?s:25,25,1,100,1,e=>{r({max_items:e}),this.triggerPreviewUpdate()},"")}
        ${this.renderFieldSection((0,n.kg)("editor.update_monitor.sort",l,"Sort"),(0,n.kg)("editor.update_monitor.sort_desc",l,"Order of entities."),t,{sort_direction:d.sort_direction||"updates_first"},[this.selectField("sort_direction",[{value:"updates_first",label:(0,n.kg)("editor.update_monitor.sort_updates",l,"Updates first")},{value:"name",label:(0,n.kg)("editor.update_monitor.sort_name",l,"Name A–Z")},{value:"unchanged",label:(0,n.kg)("editor.update_monitor.sort_raw",l,"Unchanged")}])],e=>{r({sort_direction:e.detail.value.sort_direction}),this.triggerPreviewUpdate()})}
        ${this.renderChipListField((0,n.kg)("editor.update_monitor.exclude_patterns",l,"Exclude patterns"),(0,n.kg)("editor.update_monitor.exclude_patterns_desc",l,"Entity ids containing these substrings are ignored."),t,d.exclude_patterns||[],e=>{r({exclude_patterns:e}),this.triggerPreviewUpdate()},{mode:"free-text",variant:"exclude",placeholder:(0,n.kg)("editor.update_monitor.pattern_ph",l,"e.g. beta, test")})}
        ${this.renderChipListField((0,n.kg)("editor.update_monitor.hidden_entities",l,"Hidden entities"),(0,n.kg)("editor.update_monitor.hidden_entities_desc",l,"Specific update entities to hide from the list."),t,d.hidden_entities||[],e=>{r({hidden_entities:e}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:["update"],placeholder:(0,n.kg)("editor.update_monitor.hidden_ph",l,"Pick an update entity")})}

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,n.kg)("editor.update_monitor.section_colors",l,"Colors")}
          </div>
          ${[["update_color","editor.update_monitor.color_update","Update available","var(--warning-color)"],["ok_color","editor.update_monitor.color_ok","Up to date","var(--success-color)"],["text_color","editor.update_monitor.color_text","Text","var(--primary-text-color)"],["secondary_text_color","editor.update_monitor.color_secondary","Secondary text","var(--secondary-text-color)"],["card_background_color","editor.update_monitor.color_card_bg","Card background","var(--card-background-color)"]].map(([e,i,o,a])=>this.renderColorField((0,n.kg)(i,l,o),"",t,d[e]||"",a,t=>{r({[e]:t}),this.triggerPreviewUpdate()}))}
        </div>
      </div>
    `}renderPreview(e,t,i,r){var a;const s=e,d=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",l=this.buildStyleString(this.buildDesignStyles(e,t)),c=this.getHoverEffectClass(e);if(!(null==t?void 0:t.states))return this.renderGradientErrorState((0,n.kg)("editor.update_monitor.err_ha",d,"Waiting for Home Assistant"),(0,n.kg)("editor.update_monitor.err_ha_desc",d,"Connecting to entity states…"),"mdi:loading");const _=this._collectReadings(s,t),p=_.filter(e=>e.hasUpdate).length;if(0===_.length)return this.renderGradientErrorState((0,n.kg)("editor.update_monitor.err_empty",d,"No update entities found"),(0,n.kg)("editor.update_monitor.err_empty_desc",d,'Enable "Show up-to-date entities" or adjust exclude filters in the General tab.'),"mdi:update");const u=s.update_color||"var(--warning-color)",h=s.ok_color||"var(--success-color)",g=s.text_color||"var(--primary-text-color)",m=s.secondary_text_color||"var(--secondary-text-color)",v=s.card_background_color||"var(--uc-pane-bg, var(--card-background-color))";return o.qy`
      <div class="um-root ${c}" style="${l}">
        ${this.wrapWithAnimation(o.qy`
            ${!1!==s.show_title?o.qy`
                  <div
                    style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;"
                  >
                    <span style="color:${g};font-weight:700;">
                      ${s.title||(0,n.kg)("editor.update_monitor.default_title",d,"Updates")}
                    </span>
                    <span
                      style="font-size:12px;font-weight:700;padding:2px 10px;border-radius:var(--uc-r-10, 10px);background:${p>0?u:h}22;color:${p>0?u:h};"
                    >
                      ${p>0?`${p} ${(0,n.kg)("editor.update_monitor.pending",d,"pending")}`:(0,n.kg)("editor.update_monitor.all_ok",d,"All up to date")}
                    </span>
                  </div>
                `:o.s6}
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${_.map(e=>this._renderRow(s,e,t,i,{cUpd:u,cOk:h,text:g,secondary:m,cardBg:v,lang:d}))}
            </div>
          `,e,t)}
      </div>
    `}_renderRow(e,t,i,r,a){var s;const d=t.hasUpdate?a.cUpd:a.cOk,l=this.createGestureHandlers(`${e.id}-${t.entityId}`,{tap_action:(null===(s=e.tap_action)||void 0===s?void 0:s.action)?Object.assign(Object.assign({},e.tap_action),{entity:t.entityId}):{action:"more-info",entity:t.entityId},hold_action:e.hold_action,double_tap_action:e.double_tap_action,entity:t.entityId,module:e},i,r,[".um-install-btn"]),c=t.hasUpdate?`${t.installedVersion||"?"} → ${t.latestVersion||"?"}`:t.installedVersion||t.latestVersion||"";return o.qy`
      <div
        data-uc-role="pane"
        style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:var(--uc-r-10, 10px);background:${a.cardBg};border: var(--uc-pane-border, 1px solid var(--divider-color)); box-shadow: var(--uc-pane-shadow, none);"
        @pointerdown=${l.onPointerDown}
        @pointermove=${l.onPointerMove}
        @pointerup=${l.onPointerUp}
        @pointerleave=${l.onPointerLeave}
        @pointercancel=${l.onPointerCancel}
      >
        ${!1!==e.show_entity_picture&&t.picture?o.qy`<img
              src="${t.picture}"
              style="width:28px;height:28px;border-radius:var(--uc-r-6, 6px);object-fit:contain;flex-shrink:0;"
            />`:o.qy`<ha-icon
              icon=${t.hasUpdate?"mdi:package-up":"mdi:check-circle-outline"}
              style="color:${d};--mdc-icon-size:26px;flex-shrink:0;"
            ></ha-icon>`}
        <div style="flex:1;min-width:0;">
          <div
            style="color:${a.text};font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
          >
            ${t.name}
          </div>
          ${!1!==e.show_version_info&&c?o.qy`<div style="color:${a.secondary};font-size:12px;margin-top:2px;">
                ${c}
              </div>`:o.s6}
        </div>
        ${t.inProgress?o.qy`<ha-circular-progress indeterminate size="small"></ha-circular-progress>`:t.hasUpdate&&!1!==e.show_install_button&&t.canInstall?o.qy`
                <button
                  class="um-install-btn"
                  style="flex-shrink:0;padding:6px 12px;border:none;border-radius:var(--uc-r-8, 8px);background:${d};color:var(--text-primary-color,#fff);font-weight:600;font-size:12px;cursor:pointer;"
                  @click=${e=>{e.stopPropagation(),i.callService("update","install",{entity_id:t.entityId})}}
                >
                  ${(0,n.kg)("editor.update_monitor.install",a.lang,"Install")}
                </button>
              `:o.s6}
      </div>
    `}isEmpty(e,t){return!!(null==t?void 0:t.states)&&!this._collectReadings(e,t).some(e=>e.hasUpdate)}_collectReadings(e,t){return this._readingsMemo.read(e.id,[t.states],(0,d.W)(e),()=>this._computeReadings(e,t))}_computeReadings(e,t){var i;const o=new Set((e.hidden_entities||[]).map(e=>e.trim()).filter(Boolean)),r=(e.exclude_patterns||[]).map(e=>e.toLowerCase()),n=[];for(const[i,a]of Object.entries(t.states)){if(!i.startsWith("update."))continue;if(o.has(i))continue;if(r.some(e=>i.toLowerCase().includes(e)))continue;if("unavailable"===a.state||"unknown"===a.state)continue;const t="on"===a.state;if(!t&&!e.show_up_to_date)continue;const s=a.attributes||{};n.push({entityId:i,name:s.friendly_name||i,picture:s.entity_picture,hasUpdate:t,inProgress:!0===s.in_progress||"number"==typeof s.in_progress,installedVersion:s.installed_version,latestVersion:s.latest_version,canInstall:!(1&~s.supported_features)})}const a=e.sort_direction||"updates_first";return"updates_first"===a?n.sort((e,t)=>Number(t.hasUpdate)-Number(e.hasUpdate)||e.name.localeCompare(t.name)):"name"===a&&n.sort((e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:"base"})),n.slice(0,null!==(i=e.max_items)&&void 0!==i?i:25)}validate(e){const t=[];return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),{valid:0===t.length,errors:t}}getStyles(){return`\n      .um-root { box-sizing: border-box; }\n      ${r.m.getSliderStyles()}\n    `}}},6673(e,t,i){i.d(t,{W:()=>r,p:()=>o});class o{constructor(e=32){this._cache=new Map,this._limit=e}read(e,t,i,o){const r=this._cache.get(e);if(r&&r.key===i&&function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(r.deps,t))return r.value;const n=o();if(this._cache.set(e,{deps:t,key:i,value:n}),this._cache.size>this._limit){const e=this._cache.keys().next().value;void 0!==e&&this._cache.delete(e)}return n}forget(e){this._cache.delete(e)}clear(){this._cache.clear()}}function r(...e){try{return JSON.stringify(e)}catch(e){return`__unserializable__${Math.random()}`}}}};