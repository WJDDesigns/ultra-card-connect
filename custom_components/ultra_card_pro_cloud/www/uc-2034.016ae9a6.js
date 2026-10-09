/*! For license information please see uc-2034.016ae9a6.js.LICENSE.txt */
export const __webpack_esm_ids__=[2034,9286];export const __webpack_esm_modules__={9653(e,t,a){a.r(t),a.d(t,{HubThemesTab:()=>Ra});var r=a(2618),i=a(4791),o=a(9978),n=a(6478);const s={white:"#ffffff",black:"#000000",transparent:"rgba(0,0,0,0)"};function l(e){if(!e)return null;let t=e.trim().toLowerCase();s[t]&&(t=s[t]);const a=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(t);if(a){let e=a[1];e.length<=4&&(e=e.split("").map(e=>e+e).join(""));const t=parseInt(e.slice(0,6),16);return{r:t>>16&255,g:t>>8&255,b:255&t,a:8===e.length?parseInt(e.slice(6,8),16)/255:1}}const r=/^rgba?\(\s*([^)]+)\)$/.exec(t);if(r){const e=r[1].split(/[\s,/]+/).filter(Boolean);if(e.length<3||e.length>4)return null;const t=e=>{if(e.endsWith("%"))return Math.round(parseFloat(e)/100*255);const t=parseFloat(e);return Number.isFinite(t)?Math.round(t):NaN},a=t(e[0]),i=t(e[1]),o=t(e[2]);let n=1;return void 0!==e[3]&&(n=e[3].endsWith("%")?parseFloat(e[3])/100:parseFloat(e[3])),[a,i,o,n].some(e=>!Number.isFinite(e))?null:{r:d(a),g:d(i),b:d(o),a:Math.min(1,Math.max(0,n))}}return null}function d(e){return Math.min(255,Math.max(0,e))}function c(e){return e.a>=1?`#${[e.r,e.g,e.b].map(e=>e.toString(16).padStart(2,"0")).join("")}`:`rgba(${e.r}, ${e.g}, ${e.b}, ${function(e){return Math.round(1e3*e)/1e3}(e.a)})`}function p(e,t){return Object.assign(Object.assign({},e),{a:Math.min(1,Math.max(0,t))})}function h(e){const t=e=>{const t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4};return.2126*t(e.r)+.7152*t(e.g)+.0722*t(e.b)}function u(e){return h(e)>.35}function m(e,t){const a=h(e),r=h(t),[i,o]=a>r?[a,r]:[r,a];return(i+.05)/(o+.05)}const g={r:255,g:255,b:255,a:1},b={r:0,g:0,b:0,a:1};function _(e,t){return function(e,t,a){const r=Math.min(1,Math.max(0,a));return{r:Math.round(e.r+(t.r-e.r)*r),g:Math.round(e.g+(t.g-e.g)*r),b:Math.round(e.b+(t.b-e.b)*r),a:e.a}}(e,u(e)?b:g,t)}function f(e,t=g,a={r:33,g:33,b:33,a:1}){return m(e,t)>=m(e,a)?t:a}const v=["card_transparent","card_background","card_border_radius","card_border_color","card_border_width","card_padding","card_shadow_enabled","card_shadow_color","card_shadow_horizontal","card_shadow_vertical","card_shadow_blur","card_shadow_spread"],y={button:["style"],bar:["bar_style","glass_blur_amount"],slider_control:["slider_style","glass_blur_amount"],spinbox:["button_style","button_shape"],popup:["trigger_button_style"],grid:["grid_style"],navigation:["nav_style"],area_summary:["style_preset","accent_color","tile_border_radius"],auto_entity_list:["row_style"],unifi:["rack_style"],bambu:["style"],printer_3d:["style"],tabs:["style"],activity_feed:["feed_card_style"],button_input:["button_style"],light:["button_style"]},x="ha_native";function w(e){return`url("${$(e)}")`}function k(e,t){return`url("${$(e)}#${t}")`}function $(e){return`data:image/svg+xml,${e.replace(/\s+/g," ").replace(/>\s+</g,"><").trim().replace(/[%<>#"'(){}\[\]\\]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase().padStart(2,"0")}`)}`}const L="var(--ha-card-background, var(--card-background-color, white))",S={id:x,name:"HA Native",version:1,author:"Ultra Card",description:"Follows your Home Assistant theme exactly. Modules use their own defaults.",icon:"mdi:home-assistant",source:"builtin",tokens:{surface:"flat",radius:12,border_width:1,border_color:"var(--divider-color)"}},M={id:"bold",name:"Bold",version:1,author:"Ultra Card",description:"Large radius, deep shadow and your theme accent on every control.",icon:"mdi:palette",source:"builtin",tokens:{surface:"glossy",radius:24,radius_sm:14,border_width:0,shadow:"0 10px 30px rgba(0, 0, 0, 0.16)",accent:"var(--primary-color)",density:"comfortable"},card:{card_background:L,card_border_radius:24,card_border_width:0,card_padding:20,card_shadow_enabled:!0,card_shadow_color:"rgba(0, 0, 0, 0.16)",card_shadow_horizontal:0,card_shadow_vertical:10,card_shadow_blur:30,card_shadow_spread:0},modules:{button:{style:"glossy"},bar:{bar_style:"gradient-overlay"},slider_control:{slider_style:"glossy"},spinbox:{button_style:"glossy"},popup:{trigger_button_style:"glossy"},grid:{grid_style:"style_17"},navigation:{nav_style:"uc_gradient"},area_summary:{style_preset:"graph_glow",accent_color:"var(--primary-color)"},auto_entity_list:{row_style:"card"},unifi:{rack_style:"dark"},activity_feed:{feed_card_style:"elevated"}}},C={id:"monochrome",name:"Monochrome",version:1,author:"Ultra Card",description:"Black, white and grey only. Every module is desaturated, including ones with their own colours. Thin outlines, no shadows, text does the talking.",icon:"mdi:contrast-box",source:"builtin",tokens:{surface:"outline",radius:6,radius_sm:4,border_width:1,border_color:"rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.35)",shadow:"none",accent:"var(--primary-text-color)",density:"compact",grayscale:1,palette:{primary:"var(--primary-text-color)",accent:"var(--primary-text-color)",on_primary:"var(--ha-card-background, var(--card-background-color, white))",divider:"rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.35)"}},card:{card_background:L,card_border_radius:6,card_border_color:"rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.35)",card_border_width:1,card_padding:14,card_shadow_enabled:!1},modules:{button:{style:"outline"},bar:{bar_style:"outline"},slider_control:{slider_style:"outline"},spinbox:{button_style:"outline",button_shape:"square"},popup:{trigger_button_style:"outline"},grid:{grid_style:"style_8"},navigation:{nav_style:"uc_minimal"},area_summary:{style_preset:"compact_controls",accent_color:"var(--primary-text-color)"},auto_entity_list:{row_style:"slim"},unifi:{rack_style:"blueprint"},activity_feed:{feed_card_style:"outlined"},tabs:{style:"simple"}}},T="0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)",O="#6750a4",j="#ffd8e4",z="#f7f2fa",q="#ece6f0",A={id:"material",name:"Material",version:2,author:"Ultra Card",description:"Material Design 3 baseline: lavender-white tonal surfaces, the M3 purple, elevated 12dp cards, pill controls, Google Sans, and expressive shapes on the page.",icon:"mdi:material-design",source:"builtin",tokens:{surface:"flat",radius:12,radius_sm:20,border_width:0,border_color:"transparent",shadow:T,page_background:`${w(`\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">\n  <circle cx="840" cy="130" r="250" fill="#eaddff"/>\n  <rect x="-80" y="720" width="540" height="210" rx="105" fill="${j}" transform="rotate(-18 190 825)"/>\n  <g fill="#e8def8" transform="translate(170 400)">\n    <circle cx="-58" cy="-58" r="88"/><circle cx="58" cy="-58" r="88"/><circle cx="-58" cy="58" r="88"/><circle cx="58" cy="58" r="88"/>\n  </g>\n  <path d="M 108.5 0.0 L 107.7 6.0 L 105.3 11.9 L 101.8 17.3 L 97.5 22.3 L 93.0 26.8 L 88.7 31.0 L 85.1 35.3 L 82.4 39.7 L 80.6 44.6 L 79.6 50.0 L 78.9 56.0 L 78.2 62.3 L 77.0 68.8 L 75.0 75.0 L 71.9 80.4 L 67.6 84.8 L 62.4 88.0 L 56.4 89.8 L 49.9 90.4 L 43.4 90.1 L 37.0 89.4 L 31.0 88.7 L 25.5 88.5 L 20.4 89.2 L 15.4 90.8 L 10.5 93.4 L 5.4 96.6 L 0.0 100.0 L -5.8 103.1 L -11.9 105.3 L -18.1 106.3 L -24.1 105.8 L -29.9 103.6 L -35.0 100.1 L -39.5 95.4 L -43.4 90.1 L -46.8 84.7 L -50.0 79.6 L -53.3 75.2 L -57.0 71.5 L -61.4 68.7 L -66.5 66.5 L -72.1 64.5 L -78.2 62.3 L -84.2 59.7 L -89.8 56.4 L -94.4 52.2 L -97.8 47.1 L -99.6 41.3 L -100.1 35.0 L -99.2 28.6 L -97.5 22.3 L -95.4 16.2 L -93.4 10.5 L -92.0 5.2 L -91.5 0.0 L -92.0 -5.2 L -93.4 -10.5 L -95.4 -16.2 L -97.5 -22.3 L -99.2 -28.6 L -100.1 -35.0 L -99.6 -41.3 L -97.8 -47.1 L -94.4 -52.2 L -89.8 -56.4 L -84.2 -59.7 L -78.2 -62.3 L -72.1 -64.5 L -66.5 -66.5 L -61.4 -68.7 L -57.0 -71.5 L -53.3 -75.2 L -50.0 -79.6 L -46.8 -84.7 L -43.4 -90.1 L -39.5 -95.4 L -35.0 -100.1 L -29.9 -103.6 L -24.1 -105.8 L -18.1 -106.3 L -11.9 -105.3 L -5.8 -103.1 L -0.0 -100.0 L 5.4 -96.6 L 10.5 -93.4 L 15.4 -90.8 L 20.4 -89.2 L 25.5 -88.5 L 31.0 -88.7 L 37.0 -89.4 L 43.4 -90.1 L 49.9 -90.4 L 56.4 -89.8 L 62.4 -88.0 L 67.6 -84.8 L 71.9 -80.4 L 75.0 -75.0 L 77.0 -68.8 L 78.2 -62.3 L 78.9 -56.0 L 79.6 -50.0 L 80.6 -44.6 L 82.4 -39.7 L 85.1 -35.3 L 88.7 -31.0 L 93.0 -26.8 L 97.5 -22.3 L 101.8 -17.3 L 105.3 -11.9 L 107.7 -6.0 Z" fill="${O}" transform="translate(760 790) scale(1.15)"/>\n  <circle cx="560" cy="560" r="60" fill="${j}"/>\n</svg>`)} center / cover no-repeat fixed, #fef7ff`,pane_background:q,pane_border:"none",pane_shadow:"none",density:"regular",font_family:'"Google Sans Text", "Google Sans", Roboto, "Roboto Flex", system-ui, sans-serif',palette:{primary:O,on_primary:"#ffffff",accent:O,card_bg:z,text:"#1d1b20",text_secondary:"#49454f",divider:"#cac4d0"}},card:{card_background:z,card_border_radius:12,card_border_color:"transparent",card_border_width:0,card_padding:16,card_shadow_enabled:!0,card_shadow_color:"rgba(0, 0, 0, 0.3)",card_shadow_horizontal:0,card_shadow_vertical:1,card_shadow_blur:2,card_shadow_spread:0},modules:{button:{style:"flat"},bar:{bar_style:"flat"},slider_control:{slider_style:"flat"},spinbox:{button_style:"flat",button_shape:"circle"},popup:{trigger_button_style:"flat"},grid:{grid_style:"style_14"},navigation:{nav_style:"uc_material"},area_summary:{style_preset:"iconic_soft",tile_border_radius:12},auto_entity_list:{row_style:"detailed"},unifi:{rack_style:"light"},activity_feed:{feed_card_style:"elevated"},tabs:{style:"simple"}},css:`\n.card-container {\n  --secondary-background-color: ${q};\n  --primary-background-color: #f3edf7;\n  --input-fill-color: ${q};\n  --mdc-select-fill-color: ${q};\n  --mdc-text-field-fill-color: ${q};\n  --mdc-theme-surface: ${z};\n  background-color: ${z} !important;\n  background-image: none !important;\n  border: none !important;\n  box-shadow: ${T} !important;\n  /* MD3 body-medium tracking. */\n  letter-spacing: 0.25px;\n}\n/* Nested surfaces read as surface-container-high. */\n[style*="--uc-design-surface"] {\n  background-color: ${q};\n  background-image: none;\n  border: none;\n  box-shadow: none;\n}\n`.trim()},P="#33ff66",N="rgba(51, 255, 102, 0.35)",F={id:"green_terminal",name:"Green Terminal",version:1,author:"Ultra Card",description:"Green phosphor on black. Monospace type, square corners, hairline borders and a glow. Everything on the card is tinted green.",icon:"mdi:console",source:"builtin",tokens:{surface:"outline",radius:0,radius_sm:0,border_width:1,border_color:N,shadow:"0 0 14px rgba(51, 255, 102, 0.18)",page_background:"#020503",accent:P,density:"compact",font_family:"'JetBrains Mono', 'Fira Code', 'SF Mono', Menlo, Consolas, 'Courier New', monospace",palette:{primary:P,accent:P,card_bg:"#050a06",text:P,text_secondary:"rgba(51, 255, 102, 0.6)",divider:N},color_filter:"grayscale(1) sepia(1) hue-rotate(80deg) saturate(2.5) brightness(1.05)"},card:{card_background:"#050a06",card_border_radius:0,card_border_color:N,card_border_width:1,card_padding:14,card_shadow_enabled:!0,card_shadow_color:"rgba(51, 255, 102, 0.18)",card_shadow_horizontal:0,card_shadow_vertical:0,card_shadow_blur:14,card_shadow_spread:0},modules:{button:{style:"outline"},bar:{bar_style:"outline"},slider_control:{slider_style:"outline"},spinbox:{button_style:"outline",button_shape:"square"},popup:{trigger_button_style:"outline"},grid:{grid_style:"style_8"},navigation:{nav_style:"uc_minimal"},area_summary:{style_preset:"compact_controls",accent_color:P,tile_border_radius:0},auto_entity_list:{row_style:"slim"},unifi:{rack_style:"blueprint"},activity_feed:{feed_card_style:"outlined"},tabs:{style:"simple"}},css:"\n.card-container {\n  text-shadow: 0 0 6px rgba(51, 255, 102, 0.45);\n  letter-spacing: 0.02em;\n}\n".trim()},E="#10224d",I="rgba(255, 255, 255, 0.62)",D="#3d8bff",R="30, 60, 140",B=[`${w('\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">\n  <defs>\n    <linearGradient id="fa" x1="0" y1="0" x2="0" y2="1">\n      <stop offset="0" stop-color="#fff" stop-opacity="0.3"/>\n      <stop offset="0.45" stop-color="#fff" stop-opacity="0.08"/>\n      <stop offset="1" stop-color="#fff" stop-opacity="0.2"/>\n    </linearGradient>\n    <linearGradient id="fb" x1="0" y1="0" x2="0" y2="1">\n      <stop offset="0" stop-color="#fff" stop-opacity="0.38"/>\n      <stop offset="1" stop-color="#fff" stop-opacity="0.08"/>\n    </linearGradient>\n    <linearGradient id="rim" x1="0" y1="0" x2="0" y2="1">\n      <stop offset="0" stop-color="#fff" stop-opacity="0.95"/>\n      <stop offset="0.6" stop-color="#fff" stop-opacity="0.5"/>\n      <stop offset="1" stop-color="#fff" stop-opacity="0.85"/>\n    </linearGradient>\n    <filter id="s" x="-20%" y="-300%" width="140%" height="700%"><feGaussianBlur stdDeviation="6"/></filter>\n    <filter id="r" x="-10%" y="-100%" width="120%" height="300%"><feGaussianBlur stdDeviation="5"/></filter>\n    <clipPath id="ca"><rect x="20" y="380" width="960" height="580" rx="330"/></clipPath>\n    <clipPath id="cb"><ellipse cx="500" cy="420" rx="520" ry="110"/></clipPath>\n    <clipPath id="cc"><circle cx="500" cy="-300" r="730"/></clipPath>\n  </defs>\n  <circle cx="500" cy="-300" r="730" fill="#fff" fill-opacity="0.12" stroke="#fff" stroke-opacity="0.65" stroke-width="2.5" vector-effect="non-scaling-stroke"/>\n  <path d="M 40 300 Q 500 480 960 300" fill="none" stroke="#3f6fe0" stroke-opacity="0.3" stroke-width="9" filter="url(#r)" clip-path="url(#cc)"/>\n  <rect x="20" y="380" width="960" height="580" rx="330" fill="url(#fa)" stroke="url(#rim)" stroke-width="2.5" vector-effect="non-scaling-stroke"/>\n  <path d="M 60 930 Q 500 1000 940 930" fill="none" stroke="#3f6fe0" stroke-opacity="0.35" stroke-width="10" filter="url(#r)" clip-path="url(#ca)"/>\n  <path d="M 250 386 Q 500 374 750 386" fill="none" stroke="#fff" stroke-opacity="0.95" stroke-width="5" filter="url(#s)" clip-path="url(#ca)"/>\n  <ellipse cx="500" cy="420" rx="520" ry="110" fill="url(#fb)" stroke="url(#rim)" stroke-width="2.5" vector-effect="non-scaling-stroke"/>\n  <path d="M 20 440 Q 500 560 980 440" fill="none" stroke="#3f6fe0" stroke-opacity="0.4" stroke-width="9" filter="url(#r)" clip-path="url(#cb)"/>\n  <path d="M 120 340 Q 500 296 880 340" fill="none" stroke="#fff" stroke-opacity="0.95" stroke-width="5" filter="url(#s)" clip-path="url(#cb)"/>\n</svg>')} center / 100% 100% no-repeat fixed`,"radial-gradient(60% 28% at 50% 100%, rgba(150, 225, 245, 0.55) 0%, rgba(150, 225, 245, 0) 70%) fixed","radial-gradient(70% 32% at 50% 80%, rgba(242, 200, 230, 0.8) 0%, rgba(242, 200, 230, 0) 70%) fixed","linear-gradient(180deg, #5e9bf3 0%, #86b5ff 28%, #b3c6fb 52%, #d6c8f2 74%, #e8cfe9 100%) fixed"].join(", "),U="linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",G=`0 14px 36px rgba(${R}, 0.22), 0 2px 6px rgba(${R}, 0.12)`,H="inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 rgba(255, 255, 255, 0.14), inset 0 0 18px rgba(255, 255, 255, 0.05)",V=`inset 0 1px 0 rgba(255, 255, 255, 0.5), inset 1px 0 0 rgba(255, 255, 255, 0.18), inset 0 -1px 0 rgba(255, 255, 255, 0.1), 0 4px 12px rgba(${R}, 0.12)`;function W(e,t,a,r){const i=Math.max(2,Math.round(.45*t)),o="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 1";return`\n<filter id="${e}" x="0" y="0" width="1" height="1" color-interpolation-filters="sRGB">\n  <feFlood flood-color="#808080" result="mid"/>\n  <feFlood flood-color="#ffffff" result="box"/>\n  <feFlood flood-color="#ff8080" result="cl"/>\n  <feFlood flood-color="#008080" result="cr"/>\n  <feFlood flood-color="#80ff80" result="ct"/>\n  <feFlood flood-color="#800080" result="cb"/>\n  <feOffset in="box" dx="${t}" dy="0" result="bxp"/>\n  <feOffset in="box" dx="-${t}" dy="0" result="bxm"/>\n  <feOffset in="box" dx="0" dy="${t}" result="byp"/>\n  <feOffset in="box" dx="0" dy="-${t}" result="bym"/>\n  <feComposite in="cl" in2="bxp" operator="out" result="l"/>\n  <feComposite in="cr" in2="bxm" operator="out" result="r"/>\n  <feComposite in="ct" in2="byp" operator="out" result="t"/>\n  <feComposite in="cb" in2="bym" operator="out" result="b"/>\n  <feMerge result="mx"><feMergeNode in="mid"/><feMergeNode in="l"/><feMergeNode in="r"/></feMerge>\n  <feGaussianBlur in="mx" stdDeviation="${i}" result="mxs"/>\n  <feColorMatrix in="mxs" type="matrix" values="${o}" result="mxo"/>\n  <feMerge result="my"><feMergeNode in="mid"/><feMergeNode in="t"/><feMergeNode in="b"/></feMerge>\n  <feGaussianBlur in="my" stdDeviation="${i}" result="mys"/>\n  <feColorMatrix in="mys" type="matrix" values="${o}" result="myo"/>\n  <feComposite in="mxo" in2="myo" operator="arithmetic" k1="0" k2="1" k3="1" k4="-0.5" result="map"/>\n  <feComposite in="bxp" in2="bxm" operator="in" result="ix"/>\n  <feComposite in="byp" in2="bym" operator="in" result="iy"/>\n  <feComposite in="ix" in2="iy" operator="in" result="inset"/>\n  <feGaussianBlur in="inset" stdDeviation="${i}" result="interior"/>\n  <feGaussianBlur in="SourceGraphic" stdDeviation="${a}" result="frost"/>\n  <feComposite in="frost" in2="interior" operator="in" result="frostIn"/>\n  <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="clear"/>\n  <feMerge result="glass"><feMergeNode in="clear"/><feMergeNode in="frostIn"/></feMerge>\n  <feDisplacementMap in="glass" in2="map" scale="${r}" xChannelSelector="R" yChannelSelector="G"/>\n</filter>`}const Z=`<svg xmlns="http://www.w3.org/2000/svg">${W("card",26,5,40)}${W("pane",12,3,20)}</svg>`,J=k(Z,"card"),Y=k(Z,"pane"),Q={id:"liquid_glass",name:"Liquid Glass",version:5,author:"Ultra Card",description:"Apple Liquid Glass: clear glass over a pale blue-to-pink wallpaper that bends what is behind it at the edge. Blur, refraction, rim light, capsule controls.",icon:"mdi:water-opacity",source:"builtin",tokens:{surface:"glass",radius:32,radius_sm:22,blur:10,border_width:0,border_color:"transparent",shadow:`${H}, ${G}`,page_background:B,pane_background:"rgba(255, 255, 255, 0.1)",pane_border:"none",pane_shadow:V,density:"comfortable",accent:D,font_family:"-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Inter, system-ui, sans-serif",palette:{primary:"#1b5fd6",on_primary:"#ffffff",accent:D,card_bg:"rgba(232, 236, 248, 0.92)",text:E,text_secondary:"rgba(16, 34, 77, 0.7)",divider:"rgba(16, 34, 77, 0.12)"}},card:{card_background:I,card_border_radius:32,card_border_color:"transparent",card_border_width:0,card_padding:18},modules:{button:{style:"glass"},bar:{bar_style:"glass",glass_blur_amount:16},slider_control:{slider_style:"glass",glass_blur_amount:16},spinbox:{button_style:"glass",button_shape:"circle"},popup:{trigger_button_style:"glass"},grid:{grid_style:"style_16"},navigation:{nav_style:"uc_ios_glass"},area_summary:{style_preset:"graph_glow",accent_color:D,tile_border_radius:22},auto_entity_list:{row_style:"card"},unifi:{rack_style:"glass"},activity_feed:{feed_card_style:"flat"},tabs:{style:"switch_2"}},css:`\n.card-container {\n  position: relative;\n  isolation: isolate;\n  --secondary-background-color: rgba(255, 255, 255, 0.1);\n  --primary-background-color: rgba(255, 255, 255, 0.06);\n  --input-fill-color: rgba(255, 255, 255, 0.1);\n  --mdc-select-fill-color: rgba(255, 255, 255, 0.1);\n  --mdc-text-field-fill-color: rgba(255, 255, 255, 0.1);\n  --rgb-card-background-color: 255, 255, 255;\n  --rgb-primary-text-color: 16, 34, 77;\n  color: ${E};\n  background-color: ${I} !important;\n  /* Soft sky wash keeps dark ink readable when the page wallpaper is owned by\n     another card (theme galleries). Specular highlights sit on top. */\n  background-image:\n    radial-gradient(120% 70% at 8% 0%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 48%),\n    radial-gradient(80% 50% at 96% 100%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 55%),\n    linear-gradient(165deg, #d4e6fa 0%, #e8ddf5 48%, #f3d5e8 100%) !important;\n  /* See-through: a moderate blur keeps the wallpaper's shapes legible through the pane. */\n  backdrop-filter: blur(var(--uc-blur, 10px)) saturate(150%);\n  -webkit-backdrop-filter: blur(var(--uc-blur, 10px)) saturate(150%);\n  border: none !important;\n  box-shadow: ${H}, ${G} !important;\n}\n/* Chromium accepts an SVG filter as backdrop-filter: blur, then bend the\n   backdrop at the bezel. Other engines keep the blur above. */\n@supports (-webkit-app-region: no-drag) {\n  .card-container {\n    backdrop-filter: saturate(150%) ${J};\n    -webkit-backdrop-filter: saturate(150%) ${J};\n  }\n  [style*="--uc-design-surface"] {\n    backdrop-filter: saturate(130%) ${Y};\n    -webkit-backdrop-filter: saturate(130%) ${Y};\n  }\n}\n/* The refraction rim: a 1.5px ring painted with the lensing gradient,\n   masked to the border zone so it is an edge, not a fill. */\n.card-container::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  border-radius: inherit;\n  padding: 1.5px;\n  pointer-events: none;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.35) 18%, rgba(255, 255, 255, 0.08) 42%, rgba(255, 255, 255, 0.06) 58%, rgba(255, 255, 255, 0.4) 84%, rgba(255, 255, 255, 0.85) 100%);\n  -webkit-mask: ${U};\n  -webkit-mask-composite: xor;\n  mask: ${U};\n  mask-composite: exclude;\n}\n/* Nested surfaces are smaller lenses of the same glass. */\n[style*="--uc-design-surface"] {\n  background-color: rgba(255, 255, 255, 0.1);\n  background-image: radial-gradient(120% 80% at 10% 0%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 50%);\n  border: none;\n  box-shadow: ${V};\n  backdrop-filter: blur(6px) saturate(130%);\n  -webkit-backdrop-filter: blur(6px) saturate(130%);\n}\n/* Hairlines are ink at low opacity, never solid. */\n.card-container hr,\n.card-container [class*="divider"],\n.card-container [class*="separator"] {\n  border-color: rgba(16, 34, 77, 0.12);\n  background-color: rgba(16, 34, 77, 0.12);\n}\n`.trim()},X="#1f3b2e",K="#d4af6c",ee="#eae2d6",te="rgba(139, 115, 85, 0.35)",ae="rgba(30, 47, 75, 0.14)",re=[[60,34,9,0],[44,40,9,0],[76,40,9,1],[30,52,9,1],[58,50,10,0],[88,54,9,1],[40,64,10,1],[70,64,10,0],[26,74,8,2],[52,76,9,1],[82,76,9,2],[38,86,8,2],[64,88,9,2],[92,66,7,2],[48,28,6,0],[74,28,6,0],[20,62,6,2]];function ie(e){const t=[e.light,e.mid,e.deep];return w(`\n<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>\n  <g fill='#8a9a7b'>\n    <path d='M14 98 C30 70 62 78 78 100 C56 116 28 116 14 98Z'/>\n    <path d='M70 104 C80 84 106 84 114 100 C102 112 82 114 70 104Z' fill='#7c8d6e'/>\n  </g>\n  <g stroke='#6c7c5f' stroke-width='1' fill='none' stroke-linecap='round'>\n    <path d='M18 99 C40 92 58 92 76 100 M74 104 C86 96 100 96 112 100'/>\n  </g>\n  ${re.map(([a,r,i,o])=>{const n=.62*i;return`<g transform='translate(${a} ${r})' fill='${t[o]}' fill-opacity='.92'><circle cx='${-n}' cy='0' r='${n}'/><circle cx='${n}' cy='0' r='${n}'/><circle cx='0' cy='${-n}' r='${n}'/><circle cx='0' cy='${n}' r='${n}'/><circle r='${(.4*n).toFixed(1)}' fill='${e.eye}'/></g>`}).join("")}\n</svg>`)}const oe={id:"hillary",name:"Hillary",version:2,author:"Ultra Card",description:"Linen, pine ink and taupe with gold accents, a hydrangea tucked into the odd corner. A Nancy Meyers palette in Ralph Lauren tailoring: warm, elevated, unhurried.",icon:"mdi:flower-tulip-outline",source:"builtin",tokens:{surface:"flat",radius:14,radius_sm:10,border_width:1,border_color:te,shadow:`0 8px 24px ${ae}, 0 1px 2px rgba(30, 47, 75, 0.06)`,page_background:"#f5f0e8",pane_background:"#e1d8c9",pane_border:`1px solid ${te}`,pane_shadow:"inset 0 1px 0 rgba(255, 255, 255, 0.5)",density:"comfortable",accent:K,font_family:"'Playfair Display', 'Didot', 'Bodoni 72', 'Cormorant Garamond', 'Libre Baskerville', Georgia, 'Times New Roman', serif",palette:{primary:X,accent:K,card_bg:ee,text:X,text_secondary:"#6f5a40",divider:te}},card:{card_background:ee,card_border_radius:14,card_border_color:te,card_border_width:1,card_padding:20,card_shadow_enabled:!0,card_shadow_color:ae,card_shadow_horizontal:0,card_shadow_vertical:8,card_shadow_blur:24,card_shadow_spread:0},modules:{button:{style:"outline"},bar:{bar_style:"flat"},slider_control:{slider_style:"flat"},spinbox:{button_style:"outline",button_shape:"rounded"},popup:{trigger_button_style:"outline"},grid:{grid_style:"style_20"},navigation:{nav_style:"uc_minimal"},area_summary:{style_preset:"iconic_soft",accent_color:K,tile_border_radius:12},auto_entity_list:{row_style:"card"},unifi:{rack_style:"light"},activity_feed:{feed_card_style:"elevated"},tabs:{style:"simple_2"}},css:`\n.card-container {\n  /* Which corners get a bloom, from the card's seeds. */\n  --h-s1: var(--uc-card-seed-1, 0.5);\n  --h-s2: var(--uc-card-seed-2, 0.5);\n  --h-s3: var(--uc-card-seed-3, 0.5);\n  --h-size: calc(96px + var(--h-s3) * 40px);\n  /* 0 or 1: the blue head sits top-right or bottom-right; the blush head keeps to the bottom-left, clear of titles. */\n  --h-side: clamp(0, (var(--h-s2) - 0.5) * 100, 1);\n  /* Each head shows only when its seed clears the bar; otherwise its size collapses to 0. */\n  --h-blue: calc(clamp(0, (var(--h-s1) - 0.35) * 20, 1) * var(--h-size));\n  --h-blush: calc(clamp(0, (var(--h-s3) - 0.55) * 20, 1) * var(--h-size) * 0.85);\n  background-color: ${ee} !important;\n  /* Blue head off the right edge, blush head off the bottom-left, each cropped by the corner. */\n  background-image: ${ie({light:"#a7bad6",mid:"#8fa5c4",deep:"#7489a8",eye:"#e4ebf5"})}, ${ie({light:"#e6c9cc",mid:"#d9b3b8",deep:"#c497a0",eye:"#f7ecec"})} !important;\n  background-repeat: no-repeat !important;\n  background-size: var(--h-blue) var(--h-blue), var(--h-blush) var(--h-blush) !important;\n  background-position:\n    calc(100% + var(--h-size) * 0.3 - var(--h-s2) * 12px) calc(var(--h-size) * -0.3 + var(--h-side) * (100% + var(--h-size) * 0.55)),\n    calc(var(--h-size) * -0.3 + var(--h-s1) * 10px) calc(100% + var(--h-size) * 0.22) !important;\n  /* Gold piping along the top edge, then the navy-tinted shadow. */\n  box-shadow:\n    inset 0 2px 0 ${K},\n    0 8px 24px ${ae},\n    0 1px 2px rgba(30, 47, 75, 0.06) !important;\n  letter-spacing: 0.01em;\n}\n`.trim()},ne="#2b1d14",se="#c2a37c",le="rgba(194, 163, 124, 0.22)",de="rgba(12, 7, 3, 0.45)",ce={id:"moose",name:"Moose",version:1,author:"Ultra Card",description:"All browns, like a moose: dark cocoa hide, antler-cream text, saddle-brown controls and a warm tan accent.",icon:"mdi:pine-tree",source:"builtin",tokens:{surface:"flat",radius:18,radius_sm:12,border_width:1,border_color:le,shadow:`0 10px 28px ${de}, 0 1px 2px rgba(12, 7, 3, 0.3)`,page_background:"#1a110b",density:"regular",accent:se,font_family:"'Bitter', 'Merriweather', 'Source Serif 4', 'Roboto Slab', Georgia, serif",palette:{primary:"#8b5a2b",accent:se,card_bg:ne,text:"#e8d9c3",text_secondary:"#b89a74",divider:le}},card:{card_background:ne,card_border_radius:18,card_border_color:le,card_border_width:1,card_padding:18,card_shadow_enabled:!0,card_shadow_color:de,card_shadow_horizontal:0,card_shadow_vertical:10,card_shadow_blur:28,card_shadow_spread:0},modules:{button:{style:"flat"},bar:{bar_style:"flat"},slider_control:{slider_style:"flat"},spinbox:{button_style:"flat",button_shape:"rounded"},popup:{trigger_button_style:"flat"},grid:{grid_style:"style_20"},navigation:{nav_style:"uc_minimal"},area_summary:{style_preset:"iconic_soft",accent_color:se,tile_border_radius:14},auto_entity_list:{row_style:"card"},unifi:{rack_style:"dark"},activity_feed:{feed_card_style:"elevated"},tabs:{style:"simple_2"}},css:`\n.card-container {\n  /* A faint antler highlight on the top edge over a warm hide gradient. */\n  background-image: linear-gradient(180deg, rgba(232, 217, 195, 0.05) 0%, rgba(232, 217, 195, 0) 40%) !important;\n  box-shadow:\n    inset 0 1px 0 rgba(232, 217, 195, 0.1),\n    0 10px 28px ${de},\n    0 1px 2px rgba(12, 7, 3, 0.3) !important;\n}\n`.trim()},pe="#b3b8be",he="#1f2327",ue="#1f6aa8",me="#858c93",ge="inset 0 1px 0 rgba(255, 255, 255, 0.75), inset 0 -1px 0 rgba(0, 0, 0, 0.28), 0 10px 24px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.3)",be={id:"metallic",name:"Metallic",version:4,author:"Ultra Card",description:"Spun aluminium all the way down, like a hi-fi front panel: a dark spun plate with lighter spun panes and controls mounted on it. Dark engraved type, near-black tracks with a lit blue fill.",icon:"mdi:anvil",source:"builtin",tokens:{surface:"glossy",radius:18,radius_sm:12,border_width:1,border_color:me,shadow:ge,page_background:"linear-gradient(180deg, #e3e6e9 0%, #d3d7db 60%, #c6cbd0 100%)",pane_background:"radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 60%), conic-gradient(from 20deg, #eef0f2, #c8ccd0 12%, #f4f5f7 24%, #cdd1d5 38%, #f0f2f4 50%, #c8ccd0 63%, #f2f4f6 76%, #cfd3d7 88%, #eef0f2)",pane_border:"1px solid #8f969d",pane_shadow:"inset 0 1px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 0 rgba(0, 0, 0, 0.18), 0 2px 3px rgba(0, 0, 0, 0.28), 0 5px 10px rgba(0, 0, 0, 0.14)",density:"regular",accent:ue,recipes:{control:"metallic",track:"metallic",fill:"metallic",pane:"metallic"},font_family:"'Rajdhani', 'Barlow Semi Condensed', 'Roboto Condensed', 'Oswald', system-ui, sans-serif",palette:{primary:ue,accent:ue,card_bg:pe,text:he,text_secondary:"#363e47",divider:"rgba(0, 0, 0, 0.14)"}},card:{card_background:pe,card_border_radius:18,card_border_color:me,card_border_width:1,card_padding:18,card_shadow_enabled:!0,card_shadow_color:"rgba(0, 0, 0, 0.26)",card_shadow_horizontal:0,card_shadow_vertical:10,card_shadow_blur:24,card_shadow_spread:0},modules:{button:{style:"metallic"},bar:{bar_style:"metallic"},slider_control:{slider_style:"metallic"},spinbox:{button_style:"metallic",button_shape:"circle"},popup:{trigger_button_style:"metallic"},grid:{grid_style:"style_12"},navigation:{nav_style:"uc_minimal"},area_summary:{style_preset:"compact_controls",accent_color:ue,tile_border_radius:12},auto_entity_list:{row_style:"detailed"},unifi:{rack_style:"light"},activity_feed:{feed_card_style:"outlined"},tabs:{style:"switch_1"}},css:`\n.card-container {\n  /* The plate. */\n  background-color: ${pe} !important;\n  background-image: radial-gradient(ellipse at 50% 20%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 60%), conic-gradient(from 20deg, #c9ced3, #a3a9af 12%, #d5d9dc 24%, #a9afb5 38%, #d1d5d9 50%, #a3a9af 63%, #d3d7db 76%, #abb1b7 88%, #c9ced3) !important;\n  border: 1px solid ${me} !important;\n  box-shadow: ${ge} !important;\n  /* Engraved type: a hairline of light under each glyph. */\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.65);\n  letter-spacing: 0.02em;\n  /* Bar value text sits on the dark well and the lit fill, so it stays white here. */\n  --uc-bar-text: #ffffff;\n  --uc-bar-text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  /* Module backdrops (the flat grey wells many modules draw with HA's\n     secondary background) would sit as dull slabs on the spun plate; make\n     them a faint glaze so the metal shows through. */\n  --secondary-background-color: rgba(255, 255, 255, 0.12);\n  --primary-background-color: rgba(255, 255, 255, 0.08);\n}\n/* Every metallic control is spun aluminium with dark type. Only the metallic\n   recipe is touched, so a control a user has switched to another style keeps it. */\n[data-uc-surface="metallic"][data-uc-role="control"] {\n  background: radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 60%), conic-gradient(from 20deg, #e6e9ec, #b9bfc4 12%, #f2f4f6 24%, #c0c6cb 38%, #eef0f2 50%, #b7bdc2 63%, #f0f2f4 76%, #c2c8cd 88%, #e6e9ec) !important;\n  border: 1px solid #7f868d !important;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.28), 0 2px 3px rgba(0, 0, 0, 0.35), 0 6px 10px rgba(0, 0, 0, 0.16) !important;\n  color: ${he} !important;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);\n}\n/* Tracks are sunk into the plate: a near-black well with a white lip below it.\n   The bar's white value text reads on the well and on the lit fill alike. */\n[data-uc-surface="metallic"][data-uc-role="track"] {\n  background: linear-gradient(180deg, #202428, #2a2e32 40%, #383d42) !important;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(255, 255, 255, 0.95) !important;\n}\n`.trim()},_e="#f3e9d2",fe="#1f3a4d",ve="#6b5d4a",ye="#186a7a",xe="#c9543a",we=w(`\n<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 24' preserveAspectRatio='none'>\n  <path d='M0 11 C30 3 50 19 80 11 S130 3 160 11 S210 19 240 11 V24 H0Z' fill='${ye}' fill-opacity='.18'/>\n  <path d='M0 16 C30 8 50 24 80 16 S130 8 160 16 S210 24 240 16 V24 H0Z' fill='${ye}' fill-opacity='.3'/>\n  <path d='M0 11 C30 3 50 19 80 11 S130 3 160 11 S210 19 240 11' fill='none' stroke='#ffffff' stroke-opacity='.75' stroke-width='1.5'/>\n</svg>`),ke=w(`\n<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'>\n  <g fill='${ve}' fill-opacity='.14'>\n    <circle cx='6' cy='9' r='1'/><circle cx='23' cy='4' r='.8'/><circle cx='41' cy='12' r='1'/>\n    <circle cx='14' cy='26' r='.8'/><circle cx='33' cy='30' r='1.1'/><circle cx='50' cy='27' r='.7'/>\n    <circle cx='8' cy='45' r='1'/><circle cx='27' cy='49' r='.8'/><circle cx='45' cy='44' r='1'/><circle cx='52' cy='52' r='.7'/>\n  </g>\n</svg>`),$e=w(`\n<svg xmlns='http://www.w3.org/2000/svg' width='12' height='6'>\n  <path d='M0 3 Q3 0 6 3 T12 3' fill='none' stroke='${ve}' stroke-opacity='.45' stroke-width='1.4'/>\n</svg>`),Le={id:"beach",name:"Beach",version:2,author:"Ultra Card",description:"Sand cards with waves lapping the bottom edge, a sun glow, sand grain and a rope hairline. Every card scatters its own crabs, starfish and sand dollars. Deep-water text, ocean controls, coral accents.",icon:"mdi:beach",source:"builtin",tokens:{surface:"flat",radius:22,radius_sm:14,border_width:1,border_color:"rgba(107, 93, 74, 0.28)",shadow:"0 10px 26px rgba(31, 58, 77, 0.14), 0 1px 2px rgba(31, 58, 77, 0.08)",page_background:"linear-gradient(180deg, #c8e1ee 0%, #eaf2f4 55%, #e6dbc3 100%)",pane_background:"rgba(255, 255, 255, 0.42)",pane_border:"1px solid rgba(107, 93, 74, 0.22)",pane_shadow:"inset 0 1px 0 rgba(255, 255, 255, 0.7)",density:"comfortable",accent:xe,font_family:"'Nunito', 'Quicksand', 'Varela Round', 'Avenir Next Rounded', system-ui, sans-serif",palette:{primary:ye,accent:xe,card_bg:_e,text:fe,text_secondary:ve,divider:"rgba(107, 93, 74, 0.28)"}},card:{card_background:_e,card_border_radius:22,card_border_color:"rgba(107, 93, 74, 0.28)",card_border_width:1,card_padding:22,card_shadow_enabled:!0,card_shadow_color:"rgba(31, 58, 77, 0.14)",card_shadow_horizontal:0,card_shadow_vertical:10,card_shadow_blur:26,card_shadow_spread:0},modules:{button:{style:"flat"},bar:{bar_style:"flat"},slider_control:{slider_style:"flat"},spinbox:{button_style:"flat",button_shape:"circle"},popup:{trigger_button_style:"flat"},grid:{grid_style:"style_14"},navigation:{nav_style:"uc_minimal"},area_summary:{style_preset:"iconic_soft",accent_color:xe,tile_border_radius:16},auto_entity_list:{row_style:"card"},unifi:{rack_style:"light"},activity_feed:{feed_card_style:"elevated"},tabs:{style:"simple"}},css:`\n.card-container {\n  /* This card's stretch of beach, from its seeds. */\n  --b-s1: var(--uc-card-seed-1, 0.5);\n  --b-s2: var(--uc-card-seed-2, 0.5);\n  --b-s3: var(--uc-card-seed-3, 0.5);\n  --b-tide: calc(16px + var(--b-s3) * 12px);\n  --b-sun-x: calc(60% + var(--b-s1) * 40%);\n  /* Each find is on the sand only when its seed clears the bar; otherwise its size collapses to 0. */\n  --b-crab: calc(clamp(0, (var(--b-s1) - 0.45) * 20, 1) * 44px);\n  --b-star: calc(clamp(0, (var(--b-s3) - 0.5) * 20, 1) * 32px);\n  --b-dollar: calc(clamp(0, (0.5 - (var(--b-s1) + var(--b-s2)) / 2) * 20, 1) * 22px);\n  --b-sand-line: calc(100% - var(--b-tide) - 4px);\n  background-color: ${_e} !important;\n  /* Layers, top to bottom: the finds on the sand, waves at the foot, rope under the top edge, sun glow, sand grain, sky wash. */\n  background-image:\n    ${w(`\n<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 28'>\n  <g stroke='${xe}' stroke-width='2' stroke-linecap='round' fill='none'>\n    <path d='M11 20 L5 25 M14 22 L10 27 M26 22 L30 27 M29 20 L35 25 M14 11 L12 4 M26 11 L28 4'/>\n  </g>\n  <g fill='${xe}'>\n    <ellipse cx='20' cy='16' rx='11' ry='7'/>\n    <circle cx='8' cy='9' r='4.5'/><circle cx='32' cy='9' r='4.5'/>\n  </g>\n  <g fill='${_e}'>\n    <path d='M8 4.5 L10.5 9 L5.5 9 Z'/><path d='M32 4.5 L34.5 9 L29.5 9 Z'/>\n  </g>\n  <circle cx='12' cy='4' r='1.8' fill='${fe}'/><circle cx='28' cy='4' r='1.8' fill='${fe}'/>\n  <circle cx='12.5' cy='3.5' r='.6' fill='#fff'/><circle cx='28.5' cy='3.5' r='.6' fill='#fff'/>\n  <path d='M16 18 Q20 21 24 18' stroke='${fe}' stroke-width='1.2' fill='none' stroke-linecap='round'/>\n</svg>`)},\n    ${w("\n<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>\n  <path d='M16 2 L19.6 12 L30 12.5 L21.8 19 L24.7 29.5 L16 23.6 L7.3 29.5 L10.2 19 L2 12.5 L12.4 12 Z' fill='#e9a25b' stroke='#c77f3a' stroke-width='1.2' stroke-linejoin='round'/>\n  <g fill='#c77f3a'>\n    <circle cx='16' cy='8' r='1'/><circle cx='16' cy='13' r='1'/><circle cx='24' cy='14.5' r='1'/><circle cx='8' cy='14.5' r='1'/>\n    <circle cx='20.5' cy='22.5' r='1'/><circle cx='11.5' cy='22.5' r='1'/><circle cx='16' cy='17.5' r='1.2'/>\n  </g>\n</svg>")},\n    ${w("\n<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>\n  <circle cx='12' cy='12' r='11' fill='#efe3cc' stroke='#c8b797' stroke-width='1'/>\n  <g fill='none' stroke='#c8b797' stroke-width='1'>\n    <ellipse cx='12' cy='7' rx='2' ry='4.5'/>\n    <ellipse cx='12' cy='7' rx='2' ry='4.5' transform='rotate(72 12 12)'/>\n    <ellipse cx='12' cy='7' rx='2' ry='4.5' transform='rotate(144 12 12)'/>\n    <ellipse cx='12' cy='7' rx='2' ry='4.5' transform='rotate(216 12 12)'/>\n    <ellipse cx='12' cy='7' rx='2' ry='4.5' transform='rotate(288 12 12)'/>\n  </g>\n  <circle cx='12' cy='12' r='1.2' fill='#c8b797'/>\n</svg>")},\n    ${we},\n    ${$e},\n    radial-gradient(circle at var(--b-sun-x) -8%, rgba(255, 196, 110, 0.55) 0%, rgba(255, 196, 110, 0.18) 18%, rgba(255, 196, 110, 0) 42%),\n    ${ke},\n    linear-gradient(180deg, rgba(24, 106, 122, 0.06) 0%, rgba(24, 106, 122, 0) 45%) !important;\n  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat-x, no-repeat, repeat, no-repeat !important;\n  background-size:\n    var(--b-crab) calc(var(--b-crab) * 0.7),\n    var(--b-star) var(--b-star),\n    var(--b-dollar) var(--b-dollar),\n    100% var(--b-tide), 12px 6px, auto, 56px 56px, auto !important;\n  background-position:\n    calc(64% + var(--b-s2) * 34%) var(--b-sand-line),\n    calc(30% + var(--b-s1) * 22%) calc(var(--b-sand-line) - 4px),\n    calc(50% + var(--b-s3) * 18%) var(--b-sand-line),\n    bottom center, left 9px, 0 0, 0 0, 0 0 !important;\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.7),\n    0 10px 26px rgba(31, 58, 77, 0.14),\n    0 1px 2px rgba(31, 58, 77, 0.08) !important;\n}\n`.trim()},Se="#160b2b",Me="#ff4fd8",Ce="#4ff0ff",Te="0 0 0 1px rgba(255, 79, 216, 0.55), 0 0 22px rgba(255, 79, 216, 0.28), 0 0 44px rgba(79, 240, 255, 0.14), 0 12px 30px rgba(0, 0, 0, 0.5)",Oe=w(`\n<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>\n  <defs>\n    <linearGradient id='g' x1='0' y1='0' x2='0' y2='1'>\n      <stop offset='0' stop-color='${Me}'/><stop offset='.55' stop-color='#ff7ac8'/><stop offset='1' stop-color='#ffb347'/>\n    </linearGradient>\n    <clipPath id='c'>\n      <rect x='0' y='0' width='120' height='62'/><rect x='0' y='66' width='120' height='10'/><rect x='0' y='80' width='120' height='8'/>\n      <rect x='0' y='92' width='120' height='6'/><rect x='0' y='102' width='120' height='4'/><rect x='0' y='110' width='120' height='3'/>\n    </clipPath>\n  </defs>\n  <circle cx='60' cy='60' r='54' fill='url(#g)' clip-path='url(#c)' opacity='.6'/>\n</svg>`),je={id:"vapor",name:"Vapor",version:3,author:"Ultra Card",description:"Vaporwave: midnight purple, a striped sunset sun, a cyan perspective grid, VHS scanlines and a hot-pink neon rim. Every card is a different frame: some get the sun, some the grid, some both, some just stars.",icon:"mdi:weather-sunset",source:"builtin",tokens:{surface:"glass",radius:14,radius_sm:10,blur:10,border_width:1,border_color:"rgba(255, 79, 216, 0.55)",shadow:Te,page_background:"linear-gradient(180deg, #08041a 0%, #180b3a 55%, #2d1058 100%)",pane_background:"rgba(255, 79, 216, 0.08)",pane_border:"1px solid rgba(255, 79, 216, 0.35)",pane_shadow:"0 0 10px rgba(255, 79, 216, 0.15), inset 0 0 12px rgba(79, 240, 255, 0.06)",density:"regular",accent:Ce,font_family:"'Orbitron', 'Exo 2', 'Michroma', 'Audiowide', 'Trebuchet MS', system-ui, sans-serif",palette:{primary:Me,accent:Ce,card_bg:Se,text:"#f3e8ff",text_secondary:"#b8a3dc",divider:"rgba(255, 79, 216, 0.3)"}},card:{card_background:Se,card_border_radius:14,card_border_color:"rgba(255, 79, 216, 0.55)",card_border_width:1,card_padding:18,card_shadow_enabled:!0,card_shadow_color:"rgba(255, 79, 216, 0.28)",card_shadow_horizontal:0,card_shadow_vertical:0,card_shadow_blur:22,card_shadow_spread:0},modules:{button:{style:"neon-glow"},bar:{bar_style:"neon-glow"},slider_control:{slider_style:"neon-glow"},spinbox:{button_style:"neon-glow",button_shape:"rounded"},popup:{trigger_button_style:"neon-glow"},grid:{grid_style:"style_17"},navigation:{nav_style:"uc_minimal"},area_summary:{style_preset:"graph_glow",accent_color:Ce,tile_border_radius:12},auto_entity_list:{row_style:"slim"},unifi:{rack_style:"blueprint"},activity_feed:{feed_card_style:"flat"},tabs:{style:"modern"}},css:`\n.card-container {\n  /* This card's frame, from its seeds. */\n  --v-s1: var(--uc-card-seed-1, 0.5);\n  --v-s2: var(--uc-card-seed-2, 0.5);\n  --v-s3: var(--uc-card-seed-3, 0.5);\n  /* Sky: a sun on about two cards in five (size collapses to 0 when the seed\n     misses), anywhere from high in one corner to setting low behind the grid,\n     at anything from a small distant disc to a huge close one. */\n  --v-sun: calc(clamp(0, (var(--v-s3) - 0.6) * 20, 1) * (64px + (1 - var(--v-s3)) * 300px));\n  --v-sun-x: calc(-6% + var(--v-s1) * 112%);\n  --v-sun-y: calc(-14% + var(--v-s2) * 84%);\n  --v-haze: calc(190 + var(--v-s2) * 130); /* cyan .. violet .. pink */\n  --v-haze-x: calc(10% + var(--v-s3) * 80%);\n  /* The grid runs off the foot of about two cards in three; the others end in haze. */\n  --v-horizon: calc(clamp(0, (var(--v-s1) - 0.34) * 20, 1) * (48px + var(--v-s2) * 40px));\n  --v-sky: hsl(calc(250 + var(--v-s1) * 40) 62% 15%);\n  background-color: ${Se} !important;\n  /* Layers, top to bottom: grid at the foot, sun, three stars, haze, scanlines, night gradient. */\n  background-image:\n    ${w(`\n<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 90' preserveAspectRatio='none'>\n  <defs>\n    <linearGradient id='f' x1='0' y1='0' x2='0' y2='1'>\n      <stop offset='0' stop-color='${Ce}' stop-opacity='0'/><stop offset='1' stop-color='${Ce}' stop-opacity='.5'/>\n    </linearGradient>\n  </defs>\n  <path fill='none' stroke='url(#f)' stroke-width='1'\n    d='M-160 90 L200 -70 M-80 90 L200 -70 M0 90 L200 -70 M60 90 L200 -70 M120 90 L200 -70 M160 90 L200 -70 M200 90 L200 -70 M240 90 L200 -70 M280 90 L200 -70 M340 90 L200 -70 M400 90 L200 -70 M480 90 L200 -70 M560 90 L200 -70 M0 6 H400 M0 14 H400 M0 24 H400 M0 36 H400 M0 50 H400 M0 67 H400 M0 88 H400'/>\n</svg>`)},\n    ${Oe},\n    radial-gradient(circle 1.2px at calc(var(--v-s2) * 100%) calc(6% + var(--v-s1) * 30%), rgba(255, 255, 255, 0.9) 0, rgba(255, 255, 255, 0) 100%),\n    radial-gradient(circle 1px at calc(var(--v-s3) * 100%) calc(4% + var(--v-s2) * 34%), rgba(255, 255, 255, 0.8) 0, rgba(255, 255, 255, 0) 100%),\n    radial-gradient(circle 1.5px at calc(100% - var(--v-s1) * 100%) calc(8% + var(--v-s3) * 26%), rgba(79, 240, 255, 0.9) 0, rgba(79, 240, 255, 0) 100%),\n    radial-gradient(ellipse at var(--v-haze-x) 110%, hsl(var(--v-haze) 100% 65% / 0.3) 0%, hsl(var(--v-haze) 100% 65% / 0) 55%),\n    repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.07) 0 1px, rgba(0, 0, 0, 0) 1px 3px),\n    linear-gradient(180deg, var(--v-sky) 0%, ${Se} 55%, #0e0821 100%) !important;\n  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, repeat, no-repeat !important;\n  background-size: 100% var(--v-horizon), var(--v-sun) var(--v-sun), auto, auto, auto, auto, auto, auto !important;\n  background-position: bottom center, var(--v-sun-x) var(--v-sun-y), 0 0, 0 0, 0 0, 0 0, 0 0, 0 0 !important;\n  box-shadow: ${Te} !important;\n  text-shadow: 0 0 8px rgba(255, 79, 216, 0.25);\n  letter-spacing: 0.03em;\n}\n`.trim()},ze="var(--uc-card-hue, 340)",qe=(e,t,a)=>void 0===a?`hsl(${ze} ${e}% ${t}%)`:`hsl(${ze} ${e}% ${t}% / ${a})`,Ae=`inset 0 1px 0 rgba(255, 255, 255, 0.45), inset 0 -2px 0 rgba(255, 255, 255, 0.55), inset 0 0 0 3px ${qe(92,56,.42)}, inset 0 0 36px ${qe(96,46,.62)}, inset 0 -16px 22px ${qe(96,44,.5)}, 0 12px 26px ${qe(80,40,.42)}, 0 2px 6px ${qe(80,35,.35)}`,Pe={id:"gummy",name:"Gummy",version:4,author:"Ultra Card",description:"Gummy-bear cards: every card its own candy colour, rendered as translucent jelly that catches the light differently on each card. Dark-plum ink, liquorice controls.",icon:"mdi:candy",source:"builtin",tokens:{surface:"glossy",radius:26,radius_sm:18,border_width:0,border_color:"transparent",shadow:Ae,page_background:"#f7f3ec",pane_background:`linear-gradient(180deg, ${qe(90,88)}, ${qe(92,78)})`,pane_border:"none",pane_shadow:`inset 0 -1px 0 rgba(255, 255, 255, 0.6), inset 0 0 0 2px ${qe(90,66,.3)}, inset 0 0 12px ${qe(95,55,.45)}, inset 0 -6px 10px ${qe(95,50,.4)}, 0 3px 8px ${qe(80,40,.25)}`,density:"comfortable",accent:`hsl(calc(${ze} + 40) 90% 52%)`,font_family:"'Baloo 2', 'Fredoka', 'Nunito', 'Varela Round', 'Quicksand', system-ui, sans-serif",palette:{primary:"#3a2350",on_primary:"#ffffff",accent:`hsl(calc(${ze} + 40) 90% 52%)`,card_bg:qe(88,72),text:"#2a1838",text_secondary:"#35243f",divider:"rgba(42, 24, 56, 0.18)"}},card:{card_background:qe(88,72),card_border_radius:26,card_border_color:"transparent",card_border_width:0,card_padding:20,card_shadow_enabled:!0,card_shadow_color:qe(80,40,.42),card_shadow_horizontal:0,card_shadow_vertical:12,card_shadow_blur:26,card_shadow_spread:0},modules:{button:{style:"glossy"},bar:{bar_style:"glossy"},slider_control:{slider_style:"glossy"},spinbox:{button_style:"glossy",button_shape:"circle"},popup:{trigger_button_style:"glossy"},grid:{grid_style:"style_14"},navigation:{nav_style:"uc_ios_glass"},area_summary:{style_preset:"iconic_soft",tile_border_radius:20},auto_entity_list:{row_style:"card"},unifi:{rack_style:"light"},activity_feed:{feed_card_style:"elevated"},tabs:{style:"switch_2"}},css:`\n.card-container {\n  /* Companions that must follow the per-card hue rather than a fixed palette. */\n  --secondary-background-color: ${qe(90,86)};\n  --primary-background-color: ${qe(90,82)};\n  --input-fill-color: ${qe(90,86)};\n  --mdc-select-fill-color: ${qe(90,86)};\n  --mdc-text-field-fill-color: ${qe(90,86)};\n  --mdc-theme-surface: ${qe(88,72)};\n  /* Where this card catches the light, from its own seeds. */\n  --g-s1: var(--uc-card-seed-1, 0.5);\n  --g-s2: var(--uc-card-seed-2, 0.5);\n  --g-s3: var(--uc-card-seed-3, 0.5);\n  --g-x: calc(14% + var(--g-s1) * 56%);\n  --g-y: calc(3% + var(--g-s2) * 14%);\n  --g-w: calc(22% + var(--g-s3) * 26%);\n  --g-h: calc(9% + var(--g-s2) * 10%);\n  --g-a: calc(96deg + var(--g-s3) * 48deg);\n  --g-p: calc(28% + var(--g-s1) * 30%);\n  background-color: ${qe(88,72)} !important;\n  /* Layers, top to bottom: hot core, specular bloom, sheen band, floor reflection, saturated pool, jelly body. */\n  background-image:\n    radial-gradient(ellipse calc(var(--g-w) * 0.32) calc(var(--g-h) * 0.42) at calc(var(--g-x) - var(--g-w) * 0.14) calc(var(--g-y) + 1%), rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 45%, rgba(255, 255, 255, 0) 100%),\n    radial-gradient(ellipse var(--g-w) var(--g-h) at var(--g-x) var(--g-y), rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 45%, rgba(255, 255, 255, 0) 100%),\n    linear-gradient(var(--g-a), rgba(255, 255, 255, 0) calc(var(--g-p) - 14%), rgba(255, 255, 255, 0.2) var(--g-p), rgba(255, 255, 255, 0) calc(var(--g-p) + 12%)),\n    radial-gradient(ellipse calc(18% + var(--g-s2) * 16%) 8% at calc(56% + var(--g-s3) * 34%) 95%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0) 100%),\n    radial-gradient(ellipse 70% 45% at calc(30% + var(--g-s1) * 40%) 108%, ${qe(95,58,.9)} 0%, ${qe(95,58,0)} 70%),\n    radial-gradient(ellipse 110% 75% at calc(35% + var(--g-s2) * 30%) 45%, ${qe(86,80)} 0%, ${qe(90,72)} 60%, ${qe(94,62)} 100%) !important;\n  border: none !important;\n  box-shadow: ${Ae} !important;\n}\n/* Nested surfaces are smaller gummies: lighter body, their own bloom and sheen, the same glowing rim. */\n[style*="--uc-design-surface"] {\n  background-color: ${qe(90,84)};\n  background-image:\n    radial-gradient(ellipse calc(14% + var(--g-s3) * 14%) 45% at calc(10% + var(--g-s2) * 30%) 0%, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0) 100%),\n    linear-gradient(calc(100deg + var(--g-s1) * 40deg), rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0.18) 50%, rgba(255, 255, 255, 0) 62%),\n    linear-gradient(180deg, ${qe(90,88)}, ${qe(92,78)});\n  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.6), inset 0 0 0 2px ${qe(90,66,.3)}, inset 0 0 12px ${qe(95,55,.45)}, inset 0 -6px 10px ${qe(95,50,.4)}, 0 3px 8px ${qe(80,40,.25)};\n}\n`.trim()},Ne="#5a3218",Fe="#e0953f",Ee="#2a160a",Ie={id:"wood",name:"Wood",version:2,author:"Ultra Card",description:"Varnished mahogany planks with real grain, seams and knots, offset per card. Pale maple controls, amber indicators, routed recesses.",icon:"mdi:tree",source:"builtin",tokens:{surface:"neumorphic",radius:12,radius_sm:10,border_width:1,border_color:Ee,shadow:"inset 0 1px 0 rgba(255, 200, 140, 0.18), inset 0 -1px 0 rgba(0, 0, 0, 0.5), 0 10px 24px rgba(20, 8, 2, 0.55)",page_background:"#1f120a",pane_background:"linear-gradient(180deg, #24120a 0%, #3b2010 100%)",pane_border:`1px solid ${Ee}`,pane_shadow:"inset 0 2px 6px rgba(0, 0, 0, 0.75), inset 0 -1px 0 rgba(255, 200, 140, 0.12), 0 1px 0 rgba(255, 200, 140, 0.16)",density:"regular",accent:Fe,font_family:"'Lora', 'Merriweather', 'Source Serif 4', Georgia, 'Times New Roman', serif",palette:{primary:"#e6c08f",on_primary:"#3a2210",accent:Fe,card_bg:Ne,text:"#f3e4c8",text_secondary:"#d9bd97",divider:"rgba(243, 228, 200, 0.16)"}},card:{card_background:Ne,card_border_radius:12,card_border_color:Ee,card_border_width:1,card_padding:18,card_shadow_enabled:!0,card_shadow_color:"rgba(20, 8, 2, 0.55)",card_shadow_horizontal:0,card_shadow_vertical:10,card_shadow_blur:24,card_shadow_spread:0},modules:{button:{style:"embossed"},bar:{bar_style:"embossed"},slider_control:{slider_style:"embossed"},spinbox:{button_style:"embossed",button_shape:"rounded"},popup:{trigger_button_style:"embossed"},grid:{grid_style:"style_12"},navigation:{nav_style:"uc_minimal"},area_summary:{style_preset:"iconic_soft",accent_color:Fe,tile_border_radius:10},auto_entity_list:{row_style:"card"},unifi:{rack_style:"dark"},activity_feed:{feed_card_style:"elevated"},tabs:{style:"simple_3"}},css:`\n.card-container {\n  /* Which stretch of the wall this card shows. */\n  --w-s1: var(--uc-card-seed-1, 0.5);\n  --w-s2: var(--uc-card-seed-2, 0.5);\n  background-color: ${Ne} !important;\n  /* Layers, top to bottom: vignette, varnish sheen, planks. */\n  background-image:\n    radial-gradient(ellipse 120% 95% at 50% 40%, rgba(0, 0, 0, 0) 55%, rgba(20, 8, 2, 0.5) 100%),\n    linear-gradient(180deg, rgba(255, 210, 150, 0.14) 0%, rgba(255, 210, 150, 0) 40%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.16) 100%),\n    ${w(`\n<svg xmlns='http://www.w3.org/2000/svg' width='208' height='600'>\n  <defs>\n    <filter id='d' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'>\n      <feTurbulence type='fractalNoise' baseFrequency='0.16 0.0035' numOctaves='4' seed='5' stitchTiles='stitch'/>\n      <feColorMatrix values='0 0 0 0 0.12  0 0 0 0 0.05  0 0 0 0 0.01  1.7 0 0 0 -0.7'/>\n    </filter>\n    <filter id='l' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'>\n      <feTurbulence type='fractalNoise' baseFrequency='0.09 0.005' numOctaves='3' seed='13' stitchTiles='stitch'/>\n      <feColorMatrix values='0 0 0 0 0.85  0 0 0 0 0.55  0 0 0 0 0.3  1.4 0 0 0 -0.9'/>\n    </filter>\n    <filter id='p' x='0' y='0' width='100%' height='100%' color-interpolation-filters='sRGB'>\n      <feTurbulence type='fractalNoise' baseFrequency='0.9 0.9' numOctaves='1' seed='2' stitchTiles='stitch'/>\n      <feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.3 0 0 0 -0.08'/>\n    </filter>\n  </defs>\n  <rect width='100%' height='100%' fill='${Ne}'/>\n  <rect width='100%' height='100%' filter='url(#l)'/>\n  <rect width='100%' height='100%' filter='url(#d)'/>\n  <rect width='100%' height='100%' filter='url(#p)'/>\n  <g fill='none' stroke-width='1'>\n    <ellipse cx='78' cy='140' rx='5' ry='11' stroke='#2a160a' stroke-opacity='.7'/>\n    <ellipse cx='78' cy='140' rx='9' ry='19' stroke='#2a160a' stroke-opacity='.35'/>\n    <ellipse cx='78' cy='140' rx='2' ry='5' fill='#2a160a' fill-opacity='.6'/>\n    <ellipse cx='182' cy='420' rx='4' ry='9' stroke='#2a160a' stroke-opacity='.7'/>\n    <ellipse cx='182' cy='420' rx='8' ry='16' stroke='#2a160a' stroke-opacity='.35'/>\n    <ellipse cx='182' cy='420' rx='1.6' ry='4' fill='#2a160a' fill-opacity='.6'/>\n  </g>\n  <g>\n    <rect x='0' y='0' width='2' height='100%' fill='#1a0d05' fill-opacity='.85'/><rect x='2' y='0' width='1' height='100%' fill='#c48a55' fill-opacity='.3'/>\n    <rect x='52' y='0' width='2' height='100%' fill='#1a0d05' fill-opacity='.85'/><rect x='54' y='0' width='1' height='100%' fill='#c48a55' fill-opacity='.3'/>\n    <rect x='104' y='0' width='2' height='100%' fill='#1a0d05' fill-opacity='.85'/><rect x='106' y='0' width='1' height='100%' fill='#c48a55' fill-opacity='.3'/>\n    <rect x='156' y='0' width='2' height='100%' fill='#1a0d05' fill-opacity='.85'/><rect x='158' y='0' width='1' height='100%' fill='#c48a55' fill-opacity='.3'/>\n    <rect x='51' y='0' width='1' height='100%' fill='#1a0d05' fill-opacity='.35'/><rect x='103' y='0' width='1' height='100%' fill='#1a0d05' fill-opacity='.35'/>\n    <rect x='155' y='0' width='1' height='100%' fill='#1a0d05' fill-opacity='.35'/><rect x='207' y='0' width='1' height='100%' fill='#1a0d05' fill-opacity='.35'/>\n  </g>\n</svg>`)} !important;\n  background-repeat: no-repeat, no-repeat, repeat !important;\n  background-size: auto, auto, 208px 600px !important;\n  background-position: 0 0, 0 0, calc(var(--w-s1) * 208px) calc(var(--w-s2) * 600px) !important;\n  border: 1px solid ${Ee} !important;\n  box-shadow:\n    inset 0 1px 0 rgba(255, 200, 140, 0.18),\n    inset 0 -1px 0 rgba(0, 0, 0, 0.5),\n    inset 1px 0 0 rgba(255, 200, 140, 0.06),\n    inset -1px 0 0 rgba(0, 0, 0, 0.3),\n    0 10px 24px rgba(20, 8, 2, 0.55) !important;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);\n}\n/* Nested surfaces are routed recesses: dark, with a lit lower lip like the slider tracks. */\n[style*="--uc-design-surface"] {\n  background-image: linear-gradient(180deg, #24120a 0%, #3b2010 100%);\n  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.75), inset 0 -1px 0 rgba(255, 200, 140, 0.12), 0 1px 0 rgba(255, 200, 140, 0.16);\n}\n`.trim()};function De(e,t,a,r,i){const o=`${"light"===r?"inset 1px 1px 0 rgba(255, 255, 255, 0.9), inset -1px -1px 0 rgba(0, 0, 0, 0.08)":"inset 1px 1px 0 rgba(255, 255, 255, 0.06), inset -1px -1px 0 rgba(0, 0, 0, 0.3)"}, 10px 10px 22px ${i.dark}, -10px -10px 22px ${i.light}`,n=`5px 5px 12px ${i.dark}, -5px -5px 12px ${i.light}`,s=`inset 5px 5px 10px ${i.dark}, inset -5px -5px 10px ${i.light}`;return{id:e,name:t,version:1,author:"Ultra Card",description:"light"===r?"Soft UI in a pale grey: one material lit from the top-left, raised cards and controls, recessed panels, no lines anywhere.":"Soft UI in charcoal: one material lit from the top-left, raised cards and controls, recessed panels, no lines anywhere.",icon:a,source:"builtin",tokens:{surface:"neumorphic",radius:22,radius_sm:16,border_width:0,border_color:"transparent",shadow:o,page_background:i.surface,pane_background:i.surface,pane_border:"none",pane_shadow:s,density:"comfortable",accent:i.accent,font_family:"'Nunito', 'Poppins', 'Quicksand', 'Varela Round', system-ui, sans-serif",palette:{primary:i.primary,on_primary:i.onPrimary,accent:i.accent,card_bg:i.surface,text:i.text,text_secondary:i.textSoft,divider:"transparent"}},card:{card_background:i.surface,card_border_radius:22,card_border_color:"transparent",card_border_width:0,card_padding:22,card_shadow_enabled:!0,card_shadow_color:i.dark,card_shadow_horizontal:10,card_shadow_vertical:10,card_shadow_blur:22,card_shadow_spread:0},modules:{button:{style:"neumorphic"},bar:{bar_style:"neumorphic"},slider_control:{slider_style:"neumorphic"},spinbox:{button_style:"neumorphic",button_shape:"circle"},popup:{trigger_button_style:"neumorphic"},grid:{grid_style:"style_19"},navigation:{nav_style:"uc_neumorphic"},area_summary:{style_preset:"iconic_soft",accent_color:i.accent,tile_border_radius:18},auto_entity_list:{row_style:"card"},unifi:{rack_style:"light"===r?"light":"dark"},activity_feed:{feed_card_style:"flat"},tabs:{style:"switch_2"}},css:`\n.card-container {\n  --secondary-background-color: ${i.surface};\n  --primary-background-color: ${i.surface};\n  --input-fill-color: ${i.surface};\n  --mdc-select-fill-color: ${i.surface};\n  --mdc-text-field-fill-color: ${i.surface};\n  --divider-color: transparent;\n  background-color: ${i.surface} !important;\n  /* A barely-there sheen toward the light so the slab reads as a solid, not a flat fill. */\n  background-image: linear-gradient(145deg, ${i.light}22 0%, ${i.surface}00 45%, ${i.dark}1f 100%) !important;\n  border: none !important;\n  box-shadow: ${o} !important;\n}\n/* Nested surfaces are the same material, recessed into the slab. */\n[style*="--uc-design-surface"] {\n  background-image: linear-gradient(${i.surface}, ${i.surface});\n  border: none;\n  box-shadow: ${s};\n}\n/* Hairlines vanish: neumorphism draws edges with light, not lines. */\n.card-container hr,\n.card-container [class*="divider"],\n.card-container [class*="separator"] {\n  border-color: transparent;\n  background: transparent;\n  box-shadow: ${n};\n}\n`.trim()}}const Re=[S,{id:"glass",name:"Glass",version:1,author:"Ultra Card",description:"Translucent panels with a fine border and backdrop blur. Made for wallpaper backgrounds.",icon:"mdi:blur",source:"builtin",tokens:{surface:"glass",radius:18,radius_sm:12,blur:12,border_width:1,border_color:"rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12)",shadow:"0 8px 24px rgba(0, 0, 0, 0.18)",density:"regular"},card:{card_background:"rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05)",card_border_radius:18,card_border_color:"rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12)",card_border_width:1,card_padding:16,card_shadow_enabled:!0,card_shadow_color:"rgba(0, 0, 0, 0.18)",card_shadow_horizontal:0,card_shadow_vertical:8,card_shadow_blur:24,card_shadow_spread:0},modules:{button:{style:"glass"},bar:{bar_style:"glass",glass_blur_amount:8},slider_control:{slider_style:"glass",glass_blur_amount:8},spinbox:{button_style:"glass"},popup:{trigger_button_style:"glass"},grid:{grid_style:"style_16"},navigation:{nav_style:"uc_ios_glass"},area_summary:{style_preset:"graph_glow"},auto_entity_list:{row_style:"slim"},unifi:{rack_style:"glass"},activity_feed:{feed_card_style:"flat"}},css:".card-container { backdrop-filter: blur(var(--uc-blur, 12px)) saturate(160%); -webkit-backdrop-filter: blur(var(--uc-blur, 12px)) saturate(160%); }"},M,C,A,De("neumorphic-light","Neumorphic Light","mdi:white-balance-sunny","light",{surface:"#e4e8ef",light:"#ffffff",dark:"#b8c2d3",text:"#3b4656",textSoft:"#56637a",primary:"#4f63d2",onPrimary:"#ffffff",accent:"#4f63d2"}),De("neumorphic-dark","Neumorphic Dark","mdi:weather-night","dark",{surface:"#2a2e35",light:"#3c424c",dark:"#131519",text:"#e8ecf2",textSoft:"#aab3c2",primary:"#8b9cff",onPrimary:"#10142a",accent:"#8b9cff"}),Q,oe,ce,be,Le,je,Pe,Ie,F],Be=["flat","glossy","embossed","inset","gradient-overlay","neon-glow","outline","glass","metallic","neumorphic","dashed","dots","minimal"],Ue=["control","track","fill","pane"],Ge=["flat","glossy","embossed","inset","gradient-overlay","neon-glow","outline","glass","metallic","neumorphic"],He={control:Ge,track:Be,fill:Be,pane:Ge},Ve={gradient:"gradient-overlay",neon:"neon-glow",glow:"neon-glow",neumorphism:"neumorphic",frosted:"glass"};function We(e){if("string"!=typeof e)return;const t=e.trim().toLowerCase();return Be.includes(t)?t:Ve[t]}const Ze={button:{style:"control"},popup:{trigger_button_style:"control"},spinbox:{button_style:"control"},bar:{bar_style:"track"},slider_control:{slider_style:"track"},button_input:{button_style:"control"},light:{button_style:"control"}};function Je(e,t){var a;return null===(a=Ze[e])||void 0===a?void 0:a[t]}function Ye(e){switch(e){case"glass":return{control:"glass",track:"glass",fill:"flat",pane:"glass"};case"neumorphic":return{control:"neumorphic",track:"neumorphic",fill:"flat",pane:"neumorphic"};case"glossy":return{control:"glossy",track:"glossy",fill:"glossy",pane:"glossy"};case"outline":return{control:"outline",track:"outline",fill:"flat",pane:"outline"};case"minimal":return{control:"flat",track:"minimal",fill:"flat",pane:"flat"};default:return{control:"flat",track:"flat",fill:"flat",pane:"flat"}}}const Qe=["flat","glass","neumorphic","glossy","outline","minimal"],Xe=["compact","regular","comfortable"],Ke=["builtin","official","community","local"],et=["primary","accent","card_bg","text","text_secondary","divider","on_primary"],tt=/^[a-z0-9][a-z0-9_-]{0,63}$/,at=[/@import/i,/url\s*\(/i,/expression\s*\(/i,/javascript:/i,/behavior\s*:/i,/-moz-binding/i,/<\s*\/?\s*(script|style|iframe)/i,/@font-face/i],rt=/url\(\s*(["']?)data:image\/(svg\+xml|png|jpeg|gif|webp)((?:;[a-z0-9=-]+)*),([^)"']*)\1\s*\)/gi;function it(e,t,a){if(!/svg/i.test(e))return!1;let r=a;try{r=/;base64/i.test(t)?atob(a):decodeURIComponent(a)}catch(e){}return ot.some(e=>e.test(r))}const ot=[/<\s*script/i,/\bon[a-z]+\s*=/i,/javascript:/i,/<\s*foreignObject/i,/(?:xlink:)?href\s*=\s*["']?\s*(?:https?:|\/\/)/i,/url\s*\(\s*["']?\s*(?!#)/i];function nt(e){if(!e)return{ok:!0,reasons:[]};const t=[];e.length>6e4&&t.push("css longer than 60000 chars");const a=e.replace(rt,(e,a,r,i,o)=>(it(r,i,o)&&t.push("inline svg contains script, event handlers or external references"),"inline-image"));for(const e of at)e.test(a)&&t.push(`css contains forbidden pattern ${e.source}`);return{ok:0===t.length,reasons:t}}function st(e,t=500){if("string"!=typeof e)return;const a=e.trim();return a?a.length>t?a.slice(0,t):a:void 0}function lt(e,t=300){const a=st(e,t);if(a&&!(/[{};<>]/.test(a)||/url\s*\(/i.test(a)||/expression\s*\(/i.test(a)))return a}function dt(e,t){if("string"!=typeof e)return;const a=e.trim();if(!a||a.length>t)return;let r=!1;const i=a.replace(rt,(e,t,a,i,o)=>(it(a,i,o)&&(r=!0),"inline-image"));return r||void 0===lt(i,t)?void 0:a}const ct=/^(grayscale|sepia|saturate|hue-rotate|brightness|contrast|invert|opacity)\(\s*-?\d*\.?\d+\s*(deg|turn|rad|%)?\s*\)$/;function pt(e,t,a){const r="string"==typeof e?parseFloat(e):e;if("number"==typeof r&&isFinite(r))return Math.min(a,Math.max(t,r))}function ht(e){return"boolean"==typeof e?e:void 0}function ut(e,t){var a,r,i,o;const n=[];if(!e||"object"!=typeof e)return{theme:null,warnings:["not an object"]};const s=e;let l=null!==(r=null===(a=st(s.id,80))||void 0===a?void 0:a.toLowerCase().replace(/[^a-z0-9_-]/g,"-"))&&void 0!==r?r:"";if((null==t?void 0:t.idPrefix)&&!l.startsWith(t.idPrefix)&&(l=`${t.idPrefix}${l}`),!tt.test(l))return{theme:null,warnings:["invalid id"]};const d=st(s.name,80);if(!d)return{theme:null,warnings:["missing name"]};const c=function(e){var t;if(!e||"object"!=typeof e)return null;const a=e,r={surface:Qe.includes(a.surface)?a.surface:"flat",radius:null!==(t=pt(a.radius,0,200))&&void 0!==t?t:12},i=pt(a.radius_sm,0,200);void 0!==i&&(r.radius_sm=i);const o=pt(a.blur,0,100);void 0!==o&&(r.blur=o);const n=pt(a.border_width,0,20);void 0!==n&&(r.border_width=n);const s=lt(a.border_color);s&&(r.border_color=s);const l=lt(a.shadow,600);l&&(r.shadow=l);const d=dt(a.pane_background,2e4);d&&(r.pane_background=d);const c=lt(a.pane_border);c&&(r.pane_border=c);const p=lt(a.pane_shadow,600);p&&(r.pane_shadow=p);const h=dt(a.page_background,2e5);h&&(r.page_background=h),Xe.includes(a.density)&&(r.density=a.density);const u=lt(a.accent);u&&(r.accent=u);const m=lt(a.font_family,200);m&&(r.font_family=m);const g="boolean"==typeof a.grayscale?a.grayscale?1:void 0:pt(a.grayscale,0,1);void 0!==g&&g>0&&(r.grayscale=g);const b=function(e){const t=st(e,200);if(!t||"none"===t)return;const a=t.split(/\)\s+(?=[a-z])/i).map((e,t,a)=>t<a.length-1?`${e})`:e);return a.every(e=>ct.test(e.trim()))?a.map(e=>e.trim()).join(" "):void 0}(a.color_filter);if(b&&(r.color_filter=b),a.palette&&"object"==typeof a.palette){const e={};for(const t of et){const r=lt(a.palette[t]);r&&(e[t]=r)}Object.keys(e).length&&(r.palette=e)}if(a.recipes&&"object"==typeof a.recipes){const e={};for(const t of Ue){const r=We(a.recipes[t]);r&&He[t].includes(r)&&(e[t]=r)}Object.keys(e).length&&(r.recipes=e)}return r}(s.tokens);if(!c)return{theme:null,warnings:["missing tokens"]};const p={id:l,name:d,version:null!==(i=pt(s.version,1,1e6))&&void 0!==i?i:1,tokens:c},h=st(s.author,80);h&&(p.author=h);const u=st(s.description,600);u&&(p.description=u);const m=st(s.preview,4e3);m&&/^(https:\/\/|data:image\/(png|jpe?g|webp);base64,)/i.test(m)?p.preview=m:m&&n.push("preview dropped (must be https or data:image)");const g=st(s.icon,60);g&&/^mdi:[a-z0-9-]+$/.test(g)&&(p.icon=g);const b=null!==(o=null==t?void 0:t.source)&&void 0!==o?o:Ke.includes(s.source)?s.source:void 0;b&&(p.source=b);const _=function(e){if(!e||"object"!=typeof e)return;const t=e,a={};for(const e of v){if(!(e in t))continue;const r=t[e];switch(e){case"card_transparent":case"card_shadow_enabled":{const t=ht(r);void 0!==t&&(a[e]=t);break}case"card_background":case"card_border_color":case"card_shadow_color":{const t=lt(r);t&&(a[e]=t);break}default:{const t=pt(r,-200,400);void 0!==t&&(a[e]=t)}}}return Object.keys(a).length?a:void 0}(s.card);_&&(p.card=_);const f=function(e){if(!e||"object"!=typeof e)return;const t={};for(const[a,r]of Object.entries(y)){const i=e[a];if(!i||"object"!=typeof i)continue;const o={};for(const e of r){const t=i[e];if("number"==typeof t&&isFinite(t))o[e]=t;else{const a=lt(t,100);a&&(o[e]=a)}}Object.keys(o).length&&(t[a]=o)}return Object.keys(t).length?t:void 0}(s.modules);f&&(p.modules=f);const x=st(s.css,60001);if(x){const e=nt(x);e.ok?p.css=x:n.push(...e.reasons.map(e=>`css dropped: ${e}`))}return{theme:p,warnings:n}}var mt=a(9286),gt=a(8690),bt=a(3045);const _t=[1,1.5,2,3,4,5,6,8,9,10,12,13,14,16,18,20,22,24].map(e=>`  --uc-r-${String(e).replace(".","_")}: min(calc(${e}px * var(--uc-radius-scale, 1)), var(--uc-radius-inner, 999px));`).join("\n"),ft=(`\n[style*="--uc-design-surface"]:not([style*="border-radius"]) {\n  border-radius: var(--uc-radius-inner, var(--uc-radius-sm));\n}\n[style*="--uc-design-surface"] {\n  box-shadow: var(--uc-pane-shadow, none);\n}\n[data-uc-role="pane"] {\n  backdrop-filter: var(--uc-pane-backdrop, none);\n  -webkit-backdrop-filter: var(--uc-pane-backdrop, none);\n}\n[data-uc-role="pane"]:not([style*="box-shadow"]) {\n  box-shadow: var(--uc-pane-shadow, none);\n}\n.card-container {\n  background: var(--uc-surface-bg, var(--ha-card-background, var(--card-background-color, white)));\n  box-shadow: var(--uc-shadow, var(--ha-card-box-shadow, none));\n  backdrop-filter: var(--uc-surface-backdrop, var(--ha-card-backdrop-filter, none));\n  -webkit-backdrop-filter: var(--uc-surface-backdrop, var(--ha-card-backdrop-filter, none));\n  filter: var(--uc-color-filter, none);\n${_t}\n}\n`.trim(),{flat:{width:1,color:"var(--divider-color)"},glass:{width:1,color:"rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12)"},outline:{width:1,color:"var(--divider-color)"},neumorphic:{width:0,color:void 0},glossy:{width:0,color:void 0},minimal:{width:0,color:void 0}});function vt(e){return e?Object.assign(Object.assign({},function(e){var t,a,r;const i=null!==(t=ft[e.surface])&&void 0!==t?t:ft.flat,o={card_border_radius:e.radius,card_border_width:null!==(a=e.border_width)&&void 0!==a?a:i.width},n=null!==(r=e.border_color)&&void 0!==r?r:i.color;return n&&(o.card_border_color=n),"outline"!==e.surface&&"minimal"!==e.surface||(o.card_background="transparent"),o}(e.tokens)),e.card):{}}function yt(e){var t,a;const r=Ye(null===(t=null==e?void 0:e.tokens)||void 0===t?void 0:t.surface);return(null===(a=null==e?void 0:e.tokens)||void 0===a?void 0:a.recipes)?Object.assign(Object.assign({},r),e.tokens.recipes):r}const xt="ultra-card-theme-library",wt="ultra-card-global-theme",kt="ultra-card-theme-paint-page",$t=new WeakMap,Lt=new WeakMap;let St=0;const Mt=Math.floor(4294967295*Math.random())>>>0,Ct={compact:"0.875",regular:"1",comfortable:"1.125"};function Tt(e){const t=Math.min(1.75,Math.max(0,e/12));return String(Math.round(100*t)/100)}const Ot={flat:["var(--secondary-background-color)","1px solid var(--divider-color)","none"],glossy:["linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.02)), var(--card-background-color)","none","inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.15)"],embossed:["var(--secondary-background-color)","1px solid rgba(0, 0, 0, 0.12)","inset 0 1px 0 rgba(255, 255, 255, 0.18), inset 0 -1px 0 rgba(0, 0, 0, 0.12)"],inset:["var(--secondary-background-color)","none","inset 0 2px 5px rgba(0, 0, 0, 0.25)"],"gradient-overlay":["linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), var(--secondary-background-color)","none","none"],"neon-glow":["var(--secondary-background-color)","1px solid rgba(var(--rgb-primary-color), 0.5)","0 0 8px rgba(var(--rgb-primary-color), 0.45)"],outline:["transparent","1px solid var(--divider-color)","none"],glass:["rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05)","1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.1)","none"],metallic:["linear-gradient(90deg, #d7d7d7, #f0f0f0 50%, #d7d7d7)","1px solid #bbb","inset 0 1px 0 rgba(255, 255, 255, 0.6)"],neumorphic:["var(--card-background-color)","none","inset 4px 4px 9px rgba(0, 0, 0, 0.22), inset -4px -4px 9px rgba(255, 255, 255, 0.07)"]};function jt(e,t){if(e<=0)return 0;const a=e-(null!=t?t:16),r=.5*e,i=Math.max(r,e-4);return Math.round(10*Math.min(i,Math.max(r,a)))/10}const zt={primary:["--primary-color"],accent:["--accent-color"],card_bg:["--card-background-color","--ha-card-background"],text:["--primary-text-color"],text_secondary:["--secondary-text-color"],divider:["--divider-color"],on_primary:["--text-primary-color"]};function qt(e){const t=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());if(!t)return null;let a=t[1];3===a.length&&(a=a.split("").map(e=>e+e).join(""));const r=parseInt(a,16);return`${r>>16&255}, ${r>>8&255}, ${255&r}`}const At=new class{constructor(){this._library=new Map,this._globalDefaultId=null,this._paintPage=!0,this._listeners=new Set,this._hass=null,this._connectLoaded=!1,this._connectMissing=!1,this._loadPromise=null,this._pendingGlobalSync=!1,this._lastSyncAttempt=0,this._globalWrites=0,this._loadFromStorage(),"undefined"!=typeof window&&window.addEventListener("storage",e=>{e.key!==xt&&e.key!==wt&&e.key!==kt||(this._loadFromStorage(),this._notify())})}getPaintPage(){return this._paintPage}setPaintPage(e){e!==this._paintPage&&(this._paintPage=e,e?(0,mt.Pw)(kt):(0,mt.FX)(kt,"0"),this._notify())}pageBackgroundFor(e){if(this._paintPage)return(null==e?void 0:e.tokens.page_background)||void 0}getBuiltinThemes(){return Re}getLibraryThemes(){return[...this._library.values()]}getAllThemes(){return[...Re,...this._library.values()]}getTheme(e){var t;if(e)return null!==(t=Re.find(t=>t.id===e))&&void 0!==t?t:this._library.get(e)}isBuiltin(e){return Re.some(t=>t.id===e)}saveToLibrary(e,t){const{theme:a,warnings:r}=ut(e,t);return a?(this.isBuiltin(a.id)&&(a.id=`local-${a.id}`),a.source||(a.source="local"),this._library.set(a.id,a),this._saveLibrary(),this._notify(),a):(bt.v3&&console.warn("[UltraCard themes] rejected theme:",r),null)}removeFromLibrary(e){return!!this._library.delete(e)&&(this._saveLibrary(),this._globalDefaultId===e?this.setGlobalDefault(null):this._notify(),!0)}exportTheme(e){const t=this.getTheme(e);if(!t)return null;const{source:a}=t,r=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a}(t,["source"]);return JSON.stringify(r,null,2)}getGlobalDefaultId(){return this._globalDefaultId}setGlobalDefault(e){const t=e&&this.getTheme(e)?e:null;t!==this._globalDefaultId&&(this._globalDefaultId=t,this._globalWrites++,t?(0,mt.FX)(wt,t):(0,mt.Pw)(wt),this._notify(),this._syncGlobalToConnect())}resolveThemeId(e){const t=null==e?void 0:e.uc_theme;return"none"===t?"none":t&&this.getTheme(t)?t:this._globalDefaultId&&this.getTheme(this._globalDefaultId)?this._globalDefaultId:x}resolveTheme(e){var t;const a=this.resolveThemeId(e);return"none"===a||a===x?null:null!==(t=this.getTheme(a))&&void 0!==t?t:null}getCardChrome(e){return vt(this.resolveTheme(e))}getModuleDefault(e,t,a){var r,i;const o=this.resolveTheme(e);if(!o)return;const n=y[t];if(!n||!n.includes(a))return;const s=null===(i=null===(r=o.modules)||void 0===r?void 0:r[t])||void 0===i?void 0:i[a];if(void 0!==s)return s;const l=Je(t,a);return l?function(e,t){const a=We(e);return a&&He[t].includes(a)?a:"flat"}(yt(o)[l],l):void 0}getRecipes(e){return yt(this.resolveTheme(e))}resolveModuleStyle(e,t,a,r,i){var o,n;return null!=(n=r)&&""!==n&&"theme"!==n?r:null!==(o=this.getModuleDefault(e,t,a))&&void 0!==o?o:i}cardSeed(e){let t=Lt.get(e);return void 0===t&&(t=St++,Lt.set(e,t)),function(e,t){const a=Math.round(t%360+137.50776*e)%360;let r=(Math.imul(e+1,2654435761)^t)>>>0||1;const i=()=>(r^=r<<13,r>>>=0,r^=r>>>17,r^=r<<5,r>>>=0,Math.round(r/4294967296*100)/100);return{hue:a,seeds:[i(),i(),i()]}}(t,Mt)}getHostVars(e){var t,a,r,i,o,n,s;if(!e)return{};const d=e.tokens,h=function(e,t){var a,r,i,o,n,s,l;const d=null!==(a=t.blur)&&void 0!==a?a:12,c=t.borderWidth,p=t.borderColor,h=(e,t)=>`${null!=c?c:e}px solid ${null!=p?p:t}`;switch(e){case"glass":return{background:"rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05)",border:h(1,"rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12)"),shadow:null!==(r=t.shadow)&&void 0!==r?r:"0 8px 24px rgba(0, 0, 0, 0.18)",backdropFilter:`blur(${d}px) saturate(160%)`};case"neumorphic":return{background:"var(--card-background-color, var(--ha-card-background, white))",border:h(0,"transparent"),shadow:null!==(i=t.shadow)&&void 0!==i?i:"6px 6px 14px rgba(0, 0, 0, 0.14), -6px -6px 14px rgba(255, 255, 255, 0.08)",backdropFilter:"none"};case"glossy":return{background:"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0)), var(--card-background-color, var(--ha-card-background, white))",border:h(0,"transparent"),shadow:null!==(o=t.shadow)&&void 0!==o?o:"0 4px 16px rgba(0, 0, 0, 0.12)",backdropFilter:"none"};case"outline":return{background:"transparent",border:h(1,"var(--divider-color)"),shadow:null!==(n=t.shadow)&&void 0!==n?n:"none",backdropFilter:"none"};case"minimal":return{background:"transparent",border:h(0,"transparent"),shadow:null!==(s=t.shadow)&&void 0!==s?s:"none",backdropFilter:"none"};default:return{background:"var(--card-background-color, var(--ha-card-background, white))",border:h(1,"var(--divider-color)"),shadow:null!==(l=t.shadow)&&void 0!==l?l:"none",backdropFilter:"none"}}}(d.surface,{blur:d.blur,borderWidth:d.border_width,borderColor:d.border_color,shadow:d.shadow}),m=Object.assign({"--uc-theme-surface":d.surface,"--uc-radius":`${d.radius}px`,"--uc-radius-sm":`${null!==(t=d.radius_sm)&&void 0!==t?t:Math.round(d.radius/2)}px`,"--uc-blur":`${null!==(a=d.blur)&&void 0!==a?a:12}px`,"--uc-border-width":`${null!==(r=d.border_width)&&void 0!==r?r:1}px`,"--uc-surface-bg":h.background,"--uc-surface-border":h.border,"--uc-surface-backdrop":h.backdropFilter,"--uc-shadow":h.shadow,"--uc-density":null!==(o=Ct[null!==(i=d.density)&&void 0!==i?i:"regular"])&&void 0!==o?o:"1","--uc-radius-scale":Tt(d.radius),"--uc-radius-inner":`${jt(d.radius,null===(n=e.card)||void 0===n?void 0:n.card_padding)}px`},function(e,t){var a,r,i,o,n;const s={flat:["var(--secondary-background-color)","1px solid var(--divider-color)","none"],glass:["rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05)","1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.1)","none"],neumorphic:["var(--card-background-color)","none","inset 4px 4px 9px rgba(0, 0, 0, 0.22), inset -4px -4px 9px rgba(255, 255, 255, 0.07)"],glossy:["linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.02)), var(--card-background-color)","none","inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 2px 6px rgba(0, 0, 0, 0.15)"],outline:["transparent","1px solid var(--divider-color)","none"],minimal:["transparent","none","none"]};let[l,d,c]=null!==(a=s[e.surface])&&void 0!==a?a:s.flat;const p=Ye(e.surface).pane,h=null!=t?t:p;h!==p&&Ot[h]&&([l,d,c]=Ot[h]);const u={"--uc-pane-bg":null!==(r=e.pane_background)&&void 0!==r?r:l,"--uc-pane-border":null!==(i=e.pane_border)&&void 0!==i?i:d,"--uc-pane-shadow":null!==(o=e.pane_shadow)&&void 0!==o?o:c};return"glass"===h&&(u["--uc-pane-backdrop"]=`blur(${Math.round((null!==(n=e.blur)&&void 0!==n?n:12)/2)}px) saturate(140%)`),u}(d,yt(e).pane));for(const[t,a]of Object.entries(yt(e)))m[`--uc-recipe-${t}`]=a;if(d.border_color&&(m["--uc-border-color"]=d.border_color),d.accent&&(m["--uc-accent"]=d.accent),d.font_family&&(m["--uc-font-family"]=d.font_family),d.color_filter?m["--uc-color-filter"]=d.color_filter:d.grayscale&&d.grayscale>0&&(m["--uc-color-filter"]=`grayscale(${Math.min(1,d.grayscale)})`),d.palette){for(const[e,t]of Object.entries(d.palette))if(t)for(const a of null!==(s=zt[e])&&void 0!==s?s:[]){m[a]=t;const e=qt(t);e&&a.endsWith("-color")&&(m[`--rgb${a.slice(1)}`]=e)}!function(e,t){const a=(e,a)=>{void 0===t[e]&&(t[e]=a)},r=(e,t)=>{a(e,c(t)),e.endsWith("-color")&&a(`--rgb${e.slice(1)}`,function(e){return`${e.r}, ${e.g}, ${e.b}`}(t))},i=l(e.card_bg),o=l(e.text),n=l(e.primary),s=l(e.text_secondary);if(i&&i.a>=.5){const e=_(i,.06);if(r("--secondary-background-color",e),r("--primary-background-color",_(i,.03)),a("--mdc-theme-surface",c(i)),a("--input-fill-color",c(e)),a("--mdc-select-fill-color",c(e)),a("--mdc-text-field-fill-color",c(e)),!o){const e=f(i);r("--primary-text-color",e),r("--secondary-text-color",p(e,.7))}}if(o){a("--mdc-theme-on-surface",c(o)),a("--input-ink-color",c(o)),a("--mdc-select-ink-color",c(o)),a("--mdc-text-field-ink-color",c(o)),r("--disabled-text-color",p(o,.38));const t=null!=s?s:p(o,.7);a("--input-label-ink-color",c(t)),a("--input-dropdown-icon-color",c(t)),s||r("--secondary-text-color",t),e.divider||r("--divider-color",p(o,.12))}if(n){const e=f(n);r("--text-primary-color",e),a("--mdc-theme-primary",c(n)),a("--mdc-theme-on-primary",c(e))}i&&i.a>=.5&&u(i)&&(a("--uc-bar-text",c(null!=o?o:f(i))),a("--uc-bar-text-shadow","0 1px 0 rgba(255, 255, 255, 0.6)"))}(d.palette,m)}return m}applyThemeToHost(e,t,a){const r=$t.get(e),i=t?`${t.id}@${t.version}#${a?`${a.hue}/${a.seeds.join(",")}`:""}`:"";if((null==r?void 0:r.key)===i)return!1;if(r)for(const t of r.props)e.style.removeProperty(t);if(!t)return $t.delete(e),e.removeAttribute("data-uc-theme"),!!r;const o=this.getHostVars(t);a&&(o["--uc-card-hue"]=String(a.hue),a.seeds.forEach((e,t)=>o[`--uc-card-seed-${t+1}`]=String(e)));for(const[t,a]of Object.entries(o))e.style.setProperty(t,a);return e.setAttribute("data-uc-theme",t.id),$t.set(e,{key:i,props:Object.keys(o)}),!0}subscribe(e){return this._listeners.add(e),()=>this._listeners.delete(e)}_notify(){for(const e of this._listeners)try{e()}catch(e){bt.v3&&console.warn("[UltraCard themes] listener failed",e)}"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("ultra-card-theme-changed",{detail:{globalDefault:this._globalDefaultId}}))}_loadFromStorage(){this._library.clear();const e=(0,mt.bi)(xt);if(e)try{const t=JSON.parse(e);if(Array.isArray(t))for(const e of t){const{theme:t}=ut(e);t&&!this.isBuiltin(t.id)&&this._library.set(t.id,t)}}catch(e){}const t=(0,mt.bi)(wt);this._globalDefaultId=t&&this.getTheme(t)?t:null,this._paintPage="0"!==(0,mt.bi)(kt)}_saveLibrary(){(0,mt.FX)(xt,JSON.stringify([...this._library.values()]))}setHass(e){if(this._hass=e,e&&!this._connectMissing){if(this._pendingGlobalSync){const e=Date.now();if(e-this._lastSyncAttempt<5e3)return;return this._lastSyncAttempt=e,this._connectLoaded=!0,void this._syncGlobalToConnect()}this._connectLoaded||this._loadGlobalFromConnect(e)}}async _loadGlobalFromConnect(e){if(null==e?void 0:e.callApi)return this._loadPromise||(this._loadPromise=(async()=>{var t,a,r;try{if(!(0,gt.fu)(e).installed)return void(this._connectMissing=!0);const t=this._globalWrites,a=await e.callApi("GET","ultra_card_pro_cloud/theme_settings");if(this._connectLoaded=!0,this._globalWrites!==t)return;const r="string"==typeof(null==a?void 0:a.global_theme)?a.global_theme:null;null===r||r===this._globalDefaultId||""!==r&&!this.getTheme(r)||(this._globalDefaultId=r||null,r?(0,mt.FX)(wt,r):(0,mt.Pw)(wt),this._notify())}catch(e){const i=null!==(a=null!==(t=null==e?void 0:e.status)&&void 0!==t?t:null==e?void 0:e.status_code)&&void 0!==a?a:null===(r=null==e?void 0:e.response)||void 0===r?void 0:r.status;404!==i&&401!==i&&403!==i||(this._connectLoaded=!0,this._connectMissing=404===i),bt.v3&&console.debug("[UltraCard themes] Connect theme settings unavailable:",e)}finally{this._loadPromise=null}})()),this._loadPromise}_syncGlobalToConnect(){var e;if(this._connectMissing)return;const t=this._hass;(null==t?void 0:t.callApi)?(this._pendingGlobalSync=!1,t.callApi("POST","ultra_card_pro_cloud/theme_settings",{global_theme:null!==(e=this._globalDefaultId)&&void 0!==e?e:""}).catch(e=>{var t,a,r;404===(null!==(a=null!==(t=null==e?void 0:e.status)&&void 0!==t?t:null==e?void 0:e.status_code)&&void 0!==a?a:null===(r=null==e?void 0:e.response)||void 0===r?void 0:r.status)?this._connectMissing=!0:this._pendingGlobalSync=!0,bt.v3&&console.debug("[UltraCard themes] Connect theme sync failed:",e)})):this._pendingGlobalSync=!0}},Pt=new Set(["custom:ultra-card"]),Nt=new class{constructor(){this._undo=null}async listDashboards(e){const t=[{urlPath:null,title:"Overview (default)",mode:"storage"}];try{const a=await e.callWS({type:"lovelace/dashboards/list"});if(Array.isArray(a))for(const e of a)(null==e?void 0:e.url_path)&&t.push({urlPath:e.url_path,title:e.title||e.url_path,mode:e.mode})}catch(e){bt.v3&&console.debug("[UltraCard themes] dashboards/list failed",e)}return t}currentDashboard(){if("undefined"==typeof window)return null;const e=window.location.pathname,t=/^\/([^/]+)/.exec(e);if(!t)return null;const a=t[1];return"lovelace"===a||["ultra-card-hub","config","developer-tools","hacs","logbook","history","map","energy","todo","profile"].includes(a)?null:a}async countUltraCards(e,t){const a=await this._load(e,t);let r=0;return this._walk(a,()=>{r++}),r}async applyTheme(e,t,a){if("yaml"===t.mode)throw new Error("This dashboard is managed in YAML and cannot be edited from the Hub.");const r=await this._load(e,t),i=JSON.parse(JSON.stringify(r));let o=0,n=0;return this._walk(i,e=>{var t;o++;const r=null!==(t=e.uc_theme)&&void 0!==t?t:"",i=null!=a?a:"";r!==i&&(i?e.uc_theme=i:delete e.uc_theme,n++)}),n>0&&(await this._save(e,t,i),this._undo={ref:t,config:r}),{cardsUpdated:n,cardsSeen:o,dashboard:t}}canUndo(){var e,t;return null!==(t=null===(e=this._undo)||void 0===e?void 0:e.ref)&&void 0!==t?t:null}async undo(e){if(!this._undo)return null;const{ref:t,config:a}=this._undo;return await this._save(e,t,a),this._undo=null,t}async _load(e,t){const a=await e.callWS({type:"lovelace/config",url_path:t.urlPath});if(!a||"object"!=typeof a)throw new Error("Dashboard configuration could not be loaded.");return a}async _save(e,t,a){await e.callWS({type:"lovelace/config/save",url_path:t.urlPath,config:a})}_walk(e,t,a=0){if(!e||"object"!=typeof e||a>40)return;if(Array.isArray(e)){for(const r of e)this._walk(r,t,a+1);return}const r=e;"string"==typeof r.type&&Pt.has(r.type)&&t(r);for(const[e,i]of Object.entries(r))"type"!==e&&i&&"object"==typeof i&&this._walk(i,t,a+1)}};var Ft=a(1001);const Et=new class{confirm(e,t,a={}){return new Promise(r=>{const{destructive:i=!1,confirmText:o="Confirm",cancelText:n="Cancel"}=a,{overlay:s,style:l}=this._buildOverlay();s.innerHTML='\n        <div class="uc-cd-backdrop"></div>\n        <div class="uc-cd-panel" role="dialog" aria-modal="true" aria-labelledby="uc-cd-title">\n          <h2 class="uc-cd-title" id="uc-cd-title"></h2>\n          <p class="uc-cd-message"></p>\n          <div class="uc-cd-actions"></div>\n        </div>\n      ',s.querySelector(".uc-cd-title").textContent=e,s.querySelector(".uc-cd-message").textContent=t;const d=s.querySelector(".uc-cd-actions"),c=this._makeButton(n,!1,i),p=this._makeButton(o,!0,i);d.appendChild(c),d.appendChild(p);let h=!1;const u=e=>{h||(h=!0,document.removeEventListener("keydown",m),l.remove(),s.remove(),r(e))},m=e=>{if("Escape"===e.key)return e.preventDefault(),void u(!1);if("Enter"===e.key){const t=document.activeElement;if(t===c)return e.preventDefault(),void u(!1);if(t===p)return e.preventDefault(),void u(!0);if(i)return;e.preventDefault(),u(!0)}};s.querySelector(".uc-cd-backdrop").addEventListener("click",()=>u(!1)),c.addEventListener("click",()=>u(!1)),p.addEventListener("click",()=>u(!0)),document.body.appendChild(s),document.addEventListener("keydown",m),requestAnimationFrame(()=>(i?c:p).focus())})}prompt(e,t,a=""){return new Promise(r=>{const{overlay:i,style:o}=this._buildOverlay();i.innerHTML='\n        <div class="uc-cd-backdrop"></div>\n        <div class="uc-cd-panel" role="dialog" aria-modal="true" aria-labelledby="uc-cd-title">\n          <h2 class="uc-cd-title" id="uc-cd-title"></h2>\n          <p class="uc-cd-message"></p>\n          <input class="uc-cd-input" type="text" />\n          <div class="uc-cd-actions"></div>\n        </div>\n      ',i.querySelector(".uc-cd-title").textContent=e,i.querySelector(".uc-cd-message").textContent=t;const n=i.querySelector(".uc-cd-input");n.value=a;const s=i.querySelector(".uc-cd-actions"),l=this._makeButton("Cancel",!1,!1),d=this._makeButton("OK",!0,!1);s.appendChild(l),s.appendChild(d);let c=!1;const p=e=>{c||(c=!0,document.removeEventListener("keydown",h),o.remove(),i.remove(),r(e))},h=e=>{"Escape"===e.key&&(e.preventDefault(),p(null)),"Enter"===e.key&&(e.preventDefault(),p(n.value.trim()||null))};i.querySelector(".uc-cd-backdrop").addEventListener("click",()=>p(null)),l.addEventListener("click",()=>p(null)),d.addEventListener("click",()=>p(n.value.trim()||null)),document.body.appendChild(i),document.addEventListener("keydown",h),requestAnimationFrame(()=>n.focus())})}_makeButton(e,t,a){const r=document.createElement("button");return r.type="button",r.className=t?"uc-cd-btn primary":"uc-cd-btn secondary",t&&a&&r.classList.add("destructive"),r.textContent=e,r}_buildOverlay(){const e=document.createElement("div");e.className="uc-cd-overlay";const t=document.createElement("style");return t.textContent=`\n      .uc-cd-overlay {\n        position: fixed;\n        inset: 0;\n        z-index: ${Ft.Mu.DIALOG_OVERLAY};\n        display: grid;\n        place-items: center;\n      }\n      .uc-cd-backdrop {\n        position: absolute;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.5);\n      }\n      .uc-cd-panel {\n        position: relative;\n        width: min(92vw, 480px);\n        border-radius: 12px;\n        background: var(--card-background-color, #1f1f1f);\n        color: var(--primary-text-color);\n        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);\n        padding: 20px 20px 16px;\n      }\n      .uc-cd-title {\n        margin: 0 0 8px;\n        font-size: 18px;\n        font-weight: 600;\n        line-height: 1.3;\n        color: var(--primary-text-color);\n      }\n      .uc-cd-message {\n        margin: 0 0 16px;\n        font-size: 14px;\n        line-height: 1.5;\n        color: var(--secondary-text-color);\n      }\n      .uc-cd-input {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 8px 10px;\n        margin-bottom: 16px;\n        border: 1px solid var(--divider-color);\n        border-radius: 6px;\n        background: var(--secondary-background-color, #2b2b2b);\n        color: var(--primary-text-color);\n        font-size: 14px;\n        outline: none;\n      }\n      .uc-cd-input:focus {\n        border-color: var(--primary-color);\n      }\n      .uc-cd-actions {\n        display: flex;\n        justify-content: flex-end;\n        gap: 8px;\n      }\n      .uc-cd-btn {\n        border-radius: 6px;\n        min-height: 36px;\n        padding: 0 16px;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        transition: opacity 0.15s ease;\n      }\n      .uc-cd-btn:hover { opacity: 0.85; }\n      .uc-cd-btn.secondary {\n        border: 1px solid var(--divider-color);\n        background: transparent;\n        color: var(--primary-text-color);\n      }\n      .uc-cd-btn.primary {\n        border: 1px solid var(--primary-color);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .uc-cd-btn.primary.destructive {\n        border-color: var(--error-color, #f44336);\n        background: var(--error-color, #f44336);\n        color: #fff;\n      }\n    `,document.head.appendChild(t),{overlay:e,style:t}}},It="https://ultracard.io/wp-json/ultra-card/v1",Dt="ultra-card-themes-v1:",Rt=8e3;function Bt(e){if(!e||"object"!=typeof e)return null;const t=e,a=Number(t.id);if(!Number.isFinite(a)||a<=0)return null;const r="official"===t.source?"official":"community",{theme:i,warnings:o}=ut(t.definition,{source:r,idPrefix:"wp-"});if(!i)return null;const n="string"==typeof t.catalog_id&&t.catalog_id?t.catalog_id:i.id;i.id=n;const s=Math.max(1,Number(t.version)||i.version||1);i.version=s;const l=Array.isArray(t.tags)?t.tags.map(e=>String(e).trim()).filter(Boolean):[],d="string"==typeof t.preview&&t.preview?t.preview:i.preview;return{id:a,catalogId:n,name:String(t.name||i.name),description:String(t.description||i.description||""),author:String(t.author||i.author||"Community"),source:r,tags:l,preview:d,downloads:Number(t.downloads)||0,rating:Math.max(0,Math.min(5,Number(t.rating)||0)),ratingCount:Math.max(0,Number(t.rating_count)||0),myRating:Math.max(0,Math.min(5,Number(t.my_rating)||0)),authorId:Number(t.author_id)||0,version:s,created:String(t.date||""),updated:String(t.modified||""),definition:i,partial:!0===t.definition_partial,warnings:o}}const Ut=new class{constructor(){this._memory=new Map,this._inflight=new Map}async fetchThemes(e={}){var t,a,r,i,o;const n=JSON.stringify({page:null!==(t=e.page)&&void 0!==t?t:1,per_page:null!==(a=e.per_page)&&void 0!==a?a:50,search:null!==(r=e.search)&&void 0!==r?r:"",tag:null!==(i=e.tag)&&void 0!==i?i:"",orderby:null!==(o=e.orderby)&&void 0!==o?o:"date"}),s=this._read(n,3e5);if(s)return s;const l=this._inflight.get(n);if(l)return l;const d=this._fetch(e).then(e=>(this._write(n,e),e)).catch(e=>{bt.v3&&console.warn("[UltraCard themes] catalog fetch failed:",e);const t=this._read(n,864e5);if(t)return t;throw e instanceof Error?e:new Error(String(e))}).finally(()=>this._inflight.delete(n));return this._inflight.set(n,d),d}async fetchTheme(e){const t=await fetch(`${It}/themes/${e}`,{headers:{Accept:"application/json"},signal:AbortSignal.timeout(Rt)});return t.ok?Bt(await t.json()):null}trackDownload(e){fetch(`${It}/themes/${e}/track-download`,{method:"POST",headers:{"Content-Type":"application/json"},signal:AbortSignal.timeout(Rt)}).catch(e=>bt.v3&&console.debug("[UltraCard themes] track-download failed:",e))}installState(e){const t=At.getTheme(e.catalogId);return t?t.version<e.version?"update_available":"installed":"not_installed"}async install(e){let t=e;if(e.partial){const a=await this.fetchTheme(e.id).catch(()=>null);if(!a||a.partial)return null;t=a}const a=this.installState(t),r=At.saveToLibrary(t.definition,{source:t.source});return r&&"installed"!==a&&this.trackDownload(t.id),r}clearCache(){this._memory.clear();try{for(const e of Object.keys(localStorage))e.startsWith(Dt)&&(0,mt.Pw)(e)}catch(e){}}async _fetch(e){var t,a,r,i,o,n,s;const l=new URLSearchParams;l.set("page",String(null!==(t=e.page)&&void 0!==t?t:1)),l.set("per_page",String(null!==(a=e.per_page)&&void 0!==a?a:50)),e.search&&l.set("search",e.search),e.tag&&l.set("tag",e.tag),l.set("orderby",null!==(r=e.orderby)&&void 0!==r?r:"date");const d=await fetch(`${It}/themes?${l.toString()}`,{headers:{Accept:"application/json"},signal:AbortSignal.timeout(Rt)});if(!d.ok)throw new Error(`HTTP ${d.status}: ${d.statusText}`);const c=await d.json(),p=(Array.isArray(null==c?void 0:c.themes)?c.themes:[]).map(Bt).filter(e=>!!e);return{themes:p,total:Number(null!==(i=c.total)&&void 0!==i?i:p.length),pages:Number(null!==(o=c.total_pages)&&void 0!==o?o:1),page:Number(null!==(s=null!==(n=c.page)&&void 0!==n?n:e.page)&&void 0!==s?s:1)}}_read(e,t){const a=Date.now(),r=this._memory.get(e);if(r&&a-r.timestamp<t)return r.data;const i=(0,mt.bi)(Dt+e);if(!i)return null;try{const r=JSON.parse(i);if(!(null==r?void 0:r.data)||"number"!=typeof r.timestamp)return null;if(a-r.timestamp>=t)return null;const o=r.data.themes.map(e=>{const{theme:t}=ut(e.definition,{source:e.source});return t?Object.assign(Object.assign({},e),{definition:t}):null}).filter(e=>!!e),n=Object.assign(Object.assign({},r.data),{themes:o});return this._memory.set(e,{data:n,timestamp:r.timestamp}),n}catch(t){return(0,mt.Pw)(Dt+e),null}}_write(e,t){const a={data:t,timestamp:Date.now()};this._memory.set(e,a),(0,mt.FX)(Dt+e,JSON.stringify(a))}};var Gt=a(378);const Ht="https://ultracard.io/wp-json/ultra-card/v1";function Vt(e){if(null==e||"object"!=typeof e)return e;const t=e;return"_body"in t&&void 0!==t._body?Vt(t._body):"data"in t&&null!=t.data&&"object"==typeof t.data&&!("id"in t)?t.data:e}function Wt(e){var t,a,r,i,o;const n=null!==(t=Vt(e))&&void 0!==t?t:{},s=Number(n.id);if(!Number.isFinite(s)||s<=0)throw new Error("Invalid theme response: missing id");const l="string"==typeof n.catalog_id&&n.catalog_id?n.catalog_id:`wp-${s}`,{theme:d}=ut(n.definition,{idPrefix:"wp-"});d&&(d.id=l);const c={id:s,catalogId:l,name:String(null!==(a=n.name)&&void 0!==a?a:""),description:String(null!==(r=n.description)&&void 0!==r?r:""),tags:(p=n.tags,Array.isArray(p)?p.map(e=>String(e)).filter(Boolean):"string"==typeof p&&p.trim()?p.split(",").map(e=>e.trim()).filter(Boolean):[]),status:String(null!==(i=n.status)&&void 0!==i?i:"pending"),review_status:String(null!==(o=n.review_status)&&void 0!==o?o:"pending")||"pending",has_pending_revision:Boolean(n.has_pending_revision),downloads:Number(n.downloads)||0,rating:Math.max(0,Math.min(5,Number(n.rating)||0)),rating_count:Math.max(0,Number(n.rating_count)||0),version:Math.max(1,Number(n.version)||1),definition:d};var p;return"string"==typeof n.moderator_note&&n.moderator_note&&(c.moderator_note=n.moderator_note),void 0!==n.pending_revision&&(c.pending_revision=n.pending_revision&&"object"==typeof n.pending_revision?n.pending_revision:null),"string"==typeof n.preview&&n.preview&&(c.preview=n.preview),"string"==typeof n.submitted_at&&(c.submitted_at=n.submitted_at),"string"==typeof n.reviewed_at&&(c.reviewed_at=n.reviewed_at),null!=n.author_id&&Number.isFinite(Number(n.author_id))&&(c.author_id=Number(n.author_id)),c}async function Zt(e){return e.json().catch(()=>null)}async function Jt(e,t){const a=await Zt(e),r=new Error(function(e,t){if(!e||"object"!=typeof e)return t;const a=e;if("string"==typeof a.message&&a.message)return a.message;if("string"==typeof a.error&&a.error)return a.error;if(a.data&&"object"==typeof a.data&&"message"in a.data){const e=a.data.message;if("string"==typeof e&&e)return e}return t}(a,`${t} (HTTP ${e.status})`));throw r.status=e.status,r}function Yt(e){if(!Gt.xd.isAuthenticated())throw new Error(`Authentication required to ${e}`)}function Qt(e){const t={};return void 0!==e.name&&(t.name=e.name),void 0!==e.description&&(t.description=e.description),void 0!==e.tags&&(t.tags=e.tags),void 0!==e.definition&&(t.definition=function(e){const{source:t}=e;return function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a}(e,["source"])}(e.definition)),void 0!==e.preview_image_id&&(t.preview_image_id=e.preview_image_id),t}const Xt=new class{async listMine(){Yt("list your themes");const e=await Gt.xd.authenticatedFetch(`${Ht}/themes/mine`);e.ok||await Jt(e,"Failed to load your themes");const t=Vt(await Zt(e));let a=[];return Array.isArray(t)?a=t:t&&"object"==typeof t&&Array.isArray(t.themes)&&(a=t.themes),a.map(Wt)}async get(e){Yt("load a theme");const t=await Gt.xd.authenticatedFetch(`${Ht}/themes/${e}`);return t.ok||await Jt(t,"Failed to load theme"),Wt(await Zt(t))}async submit(e){Yt("submit themes");const t=await Gt.xd.authenticatedFetch(`${Ht}/themes`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Qt(e))});return t.ok||await Jt(t,"Failed to submit theme"),Wt(await Zt(t))}async update(e,t){Yt("update themes");const a=await Gt.xd.authenticatedFetch(`${Ht}/themes/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(Qt(t))});return a.ok||await Jt(a,"Failed to update theme"),Wt(await Zt(a))}async remove(e){Yt("delete themes");const t=await Gt.xd.authenticatedFetch(`${Ht}/themes/${e}`,{method:"DELETE"});t.ok||await Jt(t,"Failed to delete theme")}async rate(e,t){var a;Yt("rate themes");const r=Math.round(t),i=r>=1?await Gt.xd.authenticatedFetch(`${Ht}/themes/${e}/rate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:Math.min(5,r)})}):await Gt.xd.authenticatedFetch(`${Ht}/themes/${e}/rate`,{method:"DELETE"});i.ok||await Jt(i,"Failed to rate theme");const o=null!==(a=Vt(await Zt(i)))&&void 0!==a?a:{};return{rating:Math.max(0,Math.min(5,Number(o.rating)||0)),ratingCount:Math.max(0,Number(o.rating_count)||0),myRating:Math.max(0,Math.min(5,Number(o.my_rating)||0))}}async myRatings(){const e=new Map;if(!Gt.xd.isAuthenticated())return e;const t=await Gt.xd.authenticatedFetch(`${Ht}/themes?per_page=100&orderby=downloads`);if(!t.ok)return e;const a=Vt(await Zt(t)),r=a&&Array.isArray(a.themes)?a.themes:[];for(const t of r){const a=Number(t.id),r=Number(t.my_rating)||0;a>0&&r>0&&e.set(a,r)}return e}async withdraw(e){Yt("withdraw themes");const t=await Gt.xd.authenticatedFetch(`${Ht}/themes/${e}/withdraw`,{method:"POST"});return t.ok||await Jt(t,"Failed to withdraw theme"),Wt(await Zt(t))}},Kt=["ultracard.io","home-assistant.io"],ea=[{re:/display\s*:\s*none/i,reason:"hides elements (display: none)"},{re:/visibility\s*:\s*hidden/i,reason:"hides elements (visibility: hidden)"},{re:/opacity\s*:\s*0(?:\.0+)?\s*[;}]/i,reason:"makes elements invisible (opacity: 0)"},{re:/pointer-events\s*:\s*none/i,reason:"disables clicks (pointer-events: none)"},{re:/position\s*:\s*(fixed|sticky)/i,reason:"positions content over the page (position: fixed/sticky)"},{re:/z-index\s*:\s*\d{4,}/i,reason:"very high z-index (may cover dialogs)"},{re:/content\s*:\s*["'][^"']+["']/i,reason:'injects text (content: "...")'},{re:/url\(\s*["']?data:image\//i,reason:"ships inline artwork (data: images)"}],ta=/(^|[\s,>+~])(:host|html|body|ha-card|hui-[a-z-]+|home-assistant[a-z-]*)(?![\w-])/i;function aa(e){var t,a,r,i;if(!e)return{css:null,paletteOverrides:[],remoteHosts:[],pageBackground:null,hasAny:!1};const o=function(e){if(!e||!e.trim())return null;const t=function(e){const t=[],a=e.replace(/\/\*[\s\S]*?\*\//g,"");let r=0,i=0,o=-1,n="";for(let e=0;e<a.length;e++){const s=a[e];"{"===s?(0===r&&(n=a.slice(i,e).trim(),o=e+1),r++):"}"===s&&(r--,0===r&&o>=0?(t.push({selector:n,body:a.slice(o,e)}),i=e+1,o=-1):r<0&&(r=0))}return t}(e),a=new Map,r=(e,t)=>{var r;const i=null!==(r=a.get(e))&&void 0!==r?r:new Set;i.add(t||"(at-rule)"),a.set(e,i)};for(const e of t){ta.test(e.selector)&&r("targets the card host or Home Assistant chrome",e.selector);for(const t of ea)t.re.test(e.body+"}")&&r(t.reason,e.selector)}const i=Array.from(a,([e,t])=>({reason:e,selectors:Array.from(t).sort().slice(0,8)})).sort((e,t)=>e.reason.localeCompare(t.reason));return{lines:e.split("\n").length,rules:t.length,findings:i}}(e.css),n=Object.entries(null!==(a=null===(t=e.tokens)||void 0===t?void 0:t.palette)&&void 0!==a?a:{}).filter(([,e])=>!!e).map(([e])=>e).sort(),s=[];if(e.preview&&/^https?:\/\//i.test(e.preview))try{const t=new URL(e.preview).hostname;t&&!function(e){const t=e.toLowerCase();return Kt.some(e=>t===e||t.endsWith(`.${e}`))}(t)&&s.push(t)}catch(e){}const l=(null===(i=null===(r=e.tokens)||void 0===r?void 0:r.page_background)||void 0===i?void 0:i.trim())||null,d={css:o,paletteOverrides:n,remoteHosts:s,pageBackground:l,hasAny:!1};return d.hasAny=!!o||n.length>0||s.length>0||!!l,d}function ra(e){const t=[];if(e.css){t.push(`Custom CSS: ${e.css.rules} rule${1===e.css.rules?"":"s"} (${e.css.lines} lines).`);for(const a of e.css.findings)t.push(`  - ${a.reason}: ${a.selectors.join(", ")}`)}return e.pageBackground&&t.push(`Paints the dashboard background behind its cards (${e.pageBackground.slice(0,60)}).`),e.paletteOverrides.length&&t.push(`Overrides Home Assistant colours on the card: ${e.paletteOverrides.join(", ")}.`),e.remoteHosts.length&&t.push(`Loads its preview image from: ${e.remoteHosts.join(", ")}.`),t}var ia=a(8716);const oa={primary:["primary-color"],accent:["accent-color"],card_bg:["ha-card-background","card-background-color"],text:["primary-text-color"],text_secondary:["secondary-text-color"],divider:["divider-color"],on_primary:["text-primary-color"]},na=["primary-font-family","paper-font-common-base_-_font-family","ha-font-family-body"];function sa(e,t,a=0){if(a>6||!e.includes("var("))return e;const r=e.replace(/var\(\s*--([a-zA-Z0-9_-]+)\s*(?:,\s*([^)]*))?\)/g,(e,a,r)=>a in t?t[a]:void 0!==r?r.trim():e);return r===e?e:sa(r,t,a+1)}function la(e){if(!e)return;const t=/^\s*(-?\d+(?:\.\d+)?)\s*px\s*$/i.exec(e);if(t)return Math.round(parseFloat(t[1]));const a=/^\s*(-?\d+(?:\.\d+)?)\s*$/.exec(e);return a?Math.round(parseFloat(a[1])):void 0}function da(e,t){for(const a of t){const t=e[a];if(void 0!==t&&""!==t)return sa(t,e)}}var ca=a(6752),pa=a(7804);const ha="important",ua=" !"+ha,ma=(0,pa.u$)(class extends pa.WL{constructor(e){if(super(e),e.type!==pa.OA.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,a)=>{const r=e[a];return null==r?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:a}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?a.removeProperty(e):a[e]=null);for(const e in t){const r=t[e];if(null!=r){this.ft.add(e);const t="string"==typeof r&&r.endsWith(ua);e.includes("-")||t?a.setProperty(e,t?r.slice(0,-11):r,t?ha:""):a[e]=r}}return ca.c0}});var ga=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};let ba=class extends r.WF{constructor(){super(...arguments),this.theme=null,this.large=!1}render(){var e,t,a,i,o,n,s,l,d,c,p,h,u,m,g,b;const _=this.theme,f=_?At.getHostVars(_):{},v=vt(_),y=null!==(e=v.card_border_radius)&&void 0!==e?e:12,x=v.card_transparent?"transparent":null!==(a=null!==(t=v.card_background)&&void 0!==t?t:_?f["--uc-surface-bg"]:void 0)&&void 0!==a?a:"var(--card-background-color, var(--ha-card-background, white))",w=v.card_transparent?0:null!==(i=v.card_border_width)&&void 0!==i?i:1,k=null!==(o=v.card_border_color)&&void 0!==o?o:"var(--divider-color)",$=!1===v.card_shadow_enabled||v.card_transparent?"none":v.card_shadow_enabled?`${null!==(n=v.card_shadow_horizontal)&&void 0!==n?n:0}px ${null!==(s=v.card_shadow_vertical)&&void 0!==s?s:4}px ${null!==(l=v.card_shadow_blur)&&void 0!==l?l:12}px ${null!==(d=v.card_shadow_spread)&&void 0!==d?d:0}px ${null!==(c=v.card_shadow_color)&&void 0!==c?c:"rgba(0,0,0,0.15)"}`:_?null!==(p=f["--uc-shadow"])&&void 0!==p?p:"none":"var(--ha-card-box-shadow, none)",L=null!==(h=null==_?void 0:_.tokens.surface)&&void 0!==h?h:"flat",S=null!==(u=null==_?void 0:_.tokens.accent)&&void 0!==u?u:"var(--primary-color)",M=null==_?void 0:_.tokens.font_family,C=this.large?2:1,T=Object.assign(Object.assign({},f),{borderRadius:`${Math.min(Number(y)||0,14*C)}px`,background:x,border:`${w}px solid ${k}`,boxShadow:$,backdropFilter:"glass"===L&&null!==(m=f["--uc-surface-backdrop"])&&void 0!==m?m:"none",filter:null!==(g=f["--uc-color-filter"])&&void 0!==g?g:"none"});M&&(T.fontFamily=M);const O=(null==_?void 0:_.tokens.page_background)?{background:_.tokens.page_background.replace(/\s+fixed\b/g,"")}:{};return r.qy`
      <div class="swatch ${this.large?"large":""}" style=${ma(O)}>
        <div class="mini-card" style=${ma(T)}>
          <div class="mini-title">${this.large?null!==(b=null==_?void 0:_.name)&&void 0!==b?b:"HA Native":""}</div>
          <div class="mini-row">
            <div
              class="mini-btn ${L}"
              style=${ma({background:"outline"===L?"transparent":S,borderColor:S})}
            ></div>
            <div class="mini-btn ghost"></div>
          </div>
          <div class="mini-bar">
            <div class="mini-fill" style=${ma({background:S})}></div>
          </div>
        </div>
      </div>
    `}};ba.styles=r.AH`
    :host {
      display: block;
    }
    .swatch {
      /* A neutral stage so glass / outline themes have something to sit on. */
      padding: 10px;
      border-radius: 8px;
      background:
        linear-gradient(135deg, rgba(var(--rgb-primary-color, 3, 169, 244), 0.18), transparent 60%),
        var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    }
    .swatch.large {
      padding: 24px;
      border-radius: 12px;
    }
    .mini-card {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 8px;
      min-height: 46px;
      box-sizing: border-box;
      color: var(--primary-text-color);
    }
    .large .mini-card {
      gap: 12px;
      padding: 16px;
      min-height: 96px;
    }
    .mini-title {
      width: 55%;
      height: 5px;
      border-radius: 3px;
      background: currentColor;
      opacity: 0.65;
    }
    .large .mini-title {
      width: auto;
      height: auto;
      background: none;
      opacity: 1;
      font-size: 14px;
      font-weight: 600;
    }
    .mini-row {
      display: flex;
      gap: 4px;
    }
    .large .mini-row {
      gap: 8px;
    }
    .mini-btn {
      flex: 1;
      height: 10px;
      border-radius: var(--uc-radius-sm, 4px);
      border: 1px solid transparent;
      box-sizing: border-box;
    }
    .large .mini-btn {
      height: 28px;
    }
    .mini-btn.ghost {
      background: currentColor;
      opacity: 0.12;
      border-color: transparent !important;
    }
    .mini-btn.outline {
      border-width: 1px;
      border-style: solid;
    }
    .mini-btn.glass {
      opacity: 0.75;
    }
    .mini-btn.neumorphic {
      box-shadow:
        2px 2px 4px rgba(0, 0, 0, 0.18),
        -2px -2px 4px rgba(255, 255, 255, 0.12);
    }
    .mini-btn.glossy {
      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0)) !important;
      background-blend-mode: overlay;
    }
    .mini-bar {
      height: 5px;
      border-radius: var(--uc-radius-sm, 3px);
      background: currentColor;
      opacity: 0.9;
      position: relative;
      overflow: hidden;
    }
    .large .mini-bar {
      height: 10px;
    }
    .mini-bar::before {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--card-background-color, white);
      opacity: 0.85;
    }
    .mini-fill {
      position: absolute;
      inset: 0 40% 0 0;
      border-radius: inherit;
    }
  `,ga([(0,i.MZ)({attribute:!1})],ba.prototype,"theme",void 0),ga([(0,i.MZ)({type:Boolean})],ba.prototype,"large",void 0),ba=ga([(0,i.EM)("uc-theme-swatch")],ba);var _a=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};let fa=class extends r.WF{constructor(){super(...arguments),this.value="",this.hideFollowGlobal=!1,this.hideNone=!1,this.compact=!1,this._tick=0,this._unsubscribe=null}connectedCallback(){super.connectedCallback(),this._unsubscribe=At.subscribe(()=>{this._tick++})}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._unsubscribe)||void 0===e||e.call(this),this._unsubscribe=null}get _lang(){var e,t;return(null===(t=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===t?void 0:t.language)||"en"}_themes(){const e=At.getAllThemes();return this.themeIds?this.themeIds.map(t=>e.find(e=>e.id===t)).filter(e=>!!e):e}_pick(e){e!==this.value&&this.dispatchEvent(new CustomEvent("theme-picked",{detail:{value:e},bubbles:!0,composed:!0}))}render(){var e;const t=this._lang,a=At.getGlobalDefaultId(),i=null!==(e=At.getTheme(a))&&void 0!==e?e:At.getTheme(x),o=this._themes();return r.qy`
      <div class="tiles ${this.compact?"compact":""}" role="radiogroup" data-tick=${this._tick}>
        ${this.hideFollowGlobal?r.s6:this._renderTile({value:"",name:(0,n.kg)("editor.theme.follow_global",t,"Follow global default"),desc:i.name,icon:"mdi:earth",theme:i.id===x?null:i})}
        ${o.map(e=>{var t,a;return this._renderTile({value:e.id,name:e.name,desc:null!==(t=e.description)&&void 0!==t?t:"",icon:null!==(a=e.icon)&&void 0!==a?a:"mdi:palette",theme:e.id===x?null:e,badge:e.source&&"builtin"!==e.source?e.source:void 0})})}
        ${this.hideNone?r.s6:this._renderTile({value:"none",name:(0,n.kg)("editor.theme.none",t,"None"),desc:(0,n.kg)("editor.theme.none_desc",t,"Ignore every theme, including the global default."),icon:"mdi:cancel",theme:null})}
      </div>
    `}_renderTile(e){const t=e.value===this.value;return r.qy`
      <button
        type="button"
        role="radio"
        class="tile ${t?"selected":""}"
        aria-checked=${t}
        title=${e.desc}
        @click=${()=>this._pick(e.value)}
      >
        <div class="art">
          <uc-theme-swatch .theme=${e.theme}></uc-theme-swatch>
          ${e.badge?r.qy`<span class="badge">${e.badge}</span>`:r.s6}
        </div>
        <div class="meta">
          <div class="name-row">
            <ha-icon .icon=${e.icon}></ha-icon>
            <span class="name">${e.name}</span>
          </div>
          ${this.compact?r.s6:r.qy`<span class="desc">${e.desc}</span>`}
        </div>
      </button>
    `}};fa.styles=r.AH`
    :host {
      display: block;
    }
    .tiles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 8px;
    }
    .tiles.compact {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
    .tile {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px;
      border-radius: 12px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      color: var(--primary-text-color);
      text-align: left;
      cursor: pointer;
      font: inherit;
      transition:
        border-color 120ms ease,
        box-shadow 120ms ease;
    }
    /* Pointer-only: touch devices keep :hover latched on the last tapped tile,
       which reads as a second selection. */
    @media (hover: hover) {
      .tile:hover {
        border-color: var(--primary-color);
      }
    }
    .tile.selected {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 1px var(--primary-color) inset;
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
    }
    .tile:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }
    .meta {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }
    .name-row {
      display: flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }
    .name-row ha-icon {
      --mdc-icon-size: 18px;
      color: var(--primary-color);
      flex: none;
    }
    .name {
      flex: 1;
      min-width: 0;
      font-weight: 500;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    /* The source badge sits on the swatch so a narrow tile never trades the
       theme's name for the word "community". */
    .art {
      position: relative;
      min-width: 0;
    }
    .art uc-theme-swatch {
      display: block;
    }
    .badge {
      position: absolute;
      top: 6px;
      right: 6px;
      font-size: 9px;
      font-weight: 600;
      line-height: 1.2;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      padding: 1px 6px;
      border-radius: 999px;
      background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.85);
      color: var(--text-primary-color, #fff);
      pointer-events: none;
    }
    .desc {
      font-size: 11px;
      color: var(--secondary-text-color);
      line-height: 1.35;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `,_a([(0,i.MZ)({attribute:!1})],fa.prototype,"hass",void 0),_a([(0,i.MZ)({type:String})],fa.prototype,"value",void 0),_a([(0,i.MZ)({type:Boolean,attribute:"hide-follow-global"})],fa.prototype,"hideFollowGlobal",void 0),_a([(0,i.MZ)({type:Boolean,attribute:"hide-none"})],fa.prototype,"hideNone",void 0),_a([(0,i.MZ)({attribute:!1})],fa.prototype,"themeIds",void 0),_a([(0,i.MZ)({type:Boolean})],fa.prototype,"compact",void 0),_a([(0,i.wk)()],fa.prototype,"_tick",void 0),fa=_a([(0,i.EM)("uc-theme-picker")],fa);const va=e=>e.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase()),ya=(e=[])=>[...Ge,...e].map(e=>({value:e,label:va(e)})),xa=[{moduleType:"button",moduleLabel:"Button",key:"style",label:"Style",kind:"select",options:ya()},{moduleType:"bar",moduleLabel:"Bar",key:"bar_style",label:"Bar style",kind:"select",options:ya(["dashed","dots","minimal"])},{moduleType:"bar",moduleLabel:"Bar",key:"glass_blur_amount",label:"Glass blur (px)",kind:"number",min:0,max:40},{moduleType:"slider_control",moduleLabel:"Slider Control",key:"slider_style",label:"Slider style",kind:"select",options:ya(["minimal"])},{moduleType:"slider_control",moduleLabel:"Slider Control",key:"glass_blur_amount",label:"Glass blur (px)",kind:"number",min:0,max:40},{moduleType:"spinbox",moduleLabel:"Spinbox",key:"button_style",label:"Button style",kind:"select",options:ya()},{moduleType:"spinbox",moduleLabel:"Spinbox",key:"button_shape",label:"Button shape",kind:"select",options:["rounded","square","circle"].map(e=>({value:e,label:va(e)}))},{moduleType:"popup",moduleLabel:"Popup",key:"trigger_button_style",label:"Trigger button style",kind:"select",options:ya()},{moduleType:"grid",moduleLabel:"Grid",key:"grid_style",label:"Tile style",kind:"select",options:Object.entries({style_1:"Name / icon / state",style_2:"Icon above state",style_3:"Icon left, text right",style_4:"Large icon, state badge",style_5:"Icon + name, state below",style_6:"Icon only",style_7:"Icon + state",style_8:"Text only",style_9:"Ring progress",style_10:"Square tile",style_11:"Card with shadow",style_12:"Button with border",style_13:"Horizontal list",style_14:"Rounded badge",style_15:"Panel with header",style_16:"Glass morphism",style_17:"Gradient",style_18:"Split colour",style_19:"Neumorphic",style_20:"Flat, accent border"}).map(([e,t])=>({value:e,label:t}))},{moduleType:"navigation",moduleLabel:"Navigation",key:"nav_style",label:"Navbar preset",kind:"select",options:["uc_modern","uc_minimal","uc_ios_glass","uc_material","uc_floating","uc_docked","uc_neumorphic","uc_gradient","uc_sidebar","uc_compact"].map(e=>({value:e,label:va(e.replace(/^uc_/,""))}))},{moduleType:"area_summary",moduleLabel:"Area Summary",key:"style_preset",label:"Preset",kind:"select",options:["iconic_soft","graph_glow","compact_controls","photo_overlay"].map(e=>({value:e,label:va(e)}))},{moduleType:"area_summary",moduleLabel:"Area Summary",key:"accent_color",label:"Accent colour",kind:"select",options:[{value:"var(--primary-color)",label:"Primary"},{value:"var(--accent-color)",label:"Accent"},{value:"var(--primary-text-color)",label:"Text"}]},{moduleType:"area_summary",moduleLabel:"Area Summary",key:"tile_border_radius",label:"Tile radius (px)",kind:"number",min:0,max:60},{moduleType:"auto_entity_list",moduleLabel:"Auto Entity List",key:"row_style",label:"Row style",kind:"select",options:["compact","detailed","slim","card"].map(e=>({value:e,label:va(e)}))},{moduleType:"unifi",moduleLabel:"UniFi",key:"rack_style",label:"Rack style",kind:"select",options:["dark","light","glass","blueprint","blank"].map(e=>({value:e,label:va(e)}))},{moduleType:"bambu",moduleLabel:"Bambu Lab",key:"style",label:"Style",kind:"select",options:["theme","dark","light","glass","carbon"].map(e=>({value:e,label:va(e)}))},{moduleType:"printer_3d",moduleLabel:"3D Printer",key:"style",label:"Style",kind:"select",options:["theme","dark","light","glass"].map(e=>({value:e,label:va(e)}))},{moduleType:"tabs",moduleLabel:"Tabs",key:"style",label:"Style",kind:"select",options:["default","simple","simple_2","simple_3","switch_1","switch_2","switch_3","modern","trendy"].map(e=>({value:e,label:va(e)}))},{moduleType:"activity_feed",moduleLabel:"Activity Feed",key:"feed_card_style",label:"Card style",kind:"select",options:["flat","elevated","outlined"].map(e=>({value:e,label:va(e)}))},{moduleType:"button_input",moduleLabel:"Button Input",key:"button_style",label:"Button style",kind:"select",options:ya(["filled","outlined","text"])},{moduleType:"light",moduleLabel:"Light",key:"button_style",label:"Button style",kind:"select",options:ya(["filled","outlined","text"])}];var wa=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const ka={control:"Controls (buttons, chips)",track:"Tracks (bars, sliders)",fill:"Fills (bar and slider fill)",pane:"Panes (rows, tiles)"},$a=["flat","glass","neumorphic","glossy","outline","minimal"],La=["compact","regular","comfortable"],Sa=[{key:"primary",label:"Primary",placeholder:"var(--primary-color)"},{key:"accent",label:"Accent",placeholder:"var(--accent-color)"},{key:"card_bg",label:"Card background",placeholder:"var(--card-background-color)"},{key:"text",label:"Text",placeholder:"var(--primary-text-color)"},{key:"text_secondary",label:"Secondary text",placeholder:"var(--secondary-text-color)"},{key:"divider",label:"Divider",placeholder:"var(--divider-color)"},{key:"on_primary",label:"Text on primary",placeholder:"auto (derived from primary)"}];function Ma(e){return e.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").slice(0,60)}function Ca(e){var t,a,r,i,o,n,s,l,d,c,p,h,u,m,g,b,_,f,v,y,x,w,k,$;const L=null==e?void 0:e.tokens,S={};for(const[a,r]of Object.entries(null!==(t=null==e?void 0:e.modules)&&void 0!==t?t:{}))if(r){S[a]={};for(const[e,t]of Object.entries(r))S[a][e]=String(t)}return{id:null!==(a=null==e?void 0:e.id)&&void 0!==a?a:"",name:null!==(r=null==e?void 0:e.name)&&void 0!==r?r:"",description:null!==(i=null==e?void 0:e.description)&&void 0!==i?i:"",author:null!==(o=null==e?void 0:e.author)&&void 0!==o?o:"",icon:null!==(n=null==e?void 0:e.icon)&&void 0!==n?n:"mdi:palette",surface:null!==(s=null==L?void 0:L.surface)&&void 0!==s?s:"flat",radius:L?String(L.radius):"12",radius_sm:void 0!==(null==L?void 0:L.radius_sm)?String(L.radius_sm):"",blur:void 0!==(null==L?void 0:L.blur)?String(L.blur):"",border_width:void 0!==(null==L?void 0:L.border_width)?String(L.border_width):"",border_color:null!==(l=null==L?void 0:L.border_color)&&void 0!==l?l:"",shadow:null!==(d=null==L?void 0:L.shadow)&&void 0!==d?d:"",density:null!==(c=null==L?void 0:L.density)&&void 0!==c?c:"",recipes:Object.assign({},null!==(p=null==L?void 0:L.recipes)&&void 0!==p?p:{}),accent:null!==(h=null==L?void 0:L.accent)&&void 0!==h?h:"",font_family:null!==(u=null==L?void 0:L.font_family)&&void 0!==u?u:"",grayscale:void 0!==(null==L?void 0:L.grayscale)?String(L.grayscale):"",color_filter:null!==(m=null==L?void 0:L.color_filter)&&void 0!==m?m:"",page_background:null!==(g=null==L?void 0:L.page_background)&&void 0!==g?g:"",pane_background:null!==(b=null==L?void 0:L.pane_background)&&void 0!==b?b:"",pane_border:null!==(_=null==L?void 0:L.pane_border)&&void 0!==_?_:"",pane_shadow:null!==(f=null==L?void 0:L.pane_shadow)&&void 0!==f?f:"",card_background:null!==(y=null===(v=null==e?void 0:e.card)||void 0===v?void 0:v.card_background)&&void 0!==y?y:"",card_padding:void 0!==(null===(x=null==e?void 0:e.card)||void 0===x?void 0:x.card_padding)?String(e.card.card_padding):"",card_shadow_enabled:void 0===(null===(w=null==e?void 0:e.card)||void 0===w?void 0:w.card_shadow_enabled)?"":e.card.card_shadow_enabled?"true":"false",palette:Object.assign({},null!==(k=null==L?void 0:L.palette)&&void 0!==k?k:{}),modules:S,css:null!==($=null==e?void 0:e.css)&&void 0!==$?$:""}}function Ta(e){const t=parseFloat(e);return isFinite(t)?t:void 0}function Oa(e,t){var a,r,i,o,n;const s={surface:e.surface,radius:null!==(a=Ta(e.radius))&&void 0!==a?a:12},l=Ta(e.radius_sm);void 0!==l&&(s.radius_sm=l);const d=Ta(e.blur);void 0!==d&&(s.blur=d);const c=Ta(e.border_width);void 0!==c&&(s.border_width=c),e.border_color.trim()&&(s.border_color=e.border_color.trim()),e.shadow.trim()&&(s.shadow=e.shadow.trim()),e.density&&(s.density=e.density);const p={};for(const t of Ue)e.recipes[t]&&(p[t]=e.recipes[t]);Object.keys(p).length&&(s.recipes=p),e.accent.trim()&&(s.accent=e.accent.trim()),e.font_family.trim()&&(s.font_family=e.font_family.trim());const h=Ta(e.grayscale);void 0!==h&&h>0&&(s.grayscale=Math.min(1,h)),e.color_filter.trim()&&(s.color_filter=e.color_filter.trim()),e.page_background.trim()&&(s.page_background=e.page_background.trim()),e.pane_background.trim()&&(s.pane_background=e.pane_background.trim()),e.pane_border.trim()&&(s.pane_border=e.pane_border.trim()),e.pane_shadow.trim()&&(s.pane_shadow=e.pane_shadow.trim());const u={};for(const t of Sa){const a=null===(r=e.palette[t.key])||void 0===r?void 0:r.trim();a&&(u[t.key]=a)}Object.keys(u).length&&(s.palette=u);const m={card_border_radius:s.radius};void 0!==c&&(m.card_border_width=c),e.border_color.trim()&&(m.card_border_color=e.border_color.trim()),e.card_background.trim()&&(m.card_background=e.card_background.trim());const g=Ta(e.card_padding);void 0!==g&&(m.card_padding=g),e.card_shadow_enabled&&(m.card_shadow_enabled="true"===e.card_shadow_enabled);const b={};for(const t of xa){const a=null===(i=e.modules[t.moduleType])||void 0===i?void 0:i[t.key];void 0!==a&&""!==a&&(null!==(o=b[n=t.moduleType])&&void 0!==o||(b[n]={}),b[t.moduleType][t.key]="number"===t.kind?Ta(a):a)}const _={id:e.id||Ma(e.name),name:e.name.trim(),version:t,tokens:s,card:m};return e.description.trim()&&(_.description=e.description.trim()),e.author.trim()&&(_.author=e.author.trim()),e.icon.trim()&&(_.icon=e.icon.trim()),Object.keys(b).length&&(_.modules=b),e.css.trim()&&(_.css=e.css),_}let ja=class extends r.WF{constructor(){super(...arguments),this.theme=null,this.asCopy=!1,this._draft=Ca(null),this._error="",this._cssWarnings=[],this._modulesOpen=!1,this._paletteOpen=!1}get _lang(){var e,t;return(null===(t=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===t?void 0:t.language)||"en"}willUpdate(e){if(e.has("theme")||e.has("asCopy")){const e=Ca(this.theme);this.asCopy&&(e.id="",e.name=this.theme?`${this.theme.name} copy`:""),this._draft=e,this._error="",this._cssWarnings=[],Object.keys(e.palette).length&&(this._paletteOpen=!0)}}_setPalette(e,t){const a=Object.assign({},this._draft.palette);""===t.trim()?delete a[e]:a[e]=t,this._draft=Object.assign(Object.assign({},this._draft),{palette:a})}_set(e,t){this._draft=Object.assign(Object.assign({},this._draft),{[e]:t}),"css"===e&&(this._cssWarnings=nt(t).reasons)}_setRecipe(e,t){this._draft=Object.assign(Object.assign({},this._draft),{recipes:Object.assign(Object.assign({},this._draft.recipes),{[e]:t})})}_setModule(e,t,a){var r;const i=Object.assign(Object.assign({},this._draft.modules),{[e]:Object.assign({},null!==(r=this._draft.modules[e])&&void 0!==r?r:{})});""===a?delete i[e][t]:i[e][t]=a,Object.keys(i[e]).length||delete i[e],this._draft=Object.assign(Object.assign({},this._draft),{modules:i})}_previewTheme(){const e=Oa(Object.assign(Object.assign({},this._draft),{name:this._draft.name||"Preview"}),1);return e.id||(e.id="preview"),ut(e).theme}_save(){var e;const t=this._lang;if(!this._draft.name.trim())return void(this._error=(0,n.kg)("hub.themes.editor_name_required",t,"Give the theme a name first"));const a=this.asCopy||!this.theme?1:(null!==(e=this.theme.version)&&void 0!==e?e:0)+1,r=Oa(this._draft,a),{theme:i,warnings:o}=ut(r,{source:"local"});i?this.dispatchEvent(new CustomEvent("theme-save",{detail:{theme:r,warnings:o},bubbles:!0,composed:!0})):this._error=o.join(", ")||"Invalid theme"}_cancel(){this.dispatchEvent(new CustomEvent("theme-cancel",{bubbles:!0,composed:!0}))}render(){const e=this._lang,t=this._draft,a=this.asCopy||!this.theme,i=(t,a)=>(0,n.kg)(`hub.themes.${t}`,e,a);return r.qy`
      <div class="backdrop" @click=${this._cancel}></div>
      <div class="panel" role="dialog" aria-modal="true" aria-label=${a?i("editor_title_new","New theme"):i("editor_title_edit","Edit theme")}>
        <header>
          <ha-icon icon="mdi:palette-swatch"></ha-icon>
          <h2>${a?i("editor_title_new","New theme"):i("editor_title_edit","Edit theme")}</h2>
          <button class="icon-btn" @click=${this._cancel} aria-label=${i("editor_cancel","Cancel")}>
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </header>

        <div class="body">
          <div class="form">
            <section>
              <h3>${i("editor_basics","Basics")}</h3>
              <div class="grid-2">
                ${this._text("name",i("editor_name","Name"),t.name,e=>{this._set("name",e),a&&this._set("id",Ma(e))})}
                ${this._text("id",i("editor_id","Id"),t.id,e=>this._set("id",Ma(e)),"my-theme")}
                ${this._text("author",i("editor_author","Author"),t.author,e=>this._set("author",e))}
                ${this._text("icon",i("editor_icon","Icon (mdi:...)"),t.icon,e=>this._set("icon",e))}
              </div>
              ${this._text("description",i("editor_description","Description"),t.description,e=>this._set("description",e))}
            </section>

            <section>
              <h3>${i("editor_tokens","Surface & shape")}</h3>
              <div class="grid-2">
                ${this._select(i("editor_surface","Surface"),t.surface,$a.map(e=>({value:e,label:e})),e=>this._set("surface",e))}
                ${this._select(i("editor_density","Density"),t.density,[{value:"",label:"—"},...La.map(e=>({value:e,label:e}))],e=>this._set("density",e))}
                ${this._text("radius",i("editor_radius","Card radius (px)"),t.radius,e=>this._set("radius",e),"12","number")}
                ${this._text("radius_sm",i("editor_radius_sm","Control radius (px)"),t.radius_sm,e=>this._set("radius_sm",e),"radius / 2","number")}
                ${this._text("blur",i("editor_blur","Glass blur (px)"),t.blur,e=>this._set("blur",e),"12","number")}
                ${this._text("border_width",i("editor_border_width","Border width (px)"),t.border_width,e=>this._set("border_width",e),"1","number")}
                ${this._text("border_color",i("editor_border_color","Border colour"),t.border_color,e=>this._set("border_color",e),"var(--divider-color)")}
                ${this._text("accent",i("editor_accent","Accent colour"),t.accent,e=>this._set("accent",e),"var(--primary-color)")}
              </div>
              ${this._text("shadow",i("editor_shadow","Shadow (CSS box-shadow)"),t.shadow,e=>this._set("shadow",e),"0 4px 16px rgba(0,0,0,0.08)")}
              ${this._text("font_family",i("editor_font","Font family"),t.font_family,e=>this._set("font_family",e),"inherit")}
              ${this._text("grayscale",i("editor_grayscale","Desaturate whole card (0 = colour, 1 = monochrome)"),t.grayscale,e=>this._set("grayscale",e),"0","number")}
              ${this._text("color_filter",i("editor_color_filter","Colour filter (CSS filter chain, overrides desaturate)"),t.color_filter,e=>this._set("color_filter",e),"grayscale(1) sepia(1) hue-rotate(80deg) saturate(2.5)")}
            </section>

            <section>
              <h3>${i("editor_recipes","Surfaces")}</h3>
              <p class="hint">
                ${i("editor_recipes_hint",'How controls, tracks, fills and inner panes are painted for modules that follow the theme. Leave on "From surface" to derive from the surface above; Module defaults below can still override one module.')}
              </p>
              <div class="grid-2">
                ${Ue.map(e=>{var a;const r=Ye(t.surface)[e];return this._select(i(`editor_recipe_${e}`,ka[e]),null!==(a=t.recipes[e])&&void 0!==a?a:"",[{value:"",label:`${i("editor_recipe_from_surface","From surface")} (${r})`},...He[e].map(e=>({value:e,label:e}))],t=>this._setRecipe(e,t))})}
              </div>
            </section>

            <section>
              <h3>${i("editor_layers","Layers")}</h3>
              <p class="hint">
                ${i("editor_layers_hint","The page behind the card and the panes modules draw inside it (rows, tiles, chips, tracks). Leave empty to derive panes from the surface and leave the page to Home Assistant.")}
              </p>
              ${this._text("page_background",i("editor_page_background","Page background (view behind the card)"),t.page_background,e=>this._set("page_background",e),"#e4e8ef")}
              ${this._text("pane_background",i("editor_pane_background","Pane background"),t.pane_background,e=>this._set("pane_background",e),"var(--secondary-background-color)")}
              <div class="grid-2">
                ${this._text("pane_border",i("editor_pane_border","Pane border"),t.pane_border,e=>this._set("pane_border",e),"1px solid var(--divider-color)")}
                ${this._text("pane_shadow",i("editor_pane_shadow","Pane shadow"),t.pane_shadow,e=>this._set("pane_shadow",e),"inset 0 1px 3px rgba(0,0,0,0.2)")}
              </div>
            </section>

            <section>
              <h3>${i("editor_card","Card chrome")}</h3>
              <p class="hint">${i("editor_card_hint","Leave a field empty to let the card fall back to Home Assistant's own variables.")}</p>
              <div class="grid-2">
                ${this._text("card_background",i("editor_card_background","Background"),t.card_background,e=>this._set("card_background",e),"var(--card-background-color)")}
                ${this._text("card_padding",i("editor_card_padding","Padding (px)"),t.card_padding,e=>this._set("card_padding",e),"16","number")}
                ${this._select(i("editor_card_shadow","Card shadow"),t.card_shadow_enabled,[{value:"",label:"—"},{value:"true",label:"On"},{value:"false",label:"Off"}],e=>this._set("card_shadow_enabled",e))}
              </div>
            </section>

            <section>
              <button class="section-toggle" @click=${()=>this._paletteOpen=!this._paletteOpen}>
                <h3>${i("editor_palette","Colours")}</h3>
                <ha-icon icon=${this._paletteOpen?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
              </button>
              ${this._paletteOpen?r.qy`
                    <p class="hint">${i("editor_palette_hint","Pins Home Assistant colour variables on cards using this theme. Leave empty to follow the active HA theme.")}</p>
                    <div class="grid-2">
                      ${Sa.map(e=>{var a;return this._text(`palette.${e.key}`,i(`editor_palette_${e.key}`,e.label),null!==(a=t.palette[e.key])&&void 0!==a?a:"",t=>this._setPalette(e.key,t),e.placeholder)})}
                    </div>
                  `:r.s6}
            </section>

            <section>
              <button class="section-toggle" @click=${()=>this._modulesOpen=!this._modulesOpen}>
                <h3>${i("editor_modules","Module defaults")}</h3>
                <ha-icon icon=${this._modulesOpen?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
              </button>
              ${this._modulesOpen?r.qy`<div class="grid-2">
                    ${xa.map(e=>{var a,r,o;const n=null!==(r=null===(a=t.modules[e.moduleType])||void 0===a?void 0:a[e.key])&&void 0!==r?r:"",s=`${e.moduleLabel} · ${e.label}`,l=Je(e.moduleType,e.key),d=l?`${i("editor_module_recipe","Theme surface")} (${t.recipes[l]||Ye(t.surface)[l]})`:i("editor_module_inherit","Module default");return"select"===e.kind?this._select(s,n,[{value:"",label:d},...null!==(o=e.options)&&void 0!==o?o:[]],t=>this._setModule(e.moduleType,e.key,t)):this._text(`${e.moduleType}.${e.key}`,s,n,t=>this._setModule(e.moduleType,e.key,t),"","number")})}
                  </div>`:r.s6}
            </section>

            <section>
              <h3>${i("editor_css","Custom CSS")}</h3>
              <p class="hint">${i("editor_css_help","Scoped to this card's shadow root. Use .card-container and module classes. Inline SVG/PNG artwork via url('data:image/...') is allowed; remote url(), @import and @font-face are not.")}</p>
              <textarea
                rows="6"
                spellcheck="false"
                .value=${t.css}
                @input=${e=>this._set("css",e.target.value)}
              ></textarea>
              ${this._cssWarnings.length?r.qy`<ul class="warn">${this._cssWarnings.map(e=>r.qy`<li>${e}</li>`)}</ul>`:r.s6}
            </section>
          </div>

          <aside class="preview">
            <h3>${i("editor_preview","Preview")}</h3>
            <uc-theme-swatch large .theme=${this._previewTheme()}></uc-theme-swatch>
          </aside>
        </div>

        <footer>
          ${this._error?r.qy`<span class="error">${this._error}</span>`:r.qy`<span></span>`}
          <div class="actions">
            <button class="btn ghost" @click=${this._cancel}>${i("editor_cancel","Cancel")}</button>
            <button class="btn primary" @click=${this._save}>${i("editor_save","Save theme")}</button>
          </div>
        </footer>
      </div>
    `}_text(e,t,a,i,o="",n="text"){return r.qy`
      <label class="field">
        <span>${t}</span>
        <input
          type=${n}
          data-key=${e}
          .value=${a}
          placeholder=${o}
          @input=${e=>i(e.target.value)}
        />
      </label>
    `}_select(e,t,a,i){return r.qy`
      <label class="field">
        <span>${e}</span>
        <select .value=${t} @change=${e=>i(e.target.value)}>
          ${a.map(e=>r.qy`<option value=${e.value} ?selected=${e.value===t}>${e.label}</option>`)}
        </select>
      </label>
    `}};ja.styles=r.AH`
    :host {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: block;
    }
    .backdrop {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
    }
    .panel {
      position: absolute;
      inset: 4vh 50% auto auto;
      transform: translateX(50%);
      width: min(960px, 96vw);
      max-height: 92vh;
      display: flex;
      flex-direction: column;
      background: var(--card-background-color, white);
      color: var(--primary-text-color);
      border-radius: 16px;
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
      overflow: hidden;
    }
    header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 16px 20px;
      border-bottom: 1px solid var(--divider-color);
    }
    header ha-icon {
      color: var(--primary-color);
    }
    header h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      flex: 1;
    }
    .icon-btn {
      border: none;
      background: transparent;
      color: var(--secondary-text-color);
      cursor: pointer;
      padding: 4px;
      border-radius: 50%;
      display: flex;
    }
    .icon-btn:hover {
      background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
    }
    .body {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 280px;
      gap: 20px;
      padding: 20px;
      overflow: auto;
    }
    @media (max-width: 760px) {
      .body {
        grid-template-columns: 1fr;
      }
      .preview {
        order: -1;
      }
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-width: 0;
    }
    section h3 {
      margin: 0 0 10px;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--secondary-text-color);
    }
    .section-toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      color: inherit;
      font: inherit;
    }
    .section-toggle h3 {
      margin: 0;
    }
    .section-toggle ha-icon {
      color: var(--secondary-text-color);
    }
    .hint {
      margin: -4px 0 10px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 10px 14px;
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 6px;
    }
    .field input,
    .field select,
    textarea {
      font: inherit;
      font-size: 13px;
      color: var(--primary-text-color);
      background: var(--primary-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 8px 10px;
      outline: none;
      width: 100%;
      box-sizing: border-box;
    }
    .field input:focus,
    .field select:focus,
    textarea:focus {
      border-color: var(--primary-color);
    }
    textarea {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      resize: vertical;
    }
    .warn {
      margin: 8px 0 0;
      padding-left: 18px;
      font-size: 12px;
      color: var(--warning-color, #ff9800);
    }
    .preview {
      position: sticky;
      top: 0;
      align-self: start;
    }
    .preview h3 {
      margin: 0 0 10px;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--secondary-text-color);
    }
    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 20px;
      border-top: 1px solid var(--divider-color);
    }
    .error {
      color: var(--error-color, #f44336);
      font-size: 13px;
    }
    .actions {
      display: flex;
      gap: 8px;
    }
    .btn {
      border-radius: 10px;
      padding: 8px 16px;
      font: inherit;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid var(--divider-color);
      background: transparent;
      color: var(--primary-text-color);
    }
    .btn.primary {
      background: var(--primary-color);
      border-color: var(--primary-color);
      color: var(--text-primary-color, white);
    }
  `,wa([(0,i.MZ)({attribute:!1})],ja.prototype,"hass",void 0),wa([(0,i.MZ)({attribute:!1})],ja.prototype,"theme",void 0),wa([(0,i.MZ)({type:Boolean})],ja.prototype,"asCopy",void 0),wa([(0,i.wk)()],ja.prototype,"_draft",void 0),wa([(0,i.wk)()],ja.prototype,"_error",void 0),wa([(0,i.wk)()],ja.prototype,"_cssWarnings",void 0),wa([(0,i.wk)()],ja.prototype,"_modulesOpen",void 0),wa([(0,i.wk)()],ja.prototype,"_paletteOpen",void 0),ja=wa([(0,i.EM)("uc-theme-editor-dialog")],ja),a(5387);var za=a(7568),qa=a(7907),Aa=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};function Pa(e){if(!e)return"";const{source:t}=e,a=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(a[r[i]]=e[r[i]])}return a}(e,["source"]);return JSON.stringify(a,null,2)}class Na extends r.WF{constructor(){super(...arguments),this.theme=null,this.mode="create",this.existing=null,this.language="en",this._title="",this._description="",this._tags="",this._json="",this._previewFile=null,this._keptPreview="",this._submitting=!1,this._submitted=!1,this._submitStep="",this._error="",this._showValidation=!1,this._prefilledExistingId=null}_t(e,t){return(0,n.kg)(`hub.submit_theme.${e}`,this.language,t)}connectedCallback(){super.connectedCallback(),"edit"===this.mode&&this.existing?this._prefillFromExisting(this.existing):this.theme&&this._prefillFromTheme(this.theme)}updated(e){e.has("theme")&&this.theme&&"create"===this.mode&&!this._json&&this._prefillFromTheme(this.theme),(e.has("existing")||e.has("mode"))&&"edit"===this.mode&&this.existing&&this.existing.id!==this._prefilledExistingId&&this._prefillFromExisting(this.existing)}_prefillFromTheme(e){var t;this._title=e.name,this._description=null!==(t=e.description)&&void 0!==t?t:"",this._json=Pa(e)}_prefillFromExisting(e){var t;this._prefilledExistingId=e.id,this._title=e.name,this._description=e.description,this._tags=e.tags.join(", "),this._json=Pa(e.definition),this._keptPreview=null!==(t=e.preview)&&void 0!==t?t:"",this._previewFile=null,this._error="",this._submitted=!1,this._showValidation=!1}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_parsedDefinition(){if(!this._json.trim())return{theme:null,warnings:[],error:this._t("json_required","Theme JSON is required.")};let e;try{e=JSON.parse(this._json)}catch(e){return{theme:null,warnings:[],error:this._t("json_invalid","Theme JSON is not valid JSON.")}}const{theme:t,warnings:a}=ut(e);return t?{theme:t,warnings:a,error:""}:{theme:null,warnings:a,error:`${this._t("json_rejected","Not a valid Ultra Card theme")}: ${a.join("; ")}`}}get _titleValid(){return this._title.trim().length>0}get _descriptionValid(){return this._description.trim().length>0}get _canSubmit(){return this._titleValid&&this._descriptionValid&&!this._parsedDefinition().error&&!this._submitting}_handlePreviewInput(e){var t;const a=e.target,r=null===(t=a.files)||void 0===t?void 0:t[0];if(r){if(r.size>16777216)return this._error=this._t("preview_too_large","Preview image exceeds the 16 MB limit."),void(a.value="");this._previewFile=r,this._keptPreview="",this._error="",a.value=""}}async _handleSubmit(){var e,t;if(this._showValidation=!0,!this._canSubmit)return;const a=this._parsedDefinition();if(a.theme){this._submitting=!0,this._error="";try{let r;this._previewFile&&(this._submitStep="preview",r=(await za.Q.uploadPresetPhoto(this._previewFile)).id),this._submitStep="theme";const i=this._tags.trim()?this._tags.split(",").map(e=>e.trim()).filter(Boolean):void 0,o=Object.assign(Object.assign({},a.theme),{name:this._title.trim(),description:this._description.trim()});if("edit"===this.mode&&this.existing){const t={name:o.name,description:null!==(e=o.description)&&void 0!==e?e:"",definition:o};i&&(t.tags=i),r&&(t.preview_image_id=r),await Xt.update(this.existing.id,t),this._submitted=!0,this.dispatchEvent(new CustomEvent("theme-updated",{detail:{id:this.existing.id},bubbles:!0,composed:!0}))}else{const e={name:o.name,description:null!==(t=o.description)&&void 0!==t?t:"",definition:o};i&&(e.tags=i),r&&(e.preview_image_id=r);const a=await Xt.submit(e);this._submitted=!0,this.dispatchEvent(new CustomEvent("theme-submitted",{detail:{id:a.id},bubbles:!0,composed:!0}))}}catch(e){this._error=e instanceof Error?e.message:this._t("submit_failed","Failed to submit theme. Please try again.")}finally{this._submitting=!1,this._submitStep=""}}}render(){const e="edit"===this.mode;return r.qy`
      <ha-dialog
        open
        width="large"
        header-title=${e?this._t("edit_title","Edit your theme"):this._t("create_title","Share your theme")}
        header-subtitle=${e?this._t("edit_subtitle","Update on ultracard.io"):this._t("create_subtitle","Submit to ultracard.io")}
        @closed=${this._close}
      >
        <span slot="headerNavigationIcon" class="header-nav-placeholder"></span>
        <ha-icon-button slot="headerActionItems" .label=${"Close"} @click=${this._close}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>

        ${this._submitted?this._renderSuccess():this._renderForm()}

        ${this._submitted?r.s6:r.qy`
              <div slot="footer" class="dialog-footer-actions">
                <button type="button" class="btn btn-secondary" @click=${this._close} ?disabled=${this._submitting}>
                  ${this._t("cancel","Cancel")}
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  ?disabled=${this._submitting||this._showValidation&&!this._canSubmit}
                  @click=${this._handleSubmit}
                >
                  ${this._submitting?r.qy`<ha-icon icon="mdi:loading" class="spin"></ha-icon>
                        ${"preview"===this._submitStep?this._t("uploading_preview","Uploading preview…"):e?this._t("saving","Saving…"):this._t("sending","Sending…")}`:e?r.qy`<ha-icon icon="mdi:content-save"></ha-icon>${this._t("save","Save")}`:r.qy`<ha-icon icon="mdi:send"></ha-icon>${this._t("send","Send")}`}
                </button>
              </div>
            `}
      </ha-dialog>
    `}_renderSuccess(){var e;const t="edit"===this.mode,a="publish"===(null===(e=this.existing)||void 0===e?void 0:e.status);return r.qy`
      <div class="submit-success">
        <ha-icon icon="mdi:check-circle"></ha-icon>
        <h3>${t?this._t("success_edit_title","Theme updated"):this._t("success_create_title","Theme submitted")}</h3>
        <p>
          ${t?a?this._t("success_edit_review","Update submitted for review. Your live theme stays online until the update is approved."):this._t("success_edit_saved","Saved."):this._t("success_create_body","Thank you for sharing. Your theme is pending review and will appear in the catalog once approved.")}
        </p>
        <button class="btn btn-primary" @click=${this._close}>
          <ha-icon icon="mdi:check"></ha-icon>${this._t("got_it","Got it")}
        </button>
      </div>
    `}_renderForm(){const e="edit"===this.mode,t=this._parsedDefinition(),a=t.theme?ra(aa(t.theme)):[];return r.qy`
      <p class="dialog-subtitle">
        ${e?this._t("edit_blurb","Update the details below. Changes to a live theme are queued for review while the current version stays online."):this._t("create_blurb","Share your theme with the Ultra Card community. Once reviewed and approved it appears in the Themes catalog for everyone to install.")}
      </p>

      <div class="field">
        <label>${this._t("field_title","Theme name")}<span class="required-star">*</span></label>
        <input
          type="text"
          class=${this._showValidation&&!this._titleValid?"invalid":""}
          .value=${this._title}
          @input=${e=>{this._title=e.target.value,this._error=""}}
          placeholder="Frosted Glass"
          ?disabled=${this._submitting}
        />
        ${this._showValidation&&!this._titleValid?r.qy`<span class="field-error">${this._t("title_required","Name is required.")}</span>`:r.s6}
      </div>

      <div class="field">
        <label>${this._t("field_description","Description")}<span class="required-star">*</span></label>
        <textarea
          class=${this._showValidation&&!this._descriptionValid?"invalid":""}
          .value=${this._description}
          @input=${e=>{this._description=e.target.value,this._error=""}}
          placeholder=${this._t("description_placeholder","What does this theme look like, and which HA themes does it pair with?")}
          ?disabled=${this._submitting}
        ></textarea>
        ${this._showValidation&&!this._descriptionValid?r.qy`<span class="field-error">${this._t("description_required","Description is required.")}</span>`:r.s6}
      </div>

      <div class="field">
        <label>${this._t("field_tags","Tags")}</label>
        <input
          type="text"
          .value=${this._tags}
          @input=${e=>this._tags=e.target.value}
          placeholder="glass, dark, minimal"
          ?disabled=${this._submitting}
        />
        <span class="field-hint">${this._t("tags_hint","Comma-separated")}</span>
      </div>

      <div class="field">
        <label>${this._t("field_json","Theme JSON")}<span class="required-star">*</span></label>
        <div class="json-row">
          <textarea
            class=${"code-field"+(this._showValidation&&t.error?" invalid":"")}
            spellcheck="false"
            .value=${this._json}
            @input=${e=>{this._json=e.target.value,this._error=""}}
            ?disabled=${this._submitting}
          ></textarea>
          <uc-theme-swatch .theme=${t.theme} large></uc-theme-swatch>
        </div>
        ${t.error?r.qy`<span class="field-error">${t.error}</span>`:t.warnings.length?r.qy`<span class="field-hint">${this._t("json_warnings","Dropped before publishing")}: ${t.warnings.join("; ")}</span>`:r.qy`<span class="field-hint">${this._t("json_hint","Exported from the Hub theme editor. Colours may reference HA variables.")}</span>`}
        ${a.length?r.qy`
              <div class="risk-box">
                <ha-icon icon="mdi:shield-check-outline"></ha-icon>
                <div>
                  <strong>${this._t("risk_title","Installers will be told this theme:")}</strong>
                  <ul>
                    ${a.map(e=>r.qy`<li>${e}</li>`)}
                  </ul>
                </div>
              </div>
            `:r.s6}
      </div>

      <div class="field">
        <label>${this._t("field_preview","Preview image")} <span style="font-weight:500;opacity:0.7">${this._t("optional","(optional)")}</span></label>
        ${this._keptPreview?r.qy`<img class="preview-img" src=${this._keptPreview} alt="" />`:this._previewFile?r.qy`<span class="file-chip"><ha-icon icon="mdi:image"></ha-icon>${this._previewFile.name}</span>`:r.s6}
        ${this._keptPreview||this._previewFile?r.qy`<button
              type="button"
              class="btn btn-secondary btn-small"
              style="align-self:flex-start"
              ?disabled=${this._submitting}
              @click=${()=>{this._previewFile=null,this._keptPreview=""}}
            >
              <ha-icon icon="mdi:close"></ha-icon>${this._t("replace_preview","Remove / replace")}
            </button>`:r.qy`
              <label class="upload-zone" for="theme-preview-upload">
                <span class="upload-zone-label">
                  <ha-icon icon="mdi:image-outline"></ha-icon>
                  <strong>${this._t("upload_preview","Click to upload a screenshot")}</strong>
                  <span>${this._t("preview_hint","Shown in the catalog instead of the generated swatch")}</span>
                </span>
                <input
                  id="theme-preview-upload"
                  type="file"
                  accept=${qa.iC}
                  @change=${this._handlePreviewInput}
                  ?disabled=${this._submitting}
                />
              </label>
            `}
      </div>

      ${this._error?r.qy`<div class="submit-error">${this._error}</div>`:r.s6}
    `}}Na.styles=r.AH`
    :host {
      display: contents;
    }
    ha-dialog {
      --ha-dialog-width-lg: min(720px, calc(100vw - 16px));
      --ha-dialog-max-width: min(720px, calc(100vw - 16px));
      --mdc-dialog-min-width: min(560px, calc(100vw - 32px));
      --mdc-dialog-max-width: min(720px, calc(100vw - 16px));
      --dialog-content-padding: var(--ha-space-4) var(--ha-space-6) var(--ha-space-6) var(--ha-space-6);
      --mdc-dialog-z-index: 8000;
      --dialog-z-index: 8000;
    }
    @media (max-width: 600px) {
      ha-dialog {
        --ha-dialog-width-lg: calc(100vw - 16px);
        --ha-dialog-max-width: calc(100vw - 16px);
        --mdc-dialog-min-width: calc(100vw - 32px);
        --mdc-dialog-max-width: calc(100vw - 16px);
        --mdc-dialog-max-height: calc(100dvh - 32px);
      }
    }
    .header-nav-placeholder {
      display: inline-block;
      width: 0;
      height: 0;
      overflow: hidden;
      pointer-events: none;
    }
    .dialog-subtitle {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin: 0 0 20px;
      line-height: 1.5;
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 16px;
    }
    .field label {
      font-size: 12px;
      font-weight: 600;
      color: var(--secondary-text-color);
      letter-spacing: 0.2px;
    }
    .required-star {
      color: var(--error-color, #db4437);
      margin-left: 2px;
    }
    .field input,
    .field textarea {
      width: 100%;
      padding: 9px 12px;
      border-radius: 7px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
      background: var(--card-background-color, var(--ha-card-background));
      color: var(--primary-text-color);
      font-size: 14px;
      font-family: inherit;
      box-sizing: border-box;
    }
    .field input:focus,
    .field textarea:focus {
      outline: none;
      border-color: var(--primary-color);
    }
    .field input.invalid,
    .field textarea.invalid {
      border-color: var(--error-color, #db4437);
    }
    .field textarea {
      min-height: 80px;
      resize: vertical;
      line-height: 1.4;
    }
    .field textarea.code-field {
      min-height: 180px;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 12px;
      line-height: 1.5;
    }
    .field-hint {
      font-size: 11px;
      color: var(--secondary-text-color);
      opacity: 0.8;
    }
    .field-error {
      font-size: 11px;
      color: var(--error-color, #db4437);
    }
    .json-row {
      display: grid;
      grid-template-columns: 1fr 220px;
      gap: 14px;
      align-items: start;
    }
    .json-row uc-theme-swatch {
      width: 100%;
    }
    @media (max-width: 600px) {
      .json-row {
        grid-template-columns: 1fr;
      }
    }
    .risk-box {
      display: flex;
      gap: 8px;
      align-items: flex-start;
      padding: 10px 12px;
      border-radius: 8px;
      background: var(--secondary-background-color);
      font-size: 12px;
      line-height: 1.5;
      color: var(--primary-text-color);
    }
    .risk-box ha-icon {
      flex: 0 0 auto;
      --mdc-icon-size: 18px;
      color: var(--primary-color);
    }
    .risk-box ul {
      margin: 4px 0 0;
      padding-left: 18px;
    }
    .upload-zone {
      border: 2px dashed var(--divider-color, rgba(0, 0, 0, 0.18));
      border-radius: 8px;
      padding: 14px 16px;
      cursor: pointer;
      text-align: center;
      display: block;
    }
    .upload-zone:hover {
      border-color: var(--primary-color);
    }
    .upload-zone input[type='file'] {
      display: none;
    }
    .upload-zone-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      color: var(--secondary-text-color);
      font-size: 13px;
    }
    .upload-zone-label ha-icon {
      --mdc-icon-size: 28px;
      color: var(--primary-color);
      opacity: 0.7;
    }
    .upload-zone-label strong {
      color: var(--primary-color);
    }
    .preview-img {
      width: 100%;
      max-width: 280px;
      height: 160px;
      border-radius: 10px;
      object-fit: cover;
      border: 1px solid var(--divider-color);
      display: block;
      margin-bottom: 8px;
    }
    .file-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      border-radius: 8px;
      background: var(--secondary-background-color);
      font-size: 12px;
      margin-bottom: 8px;
    }
    .submit-error {
      font-size: 13px;
      color: var(--error-color, #db4437);
      padding: 10px 12px;
      background: rgba(219, 68, 55, 0.07);
      border-radius: 6px;
      margin-bottom: 8px;
    }
    .submit-success {
      text-align: center;
      padding: 24px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .submit-success ha-icon {
      --mdc-icon-size: 48px;
      color: var(--success-color, #4caf50);
    }
    .submit-success h3 {
      margin: 0;
      font-size: 18px;
    }
    .submit-success p {
      margin: 0;
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
    }
    .dialog-footer-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      gap: var(--ha-space-3);
      width: 100%;
      box-sizing: border-box;
      border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      min-width: 120px;
      padding: 10px 20px;
      border-radius: 10px;
      border: none;
      font: inherit;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }
    .btn ha-icon {
      --mdc-icon-size: 18px;
    }
    .btn-primary {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
    }
    .btn-primary:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .btn-secondary {
      background: transparent;
      color: var(--secondary-text-color);
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.15));
    }
    .btn-small {
      min-width: 0;
      padding: 6px 12px;
      font-size: 12px;
    }
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    .spin {
      animation: spin 0.8s linear infinite;
    }
  `,Aa([(0,i.MZ)({attribute:!1})],Na.prototype,"theme",void 0),Aa([(0,i.MZ)()],Na.prototype,"mode",void 0),Aa([(0,i.MZ)({attribute:!1})],Na.prototype,"existing",void 0),Aa([(0,i.MZ)()],Na.prototype,"language",void 0),Aa([(0,i.wk)()],Na.prototype,"_title",void 0),Aa([(0,i.wk)()],Na.prototype,"_description",void 0),Aa([(0,i.wk)()],Na.prototype,"_tags",void 0),Aa([(0,i.wk)()],Na.prototype,"_json",void 0),Aa([(0,i.wk)()],Na.prototype,"_previewFile",void 0),Aa([(0,i.wk)()],Na.prototype,"_keptPreview",void 0),Aa([(0,i.wk)()],Na.prototype,"_submitting",void 0),Aa([(0,i.wk)()],Na.prototype,"_submitted",void 0),Aa([(0,i.wk)()],Na.prototype,"_submitStep",void 0),Aa([(0,i.wk)()],Na.prototype,"_error",void 0),Aa([(0,i.wk)()],Na.prototype,"_showValidation",void 0),customElements.get("uc-hub-submit-theme-dialog")||customElements.define("uc-hub-submit-theme-dialog",Na),a(7894);var Fa=function(e,t,a,r){var i,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(o<3?i(n):o>3?i(t,a,n):i(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n};const Ea="https://ultracard.io/theme-builder/";function Ia(e,t){return e.replace(/\{(\w+)\}/g,(e,a)=>{var r;return String(null!==(r=t[a])&&void 0!==r?r:"")})}function Da(e,...t){if(!e)return!0;const a=e.toLowerCase();return t.some(e=>Array.isArray(e)?e.some(e=>e.toLowerCase().includes(a)):(null!=e?e:"").toLowerCase().includes(a))}let Ra=class extends r.WF{constructor(){super(...arguments),this.initialView="browse",this._tick=0,this._view="browse",this._search="",this._toastMsg="",this._editor=null,this._importOpen=!1,this._importText="",this._haImportOpen=!1,this._haImportName="",this._haImportMode="auto",this._dashboards=[],this._applyDashboard="",this._applyTheme="",this._applying=!1,this._catalog=[],this._catalogLoading=!1,this._catalogError="",this._catalogSort="downloads",this._installing=new Set,this._myRatings=new Map,this._rating=null,this._cloudUser=null,this._showLogin=!1,this._share=null,this._editSubmission=null,this._mine=[],this._mineLoading=!1,this._mineError="",this._mineLoaded=!1,this._unsub=null,this._authListener=null}connectedCallback(){super.connectedCallback(),this._unsub=At.subscribe(()=>{this._tick++}),this._cloudUser=Gt.xd.getCurrentUser(),this._authListener=e=>{this._cloudUser=e,e?(this._showLogin=!1,this._loadMyRatings(),"mine"===this._view&&this._loadMine()):(this._mine=[],this._mineError="",this._mineLoaded=!1,this._myRatings=new Map)},Gt.xd.addListener(this._authListener),this._loadDashboards(),this._loadCatalog(),this._loadMyRatings()}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._unsub)||void 0===e||e.call(this),this._unsub=null,this._authListener&&(Gt.xd.removeListener(this._authListener),this._authListener=null),this._toastTimer&&clearTimeout(this._toastTimer)}updated(e){e.has("hass")&&this.hass&&(At.setHass(this.hass),this._dashboards.length||this._loadDashboards()),e.has("initialView")&&"mine"===this.initialView&&(this._setView("mine"),this.dispatchEvent(new CustomEvent("themes-view-applied",{bubbles:!0,composed:!0})))}get _lang(){var e,t;return(null===(t=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===t?void 0:t.language)||"en"}_t(e,t){return(0,n.kg)(`hub.themes.${e}`,this._lang,t)}_toast(e){this._toastMsg=e,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toastMsg="",2500)}_setView(e){this._view=e,this._importOpen=!1,this._haImportOpen=!1,"mine"===e&&this._cloudUser&&!this._mineLoaded&&this._loadMine()}async _loadDashboards(){if(this.hass)try{if(this._dashboards=await Nt.listDashboards(this.hass),!this._applyDashboard){const e=Nt.currentDashboard();this._applyDashboard=null!=e?e:"__default__"}}catch(e){}}_selectedDashboard(){return"__default__"===this._applyDashboard?this._dashboards.find(e=>null===e.urlPath):this._dashboards.find(e=>e.urlPath===this._applyDashboard)}async _apply(){const e=this._selectedDashboard();if(e&&this.hass&&await Et.confirm(this._t("apply_confirm_title","Apply theme to dashboard?"),Ia(this._t("apply_confirm",'This rewrites uc_theme on every Ultra Card in "{dashboard}". Continue?'),{dashboard:e.title}),{confirmText:this._t("apply_button","Apply to all Ultra Cards")})){this._applying=!0;try{const t=await Nt.applyTheme(this.hass,e,this._applyTheme||void 0);this._toast(t.cardsUpdated?Ia(this._t("apply_done","Updated {count} of {seen} Ultra Cards"),{count:t.cardsUpdated,seen:t.cardsSeen}):this._t("apply_none","No Ultra Cards needed changing"))}catch(e){const t=e instanceof Error?e.message:String(e);this._toast(`${this._t("apply_failed","Could not update dashboard")}: ${t}`)}finally{this._applying=!1}}}async _undo(){if(this.hass)try{await Nt.undo(this.hass),this._toast(this._t("undo_done","Restored previous dashboard configuration"))}catch(e){const t=e instanceof Error?e.message:String(e);this._toast(`${this._t("apply_failed","Could not update dashboard")}: ${t}`)}}async _loadCatalog(e=!1){e&&Ut.clearCache(),this._catalogLoading=!0,this._catalogError="";try{const e=await Ut.fetchThemes({orderby:"downloads",per_page:100});this._catalog=e.themes}catch(e){this._catalog=[],this._catalogError=e instanceof Error?e.message:String(e)}finally{this._catalogLoading=!1}}async _loadMyRatings(){if(Gt.xd.isAuthenticated())try{this._myRatings=await Xt.myRatings()}catch(e){}}_sorted(e){const t=[...e];switch(this._catalogSort){case"rating":t.sort((e,t)=>t.rating-e.rating||t.ratingCount-e.ratingCount||t.downloads-e.downloads);break;case"date":t.sort((e,t)=>t.created>e.created?1:t.created<e.created?-1:0);break;case"title":t.sort((e,t)=>e.name.localeCompare(t.name));break;default:t.sort((e,t)=>t.downloads-e.downloads)}return t}_catalogBySource(e){const t=this._search.trim();return this._sorted(this._catalog.filter(a=>a.source===e&&Da(t,a.name,a.description,a.author,a.tags)))}async _install(e){if(this._installing.has(e.id))return;const t=aa(e.definition);if(t.hasAny||e.warnings.length){const a=[...ra(t),...e.warnings.map(e=>`Dropped: ${e}`)];if(!await Et.confirm(Ia(this._t("install_confirm_title",'Install "{name}"?'),{name:e.name}),`${this._t("install_confirm","Before this theme lands on your cards, know that it:")}\n\n${a.join("\n")}`,{confirmText:this._t("install","Install")}))return}this._installing=new Set(this._installing).add(e.id);try{const t=await Ut.install(e);t&&(this._catalog=this._catalog.map(t=>t.id===e.id?Object.assign(Object.assign({},t),{downloads:t.downloads+1}):t)),this._toast(t?Ia(this._t("installed_done",'Installed "{name}"'),{name:t.name}):this._t("import_invalid","That does not look like a valid Ultra Card theme"))}finally{const t=new Set(this._installing);t.delete(e.id),this._installing=t}}_openRate(e){Gt.xd.isAuthenticated()?this._cloudUser&&e.authorId&&e.authorId===this._cloudUser.id?this._toast(this._t("rate_own","You cannot rate your own theme")):this._rating=e:this._showLogin=!0}async _submitRating(e,t){const a=await Xt.rate(e.id,t);return this._myRatings=new Map(this._myRatings).set(e.id,a.myRating),this._catalog=this._catalog.map(t=>t.id===e.id?Object.assign(Object.assign({},t),{rating:a.rating,ratingCount:a.ratingCount,myRating:a.myRating}):t),{rating:a.rating,count:a.ratingCount}}_openShare(e){Gt.xd.isAuthenticated()?this._share=e:this._showLogin=!0}async _loadMine(){if(Gt.xd.isAuthenticated()){this._mineLoading=!0,this._mineError="";try{this._mine=await Xt.listMine(),this._mineLoaded=!0}catch(e){const t=null==e?void 0:e.status;this._mineError=403===t?this._t("mine_admin_only","Theme authoring is available to Home Assistant administrators only. Sign in as an admin via Ultra Card Connect."):e instanceof Error?e.message:String(e)}finally{this._mineLoading=!1}}}async _withdraw(e){if(await Et.confirm(this._t("withdraw_confirm_title","Withdraw submission?"),Ia(this._t("withdraw_confirm",'"{name}" is taken out of the review queue. You can edit and resubmit later.'),{name:e.name}),{confirmText:this._t("withdraw","Withdraw")}))try{await Xt.withdraw(e.id),this._toast(Ia(this._t("withdrawn",'Withdrew "{name}"'),{name:e.name})),await this._loadMine()}catch(e){this._toast(e instanceof Error?e.message:String(e))}}async _deleteSubmission(e){if(await Et.confirm(this._t("delete_submission_title","Delete from ultracard.io?"),Ia(this._t("delete_submission_confirm",'"{name}" is removed from the catalog for everyone. This cannot be undone.'),{name:e.name}),{destructive:!0,confirmText:this._t("delete","Delete")}))try{await Xt.remove(e.id),this._toast(Ia(this._t("deleted",'Deleted "{name}"'),{name:e.name})),await this._loadMine(),this._loadCatalog(!0)}catch(e){this._toast(e instanceof Error?e.message:String(e))}}_builtinThemes(){const e=this._search.trim();return At.getAllThemes().filter(e=>{var t;return"builtin"===(null!==(t=e.source)&&void 0!==t?t:"builtin")}).filter(t=>Da(e,t.name,t.description,t.author))}_libraryThemes(){return At.getAllThemes().filter(e=>{var t;return"builtin"!==(null!==(t=e.source)&&void 0!==t?t:"builtin")})}_setGlobal(e){var t,a;At.setGlobalDefault(e===x?null:e);const r=null!==(a=null===(t=At.getTheme(e))||void 0===t?void 0:t.name)&&void 0!==a?a:e;this._toast(Ia(this._t("global_set","Global default: {name}"),{name:r}))}async _delete(e){await Et.confirm(this._t("delete_confirm_title","Delete theme?"),Ia(this._t("delete_confirm",'"{name}" will be removed from this browser. Cards using it fall back to the global default.'),{name:e.name}),{destructive:!0,confirmText:this._t("delete","Delete")})&&(At.removeFromLibrary(e.id),this._toast(Ia(this._t("deleted",'Deleted "{name}"'),{name:e.name})))}async _export(e){const t=At.exportTheme(e.id);t&&(await(0,ia.e)(t),this._toast(this._t("export_copied","Theme JSON copied to clipboard")))}_onEditorSave(e){const t=this._editor,a=At.saveToLibrary(e.detail.theme,{source:"local"});a?(!(null==t?void 0:t.theme)||t.asCopy||At.isBuiltin(t.theme.id)||t.theme.id===a.id||At.removeFromLibrary(t.theme.id),this._editor=null,"mine"!==this._view&&this._setView("mine"),this._toast(Ia(this._t("saved",'Saved "{name}"'),{name:a.name}))):this._toast(this._t("import_invalid","That does not look like a valid Ultra Card theme"))}_import(){let e;try{e=JSON.parse(this._importText)}catch(e){return void this._toast(this._t("import_invalid","That does not look like a valid Ultra Card theme"))}const t=At.saveToLibrary(e,{source:"local"});t?(this._importOpen=!1,this._importText="",this._toast(Ia(this._t("import_done",'Imported "{name}"'),{name:t.name}))):this._toast(this._t("import_invalid","That does not look like a valid Ultra Card theme"))}_importFromHa(){var e,t,a,r,i;const o=null===(a=null===(t=null===(e=this.hass)||void 0===e?void 0:e.themes)||void 0===t?void 0:t.themes)||void 0===a?void 0:a[this._haImportName];if(!o)return;const{theme:n,mapped:s}=function(e,t,a={}){var r,i,o;const n=function(e,t,a){var r,i;const o={};for(const[t,a]of Object.entries(e))"modes"!==t&&("string"!=typeof a&&"number"!=typeof a||(o[t]=String(a)));const n=e.modes;if(n){const e=null!==(i=null!==(r=n["auto"===t?a?"dark":"light":t])&&void 0!==r?r:n.light)&&void 0!==i?i:n.dark;if(e)for(const[t,a]of Object.entries(e))o[t]=String(a)}return o}(t,null!==(r=a.mode)&&void 0!==r?r:"auto",!!a.darkMode),s=[],l={};for(const[e,t]of Object.entries(oa)){const a=da(n,t);a&&(l[e]=a,s.push(`palette.${e}`))}const d=la(da(n,["ha-card-border-radius"])),c=la(da(n,["ha-card-border-width"])),p=da(n,["ha-card-border-color"]),h=da(n,["ha-card-box-shadow"]),u=function(e){if(!e)return;const t=/blur\(\s*(\d+(?:\.\d+)?)\s*px\s*\)/i.exec(e);return t?Math.round(parseFloat(t[1])):void 0}(da(n,["ha-card-backdrop-filter"])),m=da(n,na),g={surface:void 0!==u?"glass":"flat",radius:null!=d?d:12};void 0!==d&&s.push("radius"),void 0!==u&&(g.blur=u,s.push("blur")),void 0!==c&&(g.border_width=c,s.push("border_width")),p&&(g.border_color=p,s.push("border_color")),h&&"none"!==h&&(g.shadow=h,s.push("shadow")),m&&(g.font_family=m,s.push("font_family")),Object.keys(l).length&&(g.palette=l);const b={id:null!==(i=a.id)&&void 0!==i?i:`local-ha-${_=e,_.toLowerCase().trim().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").slice(0,50)||"theme"}`,name:null!==(o=a.name)&&void 0!==o?o:e,version:1,source:"local",description:`Imported from the Home Assistant theme "${e}"${t.modes?` (${"auto"!==a.mode&&a.mode?a.mode:a.darkMode?"dark":"light"} mode)`:""}.`,icon:"mdi:home-assistant",tokens:g};var _;const f={};return void 0!==d&&(f.card_border_radius=d),void 0!==c&&(f.card_border_width=c),p&&(f.card_border_color=p),l.card_bg&&(f.card_background=l.card_bg),"none"===h&&(f.card_shadow_enabled=!1),Object.keys(f).length&&(b.card=f),{theme:b,mapped:s}}(this._haImportName,o,{mode:this._haImportMode,darkMode:!!(null===(i=null===(r=this.hass)||void 0===r?void 0:r.themes)||void 0===i?void 0:i.darkMode)});this._haImportOpen=!1,this._editor={theme:n,asCopy:!1},this._toast(s.length?Ia(this._t("ha_import_mapped",'Mapped {count} values from "{name}"'),{count:s.length,name:this._haImportName}):Ia(this._t("ha_import_nothing",'"{name}" sets no card variables; starting from defaults'),{name:this._haImportName}))}render(){var e,t;return r.qy`
      <div class="themes-view-switch" role="tablist" aria-label=${this._t("view_switch","Themes view")} data-tick=${this._tick}>
        <button
          class="themes-view-option ${"browse"===this._view?"active":""}"
          role="tab"
          aria-selected=${"browse"===this._view?"true":"false"}
          @click=${()=>this._setView("browse")}
        >
          <ha-icon icon="mdi:palette-swatch"></ha-icon>
          ${this._t("view_browse","Themes")}
        </button>
        <button
          class="themes-view-option ${"mine"===this._view?"active":""}"
          role="tab"
          aria-selected=${"mine"===this._view?"true":"false"}
          @click=${()=>this._setView("mine")}
        >
          <ha-icon icon="mdi:account-edit-outline"></ha-icon>
          ${this._t("view_mine","My Themes")}
        </button>
      </div>

      ${"mine"===this._view?this._renderMine():this._renderBrowse()}

      ${this._editor?r.qy`<uc-theme-editor-dialog
            .hass=${this.hass}
            .theme=${this._editor.theme}
            .asCopy=${this._editor.asCopy}
            @theme-save=${this._onEditorSave}
            @theme-cancel=${()=>this._editor=null}
          ></uc-theme-editor-dialog>`:r.s6}
      ${this._showLogin?r.qy`<uc-hub-login-dialog @close=${()=>this._showLogin=!1}></uc-hub-login-dialog>`:r.s6}
      ${this._share?r.qy`<uc-hub-submit-theme-dialog
            mode="create"
            .theme=${this._share}
            .language=${this._lang}
            @theme-submitted=${()=>{this._setView("mine"),this._loadMine()}}
            @close=${()=>this._share=null}
          ></uc-hub-submit-theme-dialog>`:r.s6}
      ${this._editSubmission?r.qy`<uc-hub-submit-theme-dialog
            mode="edit"
            .existing=${this._editSubmission}
            .language=${this._lang}
            @theme-updated=${()=>{this._loadMine()}}
            @close=${()=>this._editSubmission=null}
          ></uc-hub-submit-theme-dialog>`:r.s6}
      ${this._rating?r.qy`<uc-hub-rate-dialog
            .presetId=${String(this._rating.id)}
            .presetName=${this._rating.name}
            .heading=${Ia(this._t("rate_title",'Rate "{name}"'),{name:this._rating.name})}
            .existingRating=${null!==(t=null!==(e=this._myRatings.get(this._rating.id))&&void 0!==e?e:this._rating.myRating)&&void 0!==t?t:0}
            .submitRating=${e=>this._submitRating(this._rating,e)}
            @rating-submitted=${()=>{this._rating=null,this._toast(this._t("rate_thanks","Thanks for rating!"))}}
            @close=${()=>this._rating=null}
          ></uc-hub-rate-dialog>`:r.s6}

      <div class="toast ${this._toastMsg?"show":""}">${this._toastMsg}</div>
    `}_renderBrowse(){var e;const t=null!==(e=At.getGlobalDefaultId())&&void 0!==e?e:x,a=this._builtinThemes(),i=this._catalogBySource("official"),o=this._catalogBySource("community"),n=this._search.trim();return r.qy`
      <div class="hub-tab-blurb">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <p>
          <strong>${this._t("view_browse","Themes")}</strong>
          ${this._t("browse_blurb","set the look of every Ultra Card at once: surface, corners, shadows, colours and each module’s default style. Pick a global default, install more from the catalog, and override per card or per module whenever you like.")}
        </p>
      </div>

      <div class="hub-section">
        <div class="section-header">
          <div class="header-icon"><ha-icon icon="mdi:earth"></ha-icon></div>
          <div class="header-content">
            <h3>${this._t("global_title","Global default")}</h3>
            <p>${this._t("global_desc","Used by every Ultra Card that has no theme of its own.")}</p>
          </div>
        </div>
        <uc-theme-picker
          .hass=${this.hass}
          .value=${t}
          hide-follow-global
          hide-none
          compact
          @theme-picked=${e=>this._setGlobal(e.detail.value)}
        ></uc-theme-picker>
        <label class="paint-page">
          <ha-switch
            .checked=${At.getPaintPage()}
            @change=${e=>At.setPaintPage(e.target.checked)}
          ></ha-switch>
          <span>
            <strong>${this._t("paint_page","Let themes paint the dashboard background")}</strong>
            <small
              >${this._t("paint_page_desc","Themes such as Neumorphic and Wood set the view behind their cards so shadows and materials read correctly. A background set on the view in the dashboard config still wins.")}</small
            >
          </span>
        </label>
      </div>

      <div class="themes-toolbar">
        <div class="search-box">
          <ha-icon icon="mdi:magnify"></ha-icon>
          <input
            type="search"
            placeholder=${this._t("search","Search themes…")}
            .value=${this._search}
            @input=${e=>this._search=e.target.value}
          />
        </div>
        <select
          class="catalog-sort"
          .value=${this._catalogSort}
          @change=${e=>this._catalogSort=e.target.value}
        >
          <option value="downloads" ?selected=${"downloads"===this._catalogSort}>${this._t("sort_downloads","Most installed")}</option>
          <option value="rating" ?selected=${"rating"===this._catalogSort}>${this._t("sort_rating","Top rated")}</option>
          <option value="date" ?selected=${"date"===this._catalogSort}>${this._t("sort_date","Newest")}</option>
          <option value="title" ?selected=${"title"===this._catalogSort}>${this._t("sort_title","Name")}</option>
        </select>
        <button class="btn ghost" ?disabled=${this._catalogLoading} @click=${()=>{this._loadCatalog(!0)}}>
          <ha-icon icon=${this._catalogLoading?"mdi:loading":"mdi:refresh"} class=${this._catalogLoading?"spin":""}></ha-icon>
          ${this._t("catalog_refresh","Refresh")}
        </button>
      </div>

      ${this._catalogError?r.qy`<div class="catalog-error">
            <ha-icon icon="mdi:cloud-off-outline"></ha-icon>
            <span>${this._t("catalog_error","Could not reach ultracard.io")}: ${this._catalogError}</span>
          </div>`:r.s6}

      <div class="hub-section">
        <div class="section-header">
          <div class="header-icon"><ha-icon icon="mdi:check-decagram"></ha-icon></div>
          <div class="header-content">
            <h3>${this._t("default_title","Default themes")}</h3>
            <p>${this._t("default_desc","Built into Ultra Card and maintained by the Ultra Card team. Official catalog themes install into your library with one tap.")}</p>
          </div>
          <span class="section-count">${a.length+i.length}</span>
        </div>
        ${a.length||i.length?r.qy`<div class="theme-grid">
              ${a.map(e=>this._renderThemeCard(e,e.id===t))}
              ${i.map(e=>this._renderCatalogCard(e,t))}
            </div>`:r.qy`<div class="section-empty">${Ia(this._t("search_empty",'Nothing matches "{query}"'),{query:n})}</div>`}
      </div>

      <div class="hub-section">
        <div class="section-header">
          <div class="header-icon"><ha-icon icon="mdi:account-group"></ha-icon></div>
          <div class="header-content">
            <h3>${this._t("community_title","Community themes")}</h3>
            <p>${this._t("community_desc","Made by Ultra Card members with the theme builder on ultracard.io. Rate the ones you install to help others find the good stuff.")}</p>
          </div>
          <span class="section-count">${o.length}</span>
        </div>
        ${this._catalogLoading&&!this._catalog.length?r.qy`<div class="catalog-loading"><ha-icon icon="mdi:loading" class="spin"></ha-icon>${this._t("catalog_loading","Loading catalog…")}</div>`:o.length?r.qy`<div class="theme-grid">${o.map(e=>this._renderCatalogCard(e,t))}</div>`:n?r.qy`<div class="section-empty">${Ia(this._t("search_empty",'Nothing matches "{query}"'),{query:n})}</div>`:this._catalogError?r.s6:r.qy`
                    <div class="empty-state">
                      <div class="empty-state-icon"><ha-icon icon="mdi:palette-swatch-outline"></ha-icon></div>
                      <h3>${this._t("catalog_empty_title","No community themes yet")}</h3>
                      <p>${this._t("catalog_empty","Be the first: build a theme and share it with the catalog.")}</p>
                      <a class="btn primary" href=${Ea} target="_blank" rel="noopener noreferrer">
                        <ha-icon icon="mdi:palette-advanced"></ha-icon>${this._t("open_builder","Open theme builder")}
                      </a>
                    </div>
                  `}
        <div class="builder-cta">
          <ha-icon icon="mdi:palette-advanced"></ha-icon>
          <span>${this._t("builder_hint","Want to make your own? The theme builder on ultracard.io has live previews for every control, and finished themes sync straight back here.")}</span>
          <a class="btn ghost" href=${Ea} target="_blank" rel="noopener noreferrer">
            ${this._t("open_builder","Open theme builder")}<ha-icon icon="mdi:open-in-new"></ha-icon>
          </a>
        </div>
      </div>

      ${this._renderApply()}
    `}_renderStars(e,t=14){const a=Math.round(e);return r.qy`<span class="star-rating" style="--star-size:${t}px">
      ${[1,2,3,4,5].map(e=>r.qy`<ha-icon icon=${e<=a?"mdi:star":"mdi:star-outline"} class=${e<=a?"":"empty"}></ha-icon>`)}
    </span>`}_renderCatalogRating(e){var t;const a=null!==(t=this._myRatings.get(e.id))&&void 0!==t?t:e.myRating,i=!!this._cloudUser&&!!e.authorId&&e.authorId===this._cloudUser.id,o=i?this._t("rate_own","You cannot rate your own theme"):a?Ia(this._t("rate_yours","You rated this {stars}/5. Tap to change."),{stars:a}):this._cloudUser?this._t("rate_tap","Tap to rate"):this._t("rate_sign_in","Sign in to rate");return r.qy`
      <button
        type="button"
        class="rating-btn ${i?"static":""} ${a?"mine":""}"
        title=${o}
        ?disabled=${i}
        @click=${t=>{t.stopPropagation(),this._openRate(e)}}
      >
        ${this._renderStars(e.rating)}
        <span class="rating-count">
          ${e.ratingCount?`${e.rating.toFixed(1)} (${e.ratingCount})`:this._t("rate_none","No ratings yet")}${a?` · ${Ia(this._t("rate_you","you: {stars}"),{stars:a})}`:""}
        </span>
      </button>
    `}_renderCatalogCard(e,t){var a;const i=Ut.installState(e),o=this._installing.has(e.id),n=aa(e.definition),s="not_installed"!==i,l=s&&e.catalogId===t;return r.qy`
      <div class="theme-card catalog-card ${l?"is-global":""}">
        ${e.preview?r.qy`<img class="catalog-preview" src=${e.preview} alt="" loading="lazy" />`:r.qy`<uc-theme-swatch .theme=${e.definition}></uc-theme-swatch>`}
        <div class="theme-meta">
          <div class="theme-title">
            <ha-icon icon=${null!==(a=e.definition.icon)&&void 0!==a?a:"mdi:palette"}></ha-icon>
            <span class="name" title=${e.name}>${e.name}</span>
            <span class="badge ${e.source}">${e.source}</span>
          </div>
          ${e.description?r.qy`<p class="desc">${e.description}</p>`:r.s6}
          <div class="theme-sub">
            <span class="author" title=${e.author}>${e.author}</span>
            <span title=${this._t("downloads","Installs")}><ha-icon icon="mdi:download"></ha-icon>${e.downloads}</span>
            <span>v${e.version}</span>
            ${n.css?r.qy`<span class="risk-pill" title=${ra(n).join("\n")}>
                  <ha-icon icon="mdi:code-braces"></ha-icon>CSS
                </span>`:r.s6}
            ${l?r.qy`<span class="global-pill">${this._t("is_global","Global default")}</span>`:r.s6}
          </div>
          ${this._renderCatalogRating(e)}
          ${e.tags.length?r.qy`<div class="tag-row">${e.tags.slice(0,4).map(e=>r.qy`<span class="tag">${e}</span>`)}</div>`:r.s6}
        </div>
        <div class="theme-actions">
          ${"installed"===i?r.qy`<button class="btn ghost installed" disabled>
                <ha-icon icon="mdi:check"></ha-icon>${this._t("installed","Installed")}
              </button>`:r.qy`<button class="btn primary" ?disabled=${o} @click=${()=>this._install(e)}>
                <ha-icon icon=${o?"mdi:loading":"update_available"===i?"mdi:update":"mdi:download"} class=${o?"spin":""}></ha-icon>
                ${"update_available"===i?this._t("update","Update"):this._t("install","Install")}
              </button>`}
          ${s&&!l?r.qy`<button class="action-btn" title=${this._t("set_global","Set as global default")} @click=${()=>this._setGlobal(e.catalogId)}>
                <ha-icon icon="mdi:earth"></ha-icon>
              </button>`:r.s6}
          <a
            class="action-btn"
            title=${this._t("view_on_site","View on ultracard.io")}
            href=${`https://ultracard.io/themes/#theme-${e.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ha-icon icon="mdi:open-in-new"></ha-icon>
          </a>
        </div>
      </div>
    `}_renderThemeCard(e,t){var a,i;const o=At.isBuiltin(e.id),n=null!==(a=e.source)&&void 0!==a?a:"builtin";return r.qy`
      <div class="theme-card ${t?"is-global":""}">
        <uc-theme-swatch .theme=${e.id===x?null:e}></uc-theme-swatch>
        <div class="theme-meta">
          <div class="theme-title">
            <ha-icon icon=${null!==(i=e.icon)&&void 0!==i?i:"mdi:palette"}></ha-icon>
            <span class="name">${e.name}</span>
            <span class="badge ${n}">${this._sourceLabel(n)}</span>
          </div>
          ${e.description?r.qy`<p class="desc">${e.description}</p>`:r.s6}
          <div class="theme-sub">
            ${e.author?r.qy`<span class="author">${e.author}</span>`:r.s6}
            <span>v${e.version}</span>
            ${t?r.qy`<span class="global-pill">${this._t("is_global","Global default")}</span>`:r.s6}
          </div>
        </div>
        <div class="theme-actions">
          ${t?r.s6:r.qy`<button class="action-btn" title=${this._t("set_global","Set as global default")} @click=${()=>this._setGlobal(e.id)}>
                <ha-icon icon="mdi:earth"></ha-icon>
              </button>`}
          ${o?r.s6:r.qy`<button class="action-btn" title=${this._t("edit","Edit")} @click=${()=>this._editor={theme:e,asCopy:!1}}>
                <ha-icon icon="mdi:pencil"></ha-icon>
              </button>`}
          <button class="action-btn" title=${this._t("duplicate","Duplicate")} @click=${()=>this._editor={theme:e,asCopy:!0}}>
            <ha-icon icon="mdi:content-copy"></ha-icon>
          </button>
          <button class="action-btn" title=${this._t("export","Export")} @click=${()=>this._export(e)}>
            <ha-icon icon="mdi:export-variant"></ha-icon>
          </button>
          ${"local"===n?r.qy`<button class="action-btn" title=${this._t("share","Share to catalog")} @click=${()=>this._openShare(e)}>
                <ha-icon icon="mdi:cloud-upload-outline"></ha-icon>
              </button>`:r.s6}
          ${o?r.s6:r.qy`<button class="action-btn delete" title=${this._t("delete","Delete")} @click=${()=>this._delete(e)}>
                <ha-icon icon="mdi:delete-outline"></ha-icon>
              </button>`}
        </div>
      </div>
    `}_sourceLabel(e){switch(e){case"builtin":return this._t("filter_builtin","Built-in");case"local":return this._t("filter_local","Mine");case"official":return this._t("filter_official","Official");default:return this._t("filter_community","Community")}}_renderApply(){const e=At.getAllThemes(),t=Nt.canUndo(),a=this._selectedDashboard(),i="yaml"===(null==a?void 0:a.mode);return r.qy`
      <div class="hub-section">
        <div class="section-header">
          <div class="header-icon"><ha-icon icon="mdi:view-dashboard-edit"></ha-icon></div>
          <div class="header-content">
            <h3>${this._t("apply_title","Apply to a dashboard")}</h3>
            <p>${this._t("apply_desc","Write a theme onto every Ultra Card of a dashboard.")}</p>
          </div>
        </div>
        <div class="apply-row">
          <label class="field">
            <span>${this._t("apply_dashboard","Dashboard")}</span>
            <select
              .value=${this._applyDashboard}
              @change=${e=>this._applyDashboard=e.target.value}
            >
              ${this._dashboards.map(e=>{var t,a;return r.qy`<option value=${null!==(t=e.urlPath)&&void 0!==t?t:"__default__"} ?selected=${(null!==(a=e.urlPath)&&void 0!==a?a:"__default__")===this._applyDashboard}>
                  ${e.title}${"yaml"===e.mode?` · ${this._t("yaml_mode","YAML mode (read-only)")}`:""}
                </option>`})}
            </select>
          </label>
          <label class="field">
            <span>${this._t("apply_theme","Theme")}</span>
            <select
              .value=${this._applyTheme}
              @change=${e=>this._applyTheme=e.target.value}
            >
              <option value="" ?selected=${""===this._applyTheme}>
                ${this._t("apply_follow_global","Follow global default (clear per-card theme)")}
              </option>
              ${e.map(e=>r.qy`<option value=${e.id} ?selected=${e.id===this._applyTheme}>${e.name}</option>`)}
            </select>
          </label>
          <div class="apply-actions">
            <button class="btn primary" ?disabled=${this._applying||!a||i} @click=${this._apply}>
              <ha-icon icon=${this._applying?"mdi:loading":"mdi:check-all"}></ha-icon>
              ${this._t("apply_button","Apply to all Ultra Cards")}
            </button>
            ${t?r.qy`<button class="btn ghost" @click=${this._undo}>
                  <ha-icon icon="mdi:undo"></ha-icon>${this._t("undo","Undo last apply")} (${t.title})
                </button>`:r.s6}
          </div>
        </div>
      </div>
    `}_renderMine(){var e;const t=null!==(e=At.getGlobalDefaultId())&&void 0!==e?e:x,a=this._libraryThemes(),i=function(e){var t,a;const r=null!==(a=null===(t=null==e?void 0:e.themes)||void 0===t?void 0:t.themes)&&void 0!==a?a:{};return Object.keys(r).sort((e,t)=>e.localeCompare(t)).map(e=>{var t;return{name:e,hasModes:!!(null===(t=r[e])||void 0===t?void 0:t.modes)}})}(this.hass),o=i.find(e=>e.name===this._haImportName);return r.qy`
      <div class="hub-tab-blurb">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <p>
          <strong>${this._t("view_mine","My Themes")}</strong>
          ${this._t("mine_blurb","holds the themes you created, imported or installed in this browser, plus anything you shared with the catalog and where it is in review.")}
        </p>
      </div>

      <div class="hub-section">
        <div class="section-header">
          <div class="header-icon"><ha-icon icon="mdi:bookshelf"></ha-icon></div>
          <div class="header-content">
            <h3>${this._t("library_title","Your library")}</h3>
            <p>${this._t("library_desc","Themes you created, imported or installed. Edit and duplicate them here, or share one with the catalog.")}</p>
          </div>
          <div class="header-actions">
            ${i.length?r.qy`<button
                  class="btn ghost"
                  @click=${()=>{var e,t;this._haImportOpen=!this._haImportOpen,this._importOpen=!1,this._haImportName||(this._haImportName=(null===(t=null===(e=this.hass)||void 0===e?void 0:e.themes)||void 0===t?void 0:t.theme)||i[0].name)}}
                >
                  <ha-icon icon="mdi:home-assistant"></ha-icon>${this._t("ha_import","From HA theme")}
                </button>`:r.s6}
            <button
              class="btn ghost"
              @click=${()=>{this._importOpen=!this._importOpen,this._haImportOpen=!1}}
            >
              <ha-icon icon="mdi:import"></ha-icon>${this._t("import","Import JSON")}
            </button>
            <a class="btn ghost" href=${Ea} target="_blank" rel="noopener noreferrer" title=${this._t("builder_title","Full theme builder with live previews on ultracard.io")}>
              <ha-icon icon="mdi:palette-advanced"></ha-icon>${this._t("open_builder_short","Theme builder")}
            </a>
            <button class="btn primary" @click=${()=>this._editor={theme:null,asCopy:!1}}>
              <ha-icon icon="mdi:plus"></ha-icon>${this._t("new_theme","New theme")}
            </button>
          </div>
        </div>

        ${this._haImportOpen?r.qy`
              <div class="import-box">
                <h4>${this._t("ha_import_title","Import from a Home Assistant theme")}</h4>
                <p>${this._t("ha_import_desc","Reads the card colours, radius, shadow and font from an installed HA theme and opens the result in the editor. Add a surface and module presets, then save.")}</p>
                <div class="apply-row">
                  <label class="field">
                    <span>${this._t("ha_import_theme","HA theme")}</span>
                    <select
                      .value=${this._haImportName}
                      @change=${e=>this._haImportName=e.target.value}
                    >
                      ${i.map(e=>r.qy`<option value=${e.name} ?selected=${e.name===this._haImportName}>${e.name}</option>`)}
                    </select>
                  </label>
                  ${(null==o?void 0:o.hasModes)?r.qy`<label class="field">
                        <span>${this._t("ha_import_mode","Mode")}</span>
                        <select
                          .value=${this._haImportMode}
                          @change=${e=>this._haImportMode=e.target.value}
                        >
                          <option value="auto" ?selected=${"auto"===this._haImportMode}>${this._t("ha_import_mode_auto","Current (follow HA dark mode)")}</option>
                          <option value="light" ?selected=${"light"===this._haImportMode}>${this._t("ha_import_mode_light","Light")}</option>
                          <option value="dark" ?selected=${"dark"===this._haImportMode}>${this._t("ha_import_mode_dark","Dark")}</option>
                        </select>
                      </label>`:r.s6}
                </div>
                <div class="row-end">
                  <button class="btn ghost" @click=${()=>this._haImportOpen=!1}>
                    ${this._t("editor_cancel","Cancel")}
                  </button>
                  <button class="btn primary" ?disabled=${!o} @click=${this._importFromHa}>
                    <ha-icon icon="mdi:import"></ha-icon>${this._t("ha_import_button","Open in editor")}
                  </button>
                </div>
              </div>
            `:r.s6}
        ${this._importOpen?r.qy`
              <div class="import-box">
                <h4>${this._t("import_title","Import theme")}</h4>
                <p>${this._t("import_desc","Paste a theme JSON exported from Ultra Card or downloaded from the theme gallery.")}</p>
                <textarea
                  rows="5"
                  spellcheck="false"
                  placeholder=${this._t("import_placeholder",'{ "id": "my-theme", ... }')}
                  .value=${this._importText}
                  @input=${e=>this._importText=e.target.value}
                ></textarea>
                <div class="row-end">
                  <button class="btn ghost" @click=${()=>this._importOpen=!1}>
                    ${this._t("editor_cancel","Cancel")}
                  </button>
                  <button class="btn primary" ?disabled=${!this._importText.trim()} @click=${this._import}>
                    ${this._t("import_button","Import")}
                  </button>
                </div>
              </div>
            `:r.s6}

        ${a.length?r.qy`<div class="theme-grid">${a.map(e=>this._renderThemeCard(e,e.id===t))}</div>`:r.qy`
              <div class="empty-state">
                <div class="empty-state-icon"><ha-icon icon="mdi:palette-swatch-outline"></ha-icon></div>
                <h3>${this._t("library_empty_title","No themes of your own yet")}</h3>
                <p>${this._t("library_empty","Create one here, import a JSON file, or install a theme from the catalog and it shows up in this list.")}</p>
                <div class="empty-actions">
                  <button class="btn primary" @click=${()=>this._editor={theme:null,asCopy:!1}}>
                    <ha-icon icon="mdi:plus"></ha-icon>${this._t("new_theme","New theme")}
                  </button>
                  <button class="btn ghost" @click=${()=>this._setView("browse")}>
                    <ha-icon icon="mdi:palette-swatch"></ha-icon>${this._t("browse_catalog","Browse themes")}
                  </button>
                </div>
              </div>
            `}
      </div>

      ${this._renderSubmissions()}
    `}_renderSubmissions(){const e=e=>{if(e.has_pending_revision)return{text:this._t("status_revision","Update in review"),cls:"pending"};switch(e.review_status){case"approved":return{text:this._t("status_approved","Published"),cls:"approved"};case"changes_requested":return{text:this._t("status_changes","Changes requested"),cls:"changes"};case"rejected":return{text:this._t("status_rejected","Rejected"),cls:"rejected"};default:return{text:this._t("status_pending","In review"),cls:"pending"}}};return r.qy`
      <div class="hub-section">
        <div class="section-header">
          <div class="header-icon"><ha-icon icon="mdi:cloud-upload-outline"></ha-icon></div>
          <div class="header-content">
            <h3>${this._t("mine_title","Shared with the catalog")}</h3>
            <p>${this._t("mine_desc","Themes you submitted to ultracard.io: review status, installs and ratings.")}</p>
          </div>
          ${this._cloudUser?r.qy`<div class="header-actions">
                <button class="btn ghost" ?disabled=${this._mineLoading} @click=${()=>{this._loadMine()}}>
                  <ha-icon icon=${this._mineLoading?"mdi:loading":"mdi:refresh"} class=${this._mineLoading?"spin":""}></ha-icon>
                  ${this._t("catalog_refresh","Refresh")}
                </button>
              </div>`:r.s6}
        </div>
        ${this._cloudUser?this._mineLoading&&!this._mine.length?r.qy`<div class="catalog-loading"><ha-icon icon="mdi:loading" class="spin"></ha-icon>${this._t("mine_loading","Loading your themes…")}</div>`:this._mineError?r.qy`<div class="catalog-error"><ha-icon icon="mdi:alert-circle-outline"></ha-icon><span>${this._mineError}</span></div>`:this._mine.length?r.qy`
                    <div class="mine-list">
                      ${this._mine.map(t=>{const a=e(t),i="approved"===t.review_status;return r.qy`
                          <div class="mine-row">
                            <div class="mine-thumb">
                              ${t.preview?r.qy`<img src=${t.preview} alt="" loading="lazy" />`:t.definition?r.qy`<uc-theme-swatch .theme=${t.definition}></uc-theme-swatch>`:r.qy`<ha-icon icon="mdi:palette"></ha-icon>`}
                            </div>
                            <div class="mine-meta">
                              <div class="theme-title">
                                <span class="name">${t.name}</span>
                                <span class="status-pill ${a.cls}">${a.text}</span>
                              </div>
                              <div class="theme-sub">
                                <span>v${t.version}</span>
                                ${i?r.qy`<span title=${this._t("downloads","Installs")}><ha-icon icon="mdi:download"></ha-icon>${t.downloads}</span>
                                      <span class="rating-inline" title=${this._t("rating","Rating")}>
                                        ${this._renderStars(t.rating,12)}
                                        ${t.rating_count?`${t.rating.toFixed(1)} (${t.rating_count})`:this._t("rate_none","No ratings yet")}
                                      </span>`:r.s6}
                                ${t.submitted_at?r.qy`<span>${t.submitted_at.slice(0,10)}</span>`:r.s6}
                              </div>
                              ${t.moderator_note?r.qy`<p class="mod-note"><ha-icon icon="mdi:message-text-outline"></ha-icon>${t.moderator_note}</p>`:r.s6}
                            </div>
                            <div class="theme-actions mine-actions">
                              <button class="action-btn" title=${this._t("edit","Edit")} @click=${()=>this._editSubmission=t}>
                                <ha-icon icon="mdi:pencil"></ha-icon>
                              </button>
                              <a
                                class="action-btn"
                                title=${this._t("open_in_builder","Open in theme builder")}
                                href=${`${Ea}?id=${t.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ha-icon icon="mdi:palette-advanced"></ha-icon>
                              </a>
                              ${"pending"===t.review_status||t.has_pending_revision?r.qy`<button class="action-btn" title=${this._t("withdraw","Withdraw")} @click=${()=>this._withdraw(t)}>
                                    <ha-icon icon="mdi:undo-variant"></ha-icon>
                                  </button>`:r.s6}
                              <button class="action-btn delete" title=${this._t("delete","Delete")} @click=${()=>this._deleteSubmission(t)}>
                                <ha-icon icon="mdi:delete-outline"></ha-icon>
                              </button>
                            </div>
                          </div>
                        `})}
                    </div>
                  `:r.qy`
                    <div class="empty-state">
                      <div class="empty-state-icon"><ha-icon icon="mdi:palette-swatch-outline"></ha-icon></div>
                      <h3>${this._t("mine_empty_title","Nothing shared yet")}</h3>
                      <p>${this._t("mine_empty","Use the share button on one of your library themes, or build one on ultracard.io and submit it from there.")}</p>
                    </div>
                  `:r.qy`
              <div class="empty-state">
                <div class="empty-state-icon"><ha-icon icon="mdi:account-lock-outline"></ha-icon></div>
                <h3>${this._t("mine_login_title","Sign in to manage your shared themes")}</h3>
                <p>${this._t("mine_login_desc","Sharing, rating and editing catalog themes goes through Ultra Card Connect.")}</p>
                <button class="btn primary" @click=${()=>this._showLogin=!0}>
                  <ha-icon icon="mdi:login"></ha-icon>${this._t("sign_in","Sign in")}
                </button>
              </div>
            `}
      </div>
    `}};Ra.styles=[o.z,r.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
      }

      /* Themes | My Themes segmented control (matches Presets) */
      .themes-view-switch {
        display: flex;
        gap: 4px;
        padding: 4px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        border-radius: 14px;
        margin-bottom: 16px;
      }
      .themes-view-option {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 14px;
        border: none;
        border-radius: 10px;
        background: transparent;
        color: var(--secondary-text-color);
        font-size: 14px;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
        transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
      }
      .themes-view-option ha-icon {
        --mdc-icon-size: 18px;
      }
      .themes-view-option:hover:not(.active) {
        color: var(--primary-text-color);
      }
      .themes-view-option.active {
        background: var(--ha-card-background, var(--card-background-color));
        color: var(--primary-color);
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.14);
      }

      .hub-tab-blurb p {
        margin: 0;
      }
      .section-header .header-actions {
        margin-left: auto;
        display: flex;
        gap: 8px;
        flex: none;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
      .section-header .header-content {
        min-width: 0;
      }
      .section-count {
        margin-left: auto;
        align-self: flex-start;
        font-size: 12px;
        font-weight: 600;
        padding: 2px 9px;
        border-radius: 999px;
        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
        color: var(--secondary-text-color);
      }
      .section-empty {
        padding: 18px 4px 6px;
        font-size: 13px;
        color: var(--secondary-text-color);
      }
      .paint-page {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-top: 16px;
        padding-top: 14px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        cursor: pointer;
      }
      .paint-page span {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .paint-page strong {
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .paint-page small {
        font-size: 12px;
        line-height: 1.4;
        color: var(--secondary-text-color);
      }
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        border-radius: 10px;
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: var(--ha-card-background, var(--card-background-color));
        color: var(--primary-text-color);
        transition: all 0.2s ease;
      }
      .btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .btn:hover:not(:disabled) {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }
      .btn.primary {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .btn.primary:hover:not(:disabled) {
        color: var(--text-primary-color, #fff);
        filter: brightness(1.1);
      }
      .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .import-box {
        border: 2px solid var(--primary-color);
        border-radius: 12px;
        padding: 16px;
        margin-bottom: 16px;
      }
      .import-box h4 {
        margin: 0 0 4px;
        font-size: 15px;
      }
      .import-box p {
        margin: 0 0 10px;
        font-size: 13px;
        color: var(--secondary-text-color);
      }
      textarea,
      .field select {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 13px;
        color: var(--primary-text-color);
        background: var(--primary-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 8px 10px;
        outline: none;
      }
      textarea {
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        resize: vertical;
      }
      textarea:focus,
      .field select:focus {
        border-color: var(--primary-color);
      }
      .row-end {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 10px;
      }

      /* Toolbar */
      .themes-toolbar {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 16px;
      }
      .search-box {
        flex: 1 1 200px;
        min-width: 0;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 12px;
        border-radius: 12px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: var(--ha-card-background, var(--card-background-color));
      }
      .search-box ha-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        flex: none;
      }
      .search-box input {
        flex: 1;
        min-width: 0;
        border: none;
        outline: none;
        background: transparent;
        font: inherit;
        font-size: 14px;
        color: var(--primary-text-color);
        padding: 10px 0;
      }
      .search-box:focus-within {
        border-color: var(--primary-color);
      }
      .catalog-sort {
        font: inherit;
        font-size: 13px;
        color: var(--primary-text-color);
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        padding: 10px 10px;
        outline: none;
        flex: none;
      }
      .catalog-sort:focus {
        border-color: var(--primary-color);
      }
      .themes-toolbar .btn {
        flex: none;
        padding: 9px 14px;
      }

      /* Grid */
      .theme-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 14px;
        margin-top: 16px;
      }
      .theme-card {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 12px;
        border-radius: 14px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
        background: var(--ha-card-background, var(--card-background-color));
        transition: border-color 0.2s ease;
        min-width: 0;
      }
      .theme-card:hover {
        border-color: var(--primary-color);
      }
      .theme-card.is-global {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 1px var(--primary-color) inset;
      }
      .theme-meta {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .theme-title {
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
      }
      .theme-title ha-icon {
        --mdc-icon-size: 18px;
        color: var(--primary-color);
        flex: none;
      }
      .theme-title .name {
        font-weight: 600;
        font-size: 15px;
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .badge {
        flex: none;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        padding: 2px 7px;
        border-radius: 999px;
        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
        color: var(--secondary-text-color);
      }
      .badge.official {
        background: rgba(76, 175, 80, 0.15);
        color: var(--success-color, #4caf50);
      }
      .badge.community {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
        color: var(--primary-color);
      }
      .badge.local {
        background: rgba(255, 152, 0, 0.15);
        color: var(--warning-color, #ff9800);
      }
      .desc {
        margin: 0;
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .theme-sub {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 10px;
        align-items: center;
        font-size: 11px;
        color: var(--secondary-text-color);
      }
      .theme-sub .author {
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .theme-sub ha-icon {
        --mdc-icon-size: 13px;
        vertical-align: -2px;
        margin-right: 2px;
      }
      .global-pill {
        color: var(--primary-color);
        font-weight: 600;
      }
      .theme-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: auto;
        align-items: center;
      }
      a.action-btn {
        text-decoration: none;
      }
      .apply-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
        align-items: end;
      }
      .apply-actions {
        grid-column: 1 / -1;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      /* Stars */
      .star-rating {
        display: inline-flex;
        gap: 1px;
        line-height: 0;
      }
      .star-rating ha-icon {
        --mdc-icon-size: var(--star-size, 14px);
        color: #ffb300;
        margin: 0;
      }
      .star-rating ha-icon.empty {
        opacity: 0.3;
      }
      .rating-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        align-self: flex-start;
        margin-top: 2px;
        padding: 3px 6px 3px 2px;
        border: none;
        border-radius: 8px;
        background: transparent;
        font: inherit;
        font-size: 11px;
        color: var(--secondary-text-color);
        cursor: pointer;
        transition: background 0.15s ease;
      }
      .rating-btn:hover:not(:disabled) {
        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
      }
      .rating-btn.static {
        cursor: default;
      }
      .rating-btn.mine {
        color: var(--primary-color);
      }
      .rating-inline {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      /* Catalog */
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
      .spin {
        animation: spin 0.9s linear infinite;
      }
      .catalog-loading,
      .catalog-error {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 18px 12px;
        font-size: 13px;
        color: var(--secondary-text-color);
      }
      .catalog-error {
        color: var(--error-color, #db4437);
        margin-bottom: 8px;
      }
      .catalog-preview {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 10px;
        background: var(--secondary-background-color);
      }
      .risk-pill {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 1px 6px;
        border-radius: 999px;
        background: rgba(255, 152, 0, 0.15);
        color: var(--warning-color, #ff9800);
        font-weight: 600;
        cursor: help;
      }
      .tag-row {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .tag {
        font-size: 10px;
        padding: 2px 6px;
        border-radius: 6px;
        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06);
        color: var(--secondary-text-color);
      }
      .btn.installed {
        color: var(--success-color, #4caf50);
        border-color: transparent;
        opacity: 1;
        cursor: default;
      }
      .builder-cta {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 18px;
        padding: 12px 14px;
        border-radius: 12px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        font-size: 13px;
        color: var(--primary-text-color);
      }
      .builder-cta > ha-icon {
        --mdc-icon-size: 22px;
        color: var(--primary-color);
        flex: none;
      }
      .builder-cta span {
        flex: 1;
        min-width: 0;
        line-height: 1.4;
      }
      .builder-cta .btn {
        flex: none;
      }
      .empty-state .btn,
      .empty-actions {
        margin-top: 14px;
      }
      .empty-actions {
        display: flex;
        gap: 8px;
        justify-content: center;
        flex-wrap: wrap;
      }
      .empty-actions .btn {
        margin-top: 0;
      }

      /* Shared with the catalog */
      .mine-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 12px;
      }
      .mine-row {
        display: grid;
        grid-template-columns: 140px minmax(0, 1fr) auto;
        gap: 14px;
        align-items: center;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
        background: var(--ha-card-background, var(--card-background-color));
      }
      .mine-thumb {
        width: 140px;
        aspect-ratio: 16 / 10;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        color: var(--secondary-text-color);
      }
      .mine-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .mine-thumb uc-theme-swatch {
        width: 100%;
      }
      .mine-meta {
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .mine-actions {
        margin-top: 0;
        justify-content: flex-end;
      }
      .status-pill {
        flex: none;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        padding: 2px 7px;
        border-radius: 999px;
        font-weight: 600;
      }
      .status-pill.pending {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
        color: var(--primary-color);
      }
      .status-pill.approved {
        background: rgba(76, 175, 80, 0.15);
        color: var(--success-color, #4caf50);
      }
      .status-pill.changes {
        background: rgba(255, 152, 0, 0.15);
        color: var(--warning-color, #ff9800);
      }
      .status-pill.rejected {
        background: rgba(219, 68, 55, 0.12);
        color: var(--error-color, #db4437);
      }
      .mod-note {
        margin: 2px 0 0;
        font-size: 12px;
        color: var(--secondary-text-color);
        display: flex;
        gap: 6px;
        align-items: flex-start;
      }
      .mod-note ha-icon {
        --mdc-icon-size: 14px;
        margin-top: 1px;
      }

      /* Mobile */
      @media (max-width: 700px) {
        .apply-row {
          grid-template-columns: 1fr;
        }
        .themes-toolbar {
          flex-wrap: wrap;
        }
        .search-box {
          flex: 1 1 100%;
        }
        .catalog-sort {
          flex: 1 1 auto;
        }
        .section-header {
          flex-wrap: wrap;
        }
        .section-header .header-actions {
          flex: 1 1 100%;
          margin-left: 0;
          justify-content: flex-start;
        }
        .section-header .header-actions .btn {
          flex: 1 1 auto;
          justify-content: center;
        }
        .builder-cta {
          flex-wrap: wrap;
        }
        .builder-cta span {
          flex: 1 1 100%;
        }
        .builder-cta .btn {
          flex: 1 1 100%;
          justify-content: center;
        }
      }
      @media (max-width: 600px) {
        .theme-grid {
          grid-template-columns: 1fr;
        }
        .mine-row {
          grid-template-columns: 96px minmax(0, 1fr);
          align-items: start;
        }
        .mine-thumb {
          width: 96px;
        }
        .mine-actions {
          grid-column: 1 / -1;
          justify-content: flex-start;
        }
      }
    `],Fa([(0,i.MZ)({attribute:!1})],Ra.prototype,"hass",void 0),Fa([(0,i.MZ)()],Ra.prototype,"initialView",void 0),Fa([(0,i.wk)()],Ra.prototype,"_tick",void 0),Fa([(0,i.wk)()],Ra.prototype,"_view",void 0),Fa([(0,i.wk)()],Ra.prototype,"_search",void 0),Fa([(0,i.wk)()],Ra.prototype,"_toastMsg",void 0),Fa([(0,i.wk)()],Ra.prototype,"_editor",void 0),Fa([(0,i.wk)()],Ra.prototype,"_importOpen",void 0),Fa([(0,i.wk)()],Ra.prototype,"_importText",void 0),Fa([(0,i.wk)()],Ra.prototype,"_haImportOpen",void 0),Fa([(0,i.wk)()],Ra.prototype,"_haImportName",void 0),Fa([(0,i.wk)()],Ra.prototype,"_haImportMode",void 0),Fa([(0,i.wk)()],Ra.prototype,"_dashboards",void 0),Fa([(0,i.wk)()],Ra.prototype,"_applyDashboard",void 0),Fa([(0,i.wk)()],Ra.prototype,"_applyTheme",void 0),Fa([(0,i.wk)()],Ra.prototype,"_applying",void 0),Fa([(0,i.wk)()],Ra.prototype,"_catalog",void 0),Fa([(0,i.wk)()],Ra.prototype,"_catalogLoading",void 0),Fa([(0,i.wk)()],Ra.prototype,"_catalogError",void 0),Fa([(0,i.wk)()],Ra.prototype,"_catalogSort",void 0),Fa([(0,i.wk)()],Ra.prototype,"_installing",void 0),Fa([(0,i.wk)()],Ra.prototype,"_myRatings",void 0),Fa([(0,i.wk)()],Ra.prototype,"_rating",void 0),Fa([(0,i.wk)()],Ra.prototype,"_cloudUser",void 0),Fa([(0,i.wk)()],Ra.prototype,"_showLogin",void 0),Fa([(0,i.wk)()],Ra.prototype,"_share",void 0),Fa([(0,i.wk)()],Ra.prototype,"_editSubmission",void 0),Fa([(0,i.wk)()],Ra.prototype,"_mine",void 0),Fa([(0,i.wk)()],Ra.prototype,"_mineLoading",void 0),Fa([(0,i.wk)()],Ra.prototype,"_mineError",void 0),Fa([(0,i.wk)()],Ra.prototype,"_mineLoaded",void 0),Ra=Fa([(0,i.EM)("hub-themes-tab")],Ra)},7907(e,t,a){a.d(t,{iC:()=>r}),new Map,new Map,new Set;const r=["image/*","image/png","image/jpeg","image/gif","image/webp","image/avif","image/svg+xml","image/bmp","image/tiff","image/x-icon","image/vnd.microsoft.icon","image/heic","image/heif","image/jxl","image/apng",".png",".jpg",".jpeg",".gif",".webp",".avif",".svg",".bmp",".tif",".tiff",".ico",".heic",".heif",".jxl",".apng"].join(",")},9286(e,t,a){function r(e){try{return localStorage.getItem(e)}catch(e){return null}}function i(e,t){try{return localStorage.setItem(e,t),!0}catch(e){return!1}}function o(e){try{localStorage.removeItem(e)}catch(e){}}a.d(t,{FX:()=>i,Pw:()=>o,bi:()=>r})},8716(e,t,a){async function r(e){const t="undefined"!=typeof navigator?navigator.clipboard:void 0;if(!(null==t?void 0:t.writeText))return i(e);try{return await t.writeText(e),!0}catch(t){return i(e)}}function i(e){if("undefined"==typeof document||!document.body)return!1;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="0",t.style.left="-9999px",t.style.opacity="0",document.body.appendChild(t);const a=document.getSelection(),r=a&&a.rangeCount>0?a.getRangeAt(0):null;try{return t.focus(),t.select(),t.setSelectionRange(0,t.value.length),document.execCommand("copy")}catch(e){return!1}finally{document.body.removeChild(t),a&&r&&(a.removeAllRanges(),a.addRange(r))}}a.d(t,{e:()=>r})},7804(e,t,a){a.d(t,{WL:()=>r});class r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}a.d(t,["OA",0,{ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},"u$",0,e=>(...t)=>({_$litDirective$:e,values:t})])}};