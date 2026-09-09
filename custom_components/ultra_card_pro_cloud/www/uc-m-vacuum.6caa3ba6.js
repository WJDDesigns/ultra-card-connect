export const __webpack_esm_ids__=[9348];export const __webpack_esm_modules__={5305(e,t,n){n.d(t,{UltraVacuumModule:()=>s});var i=n(2618),a=n(6478),o=n(8153),r=n(7475);n(7921);class s extends r.m{constructor(){super(...arguments),this.metadata={type:"vacuum",title:"Vacuum Control",description:"Interactive vacuum cleaner control with map, stats, and animations",author:"WJD Designs",version:"1.0.0",icon:"mdi:robot-vacuum",category:"interactive",tags:["vacuum","cleaning","robot","pro"]},this._currentViewMap=new Map,this._swipeStateMap=new Map,this._expandedSectionsMap=new Map,this._draggedSectionId=null,this._addDropdownOpenMap=new Map}getCurrentView(e){return this._currentViewMap.get(e)||"vacuum"}getSwipeState(e){let t=this._swipeStateMap.get(e);return t||(t={touchStartX:0,touchStartY:0,isSwiping:!1,pointerDown:!1,pointerStartX:0,pointerStartY:0,pointerDeltaX:0,pointerDragActive:!1,pointerContainerWidth:0,pointerRafPending:!1},this._swipeStateMap.set(e,t)),t}createDefault(e,t){return Object.assign({id:e||this.generateId("vacuum"),type:"vacuum",entity:"",name:"",battery_entity:"",status_entity:"",cleaning_binary_entity:"",charging_binary_entity:"",cleaning_area_entity:"",cleaning_time_entity:"",current_room_entity:"",last_clean_begin_entity:"",last_clean_end_entity:"",total_cleaning_area_entity:"",total_cleaning_time_entity:"",total_cleaning_count_entity:"",vacuum_error_entity:"",dock_error_entity:"",volume_entity:"",do_not_disturb_entity:"",do_not_disturb_begin_entity:"",do_not_disturb_end_entity:"",selected_map_entity:"",map_image_entity:"",full_clean_button_entity:"",layout_mode:"standard",show_name:!0,show_status:!0,show_battery:!0,show_cleaning_stats:!0,show_component_wear:!1,show_map:!1,show_controls:!0,show_current_room:!0,show_last_clean:!0,show_total_stats:!0,show_errors:!0,show_dnd:!1,show_volume:!1,show_filter_life:!0,show_main_brush_life:!0,show_side_brush_life:!0,show_sensor_life:!1,control_layout:"row",show_start_button:!0,show_pause_button:!0,show_stop_button:!0,show_dock_button:!0,show_locate_button:!1,show_fan_speed:!1,show_room_selection:!1,show_zone_cleanup:!1,enable_animations:!0,animation_cleaning:"spin",animation_returning:"pulse",animation_docking:"slide",animation_charging:"pulse",animation_speed:"normal",map_display_mode:"swipe",map_height:200,map_border_radius:12,map_refresh_rate:5,vacuum_icon:"mdi:robot-vacuum",vacuum_size:200,icon_size:80,primary_color:"var(--primary-color)",background_style:"card",status_color_cleaning:"#4CAF50",status_color_returning:"#2196F3",status_color_docked:"#9E9E9E",status_color_idle:"#FF9800",status_color_error:"#F44336",battery_color_high:"#4CAF50",battery_color_medium:"#FF9800",battery_color_low:"#F44336",battery_threshold_medium:50,battery_threshold_low:20,detected_integration:"generic",tap_action:{action:"default"},hold_action:{action:"default"},double_tap_action:{action:"default"},enable_hover_effect:!1},(()=>{const e=Date.now(),t=s.DEFAULT_SECTION_ORDER.map((t,n)=>({id:`section_${t}_${e}_${n}`,type:t,enabled:s.VACUUM_SECTIONS[t].defaultEnabled,order:n,settings:{}}));return{display_sections:t,section_order:t.map(e=>e.id)}})())}detectIntegration(e){if(!(null==e?void 0:e.attributes))return"generic";const t=e.attributes,n=e.entity_id||"",i=(t.model||"").toLowerCase();return void 0!==t.valetudo_state||n.includes("valetudo")?"valetudo":i.includes("roborock")||n.includes("roborock")?"roborock":i.includes("xiaomi")||n.includes("xiaomi")||void 0!==t.main_brush_left?"xiaomi":i.includes("ecovacs")||n.includes("ecovacs")?"ecovacs":i.includes("neato")||n.includes("neato")?"neato":i.includes("roomba")||n.includes("roomba")||n.includes("irobot")?"roomba":i.includes("eufy")||n.includes("eufy")||n.includes("robovac")||void 0!==t.boost_iq||"boolean"==typeof t.auto_return&&void 0!==t.cleaning_area?"eufy":i.includes("shark")||n.includes("shark")?"shark":n.includes("tuya")||"tuya"===t.platform?"tuya":"generic"}autoPopulateEntities(e,t){if(!e||!(null==t?void 0:t.states))return{};const n=e.replace("vacuum.",""),i={},a=e=>e in t.states,o=e=>{for(const t of e)if(a(t))return t},r=e=>e.toLowerCase().replace(/[-_.\s]/g,""),s=(e,i)=>{const o=(e=>{const t=r(e),n=e.split(/[-_.\s]/),i=[e,t,e.replace(/_/g,"-"),e.replace(/-/g,"_"),n.join("")];if(e.includes("_vacuum")){const t=e.replace("_vacuum","");i.push(t,r(t))}if(e.includes("vacuum_")){const t=e.replace("vacuum_","");i.push(t,r(t))}return[...new Set(i)]})(n);for(const t of o)for(const n of i){const i=`${e}.${t}${n?"_"+n:""}`;if(a(i))return i;const o=`${e}.${t}${n}`;if(a(o))return o}const s=r(n);for(const n of Object.keys(t.states)){if(!n.startsWith(`${e}.`))continue;const t=n.replace(`${e}.`,""),a=r(t);if(a.includes(s))for(const e of i){const t=r(e);if(a.includes(t))return n}}},c=(e,i)=>{var a;const o=r(n);for(const n of Object.keys(t.states)){if(!n.startsWith(`${e}.`))continue;const s=t.states[n];if((null===(a=null==s?void 0:s.attributes)||void 0===a?void 0:a.device_class)===i&&r(n.replace(`${e}.`,"")).includes(o))return n}},l=(e,i,a)=>{var o;const s=r(n);for(const n of Object.keys(t.states)){if(!n.startsWith(`${e}.`))continue;const c=t.states[n],l=(null===(o=null==c?void 0:c.attributes)||void 0===o?void 0:o.unit_of_measurement)||"";if(i.includes(l)){const t=r(n.replace(`${e}.`,""));if(t.includes(s))for(const e of a)if(t.includes(r(e)))return n}}};let u=o([`sensor.${n}_battery`,`sensor.${n}_battery_level`,`sensor.${n}_battery_percentage`,`sensor.${n.replace("_vacuum","")}_battery`,`sensor.${n.replace(/_/g,"")}_battery`,`sensor.${n.replace(/_/g,"")}_battery_level`,`sensor.${n}_battery_state`,`sensor.${n}_battery_state_of_charge`]);u||(u=s("sensor",["battery","battery_level","battery_percentage","batt"])),u||(u=c("sensor","battery")),u&&(i.battery_entity=u);let d=o([`sensor.${n}_status`,`sensor.${n}_vacuum_status`,`sensor.${n}_state`,`sensor.${n}_cleaning_status`]);d||(d=s("sensor",["status","state","vacuum_status"])),d&&(i.status_entity=d);let m=o([`binary_sensor.${n}_cleaning`,`binary_sensor.${n}_is_cleaning`,`binary_sensor.${n}_running`]);m||(m=s("binary_sensor",["cleaning","is_cleaning","running"])),m&&(i.cleaning_binary_entity=m);let p=o([`binary_sensor.${n}_charging`,`binary_sensor.${n}_is_charging`,`binary_sensor.${n}_docked`]);p||(p=s("binary_sensor",["charging","is_charging","docked"])),p||(p=c("binary_sensor","battery_charging")),p&&(i.charging_binary_entity=p);let v=o([`sensor.${n}_current_room`,`sensor.${n}_room`,`sensor.${n}_current_segment`]);v||(v=s("sensor",["current_room","room","segment"])),v&&(i.current_room_entity=v);let h=o([`sensor.${n}_cleaning_area`,`sensor.${n}_current_clean_area`,`sensor.${n}_clean_area`,`sensor.${n}_cleaned_area`,`sensor.${n}_area_cleaned`,`sensor.${n}_total_cleaning_area`]);h||(h=s("sensor",["cleaning_area","clean_area","cleaned_area","area_cleaned"])),h||(h=l("sensor",["m²","ft²","sq m","sqm"],["area","clean"])),h&&(i.cleaning_area_entity=h);let _=o([`sensor.${n}_cleaning_time`,`sensor.${n}_current_clean_duration`,`sensor.${n}_clean_time`,`sensor.${n}_cleaning_duration`,`sensor.${n}_duration`]);_||(_=s("sensor",["cleaning_time","clean_time","duration","cleaning_duration"])),_||(_=l("sensor",["min","minutes","s","seconds","h","hours"],["time","duration","clean"])),_&&(i.cleaning_time_entity=_);let g=o([`sensor.${n}_last_clean_begin`,`sensor.${n}_last_clean_start`,`sensor.${n}_last_cleaning_start`]);g||(g=s("sensor",["last_clean_begin","last_clean_start","last_cleaning_start"])),g&&(i.last_clean_begin_entity=g);let y=o([`sensor.${n}_last_clean_end`,`sensor.${n}_last_clean_finish`,`sensor.${n}_last_cleaning_end`]);y||(y=s("sensor",["last_clean_end","last_clean_finish","last_cleaning_end"])),y&&(i.last_clean_end_entity=y);let b=o([`sensor.${n}_total_cleaning_area`,`sensor.${n}_total_clean_area`,`sensor.${n}_lifetime_area`]);b||(b=s("sensor",["total_cleaning_area","total_clean_area","lifetime_area","total_area"])),b&&(i.total_cleaning_area_entity=b);let f=o([`sensor.${n}_total_cleaning_time`,`sensor.${n}_total_clean_time`,`sensor.${n}_total_duration`,`sensor.${n}_lifetime_time`]);f||(f=s("sensor",["total_cleaning_time","total_clean_time","total_duration","lifetime_time"])),f&&(i.total_cleaning_time_entity=f);let x=o([`sensor.${n}_total_cleaning_count`,`sensor.${n}_total_clean_count`,`sensor.${n}_cleaning_count`,`sensor.${n}_total_cleans`]);x||(x=s("sensor",["total_cleaning_count","total_clean_count","cleaning_count","total_cleans"])),x&&(i.total_cleaning_count_entity=x);let $=o([`sensor.${n}_filter_time_left`,`sensor.${n}_filter_life`,`sensor.${n}_filter`,`sensor.${n}_filter_utilization`,`sensor.${n}_hepa_filter_life`]);$||($=s("sensor",["filter_time_left","filter_life","filter","filter_utilization","hepa_filter"])),$&&(i.filter_entity=$);let w=o([`sensor.${n}_main_brush_time_left`,`sensor.${n}_main_brush_life`,`sensor.${n}_main_brush`,`sensor.${n}_brush_utilization`,`sensor.${n}_rolling_brush_life`]);w||(w=s("sensor",["main_brush_time_left","main_brush_life","main_brush","brush_utilization","rolling_brush"])),w&&(i.main_brush_entity=w);let k=o([`sensor.${n}_side_brush_time_left`,`sensor.${n}_side_brush_life`,`sensor.${n}_side_brush`,`sensor.${n}_edge_brush_life`]);k||(k=s("sensor",["side_brush_time_left","side_brush_life","side_brush","edge_brush"])),k&&(i.side_brush_entity=k);let S=o([`sensor.${n}_sensor_time_left`,`sensor.${n}_sensor_dirty_time_left`,`sensor.${n}_sensor_life`]);S||(S=s("sensor",["sensor_time_left","sensor_dirty_time_left","sensor_life"])),S&&(i.sensor_entity=S);let q=o([`sensor.${n}_vacuum_error`,`sensor.${n}_error`,`sensor.${n}_last_error`,`sensor.${n}_error_code`]);q||(q=s("sensor",["vacuum_error","error","last_error","error_code"])),q&&(i.vacuum_error_entity=q);let C=o([`sensor.${n}_dock_error`,`sensor.${n}_mop_drying_remaining_time`,`sensor.${n}_dock_status`]);C||(C=s("sensor",["dock_error","mop_drying_remaining_time","dock_status"])),C&&(i.dock_error_entity=C);let E=o([`image.${n}_first_floor`,`image.${n}_map`,`image.${n}`,`camera.${n}_map`,`camera.${n}`]);E||(E=s("image",["first_floor","map",""]),E||(E=s("camera",["map",""]))),E&&(E.startsWith("image.")?i.map_image_entity=E:i.map_entity=E);let D=o([`number.${n}_volume`,`number.${n}_speaker_volume`]);D||(D=s("number",["volume","speaker_volume"])),D&&(i.volume_entity=D);let z=o([`switch.${n}_do_not_disturb`,`switch.${n}_dnd`,`switch.${n}_quiet_hours`]);z||(z=s("switch",["do_not_disturb","dnd","quiet_hours"])),z&&(i.do_not_disturb_entity=z);let V=o([`select.${n}_selected_map`,`select.${n}_map`]);V||(V=s("select",["selected_map","map"])),V&&(i.selected_map_entity=V);let O=o([`button.${n}_full_cleaning`,`button.${n}_start_cleaning`,`button.${n}_start`]);return O||(O=s("button",["full_cleaning","start_cleaning","start"])),O&&(i.full_clean_button_entity=O),o([`binary_sensor.${n}_bin_full`,`sensor.${n}_bin_full`,`binary_sensor.${n.replace(/_/g,"")}_bin_full`]),i}renderCardLayoutSection(e,t,n,a){const o=e.display_sections||this.getDefaultSections(),r=e.section_order||o.map(e=>e.id),c=e.card_layout_style||"single_column",l="double_column"===c;this._expandedSectionsMap.has(e.id)||this._expandedSectionsMap.set(e.id,new Set),this._addDropdownOpenMap.has(e.id)||this._addDropdownOpenMap.set(e.id,!1);const u=new Set(o.map(e=>e.type)),d=Object.values(s.VACUUM_SECTIONS).filter(e=>!u.has(e.id)),m=l?r.filter(e=>{const t=o.find(t=>t.id===e);return t&&("left"===t.column||!t.column)}):r,p=l?r.filter(e=>{const t=o.find(t=>t.id===e);return t&&"right"===t.column}):[],v=(e,t)=>{this._draggedSectionId=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t)),e.target.style.opacity="0.4"},h=e=>{e.target.style.opacity="",this._draggedSectionId=null,document.querySelectorAll(".vacuum-section-item.drop-zone-active").forEach(e=>{e.classList.remove("drop-zone-active")}),document.querySelectorAll(".vacuum-column-drop-zone.active").forEach(e=>{e.classList.remove("active")})},_=e=>{e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move")},g=e=>{e.currentTarget.classList.add("drop-zone-active")},y=e=>{e.currentTarget.classList.remove("drop-zone-active")},b=(e,t,i)=>{if(e.preventDefault(),e.currentTarget.classList.remove("drop-zone-active"),!this._draggedSectionId||this._draggedSectionId===t)return;const a=o.find(e=>e.id===this._draggedSectionId),s=o.find(e=>e.id===t);if(!a||!s)return;const c=i||s.column||"left";if(l){const e="right"===c?[...p]:[...m],i="right"===c?[...m]:[...p],a=e.indexOf(this._draggedSectionId),r=i.indexOf(this._draggedSectionId);-1!==a&&e.splice(a,1),-1!==r&&i.splice(r,1);const s=e.indexOf(t);-1!==s?e.splice(s,0,this._draggedSectionId):e.push(this._draggedSectionId);const l="right"===c?[...i,...e]:[...e,...i],u=o.map(e=>e.id===this._draggedSectionId?Object.assign(Object.assign({},e),{column:c,order:l.indexOf(e.id)}):Object.assign(Object.assign({},e),{order:l.indexOf(e.id)}));n({display_sections:u,section_order:l})}else{const e=[...r],i=e.indexOf(this._draggedSectionId),a=e.indexOf(t);if(-1===i||-1===a)return;e.splice(i,1),e.splice(a,0,this._draggedSectionId);const s=o.map(t=>Object.assign(Object.assign({},t),{order:e.indexOf(t.id)}));n({display_sections:s,section_order:e})}this._draggedSectionId=null,setTimeout(()=>this.triggerPreviewUpdate(),50)},f=(e,t)=>{if(e.preventDefault(),e.currentTarget.classList.remove("active"),!this._draggedSectionId)return;const i="right"===t?[...p]:[...m],a="right"===t?[...m]:[...p],r=a.indexOf(this._draggedSectionId);-1!==r&&a.splice(r,1);const s=i.indexOf(this._draggedSectionId);-1!==s&&i.splice(s,1),i.push(this._draggedSectionId);const c=[...a,...i],l=o.map(e=>e.id===this._draggedSectionId?Object.assign(Object.assign({},e),{column:t,order:c.indexOf(e.id)}):Object.assign(Object.assign({},e),{order:c.indexOf(e.id)}));n({display_sections:l,section_order:c}),this._draggedSectionId=null,setTimeout(()=>this.triggerPreviewUpdate(),50)},x=e=>{const t=o.map(t=>t.id===e?Object.assign(Object.assign({},t),{enabled:!t.enabled}):t);n({display_sections:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)},$=t=>{this._expandedSectionsMap.has(e.id)||this._expandedSectionsMap.set(e.id,new Set);const i=this._expandedSectionsMap.get(e.id);i.has(t)?i.delete(t):(i.clear(),i.add(t)),n({_ui_refresh:Date.now()})},w=e=>{const t=o.find(t=>t.id===e);if(!t)return;const i=s.VACUUM_SECTIONS[t.type];if(null==i?void 0:i.required)return;const a=o.filter(t=>t.id!==e),c=r.filter(t=>t!==e);n({display_sections:a,section_order:c}),setTimeout(()=>this.triggerPreviewUpdate(),50)},k=i=>{const a=s.VACUUM_SECTIONS[i];if(!a)return;let c,u={};if(e.entity&&a.hasEntityOverride){const n=this.autoPopulateEntities(e.entity,t);switch(u=Object.assign({},n),i){case"battery":c=n.battery_entity;break;case"current_room":c=n.current_room_entity;break;case"current_stats":c=n.cleaning_area_entity;break;case"last_clean":c=n.last_clean_begin_entity;break;case"total_stats":c=n.total_cleaning_area_entity;break;case"component_life":c=void 0;break;case"errors":c=n.vacuum_error_entity;break;case"dnd":c=n.do_not_disturb_entity;break;case"volume":c=n.volume_entity;break;case"map":c=n.map_image_entity||n.map_entity}}const d={id:`section_${i}_${Date.now()}`,type:i,enabled:!0,order:o.length,column:l?"left":void 0,settings:"component_life"===i?{filter_entity_override:u.filter_entity,main_brush_entity_override:u.main_brush_entity,side_brush_entity_override:u.side_brush_entity,sensor_entity_override:u.sensor_entity}:c?{entity_override:c}:{}},m=[...o,d],p=[...r,d.id];this._expandedSectionsMap.has(e.id)||this._expandedSectionsMap.set(e.id,new Set);const v=this._expandedSectionsMap.get(e.id);v.clear(),v.add(d.id),this._addDropdownOpenMap.set(e.id,!1),n(Object.assign(Object.assign({},u),{display_sections:m,section_order:p})),setTimeout(()=>this.triggerPreviewUpdate(),50)},S=(e,t)=>{const i=o.map(n=>n.id===e?Object.assign(Object.assign({},n),{settings:Object.assign(Object.assign({},n.settings),t)}):n);n({display_sections:i}),setTimeout(()=>this.triggerPreviewUpdate(),50)},q=(n,r)=>{const c=o.find(e=>e.id===n);if(!c)return i.qy``;const l=s.VACUUM_SECTIONS[c.type];if(!l)return i.qy``;const u=(this._expandedSectionsMap.get(e.id)||new Set).has(n);return i.qy`
        <div
          class="vacuum-section-item"
          draggable="true"
          @dragstart=${e=>v(e,n)}
          @dragend=${h}
          @dragover=${_}
          @dragenter=${g}
          @dragleave=${y}
          @drop=${e=>b(e,n,r)}
        >
          <div class="vacuum-section-header ${u?"expanded":""}">
            <ha-icon icon="mdi:drag" class="vacuum-drag-handle"></ha-icon>
            <ha-icon icon="${l.icon}" class="vacuum-section-icon"></ha-icon>
            <span class="vacuum-section-label">${l.label}</span>
            <ha-icon
              icon="${c.enabled?"mdi:eye":"mdi:eye-off"}"
              class="vacuum-visibility-toggle ${c.enabled?"visible":"hidden"}"
              @click=${e=>{e.stopPropagation(),x(n)}}
            ></ha-icon>
            ${l.required?"":i.qy`
              <ha-icon
                icon="mdi:delete"
                class="vacuum-delete-btn"
                @click=${e=>{e.stopPropagation(),w(n)}}
              ></ha-icon>
            `}
            <ha-icon
              icon="mdi:chevron-${u?"up":"down"}"
              class="vacuum-expand-toggle"
              @click=${e=>{e.stopPropagation(),$(n)}}
            ></ha-icon>
          </div>

          ${u?i.qy`
            <div class="vacuum-section-settings">
              ${this.renderSectionSettings(c,t,S,e,a)}
            </div>
          `:""}
        </div>
      `};return i.qy`
      <style>
        .vacuum-card-layout {
          background: var(--secondary-background-color);
          border-radius: var(--uc-r-8, 8px);
          padding: 16px;
          margin-bottom: 16px;
        }

        .vacuum-section-title {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary-color);
          margin-bottom: 8px;
          letter-spacing: 0.5px;
        }

        .vacuum-section-description {
          font-size: 13px;
          color: var(--secondary-text-color);
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .vacuum-sections-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .vacuum-section-item {
          background: var(--primary-background-color);
          border-radius: var(--uc-r-6, 6px);
          cursor: move;
          border: 2px solid transparent;
          transition: all 0.2s;
        }

        .vacuum-section-item.drop-zone-active {
          border-color: var(--primary-color);
          background: rgba(var(--rgb-primary-color), 0.1);
        }

        .vacuum-section-header {
          display: flex;
          align-items: center;
          padding: 12px;
          gap: 8px;
          cursor: pointer;
        }

        .vacuum-section-header:hover {
          background: rgba(var(--rgb-primary-color), 0.05);
          border-radius: var(--uc-r-6, 6px);
        }

        .vacuum-drag-handle {
          --mdc-icon-size: 20px;
          color: var(--secondary-text-color);
          cursor: grab;
        }

        .vacuum-drag-handle:active {
          cursor: grabbing;
        }

        .vacuum-section-icon {
          --mdc-icon-size: 20px;
          color: var(--primary-color);
        }

        .vacuum-section-label {
          flex: 1;
          font-weight: 500;
          color: var(--primary-text-color);
        }

        .vacuum-visibility-toggle {
          --mdc-icon-size: 20px;
          cursor: pointer;
          transition: color 0.2s;
        }

        .vacuum-visibility-toggle.visible {
          color: var(--primary-color);
        }

        .vacuum-visibility-toggle.hidden {
          color: var(--secondary-text-color);
          opacity: 0.5;
        }

        .vacuum-delete-btn {
          --mdc-icon-size: 20px;
          color: var(--error-color, #f44336);
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .vacuum-delete-btn:hover {
          opacity: 1;
        }

        .vacuum-expand-toggle {
          --mdc-icon-size: 20px;
          color: var(--secondary-text-color);
          cursor: pointer;
          transition: transform 0.2s;
        }

        .vacuum-section-settings {
          padding: 12px 12px 16px 12px;
          border-top: 1px solid var(--divider-color);
          background: rgba(var(--rgb-primary-color), 0.02);
        }

        .vacuum-add-section {
          margin-top: 16px;
        }

        .vacuum-add-btn {
          width: 100%;
          padding: 12px;
          border: 2px dashed var(--primary-color);
          background: transparent;
          color: var(--primary-color);
          border-radius: var(--uc-r-8, 8px);
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
        }

        .vacuum-add-btn:hover {
          background: rgba(var(--rgb-primary-color), 0.1);
        }

        .vacuum-add-dropdown {
          position: relative;
        }

        .vacuum-add-options {
          position: absolute;
          bottom: 100%;
          left: 0;
          right: 0;
          background: var(--primary-background-color);
          border: 1px solid var(--divider-color);
          border-radius: var(--uc-r-8, 8px);
          box-shadow: 0 -4px 12px rgba(0,0,0,0.15);
          max-height: 300px;
          overflow-y: auto;
          z-index: 100;
          margin-bottom: 8px;
        }

        .vacuum-add-option {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .vacuum-add-option:hover {
          background: rgba(var(--rgb-primary-color), 0.1);
        }

        .vacuum-add-option ha-icon {
          --mdc-icon-size: 20px;
          color: var(--primary-color);
        }

        .vacuum-add-option-label {
          flex: 1;
          font-size: 14px;
          color: var(--primary-text-color);
        }

        .vacuum-add-option-desc {
          font-size: 11px;
          color: var(--secondary-text-color);
        }

        .vacuum-setting-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
        }

        .vacuum-setting-label {
          font-size: 14px;
          color: var(--primary-text-color);
        }

        .vacuum-setting-desc {
          font-size: 12px;
          color: var(--secondary-text-color);
        }
        
        .vacuum-layout-style-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--divider-color);
        }
        
        .vacuum-layout-style-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--primary-text-color);
        }
        
        .vacuum-layout-style-select {
          flex: 1;
          padding: 8px 12px;
          border-radius: var(--uc-r-6, 6px);
          border: 1px solid var(--divider-color);
          background: var(--primary-background-color);
          color: var(--primary-text-color);
          font-size: 14px;
          cursor: pointer;
        }
        
        .vacuum-columns-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        
        .vacuum-column {
          background: rgba(var(--rgb-primary-color), 0.03);
          border: 1px dashed var(--divider-color);
          border-radius: var(--uc-r-8, 8px);
          padding: 8px;
          min-height: 100px;
        }
        
        .vacuum-column-header {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--secondary-text-color);
          padding: 4px 8px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .vacuum-column-header ha-icon {
          --mdc-icon-size: 16px;
        }
        
        .vacuum-column-sections {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 60px;
        }
        
        .vacuum-column-drop-zone {
          border: 2px dashed var(--divider-color);
          border-radius: var(--uc-r-6, 6px);
          padding: 16px;
          text-align: center;
          color: var(--secondary-text-color);
          font-size: 12px;
          transition: all 0.2s;
        }
        
        .vacuum-column-drop-zone.active {
          border-color: var(--primary-color);
          background: rgba(var(--rgb-primary-color), 0.1);
          color: var(--primary-color);
        }
      </style>

      <div class="vacuum-card-layout">
        <div class="vacuum-section-title">Card Layout</div>
        <div class="vacuum-section-description">
          Drag to reorder sections. Click the eye to toggle visibility. Expand to customize settings.
        </div>
        
        <!-- Layout Style Selector -->
        <div class="vacuum-layout-style-row">
          <span class="vacuum-layout-style-label">Layout Style</span>
          <select 
            class="vacuum-layout-style-select"
            @change=${e=>{const t=e.target.value;if("single_column"===t){const e=o.map(e=>Object.assign(Object.assign({},e),{column:void 0}));n({card_layout_style:t,display_sections:e})}else{const e=o.map(e=>Object.assign(Object.assign({},e),{column:"left"}));n({card_layout_style:t,display_sections:e})}setTimeout(()=>this.triggerPreviewUpdate(),50)}}
          >
            <option value="single_column" ?selected=${"single_column"===c}>Single Column</option>
            <option value="double_column" ?selected=${"double_column"===c}>Double Column</option>
          </select>
        </div>

        ${l?i.qy`
          <!-- Double Column Layout -->
          <div class="vacuum-columns-container">
            <!-- Left Column -->
            <div class="vacuum-column">
              <div class="vacuum-column-header">
                <ha-icon icon="mdi:arrow-left-bold-box-outline"></ha-icon>
                Left Column
              </div>
              <div class="vacuum-column-sections">
                ${m.length>0?m.map(e=>q(e,"left")):i.qy`
                    <div 
                      class="vacuum-column-drop-zone"
                      @dragover=${_}
                      @dragenter=${e=>e.currentTarget.classList.add("active")}
                      @dragleave=${e=>e.currentTarget.classList.remove("active")}
                      @drop=${e=>f(e,"left")}
                    >
                      Drop sections here
                    </div>
                  `}
                ${m.length>0?i.qy`
                  <div 
                    class="vacuum-column-drop-zone"
                    @dragover=${_}
                    @dragenter=${e=>e.currentTarget.classList.add("active")}
                    @dragleave=${e=>e.currentTarget.classList.remove("active")}
                    @drop=${e=>f(e,"left")}
                  >
                    Drop here to add to bottom
                  </div>
                `:""}
              </div>
            </div>
            
            <!-- Right Column -->
            <div class="vacuum-column">
              <div class="vacuum-column-header">
                <ha-icon icon="mdi:arrow-right-bold-box-outline"></ha-icon>
                Right Column
              </div>
              <div class="vacuum-column-sections">
                ${p.length>0?p.map(e=>q(e,"right")):i.qy`
                    <div 
                      class="vacuum-column-drop-zone"
                      @dragover=${_}
                      @dragenter=${e=>e.currentTarget.classList.add("active")}
                      @dragleave=${e=>e.currentTarget.classList.remove("active")}
                      @drop=${e=>f(e,"right")}
                    >
                      Drop sections here
                    </div>
                  `}
                ${p.length>0?i.qy`
                  <div 
                    class="vacuum-column-drop-zone"
                    @dragover=${_}
                    @dragenter=${e=>e.currentTarget.classList.add("active")}
                    @dragleave=${e=>e.currentTarget.classList.remove("active")}
                    @drop=${e=>f(e,"right")}
                  >
                    Drop here to add to bottom
                  </div>
                `:""}
              </div>
            </div>
          </div>
        `:i.qy`
          <!-- Single Column Layout -->
          <div class="vacuum-sections-list">
            ${r.map(e=>q(e))}
          </div>
        `}

        ${d.length>0?i.qy`
          <div class="vacuum-add-section">
            <div class="vacuum-add-dropdown">
              <button
                class="vacuum-add-btn"
                @click=${()=>{const t=this._addDropdownOpenMap.get(e.id)||!1;this._addDropdownOpenMap.set(e.id,!t),n({display_sections:[...o]})}}
              >
                + Add Section
              </button>
              <div class="vacuum-add-options" style="display: ${this._addDropdownOpenMap.get(e.id)?"block":"none"};">
                ${d.map(e=>i.qy`
                  <div
                    class="vacuum-add-option"
                    @click=${()=>k(e.id)}
                  >
                    <ha-icon icon="${e.icon}"></ha-icon>
                    <div>
                      <div class="vacuum-add-option-label">${e.label}</div>
                      <div class="vacuum-add-option-desc">${e.description}</div>
                    </div>
                  </div>
                `)}
              </div>
            </div>
          </div>
        `:""}
      </div>
    `}renderSectionSettings(e,t,n,a,o){var r;const c=s.VACUUM_SECTIONS[e.type],l=e.settings||{},u=(()=>{switch(e.type){case"battery":return l.entity_override||a.battery_entity;case"current_room":return l.entity_override||a.current_room_entity;case"current_stats":return l.entity_override||a.cleaning_area_entity;case"last_clean":return l.entity_override||a.last_clean_begin_entity;case"total_stats":return l.entity_override||a.total_cleaning_area_entity;case"component_life":return l.entity_override||a.filter_entity;case"errors":return l.entity_override||a.vacuum_error_entity;case"dnd":return l.entity_override||a.do_not_disturb_entity;case"volume":return l.entity_override||a.volume_entity;case"map":return l.entity_override||a.map_image_entity||a.map_entity;default:return}})(),d=(i,a,o=!0)=>{var r;return this.renderFieldSection(a,"",t,{[i]:null!==(r=l[i])&&void 0!==r?r:o},[this.booleanField(i)],t=>n(e.id,{[i]:t.detail.value[i]}))},m=()=>c.hasEntityOverride?i.qy`
        <div style="margin-top: 12px;">
          <div class="vacuum-setting-label" style="margin-bottom: 8px;">Entity Override</div>
          <div class="vacuum-setting-desc" style="margin-bottom: 8px;">
            Override the auto-detected entity (current: ${u||"none"})
          </div>
          ${this.renderEntityPickerWithVariables(t,o,"entity_override",l.entity_override||"",t=>n(e.id,{entity_override:t}),void 0,"Entity Override")}
        </div>
      `:i.qy``,p=(a,o,r="var(--primary-color)")=>i.qy`
      <div style="margin-top: 12px;">
        <div class="vacuum-setting-label" style="margin-bottom: 8px;">${o}</div>
        <ultra-color-picker
          .value="${l[a]||r}"
          .hass="${t}"
          @value-changed=${t=>n(e.id,{[a]:t.detail.value})}
        ></ultra-color-picker>
      </div>
    `,v=()=>i.qy`
      <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--divider-color);">
        <div class="vacuum-setting-label" style="margin-bottom: 12px;">Spacing</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
          ${this.renderFieldSection("Top","",t,{margin_top:l.margin_top||0},[{name:"margin_top",selector:{number:{min:-50,max:50,step:2,mode:"box",unit_of_measurement:"px"}}}],t=>n(e.id,{margin_top:t.detail.value.margin_top}))}
          ${this.renderFieldSection("Bottom","",t,{margin_bottom:l.margin_bottom||0},[{name:"margin_bottom",selector:{number:{min:-50,max:50,step:2,mode:"box",unit_of_measurement:"px"}}}],t=>n(e.id,{margin_bottom:t.detail.value.margin_bottom}))}
          ${this.renderFieldSection("Left","",t,{margin_left:l.margin_left||0},[{name:"margin_left",selector:{number:{min:-50,max:50,step:2,mode:"box",unit_of_measurement:"px"}}}],t=>n(e.id,{margin_left:t.detail.value.margin_left}))}
          ${this.renderFieldSection("Right","",t,{margin_right:l.margin_right||0},[{name:"margin_right",selector:{number:{min:-50,max:50,step:2,mode:"box",unit_of_measurement:"px"}}}],t=>n(e.id,{margin_right:t.detail.value.margin_right}))}
        </div>
      </div>
    `;switch(e.type){case"vacuum_image":return i.qy`
          <div class="vacuum-setting-desc" style="margin-bottom: 12px;">
            The animated robot vacuum image with spinning brushes
          </div>
          ${this.renderFieldSection("Size","Size of the vacuum image in pixels",t,{icon_size:null!==(r=l.icon_size)&&void 0!==r?r:200},[{name:"icon_size",selector:{number:{min:60,max:300,step:10}}}],t=>n(e.id,{icon_size:t.detail.value.icon_size}))}
          ${p("icon_color","Primary Color")}
          <div style="margin-top: 12px;">
            <div class="vacuum-setting-label" style="margin-bottom: 8px;">Custom Image</div>
            <div class="vacuum-setting-desc" style="margin-bottom: 8px;">
              Use a custom image instead of the built-in SVG (URL or /local/ path)
            </div>
            ${this.renderUcForm(t,{custom_image:l.custom_image||a.custom_vacuum_image||""},[{name:"custom_image",selector:{text:{}}}],t=>n(e.id,{custom_image:t.detail.value.custom_image}),!1)}
          </div>
          ${v()}
        `;case"title_status":return i.qy`
          ${d("show_label","Show Name",!0)}
          ${d("show_value","Show Status",!0)}
          ${p("label_color","Name Color","var(--primary-text-color)")}
          ${p("value_color","Status Color")}
          ${v()}
        `;case"battery":return i.qy`
          ${d("show_title","Show Section Title",!1)}
          ${d("show_icon","Show Battery Icon",!0)}
          ${d("show_percentage","Show Percentage",!0)}
          ${p("color","Color")}
          ${m()}
          ${v()}
        `;case"current_room":return i.qy`
          ${d("show_title","Show Section Title",!1)}
          ${d("show_icon","Show Room Icon",!0)}
          ${d("show_label","Show Room Name",!0)}
          ${p("color","Color")}
          ${m()}
          ${v()}
        `;case"fan_speed":return i.qy`
          <div class="vacuum-setting-desc" style="margin-bottom: 12px;">
            Speed dropdown selector. The available speeds come from the vacuum entity.
          </div>
          ${this.renderFieldSection("Style","Layout style for the speed control",t,{style:l.style||"default"},[{name:"style",selector:{select:{options:[{value:"default",label:"Default"},{value:"speed_only",label:"Speed Only"},{value:"compact",label:"Compact"}]}}}],t=>n(e.id,{style:t.detail.value.style}))}
          ${p("color","Color")}
          ${v()}
        `;case"current_stats":case"last_clean":case"total_stats":return i.qy`
          ${d("show_title","Show Section Title",!0)}
          ${d("show_icon","Show Icons",!0)}
          ${d("show_label","Show Labels",!0)}
          ${p("color","Color")}
          ${m()}
          ${v()}
        `;case"component_life":return i.qy`
          ${d("show_filter","Show Filter Life",!0)}
          ${d("show_main_brush","Show Main Brush Life",!0)}
          ${d("show_side_brush","Show Side Brush Life",!0)}
          ${d("show_sensor","Show Sensor Life",!1)}
          ${d("show_graph","Show Progress Bars",!0)}
          ${d("show_percentage","Show Percentages",!0)}
          ${p("bar_color","Bar Color")}
          
          <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--divider-color);">
            <div class="vacuum-setting-label" style="margin-bottom: 8px;">Entity Overrides</div>
            ${this.renderEntityPickerWithVariables(t,o,"filter_entity_override",l.filter_entity_override||"",t=>n(e.id,{filter_entity_override:t}),["sensor"],"Filter Entity")}
            ${this.renderEntityPickerWithVariables(t,o,"main_brush_entity_override",l.main_brush_entity_override||"",t=>n(e.id,{main_brush_entity_override:t}),["sensor"],"Main Brush Entity")}
            ${this.renderEntityPickerWithVariables(t,o,"side_brush_entity_override",l.side_brush_entity_override||"",t=>n(e.id,{side_brush_entity_override:t}),["sensor"],"Side Brush Entity")}
            ${this.renderEntityPickerWithVariables(t,o,"sensor_entity_override",l.sensor_entity_override||"",t=>n(e.id,{sensor_entity_override:t}),["sensor"],"Sensor Entity")}
          </div>
          
          ${v()}
        `;case"errors":return i.qy`
          <div class="vacuum-setting-desc" style="margin-bottom: 12px;">
            Displays error messages from the vacuum and dock
          </div>
          ${d("show_icon","Show Error Icon",!0)}
          ${p("error_color","Error Color","var(--error-color, #f44336)")}
          ${m()}
          ${v()}
        `;case"dnd":return i.qy`
          ${d("show_icon","Show DND Icon",!0)}
          ${d("show_label","Show Status Text",!0)}
          ${p("button_color","Button Color")}
          ${m()}
          ${v()}
        `;case"volume":return i.qy`
          ${d("show_icon","Show Volume Icon",!0)}
          ${d("show_value","Show Volume Level",!0)}
          ${p("color","Color")}
          ${m()}
          ${v()}
        `;case"quick_controls":return i.qy`
          ${d("show_start","Show Start Button",!0)}
          ${d("show_pause","Show Pause Button",!0)}
          ${d("show_stop","Show Stop Button",!0)}
          ${d("show_dock","Show Dock Button",!0)}
          ${d("show_locate","Show Locate Button",!1)}
          ${this.renderFieldSection("Button Layout","Arrangement of control buttons",t,{control_layout:l.control_layout||"row"},[{name:"control_layout",selector:{select:{options:[{value:"row",label:"Row (Default)"},{value:"grid",label:"Grid"},{value:"compact",label:"Compact (Icons Only)"}]}}}],t=>n(e.id,{control_layout:t.detail.value.control_layout}))}
          ${p("button_color","Button Color")}
          ${v()}
        `;case"map":const s="swipe"===l.display_mode;return i.qy`
          <div class="vacuum-setting-desc" style="margin-bottom: 12px;">
            Displays the vacuum's floor map
          </div>
          ${this.renderFieldSection("Display Mode","How the map should be displayed",t,{display_mode:l.display_mode||"below_vacuum"},[{name:"display_mode",selector:{select:{options:[{value:"below_vacuum",label:"Default (Show as Section)"},{value:"replace_vacuum",label:"Replace Vacuum Image with Map"},{value:"swipe",label:"Swipe to View"}]}}}],t=>n(e.id,{display_mode:t.detail.value.display_mode}))}
          ${s?i.qy`
            <div class="vacuum-setting-desc" style="margin: 8px 0; padding: 8px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-6, 6px); font-size: 12px;">
              <ha-icon icon="mdi:information" style="--mdc-icon-size: 14px; margin-right: 4px;"></ha-icon>
              Map height is automatic in Swipe mode (matches vacuum image size)
            </div>
          `:this.renderFieldSection("Map Height","Height of the map display in pixels",t,{bar_height:l.bar_height||200},[{name:"bar_height",selector:{number:{min:100,max:500,step:10}}}],t=>n(e.id,{bar_height:t.detail.value.bar_height}))}
          ${m()}
          ${v()}
        `;default:return i.qy`
          <div class="vacuum-setting-desc">
            No additional settings for this section type.
          </div>
        `}}getDefaultSections(){const e=Date.now();return s.DEFAULT_SECTION_ORDER.map((t,n)=>({id:`section_${t}_${e}_${n}`,type:t,enabled:s.VACUUM_SECTIONS[t].defaultEnabled,order:n,settings:{}}))}renderSection(e,t,n,a,o,r){var s,c,l,u;if(!e.enabled)return i.qy``;const d=e.settings||{},m=[d.margin_top?`margin-top: ${d.margin_top}px;`:"",d.margin_right?`margin-right: ${d.margin_right}px;`:"",d.margin_bottom?`margin-bottom: ${d.margin_bottom}px;`:"",d.margin_left?`margin-left: ${d.margin_left}px;`:""].filter(Boolean).join(" "),p=e=>m?i.qy`<div style="${m}">${e}</div>`:e;switch(e.type){case"vacuum_image":const e=(t.display_sections||this.getDefaultSections()).find(e=>"map"===e.type&&e.enabled),m="replace_vacuum"===(null===(s=null==e?void 0:e.settings)||void 0===s?void 0:s.display_mode),v="swipe"===(null===(c=null==e?void 0:e.settings)||void 0===c?void 0:c.display_mode),h="swipe"===(null===(l=null==e?void 0:e.settings)||void 0===l?void 0:l.display_mode),_=null!==(u=d.icon_size)&&void 0!==u?u:200,g=d.custom_image||t.custom_vacuum_image;if(m)return p(i.qy`
            <div class="vacuum-icon-container">
              ${this.renderMapView(t,a,null==e?void 0:e.settings,!0,r)}
            </div>
          `);if(h){const n=this.getSwipeState(t.id),s="map"===this.getCurrentView(t.id)?-50:0,c=n.pointerDragActive&&n.pointerContainerWidth?n.pointerDeltaX/n.pointerContainerWidth*50:0,l=`transform: translateX(${Math.max(-50,Math.min(0,s+c))}%);`,u=Object.assign(Object.assign({},(null==e?void 0:e.settings)||{}),{bar_height:_});return p(i.qy`
            <div class="vacuum-icon-container">
              <div
                class="vacuum-swipe-carousel ${n.pointerDragActive?"dragging":""}"
                style="width: ${_}px; height: ${_}px;"
                @touchstart=${e=>this.handleTouchStart(e,t.id)}
                @touchmove=${e=>this.handleTouchMove(e,!0,t.id)}
                @touchend=${e=>this.handleTouchEnd(e,!0,t.id)}
                @pointerdown=${e=>this.handlePointerDown(e,!0,t.id)}
                @pointermove=${e=>this.handlePointerMove(e,!0,t.id)}
                @pointerup=${e=>this.handlePointerUp(e,!0,t.id)}
                @pointercancel=${e=>this.handlePointerUp(e,!0,t.id)}
              >
                <div class="vacuum-swipe-track" style="${l}">
                  <div class="vacuum-swipe-page">
                    ${g?i.qy`
                          <div class="vacuum-image ${o.animationClass}" style="width: ${_}px; height: ${_}px;">
                            <img
                              draggable="false"
                              src="${g}"
                              alt="Vacuum"
                              style="width: 100%; height: 100%; object-fit: contain;"
                              @dragstart=${e=>e.preventDefault()}
                            />
                          </div>
                        `:this.renderVacuumIcon(t,o.animationClass,_,o.isActive,o.isDocked,d.icon_color)}
                  </div>
                  <div class="vacuum-swipe-page">
                    ${this.renderMapView(t,a,u,!0,r)}
                  </div>
                </div>
              </div>
              ${v?this.renderPaginationDots(t.id,d.icon_color):""}
            </div>
          `)}return p(g?i.qy`
            <div 
              class="vacuum-icon-container ${n?"clickable":""}"
              @click=${n?e=>this.showMoreInfo(e,n.entity_id):i.s6}
            >
              <div class="vacuum-image ${o.animationClass}" style="width: ${_}px; height: ${_}px;">
                <img src="${g}" alt="Vacuum" style="width: 100%; height: 100%; object-fit: contain;" />
              </div>
            </div>
          `:i.qy`
          <div 
            class="vacuum-icon-container ${n?"clickable":""}"
            @click=${n?e=>this.showMoreInfo(e,n.entity_id):i.s6}
          >
            ${this.renderVacuumIcon(t,o.animationClass,_,o.isActive,o.isDocked,d.icon_color)}
          </div>
        `);case"title_status":return p(i.qy`
          <div 
            class="vacuum-header ${n?"clickable":""}"
            @click=${n?e=>this.showMoreInfo(e,n.entity_id):i.s6}
          >
            ${!1!==d.show_label?i.qy`
              <div class="vacuum-name" style="${d.label_color?`color: ${d.label_color}`:""}">
                ${o.displayName}
              </div>
            `:""}
            ${!1!==d.show_value?i.qy`
              <div class="vacuum-status-text" style="color: ${d.value_color||o.statusColor}">
                ${this.formatState(o.state)}
              </div>
            `:""}
          </div>
        `);case"battery":const y=this.resolveEntity(d.entity_override||t.battery_entity,r);let b=o.batteryLevel;if(y){const e=this.getEntityNumericValue(a,y);null!==e&&(b=e)}if(null===b)return i.qy``;const f=d.color||this.getBatteryColor(b,t);return p(i.qy`
          ${d.show_title?i.qy`<div class="stats-section-title">Battery</div>`:""}
          <div 
            class="vacuum-battery ${y?"clickable":""}" 
            style="color: ${f}"
            @click=${y?e=>this.showMoreInfo(e,y):i.s6}
          >
            ${!1!==d.show_icon?i.qy`
              <ha-icon 
                icon="${this.getBatteryIcon(b,o.isCharging)}"
                style="color: ${f};"
              ></ha-icon>
            `:""}
            ${!1!==d.show_percentage?i.qy`<span>${b}%</span>`:""}
          </div>
        `);case"current_room":const x=this.resolveEntity(d.entity_override||t.current_room_entity,r),$=this.getEntityValue(a,x);if(!$)return i.qy``;const w=d.color;return p(i.qy`
          ${d.show_title?i.qy`<div class="stats-section-title">Current Room</div>`:""}
          <div 
            class="vacuum-current-room ${x?"clickable":""}"
            @click=${x?e=>this.showMoreInfo(e,x):i.s6}
          >
            ${!1!==d.show_icon?i.qy`
              <ha-icon icon="mdi:home-map-marker" style="${w?`color: ${w}`:""}"></ha-icon>
            `:""}
            ${!1!==d.show_label?i.qy`<span>${$}</span>`:""}
          </div>
        `);case"fan_speed":return 0===o.fanSpeedOptions.length?i.qy``:p(this.renderFanSpeedControl(t,n,a,o.fanSpeed,o.fanSpeedOptions,d));case"current_stats":return p(this.renderCleaningStatsDetailed(n,t,a,d,r));case"last_clean":return p(this.renderLastClean(t,a,d,r));case"total_stats":return p(this.renderTotalStats(t,a,d,r));case"component_life":return p(this.renderComponentWearSection(n,t,a,d,r));case"errors":const k=this.resolveEntity(d.entity_override||t.vacuum_error_entity,r),S=this.resolveEntity(t.dock_error_entity,r),q=this.getEntityValue(a,k),C=this.getEntityValue(a,S);if(!(q&&"none"!==q&&"ok"!==q||C&&"ok"!==C))return i.qy``;const E=d.error_color||"var(--error-color, #f44336)";return p(i.qy`
          <div 
            class="vacuum-error-banner ${k?"clickable":""}" 
            style="background: color-mix(in srgb, ${E} 15%, transparent); border-color: ${E}; color: ${E};"
            @click=${k?e=>this.showMoreInfo(e,k):i.s6}
          >
            ${!1!==d.show_icon?i.qy`
              <ha-icon icon="mdi:alert-circle" style="color: ${E};"></ha-icon>
            `:""}
            <span>${q&&"none"!==q?this.formatError(q):""}${C&&"ok"!==C?` Dock: ${this.formatError(C)}`:""}</span>
          </div>
        `);case"dnd":return p(this.renderDndStatus(t,a,d,r));case"volume":return p(this.renderVolumeControl(t,a,d,r));case"quick_controls":return p(this.renderControlsSection(t,n,a,o.state,o.fanSpeed,o.fanSpeedOptions,d));case"map":const D=d.display_mode||"below_vacuum";if("replace_vacuum"===D)return i.qy``;if("swipe"===D)return i.qy``;const z=this.resolveEntity(d.entity_override||t.map_image_entity||t.map_entity,r);return p(i.qy`
          <div 
            class="${z?"clickable":""}"
            @click=${z?e=>this.showMoreInfo(e,z):i.s6}
          >
            ${this.renderMapView(t,a,d,!1,r)}
          </div>
        `);default:return i.qy``}}renderComponentWearSection(e,t,n,a,o){const r=[];if(!1!==(null==a?void 0:a.show_filter)){const e=this.resolveEntity((null==a?void 0:a.filter_entity_override)||t.filter_entity,o);e&&r.push({key:"filter",label:"Filter",icon:"mdi:air-filter",entity:e})}if(!1!==(null==a?void 0:a.show_main_brush)){const e=this.resolveEntity((null==a?void 0:a.main_brush_entity_override)||t.main_brush_entity,o);e&&r.push({key:"main_brush",label:"Main Brush",icon:"mdi:brush",entity:e})}if(!1!==(null==a?void 0:a.show_side_brush)){const e=this.resolveEntity((null==a?void 0:a.side_brush_entity_override)||t.side_brush_entity,o);e&&r.push({key:"side_brush",label:"Side Brush",icon:"mdi:asterisk",entity:e})}if(!1!==(null==a?void 0:a.show_sensor)){const e=this.resolveEntity((null==a?void 0:a.sensor_entity_override)||t.sensor_entity,o);e&&r.push({key:"sensor",label:"Sensors",icon:"mdi:eye",entity:e})}return 0===r.length?i.qy``:i.qy`
      <div class="vacuum-component-wear">
        ${r.map(e=>{const t=this.getComponentWearFromEntity(n,e.entity);if(null===t)return i.qy``;const o=(null==a?void 0:a.bar_color)||this.getWearColor(t);return i.qy`
            <div 
              class="wear-item ${e.entity?"clickable":""}"
              @click=${e.entity?t=>this.showMoreInfo(t,e.entity):i.s6}
            >
              <div class="wear-header">
                <ha-icon icon="${e.icon}"></ha-icon>
                <span class="wear-label">${e.label}</span>
                ${!1!==(null==a?void 0:a.show_percentage)?i.qy`
                  <span class="wear-value">${t}%</span>
                `:""}
              </div>
              ${!1!==(null==a?void 0:a.show_graph)?i.qy`
                <div class="wear-bar">
                  <div class="wear-progress" style="width: ${t}%; background-color: ${o}"></div>
                </div>
              `:""}
            </div>
          `})}
      </div>
    `}renderControlsSection(e,t,n,a,o,r,s){var c,l,u,d,m;const p=null!==(c=null==s?void 0:s.show_start)&&void 0!==c?c:!1!==e.show_start_button,v=null!==(l=null==s?void 0:s.show_pause)&&void 0!==l?l:!1!==e.show_pause_button,h=null!==(u=null==s?void 0:s.show_stop)&&void 0!==u?u:!1!==e.show_stop_button,_=null!==(d=null==s?void 0:s.show_dock)&&void 0!==d?d:!1!==e.show_dock_button,g=null!==(m=null==s?void 0:s.show_locate)&&void 0!==m?m:e.show_locate_button||!1,y=(null==s?void 0:s.control_layout)||e.control_layout||"row",b=null==s?void 0:s.button_color,f=b?`color: ${b}; border-color: ${b};`:"",x=b?`color: ${b};`:"";return"compact"===y?i.qy`
        <div class="vacuum-controls compact">
          ${p?i.qy`
            <button
              class="vacuum-control-btn-compact"
              style="${x}"
              @click=${()=>this.handleVacuumCommand("start",t.entity_id,n)}
              title="Start"
            >
              <ha-icon icon="mdi:play"></ha-icon>
            </button>
          `:""}
          ${v?i.qy`
            <button
              class="vacuum-control-btn-compact"
              style="${x}"
              @click=${()=>this.handleVacuumCommand("pause",t.entity_id,n)}
              title="Pause"
            >
              <ha-icon icon="mdi:pause"></ha-icon>
            </button>
          `:""}
          ${h?i.qy`
            <button
              class="vacuum-control-btn-compact"
              style="${x}"
              @click=${()=>this.handleVacuumCommand("stop",t.entity_id,n)}
              title="Stop"
            >
              <ha-icon icon="mdi:stop"></ha-icon>
            </button>
          `:""}
          ${_?i.qy`
            <button
              class="vacuum-control-btn-compact"
              style="${x}"
              @click=${()=>this.handleVacuumCommand("return_to_base",t.entity_id,n)}
              title="Return to Dock"
            >
              <ha-icon icon="mdi:home"></ha-icon>
            </button>
          `:""}
          ${g?i.qy`
            <button
              class="vacuum-control-btn-compact"
              style="${x}"
              @click=${()=>this.handleVacuumCommand("locate",t.entity_id,n)}
              title="Locate"
            >
              <ha-icon icon="mdi:map-marker"></ha-icon>
            </button>
          `:""}
        </div>
      `:i.qy`
      <div class="vacuum-controls ${y}">
        ${p?i.qy`
          <button
            class="vacuum-control-btn"
            style="${f}"
            @click=${()=>this.handleVacuumCommand("start",t.entity_id,n)}
            title="Start"
          >
            <ha-icon icon="mdi:play"></ha-icon>
          </button>
        `:""}
        ${v?i.qy`
          <button
            class="vacuum-control-btn"
            style="${f}"
            @click=${()=>this.handleVacuumCommand("pause",t.entity_id,n)}
            title="Pause"
          >
            <ha-icon icon="mdi:pause"></ha-icon>
          </button>
        `:""}
        ${h?i.qy`
          <button
            class="vacuum-control-btn"
            style="${f}"
            @click=${()=>this.handleVacuumCommand("stop",t.entity_id,n)}
            title="Stop"
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </button>
        `:""}
        ${_?i.qy`
          <button
            class="vacuum-control-btn"
            style="${f}"
            @click=${()=>this.handleVacuumCommand("return_to_base",t.entity_id,n)}
            title="Return to Dock"
          >
            <ha-icon icon="mdi:home"></ha-icon>
          </button>
        `:""}
        ${g?i.qy`
          <button
            class="vacuum-control-btn"
            style="${f}"
            @click=${()=>this.handleVacuumCommand("locate",t.entity_id,n)}
            title="Locate"
          >
            <ha-icon icon="mdi:map-marker"></ha-icon>
          </button>
        `:""}
      </div>
    `}getComponentWearFromEntity(e,t){if(!t)return null;const n=null==e?void 0:e.states[t];if(!n)return null;const i=parseFloat(n.state);return isNaN(i)?null:i>100?Math.round(i/300*100):Math.round(i)}renderSectionsInOrder(e,t,n,a,o){const r=e.display_sections||this.getDefaultSections(),s=e.section_order||r.map(e=>e.id);if("double_column"===e.card_layout_style){const c=s.filter(e=>{const t=r.find(t=>t.id===e);return t&&t.enabled&&("left"===t.column||!t.column)}),l=s.filter(e=>{const t=r.find(t=>t.id===e);return t&&t.enabled&&"right"===t.column}),u=s=>s.map(s=>{const c=r.find(e=>e.id===s);return c&&c.enabled?this.renderSection(c,e,t,n,a,o):i.qy``});return i.qy`
        <div class="vacuum-double-column-layout">
          <div class="vacuum-column-left">
            ${u(c)}
          </div>
          <div class="vacuum-column-right">
            ${u(l)}
          </div>
        </div>
      `}return i.qy`
      ${s.map(s=>{const c=r.find(e=>e.id===s);return c&&c.enabled?this.renderSection(c,e,t,n,a,o):i.qy``})}
    `}getVacuumState(e){return e?e.state||"unknown":"unavailable"}getBatteryLevel(e){var t,n;if(!(null==e?void 0:e.attributes))return null;const i=null!==(n=null!==(t=e.attributes.battery_level)&&void 0!==t?t:e.attributes.battery)&&void 0!==n?n:e.attributes.battery_percentage;if("number"==typeof i)return i;if("string"==typeof i){const e=parseFloat(i);if(!isNaN(e))return e}return null}getFanSpeedOptions(e){var t;return(null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.fan_speed_list)?e.attributes.fan_speed_list:[]}getCurrentFanSpeed(e){var t;return(null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.fan_speed)?e.attributes.fan_speed:""}getStatusColor(e,t){return{cleaning:t.status_color_cleaning||"#4CAF50",docked:t.status_color_docked||"#9E9E9E",returning:t.status_color_returning||"#2196F3",idle:t.status_color_idle||"#FF9800",paused:t.status_color_idle||"#FF9800",error:t.status_color_error||"#F44336"}[e]||"var(--secondary-text-color)"}getBatteryColor(e,t){var n,i;if(null===e)return"var(--secondary-text-color)";const a=null!==(n=t.battery_threshold_low)&&void 0!==n?n:20,o=null!==(i=t.battery_threshold_medium)&&void 0!==i?i:50;return e<=a?t.battery_color_low||"#F44336":e<=o?t.battery_color_medium||"#FF9800":t.battery_color_high||"#4CAF50"}getBatteryIcon(e,t){return null===e?"mdi:battery-unknown":t?e>=90?"mdi:battery-charging-100":e>=80?"mdi:battery-charging-80":e>=60?"mdi:battery-charging-60":e>=40?"mdi:battery-charging-40":e>=20?"mdi:battery-charging-20":"mdi:battery-charging-10":e>=90?"mdi:battery":e>=80?"mdi:battery-80":e>=60?"mdi:battery-60":e>=40?"mdi:battery-40":e>=20?"mdi:battery-20":e>=10?"mdi:battery-10":"mdi:battery-outline"}getAnimationClass(e,t){if(!t.enable_animations)return"";const n=t.animation_speed||"normal",i="slow"===n?"-slow":"fast"===n?"-fast":"";switch(e){case"cleaning":const e=t.animation_cleaning||"spin";return"none"!==e?`vacuum-anim-${e}${i}`:"";case"returning":const n=t.animation_returning||"pulse";return"none"!==n?`vacuum-anim-${n}${i}`:"";case"docked":const a=t.animation_charging||"pulse";return"none"!==a?`vacuum-anim-${a}${i}`:"";default:return""}}async handleVacuumCommand(e,t,n){try{await n.callService("vacuum",e,{entity_id:t})}catch(t){console.error(`Vacuum command ${e} failed:`,t)}finally{this.triggerPreviewUpdate(!0)}}async handleFanSpeedChange(e,t,n){try{await n.callService("vacuum","set_fan_speed",{entity_id:t,fan_speed:e})}catch(e){console.error("Fan speed change failed:",e)}finally{this.triggerPreviewUpdate(!0)}}async handleRoomCleanup(e,t,n,i){try{switch(i){case"xiaomi":case"roborock":await n.callService("xiaomi_miio","vacuum_clean_segment",{entity_id:t,segments:e});break;case"valetudo":await n.callService("vacuum","send_command",{entity_id:t,command:"segment_cleanup",params:{segment_ids:e}});break;default:await n.callService("vacuum","send_command",{entity_id:t,command:"app_segment_clean",params:e})}}catch(e){console.error("Room cleanup failed:",e)}}showMoreInfo(e,t){t&&(e.stopPropagation(),(0,o.rC)(e.target,"hass-more-info",{entityId:t}))}async toggleSwitch(e,t,n){if(t&&n){e.stopPropagation();try{n.states[t];const e=t.split(".")[0];"switch"===e?await n.callService("switch","toggle",{entity_id:t}):"input_boolean"===e?await n.callService("input_boolean","toggle",{entity_id:t}):await n.callService("homeassistant","toggle",{entity_id:t})}catch(e){console.error("Toggle failed:",e)}}}getComponentWear(e,t){if(!(null==e?void 0:e.attributes))return null;const n={filter:["filter_left","filter_life","filter_life_remaining"],main_brush:["main_brush_left","main_brush_life","main_brush_life_remaining"],side_brush:["side_brush_left","side_brush_life","side_brush_life_remaining"],sensor:["sensor_dirty_left","sensor_life","sensor_life_remaining"]}[t];for(const t of n){const n=e.attributes[t];if("number"==typeof n)return n>100?Math.round(n/300*100):n}return null}formatDuration(e,t="minutes"){if(null==e)return"--";const n="seconds"===t?Math.floor(e/60):e;if(n<60)return`${n}m`;const i=Math.floor(n/60),a=n%60;return a>0?`${i}h ${a}m`:`${i}h`}formatArea(e){return null==e?"--":`${e} m²`}handleTouchStart(e,t){const n=this.getSwipeState(t);n.touchStartX=e.touches[0].clientX,n.touchStartY=e.touches[0].clientY,n.isSwiping=!1}handleTouchMove(e,t,n){if(!t)return;const i=this.getSwipeState(n),a=e.touches[0].clientX-i.touchStartX,o=Math.abs(e.touches[0].clientY-i.touchStartY);Math.abs(a)>30&&Math.abs(a)>o&&(i.isSwiping=!0,e.preventDefault(),e.stopPropagation())}handleTouchEnd(e,t,n){const i=this.getSwipeState(n);if(!t||!i.isSwiping)return;const a=e.changedTouches[0].clientX-i.touchStartX;Math.abs(a)>50&&(a<0&&"vacuum"===this.getCurrentView(n)?this._currentViewMap.set(n,"map"):a>0&&"map"===this.getCurrentView(n)&&this._currentViewMap.set(n,"vacuum"),this.triggerPreviewUpdate()),i.isSwiping=!1}handlePointerDown(e,t,n){if(!t)return;if("mouse"===e.pointerType&&0!==e.button)return;const i=this.getSwipeState(n);i.pointerDown=!0,i.pointerDragActive=!1,i.pointerDeltaX=0,i.pointerStartX=e.clientX,i.pointerStartY=e.clientY;const a=e.currentTarget;if(a){i.pointerContainerWidth=a.getBoundingClientRect().width||0;try{a.setPointerCapture(e.pointerId)}catch(e){}}}handlePointerMove(e,t,n){const i=this.getSwipeState(n);if(!t||!i.pointerDown)return;const a=e.clientX-i.pointerStartX,o=Math.abs(e.clientY-i.pointerStartY);if(!i.pointerDragActive){if(!(Math.abs(a)>10&&Math.abs(a)>o))return;i.pointerDragActive=!0}e.preventDefault(),e.stopPropagation(),i.pointerDeltaX=a,i.pointerRafPending||(i.pointerRafPending=!0,requestAnimationFrame(()=>{i.pointerRafPending=!1,this.triggerPreviewUpdate()}))}handlePointerUp(e,t,n){if(!t)return;const i=e.currentTarget;if(i)try{i.releasePointerCapture(e.pointerId)}catch(e){}const a=this.getSwipeState(n);if(!a.pointerDown)return;const o=a.pointerDeltaX,r=a.pointerContainerWidth||0;if(a.pointerDragActive){const e=Math.max(60,.18*r);Math.abs(o)>e&&this._currentViewMap.set(n,o<0?"map":"vacuum")}a.pointerDown=!1,a.pointerDragActive=!1,a.pointerDeltaX=0,a.pointerContainerWidth=0,this.triggerPreviewUpdate()}renderGeneralTab(e,t,n,o){var r;const s=e,c=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}

      <!-- Entity Configuration (single settings-section box with entity picker + display name) -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,a.kg)("editor.vacuum.section_entity",c,"Entity Configuration")}
        </div>
        <div
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,a.kg)("editor.vacuum.section_entity_desc",c,"Select the vacuum entity to control")}
        </div>
        ${this.renderEntityPickerWithVariables(t,n,"entity",s.entity||"",e=>{const n=t.states[e],i=n?this.detectIntegration(n):"generic",a=this.autoPopulateEntities(e,t);o(Object.assign({entity:e,detected_integration:i},a)),setTimeout(()=>this.triggerPreviewUpdate(),50)},["vacuum"],(0,a.kg)("editor.vacuum.entity",c,"Vacuum Entity"))}
        ${this.renderFieldSection((0,a.kg)("editor.vacuum.name",c,"Display Name"),(0,a.kg)("editor.vacuum.name_desc",c,"Custom name to display (leave empty to use entity name)"),t,{name:s.name||""},[this.textField("name")],e=>{o({name:e.detail.value.name}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
      </div>

      <!-- Card Layout Builder -->
      ${this.renderCardLayoutSection(s,t,o,n)}

      <!-- Animations Toggle -->
      ${this.renderSettingsSection((0,a.kg)("editor.vacuum.section_animations",c,"Animations"),(0,a.kg)("editor.vacuum.section_animations_desc",c,"Control vacuum animations"),[{title:"Enable Animations",description:"Turn on/off vacuum animations (spinning brushes, dock LED, etc.)",hass:t,data:{enable_animations:!1!==s.enable_animations},schema:[this.booleanField("enable_animations")],onChange:e=>{o({enable_animations:e.detail.value.enable_animations}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
    `}renderPreview(e,t,n,a){var o,r,s,c,l,u;const d=e,m=this.resolveEntity(d.entity,n)||d.entity,p=m?null==t?void 0:t.states[m]:void 0,v=this.getVacuumState(p);let h=this.getBatteryLevel(p);const _=this.resolveEntity(d.battery_entity,n);if(_){const e=this.getEntityNumericValue(t,_);null!==e&&(h=e)}let g="docked"===v&&(null===(r=null===(o=null==p?void 0:p.attributes)||void 0===o?void 0:o.status)||void 0===r?void 0:r.toLowerCase().includes("charg"));const y=this.resolveEntity(d.charging_binary_entity,n),b=y?null===(s=null==t?void 0:t.states[y])||void 0===s?void 0:s.state:void 0;"on"!==b&&"off"!==b||(g="on"===b);const f=this.getCurrentFanSpeed(p),x=this.getFanSpeedOptions(p),$=d.name||(null===(c=null==p?void 0:p.attributes)||void 0===c?void 0:c.friendly_name)||"Vacuum",w=this.getStatusColor(v,d),k=this.getAnimationClass(v,d),S=(null==d||d.hover_effect,this.getHoverEffectClass(e)),q=this.buildStyleString(this.buildDesignStyles(e,t)),C=(d.display_sections||this.getDefaultSections()).find(e=>"map"===e.type&&e.enabled),E=(null===(l=null==C?void 0:C.settings)||void 0===l?void 0:l.display_mode)||"below_vacuum",D=null===(u=null==C?void 0:C.settings)||void 0===u?void 0:u.entity_override,z=!!(d.map_entity||d.map_image_entity||D||d.map_card_config),V=d.vacuum_size||120,O=d.layout_mode||"standard";return this.wrapWithAnimation(i.qy`
      <style>
        ${this.getStyles()}
      </style>
      
      <div 
        class="vacuum-module-container ${S} layout-${O} ${"swipe"===E?"swipe-mode":""}"
        data-uc-role="pane"
        style="${q}"
        @touchstart=${e=>this.handleTouchStart(e,d.id)}
        @touchmove=${e=>this.handleTouchMove(e,!!z&&"swipe"===E,d.id)}
        @touchend=${e=>this.handleTouchEnd(e,!!z&&"swipe"===E,d.id)}
      >
        ${p?"compact"===O?this.renderCompactLayout(d,p,t,$,v,h,g,w,k,V,n):"detailed"===O?this.renderDetailedLayout(d,p,t,$,v,h,g,w,k,V,f,x,n):this.renderStandardLayout(d,p,t,$,v,h,g,w,k,V,f,x,n):this.renderNoEntity(d)}
      </div>
    `,e,t)}renderNoEntity(e){return i.qy`
      <div class="vacuum-no-entity">
        <ha-icon icon="mdi:robot-vacuum-alert"></ha-icon>
        <span>No vacuum entity configured</span>
      </div>
    `}renderPaginationDots(e,t){const n="map"===this.getCurrentView(e),a=t?`background: ${t};`:"",o=t=>{this._currentViewMap.set(e,t),this.triggerPreviewUpdate()},r=(e,t)=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),o(t))};return i.qy`
      <div class="vacuum-pagination-dots">
        <div 
          class="vacuum-dot ${n?"":"active"}"
          style="${n?"":a}"
          role="button"
          tabindex="0"
          aria-pressed="${!n}"
          aria-label="Vacuum view, 1 of 2"
          @click=${()=>o("vacuum")}
          @keydown=${e=>r(e,"vacuum")}
          title="Vacuum"
        ></div>
        <div 
          class="vacuum-dot ${n?"active":""}"
          style="${n?a:""}"
          role="button"
          tabindex="0"
          aria-pressed="${n}"
          aria-label="Map view, 2 of 2"
          @click=${()=>o("map")}
          @keydown=${e=>r(e,"map")}
          title="Map"
        ></div>
      </div>
    `}renderCompactLayout(e,t,n,a,o,r,s,c,l,u,d){const m={displayName:a,state:o,batteryLevel:r,isCharging:s,statusColor:c,animationClass:l,vacuumSize:.6*u,fanSpeed:"",fanSpeedOptions:[],isActive:"cleaning"===o||"returning"===o,isDocked:"docked"===o||"charging"===o||s};return i.qy`
      <div class="vacuum-compact vacuum-sections-layout">
        ${this.renderSectionsInOrder(e,t,n,m,d)}
      </div>
    `}renderStandardLayout(e,t,n,a,o,r,s,c,l,u,d,m,p){const v={displayName:a,state:o,batteryLevel:r,isCharging:s,statusColor:c,animationClass:l,vacuumSize:u,fanSpeed:d,fanSpeedOptions:m,isActive:"cleaning"===o||"returning"===o,isDocked:"docked"===o||"charging"===o||s};return i.qy`
      <div class="vacuum-standard vacuum-sections-layout">
        ${this.renderSectionsInOrder(e,t,n,v,p)}
      </div>
    `}renderDetailedLayout(e,t,n,a,o,r,s,c,l,u,d,m,p){const v={displayName:a,state:o,batteryLevel:r,isCharging:s,statusColor:c,animationClass:l,vacuumSize:u,fanSpeed:d,fanSpeedOptions:m,isActive:"cleaning"===o||"returning"===o,isDocked:"docked"===o||"charging"===o||s};return i.qy`
      <div class="vacuum-detailed vacuum-sections-layout">
        ${this.renderSectionsInOrder(e,t,n,v,p)}
      </div>
    `}renderVacuumIcon(e,t,n,a=!1,o=!1,r){const s=e.custom_vacuum_image,c=r||e.primary_color||"var(--primary-color)",l=o?"":t;return s?i.qy`
        <div class="vacuum-image ${l}" style="width: ${n}px; height: ${n}px;">
          <img src="${s}" alt="Vacuum" style="width: 100%; height: 100%; object-fit: contain;" />
        </div>
      `:i.qy`
      <div class="vacuum-svg-container ${l}" style="width: ${n}px; height: ${n}px;">
        ${this.renderVacuumSVG(n,a,c,o)}
      </div>
    `}renderVacuumSVG(e,t,n,a=!1){const o=(e,t)=>{const n=[];for(let i=0;i<8;i++){const a=360*i/8*(Math.PI/180),o=e+12*Math.cos(a),r=t+12*Math.sin(a);n.push({x1:e,y1:t,x2:o,y2:r})}return n},r=o(30,85),s=o(70,85);return i.qy`
      <svg 
        viewBox="5 ${a?"0":"20"} 90 ${a?"105":"85"}" 
        width="${e}" 
        height="${e}"
        class="vacuum-svg ${t?"vacuum-svg-active":""}"
        style="overflow: visible;"
      >
        <defs>
          <!-- Gradient for the body -->
          <linearGradient id="vacuumBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: var(--card-background-color, #3a3a3a); stop-opacity: 1" />
            <stop offset="100%" style="stop-color: var(--secondary-background-color, #2a2a2a); stop-opacity: 1" />
          </linearGradient>
          <!-- Dock gradient -->
          <linearGradient id="dockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color: var(--secondary-background-color, #444); stop-opacity: 1" />
            <stop offset="100%" style="stop-color: var(--card-background-color, #2a2a2a); stop-opacity: 1" />
          </linearGradient>
          <!-- Shadow filter -->
          <filter id="vacuumShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
          </filter>
        </defs>
        
        <!-- DOCK (shown when docked) -->
        ${a?i.qy`
          <g class="vacuum-dock">
            <!-- Dock station at top -->
            <path d="M 25 5 L 75 5 L 75 22 Q 75 28 69 28 L 31 28 Q 25 28 25 22 Z" 
                  fill="url(#dockGradient)" 
                  stroke="#666666" 
                  stroke-width="1.5"/>
            <!-- Dock charging contacts -->
            <rect x="38" y="24" width="8" height="6" rx="1" fill="#777777"/>
            <rect x="54" y="24" width="8" height="6" rx="1" fill="#777777"/>
            <!-- Dock LED indicator - slow blinking when charging -->
            <circle cx="50" cy="12" r="3" fill="${n}" class="vacuum-dock-led"/>
            <!-- Dock brand line -->
            <line x1="35" y1="18" x2="65" y2="18" stroke="#888888" stroke-width="1"/>
          </g>
        `:""}
        
        <!-- BRUSHES DRAWN FIRST (underneath the robot body) -->
        
        <!-- Left side brush - thin asterisk pattern with spinning bristles -->
        <g class="vacuum-side-brush-left ${t?"vacuum-brush-spin":""}" style="transform-origin: ${30}px ${85}px;">
          ${r.map(e=>i.JW`
            <line x1="${e.x1}" y1="${e.y1}" x2="${e.x2}" y2="${e.y2}" 
                  stroke="${n}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          `)}
          <circle cx="${30}" cy="${85}" r="3" 
                  fill="var(--divider-color, #444)" stroke="${n}" stroke-width="1.5"/>
        </g>
        
        <!-- Right side brush - thin asterisk pattern with spinning bristles -->
        <g class="vacuum-side-brush-right ${t?"vacuum-brush-spin-reverse":""}" style="transform-origin: ${70}px ${85}px;">
          ${s.map(e=>i.JW`
            <line x1="${e.x1}" y1="${e.y1}" x2="${e.x2}" y2="${e.y2}" 
                  stroke="${n}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          `)}
          <circle cx="${70}" cy="${85}" r="3" 
                  fill="var(--divider-color, #444)" stroke="${n}" stroke-width="1.5"/>
        </g>
        
        <!-- ROBOT BODY DRAWN ON TOP -->
        
        <!-- Main body - outer ring -->
        <circle 
          cx="50" cy="60" r="38" 
          fill="url(#vacuumBodyGradient)" 
          stroke="var(--divider-color, #555)" 
          stroke-width="2"
          filter="url(#vacuumShadow)"
        />
        
        <!-- Inner body ring -->
        <circle 
          cx="50" cy="60" r="31" 
          fill="none" 
          stroke="var(--divider-color, #444)" 
          stroke-width="1.5"
        />
        
        <!-- Top sensor/LiDAR bump -->
        <circle 
          cx="50" cy="30" r="6" 
          fill="var(--secondary-background-color, #333)"
          stroke="var(--divider-color, #555)" 
          stroke-width="1.5"
        />
        <circle 
          cx="50" cy="30" r="3" 
          fill="${n}"
          class="${t?"vacuum-sensor-blink":""}"
        />
        
        <!-- Center dust bin area - positioned in lower half -->
        <ellipse 
          cx="50" cy="73" rx="12" ry="8" 
          fill="var(--secondary-background-color, #333)"
          stroke="var(--divider-color, #555)" 
          stroke-width="1"
        />
        
        <!-- Horizontal divider line -->
        <line 
          x1="22" y1="55" x2="78" y2="55" 
          stroke="var(--divider-color, #555)" 
          stroke-width="1.5"
          stroke-linecap="round"
        />
        
        <!-- Status LED indicator -->
        <circle 
          cx="50" cy="44" r="3" 
          fill="${t||a?n:"var(--divider-color, #555)"}"
          class="${t?"vacuum-status-led":a?"vacuum-charging-led":""}"
        />

        <!-- Dock arc overlay (drawn on top of robot so it isn't hidden by the body) -->
        ${a?i.JW`
          <g class="vacuum-dock-arc-group">
            <!-- Single blue arc positioned at the TOP of the robot -->
            <!-- Slightly lower than the absolute top so glow isn't clipped by the image container -->
            <path d="M 12 32 Q 50 2 88 32"
                  fill="none"
                  stroke="${n}"
                  stroke-width="6"
                  stroke-linecap="round"
                  class="vacuum-dock-arc-pulse"
                  style="color: ${n};" />
          </g>
        `:""}
      </svg>
    `}formatState(e){return{cleaning:"Cleaning",docked:"Docked",returning:"Returning",idle:"Idle",paused:"Paused",error:"Error",unavailable:"Unavailable",unknown:"Unknown"}[e]||e.charAt(0).toUpperCase()+e.slice(1)}renderCleaningStats(e,t){var n,a,o,r;const s=(null==e?void 0:e.attributes)||{},c=null!==(a=null!==(n=s.cleaning_time)&&void 0!==n?n:s.clean_time)&&void 0!==a?a:s.total_cleaning_time,l=null!==(r=null!==(o=s.cleaned_area)&&void 0!==o?o:s.clean_area)&&void 0!==r?r:s.total_cleaned_area;return void 0===c&&void 0===l?i.qy``:i.qy`
      <div class="vacuum-stats">
        ${void 0!==c?i.qy`
              <div class="vacuum-stat">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
                <span>${this.formatDuration(c)}</span>
              </div>
            `:""}
        ${void 0!==l?i.qy`
              <div class="vacuum-stat">
                <ha-icon icon="mdi:texture-box"></ha-icon>
                <span>${this.formatArea(l)}</span>
              </div>
            `:""}
      </div>
    `}getEntityValue(e,t,n){const i=this.resolveEntity(t,n);return i&&e.states[i]?e.states[i].state:null}getEntityNumericValue(e,t,n){const i=this.getEntityValue(e,t,n);if(null===i||"unavailable"===i||"unknown"===i)return null;const a=parseFloat(i);return isNaN(a)?null:a}formatError(e){return e&&"none"!==e&&"ok"!==e?e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()):""}renderCleaningStatsDetailed(e,t,n,a,o){var r,s,c,l,u,d,m,p;const v=(null==e?void 0:e.attributes)||{},h=this.resolveEntity(t.cleaning_time_entity,o),_=this.resolveEntity(t.cleaning_area_entity,o),g=null!==(l=null!==(c=null!==(s=null!==(r=this.getEntityNumericValue(n,h))&&void 0!==r?r:v.cleaning_time)&&void 0!==s?s:v.clean_time)&&void 0!==c?c:v.cleanTime)&&void 0!==l?l:v.duration,y=null!==(p=null!==(m=null!==(d=null!==(u=this.getEntityNumericValue(n,_))&&void 0!==u?u:v.cleaned_area)&&void 0!==d?d:v.clean_area)&&void 0!==m?m:v.cleaning_area)&&void 0!==p?p:v.area_cleaned;if(void 0===g&&void 0===y)return i.qy``;const b=!1!==(null==a?void 0:a.show_title),f=!1!==(null==a?void 0:a.show_icon),x=!1!==(null==a?void 0:a.show_label),$=null==a?void 0:a.color,w=$?`color: ${$};`:"";return i.qy`
      <div class="vacuum-stats-detailed">
        ${b?i.qy`<div class="stats-section-title">Current Session</div>`:""}
        <div class="stats-row">
          ${null!=g?i.qy`
                <div 
                  class="stat-item ${h?"clickable":""}"
                  @click=${h?e=>this.showMoreInfo(e,h):i.s6}
                >
                  ${f?i.qy`<ha-icon icon="mdi:clock-outline" style="${w}"></ha-icon>`:""}
                  <div class="stat-value">${this.formatDuration(g)}</div>
                  ${x?i.qy`<div class="stat-label">Time</div>`:""}
                </div>
              `:""}
          ${null!=y?i.qy`
                <div 
                  class="stat-item ${_?"clickable":""}"
                  @click=${_?e=>this.showMoreInfo(e,_):i.s6}
                >
                  ${f?i.qy`<ha-icon icon="mdi:texture-box" style="${w}"></ha-icon>`:""}
                  <div class="stat-value">${this.formatArea(y)}</div>
                  ${x?i.qy`<div class="stat-label">Area</div>`:""}
                </div>
              `:""}
        </div>
      </div>
    `}renderLastClean(e,t,n,a){const o=this.resolveEntity(e.last_clean_begin_entity,a),r=this.resolveEntity(e.last_clean_end_entity,a),s=this.getEntityValue(t,o),c=this.getEntityValue(t,r);if(!s&&!c)return i.qy``;const l=!1!==(null==n?void 0:n.show_title),u=!1!==(null==n?void 0:n.show_icon),d=!1!==(null==n?void 0:n.show_label),m=null==n?void 0:n.color,p=m?`color: ${m};`:"",v=e=>{if(!e)return"";try{return new Date(e).toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}catch(t){return e}};return i.qy`
      <div class="vacuum-last-clean">
        ${l?i.qy`<div class="stats-section-title">Last Cleaning</div>`:""}
        <div class="last-clean-times">
          ${s?i.qy`
                <div 
                  class="time-item ${o?"clickable":""}"
                  @click=${o?e=>this.showMoreInfo(e,o):i.s6}
                >
                  ${u?i.qy`<ha-icon icon="mdi:play-circle-outline" style="${p}"></ha-icon>`:""}
                  ${d?i.qy`<span>${v(s)}</span>`:""}
                </div>
              `:""}
          ${c?i.qy`
                <div 
                  class="time-item ${r?"clickable":""}"
                  @click=${r?e=>this.showMoreInfo(e,r):i.s6}
                >
                  ${u?i.qy`<ha-icon icon="mdi:stop-circle-outline" style="${p}"></ha-icon>`:""}
                  ${d?i.qy`<span>${v(c)}</span>`:""}
                </div>
              `:""}
        </div>
      </div>
    `}renderTotalStats(e,t,n,a){var o,r,s,c,l,u,d,m,p,v;const h=this.resolveEntity(e.entity,a),_=h?null==t?void 0:t.states[h]:null,g=(null==_?void 0:_.attributes)||{},y=this.resolveEntity(e.total_cleaning_area_entity,a),b=this.resolveEntity(e.total_cleaning_time_entity,a),f=this.resolveEntity(e.total_cleaning_count_entity,a),x=null!==(s=null!==(r=null!==(o=this.getEntityNumericValue(t,y))&&void 0!==o?o:g.total_cleaning_area)&&void 0!==r?r:g.total_clean_area)&&void 0!==s?s:g.lifetime_area,$=null!==(u=null!==(l=null!==(c=this.getEntityNumericValue(t,b))&&void 0!==c?c:g.total_cleaning_time)&&void 0!==l?l:g.total_clean_time)&&void 0!==u?u:g.lifetime_time,w=null!==(v=null!==(p=null!==(m=null!==(d=this.getEntityNumericValue(t,f))&&void 0!==d?d:g.total_cleaning_count)&&void 0!==m?m:g.total_clean_count)&&void 0!==p?p:g.total_cleans)&&void 0!==v?v:g.cleaning_count;if(null===x&&null===$&&null===w)return i.qy``;const k=!1!==(null==n?void 0:n.show_title),S=!1!==(null==n?void 0:n.show_icon),q=!1!==(null==n?void 0:n.show_label),C=null==n?void 0:n.color,E=C?`color: ${C};`:"";return i.qy`
      <div class="vacuum-total-stats">
        ${k?i.qy`<div class="stats-section-title">Lifetime Statistics</div>`:""}
        <div class="stats-row">
          ${null!==$?i.qy`
                <div 
                  class="stat-item ${b?"clickable":""}"
                  @click=${b?e=>this.showMoreInfo(e,b):i.s6}
                >
                  ${S?i.qy`<ha-icon icon="mdi:clock-check-outline" style="${E}"></ha-icon>`:""}
                  <div class="stat-value">${this.formatDuration(60*$)}</div>
                  ${q?i.qy`<div class="stat-label">Total Time</div>`:""}
                </div>
              `:""}
          ${null!==x?i.qy`
                <div 
                  class="stat-item ${y?"clickable":""}"
                  @click=${y?e=>this.showMoreInfo(e,y):i.s6}
                >
                  ${S?i.qy`<ha-icon icon="mdi:floor-plan" style="${E}"></ha-icon>`:""}
                  <div class="stat-value">${this.formatArea(x)}</div>
                  ${q?i.qy`<div class="stat-label">Total Area</div>`:""}
                </div>
              `:""}
          ${null!==w?i.qy`
                <div 
                  class="stat-item ${f?"clickable":""}"
                  @click=${f?e=>this.showMoreInfo(e,f):i.s6}
                >
                  ${S?i.qy`<ha-icon icon="mdi:counter" style="${E}"></ha-icon>`:""}
                  <div class="stat-value">${w}</div>
                  ${q?i.qy`<div class="stat-label">Sessions</div>`:""}
                </div>
              `:""}
        </div>
      </div>
    `}renderDndStatus(e,t,n,a){const o=this.resolveEntity(e.entity,a),r=o?null==t?void 0:t.states[o]:null,s=(null==r?void 0:r.attributes)||{},c=this.resolveEntity((null==n?void 0:n.entity_override)||e.do_not_disturb_entity,a);let l=this.getEntityValue(t,c);null===l&&void 0!==s.do_not_disturb&&(l=s.do_not_disturb?"on":"off");const u=this.getEntityValue(t,e.do_not_disturb_begin_entity,a),d=this.getEntityValue(t,e.do_not_disturb_end_entity,a);if(null===l)return i.qy``;const m="on"===l||"true"===String(l),p=!1!==(null==n?void 0:n.show_icon),v=!1!==(null==n?void 0:n.show_label),h=(null==n?void 0:n.button_color)||"var(--primary-color)",_=m?h:"var(--disabled-color, #9e9e9e)",g=`background: ${_}; border-color: ${_}; color: var(--text-primary-color, #fff);`,y=c&&(c.startsWith("switch.")||c.startsWith("input_boolean."));return i.qy`
      <div 
        class="vacuum-dnd-status ${m?"dnd-active":""} ${y?"clickable":""}" 
        style="${g} border-radius: var(--uc-r-8, 8px); padding: 8px 12px; cursor: ${y?"pointer":"default"};"
        @click=${y?e=>this.toggleSwitch(e,c,t):i.s6}
      >
        <div class="dnd-header" style="display: flex; align-items: center; gap: 8px;">
          ${p?i.qy`<ha-icon icon="${m?"mdi:bell-off":"mdi:bell"}" style="color: inherit;"></ha-icon>`:""}
          ${v?i.qy`<span>Do Not Disturb: ${m?"On":"Off"}</span>`:""}
        </div>
        ${u&&d&&v?i.qy`<div class="dnd-times" style="opacity: 0.8; font-size: 0.85em; margin-top: 4px;">${u} - ${d}</div>`:""}
      </div>
    `}renderVolumeControl(e,t,n,a){const o=this.resolveEntity((null==n?void 0:n.entity_override)||e.volume_entity,a),r=this.getEntityNumericValue(t,o);if(null===r)return i.qy``;const s=!1!==(null==n?void 0:n.show_icon),c=!1!==(null==n?void 0:n.show_value),l=(null==n?void 0:n.color)||"var(--primary-color)";return i.qy`
      <div 
        class="vacuum-volume ${o?"clickable":""}"
        @click=${o?e=>this.showMoreInfo(e,o):i.s6}
      >
        <div class="volume-header">
          ${s?i.qy`<ha-icon icon="mdi:volume-high" style="color: ${l};"></ha-icon>`:""}
          ${c?i.qy`<span>Volume: ${r}%</span>`:""}
        </div>
        <div class="volume-bar">
          <div class="volume-bar-fill" style="width: ${r}%; background: ${l};"></div>
        </div>
      </div>
    `}renderComponentWear(e,t,n){const a=n?this.getEntityNumericValue(n,t.filter_entity):null,o=n?this.getEntityNumericValue(n,t.main_brush_entity):null,r=n?this.getEntityNumericValue(n,t.side_brush_entity):null,s=n?this.getEntityNumericValue(n,t.sensor_entity):null,c=(e,t=300)=>null===e?null:e<0?0:Math.min(100,Math.round(e/t*100)),l=!1!==t.show_filter_life?null!==a?c(a,150):this.getComponentWear(e,"filter"):null,u=!1!==t.show_main_brush_life?null!==o?c(o,300):this.getComponentWear(e,"main_brush"):null,d=!1!==t.show_side_brush_life?null!==r?c(r,200):this.getComponentWear(e,"side_brush"):null,m=t.show_sensor_life?null!==s?c(s,30):this.getComponentWear(e,"sensor"):null;return null!==l||null!==u||null!==d||null!==m?i.qy`
      <div class="component-wear">
        <div class="component-wear-title">Component Life</div>
        <div class="component-wear-grid">
          ${null!==l?i.qy`
                <div class="component-item">
                  <ha-icon icon="mdi:air-filter"></ha-icon>
                  <div class="component-bar">
                    <div class="component-bar-fill" style="width: ${l}%; background: ${this.getWearColor(l)}"></div>
                  </div>
                  <span class="component-value">${l}%</span>
                </div>
              `:""}
          ${null!==u?i.qy`
                <div class="component-item">
                  <ha-icon icon="mdi:brush"></ha-icon>
                  <div class="component-bar">
                    <div class="component-bar-fill" style="width: ${u}%; background: ${this.getWearColor(u)}"></div>
                  </div>
                  <span class="component-value">${u}%</span>
                </div>
              `:""}
          ${null!==d?i.qy`
                <div class="component-item">
                  <ha-icon icon="mdi:fan"></ha-icon>
                  <div class="component-bar">
                    <div class="component-bar-fill" style="width: ${d}%; background: ${this.getWearColor(d)}"></div>
                  </div>
                  <span class="component-value">${d}%</span>
                </div>
              `:""}
          ${null!==m?i.qy`
                <div class="component-item">
                  <ha-icon icon="mdi:eye"></ha-icon>
                  <div class="component-bar">
                    <div class="component-bar-fill" style="width: ${m}%; background: ${this.getWearColor(m)}"></div>
                  </div>
                  <span class="component-value">${m}%</span>
                </div>
              `:""}
        </div>
      </div>
    `:i.qy``}getWearColor(e){return e<=20?"#F44336":e<=50?"#FF9800":"#4CAF50"}renderControls(e,t,n,a,o,r){const s=e.control_layout||"row",c="cleaning"===a||"returning"===a;return i.qy`
      <div class="vacuum-controls layout-${s}">
        ${!1!==e.show_start_button?i.qy`
              <button
                class="vacuum-control-btn ${"cleaning"===a?"active":""}"
                @click=${()=>this.handleVacuumCommand("start",e.entity,n)}
                title="Start"
              >
                <ha-icon icon="mdi:play"></ha-icon>
                ${"compact"!==s?i.qy`<span>Start</span>`:""}
              </button>
            `:""}
        ${!1!==e.show_pause_button?i.qy`
              <button
                class="vacuum-control-btn ${"paused"===a?"active":""}"
                @click=${()=>this.handleVacuumCommand("pause",e.entity,n)}
                title="Pause"
                ?disabled=${!c}
              >
                <ha-icon icon="mdi:pause"></ha-icon>
                ${"compact"!==s?i.qy`<span>Pause</span>`:""}
              </button>
            `:""}
        ${!1!==e.show_stop_button?i.qy`
              <button
                class="vacuum-control-btn"
                @click=${()=>this.handleVacuumCommand("stop",e.entity,n)}
                title="Stop"
                ?disabled=${!c&&"paused"!==a}
              >
                <ha-icon icon="mdi:stop"></ha-icon>
                ${"compact"!==s?i.qy`<span>Stop</span>`:""}
              </button>
            `:""}
        ${!1!==e.show_dock_button?i.qy`
              <button
                class="vacuum-control-btn ${"returning"===a?"active":""}"
                @click=${()=>this.handleVacuumCommand("return_to_base",e.entity,n)}
                title="Return to Dock"
              >
                <ha-icon icon="mdi:home"></ha-icon>
                ${"compact"!==s?i.qy`<span>Dock</span>`:""}
              </button>
            `:""}
        ${e.show_locate_button?i.qy`
              <button
                class="vacuum-control-btn"
                @click=${()=>this.handleVacuumCommand("locate",e.entity,n)}
                title="Locate"
              >
                <ha-icon icon="mdi:map-marker"></ha-icon>
                ${"compact"!==s?i.qy`<span>Locate</span>`:""}
              </button>
            `:""}
      </div>
    `}renderCompactControls(e,t,n){const a=this.getVacuumState(t),o="cleaning"===a||"returning"===a;return i.qy`
      <div class="vacuum-compact-controls">
        ${o?i.qy`
              <button class="vacuum-compact-btn" @click=${()=>this.handleVacuumCommand("pause",e.entity,n)} title="Pause">
                <ha-icon icon="mdi:pause"></ha-icon>
              </button>
              <button class="vacuum-compact-btn" @click=${()=>this.handleVacuumCommand("return_to_base",e.entity,n)} title="Dock">
                <ha-icon icon="mdi:home"></ha-icon>
              </button>
            `:i.qy`
              <button class="vacuum-compact-btn" @click=${()=>this.handleVacuumCommand("start",e.entity,n)} title="Start">
                <ha-icon icon="mdi:play"></ha-icon>
              </button>
            `}
      </div>
    `}renderFanSpeedControl(e,t,n,a,o,r){const s=(null==r?void 0:r.style)||"default",c=(null==r?void 0:r.color)||"var(--primary-color)",l=`background: ${c}; border-color: ${c};`,u=(e="",r=l)=>i.qy`
      <div class="fan-speed-select-wrapper">
        <select 
          class="fan-speed-select ${e}"
          style="${r}"
          @change=${e=>{const i=e.target;this.handleFanSpeedChange(i.value,t.entity_id,n)}}
        >
          ${o.map(e=>i.qy`
              <option value="${e}" ?selected=${a===e}>
                ${(e=>e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()))(e)}
              </option>
            `)}
        </select>
        <ha-icon class="fan-speed-caret" icon="mdi:chevron-down" style="color: ${"compact"===e?c:"inherit"};"></ha-icon>
      </div>
    `;return"speed_only"===s?i.qy`
        <div class="vacuum-fan-speed-row speed-only">
          ${u("",l)}
        </div>
      `:"compact"===s?i.qy`
        <div class="vacuum-fan-speed-row compact">
          <ha-icon icon="mdi:fan" style="color: ${c};"></ha-icon>
          ${u("compact",`color: ${c}; border-color: ${c};`)}
        </div>
      `:i.qy`
      <div class="vacuum-fan-speed-row" data-uc-role="pane">
        <div class="fan-speed-left">
          <ha-icon icon="mdi:fan" style="color: ${c};"></ha-icon>
          <span>Speed</span>
        </div>
        <div class="fan-speed-right">
          ${u("",l)}
        </div>
      </div>
    `}renderMapView(e,t,n,a=!1,o){var r,s,c;const l=(null==n?void 0:n.bar_height)||e.map_height||200,u=e.map_border_radius||12,d=(null==n||n.display_mode,this.resolveEntity(null==n?void 0:n.entity_override,o)),m=d?null==t?void 0:t.states[d]:null,p=this.resolveEntity(e.map_image_entity,o),v=this.resolveEntity(e.map_entity,o),h=p?null==t?void 0:t.states[p]:null,_=v?null==t?void 0:t.states[v]:null,g=(null===(r=null==m?void 0:m.attributes)||void 0===r?void 0:r.entity_picture)||(null===(s=null==h?void 0:h.attributes)||void 0===s?void 0:s.entity_picture)||(null===(c=null==_?void 0:_.attributes)||void 0===c?void 0:c.entity_picture);return g?i.qy`
        <div class="vacuum-map-container ${a?"inline":""}" style="height: ${l}px; border-radius: ${u}px;">
          <img
            draggable="false"
            src="${g}" 
            alt="Vacuum Map" 
            class="vacuum-map-image"
            style="border-radius: ${u}px;"
            @dragstart=${e=>e.preventDefault()}
          />
          ${""}
        </div>
      `:i.qy`
      <div class="vacuum-map-container vacuum-map-empty ${a?"inline":""}" style="height: ${l}px; border-radius: ${u}px;">
        <ha-icon icon="mdi:map-outline"></ha-icon>
        <span>No map available</span>
        ${""}
      </div>
    `}validate(e){const t=e,n=[...super.validate(e).errors];return t.entity&&""!==t.entity.trim()?t.entity.startsWith("vacuum.")||t.entity.startsWith("$")||n.push("Entity must be a vacuum entity (vacuum.*)"):n.push("Vacuum entity is required"),!t.map_entity||t.map_entity.startsWith("camera.")||t.map_entity.startsWith("$")||n.push("Map entity must be a camera entity (camera.*)"),{valid:0===n.length,errors:n}}getStyles(){return'\n      /* Clickable elements - for more-info and toggle actions */\n      .clickable {\n        cursor: pointer;\n        transition: opacity 0.2s ease, transform 0.1s ease;\n      }\n      .clickable:hover {\n        opacity: 0.8;\n      }\n      .clickable:active {\n        transform: scale(0.98);\n      }\n      \n      .vacuum-module-container {\n        padding: 12px 16px 16px 16px;\n        background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background)));\n        border: var(--uc-pane-border, none);\n        box-shadow: var(--uc-pane-shadow, none);\n        border-radius: var(--uc-r-12, 12px);\n        position: relative;\n        overflow: hidden;\n      }\n      .vacuum-module-container.swipe-mode {\n        /* Allow vertical scrolling but keep horizontal swipes available for our handler */\n        touch-action: pan-y;\n      }\n      \n      .vacuum-no-entity {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        padding: 32px;\n        color: var(--secondary-text-color);\n        gap: 12px;\n      }\n      .vacuum-no-entity ha-icon {\n        font-size: 48px;\n        opacity: 0.5;\n      }\n      \n      .vacuum-compact {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n      }\n      .vacuum-compact-left {\n        flex-shrink: 0;\n      }\n      .vacuum-compact-right {\n        flex: 1;\n        min-width: 0;\n      }\n      .vacuum-compact-info {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        margin-top: 4px;\n      }\n      .vacuum-battery-compact {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 14px;\n        color: var(--secondary-text-color);\n      }\n      .vacuum-battery-compact ha-icon {\n        font-size: 18px;\n      }\n      .vacuum-compact-controls {\n        display: flex;\n        gap: 8px;\n        margin-left: auto;\n      }\n      .vacuum-compact-btn {\n        background: var(--primary-color);\n        color: var(--text-primary-color, white);\n        border: none;\n        border-radius: 50%;\n        width: 36px;\n        height: 36px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        transition: all 0.2s ease;\n      }\n      .vacuum-compact-btn:hover {\n        transform: scale(1.1);\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n      }\n      .vacuum-compact-btn ha-icon {\n        font-size: 18px;\n      }\n      \n      .vacuum-standard {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 16px;\n        text-align: center;\n      }\n      .vacuum-header {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 4px;\n        width: 100%;\n      }\n      .vacuum-name {\n        font-size: 20px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n      .vacuum-status-text {\n        font-size: 14px;\n        font-weight: 500;\n        text-transform: capitalize;\n      }\n      .vacuum-battery {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 14px;\n        font-weight: 500;\n      }\n      .vacuum-battery ha-icon {\n        --mdc-icon-size: 20px;\n      }\n      .vacuum-icon-container {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 6px;\n      }\n      .vacuum-status-badge {\n        padding: 4px 12px;\n        border-radius: var(--uc-r-16, 16px);\n        font-size: 12px;\n        font-weight: 600;\n        color: white;\n        text-transform: uppercase;\n      }\n      \n      .vacuum-detailed {\n        display: flex;\n        flex-direction: column;\n        gap: 16px;\n      }\n      .vacuum-header-detailed {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n      }\n      .vacuum-header-left {\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n      }\n      .vacuum-status-text {\n        font-size: 14px;\n        font-weight: 500;\n      }\n      .vacuum-battery-detailed {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 18px;\n        font-weight: 600;\n      }\n      .vacuum-battery-detailed ha-icon {\n        font-size: 28px;\n      }\n      .vacuum-main-content {\n        display: flex;\n        gap: 24px;\n        align-items: flex-start;\n      }\n      .vacuum-icon-wrapper {\n        flex-shrink: 0;\n      }\n      .vacuum-info-panel {\n        flex: 1;\n        min-width: 0;\n      }\n      \n      .vacuum-icon {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: var(--primary-color);\n        transition: all 0.3s ease;\n      }\n      .vacuum-icon ha-icon {\n        width: 100%;\n        height: 100%;\n      }\n      .vacuum-image {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      \n      /* SVG Vacuum Container */\n      .vacuum-svg-container {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .vacuum-svg {\n        transition: all 0.3s ease;\n      }\n      \n      .vacuum-status {\n        font-size: 14px;\n        font-weight: 500;\n      }\n      \n      .vacuum-stats {\n        display: flex;\n        justify-content: center;\n        gap: 24px;\n        padding: 12px 0;\n      }\n      .vacuum-stat {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 14px;\n        color: var(--secondary-text-color);\n      }\n      .vacuum-stat ha-icon {\n        font-size: 18px;\n      }\n      \n      .vacuum-stats-detailed {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n      }\n      .stats-section-title {\n        font-size: 12px;\n        font-weight: 600;\n        text-transform: uppercase;\n        color: var(--secondary-text-color);\n        letter-spacing: 0.5px;\n      }\n      .stats-row {\n        display: flex;\n        gap: 16px;\n        flex-wrap: wrap;\n      }\n      .stat-item {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 4px;\n        min-width: 60px;\n      }\n      .stat-item ha-icon {\n        font-size: 20px;\n        color: var(--primary-color);\n      }\n      .stat-value {\n        font-size: 16px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n      .stat-label {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        text-transform: uppercase;\n      }\n      \n      .component-wear {\n        margin-top: 16px;\n        padding-top: 16px;\n        border-top: 1px solid var(--divider-color);\n      }\n      .component-wear-title {\n        font-size: 12px;\n        font-weight: 600;\n        text-transform: uppercase;\n        color: var(--secondary-text-color);\n        margin-bottom: 12px;\n      }\n      .component-wear-grid {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n      }\n      .component-item {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n      .component-item ha-icon {\n        font-size: 16px;\n        color: var(--secondary-text-color);\n        width: 20px;\n      }\n      .component-bar {\n        flex: 1;\n        height: 6px;\n        background: var(--divider-color);\n        border-radius: var(--uc-r-3, 3px);\n        overflow: hidden;\n      }\n      .component-bar-fill {\n        height: 100%;\n        border-radius: var(--uc-r-3, 3px);\n        transition: width 0.3s ease;\n      }\n      .component-value {\n        font-size: 12px;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        width: 36px;\n        text-align: right;\n      }\n      \n      /* Current Room */\n      .vacuum-current-room {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        margin-top: 4px;\n      }\n      .vacuum-current-room ha-icon {\n        --mdc-icon-size: 16px;\n        color: var(--primary-color);\n      }\n      \n      /* Error Banner */\n      .vacuum-error-banner {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 12px;\n        background: rgba(var(--rgb-error-color, 244, 67, 54), 0.15);\n        border-radius: var(--uc-r-8, 8px);\n        color: var(--error-color, #f44336);\n        font-size: 13px;\n        margin-bottom: 12px;\n      }\n      .vacuum-error-banner ha-icon {\n        --mdc-icon-size: 20px;\n        flex-shrink: 0;\n      }\n      \n      /* Last Clean Section */\n      .vacuum-last-clean {\n        margin-top: 12px;\n        padding-top: 12px;\n        border-top: 1px solid var(--divider-color);\n      }\n      .last-clean-times {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n        margin-top: 8px;\n      }\n      .time-item {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 13px;\n        color: var(--primary-text-color);\n      }\n      .time-item ha-icon {\n        --mdc-icon-size: 18px;\n        color: var(--secondary-text-color);\n      }\n      \n      /* Total Stats Section */\n      .vacuum-total-stats {\n        margin-top: 12px;\n        padding-top: 12px;\n        border-top: 1px solid var(--divider-color);\n      }\n      \n      /* Do Not Disturb Status */\n      .vacuum-dnd-status {\n        margin-top: 12px;\n        padding: 12px;\n        border-radius: var(--uc-r-8, 8px);\n        border: 1px solid;\n        transition: all 0.2s ease;\n      }\n      .dnd-header {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 13px;\n        font-weight: 500;\n      }\n      .dnd-header ha-icon {\n        --mdc-icon-size: 18px;\n      }\n      .dnd-times {\n        margin-top: 6px;\n        padding-left: 26px;\n        font-size: 12px;\n        opacity: 0.8;\n      }\n      \n      /* Volume Control */\n      .vacuum-volume {\n        margin-top: 12px;\n        padding: 12px;\n        background: var(--secondary-background-color);\n        border-radius: var(--uc-r-8, 8px);\n        border: 1px solid var(--divider-color);\n      }\n      .volume-header {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 13px;\n        color: var(--primary-text-color);\n        margin-bottom: 8px;\n      }\n      .volume-header ha-icon {\n        --mdc-icon-size: 18px;\n        color: var(--primary-color);\n      }\n      .volume-bar {\n        height: 6px;\n        background: var(--divider-color);\n        border-radius: var(--uc-r-3, 3px);\n        overflow: hidden;\n      }\n      .volume-bar-fill {\n        height: 100%;\n        background: var(--primary-color);\n        border-radius: var(--uc-r-3, 3px);\n        transition: width 0.3s ease;\n      }\n      \n      .vacuum-controls {\n        display: flex;\n        justify-content: center;\n        gap: 12px;\n        margin-top: 0;\n        flex-wrap: wrap;\n      }\n      .vacuum-controls.grid {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));\n        gap: 8px;\n      }\n      .vacuum-controls.compact {\n        gap: 16px;\n        justify-content: center;\n      }\n      .vacuum-control-btn {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 4px;\n        padding: 12px 16px;\n        background: var(--secondary-background-color);\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-12, 12px);\n        cursor: pointer;\n        transition: all 0.2s ease;\n        color: var(--primary-text-color);\n        min-width: 60px;\n      }\n      .vacuum-control-btn:hover:not(:disabled) {\n        background: var(--primary-color);\n        color: var(--text-primary-color, white);\n        border-color: var(--primary-color);\n      }\n      .vacuum-control-btn:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n      }\n      .vacuum-control-btn.active {\n        background: var(--primary-color);\n        color: var(--text-primary-color, white);\n        border-color: var(--primary-color);\n      }\n      .vacuum-control-btn ha-icon {\n        font-size: 24px;\n      }\n      .vacuum-control-btn span {\n        font-size: 11px;\n        font-weight: 500;\n      }\n      /* Compact button - icon only, no background */\n      .vacuum-control-btn-compact {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 8px;\n        background: transparent;\n        border: none;\n        border-radius: 50%;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        color: var(--primary-text-color);\n        --mdc-icon-size: 24px;\n      }\n      .vacuum-control-btn-compact:hover:not(:disabled) {\n        background: color-mix(in srgb, currentColor 10%, transparent);\n      }\n      .vacuum-control-btn-compact:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n      }\n      .layout-compact .vacuum-control-btn {\n        padding: 8px;\n        min-width: 44px;\n      }\n      .layout-compact .vacuum-control-btn span {\n        display: none;\n      }\n      \n      /* Fan Speed Row - single line with dropdown */\n      .vacuum-fan-speed-row {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 12px 16px;\n        background: var(--uc-pane-bg, var(--secondary-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        border-radius: var(--uc-r-12, 12px);\n        margin-bottom: 0;\n        gap: 16px;\n        width: 100%;\n        box-sizing: border-box;\n      }\n      /* Speed Only - just the dropdown centered */\n      .vacuum-fan-speed-row.speed-only {\n        background: transparent;\n        padding: 8px 0;\n        justify-content: center;\n      }\n      /* Compact - centered with icon, no background */\n      .vacuum-fan-speed-row.compact {\n        background: transparent;\n        padding: 8px 0;\n        justify-content: center;\n        gap: 8px;\n      }\n      .vacuum-fan-speed-row.compact .fan-speed-select {\n        background: transparent;\n        border: 1px solid currentColor;\n        padding: 8px 28px 8px 12px;\n        font-size: 13px;\n        color: inherit;\n      }\n      .vacuum-fan-speed-row.compact .fan-speed-select.compact {\n        background: transparent;\n      }\n      .vacuum-fan-speed-row.compact .fan-speed-caret {\n        color: inherit;\n      }\n\n      /* Swipe carousel inside image area */\n      .vacuum-swipe-carousel {\n        overflow: hidden;\n        position: relative;\n        border-radius: var(--uc-r-12, 12px);\n        /* Helps mobile browsers allow horizontal swipe without scroll hijack */\n        touch-action: pan-y;\n        user-select: none;\n        cursor: grab;\n      }\n      .vacuum-swipe-carousel img {\n        -webkit-user-drag: none;\n        user-drag: none;\n      }\n      .vacuum-swipe-carousel.dragging {\n        cursor: grabbing;\n      }\n      .vacuum-swipe-track {\n        display: flex;\n        width: 200%;\n        height: 100%;\n        transition: transform 280ms ease;\n        will-change: transform;\n      }\n      .vacuum-swipe-page {\n        width: 50%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .fan-speed-left {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        font-size: 14px;\n        font-weight: 500;\n        color: var(--primary-text-color);\n        flex-shrink: 0;\n      }\n      .fan-speed-left ha-icon {\n        --mdc-icon-size: 20px;\n        color: var(--secondary-text-color);\n      }\n      .fan-speed-right {\n        display: flex;\n        align-items: center;\n        flex: 1;\n        justify-content: flex-end;\n      }\n      .fan-speed-select-wrapper {\n        position: relative;\n        display: inline-flex;\n        align-items: center;\n      }\n      .fan-speed-select {\n        padding: 10px 32px 10px 16px;\n        background: var(--primary-color);\n        color: var(--text-primary-color, white);\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        appearance: none;\n        -webkit-appearance: none;\n        min-width: 120px;\n        text-align: left;\n      }\n      .fan-speed-caret {\n        position: absolute;\n        right: 8px;\n        top: 50%;\n        transform: translateY(-50%);\n        pointer-events: none;\n        --mdc-icon-size: 18px;\n        color: var(--text-primary-color, white);\n        opacity: 0.9;\n      }\n      .fan-speed-select.compact + .fan-speed-caret {\n        color: inherit;\n      }\n      .fan-speed-select:hover {\n        opacity: 0.9;\n      }\n      .fan-speed-select:focus {\n        outline: 2px solid rgba(var(--rgb-primary-color), 0.5);\n        outline-offset: 2px;\n      }\n      .fan-speed-select option {\n        background: var(--uc-pane-bg, var(--card-background-color));\n        color: var(--primary-text-color);\n        padding: 8px 12px;\n      }\n      \n      /* Legacy styles - kept for backwards compatibility */\n      .vacuum-fan-speed {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        padding: 12px;\n        background: var(--secondary-background-color);\n        border-radius: var(--uc-r-12, 12px);\n      }\n      .fan-speed-label {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 14px;\n        font-weight: 500;\n        color: var(--secondary-text-color);\n      }\n      .fan-speed-label ha-icon {\n        font-size: 18px;\n      }\n      .fan-speed-options {\n        display: flex;\n        gap: 8px;\n        flex-wrap: wrap;\n      }\n      .fan-speed-btn {\n        padding: 6px 12px;\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-16, 16px);\n        font-size: 12px;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        color: var(--primary-text-color);\n      }\n      .fan-speed-btn:hover {\n        border-color: var(--primary-color);\n      }\n      .fan-speed-btn.active {\n        background: var(--primary-color);\n        color: var(--text-primary-color, white);\n        border-color: var(--primary-color);\n      }\n      \n      .vacuum-map-container {\n        position: relative;\n        margin-top: 16px;\n        overflow: hidden;\n        background: var(--secondary-background-color);\n      }\n      .vacuum-map-container.inline {\n        margin-top: 0;\n      }\n      .vacuum-map-image {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n      }\n      .vacuum-map-empty {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        color: var(--secondary-text-color);\n      }\n      .vacuum-map-empty ha-icon {\n        font-size: 48px;\n        opacity: 0.5;\n      }\n      .map-close-btn {\n        position: absolute;\n        top: 8px;\n        right: 8px;\n        background: rgba(0, 0, 0, 0.5);\n        border: none;\n        border-radius: 50%;\n        width: 32px;\n        height: 32px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        color: white;\n        transition: background 0.2s ease;\n      }\n      .map-close-btn:hover {\n        background: rgba(0, 0, 0, 0.7);\n      }\n      \n      /* Pagination Dots for Swipe Mode */\n      .vacuum-pagination-dots {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 8px;\n        margin-top: 2px;\n        padding: 4px 0 0 0;\n      }\n      .vacuum-dot {\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: var(--divider-color, rgba(255, 255, 255, 0.3));\n        cursor: pointer;\n        transition: all 0.3s ease;\n      }\n      .vacuum-dot:hover {\n        background: var(--secondary-text-color);\n        transform: scale(1.2);\n      }\n      .vacuum-dot:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n      .vacuum-dot.active {\n        background: var(--primary-color);\n        width: 24px;\n        border-radius: var(--uc-r-4, 4px);\n      }\n      \n      /* SVG Brush Animations */\n      @keyframes brush-spin {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n      @keyframes brush-spin-reverse {\n        from { transform: rotate(360deg); }\n        to { transform: rotate(0deg); }\n      }\n      @keyframes roller-move {\n        0% { transform: translateX(0); }\n        100% { transform: translateX(7px); }\n      }\n      @keyframes sensor-blink {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.3; }\n      }\n      @keyframes status-led-pulse {\n        0%, 100% { opacity: 1; filter: drop-shadow(0 0 2px currentColor); }\n        50% { opacity: 0.6; filter: drop-shadow(0 0 6px currentColor); }\n      }\n      \n      /* SVG Animation Classes */\n      .vacuum-side-brush-left {\n        transform-origin: 30px 85px;\n      }\n      .vacuum-side-brush-right {\n        transform-origin: 70px 85px;\n      }\n      \n      /* Ensure bristle lines are always visible */\n      .vacuum-side-brush-left line,\n      .vacuum-side-brush-right line {\n        vector-effect: non-scaling-stroke;\n      }\n      .vacuum-brush-spin {\n        animation: brush-spin 1.2s linear infinite;\n      }\n      .vacuum-brush-spin-reverse {\n        animation: brush-spin-reverse 1.2s linear infinite;\n      }\n      \n      /* Dock LED animation - slow blink when docked/charging */\n      .vacuum-dock-led {\n        animation: dock-led-blink 2s ease-in-out infinite;\n      }\n      @keyframes dock-led-blink {\n        0%, 100% { opacity: 1; filter: drop-shadow(0 0 6px currentColor); }\n        50% { opacity: 0.3; filter: none; }\n      }\n      \n      /* Dock arc charging pulse */\n      .vacuum-dock-arc-pulse {\n        animation: dock-arc-pulse 2s ease-in-out infinite;\n      }\n      @keyframes dock-arc-pulse {\n        0%, 100% { \n          /* Low point: no glow */\n          filter: none;\n        }\n        50% { \n          /* High point: use the previous "low" glow size */\n          filter: drop-shadow(0 0 1px currentColor) drop-shadow(0 0 4px currentColor);\n        }\n      }\n      \n      /* Charging LED on robot when docked */\n      .vacuum-charging-led {\n        animation: charging-led-pulse 3s ease-in-out infinite;\n      }\n      @keyframes charging-led-pulse {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.4; }\n      }\n      \n      /* Prevent clipping on brushes */\n      .vacuum-svg-container {\n        overflow: visible;\n      }\n      .vacuum-roller-animate line {\n        animation: roller-move 0.3s linear infinite;\n      }\n      .vacuum-sensor-blink {\n        animation: sensor-blink 1s ease-in-out infinite;\n      }\n      .vacuum-status-led {\n        animation: status-led-pulse 1.5s ease-in-out infinite;\n      }\n      \n      /* Container Animations */\n      @keyframes vacuum-spin {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n      @keyframes vacuum-spin-slow {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n      @keyframes vacuum-spin-fast {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n      @keyframes vacuum-pulse {\n        0%, 100% { transform: scale(1); opacity: 1; }\n        50% { transform: scale(1.05); opacity: 0.8; }\n      }\n      @keyframes vacuum-rotate {\n        0% { transform: rotate(-15deg); }\n        50% { transform: rotate(15deg); }\n        100% { transform: rotate(-15deg); }\n      }\n      @keyframes vacuum-bounce {\n        0%, 100% { transform: translateY(0); }\n        50% { transform: translateY(-10px); }\n      }\n      @keyframes vacuum-slide {\n        0%, 100% { transform: translateX(0); }\n        50% { transform: translateX(-5px); }\n      }\n      @keyframes vacuum-blink {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.3; }\n      }\n      @keyframes vacuum-glow {\n        0%, 100% { filter: drop-shadow(0 0 4px var(--primary-color)); }\n        50% { filter: drop-shadow(0 0 12px var(--primary-color)); }\n      }\n      @keyframes vacuum-breathe {\n        0%, 100% { transform: scale(1); }\n        50% { transform: scale(1.02); }\n      }\n      \n      /* Vacuum cleaning movement - random left-right wobbling */\n      @keyframes vacuum-cleaning-move {\n        0% { transform: rotate(0deg); }\n        8% { transform: rotate(-15deg); }\n        16% { transform: rotate(-12deg); }\n        24% { transform: rotate(18deg); }\n        32% { transform: rotate(14deg); }\n        40% { transform: rotate(-20deg); }\n        48% { transform: rotate(-16deg); }\n        56% { transform: rotate(22deg); }\n        64% { transform: rotate(16deg); }\n        72% { transform: rotate(-18deg); }\n        80% { transform: rotate(-10deg); }\n        88% { transform: rotate(12deg); }\n        96% { transform: rotate(5deg); }\n        100% { transform: rotate(0deg); }\n      }\n      .vacuum-svg-active {\n        animation: vacuum-cleaning-move 7s ease-in-out infinite;\n      }\n      \n      .vacuum-anim-spin { animation: vacuum-spin 2s linear infinite; }\n      .vacuum-anim-spin-slow { animation: vacuum-spin-slow 4s linear infinite; }\n      .vacuum-anim-spin-fast { animation: vacuum-spin-fast 1s linear infinite; }\n      .vacuum-anim-pulse { animation: vacuum-pulse 1.5s ease-in-out infinite; }\n      .vacuum-anim-pulse-slow { animation: vacuum-pulse 3s ease-in-out infinite; }\n      .vacuum-anim-pulse-fast { animation: vacuum-pulse 0.8s ease-in-out infinite; }\n      .vacuum-anim-rotate { animation: vacuum-rotate 2s ease-in-out infinite; }\n      .vacuum-anim-rotate-slow { animation: vacuum-rotate 4s ease-in-out infinite; }\n      .vacuum-anim-rotate-fast { animation: vacuum-rotate 1s ease-in-out infinite; }\n      .vacuum-anim-bounce { animation: vacuum-bounce 1s ease-in-out infinite; }\n      .vacuum-anim-bounce-slow { animation: vacuum-bounce 2s ease-in-out infinite; }\n      .vacuum-anim-bounce-fast { animation: vacuum-bounce 0.5s ease-in-out infinite; }\n      .vacuum-anim-slide { animation: vacuum-slide 1.5s ease-in-out infinite; }\n      .vacuum-anim-slide-slow { animation: vacuum-slide 3s ease-in-out infinite; }\n      .vacuum-anim-slide-fast { animation: vacuum-slide 0.8s ease-in-out infinite; }\n      .vacuum-anim-blink { animation: vacuum-blink 1s ease-in-out infinite; }\n      .vacuum-anim-blink-slow { animation: vacuum-blink 2s ease-in-out infinite; }\n      .vacuum-anim-blink-fast { animation: vacuum-blink 0.5s ease-in-out infinite; }\n      .vacuum-anim-glow { animation: vacuum-glow 2s ease-in-out infinite; }\n      .vacuum-anim-glow-slow { animation: vacuum-glow 4s ease-in-out infinite; }\n      .vacuum-anim-glow-fast { animation: vacuum-glow 1s ease-in-out infinite; }\n      .vacuum-anim-breathe { animation: vacuum-breathe 3s ease-in-out infinite; }\n      .vacuum-anim-breathe-slow { animation: vacuum-breathe 5s ease-in-out infinite; }\n      .vacuum-anim-breathe-fast { animation: vacuum-breathe 1.5s ease-in-out infinite; }\n      \n      /* Double column layout */\n      .vacuum-double-column-layout {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 16px;\n        width: 100%;\n      }\n      \n      .vacuum-double-column-layout .vacuum-column-left,\n      .vacuum-double-column-layout .vacuum-column-right {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        min-width: 0;\n      }\n      \n      /* Make certain sections span full width in double column */\n      .vacuum-double-column-layout .vacuum-icon-container,\n      .vacuum-double-column-layout .vacuum-header,\n      .vacuum-double-column-layout .vacuum-swipe-carousel {\n        /* These look better spanning the column */\n      }\n      \n      /* Responsive: stack columns on small screens */\n      @media (max-width: 400px) {\n        .vacuum-double-column-layout {\n          grid-template-columns: 1fr;\n        }\n      }\n      \n      /* Sections-based layout styles */\n      .vacuum-sections-layout {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 12px;\n        text-align: center;\n      }\n      \n      .vacuum-sections-layout .vacuum-icon-container {\n        margin: 0;\n      }\n      \n      .vacuum-sections-layout .vacuum-header {\n        width: 100%;\n      }\n      \n      .vacuum-sections-layout .vacuum-battery {\n        justify-content: center;\n        margin-top: 8px;\n      }\n      \n      .vacuum-sections-layout .vacuum-current-room {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        font-size: 14px;\n        color: var(--secondary-text-color);\n        margin-top: 4px;\n      }\n      \n      .vacuum-sections-layout .vacuum-current-room ha-icon {\n        --mdc-icon-size: 18px;\n      }\n      \n      .vacuum-sections-layout .vacuum-controls {\n        width: 100%;\n        justify-content: center;\n      }\n      \n      .vacuum-sections-layout .vacuum-error-banner {\n        width: 100%;\n        background: rgba(var(--rgb-error-color, 244, 67, 54), 0.1);\n        border: 1px solid var(--error-color, #f44336);\n        border-radius: var(--uc-r-8, 8px);\n        padding: 8px 12px;\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        color: var(--error-color, #f44336);\n      }\n      \n      .vacuum-sections-layout .vacuum-error-banner ha-icon {\n        --mdc-icon-size: 20px;\n      }\n      \n      .vacuum-sections-layout .vacuum-component-wear {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        text-align: left;\n      }\n      \n      .vacuum-sections-layout .wear-item {\n        background: rgba(var(--rgb-primary-color), 0.05);\n        padding: 8px 12px;\n        border-radius: var(--uc-r-8, 8px);\n      }\n      \n      .vacuum-sections-layout .wear-header {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        margin-bottom: 6px;\n      }\n      \n      .vacuum-sections-layout .wear-header ha-icon {\n        --mdc-icon-size: 18px;\n        color: var(--primary-color);\n      }\n      \n      .vacuum-sections-layout .wear-label {\n        flex: 1;\n        font-size: 13px;\n        color: var(--primary-text-color);\n      }\n      \n      .vacuum-sections-layout .wear-value {\n        font-size: 13px;\n        font-weight: 500;\n        color: var(--primary-text-color);\n      }\n      \n      .vacuum-sections-layout .wear-bar {\n        height: 6px;\n        background: var(--divider-color, rgba(0,0,0,0.1));\n        border-radius: var(--uc-r-3, 3px);\n        overflow: hidden;\n      }\n      \n      .vacuum-sections-layout .wear-progress {\n        height: 100%;\n        border-radius: var(--uc-r-3, 3px);\n        transition: width 0.3s ease;\n      }\n      \n      /* Compact sections layout */\n      .vacuum-compact.vacuum-sections-layout {\n        flex-direction: row;\n        flex-wrap: wrap;\n        gap: 12px;\n        text-align: left;\n      }\n      \n      .vacuum-compact.vacuum-sections-layout .vacuum-icon-container {\n        margin: 0;\n        flex: 0 0 auto;\n      }\n      \n      .vacuum-compact.vacuum-sections-layout .vacuum-header {\n        flex: 1;\n        min-width: 0;\n        align-items: flex-start;\n      }\n      \n      .vacuum-compact.vacuum-sections-layout .vacuum-controls {\n        width: auto;\n        flex: 0 0 auto;\n      }\n    '}}s.VACUUM_SECTIONS={vacuum_image:{id:"vacuum_image",icon:"mdi:robot-vacuum",label:"Vacuum Image",required:!1,defaultEnabled:!0,description:"Animated robot vacuum icon/image",hasEntityOverride:!1},title_status:{id:"title_status",icon:"mdi:format-title",label:"Title & Status",required:!1,defaultEnabled:!0,description:"Vacuum name and current status",hasEntityOverride:!1},battery:{id:"battery",icon:"mdi:battery",label:"Battery Level",required:!1,defaultEnabled:!1,description:"Battery percentage with icon",hasEntityOverride:!0},current_room:{id:"current_room",icon:"mdi:home-floor-1",label:"Current Room",required:!1,defaultEnabled:!1,description:"Room currently being cleaned",hasEntityOverride:!0},fan_speed:{id:"fan_speed",icon:"mdi:fan",label:"Speed",required:!1,defaultEnabled:!0,description:"Fan speed control dropdown",hasEntityOverride:!1},current_stats:{id:"current_stats",icon:"mdi:chart-line",label:"Current Session Stats",required:!1,defaultEnabled:!1,description:"Current session time and area",hasEntityOverride:!0},last_clean:{id:"last_clean",icon:"mdi:history",label:"Last Cleaning",required:!1,defaultEnabled:!1,description:"Last cleaning start/end times",hasEntityOverride:!0},total_stats:{id:"total_stats",icon:"mdi:chart-bar",label:"Lifetime Statistics",required:!1,defaultEnabled:!1,description:"Total area, time, and clean count",hasEntityOverride:!0},component_life:{id:"component_life",icon:"mdi:cog-refresh",label:"Component Life",required:!1,defaultEnabled:!1,description:"Filter, brush, and sensor wear",hasEntityOverride:!0},errors:{id:"errors",icon:"mdi:alert-circle",label:"Errors",required:!1,defaultEnabled:!1,description:"Vacuum and dock error display",hasEntityOverride:!0},dnd:{id:"dnd",icon:"mdi:bell-off",label:"Do Not Disturb",required:!1,defaultEnabled:!1,description:"DND mode status and toggle",hasEntityOverride:!0},volume:{id:"volume",icon:"mdi:volume-high",label:"Volume Control",required:!1,defaultEnabled:!1,description:"Speaker volume slider",hasEntityOverride:!0},quick_controls:{id:"quick_controls",icon:"mdi:play-pause",label:"Quick Controls",required:!1,defaultEnabled:!0,description:"Start, pause, stop, dock buttons",hasEntityOverride:!1},map:{id:"map",icon:"mdi:map",label:"Map Display",required:!1,defaultEnabled:!1,description:"Floor map with vacuum position",hasEntityOverride:!0}},s.DEFAULT_SECTION_ORDER=["vacuum_image","title_status","fan_speed","quick_controls"]}};