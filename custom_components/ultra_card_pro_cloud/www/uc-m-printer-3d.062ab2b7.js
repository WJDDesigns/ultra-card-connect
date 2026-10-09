export const __webpack_esm_ids__=[1961];export const __webpack_esm_modules__={6961(e,t,i){i.d(t,{UltraPrinter3dModule:()=>b});var r=i(2618),n=i(7475),a=i(6478),s=i(6658),o=i(4726),l=i(6603),_=i(6278),d=i(3883);const m={octoprint:["octoprint"],moonraker:["moonraker"],prusalink:["prusalink"]},c={status_entity:[/_current_state$/,/_print_status$/,/_printer_state$/,/_state$/,/current_print_state/],progress_entity:[/_progress$/,/_print_progress$/,/job_percentage/,/_completion$/],nozzle_temp_entity:[/_tool_0_temperature$/,/_extruder_temperature$/,/_nozzle_temperature$/,/temperature_extruder/,/_tool0_actual$/],nozzle_target_entity:[/_tool_0_target$/,/_extruder_target$/,/_nozzle_target/,/_tool0_target$/],bed_temp_entity:[/_bed_temperature$/,/_heater_bed_temperature$/,/temperature_bed/,/_bed_actual$/],bed_target_entity:[/_bed_target$/,/_heater_bed_target$/,/_bed_target_temperature$/],chamber_temp_entity:[/_chamber_temperature$/,/_chamber_temp$/],remaining_time_entity:[/_print_time_left$/,/_estimated_time_left$/,/_remaining_time$/,/_eta$/,/_time_left$/],end_time_entity:[/_end_time$/,/_finish_time$/,/_estimated_end_time$/],current_layer_entity:[/_current_layer$/,/_layer$/],total_layers_entity:[/_total_layer/,/_layer_count$/],file_name_entity:[/_filename$/,/_file_name$/,/_job_file$/,/_print_file$/,/_gcode_name$/],camera_entity:[/^camera\./],thumbnail_entity:[/^image\./,/_thumbnail$/,/_preview$/],pause_entity:[/_pause$/,/pause_print/],resume_entity:[/_resume$/,/resume_print/],stop_entity:[/_cancel$/,/_stop$/,/cancel_print/,/stop_print/],light_entity:[/^light\./,/_light$/],fans:[/^fan\./,/_fan$/]};function p(e){return(e.name_by_user||e.name||e.model||"Printer").trim()}function u(e){for(const[t,i]of Object.entries(m))if((e.identifiers||[]).some(e=>i.includes(null==e?void 0:e[0])))return t;const t=(e.manufacturer||"").toLowerCase();return t.includes("octoprint")?"octoprint":t.includes("prusa")?"prusalink":t.includes("klipper")||t.includes("moonraker")?"moonraker":null}function y(e,t,i){const r=`${e} ${t||""}`.toLowerCase();return i.some(i=>i.test(e)||t&&i.test(t)||i.test(r))}function g(e,t){if(!t)return null;const i=e.states[t];return i&&"unavailable"!==i.state&&"unknown"!==i.state?i.state:null}function h(e,t){return(0,s.$J)(g(e,t))}function v(e,t){return{onPause:()=>(0,d.p)(e,t.controls.pauseEntityId),onResume:()=>(0,d.p)(e,t.controls.resumeEntityId),onStop:()=>(0,d.p)(e,t.controls.stopEntityId),onLight:()=>(0,d.p)(e,t.controls.lightEntityId),onFan:(t,i)=>(0,d.p)(e,t.entityId,{percentage:i})}}class b extends n.m{constructor(){super(...arguments),this.metadata={type:"printer_3d",title:"3D Printer",description:"Generic 3D printer card with temps, progress, camera, and controls for any integration",author:"WJD Designs",version:"1.0.0",icon:"mdi:printer-3d",category:"interactive",tags:["3d printer","octoprint","moonraker","klipper","prusa","print","filament","interactive"]}}createDefault(e,t){return{id:e||this.generateId("printer_3d"),type:"printer_3d",layout:"standard",style:"dark",illustration:"enclosed",show_title:!0,title:"3D Printer",source:"manual",fans:[],extra_stats:[],show_controls:!0,show_temps:!0,show_fans:!0,show_camera:!0,show_job:!0,show_thumbnail:!0,camera_mode:"snapshot",camera_refresh_seconds:10,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getRuntimeEntityIds(e){const t=e;return[t.status_entity,t.progress_entity,t.nozzle_temp_entity,t.nozzle_target_entity,t.bed_temp_entity,t.bed_target_entity,t.chamber_temp_entity,t.remaining_time_entity,t.end_time_entity,t.current_layer_entity,t.total_layers_entity,t.file_name_entity,t.camera_entity,t.thumbnail_entity,t.pause_entity,t.resume_entity,t.stop_entity,t.light_entity,...(t.fans||[]).map(e=>e.entity),...(t.extra_stats||[]).map(e=>e.entity)].filter(Boolean)}_picker(e,t,i,r,n,a,s){return this.renderEntityPickerWithVariables(e,t,i,r||"",e=>{a({[i]:e||void 0}),this.triggerPreviewUpdate()},s,n)}renderGeneralTab(e,t,i,n){var s,o;const l=e,_=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",d=l.source||"manual",m=function(e,t){if(!e)return[];const i=e,r=i.devices||{},n=[];for(const[e,i]of Object.entries(r)){if(!i||i.disabled_by)continue;const r=u(i);r&&(t&&"manual"!==t&&r!==t||n.push({deviceId:e,name:p(i),source:r,model:i.model||void 0}))}if(!n.length&&i.entities){const e=new Map;for(const t of Object.values(i.entities)){if(!(null==t?void 0:t.device_id)||t.disabled_by)continue;const i=t.platform||"";let r=null;"octoprint"===i?r="octoprint":"moonraker"===i?r="moonraker":"prusalink"===i&&(r="prusalink"),r&&e.set(t.device_id,r)}for(const[i,a]of e){if(t&&"manual"!==t&&a!==t)continue;const e=r[i];n.push({deviceId:i,name:e?p(e):i,source:a,model:(null==e?void 0:e.model)||void 0})}}return n.sort((e,t)=>e.name.localeCompare(t.name))}(t,"manual"===d?void 0:d);return r.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        <div
          style="padding:10px 12px;border-radius:8px;background:rgba(var(--rgb-primary-color),0.08);margin-bottom:16px;font-size:0.85rem;"
        >
          ${(0,a.kg)("editor.printer_3d.bambu_hint",_,"Have a Bambu Lab printer? Use the Pro Bambu Lab module for AMS, farm view, and auto-discovery.")}
        </div>

        ${this.renderSegmentedField((0,a.kg)("editor.printer_3d.layout",_,"Layout"),(0,a.kg)("editor.printer_3d.layout_desc",_,"How the card is arranged."),l.layout||"standard",[{value:"hero",label:(0,a.kg)("editor.printer_3d.layout_hero",_,"Hero"),icon:"mdi:printer-3d"},{value:"standard",label:(0,a.kg)("editor.printer_3d.layout_standard",_,"Standard"),icon:"mdi:view-dashboard"},{value:"compact",label:(0,a.kg)("editor.printer_3d.layout_compact",_,"Compact"),icon:"mdi:view-compact"},{value:"camera",label:(0,a.kg)("editor.printer_3d.layout_camera",_,"Camera"),icon:"mdi:cctv"}],e=>{n({layout:e}),this.triggerPreviewUpdate()})}

        ${this.renderSegmentedField((0,a.kg)("editor.printer_3d.style",_,"Style"),(0,a.kg)("editor.printer_3d.style_desc",_,"Visual theme for surfaces and borders."),l.style||"dark",[{value:"theme",label:(0,a.kg)("editor.printer_3d.style_theme",_,"Theme")},{value:"dark",label:(0,a.kg)("editor.printer_3d.style_dark",_,"Dark")},{value:"light",label:(0,a.kg)("editor.printer_3d.style_light",_,"Light")},{value:"glass",label:(0,a.kg)("editor.printer_3d.style_glass",_,"Glass")}],e=>{n({style:e}),this.triggerPreviewUpdate()})}

        ${this.renderSegmentedField((0,a.kg)("editor.printer_3d.illustration",_,"Illustration"),(0,a.kg)("editor.printer_3d.illustration_desc",_,"Procedural printer drawing, or your own image."),l.illustration||"enclosed",[{value:"enclosed",label:(0,a.kg)("editor.printer_3d.illustration_enclosed",_,"Enclosed")},{value:"bedslinger",label:(0,a.kg)("editor.printer_3d.illustration_bedslinger",_,"Bedslinger")},{value:"none",label:(0,a.kg)("editor.printer_3d.illustration_none",_,"None")},{value:"image",label:(0,a.kg)("editor.printer_3d.illustration_image",_,"Custom image")}],e=>{n({illustration:e}),this.triggerPreviewUpdate()})}

        ${"image"===l.illustration?this.renderFileField((0,a.kg)("editor.printer_3d.custom_image",_,"Custom image"),(0,a.kg)("editor.printer_3d.custom_image_desc",_,"Upload a printer photo when illustration is set to Custom image."),t,l.custom_image||"",e=>{n({custom_image:e||void 0}),this.triggerPreviewUpdate()},"image/*"):r.s6}

        ${this.renderSettingsSection((0,a.kg)("editor.printer_3d.title",_,"Title"),(0,a.kg)("editor.printer_3d.title_desc",_,"Optional heading text."),[{title:(0,a.kg)("editor.printer_3d.show_title",_,"Show title"),description:"",hass:t,data:{show_title:!1!==l.show_title},schema:[this.booleanField("show_title")],onChange:e=>{var t;n({show_title:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_title)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.printer_3d.title",_,"Title"),description:"",hass:t,data:{title:l.title||""},schema:[this.textField("title")],onChange:e=>{var t;n({title:(null===(t=e.detail.value)||void 0===t?void 0:t.title)||""}),this.triggerPreviewUpdate()}}])}

        ${this.renderSegmentedField((0,a.kg)("editor.printer_3d.source",_,"Source"),(0,a.kg)("editor.printer_3d.source_desc",_,"Manual mapping, or auto-fill from a known integration."),d,[{value:"manual",label:(0,a.kg)("editor.printer_3d.source_manual",_,"Manual")},{value:"octoprint",label:(0,a.kg)("editor.printer_3d.source_octoprint",_,"OctoPrint")},{value:"moonraker",label:(0,a.kg)("editor.printer_3d.source_moonraker",_,"Moonraker")},{value:"prusalink",label:(0,a.kg)("editor.printer_3d.source_prusalink",_,"PrusaLink")}],e=>{n({source:e,source_device_id:void 0}),this.triggerPreviewUpdate()})}

        ${"manual"!==d?r.qy`
              ${this.renderSegmentedField((0,a.kg)("editor.printer_3d.source_device",_,"Device"),(0,a.kg)("editor.printer_3d.source_device_desc",_,"Pick a discovered printer device, then auto-fill."),l.source_device_id||"",[{value:"",label:"—"},...m.map(e=>({value:e.deviceId,label:e.name}))],e=>{n({source_device_id:e||void 0}),this.triggerPreviewUpdate()})}
              <div style="margin:8px 0 24px;">
                <button
                  type="button"
                  style="border:1px solid var(--primary-color);background:color-mix(in srgb, var(--primary-color) 15%, transparent);color:var(--primary-text-color);border-radius:8px;padding:8px 14px;cursor:pointer;font-weight:600;"
                  ?disabled=${!l.source_device_id}
                  @click=${()=>{if(!l.source_device_id)return;const e=function(e,t){const i=e.entities||{},r=[];for(const[e,n]of Object.entries(i))n&&!n.disabled_by&&n.device_id===t&&r.push(Object.assign(Object.assign({},n),{entity_id:e}));const n={},a=[],s=(e,t)=>{if("fans"===e)return;if(n[e])return;const i=c[e];if(i)for(const a of r){const r=a.entity_id;if((!t||r.startsWith(`${t}.`))&&y(r,a.unique_id,i))return void(n[e]=r)}};if(s("status_entity","sensor"),s("progress_entity","sensor"),s("nozzle_temp_entity","sensor"),s("nozzle_target_entity"),s("bed_temp_entity","sensor"),s("bed_target_entity"),s("chamber_temp_entity","sensor"),s("remaining_time_entity","sensor"),s("end_time_entity","sensor"),s("current_layer_entity","sensor"),s("total_layers_entity","sensor"),s("file_name_entity","sensor"),s("camera_entity","camera"),s("thumbnail_entity","image"),s("pause_entity"),s("resume_entity"),s("stop_entity"),s("light_entity","light"),!n.status_entity)for(const e of r){const t=e.entity_id;if(/status|state|print/.test(t)&&t.startsWith("sensor.")){n.status_entity=t;break}}for(const e of r){const t=e.entity_id;if(t.startsWith("fan.")||y(t,e.unique_id,c.fans)){if(a.length>=3)break;const i=e.original_name||t.split(".").pop().replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase());a.push({entity:t,label:i})}}return a.length&&(n.fans=a),n}(t,l.source_device_id);var i;n({status_entity:(i=e).status_entity,progress_entity:i.progress_entity,nozzle_temp_entity:i.nozzle_temp_entity,nozzle_target_entity:i.nozzle_target_entity,bed_temp_entity:i.bed_temp_entity,bed_target_entity:i.bed_target_entity,chamber_temp_entity:i.chamber_temp_entity,remaining_time_entity:i.remaining_time_entity,end_time_entity:i.end_time_entity,current_layer_entity:i.current_layer_entity,total_layers_entity:i.total_layers_entity,file_name_entity:i.file_name_entity,camera_entity:i.camera_entity,thumbnail_entity:i.thumbnail_entity,pause_entity:i.pause_entity,resume_entity:i.resume_entity,stop_entity:i.stop_entity,light_entity:i.light_entity,fans:i.fans}),this.triggerPreviewUpdate()}}
                >
                  ${(0,a.kg)("editor.printer_3d.autofill",_,"Auto-fill entities")}
                </button>
                <div style="font-size:0.8rem;opacity:0.7;margin-top:6px;">
                  ${(0,a.kg)("editor.printer_3d.autofill_desc",_,"Map common entities from the selected device. You can edit them afterward.")}
                </div>
              </div>
            `:r.s6}

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
          >
            ${(0,a.kg)("editor.printer_3d.mapping",_,"Entity mapping")}
          </div>
          <div style="font-size:0.85rem;opacity:0.75;margin-bottom:12px;">
            ${(0,a.kg)("editor.printer_3d.mapping_desc",_,"Bind Home Assistant entities to printer fields.")}
          </div>
          ${this._picker(t,i,"status_entity",l.status_entity,(0,a.kg)("editor.printer_3d.status_entity",_,"Status"),n,["sensor","binary_sensor"])}
          ${this._picker(t,i,"progress_entity",l.progress_entity,(0,a.kg)("editor.printer_3d.progress_entity",_,"Progress"),n,["sensor"])}
          ${this._picker(t,i,"nozzle_temp_entity",l.nozzle_temp_entity,(0,a.kg)("editor.printer_3d.nozzle_temp_entity",_,"Nozzle temperature"),n,["sensor"])}
          ${this._picker(t,i,"nozzle_target_entity",l.nozzle_target_entity,(0,a.kg)("editor.printer_3d.nozzle_target_entity",_,"Nozzle target"),n,["sensor","number"])}
          ${this._picker(t,i,"bed_temp_entity",l.bed_temp_entity,(0,a.kg)("editor.printer_3d.bed_temp_entity",_,"Bed temperature"),n,["sensor"])}
          ${this._picker(t,i,"bed_target_entity",l.bed_target_entity,(0,a.kg)("editor.printer_3d.bed_target_entity",_,"Bed target"),n,["sensor","number"])}
          ${this._picker(t,i,"chamber_temp_entity",l.chamber_temp_entity,(0,a.kg)("editor.printer_3d.chamber_temp_entity",_,"Chamber temperature"),n,["sensor"])}
          ${this._picker(t,i,"remaining_time_entity",l.remaining_time_entity,(0,a.kg)("editor.printer_3d.remaining_time_entity",_,"Remaining time"),n,["sensor"])}
          ${this._picker(t,i,"end_time_entity",l.end_time_entity,(0,a.kg)("editor.printer_3d.end_time_entity",_,"End time"),n,["sensor"])}
          ${this._picker(t,i,"current_layer_entity",l.current_layer_entity,(0,a.kg)("editor.printer_3d.current_layer_entity",_,"Current layer"),n,["sensor"])}
          ${this._picker(t,i,"total_layers_entity",l.total_layers_entity,(0,a.kg)("editor.printer_3d.total_layers_entity",_,"Total layers"),n,["sensor"])}
          ${this._picker(t,i,"file_name_entity",l.file_name_entity,(0,a.kg)("editor.printer_3d.file_name_entity",_,"File / task name"),n,["sensor"])}
          ${this._picker(t,i,"camera_entity",l.camera_entity,(0,a.kg)("editor.printer_3d.camera_entity",_,"Camera"),n,["camera","image"])}
          ${this._picker(t,i,"thumbnail_entity",l.thumbnail_entity,(0,a.kg)("editor.printer_3d.thumbnail_entity",_,"Thumbnail image"),n,["image","camera"])}
          ${this._picker(t,i,"pause_entity",l.pause_entity,(0,a.kg)("editor.printer_3d.pause_entity",_,"Pause"),n,["button","script","switch"])}
          ${this._picker(t,i,"resume_entity",l.resume_entity,(0,a.kg)("editor.printer_3d.resume_entity",_,"Resume"),n,["button","script","switch"])}
          ${this._picker(t,i,"stop_entity",l.stop_entity,(0,a.kg)("editor.printer_3d.stop_entity",_,"Stop"),n,["button","script","switch"])}
          ${this._picker(t,i,"light_entity",l.light_entity,(0,a.kg)("editor.printer_3d.light_entity",_,"Light"),n,["light","switch"])}
        </div>

        ${this.renderChipListField((0,a.kg)("editor.printer_3d.fans",_,"Fans"),(0,a.kg)("editor.printer_3d.fans_desc",_,"Up to three fan entities with optional labels."),t,(l.fans||[]).map(e=>e.entity),e=>{const t=e.slice(0,3).map((e,t)=>{var i,r;return{entity:e,label:null===(r=null===(i=l.fans)||void 0===i?void 0:i[t])||void 0===r?void 0:r.label}});n({fans:t}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:["fan","sensor"],variant:"primary"})}

        ${this.renderChipListField((0,a.kg)("editor.printer_3d.extra_stats",_,"Extra stats"),(0,a.kg)("editor.printer_3d.extra_stats_desc",_,"Additional sensors shown in the details list."),t,(l.extra_stats||[]).map(e=>e.entity),e=>{const t=e.map((e,t)=>{var i,r,n,a;return{entity:e,label:null===(r=null===(i=l.extra_stats)||void 0===i?void 0:i[t])||void 0===r?void 0:r.label,icon:null===(a=null===(n=l.extra_stats)||void 0===n?void 0:n[t])||void 0===a?void 0:a.icon}});n({extra_stats:t}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:["sensor","binary_sensor"],variant:"primary"})}

        ${this.renderSettingsSection((0,a.kg)("editor.printer_3d.sections",_,"Sections"),"",[{title:(0,a.kg)("editor.printer_3d.show_controls",_,"Controls"),description:"",hass:t,data:{show_controls:!1!==l.show_controls},schema:[this.booleanField("show_controls")],onChange:e=>{var t;n({show_controls:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_controls)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.printer_3d.show_temps",_,"Temperatures"),description:"",hass:t,data:{show_temps:!1!==l.show_temps},schema:[this.booleanField("show_temps")],onChange:e=>{var t;n({show_temps:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_temps)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.printer_3d.show_fans",_,"Fans"),description:"",hass:t,data:{show_fans:!1!==l.show_fans},schema:[this.booleanField("show_fans")],onChange:e=>{var t;n({show_fans:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_fans)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.printer_3d.show_camera",_,"Camera"),description:"",hass:t,data:{show_camera:!1!==l.show_camera},schema:[this.booleanField("show_camera")],onChange:e=>{var t;n({show_camera:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_camera)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.printer_3d.show_job",_,"Print job"),description:(0,a.kg)("editor.printer_3d.show_job_desc",_,"File name, layer, and time remaining."),hass:t,data:{show_job:!1!==l.show_job},schema:[this.booleanField("show_job")],onChange:e=>{var t;n({show_job:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_job)}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.printer_3d.show_thumbnail",_,"Cover thumbnail"),description:(0,a.kg)("editor.printer_3d.show_thumbnail_desc",_,"Cover image inside the print job block."),hass:t,data:{show_thumbnail:!1!==l.show_thumbnail},schema:[this.booleanField("show_thumbnail")],onChange:e=>{var t;n({show_thumbnail:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_thumbnail)}),this.triggerPreviewUpdate()}}])}

        ${this.renderSegmentedField((0,a.kg)("editor.printer_3d.camera_mode",_,"Camera mode"),(0,a.kg)("editor.printer_3d.camera_mode_desc",_,"Snapshots poll a still image (low data). Live streams the camera like Home Assistant does."),l.camera_mode||"snapshot",[{value:"snapshot",label:(0,a.kg)("editor.printer_3d.camera_mode_snapshot",_,"Snapshots"),icon:"mdi:image-multiple-outline"},{value:"live",label:(0,a.kg)("editor.printer_3d.camera_mode_live",_,"Live"),icon:"mdi:video-outline"}],e=>{n({camera_mode:e}),this.triggerPreviewUpdate()},2)}

        ${"snapshot"===(l.camera_mode||"snapshot")?this.renderSliderField((0,a.kg)("editor.printer_3d.camera_refresh",_,"Camera refresh (s)"),"",null!==(o=l.camera_refresh_seconds)&&void 0!==o?o:10,10,1,60,1,e=>{n({camera_refresh_seconds:e}),this.triggerPreviewUpdate()},"s"):r.s6}

        ${this.renderColorField((0,a.kg)("editor.printer_3d.accent_color",_,"Accent"),"",t,l.accent_color||"","",e=>{n({accent_color:e||void 0}),this.triggerPreviewUpdate()})}
      </div>
    `}renderPreview(e,t,i){var n,a,o;const d=e,m=(null==t?void 0:t.states)?function(e,t){var i,r;const n=g(t,e.status_entity),a=null!=n,o=e.remaining_time_entity,l=o?String((null===(r=null===(i=t.states[o])||void 0===i?void 0:i.attributes)||void 0===r?void 0:r.unit_of_measurement)||""):"",_=(e.fans||[]).filter(e=>e.entity).map(e=>{var i,r;const n=t.states[e.entity],a=null!==(r=(0,s.$J)(null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.percentage))&&void 0!==r?r:"off"===(null==n?void 0:n.state)?0:"on"===(null==n?void 0:n.state)?100:(0,s.$J)(null==n?void 0:n.state);return{id:e.entity,label:e.label||e.entity.split(".").pop()||"Fan",percent:a,entityId:e.entity,controllable:e.entity.startsWith("fan.")}}),d=(e.extra_stats||[]).filter(e=>e.entity).map(e=>{var i;const r=t.states[e.entity],n=(null===(i=null==r?void 0:r.attributes)||void 0===i?void 0:i.unit_of_measurement)?` ${r.attributes.unit_of_measurement}`:"",a={label:e.label||e.entity.split(".").pop()||"Stat",value:r?`${r.state}${n}`:"—",entityId:e.entity};return e.icon&&(a.icon=e.icon),a}),m=[e.status_entity,e.progress_entity,e.nozzle_temp_entity,e.nozzle_target_entity,e.bed_temp_entity,e.bed_target_entity,e.chamber_temp_entity,e.remaining_time_entity,e.end_time_entity,e.current_layer_entity,e.total_layers_entity,e.file_name_entity,e.camera_entity,e.thumbnail_entity,e.pause_entity,e.resume_entity,e.stop_entity,e.light_entity,...(e.fans||[]).map(e=>e.entity),...(e.extra_stats||[]).map(e=>e.entity)].filter(Boolean),c=g(t,e.light_entity);return{id:e.id,name:e.title||"3D Printer",modelFamily:"bedslinger"===e.illustration?"bedslinger":"enclosed"===e.illustration?"enclosed_corexy":"generic",online:a,status:(0,s.SP)(n,a),statusRaw:n||void 0,progress:h(t,e.progress_entity),currentLayer:h(t,e.current_layer_entity),totalLayers:h(t,e.total_layers_entity),remainingMinutes:(0,s.nD)(g(t,o),l),endTime:g(t,e.end_time_entity)||void 0,taskName:g(t,e.file_name_entity)||void 0,fileName:g(t,e.file_name_entity)||void 0,nozzleTemp:h(t,e.nozzle_temp_entity),nozzleTarget:h(t,e.nozzle_target_entity),bedTemp:h(t,e.bed_temp_entity),bedTarget:h(t,e.bed_target_entity),chamberTemp:h(t,e.chamber_temp_entity),chamberTarget:null,fans:_,trays:[],externalSpools:[],hms:[],cameraEntityId:e.camera_entity,coverImageEntityId:e.thumbnail_entity,lightOn:"on"===c,controls:{pauseEntityId:e.pause_entity,resumeEntityId:e.resume_entity,stopEntityId:e.stop_entity,lightEntityId:e.light_entity},refs:{status:e.status_entity,progress:e.progress_entity,nozzleTemp:e.nozzle_temp_entity,bedTemp:e.bed_temp_entity,chamberTemp:e.chamber_temp_entity,remaining:e.remaining_time_entity,endTime:e.end_time_entity,taskName:e.file_name_entity,layer:e.current_layer_entity,camera:e.camera_entity,light:e.light_entity},entityIds:m,extraStats:d}}(d,t):(0,s.WX)(d.id,d.title||"3D Printer"),c=v(t,m),p=d.style||"dark",u=d.layout||"standard",y=[d.text_color?`color:${d.text_color}`:"",d.accent_color?`--primary-color:${d.accent_color}`:""].filter(Boolean).join(";"),b=!1!==d.show_temps?r.qy`<div class="uc-printer-temps">
            ${(0,l.fN)("Nozzle",m.nozzleTemp,m.nozzleTarget,{icon:"mdi:printer-3d-nozzle",accent:"#ff9800",entityId:m.refs.nozzleTemp})}
            ${(0,l.fN)("Bed",m.bedTemp,m.bedTarget,{icon:"mdi:heat-wave",accent:"#e91e63",entityId:m.refs.bedTemp})}
            ${null!=m.chamberTemp?(0,l.fN)("Chamber",m.chamberTemp,null,{icon:"mdi:thermometer",accent:"#2196f3",entityId:m.refs.chamberTemp}):r.s6}
          </div>`:r.s6,f=!1!==d.show_controls?(0,l.FC)(m,c,{showSpeed:!1}):r.s6,k=!1!==d.show_fans?(0,l.IW)(m.fans,c,{editable:!0}):r.s6,$=(null===(n=m.extraStats)||void 0===n?void 0:n.length)?(0,l.RG)(m.extraStats.map(e=>({label:e.label,value:e.value,entityId:e.entityId}))):r.s6,w=m.refs.nozzleTemp?e=>(0,s.Mx)(e,m.refs.nozzleTemp):void 0,z=!1!==d.show_job?(0,l.F3)(m,t,{showThumbnail:!1!==d.show_thumbnail}):r.s6;let x;return x="compact"===u?r.qy`
        <div class="uc-bambu-compact">
          <div class="compact-main">
            <div style="display:flex;justify-content:space-between;gap:8px;align-items:center;">
              <strong>${m.name}</strong>
              ${(0,l.k3)(m.status,m.statusRaw,m.refs.status)}
            </div>
            ${(0,l.hv)(m.progress,{compact:!0,entityId:m.refs.progress})}
          </div>
          <span
            class=${w?"is-clickable":""}
            style="font-size:0.8rem;white-space:nowrap;"
            @click=${w}
          >
            ${null!=m.nozzleTemp?`${Math.round(m.nozzleTemp)}°`:"—"} /
            ${null!=m.bedTemp?`${Math.round(m.bedTemp)}°`:"—"}
          </span>
        </div>
      `:"camera"===u?r.qy`
        ${!1!==d.show_camera?(0,l.k)(t,m.cameraEntityId,{refreshSeconds:null!==(a=d.camera_refresh_seconds)&&void 0!==a?a:10,mode:d.camera_mode,alt:m.name}):r.s6}
        <div class="uc-printer-header" style="margin-top:10px;">
          <div>
            <div class="title">${m.name}</div>
            ${(0,l.k3)(m.status,m.statusRaw,m.refs.status)}
          </div>
          ${(0,l.Sq)(m.progress,48,5,m.refs.progress)}
        </div>
        ${(0,l.hv)(m.progress,{entityId:m.refs.progress})}
        ${f}
      `:"hero"===u?r.qy`
        ${"none"!==d.illustration?(0,_.D0)(m,Object.assign(Object.assign({},d.accent_color?{accent:d.accent_color}:{}),{customImage:"image"===d.illustration?d.custom_image:void 0,showTemps:!1!==d.show_temps,animation:"full"})):r.s6}
        ${f}
        ${z}
        ${k}
        ${$}
      `:r.qy`
        <div class="uc-printer-header">
          <div>
            <div class="title">${m.name}</div>
            ${(0,l.k3)(m.status,m.statusRaw,m.refs.status)}
          </div>
          ${(0,l.Sq)(m.progress,56,5,m.refs.progress)}
        </div>
        ${b}
        ${null!=m.remainingMinutes||!1!==d.show_controls?r.qy`<div class="uc-printer-row">
              ${null!=m.remainingMinutes?(0,l.B5)("Time left",(0,s.gc)(m.remainingMinutes),{icon:"mdi:timer-outline",entityId:m.refs.remaining}):r.s6}
              ${f}
            </div>`:r.s6}
        ${k}
        ${(0,l.hv)(m.progress,{entityId:m.refs.progress})}
        ${z}
        ${!1!==d.show_camera&&m.cameraEntityId?(0,l.k)(t,m.cameraEntityId,{refreshSeconds:null!==(o=d.camera_refresh_seconds)&&void 0!==o?o:10,mode:d.camera_mode,alt:m.name}):r.s6}
        ${$}
      `,r.qy`
      <div
        class="uc-printer-root uc-printer-3d-root style-${p}"
        data-uc-role="pane"
        style=${y}
      >
        ${!1!==d.show_title&&d.title&&"compact"!==u?r.qy`<div class="uc-printer-header"><div class="title">${d.title}</div></div>`:r.s6}
        ${x}
      </div>
    `}getStyles(){return`\n      ${n.m.getSliderStyles()}\n      ${o.Y}\n      .uc-printer-3d-root { display: flex; flex-direction: column; gap: 12px; }\n      .uc-bambu-compact {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        flex-wrap: wrap;\n      }\n      .uc-bambu-compact .compact-main { flex: 1; min-width: 120px; }\n    `}}}};