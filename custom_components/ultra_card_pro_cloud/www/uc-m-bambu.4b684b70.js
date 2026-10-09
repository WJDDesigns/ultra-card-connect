export const __webpack_esm_ids__=[3e3];export const __webpack_esm_modules__={2615(e,t,r){r.d(t,{UltraBambuModule:()=>L});var a=r(2618),i=r(7475),n=r(6478),s=r(3488),o=r(6673),d=r(6658);const l="bambu_lab",c=new Set(["A1","A1MINI","A2L","P1P","P1S","P2S","H2C","H2D","H2DPRO","H2S","X2D","X1E","X1C","X1"]),m=new Set(["AMS","AMS Lite","AMS 2 Pro","AMS HT"]),u={nozzle_temp:"nozzle_temp",target_nozzle_temp:"nozzle_target_sensor",bed_temp:"bed_temp",target_bed_temp:"bed_target_sensor",chamber_temp:"chamber_temp",target_chamber_temp:"chamber_target_sensor",left_nozzle_temp:"left_nozzle_temp",left_target_nozzle_temp:"left_nozzle_target",right_nozzle_temp:"right_nozzle_temp",right_target_nozzle_temp:"right_nozzle_target",aux_fan_speed:"aux_fan_speed",chamber_fan_speed:"chamber_fan_speed",cooling_fan_speed:"cooling_fan_speed",heatbreak_fan_speed:"heatbreak_fan_speed",secondary_aux_fan_speed:"secondary_aux_fan_speed",speed_profile:"speed_profile",stage:"stage",print_progress:"print_progress",print_status:"print_status",start_time:"start_time",remaining_time:"remaining_time",end_time:"end_time",current_layer:"current_layer",total_layers:"total_layers",gcode_file:"gcode_file",subtask_name:"task_name",active_tray:"active_tray",nozzle_diameter:"nozzle_size",nozzle_type:"nozzle_type",print_weight:"print_weight",print_length:"print_length",print_bed_type:"print_bed_type",wifi_signal:"wifi_signal",ip_address:"ip_address",online:"online",hms:"hms",print_error:"print_error",door_open:"door",timelapse:"timelapse",pause:"pause",resume:"resume",stop:"stop",refresh:"refresh",chamber_light:"chamber_light",heatbed_light:"heatbed_light",cooling_fan:"cooling_fan",aux_fan:"aux_fan",chamber_fan:"chamber_fan",secondary_aux_fan:"secondary_aux_fan",printing_speed:"printing_speed",target_nozzle_temperature:"nozzle_target",target_bed_temperature:"bed_target",target_chamber_temperature:"chamber_target",camera:"camera",cover_image:"cover_image",p1p_camera:"camera_image",humidity_index:"humidity_index",humidity:"humidity",temperature:"ams_temp",ams_temp:"ams_temp",tray_1:"tray_1",tray_2:"tray_2",tray_3:"tray_3",tray_4:"tray_4",external_spool:"external_spool",active_ams:"active_ams",camera_switch:"camera_switch"},p=[[/_nozzle_temperature$/,"nozzle_temp"],[/_nozzle_target_temperature$/,"nozzle_target"],[/_bed_temperature$/,"bed_temp"],[/_bed_target_temperature$/,"bed_target"],[/_chamber_temperature$/,"chamber_temp"],[/_chamber_target_temperature$/,"chamber_target"],[/_print_progress$/,"print_progress"],[/_print_status$/,"print_status"],[/_current_stage$/,"stage"],[/_current_layer$/,"current_layer"],[/_total_layer_count$/,"total_layers"],[/_remaining_time$/,"remaining_time"],[/_end_time$/,"end_time"],[/_start_time$/,"start_time"],[/_task_name$/,"task_name"],[/_gcode_filename$/,"gcode_file"],[/_speed_profile$/,"speed_profile"],[/_printing_speed$/,"printing_speed"],[/_active_tray$/,"active_tray"],[/_cooling_fan_speed$/,"cooling_fan_speed"],[/_aux_fan_speed$/,"aux_fan_speed"],[/_chamber_fan_speed$/,"chamber_fan_speed"],[/_cooling_fan$/,"cooling_fan"],[/_aux_fan$/,"aux_fan"],[/_chamber_fan$/,"chamber_fan"],[/_chamber_light$/,"chamber_light"],[/_heatbed_light$/,"heatbed_light"],[/_hms_errors$/,"hms"],[/_print_error$/,"print_error"],[/_online$/,"online"],[/_door$/,"door"],[/_cover_image$/,"cover_image"],[/_camera$/,"camera"],[/_pause$/,"pause"],[/_resume$/,"resume"],[/_stop$/,"stop"],[/_force_refresh$/,"refresh"],[/_humidity_index$/,"humidity_index"],[/_humidity$/,"humidity"],[/_tray_1$/,"tray_1"],[/_tray_2$/,"tray_2"],[/_tray_3$/,"tray_3"],[/_tray_4$/,"tray_4"],[/_external_spool$/,"external_spool"],[/_wi[_-]?fi_signal$/,"wifi_signal"],[/_nozzle_size$/,"nozzle_size"],[/_nozzle_type$/,"nozzle_type"]],_=new o.p;function b(e){return e?e.replace(/\s+/g,"").toUpperCase():""}function g(e){const t=b(e);return t.startsWith("H2")?"h2":"A1"===t||"A1MINI"===t||"A2L"===t?"bedslinger":"enclosed_corexy"}function h(e){return c.has(b(e))}function v(e){return(e.identifiers||[]).some(e=>(null==e?void 0:e[0])===l)}function f(e){return(e.name_by_user||e.name||e.model||"Bambu Printer").trim()}function y(e,t,r){if(e&&u[e])return u[e];if(t){const e=t.includes("_")?t.split("_").slice(1).join("_"):t;if(u[e])return u[e];const r=t.match(/tray_([1-4])$/i);if(r)return`tray_${r[1]}`}for(const[e,a]of p)if(e.test(r)||t&&e.test(t))return a;return r.startsWith("switch.")&&/_camera$/.test(r)?"camera_switch":null}function w(e,t){if(!t)return null;const r=e.states[t];if(!r)return null;const a=r.state;return"unavailable"===a||"unknown"===a?null:a}function x(e,t){var r;return t&&(null===(r=e.states[t])||void 0===r?void 0:r.attributes)||{}}function $(e,t){return(0,d.$J)(w(e,t))}function k(e,t){for(const[r,a]of Object.entries(e))if(a===t)return r}function z(e,t,r,a,i){const n=e.states[t],s=(null==n?void 0:n.attributes)||{},o=String(s.name||(null==n?void 0:n.state)||""),l=String(s.type||""),c=null!=s.color?String(s.color):void 0,m=!0===s.empty||"empty"===String((null==n?void 0:n.state)||"").toLowerCase()||"#00000000"===c,u=(0,d.$J)(s.remain);return{id:t,slot:r,name:m?"Empty":o,type:m?"Empty":l,color:(0,d.zG)(c),colorRaw:c,remain:null!=u&&u>=0?u:null,active:!0===s.active,empty:m,unknown:!0===s.unknown,amsIndex:a,amsName:i,entityId:t}}function I(e,t){const r={},a=e.entities;if(!a)return r;for(const[e,i]of Object.entries(a)){if(!i||i.disabled_by)continue;if(i.device_id!==t)continue;if(i.platform&&i.platform!==l)continue;const a=y(i.translation_key,i.unique_id,e);a&&(r[e]=a)}return r}function S(e,t,r){const a=I(e,r),i=[];for(let r=1;r<=4;r++){const n=k(a,`tray_${r}`);n&&i.push(z(e,n,r,void 0,f(t)))}const n=k(a,"external_spool");n&&i.push(z(e,n,1,255,f(t)));const s=Object.keys(a),o=k(a,"active_ams");return{deviceId:r,name:f(t),model:t.model||"AMS",viaDeviceId:t.via_device_id||void 0,trays:i,humidityIndex:$(e,k(a,"humidity_index")),humidityPct:$(e,k(a,"humidity")),humidityEntityId:k(a,"humidity_index")||k(a,"humidity"),temperatureC:$(e,k(a,"ams_temp")),active:o?"on"===w(e,o):null,entityIds:s}}function T(e,t){const r=t=>!!k(e,t);return{chamberTemp:r("chamber_temp"),chamberTarget:r("chamber_target")||r("chamber_target_sensor"),auxFan:r("aux_fan")||r("aux_fan_speed"),chamberFan:r("chamber_fan")||r("chamber_fan_speed"),secondaryAuxFan:r("secondary_aux_fan")||r("secondary_aux_fan_speed"),door:r("door"),dualNozzle:r("left_nozzle_temp")||r("right_nozzle_temp"),camera:r("camera")||r("camera_image"),coverImage:r("cover_image"),ams:!1,heatbedLight:r("heatbed_light")}}function P(e,t,r){const a=new Set(r||[]),i=e.filter(e=>!a.has(e.deviceId));if(!(null==t?void 0:t.length))return i;const n=new Map(i.map(e=>[e.deviceId,e])),s=[];for(const e of t){const t=n.get(e);t&&(s.push(t),n.delete(e))}for(const e of n.values())s.push(e);return s}function E(e,t,r){return P(e,t,r)}function F(e,t){var r;if(!t)return[];const a=e.states[t];if(!a||"off"===a.state)return[];const i=a.attributes,n=[],s=null!==(r=(0,d.$J)(i.Count))&&void 0!==r?r:0;for(let e=1;e<=Math.max(s,8);e++){const t=i[`${e}-Code`];t&&n.push({code:String(t),error:String(i[`${e}-Error`]||""),wiki:null!=i[`${e}-Wiki`]?String(i[`${e}-Wiki`]):void 0,severity:null!=i[`${e}-Severity`]?String(i[`${e}-Severity`]):void 0})}return n}function j(e,t,r,a,i){var n,s;const o=k(t,r),l=k(t,a);if(!o&&!l)return null;let c=null;if(o){const t=e.states[o];c=null!==(s=(0,d.$J)(null===(n=null==t?void 0:t.attributes)||void 0===n?void 0:n.percentage))&&void 0!==s?s:"off"===(null==t?void 0:t.state)?0:null}return null==c&&l&&(c=$(e,l)),{id:o||l||i,label:i,percent:c,entityId:o||l,controllable:!!o}}function M(e,t){var r,a,i,n,s;const o=e.entities,l=k(o,"online"),c=!l||"on"===w(t,l),m=w(t,k(o,"print_status")),u=w(t,k(o,"stage"));let p=(0,d.SP)(m||u,c);"running"===m&&(p="printing"),"pause"===m&&(p="paused"),"finish"===m&&(p="finished"),"failed"===m&&(p="error"),"prepare"!==m&&"init"!==m&&"slicing"!==m||(p="preparing"),"printing"===u&&"unknown"===p&&(p="printing");const _=k(o,"remaining_time"),b=_?String((null===(a=null===(r=t.states[_])||void 0===r?void 0:r.attributes)||void 0===a?void 0:a.unit_of_measurement)||""):"",g=[],h=j(t,o,"cooling_fan","cooling_fan_speed","Part Cooling"),v=j(t,o,"aux_fan","aux_fan_speed","Aux"),f=j(t,o,"chamber_fan","chamber_fan_speed","Chamber"),y=j(t,o,"secondary_aux_fan","secondary_aux_fan_speed","Aux 2");h&&g.push(h),v&&g.push(v),f&&g.push(f),y&&g.push(y);const I=[];for(const t of e.amsUnits)for(const e of t.trays)I.push(Object.assign(Object.assign({},e),{amsName:t.name,amsId:t.deviceId}));const S=[];for(const t of e.externalSpools)for(const e of t.trays)S.push(Object.assign(Object.assign({},e),{amsName:t.name,amsId:t.deviceId}));const T=e=>e.entityId?Object.assign(Object.assign({},z(t,e.entityId,e.slot,e.amsIndex,e.amsName)),{amsId:e.amsId}):e,P=I.map(T),E=S.map(T),M=k(o,"active_tray"),C=(x(t,M),w(t,M)||void 0);let O;const q=[...P,...E].find(e=>e.active);q&&(O=q.id);const U=k(o,"chamber_light")||k(o,"heatbed_light"),A=k(o,"print_error"),D=w(t,A),L=x(t,A),H="on"===D?{code:String(L.code||""),error:String(L.error||"")}:null,B={pauseEntityId:k(o,"pause"),resumeEntityId:k(o,"resume"),stopEntityId:k(o,"stop"),lightEntityId:U,speedEntityId:k(o,"printing_speed"),nozzleTargetEntityId:k(o,"nozzle_target"),bedTargetEntityId:k(o,"bed_target"),chamberTargetEntityId:k(o,"chamber_target")},N=null!==(i=$(t,k(o,"nozzle_target")))&&void 0!==i?i:$(t,k(o,"nozzle_target_sensor")),R=null!==(n=$(t,k(o,"bed_target")))&&void 0!==n?n:$(t,k(o,"bed_target_sensor")),W=null!==(s=$(t,k(o,"chamber_target")))&&void 0!==s?s:$(t,k(o,"chamber_target_sensor")),J=k(o,"camera")||k(o,"camera_image")||void 0;return{id:e.deviceId,name:e.name,model:e.model,modelFamily:e.family,online:c,status:p,statusRaw:m||u||void 0,stage:u||void 0,progress:$(t,k(o,"print_progress")),currentLayer:$(t,k(o,"current_layer")),totalLayers:$(t,k(o,"total_layers")),remainingMinutes:(0,d.nD)(w(t,_),b),endTime:w(t,k(o,"end_time"))||void 0,startTime:w(t,k(o,"start_time"))||void 0,taskName:w(t,k(o,"task_name"))||void 0,fileName:w(t,k(o,"gcode_file"))||void 0,nozzleTemp:$(t,k(o,"nozzle_temp")),nozzleTarget:N,bedTemp:$(t,k(o,"bed_temp")),bedTarget:R,chamberTemp:$(t,k(o,"chamber_temp")),chamberTarget:W,fans:g,speedProfile:w(t,k(o,"speed_profile"))||w(t,k(o,"printing_speed"))||void 0,trays:P,externalSpools:E,activeTrayId:O,activeFilament:"none"===C?void 0:C,hms:F(t,k(o,"hms")),printError:H,doorOpen:(()=>{const e=k(o,"door");return e?"on"===w(t,e):null})(),cameraEntityId:J,coverImageEntityId:k(o,"cover_image"),lightOn:U?"on"===w(t,U):null,controls:B,refs:{status:k(o,"print_status")||k(o,"stage"),stage:k(o,"stage"),progress:k(o,"print_progress"),nozzleTemp:k(o,"nozzle_temp"),bedTemp:k(o,"bed_temp"),chamberTemp:k(o,"chamber_temp"),remaining:_,endTime:k(o,"end_time"),startTime:k(o,"start_time"),taskName:k(o,"task_name")||k(o,"gcode_file"),layer:k(o,"current_layer"),speed:k(o,"printing_speed")||k(o,"speed_profile"),hms:k(o,"hms"),printError:A,activeTray:M,camera:J,light:U,door:k(o,"door")},entityIds:e.allEntityIds}}const C=`\n  ${r(4726).Y}\n\n  .uc-bambu-root {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .uc-bambu-printer-view {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n  }\n  .uc-bambu-printer-view .uc-bambu-stage { margin-bottom: 6px; }\n\n  .uc-bambu-ams {\n    position: relative;\n    padding: 10px 12px;\n    border-radius: 12px;\n    background: var(--uc-printer-surface-2, var(--secondary-background-color));\n    border: 1px solid var(--uc-printer-border, var(--divider-color));\n  }\n  .uc-bambu-ams .ams-body {\n    display: grid;\n    grid-template-columns: repeat(var(--ams-slots, 4), minmax(0, 1fr));\n    gap: 8px;\n  }\n  .uc-bambu-ams .ams-name {\n    font-size: 0.62rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n    opacity: 0.6;\n    margin-bottom: 6px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-right: 40px; /* keep clear of humidity badge */\n  }\n  .uc-bambu-ams.single { padding: 10px 14px; }\n  .uc-bambu-ams.single .ams-name { padding-right: 0; }\n\n  /* Multiple units */\n  .uc-bambu-ams-group {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .uc-bambu-ams-group.layout-grid {\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: stretch;\n  }\n  .uc-bambu-ams-group.layout-grid > .uc-bambu-ams { flex: 1 1 200px; min-width: 0; }\n  .uc-bambu-ams-group.layout-grid > .uc-bambu-ams.single { flex: 0 1 96px; }\n  .uc-bambu-ams-group.layout-strip {\n    padding: 10px 12px;\n    border-radius: 12px;\n    background: var(--uc-printer-surface-2, var(--secondary-background-color));\n    border: 1px solid var(--uc-printer-border, var(--divider-color));\n  }\n  .uc-bambu-ams-group.layout-strip .uc-printer-ams-strip { justify-content: space-around; }\n  .uc-bambu-ams-group.layout-strip .strip-divider {\n    width: 1px;\n    align-self: stretch;\n    background: var(--uc-printer-border, var(--divider-color));\n    margin: 0 2px;\n  }\n  .uc-bambu-ams .ams-slot {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    padding: 6px 4px;\n    border-radius: 8px;\n    border: 1px solid transparent;\n  }\n  .uc-bambu-ams .ams-slot.is-clickable:hover {\n    background: color-mix(in srgb, var(--primary-text-color) 6%, transparent);\n  }\n  .uc-bambu-ams .ams-slot.active {\n    border-color: var(--success-color, #4caf50);\n    background: color-mix(in srgb, var(--success-color, #4caf50) 12%, transparent);\n  }\n  .uc-bambu-ams .spool {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    background: var(--c);\n    display: grid;\n    place-items: center;\n    box-shadow: inset 0 0 0 2px rgba(0,0,0,0.25);\n  }\n  .uc-bambu-ams .ams-slot.active .spool {\n    box-shadow: 0 0 10px var(--c), inset 0 0 0 2px rgba(0,0,0,0.25);\n  }\n  /* ring + hub stack in the same grid cell so the hub is dead-center */\n  .uc-bambu-ams .spool > * { grid-area: 1 / 1; }\n  .uc-bambu-ams .spool-ring {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18);\n  }\n  .uc-bambu-ams .spool-inner {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: var(--uc-printer-hole, var(--uc-printer-surface-2, var(--uc-pane-bg, var(--card-background-color, #1a1a1a))));\n  }\n  .uc-bambu-ams .mat {\n    font-size: 0.65rem;\n    opacity: 0.85;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .uc-bambu-ams .remain { font-size: 0.6rem; opacity: 0.65; }\n  .uc-bambu-ams .slot-num { opacity: 0.4; font-size: 0.75rem; }\n  .uc-bambu-ams .ams-hum {\n    position: absolute;\n    top: 8px;\n    right: 10px;\n    display: inline-flex;\n    align-items: center;\n    gap: 2px;\n    font-size: 0.75rem;\n    opacity: 0.8;\n  }\n  .uc-bambu-ams .ams-hum ha-icon { --mdc-icon-size: 14px; }\n\n  .uc-bambu-farm {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));\n    gap: 12px;\n  }\n  .uc-bambu-farm.single { grid-template-columns: minmax(0, 1fr); }\n  .uc-bambu-farm-card {\n    min-width: 0;\n    padding: 10px;\n    border-radius: 12px;\n    background: var(--uc-printer-surface-2, var(--secondary-background-color));\n    border: 1px solid var(--uc-printer-border, var(--divider-color));\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    cursor: pointer;\n  }\n  .uc-bambu-farm-card .farm-head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    flex-wrap: wrap;\n  }\n  .uc-bambu-farm-card .farm-name {\n    font-weight: 700;\n    font-size: 0.9rem;\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .uc-bambu-farm-card .farm-stage {\n    width: 100%;\n    max-width: 200px;\n    margin: 0 auto;\n  }\n  .uc-bambu-farm-card .farm-stage .uc-bambu-stage { max-width: 100%; }\n  .uc-bambu-farm-card .farm-temps {\n    display: flex;\n    justify-content: center;\n    gap: 6px;\n    flex-wrap: wrap;\n  }\n  .uc-bambu-farm-card .farm-temps > span {\n    display: inline-flex;\n    align-items: center;\n    gap: 3px;\n    padding: 3px 8px;\n    border-radius: 999px;\n    font-size: 0.75rem;\n    font-weight: 600;\n    background: var(--uc-printer-surface, rgba(0,0,0,0.25));\n    border: 1px solid var(--uc-printer-border, var(--divider-color));\n  }\n  .uc-bambu-farm-card .farm-temps ha-icon { --mdc-icon-size: 14px; }\n  .uc-bambu-farm-card .farm-spools {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    gap: 6px;\n    padding: 6px 8px;\n    border-radius: 10px;\n    background: var(--uc-printer-surface, rgba(0,0,0,0.25));\n    border: 1px solid var(--uc-printer-border, var(--divider-color));\n  }\n  .uc-bambu-farm-card .farm-spools .strip-divider {\n    width: 1px;\n    height: 20px;\n    background: var(--uc-printer-border, var(--divider-color));\n    margin: 0 2px;\n  }\n  .uc-bambu-farm-card .farm-foot {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 8px;\n    font-size: 0.75rem;\n    opacity: 0.8;\n  }\n  .uc-bambu-farm-card .farm-hms {\n    display: inline-flex;\n    align-items: center;\n    gap: 3px;\n    color: var(--error-color, #f44336);\n    font-weight: 600;\n  }\n  .uc-bambu-farm-card .farm-hms ha-icon { --mdc-icon-size: 14px; }\n\n  .uc-bambu-compact {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    flex-wrap: wrap;\n  }\n  .uc-bambu-compact .compact-main { flex: 1; min-width: 120px; }\n\n  .uc-bambu-dashboard {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .uc-bambu-dashboard .dash-grid {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n    gap: 10px;\n    align-items: stretch;\n  }\n  .uc-bambu-dashboard .dash-grid > * { min-width: 0; }\n  .uc-bambu-dashboard .dash-grid.single { grid-template-columns: minmax(0, 1fr); }\n  .uc-bambu-dashboard .dash-grid .uc-printer-camera { height: 100%; }\n  @media (max-width: 420px) {\n    .uc-bambu-dashboard .dash-grid { grid-template-columns: minmax(0, 1fr); }\n    .uc-bambu-dashboard .dash-grid .uc-printer-camera.fill {\n      aspect-ratio: 16 / 9;\n      height: auto;\n    }\n  }\n\n  .uc-bambu-setup {\n    padding: 10px 12px;\n    border-radius: 10px;\n    background: color-mix(in srgb, var(--warning-color, #ff9800) 12%, transparent);\n    border: 1px solid color-mix(in srgb, var(--warning-color, #ff9800) 35%, transparent);\n    font-size: 0.85rem;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n  }\n  .uc-bambu-setup.info {\n    background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n    border-color: color-mix(in srgb, var(--primary-color) 35%, transparent);\n  }\n  .uc-bambu-setup .hint-actions {\n    display: flex;\n    gap: 8px;\n    flex-wrap: wrap;\n  }\n  .uc-bambu-setup button {\n    border: 1px solid var(--divider-color);\n    background: var(--secondary-background-color);\n    color: var(--primary-text-color);\n    border-radius: 8px;\n    padding: 4px 10px;\n    cursor: pointer;\n    font-size: 0.8rem;\n  }\n\n  .uc-bambu-empty {\n    padding: 24px 16px;\n    text-align: center;\n    opacity: 0.75;\n    font-size: 0.9rem;\n  }\n`;var O=r(6603),q=r(6278),U=r(3883);function A(e){const{module:t,printer:r,snap:a}=e,i=[...a.trays,...a.externalSpools];return function(e,t,r){return P([...e.amsUnits,...e.externalSpools],t,r)}(r,t.ams_order,t.hidden_ams_ids).map(e=>({unit:e,trays:i.filter(t=>t.amsId===e.deviceId)})).filter(e=>e.trays.length>0)}function D(e){var t;if(!1===e.module.show_ams)return a.s6;const r=A(e);if(!r.length)return a.s6;const i=e.module.ams_layout||"stacked",n=r.length>1;if("strip"===i)return a.qy`
      <div class="uc-bambu-ams-group layout-strip">
        <div class="uc-printer-ams-strip">
          ${r.map((e,t)=>a.qy`
            ${t>0?a.qy`<span class="strip-divider"></span>`:a.s6}
            ${e.trays.map(e=>(0,O.wy)(e,{size:36}))}
          `)}
        </div>
      </div>
    `;if(1===r.length){const e=r[0];return(0,q.Y0)(e.trays,{model:e.unit.model,humidityIndex:null!==(t=e.unit.humidityIndex)&&void 0!==t?t:null,humidityEntityId:e.unit.humidityEntityId})}return a.qy`
    <div class="uc-bambu-ams-group layout-${i}">
      ${r.map(e=>{var t;return(0,q.Y0)(e.trays,{model:e.unit.model,name:n?e.unit.name:void 0,humidityIndex:null!==(t=e.unit.humidityIndex)&&void 0!==t?t:null,humidityEntityId:e.unit.humidityEntityId})})}
    </div>
  `}class L extends i.m{constructor(){super(...arguments),this.metadata={type:"bambu",title:"Bambu Lab",description:"Live Bambu Lab printer card with AMS, camera, controls, and farm view",author:"WJD Designs",version:"1.0.0",icon:"mdi:printer-3d-nozzle",category:"data",tags:["pro","premium","bambu","bambu lab","3d printer","ams","x1c","p1s","a1","print"]},this._discoveredIds=new Map,this._orderDragIndex=new Map}createDefault(e,t){return{id:e||this.generateId("bambu"),type:"bambu",view:"printer",printer_order:[],hidden_printer_ids:[],show_title:!0,title:"Bambu Lab",style:"dark",animation_intensity:"full",show_ams:!0,ams_layout:"stacked",ams_order:[],hidden_ams_ids:[],show_camera:!0,show_controls:!0,show_temps:!0,show_fans:!0,show_print_details:!0,show_hms:!0,show_speed:!0,show_job:!0,show_thumbnail:!0,camera_mode:"snapshot",camera_refresh_seconds:10,setup_dismissed:!1,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getRuntimeEntityIds(e){const t=e;return this._discoveredIds.get(t.id)||[]}destroy(e){e&&(function(e){_.forget(e)}(e),this._discoveredIds.delete(e),this._orderDragIndex.delete(`${e}:farm`),this._orderDragIndex.delete(`${e}:ams`))}_topology(e,t){const r=function(e,t){if(!(null==e?void 0:e.states))return{printers:[],allEntityIds:[],hasBambuIntegration:!1};const r=e;return _.read(t,[e.states,r.entities,r.devices],(0,o.W)("bambu"),()=>function(e){const t=e,r=t.devices||{},a=[];let i=!1;const n=new Set,s=new Map,o=[];for(const[e,t]of Object.entries(r)){if(!t||t.disabled_by)continue;if(!v(t)&&!h(t.model))continue;i=!0;const r=t.model||"";if(h(r))o.push({id:e,row:Object.assign(Object.assign({},t),{id:e})});else if(m.has(r)||"External Spool"===r||"Hotend Rack"===r){const r=t.via_device_id;if(r){const a=s.get(r)||[];a.push({id:e,row:Object.assign(Object.assign({},t),{id:e})}),s.set(r,a)}}}!i&&t.entities&&(i=Object.values(t.entities).some(e=>(null==e?void 0:e.platform)===l));for(const{id:t,row:r}of o){const i=I(e,t),o=T(i,r.model),d=[],c=[],m=s.get(t)||[];for(const t of m){const r=S(e,t.row,t.id);r.entityIds.forEach(e=>n.add(e)),"External Spool"===t.row.model?c.push(r):"Hotend Rack"!==t.row.model&&d.push(r)}o.ams=d.length>0;const u=(r.identifiers||[]).find(e=>(null==e?void 0:e[0])===l),p={deviceId:t,name:f(r),model:b(r.model)||r.model||"Unknown",family:g(r.model),serial:null==u?void 0:u[1],swVersion:r.sw_version||void 0,entities:i,capabilities:o,amsUnits:d,externalSpools:c,allEntityIds:[...Object.keys(i),...d.flatMap(e=>e.entityIds),...c.flatMap(e=>e.entityIds)]};p.allEntityIds.forEach(e=>n.add(e)),a.push(p)}return a.sort((e,t)=>e.name.localeCompare(t.name)),{printers:a,allEntityIds:[...n],hasBambuIntegration:i||a.length>0}}(e))}(t,e.id);return this._discoveredIds.set(e.id,r.allEntityIds),r}_selectedPrinter(e,t){const r=E(t.printers,e.printer_order,e.hidden_printer_ids);return e.printer_device_id&&r.find(t=>t.deviceId===e.printer_device_id)||r[0]}_callService(e,t,r,a){try{e.callService(t,r,a)}catch(e){}}renderGeneralTab(e,t,r,i){var o,d;const l=e,c=(null===(o=null==t?void 0:t.locale)||void 0===o?void 0:o.language)||"en";if(!(0,s.gf)(t))return(0,s.b5)(c,(0,n.kg)("editor.bambu.pro_description",c,"Bambu Lab builds a live printer card with AMS trays, temperatures, fans, camera, and farm view from the ha-bambulab integration."));const m=this._topology(l,t),u=(E(m.printers,l.printer_order,l.hidden_printer_ids),this._selectedPrinter(l,m)),p=!0===l.setup_dismissed?[]:function(e,t,r){const a=[];if(!e.hasBambuIntegration)return a.push({id:"no_integration",severity:"warning",message:"Install and configure the Bambu Lab integration (greghesp/ha-bambulab) to auto-discover printers."}),a;if(!e.printers.length)return a.push({id:"no_printers",severity:"warning",message:"Bambu Lab is configured but no printers were found in the device registry."}),a;const i=r||e.printers[0];if(!i||!t)return a;const n=k(i.entities,"online");n&&"on"!==w(t,n)&&a.push({id:"offline",severity:"warning",message:`${i.name} appears offline.`,printerDeviceId:i.deviceId});const s=k(i.entities,"camera_switch");return s&&"off"===w(t,s)&&!i.capabilities.camera&&a.push({id:"camera_off",severity:"info",message:"Camera is disabled — turn on the Camera switch in Home Assistant to show a live view.",printerDeviceId:i.deviceId}),i.capabilities.ams||i.externalSpools.length||a.push({id:"no_ams",severity:"info",message:"No AMS units discovered for this printer. External spool still works when configured.",printerDeviceId:i.deviceId}),a}(m,t,u),_=l.view||"printer",b=[{value:"",label:(0,n.kg)("editor.bambu.printer_auto",c,"First found"),icon:"mdi:printer-3d"},...m.printers.map(e=>({value:e.deviceId,label:e.name,icon:"mdi:printer-3d-nozzle"}))];return a.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        ${p.length?a.qy`<div class="uc-bambu-setup ${p[0].severity}">
              ${p.map(e=>a.qy`<div>${e.message}</div>`)}
              <div class="hint-actions">
                <button
                  type="button"
                  @click=${()=>{i({setup_dismissed:!0}),this.triggerPreviewUpdate()}}
                >
                  ${(0,n.kg)("editor.bambu.wizard_dismiss",c,"Dismiss")}
                </button>
              </div>
            </div>`:a.s6}

        ${this.renderSegmentedField((0,n.kg)("editor.bambu.view",c,"View"),(0,n.kg)("editor.bambu.view_desc",c,"Printer is the hero illustration. Dashboard, camera, farm and compact cover the rest."),_,[{value:"printer",label:(0,n.kg)("editor.bambu.view_printer",c,"Printer"),icon:"mdi:printer-3d"},{value:"dashboard",label:(0,n.kg)("editor.bambu.view_dashboard",c,"Dashboard"),icon:"mdi:view-dashboard"},{value:"camera",label:(0,n.kg)("editor.bambu.view_camera",c,"Camera"),icon:"mdi:cctv"},{value:"farm",label:(0,n.kg)("editor.bambu.view_farm",c,"Farm"),icon:"mdi:view-grid"},{value:"compact",label:(0,n.kg)("editor.bambu.view_compact",c,"Compact"),icon:"mdi:view-compact"}],e=>{i({view:e}),this.triggerPreviewUpdate()},3)}

        ${"farm"!==_?this.renderSegmentedField((0,n.kg)("editor.bambu.printer",c,"Printer"),(0,n.kg)("editor.bambu.printer_desc",c,"Which discovered Bambu printer to show (Farm uses all)."),l.printer_device_id||"",b,e=>{i({printer_device_id:e||void 0}),this.triggerPreviewUpdate()}):a.s6}

        <div
          style="display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:8px;background:rgba(var(--rgb-primary-color),0.08);margin:8px 0 24px;"
        >
          <ha-icon icon="mdi:printer-3d-nozzle" style="color:var(--primary-color);"></ha-icon>
          <span style="font-size:0.85rem;">
            ${(0,n.kg)("editor.bambu.found_printers",c,"Found {count} Bambu printers").replace("{count}",String(m.printers.length))}
          </span>
        </div>

        ${this.renderSettingsSection((0,n.kg)("editor.bambu.title",c,"Title"),(0,n.kg)("editor.bambu.title_desc",c,"Optional heading text."),[{title:(0,n.kg)("editor.bambu.show_title",c,"Show title"),description:"",hass:t,data:{show_title:!1!==l.show_title},schema:[this.booleanField("show_title")],onChange:e=>{var t;i({show_title:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_title)}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.bambu.title",c,"Title"),description:"",hass:t,data:{title:l.title||""},schema:[this.textField("title")],onChange:e=>{var t;i({title:(null===(t=e.detail.value)||void 0===t?void 0:t.title)||""}),this.triggerPreviewUpdate()}}])}

        ${this.renderSegmentedField((0,n.kg)("editor.bambu.style",c,"Style"),(0,n.kg)("editor.bambu.style_desc",c,"Visual theme for surfaces and borders."),l.style||"dark",[{value:"theme",label:(0,n.kg)("editor.bambu.style_theme",c,"Theme")},{value:"dark",label:(0,n.kg)("editor.bambu.style_dark",c,"Dark")},{value:"light",label:(0,n.kg)("editor.bambu.style_light",c,"Light")},{value:"glass",label:(0,n.kg)("editor.bambu.style_glass",c,"Glass")},{value:"carbon",label:(0,n.kg)("editor.bambu.style_carbon",c,"Carbon")}],e=>{i({style:e}),this.triggerPreviewUpdate()})}

        ${this.renderSegmentedField((0,n.kg)("editor.bambu.animation",c,"Animation"),(0,n.kg)("editor.bambu.animation_desc",c,"Fan spin, heating glow, and progress motion. Respects prefers-reduced-motion."),l.animation_intensity||"full",[{value:"off",label:(0,n.kg)("editor.bambu.anim_off",c,"Off")},{value:"subtle",label:(0,n.kg)("editor.bambu.anim_subtle",c,"Subtle")},{value:"full",label:(0,n.kg)("editor.bambu.anim_full",c,"Full")}],e=>{i({animation_intensity:e}),this.triggerPreviewUpdate()})}

        ${this.renderColorField((0,n.kg)("editor.bambu.accent_color",c,"Accent"),(0,n.kg)("editor.bambu.accent_color_desc",c,"Highlights and progress accents."),t,l.accent_color||"","",e=>{i({accent_color:e||void 0}),this.triggerPreviewUpdate()})}

        ${this.renderFileField((0,n.kg)("editor.bambu.custom_image",c,"Custom printer image"),(0,n.kg)("editor.bambu.custom_image_desc",c,"Optional photo override. Hotspot overlays stay in place."),t,l.custom_image||"",e=>{i({custom_image:e||void 0}),this.triggerPreviewUpdate()},"image/*")}

        ${this.renderSettingsSection((0,n.kg)("editor.bambu.sections",c,"Sections"),(0,n.kg)("editor.bambu.sections_desc",c,"Toggle which blocks appear in the selected view."),[{title:(0,n.kg)("editor.bambu.show_ams",c,"AMS trays"),description:"",hass:t,data:{show_ams:!1!==l.show_ams},schema:[this.booleanField("show_ams")],onChange:e=>{var t;i({show_ams:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_ams)}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.bambu.show_temps",c,"Temperatures"),description:"",hass:t,data:{show_temps:!1!==l.show_temps},schema:[this.booleanField("show_temps")],onChange:e=>{var t;i({show_temps:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_temps)}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.bambu.show_fans",c,"Fans"),description:"",hass:t,data:{show_fans:!1!==l.show_fans},schema:[this.booleanField("show_fans")],onChange:e=>{var t;i({show_fans:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_fans)}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.bambu.show_controls",c,"Controls"),description:"",hass:t,data:{show_controls:!1!==l.show_controls},schema:[this.booleanField("show_controls")],onChange:e=>{var t;i({show_controls:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_controls)}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.bambu.show_camera",c,"Camera"),description:"",hass:t,data:{show_camera:!1!==l.show_camera},schema:[this.booleanField("show_camera")],onChange:e=>{var t;i({show_camera:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_camera)}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.bambu.show_print_details",c,"Print details"),description:"",hass:t,data:{show_print_details:!1!==l.show_print_details},schema:[this.booleanField("show_print_details")],onChange:e=>{var t;i({show_print_details:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_print_details)}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.bambu.show_speed",c,"Speed profiles"),description:"",hass:t,data:{show_speed:!1!==l.show_speed},schema:[this.booleanField("show_speed")],onChange:e=>{var t;i({show_speed:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_speed)}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.bambu.show_job",c,"Print job"),description:(0,n.kg)("editor.bambu.show_job_desc",c,"File name, layer, and time remaining."),hass:t,data:{show_job:!1!==l.show_job},schema:[this.booleanField("show_job")],onChange:e=>{var t;i({show_job:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_job)}),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.bambu.show_thumbnail",c,"Cover thumbnail"),description:(0,n.kg)("editor.bambu.show_thumbnail_desc",c,"Cover image inside the print job block."),hass:t,data:{show_thumbnail:!1!==l.show_thumbnail},schema:[this.booleanField("show_thumbnail")],onChange:e=>{var t;i({show_thumbnail:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.show_thumbnail)}),this.triggerPreviewUpdate()}}])}

        ${this.renderSegmentedField((0,n.kg)("editor.bambu.camera_mode",c,"Camera mode"),(0,n.kg)("editor.bambu.camera_mode_desc",c,"Snapshots poll a still image (low data). Live streams the camera like Home Assistant does."),l.camera_mode||"snapshot",[{value:"snapshot",label:(0,n.kg)("editor.bambu.camera_mode_snapshot",c,"Snapshots"),icon:"mdi:image-multiple-outline"},{value:"live",label:(0,n.kg)("editor.bambu.camera_mode_live",c,"Live"),icon:"mdi:video-outline"}],e=>{i({camera_mode:e}),this.triggerPreviewUpdate()},2)}

        ${"snapshot"===(l.camera_mode||"snapshot")?this.renderSliderField((0,n.kg)("editor.bambu.camera_refresh",c,"Camera refresh (s)"),(0,n.kg)("editor.bambu.camera_refresh_desc",c,"How often to refresh camera snapshots."),null!==(d=l.camera_refresh_seconds)&&void 0!==d?d:10,10,1,60,1,e=>{i({camera_refresh_seconds:e}),this.triggerPreviewUpdate()},"s"):a.s6}

        ${"farm"===_?this._renderFarmOrder(l,m,t,c,i):a.s6}
        ${!1!==l.show_ams?this._renderAmsSettings(l,m,t,c,i):a.s6}
      </div>
    `}_renderFarmOrder(e,t,r,a,i){return this._renderOrderList({moduleId:e.id,dragKey:"farm",title:(0,n.kg)("editor.bambu.farm_order",a,"Farm order"),description:(0,n.kg)("editor.bambu.farm_order_desc",a,"Drag to reorder printers in the farm grid. Hide ones you do not want."),items:t.printers.map(e=>({id:e.deviceId,name:e.name,detail:e.model})),order:e.printer_order||[],hidden:e.hidden_printer_ids||[],onOrder:e=>i({printer_order:e}),onHidden:e=>i({hidden_printer_ids:e})})}_renderAmsSettings(e,t,r,i,s){const o=this._selectedPrinter(e,t),d=o?[...o.amsUnits,...o.externalSpools]:[];return d.length?a.qy`
      ${d.length>1?this.renderSegmentedField((0,n.kg)("editor.bambu.ams_layout",i,"AMS layout"),(0,n.kg)("editor.bambu.ams_layout_desc",i,"How several AMS / external spool units are arranged."),e.ams_layout||"stacked",[{value:"stacked",label:(0,n.kg)("editor.bambu.ams_layout_stacked",i,"Stacked"),icon:"mdi:view-sequential"},{value:"grid",label:(0,n.kg)("editor.bambu.ams_layout_grid",i,"Grid"),icon:"mdi:view-grid"},{value:"strip",label:(0,n.kg)("editor.bambu.ams_layout_strip",i,"Spools only"),icon:"mdi:dots-horizontal-circle-outline"}],e=>{s({ams_layout:e}),this.triggerPreviewUpdate()},3):a.s6}
      ${this._renderOrderList({moduleId:e.id,dragKey:"ams",title:(0,n.kg)("editor.bambu.ams_units",i,"AMS units"),description:(0,n.kg)("editor.bambu.ams_units_desc",i,"Drag to reorder AMS and external spool units. Hide ones you do not want."),items:d.map(e=>({id:e.deviceId,name:e.name,detail:`${e.model} · ${e.trays.length} ${1===e.trays.length?"slot":"slots"}`})),order:e.ams_order||[],hidden:e.hidden_ams_ids||[],onOrder:e=>s({ams_order:e}),onHidden:e=>s({hidden_ams_ids:e})})}
    `:a.s6}_renderOrderList(e){const t=e.order.length?e.order:e.items.map(e=>e.id),r=new Set(e.hidden),i=new Map(e.items.map(e=>[e.id,e])),n=`${e.moduleId}:${e.dragKey}`;return a.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${e.title}
        </div>
        <div style="font-size:0.85rem;opacity:0.75;margin-bottom:12px;">${e.description}</div>
        ${t.map((s,o)=>{const d=i.get(s);if(!d)return a.s6;const l=r.has(s);return a.qy`
            <div
              style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:8px;background:var(--uc-pane-bg, var(--card-background-color));margin-bottom:6px;opacity:${l?"0.45":"1"};"
              draggable="true"
              @dragstart=${()=>this._orderDragIndex.set(n,o)}
              @dragover=${e=>e.preventDefault()}
              @drop=${()=>{const r=this._orderDragIndex.get(n);if(null==r||r===o)return;const a=[...t],[i]=a.splice(r,1);i&&(a.splice(o,0,i),e.onOrder(a),this.triggerPreviewUpdate())}}
            >
              <ha-icon icon="mdi:drag" style="opacity:0.5;"></ha-icon>
              <span style="flex:1;font-weight:600;">${d.name}</span>
              ${d.detail?a.qy`<span style="font-size:0.75rem;opacity:0.65;">${d.detail}</span>`:a.s6}
              <button
                type="button"
                style="border:none;background:transparent;color:var(--primary-color);cursor:pointer;"
                @click=${()=>{const t=new Set(r);l?t.delete(s):t.add(s),e.onHidden([...t]),this.triggerPreviewUpdate()}}
              >
                ${l?"Show":"Hide"}
              </button>
            </div>
          `})}
        ${e.items.filter(e=>!t.includes(e.id)).map(r=>a.qy`
              <div style="padding:6px 8px;font-size:0.85rem;">
                ${r.name}
                <button
                  type="button"
                  style="margin-left:8px;border:none;background:transparent;color:var(--primary-color);cursor:pointer;"
                  @click=${()=>{e.onOrder([...t,r.id]),this.triggerPreviewUpdate()}}
                >
                  Add
                </button>
              </div>
            `)}
      </div>
    `}renderPreview(e,t,r,i){var o;const l=e,c=(null===(o=null==t?void 0:t.locale)||void 0===o?void 0:o.language)||"en";if(!(0,s.gf)(t))return(0,s.SB)(c,(0,n.kg)("editor.bambu.title_default",c,"Bambu Lab"));const m=this._topology(l,t),u=l.style||"dark",p=l.animation_intensity||"full",_=[l.text_color?`color:${l.text_color}`:"",l.accent_color?`--primary-color:${l.accent_color}`:""].filter(Boolean).join(";");if(!m.printers.length)return a.qy`
        <div
          class="uc-printer-root uc-bambu-root style-${u} anim-${p}"
          data-uc-role="pane"
          style=${_}
        >
          <div class="uc-bambu-empty">
            ${(0,n.kg)("editor.bambu.empty",c,"No Bambu Lab printers discovered. Install greghesp/ha-bambulab, then reload this card.")}
          </div>
        </div>
      `;const b=l.view||"printer";let g;if("farm"===b){const e=E(m.printers,l.printer_order,l.hidden_printer_ids).map(e=>({printer:e,snap:M(e,t)}));g=function(e,t,r,i){if(!r.length)return a.qy`<div class="uc-bambu-empty">No printers to show.</div>`;const n=e=>null==e?"—":`${Math.round(e)}°`;return a.qy`
    <div class="uc-bambu-farm ${1===r.length?"single":""}">
      ${r.map(({printer:r,snap:s})=>{const o=e=>e?t=>(0,d.Mx)(t,e):void 0,l=o(s.refs.remaining),c=o(s.refs.hms);return a.qy`
          <div
            class="uc-bambu-farm-card"
            @click=${()=>null==i?void 0:i(r.deviceId)}
          >
            <div class="farm-head">
              <div class="farm-name" title=${s.name}>${s.name}</div>
              ${(0,O.k3)(s.status,s.statusRaw,s.refs.status)}
            </div>
            <div class="farm-stage">
              ${(0,q.D0)(s,Object.assign(Object.assign({},e.accent_color?{accent:e.accent_color}:{}),{customImage:e.custom_image,showTemps:!1!==e.show_temps,showProgress:!1,compact:!0,animation:e.animation_intensity||"subtle"}))}
            </div>
            <div class="farm-temps">
              <span class=${o(s.refs.nozzleTemp)?"is-clickable":""}
                    style="color:#ff9800" @click=${o(s.refs.nozzleTemp)}>
                <ha-icon icon="mdi:printer-3d-nozzle"></ha-icon>${n(s.nozzleTemp)}
              </span>
              <span class=${o(s.refs.bedTemp)?"is-clickable":""}
                    style="color:#e91e63" @click=${o(s.refs.bedTemp)}>
                <ha-icon icon="mdi:heat-wave"></ha-icon>${n(s.bedTemp)}
              </span>
              ${null!=s.chamberTemp?a.qy`<span class=${o(s.refs.chamberTemp)?"is-clickable":""}
                        style="color:#2196f3" @click=${o(s.refs.chamberTemp)}>
                    <ha-icon icon="mdi:thermometer"></ha-icon>${n(s.chamberTemp)}
                  </span>`:a.s6}
            </div>
            ${!1!==e.show_ams&&(s.trays.length||s.externalSpools.length)?a.qy`<div class="farm-spools">
                  ${A({module:e,hass:t,printer:r,snap:s}).map((e,t)=>a.qy`
                    ${t>0?a.qy`<span class="strip-divider"></span>`:a.s6}
                    ${e.trays.map(e=>(0,O.wy)(e,{size:24,showLabel:!1}))}
                  `)}
                </div>`:a.s6}
            ${(0,O.hv)(s.progress,{compact:!0,entityId:s.refs.progress})}
            <div class="farm-foot">
              <span class=${l?"is-clickable":""} @click=${l}>
                ${(0,d.gc)(s.remainingMinutes)} left
              </span>
              ${s.hms.length?a.qy`<span class="farm-hms ${c?"is-clickable":""}" @click=${c}>
                    <ha-icon icon="mdi:alert-circle"></ha-icon>${s.hms.length} HMS
                  </span>`:a.s6}
            </div>
          </div>
        `})}
    </div>
  `}(l,t,e,e=>{const r=m.printers.find(t=>t.deviceId===e);if(!r)return;const a=M(r,t),i=a.controls.pauseEntityId||a.cameraEntityId||Object.keys(r.entities)[0];i&&document.body.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:i}}))})}else{const e=this._selectedPrinter(l,m);if(e){const r=M(e,t),i={module:l,hass:t,printer:e,snap:r};switch(b){case"dashboard":g=function(e){var t;const{module:r,hass:i,snap:n}=e,s=(0,U.f)(i,n),o=[{label:"Stage",value:n.stage||n.statusRaw||n.status,entityId:n.refs.stage||n.refs.status},{label:"HMS",value:n.hms.length?`${n.hms.length} issue(s)`:"OK",accent:n.hms.length>0,entityId:n.refs.hms},{label:"Start",value:(0,d.Ey)(n.startTime),entityId:n.refs.startTime},{label:"Remaining",value:(0,d.gc)(n.remainingMinutes),accent:!0,entityId:n.refs.remaining},{label:"End",value:(0,d.Ey)(n.endTime),entityId:n.refs.endTime},{label:"Filament",value:n.activeFilament||"—",entityId:n.refs.activeTray}];n.printError&&o.unshift({label:"Print error",value:n.printError.error||n.printError.code,accent:!0,entityId:n.refs.printError});const l=!1!==r.show_speed&&!!n.speedProfile,c=!1!==r.show_controls,m=!1!==r.show_print_details,u=!1!==r.show_camera&&!!n.cameraEntityId;return a.qy`
    <div class="uc-bambu-dashboard">
      <div class="uc-printer-header">
        <div>
          <div class="title">${n.name}</div>
          ${(0,O.k3)(n.status,n.statusRaw,n.refs.status)}
        </div>
        ${(0,O.Sq)(n.progress,56,5,n.refs.progress)}
      </div>
      ${!1!==r.show_temps?function(e){return a.qy`<div class="uc-printer-temps">
    ${(0,O.fN)("Nozzle",e.nozzleTemp,e.nozzleTarget,{icon:"mdi:printer-3d-nozzle",accent:"#ff9800",entityId:e.refs.nozzleTemp})}
    ${(0,O.fN)("Bed",e.bedTemp,e.bedTarget,{icon:"mdi:heat-wave",accent:"#e91e63",entityId:e.refs.bedTemp})}
    ${null!=e.chamberTemp?(0,O.fN)("Chamber",e.chamberTemp,e.chamberTarget,{icon:"mdi:thermometer",accent:"#2196f3",entityId:e.refs.chamberTemp}):a.s6}
  </div>`}(n):a.s6}
      ${l||c?a.qy`<div class="uc-printer-row">
            ${l?(0,O.B5)("Speed",String(n.speedProfile),{icon:"mdi:speedometer",entityId:n.refs.speed}):a.s6}
            ${c?(0,O.FC)(n,s):a.s6}
          </div>`:a.s6}
      ${!1!==r.show_fans?(0,O.IW)(n.fans,s,{editable:!0}):a.s6}
      ${(0,O.hv)(n.progress,{entityId:n.refs.progress})}
      ${!1!==r.show_job?(0,O.F3)(n,i,{showThumbnail:!1!==r.show_thumbnail}):a.s6}
      ${D(e)}
      ${m||u?a.qy`<div class="dash-grid ${m&&u?"":"single"}">
            ${m?(0,O.RG)(o):a.s6}
            ${u?(0,O.k)(i,n.cameraEntityId,{refreshSeconds:null!==(t=r.camera_refresh_seconds)&&void 0!==t?t:10,mode:r.camera_mode,alt:n.name,fill:m}):a.s6}
          </div>`:a.s6}
    </div>
  `}(i);break;case"camera":g=function(e){var t;const{module:r,hass:i,snap:n}=e,s=(0,U.f)(i,n),o=n.refs.remaining?e=>(0,d.Mx)(e,n.refs.remaining):void 0;return a.qy`
    <div class="uc-bambu-camera-view">
      ${(0,O.k)(i,n.cameraEntityId,{refreshSeconds:null!==(t=r.camera_refresh_seconds)&&void 0!==t?t:10,mode:r.camera_mode,alt:n.name})}
      <div class="uc-printer-header" style="margin-top:10px;">
        <div>
          <div class="title">${n.name}</div>
          ${(0,O.k3)(n.status,n.statusRaw,n.refs.status)}
        </div>
        <div
          class=${o?"is-clickable":""}
          style="text-align:right;"
          @click=${o}
        >
          <div style="font-weight:700;">${(0,d.gc)(n.remainingMinutes)}</div>
          <div style="font-size:0.75rem;opacity:0.7;">
            ${null!=n.progress?`${Math.round(n.progress)}%`:"—"}
          </div>
        </div>
      </div>
      ${(0,O.hv)(n.progress,{entityId:n.refs.progress})}
      ${!1!==r.show_controls?(0,O.FC)(n,s):a.s6}
    </div>
  `}(i);break;case"compact":g=function(e){const{snap:t}=e,r=t.trays.find(e=>e.active)||t.externalSpools.find(e=>e.active),i=(null==r?void 0:r.color)||"var(--primary-color)",n=(null==r?void 0:r.entityId)?e=>(0,d.Mx)(e,r.entityId):void 0,s=t.refs.nozzleTemp?e=>(0,d.Mx)(e,t.refs.nozzleTemp):void 0,o=t.refs.remaining?e=>(0,d.Mx)(e,t.refs.remaining):void 0;return a.qy`
    <div class="uc-bambu-compact">
      <span
        class=${n?"is-clickable":""}
        style="width:12px;height:12px;border-radius:50%;background:${i};box-shadow:0 0 6px ${i};flex-shrink:0;"
        @click=${n}
      ></span>
      <div class="compact-main">
        <div style="display:flex;justify-content:space-between;gap:8px;align-items:center;">
          <strong>${t.name}</strong>
          ${(0,O.k3)(t.status,t.statusRaw,t.refs.status)}
        </div>
        ${(0,O.hv)(t.progress,{compact:!0,entityId:t.refs.progress})}
      </div>
      <span
        class=${s?"is-clickable":""}
        style="font-size:0.8rem;white-space:nowrap;"
        @click=${s}
      >
        ${null!=t.nozzleTemp?`${Math.round(t.nozzleTemp)}°`:"—"} /
        ${null!=t.bedTemp?`${Math.round(t.bedTemp)}°`:"—"}
      </span>
      <span
        class=${o?"is-clickable":""}
        style="font-size:0.8rem;font-weight:600;white-space:nowrap;"
        @click=${o}
      >
        ${(0,d.gc)(t.remainingMinutes)}
      </span>
    </div>
  `}(i);break;default:g=function(e){const{module:t,hass:r,snap:i}=e,n=(0,U.f)(r,i);return a.qy`
    <div class="uc-bambu-printer-view">
      ${D(e)}
      ${(0,q.D0)(i,Object.assign(Object.assign({},t.accent_color?{accent:t.accent_color}:{}),{customImage:t.custom_image,showTemps:!1!==t.show_temps,animation:t.animation_intensity||"full"}))}
      ${!1!==t.show_controls?(0,O.FC)(i,n):a.s6}
      ${!1!==t.show_job?(0,O.F3)(i,r,{showThumbnail:!1!==t.show_thumbnail}):a.s6}
    </div>
  `}(i)}}else g=a.qy`<div class="uc-bambu-empty">No printer selected.</div>`}return a.qy`
      <div
        class="uc-printer-root uc-bambu-root style-${u} anim-${p}"
        data-uc-role="pane"
        style=${_}
      >
        ${!1!==l.show_title&&l.title&&"farm"!==b?a.qy`<div class="uc-printer-header">
              <div class="title">${l.title}</div>
            </div>`:a.s6}
        ${g}
      </div>
    `}getStyles(){return`\n      ${i.m.getSliderStyles()}\n      ${C}\n    `}validate(e){return super.validate(e)}}},3488(e,t,r){r.d(t,{SB:()=>d,b5:()=>o,gf:()=>s});var a=r(2618),i=r(378),n=r(6478);function s(e){var t,r,a,n;if(!e)return!1;try{const s=i.xd.checkIntegrationAuth(e);if("pro"===(null===(t=null==s?void 0:s.subscription)||void 0===t?void 0:t.tier)&&"active"===(null===(r=null==s?void 0:s.subscription)||void 0===r?void 0:r.status))return!0;if(i.xd.isAuthenticated()){const e=i.xd.getCurrentUser();if("pro"===(null===(a=null==e?void 0:e.subscription)||void 0===a?void 0:a.tier)&&"active"===(null===(n=null==e?void 0:e.subscription)||void 0===n?void 0:n.status))return!0}}catch(e){return!1}return!1}function o(e,t){return a.qy`
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
  `}function d(e,t){return a.qy`
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
  `}},6673(e,t,r){r.d(t,{W:()=>i,p:()=>a});class a{constructor(e=32){this._cache=new Map,this._limit=e}read(e,t,r,a){const i=this._cache.get(e);if(i&&i.key===r&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(i.deps,t))return i.value;const n=a();if(this._cache.set(e,{deps:t,key:r,value:n}),this._cache.size>this._limit){const e=this._cache.keys().next().value;void 0!==e&&this._cache.delete(e)}return n}forget(e){this._cache.delete(e)}clear(){this._cache.clear()}}function i(...e){try{return JSON.stringify(e)}catch(e){return`__unserializable__${Math.random()}`}}}};