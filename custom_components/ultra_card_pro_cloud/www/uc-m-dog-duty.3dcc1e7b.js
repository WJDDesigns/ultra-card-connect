export const __webpack_esm_ids__=[4358];export const __webpack_esm_modules__={3221(e,t,o){o.d(t,{UltraDogDutyModule:()=>A});var n=o(2618),i=o(3307),r=o(6478),a=o(5147),d=o(8938),s=o(378),c=o(3647);const l=.02,u=" ⌗",g={type:"object",properties:{found:{type:"boolean",description:"True if dog droppings are visible in the image"},spots:{type:"array",description:"Detected droppings with normalized image coordinates",items:{type:"object",properties:{x:{type:"number",description:"Horizontal position from 0 (left) to 1 (right)"},y:{type:"number",description:"Vertical position from 0 (top) to 1 (bottom)"},confidence:{type:"number",description:"Confidence from 0 to 1"},description:{type:"string",description:"Short description of the spot"}},required:["x","y"],additionalProperties:!1}}},required:["found","spots"],additionalProperties:!1};function p(e){const t=e.sensitivity||"balanced",o=!1!==e.detectSquatting,n=[];"compare"===e.mode?n.push("Compare these two images of the same yard (before then after).","Identify any NEW dog droppings / feces that appear in the later image."):(n.push("Analyze this yard camera image for dog waste."),o?n.push("Mark a spot if you see dog droppings / feces on the ground, OR a dog currently squatting / defecating."):n.push("Mark a spot only if you see dog droppings / feces on the ground. Do not mark a dog that is only sitting or standing.")),e.hasExamples&&n.push("The image file(s) provided are REFERENCE EXAMPLES of what dog waste looks like in this specific yard.","Use them only as visual reference. Analyze ONLY the live camera image for new detections — do not mark the example photos themselves."),n.push("Return structured data only.","Coordinates are normalized: x=0 left, x=1 right, y=0 top, y=1 bottom (center of the pile or the dog)."),"strict"===t?n.push("Be strict: only report high-confidence clear detections. Prefer fewer spots. When unsure, set found=false."):"lenient"===t?n.push("Be attentive: report likely spots even at moderate confidence. Still do not invent spots with no visual evidence."):n.push("Do not invent spots. Prefer fewer high-confidence detections.");const i=h(e.roi);if(i){const e=i.x,t=i.y,o=i.x+i.width,r=i.y+i.height;n.push(`Only report detections inside this rectangle (full-image normalized coords): left=${e.toFixed(3)}, top=${t.toFixed(3)}, right=${o.toFixed(3)}, bottom=${r.toFixed(3)}. Ignore everything outside.`)}const r=function(e){return e&&"string"==typeof e?e.replace(/\s+/g," ").trim().slice(0,400):""}(e.extraTips);return r&&n.push(`Yard-specific notes from the owner: ${r}`),n.push("If nothing is found, set found=false and spots=[]."),n.join(" ")}function y(e){if(!e||"string"!=typeof e)return null;const t=e.trim();return t?t.startsWith("media-source://media_source/local/")?`/media/local/${t.slice(34)}`:t.startsWith("/media/")||t.startsWith("/config/")?t:t.startsWith("/local/")?`/config/www${t.slice(6)}`:t.startsWith("local/")?`/config/www/${t.slice(6)}`:/^https?:\/\//i.test(t)?null:t.startsWith("/")?t:`/config/www/${t}`:null}function m(e){if(!Array.isArray(e))return[];const t=[];for(const o of e.slice(0,3)){const e=y(o);e&&!t.includes(e)&&t.push(e)}return t}function h(e){if(!e)return null;const t=w(Number(e.x)),o=w(Number(e.y)),n=Math.min(1-t,Math.max(0,Number(e.width))),i=Math.min(1-o,Math.max(0,Number(e.height)));return n<.05||i<.05||t<=.01&&o<=.01&&n>=.98&&i>=.98?null:{x:t,y:o,width:n,height:i}}function v(e){if(!e||"string"!=typeof e)return null;const t=e.trim().match(/^(\d{1,2}):(\d{2})(?::\d{2})?$/);if(!t)return null;const o=Number(t[1]),n=Number(t[2]);return o>23||n>59?null:`${String(o).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function _(e,t){const o="number"==typeof(null==t?void 0:t.minConfidence)&&Number.isFinite(t.minConfidence)?w(t.minConfidence):.45,n=h(null==t?void 0:t.roi),i=(e.spots||[]).filter(e=>{if("number"==typeof e.confidence&&e.confidence<o)return!1;if(!n)return!0;const t=w(e.x),i=w(e.y);return t>=n.x-l&&t<=n.x+n.width+l&&i>=n.y-l&&i<=n.y+n.height+l});return Object.assign(Object.assign({},e),{spots:i,found:i.length>0})}const f=new class{constructor(){this._todo=new c.i}async getEvents(e,t,o){return e&&t?(await this._todo.getItems(e,t,o)).map(e=>this._itemToEvent(e)).filter(e=>!!e):[]}parseEvent(e){return this._itemToEvent(e)}async markCleaned(e,t,o){await e.callService("todo","update_item",{entity_id:t,item:o,status:"completed"}),this._todo.invalidateCache(e,t)}async markNeedsAction(e,t,o){await e.callService("todo","update_item",{entity_id:t,item:o,status:"needs_action"}),this._todo.invalidateCache(e,t)}async removeEvent(e,t,o){await e.callService("todo","remove_item",{entity_id:t,item:o}),this._todo.invalidateCache(e,t)}async addEvent(e,t,o,n){const i=Math.round(100*w(o.x)),r=Math.round(100*w(o.y)),a=n||`Dog duty @ ${i}%, ${r}%`,d=Object.assign(Object.assign({},o),{x:w(o.x),y:w(o.y),detected_at:o.detected_at||(new Date).toISOString()}),s=JSON.stringify(d),c={entity_id:t};$(e,t)?(c.item=a,c.description=s):c.item=`${a}${u}${s}`,await e.callService("todo","add_item",c)}async scanNow(e,t){var o;const{cameraEntity:n,todoEntity:i,providerId:r,writeEvents:a=!0}=t;if(!e||!n||!r)return{found:!1,spots:[],error:"Missing camera or LLM Vision provider"};const d=m(t.exampleImages),s=p({mode:"single",sensitivity:t.sensitivity,detectSquatting:t.detectSquatting,extraTips:t.extraTips,roi:t.roi,hasExamples:d.length>0});try{const c={provider:r,message:s,image_entity:[n],max_tokens:1500,target_width:1280,include_filename:d.length>0,remember:!1,response_format:"json",structure:g};d.length>0&&(c.image_file=d.join("\n"));const l=await e.callService("llmvision","image_analyzer",c,void 0,!0,!0);let u=z(null!==(o=null==l?void 0:l.response)&&void 0!==o?o:l);if(u.error&&!u.found&&0===u.spots.length)return x(u);if(u=_(u,{roi:t.roi,minConfidence:t.minConfidence}),a&&u.found&&u.spots.length>0&&i){const t=(new Date).toISOString();try{for(const o of u.spots)await this.addEvent(e,i,{x:o.x,y:o.y,confidence:o.confidence,description:o.description,detected_at:t,camera:n,source:"scan_now"})}catch(e){return x({found:!0,spots:u.spots,error:(null==e?void 0:e.message)||String(e),rawText:u.rawText})}}return u}catch(o){const n=(null==o?void 0:o.message)||String(o),i=n.toLowerCase();if(i.includes("response_format")||i.includes("structure")||i.includes("extra keys")||i.includes("not a valid")||i.includes("unexpected"))try{return await this._scanNowTextFallback(e,t,s,d)}catch(e){return x({found:!1,spots:[],error:(null==e?void 0:e.message)||n})}return console.warn("[UltraCard] Dog Duty scan failed",o),x({found:!1,spots:[],error:n})}}async _scanNowTextFallback(e,t,o,n){var i;const{cameraEntity:r,todoEntity:a,providerId:d,writeEvents:s=!0}=t,c={provider:d,message:[o,"Respond with ONLY a JSON object, no markdown:",'{"found":false,"spots":[{"x":0.5,"y":0.5,"confidence":0.8,"description":"short"}]}'].join(" "),image_entity:[r],max_tokens:1500,target_width:1280,include_filename:n.length>0,remember:!1};n.length>0&&(c.image_file=n.join("\n"));const l=await e.callService("llmvision","image_analyzer",c,void 0,!0,!0);let u=z(null!==(i=null==l?void 0:l.response)&&void 0!==i?i:l);if(u.error&&!u.found&&0===u.spots.length)return x(u);if(u=_(u,{roi:t.roi,minConfidence:t.minConfidence}),s&&u.found&&u.spots.length>0&&a){const t=(new Date).toISOString();try{for(const o of u.spots)await this.addEvent(e,a,{x:o.x,y:o.y,confidence:o.confidence,description:o.description,detected_at:t,camera:r,source:"scan_now"})}catch(e){return x({found:!0,spots:u.spots,error:(null==e?void 0:e.message)||String(e),rawText:u.rawText})}}return u}async detectLlmVision(e){var t;if(!e)return{installed:!1,providers:[]};const o=!!(null===(t=(e.services||{}).llmvision)||void 0===t?void 0:t.image_analyzer);let n=[];try{const t=await e.callWS({type:"config_entries/get"});Array.isArray(t)&&(n=b(t))}catch(t){try{const t=await e.callApi("GET","config/config_entries/entry");Array.isArray(t)&&(n=b(t))}catch(e){}}return{installed:o||n.length>0,providers:n}}isUsableProviderId(e,t){return!!e&&t.some(t=>t.id===e)}findDogDutyTodoEntities(e){return(null==e?void 0:e.states)?Object.keys(e.states).filter(t=>{var o,n;if(!t.startsWith("todo."))return!1;const i=((null===(n=null===(o=e.states[t])||void 0===o?void 0:o.attributes)||void 0===n?void 0:n.friendly_name)||t).toLowerCase();return t.includes("dog_duty")||t.includes("dogduty")||i.includes("dog duty")||i.includes("dogduty")}):[]}buildAutomationConfig(e){var t,o;const n=e.automationId||`ultra_card_dog_duty_${Date.now().toString(36)}`,i=Math.max(1,null!==(t=e.cooldownMinutes)&&void 0!==t?t:10),r=e.triggerEntity,a=m(e.exampleImages),d=p({mode:"compare",sensitivity:e.sensitivity,detectSquatting:e.detectSquatting,extraTips:e.extraTips,roi:e.roi,hasExamples:a.length>0}),s=Math.max(5,Math.round(null!==(o=e.intervalMinutes)&&void 0!==o?o:30)),c=r?[{platform:"state",entity_id:r,to:"on",id:"dog_activity"}]:[s>=60?{platform:"time_pattern",hours:`/${Math.max(1,Math.round(s/60))}`,minutes:"0",id:"scheduled"}:{platform:"time_pattern",minutes:`/${s}`,id:"scheduled"}],l=[{alias:"Snapshot before",service:"camera.snapshot",target:{entity_id:e.cameraEntity},data:{filename:'/config/www/ultra-card/dog-duty/before_{{ now().strftime("%Y%m%d_%H%M%S") }}.jpg'}}];r?(l.push({alias:"Wait for activity to clear",wait_for_trigger:[{platform:"state",entity_id:r,to:"off"}],timeout:{minutes:5},continue_on_timeout:!0}),l.push({delay:{seconds:30}})):l.push({delay:{seconds:5}});const u={provider:e.providerId,message:d,image_entity:[e.cameraEntity],max_tokens:1500,target_width:1280,include_filename:a.length>0,remember:!1,response_format:"json",structure:g};a.length>0&&(u.image_file=a.join("\n")),l.push({alias:"Snapshot after",service:"camera.snapshot",target:{entity_id:e.cameraEntity},data:{filename:'/config/www/ultra-card/dog-duty/after_{{ now().strftime("%Y%m%d_%H%M%S") }}.jpg'}},{alias:"Analyze with LLM Vision",service:"llmvision.image_analyzer",data:u,response_variable:"dog_duty_scan"},{alias:"Add detections to to-do list",choose:[{conditions:[{condition:"template",value_template:"{{ dog_duty_scan is mapping and (dog_duty_scan.found | default(false) or (dog_duty_scan.spots | default([]) | length > 0) or (dog_duty_scan.response_text | default('') | regex_search('\"found\"\\\\s*:\\\\s*true'))) }}"}],sequence:[{service:"todo.add_item",target:{entity_id:e.todoEntity},data:{item:"{{ ('Dog duty @ ' ~ (((dog_duty_scan.spots[0].x | default(0.5)) * 100) | round) ~ '%, ' ~ (((dog_duty_scan.spots[0].y | default(0.5)) * 100) | round) ~ '% ⌗') ~ ({'x': (dog_duty_scan.spots[0].x | default(0.5)), 'y': (dog_duty_scan.spots[0].y | default(0.5)), 'confidence': (dog_duty_scan.spots[0].confidence | default(0.7)), 'detected_at': now().isoformat(), 'camera': '"+e.cameraEntity+"', 'source': 'automation', 'description': dog_duty_scan.spots[0].description | default('') } | to_json) }}"}}]}]});const y=[{condition:"template",value_template:`{{ (now() - states.automation['${n}'].attributes.last_triggered | default(as_datetime(0), true)).total_seconds() > ${60*i} }}`}];if(!r){const t=v(e.activeStart),o=v(e.activeEnd);t&&o&&t!==o&&y.push({condition:"time",after:t,before:o})}return{id:n,alias:"Ultra Card — Dog Duty",description:"Created by Ultra Card Dog Duty module. Scans the yard camera after dog/motion activity and stores detections on a to-do list.",mode:"single",max_exceeded:"silent",triggers:c,conditions:y,actions:l}}async createOrUpdateAutomation(e,t){const o=this.buildAutomationConfig(t),n=String(o.id);try{return await e.callApi("POST",`config/automation/config/${n}`,o),{ok:!0,automationId:n}}catch(e){return console.warn("[UltraCard] Failed to create Dog Duty automation",e),{ok:!1,automationId:n,error:(null==e?void 0:e.message)||String(e)}}}unsubscribeTodo(e){this._todo.unsubscribeEntity(e)}invalidateTodoCache(e,t){this._todo.invalidateCache(e,t)}_itemToEvent(e){if(!e)return null;const t=k(e.description)||function(e){if(!e)return null;const t=e.indexOf(u);if(t>=0)return k(e.slice(t+2).trim());const o=e.lastIndexOf("{"),n=e.lastIndexOf("}");return o>=0&&n>o?k(e.slice(o,n+1)):null}(e.summary);if(!t)return null;const o=t.detected_at?Date.parse(t.detected_at):Date.now(),n=function(e){if(!e)return"";const t=e.indexOf(u);if(t>=0)return e.slice(0,t).trim();const o=e.lastIndexOf("{");return o>0&&e.includes('"x"')?e.slice(0,o).trim():e.trim()}(e.summary)||"Dog duty";return{uid:e.uid||`${n}-${o}`,summary:n,status:"completed"===e.status?"completed":"needs_action",cleaned:"completed"===e.status,payload:Object.assign(Object.assign({},t),{x:w(t.x),y:w(t.y)}),detectedAt:Number.isFinite(o)?o:Date.now()}}};function b(e){return e.filter(e=>"llmvision"===(null==e?void 0:e.domain)&&(null==e?void 0:e.entry_id)).filter(e=>!function(e,t){const o=(e||"").trim().toLowerCase(),n=(t||"").trim().toLowerCase();return!(!o&&!n||"llm vision"!==o&&"llm vision settings"!==o&&!o.endsWith(" settings")&&"llmvision"!==n&&"llm_vision"!==n&&!n.includes("settings"))}(String(e.title||""),String(e.unique_id||""))).map(e=>({id:String(e.entry_id),title:String(e.title||e.entry_id)})).sort((e,t)=>e.title.localeCompare(t.title))}function x(e){const t=`${e.error||""} ${e.rawText||""}`.toLowerCase();return t.trim()?t.includes("invalid_model")?Object.assign(Object.assign({},e),{error:"invalid_model — pick your real AI provider (e.g. “Anthropic Claude”), not “LLM Vision Settings”."}):t.includes("budget_tokens")||t.includes("thinking.enabled")||t.includes("couldn't generate content")&&t.includes("anthropic")?Object.assign(Object.assign({},e),{error:"Anthropic thinking budget is misconfigured in LLM Vision (known bug: budget_tokens must be an integer). Fix: Anthropic Claude → ⋮ → Reconfigure → set Thinking / reasoning budget to 0 (off), then Submit. Or update LLM Vision past 1.7.0."}):t.includes("couldn't generate content")?Object.assign(Object.assign({},e),{error:"LLM Vision couldn't generate content (provider error). Check Home Assistant logs for Anthropic/OpenAI details. For Anthropic: set Thinking budget to 0 in the provider Reconfigure screen."}):(t.includes("does not support setting field: description")||t.includes("description"))&&(t.includes("does not support")||t.includes("validation error"))?Object.assign(Object.assign({},e),{error:"This to-do list cannot store descriptions (e.g. Shopping List). Create a Local To-do named “Dog Duty” (Helpers → Local To-do) and select it in Entities — or update Ultra Card; newer builds store markers without description support."}):e:e}function w(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):.5}function k(e){if(!e||"string"!=typeof e)return null;const t=e.trim();if(!t.startsWith("{"))return null;try{const e=JSON.parse(t);return"number"!=typeof(null==e?void 0:e.x)||"number"!=typeof(null==e?void 0:e.y)?null:{x:e.x,y:e.y,confidence:"number"==typeof e.confidence?e.confidence:void 0,snapshot:"string"==typeof e.snapshot?e.snapshot:void 0,detected_at:"string"==typeof e.detected_at?e.detected_at:void 0,camera:"string"==typeof e.camera?e.camera:void 0,description:"string"==typeof e.description?e.description:void 0,source:e.source}}catch(e){return null}}function $(e,t){var o,n,i;return!(!(null==e?void 0:e.states)||!t)&&!(64&~Number(null!==(i=null===(n=null===(o=e.states[t])||void 0===o?void 0:o.attributes)||void 0===n?void 0:n.supported_features)&&void 0!==i?i:0))}function S(e){if(!e)return"";if("string"==typeof e)return e;if("string"==typeof e.response_text)return e.response_text;if("string"==typeof e.response_txt)return e.response_txt;if("string"==typeof e.text)return e.text;if("string"==typeof e.response)return e.response;if("string"==typeof e.message)return e.message;try{return JSON.stringify(e)}catch(t){return String(e)}}function z(e){if(null==e)return{found:!1,spots:[],error:"Empty analyzer response"};if("object"==typeof e&&!Array.isArray(e)){const t=P(e);if(t)return Object.assign(Object.assign({},t),{rawText:S(e)});for(const t of["data","result","json","structured_response","response"]){const o=e[t];if(o&&"object"==typeof o&&!Array.isArray(o)){const t=P(o);if(t)return Object.assign(Object.assign({},t),{rawText:S(e)})}}}return function(e){if(!e)return{found:!1,spots:[],error:"Empty analyzer response"};let t=e.trim();const o=t.match(/```(?:json)?\s*([\s\S]*?)```/i);(null==o?void 0:o[1])&&(t=o[1].trim());try{const o=P(JSON.parse(t));if(o)return Object.assign(Object.assign({},o),{rawText:e})}catch(e){}const n=t.indexOf("{");if(-1===n)return/\b(no|none|nothing|not found|clear|absent)\b/i.test(t)?{found:!1,spots:[],rawText:e}:{found:!1,spots:[],error:`No JSON object in analyzer response: ${t.slice(0,160)}`,rawText:e};let i=0,r=-1,a=!1,d=!1;for(let e=n;e<t.length;e++){const o=t[e];if(a)d?d=!1:"\\"===o?d=!0:'"'===o&&(a=!1);else if('"'!==o){if("{"===o)i++;else if("}"===o&&(i--,0===i)){r=e;break}}else a=!0}if(-1===r)return{found:!1,spots:[],error:`No JSON object in analyzer response: ${t.slice(0,160)}`,rawText:e};try{const o=P(JSON.parse(t.slice(n,r+1)));return o?Object.assign(Object.assign({},o),{rawText:e}):{found:!1,spots:[],error:"Analyzer JSON missing found/spots fields",rawText:e}}catch(t){return{found:!1,spots:[],error:(null==t?void 0:t.message)||"Failed to parse analyzer JSON",rawText:e}}}(S(e))}function P(e){return e&&"object"==typeof e?"found"in e||Array.isArray(e.spots)?function(e){const t=(Array.isArray(e.spots)?e.spots:[]).filter(e=>"number"==typeof(null==e?void 0:e.x)&&"number"==typeof(null==e?void 0:e.y)).map(e=>({x:w(Number(e.x)),y:w(Number(e.y)),confidence:"number"==typeof e.confidence?e.confidence:void 0,description:"string"==typeof e.description?e.description:void 0}));return{found:!0===e.found||"true"===e.found||t.length>0,spots:t}}(e):"number"==typeof e.x&&"number"==typeof e.y?{found:!0,spots:[{x:w(e.x),y:w(e.y),confidence:"number"==typeof e.confidence?e.confidence:void 0,description:"string"==typeof e.description?e.description:void 0}]}:null:null}class A extends i.m{constructor(){super(...arguments),this.metadata={type:"dog_duty",title:"Dog Duty",description:"Yard map with AI-detected dog waste markers, time scrubber, and cleanup tracking",author:"WJD Designs",version:"1.0.0",icon:"mdi:dog",category:"data",tags:["pro","premium","camera","ai","pets","dog","yard","vision"]},this._preview=new Map,this._wizard=new Map,this._roiEdit=new Map}createDefault(e,t){return{id:e||this.generateId("dog_duty"),type:"dog_duty",camera_entity:"",camera_entities:[],cameras_layout:"stack",todo_entity:"",trigger_entity:"",provider_id:"",automation_id:"",setup_complete:!1,lookback_hours:48,marker_style:"x",show_heatmap:!1,show_cleaned:!1,background_mode:"live_snapshot",reference_image:"",scan_cooldown_minutes:10,scan_interval_minutes:30,scan_active_start:"07:00",scan_active_end:"21:00",show_status_bar:!0,show_scrubber:!0,show_scan_now:!0,title:"",show_title:!0,detection_sensitivity:"balanced",detect_squatting:!0,min_confidence:.45,extra_tips:"",example_images:[],tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){return super.validate(e)}getRuntimeEntityIds(e){const t=e,o=[];for(const e of C(t))o.push(e);return t.todo_entity&&o.push(t.todo_entity),t.trigger_entity&&o.push(t.trigger_entity),o}renderActionsTab(e,t,o,n){return a.A.render(e,t,e=>n(e))}renderOtherTab(e,t,o,n){return d.X.render(e,t,e=>n(e))}renderGeneralTab(e,t,o,i){var a,d,c,l;const u=e,g=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",p=s.xd.checkIntegrationAuth(t);if("pro"!==(null===(d=null==p?void 0:p.subscription)||void 0===d?void 0:d.tier)||"active"!==(null===(c=null==p?void 0:p.subscription)||void 0===c?void 0:c.status))return this.renderProLockUI(g);const y=this._ensureWizard(u.id);return n.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        ${this._renderWizard(u,t,i,g,y)}

        ${this.renderSettingsSection((0,r.kg)("editor.dog_duty.entities_section",g,"Entities"),(0,r.kg)("editor.dog_duty.entities_section_desc",g,"Camera and to-do list that power the Dog Duty map."),[{title:(0,r.kg)("editor.dog_duty.camera",g,"Yard camera"),description:(0,r.kg)("editor.dog_duty.camera_desc",g,"Primary camera for the yard map. Add more below if you have multiple angles."),hass:t,data:{camera_entity:u.camera_entity||""},schema:[{name:"camera_entity",selector:{entity:{domain:"camera"}}}],onChange:e=>{var t,o;i({camera_entity:null!==(o=null===(t=e.detail.value)||void 0===t?void 0:t.camera_entity)&&void 0!==o?o:""}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.dog_duty.extra_cameras",g,"Additional cameras"),description:(0,r.kg)("editor.dog_duty.extra_cameras_desc",g,"Optional. Each camera gets its own map; status chips combine across all."),hass:t,data:{camera_entities:u.camera_entities||[]},schema:[{name:"camera_entities",selector:{entity:{domain:"camera",multiple:!0}}}],onChange:e=>{var t;const o=null===(t=e.detail.value)||void 0===t?void 0:t.camera_entities,n=Array.isArray(o)?o.filter(e=>e&&e!==u.camera_entity):[];i({camera_entities:n}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.dog_duty.cameras_layout",g,"Camera layout"),description:(0,r.kg)("editor.dog_duty.cameras_layout_desc",g,"Stack maps vertically or show them in a grid when you have more than one camera."),hass:t,data:{cameras_layout:u.cameras_layout||"stack"},schema:[this.selectField("cameras_layout",[{value:"stack",label:(0,r.kg)("editor.dog_duty.layout_stack",g,"List (stacked)")},{value:"grid",label:(0,r.kg)("editor.dog_duty.layout_grid",g,"Grid")}])],onChange:e=>{var t;i({cameras_layout:(null===(t=e.detail.value)||void 0===t?void 0:t.cameras_layout)||"stack"}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.dog_duty.todo",g,"To-do list"),description:(0,r.kg)("editor.dog_duty.todo_desc",g,'A local to-do list that stores detections. Create one named "Dog Duty" if you do not have it yet.'),hass:t,data:{todo_entity:u.todo_entity||""},schema:[{name:"todo_entity",selector:{entity:{domain:"todo"}}}],onChange:e=>{var t,o;i({todo_entity:null!==(o=null===(t=e.detail.value)||void 0===t?void 0:t.todo_entity)&&void 0!==o?o:""}),this._preview.delete(u.id),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.dog_duty.trigger",g,"Dog / motion trigger (optional)"),description:(0,r.kg)("editor.dog_duty.trigger_desc",g,"Binary sensor from Scrypted/Frigate dog detection or yard motion. Leave blank for manual Scan Now only."),hass:t,data:{trigger_entity:u.trigger_entity||""},schema:[{name:"trigger_entity",selector:{entity:{domain:"binary_sensor"}}}],onChange:e=>{var t,o;i({trigger_entity:null!==(o=null===(t=e.detail.value)||void 0===t?void 0:t.trigger_entity)&&void 0!==o?o:""}),this.triggerPreviewUpdate()}}])}

        ${u.todo_entity&&t&&!$(t,u.todo_entity)?n.qy`<div class="dog-duty-warn" style="margin: -16px 0 24px;">
              <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
              ${(0,r.kg)("editor.dog_duty.todo_no_description",g,"This list (e.g. Shopping List) cannot store item descriptions. Markers still work, but a Local To-do named “Dog Duty” is recommended (Settings → Devices & services → Helpers → Local To-do).")}
            </div>`:n.s6}

        ${this._renderScanModeSection(u,t,i,g)}

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 8px; letter-spacing: 0.5px;"
          >
            ${(0,r.kg)("editor.dog_duty.provider_section",g,"LLM Vision")}
          </div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px;">
            ${(0,r.kg)("editor.dog_duty.provider_section_desc",g,"Provider config entry used for Scan Now and the generated automation.")}
          </div>
          ${this.renderSegmentedField((0,r.kg)("editor.dog_duty.provider",g,"Provider"),(0,r.kg)("editor.dog_duty.provider_desc",g,"Run Check prerequisites in the wizard to refresh the list."),u.provider_id||"",[...y.providers.length?y.providers.map(e=>({value:e.id,label:e.title})):u.provider_id?[{value:u.provider_id,label:u.provider_id.slice(0,12)+"…"}]:[{value:"",label:(0,r.kg)("editor.dog_duty.no_provider",g,"None detected")}]],e=>{i({provider_id:e})})}
          ${this.renderFieldSection((0,r.kg)("editor.dog_duty.provider_manual",g,"Provider ID (manual)"),(0,r.kg)("editor.dog_duty.provider_manual_desc",g,"Paste an LLM Vision provider entry_id if it was not auto-detected."),t,{provider_id:u.provider_id||""},[this.textField("provider_id")],e=>{var t,o;i({provider_id:null!==(o=null===(t=e.detail.value)||void 0===t?void 0:t.provider_id)&&void 0!==o?o:""})})}
        </div>

        ${this._renderDetectionSection(u,t,i,g,y)}

        ${this.renderSettingsSection((0,r.kg)("editor.dog_duty.display_section",g,"Display"),(0,r.kg)("editor.dog_duty.display_section_desc",g,"Map look and time window."),[{title:(0,r.kg)("editor.dog_duty.title",g,"Title"),description:(0,r.kg)("editor.dog_duty.title_desc",g,'Leave blank to use "Dog Duty".'),hass:t,data:{title:u.title||""},schema:[this.textField("title")],onChange:e=>{var t,o;i({title:null!==(o=null===(t=e.detail.value)||void 0===t?void 0:t.title)&&void 0!==o?o:""}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.dog_duty.show_title",g,"Show title"),description:"",hass:t,data:{show_title:!1!==u.show_title},schema:[this.booleanField("show_title")],onChange:e=>{i({show_title:e.detail.value.show_title}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.dog_duty.show_status_bar",g,"Show status bar"),description:"",hass:t,data:{show_status_bar:!1!==u.show_status_bar},schema:[this.booleanField("show_status_bar")],onChange:e=>{i({show_status_bar:e.detail.value.show_status_bar}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.dog_duty.show_scrubber",g,"Show time scrubber"),description:"",hass:t,data:{show_scrubber:!1!==u.show_scrubber},schema:[this.booleanField("show_scrubber")],onChange:e=>{i({show_scrubber:e.detail.value.show_scrubber}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.dog_duty.show_scan_now",g,"Show Scan Now button"),description:"",hass:t,data:{show_scan_now:!1!==u.show_scan_now},schema:[this.booleanField("show_scan_now")],onChange:e=>{i({show_scan_now:e.detail.value.show_scan_now}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.dog_duty.show_cleaned",g,"Show cleaned markers"),description:(0,r.kg)("editor.dog_duty.show_cleaned_desc",g,"Completed to-do items appear as faded checkmarks."),hass:t,data:{show_cleaned:!!u.show_cleaned},schema:[this.booleanField("show_cleaned")],onChange:e=>{i({show_cleaned:e.detail.value.show_cleaned}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.dog_duty.show_heatmap",g,"Heatmap by default"),description:(0,r.kg)("editor.dog_duty.show_heatmap_desc",g,"Show density overlay of favorite spots in the lookback window."),hass:t,data:{show_heatmap:!!u.show_heatmap},schema:[this.booleanField("show_heatmap")],onChange:e=>{i({show_heatmap:e.detail.value.show_heatmap});const t=this._preview.get(u.id);t&&(t.showHeatmap=!!e.detail.value.show_heatmap),this.triggerPreviewUpdate()}}])}

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,r.kg)("editor.dog_duty.map_section",g,"Map")}
          </div>

          ${this.renderSegmentedField((0,r.kg)("editor.dog_duty.lookback",g,"Lookback window"),(0,r.kg)("editor.dog_duty.lookback_desc",g,"How far back the scrubber and markers go."),String(u.lookback_hours||48),[{value:"6",label:"6h"},{value:"24",label:"24h"},{value:"48",label:"48h"},{value:"168",label:"7d"}],e=>{i({lookback_hours:Number(e)||48}),this.triggerPreviewUpdate()})}

          ${this.renderSegmentedField((0,r.kg)("editor.dog_duty.marker_style",g,"Marker style"),"",u.marker_style||"x",[{value:"x",label:(0,r.kg)("editor.dog_duty.marker_x",g,"X")},{value:"emoji",label:(0,r.kg)("editor.dog_duty.marker_emoji",g,"Emoji")},{value:"pin",label:(0,r.kg)("editor.dog_duty.marker_pin",g,"Pin")}],e=>{i({marker_style:e}),this.triggerPreviewUpdate()})}

          ${this.renderSegmentedField((0,r.kg)("editor.dog_duty.background_mode",g,"Background"),(0,r.kg)("editor.dog_duty.background_mode_desc",g,"Live camera snapshot or a fixed reference photo of the yard."),u.background_mode||"live_snapshot",[{value:"live_snapshot",label:(0,r.kg)("editor.dog_duty.bg_live",g,"Live snapshot")},{value:"reference",label:(0,r.kg)("editor.dog_duty.bg_reference",g,"Reference photo")}],e=>{i({background_mode:e}),this.triggerPreviewUpdate()})}

          ${"reference"===u.background_mode?this.renderFileField((0,r.kg)("editor.dog_duty.reference_image",g,"Reference image"),(0,r.kg)("editor.dog_duty.reference_image_desc",g,"Upload a still photo of the yard from the same camera angle."),t,u.reference_image||"",e=>{i({reference_image:e}),this.triggerPreviewUpdate()},"image/*"):n.s6}

          ${this.renderSliderField((0,r.kg)("editor.dog_duty.cooldown",g,"Scan cooldown"),(0,r.kg)("editor.dog_duty.cooldown_desc",g,"Minimum minutes between automation runs / Scan Now calls."),null!==(l=u.scan_cooldown_minutes)&&void 0!==l?l:10,10,1,60,1,e=>{i({scan_cooldown_minutes:e})},"min")}
        </div>
      </div>
    `}_detectionOpts(e){return{sensitivity:e.detection_sensitivity||"balanced",detectSquatting:!1!==e.detect_squatting,minConfidence:"number"==typeof e.min_confidence?e.min_confidence:.45,extraTips:e.extra_tips||"",exampleImages:(e.example_images||[]).filter(Boolean).slice(0,3),roi:e.detect_roi||null}}_ensureRoiEdit(e){let t=this._roiEdit.get(e);return t||(t={editing:!1,dragging:!1,startX:0,startY:0,current:null},this._roiEdit.set(e,t)),t}_scanMode(e){return e.automation_id?e.trigger_entity?"sensor":"scheduled":"manual"}_formatInterval(e,t){if(e>=60){const o=Math.round(e/60);return`${o} ${(0,r.kg)(1===o?"editor.dog_duty.hour":"editor.dog_duty.hours",t,1===o?"hour":"hours")}`}return`${e} ${(0,r.kg)("editor.dog_duty.minutes",t,"min")}`}_renderScanModeRow(e,t,o,i,a){return n.qy`
      <div
        style="display: flex; gap: 10px; align-items: flex-start; padding: 10px 12px; border-radius: var(--uc-r-8, 8px); border: 1px solid ${e?"var(--primary-color)":"var(--divider-color)"}; background: ${e?"color-mix(in srgb, var(--primary-color) 8%, transparent)":"transparent"};"
      >
        <ha-icon
          icon="${t}"
          style="--mdc-icon-size: 20px; margin-top: 1px; color: ${e?"var(--primary-color)":"var(--secondary-text-color)"};"
        ></ha-icon>
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
            ${o}
            ${e?n.qy`<span
                  style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary-color); border: 1px solid var(--primary-color); border-radius: 999px; padding: 1px 8px;"
                  >${(0,r.kg)("editor.dog_duty.mode_active",a,"Active")}</span
                >`:n.s6}
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-top: 2px;">
            ${i}
          </div>
        </div>
      </div>
    `}_renderScanModeSection(e,t,o,i){var a;const d=this._scanMode(e),s=null!==(a=e.scan_interval_minutes)&&void 0!==a?a:30,c=this._formatInterval(s,i);return n.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.dog_duty.scan_mode_section",i,"How scanning works")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px;">
          ${(0,r.kg)("editor.dog_duty.scan_mode_section_desc",i,"The mode is chosen automatically from your setup: pick a trigger sensor for the smartest scanning, or let the automation run on a schedule without one.")}
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px;">
          ${this._renderScanModeRow("sensor"===d,"mdi:motion-sensor",(0,r.kg)("editor.dog_duty.mode_sensor",i,"Sensor-triggered"),(0,r.kg)("editor.dog_duty.mode_sensor_desc",i,"A dog / motion sensor starts a scan right after activity ends. Fewest AI calls — recommended if you have one."),i)}
          ${this._renderScanModeRow("scheduled"===d,"mdi:clock-outline",(0,r.kg)("editor.dog_duty.mode_scheduled",i,"Scheduled"),(0,r.kg)("editor.dog_duty.mode_scheduled_desc",i,"No sensor needed. The automation scans every {interval} during your active hours. Each scan is one AI call, whether or not the dog was out.").replace("{interval}",c),i)}
          ${this._renderScanModeRow("manual"===d,"mdi:gesture-tap-button",(0,r.kg)("editor.dog_duty.mode_manual",i,"Manual only"),(0,r.kg)("editor.dog_duty.mode_manual_desc",i,"No automation yet. Only the Scan Now button runs a scan — zero background AI cost. Finish the wizard to enable automatic scanning."),i)}
        </div>
        ${e.trigger_entity?n.s6:n.qy`
              ${this.renderSegmentedField((0,r.kg)("editor.dog_duty.scan_interval",i,"Scheduled scan interval"),(0,r.kg)("editor.dog_duty.scan_interval_desc",i,"How often the automation scans when no trigger sensor is set. Shorter = catches events sooner but uses more AI calls."),String(s),[{value:"15",label:`15 ${(0,r.kg)("editor.dog_duty.minutes",i,"min")}`},{value:"30",label:`30 ${(0,r.kg)("editor.dog_duty.minutes",i,"min")}`},{value:"60",label:`1 ${(0,r.kg)("editor.dog_duty.hour",i,"hour")}`},{value:"120",label:`2 ${(0,r.kg)("editor.dog_duty.hours",i,"hours")}`},{value:"240",label:`4 ${(0,r.kg)("editor.dog_duty.hours",i,"hours")}`}],e=>{o({scan_interval_minutes:Number(e)||30})})}
              ${this.renderFieldSection((0,r.kg)("editor.dog_duty.active_hours",i,"Active hours"),(0,r.kg)("editor.dog_duty.active_hours_desc",i,"Scheduled scans only run inside this window, so you are not paying for AI calls while the dog is asleep."),t,{scan_active_start:e.scan_active_start||"07:00",scan_active_end:e.scan_active_end||"21:00"},[{name:"scan_active_start",selector:{time:{}}},{name:"scan_active_end",selector:{time:{}}}],t=>{var n,i,r,a;o({scan_active_start:null!==(i=null===(n=t.detail.value)||void 0===n?void 0:n.scan_active_start)&&void 0!==i?i:e.scan_active_start,scan_active_end:null!==(a=null===(r=t.detail.value)||void 0===r?void 0:r.scan_active_end)&&void 0!==a?a:e.scan_active_end})})}
            `}
        ${e.automation_id?n.qy`<div style="font-size: 12px; color: var(--secondary-text-color); margin-top: 4px;">
              <ha-icon icon="mdi:information-outline" style="--mdc-icon-size: 14px;"></ha-icon>
              ${(0,r.kg)("editor.dog_duty.scan_mode_reapply",i,'Changing the trigger sensor or schedule? Re-run "Create automation" in the wizard to update the existing automation.')}
            </div>`:n.s6}
      </div>
    `}_renderDetectionSection(e,t,o,i,a){const d=(e.example_images||[]).filter(Boolean).slice(0,3),s=this._ensureRoiEdit(e.id),c=s.dragging&&s.current?s.current:e.detect_roi;return n.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.dog_duty.detection_section",i,"Detection")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px;">
          ${(0,r.kg)("editor.dog_duty.detection_section_desc",i,"Tune how Scan Now and the automation look for waste. The AI instructions stay hidden — you only set preferences.")}
        </div>

        ${e.automation_id?n.qy`<div class="dog-duty-warn" style="margin-bottom: 12px;">
              <ha-icon icon="mdi:robot"></ha-icon>
              <span
                >${(0,r.kg)("editor.dog_duty.automation_update_hint",i,"Scan Now uses these settings immediately. Re-create the automation below to apply them to automatic scans.")}</span
              >
              <button
                class="dog-duty-link-btn"
                ?disabled=${a.creating||!e.camera_entity||!e.todo_entity}
                @click=${()=>this._wizardCreateAutomation(e,t,o)}
              >
                ${a.creating?(0,r.kg)("editor.dog_duty.creating",i,"Creating…"):(0,r.kg)("editor.dog_duty.update_automation",i,"Update automation")}
              </button>
            </div>`:n.s6}

        ${this.renderSegmentedField((0,r.kg)("editor.dog_duty.sensitivity",i,"Sensitivity"),(0,r.kg)("editor.dog_duty.sensitivity_desc",i,"Strict = fewer high-confidence marks. Lenient = more willing to mark uncertain spots."),e.detection_sensitivity||"balanced",[{value:"strict",label:(0,r.kg)("editor.dog_duty.sensitivity_strict",i,"Strict")},{value:"balanced",label:(0,r.kg)("editor.dog_duty.sensitivity_balanced",i,"Balanced")},{value:"lenient",label:(0,r.kg)("editor.dog_duty.sensitivity_lenient",i,"Lenient")}],e=>{o({detection_sensitivity:e})})}

        ${this.renderFieldSection((0,r.kg)("editor.dog_duty.detect_squatting",i,"Mark while dog is squatting"),(0,r.kg)("editor.dog_duty.detect_squatting_desc",i,"Also mark when a dog is clearly squatting or defecating, not only piles on the ground."),t,{detect_squatting:!1!==e.detect_squatting},[this.booleanField("detect_squatting")],e=>{var t;o({detect_squatting:!!(null===(t=e.detail.value)||void 0===t?void 0:t.detect_squatting)})})}

        ${this.renderSliderField((0,r.kg)("editor.dog_duty.min_confidence",i,"Minimum confidence"),(0,r.kg)("editor.dog_duty.min_confidence_desc",i,"Ignore AI spots below this confidence (0–100%)."),Math.round(100*("number"==typeof e.min_confidence?e.min_confidence:.45)),45,20,90,5,e=>{o({min_confidence:M(e/100)})},"%")}

        ${this.renderTextArea((0,r.kg)("editor.dog_duty.extra_tips",i,"Extra tips"),e.extra_tips||"",e=>{o({extra_tips:e.slice(0,400)})},(0,r.kg)("editor.dog_duty.extra_tips_placeholder",i,"e.g. Our dog is white; piles are usually dark brown near the fence"),(0,r.kg)("editor.dog_duty.extra_tips_desc",i,"Tell the AI about your yard. Do not paste long instructions — short notes work best."))}

        <div class="dog-duty-examples" style="margin-top: 8px;">
          <div style="font-weight: 600; margin-bottom: 4px;">
            ${(0,r.kg)("editor.dog_duty.example_photos",i,"Example photos")}
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            ${(0,r.kg)("editor.dog_duty.example_photos_desc",i,"Up to 3 photos of what waste looks like in your yard. Sent as references with each scan (uses more tokens).")}
          </div>
          ${[0,1,2].map(e=>{if(e>d.length)return n.s6;const a=d[e]||"";return this.renderFileField((0,r.kg)("editor.dog_duty.example_photo_n",i,"Example {n}").replace("{n}",String(e+1)),"",t,a,t=>{const n=[...d];t?n[e]=t:n.splice(e,1),o({example_images:n.filter(Boolean).slice(0,3)}),this.triggerPreviewUpdate()},"image/*")})}
        </div>

        <div class="dog-duty-roi-editor" style="margin-top: 16px;">
          <div style="font-weight: 600; margin-bottom: 4px;">
            ${(0,r.kg)("editor.dog_duty.detect_zone",i,"Detect zone")}
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
            ${(0,r.kg)("editor.dog_duty.detect_zone_desc",i,"Drag a rectangle on the preview to limit detection to part of the yard (e.g. lawn only).")}
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
            <button
              class="dog-duty-link-btn"
              @click=${()=>{s.editing=!s.editing,s.dragging=!1,s.current=null,this.triggerPreviewUpdate()}}
            >
              ${s.editing?(0,r.kg)("editor.dog_duty.detect_zone_done",i,"Done"):(0,r.kg)("editor.dog_duty.detect_zone_edit",i,"Edit zone")}
            </button>
            <button
              class="dog-duty-link-btn"
              ?disabled=${!e.detect_roi}
              @click=${()=>{o({detect_roi:void 0}),s.current=null,s.editing=!1,this.triggerPreviewUpdate()}}
            >
              ${(0,r.kg)("editor.dog_duty.detect_zone_reset",i,"Reset to full frame")}
            </button>
          </div>
          ${s.editing?n.qy`
                <div
                  class="dog-duty-roi-canvas"
                  @pointerdown=${t=>this._onRoiPointerDown(t,e,o)}
                  @pointermove=${t=>this._onRoiPointerMove(t,e)}
                  @pointerup=${t=>this._onRoiPointerUp(t,e,o)}
                  @pointercancel=${t=>this._onRoiPointerUp(t,e,o)}
                >
                  ${this._renderMapBackground(e,t,i,this._backgroundUrl(e,t))}
                  ${this._renderRoiRect(c,!0)}
                  <div class="dog-duty-roi-hint">
                    ${(0,r.kg)("editor.dog_duty.detect_zone_drag",i,"Drag to draw the detect zone")}
                  </div>
                </div>
              `:e.detect_roi?n.qy`<div class="dog-duty-roi-summary">
                  ${(0,r.kg)("editor.dog_duty.detect_zone_set",i,"Zone set — outside areas are ignored.")}
                </div>`:n.s6}
        </div>
      </div>
    `}_pointerToNorm(e,t){const o=t.getBoundingClientRect(),n=o.width||1,i=o.height||1;return{x:M((e.clientX-o.left)/n),y:M((e.clientY-o.top)/i)}}_onRoiPointerDown(e,t,o){const n=e.currentTarget;n.setPointerCapture(e.pointerId);const i=this._pointerToNorm(e,n),r=this._ensureRoiEdit(t.id);r.dragging=!0,r.startX=i.x,r.startY=i.y,r.current={x:i.x,y:i.y,width:0,height:0},this.triggerPreviewUpdate()}_onRoiPointerMove(e,t){const o=this._ensureRoiEdit(t.id);if(!o.dragging)return;const n=e.currentTarget,i=this._pointerToNorm(e,n),r=Math.min(o.startX,i.x),a=Math.min(o.startY,i.y);o.current={x:r,y:a,width:Math.abs(i.x-o.startX),height:Math.abs(i.y-o.startY)},this.triggerPreviewUpdate()}_onRoiPointerUp(e,t,o){const n=this._ensureRoiEdit(t.id);if(!n.dragging)return;n.dragging=!1;const i=n.current;n.current=null,i&&i.width>=.05&&i.height>=.05&&o({detect_roi:i}),this.triggerPreviewUpdate()}_renderRoiOverlay(e){return this._renderRoiRect(e.detect_roi,!1)}_renderRoiRect(e,t){if(!e||e.width<=0||e.height<=0)return t?n.qy`<div class="dog-duty-roi-mask empty" aria-hidden="true"></div>`:n.s6;const o=100*M(e.x)+"%",i=100*M(e.y)+"%",r=100*M(e.width)+"%",a=100*M(e.height)+"%";return n.qy`
      <div
        class="dog-duty-roi-mask ${t?"editing":""}"
        style="left:${o};top:${i};width:${r};height:${a};"
        aria-hidden="true"
      ></div>
    `}_renderWizard(e,t,o,i,a){var d,s;const c=this._ensurePreview(e);return e.setup_complete&&c.wizardCollapsed?n.qy`
        <div
          class="settings-section dog-duty-wizard dog-duty-wizard-collapsed"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 12px 16px; margin-bottom: 24px; border: 1px solid color-mix(in srgb, var(--success-color, #4caf50) 35%, transparent);"
        >
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <ha-icon icon="mdi:check-circle" style="color: var(--success-color, #4caf50);"></ha-icon>
            <span style="flex:1; font-size: 13px;">
              ${(0,r.kg)("editor.dog_duty.setup_done",i,"Setup complete. Detections will appear on the map.")}
            </span>
            <button
              class="dog-duty-btn"
              @click=${()=>{c.wizardCollapsed=!1,this.triggerPreviewUpdate()}}
            >
              ${(0,r.kg)("editor.dog_duty.reopen_wizard",i,"Reopen wizard")}
            </button>
          </div>
        </div>
      `:n.qy`
      <div
        class="settings-section dog-duty-wizard"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px; border: 1px solid color-mix(in srgb, var(--primary-color) 35%, transparent);"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.dog_duty.wizard_title",i,"Setup wizard")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          ${(0,r.kg)("editor.dog_duty.wizard_desc",i,"One-click setup creates a to-do list + automation so scans only run when the dog is outside — no token burn.")}
        </div>

        <div class="dog-duty-wizard-steps">
          <div class="dog-duty-step ${a.step>=1?"active":""}">1</div>
          <div class="dog-duty-step-line"></div>
          <div class="dog-duty-step ${a.step>=2?"active":""}">2</div>
          <div class="dog-duty-step-line"></div>
          <div class="dog-duty-step ${a.step>=3?"active":""}">3</div>
          <div class="dog-duty-step-line"></div>
          <div class="dog-duty-step ${a.step>=4?"active":""}">4</div>
        </div>

        ${1===a.step?n.qy`
              <div class="dog-duty-wizard-body">
                <div style="font-weight: 600; margin-bottom: 8px;">
                  ${(0,r.kg)("editor.dog_duty.wizard_step1",i,"Check prerequisites")}
                </div>
                <p style="font-size: 13px; color: var(--secondary-text-color); margin: 0 0 12px;">
                  ${(0,r.kg)("editor.dog_duty.wizard_step1_desc",i,"Dog Duty needs the LLM Vision integration (HACS) and at least one AI provider with a vision model.")}
                </p>
                <div class="dog-duty-setup-guide">
                  <div class="dog-duty-setup-guide-title">
                    ${(0,r.kg)("editor.dog_duty.setup_guide_title",i,"How to set up LLM Vision")}
                  </div>
                  <ol>
                    <li>
                      ${(0,r.kg)("editor.dog_duty.setup_guide_1",i,"Install “LLM Vision” from HACS, then restart Home Assistant.")}
                    </li>
                    <li>
                      ${(0,r.kg)("editor.dog_duty.setup_guide_2",i,"Settings → Devices & services → Add Integration → LLM Vision. On the first Settings screen (timeout / prompts), just press Submit — there is no model to pick here.")}
                    </li>
                    <li>
                      ${(0,r.kg)("editor.dog_duty.setup_guide_3",i,"On the LLM Vision card, press Add Entry (or Configure → Add Entry) and choose a Provider (OpenAI, Google, OpenRouter, or Ollama).")}
                    </li>
                    <li>
                      ${(0,r.kg)("editor.dog_duty.setup_guide_4",i,"Use a vision model. Easy picks: gpt-4o-mini (OpenAI), gemini-2.0-flash (Google), claude-haiku-4-5 (Anthropic), or gemma3:12b (Ollama).")}
                    </li>
                    <li>
                      ${(0,r.kg)("editor.dog_duty.setup_guide_5",i,"Come back here and press Check prerequisites.")}
                    </li>
                  </ol>
                  <div class="dog-duty-setup-guide-note">
                    ${(0,r.kg)("editor.dog_duty.setup_guide_invalid_model",i,"Seeing “Validation error: invalid_model” or “Couldn’t generate content”? (1) Pick “Anthropic Claude”, never “LLM Vision Settings”. (2) For Anthropic: ⋮ → Reconfigure → set Thinking / reasoning budget to 0, then Submit. LLM Vision 1.7.0 has a known thinking-budget float bug.")}
                  </div>
                </div>
                <button
                  class="dog-duty-btn"
                  ?disabled=${a.checking}
                  @click=${()=>this._wizardCheckPrereqs(e,t,o)}
                >
                  ${a.checking?(0,r.kg)("editor.dog_duty.checking",i,"Checking…"):(0,r.kg)("editor.dog_duty.check_prereqs",i,"Check prerequisites")}
                </button>
                ${a.llmInstalled&&a.providers.length?n.qy`<div class="dog-duty-ok">
                      <ha-icon icon="mdi:check-circle"></ha-icon>
                      ${(0,r.kg)("editor.dog_duty.llm_found",i,"LLM Vision found")} —
                      ${a.providers.length}
                      ${(0,r.kg)("editor.dog_duty.providers_count",i,"provider(s)")}
                    </div>`:n.s6}
                ${a.llmInstalled&&!a.providers.length?n.qy`<div class="dog-duty-warn">
                      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                      ${(0,r.kg)("editor.dog_duty.provider_missing",i,"LLM Vision is installed, but no Provider is set up yet. Add Entry → Provider, pick a vision model (e.g. gpt-4o-mini), then check again.")}
                    </div>`:n.s6}
                ${!a.llmInstalled&&a.message?n.qy`<div class="dog-duty-warn">
                      <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                      ${a.message}
                      <a
                        href="https://llmvision.gitbook.io/getting-started/setup/providers"
                        target="_blank"
                        rel="noopener"
                        >${(0,r.kg)("editor.dog_duty.setup_docs",i,"Setup docs")}</a
                      >
                    </div>`:n.s6}
                ${a.error?n.qy`<div class="dog-duty-err">${a.error}</div>`:n.s6}
                ${a.llmInstalled?n.qy`<button
                      class="dog-duty-btn primary"
                      style="margin-top: 12px;"
                      @click=${()=>{a.step=2,this.triggerPreviewUpdate()}}
                    >
                      ${(0,r.kg)("editor.dog_duty.continue",i,"Continue")}
                    </button>`:n.s6}
              </div>
            `:n.s6}

        ${2===a.step?n.qy`
              <div class="dog-duty-wizard-body">
                <div style="font-weight: 600; margin-bottom: 8px;">
                  ${(0,r.kg)("editor.dog_duty.wizard_step2",i,"Pick camera & list")}
                </div>
                <p style="font-size: 13px; color: var(--secondary-text-color); margin: 0 0 12px;">
                  ${(0,r.kg)("editor.dog_duty.wizard_step2_desc",i,'Choose your yard camera and Dog Duty to-do list below (Entities section), then continue. Create a Local To-do list named "Dog Duty" in Settings → Devices & services → Helpers if needed.')}
                </p>
                <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
                  ${(0,r.kg)("editor.dog_duty.camera",i,"Yard camera")}:
                  <strong>${e.camera_entity||"—"}</strong><br />
                  ${(0,r.kg)("editor.dog_duty.todo",i,"To-do list")}:
                  <strong>${e.todo_entity||"—"}</strong><br />
                  ${(0,r.kg)("editor.dog_duty.provider",i,"Provider")}:
                  <strong>${e.provider_id||(null===(d=a.providers[0])||void 0===d?void 0:d.id)||"—"}</strong>
                </div>
                ${e.todo_entity?n.s6:n.qy`<div class="dog-duty-warn" style="margin-bottom: 12px;">
                      ${(0,r.kg)("editor.dog_duty.todo_manual_hint",i,'Tip: Settings → Devices & services → Helpers → Create Helper → Local To-do → name it "Dog Duty", then pick it in Entities above.')}
                    </div>`}
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button
                    class="dog-duty-btn"
                    @click=${()=>{a.step=1,this.triggerPreviewUpdate()}}
                  >
                    ${(0,r.kg)("editor.dog_duty.back",i,"Back")}
                  </button>
                  <button
                    class="dog-duty-btn primary"
                    ?disabled=${!e.camera_entity||!e.todo_entity}
                    @click=${()=>{!e.provider_id&&a.providers[0]&&o({provider_id:a.providers[0].id}),a.step=3,this.triggerPreviewUpdate()}}
                  >
                    ${(0,r.kg)("editor.dog_duty.continue",i,"Continue")}
                  </button>
                </div>
              </div>
            `:n.s6}

        ${3===a.step?n.qy`
              <div class="dog-duty-wizard-body">
                <div style="font-weight: 600; margin-bottom: 8px;">
                  ${(0,r.kg)("editor.dog_duty.wizard_step3",i,"Create automation")}
                </div>
                <p style="font-size: 13px; color: var(--secondary-text-color); margin: 0 0 12px;">
                  ${(0,r.kg)("editor.dog_duty.wizard_step3_desc",i,"Creates an automation that snapshots the camera, runs one LLM Vision compare, and writes findings to your to-do list.")}
                </p>
                <div class="dog-duty-warn" style="margin-bottom: 12px;">
                  <ha-icon
                    icon="${e.trigger_entity?"mdi:motion-sensor":"mdi:clock-outline"}"
                    style="--mdc-icon-size: 16px;"
                  ></ha-icon>
                  ${e.trigger_entity?(0,r.kg)("editor.dog_duty.wizard_mode_sensor",i,"Sensor mode: {sensor} will trigger a scan right after activity ends — the cheapest way to run this.").replace("{sensor}",e.trigger_entity):(0,r.kg)("editor.dog_duty.wizard_mode_scheduled",i,"No trigger sensor selected, so the automation will scan every {interval} between {start} and {end}. That works fine but uses more AI calls — pick a dog/motion sensor in Entities above if you have one.").replace("{interval}",this._formatInterval(null!==(s=e.scan_interval_minutes)&&void 0!==s?s:30,i)).replace("{start}",e.scan_active_start||"07:00").replace("{end}",e.scan_active_end||"21:00")}
                </div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button
                    class="dog-duty-btn"
                    @click=${()=>{a.step=2,this.triggerPreviewUpdate()}}
                  >
                    ${(0,r.kg)("editor.dog_duty.back",i,"Back")}
                  </button>
                  <button
                    class="dog-duty-btn primary"
                    ?disabled=${a.creating||!e.camera_entity||!e.todo_entity}
                    @click=${()=>this._wizardCreateAutomation(e,t,o)}
                  >
                    ${a.creating?(0,r.kg)("editor.dog_duty.creating",i,"Creating…"):(0,r.kg)("editor.dog_duty.create_automation",i,"Create automation")}
                  </button>
                </div>
                ${a.message?n.qy`<div class="dog-duty-ok" style="margin-top:12px;">${a.message}</div>`:n.s6}
                ${a.error?n.qy`<div class="dog-duty-err" style="margin-top:12px;">${a.error}</div>`:n.s6}
                ${e.automation_id?n.qy`<button
                      class="dog-duty-btn primary"
                      style="margin-top: 12px;"
                      @click=${()=>{a.step=4,o({setup_complete:!0}),this.triggerPreviewUpdate()}}
                    >
                      ${(0,r.kg)("editor.dog_duty.continue",i,"Continue")}
                    </button>`:n.s6}
              </div>
            `:n.s6}

        ${4===a.step?n.qy`
              <div class="dog-duty-wizard-body">
                <div style="font-weight: 600; margin-bottom: 8px;">
                  ${(0,r.kg)("editor.dog_duty.wizard_step4",i,"Test scan")}
                </div>
                <p style="font-size: 13px; color: var(--secondary-text-color); margin: 0 0 12px;">
                  ${(0,r.kg)("editor.dog_duty.wizard_step4_desc",i,"Run an on-demand scan against the current camera frame. Coordinate accuracy is approximate — keep a fixed camera angle.")}
                </p>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <button
                    class="dog-duty-btn"
                    @click=${()=>{a.step=3,this.triggerPreviewUpdate()}}
                  >
                    ${(0,r.kg)("editor.dog_duty.back",i,"Back")}
                  </button>
                  <button
                    class="dog-duty-btn primary"
                    ?disabled=${a.testing||!e.camera_entity||!e.provider_id}
                    @click=${()=>this._wizardTestScan(e,t)}
                  >
                    ${a.testing?(0,r.kg)("editor.dog_duty.scanning",i,"Scanning…"):(0,r.kg)("editor.dog_duty.run_test",i,"Run test scan")}
                  </button>
                </div>
                ${a.testResult?n.qy`<div class="dog-duty-ok" style="margin-top:12px; white-space: pre-wrap;">${a.testResult}</div>`:n.s6}
                ${a.error?n.qy`<div class="dog-duty-err" style="margin-top:12px;">${a.error}</div>`:n.s6}
                <button
                  class="dog-duty-btn primary"
                  style="margin-top: 12px;"
                  @click=${()=>{o({setup_complete:!0}),c.wizardCollapsed=!0,a.message=(0,r.kg)("editor.dog_duty.setup_done",i,"Setup complete. Detections will appear on the map."),this.triggerPreviewUpdate()}}
                >
                  ${(0,r.kg)("editor.dog_duty.finish",i,"Finish")}
                </button>
              </div>
            `:n.s6}
      </div>
    `}async _wizardCheckPrereqs(e,t,o){var n;const i=this._ensureWizard(e.id),a=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";i.checking=!0,i.error="",i.message="",this.triggerPreviewUpdate();try{const n=await f.detectLlmVision(t);if(i.llmInstalled=n.installed,i.providers=n.providers,n.installed)if(n.providers.length){if(!n.providers.some(t=>t.id===e.provider_id)&&o){const e=n.providers.find(e=>/anthropic|claude|openai|google|gemini|ollama/i.test(e.title))||n.providers[0];e&&(o({provider_id:e.id}),i.message=(0,r.kg)("editor.dog_duty.provider_auto_selected",a,"Selected provider: {name}").replace("{name}",e.title))}}else i.message=(0,r.kg)("editor.dog_duty.provider_missing",a,"LLM Vision is installed, but no Provider is set up yet. Add Entry → Provider (e.g. Anthropic Claude), then check again. Do not use “LLM Vision Settings” as the provider."),i.llmInstalled=!0;else i.message=(0,r.kg)("editor.dog_duty.llm_missing",a,"LLM Vision is not installed. Install it via HACS, add the integration, then add a Provider with a vision model.")}catch(e){i.error=(null==e?void 0:e.message)||String(e)}finally{i.checking=!1,this.triggerPreviewUpdate()}}async _wizardCreateAutomation(e,t,o){var n,i,a,d;const s=this._ensureWizard(e.id),c=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";s.creating=!0,s.error="",s.message="",this.triggerPreviewUpdate();const l=e.provider_id||(null===(i=s.providers[0])||void 0===i?void 0:i.id)||"";if(!l)return s.creating=!1,s.error=(0,r.kg)("editor.dog_duty.need_provider",c,"Select or paste an LLM Vision provider ID first."),void this.triggerPreviewUpdate();const u=await f.createOrUpdateAutomation(t,Object.assign({cameraEntity:e.camera_entity,todoEntity:e.todo_entity,providerId:l,triggerEntity:e.trigger_entity||void 0,cooldownMinutes:null!==(a=e.scan_cooldown_minutes)&&void 0!==a?a:10,intervalMinutes:null!==(d=e.scan_interval_minutes)&&void 0!==d?d:30,activeStart:e.scan_active_start||"07:00",activeEnd:e.scan_active_end||"21:00",automationId:e.automation_id||void 0},this._detectionOpts(e)));s.creating=!1,u.ok?(o({automation_id:u.automationId,provider_id:l,setup_complete:!0}),s.message=(0,r.kg)("editor.dog_duty.automation_created",c,"Automation created: {id}. Reload automations if it does not appear immediately.").replace("{id}",u.automationId)):s.error=u.error||(0,r.kg)("editor.dog_duty.automation_failed",c,"Could not create the automation automatically. You may need admin permissions, or create it manually from the generated template."),this.triggerPreviewUpdate()}async _wizardTestScan(e,t){var o,n;const i=this._ensureWizard(e.id),a=(null===(o=null==t?void 0:t.locale)||void 0===o?void 0:o.language)||"en";i.testing=!0,i.error="",i.testResult="",this.triggerPreviewUpdate();const d=await f.scanNow(t,Object.assign({cameraEntity:e.camera_entity,todoEntity:e.todo_entity,providerId:e.provider_id||(null===(n=i.providers[0])||void 0===n?void 0:n.id)||"",writeEvents:!!e.todo_entity},this._detectionOpts(e)));i.testing=!1,d.error?i.error=d.error:d.found?(i.testResult=(0,r.kg)("editor.dog_duty.test_found",a,"Found {count} spot(s). Markers were added to the to-do list.").replace("{count}",String(d.spots.length)),this._ensurePreview(e).lastFetchedAt=0):i.testResult=(0,r.kg)("editor.dog_duty.test_none",a,"No droppings detected in the current frame."),this.triggerPreviewUpdate()}renderPreview(e,t,o,i){var a,d;const s=e,c=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",l=this._ensurePreview(s);this._ensureEventsLoaded(s,t);const u=3600*(s.lookback_hours||48)*1e3,g=Date.now(),p=g-u,y=p+l.scrubRatio*u,m=C(s),h=m[0]||s.camera_entity||"",v=m.length>1,_="grid"===s.cameras_layout&&v?"grid":"stack",f=l.events.filter(e=>e.detectedAt>=p&&e.detectedAt<=y).filter(e=>s.show_cleaned||!e.cleaned),b=l.events.filter(e=>!e.cleaned&&e.detectedAt>=p&&e.detectedAt<=g),x=g-6048e5,w=l.events.filter(e=>e.detectedAt>=x),k=w.length,$=(null===(d=s.title)||void 0===d?void 0:d.trim())||(0,r.kg)("editor.dog_duty.default_title",c,"Dog Duty"),S=f.find(e=>e.uid===l.selectedUid)||l.events.find(e=>e.uid===l.selectedUid)||null;return n.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div class="dog-duty-card" data-context=${i||"dashboard"}>
        ${!1!==s.show_title?n.qy`<div class="dog-duty-header">
              <ha-icon icon="mdi:dog"></ha-icon>
              <span>${$}</span>
            </div>`:n.s6}

        ${!1!==s.show_status_bar?n.qy`
              <div class="dog-duty-status">
                <button
                  class="dog-duty-chip toggle ${"active"===l.listPanel?"on":""}"
                  @click=${e=>{e.stopPropagation(),l.listPanel="active"===l.listPanel?null:"active",this.triggerPreviewUpdate(!0)}}
                  title=${(0,r.kg)("editor.dog_duty.chip_active_title",c,"View active detections")}
                >
                  ${b.length}
                  ${(0,r.kg)("editor.dog_duty.chip_active",c,"active")}
                </button>
                <button
                  class="dog-duty-chip toggle ${"week"===l.listPanel?"on":""}"
                  @click=${e=>{e.stopPropagation(),l.listPanel="week"===l.listPanel?null:"week",this.triggerPreviewUpdate(!0)}}
                  title=${(0,r.kg)("editor.dog_duty.chip_week_title",c,"View this week’s detections")}
                >
                  ${k}
                  ${(0,r.kg)("editor.dog_duty.chip_week",c,"this week")}
                </button>
                <button
                  class="dog-duty-chip toggle ${l.showHeatmap?"on":""}"
                  @click=${e=>{e.stopPropagation(),l.showHeatmap=!l.showHeatmap,this.triggerPreviewUpdate(!0)}}
                  title=${(0,r.kg)("editor.dog_duty.heatmap_toggle",c,"Toggle heatmap")}
                >
                  <ha-icon icon="mdi:fire"></ha-icon>
                  ${(0,r.kg)("editor.dog_duty.heatmap",c,"Heatmap")}
                </button>
                ${!1!==s.show_scan_now?n.qy`<button
                      class="dog-duty-chip action"
                      ?disabled=${l.scanning||0===m.length||!s.provider_id}
                      @click=${e=>{e.stopPropagation(),this._scanNow(s,t,l)}}
                    >
                      <ha-icon icon=${l.scanning?"mdi:loading":"mdi:magnify-scan"}></ha-icon>
                      ${l.scanning?(0,r.kg)("editor.dog_duty.scanning",c,"Scanning…"):(0,r.kg)("editor.dog_duty.scan_now",c,"Scan Now")}
                    </button>`:n.s6}
              </div>
            `:n.s6}

        ${l.scanMessage?n.qy`<div class="dog-duty-scan-msg">${l.scanMessage}</div>`:n.s6}

        ${l.listPanel?this._renderEventList(s,t,l,"active"===l.listPanel?b:w,m,c):n.s6}

        <div class="dog-duty-maps ${_}">
          ${(m.length?m:[""]).map(e=>{const o=f.filter(t=>D(t,e,h)),i=S&&D(S,e,h)?S:null,a=U(t,e);return n.qy`
              <div class="dog-duty-map-wrap">
                ${v&&e?n.qy`<div class="dog-duty-cam-label">
                      <ha-icon icon="mdi:cctv"></ha-icon>
                      <span>${a}</span>
                    </div>`:n.s6}
                <div
                  class="dog-duty-map"
                  @click=${()=>{l.selectedUid&&(l.selectedUid=null,this.triggerPreviewUpdate(!0))}}
                >
                  ${this._renderMapBackgroundForCamera(s,t,c,e)}
                  ${this._renderRoiOverlay(s)}
                  ${l.showHeatmap?this._renderHeatmap(o):n.s6}
                  ${o.map(e=>this._renderMarker(s,e,l,c))}
                  ${!l.loading&&0===o.length&&s.todo_entity?n.qy`<div class="dog-duty-empty">
                        ${v?(0,r.kg)("editor.dog_duty.no_events_short",c,"No detections"):(0,r.kg)("editor.dog_duty.no_events",c,"No detections in this time window")}
                      </div>`:n.s6}
                  ${i?this._renderDetailPopup(s,i,t,l,c):n.s6}
                </div>
              </div>
            `})}
        </div>

        ${!1!==s.show_scrubber?this._renderScrubber(s,t,l,s.show_cleaned?l.events:l.events.filter(e=>!e.cleaned),p,g,c):n.s6}

        ${s.todo_entity&&0!==m.length?n.s6:n.qy`<div class="dog-duty-setup-hint">
              ${(0,r.kg)("editor.dog_duty.setup_hint",c,"Open the General tab and run the setup wizard to connect a camera, to-do list, and LLM Vision.")}
            </div>`}
      </div>
    `}_renderEventList(e,t,o,i,a,d){const s=a.length>1,c=[...i].sort((e,t)=>{var n,i;switch(o.listSort){case"camera":{const o=e.payload.camera||"",n=t.payload.camera||"";return o.localeCompare(n)||t.detectedAt-e.detectedAt}case"confidence":{const o=null!==(n=e.payload.confidence)&&void 0!==n?n:-1;return(null!==(i=t.payload.confidence)&&void 0!==i?i:-1)-o||t.detectedAt-e.detectedAt}case"status":return(e.cleaned?1:0)-(t.cleaned?1:0)||t.detectedAt-e.detectedAt;default:return t.detectedAt-e.detectedAt}}),l="active"===o.listPanel?(0,r.kg)("editor.dog_duty.list_active_title",d,"Active detections"):(0,r.kg)("editor.dog_duty.list_week_title",d,"This week");return n.qy`
      <div class="dog-duty-list-panel" data-uc-role="pane" @click=${e=>e.stopPropagation()}>
        <div class="dog-duty-list-header">
          <strong>${l}</strong>
          <button
            class="dog-duty-icon-btn"
            @click=${()=>{o.listPanel=null,this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="dog-duty-list-sorts">
          ${[["time",(0,r.kg)("editor.dog_duty.sort_time",d,"Time")],...s?[["camera",(0,r.kg)("editor.dog_duty.sort_camera",d,"Camera")]]:[],["confidence",(0,r.kg)("editor.dog_duty.sort_confidence",d,"Confidence")],["status",(0,r.kg)("editor.dog_duty.sort_status",d,"Status")]].map(([e,t])=>n.qy`
              <button
                class="dog-duty-sort-btn ${o.listSort===e?"on":""}"
                @click=${()=>{o.listSort=e,this.triggerPreviewUpdate(!0)}}
              >
                ${t}
              </button>
            `)}
        </div>
        <div class="dog-duty-list-scroll">
          ${0===c.length?n.qy`<div class="dog-duty-list-empty">
                ${(0,r.kg)("editor.dog_duty.list_empty",d,"No detections in this list.")}
              </div>`:c.map(e=>{const i="number"==typeof e.payload.confidence?`${Math.round(100*e.payload.confidence)}%`:"—",c=`${Math.round(100*M(e.payload.x))}%, ${Math.round(100*M(e.payload.y))}%`,l=e.payload.camera?U(t,e.payload.camera):a[0]?U(t,a[0]):"—";return n.qy`
                  <button
                    class="dog-duty-list-row ${e.cleaned?"cleaned":""} ${o.selectedUid===e.uid?"selected":""}"
                    data-uc-role="pane"
                    @click=${()=>{o.selectedUid=e.uid,o.listPanel=null,this.triggerPreviewUpdate(!0)}}
                  >
                    <div class="dog-duty-list-row-main">
                      <span class="dog-duty-list-summary">${e.summary}</span>
                      <span class="dog-duty-list-status ${e.cleaned?"ok":"active"}">
                        ${e.cleaned?(0,r.kg)("editor.dog_duty.cleaned",d,"Cleaned"):(0,r.kg)("editor.dog_duty.status_active",d,"Still there")}
                      </span>
                    </div>
                    <div class="dog-duty-list-row-meta">
                      <span>${q(e.detectedAt)}</span>
                      <span
                        >${(0,r.kg)("editor.dog_duty.placement",d,"Placement")}:
                        ${c}</span
                      >
                      <span
                        >${(0,r.kg)("editor.dog_duty.confidence",d,"Confidence")}:
                        ${i}</span
                      >
                      ${s?n.qy`<span>${l}</span>`:n.s6}
                    </div>
                  </button>
                `})}
        </div>
      </div>
    `}_renderMarker(e,t,o,i){const a=100*M(t.payload.x)+"%",d=100*M(t.payload.y)+"%",s=o.selectedUid===t.uid,c=e.marker_style||"x";let l;return l=t.cleaned?n.qy`<ha-icon icon="mdi:check-circle"></ha-icon>`:"emoji"===c?n.qy`<span class="dog-duty-emoji">💩</span>`:"pin"===c?n.qy`<ha-icon icon="mdi:map-marker"></ha-icon>`:n.qy`<span class="dog-duty-x">✕</span>`,n.qy`
      <button
        class="dog-duty-marker ${t.cleaned?"cleaned":""} ${s?"selected":""}"
        style="left:${a};top:${d};"
        title=${t.summary}
        @click=${e=>{e.stopPropagation(),o.selectedUid=s?null:t.uid,this.triggerPreviewUpdate(!0)}}
      >
        <span class="dog-duty-glyph" aria-label=${(0,r.kg)("editor.dog_duty.marker",i,"Marker")}
          >${l}</span
        >
      </button>
    `}_renderHeatmap(e){return n.qy`
      <div class="dog-duty-heatmap" aria-hidden="true">
        ${e.map(e=>{const t=100*M(e.payload.x)+"%",o=100*M(e.payload.y)+"%";return n.qy`<span class="dog-duty-heat" style="left:${t};top:${o};"></span>`})}
      </div>
    `}_renderDetailPopup(e,t,o,i,a){const d=q(t.detectedAt),s="number"==typeof t.payload.confidence?`${Math.round(100*t.payload.confidence)}%`:null,c=t.payload.snapshot?E(t.payload.snapshot):null;return n.qy`
      <div
        class="dog-duty-popup"
        @click=${e=>e.stopPropagation()}
      >
        <div class="dog-duty-popup-header">
          <strong>${t.summary}</strong>
          <button
            class="dog-duty-icon-btn"
            @click=${()=>{i.selectedUid=null,this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        ${c?n.qy`<img class="dog-duty-popup-snap" src=${c} alt="" />`:n.s6}
        <div class="dog-duty-popup-meta">
          <span>${d}</span>
          ${s?n.qy`<span
                >${(0,r.kg)("editor.dog_duty.confidence",a,"Confidence")}:
                ${s}</span
              >`:n.s6}
          ${t.cleaned?n.qy`<span class="cleaned-tag"
                >${(0,r.kg)("editor.dog_duty.cleaned",a,"Cleaned")}</span
              >`:n.s6}
        </div>
        ${t.payload.description?n.qy`<div class="dog-duty-popup-desc">${t.payload.description}</div>`:n.s6}
        <div class="dog-duty-popup-actions">
          ${t.cleaned?n.qy`<button
                class="dog-duty-btn"
                @click=${async()=>{try{await f.markNeedsAction(o,e.todo_entity,t.uid)}catch(e){console.warn("[UltraCard] Dog Duty mark active failed",e)}const n=i.events.find(e=>e.uid===t.uid);n&&(n.cleaned=!1,n.status="needs_action"),t.cleaned=!1,t.status="needs_action",i.lastFetchedAt=0,this.triggerPreviewUpdate(!0),this._ensureEventsLoaded(e,o)}}
              >
                ${(0,r.kg)("editor.dog_duty.mark_active",a,"Mark active")}
              </button>`:n.qy`<button
                class="dog-duty-btn primary"
                @click=${async()=>{try{await f.markCleaned(o,e.todo_entity,t.uid)}catch(e){console.warn("[UltraCard] Dog Duty mark cleaned failed",e)}const n=i.events.find(e=>e.uid===t.uid);n&&(n.cleaned=!0,n.status="completed"),t.cleaned=!0,t.status="completed",i.selectedUid=null,i.lastFetchedAt=0,this.triggerPreviewUpdate(!0),this._ensureEventsLoaded(e,o)}}
              >
                ${(0,r.kg)("editor.dog_duty.mark_cleaned",a,"Mark as cleaned")}
              </button>`}
          <button
            class="dog-duty-btn danger"
            @click=${async()=>{try{await f.removeEvent(o,e.todo_entity,t.uid)}catch(e){console.warn("[UltraCard] Dog Duty remove failed",e)}i.events=i.events.filter(e=>e.uid!==t.uid),i.selectedUid=null,i.lastFetchedAt=0,this.triggerPreviewUpdate(!0),this._ensureEventsLoaded(e,o)}}
          >
            ${(0,r.kg)("editor.dog_duty.false_alarm",a,"False alarm")}
          </button>
        </div>
      </div>
    `}_renderScrubber(e,t,o,i,a,d,s){const c=Math.max(1,d-a),l=e.lookback_hours||48,u=a+o.scrubRatio*c,g=o.scrubRatio<.995,p=g?100*o.scrubRatio:100,y=i.filter(e=>e.detectedAt>=a&&e.detectedAt<=d).map(e=>({pct:(e.detectedAt-a)/c*100,cleaned:e.cleaned,title:`${e.summary} · ${L(e.detectedAt,t)}`})),m=l<=6?6:l<=24||l<=48?8:7;return n.qy`
      <div class="dog-duty-scrubber ${g?"scrubbing":""}">
        <div class="dog-duty-scrub-header">
          <div class="dog-duty-scrub-status">
            <span class="dog-duty-scrub-dot ${g?"past":"live"}"></span>
            <div class="dog-duty-scrub-time">
              <span class="dog-duty-scrub-clock">
                ${g?n.qy`<span class="dog-duty-scrub-day">${function(e,t){const o=new Date(e),n=new Date,i=new Date(n);return i.setDate(n.getDate()-1),o.toDateString()===n.toDateString()?t.startsWith("en")?"Today":o.toLocaleDateString(t,{weekday:"short"}):o.toDateString()===i.toDateString()?t.startsWith("en")?"Yesterday":o.toLocaleDateString(t,{weekday:"short"}):o.toLocaleDateString(t,{weekday:"short",month:"short",day:"numeric"})}(u,s)}</span>
                      ${L(u,t)}`:(0,r.kg)("editor.dog_duty.live",s,"Live")}
              </span>
              <span class="dog-duty-scrub-delta">
                ${g?function(e){if(!Number.isFinite(e)||e<6e4)return"Just now";const t=Math.floor(e/6e4);if(t<60)return`${t}m ago`;const o=Math.floor(t/60),n=t%60;return o<48?n?`${o}h ${n}m ago`:`${o}h ago`:`${Math.floor(o/24)}d ago`}(d-u):y.length>0?(0,r.kg)("editor.dog_duty.scrub_events",s,"{count} detection(s) in window").replace("{count}",String(y.length)):(0,r.kg)("editor.dog_duty.scrub_live_desc",s,"Showing current yard view")}
              </span>
            </div>
          </div>
          ${g?n.qy`
                <button
                  class="dog-duty-scrub-live-btn"
                  @click=${e=>{e.stopPropagation(),o.scrubRatio=1,this.triggerPreviewUpdate(!0)}}
                >
                  <ha-icon icon="mdi:fast-forward"></ha-icon>
                  ${(0,r.kg)("editor.dog_duty.return_to_live",s,"Return to live")}
                </button>
              `:n.s6}
        </div>

        <div
          class="dog-duty-scrub-track"
          role="slider"
          tabindex="0"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow=${Math.round(p)}
          aria-label=${(0,r.kg)("editor.dog_duty.scrubber",s,"Time scrubber")}
          @pointerdown=${t=>this._onScrubPointerDown(t,e,o)}
          @pointermove=${t=>this._onScrubPointerMove(t,e,o)}
          @pointerup=${e=>this._onScrubPointerUp(e)}
          @pointercancel=${e=>this._onScrubPointerUp(e)}
          @keydown=${e=>this._onScrubKeydown(e,o)}
        >
          ${Array.from({length:m-1},(e,t)=>{const o=(t+1)/m*100;return n.qy`<span class="dog-duty-scrub-tick" style="left:${o}%"></span>`})}
          ${y.map(e=>n.qy`<span
              class="dog-duty-scrub-marker ${e.cleaned?"cleaned":""}"
              style="left:${e.pct}%"
              title=${e.title}
            ></span>`)}
          ${g?n.qy`<span class="dog-duty-scrub-shade" style="width:${100-p}%"></span>`:n.s6}
          <span class="dog-duty-scrub-playhead" style="left:${p}%"></span>
          <span class="dog-duty-scrub-handle" style="left:${p}%"></span>
        </div>

        <div class="dog-duty-scrub-axis">
          <span>−${l}h</span>
          <span>${(0,r.kg)("editor.dog_duty.now",s,"Now")}</span>
        </div>
      </div>
    `}_scrubFromPointer(e,t){const o=e.currentTarget.getBoundingClientRect();if(o.width<=0)return;const n=Math.min(1,Math.max(0,(e.clientX-o.left)/o.width));t.scrubRatio=n>=.995?1:n,this.triggerPreviewUpdate(!0)}_onScrubPointerDown(e,t,o){e.currentTarget.setPointerCapture(e.pointerId),e.preventDefault(),e.stopPropagation(),this._scrubFromPointer(e,o)}_onScrubPointerMove(e,t,o){e.currentTarget.hasPointerCapture(e.pointerId)&&this._scrubFromPointer(e,o)}_onScrubPointerUp(e){const t=e.currentTarget;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId)}_onScrubKeydown(e,t){const o=e.shiftKey?.05:.02;"ArrowLeft"===e.key||"ArrowDown"===e.key?(e.preventDefault(),t.scrubRatio=Math.max(0,t.scrubRatio-o),this.triggerPreviewUpdate(!0)):"ArrowRight"===e.key||"ArrowUp"===e.key?(e.preventDefault(),t.scrubRatio=Math.min(1,t.scrubRatio+o),this.triggerPreviewUpdate(!0)):"Home"===e.key?(e.preventDefault(),t.scrubRatio=0,this.triggerPreviewUpdate(!0)):"End"===e.key&&(e.preventDefault(),t.scrubRatio=1,this.triggerPreviewUpdate(!0))}_ensurePreview(e){let t=this._preview.get(e.id);return t||(t={events:[],loading:!1,scrubRatio:1,selectedUid:null,scanning:!1,scanMessage:"",lastFetchedAt:0,showHeatmap:!!e.show_heatmap,listPanel:null,listSort:"time",wizardCollapsed:!!e.setup_complete},this._preview.set(e.id,t)),t}_ensureWizard(e){let t=this._wizard.get(e);return t||(t={step:1,checking:!1,llmInstalled:!1,providers:[],creating:!1,message:"",error:"",testing:!1,testResult:""},this._wizard.set(e,t)),t}_ensureEventsLoaded(e,t){if(!e.todo_entity||!t)return;const o=this._ensurePreview(e),n=Date.now();o.loading||o.lastFetchedAt>0&&n-o.lastFetchedAt<2e3||(o.loading=!0,f.getEvents(t,e.todo_entity,()=>{const o=this._preview.get(e.id);o&&(o.lastFetchedAt=0),this._ensureEventsLoaded(e,t)}).then(t=>{const o=this._ensurePreview(e);o.events=t,o.loading=!1,o.lastFetchedAt=Date.now(),this.triggerPreviewUpdate(!0)}).catch(()=>{const t=this._ensurePreview(e);t.loading=!1,t.lastFetchedAt=Date.now()}))}async _scanNow(e,t,o){var n;const i=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";if(o.scanning)return;const a=C(e);if(!a.length||!e.provider_id)return;o.scanning=!0,o.scanMessage="",this.triggerPreviewUpdate(!0);let d=0,s="";for(const o of a){const n=await f.scanNow(t,Object.assign({cameraEntity:o,todoEntity:e.todo_entity,providerId:e.provider_id||"",writeEvents:!0},this._detectionOpts(e)));n.error&&(s=n.error),n.found&&(d+=n.spots.length)}o.scanning=!1,d>0?(o.scanMessage=(0,r.kg)("editor.dog_duty.scan_found",i,"Found {count} spot(s)").replace("{count}",String(d)),o.lastFetchedAt=0,this._ensureEventsLoaded(e,t)):o.scanMessage=s||(0,r.kg)("editor.dog_duty.scan_none",i,"No droppings detected"),this.triggerPreviewUpdate(!0)}_renderMapBackgroundForCamera(e,t,o,i){if("reference"!==(e.background_mode||"live_snapshot")&&i&&t)return n.qy`
        <hui-image
          class="dog-duty-bg dog-duty-bg-camera"
          .hass=${t}
          .cameraImage=${i}
          .cameraView=${"auto"}
        ></hui-image>
      `;const a=this._backgroundUrl(e,t);return a?n.qy`<img class="dog-duty-bg" src=${a} alt="" draggable="false" />`:n.qy`<div class="dog-duty-bg-placeholder">
      <ha-icon icon="mdi:cctv-off"></ha-icon>
      <span
        >${(0,r.kg)("editor.dog_duty.no_camera",o,"Select a yard camera to show the map")}</span
      >
    </div>`}_renderMapBackground(e,t,o,n){return this._renderMapBackgroundForCamera(e,t,o,e.camera_entity)}_backgroundUrl(e,t){var o,n;if("reference"===e.background_mode&&e.reference_image)return E(e.reference_image);if(e.camera_entity&&t){const i=null===(o=t.states)||void 0===o?void 0:o[e.camera_entity],r=null===(n=null==i?void 0:i.attributes)||void 0===n?void 0:n.access_token,a=Math.floor(Date.now()/3e4);let d=`/api/camera_proxy/${e.camera_entity}?t=${a}`;r&&(d+=`&token=${encodeURIComponent(String(r))}`);const s=t.hassUrl;if("function"==typeof s)try{return s(d)}catch(e){}return d}return""}renderProLockUI(e){return n.qy`
      <div
        class="pro-lock-container"
        data-uc-role="pane"
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px;
          text-align: center;
          background: var(--uc-pane-bg, var(--secondary-background-color));
          border-radius: var(--uc-r-12, 12px);
          margin: 16px;
        "
      >
        <ha-icon
          icon="mdi:lock"
          style="color: var(--primary-color); --mdi-icon-size: 48px; margin-bottom: 16px;"
        ></ha-icon>
        <div style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">
          ${(0,r.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
        <div
          style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 320px;"
        >
          ${(0,r.kg)("editor.dog_duty.pro_description",e,"Dog Duty is a Pro feature that uses your yard camera and LLM Vision to mark where the dog went, with a scrubber and cleanup tracking.")}
        </div>
        <a
          href="https://ultracard.io/pro"
          target="_blank"
          style="
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: var(--primary-color);
            color: var(--text-primary-color, white);
            border-radius: var(--uc-r-8, 8px);
            text-decoration: none;
            font-weight: 600;
          "
        >
          <ha-icon icon="mdi:crown" style="--mdi-icon-size: 20px;"></ha-icon>
          ${(0,r.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
        </a>
      </div>
    `}getStyles(){return`\n      ${i.m.getSliderStyles()}\n\n      .dog-duty-card {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        width: 100%;\n        min-width: 0;\n      }\n\n      .dog-duty-maps {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        width: 100%;\n        min-width: 0;\n      }\n      .dog-duty-maps.grid {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n        gap: 10px;\n      }\n      .dog-duty-map-wrap {\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n        min-width: 0;\n      }\n      .dog-duty-cam-label {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 12px;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n      }\n      .dog-duty-cam-label ha-icon {\n        --mdc-icon-size: 16px;\n      }\n\n      .dog-duty-list-panel {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        padding: 10px 12px;\n        border-radius: var(--uc-r-12, 12px);\n        background: var(--uc-pane-bg, var(--secondary-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        max-height: 280px;\n      }\n      .dog-duty-list-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 8px;\n      }\n      .dog-duty-list-sorts {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 4px;\n      }\n      .dog-duty-sort-btn {\n        border: 1px solid var(--divider-color);\n        background: transparent;\n        color: var(--secondary-text-color);\n        border-radius: 999px;\n        padding: 3px 10px;\n        font: inherit;\n        font-size: 11px;\n        font-weight: 600;\n        cursor: pointer;\n      }\n      .dog-duty-sort-btn.on {\n        background: var(--primary-color);\n        border-color: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .dog-duty-list-scroll {\n        overflow: auto;\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n        min-height: 0;\n        flex: 1;\n        -webkit-overflow-scrolling: touch;\n      }\n      .dog-duty-list-empty {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        padding: 8px 2px;\n      }\n      .dog-duty-list-row {\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n        text-align: left;\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        border-radius: var(--uc-r-10, 10px);\n        padding: 8px 10px;\n        cursor: pointer;\n        font: inherit;\n        color: inherit;\n      }\n      .dog-duty-list-row.selected {\n        border-color: var(--primary-color);\n      }\n      .dog-duty-list-row.cleaned {\n        opacity: 0.72;\n      }\n      .dog-duty-list-row-main {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 8px;\n      }\n      .dog-duty-list-summary {\n        font-weight: 600;\n        font-size: 13px;\n      }\n      .dog-duty-list-status {\n        font-size: 11px;\n        font-weight: 700;\n        padding: 2px 8px;\n        border-radius: 999px;\n        flex-shrink: 0;\n      }\n      .dog-duty-list-status.active {\n        background: color-mix(in srgb, var(--warning-color, #ff9800) 18%, transparent);\n        color: var(--warning-color, #ff9800);\n      }\n      .dog-duty-list-status.ok {\n        background: color-mix(in srgb, var(--success-color, #4caf50) 18%, transparent);\n        color: var(--success-color, #4caf50);\n      }\n      .dog-duty-list-row-meta {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px 12px;\n        font-size: 11px;\n        color: var(--secondary-text-color);\n      }\n\n      .dog-duty-header {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 16px;\n        font-weight: 700;\n        color: var(--primary-text-color);\n      }\n      .dog-duty-header ha-icon {\n        color: var(--primary-color);\n        --mdc-icon-size: 22px;\n      }\n\n      .dog-duty-status {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 6px;\n        align-items: center;\n      }\n\n      .dog-duty-chip {\n        display: inline-flex;\n        align-items: center;\n        gap: 4px;\n        padding: 4px 10px;\n        border-radius: 999px;\n        font-size: 12px;\n        font-weight: 600;\n        background: var(--uc-pane-bg, var(--secondary-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        color: var(--primary-text-color);\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n      }\n      .dog-duty-chip.toggle,\n      .dog-duty-chip.action {\n        cursor: pointer;\n        font: inherit;\n      }\n      .dog-duty-chip.toggle.on {\n        background: color-mix(in srgb, var(--primary-color) 22%, transparent);\n        border-color: var(--primary-color);\n        color: var(--primary-color);\n      }\n      .dog-duty-chip.action {\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        border-color: transparent;\n      }\n      .dog-duty-chip.action:disabled {\n        opacity: 0.55;\n        cursor: not-allowed;\n      }\n      .dog-duty-chip ha-icon {\n        --mdc-icon-size: 14px;\n      }\n\n      .dog-duty-scan-msg {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        padding: 0 2px;\n      }\n\n      .dog-duty-map {\n        position: relative;\n        width: 100%;\n        aspect-ratio: 16 / 10;\n        border-radius: var(--uc-r-12, 12px);\n        overflow: hidden;\n        background: var(--disabled-text-color, #333);\n        isolation: isolate;\n      }\n\n      .dog-duty-roi-mask {\n        position: absolute;\n        z-index: 1;\n        pointer-events: none;\n        border: 2px solid rgba(64, 180, 255, 0.85);\n        border-radius: var(--uc-r-4, 4px);\n        box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.45);\n      }\n      .dog-duty-roi-mask.editing {\n        border-color: var(--primary-color, #03a9f4);\n        box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.55);\n      }\n      .dog-duty-roi-mask.empty {\n        inset: 0;\n        border: 2px dashed rgba(255, 255, 255, 0.35);\n        box-shadow: none;\n        border-radius: 0;\n      }\n\n      .dog-duty-roi-canvas {\n        position: relative;\n        width: 100%;\n        aspect-ratio: 16 / 10;\n        border-radius: var(--uc-r-12, 12px);\n        overflow: hidden;\n        background: var(--disabled-text-color, #333);\n        touch-action: none;\n        cursor: crosshair;\n        user-select: none;\n      }\n      .dog-duty-roi-hint {\n        position: absolute;\n        left: 8px;\n        bottom: 8px;\n        z-index: 3;\n        font-size: 11px;\n        padding: 4px 8px;\n        border-radius: var(--uc-r-6, 6px);\n        background: rgba(0, 0, 0, 0.55);\n        color: #fff;\n        pointer-events: none;\n      }\n      .dog-duty-roi-summary {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n      }\n      .dog-duty-link-btn {\n        border: 1px solid color-mix(in srgb, var(--primary-color) 45%, transparent);\n        background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n        color: var(--primary-text-color);\n        border-radius: var(--uc-r-8, 8px);\n        padding: 6px 10px;\n        font: inherit;\n        font-size: 12px;\n        cursor: pointer;\n      }\n      .dog-duty-link-btn:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n      }\n      .dog-duty-warn .dog-duty-link-btn {\n        margin-left: auto;\n        flex-shrink: 0;\n      }\n\n      .dog-duty-bg {\n        position: absolute;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n        user-select: none;\n        pointer-events: none;\n        z-index: 0;\n      }\n\n      /* Live camera via hui-image (authenticated) */\n      hui-image.dog-duty-bg-camera {\n        position: absolute;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        display: block;\n        pointer-events: none;\n        z-index: 0;\n        --ha-camera-border-radius: 0;\n        border-radius: 0;\n        overflow: hidden;\n      }\n      hui-image.dog-duty-bg-camera img,\n      hui-image.dog-duty-bg-camera video {\n        width: 100% !important;\n        height: 100% !important;\n        object-fit: cover !important;\n      }\n      .dog-duty-bg-placeholder {\n        position: absolute;\n        inset: 0;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        color: var(--secondary-text-color);\n        font-size: 13px;\n        padding: 16px;\n        text-align: center;\n        z-index: 0;\n      }\n      .dog-duty-bg-placeholder ha-icon {\n        --mdc-icon-size: 36px;\n        opacity: 0.7;\n      }\n\n      .dog-duty-heatmap {\n        position: absolute;\n        inset: 0;\n        pointer-events: none;\n        z-index: 1;\n      }\n      .dog-duty-heat {\n        position: absolute;\n        width: 72px;\n        height: 72px;\n        transform: translate(-50%, -50%);\n        border-radius: 50%;\n        background: radial-gradient(circle, rgba(255, 80, 0, 0.45) 0%, rgba(255, 80, 0, 0) 70%);\n        filter: blur(2px);\n      }\n\n      .dog-duty-marker {\n        position: absolute;\n        transform: translate(-50%, -50%);\n        z-index: 2;\n        width: 36px;\n        height: 36px;\n        border: none;\n        background: transparent;\n        padding: 0;\n        cursor: pointer;\n        display: grid;\n        place-items: center;\n      }\n      .dog-duty-glyph {\n        position: relative;\n        z-index: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 28px;\n        height: 28px;\n        color: #ff5252;\n        /* Shadow only — keeps glyphs legible over any camera frame without a colored plate */\n        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.85));\n        font-size: 20px;\n        font-weight: 800;\n        line-height: 1;\n      }\n      .dog-duty-marker.cleaned .dog-duty-glyph {\n        color: #81c784;\n        opacity: 0.85;\n      }\n      .dog-duty-marker.selected .dog-duty-glyph {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n        border-radius: 50%;\n      }\n      .dog-duty-emoji {\n        font-size: 20px;\n      }\n      .dog-duty-x {\n        font-size: 20px;\n        font-weight: 900;\n      }\n      .dog-duty-glyph ha-icon {\n        --mdc-icon-size: 22px;\n      }\n\n      .dog-duty-empty {\n        position: absolute;\n        left: 50%;\n        bottom: 10px;\n        transform: translateX(-50%);\n        z-index: 3;\n        padding: 5px 12px;\n        border-radius: var(--uc-r-8, 8px);\n        background: rgba(0, 0, 0, 0.55);\n        color: #fff;\n        font-size: 11px;\n        line-height: 1.35;\n        max-width: calc(100% - 32px);\n        width: max-content;\n        text-align: center;\n        pointer-events: none;\n      }\n\n      .dog-duty-popup {\n        position: absolute;\n        z-index: 5;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n        width: min(280px, calc(100% - 16px));\n        /* Stay inside the map (overflow: hidden) so edges never get clipped */\n        max-height: calc(100% - 16px);\n        overflow-y: auto;\n        box-sizing: border-box;\n        background: var(--uc-pane-bg, var(--card-background-color, #1c1c1c));\n        color: var(--primary-text-color);\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-12, 12px);\n        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);\n        padding: 12px;\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n      }\n      .dog-duty-popup-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 8px;\n        font-size: 14px;\n      }\n      .dog-duty-popup-snap {\n        width: 100%;\n        border-radius: var(--uc-r-8, 8px);\n        max-height: 140px;\n        object-fit: cover;\n      }\n      .dog-duty-popup-meta {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n        font-size: 11px;\n        color: var(--secondary-text-color);\n      }\n      .dog-duty-popup-meta .cleaned-tag {\n        color: var(--success-color, #4caf50);\n        font-weight: 700;\n      }\n      .dog-duty-popup-desc {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        max-height: 60px;\n        overflow: auto;\n      }\n      .dog-duty-popup-actions {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 6px;\n      }\n\n      .dog-duty-icon-btn {\n        border: none;\n        background: transparent;\n        color: var(--secondary-text-color);\n        cursor: pointer;\n        padding: 2px;\n        display: inline-flex;\n      }\n      .dog-duty-icon-btn ha-icon { --mdc-icon-size: 18px; }\n\n      .dog-duty-btn {\n        appearance: none;\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        border-radius: var(--uc-r-8, 8px);\n        padding: 8px 12px;\n        font-size: 13px;\n        font-weight: 600;\n        cursor: pointer;\n      }\n      .dog-duty-btn.primary {\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        border-color: transparent;\n      }\n      .dog-duty-btn.danger {\n        background: transparent;\n        color: var(--error-color, #f44336);\n        border-color: color-mix(in srgb, var(--error-color, #f44336) 40%, transparent);\n      }\n      .dog-duty-btn:disabled {\n        opacity: 0.55;\n        cursor: not-allowed;\n      }\n\n      .dog-duty-scrubber {\n        display: flex;\n        flex-direction: column;\n        gap: 0;\n        padding: 10px 12px;\n        border-radius: var(--uc-r-12, 12px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border: 1px solid var(--divider-color);\n        transition: border-color 0.2s ease;\n      }\n      .dog-duty-scrubber.scrubbing {\n        border-color: var(--primary-color);\n      }\n      .dog-duty-scrub-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 12px;\n        margin-bottom: 10px;\n      }\n      .dog-duty-scrub-status {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        min-width: 0;\n      }\n      .dog-duty-scrub-dot {\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        flex-shrink: 0;\n      }\n      .dog-duty-scrub-dot.live {\n        background: var(--success-color, #4caf50);\n        animation: dog-duty-scrub-pulse 2s ease-in-out infinite;\n      }\n      .dog-duty-scrub-dot.past {\n        background: var(--primary-color);\n      }\n      @keyframes dog-duty-scrub-pulse {\n        0%,\n        100% {\n          opacity: 1;\n        }\n        50% {\n          opacity: 0.4;\n        }\n      }\n      .dog-duty-scrub-time {\n        display: flex;\n        flex-direction: column;\n        min-width: 0;\n      }\n      .dog-duty-scrub-clock {\n        font-size: 18px;\n        font-weight: 700;\n        color: var(--primary-text-color);\n        line-height: 1.2;\n        white-space: nowrap;\n      }\n      .dog-duty-scrubber.scrubbing .dog-duty-scrub-clock {\n        color: var(--primary-color);\n        font-size: 20px;\n      }\n      .dog-duty-scrub-day {\n        margin-right: 6px;\n      }\n      .dog-duty-scrub-delta {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n      }\n      .dog-duty-scrub-live-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 6px 14px;\n        border: none;\n        border-radius: var(--uc-r-16, 16px);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        font-size: 12px;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n        white-space: nowrap;\n        flex-shrink: 0;\n      }\n      .dog-duty-scrub-live-btn ha-icon {\n        --mdc-icon-size: 15px;\n      }\n      .dog-duty-scrub-track {\n        position: relative;\n        height: 40px;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--secondary-background-color);\n        border: 1px solid var(--divider-color);\n        cursor: ew-resize;\n        touch-action: none;\n        user-select: none;\n        overflow: visible;\n        outline: none;\n      }\n      .dog-duty-scrub-track:focus-visible {\n        box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary-color) 55%, transparent);\n      }\n      .dog-duty-scrub-tick {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        width: 1px;\n        background: var(--divider-color);\n        pointer-events: none;\n      }\n      .dog-duty-scrub-marker {\n        position: absolute;\n        top: 7px;\n        bottom: 7px;\n        width: 2px;\n        border-radius: var(--uc-r-1, 1px);\n        background: #ff5252;\n        opacity: 0.85;\n        pointer-events: none;\n        transform: translateX(-50%);\n      }\n      .dog-duty-scrub-marker.cleaned {\n        background: var(--success-color, #4caf50);\n        opacity: 0.55;\n      }\n      .dog-duty-scrub-shade {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        background: var(--primary-color);\n        opacity: 0.08;\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        pointer-events: none;\n      }\n      .dog-duty-scrub-playhead {\n        position: absolute;\n        top: -3px;\n        bottom: -3px;\n        width: 2px;\n        margin-left: -1px;\n        background: var(--primary-color);\n        pointer-events: none;\n      }\n      .dog-duty-scrub-handle {\n        position: absolute;\n        top: -8px;\n        width: 14px;\n        height: 14px;\n        margin-left: -7px;\n        border-radius: 50%;\n        background: var(--primary-color);\n        border: 2px solid var(--card-background-color);\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n        pointer-events: none;\n      }\n      .dog-duty-scrub-axis {\n        display: flex;\n        justify-content: space-between;\n        margin-top: 6px;\n        font-size: 10px;\n        color: var(--secondary-text-color);\n        opacity: 0.8;\n      }\n\n      .dog-duty-setup-hint {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        padding: 4px 2px 0;\n      }\n\n      /* Wizard */\n      .dog-duty-wizard-steps {\n        display: flex;\n        align-items: center;\n        gap: 0;\n        margin-bottom: 16px;\n      }\n      .dog-duty-step {\n        width: 28px;\n        height: 28px;\n        border-radius: 50%;\n        display: grid;\n        place-items: center;\n        font-size: 12px;\n        font-weight: 700;\n        background: var(--divider-color);\n        color: var(--secondary-text-color);\n        flex-shrink: 0;\n      }\n      .dog-duty-step.active {\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .dog-duty-step-line {\n        flex: 1;\n        height: 2px;\n        background: var(--divider-color);\n      }\n      .dog-duty-wizard-body {\n        margin-top: 4px;\n      }\n      .dog-duty-ok,\n      .dog-duty-warn,\n      .dog-duty-err {\n        display: flex;\n        align-items: flex-start;\n        gap: 8px;\n        margin-top: 10px;\n        font-size: 13px;\n        padding: 8px 10px;\n        border-radius: var(--uc-r-8, 8px);\n      }\n      .dog-duty-ok {\n        background: color-mix(in srgb, var(--success-color, #4caf50) 15%, transparent);\n        color: var(--success-color, #4caf50);\n      }\n      .dog-duty-warn {\n        background: color-mix(in srgb, var(--warning-color, #ff9800) 15%, transparent);\n        color: var(--warning-color, #ff9800);\n        flex-wrap: wrap;\n      }\n      .dog-duty-warn a {\n        color: inherit;\n        font-weight: 700;\n      }\n      .dog-duty-err {\n        background: color-mix(in srgb, var(--error-color, #f44336) 15%, transparent);\n        color: var(--error-color, #f44336);\n      }\n      .dog-duty-ok ha-icon,\n      .dog-duty-warn ha-icon,\n      .dog-duty-err ha-icon {\n        --mdc-icon-size: 18px;\n        flex-shrink: 0;\n      }\n\n      .dog-duty-setup-guide {\n        margin: 0 0 14px;\n        padding: 12px 14px;\n        border-radius: var(--uc-r-8, 8px);\n        background: color-mix(in srgb, var(--primary-color) 10%, transparent);\n        border: 1px solid color-mix(in srgb, var(--primary-color) 28%, transparent);\n        font-size: 13px;\n        color: var(--primary-text-color);\n      }\n      .dog-duty-setup-guide-title {\n        font-weight: 700;\n        margin-bottom: 8px;\n      }\n      .dog-duty-setup-guide ol {\n        margin: 0 0 10px;\n        padding-left: 18px;\n      }\n      .dog-duty-setup-guide li {\n        margin-bottom: 6px;\n        line-height: 1.35;\n      }\n      .dog-duty-setup-guide-note {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        line-height: 1.4;\n      }\n\n      @media (max-width: 480px) {\n        .dog-duty-map {\n          aspect-ratio: 4 / 3;\n        }\n        .dog-duty-popup {\n          width: calc(100% - 16px);\n        }\n      }\n    `}}function M(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):.5}function C(e){const t=[];e.camera_entity&&t.push(e.camera_entity);for(const o of e.camera_entities||[])o&&!t.includes(o)&&t.push(o);return t}function D(e,t,o){if(!t)return!0;const n=e.payload.camera;return n?n===t:t===o}function U(e,t){var o,n,i;return t?(null===(i=null===(n=null===(o=null==e?void 0:e.states)||void 0===o?void 0:o[t])||void 0===n?void 0:n.attributes)||void 0===i?void 0:i.friendly_name)||t.replace(/^camera\./,""):"—"}function E(e){return e?e.startsWith("http")||e.startsWith("/api/")||e.startsWith("/local/")?e:e.startsWith("/config/www/")?`/local/${e.slice(12)}`:e.startsWith("www/")?`/local/${e.slice(4)}`:e:""}function q(e,t){const o=Date.now()-e;if(!Number.isFinite(o)||o<0)return"just now";const n=Math.floor(o/6e4);if(n<1)return"just now";if(n<60)return`${n}m ago`;const i=Math.floor(n/60);return i<48?`${i}h ago`:`${Math.floor(i/24)}d ago`}function L(e,t){var o;const n=(null===(o=null==t?void 0:t.locale)||void 0===o?void 0:o.language)||"en";return new Date(e).toLocaleTimeString(n,{hour:"numeric",minute:"2-digit"})}},3647(e,t,o){o.d(t,{i:()=>i});const n="__uvc_todo_cache";class i{constructor(){this._unsubByEntity=new Map,this._callbacksByEntity=new Map}async getItems(e,t,o){if(!e||!t)return[];e[n]||(e[n]=Object.create(null));const i=e[n],r=()=>{if(o){let e=this._callbacksByEntity.get(t);e||(e=new Set,this._callbacksByEntity.set(t,e)),e.add(o)}},a=()=>{const e=this._callbacksByEntity.get(t);e&&e.forEach(e=>{try{e()}catch(e){}})},d=async()=>{var o;try{const n=await e.callService("todo","get_items",{entity_id:t},void 0,!0,!0),r=null!==(o=null==n?void 0:n.response)&&void 0!==o?o:{};let a=[];const d=r[t];if(Array.isArray(null==d?void 0:d.items))a=d.items;else if(Array.isArray(null==d?void 0:d.todo_items))a=d.todo_items;else if(Array.isArray(d))a=d;else if(Array.isArray(r))a=r;else if("object"==typeof r&&null!==r){const e=Object.keys(r).find(e=>e.startsWith("todo.")),t=e?r[e]:void 0;Array.isArray(null==t?void 0:t.items)?a=t.items:Array.isArray(null==t?void 0:t.todo_items)?a=t.todo_items:Array.isArray(t)&&(a=t)}return 0===a.length&&(d||r&&Object.keys(r).length>0)&&console.warn("[UltraCard] todo.get_items: unexpected response shape",{entityId:t,responseKeys:Object.keys(r),entry:d?Object.keys(d):null}),i[t]=a,a}catch(e){return console.warn("[UltraCard] todo.get_items failed for",t,e),i[t]=[],[]}};if(void 0!==i[t])return r(),this._ensureSubscription(e,t,d,a),i[t];const s=await d();return r(),this._ensureSubscription(e,t,d,a),s}_ensureSubscription(e,t,o,n){if(this._unsubByEntity.has(t))return;const i=e.connection;(null==i?void 0:i.subscribeEvents)&&i.subscribeEvents(e=>{var i;(null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.entity_id)===t&&o().then(()=>n())},"state_changed").then(e=>{this._unsubByEntity.set(t,e)}).catch(()=>{})}unsubscribeEntity(e){const t=this._unsubByEntity.get(e);if(t){try{t()}catch(e){}this._unsubByEntity.delete(e)}this._callbacksByEntity.delete(e)}invalidateCache(e,t){if(!e||!t)return;const o=e[n];o&&t in o&&delete o[t]}}}};