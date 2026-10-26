export const __webpack_esm_ids__=[6116];export const __webpack_esm_modules__={8828(e,t,n){n.d(t,{UltraFloorplanModule:()=>S});var i=n(2618),o=n(3307),a=n(6478),r=(n(7921),n(7907)),s=n(9760),l=n(9665);const c=new Set(["light","switch","fan","input_boolean","binary_sensor","automation","siren","humidifier","remote","script"]),d=new Set(["on","open","opening","closing","unlocked","unlocking","jammed","home","playing","cleaning","returning","active","heat","cool","heat_cool","auto","dry","fan_only","triggered","arming","pending","detected"]),p=new Set(["unavailable","unknown",""]);function h(e){if(!e)return"";const t=e.indexOf(".");return t>0?e.slice(0,t):""}function u(e,t=50){const n="number"==typeof e?e:Number(e);return Number.isFinite(n)?Math.round(10*Math.min(100,Math.max(0,n)))/10:t}function v(e,t){var n;if(!e)return!1;const i=String(null!==(n=e.state)&&void 0!==n?n:"");if(void 0!==t&&""!==t.trim())return i===t.trim();if(p.has(i))return!1;const o=h(e.entity_id);if(c.has(o))return"on"===i;switch(o){case"alarm_control_panel":return"disarmed"!==i;case"climate":case"water_heater":case"media_player":return"off"!==i&&"idle"!==i&&"standby"!==i;case"lock":return"locked"!==i&&"locking"!==i;case"cover":case"valve":return"closed"!==i;case"person":case"device_tracker":return"home"===i;case"timer":return"active"===i;default:return d.has(i)}}function m(e){const t=Math.min(4e4,Math.max(1e3,e))/100,n=e=>Math.round(Math.min(255,Math.max(0,e))),i=t<=66?255:329.698727446*Math.pow(t-60,-.1332047592),o=t<=66?99.4708025861*Math.log(t)-161.1195681661:288.1221695283*Math.pow(t-60,-.0755148492),a=t>=66?255:t<=19?0:138.5177312231*Math.log(t-10)-305.0447927307;return{r:n(i),g:n(o),b:n(a)}}new Set(["light","switch","fan","input_boolean","automation","lock","cover"]);const g={r:255,g:196,b:120};function f(e){const t=(null==e?void 0:e.attributes)||{},n=function(e){if(!Array.isArray(e)||e.length<3)return null;const[t,n,i]=e.map(Number);if(![t,n,i].every(e=>"number"==typeof e&&Number.isFinite(e)))return null;const o=e=>Math.round(Math.min(255,Math.max(0,null!=e?e:0)));return{r:o(t),g:o(n),b:o(i)}}(t.rgb_color);if(n)return n;const i=Number(t.color_temp_kelvin);if(Number.isFinite(i)&&i>0)return m(i);const o=Number(t.color_temp);return Number.isFinite(o)&&o>0?m(1e6/o):g}function _(e){var t;if(!e||"on"!==e.state)return 0;const n=Number(null===(t=e.attributes)||void 0===t?void 0:t.brightness);return Number.isFinite(n)?Math.min(1,Math.max(0,n/255)):1}function b(e,t=1){return t>=1?`rgb(${e.r}, ${e.g}, ${e.b})`:`rgba(${e.r}, ${e.g}, ${e.b}, ${t})`}function y(e){if(!e)return[];const t=[];for(const n of e.trim().split(/\s+|;/)){if(!n)continue;const[e,i]=n.split(","),o=Number(e),a=Number(i);Number.isFinite(o)&&Number.isFinite(a)&&t.push({x:u(o),y:u(a)})}return t}function w(e){return e.map(e=>`${u(e.x)},${u(e.y)}`).join(" ")}function x(e,t,n){const i=n.width||1,o=n.height||1;return{x:u((e-n.left)/i*100),y:u((t-n.top)/o*100)}}const $=24,k={ui_action:{actions:["default","more-info","toggle","navigate","url","perform-action","assist","nothing"]}};function z(e,t,n){return(0,a.kg)(`editor.floorplan.${t}`,e,n)}function M(e){return!e||"nothing"===e.action}class S extends o.m{constructor(){super(...arguments),this.metadata={type:"floorplan",title:"Floorplan",description:"A picture of your home with live entity markers, glowing lights and room zones — a friendly Picture Elements",author:"WJD Designs",version:"1.0.0",icon:"mdi:floor-plan",category:"interactive",tags:["floorplan","floor plan","picture elements","map","rooms","lights","markers","interactive"]},this._editor=new Map}createDefault(e,t){return{id:e||this.generateId("floorplan"),type:"floorplan",image:"",dark_image:"",markers:[],zones:[],aspect_ratio:"auto",image_fit:"contain",marker_style:"badge",marker_size:$,show_names:!1,show_states:!1,label_position:"below",active_color:"",inactive_color:"",glow_lights:!0,glow_intensity:70,glow_size:28,dim_when_all_off:!1,dim_amount:45,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=[];return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),{valid:0===t.length,errors:t}}getRuntimeEntityIds(e){const t=e;return function(e){const t=new Set;for(const n of e.markers||[])(null==n?void 0:n.entity)&&t.add(n.entity);for(const n of e.zones||[])(null==n?void 0:n.entity)&&t.add(n.entity);return[...t]}({markers:t.markers||[],zones:t.zones||[]}).filter(e=>e.includes("."))}_ed(e){let t=this._editor.get(e);return t||(t={mode:"markers",activeMarkerId:"",activeZoneId:"",expanded:new Set,advanced:new Set,drag:null,draft:null,message:""},this._editor.set(e,t)),t}_imageUrl(e,t){if(!e||!t)return"";try{return(0,r.VG)(e,t.trim())}catch(e){return""}}_isDarkMode(e){const t=null==e?void 0:e.themes;return!!t&&"object"==typeof t&&!0===t.darkMode}_resolveImage(e,t){if(e.dark_image&&this._isDarkMode(t)){const n=this._imageUrl(t,e.dark_image);if(n)return n}return this._imageUrl(t,e.image)}_frame(e){const t=function(e){if(!e||"auto"===e)return null;const[t,n]=e.split(":");return t&&n?`${t} / ${n}`:null}(e.aspect_ratio);return t?{style:`aspect-ratio:${t};`,imgClass:`uc-fp-img fixed fit-${e.image_fit||"contain"}`}:{style:"",imgClass:"uc-fp-img"}}_markerIcon(e,t,n,i){var o,a,r;if(i&&e.active_icon)return e.active_icon;if(e.icon)return e.icon;const s=t?null===(o=null==n?void 0:n.states)||void 0===o?void 0:o[t]:void 0,c=null===(a=null==s?void 0:s.attributes)||void 0===a?void 0:a.icon;if("string"==typeof c&&c)return c;if(!t)return"mdi:map-marker-plus-outline";const d=null===(r=null==s?void 0:s.attributes)||void 0===r?void 0:r.device_class,p=(0,l.IV)(h(t),"string"==typeof d?d:void 0,void 0);return i?p.active:p.inactive}_markerName(e,t,n){var i,o,a,r;const s=t?null===(a=null===(o=null===(i=null==n?void 0:n.states)||void 0===i?void 0:i[t])||void 0===o?void 0:o.attributes)||void 0===a?void 0:a.friendly_name:void 0;return(null===(r=e.name)||void 0===r?void 0:r.trim())||("string"==typeof s?s:"")||t||""}renderGeneralTab(e,t,n,o){var a;const r=e,s=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        ${this._renderImageSection(r,t,o,s)}
        ${this._renderMarkersSection(r,t,n,o,s)}
        ${this._renderDisplaySection(r,t,o,s)}
        ${this._renderZonesSection(r,t,n,o,s)}
        ${this._renderLayoutSection(r,t,o,s)}
      </div>
    `}_renderImageSection(e,t,n,o){return i.qy`
      <div class="settings-section">
        <div class="section-title">${z(o,"image_section","Floor plan image")}</div>
        <div class="uc-fp-section-desc">
          ${z(o,"image_section_desc","Upload a picture of your floor plan, or paste a link to one. A screenshot of a vacuum map or a photo of a sketch works too.")}
        </div>
        ${this.renderFileField(z(o,"image","Image"),z(o,"image_desc","PNG, JPG, SVG or WebP. Markers are placed in percent, so any size works."),t,e.image||"",e=>{n({image:e}),this.triggerPreviewUpdate()})}
        ${this.renderFieldSection(z(o,"image_url","Or use an image URL"),z(o,"image_url_desc","A full URL or a /local/ path. Same setting as the upload above."),t,{image:e.image||""},[this.textField("image")],e=>{var t,i;n({image:String(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.image)&&void 0!==i?i:"")}),this.triggerPreviewUpdate()})}
      </div>
    `}_renderMarkersSection(e,t,n,o,a){const r=e.markers||[];return i.qy`
      <div class="settings-section">
        <div class="section-title">${z(a,"markers_section","Markers")}</div>
        <div class="uc-fp-section-desc">
          ${z(a,"markers_section_desc","Add an entity, then click on the plan to place it. Tapping a marker toggles lights and switches, and opens details for everything else.")}
        </div>
        ${this._renderPlacementSurface(e,t,n,o,a)}
        ${0===r.length?i.qy`<div class="uc-fp-empty-rows">
              ${z(a,"no_markers","No markers yet. Add your first one below.")}
            </div>`:i.s6}
        ${r.map((i,r)=>this._renderMarkerRow(i,r,e,t,n,o,a))}
        <button class="uc-fp-add-btn" type="button" @click=${()=>this._addMarker(e,o)}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${z(a,"add_marker","Add marker")}
        </button>
      </div>
    `}_renderMarkerRow(e,t,n,o,a,r,s){var l;const c=this._ed(n.id),d=c.expanded.has(e.id),p="markers"===c.mode&&c.activeMarkerId===e.id,h=this.resolveEntity(e.entity,a)||e.entity||"",m=v(h?null===(l=null==o?void 0:o.states)||void 0===l?void 0:l[h]:void 0,e.active_state),g=this._markerName(e,h,o)||z(s,"unbound_marker","Choose an entity"),f=t=>this._patchMarker(n,e.id,t,r);return i.qy`
      <div class="uc-fp-row ${p?"selected":""}">
        <div class="uc-fp-row-head">
          <button
            type="button"
            class="uc-fp-row-main"
            aria-expanded=${d?"true":"false"}
            @click=${()=>{d?c.expanded.delete(e.id):c.expanded.add(e.id),c.mode="markers",c.activeMarkerId=e.id,this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon=${this._markerIcon(e,h,o,m)}></ha-icon>
            <span class="uc-fp-row-title">${g}</span>
            <span class="uc-fp-row-sub">${u(e.x)}% · ${u(e.y)}%</span>
            <ha-icon class="uc-fp-chevron" icon=${d?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
          </button>
          <button
            type="button"
            class="uc-fp-icon-btn ${p?"on":""}"
            title=${z(s,"place_marker","Place on the plan")}
            aria-label=${z(s,"place_marker","Place on the plan")}
            @click=${()=>{c.mode="markers",c.activeMarkerId=p?"":e.id,this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon="mdi:crosshairs-gps"></ha-icon>
          </button>
          <button
            type="button"
            class="uc-fp-icon-btn"
            title=${z(s,"remove","Remove")}
            aria-label=${z(s,"remove","Remove")}
            @click=${()=>this._removeMarker(n,t,r)}
          >
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>
        ${d?i.qy`<div class="uc-fp-row-body">
              ${this.renderEntityPickerWithVariables(o,a,"entity",e.entity||"",e=>f({entity:e||""}),void 0,z(s,"entity","Entity"))}
              ${this.renderSliderField(z(s,"pos_x","Horizontal position"),z(s,"pos_x_desc","Percent from the left edge. Clicking on the plan sets this too."),u(e.x),50,0,100,.5,e=>f({x:u(e)}),"%")}
              ${this.renderSliderField(z(s,"pos_y","Vertical position"),z(s,"pos_y_desc","Percent from the top edge."),u(e.y),50,0,100,.5,e=>f({y:u(e)}),"%")}
              <button
                type="button"
                class="uc-fp-link-btn"
                @click=${()=>{c.advanced.has(e.id)?c.advanced.delete(e.id):c.advanced.add(e.id),this.triggerPreviewUpdate(!0)}}
              >
                <ha-icon icon=${c.advanced.has(e.id)?"mdi:chevron-up":"mdi:tune-variant"}></ha-icon>
                ${c.advanced.has(e.id)?z(s,"hide_advanced","Hide advanced options"):z(s,"show_advanced","Advanced options")}
              </button>
              ${c.advanced.has(e.id)?this.renderConditionalFieldsGroup(z(s,"marker_advanced","Advanced"),this._renderMarkerAdvanced(e,n,o,h,f,s)):i.s6}
            </div>`:i.s6}
      </div>
    `}_renderMarkerAdvanced(e,t,n,o,a,r){var s,l,c,d,p,u,v,m;const g="light"===h(o);return i.qy`
      ${this.renderFieldSection(z(r,"name","Name"),z(r,"name_desc","Leave blank to use the entity name."),n,{name:e.name||""},[this.textField("name")],e=>{var t,n;return a({name:String(null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.name)&&void 0!==n?n:"")})})}
      ${this.renderIconField(z(r,"icon","Icon"),z(r,"icon_desc","Leave blank to use the entity icon."),n,e.icon||"",e=>a({icon:e||void 0}))}
      ${this.renderIconField(z(r,"active_icon","Icon while active"),z(r,"active_icon_desc","Optional. Swaps in while the entity is on, open or home."),n,e.active_icon||"",e=>a({active_icon:e||void 0}))}
      ${this.renderSliderField(z(r,"marker_size","Icon size"),z(r,"marker_size_override_desc","Overrides the size set under Display for this marker."),null!==(l=null!==(s=e.size)&&void 0!==s?s:t.marker_size)&&void 0!==l?l:$,null!==(c=t.marker_size)&&void 0!==c?c:$,12,72,1,e=>a({size:e}),"px")}
      ${this.renderFieldSection(z(r,"show_name","Show name"),"",n,{show_name:null!==(p=null!==(d=e.show_name)&&void 0!==d?d:t.show_names)&&void 0!==p&&p},[this.booleanField("show_name")],e=>{var t;return a({show_name:!0===(null===(t=e.detail.value)||void 0===t?void 0:t.show_name)})})}
      ${this.renderFieldSection(z(r,"show_state","Show state"),"",n,{show_state:null!==(v=null!==(u=e.show_state)&&void 0!==u?u:t.show_states)&&void 0!==v&&v},[this.booleanField("show_state")],e=>{var t;return a({show_state:!0===(null===(t=e.detail.value)||void 0===t?void 0:t.show_state)})})}
      ${this._renderLabelPositionField(e.label_position||t.label_position||"below",e=>a({label_position:e}),r)}
      ${this.renderColorField(z(r,"active_color","Active color"),z(r,"active_color_marker_desc","Icon color while active. Lights use their own color when this is empty."),n,e.active_color||"","",e=>a({active_color:e||void 0}))}
      ${this.renderColorField(z(r,"inactive_color","Inactive color"),"",n,e.inactive_color||"","",e=>a({inactive_color:e||void 0}))}
      ${this.renderFieldSection(z(r,"active_state","Active when state is"),z(r,"active_state_desc","Optional. By default on, open, unlocked, home and playing count as active."),n,{active_state:e.active_state||""},[this.textField("active_state")],e=>{var t,n;return a({active_state:String(null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.active_state)&&void 0!==n?n:"")||void 0})})}
      ${g?this.renderFieldSection(z(r,"glow","Glow"),z(r,"glow_desc","A soft halo in the light color, brighter as the light gets brighter."),n,{glow:null!==(m=e.glow)&&void 0!==m?m:!1!==t.glow_lights},[this.booleanField("glow")],e=>{var t;return a({glow:!0===(null===(t=e.detail.value)||void 0===t?void 0:t.glow)})}):i.s6}
      ${this._renderActionFields(e.tap_action,e.hold_action,e.double_tap_action,{action:"default"},{action:"more-info"},n,e=>a(e),r)}
    `}_renderLabelPositionField(e,t,n){return this.renderSegmentedField(z(n,"label_position","Label position"),"",e,[{value:"below",label:z(n,"label_below","Below"),icon:"mdi:arrow-down"},{value:"above",label:z(n,"label_above","Above"),icon:"mdi:arrow-up"},{value:"left",label:z(n,"label_left","Left"),icon:"mdi:arrow-left"},{value:"right",label:z(n,"label_right","Right"),icon:"mdi:arrow-right"}],e=>t(e||"below"),4)}_renderActionFields(e,t,n,o,a,r,s,l){const c=(e,t,n)=>this.renderFieldSection(t,"",r,{[e]:n},[{name:e,selector:k}],t=>{var n;const i=null===(n=t.detail.value)||void 0===n?void 0:n[e];if(!i||"object"!=typeof i||!i.action)return;const o={};o[e]=i,s(o)});return i.qy`
      ${c("tap_action",z(l,"tap_action","Tap action"),e||o)}
      ${c("hold_action",z(l,"hold_action","Hold action"),t||a)}
      ${c("double_tap_action",z(l,"double_tap_action","Double-tap action"),n||{action:"nothing"})}
    `}_renderPlacementSurface(e,t,n,o,a){const r=this._resolveImage(e,t);if(!r)return i.qy`
        <div class="uc-fp-note">
          <ha-icon icon="mdi:image-outline"></ha-icon>
          <span>
            ${z(a,"placement_needs_image","Add a floor plan image above to place markers by clicking on it. You can still add markers and set their position with the sliders.")}
          </span>
        </div>
      `;const s=this._ed(e.id),l=this._frame(e),c=e.zones||[],d=c.find(e=>e.id===s.activeZoneId),p=c.length>0||"zones"===s.mode;let h;return h="zones"===s.mode?"polygon"===(null==d?void 0:d.shape)?z(a,"hint_polygon","Click on the plan to add corners to the selected polygon zone."):z(a,"hint_zones","Drag on the plan to draw a room zone. Drag a zone to move it, or its corner to resize."):s.activeMarkerId?z(a,"hint_place","Click on the plan to move the selected marker there, or drag any marker."):z(a,"hint_select","Select a marker (or add one) and then click on the plan to place it."),i.qy`
      <div class="uc-fp-placement">
        ${p?this.renderSegmentedField(z(a,"edit_mode","Editing"),"",s.mode,[{value:"markers",label:z(a,"mode_markers","Markers"),icon:"mdi:map-marker"},{value:"zones",label:z(a,"mode_zones","Room zones"),icon:"mdi:vector-square"}],e=>{s.mode="zones"===e?"zones":"markers",this.triggerPreviewUpdate(!0)},2):i.s6}
        <div class="uc-fp-placement-hint">${h}</div>
        <div
          class="uc-fp-stage uc-fp-place mode-${s.mode}"
          style=${l.style}
          @pointerdown=${t=>this._onPlaceDown(t,e,o,a)}
          @pointermove=${t=>this._onPlaceMove(t,e,o)}
          @pointerup=${t=>this._onPlaceUp(t,e,o,a)}
          @pointercancel=${t=>this._onPlaceUp(t,e,o,a)}
        >
          <img class=${l.imgClass} src=${r} alt="" draggable="false" />
          <svg class="uc-fp-zones edit" viewBox="0 0 100 100" preserveAspectRatio="none">
            ${c.map(e=>this._placementZoneShape(e,e.id===s.activeZoneId))}
            ${s.draft?i.JW`<rect class="uc-fp-draft" x=${s.draft.x} y=${s.draft.y} width=${s.draft.width} height=${s.draft.height}></rect>`:i.s6}
          </svg>
          ${d&&"zones"===s.mode?this._placementZoneHandle(d):i.s6}
          ${(e.markers||[]).map(e=>{var o;const a=this.resolveEntity(e.entity,n)||e.entity||"",r=v(a?null===(o=null==t?void 0:t.states)||void 0===o?void 0:o[a]:void 0,e.active_state);return i.qy`
              <div
                class="uc-fp-place-marker ${s.activeMarkerId===e.id?"selected":""}"
                data-marker=${e.id}
                title=${this._markerName(e,a,t)}
                style="left:${u(e.x)}%;top:${u(e.y)}%;"
              >
                <ha-icon icon=${this._markerIcon(e,a,t,r)}></ha-icon>
              </div>
            `})}
        </div>
        ${s.message?i.qy`<div class="uc-fp-placement-msg">${s.message}</div>`:i.s6}
      </div>
    `}_placementZoneShape(e,t){const n="uc-fp-place-zone "+(t?"selected":"");if("polygon"===e.shape){const t=y(e.points);return 0===t.length?i.s6:t.length<3?i.JW`${t.map(t=>i.JW`<circle class=${n} data-zone=${e.id} cx=${t.x} cy=${t.y} r="1.2"></circle>`)}`:i.JW`<polygon class=${n} data-zone=${e.id} points=${w(t)}></polygon>`}const o=this._zoneRect(e);return i.JW`<rect class=${n} data-zone=${e.id} x=${o.x} y=${o.y} width=${o.width} height=${o.height}></rect>`}_placementZoneHandle(e){if("polygon"===e.shape)return i.s6;const t=this._zoneRect(e);return i.qy`<div
      class="uc-fp-place-handle"
      data-zone-handle=${e.id}
      style="left:${u(t.x+t.width)}%;top:${u(t.y+t.height)}%;"
    ></div>`}_zoneRect(e){const t=u(e.x,10),n=u(e.y,10);return{x:t,y:n,width:Math.min(100-t,u(e.width,20)),height:Math.min(100-n,u(e.height,20))}}_onPlaceDown(e,t,n,i){var o,a,r,s,l,c,d;const p=e.currentTarget,h=e.target,u=x(e.clientX,e.clientY,p.getBoundingClientRect()),v=this._ed(t.id);e.preventDefault(),null===(o=p.setPointerCapture)||void 0===o||o.call(p,e.pointerId),v.message="";const m=(e,t,n=0,i=0)=>{v.drag={kind:e,id:t,startX:u.x,startY:u.y,grabDx:n,grabDy:i}};if("markers"===v.mode){const e=null===(r=null===(a=h.closest)||void 0===a?void 0:a.call(h,"[data-marker]"))||void 0===r?void 0:r.getAttribute("data-marker");if(e)return v.activeMarkerId=e,m("marker",e),void this.triggerPreviewUpdate(!0);const o=t.markers||[];return v.activeMarkerId&&o.some(e=>e.id===v.activeMarkerId)?(this._patchMarker(t,v.activeMarkerId,{x:u.x,y:u.y},n),void m("marker",v.activeMarkerId)):(v.message=o.length?z(i,"msg_select_marker","Select a marker in the list first (the crosshair button)."):z(i,"msg_add_marker","Add a marker below first, then click here to place it."),void this.triggerPreviewUpdate(!0))}const g=t.zones||[],f=null===(l=null===(s=h.closest)||void 0===s?void 0:s.call(h,"[data-zone-handle]"))||void 0===l?void 0:l.getAttribute("data-zone-handle");if(f)return v.activeZoneId=f,m("zone-resize",f),void this.triggerPreviewUpdate(!0);const _=null===(d=null===(c=h.closest)||void 0===c?void 0:c.call(h,"[data-zone]"))||void 0===d?void 0:d.getAttribute("data-zone"),b=g.find(e=>e.id===v.activeZoneId);if("polygon"===(null==b?void 0:b.shape)){const e=[...y(b.points),u];return void this._patchZone(t,b.id,{points:w(e)},n)}if(_){const e=g.find(e=>e.id===_);if(v.activeZoneId=_,v.expanded.add(_),e&&"polygon"!==e.shape){const t=this._zoneRect(e);m("zone-move",_,u.x-t.x,u.y-t.y)}return void this.triggerPreviewUpdate(!0)}v.activeZoneId="",v.draft={x:u.x,y:u.y,width:0,height:0},m("draw",""),this.triggerPreviewUpdate(!0)}_onPlaceMove(e,t,n){const i=this._ed(t.id),o=i.drag;if(!o)return;const a=e.currentTarget,r=x(e.clientX,e.clientY,a.getBoundingClientRect());if(e.preventDefault(),"marker"===o.kind)return void this._patchMarker(t,o.id,{x:r.x,y:r.y},n);if("draw"===o.kind)return i.draft={x:Math.min(o.startX,r.x),y:Math.min(o.startY,r.y),width:Math.abs(r.x-o.startX),height:Math.abs(r.y-o.startY)},void this.triggerPreviewUpdate(!0);const s=(t.zones||[]).find(e=>e.id===o.id);if(!s)return;const l=this._zoneRect(s);"zone-move"!==o.kind?this._patchZone(t,s.id,{width:u(Math.max(2,r.x-l.x)),height:u(Math.max(2,r.y-l.y))},n):this._patchZone(t,s.id,{x:u(Math.min(Math.max(0,r.x-o.grabDx),100-l.width)),y:u(Math.min(Math.max(0,r.y-o.grabDy),100-l.height))},n)}_onPlaceUp(e,t,n,i){var o;const a=this._ed(t.id),r=e.currentTarget;null===(o=r.releasePointerCapture)||void 0===o||o.call(r,e.pointerId);const s=a.drag;if(a.drag=null,"draw"===(null==s?void 0:s.kind)){const e=a.draft;if(a.draft=null,e&&e.width>=2&&e.height>=2)return void this._addZone(t,n,i,"rect",e)}this.triggerPreviewUpdate(!0)}_patchMarker(e,t,n,i){i({markers:(e.markers||[]).map(e=>{if(e.id!==t)return e;const i=Object.assign({},e);for(const[e,t]of Object.entries(n))void 0===t?delete i[e]:i[e]=t;return i})}),this.triggerPreviewUpdate()}_addMarker(e,t){const n=[...e.markers||[]],i=n.length%5,o={id:this.generateId("marker"),entity:"",x:u(42+4*i),y:u(42+4*i),tap_action:{action:"default"},hold_action:{action:"more-info"},double_tap_action:{action:"nothing"}};n.push(o);const a=this._ed(e.id);a.mode="markers",a.activeMarkerId=o.id,a.expanded.add(o.id),t({markers:n}),this.triggerPreviewUpdate()}_removeMarker(e,t,n){const i=[...e.markers||[]],[o]=i.splice(t,1);if(o){const t=this._ed(e.id);t.expanded.delete(o.id),t.advanced.delete(o.id),t.activeMarkerId===o.id&&(t.activeMarkerId="")}n({markers:i}),this.triggerPreviewUpdate()}_patchZone(e,t,n,i){i({zones:(e.zones||[]).map(e=>{if(e.id!==t)return e;const i=Object.assign({},e);for(const[e,t]of Object.entries(n))void 0===t?delete i[e]:i[e]=t;return i})}),this.triggerPreviewUpdate()}_addZone(e,t,n,i,o){var a,r,s,l;const c=[...e.zones||[]],d=c.length%5*5,p={id:this.generateId("zone"),entity:"",name:z(n,"new_zone","Room"),shape:i,opacity:35,inactive_opacity:0,show_outline:!1,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"}};"rect"===i?(p.x=u(null!==(a=null==o?void 0:o.x)&&void 0!==a?a:10+d),p.y=u(null!==(r=null==o?void 0:o.y)&&void 0!==r?r:10+d),p.width=u(null!==(s=null==o?void 0:o.width)&&void 0!==s?s:30),p.height=u(null!==(l=null==o?void 0:o.height)&&void 0!==l?l:25)):p.points="",c.push(p);const h=this._ed(e.id);h.mode="zones",h.activeZoneId=p.id,h.expanded.add(p.id),t({zones:c}),this.triggerPreviewUpdate()}_removeZone(e,t,n){const i=[...e.zones||[]],[o]=i.splice(t,1);if(o){const t=this._ed(e.id);t.expanded.delete(o.id),t.advanced.delete(o.id),t.activeZoneId===o.id&&(t.activeZoneId="")}n({zones:i}),this.triggerPreviewUpdate()}_renderDisplaySection(e,t,n,o){var a,r,s;const l=e=>{n(e),this.triggerPreviewUpdate()};return i.qy`
      <div class="settings-section">
        <div class="section-title">${z(o,"display_section","Display")}</div>
        <div class="uc-fp-section-desc">
          ${z(o,"display_section_desc","How every marker looks. Each marker can override these.")}
        </div>
        ${this.renderSegmentedField(z(o,"marker_style","Marker style"),z(o,"marker_style_desc","Badges stay readable on busy pictures; plain icons are more minimal."),e.marker_style||"badge",[{value:"badge",label:z(o,"style_badge","Badge"),icon:"mdi:circle-slice-8"},{value:"icon",label:z(o,"style_icon","Icon only"),icon:"mdi:lightbulb-outline"}],e=>l({marker_style:"icon"===e?"icon":"badge"}),2)}
        ${this.renderSliderField(z(o,"marker_size","Icon size"),z(o,"marker_size_desc","Icons keep this size on any screen; their positions scale."),null!==(a=e.marker_size)&&void 0!==a?a:$,$,12,72,1,e=>l({marker_size:e}),"px")}
        ${this.renderFieldSection(z(o,"show_names","Show names"),z(o,"show_names_desc","Label each marker with its name."),t,{show_names:!0===e.show_names},[this.booleanField("show_names")],e=>{var t;return l({show_names:!0===(null===(t=e.detail.value)||void 0===t?void 0:t.show_names)})})}
        ${this.renderFieldSection(z(o,"show_states","Show states"),z(o,"show_states_desc","Show the current state, like 21.5 °C or Open."),t,{show_states:!0===e.show_states},[this.booleanField("show_states")],e=>{var t;return l({show_states:!0===(null===(t=e.detail.value)||void 0===t?void 0:t.show_states)})})}
        ${!0===e.show_names||!0===e.show_states?this._renderLabelPositionField(e.label_position||"below",e=>l({label_position:e}),o):i.s6}
        ${this.renderColorField(z(o,"active_color","Active color"),z(o,"active_color_desc","Icon color while on. Empty uses the theme state colors; lights use their own color."),t,e.active_color||"","",e=>l({active_color:e}))}
        ${this.renderColorField(z(o,"inactive_color","Inactive color"),"",t,e.inactive_color||"","",e=>l({inactive_color:e}))}
        ${this.renderFieldSection(z(o,"glow_lights","Glow for lights"),z(o,"glow_lights_desc","Lights that are on cast a soft halo tinted by their color and brightness."),t,{glow_lights:!1!==e.glow_lights},[this.booleanField("glow_lights")],e=>{var t;return l({glow_lights:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.glow_lights)})})}
        ${!1!==e.glow_lights?this.renderConditionalFieldsGroup(z(o,"glow_settings","Glow"),i.qy`
                ${this.renderSliderField(z(o,"glow_intensity","Glow intensity"),"",null!==(r=e.glow_intensity)&&void 0!==r?r:70,70,5,100,5,e=>l({glow_intensity:e}),"%")}
                ${this.renderSliderField(z(o,"glow_size","Glow size"),z(o,"glow_size_desc","Width of the halo as a share of the plan width."),null!==(s=e.glow_size)&&void 0!==s?s:28,28,5,80,1,e=>l({glow_size:e}),"%")}
              `):i.s6}
      </div>
    `}_renderZonesSection(e,t,n,o,a){const r=e.zones||[];return i.qy`
      <div class="settings-section">
        <div class="section-title">${z(a,"zones_section","Room zones")}</div>
        <div class="uc-fp-section-desc">
          ${z(a,"zones_section_desc","Optional. Draw rooms on the plan and bind each to a light or sensor; the room fills with color while it is on.")}
        </div>
        ${r.map((i,r)=>this._renderZoneRow(i,r,e,t,n,o,a))}
        <div class="uc-fp-add-row">
          <button
            class="uc-fp-add-btn"
            type="button"
            @click=${()=>this._addZone(e,o,a,"rect")}
          >
            <ha-icon icon="mdi:vector-square-plus"></ha-icon>
            ${z(a,"add_rect_zone","Add rectangle")}
          </button>
          <button
            class="uc-fp-add-btn"
            type="button"
            @click=${()=>this._addZone(e,o,a,"polygon")}
          >
            <ha-icon icon="mdi:vector-polygon"></ha-icon>
            ${z(a,"add_polygon_zone","Add polygon")}
          </button>
        </div>
      </div>
    `}_renderZoneRow(e,t,n,o,a,r,s){var l,c,d,p,h,v;const m=this._ed(n.id),g=m.expanded.has(e.id),f="zones"===m.mode&&m.activeZoneId===e.id,_=t=>this._patchZone(n,e.id,t,r),b=this.resolveEntity(e.entity,a)||e.entity||"",x=b?null===(d=null===(c=null===(l=null==o?void 0:o.states)||void 0===l?void 0:l[b])||void 0===c?void 0:c.attributes)||void 0===d?void 0:d.friendly_name:void 0,$=(null===(p=e.name)||void 0===p?void 0:p.trim())||("string"==typeof x?x:"")||z(s,"new_zone","Room"),k=this._zoneRect(e),M=y(e.points).length;return i.qy`
      <div class="uc-fp-row ${f?"selected":""}">
        <div class="uc-fp-row-head">
          <button
            type="button"
            class="uc-fp-row-main"
            aria-expanded=${g?"true":"false"}
            @click=${()=>{g?m.expanded.delete(e.id):m.expanded.add(e.id),m.mode="zones",m.activeZoneId=e.id,this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon=${"polygon"===e.shape?"mdi:vector-polygon":"mdi:vector-square"}></ha-icon>
            <span class="uc-fp-row-title">${$}</span>
            <span class="uc-fp-row-sub">${b||z(s,"no_entity","No entity")}</span>
            <ha-icon class="uc-fp-chevron" icon=${g?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
          </button>
          <button
            type="button"
            class="uc-fp-icon-btn"
            title=${z(s,"remove","Remove")}
            aria-label=${z(s,"remove","Remove")}
            @click=${()=>this._removeZone(n,t,r)}
          >
            <ha-icon icon="mdi:delete-outline"></ha-icon>
          </button>
        </div>
        ${g?i.qy`<div class="uc-fp-row-body">
              ${this.renderEntityPickerWithVariables(o,a,"entity",e.entity||"",e=>_({entity:e||""}),void 0,z(s,"zone_entity","Entity (light, motion sensor, door …)"))}
              ${this.renderFieldSection(z(s,"name","Name"),"",o,{name:e.name||""},[this.textField("name")],e=>{var t,n;return _({name:String(null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.name)&&void 0!==n?n:"")})})}
              ${"polygon"===e.shape?i.qy`
                    ${this.renderFieldSection(z(s,"points","Corners"),z(s,"points_desc","Percent x,y pairs separated by spaces. Select this zone and click on the plan to add corners."),o,{points:e.points||""},[this.textField("points")],e=>{var t,n;return _({points:String(null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.points)&&void 0!==n?n:"")})})}
                    <div class="uc-fp-inline-actions">
                      <span class="uc-fp-row-sub">
                        ${z(s,"point_count","Corners")}: ${M}
                      </span>
                      <button type="button" class="uc-fp-link-btn" @click=${()=>_({points:""})}>
                        <ha-icon icon="mdi:eraser"></ha-icon>
                        ${z(s,"clear_points","Clear corners")}
                      </button>
                    </div>
                  `:i.qy`
                    ${this.renderSliderField(z(s,"pos_x","Horizontal position"),"",k.x,10,0,100,.5,e=>_({x:u(e)}),"%")}
                    ${this.renderSliderField(z(s,"pos_y","Vertical position"),"",k.y,10,0,100,.5,e=>_({y:u(e)}),"%")}
                    ${this.renderSliderField(z(s,"zone_width","Width"),"",k.width,20,2,100,.5,e=>_({width:u(e)}),"%")}
                    ${this.renderSliderField(z(s,"zone_height","Height"),"",k.height,20,2,100,.5,e=>_({height:u(e)}),"%")}
                  `}
              ${this.renderColorField(z(s,"zone_color","Fill color"),z(s,"zone_color_desc","Empty uses the light color for lights, otherwise the theme accent."),o,e.color||"","",e=>_({color:e||void 0}))}
              ${this.renderSliderField(z(s,"zone_opacity","Opacity while active"),"",null!==(h=e.opacity)&&void 0!==h?h:35,35,0,100,5,e=>_({opacity:e}),"%")}
              <button
                type="button"
                class="uc-fp-link-btn"
                @click=${()=>{m.advanced.has(e.id)?m.advanced.delete(e.id):m.advanced.add(e.id),this.triggerPreviewUpdate(!0)}}
              >
                <ha-icon icon=${m.advanced.has(e.id)?"mdi:chevron-up":"mdi:tune-variant"}></ha-icon>
                ${m.advanced.has(e.id)?z(s,"hide_advanced","Hide advanced options"):z(s,"show_advanced","Advanced options")}
              </button>
              ${m.advanced.has(e.id)?this.renderConditionalFieldsGroup(z(s,"zone_advanced","Advanced"),i.qy`
                      ${this.renderSegmentedField(z(s,"zone_shape","Shape"),"",e.shape,[{value:"rect",label:z(s,"shape_rect","Rectangle"),icon:"mdi:vector-square"},{value:"polygon",label:z(s,"shape_polygon","Polygon"),icon:"mdi:vector-polygon"}],t=>{if("polygon"===t&&"polygon"!==e.shape){const e=[{x:k.x,y:k.y},{x:k.x+k.width,y:k.y},{x:k.x+k.width,y:k.y+k.height},{x:k.x,y:k.y+k.height}];_({shape:"polygon",points:w(e)})}else"rect"===t&&"rect"!==e.shape&&_({shape:"rect"})},2)}
                      ${this.renderSliderField(z(s,"zone_inactive_opacity","Opacity while off"),"",null!==(v=e.inactive_opacity)&&void 0!==v?v:0,0,0,100,5,e=>_({inactive_opacity:e}),"%")}
                      ${this.renderFieldSection(z(s,"show_outline","Outline"),z(s,"show_outline_desc","Draw the room edge, even while off."),o,{show_outline:!0===e.show_outline},[this.booleanField("show_outline")],e=>{var t;return _({show_outline:!0===(null===(t=e.detail.value)||void 0===t?void 0:t.show_outline)})})}
                      ${this.renderFieldSection(z(s,"active_state","Active when state is"),z(s,"active_state_desc","Optional. By default on, open, unlocked, home and playing count as active."),o,{active_state:e.active_state||""},[this.textField("active_state")],e=>{var t,n;return _({active_state:String(null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.active_state)&&void 0!==n?n:"")||void 0})})}
                      ${this._renderActionFields(e.tap_action,e.hold_action,e.double_tap_action,{action:"nothing"},{action:"nothing"},o,e=>_(e),s)}
                    `):i.s6}
            </div>`:i.s6}
      </div>
    `}_renderLayoutSection(e,t,n,o){var a;const r=e=>{n(e),this.triggerPreviewUpdate()},s=e.aspect_ratio||"auto";return i.qy`
      <div class="settings-section">
        <div class="section-title">${z(o,"layout_section","Image & layout")}</div>
        ${this.renderSegmentedField(z(o,"aspect_ratio","Shape"),z(o,"aspect_ratio_desc","Auto follows the picture. A fixed shape keeps cards in a row the same height."),s,[{value:"auto",label:z(o,"ratio_auto","Auto")},{value:"16:9",label:"16:9"},{value:"4:3",label:"4:3"},{value:"3:2",label:"3:2"},{value:"1:1",label:"1:1"},{value:"3:4",label:"3:4"}],e=>r({aspect_ratio:e||"auto"}),3)}
        ${"auto"!==s?this.renderSegmentedField(z(o,"image_fit","Image fit"),z(o,"image_fit_desc","Markers are placed relative to this frame, so re-check them after changing it."),e.image_fit||"contain",[{value:"contain",label:z(o,"fit_contain","Fit")},{value:"cover",label:z(o,"fit_cover","Fill & crop")},{value:"fill",label:z(o,"fit_fill","Stretch")}],e=>r({image_fit:e||"contain"}),3):i.s6}
        ${this.renderFieldSection(z(o,"dim_when_all_off","Dim when everything is off"),z(o,"dim_when_all_off_desc","Darken the picture while none of the markers or zones are active."),t,{dim_when_all_off:!0===e.dim_when_all_off},[this.booleanField("dim_when_all_off")],e=>{var t;return r({dim_when_all_off:!0===(null===(t=e.detail.value)||void 0===t?void 0:t.dim_when_all_off)})})}
        ${!0===e.dim_when_all_off?this.renderSliderField(z(o,"dim_amount","Dim amount"),"",null!==(a=e.dim_amount)&&void 0!==a?a:45,45,5,90,5,e=>r({dim_amount:e}),"%"):i.s6}
        ${this.renderFileField(z(o,"dark_image","Dark mode image"),z(o,"dark_image_desc","Optional. Shown instead while Home Assistant uses a dark theme. Use the same framing as the main image."),t,e.dark_image||"",e=>r({dark_image:e}))}
      </div>
    `}renderPreview(e,t,n,o){var a,r;const s=e,l=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",c=this.buildStyleString(this.buildDesignStyles(e,t)),d=this.getHoverEffectClass(e),p=this._resolveImage(s,t),h="live"===o||"ha-preview"===o;if(!p)return i.qy`
        <div class="uc-fp-wrapper ${d}" data-uc-role="pane" style=${c}>
          <div class="uc-fp-empty">
            <ha-icon icon="mdi:floor-plan"></ha-icon>
            <div class="uc-fp-empty-title">${z(l,"empty_title","Add your floor plan")}</div>
            <div class="uc-fp-empty-sub">
              ${z(l,"empty_subtitle","Pick a picture of your floor plan in the General tab, then add lights, sensors and doors as markers.")}
            </div>
          </div>
        </div>
      `;const u=this._frame(s),m=s.markers||[],g=s.zones||[],f=null==t?void 0:t.states,_={markers:m.map(e=>Object.assign(Object.assign({},e),{entity:this.resolveEntity(e.entity,n)||e.entity})),zones:g.map(e=>Object.assign(Object.assign({},e),{entity:this.resolveEntity(e.entity,n)||e.entity}))},b=!0===s.dim_when_all_off&&function(e,t){const n=[...(t.markers||[]).map(e=>({entity:e.entity,active_state:e.active_state})),...(t.zones||[]).map(e=>({entity:e.entity,active_state:e.active_state}))].filter(e=>!!e.entity);return!(!n.length||!e)&&n.every(t=>!v(e[t.entity],t.active_state))}(f,_),y=Math.min(90,Math.max(0,null!==(r=s.dim_amount)&&void 0!==r?r:45)),w=b?`filter:brightness(${Math.round(100-y)/100});`:"",x=this.createGestureHandlers(s.id,{tap_action:s.tap_action,hold_action:s.hold_action,double_tap_action:s.double_tap_action,module:s},t,n),$=x.isActionable&&!(M(s.tap_action)&&M(s.hold_action)&&M(s.double_tap_action)),k=i.qy`
      <div
        class="uc-fp-stage ${b?"dimmed":""}"
        style=${u.style}
        @pointerdown=${$?x.onPointerDown:i.s6}
        @pointermove=${$?x.onPointerMove:i.s6}
        @pointerup=${$?x.onPointerUp:i.s6}
        @pointerleave=${$?x.onPointerLeave:i.s6}
        @pointercancel=${$?x.onPointerCancel:i.s6}
      >
        <img class=${u.imgClass} style=${w} src=${p} alt="" draggable="false" />
        ${g.length?i.qy`<svg class="uc-fp-zones" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              ${_.zones.map(e=>this._renderZone(e,s,t,n))}
            </svg>`:i.s6}
        ${_.markers.map(e=>this._renderGlow(e,s,t))}
        ${_.markers.map(e=>this._renderMarker(e,s,t,n,l))}
        ${h&&0===m.length?i.qy`<div class="uc-fp-hint-chip">
              <ha-icon icon="mdi:map-marker-plus-outline"></ha-icon>
              ${z(l,"preview_hint","Add markers in the General tab")}
            </div>`:i.s6}
      </div>
    `;return i.qy`
      <div class="uc-fp-wrapper ${d}" data-uc-role="pane" style=${c}>
        ${this.wrapWithAnimation(k,e,t)}
      </div>
    `}_renderGlow(e,t,n){var o,a,r,s;const l=e.entity;if("light"!==h(l))return i.s6;if(!(null!==(o=e.glow)&&void 0!==o?o:!1!==t.glow_lights))return i.s6;const c=null===(a=null==n?void 0:n.states)||void 0===a?void 0:a[l],d=function(e,t){if(e<=0)return 0;const n=Math.min(100,Math.max(0,t))/100;return Math.round(n*(.35+.65*Math.min(1,e))*1e3)/1e3}(_(c),null!==(r=t.glow_intensity)&&void 0!==r?r:70);if(d<=0)return i.s6;const p=f(c),v=Math.min(100,Math.max(1,null!==(s=t.glow_size)&&void 0!==s?s:28)),m=Math.round(.45*d*1e3)/1e3;return i.qy`<div
      class="uc-fp-glow"
      style="left:${u(e.x)}%;top:${u(e.y)}%;width:${v}%;background:radial-gradient(circle, ${b(p,d)} 0%, ${b(p,m)} 35%, ${b(p,0)} 70%);"
    ></div>`}_renderZone(e,t,n,o){var a,r,s;const l=e.entity,c=l?null===(a=null==n?void 0:n.states)||void 0===a?void 0:a[l]:void 0,d=v(c,e.active_state),p="light"===h(l),u=e.color||(p&&d?b(f(c)):"")||t.active_color||"var(--primary-color)",m=d?null!==(r=e.opacity)&&void 0!==r?r:35:null!==(s=e.inactive_opacity)&&void 0!==s?s:0,g=p&&d?.4+.6*_(c):1,x=`fill:${u};fill-opacity:${Math.round(Math.min(100,Math.max(0,m))*g)/100};${!0===e.show_outline?`stroke:${u};stroke-opacity:0.8;stroke-width:2px;`:"stroke:none;"}`,$=!l||M(e.tap_action)&&M(e.hold_action)&&M(e.double_tap_action)?null:this.createGestureHandlers(`${t.id}-${e.id}`,{tap_action:e.tap_action||{action:"nothing"},hold_action:e.hold_action||{action:"nothing"},double_tap_action:e.double_tap_action||{action:"nothing"},entity:l,module:t},n,o),k=`uc-fp-zone ${d?"on":""} ${$?"actionable":""}`;if("polygon"===e.shape){const t=y(e.points);return t.length<3?i.s6:$?i.JW`<polygon class=${k} style=${x} points=${w(t)}
            @pointerdown=${$.onPointerDown} @pointermove=${$.onPointerMove} @pointerup=${$.onPointerUp}
            @pointerleave=${$.onPointerLeave} @pointercancel=${$.onPointerCancel}></polygon>`:i.JW`<polygon class=${k} style=${x} points=${w(t)}></polygon>`}const z=this._zoneRect(e);return $?i.JW`<rect class=${k} style=${x} x=${z.x} y=${z.y} width=${z.width} height=${z.height}
          @pointerdown=${$.onPointerDown} @pointermove=${$.onPointerMove} @pointerup=${$.onPointerUp}
          @pointerleave=${$.onPointerLeave} @pointercancel=${$.onPointerCancel}></rect>`:i.JW`<rect class=${k} style=${x} x=${z.x} y=${z.y} width=${z.width} height=${z.height}></rect>`}_renderMarker(e,t,n,o,a){var r,l,c,d,p,m,g;const _=e.entity||"",y=_?null===(r=null==n?void 0:n.states)||void 0===r?void 0:r[_]:void 0,w=h(_),x=v(y,e.active_state),k=!y||"unavailable"===y.state,M=Math.min(96,Math.max(8,null!==(c=null!==(l=e.size)&&void 0!==l?l:t.marker_size)&&void 0!==c?c:$)),S=y?this._markerIcon(e,_,n,x):"mdi:help-circle-outline";let F;F=k?"var(--state-unavailable-color, var(--disabled-text-color, #9e9e9e))":x?e.active_color||t.active_color||("light"===w?b(f(y)):"")||`var(--state-${w}-active-color, var(--state-active-color, var(--amber-color, #ffc107)))`:e.inactive_color||t.inactive_color||"var(--state-inactive-color, var(--secondary-text-color, #8a8a8a))";const P=null!==(p=null!==(d=e.show_name)&&void 0!==d?d:t.show_names)&&void 0!==p&&p,I=null!==(g=null!==(m=e.show_state)&&void 0!==m?m:t.show_states)&&void 0!==g&&g,A=this._markerName(e,_,n),U=y?(0,s.formatEntityState)(n,_):_?z(a,"entity_missing","Not found"):z(a,"unbound_marker","Choose an entity"),q=e.label_position||t.label_position||"below",D="icon"===(t.marker_style||"badge")?"style-icon":"style-badge",Z=this.createGestureHandlers(`${t.id}-${e.id}`,{tap_action:e.tap_action||{action:"default"},hold_action:e.hold_action||{action:"more-info"},double_tap_action:e.double_tap_action||{action:"nothing"},entity:_||void 0,module:t},n,o),C=!!_&&Z.isActionable,R=[A,y?(0,s.formatEntityState)(n,_):""].filter(Boolean).join(": ");return i.qy`
      <div
        class="uc-fp-marker ${D} label-${q} ${x?"on":""} ${k?"unavailable":""}"
        style="left:${u(e.x)}%;top:${u(e.y)}%;--uc-fp-size:${M}px;--uc-fp-color:${F};"
        title=${R}
        role=${C?"button":i.s6}
        tabindex=${C?"0":i.s6}
        aria-label=${R||i.s6}
        @pointerdown=${C?Z.onPointerDown:i.s6}
        @pointermove=${C?Z.onPointerMove:i.s6}
        @pointerup=${C?Z.onPointerUp:i.s6}
        @pointerleave=${C?Z.onPointerLeave:i.s6}
        @pointercancel=${C?Z.onPointerCancel:i.s6}
        @keydown=${C?Z.onKeyDown:i.s6}
      >
        <div class="uc-fp-badge">
          <ha-icon icon=${S}></ha-icon>
        </div>
        ${P||I?i.qy`<div class="uc-fp-label">
              ${P&&A?i.qy`<span class="uc-fp-label-name">${A}</span>`:i.s6}
              ${I?i.qy`<span class="uc-fp-label-state">${U}</span>`:i.s6}
            </div>`:i.s6}
      </div>
    `}getStyles(){return`\n      .uc-fp-wrapper { box-sizing: border-box; width: 100%; }\n\n      .uc-fp-stage {\n        position: relative;\n        width: 100%;\n        overflow: hidden;\n        border-radius: var(--uc-r-12, 12px);\n        background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));\n        user-select: none;\n        -webkit-user-select: none;\n      }\n      .uc-fp-img {\n        display: block;\n        width: 100%;\n        height: auto;\n        pointer-events: none;\n        -webkit-user-drag: none;\n        transition: filter 0.45s ease;\n      }\n      .uc-fp-img.fixed { position: absolute; inset: 0; height: 100%; object-fit: contain; }\n      .uc-fp-img.fixed.fit-cover { object-fit: cover; }\n      .uc-fp-img.fixed.fit-fill { object-fit: fill; }\n\n      .uc-fp-zones {\n        position: absolute;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n        overflow: visible;\n      }\n      .uc-fp-zone {\n        transition: fill-opacity 0.45s ease, fill 0.45s ease;\n        vector-effect: non-scaling-stroke;\n      }\n      .uc-fp-zone.actionable { pointer-events: visiblePainted; cursor: pointer; }\n\n      .uc-fp-glow {\n        position: absolute;\n        aspect-ratio: 1 / 1;\n        transform: translate(-50%, -50%);\n        border-radius: 50%;\n        pointer-events: none;\n        transition: background 0.45s ease, opacity 0.45s ease;\n      }\n\n      .uc-fp-marker {\n        position: absolute;\n        width: max(44px, calc(var(--uc-fp-size, 24px) + 16px));\n        height: max(44px, calc(var(--uc-fp-size, 24px) + 16px));\n        transform: translate(-50%, -50%);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        box-sizing: border-box;\n        -webkit-tap-highlight-color: transparent;\n        outline: none;\n      }\n      .uc-fp-marker[role='button'] { cursor: pointer; }\n      .uc-fp-marker:focus-visible .uc-fp-badge {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n      .uc-fp-badge {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: var(--uc-fp-color);\n        transition: color 0.3s ease, border-color 0.3s ease, transform 0.15s ease, box-shadow 0.3s ease;\n      }\n      .uc-fp-badge ha-icon { --mdc-icon-size: var(--uc-fp-size, 24px); display: flex; }\n      .uc-fp-marker.style-badge .uc-fp-badge {\n        width: calc(var(--uc-fp-size, 24px) + 12px);\n        height: calc(var(--uc-fp-size, 24px) + 12px);\n        border-radius: 50%;\n        background: color-mix(in srgb, var(--uc-pane-bg, var(--card-background-color, #fff)) 86%, transparent);\n        border: 1.5px solid color-mix(in srgb, var(--divider-color, rgba(0, 0, 0, 0.12)) 100%, transparent);\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);\n      }\n      .uc-fp-marker.style-badge.on .uc-fp-badge {\n        border-color: var(--uc-fp-color);\n        box-shadow: 0 0 0 2px color-mix(in srgb, var(--uc-fp-color) 25%, transparent), 0 1px 4px rgba(0, 0, 0, 0.25);\n      }\n      .uc-fp-marker.style-icon .uc-fp-badge {\n        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.55));\n      }\n      .uc-fp-marker.unavailable .uc-fp-badge { opacity: 0.7; }\n      .uc-fp-marker[role='button']:active .uc-fp-badge { transform: scale(0.92); }\n\n      .uc-fp-label {\n        position: absolute;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 1px;\n        padding: 2px 7px;\n        border-radius: 8px;\n        background: color-mix(in srgb, var(--uc-pane-bg, var(--card-background-color, #fff)) 86%, transparent);\n        color: var(--primary-text-color);\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n        font-size: 11px;\n        line-height: 1.25;\n        white-space: nowrap;\n        max-width: 160px;\n        pointer-events: none;\n        z-index: 1;\n      }\n      .uc-fp-label span { overflow: hidden; text-overflow: ellipsis; max-width: 100%; }\n      .uc-fp-label-name { font-weight: 600; }\n      .uc-fp-label-state { color: var(--secondary-text-color); }\n      .uc-fp-marker.label-below .uc-fp-label { top: calc(100% - 6px); left: 50%; transform: translateX(-50%); }\n      .uc-fp-marker.label-above .uc-fp-label { bottom: calc(100% - 6px); left: 50%; transform: translateX(-50%); }\n      .uc-fp-marker.label-left .uc-fp-label { right: calc(100% - 6px); top: 50%; transform: translateY(-50%); align-items: flex-end; }\n      .uc-fp-marker.label-right .uc-fp-label { left: calc(100% - 6px); top: 50%; transform: translateY(-50%); align-items: flex-start; }\n\n      .uc-fp-hint-chip {\n        position: absolute;\n        left: 50%;\n        bottom: 10px;\n        transform: translateX(-50%);\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        padding: 6px 12px;\n        border-radius: 999px;\n        background: color-mix(in srgb, var(--uc-pane-bg, var(--card-background-color, #fff)) 90%, transparent);\n        color: var(--primary-text-color);\n        font-size: 12px;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);\n        pointer-events: none;\n        white-space: nowrap;\n      }\n      .uc-fp-hint-chip ha-icon { --mdc-icon-size: 16px; color: var(--primary-color); }\n\n      .uc-fp-empty {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        gap: 8px;\n        min-height: 180px;\n        padding: 24px 16px;\n        box-sizing: border-box;\n        border: 2px dashed var(--divider-color, rgba(127, 127, 127, 0.35));\n        border-radius: var(--uc-r-12, 12px);\n        color: var(--secondary-text-color);\n      }\n      .uc-fp-empty ha-icon { --mdc-icon-size: 44px; color: var(--primary-color); }\n      .uc-fp-empty-title { font-size: 16px; font-weight: 600; color: var(--primary-text-color); }\n      .uc-fp-empty-sub { font-size: 13px; line-height: 1.45; max-width: 360px; }\n\n      /* ── Editor ── */\n      .uc-fp-section-desc,\n      .uc-fp-placement-hint {\n        font-size: 12px;\n        line-height: 1.5;\n        color: var(--secondary-text-color);\n        margin-bottom: 12px;\n      }\n      .uc-fp-placement { margin-bottom: 14px; }\n      .uc-fp-placement-hint { margin-bottom: 6px; }\n      .uc-fp-placement-msg { font-size: 12px; margin-top: 6px; color: var(--warning-color, #ff9800); }\n      .uc-fp-place { touch-action: none; cursor: crosshair; border: 1px solid var(--divider-color); }\n      .uc-fp-place .uc-fp-zones { pointer-events: none; }\n      .uc-fp-place.mode-zones .uc-fp-place-zone { pointer-events: visiblePainted; cursor: move; }\n      .uc-fp-place-zone {\n        fill: var(--primary-color);\n        fill-opacity: 0.18;\n        stroke: var(--primary-color);\n        stroke-width: 2px;\n        vector-effect: non-scaling-stroke;\n      }\n      .uc-fp-place.mode-markers .uc-fp-place-zone { fill-opacity: 0.08; stroke-opacity: 0.4; }\n      .uc-fp-place-zone.selected { fill-opacity: 0.32; stroke-dasharray: 4 3; }\n      .uc-fp-draft {\n        fill: var(--primary-color);\n        fill-opacity: 0.2;\n        stroke: var(--primary-color);\n        stroke-width: 2px;\n        stroke-dasharray: 4 3;\n        vector-effect: non-scaling-stroke;\n      }\n      .uc-fp-place-marker {\n        position: absolute;\n        width: 30px;\n        height: 30px;\n        transform: translate(-50%, -50%);\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: var(--uc-pane-bg, var(--card-background-color, #fff));\n        color: var(--primary-text-color);\n        border: 2px solid var(--divider-color, rgba(0, 0, 0, 0.2));\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n        cursor: grab;\n        box-sizing: border-box;\n      }\n      .uc-fp-place-marker ha-icon { --mdc-icon-size: 16px; pointer-events: none; }\n      .uc-fp-place-marker.selected {\n        border-color: var(--primary-color);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        z-index: 2;\n      }\n      .uc-fp-place.mode-zones .uc-fp-place-marker { opacity: 0.45; pointer-events: none; }\n      .uc-fp-place-handle {\n        position: absolute;\n        width: 16px;\n        height: 16px;\n        transform: translate(-50%, -50%);\n        border-radius: 50%;\n        background: var(--primary-color);\n        border: 2px solid var(--card-background-color, #fff);\n        cursor: nwse-resize;\n        box-sizing: border-box;\n        z-index: 3;\n      }\n\n      .uc-fp-note {\n        display: flex;\n        gap: 8px;\n        align-items: flex-start;\n        padding: 10px 12px;\n        margin-bottom: 12px;\n        border-radius: 8px;\n        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);\n        font-size: 12px;\n        line-height: 1.5;\n        color: var(--secondary-text-color);\n      }\n      .uc-fp-note ha-icon { --mdc-icon-size: 18px; color: var(--primary-color); flex-shrink: 0; }\n      .uc-fp-empty-rows {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        padding: 8px 0 12px;\n      }\n\n      .uc-fp-row {\n        border: 1px solid var(--divider-color);\n        border-radius: 10px;\n        margin-bottom: 8px;\n        background: var(--uc-pane-bg, var(--card-background-color));\n        overflow: hidden;\n      }\n      .uc-fp-row.selected { border-color: var(--primary-color); }\n      .uc-fp-row-head { display: flex; align-items: center; gap: 4px; padding-right: 4px; }\n      .uc-fp-row-main {\n        flex: 1;\n        min-width: 0;\n        min-height: 48px;\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        padding: 8px 10px;\n        background: none;\n        border: none;\n        color: var(--primary-text-color);\n        font: inherit;\n        text-align: left;\n        cursor: pointer;\n      }\n      .uc-fp-row-main ha-icon { --mdc-icon-size: 20px; color: var(--primary-color); flex-shrink: 0; }\n      .uc-fp-row-title { font-weight: 600; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n      .uc-fp-row-sub { font-size: 12px; color: var(--secondary-text-color); white-space: nowrap; margin-left: auto; }\n      .uc-fp-chevron { color: var(--secondary-text-color) !important; }\n      .uc-fp-icon-btn {\n        width: 44px;\n        height: 44px;\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: none;\n        border-radius: 8px;\n        background: none;\n        color: var(--secondary-text-color);\n        cursor: pointer;\n      }\n      .uc-fp-icon-btn:hover { background: rgba(127, 127, 127, 0.12); }\n      .uc-fp-icon-btn.on { color: var(--primary-color); background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12); }\n      .uc-fp-row-body { padding: 4px 12px 12px; border-top: 1px solid var(--divider-color); }\n      .uc-fp-add-row { display: flex; gap: 8px; flex-wrap: wrap; }\n      .uc-fp-add-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        min-height: 44px;\n        padding: 8px 16px;\n        border-radius: 10px;\n        border: 1px dashed var(--primary-color);\n        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.06);\n        color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color));\n        font: inherit;\n        font-weight: 600;\n        cursor: pointer;\n        flex: 1;\n      }\n      .uc-fp-add-btn ha-icon { --mdc-icon-size: 18px; }\n      .uc-fp-link-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        min-height: 44px;\n        padding: 6px 4px;\n        margin-bottom: 8px;\n        border: none;\n        background: none;\n        color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color));\n        font: inherit;\n        font-size: 13px;\n        font-weight: 600;\n        cursor: pointer;\n      }\n      .uc-fp-link-btn ha-icon { --mdc-icon-size: 18px; }\n      .uc-fp-inline-actions { display: flex; align-items: center; justify-content: space-between; gap: 8px; }\n      ${o.m.getSliderStyles()}\n    `}}}};