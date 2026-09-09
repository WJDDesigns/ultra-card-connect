/*! For license information please see uc-m-area-summary.1710dcce.js.LICENSE.txt */
export const __webpack_esm_ids__=[2289];export const __webpack_esm_modules__={1532(e,t,i){i.d(t,{UltraAreaSummaryModule:()=>l});var r=i(2618),a=i(1299),n=i(7475),o=i(6478),s=i(8949),c=i(7907),d=(i(7921),i(4830));class l extends n.m{constructor(){super(...arguments),this.handlesOwnDesignStyles=!0,this.metadata={type:"area_summary",title:"Area / Room Summary",description:"Smart room tile that auto-pulls lights, climate, motion, doors, media, humidity, and presence by Home Assistant area",author:"WJD Designs",version:"1.0.0",icon:"mdi:floor-plan",category:"data",tags:["area","room","summary","climate","lights","presence","dashboard"]},this._resolveCache=new Map,this._nextRequestId=0,this._areaOptions=[],this._areasLoadState="idle",this._pinnedEntityPickerKey=0,this._hiddenEntityPickerKey=0}createDefault(e,t){return{id:e||this.generateId("area_summary"),type:"area_summary",area_id:"",title:"",temperature_entity:"",humidity_entity:"",room_icon:"",accent_color:"",show_quick_entity_names:!1,style_preset:"theme",max_quick_actions:6,discovery:{},hidden_entities:[],pinned_entities:[],room_background_type:"none",room_background_image:"",room_background_image_entity:"",room_background_overlay:55,tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){var t;const i=e,r=[...super.validate(e).errors];return(null===(t=i.area_id)||void 0===t?void 0:t.trim())||r.push("Select a Home Assistant area"),{valid:0===r.length,errors:r}}resolveKey(e){var t,i;return[(null===(t=e.area_id)||void 0===t?void 0:t.trim())||"",String(null!==(i=e.max_quick_actions)&&void 0!==i?i:6),(e.temperature_entity||"").trim(),(e.humidity_entity||"").trim(),(e.hidden_entities||[]).slice().sort().join(","),(e.pinned_entities||[]).slice().sort().join(","),JSON.stringify(e.discovery||{})].join("::")}resolveCacheKeyForModule(e,t){return`${t}::${e.id}::${this.resolveKey(e)}`}latestModelForModule(e,t,i){let r;const a=`${i}::${e}::`;for(const[e,i]of this._resolveCache.entries())e.startsWith(a)&&i.model&&i.areaId===t&&(!r||i.updatedAt>r.updatedAt)&&(r={updatedAt:i.updatedAt,model:i.model});return null==r?void 0:r.model}latestModelForModuleAnyContext(e){let t;const i=`::${e}::`;for(const[e,r]of this._resolveCache.entries())e.includes(i)&&r.model&&(!t||r.updatedAt>t.updatedAt)&&(t={updatedAt:r.updatedAt,model:r.model});return null==t?void 0:t.model}getRuntimeEntityIds(e){const t=e;if(!(null==t?void 0:t.id))return[];const i=this.latestModelForModuleAnyContext(t.id);if(!i)return[];const r=new Set;for(const e of i.light_entity_ids)r.add(e);for(const e of i.all_quick_entities)r.add(e.entity_id);return i.climate_entity_id&&r.add(i.climate_entity_id),i.temperature_entity_id&&r.add(i.temperature_entity_id),i.humidity_entity_id&&r.add(i.humidity_entity_id),[...r]}invalidateResolveCacheForModule(e){if(e)for(const t of[...this._resolveCache.keys()])t.includes(`::${e}::`)&&this._resolveCache.delete(t)}touchResolve(e,t,i){const r=(t.area_id||"").trim();if(!r)return void this.invalidateResolveCacheForModule(t.id);const a=this.resolveCacheKeyForModule(t,i);if(this._resolveCache.get(a))return;const n=++this._nextRequestId;this._resolveCache.set(a,{requestId:n,loading:!0,context:i,areaId:r,model:this.latestModelForModule(t.id,r,i),error:void 0,updatedAt:Date.now()}),s.LH.resolveRoom(e,t).then(e=>{const t=this._resolveCache.get(a);t&&t.requestId===n&&(this._resolveCache.set(a,{requestId:n,loading:!1,context:i,areaId:r,model:e,error:void 0,updatedAt:Date.now()}),this.requestUpdate(),this.triggerPreviewUpdate())}).catch(e=>{const t=this._resolveCache.get(a);t&&t.requestId===n&&(this._resolveCache.set(a,{requestId:n,loading:!1,context:i,areaId:r,model:t.model,error:String((null==e?void 0:e.message)||e),updatedAt:Date.now()}),this.requestUpdate(),this.triggerPreviewUpdate())})}ensureAreaOptions(e){"loading"!==this._areasLoadState&&"ready"!==this._areasLoadState&&(this._areasLoadState="loading",s.LH.listAreas(e).then(e=>{this._areaOptions=e.map(e=>({value:e.area_id,label:e.name})),this._areasLoadState="ready",this.triggerPreviewUpdate()}).catch(()=>{this._areasLoadState="error",this.triggerPreviewUpdate()}))}accent(e){var t;return(null===(t=e.accent_color)||void 0===t?void 0:t.trim())||"var(--primary-color)"}roomTitle(e,t,i){return(e.title||"").trim()||(null==t?void 0:t.area_name)||(0,o.kg)("editor.area_summary.room",i,"Room")}roomHeroIcon(e){return(e.room_icon||"").trim()||"mdi:sofa-outline"}presetOptions(e){return[{value:"iconic_soft",label:(0,o.kg)("editor.area_summary.preset.iconic_soft",e,"Iconic soft")},{value:"graph_glow",label:(0,o.kg)("editor.area_summary.preset.graph_glow",e,"Graph glow")},{value:"compact_controls",label:(0,o.kg)("editor.area_summary.preset.compact_controls",e,"Compact controls")},{value:"photo_overlay",label:(0,o.kg)("editor.area_summary.preset.photo_overlay",e,"Photo overlay")}]}discoveryKeys(){return[{key:"lights",labelKey:"disc_lights",descKey:"disc_lights_d",defaultLabel:"Lights",defaultDesc:"Include lights in this area."},{key:"climate",labelKey:"disc_climate",descKey:"disc_climate_d",defaultLabel:"Climate",defaultDesc:"Include thermostats / climate entities."},{key:"temperature",labelKey:"disc_temp",descKey:"disc_temp_d",defaultLabel:"Temperature sensors",defaultDesc:"Sensors with device class temperature."},{key:"humidity",labelKey:"disc_hum",descKey:"disc_hum_d",defaultLabel:"Humidity sensors",defaultDesc:"Sensors with device class humidity."},{key:"motion",labelKey:"disc_motion",descKey:"disc_motion_d",defaultLabel:"Motion / occupancy",defaultDesc:"Binary sensors for motion or occupancy."},{key:"doors_windows",labelKey:"disc_dw",descKey:"disc_dw_d",defaultLabel:"Doors & windows",defaultDesc:"Open/close sensors for doors and windows."},{key:"media",labelKey:"disc_media",descKey:"disc_media_d",defaultLabel:"Media players",defaultDesc:"Speakers, TVs, and media players."},{key:"presence",labelKey:"disc_presence",descKey:"disc_presence_d",defaultLabel:"People",defaultDesc:"Person entities assigned to the area."},{key:"covers",labelKey:"disc_covers",descKey:"disc_covers_d",defaultLabel:"Covers",defaultDesc:"Blinds, curtains, garage doors."},{key:"fans",labelKey:"disc_fans",descKey:"disc_fans_d",defaultLabel:"Fans",defaultDesc:"Fan entities."},{key:"locks",labelKey:"disc_locks",descKey:"disc_locks_d",defaultLabel:"Locks",defaultDesc:"Lock entities."},{key:"switches",labelKey:"disc_switches",descKey:"disc_switches_d",defaultLabel:"Switches",defaultDesc:"Switch entities (non-light)."}]}badgeTapAction(e){const t=e.includes(".")?e.split(".")[0]:"";return"light"===t||"switch"===t||"fan"===t?{action:"toggle",entity:e}:{action:"more-info",entity:e}}onBadgeClick(e,t,i,r,a){e.stopPropagation();const n=this.badgeTapAction(a);this.handleModuleAction(n,t,e.currentTarget,i,a,r)}onLightsPillClick(e,t,i,r){var a;if(e.stopPropagation(),!(null===(a=i.area_id)||void 0===a?void 0:a.trim()))return;const n=r.light_entity_ids.filter(e=>(0,s.mu)(e,"lights",t)).length>0?"turn_off":"turn_on";t.callService("light",n,{},{area_id:i.area_id})}onClimatePillClick(e,t,i,r,a){e.stopPropagation(),a&&this.handleModuleAction({action:"more-info",entity:a},t,e.currentTarget,i,a,r)}liveQuickEntities(e,t,i){const r=new Map;e.pinned_entity_ids.forEach((e,t)=>r.set(e,t));const a=e.all_quick_entities.map(e=>{const i=(0,s.mu)(e.entity_id,e.role,t);return Object.assign(Object.assign({},e),{active:i,sort_bucket:(0,s.N$)(e.role,i)})});return a.sort((e,t)=>{var i,a;const n=null!==(i=r.get(e.entity_id))&&void 0!==i?i:999,o=null!==(a=r.get(t.entity_id))&&void 0!==a?a:999;return n!==o?n-o:e.sort_bucket!==t.sort_bucket?e.sort_bucket-t.sort_bucket:e.active!==t.active?e.active?-1:1:e.entity_id.localeCompare(t.entity_id)}),a.slice(0,Math.max(1,Math.min(12,i)))}statLine(e,t){const i=[];return e.temperature_label&&i.push(e.temperature_label),e.humidity_label&&i.push(e.humidity_label),i.length?i.join(" · "):(0,o.kg)("editor.area_summary.no_climate",t,"No climate data")}effectiveRoomBackgroundType(e){const t=e.room_background_type;return t&&"none"!==t?t:(e.room_background_url||"").trim()?"url":"none"}resolveBackgroundImageUrl(e,t){const i=this.effectiveRoomBackgroundType(t);if("none"===i)return"";if("url"===i||"upload"===i){const i=(t.room_background_image||t.room_background_url||"").trim();return i?(0,c.VG)(e,i):""}if("entity"===i){const i=(t.room_background_image_entity||"").trim();if(!i||!e.states[i])return"";const r=e.states[i].attributes.entity_picture;return"string"==typeof r&&r.trim()?(0,c.VG)(e,r):""}return""}entityShortName(e,t){var i,r;const a=null===(r=null===(i=e.states[t])||void 0===i?void 0:i.attributes)||void 0===r?void 0:r.friendly_name;return"string"==typeof a&&a.trim()?a.trim():(t.split(".").pop()||t).replace(/_/g," ")}renderGeneralTab(e,t,i,n){var s,c,l,u;const m=e,p=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",g="photo_overlay"===(0,d.NS)(i,"area_summary","style_preset",m.style_preset,"iconic_soft");this.ensureAreaOptions(t);const h=(()=>{var e;if("ready"!==this._areasLoadState||!this._areaOptions.length)return[{value:"",label:(0,o.kg)("editor.area_summary.area_loading",p,"Loading areas…")}];const t=this._areaOptions.map(e=>({value:e.value,label:e.label}));return(null===(e=m.area_id)||void 0===e?void 0:e.trim())&&!t.some(e=>e.value===m.area_id)&&t.unshift({value:m.area_id,label:m.area_id}),t})();return r.qy`
      ${this.injectUcFormStyles()}
      <style>
        .uc-ar-editor-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 8px 0 12px 0;
        }
        .uc-ar-editor-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: var(--primary-color);
          color: var(--text-primary-color, #fff);
          border-radius: var(--uc-r-16, 16px);
          font-size: 13px;
          max-width: 100%;
          position: relative;
        }
        .uc-ar-editor-chip--hidden {
          background: var(--error-color);
        }
        .uc-ar-editor-chip:hover {
          opacity: 0.95;
          padding-right: 30px;
        }
        .uc-ar-editor-chip .uc-ar-chip-remove {
          cursor: pointer;
          font-size: 16px;
          opacity: 0;
          position: absolute;
          right: 8px;
          transition: opacity 0.15s ease;
        }
        .uc-ar-editor-chip:hover .uc-ar-chip-remove {
          opacity: 1;
        }
        .uc-ar-editor-chip-label {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 220px;
        }
        .uc-ar-pin-hide-box .field-section ha-form {
          width: 100%;
        }
      </style>
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,o.kg)("editor.area_summary.section_area",p,"Area"),(0,o.kg)("editor.area_summary.section_area_desc",p,"Choose the Home Assistant area this tile represents."),[{title:(0,o.kg)("editor.area_summary.area",p,"Area"),description:(0,o.kg)("editor.area_summary.area_desc",p,"Entities are discovered from the area registry."),hass:t,data:{area_id:m.area_id||""},schema:[this.selectField("area_id","error"===this._areasLoadState?[{value:"",label:(0,o.kg)("editor.area_summary.area_error",p,"Could not load areas")}]:h)],onChange:e=>{var t,i;const r=String(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.area_id)&&void 0!==i?i:"");n({area_id:r}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.area_summary.title",p,"Title override"),description:(0,o.kg)("editor.area_summary.title_desc",p,"Leave blank to use the area name."),hass:t,data:{title:m.title||""},schema:[{name:"title",selector:{text:{}}}],onChange:e=>{var t,i;n({title:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.title)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.area_summary.room_icon",p,"Room icon"),description:(0,o.kg)("editor.area_summary.room_icon_desc",p,"Large icon shown on the tile."),hass:t,data:{room_icon:m.room_icon||""},schema:[{name:"room_icon",selector:{icon:{}}}],onChange:e=>{var t,i;n({room_icon:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.room_icon)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.area_summary.temperature_entity",p,"Temperature entity override"),description:(0,o.kg)("editor.area_summary.temperature_entity_desc",p,"Optional. Use this entity for temperature instead of auto-discovery."),hass:t,data:{temperature_entity:m.temperature_entity||""},schema:[{name:"temperature_entity",selector:{entity:{domain:["sensor","climate","weather"]}}}],onChange:e=>{var t,i;n({temperature_entity:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.temperature_entity)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.area_summary.humidity_entity",p,"Humidity entity override"),description:(0,o.kg)("editor.area_summary.humidity_entity_desc",p,"Optional. Use this entity for humidity instead of auto-discovery."),hass:t,data:{humidity_entity:m.humidity_entity||""},schema:[{name:"humidity_entity",selector:{entity:{domain:["sensor","climate","weather"]}}}],onChange:e=>{var t,i;n({humidity_entity:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.humidity_entity)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}}])}
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,o.kg)("editor.area_summary.accent",p,"Accent color")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,o.kg)("editor.area_summary.accent_desc",p,"Used for highlights and active states.")}
          </div>
          <ultra-color-picker
            style="width: 100%;"
            .value=${m.accent_color||""}
            .defaultValue=${"var(--primary-color)"}
            .hass=${t}
            @value-changed=${e=>{n({accent_color:e.detail.value}),this.triggerPreviewUpdate()}}
          ></ultra-color-picker>
        </div>

        ${this.renderSettingsSection((0,o.kg)("editor.area_summary.section_look",p,"Look & feel"),(0,o.kg)("editor.area_summary.section_look_desc",p,"Visual preset for the tile. Photo background options appear when you choose the Photo overlay preset."),[{title:(0,o.kg)("editor.area_summary.preset_label",p,"Style preset"),description:(0,o.kg)("editor.area_summary.preset_desc",p,"Layout and decoration style for the tile."),hass:t,data:{style_preset:m.style_preset||"theme"},schema:[this.selectField("style_preset",this.withThemeInheritOption(p,i,"area_summary","style_preset","iconic_soft",this.presetOptions(p)))],onChange:e=>{var t;n({style_preset:(null===(t=e.detail.value)||void 0===t?void 0:t.style_preset)||"theme"}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.area_summary.max_quick",p,"Max quick actions"),description:(0,o.kg)("editor.area_summary.max_quick_desc",p,"Circular shortcuts for discovered entities."),hass:t,data:{max_quick_actions:null!==(c=m.max_quick_actions)&&void 0!==c?c:6},schema:[this.numberField("max_quick_actions",1,12,1)],onChange:e=>{var t,i;return n({max_quick_actions:Number(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.max_quick_actions)&&void 0!==i?i:6)})}},{title:(0,o.kg)("editor.area_summary.show_entity_names",p,"Show entity names"),description:(0,o.kg)("editor.area_summary.show_entity_names_desc",p,"Show each quick action friendly name next to its icon."),hass:t,data:{show_quick_entity_names:!0===m.show_quick_entity_names},schema:[this.booleanField("show_quick_entity_names")],onChange:e=>{var t;n({show_quick_entity_names:!0===(null===(t=e.detail.value)||void 0===t?void 0:t.show_quick_entity_names)}),this.triggerPreviewUpdate()}}])}
        <div class="settings-section" style="margin-bottom: 24px;">
          ${this.renderSliderField((0,o.kg)("editor.area_summary.tile_radius",p,"Tile border radius"),(0,o.kg)("editor.area_summary.tile_radius_desc",p,"Adjust corner roundness for the room tile."),null!==(l=m.tile_border_radius)&&void 0!==l?l:20,20,0,48,1,e=>{n({tile_border_radius:e}),this.triggerPreviewUpdate()},"px")}
        </div>
        ${g?r.qy`
              <div
                class="settings-section uc-ar-photo-bg-editor"
                style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
              >
                ${this.renderFieldSection((0,o.kg)("editor.area_summary.room_bg_type",p,"Photo background source"),(0,o.kg)("editor.area_summary.room_bg_type_desc",p,"Choose none, upload, an entity picture, or a URL for the Photo overlay tile."),t,{room_background_type:m.room_background_type&&"none"!==m.room_background_type?m.room_background_type:this.effectiveRoomBackgroundType(m)},[this.selectField("room_background_type",[{value:"none",label:(0,o.kg)("editor.area_summary.room_bg_none",p,"None")},{value:"upload",label:(0,o.kg)("editor.area_summary.room_bg_upload",p,"Upload")},{value:"entity",label:(0,o.kg)("editor.area_summary.room_bg_entity",p,"Entity image")},{value:"url",label:(0,o.kg)("editor.area_summary.room_bg_url",p,"Image URL")}])],e=>{var t;const i=(null===(t=e.detail.value)||void 0===t?void 0:t.room_background_type)||"none";n("none"===i?{room_background_type:"none",room_background_image:"",room_background_image_entity:"",room_background_url:""}:{room_background_type:i}),this.triggerPreviewUpdate()})}
                ${"url"===this.effectiveRoomBackgroundType(m)?r.qy`
                      <div style="margin-top: 8px;">
                        ${this.renderFieldSection((0,o.kg)("editor.area_summary.room_bg_image_url",p,"Image URL"),(0,o.kg)("editor.area_summary.room_bg_image_url_desc",p,"Direct URL to an image (https://… or /local/…)."),t,{room_background_image:m.room_background_image||m.room_background_url||""},[this.textField("room_background_image")],e=>{var t,i;n({room_background_image:null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.room_background_image)&&void 0!==i?i:""}),this.triggerPreviewUpdate()})}
                      </div>
                    `:""}
                ${"upload"===this.effectiveRoomBackgroundType(m)?r.qy`
                      <div style="margin-top: 12px;">
                        ${this.renderFileField((0,o.kg)("editor.area_summary.room_bg_upload_btn",p,"Upload file"),(0,o.kg)("editor.area_summary.room_bg_upload_btn_desc",p,"Choose an image from your device. It is stored in your Ultra Card uploads path."),t,m.room_background_image||"",e=>{n(e?{room_background_type:"upload",room_background_image:e}:{room_background_image:""}),this.triggerPreviewUpdate()},"image/*")}
                      </div>
                    `:""}
                ${"entity"===this.effectiveRoomBackgroundType(m)?r.qy`
                      <div style="margin-top: 8px;">
                        ${this.renderEntityPickerWithVariables(t,i,"room_background_image_entity",m.room_background_image_entity||"",e=>{n({room_background_image_entity:e}),this.triggerPreviewUpdate()},void 0,(0,o.kg)("editor.area_summary.room_bg_entity_label",p,"Image entity"))}
                        <div
                          class="field-description"
                          style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);"
                        >
                          ${(0,o.kg)("editor.area_summary.room_bg_entity_help",p,"Pick an entity that exposes entity_picture (person, camera, media player, etc.).")}
                        </div>
                      </div>
                    `:""}
                ${"none"!==this.effectiveRoomBackgroundType(m)?r.qy`
                      <div style="margin-top: 16px;">
                        ${this.renderSliderField((0,o.kg)("editor.area_summary.bg_overlay",p,"Background overlay %"),(0,o.kg)("editor.area_summary.bg_overlay_desc",p,"Darkens the photo for readability."),null!==(u=m.room_background_overlay)&&void 0!==u?u:55,55,0,90,5,e=>{n({room_background_overlay:e}),this.triggerPreviewUpdate()},"%")}
                      </div>
                    `:""}
              </div>
            `:""}

        ${this.renderSettingsSection((0,o.kg)("editor.area_summary.section_discovery",p,"Discovery"),(0,o.kg)("editor.area_summary.section_discovery_desc",p,"Choose which categories appear as quick actions."),this.discoveryKeys().map(({key:e,labelKey:i,descKey:r,defaultLabel:a,defaultDesc:s})=>{var c;return{title:(0,o.kg)(`editor.area_summary.${i}`,p,a),description:(0,o.kg)(`editor.area_summary.${r}`,p,s),hass:t,data:{[e]:!1!==(null===(c=m.discovery)||void 0===c?void 0:c[e])},schema:[this.booleanField(e)],onChange:t=>{var i;const r=null===(i=t.detail.value)||void 0===i?void 0:i[e];n({discovery:Object.assign(Object.assign({},m.discovery||{}),{[e]:!1!==r})}),this.triggerPreviewUpdate()}}}))}

        <div
          class="settings-section uc-ar-pin-hide-box"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,o.kg)("editor.area_summary.section_pin",p,"Pin & hide")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 20px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,o.kg)("editor.area_summary.section_pin_desc",p,"Pin entities to the front of the quick row, or hide them entirely.")}
          </div>

          <div
            class="field-title"
            style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 4px;"
          >
            ${(0,o.kg)("editor.area_summary.pinned",p,"Pinned entities")}
          </div>
          <div
            class="field-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,o.kg)("editor.area_summary.pinned_desc",p,"Shown first in the quick row when they exist in the area. Remove with the × on a chip.")}
          </div>
          <div class="uc-ar-editor-chips">
            ${(m.pinned_entities||[]).map(e=>r.qy`
                <div class="uc-ar-editor-chip" title=${e}>
                  <span class="uc-ar-editor-chip-label">${this.entityShortName(t,e)}</span>
                  <ha-icon
                    class="uc-ar-chip-remove"
                    icon="mdi:close"
                    @click=${()=>{n({pinned_entities:(m.pinned_entities||[]).filter(t=>t!==e)}),this.triggerPreviewUpdate()}}
                  ></ha-icon>
                </div>
              `)}
          </div>
          ${(0,a.D)(this._pinnedEntityPickerKey,this.renderFieldSection((0,o.kg)("editor.area_summary.pinned_add",p,"Add pinned entity"),"",t,{uc_area_pin_entity:""},[{name:"uc_area_pin_entity",selector:{entity:{}}}],e=>{var t,i;const r=String(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.uc_area_pin_entity)&&void 0!==i?i:"").trim();r&&((m.pinned_entities||[]).includes(r)||(this._pinnedEntityPickerKey+=1,n({pinned_entities:[...m.pinned_entities||[],r]}),this.triggerPreviewUpdate()))}))}

          <div
            style="margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--divider-color);"
          >
            <div
              class="field-title"
              style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 4px;"
            >
              ${(0,o.kg)("editor.area_summary.hidden",p,"Hidden entities")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
            >
              ${(0,o.kg)("editor.area_summary.hidden_desc",p,"Excluded from the tile and from aggregates. Remove with the × on a chip.")}
            </div>
            <div class="uc-ar-editor-chips">
              ${(m.hidden_entities||[]).map(e=>r.qy`
                  <div class="uc-ar-editor-chip uc-ar-editor-chip--hidden" title=${e}>
                    <span class="uc-ar-editor-chip-label">${this.entityShortName(t,e)}</span>
                    <ha-icon
                      class="uc-ar-chip-remove"
                      icon="mdi:close"
                      @click=${()=>{n({hidden_entities:(m.hidden_entities||[]).filter(t=>t!==e)}),this.triggerPreviewUpdate()}}
                    ></ha-icon>
                  </div>
                `)}
            </div>
            ${(0,a.D)(this._hiddenEntityPickerKey,this.renderFieldSection((0,o.kg)("editor.area_summary.hidden_add",p,"Add hidden entity"),"",t,{uc_area_hidden_entity:""},[{name:"uc_area_hidden_entity",selector:{entity:{}}}],e=>{var t,i;const r=String(null!==(i=null===(t=e.detail.value)||void 0===t?void 0:t.uc_area_hidden_entity)&&void 0!==i?i:"").trim();r&&((m.hidden_entities||[]).includes(r)||(this._hiddenEntityPickerKey+=1,n({hidden_entities:[...m.hidden_entities||[],r]}),this.triggerPreviewUpdate()))}))}
          </div>
        </div>

        ${"error"===this._areasLoadState?r.qy`<div class="form-description" style="color: var(--error-color); margin-top: 8px;">
              ${(0,o.kg)("editor.area_summary.registry_error",p,"Could not load the area registry. Check Home Assistant connectivity and refresh.")}
            </div>`:r.s6}
      </div>
    `}renderPreview(e,t,i,a){var n,c,l,u,m,p,g,h,_;const y=(0,d.Gy)(e,i,"area_summary",{style_preset:"iconic_soft",accent_color:"",tile_border_radius:20}),v=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",b=y.style_preset||"iconic_soft",f=a||"dashboard";if(!(null===(c=y.area_id)||void 0===c?void 0:c.trim()))return r.qy`
        ${this.injectModuleStyles()}
        <div class="uc-ar uc-ar--empty">
          ${this.renderGradientErrorState((0,o.kg)("editor.area_summary.pick_area",v,"Select an area"),(0,o.kg)("editor.area_summary.pick_area_desc",v,"Choose a Home Assistant area in the General tab to discover entities automatically."),"mdi:floor-plan")}
        </div>
      `;this.touchResolve(t,y,f);const x=this.resolveCacheKeyForModule(y,f),k=this._resolveCache.get(x);if(!k)return r.qy`
        ${this.injectModuleStyles()}
        <div class="uc-ar uc-ar--skeleton" style="--uc-ar-accent: ${this.accent(y)}">
          <div class="uc-ar-skel-line"></div>
          <div class="uc-ar-skel-line short"></div>
          <div class="uc-ar-skel-blob"></div>
        </div>
      `;if(k.loading&&k.model);else if(k.loading)return r.qy`
        ${this.injectModuleStyles()}
        <div class="uc-ar uc-ar--skeleton" style="--uc-ar-accent: ${this.accent(y)}">
          <div class="uc-ar-skel-line"></div>
          <div class="uc-ar-skel-line short"></div>
          <div class="uc-ar-skel-blob"></div>
        </div>
      `;if(k.error&&!k.model)return r.qy`
        ${this.injectModuleStyles()}
        <div class="uc-ar uc-ar--empty">
          ${this.renderGradientErrorState((0,o.kg)("editor.area_summary.resolve_error",v,"Could not load area"),k.error,"mdi:alert-circle-outline")}
          <button
            type="button"
            class="uc-ar-retry"
            @click=${()=>{this._resolveCache.delete(x),s.LH.invalidateRegistryCache(),this.touchResolve(t,y,f),this.requestUpdate()}}
          >
            ${(0,o.kg)("editor.area_summary.retry",v,"Retry")}
          </button>
        </div>
      `;if(!k.model)return r.qy`
        ${this.injectModuleStyles()}
        <div class="uc-ar uc-ar--skeleton" style="--uc-ar-accent: ${this.accent(y)}">
          <div class="uc-ar-skel-line"></div>
        </div>
      `;const w=k.model,$=w.light_entity_ids.filter(e=>(0,s.mu)(e,"lights",t)).length,S=w.light_entity_ids.length,C=this.liveQuickEntities(w,t,null!==(l=y.max_quick_actions)&&void 0!==l?l:6),q=this.roomTitle(y,w,v),P=this.roomHeroIcon(y),L=this.accent(y),M=Math.max(0,Math.min(48,null!==(u=y.tile_border_radius)&&void 0!==u?u:20)),U=this.statLine(w,v),A=(null===(p=null===(m=y.tap_action)||void 0===m?void 0:m.entity)||void 0===p?void 0:p.trim())?y.tap_action.entity.trim():w.primary_entity_id||"",K=y.tap_action&&y.tap_action.action?y.tap_action:A?{action:"more-info",entity:A}:{action:"nothing"},z=this.createGestureHandlers(y.id,{tap_action:K,hold_action:y.hold_action,double_tap_action:y.double_tap_action,entity:A,module:y},t,i),R=!0===y.show_quick_entity_names,I=(e,a)=>{const n=!!(null==a?void 0:a.iconicInlineNames)&&R,o=!!(null==a?void 0:a.rowSpread);return r.qy`
        <div
          class="uc-ar-badges uc-ar-badges--${e} ${R?"uc-ar-badges--names":""} ${n?"uc-ar-badges--iconic-inline":""} ${o?"uc-ar-badges--row-spread":""}"
          @pointerdown=${e=>e.stopPropagation()}
        >
          ${C.map(e=>{var a,o;const c=this.entityShortName(t,e.entity_id),d=(0,s.mu)(e.entity_id,e.role,t);return r.qy`
              <div class="uc-ar-badge-cell ${n?"uc-ar-badge-cell--iconic-inline":""}">
                ${n?r.qy`<div class="uc-ar-badge-name uc-ar-badge-name--inline-start">${c}</div>`:r.s6}
                <button
                  type="button"
                  class="uc-ar-badge ${d?"is-active":""}"
                  title=${(null===(o=null===(a=t.states[e.entity_id])||void 0===a?void 0:a.attributes)||void 0===o?void 0:o.friendly_name)||e.entity_id}
                  aria-label=${c}
                  @click=${r=>this.onBadgeClick(r,t,i,y,e.entity_id)}
                >
                  <ha-icon icon=${e.icon}></ha-icon>
                </button>
                ${R&&!n?r.qy`<div class="uc-ar-badge-name">${c}</div>`:r.s6}
              </div>
            `})}
        </div>
      `},F="compact_controls"===b?r.qy`
            <div class="uc-ar-pills" @pointerdown=${e=>e.stopPropagation()}>
              ${S>0?r.qy`
                    <button
                      type="button"
                      class="uc-ar-pill ${$>0?"is-active":""}"
                      @click=${e=>this.onLightsPillClick(e,t,y,w)}
                    >
                      <ha-icon icon="mdi:lightbulb-group-outline"></ha-icon>
                      <span
                        >${(0,o.kg)("editor.area_summary.pill_lights",v,"Lights")}
                        ${$}/${S}</span
                      >
                    </button>
                  `:r.s6}
              ${w.climate_entity_id?r.qy`
                    <button
                      type="button"
                      class="uc-ar-pill ${"off"!==(null===(g=t.states[w.climate_entity_id])||void 0===g?void 0:g.state)?"is-active":""}"
                      @click=${e=>this.onClimatePillClick(e,t,i,y,w.climate_entity_id)}
                    >
                      <ha-icon icon="mdi:thermostat"></ha-icon>
                      <span>${(null===(h=t.states[w.climate_entity_id])||void 0===h?void 0:h.state)||"climate"}</span>
                    </button>
                  `:r.s6}
            </div>
          `:r.s6;let D;if("graph_glow"===b)D=r.qy`
        <div class="uc-ar uc-ar--graph" data-uc-role="pane" style="--uc-ar-accent: ${L}; --uc-ar-radius: ${M}px;">
          <svg class="uc-ar-wave" viewBox="0 0 400 80" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M0,45 C60,10 120,70 180,40 S300,5 400,50 L400,80 L0,80 Z"
              fill="currentColor"
              opacity="0.12"
            ></path>
            <path
              d="M0,50 C80,20 160,60 240,35 S320,15 400,40"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              opacity="0.35"
            ></path>
          </svg>
          <div class="uc-ar-graph-top">
            <div class="uc-ar-graph-title">${q}</div>
            <div class="uc-ar-graph-stats">
              <span>${w.temperature_label||"—"}</span>
              <span class="dim">${w.humidity_label||""}</span>
            </div>
          </div>
          <div class="uc-ar-graph-bottom">
            <div class="uc-ar-graph-icon">
              <ha-icon icon=${P}></ha-icon>
            </div>
            ${I("row",{rowSpread:!0})}
          </div>
          ${F}
        </div>
      `;else if("compact_controls"===b)D=r.qy`
        <div class="uc-ar uc-ar--compact" data-uc-role="pane" style="--uc-ar-accent: ${L}; --uc-ar-radius: ${M}px;">
          <div class="uc-ar-compact-grid">
            <div class="uc-ar-compact-left">
              <div class="uc-ar-compact-icon">
                <ha-icon icon=${P}></ha-icon>
              </div>
              <div>
                <div class="uc-ar-name">${q}</div>
                <div class="uc-ar-sub">${U}</div>
                <div class="uc-ar-micro">
                  ${S?(0,o.kg)("editor.area_summary.lights_line",v,"{on} of {total} lights on").replace("{on}",String($)).replace("{total}",String(S)):""}
                </div>
              </div>
            </div>
            <div class="uc-ar-compact-right">${F}</div>
          </div>
          ${I("row",{rowSpread:!0})}
        </div>
      `;else if("photo_overlay"===b){const e=this.resolveBackgroundImageUrl(t,y),i=Math.max(0,Math.min(90,null!==(_=y.room_background_overlay)&&void 0!==_?_:55))/90,a=.12+.58*i,n=.38+.52*i;D=r.qy`
        <div
          class="uc-ar uc-ar--photo"
          style="--uc-ar-accent: ${L}; --uc-ar-radius: ${M}px; ${e?`background-image: linear-gradient(to bottom, rgba(0,0,0,${a.toFixed(3)}), rgba(0,0,0,${n.toFixed(3)})), url(${JSON.stringify(e)}); background-size: cover; background-position: center;`:""}"
        >
          <div class="uc-ar-photo-top">
            <div class="uc-ar-name">${q}</div>
            <div class="uc-ar-sub">${U}</div>
          </div>
          <div class="uc-ar-photo-bottom">
            <div class="uc-ar-photo-hero">
              <ha-icon icon=${P}></ha-icon>
            </div>
            ${I("row",{rowSpread:!0})}
          </div>
        </div>
      `}else D=r.qy`
        <div class="uc-ar uc-ar--iconic" data-uc-role="pane" style="--uc-ar-accent: ${L}; --uc-ar-radius: ${M}px;">
          <div class="uc-ar-iconic-top">
            <div class="uc-ar-name">${q}</div>
            <div class="uc-ar-sub">${U}</div>
          </div>
          <div class="uc-ar-iconic-bottom">
            <div class="uc-ar-blob">
              <div class="uc-ar-blob-inner">
                <ha-icon icon=${P}></ha-icon>
              </div>
            </div>
            ${I("column",R?{iconicInlineNames:!0}:void 0)}
          </div>
          ${F}
        </div>
      `;return r.qy`
      ${this.injectModuleStyles()}
      <div
        class="uc-ar-host"
        @pointerdown=${z.onPointerDown}
        @pointermove=${z.onPointerMove}
        @pointerup=${z.onPointerUp}
        @pointerleave=${z.onPointerLeave}
        @pointercancel=${z.onPointerCancel}
      >
        ${D}
      </div>
    `}injectModuleStyles(){return r.qy`<style>
      ${this.getStyles()}
    </style>`}getStyles(){return`\n      ${n.m.getSliderStyles()}\n      .uc-ar-host { display:block; width:100%; }\n      .uc-ar {\n        position: relative;\n        border-radius: var(--uc-ar-radius, 20px);\n        overflow: hidden;\n        min-height: 132px;\n        color: var(--primary-text-color);\n        background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background, #fff)));\n        border: var(--uc-pane-border, none);\n        box-shadow: var(--uc-pane-shadow, 0 4px 18px rgba(0,0,0,0.08));\n      }\n      .uc-ar--empty { padding: 0; }\n      .uc-ar-retry {\n        margin-top: 12px;\n        padding: 8px 14px;\n        border-radius: var(--uc-r-10, 10px);\n        border: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n        cursor: pointer;\n        color: var(--primary-text-color);\n      }\n      .uc-ar--skeleton {\n        padding: 18px 16px;\n        background: linear-gradient(135deg, var(--secondary-background-color), var(--uc-pane-bg, var(--card-background-color)));\n      }\n      .uc-ar-skel-line {\n        height: 14px;\n        border-radius: var(--uc-r-8, 8px);\n        background: linear-gradient(90deg, rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06), rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12), rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.06));\n        background-size: 200% 100%;\n        animation: ucArShimmer 1.2s ease-in-out infinite;\n        margin-bottom: 10px;\n      }\n      .uc-ar-skel-line.short { width: 55%; }\n      .uc-ar-skel-blob {\n        margin-top: 28px;\n        width: 88px;\n        height: 88px;\n        border-radius: 50%;\n        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05);\n        animation: ucArShimmer 1.2s ease-in-out infinite;\n      }\n      @keyframes ucArShimmer {\n        0% { background-position: 0% 0%; }\n        100% { background-position: -200% 0%; }\n      }\n      @media (prefers-reduced-motion: reduce) {\n        .uc-ar-skel-line, .uc-ar-skel-blob { animation: none; }\n      }\n\n      .uc-ar-name {\n        font-weight: 800;\n        font-size: 1.05rem;\n        letter-spacing: 0.02em;\n        color: var(--uc-ar-accent, var(--primary-color));\n      }\n      .uc-ar-sub {\n        margin-top: 4px;\n        font-size: 0.85rem;\n        color: var(--secondary-text-color);\n      }\n      .uc-ar-micro {\n        margin-top: 6px;\n        font-size: 0.78rem;\n        color: var(--secondary-text-color);\n      }\n\n      /* Iconic soft */\n      .uc-ar--iconic {\n        padding: 16px 14px 18px 16px;\n      }\n      .uc-ar-iconic-top { position: relative; z-index: 1; }\n      .uc-ar-iconic-bottom {\n        margin-top: 18px;\n        display: flex;\n        align-items: flex-end;\n        justify-content: space-between;\n        gap: 12px;\n        position: relative;\n        z-index: 1;\n      }\n      .uc-ar-iconic-bottom > .uc-ar-badges--column {\n        flex: 1;\n        min-width: 0;\n      }\n      .uc-ar-blob {\n        width: 96px;\n        height: 96px;\n        border-radius: 50%;\n        background: radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--uc-ar-accent) 35%, transparent), transparent 70%);\n        display: grid;\n        place-items: center;\n      }\n      .uc-ar-blob-inner {\n        width: 72px;\n        height: 72px;\n        border-radius: 50%;\n        background: color-mix(in srgb, var(--uc-ar-accent) 22%, var(--uc-pane-bg, var(--card-background-color)));\n        display: grid;\n        place-items: center;\n        color: var(--uc-ar-accent);\n        box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--uc-ar-accent) 35%, transparent);\n      }\n      .uc-ar-blob-inner ha-icon {\n        --mdc-icon-size: 38px;\n      }\n\n      /* Badges */\n      .uc-ar-badges { display: flex; gap: 8px; align-items: center; }\n      .uc-ar-badges--column { flex-direction: column; align-items: flex-end; }\n      .uc-ar-badges--row { flex-wrap: wrap; justify-content: flex-end; margin-top: 8px; }\n      .uc-ar-badges--iconic-inline.uc-ar-badges--column {\n        align-items: flex-end;\n        width: auto;\n        max-width: 100%;\n      }\n      .uc-ar-badge-cell {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 4px;\n        max-width: 88px;\n      }\n      .uc-ar-badge-cell--iconic-inline {\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-end;\n        gap: 6px;\n        width: auto;\n        max-width: 100%;\n      }\n      .uc-ar-badge-name {\n        font-size: 10px;\n        line-height: 1.15;\n        color: var(--secondary-text-color);\n        text-align: center;\n        max-width: 84px;\n        overflow: hidden;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n      }\n      .uc-ar-badge-name--inline-start {\n        text-align: left;\n        width: 120px;\n        max-width: 120px;\n        flex: 0 1 auto;\n        min-width: 0;\n        -webkit-line-clamp: 2;\n        align-self: center;\n      }\n      .uc-ar-badges--row.uc-ar-badges--row-spread {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(52px, 1fr));\n        width: 100%;\n        justify-items: center;\n        align-items: start;\n        gap: 10px 6px;\n        box-sizing: border-box;\n      }\n      .uc-ar-badges--row.uc-ar-badges--row-spread .uc-ar-badge-cell {\n        width: 100%;\n        max-width: none;\n        min-width: 0;\n        align-items: center;\n      }\n      .uc-ar-badges--names.uc-ar-badges--column { gap: 10px; }\n      .uc-ar-badges--names.uc-ar-badges--row:not(.uc-ar-badges--row-spread) { gap: 10px 12px; }\n      .uc-ar-badge {\n        width: 36px;\n        height: 36px;\n        border-radius: 50%;\n        border: none;\n        cursor: pointer;\n        display: grid;\n        place-items: center;\n        background: color-mix(in srgb, var(--secondary-text-color) 12%, transparent);\n        color: var(--secondary-text-color);\n        transition: transform 0.12s ease, background 0.12s ease, color 0.12s ease;\n      }\n      .uc-ar-badge:hover { transform: translateY(-1px); }\n      .uc-ar-badge:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n      .uc-ar-badge.is-active {\n        background: color-mix(in srgb, var(--uc-ar-accent) 22%, transparent);\n        color: var(--uc-ar-accent);\n        box-shadow: 0 0 0 1px color-mix(in srgb, var(--uc-ar-accent) 45%, transparent);\n      }\n      .uc-ar-badge ha-icon { --mdc-icon-size: 20px; }\n\n      /* Pills (compact) */\n      .uc-ar-pills {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        align-items: stretch;\n        margin-top: 8px;\n      }\n      .uc-ar-pill {\n        border: none;\n        border-radius: 999px;\n        padding: 8px 12px;\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        cursor: pointer;\n        font-size: 0.82rem;\n        font-weight: 600;\n        background: color-mix(in srgb, var(--secondary-text-color) 10%, transparent);\n        color: var(--secondary-text-color);\n      }\n      .uc-ar-pill.is-active {\n        background: color-mix(in srgb, var(--uc-ar-accent) 18%, transparent);\n        color: var(--uc-ar-accent);\n      }\n      .uc-ar-pill ha-icon { --mdc-icon-size: 18px; }\n\n      /* Graph glow */\n      .uc-ar--graph {\n        padding: 14px 14px 12px 14px;\n        background: linear-gradient(180deg, color-mix(in srgb, var(--uc-ar-accent) 8%, var(--uc-pane-bg, var(--card-background-color))), var(--card-background-color));\n      }\n      .uc-ar-wave {\n        position: absolute;\n        inset: auto 0 0 0;\n        height: 80px;\n        width: 100%;\n        color: var(--uc-ar-accent);\n        pointer-events: none;\n      }\n      .uc-ar-graph-top {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        gap: 12px;\n        position: relative;\n        z-index: 1;\n      }\n      .uc-ar-graph-stats {\n        text-align: right;\n        font-weight: 700;\n        font-size: 1.1rem;\n      }\n      .uc-ar-graph-stats .dim {\n        display: block;\n        margin-top: 2px;\n        font-size: 0.8rem;\n        font-weight: 500;\n        color: var(--secondary-text-color);\n      }\n      .uc-ar-graph-bottom {\n        margin-top: 18px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 10px;\n        position: relative;\n        z-index: 1;\n      }\n      .uc-ar-graph-bottom > .uc-ar-badges {\n        flex: 1;\n        min-width: 0;\n      }\n      .uc-ar-graph-icon {\n        width: 52px;\n        height: 52px;\n        border-radius: var(--uc-r-16, 16px);\n        display: grid;\n        place-items: center;\n        color: #fff;\n        background: linear-gradient(135deg, var(--uc-ar-accent), color-mix(in srgb, var(--uc-ar-accent) 55%, #000));\n        box-shadow: 0 8px 22px color-mix(in srgb, var(--uc-ar-accent) 35%, transparent);\n      }\n      .uc-ar-graph-icon ha-icon { --mdc-icon-size: 28px; }\n\n      /* Compact */\n      .uc-ar--compact { padding: 12px 12px 10px 12px; }\n      .uc-ar-compact-grid {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 10px;\n      }\n      .uc-ar-compact-left { display: flex; gap: 10px; align-items: center; min-width: 0; }\n      .uc-ar-compact-icon {\n        width: 48px;\n        height: 48px;\n        border-radius: var(--uc-r-14, 14px);\n        background: color-mix(in srgb, var(--uc-ar-accent) 16%, var(--secondary-background-color));\n        color: var(--uc-ar-accent);\n        display: grid;\n        place-items: center;\n        flex-shrink: 0;\n      }\n      .uc-ar-compact-icon ha-icon { --mdc-icon-size: 26px; }\n      .uc-ar-compact-right { flex-shrink: 0; }\n\n      /* Photo overlay */\n      .uc-ar--photo {\n        min-height: 150px;\n        padding: 16px 14px 14px 14px;\n        color: #fff;\n        background-size: cover;\n        background-position: center;\n        background-color: #1e1e1e;\n      }\n      .uc-ar--photo .uc-ar-name { color: #fff; text-shadow: 0 2px 10px rgba(0,0,0,0.45); }\n      .uc-ar--photo .uc-ar-sub { color: rgba(255,255,255,0.88); text-shadow: 0 1px 8px rgba(0,0,0,0.45); }\n      .uc-ar-photo-top { position: relative; z-index: 1; }\n      .uc-ar-photo-bottom {\n        margin-top: 36px;\n        display: flex;\n        align-items: flex-end;\n        justify-content: space-between;\n        gap: 10px;\n        position: relative;\n        z-index: 1;\n      }\n      .uc-ar-photo-bottom > .uc-ar-badges {\n        flex: 1;\n        min-width: 0;\n      }\n      .uc-ar-photo-hero {\n        width: 56px;\n        height: 56px;\n        border-radius: var(--uc-r-18, 18px);\n        display: grid;\n        place-items: center;\n        background: color-mix(in srgb, var(--uc-ar-accent) 55%, transparent);\n        border: 1px solid rgba(255,255,255,0.25);\n        box-shadow: 0 10px 30px rgba(0,0,0,0.35);\n      }\n      .uc-ar-photo-hero ha-icon { --mdc-icon-size: 30px; color: #fff; }\n      .uc-ar--photo .uc-ar-badge {\n        background: rgba(255,255,255,0.12);\n        color: #fff;\n      }\n      .uc-ar--photo .uc-ar-badge.is-active {\n        background: color-mix(in srgb, var(--uc-ar-accent) 55%, transparent);\n        color: #fff;\n      }\n      .uc-ar--photo .uc-ar-badge-name {\n        color: rgba(255, 255, 255, 0.82);\n        text-shadow: 0 1px 6px rgba(0, 0, 0, 0.45);\n      }\n    `}requestUpdate(){"undefined"!=typeof window&&(window.dispatchEvent(new CustomEvent("ultra-card-update")),this.triggerPreviewUpdate())}}},8949(e,t,i){i.d(t,{N$:()=>c,mu:()=>s,z8:()=>a});const r={lights:!0,climate:!0,temperature:!0,humidity:!0,motion:!0,doors_windows:!0,media:!0,presence:!0,covers:!0,fans:!0,locks:!0,switches:!0};function a(e,t){const i=t.states[e],r=(null==i?void 0:i.attributes)||{},a=String(r.device_class||""),n=function(e){return e.includes(".")?e.split(".")[0]:""}(e);if("light"===n)return"lights";if("climate"===n)return"climate";if("media_player"===n)return"media";if("cover"===n)return"covers";if("fan"===n)return"fans";if("lock"===n)return"locks";if("switch"===n)return"switches";if("person"===n)return"presence";if("binary_sensor"===n){if("motion"===a||"occupancy"===a)return"motion";if("presence"===a)return"presence";if("door"===a||"window"===a||"garage_door"===a||"opening"===a)return"doors_windows"}if("sensor"===n){if("temperature"===a)return"temperature";if("humidity"===a)return"humidity"}return"other"}function n(e,t,i){const r=i.states[t],a=(null==r?void 0:r.attributes)||{},n="string"==typeof a.icon?a.icon:"";if(n)return n;switch(e){case"lights":return"mdi:lightbulb";case"climate":return"mdi:thermostat";case"temperature":return"mdi:thermometer";case"humidity":return"mdi:water-percent";case"motion":return"mdi:motion-sensor";case"doors_windows":return"mdi:door-sliding";case"media":return"mdi:cast-audio";case"presence":return"mdi:account";case"covers":return"mdi:window-shutter";case"fans":return"mdi:fan";case"locks":return"mdi:lock";case"switches":return"mdi:flash";default:return"mdi:help-circle-outline"}}const o=e=>{const t=String(e).toLowerCase();return"unavailable"===t||"unknown"===t};function s(e,t,i){const r=i.states[e];if(!r)return!1;const a=String(r.state).toLowerCase();if("unavailable"===a||"unknown"===a)return!1;switch(t){case"lights":case"switches":case"fans":return"on"===a||"open"===a;case"climate":return"off"!==a&&"idle"!==a;case"media":return"playing"===a||"paused"===a||"on"===a;case"motion":case"doors_windows":return"on"===a;case"locks":return"unlocked"===a||"open"===a;case"covers":return"open"===a||"opening"===a;case"presence":return"home"===a||"on"===a;default:return"off"!==a&&"closed"!==a&&"locked"!==a}}function c(e,t){return t?"doors_windows"===e?0:"locks"===e?1:"motion"===e?2:"lights"===e?3:"media"===e?4:"climate"===e?5:"fans"===e?6:"covers"===e?7:"switches"===e?8:50:80}const d=new class{constructor(){this.registryCache=null,this.registryTtlMs=45e3}async loadRegistries(e){const t=Date.now();if(this.registryCache&&t-this.registryCache.at<this.registryTtlMs)return{areas:this.registryCache.areas,devices:this.registryCache.devices,entities:this.registryCache.entities};const i=t=>e.callWS(t),[r,a,n]=await Promise.all([i({type:"config/area_registry/list"}),i({type:"config/device_registry/list"}),i({type:"config/entity_registry/list"})]);return this.registryCache={at:t,areas:r,devices:a,entities:n},{areas:r,devices:a,entities:n}}invalidateRegistryCache(){this.registryCache=null}async listAreas(e){const{areas:t}=await this.loadRegistries(e);return t.map(e=>({area_id:e.area_id,name:e.name||e.area_id})).sort((e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:"base"}))}async listEntityIdsInArea(e,t){if(!(null==t?void 0:t.trim()))return[];const{devices:i,entities:r}=await this.loadRegistries(e),a=new Set;for(const e of i)e.area_id===t&&a.add(e.id);const n=[];for(const i of r){if(i.disabled_by)continue;if(i.hidden_by)continue;const r=i.device_id&&a.has(i.device_id),o=i.area_id===t;(r||o)&&e.states[i.entity_id]&&n.push(i.entity_id)}return n}async resolveRoom(e,t){var i,d,l,u;const m=(t.area_id||"").trim(),p=(g=t.discovery,Object.assign(Object.assign({},r),g));var g;const h=new Set((t.hidden_entities||[]).map(e=>e.trim()).filter(Boolean)),_=(t.pinned_entities||[]).map(e=>e.trim()).filter(Boolean),y=(t.temperature_entity||"").trim(),v=(t.humidity_entity||"").trim();if(!m)return{area_id:"",area_name:"",lights_on:0,lights_total:0,light_entity_ids:[],all_quick_entities:[],pinned_entity_ids:[],quick_entities:[]};const{areas:b}=await this.loadRegistries(e),f=(null===(i=b.find(e=>e.area_id===m))||void 0===i?void 0:i.name)||m,x=await this.listEntityIdsInArea(e,m),k=new Set(_),w=[];for(const t of x){if(h.has(t))continue;const i=a(t,e);if(!k.has(t)){if("other"===i)continue;if(!1===p[i])continue}w.push({entity_id:t,role:i})}let $;for(const e of w)if("climate"===e.role){$=e.entity_id;break}const S=t=>{var i;const r=w.filter(e=>e.role===t),a=r.find(t=>{var i;return Number.isFinite(Number(null===(i=e.states[t.entity_id])||void 0===i?void 0:i.state))});return null===(i=null!=a?a:r[0])||void 0===i?void 0:i.entity_id};let C,q;C=y&&e.states[y]?y:S("temperature"),q=v&&e.states[v]?v:S("humidity");const P=$?e.states[$]:void 0,L=(null==P?void 0:P.attributes)||{};let M,U;if(C&&e.states[C]){const t=e.states[C],i=t.attributes||{};if("number"==typeof i.current_temperature)M=`${i.current_temperature}°`;else if(o(t.state))M=void 0;else{M=String(t.state);const e=i.unit_of_measurement;e&&!M.includes(String(e))&&(M=`${M} ${e}`)}}else P&&"number"==typeof L.current_temperature&&(M=`${L.current_temperature}°`);if(q&&e.states[q]){const t=e.states[q],i=t.attributes||{};if("number"==typeof i.current_humidity)U=`${i.current_humidity}%`;else if(o(t.state))U=void 0;else{U=String(t.state);const e=i.unit_of_measurement;e&&!U.includes(String(e))&&(U=`${U} ${e}`)}}else P&&"number"==typeof L.current_humidity&&(U=`${L.current_humidity}%`);let A=0,K=0;const z=[];for(const t of w)"lights"===t.role&&(z.push(t.entity_id),K+=1,s(t.entity_id,"lights",e)&&(A+=1));const R=new Map;for(const t of w){const i=s(t.entity_id,t.role,e);R.set(t.entity_id,{entity_id:t.entity_id,role:t.role,sort_bucket:c(t.role,i),active:i,icon:n(t.role,t.entity_id,e)})}for(const t of _){if(h.has(t))continue;if(R.has(t))continue;if(!e.states[t])continue;const i=a(t,e),r=s(t,i,e);R.set(t,{entity_id:t,role:i,sort_bucket:c(i,r),active:r,icon:n(i,t,e)})}const I=[...R.values()],F=new Map;_.forEach((e,t)=>F.set(e,t)),I.sort((e,t)=>{var i,r;const a=null!==(i=F.get(e.entity_id))&&void 0!==i?i:999,n=null!==(r=F.get(t.entity_id))&&void 0!==r?r:999;return a!==n?a-n:e.sort_bucket!==t.sort_bucket?e.sort_bucket-t.sort_bucket:e.active!==t.active?e.active?-1:1:e.entity_id.localeCompare(t.entity_id)});const D=Math.max(1,Math.min(12,null!==(d=t.max_quick_actions)&&void 0!==d?d:6)),j=I.slice(0,D),T=$||C||(null===(l=j.find(e=>"lights"===e.role))||void 0===l?void 0:l.entity_id)||(null===(u=j[0])||void 0===u?void 0:u.entity_id);return{area_id:m,area_name:f,climate_entity_id:$,temperature_entity_id:C,humidity_entity_id:q,temperature_label:M,humidity_label:U,lights_on:A,lights_total:K,light_entity_ids:z,all_quick_entities:I,pinned_entity_ids:_,quick_entities:j,primary_entity_id:T}}};i.d(t,["LH",0,d])},1299(e,t,i){i.d(t,{D:()=>o});var r=i(6752),a=i(7804),n=i(8504);const o=(0,a.u$)(class extends a.WL{constructor(){super(...arguments),this.key=r.s6}render(e,t){return this.key=e,t}update(e,[t,i]){return t!==this.key&&((0,n.mY)(e),this.key=t),i}})}};