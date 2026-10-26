export const __webpack_esm_ids__=[9533];export const __webpack_esm_modules__={3362(i,e,t){t.d(e,{UltraIrrigationModule:()=>V});var r=t(2618),n=t(3307),o=t(6478);t(7921);const a=["irrigation","sprinkler","zone","valve","station","drip","watering"],s={opensprinkler:"opensprinkler",rachio:"rachio",irrigation_unlimited:"irrigation_unlimited",bhyve:"bhyve"},d=new Set(["switch","input_boolean","valve","light","fan"]),l=["switch","valve","binary_sensor","sensor","input_boolean"],c=new Set(["on","open","opening","running","watering","irrigating","active","manual","program","once_program","master_engaged"]),u=new Set(["waiting","queued","pending","scheduled"]),p=new Set(["unavailable","unknown"]),g=[1,2,3,5,10,15,20,25,30,45,60,90,120,180,240],v=[24,48,72];function m(i){if(!i)return"";const e=i.indexOf(".");return e>0?i.slice(0,e):""}function _(i){return i||{}}function h(i){if("number"==typeof i)return Number.isFinite(i)?i:null;if("string"==typeof i&&""!==i.trim()){const e=Number(i);return Number.isFinite(e)?e:null}return null}function y(i){const e=Math.max(0,Math.round(i)),t=Math.floor(e/3600),r=Math.floor(e%3600/60),n=e%60,o=i=>String(i).padStart(2,"0");return`${o(t)}:${o(r)}:${o(n)}`}function f(i){const e=Math.max(0,Math.round(i)),t=Math.floor(e/3600),r=Math.floor(e%3600/60),n=e%60,o=i=>String(i).padStart(2,"0");return t>0?`${t}:${o(r)}:${o(n)}`:`${r}:${o(n)}`}function b(i){const e=i.trim();if(!e)return null;const t=/^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/i.exec(e);if(t&&e.length>1&&"PT"!==e.toUpperCase()){const[,i,e,r,n]=t;return 86400*Number(i||0)+3600*Number(e||0)+60*Number(r||0)+Number(n||0)}let r=0,n=e;const o=/^(\d+)\s+days?,?\s*(.*)$/i.exec(e);o&&(r=Number(o[1]),n=o[2]||"0:00:00");const a=n.split(":");if(a.length<2||a.length>3)return null;const s=a.map(i=>Number(i));if(s.some(i=>!Number.isFinite(i)||i<0))return null;const[d=0,l=0,c=0]=s;return 86400*r+(3===a.length?3600*d+60*l+c:60*d+l)}function k(i,e){var t;const r=null===(t=_(i).entities)||void 0===t?void 0:t[e];return"string"==typeof(null==r?void 0:r.platform)?r.platform:""}function x(i,e){const t=i.entity||"",r=function(i,e){const t=k(i,e);return s[t]||(/^binary_sensor\.irrigation_unlimited_/.test(e)?"irrigation_unlimited":"valve"===m(e)?"valve":"switch")}(e,t),n=i.run_mode||"auto",o=d.has(m(t));if("custom"===n)return{kind:"custom",preset:r,timed:!0};if("toggle"===n)return{kind:o?"toggle":"none",preset:r,timed:!1};const a="service"===n&&i.preset&&"auto"!==i.preset?i.preset:r;return function(i){return"opensprinkler"===i||"rachio"===i||"irrigation_unlimited"===i||"bhyve"===i}(a)?{kind:"service",preset:a,timed:!0}:"valve"===a||o?{kind:"toggle",preset:a,timed:!1}:{kind:"none",preset:a,timed:!1}}function w(i,e){const t=Math.max(0,Number.isFinite(e)?e:0),r=Math.round(60*t);return{entity_id:i,duration:t,duration_minutes:t,duration_seconds:r,duration_hms:y(r)}}const $=/\{\{\s*([a-z_]+)\s*\}\}/g,z=/^\{\{\s*([a-z_]+)\s*\}\}$/;function S(i,e){const t=e;if("string"==typeof i){const e=z.exec(i.trim());return e&&e[1]&&e[1]in t?t[e[1]]:i.replace($,(i,e)=>e in t?String(t[e]):i)}if(Array.isArray(i))return i.map(i=>S(i,e));if(i&&"object"==typeof i){const t={};for(const[r,n]of Object.entries(i))t[r]=S(n,e);return t}return i}function q(i,e){const t=m(i);return i&&d.has(t)?"valve"===t?{domain:"valve",service:e?"open_valve":"close_valve",data:{entity_id:i}}:{domain:"homeassistant",service:e?"turn_on":"turn_off",data:{entity_id:i}}:null}function M(i,e){switch(i){case"opensprinkler":return{domain:"opensprinkler",service:"stop",data:{entity_id:e}};case"irrigation_unlimited":return{domain:"irrigation_unlimited",service:"cancel",data:{entity_id:e}};case"bhyve":return{domain:"bhyve",service:"stop_watering",data:{entity_id:e}};default:return q(e,!1)}}function F(i,e,t){const r=function(i){if(!i)return null;const e=i.trim(),t=/^([a-z0-9_]+)\.([a-z0-9_]+)$/i.exec(e);return t&&t[1]&&t[2]?{domain:t[1],service:t[2]}:null}(i);if(!r)return null;const n=S(e||{},t);return{domain:r.domain,service:r.service,data:n&&"object"==typeof n&&!Array.isArray(n)?n:{}}}function A(i){if(!i)return"unavailable";const e=String(i.state||"").toLowerCase();return p.has(e)?"unavailable":c.has(e)?"running":u.has(e)?"queued":"idle"}const N=["remaining_seconds","seconds_remaining","time_remaining_seconds","run_seconds_remaining"],P=["remaining_minutes","minutes_remaining","time_remaining_minutes"],C=["time_remaining","remaining_time","remaining","remaining_duration"],D=["end_time","ends_at","end_at","finish_time","stop_time","end"];function R(i,e){if(!i)return null;const t=Date.parse(i);return Number.isFinite(t)?Math.max(0,(e-t)/1e3):null}function U(i){const e=m(i);return"switch"===e||"input_boolean"===e?"toggle":"number"===e||"input_number"===e?"number":"select"===e||"input_select"===e?"select":"readonly"}function Z(i,e,t){const r=U(i),n=m(i);if("toggle"===r)return{domain:"homeassistant",service:t>0?"turn_on":"turn_off",data:{entity_id:i}};if("number"===r){const r=(null==e?void 0:e.attributes)||{},o=h(r.min),a=h(r.max);let s=t;return null!==o&&(s=Math.max(o,s)),null!==a&&(s=Math.min(a,s)),{domain:n,service:"set_value",data:{entity_id:i,value:s}}}return null}function L(i,e){var t,r,n;const o=_(i),a=null===(r=null===(t=o.entities)||void 0===t?void 0:t[e])||void 0===r?void 0:r.device_id;if(!a)return"";const s=null===(n=o.devices)||void 0===n?void 0:n[a];return String((null==s?void 0:s.name_by_user)||(null==s?void 0:s.name)||"")}function E(i,e=[],t=24){var r,n;const o=null==i?void 0:i.states;if(!o)return[];const d=new Set(e),l=_(i),c=[];for(const e of Object.keys(o).sort()){if(d.has(e))continue;const u=m(e),p=null===(r=l.entities)||void 0===r?void 0:r[e];if((null==p?void 0:p.disabled_by)||(null==p?void 0:p.hidden_by))continue;const g=k(i,e),v=s[g];let _=!1;if("opensprinkler"===v)_="binary_sensor"===u&&/_station_running$/.test(e);else if("irrigation_unlimited"===v||/^binary_sensor\.irrigation_unlimited_/.test(e))_="binary_sensor"===u&&/_c\d+_z\d+$/.test(e);else if("rachio"===v||"bhyve"===v)_="switch"===u&&!/(rain_delay|standby|schedule|smart_watering)/.test(e);else if("switch"===u||"valve"===u){const t=o[e],r=[e,String((null===(n=null==t?void 0:t.attributes)||void 0===n?void 0:n.friendly_name)||""),L(i,e)].join(" ").toLowerCase();_=a.some(i=>r.includes(i))}if(_&&c.push(e),c.length>=t)break}return c}function I(i){return`zone_${(i.split(".")[1]||"zone").replace(/[^a-z0-9_]/gi,"").slice(0,24)}_${Math.random().toString(36).slice(2,7)}`}function O(i,e){const t=new Map;for(const e of i)e.entity&&!t.has(e.entity)&&t.set(e.entity,e);const r=new Set,n=[];for(const i of e)i&&!r.has(i)&&(r.add(i),n.push(t.get(i)||{id:I(i),entity:i}));return n}const j={opensprinkler:["editor.irrigation.preset_opensprinkler","OpenSprinkler"],rachio:["editor.irrigation.preset_rachio","Rachio"],irrigation_unlimited:["editor.irrigation.preset_irrigation_unlimited","Irrigation Unlimited"],bhyve:["editor.irrigation.preset_bhyve","B-hyve"],valve:["editor.irrigation.preset_valve","Valve"],switch:["editor.irrigation.preset_switch","Switch (on/off)"]};function T(i,e){e&&(i.stopPropagation(),(i.currentTarget||i.target||document.body).dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}})))}class V extends n.m{constructor(){super(...arguments),this.metadata={type:"irrigation",title:"Irrigation",description:"Sprinkler and valve zones for any integration with timed runs, rain delay, and moisture",author:"WJD Designs",version:"1.0.0",icon:"mdi:sprinkler-variant",category:"interactive",tags:["irrigation","sprinkler","garden","lawn","valve","watering","opensprinkler","rachio","interactive"]},this._durations=new Map,this._requests=new Map,this._expanded=new Map,this._tick=null,this._lastRunningAt=0}createDefault(i,e){return{id:i||this.generateId("irrigation"),type:"irrigation",title:"",show_title:!0,zones:[],default_duration_minutes:10,layout:"full",show_remaining:!0,show_duration_control:!0,run_all_mode:"none",moisture_dry_threshold:30,moisture_wet_threshold:70,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(i){const e=[];return i.id||e.push("Module ID is required"),i.type||e.push("Module type is required"),{valid:0===e.length,errors:e}}getRuntimeEntityIds(i){const e=i,t=[];for(const i of e.zones||[])i.entity&&t.push(i.entity),i.moisture_entity&&t.push(i.moisture_entity),i.remaining_entity&&t.push(i.remaining_entity);for(const i of[e.master_entity,e.rain_delay_entity,e.rain_sensor_entity,e.next_run_entity,e.flow_entity,e.water_used_entity,e.run_all_entity])i&&t.push(i);return t}destroy(){this._tick&&(clearInterval(this._tick),this._tick=null)}renderGeneralTab(i,e,t,n){var a,s;const d=i,c=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en",u=d.zones||[],p=null!==(s=d.default_duration_minutes)&&void 0!==s?s:10;return r.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this._editorStyles()}
      </style>
      <div class="module-general-settings">
        <div class="settings-section">
          <div class="section-title">
            ${(0,o.kg)("editor.irrigation.zones_section",c,"Zones")}
          </div>
          <div class="uc-irr-ed-desc">
            ${(0,o.kg)("editor.irrigation.zones_section_desc",c,"Pick the switch or valve entities for each sprinkler zone. Integration zones (OpenSprinkler, Rachio, Irrigation Unlimited, B-hyve) are detected automatically.")}
          </div>

          ${this.renderChipListField((0,o.kg)("editor.irrigation.zone_entities",c,"Zone entities"),(0,o.kg)("editor.irrigation.zone_entities_desc",c,"One entity per zone, shown in this order."),e,u.map(i=>i.entity),i=>{n({zones:O(u,i)}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:l,variant:"primary"})}
          ${0===u.length?this._renderSuggestions(d,e,n,c):r.s6}

          ${this.renderSliderField((0,o.kg)("editor.irrigation.default_duration",c,"Default run time"),(0,o.kg)("editor.irrigation.default_duration_desc",c,"Minutes per run for zones without their own run time. Home Assistant ends timed runs, so they finish even if this dashboard is closed."),p,10,1,240,1,i=>{n({default_duration_minutes:i}),this.triggerPreviewUpdate()},(0,o.kg)("editor.irrigation.unit_min",c," min"))}

          ${u.map((i,r)=>this._renderZoneRow(d,i,r,e,t,n,c))}
        </div>

        ${this._renderDisplaySection(d,e,n,c)}
        ${this._renderAdvancedSection(d,e,t,n,c)}
      </div>
    `}_renderSuggestions(i,e,t,n){const a=E(e);return a.length?r.qy`
      <div class="uc-irr-ed-suggest">
        <div class="uc-irr-ed-suggest-title">
          ${(0,o.kg)("editor.irrigation.suggestions",n,"Suggested zones")}
        </div>
        <div class="uc-irr-ed-suggest-list">
          ${a.map(n=>{var o,a;return r.qy`<button
              type="button"
              class="uc-irr-ed-suggest-item"
              title=${n}
              @click=${()=>{t({zones:O(i.zones||[],[...(i.zones||[]).map(i=>i.entity),n])}),this.triggerPreviewUpdate()}}
            >
              <ha-icon icon="mdi:plus"></ha-icon>
              ${String((null===(a=null===(o=e.states[n])||void 0===o?void 0:o.attributes)||void 0===a?void 0:a.friendly_name)||n)}
            </button>`})}
        </div>
        <button
          type="button"
          class="uc-irr-ed-btn"
          @click=${()=>{t({zones:O(i.zones||[],a)}),this.triggerPreviewUpdate()}}
        >
          <ha-icon icon="mdi:playlist-plus"></ha-icon>
          ${(0,o.kg)("editor.irrigation.add_all_suggested",n,"Add all suggested")}
        </button>
      </div>
    `:r.qy`<div class="uc-irr-ed-empty">
        ${(0,o.kg)("editor.irrigation.no_suggestions",n,"No zone-like entities found. Add any switch or valve above.")}
      </div>`}_patchZone(i,e,t,r){r({zones:(i.zones||[]).map((i,r)=>r===e?Object.assign(Object.assign({},i),t):i)}),this.triggerPreviewUpdate()}_moveZone(i,e,t,r){const n=[...i.zones||[]],o=e+t,a=n[e],s=n[o];a&&s&&(n[e]=s,n[o]=a,r({zones:n}),this.triggerPreviewUpdate())}_removeZone(i,e,t){t({zones:(i.zones||[]).filter((i,t)=>t!==e)}),this.triggerPreviewUpdate()}_presetLabel(i,e){const[t,r]=j[i];return(0,o.kg)(t,e,r)}_planDescription(i,e){const t=this._presetLabel(i.preset,e);return"custom"===i.kind?(0,o.kg)("editor.irrigation.plan_custom",e,"Runs your custom action with the chosen run time."):"service"===i.kind?(0,o.kg)("editor.irrigation.plan_service",e,"{name}: runs for the chosen time and is stopped by Home Assistant.").replace("{name}",t):"toggle"===i.kind?(0,o.kg)("editor.irrigation.plan_toggle",e,"{name}: on/off only. For timed runs use Custom action (for example a script with a delay).").replace("{name}",t):(0,o.kg)("editor.irrigation.plan_none",e,"This entity cannot be switched directly. Choose Integration service or Custom action.")}_renderZoneRow(i,e,t,n,a,s,d){var l,c,u,p,g;const v=i.zones||[];let m=this._expanded.get(i.id);m||(m=new Set,this._expanded.set(i.id,m));const _=m.has(e.id),h=m,y=x(e,n),f=e.run_mode||"auto",b=null!==(l=i.default_duration_minutes)&&void 0!==l?l:10,k=String((null===(p=null===(u=null===(c=null==n?void 0:n.states)||void 0===c?void 0:c[e.entity])||void 0===u?void 0:u.attributes)||void 0===p?void 0:p.friendly_name)||e.entity),w=e.name||k;return r.qy`
      <div class="uc-irr-ed-row ${_?"expanded":""}">
        <div class="uc-irr-ed-row-head">
          <ha-icon
            class="uc-irr-ed-row-icon"
            icon=${e.icon||"mdi:sprinkler-variant"}
            style=${e.color?`color:${e.color}`:""}
          ></ha-icon>
          <div class="uc-irr-ed-row-text">
            <div class="uc-irr-ed-row-name">${w}</div>
            <div class="uc-irr-ed-row-sub">${this._presetLabel(y.preset,d)}</div>
          </div>
          <button
            class="uc-irr-ed-icon-btn"
            type="button"
            ?disabled=${0===t}
            title=${(0,o.kg)("editor.irrigation.move_up",d,"Move up")}
            aria-label=${(0,o.kg)("editor.irrigation.move_up",d,"Move up")}
            @click=${()=>this._moveZone(i,t,-1,s)}
          >
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button
            class="uc-irr-ed-icon-btn"
            type="button"
            ?disabled=${t===v.length-1}
            title=${(0,o.kg)("editor.irrigation.move_down",d,"Move down")}
            aria-label=${(0,o.kg)("editor.irrigation.move_down",d,"Move down")}
            @click=${()=>this._moveZone(i,t,1,s)}
          >
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
          <button
            class="uc-irr-ed-icon-btn ${_?"on":""}"
            type="button"
            title=${(0,o.kg)("editor.irrigation.edit_zone",d,"Edit zone")}
            aria-label=${(0,o.kg)("editor.irrigation.edit_zone",d,"Edit zone")}
            @click=${()=>{_?h.delete(e.id):h.add(e.id),this.triggerPreviewUpdate()}}
          >
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="uc-irr-ed-icon-btn danger"
            type="button"
            title=${(0,o.kg)("editor.irrigation.remove_zone",d,"Remove zone")}
            aria-label=${(0,o.kg)("editor.irrigation.remove_zone",d,"Remove zone")}
            @click=${()=>this._removeZone(i,t,s)}
          >
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>

        ${_?r.qy`<div class="uc-irr-ed-row-body">
              ${this.renderFieldSection((0,o.kg)("editor.irrigation.zone_name",d,"Name"),(0,o.kg)("editor.irrigation.zone_name_desc",d,"Leave blank to use the entity name."),n,{name:e.name||""},[this.textField("name")],e=>{var r;return this._patchZone(i,t,{name:(null===(r=e.detail.value)||void 0===r?void 0:r.name)||void 0},s)})}
              ${this.renderIconField((0,o.kg)("editor.irrigation.zone_icon",d,"Icon"),"",n,e.icon||"",e=>this._patchZone(i,t,{icon:e||void 0},s))}
              ${this.renderColorField((0,o.kg)("editor.irrigation.zone_color",d,"Color"),(0,o.kg)("editor.irrigation.zone_color_desc",d,"Accent for this zone while it runs."),n,e.color||"","",e=>this._patchZone(i,t,{color:e||void 0},s))}
              ${this.renderSliderField((0,o.kg)("editor.irrigation.zone_duration",d,"Run time"),(0,o.kg)("editor.irrigation.zone_duration_desc",d,"Minutes for this zone. Reset uses the default run time."),null!==(g=e.duration_minutes)&&void 0!==g?g:b,b,1,240,1,e=>this._patchZone(i,t,{duration_minutes:e===b?void 0:e},s),(0,o.kg)("editor.irrigation.unit_min",d," min"))}
              ${this.renderSegmentedField((0,o.kg)("editor.irrigation.run_mode",d,"Run mode"),(0,o.kg)("editor.irrigation.run_mode_desc",d,"How the Run button starts this zone."),f,[{value:"auto",label:(0,o.kg)("editor.irrigation.run_mode_auto",d,"Auto")},{value:"toggle",label:(0,o.kg)("editor.irrigation.run_mode_toggle",d,"On/off")},{value:"service",label:(0,o.kg)("editor.irrigation.run_mode_service",d,"Integration")},{value:"custom",label:(0,o.kg)("editor.irrigation.run_mode_custom",d,"Custom action")}],r=>{const n={run_mode:r};"custom"!==r||e.custom_data||(n.custom_data={entity_id:"{{ entity_id }}",duration:"{{ duration }}"}),this._patchZone(i,t,n,s)})}
              <div class="uc-irr-ed-hint">${this._planDescription(y,d)}</div>
              ${"service"===f?this.renderSegmentedField((0,o.kg)("editor.irrigation.preset",d,"Integration"),(0,o.kg)("editor.irrigation.preset_desc",d,"Which integration service starts the timed run."),e.preset||"auto",[{value:"auto",label:(0,o.kg)("editor.irrigation.preset_auto",d,"Auto-detect")},{value:"opensprinkler",label:this._presetLabel("opensprinkler",d)},{value:"rachio",label:this._presetLabel("rachio",d)},{value:"irrigation_unlimited",label:this._presetLabel("irrigation_unlimited",d)},{value:"bhyve",label:this._presetLabel("bhyve",d)},{value:"valve",label:this._presetLabel("valve",d)}],e=>this._patchZone(i,t,{preset:e},s),3):r.s6}
              ${"custom"===f?this._renderCustomAction(i,e,t,n,s,d):r.s6}
              ${this.renderConditionalFieldsGroup((0,o.kg)("editor.irrigation.zone_sensors",d,"Zone sensors"),r.qy`
                  ${this.renderEntityPickerWithVariables(n,a,"moisture_entity",e.moisture_entity||"",e=>this._patchZone(i,t,{moisture_entity:e||void 0},s),["sensor","number","input_number"],(0,o.kg)("editor.irrigation.moisture_entity",d,"Soil moisture sensor"))}
                  ${this.renderEntityPickerWithVariables(n,a,"remaining_entity",e.remaining_entity||"",e=>this._patchZone(i,t,{remaining_entity:e||void 0},s),["sensor"],(0,o.kg)("editor.irrigation.remaining_entity",d,"Remaining time sensor"))}
                  <div class="uc-irr-ed-hint">
                    ${(0,o.kg)("editor.irrigation.remaining_entity_desc",d,"Optional. Most integrations expose remaining time on the zone itself; otherwise the card shows an estimate.")}
                  </div>
                `)}
            </div>`:r.s6}
      </div>
    `}_renderCustomAction(i,e,t,n,a,s){return this.renderConditionalFieldsGroup((0,o.kg)("editor.irrigation.custom_action",s,"Custom action"),r.qy`
        ${this.renderFieldSection((0,o.kg)("editor.irrigation.custom_service",s,"Start service"),(0,o.kg)("editor.irrigation.custom_service_desc",s,"domain.service, for example script.water_zone or esphome.sprinkler_start_single_valve."),n,{custom_service:e.custom_service||""},[this.textField("custom_service")],e=>{var r;return this._patchZone(i,t,{custom_service:(null===(r=e.detail.value)||void 0===r?void 0:r.custom_service)||void 0},a)})}
        ${this.renderFieldSection((0,o.kg)("editor.irrigation.custom_data",s,"Start data"),(0,o.kg)("editor.irrigation.custom_data_desc",s,"Placeholders: {{ entity_id }}, {{ duration }} (minutes), {{ duration_seconds }}, {{ duration_hms }}."),n,{custom_data:e.custom_data||{}},[{name:"custom_data",selector:{object:{}}}],e=>{var r;const n=null===(r=e.detail.value)||void 0===r?void 0:r.custom_data;this._patchZone(i,t,{custom_data:n&&"object"==typeof n&&!Array.isArray(n)?n:void 0},a)})}
        ${this.renderFieldSection((0,o.kg)("editor.irrigation.custom_stop_service",s,"Stop service"),(0,o.kg)("editor.irrigation.custom_stop_service_desc",s,"Optional. Leave blank to turn the zone entity off."),n,{custom_stop_service:e.custom_stop_service||""},[this.textField("custom_stop_service")],e=>{var r;return this._patchZone(i,t,{custom_stop_service:(null===(r=e.detail.value)||void 0===r?void 0:r.custom_stop_service)||void 0},a)})}
      `)}_renderDisplaySection(i,e,t,n){return r.qy`
      ${this.renderSettingsSection((0,o.kg)("editor.irrigation.display_section",n,"Display"),(0,o.kg)("editor.irrigation.display_section_desc",n,"Title and what each row shows."),[{title:(0,o.kg)("editor.irrigation.show_title",n,"Show title"),description:"",hass:e,data:{show_title:!1!==i.show_title},schema:[this.booleanField("show_title")],onChange:i=>{var e;t({show_title:!1!==(null===(e=i.detail.value)||void 0===e?void 0:e.show_title)}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.irrigation.title",n,"Title"),description:(0,o.kg)("editor.irrigation.title_desc",n,'Leave blank for "Irrigation".'),hass:e,data:{title:i.title||""},schema:[this.textField("title")],onChange:i=>{var e;t({title:(null===(e=i.detail.value)||void 0===e?void 0:e.title)||""}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.irrigation.show_remaining",n,"Show remaining time"),description:"",hass:e,data:{show_remaining:!1!==i.show_remaining},schema:[this.booleanField("show_remaining")],onChange:i=>{var e;t({show_remaining:!1!==(null===(e=i.detail.value)||void 0===e?void 0:e.show_remaining)}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.irrigation.show_duration_control",n,"Run time stepper"),description:(0,o.kg)("editor.irrigation.show_duration_control_desc",n,"Lets you change the run time on the card before starting a timed zone."),hass:e,data:{show_duration_control:!1!==i.show_duration_control},schema:[this.booleanField("show_duration_control")],onChange:i=>{var e;t({show_duration_control:!1!==(null===(e=i.detail.value)||void 0===e?void 0:e.show_duration_control)}),this.triggerPreviewUpdate()}}])}
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,o.kg)("editor.irrigation.appearance_section",n,"Appearance")}
        </div>
        ${this.renderSegmentedField((0,o.kg)("editor.irrigation.layout",n,"Layout"),(0,o.kg)("editor.irrigation.layout_desc",n,"Full rows or a compact list."),i.layout||"full",[{value:"full",label:(0,o.kg)("editor.irrigation.layout_full",n,"Full"),icon:"mdi:view-agenda-outline"},{value:"compact",label:(0,o.kg)("editor.irrigation.layout_compact",n,"Compact"),icon:"mdi:view-list-outline"}],i=>{t({layout:i}),this.triggerPreviewUpdate()},2)}
        ${this.renderColorField((0,o.kg)("editor.irrigation.accent_color",n,"Accent color"),(0,o.kg)("editor.irrigation.accent_color_desc",n,"Used for running zones and buttons. Defaults to the theme primary color."),e,i.accent_color||"","",i=>{t({accent_color:i||void 0}),this.triggerPreviewUpdate()})}
      </div>
    `}_picker(i,e,t,r,n,o,a){return this.renderEntityPickerWithVariables(i,e,t,r||"",i=>{o({[t]:i||void 0}),this.triggerPreviewUpdate()},a,n)}_renderAdvancedSection(i,e,t,n,a){var s,d;const l=i.run_all_mode||"none";return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,o.kg)("editor.irrigation.advanced_section",a,"Advanced")}
        </div>
        <div class="uc-irr-ed-desc">
          ${(0,o.kg)("editor.irrigation.advanced_section_desc",a,"All optional. Anything you leave empty is simply not shown.")}
        </div>

        ${this.renderConditionalFieldsGroup((0,o.kg)("editor.irrigation.system_group",a,"System"),r.qy`
            ${this._picker(e,t,"master_entity",i.master_entity,(0,o.kg)("editor.irrigation.master_entity",a,"Master valve / pump"),n,["switch","valve","input_boolean"])}
            ${this._picker(e,t,"rain_delay_entity",i.rain_delay_entity,(0,o.kg)("editor.irrigation.rain_delay_entity",a,"Rain delay"),n,["switch","input_boolean","number","input_number","select","input_select","sensor","binary_sensor"])}
            <div class="uc-irr-ed-hint">
              ${(0,o.kg)("editor.irrigation.rain_delay_desc",a,"A switch toggles the delay, a number is set in hours (Off / 24 / 48 / 72 h), a select shows its options.")}
            </div>
            ${this._picker(e,t,"rain_sensor_entity",i.rain_sensor_entity,(0,o.kg)("editor.irrigation.rain_sensor_entity",a,"Rain sensor / skip indicator"),n,["binary_sensor","sensor","input_boolean","switch"])}
            ${this._picker(e,t,"next_run_entity",i.next_run_entity,(0,o.kg)("editor.irrigation.next_run_entity",a,"Next scheduled run"),n,["sensor","input_datetime","calendar"])}
          `)}

        ${this.renderConditionalFieldsGroup((0,o.kg)("editor.irrigation.water_group",a,"Water use"),r.qy`
            ${this._picker(e,t,"flow_entity",i.flow_entity,(0,o.kg)("editor.irrigation.flow_entity",a,"Flow rate sensor"),n,["sensor"])}
            ${this._picker(e,t,"water_used_entity",i.water_used_entity,(0,o.kg)("editor.irrigation.water_used_entity",a,"Water used today"),n,["sensor"])}
            <div class="uc-irr-ed-hint">
              ${(0,o.kg)("editor.irrigation.water_used_desc",a,"Tip: point this at a daily utility meter on your water meter.")}
            </div>
          `)}

        ${this.renderConditionalFieldsGroup((0,o.kg)("editor.irrigation.moisture_group",a,"Soil moisture"),r.qy`
            ${this.renderSliderField((0,o.kg)("editor.irrigation.moisture_dry",a,"Dry below"),"",null!==(s=i.moisture_dry_threshold)&&void 0!==s?s:30,30,0,100,1,i=>{n({moisture_dry_threshold:i}),this.triggerPreviewUpdate()},"%")}
            ${this.renderSliderField((0,o.kg)("editor.irrigation.moisture_wet",a,"Wet above"),"",null!==(d=i.moisture_wet_threshold)&&void 0!==d?d:70,70,0,100,1,i=>{n({moisture_wet_threshold:i}),this.triggerPreviewUpdate()},"%")}
          `)}

        ${this.renderConditionalFieldsGroup((0,o.kg)("editor.irrigation.run_all_group",a,"Run all zones"),r.qy`
            ${this.renderSegmentedField((0,o.kg)("editor.irrigation.run_all_mode",a,"Run all"),(0,o.kg)("editor.irrigation.run_all_mode_desc",a,"Runs through a script or an integration service so the sequence keeps going in Home Assistant."),l,[{value:"none",label:(0,o.kg)("editor.irrigation.run_all_none",a,"Off")},{value:"script",label:(0,o.kg)("editor.irrigation.run_all_script",a,"Script")},{value:"service",label:(0,o.kg)("editor.irrigation.run_all_service",a,"Service")}],i=>{n({run_all_mode:i}),this.triggerPreviewUpdate()},3)}
            ${"script"===l?this._picker(e,t,"run_all_entity",i.run_all_entity,(0,o.kg)("editor.irrigation.run_all_entity",a,"Script"),n,["script"]):r.s6}
            ${"service"===l?r.qy`
                  ${this.renderFieldSection((0,o.kg)("editor.irrigation.run_all_service_field",a,"Service"),(0,o.kg)("editor.irrigation.run_all_service_desc",a,"domain.service, for example rachio.start_multiple_zone_schedule or opensprinkler.run_program."),e,{run_all_service:i.run_all_service||""},[this.textField("run_all_service")],i=>{var e;n({run_all_service:(null===(e=i.detail.value)||void 0===e?void 0:e.run_all_service)||void 0}),this.triggerPreviewUpdate()})}
                  ${this.renderFieldSection((0,o.kg)("editor.irrigation.run_all_data",a,"Service data"),(0,o.kg)("editor.irrigation.run_all_data_desc",a,"Placeholders: {{ duration }} (default minutes), {{ duration_seconds }}, {{ duration_hms }}."),e,{run_all_data:i.run_all_data||{}},[{name:"run_all_data",selector:{object:{}}}],i=>{var e;const t=null===(e=i.detail.value)||void 0===e?void 0:e.run_all_data;n({run_all_data:t&&"object"==typeof t&&!Array.isArray(t)?t:void 0}),this.triggerPreviewUpdate()})}
                `:r.s6}
            ${"script"===l?r.qy`<div class="uc-irr-ed-hint">
                  ${(0,o.kg)("editor.irrigation.run_all_script_desc",a,"The script receives duration (minutes) and duration_seconds as variables.")}
                </div>`:r.s6}
          `)}
      </div>
    `}_call(i,e,t){if(i.stopPropagation(),!t||!(null==e?void 0:e.callService))return;const r=i.currentTarget||i.target;Promise.resolve(e.callService(t.domain,t.service,t.data)).catch(i=>{(r||document.body).dispatchEvent(new CustomEvent("hass-notification",{bubbles:!0,composed:!0,detail:{message:`${t.domain}.${t.service}: ${String(i)}`}}))}).then(()=>this.triggerPreviewUpdate(!0))}_durationKey(i,e){return`${i.id}:${e.id}`}_zoneMinutes(i,e){var t,r,n;return null!==(n=null!==(r=null!==(t=this._durations.get(this._durationKey(i,e)))&&void 0!==t?t:e.duration_minutes)&&void 0!==r?r:i.default_duration_minutes)&&void 0!==n?n:10}_buildZoneView(i,e,t,r,n){var o,a,s;const d=this.resolveEntity(e.entity,r)||e.entity||"",l=d?t.states[d]:void 0,c=d===e.entity?e:Object.assign(Object.assign({},e),{entity:d}),u=x(c,t),g=A(l),v=this._zoneMinutes(i,e),m=this._requests.get(d);if(m&&"running"!==g&&"queued"!==g){const i=(null==l?void 0:l.last_changed)?Date.parse(l.last_changed):NaN;Number.isFinite(i)&&i>m.requestedAt+5e3&&this._requests.delete(d)}let _=null,y=!1,f=null;if("running"===g){const i=this.resolveEntity(e.remaining_entity,r);_=null!==(o=function(i,e){if(!i)return null;const t=String(i.state||"");if(!t||p.has(t.toLowerCase()))return null;const r=i.attributes||{};if("timestamp"===r.device_class||/^\d{4}-\d{2}-\d{2}T/.test(t)){const i=Date.parse(t);return Number.isFinite(i)?Math.max(0,(i-e)/1e3):null}const n=h(t);if(null!==n){const i=String(r.unit_of_measurement||"").toLowerCase();return"h"===i||"hr"===i||"hours"===i?3600*n:"s"===i||"sec"===i||"seconds"===i?n:60*n}return b(t)}(i?t.states[i]:void 0,n))&&void 0!==o?o:function(i,e){if(!i)return null;for(const e of N){const t=h(i[e]);if(null!==t&&t>=0)return t}for(const e of P){const t=h(i[e]);if(null!==t&&t>=0)return 60*t}for(const e of C){const t=i[e];if(null==t||""===t)continue;const r=h(t);if(null!==r&&r>=0)return r;if("string"==typeof t){const i=b(t);if(null!==i)return i}}for(const t of D){const r=i[t];if("string"!=typeof r||!r)continue;const n=Date.parse(r);if(Number.isFinite(n))return Math.max(0,(n-e)/1e3)}return null}(null==l?void 0:l.attributes,n);const a=this._requests.get(d);null===_&&(_=function(i,e,t){if(!(i&&i.durationSeconds>0))return null;const r=e?Date.parse(e):NaN,n=Number.isFinite(r)&&r>=i.requestedAt-5e3?r:i.requestedAt;return Math.max(0,(n+1e3*i.durationSeconds-t)/1e3)}(a,null==l?void 0:l.last_changed,n),y=null!==_),null!==_&&a&&a.durationSeconds>0&&(f=Math.min(1,Math.max(0,1-_/a.durationSeconds)))}const k=function(i,e){if(!e)return null;const t=i.states[e];if(!t)return null;const r=Number(t.state);return Number.isFinite(r)?r:null}(t,this.resolveEntity(e.moisture_entity,r));return{zone:c,entityId:d,name:e.name||String((null===(a=null==l?void 0:l.attributes)||void 0===a?void 0:a.friendly_name)||"")||(d.split(".")[1]||"").replace(/_/g," ")||"Zone",icon:e.icon||String((null===(s=null==l?void 0:l.attributes)||void 0===s?void 0:s.icon)||"")||"mdi:sprinkler-variant",color:e.color||"",status:g,plan:u,minutes:v,remaining:_,estimated:y,elapsed:"running"===g?R(null==l?void 0:l.last_changed,n):null,progress:f,moisture:k}}_syncTick(i){i&&(this._lastRunningAt=Date.now(),this._tick||(this._tick=setInterval(()=>{Date.now()-this._lastRunningAt>5e3?this.destroy():this.triggerPreviewUpdate(!1,!0)},1e3)))}renderPreview(i,e,t,n){var a,s,d;const l=i,c=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en",u=(l.zones||[]).filter(i=>i&&i.entity);if(!u.length){const i=(null==e?void 0:e.states)?E(e).length:0;return r.qy`
        <div class="uc-irr-empty">
          ${this.renderGradientErrorState((0,o.kg)("editor.irrigation.empty_title",c,"Add your irrigation zones"),i>0?(0,o.kg)("editor.irrigation.empty_desc_found",c,"{count} likely zones found. Add them in the General tab.").replace("{count}",String(i)):(0,o.kg)("editor.irrigation.empty_desc",c,"Pick switch or valve entities for your sprinkler zones in the General tab."),"mdi:sprinkler-variant")}
        </div>
      `}const p=Date.now(),g=(null==e?void 0:e.states)?u.map(i=>this._buildZoneView(l,i,e,t,p)):[];this._syncTick(g.some(i=>"running"===i.status));const v="compact"===(l.layout||"full"),_=l.accent_color?`--uc-irr-accent:${l.accent_color};`:"",h=this.buildStyleString(this.buildDesignStyles(i,e)),y=this.getHoverEffectClass(i),f=(null===(s=l.title)||void 0===s?void 0:s.trim())||(0,o.kg)("editor.irrigation.default_title",c,"Irrigation"),b=function(i,e){const t=i.run_all_mode||"none";if("script"===t){const t=i.run_all_entity||"";if("script"!==m(t))return null;const r=w(t,e);return{domain:"script",service:"turn_on",data:{entity_id:t,variables:{duration:r.duration,duration_seconds:r.duration_seconds}}}}return"service"===t?F(i.run_all_service,i.run_all_data,w("",e)):null}(l,null!==(d=l.default_duration_minutes)&&void 0!==d?d:10);return r.qy`
      <div
        class="uc-irr ${v?"compact":"full"} ${y}"
        data-uc-role="pane"
        style="${_}${h}"
      >
        ${this.wrapWithAnimation(r.qy`
            ${!1!==l.show_title||b?r.qy`<div class="uc-irr-head">
                  ${!1!==l.show_title?r.qy`<div class="uc-irr-title">
                        <ha-icon icon="mdi:sprinkler-variant"></ha-icon>
                        <span>${f}</span>
                      </div>`:r.qy`<span></span>`}
                  ${b?r.qy`<button
                        type="button"
                        class="uc-irr-btn uc-irr-runall"
                        @click=${i=>this._call(i,e,b)}
                      >
                        <ha-icon icon="mdi:play-circle-outline"></ha-icon>
                        ${(0,o.kg)("editor.irrigation.run_all",c,"Run all")}
                      </button>`:r.s6}
                </div>`:r.s6}
            ${this._renderStatusStrip(l,e,t,c)}
            <div class="uc-irr-zones">
              ${g.map(i=>this._renderZone(l,i,e,c,v))}
            </div>
          `,i,e)}
      </div>
    `}_renderStatusStrip(i,e,t,n){if(!(null==e?void 0:e.states))return r.s6;const a=[],s=this.resolveEntity(i.master_entity,t);if(s&&e.states[s]){const i="running"===A(e.states[s]),t="valve"===m(s)?{domain:"valve",service:i?"close_valve":"open_valve",data:{entity_id:s}}:{domain:"homeassistant",service:i?"turn_off":"turn_on",data:{entity_id:s}};a.push(r.qy`<button
        type="button"
        class="uc-irr-chip ${i?"active":""}"
        aria-pressed=${i?"true":"false"}
        @click=${i=>this._call(i,e,t)}
      >
        <ha-icon icon=${i?"mdi:pump":"mdi:pump-off"}></ha-icon>
        <span
          >${(0,o.kg)("editor.irrigation.master",n,"Master")}:
          ${i?(0,o.kg)("editor.irrigation.state_on",n,"On"):(0,o.kg)("editor.irrigation.state_off",n,"Off")}</span
        >
      </button>`)}const d=this.resolveEntity(i.rain_sensor_entity,t);if(d&&e.states[d]){const i=function(i){if(!i)return!1;const e=String(i.state||"").toLowerCase();if(p.has(e))return!1;if(["on","true","wet","rain","raining","rainy","skip","skipped","yes"].includes(e))return!0;const t=h(e);return null!==t&&t>0}(e.states[d]);a.push(r.qy`<button
        type="button"
        class="uc-irr-chip ${i?"warn":""}"
        @click=${i=>T(i,d)}
      >
        <ha-icon icon=${i?"mdi:weather-pouring":"mdi:weather-partly-cloudy"}></ha-icon>
        <span
          >${i?(0,o.kg)("editor.irrigation.rain_active",n,"Rain: skipping"):(0,o.kg)("editor.irrigation.rain_clear",n,"No rain")}</span
        >
      </button>`)}const l=this.resolveEntity(i.next_run_entity,t);l&&e.states[l]&&a.push(r.qy`<button
        type="button"
        class="uc-irr-chip"
        @click=${i=>T(i,l)}
      >
        <ha-icon icon="mdi:calendar-clock"></ha-icon>
        <span
          >${(0,o.kg)("editor.irrigation.next_run",n,"Next")}:
          ${this._formatNextRun(e,l,n)}</span
        >
      </button>`);const c=this.resolveEntity(i.flow_entity,t);c&&e.states[c]&&a.push(r.qy`<button
        type="button"
        class="uc-irr-chip"
        @click=${i=>T(i,c)}
      >
        <ha-icon icon="mdi:waves-arrow-right"></ha-icon>
        <span>${this._formatValue(e,c)}</span>
      </button>`);const u=this.resolveEntity(i.water_used_entity,t);u&&e.states[u]&&a.push(r.qy`<button
        type="button"
        class="uc-irr-chip"
        @click=${i=>T(i,u)}
      >
        <ha-icon icon="mdi:water"></ha-icon>
        <span
          >${(0,o.kg)("editor.irrigation.water_today",n,"Today")}:
          ${this._formatValue(e,u)}</span
        >
      </button>`);const g=this._renderRainDelay(i,e,t,n);return a.length||g!==r.s6?r.qy`
      <div class="uc-irr-strip">${a}</div>
      ${g}
    `:r.s6}_renderRainDelay(i,e,t,n){var a;const s=this.resolveEntity(i.rain_delay_entity,t),d=s?e.states[s]:void 0;if(!s||!d)return r.s6;const l=U(s),c=function(i,e){var t,r;if(!i||!e)return!1;const n=String(e.state||"").toLowerCase();if(p.has(n))return!1;const o=U(i);if("number"===o)return(null!==(t=h(e.state))&&void 0!==t?t:0)>0;if("select"===o)return!["off","none","0","disabled","no delay",""].includes(n);if(/^\d{4}-\d{2}-\d{2}T/.test(e.state)){const i=Date.parse(e.state);return Number.isFinite(i)&&i>Date.now()}return"on"===n||"true"===n||"active"===n||(null!==(r=h(n))&&void 0!==r?r:0)>0}(s,d),u=(0,o.kg)("editor.irrigation.rain_delay",n,"Rain delay");let g;if("toggle"===l)g=r.qy`<button
        type="button"
        class="uc-irr-seg ${c?"on":""}"
        aria-pressed=${c?"true":"false"}
        @click=${i=>this._call(i,e,Z(s,d,c?0:24))}
      >
        ${c?(0,o.kg)("editor.irrigation.state_on",n,"On"):(0,o.kg)("editor.irrigation.state_off",n,"Off")}
      </button>`;else if("number"===l){const i=Number(d.state);g=r.qy`${[0,...v].map(t=>r.qy`<button
          type="button"
          class="uc-irr-seg ${i===t?"on":""}"
          aria-pressed=${i===t?"true":"false"}
          @click=${i=>this._call(i,e,Z(s,d,t))}
        >
          ${0===t?(0,o.kg)("editor.irrigation.state_off",n,"Off"):`${t}h`}
        </button>`)}`}else if("select"===l){const i=Array.isArray(null===(a=d.attributes)||void 0===a?void 0:a.options)?d.attributes.options.map(i=>String(i)).slice(0,6):[];g=r.qy`${i.map(i=>r.qy`<button
          type="button"
          class="uc-irr-seg ${d.state===i?"on":""}"
          aria-pressed=${d.state===i?"true":"false"}
          @click=${t=>{return this._call(t,e,(n=i,{domain:m(r=s),service:"select_option",data:{entity_id:r,option:n}}));var r,n}}
        >
          ${i}
        </button>`)}`}else g=r.qy`<span class="uc-irr-delay-state">${this._formatValue(e,s)}</span>`;return r.qy`<div class="uc-irr-delay ${c?"active":""}">
      <button
        type="button"
        class="uc-irr-delay-label"
        @click=${i=>T(i,s)}
      >
        <ha-icon icon=${c?"mdi:weather-rainy":"mdi:umbrella-closed-outline"}></ha-icon>
        <span>${u}</span>
      </button>
      <div class="uc-irr-delay-controls">${g}</div>
    </div>`}_formatValue(i,e){const t=i.states[e];if(!t)return"—";const r=function(i,e){var t,r;if(!e)return"";const n=null===(r=null===(t=i.states[e])||void 0===t?void 0:t.attributes)||void 0===r?void 0:r.unit_of_measurement;return"string"==typeof n?n:""}(i,e),n=Number(t.state),o=Number.isFinite(n)?String(Math.round(10*n)/10):t.state;return r?`${o} ${r}`:o}_formatNextRun(i,e,t){var r;const n=i.states[e];if(!n)return"—";const o=String(n.state||""),a=null===(r=n.attributes)||void 0===r?void 0:r.start_time,s=/^\d{4}-\d{2}-\d{2}/.test(o)?o:"string"==typeof a?a:"",d=s?Date.parse(s):NaN;if(!Number.isFinite(d))return this._formatValue(i,e);try{return new Date(d).toLocaleString(t,{weekday:"short",hour:"2-digit",minute:"2-digit"})}catch(i){return new Date(d).toLocaleString()}}_statusText(i,e,t){if("unavailable"===i.status)return(0,o.kg)("editor.irrigation.status_unavailable",t,"Unavailable");if("queued"===i.status)return(0,o.kg)("editor.irrigation.status_queued",t,"Queued");if("running"===i.status){const r=(0,o.kg)("editor.irrigation.status_running",t,"Running");if(!1===e.show_remaining)return r;if(null!==i.remaining){const e=(0,o.kg)("editor.irrigation.time_left",t,"{time} left").replace("{time}",f(i.remaining));return i.estimated?`${r} · ${e} (${(0,o.kg)("editor.irrigation.estimate",t,"est.")})`:`${r} · ${e}`}return null!==i.elapsed?`${r} · ${(0,o.kg)("editor.irrigation.time_elapsed",t,"for {time}").replace("{time}",f(i.elapsed))}`:r}const r=(0,o.kg)("editor.irrigation.status_idle",t,"Idle");return i.plan.timed?`${r} · ${i.minutes} ${(0,o.kg)("editor.irrigation.unit_min_short",t,"min")}`:r}_renderZone(i,e,t,n,a){var s,d;const l="running"===e.status||"queued"===e.status,c="none"!==e.plan.kind&&"unavailable"!==e.status,u=function(i,e,t){const r=i.entity||"";return"custom"===e.kind?F(i.custom_service,i.custom_data,w(r,t)):"service"===e.kind?function(i,e,t){const r=w(e,t);switch(i){case"opensprinkler":return{domain:"opensprinkler",service:"run_station",data:{entity_id:e,run_seconds:r.duration_seconds}};case"rachio":return{domain:"rachio",service:"start_watering",data:{entity_id:e,duration:Math.max(1,Math.round(r.duration))}};case"irrigation_unlimited":return{domain:"irrigation_unlimited",service:"manual_run",data:{entity_id:e,time:r.duration_hms}};case"bhyve":return{domain:"bhyve",service:"start_watering",data:{entity_id:e,minutes:Math.max(1,Math.round(r.duration))}};default:return null}}(e.preset,r,t):"toggle"===e.kind?q(r,!0):null}(e.zone,e.plan,e.minutes),p=function(i,e){const t=i.entity||"";return"custom"===e.kind?i.custom_stop_service?F(i.custom_stop_service,i.custom_stop_data||{entity_id:"{{ entity_id }}"},w(t,0)):M(e.preset,t):"service"===e.kind?M(e.preset,t):"toggle"===e.kind?q(t,!1):null}(e.zone,e.plan),v=!a&&!1!==i.show_duration_control&&e.plan.timed&&!l&&c,m=null!==(s=i.moisture_dry_threshold)&&void 0!==s?s:30,_=null!==(d=i.moisture_wet_threshold)&&void 0!==d?d:70,h=e.color?`--uc-irr-zone:${e.color};`:"",y=l?(0,o.kg)("editor.irrigation.stop",n,"Stop"):(0,o.kg)("editor.irrigation.run",n,"Run"),f=(t,r)=>{t.stopPropagation(),this._durations.set(this._durationKey(i,e.zone),function(i,e){const t=Number.isFinite(i)&&i>0?i:10;if(e>0){const i=g.find(i=>i>t);return null!=i?i:t}let r;for(const i of g)i<t&&(r=i);return null!=r?r:t}(e.minutes,r)),this.triggerPreviewUpdate(!0,!0)},b=null!==e.moisture?(()=>{const i=function(i,e,t){const r=Math.min(e,t),n=Math.max(e,t);return i<r?"dry":i>n?"wet":"ok"}(e.moisture,m,_),t=Math.max(0,Math.min(100,e.moisture)),s="dry"===i?(0,o.kg)("editor.irrigation.moisture_dry_label",n,"Dry"):"wet"===i?(0,o.kg)("editor.irrigation.moisture_wet_label",n,"Wet"):(0,o.kg)("editor.irrigation.moisture_ok_label",n,"OK");return a?r.qy`<span class="uc-irr-moist-text ${i}">${Math.round(t)}%</span>`:r.qy`<div
              class="uc-irr-moist ${i}"
              role="meter"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow=${String(Math.round(t))}
              aria-label=${(0,o.kg)("editor.irrigation.moisture",n,"Soil moisture")}
              @click=${i=>T(i,this.resolveEntity(e.zone.moisture_entity))}
            >
              <div class="uc-irr-moist-track">
                <div class="uc-irr-moist-mark" style="left:${Math.min(m,_)}%"></div>
                <div class="uc-irr-moist-mark" style="left:${Math.max(m,_)}%"></div>
                <div class="uc-irr-moist-fill" style="width:${t}%"></div>
              </div>
              <span class="uc-irr-moist-text">${Math.round(t)}% · ${s}</span>
            </div>`})():r.s6;return r.qy`
      <div
        class="uc-irr-zone status-${e.status} ${a?"compact":""}"
        style=${h}
      >
        <button
          type="button"
          class="uc-irr-zone-icon"
          aria-label=${e.name}
          @click=${i=>T(i,e.entityId)}
        >
          <ha-icon icon=${e.icon}></ha-icon>
        </button>
        <div class="uc-irr-zone-main">
          <div class="uc-irr-zone-name">${e.name}</div>
          <div class="uc-irr-zone-sub">${this._statusText(e,i,n)}</div>
          ${null===e.progress||a?r.s6:r.qy`<div class="uc-irr-progress">
                <div class="uc-irr-progress-fill" style="width:${Math.round(100*e.progress)}%"></div>
              </div>`}
          ${a?r.s6:b}
        </div>
        ${a?b:r.s6}
        ${v?r.qy`<div class="uc-irr-stepper">
              <button
                type="button"
                class="uc-irr-step"
                aria-label=${(0,o.kg)("editor.irrigation.less_time",n,"Less time")}
                @click=${i=>f(i,-1)}
              >
                <ha-icon icon="mdi:minus"></ha-icon>
              </button>
              <span class="uc-irr-step-value"
                >${e.minutes}<small
                  >${(0,o.kg)("editor.irrigation.unit_min_short",n,"min")}</small
                ></span
              >
              <button
                type="button"
                class="uc-irr-step"
                aria-label=${(0,o.kg)("editor.irrigation.more_time",n,"More time")}
                @click=${i=>f(i,1)}
              >
                <ha-icon icon="mdi:plus"></ha-icon>
              </button>
            </div>`:r.s6}
        <button
          type="button"
          class="uc-irr-run ${l?"stop":""}"
          ?disabled=${!c||!(l?p:u)}
          aria-label="${y} ${e.name}"
          title=${y}
          @click=${i=>{l?this._call(i,t,p):(e.plan.timed&&this._requests.set(e.entityId,{durationSeconds:Math.round(60*e.minutes),requestedAt:Date.now()}),this._call(i,t,u))}}
        >
          <ha-icon icon=${l?"mdi:stop":"mdi:play"}></ha-icon>
        </button>
      </div>
    `}_editorStyles(){return`\n      .uc-irr-ed-desc { font-size: 13px; opacity: 0.8; margin-bottom: 12px; }\n      .uc-irr-ed-hint { font-size: 12px; opacity: 0.75; margin: -8px 0 16px; line-height: 1.4; }\n      .uc-irr-ed-empty { font-size: 13px; opacity: 0.75; margin: 0 0 16px; }\n      .uc-irr-ed-suggest {\n        border: 1px dashed var(--divider-color);\n        border-radius: 8px;\n        padding: 12px;\n        margin-bottom: 16px;\n      }\n      .uc-irr-ed-suggest-title { font-weight: 600; font-size: 13px; margin-bottom: 8px; }\n      .uc-irr-ed-suggest-list { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }\n      .uc-irr-ed-suggest-item, .uc-irr-ed-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 4px;\n        min-height: 36px;\n        padding: 4px 12px;\n        border-radius: 18px;\n        border: 1px solid var(--divider-color);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        color: var(--primary-text-color);\n        font: inherit;\n        font-size: 13px;\n        cursor: pointer;\n      }\n      .uc-irr-ed-btn {\n        border-color: var(--primary-color);\n        background: color-mix(in srgb, var(--primary-color) 14%, transparent);\n        font-weight: 600;\n      }\n      .uc-irr-ed-suggest-item ha-icon, .uc-irr-ed-btn ha-icon { --mdc-icon-size: 16px; }\n      .uc-irr-ed-row {\n        border: 1px solid var(--divider-color);\n        border-radius: 8px;\n        margin-bottom: 8px;\n        background: var(--uc-pane-bg, var(--card-background-color));\n      }\n      .uc-irr-ed-row.expanded { border-color: var(--primary-color); }\n      .uc-irr-ed-row-head { display: flex; align-items: center; gap: 6px; padding: 6px 8px; }\n      .uc-irr-ed-row-icon { --mdc-icon-size: 22px; color: var(--primary-color); flex-shrink: 0; }\n      .uc-irr-ed-row-text { flex: 1; min-width: 0; }\n      .uc-irr-ed-row-name {\n        font-weight: 600;\n        font-size: 14px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-irr-ed-row-sub { font-size: 12px; opacity: 0.7; }\n      .uc-irr-ed-icon-btn {\n        width: 36px;\n        height: 36px;\n        border: none;\n        border-radius: 50%;\n        background: transparent;\n        color: var(--primary-text-color);\n        cursor: pointer;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n      }\n      .uc-irr-ed-icon-btn:hover { background: var(--secondary-background-color); }\n      .uc-irr-ed-icon-btn:disabled { opacity: 0.3; cursor: default; }\n      .uc-irr-ed-icon-btn.on { color: var(--primary-color); }\n      .uc-irr-ed-icon-btn.danger { color: var(--error-color, #db4437); }\n      .uc-irr-ed-icon-btn ha-icon { --mdc-icon-size: 20px; }\n      .uc-irr-ed-row-body { padding: 8px 12px 4px; border-top: 1px solid var(--divider-color); }\n      ${n.m.getSliderStyles()}\n    `}getStyles(){return"\n      .uc-irr {\n        --uc-irr-accent-resolved: var(--uc-irr-accent, var(--primary-color));\n        box-sizing: border-box;\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        padding: 14px;\n        border-radius: var(--uc-r-12, 12px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        color: var(--primary-text-color);\n      }\n      .uc-irr.compact { gap: 6px; padding: 10px; }\n      .uc-irr button { font: inherit; }\n      .uc-irr-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }\n      .uc-irr-title { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 16px; min-width: 0; }\n      .uc-irr-title ha-icon { color: var(--uc-irr-accent-resolved); --mdc-icon-size: 22px; flex-shrink: 0; }\n      .uc-irr-title span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n      .uc-irr-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        min-height: 44px;\n        padding: 0 14px;\n        border-radius: 22px;\n        border: 1px solid var(--uc-irr-accent-resolved);\n        background: color-mix(in srgb, var(--uc-irr-accent-resolved) 14%, transparent);\n        color: var(--primary-text-color);\n        font-weight: 600;\n        cursor: pointer;\n        flex-shrink: 0;\n      }\n      .uc-irr-btn ha-icon { --mdc-icon-size: 20px; color: var(--uc-irr-accent-resolved); }\n      .uc-irr-strip { display: flex; flex-wrap: wrap; gap: 6px; }\n      .uc-irr-strip:empty { display: none; }\n      .uc-irr-chip {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        min-height: 36px;\n        padding: 4px 12px;\n        border-radius: 18px;\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color, transparent);\n        color: var(--primary-text-color);\n        font-size: 13px;\n        cursor: pointer;\n        max-width: 100%;\n      }\n      .uc-irr-chip span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n      .uc-irr-chip ha-icon { --mdc-icon-size: 18px; color: var(--secondary-text-color); flex-shrink: 0; }\n      .uc-irr-chip.active { border-color: var(--uc-irr-accent-resolved); }\n      .uc-irr-chip.active ha-icon { color: var(--uc-irr-accent-resolved); }\n      .uc-irr-chip.warn { border-color: var(--warning-color, #ffa600); }\n      .uc-irr-chip.warn ha-icon { color: var(--warning-color, #ffa600); }\n      .uc-irr-delay {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        gap: 8px;\n        padding: 6px 8px;\n        border-radius: 10px;\n        border: 1px solid var(--divider-color);\n      }\n      .uc-irr-delay.active { border-color: var(--warning-color, #ffa600); }\n      .uc-irr-delay-label {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        border: none;\n        background: none;\n        color: var(--primary-text-color);\n        font-size: 14px;\n        font-weight: 600;\n        cursor: pointer;\n        min-height: 44px;\n        padding: 0 4px;\n      }\n      .uc-irr-delay-label ha-icon { --mdc-icon-size: 20px; color: var(--secondary-text-color); }\n      .uc-irr-delay.active .uc-irr-delay-label ha-icon { color: var(--warning-color, #ffa600); }\n      .uc-irr-delay-controls { display: flex; flex-wrap: wrap; gap: 4px; }\n      .uc-irr-delay-state { font-size: 13px; color: var(--secondary-text-color); }\n      .uc-irr-seg {\n        min-width: 44px;\n        min-height: 44px;\n        padding: 0 10px;\n        border-radius: 10px;\n        border: 1px solid var(--divider-color);\n        background: transparent;\n        color: var(--primary-text-color);\n        font-size: 13px;\n        cursor: pointer;\n      }\n      .uc-irr-seg.on {\n        border-color: var(--uc-irr-accent-resolved);\n        background: color-mix(in srgb, var(--uc-irr-accent-resolved) 18%, transparent);\n        font-weight: 600;\n      }\n      .uc-irr-zones { display: flex; flex-direction: column; gap: 8px; }\n      .uc-irr.compact .uc-irr-zones { gap: 2px; }\n      .uc-irr-zone {\n        --uc-irr-zone-resolved: var(--uc-irr-zone, var(--uc-irr-accent-resolved));\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        padding: 8px 10px;\n        border-radius: 12px;\n        border: 1px solid var(--divider-color);\n        min-width: 0;\n      }\n      .uc-irr-zone.compact { border: none; padding: 2px 4px; gap: 8px; }\n      .uc-irr-zone.status-running {\n        border-color: var(--uc-irr-zone-resolved);\n        background: color-mix(in srgb, var(--uc-irr-zone-resolved) 10%, transparent);\n      }\n      .uc-irr-zone.status-unavailable { opacity: 0.55; }\n      .uc-irr-zone-icon {\n        width: 44px;\n        height: 44px;\n        border-radius: 50%;\n        border: none;\n        flex-shrink: 0;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background: color-mix(in srgb, var(--uc-irr-zone-resolved) 14%, transparent);\n        color: var(--uc-irr-zone-resolved);\n        cursor: pointer;\n        padding: 0;\n      }\n      .uc-irr-zone.compact .uc-irr-zone-icon { width: 36px; height: 36px; background: transparent; }\n      .uc-irr-zone-icon ha-icon { --mdc-icon-size: 24px; }\n      .uc-irr-zone.status-idle .uc-irr-zone-icon,\n      .uc-irr-zone.status-unavailable .uc-irr-zone-icon { color: var(--secondary-text-color); }\n      .uc-irr-zone.status-running .uc-irr-zone-icon ha-icon { animation: uc-irr-pulse 1.6s ease-in-out infinite; }\n      @keyframes uc-irr-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.55; } }\n      @media (prefers-reduced-motion: reduce) {\n        .uc-irr-zone.status-running .uc-irr-zone-icon ha-icon { animation: none; }\n      }\n      .uc-irr-zone-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }\n      .uc-irr-zone-name {\n        font-weight: 600;\n        font-size: 14px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-irr-zone-sub {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        font-variant-numeric: tabular-nums;\n      }\n      .uc-irr-zone.status-running .uc-irr-zone-sub { color: var(--primary-text-color); }\n      .uc-irr-progress { height: 4px; border-radius: 2px; background: var(--divider-color); overflow: hidden; }\n      .uc-irr-progress-fill { height: 100%; background: var(--uc-irr-zone-resolved); transition: width 1s linear; }\n      .uc-irr-moist { display: flex; align-items: center; gap: 8px; cursor: pointer; }\n      .uc-irr-moist-track {\n        position: relative;\n        flex: 1;\n        max-width: 160px;\n        height: 6px;\n        border-radius: 3px;\n        background: var(--divider-color);\n        overflow: hidden;\n      }\n      .uc-irr-moist-fill { height: 100%; border-radius: 3px; background: var(--success-color, #43a047); }\n      .uc-irr-moist.dry .uc-irr-moist-fill { background: var(--warning-color, #ffa600); }\n      .uc-irr-moist.wet .uc-irr-moist-fill { background: var(--info-color, #039be5); }\n      .uc-irr-moist-mark {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        width: 1px;\n        background: var(--secondary-text-color);\n        opacity: 0.5;\n        z-index: 1;\n      }\n      .uc-irr-moist-text { font-size: 11px; color: var(--secondary-text-color); white-space: nowrap; }\n      .uc-irr-moist-text.dry { color: var(--warning-color, #ffa600); }\n      .uc-irr-moist-text.wet { color: var(--info-color, #039be5); }\n      .uc-irr-stepper { display: flex; align-items: center; gap: 2px; flex-shrink: 0; }\n      .uc-irr-step {\n        width: 44px;\n        height: 44px;\n        border-radius: 50%;\n        border: none;\n        background: transparent;\n        color: var(--primary-text-color);\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        padding: 0;\n      }\n      .uc-irr-step:hover { background: var(--secondary-background-color); }\n      .uc-irr-step ha-icon { --mdc-icon-size: 18px; }\n      .uc-irr-step-value { min-width: 34px; text-align: center; font-weight: 600; font-variant-numeric: tabular-nums; }\n      .uc-irr-step-value small { font-size: 10px; font-weight: 400; margin-left: 1px; color: var(--secondary-text-color); }\n      .uc-irr-run {\n        width: 44px;\n        height: 44px;\n        border-radius: 50%;\n        border: none;\n        flex-shrink: 0;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background: var(--uc-irr-zone-resolved);\n        color: var(--text-primary-color, #fff);\n        cursor: pointer;\n        padding: 0;\n      }\n      .uc-irr-run.stop { background: var(--error-color, #db4437); }\n      .uc-irr-run:disabled { opacity: 0.35; cursor: default; background: var(--disabled-text-color, #9e9e9e); }\n      .uc-irr-run ha-icon { --mdc-icon-size: 22px; }\n      .uc-irr button:focus-visible { outline: 2px solid var(--uc-irr-accent-resolved); outline-offset: 2px; }\n      @media (max-width: 420px) {\n        .uc-irr-moist-track { max-width: none; }\n        .uc-irr-step { width: 36px; }\n      }\n    "}}}};