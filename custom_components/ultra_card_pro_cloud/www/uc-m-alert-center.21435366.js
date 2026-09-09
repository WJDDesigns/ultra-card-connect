/*! For license information please see uc-m-alert-center.21435366.js.LICENSE.txt */
export const __webpack_esm_ids__=[8861];export const __webpack_esm_modules__={8124(e,t,i){i.d(t,{UltraAlertCenterModule:()=>c});var r=i(2618),n=i(1299),a=i(7475),o=i(6478),l=i(6673);i(7921);class c extends a.m{constructor(){super(...arguments),this.handlesOwnDesignStyles=!0,this._alertsMemo=new l.p,this.metadata={type:"alert_center",title:"Alert Center",description:"Monitor and prioritize active Home Assistant alerts in one place",author:"WJD Designs",version:"1.0.0",icon:"mdi:alert-decagram-outline",category:"data",tags:["alerts","warnings","security","monitoring","safety","status"]},this._includeEntityPickerKey=0,this._hiddenEntityPickerKey=0}createDefault(e){return{id:e||this.generateId("alert_center"),type:"alert_center",title:"Alert Center",show_title:!0,max_alerts:6,show_all_clear:!0,show_state:!0,include_alert_domain:!0,include_binary_sensors:!0,include_lock_alerts:!0,include_alarm_panel_alerts:!0,include_entities:[],hidden_entities:[],accent_color:"",tile_border_radius:20,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=super.validate(e);return{valid:0===t.errors.length,errors:t.errors}}domainOf(e){return e.includes(".")?e.split(".")[0]:""}entityShortName(e,t){var i,r;const n=null===(r=null===(i=e.states[t])||void 0===i?void 0:i.attributes)||void 0===r?void 0:r.friendly_name;return"string"==typeof n&&n.trim()?n.trim():(t.split(".").pop()||t).replace(/_/g," ")}isDomainEnabled(e,t){return"alert"===e?!1!==t.include_alert_domain:"binary_sensor"===e?!1!==t.include_binary_sensors:"lock"===e?!1!==t.include_lock_alerts:"alarm_control_panel"===e&&!1!==t.include_alarm_panel_alerts}isAlertActive(e,t,i,r){const n=t.states[e];if(!n)return!1;const a=this.domainOf(e),o=String(n.state||"").toLowerCase(),l=n.attributes||{},c=String(l.device_class||"").toLowerCase();return"unknown"!==o&&"unavailable"!==o&&"none"!==o&&("alert"===a?!!["on","open","active","triggered","detected","alarm"].includes(o)||!["off","idle","inactive","normal","clear","ok"].includes(o):"alarm_control_panel"===a?!["disarmed","off","unknown","unavailable"].includes(o):"lock"===a?["unlocked","jammed","open"].includes(o):"binary_sensor"===a?"on"===o&&(!!r||new Set(["smoke","gas","problem","safety","moisture","door","window","opening","garage_door","motion","occupancy","lock","tamper","vibration"]).has(c)):!!r&&!["off","closed","locked","idle","standby","disarmed"].includes(o))}severityFor(e,t){const i=t.states[e];if(!i)return"info";const r=String(i.state||"").toLowerCase(),n=i.attributes||{},a=String(n.device_class||"").toLowerCase(),o=this.domainOf(e);return"alarm_control_panel"===o||"lock"===o&&"jammed"===r||new Set(["smoke","gas","problem","safety","moisture","heat","fire","tamper","carbon_monoxide"]).has(a)||r.includes("alarm")||r.includes("triggered")||r.includes("problem")||r.includes("unsafe")?"critical":"lock"===o||"binary_sensor"===o?"warning":"info"}iconFor(e,t,i){const r=t.states[e],n=(null==r?void 0:r.attributes)||{},a="string"==typeof n.icon?n.icon:"";if(a)return a;const o=this.domainOf(e);if("alarm_control_panel"===o)return"mdi:shield-alert";if("lock"===o)return"mdi:lock-alert";if("alert"===o)return"mdi:alert-circle";if("binary_sensor"===o){const e=String(n.device_class||"").toLowerCase();return"smoke"===e?"mdi:smoke-detector-alert":"gas"===e||"carbon_monoxide"===e?"mdi:gas-cylinder":"moisture"===e?"mdi:water-alert":"door"===e||"window"===e||"opening"===e?"mdi:door-open":"motion"===e||"occupancy"===e?"mdi:motion-sensor":"mdi:alert-circle-outline"}return"critical"===i?"mdi:alert-circle":"warning"===i?"mdi:alert":"mdi:information-outline"}collectAlerts(e,t){return this._alertsMemo.read(t.id,[e.states],(0,l.W)(t),()=>this._computeAlerts(e,t))}_computeAlerts(e,t){var i;const r=new Set((t.hidden_entities||[]).map(e=>e.trim()).filter(Boolean)),n=(t.include_entities||[]).map(e=>e.trim()).filter(Boolean),a=new Set,o=[],l=(i,n)=>{if(!i||a.has(i)||r.has(i))return;const l=e.states[i];if(!l)return;if(!n&&!this.isDomainEnabled(this.domainOf(i),t))return;if(!this.isAlertActive(i,e,t,n))return;const c=this.severityFor(i,e),s=Date.parse(l.last_changed||l.last_updated||"");o.push({entity_id:i,name:this.entityShortName(e,i),state:String(l.state),icon:this.iconFor(i,e,c),severity:c,changedAt:Number.isFinite(s)?s:0}),a.add(i)};for(const t of Object.keys(e.states||{}))l(t,!1);for(const e of n)l(e,!0);const c=e=>"critical"===e?0:"warning"===e?1:2;o.sort((e,t)=>{const i=c(e.severity),r=c(t.severity);return i!==r?i-r:e.changedAt!==t.changedAt?t.changedAt-e.changedAt:e.name.localeCompare(t.name,void 0,{sensitivity:"base"})});const s=Math.max(1,Math.min(30,null!==(i=t.max_alerts)&&void 0!==i?i:6));return o.slice(0,s)}onAlertRowClick(e,t,i,r,n){e.stopPropagation(),this.handleModuleAction({action:"more-info",entity:n},t,e.currentTarget,i,n,r)}renderGeneralTab(e,t,i,a){var l,c,s;const d=e,u=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";return r.qy`
      ${this.injectUcFormStyles()}
      <style>
        .uc-ac-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 8px 0 12px 0;
        }
        .uc-ac-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          border-radius: var(--uc-r-16, 16px);
          font-size: 13px;
          max-width: 100%;
          position: relative;
        }
        .uc-ac-chip--hidden { background: var(--error-color); }
        .uc-ac-chip:hover { opacity: 0.95; padding-right: 30px; }
        .uc-ac-chip .uc-ac-chip-remove {
          cursor: pointer;
          font-size: 16px;
          opacity: 0;
          position: absolute;
          right: 8px;
          transition: opacity 0.15s ease;
        }
        .uc-ac-chip:hover .uc-ac-chip-remove { opacity: 1; }
        .uc-ac-chip-label {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 220px;
        }
      </style>
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,o.kg)("editor.alert_center.section_basic",u,"Basic"),(0,o.kg)("editor.alert_center.section_basic_desc",u,"Core alert center behavior and display settings."),[{title:(0,o.kg)("editor.alert_center.title",u,"Title"),description:(0,o.kg)("editor.alert_center.title_desc",u,"Header text shown above alerts."),hass:t,data:{title:d.title||""},schema:[{name:"title",selector:{text:{}}}],onChange:e=>{var t,i;a({title:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.title)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.alert_center.show_title",u,"Show title"),description:(0,o.kg)("editor.alert_center.show_title_desc",u,"Display the alert center header."),hass:t,data:{show_title:!1!==d.show_title},schema:[this.booleanField("show_title")],onChange:e=>{var t;return a({show_title:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_title)})}},{title:(0,o.kg)("editor.alert_center.max_alerts",u,"Max alerts"),description:(0,o.kg)("editor.alert_center.max_alerts_desc",u,"Maximum active alerts to show."),hass:t,data:{max_alerts:null!==(c=d.max_alerts)&&void 0!==c?c:6},schema:[this.numberField("max_alerts",1,30,1)],onChange:e=>{var t,i;return a({max_alerts:Number(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.max_alerts)&&void 0!==i?i:6)})}},{title:(0,o.kg)("editor.alert_center.show_state",u,"Show state"),description:(0,o.kg)("editor.alert_center.show_state_desc",u,"Show current entity state on each row."),hass:t,data:{show_state:!1!==d.show_state},schema:[this.booleanField("show_state")],onChange:e=>{var t;return a({show_state:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_state)})}},{title:(0,o.kg)("editor.alert_center.show_all_clear",u,"Show all clear state"),description:(0,o.kg)("editor.alert_center.show_all_clear_desc",u,"Show a friendly all-clear message when no alerts are active."),hass:t,data:{show_all_clear:!1!==d.show_all_clear},schema:[this.booleanField("show_all_clear")],onChange:e=>{var t;return a({show_all_clear:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_all_clear)})}}])}

        ${this.renderSettingsSection((0,o.kg)("editor.alert_center.section_sources",u,"Auto Sources"),(0,o.kg)("editor.alert_center.section_sources_desc",u,"Choose domains automatically monitored for active alerts."),[{title:(0,o.kg)("editor.alert_center.include_alert_domain",u,"Alert entities"),description:(0,o.kg)("editor.alert_center.include_alert_domain_desc",u,"Monitor entities in the alert domain."),hass:t,data:{include_alert_domain:!1!==d.include_alert_domain},schema:[this.booleanField("include_alert_domain")],onChange:e=>{var t;return a({include_alert_domain:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.include_alert_domain)})}},{title:(0,o.kg)("editor.alert_center.include_binary_sensors",u,"Binary sensors"),description:(0,o.kg)("editor.alert_center.include_binary_sensors_desc",u,"Monitor relevant binary sensors (smoke, leak, door, motion, etc)."),hass:t,data:{include_binary_sensors:!1!==d.include_binary_sensors},schema:[this.booleanField("include_binary_sensors")],onChange:e=>{var t;return a({include_binary_sensors:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.include_binary_sensors)})}},{title:(0,o.kg)("editor.alert_center.include_lock_alerts",u,"Lock alerts"),description:(0,o.kg)("editor.alert_center.include_lock_alerts_desc",u,"Monitor unlocked/jammed lock states."),hass:t,data:{include_lock_alerts:!1!==d.include_lock_alerts},schema:[this.booleanField("include_lock_alerts")],onChange:e=>{var t;return a({include_lock_alerts:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.include_lock_alerts)})}},{title:(0,o.kg)("editor.alert_center.include_alarm_panel_alerts",u,"Alarm panels"),description:(0,o.kg)("editor.alert_center.include_alarm_panel_alerts_desc",u,"Monitor armed/triggered alarm panel states."),hass:t,data:{include_alarm_panel_alerts:!1!==d.include_alarm_panel_alerts},schema:[this.booleanField("include_alarm_panel_alerts")],onChange:e=>{var t;return a({include_alarm_panel_alerts:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.include_alarm_panel_alerts)})}}])}

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,o.kg)("editor.alert_center.section_style",u,"Style")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,o.kg)("editor.alert_center.section_style_desc",u,"Customize alert colors and card radius.")}
          </div>
          <ultra-color-picker
            style="display: block; width: 100%; margin-bottom: 24px;"
            .value=${d.accent_color||""}
            .defaultValue=${"var(--error-color)"}
            .hass=${t}
            @value-changed=${e=>{a({accent_color:e.detail.value}),this.triggerPreviewUpdate()}}
          ></ultra-color-picker>
          <div style="margin-top: 4px;">
            ${this.renderSliderField((0,o.kg)("editor.alert_center.tile_radius",u,"Tile border radius"),(0,o.kg)("editor.alert_center.tile_radius_desc",u,"Adjust corner roundness for the alert center tile."),null!==(s=d.tile_border_radius)&&void 0!==s?s:20,20,0,48,1,e=>{a({tile_border_radius:e}),this.triggerPreviewUpdate()},"px")}
          </div>
        </div>

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,o.kg)("editor.alert_center.section_entities",u,"Entity Overrides")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,o.kg)("editor.alert_center.section_entities_desc",u,"Manually include or exclude specific entities.")}
          </div>

          <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
            ${(0,o.kg)("editor.alert_center.include_entities",u,"Always include entities")}
          </div>
          <div class="field-description" style="margin-bottom: 8px;">
            ${(0,o.kg)("editor.alert_center.include_entities_desc",u,"These entities are checked for active alert states even outside auto source domains.")}
          </div>
          <div class="uc-ac-chips">
            ${(d.include_entities||[]).map(e=>r.qy`
                <div class="uc-ac-chip" title=${e}>
                  <span class="uc-ac-chip-label">${this.entityShortName(t,e)}</span>
                  <ha-icon
                    class="uc-ac-chip-remove"
                    icon="mdi:close"
                    @click=${()=>a({include_entities:(d.include_entities||[]).filter(t=>t!==e)})}
                  ></ha-icon>
                </div>
              `)}
          </div>
          ${(0,n.D)(this._includeEntityPickerKey,this.renderFieldSection((0,o.kg)("editor.alert_center.include_add",u,"Add included entity"),"",t,{uc_alert_include_entity:""},[{name:"uc_alert_include_entity",selector:{entity:{}}}],e=>{var t,i;const r=String(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.uc_alert_include_entity)&&void 0!==i?i:"").trim();r&&!(d.include_entities||[]).includes(r)&&(this._includeEntityPickerKey+=1,a({include_entities:[...d.include_entities||[],r]}))}))}

          <div style="margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--divider-color);">
            <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
              ${(0,o.kg)("editor.alert_center.hidden_entities",u,"Hidden entities")}
            </div>
            <div class="field-description" style="margin-bottom: 8px;">
              ${(0,o.kg)("editor.alert_center.hidden_entities_desc",u,"Exclude specific entities from Alert Center results.")}
            </div>
            <div class="uc-ac-chips">
              ${(d.hidden_entities||[]).map(e=>r.qy`
                  <div class="uc-ac-chip uc-ac-chip--hidden" title=${e}>
                    <span class="uc-ac-chip-label">${this.entityShortName(t,e)}</span>
                    <ha-icon
                      class="uc-ac-chip-remove"
                      icon="mdi:close"
                      @click=${()=>a({hidden_entities:(d.hidden_entities||[]).filter(t=>t!==e)})}
                    ></ha-icon>
                  </div>
                `)}
            </div>
            ${(0,n.D)(this._hiddenEntityPickerKey,this.renderFieldSection((0,o.kg)("editor.alert_center.hidden_add",u,"Add hidden entity"),"",t,{uc_alert_hidden_entity:""},[{name:"uc_alert_hidden_entity",selector:{entity:{}}}],e=>{var t,i;const r=String(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.uc_alert_hidden_entity)&&void 0!==i?i:"").trim();r&&!(d.hidden_entities||[]).includes(r)&&(this._hiddenEntityPickerKey+=1,a({hidden_entities:[...d.hidden_entities||[],r]}))}))}
          </div>
        </div>
      </div>
    `}renderPreview(e,t,i,n){var a,l;const c=e,s=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",d=(c.title||"").trim()||(0,o.kg)("editor.alert_center.default_title",s,"Alert Center"),u=!1!==c.show_title,_=!1!==c.show_state,h=!1!==c.show_all_clear,p=(c.accent_color||"").trim()||"var(--error-color)",m=Math.max(0,Math.min(48,null!==(l=c.tile_border_radius)&&void 0!==l?l:20)),v=this.collectAlerts(t,c);return v.length||h?r.qy`
      ${this.injectModuleStyles()}
      <div class="uc-ac" data-uc-role="pane" style="--uc-ac-accent: ${p}; --uc-ac-radius: ${m}px;">
        ${u?r.qy`<div class="uc-ac-title">${d}</div>`:r.s6}
        ${v.length?r.qy`
              <div class="uc-ac-list">
                ${v.map(e=>{var n,a;return r.qy`
                    <button
                      type="button"
                      class="uc-ac-row is-${e.severity}"
                      @click=${r=>this.onAlertRowClick(r,t,i,c,e.entity_id)}
                      title=${(null===(a=null===(n=t.states[e.entity_id])||void 0===n?void 0:n.attributes)||void 0===a?void 0:a.friendly_name)||e.entity_id}
                    >
                      <div class="uc-ac-left">
                        <ha-icon icon=${e.icon}></ha-icon>
                        <div class="uc-ac-text">
                          <div class="uc-ac-name">${e.name}</div>
                          ${_?r.qy`<div class="uc-ac-state">${e.state}</div>`:r.s6}
                        </div>
                      </div>
                      <ha-icon class="uc-ac-chevron" icon="mdi:chevron-right"></ha-icon>
                    </button>
                  `})}
              </div>
            `:r.qy`
              <div class="uc-ac-clear">
                <ha-icon icon="mdi:check-circle-outline"></ha-icon>
                <div>
                  <div class="uc-ac-clear-title">${(0,o.kg)("editor.alert_center.all_clear",s,"All clear")}</div>
                  <div class="uc-ac-clear-sub">
                    ${(0,o.kg)("editor.alert_center.all_clear_desc",s,"No active alerts detected.")}
                  </div>
                </div>
              </div>
            `}
      </div>
    `:this.renderGradientErrorState((0,o.kg)("editor.alert_center.no_alerts",s,"No active alerts"),(0,o.kg)("editor.alert_center.no_alerts_desc",s,'Enable "Show all clear state" to display a calm fallback.'),"mdi:check-circle-outline")}injectModuleStyles(){return r.qy`<style>
      ${this.getStyles()}
    </style>`}getStyles(){return`\n      ${a.m.getSliderStyles()}\n      .uc-ac {\n        border-radius: var(--uc-ac-radius, 20px);\n        overflow: hidden;\n        background: linear-gradient(\n          180deg,\n          color-mix(in srgb, var(--uc-ac-accent) 7%, var(--uc-pane-bg, var(--card-background-color))),\n          var(--uc-pane-bg, var(--card-background-color))\n        );\n        border: var(--uc-pane-border, 1px solid color-mix(in srgb, var(--uc-ac-accent) 26%, var(--divider-color)));\n        padding: 12px;\n        box-shadow: var(--uc-pane-shadow, 0 8px 22px rgba(0,0,0,0.12));\n      }\n      .uc-ac-title {\n        font-size: 0.98rem;\n        font-weight: 800;\n        letter-spacing: 0.02em;\n        color: var(--uc-ac-accent);\n        margin-bottom: 10px;\n      }\n      .uc-ac-list {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n      }\n      .uc-ac-row {\n        border: none;\n        border-radius: var(--uc-r-12, 12px);\n        width: 100%;\n        padding: 10px 12px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        cursor: pointer;\n        background: color-mix(in srgb, var(--secondary-text-color) 10%, transparent);\n        color: var(--primary-text-color);\n        text-align: left;\n      }\n      .uc-ac-row.is-critical {\n        background: color-mix(in srgb, var(--error-color) 18%, transparent);\n        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--error-color) 45%, transparent);\n      }\n      .uc-ac-row.is-warning {\n        background: color-mix(in srgb, #f59e0b 20%, transparent);\n        box-shadow: inset 0 0 0 1px color-mix(in srgb, #f59e0b 45%, transparent);\n      }\n      .uc-ac-row.is-info {\n        background: color-mix(in srgb, var(--primary-color) 16%, transparent);\n        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary-color) 35%, transparent);\n      }\n      .uc-ac-row:hover { transform: translateY(-1px); }\n      .uc-ac-left {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        min-width: 0;\n      }\n      .uc-ac-left ha-icon {\n        --mdc-icon-size: 20px;\n        color: var(--uc-ac-accent);\n        flex-shrink: 0;\n      }\n      .uc-ac-text { min-width: 0; }\n      .uc-ac-name {\n        font-size: 0.9rem;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-ac-state {\n        margin-top: 2px;\n        font-size: 0.76rem;\n        color: var(--secondary-text-color);\n      }\n      .uc-ac-chevron {\n        --mdc-icon-size: 18px;\n        color: var(--secondary-text-color);\n        opacity: 0.8;\n      }\n      .uc-ac-clear {\n        min-height: 84px;\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        border-radius: var(--uc-r-12, 12px);\n        padding: 10px 12px;\n        background: color-mix(in srgb, var(--success-color) 14%, transparent);\n      }\n      .uc-ac-clear ha-icon {\n        --mdc-icon-size: 24px;\n        color: var(--success-color);\n      }\n      .uc-ac-clear-title {\n        font-size: 0.92rem;\n        font-weight: 700;\n      }\n      .uc-ac-clear-sub {\n        margin-top: 2px;\n        font-size: 0.78rem;\n        color: var(--secondary-text-color);\n      }\n    `}}},6673(e,t,i){i.d(t,{W:()=>n,p:()=>r});class r{constructor(e=32){this._cache=new Map,this._limit=e}read(e,t,i,r){const n=this._cache.get(e);if(n&&n.key===i&&function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(n.deps,t))return n.value;const a=r();if(this._cache.set(e,{deps:t,key:i,value:a}),this._cache.size>this._limit){const e=this._cache.keys().next().value;void 0!==e&&this._cache.delete(e)}return a}forget(e){this._cache.delete(e)}clear(){this._cache.clear()}}function n(...e){try{return JSON.stringify(e)}catch(e){return`__unserializable__${Math.random()}`}}},1299(e,t,i){i.d(t,{D:()=>o});var r=i(6752),n=i(7804),a=i(8504);const o=(0,n.u$)(class extends n.WL{constructor(){super(...arguments),this.key=r.s6}render(e,t){return this.key=e,t}update(e,[t,i]){return t!==this.key&&((0,a.mY)(e),this.key=t),i}})}};