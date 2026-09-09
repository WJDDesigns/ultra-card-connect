export const __webpack_esm_ids__=[4309];export const __webpack_esm_modules__={1500(e,a,t){t.d(a,{UltraLunarPhaseModule:()=>A});var n=t(2618),i=t(6781),r=t(6478),o=t(7475),l=t(378);const s=Math.PI/180,c=864e5,u=23.4397*s,d=29.530588853;function h(e){return function(e){return e.valueOf()/c-.5+2440588}(e)-2451545}function p(e,a){return new Date(e.valueOf()+a*c/24)}function g(e,a){return Math.atan2(Math.sin(e)*Math.cos(u)-Math.tan(a)*Math.sin(u),Math.cos(e))}function m(e,a){return Math.asin(Math.sin(a)*Math.cos(u)+Math.cos(a)*Math.sin(u)*Math.sin(e))}function _(e,a,t){return Math.atan2(Math.sin(e),Math.cos(e)*Math.sin(a)-Math.tan(t)*Math.cos(a))}function v(e,a,t){return Math.asin(Math.sin(a)*Math.sin(t)+Math.cos(a)*Math.cos(t)*Math.cos(e))}function f(e,a){return s*(280.16+360.9856235*e)-a}function x(e){const a=s*(134.963+13.064993*e),t=s*(93.272+13.22935*e),n=s*(218.316+13.176396*e)+6.289*s*Math.sin(a),i=5.128*s*Math.sin(t),r=385001-20905*Math.cos(a);return{ra:g(n,i),dec:m(n,i),dist:r}}function b(e,a,t){const n=s*-t,i=s*a,r=h(e),o=x(r),l=f(r,n)-o.ra;let c=v(l,i,o.dec);const u=Math.atan2(Math.sin(l),Math.tan(i)*Math.cos(o.dec)-Math.sin(o.dec)*Math.cos(l));c+=function(e){return e<0&&(e=0),2967e-7/Math.tan(e+.00312536/(e+.08901179))}(c);const d=(_(l,i,o.dec)/s+180)%360;return{azimuthDegrees:d<0?d+360:d,altitudeDegrees:c/s,distanceKm:o.dist,parallacticAngle:u}}function w(e){const a=h(e),t=function(e){const a=function(e){return s*(357.5291+.98560028*e)}(e),t=function(e){return e+s*(1.9148*Math.sin(e)+.02*Math.sin(2*e)+3e-4*Math.sin(3*e))+102.9372*s+Math.PI}(a);return{dec:m(t,0),ra:g(t,0)}}(a),n=x(a),i=149598e3,r=Math.acos(Math.sin(t.dec)*Math.sin(n.dec)+Math.cos(t.dec)*Math.cos(n.dec)*Math.cos(t.ra-n.ra)),o=Math.atan2(i*Math.sin(r),n.dist-i*Math.cos(r)),l=Math.atan2(Math.cos(t.dec)*Math.sin(t.ra-n.ra),Math.sin(t.dec)*Math.cos(n.dec)-Math.cos(t.dec)*Math.sin(n.dec)*Math.cos(t.ra-n.ra));return{fraction:(1+Math.cos(o))/2,phase:.5+.5*o*(l<0?-1:1)/Math.PI,angle:l}}function y(e,a,t){const n=new Date(e);n.setHours(0,0,0,0);const i=.133*s;let r=k(n,a,t).altitude-i,o=0,l=0,c=0;for(let e=1;e<=24;e+=2){const s=k(p(n,e),a,t).altitude-i,u=k(p(n,e+1),a,t).altitude-i,d=(r+u)/2-s,h=(u-r)/2,g=-h/(2*d);c=(d*g+h)*g+s;const m=h*h-4*d*s;let _=0,v=0,f=0;if(m>=0){const e=Math.sqrt(m)/(2*Math.abs(d));v=g-e,f=g+e,Math.abs(v)<=1&&_++,Math.abs(f)<=1&&_++,v<-1&&(v=f)}if(1===_?r<0?o=e+v:l=e+v:2===_&&(o=e+(c<0?f:v),l=e+(c<0?v:f)),o&&l)break;r=u}return{rise:o?p(n,o):null,set:l?p(n,l):null,alwaysUp:!o&&!l&&c>0,alwaysDown:!o&&!l&&c<=0}}function k(e,a,t){const n=s*-t,i=s*a,r=h(e),o=x(r),l=f(r,n)-o.ra;return{altitude:v(l,i,o.dec),azimuth:_(l,i,o.dec)}}function $(e,a,t){const n=new Date(e);n.setHours(0,0,0,0);let i=null;for(let e=0;e<=1440;e+=10){const r=new Date(n.valueOf()+6e4*e),o=k(r,a,t).altitude;(!i||o>i.alt)&&(i={time:r,alt:o})}return!i||i.alt<=0?i?{time:i.time,altitudeDegrees:i.alt/s}:null:{time:i.time,altitudeDegrees:i.alt/s}}const M=["new_moon","waxing_crescent","first_quarter","waxing_gibbous","full_moon","waning_gibbous","last_quarter","waning_crescent"];function z(e){const a=Math.round((e%1+1)%1*8)%8;return M[a]}function F(e,a){const t=e=>{let t=w(e).phase-a;return t=(t%1+1)%1,t>.5&&(t-=1),t};let n=new Date(e.valueOf()),i=t(n);for(let e=0;e<244.244710824;e++){const e=new Date(n.valueOf()+108e5),a=t(e);if(i<0&&a>=0){let a=n.valueOf(),i=e.valueOf();for(let e=0;e<24;e++){const e=(a+i)/2;t(new Date(e))<0?a=e:i=e}return new Date((a+i)/2)}n=e,i=a}return new Date(e.valueOf()+2551442876.8992)}const D=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];var S=t(6477);const P=["moon_age","illumination","azimuth","altitude","distance","position","moonrise","moonset","moon_highest","next_full_moon","next_new_moon","next_phase"],U={small:"12px",medium:"14px",large:"16px","x-large":"20px","xx-large":"24px"};function L(e,a){const t=(e%1+1)%1;if(t<.017||t>.983)return null;if(Math.abs(t-.5)<.017)return"FULL";const n=Math.cos(2*Math.PI*t),i=Math.abs(a*n).toFixed(2);return t<.5?`M 0 ${-a} A ${a} ${a} 0 0 1 0 ${a} A ${i} ${a} 0 0 ${n>0?0:1} 0 ${-a} Z`:`M 0 ${-a} A ${a} ${a} 0 0 0 0 ${a} A ${i} ${a} 0 0 ${n>0?1:0} 0 ${-a} Z`}const q=[[-38,-42,26],[4,-40,17],[28,-18,19],[60,-26,11],[44,6,13],[27,24,10],[-56,-6,28],[-44,30,12],[-18,30,14],[-30,-8,7],[-10,62,6]];function C(e,a){return q.map(([t,n,i])=>`<circle cx="${t}" cy="${n}" r="${i}" fill="${e}" fill-opacity="${a}"/>`).join("")}function N(e,a,t,n,i){const r=L(e,98),o=t?' transform="scale(-1,-1)"':"";let l="";return"FULL"===r?l=`\n      <g${o}>\n        <circle r="98" fill="url(#uc-lunar-surface-${n})"/>\n        ${C("#9d9a90",.38)}\n      </g>`:r&&(l=`\n      <g${o} mask="url(#uc-lunar-lit-${n})">\n        <circle r="98" fill="url(#uc-lunar-surface-${n})"/>\n        ${C("#9d9a90",.38)}\n      </g>`),`\n  <svg viewBox="-110 -110 220 220" width="${a}" height="${a}" role="img" aria-label="moon" class="uc-lunar-moon-svg">\n    <defs>\n      <radialGradient id="uc-lunar-surface-${n}" cx="38%" cy="34%" r="78%">\n        <stop offset="0%" stop-color="#fbf9f2"/>\n        <stop offset="55%" stop-color="#e4e1d6"/>\n        <stop offset="100%" stop-color="#b9b6aa"/>\n      </radialGradient>\n      <radialGradient id="uc-lunar-glow-${n}" cx="50%" cy="50%" r="50%">\n        <stop offset="55%" stop-color="${i}" stop-opacity="0.30"/>\n        <stop offset="78%" stop-color="${i}" stop-opacity="0.10"/>\n        <stop offset="100%" stop-color="${i}" stop-opacity="0"/>\n      </radialGradient>\n      <filter id="uc-lunar-soft-${n}" x="-20%" y="-20%" width="140%" height="140%">\n        <feGaussianBlur stdDeviation="2.5"/>\n      </filter>\n      <mask id="uc-lunar-lit-${n}">\n        <rect x="-110" y="-110" width="220" height="220" fill="black"/>\n        ${r&&"FULL"!==r?`<path d="${r}" fill="white" filter="url(#uc-lunar-soft-${n})"/>`:""}\n      </mask>\n    </defs>\n    <circle r="108" fill="url(#uc-lunar-glow-${n})" class="uc-lunar-moon-halo"/>\n    <g${o}>\n      <circle r="98" fill="#23262e"/>\n      ${C("#1b1e25",.55)}\n      <circle r="98" fill="none" stroke="#3a3e49" stroke-width="1"/>\n    </g>\n    ${l}\n  </svg>`}function T(e,a,t){const n=L(e,9);let i="";return"FULL"===n?i='<circle r="9" fill="#e8e5da"/>':n&&(i=`<path d="${n}" fill="#e8e5da"/>`),`\n  <svg viewBox="-10 -10 20 20" width="${a}" height="${a}" aria-hidden="true">\n    <g${t?' transform="scale(-1,-1)"':""}>\n      <circle r="9" fill="rgba(255,255,255,0.13)"/>\n      ${i}\n    </g>\n  </svg>`}class A extends o.m{constructor(){super(...arguments),this.handlesOwnDesignStyles=!0,this.metadata={type:"lunar_phase",title:"Lunar Phase",description:"Animated lunar phase tracker with live moon data, month calendar, and horizon graph",author:"WJD Designs",version:"1.0.0",icon:"mdi:moon-waxing-crescent",category:"content",tags:["moon","lunar","phase","astronomy","calendar","animated","pro","premium"]},this._uiState=new Map,this._snapshotCache=new Map,this._swipeStartX=null,this._tickTimer=null}createDefault(e,a){return{id:e||this.generateId("lunar_phase"),type:"lunar_phase",location_source:"default",location_entity:"",latitude:void 0,longitude:void 0,southern_hemisphere:!1,default_view:"phase",show_view_switcher:!0,layout:"full",moon_position:"left",moon_size:130,items_per_page:5,hidden_items:[],show_compact_labels:!0,show_date_nav:!0,number_decimals:1,use_miles:!1,time_12hr:!1,graph_mode:"today",graph_show_time:!0,graph_show_current:!0,graph_show_highest:!0,graph_y_ticks:!1,graph_x_ticks:!0,background_style:"night_sky",custom_background:"",show_starfield:!0,header_font_size:"x-large",header_text_transform:"capitalize",header_color:"",label_font_size:"auto",label_text_transform:"none",label_color:"",accent_color:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const a=[],t=e;return e.id||a.push("Module ID is required"),e.type||a.push("Module type is required"),"custom"===t.location_source&&("number"==typeof t.latitude&&"number"==typeof t.longitude||a.push("Custom location requires latitude and longitude")),"entity"!==t.location_source||t.location_entity||a.push("Select a location entity"),{valid:0===a.length,errors:a}}renderGeneralTab(e,a,t,i){var o,s,c,u,d,h,p,g;const m=e,_=(null===(o=null==a?void 0:a.locale)||void 0===o?void 0:o.language)||"en",v=l.xd.checkIntegrationAuth(a);if("pro"!==(null===(s=null==v?void 0:v.subscription)||void 0===s?void 0:s.tier)||"active"!==(null===(c=null==v?void 0:v.subscription)||void 0===c?void 0:c.status))return this._renderProLockUI(_);const f=[{value:"auto",label:(0,r.kg)("editor.lunar_phase.font_auto",_,"Auto")},{value:"small",label:(0,r.kg)("editor.lunar_phase.font_small",_,"Small")},{value:"medium",label:(0,r.kg)("editor.lunar_phase.font_medium",_,"Medium")},{value:"large",label:(0,r.kg)("editor.lunar_phase.font_large",_,"Large")},{value:"x-large",label:(0,r.kg)("editor.lunar_phase.font_x_large",_,"X-Large")},{value:"xx-large",label:(0,r.kg)("editor.lunar_phase.font_xx_large",_,"XX-Large")}],x=[{value:"none",label:(0,r.kg)("editor.lunar_phase.transform_none",_,"None")},{value:"capitalize",label:(0,r.kg)("editor.lunar_phase.transform_capitalize",_,"Capitalize")},{value:"uppercase",label:(0,r.kg)("editor.lunar_phase.transform_uppercase",_,"Uppercase")},{value:"lowercase",label:(0,r.kg)("editor.lunar_phase.transform_lowercase",_,"Lowercase")}],b=P.map(e=>({value:e,label:this._itemLabel(e,_)}));return n.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">

        <!-- ── LOCATION ──────────────────────────────────────────────── -->
        ${this.renderSettingsSection((0,r.kg)("editor.lunar_phase.location_section",_,"Location"),(0,r.kg)("editor.lunar_phase.location_section_desc",_,"Latitude and longitude used for moon position, rise and set times."),[])}
        ${this.renderSegmentedField((0,r.kg)("editor.lunar_phase.location_source",_,"Location source"),(0,r.kg)("editor.lunar_phase.location_source_desc",_,"Use your Home Assistant location, an entity, or manual coordinates."),m.location_source||"default",[{value:"default",label:(0,r.kg)("editor.lunar_phase.location_default",_,"System"),icon:"mdi:home-map-marker"},{value:"entity",label:(0,r.kg)("editor.lunar_phase.location_entity_opt",_,"Entity"),icon:"mdi:map-marker-account"},{value:"custom",label:(0,r.kg)("editor.lunar_phase.location_custom",_,"Custom"),icon:"mdi:map-marker-radius"}],e=>{i({location_source:e}),this.triggerPreviewUpdate()})}
        ${"entity"===m.location_source?this.renderConditionalFieldsGroup((0,r.kg)("editor.lunar_phase.location_entity_group",_,"Location Entity"),n.qy`
                ${this.renderEntityPickerWithVariables(a,t,"location_entity",m.location_entity||"",e=>{i({location_entity:e}),this.triggerPreviewUpdate()},void 0,(0,r.kg)("editor.lunar_phase.location_entity",_,"Entity with latitude/longitude attributes"))}
              `):n.s6}
        ${"custom"===m.location_source?this.renderConditionalFieldsGroup((0,r.kg)("editor.lunar_phase.location_custom_group",_,"Custom Coordinates"),n.qy`
                ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.latitude",_,"Latitude"),(0,r.kg)("editor.lunar_phase.latitude_desc",_,"Decimal degrees, -90 to 90"),a,{latitude:null!==(u=m.latitude)&&void 0!==u?u:""},[this.numberField("latitude",-90,90,1e-4)],e=>{var a;i({latitude:null===(a=e.detail.value)||void 0===a?void 0:a.latitude}),this.triggerPreviewUpdate()})}
                ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.longitude",_,"Longitude"),(0,r.kg)("editor.lunar_phase.longitude_desc",_,"Decimal degrees, -180 to 180"),a,{longitude:null!==(d=m.longitude)&&void 0!==d?d:""},[this.numberField("longitude",-180,180,1e-4)],e=>{var a;i({longitude:null===(a=e.detail.value)||void 0===a?void 0:a.longitude}),this.triggerPreviewUpdate()})}
              `):n.s6}
        ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.southern_hemisphere",_,"Southern hemisphere"),(0,r.kg)("editor.lunar_phase.southern_hemisphere_desc",_,"Mirror the moon image the way it appears south of the equator."),a,{southern_hemisphere:!0===m.southern_hemisphere},[this.booleanField("southern_hemisphere")],e=>{var a,t;i({southern_hemisphere:null!==(t=null===(a=e.detail.value)||void 0===a?void 0:a.southern_hemisphere)&&void 0!==t&&t}),this.triggerPreviewUpdate()})}

        <!-- ── VIEWS & LAYOUT ────────────────────────────────────────── -->
        ${this.renderSettingsSection((0,r.kg)("editor.lunar_phase.layout_section",_,"Views & Layout"),(0,r.kg)("editor.lunar_phase.layout_section_desc",_,"Choose the default view, layout style, and moon graphic options."),[])}
        ${this.renderSegmentedField((0,r.kg)("editor.lunar_phase.default_view",_,"Default view"),(0,r.kg)("editor.lunar_phase.default_view_desc",_,"View shown when the card loads."),m.default_view||"phase",[{value:"phase",label:(0,r.kg)("editor.lunar_phase.view_phase",_,"Phase"),icon:"mdi:moon-waxing-crescent"},{value:"calendar",label:(0,r.kg)("editor.lunar_phase.view_calendar",_,"Calendar"),icon:"mdi:calendar-month"},{value:"horizon",label:(0,r.kg)("editor.lunar_phase.view_horizon",_,"Horizon"),icon:"mdi:chart-bell-curve-cumulative"}],e=>{i({default_view:e}),this._uiState.delete(m.id),this.triggerPreviewUpdate()})}
        ${this.renderSegmentedField((0,r.kg)("editor.lunar_phase.layout",_,"Layout style"),(0,r.kg)("editor.lunar_phase.layout_desc",_,"Full shows everything; compact styles fit small dashboard slots and expand on tap."),m.layout||"full",[{value:"full",label:(0,r.kg)("editor.lunar_phase.layout_full",_,"Full"),icon:"mdi:view-dashboard"},{value:"compact",label:(0,r.kg)("editor.lunar_phase.layout_compact",_,"Compact"),icon:"mdi:view-compact"},{value:"minimal",label:(0,r.kg)("editor.lunar_phase.layout_minimal",_,"Minimal"),icon:"mdi:minus-circle-outline"},{value:"moon_only",label:(0,r.kg)("editor.lunar_phase.layout_moon_only",_,"Moon only"),icon:"mdi:moon-full"}],e=>{i({layout:e}),this._uiState.delete(m.id),this.triggerPreviewUpdate()})}
        ${this.renderSegmentedField((0,r.kg)("editor.lunar_phase.moon_position",_,"Moon position"),(0,r.kg)("editor.lunar_phase.moon_position_desc",_,"Side of the card the moon graphic sits on (full layout)."),m.moon_position||"left",[{value:"left",label:(0,r.kg)("editor.lunar_phase.position_left",_,"Left"),icon:"mdi:format-horizontal-align-left"},{value:"right",label:(0,r.kg)("editor.lunar_phase.position_right",_,"Right"),icon:"mdi:format-horizontal-align-right"}],e=>{i({moon_position:e}),this.triggerPreviewUpdate()})}
        ${this.renderSliderField((0,r.kg)("editor.lunar_phase.moon_size",_,"Moon size"),(0,r.kg)("editor.lunar_phase.moon_size_desc",_,"Diameter of the moon graphic."),null!==(h=m.moon_size)&&void 0!==h?h:130,130,60,260,2,e=>{i({moon_size:e}),this.triggerPreviewUpdate()},"px")}
        ${this.renderSliderField((0,r.kg)("editor.lunar_phase.items_per_page",_,"Data items per page"),(0,r.kg)("editor.lunar_phase.items_per_page_desc",_,"Rows shown before the list paginates. Swipe or use the dots to switch pages."),null!==(p=m.items_per_page)&&void 0!==p?p:5,5,3,12,1,e=>{i({items_per_page:e}),this.triggerPreviewUpdate()},"")}
        ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.show_view_switcher",_,"Show view switcher"),(0,r.kg)("editor.lunar_phase.show_view_switcher_desc",_,"Header buttons to switch between phase, calendar, and horizon views."),a,{show_view_switcher:!1!==m.show_view_switcher},[this.booleanField("show_view_switcher")],e=>{var a,t;i({show_view_switcher:null===(t=null===(a=e.detail.value)||void 0===a?void 0:a.show_view_switcher)||void 0===t||t}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.show_date_nav",_,"Show date navigation"),(0,r.kg)("editor.lunar_phase.show_date_nav_desc",_,"Footer with previous / next day arrows and a back-to-today button."),a,{show_date_nav:!1!==m.show_date_nav},[this.booleanField("show_date_nav")],e=>{var a,t;i({show_date_nav:null===(t=null===(a=e.detail.value)||void 0===a?void 0:a.show_date_nav)||void 0===t||t}),this.triggerPreviewUpdate()})}

        <!-- ── DATA ITEMS ────────────────────────────────────────────── -->
        ${this.renderSettingsSection((0,r.kg)("editor.lunar_phase.data_section",_,"Data Items"),(0,r.kg)("editor.lunar_phase.data_section_desc",_,"Hide individual data rows and control number and time formatting."),[])}
        ${this.renderChipListField((0,r.kg)("editor.lunar_phase.hidden_items",_,"Hidden items"),(0,r.kg)("editor.lunar_phase.hidden_items_desc",_,"Data rows that should not be displayed."),a,m.hidden_items||[],e=>{i({hidden_items:e}),this.triggerPreviewUpdate()},{mode:"select",variant:"exclude",selectOptions:b,selectAddLabel:(0,r.kg)("editor.lunar_phase.hide_item_add",_,"Hide an item")})}
        ${this.renderSliderField((0,r.kg)("editor.lunar_phase.number_decimals",_,"Decimal places"),(0,r.kg)("editor.lunar_phase.number_decimals_desc",_,"Precision for numeric values like illumination and azimuth."),null!==(g=m.number_decimals)&&void 0!==g?g:1,1,0,3,1,e=>{i({number_decimals:e}),this.triggerPreviewUpdate()},"")}
        ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.use_miles",_,"Distance in miles"),(0,r.kg)("editor.lunar_phase.use_miles_desc",_,"Show the moon distance in miles instead of kilometers."),a,{use_miles:!0===m.use_miles},[this.booleanField("use_miles")],e=>{var a,t;i({use_miles:null!==(t=null===(a=e.detail.value)||void 0===a?void 0:a.use_miles)&&void 0!==t&&t}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.time_12hr",_,"12-hour time"),(0,r.kg)("editor.lunar_phase.time_12hr_desc",_,"Use AM/PM times instead of 24-hour format."),a,{time_12hr:!0===m.time_12hr},[this.booleanField("time_12hr")],e=>{var a,t;i({time_12hr:null!==(t=null===(a=e.detail.value)||void 0===a?void 0:a.time_12hr)&&void 0!==t&&t}),this.triggerPreviewUpdate()})}

        <!-- ── HORIZON GRAPH ─────────────────────────────────────────── -->
        ${this.renderSettingsSection((0,r.kg)("editor.lunar_phase.graph_section",_,"Horizon Graph"),(0,r.kg)("editor.lunar_phase.graph_section_desc",_,"Configure the 24-hour moon altitude chart."),[{title:(0,r.kg)("editor.lunar_phase.graph_show_time",_,"Show rise/set times"),description:(0,r.kg)("editor.lunar_phase.graph_show_time_desc",_,"Time labels at the moonrise and moonset markers."),hass:a,data:{graph_show_time:!1!==m.graph_show_time},schema:[this.booleanField("graph_show_time")],onChange:e=>{var a,t;i({graph_show_time:null===(t=null===(a=e.detail.value)||void 0===a?void 0:a.graph_show_time)||void 0===t||t}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.lunar_phase.graph_show_current",_,"Show current position"),description:(0,r.kg)("editor.lunar_phase.graph_show_current_desc",_,"Pulsing marker at the moon’s current altitude."),hass:a,data:{graph_show_current:!1!==m.graph_show_current},schema:[this.booleanField("graph_show_current")],onChange:e=>{var a,t;i({graph_show_current:null===(t=null===(a=e.detail.value)||void 0===a?void 0:a.graph_show_current)||void 0===t||t}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.lunar_phase.graph_show_highest",_,"Show highest point"),description:(0,r.kg)("editor.lunar_phase.graph_show_highest_desc",_,"Marker at the moon’s transit (highest altitude)."),hass:a,data:{graph_show_highest:!1!==m.graph_show_highest},schema:[this.booleanField("graph_show_highest")],onChange:e=>{var a,t;i({graph_show_highest:null===(t=null===(a=e.detail.value)||void 0===a?void 0:a.graph_show_highest)||void 0===t||t}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.lunar_phase.graph_x_ticks",_,"Show time axis"),description:(0,r.kg)("editor.lunar_phase.graph_x_ticks_desc",_,"Hour labels along the bottom of the chart."),hass:a,data:{graph_x_ticks:!1!==m.graph_x_ticks},schema:[this.booleanField("graph_x_ticks")],onChange:e=>{var a,t;i({graph_x_ticks:null===(t=null===(a=e.detail.value)||void 0===a?void 0:a.graph_x_ticks)||void 0===t||t}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.lunar_phase.graph_y_ticks",_,"Show altitude axis"),description:(0,r.kg)("editor.lunar_phase.graph_y_ticks_desc",_,"Degree labels along the left of the chart."),hass:a,data:{graph_y_ticks:!0===m.graph_y_ticks},schema:[this.booleanField("graph_y_ticks")],onChange:e=>{var a,t;i({graph_y_ticks:null!==(t=null===(a=e.detail.value)||void 0===a?void 0:a.graph_y_ticks)&&void 0!==t&&t}),this.triggerPreviewUpdate()}}])}
        ${this.renderSegmentedField((0,r.kg)("editor.lunar_phase.graph_mode",_,"Graph window"),(0,r.kg)("editor.lunar_phase.graph_mode_desc",_,"Today shows midnight to midnight; dynamic shows a rolling 24 hours around now."),m.graph_mode||"today",[{value:"today",label:(0,r.kg)("editor.lunar_phase.graph_today",_,"Today"),icon:"mdi:calendar-today"},{value:"dynamic",label:(0,r.kg)("editor.lunar_phase.graph_dynamic",_,"Dynamic"),icon:"mdi:update"}],e=>{i({graph_mode:e}),this.triggerPreviewUpdate()})}

        <!-- ── APPEARANCE ────────────────────────────────────────────── -->
        ${this.renderSettingsSection((0,r.kg)("editor.lunar_phase.appearance_section",_,"Appearance"),(0,r.kg)("editor.lunar_phase.appearance_section_desc",_,"Background, starfield, fonts, and colors."),[])}
        ${this.renderSegmentedField((0,r.kg)("editor.lunar_phase.background_style",_,"Background"),(0,r.kg)("editor.lunar_phase.background_style_desc",_,"Backdrop behind the moon and data."),m.background_style||"night_sky",[{value:"night_sky",label:(0,r.kg)("editor.lunar_phase.bg_night_sky",_,"Night sky"),icon:"mdi:weather-night"},{value:"theme",label:(0,r.kg)("editor.lunar_phase.bg_theme",_,"Theme"),icon:"mdi:palette"},{value:"custom",label:(0,r.kg)("editor.lunar_phase.bg_custom",_,"Image"),icon:"mdi:image"},{value:"transparent",label:(0,r.kg)("editor.lunar_phase.bg_transparent",_,"None"),icon:"mdi:circle-off-outline"}],e=>{i({background_style:e}),this.triggerPreviewUpdate()})}
        ${"custom"===m.background_style?this.renderConditionalFieldsGroup((0,r.kg)("editor.lunar_phase.custom_bg_group",_,"Custom Background"),n.qy`
                ${this.renderFileField((0,r.kg)("editor.lunar_phase.custom_background",_,"Background image"),(0,r.kg)("editor.lunar_phase.custom_background_desc",_,"Upload an image or paste a URL."),a,m.custom_background||"",e=>{i({custom_background:e}),this.triggerPreviewUpdate()})}
              `):n.s6}
        ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.show_starfield",_,"Animated starfield"),(0,r.kg)("editor.lunar_phase.show_starfield_desc",_,"Twinkling stars layered over the background."),a,{show_starfield:!1!==m.show_starfield},[this.booleanField("show_starfield")],e=>{var a,t;i({show_starfield:null===(t=null===(a=e.detail.value)||void 0===a?void 0:a.show_starfield)||void 0===t||t}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.show_compact_labels",_,"Compact stat labels"),(0,r.kg)("editor.lunar_phase.show_compact_labels_desc",_,"Show text labels under the compact layout stats."),a,{show_compact_labels:!1!==m.show_compact_labels},[this.booleanField("show_compact_labels")],e=>{var a,t;i({show_compact_labels:null===(t=null===(a=e.detail.value)||void 0===a?void 0:a.show_compact_labels)||void 0===t||t}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.header_font_size",_,"Header font size"),(0,r.kg)("editor.lunar_phase.header_font_size_desc",_,"Size of the phase name header."),a,{header_font_size:m.header_font_size||"x-large"},[this.selectField("header_font_size",f)],e=>{var a;i({header_font_size:(null===(a=e.detail.value)||void 0===a?void 0:a.header_font_size)||"x-large"}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.header_text_transform",_,"Header text style"),(0,r.kg)("editor.lunar_phase.header_text_transform_desc",_,"Text transform applied to the header."),a,{header_text_transform:m.header_text_transform||"capitalize"},[this.selectField("header_text_transform",x)],e=>{var a;i({header_text_transform:(null===(a=e.detail.value)||void 0===a?void 0:a.header_text_transform)||"capitalize"}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,r.kg)("editor.lunar_phase.header_color",_,"Header color"),(0,r.kg)("editor.lunar_phase.header_color_desc",_,"Leave empty for the automatic color."),a,m.header_color||"","",e=>{i({header_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.label_font_size",_,"Label font size"),(0,r.kg)("editor.lunar_phase.label_font_size_desc",_,"Size of data labels and values."),a,{label_font_size:m.label_font_size||"auto"},[this.selectField("label_font_size",f)],e=>{var a;i({label_font_size:(null===(a=e.detail.value)||void 0===a?void 0:a.label_font_size)||"auto"}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection((0,r.kg)("editor.lunar_phase.label_text_transform",_,"Label text style"),(0,r.kg)("editor.lunar_phase.label_text_transform_desc",_,"Text transform applied to data labels."),a,{label_text_transform:m.label_text_transform||"none"},[this.selectField("label_text_transform",x)],e=>{var a;i({label_text_transform:(null===(a=e.detail.value)||void 0===a?void 0:a.label_text_transform)||"none"}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,r.kg)("editor.lunar_phase.label_color",_,"Label color"),(0,r.kg)("editor.lunar_phase.label_color_desc",_,"Leave empty for the automatic color."),a,m.label_color||"","",e=>{i({label_color:e}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,r.kg)("editor.lunar_phase.accent_color",_,"Accent color"),(0,r.kg)("editor.lunar_phase.accent_color_desc",_,"Markers, selected days, glow, and pagination. Leave empty for a moonlight silver."),a,m.accent_color||"","",e=>{i({accent_color:e}),this.triggerPreviewUpdate()})}
      </div>
    `}renderPreview(e,a,t,i){var o,l,s;const c=e,u=(null===(o=null==a?void 0:a.locale)||void 0===o?void 0:o.language)||"en";this._ensureTick();const d=this._resolveLocation(c,a,t);if(!d)return n.qy`
        <style>${this.getStyles()}</style>
        ${this.renderGradientErrorState((0,r.kg)("editor.lunar_phase.config_needed",u,"Set a location"),(0,r.kg)("editor.lunar_phase.config_needed_desc",u,"Choose a location source in the General tab"),"mdi:moon-waxing-crescent")}
      `;const h=this._getState(c),p=new Date,g=null!==h.selectedDate?new Date(h.selectedDate+432e5):p,m=this._getSnapshot(g,d.lat,d.lng),_=null===h.selectedDate,v=(0,S.gT)(c.accent_color,"#cdd6f4"),f=!0===c.southern_hemisphere,x=(c.id||"lp").replace(/[^a-zA-Z0-9_-]/g,""),b=c.background_style||"night_sky",w="night_sky"===b||"custom"===b,y={"--uc-lunar-accent":v,"--uc-lunar-text":(null===(l=c.header_color)||void 0===l?void 0:l.trim())?c.header_color:w?"#eceff7":"var(--primary-text-color)","--uc-lunar-dim":(null===(s=c.label_color)||void 0===s?void 0:s.trim())?c.label_color:w?"rgba(236,239,247,0.62)":"var(--secondary-text-color)","--uc-lunar-line":w?"rgba(236,239,247,0.14)":"color-mix(in srgb, var(--divider-color) 60%, transparent)","--uc-lunar-chip":w?"rgba(236,239,247,0.08)":"color-mix(in srgb, var(--divider-color) 12%, transparent)","--uc-lunar-header-size":this._fontSize(c.header_font_size,"20px"),"--uc-lunar-header-transform":c.header_text_transform||"capitalize","--uc-lunar-label-size":this._fontSize(c.label_font_size,"13px"),"--uc-lunar-label-transform":c.label_text_transform||"none"};let k="";"night_sky"===b?k="background: linear-gradient(165deg, #070b1d 0%, #101633 45%, #1b2447 78%, #232f59 100%);":"theme"===b?k="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none);":"custom"===b&&c.custom_background&&(k=`background-image: linear-gradient(rgba(7,10,25,0.45), rgba(7,10,25,0.65)), url("${c.custom_background}"); background-size: cover; background-position: center;`);const $=this.buildStyleString(this.buildDesignStyles(e,a)),M=this.getHoverEffectClass(e),z=this.buildStyleString(y),F=this.createGestureHandlers(c.id,{tap_action:c.tap_action,hold_action:c.hold_action,double_tap_action:c.double_tap_action,module:c},a,t,[".uc-lunar-btn",".uc-lunar-day",".uc-lunar-dot",".uc-lunar-datanav",".uc-lunar-pages"]);let D;return D="full"===(c.layout||"full")||h.expanded?this._renderFull(c,a,u,m,h,p,_,d,f,x,v):this._renderCompact(c,a,u,m,h,f,x,v),n.qy`
      <style>${this.getStyles()}</style>
      <div
        class="uc-lunar-wrapper ${M}"
        data-uc-role="pane"
        style="${k} ${z}; ${$}"
        @pointerdown=${F.onPointerDown}
        @pointerup=${F.onPointerUp}
        @pointerleave=${F.onPointerLeave}
        @pointercancel=${F.onPointerCancel}
      >
        ${w&&!1!==c.show_starfield?n.qy`<div class="uc-lunar-stars" aria-hidden="true"></div>
              <div class="uc-lunar-stars uc-lunar-stars--alt" aria-hidden="true"></div>`:n.s6}
        ${this.wrapWithAnimation(D,e,a)}
      </div>
    `}_renderFull(e,a,t,i,o,l,s,c,u,d,h){const p=this._phaseName(i.phaseId,t),g="full"!==(e.layout||"full")&&o.expanded,m=[{view:"phase",icon:"mdi:moon-waxing-crescent",label:(0,r.kg)("editor.lunar_phase.view_phase",t,"Phase")},{view:"calendar",icon:"mdi:calendar-month",label:(0,r.kg)("editor.lunar_phase.view_calendar",t,"Calendar")},{view:"horizon",icon:"mdi:chart-bell-curve-cumulative",label:(0,r.kg)("editor.lunar_phase.view_horizon",t,"Horizon")}],_=s?(0,r.kg)("editor.lunar_phase.today",t,"Today"):this._fmtDate(i.date,t);return n.qy`
      <div class="uc-lunar uc-lunar--full">
        <!-- Header -->
        <div class="uc-lunar-header">
          <div class="uc-lunar-header-text">
            <div class="uc-lunar-title">${p}</div>
            <div class="uc-lunar-subtitle">${_}</div>
          </div>
          <div class="uc-lunar-header-actions">
            ${g?n.qy`
                  <button
                    class="uc-lunar-btn"
                    title=${(0,r.kg)("editor.lunar_phase.collapse",t,"Collapse")}
                    @click=${e=>{e.stopPropagation(),o.expanded=!1,this.triggerPreviewUpdate(!0)}}
                  >
                    <ha-icon icon="mdi:arrow-collapse"></ha-icon>
                  </button>
                `:n.s6}
            ${!1!==e.show_view_switcher?m.map(e=>n.qy`
                    <button
                      class="uc-lunar-btn ${o.view===e.view?"uc-lunar-btn--active":""}"
                      title=${e.label}
                      aria-label=${e.label}
                      @click=${a=>{if(a.stopPropagation(),o.view=e.view,"calendar"!==e.view){const e=null!==o.selectedDate?new Date(o.selectedDate):new Date;o.calMonth=e.getMonth(),o.calYear=e.getFullYear()}this.triggerPreviewUpdate(!0)}}
                    >
                      <ha-icon icon=${e.icon}></ha-icon>
                    </button>
                  `):n.s6}
          </div>
        </div>

        <!-- Active view -->
        ${"calendar"===o.view?this._renderCalendar(e,t,o,u,l):"horizon"===o.view?this._renderHorizon(e,t,i,l,s,c,h):this._renderPhaseView(e,a,t,i,o,u,d,h)}

        <!-- Date navigation footer -->
        ${!1!==e.show_date_nav&&"calendar"!==o.view?n.qy`
              <div class="uc-lunar-datanav">
                <button
                  class="uc-lunar-btn"
                  title=${(0,r.kg)("editor.lunar_phase.prev_day",t,"Previous day")}
                  @click=${e=>{e.stopPropagation(),this._stepDay(o,-1)}}
                >
                  <ha-icon icon="mdi:chevron-left"></ha-icon>
                </button>
                <div class="uc-lunar-datanav-label">
                  ${this._fmtDate(i.date,t)}
                  ${s?n.s6:n.qy`
                        <button
                          class="uc-lunar-btn uc-lunar-btn--pill"
                          @click=${e=>{e.stopPropagation(),o.selectedDate=null,this.triggerPreviewUpdate(!0)}}
                        >
                          <ha-icon icon="mdi:calendar-today"></ha-icon>
                          ${(0,r.kg)("editor.lunar_phase.back_to_today",t,"Today")}
                        </button>
                      `}
                </div>
                <button
                  class="uc-lunar-btn"
                  title=${(0,r.kg)("editor.lunar_phase.next_day",t,"Next day")}
                  @click=${e=>{e.stopPropagation(),this._stepDay(o,1)}}
                >
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </button>
              </div>
            `:n.s6}
      </div>
    `}_renderPhaseView(e,a,t,r,o,l,s,c){var u,d;const h=this._buildDataItems(e,t,r),p=Math.max(3,Math.min(12,null!==(u=e.items_per_page)&&void 0!==u?u:5)),g=[];for(let e=0;e<h.length;e+=p)g.push(h.slice(e,e+p));o.page>=g.length&&(o.page=Math.max(0,g.length-1));const m=Math.max(60,Math.min(260,null!==(d=e.moon_size)&&void 0!==d?d:130)),_="left"===(e.moon_position||"left"),v=n.qy`
      <div
        class="uc-lunar-moon-wrap"
        style="width:${m}px; height:${m}px;"
        @pointermove=${e=>{const a=e.currentTarget,t=a.getBoundingClientRect();a.style.setProperty("--uc-lunar-px",(e.clientX-t.left)/t.width*100+"%"),a.style.setProperty("--uc-lunar-py",(e.clientY-t.top)/t.height*100+"%")}}
      >
        ${(0,i._)(N(r.phase,m,l,s,c))}
      </div>
    `,f=n.qy`
      <div
        class="uc-lunar-data"
        @pointerdown=${e=>{this._swipeStartX=e.clientX}}
        @pointerup=${e=>{if(null===this._swipeStartX||g.length<2)return;const a=e.clientX-this._swipeStartX;this._swipeStartX=null,Math.abs(a)>40&&(o.page=Math.min(g.length-1,Math.max(0,o.page+(a<0?1:-1))),this.triggerPreviewUpdate(!0))}}
      >
        <div class="uc-lunar-pages" style="transform: translateX(-${100*o.page}%);">
          ${g.map(e=>n.qy`
              <div class="uc-lunar-page">
                ${e.map(e=>n.qy`
                    <div class="uc-lunar-row">
                      <span class="uc-lunar-row-label">
                        <ha-icon icon=${e.icon}></ha-icon>
                        ${e.label}
                      </span>
                      <span class="uc-lunar-row-value">
                        ${e.value}
                        ${e.secondary?n.qy`<span class="uc-lunar-row-secondary">${e.secondary}</span>`:n.s6}
                      </span>
                    </div>
                  `)}
              </div>
            `)}
        </div>
        ${g.length>1?n.qy`
              <div class="uc-lunar-dots">
                ${g.map((e,a)=>n.qy`
                    <button
                      class="uc-lunar-dot ${a===o.page?"uc-lunar-dot--active":""}"
                      aria-label="Page ${a+1}"
                      @click=${e=>{e.stopPropagation(),o.page=a,this.triggerPreviewUpdate(!0)}}
                    ></button>
                  `)}
              </div>
            `:n.s6}
      </div>
    `;return n.qy`
      <div class="uc-lunar-phaseview">
        ${_?n.qy`${v}${f}`:n.qy`${f}${v}`}
      </div>
    `}_renderCalendar(e,a,t,o,l){const s=t.calYear,c=t.calMonth,u=new Date(s,c,1),d=new Date(s,c+1,0).getDate(),h=(u.getDay()+6)%7,p=[];for(let e=0;e<7;e++)p.push(new Date(2024,0,1+e).toLocaleDateString(a,{weekday:"short"}));const g=u.toLocaleDateString(a,{month:"long",year:"numeric"}),m=new Date(l.getFullYear(),l.getMonth(),l.getDate()).valueOf(),_=l.getFullYear()===s&&l.getMonth()===c,v=[];for(let e=0;e<h;e++)v.push(n.qy`<div class="uc-lunar-day uc-lunar-day--empty"></div>`);for(let e=1;e<=d;e++){const r=new Date(s,c,e,12,0,0),l=new Date(s,c,e).valueOf(),u=w(r).phase,d=l===m,h=t.selectedDate===l;v.push(n.qy`
        <button
          class="uc-lunar-day ${d?"uc-lunar-day--today":""} ${h?"uc-lunar-day--selected":""}"
          title="${this._phaseName(z(u),a)}"
          @click=${e=>{e.stopPropagation(),t.selectedDate=l===m?null:l,t.view="phase",t.page=0,this.triggerPreviewUpdate(!0)}}
        >
          <span class="uc-lunar-day-num">${e}</span>
          ${(0,i._)(T(u,18,o))}
        </button>
      `)}return n.qy`
      <div class="uc-lunar-calendar">
        <div class="uc-lunar-cal-nav">
          <button
            class="uc-lunar-btn"
            title=${(0,r.kg)("editor.lunar_phase.prev_month",a,"Previous month")}
            @click=${e=>{e.stopPropagation();const a=new Date(s,c-1,1);t.calMonth=a.getMonth(),t.calYear=a.getFullYear(),this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon="mdi:chevron-left"></ha-icon>
          </button>
          <div class="uc-lunar-cal-title">
            ${g}
            ${_?n.s6:n.qy`
                  <button
                    class="uc-lunar-btn uc-lunar-btn--pill"
                    @click=${e=>{e.stopPropagation(),t.calMonth=l.getMonth(),t.calYear=l.getFullYear(),this.triggerPreviewUpdate(!0)}}
                  >
                    <ha-icon icon="mdi:calendar-today"></ha-icon>
                    ${(0,r.kg)("editor.lunar_phase.back_to_today",a,"Today")}
                  </button>
                `}
          </div>
          <button
            class="uc-lunar-btn"
            title=${(0,r.kg)("editor.lunar_phase.next_month",a,"Next month")}
            @click=${e=>{e.stopPropagation();const a=new Date(s,c+1,1);t.calMonth=a.getMonth(),t.calYear=a.getFullYear(),this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon="mdi:chevron-right"></ha-icon>
          </button>
        </div>
        <div class="uc-lunar-cal-grid">
          ${p.map(e=>n.qy`<div class="uc-lunar-weekday">${e}</div>`)}
          ${v}
        </div>
      </div>
    `}_renderHorizon(e,a,t,i,o,l,s){const c=e.graph_y_ticks?34:10,u=!1!==e.graph_x_ticks?26:10;let d;"dynamic"===(e.graph_mode||"today")&&o?d=new Date(i.valueOf()-216e5):(d=new Date(t.date),d.setHours(0,0,0,0));const h=864e5,p=[];let g=0,m=0;for(let e=0;e<=h;e+=9e5){const a=b(new Date(d.valueOf()+e),l.lat,l.lng).altitudeDegrees;p.push({t:e,alt:a}),a<g&&(g=a),a>m&&(m=a)}const _=Math.max(30,10*Math.ceil((m+8)/10)),v=Math.min(-30,10*Math.floor((g-8)/10)),f=e=>c+e/h*(480-c-10),x=e=>18+(1-(e-v)/(_-v))*(172-u),w=x(0),y=p.map((e,a)=>`${0===a?"M":"L"} ${f(e.t).toFixed(1)} ${x(e.alt).toFixed(1)}`).join(" "),k=`${y} L ${f(h).toFixed(1)} ${190-u} L ${c} ${190-u} Z`,$=[];for(const e of[-1,0,1]){const a=new Date(d.valueOf()+24*e*36e5+432e5),t=this._timesFor(a,l.lat,l.lng);for(const e of["rise","set"]){const a=t[e];if(!a)continue;const n=a.valueOf()-d.valueOf();n>=0&&n<=h&&$.push({t:n,kind:e,time:a})}}let M=p[0];for(const e of p)e.alt>M.alt&&(M=e);const z=i.valueOf()-d.valueOf(),F=!1!==e.graph_show_current&&z>=0&&z<=h&&o,D=F?b(i,l.lat,l.lng).altitudeDegrees:0,S=[];if(!1!==e.graph_x_ticks)for(let t=0;t<=24;t+=6){const n=new Date(d.valueOf()+36e5*t);S.push({t:36e5*t,label:this._fmtTime(n,a,!0===e.time_12hr,!0)})}const P=[];if(e.graph_y_ticks)for(let e=30*Math.ceil(v/30);e<=_;e+=30)P.push(e);const U=(0,r.kg)("editor.lunar_phase.items.moonrise",a,"Moonrise"),L=(0,r.kg)("editor.lunar_phase.items.moonset",a,"Moonset");return n.qy`
      <div class="uc-lunar-horizon">
        <svg viewBox="0 0 ${480} ${190}" class="uc-lunar-horizon-svg" preserveAspectRatio="none" role="img"
          aria-label=${(0,r.kg)("editor.lunar_phase.view_horizon",a,"Horizon")}>
          <defs>
            <linearGradient id="uc-lunar-area-${(e.id||"lp").replace(/[^a-zA-Z0-9_-]/g,"")}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${s}" stop-opacity="0.45"/>
              <stop offset="100%" stop-color="${s}" stop-opacity="0.02"/>
            </linearGradient>
            <clipPath id="uc-lunar-above-${(e.id||"lp").replace(/[^a-zA-Z0-9_-]/g,"")}">
              <rect x="0" y="0" width="${480}" height="${w.toFixed(1)}"/>
            </clipPath>
          </defs>

          ${P.map(e=>n.JW`
              <line x1=${c} x2=${470} y1=${x(e).toFixed(1)} y2=${x(e).toFixed(1)}
                class="uc-lunar-gridline"></line>
              <text x=${c-6} y=${(x(e)+3).toFixed(1)} class="uc-lunar-tick" text-anchor="end">${e}°</text>
            `)}

          <!-- Filled glow above the horizon -->
          <path d="${k}"
            fill="url(#uc-lunar-area-${(e.id||"lp").replace(/[^a-zA-Z0-9_-]/g,"")})"
            clip-path="url(#uc-lunar-above-${(e.id||"lp").replace(/[^a-zA-Z0-9_-]/g,"")})"></path>

          <!-- Horizon line -->
          <line x1=${c} x2=${470} y1=${w.toFixed(1)} y2=${w.toFixed(1)}
            class="uc-lunar-horizonline"></line>

          <!-- Altitude curve -->
          <path d="${y}" class="uc-lunar-curve" style="stroke:${s}"></path>

          <!-- Rise / set markers -->
          ${$.map(t=>n.JW`
              <g>
                <circle cx=${f(t.t).toFixed(1)} cy=${w.toFixed(1)} r="4"
                  class="uc-lunar-marker" style="fill:${s}"></circle>
                ${!1!==e.graph_show_time?n.JW`
                      <text x=${f(t.t).toFixed(1)} y=${(w+("rise"===t.kind?-10:14)).toFixed(1)}
                        class="uc-lunar-marker-label" text-anchor="middle">
                        ${"rise"===t.kind?"↑":"↓"} ${this._fmtTime(t.time,a,!0===e.time_12hr,!0)}
                      </text>
                    `:n.s6}
                <title>${"rise"===t.kind?U:L}</title>
              </g>
            `)}

          <!-- Highest point -->
          ${!1!==e.graph_show_highest&&M.alt>0?n.JW`
                <g>
                  <path d="M ${f(M.t).toFixed(1)} ${(x(M.alt)-5).toFixed(1)} l 4 5 l -4 5 l -4 -5 Z"
                    class="uc-lunar-marker" style="fill:${s}"></path>
                  <text x=${f(M.t).toFixed(1)} y=${(x(M.alt)-9).toFixed(1)}
                    class="uc-lunar-marker-label" text-anchor="middle">
                    ${Math.round(M.alt)}°
                  </text>
                </g>
              `:n.s6}

          ${F?n.JW`
                <circle cx=${f(z).toFixed(1)} cy=${x(D).toFixed(1)} r="5"
                  class="uc-lunar-current" style="fill:${s}"></circle>
                <circle cx=${f(z).toFixed(1)} cy=${x(D).toFixed(1)} r="5"
                  class="uc-lunar-current-pulse" style="stroke:${s}"></circle>
              `:n.s6}

          ${S.map(e=>n.JW`
              <text x=${f(e.t).toFixed(1)} y=${182} class="uc-lunar-tick" text-anchor="middle">
                ${e.label}
              </text>
            `)}
        </svg>
      </div>
    `}_renderCompact(e,a,t,o,l,s,c,u){var d,h;const p=e.layout||"compact",g=this._phaseName(o.phaseId,t),m=null!==(d=e.number_decimals)&&void 0!==d?d:1,_=e=>{e.stopPropagation(),l.expanded=!0,this.triggerPreviewUpdate(!0)},v="moon_only"===p?Math.max(60,Math.min(260,null!==(h=e.moon_size)&&void 0!==h?h:130)):76,f=n.qy`
      <div class="uc-lunar-moon-wrap" style="width:${v}px; height:${v}px;">
        ${(0,i._)(N(o.phase,v,s,c,u))}
      </div>
    `;return"moon_only"===p?n.qy`
        <div class="uc-lunar uc-lunar--moononly" role="button" tabindex="0"
          title=${g}
          @click=${_}
          @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||_(e)}}>
          ${f}
        </div>
      `:"minimal"===p?n.qy`
        <div class="uc-lunar uc-lunar--minimal" role="button" tabindex="0"
          @click=${_}
          @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||_(e)}}>
          <div class="uc-lunar-min-side">
            <ha-icon icon="mdi:weather-moonset-up"></ha-icon>
            <span class="uc-lunar-min-time">${o.times.rise?this._fmtTime(o.times.rise,t,!0===e.time_12hr):"—"}</span>
            ${!1!==e.show_compact_labels?n.qy`<span class="uc-lunar-min-label">${(0,r.kg)("editor.lunar_phase.items.moonrise",t,"Moonrise")}</span>`:n.s6}
          </div>
          <div class="uc-lunar-min-center">
            ${f}
            <span class="uc-lunar-min-phase">${g}</span>
          </div>
          <div class="uc-lunar-min-side">
            <ha-icon icon="mdi:weather-moonset"></ha-icon>
            <span class="uc-lunar-min-time">${o.times.set?this._fmtTime(o.times.set,t,!0===e.time_12hr):"—"}</span>
            ${!1!==e.show_compact_labels?n.qy`<span class="uc-lunar-min-label">${(0,r.kg)("editor.lunar_phase.items.moonset",t,"Moonset")}</span>`:n.s6}
          </div>
        </div>
      `:n.qy`
      <div class="uc-lunar uc-lunar--compact" role="button" tabindex="0"
        @click=${_}
        @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||_(e)}}>
        ${f}
        <div class="uc-lunar-compact-body">
          <div class="uc-lunar-title">${g}</div>
          <div class="uc-lunar-compact-illum">
            ${this._fmtNum(100*o.fraction,m)}%
            <span class="uc-lunar-row-secondary">${(0,r.kg)("editor.lunar_phase.items.illumination",t,"Illumination")}</span>
          </div>
          <div class="uc-lunar-compact-stats">
            <div class="uc-lunar-compact-stat">
              <ha-icon icon="mdi:progress-clock"></ha-icon>
              <span>${this._fmtNum(o.ageDays,m)}</span>
              ${!1!==e.show_compact_labels?n.qy`<span class="uc-lunar-min-label">${(0,r.kg)("editor.lunar_phase.age_short",t,"Age")}</span>`:n.s6}
            </div>
            <div class="uc-lunar-compact-stat">
              <ha-icon icon="mdi:weather-moonset-up"></ha-icon>
              <span>${o.times.rise?this._fmtTime(o.times.rise,t,!0===e.time_12hr):"—"}</span>
              ${!1!==e.show_compact_labels?n.qy`<span class="uc-lunar-min-label">${(0,r.kg)("editor.lunar_phase.rise_short",t,"Rise")}</span>`:n.s6}
            </div>
            <div class="uc-lunar-compact-stat">
              <ha-icon icon="mdi:weather-moonset"></ha-icon>
              <span>${o.times.set?this._fmtTime(o.times.set,t,!0===e.time_12hr):"—"}</span>
              ${!1!==e.show_compact_labels?n.qy`<span class="uc-lunar-min-label">${(0,r.kg)("editor.lunar_phase.set_short",t,"Set")}</span>`:n.s6}
            </div>
          </div>
        </div>
      </div>
    `}_buildDataItems(e,a,t){var n;const i=new Set(e.hidden_items||[]),o=null!==(n=e.number_decimals)&&void 0!==n?n:1,l=!0===e.time_12hr,s=!0===e.use_miles,c=[],u=(e,t,n,r)=>{i.has(e)||c.push({key:e,icon:t,label:this._itemLabel(e,a),value:n,secondary:r})};var h;return u("moon_age","mdi:progress-clock",`${this._fmtNum(t.ageDays,o)} ${(0,r.kg)("editor.lunar_phase.days",a,"days")}`,`${this._fmtNum(t.ageDays/d*100,0)}%`),u("illumination","mdi:brightness-percent",`${this._fmtNum(100*t.fraction,o)}%`),u("azimuth","mdi:compass-outline",`${this._fmtNum(t.position.azimuthDegrees,o)}°`,D[h=t.position.azimuthDegrees,Math.round((h%360+360)%360/22.5)%16]),u("altitude","mdi:angle-acute",`${this._fmtNum(t.position.altitudeDegrees,o)}°`),u("distance","mdi:map-marker-distance",s?`${this._fmtNum(.621371*t.position.distanceKm,0)} mi`:`${this._fmtNum(t.position.distanceKm,0)} km`),u("position","mdi:horizontal-rotate-clockwise",t.position.altitudeDegrees>0?(0,r.kg)("editor.lunar_phase.over_horizon",a,"Over horizon"):(0,r.kg)("editor.lunar_phase.under_horizon",a,"Under horizon")),u("moonrise","mdi:weather-moonset-up",t.times.rise?this._fmtTime(t.times.rise,a,l):"—",t.times.rise?this._fmtRelative(t.times.rise,a):void 0),u("moonset","mdi:weather-moonset",t.times.set?this._fmtTime(t.times.set,a,l):"—",t.times.set?this._fmtRelative(t.times.set,a):void 0),u("moon_highest","mdi:format-vertical-align-top",t.transit?this._fmtTime(t.transit.time,a,l):"—",t.transit?`${this._fmtNum(t.transit.altitudeDegrees,0)}°`:void 0),u("next_full_moon","mdi:moon-full",this._fmtDate(t.nextFullMoon,a)),u("next_new_moon","mdi:moon-new",this._fmtDate(t.nextNewMoon,a)),u("next_phase","mdi:moon-waxing-gibbous",this._phaseName(t.nextEvent.id,a),this._fmtDate(t.nextEvent.date,a)),c}_getState(e){let a=this._uiState.get(e.id);if(!a){const t=new Date;a={view:{phase:"phase",calendar:"calendar",horizon:"horizon"}[e.default_view||"phase"]||"phase",selectedDate:null,page:0,calMonth:t.getMonth(),calYear:t.getFullYear(),expanded:!1},this._uiState.set(e.id,a)}return a}_stepDay(e,a){const t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate()).valueOf(),i=(null!==e.selectedDate?e.selectedDate:n)+24*a*36e5;e.selectedDate=i===n?null:i,e.page=0,this.triggerPreviewUpdate(!0)}_resolveLocation(e,a,t){var n,i,r,o,l;const s=e.location_source||"default";if("custom"===s)return"number"==typeof e.latitude&&"number"==typeof e.longitude?{lat:e.latitude,lng:e.longitude}:null;if("entity"===s){const o=this.resolveEntity(e.location_entity,t)||e.location_entity,l=o?null===(n=null==a?void 0:a.states)||void 0===n?void 0:n[o]:void 0,s=parseFloat(null===(i=null==l?void 0:l.attributes)||void 0===i?void 0:i.latitude),c=parseFloat(null===(r=null==l?void 0:l.attributes)||void 0===r?void 0:r.longitude);return isNaN(s)||isNaN(c)?null:{lat:s,lng:c}}const c=null===(o=null==a?void 0:a.config)||void 0===o?void 0:o.latitude,u=null===(l=null==a?void 0:a.config)||void 0===l?void 0:l.longitude;return"number"==typeof c&&"number"==typeof u?{lat:c,lng:u}:null}_getSnapshot(e,a,t){const n=`${Math.floor(e.valueOf()/6e4)}|${a.toFixed(3)}|${t.toFixed(3)}`,i=this._snapshotCache.get(n);if(i)return i;this._snapshotCache.size>60&&this._snapshotCache.clear();const r=function(e,a,t){const n=w(e),i=[{id:"new_moon",date:F(r=e,0)},{id:"first_quarter",date:F(r,.25)},{id:"full_moon",date:F(r,.5)},{id:"last_quarter",date:F(r,.75)}].sort((e,a)=>e.date.valueOf()-a.date.valueOf());var r;const o=i.find(e=>"full_moon"===e.id),l=i.find(e=>"new_moon"===e.id);return{date:e,phase:n.phase,phaseId:z(n.phase),ageDays:n.phase*d,fraction:n.fraction,position:b(e,a,t),times:y(e,a,t),transit:$(e,a,t),nextFullMoon:o.date,nextNewMoon:l.date,nextEvent:i[0]}}(e,a,t);return this._snapshotCache.set(n,r),r}_timesFor(e,a,t){return this._getSnapshot(e,a,t).times}_ensureTick(){this._tickTimer||(this._tickTimer=setInterval(()=>this.triggerPreviewUpdate(),6e4))}_fontSize(e,a){return e&&"auto"!==e?U[e]||e:a}_fmtNum(e,a){return e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:Math.max(0,Math.min(3,a))})}_fmtTime(e,a,t,n=!1){try{return e.toLocaleTimeString(a,{hour:n&&!t?"2-digit":"numeric",minute:n?void 0:"2-digit",hour12:t})}catch(a){return e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit",hour12:t})}}_fmtDate(e,a){try{return e.toLocaleDateString(a,{weekday:"short",month:"short",day:"numeric"})}catch(a){return e.toLocaleDateString()}}_fmtRelative(e,a){const t=Math.round((e.valueOf()-Date.now())/6e4);try{const e=new Intl.RelativeTimeFormat(a,{numeric:"always",style:"short"});return Math.abs(t)<60?e.format(t,"minute"):Math.abs(t)<2160?e.format(Math.round(t/60),"hour"):e.format(Math.round(t/1440),"day")}catch(e){const a=Math.round(t/60);return a>=0?`in ${a} h`:-a+" h ago"}}_phaseName(e,a){return(0,r.kg)(`editor.lunar_phase.phases.${e}`,a,{new_moon:"New Moon",waxing_crescent:"Waxing Crescent",first_quarter:"First Quarter",waxing_gibbous:"Waxing Gibbous",full_moon:"Full Moon",waning_gibbous:"Waning Gibbous",last_quarter:"Last Quarter",waning_crescent:"Waning Crescent"}[e])}_itemLabel(e,a){return(0,r.kg)(`editor.lunar_phase.items.${e}`,a,{moon_age:"Moon age",illumination:"Illumination",azimuth:"Azimuth",altitude:"Altitude",distance:"Distance",position:"Position",moonrise:"Moonrise",moonset:"Moonset",moon_highest:"Moon highest",next_full_moon:"Next full moon",next_new_moon:"Next new moon",next_phase:"Next phase"}[e])}_renderProLockUI(e){return n.qy`
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
          style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 300px;"
        >
          ${(0,r.kg)("editor.lunar_phase.pro_description",e,"Lunar Phase is a Pro feature with an animated moon, live lunar data, a month calendar, and a horizon graph.")}
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
    `}getStyles(){return`\n      ${o.m.getSliderStyles()}\n\n      /* Editor conditional groups */\n      .conditional-fields-group {\n        margin-top: 16px;\n        margin-bottom: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n        animation: uc-lunar-slide-in 0.3s ease-out;\n      }\n      .conditional-fields-group:hover { background: rgba(var(--rgb-primary-color), 0.12); }\n      .conditional-fields-header {\n        background: rgba(var(--rgb-primary-color), 0.15);\n        padding: 12px 16px;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-color);\n        border-bottom: 1px solid rgba(var(--rgb-primary-color), 0.2);\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n      }\n      .conditional-fields-content { padding: 16px; }\n      @keyframes uc-lunar-slide-in {\n        from { opacity: 0; transform: translateX(-10px); }\n        to { opacity: 1; transform: translateX(0); }\n      }\n\n      /* ═══ Wrapper ════════════════════════════════════════════════════ */\n      .uc-lunar-wrapper {\n        box-sizing: border-box;\n        position: relative;\n        overflow: hidden;\n        border-radius: var(--uc-r-20, 20px);\n        color: var(--uc-lunar-text);\n        isolation: isolate;\n      }\n      .uc-lunar {\n        position: relative;\n        z-index: 2;\n        box-sizing: border-box;\n      }\n\n      /* ═══ Starfield ══════════════════════════════════════════════════ */\n      .uc-lunar-stars {\n        position: absolute;\n        inset: 0;\n        z-index: 1;\n        pointer-events: none;\n        background-image:\n          radial-gradient(1.2px 1.2px at 22px 34px, rgba(255,255,255,0.95), transparent 55%),\n          radial-gradient(1px 1px at 84px 12px, rgba(255,255,255,0.7), transparent 55%),\n          radial-gradient(1.4px 1.4px at 132px 76px, rgba(255,255,255,0.85), transparent 55%),\n          radial-gradient(0.9px 0.9px at 48px 102px, rgba(255,255,255,0.6), transparent 55%),\n          radial-gradient(1.1px 1.1px at 161px 28px, rgba(255,255,255,0.75), transparent 55%),\n          radial-gradient(0.8px 0.8px at 105px 130px, rgba(255,255,255,0.55), transparent 55%);\n        background-size: 190px 160px;\n        animation: uc-lunar-twinkle 5s ease-in-out infinite;\n      }\n      .uc-lunar-stars--alt {\n        background-image:\n          radial-gradient(1px 1px at 64px 54px, rgba(255,255,255,0.8), transparent 55%),\n          radial-gradient(1.3px 1.3px at 14px 118px, rgba(255,255,255,0.9), transparent 55%),\n          radial-gradient(0.9px 0.9px at 118px 22px, rgba(255,255,255,0.6), transparent 55%),\n          radial-gradient(1.1px 1.1px at 150px 104px, rgba(255,255,255,0.7), transparent 55%);\n        background-size: 230px 200px;\n        animation: uc-lunar-twinkle 7s ease-in-out infinite reverse;\n      }\n      @keyframes uc-lunar-twinkle {\n        0%, 100% { opacity: 0.85; }\n        50% { opacity: 0.35; }\n      }\n\n      /* ═══ Full layout ════════════════════════════════════════════════ */\n      .uc-lunar--full {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        padding: 16px;\n      }\n      .uc-lunar-header {\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-between;\n        gap: 8px;\n      }\n      .uc-lunar-title {\n        font-size: var(--uc-lunar-header-size);\n        text-transform: var(--uc-lunar-header-transform);\n        font-weight: 700;\n        line-height: 1.2;\n        letter-spacing: 0.01em;\n      }\n      .uc-lunar-subtitle {\n        font-size: 0.75rem;\n        color: var(--uc-lunar-dim);\n        margin-top: 2px;\n      }\n      .uc-lunar-header-actions {\n        display: flex;\n        gap: 4px;\n        flex-shrink: 0;\n      }\n\n      /* Buttons */\n      .uc-lunar-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 4px;\n        width: 32px;\n        height: 32px;\n        padding: 0;\n        border: 1px solid var(--uc-lunar-line);\n        border-radius: var(--uc-r-9, 9px);\n        background: var(--uc-lunar-chip);\n        color: var(--uc-lunar-dim);\n        cursor: pointer;\n        transition: all 0.2s ease;\n      }\n      .uc-lunar-btn ha-icon { --mdc-icon-size: 17px; }\n      .uc-lunar-btn:hover {\n        color: var(--uc-lunar-text);\n        border-color: var(--uc-lunar-accent);\n        transform: translateY(-1px);\n      }\n      .uc-lunar-btn:focus-visible {\n        outline: 2px solid var(--uc-lunar-accent);\n        outline-offset: 2px;\n      }\n      .uc-lunar-btn--active {\n        color: var(--uc-lunar-text);\n        border-color: var(--uc-lunar-accent);\n        background: color-mix(in srgb, var(--uc-lunar-accent) 18%, transparent);\n        box-shadow: 0 0 10px color-mix(in srgb, var(--uc-lunar-accent) 35%, transparent);\n      }\n      .uc-lunar-btn--pill {\n        width: auto;\n        height: 24px;\n        padding: 0 10px;\n        font-size: 0.7rem;\n        font-weight: 600;\n        border-radius: var(--uc-r-12, 12px);\n      }\n      .uc-lunar-btn--pill ha-icon { --mdc-icon-size: 13px; }\n\n      /* ═══ Phase view ═════════════════════════════════════════════════ */\n      .uc-lunar-phaseview {\n        display: flex;\n        align-items: center;\n        gap: 18px;\n        animation: uc-lunar-fade 0.35s ease;\n      }\n      @keyframes uc-lunar-fade {\n        from { opacity: 0; transform: translateY(6px); }\n        to { opacity: 1; transform: translateY(0); }\n      }\n\n      /* Moon graphic */\n      .uc-lunar-moon-wrap {\n        position: relative;\n        flex-shrink: 0;\n        cursor: default;\n        --uc-lunar-px: 50%;\n        --uc-lunar-py: 50%;\n      }\n      .uc-lunar-moon-wrap::after {\n        content: '';\n        position: absolute;\n        inset: 6%;\n        border-radius: 50%;\n        background: radial-gradient(circle at var(--uc-lunar-px) var(--uc-lunar-py),\n          rgba(255,255,255,0.16) 0%, transparent 42%);\n        opacity: 0;\n        transition: opacity 0.3s ease;\n        pointer-events: none;\n      }\n      .uc-lunar-moon-wrap:hover::after { opacity: 1; }\n      .uc-lunar-moon-svg {\n        display: block;\n        width: 100%;\n        height: 100%;\n        animation: uc-lunar-drift 14s ease-in-out infinite;\n        transition: filter 0.3s ease;\n      }\n      .uc-lunar-moon-wrap:hover .uc-lunar-moon-svg { filter: brightness(1.12); }\n      .uc-lunar-moon-halo { animation: uc-lunar-halo 6s ease-in-out infinite; transform-origin: center; }\n      @keyframes uc-lunar-drift {\n        0%, 100% { transform: translateY(0); }\n        50% { transform: translateY(-4px); }\n      }\n      @keyframes uc-lunar-halo {\n        0%, 100% { opacity: 0.75; transform: scale(1); }\n        50% { opacity: 1; transform: scale(1.045); }\n      }\n\n      /* Data list */\n      .uc-lunar-data {\n        flex: 1;\n        min-width: 0;\n        overflow: hidden;\n        touch-action: pan-y;\n        backdrop-filter: blur(3px);\n      }\n      .uc-lunar-pages {\n        display: flex;\n        transition: transform 0.35s cubic-bezier(0.33, 1, 0.68, 1);\n      }\n      .uc-lunar-page {\n        flex: 0 0 100%;\n        min-width: 0;\n        display: flex;\n        flex-direction: column;\n      }\n      .uc-lunar-row {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 10px;\n        padding: 6px 2px;\n        border-bottom: 1px solid var(--uc-lunar-line);\n        font-size: var(--uc-lunar-label-size);\n        text-transform: var(--uc-lunar-label-transform);\n      }\n      .uc-lunar-page .uc-lunar-row:last-child { border-bottom: none; }\n      .uc-lunar-row-label {\n        display: inline-flex;\n        align-items: center;\n        gap: 7px;\n        color: var(--uc-lunar-dim);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-lunar-row-label ha-icon { --mdc-icon-size: 15px; opacity: 0.8; flex-shrink: 0; }\n      .uc-lunar-row-value {\n        font-weight: 600;\n        color: var(--uc-lunar-text);\n        white-space: nowrap;\n        display: inline-flex;\n        align-items: baseline;\n        gap: 6px;\n      }\n      .uc-lunar-row-secondary {\n        font-weight: 400;\n        font-size: 0.85em;\n        color: var(--uc-lunar-dim);\n      }\n\n      /* Pagination dots */\n      .uc-lunar-dots {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        padding-top: 8px;\n      }\n      .uc-lunar-dot {\n        width: 7px;\n        height: 7px;\n        padding: 0;\n        border: none;\n        border-radius: var(--uc-r-4, 4px);\n        background: var(--uc-lunar-line);\n        cursor: pointer;\n        transition: all 0.25s ease;\n      }\n      .uc-lunar-dot--active {\n        width: 16px;\n        background: var(--uc-lunar-accent);\n      }\n      .uc-lunar-dot:focus-visible {\n        outline: 2px solid var(--uc-lunar-accent);\n        outline-offset: 2px;\n      }\n\n      /* Date nav footer */\n      .uc-lunar-datanav {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 8px;\n        border-top: 1px solid var(--uc-lunar-line);\n        padding-top: 10px;\n      }\n      .uc-lunar-datanav-label {\n        display: inline-flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 0.8rem;\n        font-weight: 600;\n        color: var(--uc-lunar-dim);\n      }\n\n      /* ═══ Calendar view ══════════════════════════════════════════════ */\n      .uc-lunar-calendar { animation: uc-lunar-fade 0.35s ease; }\n      .uc-lunar-cal-nav {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 8px;\n        margin-bottom: 10px;\n      }\n      .uc-lunar-cal-title {\n        display: inline-flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 0.85rem;\n        font-weight: 700;\n        color: var(--uc-lunar-text);\n      }\n      .uc-lunar-cal-grid {\n        display: grid;\n        grid-template-columns: repeat(7, 1fr);\n        gap: 3px;\n      }\n      .uc-lunar-weekday {\n        text-align: center;\n        font-size: 0.6rem;\n        font-weight: 700;\n        text-transform: uppercase;\n        letter-spacing: 0.05em;\n        color: var(--uc-lunar-dim);\n        padding-bottom: 3px;\n      }\n      .uc-lunar-day {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 2px;\n        aspect-ratio: 1 / 1;\n        border: 1px solid transparent;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--uc-lunar-chip);\n        color: var(--uc-lunar-dim);\n        cursor: pointer;\n        padding: 2px;\n        transition: all 0.2s ease;\n      }\n      .uc-lunar-day--empty {\n        background: transparent;\n        cursor: default;\n        pointer-events: none;\n      }\n      .uc-lunar-day:hover {\n        border-color: var(--uc-lunar-accent);\n        color: var(--uc-lunar-text);\n        transform: scale(1.05);\n      }\n      .uc-lunar-day:focus-visible {\n        outline: 2px solid var(--uc-lunar-accent);\n        outline-offset: 1px;\n      }\n      .uc-lunar-day--today {\n        border-color: var(--uc-lunar-accent);\n        box-shadow: 0 0 8px color-mix(in srgb, var(--uc-lunar-accent) 40%, transparent);\n      }\n      .uc-lunar-day--selected {\n        background: color-mix(in srgb, var(--uc-lunar-accent) 22%, transparent);\n        color: var(--uc-lunar-text);\n      }\n      .uc-lunar-day-num {\n        font-size: 0.62rem;\n        font-weight: 600;\n        line-height: 1;\n      }\n\n      /* ═══ Horizon view ═══════════════════════════════════════════════ */\n      .uc-lunar-horizon { animation: uc-lunar-fade 0.35s ease; }\n      .uc-lunar-horizon-svg {\n        display: block;\n        width: 100%;\n        height: auto;\n        aspect-ratio: 480 / 190;\n      }\n      .uc-lunar-gridline {\n        stroke: var(--uc-lunar-line);\n        stroke-width: 1;\n      }\n      .uc-lunar-horizonline {\n        stroke: var(--uc-lunar-dim);\n        stroke-width: 1;\n        stroke-dasharray: 5 4;\n        opacity: 0.7;\n      }\n      .uc-lunar-curve {\n        fill: none;\n        stroke-width: 2;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n      }\n      .uc-lunar-marker { opacity: 0.95; }\n      .uc-lunar-marker-label {\n        font-size: 10px;\n        font-weight: 600;\n        fill: var(--uc-lunar-dim);\n      }\n      .uc-lunar-tick {\n        font-size: 9px;\n        fill: var(--uc-lunar-dim);\n        opacity: 0.8;\n      }\n      .uc-lunar-current { opacity: 1; }\n      .uc-lunar-current-pulse {\n        fill: none;\n        stroke-width: 2;\n        animation: uc-lunar-pulse 2.4s ease-out infinite;\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      @keyframes uc-lunar-pulse {\n        0% { opacity: 0.8; transform: scale(1); }\n        100% { opacity: 0; transform: scale(2.6); }\n      }\n\n      /* ═══ Compact layouts ════════════════════════════════════════════ */\n      .uc-lunar--compact {\n        display: flex;\n        align-items: center;\n        gap: 14px;\n        padding: 14px 16px;\n        cursor: pointer;\n        animation: uc-lunar-fade 0.35s ease;\n      }\n      .uc-lunar--compact:focus-visible,\n      .uc-lunar--minimal:focus-visible,\n      .uc-lunar--moononly:focus-visible {\n        outline: 2px solid var(--uc-lunar-accent);\n        outline-offset: -2px;\n        border-radius: var(--uc-r-16, 16px);\n      }\n      .uc-lunar-compact-body {\n        flex: 1;\n        min-width: 0;\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n      }\n      .uc-lunar-compact-illum {\n        font-size: 0.95rem;\n        font-weight: 700;\n        display: inline-flex;\n        align-items: baseline;\n        gap: 6px;\n      }\n      .uc-lunar-compact-stats {\n        display: flex;\n        gap: 6px;\n        margin-top: 2px;\n      }\n      .uc-lunar-compact-stat {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 2px;\n        padding: 6px 4px;\n        border-radius: var(--uc-r-9, 9px);\n        background: var(--uc-lunar-chip);\n        font-size: 0.74rem;\n        font-weight: 600;\n        white-space: nowrap;\n        transition: transform 0.2s ease;\n      }\n      .uc-lunar-compact-stat:hover { transform: scale(1.06); }\n      .uc-lunar-compact-stat ha-icon { --mdc-icon-size: 15px; color: var(--uc-lunar-dim); }\n\n      .uc-lunar--minimal {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 10px;\n        padding: 12px 16px;\n        cursor: pointer;\n        animation: uc-lunar-fade 0.35s ease;\n      }\n      .uc-lunar-min-side {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 2px;\n        flex: 1;\n        transition: transform 0.2s ease;\n      }\n      .uc-lunar-min-side:hover { transform: scale(1.07); }\n      .uc-lunar-min-side ha-icon { --mdc-icon-size: 17px; color: var(--uc-lunar-dim); }\n      .uc-lunar-min-time { font-size: 0.82rem; font-weight: 700; }\n      .uc-lunar-min-label {\n        font-size: 0.6rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.04em;\n        color: var(--uc-lunar-dim);\n      }\n      .uc-lunar-min-center {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 4px;\n        flex: 1.2;\n      }\n      .uc-lunar-min-phase {\n        font-size: 0.74rem;\n        font-weight: 700;\n        text-transform: var(--uc-lunar-header-transform);\n        text-align: center;\n      }\n\n      .uc-lunar--moononly {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 10px;\n        cursor: pointer;\n        animation: uc-lunar-fade 0.35s ease;\n      }\n\n      /* ═══ Responsive ═════════════════════════════════════════════════ */\n      @media (max-width: 460px) {\n        .uc-lunar-phaseview { flex-direction: column; gap: 10px; }\n        .uc-lunar-data { width: 100%; }\n      }\n\n      /* ═══ Reduced motion ═════════════════════════════════════════════ */\n      @media (prefers-reduced-motion: reduce) {\n        .uc-lunar-moon-svg,\n        .uc-lunar-moon-halo,\n        .uc-lunar-stars,\n        .uc-lunar-stars--alt,\n        .uc-lunar-current-pulse {\n          animation: none !important;\n        }\n        .uc-lunar-pages { transition: none; }\n      }\n    `}}}};