export const __webpack_esm_ids__=[8500];export const __webpack_esm_modules__={7442(e,t,r){r.d(t,{UltraRainRadarModule:()=>ce});var i=r(2618),a=r(3307),o=r(6478),n=r(4791),s=r(3481),l=r(8125);const d="https://api.rainviewer.com/public/weather-maps.json",c=[30,60,90,120],h=["person","device_tracker","zone"],p="https://server.arcgisonline.com/ArcGIS/rest/services",u='Tiles &copy; <a href="https://www.esri.com/" target="_blank" rel="noopener">Esri</a>',m={light:{url:`${p}/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}`,labelsUrl:`${p}/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}`,attribution:u,maxZoom:16},dark:{url:`${p}/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}`,labelsUrl:`${p}/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}`,attribution:u,maxZoom:16},streets:{url:`${p}/World_Street_Map/MapServer/tile/{z}/{y}/{x}`,attribution:u,maxZoom:18},satellite:{url:`${p}/World_Imagery/MapServer/tile/{z}/{y}/{x}`,labelsUrl:`${p}/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}`,attribution:u,maxZoom:18}};function _(e,t,r,i){const a="number"==typeof e?e:Number(e);return Number.isFinite(a)?Math.min(r,Math.max(t,a)):i}function y(e){return m[e]}const w={light:"light-v11",dark:"dark-v11",streets:"streets-v12",satellite:"satellite-streets-v12"},v={light:{id:"basic-v2-light",ext:"png"},dark:{id:"basic-v2-dark",ext:"png"},streets:{id:"streets-v2",ext:"png"},satellite:{id:"hybrid",ext:"jpg"}};function f(e){const t=(e.map_api_key||"").trim();return/^[A-Za-z0-9._-]{8,256}$/.test(t)?t:""}const g=[{stylers:[{hue:"#1d2c4d"},{saturation:-60},{invert_lightness:!0}]}],b=new Map;function x(e){const t="number"==typeof e?e:"string"==typeof e?Number(e):NaN;return Number.isFinite(t)?t:null}function k(e,t){return null===e||null===t||e<-90||e>90||t<-180||t>180?null:{lat:e,lng:t}}function $(e,t){var r;if(!(null==e?void 0:e.states)||!t)return null;const i=null===(r=e.states[t])||void 0===r?void 0:r.attributes;return i?k(x(i.latitude),x(i.longitude)):null}function S(e){const t=null==e?void 0:e.config;if(t){const e=k(x(t.latitude),x(t.longitude));if(e)return e}return $(e,"zone.home")}function z(e,t){const r=e.center_mode||"home";if("entity"===r){const r=$(t,e.center_entity);if(r)return r}else if("manual"===r){const t=k(x(e.latitude),x(e.longitude));if(t)return t}return S(t)}function F(e){var t;for(let r=e.length-1;r>=0;r--)if(!1===(null===(t=e[r])||void 0===t?void 0:t.forecast))return r;return Math.max(0,e.length-1)}function P(e,t){const r=_(t,10,1440,120),i=e[F(e)];if(!i||i.forecast)return[...e];const a=i.time-60*r;return e.filter(e=>e.forecast||e.time>=a)}function M(e){const t=(e.source_url||"").trim();return/^https?:\/\//i.test(t)?t:d}function L(e){const t=R(e);return"openweather"===t?T:"rainbow"===t?E:M(e)===d?7:12}const T=9,q=3600;function A(e){const t=(e.openweather_api_key||"").trim();return/^[A-Za-z0-9]{8,64}$/.test(t)?t:""}function R(e){return"openweather"===e.radar_source&&A(e)?"openweather":"rainbow"===e.radar_source&&j(e)?"rainbow":"rainviewer"}function C(e,t,r){const i=encodeURIComponent(e);return"openweather1"===r?`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${i}`:`https://maps.openweathermap.org/maps/2.0/weather/PR0/{z}/{x}/{y}?appid=${i}&date=${encodeURIComponent(t.path)}&opacity=1`}const O=e=>new Promise(t=>{if("undefined"==typeof Image)return t(!1);const r=new Image,i=setTimeout(()=>t(!1),8e3);r.onload=()=>{clearTimeout(i),t(!0)},r.onerror=()=>{clearTimeout(i),t(!1)},r.referrerPolicy="strict-origin-when-cross-origin",r.src=e}),U=new Map;const E=7,I="https://api.rainbow.ai/tiles/v1",W=[0,1800,3600,5400,7200];function j(e){const t=(e.rainbow_api_key||"").trim();return/^[A-Za-z0-9_-]{8,128}$/.test(t)?t:""}function N(e,t){return(t?W:W.slice(0,1)).map(t=>({time:e+t,path:`${e}/${t}`,forecast:t>0}))}function K(e,t){return`${I}/precip/${t.path}/{z}/{x}/{y}?token=${encodeURIComponent(e)}`}function Z(e){const t=null==e?void 0:e.snapshot,r="string"==typeof t?Number(t):t;return"number"==typeof r&&Number.isFinite(r)&&r>0?Math.floor(r):null}const D=new Map,G=[`${I}/snapshot`,"https://api.rainbow.ai/v1/weather/map/snapshot"];async function B(e){const t=!1!==e.show_forecast;if("openweather"===R(e))return async function(e,t,r,i=Date.now(),a=O){let o=U.get(e);if(!o||i-o.at>216e5){const t={path:String(Math.floor(i/1e3/q)*q)},r=r=>C(e,t,r).replace("{z}/{x}/{y}","2/2/1");let n=null;if(await a(r("openweather2"))?n="openweather2":await a(r("openweather1"))&&(n="openweather1"),!n)throw new Error("OpenWeather rejected the API key");o={provider:n,at:i},U.set(e,o)}const n="openweather2"===o.provider?function(e,t,r){const i=_(t,10,1440,120),a=Math.floor(e/1e3/q)*q,o=[];for(let e=-Math.max(1,Math.round(i/60));e<=(r?3:0);e++){const t=a+e*q;o.push({time:t,path:String(t),forecast:e>0})}return o}(i,r,t):[{time:Math.floor(i/1e3),path:"now",forecast:!1}];return{host:e,provider:o.provider,frames:n,fetchedAt:i}}(A(e),t,e.time_span);if("rainbow"===R(e))return async function(e,t,r=Date.now(),i=e=>fetch(e,{cache:"no-store"}),a=O){var o;let n=D.get(e);if(!n||r-n.at>=6e5){const t=null!==(o=await async function(e,t){for(const r of G)try{const i=await t(`${r}?token=${encodeURIComponent(e)}`);if(!i.ok)continue;const a=Z(await i.json());if(null!==a)return a}catch(e){}return null}(e,i))&&void 0!==o?o:await async function(e,t,r){const i=600*Math.floor(t/1e3/600);for(let t=0;t<6;t++){const a=i-600*t,o=K(e,{path:`${a}/0`}).replace("{z}/{x}/{y}","2/1/1");if(await r(o))return a}return null}(e,r,a);if(null===t)throw new Error("Rainbow.ai returned no radar for this key");n={snapshot:t,at:r},D.set(e,n)}return{host:e,provider:"rainbow",frames:N(n.snapshot,t),fetchedAt:n.at}}(j(e),t);const r=await async function(e,t,r=Date.now(),i=e=>fetch(e,{cache:"no-store"})){const a=H.get(e);let o;if(a&&r-a.fetchedAt<3e5)o=a;else{let t=V.get(e);t||(t=(async()=>{const t=await i(e);if(!t.ok)throw new Error("Radar source returned an error");const a={payload:await t.json(),fetchedAt:r};return H.set(e,a),a})(),V.set(e,t),t.then(()=>V.delete(e),()=>V.delete(e))),o=await t}const n=function(e,t,r){if(!e||"object"!=typeof e)return null;const i=e,a="string"==typeof i.host?i.host.replace(/\/+$/,""):"",o=i.radar&&"object"==typeof i.radar?i.radar:null;if(!a||!o)return null;const n=(e,t)=>(Array.isArray(e)?e:[]).map(e=>{if(!e||"object"!=typeof e)return null;const r=e,i=x(r.time),a="string"==typeof r.path?r.path:"";return null!==i&&a?{time:i,path:a,forecast:t}:null}).filter(e=>null!==e),s=[...n(o.past,!1),...t?n(o.nowcast,!0):[]];s.sort((e,t)=>e.time-t.time);const l=s.filter((e,t)=>{var r;return 0===t||e.time!==(null===(r=s[t-1])||void 0===r?void 0:r.time)});return l.length?{host:a,frames:l,fetchedAt:r}:null}(o.payload,t,o.fetchedAt);if(!n)throw new Error("Radar source returned no frames");return n}(M(e),t);return Object.assign(Object.assign({},r),{frames:P(r.frames,e.time_span)})}const H=new Map,V=new Map,J=["temperature","precipitation","wind","clouds","air_quality"],X={temperature:{variable:"temperature_2m"},precipitation:{variable:"precipitation"},wind:{variable:"wind_speed_10m"},clouds:{variable:"cloud_cover"},air_quality:{variable:"pm2_5",domain:"cams_global"}},Y=[{value:"dwd_icon_seamless",label:"DWD ICON (global + Europe)"},{value:"ncep_gfs013",label:"NOAA GFS (global)"},{value:"ecmwf_ifs025",label:"ECMWF IFS (global)"},{value:"cmc_gem_seamless",label:"GEM (Canada)"},{value:"ukmo_seamless",label:"UK Met Office"},{value:"meteofrance_seamless",label:"Météo-France"},{value:"knmi_seamless",label:"KNMI (Netherlands)"},{value:"jma_seamless",label:"JMA (Japan)"}],Q=new Set(Y.map(e=>e.value)),ee=(e,t,[r,i,a,o])=>e>=r&&e<=a&&t>=i&&t<=o;function te(e,t){return ee(e,t,[49.8,-8.7,60.9,1.9])?"ukmo_seamless":ee(e,t,[50.7,3.2,53.7,7.3])?"knmi_seamless":ee(e,t,[41.3,-5.2,51.1,9.6])?"meteofrance_seamless":ee(e,t,[24,122,46,146])?"jma_seamless":ee(e,t,[49,-141,70,-52])?"cmc_gem_seamless":t>=-170&&t<=-30?"ncep_gfs013":"dwd_icon_seamless"}function re(e){const t=e.weather_layer;return t&&J.includes(t)?t:"none"}const ie={pm2_5:{type:"breakpoint",unit:"µg/m³",breakpoints:[0,10,20,25,50,75],colors:[[80,240,230,.55],[80,204,170,.75],[240,230,65,.85],[255,80,80,.9],[150,0,50,.95],[125,33,129,1]]}},ae=e=>import(e);let oe=null;var ne=function(e,t,r,i){var a,o=arguments.length,n=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o<3?a(n):o>3?a(t,r,n):a(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n};const se="strict-origin-when-cross-origin";function le(e){return e.replace(/[&<>"']/g,e=>"&"===e?"&amp;":"<"===e?"&lt;":">"===e?"&gt;":'"'===e?"&quot;":"&#39;")}class de extends i.WF{constructor(){super(...arguments),this.language="en",this._frames=[],this._index=0,this._playing=!0,this._status="idle",this._moved=!1,this._fullscreen=!1,this._pseudoFs=!1,this._weatherLegend=null,this._weatherError=!1,this._baseKey="",this._baseSeq=0,this._viewKey="",this._optionsKey="",this._radarKey="",this._sourceKey="",this._markerKey="",this._host="",this._layers=new Map,this._shownPath="",this._sizeTries=0,this._waitedMs=0,this._loadSeq=0,this._weatherKey="",this._weatherSeq=0,this._onFullscreenChange=()=>{const e=document;document.fullscreenElement||e.webkitFullscreenElement||!this._fullscreen||this._pseudoFs||(this._fullscreen=!1)},this._onKeydown=e=>{"Escape"===e.key&&this._pseudoFs&&this._exitFullscreen()}}connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this._onFullscreenChange),document.addEventListener("webkitfullscreenchange",this._onFullscreenChange),this._map&&(this._observeSize(),this._map.invalidateSize(),this._scheduleRefresh(this._frames.length?3e5:0),this._schedulePlay(),this._weatherKey="",this._sync())}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this._onFullscreenChange),document.removeEventListener("webkitfullscreenchange",this._onFullscreenChange),window.removeEventListener("keydown",this._onKeydown),this._pseudoFs&&document.documentElement.style.removeProperty("overflow"),this._fullscreen=!1,this._pseudoFs=!1,this._clearTimer("_playTimer"),this._clearTimer("_refreshTimer"),this._clearTimer("_sizeTimer"),this._clearTimer("_weatherTimer"),null===(e=this._resizeObserver)||void 0===e||e.disconnect(),this._resizeObserver=void 0}firstUpdated(){this._tryInit()}updated(e){this._map&&(e.has("module")||e.has("hass"))&&this._sync(),this._map&&e.has("_fullscreen")&&(this._sync(),this._map.invalidateSize(),!this._fullscreen&&this._moved&&this._recenter(!1))}get _wrap(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".wrap")}async _toggleFullscreen(e){if(e.stopPropagation(),this._fullscreen)return void this._exitFullscreen();const t=this._wrap;if(t){try{if(t.requestFullscreen)await t.requestFullscreen();else{if(!t.webkitRequestFullscreen)throw new Error("no fullscreen");await t.webkitRequestFullscreen()}this._pseudoFs=!1}catch(e){this._pseudoFs=!0,document.documentElement.style.setProperty("overflow","hidden"),window.addEventListener("keydown",this._onKeydown)}this._fullscreen=!0}}_exitFullscreen(){var e,t;if(this._pseudoFs)document.documentElement.style.removeProperty("overflow"),window.removeEventListener("keydown",this._onKeydown),this._pseudoFs=!1;else{const r=document;document.fullscreenElement?null===(e=document.exitFullscreen)||void 0===e||e.call(document).catch(()=>{}):null===(t=r.webkitExitFullscreen)||void 0===t||t.call(r)}this._fullscreen=!1}_clearTimer(e){const t=this[e];void 0!==t&&window.clearTimeout(t),this[e]=void 0}get _container(){var e;return null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(".map")}_tryInit(){if(this._map||!this.isConnected)return;const e=this._container;e&&this.module&&(0!==e.offsetWidth&&0!==e.offsetHeight?this._createMap(e):"undefined"!=typeof ResizeObserver?this._observeSize():this._sizeTries<30&&(this._sizeTries++,this._clearTimer("_sizeTimer"),this._sizeTimer=window.setTimeout(()=>this._tryInit(),400)))}_observeSize(){if(this._resizeObserver||"undefined"==typeof ResizeObserver)return;const e=this._container;e&&(this._resizeObserver=new ResizeObserver(()=>{this._map?this._map.invalidateSize():this._tryInit()}),this._resizeObserver.observe(e))}_createMap(e){const t=this.module,r=t?z(t,this.hass):null;if(!t||!r)return;const i=_(t.zoom,3,12,7);try{const t=s.map(e,{zoomControl:!1,attributionControl:!0,scrollWheelZoom:!1,boxZoom:!1,keyboard:!1,minZoom:3,maxZoom:12,zoomSnap:1}).setView([r.lat,r.lng],i);t.attributionControl.setPrefix(!1),t.on("dragstart zoomstart",()=>{t._ucProgrammatic||(this._moved=!0)}),this._map=t,this._observeSize(),this._sync()}catch(e){this._map=void 0}}_sync(){const e=this._map,t=this.module;if(!e||!t)return;const r=!0===t.interactive||this._fullscreen,i=!0===t.show_zoom_controls||this._fullscreen,a=`${r}|${i}|${this._fullscreen}`;if(a!==this._optionsKey){this._optionsKey=a,this._fullscreen?e.scrollWheelZoom.enable():e.scrollWheelZoom.disable();for(const t of[e.dragging,e.touchZoom,e.doubleClickZoom])t&&(r?t.enable():t.disable());e.zoomControl&&e.removeControl(e.zoomControl),i&&(e.zoomControl=s.control.zoom({position:"topright"}),e.addControl(e.zoomControl))}const o=z(t,this.hass),n=_(t.zoom,3,12,7);if(o){const e=`${o.lat.toFixed(4)},${o.lng.toFixed(4)},${n}`;if(e!==this._viewKey){const t=""===this._viewKey;this._viewKey=e,t&&!this._moved||this._recenter(!1)}}const l=function(e,t){return e&&"auto"!==e?e in m?e:"light":t?"dark":"light"}(t.map_style,function(e){const t=null==e?void 0:e.themes;return!!t&&"object"==typeof t&&!0===t.darkMode}(this.hass)),d=function(e){const t=e.map_provider;return"google"!==t&&"mapbox"!==t&&"maptiler"!==t||!f(e)?"esri":t}(t),c="esri"===d?"":f(t),h=`${d}|${l}|${c}`;h!==this._baseKey&&(this._baseKey=h,this._applyBase(l,d,c));const p=`${!1!==t.smooth}|${!1!==t.snow_colors}|${L(t)}`;p!==this._radarKey?(this._radarKey=p,this._dropLayers(()=>!0),this._frames.length&&this._showFrame(this._index)):this._applyOpacity();const u=function(e){var t;const r=R(e);return`${"openweather"===r?`owm:${A(e)}`:"rainbow"===r?`rainbow:${j(e)}`:M(e)}|${!1!==e.show_forecast}|${null!==(t=e.time_span)&&void 0!==t?t:""}`}(t);u!==this._sourceKey&&(this._sourceKey=u,this._loadFrames(!0)),this._syncWeather("dark"===l||"satellite"===l);const y=!1!==t.autoplay;y!==this._autoplayApplied&&(this._autoplayApplied=y,this._playing=y,this._schedulePlay()),this._syncMarkers()}async _applyBase(e,t,r){const i=++this._baseSeq;let a=null;if("mapbox"===t||"maptiler"===t)a=function(e,t,r){const i=encodeURIComponent(r);if("mapbox"===e)return{url:`https://api.mapbox.com/styles/v1/mapbox/${w[t]}/tiles/256/{z}/{x}/{y}?access_token=${i}`,attribution:'&copy; <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noopener">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',maxZoom:19};const a=v[t];return{url:`https://api.maptiler.com/maps/${a.id}/256/{z}/{x}/{y}.${a.ext}?key=${i}`,attribution:'&copy; <a href="https://www.maptiler.com/copyright/" target="_blank" rel="noopener">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',maxZoom:19}}(t,e,r);else if("google"===t){try{a=await async function(e,t,r="en",i=Date.now(),a=(e,t)=>fetch(e,t)){const o=`${t}|${e}|${r}`;let n=b.get(o);if(!n||n.expires-i<36e5){const s={mapType:"satellite"===e?"satellite":"roadmap",language:r||"en",region:"US",scale:"scaleFactor1x"};"satellite"===e&&(s.layerTypes=["layerRoadmap"]),"dark"===e&&(s.styles=g);const l=await a(`https://tile.googleapis.com/v1/createSession?key=${encodeURIComponent(t)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!l.ok)throw new Error("Google rejected the map key");const d=await l.json();if("string"!=typeof d.session||!d.session)throw new Error("No Google session");const c=Number(d.expiry);n={session:d.session,expires:Number.isFinite(c)?1e3*c:i+432e5},b.set(o,n)}return{url:`https://tile.googleapis.com/v1/2dtiles/{z}/{x}/{y}?session=${encodeURIComponent(n.session)}&key=${encodeURIComponent(t)}`,attribution:"Map data &copy; Google",maxZoom:20}}(e,r,this.language)}catch(e){a=null}if(i!==this._baseSeq||!this._map)return}a?this._setBaseLayer(a,!0,e):this._setBaseLayer(y(e),!1,e)}_setBaseLayer(e,t,r){const i=this._map;if(!i)return;this._baseLayer&&i.removeLayer(this._baseLayer),this._labelsLayer&&i.removeLayer(this._labelsLayer),this._labelsLayer=void 0;const a=s.tileLayer(e.url,{attribution:e.attribution,maxZoom:e.maxZoom,zIndex:1,keepBuffer:2,referrerPolicy:se}).addTo(i);if(this._baseLayer=a,t){let e=!1,t=0;a.on("tileload",()=>e=!0),a.on("tileerror",()=>{e||++t<4||this._baseLayer!==a||this._setBaseLayer(y(r),!1,r)})}else e.labelsUrl&&(this._labelsLayer=s.tileLayer(e.labelsUrl,{maxZoom:e.maxZoom,zIndex:20,keepBuffer:2,referrerPolicy:se}).addTo(i))}_recenter(e){const t=this._map,r=this.module;if(!t||!r)return;const i=z(r,this.hass);if(!i)return;const a=_(r.zoom,3,12,7),o=t;o._ucProgrammatic=!0,t.setView([i.lat,i.lng],a,{animate:e}),o._ucProgrammatic=!1,this._moved=!1}_syncMarkers(){const e=this._map,t=this.module;if(!e||!t)return;const r=this.hass,i=!1!==t.show_home_marker?z({center_mode:"home"},r):null,a=!1!==t.show_marker_names,o=(t.marker_entities||[]).map(e=>{const t=$(r,e);if(!t||!r)return null;const i=r.states[e],a=(null==i?void 0:i.attributes)||{},o=String(a.friendly_name||e),n="string"==typeof a.entity_picture?a.entity_picture:"",s="string"==typeof a.icon?a.icon:e.startsWith("zone.")?"mdi:map-marker-radius":"mdi:account",l=e.startsWith("zone.")&&Number(a.radius)||0;return{entityId:e,pos:t,name:o,picture:n,icon:s,radius:l}}).filter(e=>null!==e),n=JSON.stringify([i,a,o]);if(n===this._markerKey)return;this._markerKey=n,this._markerLayer&&e.removeLayer(this._markerLayer);const l=s.layerGroup(),d=("function"==typeof getComputedStyle?getComputedStyle(this).getPropertyValue("--primary-color").trim():"")||"#03a9f4";i&&s.marker([i.lat,i.lng],{icon:s.divIcon({className:"uc-rr-home",html:'<span class="pulse"></span><span class="dot"></span>',iconSize:[18,18],iconAnchor:[9,9]}),interactive:!1,keyboard:!1,zIndexOffset:500}).addTo(l);for(const e of o){e.radius>0&&s.circle([e.pos.lat,e.pos.lng],{radius:e.radius,color:d,weight:1.5,fillOpacity:.08,interactive:!1}).addTo(l);const t=e.picture?`<img src="${le(e.picture)}" alt="">`:`<ha-icon icon="${le(e.icon)}"></ha-icon>`,r=a?`<span class="name">${le(e.name)}</span>`:"";s.marker([e.pos.lat,e.pos.lng],{icon:s.divIcon({className:"uc-rr-marker",html:`<span class="pin">${t}</span>${r}`,iconSize:[30,a?50:30],iconAnchor:[15,15]}),title:e.name,keyboard:!1,zIndexOffset:1e3}).on("click",()=>this._moreInfo(e.entityId)).addTo(l)}l.addTo(e),this._markerLayer=l}_moreInfo(e){this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}}))}_weatherOpacity(){var e;return _(null===(e=this.module)||void 0===e?void 0:e.weather_layer_opacity,0,100,60)/100}_syncWeather(e){var t;const r=this.module,i=this._map;if(!r||!i)return;const a=re(r),o=z(r,this.hass),n=o?function(e,t){const r=re(e);if("none"===r)return null;const i=X[r].domain;if(i)return i;const a=(e.weather_model||"").trim();return a&&"auto"!==a&&Q.has(a)?a:te(t.lat,t.lng)}(r,o):null,s=function(e){return"none"===e?null:X[e].variable}(a),l=n&&s?`${n}|${s}|${e}`:"";l!==this._weatherKey?(this._weatherKey=l,this._removeWeather(),n&&s&&this._addWeather(n,s,e)):null===(t=this._weatherLayer)||void 0===t||t.setOpacity(this._weatherOpacity())}async _addWeather(e,t,r){var i,a,o,n,l,d;const c=++this._weatherSeq;try{const h=await function(e,t=ae){return oe||(oe=t("https://cdn.jsdelivr.net/npm/@openmeteo/weather-map-layer@0.3.0/dist/index.mjs").then(t=>{if("function"!=typeof(null==t?void 0:t.addLeafletProtocolSupport))throw new Error("Open-Meteo layer did not load");const r=t.addLeafletProtocolSupport(e),i=t.defaultOmProtocolSettings||{},a=Object.assign(Object.assign({},i),{colorScales:Object.assign(Object.assign({},i.colorScales||{}),ie)});return r.addProtocol("om",t.omProtocol,a),{lib:t,createTileLayer:r.createTileLayer}}).catch(e=>{throw oe=null,e})),oe}(s),p=this._map;if(c!==this._weatherSeq||!p)return;const u=h.createTileLayer(function(e,t,r){const i=new URLSearchParams({time_step:"current_time_1H",variable:t});return r&&i.set("dark","true"),`om://https://openmeteo.s3.amazonaws.com/data_spatial/${e}/latest.json?${i.toString()}`}(e,t,r),{opacity:this._weatherOpacity(),zIndex:5,maxZoom:12,attribution:'Weather &copy; <a href="https://open-meteo.com/" target="_blank" rel="noopener">Open-Meteo</a>',className:"uc-rr-weather",keepBuffer:1});u.addTo(p),this._weatherLayer=u,this._weatherError=!1;try{this._weatherLegend=function(e,t=!1){var r;if(!e||!Array.isArray(e.colors)||e.colors.length<2)return null;const i=e.colors.length,a=e.colors.map((e,t)=>`${(e=>{const[t=0,r=0,i=0,a=1]=e;return`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(i)}, ${a>1?a/255:a})`})(e)} ${(t/(i-1)*100).toFixed(1)}%`),o=e=>String(Math.round(10*e)/10);let n,s;if("breakpoint"===e.type){if(!(null===(r=e.breakpoints)||void 0===r?void 0:r.length))return null;n=e.breakpoints[0],s=e.breakpoints[e.breakpoints.length-1]}else n=e.min,s=e.max;if(!Number.isFinite(n)||!Number.isFinite(s))return null;if(t&&"°C"===e.unit){const e=e=>Math.round(9*e/5+32);return{gradient:`linear-gradient(90deg, ${a.join(", ")})`,min:String(e(n)),max:String(e(s)),unit:"°F"}}return{gradient:`linear-gradient(90deg, ${a.join(", ")})`,min:o(n),max:o(s),unit:e.unit||""}}(null!==(i=ie[t])&&void 0!==i?i:null===(o=(a=h.lib).getColorScale)||void 0===o?void 0:o.call(a,t,r),"°F"===(null===(d=null===(l=null===(n=this.hass)||void 0===n?void 0:n.config)||void 0===l?void 0:l.unit_system)||void 0===d?void 0:d.temperature))}catch(e){this._weatherLegend=null}this._clearTimer("_weatherTimer"),this._weatherTimer=window.setTimeout(()=>{this._weatherKey="",this._sync()},18e5)}catch(e){if(c!==this._weatherSeq)return;this._weatherError=!0,this._clearTimer("_weatherTimer"),this._weatherTimer=window.setTimeout(()=>{this._weatherKey="",this._sync()},6e4)}}_removeWeather(){var e;this._weatherSeq++,this._clearTimer("_weatherTimer"),this._weatherLayer&&(null===(e=this._map)||void 0===e||e.removeLayer(this._weatherLayer)),this._weatherLayer=void 0,this._weatherLegend=null,this._weatherError=!1}async _loadFrames(e){const t=this.module;if(!t||!this._map)return;const r=++this._loadSeq;e&&(this._dropLayers(()=>!0),this._frames=[]),this._frames.length||(this._status="loading");try{const e=await B(t);if(r!==this._loadSeq||!this._map)return;const i=e.host!==this._host||e.provider!==this._provider;this._host=e.host,this._provider=e.provider;const a=e.frames,o=new Set(a.map(e=>e.path));this._dropLayers(e=>i||!o.has(e));const n=this._index>=F(this._frames);this._frames=a,(!this._shownPath||n||this._index>=a.length)&&(this._index=F(a)),this._status="ready",this._showFrame(this._index),this._schedulePlay(),this._scheduleRefresh(5e3+("rainbow"===e.provider?6e5:3e5))}catch(e){if(r!==this._loadSeq)return;this._frames.length||(this._status="error"),this._scheduleRefresh(6e4)}}_scheduleRefresh(e){this._clearTimer("_refreshTimer"),this.isConnected&&this._map&&(this._refreshTimer=window.setTimeout(()=>this._loadFrames(!1),Math.max(0,e)))}_dropLayers(e){var t;for(const[r,i]of this._layers)e(r)&&(null===(t=this._map)||void 0===t||t.removeLayer(i),this._layers.delete(r),r===this._shownPath&&(this._shownPath=""))}_layerFor(e){const t=this._map,r=this.module;if(!t||!r||!this._host)return;let i=this._layers.get(e.path);var a;return i||(i=s.tileLayer(function(e,t,r){return"rainbow"===e.provider?K(e.host,t):"openweather2"===e.provider||"openweather1"===e.provider?C(e.host,t,e.provider):function(e,t,r){return`${e}${t.path.startsWith("/")?t.path:`/${t.path}`}/256/{z}/{x}/{y}/2/${r.smooth?1:0}_${r.snow?1:0}.png`}(e.host,t,r)}({host:this._host,provider:this._provider},e,{smooth:!1!==r.smooth,snow:!1!==r.snow_colors}),{opacity:0,zIndex:10,tileSize:256,maxNativeZoom:L(r),maxZoom:12,attribution:(a=this._provider,"rainbow"===a?'<a href="https://www.rainbow.ai/" target="_blank" rel="noopener">Rainbow.ai</a>':"openweather2"===a||"openweather1"===a?'<a href="https://openweathermap.org/" target="_blank" rel="noopener">OpenWeather</a>':'<a href="https://www.rainviewer.com/" target="_blank" rel="noopener">RainViewer</a>'),className:"uc-rr-layer",referrerPolicy:se,keepBuffer:1}).addTo(t),this._layers.set(e.path,i)),i}_radarOpacity(){var e;return _(null===(e=this.module)||void 0===e?void 0:e.radar_opacity,0,100,75)/100}_applyOpacity(){const e=this._shownPath?this._layers.get(this._shownPath):void 0;null==e||e.setOpacity(this._radarOpacity())}_showFrame(e){var t;const r=this._frames[e];if(!r)return;this._index=e;const i=this._layerFor(r);if(!i)return;this._shownPath&&this._shownPath!==r.path&&(null===(t=this._layers.get(this._shownPath))||void 0===t||t.setOpacity(0)),i.setOpacity(this._radarOpacity()),this._shownPath=r.path;const a=this._frames[(e+1)%this._frames.length];a&&a!==r&&this._layerFor(a)}_schedulePlay(e){if(this._clearTimer("_playTimer"),!this._playing||this._frames.length<2||!this.isConnected)return;const t=this.module,r=_(null==t?void 0:t.frame_delay,150,3e3,500),i=_(null==t?void 0:t.end_pause,0,1e4,1500),a=this._index>=this._frames.length-1,o=null!=e?e:a?r+i:r;this._playTimer=window.setTimeout(()=>this._tick(),o)}_tick(){if(!this._playing||!this._frames.length)return;if("undefined"!=typeof document&&document.hidden)return void this._schedulePlay(1e3);const e=(this._index+1)%this._frames.length,t=this._frames[e],r=t?this._layerFor(t):void 0;if((null==r?void 0:r.isLoading())&&this._waitedMs<3e3)return this._waitedMs+=100,void this._schedulePlay(100);this._waitedMs=0,this._showFrame(e),this._schedulePlay()}_togglePlay(e){e.stopPropagation(),this._playing=!this._playing,this._playing&&this._index>=this._frames.length-1&&this._showFrame(0),this._schedulePlay()}_onScrub(e){e.stopPropagation();const t=Number(e.target.value);Number.isFinite(t)&&(this._playing=!1,this._clearTimer("_playTimer"),this._showFrame(Math.round(t)))}_t(e,t){return(0,o.kg)(`editor.rain_radar.${e}`,this.language,t)}_relativeLabel(e){const t=(r=e.time,i=Date.now(),Math.round((1e3*r-i)/6e4));var r,i;return Math.abs(t)<5&&!e.forecast?this._t("now","Now"):t<0?this._t("minutes_ago","{n} min ago").replace("{n}",String(-t)):this._t("in_minutes","In {n} min").replace("{n}",String(Math.max(0,t)))}_clockLabel(e){try{return new Intl.DateTimeFormat(this.language||void 0,{hour:"numeric",minute:"2-digit"}).format(new Date(1e3*e.time))}catch(t){return new Date(1e3*e.time).toLocaleTimeString()}}render(){const e=this.module,t=_(null==e?void 0:e.height,120,1e3,300),r=!1!==(null==e?void 0:e.show_fullscreen),a=this._fullscreen?this._t("exit_fullscreen","Exit full screen"):this._t("fullscreen","Full screen"),o=!1!==(null==e?void 0:e.show_controls),n=!1!==(null==e?void 0:e.show_timestamp),s=this._frames[this._index],l=((null==e?void 0:e.title)||"").trim(),d=!1!==(null==e?void 0:e.show_title)&&!!l,c=this._frames.length>0,h=o&&c?64:10,p=!1!==(null==e?void 0:e.show_legend)&&c&&!this._provider,u=e?re(e):"none",m=!1!==(null==e?void 0:e.show_legend)&&"none"!==u?this._weatherLegend:null,y={temperature:this._t("weather_layer_temperature","Temperature"),precipitation:this._t("weather_layer_precipitation","Precipitation"),wind:this._t("weather_layer_wind","Wind"),clouds:this._t("weather_layer_clouds","Clouds"),air_quality:this._t("weather_layer_air_quality","Air quality (PM2.5)")},w=d?52:10;return i.qy`
      <div
        class="wrap ${o&&c?"has-controls":""} ${r?"has-fs":""} ${this._fullscreen?"fs":""} ${this._pseudoFs?"pseudo-fs":""}"
        style="height:${this._fullscreen?"100%":`${t}px`}"
      >
        <div class="map"></div>
        ${r?i.qy`<button
                type="button"
                class="fullscreen"
                aria-label=${a}
                title=${a}
                @click=${e=>this._toggleFullscreen(e)}
              >
                <ha-icon
                  icon=${this._fullscreen?"mdi:fullscreen-exit":"mdi:fullscreen"}
                ></ha-icon>
              </button>`:i.s6}
        ${d?i.qy`<div class="chip title">
                <ha-icon icon="mdi:weather-pouring"></ha-icon><span>${l}</span>
              </div>`:i.s6}
        ${n&&s&&!o?i.qy`<div class="chip stamp ${s.forecast?"forecast":""}">
                <ha-icon
                  icon=${s.forecast?"mdi:crystal-ball":"mdi:clock-outline"}
                ></ha-icon>
                <span>${this._clockLabel(s)} · ${this._relativeLabel(s)}</span>
              </div>`:i.s6}
        ${p?i.qy`<div class="chip legend" style="bottom:${h}px" aria-hidden="true">
                <div class="bar"></div>
                <div class="labels">
                  <span>${this._t("legend_light","Light")}</span>
                  <span>${this._t("legend_heavy","Heavy")}</span>
                </div>
              </div>`:i.s6}
        ${m?i.qy`<div
                class="chip legend wx"
                style="bottom:${h+(p?42:0)}px"
                aria-hidden="true"
              >
                <div class="wx-name">
                  ${y[u]||""}${m.unit?i.qy` · ${m.unit}`:i.s6}
                </div>
                <div class="bar" style="background:${m.gradient}"></div>
                <div class="labels"><span>${m.min}</span><span>${m.max}</span></div>
              </div>`:i.s6}
        ${this._weatherError&&"none"!==u?i.qy`<div class="chip wx-error" role="status" style="bottom:${h}px">
                <ha-icon icon="mdi:cloud-alert"></ha-icon
                ><span>${this._t("weather_layer_unavailable","Weather layer unavailable")}</span>
              </div>`:i.s6}
        ${this._moved&&!0===(null==e?void 0:e.interactive)?i.qy`<button
                type="button"
                class="recenter"
                style="top:${w}px"
                aria-label=${this._t("recenter","Back to center")}
                title=${this._t("recenter","Back to center")}
                @click=${e=>{e.stopPropagation(),this._recenter(!0)}}
              >
                <ha-icon icon="mdi:crosshairs-gps"></ha-icon>
              </button>`:i.s6}
        ${"loading"===this._status?i.qy`<div class="chip status" role="status">
                <ha-icon icon="mdi:radar"></ha-icon
                ><span>${this._t("loading","Loading radar…")}</span>
              </div>`:"error"===this._status?i.qy`<div class="chip status" role="status">
                  <ha-icon icon="mdi:cloud-alert"></ha-icon
                  ><span>${this._t("unavailable","Radar unavailable, retrying soon")}</span>
                </div>`:i.s6}
        ${o&&c&&s?this._renderControls(s):i.s6}
      </div>
    `}_renderControls(e){var t;const r=this._frames.length-1,a=this._playing?this._t("pause","Pause"):this._t("play","Play");return i.qy`
      <div class="controls" @click=${e=>e.stopPropagation()}>
        <button
          type="button"
          class="play"
          aria-label=${a}
          title=${a}
          @click=${e=>this._togglePlay(e)}
        >
          <ha-icon icon=${this._playing?"mdi:pause":"mdi:play"}></ha-icon>
        </button>
        <div class="track">
          <div class="ticks">
            ${this._frames.map((e,t)=>i.qy`<span
                  class="tick ${e.forecast?"forecast":""} ${t<=this._index?"done":""}"
                ></span>`)}
          </div>
          <input
            type="range"
            min="0"
            max=${r}
            step="1"
            .value=${String(this._index)}
            aria-label=${this._t("timeline","Radar time")}
            aria-valuetext=${`${this._clockLabel(e)}, ${this._relativeLabel(e)}`}
            @input=${e=>this._onScrub(e)}
          />
        </div>
        ${!1!==(null===(t=this.module)||void 0===t?void 0:t.show_timestamp)?i.qy`<div class="time">
                <span class="clock">${this._clockLabel(e)}</span>
                <span class="rel ${e.forecast?"forecast":""}"
                  >${this._relativeLabel(e)}</span
                >
              </div>`:i.s6}
      </div>
    `}}de.styles=[(0,i.iz)(l),i.AH`
      :host {
        display: block;
        width: 100%;
        /* Map overlays (chips, timeline) sit on the map, not on a pane, so they use the card color. */
        --uc-rr-surface: var(--card-background-color, #fff);
      }
      .wrap {
        position: relative;
        isolation: isolate;
        z-index: 0;
        width: 100%;
        overflow: hidden;
        border-radius: inherit;
        background: var(--secondary-background-color, #e5e5e5);
      }
      .map {
        position: absolute;
        inset: 0;
      }
      .leaflet-container {
        font-family: var(--primary-font-family, inherit);
        background: var(--secondary-background-color, #e5e5e5);
      }
      .uc-rr-layer {
        transition: opacity 0.25s ease;
      }
      .leaflet-control-attribution {
        font-size: 9px;
        line-height: 1.4;
        background: rgba(255, 255, 255, 0.6) !important;
        color: #333;
      }
      .leaflet-control-attribution a {
        color: #333;
      }
      .has-controls .leaflet-bottom {
        bottom: 56px;
      }

      /* Overlays */
      .chip {
        position: absolute;
        z-index: 1100;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        border-radius: 999px;
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
        background: color-mix(in srgb, var(--uc-rr-surface) 82%, transparent);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
        pointer-events: none;
        max-width: calc(100% - 24px);
        box-sizing: border-box;
      }
      .chip ha-icon {
        --mdc-icon-size: 18px;
        color: var(--primary-color);
        flex: none;
      }
      .chip span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .title {
        top: 10px;
        left: 10px;
      }
      .stamp {
        top: 10px;
        right: 10px;
        font-variant-numeric: tabular-nums;
      }
      .stamp.forecast ha-icon {
        color: var(--warning-color, #ff9800);
      }
      .status {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-weight: 500;
      }
      .legend {
        left: 10px;
        flex-direction: column;
        align-items: stretch;
        gap: 3px;
        padding: 6px 10px;
        border-radius: 10px;
        font-size: 10px;
        font-weight: 500;
        min-width: 110px;
      }
      .legend .bar {
        height: 6px;
        border-radius: 3px;
        background: ${(0,i.iz)("linear-gradient(90deg, #9be1ff 0%, #4aa8ff 18%, #1f62e0 36%, #0b2f9f 50%, #ffe500 62%, #ff9a00 74%, #ff3b1f 86%, #d1008f 100%)")};
      }
      .legend.wx {
        min-width: 120px;
      }
      .legend .wx-name {
        color: var(--primary-text-color);
        font-weight: 600;
      }
      .wx-error {
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
      }
      .legend .labels {
        display: flex;
        justify-content: space-between;
        color: var(--secondary-text-color);
      }
      .wrap.fs {
        border-radius: 0;
      }
      .wrap.pseudo-fs {
        position: fixed;
        inset: 0;
        z-index: 9999;
        width: 100vw;
        height: 100vh !important;
        height: 100dvh !important;
      }
      .wrap.has-fs .stamp {
        right: 58px;
      }
      .wrap.has-fs .leaflet-top.leaflet-right {
        top: 50px;
      }
      .fullscreen {
        position: absolute;
        z-index: 1100;
        top: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-text-color);
        background: color-mix(in srgb, var(--uc-rr-surface) 88%, transparent);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
      }
      .recenter {
        position: absolute;
        z-index: 1100;
        left: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-color);
        background: color-mix(in srgb, var(--uc-rr-surface) 88%, transparent);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
      }

      /* Timeline */
      .controls {
        position: absolute;
        z-index: 1100;
        left: 8px;
        right: 8px;
        bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 12px 4px 4px;
        border-radius: 999px;
        color: var(--primary-text-color);
        background: color-mix(in srgb, var(--uc-rr-surface) 85%, transparent);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
      }
      .play {
        flex: none;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .play ha-icon {
        --mdc-icon-size: 24px;
      }
      .play:focus-visible,
      .fullscreen:focus-visible,
      .recenter:focus-visible {
        outline: 2px solid var(--primary-text-color);
        outline-offset: 2px;
      }
      .track {
        position: relative;
        flex: 1;
        min-width: 60px;
        height: 44px;
        display: flex;
        align-items: center;
      }
      .ticks {
        position: absolute;
        left: 8px;
        right: 8px;
        top: 50%;
        height: 6px;
        transform: translateY(-50%);
        display: flex;
        gap: 2px;
        pointer-events: none;
      }
      .tick {
        flex: 1;
        border-radius: 2px;
        background: color-mix(in srgb, var(--primary-text-color) 22%, transparent);
      }
      .tick.done {
        background: var(--primary-color);
      }
      .tick.forecast {
        background: repeating-linear-gradient(
          90deg,
          color-mix(in srgb, var(--warning-color, #ff9800) 55%, transparent) 0 3px,
          transparent 3px 5px
        );
      }
      .tick.forecast.done {
        background: var(--warning-color, #ff9800);
      }
      input[type='range'] {
        position: relative;
        width: 100%;
        height: 44px;
        margin: 0;
        background: transparent;
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
      }
      input[type='range']::-webkit-slider-runnable-track {
        height: 6px;
        background: transparent;
      }
      input[type='range']::-moz-range-track {
        height: 6px;
        background: transparent;
      }
      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        margin-top: -5px;
        border-radius: 50%;
        background: var(--uc-rr-surface);
        border: 3px solid var(--primary-color);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
      input[type='range']::-moz-range-thumb {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--uc-rr-surface);
        border: 3px solid var(--primary-color);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
      input[type='range']:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
        border-radius: 8px;
      }
      .time {
        flex: none;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        line-height: 1.15;
        font-variant-numeric: tabular-nums;
        min-width: 64px;
      }
      .time .clock {
        font-size: 14px;
        font-weight: 600;
      }
      .time .rel {
        font-size: 11px;
        color: var(--secondary-text-color);
      }
      .time .rel.forecast {
        color: var(--warning-color, #ff9800);
      }

      /* Markers (rendered by Leaflet inside this shadow root) */
      .uc-rr-home {
        position: relative;
      }
      .uc-rr-home .dot {
        position: absolute;
        inset: 3px;
        border-radius: 50%;
        background: var(--primary-color);
        border: 2px solid #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
      }
      .uc-rr-home .pulse {
        position: absolute;
        inset: -6px;
        border-radius: 50%;
        background: var(--primary-color);
        opacity: 0.35;
        animation: uc-rr-pulse 2.4s ease-out infinite;
      }
      @keyframes uc-rr-pulse {
        0% {
          transform: scale(0.4);
          opacity: 0.5;
        }
        100% {
          transform: scale(1.4);
          opacity: 0;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .uc-rr-home .pulse {
          animation: none;
        }
        .uc-rr-layer {
          transition: none;
        }
      }
      .uc-rr-marker {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .uc-rr-marker .pin {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        box-sizing: border-box;
      }
      .uc-rr-marker .pin img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .uc-rr-marker .pin ha-icon {
        --mdc-icon-size: 18px;
      }
      .uc-rr-marker .name {
        margin-top: 2px;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
        white-space: nowrap;
        color: var(--primary-text-color);
        background: color-mix(in srgb, var(--uc-rr-surface) 85%, transparent);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
      }
    `],ne([(0,n.MZ)({attribute:!1})],de.prototype,"hass",void 0),ne([(0,n.MZ)({attribute:!1})],de.prototype,"module",void 0),ne([(0,n.MZ)({attribute:!1})],de.prototype,"language",void 0),ne([(0,n.wk)()],de.prototype,"_frames",void 0),ne([(0,n.wk)()],de.prototype,"_index",void 0),ne([(0,n.wk)()],de.prototype,"_playing",void 0),ne([(0,n.wk)()],de.prototype,"_status",void 0),ne([(0,n.wk)()],de.prototype,"_moved",void 0),ne([(0,n.wk)()],de.prototype,"_fullscreen",void 0),ne([(0,n.wk)()],de.prototype,"_pseudoFs",void 0),ne([(0,n.wk)()],de.prototype,"_weatherLegend",void 0),ne([(0,n.wk)()],de.prototype,"_weatherError",void 0),"undefined"==typeof customElements||customElements.get("uc-rain-radar")||customElements.define("uc-rain-radar",de);class ce extends a.m{constructor(){super(...arguments),this.metadata={type:"rain_radar",title:"Weather Radar",description:"Animated rain radar over a map, centered on your home, with a play and scrub timeline and optional weather layers",author:"WJD Designs",version:"1.0.0",icon:"mdi:weather-pouring",category:"data",tags:["rain","radar","weather","precipitation","map","rainviewer","storm","temperature","wind","clouds","air quality","open-meteo"]}}createDefault(e,t){return{id:e||this.generateId("rain_radar"),type:"rain_radar",title:"",show_title:!0,center_mode:"home",center_entity:"",zoom:7,height:300,map_style:"auto",radar_opacity:75,smooth:!0,snow_colors:!0,autoplay:!0,frame_delay:500,end_pause:1500,show_forecast:!0,time_span:120,show_controls:!0,show_timestamp:!0,show_legend:!0,show_home_marker:!0,marker_entities:[],show_marker_names:!0,interactive:!1,show_zoom_controls:!1,source_url:"",radar_source:"rainviewer",openweather_api_key:"",rainbow_api_key:"",show_fullscreen:!0,map_provider:"esri",map_api_key:"",weather_layer:"none",weather_layer_opacity:60,weather_model:"auto",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=[];return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),{valid:0===t.length,errors:t}}getRuntimeEntityIds(e){const t=e,r=[...t.marker_entities||[]];return"entity"===t.center_mode&&t.center_entity&&r.push(t.center_entity),r.includes("zone.home")||r.push("zone.home"),r}renderGeneralTab(e,t,r,a){var n;const s=e,l=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this._renderLocationSection(s,t,a,l)}
        ${this._renderMapSection(s,t,a,l)}
        ${this._renderWeatherSection(s,t,a,l)}
        ${this._renderDisplaySection(s,t,a,l)}
        ${this._renderAnimationSection(s,t,a,l)}
        ${this.renderConditionalFieldsGroup((0,o.kg)("editor.rain_radar.advanced_section",l,"Advanced"),this._renderAdvancedFields(s,t,a,l))}
      </div>
    `}_renderLocationSection(e,t,r,a){var n,s,l,d,c,p;const u=(e,t)=>(0,o.kg)(`editor.rain_radar.${e}`,a,t),m=e.center_mode||"home",_=S(t);return i.qy`
      <div class="settings-section">
        <div class="section-title">${u("location_section","Location")}</div>
        ${this.renderSegmentedField(u("center_mode","Center on"),"home"!==m||_?u("center_mode_desc","Where the radar map is centered."):u("center_home_missing","Home Assistant has no home location set. Pick an entity or enter coordinates instead."),m,[{value:"home",label:u("center_home","Home"),icon:"mdi:home"},{value:"entity",label:u("center_entity","Entity"),icon:"mdi:account"},{value:"manual",label:u("center_manual","Coordinates"),icon:"mdi:crosshairs-gps"}],e=>{r({center_mode:e||"home"}),this.triggerPreviewUpdate()})}
        ${"entity"===m?this.renderFieldSection(u("center_entity_field","Center entity"),u("center_entity_desc","A person, device tracker or zone. The map follows it as it moves."),t,{center_entity:e.center_entity||""},[this.entityField("center_entity",h)],e=>{var t,i;r({center_entity:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.center_entity)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}):i.s6}
        ${"manual"===m?i.qy`
                ${this.renderFieldSection(u("latitude","Latitude"),u("latitude_desc","Decimal degrees, -90 to 90."),t,{latitude:null!==(s=null!==(n=e.latitude)&&void 0!==n?n:null==_?void 0:_.lat)&&void 0!==s?s:""},[this.numberField("latitude",-90,90,1e-4)],e=>{var t;const i=Number(null===(t=e.detail.value)||void 0===t?void 0:t.latitude);r({latitude:Number.isFinite(i)?i:void 0}),this.triggerPreviewUpdate()})}
                ${this.renderFieldSection(u("longitude","Longitude"),u("longitude_desc","Decimal degrees, -180 to 180."),t,{longitude:null!==(d=null!==(l=e.longitude)&&void 0!==l?l:null==_?void 0:_.lng)&&void 0!==d?d:""},[this.numberField("longitude",-180,180,1e-4)],e=>{var t;const i=Number(null===(t=e.detail.value)||void 0===t?void 0:t.longitude);r({longitude:Number.isFinite(i)?i:void 0}),this.triggerPreviewUpdate()})}
              `:i.s6}
        ${this.renderSliderField(u("zoom","Zoom"),u("zoom_desc","Lower shows a wider region. RainViewer radar is sharpest at 7 and below."),null!==(c=e.zoom)&&void 0!==c?c:7,7,3,12,1,e=>{r({zoom:e}),this.triggerPreviewUpdate()},"")}
        ${this.renderSliderField(u("height","Height"),u("height_desc","Height of the map."),null!==(p=e.height)&&void 0!==p?p:300,300,120,800,10,e=>{r({height:e}),this.triggerPreviewUpdate()},"px")}
      </div>
    `}_renderMapSection(e,t,r,a){var n;const s=(e,t)=>(0,o.kg)(`editor.rain_radar.${e}`,a,t),l="openweather"===e.radar_source||"rainbow"===e.radar_source?e.radar_source:"rainviewer",d="openweather"===l,c=!!(e.openweather_api_key||"").trim(),h=!!(e.rainbow_api_key||"").trim();return i.qy`
      <div class="settings-section">
        <div class="section-title">${s("map_section","Map and radar")}</div>
        ${this.renderSegmentedField(s("radar_source","Radar source"),s("radar_source_desc","RainViewer is free and needs no account. OpenWeather and Rainbow.ai use your own API key."),l,[{value:"rainviewer",label:"RainViewer",icon:"mdi:radar"},{value:"openweather",label:"OpenWeather",icon:"mdi:weather-cloudy"},{value:"rainbow",label:"Rainbow.ai",icon:"mdi:weather-rainy"}],e=>{r({radar_source:e||"rainviewer"}),this.triggerPreviewUpdate()})}
        ${d?this.renderFieldSection(s("openweather_api_key","OpenWeather API key"),c?s("openweather_api_key_desc","From your openweathermap.org account. Animated history and forecast need a plan with Weather Maps 2.0; other keys show current rain only. The key is saved in this dashboard, so anyone who can edit it can see the key."):s("openweather_api_key_missing","Enter your key from openweathermap.org. Until then the radar uses RainViewer."),t,{openweather_api_key:e.openweather_api_key||""},[{name:"openweather_api_key",selector:{text:{type:"password"}}}],e=>{var t,i;r({openweather_api_key:(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.openweather_api_key)&&void 0!==i?i:"").trim()}),this.triggerPreviewUpdate()}):i.s6}
        ${"rainbow"===l?this.renderFieldSection(s("rainbow_api_key","Rainbow.ai API key"),h?s("rainbow_api_key_desc","From your Rainbow.ai developer account. Shows current rain and a 2-hour forecast. Rainbow.ai includes 30,000 map tiles a month at no cost and bills your account for more, so a map left on screen all day can cost money. The key is saved in this dashboard, so anyone who can edit it can see the key."):s("rainbow_api_key_missing","Enter your key from developer.rainbow.ai. Until then the radar uses RainViewer."),t,{rainbow_api_key:e.rainbow_api_key||""},[{name:"rainbow_api_key",selector:{text:{type:"password"}}}],e=>{var t,i;r({rainbow_api_key:(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.rainbow_api_key)&&void 0!==i?i:"").trim()}),this.triggerPreviewUpdate()}):i.s6}
        ${this._renderMapProvider(e,t,r,s)}
        ${this.renderSegmentedField(s("map_style","Map style"),s("map_style_desc","Auto switches between light and dark with Home Assistant."),e.map_style||"auto",[{value:"auto",label:s("style_auto","Auto"),icon:"mdi:theme-light-dark"},{value:"light",label:s("style_light","Light"),icon:"mdi:white-balance-sunny"},{value:"dark",label:s("style_dark","Dark"),icon:"mdi:weather-night"},{value:"streets",label:s("style_streets","Streets"),icon:"mdi:road-variant"},{value:"satellite",label:s("style_satellite","Satellite"),icon:"mdi:satellite-variant"}],e=>{r({map_style:e||"auto"}),this.triggerPreviewUpdate()})}
        ${this.renderSliderField(s("radar_opacity","Radar opacity"),s("radar_opacity_desc","Lower lets more of the map show through the rain."),null!==(n=e.radar_opacity)&&void 0!==n?n:75,75,10,100,5,e=>{r({radar_opacity:e}),this.triggerPreviewUpdate()},"%")}
        ${this._toggle(t,r,"show_forecast",!1!==e.show_forecast,s("show_forecast","Include forecast"),s("show_forecast_desc",'Add the next few forecast frames after "now" when the radar source offers them.'))}
        ${"rainviewer"!==l?i.s6:i.qy`${this._toggle(t,r,"snow_colors",!1!==e.snow_colors,s("snow_colors","Snow colors"),s("snow_colors_desc","Show snow in its own colors."))}
              ${this._toggle(t,r,"smooth",!1!==e.smooth,s("smooth","Smooth edges"),s("smooth_desc","Soften the blocky edges of radar cells."))}`}
      </div>
    `}_renderWeatherSection(e,t,r,a){var n,s;const l=(e,t)=>(0,o.kg)(`editor.rain_radar.${e}`,a,t),d=re(e),c=z(e,t),h=c?te(c.lat,c.lng):"",p=null===(n=Y.find(e=>e.value===h))||void 0===n?void 0:n.label,u=[{value:"none",label:l("weather_layer_none","None")},{value:"temperature",label:l("weather_layer_temperature","Temperature")},{value:"precipitation",label:l("weather_layer_precipitation","Precipitation")},{value:"wind",label:l("weather_layer_wind","Wind")},{value:"clouds",label:l("weather_layer_clouds","Clouds")},{value:"air_quality",label:l("weather_layer_air_quality","Air quality (PM2.5)")}];return i.qy`
      <div class="settings-section">
        <div class="section-title">${l("weather_section","Weather layer")}</div>
        ${this.renderFieldSection(l("weather_layer","Weather layer"),l("weather_layer_desc","A weather map for the current hour under the radar, from Open-Meteo. Free, no key. These are model forecasts, not radar."),t,{weather_layer:d},[{name:"weather_layer",selector:{select:{mode:"dropdown",options:u}}}],e=>{var t;r({weather_layer:(null===(t=e.detail.value)||void 0===t?void 0:t.weather_layer)||"none"}),this.triggerPreviewUpdate()})}
        ${"none"===d?i.s6:i.qy`
                ${this.renderSliderField(l("weather_layer_opacity","Weather layer opacity"),l("weather_layer_opacity_desc","Lower lets more of the map show through."),null!==(s=e.weather_layer_opacity)&&void 0!==s?s:60,60,10,100,5,e=>{r({weather_layer_opacity:e}),this.triggerPreviewUpdate()},"%")}
                ${"air_quality"===d?i.s6:this.renderFieldSection(l("weather_model","Weather model"),l("weather_model_desc","Auto picks the most detailed model for the map center."),t,{weather_model:e.weather_model||"auto"},[{name:"weather_model",selector:{select:{mode:"dropdown",options:[{value:"auto",label:p?`${l("weather_model_auto","Auto")} (${p})`:l("weather_model_auto","Auto")},...Y]}}}],e=>{var t;r({weather_model:(null===(t=e.detail.value)||void 0===t?void 0:t.weather_model)||"auto"}),this.triggerPreviewUpdate()})}
              `}
      </div>
    `}_renderMapProvider(e,t,r,a){const o="google"===e.map_provider||"mapbox"===e.map_provider||"maptiler"===e.map_provider?e.map_provider:"esri",n="esri"!==o,s=!!(e.map_api_key||"").trim(),l={google:a("map_api_key_google","A Google Cloud API key with the Map Tiles API turned on. Google bills by map tile beyond its free monthly allowance."),mapbox:a("map_api_key_mapbox","A Mapbox access token (starts with pk.) from account.mapbox.com."),maptiler:a("map_api_key_maptiler","A MapTiler API key from cloud.maptiler.com.")};return i.qy`
      ${this.renderSegmentedField(a("map_provider","Map provider"),a("map_provider_desc","Esri is free and needs no key. Google, Mapbox and MapTiler use your own key."),o,[{value:"esri",label:"Esri",icon:"mdi:map"},{value:"google",label:"Google",icon:"mdi:google-maps"},{value:"mapbox",label:"Mapbox",icon:"mdi:map-outline"},{value:"maptiler",label:"MapTiler",icon:"mdi:map-legend"}],e=>{r({map_provider:e||"esri"}),this.triggerPreviewUpdate()})}
      ${n?this.renderFieldSection(a("map_api_key","Map API key"),s?`${l[o]} ${a("map_api_key_note","The key is saved in this dashboard, so anyone who can edit it can see the key. If the key is refused the map switches back to Esri.")}`:a("map_api_key_missing","Enter your key for this provider. Until then the map uses Esri."),t,{map_api_key:e.map_api_key||""},[{name:"map_api_key",selector:{text:{type:"password"}}}],e=>{var t,i;r({map_api_key:(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.map_api_key)&&void 0!==i?i:"").trim()}),this.triggerPreviewUpdate()}):i.s6}
    `}_toggle(e,t,r,i,a,o){return this.renderFieldSection(a,o,e,{[r]:i},[this.booleanField(r)],e=>{var a,o;t({[r]:null!==(o=null===(a=e.detail.value)||void 0===a?void 0:a[r])&&void 0!==o?o:i}),this.triggerPreviewUpdate()})}_renderDisplaySection(e,t,r,a){const n=(e,t)=>(0,o.kg)(`editor.rain_radar.${e}`,a,t),s=(e,i,a,o)=>({title:i,description:a,hass:t,data:{[e]:o},schema:[this.booleanField(e)],onChange:t=>{var i,a;r({[e]:null!==(a=null===(i=t.detail.value)||void 0===i?void 0:i[e])&&void 0!==a?a:o}),this.triggerPreviewUpdate()}});return i.qy`
      ${this.renderSettingsSection(n("display_section","Display"),"",[{title:n("title","Title"),description:n("title_desc",'Shown on the map, for example "Rain near home". Leave blank for none.'),hass:t,data:{title:e.title||""},schema:[this.textField("title")],onChange:e=>{var t,i;r({title:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.title)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}},s("show_title",n("show_title","Show title"),n("show_title_desc","Show the title on the map."),!1!==e.show_title),s("show_controls",n("show_controls","Timeline"),n("show_controls_desc","Play / pause button and a scrubber for every radar frame."),!1!==e.show_controls),s("show_timestamp",n("show_timestamp","Time of frame"),n("show_timestamp_desc","The time and how long ago the shown frame was captured."),!1!==e.show_timestamp),s("show_legend",n("show_legend","Intensity legend"),n("show_legend_desc","A small light-to-heavy color scale."),!1!==e.show_legend),s("show_fullscreen",n("show_fullscreen","Full screen button"),n("show_fullscreen_desc","A button that opens the map full screen, with pan and zoom."),!1!==e.show_fullscreen),s("show_home_marker",n("show_home_marker","Home marker"),n("show_home_marker_desc","A pulsing dot on your home location."),!1!==e.show_home_marker)])}
      <div class="settings-section">
        ${this.renderChipListField(n("marker_entities","Markers"),n("marker_entities_desc","People, device trackers or zones to show on the map. Tap a marker for details."),t,e.marker_entities||[],e=>{r({marker_entities:e}),this.triggerPreviewUpdate()},{mode:"entity",entityDomains:h,variant:"primary"})}
        ${(e.marker_entities||[]).length?this.renderFieldSection(n("show_marker_names","Marker names"),n("show_marker_names_desc","Show a name label under each marker."),t,{show_marker_names:!1!==e.show_marker_names},[this.booleanField("show_marker_names")],e=>{var t,i;r({show_marker_names:null===(i=null===(t=e.detail.value)||void 0===t?void 0:t.show_marker_names)||void 0===i||i}),this.triggerPreviewUpdate()}):i.s6}
      </div>
    `}_renderAnimationSection(e,t,r,a){var n,s,l;const d=(e,t)=>(0,o.kg)(`editor.rain_radar.${e}`,a,t);return i.qy`
      <div class="settings-section">
        <div class="section-title">${d("animation_section","Animation")}</div>
        ${"rainbow"===e.radar_source?i.s6:this.renderSegmentedField(d("time_span","Time span"),d("time_span_desc","How far back the loop goes. RainViewer keeps about two hours."),String(null!==(n=e.time_span)&&void 0!==n?n:120),c.map(e=>({value:String(e),label:e<60?d("span_minutes","{n} min").replace("{n}",String(e)):d("span_hours","{n} h").replace("{n}",(e/60).toLocaleString(a))})),e=>{const t=Number(e);r({time_span:Number.isFinite(t)&&t>0?t:120}),this.triggerPreviewUpdate()},4)}
        ${this.renderFieldSection(d("autoplay","Play automatically"),d("autoplay_desc","Loop through the radar frames when the dashboard opens."),t,{autoplay:!1!==e.autoplay},[this.booleanField("autoplay")],e=>{var t,i;r({autoplay:null===(i=null===(t=e.detail.value)||void 0===t?void 0:t.autoplay)||void 0===i||i}),this.triggerPreviewUpdate()})}
        ${this.renderSliderField(d("frame_delay","Frame speed"),d("frame_delay_desc","How long each frame is shown. Lower is faster."),null!==(s=e.frame_delay)&&void 0!==s?s:500,500,150,2e3,50,e=>{r({frame_delay:e}),this.triggerPreviewUpdate()}," ms")}
        ${this.renderSliderField(d("end_pause","Pause on last frame"),d("end_pause_desc","Extra time to hold the newest frame before the loop starts again."),null!==(l=e.end_pause)&&void 0!==l?l:1500,1500,0,6e3,250,e=>{r({end_pause:e}),this.triggerPreviewUpdate()}," ms")}
      </div>
    `}_renderAdvancedFields(e,t,r,a){const n=(e,t)=>(0,o.kg)(`editor.rain_radar.${e}`,a,t);return i.qy`
      ${this.renderFieldSection(n("interactive","Pan and zoom"),n("interactive_desc","Let people drag and pinch the map. Off keeps it fixed so swiping scrolls the dashboard."),t,{interactive:!0===e.interactive},[this.booleanField("interactive")],e=>{var t,i;r({interactive:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.interactive)&&void 0!==i&&i}),this.triggerPreviewUpdate()})}
      ${this.renderFieldSection(n("show_zoom_controls","Zoom buttons"),n("show_zoom_controls_desc","Show + and − buttons on the map."),t,{show_zoom_controls:!0===e.show_zoom_controls},[this.booleanField("show_zoom_controls")],e=>{var t,i;r({show_zoom_controls:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.show_zoom_controls)&&void 0!==i&&i}),this.triggerPreviewUpdate()})}
      ${"openweather"===e.radar_source||"rainbow"===e.radar_source?i.s6:this.renderFieldSection(n("source_url","Radar source URL"),n("source_url_desc","Leave blank to use RainViewer (free, no key). Or a RainViewer-compatible weather-maps.json URL, such as a self-hosted mirror."),t,{source_url:e.source_url||""},[this.textField("source_url")],e=>{var t,i;r({source_url:(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.source_url)&&void 0!==i?i:"").trim()}),this.triggerPreviewUpdate()})}
    `}renderPreview(e,t,r,a){var n;const s=e,l=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";if(!z(s,t)){const e=s.center_mode||"home";return this.renderGradientErrorState((0,o.kg)("editor.rain_radar.empty_title",l,"Choose where to show the radar"),"entity"===e&&s.center_entity?(0,o.kg)("editor.rain_radar.empty_entity_desc",l,"This entity has no location yet. Pick another one or enter coordinates in the General tab."):(0,o.kg)("editor.rain_radar.empty_desc",l,"Set a home location in Home Assistant, or pick an entity or coordinates in the General tab."),"mdi:weather-pouring")}const d=this.buildStyleString(this.buildDesignStyles(e,t)),c=this.getHoverEffectClass(e);return i.qy`
      <div class="uc-rain-radar ${c}" data-uc-role="pane" style="${d}">
        ${this.wrapWithAnimation(i.qy`<uc-rain-radar .hass=${t} .module=${s} .language=${l}></uc-rain-radar>`,e,t)}
      </div>
    `}getStyles(){return`\n      .uc-rain-radar {\n        box-sizing: border-box;\n        width: 100%;\n        overflow: hidden;\n        border-radius: var(--uc-r-12, 12px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n      }\n      ${a.m.getSliderStyles()}\n    `}}}};