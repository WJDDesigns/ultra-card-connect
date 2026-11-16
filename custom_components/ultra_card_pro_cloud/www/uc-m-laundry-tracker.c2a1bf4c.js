export const __webpack_esm_ids__=[9311];export const __webpack_esm_modules__={5202(t,e,n){n.d(e,{UltraLaundryTrackerModule:()=>T});var r=n(2618),i=n(3307),o=n(935),a=n(8964),s=n(3488),l=n(1671);const d=["run","running","washing","drying","on","in_progress","program_running","active"],c={washer:{icon:"mdi:washing-machine",start_threshold_w:20,stop_threshold_w:5,settle_minutes:5,min_cycle_minutes:15,unload_grace_minutes:30},dryer:{icon:"mdi:tumble-dryer",start_threshold_w:50,stop_threshold_w:10,settle_minutes:5,min_cycle_minutes:15,unload_grace_minutes:60}},u=864e5,h="uc_laundry_notified_v1",p=7*u,_=new Set(["unavailable","unknown","none","","null"]);function y(t,e,n){return Math.min(Math.max(t,e),n)}function g(t,e){return"number"==typeof t&&Number.isFinite(t)?t:e}function v(t){const e=new Date(t),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${n}-${r}`}function m(t){return(0,a.SP)(t)}function f(t){if(!t)return null;const e=new Date(String(t)).getTime();return Number.isFinite(e)?e:null}function w(t,e){var n,r;if(!t||0===t.length)return null;let i=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(const e of t)e.v<i&&(i=e.v),e.v>o&&(o=e.v);const a=t[0].t;return{min:i,median:null!==(n=(0,l.EA)(t,.5,a,e))&&void 0!==n?n:i,max:o,floor:null!==(r=(0,l.EA)(t,.1,a,e))&&void 0!==r?r:i,samples:t.length}}const k=new class{constructor(){this._acks=new Map,this._notified=null,this._notifyInFlight=new Set,this._runCache=new Map}analyze(t,e,n){var r;const i=null!==(r=e.nowMs)&&void 0!==r?r:Date.now(),o=y(g(e.historyDays,7),1,30),a=i-o*u,s=(e.appliances||[]).filter(t=>!!t&&!!t.id),d={statuses:[],stats:{cycleCount:0,totalKwh:0,totalCost:0,avgDurationMs:null,busiestDay:null},loading:!1,fetchedAt:0,error:null,series:new Map,windowStartMs:a,windowEndMs:i};if(!t||0===s.length)return d;const c=[];for(const t of s)for(const e of[t.power_entity,t.state_entity,t.door_entity])e&&!c.includes(e)&&c.push(e);let h=new Map,p=!1,_=0,v=null;if(c.length>0){const r=l.ur.query(t,{key:`laundry:${e.moduleId}:${o}:${c.join(",")}`,entityIds:c,startMs:a,endMs:i,ttlMs:3e5,withAttributes:!1},n);h=r.data,p=r.loading,_=r.fetchedAt,v=r.error}const m=new Map,f=[];for(const n of s){const r=this._analyzeAppliance(t,n,h,_,i,e.energyRate,e.acknowledgeEnabled,m);f.push(r)}return{statuses:f,stats:this.computeStats(f),loading:p,fetchedAt:_,error:v,series:m,windowStartMs:a,windowEndMs:i}}_analyzeAppliance(t,e,n,r,i,o,a,s){var d,u,h;const p=function(t){const e=c["dryer"===t.kind?"dryer":"washer"],n=Math.max(1,g(t.start_threshold_w,e.start_threshold_w));return{startThreshold:n,stopThreshold:y(g(t.stop_threshold_w,e.stop_threshold_w),0,Math.max(0,n-1)),settleMs:6e4*Math.max(0,g(t.settle_minutes,e.settle_minutes)),minDurationMs:6e4*Math.max(0,g(t.min_cycle_minutes,e.min_cycle_minutes)),graceMs:6e4*Math.max(0,g(t.unload_grace_minutes,e.unload_grace_minutes))}}(e),_=!!e.power_entity&&!!(null===(d=t.states)||void 0===d?void 0:d[e.power_entity]),v=!!e.state_entity&&!!(null===(u=t.states)||void 0===u?void 0:u[e.state_entity]),m=this._readDoor(t,e,n);let f;f=_?this._analyzePower(t,e,n,r,i,o,p,s):v?this._analyzeState(t,e,n,i,p):{running:!1,runStart:null,cycles:[],currentW:e.power_entity?(0,l.Z_)(t,e.power_entity):null,historyPoints:0,source:"none"};const{running:w,runStart:k,cycles:x,currentW:b,historyPoints:$,source:M}=f,S=x.length>0?x[x.length-1]:null,D=!w&&S?Math.max(0,i-S.endMs):null,A=!!S&&a&&this.isAcknowledged(e.id,S.endMs),F=!!S&&m.openedAfter(S.endMs);let C;return C="none"===M?"unknown":w?"running":S&&null!==D?F||A?"idle":D<=p.graceMs?"finished":D>864e5?"idle":"forgotten":"idle",{appliance:e,phase:C,currentW:b,sinceMs:w?k:null!==(h=null==S?void 0:S.endMs)&&void 0!==h?h:null,sittingMs:D,doorOpen:m.currentlyOpen,lastCycle:S,cycles:x,acknowledged:A,source:M,historyPoints:$,retrievedByDoor:F}}_analyzePower(t,e,n,r,i,o,a,s){const d=e.power_entity,c=(0,l.f0)(n.get(d));s.set(e.id,c);const u=(0,l.Z_)(t,d),h=function(t,e,n){if(null===e)return t;const r=t.length>0?t[t.length-1]:void 0;return r&&r.t>=n?t:[...t,{t:n,v:e}]}(c,u,i),p=this._detectRunsCached(`${e.id}:${d}`,h,r,i,a),_=function(t,e,n,r,i){var o,a;let s=null,l=null;for(let d=0;d<t.length;d++){const c=t[d];null!==s?c.v<n?(null===l&&(l=c.t),(null!==(a=null===(o=t[d+1])||void 0===o?void 0:o.t)&&void 0!==a?a:i)-l>=r&&(s=null,l=null)):l=null:c.v>=e&&(s=c.t,l=null)}return s}(h,a.startThreshold,a.stopThreshold,a.settleMs,i),y=null!==_,g=p.filter(t=>null===_||t.startMs<_).map(t=>function(t,e){const n=Math.max(0,t.areaHours/1e3);return{startMs:t.startMs,endMs:t.endMs,durationMs:t.durationMs,peakW:t.peak,meanW:t.mean,energyKwh:n,costEstimate:n*(Number.isFinite(e)?e:0)}}(t,o));return{running:y,runStart:_,cycles:g,currentW:u,historyPoints:c.length,source:"power"}}_detectRunsCached(t,e,n,r,i){const o=e.length>0?e[e.length-1]:void 0,a=[n,e.length,o?`${o.t}:${o.v}`:"-",i.startThreshold,i.stopThreshold,i.settleMs,i.minDurationMs,Math.floor(r/6e4)].join("|"),s=this._runCache.get(t);if(s&&s.sig===a)return s.runs;const d=(0,l.SM)(e,{startThreshold:i.startThreshold,stopThreshold:i.stopThreshold,settleMs:i.settleMs,minDurationMs:i.minDurationMs,endMs:r});return this._runCache.set(t,{sig:a,runs:d}),d}_analyzeState(t,e,n,r,i){var o,s,c,u,h,p,y,g;const v=e.state_entity,m=null!==(o=n.get(v))&&void 0!==o?o:[],w=new Set((e.running_states&&e.running_states.length>0?e.running_states:d).map(t=>String(t).trim().toLowerCase())),k=t=>{const e=String(t).trim().toLowerCase();return!_.has(e)&&(w.has(e)||w.has((0,a.M8)(e)))},x=null===(c=null===(s=t.states)||void 0===s?void 0:s[v])||void 0===c?void 0:c.state,b=k(String(null!=x?x:"")),$=null!==(p=f(null===(h=null===(u=t.states)||void 0===u?void 0:u[v])||void 0===h?void 0:h.last_changed))&&void 0!==p?p:r,M=[];let S=null,D=null;for(let t=0;t<m.length;t++){const e=m[t],n=null!==(g=null===(y=m[t+1])||void 0===y?void 0:y.t)&&void 0!==g?g:r;k(e.state)?(null===S&&(S=e.t),D=null):null!==S&&(null===D&&(D=e.t),n-D>=i.settleMs&&(M.push({startMs:S,endMs:D}),S=null,D=null))}if(null!==S&&!b){const t=null!=D?D:$;r-t>=i.settleMs&&(M.push({startMs:S,endMs:t}),S=null)}return null===S&&b&&(S=$),{running:b||null!==S,runStart:S,cycles:M.filter(t=>t.endMs-t.startMs>=i.minDurationMs).map(t=>({startMs:t.startMs,endMs:t.endMs,durationMs:t.endMs-t.startMs,peakW:0,meanW:0,energyKwh:0,costEstimate:0})),currentW:e.power_entity?(0,l.Z_)(t,e.power_entity):null,historyPoints:m.length,source:"state"}}_readDoor(t,e,n){var r,i;const o=e.door_entity;if(!o)return{currentlyOpen:null,openedAfter:()=>!1};const a=null===(r=t.states)||void 0===r?void 0:r[o],s=a?m(a.state):null,l=f(null==a?void 0:a.last_changed),d=null!==(i=n.get(o))&&void 0!==i?i:[];return{currentlyOpen:s,openedAfter:t=>!!s||!1===s&&null!==l&&l>t||d.some(e=>e.t>t&&m(e.state))}}computeStats(t){var e;let n=0,r=0,i=0,o=0;const a=new Map;for(const s of t)for(const t of s.cycles){n+=1,r+=t.energyKwh,i+=t.costEstimate,o+=t.durationMs;const s=v(t.startMs);a.set(s,(null!==(e=a.get(s))&&void 0!==e?e:0)+1)}let s=null,l=0;for(const[t,e]of a)e>l&&(l=e,s=t);return{cycleCount:n,totalKwh:r,totalCost:i,avgDurationMs:n>0?o/n:null,busiestDay:s}}acknowledge(t,e){t&&Number.isFinite(e)&&this._acks.set(t,e)}isAcknowledged(t,e){const n=this._acks.get(t);return void 0!==n&&n===e}clearAcknowledgement(t){this._acks.delete(t)}maybeNotify(t,e){if(!t||!e.service)return!1;if(!e.applianceId||!Number.isFinite(e.cycleEndMs))return!1;const n=this._parseNotifyService(e.service);if(!n)return!1;const r=`${e.moduleId}|${e.applianceId}|${Math.round(e.cycleEndMs)}`,i=this._ensureNotified();return!i.has(r)&&!this._notifyInFlight.has(r)&&(this._notifyInFlight.add(r),i.add(r),this._persistNotified(),Promise.resolve(t.callService(n.domain,n.service,{title:e.title,message:e.message})).catch(()=>{}).then(()=>{this._notifyInFlight.delete(r)}),!0)}hasNotified(t,e,n){return this._ensureNotified().has(`${t}|${e}|${Math.round(n)}`)}_parseNotifyService(t){const e=String(t||"").trim();if(!e)return null;const n=e.split(".");return 1===n.length?n[0]?{domain:"notify",service:n[0]}:null:2===n.length&&n[0]&&n[1]?{domain:n[0],service:n[1]}:null}_ensureNotified(){var t;if(this._notified)return this._notified;const e=new Set;try{const n=null===(t=null===window||void 0===window?void 0:window.localStorage)||void 0===t?void 0:t.getItem(h);if(n){const t=JSON.parse(n);if(Array.isArray(t)){const n=Date.now()-p;for(const r of t){if("string"!=typeof r)continue;const t=Number(r.split("|")[2]);Number.isFinite(t)&&t<n||e.add(r)}}}}catch(t){}return this._notified=e,e}_persistNotified(){var t;if(this._notified)try{const e=Date.now()-p,n=[];for(const t of this._notified){const r=Number(t.split("|")[2]);Number.isFinite(r)&&r<e||n.push(t)}null===(t=null===window||void 0===window?void 0:window.localStorage)||void 0===t||t.setItem(h,JSON.stringify(n))}catch(t){}}reset(){this._acks.clear(),this._notified=new Set,this._notifyInFlight.clear(),this._runCache.clear()}},x=6e4,b=36e5,$=864e5,M="var(--primary-color)",S="var(--success-color, #4caf50)",D="var(--secondary-text-color)",A="var(--error-color)",F="var(--primary-text-color)",C="var(--secondary-text-color)",z="var(--card-background-color)";class T extends i.m{constructor(){super(...arguments),this.metadata={type:"laundry_tracker",title:"Laundry Tracker",description:"Detects wash and dry cycles from power sensors and nags about forgotten loads",author:"WJD Designs",version:"1.0.0",icon:"mdi:washing-machine",category:"data",tags:["pro","premium","laundry","washer","dryer","cycle","power","appliance"]},this._editor=new Map}createDefault(t,e){return{id:t||this.generateId("laundry_tracker"),type:"laundry_tracker",appliances:[],history_days:7,layout:"stack",title:"",show_title:!0,show_status_cards:!0,show_timeline:!0,show_history_stats:!0,show_energy:!0,show_idle_alert:!0,show_handoff_hint:!0,acknowledge_enabled:!0,energy_rate:.15,currency_symbol:"$",notify_service:"",running_color:"",done_color:"",idle_color:"",alert_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(t){return super.validate(t)}getRuntimeEntityIds(t){const e=t,n=[];for(const t of e.appliances||[])for(const e of[t.power_entity,t.state_entity,t.door_entity])e&&n.push(e);return n}_ensureEditorState(t){let e=this._editor.get(t);return e||(e={expanded:new Set,suggested:new Set},this._editor.set(t,e)),e}renderGeneralTab(t,e,n,i){var a,l,d;const c=t,u=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en";if(!(0,s.gf)(e))return(0,s.b5)(u,(0,o.kg)("editor.laundry_tracker.pro_description",u,"Turn a $15 smart plug into a laundry butler: automatic cycle detection, forgotten-load alerts, and running energy costs."));const h=this._ensureEditorState(c.id),p=k.analyze(e,{moduleId:c.id,appliances:c.appliances||[],historyDays:null!==(l=c.history_days)&&void 0!==l?l:7,energyRate:null!==(d=c.energy_rate)&&void 0!==d?d:.15,acknowledgeEnabled:!1!==c.acknowledge_enabled},()=>this.triggerPreviewUpdate());return r.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        ${this._renderAppliancesSection(c,e,i,u,h,p)}
        ${this._renderDisplaySection(c,e,i,u)}
        ${this._renderHistorySection(c,e,i,u)}
        ${this._renderNotifySection(c,e,i,u)}
        ${this._renderColorsSection(c,e,i,u)}
      </div>
    `}_renderAppliancesSection(t,e,n,i,a,s){const l=t.appliances||[];return r.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,o.kg)("editor.laundry_tracker.appliances_section",i,"Appliances")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${(0,o.kg)("editor.laundry_tracker.appliances_section_desc",i,"Add each machine and point it at a power sensor. A smart plug is enough — no smart appliance required.")}
        </div>

        ${0===l.length?r.qy`<div class="uc-lt-editor-empty">
              <ha-icon icon="mdi:washing-machine"></ha-icon>
              <span>
                ${(0,o.kg)("editor.laundry_tracker.no_appliances_hint",i,"No machines yet. Add a washer or a dryer to get started.")}
              </span>
            </div>`:r.s6}
        ${l.map((r,o)=>this._renderApplianceRow(t,r,o,e,n,i,a,s))}

        <div class="uc-lt-add-row">
          <button
            type="button"
            class="uc-lt-add-btn"
            @click=${()=>this._addAppliance(t,n,"washer",i,a)}
          >
            <ha-icon icon="mdi:washing-machine"></ha-icon>
            ${(0,o.kg)("editor.laundry_tracker.add_washer",i,"Add washer")}
          </button>
          <button
            type="button"
            class="uc-lt-add-btn"
            @click=${()=>this._addAppliance(t,n,"dryer",i,a)}
          >
            <ha-icon icon="mdi:tumble-dryer"></ha-icon>
            ${(0,o.kg)("editor.laundry_tracker.add_dryer",i,"Add dryer")}
          </button>
        </div>
      </div>
    `}_renderApplianceRow(t,e,n,i,a,s,l,d){const u=t.appliances||[],h=l.expanded.has(e.id),p="dryer"===e.kind?"dryer":"washer",_="dryer"===p?(0,o.kg)("editor.laundry_tracker.kind_dryer",s,"Dryer"):(0,o.kg)("editor.laundry_tracker.kind_washer",s,"Washer"),y=e.power_entity||e.state_entity||(0,o.kg)("editor.laundry_tracker.row_no_entity",s,"No sensor selected");return r.qy`
      <div class="uc-lt-row ${h?"expanded":""}" data-uc-role="pane">
        <div class="uc-lt-row-head">
          <ha-icon
            class="uc-lt-row-icon"
            icon=${e.icon||c[p].icon}
          ></ha-icon>
          <div class="uc-lt-row-text">
            <div class="uc-lt-row-name">
              ${e.name||_}
              <span class="uc-lt-row-kind">${_}</span>
            </div>
            <div
              class="uc-lt-row-sub ${e.power_entity||e.state_entity?"":"empty"}"
            >
              ${y}
            </div>
          </div>
          <button
            type="button"
            class="uc-lt-icon-btn"
            ?disabled=${0===n}
            title=${(0,o.kg)("editor.laundry_tracker.move_up",s,"Move up")}
            aria-label=${(0,o.kg)("editor.laundry_tracker.move_up",s,"Move up")}
            @click=${()=>this._moveAppliance(t,a,n,-1)}
          >
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button
            type="button"
            class="uc-lt-icon-btn"
            ?disabled=${n===u.length-1}
            title=${(0,o.kg)("editor.laundry_tracker.move_down",s,"Move down")}
            aria-label=${(0,o.kg)("editor.laundry_tracker.move_down",s,"Move down")}
            @click=${()=>this._moveAppliance(t,a,n,1)}
          >
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
          <button
            type="button"
            class="uc-lt-icon-btn"
            title=${(0,o.kg)("editor.laundry_tracker.edit_appliance",s,"Edit machine")}
            aria-label=${(0,o.kg)("editor.laundry_tracker.edit_appliance",s,"Edit machine")}
            @click=${()=>{l.expanded.has(e.id)?l.expanded.delete(e.id):l.expanded.add(e.id),this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon=${h?"mdi:chevron-up-circle-outline":"mdi:pencil"}></ha-icon>
          </button>
          <button
            type="button"
            class="uc-lt-icon-btn danger"
            title=${(0,o.kg)("editor.laundry_tracker.delete_appliance",s,"Remove machine")}
            aria-label=${(0,o.kg)("editor.laundry_tracker.delete_appliance",s,"Remove machine")}
            @click=${()=>this._removeAppliance(t,a,n,l)}
          >
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>

        ${h?r.qy`
              <div class="uc-lt-row-body">
                ${this.renderFieldSection((0,o.kg)("editor.laundry_tracker.appliance_name",s,"Name"),(0,o.kg)("editor.laundry_tracker.appliance_name_desc",s,"Shown on the status card."),i,{name:e.name||""},[this.textField("name")],n=>{var r,i;return this._patchAppliance(t,a,e.id,{name:null!==(i=null===(r=n.detail.value)||void 0===r?void 0:r.name)&&void 0!==i?i:""})})}
                ${this.renderSegmentedField((0,o.kg)("editor.laundry_tracker.appliance_kind",s,"Machine type"),(0,o.kg)("editor.laundry_tracker.appliance_kind_desc",s,"Sets the default icon and detection thresholds. Dryers idle higher than washers."),p,[{value:"washer",label:(0,o.kg)("editor.laundry_tracker.kind_washer",s,"Washer"),icon:"mdi:washing-machine"},{value:"dryer",label:(0,o.kg)("editor.laundry_tracker.kind_dryer",s,"Dryer"),icon:"mdi:tumble-dryer"}],n=>this._changeKind(t,a,e,n,s),2)}
                ${this.renderIconField((0,o.kg)("editor.laundry_tracker.appliance_icon",s,"Icon"),(0,o.kg)("editor.laundry_tracker.appliance_icon_desc",s,"Leave blank to use the default for this machine type."),i,e.icon||"",n=>this._patchAppliance(t,a,e.id,{icon:n}))}
                ${this.renderFieldSection((0,o.kg)("editor.laundry_tracker.power_entity",s,"Power sensor"),(0,o.kg)("editor.laundry_tracker.power_entity_desc",s,"Watts reported by a smart plug. This is what cycle detection reads."),i,{power_entity:e.power_entity||""},[{name:"power_entity",selector:{entity:{domain:"sensor"}}}],n=>{var r,o;return this._patchAppliance(t,a,e.id,this._withHomeConnectLinks(i,e,{power_entity:null!==(o=null===(r=n.detail.value)||void 0===r?void 0:r.power_entity)&&void 0!==o?o:""}))})}
                ${this._renderThresholdHelper(t,e,a,s,l,d)}
                ${this.renderFieldSection((0,o.kg)("editor.laundry_tracker.door_entity",s,"Door / lid sensor"),(0,o.kg)("editor.laundry_tracker.door_entity_desc",s,"Optional but the most reliable unload signal there is: opening the door after a cycle clears the alert. A contact sensor, or the door sensor of a smart appliance (Home Connect: open, closed, locked)."),i,{door_entity:e.door_entity||""},[{name:"door_entity",selector:{entity:{domain:["binary_sensor","sensor"]}}}],n=>{var r,o;return this._patchAppliance(t,a,e.id,this._withHomeConnectLinks(i,e,{door_entity:null!==(o=null===(r=n.detail.value)||void 0===r?void 0:r.door_entity)&&void 0!==o?o:""}))})}
                ${this.renderConditionalFieldsGroup((0,o.kg)("editor.laundry_tracker.advanced_detection",s,"Advanced detection"),this._renderAdvancedDetection(t,e,i,a,s))}
              </div>
            `:r.s6}
      </div>
    `}_renderAdvancedDetection(t,e,n,i,a){var s,l,u,h,p;const _="dryer"===e.kind?"dryer":"washer",y=c[_];return r.qy`
      ${this.renderFieldSection((0,o.kg)("editor.laundry_tracker.state_entity",a,"Machine state entity"),(0,o.kg)("editor.laundry_tracker.state_entity_desc",a,"Fallback for machines with no power sensor: an entity reporting run/idle from a smart-appliance integration."),n,{state_entity:e.state_entity||""},[{name:"state_entity",selector:{entity:{}}}],r=>{var o,a;return this._patchAppliance(t,i,e.id,this._withHomeConnectLinks(n,e,{state_entity:null!==(a=null===(o=r.detail.value)||void 0===o?void 0:o.state_entity)&&void 0!==a?a:""}))})}
      ${this.renderChipListField((0,o.kg)("editor.laundry_tracker.running_states",a,"Running states"),(0,o.kg)("editor.laundry_tracker.running_states_desc",a,'States of the machine state entity that mean "running". Leave empty for a broad default set.'),n,e.running_states||[],n=>this._patchAppliance(t,i,e.id,{running_states:n}),{mode:"free-text",placeholder:d.join(", ")})}
      ${this.renderSliderField((0,o.kg)("editor.laundry_tracker.start_threshold",a,"Start threshold"),(0,o.kg)("editor.laundry_tracker.start_threshold_desc",a,"Watts above which a cycle counts as started."),null!==(s=e.start_threshold_w)&&void 0!==s?s:y.start_threshold_w,y.start_threshold_w,1,500,1,n=>this._patchAppliance(t,i,e.id,{start_threshold_w:n})," W")}
      ${this.renderSliderField((0,o.kg)("editor.laundry_tracker.stop_threshold",a,"Stop threshold"),(0,o.kg)("editor.laundry_tracker.stop_threshold_desc",a,"Watts below which the machine looks finished. Keep it under the start threshold."),null!==(l=e.stop_threshold_w)&&void 0!==l?l:y.stop_threshold_w,y.stop_threshold_w,0,200,1,n=>this._patchAppliance(t,i,e.id,{stop_threshold_w:n})," W")}
      ${this.renderSliderField((0,o.kg)("editor.laundry_tracker.settle_minutes",a,"Settle time"),(0,o.kg)("editor.laundry_tracker.settle_minutes_desc",a,"How long the machine must stay quiet before the cycle closes. Stops a soak pause from ending the wash early."),null!==(u=e.settle_minutes)&&void 0!==u?u:y.settle_minutes,y.settle_minutes,1,30,1,n=>this._patchAppliance(t,i,e.id,{settle_minutes:n})," min")}
      ${this.renderSliderField((0,o.kg)("editor.laundry_tracker.min_cycle_minutes",a,"Minimum cycle length"),(0,o.kg)("editor.laundry_tracker.min_cycle_minutes_desc",a,"Shorter runs are treated as noise rather than a real load."),null!==(h=e.min_cycle_minutes)&&void 0!==h?h:y.min_cycle_minutes,y.min_cycle_minutes,1,120,1,n=>this._patchAppliance(t,i,e.id,{min_cycle_minutes:n})," min")}
      ${this.renderSliderField((0,o.kg)("editor.laundry_tracker.unload_grace",a,"Unload grace period"),(0,o.kg)("editor.laundry_tracker.unload_grace_desc",a,"How long after a cycle ends before the load counts as forgotten."),null!==(p=e.unload_grace_minutes)&&void 0!==p?p:y.unload_grace_minutes,y.unload_grace_minutes,5,360,5,n=>this._patchAppliance(t,i,e.id,{unload_grace_minutes:n})," min")}
    `}_renderThresholdHelper(t,e,n,i,a,s){if(!e.power_entity)return r.s6;const l=s.series.get(e.id)||[],d=w(l,s.windowEndMs);if(!d||d.samples<3)return r.qy`
        <div class="uc-lt-helper">
          <div class="uc-lt-helper-title">
            <ha-icon icon="mdi:tune-variant"></ha-icon>
            ${(0,o.kg)("editor.laundry_tracker.threshold_helper_title",i,"Threshold helper")}
          </div>
          <div class="uc-lt-helper-note">
            ${s.loading?(0,o.kg)("editor.laundry_tracker.threshold_loading",i,"Reading recent history for this sensor…"):(0,o.kg)("editor.laundry_tracker.threshold_no_data",i,"No recorder history for this sensor yet. Run a load and come back — the defaults will work in the meantime.")}
          </div>
        </div>
      `;const c=function(t,e){const n=w(t,e);if(!n||n.samples<3)return null;const{floor:r,max:i}=n,o=Math.max(0,i-r),a=r+Math.max(5,.02*o),s=y(a>=20?5*Math.round(a/5):Math.ceil(a),3,2e3),l=Math.max(r+1,.35*s);return{startW:s,stopW:y(Math.round(l),1,Math.max(1,s-1)),distribution:n}}(l,s.windowEndMs),u=a.suggested.has(e.id);return r.qy`
      <div class="uc-lt-helper">
        <div class="uc-lt-helper-title">
          <ha-icon icon="mdi:tune-variant"></ha-icon>
          ${(0,o.kg)("editor.laundry_tracker.threshold_helper_title",i,"Threshold helper")}
        </div>
        <div class="uc-lt-helper-note">
          ${(0,o.kg)("editor.laundry_tracker.threshold_helper_desc",i,"What this sensor actually reported over the history window.")}
        </div>
        <div class="uc-lt-helper-grid">
          ${this._renderHelperStat((0,o.kg)("editor.laundry_tracker.threshold_min",i,"Min"),this._formatWatts(d.min))}
          ${this._renderHelperStat((0,o.kg)("editor.laundry_tracker.threshold_floor",i,"Standby"),this._formatWatts(d.floor))}
          ${this._renderHelperStat((0,o.kg)("editor.laundry_tracker.threshold_median",i,"Median"),this._formatWatts(d.median))}
          ${this._renderHelperStat((0,o.kg)("editor.laundry_tracker.threshold_max",i,"Max"),this._formatWatts(d.max))}
        </div>
        ${c?r.qy`
              <button
                type="button"
                class="uc-lt-suggest-btn"
                @click=${()=>{this._patchAppliance(t,n,e.id,{start_threshold_w:c.startW,stop_threshold_w:c.stopW}),a.suggested.add(e.id),this.triggerPreviewUpdate(!0)}}
              >
                <ha-icon icon="mdi:auto-fix"></ha-icon>
                ${(0,o.kg)("editor.laundry_tracker.suggest_thresholds",i,"Suggest thresholds")}
              </button>
              <div class="uc-lt-helper-note">
                ${u?(0,o.kg)("editor.laundry_tracker.suggested_applied",i,"Applied. Fine-tune them under Advanced detection if a cycle is missed."):this._formatTemplate((0,o.kg)("editor.laundry_tracker.suggest_preview",i,"Suggestion: start {start} W, stop {stop} W."),{start:String(c.startW),stop:String(c.stopW)})}
              </div>
            `:r.s6}
      </div>
    `}_renderHelperStat(t,e){return r.qy`
      <div class="uc-lt-helper-stat" data-uc-role="pane">
        <div class="uc-lt-helper-stat-label">${t}</div>
        <div class="uc-lt-helper-stat-value">${e}</div>
      </div>
    `}_renderDisplaySection(t,e,n,i){return r.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,o.kg)("editor.laundry_tracker.display_section",i,"Display")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${(0,o.kg)("editor.laundry_tracker.display_section_desc",i,"Choose which parts of the card are shown.")}
        </div>

        ${this.renderSegmentedField((0,o.kg)("editor.laundry_tracker.layout",i,"Layout"),(0,o.kg)("editor.laundry_tracker.layout_desc",i,"Stack the machines vertically, or sit them side by side."),t.layout||"stack",[{value:"stack",label:(0,o.kg)("editor.laundry_tracker.layout_stack",i,"Stack"),icon:"mdi:view-sequential"},{value:"row",label:(0,o.kg)("editor.laundry_tracker.layout_row",i,"Row"),icon:"mdi:view-column"}],t=>{n({layout:"row"===t?"row":"stack"}),this.triggerPreviewUpdate()},2)}
        ${this.renderSettingsSection("","",[{title:(0,o.kg)("editor.laundry_tracker.show_status_cards",i,"Show status cards"),description:(0,o.kg)("editor.laundry_tracker.show_status_cards_desc",i,"One card per machine with its current phase."),hass:e,data:{show_status_cards:!1!==t.show_status_cards},schema:[this.booleanField("show_status_cards")],onChange:t=>{var e;n({show_status_cards:!1!==(null===(e=t.detail.value)||void 0===e?void 0:e.show_status_cards)}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.laundry_tracker.show_idle_alert",i,"Show forgotten-load alert"),description:(0,o.kg)("editor.laundry_tracker.show_idle_alert_desc",i,"The loud banner when a finished load is still sitting in the machine."),hass:e,data:{show_idle_alert:!1!==t.show_idle_alert},schema:[this.booleanField("show_idle_alert")],onChange:t=>{var e;n({show_idle_alert:!1!==(null===(e=t.detail.value)||void 0===e?void 0:e.show_idle_alert)}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.laundry_tracker.show_handoff_hint",i,"Show washer → dryer hint"),description:(0,o.kg)("editor.laundry_tracker.show_handoff_hint_desc",i,"Suggests moving the load when a wash finishes and a dryer is free."),hass:e,data:{show_handoff_hint:!1!==t.show_handoff_hint},schema:[this.booleanField("show_handoff_hint")],onChange:t=>{var e;n({show_handoff_hint:!1!==(null===(e=t.detail.value)||void 0===e?void 0:e.show_handoff_hint)}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.laundry_tracker.acknowledge_enabled",i,'Allow "Unloaded"'),description:(0,o.kg)("editor.laundry_tracker.acknowledge_enabled_desc",i,"Adds a button to clear an alert by hand. Resets when the browser reloads."),hass:e,data:{acknowledge_enabled:!1!==t.acknowledge_enabled},schema:[this.booleanField("acknowledge_enabled")],onChange:t=>{var e;n({acknowledge_enabled:!1!==(null===(e=t.detail.value)||void 0===e?void 0:e.acknowledge_enabled)}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.laundry_tracker.show_timeline",i,"Show timeline"),description:(0,o.kg)("editor.laundry_tracker.show_timeline_desc",i,"A strip of the history window with one lane per machine."),hass:e,data:{show_timeline:!1!==t.show_timeline},schema:[this.booleanField("show_timeline")],onChange:t=>{var e;n({show_timeline:!1!==(null===(e=t.detail.value)||void 0===e?void 0:e.show_timeline)}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.laundry_tracker.show_history_stats",i,"Show history stats"),description:(0,o.kg)("editor.laundry_tracker.show_history_stats_desc",i,"Cycle count, energy, cost and average duration for the window."),hass:e,data:{show_history_stats:!1!==t.show_history_stats},schema:[this.booleanField("show_history_stats")],onChange:t=>{var e;n({show_history_stats:!1!==(null===(e=t.detail.value)||void 0===e?void 0:e.show_history_stats)}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.laundry_tracker.show_energy",i,"Show energy and cost"),description:(0,o.kg)("editor.laundry_tracker.show_energy_desc",i,"Turn off to hide kWh and money figures everywhere on the card."),hass:e,data:{show_energy:!1!==t.show_energy},schema:[this.booleanField("show_energy")],onChange:t=>{var e;n({show_energy:!1!==(null===(e=t.detail.value)||void 0===e?void 0:e.show_energy)}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.laundry_tracker.show_title",i,"Show title"),description:(0,o.kg)("editor.laundry_tracker.show_title_desc",i,"Display a heading above the machines."),hass:e,data:{show_title:!1!==t.show_title},schema:[this.booleanField("show_title")],onChange:t=>{var e;n({show_title:!1!==(null===(e=t.detail.value)||void 0===e?void 0:e.show_title)}),this.triggerPreviewUpdate()}}])}
        ${this.renderFieldSection((0,o.kg)("editor.laundry_tracker.title",i,"Title"),(0,o.kg)("editor.laundry_tracker.title_desc",i,'Leave blank to use "Laundry".'),e,{title:t.title||""},[this.textField("title")],t=>{var e,r;n({title:null!==(r=null===(e=t.detail.value)||void 0===e?void 0:e.title)&&void 0!==r?r:""}),this.triggerPreviewUpdate()})}
      </div>
    `}_renderHistorySection(t,e,n,i){var a,s,l;return r.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,o.kg)("editor.laundry_tracker.history_section",i,"History & cost")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${(0,o.kg)("editor.laundry_tracker.history_section_desc",i,"How far back to read the recorder, and what a kilowatt-hour costs you.")}
        </div>

        ${this.renderSliderField((0,o.kg)("editor.laundry_tracker.history_days",i,"History window"),(0,o.kg)("editor.laundry_tracker.history_days_desc",i,"Longer windows give better averages but ask more of the recorder."),null!==(a=t.history_days)&&void 0!==a?a:7,7,1,30,1,t=>{n({history_days:t}),this.triggerPreviewUpdate()}," d")}
        ${this.renderFieldSection((0,o.kg)("editor.laundry_tracker.energy_rate",i,"Energy rate"),(0,o.kg)("editor.laundry_tracker.energy_rate_desc",i,"Cost per kWh used for the cycle cost estimate."),e,{energy_rate:null!==(s=t.energy_rate)&&void 0!==s?s:.15},[this.numberField("energy_rate",0,10,.01)],t=>{var e;const r=Number(null===(e=t.detail.value)||void 0===e?void 0:e.energy_rate);n({energy_rate:Number.isFinite(r)?r:.15}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,o.kg)("editor.laundry_tracker.currency_symbol",i,"Currency symbol"),(0,o.kg)("editor.laundry_tracker.currency_symbol_desc",i,"Prefixed to every cost figure."),e,{currency_symbol:null!==(l=t.currency_symbol)&&void 0!==l?l:"$"},[this.textField("currency_symbol")],t=>{var e,r;n({currency_symbol:null!==(r=null===(e=t.detail.value)||void 0===e?void 0:e.currency_symbol)&&void 0!==r?r:"$"}),this.triggerPreviewUpdate()})}
      </div>
    `}_renderNotifySection(t,e,n,i){return r.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,o.kg)("editor.laundry_tracker.notify_section",i,"Notifications")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${(0,o.kg)("editor.laundry_tracker.notify_section_desc",i,"Optional push when a load is left sitting past its grace period.")}
        </div>

        ${this.renderFieldSection((0,o.kg)("editor.laundry_tracker.notify_service",i,"Notify service"),(0,o.kg)("editor.laundry_tracker.notify_service_desc",i,"For example notify.mobile_app_pixel. Leave blank to turn notifications off."),e,{notify_service:t.notify_service||""},[this.textField("notify_service")],t=>{var e,r;n({notify_service:(null!==(r=null===(e=t.detail.value)||void 0===e?void 0:e.notify_service)&&void 0!==r?r:"").trim()}),this.triggerPreviewUpdate()})}

        <div class="uc-lt-note">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <span>
            ${(0,o.kg)("editor.laundry_tracker.notify_once_note",i,"Fires at most once per load. A second nag only happens after the next cycle finishes.")}
          </span>
        </div>
      </div>
    `}_renderColorsSection(t,e,n,i){const a=[["running_color",(0,o.kg)("editor.laundry_tracker.color_running",i,"Running"),M,(0,o.kg)("editor.laundry_tracker.color_running_desc",i,"A cycle is in progress.")],["done_color",(0,o.kg)("editor.laundry_tracker.color_done",i,"Finished"),S,(0,o.kg)("editor.laundry_tracker.color_done_desc",i,"A cycle just ended.")],["idle_color",(0,o.kg)("editor.laundry_tracker.color_idle",i,"Idle"),D,(0,o.kg)("editor.laundry_tracker.color_idle_desc",i,"Nothing happening.")],["alert_color",(0,o.kg)("editor.laundry_tracker.color_alert",i,"Forgotten"),A,(0,o.kg)("editor.laundry_tracker.color_alert_desc",i,"A load is still sitting there.")],["text_color",(0,o.kg)("editor.laundry_tracker.color_text",i,"Text"),F,(0,o.kg)("editor.laundry_tracker.color_text_desc",i,"Primary text.")],["secondary_text_color",(0,o.kg)("editor.laundry_tracker.color_secondary",i,"Secondary text"),C,(0,o.kg)("editor.laundry_tracker.color_secondary_desc",i,"Supporting detail text.")],["card_background_color",(0,o.kg)("editor.laundry_tracker.color_card_bg",i,"Card background"),z,(0,o.kg)("editor.laundry_tracker.color_card_bg_desc",i,"Behind each status card.")]];return r.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,o.kg)("editor.laundry_tracker.colors_section",i,"Colors")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${(0,o.kg)("editor.laundry_tracker.colors_section_desc",i,"Leave any of these blank to follow the Home Assistant theme.")}
        </div>
        ${a.map(([r,i,o,a])=>this.renderColorField(i,a,e,t[r]||"",o,t=>{n({[r]:t}),this.triggerPreviewUpdate()}))}
      </div>
    `}_addAppliance(t,e,n,r,i){const a=c[n],s=(t.appliances||[]).filter(t=>t.kind===n).length,l="dryer"===n?(0,o.kg)("editor.laundry_tracker.kind_dryer",r,"Dryer"):(0,o.kg)("editor.laundry_tracker.kind_washer",r,"Washer"),d={id:this.generateId(`laundry_${n}`),kind:n,name:s>0?`${l} ${s+1}`:l,icon:a.icon,power_entity:"",state_entity:"",running_states:[],door_entity:"",start_threshold_w:a.start_threshold_w,stop_threshold_w:a.stop_threshold_w,settle_minutes:a.settle_minutes,min_cycle_minutes:a.min_cycle_minutes,unload_grace_minutes:a.unload_grace_minutes};e({appliances:[...t.appliances||[],d]}),i.expanded.add(d.id),this.triggerPreviewUpdate(!0)}_withHomeConnectLinks(t,e,n){const r=n.power_entity||n.state_entity||n.door_entity;if(!r)return n;const i=(0,a.YI)(t,r),o=Object.assign(Object.assign({},e),n),s=Object.assign({},n);return i.door&&!o.door_entity&&(s.door_entity=i.door),!i.operationState||o.state_entity||o.power_entity||(s.state_entity=i.operationState),s}_patchAppliance(t,e,n,r){e({appliances:(t.appliances||[]).map(t=>t.id===n?Object.assign(Object.assign({},t),r):t)}),this.triggerPreviewUpdate()}_removeAppliance(t,e,n,r){const i=[...t.appliances||[]],[o]=i.splice(n,1);o&&(r.expanded.delete(o.id),r.suggested.delete(o.id)),e({appliances:i}),this.triggerPreviewUpdate(!0)}_moveAppliance(t,e,n,r){const i=[...t.appliances||[]],o=n+r;if(o<0||o>=i.length)return;const a=i[n],s=i[o];a&&s&&(i[n]=s,i[o]=a,e({appliances:i}),this.triggerPreviewUpdate(!0))}_changeKind(t,e,n,r,i){const a="dryer"===r?"dryer":"washer";if(a===n.kind)return;const s=c["dryer"===n.kind?"dryer":"washer"],l=c[a],d={kind:a};n.icon&&n.icon!==s.icon||(d.icon=l.icon);const u="dryer"===n.kind?(0,o.kg)("editor.laundry_tracker.kind_dryer",i,"Dryer"):(0,o.kg)("editor.laundry_tracker.kind_washer",i,"Washer");n.name&&n.name!==u||(d.name="dryer"===a?(0,o.kg)("editor.laundry_tracker.kind_dryer",i,"Dryer"):(0,o.kg)("editor.laundry_tracker.kind_washer",i,"Washer")),n.start_threshold_w===s.start_threshold_w&&(d.start_threshold_w=l.start_threshold_w),n.stop_threshold_w===s.stop_threshold_w&&(d.stop_threshold_w=l.stop_threshold_w),n.unload_grace_minutes===s.unload_grace_minutes&&(d.unload_grace_minutes=l.unload_grace_minutes),this._patchAppliance(t,e,n.id,d)}renderPreview(t,e,n,i){var a,s,l,d;const c=t,u=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en",h=(c.appliances||[]).filter(t=>!!t&&!!t.id);if(0===h.length)return this.renderGradientErrorState((0,o.kg)("editor.laundry_tracker.empty_title",u,"Add a washer or dryer"),(0,o.kg)("editor.laundry_tracker.empty_desc",u,"Open the General tab and point a machine at its power sensor."),"mdi:washing-machine");const p=k.analyze(e,{moduleId:c.id,appliances:h,historyDays:null!==(s=c.history_days)&&void 0!==s?s:7,energyRate:null!==(l=c.energy_rate)&&void 0!==l?l:.15,acknowledgeEnabled:!1!==c.acknowledge_enabled},()=>this.triggerPreviewUpdate());"live"!==i&&"ha-preview"!==i&&setTimeout(()=>this._dispatchNotifications(c,e,p,u),0);const _=this._palette(c),y=this.buildStyleString(this.buildDesignStyles(t,e)),g=this.getHoverEffectClass(t),v=(null===(d=c.title)||void 0===d?void 0:d.trim())||(0,o.kg)("editor.laundry_tracker.default_title",u,"Laundry"),m=r.qy`
      ${!1!==c.show_title?r.qy`<div class="uc-lt-title" style="color:${_.text};">
            <ha-icon icon="mdi:washing-machine"></ha-icon>
            <span>${v}</span>
          </div>`:r.s6}
      ${!1!==c.show_status_cards?r.qy`<div class="uc-lt-cards ${"row"===c.layout?"row":"stack"}">
            ${p.statuses.map(t=>this._renderStatusCard(c,t,e,_,u,p))}
          </div>`:r.s6}
      ${this._renderHandoffHint(c,p,_,u)}
      ${!1!==c.show_timeline?this._renderTimeline(c,p,_,u):r.s6}
      ${!1!==c.show_history_stats?this._renderStats(c,p,_,u):r.s6}
      ${p.error?r.qy`<div class="uc-lt-error" style="color:${_.secondary};">
            <ha-icon icon="mdi:database-alert-outline"></ha-icon>
            <span>
              ${(0,o.kg)("editor.laundry_tracker.history_error",u,"Could not read recorder history. Live wattage still works.")}
            </span>
          </div>`:r.s6}
    `,f=this.createGestureHandlers(`laundry-${c.id}`,{tap_action:c.tap_action,hold_action:c.hold_action,double_tap_action:c.double_tap_action,module:c},e,n,[".uc-lt-action-btn"]);return r.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div
        class="uc-lt-wrapper ${g}"
        style="${y}"
        @pointerdown=${f.onPointerDown}
        @pointermove=${f.onPointerMove}
        @pointerup=${f.onPointerUp}
        @pointerleave=${f.onPointerLeave}
        @pointercancel=${f.onPointerCancel}
      >
        ${this.wrapWithAnimation(m,t,e)}
      </div>
    `}_renderStatusCard(t,e,n,i,a,s){var l;const d=e.appliance,u="dryer"===d.kind?"dryer":"washer",h=d.icon||c[u].icon,p=(null===(l=d.name)||void 0===l?void 0:l.trim())||("dryer"===u?(0,o.kg)("editor.laundry_tracker.kind_dryer",a,"Dryer"):(0,o.kg)("editor.laundry_tracker.kind_washer",a,"Washer")),_="forgotten"===e.phase&&!1!==t.show_idle_alert,y=this._phaseColor(e.phase,i,!1!==t.show_idle_alert),g=[`background:${i.cardBg}`,`border-left:4px solid ${y}`,_?`box-shadow: 0 0 0 1px ${y}55`:""].filter(Boolean).join(";");return r.qy`
      <div class="uc-lt-card ${_?"alarm":""}" style="${g}">
        <div class="uc-lt-card-head">
          <ha-icon
            class="uc-lt-card-icon ${"running"===e.phase?"spin-pulse":""} ${_?"alert-pulse":""}"
            icon=${h}
            style="color:${y};"
          ></ha-icon>
          <div class="uc-lt-card-title">
            <div class="uc-lt-card-name" style="color:${i.text};">${p}</div>
            <div class="uc-lt-card-phase" style="color:${y};">
              ${this._phaseLabel(e,t,a)}
            </div>
          </div>
          ${e.doorOpen?r.qy`<span
                class="uc-lt-door"
                style="color:${i.secondary};"
                title=${(0,o.kg)("editor.laundry_tracker.door_open",a,"Door open")}
              >
                <ha-icon icon="mdi:door-open"></ha-icon>
              </span>`:r.s6}
        </div>

        <div class="uc-lt-card-body">
          ${this._renderPhaseDetail(t,e,i,a,y,s)}
        </div>

        ${this._renderCardActions(t,e,n,i,a)}
      </div>
    `}_renderPhaseDetail(t,e,n,i,a,s){switch(e.phase){case"running":return this._renderRunningDetail(t,e,n,i,a);case"finished":return this._renderFinishedDetail(t,e,n,i);case"forgotten":return!1!==t.show_idle_alert?this._renderForgottenDetail(t,e,n,i,a):this._renderFinishedDetail(t,e,n,i);case"unknown":return r.qy`
          <div class="uc-lt-line" style="color:${n.secondary};">
            ${(0,o.kg)("editor.laundry_tracker.no_source",i,"No power or state sensor selected for this machine.")}
          </div>
        `;default:return this._renderIdleDetail(t,e,n,i,s)}}_renderRunningDetail(t,e,n,i,a){const s=Date.now(),l=e.sinceMs?Math.max(0,s-e.sinceMs):null,d=this._typicalDurationMs(e),c=d&&null!==l?Math.round(d.medianMs-l):null,u=d&&null!==l?Math.max(.02,Math.min(.97,l/Math.max(d.medianMs,1))):null;return r.qy`
      <div class="uc-lt-metrics">
        ${null!==e.currentW?r.qy`<span class="uc-lt-metric" style="color:${n.text};">
              <strong>${this._formatWatts(e.currentW)}</strong>
            </span>`:r.s6}
        ${null!==l?r.qy`<span class="uc-lt-metric" style="color:${n.secondary};">
              ${this._formatTemplate((0,o.kg)("editor.laundry_tracker.running_for",i,"running for {time}"),{time:this._formatDuration(l,i)})}
            </span>`:r.s6}
      </div>
      ${null!==u?r.qy`<div class="uc-lt-progress" style="background:${a}22;">
            <div
              class="uc-lt-progress-fill"
              style="width:${(100*u).toFixed(1)}%;background:${a};"
            ></div>
          </div>`:r.s6}
      ${d&&null!==c&&c>x?r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
            ${this._formatTemplate((0,o.kg)("editor.laundry_tracker.est_finish",i,"about {time} left, based on your last {count} cycles"),{time:this._formatDuration(c,i),count:String(d.count)})}
          </div>`:d?r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
              ${(0,o.kg)("editor.laundry_tracker.est_finish_soon",i,"should finish any minute now")}
            </div>`:r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
              ${(0,o.kg)("editor.laundry_tracker.est_finish_unknown",i,"not enough past cycles to estimate a finish time yet")}
            </div>`}
    `}_renderFinishedDetail(t,e,n,i){var a;const s=null!==(a=e.sittingMs)&&void 0!==a?a:0;return r.qy`
      <div class="uc-lt-headline" style="color:${n.text};">
        ${this._formatTemplate((0,o.kg)("editor.laundry_tracker.done_ago",i,"Done {time} ago"),{time:this._formatDuration(s,i)})}
      </div>
      ${e.lastCycle?r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
            ${this._cycleSummary(t,e.lastCycle,i)}
          </div>`:r.s6}
    `}_renderForgottenDetail(t,e,n,i,a){var s;const l=null!==(s=e.sittingMs)&&void 0!==s?s:0;return r.qy`
      <div class="uc-lt-alarm-headline" style="color:${a};">
        ${this._formatTemplate((0,o.kg)("editor.laundry_tracker.sitting_for",i,"Sitting for {time}"),{time:this._formatDuration(l,i)})}
      </div>
      <div class="uc-lt-line strong" style="color:${n.text};">
        ${"dryer"===e.appliance.kind?(0,o.kg)("editor.laundry_tracker.forgotten_dryer",i,"The dry load is still in the drum."):(0,o.kg)("editor.laundry_tracker.forgotten_washer",i,"The wet load is still in the drum.")}
      </div>
      ${e.lastCycle?r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
            ${this._cycleSummary(t,e.lastCycle,i)}
          </div>`:r.s6}
    `}_renderIdleDetail(t,e,n,i,a){var s;if("power"===e.source&&0===e.cycles.length&&e.historyPoints<5)return r.qy`
        <div class="uc-lt-line" style="color:${n.secondary};">
          ${a.loading?(0,o.kg)("editor.laundry_tracker.loading_history",i,"Reading cycle history…"):(0,o.kg)("editor.laundry_tracker.learning",i,"Learning your cycles — no completed loads recorded yet.")}
        </div>
        ${null!==e.currentW?r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
              ${this._formatTemplate((0,o.kg)("editor.laundry_tracker.drawing_now",i,"Drawing {watts} right now"),{watts:this._formatWatts(e.currentW)})}
            </div>`:r.s6}
      `;if(!e.lastCycle)return r.qy`
        <div class="uc-lt-line" style="color:${n.secondary};">
          ${this._formatTemplate((0,o.kg)("editor.laundry_tracker.no_cycles_window",i,"No cycles in the last {days} days"),{days:String(null!==(s=t.history_days)&&void 0!==s?s:7)})}
        </div>
      `;const l=Math.max(0,Date.now()-e.lastCycle.endMs);return r.qy`
      <div class="uc-lt-line" style="color:${n.text};">
        ${this._formatTemplate((0,o.kg)("editor.laundry_tracker.last_cycle_ago",i,"Last cycle {time} ago"),{time:this._formatDuration(l,i)})}
        ${e.retrievedByDoor?r.qy`<span
              class="uc-lt-badge"
              style="color:${n.done};border-color:${n.done}55;"
            >
              ${(0,o.kg)("editor.laundry_tracker.emptied",i,"emptied")}
            </span>`:e.acknowledged?r.qy`<span
                class="uc-lt-badge"
                style="color:${n.done};border-color:${n.done}55;"
              >
                ${(0,o.kg)("editor.laundry_tracker.unloaded_badge",i,"unloaded")}
              </span>`:r.s6}
      </div>
      <div class="uc-lt-line" style="color:${n.secondary};">
        ${this._cycleSummary(t,e.lastCycle,i)}
      </div>
    `}_renderCardActions(t,e,n,i,a){if(!1===t.acknowledge_enabled)return r.s6;if("finished"!==e.phase&&"forgotten"!==e.phase)return r.s6;const s=e.lastCycle;if(!s)return r.s6;const l=this._phaseColor(e.phase,i,!1!==t.show_idle_alert);return r.qy`
      <div class="uc-lt-card-actions">
        <button
          type="button"
          class="uc-lt-action-btn"
          style="border-color:${l}66;color:${l};"
          @click=${t=>{t.stopPropagation(),k.acknowledge(e.appliance.id,s.endMs),this.triggerPreviewUpdate(!0)}}
        >
          <ha-icon icon="mdi:check-circle-outline"></ha-icon>
          ${(0,o.kg)("editor.laundry_tracker.unloaded_button",a,"Unloaded")}
        </button>
      </div>
    `}_renderHandoffHint(t,e,n,i){var a,s;if(!1===t.show_handoff_hint)return r.s6;const l=e.statuses.find(t=>"washer"===t.appliance.kind&&("finished"===t.phase||"forgotten"===t.phase));if(!l)return r.s6;const d=e.statuses.find(t=>"dryer"===t.appliance.kind&&"idle"===t.phase&&"none"!==t.source);if(!d)return r.s6;const c=(null===(a=l.appliance.name)||void 0===a?void 0:a.trim())||(0,o.kg)("editor.laundry_tracker.kind_washer",i,"Washer"),u=(null===(s=d.appliance.name)||void 0===s?void 0:s.trim())||(0,o.kg)("editor.laundry_tracker.kind_dryer",i,"Dryer");return r.qy`
      <div
        class="uc-lt-handoff"
        style="border-color:${n.done}55;background:${n.done}14;"
      >
        <ha-icon
          icon="mdi:arrow-right-bold-circle-outline"
          style="color:${n.done};"
        ></ha-icon>
        <div style="min-width:0;">
          <div class="uc-lt-handoff-title" style="color:${n.text};">
            ${(0,o.kg)("editor.laundry_tracker.handoff_title",i,"Move to dryer")}
          </div>
          <div class="uc-lt-handoff-sub" style="color:${n.secondary};">
            ${this._formatTemplate((0,o.kg)("editor.laundry_tracker.handoff_sub",i,"{washer} is done and {dryer} is free"),{washer:c,dryer:u})}
          </div>
        </div>
      </div>
    `}_renderTimeline(t,e,n,i){const a=Math.max(1,e.windowEndMs-e.windowStartMs),s=Math.max(1,Math.round(a/$)),l=e.statuses.some(t=>t.cycles.length>0||"running"===t.phase),d=this._timelineTicks(e.windowStartMs,e.windowEndMs,s);return r.qy`
      <div class="uc-lt-timeline">
        <div class="uc-lt-section-title" style="color:${n.secondary};">
          ${this._formatTemplate((0,o.kg)("editor.laundry_tracker.timeline_title",i,"Last {days} days"),{days:String(s)})}
        </div>
        ${l?r.qy`
              ${e.statuses.map(r=>this._renderTimelineLane(t,r,e,n,i,d))}
              <div class="uc-lt-axis">
                <div class="uc-lt-axis-spacer"></div>
                <div class="uc-lt-axis-track">
                  ${d.filter(t=>t.label).map(t=>r.qy`<span
                          class="uc-lt-axis-label"
                          style="left:${t.pct.toFixed(2)}%;color:${n.secondary};"
                          >${t.label}</span
                        >`)}
                </div>
              </div>
            `:r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
              ${e.loading?(0,o.kg)("editor.laundry_tracker.loading_history",i,"Reading cycle history…"):(0,o.kg)("editor.laundry_tracker.timeline_empty",i,"No cycles recorded in this window yet.")}
            </div>`}
      </div>
    `}_renderTimelineLane(t,e,n,i,a,s){var l;const d=Math.max(1,n.windowEndMs-n.windowStartMs),u="dryer"===e.appliance.kind?"dryer":"washer",h=(null===(l=e.appliance.name)||void 0===l?void 0:l.trim())||("dryer"===u?(0,o.kg)("editor.laundry_tracker.kind_dryer",a,"Dryer"):(0,o.kg)("editor.laundry_tracker.kind_washer",a,"Washer")),p=t=>Math.max(0,Math.min(100,(t-n.windowStartMs)/d*100)),_=e.cycles.map(e=>({left:p(e.startMs),right:p(e.endMs),color:i.done,title:this._cycleTooltip(t,h,e,a)}));return"running"===e.phase&&e.sinceMs&&_.push({left:p(e.sinceMs),right:p(n.windowEndMs),color:i.running,title:`${h} · ${(0,o.kg)("editor.laundry_tracker.phase_running",a,"Running")}`}),r.qy`
      <div class="uc-lt-lane-row">
        <div class="uc-lt-lane-label" style="color:${i.secondary};" title=${h}>
          <ha-icon icon=${e.appliance.icon||c[u].icon}></ha-icon>
          <span>${h}</span>
        </div>
        <div class="uc-lt-lane">
          ${s.map(t=>r.qy`<span class="uc-lt-gridline" style="left:${t.pct.toFixed(2)}%;"></span>`)}
          ${_.map(t=>r.qy`<span
                class="uc-lt-block"
                style="left:${t.left.toFixed(2)}%;width:${Math.max(.4,t.right-t.left).toFixed(2)}%;background:${t.color};"
                title=${t.title}
              ></span>`)}
        </div>
      </div>
    `}_timelineTicks(t,e,n){const r=Math.max(1,e-t),i=Math.ceil(n/7),o=[],a=new Date(t);a.setHours(24,0,0,0);let s=0;for(let n=a.getTime();n<=e;n+=$){const e=(n-t)/r*100,a=s%i===0;o.push({pct:e,label:a?this._formatDayLabel(n):""}),s+=1}return o}_renderStats(t,e,n,i){var a,s;const l=e.stats,d=null!==(a=t.history_days)&&void 0!==a?a:7,c=!1!==t.show_energy,u=null!==(s=t.currency_symbol)&&void 0!==s?s:"$";if(0===l.cycleCount)return r.qy`
        <div class="uc-lt-stats-empty" style="color:${n.secondary};">
          ${e.loading?(0,o.kg)("editor.laundry_tracker.loading_history",i,"Reading cycle history…"):(0,o.kg)("editor.laundry_tracker.stats_learning",i,"No completed cycles yet — still learning what your machines look like.")}
        </div>
      `;const h=[{label:(0,o.kg)("editor.laundry_tracker.stats_cycles",i,"Cycles"),value:String(l.cycleCount)},{label:(0,o.kg)("editor.laundry_tracker.stats_avg",i,"Average"),value:null!==l.avgDurationMs?this._formatDuration(l.avgDurationMs,i):"—"}];return c&&(h.push({label:(0,o.kg)("editor.laundry_tracker.stats_energy",i,"Energy"),value:`${l.totalKwh.toFixed(2)} kWh`}),h.push({label:(0,o.kg)("editor.laundry_tracker.stats_cost",i,"Cost"),value:`${u}${l.totalCost.toFixed(2)}`})),l.busiestDay&&h.push({label:(0,o.kg)("editor.laundry_tracker.stats_busiest",i,"Busiest"),value:this._formatDayName(l.busiestDay,i)}),r.qy`
      <div class="uc-lt-stats">
        ${h.map(t=>r.qy`
            <div class="uc-lt-stat" style="background:${n.cardBg};">
              <div class="uc-lt-stat-value" style="color:${n.text};">${t.value}</div>
              <div class="uc-lt-stat-label" style="color:${n.secondary};">${t.label}</div>
            </div>
          `)}
      </div>
      <div class="uc-lt-footnote" style="color:${n.secondary};">
        ${this._formatTemplate((0,o.kg)("editor.laundry_tracker.stats_footnote",i,"From {days} days of history"),{days:String(d)})}
      </div>
    `}_dispatchNotifications(t,e,n,r){var i,a;const s=(t.notify_service||"").trim();if(s)for(const l of n.statuses){if("forgotten"!==l.phase||!l.lastCycle)continue;const n="dryer"===l.appliance.kind?"dryer":"washer",d=(null===(i=l.appliance.name)||void 0===i?void 0:i.trim())||("dryer"===n?(0,o.kg)("editor.laundry_tracker.kind_dryer",r,"Dryer"):(0,o.kg)("editor.laundry_tracker.kind_washer",r,"Washer"));k.maybeNotify(e,{moduleId:t.id,applianceId:l.appliance.id,cycleEndMs:l.lastCycle.endMs,service:s,title:(0,o.kg)("editor.laundry_tracker.notify_title",r,"Laundry is waiting"),message:this._formatTemplate((0,o.kg)("editor.laundry_tracker.notify_message",r,"{name} finished {time} ago and still has a load in it."),{name:d,time:this._formatDuration(null!==(a=l.sittingMs)&&void 0!==a?a:0,r)})})}}_palette(t){return{running:t.running_color||M,done:t.done_color||S,idle:t.idle_color||D,alert:t.alert_color||A,text:t.text_color||F,secondary:t.secondary_text_color||C,cardBg:t.card_background_color||z}}_phaseColor(t,e,n){switch(t){case"running":return e.running;case"finished":return e.done;case"forgotten":return n?e.alert:e.done;default:return e.idle}}_phaseLabel(t,e,n){switch(t.phase){case"running":return(0,o.kg)("editor.laundry_tracker.phase_running",n,"Running");case"finished":return(0,o.kg)("editor.laundry_tracker.phase_finished",n,"Finished");case"forgotten":return!1!==e.show_idle_alert?(0,o.kg)("editor.laundry_tracker.phase_forgotten",n,"Still loaded"):(0,o.kg)("editor.laundry_tracker.phase_finished",n,"Finished");case"unknown":return(0,o.kg)("editor.laundry_tracker.phase_unknown",n,"Not set up");default:return(0,o.kg)("editor.laundry_tracker.phase_idle",n,"Idle")}}_typicalDurationMs(t){var e,n,r;const i=t.cycles.slice(-8).map(t=>t.durationMs);if(i.length<3)return null;const o=[...i].sort((t,e)=>t-e),a=Math.floor(o.length/2),s=o.length%2==0?((null!==(e=o[a-1])&&void 0!==e?e:0)+(null!==(n=o[a])&&void 0!==n?n:0))/2:null!==(r=o[a])&&void 0!==r?r:0;return s<=0?null:{medianMs:s,count:i.length}}_cycleSummary(t,e,n){var r;const i=[this._formatDuration(e.durationMs,n)];if(!1!==t.show_energy&&e.energyKwh>0){i.push(`${e.energyKwh.toFixed(2)} kWh`);const n=null!==(r=t.currency_symbol)&&void 0!==r?r:"$";i.push(`${n}${e.costEstimate.toFixed(2)}`)}return i.join(" · ")}_cycleTooltip(t,e,n,r){return`${e} · ${this._formatClock(n.startMs,r)} · ${this._cycleSummary(t,n,r)}`}_formatWatts(t){return Number.isFinite(t)?Math.abs(t)>=1e3?`${(t/1e3).toFixed(2)} kW`:Math.abs(t)>=100?`${Math.round(t)} W`:Math.round(10*t)/10+" W":"—"}_formatDuration(t,e){const n=Math.max(0,Math.round(t)),r=(0,o.kg)("editor.laundry_tracker.unit_day",e,"d"),i=(0,o.kg)("editor.laundry_tracker.unit_hour",e,"h"),a=(0,o.kg)("editor.laundry_tracker.unit_minute",e,"m");if(n<x)return`${Math.max(1,Math.round(n/1e3/60))}${a}`;if(n<b)return`${Math.round(n/x)}${a}`;if(n<$){const t=Math.floor(n/b),e=Math.round(n%b/x);return e>0?`${t}${i} ${e}${a}`:`${t}${i}`}const s=Math.floor(n/$),l=Math.round(n%$/b);return l>0?`${s}${r} ${l}${i}`:`${s}${r}`}_formatClock(t,e){try{return new Date(t).toLocaleString(e||void 0,{weekday:"short",hour:"numeric",minute:"2-digit"})}catch(e){return new Date(t).toLocaleString()}}_formatDayLabel(t){const e=new Date(t);return`${e.getMonth()+1}/${e.getDate()}`}_formatDayName(t,e){const n=t.split("-").map(Number),r=n[0],i=n[1],o=n[2];if(!r||!i||!o)return t;try{return new Date(r,i-1,o).toLocaleDateString(e||void 0,{weekday:"short"})}catch(e){return t}}_formatTemplate(t,e){let n=t;for(const[t,r]of Object.entries(e))n=n.split(`{${t}}`).join(r);return n}getStyles(){return`\n      ${i.m.getSliderStyles()}\n\n      .uc-lt-wrapper {\n        box-sizing: border-box;\n        width: 100%;\n      }\n\n      /* ── Preview ─────────────────────────────────────────────────────── */\n\n      .uc-lt-title {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 16px;\n        font-weight: 700;\n        margin-bottom: 10px;\n      }\n      .uc-lt-title ha-icon {\n        --mdc-icon-size: 20px;\n      }\n\n      .uc-lt-cards {\n        display: flex;\n        gap: 10px;\n      }\n      .uc-lt-cards.stack {\n        flex-direction: column;\n      }\n      .uc-lt-cards.row {\n        flex-direction: row;\n        flex-wrap: wrap;\n      }\n      .uc-lt-cards.row > .uc-lt-card {\n        flex: 1 1 220px;\n        min-width: 0;\n      }\n\n      .uc-lt-card {\n        border-radius: var(--uc-r-12, 12px);\n        padding: 12px 14px;\n        min-width: 0;\n        box-sizing: border-box;\n      }\n      .uc-lt-card.alarm {\n        animation: uc-lt-alarm-breathe 2.4s ease-in-out infinite;\n      }\n\n      .uc-lt-card-head {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        min-width: 0;\n      }\n      .uc-lt-card-icon {\n        --mdc-icon-size: 28px;\n        flex-shrink: 0;\n      }\n      .uc-lt-card-icon.spin-pulse {\n        animation: uc-lt-pulse 1.6s ease-in-out infinite;\n      }\n      .uc-lt-card-icon.alert-pulse {\n        animation: uc-lt-shake 3s ease-in-out infinite;\n      }\n      .uc-lt-card-title {\n        flex: 1;\n        min-width: 0;\n      }\n      .uc-lt-card-name {\n        font-size: 15px;\n        font-weight: 700;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-card-phase {\n        font-size: 11px;\n        font-weight: 700;\n        letter-spacing: 0.6px;\n        text-transform: uppercase;\n      }\n      .uc-lt-door ha-icon {\n        --mdc-icon-size: 18px;\n      }\n\n      .uc-lt-card-body {\n        margin-top: 8px;\n      }\n      .uc-lt-metrics {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: baseline;\n        gap: 4px 10px;\n        font-size: 13px;\n      }\n      .uc-lt-metric strong {\n        font-size: 18px;\n        font-weight: 700;\n      }\n      .uc-lt-line {\n        font-size: 12px;\n        line-height: 1.4;\n        margin-top: 4px;\n        overflow-wrap: anywhere;\n      }\n      .uc-lt-line.strong {\n        font-size: 13px;\n        font-weight: 600;\n      }\n      .uc-lt-headline {\n        font-size: 17px;\n        font-weight: 700;\n      }\n      .uc-lt-alarm-headline {\n        font-size: 22px;\n        font-weight: 800;\n        line-height: 1.15;\n        letter-spacing: -0.3px;\n      }\n      .uc-lt-badge {\n        display: inline-block;\n        margin-left: 6px;\n        padding: 1px 6px;\n        border: 1px solid;\n        border-radius: var(--uc-r-10, 10px);\n        font-size: 10px;\n        text-transform: uppercase;\n        letter-spacing: 0.4px;\n        vertical-align: middle;\n      }\n\n      .uc-lt-progress {\n        height: 6px;\n        border-radius: var(--uc-r-4, 4px);\n        overflow: hidden;\n        margin-top: 8px;\n      }\n      .uc-lt-progress-fill {\n        height: 100%;\n        border-radius: var(--uc-r-4, 4px);\n        transition: width 0.4s ease;\n      }\n\n      .uc-lt-card-actions {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n        margin-top: 10px;\n      }\n      .uc-lt-action-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 6px 12px;\n        border-radius: 999px;\n        border: 1px solid;\n        background: transparent;\n        font-size: 12px;\n        font-weight: 700;\n        cursor: pointer;\n        font-family: inherit;\n      }\n      .uc-lt-action-btn ha-icon {\n        --mdc-icon-size: 16px;\n      }\n      .uc-lt-action-btn:hover {\n        filter: brightness(1.15);\n      }\n      .uc-lt-action-btn:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n\n      .uc-lt-handoff {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        margin-top: 10px;\n        padding: 10px 12px;\n        border: 1px solid;\n        border-radius: var(--uc-r-12, 12px);\n      }\n      .uc-lt-handoff ha-icon {\n        --mdc-icon-size: 22px;\n        flex-shrink: 0;\n      }\n      .uc-lt-handoff-title {\n        font-size: 13px;\n        font-weight: 700;\n      }\n      .uc-lt-handoff-sub {\n        font-size: 12px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      /* ── Timeline ─────────────────────────────────────────────────────── */\n\n      .uc-lt-timeline {\n        margin-top: 14px;\n      }\n      .uc-lt-section-title {\n        font-size: 11px;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.6px;\n        margin-bottom: 6px;\n      }\n      .uc-lt-lane-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        margin-bottom: 6px;\n      }\n      .uc-lt-lane-label {\n        flex: 0 0 auto;\n        width: 74px;\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 11px;\n        min-width: 0;\n      }\n      .uc-lt-lane-label ha-icon {\n        --mdc-icon-size: 14px;\n        flex-shrink: 0;\n      }\n      .uc-lt-lane-label span {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-lane {\n        position: relative;\n        flex: 1 1 auto;\n        min-width: 0;\n        height: 16px;\n        border-radius: var(--uc-r-5, 5px);\n        background: rgba(127, 127, 127, 0.16);\n        overflow: hidden;\n      }\n      .uc-lt-gridline {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        width: 1px;\n        background: rgba(127, 127, 127, 0.3);\n      }\n      .uc-lt-block {\n        position: absolute;\n        top: 2px;\n        bottom: 2px;\n        min-width: 3px;\n        border-radius: var(--uc-r-3, 3px);\n      }\n      .uc-lt-axis {\n        display: flex;\n        gap: 8px;\n      }\n      .uc-lt-axis-spacer {\n        flex: 0 0 auto;\n        width: 74px;\n      }\n      .uc-lt-axis-track {\n        position: relative;\n        flex: 1 1 auto;\n        min-width: 0;\n        height: 14px;\n      }\n      .uc-lt-axis-label {\n        position: absolute;\n        top: 0;\n        transform: translateX(-50%);\n        font-size: 9px;\n        white-space: nowrap;\n      }\n\n      /* ── Stats ────────────────────────────────────────────────────────── */\n\n      .uc-lt-stats {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n        margin-top: 12px;\n      }\n      .uc-lt-stat {\n        flex: 1 1 84px;\n        min-width: 0;\n        padding: 8px 10px;\n        border-radius: var(--uc-r-10, 10px);\n        text-align: center;\n      }\n      .uc-lt-stat-value {\n        font-size: 16px;\n        font-weight: 700;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-stat-label {\n        font-size: 10px;\n        text-transform: uppercase;\n        letter-spacing: 0.4px;\n        margin-top: 2px;\n      }\n      .uc-lt-stats-empty,\n      .uc-lt-footnote {\n        font-size: 11px;\n        margin-top: 8px;\n      }\n      .uc-lt-error {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 11px;\n        margin-top: 8px;\n      }\n      .uc-lt-error ha-icon {\n        --mdc-icon-size: 16px;\n      }\n\n      /* ── Editor ───────────────────────────────────────────────────────── */\n\n      .uc-lt-editor-empty {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        padding: 14px;\n        border: 1px dashed var(--divider-color);\n        border-radius: var(--uc-r-10, 10px);\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        margin-bottom: 12px;\n      }\n      .uc-lt-editor-empty ha-icon {\n        --mdc-icon-size: 22px;\n        color: var(--primary-color);\n      }\n\n      .uc-lt-row {\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        border-radius: var(--uc-r-10, 10px);\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        margin-bottom: 10px;\n        overflow: hidden;\n      }\n      .uc-lt-row.expanded {\n        border-color: var(--primary-color);\n      }\n      .uc-lt-row-head {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 10px 12px;\n        min-width: 0;\n      }\n      .uc-lt-row-icon {\n        --mdc-icon-size: 24px;\n        color: var(--primary-color);\n        flex-shrink: 0;\n      }\n      .uc-lt-row-text {\n        flex: 1;\n        min-width: 0;\n      }\n      .uc-lt-row-name {\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-row-kind {\n        margin-left: 6px;\n        padding: 1px 6px;\n        border-radius: var(--uc-r-8, 8px);\n        background: rgba(127, 127, 127, 0.18);\n        font-size: 10px;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.4px;\n        color: var(--secondary-text-color);\n      }\n      .uc-lt-row-sub {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-row-sub.empty {\n        font-style: italic;\n      }\n      .uc-lt-icon-btn {\n        flex-shrink: 0;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 30px;\n        height: 30px;\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        background: transparent;\n        color: var(--secondary-text-color);\n        cursor: pointer;\n      }\n      .uc-lt-icon-btn ha-icon {\n        --mdc-icon-size: 18px;\n      }\n      .uc-lt-icon-btn:hover:not(:disabled) {\n        background: rgba(127, 127, 127, 0.16);\n        color: var(--primary-color);\n      }\n      .uc-lt-icon-btn.danger:hover:not(:disabled) {\n        color: var(--error-color);\n      }\n      .uc-lt-icon-btn:disabled {\n        opacity: 0.3;\n        cursor: default;\n      }\n      .uc-lt-icon-btn:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 1px;\n      }\n      .uc-lt-row-body {\n        padding: 4px 12px 12px;\n        border-top: 1px solid var(--divider-color);\n      }\n\n      .uc-lt-helper {\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-10, 10px);\n        padding: 12px;\n        margin-bottom: 16px;\n        background: rgba(127, 127, 127, 0.06);\n      }\n      .uc-lt-helper-title {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 13px;\n        font-weight: 700;\n        color: var(--primary-text-color);\n      }\n      .uc-lt-helper-title ha-icon {\n        --mdc-icon-size: 18px;\n        color: var(--primary-color);\n      }\n      .uc-lt-helper-note {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        margin-top: 4px;\n        line-height: 1.4;\n      }\n      .uc-lt-helper-grid {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n        margin-top: 10px;\n      }\n      .uc-lt-helper-stat {\n        flex: 1 1 62px;\n        min-width: 0;\n        padding: 6px 8px;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        text-align: center;\n      }\n      .uc-lt-helper-stat-label {\n        font-size: 9px;\n        text-transform: uppercase;\n        letter-spacing: 0.4px;\n        color: var(--secondary-text-color);\n      }\n      .uc-lt-helper-stat-value {\n        font-size: 13px;\n        font-weight: 700;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-suggest-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        margin-top: 10px;\n        padding: 7px 14px;\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        font-size: 13px;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n      }\n      .uc-lt-suggest-btn ha-icon {\n        --mdc-icon-size: 18px;\n      }\n      .uc-lt-suggest-btn:hover {\n        filter: brightness(1.1);\n      }\n      .uc-lt-suggest-btn:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n\n      .uc-lt-add-row {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n        margin-top: 4px;\n      }\n      .uc-lt-add-btn {\n        flex: 1 1 140px;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        padding: 11px 14px;\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        font-size: 14px;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n      }\n      .uc-lt-add-btn ha-icon {\n        --mdc-icon-size: 20px;\n      }\n      .uc-lt-add-btn:hover {\n        filter: brightness(1.1);\n      }\n      .uc-lt-add-btn:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n\n      .uc-lt-note {\n        display: flex;\n        align-items: flex-start;\n        gap: 8px;\n        padding: 10px 12px;\n        border-radius: var(--uc-r-8, 8px);\n        background: rgba(127, 127, 127, 0.1);\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        line-height: 1.4;\n      }\n      .uc-lt-note ha-icon {\n        --mdc-icon-size: 18px;\n        flex-shrink: 0;\n        color: var(--primary-color);\n      }\n\n      @keyframes uc-lt-pulse {\n        0%, 100% { opacity: 1; transform: scale(1); }\n        50% { opacity: 0.55; transform: scale(0.92); }\n      }\n      @keyframes uc-lt-shake {\n        0%, 88%, 100% { transform: rotate(0deg); }\n        91% { transform: rotate(-9deg); }\n        94% { transform: rotate(9deg); }\n        97% { transform: rotate(-5deg); }\n      }\n      @keyframes uc-lt-alarm-breathe {\n        0%, 100% { filter: brightness(1); }\n        50% { filter: brightness(1.06); }\n      }\n\n      @media (prefers-reduced-motion: reduce) {\n        .uc-lt-card.alarm,\n        .uc-lt-card-icon.spin-pulse,\n        .uc-lt-card-icon.alert-pulse {\n          animation: none;\n        }\n      }\n\n      @media (max-width: 360px) {\n        .uc-lt-lane-label {\n          width: 52px;\n        }\n        .uc-lt-axis-spacer {\n          width: 52px;\n        }\n        .uc-lt-alarm-headline {\n          font-size: 19px;\n        }\n      }\n    `}}},1671(t,e,n){n.d(e,{CY:()=>l,EA:()=>d,Hv:()=>c,SM:()=>u,Z_:()=>h,f0:()=>s});const r=Object.freeze({data:new Map,loading:!1,fetchedAt:0,error:null});function i(t){var e,n,r,i;if(null==t||"object"!=typeof t)return null;const o=t;if(void 0!==o.s&&(void 0!==o.lu||void 0!==o.lc)){const t=Number(null!==(e=o.lu)&&void 0!==e?e:o.lc);return Number.isFinite(t)?{t:1e3*t,state:String(o.s),attributes:null!==(n=o.a)&&void 0!==n?n:null}:null}if(void 0!==o.state){const t=null!==(r=o.last_changed)&&void 0!==r?r:o.last_updated,e=t?new Date(String(t)).getTime():NaN;return Number.isFinite(e)?{t:e,state:String(o.state),attributes:null!==(i=o.attributes)&&void 0!==i?i:null}:null}return null}const o=new class{constructor(){this._cache=new Map}query(t,e,n){var i;if(!t||0===e.entityIds.length)return r;const o=null!==(i=e.ttlMs)&&void 0!==i?i:3e5,a=this._cache.get(e.key),s=Date.now();(!a||s-a.fetchedAt>o)&&!(null==a?void 0:a.inflight)&&this._startFetch(t,e,n);const l=this._cache.get(e.key);return l?{data:l.data,loading:l.loading,fetchedAt:l.fetchedAt,error:l.error}:r}async fetch(t,e){var n,r;return t&&0!==e.entityIds.length?(await this._startFetch(t,e),null!==(r=null===(n=this._cache.get(e.key))||void 0===n?void 0:n.data)&&void 0!==r?r:new Map):new Map}invalidate(t){this._cache.delete(t)}clear(){this._cache.clear()}_startFetch(t,e,n){const r=this._cache.get(e.key);if(null==r?void 0:r.inflight)return r.inflight;const i=null!=r?r:{data:new Map,fetchedAt:0,loading:!1,error:null,inflight:null};i.loading=!0,this._cache.set(e.key,i);const o=this._doFetch(t,e).then(t=>{i.data=t,i.fetchedAt=Date.now(),i.error=null}).catch(t=>{i.error=t instanceof Error?t.message:String(t),i.fetchedAt=Date.now()}).finally(()=>{if(i.loading=!1,i.inflight=null,n)try{n()}catch(t){}});return i.inflight=o,o}async _doFetch(t,e){const n=e.entityIds.filter(t=>!!t);if(0===n.length)return new Map;const r=new Date(e.startMs).toISOString(),o=new Date(e.endMs).toISOString(),a=!e.withAttributes;let s={};try{s=await t.callWS({type:"history/history_during_period",start_time:r,end_time:o,entity_ids:n,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!1,no_attributes:a})}catch(e){const i=await t.callApi("GET",`history/period/${r}`,{filter_entity_id:n.join(","),end_time:o});if(s={},Array.isArray(i))for(const t of i)if(Array.isArray(t)&&t.length>0){const e=t[0];(null==e?void 0:e.entity_id)&&(s[e.entity_id]=t)}}const l=new Map;for(const[t,e]of Object.entries(s)){if(!Array.isArray(e)||0===e.length)continue;const n=[];for(const t of e){const e=i(t);e&&n.push(e)}n.length>0&&(n.sort((t,e)=>t.t-e.t),l.set(t,n))}return l}},a=new Set(["unavailable","unknown","none","","null"]);function s(t,e){var n;if(!t||0===t.length)return[];const r=null==e?void 0:e.attribute,i=[];for(const e of t){const t=r?null===(n=e.attributes)||void 0===n?void 0:n[r]:e.state;if(null==t)continue;const o=String(t).trim().toLowerCase();if(a.has(o))continue;const s=Number(t);Number.isFinite(s)&&i.push({t:e.t,v:s})}return i}function l(t,e,n){if(0===t.length)return null;if(1===t.length)return t[0].v;const r=null!=e?e:t[0].t,i=null!=n?n:t[t.length-1].t;if(i<=r)return t[t.length-1].v;let o=0,a=0;for(let e=0;e<t.length;e++){const n=t[e],s=Math.max(n.t,r),l=Math.min(e+1<t.length?t[e+1].t:i,i)-s;l<=0||(o+=n.v*l,a+=l)}return a<=0?t[t.length-1].v:o/a}function d(t,e,n,r){if(0===t.length)return null;if(1===t.length)return t[0].v;const i=null!=n?n:t[0].t,o=null!=r?r:t[t.length-1].t,a=[];let s=0;for(let e=0;e<t.length;e++){const n=t[e],r=Math.max(n.t,i),l=Math.min(e+1<t.length?t[e+1].t:o,o)-r;l<=0||(a.push({v:n.v,ms:l}),s+=l)}if(0===a.length||s<=0)return t[t.length-1].v;a.sort((t,e)=>t.v-e.v);const l=s*Math.min(Math.max(e,0),1);let d=0;for(const t of a)if(d+=t.ms,d>=l)return t.v;return a[a.length-1].v}function c(t,e){var n,r;if(t.length<3)return null;const i=null!==(n=null==e?void 0:e.floor)&&void 0!==n?n:0,o=null!==(r=null==e?void 0:e.riseToleranceUnits)&&void 0!==r?r:1,a=[];let s=[t[0]];for(let e=1;e<t.length;e++){const n=t[e-1],r=t[e];r.v-n.v>o?(s.length>=2&&a.push(s),s=[r]):s.push(r)}if(s.length>=2&&a.push(s),0===a.length)return null;let l=0,d=0;for(const t of a){const e=t[0],n=t[t.length-1],r=e.v-n.v,i=n.t-e.t;i<=0||r<=0||(l+=r,d+=i)}const c=t[t.length-1].t-t[0].t,u=c>0?Math.min(d/c,1):0,h=(a[a.length-1],t.length>=2&&t[t.length-1].v-t[t.length-2].v>o);if(d<=0||l<=0)return{ratePerHour:0,msToEmpty:null,coverage:u,charging:h};const p=l/d*36e5,_=t[t.length-1].v-i;return{ratePerHour:p,msToEmpty:p>0&&_>0?_/p*36e5:null,coverage:u,charging:h}}function u(t,e){var n,r,i,o;if(t.length<2)return[];const a=e.startThreshold,s=null!==(n=e.stopThreshold)&&void 0!==n?n:.5*a,l=null!==(r=e.settleMs)&&void 0!==r?r:18e4,d=null!==(i=e.minDurationMs)&&void 0!==i?i:3e5,c=null!==(o=e.endMs)&&void 0!==o?o:t[t.length-1].t,u=[];let h=null,p=null,_=0,y=0,g=0,v=0,m=0;const f=t=>{if(null===h)return;const e=t-h;e>=d&&u.push({startMs:h,endMs:t,durationMs:e,peak:_,mean:g>0?y/g:_,areaHours:y/36e5}),h=null,p=null,_=0,y=0,g=0};for(let e=0;e<t.length;e++){const n=t[e],r=e+1<t.length?t[e+1].t:c,i=Math.max(r-n.t,0);null!==h?(_=Math.max(_,n.v),n.v<s?(null===p&&(p=n.t,v=y,m=g),y+=n.v*i,g+=i,r-p>=l&&(y=v,g=m,f(p))):(p=null,y+=n.v*i,g+=i)):n.v>=a&&(h=n.t,_=n.v,y=n.v*i,g=i,p=null)}return null!==h&&(null!==p?(y=v,g=m,f(p)):f(c)),u}function h(t,e,n){var r,i;if(!t||!e)return null;const o=null===(r=t.states)||void 0===r?void 0:r[e];if(!o)return null;const s=n?null===(i=o.attributes)||void 0===i?void 0:i[n]:o.state;if(null==s)return null;if(a.has(String(s).trim().toLowerCase()))return null;const l=Number(s);return Number.isFinite(l)?l:null}n.d(e,["ur",0,o])},8964(t,e,n){n.d(e,{M8:()=>i,SP:()=>o,YI:()=>d});const r=new Set(["on","open","opened","true","ajar","offen","geöffnet","geoeffnet","ouvert","ouverte","aperto","abierto","geopend"]);function i(t){if(null==t)return"";const e=String(t).trim().toLowerCase(),n=e.lastIndexOf(".");return n>=0&&n<e.length-1&&/^[a-z_]+(\.[a-z_]+)+$/.test(e)?e.slice(n+1):e}function o(t){return r.has(i(t))}function a(t){return t.entities}const s=/^(binary_)?sensor\..*bsh_common_status_doorstate(_\d+)?$/,l=/^sensor\..*bsh_common_status_operationstate(_\d+)?$/;function d(t,e){var n,r;if(!t||!e)return{};const i=a(t),o=function(t,e){var n;const r=a(t),i=null===(n=null==r?void 0:r[e])||void 0===n?void 0:n.device_id;return r&&i?Object.keys(r).filter(e=>{var n,o;return(null===(n=r[e])||void 0===n?void 0:n.device_id)===i&&!!(null===(o=t.states)||void 0===o?void 0:o[e])}):[]}(t,e);if(!i||0===o.length)return{};const d=t=>o.find(e=>{var n,r,o;return e.startsWith("sensor.")&&(null===(n=i[e])||void 0===n?void 0:n.translation_key)===t&&(!(null===(r=i[e])||void 0===r?void 0:r.platform)||"home_connect"===(null===(o=i[e])||void 0===o?void 0:o.platform))}),c=null!==(n=d("door"))&&void 0!==n?n:o.find(t=>s.test(t)),u=null!==(r=d("operation_state"))&&void 0!==r?r:o.find(t=>l.test(t)),h={};return c&&(h.door=c),u&&(h.operationState=u),h}},3488(t,e,n){n.d(e,{SB:()=>l,b5:()=>s,gf:()=>a});var r=n(2618),i=n(378),o=n(935);function a(t){var e,n,r,o;if(!t)return!1;try{const a=i.xd.checkIntegrationAuth(t);if("pro"===(null===(e=null==a?void 0:a.subscription)||void 0===e?void 0:e.tier)&&"active"===(null===(n=null==a?void 0:a.subscription)||void 0===n?void 0:n.status))return!0;if(i.xd.isAuthenticated()){const t=i.xd.getCurrentUser();if("pro"===(null===(r=null==t?void 0:t.subscription)||void 0===r?void 0:r.tier)&&"active"===(null===(o=null==t?void 0:t.subscription)||void 0===o?void 0:o.status))return!0}}catch(t){return!1}return!1}function s(t,e,n){const i=function(t,e){const n=t||function(){var t;try{return null===(t=document.querySelector("home-assistant"))||void 0===t?void 0:t.hass}catch(t){return}}();if(!(null==n?void 0:n.states))return null;const r=n.states["sensor.ultra_card_pro_cloud_authentication_status"];if(!r)return(0,o.kg)("editor.pro.status_not_installed",e,"Already have Pro? Install Ultra Card Connect and sign in to unlock it here.");const i=r.attributes||{};return"unavailable"===r.state||"unknown"===r.state?(0,o.kg)("editor.pro.status_unreachable",e,"Ultra Card Connect can't reach ultracard.io right now. If you have Pro, it unlocks again when the connection is back."):"connected"===r.state&&i.authenticated?"pro"===i.subscription_tier&&i.subscription_status&&"active"!==i.subscription_status?(0,o.kg)("editor.pro.status_inactive",e,"Your Pro subscription is {status}. Renew it on ultracard.io to unlock this.").replace("{status}",String(i.subscription_status)):null:i.needs_reauth?(0,o.kg)("editor.pro.status_reauth",e,"Ultra Card Connect needs you to sign in again (Settings → Devices & services → Ultra Card Connect)."):(0,o.kg)("editor.pro.status_signed_out",e,"Already have Pro? Sign in to Ultra Card Connect from the Ultra Card Hub in the sidebar.")}(n,t);return r.qy`
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
        ${(0,o.kg)("editor.pro.feature_locked",t,"Pro Feature")}
      </div>
      <div
        style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 340px; line-height: 1.5;"
      >
        ${e}
      </div>
      ${i?r.qy`<div
            role="status"
            style="font-size: 13px; color: var(--primary-text-color); margin-bottom: 16px; max-width: 340px; line-height: 1.5; padding: 8px 12px; border-radius: 8px; background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);"
          >
            ${i}
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
        ${(0,o.kg)("editor.pro.upgrade_button",t,"Upgrade to Pro")}
      </a>
    </div>
  `}function l(t,e){return r.qy`
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
        <div style="font-weight: 700; color: var(--primary-text-color);">${e}</div>
        <div style="font-size: 12px; color: var(--secondary-text-color);">
          ${(0,o.kg)("editor.pro.feature_locked",t,"Pro Feature")}
        </div>
      </div>
    </div>
  `}}};