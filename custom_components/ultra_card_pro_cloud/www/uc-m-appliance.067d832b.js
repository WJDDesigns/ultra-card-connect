export const __webpack_esm_ids__=[9278];export const __webpack_esm_modules__={737(e,t,r){r.d(t,{UltraDishwasherModule:()=>k,UltraDryerModule:()=>x,UltraFridgeModule:()=>$,UltraRangeModule:()=>S,UltraWasherModule:()=>b});var i=r(2618),n=r(6478),o=r(7475);const a=new Set(["run","running","wash","washing","dry","drying","active","rinse","rinsing","spin","spinning","busy","in_use","working","cleaning","heating","cooling","cooldown","steam","prewash","pre_wash","refreshing","program_running","on","preheat","preheating","cooking","baking","roasting","broiling","warming"]),s=new Set(["pause","paused","hold","program_interrupted","delayed_start","delay_wash"]),l=new Set(["finish","finished","done","complete","completed","end","ended","program_ended","wrinkle_prevent","anticrease"]),c=new Set(["stop","stopped","idle","ready","standby","none","off","inactive","not_running","waiting_to_start"]),p=new Set(["error","fault","failure","problem","failure_mode"]);function d(e){return e.replace(/([a-z\d])([A-Z])/g,"$1 $2").replace(/[_-]+/g," ").split(/\s+/).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}function u(e){const t=Math.max(1,Math.round((e.getTime()-Date.now())/6e4)),r=Math.floor(t/60),i=t%60;return r<=0?`${i}m`:i>0?`${r}h ${i}m`:`${r}h`}function h(e,t=1){const r=Number(e);return Number.isNaN(r)?e:Math.abs(r)>=100?String(Math.round(r)):String(Math.round(r*10**t)/10**t)}const g={washer:{icon:"mdi:washing-machine",fallbackName:"Washer"},dryer:{icon:"mdi:tumble-dryer",fallbackName:"Dryer"},dishwasher:{icon:"mdi:dishwasher",fallbackName:"Dishwasher"},fridge:{icon:"mdi:fridge-outline",fallbackName:"Refrigerator"},range:{icon:"mdi:stove",fallbackName:"Range"}};function _(e){const t=e.state.toLowerCase();if("on"===t||a.has(t))return!0;const r=Number(e.state);return!Number.isNaN(r)&&r>0}const m=104,v=[/machine_state/,/run_state/,/operating_state/,/job_state/,/program_phase/,/completion_time/,/remain(ing)?_time/,/(^|_)door/,/temperature/,/(^|_)power/,/(^|_)energy/,/filter_status/,/child_lock/,/remote_control/],y=[["washer","washing"],["dryer"],["dishwasher"],["fridge","refrigerator","freezer"],["oven","range","stove","cooktop"]];function w(e){const t=e.split("_");for(let e=0;e<y.length;e++)if(t.some(t=>y[e].includes(t)))return e;return-1}class f extends o.m{constructor(){super(...arguments),this.handlesOwnDesignStyles=!0,this._pendingSetpoints=new Map}createDefault(e,t){return{id:e||this.generateId(this.cardType),type:this.cardType,entity:"",name:"",power_switch_entity:"",machine_state_entity:"",job_state_entity:"",completion_time_entity:"",power_entity:"",energy_entity:"",child_lock_entity:"",remote_control_entity:"",door_entity:"",fridge_door_entity:"",freezer_door_entity:"",fridge_temp_entity:"",freezer_temp_entity:"",fridge_setpoint_entity:"",freezer_setpoint_entity:"",filter_status_entity:"",oven_mode_entity:"",oven_temp_entity:"",oven_setpoint_entity:"",second_cavity_state_entity:"",second_cavity_temp_entity:"",second_cavity_setpoint_entity:"",second_cavity_mode_entity:"",light_entity:"",stop_button_entity:"",layout:"standard",show_title:!0,show_status:!0,show_graphic:!0,show_completion_time:!0,show_controls:!0,show_power_button:!0,show_status_chips:!0,show_feature_switches:!0,show_settings:!0,show_metrics:!0,show_temperatures:!0,show_setpoint_controls:!0,show_cooktop:!0,enable_animations:!0,appliance_size:m,active_color:"",done_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){var t;const r=[],i=e;return e.id||r.push("Module ID is required"),e.type!==this.cardType&&r.push(`Module type must be ${this.cardType}`),(null===(t=i.entity)||void 0===t?void 0:t.trim())||r.push("Select an appliance entity"),{valid:0===r.length,errors:r}}getRef(e,t,r){var i;const n=this.resolveEntity(t,r)||t;if(!n||!(null===(i=null==e?void 0:e.states)||void 0===i?void 0:i[n]))return null;const o=e.states[n];return{id:n,state:String(o.state),attrs:o.attributes||{}}}deviceEntities(e,t){var r,i;const n=e,o=null===(i=null===(r=n.entities)||void 0===r?void 0:r[t])||void 0===i?void 0:i.device_id;if(!o||!n.entities)return null;const a=Object.keys(n.entities).filter(t=>{var r;return(null===(r=n.entities[t])||void 0===r?void 0:r.device_id)===o&&!!e.states[t]});return a.length?new Set(a):null}deviceName(e,t){var r,i,n;const o=e,a=null===(i=null===(r=o.entities)||void 0===r?void 0:r[t])||void 0===i?void 0:i.device_id,s=a?null===(n=o.devices)||void 0===n?void 0:n[a]:void 0;return(null==s?void 0:s.name_by_user)||(null==s?void 0:s.name)||void 0}devicePrefix(e,t){const r=t.split(".")[1]||"";if(!r)return"";const i=r.split("_"),n=w(r),o=Object.keys(e.states).map(e=>e.split(".")[1]||"");let a=r,s=-1;for(let e=i.length;e>=1;e--){const t=i.slice(0,e).join("_");let l=0;for(const e of o){if(e===r)continue;if(e!==t&&!e.startsWith(`${t}_`))continue;const i=w(e);-1!==i&&-1!==n&&i!==n||v.some(t=>t.test(e))&&l++}l>s&&(s=l,a=t)}return a}autoFind(e,t,r,i,n){if(!t&&!r)return;const o=(t?Array.from(t):Object.keys(e.states)).filter(e=>{const[n,o]=e.split(".");return!!i.includes(n)&&(!!t||o===r||(null==o?void 0:o.startsWith(`${r}_`)))}).sort();for(const e of n){const t=o.find(t=>e.test(t.split(".")[1]||""));if(t)return t}}link(e,t,r,i,n,o,a){if(null==r?void 0:r.trim())return this.getRef(e,r,t);const s=this.autoFind(e,i,n,o,a);return s?this.getRef(e,s,t):null}resolveLinks(e,t,r,i){const n=this.deviceEntities(t,i.id),o=this.devicePrefix(t,i.id),a=this.deviceName(t,i.id),s=(e,i,a)=>this.link(t,r,e,n,o,i,a),l=s(e.power_switch_entity,["switch"],[new RegExp(`^${o}(_\\d+)?$`),/(^|_)power(_switch)?(_\d+)?$/]),c=s(e.machine_state_entity,["sensor"],[/machine_state(_\d+)?$/,/run_state(_\d+)?$/,/operating_state(_\d+)?$/,new RegExp(`^${o}_status(_\\d+)?$`),new RegExp(`^${o}_state(_\\d+)?$`)]),p=s(e.job_state_entity,["sensor"],[/job_state(_\d+)?$/,/program_phase(_\d+)?$/,/(^|_)phase(_\d+)?$/,/current_course(_\d+)?$/]),d=s(e.completion_time_entity,["sensor"],[/completion_time(_\d+)?$/,/complete_time(_\d+)?$/,/(finish|end)_time(_\d+)?$/,/remain(ing)?_time(_\d+)?$/,/time_remaining(_\d+)?$/]),u=s(e.power_entity,["sensor"],[new RegExp(`^${o}_power(_\\d+)?$`),/(^|_)power(_\d+)?$/]),h=s(e.energy_entity,["sensor"],[new RegExp(`^${o}_energy(_\\d+)?$`),/(^|_)energy(_\d+)?$/]),g=s(e.child_lock_entity,["binary_sensor"],[/child_lock(_\d+)?$/]),_=s(e.remote_control_entity,["binary_sensor"],[/remote_control(_\d+)?$/]),m="fridge"!==this.cardType?s(e.door_entity,["binary_sensor"],[/(^|_)door(_state)?(_\d+)?$/]):null,v=s(void 0,["binary_sensor"],[/wrinkle_prevent_active(_\d+)?$/]),y=i.id.split(".")[0];let w=null;if("select"===y||"input_select"===y)w=i;else if("fridge"!==this.cardType){const e=this.autoFind(t,n,o,["select"],[new RegExp(`^${o}(_\\d+)?$`)]);w=e?this.getRef(t,e,r):null}const f=s(e.fridge_door_entity,["binary_sensor"],[/fridge_door(_\d+)?$/]),b=s(e.freezer_door_entity,["binary_sensor"],[/freezer_door(_\d+)?$/]),x=s(e.fridge_temp_entity,["sensor"],[/fridge_temperature(_\d+)?$/]),k=s(e.freezer_temp_entity,["sensor"],[/freezer_temperature(_\d+)?$/]),$=s(e.fridge_setpoint_entity,["number"],[/fridge_temperature(_\d+)?$/]),S=s(e.freezer_setpoint_entity,["number"],[/freezer_temperature(_\d+)?$/]),z=s(e.filter_status_entity,["binary_sensor"],[/filter_status(_\d+)?$/]),P=s(void 0,["button"],[/reset_water_filter(_\d+)?$/]),F="range"===this.cardType,C=F?s(e.oven_mode_entity,["sensor"],[/oven_mode(_\d+)?$/,/(^|_)mode(_\d+)?$/]):null,D=F?s(e.oven_temp_entity,["sensor"],[/temperature_measurement(_\d+)?$/,/oven_temperature(_\d+)?$/,/current_temperature(_\d+)?$/]):null,M=F?s(e.oven_setpoint_entity,["sensor","number"],[/oven_set_?point(_\d+)?$/,/set_?point(_\d+)?$/,/target_temperature(_\d+)?$/]):null,q=F?s(e.second_cavity_state_entity,["sensor"],[/second_cavity_machine_state(_\d+)?$/]):null,A=F?s(e.second_cavity_temp_entity,["sensor"],[/second_cavity_temperature(_\d+)?$/]):null,N=F?s(e.second_cavity_setpoint_entity,["sensor","number"],[/second_cavity_set_?point(_\d+)?$/]):null,L=F?s(e.second_cavity_mode_entity,["sensor"],[/second_cavity_(oven_)?mode(_\d+)?$/]):null,W=F?s(e.light_entity,["light"],[/(^|_)light(_\d+)?$/]):null,U=F?s(e.stop_button_entity,["button"],[/(^|_)stop(_\d+)?$/]):null,j=e=>(n?Array.from(n):Object.keys(t.states)).filter(t=>{const[r,i]=t.split(".");return!(!e.includes(r)||!n&&!(null==i?void 0:i.startsWith(`${o}_`))||new RegExp(`^${o}(_\\d+)?$`).test(i||""))}).sort();let R,T,O;return R=Array.isArray(e.feature_switch_entities)?e.feature_switch_entities.map(e=>this.getRef(t,e,r)).filter(e=>!!e):j(["switch"]).filter(e=>e!==(null==l?void 0:l.id)).map(e=>this.getRef(t,e,r)).filter(e=>!!e),T=Array.isArray(e.cooktop_entities)?e.cooktop_entities.map(e=>this.getRef(t,e,r)).filter(e=>!!e):F?j(["binary_sensor","switch","sensor"]).filter(e=>/(burner|cooktop|element|heater_zone)/.test(e.split(".")[1]||"")).map(e=>this.getRef(t,e,r)).filter(e=>!!e):[],O=Array.isArray(e.setting_select_entities)?e.setting_select_entities.map(e=>this.getRef(t,e,r)).filter(e=>!!e):"fridge"===this.cardType?[]:j(["select","input_select"]).filter(e=>e!==(null==w?void 0:w.id)).map(e=>this.getRef(t,e,r)).filter(e=>!!e),{pool:n,prefix:o,deviceName:a,powerSwitch:l,machineState:c,jobState:p,completion:d,power:u,energy:h,childLock:g,remoteControl:_,door:m,wrinklePrevent:v,controlSelect:w,fridgeDoor:f,freezerDoor:b,fridgeTemp:x,freezerTemp:k,fridgeSetpoint:$,freezerSetpoint:S,filterStatus:z,filterReset:P,ovenMode:C,ovenTemp:D,ovenSetpoint:M,cavityState:q,cavityTemp:A,cavitySetpoint:N,cavityMode:L,ovenLight:W,stopButton:U,cooktop:T,features:R,settingSelects:O}}featureLabel(e,t,r){const i=e.id.split(".")[1]||"";if(i.startsWith(`${t}_`))return d(i.slice(t.length+1));const n=String(e.attrs.friendly_name||"");if(r&&n.toLowerCase().startsWith(r.toLowerCase())){const e=n.slice(r.length).replace(/^[\s:–-]+/,"").trim();if(e)return e}return n||d(i)}getAutoLists(e,t,r){const i=this.getRef(t,e.entity,r);if(!i)return{features:[],settings:[],cooktop:[]};const n=this.resolveLinks(Object.assign(Object.assign({},e),{feature_switch_entities:void 0,setting_select_entities:void 0,cooktop_entities:void 0}),t,r,i);return{features:n.features.map(e=>e.id),settings:n.settingSelects.map(e=>e.id),cooktop:n.cooktop.map(e=>e.id)}}renderGeneralTab(e,t,r,o){var a,s;const l=e,c=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",p=this.cardType,d="fridge"===p,u="range"===p,h=this.getAutoLists(l,t,r),g=(e,n,a,s)=>i.qy`
      <div style="margin-bottom: 12px;">
        ${this.renderEntityPickerWithVariables(t,r,e,n||"",t=>{o({[e]:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)},a,s)}
      </div>
    `;return i.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,n.kg)("editor.appliance.entity_section",c,"Main entity"),d?(0,n.kg)("editor.appliance.entity_section_desc_fridge",c,"Pick any entity of the refrigerator device (e.g. a temperature or door sensor). Related sensors and switches are found automatically — works with SmartThings, LG ThinQ, and similar integrations."):u?(0,n.kg)("editor.appliance.entity_section_desc_range",c,"Pick the oven machine-state sensor (e.g. sensor.range_oven_machine_state) or any entity of the range. Oven temperature, modes, burners, and the light are found automatically."):(0,n.kg)("editor.appliance.entity_section_desc",c,"Pick the machine-state select or sensor (e.g. select.washer or a run-state sensor). Related sensors and switches are found automatically — works with SmartThings, LG ThinQ, and similar integrations."),[])}
        <div style="margin-bottom: 16px;">
          ${this.renderEntityPickerWithVariables(t,r,"entity",l.entity||"",e=>{o({entity:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},["select","input_select","sensor","switch","binary_sensor","number"],(0,n.kg)("editor.appliance.entity",c,"Main entity"))}
        </div>
        ${this.renderSettingsSection("","",[{title:(0,n.kg)("editor.appliance.name",c,"Name"),description:(0,n.kg)("editor.appliance.name_desc",c,"Leave empty to use the entity name"),hass:t,data:{name:l.name||""},schema:[this.textField("name")],onChange:e=>{var t,r;o({name:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.name)&&void 0!==r?r:""}),this.triggerPreviewUpdate()}}])}

        ${this.renderSettingsSection((0,n.kg)("editor.appliance.links_section",c,"Linked entities"),(0,n.kg)("editor.appliance.links_section_desc",c,"Everything below is auto-detected from the main entity. Only set a field when detection picks the wrong entity."),[])}
        ${this.renderConditionalFieldsGroup((0,n.kg)("editor.appliance.links_group",c,"Optional overrides"),d?i.qy`
                ${g("fridge_temp_entity",l.fridge_temp_entity,["sensor"],(0,n.kg)("editor.appliance.fridge_temp",c,"Fridge temperature"))}
                ${g("freezer_temp_entity",l.freezer_temp_entity,["sensor"],(0,n.kg)("editor.appliance.freezer_temp",c,"Freezer temperature"))}
                ${g("fridge_setpoint_entity",l.fridge_setpoint_entity,["number"],(0,n.kg)("editor.appliance.fridge_setpoint",c,"Fridge setpoint"))}
                ${g("freezer_setpoint_entity",l.freezer_setpoint_entity,["number"],(0,n.kg)("editor.appliance.freezer_setpoint",c,"Freezer setpoint"))}
                ${g("fridge_door_entity",l.fridge_door_entity,["binary_sensor"],(0,n.kg)("editor.appliance.fridge_door",c,"Fridge door"))}
                ${g("freezer_door_entity",l.freezer_door_entity,["binary_sensor"],(0,n.kg)("editor.appliance.freezer_door",c,"Freezer door"))}
                ${g("filter_status_entity",l.filter_status_entity,["binary_sensor"],(0,n.kg)("editor.appliance.filter_status",c,"Water filter status"))}
                ${g("power_entity",l.power_entity,["sensor"],(0,n.kg)("editor.appliance.power_sensor",c,"Power (W)"))}
                ${g("energy_entity",l.energy_entity,["sensor"],(0,n.kg)("editor.appliance.energy_sensor",c,"Energy (kWh)"))}
              `:u?i.qy`
                ${g("machine_state_entity",l.machine_state_entity,["sensor"],(0,n.kg)("editor.appliance.oven_state",c,"Oven machine state"))}
                ${g("job_state_entity",l.job_state_entity,["sensor"],(0,n.kg)("editor.appliance.oven_job",c,"Oven job state"))}
                ${g("oven_mode_entity",l.oven_mode_entity,["sensor"],(0,n.kg)("editor.appliance.oven_mode",c,"Oven mode (bake, roast…)"))}
                ${g("completion_time_entity",l.completion_time_entity,["sensor"],(0,n.kg)("editor.appliance.completion_time",c,"Completion time sensor"))}
                ${g("oven_temp_entity",l.oven_temp_entity,["sensor"],(0,n.kg)("editor.appliance.oven_temp",c,"Oven temperature"))}
                ${g("oven_setpoint_entity",l.oven_setpoint_entity,["sensor","number"],(0,n.kg)("editor.appliance.oven_setpoint",c,"Oven set point"))}
                ${g("second_cavity_state_entity",l.second_cavity_state_entity,["sensor"],(0,n.kg)("editor.appliance.cavity_state",c,"Second oven state"))}
                ${g("second_cavity_temp_entity",l.second_cavity_temp_entity,["sensor"],(0,n.kg)("editor.appliance.cavity_temp",c,"Second oven temperature"))}
                ${g("second_cavity_setpoint_entity",l.second_cavity_setpoint_entity,["sensor","number"],(0,n.kg)("editor.appliance.cavity_setpoint",c,"Second oven set point"))}
                ${g("second_cavity_mode_entity",l.second_cavity_mode_entity,["sensor"],(0,n.kg)("editor.appliance.cavity_mode",c,"Second oven mode"))}
                ${g("light_entity",l.light_entity,["light"],(0,n.kg)("editor.appliance.oven_light_entity",c,"Oven light"))}
                ${g("stop_button_entity",l.stop_button_entity,["button"],(0,n.kg)("editor.appliance.stop_button",c,"Stop button"))}
                ${g("door_entity",l.door_entity,["binary_sensor"],(0,n.kg)("editor.appliance.door",c,"Door sensor"))}
                ${g("child_lock_entity",l.child_lock_entity,["binary_sensor"],(0,n.kg)("editor.appliance.child_lock",c,"Child lock"))}
                ${g("remote_control_entity",l.remote_control_entity,["binary_sensor"],(0,n.kg)("editor.appliance.remote_control",c,"Remote control"))}
                ${g("power_entity",l.power_entity,["sensor"],(0,n.kg)("editor.appliance.power_sensor",c,"Power (W)"))}
                ${g("energy_entity",l.energy_entity,["sensor"],(0,n.kg)("editor.appliance.energy_sensor",c,"Energy (kWh)"))}
              `:i.qy`
                ${g("power_switch_entity",l.power_switch_entity,["switch"],(0,n.kg)("editor.appliance.power_switch",c,"Power switch"))}
                ${g("machine_state_entity",l.machine_state_entity,["sensor"],(0,n.kg)("editor.appliance.machine_state",c,"Machine state sensor"))}
                ${g("job_state_entity",l.job_state_entity,["sensor"],(0,n.kg)("editor.appliance.job_state",c,"Job state sensor"))}
                ${g("completion_time_entity",l.completion_time_entity,["sensor"],(0,n.kg)("editor.appliance.completion_time",c,"Completion time sensor"))}
                ${g("child_lock_entity",l.child_lock_entity,["binary_sensor"],(0,n.kg)("editor.appliance.child_lock",c,"Child lock"))}
                ${g("remote_control_entity",l.remote_control_entity,["binary_sensor"],(0,n.kg)("editor.appliance.remote_control",c,"Remote control"))}
                ${"dishwasher"===p?g("door_entity",l.door_entity,["binary_sensor"],(0,n.kg)("editor.appliance.door",c,"Door sensor")):i.s6}
                ${g("power_entity",l.power_entity,["sensor"],(0,n.kg)("editor.appliance.power_sensor",c,"Power (W)"))}
                ${g("energy_entity",l.energy_entity,["sensor"],(0,n.kg)("editor.appliance.energy_sensor",c,"Energy (kWh)"))}
              `)}

        ${this.renderChipListField((0,n.kg)("editor.appliance.features",c,"Feature switches"),(0,n.kg)("editor.appliance.features_desc",c,"Toggle chips shown on the card (sanitize, storm wash, power cool, ice maker, wrinkle prevent…). Auto-detected switches appear below — remove any you don’t want, or add your own."),t,Array.isArray(l.feature_switch_entities)?l.feature_switch_entities:h.features,e=>{o({feature_switch_entities:e}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:["switch"],placeholder:(0,n.kg)("editor.appliance.features_placeholder",c,"Add a switch…")})}

        ${d?i.s6:this.renderChipListField((0,n.kg)("editor.appliance.settings",c,"Cycle setting dropdowns"),(0,n.kg)("editor.appliance.settings_desc",c,"Select entities shown as dropdowns (water temperature, spin level, soil level, wash zone…). Auto-detected selects appear below — remove any you don’t want, or add your own."),t,Array.isArray(l.setting_select_entities)?l.setting_select_entities:h.settings,e=>{o({setting_select_entities:e}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:["select","input_select"],placeholder:(0,n.kg)("editor.appliance.settings_placeholder",c,"Add a select…")})}

        ${u?this.renderChipListField((0,n.kg)("editor.appliance.cooktop",c,"Cooktop burners"),(0,n.kg)("editor.appliance.cooktop_desc",c,"Entities that report each burner’s state (on/off, heating, or a power number). They light the burners on the graphic and show a “burners on” chip. Auto-detected entities appear below."),t,Array.isArray(l.cooktop_entities)?l.cooktop_entities:h.cooktop,e=>{o({cooktop_entities:e}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:["binary_sensor","switch","sensor"],placeholder:(0,n.kg)("editor.appliance.cooktop_placeholder",c,"Add a burner entity…")}):i.s6}

        ${this.renderSettingsSection((0,n.kg)("editor.appliance.display_section",c,"Display"),(0,n.kg)("editor.appliance.display_section_desc",c,"Choose what to show on the card."),[{title:(0,n.kg)("editor.appliance.show_title",c,"Show title"),description:"",hass:t,data:{show_title:!1!==l.show_title},schema:[this.booleanField("show_title")],onChange:e=>{var t,r;o({show_title:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_title)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_status",c,"Show status"),description:(0,n.kg)("editor.appliance.show_status_desc",c,"Cycle phase and job state"),hass:t,data:{show_status:!1!==l.show_status},schema:[this.booleanField("show_status")],onChange:e=>{var t,r;o({show_status:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_status)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_graphic",c,"Show appliance graphic"),description:"",hass:t,data:{show_graphic:!1!==l.show_graphic},schema:[this.booleanField("show_graphic")],onChange:e=>{var t,r;o({show_graphic:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_graphic)||void 0===r||r}),this.triggerPreviewUpdate()}},...d?[{title:(0,n.kg)("editor.appliance.show_temps",c,"Show temperatures"),description:(0,n.kg)("editor.appliance.show_temps_desc",c,"Fridge and freezer temperature tiles"),hass:t,data:{show_temperatures:!1!==l.show_temperatures},schema:[this.booleanField("show_temperatures")],onChange:e=>{var t,r;o({show_temperatures:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_temperatures)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_setpoints",c,"Show setpoint controls"),description:(0,n.kg)("editor.appliance.show_setpoints_desc",c,"− / + buttons to adjust target temperatures"),hass:t,data:{show_setpoint_controls:!1!==l.show_setpoint_controls},schema:[this.booleanField("show_setpoint_controls")],onChange:e=>{var t,r;o({show_setpoint_controls:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_setpoint_controls)||void 0===r||r}),this.triggerPreviewUpdate()}}]:u?[{title:(0,n.kg)("editor.appliance.show_completion",c,"Show time remaining"),description:(0,n.kg)("editor.appliance.show_completion_desc_range",c,"Countdown and finish time while the oven runs"),hass:t,data:{show_completion_time:!1!==l.show_completion_time},schema:[this.booleanField("show_completion_time")],onChange:e=>{var t,r;o({show_completion_time:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_completion_time)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_temps_range",c,"Show oven temperature"),description:(0,n.kg)("editor.appliance.show_temps_range_desc",c,"Current temperature and set point tiles"),hass:t,data:{show_temperatures:!1!==l.show_temperatures},schema:[this.booleanField("show_temperatures")],onChange:e=>{var t,r;o({show_temperatures:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_temperatures)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_cooktop",c,"Show cooktop burners"),description:(0,n.kg)("editor.appliance.show_cooktop_desc",c,"Burner indicators on the graphic and a “burners on” chip"),hass:t,data:{show_cooktop:!1!==l.show_cooktop},schema:[this.booleanField("show_cooktop")],onChange:e=>{var t,r;o({show_cooktop:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_cooktop)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_controls",c,"Show controls"),description:(0,n.kg)("editor.appliance.show_controls_desc_range",c,"Oven light and Stop buttons"),hass:t,data:{show_controls:!1!==l.show_controls},schema:[this.booleanField("show_controls")],onChange:e=>{var t,r;o({show_controls:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_controls)||void 0===r||r}),this.triggerPreviewUpdate()}}]:[{title:(0,n.kg)("editor.appliance.show_completion",c,"Show time remaining"),description:(0,n.kg)("editor.appliance.show_completion_desc",c,"Countdown and finish time while a cycle runs"),hass:t,data:{show_completion_time:!1!==l.show_completion_time},schema:[this.booleanField("show_completion_time")],onChange:e=>{var t,r;o({show_completion_time:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_completion_time)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_controls",c,"Show cycle controls"),description:(0,n.kg)("editor.appliance.show_controls_desc",c,"Start / Pause / Stop buttons"),hass:t,data:{show_controls:!1!==l.show_controls},schema:[this.booleanField("show_controls")],onChange:e=>{var t,r;o({show_controls:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_controls)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_power_button",c,"Show power button"),description:"",hass:t,data:{show_power_button:!1!==l.show_power_button},schema:[this.booleanField("show_power_button")],onChange:e=>{var t,r;o({show_power_button:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_power_button)||void 0===r||r}),this.triggerPreviewUpdate()}}],{title:(0,n.kg)("editor.appliance.show_chips",c,"Show status chips"),description:(0,n.kg)("editor.appliance.show_chips_desc",c,"Child lock, remote control, door open, filter alerts"),hass:t,data:{show_status_chips:!1!==l.show_status_chips},schema:[this.booleanField("show_status_chips")],onChange:e=>{var t,r;o({show_status_chips:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_status_chips)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_features",c,"Show feature switches"),description:"",hass:t,data:{show_feature_switches:!1!==l.show_feature_switches},schema:[this.booleanField("show_feature_switches")],onChange:e=>{var t,r;o({show_feature_switches:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_feature_switches)||void 0===r||r}),this.triggerPreviewUpdate()}},...d?[]:[{title:(0,n.kg)("editor.appliance.show_settings",c,"Show cycle settings"),description:(0,n.kg)("editor.appliance.show_settings_desc",c,"Dropdowns for water temperature, spin level, and similar options"),hass:t,data:{show_settings:!1!==l.show_settings},schema:[this.booleanField("show_settings")],onChange:e=>{var t,r;o({show_settings:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_settings)||void 0===r||r}),this.triggerPreviewUpdate()}}],{title:(0,n.kg)("editor.appliance.show_metrics",c,"Show power & energy"),description:(0,n.kg)("editor.appliance.show_metrics_desc",c,"Live wattage and energy usage tiles"),hass:t,data:{show_metrics:!1!==l.show_metrics},schema:[this.booleanField("show_metrics")],onChange:e=>{var t,r;o({show_metrics:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_metrics)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.enable_animations",c,"Enable animations"),description:(0,n.kg)("editor.appliance.enable_animations_desc",c,"Drum spin, bubbles, steam, and glow effects while running"),hass:t,data:{enable_animations:!1!==l.enable_animations},schema:[this.booleanField("enable_animations")],onChange:e=>{var t,r;o({enable_animations:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.enable_animations)||void 0===r||r}),this.triggerPreviewUpdate()}}])}

        ${this.renderSettingsSection((0,n.kg)("editor.appliance.layout_section",c,"Layout"),(0,n.kg)("editor.appliance.layout_section_desc",c,"How the card is arranged."),[{title:(0,n.kg)("editor.appliance.layout",c,"Layout"),description:(0,n.kg)("editor.appliance.layout_desc",c,"Hero, standard, or compact"),hass:t,data:{layout:l.layout||"standard"},schema:[this.selectField("layout",[{value:"hero",label:(0,n.kg)("editor.appliance.layout_hero",c,"Hero")},{value:"standard",label:(0,n.kg)("editor.appliance.layout_standard",c,"Standard")},{value:"compact",label:(0,n.kg)("editor.appliance.layout_compact",c,"Compact")}])],onChange:e=>{var t;o({layout:(null===(t=e.detail.value)||void 0===t?void 0:t.layout)||"standard"}),this.triggerPreviewUpdate()}}])}

        ${this.renderSliderField((0,n.kg)("editor.appliance.size",c,"Graphic size"),(0,n.kg)("editor.appliance.size_desc",c,"Size of the appliance illustration"),null!==(s=l.appliance_size)&&void 0!==s?s:m,m,64,220,4,e=>{o({appliance_size:e}),this.triggerPreviewUpdate()},"px")}

        ${this.renderColorField((0,n.kg)("editor.appliance.active_color",c,"Running color"),(0,n.kg)("editor.appliance.active_color_desc",c,"Accent while a cycle is running"),t,l.active_color||"","var(--primary-color)",e=>{o({active_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.appliance.done_color",c,"Done color"),"",t,l.done_color||"","#4CAF50",e=>{o({done_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.appliance.text_color",c,"Text color"),"",t,l.text_color||"","var(--primary-text-color)",e=>{o({text_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.appliance.card_bg",c,"Card background"),"",t,l.card_background_color||"","var(--card-background-color)",e=>{o({card_background_color:e}),this.triggerPreviewUpdate()})}
      </div>
    `}drumSvg(e,t,r,n,o,a){return i.JW`
      <g clip-path="url(#${e}-clip)">
        <g class="uc-appl-drum ${t?"uc-appl-drum--spin":""} ${r?"uc-appl-drum--paused":""}" style="transform-origin: 50px 64px;">
          <circle cx="50" cy="64" r="23" fill="color-mix(in srgb, var(--primary-text-color) 6%, #191919)" />
          ${[30,150,270].map(e=>i.JW`
              <line
                x1="50" y1="64"
                x2="${50+21*Math.cos(e*Math.PI/180)}"
                y2="${64+21*Math.sin(e*Math.PI/180)}"
                stroke="var(--divider-color, #4a4a4a)" stroke-width="3.4" stroke-linecap="round" opacity="0.9"
              />`)}
          ${[0,60,120,180,240,300].map(e=>i.JW`
              <circle
                cx="${50+16.5*Math.cos(e*Math.PI/180)}"
                cy="${64+16.5*Math.sin(e*Math.PI/180)}"
                r="1.6" fill="var(--divider-color, #555)" opacity="0.8"
              />`)}
          <circle cx="50" cy="64" r="4.6" fill="var(--divider-color, #4a4a4a)" />
          <circle cx="50" cy="64" r="1.9" fill="${n}" opacity="0.95" />
        </g>
        ${o&&(t||r)?i.JW`
              <g class="${t?"uc-appl-fx--on":""}">
                <path d="M 30 80 Q 50 88 70 80" fill="none" stroke="${n}" stroke-width="1.4" opacity="0.4" />
                <circle class="uc-appl-bubble uc-appl-bubble--a" cx="39" cy="78" r="2" fill="${n}" opacity="0.5" />
                <circle class="uc-appl-bubble uc-appl-bubble--b" cx="57" cy="75" r="1.4" fill="${n}" opacity="0.45" />
                <circle class="uc-appl-bubble uc-appl-bubble--c" cx="48" cy="81" r="1.2" fill="${n}" opacity="0.4" />
              </g>`:i.s6}
        ${a&&(t||r)?i.JW`
              <g class="${t?"uc-appl-fx--on":""}" opacity="0.75">
                <path class="uc-appl-heat" d="M 38 74 Q 42 64 38 54" fill="none" stroke="${n}" stroke-width="1.7" stroke-linecap="round" />
                <path class="uc-appl-heat uc-appl-heat--b" d="M 50 76 Q 54 64 50 52" fill="none" stroke="${n}" stroke-width="1.7" stroke-linecap="round" />
                <path class="uc-appl-heat uc-appl-heat--c" d="M 62 74 Q 66 64 62 54" fill="none" stroke="${n}" stroke-width="1.7" stroke-linecap="round" />
              </g>`:i.s6}
      </g>
    `}laundrySvg(e,t,r,n,o,a){const s=a&&"running"===n,l="paused"===n,c=`uc-appl-${e}`,p="idle"===n||"off"===n||"unavailable"===n?"var(--divider-color, #666)":o;return i.qy`
      <svg class="uc-appl-svg" viewBox="0 0 100 120" width="${t}" height="${1.2*t}" aria-hidden="true">
        <defs>
          <linearGradient id="${c}-body" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="color-mix(in srgb, var(--primary-text-color) 7%, var(--card-background-color, #2e2e2e))" />
            <stop offset="100%" stop-color="var(--secondary-background-color, #232323)" />
          </linearGradient>
          <clipPath id="${c}-clip"><circle cx="50" cy="64" r="23" /></clipPath>
          <filter id="${c}-shadow" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" flood-opacity="0.3" />
          </filter>
        </defs>

        <rect x="11" y="6" width="78" height="104" rx="9" fill="url(#${c}-body)" stroke="color-mix(in srgb, var(--divider-color) 80%, transparent)" stroke-width="1.4" filter="url(#${c}-shadow)" />

        <!-- Control panel -->
        <rect x="16" y="12" width="68" height="13" rx="3.5" fill="color-mix(in srgb, var(--primary-text-color) 4%, #1d1d1d)" stroke="color-mix(in srgb, var(--divider-color) 60%, transparent)" stroke-width="0.8" />
        ${"washer"===r?i.JW`
              <rect x="21" y="15.5" width="20" height="6" rx="1.6" fill="#101418" />
              <rect x="23" y="17" width="9" height="3" rx="0.8" fill="${p}" opacity="0.85" class="${s?"uc-appl-led":""}" />
              <circle cx="72" cy="18.5" r="4.4" fill="#161a1e" stroke="color-mix(in srgb, var(--divider-color) 85%, transparent)" stroke-width="1" />
              <line x1="72" y1="18.5" x2="72" y2="15.2" stroke="${o}" stroke-width="1.3" stroke-linecap="round" />`:i.JW`
              <circle cx="27" cy="18.5" r="4.4" fill="#161a1e" stroke="color-mix(in srgb, var(--divider-color) 85%, transparent)" stroke-width="1" />
              <line x1="27" y1="18.5" x2="29.6" y2="16" stroke="${o}" stroke-width="1.3" stroke-linecap="round" />
              <rect x="58" y="15.5" width="20" height="6" rx="1.6" fill="#101418" />
              <rect x="60" y="17" width="9" height="3" rx="0.8" fill="${p}" opacity="0.85" class="${s?"uc-appl-led":""}" />`}
        <circle cx="50" cy="18.5" r="1.5" fill="${p}" class="${s?"uc-appl-led":""}" />

        <!-- Door -->
        <circle cx="50" cy="64" r="29" fill="color-mix(in srgb, var(--primary-text-color) 5%, #262626)" stroke="color-mix(in srgb, var(--divider-color) 90%, transparent)" stroke-width="1.6" />
        <circle cx="50" cy="64" r="25.5" fill="none" stroke="${o}" stroke-width="1.6" opacity="${"running"===n||"done"===n?.9:.35}" class="${s?"uc-appl-ring":""}" />

        ${this.drumSvg(c,s,l,o,"washer"===r,"dryer"===r)}

        <!-- Glass reflection -->
        <path d="M 33 50 Q 50 40 67 50" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2.4" stroke-linecap="round" />

        ${"dryer"===r?i.JW`<g opacity="0.7">${[0,1,2,3,4].map(e=>i.JW`<line x1="${30+10*e}" y1="101" x2="${34+10*e}" y2="101" stroke="var(--divider-color, #555)" stroke-width="1.6" stroke-linecap="round" />`)}</g>`:i.JW`<rect x="20" y="99" width="16" height="5" rx="1.4" fill="color-mix(in srgb, var(--primary-text-color) 4%, #1d1d1d)" stroke="color-mix(in srgb, var(--divider-color) 55%, transparent)" stroke-width="0.7" />`}

        <rect x="18" y="110" width="12" height="4" rx="1.4" fill="var(--divider-color, #4a4a4a)" />
        <rect x="70" y="110" width="12" height="4" rx="1.4" fill="var(--divider-color, #4a4a4a)" />

        ${"done"===n?i.JW`
              <g>
                <circle cx="80" cy="32" r="8.5" fill="${o}" />
                <path d="M 76 32 L 79 35 L 85 28" fill="none" stroke="var(--text-primary-color, #fff)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
              </g>`:i.s6}
      </svg>
    `}dishwasherSvg(e,t,r,n,o,a){const s=o&&"running"===r,l=`uc-appl-${e}`,c="idle"===r||"off"===r||"unavailable"===r?"var(--divider-color, #666)":n;return i.qy`
      <svg class="uc-appl-svg" viewBox="0 0 100 120" width="${t}" height="${1.2*t}" aria-hidden="true">
        <defs>
          <linearGradient id="${l}-body" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="color-mix(in srgb, var(--primary-text-color) 7%, var(--card-background-color, #2e2e2e))" />
            <stop offset="100%" stop-color="var(--secondary-background-color, #232323)" />
          </linearGradient>
          <filter id="${l}-shadow" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" flood-opacity="0.3" />
          </filter>
        </defs>

        <rect x="11" y="8" width="78" height="102" rx="7" fill="url(#${l}-body)" stroke="${a?"var(--warning-color, #FF9800)":"color-mix(in srgb, var(--divider-color) 80%, transparent)"}" stroke-width="${a?2:1.4}" filter="url(#${l}-shadow)" />

        <!-- Control strip -->
        <rect x="11" y="8" width="78" height="14" rx="7" fill="color-mix(in srgb, var(--primary-text-color) 4%, #1d1d1d)" />
        <rect x="11" y="15" width="78" height="7" fill="color-mix(in srgb, var(--primary-text-color) 4%, #1d1d1d)" />
        ${[0,1,2,3].map(e=>i.JW`<circle cx="${24+9*e}" cy="15" r="1.7" fill="${0===e?c:"var(--divider-color, #555)"}" class="${0===e&&s?"uc-appl-led":""}" />`)}
        <rect x="62" y="12" width="18" height="6" rx="1.6" fill="#101418" />
        <rect x="64" y="13.5" width="8" height="3" rx="0.8" fill="${c}" opacity="0.85" class="${s?"uc-appl-led":""}" />

        <!-- Handle -->
        <rect x="16" y="27" width="68" height="4.6" rx="2.3" fill="color-mix(in srgb, var(--primary-text-color) 16%, #3a3a3a)" />

        <!-- Panel sheen -->
        <line x1="18" y1="42" x2="82" y2="42" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
        <line x1="18" y1="52" x2="82" y2="52" stroke="rgba(255,255,255,0.035)" stroke-width="1" />

        <!-- Spray motif while running -->
        <g class="uc-appl-spray ${s?"uc-appl-spray--spin":""}" style="transform-origin: 50px 70px;" opacity="${"running"===r||"paused"===r?.9:.22}">
          <circle cx="50" cy="70" r="15" fill="none" stroke="${n}" stroke-width="1.1" opacity="0.4" />
          ${[0,120,240].map(e=>i.JW`
              <path
                d="M 50 70 L ${50+13*Math.cos((e-12)*Math.PI/180)} ${70+13*Math.sin((e-12)*Math.PI/180)} A 13 13 0 0 1 ${50+13*Math.cos((e+12)*Math.PI/180)} ${70+13*Math.sin((e+12)*Math.PI/180)} Z"
                fill="${n}" opacity="0.6"
              />`)}
          <circle cx="50" cy="70" r="3" fill="${n}" />
        </g>

        ${s?i.JW`
              <g class="uc-appl-fx--on" opacity="0.65">
                <path class="uc-appl-steam" d="M 30 6 Q 32 2 30 -2" fill="none" stroke="${n}" stroke-width="1.5" stroke-linecap="round" />
                <path class="uc-appl-steam uc-appl-steam--b" d="M 50 6 Q 52 1 50 -3" fill="none" stroke="${n}" stroke-width="1.5" stroke-linecap="round" />
                <path class="uc-appl-steam uc-appl-steam--c" d="M 70 6 Q 72 2 70 -2" fill="none" stroke="${n}" stroke-width="1.5" stroke-linecap="round" />
              </g>`:i.s6}

        <!-- Kick panel -->
        <rect x="16" y="100" width="68" height="6" rx="2" fill="color-mix(in srgb, var(--primary-text-color) 4%, #1d1d1d)" />
        ${[0,1,2,3,4,5].map(e=>i.JW`<line x1="${22+10*e}" y1="103" x2="${26+10*e}" y2="103" stroke="var(--divider-color, #555)" stroke-width="1.2" stroke-linecap="round" />`)}

        ${"done"===r?i.JW`
              <g>
                <circle cx="80" cy="36" r="8.5" fill="${n}" />
                <path d="M 76 36 L 79 39 L 85 32" fill="none" stroke="var(--text-primary-color, #fff)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
              </g>`:i.s6}
      </svg>
    `}fridgeSvg(e,t,r,n,o,a){const s=`uc-appl-${e}`,l="var(--warning-color, #FF9800)";return i.qy`
      <svg class="uc-appl-svg" viewBox="0 0 100 120" width="${t}" height="${1.2*t}" aria-hidden="true">
        <defs>
          <linearGradient id="${s}-body" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="color-mix(in srgb, var(--primary-text-color) 8%, var(--card-background-color, #2e2e2e))" />
            <stop offset="100%" stop-color="var(--secondary-background-color, #222)" />
          </linearGradient>
          <filter id="${s}-shadow" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" flood-opacity="0.3" />
          </filter>
        </defs>

        <rect x="14" y="5" width="72" height="108" rx="8" fill="url(#${s}-body)" stroke="color-mix(in srgb, var(--divider-color) 80%, transparent)" stroke-width="1.4" filter="url(#${s}-shadow)" />

        <!-- French doors -->
        <rect x="17" y="8" width="31.5" height="64" rx="4.5" fill="color-mix(in srgb, var(--primary-text-color) 3%, transparent)" stroke="${n?l:"color-mix(in srgb, var(--divider-color) 70%, transparent)"}" stroke-width="${n?2:1}" class="${n?"uc-appl-door-open":""}" />
        <rect x="51.5" y="8" width="31.5" height="64" rx="4.5" fill="color-mix(in srgb, var(--primary-text-color) 3%, transparent)" stroke="${n?l:"color-mix(in srgb, var(--divider-color) 70%, transparent)"}" stroke-width="${n?2:1}" class="${n?"uc-appl-door-open":""}" />

        <!-- Handles -->
        <rect x="45" y="18" width="2.6" height="30" rx="1.3" fill="color-mix(in srgb, var(--primary-text-color) 20%, #3a3a3a)" />
        <rect x="52.4" y="18" width="2.6" height="30" rx="1.3" fill="color-mix(in srgb, var(--primary-text-color) 20%, #3a3a3a)" />

        <!-- Dispenser -->
        <rect x="23" y="24" width="14" height="20" rx="2.5" fill="#14181c" stroke="color-mix(in srgb, var(--divider-color) 60%, transparent)" stroke-width="0.8" />
        <rect x="26" y="27" width="8" height="3" rx="1" fill="${r}" opacity="0.65" />
        <rect x="27.5" y="33" width="5" height="8" rx="1" fill="color-mix(in srgb, var(--primary-text-color) 10%, #26292c)" />

        <!-- Freezer drawer -->
        <rect x="17" y="76" width="66" height="33" rx="4.5" fill="color-mix(in srgb, var(--primary-text-color) 3%, transparent)" stroke="${o?l:"color-mix(in srgb, var(--divider-color) 70%, transparent)"}" stroke-width="${o?2:1}" class="${o?"uc-appl-door-open":""}" />
        <rect x="30" y="82" width="40" height="3" rx="1.5" fill="color-mix(in srgb, var(--primary-text-color) 20%, #3a3a3a)" />

        <!-- Snowflake on freezer -->
        <g stroke="${r}" stroke-width="1.4" stroke-linecap="round" opacity="0.8">
          <line x1="50" y1="92" x2="50" y2="102" />
          <line x1="45.7" y1="94.5" x2="54.3" y2="99.5" />
          <line x1="45.7" y1="99.5" x2="54.3" y2="94.5" />
        </g>

        ${a?i.JW`
              <g>
                <circle cx="80" cy="14" r="8" fill="${l}" />
                <line x1="80" y1="10" x2="80" y2="15.5" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" />
                <circle cx="80" cy="18.4" r="1.2" fill="#1a1a1a" />
              </g>`:i.s6}
      </svg>
    `}rangeSvg(e,t,r,n,o,a,s,l){const c=`uc-appl-${e}`,p="running"===r||"paused"===r,d="var(--uc-appl-burner, #ff6b35)";return i.qy`
      <svg class="uc-appl-svg" viewBox="0 0 100 120" width="${t}" height="${1.2*t}" aria-hidden="true">
        <defs>
          <linearGradient id="${c}-body" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="color-mix(in srgb, var(--primary-text-color) 7%, var(--card-background-color, #2e2e2e))" />
            <stop offset="100%" stop-color="var(--secondary-background-color, #232323)" />
          </linearGradient>
          <radialGradient id="${c}-glow" cx="50%" cy="60%" r="65%">
            <stop offset="0%" stop-color="#ffb45e" stop-opacity="${p?.55:s?.4:0}" />
            <stop offset="70%" stop-color="#ff8a3d" stop-opacity="${p?.22:s?.14:0}" />
            <stop offset="100%" stop-color="#ff8a3d" stop-opacity="0" />
          </radialGradient>
          <filter id="${c}-shadow" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" flood-opacity="0.3" />
          </filter>
        </defs>

        <rect x="11" y="8" width="78" height="104" rx="6" fill="url(#${c}-body)" stroke="color-mix(in srgb, var(--divider-color) 80%, transparent)" stroke-width="1.4" filter="url(#${c}-shadow)" />

        <!-- Glass cooktop -->
        <rect x="14" y="11" width="72" height="19" rx="4" fill="#14171b" stroke="color-mix(in srgb, var(--divider-color) 60%, transparent)" stroke-width="0.9" />
        ${[{cx:26,r:5.2},{cx:42.5,r:4.2},{cx:58.5,r:5.6},{cx:75,r:4.4}].map((e,t)=>{const r=!!a[t];return i.JW`
            <g class="${r&&o?"uc-appl-burner--on":""}">
              ${r?i.JW`<circle cx="${e.cx}" cy="20.5" r="${e.r+2.5}" fill="${d}" opacity="0.18" />`:i.s6}
              <circle cx="${e.cx}" cy="20.5" r="${e.r}" fill="none"
                stroke="${r?d:"color-mix(in srgb, var(--divider-color) 85%, transparent)"}"
                stroke-width="${r?1.8:1.2}" opacity="${r?.95:.8}" />
              <circle cx="${e.cx}" cy="20.5" r="${Math.max(e.r-2.6,1.4)}" fill="none"
                stroke="${r?d:"color-mix(in srgb, var(--divider-color) 60%, transparent)"}"
                stroke-width="1" opacity="${r?.8:.55}" />
            </g>`})}

        <!-- Control strip: knobs + display -->
        <rect x="14" y="33" width="72" height="10" rx="2.5" fill="color-mix(in srgb, var(--primary-text-color) 4%, #1d1d1d)" />
        ${[22,32,42,52].map(e=>i.JW`
            <circle cx="${e}" cy="38" r="2.6" fill="#161a1e" stroke="color-mix(in srgb, var(--divider-color) 85%, transparent)" stroke-width="0.8" />
            <line x1="${e}" y1="38" x2="${e}" y2="35.9" stroke="var(--divider-color, #666)" stroke-width="0.9" stroke-linecap="round" />`)}
        <rect x="62" y="35" width="20" height="6" rx="1.6" fill="#101418" />
        <rect x="64" y="36.5" width="9" height="3" rx="0.8" fill="${p?n:"var(--divider-color, #666)"}" opacity="0.85" class="${p&&o?"uc-appl-led":""}" />

        <!-- Oven door -->
        <rect x="14" y="46" width="72" height="46" rx="4" fill="color-mix(in srgb, var(--primary-text-color) 3%, transparent)" stroke="${l?"var(--warning-color, #FF9800)":"color-mix(in srgb, var(--divider-color) 70%, transparent)"}" stroke-width="${l?2:1}" class="${l?"uc-appl-door-open":""}" />
        <rect x="17" y="49" width="66" height="4" rx="2" fill="color-mix(in srgb, var(--primary-text-color) 18%, #3a3a3a)" />

        <!-- Oven window -->
        <rect x="22" y="58" width="56" height="28" rx="3" fill="#0e1114" stroke="color-mix(in srgb, var(--divider-color) 60%, transparent)" stroke-width="0.9" />
        <rect x="22" y="58" width="56" height="28" rx="3" fill="url(#${c}-glow)" />
        ${p&&o?i.JW`
              <g class="uc-appl-fx--on" opacity="0.7" clip-path="inset(0)">
                <path class="uc-appl-heat" d="M 36 82 Q 39 72 36 62" fill="none" stroke="#ffb45e" stroke-width="1.5" stroke-linecap="round" />
                <path class="uc-appl-heat uc-appl-heat--b" d="M 50 83 Q 53 72 50 61" fill="none" stroke="#ffb45e" stroke-width="1.5" stroke-linecap="round" />
                <path class="uc-appl-heat uc-appl-heat--c" d="M 64 82 Q 67 72 64 62" fill="none" stroke="#ffb45e" stroke-width="1.5" stroke-linecap="round" />
              </g>`:i.s6}
        ${s?i.JW`<circle cx="74" cy="62" r="1.8" fill="#ffd27a" opacity="0.95" />`:i.s6}
        <path d="M 26 62 Q 50 58 74 62" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1.6" stroke-linecap="round" />

        <!-- Storage drawer -->
        <rect x="14" y="96" width="72" height="12" rx="3" fill="color-mix(in srgb, var(--primary-text-color) 3%, transparent)" stroke="color-mix(in srgb, var(--divider-color) 60%, transparent)" stroke-width="0.9" />
        <rect x="38" y="100.5" width="24" height="3" rx="1.5" fill="color-mix(in srgb, var(--primary-text-color) 16%, #3a3a3a)" />

        ${"done"===r?i.JW`
              <g>
                <circle cx="80" cy="14" r="8" fill="${n}" />
                <path d="M 76 14 L 79 17 L 85 10" fill="none" stroke="var(--text-primary-color, #fff)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
              </g>`:i.s6}
      </svg>
    `}renderGraphic(e,t,r,i,n,o,a){return"fridge"===t?this.fridgeSvg(e.id,r,n,!!a.fridgeDoorOpen,!!a.freezerDoorOpen,!!a.alert):"range"===t?this.rangeSvg(e.id,r,i,n,o,a.burners||[],!!a.lightOn,!!a.doorOpen):"dishwasher"===t?this.dishwasherSvg(e.id,r,i,n,o,!!a.doorOpen):this.laundrySvg(e.id,r,t,i,n,o)}renderPreview(e,t,r,o){var v,y,w,f,b,x,k,$,S,z,P,F,C,D,M,q,A,N;const L=e,W=(null===(v=null==t?void 0:t.locale)||void 0===v?void 0:v.language)||"en",U=this.cardType,j=g[U],R=this.getRef(t,L.entity,r);if(!R)return i.qy`
        <style>${this.getStyles()}</style>
        <div class="uc-appl-wrapper">
          ${this.renderGradientErrorState((0,n.kg)("editor.appliance.config_needed",W,"Select an appliance"),(0,n.kg)("editor.appliance.config_needed_desc",W,"Choose the main entity in the General tab"),j.icon)}
        </div>
      `;const T=this.resolveLinks(L,t,r,R),O=L.layout||"standard",J=!1!==L.enable_animations,E=L.text_color||"var(--primary-text-color)",G=L.secondary_text_color||"var(--secondary-text-color)",B=L.card_background_color||"var(--uc-pane-bg, var(--card-background-color))",Q="fridge"===U,I="range"===U,H=(null===(y=L.name)||void 0===y?void 0:y.trim())||T.deviceName||("string"==typeof R.attrs.friendly_name?String(R.attrs.friendly_name).replace(/\b(machine state|job state|completion time|run state|remain(?:ing)? time|power|energy|state|status|temperature)\s*$/i,"").trim():"")||d(T.prefix)||j.fallbackName,Y=null!==(f=null===(w=T.machineState)||void 0===w?void 0:w.state)&&void 0!==f?f:R.state;let V=Q?"running":function(e){const t=e.toLowerCase().trim();return t&&"unavailable"!==t&&"unknown"!==t?p.has(t)?"error":l.has(t)?"done":s.has(t)?"paused":a.has(t)?"running":(c.has(t),"idle"):"unavailable"}(Y);const Z=Q?void 0:this.autoFind(t,T.pool,T.prefix,["binary_sensor"],[new RegExp(`^${T.prefix}_power(_\\d+)?$`),/(^|_)power(_state)?(_\d+)?$/]),K=Z?"on"===(null===(b=t.states[Z])||void 0===b?void 0:b.state):void 0;Q||"idle"!==V||!1!==K||(V="off");const X=(I?(null===(x=T.ovenMode)||void 0===x?void 0:x.state)||(null===(k=T.jobState)||void 0===k?void 0:k.state):null===($=T.jobState)||void 0===$?void 0:$.state)||"",ee=X&&!["none","unknown","unavailable","off"].includes(X.toLowerCase())?d(X):null,te=function(e){var t;if(!e)return null;const r=null===(t=e.state)||void 0===t?void 0:t.trim();if(!r||"unavailable"===r||"unknown"===r||"none"===r)return null;if(/\d{4}-\d{2}-\d{2}/.test(r)){const e=new Date(r);return Number.isNaN(e.getTime())?null:e.getTime()>Date.now()?e:null}const i=r.match(/^(\d+):(\d{2})(?::(\d{2}))?$/);if(i){const e=void 0!==i[3]?1e3*(3600*Number(i[1])+60*Number(i[2])+Number(i[3])):6e4*(60*Number(i[1])+Number(i[2]));return e>0?new Date(Date.now()+e):null}const n=Number(r);if(!Number.isNaN(n)){if(n<=0)return null;const t=String(e.attrs.unit_of_measurement||"").toLowerCase(),r=t.startsWith("h")?36e5*n:t.startsWith("s")?1e3*n:6e4*n;return new Date(Date.now()+r)}return null}(T.completion),re=!(!1===L.show_completion_time||Q||"running"!==V&&"paused"!==V||!te),ie="on"===(null===(S=T.fridgeDoor)||void 0===S?void 0:S.state),ne="on"===(null===(z=T.freezerDoor)||void 0===z?void 0:z.state),oe="on"===(null===(P=T.filterStatus)||void 0===P?void 0:P.state),ae="on"===(null===(F=T.door)||void 0===F?void 0:F.state),se=!1===L.show_cooktop?[]:T.cooktop.map(_),le=se.filter(Boolean).length,ce="on"===(null===(C=T.ovenLight)||void 0===C?void 0:C.state),pe=L.done_color||"#4CAF50",de=(()=>{if(Q)return L.active_color||"var(--primary-color)";if(I&&le>0&&("idle"===V||"off"===V))return L.active_color||"var(--uc-appl-burner, #ff6b35)";switch(V){case"running":return L.active_color||"var(--primary-color)";case"paused":return"var(--warning-color, #FF9800)";case"done":return pe;case"error":return"var(--error-color, #F44336)";default:return G}})(),ue=Q&&(ie||ne||oe)?"var(--warning-color, #FF9800)":de,he=(()=>{if(Q)return ie&&ne?(0,n.kg)("editor.appliance.doors_open",W,"Doors open"):ie?(0,n.kg)("editor.appliance.fridge_door_open",W,"Fridge door open"):ne?(0,n.kg)("editor.appliance.freezer_door_open",W,"Freezer door open"):oe?(0,n.kg)("editor.appliance.filter_alert",W,"Replace water filter"):(0,n.kg)("editor.appliance.cooling",W,"Cooling");if(I&&le>0&&("idle"===V||"off"===V))return(0,n.kg)("editor.appliance.cooktop_on",W,"Cooktop on");switch(V){case"running":return(0,n.kg)("editor.appliance.state_running",W,"Running");case"paused":return(0,n.kg)("editor.appliance.state_paused",W,"Paused");case"done":return(0,n.kg)("editor.appliance.state_done",W,"Done");case"error":return(0,n.kg)("editor.appliance.state_error",W,"Error");case"off":return(0,n.kg)("editor.appliance.state_off",W,"Off");case"unavailable":return(0,n.kg)("editor.appliance.state_unavailable",W,"Unavailable");default:return(0,n.kg)("editor.appliance.state_idle",W,"Idle")}})(),ge="unavailable"===V,_e=e=>{const r=T.controlSelect;if(!r)return;const i=r.id.split(".")[0];t.callService("input_select"===i?"input_select":"select","select_option",{entity_id:r.id,option:e}),this.triggerPreviewUpdate(!0)},me=()=>{T.powerSwitch&&(t.callService("switch","toggle",{entity_id:T.powerSwitch.id}),this.triggerPreviewUpdate(!0))},ve=e=>{t.callService("switch","toggle",{entity_id:e}),this.triggerPreviewUpdate(!0)},ye=(e,r)=>{const i="number"==typeof e.attrs.min?e.attrs.min:-30,n="number"==typeof e.attrs.max?e.attrs.max:90,o="number"==typeof e.attrs.step&&e.attrs.step>0?e.attrs.step:1,a=this._pendingSetpoints.get(e.id),s=a&&Date.now()-a.ts<6e3?a.value:Number(e.state);if(Number.isNaN(s))return;const l=Math.min(n,Math.max(i,s+r*o));this._pendingSetpoints.set(e.id,{value:l,ts:Date.now()}),t.callService("number","set_value",{entity_id:e.id,value:l}),this.triggerPreviewUpdate(!0)},we=e=>{const t=this._pendingSetpoints.get(e.id),r=Number(e.state);if(t){if(!(Date.now()-t.ts>=6e3||t.value===r))return t.value;this._pendingSetpoints.delete(e.id)}return Number.isNaN(r)?null:r},fe=Array.isArray(null===(D=T.controlSelect)||void 0===D?void 0:D.attrs.options)?T.controlSelect.attrs.options.map(e=>String(e).toLowerCase()):[],be=fe.includes("run"),xe=fe.includes("pause"),ke=fe.includes("stop"),$e=!T.remoteControl||"on"===T.remoteControl.state,Se=!Q&&!1!==L.show_controls&&T.controlSelect&&(be||xe||ke)?i.qy`
            <div class="uc-appl-controls" role="group" title="${$e?"":(0,n.kg)("editor.appliance.remote_disabled",W,"Enable remote control on the appliance to allow remote start")}">
              ${be?i.qy`<button type="button" class="uc-appl-ctl uc-appl-btn ${"running"===V?"is-active":""}" ?disabled=${ge||!$e} @click=${()=>_e("run")}>
                    <ha-icon icon="mdi:play"></ha-icon>${(0,n.kg)("editor.appliance.start",W,"Start")}
                  </button>`:i.s6}
              ${xe?i.qy`<button type="button" class="uc-appl-ctl uc-appl-btn ${"paused"===V?"is-active":""}" ?disabled=${ge||!$e} @click=${()=>_e("pause")}>
                    <ha-icon icon="mdi:pause"></ha-icon>${(0,n.kg)("editor.appliance.pause",W,"Pause")}
                  </button>`:i.s6}
              ${ke?i.qy`<button type="button" class="uc-appl-ctl uc-appl-btn ${"idle"===V||"off"===V?"is-active":""}" ?disabled=${ge||!$e} @click=${()=>_e("stop")}>
                    <ha-icon icon="mdi:stop"></ha-icon>${(0,n.kg)("editor.appliance.stop",W,"Stop")}
                  </button>`:i.s6}
              ${!1!==L.show_power_button&&T.powerSwitch?i.qy`<button type="button" class="uc-appl-ctl uc-appl-btn uc-appl-btn--power ${"on"===T.powerSwitch.state?"is-active":""}" ?disabled=${ge} @click=${me} aria-label="${(0,n.kg)("editor.appliance.power",W,"Power")}">
                    <ha-icon icon="mdi:power"></ha-icon>
                  </button>`:i.s6}
            </div>
          `:i.s6,ze=I&&!1!==L.show_controls&&(T.ovenLight||T.stopButton)?i.qy`
            <div class="uc-appl-controls" role="group">
              ${T.ovenLight?i.qy`<button
                    type="button"
                    class="uc-appl-ctl uc-appl-btn ${ce?"is-active":""}"
                    ?disabled=${"unavailable"===T.ovenLight.state}
                    aria-pressed="${ce?"true":"false"}"
                    @click=${()=>{t.callService("light","toggle",{entity_id:T.ovenLight.id}),this.triggerPreviewUpdate(!0)}}
                  >
                    <ha-icon icon="${ce?"mdi:lightbulb-on":"mdi:lightbulb-outline"}"></ha-icon>
                    ${(0,n.kg)("editor.appliance.oven_light",W,"Light")}
                  </button>`:i.s6}
              ${T.stopButton?i.qy`<button
                    type="button"
                    class="uc-appl-ctl uc-appl-btn"
                    ?disabled=${ge||"running"!==V&&"paused"!==V}
                    @click=${()=>{t.callService("button","press",{entity_id:T.stopButton.id}),this.triggerPreviewUpdate(!0)}}
                  >
                    <ha-icon icon="mdi:stop"></ha-icon>${(0,n.kg)("editor.appliance.stop",W,"Stop")}
                  </button>`:i.s6}
            </div>
          `:i.s6,Pe=(()=>{var e,r;if(!1===L.show_status_chips)return i.s6;const o=[],a=(e,t,r=!1)=>o.push(i.qy`<span class="uc-appl-chip ${r?"uc-appl-chip--warn":""}"><ha-icon icon="${e}"></ha-icon>${t}</span>`);return"on"===(null===(e=T.childLock)||void 0===e?void 0:e.state)&&a("mdi:lock",(0,n.kg)("editor.appliance.chip_child_lock",W,"Child lock")),!Q&&T.remoteControl&&"on"!==T.remoteControl.state&&a("mdi:remote-off",(0,n.kg)("editor.appliance.chip_remote_off",W,"Remote off")),"on"===(null===(r=T.wrinklePrevent)||void 0===r?void 0:r.state)&&a("mdi:tshirt-crew",(0,n.kg)("editor.appliance.chip_wrinkle",W,"Wrinkle prevent")),ae&&a("mdi:door-open",(0,n.kg)("editor.appliance.chip_door_open",W,"Door open"),!0),I&&!1!==L.show_cooktop&&le>0&&a("mdi:fire",1===le?(0,n.kg)("editor.appliance.chip_burner_on",W,"1 burner on"):`${le} ${(0,n.kg)("editor.appliance.chip_burners_on",W,"burners on")}`,!0),oe&&a("mdi:water-alert",(0,n.kg)("editor.appliance.chip_filter",W,"Replace filter"),!0),oe&&T.filterReset&&o.push(i.qy`
          <button
            type="button"
            class="uc-appl-ctl uc-appl-chip uc-appl-chip--action"
            @click=${()=>{t.callService("button","press",{entity_id:T.filterReset.id}),this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon="mdi:restart"></ha-icon>${(0,n.kg)("editor.appliance.reset_filter",W,"Reset filter")}
          </button>
        `),o.length?i.qy`<div class="uc-appl-chips">${o}</div>`:i.s6})(),Fe=!1!==L.show_settings&&T.settingSelects.length?i.qy`
            <div class="uc-appl-settings">
              ${T.settingSelects.map(e=>{const r=Array.isArray(e.attrs.options)?e.attrs.options.map(e=>String(e)):[];return r.length?i.qy`
                  <label class="uc-appl-setting uc-appl-ctl">
                    <span class="uc-appl-setting__label">${this.featureLabel(e,T.prefix,T.deviceName)}</span>
                    <span class="uc-appl-setting__select-wrap">
                      <select
                        class="uc-appl-setting__select"
                        ?disabled=${"unavailable"===e.state}
                        .value=${e.state}
                        @change=${r=>{const i=r.target.value,n=e.id.split(".")[0];t.callService("input_select"===n?"input_select":"select","select_option",{entity_id:e.id,option:i}),this.triggerPreviewUpdate(!0)}}
                      >
                        ${r.map(t=>i.qy`<option value="${t}" ?selected=${t===e.state}>${d(t)}</option>`)}
                      </select>
                      <ha-icon icon="mdi:chevron-down"></ha-icon>
                    </span>
                  </label>
                `:i.s6})}
            </div>
          `:i.s6,Ce=!1!==L.show_feature_switches&&T.features.length?i.qy`
            <div class="uc-appl-features">
              ${T.features.map(e=>{const t="on"===e.state;return i.qy`
                  <button
                    type="button"
                    class="uc-appl-ctl uc-appl-feature ${t?"is-active":""}"
                    ?disabled=${"unavailable"===e.state}
                    aria-pressed="${t?"true":"false"}"
                    @click=${()=>ve(e.id)}
                  >
                    ${this.featureLabel(e,T.prefix,T.deviceName)}
                  </button>
                `})}
            </div>
          `:i.s6,De=(()=>{if(!1===L.show_metrics)return i.s6;const e=[];return T.power&&!Number.isNaN(Number(T.power.state))&&e.push(i.qy`
          <div class="uc-appl-metric">
            <span class="uc-appl-metric__label">${(0,n.kg)("editor.appliance.metric_power",W,"Power")}</span>
            <span class="uc-appl-metric__value" style="color: ${E};">${h(T.power.state)}<span class="uc-appl-metric__unit">${T.power.attrs.unit_of_measurement||"W"}</span></span>
          </div>
        `),T.energy&&!Number.isNaN(Number(T.energy.state))&&e.push(i.qy`
          <div class="uc-appl-metric">
            <span class="uc-appl-metric__label">${(0,n.kg)("editor.appliance.metric_energy",W,"Energy")}</span>
            <span class="uc-appl-metric__value" style="color: ${E};">${h(T.energy.state,2)}<span class="uc-appl-metric__unit">${T.energy.attrs.unit_of_measurement||"kWh"}</span></span>
          </div>
        `),e.length?i.qy`<div class="uc-appl-metrics">${e}</div>`:i.s6})(),Me=re&&te?i.qy`
          <div class="uc-appl-eta">
            <ha-icon icon="mdi:clock-end" style="--mdc-icon-size: 15px; color: ${de};"></ha-icon>
            <span class="uc-appl-eta__count" style="color: ${E};">${u(te)}</span>
            <span class="uc-appl-eta__sep" style="color: ${G};">·</span>
            <span style="color: ${G};">
              ${(0,n.kg)("editor.appliance.ends_at",W,"Ends")} ${function(e,t){try{return e.toLocaleTimeString(t||void 0,{hour:"numeric",minute:"2-digit"})}catch(t){return e.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}(te,null===(M=t.locale)||void 0===M?void 0:M.language)}
            </span>
          </div>
        `:i.s6,qe=(e,t,r,o,a)=>{if(!r&&!o)return i.s6;const s=(null==r?void 0:r.attrs.unit_of_measurement)||(null==o?void 0:o.attrs.unit_of_measurement)||"°",l=o?we(o):null;return i.qy`
        <div class="uc-appl-temp ${a?"uc-appl-temp--alert":""}">
          <div class="uc-appl-temp__head">
            <ha-icon icon="${t}"></ha-icon>
            <span>${e}</span>
            ${a?i.qy`<span class="uc-appl-temp__open">${(0,n.kg)("editor.appliance.open",W,"Open")}</span>`:i.s6}
          </div>
          ${r&&!Number.isNaN(Number(r.state))?i.qy`<div class="uc-appl-temp__value" style="color: ${E};">${h(r.state,0)}<span class="uc-appl-temp__unit">${s}</span></div>`:i.s6}
          ${o&&null!==l&&!1!==L.show_setpoint_controls&&o.id.startsWith("number.")?i.qy`
                <div class="uc-appl-temp__set">
                  <button type="button" class="uc-appl-ctl uc-appl-step" @click=${()=>ye(o,-1)} aria-label="${(0,n.kg)("editor.appliance.decrease",W,"Decrease")}">
                    <ha-icon icon="mdi:minus"></ha-icon>
                  </button>
                  <span class="uc-appl-temp__target" style="color: ${G};">${(0,n.kg)("editor.appliance.set_to",W,"Set")} ${l}${s}</span>
                  <button type="button" class="uc-appl-ctl uc-appl-step" @click=${()=>ye(o,1)} aria-label="${(0,n.kg)("editor.appliance.increase",W,"Increase")}">
                    <ha-icon icon="mdi:plus"></ha-icon>
                  </button>
                </div>
              `:o&&null!==l?i.qy`<div class="uc-appl-temp__target" style="color: ${G};">${(0,n.kg)("editor.appliance.set_to",W,"Set")} ${l}${s}</div>`:i.s6}
        </div>
      `},Ae=(()=>{if(!1===L.show_temperatures)return i.s6;if(Q)return i.qy`
          <div class="uc-appl-temps">
            ${qe((0,n.kg)("editor.appliance.fridge",W,"Fridge"),"mdi:fridge-top",T.fridgeTemp,T.fridgeSetpoint,ie)}
            ${qe((0,n.kg)("editor.appliance.freezer",W,"Freezer"),"mdi:snowflake",T.freezerTemp,T.freezerSetpoint,ne)}
          </div>
        `;if(I){const e=e=>(null==e?void 0:e.state)&&!["none","off","unknown","unavailable"].includes(e.state.toLowerCase())?d(e.state):null,t=e=>e&&Number(e.state)>0?e:null,r=(0,n.kg)("editor.appliance.oven",W,"Oven"),o=e(T.ovenMode),a=e(T.cavityMode),s=!(!T.cavityTemp&&!T.cavitySetpoint),l=qe(o?`${r} · ${o}`:r,"mdi:toaster-oven",T.ovenTemp,t(T.ovenSetpoint),ae);return l!==i.s6||s?i.qy`
          <div class="uc-appl-temps">
            ${l}
            ${s?qe(a?`${(0,n.kg)("editor.appliance.lower_oven",W,"Lower oven")} · ${a}`:(0,n.kg)("editor.appliance.lower_oven",W,"Lower oven"),"mdi:toaster-oven",T.cavityTemp,t(T.cavitySetpoint),!1):i.s6}
          </div>
        `:i.s6}return i.s6})(),Ne=!1!==L.show_status?i.qy`
            <div class="uc-appl-status">
              <span class="uc-appl-badge" style="--uc-appl-accent: ${ue};">
                ${"running"!==V||Q?i.s6:i.qy`<span class="uc-appl-dot"></span>`}
                ${he}
              </span>
              ${ee&&!Q&&"idle"!==V&&"off"!==V?i.qy`<span class="uc-appl-job" style="color: ${G};">${ee}</span>`:i.s6}
            </div>
          `:i.s6,Le={fridgeDoorOpen:ie,freezerDoorOpen:ne,doorOpen:ae,alert:oe,burners:se,lightOn:ce},We="hero"===O?Math.max(null!==(q=L.appliance_size)&&void 0!==q?q:150,110):"compact"===O?40:null!==(A=L.appliance_size)&&void 0!==A?A:m,Ue=(e,t="")=>!1!==L.show_graphic?i.qy`
            <div class="uc-appl-visual ${t} ${"running"!==V||Q?"":"uc-appl-visual--on"} ${"done"===V?"uc-appl-visual--done":""}" style="--uc-appl-accent: ${de};">
              ${this.renderGraphic(L,U,e,V,de,J,Le)}
            </div>
          `:i.s6;let je;je="compact"===O?i.qy`
        <div class="uc-appl uc-appl--compact" style="--uc-appl-accent: ${de};">
          <div class="uc-appl-compact__row">
            ${Ue(40,"uc-appl-visual--compact")}
            <div class="uc-appl-compact__meta">
              ${!1!==L.show_title?i.qy`<div class="uc-appl-title uc-appl-title--compact" style="color: ${E};">${H}</div>`:i.s6}
              ${!1!==L.show_status?i.qy`<div class="uc-appl-compact__status" style="color: ${ue};">
                    ${he}${ee&&"running"===V?i.qy`<span style="color: ${G};"> · ${ee}</span>`:i.s6}${re&&te?i.qy`<span style="color: ${G};"> · ${u(te)}</span>`:i.s6}
                  </div>`:i.s6}
            </div>
            ${!Q&&!1!==L.show_controls&&T.controlSelect?i.qy`
                  <div class="uc-appl-compact__ctl">
                    ${"running"===V&&xe?i.qy`<button type="button" class="uc-appl-ctl uc-appl-iconbtn" ?disabled=${ge||!$e} @click=${()=>_e("pause")} aria-label="${(0,n.kg)("editor.appliance.pause",W,"Pause")}"><ha-icon icon="mdi:pause"></ha-icon></button>`:be?i.qy`<button type="button" class="uc-appl-ctl uc-appl-iconbtn" ?disabled=${ge||!$e} @click=${()=>_e("run")} aria-label="${(0,n.kg)("editor.appliance.start",W,"Start")}"><ha-icon icon="mdi:play"></ha-icon></button>`:i.s6}
                  </div>
                `:i.s6}
            ${!Q&&!1!==L.show_power_button&&T.powerSwitch?i.qy`<button type="button" class="uc-appl-ctl uc-appl-iconbtn ${"on"===T.powerSwitch.state?"is-active":""}" ?disabled=${ge} @click=${me} aria-label="${(0,n.kg)("editor.appliance.power",W,"Power")}"><ha-icon icon="mdi:power"></ha-icon></button>`:i.s6}
            ${I&&!1!==L.show_controls&&T.ovenLight?i.qy`<button type="button" class="uc-appl-ctl uc-appl-iconbtn ${ce?"is-active":""}" ?disabled=${"unavailable"===T.ovenLight.state} @click=${()=>{t.callService("light","toggle",{entity_id:T.ovenLight.id}),this.triggerPreviewUpdate(!0)}} aria-label="${(0,n.kg)("editor.appliance.oven_light",W,"Light")}"><ha-icon icon="${ce?"mdi:lightbulb-on":"mdi:lightbulb-outline"}"></ha-icon></button>`:i.s6}
          </div>
        </div>
      `:"hero"===O?i.qy`
        <div class="uc-appl uc-appl--hero" style="--uc-appl-accent: ${de};">
          ${Ue(We,"uc-appl-visual--hero")}
          <div class="uc-appl-hero__ident">
            ${!1!==L.show_title?i.qy`<h2 class="uc-appl-title uc-appl-title--hero" style="color: ${E};">${H}</h2>`:i.s6}
            ${Ne}
          </div>
          ${Me}
          ${Ae}
          ${Se}
          ${ze}
          ${Fe}
          ${Pe}
          ${Ce}
          ${De}
        </div>
      `:i.qy`
        <div class="uc-appl uc-appl--standard" style="--uc-appl-accent: ${de};">
          <div class="uc-appl-standard__top">
            ${Ue(We)}
            <div class="uc-appl-standard__info">
              ${!1!==L.show_title?i.qy`<div class="uc-appl-title uc-appl-title--standard" style="color: ${E};">${H}</div>`:i.s6}
              ${Ne}
              ${Me}
              ${Pe}
            </div>
          </div>
          ${Ae}
          ${Se}
          ${ze}
          ${Fe}
          ${Ce}
          ${De}
        </div>
      `;const Re=this.buildStyleString(this.buildDesignStyles(e,t)),Te=this.getHoverEffectClass(e),Oe=this.createGestureHandlers(L.id,{tap_action:(null===(N=L.tap_action)||void 0===N?void 0:N.action)?Object.assign(Object.assign({},L.tap_action),{entity:R.id}):{action:"more-info",entity:R.id},hold_action:L.hold_action,double_tap_action:L.double_tap_action,entity:R.id,module:L},t,r,[".uc-appl-ctl"]);return i.qy`
      <style>${this.getStyles()}</style>
      <div
        class="uc-appl-wrapper ${Te}"
        data-uc-role="pane"
        style="background: ${B};${Re}"
        @pointerdown=${Oe.onPointerDown}
        @pointermove=${Oe.onPointerMove}
        @pointerup=${Oe.onPointerUp}
        @pointerleave=${Oe.onPointerLeave}
        @pointercancel=${Oe.onPointerCancel}
      >
        ${this.wrapWithAnimation(je,e,t)}
      </div>
    `}getStyles(){return`\n      ${o.m.getSliderStyles()}\n\n      .uc-appl-wrapper {\n        box-sizing: border-box;\n        border-radius: var(--uc-r-16, 16px);\n        padding: 16px;\n        overflow: hidden;\n      }\n\n      .uc-appl {\n        display: flex;\n        flex-direction: column;\n        gap: 14px;\n        width: 100%;\n        min-width: 0;\n      }\n      .uc-appl--hero { align-items: center; text-align: center; }\n\n      /* ── Graphic well ── */\n      .uc-appl-visual {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        border-radius: var(--uc-r-18, 18px);\n        padding: 10px 12px;\n        background:\n          radial-gradient(120% 90% at 50% 0%, color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 9%, transparent), transparent 70%),\n          color-mix(in srgb, var(--primary-text-color) 3%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        border: 1px solid color-mix(in srgb, var(--divider-color) 50%, transparent);\n        transition: box-shadow 0.25s ease, border-color 0.25s ease;\n      }\n      .uc-appl-visual--hero { border-radius: var(--uc-r-22, 22px); padding: 14px 18px; }\n      .uc-appl-visual--compact { padding: 4px 6px; border-radius: var(--uc-r-12, 12px); }\n      .uc-appl-visual--on {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 42%, transparent);\n        box-shadow: 0 4px 22px color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 16%, transparent);\n      }\n      .uc-appl-visual--done {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, #4CAF50) 45%, transparent);\n      }\n      .uc-appl-svg { display: block; overflow: visible; }\n\n      /* ── Standard layout ── */\n      .uc-appl-standard__top {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n        width: 100%;\n      }\n      .uc-appl-standard__info {\n        flex: 1;\n        min-width: 0;\n        display: flex;\n        flex-direction: column;\n        gap: 7px;\n        align-items: flex-start;\n      }\n\n      /* ── Compact layout ── */\n      .uc-appl-compact__row { display: flex; align-items: center; gap: 12px; width: 100%; }\n      .uc-appl-compact__meta { flex: 1; min-width: 0; }\n      .uc-appl-compact__status {\n        font-size: 0.8125rem;\n        font-weight: 600;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-appl-compact__ctl { display: flex; gap: 6px; }\n\n      /* ── Hero ── */\n      .uc-appl-hero__ident { display: flex; flex-direction: column; gap: 7px; align-items: center; }\n\n      /* ── Typography ── */\n      .uc-appl-title {\n        margin: 0;\n        font-weight: 700;\n        letter-spacing: -0.01em;\n        line-height: 1.25;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n      }\n      .uc-appl-title--hero { font-size: 1.25rem; font-weight: 800; letter-spacing: -0.02em; }\n      .uc-appl-title--standard { font-size: 1.0625rem; }\n      .uc-appl-title--compact { font-size: 0.9375rem; }\n\n      .uc-appl-status { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n      .uc-appl-badge {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 0.75rem;\n        font-weight: 700;\n        letter-spacing: 0.02em;\n        padding: 4px 11px;\n        border-radius: 999px;\n        color: var(--uc-appl-accent, var(--primary-color));\n        background: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 12%, transparent);\n        border: 1px solid color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 30%, transparent);\n        white-space: nowrap;\n      }\n      .uc-appl-dot {\n        width: 6px;\n        height: 6px;\n        border-radius: 50%;\n        background: currentColor;\n        box-shadow: 0 0 7px color-mix(in srgb, currentColor 65%, transparent);\n        animation: ucApplPulse 1.8s ease-in-out infinite;\n      }\n      .uc-appl-job { font-size: 0.8125rem; font-weight: 500; }\n\n      .uc-appl-eta {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 0.8125rem;\n      }\n      .uc-appl-eta__count { font-weight: 800; font-variant-numeric: tabular-nums; font-size: 0.9375rem; }\n\n      /* ── Controls ── */\n      .uc-appl-controls { display: flex; gap: 8px; flex-wrap: wrap; width: 100%; }\n      .uc-appl--hero .uc-appl-controls { justify-content: center; }\n      .uc-appl-btn {\n        font: inherit;\n        font-size: 0.8125rem;\n        font-weight: 700;\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 8px 16px;\n        border-radius: 999px;\n        cursor: pointer;\n        border: 1px solid color-mix(in srgb, var(--divider-color) 70%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--secondary-text-color);\n        transition: background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s;\n        white-space: nowrap;\n        flex: 1;\n        justify-content: center;\n        min-width: 0;\n      }\n      .uc-appl-btn ha-icon { --mdc-icon-size: 17px; }\n      .uc-appl-btn.is-active {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 55%, transparent);\n        background: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 14%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--uc-appl-accent, var(--primary-color));\n        box-shadow: 0 2px 12px color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 12%, transparent);\n      }\n      .uc-appl-btn:hover:not(:disabled):not(.is-active) {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 30%, var(--divider-color));\n        color: var(--primary-text-color);\n      }\n      .uc-appl-btn:disabled { opacity: 0.4; cursor: not-allowed; }\n      .uc-appl-btn--power { flex: 0 0 auto; padding: 8px 12px; }\n\n      .uc-appl-iconbtn {\n        font: inherit;\n        width: 36px;\n        height: 36px;\n        padding: 0;\n        border-radius: 50%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: 1px solid color-mix(in srgb, var(--divider-color) 70%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--secondary-text-color);\n        flex-shrink: 0;\n        transition: background 0.15s, border-color 0.15s, color 0.15s;\n      }\n      .uc-appl-iconbtn ha-icon { --mdc-icon-size: 18px; }\n      .uc-appl-iconbtn.is-active,\n      .uc-appl-iconbtn:hover:not(:disabled) {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 45%, transparent);\n        color: var(--uc-appl-accent, var(--primary-color));\n      }\n      .uc-appl-iconbtn:disabled { opacity: 0.4; cursor: not-allowed; }\n\n      /* ── Status chips ── */\n      .uc-appl-chips { display: flex; flex-wrap: wrap; gap: 6px; }\n      .uc-appl--hero .uc-appl-chips { justify-content: center; }\n      .uc-appl-chip {\n        display: inline-flex;\n        align-items: center;\n        gap: 5px;\n        font-size: 0.6875rem;\n        font-weight: 600;\n        letter-spacing: 0.02em;\n        padding: 3.5px 10px;\n        border-radius: 999px;\n        color: var(--secondary-text-color);\n        background: color-mix(in srgb, var(--divider-color) 14%, transparent);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 40%, transparent);\n        white-space: nowrap;\n      }\n      .uc-appl-chip ha-icon { --mdc-icon-size: 13px; }\n      .uc-appl-chip--warn {\n        color: var(--warning-color, #FF9800);\n        background: color-mix(in srgb, var(--warning-color, #FF9800) 12%, transparent);\n        border-color: color-mix(in srgb, var(--warning-color, #FF9800) 35%, transparent);\n      }\n      .uc-appl-chip--action {\n        font: inherit;\n        font-size: 0.6875rem;\n        font-weight: 700;\n        cursor: pointer;\n        color: var(--uc-appl-accent, var(--primary-color));\n        background: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 12%, transparent);\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 40%, transparent);\n        transition: background 0.14s;\n      }\n      .uc-appl-chip--action:hover {\n        background: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 20%, transparent);\n      }\n\n      /* ── Cycle setting dropdowns ── */\n      .uc-appl-settings {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n        gap: 8px;\n        width: 100%;\n      }\n      .uc-appl-setting {\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n        min-width: 0;\n      }\n      .uc-appl-setting__label {\n        font-size: 0.625rem;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.08em;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-appl-setting__select-wrap {\n        position: relative;\n        display: flex;\n        align-items: center;\n      }\n      .uc-appl-setting__select-wrap ha-icon {\n        --mdc-icon-size: 16px;\n        position: absolute;\n        right: 9px;\n        color: var(--secondary-text-color);\n        pointer-events: none;\n      }\n      .uc-appl-setting__select {\n        font: inherit;\n        font-size: 0.8125rem;\n        font-weight: 600;\n        width: 100%;\n        padding: 7px 28px 7px 11px;\n        border-radius: var(--uc-r-10, 10px);\n        cursor: pointer;\n        color: var(--primary-text-color);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 60%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        appearance: none;\n        -webkit-appearance: none;\n        outline: none;\n        transition: border-color 0.14s;\n      }\n      .uc-appl-setting__select:hover:not(:disabled),\n      .uc-appl-setting__select:focus-visible {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 45%, transparent);\n      }\n      .uc-appl-setting__select:disabled { opacity: 0.4; cursor: not-allowed; }\n      .uc-appl-setting__select option {\n        background: var(--uc-pane-bg, var(--card-background-color, #1f1f1f));\n        color: var(--primary-text-color);\n      }\n\n      /* ── Feature switches ── */\n      .uc-appl-features { display: flex; flex-wrap: wrap; gap: 7px; width: 100%; }\n      .uc-appl--hero .uc-appl-features { justify-content: center; }\n      .uc-appl-feature {\n        font: inherit;\n        font-size: 0.75rem;\n        font-weight: 600;\n        padding: 6px 13px;\n        border-radius: 999px;\n        cursor: pointer;\n        border: 1px solid color-mix(in srgb, var(--divider-color) 70%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 7%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--secondary-text-color);\n        transition: background 0.14s, border-color 0.14s, color 0.14s, box-shadow 0.14s;\n        white-space: nowrap;\n      }\n      .uc-appl-feature.is-active {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 55%, transparent);\n        background: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 13%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--uc-appl-accent, var(--primary-color));\n        font-weight: 700;\n        box-shadow: 0 2px 10px color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 10%, transparent);\n      }\n      .uc-appl-feature:hover:not(:disabled):not(.is-active) {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 28%, var(--divider-color));\n        color: var(--primary-text-color);\n      }\n      .uc-appl-feature:disabled { opacity: 0.4; cursor: not-allowed; }\n\n      /* ── Metrics ── */\n      .uc-appl-metrics {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));\n        gap: 8px;\n        width: 100%;\n      }\n      .uc-appl-metric {\n        display: flex;\n        flex-direction: column;\n        gap: 2px;\n        padding: 9px 12px;\n        border-radius: var(--uc-r-12, 12px);\n        background: color-mix(in srgb, var(--divider-color) 10%, transparent);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 32%, transparent);\n        min-width: 0;\n      }\n      .uc-appl--hero .uc-appl-metric { align-items: center; }\n      .uc-appl-metric__label {\n        font-size: 0.625rem;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.09em;\n        color: var(--secondary-text-color);\n      }\n      .uc-appl-metric__value {\n        font-size: 1rem;\n        font-weight: 800;\n        font-variant-numeric: tabular-nums;\n        letter-spacing: -0.01em;\n      }\n      .uc-appl-metric__unit {\n        font-size: 0.6875rem;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        margin-left: 3px;\n      }\n\n      /* ── Fridge temperature tiles ── */\n      .uc-appl-temps {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 10px;\n        width: 100%;\n      }\n      .uc-appl-temp {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n        padding: 12px 14px;\n        border-radius: var(--uc-r-14, 14px);\n        background: color-mix(in srgb, var(--divider-color) 10%, transparent);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 32%, transparent);\n        min-width: 0;\n      }\n      .uc-appl-temp--alert {\n        border-color: color-mix(in srgb, var(--warning-color, #FF9800) 45%, transparent);\n        background: color-mix(in srgb, var(--warning-color, #FF9800) 7%, transparent);\n      }\n      .uc-appl-temp__head {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 0.6875rem;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.08em;\n        color: var(--secondary-text-color);\n      }\n      .uc-appl-temp__head ha-icon { --mdc-icon-size: 14px; color: var(--uc-appl-accent, var(--primary-color)); }\n      .uc-appl-temp__open {\n        margin-left: auto;\n        color: var(--warning-color, #FF9800);\n        font-size: 0.625rem;\n      }\n      .uc-appl-temp__value {\n        font-size: 1.7rem;\n        font-weight: 800;\n        font-variant-numeric: tabular-nums;\n        letter-spacing: -0.03em;\n        line-height: 1;\n      }\n      .uc-appl-temp__unit { font-size: 0.9375rem; font-weight: 600; color: var(--secondary-text-color); margin-left: 2px; }\n      .uc-appl-temp__set { display: flex; align-items: center; gap: 8px; margin-top: 2px; }\n      .uc-appl-temp__target { font-size: 0.75rem; font-weight: 600; flex: 1; text-align: center; white-space: nowrap; }\n      .uc-appl-step {\n        font: inherit;\n        width: 26px;\n        height: 26px;\n        padding: 0;\n        border-radius: 50%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--secondary-text-color);\n        flex-shrink: 0;\n        transition: border-color 0.14s, color 0.14s;\n      }\n      .uc-appl-step ha-icon { --mdc-icon-size: 15px; }\n      .uc-appl-step:hover {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 40%, transparent);\n        color: var(--uc-appl-accent, var(--primary-color));\n      }\n\n      /* ── Animations ── */\n      @keyframes ucApplSpin {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n      @keyframes ucApplPulse {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.35; }\n      }\n      @keyframes ucApplBubble {\n        0% { transform: translateY(0); opacity: 0.5; }\n        100% { transform: translateY(-16px); opacity: 0; }\n      }\n      @keyframes ucApplHeat {\n        0%, 100% { transform: translateY(0); opacity: 0.35; }\n        50% { transform: translateY(-3px); opacity: 0.85; }\n      }\n      @keyframes ucApplSteam {\n        0% { transform: translateY(0); opacity: 0; }\n        30% { opacity: 0.7; }\n        100% { transform: translateY(-7px); opacity: 0; }\n      }\n      @keyframes ucApplDoorGlow {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.45; }\n      }\n\n      .uc-appl-drum--spin { animation: ucApplSpin 1.7s linear infinite; }\n      .uc-appl-drum--paused { opacity: 0.85; }\n      .uc-appl-led { animation: ucApplPulse 1.5s ease-in-out infinite; }\n      .uc-appl-burner--on { animation: ucApplPulse 1.9s ease-in-out infinite; }\n      .uc-appl-ring { animation: ucApplPulse 3s ease-in-out infinite; }\n      .uc-appl-fx--on .uc-appl-bubble--a { animation: ucApplBubble 1.7s ease-in infinite; }\n      .uc-appl-fx--on .uc-appl-bubble--b { animation: ucApplBubble 2s ease-in infinite 0.4s; }\n      .uc-appl-fx--on .uc-appl-bubble--c { animation: ucApplBubble 1.4s ease-in infinite 0.8s; }\n      .uc-appl-fx--on .uc-appl-heat { animation: ucApplHeat 1.4s ease-in-out infinite; }\n      .uc-appl-fx--on .uc-appl-heat--b { animation-delay: 0.2s; }\n      .uc-appl-fx--on .uc-appl-heat--c { animation-delay: 0.4s; }\n      .uc-appl-fx--on .uc-appl-steam { animation: ucApplSteam 2.2s ease-out infinite; }\n      .uc-appl-fx--on .uc-appl-steam--b { animation-delay: 0.6s; }\n      .uc-appl-fx--on .uc-appl-steam--c { animation-delay: 1.2s; }\n      .uc-appl-spray--spin { animation: ucApplSpin 2.6s linear infinite; }\n      .uc-appl-door-open { animation: ucApplDoorGlow 1.6s ease-in-out infinite; }\n\n      @media (prefers-reduced-motion: reduce) {\n        .uc-appl-drum--spin,\n        .uc-appl-led,\n        .uc-appl-ring,\n        .uc-appl-dot,\n        .uc-appl-spray--spin,\n        .uc-appl-door-open,\n        .uc-appl-burner--on,\n        .uc-appl-fx--on * { animation: none !important; }\n      }\n\n      @media (max-width: 420px) {\n        .uc-appl-standard__top { flex-direction: column; text-align: center; }\n        .uc-appl-standard__info { align-items: center; }\n        .uc-appl-temps { grid-template-columns: 1fr; }\n      }\n    `}}class b extends f{constructor(){super(...arguments),this.cardType="washer",this.metadata={type:"washer",title:"Washer",description:"Animated washing machine card with cycle status, remaining time, controls, and energy use",author:"WJD Designs",version:"1.0.0",icon:"mdi:washing-machine",category:"interactive",tags:["washer","washing machine","laundry","appliance","smartthings","cycle","animated","interactive"]}}}class x extends f{constructor(){super(...arguments),this.cardType="dryer",this.metadata={type:"dryer",title:"Dryer",description:"Animated dryer card with cycle status, remaining time, controls, and energy use",author:"WJD Designs",version:"1.0.0",icon:"mdi:tumble-dryer",category:"interactive",tags:["dryer","tumble dryer","laundry","appliance","smartthings","cycle","animated","interactive"]}}}class k extends f{constructor(){super(...arguments),this.cardType="dishwasher",this.metadata={type:"dishwasher",title:"Dishwasher",description:"Animated dishwasher card with cycle status, remaining time, controls, and wash options",author:"WJD Designs",version:"1.0.0",icon:"mdi:dishwasher",category:"interactive",tags:["dishwasher","kitchen","appliance","smartthings","cycle","animated","interactive"]}}}class $ extends f{constructor(){super(...arguments),this.cardType="fridge",this.metadata={type:"fridge",title:"Refrigerator",description:"Refrigerator card with temperatures, setpoints, door alerts, and ice/cooling controls",author:"WJD Designs",version:"1.0.0",icon:"mdi:fridge-outline",category:"interactive",tags:["fridge","refrigerator","freezer","kitchen","appliance","smartthings","animated","interactive"]}}}class S extends f{constructor(){super(...arguments),this.cardType="range",this.metadata={type:"range",title:"Range & Oven",description:"Range card with live cooktop burner indicators, oven status and temperature, dual-oven support, and light control",author:"WJD Designs",version:"1.0.0",icon:"mdi:stove",category:"interactive",tags:["range","oven","stove","cooktop","kitchen","appliance","smartthings","animated","interactive"]}}}}};