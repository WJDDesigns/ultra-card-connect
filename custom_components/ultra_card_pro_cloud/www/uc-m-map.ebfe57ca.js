export const __webpack_esm_ids__=[6637];export const __webpack_esm_modules__={3072(e,t,i){var o=i(2618),a=i(4791),r=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class n extends o.WF{constructor(){super(...arguments),this.value="",this.type="text",this.placeholder="",this.label="",this.helper="",this.multiline=!1,this.rows=3,this.disabled=!1}focus(e){var t;null===(t=this._input)||void 0===t||t.focus(e)}_onInput(e){this.value=e.target.value}render(){var e,t,i,a,r,n,s;const l=this.multiline?o.qy`<textarea
          class="uc-tf-input"
          .value=${null!==(e=this.value)&&void 0!==e?e:""}
          rows=${this.rows}
          placeholder=${this.placeholder||o.s6}
          aria-label=${this.label||this.placeholder||o.s6}
          ?disabled=${this.disabled}
          @input=${this._onInput}
        ></textarea>`:o.qy`<input
          class="uc-tf-input"
          .value=${null!==(t=this.value)&&void 0!==t?t:""}
          type=${this.type||"text"}
          placeholder=${this.placeholder||o.s6}
          min=${null!==(i=this.min)&&void 0!==i?i:o.s6}
          max=${null!==(a=this.max)&&void 0!==a?a:o.s6}
          step=${null!==(r=this.step)&&void 0!==r?r:o.s6}
          inputmode=${null!==(n=this.inputmode)&&void 0!==n?n:o.s6}
          maxlength=${null!==(s=this.maxlength)&&void 0!==s?s:o.s6}
          aria-label=${this.label||this.placeholder||o.s6}
          ?disabled=${this.disabled}
          @input=${this._onInput}
        />`;return o.qy`
      ${this.label?o.qy`<label class="uc-tf-label">${this.label}</label>`:o.s6}
      <div class="uc-tf-wrap ${this.multiline?"multiline":""}">
        <slot name="leadingIcon"></slot>
        ${l}
        <slot name="suffix"></slot>
      </div>
      ${this.helper?o.qy`<div class="uc-tf-helper">${this.helper}</div>`:o.s6}
    `}}n.styles=o.AH`
    :host {
      display: inline-block;
      box-sizing: border-box;
      min-width: 0;
    }
    .uc-tf-label {
      display: block;
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 4px;
    }
    .uc-tf-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      box-sizing: border-box;
      width: 100%;
      min-height: 48px;
      padding: 0 12px;
      border-radius: var(--ha-border-radius-sm, 4px) var(--ha-border-radius-sm, 4px) 0 0;
      background: var(
        --input-fill-color,
        var(--secondary-background-color, rgba(127, 127, 127, 0.08))
      );
      border-bottom: 1px solid
        var(--input-idle-line-color, var(--divider-color, rgba(127, 127, 127, 0.4)));
      transition: border-color 0.15s ease;
    }
    .uc-tf-wrap.multiline {
      align-items: flex-start;
      padding: 10px 12px;
    }
    .uc-tf-wrap:focus-within {
      border-bottom: 2px solid var(--primary-color);
    }
    :host([disabled]) .uc-tf-wrap {
      opacity: 0.5;
    }
    .uc-tf-input {
      flex: 1 1 auto;
      min-width: 0;
      width: 100%;
      border: none;
      outline: none;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 16px;
      line-height: 1.4;
      padding: 12px 0;
      box-sizing: border-box;
    }
    .uc-tf-input:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }
    textarea.uc-tf-input {
      padding: 0;
      resize: vertical;
      font-family: var(--code-font-family, monospace);
      font-size: 14px;
    }
    .uc-tf-input::placeholder {
      color: var(--secondary-text-color);
      opacity: 0.7;
    }
    ::slotted([slot='leadingIcon']) {
      color: var(--secondary-text-color);
      --mdc-icon-size: 20px;
      flex: 0 0 auto;
    }
    ::slotted([slot='suffix']) {
      color: var(--secondary-text-color);
      flex: 0 0 auto;
    }
    .uc-tf-helper {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin: 4px 12px 0;
    }
  `,r([(0,a.MZ)()],n.prototype,"value",void 0),r([(0,a.MZ)()],n.prototype,"type",void 0),r([(0,a.MZ)()],n.prototype,"placeholder",void 0),r([(0,a.MZ)()],n.prototype,"label",void 0),r([(0,a.MZ)()],n.prototype,"helper",void 0),r([(0,a.MZ)()],n.prototype,"min",void 0),r([(0,a.MZ)()],n.prototype,"max",void 0),r([(0,a.MZ)()],n.prototype,"step",void 0),r([(0,a.MZ)()],n.prototype,"inputmode",void 0),r([(0,a.MZ)({type:Number})],n.prototype,"maxlength",void 0),r([(0,a.MZ)({type:Boolean})],n.prototype,"multiline",void 0),r([(0,a.MZ)({type:Number})],n.prototype,"rows",void 0),r([(0,a.MZ)({type:Boolean,reflect:!0})],n.prototype,"disabled",void 0),r([(0,a.P)(".uc-tf-input")],n.prototype,"_input",void 0),customElements.get("uc-textfield")||customElements.define("uc-textfield",n)},9998(e,t,i){i.d(t,{UltraMapModule:()=>p});var o=i(2618),a=i(7610),r=i(935),n=i(3307),s=(/*#__PURE__*/i(3534),i(2633)),l=i(3481),d=i(8125);i(3072);class p extends n.m{constructor(){super(...arguments),this.mapInstances=new Map,this.initializingMaps=new Set,this.markersGroup=new Map,this.entityStateCache=new Map,this.lastUpdateTime=new Map,this.mapResizeObservers=new Map,this.metadata={type:"map",title:"Map",description:"Interactive map with custom markers and location tracking",author:"WJD Designs",version:"1.0.0",icon:"mdi:map",category:"content",tags:["map","location","tracking","markers","gps"]},this.expandedMarkers=new Set,this.draggedMarkerIndex=null}createDefault(e,t){return{id:e||this.generateId("map"),type:"map",map_provider:"openstreetmap",map_type:"roadmap",zoom:14,show_map_controls:!0,show_fullscreen:!0,disable_zoom_scroll:!1,disable_touch_drag:!1,auto_zoom_entities:!1,markers:[{id:this.generateId("marker"),name:"My Location",type:"manual",latitude:37.2384841,longitude:-115.8250479,icon:"mdi:alien",icon_color:"var(--primary-color)",icon_size:20,marker_image_type:"icon"}],map_height:400,aspect_ratio:"16:9",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderGeneralTab(e,t,i,a){var n,s,l,d;const p=e,c=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",m=[{value:"openstreetmap",label:(0,r.kg)("editor.map.provider.osm",c,"OpenStreetMap (Free)")},{value:"google",label:(0,r.kg)("editor.map.provider.google",c,"Google Maps")}],u=[{value:"roadmap",label:(0,r.kg)("editor.map.type.roadmap",c,"Roadmap")},{value:"satellite",label:(0,r.kg)("editor.map.type.satellite",c,"Satellite")},{value:"hybrid",label:(0,r.kg)("editor.map.type.hybrid",c,"Hybrid")},{value:"terrain",label:(0,r.kg)("editor.map.type.terrain",c,"Terrain")}],g=[{value:"roadmap",label:(0,r.kg)("editor.map.type.osm_standard",c,"Standard")},{value:"cycle",label:(0,r.kg)("editor.map.type.osm_cycle",c,"Cycle Map")},{value:"transport",label:(0,r.kg)("editor.map.type.osm_transport",c,"Transport")},{value:"humanitarian",label:(0,r.kg)("editor.map.type.osm_humanitarian",c,"Humanitarian")}],h="google"===p.map_provider?u:g;return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Map Provider Selection -->
        ${this.renderSettingsSection((0,r.kg)("editor.map.provider.title",c,"Map Provider"),(0,r.kg)("editor.map.provider.desc",c,"Choose your map provider"),[{title:(0,r.kg)("editor.map.provider.select",c,"Map Provider"),description:(0,r.kg)("editor.map.provider.select_desc",c,"OpenStreetMap is free and requires no API key. Google Maps offers more features but requires an API key."),hass:t,data:{map_provider:p.map_provider||"openstreetmap"},schema:[this.selectField("map_provider",m)],onChange:e=>{e.detail.value.map_provider!==(p.map_provider||"openstreetmap")&&(a(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))}}])}

        <!-- Google Maps API Key (only for Google Maps) -->
        ${"google"===p.map_provider?o.qy`
              <div
                style="margin-bottom: 24px; padding: 16px; background: rgba(var(--rgb-primary-color), 0.05); border-left: 3px solid var(--primary-color); border-radius: var(--uc-r-4, 4px);"
              >
                <div
                  style="font-weight: 600; margin-bottom: 12px; color: var(--primary-text-color);"
                >
                  ${(0,r.kg)("editor.map.google_api_key",c,"Google Maps API Key (Optional)")}
                </div>
                <div
                  style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                >
                  ${(0,r.kg)("editor.map.google_api_key_desc",c,"Enter your Google Maps API key for full JavaScript API features. Without a key, basic tile layers are used (limited features).")}
                </div>
                <uc-textfield
                  .value=${p.google_api_key||""}
                  placeholder="AIzaSy..."
                  type="password"
                  @input=${e=>{const t=e.target.value;a({google_api_key:t})}}
                  style="width: 100%;"
                >
                  <ha-icon icon="mdi:key" slot="leadingIcon"></ha-icon>
                </uc-textfield>
                <div
                  style="font-size: 12px; margin-top: 8px; color: var(--secondary-text-color); opacity: 0.7;"
                >
                  <a
                    href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                    target="_blank"
                    style="color: var(--primary-color); text-decoration: none;"
                  >
                    ${(0,r.kg)("editor.map.how_to_get_api_key",c,"How to get a Google Maps API Key →")}
                  </a>
                </div>
              </div>
            `:""}

        <!-- Map Style Selection -->
        ${this.renderSettingsSection((0,r.kg)("editor.map.style.title",c,"Map Style"),(0,r.kg)("editor.map.style.desc",c,"Choose the visual style of the map"),[{title:(0,r.kg)("editor.map.style.select",c,"Map Style"),description:(0,r.kg)("editor.map.style.select_desc",c,"google"===p.map_provider?"Choose the visual style for Google Maps":"OpenStreetMap uses standard roadmap style"),hass:t,data:{map_type:p.map_type||"roadmap"},schema:[this.selectField("map_type",h)],onChange:e=>{e.detail.value.map_type!==(p.map_type||"roadmap")&&(a(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))}}])}

        <!-- Zoom Settings -->
        ${this.renderSettingsSection((0,r.kg)("editor.map.zoom.title",c,"Zoom Settings"),(0,r.kg)("editor.map.zoom.desc",c,"Control map zoom level and auto-fit behavior"),[{title:(0,r.kg)("editor.map.zoom.level",c,"Zoom Level"),description:(0,r.kg)("editor.map.zoom.level_desc",c,"Manual zoom level (1-20). Lower values show more area."),hass:t,data:{zoom:p.zoom||14},schema:[{name:"zoom",label:`${(0,r.kg)("editor.map.zoom.level",c,"Zoom Level")}: ${p.zoom||14}`,selector:{number:{min:1,max:20,step:1,mode:"slider"}}}],onChange:e=>{a({zoom:e.detail.value.zoom}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.map.zoom.auto",c,"Auto-Zoom to Fit Entities"),description:(0,r.kg)("editor.map.zoom.auto_desc",c,"Automatically calculate zoom and center to show all entity markers. Manual zoom acts as a maximum zoom level (you can zoom out further for context)."),hass:t,data:{auto_zoom_entities:p.auto_zoom_entities||!1},schema:[this.booleanField("auto_zoom_entities")],onChange:e=>{a({auto_zoom_entities:e.detail.value.auto_zoom_entities}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        <!-- Manual Center Coordinates -->
        ${this.renderSettingsSection((0,r.kg)("editor.map.center.title",c,"Map Center"),(0,r.kg)("editor.map.center.desc",c,"Manually set the map center coordinates. Leave empty to use first marker or auto-zoom."),[{title:(0,r.kg)("editor.map.center.latitude",c,"Center Latitude"),description:(0,r.kg)("editor.map.center.latitude_desc",c,"Latitude coordinate for map center (-90 to 90)"),hass:t,data:{manual_center_latitude:null!==(s=p.manual_center_latitude)&&void 0!==s?s:null},schema:[{name:"manual_center_latitude",label:(0,r.kg)("editor.map.center.latitude",c,"Center Latitude"),selector:{number:{min:-90,max:90,step:1e-6,mode:"box"}}}],onChange:e=>{const t=e.detail.value.manual_center_latitude;a({manual_center_latitude:t||void 0}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.map.center.longitude",c,"Center Longitude"),description:(0,r.kg)("editor.map.center.longitude_desc",c,"Longitude coordinate for map center (-180 to 180)"),hass:t,data:{manual_center_longitude:null!==(l=p.manual_center_longitude)&&void 0!==l?l:null},schema:[{name:"manual_center_longitude",label:(0,r.kg)("editor.map.center.longitude",c,"Center Longitude"),selector:{number:{min:-180,max:180,step:1e-6,mode:"box"}}}],onChange:e=>{const t=e.detail.value.manual_center_longitude;a({manual_center_longitude:t||void 0}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        <!-- Map Controls -->
        ${this.renderSettingsSection((0,r.kg)("editor.map.controls.title",c,"Map Controls"),(0,r.kg)("editor.map.controls.desc",c,"Configure map interaction controls"),[{title:(0,r.kg)("editor.map.controls.show",c,"Show Map Controls"),description:(0,r.kg)("editor.map.controls.show_desc",c,"Display zoom, pan, and other map controls"),hass:t,data:{show_map_controls:null===(d=p.show_map_controls)||void 0===d||d},schema:[this.booleanField("show_map_controls")],onChange:e=>a({show_map_controls:e.detail.value.show_map_controls})},{title:(0,r.kg)("editor.map.controls.show_fullscreen",c,"Full Screen Button"),description:(0,r.kg)("editor.map.controls.show_fullscreen_desc",c,"A button that opens the map full screen, with pan and zoom."),hass:t,data:{show_fullscreen:!0===p.show_fullscreen},schema:[this.booleanField("show_fullscreen")],onChange:e=>a({show_fullscreen:e.detail.value.show_fullscreen})},{title:(0,r.kg)("editor.map.controls.disable_scroll",c,"Disable Zoom on Mouse Wheel Scroll"),description:(0,r.kg)("editor.map.controls.disable_scroll_desc",c,"Prevent accidental zooming when scrolling the page"),hass:t,data:{disable_zoom_scroll:p.disable_zoom_scroll||!1},schema:[this.booleanField("disable_zoom_scroll")],onChange:e=>a({disable_zoom_scroll:e.detail.value.disable_zoom_scroll})},{title:(0,r.kg)("editor.map.controls.disable_drag",c,"Disable Dragging on Touch Screens"),description:(0,r.kg)("editor.map.controls.disable_drag_desc",c,"Prevent map panning on mobile/touch devices"),hass:t,data:{disable_touch_drag:p.disable_touch_drag||!1},schema:[this.booleanField("disable_touch_drag")],onChange:e=>a({disable_touch_drag:e.detail.value.disable_touch_drag})}])}

        <!-- Map Dimensions -->
        ${this.renderSettingsSection((0,r.kg)("editor.map.dimensions.title",c,"Map Dimensions"),(0,r.kg)("editor.map.dimensions.desc",c,"Control map size and aspect ratio"),[{title:(0,r.kg)("editor.map.dimensions.aspect_ratio",c,"Aspect Ratio"),description:(0,r.kg)("editor.map.dimensions.aspect_ratio_desc",c,"Choose preset aspect ratio or use custom height"),hass:t,data:{aspect_ratio:p.aspect_ratio||"16:9"},schema:[this.selectField("aspect_ratio",[{value:"16:9",label:"16:9 (Widescreen)"},{value:"4:3",label:"4:3 (Standard)"},{value:"1:1",label:"1:1 (Square)"},{value:"custom",label:"Custom (Use Height)"}])],onChange:e=>{e.detail.value.aspect_ratio!==(p.aspect_ratio||"16:9")&&(a(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))}},..."custom"===p.aspect_ratio?[{title:(0,r.kg)("editor.map.dimensions.height",c,"Map Height"),description:(0,r.kg)("editor.map.dimensions.height_desc",c,"Custom height in pixels"),hass:t,data:{map_height:p.map_height||400},schema:[{name:"map_height",label:(0,r.kg)("editor.map.dimensions.height",c,"Map Height"),selector:{number:{min:100,max:1e3,step:10,mode:"box",unit_of_measurement:"px"}}}],onChange:e=>a({map_height:e.detail.value.map_height})}]:[]])}

        <!-- Markers Section -->
        <div
          style="margin-top: 32px; padding-top: 24px; border-top: 2px solid var(--divider-color);"
        >
          <div style="margin-bottom: 24px;">
            <div
              style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;"
            >
              <div>
                <div style="font-size: 18px; font-weight: 600; margin-bottom: 4px;">
                  ${(0,r.kg)("editor.map.markers.title",c,"Map Markers")}
                </div>
                <div style="font-size: 13px; color: var(--secondary-text-color); opacity: 0.8;">
                  ${(0,r.kg)("editor.map.markers.desc",c,"Add custom markers or track entities with location data")}
                </div>
              </div>
              <ha-button raised @click=${()=>{const e={id:this.generateId("marker"),name:"New Marker",type:"manual",latitude:37.2384841,longitude:-115.8250479,icon:"mdi:alien",icon_color:"var(--primary-color)",icon_size:20,marker_image_type:"icon"},t=[...p.markers||[],e];a({markers:t})}}>
                <ha-icon icon="mdi:plus" slot="start"></ha-icon>
                <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
                ${(0,r.kg)("editor.map.markers.add",c,"Add Marker")}
              </ha-button>
            </div>
          </div>

          ${0===(p.markers||[]).length?o.qy`
                <div
                  style="text-align: center; padding: 48px 16px; color: var(--secondary-text-color); background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); border: 2px dashed var(--divider-color);"
                >
                  <ha-icon
                    icon="mdi:map-marker-question"
                    style="font-size: 48px; opacity: 0.3; display: block; margin: 0 auto 16px;"
                  ></ha-icon>
                  <div style="font-size: 16px; margin-bottom: 8px;">
                    ${(0,r.kg)("editor.map.markers.empty",c,"No markers added yet")}
                  </div>
                  <div style="font-size: 13px; opacity: 0.7;">
                    ${(0,r.kg)("editor.map.markers.empty_desc",c,'Click "Add Marker" to create your first map marker')}
                  </div>
                </div>
              `:o.qy`
                <div class="markers-list">
                  ${(p.markers||[]).map((e,o)=>this.renderMarkerEditor(e,o,p,t,a,i))}
                </div>
              `}
        </div>
      </div>
    `}renderMarkerEditor(e,t,i,a,n,s){var l;const d=(null===(l=null==a?void 0:a.locale)||void 0===l?void 0:l.language)||"en",p=()=>{const t=Object.assign(Object.assign({},e),{id:this.generateId("marker"),name:`${e.name} Copy`}),o=[...i.markers||[],t];n({markers:o})},c=(e,t)=>{const o=[...i.markers||[]],[a]=o.splice(e,1);o.splice(t,0,a),n({markers:o})};return(0,r.kg)("editor.map.marker.type.manual",d,"Manual Position"),(0,r.kg)("editor.map.marker.type.entity",d,"Entity Tracker"),(0,r.kg)("editor.map.marker.display.icon",d,"Icon"),(0,r.kg)("editor.map.marker.display.custom_image",d,"Custom Image"),(0,r.kg)("editor.map.marker.display.entity_image",d,"Entity Image"),o.qy`
      <div
        class="marker-item"
        style="margin-bottom: 24px; background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); border: 1px solid var(--divider-color); overflow: hidden;"
        data-marker-id="${e.id}"
        data-marker-index="${t}"
        @dragover=${e=>this.handleMarkerDragOver(e)}
        @dragenter=${e=>this.handleMarkerDragEnter(e)}
        @dragleave=${e=>this.handleMarkerDragLeave(e)}
        @drop=${e=>this.handleMarkerDrop(e,t,c)}
      >
        <div
          class="marker-header"
          style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: rgba(var(--rgb-primary-color), 0.05); border-bottom: 1px solid var(--divider-color); cursor: pointer;"
          @click=${e=>this.toggleMarkerHeader(e)}
        >
          <div style="display: flex; align-items: center; gap: 12px;">
            <div
              class="drag-handle"
              style="padding: 8px; margin: -8px; cursor: grab; border-radius: var(--uc-r-4, 4px); transition: background-color 0.2s ease;"
              draggable="true"
              @dragstart=${e=>this.handleMarkerDragStart(e,t)}
              @dragend=${e=>this.handleMarkerDragEnd(e)}
              @click=${e=>e.stopPropagation()}
              @mousedown=${e=>e.stopPropagation()}
              .title=${(0,r.kg)("editor.map.marker.drag",d,"Drag to reorder")}
              @mouseenter=${e=>{e.target.style.backgroundColor="rgba(var(--rgb-primary-color), 0.1)"}}
              @mouseleave=${e=>{e.target.style.backgroundColor="transparent"}}
            >
              <ha-icon
                icon="mdi:drag"
                style="color: var(--secondary-text-color); pointer-events: none;"
              ></ha-icon>
            </div>
            <div style="font-weight: 600; color: var(--primary-text-color);">
              ${e.name||`Marker ${t+1}`}
            </div>
            ${"entity"===e.type?o.qy`<ha-icon
                  icon="mdi:map-marker-account"
                  style="color: var(--primary-color);"
                ></ha-icon>`:o.qy`<ha-icon
                  icon="mdi:map-marker"
                  style="color: var(--primary-color);"
                ></ha-icon>`}
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <ha-icon-button
              @click=${e=>{e.stopPropagation(),p()}}
              .title=${(0,r.kg)("editor.map.marker.duplicate",d,"Duplicate marker")}
            >
              <ha-icon icon="mdi:content-duplicate"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              @click=${e=>{e.stopPropagation(),(()=>{const e=[...i.markers||[]];e.splice(t,1),n({markers:e})})()}}
              .title=${(0,r.kg)("editor.map.marker.delete",d,"Delete marker")}
              .disabled=${(i.markers||[]).length<=1}
            >
              <ha-icon icon="mdi:delete"></ha-icon>
            </ha-icon-button>
            <ha-icon
              class="expand-caret"
              icon="mdi:chevron-down"
              style="color: var(--secondary-text-color); transition: transform 0.2s ease; transform: ${this.expandedMarkers.has(e.id)?"rotate(180deg)":"rotate(0deg)"}; cursor: pointer; padding: 8px; margin: -8px;"
              @click=${e=>{e.stopPropagation();const t=e.target,i=t.closest(".marker-item"),o=null==i?void 0:i.querySelector(".marker-content");if(i&&o&&t){const e=i.getAttribute("data-marker-id")||"";this.expandedMarkers.has(e)?(this.expandedMarkers.delete(e),o.style.display="none",t.style.transform="rotate(0deg)"):(this.expandedMarkers.add(e),o.style.display="block",t.style.transform="rotate(180deg)")}}}
            ></ha-icon>
          </div>
        </div>

        <div
          class="marker-content"
          style="padding: 16px; display: ${this.expandedMarkers.has(e.id)?"block":"none"};"
        >
          ${this.renderMarkerConfiguration(e,a,o=>{if(!Object.entries(o).some(([t,i])=>{const o=e[t];return!(o===i||"number"==typeof o&&"number"==typeof i&&(Number.isNaN(o)&&Number.isNaN(i)||o===i))}))return;const a=[...i.markers||[]];a[t]=Object.assign(Object.assign({},e),o);const r=()=>{n({markers:a}),setTimeout(()=>this.triggerPreviewUpdate(),50)};1===Object.keys(o).length&&Object.prototype.hasOwnProperty.call(o,"icon_size")?setTimeout(r,50):r()},i,s)}
        </div>
      </div>
    `}renderMarkerConfiguration(e,t,i,a,n){var s,l,d,p;const c=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",m=[{value:"manual",label:(0,r.kg)("editor.map.marker.type.manual",c,"Manual Position")},{value:"entity",label:(0,r.kg)("editor.map.marker.type.entity",c,"Entity Tracker")}],u=[{value:"icon",label:(0,r.kg)("editor.map.marker.display.icon",c,"Icon")},{value:"custom_image",label:(0,r.kg)("editor.map.marker.display.custom_image",c,"Custom Image")},{value:"entity_image",label:(0,r.kg)("editor.map.marker.display.entity_image",c,"Entity Image")}];return o.qy`
      <!-- Marker Name -->
      <div class="field-group" style="margin-bottom: 16px;">
        <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
          ${(0,r.kg)("editor.map.marker.name",c,"Marker Name")}
        </div>
        <div
          class="field-description"
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,r.kg)("editor.map.marker.name_desc",c,"Display name for this marker")}
        </div>
        <uc-textfield
          .value=${e.name||""}
          placeholder=${(0,r.kg)("editor.map.marker.name_placeholder",c,"Enter marker name")}
          @input=${e=>{var t;const o=e.target,a=(null===(t=o.shadowRoot)||void 0===t?void 0:t.querySelector("input"))||o,r=o.value,n=a.selectionStart,s=a.selectionEnd;i({name:r}),requestAnimationFrame(()=>{a&&"number"==typeof n&&(o.value=r,a.value=r,a.setSelectionRange(n,s||n))})}}
          style="width: 100%;"
        ></uc-textfield>
      </div>

      <!-- Marker Type -->
      <div class="field-group" style="margin-bottom: 16px;">
        <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
          ${(0,r.kg)("editor.map.marker.type_label",c,"Marker Type")}
        </div>
        <div
          class="field-description"
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
        >
          ${(0,r.kg)("editor.map.marker.type_desc",c,"Choose marker position source")}
        </div>
        ${this.renderUcForm(t,{type:e.type||"manual"},[this.selectField("type",m)],t=>{const o=t.detail.value.type,a=e.type||"manual";o&&o!==a&&i({type:o})},!1)}
      </div>

      <!-- Manual Position Fields -->
      ${"manual"===e.type?o.qy`
            <div
              class="field-group"
              style="margin-bottom: 16px; padding: 16px; background: rgba(var(--rgb-primary-color), 0.05); border-left: 3px solid var(--primary-color); border-radius: var(--uc-r-4, 4px);"
            >
              <div style="font-weight: 600; margin-bottom: 12px; color: var(--primary-text-color);">
                ${(0,r.kg)("editor.map.marker.manual_position",c,"Manual Position")}
              </div>

              <!-- Latitude -->
              <div style="margin-bottom: 12px;">
                <div
                  class="field-title"
                  style="font-size: 14px; font-weight: 500; margin-bottom: 4px;"
                >
                  ${(0,r.kg)("editor.map.marker.latitude",c,"Latitude")}
                </div>
                <uc-textfield
                  .value=${(null===(l=e.latitude)||void 0===l?void 0:l.toString())||""}
                  type="number"
                  inputmode="decimal"
                  min="-90"
                  max="90"
                  step="any"
                  placeholder="40.7128"
                  @input=${e=>{const t=parseFloat(e.target.value);isNaN(t)||i({latitude:t})}}
                  style="width: 100%;"
                >
                  <span slot="suffix">°</span>
                </uc-textfield>
                <div
                  style="font-size: 11px; color: var(--secondary-text-color); margin-top: 4px; opacity: 0.7;"
                >
                  ${(0,r.kg)("editor.map.marker.latitude_range",c,"Range: -90 to 90")}
                </div>
              </div>

              <!-- Longitude -->
              <div>
                <div
                  class="field-title"
                  style="font-size: 14px; font-weight: 500; margin-bottom: 4px;"
                >
                  ${(0,r.kg)("editor.map.marker.longitude",c,"Longitude")}
                </div>
                <uc-textfield
                  .value=${(null===(d=e.longitude)||void 0===d?void 0:d.toString())||""}
                  type="number"
                  inputmode="decimal"
                  min="-180"
                  max="180"
                  step="any"
                  placeholder="-74.006"
                  @input=${e=>{const t=parseFloat(e.target.value);isNaN(t)||i({longitude:t})}}
                  style="width: 100%;"
                >
                  <span slot="suffix">°</span>
                </uc-textfield>
                <div
                  style="font-size: 11px; color: var(--secondary-text-color); margin-top: 4px; opacity: 0.7;"
                >
                  ${(0,r.kg)("editor.map.marker.longitude_range",c,"Range: -180 to 180")}
                </div>
              </div>
            </div>
          `:""}

      <!-- Entity Tracker Field -->
      ${"entity"===e.type?o.qy`
            <div
              class="field-group"
              style="margin-bottom: 16px; padding: 16px; background: rgba(var(--rgb-primary-color), 0.05); border-left: 3px solid var(--primary-color); border-radius: var(--uc-r-4, 4px);"
            >
              <div style="font-weight: 600; margin-bottom: 12px; color: var(--primary-text-color);">
                ${(0,r.kg)("editor.map.marker.entity_tracker",c,"Entity Tracker")}
              </div>
              ${this.renderSettingsSection("","",[{title:(0,r.kg)("editor.map.marker.entity",c,"Entity"),description:(0,r.kg)("editor.map.marker.entity_desc",c,"Select a device_tracker, person, or any entity with location data"),hass:t,data:{entity:e.entity||""},schema:[{name:"entity",selector:{entity:{domain:["device_tracker","person","zone"]}}}],onChange:e=>{i({entity:e.detail.value.entity})}}])}
            </div>
          `:""}

      <!-- Visual Settings -->
      <div class="field-group" style="margin-bottom: 16px;">
        <div
          style="font-size: 16px; font-weight: 600; margin-bottom: 12px; color: var(--primary-text-color);"
        >
          ${(0,r.kg)("editor.map.marker.visual",c,"Visual Settings")}
        </div>

        <!-- Marker Display Type -->
        <div style="margin-bottom: 16px;">
          <div class="field-title" style="font-size: 14px; font-weight: 500; margin-bottom: 4px;">
            ${(0,r.kg)("editor.map.marker.display_type",c,"Marker Display Type")}
          </div>
          <div
            class="field-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,r.kg)("editor.map.marker.display_type_desc",c,"Choose how the marker appears")}
          </div>
          ${this.renderUcForm(t,{marker_image_type:e.marker_image_type||"icon"},[this.selectField("marker_image_type",u)],e=>i({marker_image_type:e.detail.value.marker_image_type}),!1)}
        </div>

        <!-- Icon Settings -->
        ${"icon"!==e.marker_image_type&&e.marker_image_type?"":o.qy`
              <div style="margin-top: 16px;">
                <div style="margin-bottom: 12px;">
                  ${this.renderIconField((0,r.kg)("editor.map.marker.icon",c,"Marker Icon"),(0,r.kg)("editor.map.marker.icon_optional",c,"Optional - Leave empty for solid color teardrop"),t,e.icon||"",e=>i({icon:e}))}
                </div>

                <div style="margin-bottom: 12px;">
                  <div
                    class="field-title"
                    style="font-size: 14px; font-weight: 500; margin-bottom: 4px;"
                  >
                    ${(0,r.kg)("editor.map.marker.icon_color",c,"Icon Color")}
                  </div>
                  <ultra-color-picker
                    .value=${e.icon_color||"var(--primary-color)"}
                    @value-changed=${e=>{i({icon_color:e.detail.value})}}
                  ></ultra-color-picker>
                </div>

                <div>
                  ${this.renderSliderField((0,r.kg)("editor.map.marker.icon_size",c,"Icon Size"),(0,r.kg)("editor.map.marker.icon_size_range",c,"Range: 8 to 64 pixels"),e.icon_size||20,20,8,64,1,e=>{i({icon_size:e})},"px")}
                </div>
              </div>
            `}

        <!-- Custom Image Settings -->
        ${"custom_image"===e.marker_image_type?o.qy`
              <div style="margin-top: 16px;">
                <div
                  class="field-title"
                  style="font-size: 14px; font-weight: 500; margin-bottom: 4px;"
                >
                  ${(0,r.kg)("editor.map.marker.custom_image",c,"Custom Image")}
                </div>
                <div
                  class="field-description"
                  style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                >
                  ${(0,r.kg)("editor.map.marker.custom_image_desc",c,"Upload an image or enter an image URL")}
                </div>
                <uc-textfield
                  .value=${e.marker_image||""}
                  placeholder="https://example.com/marker.png"
                  @input=${e=>{const t=e.target.value;i({marker_image:t})}}
                  style="width: 100%; margin-bottom: 12px;"
                >
                  <ha-icon icon="mdi:image" slot="leadingIcon"></ha-icon>
                </uc-textfield>

                <div>
                  ${this.renderSliderField((0,r.kg)("editor.map.marker.image_size",c,"Image Size"),(0,r.kg)("editor.map.marker.image_size_range",c,"Range: 8 to 128 pixels"),e.icon_size||32,32,8,128,1,e=>{i({icon_size:e})},"px")}
                </div>
              </div>
            `:""}

        <!-- Entity Image Settings -->
        ${"entity_image"===e.marker_image_type?o.qy`
              <div style="margin-top: 16px;">
                <div
                  class="field-title"
                  style="font-size: 14px; font-weight: 500; margin-bottom: 4px;"
                >
                  ${(0,r.kg)("editor.map.marker.use_entity_picture",c,"Use Entity Picture")}
                </div>
                <div
                  class="field-description"
                  style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                >
                  ${(0,r.kg)("editor.map.marker.use_entity_picture_desc",c,"Use the entity_picture attribute from the tracked entity")}
                </div>
                ${this.renderUcForm(t,{use_entity_picture:null===(p=e.use_entity_picture)||void 0===p||p},[this.booleanField("use_entity_picture")],e=>i({use_entity_picture:e.detail.value.use_entity_picture}),!1)}

                <div style="margin-top: 16px;">
                  ${this.renderSliderField((0,r.kg)("editor.map.marker.image_size",c,"Image Size"),(0,r.kg)("editor.map.marker.image_size_range",c,"Range: 8 to 128 pixels"),e.icon_size||32,32,8,128,1,e=>{i({icon_size:e})},"px")}
                </div>
              </div>
            `:""}
      </div>
    `}handleMarkerDragStart(e,t){this.draggedMarkerIndex=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/html","")),e.currentTarget.style.opacity="0.5"}handleMarkerDragEnd(e){e.currentTarget.style.opacity="1",this.draggedMarkerIndex=null,document.querySelectorAll(".marker-item").forEach(e=>{e.style.borderTop="",e.style.borderBottom=""})}handleMarkerDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move")}handleMarkerDragEnter(e){const t=e.currentTarget.closest(".marker-item");if(t&&null!==this.draggedMarkerIndex){const e=parseInt(t.getAttribute("data-marker-index")||"0");e!==this.draggedMarkerIndex&&(t.style.borderTop=e<this.draggedMarkerIndex?"2px solid var(--primary-color)":"",t.style.borderBottom=e>this.draggedMarkerIndex?"2px solid var(--primary-color)":"")}}handleMarkerDragLeave(e){const t=e.currentTarget.closest(".marker-item");t&&(t.style.borderTop="",t.style.borderBottom="")}handleMarkerDrop(e,t,i){e.preventDefault(),e.stopPropagation();const o=e.currentTarget.closest(".marker-item");o&&(o.style.borderTop="",o.style.borderBottom=""),null!==this.draggedMarkerIndex&&this.draggedMarkerIndex!==t&&i(this.draggedMarkerIndex,t),this.draggedMarkerIndex=null}toggleMarkerHeader(e){const t=e.currentTarget,i=t.closest(".marker-item"),o=null==i?void 0:i.querySelector(".marker-content"),a=t.querySelector(".expand-caret");if(i&&o&&a){const e=i.getAttribute("data-marker-id")||"";this.expandedMarkers.has(e)?(this.expandedMarkers.delete(e),o.style.display="none",a.style.transform="rotate(0deg)"):(this.expandedMarkers.add(e),o.style.display="block",a.style.transform="rotate(180deg)")}}getEffectiveMapProvider(e){const t=e.map_provider||"openstreetmap",i=e.map_type||"roadmap";if("google"!==t)return{provider:t,mapType:i};const o=(e.google_api_key||"").trim();return o===s.B||o.toLowerCase().startsWith("***")?{provider:"openstreetmap",mapType:"roadmap"}:{provider:"google",mapType:i}}extractCoordinates(e,t){const i=t.states[e];if(!i)return null;const o=i.attributes;let a,r;if(void 0!==o.latitude&&void 0!==o.longitude)a=o.latitude,r=o.longitude;else if(void 0!==o.Location)if(Array.isArray(o.Location)){if(o.Location.length>=2){const e=parseFloat(o.Location[0]),t=parseFloat(o.Location[1]);isNaN(e)||isNaN(t)||(a=e,r=t)}}else if("string"==typeof o.Location){const e=o.Location.split(",").map(e=>parseFloat(e.trim()));2!==e.length||isNaN(e[0])||isNaN(e[1])||(a=e[0],r=e[1])}return void 0!==a&&void 0!==r?{latitude:a,longitude:r}:null}_trackEntityChanges(e,t,i){var o;const a=(null===(o=e.markers)||void 0===o?void 0:o.filter(e=>"entity"===e.type&&e.entity))||[];if(0===a.length)return;let r=!1;const n=Date.now();if(!(n-(this.lastUpdateTime.get(t)||0)<2e3)){for(const e of a){if(!e.entity)continue;if(!(null==i?void 0:i.states[e.entity]))continue;const o=this.extractCoordinates(e.entity,i),a=o?`${o.latitude},${o.longitude}`:"unknown",n=`${t}_${e.entity}`;this.entityStateCache.get(n)!==a&&(this.entityStateCache.set(n,a),r=!0)}if(r){this.lastUpdateTime.set(t,n);const o=this.mapInstances.get(t);o&&o._container&&this.updateExistingMap(o,e,i)}}}calculateAutoZoom(e,t){const i=[];for(const o of e)if("entity"===o.type&&o.entity){const e=this.extractCoordinates(o.entity,t);e&&i.push(e)}return 0===i.length?null:{bounds:l.latLngBounds(i.map(e=>l.latLng(e.latitude,e.longitude)))}}handleMapResize(e,t,i){const o=this.mapInstances.get(e);if(o&&o._container&&(o.invalidateSize(),t.auto_zoom_entities&&t.markers&&t.markers.length>0)){const e=this.calculateAutoZoom(t.markers,i);e&&o.fitBounds(e.bounds,{padding:[50,50],maxZoom:t.zoom||14,animate:!0})}}renderPreview(e,t,i,n){var s;const l=e,p=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",c=n?`-${n}`:"",m=`map-${l.id}${c}`,u=this.getHoverEffectClass(e),g=this.buildStyleString(this.buildDesignStyles(e,t));n&&"dashboard"!==n||this._trackEntityChanges(l,m,t);let h=l.map_height||400;l.aspect_ratio&&"custom"!==l.aspect_ratio&&(h=400);const y=l.aspect_ratio&&"custom"!==l.aspect_ratio?`position: relative; width: 100%; height: 0; padding-bottom: ${{"16:9":"56.25%","4:3":"75%","1:1":"100%"}[l.aspect_ratio]}; overflow: hidden; border-radius: var(--uc-r-8, 8px);`:`width: 100%; height: ${h}px; position: relative; overflow: hidden; border-radius: var(--uc-r-8, 8px);`,v=l.aspect_ratio&&"custom"!==l.aspect_ratio?"position: absolute; top: 0; left: 0; width: 100%; height: 100%;":"width: 100%; height: 100%;";return this.wrapWithAnimation(o.qy`
      <style>
        ${d}
      </style>
      <style>
        .leaflet-container {
          font-family: var(--primary-font-family, inherit);
        }
        .leaflet-popup-content-wrapper {
          background: var(--uc-pane-bg, var(--card-background-color));
          border: var(--uc-pane-border, none);
          box-shadow: var(--uc-pane-shadow, none);
          color: var(--primary-text-color);
        }
        .leaflet-popup-tip {
          background: var(--uc-pane-bg, var(--card-background-color));
        }
        .custom-marker-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        .custom-marker-icon ha-icon {
          --mdi-icon-size: 24px;
        }

        /* Ensure map panes don't overlay HA UI elements */
        .leaflet-pane {
          z-index: 1 !important;
        }
        .leaflet-map-pane {
          z-index: 1 !important;
        }
        .leaflet-tile-pane {
          z-index: 1 !important;
        }
        .leaflet-overlay-pane {
          z-index: 1 !important;
        }
        .leaflet-shadow-pane {
          z-index: 1 !important;
        }
        .leaflet-marker-pane {
          z-index: 1 !important;
        }
        .leaflet-tooltip-pane {
          z-index: 1 !important;
        }
        .leaflet-popup-pane {
          z-index: 1 !important;
        }

        /* Ensure map controls don't overlay HA UI elements (sidebar, menus, etc.) */
        .leaflet-control-container {
          z-index: 1 !important;
        }
        .leaflet-top,
        .leaflet-bottom,
        .leaflet-left,
        .leaflet-right {
          z-index: 1 !important;
        }
        .leaflet-control-zoom {
          z-index: 1 !important;
        }
        .leaflet-control-attribution {
          z-index: 1 !important;
        }
        .leaflet-control {
          z-index: 1 !important;
        }

      /* Slider styles */
        /* (loaded via getStyles()) */
        .custom-marker-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .map-container[uc-map-fs] {
          height: 100% !important;
          padding-bottom: 0 !important;
          border-radius: 0 !important;
        }
        .map-container[uc-map-pseudo-fs] {
          position: fixed !important;
          inset: 0 !important;
          z-index: 9999 !important;
          width: 100vw !important;
          height: 100vh !important;
          height: 100dvh !important;
        }
        .uc-map-fs-btn {
          position: absolute;
          z-index: 2;
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
          background: color-mix(in srgb, var(--uc-pane-bg, var(--card-background-color, #fff)) 88%, transparent);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        }
        .uc-map-fs-btn:focus-visible {
          outline: 2px solid var(--primary-text-color);
          outline-offset: 2px;
        }
      </style>
      <div
        class="map-container ${u}"
        data-uc-role="pane"
        style="${y} ${g} box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: box-shadow 0.2s ease;"
        @mouseenter=${e=>{e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,0.15)"}}
        @mouseleave=${e=>{e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.1)"}}
      >
        <div ${(0,a.K)(e=>{if(!e){const e=this.mapResizeObservers.get(m);return void(e&&(e.disconnect(),this.mapResizeObservers.delete(m)))}const i=e;if(i._ucMapInstance){const e=i._ucMapInstance;return void(i._ucLastUpdate&&JSON.stringify(l)===i._ucLastUpdate||(i._ucLastUpdate=JSON.stringify(l),this.updateExistingMap(e,l,t)))}this.initializingMaps.has(m)||(this.initializingMaps.add(m),requestAnimationFrame(()=>{this.initializeLeafletMap(e,m,l,t),this.initializingMaps.delete(m)}))})} id="${m}" style="${v}"></div>
        ${!0===l.show_fullscreen?o.qy`<button
              type="button"
              class="uc-map-fs-btn"
              aria-label=${(0,r.kg)("editor.map.fullscreen",p,"Full screen")}
              title=${(0,r.kg)("editor.map.fullscreen",p,"Full screen")}
              @mousedown=${e=>e.stopPropagation()}
              @touchstart=${e=>e.stopPropagation()}
              @click=${e=>this._toggleMapFullscreen(e,m,l)}
            >
              <ha-icon icon="mdi:fullscreen"></ha-icon>
            </button>`:""}
      </div>
    `,e,t)}async _toggleMapFullscreen(e,t,i){var o,a,n,s,d,p,c,m;e.stopPropagation(),e.preventDefault();const u=e.currentTarget,g=null==u?void 0:u.closest(".map-container");if(!u||!g)return;const h=g;if(g.hasAttribute("uc-map-fs"))return void(null===(o=h._ucExitFullscreen)||void 0===o||o.call(h));let y=!1;try{if(g.requestFullscreen)await g.requestFullscreen();else{if(!g.webkitRequestFullscreen)throw new Error("no fullscreen");await g.webkitRequestFullscreen()}}catch(e){y=!0,g.setAttribute("uc-map-pseudo-fs",""),document.documentElement.style.setProperty("overflow","hidden")}g.setAttribute("uc-map-fs","");const v=document.querySelector("home-assistant"),x=(null===(n=null===(a=null==v?void 0:v.hass)||void 0===a?void 0:a.locale)||void 0===n?void 0:n.language)||"en",f=u.querySelector("ha-icon"),k=e=>{null==f||f.setAttribute("icon",e?"mdi:fullscreen-exit":"mdi:fullscreen");const t=e?(0,r.kg)("editor.map.exit_fullscreen",x,"Exit full screen"):(0,r.kg)("editor.map.fullscreen",x,"Full screen");u.setAttribute("aria-label",t),u.setAttribute("title",t)};k(!0);const b=this.mapInstances.get(t);let _;b&&(null===(s=b.dragging)||void 0===s||s.enable(),null===(d=b.touchZoom)||void 0===d||d.enable(),null===(p=b.doubleClickZoom)||void 0===p||p.enable(),null===(c=b.scrollWheelZoom)||void 0===c||c.enable(),(null===(m=b.zoomControl)||void 0===m?void 0:m._map)||(_=l.control.zoom({position:"topleft"}),b.addControl(_)));const $=e=>{"Escape"===e.key&&w()},z=()=>{const e=document;document.fullscreenElement||e.webkitFullscreenElement||w()},w=()=>{var e,t,o,a;if(document.removeEventListener("fullscreenchange",z),document.removeEventListener("webkitfullscreenchange",z),window.removeEventListener("keydown",$),delete h._ucExitFullscreen,y)g.removeAttribute("uc-map-pseudo-fs"),document.documentElement.style.removeProperty("overflow");else{const i=document;document.fullscreenElement?null===(e=document.exitFullscreen)||void 0===e||e.call(document).catch(()=>{}):i.webkitFullscreenElement&&(null===(t=i.webkitExitFullscreen)||void 0===t||t.call(i))}g.removeAttribute("uc-map-fs"),k(!1),b&&(_&&b.removeControl(_),i.disable_touch_drag&&(null===(o=b.dragging)||void 0===o||o.disable()),i.disable_zoom_scroll&&(null===(a=b.scrollWheelZoom)||void 0===a||a.disable()))};h._ucExitFullscreen=w,y?window.addEventListener("keydown",$):(document.addEventListener("fullscreenchange",z),document.addEventListener("webkitfullscreenchange",z))}createStreetTileLayer(e){const t={detectRetina:!0,keepBuffer:2,updateWhenZooming:!1,updateWhenIdle:!0,referrerPolicy:"strict-origin-when-cross-origin"},i={cycle:"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",transport:"https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png",humanitarian:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}[e];return i?l.tileLayer(i,Object.assign(Object.assign({},t),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19})):l.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",Object.assign(Object.assign({},t),{attribution:'Tiles &copy; <a href="https://www.esri.com/">Esri</a>',maxZoom:19,maxNativeZoom:18}))}initializeLeafletMap(e,t,i,o){var a,r,n;if(!e)return void this.initializingMaps.delete(t);if(0===e.offsetWidth||0===e.offsetHeight)return this.initializingMaps.delete(t),void setTimeout(()=>{this.mapInstances.has(t)||this.initializingMaps.has(t)||(this.initializingMaps.add(t),this.initializeLeafletMap(e,t,i,o))},300);const s=this.mapInstances.get(t);s&&(s.remove(),this.mapInstances.delete(t));const d=this.mapResizeObservers.get(t);d&&(d.disconnect(),this.mapResizeObservers.delete(t));let p=null!==(a=i.manual_center_latitude)&&void 0!==a?a:40.7128,c=null!==(r=i.manual_center_longitude)&&void 0!==r?r:-74.006;const m=[];for(const e of i.markers||[]){let t,a;if("manual"===e.type)t=e.latitude,a=e.longitude;else if("entity"===e.type&&e.entity){const i=this.extractCoordinates(e.entity,o);i&&(t=i.latitude,a=i.longitude)}void 0!==t&&void 0!==a&&(m.push({lat:t,lon:a,marker:e}),1!==m.length||i.manual_center_latitude||i.manual_center_longitude||(p=t,c=a))}const u=i.zoom||14,g=i.auto_zoom_entities&&m.length>0,h=g?10:u;try{const a=l.map(e,{zoomControl:null===(n=i.show_map_controls)||void 0===n||n,scrollWheelZoom:!i.disable_zoom_scroll,dragging:!i.disable_touch_drag}).setView([p,c],h);this.mapInstances.set(t,a),e._ucMapInstance=a;const r=new ResizeObserver(()=>{this.handleMapResize(t,i,o)});r.observe(e),this.mapResizeObservers.set(t,r),setTimeout(()=>{a.invalidateSize()},100);const{provider:s,mapType:d}=this.getEffectiveMapProvider(i),y=`${s}-${d}`;let v;if("google"===s){const e={roadmap:"https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en",satellite:"https://mt{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}&hl=en",hybrid:"https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&hl=en",terrain:"https://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}&hl=en"};v=l.tileLayer(e[d]||e.roadmap,{attribution:"&copy; Google Maps",maxZoom:20,subdomains:["0","1","2","3"],detectRetina:!0,keepBuffer:2,updateWhenZooming:!1,updateWhenIdle:!0})}else v=this.createStreetTileLayer(d);v.addTo(a),a._mapModuleTileLayer=v,a._mapModuleTileKey=y;const x=[];for(const{lat:e,lon:t,marker:i}of m){const e=this.addLeafletMarker(a,i,o);e&&x.push(e)}if(a._mapModuleMarkers=x,g){const e=this.calculateAutoZoom(i.markers||[],o);e&&a.fitBounds(e.bounds,{padding:[50,50],maxZoom:u,animate:!1})}}catch(e){}}updateAllMapsForModule(e,t,i){const o=`updating_${e}`;if(!this[o]){this[o]=!0;try{const o="map-"+e,a=this.mapInstances.get(o);a&&a._container&&this.updateExistingMap(a,t,i)}catch(e){}finally{setTimeout(()=>{this[o]=!1},500)}}}updateExistingMap(e,t,i){const o=e;if(o._ucUpdating)o._ucUpdatePending=!0;else{o._ucUpdating=!0;try{const a=t.zoom||14;if(t.auto_zoom_entities&&t.markers&&t.markers.length>0){const o=this.calculateAutoZoom(t.markers,i);o&&e.fitBounds(o.bounds,{padding:[50,50],maxZoom:a,animate:!1})}else{let o=null;if(void 0!==t.manual_center_latitude&&void 0!==t.manual_center_longitude)o=l.latLng(t.manual_center_latitude,t.manual_center_longitude);else if(t.markers&&t.markers.length>0)for(const e of t.markers)if("entity"===e.type&&e.entity){const t=this.extractCoordinates(e.entity,i);if(t){o=l.latLng(t.latitude,t.longitude);break}}else if("manual"===e.type&&void 0!==e.latitude&&void 0!==e.longitude){o=l.latLng(e.latitude,e.longitude);break}o?e.setView(o,a,{animate:!1}):e.getZoom()!==a&&e.setZoom(a)}t.show_map_controls?o.zoomControl||e.addControl(l.control.zoom()):o.zoomControl&&e.removeControl(o.zoomControl);const r=o._mapModuleTileLayer,{provider:n,mapType:s}=this.getEffectiveMapProvider(t),d=`${n}-${s}`;if(r&&o._mapModuleTileKey!==d){let t;if("google"===n){const e={roadmap:"https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en",satellite:"https://mt{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}&hl=en",hybrid:"https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&hl=en",terrain:"https://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}&hl=en"};t=l.tileLayer(e[s]||e.roadmap,{attribution:"&copy; Google Maps",maxZoom:20,subdomains:["0","1","2","3"],detectRetina:!0,keepBuffer:2,updateWhenZooming:!1,updateWhenIdle:!0})}else t=this.createStreetTileLayer(s);t.addTo(e),setTimeout(()=>{r&&e.hasLayer(r)&&e.removeLayer(r)},100),o._mapModuleTileLayer=t,o._mapModuleTileKey=d}(o._mapModuleMarkers||[]).forEach(t=>{try{t&&e.hasLayer(t)&&e.removeLayer(t)}catch(e){}}),e.eachLayer(t=>{if(t instanceof l.Marker)try{e.removeLayer(t)}catch(e){}}),o._mapModuleMarkers=[],setTimeout(()=>{const a=[];for(const e of t.markers||[]){let t,o;if("manual"===e.type)t=e.latitude,o=e.longitude;else if("entity"===e.type&&e.entity){const a=this.extractCoordinates(e.entity,i);a&&(t=a.latitude,o=a.longitude)}void 0!==t&&void 0!==o&&a.push({lat:t,lon:o,marker:e})}const r=[];for(const{lat:t,lon:o,marker:n}of a)try{const t=this.addLeafletMarker(e,n,i);t&&r.push(t)}catch(e){}o._mapModuleMarkers=r},100),setTimeout(()=>e.invalidateSize(),50)}catch(e){}finally{setTimeout(()=>{o._ucUpdating=!1,o._ucUpdatePending&&(o._ucUpdatePending=!1,this.updateExistingMap(e,t,i))},0)}}}addLeafletMarker(e,t,i){var o;const a=this.extractCoordinates(t.entity||"",i)||{latitude:t.latitude,longitude:t.longitude};if(!a)return null;if(null==a.latitude||null==a.longitude)return null;const r=l.latLng(a.latitude,a.longitude);let n;if("custom_image"===t.marker_image_type&&t.marker_image){const e=t.icon_size||32,i=Math.max(40,e+8),o=l.divIcon({html:`\n          <div style="\n            position: relative;\n            width: ${i}px;\n            height: ${i}px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n          ">\n            <img \n              src="${t.marker_image}" \n              style="\n                width: ${e}px;\n                height: ${e}px;\n                border-radius: 50%;\n                border: 2px solid white;\n                box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n                object-fit: cover;\n              "\n            />\n          </div>\n        `,iconSize:[i,i],iconAnchor:[i/2,i],popupAnchor:[0,-i],className:"",shadowUrl:void 0});n=l.marker(r,{icon:o})}else if("entity_image"===t.marker_image_type&&t.entity){const e=null==i?void 0:i.states[t.entity],a=null===(o=null==e?void 0:e.attributes)||void 0===o?void 0:o.entity_picture;if(a){const e=t.icon_size||32,i=Math.max(40,e+8),o=l.divIcon({html:`\n            <div style="\n              position: relative;\n              width: ${i}px;\n              height: ${i}px;\n              display: flex;\n              align-items: center;\n              justify-content: center;\n            ">\n              <img \n                src="${a}" \n                style="\n                  width: ${e}px;\n                  height: ${e}px;\n                  border-radius: 50%;\n                  border: 2px solid white;\n                  box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n                  object-fit: cover;\n                "\n              />\n            </div>\n          `,iconSize:[i,i],iconAnchor:[i/2,i],popupAnchor:[0,-i],className:"",shadowUrl:void 0});n=l.marker(r,{icon:o})}else n=l.marker(r)}else{const e=this.createIconMarker(t);n=l.marker(r,{icon:e});"icon"===(t.marker_image_type||"icon")&&t.icon&&""!==t.icon.trim()&&setTimeout(()=>{this._injectHaIconIntoMarker(n,t)},0)}return t.name&&n.bindPopup(t.name),n.addTo(e),this.markersGroup.set(t.id,n),n}_injectHaIconIntoMarker(e,t){const i=e._icon;if(!i)return;const o=i.querySelector("[data-icon-placeholder]");if(!o)return;const a=document.createElement("ha-icon");a.setAttribute("icon",t.icon||"");const r=t.icon_color||"var(--primary-color)",n=2.5*(t.icon_size||20)*.8*.6;a.icon=t.icon||"",a.style.cssText=`\n      color: ${r} !important;\n      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));\n      font-size: ${n}px !important;\n      width: ${n}px !important;\n      height: ${n}px !important;\n      min-width: ${n}px !important;\n      min-height: ${n}px !important;\n      line-height: ${n}px !important;\n      --mdi-icon-size: ${n}px !important;\n      display: block !important;\n    `,o.innerHTML="",o.appendChild(a),this._applyIconSizingWithMutationObserver(a,n,r),this._applyIconSizingWithRetry(a,n,r)}_applyIconSizingWithRetry(e,t,i,o=0){if(o>=15)return void this._applyFallbackIconSizing(e,t,i);const a=30*Math.pow(1.3,o);setTimeout(()=>{if(e.shadowRoot){const o=["ha-svg-icon svg","svg","mdi-icon svg","iron-icon svg",".icon svg",'[part="icon"] svg'];let a=null;for(const t of o)if(a=e.shadowRoot.querySelector(t),a)break;if(a){a.style.cssText=`\n            width: ${t}px !important; \n            height: ${t}px !important;\n            color: ${i} !important;\n            display: block !important;\n            margin: 0 !important;\n            padding: 0 !important;\n          `,a.setAttribute("width",t.toString()),a.setAttribute("height",t.toString()),a.setAttribute("viewBox",a.getAttribute("viewBox")||"0 0 24 24"),a.querySelectorAll("path, circle, rect, polygon, line, polyline").forEach(e=>{e.style.cssText=`\n              fill: ${i} !important;\n              stroke: ${i} !important;\n            `});const e=a.parentElement;e&&(e.style.cssText=`\n              width: ${t}px !important;\n              height: ${t}px !important;\n              display: flex !important;\n              align-items: center !important;\n              justify-content: center !important;\n            `)}else{const o=e.shadowRoot.querySelector("ha-svg-icon");o&&(o.style.cssText=`\n              width: ${t}px !important;\n              height: ${t}px !important;\n              color: ${i} !important;\n              display: block !important;\n            `,o.hasAttribute("size")&&o.setAttribute("size",t.toString()))}}else this._applyIconSizingWithRetry(e,t,i,o+1)},a)}_applyFallbackIconSizing(e,t,i){e.style.cssText=`\n      width: ${t}px !important;\n      height: ${t}px !important;\n      color: ${i} !important;\n      display: block !important;\n      font-size: ${t}px !important;\n    `,e.hasAttribute("size")&&e.setAttribute("size",t.toString())}_applyIconSizingWithMutationObserver(e,t,i){if(e.shadowRoot)return void this._applyIconSizingToElement(e,t,i);const o=new MutationObserver(a=>{a.forEach(a=>{"childList"===a.type&&e.shadowRoot&&(this._applyIconSizingToElement(e,t,i),o.disconnect())})});o.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]}),setTimeout(()=>{o.disconnect()},5e3)}_applyIconSizingToElement(e,t,i){if(!e.shadowRoot)return!1;const o=["ha-svg-icon svg","svg","mdi-icon svg","iron-icon svg",".icon svg",'[part="icon"] svg'];let a=null;for(const t of o)if(a=e.shadowRoot.querySelector(t),a)break;if(a){a.style.cssText=`\n        width: ${t}px !important; \n        height: ${t}px !important;\n        color: ${i} !important;\n        display: block !important;\n        margin: 0 !important;\n        padding: 0 !important;\n      `,a.setAttribute("width",t.toString()),a.setAttribute("height",t.toString()),a.setAttribute("viewBox",a.getAttribute("viewBox")||"0 0 24 24"),a.querySelectorAll("path, circle, rect, polygon, line, polyline").forEach(e=>{e.style.cssText=`\n          fill: ${i} !important;\n          stroke: ${i} !important;\n        `});const e=a.parentElement;return e&&(e.style.cssText=`\n          width: ${t}px !important;\n          height: ${t}px !important;\n          display: flex !important;\n          align-items: center !important;\n          justify-content: center !important;\n        `),!0}const r=e.shadowRoot.querySelector("ha-svg-icon");return!!r&&(r.style.cssText=`\n        width: ${t}px !important;\n        height: ${t}px !important;\n        color: ${i} !important;\n        display: block !important;\n      `,r.hasAttribute("size")&&r.setAttribute("size",t.toString()),!0)}createIconMarker(e){const t=e.icon,i=e.icon_color||"var(--primary-color)",o=2.5*(e.icon_size||20),a=.8*o,r=.6*a,n=o;if(!t||""===t.trim())return l.divIcon({html:`\n          <div style="\n            position: relative;\n            width: ${o}px;\n            height: ${o}px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n          ">\n            <div style="\n              position: absolute;\n              width: ${a}px;\n              height: ${a}px;\n              background: ${i};\n              border-radius: 50% 50% 50% 0;\n              transform: rotate(-45deg);\n              box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n              border: 2px solid white;\n            "></div>\n          </div>\n        `,iconSize:[o,o],iconAnchor:[o/2,n],popupAnchor:[0,-n],className:"",shadowUrl:void 0});const s=`\n        <div style="\n          position: relative;\n          width: ${o}px;\n          height: ${o}px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        ">\n          <div style="\n            position: absolute;\n            width: ${a}px;\n            height: ${a}px;\n            background: white;\n            border-radius: 50% 50% 50% 0;\n            transform: rotate(-45deg);\n            box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n            border: 2px solid ${i};\n          "></div>\n          <div\n            data-icon-placeholder\n            style="\n              position: absolute;\n              top: ${.3*a}px;\n              left: 50%;\n              transform: translateX(-50%);\n              width: ${r}px;\n              height: ${r}px;\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              z-index: 1;\n            "\n          >\n            \x3c!-- ha-icon will be injected here --\x3e\n          </div>\n        </div>\n      `;return l.divIcon({html:s,iconSize:[o,o],iconAnchor:[o/2,n],popupAnchor:[0,-n],className:"",shadowUrl:void 0})}createMarkerPopup(e,t){var i,o;let a=`<div style="padding: 8px;"><strong>${e.name||"Marker"}</strong>`;if("entity"===e.type&&e.entity){const i=t.states[e.entity];i&&(a+=`<br><span style="font-size: 12px;">Entity: ${i.attributes.friendly_name||e.entity}</span>`,a+=`<br><span style="font-size: 12px;">State: ${i.state}</span>`)}else"manual"===e.type&&(a+=`<br><span style="font-size: 12px;">Lat: ${null===(i=e.latitude)||void 0===i?void 0:i.toFixed(6)}</span>`,a+=`<br><span style="font-size: 12px;">Lon: ${null===(o=e.longitude)||void 0===o?void 0:o.toFixed(6)}</span>`);return a+="</div>",a}getCardSize(e){const t=e.map_height||400;return Math.ceil(t/50)}validate(e){const t=[],i=e;return i.markers&&i.markers.length>0&&i.markers.forEach((e,i)=>{"manual"===e.type?(void 0!==e.latitude&&(e.latitude<-90||e.latitude>90)&&t.push(`Marker ${i+1}: Invalid latitude value`),void 0!==e.longitude&&(e.longitude<-180||e.longitude>180)&&t.push(`Marker ${i+1}: Invalid longitude value`)):e.type}),{valid:0===t.length,errors:t}}getStyles(){return n.m.getSliderStyles()}}},2633(e,t,i){i.d(t,["B",0,"***REDACTED***"])}};