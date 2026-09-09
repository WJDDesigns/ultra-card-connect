export const __webpack_esm_ids__=[7303];export const __webpack_esm_modules__={8297(t,e,i){i.d(e,{UltraUpdateMonitorModule:()=>l});var o=i(2618),r=i(7475),n=i(6478),a=i(5147),s=i(8938),d=i(6673);i(7921);class l extends r.m{constructor(){super(...arguments),this._readingsMemo=new d.p,this.metadata={type:"update_monitor",title:"Update Monitor",description:"Auto-discover update entities and surface pending updates with install actions",author:"WJD Designs",version:"1.0.0",icon:"mdi:update",category:"data",tags:["update","monitor","version","firmware","devices","maintenance","auto"]}}createDefault(t){return{id:t||this.generateId("update_monitor"),type:"update_monitor",title:"Updates",show_title:!0,show_up_to_date:!1,show_version_info:!0,show_install_button:!0,show_entity_picture:!0,max_items:25,sort_direction:"updates_first",exclude_patterns:[],hidden_entities:[],update_color:"",ok_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderActionsTab(t,e,i,o){return a.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return s.X.render(t,e,t=>o(t))}renderGeneralTab(t,e,i,r){var a,s;const d=t,l=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,n.kg)("editor.update_monitor.section_display",l,"Display"),(0,n.kg)("editor.update_monitor.section_display_desc",l,"What the module shows."),[{title:(0,n.kg)("editor.update_monitor.title",l,"Title"),description:(0,n.kg)("editor.update_monitor.title_desc",l,"Header above the list."),hass:e,data:{title:d.title||"Updates"},schema:[this.textField("title")],onChange:t=>{r({title:t.detail.value.title}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.update_monitor.show_title",l,"Show title"),description:(0,n.kg)("editor.update_monitor.show_title_desc",l,"Display the header."),hass:e,data:{show_title:!1!==d.show_title},schema:[this.booleanField("show_title")],onChange:t=>{r({show_title:t.detail.value.show_title}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.update_monitor.show_up_to_date",l,"Show up-to-date entities"),description:(0,n.kg)("editor.update_monitor.show_up_to_date_desc",l,"Also list entities without a pending update."),hass:e,data:{show_up_to_date:!!d.show_up_to_date},schema:[this.booleanField("show_up_to_date")],onChange:t=>{r({show_up_to_date:t.detail.value.show_up_to_date}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.update_monitor.show_version",l,"Show version info"),description:(0,n.kg)("editor.update_monitor.show_version_desc",l,"Installed and latest version under each name."),hass:e,data:{show_version_info:!1!==d.show_version_info},schema:[this.booleanField("show_version_info")],onChange:t=>{r({show_version_info:t.detail.value.show_version_info}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.update_monitor.show_install",l,"Show install button"),description:(0,n.kg)("editor.update_monitor.show_install_desc",l,"One-tap install when the integration supports it."),hass:e,data:{show_install_button:!1!==d.show_install_button},schema:[this.booleanField("show_install_button")],onChange:t=>{r({show_install_button:t.detail.value.show_install_button}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.update_monitor.show_picture",l,"Show entity picture"),description:(0,n.kg)("editor.update_monitor.show_picture_desc",l,"Use the integration logo when available."),hass:e,data:{show_entity_picture:!1!==d.show_entity_picture},schema:[this.booleanField("show_entity_picture")],onChange:t=>{r({show_entity_picture:t.detail.value.show_entity_picture}),this.triggerPreviewUpdate()}}])}
        ${this.renderSliderField((0,n.kg)("editor.update_monitor.max_items",l,"Max items"),(0,n.kg)("editor.update_monitor.max_items_desc",l,"Maximum entities to show."),null!==(s=d.max_items)&&void 0!==s?s:25,25,1,100,1,t=>{r({max_items:t}),this.triggerPreviewUpdate()},"")}
        ${this.renderFieldSection((0,n.kg)("editor.update_monitor.sort",l,"Sort"),(0,n.kg)("editor.update_monitor.sort_desc",l,"Order of entities."),e,{sort_direction:d.sort_direction||"updates_first"},[this.selectField("sort_direction",[{value:"updates_first",label:(0,n.kg)("editor.update_monitor.sort_updates",l,"Updates first")},{value:"name",label:(0,n.kg)("editor.update_monitor.sort_name",l,"Name A–Z")},{value:"unchanged",label:(0,n.kg)("editor.update_monitor.sort_raw",l,"Unchanged")}])],t=>{r({sort_direction:t.detail.value.sort_direction}),this.triggerPreviewUpdate()})}
        ${this.renderChipListField((0,n.kg)("editor.update_monitor.exclude_patterns",l,"Exclude patterns"),(0,n.kg)("editor.update_monitor.exclude_patterns_desc",l,"Entity ids containing these substrings are ignored."),e,d.exclude_patterns||[],t=>{r({exclude_patterns:t}),this.triggerPreviewUpdate()},{mode:"free-text",variant:"exclude",placeholder:(0,n.kg)("editor.update_monitor.pattern_ph",l,"e.g. beta, test")})}
        ${this.renderChipListField((0,n.kg)("editor.update_monitor.hidden_entities",l,"Hidden entities"),(0,n.kg)("editor.update_monitor.hidden_entities_desc",l,"Specific update entities to hide from the list."),e,d.hidden_entities||[],t=>{r({hidden_entities:t}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:["update"],placeholder:(0,n.kg)("editor.update_monitor.hidden_ph",l,"Pick an update entity")})}

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,n.kg)("editor.update_monitor.section_colors",l,"Colors")}
          </div>
          ${[["update_color","editor.update_monitor.color_update","Update available","var(--warning-color)"],["ok_color","editor.update_monitor.color_ok","Up to date","var(--success-color)"],["text_color","editor.update_monitor.color_text","Text","var(--primary-text-color)"],["secondary_text_color","editor.update_monitor.color_secondary","Secondary text","var(--secondary-text-color)"],["card_background_color","editor.update_monitor.color_card_bg","Card background","var(--card-background-color)"]].map(([t,i,o,a])=>this.renderColorField((0,n.kg)(i,l,o),"",e,d[t]||"",a,e=>{r({[t]:e}),this.triggerPreviewUpdate()}))}
        </div>
      </div>
    `}renderPreview(t,e,i,r){var a;const s=t,d=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en",l=this.buildStyleString(this.buildDesignStyles(t,e)),c=this.getHoverEffectClass(t);if(!(null==e?void 0:e.states))return this.renderGradientErrorState((0,n.kg)("editor.update_monitor.err_ha",d,"Waiting for Home Assistant"),(0,n.kg)("editor.update_monitor.err_ha_desc",d,"Connecting to entity states…"),"mdi:loading");const _=this._collectReadings(s,e),p=_.filter(t=>t.hasUpdate).length;if(0===_.length)return this.renderGradientErrorState((0,n.kg)("editor.update_monitor.err_empty",d,"No update entities found"),(0,n.kg)("editor.update_monitor.err_empty_desc",d,'Enable "Show up-to-date entities" or adjust exclude filters in the General tab.'),"mdi:update");const u=s.update_color||"var(--warning-color)",h=s.ok_color||"var(--success-color)",g=s.text_color||"var(--primary-text-color)",m=s.secondary_text_color||"var(--secondary-text-color)",v=s.card_background_color||"var(--uc-pane-bg, var(--card-background-color))";return o.qy`
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
              ${_.map(t=>this._renderRow(s,t,e,i,{cUpd:u,cOk:h,text:g,secondary:m,cardBg:v,lang:d}))}
            </div>
          `,t,e)}
      </div>
    `}_renderRow(t,e,i,r,a){var s;const d=e.hasUpdate?a.cUpd:a.cOk,l=this.createGestureHandlers(`${t.id}-${e.entityId}`,{tap_action:(null===(s=t.tap_action)||void 0===s?void 0:s.action)?Object.assign(Object.assign({},t.tap_action),{entity:e.entityId}):{action:"more-info",entity:e.entityId},hold_action:t.hold_action,double_tap_action:t.double_tap_action,entity:e.entityId,module:t},i,r,[".um-install-btn"]),c=e.hasUpdate?`${e.installedVersion||"?"} → ${e.latestVersion||"?"}`:e.installedVersion||e.latestVersion||"";return o.qy`
      <div
        data-uc-role="pane"
        style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:var(--uc-r-10, 10px);background:${a.cardBg};border: var(--uc-pane-border, 1px solid var(--divider-color)); box-shadow: var(--uc-pane-shadow, none);"
        @pointerdown=${l.onPointerDown}
        @pointermove=${l.onPointerMove}
        @pointerup=${l.onPointerUp}
        @pointerleave=${l.onPointerLeave}
        @pointercancel=${l.onPointerCancel}
      >
        ${!1!==t.show_entity_picture&&e.picture?o.qy`<img
              src="${e.picture}"
              style="width:28px;height:28px;border-radius:var(--uc-r-6, 6px);object-fit:contain;flex-shrink:0;"
            />`:o.qy`<ha-icon
              icon=${e.hasUpdate?"mdi:package-up":"mdi:check-circle-outline"}
              style="color:${d};--mdc-icon-size:26px;flex-shrink:0;"
            ></ha-icon>`}
        <div style="flex:1;min-width:0;">
          <div
            style="color:${a.text};font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
          >
            ${e.name}
          </div>
          ${!1!==t.show_version_info&&c?o.qy`<div style="color:${a.secondary};font-size:12px;margin-top:2px;">
                ${c}
              </div>`:o.s6}
        </div>
        ${e.inProgress?o.qy`<ha-circular-progress indeterminate size="small"></ha-circular-progress>`:e.hasUpdate&&!1!==t.show_install_button&&e.canInstall?o.qy`
                <button
                  class="um-install-btn"
                  style="flex-shrink:0;padding:6px 12px;border:none;border-radius:var(--uc-r-8, 8px);background:${d};color:var(--text-primary-color,#fff);font-weight:600;font-size:12px;cursor:pointer;"
                  @click=${t=>{t.stopPropagation(),i.callService("update","install",{entity_id:e.entityId})}}
                >
                  ${(0,n.kg)("editor.update_monitor.install",a.lang,"Install")}
                </button>
              `:o.s6}
      </div>
    `}_collectReadings(t,e){return this._readingsMemo.read(t.id,[e.states],(0,d.W)(t),()=>this._computeReadings(t,e))}_computeReadings(t,e){var i;const o=new Set((t.hidden_entities||[]).map(t=>t.trim()).filter(Boolean)),r=(t.exclude_patterns||[]).map(t=>t.toLowerCase()),n=[];for(const[i,a]of Object.entries(e.states)){if(!i.startsWith("update."))continue;if(o.has(i))continue;if(r.some(t=>i.toLowerCase().includes(t)))continue;if("unavailable"===a.state||"unknown"===a.state)continue;const e="on"===a.state;if(!e&&!t.show_up_to_date)continue;const s=a.attributes||{};n.push({entityId:i,name:s.friendly_name||i,picture:s.entity_picture,hasUpdate:e,inProgress:!0===s.in_progress||"number"==typeof s.in_progress,installedVersion:s.installed_version,latestVersion:s.latest_version,canInstall:!(1&~s.supported_features)})}const a=t.sort_direction||"updates_first";return"updates_first"===a?n.sort((t,e)=>Number(e.hasUpdate)-Number(t.hasUpdate)||t.name.localeCompare(e.name)):"name"===a&&n.sort((t,e)=>t.name.localeCompare(e.name,void 0,{sensitivity:"base"})),n.slice(0,null!==(i=t.max_items)&&void 0!==i?i:25)}validate(t){const e=[];return t.id||e.push("Module ID is required"),t.type||e.push("Module type is required"),{valid:0===e.length,errors:e}}getStyles(){return`\n      .um-root { box-sizing: border-box; }\n      ${r.m.getSliderStyles()}\n    `}}},6673(t,e,i){i.d(e,{W:()=>r,p:()=>o});class o{constructor(t=32){this._cache=new Map,this._limit=t}read(t,e,i,o){const r=this._cache.get(t);if(r&&r.key===i&&function(t,e){if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}(r.deps,e))return r.value;const n=o();if(this._cache.set(t,{deps:e,key:i,value:n}),this._cache.size>this._limit){const t=this._cache.keys().next().value;void 0!==t&&this._cache.delete(t)}return n}forget(t){this._cache.delete(t)}clear(){this._cache.clear()}}function r(...t){try{return JSON.stringify(t)}catch(t){return`__unserializable__${Math.random()}`}}}};