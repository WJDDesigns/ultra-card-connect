export const __webpack_esm_ids__=[9278];export const __webpack_esm_modules__={3309(e,t,r){r.d(t,{UltraDishwasherModule:()=>A,UltraDryerModule:()=>q,UltraFridgeModule:()=>L,UltraRangeModule:()=>N,UltraWasherModule:()=>M});var i=r(2618),n=r(935),o=r(8964),a=r(3307);const s=new Set(["run","running","wash","washing","dry","drying","active","rinse","rinsing","spin","spinning","busy","in_use","working","cleaning","heating","cooling","cooldown","steam","prewash","pre_wash","refreshing","program_running","on","preheat","preheating","cooking","baking","roasting","broiling","warming","water_intake","program_started","läuft","laeuft","in_betrieb"]),l=new Set(["pause","paused","hold","program_interrupted","delayed_start","delay_wash","time_delay","delayedstart","actionrequired","action_required","pausiert","startverzögerung","aktion_erforderlich"]),c=new Set(["finish","finished","done","complete","completed","end","ended","program_ended","wrinkle_prevent","anticrease","remove_laundry","rinse_hold","fertig","beendet"]),p=new Set(["stop","stopped","idle","ready","standby","none","off","inactive","not_running","waiting_to_start","aborting","bereit","inaktiv","abbrechen","wird_abgebrochen"]),d=[["error",new Set(["error","fault","failure","problem","failure_mode","fehler"])],["done",c],["paused",l],["running",s],["idle",p]],u=/^(?:device_state|(?:washer|dryer|dishwasher|machine)_sub_?state|sub_?state|state|washer|dryer|dishwasher)_/,h=/^(?:device[_\s-]state|(?:washer|dryer|dishwasher|machine)[_\s-]sub[_\s-]?state|sub[_\s-]?state)[_\s-]/i,g=/^[A-Za-z][\w]*(?:\.[\w]+){2,}$/,_=/^[a-z][a-z_]*?_program_(?=[a-z\d])/;function m(e){return g.test(e)?e.slice(e.lastIndexOf(".")+1):e}function v(e){let t=m(e.trim());for(t=t.replace(_,"");h.test(t);)t=t.replace(h,"");return t||e}function y(e){for(const[t,r]of d)if(r.has(e))return t;return null}function f(e){const t=function(e){return m(e.trim()).toLowerCase().replace(/[\s-]+/g,"_")}(String(null!=e?e:""));if(!t||"unavailable"===t||"unknown"===t)return{phase:"unavailable",explicit:!0};const r=y(t);if(r)return{phase:r,explicit:!0};let i=t;for(;u.test(i);)i=i.replace(u,"");if(i&&i!==t){if("on"===i)return{phase:"idle",explicit:!1};const e=y(i);if(e)return{phase:e,explicit:!0}}const n=function(e){const t=`_${e}_`;for(const[e,r]of d)for(const i of r)if(t.includes(`_${i}_`))return e;return null}(i||t);return n?{phase:n,explicit:!0}:{phase:"idle",explicit:!1}}function w(e){return e.replace(/([a-z\d])([A-Z])/g,"$1 $2").replace(/[_-]+/g," ").split(/\s+/).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ")}function b(e){const t=Math.max(1,Math.round((e.getTime()-Date.now())/6e4)),r=Math.floor(t/60),i=t%60;return r<=0?`${i}m`:i>0?`${r}h ${i}m`:`${r}h`}function x(e,t=1){const r=Number(e);return Number.isNaN(r)?e:Math.abs(r)>=100?String(Math.round(r)):String(Math.round(r*10**t)/10**t)}const $={washer:{icon:"mdi:washing-machine",fallbackName:"Washer"},dryer:{icon:"mdi:tumble-dryer",fallbackName:"Dryer"},dishwasher:{icon:"mdi:dishwasher",fallbackName:"Dishwasher"},fridge:{icon:"mdi:fridge-outline",fallbackName:"Refrigerator"},range:{icon:"mdi:stove",fallbackName:"Range"}};function k(e){const t=e.state.toLowerCase();if("on"===t||s.has(t))return!0;const r=Number(e.state);return!Number.isNaN(r)&&r>0}const S=104,z=/(^|_)(bsh_common|laundry_care|dishcare|cooking|refrigeration|consumer_products)_\w*?(setting|option|status|command|program)/,P=[/operation_?state/,/bsh_common_/,/machine_state/,/run_state/,/operating_state/,/job_state/,/program_phase/,/completion_time/,/remain(ing)?_time/,/(^|_)door/,/temperature/,/(^|_)power/,/(^|_)energy/,/filter_status/,/child_lock/,/remote_control/,/sub_?state/],F=[["washer","washing"],["dryer"],["dishwasher"],["fridge","refrigerator","freezer"],["oven","range","stove","cooktop"]];function C(e){const t=e.split("_");for(let e=0;e<F.length;e++)if(t.some(t=>F[e].includes(t)))return e;return-1}class D extends a.m{constructor(){super(...arguments),this.handlesOwnDesignStyles=!0,this._pendingSetpoints=new Map}createDefault(e,t){return{id:e||this.generateId(this.cardType),type:this.cardType,entity:"",name:"",power_switch_entity:"",machine_state_entity:"",job_state_entity:"",completion_time_entity:"",power_entity:"",energy_entity:"",child_lock_entity:"",remote_control_entity:"",door_entity:"",fridge_door_entity:"",freezer_door_entity:"",fridge_temp_entity:"",freezer_temp_entity:"",fridge_setpoint_entity:"",freezer_setpoint_entity:"",filter_status_entity:"",oven_mode_entity:"",oven_temp_entity:"",oven_setpoint_entity:"",second_cavity_state_entity:"",second_cavity_temp_entity:"",second_cavity_setpoint_entity:"",second_cavity_mode_entity:"",light_entity:"",stop_button_entity:"",layout:"standard",show_title:!0,show_status:!0,show_graphic:!0,show_completion_time:!0,show_controls:!0,show_power_button:!0,show_status_chips:!0,show_feature_switches:!0,show_settings:!0,show_metrics:!0,show_temperatures:!0,show_setpoint_controls:!0,show_cooktop:!0,enable_animations:!0,appliance_size:S,active_color:"",done_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=[];return e.id||t.push("Module ID is required"),e.type!==this.cardType&&t.push(`Module type must be ${this.cardType}`),{valid:0===t.length,errors:t}}getRef(e,t,r){var i;const n=this.resolveEntity(t,r)||t;if(!n||!(null===(i=null==e?void 0:e.states)||void 0===i?void 0:i[n]))return null;const o=e.states[n];return{id:n,state:String(o.state),attrs:o.attributes||{}}}deviceEntities(e,t){var r,i;const n=e,o=null===(i=null===(r=n.entities)||void 0===r?void 0:r[t])||void 0===i?void 0:i.device_id;if(!o||!n.entities)return null;const a=Object.keys(n.entities).filter(t=>{var r;return(null===(r=n.entities[t])||void 0===r?void 0:r.device_id)===o&&!!e.states[t]});return a.length?new Set(a):null}deviceName(e,t){var r,i,n;const o=e,a=null===(i=null===(r=o.entities)||void 0===r?void 0:r[t])||void 0===i?void 0:i.device_id,s=a?null===(n=o.devices)||void 0===n?void 0:n[a]:void 0;return(null==s?void 0:s.name_by_user)||(null==s?void 0:s.name)||void 0}devicePrefix(e,t){const r=t.split(".")[1]||"";if(!r)return"";const i=r.split("_"),n=C(r),o=Object.keys(e.states).map(e=>e.split(".")[1]||"");let a=r,s=-1;for(let e=i.length;e>=1;e--){const t=i.slice(0,e).join("_");let l=0;for(const e of o){if(e===r)continue;if(e!==t&&!e.startsWith(`${t}_`))continue;const i=C(e);-1!==i&&-1!==n&&i!==n||P.some(t=>t.test(e))&&l++}l>s&&(s=l,a=t)}return a}translationKey(e,t){var r,i;return(null===(i=null===(r=e.entities)||void 0===r?void 0:r[t])||void 0===i?void 0:i.translation_key)||void 0}autoFind(e,t,r,i,n,o=[]){if(!t&&!r)return;const a=(t?Array.from(t):Object.keys(e.states)).filter(e=>{const[n,o]=e.split(".");return!!i.includes(n)&&(!!t||o===r||(null==o?void 0:o.startsWith(`${r}_`)))}).sort();if(t)for(const t of o){const r=a.find(r=>this.translationKey(e,r)===t);if(r)return r}for(const e of n){const t=a.find(t=>e.test(t.split(".")[1]||""));if(t)return t}}link(e,t,r,i,n,o,a,s=[]){if(null==r?void 0:r.trim())return this.getRef(e,r,t);const l=this.autoFind(e,i,n,o,a,s);return l?this.getRef(e,l,t):null}resolveLinks(e,t,r,i){var n,o,a,s;const l=this.deviceEntities(t,i.id),c=this.devicePrefix(t,i.id),p=this.deviceName(t,i.id),d=(e,i,n,o=[])=>this.link(t,r,e,l,c,i,n,o),u=d(e.power_switch_entity,["switch"],[new RegExp(`^${c}(_\\d+)?$`),/(^|_)power(_switch)?(_\d+)?$/,/bsh_common_setting_powerstate(_\d+)?$/],["power"]),h=d(e.machine_state_entity,["sensor"],[/machine_state(_\d+)?$/,/run_state(_\d+)?$/,/operating_state(_\d+)?$/,/operation_?state(_\d+)?$/,new RegExp(`^${c}_status(_\\d+)?$`),new RegExp(`^${c}_state(_\\d+)?$`)],["operation_state"]),g=null!==(n=d(e.job_state_entity,["sensor"],[/job_state(_\d+)?$/,/program_?phase(_\d+)?$/,/(^|_)phase(_\d+)?$/,/current_course(_\d+)?$/,/sub_?state(_\d+)?$/,/(^|_)active_program(_\d+)?$/]))&&void 0!==n?n:(null===(o=e.job_state_entity)||void 0===o?void 0:o.trim())?null:d(void 0,["select"],[],["active_program"]),_=d(e.completion_time_entity,["sensor"],[/completion_time(_\d+)?$/,/complete_time(_\d+)?$/,/(finish|end)_time(_\d+)?$/,/remain(ing)?_time(_\d+)?$/,/remaining_?program_?time(_\d+)?$/,/time_remaining(_\d+)?$/],["program_finish_time"]),m=d(e.power_entity,["sensor"],[new RegExp(`^${c}_power(_\\d+)?$`),/(^|_)power(_\d+)?$/]),v=d(e.energy_entity,["sensor"],[new RegExp(`^${c}_energy(_\\d+)?$`),/(^|_)energy(_\d+)?$/]),y=d(e.child_lock_entity,["binary_sensor","switch"],[/child_?lock(_\d+)?$/],["child_lock"]),f=d(e.remote_control_entity,["binary_sensor"],[/remote_control(_\d+)?$/,/remote_?control_?active(_\d+)?$/],["remote_control"]),w="fridge"!==this.cardType?null!==(a=d(e.door_entity,["binary_sensor"],[/(^|_)door(_state)?(_\d+)?$/,/bsh_common_status_doorstate(_\d+)?$/],["door"]))&&void 0!==a?a:(null===(s=e.door_entity)||void 0===s?void 0:s.trim())?null:d(void 0,["sensor"],[/bsh_common_status_doorstate(_\d+)?$/],["door"]):null,b="fridge"===this.cardType,x={pause:b?null:d(void 0,["button"],[/(^|_)pause_program(_\d+)?$/],["pause_program"]),resume:b?null:d(void 0,["button"],[/(^|_)resume_program(_\d+)?$/],["resume_program"]),stop:b?null:d(void 0,["button"],[/(^|_)stop_program(_\d+)?$/],["stop_program"]),startPause:b?null:d(void 0,["button"],[/(^|_)start_pause(_\d+)?$/])};null==x.stop&&x.startPause&&!b&&(x.stop=d(void 0,["button"],[/(^|_)stop(_\d+)?$/]));const $=d(void 0,["binary_sensor"],[/wrinkle_prevent_active(_\d+)?$/]),k=i.id.split(".")[0];let S=null;if("select"===k||"input_select"===k)S=i;else if("fridge"!==this.cardType){const e=this.autoFind(t,l,c,["select"],[new RegExp(`^${c}(_\\d+)?$`)]);S=e?this.getRef(t,e,r):null}const z=d(e.fridge_door_entity,["binary_sensor"],[/fridge_door(_\d+)?$/]),P=d(e.freezer_door_entity,["binary_sensor"],[/freezer_door(_\d+)?$/]),F=d(e.fridge_temp_entity,["sensor"],[/fridge_temperature(_\d+)?$/]),C=d(e.freezer_temp_entity,["sensor"],[/freezer_temperature(_\d+)?$/]),D=d(e.fridge_setpoint_entity,["number"],[/fridge_temperature(_\d+)?$/]),M=d(e.freezer_setpoint_entity,["number"],[/freezer_temperature(_\d+)?$/]),q=d(e.filter_status_entity,["binary_sensor"],[/filter_status(_\d+)?$/]),A=d(void 0,["button"],[/reset_water_filter(_\d+)?$/]),L="range"===this.cardType,N=L?d(e.oven_mode_entity,["sensor"],[/oven_mode(_\d+)?$/,/(^|_)mode(_\d+)?$/]):null,W=L?d(e.oven_temp_entity,["sensor"],[/temperature_measurement(_\d+)?$/,/oven_temperature(_\d+)?$/,/current_temperature(_\d+)?$/]):null,U=L?d(e.oven_setpoint_entity,["sensor","number"],[/oven_set_?point(_\d+)?$/,/set_?point(_\d+)?$/,/target_temperature(_\d+)?$/]):null,j=L?d(e.second_cavity_state_entity,["sensor"],[/second_cavity_machine_state(_\d+)?$/]):null,R=L?d(e.second_cavity_temp_entity,["sensor"],[/second_cavity_temperature(_\d+)?$/]):null,T=L?d(e.second_cavity_setpoint_entity,["sensor","number"],[/second_cavity_set_?point(_\d+)?$/]):null,O=L?d(e.second_cavity_mode_entity,["sensor"],[/second_cavity_(oven_)?mode(_\d+)?$/]):null,J=L?d(e.light_entity,["light"],[/(^|_)light(_\d+)?$/]):null,E=L?d(e.stop_button_entity,["button"],[/(^|_)stop(_\d+)?$/]):null,G=e=>(l?Array.from(l):Object.keys(t.states)).filter(t=>{const[r,i]=t.split(".");return!(!e.includes(r)||!l&&!(null==i?void 0:i.startsWith(`${c}_`))||new RegExp(`^${c}(_\\d+)?$`).test(i||""))}).sort();let B,I,Q;return B=Array.isArray(e.feature_switch_entities)?e.feature_switch_entities.map(e=>this.getRef(t,e,r)).filter(e=>!!e):G(["switch"]).filter(e=>e!==(null==u?void 0:u.id)).map(e=>this.getRef(t,e,r)).filter(e=>!!e),I=Array.isArray(e.cooktop_entities)?e.cooktop_entities.map(e=>this.getRef(t,e,r)).filter(e=>!!e):L?G(["binary_sensor","switch","sensor"]).filter(e=>/(burner|cooktop|element|heater_zone)/.test(e.split(".")[1]||"")).map(e=>this.getRef(t,e,r)).filter(e=>!!e):[],Q=Array.isArray(e.setting_select_entities)?e.setting_select_entities.map(e=>this.getRef(t,e,r)).filter(e=>!!e):"fridge"===this.cardType?[]:G(["select","input_select"]).filter(e=>e!==(null==S?void 0:S.id)).map(e=>this.getRef(t,e,r)).filter(e=>!!e),{pool:l,prefix:c,deviceName:p,powerSwitch:u,machineState:h,jobState:g,completion:_,power:m,energy:v,childLock:y,remoteControl:f,door:w,wrinklePrevent:$,controlSelect:S,programButtons:x,fridgeDoor:z,freezerDoor:P,fridgeTemp:F,freezerTemp:C,fridgeSetpoint:D,freezerSetpoint:M,filterStatus:q,filterReset:A,ovenMode:N,ovenTemp:W,ovenSetpoint:U,cavityState:j,cavityTemp:R,cavitySetpoint:T,cavityMode:O,ovenLight:J,stopButton:E,cooktop:I,features:B,settingSelects:Q}}featureLabel(e,t,r,i,o){const a=i?this.translationKey(i,e.id):void 0;if(a&&["programs","active_program","selected_program"].includes(a))return(0,n.kg)("editor.appliance.program",o||"en","Program");const s=e.id.split(".")[1]||"",l=String(e.attrs.friendly_name||""),c=function(e,t){if(!e||!t)return"";const r=e.toLowerCase().indexOf(t.toLowerCase());if(r<0||r>24)return"";const i=e.slice(0,r);return i&&!/^[\p{L}\d .&'-]*\s$/u.test(i)?"":e.slice(r+t.length).replace(/^[\s:–-]+/,"").trim()}(l,r);return c||(!z.test(s)&&s.startsWith(`${t}_`)?w(s.slice(t.length+1).replace(/^(\d{6,}|[0-9a-f]{12,})_/,"")):l||w(s))}optionLabel(e,t,r){var i;const n=e.formatEntityState,o=null===(i=e.states)||void 0===i?void 0:i[t.id];if(n&&o)try{const e=n(o,r);if(e&&e!==r)return e}catch(e){}return w(v(r))}getAutoLists(e,t,r){const i=this.getRef(t,e.entity,r);if(!i)return{features:[],settings:[],cooktop:[]};const n=this.resolveLinks(Object.assign(Object.assign({},e),{feature_switch_entities:void 0,setting_select_entities:void 0,cooktop_entities:void 0}),t,r,i);return{features:n.features.map(e=>e.id),settings:n.settingSelects.map(e=>e.id),cooktop:n.cooktop.map(e=>e.id)}}renderGeneralTab(e,t,r,o){var a,s,l;const c=e,p=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",d=this.cardType,u="fridge"===d,h="range"===d,g=this.getAutoLists(c,t,r),_=(e,n,a,s)=>i.qy`
      <div style="margin-bottom: 12px;">
        ${this.renderEntityPickerWithVariables(t,r,e,n||"",t=>{o({[e]:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)},a,s)}
      </div>
    `;return i.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,n.kg)("editor.appliance.entity_section",p,"Main entity"),u?(0,n.kg)("editor.appliance.entity_section_desc_fridge",p,"Pick any entity of the refrigerator device (e.g. a temperature or door sensor). Related sensors and switches are found automatically — works with SmartThings, LG ThinQ, and similar integrations."):h?(0,n.kg)("editor.appliance.entity_section_desc_range",p,"Pick the oven machine-state sensor (e.g. sensor.range_oven_machine_state) or any entity of the range. Oven temperature, modes, burners, and the light are found automatically."):(0,n.kg)("editor.appliance.entity_section_desc",p,"Pick the machine-state select or sensor (e.g. select.washer or a run-state sensor). Related sensors and switches are found automatically — works with SmartThings, LG ThinQ, Home Connect (Bosch, Siemens, Neff), and similar integrations."),[])}
        <div style="margin-bottom: 16px;">
          ${this.renderEntityPickerWithVariables(t,r,"entity",c.entity||"",e=>{o({entity:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},["select","input_select","sensor","switch","binary_sensor","number"],(0,n.kg)("editor.appliance.entity",p,"Main entity"))}
        </div>
        ${this.renderSettingsSection("","",[{title:(0,n.kg)("editor.appliance.name",p,"Name"),description:(0,n.kg)("editor.appliance.name_desc",p,"Leave empty to use the entity name"),hass:t,data:{name:c.name||""},schema:[this.textField("name")],onChange:e=>{var t,r;o({name:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.name)&&void 0!==r?r:""}),this.triggerPreviewUpdate()}}])}

        ${this.renderSettingsSection((0,n.kg)("editor.appliance.links_section",p,"Linked entities"),(0,n.kg)("editor.appliance.links_section_desc",p,"Everything below is auto-detected from the main entity. Only set a field when detection picks the wrong entity."),[])}
        ${this.renderConditionalFieldsGroup((0,n.kg)("editor.appliance.links_group",p,"Optional overrides"),u?i.qy`
                ${_("fridge_temp_entity",c.fridge_temp_entity,["sensor"],(0,n.kg)("editor.appliance.fridge_temp",p,"Fridge temperature"))}
                ${_("freezer_temp_entity",c.freezer_temp_entity,["sensor"],(0,n.kg)("editor.appliance.freezer_temp",p,"Freezer temperature"))}
                ${_("fridge_setpoint_entity",c.fridge_setpoint_entity,["number"],(0,n.kg)("editor.appliance.fridge_setpoint",p,"Fridge setpoint"))}
                ${_("freezer_setpoint_entity",c.freezer_setpoint_entity,["number"],(0,n.kg)("editor.appliance.freezer_setpoint",p,"Freezer setpoint"))}
                ${_("fridge_door_entity",c.fridge_door_entity,["binary_sensor"],(0,n.kg)("editor.appliance.fridge_door",p,"Fridge door"))}
                ${_("freezer_door_entity",c.freezer_door_entity,["binary_sensor"],(0,n.kg)("editor.appliance.freezer_door",p,"Freezer door"))}
                ${_("filter_status_entity",c.filter_status_entity,["binary_sensor"],(0,n.kg)("editor.appliance.filter_status",p,"Water filter status"))}
                ${_("power_entity",c.power_entity,["sensor"],(0,n.kg)("editor.appliance.power_sensor",p,"Power (W)"))}
                ${_("energy_entity",c.energy_entity,["sensor"],(0,n.kg)("editor.appliance.energy_sensor",p,"Energy (kWh)"))}
              `:h?i.qy`
                ${_("machine_state_entity",c.machine_state_entity,["sensor"],(0,n.kg)("editor.appliance.oven_state",p,"Oven machine state"))}
                ${_("job_state_entity",c.job_state_entity,["sensor"],(0,n.kg)("editor.appliance.oven_job",p,"Oven job state"))}
                ${_("oven_mode_entity",c.oven_mode_entity,["sensor"],(0,n.kg)("editor.appliance.oven_mode",p,"Oven mode (bake, roast…)"))}
                ${_("completion_time_entity",c.completion_time_entity,["sensor"],(0,n.kg)("editor.appliance.completion_time",p,"Completion time sensor"))}
                ${_("oven_temp_entity",c.oven_temp_entity,["sensor"],(0,n.kg)("editor.appliance.oven_temp",p,"Oven temperature"))}
                ${_("oven_setpoint_entity",c.oven_setpoint_entity,["sensor","number"],(0,n.kg)("editor.appliance.oven_setpoint",p,"Oven set point"))}
                ${_("second_cavity_state_entity",c.second_cavity_state_entity,["sensor"],(0,n.kg)("editor.appliance.cavity_state",p,"Second oven state"))}
                ${_("second_cavity_temp_entity",c.second_cavity_temp_entity,["sensor"],(0,n.kg)("editor.appliance.cavity_temp",p,"Second oven temperature"))}
                ${_("second_cavity_setpoint_entity",c.second_cavity_setpoint_entity,["sensor","number"],(0,n.kg)("editor.appliance.cavity_setpoint",p,"Second oven set point"))}
                ${_("second_cavity_mode_entity",c.second_cavity_mode_entity,["sensor"],(0,n.kg)("editor.appliance.cavity_mode",p,"Second oven mode"))}
                ${_("light_entity",c.light_entity,["light"],(0,n.kg)("editor.appliance.oven_light_entity",p,"Oven light"))}
                ${_("stop_button_entity",c.stop_button_entity,["button"],(0,n.kg)("editor.appliance.stop_button",p,"Stop button"))}
                ${_("door_entity",c.door_entity,["binary_sensor","sensor"],(0,n.kg)("editor.appliance.door",p,"Door sensor"))}
                ${_("child_lock_entity",c.child_lock_entity,["binary_sensor"],(0,n.kg)("editor.appliance.child_lock",p,"Child lock"))}
                ${_("remote_control_entity",c.remote_control_entity,["binary_sensor"],(0,n.kg)("editor.appliance.remote_control",p,"Remote control"))}
                ${_("power_entity",c.power_entity,["sensor"],(0,n.kg)("editor.appliance.power_sensor",p,"Power (W)"))}
                ${_("energy_entity",c.energy_entity,["sensor"],(0,n.kg)("editor.appliance.energy_sensor",p,"Energy (kWh)"))}
              `:i.qy`
                ${_("power_switch_entity",c.power_switch_entity,["switch"],(0,n.kg)("editor.appliance.power_switch",p,"Power switch"))}
                ${_("machine_state_entity",c.machine_state_entity,["sensor"],(0,n.kg)("editor.appliance.machine_state",p,"Machine state sensor"))}
                ${_("job_state_entity",c.job_state_entity,["sensor"],(0,n.kg)("editor.appliance.job_state",p,"Job state sensor"))}
                ${_("completion_time_entity",c.completion_time_entity,["sensor"],(0,n.kg)("editor.appliance.completion_time",p,"Completion time sensor"))}
                ${_("child_lock_entity",c.child_lock_entity,["binary_sensor"],(0,n.kg)("editor.appliance.child_lock",p,"Child lock"))}
                ${_("remote_control_entity",c.remote_control_entity,["binary_sensor"],(0,n.kg)("editor.appliance.remote_control",p,"Remote control"))}
                ${_("door_entity",c.door_entity,["binary_sensor","sensor"],(0,n.kg)("editor.appliance.door",p,"Door sensor"))}
                ${_("power_entity",c.power_entity,["sensor"],(0,n.kg)("editor.appliance.power_sensor",p,"Power (W)"))}
                ${_("energy_entity",c.energy_entity,["sensor"],(0,n.kg)("editor.appliance.energy_sensor",p,"Energy (kWh)"))}
              `)}

        ${this.renderChipListField((0,n.kg)("editor.appliance.features",p,"Feature switches"),(0,n.kg)("editor.appliance.features_desc",p,"Toggle chips shown on the card (sanitize, storm wash, power cool, ice maker, wrinkle prevent…). Auto-detected switches appear below — remove any you don’t want, or add your own."),t,Array.isArray(c.feature_switch_entities)?c.feature_switch_entities:g.features,e=>{o({feature_switch_entities:e}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:["switch"],placeholder:(0,n.kg)("editor.appliance.features_placeholder",p,"Add a switch…")})}

        ${u?i.s6:this.renderChipListField((0,n.kg)("editor.appliance.settings",p,"Cycle setting dropdowns"),(0,n.kg)("editor.appliance.settings_desc",p,"Select entities shown as dropdowns (water temperature, spin level, soil level, wash zone…). Auto-detected selects appear below — remove any you don’t want, or add your own."),t,Array.isArray(c.setting_select_entities)?c.setting_select_entities:g.settings,e=>{o({setting_select_entities:e}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:["select","input_select"],placeholder:(0,n.kg)("editor.appliance.settings_placeholder",p,"Add a select…")})}

        ${h?this.renderChipListField((0,n.kg)("editor.appliance.cooktop",p,"Cooktop burners"),(0,n.kg)("editor.appliance.cooktop_desc",p,"Entities that report each burner’s state (on/off, heating, or a power number). They light the burners on the graphic and show a “burners on” chip. Auto-detected entities appear below."),t,Array.isArray(c.cooktop_entities)?c.cooktop_entities:g.cooktop,e=>{o({cooktop_entities:e}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:["binary_sensor","switch","sensor"],placeholder:(0,n.kg)("editor.appliance.cooktop_placeholder",p,"Add a burner entity…")}):i.s6}

        ${this.renderSettingsSection((0,n.kg)("editor.appliance.display_section",p,"Display"),(0,n.kg)("editor.appliance.display_section_desc",p,"Choose what to show on the card."),[{title:(0,n.kg)("editor.appliance.show_title",p,"Show title"),description:"",hass:t,data:{show_title:!1!==c.show_title},schema:[this.booleanField("show_title")],onChange:e=>{var t,r;o({show_title:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_title)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_status",p,"Show status"),description:(0,n.kg)("editor.appliance.show_status_desc",p,"Cycle phase and job state"),hass:t,data:{show_status:!1!==c.show_status},schema:[this.booleanField("show_status")],onChange:e=>{var t,r;o({show_status:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_status)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_graphic",p,"Show appliance graphic"),description:"",hass:t,data:{show_graphic:!1!==c.show_graphic},schema:[this.booleanField("show_graphic")],onChange:e=>{var t,r;o({show_graphic:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_graphic)||void 0===r||r}),this.triggerPreviewUpdate()}},...u?[{title:(0,n.kg)("editor.appliance.show_temps",p,"Show temperatures"),description:(0,n.kg)("editor.appliance.show_temps_desc",p,"Fridge and freezer temperature tiles"),hass:t,data:{show_temperatures:!1!==c.show_temperatures},schema:[this.booleanField("show_temperatures")],onChange:e=>{var t,r;o({show_temperatures:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_temperatures)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_setpoints",p,"Show setpoint controls"),description:(0,n.kg)("editor.appliance.show_setpoints_desc",p,"− / + buttons to adjust target temperatures"),hass:t,data:{show_setpoint_controls:!1!==c.show_setpoint_controls},schema:[this.booleanField("show_setpoint_controls")],onChange:e=>{var t,r;o({show_setpoint_controls:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_setpoint_controls)||void 0===r||r}),this.triggerPreviewUpdate()}}]:h?[{title:(0,n.kg)("editor.appliance.show_completion",p,"Show time remaining"),description:(0,n.kg)("editor.appliance.show_completion_desc_range",p,"Countdown and finish time while the oven runs"),hass:t,data:{show_completion_time:!1!==c.show_completion_time},schema:[this.booleanField("show_completion_time")],onChange:e=>{var t,r;o({show_completion_time:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_completion_time)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_temps_range",p,"Show oven temperature"),description:(0,n.kg)("editor.appliance.show_temps_range_desc",p,"Current temperature and set point tiles"),hass:t,data:{show_temperatures:!1!==c.show_temperatures},schema:[this.booleanField("show_temperatures")],onChange:e=>{var t,r;o({show_temperatures:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_temperatures)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_cooktop",p,"Show cooktop burners"),description:(0,n.kg)("editor.appliance.show_cooktop_desc",p,"Burner indicators on the graphic and a “burners on” chip"),hass:t,data:{show_cooktop:!1!==c.show_cooktop},schema:[this.booleanField("show_cooktop")],onChange:e=>{var t,r;o({show_cooktop:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_cooktop)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_controls",p,"Show controls"),description:(0,n.kg)("editor.appliance.show_controls_desc_range",p,"Oven light and Stop buttons"),hass:t,data:{show_controls:!1!==c.show_controls},schema:[this.booleanField("show_controls")],onChange:e=>{var t,r;o({show_controls:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_controls)||void 0===r||r}),this.triggerPreviewUpdate()}}]:[{title:(0,n.kg)("editor.appliance.show_completion",p,"Show time remaining"),description:(0,n.kg)("editor.appliance.show_completion_desc",p,"Countdown and finish time while a cycle runs"),hass:t,data:{show_completion_time:!1!==c.show_completion_time},schema:[this.booleanField("show_completion_time")],onChange:e=>{var t,r;o({show_completion_time:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_completion_time)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_controls",p,"Show cycle controls"),description:(0,n.kg)("editor.appliance.show_controls_desc",p,"Start / Pause / Stop buttons"),hass:t,data:{show_controls:!1!==c.show_controls},schema:[this.booleanField("show_controls")],onChange:e=>{var t,r;o({show_controls:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_controls)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_power_button",p,"Show power button"),description:"",hass:t,data:{show_power_button:!1!==c.show_power_button},schema:[this.booleanField("show_power_button")],onChange:e=>{var t,r;o({show_power_button:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_power_button)||void 0===r||r}),this.triggerPreviewUpdate()}}],{title:(0,n.kg)("editor.appliance.show_chips",p,"Show status chips"),description:(0,n.kg)("editor.appliance.show_chips_desc",p,"Child lock, remote control, door open, filter alerts"),hass:t,data:{show_status_chips:!1!==c.show_status_chips},schema:[this.booleanField("show_status_chips")],onChange:e=>{var t,r;o({show_status_chips:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_status_chips)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.show_features",p,"Show feature switches"),description:"",hass:t,data:{show_feature_switches:!1!==c.show_feature_switches},schema:[this.booleanField("show_feature_switches")],onChange:e=>{var t,r;o({show_feature_switches:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_feature_switches)||void 0===r||r}),this.triggerPreviewUpdate()}},...u?[]:[{title:(0,n.kg)("editor.appliance.show_settings",p,"Show cycle settings"),description:(0,n.kg)("editor.appliance.show_settings_desc",p,"Dropdowns for water temperature, spin level, and similar options"),hass:t,data:{show_settings:!1!==c.show_settings},schema:[this.booleanField("show_settings")],onChange:e=>{var t,r;o({show_settings:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_settings)||void 0===r||r}),this.triggerPreviewUpdate()}}],{title:(0,n.kg)("editor.appliance.show_metrics",p,"Show power & energy"),description:(0,n.kg)("editor.appliance.show_metrics_desc",p,"Live wattage and energy usage tiles"),hass:t,data:{show_metrics:!1!==c.show_metrics},schema:[this.booleanField("show_metrics")],onChange:e=>{var t,r;o({show_metrics:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.show_metrics)||void 0===r||r}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.appliance.enable_animations",p,"Enable animations"),description:(0,n.kg)("editor.appliance.enable_animations_desc",p,"Drum spin, bubbles, steam, and glow effects while running"),hass:t,data:{enable_animations:!1!==c.enable_animations},schema:[this.booleanField("enable_animations")],onChange:e=>{var t,r;o({enable_animations:null===(r=null===(t=e.detail.value)||void 0===t?void 0:t.enable_animations)||void 0===r||r}),this.triggerPreviewUpdate()}}])}

        ${this.renderSettingsSection((0,n.kg)("editor.appliance.layout_section",p,"Layout"),(0,n.kg)("editor.appliance.layout_section_desc",p,"How the card is arranged."),[{title:(0,n.kg)("editor.appliance.layout",p,"Layout"),description:(0,n.kg)("editor.appliance.layout_desc",p,"Hero, standard, or compact"),hass:t,data:{layout:c.layout||"standard"},schema:[this.selectField("layout",[{value:"hero",label:(0,n.kg)("editor.appliance.layout_hero",p,"Hero")},{value:"standard",label:(0,n.kg)("editor.appliance.layout_standard",p,"Standard")},{value:"compact",label:(0,n.kg)("editor.appliance.layout_compact",p,"Compact")}])],onChange:e=>{var t;o({layout:(null===(t=e.detail.value)||void 0===t?void 0:t.layout)||"standard"}),this.triggerPreviewUpdate()}}])}

        ${"compact"===(c.layout||"standard")?this.renderSliderField((0,n.kg)("editor.appliance.size",p,"Graphic size"),(0,n.kg)("editor.appliance.size_desc",p,"Size of the appliance illustration"),null!==(s=c.appliance_compact_size)&&void 0!==s?s:40,40,24,120,2,e=>{o({appliance_compact_size:e}),this.triggerPreviewUpdate()},"px"):this.renderSliderField((0,n.kg)("editor.appliance.size",p,"Graphic size"),(0,n.kg)("editor.appliance.size_desc",p,"Size of the appliance illustration"),null!==(l=c.appliance_size)&&void 0!==l?l:"hero"===(c.layout||"standard")?150:S,"hero"===(c.layout||"standard")?150:S,64,220,4,e=>{o({appliance_size:e}),this.triggerPreviewUpdate()},"px")}

        ${this.renderColorField((0,n.kg)("editor.appliance.active_color",p,"Running color"),(0,n.kg)("editor.appliance.active_color_desc",p,"Accent while a cycle is running"),t,c.active_color||"","var(--primary-color)",e=>{o({active_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.appliance.done_color",p,"Done color"),"",t,c.done_color||"","#4CAF50",e=>{o({done_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.appliance.text_color",p,"Text color"),"",t,c.text_color||"","var(--primary-text-color)",e=>{o({text_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,n.kg)("editor.appliance.card_bg",p,"Card background"),"",t,c.card_background_color||"","var(--card-background-color)",e=>{o({card_background_color:e}),this.triggerPreviewUpdate()})}
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
    `}renderGraphic(e,t,r,i,n,o,a){return"fridge"===t?this.fridgeSvg(e.id,r,n,!!a.fridgeDoorOpen,!!a.freezerDoorOpen,!!a.alert):"range"===t?this.rangeSvg(e.id,r,i,n,o,a.burners||[],!!a.lightOn,!!a.doorOpen):"dishwasher"===t?this.dishwasherSvg(e.id,r,i,n,o,!!a.doorOpen):this.laundrySvg(e.id,r,t,i,n,o)}renderPreview(e,t,r,a){var s,l,c,p,d,u,h,g,_,m,y,z,P,F,C,D,M,q,A;const L=e,N=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",W=this.cardType,U=$[W],j=this.getRef(t,L.entity,r);if(!j)return i.qy`
        <style>${this.getStyles()}</style>
        <div class="uc-appl-wrapper">
          ${this.renderGradientErrorState((0,n.kg)("editor.appliance.config_needed",N,"Select an appliance"),(0,n.kg)("editor.appliance.config_needed_desc",N,"Choose the main entity in the General tab"),U.icon)}
        </div>
      `;const R=this.resolveLinks(L,t,r,j),T=L.layout||"standard",O=!1!==L.enable_animations,J=L.text_color||"var(--primary-text-color)",E=L.secondary_text_color||"var(--secondary-text-color)",G=L.card_background_color||"var(--uc-pane-bg, var(--card-background-color))",B="fridge"===W,I="range"===W,Q=(null===(l=L.name)||void 0===l?void 0:l.trim())||R.deviceName||("string"==typeof j.attrs.friendly_name?String(j.attrs.friendly_name).replace(/\b(machine state|job state|completion time|run state|remain(?:ing)? time|power|energy|state|status|temperature)\s*$/i,"").trim():"")||w(R.prefix)||U.fallbackName,H=null!==(p=null===(c=R.machineState)||void 0===c?void 0:c.state)&&void 0!==p?p:j.state;let Y=B?"running":function(e,t){const r=f(e);return t&&"done"===f(t).phase&&("running"===r.phase||"idle"===r.phase&&!r.explicit)?"done":r.phase}(H,I?null:null===(d=R.jobState)||void 0===d?void 0:d.state);const K=B?void 0:this.autoFind(t,R.pool,R.prefix,["binary_sensor"],[new RegExp(`^${R.prefix}_power(_\\d+)?$`),/(^|_)power(_state)?(_\d+)?$/]),Z=K?"on"===(null===(u=t.states[K])||void 0===u?void 0:u.state):void 0;B||"idle"!==Y||!1!==Z||(Y="off");const V=(I?(null===(h=R.ovenMode)||void 0===h?void 0:h.state)||(null===(g=R.jobState)||void 0===g?void 0:g.state):null===(_=R.jobState)||void 0===_?void 0:_.state)||"",X=V&&!["none","unknown","unavailable","off"].includes(V.toLowerCase())?(()=>{const e=I&&R.ovenMode||R.jobState;return e?this.optionLabel(t,e,V):w(v(V))})():null,ee=function(e){var t;if(!e)return null;const r=null===(t=e.state)||void 0===t?void 0:t.trim();if(!r||"unavailable"===r||"unknown"===r||"none"===r)return null;if(/\d{4}-\d{2}-\d{2}/.test(r)){const e=new Date(r);return Number.isNaN(e.getTime())?null:e.getTime()>Date.now()?e:null}const i=r.match(/^(\d+):(\d{2})(?::(\d{2}))?$/);if(i){const e=void 0!==i[3]?1e3*(3600*Number(i[1])+60*Number(i[2])+Number(i[3])):6e4*(60*Number(i[1])+Number(i[2]));return e>0?new Date(Date.now()+e):null}const n=Number(r);if(!Number.isNaN(n)){if(n<=0)return null;const t=String(e.attrs.unit_of_measurement||"").toLowerCase(),r=t.startsWith("h")?36e5*n:t.startsWith("s")?1e3*n:6e4*n;return new Date(Date.now()+r)}return null}(R.completion),te=!(!1===L.show_completion_time||B||"running"!==Y&&"paused"!==Y||!ee),re="on"===(null===(m=R.fridgeDoor)||void 0===m?void 0:m.state),ie="on"===(null===(y=R.freezerDoor)||void 0===y?void 0:y.state),ne="on"===(null===(z=R.filterStatus)||void 0===z?void 0:z.state),oe=(0,o.SP)(null===(P=R.door)||void 0===P?void 0:P.state),ae=!1===L.show_cooktop?[]:R.cooktop.map(k),se=ae.filter(Boolean).length,le="on"===(null===(F=R.ovenLight)||void 0===F?void 0:F.state),ce=L.done_color||"#4CAF50",pe=(()=>{if(B)return L.active_color||"var(--primary-color)";if(I&&se>0&&("idle"===Y||"off"===Y))return L.active_color||"var(--uc-appl-burner, #ff6b35)";switch(Y){case"running":return L.active_color||"var(--primary-color)";case"paused":return"var(--warning-color, #FF9800)";case"done":return ce;case"error":return"var(--error-color, #F44336)";default:return E}})(),de=B&&(re||ie||ne)?"var(--warning-color, #FF9800)":pe,ue=(()=>{if(B)return re&&ie?(0,n.kg)("editor.appliance.doors_open",N,"Doors open"):re?(0,n.kg)("editor.appliance.fridge_door_open",N,"Fridge door open"):ie?(0,n.kg)("editor.appliance.freezer_door_open",N,"Freezer door open"):ne?(0,n.kg)("editor.appliance.filter_alert",N,"Replace water filter"):(0,n.kg)("editor.appliance.cooling",N,"Cooling");if(I&&se>0&&("idle"===Y||"off"===Y))return(0,n.kg)("editor.appliance.cooktop_on",N,"Cooktop on");switch(Y){case"running":return(0,n.kg)("editor.appliance.state_running",N,"Running");case"paused":return(0,n.kg)("editor.appliance.state_paused",N,"Paused");case"done":return(0,n.kg)("editor.appliance.state_done",N,"Done");case"error":return(0,n.kg)("editor.appliance.state_error",N,"Error");case"off":return(0,n.kg)("editor.appliance.state_off",N,"Off");case"unavailable":return(0,n.kg)("editor.appliance.state_unavailable",N,"Unavailable");default:return(0,n.kg)("editor.appliance.state_idle",N,"Idle")}})(),he="unavailable"===Y,ge=Array.isArray(null===(C=R.controlSelect)||void 0===C?void 0:C.attrs.options)?R.controlSelect.attrs.options.map(e=>String(e).toLowerCase()):[],_e=R.programButtons,me=!B&&!["run","pause","stop"].some(e=>ge.includes(e))&&!!(_e.pause||_e.resume||_e.stop||_e.startPause),ve=me?"paused"===Y?null!==(D=_e.resume)&&void 0!==D?D:_e.startPause:"running"!==Y?_e.startPause:null:null,ye=me?null!==(M=_e.pause)&&void 0!==M?M:"running"===Y?_e.startPause:null:null,fe=me?_e.stop:null,we=e=>{if(me){const r="run"===e?ve:"pause"===e?ye:fe;if(!r)return;return t.callService("button","press",{entity_id:r.id}),void this.triggerPreviewUpdate(!0)}const r=R.controlSelect;if(!r)return;const i=r.id.split(".")[0];t.callService("input_select"===i?"input_select":"select","select_option",{entity_id:r.id,option:e}),this.triggerPreviewUpdate(!0)},be=()=>{R.powerSwitch&&(t.callService("switch","toggle",{entity_id:R.powerSwitch.id}),this.triggerPreviewUpdate(!0))},xe=e=>{t.callService("switch","toggle",{entity_id:e}),this.triggerPreviewUpdate(!0)},$e=(e,r)=>{const i="number"==typeof e.attrs.min?e.attrs.min:-30,n="number"==typeof e.attrs.max?e.attrs.max:90,o="number"==typeof e.attrs.step&&e.attrs.step>0?e.attrs.step:1,a=this._pendingSetpoints.get(e.id),s=a&&Date.now()-a.ts<6e3?a.value:Number(e.state);if(Number.isNaN(s))return;const l=Math.min(n,Math.max(i,s+r*o));this._pendingSetpoints.set(e.id,{value:l,ts:Date.now()}),t.callService("number","set_value",{entity_id:e.id,value:l}),this.triggerPreviewUpdate(!0)},ke=e=>{const t=this._pendingSetpoints.get(e.id),r=Number(e.state);if(t){if(!(Date.now()-t.ts>=6e3||t.value===r))return t.value;this._pendingSetpoints.delete(e.id)}return Number.isNaN(r)?null:r},Se=e=>!!e&&"unavailable"!==e.state,ze=me?Se(ve):ge.includes("run"),Pe=me?Se(ye)&&"running"===Y:ge.includes("pause"),Fe=me?Se(fe)&&("running"===Y||"paused"===Y):ge.includes("stop"),Ce=!!R.controlSelect||me,De=me&&"paused"===Y?(0,n.kg)("editor.appliance.resume",N,"Resume"):(0,n.kg)("editor.appliance.start",N,"Start"),Me=!R.remoteControl||"on"===R.remoteControl.state,qe=!B&&!1!==L.show_controls&&Ce&&(ze||Pe||Fe)?i.qy`
            <div class="uc-appl-controls" role="group" title="${Me?"":(0,n.kg)("editor.appliance.remote_disabled",N,"Enable remote control on the appliance to allow remote start")}">
              ${ze?i.qy`<button type="button" class="uc-appl-ctl uc-appl-btn ${"running"===Y?"is-active":""}" ?disabled=${he||!Me} @click=${()=>we("run")}>
                    <ha-icon icon="mdi:play"></ha-icon>${De}
                  </button>`:i.s6}
              ${Pe?i.qy`<button type="button" class="uc-appl-ctl uc-appl-btn ${"paused"===Y?"is-active":""}" ?disabled=${he||!Me} @click=${()=>we("pause")}>
                    <ha-icon icon="mdi:pause"></ha-icon>${(0,n.kg)("editor.appliance.pause",N,"Pause")}
                  </button>`:i.s6}
              ${Fe?i.qy`<button type="button" class="uc-appl-ctl uc-appl-btn ${"idle"===Y||"off"===Y?"is-active":""}" ?disabled=${he||!Me} @click=${()=>we("stop")}>
                    <ha-icon icon="mdi:stop"></ha-icon>${(0,n.kg)("editor.appliance.stop",N,"Stop")}
                  </button>`:i.s6}
              ${!1!==L.show_power_button&&R.powerSwitch?i.qy`<button type="button" class="uc-appl-ctl uc-appl-btn uc-appl-btn--power ${"on"===R.powerSwitch.state?"is-active":""}" ?disabled=${he} @click=${be} aria-label="${(0,n.kg)("editor.appliance.power",N,"Power")}">
                    <ha-icon icon="mdi:power"></ha-icon>
                  </button>`:i.s6}
            </div>
          `:i.s6,Ae=I&&!1!==L.show_controls&&(R.ovenLight||R.stopButton)?i.qy`
            <div class="uc-appl-controls" role="group">
              ${R.ovenLight?i.qy`<button
                    type="button"
                    class="uc-appl-ctl uc-appl-btn ${le?"is-active":""}"
                    ?disabled=${"unavailable"===R.ovenLight.state}
                    aria-pressed="${le?"true":"false"}"
                    @click=${()=>{t.callService("light","toggle",{entity_id:R.ovenLight.id}),this.triggerPreviewUpdate(!0)}}
                  >
                    <ha-icon icon="${le?"mdi:lightbulb-on":"mdi:lightbulb-outline"}"></ha-icon>
                    ${(0,n.kg)("editor.appliance.oven_light",N,"Light")}
                  </button>`:i.s6}
              ${R.stopButton?i.qy`<button
                    type="button"
                    class="uc-appl-ctl uc-appl-btn"
                    ?disabled=${he||"running"!==Y&&"paused"!==Y}
                    @click=${()=>{t.callService("button","press",{entity_id:R.stopButton.id}),this.triggerPreviewUpdate(!0)}}
                  >
                    <ha-icon icon="mdi:stop"></ha-icon>${(0,n.kg)("editor.appliance.stop",N,"Stop")}
                  </button>`:i.s6}
            </div>
          `:i.s6,Le=(()=>{var e,r;if(!1===L.show_status_chips)return i.s6;const o=[],a=(e,t,r=!1)=>o.push(i.qy`<span class="uc-appl-chip ${r?"uc-appl-chip--warn":""}"><ha-icon icon="${e}"></ha-icon>${t}</span>`);return"on"===(null===(e=R.childLock)||void 0===e?void 0:e.state)&&a("mdi:lock",(0,n.kg)("editor.appliance.chip_child_lock",N,"Child lock")),!B&&R.remoteControl&&"on"!==R.remoteControl.state&&a("mdi:remote-off",(0,n.kg)("editor.appliance.chip_remote_off",N,"Remote off")),"on"===(null===(r=R.wrinklePrevent)||void 0===r?void 0:r.state)&&a("mdi:tshirt-crew",(0,n.kg)("editor.appliance.chip_wrinkle",N,"Wrinkle prevent")),oe&&a("mdi:door-open",(0,n.kg)("editor.appliance.chip_door_open",N,"Door open"),!0),I&&!1!==L.show_cooktop&&se>0&&a("mdi:fire",1===se?(0,n.kg)("editor.appliance.chip_burner_on",N,"1 burner on"):`${se} ${(0,n.kg)("editor.appliance.chip_burners_on",N,"burners on")}`,!0),ne&&a("mdi:water-alert",(0,n.kg)("editor.appliance.chip_filter",N,"Replace filter"),!0),ne&&R.filterReset&&o.push(i.qy`
          <button
            type="button"
            class="uc-appl-ctl uc-appl-chip uc-appl-chip--action"
            @click=${()=>{t.callService("button","press",{entity_id:R.filterReset.id}),this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon="mdi:restart"></ha-icon>${(0,n.kg)("editor.appliance.reset_filter",N,"Reset filter")}
          </button>
        `),o.length?i.qy`<div class="uc-appl-chips">${o}</div>`:i.s6})(),Ne=!1!==L.show_settings&&R.settingSelects.length?i.qy`
            <div class="uc-appl-settings">
              ${R.settingSelects.map(e=>{const r=Array.isArray(e.attrs.options)?e.attrs.options.map(e=>String(e)):[];return r.length?i.qy`
                  <label class="uc-appl-setting uc-appl-ctl">
                    <span class="uc-appl-setting__label">
                      ${t.states[e.id]?i.qy`<ha-state-icon
                            class="uc-appl-setting__icon"
                            .hass=${t}
                            .stateObj=${t.states[e.id]}
                          ></ha-state-icon>`:i.s6}
                      <span class="uc-appl-setting__text"
                        >${this.featureLabel(e,R.prefix,R.deviceName,t,N)}</span
                      >
                    </span>
                    <span class="uc-appl-setting__select-wrap">
                      <select
                        class="uc-appl-setting__select"
                        ?disabled=${"unavailable"===e.state}
                        .value=${e.state}
                        @change=${r=>{const i=r.target.value,n=e.id.split(".")[0];t.callService("input_select"===n?"input_select":"select","select_option",{entity_id:e.id,option:i}),this.triggerPreviewUpdate(!0)}}
                      >
                        ${r.map(r=>i.qy`<option value="${r}" ?selected=${r===e.state}>${this.optionLabel(t,e,r)}</option>`)}
                      </select>
                      <ha-icon icon="mdi:chevron-down"></ha-icon>
                    </span>
                  </label>
                `:i.s6})}
            </div>
          `:i.s6,We=!1!==L.show_feature_switches&&R.features.length?i.qy`
            <div class="uc-appl-features">
              ${R.features.map(e=>{const r="on"===e.state;return i.qy`
                  <button
                    type="button"
                    class="uc-appl-ctl uc-appl-feature ${r?"is-active":""}"
                    ?disabled=${"unavailable"===e.state}
                    aria-pressed="${r?"true":"false"}"
                    @click=${()=>xe(e.id)}
                  >
                    ${this.featureLabel(e,R.prefix,R.deviceName,t,N)}
                  </button>
                `})}
            </div>
          `:i.s6,Ue=(()=>{if(!1===L.show_metrics)return i.s6;const e=[];return R.power&&!Number.isNaN(Number(R.power.state))&&e.push(i.qy`
          <div class="uc-appl-metric">
            <span class="uc-appl-metric__label">${(0,n.kg)("editor.appliance.metric_power",N,"Power")}</span>
            <span class="uc-appl-metric__value" style="color: ${J};">${x(R.power.state)}<span class="uc-appl-metric__unit">${R.power.attrs.unit_of_measurement||"W"}</span></span>
          </div>
        `),R.energy&&!Number.isNaN(Number(R.energy.state))&&e.push(i.qy`
          <div class="uc-appl-metric">
            <span class="uc-appl-metric__label">${(0,n.kg)("editor.appliance.metric_energy",N,"Energy")}</span>
            <span class="uc-appl-metric__value" style="color: ${J};">${x(R.energy.state,2)}<span class="uc-appl-metric__unit">${R.energy.attrs.unit_of_measurement||"kWh"}</span></span>
          </div>
        `),e.length?i.qy`<div class="uc-appl-metrics">${e}</div>`:i.s6})(),je=te&&ee?i.qy`
          <div class="uc-appl-eta">
            <ha-icon icon="mdi:clock-end" style="--mdc-icon-size: 15px; color: ${pe};"></ha-icon>
            <span class="uc-appl-eta__count" style="color: ${J};">${b(ee)}</span>
            <span class="uc-appl-eta__sep" style="color: ${E};">·</span>
            <span style="color: ${E};">
              ${(0,n.kg)("editor.appliance.ends_at",N,"Ends")} ${function(e,t){try{return e.toLocaleTimeString(t||void 0,{hour:"numeric",minute:"2-digit"})}catch(t){return e.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}}(ee,null===(q=t.locale)||void 0===q?void 0:q.language)}
            </span>
          </div>
        `:i.s6,Re=(e,t,r,o,a)=>{if(!r&&!o)return i.s6;const s=(null==r?void 0:r.attrs.unit_of_measurement)||(null==o?void 0:o.attrs.unit_of_measurement)||"°",l=o?ke(o):null;return i.qy`
        <div class="uc-appl-temp ${a?"uc-appl-temp--alert":""}">
          <div class="uc-appl-temp__head">
            <ha-icon icon="${t}"></ha-icon>
            <span>${e}</span>
            ${a?i.qy`<span class="uc-appl-temp__open">${(0,n.kg)("editor.appliance.open",N,"Open")}</span>`:i.s6}
          </div>
          ${r&&!Number.isNaN(Number(r.state))?i.qy`<div class="uc-appl-temp__value" style="color: ${J};">${x(r.state,0)}<span class="uc-appl-temp__unit">${s}</span></div>`:i.s6}
          ${o&&null!==l&&!1!==L.show_setpoint_controls&&o.id.startsWith("number.")?i.qy`
                <div class="uc-appl-temp__set">
                  <button type="button" class="uc-appl-ctl uc-appl-step" @click=${()=>$e(o,-1)} aria-label="${(0,n.kg)("editor.appliance.decrease",N,"Decrease")}">
                    <ha-icon icon="mdi:minus"></ha-icon>
                  </button>
                  <span class="uc-appl-temp__target" style="color: ${E};">${(0,n.kg)("editor.appliance.set_to",N,"Set")} ${l}${s}</span>
                  <button type="button" class="uc-appl-ctl uc-appl-step" @click=${()=>$e(o,1)} aria-label="${(0,n.kg)("editor.appliance.increase",N,"Increase")}">
                    <ha-icon icon="mdi:plus"></ha-icon>
                  </button>
                </div>
              `:o&&null!==l?i.qy`<div class="uc-appl-temp__target" style="color: ${E};">${(0,n.kg)("editor.appliance.set_to",N,"Set")} ${l}${s}</div>`:i.s6}
        </div>
      `},Te=(()=>{if(!1===L.show_temperatures)return i.s6;if(B)return i.qy`
          <div class="uc-appl-temps">
            ${Re((0,n.kg)("editor.appliance.fridge",N,"Fridge"),"mdi:fridge-top",R.fridgeTemp,R.fridgeSetpoint,re)}
            ${Re((0,n.kg)("editor.appliance.freezer",N,"Freezer"),"mdi:snowflake",R.freezerTemp,R.freezerSetpoint,ie)}
          </div>
        `;if(I){const e=e=>(null==e?void 0:e.state)&&!["none","off","unknown","unavailable"].includes(e.state.toLowerCase())?w(e.state):null,t=e=>e&&Number(e.state)>0?e:null,r=(0,n.kg)("editor.appliance.oven",N,"Oven"),o=e(R.ovenMode),a=e(R.cavityMode),s=!(!R.cavityTemp&&!R.cavitySetpoint),l=Re(o?`${r} · ${o}`:r,"mdi:toaster-oven",R.ovenTemp,t(R.ovenSetpoint),oe);return l!==i.s6||s?i.qy`
          <div class="uc-appl-temps">
            ${l}
            ${s?Re(a?`${(0,n.kg)("editor.appliance.lower_oven",N,"Lower oven")} · ${a}`:(0,n.kg)("editor.appliance.lower_oven",N,"Lower oven"),"mdi:toaster-oven",R.cavityTemp,t(R.cavitySetpoint),!1):i.s6}
          </div>
        `:i.s6}return i.s6})(),Oe=!1!==L.show_status?i.qy`
            <div class="uc-appl-status">
              <span class="uc-appl-badge" style="--uc-appl-accent: ${de};">
                ${"running"!==Y||B?i.s6:i.qy`<span class="uc-appl-dot"></span>`}
                ${ue}
              </span>
              ${X&&!B&&"idle"!==Y&&"off"!==Y?i.qy`<span class="uc-appl-job" style="color: ${E};">${X}</span>`:i.s6}
            </div>
          `:i.s6,Je={fridgeDoorOpen:re,freezerDoorOpen:ie,doorOpen:oe,alert:ne,burners:ae,lightOn:le},Ee=(e,t,r,i)=>{const n=Number(e);return Number.isFinite(n)&&n>0?Math.min(i,Math.max(r,n)):t},Ge="hero"===T?Ee(L.appliance_size,150,64,220):"compact"===T?Ee(L.appliance_compact_size,40,24,120):Ee(L.appliance_size,S,64,220),Be=(e,t="")=>!1!==L.show_graphic?i.qy`
            <div class="uc-appl-visual ${t} ${"running"!==Y||B?"":"uc-appl-visual--on"} ${"done"===Y?"uc-appl-visual--done":""}" style="--uc-appl-accent: ${pe};">
              ${this.renderGraphic(L,W,e,Y,pe,O,Je)}
            </div>
          `:i.s6;let Ie;Ie="compact"===T?i.qy`
        <div class="uc-appl uc-appl--compact" style="--uc-appl-accent: ${pe};">
          <div class="uc-appl-compact__row">
            ${Be(Ge,"uc-appl-visual--compact")}
            <div class="uc-appl-compact__meta">
              ${!1!==L.show_title?i.qy`<div class="uc-appl-title uc-appl-title--compact" style="color: ${J};">${Q}</div>`:i.s6}
              ${!1!==L.show_status?i.qy`<div class="uc-appl-compact__status" style="color: ${de};">
                    ${ue}${X&&"running"===Y?i.qy`<span style="color: ${E};"> · ${X}</span>`:i.s6}${te&&ee?i.qy`<span style="color: ${E};"> · ${b(ee)}</span>`:i.s6}
                  </div>`:i.s6}
            </div>
            ${!B&&!1!==L.show_controls&&Ce?i.qy`
                  <div class="uc-appl-compact__ctl">
                    ${"running"===Y&&Pe?i.qy`<button type="button" class="uc-appl-ctl uc-appl-iconbtn" ?disabled=${he||!Me} @click=${()=>we("pause")} aria-label="${(0,n.kg)("editor.appliance.pause",N,"Pause")}"><ha-icon icon="mdi:pause"></ha-icon></button>`:ze?i.qy`<button type="button" class="uc-appl-ctl uc-appl-iconbtn" ?disabled=${he||!Me} @click=${()=>we("run")} aria-label="${De}"><ha-icon icon="mdi:play"></ha-icon></button>`:i.s6}
                  </div>
                `:i.s6}
            ${!B&&!1!==L.show_power_button&&R.powerSwitch?i.qy`<button type="button" class="uc-appl-ctl uc-appl-iconbtn ${"on"===R.powerSwitch.state?"is-active":""}" ?disabled=${he} @click=${be} aria-label="${(0,n.kg)("editor.appliance.power",N,"Power")}"><ha-icon icon="mdi:power"></ha-icon></button>`:i.s6}
            ${I&&!1!==L.show_controls&&R.ovenLight?i.qy`<button type="button" class="uc-appl-ctl uc-appl-iconbtn ${le?"is-active":""}" ?disabled=${"unavailable"===R.ovenLight.state} @click=${()=>{t.callService("light","toggle",{entity_id:R.ovenLight.id}),this.triggerPreviewUpdate(!0)}} aria-label="${(0,n.kg)("editor.appliance.oven_light",N,"Light")}"><ha-icon icon="${le?"mdi:lightbulb-on":"mdi:lightbulb-outline"}"></ha-icon></button>`:i.s6}
          </div>
        </div>
      `:"hero"===T?i.qy`
        <div class="uc-appl uc-appl--hero" style="--uc-appl-accent: ${pe};">
          ${Be(Ge,"uc-appl-visual--hero")}
          <div class="uc-appl-hero__ident">
            ${!1!==L.show_title?i.qy`<h2 class="uc-appl-title uc-appl-title--hero" style="color: ${J};">${Q}</h2>`:i.s6}
            ${Oe}
          </div>
          ${je}
          ${Te}
          ${qe}
          ${Ae}
          ${Ne}
          ${Le}
          ${We}
          ${Ue}
        </div>
      `:i.qy`
        <div class="uc-appl uc-appl--standard" style="--uc-appl-accent: ${pe};">
          <div class="uc-appl-standard__top">
            ${Be(Ge)}
            <div class="uc-appl-standard__info">
              ${!1!==L.show_title?i.qy`<div class="uc-appl-title uc-appl-title--standard" style="color: ${J};">${Q}</div>`:i.s6}
              ${Oe}
              ${je}
              ${Le}
            </div>
          </div>
          ${Te}
          ${qe}
          ${Ae}
          ${Ne}
          ${We}
          ${Ue}
        </div>
      `;const Qe=this.buildStyleString(this.buildDesignStyles(e,t)),He=this.getHoverEffectClass(e),Ye=this.createGestureHandlers(L.id,{tap_action:(null===(A=L.tap_action)||void 0===A?void 0:A.action)?Object.assign(Object.assign({},L.tap_action),{entity:j.id}):{action:"more-info",entity:j.id},hold_action:L.hold_action,double_tap_action:L.double_tap_action,entity:j.id,module:L},t,r,[".uc-appl-ctl"]);return i.qy`
      <style>${this.getStyles()}</style>
      <div
        class="uc-appl-wrapper ${He}"
        data-uc-role="pane"
        style="background: ${G};${Qe}"
        @pointerdown=${Ye.onPointerDown}
        @pointermove=${Ye.onPointerMove}
        @pointerup=${Ye.onPointerUp}
        @pointerleave=${Ye.onPointerLeave}
        @pointercancel=${Ye.onPointerCancel}
      >
        ${this.wrapWithAnimation(Ie,e,t)}
      </div>
    `}getStyles(){return`\n      ${a.m.getSliderStyles()}\n\n      .uc-appl-wrapper {\n        box-sizing: border-box;\n        border-radius: var(--uc-r-16, 16px);\n        padding: 16px;\n        overflow: hidden;\n      }\n\n      .uc-appl {\n        display: flex;\n        flex-direction: column;\n        gap: 14px;\n        width: 100%;\n        min-width: 0;\n      }\n      .uc-appl--hero { align-items: center; text-align: center; }\n\n      /* ── Graphic well ── */\n      .uc-appl-visual {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        border-radius: var(--uc-r-18, 18px);\n        padding: 10px 12px;\n        background:\n          radial-gradient(120% 90% at 50% 0%, color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 9%, transparent), transparent 70%),\n          color-mix(in srgb, var(--primary-text-color) 3%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        border: 1px solid color-mix(in srgb, var(--divider-color) 50%, transparent);\n        transition: box-shadow 0.25s ease, border-color 0.25s ease;\n      }\n      .uc-appl-visual--hero { border-radius: var(--uc-r-22, 22px); padding: 14px 18px; }\n      .uc-appl-visual--compact { padding: 4px 6px; border-radius: var(--uc-r-12, 12px); }\n      .uc-appl-visual--on {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 42%, transparent);\n        box-shadow: 0 4px 22px color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 16%, transparent);\n      }\n      .uc-appl-visual--done {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, #4CAF50) 45%, transparent);\n      }\n      .uc-appl-svg { display: block; overflow: visible; }\n\n      /* ── Standard layout ── */\n      .uc-appl-standard__top {\n        display: flex;\n        align-items: center;\n        gap: 16px;\n        width: 100%;\n      }\n      .uc-appl-standard__info {\n        flex: 1;\n        min-width: 0;\n        display: flex;\n        flex-direction: column;\n        gap: 7px;\n        align-items: flex-start;\n      }\n\n      /* ── Compact layout ── */\n      .uc-appl-compact__row { display: flex; align-items: center; gap: 12px; width: 100%; }\n      .uc-appl-compact__meta { flex: 1; min-width: 0; }\n      .uc-appl-compact__status {\n        font-size: 0.8125rem;\n        font-weight: 600;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-appl-compact__ctl { display: flex; gap: 6px; }\n\n      /* ── Hero ── */\n      .uc-appl-hero__ident { display: flex; flex-direction: column; gap: 7px; align-items: center; }\n\n      /* ── Typography ── */\n      .uc-appl-title {\n        margin: 0;\n        font-weight: 700;\n        letter-spacing: -0.01em;\n        line-height: 1.25;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n      }\n      .uc-appl-title--hero { font-size: 1.25rem; font-weight: 800; letter-spacing: -0.02em; }\n      .uc-appl-title--standard { font-size: 1.0625rem; }\n      .uc-appl-title--compact { font-size: 0.9375rem; }\n\n      .uc-appl-status { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n      .uc-appl-badge {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 0.75rem;\n        font-weight: 700;\n        letter-spacing: 0.02em;\n        padding: 4px 11px;\n        border-radius: 999px;\n        color: var(--uc-appl-accent, var(--primary-color));\n        background: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 12%, transparent);\n        border: 1px solid color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 30%, transparent);\n        white-space: nowrap;\n      }\n      .uc-appl-dot {\n        width: 6px;\n        height: 6px;\n        border-radius: 50%;\n        background: currentColor;\n        box-shadow: 0 0 7px color-mix(in srgb, currentColor 65%, transparent);\n        animation: ucApplPulse 1.8s ease-in-out infinite;\n      }\n      .uc-appl-job { font-size: 0.8125rem; font-weight: 500; }\n\n      .uc-appl-eta {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 0.8125rem;\n      }\n      .uc-appl-eta__count { font-weight: 800; font-variant-numeric: tabular-nums; font-size: 0.9375rem; }\n\n      /* ── Controls ── */\n      .uc-appl-controls { display: flex; gap: 8px; flex-wrap: wrap; width: 100%; }\n      .uc-appl--hero .uc-appl-controls { justify-content: center; }\n      .uc-appl-btn {\n        font: inherit;\n        font-size: 0.8125rem;\n        font-weight: 700;\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 8px 16px;\n        border-radius: 999px;\n        cursor: pointer;\n        border: 1px solid color-mix(in srgb, var(--divider-color) 70%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--secondary-text-color);\n        transition: background 0.15s, border-color 0.15s, color 0.15s, box-shadow 0.15s;\n        white-space: nowrap;\n        flex: 1;\n        justify-content: center;\n        min-width: 0;\n      }\n      .uc-appl-btn ha-icon { --mdc-icon-size: 17px; }\n      .uc-appl-btn.is-active {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 55%, transparent);\n        background: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 14%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--uc-appl-accent, var(--primary-color));\n        box-shadow: 0 2px 12px color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 12%, transparent);\n      }\n      .uc-appl-btn:hover:not(:disabled):not(.is-active) {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 30%, var(--divider-color));\n        color: var(--primary-text-color);\n      }\n      .uc-appl-btn:disabled { opacity: 0.4; cursor: not-allowed; }\n      .uc-appl-btn--power { flex: 0 0 auto; padding: 8px 12px; }\n\n      .uc-appl-iconbtn {\n        font: inherit;\n        width: 36px;\n        height: 36px;\n        padding: 0;\n        border-radius: 50%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: 1px solid color-mix(in srgb, var(--divider-color) 70%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--secondary-text-color);\n        flex-shrink: 0;\n        transition: background 0.15s, border-color 0.15s, color 0.15s;\n      }\n      .uc-appl-iconbtn ha-icon { --mdc-icon-size: 18px; }\n      .uc-appl-iconbtn.is-active,\n      .uc-appl-iconbtn:hover:not(:disabled) {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 45%, transparent);\n        color: var(--uc-appl-accent, var(--primary-color));\n      }\n      .uc-appl-iconbtn:disabled { opacity: 0.4; cursor: not-allowed; }\n\n      /* ── Status chips ── */\n      .uc-appl-chips { display: flex; flex-wrap: wrap; gap: 6px; }\n      .uc-appl--hero .uc-appl-chips { justify-content: center; }\n      .uc-appl-chip {\n        display: inline-flex;\n        align-items: center;\n        gap: 5px;\n        font-size: 0.6875rem;\n        font-weight: 600;\n        letter-spacing: 0.02em;\n        padding: 3.5px 10px;\n        border-radius: 999px;\n        color: var(--secondary-text-color);\n        background: color-mix(in srgb, var(--divider-color) 14%, transparent);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 40%, transparent);\n        white-space: nowrap;\n      }\n      .uc-appl-chip ha-icon { --mdc-icon-size: 13px; }\n      .uc-appl-chip--warn {\n        color: var(--warning-color, #FF9800);\n        background: color-mix(in srgb, var(--warning-color, #FF9800) 12%, transparent);\n        border-color: color-mix(in srgb, var(--warning-color, #FF9800) 35%, transparent);\n      }\n      .uc-appl-chip--action {\n        font: inherit;\n        font-size: 0.6875rem;\n        font-weight: 700;\n        cursor: pointer;\n        color: var(--uc-appl-accent, var(--primary-color));\n        background: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 12%, transparent);\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 40%, transparent);\n        transition: background 0.14s;\n      }\n      .uc-appl-chip--action:hover {\n        background: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 20%, transparent);\n      }\n\n      /* ── Cycle setting dropdowns ── */\n      .uc-appl-settings {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n        gap: 8px;\n        width: 100%;\n      }\n      .uc-appl-setting {\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n        min-width: 0;\n      }\n      .uc-appl-setting__label {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        min-width: 0;\n        font-size: 0.625rem;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.08em;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n      }\n      .uc-appl-setting__icon {\n        flex: none;\n        --mdc-icon-size: 14px;\n        width: 14px;\n        height: 14px;\n        display: inline-flex;\n      }\n      .uc-appl-setting__text {\n        min-width: 0;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-appl-setting__select-wrap {\n        position: relative;\n        display: flex;\n        align-items: center;\n      }\n      .uc-appl-setting__select-wrap ha-icon {\n        --mdc-icon-size: 16px;\n        position: absolute;\n        right: 9px;\n        color: var(--secondary-text-color);\n        pointer-events: none;\n      }\n      .uc-appl-setting__select {\n        font: inherit;\n        font-size: 0.8125rem;\n        font-weight: 600;\n        width: 100%;\n        padding: 7px 28px 7px 11px;\n        border-radius: var(--uc-r-10, 10px);\n        cursor: pointer;\n        color: var(--primary-text-color);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 60%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        appearance: none;\n        -webkit-appearance: none;\n        outline: none;\n        transition: border-color 0.14s;\n      }\n      .uc-appl-setting__select:hover:not(:disabled),\n      .uc-appl-setting__select:focus-visible {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 45%, transparent);\n      }\n      .uc-appl-setting__select:disabled { opacity: 0.4; cursor: not-allowed; }\n      .uc-appl-setting__select option {\n        background: var(--uc-pane-bg, var(--card-background-color, #1f1f1f));\n        color: var(--primary-text-color);\n      }\n\n      /* ── Feature switches ── */\n      .uc-appl-features { display: flex; flex-wrap: wrap; gap: 7px; width: 100%; }\n      .uc-appl--hero .uc-appl-features { justify-content: center; }\n      .uc-appl-feature {\n        font: inherit;\n        font-size: 0.75rem;\n        font-weight: 600;\n        padding: 6px 13px;\n        border-radius: 999px;\n        cursor: pointer;\n        border: 1px solid color-mix(in srgb, var(--divider-color) 70%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 7%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--secondary-text-color);\n        transition: background 0.14s, border-color 0.14s, color 0.14s, box-shadow 0.14s;\n        white-space: nowrap;\n      }\n      .uc-appl-feature.is-active {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 55%, transparent);\n        background: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 13%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--uc-appl-accent, var(--primary-color));\n        font-weight: 700;\n        box-shadow: 0 2px 10px color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 10%, transparent);\n      }\n      .uc-appl-feature:hover:not(:disabled):not(.is-active) {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 28%, var(--divider-color));\n        color: var(--primary-text-color);\n      }\n      .uc-appl-feature:disabled { opacity: 0.4; cursor: not-allowed; }\n\n      /* ── Metrics ── */\n      .uc-appl-metrics {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));\n        gap: 8px;\n        width: 100%;\n      }\n      .uc-appl-metric {\n        display: flex;\n        flex-direction: column;\n        gap: 2px;\n        padding: 9px 12px;\n        border-radius: var(--uc-r-12, 12px);\n        background: color-mix(in srgb, var(--divider-color) 10%, transparent);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 32%, transparent);\n        min-width: 0;\n      }\n      .uc-appl--hero .uc-appl-metric { align-items: center; }\n      .uc-appl-metric__label {\n        font-size: 0.625rem;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.09em;\n        color: var(--secondary-text-color);\n      }\n      .uc-appl-metric__value {\n        font-size: 1rem;\n        font-weight: 800;\n        font-variant-numeric: tabular-nums;\n        letter-spacing: -0.01em;\n      }\n      .uc-appl-metric__unit {\n        font-size: 0.6875rem;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        margin-left: 3px;\n      }\n\n      /* ── Fridge temperature tiles ── */\n      .uc-appl-temps {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 10px;\n        width: 100%;\n      }\n      .uc-appl-temp {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n        padding: 12px 14px;\n        border-radius: var(--uc-r-14, 14px);\n        background: color-mix(in srgb, var(--divider-color) 10%, transparent);\n        border: 1px solid color-mix(in srgb, var(--divider-color) 32%, transparent);\n        min-width: 0;\n      }\n      .uc-appl-temp--alert {\n        border-color: color-mix(in srgb, var(--warning-color, #FF9800) 45%, transparent);\n        background: color-mix(in srgb, var(--warning-color, #FF9800) 7%, transparent);\n      }\n      .uc-appl-temp__head {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 0.6875rem;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.08em;\n        color: var(--secondary-text-color);\n      }\n      .uc-appl-temp__head ha-icon { --mdc-icon-size: 14px; color: var(--uc-appl-accent, var(--primary-color)); }\n      .uc-appl-temp__open {\n        margin-left: auto;\n        color: var(--warning-color, #FF9800);\n        font-size: 0.625rem;\n      }\n      .uc-appl-temp__value {\n        font-size: 1.7rem;\n        font-weight: 800;\n        font-variant-numeric: tabular-nums;\n        letter-spacing: -0.03em;\n        line-height: 1;\n      }\n      .uc-appl-temp__unit { font-size: 0.9375rem; font-weight: 600; color: var(--secondary-text-color); margin-left: 2px; }\n      .uc-appl-temp__set { display: flex; align-items: center; gap: 8px; margin-top: 2px; }\n      .uc-appl-temp__target { font-size: 0.75rem; font-weight: 600; flex: 1; text-align: center; white-space: nowrap; }\n      .uc-appl-step {\n        font: inherit;\n        width: 26px;\n        height: 26px;\n        padding: 0;\n        border-radius: 50%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: 1px solid color-mix(in srgb, var(--divider-color) 72%, transparent);\n        background: color-mix(in srgb, var(--divider-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        color: var(--secondary-text-color);\n        flex-shrink: 0;\n        transition: border-color 0.14s, color 0.14s;\n      }\n      .uc-appl-step ha-icon { --mdc-icon-size: 15px; }\n      .uc-appl-step:hover {\n        border-color: color-mix(in srgb, var(--uc-appl-accent, var(--primary-color)) 40%, transparent);\n        color: var(--uc-appl-accent, var(--primary-color));\n      }\n\n      /* ── Animations ── */\n      @keyframes ucApplSpin {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n      @keyframes ucApplPulse {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.35; }\n      }\n      @keyframes ucApplBubble {\n        0% { transform: translateY(0); opacity: 0.5; }\n        100% { transform: translateY(-16px); opacity: 0; }\n      }\n      @keyframes ucApplHeat {\n        0%, 100% { transform: translateY(0); opacity: 0.35; }\n        50% { transform: translateY(-3px); opacity: 0.85; }\n      }\n      @keyframes ucApplSteam {\n        0% { transform: translateY(0); opacity: 0; }\n        30% { opacity: 0.7; }\n        100% { transform: translateY(-7px); opacity: 0; }\n      }\n      @keyframes ucApplDoorGlow {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.45; }\n      }\n\n      .uc-appl-drum--spin { animation: ucApplSpin 1.7s linear infinite; }\n      .uc-appl-drum--paused { opacity: 0.85; }\n      .uc-appl-led { animation: ucApplPulse 1.5s ease-in-out infinite; }\n      .uc-appl-burner--on { animation: ucApplPulse 1.9s ease-in-out infinite; }\n      .uc-appl-ring { animation: ucApplPulse 3s ease-in-out infinite; }\n      .uc-appl-fx--on .uc-appl-bubble--a { animation: ucApplBubble 1.7s ease-in infinite; }\n      .uc-appl-fx--on .uc-appl-bubble--b { animation: ucApplBubble 2s ease-in infinite 0.4s; }\n      .uc-appl-fx--on .uc-appl-bubble--c { animation: ucApplBubble 1.4s ease-in infinite 0.8s; }\n      .uc-appl-fx--on .uc-appl-heat { animation: ucApplHeat 1.4s ease-in-out infinite; }\n      .uc-appl-fx--on .uc-appl-heat--b { animation-delay: 0.2s; }\n      .uc-appl-fx--on .uc-appl-heat--c { animation-delay: 0.4s; }\n      .uc-appl-fx--on .uc-appl-steam { animation: ucApplSteam 2.2s ease-out infinite; }\n      .uc-appl-fx--on .uc-appl-steam--b { animation-delay: 0.6s; }\n      .uc-appl-fx--on .uc-appl-steam--c { animation-delay: 1.2s; }\n      .uc-appl-spray--spin { animation: ucApplSpin 2.6s linear infinite; }\n      .uc-appl-door-open { animation: ucApplDoorGlow 1.6s ease-in-out infinite; }\n\n      @media (prefers-reduced-motion: reduce) {\n        .uc-appl-drum--spin,\n        .uc-appl-led,\n        .uc-appl-ring,\n        .uc-appl-dot,\n        .uc-appl-spray--spin,\n        .uc-appl-door-open,\n        .uc-appl-burner--on,\n        .uc-appl-fx--on * { animation: none !important; }\n      }\n\n      @media (max-width: 420px) {\n        .uc-appl-standard__top { flex-direction: column; text-align: center; }\n        .uc-appl-standard__info { align-items: center; }\n        .uc-appl-temps { grid-template-columns: 1fr; }\n      }\n    `}}class M extends D{constructor(){super(...arguments),this.cardType="washer",this.metadata={type:"washer",title:"Washer",description:"Animated washing machine card with cycle status, remaining time, controls, and energy use",author:"WJD Designs",version:"1.0.0",icon:"mdi:washing-machine",category:"interactive",tags:["washer","washing machine","laundry","appliance","smartthings","cycle","animated","interactive"]}}}class q extends D{constructor(){super(...arguments),this.cardType="dryer",this.metadata={type:"dryer",title:"Dryer",description:"Animated dryer card with cycle status, remaining time, controls, and energy use",author:"WJD Designs",version:"1.0.0",icon:"mdi:tumble-dryer",category:"interactive",tags:["dryer","tumble dryer","laundry","appliance","smartthings","cycle","animated","interactive"]}}}class A extends D{constructor(){super(...arguments),this.cardType="dishwasher",this.metadata={type:"dishwasher",title:"Dishwasher",description:"Animated dishwasher card with cycle status, remaining time, controls, and wash options",author:"WJD Designs",version:"1.0.0",icon:"mdi:dishwasher",category:"interactive",tags:["dishwasher","kitchen","appliance","smartthings","cycle","animated","interactive"]}}}class L extends D{constructor(){super(...arguments),this.cardType="fridge",this.metadata={type:"fridge",title:"Refrigerator",description:"Refrigerator card with temperatures, setpoints, door alerts, and ice/cooling controls",author:"WJD Designs",version:"1.0.0",icon:"mdi:fridge-outline",category:"interactive",tags:["fridge","refrigerator","freezer","kitchen","appliance","smartthings","animated","interactive"]}}}class N extends D{constructor(){super(...arguments),this.cardType="range",this.metadata={type:"range",title:"Range & Oven",description:"Range card with live cooktop burner indicators, oven status and temperature, dual-oven support, and light control",author:"WJD Designs",version:"1.0.0",icon:"mdi:stove",category:"interactive",tags:["range","oven","stove","cooktop","kitchen","appliance","smartthings","animated","interactive"]}}}},8964(e,t,r){r.d(t,{M8:()=>n,SP:()=>o,YI:()=>c});const i=new Set(["on","open","opened","true","ajar","offen","geöffnet","geoeffnet","ouvert","ouverte","aperto","abierto","geopend"]);function n(e){if(null==e)return"";const t=String(e).trim().toLowerCase(),r=t.lastIndexOf(".");return r>=0&&r<t.length-1&&/^[a-z_]+(\.[a-z_]+)+$/.test(t)?t.slice(r+1):t}function o(e){return i.has(n(e))}function a(e){return e.entities}const s=/^(binary_)?sensor\..*bsh_common_status_doorstate(_\d+)?$/,l=/^sensor\..*bsh_common_status_operationstate(_\d+)?$/;function c(e,t){var r,i;if(!e||!t)return{};const n=a(e),o=function(e,t){var r;const i=a(e),n=null===(r=null==i?void 0:i[t])||void 0===r?void 0:r.device_id;return i&&n?Object.keys(i).filter(t=>{var r,o;return(null===(r=i[t])||void 0===r?void 0:r.device_id)===n&&!!(null===(o=e.states)||void 0===o?void 0:o[t])}):[]}(e,t);if(!n||0===o.length)return{};const c=e=>o.find(t=>{var r,i,o;return t.startsWith("sensor.")&&(null===(r=n[t])||void 0===r?void 0:r.translation_key)===e&&(!(null===(i=n[t])||void 0===i?void 0:i.platform)||"home_connect"===(null===(o=n[t])||void 0===o?void 0:o.platform))}),p=null!==(r=c("door"))&&void 0!==r?r:o.find(e=>s.test(e)),d=null!==(i=c("operation_state"))&&void 0!==i?i:o.find(e=>l.test(e)),u={};return p&&(u.door=p),d&&(u.operationState=d),u}}};