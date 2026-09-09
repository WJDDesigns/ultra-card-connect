export const __webpack_esm_ids__=[514];export const __webpack_esm_modules__={9906(e,n,t){t.d(n,{UltraCleaningZonesModule:()=>x});var o=t(2618),i=t(7475),r=t(6478),a=t(3488),s=t(3820),c=t(7907);const d="cleaning_zones",l=3e5,u=new Set(["","unknown","unavailable","none"]);function g(e,n){const t=Number.isFinite(n)&&n>0?Math.round(n):7,o=e.interval_days;return"number"==typeof o&&Number.isFinite(o)&&o>0?Math.round(o):t}function p(e){if("string"!=typeof e||!e)return NaN;const n=Date.parse(e);return Number.isFinite(n)?n:NaN}function h(e){const n=function(e){if(!e||"object"!=typeof e)return null;const n=e,t="string"==typeof n.zone_id?n.zone_id:"";if(!t)return null;const o="string"==typeof n.cleaned_at?n.cleaned_at:"";if(!Number.isFinite(p(o)))return null;const i={zone_id:t,cleaned_at:o,source:"auto"===n.source?"auto":"manual"};return"string"==typeof n.by&&n.by&&(i.by=n.by),"string"==typeof n.note&&n.note&&(i.note=n.note),i}(e.payload);return n?{uid:e.uid,summary:e.summary,status:e.status,payload:n,cleanedAtMs:p(n.cleaned_at)}:null}const _=new class{constructor(){this._autoLastState=new Map,this._autoLastWrite=new Map,this._autoWriting=new Set}async getEvents(e,n,t){if(!e||!n)return[];const o=await s.N2.getRecords(e,n,d,t),i=[];for(const e of o){const n=h(e);n&&i.push(n)}return i.sort((e,n)=>n.cleanedAtMs-e.cleanedAtMs),i}eventsForZone(e,n,t){const o=e.filter(e=>e.payload.zone_id===n).sort((e,n)=>n.cleanedAtMs-e.cleanedAtMs);return"number"==typeof t&&t>0?o.slice(0,t):o}computeStatuses(e,n,t){var o;const i="number"==typeof t.nowMs?t.nowMs:Date.now(),r="number"==typeof t.graceDays&&Number.isFinite(t.graceDays)&&t.graceDays>0?t.graceDays:0,a=new Map,s=new Map;for(const e of n){const n=e.payload.zone_id;s.set(n,(null!==(o=s.get(n))&&void 0!==o?o:0)+1);const t=a.get(n);(!t||e.cleanedAtMs>t.cleanedAtMs)&&a.set(n,e)}return(e||[]).map(e=>{var n,o;const c=g(e,t.defaultIntervalDays),d=null!==(n=a.get(e.id))&&void 0!==n?n:null,l=null!==(o=s.get(e.id))&&void 0!==o?o:0;if(!d)return{zone:e,lastCleanedMs:null,daysSince:null,intervalDays:c,ratio:null,state:"never",dueInDays:null,lastBy:void 0,historyCount:l};const u=Math.max(0,(i-d.cleanedAtMs)/864e5),p=u/c,h=c-u;let _;return _=u>c+r?"overdue":u>=c?"due":p>=.75?"due_soon":"fresh",{zone:e,lastCleanedMs:d.cleanedAtMs,daysSince:u,intervalDays:c,ratio:p,state:_,dueInDays:h,lastBy:d.payload.by,historyCount:l}})}summarize(e){var n,t;const o={never:0,fresh:0,dueSoon:0,due:0,overdue:0,needsAttention:0,worst:null};let i=-1/0;for(const t of e){switch(t.state){case"never":o.never++;break;case"fresh":o.fresh++;break;case"due_soon":o.dueSoon++;break;case"due":o.due++;break;case"overdue":o.overdue++}if("due"===t.state||"overdue"===t.state){const e=null!==(n=t.ratio)&&void 0!==n?n:1;e>i&&(i=e,o.worst=t)}}return o.needsAttention=o.due+o.overdue+o.never,o.worst||(o.worst=null!==(t=e.find(e=>"never"===e.state))&&void 0!==t?t:null),o}resolveCleaner(e,n){var t,o;if(!e||!n)return;const i=null===(t=e.states)||void 0===t?void 0:t[n];if(!i)return;const r=null===(o=i.attributes)||void 0===o?void 0:o.friendly_name;return"string"==typeof r&&r.trim()?r.trim():n.split(".").pop()||void 0}async recordClean(e,n,t,o){var i,r;if(!e||!n||!(null==t?void 0:t.id))return null;const a=new Date("number"==typeof o.atMs&&Number.isFinite(o.atMs)?o.atMs:Date.now()).toISOString(),c={zone_id:t.id,cleaned_at:a,source:o.source};o.by&&(c.by=o.by),o.note&&(c.note=o.note);const l=(o.summary||"").trim()||`${t.name||t.id} cleaned`;await s.N2.addRecord(e,n,d,l,c);const u=await s.N2.getRecords(e,n,d),g=[];for(const e of u){const n=h(e);n&&g.push(n)}const p=null!==(i=g.find(e=>e.payload.zone_id===t.id&&e.payload.cleaned_at===a))&&void 0!==i?i:null;return p&&"completed"!==p.status&&(await s.N2.setStatus(e,n,p.uid,"completed"),p.status="completed"),"number"==typeof o.historyLimit&&o.historyLimit>0&&await this.pruneHistory(e,n,t.id,o.historyLimit,g),null!==(r=null==p?void 0:p.uid)&&void 0!==r?r:null}async undoLastClean(e,n,t){if(!e||!n||!t)return!1;const o=await this.getEvents(e,n),i=this.eventsForZone(o,t)[0];return!!i&&(await s.N2.removeRecord(e,n,i.uid),!0)}async pruneHistory(e,n,t,o,i){if(!e||!n||!t)return 0;if(!Number.isFinite(o)||o<=0)return 0;const r=null!=i?i:await this.getEvents(e,n),a=this.eventsForZone(r,t).slice(Math.round(o));for(const t of a)await s.N2.removeRecord(e,n,t.uid);return a.length}async clearZoneHistory(e,n,t){if(!e||!n||!t)return 0;const o=await this.getEvents(e,n),i=this.eventsForZone(o,t);for(const t of i)await s.N2.removeRecord(e,n,t.uid);return i.length}checkAutoCleans(e,n,t,o,i={}){var r,a,s,c;if(!e||!n||!Array.isArray(t)||0===t.length)return;const d=Date.now(),g=new Map;for(const e of o||[]){const n=g.get(e.payload.zone_id);(void 0===n||e.cleanedAtMs>n)&&g.set(e.payload.zone_id,e.cleanedAtMs)}for(const o of t){const t=(o.auto_clean_entity||"").trim(),p=(o.auto_clean_state||"").trim();if(!t||!p||!o.id)continue;const h=`${n}|${o.id}`,_=null===(a=null===(r=e.states)||void 0===r?void 0:r[t])||void 0===a?void 0:a.state,v="string"==typeof _?_.trim():"",y=this._autoLastState.get(h);if(void 0===y){this._autoLastState.set(h,v);continue}if(y===v)continue;if(this._autoLastState.set(h,v),v.toLowerCase()!==p.toLowerCase())continue;if(u.has(y.toLowerCase()))continue;if(this._autoWriting.has(h))continue;if(d-(null!==(s=this._autoLastWrite.get(h))&&void 0!==s?s:0)<l)continue;const m=g.get(o.id);if(void 0!==m&&d-m<l)continue;this._autoWriting.add(h),this._autoLastWrite.set(h,d);const z={source:"auto",atMs:d};i.by&&(z.by=i.by),void 0!==i.historyLimit&&(z.historyLimit=i.historyLimit);const b=null===(c=i.summaryFor)||void 0===c?void 0:c.call(i,o);b&&(z.summary=b),this.recordClean(e,n,o,z).then(()=>{var e;this._autoWriting.delete(h),null===(e=i.onWritten)||void 0===e||e.call(i)}).catch(()=>{this._autoWriting.delete(h)})}}resetAutoCleanState(e){if(!e)return this._autoLastState.clear(),this._autoLastWrite.clear(),void this._autoWriting.clear();const n=`${e}|`;for(const e of Array.from(this._autoLastState.keys()))e.startsWith(n)&&this._autoLastState.delete(e);for(const e of Array.from(this._autoLastWrite.keys()))e.startsWith(n)&&this._autoLastWrite.delete(e)}},v=.03;function y(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function m(e){return Math.round(1e3*e)/1e3}function z(e){if("number"!=typeof e||!Number.isFinite(e))return 0;const n=Math.round(e)%360;return n<0?n+360:n}function b(e,n,t){const o=t*Math.PI/180,i=Math.cos(o),r=Math.sin(o);return{x:e*i-n*r,y:e*r+n*i}}function f(e,n,t,o){return 180*Math.atan2(o-n,t-e)/Math.PI}class x extends i.m{constructor(){super(...arguments),this.metadata={type:"cleaning_zones",title:"Cleaning Zones",description:"Floorplan with per-room cleaning schedules and staleness heatmap",author:"WJD Designs",version:"1.0.0",icon:"mdi:spray-bottle",category:"data",tags:["pro","premium","cleaning","chores","floorplan","rooms","schedule","housekeeping"]},this._preview=new Map,this._editor=new Map}createDefault(e,n){return{id:e||this.generateId("cleaning_zones"),type:"cleaning_zones",todo_entity:"",floorplan_image:"",zones:[],view_mode:"both",default_interval_days:7,overdue_grace_days:1,sort_mode:"staleness",title:"",show_title:!0,show_summary_bar:!0,show_legend:!0,show_zone_labels:!0,staleness_style:"heat",zone_opacity:.55,require_confirm:!1,log_cleaner:!1,person_entity:"",history_limit:20,fresh_color:"",due_color:"",overdue_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const n=[],t=e;return e.id||n.push("Module ID is required"),e.type||n.push("Module type is required"),t.todo_entity||n.push("Select a to-do list to store the cleaning history"),{valid:0===n.length,errors:n}}getRuntimeEntityIds(e){const n=e,t=[];n.todo_entity&&t.push(n.todo_entity),n.log_cleaner&&n.person_entity&&t.push(n.person_entity);for(const e of n.zones||[])e.auto_clean_entity&&t.push(e.auto_clean_entity);return t}renderGeneralTab(e,n,t,i){var s;const c=e,d=(null===(s=null==n?void 0:n.locale)||void 0===s?void 0:s.language)||"en";return(0,a.gf)(n)?o.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        ${this._renderStorageSection(c,n,i,d)}
        ${this._renderFloorplanSection(c,n,i,d)}
        ${this._renderZonesSection(c,n,i,d)}
        ${this._renderDisplaySection(c,n,i,d)}
        ${this._renderAdvancedSection(c,n,i,d)}
        ${this._renderColorsSection(c,n,i,d)}
      </div>
    `:(0,a.b5)(d,(0,r.kg)("editor.cleaning_zones.pro_description",d,"Cleaning Zones is a Pro feature: draw rooms on your floorplan, give each one a cleaning interval, and watch them shade from fresh to overdue. Tap a room to log that it was cleaned."))}_renderStorageSection(e,n,t,i){const a=e.todo_entity||"",c=!a||!n||(0,s.pC)(n,a);return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,r.kg)("editor.cleaning_zones.storage_section",i,"Storage")}
        </div>
        <div class="uc-cz-note">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <span>
            ${(0,r.kg)("editor.cleaning_zones.storage_help",i,"Cleaning history lives on a to-do list so every device in the house sees the same log. Create one under Settings → Devices & Services → Helpers → To-do list (Local to-do), name it something like “Cleaning”, then pick it here.")}
          </span>
        </div>
        ${this.renderFieldSection((0,r.kg)("editor.cleaning_zones.todo_entity",i,"Cleaning history list"),(0,r.kg)("editor.cleaning_zones.todo_entity_desc",i,"A Local To-do helper used as storage. Entries are saved as completed items, so they stay out of your active to-do view."),n,{todo_entity:a},[{name:"todo_entity",selector:{entity:{domain:"todo"}}}],n=>{var o,i;t({todo_entity:null!==(i=null===(o=n.detail.value)||void 0===o?void 0:o.todo_entity)&&void 0!==i?i:""});const r=this._preview.get(e.id);r&&(r.lastFetchedAt=0),_.resetAutoCleanState(a),this.triggerPreviewUpdate()})}
        ${c?o.s6:o.qy`
              <div class="uc-cz-warn">
                <ha-icon icon="mdi:alert-outline"></ha-icon>
                <span>
                  ${(0,r.kg)("editor.cleaning_zones.todo_no_description",i,"This list cannot store item descriptions (the Shopping List behaves this way). Tracking still works, but the stored data is appended to each item title and looks messy in the Home Assistant to-do panel. A Local To-do helper avoids that.")}
                </span>
              </div>
            `}
      </div>
    `}_renderFloorplanSection(e,n,t,i){return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,r.kg)("editor.cleaning_zones.floorplan_section",i,"Floorplan")}
        </div>
        <div class="uc-cz-section-desc">
          ${(0,r.kg)("editor.cleaning_zones.floorplan_section_desc",i,"Optional. Without an image the list view still works as a plain room-chore tracker.")}
        </div>
        ${this.renderFileField((0,r.kg)("editor.cleaning_zones.floorplan_image",i,"Floorplan image"),(0,r.kg)("editor.cleaning_zones.floorplan_image_desc",i,"A top-down plan of your home. Any image works — a screenshot of a vacuum map is a good shortcut."),n,e.floorplan_image||"",e=>{t({floorplan_image:e}),this.triggerPreviewUpdate()})}
        ${this.renderSegmentedField((0,r.kg)("editor.cleaning_zones.view_mode",i,"View"),(0,r.kg)("editor.cleaning_zones.view_mode_desc",i,"What the card shows. Map falls back to the list when no image is set."),e.view_mode||"both",[{value:"map",label:(0,r.kg)("editor.cleaning_zones.view_map",i,"Map")},{value:"list",label:(0,r.kg)("editor.cleaning_zones.view_list",i,"List")},{value:"both",label:(0,r.kg)("editor.cleaning_zones.view_both",i,"Both")}],e=>{t({view_mode:e}),this.triggerPreviewUpdate()})}
      </div>
    `}_renderZonesSection(e,n,t,i){const a=e.zones||[];return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,r.kg)("editor.cleaning_zones.zones_section",i,"Zones")}
        </div>
        <div class="uc-cz-section-desc">
          ${(0,r.kg)("editor.cleaning_zones.zones_section_desc",i,"One entry per room or area. A name and an interval are all that is required.")}
        </div>

        ${this._renderPlacementMap(e,n,t,i)}
        ${0===a.length?o.qy`<div class="uc-cz-empty-rows">
              ${(0,r.kg)("editor.cleaning_zones.no_zones_editor",i,"No zones yet. Add one below, or drag a rectangle on the floorplan above.")}
            </div>`:o.s6}
        ${a.map((o,r)=>this._renderZoneRow(o,r,e,n,t,i))}

        <button
          class="uc-cz-add-btn"
          type="button"
          @click=${()=>this._addZone(e,t,i)}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
          ${(0,r.kg)("editor.cleaning_zones.add_zone",i,"Add zone")}
        </button>
      </div>
    `}_renderPlacementMap(e,n,t,i){const a=this._imageUrl(n,e.floorplan_image);if(!a)return o.qy`
        <div class="uc-cz-note">
          <ha-icon icon="mdi:image-outline"></ha-icon>
          <span>
            ${(0,r.kg)("editor.cleaning_zones.placement_needs_image",i,"Upload a floorplan above to place zones by dragging. You can still add zones and set their position numerically.")}
          </span>
        </div>
      `;const s=this._ensureEditor(e.id),c=e.zones||[];return o.qy`
      <div class="uc-cz-placement">
        <div class="uc-cz-placement-hint">
          ${(0,r.kg)("editor.cleaning_zones.placement_hint",i,"Drag on empty space to draw a new zone. Drag a zone to move it, its bottom-right corner to resize, or the knob above it to rotate. Hold Shift while rotating to snap to 15°.")}
        </div>
        <div
          class="uc-cz-canvas"
          @pointerdown=${n=>this._onCanvasPointerDown(n,e,t,i)}
          @pointermove=${n=>this._onCanvasPointerMove(n,e,t)}
          @pointerup=${n=>this._onCanvasPointerUp(n,e,t,i)}
          @pointercancel=${n=>this._onCanvasPointerUp(n,e,t,i)}
        >
          <img src=${a} alt="" draggable="false" />
          ${c.map(e=>o.qy`
              <div
                class="uc-cz-place-zone ${s.activeZoneId===e.id?"active":""}"
                data-zone=${e.id}
                style=${this._rectStyle(e,e.rotation)}
              >
                <span class="uc-cz-place-label">${e.name||"—"}</span>
                <span
                  class="uc-cz-rotate"
                  data-rotate=${e.id}
                  title=${(0,r.kg)("editor.cleaning_zones.rotate_handle",i,"Drag to rotate")}
                >
                  <ha-icon icon="mdi:rotate-right"></ha-icon>
                </span>
                <span class="uc-cz-handle" data-handle=${e.id}></span>
              </div>
            `)}
          ${s.draft?o.qy`<div class="uc-cz-draft" style=${this._rectStyle(s.draft)}></div>`:o.s6}
        </div>
        ${s.message?o.qy`<div class="uc-cz-placement-msg">${s.message}</div>`:o.s6}
      </div>
    `}_renderZoneRow(e,n,t,i,a,s){var c;const d=this._ensureEditor(t.id),l=d.expanded.has(e.id),u=t.zones||[],p=null!==(c=t.default_interval_days)&&void 0!==c?c:7,h=g(e,p);return o.qy`
      <div class="uc-cz-row ${l?"expanded":""}" data-uc-role="pane">
        <div class="uc-cz-row-head">
          <div class="uc-cz-row-icon">
            <ha-icon icon=${e.icon||"mdi:broom"}></ha-icon>
          </div>
          <div class="uc-cz-row-text">
            <div class="uc-cz-row-name">
              ${e.name||(0,r.kg)("editor.cleaning_zones.unnamed_zone",s,"Unnamed zone")}
            </div>
            <div class="uc-cz-row-sub">
              ${(0,r.kg)("editor.cleaning_zones.row_every_days",s,"every {days} days").replace("{days}",String(h))}
              ${e.auto_clean_entity?o.qy` · <ha-icon class="uc-cz-inline-icon" icon="mdi:robot-vacuum"></ha-icon>`:o.s6}
            </div>
          </div>
          <button
            class="uc-cz-icon-btn"
            type="button"
            ?disabled=${0===n}
            title=${(0,r.kg)("editor.cleaning_zones.move_up",s,"Move up")}
            aria-label=${(0,r.kg)("editor.cleaning_zones.move_up",s,"Move up")}
            @click=${()=>this._moveZone(t,n,-1,a)}
          >
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button
            class="uc-cz-icon-btn"
            type="button"
            ?disabled=${n===u.length-1}
            title=${(0,r.kg)("editor.cleaning_zones.move_down",s,"Move down")}
            aria-label=${(0,r.kg)("editor.cleaning_zones.move_down",s,"Move down")}
            @click=${()=>this._moveZone(t,n,1,a)}
          >
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
          <button
            class="uc-cz-icon-btn expand ${l?"on":""}"
            type="button"
            title=${l?(0,r.kg)("editor.cleaning_zones.collapse",s,"Collapse"):(0,r.kg)("editor.cleaning_zones.edit",s,"Edit")}
            aria-label=${l?(0,r.kg)("editor.cleaning_zones.collapse",s,"Collapse"):(0,r.kg)("editor.cleaning_zones.edit",s,"Edit")}
            @click=${()=>{l?d.expanded.delete(e.id):d.expanded.add(e.id),this.triggerPreviewUpdate()}}
          >
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="uc-cz-icon-btn danger"
            type="button"
            title=${(0,r.kg)("editor.cleaning_zones.delete_zone",s,"Delete zone")}
            aria-label=${(0,r.kg)("editor.cleaning_zones.delete_zone",s,"Delete zone")}
            @click=${()=>this._deleteZone(t,n,i,a)}
          >
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>

        ${l?o.qy`
              <div class="uc-cz-row-body">
                ${this.renderFieldSection((0,r.kg)("editor.cleaning_zones.zone_name",s,"Name"),(0,r.kg)("editor.cleaning_zones.zone_name_desc",s,"What you call this area — “Kitchen”, “Upstairs bathroom”."),i,{name:e.name||""},[this.textField("name")],e=>{var o,i;return this._patchZone(t,n,{name:null!==(i=null===(o=e.detail.value)||void 0===o?void 0:o.name)&&void 0!==i?i:""},a)})}
                ${this.renderIconField((0,r.kg)("editor.cleaning_zones.zone_icon",s,"Icon"),(0,r.kg)("editor.cleaning_zones.zone_icon_desc",s,"Shown in the list view and on larger map zones."),i,e.icon||"",e=>this._patchZone(t,n,{icon:e},a))}
                ${this.renderSliderField((0,r.kg)("editor.cleaning_zones.zone_interval",s,"Clean every"),(0,r.kg)("editor.cleaning_zones.zone_interval_desc",s,"How often this area should be cleaned."),h,p,1,90,1,e=>this._patchZone(t,n,{interval_days:e},a),(0,r.kg)("editor.cleaning_zones.unit_days",s," days"))}
                ${void 0!==e.interval_days?o.qy`<button
                      class="uc-cz-linkbtn"
                      type="button"
                      @click=${()=>this._clearZoneField(t,n,"interval_days",a)}
                    >
                      ${(0,r.kg)("editor.cleaning_zones.use_default_interval",s,"Use the module default ({days} days)").replace("{days}",String(p))}
                    </button>`:o.s6}
                ${this.renderColorField((0,r.kg)("editor.cleaning_zones.zone_color",s,"Zone color override"),(0,r.kg)("editor.cleaning_zones.zone_color_desc",s,"Leave blank to use the fresh → overdue gradient."),i,e.color||"","",e=>this._patchZone(t,n,{color:e},a))}
                ${this.renderFieldSection((0,r.kg)("editor.cleaning_zones.zone_notes",s,"Notes"),(0,r.kg)("editor.cleaning_zones.zone_notes_desc",s,"Optional reminder — “mop, don’t vacuum”, “move the rug”."),i,{notes:e.notes||""},[this.textField("notes",!0)],e=>{var o,i;return this._patchZone(t,n,{notes:null!==(i=null===(o=e.detail.value)||void 0===o?void 0:o.notes)&&void 0!==i?i:""},a)})}
                ${this._renderGeometryFields(e,n,t,i,a,s)}
                ${this._renderAutoCleanGroup(e,n,t,i,a,s)}
              </div>
            `:o.s6}
      </div>
    `}_renderGeometryFields(e,n,t,i,a,s){if(!t.floorplan_image)return o.s6;const c=e=>Math.round(100*y(e)),d=(e,n,t)=>Object.assign(Object.assign({},this.numberField(e,t,100,1)),{label:n});return o.qy`
      <div class="field-container uc-ultra-field-wrap" style="margin-bottom: 16px;">
        <div class="field-title">
          ${(0,r.kg)("editor.cleaning_zones.zone_position",s,"Position on the floorplan")}
        </div>
        <div class="field-description">
          ${(0,r.kg)("editor.cleaning_zones.zone_position_desc",s,"Percentages of the image, measured from the top-left corner. Usually easier to set by dragging on the map above.")}
        </div>
        ${this.renderUcForm(i,{zone_x:c(e.x),zone_y:c(e.y),zone_w:c(e.width),zone_h:c(e.height)},[this.gridField([d("zone_x",(0,r.kg)("editor.cleaning_zones.pos_x",s,"Left %"),0),d("zone_y",(0,r.kg)("editor.cleaning_zones.pos_y",s,"Top %"),0),d("zone_w",(0,r.kg)("editor.cleaning_zones.pos_w",s,"Width %"),1),d("zone_h",(0,r.kg)("editor.cleaning_zones.pos_h",s,"Height %"),1)])],o=>{var i,r,s,d;const l=o.detail.value||{};this._patchZone(t,n,{x:y(Number(null!==(i=l.zone_x)&&void 0!==i?i:c(e.x))/100),y:y(Number(null!==(r=l.zone_y)&&void 0!==r?r:c(e.y))/100),width:y(Number(null!==(s=l.zone_w)&&void 0!==s?s:c(e.width))/100),height:y(Number(null!==(d=l.zone_h)&&void 0!==d?d:c(e.height))/100)},a)},!0)}
      </div>
      ${this.renderSliderField((0,r.kg)("editor.cleaning_zones.zone_rotation",s,"Rotation"),(0,r.kg)("editor.cleaning_zones.zone_rotation_desc",s,"Angle the zone to line up with a room that is not square to the image, such as on an isometric floorplan."),z(e.rotation),0,0,359,1,e=>this._patchZone(t,n,{rotation:z(e)},a),(0,r.kg)("editor.cleaning_zones.unit_degrees",s,"°"))}
    `}_renderAutoCleanGroup(e,n,t,i,a,s){const c=this._ensureEditor(t.id),d=c.advanced.has(e.id)||!!e.auto_clean_entity;return o.qy`
      <button
        class="uc-cz-subtoggle ${d?"on":""}"
        type="button"
        @click=${()=>{c.advanced.has(e.id)?c.advanced.delete(e.id):c.advanced.add(e.id),this.triggerPreviewUpdate()}}
      >
        <ha-icon icon=${d?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
        ${(0,r.kg)("editor.cleaning_zones.auto_clean_group",s,"Automatic cleaning")}
      </button>
      ${d?o.qy`
            <div class="uc-cz-subgroup">
              <div class="uc-cz-section-desc">
                ${(0,r.kg)("editor.cleaning_zones.auto_clean_desc",s,"Optional. When this entity enters the state below, the zone is marked clean automatically — handy for a robot vacuum that reports which room it finished.")}
              </div>
              ${this.renderFieldSection((0,r.kg)("editor.cleaning_zones.auto_clean_entity",s,"Trigger entity"),"",i,{auto_clean_entity:e.auto_clean_entity||""},[{name:"auto_clean_entity",selector:{entity:{}}}],e=>{var o,i;return this._patchZone(t,n,{auto_clean_entity:null!==(i=null===(o=e.detail.value)||void 0===o?void 0:o.auto_clean_entity)&&void 0!==i?i:""},a)})}
              ${this.renderFieldSection((0,r.kg)("editor.cleaning_zones.auto_clean_state",s,"State that means “cleaned”"),(0,r.kg)("editor.cleaning_zones.auto_clean_state_desc",s,"For example “docked” or “returning”. Matching is case-insensitive."),i,{auto_clean_state:e.auto_clean_state||""},[this.textField("auto_clean_state")],e=>{var o,i;return this._patchZone(t,n,{auto_clean_state:null!==(i=null===(o=e.detail.value)||void 0===o?void 0:o.auto_clean_state)&&void 0!==i?i:""},a)})}
            </div>
          `:o.s6}
    `}_renderDisplaySection(e,n,t,i){var a;const s=e=>{t(e),this.triggerPreviewUpdate()};return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,r.kg)("editor.cleaning_zones.display_section",i,"Display")}
        </div>
        ${this.renderSettingsSection("","",[{title:(0,r.kg)("editor.cleaning_zones.show_title",i,"Show title"),description:"",hass:n,data:{show_title:!1!==e.show_title},schema:[this.booleanField("show_title")],onChange:e=>s({show_title:e.detail.value.show_title})},{title:(0,r.kg)("editor.cleaning_zones.title",i,"Title override"),description:(0,r.kg)("editor.cleaning_zones.title_desc",i,"Leave blank to use “Cleaning Zones”."),hass:n,data:{title:e.title||""},schema:[this.textField("title")],onChange:e=>s({title:e.detail.value.title})},{title:(0,r.kg)("editor.cleaning_zones.show_summary_bar",i,"Show summary bar"),description:(0,r.kg)("editor.cleaning_zones.show_summary_bar_desc",i,"A one-line count of what needs attention, plus the most overdue room."),hass:n,data:{show_summary_bar:!1!==e.show_summary_bar},schema:[this.booleanField("show_summary_bar")],onChange:e=>s({show_summary_bar:e.detail.value.show_summary_bar})},{title:(0,r.kg)("editor.cleaning_zones.show_legend",i,"Show legend"),description:"",hass:n,data:{show_legend:!1!==e.show_legend},schema:[this.booleanField("show_legend")],onChange:e=>s({show_legend:e.detail.value.show_legend})},{title:(0,r.kg)("editor.cleaning_zones.show_zone_labels",i,"Show zone labels"),description:(0,r.kg)("editor.cleaning_zones.show_zone_labels_desc",i,"Labels are hidden automatically on zones that are too small to fit them."),hass:n,data:{show_zone_labels:!1!==e.show_zone_labels},schema:[this.booleanField("show_zone_labels")],onChange:e=>s({show_zone_labels:e.detail.value.show_zone_labels})}])}
        ${this.renderSegmentedField((0,r.kg)("editor.cleaning_zones.staleness_style",i,"Staleness style"),(0,r.kg)("editor.cleaning_zones.staleness_style_desc",i,"How overdue rooms stand out on the map."),e.staleness_style||"heat",[{value:"heat",label:(0,r.kg)("editor.cleaning_zones.style_heat",i,"Heat")},{value:"outline",label:(0,r.kg)("editor.cleaning_zones.style_outline",i,"Outline")},{value:"badge",label:(0,r.kg)("editor.cleaning_zones.style_badge",i,"Badge")}],e=>s({staleness_style:e}))}
        ${this.renderSliderField((0,r.kg)("editor.cleaning_zones.zone_opacity",i,"Zone opacity"),(0,r.kg)("editor.cleaning_zones.zone_opacity_desc",i,"How strongly zone tints cover the floorplan."),null!==(a=e.zone_opacity)&&void 0!==a?a:.55,.55,.1,1,.05,e=>s({zone_opacity:e}),"")}
        ${this.renderSegmentedField((0,r.kg)("editor.cleaning_zones.sort_mode",i,"List order"),(0,r.kg)("editor.cleaning_zones.sort_mode_desc",i,"How rooms are ordered in the list view."),e.sort_mode||"staleness",[{value:"staleness",label:(0,r.kg)("editor.cleaning_zones.sort_staleness",i,"Most overdue")},{value:"name",label:(0,r.kg)("editor.cleaning_zones.sort_name",i,"Name")},{value:"interval",label:(0,r.kg)("editor.cleaning_zones.sort_interval",i,"Interval")}],e=>s({sort_mode:e}))}
      </div>
    `}_renderAdvancedSection(e,n,t,i){var a,s,c;const d=e=>{t(e),this.triggerPreviewUpdate()};return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,r.kg)("editor.cleaning_zones.advanced_section",i,"Advanced")}
        </div>
        ${this.renderSliderField((0,r.kg)("editor.cleaning_zones.default_interval",i,"Default interval"),(0,r.kg)("editor.cleaning_zones.default_interval_desc",i,"Used by any zone that has not set its own interval."),null!==(a=e.default_interval_days)&&void 0!==a?a:7,7,1,90,1,e=>d({default_interval_days:e}),(0,r.kg)("editor.cleaning_zones.unit_days",i," days"))}
        ${this.renderSliderField((0,r.kg)("editor.cleaning_zones.overdue_grace",i,"Overdue grace period"),(0,r.kg)("editor.cleaning_zones.overdue_grace_desc",i,"How many days past the interval a room stays merely “due” before it turns overdue."),null!==(s=e.overdue_grace_days)&&void 0!==s?s:1,1,0,30,1,e=>d({overdue_grace_days:e}),(0,r.kg)("editor.cleaning_zones.unit_days",i," days"))}
        ${this.renderSettingsSection("","",[{title:(0,r.kg)("editor.cleaning_zones.require_confirm",i,"Confirm before logging"),description:(0,r.kg)("editor.cleaning_zones.require_confirm_desc",i,"Asks for a second tap. Worth turning on for a wall tablet where stray taps happen."),hass:n,data:{require_confirm:!!e.require_confirm},schema:[this.booleanField("require_confirm")],onChange:e=>d({require_confirm:e.detail.value.require_confirm})},{title:(0,r.kg)("editor.cleaning_zones.log_cleaner",i,"Record who cleaned"),description:(0,r.kg)("editor.cleaning_zones.log_cleaner_desc",i,"Stores a name alongside each entry so you can see who did what."),hass:n,data:{log_cleaner:!!e.log_cleaner},schema:[this.booleanField("log_cleaner")],onChange:e=>d({log_cleaner:e.detail.value.log_cleaner})}])}
        ${e.log_cleaner?o.qy`<div>
              ${this.renderFieldSection((0,r.kg)("editor.cleaning_zones.person_entity",i,"Person"),(0,r.kg)("editor.cleaning_zones.person_entity_desc",i,"Whose name to record. The card cannot tell who tapped it, so this is a fixed attribution."),n,{person_entity:e.person_entity||""},[{name:"person_entity",selector:{entity:{domain:"person"}}}],e=>{var n,t;return d({person_entity:null!==(t=null===(n=e.detail.value)||void 0===n?void 0:n.person_entity)&&void 0!==t?t:""})})}
            </div>`:o.s6}
        ${this.renderSliderField((0,r.kg)("editor.cleaning_zones.history_limit",i,"History kept per zone"),(0,r.kg)("editor.cleaning_zones.history_limit_desc",i,"Older entries are deleted so the to-do list does not grow without bound."),null!==(c=e.history_limit)&&void 0!==c?c:20,20,1,100,1,e=>d({history_limit:e}),"")}
      </div>
    `}_renderColorsSection(e,n,t,i){const a=e=>{t(e),this.triggerPreviewUpdate()};return o.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,r.kg)("editor.cleaning_zones.colors_section",i,"Colors")}
        </div>
        ${this.renderColorField((0,r.kg)("editor.cleaning_zones.fresh_color",i,"Fresh"),"",n,e.fresh_color||"","var(--success-color, #4caf50)",e=>a({fresh_color:e}))}
        ${this.renderColorField((0,r.kg)("editor.cleaning_zones.due_color",i,"Due"),"",n,e.due_color||"","var(--warning-color, #ff9800)",e=>a({due_color:e}))}
        ${this.renderColorField((0,r.kg)("editor.cleaning_zones.overdue_color",i,"Overdue"),"",n,e.overdue_color||"","var(--error-color, #f44336)",e=>a({overdue_color:e}))}
        ${this.renderColorField((0,r.kg)("editor.cleaning_zones.text_color",i,"Text"),"",n,e.text_color||"","var(--primary-text-color)",e=>a({text_color:e}))}
        ${this.renderColorField((0,r.kg)("editor.cleaning_zones.secondary_text_color",i,"Secondary text"),"",n,e.secondary_text_color||"","var(--secondary-text-color)",e=>a({secondary_text_color:e}))}
        ${this.renderColorField((0,r.kg)("editor.cleaning_zones.card_background_color",i,"Card background"),"",n,e.card_background_color||"","var(--card-background-color)",e=>a({card_background_color:e}))}
      </div>
    `}_ensureEditor(e){let n=this._editor.get(e);return n||(n={expanded:new Set,advanced:new Set,drawing:!1,draft:null,activeZoneId:"",mode:null,grabDx:0,grabDy:0,grabAngle:0,message:""},this._editor.set(e,n)),n}_patchZone(e,n,t,o){const i=[...e.zones||[]],r=i[n];r&&(i[n]=Object.assign(Object.assign({},r),t),o({zones:i}),this.triggerPreviewUpdate())}_clearZoneField(e,n,t,o){const i=[...e.zones||[]],r=i[n];if(!r)return;const a=Object.assign({},r);delete a[t],i[n]=a,o({zones:i}),this.triggerPreviewUpdate()}_addZone(e,n,t,o){var i,a,s,c;const d=[...e.zones||[]],l=.05*Math.min(d.length,8),u={id:this.generateId("zone"),name:(0,r.kg)("editor.cleaning_zones.new_zone_name",t,"New zone"),x:m(null!==(i=null==o?void 0:o.x)&&void 0!==i?i:.1+l),y:m(null!==(a=null==o?void 0:o.y)&&void 0!==a?a:.1+l),width:m(null!==(s=null==o?void 0:o.width)&&void 0!==s?s:.25),height:m(null!==(c=null==o?void 0:o.height)&&void 0!==c?c:.2),icon:"mdi:broom"};return d.push(u),n({zones:d}),this._ensureEditor(e.id).expanded.add(u.id),this.triggerPreviewUpdate(),u}_deleteZone(e,n,t,o){const i=[...e.zones||[]],[r]=i.splice(n,1);if(o({zones:i}),!r)return;const a=this._ensureEditor(e.id);a.expanded.delete(r.id),a.advanced.delete(r.id),t&&e.todo_entity&&_.clearZoneHistory(t,e.todo_entity,r.id).then(()=>{const n=this._preview.get(e.id);n&&(n.lastFetchedAt=0),this.triggerPreviewUpdate()}).catch(()=>{}),this.triggerPreviewUpdate()}_moveZone(e,n,t,o){const i=[...e.zones||[]],r=n+t;if(r<0||r>=i.length)return;const[a]=i.splice(n,1);a&&(i.splice(r,0,a),o({zones:i}),this.triggerPreviewUpdate())}_pointFromEvent(e,n){const t=n.getBoundingClientRect(),o=t.width||1,i=t.height||1,r=e.clientX-t.left,a=e.clientY-t.top;return{x:y(r/o),y:y(a/i),px:r,py:a,imageW:o,imageH:i}}_zoneCenterPx(e,n,t){return{x:(e.x+e.width/2)*n,y:(e.y+e.height/2)*t}}_onCanvasPointerDown(e,n,t,o){var i,r,a,s,c,d,l;const u=e.currentTarget,g=e.target,p=this._ensureEditor(n.id),h=this._pointFromEvent(e,u);e.preventDefault(),null===(i=u.setPointerCapture)||void 0===i||i.call(u,e.pointerId),p.message="";const _=null===(a=null===(r=g.closest)||void 0===r?void 0:r.call(g,"[data-rotate]"))||void 0===a?void 0:a.getAttribute("data-rotate");if(_){const e=(n.zones||[]).find(e=>e.id===_);if(p.activeZoneId=_,p.mode="rotate",e){const n=this._zoneCenterPx(e,h.imageW,h.imageH);p.grabAngle=f(n.x,n.y,h.px,h.py)-z(e.rotation)}return void this.triggerPreviewUpdate(!0)}const v=null===(c=null===(s=g.closest)||void 0===s?void 0:s.call(g,"[data-handle]"))||void 0===c?void 0:c.getAttribute("data-handle");if(v)return p.activeZoneId=v,p.mode="resize",void this.triggerPreviewUpdate(!0);const y=null===(l=null===(d=g.closest)||void 0===d?void 0:d.call(g,"[data-zone]"))||void 0===l?void 0:l.getAttribute("data-zone");if(y){const e=(n.zones||[]).find(e=>e.id===y);return p.activeZoneId=y,p.mode="move",p.grabDx=e?h.x-e.x:0,p.grabDy=e?h.y-e.y:0,void this.triggerPreviewUpdate(!0)}p.drawing=!0,p.mode=null,p.activeZoneId="",p.draft={x:h.x,y:h.y,width:0,height:0},p.grabDx=h.x,p.grabDy=h.y,this.triggerPreviewUpdate(!0)}_onCanvasPointerMove(e,n,t){const o=this._ensureEditor(n.id);if(!o.drawing&&!o.mode)return;const i=e.currentTarget,r=this._pointFromEvent(e,i);if(e.preventDefault(),o.drawing&&o.draft)return o.draft={x:Math.min(o.grabDx,r.x),y:Math.min(o.grabDy,r.y),width:Math.abs(r.x-o.grabDx),height:Math.abs(r.y-o.grabDy)},void this.triggerPreviewUpdate(!0);const a=(n.zones||[]).findIndex(e=>e.id===o.activeZoneId);if(-1===a)return;const s=n.zones[a];if("rotate"===o.mode){const i=this._zoneCenterPx(s,r.imageW,r.imageH);let c=f(i.x,i.y,r.px,r.py)-o.grabAngle;return e.shiftKey&&(c=15*Math.round(c/15)),void this._patchZone(n,a,{rotation:z(c)},t)}"resize"!==o.mode?"move"===o.mode&&this._patchZone(n,a,{x:m(Math.min(Math.max(0,r.x-o.grabDx),1-s.width)),y:m(Math.min(Math.max(0,r.y-o.grabDy),1-s.height))},t):this._resizeZone(n,a,s,r,t)}_resizeZone(e,n,t,o,i){const r=z(t.rotation);if(0===r)return void this._patchZone(e,n,{width:m(Math.max(v,y(o.x)-t.x)),height:m(Math.max(v,y(o.y)-t.y))},i);const{imageW:a,imageH:s}=o,c=t.width*a,d=t.height*s,l=this._zoneCenterPx(t,a,s),u=b(-c/2,-d/2,r),g=l.x+u.x,p=l.y+u.y,h=b(o.px-l.x,o.py-l.y,-r),_=Math.max(v*a,h.x+c/2),f=Math.max(v*s,h.y+d/2),x=b(_/2,f/2,r),w=g+x.x,k=p+x.y;this._patchZone(e,n,{x:m(y((w-_/2)/a)),y:m(y((k-f/2)/s)),width:m(y(_/a)),height:m(y(f/s))},i)}_onCanvasPointerUp(e,n,t,o){var i;const a=this._ensureEditor(n.id),s=e.currentTarget;if(null===(i=s.releasePointerCapture)||void 0===i||i.call(s,e.pointerId),a.drawing){const e=a.draft;a.drawing=!1,a.draft=null,e&&e.width>=v&&e.height>=v?this._addZone(n,t,o,e):e&&(a.message=(0,r.kg)("editor.cleaning_zones.draw_too_small",o,"That zone was too small — drag out a larger rectangle."))}a.mode=null,this.triggerPreviewUpdate(!0)}_rectStyle(e,n){const t=`left:${100*y(e.x)}%;top:${100*y(e.y)}%;width:${100*y(e.width)}%;height:${100*y(e.height)}%;`,o=z(n);return o?`${t}transform:rotate(${o}deg);`:t}_imageUrl(e,n){if(!e||!n)return"";try{return(0,c.VG)(e,n)}catch(e){return""}}renderPreview(e,n,t,i){var a,s,c,d;const l=e,u=(null===(a=null==n?void 0:n.locale)||void 0===a?void 0:a.language)||"en";if(!l.todo_entity)return this.renderGradientErrorState((0,r.kg)("editor.cleaning_zones.setup_title",u,"Pick a cleaning history list"),(0,r.kg)("editor.cleaning_zones.setup_desc",u,"Choose a Local To-do helper under Storage in the General tab. Every clean you log is saved there."),"mdi:spray-bottle");const g=this._ensurePreview(l);this._ensureEventsLoaded(l,n);const p=l.zones||[],h=_.computeStatuses(p,g.events,{defaultIntervalDays:null!==(s=l.default_interval_days)&&void 0!==s?s:7,graceDays:null!==(c=l.overdue_grace_days)&&void 0!==c?c:0});this._runAutoCleans(l,n,g,u);const v=this._palette(l),y=this.buildStyleString(this.buildDesignStyles(e,n)),m=this.getHoverEffectClass(e),z=(null===(d=l.title)||void 0===d?void 0:d.trim())||(0,r.kg)("editor.cleaning_zones.default_title",u,"Cleaning Zones"),b=o.qy`
      ${!1!==l.show_title?o.qy`<div class="uc-cz-header" style="color:${v.text};">
            <ha-icon icon="mdi:spray-bottle"></ha-icon>
            <span class="uc-cz-header-text">${z}</span>
          </div>`:o.s6}
      ${g.error?o.qy`<div class="uc-cz-banner error">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <span>${g.error}</span>
          </div>`:o.s6}
      ${0===p.length?this._renderNoZones(u,v):o.qy`
            ${!1!==l.show_summary_bar?this._renderSummaryBar(h,v,u):o.s6}
            ${g.loading&&0===g.events.length?this._renderLoading(u,v):o.s6}
            ${this._renderUndoBar(l,n,g,v,u)}
            ${this._renderBody(l,n,h,g,v,u)}
            ${!1!==l.show_legend?this._renderLegend(v,u):o.s6}
          `}
    `;return o.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div
        class="uc-cz-wrapper ${m}"
        style="padding:14px;border-radius:var(--uc-r-12, 12px);background:${v.cardBg};${y}"
      >
        ${this.wrapWithAnimation(b,e,n)}
      </div>
    `}_renderNoZones(e,n){return o.qy`
      <div class="uc-cz-blank">
        <ha-icon icon="mdi:home-floor-g" style="color:${n.fresh};"></ha-icon>
        <div class="uc-cz-blank-title" style="color:${n.text};">
          ${(0,r.kg)("editor.cleaning_zones.add_first_title",e,"Add your first zone")}
        </div>
        <div class="uc-cz-blank-sub" style="color:${n.secondary};">
          ${(0,r.kg)("editor.cleaning_zones.add_first_desc",e,"Open the General tab and add a room with a name and a cleaning interval. A floorplan image is optional — the list works on its own.")}
        </div>
      </div>
    `}_renderLoading(e,n){return o.qy`
      <div class="uc-cz-skeleton" aria-hidden="true">
        ${[0,1,2].map(()=>o.qy`<div class="uc-cz-skel-row"></div>`)}
      </div>
      <div class="uc-cz-loading" style="color:${n.secondary};">
        ${(0,r.kg)("editor.cleaning_zones.loading",e,"Loading cleaning history…")}
      </div>
    `}_renderSummaryBar(e,n,t){const i=_.summarize(e),a=i.worst,s=0===i.needsAttention?(0,r.kg)("editor.cleaning_zones.all_clear",t,"Everything is on schedule"):(0,r.kg)("editor.cleaning_zones.needs_attention",t,"{count} need attention").replace("{count}",String(i.needsAttention));return o.qy`
      <div class="uc-cz-summary">
        <div class="uc-cz-summary-main" style="color:${n.text};">
          <ha-icon
            icon=${0===i.needsAttention?"mdi:check-circle-outline":"mdi:alert-circle-outline"}
            style="color:${0===i.needsAttention?n.fresh:n.overdue};"
          ></ha-icon>
          <span>${s}</span>
        </div>
        <div class="uc-cz-summary-sub" style="color:${n.secondary};">
          ${a?(0,r.kg)("editor.cleaning_zones.worst_zone",t,"Most overdue: {name}").replace("{name}",a.zone.name||"—"):(0,r.kg)("editor.cleaning_zones.fresh_count",t,"{count} fresh").replace("{count}",String(i.fresh))}
        </div>
      </div>
    `}_renderLegend(e,n){const t=(n,t)=>o.qy`
      <span class="uc-cz-legend-item" style="color:${e.secondary};">
        <span class="uc-cz-swatch" style="background:${n};"></span>${t}
      </span>
    `;return o.qy`
      <div class="uc-cz-legend">
        ${t(e.fresh,(0,r.kg)("editor.cleaning_zones.legend_fresh",n,"Fresh"))}
        ${t(e.due,(0,r.kg)("editor.cleaning_zones.legend_due",n,"Due"))}
        ${t(e.overdue,(0,r.kg)("editor.cleaning_zones.legend_overdue",n,"Overdue"))}
      </div>
    `}_renderUndoBar(e,n,t,i,a){const s=t.undo;return s?o.qy`
      <div class="uc-cz-undo">
        <span style="color:${i.secondary};">
          ${(0,r.kg)("editor.cleaning_zones.logged_clean",a,"{name} marked clean").replace("{name}",s.zoneName)}
        </span>
        <button
          class="uc-cz-undo-btn"
          type="button"
          @click=${()=>this._undoClean(e,n,t)}
        >
          ${(0,r.kg)("editor.cleaning_zones.undo",a,"Undo")}
        </button>
      </div>
    `:o.s6}_renderBody(e,n,t,i,r,a){const s=!!this._imageUrl(n,e.floorplan_image),c=e.view_mode||"both",d=s&&("map"===c||"both"===c),l="list"===c||"both"===c||!s;return o.qy`
      ${d?this._renderMap(e,n,t,i,r,a):o.s6}
      ${l?this._renderList(e,n,t,i,r,a):o.s6}
    `}_renderMap(e,n,t,i,a,s){var c;const d=this._imageUrl(n,e.floorplan_image),l=e.staleness_style||"heat",u=null!==(c=e.zone_opacity)&&void 0!==c?c:.55;return o.qy`
      <div class="uc-cz-map">
        <img src=${d} alt="" draggable="false" />
        ${t.map(t=>{const c=t.zone,d=c.color||this._stateColor(t.state,a),g=i.confirmZoneId===c.id,p=i.busyZoneId===c.id,h=c.width>=.12&&c.height>=.08,_=!1!==e.show_zone_labels&&h,v="outline"===l?"transparent":"badge"===l?`color-mix(in srgb, ${d} 22%, transparent)`:d,y="heat"===l?u:1,m=z(c.rotation),b=m?`transform:rotate(${-m}deg);`:"";return o.qy`
            <button
              class="uc-cz-zone ${g?"confirming":""} ${p?"busy":""}"
              type="button"
              style="${this._rectStyle(c,c.rotation)}background:${v};opacity:${y};border-color:${d};"
              title=${this._zoneTooltip(t,s)}
              aria-label=${this._zoneTooltip(t,s)}
              ?disabled=${p}
              @click=${()=>this._onZoneTap(e,n,t,i,s)}
            >
              ${_?o.qy`<span class="uc-cz-zone-label">
                    ${g?(0,r.kg)("editor.cleaning_zones.confirm_short",s,"Tap again"):c.name}
                  </span>`:o.s6}
              ${"badge"!==l&&h?o.s6:o.qy`<span class="uc-cz-zone-badge" style="background:${d};${b}">
                    ${this._badgeText(t,s)}
                  </span>`}
            </button>
          `})}
      </div>
    `}_renderList(e,n,t,i,a,s){const c=this._sortStatuses(t,e.sort_mode||"staleness");return o.qy`
      <div class="uc-cz-list">
        ${c.map(t=>{var c;const d=t.zone,l=d.color||this._stateColor(t.state,a),u=i.confirmZoneId===d.id,g=i.busyZoneId===d.id,p=i.openZoneId===d.id,h=Math.min(1,Math.max(0,null!==(c=t.ratio)&&void 0!==c?c:0));return o.qy`
            <div class="uc-cz-item">
              <button
                class="uc-cz-item-main"
                type="button"
                @click=${()=>{i.openZoneId=p?"":d.id,this.triggerPreviewUpdate(!0)}}
                aria-expanded=${p?"true":"false"}
              >
                <span class="uc-cz-item-icon" style="color:${l};">
                  <ha-icon icon=${d.icon||"mdi:broom"}></ha-icon>
                </span>
                <span class="uc-cz-item-text">
                  <span class="uc-cz-item-name" style="color:${a.text};">${d.name}</span>
                  <span class="uc-cz-item-sub" style="color:${a.secondary};">
                    ${this._dueLabel(t,s)}
                  </span>
                  <span class="uc-cz-track">
                    <span
                      class="uc-cz-fill"
                      style="width:${100*h}%;background:${l};"
                    ></span>
                  </span>
                </span>
              </button>
              <button
                class="uc-cz-clean-btn ${u?"confirming":""}"
                type="button"
                ?disabled=${g}
                style="border-color:${l};color:${u?"var(--text-primary-color,#fff)":l};background:${u?l:"transparent"};"
                title=${(0,r.kg)("editor.cleaning_zones.mark_clean",s,"Mark clean")}
                @click=${()=>this._onZoneTap(e,n,t,i,s)}
              >
                ${g?o.qy`<ha-icon icon="mdi:progress-clock"></ha-icon>`:u?o.qy`<span
                        >${(0,r.kg)("editor.cleaning_zones.confirm_short",s,"Tap again")}</span
                      >`:o.qy`<ha-icon icon="mdi:check"></ha-icon>`}
              </button>
            </div>
            ${p?this._renderZoneDetail(t,i,a,s):o.s6}
          `})}
      </div>
    `}_renderZoneDetail(e,n,t,i){const a=_.eventsForZone(n.events,e.zone.id,5).map(e=>({at:e.cleanedAtMs,by:e.payload.by,source:e.payload.source}));return o.qy`
      <div class="uc-cz-detail" style="color:${t.secondary};">
        <div class="uc-cz-detail-line">
          ${(0,r.kg)("editor.cleaning_zones.interval_label",i,"Every {days} days").replace("{days}",String(e.intervalDays))}
          ${e.lastBy?o.qy` ·
              ${(0,r.kg)("editor.cleaning_zones.last_by",i,"last by {name}").replace("{name}",e.lastBy)}`:o.s6}
        </div>
        ${e.zone.notes?o.qy`<div class="uc-cz-detail-line">${e.zone.notes}</div>`:o.s6}
        ${a.length>0?o.qy`
              <div class="uc-cz-history">
                ${a.map(e=>o.qy`
                    <span class="uc-cz-history-chip">
                      ${this._agoLabel(e.at,i)}
                      ${"auto"===e.source?o.qy`<ha-icon
                            class="uc-cz-inline-icon"
                            icon="mdi:robot-vacuum"
                          ></ha-icon>`:o.s6}
                    </span>
                  `)}
              </div>
            `:o.qy`<div class="uc-cz-detail-line">
              ${(0,r.kg)("editor.cleaning_zones.no_history",i,"No cleans recorded yet")}
            </div>`}
      </div>
    `}_palette(e){return{fresh:e.fresh_color||"var(--success-color, #4caf50)",due:e.due_color||"var(--warning-color, #ff9800)",overdue:e.overdue_color||"var(--error-color, #f44336)",text:e.text_color||"var(--primary-text-color)",secondary:e.secondary_text_color||"var(--secondary-text-color)",cardBg:e.card_background_color||"var(--card-background-color)"}}_stateColor(e,n){switch(e){case"overdue":return n.overdue;case"due":case"due_soon":default:return n.due;case"fresh":return n.fresh}}_sortStatuses(e,n){const t=[...e];return"name"===n?t.sort((e,n)=>(e.zone.name||"").localeCompare(n.zone.name||"")):"interval"===n?t.sort((e,n)=>e.intervalDays-n.intervalDays):t.sort((e,n)=>{var t,o;const i=null!==(t=e.ratio)&&void 0!==t?t:Number.POSITIVE_INFINITY;return(null!==(o=n.ratio)&&void 0!==o?o:Number.POSITIVE_INFINITY)-i})}_dueLabel(e,n){if(null===e.lastCleanedMs||null===e.dueInDays)return(0,r.kg)("editor.cleaning_zones.never_cleaned",n,"Never cleaned");const t=e.dueInDays;if(t<0){const e=Math.max(1,Math.round(-t));return(0,r.kg)("editor.cleaning_zones.overdue_by",n,"Overdue by {days} days").replace("{days}",String(e))}if(t<1)return(0,r.kg)("editor.cleaning_zones.due_today",n,"Due today");const o=Math.round(t);return 1===o?(0,r.kg)("editor.cleaning_zones.due_tomorrow",n,"Due tomorrow"):(0,r.kg)("editor.cleaning_zones.due_in",n,"Due in {days} days").replace("{days}",String(o))}_badgeText(e,n){if(null===e.daysSince)return"—";const t=Math.floor(e.daysSince);return(0,r.kg)("editor.cleaning_zones.days_short",n,"{days}d").replace("{days}",String(t))}_zoneTooltip(e,n){return`${e.zone.name||""} — ${this._dueLabel(e,n)}`}_agoLabel(e,n){const t=Math.floor((Date.now()-e)/864e5);return t<=0?(0,r.kg)("editor.cleaning_zones.today",n,"Today"):1===t?(0,r.kg)("editor.cleaning_zones.yesterday",n,"Yesterday"):(0,r.kg)("editor.cleaning_zones.days_ago",n,"{days}d ago").replace("{days}",String(t))}_ensurePreview(e){let n=this._preview.get(e.id);return n||(n={events:[],loading:!1,lastFetchedAt:0,fetchKey:"",error:"",undo:null,confirmZoneId:"",busyZoneId:"",openZoneId:""},this._preview.set(e.id,n)),n}_ensureEventsLoaded(e,n){if(!n||!e.todo_entity)return;const t=this._ensurePreview(e);if(t.loading)return;const o=e.todo_entity,i=Date.now();t.fetchKey===o&&t.lastFetchedAt>0&&i-t.lastFetchedAt<2e3||(t.loading=!0,t.fetchKey=o,_.getEvents(n,e.todo_entity,()=>{const t=this._preview.get(e.id);t&&(t.lastFetchedAt=0),this._ensureEventsLoaded(e,n)}).then(n=>{const t=this._ensurePreview(e);t.events=n,t.loading=!1,t.error="",t.lastFetchedAt=Date.now(),this.triggerPreviewUpdate(!0)}).catch(n=>{const t=this._ensurePreview(e);t.loading=!1,t.lastFetchedAt=Date.now(),t.error=n instanceof Error&&n.message?n.message:"Could not read the cleaning history list",this.triggerPreviewUpdate(!0)}))}_runAutoCleans(e,n,t,o){var i;if(!n||!e.todo_entity)return;const a=(e.zones||[]).filter(e=>e.auto_clean_entity&&e.auto_clean_state);0!==a.length&&_.checkAutoCleans(n,e.todo_entity,a,t.events,{by:e.log_cleaner?_.resolveCleaner(n,e.person_entity):void 0,historyLimit:null!==(i=e.history_limit)&&void 0!==i?i:20,summaryFor:e=>(0,r.kg)("editor.cleaning_zones.log_auto",o,"{name} cleaned automatically").replace("{name}",e.name||e.id),onWritten:()=>{const t=this._preview.get(e.id);t&&(t.lastFetchedAt=0),this._ensureEventsLoaded(e,n)}})}_onZoneTap(e,n,t,o,i){if(!n||!e.todo_entity)return;const r=t.zone.id;if(e.require_confirm&&o.confirmZoneId!==r)return o.confirmZoneId=r,this.triggerPreviewUpdate(!0),void setTimeout(()=>{const n=this._preview.get(e.id);(null==n?void 0:n.confirmZoneId)===r&&(n.confirmZoneId="",this.triggerPreviewUpdate(!0))},4e3);o.confirmZoneId="",this._logClean(e,n,t,i)}_logClean(e,n,t,o){var i;const a=this._ensurePreview(e);if(a.busyZoneId)return;const s=t.zone;a.busyZoneId=s.id,this.triggerPreviewUpdate(!0);const c=(0,r.kg)("editor.cleaning_zones.log_clean",o,"{name} cleaned").replace("{name}",s.name||s.id),d=e.log_cleaner?_.resolveCleaner(n,e.person_entity):void 0;_.recordClean(n,e.todo_entity,s,{source:"manual",summary:c,by:d,historyLimit:null!==(i=e.history_limit)&&void 0!==i?i:20}).then(()=>{const t=this._ensurePreview(e);t.busyZoneId="",t.undo={zoneId:s.id,zoneName:s.name||s.id,at:Date.now()},t.lastFetchedAt=0,this._ensureEventsLoaded(e,n),this.triggerPreviewUpdate(!0),this._expireUndoLater(e,t.undo.at)}).catch(n=>{const t=this._ensurePreview(e);t.busyZoneId="",t.error=n instanceof Error&&n.message?n.message:"Could not save the cleaning entry",this.triggerPreviewUpdate(!0)})}_undoClean(e,n,t){const o=t.undo;o&&n&&e.todo_entity&&(t.undo=null,t.busyZoneId=o.zoneId,this.triggerPreviewUpdate(!0),_.undoLastClean(n,e.todo_entity,o.zoneId).then(()=>{const t=this._ensurePreview(e);t.busyZoneId="",t.lastFetchedAt=0,this._ensureEventsLoaded(e,n),this.triggerPreviewUpdate(!0)}).catch(()=>{this._ensurePreview(e).busyZoneId="",this.triggerPreviewUpdate(!0)}))}_expireUndoLater(e,n){setTimeout(()=>{const t=this._preview.get(e.id);(null==t?void 0:t.undo)&&t.undo.at===n&&(t.undo=null,this.triggerPreviewUpdate(!0))},2e4)}getStyles(){return`\n      ${i.m.getSliderStyles()}\n\n      .uc-cz-wrapper { box-sizing: border-box; width: 100%; min-width: 0; }\n\n      .uc-cz-header {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-weight: 700;\n        font-size: 15px;\n        margin-bottom: 10px;\n      }\n      .uc-cz-header-text {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        min-width: 0;\n      }\n\n      .uc-cz-note,\n      .uc-cz-warn {\n        display: flex;\n        align-items: flex-start;\n        gap: 8px;\n        font-size: 12px;\n        line-height: 1.5;\n        padding: 10px 12px;\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 12px;\n        color: var(--secondary-text-color);\n        background: var(--primary-background-color);\n      }\n      .uc-cz-warn {\n        color: var(--warning-color, #ff9800);\n        background: color-mix(in srgb, var(--warning-color, #ff9800) 12%, transparent);\n      }\n      .uc-cz-note ha-icon,\n      .uc-cz-warn ha-icon { flex-shrink: 0; --mdc-icon-size: 18px; }\n\n      .uc-cz-section-desc {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        line-height: 1.5;\n        margin-bottom: 12px;\n      }\n\n      .uc-cz-banner {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 12px;\n        padding: 8px 10px;\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 10px;\n      }\n      .uc-cz-banner.error {\n        color: var(--error-color, #f44336);\n        background: color-mix(in srgb, var(--error-color, #f44336) 12%, transparent);\n      }\n\n      /* ── Editor: zone rows ── */\n\n      .uc-cz-empty-rows {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        padding: 12px;\n        border: 1px dashed var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 12px;\n        text-align: center;\n      }\n\n      .uc-cz-row {\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 8px;\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        overflow: hidden;\n      }\n      .uc-cz-row.expanded { border-color: var(--primary-color); }\n\n      .uc-cz-row-head {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 8px 10px;\n      }\n      .uc-cz-row-icon {\n        flex-shrink: 0;\n        width: 32px;\n        height: 32px;\n        border-radius: var(--uc-r-8, 8px);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: var(--secondary-background-color);\n        color: var(--primary-color);\n      }\n      .uc-cz-row-text { flex: 1; min-width: 0; }\n      .uc-cz-row-name {\n        font-weight: 600;\n        font-size: 14px;\n        color: var(--primary-text-color);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-cz-row-sub {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 11px;\n        color: var(--secondary-text-color);\n      }\n      .uc-cz-inline-icon { --mdc-icon-size: 13px; }\n\n      .uc-cz-icon-btn {\n        flex-shrink: 0;\n        width: 30px;\n        height: 30px;\n        border: none;\n        border-radius: var(--uc-r-6, 6px);\n        background: transparent;\n        color: var(--secondary-text-color);\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 0;\n      }\n      .uc-cz-icon-btn:hover:not(:disabled) { background: var(--secondary-background-color); }\n      .uc-cz-icon-btn:disabled { opacity: 0.3; cursor: default; }\n      .uc-cz-icon-btn:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 1px; }\n      .uc-cz-icon-btn.on { color: var(--primary-color); }\n      .uc-cz-icon-btn.danger:hover:not(:disabled) { color: var(--error-color, #f44336); }\n      .uc-cz-icon-btn ha-icon { --mdc-icon-size: 18px; }\n\n      .uc-cz-row-body {\n        padding: 4px 10px 12px;\n        border-top: 1px solid var(--divider-color);\n      }\n\n      .uc-cz-add-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        width: 100%;\n        padding: 10px;\n        border: 1px dashed var(--primary-color);\n        border-radius: var(--uc-r-8, 8px);\n        background: transparent;\n        color: var(--primary-color);\n        font-size: 13px;\n        font-weight: 600;\n        cursor: pointer;\n      }\n      .uc-cz-add-btn:hover {\n        background: color-mix(in srgb, var(--primary-color) 8%, transparent);\n      }\n      .uc-cz-add-btn ha-icon { --mdc-icon-size: 18px; }\n\n      .uc-cz-linkbtn {\n        border: none;\n        background: transparent;\n        color: var(--primary-color);\n        font-size: 12px;\n        cursor: pointer;\n        padding: 0 0 10px;\n        text-align: left;\n      }\n      .uc-cz-linkbtn:hover { text-decoration: underline; }\n\n      .uc-cz-subtoggle {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        width: 100%;\n        border: none;\n        background: transparent;\n        color: var(--secondary-text-color);\n        font-size: 12px;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.4px;\n        cursor: pointer;\n        padding: 8px 0;\n      }\n      .uc-cz-subtoggle.on { color: var(--primary-color); }\n      .uc-cz-subtoggle ha-icon { --mdc-icon-size: 16px; }\n      .uc-cz-subgroup { padding-left: 4px; }\n\n      /* ── Editor: placement map ── */\n\n      .uc-cz-placement { margin-bottom: 14px; }\n      .uc-cz-placement-hint,\n      .uc-cz-placement-msg {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-bottom: 6px;\n        line-height: 1.5;\n      }\n      .uc-cz-placement-msg { color: var(--warning-color, #ff9800); margin-top: 6px; }\n\n      .uc-cz-canvas {\n        position: relative;\n        width: 100%;\n        border-radius: var(--uc-r-8, 8px);\n        overflow: hidden;\n        touch-action: none;\n        cursor: crosshair;\n        user-select: none;\n        background: var(--secondary-background-color);\n      }\n      .uc-cz-canvas img { display: block; width: 100%; height: auto; user-select: none; }\n\n      .uc-cz-place-zone {\n        position: absolute;\n        border: 2px solid var(--primary-color);\n        background: color-mix(in srgb, var(--primary-color) 18%, transparent);\n        border-radius: var(--uc-r-4, 4px);\n        cursor: move;\n        box-sizing: border-box;\n      }\n      .uc-cz-place-zone.active { border-style: dashed; }\n      .uc-cz-place-label {\n        position: absolute;\n        top: 2px;\n        left: 4px;\n        font-size: 10px;\n        font-weight: 600;\n        color: var(--text-primary-color, #fff);\n        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n        pointer-events: none;\n        white-space: nowrap;\n        overflow: hidden;\n        max-width: calc(100% - 8px);\n        text-overflow: ellipsis;\n      }\n      .uc-cz-handle {\n        position: absolute;\n        right: -6px;\n        bottom: -6px;\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background: var(--primary-color);\n        border: 2px solid var(--card-background-color);\n        cursor: nwse-resize;\n      }\n\n      /* Orbits the zone, since it rotates along with its parent. */\n      .uc-cz-rotate {\n        position: absolute;\n        bottom: calc(100% + 9px);\n        left: 50%;\n        margin-left: -10px;\n        width: 20px;\n        height: 20px;\n        border-radius: 50%;\n        background: var(--primary-color);\n        border: 2px solid var(--card-background-color);\n        color: var(--text-primary-color, #fff);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: grab;\n        box-sizing: border-box;\n      }\n      .uc-cz-rotate:active { cursor: grabbing; }\n      .uc-cz-rotate ha-icon { --mdc-icon-size: 12px; pointer-events: none; }\n      .uc-cz-rotate::after {\n        content: '';\n        position: absolute;\n        top: 100%;\n        left: 50%;\n        width: 2px;\n        height: 9px;\n        margin-left: -1px;\n        background: var(--primary-color);\n      }\n      .uc-cz-draft {\n        position: absolute;\n        border: 2px dashed var(--primary-color);\n        background: color-mix(in srgb, var(--primary-color) 10%, transparent);\n        pointer-events: none;\n        box-sizing: border-box;\n      }\n\n      /* ── Preview: summary, legend, undo ── */\n\n      .uc-cz-summary {\n        display: flex;\n        align-items: baseline;\n        justify-content: space-between;\n        gap: 10px;\n        flex-wrap: wrap;\n        margin-bottom: 10px;\n      }\n      .uc-cz-summary-main {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 14px;\n        font-weight: 700;\n        min-width: 0;\n      }\n      .uc-cz-summary-main ha-icon { --mdc-icon-size: 18px; flex-shrink: 0; }\n      .uc-cz-summary-sub {\n        font-size: 12px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        min-width: 0;\n      }\n\n      .uc-cz-legend {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 12px;\n        margin-top: 10px;\n        font-size: 11px;\n      }\n      .uc-cz-legend-item { display: flex; align-items: center; gap: 5px; }\n      .uc-cz-swatch { width: 10px; height: 10px; border-radius: var(--uc-r-3, 3px); display: inline-block; }\n\n      .uc-cz-undo {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 10px;\n        font-size: 12px;\n        padding: 7px 10px;\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 10px;\n        background: var(--secondary-background-color);\n      }\n      .uc-cz-undo-btn {\n        border: none;\n        background: transparent;\n        color: var(--primary-color);\n        font-weight: 700;\n        font-size: 12px;\n        cursor: pointer;\n        padding: 2px 4px;\n      }\n      .uc-cz-undo-btn:hover { text-decoration: underline; }\n\n      .uc-cz-blank {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        gap: 6px;\n        padding: 22px 12px;\n      }\n      .uc-cz-blank ha-icon { --mdc-icon-size: 40px; }\n      .uc-cz-blank-title { font-size: 15px; font-weight: 700; }\n      .uc-cz-blank-sub { font-size: 12px; line-height: 1.5; max-width: 340px; }\n\n      .uc-cz-loading { font-size: 12px; text-align: center; padding: 4px 0 8px; }\n      .uc-cz-skeleton { display: flex; flex-direction: column; gap: 6px; margin-bottom: 6px; }\n      .uc-cz-skel-row {\n        height: 34px;\n        border-radius: var(--uc-r-8, 8px);\n        background: linear-gradient(\n          90deg,\n          var(--secondary-background-color) 25%,\n          var(--divider-color) 50%,\n          var(--secondary-background-color) 75%\n        );\n        background-size: 200% 100%;\n        animation: uc-cz-shimmer 1.4s ease-in-out infinite;\n      }\n      @keyframes uc-cz-shimmer {\n        from { background-position: 200% 0; }\n        to { background-position: -200% 0; }\n      }\n\n      /* ── Preview: map ── */\n\n      .uc-cz-map {\n        position: relative;\n        width: 100%;\n        border-radius: var(--uc-r-10, 10px);\n        overflow: hidden;\n        background: var(--secondary-background-color);\n      }\n      .uc-cz-map img { display: block; width: 100%; height: auto; }\n\n      .uc-cz-zone {\n        position: absolute;\n        border: 2px solid transparent;\n        border-radius: var(--uc-r-4, 4px);\n        cursor: pointer;\n        padding: 0;\n        box-sizing: border-box;\n        transition: filter 120ms ease-in-out;\n      }\n      .uc-cz-zone:hover:not(:disabled) { filter: brightness(1.15); }\n      .uc-cz-zone:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }\n      .uc-cz-zone:disabled { cursor: default; }\n      .uc-cz-zone.confirming { border-style: dashed; filter: brightness(1.25); }\n      .uc-cz-zone.busy { opacity: 0.6; }\n\n      .uc-cz-zone-label {\n        position: absolute;\n        inset: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 11px;\n        font-weight: 700;\n        color: var(--text-primary-color, #fff);\n        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);\n        padding: 2px;\n        overflow: hidden;\n        text-align: center;\n        pointer-events: none;\n      }\n      .uc-cz-zone-badge {\n        position: absolute;\n        top: -6px;\n        right: -6px;\n        min-width: 18px;\n        height: 18px;\n        padding: 0 4px;\n        border-radius: var(--uc-r-9, 9px);\n        font-size: 10px;\n        font-weight: 700;\n        color: var(--text-primary-color, #fff);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        pointer-events: none;\n      }\n\n      /* ── Preview: list ── */\n\n      .uc-cz-list { display: flex; flex-direction: column; gap: 4px; margin-top: 10px; }\n\n      .uc-cz-item { display: flex; align-items: center; gap: 8px; }\n\n      .uc-cz-item-main {\n        flex: 1;\n        min-width: 0;\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        border: none;\n        background: transparent;\n        padding: 6px 2px;\n        cursor: pointer;\n        text-align: left;\n      }\n      .uc-cz-item-main:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }\n      .uc-cz-item-icon { flex-shrink: 0; display: flex; }\n      .uc-cz-item-icon ha-icon { --mdc-icon-size: 20px; }\n      .uc-cz-item-text { flex: 1; min-width: 0; display: block; }\n      .uc-cz-item-name {\n        display: block;\n        font-size: 14px;\n        font-weight: 600;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-cz-item-sub { display: block; font-size: 11px; margin-bottom: 4px; }\n\n      .uc-cz-track {\n        display: block;\n        height: 4px;\n        border-radius: var(--uc-r-2, 2px);\n        background: var(--divider-color);\n        overflow: hidden;\n      }\n      .uc-cz-fill { display: block; height: 100%; border-radius: var(--uc-r-2, 2px); }\n\n      .uc-cz-clean-btn {\n        flex-shrink: 0;\n        min-width: 34px;\n        height: 30px;\n        padding: 0 8px;\n        border: 1px solid;\n        border-radius: var(--uc-r-8, 8px);\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 11px;\n        font-weight: 700;\n      }\n      .uc-cz-clean-btn:disabled { opacity: 0.5; cursor: default; }\n      .uc-cz-clean-btn:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 1px; }\n      .uc-cz-clean-btn ha-icon { --mdc-icon-size: 16px; }\n\n      .uc-cz-detail {\n        font-size: 11px;\n        line-height: 1.6;\n        padding: 2px 2px 8px 32px;\n      }\n      .uc-cz-detail-line { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }\n      .uc-cz-history { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }\n      .uc-cz-history-chip {\n        display: inline-flex;\n        align-items: center;\n        gap: 3px;\n        padding: 1px 7px;\n        border-radius: var(--uc-r-10, 10px);\n        background: var(--uc-pane-bg, var(--secondary-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        font-size: 10px;\n      }\n\n      @media (max-width: 420px) {\n        .uc-cz-summary { flex-direction: column; align-items: flex-start; gap: 2px; }\n        .uc-cz-detail { padding-left: 12px; }\n      }\n    `}}},3820(e,n,t){t.d(n,{pC:()=>r});var o=t(3647);const i=" ⌗";function r(e,n){var t,o,i,r;return!(64&~Number(null!==(r=null===(i=null===(o=null===(t=null==e?void 0:e.states)||void 0===t?void 0:t[n])||void 0===o?void 0:o.attributes)||void 0===i?void 0:i.supported_features)&&void 0!==r?r:0))}function a(e,n){var t;if(!e)return null;const o=e.trim();if(!o.startsWith("{"))return null;try{const e=JSON.parse(o);return e&&"object"==typeof e?e._ns!==n?null:null!==(t=e.data)&&void 0!==t?t:null:null}catch(e){return null}}function s(e){const n=e.lastIndexOf(i);if(-1!==n)return e.slice(0,n).trim();const t=e.indexOf("{");return t>0&&e.trimEnd().endsWith("}")?e.slice(0,t).trim():e.trim()}const c=new class{constructor(){this._todo=new o.i}async getRecords(e,n,t,o){if(!e||!n)return[];const i=await this._todo.getItems(e,n,o),r=[];for(const e of i){const n=this.parseItem(e,t);n&&r.push(n)}return r}parseItem(e,n){var t;const o=null!==(t=a(e.description,n))&&void 0!==t?t:function(e,n){const t=e.lastIndexOf(i);if(-1!==t)return a(e.slice(t+2),n);const o=e.indexOf("{");return-1===o?null:a(e.slice(o),n)}(e.summary||"",n);if(null===o)return null;const r=e.uid;return r?{uid:r,summary:s(e.summary||""),status:"completed"===e.status?"completed":"needs_action",due:e.due,payload:o}:null}async addRecord(e,n,t,o,a,s){if(!e||!n)return;const c=this._encode(t,a),d={entity_id:n};r(e,n)?(d.item=o,d.description=c):d.item=`${o}${i}${c}`,(null==s?void 0:s.due)&&(d.due_datetime=s.due),await e.callService("todo","add_item",d),this.invalidate(e,n)}async patchRecord(e,n,t,o,a){var s,c,d;if(!e||!n||!o)return;const l=(await this.getRecords(e,n,t)).find(e=>e.uid===o);if(!l)return;const u=Object.assign(Object.assign({},l.payload),null!==(s=a.payload)&&void 0!==s?s:{}),g=null!==(c=a.summary)&&void 0!==c?c:l.summary,p=this._encode(t,u),h={entity_id:n,item:o};r(e,n)?(h.rename=g,h.description=p):h.rename=`${g}${i}${p}`,a.status&&(h.status=a.status),void 0!==a.due&&(h.due_datetime=null!==(d=a.due)&&void 0!==d?d:null),await e.callService("todo","update_item",h),this.invalidate(e,n)}async setStatus(e,n,t,o){e&&n&&t&&(await e.callService("todo","update_item",{entity_id:n,item:t,status:o}),this.invalidate(e,n))}async removeRecord(e,n,t){e&&n&&t&&(await e.callService("todo","remove_item",{entity_id:n,item:t}),this.invalidate(e,n))}invalidate(e,n){this._todo.invalidateCache(e,n)}_encode(e,n){const t={_ns:e,_v:1,data:n};return JSON.stringify(t)}};t.d(n,["N2",0,c])},3647(e,n,t){t.d(n,{i:()=>i});const o="__uvc_todo_cache";class i{constructor(){this._unsubByEntity=new Map,this._callbacksByEntity=new Map}async getItems(e,n,t){if(!e||!n)return[];e[o]||(e[o]=Object.create(null));const i=e[o],r=()=>{if(t){let e=this._callbacksByEntity.get(n);e||(e=new Set,this._callbacksByEntity.set(n,e)),e.add(t)}},a=()=>{const e=this._callbacksByEntity.get(n);e&&e.forEach(e=>{try{e()}catch(e){}})},s=async()=>{var t;try{const o=await e.callService("todo","get_items",{entity_id:n},void 0,!0,!0),r=null!==(t=null==o?void 0:o.response)&&void 0!==t?t:{};let a=[];const s=r[n];if(Array.isArray(null==s?void 0:s.items))a=s.items;else if(Array.isArray(null==s?void 0:s.todo_items))a=s.todo_items;else if(Array.isArray(s))a=s;else if(Array.isArray(r))a=r;else if("object"==typeof r&&null!==r){const e=Object.keys(r).find(e=>e.startsWith("todo.")),n=e?r[e]:void 0;Array.isArray(null==n?void 0:n.items)?a=n.items:Array.isArray(null==n?void 0:n.todo_items)?a=n.todo_items:Array.isArray(n)&&(a=n)}return 0===a.length&&(s||r&&Object.keys(r).length>0)&&console.warn("[UltraCard] todo.get_items: unexpected response shape",{entityId:n,responseKeys:Object.keys(r),entry:s?Object.keys(s):null}),i[n]=a,a}catch(e){return console.warn("[UltraCard] todo.get_items failed for",n,e),i[n]=[],[]}};if(void 0!==i[n])return r(),this._ensureSubscription(e,n,s,a),i[n];const c=await s();return r(),this._ensureSubscription(e,n,s,a),c}_ensureSubscription(e,n,t,o){if(this._unsubByEntity.has(n))return;const i=e.connection;(null==i?void 0:i.subscribeEvents)&&i.subscribeEvents(e=>{var i;(null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.entity_id)===n&&t().then(()=>o())},"state_changed").then(e=>{this._unsubByEntity.set(n,e)}).catch(()=>{})}unsubscribeEntity(e){const n=this._unsubByEntity.get(e);if(n){try{n()}catch(e){}this._unsubByEntity.delete(e)}this._callbacksByEntity.delete(e)}invalidateCache(e,n){if(!e||!n)return;const t=e[o];t&&n in t&&delete t[n]}}},3488(e,n,t){t.d(n,{SB:()=>c,b5:()=>s,gf:()=>a});var o=t(2618),i=t(378),r=t(6478);function a(e){var n,t,o,r;if(!e)return!1;try{const a=i.xd.checkIntegrationAuth(e);if("pro"===(null===(n=null==a?void 0:a.subscription)||void 0===n?void 0:n.tier)&&"active"===(null===(t=null==a?void 0:a.subscription)||void 0===t?void 0:t.status))return!0;if(i.xd.isAuthenticated()){const e=i.xd.getCurrentUser();if("pro"===(null===(o=null==e?void 0:e.subscription)||void 0===o?void 0:o.tier)&&"active"===(null===(r=null==e?void 0:e.subscription)||void 0===r?void 0:r.status))return!0}}catch(e){return!1}return!1}function s(e,n){return o.qy`
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
        ${(0,r.kg)("editor.pro.feature_locked",e,"Pro Feature")}
      </div>
      <div
        style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 340px; line-height: 1.5;"
      >
        ${n}
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
        ${(0,r.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
      </a>
    </div>
  `}function c(e,n){return o.qy`
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
        <div style="font-weight: 700; color: var(--primary-text-color);">${n}</div>
        <div style="font-size: 12px; color: var(--secondary-text-color);">
          ${(0,r.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
      </div>
    </div>
  `}}};