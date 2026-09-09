export const __webpack_esm_ids__=[477];export const __webpack_esm_modules__={4413(e,t,n){n.d(t,{UltraVehicleMaintenanceModule:()=>F});var i=n(2618),o=n(7475),r=n(6478),a=n(3488),s=n(3820),l=n(2063),c=n(7907),d=n(1671);const u="vehicle_maintenance",v=864e5;function m(e){if(!e)return null;const t=String(e).trim().toLowerCase().replace(/\./g,"");return"mi"===t||"mile"===t||"miles"===t?"mi":"km"===t||"kilometer"===t||"kilometers"===t||"kilometre"===t||"kilometres"===t?"km":null}function h(e,t,n){return t===n?e:"km"===t?.621371*e:1.609344*e}const p=new Set(["unavailable","unknown","none","","null"]);function g(e,t,n){var i,o,r;const a=n||(null==t?void 0:t.odometer_entity)||"";if(!e||!a)return null;const s=null===(i=e.states)||void 0===i?void 0:i[a];if(!s)return null;if(p.has(String(s.state).trim().toLowerCase()))return null;const l=Number(s.state);if(!Number.isFinite(l))return null;const c="km"===(null==t?void 0:t.distance_unit)?"km":"mi",d=String(null!==(r=null===(o=s.attributes)||void 0===o?void 0:o.unit_of_measurement)&&void 0!==r?r:""),u=m(d),v=null!==u&&u!==c;return{value:(v?h(l,u,c):l)+(Number(null==t?void 0:t.odometer_offset)||0),raw:l,sourceUnit:u,sourceUnitRaw:d,converted:v}}function _(e){if(!e)return null;const t=String(e).trim(),n=/^(\d{4})-(\d{2})-(\d{2})/.exec(t);if(!n){const e=new Date(t).getTime();return Number.isFinite(e)?e:null}const i=Number(n[1]),o=Number(n[2]),r=Number(n[3]),a=new Date(i,o-1,r).getTime();return Number.isFinite(a)?a:null}function y(e=Date.now()){const t=new Date(e),n=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${t.getFullYear()}-${n}-${i}`}function f(e,t){var n,i,o;if(!t||0===t.length||!e)return null;let r=null,a=-1/0;for(const s of t){if((null===(n=s.payload)||void 0===n?void 0:n.service_id)!==e)continue;const t=null!==(o=_(null===(i=s.payload)||void 0===i?void 0:i.at))&&void 0!==o?o:-1/0;t>=a&&(a=t,r=s)}return r}function b(e,t){return Array.isArray(e)?t&&0!==t.length?e.map(e=>{var n,i;const o=function(e,t){var n,i;const o=Number.isFinite(Number(e.last_distance))?Number(e.last_distance):null,r=e.last_date?String(e.last_date):null,a=f(e.id,t);if(!a)return{lastDistance:o,lastDate:r,fromLog:!1};const s=(null===(n=a.payload)||void 0===n?void 0:n.at)?String(a.payload.at).slice(0,10):null,l=Number.isFinite(Number(null===(i=a.payload)||void 0===i?void 0:i.odometer))?Number(a.payload.odometer):null;return{lastDistance:null!=l?l:o,lastDate:null!=s?s:r,fromLog:!0}}(e,t);return o.fromLog?Object.assign(Object.assign({},e),{last_distance:null!==(n=o.lastDistance)&&void 0!==n?n:void 0,last_date:null!==(i=o.lastDate)&&void 0!==i?i:void 0}):e}):e:[]}function x(e){const t=Number(e);return Number.isFinite(t)&&t>0?t:null}function w(e,t,n,i,o="en"){if(!Array.isArray(e))return[];const a="km"===(null==i?void 0:i.distance_unit)?"km":"mi",s=Number.isFinite(Number(null==i?void 0:i.due_soon_distance))?Number(i.due_soon_distance):500,l=Number.isFinite(Number(null==i?void 0:i.due_soon_days))?Number(i.due_soon_days):14;return e.map(e=>{const i=x(e.interval_distance),c=x(e.interval_months),d=Number.isFinite(Number(e.last_distance))?Number(e.last_distance):null,u=_(e.last_date);let m=null,h=null;null!==i&&null!==t&&null!==d&&(m=d+i-t,h=(t-d)/i);let p=null,g=null,y=null;if(null!==c&&null!==u){y=function(e,t){const n=new Date(e),i=n.getDate();n.setDate(1),n.setMonth(n.getMonth()+t);const o=new Date(n.getFullYear(),n.getMonth()+1,0).getDate();return n.setDate(Math.min(i,o)),n.getTime()}(u,c),p=Math.ceil((y-n)/v);const e=y-u;g=e>0?(n-u)/e:1}let f="none",b=null;null!==h&&null!==g?(f=h>=g?"distance":"time",b=Math.max(h,g)):null!==h?(f="distance",b=h):null!==g&&(f="time",b=g);let w="unknown";"none"!==f&&(w=null!==m&&m<=0||null!==p&&p<=0?"overdue":null!==m&&m<=s||null!==p&&p<=l?"due_soon":"ok");const M=function(e,t,n){if("none"===e.drivenBy)return(0,r.kg)("editor.vehicle_maintenance.due_unknown",n,"No history yet");const i="km"===t?(0,r.kg)("editor.vehicle_maintenance.unit_km",n,"km"):(0,r.kg)("editor.vehicle_maintenance.unit_mi",n,"mi");if("overdue"===e.state){const t=null!==e.daysRemaining&&e.daysRemaining<=0;if(null!==e.distanceRemaining&&e.distanceRemaining<=0&&(!t||"distance"===e.drivenBy))return $((0,r.kg)("editor.vehicle_maintenance.due_overdue_distance",n,"overdue by {value} {unit}"),{value:k(Math.abs(e.distanceRemaining),n),unit:i});if(t){const t=Math.abs(e.daysRemaining);return 0===t?(0,r.kg)("editor.vehicle_maintenance.due_today",n,"due today"):$((0,r.kg)("editor.vehicle_maintenance.due_overdue_time",n,"overdue by {value}"),{value:S(t,n)})}}return"distance"===e.drivenBy&&null!==e.distanceRemaining?$((0,r.kg)("editor.vehicle_maintenance.due_in_distance",n,"in {value} {unit}"),{value:k(e.distanceRemaining,n),unit:i}):null!==e.daysRemaining?0===e.daysRemaining?(0,r.kg)("editor.vehicle_maintenance.due_today",n,"due today"):$((0,r.kg)("editor.vehicle_maintenance.due_in_time",n,"in {value}"),{value:S(e.daysRemaining,n)}):(0,r.kg)("editor.vehicle_maintenance.due_unknown",n,"No history yet")}({drivenBy:f,state:w,distanceRemaining:m,daysRemaining:p},a,o);return{item:e,distanceRemaining:m,daysRemaining:p,progress:b,drivenBy:f,state:w,dueLabel:M,nextDueDate:y}})}function k(e,t,n=0){try{return new Intl.NumberFormat(t,{maximumFractionDigits:n}).format(e)}catch(t){return String(Math.round(e))}}function $(e,t){let n=e;for(const[e,i]of Object.entries(t))n=n.split(`{${e}}`).join(i);return n}function S(e,t){const n=Math.max(Math.abs(Math.round(e)),0);if(n>=60){const e=Math.round(n/30.44);return 1===e?(0,r.kg)("editor.vehicle_maintenance.duration_month",t,"1 month"):$((0,r.kg)("editor.vehicle_maintenance.duration_months",t,"{value} months"),{value:String(e)})}if(n>=14){const e=Math.round(n/7);return 1===e?(0,r.kg)("editor.vehicle_maintenance.duration_week",t,"1 week"):$((0,r.kg)("editor.vehicle_maintenance.duration_weeks",t,"{value} weeks"),{value:String(e)})}return 1===n?(0,r.kg)("editor.vehicle_maintenance.duration_day",t,"1 day"):$((0,r.kg)("editor.vehicle_maintenance.duration_days",t,"{value} days"),{value:String(n)})}async function M(e,t,n){return e&&t?(await s.N2.getRecords(e,t,u,n)).filter(e=>!!e.payload&&"string"==typeof e.payload.service_id).sort((e,t)=>{var n,i;return(null!==(n=_(t.payload.at))&&void 0!==n?n:0)-(null!==(i=_(e.payload.at))&&void 0!==i?i:0)}):[]}function N(e,t){e&&t&&s.N2.invalidate(e,t)}const L=[{key:"oil",labelKey:"preset_oil",fallbackName:"Oil Change",icon:"mdi:oil",intervalMiles:5e3,intervalMonths:6},{key:"tires",labelKey:"preset_tires",fallbackName:"Tire Rotation",icon:"mdi:tire",intervalMiles:6e3,intervalMonths:6},{key:"brakes",labelKey:"preset_brakes",fallbackName:"Brake Inspection",icon:"mdi:car-brake-alert",intervalMiles:2e4,intervalMonths:24},{key:"coolant",labelKey:"preset_coolant",fallbackName:"Coolant Flush",icon:"mdi:car-coolant-level",intervalMiles:6e4,intervalMonths:60},{key:"transmission",labelKey:"preset_transmission",fallbackName:"Transmission Fluid",icon:"mdi:car-shift-pattern",intervalMiles:6e4,intervalMonths:60},{key:"air_filter",labelKey:"preset_air_filter",fallbackName:"Air Filter",icon:"mdi:air-filter",intervalMiles:15e3,intervalMonths:12},{key:"cabin_filter",labelKey:"preset_cabin_filter",fallbackName:"Cabin Filter",icon:"mdi:air-conditioner",intervalMiles:15e3,intervalMonths:12},{key:"wipers",labelKey:"preset_wipers",fallbackName:"Wiper Blades",icon:"mdi:wiper",intervalMiles:0,intervalMonths:12},{key:"battery",labelKey:"preset_battery",fallbackName:"Battery Check",icon:"mdi:car-battery",intervalMiles:0,intervalMonths:12},{key:"spark_plugs",labelKey:"preset_spark_plugs",fallbackName:"Spark Plugs",icon:"mdi:spark-plug",intervalMiles:6e4,intervalMonths:60},{key:"registration",labelKey:"preset_registration",fallbackName:"Registration",icon:"mdi:card-account-details",intervalMiles:0,intervalMonths:12},{key:"inspection",labelKey:"preset_inspection",fallbackName:"Safety Inspection",icon:"mdi:clipboard-check-outline",intervalMiles:0,intervalMonths:12}];function A(e){return e<=0?0:e>=1e4?1e3*Math.round(e/1e3):e>=1e3?500*Math.round(e/500):e>=100?100*Math.round(e/100):Math.round(e)}n(7921);class F extends o.m{constructor(){super(...arguments),this.metadata={type:"vehicle_maintenance",title:"Vehicle Maintenance",description:"Odometer and time based service intervals with a cost-tracked service log",author:"WJD Designs",version:"1.0.0",icon:"mdi:car-wrench",category:"data",tags:["pro","premium","vehicle","car","maintenance","service","odometer","garage"]},this._preview=new Map,this._editor=new Map}createDefault(e,t){var n;const i=e||this.generateId("vehicle_maintenance"),o=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";return{id:i,type:"vehicle_maintenance",vehicle_name:(0,r.kg)("editor.vehicle_maintenance.default_name",o,"My Vehicle"),vehicle_image:"",odometer_entity:"",odometer_offset:0,distance_unit:"mi",fuel_entity:"",battery_entity:"",todo_entity:"",services:this._seedServices(i,o),layout:"hero",title:"",show_title:!0,show_vehicle_image:!0,show_odometer:!0,show_fuel:!0,show_next_service:!0,show_service_log:!0,show_costs:!0,show_progress_bars:!0,due_soon_distance:500,due_soon_days:14,log_limit:25,currency_symbol:"$",ok_color:"",due_soon_color:"",overdue_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}_seedServices(e,t){const n=y(),i=(t,i,o,r,a)=>({id:`${e}-${t}`,name:i,icon:o,interval_distance:r,interval_months:a,last_distance:void 0,last_date:n,estimated_cost:void 0,notes:""});return[i("oil",(0,r.kg)("editor.vehicle_maintenance.preset_oil",t,"Oil Change"),"mdi:oil",5e3,6),i("tires",(0,r.kg)("editor.vehicle_maintenance.preset_tires",t,"Tire Rotation"),"mdi:tire",6e3,6),i("air-filter",(0,r.kg)("editor.vehicle_maintenance.preset_air_filter",t,"Air Filter"),"mdi:air-filter",15e3,12),i("brakes",(0,r.kg)("editor.vehicle_maintenance.preset_brakes",t,"Brake Inspection"),"mdi:car-brake-alert",2e4,24),i("registration",(0,r.kg)("editor.vehicle_maintenance.preset_registration",t,"Registration"),"mdi:card-account-details",0,12)]}validate(e){const t=[],n=e;return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),Array.isArray(n.services)&&0!==n.services.length||t.push("Add at least one service"),{valid:0===t.length,errors:t}}getRuntimeEntityIds(e){const t=e,n=[];return t.odometer_entity&&n.push(t.odometer_entity),t.fuel_entity&&n.push(t.fuel_entity),t.battery_entity&&n.push(t.battery_entity),t.todo_entity&&n.push(t.todo_entity),n}_ensurePreview(e){let t=this._preview.get(e);return t||(t={log:[],loading:!1,lastFetchedAt:0,error:null,busyId:null,logExpanded:!1,onListChanged:null},this._preview.set(e,t)),t}_ensureEditor(e){let t=this._editor.get(e);return t||(t={expandedRows:new Set,presetsOpen:!1,unitOffer:null},this._editor.set(e,t)),t}_ensureLogLoaded(e,t){if(!t||!(null==e?void 0:e.todo_entity))return;const n=this._ensurePreview(e.id);if(n.loading)return;const i=Date.now();n.lastFetchedAt>0&&i-n.lastFetchedAt<2e3||(n.onListChanged||(n.onListChanged=()=>{const n=this._preview.get(e.id);n&&(n.lastFetchedAt=0),this._ensureLogLoaded(e,t)}),n.loading=!0,M(t,e.todo_entity,n.onListChanged).then(t=>{const n=this._ensurePreview(e.id);n.log=t,n.loading=!1,n.error=null,n.lastFetchedAt=Date.now(),this.triggerPreviewUpdate(!0)}).catch(t=>{const n=this._ensurePreview(e.id);n.loading=!1,n.error=t instanceof Error?t.message:String(t),n.lastFetchedAt=Date.now(),this.triggerPreviewUpdate(!0)}))}_num(e,t,n=0){try{return new Intl.NumberFormat(t,{maximumFractionDigits:n}).format(e)}catch(t){return String(Math.round(e))}}_money(e,t,n){var i;return`${null!==(i=t.currency_symbol)&&void 0!==i?i:"$"}${this._num(e,n,2)}`}_date(e,t){if(!e)return"";try{const n=/^(\d{4})-(\d{2})-(\d{2})/.exec(String(e)),i=n?new Date(Number(n[1]),Number(n[2])-1,Number(n[3])):new Date(String(e));return Number.isNaN(i.getTime())?String(e):new Intl.DateTimeFormat(t,{year:"numeric",month:"short",day:"numeric"}).format(i)}catch(t){return String(e)}}_unitLabel(e,t){return"km"===e.distance_unit?(0,r.kg)("editor.vehicle_maintenance.unit_km",t,"km"):(0,r.kg)("editor.vehicle_maintenance.unit_mi",t,"mi")}_palette(e){return{ok:e.ok_color||"var(--success-color, #43a047)",soon:e.due_soon_color||"var(--warning-color, #fb8c00)",over:e.overdue_color||"var(--error-color, #e53935)",text:e.text_color||"var(--primary-text-color)",secondary:e.secondary_text_color||"var(--secondary-text-color)",cardBg:e.card_background_color||"var(--uc-pane-bg, var(--card-background-color))"}}_stateColor(e,t){return"overdue"===e?t.over:"due_soon"===e?t.soon:"ok"===e?t.ok:t.secondary}_statuses(e,t,n,i){var o,r;const a=g(t,e,this.resolveEntity(e.odometer_entity,n)||e.odometer_entity||""),s=null===(o=this._preview.get(e.id))||void 0===o?void 0:o.log;return{statuses:w(b(e.services||[],s),null!==(r=null==a?void 0:a.value)&&void 0!==r?r:null,Date.now(),e,i),odometer:a}}_setServices(e,t){t({services:e}),this.triggerPreviewUpdate()}_patchService(e,t,n,i){const o=(Array.isArray(e.services)?e.services:[]).map((e,i)=>i===t?Object.assign(Object.assign({},e),n):e);this._setServices(o,i)}_moveService(e,t,n,i){const o=[...Array.isArray(e.services)?e.services:[]],r=t+n;if(r<0||r>=o.length)return;const a=o[t],s=o[r];a&&s&&(o[t]=s,o[r]=a,this._setServices(o,i))}async _deleteService(e,t,n,i){const o=Array.isArray(e.services)?e.services:[];o[t]&&await l.W.confirm((0,r.kg)("editor.vehicle_maintenance.delete_title",n,"Delete service?"),(0,r.kg)("editor.vehicle_maintenance.delete_message",n,"This removes the service and its interval from the card. Entries already written to the service log are kept."),{destructive:!0,confirmText:(0,r.kg)("editor.vehicle_maintenance.delete_confirm",n,"Delete"),cancelText:(0,r.kg)("editor.vehicle_maintenance.cancel",n,"Cancel")})&&this._setServices(o.filter((e,n)=>n!==t),i)}_addService(e,t,n){const i=Array.isArray(e.services)?e.services:[],o={id:this.generateId("vmsvc"),name:(0,r.kg)("editor.vehicle_maintenance.new_service",t,"New service"),icon:"mdi:wrench",interval_distance:5e3,interval_months:6,last_distance:void 0,last_date:y(),estimated_cost:void 0,notes:""};this._ensureEditor(e.id).expandedRows.add(o.id),this._setServices([...i,o],n)}_addPreset(e,t,n,i){const o=Array.isArray(e.services)?e.services:[],a=t.intervalMiles>0&&"km"===e.distance_unit?A(h(t.intervalMiles,"mi","km")):t.intervalMiles,s={id:this.generateId(`vmsvc-${t.key}`),name:(0,r.kg)(`editor.vehicle_maintenance.${t.labelKey}`,n,t.fallbackName),icon:t.icon,interval_distance:a,interval_months:t.intervalMonths,last_distance:void 0,last_date:y(),estimated_cost:void 0,notes:""};this._setServices([...o,s],i)}async _markServiced(e,t,n,i,o,a){var c,d;const v=g(n,e,this.resolveEntity(e.odometer_entity,i)||e.odometer_entity||""),m=y(),h=this._unitLabel(e,o),p=null!==v?(0,r.kg)("editor.vehicle_maintenance.mark_message_odometer",o,"Logs {name} as done today at {odometer} {unit}.").split("{name}").join(t.name).split("{odometer}").join(this._num(v.value,o)).split("{unit}").join(h):(0,r.kg)("editor.vehicle_maintenance.mark_message_no_odometer",o,"Logs {name} as done today. No odometer is configured, so no reading is stored.").split("{name}").join(t.name);if(!await l.W.confirm((0,r.kg)("editor.vehicle_maintenance.mark_title",o,"Mark as serviced?"),p,{confirmText:(0,r.kg)("editor.vehicle_maintenance.mark_confirm",o,"Log service"),cancelText:(0,r.kg)("editor.vehicle_maintenance.cancel",o,"Cancel")}))return;const _=this._ensurePreview(e.id);_.busyId=t.id,this.triggerPreviewUpdate(!0);try{if(e.todo_entity&&(await async function(e,t,n,i){var o;if(!e||!t||!n)return null;const r=i.at?String(i.at).slice(0,10):y(),a=null!=i.odometer&&Number.isFinite(i.odometer)?Number(i.odometer):null,l=null!=i.cost&&Number.isFinite(i.cost)?Number(i.cost):null,c={service_id:n.id,service_name:n.name,at:r,odometer:a,cost:l},d=null===(o=i.note)||void 0===o?void 0:o.trim();d&&(c.note=d);const v=`${n.name} — ${r}`;await s.N2.addRecord(e,t,u,v,c,{due:r});try{const i=(await M(e,t)).find(e=>e.payload.service_id===n.id&&e.payload.at===r&&"completed"!==e.status);i&&await s.N2.setStatus(e,t,i.uid,"completed")}catch(e){}return c}(n,e.todo_entity,t,{odometer:null!==(c=null==v?void 0:v.value)&&void 0!==c?c:null,cost:null!==(d=t.estimated_cost)&&void 0!==d?d:null,at:m}),N(n,e.todo_entity),_.lastFetchedAt=0,this._ensureLogLoaded(e,n)),a){const n=(Array.isArray(e.services)?e.services:[]).map(e=>{var n;return e.id===t.id?Object.assign(Object.assign({},e),{last_date:m,last_distance:null!==(n=null==v?void 0:v.value)&&void 0!==n?n:e.last_distance}):e});a({services:n})}}catch(e){_.error=(0,r.kg)("editor.vehicle_maintenance.log_write_failed",o,"Could not write to the service log.")}finally{_.busyId=null,this.triggerPreviewUpdate(!0)}}async _deleteLogEntry(e,t,n,i){if(!e.todo_entity)return;if(!await l.W.confirm((0,r.kg)("editor.vehicle_maintenance.delete_log_title",i,"Delete log entry?"),(0,r.kg)("editor.vehicle_maintenance.delete_log_message",i,"This permanently removes the entry from your service history."),{destructive:!0,confirmText:(0,r.kg)("editor.vehicle_maintenance.delete_confirm",i,"Delete"),cancelText:(0,r.kg)("editor.vehicle_maintenance.cancel",i,"Cancel")}))return;const o=this._ensurePreview(e.id);o.log=o.log.filter(e=>e.uid!==t.uid),this.triggerPreviewUpdate(!0),await async function(e,t,n){e&&t&&n&&await s.N2.removeRecord(e,t,n)}(n,e.todo_entity,t.uid),N(n,e.todo_entity),o.lastFetchedAt=0,this._ensureLogLoaded(e,n)}renderGeneralTab(e,t,n,o){var s;const l=e,c=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en";return(0,a.gf)(t)?(this._ensureLogLoaded(l,t),i.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        ${this._renderVehicleSection(l,t,n,c,o)}
        ${this._renderStorageSection(l,t,c,o)}
        ${this._renderServicesSection(l,t,n,c,o)}
        ${this._renderDisplaySection(l,t,c,o)}
        ${this._renderThresholdsSection(l,t,c,o)}
        ${this._renderColorsSection(l,t,c,o)}
      </div>
    `):(0,a.b5)(c,(0,r.kg)("editor.vehicle_maintenance.pro_description",c,"Track oil changes, tire rotations and registration by distance or time — whichever comes first — with a cost-tracked service log built from your car’s odometer."))}_sectionShell(e,t,n){return i.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${e}
        </div>
        ${t?i.qy`<div
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; line-height: 1.5;"
            >
              ${t}
            </div>`:i.s6}
        ${n}
      </div>
    `}_renderNotice(e,t,n="info"){const o="warn"===n?"var(--warning-color, #fb8c00)":"ok"===n?"var(--success-color, #43a047)":"var(--primary-color)";return i.qy`
      <div class="vm-notice" style="border-left-color: ${o};">
        <ha-icon icon="${e}" style="color: ${o};"></ha-icon>
        <div class="vm-notice-text">${t}</div>
      </div>
    `}_renderVehicleSection(e,t,n,o,a){const s=this.resolveEntity(e.odometer_entity,n)||e.odometer_entity||"",l=g(t,e,s),c=this._ensureEditor(e.id);return this._sectionShell((0,r.kg)("editor.vehicle_maintenance.vehicle_section",o,"Vehicle"),(0,r.kg)("editor.vehicle_maintenance.vehicle_section_desc",o,"Name your vehicle and point the module at its odometer. Everything else is optional."),i.qy`
        ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.vehicle_name",o,"Vehicle name"),(0,r.kg)("editor.vehicle_maintenance.vehicle_name_desc",o,"Shown as the heading in the hero layout."),t,{vehicle_name:e.vehicle_name||""},[this.textField("vehicle_name")],e=>{var t,n;a({vehicle_name:null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.vehicle_name)&&void 0!==n?n:""}),this.triggerPreviewUpdate()})}
        ${this.renderFileField((0,r.kg)("editor.vehicle_maintenance.vehicle_image",o,"Vehicle photo"),(0,r.kg)("editor.vehicle_maintenance.vehicle_image_desc",o,"Optional. Used as the hero banner; a clean icon header is shown when empty."),t,e.vehicle_image||"",e=>{a({vehicle_image:e}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.odometer_entity",o,"Odometer"),(0,r.kg)("editor.vehicle_maintenance.odometer_entity_desc",o,"A sensor from your car integration, an OBD dongle, or an input_number you update yourself. Leave blank to track services by time only."),t,{odometer_entity:e.odometer_entity||""},[{name:"odometer_entity",selector:{entity:{domain:["sensor","input_number"]}}}],e=>{var t,n;a({odometer_entity:null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.odometer_entity)&&void 0!==n?n:""}),this.triggerPreviewUpdate()})}
        ${this._renderOdometerReadout(e,l,o)}
        ${this.renderSegmentedField((0,r.kg)("editor.vehicle_maintenance.distance_unit",o,"Distance unit"),(0,r.kg)("editor.vehicle_maintenance.distance_unit_desc",o,"Unit used for every interval and reading. Readings from a sensor in the other unit are converted automatically."),"km"===e.distance_unit?"km":"mi",[{value:"mi",label:(0,r.kg)("editor.vehicle_maintenance.unit_mi_long",o,"Miles")},{value:"km",label:(0,r.kg)("editor.vehicle_maintenance.unit_km_long",o,"Kilometers")}],t=>{const n="km"===t?"km":"mi",i="km"===e.distance_unit?"km":"mi";n!==i&&(c.unitOffer={from:i,to:n},a({distance_unit:n}),this.triggerPreviewUpdate())},2)}
        ${this._renderUnitOffer(e,c,o,a)}
        ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.fuel_entity",o,"Fuel level"),(0,r.kg)("editor.vehicle_maintenance.fuel_entity_desc",o,"Optional. A percentage sensor renders as a bar; anything else is shown as a value."),t,{fuel_entity:e.fuel_entity||""},[{name:"fuel_entity",selector:{entity:{domain:["sensor","input_number"]}}}],e=>{var t,n;a({fuel_entity:null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.fuel_entity)&&void 0!==n?n:""}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.battery_entity",o,"Charge level"),(0,r.kg)("editor.vehicle_maintenance.battery_entity_desc",o,"Optional. For EVs and plug-in hybrids, shown alongside or instead of fuel."),t,{battery_entity:e.battery_entity||""},[{name:"battery_entity",selector:{entity:{domain:["sensor","input_number"]}}}],e=>{var t,n;a({battery_entity:null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.battery_entity)&&void 0!==n?n:""}),this.triggerPreviewUpdate()})}
      `)}_renderOdometerReadout(e,t,n){if(!e.odometer_entity)return this._renderNotice("mdi:information-outline",(0,r.kg)("editor.vehicle_maintenance.odometer_none",n,"No odometer selected. Services will be tracked by time only — distance intervals stay dormant until you pick one."));if(!t)return this._renderNotice("mdi:alert-circle-outline",(0,r.kg)("editor.vehicle_maintenance.odometer_unreadable",n,"That entity is not reporting a number right now. Distance tracking stays off until it does; time intervals keep working."),"warn");const o=this._unitLabel(e,n),a=[];t.converted&&t.sourceUnit?a.push((0,r.kg)("editor.vehicle_maintenance.odometer_converted",n,"converted from {unit}").split("{unit}").join(t.sourceUnitRaw||t.sourceUnit)):t.sourceUnit?a.push((0,r.kg)("editor.vehicle_maintenance.odometer_source_unit",n,"sensor reports {unit}").split("{unit}").join(t.sourceUnitRaw||t.sourceUnit)):a.push((0,r.kg)("editor.vehicle_maintenance.odometer_unit_assumed",n,"no unit on the sensor, assuming {unit}").split("{unit}").join(o));const s=Number(e.odometer_offset)||0;return 0!==s&&a.push((0,r.kg)("editor.vehicle_maintenance.odometer_offset_applied",n,"offset {value} applied").split("{value}").join(`${s>0?"+":""}${this._num(s,n)}`)),this._renderNotice("mdi:counter",i.qy`
        <strong>${this._num(t.value,n)} ${o}</strong>
        <span style="opacity: 0.8;"> — ${a.join(", ")}</span>
      `,"ok")}_renderUnitOffer(e,t,n,o){const a=t.unitOffer;if(!a)return i.qy``;const s="km"===a.to?(0,r.kg)("editor.vehicle_maintenance.unit_km_long",n,"Kilometers"):(0,r.kg)("editor.vehicle_maintenance.unit_mi_long",n,"Miles");return i.qy`
      <div class="vm-notice vm-notice-action" style="border-left-color: var(--primary-color);">
        <ha-icon icon="mdi:swap-horizontal" style="color: var(--primary-color);"></ha-icon>
        <div class="vm-notice-text">
          <div>
            ${(0,r.kg)("editor.vehicle_maintenance.unit_offer",n,"Unit changed to {unit}. Your interval numbers were left exactly as they were. Convert them?").split("{unit}").join(s)}
          </div>
          <div class="vm-notice-actions">
            <button
              type="button"
              class="vm-btn vm-btn-primary"
              @click=${()=>{const n=(Array.isArray(e.services)?e.services:[]).map(e=>Object.assign(Object.assign({},e),{interval_distance:e.interval_distance&&e.interval_distance>0?A(h(e.interval_distance,a.from,a.to)):e.interval_distance,last_distance:e.last_distance&&e.last_distance>0?Math.round(h(e.last_distance,a.from,a.to)):e.last_distance}));o({services:n,due_soon_distance:A(h(e.due_soon_distance||0,a.from,a.to)),odometer_offset:e.odometer_offset?Math.round(h(e.odometer_offset,a.from,a.to)):e.odometer_offset}),t.unitOffer=null,this.triggerPreviewUpdate(!0)}}
            >
              ${(0,r.kg)("editor.vehicle_maintenance.unit_offer_convert",n,"Convert numbers")}
            </button>
            <button
              type="button"
              class="vm-btn"
              @click=${()=>{t.unitOffer=null,this.triggerPreviewUpdate(!0)}}
            >
              ${(0,r.kg)("editor.vehicle_maintenance.unit_offer_keep",n,"Keep as-is")}
            </button>
          </div>
        </div>
      </div>
    `}_renderStorageSection(e,t,n,o){const a=!!e.todo_entity&&!!t&&!(0,s.pC)(t,e.todo_entity);return this._sectionShell((0,r.kg)("editor.vehicle_maintenance.storage_section",n,"Service log storage"),(0,r.kg)("editor.vehicle_maintenance.storage_section_desc",n,"Service history is stored in a Home Assistant to-do list so it survives restarts and syncs to every device."),i.qy`
        ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.todo_entity",n,"Storage list"),(0,r.kg)("editor.vehicle_maintenance.todo_entity_desc",n,"Create a Local To-do helper under Settings → Devices & services → Helpers → To-do list, then pick it here."),t,{todo_entity:e.todo_entity||""},[{name:"todo_entity",selector:{entity:{domain:"todo"}}}],t=>{var n,i;o({todo_entity:null!==(i=null===(n=t.detail.value)||void 0===n?void 0:n.todo_entity)&&void 0!==i?i:""}),this._preview.delete(e.id),this.triggerPreviewUpdate()})}
        ${e.todo_entity?i.s6:this._renderNotice("mdi:information-outline",(0,r.kg)("editor.vehicle_maintenance.todo_missing",n,"Without a list, service history is not retained. Interval tracking still works from the last-service values on each service below."))}
        ${a?this._renderNotice("mdi:alert-circle-outline",(0,r.kg)("editor.vehicle_maintenance.todo_no_description",n,"This list cannot store item descriptions (Shopping List behaves this way). Logging still works, but the stored data rides along in the item title and looks messy in the Home Assistant to-do UI. A Local To-do helper is recommended."),"warn"):i.s6}
      `)}_renderServicesSection(e,t,n,o,a){const s=this._ensureEditor(e.id),l=Array.isArray(e.services)?e.services:[],{statuses:c}=this._statuses(e,t,n,o),d=new Map(c.map(e=>[e.item.id,e]));return this._sectionShell((0,r.kg)("editor.vehicle_maintenance.services_section",o,"Services"),(0,r.kg)("editor.vehicle_maintenance.services_section_desc",o,"Each service is due on whichever comes first: distance or time. Set an interval to 0 to switch that axis off."),i.qy`
        ${0===l.length?i.qy`<div class="vm-empty-rows">
              ${(0,r.kg)("editor.vehicle_maintenance.services_empty",o,"No services yet. Add one below, or start from a preset.")}
            </div>`:i.qy`<div class="vm-rows">
              ${l.map((i,r)=>{var c;return this._renderServiceRowEditor(e,i,r,l.length,null!==(c=d.get(i.id))&&void 0!==c?c:null,t,n,o,s,a)})}
            </div>`}

        <div class="vm-row-actions">
          <button
            type="button"
            class="vm-btn vm-btn-primary"
            @click=${()=>this._addService(e,o,a)}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
            ${(0,r.kg)("editor.vehicle_maintenance.add_service",o,"Add service")}
          </button>
          <button
            type="button"
            class="vm-btn"
            aria-expanded=${s.presetsOpen?"true":"false"}
            @click=${()=>{s.presetsOpen=!s.presetsOpen,this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon=${s.presetsOpen?"mdi:chevron-up":"mdi:playlist-plus"}></ha-icon>
            ${(0,r.kg)("editor.vehicle_maintenance.add_preset",o,"Add from presets")}
          </button>
        </div>

        ${s.presetsOpen?i.qy`
              <div class="vm-presets">
                <div class="vm-presets-hint">
                  ${(0,r.kg)("editor.vehicle_maintenance.presets_hint",o,"Typical intervals you can adjust after adding. Distances are converted when your unit is kilometers.")}
                </div>
                <div class="vm-preset-grid">
                  ${L.map(t=>this._renderPresetButton(e,t,o,a))}
                </div>
              </div>
            `:i.s6}
      `)}_renderPresetButton(e,t,n,o){const a=this._unitLabel(e,n),s=t.intervalMiles>0&&"km"===e.distance_unit?A(h(t.intervalMiles,"mi","km")):t.intervalMiles,l=[];s>0&&l.push(`${this._num(s,n)} ${a}`),t.intervalMonths>0&&l.push(`${t.intervalMonths} ${(0,r.kg)("editor.vehicle_maintenance.unit_months_short",n,"mo")}`);const c=(0,r.kg)(`editor.vehicle_maintenance.${t.labelKey}`,n,t.fallbackName);return i.qy`
      <button
        type="button"
        class="vm-preset-card"
        data-uc-role="pane"
        title=${c}
        @click=${()=>this._addPreset(e,t,n,o)}
      >
        <ha-icon icon="${t.icon}"></ha-icon>
        <span class="vm-preset-name">${c}</span>
        <span class="vm-preset-interval">${l.join(" / ")}</span>
      </button>
    `}_renderServiceRowEditor(e,t,n,o,a,s,l,c,d,u){var v,m,h,p,g;const _="km"===e.distance_unit?"km":"mi",y=function(e,t,n){const i=x(e.interval_distance),o=x(e.interval_months),a="km"===t?(0,r.kg)("editor.vehicle_maintenance.unit_km",n,"km"):(0,r.kg)("editor.vehicle_maintenance.unit_mi",n,"mi"),s=(0,r.kg)("editor.vehicle_maintenance.unit_months_short",n,"mo"),l=[];return null!==i&&l.push(`${k(i,n)} ${a}`),null!==o&&l.push(`${k(o,n)} ${s}`),0===l.length?(0,r.kg)("editor.vehicle_maintenance.interval_none",n,"No interval set"):$((0,r.kg)("editor.vehicle_maintenance.interval_every",n,"every {value}"),{value:l.join(" / ")})}(t,_,c),f=this._palette(e),b=a?this._stateColor(a.state,f):f.secondary,w=d.expandedRows.has(t.id),S=(null===(v=this._preview.get(e.id))||void 0===v?void 0:v.busyId)===t.id;return i.qy`
      <ha-expansion-panel
        class="vm-service-panel"
        data-uc-role="pane"
        .expanded=${w}
        @expanded-changed=${e=>{var n;(null===(n=e.detail)||void 0===n?void 0:n.expanded)?d.expandedRows.add(t.id):d.expandedRows.delete(t.id)}}
      >
        <div slot="header" class="vm-row-header">
          <div class="vm-row-icon"><ha-icon icon="${t.icon||"mdi:wrench"}"></ha-icon></div>
          <div class="vm-row-info">
            <div class="vm-row-name">
              ${t.name||(0,r.kg)("editor.vehicle_maintenance.unnamed_service",c,"Unnamed service")}
            </div>
            <div class="vm-row-summary">${y}</div>
          </div>
          ${a&&"unknown"!==a.state?i.qy`<span
                class="vm-row-badge"
                style="color: ${b}; border-color: ${b};"
                >${a.dueLabel}</span
              >`:i.s6}
          <button
            type="button"
            class="vm-icon-btn"
            title=${(0,r.kg)("editor.vehicle_maintenance.move_up",c,"Move up")}
            aria-label=${(0,r.kg)("editor.vehicle_maintenance.move_up",c,"Move up")}
            ?disabled=${0===n}
            @click=${t=>{t.stopPropagation(),this._moveService(e,n,-1,u)}}
          >
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button
            type="button"
            class="vm-icon-btn"
            title=${(0,r.kg)("editor.vehicle_maintenance.move_down",c,"Move down")}
            aria-label=${(0,r.kg)("editor.vehicle_maintenance.move_down",c,"Move down")}
            ?disabled=${n===o-1}
            @click=${t=>{t.stopPropagation(),this._moveService(e,n,1,u)}}
          >
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
          <button
            type="button"
            class="vm-icon-btn vm-icon-btn-danger"
            title=${(0,r.kg)("editor.vehicle_maintenance.delete_service",c,"Delete service")}
            aria-label=${(0,r.kg)("editor.vehicle_maintenance.delete_service",c,"Delete service")}
            @click=${t=>{t.stopPropagation(),this._deleteService(e,n,c,u)}}
          >
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>

        <div class="vm-row-body">
          ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.service_name",c,"Name"),"",s,{name:t.name||""},[this.textField("name")],t=>{var i,o;return this._patchService(e,n,{name:null!==(o=null===(i=t.detail.value)||void 0===i?void 0:i.name)&&void 0!==o?o:""},u)})}
          ${this.renderIconField((0,r.kg)("editor.vehicle_maintenance.service_icon",c,"Icon"),"",s,t.icon||"",t=>this._patchService(e,n,{icon:t},u))}
          ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.interval_distance",c,"Distance interval"),(0,r.kg)("editor.vehicle_maintenance.interval_distance_desc",c,"How far between services, in {unit}. Use 0 for time-only services like registration.").split("{unit}").join(this._unitLabel(e,c)),s,{interval_distance:null!==(m=t.interval_distance)&&void 0!==m?m:0},[this.numberField("interval_distance",0,5e5,100)],t=>{var i;return this._patchService(e,n,{interval_distance:Number(null===(i=t.detail.value)||void 0===i?void 0:i.interval_distance)||0},u)})}
          ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.interval_months",c,"Time interval"),(0,r.kg)("editor.vehicle_maintenance.interval_months_desc",c,"Months between services. Use 0 for distance-only services like tire rotation."),s,{interval_months:null!==(h=t.interval_months)&&void 0!==h?h:0},[this.numberField("interval_months",0,120,1)],t=>{var i;return this._patchService(e,n,{interval_months:Number(null===(i=t.detail.value)||void 0===i?void 0:i.interval_months)||0},u)})}
          ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.last_distance",c,"Odometer at last service"),(0,r.kg)("editor.vehicle_maintenance.last_distance_desc",c,"Leave at 0 if you do not know it. Logging a service overwrites this with the reading at the time."),s,{last_distance:null!==(p=t.last_distance)&&void 0!==p?p:0},[this.numberField("last_distance",0,2e6,1)],t=>{var i;return this._patchService(e,n,{last_distance:Number(null===(i=t.detail.value)||void 0===i?void 0:i.last_distance)||0},u)})}
          ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.last_date",c,"Date of last service"),(0,r.kg)("editor.vehicle_maintenance.last_date_desc",c,"Defaults to the day this service was added, which is only a guess — set your real last service date."),s,{last_date:t.last_date||""},[{name:"last_date",selector:{date:{}}}],t=>{var i,o;return this._patchService(e,n,{last_date:null!==(o=null===(i=t.detail.value)||void 0===i?void 0:i.last_date)&&void 0!==o?o:""},u)})}
          ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.estimated_cost",c,"Typical cost"),(0,r.kg)("editor.vehicle_maintenance.estimated_cost_desc",c,"Used as the default amount when you log this service, and to forecast upcoming spend."),s,{estimated_cost:null!==(g=t.estimated_cost)&&void 0!==g?g:0},[this.numberField("estimated_cost",0,1e5,1)],t=>{var i;return this._patchService(e,n,{estimated_cost:Number(null===(i=t.detail.value)||void 0===i?void 0:i.estimated_cost)||0},u)})}
          ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.notes",c,"Notes"),(0,r.kg)("editor.vehicle_maintenance.notes_desc",c,"Part numbers, oil weight, the shop you use."),s,{notes:t.notes||""},[this.textField("notes",!0)],t=>{var i,o;return this._patchService(e,n,{notes:null!==(o=null===(i=t.detail.value)||void 0===i?void 0:i.notes)&&void 0!==o?o:""},u)})}
          ${this._renderRowLastService(e,t,c)}

          <button
            type="button"
            class="vm-btn vm-btn-primary vm-btn-wide"
            ?disabled=${S}
            @click=${()=>{this._markServiced(e,t,s,l,c,u)}}
          >
            <ha-icon icon=${S?"mdi:progress-clock":"mdi:check-decagram"}></ha-icon>
            ${S?(0,r.kg)("editor.vehicle_maintenance.marking",c,"Logging…"):(0,r.kg)("editor.vehicle_maintenance.mark_serviced",c,"Mark serviced now")}
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderRowLastService(e,t,n){var o,a;const s=null===(o=this._preview.get(e.id))||void 0===o?void 0:o.log,l=f(t.id,s);if(!l)return i.qy``;const c=this._unitLabel(e,n),d=null===(a=l.payload)||void 0===a?void 0:a.odometer,u="number"==typeof d?`${this._date(l.payload.at,n)} · ${this._num(d,n)} ${c}`:this._date(l.payload.at,n);return this._renderNotice("mdi:history",(0,r.kg)("editor.vehicle_maintenance.row_from_log",n,"Tracking from the service log: last done {detail}. This overrides the two fields above.").split("{detail}").join(u))}_renderDisplaySection(e,t,n,o){const a=(e,n,i,r)=>this.renderFieldSection(n,i,t,{[e]:r},[this.booleanField(String(e))],t=>{var n,i;o({[e]:null!==(i=null===(n=t.detail.value)||void 0===n?void 0:n[e])&&void 0!==i&&i}),this.triggerPreviewUpdate()});return this._sectionShell((0,r.kg)("editor.vehicle_maintenance.display_section",n,"Display"),(0,r.kg)("editor.vehicle_maintenance.display_section_desc",n,"Pick a layout and choose which parts of the card are visible."),i.qy`
        ${this.renderSegmentedField((0,r.kg)("editor.vehicle_maintenance.layout",n,"Layout"),(0,r.kg)("editor.vehicle_maintenance.layout_desc",n,"Hero leads with the vehicle and the next service. List shows every service. Compact is a single summary line."),e.layout||"hero",[{value:"hero",label:(0,r.kg)("editor.vehicle_maintenance.layout_hero",n,"Hero"),icon:"mdi:car-sports"},{value:"list",label:(0,r.kg)("editor.vehicle_maintenance.layout_list",n,"List"),icon:"mdi:format-list-bulleted"},{value:"compact",label:(0,r.kg)("editor.vehicle_maintenance.layout_compact",n,"Compact"),icon:"mdi:view-agenda-outline"}],e=>{o({layout:e||"hero"}),this.triggerPreviewUpdate()},3)}
        ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.title",n,"Title override"),(0,r.kg)("editor.vehicle_maintenance.title_desc",n,"Leave blank to use the vehicle name."),t,{title:e.title||""},[this.textField("title")],e=>{var t,n;o({title:null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.title)&&void 0!==n?n:""}),this.triggerPreviewUpdate()})}
        ${a("show_title",(0,r.kg)("editor.vehicle_maintenance.show_title",n,"Show title"),"",!1!==e.show_title)}
        ${a("show_vehicle_image",(0,r.kg)("editor.vehicle_maintenance.show_vehicle_image",n,"Show vehicle photo"),"",!1!==e.show_vehicle_image)}
        ${a("show_odometer",(0,r.kg)("editor.vehicle_maintenance.show_odometer",n,"Show odometer"),"",!1!==e.show_odometer)}
        ${a("show_fuel",(0,r.kg)("editor.vehicle_maintenance.show_fuel",n,"Show fuel and charge"),"",!1!==e.show_fuel)}
        ${a("show_next_service",(0,r.kg)("editor.vehicle_maintenance.show_next_service",n,"Show next service due"),"",!1!==e.show_next_service)}
        ${a("show_progress_bars",(0,r.kg)("editor.vehicle_maintenance.show_progress_bars",n,"Show progress bars"),"",!1!==e.show_progress_bars)}
        ${a("show_service_log",(0,r.kg)("editor.vehicle_maintenance.show_service_log",n,"Show service log"),"",!1!==e.show_service_log)}
        ${a("show_costs",(0,r.kg)("editor.vehicle_maintenance.show_costs",n,"Show costs"),(0,r.kg)("editor.vehicle_maintenance.show_costs_desc",n,"Adds amounts to log entries plus a total spend figure."),!1!==e.show_costs)}
      `)}_renderThresholdsSection(e,t,n,o){var a,s,l,c,d;const u=this._unitLabel(e,n);return this._sectionShell((0,r.kg)("editor.vehicle_maintenance.thresholds_section",n,"Thresholds"),(0,r.kg)("editor.vehicle_maintenance.thresholds_section_desc",n,"When a service starts warning, and how much history to show. The defaults suit most vehicles."),i.qy`
        ${this.renderSliderField((0,r.kg)("editor.vehicle_maintenance.due_soon_distance",n,"Warn within"),(0,r.kg)("editor.vehicle_maintenance.due_soon_distance_desc",n,"Remaining distance at which a service turns amber."),null!==(a=e.due_soon_distance)&&void 0!==a?a:500,500,0,5e3,50,e=>{o({due_soon_distance:e}),this.triggerPreviewUpdate()},` ${u}`)}
        ${this.renderSliderField((0,r.kg)("editor.vehicle_maintenance.due_soon_days",n,"Warn within (time)"),(0,r.kg)("editor.vehicle_maintenance.due_soon_days_desc",n,"Remaining days at which a service turns amber."),null!==(s=e.due_soon_days)&&void 0!==s?s:14,14,0,180,1,e=>{o({due_soon_days:e}),this.triggerPreviewUpdate()},` ${(0,r.kg)("editor.vehicle_maintenance.unit_days_short",n,"d")}`)}
        ${this.renderSliderField((0,r.kg)("editor.vehicle_maintenance.log_limit",n,"Service log entries"),(0,r.kg)("editor.vehicle_maintenance.log_limit_desc",n,"How many recent entries the card displays. Older entries stay in the to-do list."),null!==(l=e.log_limit)&&void 0!==l?l:25,25,5,100,5,e=>{o({log_limit:e}),this.triggerPreviewUpdate()},"")}
        ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.currency_symbol",n,"Currency symbol"),(0,r.kg)("editor.vehicle_maintenance.currency_symbol_desc",n,"Prefixed to every cost shown on the card."),t,{currency_symbol:null!==(c=e.currency_symbol)&&void 0!==c?c:"$"},[this.textField("currency_symbol")],e=>{var t,n;o({currency_symbol:null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.currency_symbol)&&void 0!==n?n:""}),this.triggerPreviewUpdate()})}
        ${this.renderConditionalFieldsGroup((0,r.kg)("editor.vehicle_maintenance.advanced",n,"Advanced"),i.qy`
            ${this.renderFieldSection((0,r.kg)("editor.vehicle_maintenance.odometer_offset",n,"Odometer offset"),(0,r.kg)("editor.vehicle_maintenance.odometer_offset_desc",n,"Added to every reading, in {unit}. Use this when the sensor was reset or starts from zero — for example a dongle fitted at 82,000 miles.").split("{unit}").join(u),t,{odometer_offset:null!==(d=e.odometer_offset)&&void 0!==d?d:0},[this.numberField("odometer_offset",-2e6,2e6,1)],e=>{var t;o({odometer_offset:Number(null===(t=e.detail.value)||void 0===t?void 0:t.odometer_offset)||0}),this.triggerPreviewUpdate()})}
          `)}
      `)}_renderColorsSection(e,t,n,o){const a=(n,i,r,a)=>this.renderColorField(i,r,t,e[n]||"",a,e=>{o({[n]:e}),this.triggerPreviewUpdate()});return this._sectionShell((0,r.kg)("editor.vehicle_maintenance.colors_section",n,"Colors"),(0,r.kg)("editor.vehicle_maintenance.colors_section_desc",n,"Leave blank to follow your Home Assistant theme."),i.qy`
        ${a("ok_color",(0,r.kg)("editor.vehicle_maintenance.ok_color",n,"On schedule"),"","var(--success-color, #43a047)")}
        ${a("due_soon_color",(0,r.kg)("editor.vehicle_maintenance.due_soon_color",n,"Due soon"),"","var(--warning-color, #fb8c00)")}
        ${a("overdue_color",(0,r.kg)("editor.vehicle_maintenance.overdue_color",n,"Overdue"),"","var(--error-color, #e53935)")}
        ${a("text_color",(0,r.kg)("editor.vehicle_maintenance.text_color",n,"Text"),"","var(--primary-text-color)")}
        ${a("secondary_text_color",(0,r.kg)("editor.vehicle_maintenance.secondary_text_color",n,"Secondary text"),"","var(--secondary-text-color)")}
        ${a("card_background_color",(0,r.kg)("editor.vehicle_maintenance.card_background_color",n,"Card background"),"","var(--card-background-color)")}
      `)}renderPreview(e,t,n,o){var a;const s=e,l=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";if(!Array.isArray(s.services)||0===s.services.length)return this.renderGradientErrorState((0,r.kg)("editor.vehicle_maintenance.config_needed",l,"Add a service"),(0,r.kg)("editor.vehicle_maintenance.config_needed_desc",l,"Add at least one service interval in the General tab"),"mdi:car-wrench");this._ensureLogLoaded(s,t);const c=this._palette(s),d=this._ensurePreview(s.id),{statuses:u,odometer:v}=this._statuses(s,t,n,l),m=function(e){const t={overdue:0,due_soon:1,ok:2,unknown:3};return[...e].sort((e,n)=>{var i,o;if(t[e.state]!==t[n.state])return t[e.state]-t[n.state];const r=null!==(i=e.progress)&&void 0!==i?i:-1;return(null!==(o=n.progress)&&void 0!==o?o:-1)-r})}(u),h=this.buildStyleString(this.buildDesignStyles(e,t)),p=this.getHoverEffectClass(e),g=s.layout||"hero",_="compact"===g?this._renderCompactLayout(s,t,n,l,c,m,v):"list"===g?this._renderListLayout(s,t,n,l,c,u,v,d):this._renderHeroLayout(s,t,n,l,c,u,m,v,d),y=t?this.createGestureHandlers(s.id,{tap_action:s.tap_action,hold_action:s.hold_action,double_tap_action:s.double_tap_action,entity:this.resolveEntity(s.odometer_entity,n)||s.odometer_entity||"",module:s},t,n,[".uc-vm-mark",".uc-vm-log-delete",".uc-vm-log-more"]):null;return i.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div
        class="uc-vm-wrapper ${p}"
        style="box-sizing: border-box; padding: 0; border-radius: var(--uc-r-12, 12px); overflow: hidden; background: ${c.cardBg}; color: ${c.text}; ${h}"
        @pointerdown=${null==y?void 0:y.onPointerDown}
        @pointermove=${null==y?void 0:y.onPointerMove}
        @pointerup=${null==y?void 0:y.onPointerUp}
        @pointerleave=${null==y?void 0:y.onPointerLeave}
        @pointercancel=${null==y?void 0:y.onPointerCancel}
      >
        ${this.wrapWithAnimation(_,e,t)}
      </div>
    `}_renderHeroLayout(e,t,n,o,a,s,l,d,u){var v,m,h,p;const g=!1!==e.show_vehicle_image&&e.vehicle_image||"",_=g&&t?(0,c.VG)(t,g):"",y=(null===(v=e.title)||void 0===v?void 0:v.trim())||(null===(m=e.vehicle_name)||void 0===m?void 0:m.trim())||"",f=null!==(p=null!==(h=l.find(e=>"unknown"!==e.state))&&void 0!==h?h:l[0])&&void 0!==p?p:null;return i.qy`
      ${_?i.qy`
            <div class="uc-vm-hero-banner">
              <img
                src="${_}"
                alt="${y||(0,r.kg)("editor.vehicle_maintenance.vehicle_photo_alt",o,"Vehicle photo")}"
                loading="lazy"
              />
              <div class="uc-vm-hero-scrim"></div>
              ${!1!==e.show_title&&y?i.qy`<div class="uc-vm-hero-heading">${y}</div>`:i.s6}
            </div>
          `:!1!==e.show_title&&y?i.qy`
              <div class="uc-vm-icon-header">
                <ha-icon icon="mdi:car-wrench" style="color: var(--primary-color);"></ha-icon>
                <span style="color: ${a.text};">${y}</span>
              </div>
            `:i.s6}

      <div style="padding: 16px; display: flex; flex-direction: column; gap: 14px;">
        ${this._renderStatsRow(e,o,a,s,d)}
        ${!1!==e.show_fuel?this._renderLevelBars(e,t,n,o,a):i.s6}
        ${!1!==e.show_next_service&&f?this._renderNextServiceCard(e,t,n,o,a,f):i.s6}
        ${this._renderOdometerHint(e,t,n,o,a,d)}
        ${!1!==e.show_service_log?this._renderLogSection(e,t,o,a,u):i.s6}
      </div>
    `}_renderStatsRow(e,t,n,o,a){const s=o.filter(e=>"overdue"===e.state).length,l=o.filter(e=>"due_soon"===e.state).length,c=this._unitLabel(e,t),d=s>0?n.over:l>0?n.soon:n.ok,u=s>0?(0,r.kg)("editor.vehicle_maintenance.tally_overdue",t,"{count} overdue").split("{count}").join(String(s)):l>0?(0,r.kg)("editor.vehicle_maintenance.tally_due_soon",t,"{count} due soon").split("{count}").join(String(l)):(0,r.kg)("editor.vehicle_maintenance.tally_ok",t,"All up to date");return i.qy`
      <div class="uc-vm-stats">
        ${!1!==e.show_odometer?i.qy`
              <div class="uc-vm-stat">
                <div class="uc-vm-stat-label" style="color: ${n.secondary};">
                  ${(0,r.kg)("editor.vehicle_maintenance.odometer",t,"Odometer")}
                </div>
                <div class="uc-vm-stat-value" style="color: ${n.text};">
                  ${a?i.qy`${this._num(a.value,t)}<span
                          class="uc-vm-stat-unit"
                          style="color: ${n.secondary};"
                          >${c}</span
                        >`:i.qy`<span style="color: ${n.secondary}; font-size: 20px;"
                        >${(0,r.kg)("editor.vehicle_maintenance.no_reading",t,"No reading")}</span
                      >`}
                </div>
              </div>
            `:i.s6}
        <div class="uc-vm-tally" style="color: ${d}; border-color: ${d};">
          <ha-icon
            icon=${s>0?"mdi:alert-octagon":l>0?"mdi:alert":"mdi:check-circle-outline"}
          ></ha-icon>
          <span>${u}</span>
        </div>
      </div>
    `}_renderLevelBars(e,t,n,o,a){const s=[],l=(e,r,l,c)=>{var d,u,v;const m=this.resolveEntity(e,n)||e||"";if(!m)return;const h=null===(d=null==t?void 0:t.states)||void 0===d?void 0:d[m];if(!h)return;const p=Number(h.state);if(!Number.isFinite(p))return;const g=String(null!==(v=null===(u=h.attributes)||void 0===u?void 0:u.unit_of_measurement)&&void 0!==v?v:""),_="%"===g,y=_?Math.max(0,Math.min(100,p)):null;s.push(i.qy`
        <div class="uc-vm-level">
          <div class="uc-vm-level-head">
            <ha-icon icon="${r}" style="color: ${c};"></ha-icon>
            <span style="color: ${a.secondary};">${l}</span>
            <span style="color: ${a.text}; margin-left: auto; font-weight: 600;">
              ${this._num(p,o,_?0:1)}${g?` ${g}`:""}
            </span>
          </div>
          ${null!==y?i.qy`<div class="uc-vm-track">
                <div
                  class="uc-vm-fill"
                  style="width: ${y}%; background: ${c};"
                  role="progressbar"
                  aria-valuenow="${Math.round(y)}"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="${l}"
                ></div>
              </div>`:i.s6}
        </div>
      `)};return l(e.fuel_entity,"mdi:gas-station",(0,r.kg)("editor.vehicle_maintenance.fuel",o,"Fuel"),a.ok),l(e.battery_entity,"mdi:ev-station",(0,r.kg)("editor.vehicle_maintenance.charge",o,"Charge"),"var(--primary-color)"),0===s.length?i.qy``:i.qy`<div class="uc-vm-levels">${s}</div>`}_renderNextServiceCard(e,t,n,o,a,s){var l,c;const d=this._stateColor(s.state,a),u=(null===(l=this._preview.get(e.id))||void 0===l?void 0:l.busyId)===s.item.id,v=this._projectionLabel(e,t,n,o,s);return i.qy`
      <div class="uc-vm-next" style="border-color: ${d};">
        <div class="uc-vm-next-head">
          <div class="uc-vm-next-icon" style="color: ${d};">
            <ha-icon icon="${s.item.icon||"mdi:wrench"}"></ha-icon>
          </div>
          <div style="min-width: 0; flex: 1;">
            <div class="uc-vm-next-label" style="color: ${a.secondary};">
              ${(0,r.kg)("editor.vehicle_maintenance.next_service",o,"Next service")}
            </div>
            <div class="uc-vm-next-name" style="color: ${a.text};">${s.item.name}</div>
          </div>
          <div class="uc-vm-next-due" style="color: ${d};">${s.dueLabel}</div>
        </div>
        ${!1!==e.show_progress_bars?this._renderProgressBar(s,a):i.s6}
        ${v?i.qy`<div class="uc-vm-next-note" style="color: ${a.secondary};">${v}</div>`:i.s6}
        ${(null===(c=s.item.notes)||void 0===c?void 0:c.trim())?i.qy`<div class="uc-vm-next-note" style="color: ${a.secondary};">
              <ha-icon icon="mdi:note-text-outline"></ha-icon>${s.item.notes.trim()}
            </div>`:i.s6}
        ${this._renderMarkButton(e,t,n,o,s,u,!0)}
      </div>
    `}_projectionLabel(e,t,n,i,o){if("distance"!==o.drivenBy||null===o.distanceRemaining)return"";if(o.distanceRemaining<=0)return"";const a=this.resolveEntity(e.odometer_entity,n)||e.odometer_entity||"";if(!a)return"";const{estimate:s}=function(e,t,n,i,o=30){var r,a,s,l,c;if(!e||!n)return{estimate:null,loading:!1};const u=Date.now(),p=u-o*v,g=d.ur.query(e,{key:`vehicle_maintenance:${null!==(r=null==t?void 0:t.id)&&void 0!==r?r:"x"}:${o}:${n}`,entityIds:[n],startMs:p,endMs:u,ttlMs:18e5,withAttributes:!1},i),_=function(e){if(!e||e.length<5)return null;const t=e[0],n=e[e.length-1];if(!t||!n)return null;const i=(n.t-t.t)/v;if(i<5)return null;let o=0;for(let t=1;t<e.length;t++){const n=e[t-1],i=e[t];if(!n||!i)continue;const r=i.v-n.v;r>0&&(o+=r)}return o<=0?null:{perDay:o/i,days:i,samples:e.length}}((0,d.f0)(g.data.get(n)));if(!_)return{estimate:null,loading:g.loading};const y="km"===(null==t?void 0:t.distance_unit)?"km":"mi",f=m(String(null!==(c=null===(l=null===(s=null===(a=e.states)||void 0===a?void 0:a[n])||void 0===s?void 0:s.attributes)||void 0===l?void 0:l.unit_of_measurement)&&void 0!==c?c:""));return{estimate:{perDay:f&&f!==y?h(_.perDay,f,y):_.perDay,days:_.days,samples:_.samples},loading:g.loading}}(t,e,a,()=>this.triggerPreviewUpdate()),l=function(e,t){return null!==e&&t?t.perDay<=.5?null:Math.max(Math.round(e/t.perDay),0):null}(o.distanceRemaining,s);if(null===l||!s)return"";const c=`${this._num(s.perDay,i,s.perDay<10?1:0)} ${this._unitLabel(e,i)}`;return(0,r.kg)("editor.vehicle_maintenance.projection",i,"About {days} days away at {perDay} per day, based on {window} days of history.").split("{days}").join(String(l)).split("{perDay}").join(c).split("{window}").join(String(Math.round(s.days)))}_renderMarkButton(e,t,n,o,a,s,l){const c=!!e.todo_entity,d=c?(0,r.kg)("editor.vehicle_maintenance.mark_serviced",o,"Mark serviced now"):(0,r.kg)("editor.vehicle_maintenance.mark_needs_list",o,"Choose a storage list in the General tab to record services from the card");return i.qy`
      <button
        type="button"
        class="uc-vm-mark ${l?"uc-vm-mark-wide":""}"
        title=${d}
        aria-label=${d}
        ?disabled=${s||!c}
        @click=${i=>{i.stopPropagation(),this._markServiced(e,a.item,t,n,o)}}
      >
        <ha-icon icon=${s?"mdi:progress-clock":"mdi:check-decagram-outline"}></ha-icon>
        ${l?i.qy`<span
              >${s?(0,r.kg)("editor.vehicle_maintenance.marking",o,"Logging…"):(0,r.kg)("editor.vehicle_maintenance.mark_serviced",o,"Mark serviced now")}</span
            >`:i.s6}
      </button>
    `}_renderOdometerHint(e,t,n,o,a,s){if(s)return i.qy``;const l=this.resolveEntity(e.odometer_entity,n)||e.odometer_entity?(0,r.kg)("editor.vehicle_maintenance.hint_odometer_unavailable",o,"The odometer sensor is unavailable, so distance intervals are paused. Time-based tracking is still running."):(0,r.kg)("editor.vehicle_maintenance.hint_no_odometer",o,"Tracking by time only. Add an odometer entity to unlock distance intervals and mileage-stamped log entries.");return i.qy`
      <div class="uc-vm-hint" style="color: ${a.secondary};">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <span>${l}</span>
      </div>
    `}_renderListLayout(e,t,n,o,r,a,s,l){var c,d;const u=(null===(c=e.title)||void 0===c?void 0:c.trim())||(null===(d=e.vehicle_name)||void 0===d?void 0:d.trim())||"",v=this._unitLabel(e,o);return i.qy`
      <div style="padding: 16px; display: flex; flex-direction: column; gap: 12px;">
        ${!1!==e.show_title&&u?i.qy`
              <div class="uc-vm-list-head">
                <ha-icon icon="mdi:car-wrench" style="color: var(--primary-color);"></ha-icon>
                <span style="color: ${r.text}; font-weight: 700;">${u}</span>
                ${!1!==e.show_odometer&&s?i.qy`<span style="margin-left: auto; color: ${r.secondary}; font-size: 13px;"
                      >${this._num(s.value,o)} ${v}</span
                    >`:i.s6}
              </div>
            `:i.s6}
        ${!1!==e.show_fuel?this._renderLevelBars(e,t,n,o,r):i.s6}

        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${a.map(i=>this._renderServiceRowPreview(e,t,n,o,r,i))}
        </div>

        ${this._renderOdometerHint(e,t,n,o,r,s)}
        ${!1!==e.show_service_log?this._renderLogSection(e,t,o,r,l):i.s6}
      </div>
    `}_renderServiceRowPreview(e,t,n,o,r,a){var s,l;const c=this._stateColor(a.state,r),d=(null===(s=this._preview.get(e.id))||void 0===s?void 0:s.busyId)===a.item.id;return i.qy`
      <div class="uc-vm-srow">
        <div class="uc-vm-srow-icon" style="color: ${c};">
          <ha-icon icon="${a.item.icon||"mdi:wrench"}"></ha-icon>
        </div>
        <div class="uc-vm-srow-main">
          <div class="uc-vm-srow-top">
            <span
              class="uc-vm-srow-name"
              style="color: ${r.text};"
              title=${(null===(l=a.item.notes)||void 0===l?void 0:l.trim())||a.item.name}
              >${a.item.name}</span
            >
            <span class="uc-vm-srow-due" style="color: ${c};">${a.dueLabel}</span>
          </div>
          ${!1!==e.show_progress_bars?this._renderProgressBar(a,r):i.s6}
        </div>
        ${this._renderMarkButton(e,t,n,o,a,d,!1)}
      </div>
    `}_renderProgressBar(e,t){if(null===e.progress)return i.qy`<div class="uc-vm-track">
        <div class="uc-vm-fill uc-vm-fill-unknown" style="width: 100%;"></div>
      </div>`;const n=this._stateColor(e.state,t),o=100*Math.max(0,Math.min(1,e.progress)),r="overdue"===e.state;return i.qy`
      <div class="uc-vm-track">
        <div
          class="uc-vm-fill ${r?"uc-vm-fill-overdue":""}"
          style="width: ${r?100:o}%; background: ${n}; --uc-vm-stripe: ${n};"
          role="progressbar"
          aria-valuenow="${Math.round(o)}"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="${e.item.name}"
        ></div>
      </div>
    `}_renderCompactLayout(e,t,n,o,a,s,l){var c,d;const u=(null===(c=e.title)||void 0===c?void 0:c.trim())||(null===(d=e.vehicle_name)||void 0===d?void 0:d.trim())||"",v=this._unitLabel(e,o),m=s.slice(0,2),h=s[0],p=h?this._stateColor(h.state,a):a.secondary;return i.qy`
      <div style="padding: 12px 14px; display: flex; flex-direction: column; gap: 10px;">
        <div class="uc-vm-compact-head">
          <ha-icon icon="mdi:car-wrench" style="color: ${p};"></ha-icon>
          ${!1!==e.show_title&&u?i.qy`<span class="uc-vm-compact-name" style="color: ${a.text};">${u}</span>`:i.s6}
          ${!1!==e.show_odometer?i.qy`<span class="uc-vm-compact-odo" style="color: ${a.secondary};">
                ${l?`${this._num(l.value,o)} ${v}`:(0,r.kg)("editor.vehicle_maintenance.no_reading",o,"No reading")}
              </span>`:i.s6}
        </div>

        ${0===m.length?i.qy`<div style="font-size: 13px; color: ${a.secondary};">
              ${(0,r.kg)("editor.vehicle_maintenance.tally_ok",o,"All up to date")}
            </div>`:i.qy`
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${m.map(t=>{const n=this._stateColor(t.state,a);return i.qy`
                    <div class="uc-vm-compact-row">
                      <ha-icon
                        icon="${t.item.icon||"mdi:wrench"}"
                        style="color: ${n};"
                      ></ha-icon>
                      <span class="uc-vm-compact-label" style="color: ${a.text};"
                        >${t.item.name}</span
                      >
                      <span
                        style="color: ${n}; font-size: 12px; font-weight: 600; white-space: nowrap;"
                        >${t.dueLabel}</span
                      >
                    </div>
                    ${!1!==e.show_progress_bars?this._renderProgressBar(t,a):i.s6}
                  `})}
              </div>
            `}
      </div>
    `}_renderLogSection(e,t,n,o,a){var s;if(!e.todo_entity)return i.qy`
        <div class="uc-vm-log">
          <div class="uc-vm-log-head" style="color: ${o.secondary};">
            <ha-icon icon="mdi:notebook-outline"></ha-icon>
            <span>${(0,r.kg)("editor.vehicle_maintenance.service_log",n,"Service log")}</span>
          </div>
          <div class="uc-vm-log-empty" style="color: ${o.secondary};">
            ${(0,r.kg)("editor.vehicle_maintenance.log_no_storage",n,"Pick a to-do list in the General tab to keep a permanent service history with costs.")}
          </div>
        </div>
      `;if(a.loading&&0===a.log.length)return i.qy`
        <div class="uc-vm-log">
          <div class="uc-vm-log-head" style="color: ${o.secondary};">
            <ha-icon icon="mdi:notebook-outline"></ha-icon>
            <span>${(0,r.kg)("editor.vehicle_maintenance.service_log",n,"Service log")}</span>
          </div>
          <div class="uc-vm-skeletons">
            ${[0,1,2].map(()=>i.qy`<div class="uc-vm-skeleton"></div>`)}
          </div>
        </div>
      `;if(a.error)return i.qy`
        <div class="uc-vm-log">
          <div class="uc-vm-log-head" style="color: ${o.secondary};">
            <ha-icon icon="mdi:notebook-outline"></ha-icon>
            <span>${(0,r.kg)("editor.vehicle_maintenance.service_log",n,"Service log")}</span>
          </div>
          <div class="uc-vm-log-empty" style="color: var(--error-color, #e53935);">
            <ha-icon icon="mdi:alert-circle-outline" style="--mdc-icon-size: 16px;"></ha-icon>
            ${(0,r.kg)("editor.vehicle_maintenance.log_error",n,"Could not read the service log from that to-do list.")}
          </div>
        </div>
      `;const l=Math.max(null!==(s=e.log_limit)&&void 0!==s?s:25,1),c=a.log.slice(0,l),d=function(e){var t,n;if(!e||0===e.length)return{totalCost:0,entriesWithCost:0,distanceSpan:null,costPerDistance:null};let i=0,o=0,r=1/0,a=-1/0;for(const s of e){const e=null===(t=s.payload)||void 0===t?void 0:t.cost;"number"==typeof e&&Number.isFinite(e)&&(i+=e,o+=1);const l=null===(n=s.payload)||void 0===n?void 0:n.odometer;"number"==typeof l&&Number.isFinite(l)&&(r=Math.min(r,l),a=Math.max(a,l))}const s=Number.isFinite(r)&&Number.isFinite(a)&&a>r?a-r:null;return{totalCost:i,entriesWithCost:o,distanceSpan:s,costPerDistance:null!==s&&s>0&&o>=2?i/s:null}}(c),u=this._unitLabel(e,n),v=a.logExpanded?c:c.slice(0,4);return i.qy`
      <div class="uc-vm-log">
        <div class="uc-vm-log-head" style="color: ${o.secondary};">
          <ha-icon icon="mdi:notebook-outline"></ha-icon>
          <span>${(0,r.kg)("editor.vehicle_maintenance.service_log",n,"Service log")}</span>
          ${c.length>0?i.qy`<span style="margin-left: auto; font-size: 12px;"
                >${(0,r.kg)("editor.vehicle_maintenance.log_count",n,"{count} entries").split("{count}").join(String(c.length))}</span
              >`:i.s6}
        </div>

        ${0===c.length?i.qy`<div class="uc-vm-log-empty" style="color: ${o.secondary};">
              ${(0,r.kg)("editor.vehicle_maintenance.log_empty",n,'No services logged yet. Use "Mark serviced" on a service to start your history.')}
            </div>`:i.qy`
              <div class="uc-vm-log-rows">
                ${v.map(i=>this._renderLogRow(e,t,n,o,i,u))}
              </div>
              ${c.length>4?i.qy`<button
                    type="button"
                    class="uc-vm-log-more"
                    style="color: var(--primary-color);"
                    @click=${()=>{a.logExpanded=!a.logExpanded,this.triggerPreviewUpdate(!0)}}
                  >
                    ${a.logExpanded?(0,r.kg)("editor.vehicle_maintenance.log_show_less",n,"Show less"):(0,r.kg)("editor.vehicle_maintenance.log_show_all",n,"Show all {count}").split("{count}").join(String(c.length))}
                  </button>`:i.s6}
              ${!1!==e.show_costs&&d.entriesWithCost>0?i.qy`
                    <div class="uc-vm-log-totals" style="border-color: var(--divider-color);">
                      <span style="color: ${o.secondary};"
                        >${(0,r.kg)("editor.vehicle_maintenance.total_spend",n,"Total spend")}</span
                      >
                      <span style="color: ${o.text}; font-weight: 700;"
                        >${this._money(d.totalCost,e,n)}</span
                      >
                      ${null!==d.costPerDistance?i.qy`<span style="color: ${o.secondary}; margin-left: auto;">
                            ${(0,r.kg)("editor.vehicle_maintenance.cost_per_distance",n,"{amount} per {unit}").split("{amount}").join(this._money(d.costPerDistance,e,n)).split("{unit}").join(u)}
                          </span>`:i.s6}
                    </div>
                  `:i.s6}
            `}
      </div>
    `}_renderLogRow(e,t,n,o,a,s){const l=a.payload,c="number"==typeof l.odometer?l.odometer:null,d="number"==typeof l.cost?l.cost:null;return i.qy`
      <div class="uc-vm-log-row">
        <div class="uc-vm-log-date" style="color: ${o.secondary};">
          ${this._date(l.at,n)}
        </div>
        <div class="uc-vm-log-name" style="color: ${o.text};">${l.service_name}</div>
        <div class="uc-vm-log-odo" style="color: ${o.secondary};">
          ${null!==c?`${this._num(c,n)} ${s}`:"—"}
        </div>
        ${!1!==e.show_costs?i.qy`<div class="uc-vm-log-cost" style="color: ${o.text};">
              ${null!==d?this._money(d,e,n):""}
            </div>`:i.s6}
        <button
          type="button"
          class="uc-vm-log-delete"
          title=${(0,r.kg)("editor.vehicle_maintenance.delete_log_title",n,"Delete log entry?")}
          aria-label=${(0,r.kg)("editor.vehicle_maintenance.delete_log_title",n,"Delete log entry?")}
          @click=${i=>{i.stopPropagation(),this._deleteLogEntry(e,a,t,n)}}
        >
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
      </div>
    `}getStyles(){return`\n      ${o.m.getSliderStyles()}\n\n      .uc-vm-wrapper { box-sizing: border-box; }\n      .uc-vm-wrapper * { box-sizing: border-box; }\n\n      /* ── Editor: notices ──────────────────────────────────────────────── */\n      .vm-notice {\n        display: flex;\n        align-items: flex-start;\n        gap: 10px;\n        padding: 10px 12px;\n        margin: -6px 0 16px;\n        border-left: 3px solid var(--primary-color);\n        border-radius: var(--uc-r-6, 6px);\n        background: rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.06);\n        font-size: 13px;\n        line-height: 1.5;\n        color: var(--primary-text-color);\n      }\n      .vm-notice ha-icon { --mdc-icon-size: 18px; flex-shrink: 0; margin-top: 1px; }\n      .vm-notice-text { min-width: 0; }\n      .vm-notice-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }\n\n      /* ── Editor: buttons ──────────────────────────────────────────────── */\n      .vm-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        min-height: 36px;\n        padding: 0 14px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        color: var(--primary-text-color);\n        font-size: 13px;\n        font-weight: 600;\n        cursor: pointer;\n        transition: opacity 0.15s ease, border-color 0.15s ease;\n      }\n      .vm-btn:hover:not(:disabled) { border-color: var(--primary-color); }\n      .vm-btn:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }\n      .vm-btn:disabled { opacity: 0.5; cursor: default; }\n      .vm-btn ha-icon { --mdc-icon-size: 18px; }\n      .vm-btn-primary {\n        background: var(--primary-color);\n        border-color: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .vm-btn-wide { width: 100%; margin-top: 4px; }\n\n      .vm-icon-btn {\n        flex-shrink: 0;\n        width: 30px;\n        height: 30px;\n        padding: 0;\n        border: none;\n        border-radius: var(--uc-r-6, 6px);\n        background: transparent;\n        color: var(--secondary-text-color);\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .vm-icon-btn ha-icon { --mdc-icon-size: 18px; }\n      .vm-icon-btn:hover:not(:disabled) {\n        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);\n        color: var(--primary-color);\n      }\n      .vm-icon-btn:focus-visible { outline: 2px solid var(--primary-color); outline-offset: -2px; }\n      .vm-icon-btn:disabled { opacity: 0.3; cursor: default; }\n      .vm-icon-btn-danger:hover:not(:disabled) {\n        background: rgba(var(--rgb-error-color, 229, 57, 53), 0.14);\n        color: var(--error-color, #e53935);\n      }\n\n      /* ── Editor: repeatable service rows ──────────────────────────────── */\n      .vm-rows { display: flex; flex-direction: column; margin-bottom: 12px; }\n      .vm-empty-rows {\n        padding: 20px 12px;\n        margin-bottom: 12px;\n        border: 1px dashed var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        text-align: center;\n        font-size: 13px;\n        color: var(--secondary-text-color);\n      }\n\n      ha-expansion-panel.vm-service-panel {\n        --ha-card-border-radius: var(--uc-r-8, 8px);\n        --expansion-panel-summary-padding: 0;\n        /* Horizontal-only padding here, vertical via ::part(content), otherwise\n           the height-animated container leaks space under collapsed rows. */\n        --expansion-panel-content-padding: 0 12px;\n        margin-bottom: 8px;\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        border-radius: var(--uc-r-8, 8px);\n      }\n      ha-expansion-panel.vm-service-panel::part(summary) { padding: 0; min-height: unset; }\n      ha-expansion-panel.vm-service-panel::part(content) { padding: 12px 0 4px; }\n\n      .vm-row-header {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        width: 100%;\n        padding: 8px 10px;\n      }\n      .vm-row-icon {\n        flex-shrink: 0;\n        width: 32px;\n        height: 32px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: var(--uc-r-6, 6px);\n        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);\n        color: var(--primary-color);\n      }\n      .vm-row-icon ha-icon { --mdc-icon-size: 18px; }\n      .vm-row-info { flex: 1; min-width: 0; }\n      .vm-row-name {\n        font-size: 13px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .vm-row-summary {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .vm-row-badge {\n        flex-shrink: 0;\n        padding: 2px 8px;\n        border: 1px solid currentColor;\n        border-radius: 999px;\n        font-size: 11px;\n        font-weight: 600;\n        white-space: nowrap;\n      }\n      .vm-row-body { padding-bottom: 8px; }\n\n      /* ── Editor: presets ──────────────────────────────────────────────── */\n      .vm-row-actions { display: flex; flex-wrap: wrap; gap: 8px; }\n      .vm-presets { margin-top: 14px; }\n      .vm-presets-hint {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-bottom: 10px;\n        line-height: 1.5;\n      }\n      .vm-preset-grid {\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n        gap: 8px;\n      }\n      .vm-preset-card {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 2px;\n        padding: 10px;\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        color: var(--primary-text-color);\n        cursor: pointer;\n        text-align: left;\n        transition: border-color 0.15s ease, transform 0.15s ease;\n      }\n      .vm-preset-card:hover { border-color: var(--primary-color); transform: translateY(-1px); }\n      .vm-preset-card:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }\n      .vm-preset-card ha-icon { --mdc-icon-size: 20px; color: var(--primary-color); }\n      .vm-preset-name {\n        font-size: 12px;\n        font-weight: 600;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n      }\n      .vm-preset-interval { font-size: 11px; color: var(--secondary-text-color); }\n\n      /* ── Preview: hero ────────────────────────────────────────────────── */\n      .uc-vm-hero-banner { position: relative; width: 100%; line-height: 0; }\n      .uc-vm-hero-banner img {\n        width: 100%;\n        height: 160px;\n        object-fit: cover;\n        display: block;\n      }\n      .uc-vm-hero-scrim {\n        position: absolute;\n        inset: 0;\n        background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0) 60%);\n        pointer-events: none;\n      }\n      .uc-vm-hero-heading {\n        position: absolute;\n        left: 16px;\n        right: 16px;\n        bottom: 12px;\n        font-size: 20px;\n        font-weight: 700;\n        line-height: 1.2;\n        color: #fff;\n        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-vm-icon-header {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        padding: 16px 16px 0;\n        font-size: 17px;\n        font-weight: 700;\n        min-width: 0;\n      }\n      .uc-vm-icon-header span {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-vm-icon-header ha-icon { --mdc-icon-size: 22px; flex-shrink: 0; }\n\n      .uc-vm-stats {\n        display: flex;\n        align-items: flex-end;\n        flex-wrap: wrap;\n        gap: 12px;\n      }\n      .uc-vm-stat { min-width: 0; }\n      .uc-vm-stat-label {\n        font-size: 11px;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.6px;\n      }\n      .uc-vm-stat-value {\n        font-size: 30px;\n        font-weight: 700;\n        line-height: 1.1;\n        display: flex;\n        align-items: baseline;\n        gap: 5px;\n      }\n      .uc-vm-stat-unit { font-size: 14px; font-weight: 600; }\n      .uc-vm-tally {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        margin-left: auto;\n        padding: 5px 10px;\n        border: 1px solid currentColor;\n        border-radius: 999px;\n        font-size: 12px;\n        font-weight: 600;\n      }\n      .uc-vm-tally ha-icon { --mdc-icon-size: 16px; }\n\n      /* ── Preview: levels ──────────────────────────────────────────────── */\n      .uc-vm-levels { display: flex; flex-direction: column; gap: 10px; }\n      .uc-vm-level-head {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 12px;\n        margin-bottom: 4px;\n        min-width: 0;\n      }\n      .uc-vm-level-head ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }\n\n      /* ── Preview: progress ────────────────────────────────────────────── */\n      .uc-vm-track {\n        position: relative;\n        width: 100%;\n        height: 8px;\n        border-radius: 999px;\n        background: var(--divider-color);\n        overflow: hidden;\n      }\n      .uc-vm-fill {\n        height: 100%;\n        border-radius: 999px;\n        transition: width 0.35s ease;\n      }\n      /* Overdue clamps at full width, so a hatch pattern carries the meaning. */\n      .uc-vm-fill-overdue {\n        background-image: repeating-linear-gradient(\n          45deg,\n          rgba(255, 255, 255, 0.35) 0,\n          rgba(255, 255, 255, 0.35) 4px,\n          transparent 4px,\n          transparent 8px\n        );\n        animation: uc-vm-hatch 1.2s linear infinite;\n      }\n      .uc-vm-fill-unknown {\n        background: repeating-linear-gradient(\n          45deg,\n          var(--divider-color) 0,\n          var(--divider-color) 5px,\n          transparent 5px,\n          transparent 10px\n        );\n        opacity: 0.7;\n      }\n      @keyframes uc-vm-hatch {\n        from { background-position: 0 0; }\n        to { background-position: 22px 0; }\n      }\n      @media (prefers-reduced-motion: reduce) {\n        .uc-vm-fill { transition: none; }\n        .uc-vm-fill-overdue { animation: none; }\n      }\n\n      /* ── Preview: next service ────────────────────────────────────────── */\n      .uc-vm-next {\n        padding: 12px;\n        border: 1px solid var(--divider-color);\n        border-left-width: 3px;\n        border-radius: var(--uc-r-10, 10px);\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n      }\n      .uc-vm-next-head { display: flex; align-items: center; gap: 10px; }\n      .uc-vm-next-icon {\n        flex-shrink: 0;\n        width: 34px;\n        height: 34px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: var(--uc-r-8, 8px);\n        background: rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.07);\n      }\n      .uc-vm-next-icon ha-icon { --mdc-icon-size: 20px; }\n      .uc-vm-next-label {\n        font-size: 10px;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.6px;\n      }\n      .uc-vm-next-name {\n        font-size: 15px;\n        font-weight: 700;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-vm-next-due { font-size: 13px; font-weight: 700; text-align: right; white-space: nowrap; }\n      .uc-vm-next-note {\n        display: flex;\n        align-items: flex-start;\n        gap: 5px;\n        font-size: 11px;\n        line-height: 1.45;\n      }\n      .uc-vm-next-note ha-icon { --mdc-icon-size: 14px; flex-shrink: 0; margin-top: 1px; }\n\n      .uc-vm-mark {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        flex-shrink: 0;\n        min-height: 32px;\n        min-width: 32px;\n        padding: 0 10px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        background: transparent;\n        color: inherit;\n        font-size: 12px;\n        font-weight: 600;\n        cursor: pointer;\n      }\n      .uc-vm-mark-wide { width: 100%; }\n      .uc-vm-mark ha-icon { --mdc-icon-size: 18px; }\n      .uc-vm-mark:hover:not(:disabled) { border-color: var(--primary-color); color: var(--primary-color); }\n      .uc-vm-mark:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }\n      .uc-vm-mark:disabled { opacity: 0.4; cursor: default; }\n\n      /* ── Preview: list rows ───────────────────────────────────────────── */\n      .uc-vm-list-head { display: flex; align-items: center; gap: 8px; min-width: 0; }\n      .uc-vm-list-head ha-icon { --mdc-icon-size: 20px; flex-shrink: 0; }\n\n      .uc-vm-srow { display: flex; align-items: center; gap: 10px; }\n      .uc-vm-srow-icon {\n        flex-shrink: 0;\n        width: 28px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .uc-vm-srow-icon ha-icon { --mdc-icon-size: 20px; }\n      .uc-vm-srow-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 5px; }\n      .uc-vm-srow-top { display: flex; align-items: baseline; gap: 8px; min-width: 0; }\n      .uc-vm-srow-name {\n        flex: 1;\n        min-width: 0;\n        font-size: 13px;\n        font-weight: 600;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-vm-srow-due { font-size: 12px; font-weight: 600; white-space: nowrap; }\n\n      /* ── Preview: compact ─────────────────────────────────────────────── */\n      .uc-vm-compact-head { display: flex; align-items: center; gap: 8px; min-width: 0; }\n      .uc-vm-compact-head ha-icon { --mdc-icon-size: 20px; flex-shrink: 0; }\n      .uc-vm-compact-name {\n        font-size: 14px;\n        font-weight: 700;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        min-width: 0;\n      }\n      .uc-vm-compact-odo { margin-left: auto; font-size: 12px; white-space: nowrap; }\n      .uc-vm-compact-row { display: flex; align-items: center; gap: 8px; min-width: 0; }\n      .uc-vm-compact-row ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }\n      .uc-vm-compact-label {\n        flex: 1;\n        min-width: 0;\n        font-size: 13px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      /* ── Preview: hint + log ──────────────────────────────────────────── */\n      .uc-vm-hint {\n        display: flex;\n        align-items: flex-start;\n        gap: 6px;\n        font-size: 11px;\n        line-height: 1.45;\n      }\n      .uc-vm-hint ha-icon { --mdc-icon-size: 15px; flex-shrink: 0; margin-top: 1px; }\n\n      .uc-vm-log { border-top: 1px solid var(--divider-color); padding-top: 10px; }\n      .uc-vm-log-head {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 11px;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.6px;\n        margin-bottom: 8px;\n      }\n      .uc-vm-log-head ha-icon { --mdc-icon-size: 16px; }\n      .uc-vm-log-empty { font-size: 12px; line-height: 1.5; padding: 4px 0 2px; }\n      .uc-vm-log-rows { display: flex; flex-direction: column; }\n      .uc-vm-log-row {\n        display: grid;\n        grid-template-columns: minmax(72px, auto) minmax(0, 1fr) auto auto 24px;\n        align-items: center;\n        gap: 8px;\n        padding: 5px 0;\n        font-size: 12px;\n        border-bottom: 1px solid var(--divider-color);\n      }\n      .uc-vm-log-row:last-child { border-bottom: none; }\n      .uc-vm-log-date { white-space: nowrap; }\n      .uc-vm-log-name {\n        min-width: 0;\n        font-weight: 600;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-vm-log-odo { white-space: nowrap; }\n      .uc-vm-log-cost { white-space: nowrap; font-weight: 600; }\n      .uc-vm-log-delete {\n        width: 24px;\n        height: 24px;\n        padding: 0;\n        border: none;\n        border-radius: var(--uc-r-5, 5px);\n        background: transparent;\n        color: var(--secondary-text-color);\n        cursor: pointer;\n        opacity: 0.55;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .uc-vm-log-delete ha-icon { --mdc-icon-size: 15px; }\n      .uc-vm-log-delete:hover { opacity: 1; color: var(--error-color, #e53935); }\n      .uc-vm-log-delete:focus-visible { outline: 2px solid var(--primary-color); outline-offset: -2px; opacity: 1; }\n      .uc-vm-log-more {\n        margin-top: 6px;\n        padding: 4px 0;\n        border: none;\n        background: transparent;\n        font-size: 12px;\n        font-weight: 600;\n        cursor: pointer;\n      }\n      .uc-vm-log-more:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }\n      .uc-vm-log-totals {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        flex-wrap: wrap;\n        margin-top: 8px;\n        padding-top: 8px;\n        border-top: 1px solid var(--divider-color);\n        font-size: 12px;\n      }\n\n      .uc-vm-skeletons { display: flex; flex-direction: column; gap: 6px; }\n      .uc-vm-skeleton {\n        height: 14px;\n        border-radius: var(--uc-r-4, 4px);\n        background: linear-gradient(\n          90deg,\n          var(--divider-color) 25%,\n          rgba(var(--rgb-primary-text-color, 33, 33, 33), 0.08) 50%,\n          var(--divider-color) 75%\n        );\n        background-size: 200% 100%;\n        animation: uc-vm-shimmer 1.4s ease-in-out infinite;\n      }\n      @keyframes uc-vm-shimmer {\n        from { background-position: 200% 0; }\n        to { background-position: -200% 0; }\n      }\n      @media (prefers-reduced-motion: reduce) {\n        .uc-vm-skeleton { animation: none; }\n      }\n\n      /* Narrow cards: drop the odometer column before the name gets squeezed. */\n      @media (max-width: 380px) {\n        .uc-vm-log-row { grid-template-columns: minmax(0, 1fr) auto 24px; }\n        .uc-vm-log-date { grid-column: 1 / -1; font-size: 11px; }\n        .uc-vm-log-odo { display: none; }\n        .uc-vm-stat-value { font-size: 24px; }\n        .uc-vm-hero-banner img { height: 130px; }\n      }\n    `}}},2063(e,t,n){var i=n(1001);const o=new class{confirm(e,t,n={}){return new Promise(i=>{const{destructive:o=!1,confirmText:r="Confirm",cancelText:a="Cancel"}=n,{overlay:s,style:l}=this._buildOverlay();s.innerHTML='\n        <div class="uc-cd-backdrop"></div>\n        <div class="uc-cd-panel" role="dialog" aria-modal="true" aria-labelledby="uc-cd-title">\n          <h2 class="uc-cd-title" id="uc-cd-title"></h2>\n          <p class="uc-cd-message"></p>\n          <div class="uc-cd-actions"></div>\n        </div>\n      ',s.querySelector(".uc-cd-title").textContent=e,s.querySelector(".uc-cd-message").textContent=t;const c=s.querySelector(".uc-cd-actions"),d=this._makeButton(a,!1,o),u=this._makeButton(r,!0,o);c.appendChild(d),c.appendChild(u);let v=!1;const m=e=>{v||(v=!0,document.removeEventListener("keydown",h),l.remove(),s.remove(),i(e))},h=e=>{if("Escape"===e.key)return e.preventDefault(),void m(!1);if("Enter"===e.key){const t=document.activeElement;if(t===d)return e.preventDefault(),void m(!1);if(t===u)return e.preventDefault(),void m(!0);if(o)return;e.preventDefault(),m(!0)}};s.querySelector(".uc-cd-backdrop").addEventListener("click",()=>m(!1)),d.addEventListener("click",()=>m(!1)),u.addEventListener("click",()=>m(!0)),document.body.appendChild(s),document.addEventListener("keydown",h),requestAnimationFrame(()=>(o?d:u).focus())})}prompt(e,t,n=""){return new Promise(i=>{const{overlay:o,style:r}=this._buildOverlay();o.innerHTML='\n        <div class="uc-cd-backdrop"></div>\n        <div class="uc-cd-panel" role="dialog" aria-modal="true" aria-labelledby="uc-cd-title">\n          <h2 class="uc-cd-title" id="uc-cd-title"></h2>\n          <p class="uc-cd-message"></p>\n          <input class="uc-cd-input" type="text" />\n          <div class="uc-cd-actions"></div>\n        </div>\n      ',o.querySelector(".uc-cd-title").textContent=e,o.querySelector(".uc-cd-message").textContent=t;const a=o.querySelector(".uc-cd-input");a.value=n;const s=o.querySelector(".uc-cd-actions"),l=this._makeButton("Cancel",!1,!1),c=this._makeButton("OK",!0,!1);s.appendChild(l),s.appendChild(c);let d=!1;const u=e=>{d||(d=!0,document.removeEventListener("keydown",v),r.remove(),o.remove(),i(e))},v=e=>{"Escape"===e.key&&(e.preventDefault(),u(null)),"Enter"===e.key&&(e.preventDefault(),u(a.value.trim()||null))};o.querySelector(".uc-cd-backdrop").addEventListener("click",()=>u(null)),l.addEventListener("click",()=>u(null)),c.addEventListener("click",()=>u(a.value.trim()||null)),document.body.appendChild(o),document.addEventListener("keydown",v),requestAnimationFrame(()=>a.focus())})}_makeButton(e,t,n){const i=document.createElement("button");return i.type="button",i.className=t?"uc-cd-btn primary":"uc-cd-btn secondary",t&&n&&i.classList.add("destructive"),i.textContent=e,i}_buildOverlay(){const e=document.createElement("div");e.className="uc-cd-overlay";const t=document.createElement("style");return t.textContent=`\n      .uc-cd-overlay {\n        position: fixed;\n        inset: 0;\n        z-index: ${i.Mu.DIALOG_OVERLAY};\n        display: grid;\n        place-items: center;\n      }\n      .uc-cd-backdrop {\n        position: absolute;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.5);\n      }\n      .uc-cd-panel {\n        position: relative;\n        width: min(92vw, 480px);\n        border-radius: 12px;\n        background: var(--card-background-color, #1f1f1f);\n        color: var(--primary-text-color);\n        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);\n        padding: 20px 20px 16px;\n      }\n      .uc-cd-title {\n        margin: 0 0 8px;\n        font-size: 18px;\n        font-weight: 600;\n        line-height: 1.3;\n        color: var(--primary-text-color);\n      }\n      .uc-cd-message {\n        margin: 0 0 16px;\n        font-size: 14px;\n        line-height: 1.5;\n        color: var(--secondary-text-color);\n      }\n      .uc-cd-input {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 8px 10px;\n        margin-bottom: 16px;\n        border: 1px solid var(--divider-color);\n        border-radius: 6px;\n        background: var(--secondary-background-color, #2b2b2b);\n        color: var(--primary-text-color);\n        font-size: 14px;\n        outline: none;\n      }\n      .uc-cd-input:focus {\n        border-color: var(--primary-color);\n      }\n      .uc-cd-actions {\n        display: flex;\n        justify-content: flex-end;\n        gap: 8px;\n      }\n      .uc-cd-btn {\n        border-radius: 6px;\n        min-height: 36px;\n        padding: 0 16px;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        transition: opacity 0.15s ease;\n      }\n      .uc-cd-btn:hover { opacity: 0.85; }\n      .uc-cd-btn.secondary {\n        border: 1px solid var(--divider-color);\n        background: transparent;\n        color: var(--primary-text-color);\n      }\n      .uc-cd-btn.primary {\n        border: 1px solid var(--primary-color);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .uc-cd-btn.primary.destructive {\n        border-color: var(--error-color, #f44336);\n        background: var(--error-color, #f44336);\n        color: #fff;\n      }\n    `,document.head.appendChild(t),{overlay:e,style:t}}};n.d(t,["W",0,o])},1671(e,t,n){n.d(t,{CY:()=>l,EA:()=>c,Hv:()=>d,SM:()=>u,Z_:()=>v,f0:()=>s});const i=Object.freeze({data:new Map,loading:!1,fetchedAt:0,error:null});function o(e){var t,n,i,o;if(null==e||"object"!=typeof e)return null;const r=e;if(void 0!==r.s&&(void 0!==r.lu||void 0!==r.lc)){const e=Number(null!==(t=r.lu)&&void 0!==t?t:r.lc);return Number.isFinite(e)?{t:1e3*e,state:String(r.s),attributes:null!==(n=r.a)&&void 0!==n?n:null}:null}if(void 0!==r.state){const e=null!==(i=r.last_changed)&&void 0!==i?i:r.last_updated,t=e?new Date(String(e)).getTime():NaN;return Number.isFinite(t)?{t,state:String(r.state),attributes:null!==(o=r.attributes)&&void 0!==o?o:null}:null}return null}const r=new class{constructor(){this._cache=new Map}query(e,t,n){var o;if(!e||0===t.entityIds.length)return i;const r=null!==(o=t.ttlMs)&&void 0!==o?o:3e5,a=this._cache.get(t.key),s=Date.now();(!a||s-a.fetchedAt>r)&&!(null==a?void 0:a.inflight)&&this._startFetch(e,t,n);const l=this._cache.get(t.key);return l?{data:l.data,loading:l.loading,fetchedAt:l.fetchedAt,error:l.error}:i}async fetch(e,t){var n,i;return e&&0!==t.entityIds.length?(await this._startFetch(e,t),null!==(i=null===(n=this._cache.get(t.key))||void 0===n?void 0:n.data)&&void 0!==i?i:new Map):new Map}invalidate(e){this._cache.delete(e)}clear(){this._cache.clear()}_startFetch(e,t,n){const i=this._cache.get(t.key);if(null==i?void 0:i.inflight)return i.inflight;const o=null!=i?i:{data:new Map,fetchedAt:0,loading:!1,error:null,inflight:null};o.loading=!0,this._cache.set(t.key,o);const r=this._doFetch(e,t).then(e=>{o.data=e,o.fetchedAt=Date.now(),o.error=null}).catch(e=>{o.error=e instanceof Error?e.message:String(e),o.fetchedAt=Date.now()}).finally(()=>{if(o.loading=!1,o.inflight=null,n)try{n()}catch(e){}});return o.inflight=r,r}async _doFetch(e,t){const n=t.entityIds.filter(e=>!!e);if(0===n.length)return new Map;const i=new Date(t.startMs).toISOString(),r=new Date(t.endMs).toISOString(),a=!t.withAttributes;let s={};try{s=await e.callWS({type:"history/history_during_period",start_time:i,end_time:r,entity_ids:n,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!1,no_attributes:a})}catch(t){const o=await e.callApi("GET",`history/period/${i}`,{filter_entity_id:n.join(","),end_time:r});if(s={},Array.isArray(o))for(const e of o)if(Array.isArray(e)&&e.length>0){const t=e[0];(null==t?void 0:t.entity_id)&&(s[t.entity_id]=e)}}const l=new Map;for(const[e,t]of Object.entries(s)){if(!Array.isArray(t)||0===t.length)continue;const n=[];for(const e of t){const t=o(e);t&&n.push(t)}n.length>0&&(n.sort((e,t)=>e.t-t.t),l.set(e,n))}return l}},a=new Set(["unavailable","unknown","none","","null"]);function s(e,t){var n;if(!e||0===e.length)return[];const i=null==t?void 0:t.attribute,o=[];for(const t of e){const e=i?null===(n=t.attributes)||void 0===n?void 0:n[i]:t.state;if(null==e)continue;const r=String(e).trim().toLowerCase();if(a.has(r))continue;const s=Number(e);Number.isFinite(s)&&o.push({t:t.t,v:s})}return o}function l(e,t,n){if(0===e.length)return null;if(1===e.length)return e[0].v;const i=null!=t?t:e[0].t,o=null!=n?n:e[e.length-1].t;if(o<=i)return e[e.length-1].v;let r=0,a=0;for(let t=0;t<e.length;t++){const n=e[t],s=Math.max(n.t,i),l=Math.min(t+1<e.length?e[t+1].t:o,o)-s;l<=0||(r+=n.v*l,a+=l)}return a<=0?e[e.length-1].v:r/a}function c(e,t,n,i){if(0===e.length)return null;if(1===e.length)return e[0].v;const o=null!=n?n:e[0].t,r=null!=i?i:e[e.length-1].t,a=[];let s=0;for(let t=0;t<e.length;t++){const n=e[t],i=Math.max(n.t,o),l=Math.min(t+1<e.length?e[t+1].t:r,r)-i;l<=0||(a.push({v:n.v,ms:l}),s+=l)}if(0===a.length||s<=0)return e[e.length-1].v;a.sort((e,t)=>e.v-t.v);const l=s*Math.min(Math.max(t,0),1);let c=0;for(const e of a)if(c+=e.ms,c>=l)return e.v;return a[a.length-1].v}function d(e,t){var n,i;if(e.length<3)return null;const o=null!==(n=null==t?void 0:t.floor)&&void 0!==n?n:0,r=null!==(i=null==t?void 0:t.riseToleranceUnits)&&void 0!==i?i:1,a=[];let s=[e[0]];for(let t=1;t<e.length;t++){const n=e[t-1],i=e[t];i.v-n.v>r?(s.length>=2&&a.push(s),s=[i]):s.push(i)}if(s.length>=2&&a.push(s),0===a.length)return null;let l=0,c=0;for(const e of a){const t=e[0],n=e[e.length-1],i=t.v-n.v,o=n.t-t.t;o<=0||i<=0||(l+=i,c+=o)}const d=e[e.length-1].t-e[0].t,u=d>0?Math.min(c/d,1):0,v=(a[a.length-1],e.length>=2&&e[e.length-1].v-e[e.length-2].v>r);if(c<=0||l<=0)return{ratePerHour:0,msToEmpty:null,coverage:u,charging:v};const m=l/c*36e5,h=e[e.length-1].v-o;return{ratePerHour:m,msToEmpty:m>0&&h>0?h/m*36e5:null,coverage:u,charging:v}}function u(e,t){var n,i,o,r;if(e.length<2)return[];const a=t.startThreshold,s=null!==(n=t.stopThreshold)&&void 0!==n?n:.5*a,l=null!==(i=t.settleMs)&&void 0!==i?i:18e4,c=null!==(o=t.minDurationMs)&&void 0!==o?o:3e5,d=null!==(r=t.endMs)&&void 0!==r?r:e[e.length-1].t,u=[];let v=null,m=null,h=0,p=0,g=0,_=0,y=0;const f=e=>{if(null===v)return;const t=e-v;t>=c&&u.push({startMs:v,endMs:e,durationMs:t,peak:h,mean:g>0?p/g:h,areaHours:p/36e5}),v=null,m=null,h=0,p=0,g=0};for(let t=0;t<e.length;t++){const n=e[t],i=t+1<e.length?e[t+1].t:d,o=Math.max(i-n.t,0);null!==v?(h=Math.max(h,n.v),n.v<s?(null===m&&(m=n.t,_=p,y=g),p+=n.v*o,g+=o,i-m>=l&&(p=_,g=y,f(m))):(m=null,p+=n.v*o,g+=o)):n.v>=a&&(v=n.t,h=n.v,p=n.v*o,g=o,m=null)}return null!==v&&(null!==m?(p=_,g=y,f(m)):f(d)),u}function v(e,t,n){var i,o;if(!e||!t)return null;const r=null===(i=e.states)||void 0===i?void 0:i[t];if(!r)return null;const s=n?null===(o=r.attributes)||void 0===o?void 0:o[n]:r.state;if(null==s)return null;if(a.has(String(s).trim().toLowerCase()))return null;const l=Number(s);return Number.isFinite(l)?l:null}n.d(t,["ur",0,r])},3820(e,t,n){n.d(t,{pC:()=>r});var i=n(3647);const o=" ⌗";function r(e,t){var n,i,o,r;return!(64&~Number(null!==(r=null===(o=null===(i=null===(n=null==e?void 0:e.states)||void 0===n?void 0:n[t])||void 0===i?void 0:i.attributes)||void 0===o?void 0:o.supported_features)&&void 0!==r?r:0))}function a(e,t){var n;if(!e)return null;const i=e.trim();if(!i.startsWith("{"))return null;try{const e=JSON.parse(i);return e&&"object"==typeof e?e._ns!==t?null:null!==(n=e.data)&&void 0!==n?n:null:null}catch(e){return null}}function s(e){const t=e.lastIndexOf(o);if(-1!==t)return e.slice(0,t).trim();const n=e.indexOf("{");return n>0&&e.trimEnd().endsWith("}")?e.slice(0,n).trim():e.trim()}const l=new class{constructor(){this._todo=new i.i}async getRecords(e,t,n,i){if(!e||!t)return[];const o=await this._todo.getItems(e,t,i),r=[];for(const e of o){const t=this.parseItem(e,n);t&&r.push(t)}return r}parseItem(e,t){var n;const i=null!==(n=a(e.description,t))&&void 0!==n?n:function(e,t){const n=e.lastIndexOf(o);if(-1!==n)return a(e.slice(n+2),t);const i=e.indexOf("{");return-1===i?null:a(e.slice(i),t)}(e.summary||"",t);if(null===i)return null;const r=e.uid;return r?{uid:r,summary:s(e.summary||""),status:"completed"===e.status?"completed":"needs_action",due:e.due,payload:i}:null}async addRecord(e,t,n,i,a,s){if(!e||!t)return;const l=this._encode(n,a),c={entity_id:t};r(e,t)?(c.item=i,c.description=l):c.item=`${i}${o}${l}`,(null==s?void 0:s.due)&&(c.due_datetime=s.due),await e.callService("todo","add_item",c),this.invalidate(e,t)}async patchRecord(e,t,n,i,a){var s,l,c;if(!e||!t||!i)return;const d=(await this.getRecords(e,t,n)).find(e=>e.uid===i);if(!d)return;const u=Object.assign(Object.assign({},d.payload),null!==(s=a.payload)&&void 0!==s?s:{}),v=null!==(l=a.summary)&&void 0!==l?l:d.summary,m=this._encode(n,u),h={entity_id:t,item:i};r(e,t)?(h.rename=v,h.description=m):h.rename=`${v}${o}${m}`,a.status&&(h.status=a.status),void 0!==a.due&&(h.due_datetime=null!==(c=a.due)&&void 0!==c?c:null),await e.callService("todo","update_item",h),this.invalidate(e,t)}async setStatus(e,t,n,i){e&&t&&n&&(await e.callService("todo","update_item",{entity_id:t,item:n,status:i}),this.invalidate(e,t))}async removeRecord(e,t,n){e&&t&&n&&(await e.callService("todo","remove_item",{entity_id:t,item:n}),this.invalidate(e,t))}invalidate(e,t){this._todo.invalidateCache(e,t)}_encode(e,t){const n={_ns:e,_v:1,data:t};return JSON.stringify(n)}};n.d(t,["N2",0,l])},3647(e,t,n){n.d(t,{i:()=>o});const i="__uvc_todo_cache";class o{constructor(){this._unsubByEntity=new Map,this._callbacksByEntity=new Map}async getItems(e,t,n){if(!e||!t)return[];e[i]||(e[i]=Object.create(null));const o=e[i],r=()=>{if(n){let e=this._callbacksByEntity.get(t);e||(e=new Set,this._callbacksByEntity.set(t,e)),e.add(n)}},a=()=>{const e=this._callbacksByEntity.get(t);e&&e.forEach(e=>{try{e()}catch(e){}})},s=async()=>{var n;try{const i=await e.callService("todo","get_items",{entity_id:t},void 0,!0,!0),r=null!==(n=null==i?void 0:i.response)&&void 0!==n?n:{};let a=[];const s=r[t];if(Array.isArray(null==s?void 0:s.items))a=s.items;else if(Array.isArray(null==s?void 0:s.todo_items))a=s.todo_items;else if(Array.isArray(s))a=s;else if(Array.isArray(r))a=r;else if("object"==typeof r&&null!==r){const e=Object.keys(r).find(e=>e.startsWith("todo.")),t=e?r[e]:void 0;Array.isArray(null==t?void 0:t.items)?a=t.items:Array.isArray(null==t?void 0:t.todo_items)?a=t.todo_items:Array.isArray(t)&&(a=t)}return 0===a.length&&(s||r&&Object.keys(r).length>0)&&console.warn("[UltraCard] todo.get_items: unexpected response shape",{entityId:t,responseKeys:Object.keys(r),entry:s?Object.keys(s):null}),o[t]=a,a}catch(e){return console.warn("[UltraCard] todo.get_items failed for",t,e),o[t]=[],[]}};if(void 0!==o[t])return r(),this._ensureSubscription(e,t,s,a),o[t];const l=await s();return r(),this._ensureSubscription(e,t,s,a),l}_ensureSubscription(e,t,n,i){if(this._unsubByEntity.has(t))return;const o=e.connection;(null==o?void 0:o.subscribeEvents)&&o.subscribeEvents(e=>{var o;(null===(o=null==e?void 0:e.data)||void 0===o?void 0:o.entity_id)===t&&n().then(()=>i())},"state_changed").then(e=>{this._unsubByEntity.set(t,e)}).catch(()=>{})}unsubscribeEntity(e){const t=this._unsubByEntity.get(e);if(t){try{t()}catch(e){}this._unsubByEntity.delete(e)}this._callbacksByEntity.delete(e)}invalidateCache(e,t){if(!e||!t)return;const n=e[i];n&&t in n&&delete n[t]}}},3488(e,t,n){n.d(t,{SB:()=>l,b5:()=>s,gf:()=>a});var i=n(2618),o=n(378),r=n(6478);function a(e){var t,n,i,r;if(!e)return!1;try{const a=o.xd.checkIntegrationAuth(e);if("pro"===(null===(t=null==a?void 0:a.subscription)||void 0===t?void 0:t.tier)&&"active"===(null===(n=null==a?void 0:a.subscription)||void 0===n?void 0:n.status))return!0;if(o.xd.isAuthenticated()){const e=o.xd.getCurrentUser();if("pro"===(null===(i=null==e?void 0:e.subscription)||void 0===i?void 0:i.tier)&&"active"===(null===(r=null==e?void 0:e.subscription)||void 0===r?void 0:r.status))return!0}}catch(e){return!1}return!1}function s(e,t){return i.qy`
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
        ${(0,r.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
      </a>
    </div>
  `}function l(e,t){return i.qy`
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
          ${(0,r.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
      </div>
    </div>
  `}}};