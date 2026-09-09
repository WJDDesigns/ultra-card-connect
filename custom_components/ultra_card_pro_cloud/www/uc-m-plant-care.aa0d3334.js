export const __webpack_esm_ids__=[2414];export const __webpack_esm_modules__={2889(e,t,n){n.d(t,{UltraPlantCareModule:()=>w});var r=n(2618),i=n(7475),a=n(6478),o=n(3488),s=n(3820),l=n(7907);const d="plant_care",c=.25,u=864e5;function p(e,t,n){return Number.isFinite(e)?Math.min(n,Math.max(t,e)):t}function h(e){return Math.round(10*e)/10}function _(e){switch(e){case"overdue":return 3;case"thirsty":return 2;case"due_soon":return 1;default:return 0}}function m(e,t=Date.now()){var n,r;if(!(null==e?void 0:e.seasonal_adjust))return 1;const i=p(Number(null!==(n=e.summer_factor)&&void 0!==n?n:.75),c,2),a=p(Number(null!==(r=e.winter_factor)&&void 0!==r?r:1.5),c,2),o=t instanceof Date?t:new Date(t);if(Number.isNaN(o.getTime()))return 1;const s=(i+a)/2,l=(i-a)/2,d="number"==typeof e.latitude&&e.latitude<0,h=function(e){const t=Date.UTC(e.getUTCFullYear(),0,1),n=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate());return Math.floor((n-t)/u)+1}(o)+(d?182.625:0),_=2*Math.PI*(h-172)/365.25;return s+l*Math.cos(_)}function g(e){return"never"===e?1.5:_(e)}function v(e){const t=null==e?void 0:e.payload;if(!t||"object"!=typeof t)return null;if("string"!=typeof t.plant_id||!t.plant_id)return null;const n="fertilize"===t.kind?"fertilize":"water",r=t.at?Date.parse(t.at):NaN;return Number.isFinite(r)?{uid:e.uid,summary:e.summary,payload:{plant_id:t.plant_id,kind:n,at:t.at,note:"string"==typeof t.note?t.note:void 0},atMs:r}:null}function y(e,t,n){var r,i;const a=e.sensors;if(a&&"object"==typeof a)for(const e of t){const t=a[e];if("string"==typeof t&&(null===(r=n.states)||void 0===r?void 0:r[t]))return t}for(const r of t)for(const t of[`${r}_sensor`,`sensor_${r}`]){const r=e[t];if("string"==typeof r&&(null===(i=n.states)||void 0===i?void 0:i[r]))return r}}function f(e,t,n){for(const r of n){const n=`sensor.${t}_${r}`;if(e.includes(n))return n}const r=`sensor.${t}`;for(const t of n){const n=e.find(e=>e.startsWith(r)&&e.includes(t));if(n)return n}}const b=new class{async getEvents(e,t,n){if(!e||!t)return[];const r=await s.N2.getRecords(e,t,d,n),i=[];for(const e of r){const t=v(e);t&&i.push(t)}return i.sort((e,t)=>t.atMs-e.atMs),i}async recordCare(e,t,n,r,i){var a;if(!e||!t||!(null==n?void 0:n.id))return;const o=null!==(a=null==i?void 0:i.at)&&void 0!==a?a:new Date,l={plant_id:n.id,kind:r,at:o.toISOString()};(null==i?void 0:i.note)&&(l.note=i.note);const c="fertilize"===r?"Fertilized":"Watered",u=(null==i?void 0:i.summary)||`${c} ${n.name||n.id}`;await s.N2.addRecord(e,t,d,u,l)}async undoLastCare(e,t,n,r){if(!e||!t||!n)return!1;const i=(await this.getEvents(e,t)).find(e=>e.payload.plant_id===n&&e.payload.kind===r);return!!i&&(await s.N2.removeRecord(e,t,i.uid),!0)}async pruneHistory(e,t,n,r){if(!e||!t||!n)return 0;const i=Math.max(0,Math.floor(r));if(i<=0)return 0;const a=(await this.getEvents(e,t)).filter(e=>e.payload.plant_id===n);if(a.length<=i)return 0;const o=a.slice(i);for(const n of o)await s.N2.removeRecord(e,t,n.uid);return o.length}async purgeOrphans(e,t,n){if(!e||!t)return 0;const r=new Set(n),i=(await this.getEvents(e,t)).filter(e=>!r.has(e.payload.plant_id));for(const n of i)await s.N2.removeRecord(e,t,n.uid);return i.length}invalidate(e,t){s.N2.invalidate(e,t)}discoverPlants(e){if(!(null==e?void 0:e.states))return[];const t=Object.keys(e.states).filter(e=>e.startsWith("sensor.")),n=[];for(const r of Object.keys(e.states)){if(!r.startsWith("plant."))continue;const i=e.states[r],a=(null==i?void 0:i.attributes)||{},o=r.slice(6),s={entityId:r,name:String(a.friendly_name||o.replace(/_/g," "))},l=y(a,["moisture","soil_moisture"],e)||f(t,o,["moisture"]);l&&(s.moistureEntity=l);const d=y(a,["temperature"],e)||f(t,o,["temperature","temp"]);d&&(s.temperatureEntity=d);const c=y(a,["illuminance","brightness","light"],e)||f(t,o,["illuminance","brightness","light"]);c&&(s.illuminanceEntity=c),n.push(s)}return n.sort((e,t)=>e.name.localeCompare(t.name)),n}};class w extends i.m{constructor(){super(...arguments),this.metadata={type:"plant_care",title:"Plant Care",description:"Watering and fertilizing schedules with optional moisture sensors",author:"WJD Designs",version:"1.0.0",icon:"mdi:sprout",category:"data",tags:["pro","premium","plants","garden","watering","schedule","moisture","houseplants"]},this._preview=new Map,this._editor=new Map}createDefault(e,t){return{id:e||this.generateId("plant_care"),type:"plant_care",todo_entity:"",plants:[],layout:"grid",map_image:"",columns:3,default_water_interval_days:7,default_fertilize_interval_days:30,moisture_source:"both",seasonal_adjust:!1,summer_factor:.75,winter_factor:1.5,title:"",show_title:!0,show_summary_bar:!0,show_photos:!0,show_moisture:!0,show_next_due:!0,show_fertilize:!0,overdue_first:!0,history_limit:20,thirsty_color:"",happy_color:"",overdue_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=[],n=e;return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),n.todo_entity||t.push("Select a to-do list to store the care history"),{valid:0===t.length,errors:t}}getRuntimeEntityIds(e){const t=e,n=[];t.todo_entity&&n.push(t.todo_entity);for(const e of t.plants||[])e.moisture_entity&&n.push(e.moisture_entity),e.temperature_entity&&n.push(e.temperature_entity),e.illuminance_entity&&n.push(e.illuminance_entity);return n}renderGeneralTab(e,t,n,i){var s;const l=e,d=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en";return(0,o.gf)(t)?r.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        ${this._renderStorageSection(l,t,i,d)}
        ${this._renderPlantsSection(l,t,i,d)}
        ${this._renderLayoutSection(l,t,i,d)}
        ${this._renderDisplaySection(l,t,i,d)}
        ${this._renderScheduleSection(l,t,i,d)}
        ${this._renderAdvancedSection(l,t,i,d)}
        ${this._renderColorsSection(l,t,i,d)}
      </div>
    `:(0,o.b5)(d,(0,a.kg)("editor.plant_care.pro_description",d,"Plant Care is a Pro feature: a visual roster of your houseplants with watering and fertilizing schedules, one-tap care logging, and optional moisture sensors."))}_renderStorageSection(e,t,n,i){const o=e.todo_entity||"",l=!o||!t||(0,s.pC)(t,o);return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,a.kg)("editor.plant_care.storage_section",i,"Storage")}
        </div>
        <div class="uc-pc-note">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <span>
            ${(0,a.kg)("editor.plant_care.storage_help",i,"Watering history lives on a to-do list so every device in the house sees the same log. Create one under Settings → Devices & Services → Helpers → To-do list (Local to-do), name it something like “Plant Care”, then pick it here.")}
          </span>
        </div>
        ${this.renderFieldSection((0,a.kg)("editor.plant_care.todo_entity",i,"Care history list"),(0,a.kg)("editor.plant_care.todo_entity_desc",i,"A Local To-do helper used as storage. Nothing else should write to it."),t,{todo_entity:o},[{name:"todo_entity",selector:{entity:{domain:"todo"}}}],t=>{var r,i;n({todo_entity:null!==(i=null===(r=t.detail.value)||void 0===r?void 0:r.todo_entity)&&void 0!==i?i:""});const a=this._preview.get(e.id);a&&(a.lastFetchedAt=0),this.triggerPreviewUpdate()})}
        ${l?r.s6:r.qy`
              <div class="uc-pc-warn">
                <ha-icon icon="mdi:alert-outline"></ha-icon>
                <span>
                  ${(0,a.kg)("editor.plant_care.todo_no_description",i,"This list cannot store item descriptions (the Shopping List behaves this way). Care history still works, but the stored data is appended to each item title and looks messy in the Home Assistant to-do panel. A Local To-do helper avoids that.")}
                </span>
              </div>
            `}
      </div>
    `}_renderPlantsSection(e,t,n,i){const o=e.plants||[],s=this._ensureEditor(e.id);return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,a.kg)("editor.plant_care.plants_section",i,"Plants")}
        </div>
        <div class="uc-pc-section-desc">
          ${(0,a.kg)("editor.plant_care.plants_section_desc",i,"Every plant you want to keep an eye on. A watering interval is all that is required — sensors are optional.")}
        </div>

        ${0===o.length?r.qy`<div class="uc-pc-empty-rows">
              ${(0,a.kg)("editor.plant_care.no_plants_editor",i,"No plants yet. Add one below, or import the plant entities you already have in Home Assistant.")}
            </div>`:r.s6}
        ${o.map((r,a)=>this._renderPlantRow(r,a,e,t,n,i))}

        <button
          class="uc-pc-add-btn"
          type="button"
          @click=${()=>this._addPlant(e,n,i)}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
          ${(0,a.kg)("editor.plant_care.add_plant",i,"Add plant")}
        </button>

        ${this._renderImportPanel(e,t,n,i,s)}
      </div>
    `}_renderPlantRow(e,t,n,i,o,s){var l,d,c,u;const p=this._ensureEditor(n.id),h=p.expanded.has(e.id),_=n.plants||[],m=null!==(l=n.default_water_interval_days)&&void 0!==l?l:7,g=null!==(d=n.default_fertilize_interval_days)&&void 0!==d?d:0,v=null!==(c=e.water_interval_days)&&void 0!==c?c:m,y=this._imageUrl(i,e.image),f=[];return e.location&&f.push(e.location),f.push((0,a.kg)("editor.plant_care.row_every_days",s,"water every {days} days").replace("{days}",String(v))),r.qy`
      <div class="uc-pc-row ${h?"expanded":""}" data-uc-role="pane">
        <div class="uc-pc-row-head">
          <div class="uc-pc-thumb">
            ${y?r.qy`<img
                  src=${y}
                  alt=""
                  @error=${e=>{e.currentTarget.style.display="none"}}
                />`:r.s6}
            <ha-icon icon=${e.icon||"mdi:flower"}></ha-icon>
          </div>
          <div class="uc-pc-row-text">
            <div class="uc-pc-row-name">
              ${e.name||(0,a.kg)("editor.plant_care.unnamed_plant",s,"Unnamed plant")}
            </div>
            <div class="uc-pc-row-sub">${f.join(" · ")}</div>
          </div>
          <button
            class="uc-pc-icon-btn"
            type="button"
            ?disabled=${0===t}
            title=${(0,a.kg)("editor.plant_care.move_up",s,"Move up")}
            aria-label=${(0,a.kg)("editor.plant_care.move_up",s,"Move up")}
            @click=${()=>this._movePlant(n,t,-1,o)}
          >
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button
            class="uc-pc-icon-btn"
            type="button"
            ?disabled=${t===_.length-1}
            title=${(0,a.kg)("editor.plant_care.move_down",s,"Move down")}
            aria-label=${(0,a.kg)("editor.plant_care.move_down",s,"Move down")}
            @click=${()=>this._movePlant(n,t,1,o)}
          >
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
          <button
            class="uc-pc-icon-btn expand ${h?"on":""}"
            type="button"
            title=${h?(0,a.kg)("editor.plant_care.collapse",s,"Collapse"):(0,a.kg)("editor.plant_care.edit",s,"Edit")}
            aria-label=${h?(0,a.kg)("editor.plant_care.collapse",s,"Collapse"):(0,a.kg)("editor.plant_care.edit",s,"Edit")}
            @click=${()=>{h?p.expanded.delete(e.id):p.expanded.add(e.id),this.triggerPreviewUpdate()}}
          >
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="uc-pc-icon-btn danger"
            type="button"
            title=${(0,a.kg)("editor.plant_care.delete_plant",s,"Delete plant")}
            aria-label=${(0,a.kg)("editor.plant_care.delete_plant",s,"Delete plant")}
            @click=${()=>this._deletePlant(n,t,o)}
          >
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>

        ${h?r.qy`
              <div class="uc-pc-row-body">
                ${this.renderFieldSection((0,a.kg)("editor.plant_care.plant_name",s,"Name"),(0,a.kg)("editor.plant_care.plant_name_desc",s,"What you call this plant — “Monstera”, “Kitchen basil”."),i,{name:e.name||""},[this.textField("name")],e=>{var r,i;return this._patchPlant(n,t,{name:null!==(i=null===(r=e.detail.value)||void 0===r?void 0:r.name)&&void 0!==i?i:""},o)})}
                ${this.renderIconField((0,a.kg)("editor.plant_care.plant_icon",s,"Icon"),(0,a.kg)("editor.plant_care.plant_icon_desc",s,"Shown when there is no photo, and as the fallback if a photo fails to load."),i,e.icon||"",e=>this._patchPlant(n,t,{icon:e},o))}
                ${this.renderFileField((0,a.kg)("editor.plant_care.plant_photo",s,"Photo"),(0,a.kg)("editor.plant_care.plant_photo_desc",s,"Optional. A photo makes the grid layout much easier to scan."),i,e.image||"",e=>this._patchPlant(n,t,{image:e},o))}
                ${this.renderFieldSection((0,a.kg)("editor.plant_care.plant_location",s,"Location"),(0,a.kg)("editor.plant_care.plant_location_desc",s,"Optional room or spot, shown under the name."),i,{location:e.location||""},[this.textField("location")],e=>{var r,i;return this._patchPlant(n,t,{location:null!==(i=null===(r=e.detail.value)||void 0===r?void 0:r.location)&&void 0!==i?i:""},o)})}
                ${this.renderSliderField((0,a.kg)("editor.plant_care.plant_water_interval",s,"Water every"),(0,a.kg)("editor.plant_care.plant_water_interval_desc",s,"How often this plant wants water."),v,m,1,90,1,e=>this._patchPlant(n,t,{water_interval_days:e},o),(0,a.kg)("editor.plant_care.unit_days",s," days"))}
                ${void 0!==e.water_interval_days?r.qy`<button
                      class="uc-pc-linkbtn"
                      type="button"
                      @click=${()=>this._clearPlantField(n,t,"water_interval_days",o)}
                    >
                      ${(0,a.kg)("editor.plant_care.use_default_water",s,"Use the module default ({days} days)").replace("{days}",String(m))}
                    </button>`:r.s6}
                ${this.renderSliderField((0,a.kg)("editor.plant_care.plant_fertilize_interval",s,"Fertilize every"),(0,a.kg)("editor.plant_care.plant_fertilize_interval_desc",s,"Set to 0 to turn fertilizing reminders off for this plant."),null!==(u=e.fertilize_interval_days)&&void 0!==u?u:g,g,0,180,1,e=>this._patchPlant(n,t,{fertilize_interval_days:e},o),(0,a.kg)("editor.plant_care.unit_days",s," days"))}
                ${this.renderFieldSection((0,a.kg)("editor.plant_care.plant_notes",s,"Notes"),(0,a.kg)("editor.plant_care.plant_notes_desc",s,"Optional reminder to yourself — “bottom water only”, “likes it dry”."),i,{notes:e.notes||""},[this.textField("notes",!0)],e=>{var r,i;return this._patchPlant(n,t,{notes:null!==(i=null===(r=e.detail.value)||void 0===r?void 0:r.notes)&&void 0!==i?i:""},o)})}
                ${"map"===n.layout?this._renderMapPlacement(e,t,n,i,o,s):r.s6}
                ${this._renderSensorGroup(e,t,n,i,o,s)}
              </div>
            `:r.s6}
      </div>
    `}_renderSensorGroup(e,t,n,i,o,s){var l;const d=this._ensureEditor(n.id),c=d.advanced.has(e.id)||!!e.moisture_entity||!!e.temperature_entity||!!e.illuminance_entity;return r.qy`
      <button
        class="uc-pc-subtoggle ${c?"on":""}"
        type="button"
        @click=${()=>{d.advanced.has(e.id)?d.advanced.delete(e.id):d.advanced.add(e.id),this.triggerPreviewUpdate()}}
      >
        <ha-icon icon=${c?"mdi:chevron-down":"mdi:chevron-right"}></ha-icon>
        ${(0,a.kg)("editor.plant_care.advanced_sensors",s,"Advanced sensors")}
      </button>
      ${c?this.renderConditionalFieldsGroup((0,a.kg)("editor.plant_care.advanced_sensors",s,"Advanced sensors"),r.qy`
              <div class="uc-pc-note subtle">
                ${(0,a.kg)("editor.plant_care.advanced_sensors_desc",s,"If this plant has a moisture probe, the live reading takes over from the schedule guess. Plants without one keep using the schedule.")}
              </div>
              ${this.renderFieldSection((0,a.kg)("editor.plant_care.moisture_entity",s,"Moisture sensor"),(0,a.kg)("editor.plant_care.moisture_entity_desc",s,"A sensor reporting soil moisture as a percentage."),i,{moisture_entity:e.moisture_entity||""},[{name:"moisture_entity",selector:{entity:{domain:["sensor"]}}}],e=>{var r,i;return this._patchPlant(n,t,{moisture_entity:null!==(i=null===(r=e.detail.value)||void 0===r?void 0:r.moisture_entity)&&void 0!==i?i:""},o)})}
              ${this.renderSliderField((0,a.kg)("editor.plant_care.moisture_threshold",s,"Thirsty below"),(0,a.kg)("editor.plant_care.moisture_threshold_desc",s,"Readings under this percentage mean the plant wants water."),null!==(l=e.moisture_threshold)&&void 0!==l?l:30,30,0,100,1,e=>this._patchPlant(n,t,{moisture_threshold:e},o),"%")}
              ${this.renderFieldSection((0,a.kg)("editor.plant_care.temperature_entity",s,"Temperature sensor"),(0,a.kg)("editor.plant_care.temperature_entity_desc",s,"Optional. Shown on the plant detail, not used for scheduling."),i,{temperature_entity:e.temperature_entity||""},[{name:"temperature_entity",selector:{entity:{domain:["sensor"]}}}],e=>{var r,i;return this._patchPlant(n,t,{temperature_entity:null!==(i=null===(r=e.detail.value)||void 0===r?void 0:r.temperature_entity)&&void 0!==i?i:""},o)})}
              ${this.renderFieldSection((0,a.kg)("editor.plant_care.illuminance_entity",s,"Light sensor"),(0,a.kg)("editor.plant_care.illuminance_entity_desc",s,"Optional. Shown on the plant detail, not used for scheduling."),i,{illuminance_entity:e.illuminance_entity||""},[{name:"illuminance_entity",selector:{entity:{domain:["sensor"]}}}],e=>{var r,i;return this._patchPlant(n,t,{illuminance_entity:null!==(i=null===(r=e.detail.value)||void 0===r?void 0:r.illuminance_entity)&&void 0!==i?i:""},o)})}
            `):r.s6}
    `}_renderMapPlacement(e,t,n,i,o,s){var l,d;const c=this._imageUrl(i,n.map_image),u=x(null!==(l=e.x)&&void 0!==l?l:.5),p=x(null!==(d=e.y)&&void 0!==d?d:.5);return this.renderConditionalFieldsGroup((0,a.kg)("editor.plant_care.map_position",s,"Position on the map"),r.qy`
        ${c?r.qy`
              <div class="uc-pc-note subtle">
                ${(0,a.kg)("editor.plant_care.map_position_help",s,"Click the plan to drop this plant where it lives.")}
              </div>
              <div
                class="uc-pc-map-pick"
                @click=${e=>{const r=this._pointFromClick(e);this._patchPlant(n,t,{x:r.x,y:r.y},o)}}
              >
                <img src=${c} alt="" draggable="false" />
                <span class="uc-pc-map-pin" style="left:${100*u}%;top:${100*p}%;">
                  <ha-icon icon=${e.icon||"mdi:flower"}></ha-icon>
                </span>
              </div>
            `:r.qy`<div class="uc-pc-note subtle">
              ${(0,a.kg)("editor.plant_care.map_position_no_image",s,"Upload a floor plan under Layout to place plants by clicking. Until then, use the sliders below.")}
            </div>`}
        ${this.renderSliderField((0,a.kg)("editor.plant_care.map_x",s,"Horizontal position"),"",Math.round(100*u),50,0,100,1,e=>this._patchPlant(n,t,{x:e/100},o),"%")}
        ${this.renderSliderField((0,a.kg)("editor.plant_care.map_y",s,"Vertical position"),"",Math.round(100*p),50,0,100,1,e=>this._patchPlant(n,t,{y:e/100},o),"%")}
      `)}_renderImportPanel(e,t,n,i,o){return r.qy`
      <button
        class="uc-pc-secondary-btn"
        type="button"
        @click=${()=>{o.importOpen=!o.importOpen,o.importOpen&&!o.importScanned&&(o.discovered=b.discoverPlants(t),o.importScanned=!0),o.message="",this.triggerPreviewUpdate()}}
      >
        <ha-icon icon="mdi:import"></ha-icon>
        ${(0,a.kg)("editor.plant_care.import_button",i,"Import from HA plant entities")}
      </button>

      ${o.importOpen?r.qy`
            <div class="uc-pc-import">
              ${0===o.discovered.length?r.qy`<div class="uc-pc-note subtle">
                    ${(0,a.kg)("editor.plant_care.import_none",i,"No plant.* entities found in Home Assistant. Add plants manually instead.")}
                  </div>`:r.qy`
                    <div class="uc-pc-note subtle">
                      ${(0,a.kg)("editor.plant_care.import_help",i,"Found these plant entities. Importing copies the name and any moisture sensor it could match — you can adjust everything afterwards.")}
                    </div>
                    ${o.discovered.map(t=>{const o=this._isImported(e,t);return r.qy`
                        <div class="uc-pc-import-row">
                          <ha-icon icon="mdi:flower-outline"></ha-icon>
                          <div class="uc-pc-import-text">
                            <div class="uc-pc-import-name">${t.name}</div>
                            <div class="uc-pc-import-sub">
                              ${t.moistureEntity?(0,a.kg)("editor.plant_care.import_with_sensor",i,"Moisture sensor: {entity}").replace("{entity}",t.moistureEntity):(0,a.kg)("editor.plant_care.import_no_sensor",i,"No moisture sensor matched — schedule only")}
                            </div>
                          </div>
                          <button
                            class="uc-pc-linkbtn strong"
                            type="button"
                            ?disabled=${o}
                            @click=${()=>this._importPlant(e,t,n,i)}
                          >
                            ${o?(0,a.kg)("editor.plant_care.import_added",i,"Added"):(0,a.kg)("editor.plant_care.import_add",i,"Add")}
                          </button>
                        </div>
                      `})}
                    <button
                      class="uc-pc-secondary-btn"
                      type="button"
                      @click=${()=>this._importAll(e,n,i,o)}
                    >
                      <ha-icon icon="mdi:playlist-plus"></ha-icon>
                      ${(0,a.kg)("editor.plant_care.import_all",i,"Add all missing")}
                    </button>
                  `}
              ${o.message?r.qy`<div class="uc-pc-note subtle">${o.message}</div>`:r.s6}
            </div>
          `:r.s6}
    `}_renderLayoutSection(e,t,n,i){var o;const s=e.layout||"grid";return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,a.kg)("editor.plant_care.layout_section",i,"Layout")}
        </div>
        ${this.renderSegmentedField((0,a.kg)("editor.plant_care.layout",i,"Layout"),(0,a.kg)("editor.plant_care.layout_desc",i,"Grid for photos, list for density, map to place plants on a floor plan."),s,[{value:"grid",label:(0,a.kg)("editor.plant_care.layout_grid",i,"Grid"),icon:"mdi:view-grid"},{value:"list",label:(0,a.kg)("editor.plant_care.layout_list",i,"List"),icon:"mdi:format-list-bulleted"},{value:"map",label:(0,a.kg)("editor.plant_care.layout_map",i,"Map"),icon:"mdi:map-outline"}],e=>{n({layout:e||"grid"}),this.triggerPreviewUpdate()},3)}
        ${"grid"===s?this.renderSliderField((0,a.kg)("editor.plant_care.columns",i,"Columns"),(0,a.kg)("editor.plant_care.columns_desc",i,"A target, not a hard count — tiles reflow on narrow screens."),null!==(o=e.columns)&&void 0!==o?o:3,3,1,6,1,e=>{n({columns:e}),this.triggerPreviewUpdate()},""):r.s6}
        ${"map"===s?this.renderFileField((0,a.kg)("editor.plant_care.map_image",i,"Floor plan"),(0,a.kg)("editor.plant_care.map_image_desc",i,"Background image for the map layout. Place each plant on it from its row above."),t,e.map_image||"",e=>{n({map_image:e}),this.triggerPreviewUpdate()}):r.s6}
      </div>
    `}_renderDisplaySection(e,t,n,i){const o=(e,r,i,a)=>({title:r,description:i,hass:t,data:{[e]:a},schema:[this.booleanField(String(e))],onChange:t=>{var r;n({[e]:null===(r=t.detail.value)||void 0===r?void 0:r[e]}),this.triggerPreviewUpdate()}});return r.qy`
      ${this.renderSettingsSection((0,a.kg)("editor.plant_care.display_section",i,"Display"),(0,a.kg)("editor.plant_care.display_section_desc",i,"Choose what the card shows."),[o("show_title",(0,a.kg)("editor.plant_care.show_title",i,"Show title"),"",!1!==e.show_title),{title:(0,a.kg)("editor.plant_care.title",i,"Title"),description:(0,a.kg)("editor.plant_care.title_desc",i,"Leave blank to use “Plant Care”."),hass:t,data:{title:e.title||""},schema:[this.textField("title")],onChange:e=>{var t,r;n({title:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.title)&&void 0!==r?r:""}),this.triggerPreviewUpdate()}},o("show_summary_bar",(0,a.kg)("editor.plant_care.show_summary_bar",i,"Show summary bar"),(0,a.kg)("editor.plant_care.show_summary_bar_desc",i,"A one-line count of thirsty, overdue and happy plants."),!1!==e.show_summary_bar),o("show_photos",(0,a.kg)("editor.plant_care.show_photos",i,"Show photos"),(0,a.kg)("editor.plant_care.show_photos_desc",i,"Turn off to fall back to icons everywhere."),!1!==e.show_photos),o("show_moisture",(0,a.kg)("editor.plant_care.show_moisture",i,"Show moisture readings"),"",!1!==e.show_moisture),o("show_next_due",(0,a.kg)("editor.plant_care.show_next_due",i,"Show next watering due"),"",!1!==e.show_next_due),o("show_fertilize",(0,a.kg)("editor.plant_care.show_fertilize",i,"Show fertilizing"),(0,a.kg)("editor.plant_care.show_fertilize_desc",i,"Adds a secondary fertilize action for plants that have an interval set."),!1!==e.show_fertilize),o("overdue_first",(0,a.kg)("editor.plant_care.overdue_first",i,"Sort by urgency"),(0,a.kg)("editor.plant_care.overdue_first_desc",i,"Overdue and thirsty plants float to the top instead of keeping your order."),!1!==e.overdue_first)])}
    `}_renderScheduleSection(e,t,n,i){var o,s;return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,a.kg)("editor.plant_care.schedule_section",i,"Schedule defaults")}
        </div>
        <div class="uc-pc-section-desc">
          ${(0,a.kg)("editor.plant_care.schedule_section_desc",i,"Used by every plant that does not set its own interval.")}
        </div>
        ${this.renderSliderField((0,a.kg)("editor.plant_care.default_water",i,"Default watering interval"),"",null!==(o=e.default_water_interval_days)&&void 0!==o?o:7,7,1,90,1,e=>{n({default_water_interval_days:e}),this.triggerPreviewUpdate()},(0,a.kg)("editor.plant_care.unit_days",i," days"))}
        ${this.renderSliderField((0,a.kg)("editor.plant_care.default_fertilize",i,"Default fertilizing interval"),(0,a.kg)("editor.plant_care.default_fertilize_desc",i,"0 turns fertilizing off."),null!==(s=e.default_fertilize_interval_days)&&void 0!==s?s:30,30,0,180,1,e=>{n({default_fertilize_interval_days:e}),this.triggerPreviewUpdate()},(0,a.kg)("editor.plant_care.unit_days",i," days"))}
        ${this.renderSegmentedField((0,a.kg)("editor.plant_care.moisture_source",i,"Thirst comes from"),(0,a.kg)("editor.plant_care.moisture_source_desc",i,"Plants without a moisture sensor always fall back to the schedule — the card says so on each plant."),e.moisture_source||"both",[{value:"schedule",label:(0,a.kg)("editor.plant_care.source_schedule",i,"Schedule"),icon:"mdi:calendar-clock"},{value:"sensor",label:(0,a.kg)("editor.plant_care.source_sensor",i,"Sensor"),icon:"mdi:water-percent"},{value:"both",label:(0,a.kg)("editor.plant_care.source_both",i,"Both"),icon:"mdi:set-center"}],e=>{n({moisture_source:e||"both"}),this.triggerPreviewUpdate()},3)}
      </div>
    `}_renderAdvancedSection(e,t,n,i){var o,s,l,d,c,u,p,h;const _="number"==typeof(null===(o=null==t?void 0:t.config)||void 0===o?void 0:o.latitude)&&t.config.latitude<0,g=m({seasonal_adjust:!0,summer_factor:null!==(s=e.summer_factor)&&void 0!==s?s:.75,winter_factor:null!==(l=e.winter_factor)&&void 0!==l?l:1.5,latitude:null!==(c=null===(d=null==t?void 0:t.config)||void 0===d?void 0:d.latitude)&&void 0!==c?c:null},Date.now());return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,a.kg)("editor.plant_care.advanced_section",i,"Advanced")}
        </div>
        ${this.renderFieldSection((0,a.kg)("editor.plant_care.seasonal_adjust",i,"Seasonal adjustment"),(0,a.kg)("editor.plant_care.seasonal_adjust_desc",i,"Stretch watering intervals in winter and shorten them in summer. The change eases across the year rather than flipping at the solstice, and the hemisphere is taken from your Home Assistant location."),t,{seasonal_adjust:!!e.seasonal_adjust},[this.booleanField("seasonal_adjust")],e=>{var t;n({seasonal_adjust:!!(null===(t=e.detail.value)||void 0===t?void 0:t.seasonal_adjust)}),this.triggerPreviewUpdate()})}
        ${e.seasonal_adjust?this.renderConditionalFieldsGroup((0,a.kg)("editor.plant_care.seasonal_group",i,"Seasonal factors"),r.qy`
                <div class="uc-pc-note subtle">
                  ${(_?(0,a.kg)("editor.plant_care.hemisphere_south",i,"Your Home Assistant location is in the southern hemisphere, so summer peaks in January."):(0,a.kg)("editor.plant_care.hemisphere_north",i,"Your Home Assistant location is in the northern hemisphere, so summer peaks in July."))+" "+(0,a.kg)("editor.plant_care.hemisphere_today",i,"Today intervals are multiplied by {factor}×.").replace("{factor}",g.toFixed(2))}
                </div>
                ${this.renderSliderField((0,a.kg)("editor.plant_care.summer_factor",i,"Summer factor"),(0,a.kg)("editor.plant_care.summer_factor_desc",i,"Below 1 waters more often at the height of summer."),null!==(u=e.summer_factor)&&void 0!==u?u:.75,.75,.25,2,.05,e=>{n({summer_factor:e}),this.triggerPreviewUpdate()},"×")}
                ${this.renderSliderField((0,a.kg)("editor.plant_care.winter_factor",i,"Winter factor"),(0,a.kg)("editor.plant_care.winter_factor_desc",i,"Above 1 stretches the gap between waterings in deep winter."),null!==(p=e.winter_factor)&&void 0!==p?p:1.5,1.5,.25,2,.05,e=>{n({winter_factor:e}),this.triggerPreviewUpdate()},"×")}
              `):r.s6}
        ${this.renderSliderField((0,a.kg)("editor.plant_care.history_limit",i,"History kept per plant"),(0,a.kg)("editor.plant_care.history_limit_desc",i,"Older care entries are removed from the to-do list so it does not grow forever."),null!==(h=e.history_limit)&&void 0!==h?h:20,20,5,200,5,e=>{n({history_limit:e}),this.triggerPreviewUpdate()},"")}
      </div>
    `}_renderColorsSection(e,t,n,i){const o=[["happy_color",(0,a.kg)("editor.plant_care.happy_color",i,"Happy"),(0,a.kg)("editor.plant_care.happy_color_desc",i,"Plants that need nothing."),"var(--success-color)"],["thirsty_color",(0,a.kg)("editor.plant_care.thirsty_color",i,"Thirsty"),(0,a.kg)("editor.plant_care.thirsty_color_desc",i,"Due now or drifting dry."),"var(--warning-color)"],["overdue_color",(0,a.kg)("editor.plant_care.overdue_color",i,"Overdue"),(0,a.kg)("editor.plant_care.overdue_color_desc",i,"Well past due, or bone dry."),"var(--error-color)"],["text_color",(0,a.kg)("editor.plant_care.text_color",i,"Text"),"","var(--primary-text-color)"],["secondary_text_color",(0,a.kg)("editor.plant_care.secondary_text_color",i,"Secondary text"),"","var(--secondary-text-color)"],["card_background_color",(0,a.kg)("editor.plant_care.card_background_color",i,"Card background"),"","var(--card-background-color)"]];return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,a.kg)("editor.plant_care.colors_section",i,"Colors")}
        </div>
        ${o.map(([r,i,a,o])=>this.renderColorField(i,a,t,String(e[r]||""),o,e=>{n({[r]:e}),this.triggerPreviewUpdate()}))}
      </div>
    `}_ensureEditor(e){let t=this._editor.get(e);return t||(t={expanded:new Set,advanced:new Set,importOpen:!1,importScanned:!1,discovered:[],message:""},this._editor.set(e,t)),t}_patchPlant(e,t,n,r){const i=[...e.plants||[]],a=i[t];a&&(i[t]=Object.assign(Object.assign({},a),n),r({plants:i}),this.triggerPreviewUpdate())}_clearPlantField(e,t,n,r){const i=[...e.plants||[]],a=i[t];if(!a)return;const o=Object.assign({},a);delete o[n],i[t]=o,r({plants:i}),this.triggerPreviewUpdate()}_addPlant(e,t,n){const r=[...e.plants||[]],i={id:this.generateId("plant"),name:(0,a.kg)("editor.plant_care.new_plant_name",n,"New plant"),icon:"mdi:flower",x:.5,y:.5};r.push(i),t({plants:r}),this._ensureEditor(e.id).expanded.add(i.id),this.triggerPreviewUpdate()}_deletePlant(e,t,n){const r=[...e.plants||[]],i=r[t];i&&(r.splice(t,1),this._ensureEditor(e.id).expanded.delete(i.id),n({plants:r}),this.triggerPreviewUpdate())}_movePlant(e,t,n,r){const i=[...e.plants||[]],a=t+n;if(a<0||a>=i.length)return;const[o]=i.splice(t,1);i.splice(a,0,o),r({plants:i}),this.triggerPreviewUpdate()}_isImported(e,t){const n=t.name.trim().toLowerCase();return(e.plants||[]).some(e=>!(!t.moistureEntity||e.moisture_entity!==t.moistureEntity)||(e.name||"").trim().toLowerCase()===n)}_importPlant(e,t,n,r){this._isImported(e,t)||(n({plants:[...e.plants||[],this._entryFromCandidate(t)]}),this.triggerPreviewUpdate())}_importAll(e,t,n,r){const i=r.discovered.filter(t=>!this._isImported(e,t)).map(e=>this._entryFromCandidate(e));if(0===i.length)return r.message=(0,a.kg)("editor.plant_care.import_nothing_new",n,"Everything here has already been imported."),void this.triggerPreviewUpdate();t({plants:[...e.plants||[],...i]}),r.message=(0,a.kg)("editor.plant_care.import_done",n,"Imported {count} plants.").replace("{count}",String(i.length)),this.triggerPreviewUpdate()}_entryFromCandidate(e){const t={id:this.generateId("plant"),name:e.name,icon:"mdi:flower",x:.5,y:.5};return e.moistureEntity&&(t.moisture_entity=e.moistureEntity),e.temperatureEntity&&(t.temperature_entity=e.temperatureEntity),e.illuminanceEntity&&(t.illuminance_entity=e.illuminanceEntity),t}_imageUrl(e,t){if(!e||!t)return"";try{return(0,l.VG)(e,t)}catch(e){return""}}_pointFromClick(e){const t=e.currentTarget.getBoundingClientRect();return{x:x((e.clientX-t.left)/(t.width||1)),y:x((e.clientY-t.top)/(t.height||1))}}renderPreview(e,t,n,i){var o,s,l,d,c,v;const y=e,f=(null===(o=null==t?void 0:t.locale)||void 0===o?void 0:o.language)||"en";if(!y.todo_entity)return this.renderGradientErrorState((0,a.kg)("editor.plant_care.setup_title",f,"Pick a care history list"),(0,a.kg)("editor.plant_care.setup_desc",f,"Choose a Local To-do helper under Storage in the General tab. Watering history is saved there."),"mdi:sprout");const b=this._ensurePreview(y);this._ensureEventsLoaded(y,t);const w=y.plants||[],x=function(e,t){return t?[...e].sort((e,t)=>{var n,r;const i=g(t.state)-g(e.state);return 0!==i?i:(null!==(n=e.waterDueInDays)&&void 0!==n?n:Number.POSITIVE_INFINITY)-(null!==(r=t.waterDueInDays)&&void 0!==r?r:Number.POSITIVE_INFINITY)}):e}(function(e,t,n,r=Date.now()){var i;const a=Array.isArray(e)?e:[];if(0===a.length)return[];const o=new Map,s=new Map;for(const e of Array.isArray(t)?t:[]){const t=null===(i=null==e?void 0:e.payload)||void 0===i?void 0:i.plant_id;if(!t||!Number.isFinite(e.atMs))continue;const n="fertilize"===e.payload.kind?s:o,r=n.get(t);(void 0===r||e.atMs>r)&&n.set(t,e.atMs)}const l=(null==n?void 0:n.moisture_source)||"both",d=m(n,r),c=null==n?void 0:n.readSensor;return a.map(e=>{var t,i,a,m,g,v,y;const f=p(Number(null!==(i=null!==(t=e.water_interval_days)&&void 0!==t?t:null==n?void 0:n.default_water_interval_days)&&void 0!==i?i:7),1,365),b=Math.max(.5,h(f*d)),w=Number(null!==(m=null!==(a=e.fertilize_interval_days)&&void 0!==a?a:null==n?void 0:n.default_fertilize_interval_days)&&void 0!==m?m:0),x=Number.isFinite(w)&&w>0?p(w,1,365):0,k=null!==(g=o.get(e.id))&&void 0!==g?g:null,$=null!==(v=s.get(e.id))&&void 0!==v?v:null,S=null===k?null:Math.max(0,(r-k)/u),P=null===S?null:b-S,z=x>0&&null!==$?x-(r-$)/u:null,F=p(Number(null!==(y=e.moisture_threshold)&&void 0!==y?y:30),0,100);let I=null;"schedule"!==l&&e.moisture_entity&&c&&(I=c(e.moisture_entity));const M=e.temperature_entity&&c?c(e.temperature_entity):null,C=e.illuminance_entity&&c?c(e.illuminance_entity):null,D=function(e,t){if(null===e)return"never";const n=Math.min(2,.25*t),r=Math.min(7,Math.max(1,.5*t));return e>n?"happy":e>0?"due_soon":-e<=r?"thirsty":"overdue"}(P,b),U=null===I?null:function(e,t){return e<.6*t?"overdue":e<t?"thirsty":e<t+10?"due_soon":"happy"}(I,F);let A,q;return null===U||"schedule"===l?(A=D,q="never"===D?"none":"schedule"):"sensor"===l||"never"===D||_(U)>=_(D)?(A=U,q="sensor"):(A=D,q="schedule"),{plant:e,lastWateredMs:k,lastFertilizedMs:$,waterIntervalDays:b,fertilizeIntervalDays:x,daysSinceWater:null===S?null:h(S),waterDueInDays:null===P?null:h(P),fertilizeDueInDays:null===z?null:h(z),moisture:I,moistureThreshold:F,reason:q,state:A,temperature:M,illuminance:C}})}(w,b.events,function(e,t){var n;const r="number"==typeof(null===(n=null==t?void 0:t.config)||void 0===n?void 0:n.latitude)&&Number.isFinite(t.config.latitude)?t.config.latitude:null;return Object.assign(Object.assign({},e),{latitude:r,readSensor:e=>function(e,t){if(!(null==e?void 0:e.states)||!t)return null;const n=e.states[t];if(!n)return null;const r=n.state;if(null==r||"unknown"===r||"unavailable"===r)return null;const i=Number(r);return Number.isFinite(i)?i:null}(t,e)})}({default_water_interval_days:null!==(s=y.default_water_interval_days)&&void 0!==s?s:7,default_fertilize_interval_days:null!==(l=y.default_fertilize_interval_days)&&void 0!==l?l:0,moisture_source:y.moisture_source||"both",seasonal_adjust:!!y.seasonal_adjust,summer_factor:null!==(d=y.summer_factor)&&void 0!==d?d:.75,winter_factor:null!==(c=y.winter_factor)&&void 0!==c?c:1.5},t),Date.now()),!1!==y.overdue_first),k=this._palette(y),$=this.buildStyleString(this.buildDesignStyles(e,t)),S=this.getHoverEffectClass(e),P=(null===(v=y.title)||void 0===v?void 0:v.trim())||(0,a.kg)("editor.plant_care.default_title",f,"Plant Care"),z=r.qy`
      ${!1!==y.show_title?r.qy`<div class="uc-pc-header" style="color:${k.text};">
            <ha-icon icon="mdi:sprout"></ha-icon>
            <span class="uc-pc-header-text">${P}</span>
            ${y.seasonal_adjust?r.qy`<span
                  class="uc-pc-season"
                  style="color:${k.secondary};"
                  title=${this._seasonTooltip(y,t,f)}
                >
                  <ha-icon icon="mdi:weather-partly-cloudy"></ha-icon>
                </span>`:r.s6}
          </div>`:r.s6}
      ${b.error?r.qy`<div class="uc-pc-banner error">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <span>${b.error}</span>
          </div>`:r.s6}
      ${0===w.length?this._renderNoPlants(f,k):r.qy`
            ${!1!==y.show_summary_bar?this._renderSummaryBar(x,k,f):r.s6}
            ${b.loading&&0===b.events.length?r.qy`<div class="uc-pc-loading" style="color:${k.secondary};">
                  ${(0,a.kg)("editor.plant_care.loading",f,"Loading care history…")}
                </div>`:r.s6}
            ${this._renderUndoBar(y,t,b,k,f)}
            ${this._renderLayoutBody(y,t,x,b,k,f)}
          `}
    `;return r.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div
        class="uc-pc-wrapper ${S}"
        style="padding:14px;border-radius:var(--uc-r-12, 12px);background:${k.cardBg};${$}"
      >
        ${this.wrapWithAnimation(z,e,t)}
      </div>
    `}_renderNoPlants(e,t){return r.qy`
      <div class="uc-pc-blank">
        <ha-icon icon="mdi:flower-outline" style="color:${t.happy};"></ha-icon>
        <div class="uc-pc-blank-title" style="color:${t.text};">
          ${(0,a.kg)("editor.plant_care.add_first_title",e,"Add your first plant")}
        </div>
        <div class="uc-pc-blank-sub" style="color:${t.secondary};">
          ${(0,a.kg)("editor.plant_care.add_first_desc",e,"Open the General tab and add a plant with a name and a watering interval. Photos and moisture sensors are optional extras.")}
        </div>
      </div>
    `}_renderSummaryBar(e,t,n){const i=function(e){const t={total:e.length,happy:0,dueSoon:0,thirsty:0,overdue:0,never:0,next:null};for(const n of e)switch(n.state){case"happy":t.happy++;break;case"due_soon":t.dueSoon++;break;case"thirsty":t.thirsty++;break;case"overdue":t.overdue++;break;default:t.never++}const n=e.filter(e=>null!==e.waterDueInDays);return n.length>0?t.next=n.reduce((e,t)=>t.waterDueInDays<e.waterDueInDays?t:e):e.length>0&&(t.next=e[0]),t}(e),o=[],s=(e,t,n)=>r.qy`
      <span class="uc-pc-sum-chip" style="color:${n};">
        <span class="uc-pc-dot" style="background:${n};"></span>${e} ${t}
      </span>
    `;i.thirsty>0&&o.push(s(i.thirsty,(0,a.kg)("editor.plant_care.sum_thirsty",n,"thirsty"),t.thirsty)),i.overdue>0&&o.push(s(i.overdue,(0,a.kg)("editor.plant_care.sum_overdue",n,"overdue"),t.overdue)),i.dueSoon>0&&o.push(s(i.dueSoon,(0,a.kg)("editor.plant_care.sum_due_soon",n,"due soon"),t.thirsty)),i.happy>0&&o.push(s(i.happy,(0,a.kg)("editor.plant_care.sum_happy",n,"happy"),t.happy)),i.never>0&&o.push(s(i.never,(0,a.kg)("editor.plant_care.sum_never",n,"never watered"),t.secondary));const l=i.next,d=l&&null!==l.waterDueInDays?(0,a.kg)("editor.plant_care.sum_next",n,"Next: {name} {when}").replace("{name}",l.plant.name||"—").replace("{when}",this._dueLabel(l,n).toLowerCase()):"";return r.qy`
      <div class="uc-pc-summary">
        <div class="uc-pc-sum-chips">${o}</div>
        ${d?r.qy`<div class="uc-pc-sum-next" style="color:${t.secondary};">${d}</div>`:r.s6}
      </div>
    `}_renderUndoBar(e,t,n,i,o){const s=n.undo;if(!s)return r.s6;if(Date.now()-s.at>2e4)return n.undo=null,r.s6;const l="fertilize"===s.kind?(0,a.kg)("editor.plant_care.undo_fertilized",o,"Fertilized {name}"):(0,a.kg)("editor.plant_care.undo_watered",o,"Watered {name}");return r.qy`
      <div class="uc-pc-undo" style="color:${i.secondary};">
        <ha-icon icon=${"fertilize"===s.kind?"mdi:leaf":"mdi:water"}></ha-icon>
        <span class="uc-pc-undo-text">${l.replace("{name}",s.plantName)}</span>
        <button class="uc-pc-undo-btn" type="button" @click=${()=>this._undoCare(e,t,n)}>
          ${(0,a.kg)("editor.plant_care.undo",o,"Undo")}
        </button>
      </div>
    `}_renderLayoutBody(e,t,n,r,i,a){switch(e.layout){case"list":return this._renderListLayout(e,t,n,r,i,a);case"map":return this._renderMapLayout(e,t,n,r,i,a);default:return this._renderGridLayout(e,t,n,r,i,a)}}_renderGridLayout(e,t,n,i,a,o){var s;const l=Math.min(6,Math.max(1,null!==(s=e.columns)&&void 0!==s?s:3)),d=Math.round(Math.max(96,320/l));return r.qy`
      <div
        class="uc-pc-grid"
        style="grid-template-columns:repeat(auto-fill,minmax(${d}px,1fr));"
      >
        ${n.map(n=>this._renderTile(e,t,n,i,a,o))}
      </div>
    `}_renderTile(e,t,n,i,o,s){const l=n.plant,d=this._stateColor(n.state,o),c=i.busyPlantId===l.id,u=!1!==e.show_fertilize&&n.fertilizeIntervalDays>0;return r.qy`
      <div class="uc-pc-tile" style="border-color:${d};">
        <button
          class="uc-pc-tile-main"
          type="button"
          ?disabled=${c}
          title=${(0,a.kg)("editor.plant_care.tap_to_water",s,"Tap to log watering")}
          aria-label=${(0,a.kg)("editor.plant_care.water_plant",s,"Water {name}").replace("{name}",l.name||"")}
          @click=${()=>this._logCare(e,t,n,"water",s)}
        >
          ${this._renderPhoto(e,t,l,d,"tile")}
          <div class="uc-pc-tile-name" style="color:${o.text};">
            <span
              class="uc-pc-dot ${"due_soon"===n.state?"ring":""}"
              style="background:${d};border-color:${d};"
            ></span>
            <span class="uc-pc-ellipsis">${l.name||"—"}</span>
          </div>
          ${!1!==e.show_next_due?r.qy`<div
                class="uc-pc-tile-due"
                style="color:${"happy"===n.state?o.secondary:d};"
              >
                ${this._dueLabel(n,s)}
              </div>`:r.s6}
          ${!1!==e.show_moisture&&null!==n.moisture?r.qy`<div class="uc-pc-tile-moist" style="color:${o.secondary};">
                <ha-icon icon="mdi:water-percent"></ha-icon>${Math.round(n.moisture)}%
              </div>`:r.s6}
          <div class="uc-pc-reason" style="color:${o.secondary};">
            ${this._reasonLabel(n,s)}
          </div>
        </button>
        <div class="uc-pc-tile-actions">
          <button
            class="uc-pc-water-btn"
            type="button"
            ?disabled=${c}
            style="background:${d};"
            title=${(0,a.kg)("editor.plant_care.water_plant",s,"Water {name}").replace("{name}",l.name||"")}
            aria-label=${(0,a.kg)("editor.plant_care.water_plant",s,"Water {name}").replace("{name}",l.name||"")}
            @click=${()=>this._logCare(e,t,n,"water",s)}
          >
            <ha-icon icon="mdi:watering-can"></ha-icon>
          </button>
          ${u?r.qy`<button
                class="uc-pc-fert-btn"
                type="button"
                ?disabled=${c}
                title=${this._fertilizeTitle(n,s)}
                aria-label=${this._fertilizeTitle(n,s)}
                @click=${()=>this._logCare(e,t,n,"fertilize",s)}
              >
                <ha-icon icon="mdi:leaf"></ha-icon>
              </button>`:r.s6}
        </div>
      </div>
    `}_renderListLayout(e,t,n,i,o,s){return r.qy`
      <div class="uc-pc-list">
        ${n.map(n=>{const l=n.plant,d=this._stateColor(n.state,o),c=i.busyPlantId===l.id,u=!1!==e.show_fertilize&&n.fertilizeIntervalDays>0,p=i.openPlantId===l.id;return r.qy`
            <div class="uc-pc-listrow">
              <span
                class="uc-pc-dot ${"due_soon"===n.state?"ring":""}"
                style="background:${d};border-color:${d};"
              ></span>
              ${!1!==e.show_photos?this._renderPhoto(e,t,l,d,"row"):r.s6}
              <button
                class="uc-pc-listtext"
                type="button"
                @click=${()=>{i.openPlantId=p?"":l.id,this.triggerPreviewUpdate(!0)}}
                title=${(0,a.kg)("editor.plant_care.show_detail",s,"Show details")}
              >
                <div class="uc-pc-ellipsis" style="color:${o.text};font-weight:600;">
                  ${l.name||"—"}
                </div>
                <div class="uc-pc-listsub" style="color:${o.secondary};">
                  ${[l.location||"",!1!==e.show_next_due?this._dueLabel(n,s):"",!1!==e.show_moisture&&null!==n.moisture?`${Math.round(n.moisture)}%`:""].filter(Boolean).join(" · ")}
                </div>
              </button>
              <button
                class="uc-pc-water-btn wide"
                type="button"
                ?disabled=${c}
                style="background:${d};"
                title=${(0,a.kg)("editor.plant_care.water_plant",s,"Water {name}").replace("{name}",l.name||"")}
                aria-label=${(0,a.kg)("editor.plant_care.water_plant",s,"Water {name}").replace("{name}",l.name||"")}
                @click=${()=>this._logCare(e,t,n,"water",s)}
              >
                <ha-icon icon="mdi:watering-can"></ha-icon>
              </button>
              ${u?r.qy`<button
                    class="uc-pc-fert-btn"
                    type="button"
                    ?disabled=${c}
                    title=${this._fertilizeTitle(n,s)}
                    aria-label=${this._fertilizeTitle(n,s)}
                    @click=${()=>this._logCare(e,t,n,"fertilize",s)}
                  >
                    <ha-icon icon="mdi:leaf"></ha-icon>
                  </button>`:r.s6}
            </div>
            ${p?this._renderDetail(e,n,o,s):r.s6}
          `})}
      </div>
    `}_renderDetail(e,t,n,i){const o=[];return o.push([(0,a.kg)("editor.plant_care.detail_reason",i,"Why"),this._reasonLabel(t,i)]),o.push([(0,a.kg)("editor.plant_care.detail_interval",i,"Waters every"),(0,a.kg)("editor.plant_care.detail_days",i,"{days} days").replace("{days}",String(t.waterIntervalDays))]),null!==t.lastWateredMs&&o.push([(0,a.kg)("editor.plant_care.detail_last_water",i,"Last watered"),this._agoLabel(t.lastWateredMs,i)]),!1!==e.show_fertilize&&t.fertilizeIntervalDays>0&&o.push([(0,a.kg)("editor.plant_care.detail_fertilize",i,"Fertilize"),null===t.lastFertilizedMs?(0,a.kg)("editor.plant_care.never_fertilized",i,"Never fertilized"):this._fertilizeLabel(t,i)]),null!==t.temperature&&o.push([(0,a.kg)("editor.plant_care.detail_temperature",i,"Temperature"),`${Math.round(t.temperature)}°`]),null!==t.illuminance&&o.push([(0,a.kg)("editor.plant_care.detail_light",i,"Light"),`${Math.round(t.illuminance)} lx`]),r.qy`
      <div class="uc-pc-detail" style="color:${n.secondary};">
        ${o.map(([e,t])=>r.qy`
            <div class="uc-pc-detail-row">
              <span>${e}</span><span style="color:${n.text};">${t}</span>
            </div>
          `)}
        ${t.plant.notes?r.qy`<div class="uc-pc-detail-note">${t.plant.notes}</div>`:r.s6}
      </div>
    `}_renderMapLayout(e,t,n,i,o,s){const l=this._imageUrl(t,e.map_image);return l?r.qy`
      <div class="uc-pc-map">
        <img
          src=${l}
          alt=""
          draggable="false"
          @error=${e=>{e.currentTarget.style.visibility="hidden"}}
        />
        ${n.map(n=>{var l,d;const c=this._stateColor(n.state,o),u=100*x(null!==(l=n.plant.x)&&void 0!==l?l:.5),p=100*x(null!==(d=n.plant.y)&&void 0!==d?d:.5),h=i.busyPlantId===n.plant.id;return r.qy`
            <button
              class="uc-pc-marker"
              type="button"
              ?disabled=${h}
              style="left:${u}%;top:${p}%;background:${c};"
              title=${`${n.plant.name||"—"} · ${this._dueLabel(n,s)}`}
              aria-label=${(0,a.kg)("editor.plant_care.water_plant",s,"Water {name}").replace("{name}",n.plant.name||"")}
              @click=${()=>this._logCare(e,t,n,"water",s)}
            >
              <ha-icon icon=${n.plant.icon||"mdi:flower"}></ha-icon>
            </button>
          `})}
      </div>
      ${n.length>1&&n.every(e=>{var t,n;return.5===(null!==(t=e.plant.x)&&void 0!==t?t:.5)&&.5===(null!==(n=e.plant.y)&&void 0!==n?n:.5)})?r.qy`<div class="uc-pc-loading" style="color:${o.secondary};">
            ${(0,a.kg)("editor.plant_care.map_place_hint",s,"Every marker is still sitting in the middle. Open a plant in the General tab and click the plan to place it.")}
          </div>`:r.s6}
    `:r.qy`
        <div class="uc-pc-blank">
          <ha-icon icon="mdi:map-outline" style="color:${o.secondary};"></ha-icon>
          <div class="uc-pc-blank-title" style="color:${o.text};">
            ${(0,a.kg)("editor.plant_care.map_needed_title",s,"Add a floor plan")}
          </div>
          <div class="uc-pc-blank-sub" style="color:${o.secondary};">
            ${(0,a.kg)("editor.plant_care.map_needed_desc",s,"The map layout needs a background image. Upload one under Layout in the General tab, then place each plant on it.")}
          </div>
        </div>
      `}_renderPhoto(e,t,n,i,a){const o=!1!==e.show_photos?this._imageUrl(t,n.image):"";return r.qy`
      <div class="uc-pc-photo ${a}">
        <ha-icon icon=${n.icon||"mdi:flower"} style="color:${i};"></ha-icon>
        ${o?r.qy`<img
              src=${o}
              alt=""
              loading="lazy"
              @error=${e=>{e.currentTarget.style.display="none"}}
            />`:r.s6}
      </div>
    `}_palette(e){return{happy:e.happy_color||"var(--success-color, #4caf50)",thirsty:e.thirsty_color||"var(--warning-color, #ff9800)",overdue:e.overdue_color||"var(--error-color, #f44336)",text:e.text_color||"var(--primary-text-color)",secondary:e.secondary_text_color||"var(--secondary-text-color)",cardBg:e.card_background_color||"var(--card-background-color)"}}_stateColor(e,t){switch(e){case"overdue":return t.overdue;case"thirsty":case"due_soon":return t.thirsty;case"happy":return t.happy;default:return t.secondary}}_reasonLabel(e,t){return"sensor"===e.reason&&null!==e.moisture?(0,a.kg)("editor.plant_care.reason_sensor",t,"Sensor {value}% of {threshold}%").replace("{value}",String(Math.round(e.moisture))).replace("{threshold}",String(Math.round(e.moistureThreshold))):"schedule"===e.reason?e.plant.moisture_entity?(0,a.kg)("editor.plant_care.reason_schedule_sensor_off",t,"From the schedule"):(0,a.kg)("editor.plant_care.reason_schedule",t,"From the schedule (no sensor)"):(0,a.kg)("editor.plant_care.reason_none",t,"No watering logged yet")}_dueLabel(e,t){const n=e.waterDueInDays;if(null===n)return(0,a.kg)("editor.plant_care.never_watered",t,"Never watered");if(n>=1.5)return(0,a.kg)("editor.plant_care.due_in_days",t,"In {days} days").replace("{days}",String(Math.round(n)));if(n>=.5)return(0,a.kg)("editor.plant_care.due_tomorrow",t,"Tomorrow");if(n>-.5)return(0,a.kg)("editor.plant_care.due_today",t,"Due today");const r=Math.max(1,Math.round(-n));return(0,a.kg)("editor.plant_care.due_overdue",t,"{days} days overdue").replace("{days}",String(r))}_fertilizeLabel(e,t){const n=e.fertilizeDueInDays;return null===n?(0,a.kg)("editor.plant_care.never_fertilized",t,"Never fertilized"):n>=.5?(0,a.kg)("editor.plant_care.fert_in_days",t,"Feed in {days} days").replace("{days}",String(Math.max(1,Math.round(n)))):(0,a.kg)("editor.plant_care.fert_due",t,"Feeding due")}_fertilizeTitle(e,t){return(0,a.kg)("editor.plant_care.fertilize_plant",t,"Fertilize {name}").replace("{name}",e.plant.name||"")}_agoLabel(e,t){const n=Math.floor((Date.now()-e)/864e5);return n<=0?(0,a.kg)("editor.plant_care.ago_today",t,"Today"):1===n?(0,a.kg)("editor.plant_care.ago_yesterday",t,"Yesterday"):(0,a.kg)("editor.plant_care.ago_days",t,"{days} days ago").replace("{days}",String(n))}_seasonTooltip(e,t,n){var r,i,o,s;const l={seasonal_adjust:!0,summer_factor:null!==(r=e.summer_factor)&&void 0!==r?r:.75,winter_factor:null!==(i=e.winter_factor)&&void 0!==i?i:1.5,latitude:null!==(s=null===(o=null==t?void 0:t.config)||void 0===o?void 0:o.latitude)&&void 0!==s?s:null},d=m(l,Date.now()),u=function(e,t=Date.now()){var n,r;const i=m(e,t),a=p(Number(null!==(n=null==e?void 0:e.summer_factor)&&void 0!==n?n:.75),c,2),o=p(Number(null!==(r=null==e?void 0:e.winter_factor)&&void 0!==r?r:1.5),c,2),s=(a+o)/2,l=Math.abs(a-o);return l<.05||Math.abs(i-s)<.25*l?"shoulder":Math.abs(i-a)<Math.abs(i-o)?"summer":"winter"}(l,Date.now()),h="summer"===u?(0,a.kg)("editor.plant_care.season_summer",n,"summer"):"winter"===u?(0,a.kg)("editor.plant_care.season_winter",n,"winter"):(0,a.kg)("editor.plant_care.season_shoulder",n,"shoulder season");return(0,a.kg)("editor.plant_care.season_tooltip",n,"Seasonal adjustment is on: {phase}, intervals ×{factor}").replace("{phase}",h).replace("{factor}",d.toFixed(2))}_ensurePreview(e){let t=this._preview.get(e.id);return t||(t={events:[],loading:!1,lastFetchedAt:0,fetchKey:"",error:"",undo:null,busyPlantId:"",openPlantId:""},this._preview.set(e.id,t)),t}_ensureEventsLoaded(e,t){if(!t||!e.todo_entity)return;const n=this._ensurePreview(e);if(n.loading)return;const r=e.todo_entity,i=Date.now();n.fetchKey===r&&n.lastFetchedAt>0&&i-n.lastFetchedAt<2e3||(n.loading=!0,n.fetchKey=r,b.getEvents(t,e.todo_entity,()=>{const n=this._preview.get(e.id);n&&(n.lastFetchedAt=0),this._ensureEventsLoaded(e,t)}).then(t=>{const n=this._ensurePreview(e);n.events=t,n.loading=!1,n.error="",n.lastFetchedAt=Date.now(),this.triggerPreviewUpdate(!0)}).catch(t=>{const n=this._ensurePreview(e);n.loading=!1,n.lastFetchedAt=Date.now(),n.error=t instanceof Error&&t.message?t.message:"Could not read the care history list",this.triggerPreviewUpdate(!0)}))}_logCare(e,t,n,r,i){if(!t||!e.todo_entity)return;const o=this._ensurePreview(e);if(o.busyPlantId)return;const s=n.plant;o.busyPlantId=s.id,this.triggerPreviewUpdate(!0);const l=("fertilize"===r?(0,a.kg)("editor.plant_care.log_fertilized",i,"Fertilized {name}"):(0,a.kg)("editor.plant_care.log_watered",i,"Watered {name}")).replace("{name}",s.name||s.id);b.recordCare(t,e.todo_entity,s,r,{summary:l}).then(()=>{const n=this._ensurePreview(e);n.busyPlantId="",n.undo={plantId:s.id,plantName:s.name||s.id,kind:r,at:Date.now()},n.lastFetchedAt=0,this._ensureEventsLoaded(e,t),this.triggerPreviewUpdate(!0),this._pruneLater(e,t,s.id),this._expireUndoLater(e,n.undo.at)}).catch(t=>{const n=this._ensurePreview(e);n.busyPlantId="",n.error=t instanceof Error&&t.message?t.message:"Could not save the care entry",this.triggerPreviewUpdate(!0)})}_undoCare(e,t,n){const r=n.undo;r&&t&&e.todo_entity&&(n.undo=null,n.busyPlantId=r.plantId,this.triggerPreviewUpdate(!0),b.undoLastCare(t,e.todo_entity,r.plantId,r.kind).then(()=>{const n=this._ensurePreview(e);n.busyPlantId="",n.lastFetchedAt=0,this._ensureEventsLoaded(e,t),this.triggerPreviewUpdate(!0)}).catch(()=>{this._ensurePreview(e).busyPlantId="",this.triggerPreviewUpdate(!0)}))}_expireUndoLater(e,t){setTimeout(()=>{const n=this._preview.get(e.id);(null==n?void 0:n.undo)&&n.undo.at===t&&(n.undo=null,this.triggerPreviewUpdate(!0))},2e4)}_pruneLater(e,t,n){var r;const i=null!==(r=e.history_limit)&&void 0!==r?r:20;i<=0||setTimeout(()=>{b.pruneHistory(t,e.todo_entity,n,i).then(n=>{if(n>0){const n=this._preview.get(e.id);n&&(n.lastFetchedAt=0),this._ensureEventsLoaded(e,t)}}).catch(()=>{})},1500)}getStyles(){return`\n      ${i.m.getSliderStyles()}\n\n      .uc-pc-wrapper { box-sizing: border-box; width: 100%; min-width: 0; }\n\n      .uc-pc-header {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-weight: 700;\n        font-size: 15px;\n        margin-bottom: 10px;\n        min-width: 0;\n      }\n      .uc-pc-header-text {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        min-width: 0;\n      }\n      .uc-pc-season { display: inline-flex; --mdc-icon-size: 16px; }\n\n      .uc-pc-summary {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: baseline;\n        gap: 4px 12px;\n        margin-bottom: 10px;\n        font-size: 12px;\n      }\n      .uc-pc-sum-chips { display: flex; flex-wrap: wrap; gap: 10px; }\n      .uc-pc-sum-chip {\n        display: inline-flex;\n        align-items: center;\n        gap: 5px;\n        font-weight: 600;\n        white-space: nowrap;\n      }\n      .uc-pc-sum-next { font-size: 12px; min-width: 0; }\n\n      .uc-pc-dot {\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        flex-shrink: 0;\n        border: 2px solid transparent;\n        box-sizing: border-box;\n      }\n      .uc-pc-dot.ring { background: transparent !important; }\n\n      .uc-pc-banner {\n        display: flex;\n        align-items: flex-start;\n        gap: 8px;\n        padding: 8px 10px;\n        border-radius: var(--uc-r-8, 8px);\n        font-size: 12px;\n        margin-bottom: 10px;\n      }\n      .uc-pc-banner.error {\n        background: rgba(244, 67, 54, 0.12);\n        color: var(--error-color);\n      }\n      .uc-pc-banner ha-icon { --mdc-icon-size: 18px; flex-shrink: 0; }\n\n      .uc-pc-loading { font-size: 12px; padding: 6px 0; }\n\n      .uc-pc-undo {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 12px;\n        padding: 6px 10px;\n        margin-bottom: 10px;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--secondary-background-color);\n      }\n      .uc-pc-undo ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }\n      .uc-pc-undo-text {\n        flex: 1;\n        min-width: 0;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-pc-undo-btn {\n        border: none;\n        background: transparent;\n        color: var(--primary-color);\n        font-weight: 700;\n        font-size: 12px;\n        cursor: pointer;\n        padding: 2px 6px;\n        border-radius: var(--uc-r-6, 6px);\n      }\n      .uc-pc-undo-btn:hover { background: rgba(var(--rgb-primary-color), 0.12); }\n\n      .uc-pc-blank {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        gap: 6px;\n        padding: 22px 12px;\n        border: 1px dashed var(--divider-color);\n        border-radius: var(--uc-r-12, 12px);\n      }\n      .uc-pc-blank ha-icon { --mdc-icon-size: 34px; }\n      .uc-pc-blank-title { font-weight: 700; font-size: 15px; }\n      .uc-pc-blank-sub { font-size: 12px; line-height: 1.5; max-width: 340px; }\n\n      /* ── Grid ─────────────────────────────────────────────── */\n      .uc-pc-grid { display: grid; gap: 10px; }\n      .uc-pc-tile {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        border: 1px solid var(--divider-color);\n        border-left-width: 3px;\n        border-radius: var(--uc-r-12, 12px);\n        overflow: hidden;\n        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.02);\n        min-width: 0;\n      }\n      .uc-pc-tile-main {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 4px;\n        padding: 10px 8px 8px;\n        border: none;\n        background: transparent;\n        cursor: pointer;\n        text-align: center;\n        font: inherit;\n        min-width: 0;\n        width: 100%;\n      }\n      .uc-pc-tile-main:disabled { opacity: 0.6; cursor: default; }\n      .uc-pc-tile-name {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        font-size: 13px;\n        font-weight: 600;\n        width: 100%;\n        min-width: 0;\n      }\n      .uc-pc-tile-due { font-size: 12px; font-weight: 600; }\n      .uc-pc-tile-moist {\n        display: inline-flex;\n        align-items: center;\n        gap: 3px;\n        font-size: 11px;\n      }\n      .uc-pc-tile-moist ha-icon { --mdc-icon-size: 14px; }\n      .uc-pc-reason {\n        font-size: 10px;\n        line-height: 1.3;\n        opacity: 0.85;\n        max-width: 100%;\n      }\n      .uc-pc-tile-actions {\n        display: flex;\n        gap: 6px;\n        padding: 0 8px 8px;\n        justify-content: center;\n      }\n\n      .uc-pc-ellipsis {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        min-width: 0;\n      }\n\n      .uc-pc-photo {\n        position: relative;\n        border-radius: var(--uc-r-10, 10px);\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: rgba(var(--rgb-primary-color), 0.08);\n        flex-shrink: 0;\n      }\n      .uc-pc-photo.tile { width: 100%; aspect-ratio: 1 / 1; max-height: 120px; }\n      .uc-pc-photo.row { width: 34px; height: 34px; }\n      .uc-pc-photo ha-icon { --mdc-icon-size: 26px; }\n      .uc-pc-photo.row ha-icon { --mdc-icon-size: 18px; }\n      .uc-pc-photo img {\n        position: absolute;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n\n      .uc-pc-water-btn,\n      .uc-pc-fert-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        cursor: pointer;\n        width: 34px;\n        height: 30px;\n        flex-shrink: 0;\n        color: var(--text-primary-color, #fff);\n      }\n      .uc-pc-water-btn { flex: 1; max-width: 90px; }\n      .uc-pc-water-btn.wide { flex: 0 0 auto; width: 38px; height: 34px; }\n      .uc-pc-water-btn ha-icon,\n      .uc-pc-fert-btn ha-icon { --mdc-icon-size: 18px; }\n      /* Fertilizing is the rarer action, so it stays visually subordinate. */\n      .uc-pc-fert-btn {\n        background: transparent;\n        border: 1px solid var(--divider-color);\n        color: var(--secondary-text-color);\n      }\n      .uc-pc-fert-btn:hover { color: var(--primary-color); }\n      .uc-pc-water-btn:disabled,\n      .uc-pc-fert-btn:disabled { opacity: 0.5; cursor: default; }\n\n      /* ── List ─────────────────────────────────────────────── */\n      .uc-pc-list { display: flex; flex-direction: column; gap: 2px; }\n      .uc-pc-listrow {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 6px 2px;\n        min-width: 0;\n      }\n      .uc-pc-listtext {\n        flex: 1;\n        min-width: 0;\n        border: none;\n        background: transparent;\n        text-align: left;\n        cursor: pointer;\n        font: inherit;\n        padding: 0;\n      }\n      .uc-pc-listsub {\n        font-size: 11px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-pc-detail {\n        font-size: 12px;\n        padding: 8px 10px 10px 26px;\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n      }\n      .uc-pc-detail-row { display: flex; justify-content: space-between; gap: 12px; }\n      .uc-pc-detail-note { font-style: italic; opacity: 0.9; padding-top: 4px; }\n\n      /* ── Map ──────────────────────────────────────────────── */\n      .uc-pc-map {\n        position: relative;\n        width: 100%;\n        border-radius: var(--uc-r-12, 12px);\n        overflow: hidden;\n        background: var(--secondary-background-color);\n        min-height: 120px;\n      }\n      .uc-pc-map img { display: block; width: 100%; height: auto; }\n      .uc-pc-marker {\n        position: absolute;\n        transform: translate(-50%, -50%);\n        width: 30px;\n        height: 30px;\n        border-radius: 50%;\n        border: 2px solid var(--card-background-color);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        padding: 0;\n        color: var(--text-primary-color, #fff);\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n      }\n      .uc-pc-marker ha-icon { --mdc-icon-size: 17px; }\n      .uc-pc-marker:disabled { opacity: 0.6; cursor: default; }\n\n      /* ── Editor ───────────────────────────────────────────── */\n      .uc-pc-section-desc {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        margin-bottom: 14px;\n        line-height: 1.5;\n      }\n      .uc-pc-note,\n      .uc-pc-warn {\n        display: flex;\n        align-items: flex-start;\n        gap: 8px;\n        font-size: 12px;\n        line-height: 1.5;\n        padding: 10px 12px;\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 14px;\n      }\n      .uc-pc-note {\n        background: rgba(var(--rgb-primary-color), 0.08);\n        color: var(--primary-text-color);\n      }\n      .uc-pc-note.subtle {\n        background: transparent;\n        color: var(--secondary-text-color);\n        padding: 0 0 10px;\n      }\n      .uc-pc-warn {\n        background: rgba(255, 152, 0, 0.14);\n        color: var(--primary-text-color);\n      }\n      .uc-pc-note ha-icon,\n      .uc-pc-warn ha-icon { --mdc-icon-size: 18px; flex-shrink: 0; }\n\n      .uc-pc-empty-rows {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        padding: 14px;\n        border: 1px dashed var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 12px;\n        line-height: 1.5;\n      }\n\n      .uc-pc-row {\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 8px;\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        overflow: hidden;\n      }\n      .uc-pc-row.expanded { border-color: var(--primary-color); }\n      .uc-pc-row-head {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 10px 12px;\n        min-width: 0;\n      }\n      .uc-pc-thumb {\n        position: relative;\n        width: 34px;\n        height: 34px;\n        border-radius: var(--uc-r-8, 8px);\n        overflow: hidden;\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: rgba(var(--rgb-primary-color), 0.1);\n        color: var(--primary-color);\n      }\n      .uc-pc-thumb ha-icon { --mdc-icon-size: 20px; }\n      .uc-pc-thumb img {\n        position: absolute;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n      .uc-pc-row-text { flex: 1; min-width: 0; }\n      .uc-pc-row-name {\n        font-size: 14px;\n        font-weight: 600;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-pc-row-sub {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-pc-icon-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 30px;\n        height: 30px;\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        background: transparent;\n        color: var(--secondary-text-color);\n        cursor: pointer;\n        flex-shrink: 0;\n      }\n      .uc-pc-icon-btn ha-icon { --mdc-icon-size: 19px; }\n      .uc-pc-icon-btn:hover { background: rgba(var(--rgb-primary-color), 0.12); }\n      .uc-pc-icon-btn.expand.on { color: var(--primary-color); }\n      .uc-pc-icon-btn.danger:hover {\n        background: rgba(244, 67, 54, 0.14);\n        color: var(--error-color);\n      }\n      .uc-pc-icon-btn:disabled { opacity: 0.3; cursor: default; }\n      .uc-pc-icon-btn:disabled:hover { background: transparent; }\n      .uc-pc-row-body {\n        padding: 4px 12px 12px;\n        border-top: 1px solid var(--divider-color);\n      }\n\n      .uc-pc-add-btn,\n      .uc-pc-secondary-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        width: 100%;\n        padding: 11px;\n        border-radius: var(--uc-r-8, 8px);\n        cursor: pointer;\n        font-weight: 600;\n        font-size: 14px;\n        margin-top: 8px;\n      }\n      .uc-pc-add-btn {\n        border: none;\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .uc-pc-secondary-btn {\n        border: 1px solid var(--divider-color);\n        background: transparent;\n        color: var(--primary-text-color);\n      }\n      .uc-pc-secondary-btn:hover { border-color: var(--primary-color); }\n\n      .uc-pc-import {\n        margin-top: 10px;\n        padding: 12px;\n        border-radius: var(--uc-r-8, 8px);\n        background: rgba(var(--rgb-primary-color), 0.06);\n      }\n      .uc-pc-import-row {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        padding: 8px 0;\n        border-bottom: 1px solid var(--divider-color);\n        min-width: 0;\n      }\n      .uc-pc-import-row:last-of-type { border-bottom: none; }\n      .uc-pc-import-row ha-icon { --mdc-icon-size: 20px; color: var(--primary-color); }\n      .uc-pc-import-text { flex: 1; min-width: 0; }\n      .uc-pc-import-name {\n        font-size: 13px;\n        font-weight: 600;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-pc-import-sub {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      .uc-pc-linkbtn {\n        border: none;\n        background: transparent;\n        color: var(--primary-color);\n        font-size: 12px;\n        font-weight: 600;\n        cursor: pointer;\n        padding: 4px 6px;\n        border-radius: var(--uc-r-6, 6px);\n        margin: -4px 0 14px;\n      }\n      .uc-pc-linkbtn.strong { margin: 0; flex-shrink: 0; }\n      .uc-pc-linkbtn:hover { background: rgba(var(--rgb-primary-color), 0.12); }\n      .uc-pc-linkbtn:disabled {\n        color: var(--secondary-text-color);\n        cursor: default;\n        background: transparent;\n      }\n\n      .uc-pc-subtoggle {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        border: none;\n        background: transparent;\n        color: var(--secondary-text-color);\n        font-size: 13px;\n        font-weight: 600;\n        cursor: pointer;\n        padding: 6px 0;\n        margin-bottom: 4px;\n      }\n      .uc-pc-subtoggle.on { color: var(--primary-color); }\n      .uc-pc-subtoggle ha-icon { --mdc-icon-size: 18px; }\n\n      .uc-pc-map-pick {\n        position: relative;\n        border-radius: var(--uc-r-8, 8px);\n        overflow: hidden;\n        cursor: crosshair;\n        margin-bottom: 14px;\n        background: var(--secondary-background-color);\n      }\n      .uc-pc-map-pick img { display: block; width: 100%; height: auto; }\n      .uc-pc-map-pin {\n        position: absolute;\n        transform: translate(-50%, -50%);\n        width: 26px;\n        height: 26px;\n        border-radius: 50%;\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        pointer-events: none;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);\n      }\n      .uc-pc-map-pin ha-icon { --mdc-icon-size: 15px; }\n\n      /* The framed look comes from the shared editor stylesheet; only trim the\n         trailing gap our last field leaves behind. */\n      .conditional-fields-content > .field-container:last-child { margin-bottom: 0; }\n\n      @media (max-width: 420px) {\n        .uc-pc-reason { display: none; }\n        .uc-pc-summary { font-size: 11px; }\n      }\n    `}}function x(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):.5}},3820(e,t,n){n.d(t,{pC:()=>a});var r=n(3647);const i=" ⌗";function a(e,t){var n,r,i,a;return!(64&~Number(null!==(a=null===(i=null===(r=null===(n=null==e?void 0:e.states)||void 0===n?void 0:n[t])||void 0===r?void 0:r.attributes)||void 0===i?void 0:i.supported_features)&&void 0!==a?a:0))}function o(e,t){var n;if(!e)return null;const r=e.trim();if(!r.startsWith("{"))return null;try{const e=JSON.parse(r);return e&&"object"==typeof e?e._ns!==t?null:null!==(n=e.data)&&void 0!==n?n:null:null}catch(e){return null}}function s(e){const t=e.lastIndexOf(i);if(-1!==t)return e.slice(0,t).trim();const n=e.indexOf("{");return n>0&&e.trimEnd().endsWith("}")?e.slice(0,n).trim():e.trim()}const l=new class{constructor(){this._todo=new r.i}async getRecords(e,t,n,r){if(!e||!t)return[];const i=await this._todo.getItems(e,t,r),a=[];for(const e of i){const t=this.parseItem(e,n);t&&a.push(t)}return a}parseItem(e,t){var n;const r=null!==(n=o(e.description,t))&&void 0!==n?n:function(e,t){const n=e.lastIndexOf(i);if(-1!==n)return o(e.slice(n+2),t);const r=e.indexOf("{");return-1===r?null:o(e.slice(r),t)}(e.summary||"",t);if(null===r)return null;const a=e.uid;return a?{uid:a,summary:s(e.summary||""),status:"completed"===e.status?"completed":"needs_action",due:e.due,payload:r}:null}async addRecord(e,t,n,r,o,s){if(!e||!t)return;const l=this._encode(n,o),d={entity_id:t};a(e,t)?(d.item=r,d.description=l):d.item=`${r}${i}${l}`,(null==s?void 0:s.due)&&(d.due_datetime=s.due),await e.callService("todo","add_item",d),this.invalidate(e,t)}async patchRecord(e,t,n,r,o){var s,l,d;if(!e||!t||!r)return;const c=(await this.getRecords(e,t,n)).find(e=>e.uid===r);if(!c)return;const u=Object.assign(Object.assign({},c.payload),null!==(s=o.payload)&&void 0!==s?s:{}),p=null!==(l=o.summary)&&void 0!==l?l:c.summary,h=this._encode(n,u),_={entity_id:t,item:r};a(e,t)?(_.rename=p,_.description=h):_.rename=`${p}${i}${h}`,o.status&&(_.status=o.status),void 0!==o.due&&(_.due_datetime=null!==(d=o.due)&&void 0!==d?d:null),await e.callService("todo","update_item",_),this.invalidate(e,t)}async setStatus(e,t,n,r){e&&t&&n&&(await e.callService("todo","update_item",{entity_id:t,item:n,status:r}),this.invalidate(e,t))}async removeRecord(e,t,n){e&&t&&n&&(await e.callService("todo","remove_item",{entity_id:t,item:n}),this.invalidate(e,t))}invalidate(e,t){this._todo.invalidateCache(e,t)}_encode(e,t){const n={_ns:e,_v:1,data:t};return JSON.stringify(n)}};n.d(t,["N2",0,l])},3647(e,t,n){n.d(t,{i:()=>i});const r="__uvc_todo_cache";class i{constructor(){this._unsubByEntity=new Map,this._callbacksByEntity=new Map}async getItems(e,t,n){if(!e||!t)return[];e[r]||(e[r]=Object.create(null));const i=e[r],a=()=>{if(n){let e=this._callbacksByEntity.get(t);e||(e=new Set,this._callbacksByEntity.set(t,e)),e.add(n)}},o=()=>{const e=this._callbacksByEntity.get(t);e&&e.forEach(e=>{try{e()}catch(e){}})},s=async()=>{var n;try{const r=await e.callService("todo","get_items",{entity_id:t},void 0,!0,!0),a=null!==(n=null==r?void 0:r.response)&&void 0!==n?n:{};let o=[];const s=a[t];if(Array.isArray(null==s?void 0:s.items))o=s.items;else if(Array.isArray(null==s?void 0:s.todo_items))o=s.todo_items;else if(Array.isArray(s))o=s;else if(Array.isArray(a))o=a;else if("object"==typeof a&&null!==a){const e=Object.keys(a).find(e=>e.startsWith("todo.")),t=e?a[e]:void 0;Array.isArray(null==t?void 0:t.items)?o=t.items:Array.isArray(null==t?void 0:t.todo_items)?o=t.todo_items:Array.isArray(t)&&(o=t)}return 0===o.length&&(s||a&&Object.keys(a).length>0)&&console.warn("[UltraCard] todo.get_items: unexpected response shape",{entityId:t,responseKeys:Object.keys(a),entry:s?Object.keys(s):null}),i[t]=o,o}catch(e){return console.warn("[UltraCard] todo.get_items failed for",t,e),i[t]=[],[]}};if(void 0!==i[t])return a(),this._ensureSubscription(e,t,s,o),i[t];const l=await s();return a(),this._ensureSubscription(e,t,s,o),l}_ensureSubscription(e,t,n,r){if(this._unsubByEntity.has(t))return;const i=e.connection;(null==i?void 0:i.subscribeEvents)&&i.subscribeEvents(e=>{var i;(null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.entity_id)===t&&n().then(()=>r())},"state_changed").then(e=>{this._unsubByEntity.set(t,e)}).catch(()=>{})}unsubscribeEntity(e){const t=this._unsubByEntity.get(e);if(t){try{t()}catch(e){}this._unsubByEntity.delete(e)}this._callbacksByEntity.delete(e)}invalidateCache(e,t){if(!e||!t)return;const n=e[r];n&&t in n&&delete n[t]}}},3488(e,t,n){n.d(t,{SB:()=>l,b5:()=>s,gf:()=>o});var r=n(2618),i=n(378),a=n(6478);function o(e){var t,n,r,a;if(!e)return!1;try{const o=i.xd.checkIntegrationAuth(e);if("pro"===(null===(t=null==o?void 0:o.subscription)||void 0===t?void 0:t.tier)&&"active"===(null===(n=null==o?void 0:o.subscription)||void 0===n?void 0:n.status))return!0;if(i.xd.isAuthenticated()){const e=i.xd.getCurrentUser();if("pro"===(null===(r=null==e?void 0:e.subscription)||void 0===r?void 0:r.tier)&&"active"===(null===(a=null==e?void 0:e.subscription)||void 0===a?void 0:a.status))return!0}}catch(e){return!1}return!1}function s(e,t){return r.qy`
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
  `}function l(e,t){return r.qy`
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