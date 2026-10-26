export const __webpack_esm_ids__=[6637];export const __webpack_esm_modules__={9998(e,t,i){i.d(t,{UltraMapModule:()=>p});var a=i(2618),o=i(7610),r=i(6478),n=i(3307),s=(i(7921),i(5014)),l=i(3481),d=i(8125);class p extends n.m{constructor(){super(...arguments),this.mapInstances=new Map,this.initializingMaps=new Set,this.markersGroup=new Map,this.entityStateCache=new Map,this.lastUpdateTime=new Map,this.mapResizeObservers=new Map,this.metadata={type:"map",title:"Map",description:"Interactive map with custom markers and location tracking",author:"WJD Designs",version:"1.0.0",icon:"mdi:map",category:"content",tags:["map","location","tracking","markers","gps"]},this.expandedMarkers=new Set,this.draggedMarkerIndex=null}createDefault(e,t){return{id:e||this.generateId("map"),type:"map",map_provider:"openstreetmap",map_type:"roadmap",zoom:14,show_map_controls:!0,show_fullscreen:!0,disable_zoom_scroll:!1,disable_touch_drag:!1,auto_zoom_entities:!1,markers:[{id:this.generateId("marker"),name:"My Location",type:"manual",latitude:37.2384841,longitude:-115.8250479,icon:"mdi:alien",icon_color:"var(--primary-color)",icon_size:20,marker_image_type:"icon"}],map_height:400,aspect_ratio:"16:9",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderGeneralTab(e,t,i,o){var n,s,l,d;const p=e,c=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",m=[{value:"openstreetmap",label:(0,r.kg)("editor.map.provider.osm",c,"OpenStreetMap (Free)")},{value:"google",label:(0,r.kg)("editor.map.provider.google",c,"Google Maps")}],g=[{value:"roadmap",label:(0,r.kg)("editor.map.type.roadmap",c,"Roadmap")},{value:"satellite",label:(0,r.kg)("editor.map.type.satellite",c,"Satellite")},{value:"hybrid",label:(0,r.kg)("editor.map.type.hybrid",c,"Hybrid")},{value:"terrain",label:(0,r.kg)("editor.map.type.terrain",c,"Terrain")}],u=[{value:"roadmap",label:(0,r.kg)("editor.map.type.osm_standard",c,"Standard")},{value:"cycle",label:(0,r.kg)("editor.map.type.osm_cycle",c,"Cycle Map")},{value:"transport",label:(0,r.kg)("editor.map.type.osm_transport",c,"Transport")},{value:"humanitarian",label:(0,r.kg)("editor.map.type.osm_humanitarian",c,"Humanitarian")}],h="google"===p.map_provider?g:u;return a.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Map Provider Selection -->
        ${this.renderSettingsSection((0,r.kg)("editor.map.provider.title",c,"Map Provider"),(0,r.kg)("editor.map.provider.desc",c,"Choose your map provider"),[{title:(0,r.kg)("editor.map.provider.select",c,"Map Provider"),description:(0,r.kg)("editor.map.provider.select_desc",c,"OpenStreetMap is free and requires no API key. Google Maps offers more features but requires an API key."),hass:t,data:{map_provider:p.map_provider||"openstreetmap"},schema:[this.selectField("map_provider",m)],onChange:e=>{e.detail.value.map_provider!==(p.map_provider||"openstreetmap")&&(o(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))}}])}

        <!-- Google Maps API Key (only for Google Maps) -->
        ${"google"===p.map_provider?a.qy`
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
                <ha-textfield
                  .value=${p.google_api_key||""}
                  placeholder="AIzaSy..."
                  type="password"
                  @input=${e=>{const t=e.target.value;o({google_api_key:t})}}
                  style="width: 100%;"
                >
                  <ha-icon icon="mdi:key" slot="leadingIcon"></ha-icon>
                </ha-textfield>
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
        ${this.renderSettingsSection((0,r.kg)("editor.map.style.title",c,"Map Style"),(0,r.kg)("editor.map.style.desc",c,"Choose the visual style of the map"),[{title:(0,r.kg)("editor.map.style.select",c,"Map Style"),description:(0,r.kg)("editor.map.style.select_desc",c,"google"===p.map_provider?"Choose the visual style for Google Maps":"OpenStreetMap uses standard roadmap style"),hass:t,data:{map_type:p.map_type||"roadmap"},schema:[this.selectField("map_type",h)],onChange:e=>{e.detail.value.map_type!==(p.map_type||"roadmap")&&(o(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))}}])}

        <!-- Zoom Settings -->
        ${this.renderSettingsSection((0,r.kg)("editor.map.zoom.title",c,"Zoom Settings"),(0,r.kg)("editor.map.zoom.desc",c,"Control map zoom level and auto-fit behavior"),[{title:(0,r.kg)("editor.map.zoom.level",c,"Zoom Level"),description:(0,r.kg)("editor.map.zoom.level_desc",c,"Manual zoom level (1-20). Lower values show more area."),hass:t,data:{zoom:p.zoom||14},schema:[{name:"zoom",label:`${(0,r.kg)("editor.map.zoom.level",c,"Zoom Level")}: ${p.zoom||14}`,selector:{number:{min:1,max:20,step:1,mode:"slider"}}}],onChange:e=>{o({zoom:e.detail.value.zoom}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.map.zoom.auto",c,"Auto-Zoom to Fit Entities"),description:(0,r.kg)("editor.map.zoom.auto_desc",c,"Automatically calculate zoom and center to show all entity markers. Manual zoom acts as a maximum zoom level (you can zoom out further for context)."),hass:t,data:{auto_zoom_entities:p.auto_zoom_entities||!1},schema:[this.booleanField("auto_zoom_entities")],onChange:e=>{o({auto_zoom_entities:e.detail.value.auto_zoom_entities}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        <!-- Manual Center Coordinates -->
        ${this.renderSettingsSection((0,r.kg)("editor.map.center.title",c,"Map Center"),(0,r.kg)("editor.map.center.desc",c,"Manually set the map center coordinates. Leave empty to use first marker or auto-zoom."),[{title:(0,r.kg)("editor.map.center.latitude",c,"Center Latitude"),description:(0,r.kg)("editor.map.center.latitude_desc",c,"Latitude coordinate for map center (-90 to 90)"),hass:t,data:{manual_center_latitude:null!==(s=p.manual_center_latitude)&&void 0!==s?s:null},schema:[{name:"manual_center_latitude",label:(0,r.kg)("editor.map.center.latitude",c,"Center Latitude"),selector:{number:{min:-90,max:90,step:1e-6,mode:"box"}}}],onChange:e=>{const t=e.detail.value.manual_center_latitude;o({manual_center_latitude:t||void 0}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.map.center.longitude",c,"Center Longitude"),description:(0,r.kg)("editor.map.center.longitude_desc",c,"Longitude coordinate for map center (-180 to 180)"),hass:t,data:{manual_center_longitude:null!==(l=p.manual_center_longitude)&&void 0!==l?l:null},schema:[{name:"manual_center_longitude",label:(0,r.kg)("editor.map.center.longitude",c,"Center Longitude"),selector:{number:{min:-180,max:180,step:1e-6,mode:"box"}}}],onChange:e=>{const t=e.detail.value.manual_center_longitude;o({manual_center_longitude:t||void 0}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        <!-- Map Controls -->
        ${this.renderSettingsSection((0,r.kg)("editor.map.controls.title",c,"Map Controls"),(0,r.kg)("editor.map.controls.desc",c,"Configure map interaction controls"),[{title:(0,r.kg)("editor.map.controls.show",c,"Show Map Controls"),description:(0,r.kg)("editor.map.controls.show_desc",c,"Display zoom, pan, and other map controls"),hass:t,data:{show_map_controls:null===(d=p.show_map_controls)||void 0===d||d},schema:[this.booleanField("show_map_controls")],onChange:e=>o({show_map_controls:e.detail.value.show_map_controls})},{title:(0,r.kg)("editor.map.controls.show_fullscreen",c,"Full Screen Button"),description:(0,r.kg)("editor.map.controls.show_fullscreen_desc",c,"A button that opens the map full screen, with pan and zoom."),hass:t,data:{show_fullscreen:!0===p.show_fullscreen},schema:[this.booleanField("show_fullscreen")],onChange:e=>o({show_fullscreen:e.detail.value.show_fullscreen})},{title:(0,r.kg)("editor.map.controls.disable_scroll",c,"Disable Zoom on Mouse Wheel Scroll"),description:(0,r.kg)("editor.map.controls.disable_scroll_desc",c,"Prevent accidental zooming when scrolling the page"),hass:t,data:{disable_zoom_scroll:p.disable_zoom_scroll||!1},schema:[this.booleanField("disable_zoom_scroll")],onChange:e=>o({disable_zoom_scroll:e.detail.value.disable_zoom_scroll})},{title:(0,r.kg)("editor.map.controls.disable_drag",c,"Disable Dragging on Touch Screens"),description:(0,r.kg)("editor.map.controls.disable_drag_desc",c,"Prevent map panning on mobile/touch devices"),hass:t,data:{disable_touch_drag:p.disable_touch_drag||!1},schema:[this.booleanField("disable_touch_drag")],onChange:e=>o({disable_touch_drag:e.detail.value.disable_touch_drag})}])}

        <!-- Map Dimensions -->
        ${this.renderSettingsSection((0,r.kg)("editor.map.dimensions.title",c,"Map Dimensions"),(0,r.kg)("editor.map.dimensions.desc",c,"Control map size and aspect ratio"),[{title:(0,r.kg)("editor.map.dimensions.aspect_ratio",c,"Aspect Ratio"),description:(0,r.kg)("editor.map.dimensions.aspect_ratio_desc",c,"Choose preset aspect ratio or use custom height"),hass:t,data:{aspect_ratio:p.aspect_ratio||"16:9"},schema:[this.selectField("aspect_ratio",[{value:"16:9",label:"16:9 (Widescreen)"},{value:"4:3",label:"4:3 (Standard)"},{value:"1:1",label:"1:1 (Square)"},{value:"custom",label:"Custom (Use Height)"}])],onChange:e=>{e.detail.value.aspect_ratio!==(p.aspect_ratio||"16:9")&&(o(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))}},..."custom"===p.aspect_ratio?[{title:(0,r.kg)("editor.map.dimensions.height",c,"Map Height"),description:(0,r.kg)("editor.map.dimensions.height_desc",c,"Custom height in pixels"),hass:t,data:{map_height:p.map_height||400},schema:[{name:"map_height",label:(0,r.kg)("editor.map.dimensions.height",c,"Map Height"),selector:{number:{min:100,max:1e3,step:10,mode:"box",unit_of_measurement:"px"}}}],onChange:e=>o({map_height:e.detail.value.map_height})}]:[]])}

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
              <mwc-button
                raised
                @click=${()=>{const e={id:this.generateId("marker"),name:"New Marker",type:"manual",latitude:37.2384841,longitude:-115.8250479,icon:"mdi:alien",icon_color:"var(--primary-color)",icon_size:20,marker_image_type:"icon"},t=[...p.markers||[],e];o({markers:t})}}
                style="--mdc-theme-primary: var(--primary-color);"
              >
                <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
                ${(0,r.kg)("editor.map.markers.add",c,"Add Marker")}
              </mwc-button>
            </div>
          </div>

          ${0===(p.markers||[]).length?a.qy`
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
              `:a.qy`
                <div class="markers-list">
                  ${(p.markers||[]).map((e,a)=>this.renderMarkerEditor(e,a,p,t,o,i))}
                </div>
              `}
        </div>
      </div>
    `}renderMarkerEditor(e,t,i,o,n,s){var l;const d=(null===(l=null==o?void 0:o.locale)||void 0===l?void 0:l.language)||"en",p=()=>{const t=Object.assign(Object.assign({},e),{id:this.generateId("marker"),name:`${e.name} Copy`}),a=[...i.markers||[],t];n({markers:a})},c=(e,t)=>{const a=[...i.markers||[]],[o]=a.splice(e,1);a.splice(t,0,o),n({markers:a})};return(0,r.kg)("editor.map.marker.type.manual",d,"Manual Position"),(0,r.kg)("editor.map.marker.type.entity",d,"Entity Tracker"),(0,r.kg)("editor.map.marker.display.icon",d,"Icon"),(0,r.kg)("editor.map.marker.display.custom_image",d,"Custom Image"),(0,r.kg)("editor.map.marker.display.entity_image",d,"Entity Image"),a.qy`
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
            ${"entity"===e.type?a.qy`<ha-icon
                  icon="mdi:map-marker-account"
                  style="color: var(--primary-color);"
                ></ha-icon>`:a.qy`<ha-icon
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
              @click=${e=>{e.stopPropagation();const t=e.target,i=t.closest(".marker-item"),a=null==i?void 0:i.querySelector(".marker-content");if(i&&a&&t){const e=i.getAttribute("data-marker-id")||"";this.expandedMarkers.has(e)?(this.expandedMarkers.delete(e),a.style.display="none",t.style.transform="rotate(0deg)"):(this.expandedMarkers.add(e),a.style.display="block",t.style.transform="rotate(180deg)")}}}
            ></ha-icon>
          </div>
        </div>

        <div
          class="marker-content"
          style="padding: 16px; display: ${this.expandedMarkers.has(e.id)?"block":"none"};"
        >
          ${this.renderMarkerConfiguration(e,o,a=>{if(!Object.entries(a).some(([t,i])=>{const a=e[t];return!(a===i||"number"==typeof a&&"number"==typeof i&&(Number.isNaN(a)&&Number.isNaN(i)||a===i))}))return;const o=[...i.markers||[]];o[t]=Object.assign(Object.assign({},e),a);const r=()=>{n({markers:o}),setTimeout(()=>this.triggerPreviewUpdate(),50)};1===Object.keys(a).length&&Object.prototype.hasOwnProperty.call(a,"icon_size")?setTimeout(r,50):r()},i,s)}
        </div>
      </div>
    `}renderMarkerConfiguration(e,t,i,o,n){var s,l,d,p;const c=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",m=[{value:"manual",label:(0,r.kg)("editor.map.marker.type.manual",c,"Manual Position")},{value:"entity",label:(0,r.kg)("editor.map.marker.type.entity",c,"Entity Tracker")}],g=[{value:"icon",label:(0,r.kg)("editor.map.marker.display.icon",c,"Icon")},{value:"custom_image",label:(0,r.kg)("editor.map.marker.display.custom_image",c,"Custom Image")},{value:"entity_image",label:(0,r.kg)("editor.map.marker.display.entity_image",c,"Entity Image")}];return a.qy`
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
        <ha-textfield
          .value=${e.name||""}
          placeholder=${(0,r.kg)("editor.map.marker.name_placeholder",c,"Enter marker name")}
          @input=${e=>{var t;const a=e.target,o=(null===(t=a.shadowRoot)||void 0===t?void 0:t.querySelector("input"))||a,r=a.value,n=o.selectionStart,s=o.selectionEnd;i({name:r}),requestAnimationFrame(()=>{o&&"number"==typeof n&&(a.value=r,o.value=r,o.setSelectionRange(n,s||n))})}}
          style="width: 100%;"
        ></ha-textfield>
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
        ${this.renderUcForm(t,{type:e.type||"manual"},[this.selectField("type",m)],t=>{const a=t.detail.value.type,o=e.type||"manual";a&&a!==o&&i({type:a})},!1)}
      </div>

      <!-- Manual Position Fields -->
      ${"manual"===e.type?a.qy`
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
                <ha-textfield
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
                </ha-textfield>
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
                <ha-textfield
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
                </ha-textfield>
                <div
                  style="font-size: 11px; color: var(--secondary-text-color); margin-top: 4px; opacity: 0.7;"
                >
                  ${(0,r.kg)("editor.map.marker.longitude_range",c,"Range: -180 to 180")}
                </div>
              </div>
            </div>
          `:""}

      <!-- Entity Tracker Field -->
      ${"entity"===e.type?a.qy`
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
          ${this.renderUcForm(t,{marker_image_type:e.marker_image_type||"icon"},[this.selectField("marker_image_type",g)],e=>i({marker_image_type:e.detail.value.marker_image_type}),!1)}
        </div>

        <!-- Icon Settings -->
        ${"icon"!==e.marker_image_type&&e.marker_image_type?"":a.qy`
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
        ${"custom_image"===e.marker_image_type?a.qy`
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
                <ha-textfield
                  .value=${e.marker_image||""}
                  placeholder="https://example.com/marker.png"
                  @input=${e=>{const t=e.target.value;i({marker_image:t})}}
                  style="width: 100%; margin-bottom: 12px;"
                >
                  <ha-icon icon="mdi:image" slot="leadingIcon"></ha-icon>
                </ha-textfield>

                <div>
                  ${this.renderSliderField((0,r.kg)("editor.map.marker.image_size",c,"Image Size"),(0,r.kg)("editor.map.marker.image_size_range",c,"Range: 8 to 128 pixels"),e.icon_size||32,32,8,128,1,e=>{i({icon_size:e})},"px")}
                </div>
              </div>
            `:""}

        <!-- Entity Image Settings -->
        ${"entity_image"===e.marker_image_type?a.qy`
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
    `}handleMarkerDragStart(e,t){this.draggedMarkerIndex=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/html","")),e.currentTarget.style.opacity="0.5"}handleMarkerDragEnd(e){e.currentTarget.style.opacity="1",this.draggedMarkerIndex=null,document.querySelectorAll(".marker-item").forEach(e=>{e.style.borderTop="",e.style.borderBottom=""})}handleMarkerDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move")}handleMarkerDragEnter(e){const t=e.currentTarget.closest(".marker-item");if(t&&null!==this.draggedMarkerIndex){const e=parseInt(t.getAttribute("data-marker-index")||"0");e!==this.draggedMarkerIndex&&(t.style.borderTop=e<this.draggedMarkerIndex?"2px solid var(--primary-color)":"",t.style.borderBottom=e>this.draggedMarkerIndex?"2px solid var(--primary-color)":"")}}handleMarkerDragLeave(e){const t=e.currentTarget.closest(".marker-item");t&&(t.style.borderTop="",t.style.borderBottom="")}handleMarkerDrop(e,t,i){e.preventDefault(),e.stopPropagation();const a=e.currentTarget.closest(".marker-item");a&&(a.style.borderTop="",a.style.borderBottom=""),null!==this.draggedMarkerIndex&&this.draggedMarkerIndex!==t&&i(this.draggedMarkerIndex,t),this.draggedMarkerIndex=null}toggleMarkerHeader(e){const t=e.currentTarget,i=t.closest(".marker-item"),a=null==i?void 0:i.querySelector(".marker-content"),o=t.querySelector(".expand-caret");if(i&&a&&o){const e=i.getAttribute("data-marker-id")||"";this.expandedMarkers.has(e)?(this.expandedMarkers.delete(e),a.style.display="none",o.style.transform="rotate(0deg)"):(this.expandedMarkers.add(e),a.style.display="block",o.style.transform="rotate(180deg)")}}getEffectiveMapProvider(e){const t=e.map_provider||"openstreetmap",i=e.map_type||"roadmap";if("google"!==t)return{provider:t,mapType:i};const a=(e.google_api_key||"").trim();return a===s.B||a.toLowerCase().startsWith("***")?{provider:"openstreetmap",mapType:"roadmap"}:{provider:"google",mapType:i}}extractCoordinates(e,t){const i=t.states[e];if(!i)return null;const a=i.attributes;let o,r;if(void 0!==a.latitude&&void 0!==a.longitude)o=a.latitude,r=a.longitude;else if(void 0!==a.Location)if(Array.isArray(a.Location)){if(a.Location.length>=2){const e=parseFloat(a.Location[0]),t=parseFloat(a.Location[1]);isNaN(e)||isNaN(t)||(o=e,r=t)}}else if("string"==typeof a.Location){const e=a.Location.split(",").map(e=>parseFloat(e.trim()));2!==e.length||isNaN(e[0])||isNaN(e[1])||(o=e[0],r=e[1])}return void 0!==o&&void 0!==r?{latitude:o,longitude:r}:null}_trackEntityChanges(e,t,i){var a;const o=(null===(a=e.markers)||void 0===a?void 0:a.filter(e=>"entity"===e.type&&e.entity))||[];if(0===o.length)return;let r=!1;const n=Date.now();if(!(n-(this.lastUpdateTime.get(t)||0)<2e3)){for(const e of o){if(!e.entity)continue;if(!(null==i?void 0:i.states[e.entity]))continue;const a=this.extractCoordinates(e.entity,i),o=a?`${a.latitude},${a.longitude}`:"unknown",n=`${t}_${e.entity}`;this.entityStateCache.get(n)!==o&&(this.entityStateCache.set(n,o),r=!0)}if(r){this.lastUpdateTime.set(t,n);const a=this.mapInstances.get(t);a&&a._container&&this.updateExistingMap(a,e,i)}}}calculateAutoZoom(e,t){const i=[];for(const a of e)if("entity"===a.type&&a.entity){const e=this.extractCoordinates(a.entity,t);e&&i.push(e)}return 0===i.length?null:{bounds:l.latLngBounds(i.map(e=>l.latLng(e.latitude,e.longitude)))}}handleMapResize(e,t,i){const a=this.mapInstances.get(e);if(a&&a._container&&(a.invalidateSize(),t.auto_zoom_entities&&t.markers&&t.markers.length>0)){const e=this.calculateAutoZoom(t.markers,i);e&&a.fitBounds(e.bounds,{padding:[50,50],maxZoom:t.zoom||14,animate:!0})}}renderPreview(e,t,i,n){var s;const l=e,p=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",c=n?`-${n}`:"",m=`map-${l.id}${c}`,g=this.getHoverEffectClass(e),u=this.buildStyleString(this.buildDesignStyles(e,t));n&&"dashboard"!==n||this._trackEntityChanges(l,m,t);let h=l.map_height||400;l.aspect_ratio&&"custom"!==l.aspect_ratio&&(h=400);const y=l.aspect_ratio&&"custom"!==l.aspect_ratio?`position: relative; width: 100%; height: 0; padding-bottom: ${{"16:9":"56.25%","4:3":"75%","1:1":"100%"}[l.aspect_ratio]}; overflow: hidden; border-radius: var(--uc-r-8, 8px);`:`width: 100%; height: ${h}px; position: relative; overflow: hidden; border-radius: var(--uc-r-8, 8px);`,v=l.aspect_ratio&&"custom"!==l.aspect_ratio?"position: absolute; top: 0; left: 0; width: 100%; height: 100%;":"width: 100%; height: 100%;";return this.wrapWithAnimation(a.qy`
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
        class="map-container ${g}"
        data-uc-role="pane"
        style="${y} ${u} box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: box-shadow 0.2s ease;"
        @mouseenter=${e=>{e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,0.15)"}}
        @mouseleave=${e=>{e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.1)"}}
      >
        <div ${(0,o.K)(e=>{if(!e){const e=this.mapResizeObservers.get(m);return void(e&&(e.disconnect(),this.mapResizeObservers.delete(m)))}const i=e;if(i._ucMapInstance){const e=i._ucMapInstance;return void(i._ucLastUpdate&&JSON.stringify(l)===i._ucLastUpdate||(i._ucLastUpdate=JSON.stringify(l),this.updateExistingMap(e,l,t)))}this.initializingMaps.has(m)||(this.initializingMaps.add(m),requestAnimationFrame(()=>{this.initializeLeafletMap(e,m,l,t),this.initializingMaps.delete(m)}))})} id="${m}" style="${v}"></div>
        ${!0===l.show_fullscreen?a.qy`<button
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
    `,e,t)}async _toggleMapFullscreen(e,t,i){var a,o,n,s,d,p,c,m;e.stopPropagation(),e.preventDefault();const g=e.currentTarget,u=null==g?void 0:g.closest(".map-container");if(!g||!u)return;const h=u;if(u.hasAttribute("uc-map-fs"))return void(null===(a=h._ucExitFullscreen)||void 0===a||a.call(h));let y=!1;try{if(u.requestFullscreen)await u.requestFullscreen();else{if(!u.webkitRequestFullscreen)throw new Error("no fullscreen");await u.webkitRequestFullscreen()}}catch(e){y=!0,u.setAttribute("uc-map-pseudo-fs",""),document.documentElement.style.setProperty("overflow","hidden")}u.setAttribute("uc-map-fs","");const v=document.querySelector("home-assistant"),k=(null===(n=null===(o=null==v?void 0:v.hass)||void 0===o?void 0:o.locale)||void 0===n?void 0:n.language)||"en",_=g.querySelector("ha-icon"),x=e=>{null==_||_.setAttribute("icon",e?"mdi:fullscreen-exit":"mdi:fullscreen");const t=e?(0,r.kg)("editor.map.exit_fullscreen",k,"Exit full screen"):(0,r.kg)("editor.map.fullscreen",k,"Full screen");g.setAttribute("aria-label",t),g.setAttribute("title",t)};x(!0);const f=this.mapInstances.get(t);let b;f&&(null===(s=f.dragging)||void 0===s||s.enable(),null===(d=f.touchZoom)||void 0===d||d.enable(),null===(p=f.doubleClickZoom)||void 0===p||p.enable(),null===(c=f.scrollWheelZoom)||void 0===c||c.enable(),(null===(m=f.zoomControl)||void 0===m?void 0:m._map)||(b=l.control.zoom({position:"topleft"}),f.addControl(b)));const z=e=>{"Escape"===e.key&&$()},w=()=>{const e=document;document.fullscreenElement||e.webkitFullscreenElement||$()},$=()=>{var e,t,a,o;if(document.removeEventListener("fullscreenchange",w),document.removeEventListener("webkitfullscreenchange",w),window.removeEventListener("keydown",z),delete h._ucExitFullscreen,y)u.removeAttribute("uc-map-pseudo-fs"),document.documentElement.style.removeProperty("overflow");else{const i=document;document.fullscreenElement?null===(e=document.exitFullscreen)||void 0===e||e.call(document).catch(()=>{}):i.webkitFullscreenElement&&(null===(t=i.webkitExitFullscreen)||void 0===t||t.call(i))}u.removeAttribute("uc-map-fs"),x(!1),f&&(b&&f.removeControl(b),i.disable_touch_drag&&(null===(a=f.dragging)||void 0===a||a.disable()),i.disable_zoom_scroll&&(null===(o=f.scrollWheelZoom)||void 0===o||o.disable()))};h._ucExitFullscreen=$,y?window.addEventListener("keydown",z):(document.addEventListener("fullscreenchange",w),document.addEventListener("webkitfullscreenchange",w))}createStreetTileLayer(e){const t={detectRetina:!0,keepBuffer:2,updateWhenZooming:!1,updateWhenIdle:!0,referrerPolicy:"strict-origin-when-cross-origin"},i={cycle:"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",transport:"https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png",humanitarian:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"}[e];return i?l.tileLayer(i,Object.assign(Object.assign({},t),{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19})):l.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",Object.assign(Object.assign({},t),{attribution:'Tiles &copy; <a href="https://www.esri.com/">Esri</a>',maxZoom:19,maxNativeZoom:18}))}initializeLeafletMap(e,t,i,a){var o,r,n;if(!e)return void this.initializingMaps.delete(t);if(0===e.offsetWidth||0===e.offsetHeight)return this.initializingMaps.delete(t),void setTimeout(()=>{this.mapInstances.has(t)||this.initializingMaps.has(t)||(this.initializingMaps.add(t),this.initializeLeafletMap(e,t,i,a))},300);const s=this.mapInstances.get(t);s&&(s.remove(),this.mapInstances.delete(t));const d=this.mapResizeObservers.get(t);d&&(d.disconnect(),this.mapResizeObservers.delete(t));let p=null!==(o=i.manual_center_latitude)&&void 0!==o?o:40.7128,c=null!==(r=i.manual_center_longitude)&&void 0!==r?r:-74.006;const m=[];for(const e of i.markers||[]){let t,o;if("manual"===e.type)t=e.latitude,o=e.longitude;else if("entity"===e.type&&e.entity){const i=this.extractCoordinates(e.entity,a);i&&(t=i.latitude,o=i.longitude)}void 0!==t&&void 0!==o&&(m.push({lat:t,lon:o,marker:e}),1!==m.length||i.manual_center_latitude||i.manual_center_longitude||(p=t,c=o))}const g=i.zoom||14,u=i.auto_zoom_entities&&m.length>0,h=u?10:g;try{const o=l.map(e,{zoomControl:null===(n=i.show_map_controls)||void 0===n||n,scrollWheelZoom:!i.disable_zoom_scroll,dragging:!i.disable_touch_drag}).setView([p,c],h);this.mapInstances.set(t,o),e._ucMapInstance=o;const r=new ResizeObserver(()=>{this.handleMapResize(t,i,a)});r.observe(e),this.mapResizeObservers.set(t,r),setTimeout(()=>{o.invalidateSize()},100);const{provider:s,mapType:d}=this.getEffectiveMapProvider(i),y=`${s}-${d}`;let v;if("google"===s){const e={roadmap:"https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en",satellite:"https://mt{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}&hl=en",hybrid:"https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&hl=en",terrain:"https://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}&hl=en"};v=l.tileLayer(e[d]||e.roadmap,{attribution:"&copy; Google Maps",maxZoom:20,subdomains:["0","1","2","3"],detectRetina:!0,keepBuffer:2,updateWhenZooming:!1,updateWhenIdle:!0})}else v=this.createStreetTileLayer(d);v.addTo(o),o._mapModuleTileLayer=v,o._mapModuleTileKey=y;const k=[];for(const{lat:e,lon:t,marker:i}of m){const e=this.addLeafletMarker(o,i,a);e&&k.push(e)}if(o._mapModuleMarkers=k,u){const e=this.calculateAutoZoom(i.markers||[],a);e&&o.fitBounds(e.bounds,{padding:[50,50],maxZoom:g,animate:!1})}}catch(e){}}updateAllMapsForModule(e,t,i){const a=`updating_${e}`;if(!this[a]){this[a]=!0;try{const a="map-"+e,o=this.mapInstances.get(a);o&&o._container&&this.updateExistingMap(o,t,i)}catch(e){}finally{setTimeout(()=>{this[a]=!1},500)}}}updateExistingMap(e,t,i){const a=e;if(a._ucUpdating)a._ucUpdatePending=!0;else{a._ucUpdating=!0;try{const o=t.zoom||14;if(t.auto_zoom_entities&&t.markers&&t.markers.length>0){const a=this.calculateAutoZoom(t.markers,i);a&&e.fitBounds(a.bounds,{padding:[50,50],maxZoom:o,animate:!1})}else{let a=null;if(void 0!==t.manual_center_latitude&&void 0!==t.manual_center_longitude)a=l.latLng(t.manual_center_latitude,t.manual_center_longitude);else if(t.markers&&t.markers.length>0)for(const e of t.markers)if("entity"===e.type&&e.entity){const t=this.extractCoordinates(e.entity,i);if(t){a=l.latLng(t.latitude,t.longitude);break}}else if("manual"===e.type&&void 0!==e.latitude&&void 0!==e.longitude){a=l.latLng(e.latitude,e.longitude);break}a?e.setView(a,o,{animate:!1}):e.getZoom()!==o&&e.setZoom(o)}t.show_map_controls?a.zoomControl||e.addControl(l.control.zoom()):a.zoomControl&&e.removeControl(a.zoomControl);const r=a._mapModuleTileLayer,{provider:n,mapType:s}=this.getEffectiveMapProvider(t),d=`${n}-${s}`;if(r&&a._mapModuleTileKey!==d){let t;if("google"===n){const e={roadmap:"https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en",satellite:"https://mt{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}&hl=en",hybrid:"https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&hl=en",terrain:"https://mt{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}&hl=en"};t=l.tileLayer(e[s]||e.roadmap,{attribution:"&copy; Google Maps",maxZoom:20,subdomains:["0","1","2","3"],detectRetina:!0,keepBuffer:2,updateWhenZooming:!1,updateWhenIdle:!0})}else t=this.createStreetTileLayer(s);t.addTo(e),setTimeout(()=>{r&&e.hasLayer(r)&&e.removeLayer(r)},100),a._mapModuleTileLayer=t,a._mapModuleTileKey=d}(a._mapModuleMarkers||[]).forEach(t=>{try{t&&e.hasLayer(t)&&e.removeLayer(t)}catch(e){}}),e.eachLayer(t=>{if(t instanceof l.Marker)try{e.removeLayer(t)}catch(e){}}),a._mapModuleMarkers=[],setTimeout(()=>{const o=[];for(const e of t.markers||[]){let t,a;if("manual"===e.type)t=e.latitude,a=e.longitude;else if("entity"===e.type&&e.entity){const o=this.extractCoordinates(e.entity,i);o&&(t=o.latitude,a=o.longitude)}void 0!==t&&void 0!==a&&o.push({lat:t,lon:a,marker:e})}const r=[];for(const{lat:t,lon:a,marker:n}of o)try{const t=this.addLeafletMarker(e,n,i);t&&r.push(t)}catch(e){}a._mapModuleMarkers=r},100),setTimeout(()=>e.invalidateSize(),50)}catch(e){}finally{setTimeout(()=>{a._ucUpdating=!1,a._ucUpdatePending&&(a._ucUpdatePending=!1,this.updateExistingMap(e,t,i))},0)}}}addLeafletMarker(e,t,i){var a;const o=this.extractCoordinates(t.entity||"",i)||{latitude:t.latitude,longitude:t.longitude};if(!o)return null;if(null==o.latitude||null==o.longitude)return null;const r=l.latLng(o.latitude,o.longitude);let n;if("custom_image"===t.marker_image_type&&t.marker_image){const e=t.icon_size||32,i=Math.max(40,e+8),a=l.divIcon({html:`\n          <div style="\n            position: relative;\n            width: ${i}px;\n            height: ${i}px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n          ">\n            <img \n              src="${t.marker_image}" \n              style="\n                width: ${e}px;\n                height: ${e}px;\n                border-radius: 50%;\n                border: 2px solid white;\n                box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n                object-fit: cover;\n              "\n            />\n          </div>\n        `,iconSize:[i,i],iconAnchor:[i/2,i],popupAnchor:[0,-i],className:"",shadowUrl:void 0});n=l.marker(r,{icon:a})}else if("entity_image"===t.marker_image_type&&t.entity){const e=null==i?void 0:i.states[t.entity],o=null===(a=null==e?void 0:e.attributes)||void 0===a?void 0:a.entity_picture;if(o){const e=t.icon_size||32,i=Math.max(40,e+8),a=l.divIcon({html:`\n            <div style="\n              position: relative;\n              width: ${i}px;\n              height: ${i}px;\n              display: flex;\n              align-items: center;\n              justify-content: center;\n            ">\n              <img \n                src="${o}" \n                style="\n                  width: ${e}px;\n                  height: ${e}px;\n                  border-radius: 50%;\n                  border: 2px solid white;\n                  box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n                  object-fit: cover;\n                "\n              />\n            </div>\n          `,iconSize:[i,i],iconAnchor:[i/2,i],popupAnchor:[0,-i],className:"",shadowUrl:void 0});n=l.marker(r,{icon:a})}else n=l.marker(r)}else{const e=this.createIconMarker(t);n=l.marker(r,{icon:e});"icon"===(t.marker_image_type||"icon")&&t.icon&&""!==t.icon.trim()&&setTimeout(()=>{this._injectHaIconIntoMarker(n,t)},0)}return t.name&&n.bindPopup(t.name),n.addTo(e),this.markersGroup.set(t.id,n),n}_injectHaIconIntoMarker(e,t){const i=e._icon;if(!i)return;const a=i.querySelector("[data-icon-placeholder]");if(!a)return;const o=document.createElement("ha-icon");o.setAttribute("icon",t.icon||"");const r=t.icon_color||"var(--primary-color)",n=2.5*(t.icon_size||20)*.8*.6;o.icon=t.icon||"",o.style.cssText=`\n      color: ${r} !important;\n      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));\n      font-size: ${n}px !important;\n      width: ${n}px !important;\n      height: ${n}px !important;\n      min-width: ${n}px !important;\n      min-height: ${n}px !important;\n      line-height: ${n}px !important;\n      --mdi-icon-size: ${n}px !important;\n      display: block !important;\n    `,a.innerHTML="",a.appendChild(o),this._applyIconSizingWithMutationObserver(o,n,r),this._applyIconSizingWithRetry(o,n,r)}_applyIconSizingWithRetry(e,t,i,a=0){if(a>=15)return void this._applyFallbackIconSizing(e,t,i);const o=30*Math.pow(1.3,a);setTimeout(()=>{if(e.shadowRoot){const a=["ha-svg-icon svg","svg","mdi-icon svg","iron-icon svg",".icon svg",'[part="icon"] svg'];let o=null;for(const t of a)if(o=e.shadowRoot.querySelector(t),o)break;if(o){o.style.cssText=`\n            width: ${t}px !important; \n            height: ${t}px !important;\n            color: ${i} !important;\n            display: block !important;\n            margin: 0 !important;\n            padding: 0 !important;\n          `,o.setAttribute("width",t.toString()),o.setAttribute("height",t.toString()),o.setAttribute("viewBox",o.getAttribute("viewBox")||"0 0 24 24"),o.querySelectorAll("path, circle, rect, polygon, line, polyline").forEach(e=>{e.style.cssText=`\n              fill: ${i} !important;\n              stroke: ${i} !important;\n            `});const e=o.parentElement;e&&(e.style.cssText=`\n              width: ${t}px !important;\n              height: ${t}px !important;\n              display: flex !important;\n              align-items: center !important;\n              justify-content: center !important;\n            `)}else{const a=e.shadowRoot.querySelector("ha-svg-icon");a&&(a.style.cssText=`\n              width: ${t}px !important;\n              height: ${t}px !important;\n              color: ${i} !important;\n              display: block !important;\n            `,a.hasAttribute("size")&&a.setAttribute("size",t.toString()))}}else this._applyIconSizingWithRetry(e,t,i,a+1)},o)}_applyFallbackIconSizing(e,t,i){e.style.cssText=`\n      width: ${t}px !important;\n      height: ${t}px !important;\n      color: ${i} !important;\n      display: block !important;\n      font-size: ${t}px !important;\n    `,e.hasAttribute("size")&&e.setAttribute("size",t.toString())}_applyIconSizingWithMutationObserver(e,t,i){if(e.shadowRoot)return void this._applyIconSizingToElement(e,t,i);const a=new MutationObserver(o=>{o.forEach(o=>{"childList"===o.type&&e.shadowRoot&&(this._applyIconSizingToElement(e,t,i),a.disconnect())})});a.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style"]}),setTimeout(()=>{a.disconnect()},5e3)}_applyIconSizingToElement(e,t,i){if(!e.shadowRoot)return!1;const a=["ha-svg-icon svg","svg","mdi-icon svg","iron-icon svg",".icon svg",'[part="icon"] svg'];let o=null;for(const t of a)if(o=e.shadowRoot.querySelector(t),o)break;if(o){o.style.cssText=`\n        width: ${t}px !important; \n        height: ${t}px !important;\n        color: ${i} !important;\n        display: block !important;\n        margin: 0 !important;\n        padding: 0 !important;\n      `,o.setAttribute("width",t.toString()),o.setAttribute("height",t.toString()),o.setAttribute("viewBox",o.getAttribute("viewBox")||"0 0 24 24"),o.querySelectorAll("path, circle, rect, polygon, line, polyline").forEach(e=>{e.style.cssText=`\n          fill: ${i} !important;\n          stroke: ${i} !important;\n        `});const e=o.parentElement;return e&&(e.style.cssText=`\n          width: ${t}px !important;\n          height: ${t}px !important;\n          display: flex !important;\n          align-items: center !important;\n          justify-content: center !important;\n        `),!0}const r=e.shadowRoot.querySelector("ha-svg-icon");return!!r&&(r.style.cssText=`\n        width: ${t}px !important;\n        height: ${t}px !important;\n        color: ${i} !important;\n        display: block !important;\n      `,r.hasAttribute("size")&&r.setAttribute("size",t.toString()),!0)}createIconMarker(e){const t=e.icon,i=e.icon_color||"var(--primary-color)",a=2.5*(e.icon_size||20),o=.8*a,r=.6*o,n=a;if(!t||""===t.trim())return l.divIcon({html:`\n          <div style="\n            position: relative;\n            width: ${a}px;\n            height: ${a}px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n          ">\n            <div style="\n              position: absolute;\n              width: ${o}px;\n              height: ${o}px;\n              background: ${i};\n              border-radius: 50% 50% 50% 0;\n              transform: rotate(-45deg);\n              box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n              border: 2px solid white;\n            "></div>\n          </div>\n        `,iconSize:[a,a],iconAnchor:[a/2,n],popupAnchor:[0,-n],className:"",shadowUrl:void 0});const s=`\n        <div style="\n          position: relative;\n          width: ${a}px;\n          height: ${a}px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        ">\n          <div style="\n            position: absolute;\n            width: ${o}px;\n            height: ${o}px;\n            background: white;\n            border-radius: 50% 50% 50% 0;\n            transform: rotate(-45deg);\n            box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n            border: 2px solid ${i};\n          "></div>\n          <div\n            data-icon-placeholder\n            style="\n              position: absolute;\n              top: ${.3*o}px;\n              left: 50%;\n              transform: translateX(-50%);\n              width: ${r}px;\n              height: ${r}px;\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              z-index: 1;\n            "\n          >\n            \x3c!-- ha-icon will be injected here --\x3e\n          </div>\n        </div>\n      `;return l.divIcon({html:s,iconSize:[a,a],iconAnchor:[a/2,n],popupAnchor:[0,-n],className:"",shadowUrl:void 0})}createMarkerPopup(e,t){var i,a;let o=`<div style="padding: 8px;"><strong>${e.name||"Marker"}</strong>`;if("entity"===e.type&&e.entity){const i=t.states[e.entity];i&&(o+=`<br><span style="font-size: 12px;">Entity: ${i.attributes.friendly_name||e.entity}</span>`,o+=`<br><span style="font-size: 12px;">State: ${i.state}</span>`)}else"manual"===e.type&&(o+=`<br><span style="font-size: 12px;">Lat: ${null===(i=e.latitude)||void 0===i?void 0:i.toFixed(6)}</span>`,o+=`<br><span style="font-size: 12px;">Lon: ${null===(a=e.longitude)||void 0===a?void 0:a.toFixed(6)}</span>`);return o+="</div>",o}getCardSize(e){const t=e.map_height||400;return Math.ceil(t/50)}validate(e){const t=[],i=e;return i.markers&&i.markers.length>0&&i.markers.forEach((e,i)=>{"manual"===e.type?(void 0!==e.latitude&&(e.latitude<-90||e.latitude>90)&&t.push(`Marker ${i+1}: Invalid latitude value`),void 0!==e.longitude&&(e.longitude<-180||e.longitude>180)&&t.push(`Marker ${i+1}: Invalid longitude value`)):e.type}),{valid:0===t.length,errors:t}}getStyles(){return n.m.getSliderStyles()}}},5014(e,t,i){i.d(t,["B",0,"***REDACTED***"])}};