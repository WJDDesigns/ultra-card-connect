export const __webpack_esm_ids__=[9337];export const __webpack_esm_modules__={3449(e,t,r){r.d(t,{UltraVampirePowerModule:()=>z});var i=r(2618),o=r(7475),n=r(6478),a=r(3488),s=r(1671),d=r(6673);const l=new d.p;function c(e){if(!e)return null;const t=String(e).trim();if(!t)return null;switch(t){case"W":return 1;case"kW":return 1e3;case"MW":return 1e6;case"GW":return 1e9;case"mW":return.001}const r=t.toLowerCase();return"w"===r||"watt"===r||"watts"===r?1:"kw"===r||"kilowatt"===r||"kilowatts"===r?1e3:null}const p=new Set(["total","house","home","grid","mains","main","net","whole"]),u=new Set(["power","energy","sensor","usage","used","use","consumption","consumed","meter","monitor","watt","watts","w","kw","current","load","active","apparent","real","instantaneous","instant","now","live","reading","draw"]);function h(e){return e.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)}function v(e,t){const r=[e.includes(".")?e.slice(e.indexOf(".")+1):e,t||""].filter(e=>e.trim().length>0);for(const e of r){const t=h(e);if(t.some(e=>p.has(e))&&t.filter(e=>!u.has(e)&&!/^\d+$/.test(e)).length<=2)return!0}return!1}function m(e,t){var r,i,o,n,a,s;try{const d=e,l=null==d?void 0:d.areas;if(!l)return;const c=null===(r=null==d?void 0:d.entities)||void 0===r?void 0:r[t];let p=null!==(i=null==c?void 0:c.area_id)&&void 0!==i?i:void 0;if(!p&&(null==c?void 0:c.device_id)&&(p=null!==(a=null===(n=null===(o=null==d?void 0:d.devices)||void 0===o?void 0:o[c.device_id])||void 0===n?void 0:n.area_id)&&void 0!==a?a:void 0),!p)return;const u=null===(s=l[p])||void 0===s?void 0:s.name;return"string"==typeof u&&u.trim()?u.trim():void 0}catch(e){return}}function g(e){if(!e)return!1;const t=String(e).trim();if(!t)return!1;const r=t.toLowerCase();return"unavailable"!==r&&"unknown"!==r&&"none"!==r&&Number.isFinite(Number(t))}function _(e,t){if(!(null==e?void 0:e.states))return[];const r=(0,d.W)(t);return l.read(r,[e.states],r,()=>function(e,t){const r=(null==t?void 0:t.discovery_mode)||"auto",i=((null==t?void 0:t.exclude_patterns)||[]).map(e=>String(e||"").trim().toLowerCase()).filter(Boolean),o=new Set(((null==t?void 0:t.hidden_entities)||[]).map(e=>String(e||"").trim()).filter(Boolean)),n=((null==t?void 0:t.entities)||[]).map(e=>String(e||"").trim()).filter(Boolean),a=new Map,s=t=>{const r=e.states[t];if(!r)return null;const i=r.attributes||{},o="string"==typeof i.unit_of_measurement?i.unit_of_measurement:"";return{entityId:t,name:("string"==typeof i.friendly_name?i.friendly_name:"")||t,icon:"string"==typeof i.icon&&i.icon?i.icon:"mdi:power-plug",areaName:m(e,t),unit:o}},d=(e,t)=>{if(o.has(e))return!1;if(0===i.length)return!0;const r=e.toLowerCase(),n=t.toLowerCase();return!i.some(e=>r.includes(e)||n.includes(e))},l=e=>{const t="string"==typeof e.unit_of_measurement?e.unit_of_measurement:"",r="string"==typeof e.device_class?e.device_class:"",i=c(t);return"power"===r?{ok:null!==i,unit:t}:{ok:1===i||1e3===i,unit:t}};if("manual"!==r)for(const[t,r]of Object.entries(e.states)){if(!t.startsWith("sensor."))continue;const e=(null==r?void 0:r.attributes)||{},i="string"==typeof e.friendly_name?e.friendly_name:"";if(!d(t,i))continue;const{ok:o}=l(e);if(!o)continue;if(!g(null==r?void 0:r.state))continue;if(v(t,i))continue;const n=s(t);n&&a.set(t,n)}if("auto"!==r)for(const t of n){if(a.has(t))continue;const r=e.states[t];if(!r)continue;const i=r.attributes||{};if(!d(t,"string"==typeof i.friendly_name?i.friendly_name:""))continue;const{ok:o}=l(i);if(!o)continue;const n=s(t);n&&a.set(t,n)}return[...a.values()].sort((e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:"base"}))}(e,t))}function y(e,t,r){return Number.isFinite(e)?Math.min(Math.max(e,t),r):t}function f(e){var t,r,i,o,n,a;return{historyDays:y(Number(null!==(t=null==e?void 0:e.history_days)&&void 0!==t?t:7),1,30),percentile:y(Number(null!==(r=null==e?void 0:e.baseline_percentile)&&void 0!==r?r:.1),.01,.5),minWatts:Math.max(0,Number(null!==(i=null==e?void 0:e.min_standby_watts)&&void 0!==i?i:.5)),maxWatts:Math.max(1,Number(null!==(o=null==e?void 0:e.max_standby_watts)&&void 0!==o?o:100)),rate:Math.max(0,Number(null!==(n=null==e?void 0:e.energy_rate)&&void 0!==n?n:.15)),highlight:Math.max(0,Number(null!==(a=null==e?void 0:e.highlight_threshold_watts)&&void 0!==a?a:5))}}function w(e,t,r,i,o){const n=(0,s.f0)(t);if(0===n.length)return null;const a=c(e.unit);if(null===a)return null;const d=function(e,t){return 1===t?e:e.map(e=>({t:e.t,v:e.v*t}))}(n,a),l=f(r),p=d.length,u=(0,s.EA)(d,l.percentile,i,o),h=(0,s.CY)(d,i,o),v=Math.max(0,null!=u?u:0),m=Math.max(0,null!=h?h:0);let g=0;for(const e of d)e.v>g&&(g=e.v);const _=function(e,t,r){if(0===e.length)return 0;const i=r-t;return i<=0?0:y((r-Math.max(e[0].t,t))/i,0,1)}(d,i,o),w=function(e,t){return e<5||t<.1?"none":e<24||t<.35?"low":e<120||t<.7?"medium":"high"}(p,_),b=function(e,t,r,i){if(0===e.length)return 0;const o=t+Math.max(.5,.15*t);let n=0,a=0;for(let t=0;t<e.length;t++){const s=e[t],d=Math.max(s.t,r),l=Math.min(t+1<e.length?e[t+1].t:i,i)-d;l<=0||(a+=l,s.v<=o&&(n+=l))}return a>0?y(n/a,0,1):0}(d,v,i,o),x=8760*v/1e3,k=x*l.rate;return Object.assign(Object.assign({},e),{standbyWatts:v,peakWatts:g,averageWatts:m,idleFraction:b,kwhPerYear:x,costPerDay:k/365,costPerMonth:k/12,costPerYear:k,wasteRatio:m>0?y(v/m,0,1):0,isOffender:v>=l.highlight,sampleCount:p,confidence:w,coverage:_})}function b(e){let t=0,r=0,i=0,o=0;for(const n of e)"none"!==n.confidence&&(o+=1,t+=n.standbyWatts,r+=n.costPerYear,n.isOffender&&(i+=1));return{deviceCount:o,totalStandbyWatts:t,totalKwhPerYear:8760*t/1e3,totalCostPerDay:r/365,totalCostPerMonth:r/12,totalCostPerYear:r,offenderCount:i}}function x(e,t){const r=[...e];return"name"===t?(r.sort((e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:"base"})),r):"watts"===t?(r.sort((e,t)=>t.standbyWatts-e.standbyWatts||e.name.localeCompare(t.name)),r):(r.sort((e,t)=>t.costPerYear-e.costPerYear||t.wasteRatio-e.wasteRatio||e.name.localeCompare(t.name)),r)}function k(e,t){if(!Number.isFinite(e))return"0";const r=Math.abs(e)<10?1:0;try{return new Intl.NumberFormat(t||void 0,{minimumFractionDigits:r,maximumFractionDigits:r}).format(e)}catch(t){return e.toFixed(r)}}function $(e,t,r){const i=Number.isFinite(e)?e:0,o=Math.abs(i)<10?2:0;let n;try{n=new Intl.NumberFormat(r||void 0,{minimumFractionDigits:o,maximumFractionDigits:o}).format(i)}catch(e){n=i.toFixed(o)}return`${null!=t?t:"$"}${n}`}function S(e,t){return"day"===t?e.costPerDay:"month"===t?e.costPerMonth:e.costPerYear}r(7921);const M=3e5;class z extends o.m{constructor(){super(...arguments),this.metadata={type:"vampire_power",title:"Vampire Power",description:"Finds always-on standby loads and ranks them by what they cost you",author:"WJD Designs",version:"1.0.0",icon:"mdi:power-plug-off",category:"data",tags:["pro","premium","energy","standby","phantom","power","cost","savings"]},this._state=new Map}_ensureState(e){let t=this._state.get(e);return t||(t={analysisKey:"",dataKey:"",result:null,totals:null,ranked:[],historyKeys:[]},this._state.set(e,t)),t}createDefault(e,t){return{id:e||this.generateId("vampire_power"),type:"vampire_power",discovery_mode:"auto",entities:[],exclude_patterns:[],hidden_entities:[],history_days:7,baseline_percentile:.1,min_standby_watts:.5,max_standby_watts:100,energy_rate:.15,currency_symbol:"$",cost_period:"year",layout:"ranked",sort_mode:"cost",max_items:15,title:"",show_title:!0,show_total_bar:!0,show_bars:!0,show_cost:!0,show_savings_hint:!0,highlight_threshold_watts:5,bar_color:"",offender_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=e,r=[...super.validate(e).errors],i="en";return"manual"!==t.discovery_mode||t.entities&&0!==t.entities.length||r.push((0,n.kg)("editor.vampire_power.error_manual_empty",i,"Add at least one power sensor, or switch discovery to Auto or Both.")),"number"==typeof t.energy_rate&&t.energy_rate<0&&r.push((0,n.kg)("editor.vampire_power.error_rate_negative",i,"Energy rate cannot be negative.")),"number"==typeof t.min_standby_watts&&"number"==typeof t.max_standby_watts&&t.min_standby_watts>=t.max_standby_watts&&r.push((0,n.kg)("editor.vampire_power.error_range",i,"The standby noise floor must be lower than the always-on cutoff.")),{valid:0===r.length,errors:r}}renderGeneralTab(e,t,r,o){var s;const d=e,l=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en";if(!(0,a.gf)(t))return(0,a.b5)(l,(0,n.kg)("editor.vampire_power.pro_description",l,"Vampire Power reads your recorder history to find the standby loads that never switch off, and tells you what each one costs per year."));const c=_(t,d),p=(d.hidden_entities||[]).length;return i.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this._renderSensorsSection(d,t,l,c,p,o)}
        ${this._renderAnalysisSection(d,t,l,o)}
        ${this._renderCostSection(d,t,l,o)}
        ${this._renderDisplaySection(d,t,l,o)}
        ${this._renderColorsSection(d,t,l,o)}
      </div>
    `}_renderSensorsSection(e,t,r,o,a,s){const d=e.discovery_mode||"auto",l=o.length>60;return i.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.vampire_power.sensors_section",r,"Sensors")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; line-height: 1.5;"
        >
          ${(0,n.kg)("editor.vampire_power.sensors_section_desc",r,"Choose which power sensors are analyzed. Auto finds every sensor reporting watts, so most homes need nothing here.")}
        </div>

        ${this.renderSegmentedField((0,n.kg)("editor.vampire_power.discovery_mode",r,"Discovery"),(0,n.kg)("editor.vampire_power.discovery_mode_desc",r,"Auto scans Home Assistant for power sensors, Manual uses only the list below, Both merges them."),d,[{value:"auto",label:(0,n.kg)("editor.vampire_power.mode_auto",r,"Auto"),icon:"mdi:auto-fix"},{value:"manual",label:(0,n.kg)("editor.vampire_power.mode_manual",r,"Manual"),icon:"mdi:format-list-bulleted"},{value:"both",label:(0,n.kg)("editor.vampire_power.mode_both",r,"Both"),icon:"mdi:set-merge"}],e=>{s({discovery_mode:e}),this.triggerPreviewUpdate()},3)}

        <div
          style="display: flex; align-items: center; gap: 10px; padding: 12px 14px; border-radius: var(--uc-r-8, 8px); background: rgba(var(--rgb-primary-color), 0.08); margin-bottom: 16px;"
        >
          <ha-icon
            icon=${o.length>0?"mdi:magnify-scan":"mdi:alert-circle-outline"}
            style="color: var(--primary-color); --mdc-icon-size: 22px; flex-shrink: 0;"
          ></ha-icon>
          <div style="min-width: 0;">
            <div style="font-size: 14px; font-weight: 600; color: var(--primary-text-color);">
              ${this._fill((0,n.kg)("editor.vampire_power.found_sensors",r,"Found {count} power sensors"),{count:o.length})}
            </div>
            <div style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;">
              ${0===o.length?(0,n.kg)("editor.vampire_power.found_none_hint",r,"Smart plugs and energy monitors expose these. Switch to Manual to add one by hand."):l?this._fill((0,n.kg)("editor.vampire_power.found_capped",r,"Only the first {max} are analyzed to keep the recorder query fast."),{max:60}):(0,n.kg)("editor.vampire_power.found_ok_hint",r,"Whole-home and grid meters are skipped so they cannot swamp the ranking.")}
            </div>
          </div>
        </div>

        ${this.renderChipListField((0,n.kg)("editor.vampire_power.exclude_patterns",r,"Exclude patterns"),(0,n.kg)("editor.vampire_power.exclude_patterns_desc",r,"Sensors whose entity id or name contains any of these words are skipped. Auto discovery already skips whole-home meters (names like total, house, grid or mains); add your own words here for anything else you never want ranked."),t,e.exclude_patterns||[],e=>{s({exclude_patterns:e}),this.triggerPreviewUpdate()},{mode:"free-text",variant:"exclude",placeholder:(0,n.kg)("editor.vampire_power.exclude_patterns_ph",r,"e.g. solar, inverter")})}
        ${"auto"!==d?this.renderChipListField((0,n.kg)("editor.vampire_power.entities",r,"Power sensors"),(0,n.kg)("editor.vampire_power.entities_desc",r,"Sensors added here are always analyzed, even when the whole-home filter would have skipped them."),t,e.entities||[],e=>{s({entities:e}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:["sensor"],placeholder:(0,n.kg)("editor.vampire_power.entities_ph",r,"Add a power sensor")}):i.s6}

        <div class="field-container" style="margin-bottom: 0;">
          <div class="field-title">
            ${(0,n.kg)("editor.vampire_power.dismissed",r,"Dismissed devices")}
          </div>
          <div class="field-description">
            ${a>0?this._fill((0,n.kg)("editor.vampire_power.dismissed_desc",r,"{count} devices were dismissed from the card and are excluded from the ranking and the totals."),{count:a}):(0,n.kg)("editor.vampire_power.dismissed_empty",r,"Nothing dismissed. Use the × on a row in the card preview to hide a device you do not want ranked.")}
          </div>
          <button
            type="button"
            class="uc-vp-restore"
            ?disabled=${0===a}
            style="display: inline-flex; align-items: center; gap: 8px; margin-top: 8px; padding: 10px 16px; border-radius: var(--uc-r-8, 8px); border: 1px solid var(--divider-color); background: var(--uc-pane-bg, var(--card-background-color)); color: ${0===a?"var(--disabled-text-color)":"var(--primary-text-color)"}; font-size: 14px; font-weight: 600; cursor: ${0===a?"default":"pointer"};"
            @click=${()=>{0!==a&&(s({hidden_entities:[]}),this.triggerPreviewUpdate())}}
          >
            <ha-icon icon="mdi:backup-restore" style="--mdc-icon-size: 18px;"></ha-icon>
            ${(0,n.kg)("editor.vampire_power.restore_dismissed",r,"Restore dismissed")}
          </button>
        </div>
      </div>
    `}_renderAnalysisSection(e,t,r,o){var a,s,d,l;return i.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.vampire_power.analysis_section",r,"Analysis")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; line-height: 1.5;"
        >
          ${(0,n.kg)("editor.vampire_power.analysis_section_desc",r,"A device is measured by the wattage it never drops below. A longer window gives a steadier estimate but takes longer to load.")}
        </div>

        ${this.renderSliderField((0,n.kg)("editor.vampire_power.history_days",r,"History window"),(0,n.kg)("editor.vampire_power.history_days_desc",r,"How far back to read the recorder. Seven days covers a full weekly routine; longer windows need recorder history to match."),null!==(a=e.history_days)&&void 0!==a?a:7,7,1,30,1,e=>{o({history_days:e}),this.triggerPreviewUpdate()},(0,n.kg)("editor.vampire_power.unit_days",r," days"))}
        ${this.renderSliderField((0,n.kg)("editor.vampire_power.baseline_percentile",r,"Standby percentile"),(0,n.kg)("editor.vampire_power.baseline_percentile_desc",r,"Which point of the wattage distribution counts as idle. 0.10 means the level the device stayed at or below for 10% of the window. Lower is stricter and reports a lower floor; higher includes light activity."),null!==(s=e.baseline_percentile)&&void 0!==s?s:.1,.1,.01,.5,.01,e=>{o({baseline_percentile:e}),this.triggerPreviewUpdate()},"")}
        ${this.renderConditionalFieldsGroup((0,n.kg)("editor.vampire_power.advanced_thresholds",r,"Advanced thresholds"),i.qy`
            ${this.renderSliderField((0,n.kg)("editor.vampire_power.min_standby_watts",r,"Noise floor"),(0,n.kg)("editor.vampire_power.min_standby_watts_desc",r,"Standby loads under this are treated as measurement noise and left out entirely."),null!==(d=e.min_standby_watts)&&void 0!==d?d:.5,.5,0,20,.1,e=>{o({min_standby_watts:e}),this.triggerPreviewUpdate()},(0,n.kg)("editor.vampire_power.unit_watts",r," W"))}
            ${this.renderSliderField((0,n.kg)("editor.vampire_power.max_standby_watts",r,"Always-on cutoff"),(0,n.kg)("editor.vampire_power.max_standby_watts_desc",r,"Floors above this belong to genuinely always-on appliances such as a fridge or a server. They are listed separately instead of being ranked as standby waste."),null!==(l=e.max_standby_watts)&&void 0!==l?l:100,100,10,500,1,e=>{o({max_standby_watts:e}),this.triggerPreviewUpdate()},(0,n.kg)("editor.vampire_power.unit_watts",r," W"))}
          `)}
      </div>
    `}_renderCostSection(e,t,r,o){var a,s;return i.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.vampire_power.cost_section",r,"Cost")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; line-height: 1.5;"
        >
          ${(0,n.kg)("editor.vampire_power.cost_section_desc",r,"What the wasted energy is worth. Costs are estimates based on a flat rate.")}
        </div>

        ${this.renderFieldSection((0,n.kg)("editor.vampire_power.energy_rate",r,"Energy rate"),(0,n.kg)("editor.vampire_power.energy_rate_desc",r,"Cost of one kilowatt-hour, taken from your electricity bill."),t,{energy_rate:null!==(a=e.energy_rate)&&void 0!==a?a:.15},[{name:"energy_rate",selector:{number:{min:0,max:10,step:.001,mode:"box"}}}],e=>{var t;const r=Number(null===(t=e.detail.value)||void 0===t?void 0:t.energy_rate);o({energy_rate:Number.isFinite(r)?r:.15}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,n.kg)("editor.vampire_power.currency_symbol",r,"Currency symbol"),(0,n.kg)("editor.vampire_power.currency_symbol_desc",r,"Shown in front of every cost figure."),t,{currency_symbol:null!==(s=e.currency_symbol)&&void 0!==s?s:"$"},[this.textField("currency_symbol")],e=>{var t,r;o({currency_symbol:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.currency_symbol)&&void 0!==r?r:"$"}),this.triggerPreviewUpdate()})}
        ${this.renderSegmentedField((0,n.kg)("editor.vampire_power.cost_period",r,"Cost period"),(0,n.kg)("editor.vampire_power.cost_period_desc",r,"Annual figures are the ones large enough to act on; daily figures are easier to sanity-check."),e.cost_period||"year",[{value:"day",label:(0,n.kg)("editor.vampire_power.period_day",r,"Day")},{value:"month",label:(0,n.kg)("editor.vampire_power.period_month",r,"Month")},{value:"year",label:(0,n.kg)("editor.vampire_power.period_year",r,"Year")}],e=>{o({cost_period:e}),this.triggerPreviewUpdate()},3)}
      </div>
    `}_renderDisplaySection(e,t,r,o){var a,s;return i.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.vampire_power.display_section",r,"Display")}
        </div>

        ${this.renderSegmentedField((0,n.kg)("editor.vampire_power.layout",r,"Layout"),(0,n.kg)("editor.vampire_power.layout_desc",r,"Ranked shows a bar per device, Cards is a tile grid, Compact is a dense list."),e.layout||"ranked",[{value:"ranked",label:(0,n.kg)("editor.vampire_power.layout_ranked",r,"Ranked"),icon:"mdi:format-list-numbered"},{value:"cards",label:(0,n.kg)("editor.vampire_power.layout_cards",r,"Cards"),icon:"mdi:view-grid"},{value:"compact",label:(0,n.kg)("editor.vampire_power.layout_compact",r,"Compact"),icon:"mdi:view-sequential"}],e=>{o({layout:e}),this.triggerPreviewUpdate()},3)}
        ${this.renderSegmentedField((0,n.kg)("editor.vampire_power.sort_mode",r,"Sort by"),(0,n.kg)("editor.vampire_power.sort_mode_desc",r,"Cost ranks by annual waste and breaks ties in favour of devices that are almost purely idle."),e.sort_mode||"cost",[{value:"cost",label:(0,n.kg)("editor.vampire_power.sort_cost",r,"Cost")},{value:"watts",label:(0,n.kg)("editor.vampire_power.sort_watts",r,"Watts")},{value:"name",label:(0,n.kg)("editor.vampire_power.sort_name",r,"Name")}],e=>{o({sort_mode:e}),this.triggerPreviewUpdate()},3)}
        ${this.renderSliderField((0,n.kg)("editor.vampire_power.max_items",r,"Devices shown"),(0,n.kg)("editor.vampire_power.max_items_desc",r,"The total bar always covers every analyzed device, even when the list is trimmed."),null!==(a=e.max_items)&&void 0!==a?a:15,15,1,50,1,e=>{o({max_items:e}),this.triggerPreviewUpdate()},"")}
        ${this.renderSliderField((0,n.kg)("editor.vampire_power.highlight_threshold",r,"Offender threshold"),(0,n.kg)("editor.vampire_power.highlight_threshold_desc",r,"Devices idling at or above this wattage are drawn in the offender colour."),null!==(s=e.highlight_threshold_watts)&&void 0!==s?s:5,5,0,50,.5,e=>{o({highlight_threshold_watts:e}),this.triggerPreviewUpdate()},(0,n.kg)("editor.vampire_power.unit_watts",r," W"))}
        ${this.renderSettingsSection("","",[{title:(0,n.kg)("editor.vampire_power.show_total_bar",r,"Show total"),description:(0,n.kg)("editor.vampire_power.show_total_bar_desc",r,"The headline figure for the whole home."),hass:t,data:{show_total_bar:!1!==e.show_total_bar},schema:[this.booleanField("show_total_bar")],onChange:e=>{var t;o({show_total_bar:null===(t=e.detail.value)||void 0===t?void 0:t.show_total_bar}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.vampire_power.show_bars",r,"Show bars"),description:(0,n.kg)("editor.vampire_power.show_bars_desc",r,"Each row gets a bar sized against the worst offender."),hass:t,data:{show_bars:!1!==e.show_bars},schema:[this.booleanField("show_bars")],onChange:e=>{var t;o({show_bars:null===(t=e.detail.value)||void 0===t?void 0:t.show_bars}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.vampire_power.show_cost",r,"Show cost"),description:(0,n.kg)("editor.vampire_power.show_cost_desc",r,"Turn off to show wattage only."),hass:t,data:{show_cost:!1!==e.show_cost},schema:[this.booleanField("show_cost")],onChange:e=>{var t;o({show_cost:null===(t=e.detail.value)||void 0===t?void 0:t.show_cost}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.vampire_power.show_savings_hint",r,"Show takeaway"),description:(0,n.kg)("editor.vampire_power.show_savings_hint_desc",r,"A one-line summary of what the worst offenders add up to."),hass:t,data:{show_savings_hint:!1!==e.show_savings_hint},schema:[this.booleanField("show_savings_hint")],onChange:e=>{var t;o({show_savings_hint:null===(t=e.detail.value)||void 0===t?void 0:t.show_savings_hint}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.vampire_power.show_title",r,"Show title"),description:(0,n.kg)("editor.vampire_power.show_title_desc",r,"Display a header above the card."),hass:t,data:{show_title:!1!==e.show_title},schema:[this.booleanField("show_title")],onChange:e=>{var t;o({show_title:null===(t=e.detail.value)||void 0===t?void 0:t.show_title}),this.triggerPreviewUpdate()}}])}
        ${this.renderFieldSection((0,n.kg)("editor.vampire_power.title",r,"Title"),(0,n.kg)("editor.vampire_power.title_desc",r,"Leave blank to use the module name."),t,{title:e.title||""},[this.textField("title")],e=>{var t,r;o({title:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.title)&&void 0!==r?r:""}),this.triggerPreviewUpdate()})}
      </div>
    `}_renderColorsSection(e,t,r,o){const a=[{key:"bar_color",label:(0,n.kg)("editor.vampire_power.color_bar",r,"Bar"),def:"var(--primary-color)"},{key:"offender_color",label:(0,n.kg)("editor.vampire_power.color_offender",r,"Offender"),def:"var(--error-color)"},{key:"text_color",label:(0,n.kg)("editor.vampire_power.color_text",r,"Text"),def:"var(--primary-text-color)"},{key:"secondary_text_color",label:(0,n.kg)("editor.vampire_power.color_secondary",r,"Secondary text"),def:"var(--secondary-text-color)"},{key:"card_background_color",label:(0,n.kg)("editor.vampire_power.color_card_bg",r,"Row background"),def:"var(--uc-pane-bg, var(--card-background-color))"}];return i.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,n.kg)("editor.vampire_power.colors_section",r,"Colors")}
        </div>
        ${a.map(r=>this.renderColorField(r.label,"",t,e[r.key]||"",r.def,e=>{o({[r.key]:e}),this.triggerPreviewUpdate()}))}
      </div>
    `}renderPreview(e,t,r,o){var a,s,d,l,c,p,u,h,v,m;const g=e,y=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",k=null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language;if(!(null==t?void 0:t.states))return this.renderGradientErrorState((0,n.kg)("editor.vampire_power.err_ha",y,"Waiting for Home Assistant"),(0,n.kg)("editor.vampire_power.err_ha_desc",y,"Connecting to entity states…"),"mdi:power-plug-off");const $=_(t,g),S=$.slice(0,60);if(0===S.length)return this.renderGradientErrorState((0,n.kg)("editor.vampire_power.err_empty",y,"No power sensors found"),(0,n.kg)("editor.vampire_power.err_empty_desc",y,"This module needs sensors that report watts — smart plugs or an energy monitor. Add one under Sensors in the General tab."),"mdi:power-plug-off");const z=Math.min(Math.max(Math.round(null!==(d=g.history_days)&&void 0!==d?d:7),1),30),P=Math.floor(Date.now()/M)*M,C=P-864e5*z,F=this._palette(g),W=$.length,A=this._ensureState(g.id),q=this._queryHistory(t,g,S,C,P),D=`${S.map(e=>e.entityId).join(",")}|${z}`;if(q.fetchedAt>0){const e=[D,null!==(l=g.baseline_percentile)&&void 0!==l?l:.1,null!==(c=g.min_standby_watts)&&void 0!==c?c:.5,null!==(p=g.max_standby_watts)&&void 0!==p?p:100,null!==(u=g.energy_rate)&&void 0!==u?u:.15,null!==(h=g.highlight_threshold_watts)&&void 0!==h?h:5,q.fetchedAt].join("|");if(A.analysisKey!==e||!A.result){const t=function(e,t,r,i){var o,n;const a=f(r),s=null!==(o=null==i?void 0:i.endMs)&&void 0!==o?o:Date.now(),d=null!==(n=null==i?void 0:i.startMs)&&void 0!==n?n:s-864e5*a.historyDays,l=[],c=[],p=[];let u=0,h=0;for(const i of e){const e=w(i,null==t?void 0:t.get(i.entityId),r,d,s);e?e.standbyWatts<a.minWatts?u+=1:"none"!==e.confidence?e.standbyWatts>a.maxWatts?c.push(e):l.push(e):p.push(e):h+=1}return{ranked:l,alwaysOn:c,insufficient:p,belowNoiseFloor:u,noHistory:h}}(S,q.data,g,{startMs:C,endMs:P});A.analysisKey=e,A.dataKey=D,A.result=t,A.ranked=t.ranked,A.totals=b(t.ranked)}}if(!A.result||A.dataKey!==D)return q.fetchedAt>0&&q.error&&0===q.data.size?this.renderGradientErrorState((0,n.kg)("editor.vampire_power.err_history",y,"Could not read history"),(0,n.kg)("editor.vampire_power.err_history_desc",y,"The recorder did not return data for these sensors. Check that the recorder integration is keeping history for them."),"mdi:database-alert-outline"):this._wrap(e,t,this._renderSkeleton(g,y,S.length,z,F));const N=A.result,U=null!==(v=A.totals)&&void 0!==v?v:b(N.ranked),O=x(N.ranked,g.sort_mode||"cost"),T=O.slice(0,Math.max(1,null!==(m=g.max_items)&&void 0!==m?m:15)),I=T.reduce((e,t)=>Math.max(e,t.standbyWatts),0),L=i.qy`
      ${!1!==g.show_title?this._renderTitle(g,y,F):i.s6}
      ${!1!==g.show_total_bar?this._renderTotalBar(g,U,O,F,y,k,z):i.s6}
      ${0===T.length?this._renderNoWaste(g,y,k,F,z):"cards"===g.layout?this._renderCardsLayout(g,T,t,r,F,y,k,o):"compact"===g.layout?this._renderCompactLayout(g,T,t,r,F,y,k,o):this._renderRankedLayout(g,T,I,t,r,F,y,k,o)}
      ${!1!==g.show_savings_hint&&O.length>0?this._renderSavingsHint(g,O,F,y,k):i.s6}
      ${this._renderFootnotes(g,N,F,y,k,S.length,W)}
    `;return this._wrap(e,t,L)}_wrap(e,t,r){const o=this.buildStyleString(this.buildDesignStyles(e,t)),n=this.getHoverEffectClass(e);return i.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div class="uc-vp-wrapper ${n}" data-uc-role="pane" style="${o}">
        ${this.wrapWithAnimation(r,e,t)}
      </div>
    `}_palette(e){return{bar:e.bar_color||"var(--primary-color)",offender:e.offender_color||"var(--error-color)",text:e.text_color||"var(--primary-text-color)",secondary:e.secondary_text_color||"var(--secondary-text-color)",cardBg:e.card_background_color||"var(--uc-pane-bg, var(--card-background-color))"}}_renderTitle(e,t,r){const o=(e.title||"").trim()||(0,n.kg)("editor.vampire_power.default_title",t,"Vampire Power");return i.qy`
      <div
        class="uc-vp-title"
        style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; color: ${r.text};"
      >
        <ha-icon
          icon="mdi:power-plug-off"
          style="--mdc-icon-size: 20px; color: ${r.offender}; flex-shrink: 0;"
        ></ha-icon>
        <span style="font-size: 16px; font-weight: 700; min-width: 0;" class="uc-vp-ellipsis">
          ${o}
        </span>
      </div>
    `}_renderSkeleton(e,t,r,o,a){return i.qy`
      ${!1!==e.show_title?this._renderTitle(e,t,a):i.s6}
      <div
        data-uc-role="pane"
        style="border-radius: var(--uc-r-14, 14px); padding: 16px; background: ${a.cardBg}; border: var(--uc-pane-border, 1px solid var(--divider-color)); box-shadow: var(--uc-pane-shadow, none); margin-bottom: 12px;"
      >
        <div
          style="font-size: 11px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase; color: ${a.secondary}; margin-bottom: 10px;"
        >
          ${(0,n.kg)("editor.vampire_power.total_label",t,"Standby waste")}
        </div>
        <div class="uc-vp-shimmer" style="height: 30px; width: 62%; border-radius: var(--uc-r-8, 8px);"></div>
        <div
          class="uc-vp-shimmer"
          style="height: 12px; margin-top: 12px; border-radius: var(--uc-r-6, 6px);"
        ></div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${[0,1,2,3].map(e=>i.qy`
            <div
              data-uc-role="pane"
              style="display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: var(--uc-r-12, 12px); background: ${a.cardBg}; border: var(--uc-pane-border, 1px solid var(--divider-color)); box-shadow: var(--uc-pane-shadow, none);"
            >
              <div
                class="uc-vp-shimmer"
                style="width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;"
              ></div>
              <div style="flex: 1; min-width: 0;">
                <div
                  class="uc-vp-shimmer"
                  style="height: 12px; width: ${70-12*e}%; border-radius: var(--uc-r-6, 6px);"
                ></div>
                <div
                  class="uc-vp-shimmer"
                  style="height: 8px; margin-top: 8px; width: ${55-10*e}%; border-radius: var(--uc-r-5, 5px);"
                ></div>
              </div>
              <div
                class="uc-vp-shimmer"
                style="width: 52px; height: 16px; border-radius: var(--uc-r-6, 6px); flex-shrink: 0;"
              ></div>
            </div>
          `)}
      </div>
      <div
        style="display: flex; align-items: center; gap: 8px; margin-top: 12px; font-size: 12px; color: ${a.secondary};"
      >
        <ha-icon
          icon="mdi:chart-timeline-variant"
          style="--mdc-icon-size: 16px; flex-shrink: 0;"
        ></ha-icon>
        <span style="min-width: 0;">
          ${this._fill((0,n.kg)("editor.vampire_power.loading_note",t,"Analyzing {count} power sensors over {days} days of history…"),{count:r,days:o})}
        </span>
      </div>
    `}_renderTotalBar(e,t,r,o,a,s,d){const l=function(e,t){return"day"===t?e.totalCostPerDay:"month"===t?e.totalCostPerMonth:e.totalCostPerYear}(t,e.cost_period||"year"),c=r.slice(0,12),p=c.reduce((e,t)=>e+t.standbyWatts,0),u=Math.max(0,t.totalStandbyWatts-p);return i.qy`
      <div
        class="uc-vp-total"
        data-uc-role="pane"
        style="border-radius: var(--uc-r-14, 14px); padding: 16px; margin-bottom: 12px; background: ${o.cardBg}; border: var(--uc-pane-border, 1px solid var(--divider-color)); box-shadow: var(--uc-pane-shadow, none);"
      >
        <div
          style="font-size: 11px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase; color: ${o.secondary}; margin-bottom: 8px;"
        >
          ${(0,n.kg)("editor.vampire_power.total_label",a,"Standby waste")}
        </div>
        <div
          style="display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px 14px; margin-bottom: 12px;"
        >
          <div style="font-size: 30px; font-weight: 800; line-height: 1.1; color: ${o.text};">
            ${k(t.totalStandbyWatts,s)}<span
              style="font-size: 16px; font-weight: 700; margin-left: 3px;"
              >${(0,n.kg)("editor.vampire_power.watt_symbol",a,"W")}</span
            >
          </div>
          ${!1!==e.show_cost?i.qy`
                <div
                  style="font-size: 22px; font-weight: 700; color: ${o.offender}; line-height: 1.1;"
                >
                  ${$(l,e.currency_symbol,s)}${this._periodSuffix(e.cost_period,a)}
                </div>
              `:i.s6}
        </div>
        ${t.totalStandbyWatts>0?i.qy`
              <div
                style="display: flex; height: 12px; border-radius: var(--uc-r-6, 6px); overflow: hidden; background: rgba(127,127,127,0.18);"
                role="img"
                aria-label=${this._fill((0,n.kg)("editor.vampire_power.total_bar_aria",a,"Standby load split across {count} devices"),{count:t.deviceCount})}
              >
                ${c.map((e,r)=>{const d=e.standbyWatts/t.totalStandbyWatts*100,l=e.isOffender?o.offender:o.bar;return i.qy`<div
                    style="width: ${d}%; background: ${l}; opacity: ${1-.07*Math.min(r,8)}; min-width: 1px;"
                    title="${e.name} — ${k(e.standbyWatts,s)} ${(0,n.kg)("editor.vampire_power.watt_symbol",a,"W")}"
                  ></div>`})}
                ${u>0?i.qy`<div
                      style="flex: 1; background: ${o.bar}; opacity: 0.25;"
                      title=${(0,n.kg)("editor.vampire_power.total_bar_rest",a,"Other devices")}
                    ></div>`:i.s6}
              </div>
            `:i.s6}
        <div style="font-size: 12px; color: ${o.secondary}; margin-top: 10px;">
          ${this._fill((0,n.kg)("editor.vampire_power.total_footer",a,"Across {devices} devices, measured over {days} days of history"),{devices:t.deviceCount,days:d})}
        </div>
      </div>
    `}_periodSuffix(e,t){return"day"===e?(0,n.kg)("editor.vampire_power.per_day",t,"/day"):"month"===e?(0,n.kg)("editor.vampire_power.per_month",t,"/mo"):(0,n.kg)("editor.vampire_power.per_year",t,"/yr")}_renderRankedLayout(e,t,r,o,a,s,d,l,c){return i.qy`
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${t.map((t,p)=>{const u=t.isOffender?s.offender:s.bar,h=r>0?Math.max(2,t.standbyWatts/r*100):0,v=this._rowGestures(e,t,o,a,"ranked");return i.qy`
            <div
              class="uc-vp-row"
              data-uc-role="pane"
              style="display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: var(--uc-r-12, 12px); background: ${s.cardBg}; border: var(--uc-pane-border, 1px solid var(--divider-color)); box-shadow: var(--uc-pane-shadow, none);"
              @pointerdown=${v.onPointerDown}
              @pointermove=${v.onPointerMove}
              @pointerup=${v.onPointerUp}
              @pointerleave=${v.onPointerLeave}
              @pointercancel=${v.onPointerCancel}
            >
              <div
                style="display: flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: var(--uc-r-6, 6px); background: ${u}22; color: ${u}; font-size: 12px; font-weight: 700; flex-shrink: 0;"
              >
                ${p+1}
              </div>
              <ha-icon
                icon=${t.icon}
                style="--mdc-icon-size: 24px; color: ${u}; flex-shrink: 0;"
              ></ha-icon>
              <div style="flex: 1; min-width: 0;">
                <div
                  class="uc-vp-ellipsis"
                  style="font-size: 14px; font-weight: 600; color: ${s.text};"
                >
                  ${t.name}
                </div>
                <div
                  class="uc-vp-ellipsis"
                  style="font-size: 11px; color: ${s.secondary}; margin-top: 1px;"
                >
                  ${this._rowSubtitle(t,d,l)}
                </div>
                ${!1!==e.show_bars?i.qy`
                      <div
                        style="height: 6px; border-radius: var(--uc-r-4, 4px); background: rgba(127,127,127,0.18); margin-top: 7px; overflow: hidden;"
                      >
                        <div style="width: ${h}%; height: 100%; background: ${u};"></div>
                      </div>
                    `:i.s6}
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <div style="font-size: 15px; font-weight: 700; color: ${s.text};">
                  ${k(t.standbyWatts,l)}
                  <span style="font-size: 11px; font-weight: 600;"
                    >${(0,n.kg)("editor.vampire_power.watt_symbol",d,"W")}</span
                  >
                </div>
                ${!1!==e.show_cost?i.qy`
                      <div style="font-size: 12px; color: ${s.secondary}; margin-top: 2px;">
                        ${$(S(t,e.cost_period||"year"),e.currency_symbol,l)}${this._periodSuffix(e.cost_period,d)}
                      </div>
                    `:i.s6}
              </div>
              ${this._renderConfidenceMark(t,s,d)}
              ${this._renderDismiss(e,t,c,d)}
            </div>
          `})}
      </div>
    `}_renderCardsLayout(e,t,r,o,a,s,d,l){return i.qy`
      <div class="uc-vp-grid">
        ${t.map(t=>{const c=t.isOffender?a.offender:a.bar,p=this._rowGestures(e,t,r,o,"cards");return i.qy`
            <div
              class="uc-vp-tile"
              style="position: relative; padding: 14px 12px; border-radius: var(--uc-r-12, 12px); text-align: center; background: ${c}18; border: 1px solid ${c}44;"
              @pointerdown=${p.onPointerDown}
              @pointermove=${p.onPointerMove}
              @pointerup=${p.onPointerUp}
              @pointerleave=${p.onPointerLeave}
              @pointercancel=${p.onPointerCancel}
            >
              <div style="position: absolute; top: 4px; right: 4px; display: flex; gap: 2px;">
                ${this._renderConfidenceMark(t,a,s)}
                ${this._renderDismiss(e,t,l,s)}
              </div>
              <ha-icon
                icon=${t.icon}
                style="--mdc-icon-size: 28px; color: ${c}; margin-bottom: 6px;"
              ></ha-icon>
              <div
                style="font-size: 24px; font-weight: 800; color: ${a.text}; line-height: 1;"
              >
                ${k(t.standbyWatts,d)}<span
                  style="font-size: 13px; font-weight: 700; margin-left: 2px;"
                  >${(0,n.kg)("editor.vampire_power.watt_symbol",s,"W")}</span
                >
              </div>
              ${!1!==e.show_cost?i.qy`
                    <div
                      style="font-size: 13px; font-weight: 600; color: ${c}; margin-top: 4px;"
                    >
                      ${$(S(t,e.cost_period||"year"),e.currency_symbol,d)}${this._periodSuffix(e.cost_period,s)}
                    </div>
                  `:i.s6}
              <div
                class="uc-vp-clamp"
                style="font-size: 12px; color: ${a.secondary}; margin-top: 6px; line-height: 1.25;"
              >
                ${t.name}
              </div>
            </div>
          `})}
      </div>
    `}_renderCompactLayout(e,t,r,o,a,s,d,l){return i.qy`
      <div
        data-uc-role="pane"
        style="border-radius: var(--uc-r-12, 12px); overflow: hidden; border: var(--uc-pane-border, 1px solid var(--divider-color)); box-shadow: var(--uc-pane-shadow, none); background: ${a.cardBg};"
      >
        ${t.map((t,c)=>{const p=t.isOffender?a.offender:a.bar,u=this._rowGestures(e,t,r,o,"compact");return i.qy`
            <div
              class="uc-vp-row"
              style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; ${c>0?"border-top: 1px solid var(--divider-color);":""}"
              @pointerdown=${u.onPointerDown}
              @pointermove=${u.onPointerMove}
              @pointerup=${u.onPointerUp}
              @pointerleave=${u.onPointerLeave}
              @pointercancel=${u.onPointerCancel}
            >
              <ha-icon
                icon=${t.icon}
                style="--mdc-icon-size: 18px; color: ${p}; flex-shrink: 0;"
              ></ha-icon>
              <div
                class="uc-vp-ellipsis"
                style="flex: 1; min-width: 0; font-size: 13px; color: ${a.text};"
              >
                ${t.name}
              </div>
              <div
                style="font-size: 13px; font-weight: 700; color: ${p}; flex-shrink: 0; font-variant-numeric: tabular-nums;"
              >
                ${k(t.standbyWatts,d)}${(0,n.kg)("editor.vampire_power.watt_symbol",s,"W")}
              </div>
              ${!1!==e.show_cost?i.qy`
                    <div
                      style="font-size: 12px; color: ${a.secondary}; flex-shrink: 0; min-width: 54px; text-align: right; font-variant-numeric: tabular-nums;"
                    >
                      ${$(S(t,e.cost_period||"year"),e.currency_symbol,d)}
                    </div>
                  `:i.s6}
              ${this._renderDismiss(e,t,l,s)}
            </div>
          `})}
      </div>
    `}_rowSubtitle(e,t,r){const i=[];return e.areaName&&i.push(e.areaName),e.wasteRatio>=.5?i.push(this._fill((0,n.kg)("editor.vampire_power.row_waste_ratio",t,"{pct}% of its usage is idle"),{pct:Math.round(100*e.wasteRatio)})):e.idleFraction>=.5&&i.push(this._fill((0,n.kg)("editor.vampire_power.row_idle_fraction",t,"idle {pct}% of the time"),{pct:Math.round(100*e.idleFraction)})),0===i.length&&i.push(this._fill((0,n.kg)("editor.vampire_power.row_peak",t,"peaks at {watts} W"),{watts:k(e.peakWatts,r)})),i.join(" · ")}_renderConfidenceMark(e,t,r){if("low"!==e.confidence)return i.s6;const o=this._fill((0,n.kg)("editor.vampire_power.confidence_low",r,"Estimated from limited history ({samples} samples)"),{samples:e.sampleCount});return i.qy`
      <ha-icon
        icon="mdi:help-circle-outline"
        title=${o}
        aria-label=${o}
        style="--mdc-icon-size: 15px; color: ${t.secondary}; opacity: 0.7; flex-shrink: 0;"
      ></ha-icon>
    `}_renderDismiss(e,t,r,o){if("live"!==r)return i.s6;const a=(0,n.kg)("editor.vampire_power.dismiss_row",o,"Hide this device");return i.qy`
      <button
        type="button"
        class="uc-vp-dismiss"
        title=${a}
        aria-label=${a}
        @click=${r=>{r.preventDefault(),r.stopPropagation();const i=[...e.hidden_entities||[]];i.includes(t.entityId)||i.push(t.entityId),window.dispatchEvent(new CustomEvent("uc-module-patch-by-id",{bubbles:!0,composed:!0,detail:{moduleId:e.id,updates:{hidden_entities:i}}})),this.triggerPreviewUpdate(!0)}}
      >
        <ha-icon icon="mdi:close" style="--mdc-icon-size: 14px;"></ha-icon>
      </button>
    `}_renderSavingsHint(e,t,r,o,a){const s=x(t,"cost").slice(0,3);if(0===s.length)return i.s6;const d=s.reduce((e,t)=>e+t.costPerYear,0);if(d<=0)return i.s6;const l=1===s.length?this._fill((0,n.kg)("editor.vampire_power.hint_one",o,"{name} alone costs {cost} a year doing nothing. A scheduled smart plug would recover most of that."),{name:s[0].name,cost:$(d,e.currency_symbol,a)}):this._fill((0,n.kg)("editor.vampire_power.hint_many",o,"The top {count} devices cost {cost} a year while idle. Switching them off on a schedule would recover most of that."),{count:s.length,cost:$(d,e.currency_symbol,a)});return i.qy`
      <div
        style="display: flex; align-items: flex-start; gap: 10px; margin-top: 12px; padding: 12px 14px; border-radius: var(--uc-r-12, 12px); background: rgba(127,127,127,0.1);"
      >
        <ha-icon
          icon="mdi:lightbulb-on-outline"
          style="--mdc-icon-size: 18px; color: ${r.bar}; flex-shrink: 0; margin-top: 1px;"
        ></ha-icon>
        <div style="font-size: 13px; line-height: 1.45; color: ${r.text}; min-width: 0;">
          ${l}
        </div>
      </div>
    `}_renderFootnotes(e,t,r,o,a,s,d){var l;const c=[];if(t.insufficient.length>0&&c.push(this._fill((0,n.kg)("editor.vampire_power.note_insufficient",o,"{count} sensors need more history before they can be ranked."),{count:t.insufficient.length})),t.alwaysOn.length>0){const r=t.alwaysOn.slice(0,3).map(e=>e.name).join(", ");c.push(this._fill((0,n.kg)("editor.vampire_power.note_always_on",o,"{count} always-on devices draw more than {watts} W even at rest ({names}). They are running, not idling."),{count:t.alwaysOn.length,watts:k(null!==(l=e.max_standby_watts)&&void 0!==l?l:100,a),names:r}))}return d>s&&c.push(this._fill((0,n.kg)("editor.vampire_power.note_capped",o,"Analyzing the first {analyzed} of {total} power sensors."),{analyzed:s,total:d})),0===c.length?i.s6:i.qy`
      <div
        style="margin-top: 10px; display: flex; flex-direction: column; gap: 4px; font-size: 11px; line-height: 1.45; color: ${r.secondary};"
      >
        ${c.map(e=>i.qy`
            <div style="display: flex; align-items: flex-start; gap: 6px;">
              <ha-icon
                icon="mdi:information-outline"
                style="--mdc-icon-size: 13px; flex-shrink: 0; margin-top: 2px;"
              ></ha-icon>
              <span style="min-width: 0;">${e}</span>
            </div>
          `)}
      </div>
    `}_renderNoWaste(e,t,r,o,a){var s;return i.qy`
      <div
        data-uc-role="pane"
        style="display: flex; align-items: center; gap: 12px; padding: 18px 16px; border-radius: var(--uc-r-12, 12px); background: ${o.cardBg}; border: 1px dashed var(--divider-color); box-shadow: var(--uc-pane-shadow, none);"
      >
        <ha-icon
          icon="mdi:leaf"
          style="--mdc-icon-size: 26px; color: var(--success-color); flex-shrink: 0;"
        ></ha-icon>
        <div style="min-width: 0;">
          <div style="font-size: 14px; font-weight: 600; color: ${o.text};">
            ${(0,n.kg)("editor.vampire_power.no_waste",t,"No standby waste found")}
          </div>
          <div style="font-size: 12px; color: ${o.secondary}; line-height: 1.4;">
            ${this._fill((0,n.kg)("editor.vampire_power.no_waste_desc",t,"Every sensor idled below {watts} W across the last {days} days. Lower the noise floor under Analysis to see smaller loads."),{watts:k(null!==(s=e.min_standby_watts)&&void 0!==s?s:.5,r),days:a})}
          </div>
        </div>
      </div>
    `}_queryHistory(e,t,r,i,o){const n=function(e){const t=Math.max(1,20),r=[];for(let i=0;i<e.length;i+=t)r.push(e.slice(i,i+t));return r}(r.map(e=>e.entityId)),a=new Map,d=[];let l=!1,c=null,p=Number.POSITIVE_INFINITY;for(let r=0;r<n.length;r++){const u=n[r],h=`vampire_power:${t.id}:${i}:${o}:${r}:${u.join(",")}`;d.push(h);const v=s.ur.query(e,{key:h,entityIds:u,startMs:i,endMs:o,ttlMs:3e5,withAttributes:!1},()=>this.triggerPreviewUpdate());for(const[e,t]of v.data)a.set(e,t);v.loading&&(l=!0),v.error&&!c&&(c=v.error),p=Math.min(p,v.fetchedAt)}return this._releaseStaleHistory(t.id,d),{data:a,loading:l,fetchedAt:Number.isFinite(p)?p:0,error:c,keys:d}}_releaseStaleHistory(e,t){const r=this._ensureState(e);if(r.historyKeys.length>0){const e=new Set(t);for(const t of r.historyKeys)e.has(t)||s.ur.invalidate(t)}r.historyKeys=t}_rowGestures(e,t,r,i,o){var n;const a=null===(n=e.tap_action)||void 0===n?void 0:n.action;return this.createGestureHandlers(`${e.id}-${t.entityId}-${o}`,{tap_action:a&&"nothing"!==a?Object.assign(Object.assign({},e.tap_action),{action:a,entity:t.entityId}):{action:"more-info",entity:t.entityId},hold_action:e.hold_action,double_tap_action:e.double_tap_action,entity:t.entityId,module:e},r,i,[".uc-vp-dismiss"])}_fill(e,t){return e.replace(/\{(\w+)\}/g,(e,r)=>Object.prototype.hasOwnProperty.call(t,r)?String(t[r]):e)}getStyles(){return`\n      ${o.m.getSliderStyles()}\n\n      .uc-vp-wrapper {\n        box-sizing: border-box;\n        width: 100%;\n      }\n\n      .uc-vp-ellipsis {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .uc-vp-clamp {\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        overflow: hidden;\n      }\n\n      .uc-vp-grid {\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n        gap: 8px;\n      }\n\n      .uc-vp-row {\n        box-sizing: border-box;\n      }\n\n      .uc-vp-dismiss {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        width: 22px;\n        height: 22px;\n        padding: 0;\n        border: none;\n        border-radius: var(--uc-r-6, 6px);\n        background: transparent;\n        color: var(--error-color);\n        cursor: pointer;\n        opacity: 0.55;\n        transition: opacity 0.15s ease, background 0.15s ease;\n      }\n\n      .uc-vp-row:hover .uc-vp-dismiss,\n      .uc-vp-tile:hover .uc-vp-dismiss,\n      .uc-vp-dismiss:focus-visible {\n        opacity: 1;\n        background: rgba(127, 127, 127, 0.16);\n      }\n\n      .uc-vp-dismiss:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 1px;\n      }\n\n      /* Loading placeholders. The sweep is disabled for users who ask for less motion. */\n      .uc-vp-shimmer {\n        background: linear-gradient(\n          90deg,\n          rgba(127, 127, 127, 0.14) 25%,\n          rgba(127, 127, 127, 0.26) 37%,\n          rgba(127, 127, 127, 0.14) 63%\n        );\n        background-size: 400% 100%;\n        animation: uc-vp-shimmer 1.4s ease-in-out infinite;\n      }\n\n      @keyframes uc-vp-shimmer {\n        0% { background-position: 100% 50%; }\n        100% { background-position: 0 50%; }\n      }\n\n      @media (prefers-reduced-motion: reduce) {\n        .uc-vp-shimmer { animation: none; }\n      }\n\n      @media (max-width: 340px) {\n        .uc-vp-grid {\n          grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));\n        }\n      }\n    `}}},1671(e,t,r){r.d(t,{CY:()=>d,EA:()=>l,Hv:()=>c,SM:()=>p,Z_:()=>u,f0:()=>s});const i=Object.freeze({data:new Map,loading:!1,fetchedAt:0,error:null});function o(e){var t,r,i,o;if(null==e||"object"!=typeof e)return null;const n=e;if(void 0!==n.s&&(void 0!==n.lu||void 0!==n.lc)){const e=Number(null!==(t=n.lu)&&void 0!==t?t:n.lc);return Number.isFinite(e)?{t:1e3*e,state:String(n.s),attributes:null!==(r=n.a)&&void 0!==r?r:null}:null}if(void 0!==n.state){const e=null!==(i=n.last_changed)&&void 0!==i?i:n.last_updated,t=e?new Date(String(e)).getTime():NaN;return Number.isFinite(t)?{t,state:String(n.state),attributes:null!==(o=n.attributes)&&void 0!==o?o:null}:null}return null}const n=new class{constructor(){this._cache=new Map}query(e,t,r){var o;if(!e||0===t.entityIds.length)return i;const n=null!==(o=t.ttlMs)&&void 0!==o?o:3e5,a=this._cache.get(t.key),s=Date.now();(!a||s-a.fetchedAt>n)&&!(null==a?void 0:a.inflight)&&this._startFetch(e,t,r);const d=this._cache.get(t.key);return d?{data:d.data,loading:d.loading,fetchedAt:d.fetchedAt,error:d.error}:i}async fetch(e,t){var r,i;return e&&0!==t.entityIds.length?(await this._startFetch(e,t),null!==(i=null===(r=this._cache.get(t.key))||void 0===r?void 0:r.data)&&void 0!==i?i:new Map):new Map}invalidate(e){this._cache.delete(e)}clear(){this._cache.clear()}_startFetch(e,t,r){const i=this._cache.get(t.key);if(null==i?void 0:i.inflight)return i.inflight;const o=null!=i?i:{data:new Map,fetchedAt:0,loading:!1,error:null,inflight:null};o.loading=!0,this._cache.set(t.key,o);const n=this._doFetch(e,t).then(e=>{o.data=e,o.fetchedAt=Date.now(),o.error=null}).catch(e=>{o.error=e instanceof Error?e.message:String(e),o.fetchedAt=Date.now()}).finally(()=>{if(o.loading=!1,o.inflight=null,r)try{r()}catch(e){}});return o.inflight=n,n}async _doFetch(e,t){const r=t.entityIds.filter(e=>!!e);if(0===r.length)return new Map;const i=new Date(t.startMs).toISOString(),n=new Date(t.endMs).toISOString(),a=!t.withAttributes;let s={};try{s=await e.callWS({type:"history/history_during_period",start_time:i,end_time:n,entity_ids:r,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!1,no_attributes:a})}catch(t){const o=await e.callApi("GET",`history/period/${i}`,{filter_entity_id:r.join(","),end_time:n});if(s={},Array.isArray(o))for(const e of o)if(Array.isArray(e)&&e.length>0){const t=e[0];(null==t?void 0:t.entity_id)&&(s[t.entity_id]=e)}}const d=new Map;for(const[e,t]of Object.entries(s)){if(!Array.isArray(t)||0===t.length)continue;const r=[];for(const e of t){const t=o(e);t&&r.push(t)}r.length>0&&(r.sort((e,t)=>e.t-t.t),d.set(e,r))}return d}},a=new Set(["unavailable","unknown","none","","null"]);function s(e,t){var r;if(!e||0===e.length)return[];const i=null==t?void 0:t.attribute,o=[];for(const t of e){const e=i?null===(r=t.attributes)||void 0===r?void 0:r[i]:t.state;if(null==e)continue;const n=String(e).trim().toLowerCase();if(a.has(n))continue;const s=Number(e);Number.isFinite(s)&&o.push({t:t.t,v:s})}return o}function d(e,t,r){if(0===e.length)return null;if(1===e.length)return e[0].v;const i=null!=t?t:e[0].t,o=null!=r?r:e[e.length-1].t;if(o<=i)return e[e.length-1].v;let n=0,a=0;for(let t=0;t<e.length;t++){const r=e[t],s=Math.max(r.t,i),d=Math.min(t+1<e.length?e[t+1].t:o,o)-s;d<=0||(n+=r.v*d,a+=d)}return a<=0?e[e.length-1].v:n/a}function l(e,t,r,i){if(0===e.length)return null;if(1===e.length)return e[0].v;const o=null!=r?r:e[0].t,n=null!=i?i:e[e.length-1].t,a=[];let s=0;for(let t=0;t<e.length;t++){const r=e[t],i=Math.max(r.t,o),d=Math.min(t+1<e.length?e[t+1].t:n,n)-i;d<=0||(a.push({v:r.v,ms:d}),s+=d)}if(0===a.length||s<=0)return e[e.length-1].v;a.sort((e,t)=>e.v-t.v);const d=s*Math.min(Math.max(t,0),1);let l=0;for(const e of a)if(l+=e.ms,l>=d)return e.v;return a[a.length-1].v}function c(e,t){var r,i;if(e.length<3)return null;const o=null!==(r=null==t?void 0:t.floor)&&void 0!==r?r:0,n=null!==(i=null==t?void 0:t.riseToleranceUnits)&&void 0!==i?i:1,a=[];let s=[e[0]];for(let t=1;t<e.length;t++){const r=e[t-1],i=e[t];i.v-r.v>n?(s.length>=2&&a.push(s),s=[i]):s.push(i)}if(s.length>=2&&a.push(s),0===a.length)return null;let d=0,l=0;for(const e of a){const t=e[0],r=e[e.length-1],i=t.v-r.v,o=r.t-t.t;o<=0||i<=0||(d+=i,l+=o)}const c=e[e.length-1].t-e[0].t,p=c>0?Math.min(l/c,1):0,u=(a[a.length-1],e.length>=2&&e[e.length-1].v-e[e.length-2].v>n);if(l<=0||d<=0)return{ratePerHour:0,msToEmpty:null,coverage:p,charging:u};const h=d/l*36e5,v=e[e.length-1].v-o;return{ratePerHour:h,msToEmpty:h>0&&v>0?v/h*36e5:null,coverage:p,charging:u}}function p(e,t){var r,i,o,n;if(e.length<2)return[];const a=t.startThreshold,s=null!==(r=t.stopThreshold)&&void 0!==r?r:.5*a,d=null!==(i=t.settleMs)&&void 0!==i?i:18e4,l=null!==(o=t.minDurationMs)&&void 0!==o?o:3e5,c=null!==(n=t.endMs)&&void 0!==n?n:e[e.length-1].t,p=[];let u=null,h=null,v=0,m=0,g=0,_=0,y=0;const f=e=>{if(null===u)return;const t=e-u;t>=l&&p.push({startMs:u,endMs:e,durationMs:t,peak:v,mean:g>0?m/g:v,areaHours:m/36e5}),u=null,h=null,v=0,m=0,g=0};for(let t=0;t<e.length;t++){const r=e[t],i=t+1<e.length?e[t+1].t:c,o=Math.max(i-r.t,0);null!==u?(v=Math.max(v,r.v),r.v<s?(null===h&&(h=r.t,_=m,y=g),m+=r.v*o,g+=o,i-h>=d&&(m=_,g=y,f(h))):(h=null,m+=r.v*o,g+=o)):r.v>=a&&(u=r.t,v=r.v,m=r.v*o,g=o,h=null)}return null!==u&&(null!==h?(m=_,g=y,f(h)):f(c)),p}function u(e,t,r){var i,o;if(!e||!t)return null;const n=null===(i=e.states)||void 0===i?void 0:i[t];if(!n)return null;const s=r?null===(o=n.attributes)||void 0===o?void 0:o[r]:n.state;if(null==s)return null;if(a.has(String(s).trim().toLowerCase()))return null;const d=Number(s);return Number.isFinite(d)?d:null}r.d(t,["ur",0,n])},3488(e,t,r){r.d(t,{SB:()=>d,b5:()=>s,gf:()=>a});var i=r(2618),o=r(378),n=r(6478);function a(e){var t,r,i,n;if(!e)return!1;try{const a=o.xd.checkIntegrationAuth(e);if("pro"===(null===(t=null==a?void 0:a.subscription)||void 0===t?void 0:t.tier)&&"active"===(null===(r=null==a?void 0:a.subscription)||void 0===r?void 0:r.status))return!0;if(o.xd.isAuthenticated()){const e=o.xd.getCurrentUser();if("pro"===(null===(i=null==e?void 0:e.subscription)||void 0===i?void 0:i.tier)&&"active"===(null===(n=null==e?void 0:e.subscription)||void 0===n?void 0:n.status))return!0}}catch(e){return!1}return!1}function s(e,t){return i.qy`
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
        ${(0,n.kg)("editor.pro.feature_locked",e,"Pro Feature")}
      </div>
      <div
        style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 340px; line-height: 1.5;"
      >
        ${t}
      </div>
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
        ${(0,n.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
      </a>
    </div>
  `}function d(e,t){return i.qy`
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
        <div style="font-weight: 700; color: var(--primary-text-color);">${t}</div>
        <div style="font-size: 12px; color: var(--secondary-text-color);">
          ${(0,n.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
      </div>
    </div>
  `}},6673(e,t,r){r.d(t,{W:()=>o,p:()=>i});class i{constructor(e=32){this._cache=new Map,this._limit=e}read(e,t,r,i){const o=this._cache.get(e);if(o&&o.key===r&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(o.deps,t))return o.value;const n=i();if(this._cache.set(e,{deps:t,key:r,value:n}),this._cache.size>this._limit){const e=this._cache.keys().next().value;void 0!==e&&this._cache.delete(e)}return n}forget(e){this._cache.delete(e)}clear(){this._cache.clear()}}function o(...e){try{return JSON.stringify(e)}catch(e){return`__unserializable__${Math.random()}`}}}};