export const __webpack_esm_ids__=[9311];export const __webpack_esm_modules__={5202(e,t,n){n.d(t,{UltraLaundryTrackerModule:()=>T});var r=n(2618),i=n(7475),a=n(6478),o=n(3488),l=n(1671);const s=["run","running","washing","drying","on","in_progress","program_running","active"],d={washer:{icon:"mdi:washing-machine",start_threshold_w:20,stop_threshold_w:5,settle_minutes:5,min_cycle_minutes:15,unload_grace_minutes:30},dryer:{icon:"mdi:tumble-dryer",start_threshold_w:50,stop_threshold_w:10,settle_minutes:5,min_cycle_minutes:15,unload_grace_minutes:60}},c=864e5,u="uc_laundry_notified_v1",h=7*c,p=new Set(["on","open","opened","true"]),_=new Set(["unavailable","unknown","none","","null"]);function y(e,t,n){return Math.min(Math.max(e,t),n)}function g(e,t){return"number"==typeof e&&Number.isFinite(e)?e:t}function v(e){const t=new Date(e),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");return`${t.getFullYear()}-${n}-${r}`}function m(e){return!!e&&p.has(String(e).trim().toLowerCase())}function f(e){if(!e)return null;const t=new Date(String(e)).getTime();return Number.isFinite(t)?t:null}function w(e,t){var n,r;if(!e||0===e.length)return null;let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;for(const t of e)t.v<i&&(i=t.v),t.v>a&&(a=t.v);const o=e[0].t;return{min:i,median:null!==(n=(0,l.EA)(e,.5,o,t))&&void 0!==n?n:i,max:a,floor:null!==(r=(0,l.EA)(e,.1,o,t))&&void 0!==r?r:i,samples:e.length}}const k=new class{constructor(){this._acks=new Map,this._notified=null,this._notifyInFlight=new Set,this._runCache=new Map}analyze(e,t,n){var r;const i=null!==(r=t.nowMs)&&void 0!==r?r:Date.now(),a=y(g(t.historyDays,7),1,30),o=i-a*c,s=(t.appliances||[]).filter(e=>!!e&&!!e.id),d={statuses:[],stats:{cycleCount:0,totalKwh:0,totalCost:0,avgDurationMs:null,busiestDay:null},loading:!1,fetchedAt:0,error:null,series:new Map,windowStartMs:o,windowEndMs:i};if(!e||0===s.length)return d;const u=[];for(const e of s)for(const t of[e.power_entity,e.state_entity,e.door_entity])t&&!u.includes(t)&&u.push(t);let h=new Map,p=!1,_=0,v=null;if(u.length>0){const r=l.ur.query(e,{key:`laundry:${t.moduleId}:${a}:${u.join(",")}`,entityIds:u,startMs:o,endMs:i,ttlMs:3e5,withAttributes:!1},n);h=r.data,p=r.loading,_=r.fetchedAt,v=r.error}const m=new Map,f=[];for(const n of s){const r=this._analyzeAppliance(e,n,h,_,i,t.energyRate,t.acknowledgeEnabled,m);f.push(r)}return{statuses:f,stats:this.computeStats(f),loading:p,fetchedAt:_,error:v,series:m,windowStartMs:o,windowEndMs:i}}_analyzeAppliance(e,t,n,r,i,a,o,s){var c,u,h;const p=function(e){const t=d["dryer"===e.kind?"dryer":"washer"],n=Math.max(1,g(e.start_threshold_w,t.start_threshold_w));return{startThreshold:n,stopThreshold:y(g(e.stop_threshold_w,t.stop_threshold_w),0,Math.max(0,n-1)),settleMs:6e4*Math.max(0,g(e.settle_minutes,t.settle_minutes)),minDurationMs:6e4*Math.max(0,g(e.min_cycle_minutes,t.min_cycle_minutes)),graceMs:6e4*Math.max(0,g(e.unload_grace_minutes,t.unload_grace_minutes))}}(t),_=!!t.power_entity&&!!(null===(c=e.states)||void 0===c?void 0:c[t.power_entity]),v=!!t.state_entity&&!!(null===(u=e.states)||void 0===u?void 0:u[t.state_entity]),m=this._readDoor(e,t,n);let f;f=_?this._analyzePower(e,t,n,r,i,a,p,s):v?this._analyzeState(e,t,n,i,p):{running:!1,runStart:null,cycles:[],currentW:t.power_entity?(0,l.Z_)(e,t.power_entity):null,historyPoints:0,source:"none"};const{running:w,runStart:k,cycles:x,currentW:b,historyPoints:$,source:M}=f,S=x.length>0?x[x.length-1]:null,D=!w&&S?Math.max(0,i-S.endMs):null,A=!!S&&o&&this.isAcknowledged(t.id,S.endMs),F=!!S&&m.openedAfter(S.endMs);let z;return z="none"===M?"unknown":w?"running":S&&null!==D?F||A?"idle":D<=p.graceMs?"finished":D>864e5?"idle":"forgotten":"idle",{appliance:t,phase:z,currentW:b,sinceMs:w?k:null!==(h=null==S?void 0:S.endMs)&&void 0!==h?h:null,sittingMs:D,doorOpen:m.currentlyOpen,lastCycle:S,cycles:x,acknowledged:A,source:M,historyPoints:$,retrievedByDoor:F}}_analyzePower(e,t,n,r,i,a,o,s){const d=t.power_entity,c=(0,l.f0)(n.get(d));s.set(t.id,c);const u=(0,l.Z_)(e,d),h=function(e,t,n){if(null===t)return e;const r=e.length>0?e[e.length-1]:void 0;return r&&r.t>=n?e:[...e,{t:n,v:t}]}(c,u,i),p=this._detectRunsCached(`${t.id}:${d}`,h,r,i,o),_=function(e,t,n,r,i){var a,o;let l=null,s=null;for(let d=0;d<e.length;d++){const c=e[d];null!==l?c.v<n?(null===s&&(s=c.t),(null!==(o=null===(a=e[d+1])||void 0===a?void 0:a.t)&&void 0!==o?o:i)-s>=r&&(l=null,s=null)):s=null:c.v>=t&&(l=c.t,s=null)}return l}(h,o.startThreshold,o.stopThreshold,o.settleMs,i),y=null!==_,g=p.filter(e=>null===_||e.startMs<_).map(e=>function(e,t){const n=Math.max(0,e.areaHours/1e3);return{startMs:e.startMs,endMs:e.endMs,durationMs:e.durationMs,peakW:e.peak,meanW:e.mean,energyKwh:n,costEstimate:n*(Number.isFinite(t)?t:0)}}(e,a));return{running:y,runStart:_,cycles:g,currentW:u,historyPoints:c.length,source:"power"}}_detectRunsCached(e,t,n,r,i){const a=t.length>0?t[t.length-1]:void 0,o=[n,t.length,a?`${a.t}:${a.v}`:"-",i.startThreshold,i.stopThreshold,i.settleMs,i.minDurationMs,Math.floor(r/6e4)].join("|"),s=this._runCache.get(e);if(s&&s.sig===o)return s.runs;const d=(0,l.SM)(t,{startThreshold:i.startThreshold,stopThreshold:i.stopThreshold,settleMs:i.settleMs,minDurationMs:i.minDurationMs,endMs:r});return this._runCache.set(e,{sig:o,runs:d}),d}_analyzeState(e,t,n,r,i){var a,o,d,c,u,h,p,y;const g=t.state_entity,v=null!==(a=n.get(g))&&void 0!==a?a:[],m=new Set((t.running_states&&t.running_states.length>0?t.running_states:s).map(e=>String(e).trim().toLowerCase())),w=e=>{const t=String(e).trim().toLowerCase();return!_.has(t)&&m.has(t)},k=null===(d=null===(o=e.states)||void 0===o?void 0:o[g])||void 0===d?void 0:d.state,x=w(String(null!=k?k:"")),b=null!==(h=f(null===(u=null===(c=e.states)||void 0===c?void 0:c[g])||void 0===u?void 0:u.last_changed))&&void 0!==h?h:r,$=[];let M=null,S=null;for(let e=0;e<v.length;e++){const t=v[e],n=null!==(y=null===(p=v[e+1])||void 0===p?void 0:p.t)&&void 0!==y?y:r;w(t.state)?(null===M&&(M=t.t),S=null):null!==M&&(null===S&&(S=t.t),n-S>=i.settleMs&&($.push({startMs:M,endMs:S}),M=null,S=null))}if(null!==M&&!x){const e=null!=S?S:b;r-e>=i.settleMs&&($.push({startMs:M,endMs:e}),M=null)}return null===M&&x&&(M=b),{running:x||null!==M,runStart:M,cycles:$.filter(e=>e.endMs-e.startMs>=i.minDurationMs).map(e=>({startMs:e.startMs,endMs:e.endMs,durationMs:e.endMs-e.startMs,peakW:0,meanW:0,energyKwh:0,costEstimate:0})),currentW:t.power_entity?(0,l.Z_)(e,t.power_entity):null,historyPoints:v.length,source:"state"}}_readDoor(e,t,n){var r,i;const a=t.door_entity;if(!a)return{currentlyOpen:null,openedAfter:()=>!1};const o=null===(r=e.states)||void 0===r?void 0:r[a],l=o?m(o.state):null,s=f(null==o?void 0:o.last_changed),d=null!==(i=n.get(a))&&void 0!==i?i:[];return{currentlyOpen:l,openedAfter:e=>!!l||!1===l&&null!==s&&s>e||d.some(t=>t.t>e&&m(t.state))}}computeStats(e){var t;let n=0,r=0,i=0,a=0;const o=new Map;for(const l of e)for(const e of l.cycles){n+=1,r+=e.energyKwh,i+=e.costEstimate,a+=e.durationMs;const l=v(e.startMs);o.set(l,(null!==(t=o.get(l))&&void 0!==t?t:0)+1)}let l=null,s=0;for(const[e,t]of o)t>s&&(s=t,l=e);return{cycleCount:n,totalKwh:r,totalCost:i,avgDurationMs:n>0?a/n:null,busiestDay:l}}acknowledge(e,t){e&&Number.isFinite(t)&&this._acks.set(e,t)}isAcknowledged(e,t){const n=this._acks.get(e);return void 0!==n&&n===t}clearAcknowledgement(e){this._acks.delete(e)}maybeNotify(e,t){if(!e||!t.service)return!1;if(!t.applianceId||!Number.isFinite(t.cycleEndMs))return!1;const n=this._parseNotifyService(t.service);if(!n)return!1;const r=`${t.moduleId}|${t.applianceId}|${Math.round(t.cycleEndMs)}`,i=this._ensureNotified();return!i.has(r)&&!this._notifyInFlight.has(r)&&(this._notifyInFlight.add(r),i.add(r),this._persistNotified(),Promise.resolve(e.callService(n.domain,n.service,{title:t.title,message:t.message})).catch(()=>{}).then(()=>{this._notifyInFlight.delete(r)}),!0)}hasNotified(e,t,n){return this._ensureNotified().has(`${e}|${t}|${Math.round(n)}`)}_parseNotifyService(e){const t=String(e||"").trim();if(!t)return null;const n=t.split(".");return 1===n.length?n[0]?{domain:"notify",service:n[0]}:null:2===n.length&&n[0]&&n[1]?{domain:n[0],service:n[1]}:null}_ensureNotified(){var e;if(this._notified)return this._notified;const t=new Set;try{const n=null===(e=null===window||void 0===window?void 0:window.localStorage)||void 0===e?void 0:e.getItem(u);if(n){const e=JSON.parse(n);if(Array.isArray(e)){const n=Date.now()-h;for(const r of e){if("string"!=typeof r)continue;const e=Number(r.split("|")[2]);Number.isFinite(e)&&e<n||t.add(r)}}}}catch(e){}return this._notified=t,t}_persistNotified(){var e;if(this._notified)try{const t=Date.now()-h,n=[];for(const e of this._notified){const r=Number(e.split("|")[2]);Number.isFinite(r)&&r<t||n.push(e)}null===(e=null===window||void 0===window?void 0:window.localStorage)||void 0===e||e.setItem(u,JSON.stringify(n))}catch(e){}}reset(){this._acks.clear(),this._notified=new Set,this._notifyInFlight.clear(),this._runCache.clear()}},x=6e4,b=36e5,$=864e5,M="var(--primary-color)",S="var(--success-color, #4caf50)",D="var(--secondary-text-color)",A="var(--error-color)",F="var(--primary-text-color)",z="var(--secondary-text-color)",C="var(--card-background-color)";class T extends i.m{constructor(){super(...arguments),this.metadata={type:"laundry_tracker",title:"Laundry Tracker",description:"Detects wash and dry cycles from power sensors and nags about forgotten loads",author:"WJD Designs",version:"1.0.0",icon:"mdi:washing-machine",category:"data",tags:["pro","premium","laundry","washer","dryer","cycle","power","appliance"]},this._editor=new Map}createDefault(e,t){return{id:e||this.generateId("laundry_tracker"),type:"laundry_tracker",appliances:[],history_days:7,layout:"stack",title:"",show_title:!0,show_status_cards:!0,show_timeline:!0,show_history_stats:!0,show_energy:!0,show_idle_alert:!0,show_handoff_hint:!0,acknowledge_enabled:!0,energy_rate:.15,currency_symbol:"$",notify_service:"",running_color:"",done_color:"",idle_color:"",alert_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=[],n=e;if(e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),n.appliances&&0!==n.appliances.length)for(const e of n.appliances)e.power_entity||e.state_entity||t.push(`${e.name||e.kind}: choose a power or state entity`);else t.push("Add at least one washer or dryer");return{valid:0===t.length,errors:t}}getRuntimeEntityIds(e){const t=e,n=[];for(const e of t.appliances||[])for(const t of[e.power_entity,e.state_entity,e.door_entity])t&&n.push(t);return n}_ensureEditorState(e){let t=this._editor.get(e);return t||(t={expanded:new Set,suggested:new Set},this._editor.set(e,t)),t}renderGeneralTab(e,t,n,i){var l,s,d;const c=e,u=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";if(!(0,o.gf)(t))return(0,o.b5)(u,(0,a.kg)("editor.laundry_tracker.pro_description",u,"Turn a $15 smart plug into a laundry butler: automatic cycle detection, forgotten-load alerts, and running energy costs."));const h=this._ensureEditorState(c.id),p=k.analyze(t,{moduleId:c.id,appliances:c.appliances||[],historyDays:null!==(s=c.history_days)&&void 0!==s?s:7,energyRate:null!==(d=c.energy_rate)&&void 0!==d?d:.15,acknowledgeEnabled:!1!==c.acknowledge_enabled},()=>this.triggerPreviewUpdate());return r.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        ${this._renderAppliancesSection(c,t,i,u,h,p)}
        ${this._renderDisplaySection(c,t,i,u)}
        ${this._renderHistorySection(c,t,i,u)}
        ${this._renderNotifySection(c,t,i,u)}
        ${this._renderColorsSection(c,t,i,u)}
      </div>
    `}_renderAppliancesSection(e,t,n,i,o,l){const s=e.appliances||[];return r.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,a.kg)("editor.laundry_tracker.appliances_section",i,"Appliances")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${(0,a.kg)("editor.laundry_tracker.appliances_section_desc",i,"Add each machine and point it at a power sensor. A smart plug is enough — no smart appliance required.")}
        </div>

        ${0===s.length?r.qy`<div class="uc-lt-editor-empty">
              <ha-icon icon="mdi:washing-machine"></ha-icon>
              <span>
                ${(0,a.kg)("editor.laundry_tracker.no_appliances_hint",i,"No machines yet. Add a washer or a dryer to get started.")}
              </span>
            </div>`:r.s6}
        ${s.map((r,a)=>this._renderApplianceRow(e,r,a,t,n,i,o,l))}

        <div class="uc-lt-add-row">
          <button
            type="button"
            class="uc-lt-add-btn"
            @click=${()=>this._addAppliance(e,n,"washer",i,o)}
          >
            <ha-icon icon="mdi:washing-machine"></ha-icon>
            ${(0,a.kg)("editor.laundry_tracker.add_washer",i,"Add washer")}
          </button>
          <button
            type="button"
            class="uc-lt-add-btn"
            @click=${()=>this._addAppliance(e,n,"dryer",i,o)}
          >
            <ha-icon icon="mdi:tumble-dryer"></ha-icon>
            ${(0,a.kg)("editor.laundry_tracker.add_dryer",i,"Add dryer")}
          </button>
        </div>
      </div>
    `}_renderApplianceRow(e,t,n,i,o,l,s,c){const u=e.appliances||[],h=s.expanded.has(t.id),p="dryer"===t.kind?"dryer":"washer",_="dryer"===p?(0,a.kg)("editor.laundry_tracker.kind_dryer",l,"Dryer"):(0,a.kg)("editor.laundry_tracker.kind_washer",l,"Washer"),y=t.power_entity||t.state_entity||(0,a.kg)("editor.laundry_tracker.row_no_entity",l,"No sensor selected");return r.qy`
      <div class="uc-lt-row ${h?"expanded":""}" data-uc-role="pane">
        <div class="uc-lt-row-head">
          <ha-icon
            class="uc-lt-row-icon"
            icon=${t.icon||d[p].icon}
          ></ha-icon>
          <div class="uc-lt-row-text">
            <div class="uc-lt-row-name">
              ${t.name||_}
              <span class="uc-lt-row-kind">${_}</span>
            </div>
            <div
              class="uc-lt-row-sub ${t.power_entity||t.state_entity?"":"empty"}"
            >
              ${y}
            </div>
          </div>
          <button
            type="button"
            class="uc-lt-icon-btn"
            ?disabled=${0===n}
            title=${(0,a.kg)("editor.laundry_tracker.move_up",l,"Move up")}
            aria-label=${(0,a.kg)("editor.laundry_tracker.move_up",l,"Move up")}
            @click=${()=>this._moveAppliance(e,o,n,-1)}
          >
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button
            type="button"
            class="uc-lt-icon-btn"
            ?disabled=${n===u.length-1}
            title=${(0,a.kg)("editor.laundry_tracker.move_down",l,"Move down")}
            aria-label=${(0,a.kg)("editor.laundry_tracker.move_down",l,"Move down")}
            @click=${()=>this._moveAppliance(e,o,n,1)}
          >
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
          <button
            type="button"
            class="uc-lt-icon-btn"
            title=${(0,a.kg)("editor.laundry_tracker.edit_appliance",l,"Edit machine")}
            aria-label=${(0,a.kg)("editor.laundry_tracker.edit_appliance",l,"Edit machine")}
            @click=${()=>{s.expanded.has(t.id)?s.expanded.delete(t.id):s.expanded.add(t.id),this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon=${h?"mdi:chevron-up-circle-outline":"mdi:pencil"}></ha-icon>
          </button>
          <button
            type="button"
            class="uc-lt-icon-btn danger"
            title=${(0,a.kg)("editor.laundry_tracker.delete_appliance",l,"Remove machine")}
            aria-label=${(0,a.kg)("editor.laundry_tracker.delete_appliance",l,"Remove machine")}
            @click=${()=>this._removeAppliance(e,o,n,s)}
          >
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>

        ${h?r.qy`
              <div class="uc-lt-row-body">
                ${this.renderFieldSection((0,a.kg)("editor.laundry_tracker.appliance_name",l,"Name"),(0,a.kg)("editor.laundry_tracker.appliance_name_desc",l,"Shown on the status card."),i,{name:t.name||""},[this.textField("name")],n=>{var r,i;return this._patchAppliance(e,o,t.id,{name:null!==(i=null===(r=n.detail.value)||void 0===r?void 0:r.name)&&void 0!==i?i:""})})}
                ${this.renderSegmentedField((0,a.kg)("editor.laundry_tracker.appliance_kind",l,"Machine type"),(0,a.kg)("editor.laundry_tracker.appliance_kind_desc",l,"Sets the default icon and detection thresholds. Dryers idle higher than washers."),p,[{value:"washer",label:(0,a.kg)("editor.laundry_tracker.kind_washer",l,"Washer"),icon:"mdi:washing-machine"},{value:"dryer",label:(0,a.kg)("editor.laundry_tracker.kind_dryer",l,"Dryer"),icon:"mdi:tumble-dryer"}],n=>this._changeKind(e,o,t,n,l),2)}
                ${this.renderIconField((0,a.kg)("editor.laundry_tracker.appliance_icon",l,"Icon"),(0,a.kg)("editor.laundry_tracker.appliance_icon_desc",l,"Leave blank to use the default for this machine type."),i,t.icon||"",n=>this._patchAppliance(e,o,t.id,{icon:n}))}
                ${this.renderFieldSection((0,a.kg)("editor.laundry_tracker.power_entity",l,"Power sensor"),(0,a.kg)("editor.laundry_tracker.power_entity_desc",l,"Watts reported by a smart plug. This is what cycle detection reads."),i,{power_entity:t.power_entity||""},[{name:"power_entity",selector:{entity:{domain:"sensor"}}}],n=>{var r,i;return this._patchAppliance(e,o,t.id,{power_entity:null!==(i=null===(r=n.detail.value)||void 0===r?void 0:r.power_entity)&&void 0!==i?i:""})})}
                ${this._renderThresholdHelper(e,t,o,l,s,c)}
                ${this.renderFieldSection((0,a.kg)("editor.laundry_tracker.door_entity",l,"Door / lid sensor"),(0,a.kg)("editor.laundry_tracker.door_entity_desc",l,"Optional but the most reliable unload signal there is: opening the door after a cycle clears the alert."),i,{door_entity:t.door_entity||""},[{name:"door_entity",selector:{entity:{domain:"binary_sensor"}}}],n=>{var r,i;return this._patchAppliance(e,o,t.id,{door_entity:null!==(i=null===(r=n.detail.value)||void 0===r?void 0:r.door_entity)&&void 0!==i?i:""})})}
                ${this.renderConditionalFieldsGroup((0,a.kg)("editor.laundry_tracker.advanced_detection",l,"Advanced detection"),this._renderAdvancedDetection(e,t,i,o,l))}
              </div>
            `:r.s6}
      </div>
    `}_renderAdvancedDetection(e,t,n,i,o){var l,c,u,h,p;const _="dryer"===t.kind?"dryer":"washer",y=d[_];return r.qy`
      ${this.renderFieldSection((0,a.kg)("editor.laundry_tracker.state_entity",o,"Machine state entity"),(0,a.kg)("editor.laundry_tracker.state_entity_desc",o,"Fallback for machines with no power sensor: an entity reporting run/idle from a smart-appliance integration."),n,{state_entity:t.state_entity||""},[{name:"state_entity",selector:{entity:{}}}],n=>{var r,a;return this._patchAppliance(e,i,t.id,{state_entity:null!==(a=null===(r=n.detail.value)||void 0===r?void 0:r.state_entity)&&void 0!==a?a:""})})}
      ${this.renderChipListField((0,a.kg)("editor.laundry_tracker.running_states",o,"Running states"),(0,a.kg)("editor.laundry_tracker.running_states_desc",o,'States of the machine state entity that mean "running". Leave empty for a broad default set.'),n,t.running_states||[],n=>this._patchAppliance(e,i,t.id,{running_states:n}),{mode:"free-text",placeholder:s.join(", ")})}
      ${this.renderSliderField((0,a.kg)("editor.laundry_tracker.start_threshold",o,"Start threshold"),(0,a.kg)("editor.laundry_tracker.start_threshold_desc",o,"Watts above which a cycle counts as started."),null!==(l=t.start_threshold_w)&&void 0!==l?l:y.start_threshold_w,y.start_threshold_w,1,500,1,n=>this._patchAppliance(e,i,t.id,{start_threshold_w:n})," W")}
      ${this.renderSliderField((0,a.kg)("editor.laundry_tracker.stop_threshold",o,"Stop threshold"),(0,a.kg)("editor.laundry_tracker.stop_threshold_desc",o,"Watts below which the machine looks finished. Keep it under the start threshold."),null!==(c=t.stop_threshold_w)&&void 0!==c?c:y.stop_threshold_w,y.stop_threshold_w,0,200,1,n=>this._patchAppliance(e,i,t.id,{stop_threshold_w:n})," W")}
      ${this.renderSliderField((0,a.kg)("editor.laundry_tracker.settle_minutes",o,"Settle time"),(0,a.kg)("editor.laundry_tracker.settle_minutes_desc",o,"How long the machine must stay quiet before the cycle closes. Stops a soak pause from ending the wash early."),null!==(u=t.settle_minutes)&&void 0!==u?u:y.settle_minutes,y.settle_minutes,1,30,1,n=>this._patchAppliance(e,i,t.id,{settle_minutes:n})," min")}
      ${this.renderSliderField((0,a.kg)("editor.laundry_tracker.min_cycle_minutes",o,"Minimum cycle length"),(0,a.kg)("editor.laundry_tracker.min_cycle_minutes_desc",o,"Shorter runs are treated as noise rather than a real load."),null!==(h=t.min_cycle_minutes)&&void 0!==h?h:y.min_cycle_minutes,y.min_cycle_minutes,1,120,1,n=>this._patchAppliance(e,i,t.id,{min_cycle_minutes:n})," min")}
      ${this.renderSliderField((0,a.kg)("editor.laundry_tracker.unload_grace",o,"Unload grace period"),(0,a.kg)("editor.laundry_tracker.unload_grace_desc",o,"How long after a cycle ends before the load counts as forgotten."),null!==(p=t.unload_grace_minutes)&&void 0!==p?p:y.unload_grace_minutes,y.unload_grace_minutes,5,360,5,n=>this._patchAppliance(e,i,t.id,{unload_grace_minutes:n})," min")}
    `}_renderThresholdHelper(e,t,n,i,o,l){if(!t.power_entity)return r.s6;const s=l.series.get(t.id)||[],d=w(s,l.windowEndMs);if(!d||d.samples<3)return r.qy`
        <div class="uc-lt-helper">
          <div class="uc-lt-helper-title">
            <ha-icon icon="mdi:tune-variant"></ha-icon>
            ${(0,a.kg)("editor.laundry_tracker.threshold_helper_title",i,"Threshold helper")}
          </div>
          <div class="uc-lt-helper-note">
            ${l.loading?(0,a.kg)("editor.laundry_tracker.threshold_loading",i,"Reading recent history for this sensor…"):(0,a.kg)("editor.laundry_tracker.threshold_no_data",i,"No recorder history for this sensor yet. Run a load and come back — the defaults will work in the meantime.")}
          </div>
        </div>
      `;const c=function(e,t){const n=w(e,t);if(!n||n.samples<3)return null;const{floor:r,max:i}=n,a=Math.max(0,i-r),o=r+Math.max(5,.02*a),l=y(o>=20?5*Math.round(o/5):Math.ceil(o),3,2e3),s=Math.max(r+1,.35*l);return{startW:l,stopW:y(Math.round(s),1,Math.max(1,l-1)),distribution:n}}(s,l.windowEndMs),u=o.suggested.has(t.id);return r.qy`
      <div class="uc-lt-helper">
        <div class="uc-lt-helper-title">
          <ha-icon icon="mdi:tune-variant"></ha-icon>
          ${(0,a.kg)("editor.laundry_tracker.threshold_helper_title",i,"Threshold helper")}
        </div>
        <div class="uc-lt-helper-note">
          ${(0,a.kg)("editor.laundry_tracker.threshold_helper_desc",i,"What this sensor actually reported over the history window.")}
        </div>
        <div class="uc-lt-helper-grid">
          ${this._renderHelperStat((0,a.kg)("editor.laundry_tracker.threshold_min",i,"Min"),this._formatWatts(d.min))}
          ${this._renderHelperStat((0,a.kg)("editor.laundry_tracker.threshold_floor",i,"Standby"),this._formatWatts(d.floor))}
          ${this._renderHelperStat((0,a.kg)("editor.laundry_tracker.threshold_median",i,"Median"),this._formatWatts(d.median))}
          ${this._renderHelperStat((0,a.kg)("editor.laundry_tracker.threshold_max",i,"Max"),this._formatWatts(d.max))}
        </div>
        ${c?r.qy`
              <button
                type="button"
                class="uc-lt-suggest-btn"
                @click=${()=>{this._patchAppliance(e,n,t.id,{start_threshold_w:c.startW,stop_threshold_w:c.stopW}),o.suggested.add(t.id),this.triggerPreviewUpdate(!0)}}
              >
                <ha-icon icon="mdi:auto-fix"></ha-icon>
                ${(0,a.kg)("editor.laundry_tracker.suggest_thresholds",i,"Suggest thresholds")}
              </button>
              <div class="uc-lt-helper-note">
                ${u?(0,a.kg)("editor.laundry_tracker.suggested_applied",i,"Applied. Fine-tune them under Advanced detection if a cycle is missed."):this._formatTemplate((0,a.kg)("editor.laundry_tracker.suggest_preview",i,"Suggestion: start {start} W, stop {stop} W."),{start:String(c.startW),stop:String(c.stopW)})}
              </div>
            `:r.s6}
      </div>
    `}_renderHelperStat(e,t){return r.qy`
      <div class="uc-lt-helper-stat" data-uc-role="pane">
        <div class="uc-lt-helper-stat-label">${e}</div>
        <div class="uc-lt-helper-stat-value">${t}</div>
      </div>
    `}_renderDisplaySection(e,t,n,i){return r.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,a.kg)("editor.laundry_tracker.display_section",i,"Display")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${(0,a.kg)("editor.laundry_tracker.display_section_desc",i,"Choose which parts of the card are shown.")}
        </div>

        ${this.renderSegmentedField((0,a.kg)("editor.laundry_tracker.layout",i,"Layout"),(0,a.kg)("editor.laundry_tracker.layout_desc",i,"Stack the machines vertically, or sit them side by side."),e.layout||"stack",[{value:"stack",label:(0,a.kg)("editor.laundry_tracker.layout_stack",i,"Stack"),icon:"mdi:view-sequential"},{value:"row",label:(0,a.kg)("editor.laundry_tracker.layout_row",i,"Row"),icon:"mdi:view-column"}],e=>{n({layout:"row"===e?"row":"stack"}),this.triggerPreviewUpdate()},2)}
        ${this.renderSettingsSection("","",[{title:(0,a.kg)("editor.laundry_tracker.show_status_cards",i,"Show status cards"),description:(0,a.kg)("editor.laundry_tracker.show_status_cards_desc",i,"One card per machine with its current phase."),hass:t,data:{show_status_cards:!1!==e.show_status_cards},schema:[this.booleanField("show_status_cards")],onChange:e=>{var t;n({show_status_cards:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_status_cards)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.laundry_tracker.show_idle_alert",i,"Show forgotten-load alert"),description:(0,a.kg)("editor.laundry_tracker.show_idle_alert_desc",i,"The loud banner when a finished load is still sitting in the machine."),hass:t,data:{show_idle_alert:!1!==e.show_idle_alert},schema:[this.booleanField("show_idle_alert")],onChange:e=>{var t;n({show_idle_alert:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_idle_alert)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.laundry_tracker.show_handoff_hint",i,"Show washer → dryer hint"),description:(0,a.kg)("editor.laundry_tracker.show_handoff_hint_desc",i,"Suggests moving the load when a wash finishes and a dryer is free."),hass:t,data:{show_handoff_hint:!1!==e.show_handoff_hint},schema:[this.booleanField("show_handoff_hint")],onChange:e=>{var t;n({show_handoff_hint:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_handoff_hint)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.laundry_tracker.acknowledge_enabled",i,'Allow "Unloaded"'),description:(0,a.kg)("editor.laundry_tracker.acknowledge_enabled_desc",i,"Adds a button to clear an alert by hand. Resets when the browser reloads."),hass:t,data:{acknowledge_enabled:!1!==e.acknowledge_enabled},schema:[this.booleanField("acknowledge_enabled")],onChange:e=>{var t;n({acknowledge_enabled:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.acknowledge_enabled)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.laundry_tracker.show_timeline",i,"Show timeline"),description:(0,a.kg)("editor.laundry_tracker.show_timeline_desc",i,"A strip of the history window with one lane per machine."),hass:t,data:{show_timeline:!1!==e.show_timeline},schema:[this.booleanField("show_timeline")],onChange:e=>{var t;n({show_timeline:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_timeline)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.laundry_tracker.show_history_stats",i,"Show history stats"),description:(0,a.kg)("editor.laundry_tracker.show_history_stats_desc",i,"Cycle count, energy, cost and average duration for the window."),hass:t,data:{show_history_stats:!1!==e.show_history_stats},schema:[this.booleanField("show_history_stats")],onChange:e=>{var t;n({show_history_stats:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_history_stats)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.laundry_tracker.show_energy",i,"Show energy and cost"),description:(0,a.kg)("editor.laundry_tracker.show_energy_desc",i,"Turn off to hide kWh and money figures everywhere on the card."),hass:t,data:{show_energy:!1!==e.show_energy},schema:[this.booleanField("show_energy")],onChange:e=>{var t;n({show_energy:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_energy)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.laundry_tracker.show_title",i,"Show title"),description:(0,a.kg)("editor.laundry_tracker.show_title_desc",i,"Display a heading above the machines."),hass:t,data:{show_title:!1!==e.show_title},schema:[this.booleanField("show_title")],onChange:e=>{var t;n({show_title:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_title)}),this.triggerPreviewUpdate()}}])}
        ${this.renderFieldSection((0,a.kg)("editor.laundry_tracker.title",i,"Title"),(0,a.kg)("editor.laundry_tracker.title_desc",i,'Leave blank to use "Laundry".'),t,{title:e.title||""},[this.textField("title")],e=>{var t,r;n({title:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.title)&&void 0!==r?r:""}),this.triggerPreviewUpdate()})}
      </div>
    `}_renderHistorySection(e,t,n,i){var o,l,s;return r.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,a.kg)("editor.laundry_tracker.history_section",i,"History & cost")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${(0,a.kg)("editor.laundry_tracker.history_section_desc",i,"How far back to read the recorder, and what a kilowatt-hour costs you.")}
        </div>

        ${this.renderSliderField((0,a.kg)("editor.laundry_tracker.history_days",i,"History window"),(0,a.kg)("editor.laundry_tracker.history_days_desc",i,"Longer windows give better averages but ask more of the recorder."),null!==(o=e.history_days)&&void 0!==o?o:7,7,1,30,1,e=>{n({history_days:e}),this.triggerPreviewUpdate()}," d")}
        ${this.renderFieldSection((0,a.kg)("editor.laundry_tracker.energy_rate",i,"Energy rate"),(0,a.kg)("editor.laundry_tracker.energy_rate_desc",i,"Cost per kWh used for the cycle cost estimate."),t,{energy_rate:null!==(l=e.energy_rate)&&void 0!==l?l:.15},[this.numberField("energy_rate",0,10,.01)],e=>{var t;const r=Number(null===(t=e.detail.value)||void 0===t?void 0:t.energy_rate);n({energy_rate:Number.isFinite(r)?r:.15}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,a.kg)("editor.laundry_tracker.currency_symbol",i,"Currency symbol"),(0,a.kg)("editor.laundry_tracker.currency_symbol_desc",i,"Prefixed to every cost figure."),t,{currency_symbol:null!==(s=e.currency_symbol)&&void 0!==s?s:"$"},[this.textField("currency_symbol")],e=>{var t,r;n({currency_symbol:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.currency_symbol)&&void 0!==r?r:"$"}),this.triggerPreviewUpdate()})}
      </div>
    `}_renderNotifySection(e,t,n,i){return r.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,a.kg)("editor.laundry_tracker.notify_section",i,"Notifications")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${(0,a.kg)("editor.laundry_tracker.notify_section_desc",i,"Optional push when a load is left sitting past its grace period.")}
        </div>

        ${this.renderFieldSection((0,a.kg)("editor.laundry_tracker.notify_service",i,"Notify service"),(0,a.kg)("editor.laundry_tracker.notify_service_desc",i,"For example notify.mobile_app_pixel. Leave blank to turn notifications off."),t,{notify_service:e.notify_service||""},[this.textField("notify_service")],e=>{var t,r;n({notify_service:(null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.notify_service)&&void 0!==r?r:"").trim()}),this.triggerPreviewUpdate()})}

        <div class="uc-lt-note">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <span>
            ${(0,a.kg)("editor.laundry_tracker.notify_once_note",i,"Fires at most once per load. A second nag only happens after the next cycle finishes.")}
          </span>
        </div>
      </div>
    `}_renderColorsSection(e,t,n,i){const o=[["running_color",(0,a.kg)("editor.laundry_tracker.color_running",i,"Running"),M,(0,a.kg)("editor.laundry_tracker.color_running_desc",i,"A cycle is in progress.")],["done_color",(0,a.kg)("editor.laundry_tracker.color_done",i,"Finished"),S,(0,a.kg)("editor.laundry_tracker.color_done_desc",i,"A cycle just ended.")],["idle_color",(0,a.kg)("editor.laundry_tracker.color_idle",i,"Idle"),D,(0,a.kg)("editor.laundry_tracker.color_idle_desc",i,"Nothing happening.")],["alert_color",(0,a.kg)("editor.laundry_tracker.color_alert",i,"Forgotten"),A,(0,a.kg)("editor.laundry_tracker.color_alert_desc",i,"A load is still sitting there.")],["text_color",(0,a.kg)("editor.laundry_tracker.color_text",i,"Text"),F,(0,a.kg)("editor.laundry_tracker.color_text_desc",i,"Primary text.")],["secondary_text_color",(0,a.kg)("editor.laundry_tracker.color_secondary",i,"Secondary text"),z,(0,a.kg)("editor.laundry_tracker.color_secondary_desc",i,"Supporting detail text.")],["card_background_color",(0,a.kg)("editor.laundry_tracker.color_card_bg",i,"Card background"),C,(0,a.kg)("editor.laundry_tracker.color_card_bg_desc",i,"Behind each status card.")]];return r.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,a.kg)("editor.laundry_tracker.colors_section",i,"Colors")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${(0,a.kg)("editor.laundry_tracker.colors_section_desc",i,"Leave any of these blank to follow the Home Assistant theme.")}
        </div>
        ${o.map(([r,i,a,o])=>this.renderColorField(i,o,t,e[r]||"",a,e=>{n({[r]:e}),this.triggerPreviewUpdate()}))}
      </div>
    `}_addAppliance(e,t,n,r,i){const o=d[n],l=(e.appliances||[]).filter(e=>e.kind===n).length,s="dryer"===n?(0,a.kg)("editor.laundry_tracker.kind_dryer",r,"Dryer"):(0,a.kg)("editor.laundry_tracker.kind_washer",r,"Washer"),c={id:this.generateId(`laundry_${n}`),kind:n,name:l>0?`${s} ${l+1}`:s,icon:o.icon,power_entity:"",state_entity:"",running_states:[],door_entity:"",start_threshold_w:o.start_threshold_w,stop_threshold_w:o.stop_threshold_w,settle_minutes:o.settle_minutes,min_cycle_minutes:o.min_cycle_minutes,unload_grace_minutes:o.unload_grace_minutes};t({appliances:[...e.appliances||[],c]}),i.expanded.add(c.id),this.triggerPreviewUpdate(!0)}_patchAppliance(e,t,n,r){t({appliances:(e.appliances||[]).map(e=>e.id===n?Object.assign(Object.assign({},e),r):e)}),this.triggerPreviewUpdate()}_removeAppliance(e,t,n,r){const i=[...e.appliances||[]],[a]=i.splice(n,1);a&&(r.expanded.delete(a.id),r.suggested.delete(a.id)),t({appliances:i}),this.triggerPreviewUpdate(!0)}_moveAppliance(e,t,n,r){const i=[...e.appliances||[]],a=n+r;if(a<0||a>=i.length)return;const o=i[n],l=i[a];o&&l&&(i[n]=l,i[a]=o,t({appliances:i}),this.triggerPreviewUpdate(!0))}_changeKind(e,t,n,r,i){const o="dryer"===r?"dryer":"washer";if(o===n.kind)return;const l=d["dryer"===n.kind?"dryer":"washer"],s=d[o],c={kind:o};n.icon&&n.icon!==l.icon||(c.icon=s.icon);const u="dryer"===n.kind?(0,a.kg)("editor.laundry_tracker.kind_dryer",i,"Dryer"):(0,a.kg)("editor.laundry_tracker.kind_washer",i,"Washer");n.name&&n.name!==u||(c.name="dryer"===o?(0,a.kg)("editor.laundry_tracker.kind_dryer",i,"Dryer"):(0,a.kg)("editor.laundry_tracker.kind_washer",i,"Washer")),n.start_threshold_w===l.start_threshold_w&&(c.start_threshold_w=s.start_threshold_w),n.stop_threshold_w===l.stop_threshold_w&&(c.stop_threshold_w=s.stop_threshold_w),n.unload_grace_minutes===l.unload_grace_minutes&&(c.unload_grace_minutes=s.unload_grace_minutes),this._patchAppliance(e,t,n.id,c)}renderPreview(e,t,n,i){var o,l,s,d;const c=e,u=(null===(o=null==t?void 0:t.locale)||void 0===o?void 0:o.language)||"en",h=(c.appliances||[]).filter(e=>!!e&&!!e.id);if(0===h.length)return this.renderGradientErrorState((0,a.kg)("editor.laundry_tracker.empty_title",u,"Add a washer or dryer"),(0,a.kg)("editor.laundry_tracker.empty_desc",u,"Open the General tab and point a machine at its power sensor."),"mdi:washing-machine");const p=k.analyze(t,{moduleId:c.id,appliances:h,historyDays:null!==(l=c.history_days)&&void 0!==l?l:7,energyRate:null!==(s=c.energy_rate)&&void 0!==s?s:.15,acknowledgeEnabled:!1!==c.acknowledge_enabled},()=>this.triggerPreviewUpdate());"live"!==i&&"ha-preview"!==i&&setTimeout(()=>this._dispatchNotifications(c,t,p,u),0);const _=this._palette(c),y=this.buildStyleString(this.buildDesignStyles(e,t)),g=this.getHoverEffectClass(e),v=(null===(d=c.title)||void 0===d?void 0:d.trim())||(0,a.kg)("editor.laundry_tracker.default_title",u,"Laundry"),m=r.qy`
      ${!1!==c.show_title?r.qy`<div class="uc-lt-title" style="color:${_.text};">
            <ha-icon icon="mdi:washing-machine"></ha-icon>
            <span>${v}</span>
          </div>`:r.s6}
      ${!1!==c.show_status_cards?r.qy`<div class="uc-lt-cards ${"row"===c.layout?"row":"stack"}">
            ${p.statuses.map(e=>this._renderStatusCard(c,e,t,_,u,p))}
          </div>`:r.s6}
      ${this._renderHandoffHint(c,p,_,u)}
      ${!1!==c.show_timeline?this._renderTimeline(c,p,_,u):r.s6}
      ${!1!==c.show_history_stats?this._renderStats(c,p,_,u):r.s6}
      ${p.error?r.qy`<div class="uc-lt-error" style="color:${_.secondary};">
            <ha-icon icon="mdi:database-alert-outline"></ha-icon>
            <span>
              ${(0,a.kg)("editor.laundry_tracker.history_error",u,"Could not read recorder history. Live wattage still works.")}
            </span>
          </div>`:r.s6}
    `,f=this.createGestureHandlers(`laundry-${c.id}`,{tap_action:c.tap_action,hold_action:c.hold_action,double_tap_action:c.double_tap_action,module:c},t,n,[".uc-lt-action-btn"]);return r.qy`
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
        ${this.wrapWithAnimation(m,e,t)}
      </div>
    `}_renderStatusCard(e,t,n,i,o,l){var s;const c=t.appliance,u="dryer"===c.kind?"dryer":"washer",h=c.icon||d[u].icon,p=(null===(s=c.name)||void 0===s?void 0:s.trim())||("dryer"===u?(0,a.kg)("editor.laundry_tracker.kind_dryer",o,"Dryer"):(0,a.kg)("editor.laundry_tracker.kind_washer",o,"Washer")),_="forgotten"===t.phase&&!1!==e.show_idle_alert,y=this._phaseColor(t.phase,i,!1!==e.show_idle_alert),g=[`background:${i.cardBg}`,`border-left:4px solid ${y}`,_?`box-shadow: 0 0 0 1px ${y}55`:""].filter(Boolean).join(";");return r.qy`
      <div class="uc-lt-card ${_?"alarm":""}" style="${g}">
        <div class="uc-lt-card-head">
          <ha-icon
            class="uc-lt-card-icon ${"running"===t.phase?"spin-pulse":""} ${_?"alert-pulse":""}"
            icon=${h}
            style="color:${y};"
          ></ha-icon>
          <div class="uc-lt-card-title">
            <div class="uc-lt-card-name" style="color:${i.text};">${p}</div>
            <div class="uc-lt-card-phase" style="color:${y};">
              ${this._phaseLabel(t,e,o)}
            </div>
          </div>
          ${t.doorOpen?r.qy`<span
                class="uc-lt-door"
                style="color:${i.secondary};"
                title=${(0,a.kg)("editor.laundry_tracker.door_open",o,"Door open")}
              >
                <ha-icon icon="mdi:door-open"></ha-icon>
              </span>`:r.s6}
        </div>

        <div class="uc-lt-card-body">
          ${this._renderPhaseDetail(e,t,i,o,y,l)}
        </div>

        ${this._renderCardActions(e,t,n,i,o)}
      </div>
    `}_renderPhaseDetail(e,t,n,i,o,l){switch(t.phase){case"running":return this._renderRunningDetail(e,t,n,i,o);case"finished":return this._renderFinishedDetail(e,t,n,i);case"forgotten":return!1!==e.show_idle_alert?this._renderForgottenDetail(e,t,n,i,o):this._renderFinishedDetail(e,t,n,i);case"unknown":return r.qy`
          <div class="uc-lt-line" style="color:${n.secondary};">
            ${(0,a.kg)("editor.laundry_tracker.no_source",i,"No power or state sensor selected for this machine.")}
          </div>
        `;default:return this._renderIdleDetail(e,t,n,i,l)}}_renderRunningDetail(e,t,n,i,o){const l=Date.now(),s=t.sinceMs?Math.max(0,l-t.sinceMs):null,d=this._typicalDurationMs(t),c=d&&null!==s?Math.round(d.medianMs-s):null,u=d&&null!==s?Math.max(.02,Math.min(.97,s/Math.max(d.medianMs,1))):null;return r.qy`
      <div class="uc-lt-metrics">
        ${null!==t.currentW?r.qy`<span class="uc-lt-metric" style="color:${n.text};">
              <strong>${this._formatWatts(t.currentW)}</strong>
            </span>`:r.s6}
        ${null!==s?r.qy`<span class="uc-lt-metric" style="color:${n.secondary};">
              ${this._formatTemplate((0,a.kg)("editor.laundry_tracker.running_for",i,"running for {time}"),{time:this._formatDuration(s,i)})}
            </span>`:r.s6}
      </div>
      ${null!==u?r.qy`<div class="uc-lt-progress" style="background:${o}22;">
            <div
              class="uc-lt-progress-fill"
              style="width:${(100*u).toFixed(1)}%;background:${o};"
            ></div>
          </div>`:r.s6}
      ${d&&null!==c&&c>x?r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
            ${this._formatTemplate((0,a.kg)("editor.laundry_tracker.est_finish",i,"about {time} left, based on your last {count} cycles"),{time:this._formatDuration(c,i),count:String(d.count)})}
          </div>`:d?r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
              ${(0,a.kg)("editor.laundry_tracker.est_finish_soon",i,"should finish any minute now")}
            </div>`:r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
              ${(0,a.kg)("editor.laundry_tracker.est_finish_unknown",i,"not enough past cycles to estimate a finish time yet")}
            </div>`}
    `}_renderFinishedDetail(e,t,n,i){var o;const l=null!==(o=t.sittingMs)&&void 0!==o?o:0;return r.qy`
      <div class="uc-lt-headline" style="color:${n.text};">
        ${this._formatTemplate((0,a.kg)("editor.laundry_tracker.done_ago",i,"Done {time} ago"),{time:this._formatDuration(l,i)})}
      </div>
      ${t.lastCycle?r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
            ${this._cycleSummary(e,t.lastCycle,i)}
          </div>`:r.s6}
    `}_renderForgottenDetail(e,t,n,i,o){var l;const s=null!==(l=t.sittingMs)&&void 0!==l?l:0;return r.qy`
      <div class="uc-lt-alarm-headline" style="color:${o};">
        ${this._formatTemplate((0,a.kg)("editor.laundry_tracker.sitting_for",i,"Sitting for {time}"),{time:this._formatDuration(s,i)})}
      </div>
      <div class="uc-lt-line strong" style="color:${n.text};">
        ${"dryer"===t.appliance.kind?(0,a.kg)("editor.laundry_tracker.forgotten_dryer",i,"The dry load is still in the drum."):(0,a.kg)("editor.laundry_tracker.forgotten_washer",i,"The wet load is still in the drum.")}
      </div>
      ${t.lastCycle?r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
            ${this._cycleSummary(e,t.lastCycle,i)}
          </div>`:r.s6}
    `}_renderIdleDetail(e,t,n,i,o){var l;if("power"===t.source&&0===t.cycles.length&&t.historyPoints<5)return r.qy`
        <div class="uc-lt-line" style="color:${n.secondary};">
          ${o.loading?(0,a.kg)("editor.laundry_tracker.loading_history",i,"Reading cycle history…"):(0,a.kg)("editor.laundry_tracker.learning",i,"Learning your cycles — no completed loads recorded yet.")}
        </div>
        ${null!==t.currentW?r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
              ${this._formatTemplate((0,a.kg)("editor.laundry_tracker.drawing_now",i,"Drawing {watts} right now"),{watts:this._formatWatts(t.currentW)})}
            </div>`:r.s6}
      `;if(!t.lastCycle)return r.qy`
        <div class="uc-lt-line" style="color:${n.secondary};">
          ${this._formatTemplate((0,a.kg)("editor.laundry_tracker.no_cycles_window",i,"No cycles in the last {days} days"),{days:String(null!==(l=e.history_days)&&void 0!==l?l:7)})}
        </div>
      `;const s=Math.max(0,Date.now()-t.lastCycle.endMs);return r.qy`
      <div class="uc-lt-line" style="color:${n.text};">
        ${this._formatTemplate((0,a.kg)("editor.laundry_tracker.last_cycle_ago",i,"Last cycle {time} ago"),{time:this._formatDuration(s,i)})}
        ${t.retrievedByDoor?r.qy`<span
              class="uc-lt-badge"
              style="color:${n.done};border-color:${n.done}55;"
            >
              ${(0,a.kg)("editor.laundry_tracker.emptied",i,"emptied")}
            </span>`:t.acknowledged?r.qy`<span
                class="uc-lt-badge"
                style="color:${n.done};border-color:${n.done}55;"
              >
                ${(0,a.kg)("editor.laundry_tracker.unloaded_badge",i,"unloaded")}
              </span>`:r.s6}
      </div>
      <div class="uc-lt-line" style="color:${n.secondary};">
        ${this._cycleSummary(e,t.lastCycle,i)}
      </div>
    `}_renderCardActions(e,t,n,i,o){if(!1===e.acknowledge_enabled)return r.s6;if("finished"!==t.phase&&"forgotten"!==t.phase)return r.s6;const l=t.lastCycle;if(!l)return r.s6;const s=this._phaseColor(t.phase,i,!1!==e.show_idle_alert);return r.qy`
      <div class="uc-lt-card-actions">
        <button
          type="button"
          class="uc-lt-action-btn"
          style="border-color:${s}66;color:${s};"
          @click=${e=>{e.stopPropagation(),k.acknowledge(t.appliance.id,l.endMs),this.triggerPreviewUpdate(!0)}}
        >
          <ha-icon icon="mdi:check-circle-outline"></ha-icon>
          ${(0,a.kg)("editor.laundry_tracker.unloaded_button",o,"Unloaded")}
        </button>
      </div>
    `}_renderHandoffHint(e,t,n,i){var o,l;if(!1===e.show_handoff_hint)return r.s6;const s=t.statuses.find(e=>"washer"===e.appliance.kind&&("finished"===e.phase||"forgotten"===e.phase));if(!s)return r.s6;const d=t.statuses.find(e=>"dryer"===e.appliance.kind&&"idle"===e.phase&&"none"!==e.source);if(!d)return r.s6;const c=(null===(o=s.appliance.name)||void 0===o?void 0:o.trim())||(0,a.kg)("editor.laundry_tracker.kind_washer",i,"Washer"),u=(null===(l=d.appliance.name)||void 0===l?void 0:l.trim())||(0,a.kg)("editor.laundry_tracker.kind_dryer",i,"Dryer");return r.qy`
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
            ${(0,a.kg)("editor.laundry_tracker.handoff_title",i,"Move to dryer")}
          </div>
          <div class="uc-lt-handoff-sub" style="color:${n.secondary};">
            ${this._formatTemplate((0,a.kg)("editor.laundry_tracker.handoff_sub",i,"{washer} is done and {dryer} is free"),{washer:c,dryer:u})}
          </div>
        </div>
      </div>
    `}_renderTimeline(e,t,n,i){const o=Math.max(1,t.windowEndMs-t.windowStartMs),l=Math.max(1,Math.round(o/$)),s=t.statuses.some(e=>e.cycles.length>0||"running"===e.phase),d=this._timelineTicks(t.windowStartMs,t.windowEndMs,l);return r.qy`
      <div class="uc-lt-timeline">
        <div class="uc-lt-section-title" style="color:${n.secondary};">
          ${this._formatTemplate((0,a.kg)("editor.laundry_tracker.timeline_title",i,"Last {days} days"),{days:String(l)})}
        </div>
        ${s?r.qy`
              ${t.statuses.map(r=>this._renderTimelineLane(e,r,t,n,i,d))}
              <div class="uc-lt-axis">
                <div class="uc-lt-axis-spacer"></div>
                <div class="uc-lt-axis-track">
                  ${d.filter(e=>e.label).map(e=>r.qy`<span
                          class="uc-lt-axis-label"
                          style="left:${e.pct.toFixed(2)}%;color:${n.secondary};"
                          >${e.label}</span
                        >`)}
                </div>
              </div>
            `:r.qy`<div class="uc-lt-line" style="color:${n.secondary};">
              ${t.loading?(0,a.kg)("editor.laundry_tracker.loading_history",i,"Reading cycle history…"):(0,a.kg)("editor.laundry_tracker.timeline_empty",i,"No cycles recorded in this window yet.")}
            </div>`}
      </div>
    `}_renderTimelineLane(e,t,n,i,o,l){var s;const c=Math.max(1,n.windowEndMs-n.windowStartMs),u="dryer"===t.appliance.kind?"dryer":"washer",h=(null===(s=t.appliance.name)||void 0===s?void 0:s.trim())||("dryer"===u?(0,a.kg)("editor.laundry_tracker.kind_dryer",o,"Dryer"):(0,a.kg)("editor.laundry_tracker.kind_washer",o,"Washer")),p=e=>Math.max(0,Math.min(100,(e-n.windowStartMs)/c*100)),_=t.cycles.map(t=>({left:p(t.startMs),right:p(t.endMs),color:i.done,title:this._cycleTooltip(e,h,t,o)}));return"running"===t.phase&&t.sinceMs&&_.push({left:p(t.sinceMs),right:p(n.windowEndMs),color:i.running,title:`${h} · ${(0,a.kg)("editor.laundry_tracker.phase_running",o,"Running")}`}),r.qy`
      <div class="uc-lt-lane-row">
        <div class="uc-lt-lane-label" style="color:${i.secondary};" title=${h}>
          <ha-icon icon=${t.appliance.icon||d[u].icon}></ha-icon>
          <span>${h}</span>
        </div>
        <div class="uc-lt-lane">
          ${l.map(e=>r.qy`<span class="uc-lt-gridline" style="left:${e.pct.toFixed(2)}%;"></span>`)}
          ${_.map(e=>r.qy`<span
                class="uc-lt-block"
                style="left:${e.left.toFixed(2)}%;width:${Math.max(.4,e.right-e.left).toFixed(2)}%;background:${e.color};"
                title=${e.title}
              ></span>`)}
        </div>
      </div>
    `}_timelineTicks(e,t,n){const r=Math.max(1,t-e),i=Math.ceil(n/7),a=[],o=new Date(e);o.setHours(24,0,0,0);let l=0;for(let n=o.getTime();n<=t;n+=$){const t=(n-e)/r*100,o=l%i===0;a.push({pct:t,label:o?this._formatDayLabel(n):""}),l+=1}return a}_renderStats(e,t,n,i){var o,l;const s=t.stats,d=null!==(o=e.history_days)&&void 0!==o?o:7,c=!1!==e.show_energy,u=null!==(l=e.currency_symbol)&&void 0!==l?l:"$";if(0===s.cycleCount)return r.qy`
        <div class="uc-lt-stats-empty" style="color:${n.secondary};">
          ${t.loading?(0,a.kg)("editor.laundry_tracker.loading_history",i,"Reading cycle history…"):(0,a.kg)("editor.laundry_tracker.stats_learning",i,"No completed cycles yet — still learning what your machines look like.")}
        </div>
      `;const h=[{label:(0,a.kg)("editor.laundry_tracker.stats_cycles",i,"Cycles"),value:String(s.cycleCount)},{label:(0,a.kg)("editor.laundry_tracker.stats_avg",i,"Average"),value:null!==s.avgDurationMs?this._formatDuration(s.avgDurationMs,i):"—"}];return c&&(h.push({label:(0,a.kg)("editor.laundry_tracker.stats_energy",i,"Energy"),value:`${s.totalKwh.toFixed(2)} kWh`}),h.push({label:(0,a.kg)("editor.laundry_tracker.stats_cost",i,"Cost"),value:`${u}${s.totalCost.toFixed(2)}`})),s.busiestDay&&h.push({label:(0,a.kg)("editor.laundry_tracker.stats_busiest",i,"Busiest"),value:this._formatDayName(s.busiestDay,i)}),r.qy`
      <div class="uc-lt-stats">
        ${h.map(e=>r.qy`
            <div class="uc-lt-stat" style="background:${n.cardBg};">
              <div class="uc-lt-stat-value" style="color:${n.text};">${e.value}</div>
              <div class="uc-lt-stat-label" style="color:${n.secondary};">${e.label}</div>
            </div>
          `)}
      </div>
      <div class="uc-lt-footnote" style="color:${n.secondary};">
        ${this._formatTemplate((0,a.kg)("editor.laundry_tracker.stats_footnote",i,"From {days} days of history"),{days:String(d)})}
      </div>
    `}_dispatchNotifications(e,t,n,r){var i,o;const l=(e.notify_service||"").trim();if(l)for(const s of n.statuses){if("forgotten"!==s.phase||!s.lastCycle)continue;const n="dryer"===s.appliance.kind?"dryer":"washer",d=(null===(i=s.appliance.name)||void 0===i?void 0:i.trim())||("dryer"===n?(0,a.kg)("editor.laundry_tracker.kind_dryer",r,"Dryer"):(0,a.kg)("editor.laundry_tracker.kind_washer",r,"Washer"));k.maybeNotify(t,{moduleId:e.id,applianceId:s.appliance.id,cycleEndMs:s.lastCycle.endMs,service:l,title:(0,a.kg)("editor.laundry_tracker.notify_title",r,"Laundry is waiting"),message:this._formatTemplate((0,a.kg)("editor.laundry_tracker.notify_message",r,"{name} finished {time} ago and still has a load in it."),{name:d,time:this._formatDuration(null!==(o=s.sittingMs)&&void 0!==o?o:0,r)})})}}_palette(e){return{running:e.running_color||M,done:e.done_color||S,idle:e.idle_color||D,alert:e.alert_color||A,text:e.text_color||F,secondary:e.secondary_text_color||z,cardBg:e.card_background_color||C}}_phaseColor(e,t,n){switch(e){case"running":return t.running;case"finished":return t.done;case"forgotten":return n?t.alert:t.done;default:return t.idle}}_phaseLabel(e,t,n){switch(e.phase){case"running":return(0,a.kg)("editor.laundry_tracker.phase_running",n,"Running");case"finished":return(0,a.kg)("editor.laundry_tracker.phase_finished",n,"Finished");case"forgotten":return!1!==t.show_idle_alert?(0,a.kg)("editor.laundry_tracker.phase_forgotten",n,"Still loaded"):(0,a.kg)("editor.laundry_tracker.phase_finished",n,"Finished");case"unknown":return(0,a.kg)("editor.laundry_tracker.phase_unknown",n,"Not set up");default:return(0,a.kg)("editor.laundry_tracker.phase_idle",n,"Idle")}}_typicalDurationMs(e){var t,n,r;const i=e.cycles.slice(-8).map(e=>e.durationMs);if(i.length<3)return null;const a=[...i].sort((e,t)=>e-t),o=Math.floor(a.length/2),l=a.length%2==0?((null!==(t=a[o-1])&&void 0!==t?t:0)+(null!==(n=a[o])&&void 0!==n?n:0))/2:null!==(r=a[o])&&void 0!==r?r:0;return l<=0?null:{medianMs:l,count:i.length}}_cycleSummary(e,t,n){var r;const i=[this._formatDuration(t.durationMs,n)];if(!1!==e.show_energy&&t.energyKwh>0){i.push(`${t.energyKwh.toFixed(2)} kWh`);const n=null!==(r=e.currency_symbol)&&void 0!==r?r:"$";i.push(`${n}${t.costEstimate.toFixed(2)}`)}return i.join(" · ")}_cycleTooltip(e,t,n,r){return`${t} · ${this._formatClock(n.startMs,r)} · ${this._cycleSummary(e,n,r)}`}_formatWatts(e){return Number.isFinite(e)?Math.abs(e)>=1e3?`${(e/1e3).toFixed(2)} kW`:Math.abs(e)>=100?`${Math.round(e)} W`:Math.round(10*e)/10+" W":"—"}_formatDuration(e,t){const n=Math.max(0,Math.round(e)),r=(0,a.kg)("editor.laundry_tracker.unit_day",t,"d"),i=(0,a.kg)("editor.laundry_tracker.unit_hour",t,"h"),o=(0,a.kg)("editor.laundry_tracker.unit_minute",t,"m");if(n<x)return`${Math.max(1,Math.round(n/1e3/60))}${o}`;if(n<b)return`${Math.round(n/x)}${o}`;if(n<$){const e=Math.floor(n/b),t=Math.round(n%b/x);return t>0?`${e}${i} ${t}${o}`:`${e}${i}`}const l=Math.floor(n/$),s=Math.round(n%$/b);return s>0?`${l}${r} ${s}${i}`:`${l}${r}`}_formatClock(e,t){try{return new Date(e).toLocaleString(t||void 0,{weekday:"short",hour:"numeric",minute:"2-digit"})}catch(t){return new Date(e).toLocaleString()}}_formatDayLabel(e){const t=new Date(e);return`${t.getMonth()+1}/${t.getDate()}`}_formatDayName(e,t){const n=e.split("-").map(Number),r=n[0],i=n[1],a=n[2];if(!r||!i||!a)return e;try{return new Date(r,i-1,a).toLocaleDateString(t||void 0,{weekday:"short"})}catch(t){return e}}_formatTemplate(e,t){let n=e;for(const[e,r]of Object.entries(t))n=n.split(`{${e}}`).join(r);return n}getStyles(){return`\n      ${i.m.getSliderStyles()}\n\n      .uc-lt-wrapper {\n        box-sizing: border-box;\n        width: 100%;\n      }\n\n      /* ── Preview ─────────────────────────────────────────────────────── */\n\n      .uc-lt-title {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 16px;\n        font-weight: 700;\n        margin-bottom: 10px;\n      }\n      .uc-lt-title ha-icon {\n        --mdc-icon-size: 20px;\n      }\n\n      .uc-lt-cards {\n        display: flex;\n        gap: 10px;\n      }\n      .uc-lt-cards.stack {\n        flex-direction: column;\n      }\n      .uc-lt-cards.row {\n        flex-direction: row;\n        flex-wrap: wrap;\n      }\n      .uc-lt-cards.row > .uc-lt-card {\n        flex: 1 1 220px;\n        min-width: 0;\n      }\n\n      .uc-lt-card {\n        border-radius: var(--uc-r-12, 12px);\n        padding: 12px 14px;\n        min-width: 0;\n        box-sizing: border-box;\n      }\n      .uc-lt-card.alarm {\n        animation: uc-lt-alarm-breathe 2.4s ease-in-out infinite;\n      }\n\n      .uc-lt-card-head {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        min-width: 0;\n      }\n      .uc-lt-card-icon {\n        --mdc-icon-size: 28px;\n        flex-shrink: 0;\n      }\n      .uc-lt-card-icon.spin-pulse {\n        animation: uc-lt-pulse 1.6s ease-in-out infinite;\n      }\n      .uc-lt-card-icon.alert-pulse {\n        animation: uc-lt-shake 3s ease-in-out infinite;\n      }\n      .uc-lt-card-title {\n        flex: 1;\n        min-width: 0;\n      }\n      .uc-lt-card-name {\n        font-size: 15px;\n        font-weight: 700;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-card-phase {\n        font-size: 11px;\n        font-weight: 700;\n        letter-spacing: 0.6px;\n        text-transform: uppercase;\n      }\n      .uc-lt-door ha-icon {\n        --mdc-icon-size: 18px;\n      }\n\n      .uc-lt-card-body {\n        margin-top: 8px;\n      }\n      .uc-lt-metrics {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: baseline;\n        gap: 4px 10px;\n        font-size: 13px;\n      }\n      .uc-lt-metric strong {\n        font-size: 18px;\n        font-weight: 700;\n      }\n      .uc-lt-line {\n        font-size: 12px;\n        line-height: 1.4;\n        margin-top: 4px;\n        overflow-wrap: anywhere;\n      }\n      .uc-lt-line.strong {\n        font-size: 13px;\n        font-weight: 600;\n      }\n      .uc-lt-headline {\n        font-size: 17px;\n        font-weight: 700;\n      }\n      .uc-lt-alarm-headline {\n        font-size: 22px;\n        font-weight: 800;\n        line-height: 1.15;\n        letter-spacing: -0.3px;\n      }\n      .uc-lt-badge {\n        display: inline-block;\n        margin-left: 6px;\n        padding: 1px 6px;\n        border: 1px solid;\n        border-radius: var(--uc-r-10, 10px);\n        font-size: 10px;\n        text-transform: uppercase;\n        letter-spacing: 0.4px;\n        vertical-align: middle;\n      }\n\n      .uc-lt-progress {\n        height: 6px;\n        border-radius: var(--uc-r-4, 4px);\n        overflow: hidden;\n        margin-top: 8px;\n      }\n      .uc-lt-progress-fill {\n        height: 100%;\n        border-radius: var(--uc-r-4, 4px);\n        transition: width 0.4s ease;\n      }\n\n      .uc-lt-card-actions {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n        margin-top: 10px;\n      }\n      .uc-lt-action-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 6px 12px;\n        border-radius: 999px;\n        border: 1px solid;\n        background: transparent;\n        font-size: 12px;\n        font-weight: 700;\n        cursor: pointer;\n        font-family: inherit;\n      }\n      .uc-lt-action-btn ha-icon {\n        --mdc-icon-size: 16px;\n      }\n      .uc-lt-action-btn:hover {\n        filter: brightness(1.15);\n      }\n      .uc-lt-action-btn:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n\n      .uc-lt-handoff {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        margin-top: 10px;\n        padding: 10px 12px;\n        border: 1px solid;\n        border-radius: var(--uc-r-12, 12px);\n      }\n      .uc-lt-handoff ha-icon {\n        --mdc-icon-size: 22px;\n        flex-shrink: 0;\n      }\n      .uc-lt-handoff-title {\n        font-size: 13px;\n        font-weight: 700;\n      }\n      .uc-lt-handoff-sub {\n        font-size: 12px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      /* ── Timeline ─────────────────────────────────────────────────────── */\n\n      .uc-lt-timeline {\n        margin-top: 14px;\n      }\n      .uc-lt-section-title {\n        font-size: 11px;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.6px;\n        margin-bottom: 6px;\n      }\n      .uc-lt-lane-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        margin-bottom: 6px;\n      }\n      .uc-lt-lane-label {\n        flex: 0 0 auto;\n        width: 74px;\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 11px;\n        min-width: 0;\n      }\n      .uc-lt-lane-label ha-icon {\n        --mdc-icon-size: 14px;\n        flex-shrink: 0;\n      }\n      .uc-lt-lane-label span {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-lane {\n        position: relative;\n        flex: 1 1 auto;\n        min-width: 0;\n        height: 16px;\n        border-radius: var(--uc-r-5, 5px);\n        background: rgba(127, 127, 127, 0.16);\n        overflow: hidden;\n      }\n      .uc-lt-gridline {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        width: 1px;\n        background: rgba(127, 127, 127, 0.3);\n      }\n      .uc-lt-block {\n        position: absolute;\n        top: 2px;\n        bottom: 2px;\n        min-width: 3px;\n        border-radius: var(--uc-r-3, 3px);\n      }\n      .uc-lt-axis {\n        display: flex;\n        gap: 8px;\n      }\n      .uc-lt-axis-spacer {\n        flex: 0 0 auto;\n        width: 74px;\n      }\n      .uc-lt-axis-track {\n        position: relative;\n        flex: 1 1 auto;\n        min-width: 0;\n        height: 14px;\n      }\n      .uc-lt-axis-label {\n        position: absolute;\n        top: 0;\n        transform: translateX(-50%);\n        font-size: 9px;\n        white-space: nowrap;\n      }\n\n      /* ── Stats ────────────────────────────────────────────────────────── */\n\n      .uc-lt-stats {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n        margin-top: 12px;\n      }\n      .uc-lt-stat {\n        flex: 1 1 84px;\n        min-width: 0;\n        padding: 8px 10px;\n        border-radius: var(--uc-r-10, 10px);\n        text-align: center;\n      }\n      .uc-lt-stat-value {\n        font-size: 16px;\n        font-weight: 700;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-stat-label {\n        font-size: 10px;\n        text-transform: uppercase;\n        letter-spacing: 0.4px;\n        margin-top: 2px;\n      }\n      .uc-lt-stats-empty,\n      .uc-lt-footnote {\n        font-size: 11px;\n        margin-top: 8px;\n      }\n      .uc-lt-error {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 11px;\n        margin-top: 8px;\n      }\n      .uc-lt-error ha-icon {\n        --mdc-icon-size: 16px;\n      }\n\n      /* ── Editor ───────────────────────────────────────────────────────── */\n\n      .uc-lt-editor-empty {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        padding: 14px;\n        border: 1px dashed var(--divider-color);\n        border-radius: var(--uc-r-10, 10px);\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        margin-bottom: 12px;\n      }\n      .uc-lt-editor-empty ha-icon {\n        --mdc-icon-size: 22px;\n        color: var(--primary-color);\n      }\n\n      .uc-lt-row {\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        border-radius: var(--uc-r-10, 10px);\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        margin-bottom: 10px;\n        overflow: hidden;\n      }\n      .uc-lt-row.expanded {\n        border-color: var(--primary-color);\n      }\n      .uc-lt-row-head {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 10px 12px;\n        min-width: 0;\n      }\n      .uc-lt-row-icon {\n        --mdc-icon-size: 24px;\n        color: var(--primary-color);\n        flex-shrink: 0;\n      }\n      .uc-lt-row-text {\n        flex: 1;\n        min-width: 0;\n      }\n      .uc-lt-row-name {\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-row-kind {\n        margin-left: 6px;\n        padding: 1px 6px;\n        border-radius: var(--uc-r-8, 8px);\n        background: rgba(127, 127, 127, 0.18);\n        font-size: 10px;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.4px;\n        color: var(--secondary-text-color);\n      }\n      .uc-lt-row-sub {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-row-sub.empty {\n        font-style: italic;\n      }\n      .uc-lt-icon-btn {\n        flex-shrink: 0;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 30px;\n        height: 30px;\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        background: transparent;\n        color: var(--secondary-text-color);\n        cursor: pointer;\n      }\n      .uc-lt-icon-btn ha-icon {\n        --mdc-icon-size: 18px;\n      }\n      .uc-lt-icon-btn:hover:not(:disabled) {\n        background: rgba(127, 127, 127, 0.16);\n        color: var(--primary-color);\n      }\n      .uc-lt-icon-btn.danger:hover:not(:disabled) {\n        color: var(--error-color);\n      }\n      .uc-lt-icon-btn:disabled {\n        opacity: 0.3;\n        cursor: default;\n      }\n      .uc-lt-icon-btn:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 1px;\n      }\n      .uc-lt-row-body {\n        padding: 4px 12px 12px;\n        border-top: 1px solid var(--divider-color);\n      }\n\n      .uc-lt-helper {\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-10, 10px);\n        padding: 12px;\n        margin-bottom: 16px;\n        background: rgba(127, 127, 127, 0.06);\n      }\n      .uc-lt-helper-title {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 13px;\n        font-weight: 700;\n        color: var(--primary-text-color);\n      }\n      .uc-lt-helper-title ha-icon {\n        --mdc-icon-size: 18px;\n        color: var(--primary-color);\n      }\n      .uc-lt-helper-note {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        margin-top: 4px;\n        line-height: 1.4;\n      }\n      .uc-lt-helper-grid {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n        margin-top: 10px;\n      }\n      .uc-lt-helper-stat {\n        flex: 1 1 62px;\n        min-width: 0;\n        padding: 6px 8px;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        text-align: center;\n      }\n      .uc-lt-helper-stat-label {\n        font-size: 9px;\n        text-transform: uppercase;\n        letter-spacing: 0.4px;\n        color: var(--secondary-text-color);\n      }\n      .uc-lt-helper-stat-value {\n        font-size: 13px;\n        font-weight: 700;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lt-suggest-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        margin-top: 10px;\n        padding: 7px 14px;\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        font-size: 13px;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n      }\n      .uc-lt-suggest-btn ha-icon {\n        --mdc-icon-size: 18px;\n      }\n      .uc-lt-suggest-btn:hover {\n        filter: brightness(1.1);\n      }\n      .uc-lt-suggest-btn:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n\n      .uc-lt-add-row {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n        margin-top: 4px;\n      }\n      .uc-lt-add-btn {\n        flex: 1 1 140px;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        padding: 11px 14px;\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        font-size: 14px;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n      }\n      .uc-lt-add-btn ha-icon {\n        --mdc-icon-size: 20px;\n      }\n      .uc-lt-add-btn:hover {\n        filter: brightness(1.1);\n      }\n      .uc-lt-add-btn:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n\n      .uc-lt-note {\n        display: flex;\n        align-items: flex-start;\n        gap: 8px;\n        padding: 10px 12px;\n        border-radius: var(--uc-r-8, 8px);\n        background: rgba(127, 127, 127, 0.1);\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        line-height: 1.4;\n      }\n      .uc-lt-note ha-icon {\n        --mdc-icon-size: 18px;\n        flex-shrink: 0;\n        color: var(--primary-color);\n      }\n\n      @keyframes uc-lt-pulse {\n        0%, 100% { opacity: 1; transform: scale(1); }\n        50% { opacity: 0.55; transform: scale(0.92); }\n      }\n      @keyframes uc-lt-shake {\n        0%, 88%, 100% { transform: rotate(0deg); }\n        91% { transform: rotate(-9deg); }\n        94% { transform: rotate(9deg); }\n        97% { transform: rotate(-5deg); }\n      }\n      @keyframes uc-lt-alarm-breathe {\n        0%, 100% { filter: brightness(1); }\n        50% { filter: brightness(1.06); }\n      }\n\n      @media (prefers-reduced-motion: reduce) {\n        .uc-lt-card.alarm,\n        .uc-lt-card-icon.spin-pulse,\n        .uc-lt-card-icon.alert-pulse {\n          animation: none;\n        }\n      }\n\n      @media (max-width: 360px) {\n        .uc-lt-lane-label {\n          width: 52px;\n        }\n        .uc-lt-axis-spacer {\n          width: 52px;\n        }\n        .uc-lt-alarm-headline {\n          font-size: 19px;\n        }\n      }\n    `}}},1671(e,t,n){n.d(t,{CY:()=>s,EA:()=>d,Hv:()=>c,SM:()=>u,Z_:()=>h,f0:()=>l});const r=Object.freeze({data:new Map,loading:!1,fetchedAt:0,error:null});function i(e){var t,n,r,i;if(null==e||"object"!=typeof e)return null;const a=e;if(void 0!==a.s&&(void 0!==a.lu||void 0!==a.lc)){const e=Number(null!==(t=a.lu)&&void 0!==t?t:a.lc);return Number.isFinite(e)?{t:1e3*e,state:String(a.s),attributes:null!==(n=a.a)&&void 0!==n?n:null}:null}if(void 0!==a.state){const e=null!==(r=a.last_changed)&&void 0!==r?r:a.last_updated,t=e?new Date(String(e)).getTime():NaN;return Number.isFinite(t)?{t,state:String(a.state),attributes:null!==(i=a.attributes)&&void 0!==i?i:null}:null}return null}const a=new class{constructor(){this._cache=new Map}query(e,t,n){var i;if(!e||0===t.entityIds.length)return r;const a=null!==(i=t.ttlMs)&&void 0!==i?i:3e5,o=this._cache.get(t.key),l=Date.now();(!o||l-o.fetchedAt>a)&&!(null==o?void 0:o.inflight)&&this._startFetch(e,t,n);const s=this._cache.get(t.key);return s?{data:s.data,loading:s.loading,fetchedAt:s.fetchedAt,error:s.error}:r}async fetch(e,t){var n,r;return e&&0!==t.entityIds.length?(await this._startFetch(e,t),null!==(r=null===(n=this._cache.get(t.key))||void 0===n?void 0:n.data)&&void 0!==r?r:new Map):new Map}invalidate(e){this._cache.delete(e)}clear(){this._cache.clear()}_startFetch(e,t,n){const r=this._cache.get(t.key);if(null==r?void 0:r.inflight)return r.inflight;const i=null!=r?r:{data:new Map,fetchedAt:0,loading:!1,error:null,inflight:null};i.loading=!0,this._cache.set(t.key,i);const a=this._doFetch(e,t).then(e=>{i.data=e,i.fetchedAt=Date.now(),i.error=null}).catch(e=>{i.error=e instanceof Error?e.message:String(e),i.fetchedAt=Date.now()}).finally(()=>{if(i.loading=!1,i.inflight=null,n)try{n()}catch(e){}});return i.inflight=a,a}async _doFetch(e,t){const n=t.entityIds.filter(e=>!!e);if(0===n.length)return new Map;const r=new Date(t.startMs).toISOString(),a=new Date(t.endMs).toISOString(),o=!t.withAttributes;let l={};try{l=await e.callWS({type:"history/history_during_period",start_time:r,end_time:a,entity_ids:n,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!1,no_attributes:o})}catch(t){const i=await e.callApi("GET",`history/period/${r}`,{filter_entity_id:n.join(","),end_time:a});if(l={},Array.isArray(i))for(const e of i)if(Array.isArray(e)&&e.length>0){const t=e[0];(null==t?void 0:t.entity_id)&&(l[t.entity_id]=e)}}const s=new Map;for(const[e,t]of Object.entries(l)){if(!Array.isArray(t)||0===t.length)continue;const n=[];for(const e of t){const t=i(e);t&&n.push(t)}n.length>0&&(n.sort((e,t)=>e.t-t.t),s.set(e,n))}return s}},o=new Set(["unavailable","unknown","none","","null"]);function l(e,t){var n;if(!e||0===e.length)return[];const r=null==t?void 0:t.attribute,i=[];for(const t of e){const e=r?null===(n=t.attributes)||void 0===n?void 0:n[r]:t.state;if(null==e)continue;const a=String(e).trim().toLowerCase();if(o.has(a))continue;const l=Number(e);Number.isFinite(l)&&i.push({t:t.t,v:l})}return i}function s(e,t,n){if(0===e.length)return null;if(1===e.length)return e[0].v;const r=null!=t?t:e[0].t,i=null!=n?n:e[e.length-1].t;if(i<=r)return e[e.length-1].v;let a=0,o=0;for(let t=0;t<e.length;t++){const n=e[t],l=Math.max(n.t,r),s=Math.min(t+1<e.length?e[t+1].t:i,i)-l;s<=0||(a+=n.v*s,o+=s)}return o<=0?e[e.length-1].v:a/o}function d(e,t,n,r){if(0===e.length)return null;if(1===e.length)return e[0].v;const i=null!=n?n:e[0].t,a=null!=r?r:e[e.length-1].t,o=[];let l=0;for(let t=0;t<e.length;t++){const n=e[t],r=Math.max(n.t,i),s=Math.min(t+1<e.length?e[t+1].t:a,a)-r;s<=0||(o.push({v:n.v,ms:s}),l+=s)}if(0===o.length||l<=0)return e[e.length-1].v;o.sort((e,t)=>e.v-t.v);const s=l*Math.min(Math.max(t,0),1);let d=0;for(const e of o)if(d+=e.ms,d>=s)return e.v;return o[o.length-1].v}function c(e,t){var n,r;if(e.length<3)return null;const i=null!==(n=null==t?void 0:t.floor)&&void 0!==n?n:0,a=null!==(r=null==t?void 0:t.riseToleranceUnits)&&void 0!==r?r:1,o=[];let l=[e[0]];for(let t=1;t<e.length;t++){const n=e[t-1],r=e[t];r.v-n.v>a?(l.length>=2&&o.push(l),l=[r]):l.push(r)}if(l.length>=2&&o.push(l),0===o.length)return null;let s=0,d=0;for(const e of o){const t=e[0],n=e[e.length-1],r=t.v-n.v,i=n.t-t.t;i<=0||r<=0||(s+=r,d+=i)}const c=e[e.length-1].t-e[0].t,u=c>0?Math.min(d/c,1):0,h=(o[o.length-1],e.length>=2&&e[e.length-1].v-e[e.length-2].v>a);if(d<=0||s<=0)return{ratePerHour:0,msToEmpty:null,coverage:u,charging:h};const p=s/d*36e5,_=e[e.length-1].v-i;return{ratePerHour:p,msToEmpty:p>0&&_>0?_/p*36e5:null,coverage:u,charging:h}}function u(e,t){var n,r,i,a;if(e.length<2)return[];const o=t.startThreshold,l=null!==(n=t.stopThreshold)&&void 0!==n?n:.5*o,s=null!==(r=t.settleMs)&&void 0!==r?r:18e4,d=null!==(i=t.minDurationMs)&&void 0!==i?i:3e5,c=null!==(a=t.endMs)&&void 0!==a?a:e[e.length-1].t,u=[];let h=null,p=null,_=0,y=0,g=0,v=0,m=0;const f=e=>{if(null===h)return;const t=e-h;t>=d&&u.push({startMs:h,endMs:e,durationMs:t,peak:_,mean:g>0?y/g:_,areaHours:y/36e5}),h=null,p=null,_=0,y=0,g=0};for(let t=0;t<e.length;t++){const n=e[t],r=t+1<e.length?e[t+1].t:c,i=Math.max(r-n.t,0);null!==h?(_=Math.max(_,n.v),n.v<l?(null===p&&(p=n.t,v=y,m=g),y+=n.v*i,g+=i,r-p>=s&&(y=v,g=m,f(p))):(p=null,y+=n.v*i,g+=i)):n.v>=o&&(h=n.t,_=n.v,y=n.v*i,g=i,p=null)}return null!==h&&(null!==p?(y=v,g=m,f(p)):f(c)),u}function h(e,t,n){var r,i;if(!e||!t)return null;const a=null===(r=e.states)||void 0===r?void 0:r[t];if(!a)return null;const l=n?null===(i=a.attributes)||void 0===i?void 0:i[n]:a.state;if(null==l)return null;if(o.has(String(l).trim().toLowerCase()))return null;const s=Number(l);return Number.isFinite(s)?s:null}n.d(t,["ur",0,a])},3488(e,t,n){n.d(t,{SB:()=>s,b5:()=>l,gf:()=>o});var r=n(2618),i=n(378),a=n(6478);function o(e){var t,n,r,a;if(!e)return!1;try{const o=i.xd.checkIntegrationAuth(e);if("pro"===(null===(t=null==o?void 0:o.subscription)||void 0===t?void 0:t.tier)&&"active"===(null===(n=null==o?void 0:o.subscription)||void 0===n?void 0:n.status))return!0;if(i.xd.isAuthenticated()){const e=i.xd.getCurrentUser();if("pro"===(null===(r=null==e?void 0:e.subscription)||void 0===r?void 0:r.tier)&&"active"===(null===(a=null==e?void 0:e.subscription)||void 0===a?void 0:a.status))return!0}}catch(e){return!1}return!1}function l(e,t){return r.qy`
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
        ${(0,a.kg)("editor.pro.feature_locked",e,"Pro Feature")}
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
        ${(0,a.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
      </a>
    </div>
  `}function s(e,t){return r.qy`
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
          ${(0,a.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
      </div>
    </div>
  `}}};