export const __webpack_esm_ids__=[9582];export const __webpack_esm_modules__={4793(e,t,i){i.d(t,{UltraUnifiModule:()=>We});var n=i(2618),o=i(7475),r=i(6478),s=i(3488),a=i(6673);function l(e,t,i,n,o,r,s){const a=[];return t.forEach((t,l)=>{a.push({index:e+2*l,cx:t,y:n,w:i,h:o,kind:"rj45"}),a.push({index:e+2*l+1,cx:t,y:r,w:i,h:s,kind:"rj45"})}),a}function d(e,t,i,n,o,r="rj45"){return t.map((t,s)=>({index:e+s,cx:t,y:n,w:i,h:o,kind:r}))}function c(e,t,i){if(1===i)return[e];const n=(t-e)/(i-1);return Array.from({length:i},(t,i)=>e+i*n)}const u={"UDM-SE":{cells:[...l(1,c(.7144,.8219,4),.0278,.409,.19,.6455,.2),{index:9,cx:.8919,y:.6182,w:.0278,h:.191,kind:"rj45"},{index:10,cx:.9342,y:.4182,w:.0326,h:.1455,kind:"sfp"},{index:11,cx:.9336,y:.6727,w:.0314,h:.1545,kind:"sfp"}]},"UDM-Pro":{cells:[...l(1,c(.7144,.8213,4),.0278,.4182,.1727,.6636,.1818),{index:9,cx:.8919,y:.6273,w:.0278,h:.1727,kind:"rj45"},{index:10,cx:.9336,y:.4182,w:.0314,h:.1,kind:"sfp"},{index:11,cx:.9342,y:.7345,w:.0302,h:.1,kind:"sfp"}]},"USW-Pro-HD-24-PoE":{cells:[...d(1,c(.1008,.3267,8),.029,.6446,.1653),...d(9,c(.3653,.5912,8),.0278,.6446,.1653),...d(17,c(.6304,.8557,8),.029,.6446,.157),{index:25,cx:.8967,y:.4628,w:.0326,h:.157,kind:"sfp"},{index:26,cx:.8967,y:.7025,w:.0326,h:.1322,kind:"sfp"},{index:27,cx:.9336,y:.4628,w:.0326,h:.157,kind:"sfp"},{index:28,cx:.9336,y:.7025,w:.0326,h:.1322,kind:"sfp"}]},"USW-Enterprise-8-PoE":{cells:[...d(1,c(.2772,.6842,8),.0487,.4402,.212),...d(9,c(.7911,.8629,2),.0544,.5272,.1467,"sfp")]},"USW-24-PoE":{cells:[...l(1,c(.4976,.8502,12),.0278,.3824,.1765,.6373,.1863),{index:25,cx:.9342,y:.3725,w:.0326,h:.12,kind:"sfp"},{index:26,cx:.9336,y:.6667,w:.0314,h:.12,kind:"sfp"}]},"USW-16-PoE":{cells:[...l(1,c(.6027,.8508,8),.0278,.3627,.1961,.6373,.1961),{index:17,cx:.9342,y:.3725,w:.0326,h:.12,kind:"sfp"},{index:18,cx:.9336,y:.6667,w:.0314,h:.12,kind:"sfp"}]},"USW-Pro-24-PoE":{cells:[...l(1,c(.4976,.8499,12),.029,.453,.1624,.6752,.1709),{index:25,cx:.9342,y:.453,w:.0326,h:.1538,kind:"sfp"},{index:26,cx:.9342,y:.6838,w:.0326,h:.1624,kind:"sfp"}]},"USW-Pro-Max-48-PoE":{cells:[...l(1,c(.1039,.8463,24),.0284,.4583,.1667,.6833,.1667),{index:49,cx:.8973,y:.4583,w:.0314,h:.1333,kind:"sfp"},{index:50,cx:.8973,y:.6833,w:.0314,h:.15,kind:"sfp"},{index:51,cx:.9342,y:.4583,w:.0314,h:.1333,kind:"sfp"},{index:52,cx:.9336,y:.6833,w:.0314,h:.15,kind:"sfp"}]},"USW-Enterprise-24-PoE":{cells:[...d(1,c(.1027,.8557,24),.0278,.6585,.1463),...d(25,[.8979,.9342],.0326,.7154,.1626,"sfp")]},"USW-Lite-16-PoE":{cells:[...l(1,c(.2077,.7923,8),.0658,.375,.181,.6336,.1853)]},"USW-Aggregation":{cells:[...l(1,c(.8013,.9336,4),.0338,.3505,.1753,.6289,.1959).map(e=>Object.assign(Object.assign({},e),{kind:"sfp"}))]},"USW-Flex-2.5G-8":{cells:[...d(1,c(.1178,.5894,8),.055,.375,.26),{index:9,cx:.689,y:.375,w:.055,h:.26,kind:"rj45"}]},"USW-Flex-2.5G-8-POE":{cells:[...d(1,c(.1178,.5894,8),.055,.4,.255),{index:9,cx:.689,y:.4,w:.055,h:.255,kind:"rj45"}]}},p={"USW-Flex":5,"USW-Flex-2.5G-5":5,"USW-Flex-Mini":5,"USW-Flex-XG":5};function f(e){if(!e)return null;if(u[e])return u[e];const t=e.toUpperCase();for(const[e,i]of Object.entries(u))if(e.toUpperCase()===t)return i;return null}function v(e){if(!e)return null;const t=f(e);if(null==t?void 0:t.cells.length)return Math.max(...t.cells.map(e=>e.index));if(null!=p[e])return p[e];const i=e.toUpperCase();for(const[e,t]of Object.entries(p))if(e.toUpperCase()===i)return t;return null}Object.keys(u);var h=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i};const g="uc-unifi-device-db-v2";function y(e){return e?e.toUpperCase().replace(/[^A-Z0-9]/g,""):""}const m=new class{constructor(){this.byKey=new Map,this.bySysid=new Map,this.state="idle",this.listeners=new Set}lookup(e){const t=y(e);if(!t)return null;const i=this.byKey.get(t);if(i)return i;if(t.length>=5){const e=t.slice(-4);if(/^[0-9A-F]{4}$/.test(e)){const t=this.bySysid.get(e.toLowerCase());if(t)return t}}return null}isReady(){return"ready"===this.state}prime(e){this.index(this.compact(e)),this.state="ready",this.notify()}ensureLoaded(e){if("ready"===this.state||"failed"===this.state)return;if(e&&this.listeners.add(e),"loading"===this.state)return;this.state="loading";const t=this.readCache();if(t)return this.index(t.entries),this.state="ready",void this.notify();fetch("https://static.ui.com/fingerprint/ui/public.json",{mode:"cors"}).then(e=>e.ok?e.json():Promise.reject(new Error(String(e.status)))).then(e=>{const t=this.compact((null==e?void 0:e.devices)||[]);this.index(t),this.writeCache(t),this.state="ready",this.notify()}).catch(()=>{this.state="failed",this.listeners.clear()})}imageUrl(e,t,i){const n=e.images[t]?t:e.images.nopadding?"nopadding":"default",o=e.images[n];if(!o)return null;const r=`https://static.ui.com/fingerprint/ui/images/${e.id}/${n}/${o}.png`;return`https://images.svc.ui.com/?u=${encodeURIComponent(r)}&w=${Math.round(i)}`}compact(e){var t,i,n,o;const r=[];for(const s of e){if(!(null==s?void 0:s.id))continue;const e=new Set;for(const t of s.shortnames||[]){const i=y(t);i&&e.add(i)}const a=y(s.sku);if(a&&e.add(a),!e.size)continue;const l=(s.sysids||[]).map(e=>String(e).toLowerCase()).filter(e=>/^[0-9a-f]{4}$/.test(e));r.push(Object.assign({id:s.id,name:(null===(t=s.product)||void 0===t?void 0:t.name)||s.sku||"",deviceType:s.deviceType||"",sku:s.sku||"",images:Object.assign(Object.assign(Object.assign({},(null===(i=s.images)||void 0===i?void 0:i.default)?{default:s.images.default}:{}),(null===(n=s.images)||void 0===n?void 0:n.nopadding)?{nopadding:s.images.nopadding}:{}),(null===(o=s.images)||void 0===o?void 0:o.topology)?{topology:s.images.topology}:{}),keys:[...e]},l.length?{sysids:l}:{}))}return r}index(e){this.byKey.clear(),this.bySysid.clear();for(const t of e){const{keys:e,sysids:i}=t,n=h(t,["keys","sysids"]);for(const t of e)this.byKey.has(t)||this.byKey.set(t,n);for(const e of i||[])this.bySysid.has(e)||this.bySysid.set(e,n)}}readCache(){try{const e=localStorage.getItem(g);if(!e)return null;const t=JSON.parse(e);return(null==t?void 0:t.at)&&Array.isArray(t.entries)?Date.now()-t.at>6048e5?null:t:null}catch(e){return null}}writeCache(e){try{localStorage.setItem(g,JSON.stringify({at:Date.now(),entries:e}))}catch(e){}}notify(){const e=[...this.listeners];this.listeners.clear();for(const t of e)try{t()}catch(e){}}},w=new Set(["ubiquiti","ubiquiti networks","ubnt","ui","unifi"]),x=/\b(UDM|UDMP|UXG|UCG|USG|UDR|USW|US-8|US-16|US-24|US-48|U6|U7|UAP|E7|UX|USP|PDU|UCK|UNVR|UVC|ULTE|UGW|AGGREGATION|ENTERPRISE|DREAM\s*MACHINE|CLOUD\s*GATEWAY|SECURITY\s*GATEWAY|ACCESS\s*POINT|SWITCH)\b/i,b=/(^|[^A-Z0-9])(UVC[\sA-Z0-9-]*|G[3-6][\s-]?(BULLET|DOME|FLEX|PRO|PTZ|INSTANT|TURRET|DOORBELL)[\sA-Z0-9-]*|AI[\s-]?(360|BULLET|DOME|PRO|THETA|DSLR|PORT|KEY)|DOORBELL)([^A-Z0-9]|$)/,k=/(^|[^A-Z0-9])(UNVR[\sA-Z0-9-]*|ENVR[\sA-Z0-9-]*|NVR|NETWORK\s*VIDEO\s*RECORDER)([^A-Z0-9]|$)/;function _(e){return k.test((e||"").toUpperCase())}const $={"port_rx-":"rx","port_tx-":"tx","port_link_speed-":"link_speed","poe_power-":"poe_power","poe-":"poe_switch","port-":"port_enable","power_cycle-":"power_cycle","outlet-":"outlet_switch"},I=["rx-","tx-","wired_speed-","uptime-","block-"],E=["device_state","device_cpu_utilization","device_memory_utilization","device_clients","device_temperature","device_sub_temperature","device_uplink_mac","wan_latency","smartpower_ac_power_budget","smartpower_ac_power_consumption","outlet_power","port_bandwidth_rx","port_bandwidth_tx","port_link_speed","port_poe_power","poe_port_control"],S=new a.p;function P(e){return e?e.toLowerCase().replace(/[^0-9a-f]/g,""):""}function U(e){return!!e&&!/^unifi\s+wlan$/i.test(e.trim())&&!/^unifi\s+network$/i.test(e.trim())&&x.test(e)}function M(e){if(null==e||""===e||"unavailable"===e||"unknown"===e)return null;const t=Number(e);return Number.isFinite(t)?t:null}function C(e,t,i){var n;const o=e.states[t],r=null===(n=null==o?void 0:o.attributes)||void 0===n?void 0:n.friendly_name;return"string"==typeof r&&r.trim()?r.trim():i||t}function z(e){if(!e)return null;for(const[t,i]of Object.entries($)){if(!e.startsWith(t))continue;const n=e.slice(t.length),o=n.lastIndexOf("_");if(o<=0)return null;const r=n.slice(0,o),s=n.slice(o+1),a=Number(s);if(!Number.isFinite(a))return null;const l=P(r);return l.length<12?null:{role:i,mac:l,index:a}}return null}const A={cpu:"CPU",phy:"PHY",local:"Local",general:"General",board:"Board",system:"System"};function F(e){const t=e.toLowerCase();return A[t]||e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}function W(e,t,i){const n=e||"";if(n.startsWith("device_temperature-"))return"General";const o=/^temperature-([a-z0-9]+)-/i.exec(n);if(o)return F(o[1]);if("device_temperature"===t)return"General";if("device_sub_temperature"===t){const e=/^\s*([A-Za-z]+)\s+temp/i.exec(i||"");return e?F(e[1]):"Temperature"}return null}const q=["General","Local","Board","System","CPU","PHY"];function O(e){const t=e=>{const t=q.indexOf(e.label);return-1===t?q.length:t};return[...e].sort((e,i)=>t(e)-t(i)||e.label.localeCompare(i.label,void 0,{sensitivity:"base"}))}function D(e){return!!e&&!z(e)&&I.some(t=>e.startsWith(t))}const R=/(^|[^A-Z0-9])(U[67][A-Z0-9+-]*|UAP[A-Z0-9-]*|UAL[A-Z0-9-]*|E7[A-Z0-9-]*|ACCESS\s*POINT|IW-HD|BEACON)([^A-Z0-9]|$)/,T=/(^|[^A-Z0-9])(UP1|UP6|USP[\s-]?PLUG[A-Z0-9-]*|USP[\s-]?STRIP[A-Z0-9-]*|SMART\s*POWER|PLUG|OUTLET)([^A-Z0-9]|$)/;function N(e,t={}){var i;const n=(e||"").toUpperCase(),o=m.lookup(e),r=o?function(e,t){switch(e){case"access-point":case"mesh-point":return"ap";case"switch":return"switch";case"console":return _(t)?"nvr":"gateway";case"gateway":case"router":return"gateway";case"camera":case"doorbell":return"camera";case"nvr":case"recorder":case"dvr":return"nvr";case"power-supply":{const e=(t||"").toUpperCase();return/PDU|RPS/.test(e)?"pdu":"plug"}default:return null}}(o.deviceType,e):null;return r||(_(n)?"nvr":b.test(n)?"camera":T.test(n)?"plug":/\b(PDU|USP-PDU|USP-RPS|SMARTPOWER)\b/.test(n)?"pdu":t.hasWanLatency||/\b(UDM[A-Z0-9-]*|UXG[A-Z0-9-]*|UCG[A-Z0-9-]*|USG[A-Z0-9-]*|UDR[A-Z0-9-]*|UX\b|CLOUD\s*GATEWAY|DREAM\s*MACHINE|SECURITY\s*GATEWAY)/.test(n)?"gateway":R.test(n)&&!t.hasPorts?"ap":t.hasPorts||/\b(USW[A-Z0-9-]*|US[0-9]+[A-Z0-9]*|US-8|US-16|US-24|US-48|SWITCH|AGGREGATION)\b/.test(n)?"switch":R.test(n)?"ap":t.hasAcPower?"pdu":t.hasOutlets?(null!==(i=t.outletCount)&&void 0!==i?i:0)>2?"pdu":"plug":t.hasCamera?"camera":"other")}function L(e){if(!e)return!1;if("service"===e.entry_type)return!1;const t=(e.model||"").trim();if(/^unifi\s+wlan$/i.test(t)||/^unifi\s+network$/i.test(t))return!1;if(function(e){if(!e)return!1;const t=e.toLowerCase().trim();return!!w.has(t)||!!t.startsWith("ubiquiti")||!!t.startsWith("ubnt")}(e.manufacturer)&&t)return!0;if(U(t))return!0;if(e.identifiers)for(const t of e.identifiers)if(Array.isArray(t)&&"unifi"===t[0]&&t[1]&&12===P(t[1]).length)return!0;return!1}function j(e){return!!(L(e.device)||e.ports.size>0||e.outlets.size>0||e.stateEntityId||e.cpuEntityId||e.memoryEntityId||e.uplinkMacEntityId||e.acBudgetEntityId||e.cameraEntityId||e.wanLatency.length>0)&&(e.ports.size>0||e.outlets.size>0||!!e.stateEntityId||!!e.cpuEntityId||!!e.memoryEntityId||!!e.clientsEntityId||!!e.uplinkMacEntityId||!!e.ledEntityId||!!e.restartEntityId||!!e.acBudgetEntityId||!!e.acConsumeEntityId||!!e.cameraEntityId||!!e.motionEntityId||e.wanLatency.length>0||U(e.device.model)||b.test((e.device.model||"").toUpperCase())||_(e.device.model))}function G(e,t,i){const n=(i||"").toUpperCase();return"ap"===e||"plug"===e||"camera"===e?1:"pdu"===e?(/PRO|24|20/.test(n),1):"gateway"===e?(/PRO|SE|ENTERPRISE|MAX/.test(n),1):1}function B(e){return e.ports.filter(e=>!!e.poeSwitchEntityId||!!e.poePowerEntityId||null!=e.poePowerW).length}function Z(e){return e.ports.filter(e=>!0===e.poeOn||null!=e.poePowerW&&e.poePowerW>0).length}const X=new Set(["ap","camera","nvr"]);function V(e,t){var i,n;const o=t.filter(t=>t.deviceId!==e.deviceId),r=null!==(n=null===(i=o.find(e=>"gateway"===e.kind))||void 0===i?void 0:i.deviceId)&&void 0!==n?n:null;if(!X.has(e.kind))return r;const s=o.filter(e=>"switch"===e.kind);if(!s.length)return r;const a="nvr"!==e.kind,l=e=>[a?Z(e):0,a?B(e):0,e.ports.length],d=[...s].sort((e,t)=>{const i=l(e),n=l(t);for(let e=0;e<i.length;e++)if(n[e]!==i[e])return n[e]-i[e];return e.name.localeCompare(t.name,void 0,{sensitivity:"base"})})[0];return a&&0===B(d)&&r?r:d.deviceId}const H=/\s+(rx|tx|link\s*speed|poe\s*power|poe|power\s*cycle|port\s*enable)$/i,J=/^(sfp\+?\s*)?port\s*\d+$/i,Y=/^sfp\+?\s*\d+$/i;function K(e){return(e.name||"").replace(H,"").trim()}function Q(e){return e.toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function ee(e,t){var i,n,o;return t?String((null===(o=null===(n=null===(i=e.states)||void 0===i?void 0:i[t])||void 0===n?void 0:n.attributes)||void 0===o?void 0:o.unit_of_measurement)||""):""}function te(e,t){let i=0,n=!1;for(const o of t){const t=fe(o.rx,ee(e,o.rxEntityId)),r=fe(o.tx,ee(e,o.txEntityId));null!=t&&(i+=t,n=!0),null!=r&&(i+=r,n=!0)}return n?i:null}function ie(e,t){var i,n;const o=null!==(i=null==t?void 0:t.max)&&void 0!==i?i:16,r=null!==(n=null==t?void 0:t.includeAps)&&void 0!==n?n:e.filter(e=>"ap"===e.kind).length<=8,s=e.filter(e=>"camera"===e.kind).length<=6,a=e=>{switch(e){case"gateway":return 0;case"switch":return 1;case"nvr":return 2;case"pdu":return 3;case"ap":return 4;case"camera":return 5;default:return 6}},l=[...e].sort((e,t)=>{const i=a(e.kind)-a(t.kind);return 0!==i?i:e.name.localeCompare(t.name,void 0,{sensitivity:"base"})}),d=[];for(const e of l)if(("ap"!==e.kind||r)&&("camera"!==e.kind||s)&&"plug"!==e.kind&&("other"!==e.kind||0!==e.ports.length)&&(d.push(e.deviceId),d.length>=o))break;if(0===d.length)for(const e of l)if(("gateway"===e.kind||"switch"===e.kind)&&(d.push(e.deviceId),d.length>=Math.max(1,o)))break;return d}function ne(e){if(!(null==e?void 0:e.connections))return"";for(const t of e.connections)if(Array.isArray(t)&&"mac"===t[0]&&t[1])return P(t[1]);if(e.identifiers)for(const t of e.identifiers)if(Array.isArray(t)&&"unifi"===t[0]&&t[1]){const e=P(t[1]);if(12===e.length)return e}return""}function oe(e){return(e.name_by_user||e.name||e.model||e.id||"UniFi device").trim()}function re(e,t,i){let n=e.get(t);return n?!i||n.name&&!n.name.startsWith("Port ")||(n.name=i):(n={index:t,name:i||`Port ${t}`},e.set(t,n)),n}function se(e){var t,i;if(!e)return null;const n=m.lookup(e);return null!==(i=null!==(t=v(null==n?void 0:n.sku))&&void 0!==t?t:v(e))&&void 0!==i?i:function(e){if(!e)return null;const t=e.toUpperCase().replace(/[^A-Z0-9]/g,"");return t?t.includes("USM25G8")||t.includes("FLEX25G8")?9:t.includes("USM25G5")||t.includes("FLEX25G5")||t.includes("FLEXXG")||t.includes("USFXG")||t.includes("FLEXMINI")||t.includes("USMINI")||"USWFLEX"===t||"USF5P"===t?5:null:null}(e)}function ae(e){return{index:e,name:`Port ${e}`,linkSpeedMbps:null,rx:null,tx:null,poePowerW:null,poeOn:null,enabled:null,up:!1}}function le(e,t){if(!e.length&&(null==t||t<=0))return e;let i=e;i.length&&0===Math.min(...i.map(e=>e.index))&&(i=i.map(e=>Object.assign(Object.assign({},e),{index:e.index+1,name:/^port\s+\d+$/i.test(e.name)?`Port ${e.index+1}`:e.name})));const n=new Map;for(const e of i)n.set(e.index,e);const o=i.length?Math.max(...i.map(e=>e.index)):0,r=Math.max(t&&t>0?t:0,o);if(r<=0)return[...i].sort((e,t)=>e.index-t.index);const s=[];for(let e=1;e<=r;e++)s.push(n.get(e)||ae(e));for(const e of i)e.index>r&&s.push(e);return s.sort((e,t)=>e.index-t.index)}function de(e,t,i){const n=`${e} ${t} ${i}`.toLowerCase();let o="Unknown";return n.includes("microsoft")?o="Microsoft":n.includes("google")?o="Google":(n.includes("cloudflare")||n.includes("1.1.1.1"))&&(o="Cloudflare"),{target:o,wan:n.includes("wan2")?"WAN2":"WAN"}}function ce(e,t,i){if(!(null==e?void 0:e.states))return{devices:[],clients:[],wanLatency:[],allEntityIds:[],hasUnifiIntegration:!1};const n=e,o=(0,a.W)(i);return S.read(t,[e.states,n.entities,n.devices,n.areas],o,()=>function(e,t){var i,n,o,r,s,a,l,d,c,u,p,f,v,h,g,y,m,w,x;const b=e,k=function(e){const t=e,i=new Map,n=t.devices;if(!n)return i;for(const[e,t]of Object.entries(n))t&&!t.disabled_by&&L(t)&&i.set(e,Object.assign(Object.assign({},t),{id:e}));return i}(e),_=b.entities||{},$=b.areas||{},I=(null===(i=null==t?void 0:t.area_filter)||void 0===i?void 0:i.length)?new Set(t.area_filter):null,E=new Map;for(const[e,t]of k)E.set(e,{device:t,entityIds:[],unifiCount:0,protectCount:0,ports:new Map,outlets:new Map,temps:new Map,wanLatency:[]});const S=[],U=new Map,A=[],q=(t,i,n)=>{var o;let r=U.get(t);if(!r){const s=null===(o=b.devices)||void 0===o?void 0:o[t];r={deviceId:t,mac:ne(s)||P(n.replace(/^(rx-|tx-|wired_speed-|uptime-|block-)/,"")),name:s?oe(s):C(e,i,"Client"),rx:null,tx:null,linkSpeedMbps:null,blocked:null,entityIds:[]},U.set(t,r),S.push(r)}return r},R=Object.keys(e.states||{});for(const t of R){const i=_[t],c=(null==i?void 0:i.device_id)||void 0,u="unifi"===(null==i?void 0:i.platform),p=!(!c||!E.has(c));if(!u&&!p)continue;const f=e.states[t],v=(null==i?void 0:i.translation_key)||"",h=(null==i?void 0:i.unique_id)||"",g=t.split(".")[0],y=(null==i?void 0:i.original_name)||(null==i?void 0:i.name)||"";if(("client_bandwidth_rx"===v||"client_bandwidth_tx"===v||"wired_client_link_speed"===v||"block_client"===v||D(h)||u&&!p&&("device_tracker"===g||"switch"===g||"sensor"===g&&!z(h)))&&c&&!p){A.push(t);const e=q(c,t,h);e.entityIds.push(t),"client_bandwidth_rx"===v||h.startsWith("rx-")?(e.rx=M(null==f?void 0:f.state),e.rxEntityId=t):"client_bandwidth_tx"===v||h.startsWith("tx-")?(e.tx=M(null==f?void 0:f.state),e.txEntityId=t):"wired_client_link_speed"===v||h.startsWith("wired_speed-")?(e.linkSpeedMbps=M(null==f?void 0:f.state),e.linkSpeedEntityId=t):h.startsWith("uptime-")||"sensor"===g&&"timestamp"===(null===(n=null==f?void 0:f.attributes)||void 0===n?void 0:n.device_class)&&/uptime/i.test(y)?e.uptimeEntityId=t:h.startsWith("block-")||"block_client"===v||"switch"===g?(e.blockEntityId=t,e.blocked="off"===(null==f?void 0:f.state)||"on"!==(null==f?void 0:f.state)&&null):"device_tracker"===g&&(e.trackerEntityId=t);continue}if(!c||!E.has(c))continue;A.push(t);const m=E.get(c);if(m.entityIds.push(t),u&&m.unifiCount++,"unifiprotect"===(null==i?void 0:i.platform)&&m.protectCount++,"camera"===g){m.cameraEntityId&&!/high/i.test(h+t)||(m.cameraEntityId=t);continue}if("binary_sensor"===g){const e=null===(o=null==f?void 0:f.attributes)||void 0===o?void 0:o.device_class;if("motion"===e&&!m.motionEntityId){m.motionEntityId=t;continue}if(!m.doorbellEntityId&&("occupancy"===e||/doorbell/i.test(`${h} ${t} ${y}`))){m.doorbellEntityId=t;continue}}const w=z(h);if(w){if("outlet_switch"===w.role||"outlet_power"===w.role){let e=m.outlets.get(w.index);e||(e={index:w.index,name:y||`Outlet ${w.index}`},m.outlets.set(w.index,e)),"outlet_switch"===w.role&&(e.switch=t);continue}const e=re(m.ports,w.index,y||`Port ${w.index}`);switch(w.role){case"rx":e.rx=t;break;case"tx":e.tx=t;break;case"link_speed":e.link=t;break;case"poe_power":e.poePower=t;break;case"poe_switch":e.poeSwitch=t;break;case"port_enable":e.portEnable=t;break;case"power_cycle":e.powerCycle=t}continue}if("outlet_power"===v){const e=h.match(/_(\d+)$/)||t.match(/_(\d+)$/),i=e?Number(e[1]):m.outlets.size+1;let n=m.outlets.get(i);n||(n={index:i,name:y||`Outlet ${i}`},m.outlets.set(i,n)),n.power=t;continue}if("sensor"===g){const e=null!==(r=W(h,v,y))&&void 0!==r?r:"temperature"===(null===(s=null==f?void 0:f.attributes)||void 0===s?void 0:s.device_class)?F((null===(a=/^\s*([A-Za-z]+)\s+temp/i.exec(y||""))||void 0===a?void 0:a[1])||"Temperature"):null;if(e){m.temps.has(e)||m.temps.set(e,{label:e,entityId:t});continue}}if(("device_state"===v||h.startsWith("device_state-")||"sensor"===g&&/state$/i.test(t)&&!m.stateEntityId)&&("device_state"===v||h.includes("device_state")||/_state$/.test(t)))m.stateEntityId=t;else if("device_cpu_utilization"!==v&&!h.includes("cpu")&&!/cpu_utilization|_cpu$/i.test(t)||"device_cpu_utilization"!==v&&!/cpu/i.test(h)&&!/cpu/i.test(t))if("device_memory_utilization"!==v&&!/memory/i.test(h)&&!/memory/i.test(t)||"device_memory_utilization"!==v&&!/memory/i.test(h+t))if("device_clients"===v||"wlan_clients"===v||/clients/i.test(h)&&"sensor"===g)m.clientsEntityId=t;else if("device_uplink_mac"===v||/uplink_mac/i.test(h)||/uplink_mac/i.test(t))m.uplinkMacEntityId=t;else{if("wan_latency"===v||/_latency-/i.test(h)||/latency/i.test(t)){const e=de(h,y,t);m.wanLatency.push({target:e.target,wan:e.wan,latencyMs:M(null==f?void 0:f.state),entityId:t});continue}if("smartpower_ac_power_budget"===v||/ac_power_budget/i.test(h+t))m.acBudgetEntityId=t;else if("smartpower_ac_power_consumption"===v||/ac_power_consumption/i.test(h+t))m.acConsumeEntityId=t;else if("sensor"!==g||"timestamp"!==(null===(l=null==f?void 0:f.attributes)||void 0===l?void 0:l.device_class)&&!/uptime/i.test(t)||!/uptime/i.test(h+t+y))if("light"!==g||m.ledEntityId)if("button"!==g||"restart"!==(null===(d=null==f?void 0:f.attributes)||void 0===d?void 0:d.device_class)&&!/restart/i.test(h+t))if("update"!==g||m.updateEntityId)if("device_tracker"!==g||m.trackerEntityId){if("port_bandwidth_rx"===v||"port_bandwidth_tx"===v||"port_link_speed"===v||"port_poe_power"===v||"poe_port_control"===v){const e=h.match(/_(\d+)$/)||t.match(/(?:port|poe)[_-]?(\d+)/i),i=e?Number(e[1]):0;if(i>0){const e=re(m.ports,i,y||`Port ${i}`);"port_bandwidth_rx"===v?e.rx=t:"port_bandwidth_tx"===v?e.tx=t:"port_link_speed"===v?e.link=t:"port_poe_power"===v?e.poePower=t:"poe_port_control"===v&&(e.poeSwitch=t)}}}else m.trackerEntityId=t;else m.updateEntityId=t;else m.restartEntityId=t;else m.ledEntityId=t;else m.uptimeEntityId=t}else m.memoryEntityId=t;else m.cpuEntityId=t}const T=new Map,B=new Set;for(const[e,t]of E){const i=ne(t.device);i&&T.set(i,e),i&&t.unifiCount>0&&B.add(i)}const Z=[],X=[];for(const[t,i]of E){if(!j(i))continue;const n=i.device.area_id||void 0;if(I&&(!n||!I.has(n)))continue;const o=ne(i.device),r=i.device.model||"",s=i.ports.size,a=i.wanLatency.length>0,l=i.outlets.size>0,d=!(!i.acBudgetEntityId&&!i.acConsumeEntityId),b=N(r,{hasPorts:s>0,hasWanLatency:a,hasOutlets:l,outletCount:i.outlets.size,hasAcPower:d,hasClients:!!i.clientsEntityId,hasDeviceState:!!i.stateEntityId,hasCpu:!!i.cpuEntityId,hasCamera:!!i.cameraEntityId});if(0===i.unifiCount){if(0===i.protectCount)continue;if("gateway"===b)continue;if(o&&B.has(o))continue}let k=[...i.ports.values()].sort((e,t)=>e.index-t.index).map(t=>{var i,n,o,r,s,a,l,d;const c=t.link?M(null===(i=e.states[t.link])||void 0===i?void 0:i.state):null,u=t.rx?M(null===(n=e.states[t.rx])||void 0===n?void 0:n.state):null,p=t.tx?M(null===(o=e.states[t.tx])||void 0===o?void 0:o.state):null,f=t.poePower?M(null===(r=e.states[t.poePower])||void 0===r?void 0:r.state):null,v=t.poeSwitch?"on"===(null===(s=e.states[t.poeSwitch])||void 0===s?void 0:s.state)||"off"!==(null===(a=e.states[t.poeSwitch])||void 0===a?void 0:a.state)&&null:null,h=t.portEnable?"on"===(null===(l=e.states[t.portEnable])||void 0===l?void 0:l.state)||"off"!==(null===(d=e.states[t.portEnable])||void 0===d?void 0:d.state)&&null:null,g=null!=c&&c>0||null!=u&&u>0||null!=p&&p>0||null!=f&&f>0||!0===v;return{index:t.index,name:t.name,linkSpeedMbps:c,rx:u,tx:p,rxEntityId:t.rx,txEntityId:t.tx,linkSpeedEntityId:t.link,poePowerW:f,poePowerEntityId:t.poePower,poeOn:v,poeSwitchEntityId:t.poeSwitch,enabled:h,portEnableEntityId:t.portEnable,powerCycleEntityId:t.powerCycle,up:g}});"switch"!==b&&"gateway"!==b||(k=le(k,se(r)));const _=[...i.outlets.values()].sort((e,t)=>e.index-t.index).map(t=>{var i,n,o;return{index:t.index,name:t.name,powerW:t.power?M(null===(i=e.states[t.power])||void 0===i?void 0:i.state):null,powerEntityId:t.power,on:t.switch?"on"===(null===(n=e.states[t.switch])||void 0===n?void 0:n.state)||"off"!==(null===(o=e.states[t.switch])||void 0===o?void 0:o.state)&&null:null,switchEntityId:t.switch}}),E=O([...i.temps.values()].map(t=>{var i;return{label:t.label,celsius:M(null===(i=e.states[t.entityId])||void 0===i?void 0:i.state),entityId:t.entityId}})),S=E.find(e=>null!=e.celsius)||E[0],U=P(i.uplinkMacEntityId?String((null===(c=e.states[i.uplinkMacEntityId])||void 0===c?void 0:c.state)||""):"")||void 0,C=U?T.get(U):void 0,z=n?(null===(u=$[n])||void 0===u?void 0:u.name)||n:void 0;Z.push({deviceId:t,mac:o,name:oe(i.device),model:r,manufacturer:i.device.manufacturer||"Ubiquiti Networks",swVersion:i.device.sw_version||void 0,kind:b,heightU:G(b,k.length,r),state:i.stateEntityId?String((null===(p=e.states[i.stateEntityId])||void 0===p?void 0:p.state)||""):void 0,stateEntityId:i.stateEntityId,cpuPct:i.cpuEntityId?M(null===(f=e.states[i.cpuEntityId])||void 0===f?void 0:f.state):null,cpuEntityId:i.cpuEntityId,memoryPct:i.memoryEntityId?M(null===(v=e.states[i.memoryEntityId])||void 0===v?void 0:v.state):null,memoryEntityId:i.memoryEntityId,temperatureC:null!==(h=null==S?void 0:S.celsius)&&void 0!==h?h:null,temperatureEntityId:null==S?void 0:S.entityId,temperatures:E,uptimeEntityId:i.uptimeEntityId,clients:i.clientsEntityId?M(null===(g=e.states[i.clientsEntityId])||void 0===g?void 0:g.state):null,clientsEntityId:i.clientsEntityId,cameraEntityId:i.cameraEntityId,motionEntityId:i.motionEntityId,motionOn:i.motionEntityId?"on"===(null===(y=e.states[i.motionEntityId])||void 0===y?void 0:y.state)||"off"!==(null===(m=e.states[i.motionEntityId])||void 0===m?void 0:m.state)&&null:null,doorbellEntityId:i.doorbellEntityId,uplinkMac:U,uplinkMacEntityId:i.uplinkMacEntityId,uplinkDeviceId:C,ledEntityId:i.ledEntityId,restartEntityId:i.restartEntityId,updateEntityId:i.updateEntityId,trackerEntityId:i.trackerEntityId,acPowerBudgetW:i.acBudgetEntityId?M(null===(w=e.states[i.acBudgetEntityId])||void 0===w?void 0:w.state):null,acPowerBudgetEntityId:i.acBudgetEntityId,acPowerConsumptionW:i.acConsumeEntityId?M(null===(x=e.states[i.acConsumeEntityId])||void 0===x?void 0:x.state):null,acPowerConsumptionEntityId:i.acConsumeEntityId,ports:k,outlets:_,entityIds:i.entityIds,areaId:n,areaName:z}),X.push(...i.wanLatency)}const V={gateway:0,switch:1,nvr:2,ap:3,pdu:4,camera:5,plug:6,other:7};Z.sort((e,t)=>{const i=V[e.kind]-V[t.kind];return 0!==i?i:e.name.localeCompare(t.name,void 0,{sensitivity:"base"})});const H=!1!==(null==t?void 0:t.include_clients)?S:[];for(const e of H)A.push(...e.entityIds);const J=Z.length>0||H.length>0||Object.values(_).some(e=>"unifi"===(null==e?void 0:e.platform));return{devices:Z,clients:H,wanLatency:X,allEntityIds:[...new Set(A)],hasUnifiIntegration:J}}(e,i))}function ue(e,t,i,n){const o=new Set(i||[]),r=(null==n?void 0:n.length)?new Set(n):null;let s=e.filter(e=>!o.has(e.deviceId));if(r&&(s=s.filter(e=>r.has(e.deviceId))),!(null==t?void 0:t.length))return s;const a=new Map(s.map(e=>[e.deviceId,e])),l=[];for(const e of t){const t=a.get(e);t&&(l.push(t),a.delete(e))}for(const e of a.values())l.push(e);return l}const pe=new class{constructor(){this.registryCache=null,this.inflight=null}invalidateRegistryCache(){this.registryCache=null}async loadRegistries(e){const t=Date.now();return this.registryCache&&t-this.registryCache.at<45e3?this.registryCache:(this.inflight||(this.inflight=(async()=>{const t=t=>e.callWS(t);try{const[e,i]=await Promise.all([t({type:"config/entity_registry/list"}),t({type:"config/device_registry/list"})]);return this.registryCache={at:Date.now(),entities:Array.isArray(e)?e:[],devices:Array.isArray(i)?i:[]},this.registryCache}finally{this.inflight=null}})()),this.inflight)}async getCapabilityReport(e,t){const i=t||ce(e,"__caps__",{});let n=[],o=[];try{const t=await this.loadRegistries(e);n=t.entities,o=t.devices}catch(e){}const r=new Set;for(const e of o)L(e)&&r.add(e.id);for(const e of i.devices)r.add(e.deviceId);const s=n.filter(e=>"unifi"===e.platform||e.device_id&&r.has(e.device_id)),a=[];let l=0,d=0,c=!0,u=0,p=0,f=0,v=0,h=0,g=0,y=0,m=0,w=0,x=0;for(const e of s){const t=e.unique_id||"",i=e.translation_key||"",n=!!e.disabled_by,o=t.startsWith("port_rx-")||"port_bandwidth_rx"===i,r=t.startsWith("port_tx-")||"port_bandwidth_tx"===i,s=t.startsWith("port_link_speed-")||"port_link_speed"===i,b=t.startsWith("poe_power-")||t.startsWith("poe-")||"port_poe_power"===i||"poe_port_control"===i,k="device_clients"===i||"wlan_clients"===i||/clients/i.test(t),_=!!W(t,i,e.original_name),$="wan_latency"===i||/latency/i.test(t),I="device_uplink_mac"===i||/uplink_mac/i.test(t)||/uplink_mac/i.test(e.entity_id);o||r?(c=!1,n?(d++,a.push(e.entity_id)):l++):s?n?(p++,a.push(e.entity_id)):u++:b?n?(v++,a.push(e.entity_id)):f++:k?n?(g++,a.push(e.entity_id)):h++:_?n?(m++,a.push(e.entity_id)):y++:$?n?(x++,a.push(e.entity_id)):w++:I?n&&a.push(e.entity_id):n&&"unifi"===e.platform&&(E.some(e=>i===e||t.includes(e.replace(/_/g,"")))||t.startsWith("power_cycle-")||t.startsWith("port-"))&&a.push(e.entity_id)}const b=(e,t,i)=>i&&0===e&&0===t?"absent":e>0?"enabled":t>0?"disabled":"absent",k=c&&0===l&&0===d,_={};return 0===i.devices.length&&(_.rack="No UniFi devices found. Install and configure the official UniFi Network integration in Home Assistant."),k?(_.ports="Port bandwidth sensors are missing. Enable “Bandwidth usage sensors for network clients” under UniFi integration → Configure → More options.",_.topology="Enable bandwidth sensors in the UniFi integration options for live traffic on topology links."):d>0&&(_.ports=`${d} port bandwidth sensors are disabled. Enable them for live RX/TX.`,_.rack=`${d} port sensors are disabled — enable them for port LED activity.`),p>0&&(_.ports=(_.ports?_.ports+" ":"")+`${p} link-speed sensors are disabled.`),m>0&&0===y&&(_.devices=`${m} temperature sensors are disabled — Home Assistant turns off the CPU/Local/PHY probes most access points use. Enable them to see temperatures.`),{hasDevices:i.devices.length>0,portBandwidth:b(l,d,k),portLinkSpeed:b(u,p,0===u&&0===p),portPoe:b(f,v,0===f&&0===v),deviceClients:b(h,g,0===h&&0===g),deviceTemperature:b(y,m,0===y&&0===m),wanLatency:b(w,x,0===w&&0===x),disabledEntityIds:[...new Set(a)],bandwidthOptionMissing:k,tipsByView:_}}async enableEntities(e,t,i){var n;if(!Boolean(null===(n=null==e?void 0:e.user)||void 0===n?void 0:n.is_admin))return{ok:0,failed:t.length};const o=[...new Set(t)];let r=0,s=0,a=0;return await Promise.all(Array.from({length:Math.min(4,o.length)},()=>(async()=>{for(;a<o.length;){const t=a++,n=o[t];try{await e.callWS({type:"config/entity_registry/update",entity_id:n,disabled_by:null}),r++}catch(e){s++}null==i||i(r+s,o.length)}})())),this.invalidateRegistryCache(),{ok:r,failed:s}}isAdmin(e){var t;return Boolean(null===(t=null==e?void 0:e.user)||void 0===t?void 0:t.is_admin)}};function fe(e,t){if(null==e||!Number.isFinite(e))return null;const i=(t||"").toLowerCase().replace(/\s+/g,"");return i.includes("gbit")||"gbit/s"===i||"gbps"===i?1e3*e:i.includes("mbit")||"mbit/s"===i||"mbps"===i?e:i.includes("kbit")||"kbit/s"===i||"kbps"===i?e/1e3:i.includes("mbyte")||"mb/s"===i||"mib/s"===i?8*e:i.includes("kbyte")||"kb/s"===i||"kib/s"===i?8*e/1e3:i.includes("byte")||"b/s"===i||"b/sec"===i?8*e/1e6:i.includes("bit")&&!i.includes("byte")?e/1e6:e>1e4?8*e/1e6:e}function ve(e){return null==e||e<=0?"rgba(120,130,150,0.35)":e>=1e4?"#00e5ff":e>=2500?"#4a9eff":e>=1e3?"#69f0ae":e>=100?"#ffd740":"#ffab40"}function he(e){return null!=e&&Number.isFinite(e)?e>=1e3?`${(e/1e3).toFixed(1)} Gbps`:e>=1?`${e.toFixed(1)} Mbps`:e>=.001?`${(1e3*e).toFixed(0)} Kbps`:"0":"—"}function ge(e){const t="undefined"!=typeof window?Math.min(3,Math.max(1,window.devicePixelRatio||1)):2;return Math.round(Math.min(1024,e*t))}function ye(e,t,i=ge(700)){if(!1===t.useImages)return null;const n=m.lookup(e.model);return n?m.imageUrl(n,"nopadding",i):null}function me(e){return e<=0?0:e>500?.35:e>50?.6:e>5?1:1.8}function we(e,t){var i,n,o,r;const s=e.rxEntityId?String((null===(n=null===(i=null==t?void 0:t.states[e.rxEntityId])||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.unit_of_measurement)||""):"",a=e.txEntityId?String((null===(r=null===(o=null==t?void 0:t.states[e.txEntityId])||void 0===o?void 0:o.attributes)||void 0===r?void 0:r.unit_of_measurement)||""):"";return{rx:fe(e.rx,s)||0,tx:fe(e.tx,a)||0}}function xe(e){switch(e){case"light":return"#d8dde6";case"glass":return"rgba(30,40,60,0.55)";case"blueprint":return"rgba(10,30,60,0.15)";default:return"#1a1f2a"}}function be(e){switch(e){case"light":return"#9aa3b2";case"glass":return"rgba(120,180,255,0.35)";case"blueprint":return"#3d8bfd";default:return"#2c3444"}}function ke(e,t={}){if("ap"===e.kind)return function(e,t){var i,o;const r=null!==(i=e.cpuPct)&&void 0!==i?i:null!=e.clients?Math.min(100,4*e.clients):0,s=null!==(o=e.clients)&&void 0!==o?o:0,a=2*Math.PI*46,l=`${r/100*a} ${a}`,d=t.animation||"full",c=t.accent||"#00e5ff",u=ye(e,t,ge(128));return n.qy`
    <div class="uc-unifi-ap-puck" style="--ring-pct: ${r}; --accent: ${c};">
      <div class="uc-unifi-ap-stage">
        ${u?n.qy`<img
              class="uc-unifi-ap-photo"
              src="${u}"
              alt="${e.model||e.name}"
              loading="lazy"
              draggable="false"
              @error=${e=>{e.currentTarget.style.display="none"}}
            />`:n.s6}
        <svg viewBox="0 0 100 100" class="uc-unifi-ap-svg" aria-hidden="true">
          ${u?n.s6:n.JW`
              <circle cx="50" cy="50" r="42" fill="${xe(t.styleVariant)}" stroke="${be(t.styleVariant)}" stroke-width="2" />
              <text x="50" y="46" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700">UniFi</text>
              <text x="50" y="60" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.7">${s} cli</text>
            `}
          <circle
            class="uc-unifi-ring-track"
            cx="50"
            cy="50"
            r="${46}"
            fill="none"
            stroke="rgba(127,140,160,0.18)"
            stroke-width="4.5"
          />
          <circle
            class="uc-unifi-ring-value ${"off"!==d?"uc-unifi-ring-spin":""}"
            cx="50"
            cy="50"
            r="${46}"
            fill="none"
            stroke="${c}"
            stroke-width="4.5"
            stroke-linecap="round"
            stroke-dasharray="${l}"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
      <div class="uc-unifi-ap-label">${e.name}</div>
      ${t.showLabels&&null!=e.clients?n.qy`<div class="uc-unifi-ap-meta">${e.clients} clients${null!=e.cpuPct?` · ${Math.round(e.cpuPct)}% CPU`:""}</div>`:n.s6}
    </div>
  `}(e,t);if("plug"===e.kind)return function(e,t){var i,o;const r=ye(e,t,ge(96)),s=e.outlets[0],a=s?!0===s.on||(null!==(i=s.powerW)&&void 0!==i?i:0)>0:"connected"===e.state,l=null!==(o=null==s?void 0:s.powerW)&&void 0!==o?o:e.acPowerConsumptionW;return n.qy`
    <div class="uc-unifi-plug-tile ${a?"is-on":""}" data-device="${e.deviceId}">
      ${r?n.qy`<img class="uc-unifi-plug-img" src="${r}" alt="${e.model||e.name}" loading="lazy" draggable="false" />`:n.qy`<ha-icon icon="mdi:power-plug-outline"></ha-icon>`}
      <div class="uc-unifi-ap-label">${e.name}</div>
      <div class="uc-unifi-ap-meta">
        ${null!=l?`${l.toFixed(1)} W`:a?"on":"off"}
      </div>
    </div>
  `}(e,t);const i=ye(e,t);if(i)return function(e,t,i){const o="connected"===e.state||void 0===e.state,r=e.ports.filter(e=>e.up).length,s=function(e){const t=m.lookup(e.model);return f(null==t?void 0:t.sku)||f(e.model)}(e),a=Math.max(e.ports.length,s?Math.max(...s.cells.map(e=>e.index)):0);return n.qy`
    <div class="uc-unifi-photo-unit" data-device="${e.deviceId}" data-kind="${e.kind}">
      <div class="uc-unifi-photo-stage">
        <div class="uc-unifi-photo-frame">
          <img
            class="uc-unifi-photo-img"
            src="${i}"
            alt="${e.model||e.name}"
            loading="lazy"
            draggable="false"
            @error=${e=>{e.currentTarget.style.display="none"}}
          />
          ${s?function(e,t,i){const o=new Map(e.ports.map(e=>[e.index,e])),r=t.animation||"full";return n.qy`
    <div class="uc-unifi-port-lights" aria-hidden="true">
      ${i.cells.map(e=>{var i;const s=o.get(e.index),a=!0===(null==s?void 0:s.up),l=ve(null!==(i=null==s?void 0:s.linkSpeedMbps)&&void 0!==i?i:null),{rx:d,tx:c}=a&&s?we(s,t.hass):{rx:0,tx:0},u="off"!==r?me(d):0,p="off"!==r?me(c):0,f=!!s&&(!0===s.poeOn||null!=s.poePowerW&&s.poePowerW>0),v=`left:${(100*(e.cx-e.w/2)).toFixed(3)}%;top:${(100*e.y).toFixed(3)}%;width:${(100*e.w).toFixed(3)}%;height:${(100*e.h).toFixed(3)}%;`,h=he(d+c);return n.qy`
          <span
            class="uc-unifi-port-cell ${a?"is-up":"is-down"} kind-${e.kind}"
            style="${v}${a?`--plc:${l};`:""}"
            title="P${e.index}${(null==s?void 0:s.linkSpeedMbps)?` · ${s.linkSpeedMbps} Mbps`:""}${a?` · ${h}`:" · down"}${f&&null!=(null==s?void 0:s.poePowerW)?` · PoE ${s.poePowerW} W`:""}"
          >
            <i class="etherlight"></i>
            ${a?n.qy`<i class="halo"></i>`:n.s6}
            <span class="leds">
              <i
                class="led-rx ${a&&u>0?"is-active":""} ${a?"is-lit":""}"
                style="${u>0?`--uc-unifi-act:${u}s;`:""}"
              ></i>
              <i
                class="led-tx ${a&&p>0?"is-active":""} ${a?"is-lit":""}"
                style="${p>0?`--uc-unifi-act:${p}s;`:""}"
              ></i>
            </span>
            ${f?n.qy`<i class="led-poe"></i>`:n.s6}
          </span>
        `})}
    </div>
  `}(e,t,s):n.s6}
        </div>
        ${!s&&e.ports.length?n.qy`<div class="uc-unifi-photo-strip">${function(e,t){const i=[...e.ports].sort((e,t)=>e.index-t.index);if(!i.length)return n.s6;const o=t.animation||"full",r=i.slice(0,52);return n.qy`
    <span class="uc-unifi-port-row" aria-hidden="true">
      ${r.map(e=>{var i;const r=e.up,s=ve(e.linkSpeedMbps),{rx:a,tx:l}=r?we(e,t.hass):{rx:0,tx:0},d="off"!==o?me(a):0,c="off"!==o?me(l):0,u=!0===e.poeOn||null!=e.poePowerW&&e.poePowerW>0,p=(null!==(i=e.linkSpeedMbps)&&void 0!==i?i:0)>=1e4||/sfp/i.test(e.name||"");return n.qy`
          <span
            class="uc-unifi-port-cell in-row ${r?"is-up":"is-down"} ${p?"kind-sfp":"kind-rj45"}"
            style="${r?`--plc:${s};`:""}"
            title="P${e.index}${e.linkSpeedMbps?` · ${e.linkSpeedMbps} Mbps`:""}${r?` · ${he(a+l)}`:" · down"}${u&&null!=e.poePowerW?` · PoE ${e.poePowerW} W`:""}"
          >
            <i class="etherlight"></i>
            ${r?n.qy`<i class="halo"></i>`:n.s6}
            <span class="leds">
              <i
                class="led-rx ${r&&d>0?"is-active":""} ${r?"is-lit":""}"
                style="${d>0?`--uc-unifi-act:${d}s;`:""}"
              ></i>
              <i
                class="led-tx ${r&&c>0?"is-active":""} ${r?"is-lit":""}"
                style="${c>0?`--uc-unifi-act:${c}s;`:""}"
              ></i>
            </span>
            ${u?n.qy`<i class="led-poe"></i>`:n.s6}
          </span>
        `})}
    </span>
  `}(e,t)}</div>`:n.s6}
      </div>
      <div class="uc-unifi-photo-footer">
        <span class="nm">${e.name}</span>
        <span class="meta">
          ${a?n.qy`<span class="ports">${r}/${a}</span>`:n.s6}
          ${e.state?n.qy`<span class="state ${o?"ok":"bad"}">${e.state}</span>`:n.s6}
        </span>
      </div>
    </div>
  `}(e,t,i);const o=function(e){const t=Math.max(e.ports.length,0),i=(e.model||"").toUpperCase(),n=e.heightU||1;if("ap"===e.kind)return{widthU:1,heightU:1,portRows:0,portsPerRow:0,sfpSlots:0,extras:["puck"]};if("pdu"===e.kind||e.outlets.length>0)return{widthU:1,heightU:n,portRows:0,portsPerRow:0,sfpSlots:0,extras:["outlets","vents"]};if("gateway"===e.kind){const e=/PRO|SE|ENTERPRISE|MAX|UDM-PRO|UXG/.test(i)?2:0;return{widthU:1,heightU:n,portRows:1,portsPerRow:Math.min(Math.max(t-e,4),8),sfpSlots:e,extras:["display","drive","vents"]}}let o=8,r=1,s=0;return t>=48||/48/.test(i)?(o=24,r=2,s=/SFP|PRO|ENTERPRISE|AGG/.test(i)?4:2):t>=24||/24/.test(i)?(o=12,r=2,s=/SFP|PRO|ENTERPRISE/.test(i)?2:0):t>=16||/16/.test(i)?(o=8,r=2,s=/SFP/.test(i)?2:0):t>=8||/8/.test(i)?(o=Math.max(t,8),r=1,s=/SFP|60W|150W|PRO/.test(i)?2:0):t>0&&(o=t,r=1),{widthU:1,heightU:n,portRows:r,portsPerRow:o,sfpSlots:s,extras:["vents"]}}(e);return o.extras.includes("outlets")?function(e,t,i){const o=e.outlets.length?e.outlets:Array.from({length:8},(e,t)=>({index:t+1,name:`Outlet ${t+1}`,powerW:null,on:null})),r=520,s=56*t.heightU;return n.qy`
    <div class="uc-unifi-faceplate uc-unifi-pdu" data-device="${e.deviceId}">
      <svg viewBox="0 0 ${r} ${s}" class="uc-unifi-fp-svg" preserveAspectRatio="xMidYMid meet">
        <rect
          x="1"
          y="1"
          width="${518}"
          height="${s-2}"
          rx="4"
          fill="${xe(i.styleVariant)}"
          stroke="${be(i.styleVariant)}"
          stroke-width="1.5"
        />
        ${_e(r,s)}
        ${o.map((e,t)=>{const i=28+58*t,o=!0===e.on||null!=e.powerW&&e.powerW>0;return n.JW`
            <g transform="translate(${i}, ${s/2-10})">
              <rect width="36" height="20" rx="3" fill="${o?"#2a3a28":"#11151c"}" stroke="${o?"#69f0ae":"#3a4455"}" />
              <circle cx="10" cy="10" r="3" fill="${o?"#69f0ae":"#445"}" />
              <circle cx="26" cy="10" r="3" fill="${o?"#69f0ae":"#445"}" />
            </g>
          `})}
        <text x="16" y="${s-8}" fill="currentColor" font-size="9" opacity="0.65">${e.name}</text>
        ${null!=e.acPowerConsumptionW?n.JW`<text x="${504}" y="${s-8}" text-anchor="end" fill="#ffd740" font-size="9">${e.acPowerConsumptionW.toFixed(0)} W</text>`:n.s6}
      </svg>
    </div>
  `}(e,o,t):function(e,t,i){const o=560,r=64*Math.max(1,t.heightU),s=[...e.ports].sort((e,t)=>e.index-t.index),a=t.portRows*t.portsPerRow,l=i.animation||"full",d=t.extras.includes("display"),c=t.extras.includes("drive"),u=d?88:28,p=t.sfpSlots>0?16+22*t.sfpSlots:20,f=o-u-p,v=t.portRows>1?18:22,h=t.portRows>1?r/2-v-2:r/2-v/2,g=s.filter(e=>e.up).length;return n.qy`
    <div
      class="uc-unifi-faceplate uc-unifi-switch ${"gateway"===e.kind?"is-gateway":""}"
      data-device="${e.deviceId}"
      data-kind="${e.kind}"
    >
      <svg viewBox="0 0 ${o} ${r}" class="uc-unifi-fp-svg" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="fp-shine-${e.deviceId}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(255,255,255,0.08)" />
            <stop offset="100%" stop-color="rgba(0,0,0,0.25)" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="${558}"
          height="${r-2}"
          rx="5"
          fill="${xe(i.styleVariant)}"
          stroke="${be(i.styleVariant)}"
          stroke-width="${"blueprint"===i.styleVariant?1:1.5}"
          stroke-dasharray="${"blueprint"===i.styleVariant?"4 3":"none"}"
        />
        <rect x="1" y="1" width="${558}" height="${r-2}" rx="5" fill="url(#fp-shine-${e.deviceId})" />
        ${_e(o,r)}

        ${d?n.JW`
            <g transform="translate(14, ${r/2-16})">
              <rect width="64" height="32" rx="3" fill="#0a1020" stroke="#1e90ff" stroke-width="1" />
              <text x="32" y="13" text-anchor="middle" fill="#4fc3f7" font-size="7" font-family="monospace">${g} PORTS</text>
              <text x="32" y="24" text-anchor="middle" fill="#4fc3f7" font-size="7" font-family="monospace">UP</text>
              <rect x="8" y="27" width="${Math.min(48,g/Math.max(1,s.length)*48)}" height="2" fill="#2979ff" />
            </g>
          `:n.s6}

        ${c?n.JW`
            <g transform="translate(${490}, ${r/2-10})">
              <rect width="48" height="20" rx="2" fill="#12161e" stroke="#333a48" />
              <circle cx="40" cy="10" r="2" fill="${"connected"===e.state?"#69f0ae":"#f44336"}" />
            </g>
          `:n.s6}

        ${Array.from({length:t.portRows}).map((e,o)=>{const r=h+o*(v+4);return Array.from({length:t.portsPerRow}).map((e,a)=>{const d=o*t.portsPerRow+a;return function(e,t,i,o,r,s,a){if(!e)return n.JW`
      <g transform="translate(${t}, ${i})" opacity="0.25">
        <rect width="14" height="${o}" rx="2" fill="#0d1118" stroke="#2a3140" />
      </g>
    `;const l=e.up?s.accent&&e.linkSpeedMbps&&e.linkSpeedMbps>=1e3?s.accent:ve(e.linkSpeedMbps):"rgba(80,90,110,0.4)",d=function(e,t){const{rx:i,tx:n}=we(e,t);return me(i+n)}(e,s.hass),c=!0===e.poeOn||null!=e.poePowerW&&e.poePowerW>0,u=d>0&&"off"!==r?`--uc-unifi-act: ${d}s; filter: drop-shadow(0 0 3px ${l})`:e.up?`filter: drop-shadow(0 0 2px ${l})`:"";return n.JW`
    <g
      class="uc-unifi-port ${e.up?"is-up":"is-down"} ${d>0&&"off"!==r?"is-active":""} ${c?"is-poe":""}"
      transform="translate(${t}, ${i})"
      style="${u}"
      data-port="${e.index}"
    >
      <rect width="14" height="${o}" rx="2" fill="#0a0e14" stroke="${l}" stroke-width="${e.up?1.4:.8}" />
      <rect class="uc-unifi-port-led" x="3" y="3" width="8" height="${o-6}" rx="1" fill="${l}" />
      ${c?n.JW`<circle cx="7" cy="${o-3}" r="1.6" fill="#ffd740" class="uc-unifi-poe-dot" />`:n.s6}
      ${s.showLabels?n.JW`<title>P${e.index} ${e.name}${e.linkSpeedMbps?` · ${e.linkSpeedMbps} Mbps`:""}${c&&null!=e.poePowerW?` · ${e.poePowerW} W`:""}</title>`:n.JW`<title>P${e.index||a}</title>`}
    </g>
  `}(s[d],u+(a+.5)*(f/t.portsPerRow)-7,r,v,l,i,d+1)})})}

        ${t.sfpSlots>0?Array.from({length:t.sfpSlots}).map((e,t)=>{var i;const l=s[a+t]||s.find(e=>/sfp/i.test(e.name)),d=o-p+4+20*t,c=r/2-8,u=null!==(i=null==l?void 0:l.up)&&void 0!==i&&i,f=l?ve(l.linkSpeedMbps):"#334";return n.JW`
                <g transform="translate(${d}, ${c})">
                  <rect width="16" height="16" rx="2" fill="#0d1118" stroke="${u?f:"#3a4455"}" stroke-width="1.2" />
                  <rect x="3" y="4" width="10" height="8" rx="1" fill="${u?f:"#222"}" opacity="0.85" />
                </g>
              `}):n.s6}

        <text x="18" y="${r-6}" fill="currentColor" font-size="8" opacity="0.55">${e.model||e.kind}</text>
        <text x="${280}" y="${r-6}" text-anchor="middle" fill="currentColor" font-size="9" font-weight="600" opacity="0.85">${e.name}</text>
        ${e.state?n.JW`<text x="${542}" y="${r-6}" text-anchor="end" fill="${"connected"===e.state?"#69f0ae":"#ff8a65"}" font-size="8">${e.state}</text>`:n.s6}
      </svg>
    </div>
  `}(e,o,t)}function _e(e,t){return[[8,8],[e-8,8],[8,t-8],[e-8,t-8]].map(([e,t])=>n.JW`
      <circle cx="${e}" cy="${t}" r="2.2" fill="#0d1118" stroke="#3a4458" stroke-width="0.8" />
      <line x1="${e-1.4}" y1="${t}" x2="${e+1.4}" y2="${t}" stroke="#556" stroke-width="0.6" />
    `)}const $e=new Set(["gateway","switch","pdu","nvr"]),Ie=new Map;var Ee=i(1671);const Se=new Map;const Pe=new Map,Ue=new Map,Me=new Set;function Ce(e,t,i){return Ue.has(e)?Ue.get(e)||null:(Me.has(e)||(Me.add(e),pe.getCapabilityReport(t).then(t=>{Ue.set(e,t),Me.delete(e),i()}).catch(()=>{Me.delete(e),Ue.set(e,null),i()})),null)}function ze(e){Ue.delete(e),Me.delete(e)}function Ae(e,t,i,o){var s;if(e.setup_dismissed)return n.s6;const a=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en";if(!i)return n.qy`
      <div class="uc-unifi-wizard">
        <h3>
          <ha-icon icon="mdi:lan-check" style="--mdc-icon-size:18px;"></ha-icon>
          ${(0,r.kg)("editor.unifi.wizard_loading",a,"Checking UniFi setup…")}
        </h3>
      </div>
    `;const l=!i.hasDevices,d=i.disabledEntityIds.length>0,c=i.bandwidthOptionMissing,u=i.tipsByView[e.view||"rack"];if(!(l||d||c||u))return n.s6;const p=pe.isAdmin(t),f=Pe.get(e.id),v=(e,t)=>{const i="enabled"===t?"ok":"disabled"===t?"warn":"bad";return n.qy`<span class="uc-unifi-badge ${i}">${e}: ${t}</span>`},h=e=>{e.stopPropagation()};return n.qy`
    <div class="uc-unifi-wizard">
      <h3>
        <ha-icon icon="mdi:wizard-hat" style="--mdc-icon-size:18px;"></ha-icon>
        ${(0,r.kg)("editor.unifi.wizard_title",a,"UniFi setup")}
      </h3>

      <div class="uc-unifi-badges">
        ${v("Devices",i.hasDevices?"enabled":"absent")}
        ${v("Port bandwidth",i.portBandwidth)}
        ${v("Link speed",i.portLinkSpeed)}
        ${v("PoE",i.portPoe)}
        ${v("Temperature",i.deviceTemperature)}
        ${v("WAN latency",i.wanLatency)}
      </div>

      ${l?n.qy`
            <p>
              ${(0,r.kg)("editor.unifi.wizard_no_devices",a,"No Ubiquiti UniFi devices were found. Install the official UniFi Network integration, then reload this card.")}
              <a href="https://www.home-assistant.io/integrations/unifi/" target="_blank" rel="noopener"
                >home-assistant.io/integrations/unifi</a
              >
            </p>
          `:n.s6}

      ${d?n.qy`
            <p>
              ${(0,r.kg)("editor.unifi.wizard_disabled",a,"{count} useful UniFi sensors are disabled (port RX/TX, link speed, PoE, temperatures, etc.). Enable them for live port lights, traffic, and device temps.").replace("{count}",String(i.disabledEntityIds.length))}
            </p>
            <div class="uc-unifi-wizard-actions">
              ${p?n.qy`
                    <button
                      class="uc-unifi-btn"
                      type="button"
                      ?disabled=${!!(null==f?void 0:f.running)}
                      @pointerdown=${h}
                      @click=${async n=>{if(n.preventDefault(),n.stopPropagation(),!p||(null==f?void 0:f.running))return;const r=i.disabledEntityIds;Pe.set(e.id,{done:0,total:r.length,running:!0}),o.triggerPreviewUpdate(),await pe.enableEntities(t,r,(t,i)=>{Pe.set(e.id,{done:t,total:i,running:!0}),o.triggerPreviewUpdate()}),Pe.set(e.id,{done:r.length,total:r.length,running:!1}),ze(e.id),o.onEnabled(),o.triggerPreviewUpdate()}}
                    >
                      ${(null==f?void 0:f.running)?(0,r.kg)("editor.unifi.wizard_enabling",a,"Enabling…"):(0,r.kg)("editor.unifi.wizard_enable",a,"Enable sensors")}
                    </button>
                  `:n.qy`
                    <p style="margin:0;font-size:12px;">
                      ${(0,r.kg)("editor.unifi.wizard_admin_required",a,"Ask a Home Assistant admin to enable these entities, or sign in as an admin to use one-click setup.")}
                    </p>
                  `}
            </div>
            ${f?n.qy`
                  <div class="uc-unifi-progress" style="--pct: ${f.total?f.done/f.total*100:0}%;">
                    <i></i>
                  </div>
                `:n.s6}
          `:n.s6}

      ${c?n.qy`
            <p>
              ${(0,r.kg)("editor.unifi.wizard_bandwidth_option",a,"Port bandwidth sensors are missing entirely. In Settings → Devices & services → UniFi Network → Configure → More options, enable “Bandwidth usage sensors for network clients”, then come back and enable the new sensors.")}
            </p>
            <div class="uc-unifi-wizard-actions">
              <a class="uc-unifi-btn secondary" href="/config/integrations/integration/unifi" style="text-decoration:none;">
                ${(0,r.kg)("editor.unifi.wizard_open_integration",a,"Open UniFi integration")}
              </a>
            </div>
          `:n.s6}

      ${u&&!l?n.qy`<p style="margin-top:8px;">${u}</p>`:n.s6}

      <div class="uc-unifi-wizard-actions" style="margin-top:10px;">
        <button
          class="uc-unifi-btn linkish"
          type="button"
          @pointerdown=${h}
          @click=${e=>{e.preventDefault(),e.stopPropagation(),o.onDismiss()}}
        >
          ${(0,r.kg)("editor.unifi.wizard_dismiss",a,"Dismiss")}
        </button>
      </div>
    </div>
  `}var Fe=i(4830);class We extends o.m{constructor(){super(...arguments),this.metadata={type:"unifi",title:"UniFi Network",description:"Virtual rack, live ports, topology and clients for UniFi gear",author:"WJD Designs",version:"1.0.0",icon:"mdi:lan",category:"data",tags:["pro","premium","unifi","ubiquiti","network","rack","ports","topology","server-room"]},this._discoveredIds=new Map,this._deviceFilter=new Map,this._clientFilter=new Map,this._orderDragIndex=new Map}createDefault(e,t){return{id:e||this.generateId("unifi"),type:"unifi",view:"rack",device_order:[],hidden_device_ids:[],include_clients:!0,client_ids:[],curation_seeded:!1,rack_max_devices:16,use_device_images:!0,show_camera_previews:!0,show_title:!0,title:"UniFi Network",rack_style:"theme",blank_background:!1,show_port_labels:!0,show_advanced:!0,show_sparklines:!0,animation_intensity:"full",topology_layout:"tree",setup_dismissed:!1,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getRuntimeEntityIds(e){const t=e;return this._discoveredIds.get(t.id)||[]}destroy(e){e&&(function(e){S.forget(e)}(e),this._discoveredIds.delete(e),ze(e))}_topology(e,t){const i=ce(t,e.id,{include_clients:!1!==e.include_clients,area_filter:e.area_filter});return this._discoveredIds.set(e.id,i.allEntityIds),i}_visibleDevices(e,t){return ue(t.devices,e.device_order,e.hidden_device_ids,e.include_device_ids)}_maybeSeedCuration(e,t,i){const n=function(e,t){var i,n;if(t.curation_seeded)return null;if(((null===(i=t.hidden_device_ids)||void 0===i?void 0:i.length)||0)>0)return{hidden_device_ids:[...t.hidden_device_ids||[]],device_order:[...t.device_order||[]],curation_seeded:!0};const o=new Set(ie(e,{max:null!==(n=t.rack_max_devices)&&void 0!==n?n:16}));return{hidden_device_ids:e.filter(e=>!o.has(e.deviceId)).map(e=>e.deviceId),device_order:[...o],curation_seeded:!0}}(t.devices,e);return n?(queueMicrotask(()=>i(n)),Object.assign(Object.assign({},e),n)):e}_callService(e,t,i,n){try{e.callService(t,i,n)}catch(e){}}_kindIcon(e){switch(e){case"ap":return"mdi:wifi";case"gateway":return"mdi:router-network";case"pdu":return"mdi:power-socket-us";case"plug":return"mdi:power-plug-outline";case"switch":return"mdi:switch";case"camera":return"mdi:cctv";case"nvr":return"mdi:nas";default:return"mdi:lan"}}_renderDevicePicker(e,t,i,o){var s;const a=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",l=this._deviceFilter.get(e.id)||{q:"",kind:"all"},d=new Set(e.hidden_device_ids||[]),c=i.devices.filter(e=>!d.has(e.deviceId)).length,u=i.devices.filter(e=>{if("all"!==l.kind&&e.kind!==l.kind)return!1;if(!l.q.trim())return!0;const t=l.q.trim().toLowerCase();return e.name.toLowerCase().includes(t)||(e.model||"").toLowerCase().includes(t)||e.kind.includes(t)}),p=(t,i)=>{const n=new Set(e.hidden_device_ids||[]);for(const e of t)i?n.add(e):n.delete(e);o({hidden_device_ids:[...n],curation_seeded:!0}),this.triggerPreviewUpdate()},f={gateway:i.devices.filter(e=>"gateway"===e.kind).length,switch:i.devices.filter(e=>"switch"===e.kind).length,ap:i.devices.filter(e=>"ap"===e.kind).length,pdu:i.devices.filter(e=>"pdu"===e.kind).length,plug:i.devices.filter(e=>"plug"===e.kind).length,camera:i.devices.filter(e=>"camera"===e.kind).length,nvr:i.devices.filter(e=>"nvr"===e.kind).length,other:i.devices.filter(e=>"other"===e.kind).length};return n.qy`
      <div
        class="settings-section"
        style="background:var(--secondary-background-color);border-radius:var(--uc-r-8, 8px);padding:16px;margin-bottom:24px;"
      >
        <div
          class="section-title"
          style="font-size:14px;font-weight:700;color:var(--primary-color);margin-bottom:8px;"
        >
          ${(0,r.kg)("editor.unifi.device_list",a,"UniFi hardware")}
        </div>
        <div style="font-size:12px;color:var(--secondary-text-color);margin-bottom:12px;line-height:1.45;">
          ${(0,r.kg)("editor.unifi.device_list_hint",a,"Only Ubiquiti hardware appears here — network gear plus UniFi Protect cameras and NVRs. Connected phones, PCs, and IoT stay in the Clients view. Plugs and cameras never mount in the rack — shown ones appear in the Devices view.")}
          ${i.clients.length?n.qy`<br />${(0,r.kg)("editor.unifi.clients_aside",a,"{count} network clients available in the Clients view.").replace("{count}",String(i.clients.length))}`:n.s6}
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;align-items:center;">
          <span style="font-size:12px;font-weight:600;">
            ${(0,r.kg)("editor.unifi.showing_count",a,"Showing {shown} of {total}").replace("{shown}",String(c)).replace("{total}",String(i.devices.length))}
          </span>
          <span style="flex:1;"></span>
          <button
            class="uc-unifi-btn secondary"
            type="button"
            style="padding:4px 10px;font-size:11px;"
            @click=${()=>{var t;const n=ie(i.devices,{max:null!==(t=e.rack_max_devices)&&void 0!==t?t:16}),r=i.devices.filter(e=>!n.includes(e.deviceId)).map(e=>e.deviceId);o({hidden_device_ids:r,device_order:n,curation_seeded:!0}),this.triggerPreviewUpdate()}}
          >
            ${(0,r.kg)("editor.unifi.show_rack_gear",a,"Show rack gear only")}
          </button>
          <button
            class="uc-unifi-btn secondary"
            type="button"
            style="padding:4px 10px;font-size:11px;"
            @click=${()=>p(i.devices.map(e=>e.deviceId),!1)}
          >
            ${(0,r.kg)("editor.unifi.show_all",a,"Show all")}
          </button>
          <button
            class="uc-unifi-btn secondary"
            type="button"
            style="padding:4px 10px;font-size:11px;"
            @click=${()=>p(i.devices.map(e=>e.deviceId),!0)}
          >
            ${(0,r.kg)("editor.unifi.hide_all",a,"Hide all")}
          </button>
        </div>

        ${this.renderSegmentedField((0,r.kg)("editor.unifi.filter_kind",a,"Filter by type"),"",l.kind,[{value:"all",label:(0,r.kg)("editor.unifi.kind_all",a,"All ({n})").replace("{n}",String(i.devices.length))},{value:"gateway",label:(0,r.kg)("editor.unifi.kind_gateway",a,"Gateways ({n})").replace("{n}",String(f.gateway))},{value:"switch",label:(0,r.kg)("editor.unifi.kind_switch",a,"Switches ({n})").replace("{n}",String(f.switch))},{value:"ap",label:(0,r.kg)("editor.unifi.kind_ap",a,"APs ({n})").replace("{n}",String(f.ap))},{value:"pdu",label:(0,r.kg)("editor.unifi.kind_pdu",a,"PDUs ({n})").replace("{n}",String(f.pdu))},{value:"plug",label:(0,r.kg)("editor.unifi.kind_plug",a,"Plugs ({n})").replace("{n}",String(f.plug))},{value:"camera",label:(0,r.kg)("editor.unifi.kind_camera",a,"Cameras ({n})").replace("{n}",String(f.camera))},{value:"nvr",label:(0,r.kg)("editor.unifi.kind_nvr",a,"NVRs ({n})").replace("{n}",String(f.nvr))}].filter(e=>{var t;return"all"===e.value||Number((null===(t=e.label.match(/\((\d+)\)/))||void 0===t?void 0:t[1])||0)>0}),t=>{this._deviceFilter.set(e.id,Object.assign(Object.assign({},l),{kind:t})),this.triggerPreviewUpdate(!0)})}

        ${this.renderFieldSection((0,r.kg)("editor.unifi.search_devices",a,"Search"),(0,r.kg)("editor.unifi.search_devices_desc",a,"Filter by name or model."),t,{q:l.q},[this.textField("q")],t=>{var i,n;this._deviceFilter.set(e.id,Object.assign(Object.assign({},l),{q:null!==(n=null===(i=t.detail.value)||void 0===i?void 0:i.q)&&void 0!==n?n:""})),this.triggerPreviewUpdate(!0)})}

        <div style="max-height:320px;overflow:auto;margin-top:8px;">
          ${0===u.length?n.qy`<div style="font-size:12px;opacity:0.65;padding:8px 0;">
                ${(0,r.kg)("editor.unifi.no_match",a,"No devices match this filter.")}
              </div>`:u.map(e=>{const t=d.has(e.deviceId);return n.qy`
                  <div
                    style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--divider-color);"
                  >
                    <ha-icon
                      icon=${this._kindIcon(e.kind)}
                      style="--mdc-icon-size:18px;opacity:0.7;"
                    ></ha-icon>
                    <div style="flex:1;min-width:0;">
                      <div
                        style="font-weight:600;font-size:13px;${t?"opacity:0.45;text-decoration:line-through;":""}"
                      >
                        ${e.name}
                      </div>
                      <div style="font-size:11px;opacity:0.6;">
                        ${e.kind} · ${e.model||"—"}${e.ports.length?` · ${e.ports.length} ports`:""}
                      </div>
                    </div>
                    <button
                      class="uc-unifi-btn secondary"
                      type="button"
                      style="padding:4px 10px;font-size:11px;"
                      @click=${()=>p([e.deviceId],!t)}
                    >
                      ${t?(0,r.kg)("editor.unifi.show",a,"Show"):(0,r.kg)("editor.unifi.hide",a,"Hide")}
                    </button>
                  </div>
                `})}
        </div>
      </div>
    `}_renderRackOrder(e,t,i,o){var s;const a=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",l=new Set(["gateway","switch","pdu","nvr"]),d=ue(i.devices,e.device_order,e.hidden_device_ids).filter(e=>l.has(e.kind));if(d.length<2)return n.s6;const c=(t,i)=>{if(t===i||t<0||i<0)return;const n=d.map(e=>e.deviceId),r=[...n],[s]=r.splice(t,1);r.splice(i,0,s);const a=(e.device_order||[]).filter(e=>!n.includes(e));o({device_order:[...r,...a]}),this.triggerPreviewUpdate()},u=e=>{var t;return null===(t=e.closest(".uc-unifi-order-list"))||void 0===t?void 0:t.querySelectorAll(".is-over").forEach(e=>e.classList.remove("is-over"))};return n.qy`
      <div
        class="settings-section"
        style="background:var(--secondary-background-color);border-radius:var(--uc-r-8, 8px);padding:16px;margin-bottom:24px;"
      >
        <div
          class="section-title"
          style="font-size:14px;font-weight:700;color:var(--primary-color);margin-bottom:8px;"
        >
          ${(0,r.kg)("editor.unifi.rack_order",a,"Rack order")}
        </div>
        <div style="font-size:12px;color:var(--secondary-text-color);margin-bottom:12px;line-height:1.45;">
          ${(0,r.kg)("editor.unifi.rack_order_hint",a,"Drag devices to arrange the rack top to bottom.")}
        </div>
        <div class="uc-unifi-order-list">
          ${d.map((t,i)=>n.qy`
              <div
                class="uc-unifi-order-row"
                draggable="true"
                @dragstart=${t=>{var n;this._orderDragIndex.set(e.id,i),null===(n=t.dataTransfer)||void 0===n||n.setData("text/plain",String(i)),t.dataTransfer&&(t.dataTransfer.effectAllowed="move")}}
                @dragover=${e=>{e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),u(e.currentTarget),e.currentTarget.classList.add("is-over")}}
                @dragleave=${e=>e.currentTarget.classList.remove("is-over")}
                @drop=${t=>{t.preventDefault(),u(t.currentTarget);const n=this._orderDragIndex.get(e.id);this._orderDragIndex.delete(e.id),null!=n&&c(n,i)}}
                @dragend=${t=>{u(t.currentTarget),this._orderDragIndex.delete(e.id)}}
              >
                <ha-icon
                  icon="mdi:drag-horizontal-variant"
                  style="--mdc-icon-size:18px;opacity:0.55;cursor:grab;"
                ></ha-icon>
                <span class="pos">${i+1}</span>
                <ha-icon icon=${this._kindIcon(t.kind)} style="--mdc-icon-size:16px;opacity:0.7;"></ha-icon>
                <div style="flex:1;min-width:0;">
                  <div style="font-weight:600;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                    ${t.name}
                  </div>
                  <div style="font-size:11px;opacity:0.6;">${t.model||t.kind}</div>
                </div>
                <button
                  class="uc-unifi-btn secondary"
                  type="button"
                  style="padding:2px 8px;font-size:12px;"
                  ?disabled=${0===i}
                  title=${(0,r.kg)("editor.unifi.move_up",a,"Move up")}
                  @click=${()=>c(i,i-1)}
                >
                  ↑
                </button>
                <button
                  class="uc-unifi-btn secondary"
                  type="button"
                  style="padding:2px 8px;font-size:12px;"
                  ?disabled=${i===d.length-1}
                  title=${(0,r.kg)("editor.unifi.move_down",a,"Move down")}
                  @click=${()=>c(i,i+1)}
                >
                  ↓
                </button>
              </div>
            `)}
        </div>
      </div>
    `}_renderTopologyLinks(e,t,i,o){var s;const a=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",l=this._visibleDevices(e,i),d=new Map(l.map(e=>[e.deviceId,e])),c=t=>{var i;return(null===(i=(e.device_overrides||[]).find(e=>e.device_id===t))||void 0===i?void 0:i.uplink_device_id)||void 0},u=l.filter(e=>!("gateway"===e.kind||!c(e.deviceId)&&e.uplinkDeviceId&&d.has(e.uplinkDeviceId)));if(!u.length)return n.qy``;const p=(t,i)=>{const n=[...e.device_overrides||[]],r=n.findIndex(e=>e.device_id===t);if(r>=0){const e=n[r],{uplink_device_id:t}=e,o=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i}(e,["uplink_device_id"]),s=i?Object.assign(Object.assign({},o),{uplink_device_id:i}):o;Object.entries(s).some(([e,t])=>"device_id"!==e&&void 0!==t)?n[r]=s:n.splice(r,1)}else i&&n.push({device_id:t,uplink_device_id:i});o({device_overrides:n}),this.triggerPreviewUpdate()};return n.qy`
      <div
        class="settings-section"
        style="background:var(--secondary-background-color);border-radius:var(--uc-r-8, 8px);padding:16px;margin-bottom:24px;"
      >
        <div
          class="section-title"
          style="font-size:14px;font-weight:700;color:var(--primary-color);margin-bottom:8px;"
        >
          ${(0,r.kg)("editor.unifi.topology_links",a,"Topology links")}
        </div>
        <div style="font-size:12px;color:var(--secondary-text-color);margin-bottom:12px;line-height:1.45;">
          ${(0,r.kg)("editor.unifi.topology_links_hint",a,"These devices don’t report an uplink, so the card guesses their parent (shown as a dashed line). UniFi Protect cameras never report one — pin the switch they plug into.")}
        </div>
        ${u.map(e=>{var i;const o=V(e,l),s=o?(null===(i=d.get(o))||void 0===i?void 0:i.name)||o:"—",u=[{value:"",label:(0,r.kg)("editor.unifi.uplink_auto",a,"Auto ({name})").replace("{name}",s)},...l.filter(t=>t.deviceId!==e.deviceId).map(e=>({value:e.deviceId,label:e.name}))];return n.qy`
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
              <ha-icon
                icon=${this._kindIcon(e.kind)}
                style="--mdc-icon-size:18px;opacity:0.7;flex-shrink:0;"
              ></ha-icon>
              <div style="flex:1;min-width:0;">
                <div
                  style="font-weight:600;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
                >
                  ${e.name}
                </div>
                <div style="font-size:11px;opacity:0.6;">${e.model||e.kind}</div>
              </div>
              <div style="flex:1.2;min-width:0;">
                ${this.renderUcForm(t,{uplink:c(e.deviceId)||""},[this.selectField("uplink",u)],t=>{var i;return p(e.deviceId,(null===(i=t.detail.value)||void 0===i?void 0:i.uplink)||void 0)},!1)}
              </div>
            </div>
          `})}
      </div>
    `}_renderClientPicker(e,t,i,o){var s;const a=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",l=this._clientFilter.get(e.id)||"",d=new Set(e.client_ids||[]),c=[...i.clients].sort((e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:"base"})),u=l.trim()?c.filter(e=>{const t=l.trim().toLowerCase();return e.name.toLowerCase().includes(t)||e.mac.includes(t.replace(/[^0-9a-f]/g,""))}):c,p=(t,i)=>{const n=new Set(e.client_ids||[]);i?n.add(t):n.delete(t),o({client_ids:[...n]}),this.triggerPreviewUpdate()};return n.qy`
      <div
        class="settings-section"
        style="background:var(--secondary-background-color);border-radius:var(--uc-r-8, 8px);padding:16px;margin-bottom:24px;"
      >
        <div
          class="section-title"
          style="font-size:14px;font-weight:700;color:var(--primary-color);margin-bottom:8px;"
        >
          ${(0,r.kg)("editor.unifi.client_list",a,"Clients")}
        </div>
        <div style="font-size:12px;color:var(--secondary-text-color);margin-bottom:12px;line-height:1.45;">
          ${(0,r.kg)("editor.unifi.client_list_hint",a,"Clients are opt-in: the Clients view only shows the ones you add here.")}
        </div>

        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
          <span style="font-size:12px;font-weight:600;">
            ${(0,r.kg)("editor.unifi.clients_added",a,"{added} of {total} added").replace("{added}",String(d.size)).replace("{total}",String(c.length))}
          </span>
          <span style="flex:1;"></span>
          ${d.size?n.qy`
                <button
                  class="uc-unifi-btn secondary"
                  type="button"
                  style="padding:4px 10px;font-size:11px;"
                  @click=${()=>{o({client_ids:[]}),this.triggerPreviewUpdate()}}
                >
                  ${(0,r.kg)("editor.unifi.clients_clear",a,"Remove all")}
                </button>
              `:n.s6}
        </div>

        ${this.renderFieldSection((0,r.kg)("editor.unifi.search_clients",a,"Search"),(0,r.kg)("editor.unifi.search_clients_desc",a,"Filter by name or MAC."),t,{q:l},[this.textField("q")],t=>{var i,n;this._clientFilter.set(e.id,null!==(n=null===(i=t.detail.value)||void 0===i?void 0:i.q)&&void 0!==n?n:""),this.triggerPreviewUpdate(!0)})}

        <div style="max-height:280px;overflow:auto;margin-top:8px;">
          ${0===u.length?n.qy`<div style="font-size:12px;opacity:0.65;padding:8px 0;">
                ${(0,r.kg)("editor.unifi.no_client_match",a,"No clients match this filter.")}
              </div>`:u.map(e=>{var t;const i=d.has(e.deviceId);return n.qy`
                  <div
                    style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--divider-color);"
                  >
                    <ha-icon
                      icon="mdi:account-network"
                      style="--mdc-icon-size:18px;opacity:0.7;"
                    ></ha-icon>
                    <div style="flex:1;min-width:0;">
                      <div style="font-weight:600;font-size:13px;">${e.name}</div>
                      <div style="font-size:11px;opacity:0.6;">
                        ${e.mac?null===(t=e.mac.match(/.{1,2}/g))||void 0===t?void 0:t.join(":"):"—"}
                      </div>
                    </div>
                    <button
                      class="uc-unifi-btn ${i?"secondary":""}"
                      type="button"
                      style="padding:4px 10px;font-size:11px;"
                      @click=${()=>p(e.deviceId,!i)}
                    >
                      ${i?(0,r.kg)("editor.unifi.client_remove",a,"Remove"):(0,r.kg)("editor.unifi.client_add",a,"Add")}
                    </button>
                  </div>
                `})}
        </div>
      </div>
    `}renderGeneralTab(e,t,i,o){var a,l;const d=e,c=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";if(!(0,s.gf)(t))return(0,s.b5)(c,(0,r.kg)("editor.unifi.pro_description",c,"UniFi Network builds a live virtual rack, port panel, topology map, and client monitor from your official UniFi integration — with animated port lights, utilization rings, and one-click sensor setup."));const u=this._topology(d,t);!1!==d.use_device_images&&m.ensureLoaded(()=>this.triggerPreviewUpdate());const p=this._maybeSeedCuration(d,u,e=>{o(e)}),f=this._visibleDevices(p,u),v=Ce(d.id,t,()=>this.triggerPreviewUpdate()),h=(p.hidden_device_ids||[]).length,g=p.view||"rack",y="rack"===g||"ports"===g||"devices"===g||"topology"===g,w="rack"===g||"devices"===g,x="clients"!==g&&"wan"!==g;return n.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        ${Ae(p,t,v,{onDismiss:()=>{o({setup_dismissed:!0}),this.triggerPreviewUpdate()},onEnabled:()=>this.triggerPreviewUpdate(),triggerPreviewUpdate:()=>this.triggerPreviewUpdate()})}

        ${this.renderSettingsSection((0,r.kg)("editor.unifi.section_view",c,"View"),(0,r.kg)("editor.unifi.section_view_desc",c,"Pick how this card visualizes your UniFi network."),[])}

        ${this.renderSegmentedField((0,r.kg)("editor.unifi.view",c,"View mode"),(0,r.kg)("editor.unifi.view_desc",c,"Rack is the hero layout. Ports, devices, topology, clients and WAN cover the rest."),p.view||"rack",[{value:"rack",label:(0,r.kg)("editor.unifi.view_rack",c,"Rack"),icon:"mdi:server"},{value:"ports",label:(0,r.kg)("editor.unifi.view_ports",c,"Ports"),icon:"mdi:ethernet"},{value:"devices",label:(0,r.kg)("editor.unifi.view_devices",c,"Devices"),icon:"mdi:access-point-network"},{value:"topology",label:(0,r.kg)("editor.unifi.view_topology",c,"Topology"),icon:"mdi:sitemap"},{value:"clients",label:(0,r.kg)("editor.unifi.view_clients",c,"Clients"),icon:"mdi:account-network"},{value:"wan",label:(0,r.kg)("editor.unifi.view_wan",c,"WAN"),icon:"mdi:wan"}],e=>{o({view:e}),this.triggerPreviewUpdate()},3)}

        <div
          style="display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:var(--uc-r-8, 8px);background:rgba(var(--rgb-primary-color),0.08);margin:8px 0 24px;"
        >
          <ha-icon
            icon=${u.hasUnifiIntegration||u.devices.length?"mdi:check-circle":"mdi:alert-circle-outline"}
            style="color:var(--primary-color);--mdc-icon-size:22px;flex-shrink:0;"
          ></ha-icon>
          <div style="min-width:0;">
            <div style="font-size:14px;font-weight:600;">
              ${u.devices.length?(0,r.kg)("editor.unifi.found_infra",c,"Found {count} UniFi devices ({shown} shown)").replace("{count}",String(u.devices.length)).replace("{shown}",String(Math.max(0,u.devices.length-h))):(0,r.kg)("editor.unifi.found_none",c,"No UniFi devices found yet")}
            </div>
            <div style="font-size:12px;color:var(--secondary-text-color);">
              ${(0,r.kg)("editor.unifi.found_hint_infra",c,"Gateways, switches, APs and PDUs from the UniFi Network integration.")}
              ${u.clients.length?` ${(0,r.kg)("editor.unifi.found_clients",c,"{count} clients with bandwidth sensors").replace("{count}",String(u.clients.length))}.`:""}
            </div>
          </div>
        </div>

        ${y&&u.devices.length?n.qy`
              ${this.renderSettingsSection((0,r.kg)("editor.unifi.section_devices",c,"Devices"),(0,r.kg)("editor.unifi.section_devices_desc",c,"Show, hide, and order the UniFi hardware this card displays. Connected clients are separate."),[])}
              ${this._renderDevicePicker(p,t,u,o)}
            `:n.s6}

        ${"rack"===g?this._renderRackOrder(p,t,u,o):n.s6}

        ${"topology"===g?this._renderTopologyLinks(p,t,u,o):n.s6}

        ${"clients"===g&&u.clients.length?this._renderClientPicker(p,t,u,o):n.s6}

        ${"ports"===g?this.renderSegmentedField((0,r.kg)("editor.unifi.ports_device",c,"Ports device"),(0,r.kg)("editor.unifi.ports_device_desc",c,"Which switch or gateway the Ports view focuses on."),p.ports_device_id||(null===(l=f.find(e=>e.ports.length))||void 0===l?void 0:l.deviceId)||"",f.filter(e=>e.ports.length>0).map(e=>({value:e.deviceId,label:e.name})),e=>{o({ports_device_id:e}),this.triggerPreviewUpdate()}):n.s6}

        ${this.renderSettingsSection((0,r.kg)("editor.unifi.section_display",c,"Display"),(0,r.kg)("editor.unifi.section_display_desc",c,"Title, style, and eye-candy controls."),[{title:(0,r.kg)("editor.unifi.show_title",c,"Show title"),description:(0,r.kg)("editor.unifi.show_title_desc",c,"Show the card title above the view."),hass:t,data:{show_title:!1!==d.show_title},schema:[this.booleanField("show_title")],onChange:e=>{var t;o({show_title:null===(t=e.detail.value)||void 0===t?void 0:t.show_title}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.unifi.title",c,"Title"),description:(0,r.kg)("editor.unifi.title_desc",c,"Optional heading text."),hass:t,data:{title:d.title||""},schema:[this.textField("title")],onChange:e=>{var t,i;o({title:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.title)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.unifi.blank_background",c,"Blank background"),description:(0,r.kg)("editor.unifi.blank_background_desc",c,"No card or container backgrounds — components float on the dashboard."),hass:t,data:{blank_background:!0===d.blank_background},schema:[this.booleanField("blank_background")],onChange:e=>{var t;o({blank_background:null===(t=e.detail.value)||void 0===t?void 0:t.blank_background}),this.triggerPreviewUpdate()}},..."ports"===g||"devices"===g?[{title:(0,r.kg)("editor.unifi.show_advanced",c,"Show advanced info"),description:(0,r.kg)("editor.unifi.show_advanced_desc",c,"Extra stats like RX/TX rates, uptime, and port counts."),hass:t,data:{show_advanced:!1!==d.show_advanced},schema:[this.booleanField("show_advanced")],onChange:e=>{var t;o({show_advanced:null===(t=e.detail.value)||void 0===t?void 0:t.show_advanced}),this.triggerPreviewUpdate()}}]:[],..."devices"===g||"wan"===g?[{title:(0,r.kg)("editor.unifi.show_sparklines",c,"Show sparklines"),description:(0,r.kg)("editor.unifi.show_sparklines_desc",c,"Mini history graphs on devices and WAN cards (uses recorder)."),hass:t,data:{show_sparklines:!1!==d.show_sparklines},schema:[this.booleanField("show_sparklines")],onChange:e=>{var t;o({show_sparklines:null===(t=e.detail.value)||void 0===t?void 0:t.show_sparklines}),this.triggerPreviewUpdate()}}]:[],..."clients"===g?[{title:(0,r.kg)("editor.unifi.include_clients",c,"Include clients"),description:(0,r.kg)("editor.unifi.include_clients_desc",c,"Discover client bandwidth sensors for the Clients view."),hass:t,data:{include_clients:!1!==d.include_clients},schema:[this.booleanField("include_clients")],onChange:e=>{var t;o({include_clients:null===(t=e.detail.value)||void 0===t?void 0:t.include_clients}),this.triggerPreviewUpdate()}}]:[],...w?[{title:(0,r.kg)("editor.unifi.use_device_images",c,"Real device photos"),description:(0,r.kg)("editor.unifi.use_device_images_desc",c,"Show actual Ubiquiti product photos from ui.com. Falls back to drawn faceplates when offline."),hass:t,data:{use_device_images:!1!==d.use_device_images},schema:[this.booleanField("use_device_images")],onChange:e=>{var t;o({use_device_images:null===(t=e.detail.value)||void 0===t?void 0:t.use_device_images}),this.triggerPreviewUpdate()}}]:[],..."devices"===g&&u.devices.some(e=>"camera"===e.kind)?[{title:(0,r.kg)("editor.unifi.show_camera_previews",c,"Live camera previews"),description:(0,r.kg)("editor.unifi.show_camera_previews_desc",c,"Show live snapshots on UniFi Protect camera tiles instead of product photos."),hass:t,data:{show_camera_previews:!1!==d.show_camera_previews},schema:[this.booleanField("show_camera_previews")],onChange:e=>{var t;o({show_camera_previews:null===(t=e.detail.value)||void 0===t?void 0:t.show_camera_previews}),this.triggerPreviewUpdate()}}]:[],..."rack"===g?[{title:(0,r.kg)("editor.unifi.show_port_labels",c,"Port tooltips"),description:(0,r.kg)("editor.unifi.show_port_labels_desc",c,"Show port name / speed tooltips on faceplates."),hass:t,data:{show_port_labels:!1!==d.show_port_labels},schema:[this.booleanField("show_port_labels")],onChange:e=>{var t;o({show_port_labels:null===(t=e.detail.value)||void 0===t?void 0:t.show_port_labels}),this.triggerPreviewUpdate()}}]:[]])}

        ${"rack"===g?this.renderSegmentedField((0,r.kg)("editor.unifi.rack_style",c,"Rack style"),(0,r.kg)("editor.unifi.rack_style_desc",c,"Visual theme for the virtual rack and faceplates."),d.rack_style||"theme",[{value:"theme",label:(0,r.kg)("editor.theme.inherit_short",c,"Theme"),icon:"mdi:palette-swatch-outline"},{value:"dark",label:(0,r.kg)("editor.unifi.style_dark",c,"Dark"),icon:"mdi:weather-night"},{value:"light",label:(0,r.kg)("editor.unifi.style_light",c,"Light"),icon:"mdi:white-balance-sunny"},{value:"glass",label:(0,r.kg)("editor.unifi.style_glass",c,"Glass"),icon:"mdi:blur"},{value:"blueprint",label:(0,r.kg)("editor.unifi.style_blueprint",c,"Blueprint"),icon:"mdi:blueprint"},{value:"blank",label:(0,r.kg)("editor.unifi.style_blank",c,"Blank"),icon:"mdi:border-none-variant"}],e=>{o({rack_style:e}),this.triggerPreviewUpdate()},6):n.s6}

        ${x?this.renderSegmentedField((0,r.kg)("editor.unifi.animation",c,"Animation"),(0,r.kg)("editor.unifi.animation_desc",c,"Port blink, traffic flow, and ring motion. Respects prefers-reduced-motion."),d.animation_intensity||"full",[{value:"full",label:(0,r.kg)("editor.unifi.anim_full",c,"Full"),icon:"mdi:flash"},{value:"subtle",label:(0,r.kg)("editor.unifi.anim_subtle",c,"Subtle"),icon:"mdi:flash-outline"},{value:"off",label:(0,r.kg)("editor.unifi.anim_off",c,"Off"),icon:"mdi:flash-off"}],e=>{o({animation_intensity:e}),this.triggerPreviewUpdate()},3):n.s6}

        ${"topology"===g?this.renderSegmentedField((0,r.kg)("editor.unifi.topology_layout",c,"Topology layout"),(0,r.kg)("editor.unifi.topology_layout_desc",c,"Tree follows uplinks; radial fans out from the gateway."),d.topology_layout||"tree",[{value:"tree",label:(0,r.kg)("editor.unifi.layout_tree",c,"Tree"),icon:"mdi:file-tree"},{value:"radial",label:(0,r.kg)("editor.unifi.layout_radial",c,"Radial"),icon:"mdi:chart-bubble"}],e=>{o({topology_layout:e}),this.triggerPreviewUpdate()},2):n.s6}

        ${this.renderSettingsSection((0,r.kg)("editor.unifi.section_colors",c,"Colors"),(0,r.kg)("editor.unifi.section_colors_desc",c,"Optional accent overrides."),[])}

        ${this.renderColorField((0,r.kg)("editor.unifi.accent_color",c,"Accent"),(0,r.kg)("editor.unifi.accent_color_desc",c,"Rings, highlights, and flow accents."),t,d.accent_color||"","",e=>{o({accent_color:e||void 0}),this.triggerPreviewUpdate()})}

        ${d.setup_dismissed?n.qy`
              <div style="margin-top:16px;">
                <button
                  class="uc-unifi-btn secondary"
                  type="button"
                  @click=${()=>{ze(d.id),o({setup_dismissed:!1}),this.triggerPreviewUpdate()}}
                >
                  ${(0,r.kg)("editor.unifi.show_setup",c,"Show setup wizard")}
                </button>
              </div>
            `:n.s6}
      </div>
    `}renderPreview(e,t,i,o){var a;const l=(0,Fe.Gy)(e,i,"unifi",{rack_style:"dark"}),d="live"===o||"ha-preview"===o,c=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";if(!(0,s.gf)(t))return(0,s.SB)(c,(0,r.kg)("editor.unifi.title_default",c,"UniFi Network"));const u=this.buildStyleString(this.buildDesignStyles(e,t)),p=this.getHoverEffectClass(e),f=this._topology(l,t);!1!==l.use_device_images&&m.ensureLoaded(()=>this.triggerPreviewUpdate());const v=e=>{try{window.dispatchEvent(new CustomEvent("uc-module-patch-by-id",{detail:{moduleId:l.id,updates:e},bubbles:!0,composed:!0}))}catch(e){}this.triggerPreviewUpdate(!0)},h=this._maybeSeedCuration(l,f,e=>v(e)),g=Ce(l.id,t,()=>this.triggerPreviewUpdate()),y="off"===h.animation_intensity?"anim-off":"subtle"===h.animation_intensity?"anim-subtle":"anim-full",w=e=>{var i;const n=e.stateEntityId||e.trackerEntityId||e.cpuEntityId||e.entityIds[0];if(n&&t){const e=new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0});null===(i=document.querySelector("home-assistant"))||void 0===i||i.dispatchEvent(e)}},x=h.view||"rack",b=this._visibleDevices(h,f),k=(h.hidden_device_ids||[]).length;let _;switch(x){case"ports":_=function(e,t,i,o){var r;const s=ue(i.devices,e.device_order,e.hidden_device_ids).filter(e=>e.ports.length>0||"switch"===e.kind||"gateway"===e.kind);if(!s.length)return n.qy`
      <div class="uc-unifi-empty">
        <ha-icon icon="mdi:ethernet"></ha-icon>
        <div>No UniFi switches or gateways with ports found.</div>
      </div>
    `;const a=e.ports_device_id&&s.some(t=>t.deviceId===e.ports_device_id)?e.ports_device_id:s[0].deviceId,l=s.find(e=>e.deviceId===a),d=null!==(r=Ie.get(e.id))&&void 0!==r?r:null,c=null!=d?l.ports.find(e=>e.index===d):void 0;return n.qy`
    <div class="uc-unifi-ports">
      <div class="uc-unifi-ports-toolbar">
        ${s.map(t=>n.qy`
            <button
              class="uc-unifi-btn ${t.deviceId===a?"":"secondary"}"
              type="button"
              @click=${()=>{Ie.set(e.id,null),o.onSelectDevice(t.deviceId)}}
            >
              ${t.name}
            </button>
          `)}
      </div>

      ${ke(l,{hass:t,showLabels:!0,animation:e.animation_intensity||"full",accent:e.accent_color,styleVariant:e.rack_style||"dark"})}

      <div class="uc-unifi-ports-grid" style="margin-top: 14px;">
        ${l.ports.map(i=>function(e,t,i,o){var r,s,a,l;const d=i.rxEntityId?String((null===(s=null===(r=t.states[i.rxEntityId])||void 0===r?void 0:r.attributes)||void 0===s?void 0:s.unit_of_measurement)||""):"",c=i.txEntityId?String((null===(l=null===(a=t.states[i.txEntityId])||void 0===a?void 0:a.attributes)||void 0===l?void 0:l.unit_of_measurement)||""):"",u=fe(i.rx,d),p=fe(i.tx,c),f=ve(i.linkSpeedMbps),v=Math.max(i.linkSpeedMbps||1e3,1),h=Math.min(100,(u||0)/v*100),g=Math.min(100,(p||0)/v*100);return n.qy`
    <div
      class="uc-unifi-port-card ${i.up?"is-up":""}"
      style="--led: ${f};"
      @click=${o}
    >
      <div class="idx">P${i.index}</div>
      <div class="name">${i.name}</div>
      <div class="meta">
        ${i.up?n.qy`${null!=i.linkSpeedMbps?`${i.linkSpeedMbps} Mbps`:"Up"}
            ${null!=i.poePowerW&&i.poePowerW>0?n.qy` · ${i.poePowerW.toFixed(1)} W`:n.s6}`:"Down"}
      </div>
      ${!1!==e.show_advanced?n.qy`
            <div class="uc-unifi-bar" title="RX ${he(u)}">
              <i style="width: ${h}%; background: ${f};"></i>
            </div>
            <div class="uc-unifi-bar" title="TX ${he(p)}">
              <i style="width: ${g}%; background: ${f}; opacity: 0.55;"></i>
            </div>
            <div class="meta">↓ ${he(u)} · ↑ ${he(p)}</div>
          `:n.s6}
    </div>
  `}(e,t,i,()=>{var t;Ie.set(e.id,i.index),null===(t=o.triggerPreviewUpdate)||void 0===t||t.call(o)}))}
      </div>

      ${c?function(e,t,i,o,r){var s,a,l,d;const c=o.rxEntityId?String((null===(a=null===(s=t.states[o.rxEntityId])||void 0===s?void 0:s.attributes)||void 0===a?void 0:a.unit_of_measurement)||""):"",u=o.txEntityId?String((null===(d=null===(l=t.states[o.txEntityId])||void 0===l?void 0:l.attributes)||void 0===d?void 0:d.unit_of_measurement)||""):"";return n.qy`
    <div class="uc-unifi-port-detail">
      <h4>${i.name} — Port ${o.index}${o.name&&o.name!==`Port ${o.index}`?` (${o.name})`:""}</h4>
      <div class="uc-unifi-detail-grid">
        <div>
          <div class="lbl">Link</div>
          <div>${o.up?null!=o.linkSpeedMbps?`${o.linkSpeedMbps} Mbps`:"Up":"Down"}</div>
        </div>
        <div>
          <div class="lbl">RX</div>
          <div>${he(fe(o.rx,c))}</div>
        </div>
        <div>
          <div class="lbl">TX</div>
          <div>${he(fe(o.tx,u))}</div>
        </div>
        <div>
          <div class="lbl">PoE</div>
          <div>
            ${null!=o.poePowerW?`${o.poePowerW.toFixed(2)} W`:"—"}
            ${null!=o.poeOn?o.poeOn?" (on)":" (off)":""}
          </div>
        </div>
      </div>
      <div class="uc-unifi-detail-actions">
        ${o.poeSwitchEntityId?n.qy`
              <button
                class="uc-unifi-btn secondary"
                type="button"
                @click=${()=>{var e;return null===(e=r.onTogglePoe)||void 0===e?void 0:e.call(r,o.poeSwitchEntityId,!0!==o.poeOn)}}
              >
                ${o.poeOn?"Disable PoE":"Enable PoE"}
              </button>
            `:n.s6}
        ${o.powerCycleEntityId?n.qy`
              <button
                class="uc-unifi-btn secondary"
                type="button"
                @click=${()=>{var e;return null===(e=r.onPowerCycle)||void 0===e?void 0:e.call(r,o.powerCycleEntityId)}}
              >
                Power cycle
              </button>
            `:n.s6}
        ${o.portEnableEntityId?n.qy`
              <button
                class="uc-unifi-btn secondary"
                type="button"
                @click=${()=>{var e;return null===(e=r.onTogglePort)||void 0===e?void 0:e.call(r,o.portEnableEntityId,!0!==o.enabled)}}
              >
                ${!1===o.enabled?"Enable port":"Disable port"}
              </button>
            `:n.s6}
        <button
          class="uc-unifi-btn linkish"
          type="button"
          @click=${()=>{var t;Ie.set(e.id,null),null===(t=r.triggerPreviewUpdate)||void 0===t||t.call(r)}}
        >
          Close
        </button>
      </div>
    </div>
  `}(e,t,l,c,o):n.s6}
    </div>
  `}(h,t,f,{onSelectDevice:e=>v({ports_device_id:e}),onTogglePoe:(e,i)=>this._callService(t,"switch",i?"turn_on":"turn_off",{entity_id:e}),onPowerCycle:e=>this._callService(t,"button","press",{entity_id:e}),onTogglePort:(e,i)=>this._callService(t,"switch",i?"turn_on":"turn_off",{entity_id:e}),triggerPreviewUpdate:()=>this.triggerPreviewUpdate(!0)});break;case"devices":_=function(e,t,i,o){var r;const s=ue(i.devices,e.device_order,e.hidden_device_ids);if(!s.length)return n.qy`
      <div class="uc-unifi-empty">
        <ha-icon icon="mdi:lan-disconnect"></ha-icon>
        <div>No UniFi devices discovered.</div>
      </div>
    `;const a=!1!==e.show_sparklines,l=new Map;if(a){const i=s.map(e=>e.cpuEntityId).filter(e=>!!e);if(i.length){const n=Date.now(),s=Ee.ur.query(t,{key:`unifi:${e.id}:cpu:6h`,entityIds:i,startMs:n-216e5,endMs:n,ttlMs:3e5},()=>o.triggerPreviewUpdate());if(null===(r=s.data)||void 0===r?void 0:r.size)for(const[e,t]of s.data){const i=[];for(const e of t||[]){const t=Number(e.state);Number.isFinite(t)&&i.push({t:e.t,v:t})}l.set(e,i)}}}return n.qy`
    <div class="uc-unifi-devices">
      ${s.map(i=>function(e,t,i,o,r){var s,a,l,d,c,u,p,f,v;const h=null!==(a=null!==(s=i.cpuPct)&&void 0!==s?s:i.memoryPct)&&void 0!==a?a:null!=i.clients?Math.min(100,5*i.clients):0,g=e.accent_color||"var(--primary-color)",y=2*Math.PI*18,m=`${Math.max(0,Math.min(100,h||0))/100*y} ${y}`,w=i.cpuEntityId?o.get(i.cpuEntityId):void 0,x=i.uptimeEntityId?function(e){if(!e||"unavailable"===e||"unknown"===e)return"—";const t=Date.parse(e);if(!Number.isFinite(t))return e;const i=Math.max(0,Math.floor((Date.now()-t)/1e3)),n=Math.floor(i/86400),o=Math.floor(i%86400/3600),r=Math.floor(i%3600/60);return n>0?`${n}d ${o}h`:o>0?`${o}h ${r}m`:`${r}m`}(null===(l=t.states[i.uptimeEntityId])||void 0===l?void 0:l.state):"—",b=ye(i,{useImages:!1!==e.use_device_images},ge(260)),k="camera"===i.kind&&!1!==e.show_camera_previews&&i.cameraEntityId?null===(c=null===(d=t.states[i.cameraEntityId])||void 0===d?void 0:d.attributes)||void 0===c?void 0:c.entity_picture:void 0,_=!0===i.motionOn,$=i.temperatures.filter(e=>null!=e.celsius),I=$.map(e=>`${e.label} ${e.celsius.toFixed(0)}°C`).join(" · "),E=$.length>1&&i.temperatureEntityId&&(null===(u=$.find(e=>e.entityId===i.temperatureEntityId))||void 0===u?void 0:u.label)||"";return n.qy`
    <div class="uc-unifi-device-tile" @click=${()=>{var e;return null===(e=r.onDeviceClick)||void 0===e?void 0:e.call(r,i)}}>
      ${k?n.qy`<div class="uc-unifi-tile-snapbox ${_?"is-motion":""}">
            <img
              class="uc-unifi-tile-snap"
              src="${k}"
              alt="${i.name}"
              loading="lazy"
              draggable="false"
              @error=${e=>{const t=e.currentTarget.parentElement;t&&(t.style.display="none")}}
            />
            ${_?n.qy`<span class="uc-unifi-motion-badge">
                  <ha-icon icon="mdi:motion-sensor" style="--mdc-icon-size:12px;"></ha-icon>
                  Motion
                </span>`:n.s6}
            ${i.doorbellEntityId&&"on"===(null===(p=t.states[i.doorbellEntityId])||void 0===p?void 0:p.state)?n.qy`<span class="uc-unifi-motion-badge is-ring">
                  <ha-icon icon="mdi:bell-ring" style="--mdc-icon-size:12px;"></ha-icon>
                  Ring
                </span>`:n.s6}
          </div>`:b?n.qy`<div class="uc-unifi-tile-photobox">
            <img
              class="uc-unifi-tile-photo"
              src="${b}"
              alt="${i.model||i.name}"
              loading="lazy"
              draggable="false"
              @error=${e=>{const t=e.currentTarget.parentElement;t&&(t.style.display="none")}}
            />
          </div>`:n.s6}
      <div class="uc-unifi-device-head">
        <svg class="uc-unifi-mini-ring" viewBox="0 0 48 48" aria-hidden="true">
          <circle cx="24" cy="24" r="${18}" fill="none" stroke="rgba(127,127,127,0.2)" stroke-width="4" />
          <circle
            cx="24"
            cy="24"
            r="${18}"
            fill="none"
            stroke="${g}"
            stroke-width="4"
            stroke-linecap="round"
            stroke-dasharray="${m}"
            transform="rotate(-90 24 24)"
            style="filter: drop-shadow(0 0 3px ${g});"
          />
          <text x="24" y="27" text-anchor="middle" fill="currentColor" font-size="9" font-weight="700">
            ${null!=h?Math.round(h):"—"}
          </text>
        </svg>
        <div style="min-width:0;">
          <div class="name">${i.name}</div>
          <div class="model">
            <ha-icon icon="${function(e){switch(e){case"gateway":return"mdi:router-network";case"switch":return"mdi:switch";case"ap":return"mdi:wifi";case"pdu":return"mdi:power-socket-us";case"plug":return"mdi:power-plug-outline";case"camera":return"mdi:cctv";case"nvr":return"mdi:nas";default:return"mdi:lan"}}(i.kind)}" style="--mdc-icon-size:12px;"></ha-icon>
            ${i.model||i.kind}${i.state?` · ${i.state}`:""}
          </div>
        </div>
      </div>

      ${"camera"===i.kind?n.qy`<div class="uc-unifi-stats">
            <div><div class="lbl" style="opacity:0.55;font-size:10px;">Motion</div><div class="v">${null==i.motionOn?"—":i.motionOn?"Detected":"Clear"}</div></div>
            ${i.doorbellEntityId?n.qy`<div><div class="lbl" style="opacity:0.55;font-size:10px;">Doorbell</div><div class="v">${"on"===(null===(f=t.states[i.doorbellEntityId])||void 0===f?void 0:f.state)?"Ringing":"Idle"}</div></div>`:n.s6}
            <div><div class="lbl" style="opacity:0.55;font-size:10px;">Status</div><div class="v">${i.cameraEntityId&&(null===(v=t.states[i.cameraEntityId])||void 0===v?void 0:v.state)||"—"}</div></div>
            ${null!=i.temperatureC?n.qy`<div><div class="lbl" style="opacity:0.55;font-size:10px;">Temp</div><div class="v">${i.temperatureC.toFixed(0)}°</div></div>`:n.s6}
          </div>`:n.qy`<div class="uc-unifi-stats">
            <div><div class="lbl" style="opacity:0.55;font-size:10px;">CPU</div><div class="v">${null!=i.cpuPct?`${Math.round(i.cpuPct)}%`:"—"}</div></div>
            <div><div class="lbl" style="opacity:0.55;font-size:10px;">Memory</div><div class="v">${null!=i.memoryPct?`${Math.round(i.memoryPct)}%`:"—"}</div></div>
            <div><div class="lbl" style="opacity:0.55;font-size:10px;">Clients</div><div class="v">${null!=i.clients?i.clients:"—"}</div></div>
            <div title=${I}>
              <div class="lbl" style="opacity:0.55;font-size:10px;">
                Temp${E?` · ${E}`:""}
              </div>
              <div class="v">${null!=i.temperatureC?`${i.temperatureC.toFixed(0)}°`:"—"}</div>
            </div>
          </div>`}

      ${!1!==e.show_advanced?n.qy`<div style="font-size:11px;opacity:0.65;">
            Uptime ${x}${i.ports.length?` · ${i.ports.filter(e=>e.up).length}/${i.ports.length} ports up`:""}${$.length>1?` · ${I}`:""}
          </div>`:n.s6}

      ${w&&w.length>1?function(e,t){const i=e.map(e=>e.v),o=Math.min(...i),r=Math.max(...i),s=Math.max(.001,r-o),a=e[0].t,l=e[e.length-1].t||a+1,d=e.map(e=>{const t=(e.t-a)/Math.max(1,l-a)*160,i=28-(e.v-o)/s*24-2;return`${t.toFixed(1)},${i.toFixed(1)}`}).join(" ");return n.qy`
    <svg class="uc-unifi-spark" viewBox="0 0 ${160} ${28}" preserveAspectRatio="none">
      <polyline points=${d} fill="none" stroke=${t} stroke-width="1.5" />
    </svg>
  `}(w,g):n.s6}
    </div>
  `}(e,t,i,l,o))}
    </div>
  `}(h,t,f,{onDeviceClick:w,triggerPreviewUpdate:()=>this.triggerPreviewUpdate()});break;case"topology":_=function(e,t,i,o){const r=ue(i.devices,e.device_order,e.hidden_device_ids);if(!r.length)return n.qy`
      <div class="uc-unifi-empty">
        <ha-icon icon="mdi:sitemap"></ha-icon>
        <div>No UniFi devices to map.</div>
      </div>
    `;const s=e.topology_layout||"tree",a=new Map(r.map(e=>[e.deviceId,e])),l=new Map((e.device_overrides||[]).filter(e=>e.uplink_device_id).map(e=>[e.device_id,e.uplink_device_id])),d=(e,t)=>t&&t!==e.deviceId&&a.has(t)?t:null,c=e=>d(e,l.get(e.deviceId)),u=e=>d(e,e.uplinkDeviceId),p=e=>{var t,i;return null!==(i=null!==(t=c(e))&&void 0!==t?t:u(e))&&void 0!==i?i:d(e,V(e,r))},f=new Map;for(const e of r)f.set(e.deviceId,p(e));const v=new Map;for(const e of f.values())e&&v.set(e,(v.get(e)||0)+1);const h=function(e,t){const i=new Map(e.map(e=>[e.deviceId,e])),n=(e,o=new Set)=>{const r=t.get(e.deviceId);return r&&i.has(r)&&!o.has(e.deviceId)?(o.add(e.deviceId),1+n(i.get(r),o)):0},o=new Map;for(const t of e){const e="gateway"===t.kind?0:n(t),i=o.get(e)||[];i.push(t),o.set(e,i)}return o}(r,f),g=Math.max(0,...h.keys()),y="radial"===s?Math.max(300,160+30*r.length):Math.max(240,48+132*g+58),m="radial"===s?function(e,t,i){const n=i/2,o=e.filter(e=>"gateway"===e.kind)[0]||e[0],r=e.filter(e=>e.deviceId!==o.deviceId),s=[{id:o.deviceId,x:320,y:n,device:o,rowCount:1}],a=.36*Math.min(640,i);return r.forEach((e,t)=>{const i=t/Math.max(1,r.length)*Math.PI*2-Math.PI/2;s.push({id:e.deviceId,x:320+Math.cos(i)*a,y:n+Math.sin(i)*a,device:e,rowCount:1})}),s}(r,0,y):function(e){const t=[];for(const[i,n]of e){const e=48+132*i,o=n.length>=5?48:60;n.forEach((i,r)=>{const s=1===n.length?320:o+r/Math.max(1,n.length-1)*(640-2*o);t.push({id:i.deviceId,x:s,y:e,device:i,rowCount:n.length})})}return t}(h),w=new Map(m.map(e=>[e.id,e])),x=e.animation_intensity||"full",b=r.map(e=>{const i=f.get(e.deviceId),n=i?w.get(i):void 0,o=w.get(e.deviceId);if(!n||!o)return null;let r,s=te(t,e.ports),a=function(e){let t=null;for(const i of e)!i.up||null==i.linkSpeedMbps||i.linkSpeedMbps<=0||(null==t||i.linkSpeedMbps>t)&&(t=i.linkSpeedMbps);return t}(e.ports);if(null==s){const i=function(e,t){const i=Q(e.name);if(i.length<4)return null;const n=t.ports.filter(e=>{const t=K(e);if(!t||J.test(t)||Y.test(t))return!1;const n=Q(t);return!(n.length<4)&&(n===i||n.includes(i)||i.includes(n))});if(!n.length)return null;const o=n.find(e=>Q(K(e))===i);if(o)return o;if(1===n.length)return n[0];const r=n.filter(e=>e.up);return 1===r.length?r[0]:null}(e,n.device);i&&(s=te(t,[i]),null!=a||(a=i.linkSpeedMbps),r=`${n.device.name} · ${K(i)}`)}const l=(e=>!c(e)&&!u(e))(e),d=null!=a?ve(a):"rgba(100,155,235,0.55)",p=null==a?2:a>=1e4?3.5:a>=1e3?2.5:1.8,v=null==s?"3.2s":s>100?"0.6s":s>10?"1.0s":s>0?"1.6s":"2.4s",h=null!=e.state&&"connected"!==e.state;return{from:n,to:o,color:d,flowSpeed:v,thickness:p,inferred:l,device:e,rateText:null!=s?he(s):"rate unknown",via:r,active:!h}}).filter(e=>!!e);return n.qy`
    <div class="uc-unifi-topo">
      <svg viewBox="0 0 ${640} ${y}" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        ${b.map(e=>{const t=(e.from.x+e.to.x)/2,i=`M ${e.from.x} ${e.from.y} C ${t} ${e.from.y}, ${t} ${e.to.y}, ${e.to.x} ${e.to.y}`,o="off"!==x&&e.active,r=[`${e.device.name} → ${e.from.device.name}`,e.rateText];return e.via&&r.push(`via ${e.via}`),e.inferred&&r.push("inferred — no uplink sensor"),n.JW`
            <path
              d="${i}"
              stroke="${e.color}"
              stroke-width="${e.thickness}"
              fill="none"
              opacity="${o?.5:1}"
              stroke-dasharray="${e.inferred?"5 5":"none"}"
              stroke-linecap="${e.inferred?"round":"butt"}"
            >
              <title>${r.join(" · ")}</title>
            </path>
            ${o?n.JW`
                <path
                  class="uc-unifi-flow"
                  d="${i}"
                  stroke="${e.color}"
                  stroke-width="${e.thickness}"
                  style="--flow-speed: ${e.flowSpeed}; color: ${e.color};"
                />
              `:n.s6}
          `})}

        ${m.map(e=>{var t;const i="gateway"===e.device.kind?22:"ap"===e.device.kind?18:16,r=e.rowCount>=6?11:e.rowCount>=5?14:18,s=e.device.name.length>r?e.device.name.slice(0,r-2)+"…":e.device.name,a=e.device.clients,l=v.get(e.id)||0,d=[];l>0&&d.push(`${l} ${1===l?"device":"devices"}`),null!=a?d.push(`${a} ${1===a?"client":"clients"}`):e.device.ports.length&&d.push(`${e.device.ports.filter(e=>e.up).length}/${e.device.ports.length} up`);const c="connected"===e.device.state,u=null!=e.device.state&&"connected"!==e.device.state,p=c?"#2bd97c":u?"#ff5252":"rgba(140,155,180,0.6)";return n.JW`
            <g
              class="uc-unifi-topo-node ${c?"is-online":""} ${u?"is-offline":""}"
              transform="translate(${e.x}, ${e.y})"
              @click=${()=>{var t;return null===(t=o.onDeviceClick)||void 0===t?void 0:t.call(o,e.device)}}
            >
              <circle class="core" r="${i}" />
              ${"ap"===e.device.kind?n.JW`
                  <circle r="${i+6}" fill="none" stroke="#00e5ff" stroke-width="2"
                    stroke-dasharray="${(null!==(t=e.device.cpuPct)&&void 0!==t?t:Math.min(100,4*(a||0)))/100*2*Math.PI*(i+6)} ${2*Math.PI*(i+6)}"
                    transform="rotate(-90)"
                    opacity="0.85"
                  />
                `:n.s6}
              <circle
                class="status"
                cx="${(.74*i).toFixed(1)}"
                cy="${(.74*-i).toFixed(1)}"
                r="3.6"
                fill="${p}"
                stroke="#0a0e16"
                stroke-width="1.2"
                style="${c||u?`filter: drop-shadow(0 0 3px ${p});`:""}"
              />
              <text y="4" font-size="11" font-weight="700">${function(e){switch(e){case"gateway":return"GW";case"switch":return"SW";case"ap":return"AP";case"pdu":return"PD";case"camera":return"CAM";case"nvr":return"NVR";case"plug":return"PL";default:return"·"}}(e.device.kind)}</text>
              <text y="${i+14}">${s}</text>
              ${e.device.state?n.JW`<title>${e.device.name} · ${e.device.state}</title>`:n.s6}
              ${d.length?n.JW`<text y="${i+26}" opacity="0.6" font-size="9">${d.join(" · ")}</text>`:n.s6}
            </g>
          `})}
      </svg>
    </div>
  `}(h,t,f,{onDeviceClick:w});break;case"clients":_=function(e,t,i,o){const r=new Set(e.client_ids||[]),s=i.clients.filter(e=>r.has(e.deviceId));if(!i.clients.length)return n.qy`
      <div class="uc-unifi-empty">
        <ha-icon icon="mdi:account-network"></ha-icon>
        <div>
          No UniFi client bandwidth sensors found. Enable “Bandwidth usage sensors for network
          clients” in the UniFi integration options, and select clients under “Create entities from
          network clients”.
        </div>
      </div>
    `;if(!s.length)return n.qy`
      <div class="uc-unifi-empty">
        <ha-icon icon="mdi:account-plus-outline"></ha-icon>
        <div>
          No clients added yet. ${i.clients.length} available — pick the ones you want to
          watch under “Clients” in the module editor.
        </div>
      </div>
    `;const a=Se.get(e.id)||"bandwidth",l=s.map(e=>{var i,n,o,r;const s=e.rxEntityId?String((null===(n=null===(i=t.states[e.rxEntityId])||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.unit_of_measurement)||""):"",a=e.txEntityId?String((null===(r=null===(o=t.states[e.txEntityId])||void 0===o?void 0:o.attributes)||void 0===r?void 0:r.unit_of_measurement)||""):"",l=fe(e.rx,s)||0,d=fe(e.tx,a)||0;return{c:e,rx:l,tx:d,total:l+d}});l.sort((e,t)=>"name"===a?e.c.name.localeCompare(t.c.name):"rx"===a?t.rx-e.rx:"tx"===a?t.tx-e.tx:t.total-e.total);const d=t=>{var i;Se.set(e.id,t),null===(i=o.triggerPreviewUpdate)||void 0===i||i.call(o)};return n.qy`
    <table class="uc-unifi-table">
      <thead>
        <tr>
          <th @click=${()=>d("name")}>Client</th>
          <th @click=${()=>d("rx")}>RX</th>
          <th @click=${()=>d("tx")}>TX</th>
          <th @click=${()=>d("bandwidth")}>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${l.map(({c:e,rx:t,tx:i,total:r})=>{var s;const a=Math.max(...l.map(e=>e.total),1);return n.qy`
            <tr>
              <td>
                <div style="font-weight:600;">${e.name}</div>
                <div style="font-size:10px;opacity:0.55;">
                  ${e.mac?null===(s=e.mac.match(/.{1,2}/g))||void 0===s?void 0:s.join(":"):""}
                  ${null!=e.linkSpeedMbps?` · ${e.linkSpeedMbps} Mbps`:""}
                </div>
              </td>
              <td>
                ${he(t)}
                <div class="uc-unifi-bar"><i style="width:${t/a*100}%;background:#4fc3f7;"></i></div>
              </td>
              <td>
                ${he(i)}
                <div class="uc-unifi-bar"><i style="width:${i/a*100}%;background:#81c784;"></i></div>
              </td>
              <td style="font-weight:700;">${he(r)}</td>
              <td>
                ${e.blockEntityId?n.qy`
                      <button
                        class="uc-unifi-btn secondary"
                        type="button"
                        style="padding:4px 8px;font-size:11px;"
                        @click=${()=>{var t;return null===(t=o.onBlock)||void 0===t?void 0:t.call(o,e.blockEntityId,!0!==e.blocked)}}
                      >
                        ${e.blocked?"Unblock":"Block"}
                      </button>
                    `:n.s6}
              </td>
            </tr>
          `})}
      </tbody>
    </table>
  `}(h,t,f,{onBlock:(e,i)=>this._callService(t,"switch",i?"turn_off":"turn_on",{entity_id:e}),triggerPreviewUpdate:()=>this.triggerPreviewUpdate(!0)});break;case"wan":_=function(e,t,i,o){var r;const s=i.wanLatency,a=i.devices.filter(e=>"gateway"===e.kind);if(!s.length&&!a.length)return n.qy`
      <div class="uc-unifi-empty">
        <ha-icon icon="mdi:wan"></ha-icon>
        <div>No WAN latency sensors found. Enable them on your UniFi gateway device in Home Assistant.</div>
      </div>
    `;const l=new Map;if(!1!==e.show_sparklines&&s.length){const i=s.map(e=>e.entityId),n=Date.now(),a=Ee.ur.query(t,{key:`unifi:${e.id}:wan:6h`,entityIds:i,startMs:n-216e5,endMs:n,ttlMs:3e5},()=>o.triggerPreviewUpdate());if(null===(r=a.data)||void 0===r?void 0:r.size)for(const[e,t]of a.data){const i=[];for(const e of t||[]){const t=Number(e.state);Number.isFinite(t)&&i.push({t:e.t,v:t})}l.set(e,i)}}const d=new Map;for(const e of s){const t=`${e.target} ${e.wan}`,i=d.get(t)||[];i.push(e),d.set(t,i)}return n.qy`
    <div class="uc-unifi-wan">
      ${a.length?n.qy`
            <div style="margin-bottom:12px;font-size:13px;">
              ${a.map(e=>{const t="connected"===e.state||void 0===e.state;return n.qy`
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
                    <span style="width:8px;height:8px;border-radius:50%;background:${t?"#69f0ae":"#ff5252"};box-shadow:0 0 6px ${t?"#69f0ae":"#ff5252"};"></span>
                    <strong>${e.name}</strong>
                    <span style="opacity:0.6;font-size:12px;">${e.state||"gateway"}${null!=e.cpuPct?` · CPU ${Math.round(e.cpuPct)}%`:""}</span>
                  </div>
                `})}
            </div>
          `:n.s6}

      <div class="uc-unifi-wan-grid">
        ${[...d.entries()].map(([e,t])=>{const i=t[0],o=i.latencyMs,r=l.get(i.entityId),s=null==o?"var(--secondary-text-color)":o<30?"#69f0ae":o<80?"#ffd740":"#ff8a80";return n.qy`
            <div class="uc-unifi-wan-card">
              <div class="target">${e}</div>
              <div class="latency" style="color:${s};">
                ${null!=o?Math.round(o):"—"}<span class="unit"> ms</span>
              </div>
              ${r&&r.length>1?function(e,t){const i=e.map(e=>e.v),o=Math.min(...i),r=Math.max(...i),s=Math.max(.001,r-o),a=e[0].t,l=e[e.length-1].t||a+1,d=e.map(e=>{const t=(e.t-a)/Math.max(1,l-a)*140,i=32-(e.v-o)/s*28-2;return`${t.toFixed(1)},${i.toFixed(1)}`}).join(" ");return n.qy`
    <svg class="uc-unifi-spark" viewBox="0 0 ${140} ${32}" preserveAspectRatio="none">
      <polyline points=${d} fill="none" stroke=${t} stroke-width="1.5" />
    </svg>
  `}(r,s):n.s6}
            </div>
          `})}
      </div>
    </div>
  `}(h,t,f,{triggerPreviewUpdate:()=>this.triggerPreviewUpdate()});break;default:_=function(e,t,i,o){const r=ue(i.devices,e.device_order,e.hidden_device_ids),s=new Map((e.device_overrides||[]).map(e=>[e.device_id,e])),a=r.filter(e=>$e.has(e.kind)),l=r.filter(e=>"ap"===e.kind),d=e.rack_style||"dark",c=e.animation_intensity||"full",u=!1!==e.use_device_images,p=e=>{const t=s.get(e.deviceId);return t?Object.assign(Object.assign({},e),{name:t.name||e.name,heightU:t.height_u||e.heightU}):e};return n.qy`
    <div class="uc-unifi-rack style-${d}" data-uc-role="pane">
      <div class="uc-unifi-rack-stack">
        ${0===a.length?n.qy`<div class="uc-unifi-empty">No rack-mount UniFi devices discovered yet.</div>`:a.map(i=>{const r=p(i),a=s.get(r.deviceId);return n.qy`
                <div
                  class="uc-unifi-rack-unit"
                  data-device-id=${r.deviceId}
                  @click=${()=>{var e;return null===(e=o.onDeviceClick)||void 0===e?void 0:e.call(o,r)}}
                >
                  ${ke(r,{hass:t,showLabels:!1!==e.show_port_labels,animation:c,accent:(null==a?void 0:a.accent_color)||e.accent_color,styleVariant:d,useImages:u})}
                </div>
              `})}
      </div>

      ${l.length?n.qy`
            <div class="uc-unifi-rack-aps">
              ${l.map(i=>{const r=p(i),a=s.get(r.deviceId);return n.qy`
                  <div @click=${()=>{var e;return null===(e=o.onDeviceClick)||void 0===e?void 0:e.call(o,r)}}>
                    ${ke(r,{hass:t,showLabels:!0,animation:c,accent:(null==a?void 0:a.accent_color)||e.accent_color,styleVariant:d,useImages:u})}
                  </div>
                `})}
            </div>
          `:n.s6}
    </div>
  `}(h,t,f,{onDeviceClick:w})}return n.qy`
      <div
        class="uc-unifi-wrapper ${p}"
        style="${u}"
      >
        ${this.wrapWithAnimation(n.qy`
            <div class="uc-unifi ${y} ${h.blank_background?"is-blank":""}" style="${h.accent_color?`--uc-unifi-accent:${h.accent_color};`:""}${h.text_color?`color:${h.text_color};`:""}">
              <style>
                ${this.getStyles()}
              </style>

              ${!1!==h.show_title&&h.title?n.qy`<div class="uc-unifi-title">${h.title}</div>`:n.s6}

              ${d&&k>0&&"rack"===x?n.qy`
                    <div class="uc-unifi-curation-note">
                      ${(0,r.kg)("editor.unifi.curation_note",c,"Showing {shown} of {total} UniFi devices. Manage visibility in the General tab.").replace("{shown}",String(b.length)).replace("{total}",String(f.devices.length))}
                    </div>
                  `:n.s6}

              ${d?Ae(h,t,g,{onDismiss:()=>v({setup_dismissed:!0}),onEnabled:()=>this.triggerPreviewUpdate(),triggerPreviewUpdate:()=>this.triggerPreviewUpdate()}):n.s6}

              ${f.hasUnifiIntegration||0!==f.devices.length?_:n.qy`
                    <div class="uc-unifi-empty">
                      <ha-icon icon="mdi:lan-disconnect"></ha-icon>
                      <div>
                        ${(0,r.kg)("editor.unifi.empty",c,"No UniFi Network integration detected. Add it in Home Assistant, then this card will auto-discover your gear.")}
                      </div>
                      <a
                        href="https://www.home-assistant.io/integrations/unifi/"
                        target="_blank"
                        rel="noopener"
                        >home-assistant.io/integrations/unifi</a
                      >
                    </div>
                  `}
            </div>
          `,e,t)}
      </div>
    `}getStyles(){return`\n      ${o.m.getSliderStyles()}\n      \n.uc-unifi {\n  --uc-unifi-accent: var(--primary-color, #00bcd4);\n  position: relative;\n  width: 100%;\n  color: var(--primary-text-color);\n  font-family: var(--ha-font-family-body, inherit);\n}\n\n.uc-unifi-title {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 12px;\n  letter-spacing: 0.3px;\n}\n.uc-unifi-curation-note {\n  font-size: 12px;\n  color: var(--secondary-text-color);\n  margin: -4px 0 12px;\n  padding: 8px 10px;\n  border-radius: var(--uc-r-8, 8px);\n  background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);\n  border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);\n}\n\n/* ── Wizard ─────────────────────────────────────────────── */\n.uc-unifi-wizard {\n  background: var(--secondary-background-color);\n  border: 1px solid var(--divider-color);\n  border-radius: var(--uc-r-12, 12px);\n  padding: 14px 16px;\n  margin-bottom: 14px;\n  position: relative;\n  z-index: 2;\n  pointer-events: auto;\n}\n.uc-unifi-wizard h3 {\n  margin: 0 0 6px;\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--primary-color);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.uc-unifi-wizard p {\n  margin: 0 0 10px;\n  font-size: 13px;\n  color: var(--secondary-text-color);\n  line-height: 1.45;\n}\n.uc-unifi-wizard-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.uc-unifi-btn {\n  appearance: none;\n  border: none;\n  border-radius: var(--uc-r-8, 8px);\n  padding: 8px 14px;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  background: var(--primary-color);\n  color: var(--text-primary-color, #fff);\n  pointer-events: auto;\n  position: relative;\n  z-index: 1;\n}\n.uc-unifi-btn[disabled] { opacity: 0.5; cursor: default; }\n.uc-unifi-btn.secondary {\n  background: transparent;\n  color: var(--primary-color);\n  border: 1px solid var(--primary-color);\n}\n.uc-unifi-btn.linkish {\n  background: transparent;\n  color: var(--primary-color);\n  padding: 8px 10px;\n}\n.uc-unifi-btn.linkish:hover {\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n.uc-unifi-progress {\n  height: 4px;\n  border-radius: var(--uc-r-2, 2px);\n  background: rgba(127,127,127,0.2);\n  overflow: hidden;\n  margin-top: 10px;\n}\n.uc-unifi-progress > i {\n  display: block;\n  height: 100%;\n  background: var(--primary-color);\n  width: var(--pct, 0%);\n  transition: width 0.2s ease;\n}\n.uc-unifi-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.uc-unifi-badge {\n  font-size: 11px;\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: rgba(127,127,127,0.15);\n  color: var(--secondary-text-color);\n}\n.uc-unifi-badge.ok { background: rgba(105,240,174,0.18); color: #69f0ae; }\n.uc-unifi-badge.warn { background: rgba(255,215,64,0.18); color: #ffd740; }\n.uc-unifi-badge.bad { background: rgba(255,82,82,0.18); color: #ff8a80; }\n\n/* ── Empty ──────────────────────────────────────────────── */\n.uc-unifi-empty {\n  text-align: center;\n  padding: 28px 16px;\n  color: var(--secondary-text-color);\n}\n.uc-unifi-empty ha-icon { --mdc-icon-size: 40px; color: var(--primary-color); margin-bottom: 8px; }\n.uc-unifi-empty a { color: var(--primary-color); }\n\n/* ── Rack ───────────────────────────────────────────────── */\n.uc-unifi-rack {\n  --rack-bg: #0b0e14;\n  position: relative;\n  border-radius: var(--uc-r-12, 12px);\n  padding: 16px 14px;\n  background:\n    radial-gradient(ellipse at 50% 0%, rgba(40,80,140,0.18), transparent 55%),\n    linear-gradient(180deg, #10141c 0%, var(--rack-bg) 100%);\n  border: 1px solid rgba(80,100,140,0.25);\n  box-shadow: var(--uc-pane-shadow, none);\n  /* The rack paints its own dark chassis, so it must bring its own ink:\n     inheriting the page text colour goes navy-on-charcoal under any light\n     HA theme or a light Ultra Card theme. Blank inherits (no chassis). */\n  color: #e6ebf3;\n  perspective: 900px;\n  overflow: hidden;\n}\n.uc-unifi-rack.style-blank {\n  color: inherit;\n}\n.uc-unifi-rack.style-light {\n  --rack-bg: #e8ecf2;\n  background: linear-gradient(180deg, #f4f6fa, #dfe5ee);\n  border-color: #b8c0cc;\n  color: #1a1f2a;\n}\n.uc-unifi-rack.style-glass {\n  background: rgba(20, 28, 44, 0.45);\n  backdrop-filter: blur(12px);\n  border-color: rgba(120,180,255,0.25);\n}\n.uc-unifi-rack.style-blueprint {\n  background:\n    linear-gradient(rgba(30,80,160,0.08) 1px, transparent 1px) 0 0 / 20px 20px,\n    linear-gradient(90deg, rgba(30,80,160,0.08) 1px, transparent 1px) 0 0 / 20px 20px,\n    #061018;\n  border-color: #1e4a8c;\n  color: #7eb6ff;\n}\n/* Blank: components float directly on the dashboard, zero chrome.\n   Units keep their own horizontal padding so photos and footer text\n   never clip at the card edges. */\n.uc-unifi-rack.style-blank {\n  background: none;\n  border: none;\n  padding: 4px 2px;\n  box-shadow: none;\n}\n.uc-unifi-rack.style-blank .uc-unifi-photo-unit {\n  background: transparent;\n}\n\n/* Blank background toggle: strips container/card backgrounds for every\n   view — components float on the dashboard. (Rack style controls faceplate\n   chrome; this toggle controls the containers.) */\n.uc-unifi.is-blank .uc-unifi-rack {\n  background: none;\n  border: none;\n  box-shadow: none;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.uc-unifi.is-blank .uc-unifi-topo {\n  background: none;\n  border: none;\n}\n.uc-unifi.is-blank .uc-unifi-device-tile,\n.uc-unifi.is-blank .uc-unifi-port-card,\n.uc-unifi.is-blank .uc-unifi-port-detail,\n.uc-unifi.is-blank .uc-unifi-wan-card {\n  background: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n.uc-unifi-rack-stack {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  transform: rotateX(4deg);\n  transform-origin: center top;\n}\n.uc-unifi-rack-unit {\n  position: relative;\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;\n}\n.uc-unifi-rack-unit:hover {\n  filter: brightness(1.08);\n}\n\n/* Faceplates */\n.uc-unifi-faceplate {\n  width: 100%;\n  color: inherit;\n}\n.uc-unifi-fp-svg {\n  width: 100%;\n  height: auto;\n  display: block;\n  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.35));\n}\n.uc-unifi-port.is-active .uc-unifi-port-led {\n  animation: uc-unifi-port-blink var(--uc-unifi-act, 1s) ease-in-out infinite;\n}\n.uc-unifi-poe-dot {\n  animation: uc-unifi-poe-pulse 2s ease-in-out infinite;\n}\n\n/* Editor: drag-and-drop rack ordering */\n.uc-unifi-order-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.uc-unifi-order-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: var(--uc-r-8, 8px);\n  background: var(--card-background-color, rgba(0,0,0,0.06));\n  border: 1px solid var(--divider-color, rgba(120,130,150,0.2));\n  cursor: grab;\n  transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;\n}\n.uc-unifi-order-row:active { cursor: grabbing; }\n.uc-unifi-order-row.is-over {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 1px var(--primary-color);\n}\n.uc-unifi-order-row .pos {\n  font-size: 11px;\n  font-weight: 700;\n  opacity: 0.55;\n  min-width: 16px;\n  text-align: center;\n  font-variant-numeric: tabular-nums;\n}\n\n/* Real product photo rack units.\n   Note: selectors are scoped (2 classes) so the card-level\n   .card-column img height:auto rule cannot override the sizing. */\n.uc-unifi-photo-unit {\n  position: relative;\n  border-radius: var(--uc-r-6, 6px);\n  background: rgba(10, 14, 22, 0.55);\n  padding: 8px 18px 4px;\n}\n.uc-unifi-photo-stage {\n  position: relative;\n  text-align: center;\n}\n.uc-unifi-photo-frame {\n  position: relative;\n  display: inline-block;\n  max-width: 100%;\n}\n.uc-unifi-photo-unit .uc-unifi-photo-img {\n  display: block;\n  margin: 0 auto;\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  max-height: 116px;\n  object-fit: contain;\n  user-select: none;\n  -webkit-user-drag: none;\n  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.45));\n}\n/* Live lights on the physical ports of the product photo */\n.uc-unifi-photo-unit .uc-unifi-port-lights {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n}\n/* One cell per physical port, sized to the jack opening in the photo */\n.uc-unifi-port-cell {\n  position: absolute;\n  box-sizing: border-box;\n}\n/* Our Etherlighting: fills the opening, hiding the factory photo's own port\n   colour (lit blue inserts) so only live state is visible. */\n.uc-unifi-port-cell .etherlight {\n  position: absolute;\n  inset: 0;\n  border-radius: var(--uc-r-1_5, 1.5px);\n  background: #0a0d12;\n  /* Dark rim inside the opening keeps the jack looking recessed rather than\n     like a flat painted tile. */\n  box-shadow:\n    inset 0 0 0 1px rgba(0, 0, 0, 0.6),\n    inset 0 1px 2px rgba(0, 0, 0, 0.85);\n}\n.uc-unifi-port-cell.kind-sfp .etherlight { border-radius: var(--uc-r-1, 1px); }\n.uc-unifi-port-cell.is-down .etherlight {\n  background: linear-gradient(180deg, #10141b 0%, #05070a 100%);\n}\n/* Lit port: a translucent light guide in the jack mouth, brighter at the top\n   edge where the LED sits, falling off into the recess. */\n.uc-unifi-port-cell.is-up .etherlight {\n  /* Flat fallback first: without color-mix the gradient below is dropped and\n     the port would otherwise render as an unlit black hole. */\n  background: var(--plc);\n  background: linear-gradient(\n    180deg,\n    color-mix(in srgb, var(--plc) 78%, #ffffff) 0%,\n    var(--plc) 42%,\n    color-mix(in srgb, var(--plc) 42%, #000000) 100%\n  );\n  box-shadow:\n    inset 0 0 0 1px rgba(0, 0, 0, 0.45),\n    inset 0 0 2px rgba(255, 255, 255, 0.5),\n    0 0 2px var(--plc);\n}\n/* Faint halo spilling out of a lit opening */\n.uc-unifi-port-cell .halo {\n  position: absolute;\n  inset: -28% -20%;\n  background: radial-gradient(ellipse at 50% 50%, var(--plc) 0%, transparent 65%);\n  opacity: 0.26;\n  filter: blur(2px);\n  border-radius: 40%;\n  pointer-events: none;\n}\n/* Activity LEDs sitting directly above the opening: green rx, amber tx */\n.uc-unifi-port-cell .leds {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 100%;\n  margin-bottom: 1px;\n  display: flex;\n  justify-content: center;\n  gap: clamp(1px, 12%, 2px);\n  pointer-events: none;\n}\n.uc-unifi-port-cell .leds i {\n  width: clamp(2px, 32%, 4px);\n  aspect-ratio: 1;\n  border-radius: 50%;\n  background: rgba(120,130,150,0.3);\n  flex: 0 0 auto;\n}\n.uc-unifi-port-cell .led-rx.is-lit { background: #00e676; opacity: 0.45; }\n.uc-unifi-port-cell .led-tx.is-lit { background: #ffd740; opacity: 0.45; }\n.uc-unifi-port-cell .led-rx.is-active {\n  opacity: 1;\n  box-shadow: 0 0 3px #00e676, 0 0 6px rgba(0,230,118,0.6);\n  animation: uc-unifi-port-blink var(--uc-unifi-act, 1s) steps(2, jump-none) infinite;\n}\n.uc-unifi-port-cell .led-tx.is-active {\n  opacity: 1;\n  box-shadow: 0 0 3px #ffd740, 0 0 6px rgba(255,215,64,0.6);\n  animation: uc-unifi-port-blink var(--uc-unifi-act, 1s) steps(2, jump-none) infinite;\n}\n/* Steady PoE bar beneath powered ports */\n.uc-unifi-port-cell .led-poe {\n  position: absolute;\n  top: 100%;\n  margin-top: 1px;\n  left: 15%;\n  width: 70%;\n  height: 1.5px;\n  border-radius: var(--uc-r-1, 1px);\n  background: #ffb300;\n  box-shadow: 0 0 3px #ffb300;\n}\n/* Synthetic port row below the photo (models without measured port maps) */\n.uc-unifi-photo-strip {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  pointer-events: none;\n}\n.uc-unifi-port-row {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 3px;\n  min-width: 0;\n}\n.uc-unifi-port-cell.in-row {\n  position: relative;\n  width: 11px;\n  height: 13px;\n  flex: 0 0 auto;\n}\n.uc-unifi-port-cell.in-row.kind-sfp { width: 13px; height: 10px; }\n.uc-unifi-port-cell.in-row .leds { gap: 1px; }\n.uc-unifi-port-cell.in-row .leds i { width: 3px; }\n.uc-unifi-photo-footer {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 2px 2px;\n  font-size: 10px;\n  color: rgba(200,214,235,0.85);\n}\n.uc-unifi-rack.style-light .uc-unifi-photo-unit { background: rgba(255,255,255,0.55); }\n.uc-unifi-rack.style-light .uc-unifi-photo-footer { color: rgba(30,40,60,0.8); }\n.uc-unifi-photo-footer .nm {\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n  flex: 1;\n}\n.uc-unifi-photo-footer .meta { margin-left: auto; display: flex; gap: 8px; align-items: center; flex-shrink: 0; }\n.uc-unifi-photo-footer .ports { font-variant-numeric: tabular-nums; opacity: 0.75; }\n.uc-unifi-photo-footer .state.ok { color: #69f0ae; }\n.uc-unifi-photo-footer .state.bad { color: #ff8a65; }\n/* Smart plug / outlet tile */\n.uc-unifi-plug-tile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 8px;\n}\n.uc-unifi-plug-tile .uc-unifi-plug-img {\n  width: 72px;\n  height: 72px;\n  max-height: 72px;\n  object-fit: contain;\n  filter: drop-shadow(0 3px 8px rgba(0,0,0,0.35));\n}\n.uc-unifi-plug-tile ha-icon { --mdc-icon-size: 40px; opacity: 0.7; }\n.uc-unifi-plug-tile.is-on .uc-unifi-plug-img { filter: drop-shadow(0 0 10px rgba(105,240,174,0.5)); }\n\n.uc-unifi-ap-puck {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 8px;\n}\n.uc-unifi-ap-stage {\n  position: relative;\n  width: 104px;\n  height: 104px;\n}\n/* Inset 20px inscribes the photo box inside the ring (r=46/100 of stage),\n   so even portrait wall APs stay fully inside the circle. Scoped selector\n   beats the card shell's .card-column img height:auto rule. */\n.uc-unifi-ap-stage .uc-unifi-ap-photo {\n  position: absolute;\n  inset: 20px;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n  max-width: calc(100% - 40px);\n  max-height: calc(100% - 40px);\n  /* No circular crop: wall/in-wall APs are rectangular and would distort */\n  object-fit: contain;\n  user-select: none;\n  -webkit-user-drag: none;\n  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.4));\n}\n.uc-unifi-ap-stage .uc-unifi-ap-svg {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.uc-unifi-ap-label { font-size: 12px; font-weight: 600; text-align: center; }\n.uc-unifi-ap-meta { font-size: 11px; opacity: 0.65; text-align: center; }\n.uc-unifi-ring-spin {\n  filter: drop-shadow(0 0 4px var(--accent, #00e5ff));\n}\n\n.uc-unifi-rack-aps {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 8px;\n  margin-top: 12px;\n}\n\n/* ── Ports view ─────────────────────────────────────────── */\n.uc-unifi-ports-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.uc-unifi-ports-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(92px, 1fr));\n  gap: 8px;\n}\n.uc-unifi-port-card {\n  background: var(--secondary-background-color);\n  border: 1px solid var(--divider-color);\n  border-radius: var(--uc-r-10, 10px);\n  padding: 10px;\n  cursor: pointer;\n  transition: border-color 0.15s ease, transform 0.15s ease;\n}\n.uc-unifi-port-card:hover { border-color: var(--primary-color); transform: translateY(-1px); }\n.uc-unifi-port-card.is-up { border-color: rgba(105,240,174,0.45); }\n.uc-unifi-port-card .idx {\n  font-size: 11px; font-weight: 700; opacity: 0.7; margin-bottom: 4px;\n}\n.uc-unifi-port-card .name {\n  font-size: 12px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n.uc-unifi-port-card .meta { font-size: 10px; opacity: 0.65; margin-top: 4px; }\n.uc-unifi-bar {\n  height: 4px; border-radius: var(--uc-r-2, 2px); background: rgba(127,127,127,0.2); margin-top: 6px; overflow: hidden;\n}\n.uc-unifi-bar > i { display: block; height: 100%; border-radius: var(--uc-r-2, 2px); }\n\n.uc-unifi-port-detail {\n  margin-top: 12px;\n  padding: 14px;\n  border-radius: var(--uc-r-12, 12px);\n  background: var(--secondary-background-color);\n  border: 1px solid var(--divider-color);\n}\n.uc-unifi-port-detail h4 { margin: 0 0 8px; font-size: 14px; }\n.uc-unifi-detail-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 8px;\n  font-size: 12px;\n}\n.uc-unifi-detail-grid .lbl { opacity: 0.6; font-size: 10px; text-transform: uppercase; letter-spacing: 0.4px; }\n.uc-unifi-detail-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }\n\n/* ── Devices view ───────────────────────────────────────── */\n.uc-unifi-devices {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 10px;\n}\n.uc-unifi-device-tile {\n  background: var(--secondary-background-color);\n  border: 1px solid var(--divider-color);\n  border-radius: var(--uc-r-14, 14px);\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  cursor: pointer;\n}\n.uc-unifi-device-tile:hover { border-color: var(--primary-color); }\n/* Fixed-size photo box so every tile presents its photo identically,\n   whatever the image aspect ratio. Scoped selectors (2 classes) beat the\n   card shell's .card-column img height:auto rule. */\n.uc-unifi-device-tile .uc-unifi-tile-photobox {\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.uc-unifi-device-tile .uc-unifi-tile-photo {\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 80px;\n  object-fit: contain;\n  user-select: none;\n  -webkit-user-drag: none;\n  filter: drop-shadow(0 3px 8px rgba(0,0,0,0.3));\n}\n/* Live camera snapshot (UniFi Protect): 16:9-ish cover crop with a motion\n   glow when the camera's motion sensor is on. */\n.uc-unifi-device-tile .uc-unifi-tile-snapbox {\n  position: relative;\n  height: 96px;\n  border-radius: var(--uc-r-8, 8px);\n  overflow: hidden;\n  flex-shrink: 0;\n  background: rgba(0,0,0,0.25);\n}\n.uc-unifi-device-tile .uc-unifi-tile-snap {\n  width: 100%;\n  height: 96px;\n  object-fit: cover;\n  display: block;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n.uc-unifi-device-tile .uc-unifi-tile-snapbox.is-motion {\n  box-shadow: inset 0 0 0 2px #ff5252, 0 0 12px rgba(255, 82, 82, 0.55);\n  animation: uc-unifi-motion-pulse 1.4s ease-in-out infinite;\n}\n@keyframes uc-unifi-motion-pulse {\n  0%, 100% { box-shadow: inset 0 0 0 2px #ff5252, 0 0 6px rgba(255, 82, 82, 0.35); }\n  50% { box-shadow: inset 0 0 0 2px #ff5252, 0 0 16px rgba(255, 82, 82, 0.75); }\n}\n.uc-unifi-motion-badge {\n  position: absolute;\n  top: 6px;\n  left: 6px;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px 7px;\n  border-radius: 999px;\n  font-size: 10px;\n  font-weight: 700;\n  color: #fff;\n  background: rgba(211, 47, 47, 0.85);\n  backdrop-filter: blur(2px);\n}\n.uc-unifi-motion-badge.is-ring {\n  left: auto;\n  right: 6px;\n  background: rgba(25, 118, 210, 0.85);\n}\n.uc-unifi-device-head {\n  display: flex; align-items: center; gap: 10px;\n}\n.uc-unifi-device-head .name { font-weight: 700; font-size: 13px; line-height: 1.2; }\n.uc-unifi-device-head .model { font-size: 11px; opacity: 0.6; }\n.uc-unifi-stats {\n  display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 11px;\n}\n.uc-unifi-stats .v { font-weight: 700; font-variant-numeric: tabular-nums; }\n.uc-unifi-spark { width: 100%; height: 28px; }\n\n/* Utilization ring mini */\n.uc-unifi-mini-ring { width: 48px; height: 48px; flex-shrink: 0; }\n\n/* ── Topology ───────────────────────────────────────────── */\n.uc-unifi-topo {\n  position: relative;\n  width: 100%;\n  min-height: 280px;\n  border-radius: var(--uc-r-12, 12px);\n  background:\n    radial-gradient(circle at 50% 20%, rgba(0,180,255,0.08), transparent 50%),\n    #0a0e16;\n  border: 1px solid rgba(60,90,140,0.3);\n  overflow: hidden;\n}\n.uc-unifi-topo svg { width: 100%; height: 100%; min-height: 280px; display: block; }\n.uc-unifi-topo-node {\n  cursor: pointer;\n}\n.uc-unifi-topo-node circle.core {\n  fill: #141c2a;\n  stroke: #3d8bfd;\n  stroke-width: 2;\n  filter: drop-shadow(0 0 6px rgba(61,139,253,0.45));\n}\n.uc-unifi-topo-node.is-online circle.core {\n  stroke: #2bd97c;\n  filter: drop-shadow(0 0 6px rgba(43,217,124,0.45));\n}\n.uc-unifi-topo-node.is-offline circle.core {\n  stroke: #ff5252;\n  filter: drop-shadow(0 0 6px rgba(255,82,82,0.4));\n}\n.uc-unifi-topo-node text {\n  fill: #cde;\n  font-size: 10px;\n  text-anchor: middle;\n}\n.uc-unifi-flow {\n  fill: none;\n  stroke-linecap: round;\n  stroke-dasharray: 6 10;\n  animation: uc-unifi-flow var(--flow-speed, 1.4s) linear infinite;\n  filter: drop-shadow(0 0 4px currentColor);\n}\n\n/* ── Clients / WAN ──────────────────────────────────────── */\n.uc-unifi-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.uc-unifi-table th {\n  text-align: left;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  opacity: 0.6;\n  padding: 6px 8px;\n  border-bottom: 1px solid var(--divider-color);\n  cursor: pointer;\n  user-select: none;\n}\n.uc-unifi-table td {\n  padding: 8px;\n  border-bottom: 1px solid rgba(127,127,127,0.12);\n  vertical-align: middle;\n}\n.uc-unifi-table tr:hover td { background: rgba(127,127,127,0.06); }\n.uc-unifi-wan-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 10px;\n}\n.uc-unifi-wan-card {\n  background: var(--secondary-background-color);\n  border-radius: var(--uc-r-12, 12px);\n  padding: 14px;\n  border: 1px solid var(--divider-color);\n}\n.uc-unifi-wan-card .target { font-weight: 700; font-size: 13px; }\n.uc-unifi-wan-card .latency {\n  font-size: 28px; font-weight: 800; font-variant-numeric: tabular-nums;\n  margin: 6px 0;\n  color: var(--primary-color);\n}\n.uc-unifi-wan-card .unit { font-size: 12px; opacity: 0.6; }\n\n/* ── Keyframes ──────────────────────────────────────────── */\n@keyframes uc-unifi-port-blink {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.35; }\n}\n@keyframes uc-unifi-poe-pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.4; }\n}\n@keyframes uc-unifi-flow {\n  to { stroke-dashoffset: -32; }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .uc-unifi-port.is-active .uc-unifi-port-led,\n  .uc-unifi-poe-dot,\n  .uc-unifi-flow,\n  .uc-unifi-port-cell .led-rx.is-active,\n  .uc-unifi-port-cell .led-tx.is-active,\n  .uc-unifi-ring-spin {\n    animation: none !important;\n  }\n}\n\n.uc-unifi.anim-off .uc-unifi-port.is-active .uc-unifi-port-led,\n.uc-unifi.anim-off .uc-unifi-poe-dot,\n.uc-unifi.anim-off .uc-unifi-flow,\n.uc-unifi.anim-off .uc-unifi-port-cell .led-rx.is-active,\n.uc-unifi.anim-off .uc-unifi-port-cell .led-tx.is-active,\n.uc-unifi.anim-off .uc-unifi-tile-snapbox.is-motion,\n.uc-unifi.anim-off .uc-unifi-ring-spin {\n  animation: none !important;\n}\n.uc-unifi.anim-subtle .uc-unifi-flow {\n  animation-duration: calc(var(--flow-speed, 1.4s) * 2);\n}\n\n    `}validate(e){const t=[];return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),{valid:0===t.length,errors:t}}}},1671(e,t,i){i.d(t,{CY:()=>l,EA:()=>d,Hv:()=>c,SM:()=>u,Z_:()=>p,f0:()=>a});const n=Object.freeze({data:new Map,loading:!1,fetchedAt:0,error:null});function o(e){var t,i,n,o;if(null==e||"object"!=typeof e)return null;const r=e;if(void 0!==r.s&&(void 0!==r.lu||void 0!==r.lc)){const e=Number(null!==(t=r.lu)&&void 0!==t?t:r.lc);return Number.isFinite(e)?{t:1e3*e,state:String(r.s),attributes:null!==(i=r.a)&&void 0!==i?i:null}:null}if(void 0!==r.state){const e=null!==(n=r.last_changed)&&void 0!==n?n:r.last_updated,t=e?new Date(String(e)).getTime():NaN;return Number.isFinite(t)?{t,state:String(r.state),attributes:null!==(o=r.attributes)&&void 0!==o?o:null}:null}return null}const r=new class{constructor(){this._cache=new Map}query(e,t,i){var o;if(!e||0===t.entityIds.length)return n;const r=null!==(o=t.ttlMs)&&void 0!==o?o:3e5,s=this._cache.get(t.key),a=Date.now();(!s||a-s.fetchedAt>r)&&!(null==s?void 0:s.inflight)&&this._startFetch(e,t,i);const l=this._cache.get(t.key);return l?{data:l.data,loading:l.loading,fetchedAt:l.fetchedAt,error:l.error}:n}async fetch(e,t){var i,n;return e&&0!==t.entityIds.length?(await this._startFetch(e,t),null!==(n=null===(i=this._cache.get(t.key))||void 0===i?void 0:i.data)&&void 0!==n?n:new Map):new Map}invalidate(e){this._cache.delete(e)}clear(){this._cache.clear()}_startFetch(e,t,i){const n=this._cache.get(t.key);if(null==n?void 0:n.inflight)return n.inflight;const o=null!=n?n:{data:new Map,fetchedAt:0,loading:!1,error:null,inflight:null};o.loading=!0,this._cache.set(t.key,o);const r=this._doFetch(e,t).then(e=>{o.data=e,o.fetchedAt=Date.now(),o.error=null}).catch(e=>{o.error=e instanceof Error?e.message:String(e),o.fetchedAt=Date.now()}).finally(()=>{if(o.loading=!1,o.inflight=null,i)try{i()}catch(e){}});return o.inflight=r,r}async _doFetch(e,t){const i=t.entityIds.filter(e=>!!e);if(0===i.length)return new Map;const n=new Date(t.startMs).toISOString(),r=new Date(t.endMs).toISOString(),s=!t.withAttributes;let a={};try{a=await e.callWS({type:"history/history_during_period",start_time:n,end_time:r,entity_ids:i,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!1,no_attributes:s})}catch(t){const o=await e.callApi("GET",`history/period/${n}`,{filter_entity_id:i.join(","),end_time:r});if(a={},Array.isArray(o))for(const e of o)if(Array.isArray(e)&&e.length>0){const t=e[0];(null==t?void 0:t.entity_id)&&(a[t.entity_id]=e)}}const l=new Map;for(const[e,t]of Object.entries(a)){if(!Array.isArray(t)||0===t.length)continue;const i=[];for(const e of t){const t=o(e);t&&i.push(t)}i.length>0&&(i.sort((e,t)=>e.t-t.t),l.set(e,i))}return l}},s=new Set(["unavailable","unknown","none","","null"]);function a(e,t){var i;if(!e||0===e.length)return[];const n=null==t?void 0:t.attribute,o=[];for(const t of e){const e=n?null===(i=t.attributes)||void 0===i?void 0:i[n]:t.state;if(null==e)continue;const r=String(e).trim().toLowerCase();if(s.has(r))continue;const a=Number(e);Number.isFinite(a)&&o.push({t:t.t,v:a})}return o}function l(e,t,i){if(0===e.length)return null;if(1===e.length)return e[0].v;const n=null!=t?t:e[0].t,o=null!=i?i:e[e.length-1].t;if(o<=n)return e[e.length-1].v;let r=0,s=0;for(let t=0;t<e.length;t++){const i=e[t],a=Math.max(i.t,n),l=Math.min(t+1<e.length?e[t+1].t:o,o)-a;l<=0||(r+=i.v*l,s+=l)}return s<=0?e[e.length-1].v:r/s}function d(e,t,i,n){if(0===e.length)return null;if(1===e.length)return e[0].v;const o=null!=i?i:e[0].t,r=null!=n?n:e[e.length-1].t,s=[];let a=0;for(let t=0;t<e.length;t++){const i=e[t],n=Math.max(i.t,o),l=Math.min(t+1<e.length?e[t+1].t:r,r)-n;l<=0||(s.push({v:i.v,ms:l}),a+=l)}if(0===s.length||a<=0)return e[e.length-1].v;s.sort((e,t)=>e.v-t.v);const l=a*Math.min(Math.max(t,0),1);let d=0;for(const e of s)if(d+=e.ms,d>=l)return e.v;return s[s.length-1].v}function c(e,t){var i,n;if(e.length<3)return null;const o=null!==(i=null==t?void 0:t.floor)&&void 0!==i?i:0,r=null!==(n=null==t?void 0:t.riseToleranceUnits)&&void 0!==n?n:1,s=[];let a=[e[0]];for(let t=1;t<e.length;t++){const i=e[t-1],n=e[t];n.v-i.v>r?(a.length>=2&&s.push(a),a=[n]):a.push(n)}if(a.length>=2&&s.push(a),0===s.length)return null;let l=0,d=0;for(const e of s){const t=e[0],i=e[e.length-1],n=t.v-i.v,o=i.t-t.t;o<=0||n<=0||(l+=n,d+=o)}const c=e[e.length-1].t-e[0].t,u=c>0?Math.min(d/c,1):0,p=(s[s.length-1],e.length>=2&&e[e.length-1].v-e[e.length-2].v>r);if(d<=0||l<=0)return{ratePerHour:0,msToEmpty:null,coverage:u,charging:p};const f=l/d*36e5,v=e[e.length-1].v-o;return{ratePerHour:f,msToEmpty:f>0&&v>0?v/f*36e5:null,coverage:u,charging:p}}function u(e,t){var i,n,o,r;if(e.length<2)return[];const s=t.startThreshold,a=null!==(i=t.stopThreshold)&&void 0!==i?i:.5*s,l=null!==(n=t.settleMs)&&void 0!==n?n:18e4,d=null!==(o=t.minDurationMs)&&void 0!==o?o:3e5,c=null!==(r=t.endMs)&&void 0!==r?r:e[e.length-1].t,u=[];let p=null,f=null,v=0,h=0,g=0,y=0,m=0;const w=e=>{if(null===p)return;const t=e-p;t>=d&&u.push({startMs:p,endMs:e,durationMs:t,peak:v,mean:g>0?h/g:v,areaHours:h/36e5}),p=null,f=null,v=0,h=0,g=0};for(let t=0;t<e.length;t++){const i=e[t],n=t+1<e.length?e[t+1].t:c,o=Math.max(n-i.t,0);null!==p?(v=Math.max(v,i.v),i.v<a?(null===f&&(f=i.t,y=h,m=g),h+=i.v*o,g+=o,n-f>=l&&(h=y,g=m,w(f))):(f=null,h+=i.v*o,g+=o)):i.v>=s&&(p=i.t,v=i.v,h=i.v*o,g=o,f=null)}return null!==p&&(null!==f?(h=y,g=m,w(f)):w(c)),u}function p(e,t,i){var n,o;if(!e||!t)return null;const r=null===(n=e.states)||void 0===n?void 0:n[t];if(!r)return null;const a=i?null===(o=r.attributes)||void 0===o?void 0:o[i]:r.state;if(null==a)return null;if(s.has(String(a).trim().toLowerCase()))return null;const l=Number(a);return Number.isFinite(l)?l:null}i.d(t,["ur",0,r])},3488(e,t,i){i.d(t,{SB:()=>l,b5:()=>a,gf:()=>s});var n=i(2618),o=i(378),r=i(6478);function s(e){var t,i,n,r;if(!e)return!1;try{const s=o.xd.checkIntegrationAuth(e);if("pro"===(null===(t=null==s?void 0:s.subscription)||void 0===t?void 0:t.tier)&&"active"===(null===(i=null==s?void 0:s.subscription)||void 0===i?void 0:i.status))return!0;if(o.xd.isAuthenticated()){const e=o.xd.getCurrentUser();if("pro"===(null===(n=null==e?void 0:e.subscription)||void 0===n?void 0:n.tier)&&"active"===(null===(r=null==e?void 0:e.subscription)||void 0===r?void 0:r.status))return!0}}catch(e){return!1}return!1}function a(e,t){return n.qy`
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
  `}function l(e,t){return n.qy`
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
  `}},6673(e,t,i){i.d(t,{W:()=>o,p:()=>n});class n{constructor(e=32){this._cache=new Map,this._limit=e}read(e,t,i,n){const o=this._cache.get(e);if(o&&o.key===i&&function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(o.deps,t))return o.value;const r=n();if(this._cache.set(e,{deps:t,key:i,value:r}),this._cache.size>this._limit){const e=this._cache.keys().next().value;void 0!==e&&this._cache.delete(e)}return r}forget(e){this._cache.delete(e)}clear(){this._cache.clear()}}function o(...e){try{return JSON.stringify(e)}catch(e){return`__unserializable__${Math.random()}`}}}};