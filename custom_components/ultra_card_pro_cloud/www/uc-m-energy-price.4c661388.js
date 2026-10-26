export const __webpack_esm_ids__=[8073];export const __webpack_esm_modules__={8854(e,t,r){r.d(t,{UltraEnergyPriceModule:()=>Y});var i=r(2618),n=r(3307),o=r(6478),a=(r(7921),r(3488));const s=new Set(["nordpool_core","tibber"]),c=36e5;function l(e){if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"==typeof e){const t=e.trim();if(!t)return null;const r=Number(t.replace(",","."));return Number.isFinite(r)?r:null}return null}function d(e){if(e instanceof Date)return Number.isNaN(e.getTime())?null:e;if("number"==typeof e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}if("string"==typeof e&&e.trim()){const t=e.trim().replace(/^(\d{4}-\d{2}-\d{2}) (\d)/,"$1T$2"),r=new Date(t);return Number.isNaN(r.getTime())?null:r}return null}function p(e){return!!e&&"object"==typeof e&&!Array.isArray(e)}function u(e,t=0){const r=new Date(e.getTime());r.setHours(0,0,0,0),t&&r.setDate(r.getDate()+t);const i=new Date(r.getTime());return i.setDate(i.getDate()+1),i.setHours(0,0,0,0),{start:r,end:i}}function g(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function _(e){if("string"!=typeof e)return null;const t=/^\s*(\d{1,2}):(\d{2})(?::\d{2})?\s*$/.exec(e);if(!t)return null;const r=Number(t[1]),i=Number(t[2]);return r>23||i>59?null:{hours:r,minutes:i}}function h(e,t){const r=_(e);if(!r)return null;const i=new Date(t.getTime());return i.setHours(r.hours,r.minutes,0,0),i.getTime()<=t.getTime()&&(i.setDate(i.getDate()+1),i.setHours(r.hours,r.minutes,0,0)),i}function v(e){const t=new Map;for(const r of e)r&&r.start instanceof Date&&!Number.isNaN(r.start.getTime())&&Number.isFinite(r.price)&&t.set(r.start.getTime(),r);const r=[...t.values()].sort((e,t)=>e.start.getTime()-t.start.getTime()),i=[];for(let e=1;e<r.length;e++)i.push(r[e].start.getTime()-r[e-1].start.getTime());const n=function(e){if(!e.length)return 0;const t=[...e].sort((e,t)=>e-t),r=Math.floor(t.length/2);return t.length%2?t[r]:(t[r-1]+t[r])/2}(i.filter(e=>e>0&&e<=108e5))||c,o=[];for(let e=0;e<r.length;e++){const t=r[e],i=r[e+1];let a=t.end&&t.end.getTime()>t.start.getTime()?t.end:null;if(!a){const e=i?i.start.getTime()-t.start.getTime():0;a=new Date(t.start.getTime()+(e>0&&e<=108e5?e:n))}i&&a.getTime()>i.start.getTime()&&(a=new Date(i.start.getTime())),o.push({start:t.start,end:a,price:t.price})}return o}const m=["start","start_time","startsAt","starts_at","from","valid_from","period_start","time","hour","datetime","date"],y=["end","end_time","endsAt","ends_at","till","to","until","valid_to","period_end"],f=["value_inc_vat","per_kwh","price_per_kwh","price","value","total","cost"];function w(e,t){for(const r of t)if(void 0!==e[r]&&null!==e[r])return e[r]}function x(e,t=1){if(!Array.isArray(e))return[];const r=[];for(const i of e){if(!p(i))continue;const e=d(w(i,m)),n=l(w(i,f));e&&null!==n&&r.push({start:e,end:d(w(i,y)),price:n*t})}return v(r)}function b(e,t,r){if(!Array.isArray(e)||0===e.length)return[];const i=r.getTime()-t.getTime();if(i<=0)return[];const n=i/e.length,o=[];return e.forEach((e,r)=>{const i=l(e);if(null===i)return;const a=new Date(Math.round(t.getTime()+r*n)),s=new Date(Math.round(t.getTime()+(r+1)*n));o.push({start:a,end:s,price:i})}),o}function k(e){return p(e)&&"response"in e&&p(e.response)?e.response:e}function $(e){const t=Object.keys(e);return t.length?e[t[0]]:void 0}function S(e,t,r=!0){const i=k(e);if(!p(i))return[];let n;if(t){const e=t.toLowerCase(),r=Object.keys(i).find(t=>new RegExp(`(^|[^a-z0-9])${t.toLowerCase()}([^a-z0-9]|$)`).test(e));n=r?i[r]:void 0}return void 0===n&&(n=$(i)),x(n,r?.001:1)}const T=/^(?:sensor|event)\.(octopus_energy_electricity_.+?)_(current_rate|previous_rate|next_rate|current_day_rates|previous_day_rates|next_day_rates)$/;function P(e){const t=T.exec(e||"");return t?{current:`event.${t[1]}_current_day_rates`,next:`event.${t[1]}_next_day_rates`}:null}function F(e){if(!Array.isArray(e))return null;const t=e.find(p);return null!=t?t:null}function D(e,t,r){const i=t||{},n=e||"";if(Array.isArray(i.rates)||T.test(n))return"octopus";if(Array.isArray(i.forecasts))return"amber";const o=F(i.raw_today)||F(i.raw_tomorrow);if(o)return"hour"in o?"energi_data_service":"value"in o?"nordpool":"energi_data_service";if(Array.isArray(i.today)&&("tomorrow_valid"in i||Array.isArray(i.tomorrow)))return"nordpool";if(Array.isArray(i.prices_today)||Array.isArray(i.prices)){const e=F(i.prices)||F(i.prices_today);if(e&&("time"in e||"price"in e))return"entsoe"}const a=(r||"").toLowerCase();if("nordpool"===a||/^sensor\.nord_pool_/.test(n))return"nordpool_core";if("tibber"===a)return"tibber";for(const e of Object.values(i))if(Array.isArray(e)&&x(e).length>=2)return"generic";return"none"}function C(e,t=1,r=0){return e*(Number.isFinite(t)?t:1)+(Number.isFinite(r)?r:0)}function E(e,t){const r=t.getTime();return e.find(e=>e.start.getTime()<=r&&r<e.end.getTime())||null}function q(e,t,r=0){const{start:i,end:n}=u(t,r),o=i.getTime(),a=n.getTime();return e.filter(e=>e.start.getTime()>=o&&e.start.getTime()<a)}function A(e,t,r){if("absolute"===r.mode)return e<=r.cheapPrice?"cheap":e>=r.expensivePrice?"expensive":"normal";if(!t.length)return"normal";if("percentile"===r.mode){const i=t.filter(t=>t<=e+1e-12).length/t.length*100;return i<=r.cheapPercent?"cheap":i>r.expensivePercent?"expensive":"normal"}const i=Math.min(...t),n=Math.max(...t);if(n-i<1e-9)return"normal";const o=(e-i)/(n-i)*100;return o<=r.cheapPercent?"cheap":o>=r.expensivePercent?"expensive":"normal"}function M(e,t){const r=t.getTime(),i=[];for(const t of e)t.end.getTime()<=r||i.push(t.start.getTime()<r?{start:new Date(r),end:t.end,price:t.price}:t);return i}function N(e,t,r,i){const n=Math.round(r*c);if(!(n>0))return null;const o=M(e,t),a=i?i.getTime():1/0;let s=null;for(let e=0;e<o.length;e++){const t=o[e].start.getTime();if(t+n>a)break;let r=n,i=0;const c=[];let l=!1;for(let t=e;t<o.length;t++){const n=o[t];if(t>e&&n.start.getTime()-o[t-1].end.getTime()>1e3)break;const a=n.end.getTime()-n.start.getTime(),s=Math.min(r,a);if(i+=n.price*s,c.push({start:n.start,end:new Date(n.start.getTime()+s),price:n.price}),r-=s,r<=0){l=!0;break}}if(!l)continue;const d=t+n;if(d>a)continue;const p=i/n;(!s||p<s.avgPrice-1e-12)&&(s={start:new Date(t),end:new Date(d),avgPrice:p,parts:c})}return s}function z(e){const t=[...e].sort((e,t)=>e.start.getTime()-t.start.getTime()),r=[];for(const e of t){const t=r[r.length-1];t&&e.start.getTime()-t.end.getTime()<=1e3?e.end.getTime()>t.end.getTime()&&(t.end=new Date(e.end.getTime())):r.push({start:new Date(e.start.getTime()),end:new Date(e.end.getTime())})}return r}function O(e,t,r,i){const n=e.map(e=>Object.assign(Object.assign({},e),{kwh:(e.end.getTime()-e.start.getTime())/c*t})).sort((e,t)=>e.start.getTime()-t.start.getTime()),o=n.reduce((e,t)=>e+(t.end.getTime()-t.start.getTime())/c,0),a=n.reduce((e,t)=>e+t.kwh,0),s=n.reduce((e,t)=>e+t.kwh*t.price,0);return{segments:n,ranges:z(n),hoursPlanned:o,kwh:a,cost:s,avgPrice:a>0?s/a:0,feasible:i,shortfallHours:Math.max(0,r-o)}}function U(e){const t=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0");return`${g(e)} ${t}:${r}:00`}const L=new class{constructor(){this._cache=new Map,this._configEntries=new Map}getActionSlots(e,t,r){const i=new Date,n=g(i),o=`${t.format}|${t.entityId}|${t.configEntry||""}|${t.hint||""}`;let a=this._cache.get(o);a||(a={slots:[],fetchedAt:0,loading:!1,error:"",dayKey:n},this._cache.set(o,a));const s=Date.now()-a.fetchedAt,c=q(a.slots,i,1).length>0;if((0===a.fetchedAt||a.dayKey!==n||(a.error?s>3e5:s>18e5&&!c))&&!a.loading&&"function"==typeof(null==e?void 0:e.callWS)){a.loading=!0;const o=a;this._fetch(e,t,i).then(e=>{o.slots=e,o.error=""}).catch(e=>{o.error=e instanceof Error?e.message:String(null!=e?e:"error")}).then(()=>{o.loading=!1,o.fetchedAt=Date.now(),o.dayKey=n,r()})}return a}async _callService(e,t,r,i){if("function"!=typeof e.callWS)throw new Error("No websocket connection");return e.callWS({type:"call_service",domain:t,service:r,service_data:i,return_response:!0})}async _resolveConfigEntry(e,t){const r=this._configEntries.get(t);if(r)return r;if("function"!=typeof e.callWS)return"";const i=await e.callWS({type:"config/entity_registry/get",entity_id:t}),n=(null==i?void 0:i.config_entry_id)||"";return n&&this._configEntries.set(t,n),n}async _fetch(e,t,r){var i,n,o;if("nordpool_core"===t.format){const i=t.configEntry||await this._resolveConfigEntry(e,t.entityId);if(!i)throw new Error("Nord Pool config entry not found");const n=t.hint||t.entityId,o=[g(r),g(u(r,1).start)],a=await Promise.all(o.map(t=>this._callService(e,"nordpool","get_prices_for_date",{config_entry:i,date:t}).catch(()=>null))),s=[];for(const e of a)e&&s.push(...S(e,n));if(!s.length&&a.every(e=>null===e))throw new Error("nordpool.get_prices_for_date failed");return v(s)}if("tibber"===t.format){const a=u(r).start,s=u(r,2).start,c=await this._callService(e,"tibber","get_prices",{start:U(a),end:U(s)}),l=String((null===(o=null===(n=null===(i=e.states)||void 0===i?void 0:i[t.entityId])||void 0===n?void 0:n.attributes)||void 0===o?void 0:o.friendly_name)||"");return function(e,t){const r=k(e);if(!p(r))return[];const i=p(r.prices)?r.prices:r;if(!p(i))return[];const n=Object.keys(i);let o;if(t){const e=t.toLowerCase(),r=n.find(t=>e.includes(t.toLowerCase()));r&&(o=i[r])}return void 0===o&&(o=$(i)),x(o)}(c,t.hint||l)}return[]}},W=120,I="07:00",j=36e5,H="var(--success-color, #43a047)",R="var(--primary-color, #03a9f4)",V="var(--error-color, #db4437)",K={nordpool:"Nord Pool",nordpool_core:"Nord Pool",tibber:"Tibber",energi_data_service:"Energi Data Service",entsoe:"ENTSO-e",octopus:"Octopus Energy",amber:"Amber Electric",generic:"Price list",none:""},B=["ev_charger_entity","ev_soc_entity","ev_target_soc_entity","ev_power_entity","ev_departure_entity"];function G(e,t){const r=l(e);return null===r?t:r}function J(e,t,r){return Math.min(r,Math.max(t,e))}class Y extends n.m{constructor(){super(...arguments),this.metadata={type:"energy_price",title:"Energy Price & EV",description:"Electricity price curve with cheap and expensive hours, the cheapest time to run appliances, and a smart EV charge plan",author:"WJD Designs",version:"1.0.0",icon:"mdi:ev-station",category:"data",tags:["pro","premium","energy","electricity price","nordpool","tibber","octopus","ev","charging","cheapest hours","tariff"]},this._busy=new Set,this._feedback=new Map}createDefault(e,t){return{id:e||this.generateId("energy_price"),type:"energy_price",price_entity:"",price_source:"auto",nordpool_config_entry:"",source_hint:"",title:"",show_title:!0,show_current:!0,show_stats:!0,show_chart:!0,show_tomorrow:!0,chart_hours:0,chart_height:W,show_cheapest_window:!0,window_hours:3,window_label:"",level_mode:"relative",cheap_percent:33,expensive_percent:67,cheap_price:.1,expensive_price:.3,price_multiplier:1,price_additive:0,unit_override:"",decimals:2,cheap_color:"",normal_color:"",expensive_color:"",ev_enabled:!1,ev_charger_entity:"",ev_soc_entity:"",ev_target_soc:80,ev_target_soc_entity:"",ev_capacity_kwh:60,ev_power_kw:7.4,ev_power_entity:"",ev_efficiency:90,ev_departure_time:I,ev_departure_entity:"",ev_manual_hours:4,ev_allow_split:!0,ev_apply_mode:"none",ev_script_entity:"",ev_start_entity:"",ev_end_entity:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=[];return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),{valid:0===t.length,errors:t}}getRuntimeEntityIds(e){const t=e,r=[];if(t.price_entity){r.push(t.price_entity);const e=P(t.price_entity);e&&r.push(e.current,e.next)}if(t.ev_enabled)for(const e of B){const i=t[e];i&&r.push(i)}return r}_format(e,t){var r,i;const n=e.price_entity||"";if(!n)return"none";const o=e.price_source||"auto";if("auto"!==o)return o;const a=null===(r=null==t?void 0:t.states)||void 0===r?void 0:r[n],s=null==t?void 0:t.entities;return D(n,null==a?void 0:a.attributes,null===(i=null==s?void 0:s[n])||void 0===i?void 0:i.platform)}_levelConfig(e){return{mode:e.level_mode||"relative",cheapPercent:G(e.cheap_percent,33),expensivePercent:G(e.expensive_percent,67),cheapPrice:G(e.cheap_price,.1),expensivePrice:G(e.expensive_price,.3)}}_priceData(e,t,r){var i,n,o,a,c;const d=e.price_entity||"",p=null===(i=null==t?void 0:t.states)||void 0===i?void 0:i[d],g=this._format(e,t);let _=[],h=!1,m="";if(s.has(g)){const r=L.getActionSlots(t,{format:g,entityId:d,configEntry:e.nordpool_config_entry||void 0,hint:e.source_hint||void 0},()=>this.triggerPreviewUpdate(!0));_=r.slots,h=r.loading&&0===r.slots.length,m=r.error}else"none"!==g&&(_=function(e,t,r,i){var n,o,a;const s=null===(n=r[t])||void 0===n?void 0:n.attributes;switch(e){case"nordpool":return function(e,t){if(!e)return[];const r=x(e.raw_today),i=!1!==e.tomorrow_valid,n=i?x(e.raw_tomorrow):[];if(r.length||n.length)return v([...r,...n]);const o=u(t),a=u(t,1);return v([...b(e.today,o.start,o.end),...i?b(e.tomorrow,a.start,a.end):[]])}(s,i);case"energi_data_service":return function(e){if(!e)return[];const t=!1!==e.tomorrow_valid;return v([...x(e.raw_today),...t?x(e.raw_tomorrow):[]])}(s);case"entsoe":return function(e){if(!e)return[];const t=x(e.prices);return t.length?t:v([...x(e.prices_today),...x(e.prices_tomorrow)])}(s);case"amber":return function(e){return e?x(e.forecasts):[]}(s);case"octopus":{const e=P(t),i=[s];return e&&i.push(null===(o=r[e.current])||void 0===o?void 0:o.attributes,null===(a=r[e.next])||void 0===a?void 0:a.attributes),function(...e){const t=[];for(const r of e)r&&t.push(...x(r.rates));return v(t)}(...i)}case"generic":{if(!s)return[];let e=[];for(const t of Object.values(s)){const r=Array.isArray(t)?x(t):[];r.length>e.length&&(e=r)}return e}default:return[]}}(g,d,(null==t?void 0:t.states)||{},r));const y=G(e.price_multiplier,1),f=G(e.price_additive,0),w=function(e,t=1,r=0){return 1===t&&0===r?e:e.map(e=>({start:e.start,end:e.end,price:C(e.price,t,r)}))}(_,y,f),k=E(w,r),$=l(null==p?void 0:p.state),S=k?k.price:null===$?null:$*y+f,T=k?E(w,k.end):null,F=null!==(o=null===(n=null==p?void 0:p.attributes)||void 0===n?void 0:n.unit_of_measurement)&&void 0!==o?o:null===(a=null==p?void 0:p.attributes)||void 0===a?void 0:a.unit,D=(e.unit_override||("string"==typeof F?F:"")).trim(),q=D.indexOf("/"),A=q>0?D.slice(0,q).trim():"string"==typeof(null===(c=null==p?void 0:p.attributes)||void 0===c?void 0:c.currency)?String(p.attributes.currency):"";return{format:g,slots:w,loading:h,error:m,unit:D,currency:A,current:S,currentSlot:k,nextSlot:T}}_evView(e,t,r,i){var n,o,a,s,p;const u=e=>{var r;return e?null===(r=null==t?void 0:t.states)||void 0===r?void 0:r[e]:void 0},g=l(null===(n=u(e.ev_soc_entity))||void 0===n?void 0:n.state),v=null===g?null:J(g,0,100),m=l(null===(o=u(e.ev_target_soc_entity))||void 0===o?void 0:o.state),y=J(null!=m?m:G(e.ev_target_soc,80),0,100),f=u(e.ev_power_entity),w=l(null==f?void 0:f.state),x=null!==w&&w>0?function(e,t){const r="string"==typeof t?t.trim().toLowerCase():"";return"kw"===r?e:"mw"===r?1e3*e:"w"===r||e>100?e/1e3:e}(w,null===(a=null==f?void 0:f.attributes)||void 0===a?void 0:a.unit_of_measurement):Math.max(.1,G(e.ev_power_kw,7.4)),b=function(e,t){if("string"!=typeof e)return null;if(_(e))return h(e,t);const r=d(e);return!r||r.getTime()<=t.getTime()?null:r}(null===(s=u(e.ev_departure_entity))||void 0===s?void 0:s.state,i)||h(e.ev_departure_time||I,i)||new Date(i.getTime()+432e5);let k,$;if(null!==v){const t=function(e){const t=Math.min(100,Math.max(0,e.currentSoc)),r=Math.min(100,Math.max(0,e.targetSoc)),i=Math.max(0,e.capacityKwh),n=Math.min(100,Math.max(1,e.efficiencyPercent||100))/100,o=Math.max(0,(r-t)/100*i)/n;return{kwhNeeded:o,hoursNeeded:e.powerKw>0?o/e.powerKw:0}}({currentSoc:v,targetSoc:y,capacityKwh:G(e.ev_capacity_kwh,60),efficiencyPercent:G(e.ev_efficiency,90),powerKw:x});k=t.hoursNeeded,$=t.kwhNeeded}else k=Math.max(0,G(e.ev_manual_hours,4)),$=k*x;const S=function(e,t,r,i,n,o){if(!(i>0&&n>0))return O([],n,0,!0);const a=r.getTime(),s=[];for(const r of M(e,t))r.start.getTime()>=a||s.push(r.end.getTime()>a?{start:r.start,end:new Date(a),price:r.price}:r);const l=Math.round(i*c);if(s.reduce((e,t)=>e+(t.end.getTime()-t.start.getTime()),0)<l)return O(s,n,i,!1);if(!o){const e=N(s,t,i,r);return e?O(e.parts,n,i,!0):O(s,n,i,!1)}const d=[...s].sort((e,t)=>e.price-t.price||e.start.getTime()-t.start.getTime()),p=[];let u=l;for(const e of d){if(u<=0)break;const t=e.end.getTime()-e.start.getTime(),r=Math.min(t,u);p.push({start:e.start,end:new Date(e.start.getTime()+r),price:e.price}),u-=r}return O(p,n,i,!0)}(r,i,b,k,x,!1!==e.ev_allow_split),T=i.getTime(),P=S.ranges.some(e=>e.start.getTime()<=T&&T<e.end.getTime()),F=r.length?r[r.length-1]:void 0,D=!F||F.end.getTime()<b.getTime(),C=null===(p=u(e.ev_charger_entity))||void 0===p?void 0:p.state;return{soc:v,target:y,powerKw:x,departure:b,hoursNeeded:k,kwhNeeded:$,plan:S,chargingNow:P,pricesShort:D,chargerOn:"on"===C||"off"!==C&&null}}_fmtPrice(e,t,r){const i=J(Math.round(G(t.decimals,2)),0,5);try{return e.toLocaleString(r,{minimumFractionDigits:i,maximumFractionDigits:i})}catch(t){return e.toFixed(i)}}_fmtTime(e,t,r){let i;try{i=e.toLocaleTimeString(t,{hour:"2-digit",minute:"2-digit"})}catch(t){i=`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}const n=g(e);if(n===g(r))return i;if(n===g(u(r,1).start))return`${(0,o.kg)("editor.energy_price.tomorrow_short",t,"Tomorrow")} ${i}`;let a;try{a=e.toLocaleDateString(t,{weekday:"short"})}catch(e){a=n}return`${a} ${i}`}_fmtRange(e,t,r){return`${this._fmtTime(e.start,t,r)}–${this._fmtTime(e.end,t,e.start)}`}_fmtDuration(e,t){const r=Math.max(0,Math.round(e/6e4)),i=Math.floor(r/60),n=r%60,a=(0,o.kg)("editor.energy_price.unit_h",t,"h"),s=(0,o.kg)("editor.energy_price.unit_min",t,"min");return i&&n?`${i} ${a} ${n} ${s}`:i?`${i} ${a}`:`${n} ${s}`}_colors(e){return{cheap:e.cheap_color||H,normal:e.normal_color||R,expensive:e.expensive_color||V}}_levelLabel(e,t){return"cheap"===e?(0,o.kg)("editor.energy_price.level_cheap",t,"Cheap"):"expensive"===e?(0,o.kg)("editor.energy_price.level_expensive",t,"Expensive"):(0,o.kg)("editor.energy_price.level_normal",t,"Normal")}_dayRefs(e,t){return q(e,t).map(e=>e.price)}renderGeneralTab(e,t,r,n){var s;const c=e,l=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en";return(0,a.gf)(t)?i.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this._editorStyles()}
      </style>
      <div class="module-general-settings">
        ${this._renderPriceSection(c,t,r,n,l)}
        ${this._renderDisplaySection(c,t,n,l)}
        ${this._renderEvSection(c,t,r,n,l)}
        ${this._renderLevelsSection(c,t,n,l)}
        ${this._renderAdjustSection(c,t,n,l)}
        ${this._renderSourceSection(c,t,n,l)}
      </div>
    `:(0,a.b5)(l,(0,o.kg)("editor.energy_price.pro_description",l,"Energy Price & EV is a Pro feature: your electricity price curve from Nord Pool, Tibber, Octopus and more, the cheapest time to run appliances, and a smart EV charge plan."),t)}_renderPriceSection(e,t,r,n,a){return i.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,o.kg)("editor.energy_price.price_section",a,"Electricity price")}
        </div>
        <div class="uc-ep-ed-desc">
          ${(0,o.kg)("editor.energy_price.price_section_desc",a,"Pick your price sensor. Nord Pool, Tibber, Octopus Energy, ENTSO-e, Energi Data Service and Amber are detected automatically.")}
        </div>
        ${this.renderEntityPickerWithVariables(t,r,"price_entity",e.price_entity||"",e=>{n({price_entity:e}),this.triggerPreviewUpdate()},["sensor","event"],(0,o.kg)("editor.energy_price.price_entity",a,"Price sensor"))}
        ${e.price_entity?this._renderDetectedNote(e,t,a):this._renderSuggestions(t,n,a)}
      </div>
    `}_renderDetectedNote(e,t,r){const n=new Date,a=this._priceData(e,t,n),s=q(a.slots,n).length,c=q(a.slots,n,1).length;if("none"===a.format)return i.qy`<div class="uc-ep-ed-note warn">
        <ha-icon icon="mdi:alert-outline"></ha-icon>
        <span>
          ${(0,o.kg)("editor.energy_price.detected_none",r,"This sensor has no price list, so only the current price is shown. Pick the sensor your price integration creates (for core Nord Pool or Tibber, choose the source under Advanced source).")}
        </span>
      </div>`;const l=K[a.format],d=(0,o.kg)("editor.energy_price.detected_counts",r,"{today} prices today, {tomorrow} tomorrow").replace("{today}",String(s)).replace("{tomorrow}",String(c));return i.qy`<div class="uc-ep-ed-note">
      <ha-icon icon="mdi:check-circle-outline"></ha-icon>
      <span>
        ${(0,o.kg)("editor.energy_price.detected",r,"Detected: {source}").replace("{source}",l)}
        ·
        ${a.loading?(0,o.kg)("editor.energy_price.loading",r,"Loading prices…"):d}
        ${a.error?i.qy`<br />${a.error}`:i.s6}
      </span>
    </div>`}_suggestedPriceEntities(e){var t;const r=(null==e?void 0:e.states)||{},i=null==e?void 0:e.entities,n=[];for(const[e,o]of Object.entries(r)){if(!e.startsWith("sensor."))continue;const r=D(e,null==o?void 0:o.attributes,null===(t=null==i?void 0:i[e])||void 0===t?void 0:t.platform);if("none"!==r&&"generic"!==r&&(n.push(e),n.length>=6))break}return n}_renderSuggestions(e,t,r){const n=this._suggestedPriceEntities(e);return n.length?i.qy`
      <div class="uc-ep-ed-sub">
        ${(0,o.kg)("editor.energy_price.suggestions",r,"Found price sensors — tap to use:")}
      </div>
      <div class="uc-ep-ed-chips">
        ${n.map(r=>{var n,o;return i.qy`<button
              type="button"
              class="uc-ep-ed-chip"
              @click=${()=>{t({price_entity:r}),this.triggerPreviewUpdate()}}
            >
              <ha-icon icon="mdi:flash"></ha-icon>
              <span>${String((null===(o=null===(n=e.states[r])||void 0===n?void 0:n.attributes)||void 0===o?void 0:o.friendly_name)||r)}</span>
            </button>`})}
      </div>
    `:i.qy``}_renderDisplaySection(e,t,r,n){const a=(i,n,o,a=!0)=>({title:n,description:o,hass:t,data:{[i]:a?!1!==e[i]:!0===e[i]},schema:[this.booleanField(String(i))],onChange:e=>{var t,n;r({[i]:null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t[i])&&void 0!==n?n:a}),this.triggerPreviewUpdate()}});return i.qy`
      ${this.renderSettingsSection((0,o.kg)("editor.energy_price.display_section",n,"Display"),(0,o.kg)("editor.energy_price.display_section_desc",n,"Choose what the card shows."),[{title:(0,o.kg)("editor.energy_price.title",n,"Title"),description:(0,o.kg)("editor.energy_price.title_desc",n,"Leave blank for “Electricity price”."),hass:t,data:{title:e.title||""},schema:[this.textField("title")],onChange:e=>{var t,i;r({title:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.title)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}},a("show_title",(0,o.kg)("editor.energy_price.show_title",n,"Show title"),(0,o.kg)("editor.energy_price.show_title_desc",n,"Header with the source name.")),a("show_current",(0,o.kg)("editor.energy_price.show_current",n,"Current price"),(0,o.kg)("editor.energy_price.show_current_desc",n,"Big current price with its cheap / normal / expensive level.")),a("show_stats",(0,o.kg)("editor.energy_price.show_stats",n,"Today’s low, average and high"),(0,o.kg)("editor.energy_price.show_stats_desc",n,"Three small figures under the price.")),a("show_chart",(0,o.kg)("editor.energy_price.show_chart",n,"Price chart"),(0,o.kg)("editor.energy_price.show_chart_desc",n,"Bars colored by price level, with the current time marked.")),a("show_tomorrow",(0,o.kg)("editor.energy_price.show_tomorrow",n,"Include tomorrow"),(0,o.kg)("editor.energy_price.show_tomorrow_desc",n,"Extend the chart once tomorrow’s prices are published (usually early afternoon).")),a("show_cheapest_window",(0,o.kg)("editor.energy_price.show_window",n,"Cheapest time to run"),(0,o.kg)("editor.energy_price.show_window_desc",n,"The cheapest block of time ahead, e.g. when to start the dishwasher."))])}
      ${!1!==e.show_cheapest_window?this.renderConditionalFieldsGroup((0,o.kg)("editor.energy_price.window_group",n,"Cheapest time to run"),i.qy`
                ${this.renderSliderField((0,o.kg)("editor.energy_price.window_hours",n,"Run length"),(0,o.kg)("editor.energy_price.window_hours_desc",n,"How long the appliance runs. The card finds the cheapest unbroken block this long."),G(e.window_hours,3),3,.5,12,.5,e=>r({window_hours:e})," h")}
                ${this.renderFieldSection((0,o.kg)("editor.energy_price.window_label",n,"Appliance name"),(0,o.kg)("editor.energy_price.window_label_desc",n,"Optional, e.g. “Dishwasher” → “Dishwasher: start at 02:00”."),t,{window_label:e.window_label||""},[this.textField("window_label")],e=>{var t,i;r({window_label:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.window_label)&&void 0!==i?i:""}),this.triggerPreviewUpdate()})}
              `):i.s6}
    `}_entityField(e,t,r,i,n,o,a){const s=t[r];return this.renderFieldSection(i,n,e,{[r]:"string"==typeof s?s:""},[{name:String(r),selector:{entity:{domain:o}}}],e=>{var t,i;a({[r]:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t[r])&&void 0!==i?i:""}),this.triggerPreviewUpdate()})}_numberField(e,t,r,i,n,o,a,s){var c;const d={mode:"box",step:null!==(c=a.step)&&void 0!==c?c:.01};return void 0!==a.min&&(d.min=a.min),void 0!==a.max&&(d.max=a.max),a.unit&&(d.unit_of_measurement=a.unit),this.renderFieldSection(i,n,e,{[r]:G(t[r],o)},[{name:String(r),selector:{number:d}}],e=>{var t;const i=l(null===(t=e.detail.value)||void 0===t?void 0:t[r]);s({[r]:null===i?o:i}),this.triggerPreviewUpdate()})}_renderEvSection(e,t,r,n,a){const s=!0===e.ev_enabled,c=e.ev_apply_mode||"none";return i.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,o.kg)("editor.energy_price.ev_section",a,"EV smart charging")}
        </div>
        ${this.renderFieldSection((0,o.kg)("editor.energy_price.ev_enabled",a,"Plan EV charging"),(0,o.kg)("editor.energy_price.ev_enabled_desc",a,"Plan the cheapest hours to reach your target battery level by departure."),t,{ev_enabled:s},[this.booleanField("ev_enabled")],e=>{var t;n({ev_enabled:!0===(null===(t=e.detail.value)||void 0===t?void 0:t.ev_enabled)}),this.triggerPreviewUpdate()})}
        ${s?i.qy`
                <div class="field-container">
                  <div class="field-title">
                    ${(0,o.kg)("editor.energy_price.ev_soc_entity",a,"Battery level sensor")}
                  </div>
                  <div class="field-description">
                    ${(0,o.kg)("editor.energy_price.ev_soc_entity_desc",a,"Your car’s state of charge in %. Without it the plan uses a fixed number of hours (Advanced charging).")}
                  </div>
                  ${this.renderEntityPickerWithVariables(t,r,"ev_soc_entity",e.ev_soc_entity||"",e=>{n({ev_soc_entity:e}),this.triggerPreviewUpdate()},["sensor","input_number","number"])}
                </div>
                ${this._entityField(t,e,"ev_charger_entity",(0,o.kg)("editor.energy_price.ev_charger_entity",a,"Charger switch"),(0,o.kg)("editor.energy_price.ev_charger_entity_desc",a,"Optional: the switch that starts and stops charging. Shows whether the charger is on."),["switch","input_boolean"],n)}
                ${this.renderSliderField((0,o.kg)("editor.energy_price.ev_target_soc",a,"Target level"),(0,o.kg)("editor.energy_price.ev_target_soc_desc",a,"Charge up to this level."),G(e.ev_target_soc,80),80,10,100,5,e=>n({ev_target_soc:e}),"%")}
                ${this.renderFieldSection((0,o.kg)("editor.energy_price.ev_departure_time",a,"Departure"),(0,o.kg)("editor.energy_price.ev_departure_time_desc",a,"The car should be charged by this time (next occurrence)."),t,{ev_departure_time:`${e.ev_departure_time||I}:00`},[{name:"ev_departure_time",selector:{time:{}}}],e=>{var t;const r=_(null===(t=e.detail.value)||void 0===t?void 0:t.ev_departure_time);if(!r)return;const i=`${String(r.hours).padStart(2,"0")}:${String(r.minutes).padStart(2,"0")}`;n({ev_departure_time:i}),this.triggerPreviewUpdate()})}
                ${this._numberField(t,e,"ev_capacity_kwh",(0,o.kg)("editor.energy_price.ev_capacity",a,"Battery size"),(0,o.kg)("editor.energy_price.ev_capacity_desc",a,"Usable battery capacity."),60,{min:1,max:300,step:1,unit:"kWh"},n)}
                ${this._numberField(t,e,"ev_power_kw",(0,o.kg)("editor.energy_price.ev_power",a,"Charging power"),(0,o.kg)("editor.energy_price.ev_power_desc",a,"Typical home chargers: 3.7, 7.4 or 11 kW."),7.4,{min:.5,max:350,step:.1,unit:"kW"},n)}
                ${this.renderConditionalFieldsGroup((0,o.kg)("editor.energy_price.ev_advanced",a,"Advanced charging"),i.qy`
                    ${this.renderFieldSection((0,o.kg)("editor.energy_price.ev_allow_split",a,"Split into cheapest hours"),(0,o.kg)("editor.energy_price.ev_allow_split_desc",a,"On: pick the cheapest hours anywhere before departure. Off: one unbroken session."),t,{ev_allow_split:!1!==e.ev_allow_split},[this.booleanField("ev_allow_split")],e=>{var t;n({ev_allow_split:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.ev_allow_split)}),this.triggerPreviewUpdate()})}
                    ${this._numberField(t,e,"ev_efficiency",(0,o.kg)("editor.energy_price.ev_efficiency",a,"Charging efficiency"),(0,o.kg)("editor.energy_price.ev_efficiency_desc",a,"Share of grid energy that ends up in the battery."),90,{min:50,max:100,step:1,unit:"%"},n)}
                    ${this._numberField(t,e,"ev_manual_hours",(0,o.kg)("editor.energy_price.ev_manual_hours",a,"Hours to charge"),(0,o.kg)("editor.energy_price.ev_manual_hours_desc",a,"Used when there is no battery level sensor."),4,{min:0,max:48,step:.5,unit:"h"},n)}
                    ${this._entityField(t,e,"ev_target_soc_entity",(0,o.kg)("editor.energy_price.ev_target_entity",a,"Target level entity"),(0,o.kg)("editor.energy_price.ev_target_entity_desc",a,"Optional number / input_number that overrides the target level."),["number","input_number","sensor"],n)}
                    ${this._entityField(t,e,"ev_departure_entity",(0,o.kg)("editor.energy_price.ev_departure_entity",a,"Departure entity"),(0,o.kg)("editor.energy_price.ev_departure_entity_desc",a,"Optional input_datetime or timestamp sensor that overrides the departure time."),["input_datetime","sensor"],n)}
                    ${this._entityField(t,e,"ev_power_entity",(0,o.kg)("editor.energy_price.ev_power_entity",a,"Charger power sensor"),(0,o.kg)("editor.energy_price.ev_power_entity_desc",a,"Optional. While it reports more than 0 it replaces the charging power above."),["sensor"],n)}
                  `)}
                ${this.renderConditionalFieldsGroup((0,o.kg)("editor.energy_price.ev_apply_group",a,"Apply plan button"),i.qy`
                    <div class="uc-ep-ed-desc">
                      ${(0,o.kg)("editor.energy_price.ev_apply_desc",a,"Nothing runs on its own: the button only acts when you tap it. For fully automatic charging, send the plan to a script or set helper times that an automation uses.")}
                    </div>
                    ${this.renderSegmentedField((0,o.kg)("editor.energy_price.ev_apply_mode",a,"Button"),"",c,[{value:"none",label:(0,o.kg)("editor.energy_price.apply_none",a,"Off")},{value:"charger",label:(0,o.kg)("editor.energy_price.apply_charger",a,"Charger on/off")},{value:"script",label:(0,o.kg)("editor.energy_price.apply_script",a,"Run script")},{value:"datetime",label:(0,o.kg)("editor.energy_price.apply_datetime",a,"Set helper times")}],e=>n({ev_apply_mode:e||"none"}))}
                    ${"script"===c?this._entityField(t,e,"ev_script_entity",(0,o.kg)("editor.energy_price.ev_script",a,"Script"),(0,o.kg)("editor.energy_price.ev_script_desc",a,"Receives charge_start, charge_end, ranges, kwh, cost, target_soc and departure as variables."),["script"],n):i.s6}
                    ${"datetime"===c?i.qy`
                            ${this._entityField(t,e,"ev_start_entity",(0,o.kg)("editor.energy_price.ev_start_entity",a,"Start time helper"),(0,o.kg)("editor.energy_price.ev_start_entity_desc",a,"input_datetime set to the first planned start."),["input_datetime"],n)}
                            ${this._entityField(t,e,"ev_end_entity",(0,o.kg)("editor.energy_price.ev_end_entity",a,"End time helper"),(0,o.kg)("editor.energy_price.ev_end_entity_desc",a,"Optional input_datetime set to the last planned end."),["input_datetime"],n)}
                          `:i.s6}
                    ${"charger"!==c||e.ev_charger_entity?i.s6:i.qy`<div class="uc-ep-ed-note warn">
                            <ha-icon icon="mdi:alert-outline"></ha-icon>
                            <span>
                              ${(0,o.kg)("editor.energy_price.apply_needs_charger",a,"Pick the charger switch above to use this button.")}
                            </span>
                          </div>`}
                  `)}
              `:i.s6}
      </div>
    `}_renderLevelsSection(e,t,r,n){const a=e.level_mode||"relative";return i.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,o.kg)("editor.energy_price.levels_section",n,"Price levels")}
        </div>
        ${this.renderSegmentedField((0,o.kg)("editor.energy_price.level_mode",n,"Cheap and expensive by"),(0,o.kg)("editor.energy_price.level_mode_desc",n,"Relative: position in the day’s low–high range. Percentile: share of the day’s prices. Fixed: your own price limits."),a,[{value:"relative",label:(0,o.kg)("editor.energy_price.mode_relative",n,"Relative")},{value:"percentile",label:(0,o.kg)("editor.energy_price.mode_percentile",n,"Percentile")},{value:"absolute",label:(0,o.kg)("editor.energy_price.mode_absolute",n,"Fixed")}],e=>r({level_mode:e||"relative"}))}
        ${"absolute"===a?i.qy`
                ${this._numberField(t,e,"cheap_price",(0,o.kg)("editor.energy_price.cheap_price",n,"Cheap at or below"),(0,o.kg)("editor.energy_price.cheap_price_desc",n,"In the displayed price unit."),.1,{step:.001},r)}
                ${this._numberField(t,e,"expensive_price",(0,o.kg)("editor.energy_price.expensive_price",n,"Expensive at or above"),(0,o.kg)("editor.energy_price.expensive_price_desc",n,"In the displayed price unit."),.3,{step:.001},r)}
              `:i.qy`
                ${this.renderSliderField((0,o.kg)("editor.energy_price.cheap_percent",n,"Cheap up to"),"",G(e.cheap_percent,33),33,0,100,1,e=>r({cheap_percent:e}),"%")}
                ${this.renderSliderField((0,o.kg)("editor.energy_price.expensive_percent",n,"Expensive from"),"",G(e.expensive_percent,67),67,0,100,1,e=>r({expensive_percent:e}),"%")}
              `}
        ${this.renderConditionalFieldsGroup((0,o.kg)("editor.energy_price.colors_group",n,"Level colors"),i.qy`
            ${this.renderColorField((0,o.kg)("editor.energy_price.cheap_color",n,"Cheap"),"",t,e.cheap_color||"",H,e=>r({cheap_color:e}))}
            ${this.renderColorField((0,o.kg)("editor.energy_price.normal_color",n,"Normal"),"",t,e.normal_color||"",R,e=>r({normal_color:e}))}
            ${this.renderColorField((0,o.kg)("editor.energy_price.expensive_color",n,"Expensive"),"",t,e.expensive_color||"",V,e=>r({expensive_color:e}))}
          `)}
      </div>
    `}_renderAdjustSection(e,t,r,n){return i.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,o.kg)("editor.energy_price.adjust_section",n,"Price adjustments")}
        </div>
        <div class="uc-ep-ed-desc">
          ${(0,o.kg)("editor.energy_price.adjust_section_desc",n,"Shown price = source price × multiplier + fee. Use it for VAT, grid fees or a supplier markup when your sensor shows the bare spot price.")}
        </div>
        ${this._numberField(t,e,"price_multiplier",(0,o.kg)("editor.energy_price.multiplier",n,"Multiplier"),(0,o.kg)("editor.energy_price.multiplier_desc",n,"e.g. 1.25 for 25% VAT."),1,{min:0,max:1e3,step:.01},r)}
        ${this._numberField(t,e,"price_additive",(0,o.kg)("editor.energy_price.additive",n,"Fixed fee per kWh"),(0,o.kg)("editor.energy_price.additive_desc",n,"Added after the multiplier."),0,{step:.001},r)}
        ${this.renderFieldSection((0,o.kg)("editor.energy_price.unit_override",n,"Unit"),(0,o.kg)("editor.energy_price.unit_override_desc",n,"Leave blank to use the sensor’s unit, e.g. “SEK/kWh”."),t,{unit_override:e.unit_override||""},[this.textField("unit_override")],e=>{var t,i;r({unit_override:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.unit_override)&&void 0!==i?i:""}),this.triggerPreviewUpdate()})}
        ${this.renderSliderField((0,o.kg)("editor.energy_price.decimals",n,"Decimals"),"",G(e.decimals,2),2,0,4,1,e=>r({decimals:e}),"")}
      </div>
    `}_renderSourceSection(e,t,r,n){const a=e.price_source||"auto",s=[{value:"auto",label:(0,o.kg)("editor.energy_price.source_auto",n,"Auto-detect")},{value:"nordpool",label:"Nord Pool (HACS)"},{value:"nordpool_core",label:"Nord Pool (core)"},{value:"tibber",label:"Tibber"},{value:"octopus",label:"Octopus Energy"},{value:"entsoe",label:"ENTSO-e"},{value:"energi_data_service",label:"Energi Data Service"},{value:"amber",label:"Amber Electric"},{value:"generic",label:(0,o.kg)("editor.energy_price.source_generic",n,"Generic list")}];return i.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,o.kg)("editor.energy_price.source_section",n,"Advanced source")}
        </div>
        ${this.renderFieldSection((0,o.kg)("editor.energy_price.price_source",n,"Price source"),(0,o.kg)("editor.energy_price.price_source_desc",n,"Auto-detect works for almost everyone. Pick a source only if detection gets it wrong."),t,{price_source:a},[this.selectField("price_source",s)],e=>{var t;r({price_source:(null===(t=e.detail.value)||void 0===t?void 0:t.price_source)||"auto"}),this.triggerPreviewUpdate()})}
        ${"nordpool_core"===a||"tibber"===a||"auto"===a?this.renderFieldSection((0,o.kg)("editor.energy_price.source_hint",n,"Area or home name"),(0,o.kg)("editor.energy_price.source_hint_desc",n,"Core Nord Pool area (e.g. SE3) or Tibber home name when your account has several."),t,{source_hint:e.source_hint||""},[this.textField("source_hint")],e=>{var t,i;r({source_hint:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.source_hint)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}):i.s6}
        ${"nordpool_core"===a?this.renderFieldSection((0,o.kg)("editor.energy_price.config_entry",n,"Nord Pool config entry"),(0,o.kg)("editor.energy_price.config_entry_desc",n,"Usually found automatically from the sensor. Only needed if prices do not load."),t,{nordpool_config_entry:e.nordpool_config_entry||""},[{name:"nordpool_config_entry",selector:{config_entry:{integration:"nordpool"}}}],e=>{var t,i;r({nordpool_config_entry:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.nordpool_config_entry)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}):i.s6}
        ${this.renderSliderField((0,o.kg)("editor.energy_price.chart_hours",n,"Chart span"),(0,o.kg)("editor.energy_price.chart_hours_desc",n,"0 shows today (and tomorrow when published). Otherwise a rolling window from the current hour."),G(e.chart_hours,0),0,0,48,1,e=>r({chart_hours:e})," h")}
        ${this.renderSliderField((0,o.kg)("editor.energy_price.chart_height",n,"Chart height"),"",G(e.chart_height,W),W,60,300,10,e=>r({chart_height:e}),"px")}
      </div>
    `}renderPreview(e,t,r,n){var a,s;const c=e,l=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";if(!c.price_entity)return this.renderGradientErrorState((0,o.kg)("editor.energy_price.setup_title",l,"Pick your electricity price sensor"),(0,o.kg)("editor.energy_price.setup_desc",l,"Select a price sensor in the General tab"),"mdi:ev-station");if(!(null===(s=null==t?void 0:t.states)||void 0===s?void 0:s[c.price_entity]))return this.renderGradientErrorState((0,o.kg)("editor.energy_price.missing_title",l,"Price sensor not found"),c.price_entity,"mdi:flash-off");const d=new Date,p=this._priceData(c,t,d),u=this._colors(c),g=this._levelConfig(c),_=c.ev_enabled?this._evView(c,t,p.slots,d):null,h=this.buildStyleString(this.buildDesignStyles(e,t)),v=this.getHoverEffectClass(e),m=i.qy`
      ${!1!==c.show_title?this._renderHeader(c,p,l):i.s6}
      ${p.error&&!p.slots.length?i.qy`<div class="uc-ep-banner">
              <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
              <span>${p.error}</span>
            </div>`:i.s6}
      ${!1!==c.show_current?this._renderCurrent(c,t,p,g,u,l,d):i.s6}
      ${!1!==c.show_stats?this._renderStats(c,p,l,d):i.s6}
      ${!1!==c.show_chart?this._renderChart(c,p,g,u,_,l,d):i.s6}
      ${!1!==c.show_cheapest_window?this._renderWindow(c,p,l,d):i.s6}
      ${_?this._renderEv(c,t,p,_,l,d):i.s6}
    `;return i.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div
        class="uc-ep-wrapper ${v}"
        data-uc-role="pane"
        style="background: var(--uc-pane-bg, var(--card-background-color)); ${h}"
      >
        ${this.wrapWithAnimation(m,e,t)}
      </div>
    `}_renderHeader(e,t,r){var n;const a=(null===(n=e.title)||void 0===n?void 0:n.trim())||(0,o.kg)("editor.energy_price.default_title",r,"Electricity price"),s=K[t.format];return i.qy`<div class="uc-ep-header">
      <ha-icon icon="mdi:flash"></ha-icon>
      <span class="uc-ep-title">${a}</span>
      ${s?i.qy`<span class="uc-ep-source">${s}</span>`:i.s6}
    </div>`}_renderCurrent(e,t,r,n,a,s,c){if(null===r.current)return i.qy`<div class="uc-ep-muted">
        ${r.loading?(0,o.kg)("editor.energy_price.loading",s,"Loading prices…"):(0,o.kg)("editor.energy_price.no_current",s,"No current price yet.")}
      </div>`;const l=A(r.current,this._dayRefs(r.slots,c),n),d=a[l],p=r.nextSlot,u=r.currentSlot?(0,o.kg)("editor.energy_price.until",s,"until {time}").replace("{time}",this._fmtTime(r.currentSlot.end,s,c)):"";return i.qy`<button
      type="button"
      class="uc-ep-current"
      title=${(0,o.kg)("editor.energy_price.more_info",s,"Show details")}
      @click=${t=>this._moreInfo(t,e.price_entity)}
    >
      <div class="uc-ep-current-main">
        <span class="uc-ep-price">${this._fmtPrice(r.current,e,s)}</span>
        ${r.unit?i.qy`<span class="uc-ep-unit">${r.unit}</span>`:i.s6}
      </div>
      <div class="uc-ep-current-side">
        <span class="uc-ep-level" style="--uc-ep-level: ${d};"
          >${this._levelLabel(l,s)}</span
        >
        ${u?i.qy`<span class="uc-ep-muted">${u}</span>`:i.s6}
        ${p?i.qy`<span class="uc-ep-muted uc-ep-next">
                <ha-icon
                  icon=${p.price>r.current?"mdi:arrow-top-right":p.price<r.current?"mdi:arrow-bottom-right":"mdi:arrow-right"}
                ></ha-icon>
                ${this._fmtPrice(p.price,e,s)}
              </span>`:i.s6}
      </div>
    </button>`}_renderStats(e,t,r,n){const a=function(e){if(!e.length)return null;let t=e[0],r=e[0],i=0,n=0;for(const o of e){o.price<t.price&&(t=o),o.price>r.price&&(r=o);const e=Math.max(0,o.end.getTime()-o.start.getTime());i+=o.price*e,n+=e}const o=n>0?i/n:e.reduce((e,t)=>e+t.price,0)/e.length;return{min:t.price,max:r.price,avg:o,minSlot:t,maxSlot:r,count:e.length}}(q(t.slots,n));if(!a)return i.s6;const s=(t,o,a)=>i.qy`<div class="uc-ep-stat">
        <span class="uc-ep-stat-label">${t}</span>
        <span class="uc-ep-stat-value">${this._fmtPrice(o,e,r)}</span>
        ${a?i.qy`<span class="uc-ep-stat-time">${this._fmtTime(a,r,n)}</span>`:i.s6}
      </div>`;return i.qy`<div class="uc-ep-stats">
      ${s((0,o.kg)("editor.energy_price.stat_low",r,"Low"),a.min,a.minSlot.start)}
      ${s((0,o.kg)("editor.energy_price.stat_avg",r,"Average"),a.avg,null)}
      ${s((0,o.kg)("editor.energy_price.stat_high",r,"High"),a.max,a.maxSlot.start)}
    </div>`}_renderChart(e,t,r,n,a,s,l){const d=function(e,t,r,i){if(r>0){const e=new Date(t.getTime());return e.setMinutes(0,0,0),{start:e,end:new Date(e.getTime()+r*c)}}const n=u(t),o=u(t,1),a=i&&q(e,t,1).length>0;return{start:n.start,end:a?o.end:n.end}}(t.slots,l,G(e.chart_hours,0),!1!==e.show_tomorrow),p=function(e,t,r){const i=t.getTime(),n=r.getTime();return e.filter(e=>e.end.getTime()>i&&e.start.getTime()<n)}(t.slots,d.start,d.end);if(!p.length)return t.loading?i.qy``:i.qy`<div class="uc-ep-muted uc-ep-nochart">
        ${"none"===t.format?(0,o.kg)("editor.energy_price.no_list",s,"This sensor has no price list to chart. Pick the sensor your price integration creates."):(0,o.kg)("editor.energy_price.no_prices",s,"No prices published for this period yet.")}
      </div>`;const _=d.start.getTime(),h=Math.max(1,d.end.getTime()-_),v=1e3,m=100,y=e=>(J(e,_,_+h)-_)/h*v;let f=Math.min(0,...p.map(e=>e.price)),w=Math.max(0,...p.map(e=>e.price));w-f<1e-9&&(w=f+1);const x=.06*(w-f);w+=x,f<0&&(f-=x);const b=e=>m-(e-f)/(w-f)*m,k=b(0),$=l.getTime(),S=new Map,T=e=>{const r=g(e);let i=S.get(r);return i||(i=this._dayRefs(t.slots,e),S.set(r,i)),i},P=G(e.window_hours,3),F=!1!==e.show_cheapest_window?N(t.slots,l,P):null,D=p.map(e=>{const t=y(e.start.getTime()),o=y(e.end.getTime()),a=Math.max(.5,o-t-Math.min(2,.15*(o-t))),s=Math.min(b(e.price),k),c=Math.max(.8,Math.abs(k-b(e.price))),l=A(e.price,T(e.start),r),d=e.end.getTime()<=$,p=e.start.getTime()<=$&&$<e.end.getTime();return i.JW`<rect
        x=${t.toFixed(2)}
        y=${s.toFixed(2)}
        width=${a.toFixed(2)}
        height=${c.toFixed(2)}
        rx="1.5"
        style="fill: ${n[l]}; opacity: ${d?.35:p?1:.8};"
      ></rect>`}),C=[];F&&C.push(i.JW`<rect class="uc-ep-band" x=${y(F.start.getTime()).toFixed(2)} y="0"
          width=${Math.max(1,y(F.end.getTime())-y(F.start.getTime())).toFixed(2)}
          height=${m}></rect>`);const E=a&&a.plan.ranges.length?a.plan.ranges.map(e=>i.qy`<span
                class="uc-ep-plan-strip"
                style="left: ${(y(e.start.getTime())/v*100).toFixed(2)}%; width: ${((y(e.end.getTime())-y(e.start.getTime()))/v*100).toFixed(2)}%;"
              ></span>`):[],M=$>=_&&$<=_+h,z=this._chartTicks(d,s),O=J(G(e.chart_height,W),40,600),U=t.unit,L=(0,o.kg)("editor.energy_price.chart_label",s,"Price chart from {start} to {end}").replace("{start}",this._fmtTime(d.start,s,l)).replace("{end}",this._fmtTime(d.end,s,l));return i.qy`<div class="uc-ep-chart">
      <div class="uc-ep-chart-area" style="height: ${O}px;">
        <span class="uc-ep-axis uc-ep-axis-top"
          >${this._fmtPrice(w-x,e,s)}${U?` ${U}`:""}</span
        >
        <svg
          viewBox="0 0 ${v} ${m}"
          preserveAspectRatio="none"
          role="img"
          aria-label=${L}
          class="uc-ep-svg"
        >
          ${C}
          ${f<0?i.JW`<line class="uc-ep-zero" x1="0" x2=${v} y1=${k.toFixed(2)} y2=${k.toFixed(2)}></line>`:i.s6}
          ${D}
        </svg>
        ${M?i.qy`<span
                class="uc-ep-now"
                style="left: ${(y($)/v*100).toFixed(2)}%;"
              ></span>`:i.s6}
      </div>
      ${E.length?i.qy`<div class="uc-ep-plan-row">${E}</div>`:i.s6}
      <div class="uc-ep-ticks">
        ${z.map(e=>i.qy`<span
              class="uc-ep-tick ${e.pct<4?"start":e.pct>96?"end":""}"
              style="left: ${e.pct.toFixed(2)}%;"
              >${e.label}</span
            >`)}
      </div>
      <div class="uc-ep-legend">
        <span><i style="background: ${n.cheap};"></i>${this._levelLabel("cheap",s)}</span>
        <span
          ><i style="background: ${n.normal};"></i>${this._levelLabel("normal",s)}</span
        >
        <span
          ><i style="background: ${n.expensive};"></i
          >${this._levelLabel("expensive",s)}</span
        >
        ${F?i.qy`<span
                ><i class="band"></i
                >${(0,o.kg)("editor.energy_price.legend_window",s,"Cheapest run")}</span
              >`:i.s6}
        ${E.length?i.qy`<span
                ><i class="plan"></i
                >${(0,o.kg)("editor.energy_price.legend_plan",s,"EV charging")}</span
              >`:i.s6}
      </div>
    </div>`}_chartTicks(e,t){const r=e.start.getTime(),i=e.end.getTime()-r;if(i<=0)return[];const n=i/j,o=n<=8?2:n<=14?3:6,a=[],s=new Date(r);s.setMinutes(0,0,0),s.getTime()<r&&s.setTime(s.getTime()+j);for(let n=0;n<80&&s.getTime()<=e.end.getTime();n++){if(s.getHours()%o===0){let e;try{e=s.toLocaleTimeString(t,{hour:"2-digit",minute:"2-digit"})}catch(t){e=`${String(s.getHours()).padStart(2,"0")}:00`}a.push({pct:(s.getTime()-r)/i*100,label:e})}s.setTime(s.getTime()+j)}return a}_renderWindow(e,t,r,n){if(!t.slots.length)return i.s6;const a=G(e.window_hours,3),s=N(t.slots,n,a),c=this._fmtDuration(a*j,r);if(!s)return i.qy`<div class="uc-ep-row">
        <ha-icon icon="mdi:clock-outline"></ha-icon>
        <div class="uc-ep-row-text">
          <span class="uc-ep-muted">
            ${(0,o.kg)("editor.energy_price.window_none",r,"Not enough published prices ahead for a {length} run.").replace("{length}",c)}
          </span>
        </div>
      </div>`;const l=s.start.getTime()-n.getTime()<6e4,d=l?(0,o.kg)("editor.energy_price.start_now",r,"now"):this._fmtTime(s.start,r,n),p=(e.window_label||"").trim(),u=p?(0,o.kg)("editor.energy_price.window_labeled",r,"{label}: start {time}").replace("{label}",p).replace("{time}",d):(0,o.kg)("editor.energy_price.window_headline",r,"Cheapest {length}: start {time}").replace("{length}",c).replace("{time}",d),g=`${this._fmtPrice(s.avgPrice,e,r)}${t.unit?` ${t.unit}`:""}`,_=l?(0,o.kg)("editor.energy_price.window_detail_now",r,"Until {end} · avg {price}").replace("{end}",this._fmtTime(s.end,r,n)).replace("{price}",g):(0,o.kg)("editor.energy_price.window_detail",r,"{range} · avg {price} · in {wait}").replace("{range}",this._fmtRange(s,r,n)).replace("{price}",g).replace("{wait}",this._fmtDuration(s.start.getTime()-n.getTime(),r));return i.qy`<div class="uc-ep-row">
      <ha-icon icon=${l?"mdi:play-circle-outline":"mdi:clock-check-outline"}></ha-icon>
      <div class="uc-ep-row-text">
        <span class="uc-ep-row-title">${u}</span>
        <span class="uc-ep-muted">${_}</span>
      </div>
    </div>`}_renderEv(e,t,r,n,a,s){var c,l,d,p;const u=n.plan,g=n.hoursNeeded<=0,_=null===n.soc?null:Math.round(n.soc),h=g?(0,o.kg)("editor.energy_price.ev_at_target",a,"At target ({target}%) — no charging needed").replace("{target}",String(Math.round(n.target))):n.chargingNow?(0,o.kg)("editor.energy_price.ev_charge_now",a,"Charge now — this is a planned cheap slot"):u.ranges.length?(0,o.kg)("editor.energy_price.ev_next",a,"Next charging: {time}").replace("{time}",this._fmtTime(null!==(l=null===(c=u.ranges[0])||void 0===c?void 0:c.start)&&void 0!==l?l:s,a,s)):(0,o.kg)("editor.energy_price.ev_no_plan",a,"No prices available to plan with yet"),v=u.kwh>0?`${this._fmtPrice(u.cost,Object.assign(Object.assign({},e),{decimals:2}),a)}${r.currency?` ${r.currency}`:""}`:"",m=g?"":(0,o.kg)("editor.energy_price.ev_summary",a,"{kwh} kWh · {hours} · by {departure}").replace("{kwh}",n.kwhNeeded.toFixed(1)).replace("{hours}",this._fmtDuration(n.hoursNeeded*j,a)).replace("{departure}",this._fmtTime(n.departure,a,s));let y="";g||u.feasible||(y=n.pricesShort?(0,o.kg)("editor.energy_price.ev_prices_short",a,"Prices after {time} are not published yet; the plan uses what is known.").replace("{time}",this._fmtTime(null!==(p=null===(d=r.slots[r.slots.length-1])||void 0===d?void 0:d.end)&&void 0!==p?p:s,a,s)):(0,o.kg)("editor.energy_price.ev_short",a,"Not enough time before departure: {short} short.").replace("{short}",this._fmtDuration(u.shortfallHours*j,a)));const f=this._feedback.get(e.id),w=f&&Date.now()-f.at<5e3;return i.qy`<div class="uc-ep-ev">
      <div class="uc-ep-ev-head">
        <ha-icon icon=${n.chargerOn?"mdi:ev-station":"mdi:car-electric-outline"}></ha-icon>
        <span class="uc-ep-row-title">
          ${(0,o.kg)("editor.energy_price.ev_title",a,"EV charge plan")}
        </span>
        ${null!==n.chargerOn?i.qy`<span class="uc-ep-charger ${n.chargerOn?"on":""}">
                ${n.chargerOn?(0,o.kg)("editor.energy_price.charger_on",a,"Charging"):(0,o.kg)("editor.energy_price.charger_off",a,"Charger off")}
              </span>`:i.s6}
      </div>
      ${null!==_?i.qy`<div
              class="uc-ep-soc"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow=${_}
            >
              <span class="uc-ep-soc-fill" style="width: ${_}%;"></span>
              <span class="uc-ep-soc-target" style="left: ${Math.round(n.target)}%;"></span>
              <span class="uc-ep-soc-text">${_}% → ${Math.round(n.target)}%</span>
            </div>`:i.s6}
      <div class="uc-ep-ev-status ${n.chargingNow?"now":""}">${h}</div>
      ${m?i.qy`<div class="uc-ep-muted">${m}</div>`:i.s6}
      ${!g&&u.ranges.length?i.qy`<div class="uc-ep-ranges">
                ${u.ranges.slice(0,6).map(e=>i.qy`<span class="uc-ep-range">${this._fmtRange(e,a,s)}</span>`)}
              </div>
              ${v?i.qy`<div class="uc-ep-muted">
                      ${(0,o.kg)("editor.energy_price.ev_cost",a,"Estimated cost {cost} · avg {price}").replace("{cost}",v).replace("{price}",`${this._fmtPrice(u.avgPrice,e,a)}${r.unit?` ${r.unit}`:""}`)}
                    </div>`:i.s6}`:i.s6}
      ${y?i.qy`<div class="uc-ep-warn">
              <ha-icon icon="mdi:alert-outline"></ha-icon><span>${y}</span>
            </div>`:i.s6}
      ${this._renderApplyButton(e,t,n,a,s)}
      ${w&&f?i.qy`<div class="uc-ep-feedback ${f.error?"error":""}" role="status">
              ${f.message}
            </div>`:i.s6}
    </div>`}_renderApplyButton(e,t,r,n,a){const s=e.ev_apply_mode||"none";if("none"===s)return i.s6;const c=this._busy.has(e.id);let l,d,p=c;if("charger"===s){if(!e.ev_charger_entity)return i.s6;r.chargerOn?(l=(0,o.kg)("editor.energy_price.apply_stop",n,"Stop charging"),d="mdi:stop-circle-outline"):(l=r.chargingNow?(0,o.kg)("editor.energy_price.apply_start_planned",n,"Start charging (planned slot)"):(0,o.kg)("editor.energy_price.apply_start",n,"Start charging now"),d="mdi:play-circle-outline")}else if("script"===s){if(!e.ev_script_entity)return i.s6;l=(0,o.kg)("editor.energy_price.apply_send",n,"Send plan to script"),d="mdi:script-text-play-outline",p=p||!r.plan.ranges.length}else{if(!e.ev_start_entity)return i.s6;const t=r.plan.ranges[0];l=t?(0,o.kg)("editor.energy_price.apply_set",n,"Set start to {time}").replace("{time}",this._fmtTime(t.start,n,a)):(0,o.kg)("editor.energy_price.apply_set_none",n,"Set start time"),d="mdi:calendar-clock",p=p||!t}return i.qy`<button
      type="button"
      class="uc-ep-apply"
      ?disabled=${p}
      @click=${i=>this._apply(i,e,t,r,n)}
    >
      <ha-icon icon=${c?"mdi:loading":d}></ha-icon>
      <span>${l}</span>
    </button>`}_apply(e,t,r,i,n){if(e.stopPropagation(),!(null==r?void 0:r.callService)||this._busy.has(t.id))return;const a=t.ev_apply_mode||"none",s=[],c=i.plan.ranges[0],l=i.plan.ranges[i.plan.ranges.length-1];if("charger"===a&&t.ev_charger_entity?s.push({domain:"homeassistant",service:i.chargerOn?"turn_off":"turn_on",data:{entity_id:t.ev_charger_entity}}):"script"===a&&t.ev_script_entity&&c&&l?s.push({domain:"script",service:"turn_on",data:{entity_id:t.ev_script_entity,variables:{charge_start:c.start.toISOString(),charge_end:l.end.toISOString(),ranges:i.plan.ranges.map(e=>({start:e.start.toISOString(),end:e.end.toISOString()})),kwh:Math.round(100*i.plan.kwh)/100,cost:Math.round(100*i.plan.cost)/100,hours:Math.round(100*i.plan.hoursPlanned)/100,target_soc:i.target,departure:i.departure.toISOString()}}}):"datetime"===a&&t.ev_start_entity&&c&&l&&(s.push(this._datetimeCall(r,t.ev_start_entity,c.start)),t.ev_end_entity&&s.push(this._datetimeCall(r,t.ev_end_entity,l.end))),!s.length)return;this._busy.add(t.id),this.triggerPreviewUpdate(!0);const d=e.currentTarget||e.target;s.reduce((e,t)=>e.then(()=>r.callService(t.domain,t.service,t.data)),Promise.resolve()).then(()=>{this._feedback.set(t.id,{message:(0,o.kg)("editor.energy_price.apply_done",n,"Done"),error:!1,at:Date.now()})}).catch(e=>{const r=`${(0,o.kg)("editor.energy_price.apply_failed",n,"Could not apply the plan")}: ${String(e instanceof Error?e.message:e)}`;this._feedback.set(t.id,{message:r,error:!0,at:Date.now()}),(d||document.body).dispatchEvent(new CustomEvent("hass-notification",{bubbles:!0,composed:!0,detail:{message:r}}))}).then(()=>{this._busy.delete(t.id),this.triggerPreviewUpdate(!0),setTimeout(()=>this.triggerPreviewUpdate(!0),5100)})}_datetimeCall(e,t,r){var i;const n=(null===(i=e.states[t])||void 0===i?void 0:i.attributes)||{},o=g(r),a=`${String(r.getHours()).padStart(2,"0")}:${String(r.getMinutes()).padStart(2,"0")}:00`,s={entity_id:t};return!1===n.has_date?s.time=a:!1===n.has_time?s.date=o:s.datetime=`${o} ${a}`,{domain:"input_datetime",service:"set_datetime",data:s}}_moreInfo(e,t){t&&(e.stopPropagation(),(e.currentTarget||e.target||document.body).dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}})))}_editorStyles(){return`\n      .uc-ep-ed-desc { font-size: 13px; color: var(--secondary-text-color); margin: 0 0 12px; line-height: 1.4; }\n      .uc-ep-ed-sub { font-size: 13px; color: var(--secondary-text-color); margin: 8px 0 6px; }\n      .uc-ep-ed-note { display: flex; gap: 8px; align-items: flex-start; font-size: 13px; line-height: 1.4; color: var(--primary-text-color); padding: 10px 12px; border-radius: 8px; background: color-mix(in srgb, var(--success-color, #43a047) 12%, transparent); margin-top: 8px; }\n      .uc-ep-ed-note.warn { background: color-mix(in srgb, var(--warning-color, #ffa600) 14%, transparent); }\n      .uc-ep-ed-note ha-icon { --mdc-icon-size: 18px; flex: none; }\n      .uc-ep-ed-chips { display: flex; flex-wrap: wrap; gap: 8px; }\n      .uc-ep-ed-chip { display: inline-flex; align-items: center; gap: 6px; min-height: 44px; padding: 0 14px; border-radius: 22px; border: 1px solid var(--divider-color); background: var(--secondary-background-color); color: var(--primary-text-color); font: inherit; font-size: 13px; cursor: pointer; max-width: 100%; }\n      .uc-ep-ed-chip span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n      .uc-ep-ed-chip ha-icon { --mdc-icon-size: 18px; color: var(--primary-color); flex: none; }\n      ${n.m.getSliderStyles()}\n    `}getStyles(){return"\n      .uc-ep-wrapper { box-sizing: border-box; padding: 14px; border-radius: var(--uc-r-12, 12px); color: var(--primary-text-color); display: flex; flex-direction: column; gap: 12px; min-width: 0; }\n      .uc-ep-wrapper > * { min-width: 0; }\n      .uc-ep-header { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 15px; }\n      .uc-ep-header ha-icon { --mdc-icon-size: 20px; color: var(--primary-color); }\n      .uc-ep-title { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n      .uc-ep-source { font-size: 12px; font-weight: 500; color: var(--secondary-text-color); white-space: nowrap; }\n      .uc-ep-muted { font-size: 12px; color: var(--secondary-text-color); line-height: 1.4; }\n      .uc-ep-banner, .uc-ep-warn { display: flex; gap: 8px; align-items: flex-start; font-size: 12px; line-height: 1.4; padding: 8px 10px; border-radius: 8px; background: color-mix(in srgb, var(--warning-color, #ffa600) 14%, transparent); color: var(--primary-text-color); }\n      .uc-ep-banner ha-icon, .uc-ep-warn ha-icon { --mdc-icon-size: 16px; flex: none; }\n      .uc-ep-current { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; width: 100%; min-height: 44px; padding: 0; margin: 0; border: none; background: none; color: inherit; font: inherit; text-align: left; cursor: pointer; }\n      .uc-ep-current-main { display: flex; align-items: baseline; gap: 6px; min-width: 0; }\n      .uc-ep-price { font-size: 34px; font-weight: 700; line-height: 1.1; font-variant-numeric: tabular-nums; }\n      .uc-ep-unit { font-size: 14px; color: var(--secondary-text-color); }\n      .uc-ep-current-side { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }\n      .uc-ep-level { display: inline-flex; align-items: center; gap: 6px; padding: 3px 10px; border-radius: 12px; font-size: 12px; font-weight: 600; color: var(--primary-text-color); background: color-mix(in srgb, var(--uc-ep-level) 18%, transparent); border: 1px solid color-mix(in srgb, var(--uc-ep-level) 50%, transparent); }\n      .uc-ep-level::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--uc-ep-level); }\n      .uc-ep-next { display: inline-flex; align-items: center; gap: 2px; }\n      .uc-ep-next ha-icon { --mdc-icon-size: 14px; }\n      .uc-ep-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }\n      .uc-ep-stat { display: flex; flex-direction: column; gap: 2px; padding: 8px 10px; border-radius: 8px; background: var(--secondary-background-color); min-width: 0; }\n      .uc-ep-stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--secondary-text-color); }\n      .uc-ep-stat-value { font-size: 15px; font-weight: 600; font-variant-numeric: tabular-nums; overflow: hidden; text-overflow: ellipsis; }\n      .uc-ep-stat-time { font-size: 11px; color: var(--secondary-text-color); }\n      .uc-ep-chart { display: flex; flex-direction: column; gap: 4px; }\n      .uc-ep-chart-area { position: relative; width: 100%; }\n      .uc-ep-svg { display: block; width: 100%; height: 100%; overflow: visible; }\n      .uc-ep-band { fill: var(--primary-color); opacity: 0.12; }\n      .uc-ep-zero { stroke: var(--divider-color); stroke-width: 1; vector-effect: non-scaling-stroke; }\n      .uc-ep-now { position: absolute; top: 0; bottom: 0; width: 2px; margin-left: -1px; background: var(--primary-text-color); opacity: 0.7; border-radius: 1px; pointer-events: none; }\n      .uc-ep-axis { position: absolute; font-size: 10px; color: var(--secondary-text-color); pointer-events: none; z-index: 1; }\n      .uc-ep-axis-top { top: -2px; left: 0; }\n      .uc-ep-plan-row { position: relative; height: 6px; border-radius: 3px; background: var(--secondary-background-color); }\n      .uc-ep-plan-strip { position: absolute; top: 0; bottom: 0; border-radius: 3px; background: var(--primary-color); min-width: 2px; }\n      .uc-ep-ticks { position: relative; height: 14px; font-size: 10px; color: var(--secondary-text-color); }\n      .uc-ep-tick { position: absolute; top: 0; transform: translateX(-50%); white-space: nowrap; }\n      .uc-ep-tick.start { transform: none; }\n      .uc-ep-tick.end { transform: translateX(-100%); }\n      .uc-ep-legend { display: flex; flex-wrap: wrap; gap: 4px 12px; font-size: 11px; color: var(--secondary-text-color); }\n      .uc-ep-legend span { display: inline-flex; align-items: center; gap: 4px; }\n      .uc-ep-legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; }\n      .uc-ep-legend i.band { background: var(--primary-color); opacity: 0.25; }\n      .uc-ep-legend i.plan { background: var(--primary-color); height: 4px; }\n      .uc-ep-nochart { padding: 8px 0; }\n      .uc-ep-row { display: flex; align-items: flex-start; gap: 10px; padding: 10px 12px; border-radius: 10px; background: var(--secondary-background-color); }\n      .uc-ep-row > ha-icon { --mdc-icon-size: 22px; color: var(--primary-color); flex: none; }\n      .uc-ep-row-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }\n      .uc-ep-row-title { font-size: 14px; font-weight: 600; }\n      .uc-ep-ev { display: flex; flex-direction: column; gap: 8px; padding: 12px; border-radius: 10px; border: 1px solid var(--divider-color); }\n      .uc-ep-ev-head { display: flex; align-items: center; gap: 8px; }\n      .uc-ep-ev-head > ha-icon { --mdc-icon-size: 22px; color: var(--primary-color); }\n      .uc-ep-ev-head .uc-ep-row-title { flex: 1; min-width: 0; }\n      .uc-ep-charger { font-size: 12px; padding: 2px 8px; border-radius: 10px; background: var(--secondary-background-color); color: var(--secondary-text-color); white-space: nowrap; }\n      .uc-ep-charger.on { color: var(--primary-text-color); background: color-mix(in srgb, var(--success-color, #43a047) 20%, transparent); }\n      .uc-ep-soc { position: relative; height: 20px; border-radius: 10px; background: var(--secondary-background-color); overflow: hidden; }\n      .uc-ep-soc-fill { position: absolute; left: 0; top: 0; bottom: 0; background: color-mix(in srgb, var(--success-color, #43a047) 55%, transparent); }\n      .uc-ep-soc-target { position: absolute; top: 2px; bottom: 2px; width: 2px; margin-left: -1px; background: var(--primary-text-color); opacity: 0.6; }\n      .uc-ep-soc-text { position: relative; display: block; text-align: center; font-size: 12px; line-height: 20px; font-weight: 600; color: var(--primary-text-color); }\n      .uc-ep-ev-status { font-size: 14px; font-weight: 500; }\n      .uc-ep-ev-status.now { color: var(--success-color, #43a047); }\n      .uc-ep-ranges { display: flex; flex-wrap: wrap; gap: 6px; }\n      .uc-ep-range { font-size: 12px; padding: 3px 8px; border-radius: 6px; background: color-mix(in srgb, var(--primary-color) 14%, transparent); color: var(--primary-text-color); font-variant-numeric: tabular-nums; }\n      .uc-ep-apply { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 22px; border: none; background: var(--primary-color); color: var(--text-primary-color, #fff); font: inherit; font-size: 14px; font-weight: 600; cursor: pointer; }\n      .uc-ep-apply[disabled] { opacity: 0.5; cursor: default; }\n      .uc-ep-apply ha-icon { --mdc-icon-size: 20px; }\n      .uc-ep-feedback { font-size: 12px; color: var(--success-color, #43a047); }\n      .uc-ep-feedback.error { color: var(--error-color, #db4437); }\n      @media (max-width: 420px) {\n        .uc-ep-price { font-size: 28px; }\n        .uc-ep-current-side { align-items: flex-start; }\n      }\n    "}}},3488(e,t,r){r.d(t,{SB:()=>c,b5:()=>s,gf:()=>a});var i=r(2618),n=r(378),o=r(6478);function a(e){var t,r,i,o;if(!e)return!1;try{const a=n.xd.checkIntegrationAuth(e);if("pro"===(null===(t=null==a?void 0:a.subscription)||void 0===t?void 0:t.tier)&&"active"===(null===(r=null==a?void 0:a.subscription)||void 0===r?void 0:r.status))return!0;if(n.xd.isAuthenticated()){const e=n.xd.getCurrentUser();if("pro"===(null===(i=null==e?void 0:e.subscription)||void 0===i?void 0:i.tier)&&"active"===(null===(o=null==e?void 0:e.subscription)||void 0===o?void 0:o.status))return!0}}catch(e){return!1}return!1}function s(e,t,r){const n=function(e,t){const r=e||function(){var e;try{return null===(e=document.querySelector("home-assistant"))||void 0===e?void 0:e.hass}catch(e){return}}();if(!(null==r?void 0:r.states))return null;const i=r.states["sensor.ultra_card_pro_cloud_authentication_status"];if(!i)return(0,o.kg)("editor.pro.status_not_installed",t,"Already have Pro? Install Ultra Card Connect and sign in to unlock it here.");const n=i.attributes||{};return"unavailable"===i.state||"unknown"===i.state?(0,o.kg)("editor.pro.status_unreachable",t,"Ultra Card Connect can't reach ultracard.io right now. If you have Pro, it unlocks again when the connection is back."):"connected"===i.state&&n.authenticated?"pro"===n.subscription_tier&&n.subscription_status&&"active"!==n.subscription_status?(0,o.kg)("editor.pro.status_inactive",t,"Your Pro subscription is {status}. Renew it on ultracard.io to unlock this.").replace("{status}",String(n.subscription_status)):null:n.needs_reauth?(0,o.kg)("editor.pro.status_reauth",t,"Ultra Card Connect needs you to sign in again (Settings → Devices & services → Ultra Card Connect)."):(0,o.kg)("editor.pro.status_signed_out",t,"Already have Pro? Sign in to Ultra Card Connect from the Ultra Card Hub in the sidebar.")}(r,e);return i.qy`
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
        ${(0,o.kg)("editor.pro.feature_locked",e,"Pro Feature")}
      </div>
      <div
        style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 340px; line-height: 1.5;"
      >
        ${t}
      </div>
      ${n?i.qy`<div
            role="status"
            style="font-size: 13px; color: var(--primary-text-color); margin-bottom: 16px; max-width: 340px; line-height: 1.5; padding: 8px 12px; border-radius: 8px; background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);"
          >
            ${n}
          </div>`:""}
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
        ${(0,o.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
      </a>
    </div>
  `}function c(e,t){return i.qy`
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
          ${(0,o.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
      </div>
    </div>
  `}}};