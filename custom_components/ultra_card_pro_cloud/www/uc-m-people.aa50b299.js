export const __webpack_esm_ids__=[8684];export const __webpack_esm_modules__={4821(e,t,n){n.d(t,{UltraPeopleModule:()=>s});var a=n(2618),o=n(7475),i=n(9760),r=n(6478);n(7921);class s extends o.m{constructor(){super(...arguments),this.handlesOwnDesignStyles=!0,this.metadata={type:"people",title:"People",description:"Display person information with customizable data items",author:"WJD Designs",version:"1.0.0",icon:"mdi:account",category:"data",tags:["people","person","presence","location","avatar","user"]},this._draggedItemIndex=null,this._dragOverIndex=null}createDefault(e,t){return{id:e||this.generateId("people"),type:"people",person_entity:"",layout_style:"compact",data_items:[{id:this.generateId("item"),type:"location",show_icon:!0,show_label:!0,show_value:!0,icon:"mdi:map-marker",icon_color:"var(--primary-color)"}],avatar_settings:{size:80,border_width:3,border_color:"var(--primary-color)",show_status_badge:!0,status_badge_position:"bottom-right",status_badge_home_color:"#4CAF50",status_badge_away_color:"#FF5722",use_state_color:!0,state_home_color:"#4CAF50",state_away_color:"#FF5722",fallback_icon:"mdi:account",show_entity_picture:!0,image_fit:"cover"},banner_settings:{background_type:"gradient",gradient_start:"#667eea",gradient_end:"#764ba2",gradient_direction:"to-bottom-right",background_blur:0,background_opacity:100,overlay_opacity:30,banner_height:120},name_settings:{show:!0,use_friendly_name:!0,font_size:18,font_weight:"600",color:"var(--primary-text-color)",alignment:"center"},location_settings:{show:!0,show_icon:!0,icon:"mdi:map-marker",icon_color:"var(--secondary-text-color)",font_size:14,color:"var(--secondary-text-color)",show_duration:!1,duration_format:"relative"},gap:12,data_items_gap:8,data_items_direction:"column",alignment:"center",vertical_alignment:"center",header_show_badges:!0,header_badges_position:"top",music_show_progress:!0,music_show_album_art:!0,music_blur_background:!0,music_album_blur:5,music_album_opacity:75,tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}_getDataItemsForLayout(e,t){return e[`data_items_${t||e.layout_style}`]||e.data_items||[]}_setDataItemsForLayout(e,t,n){const a=`data_items_${e.layout_style}`;n({[a]:t})}renderGeneralTab(e,t,n,o){var i;const r=e,s=(null===(i=null==t?void 0:t.locale)||void 0===i?void 0:i.language)||"en";return a.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        <!-- Person Entity Selection -->
        ${this._renderPersonEntitySection(r,t,n,o,s)}

        <!-- Layout Style Selection -->
        ${this._renderLayoutStyleSection(r,t,o,s)}

        <!-- Avatar Settings -->
        ${this._renderAvatarSettingsSection(r,t,o,s)}

        <!-- Banner Settings (show only for banner layout) -->
        ${"banner"===r.layout_style?this._renderBannerSettingsSection(r,t,n,o,s):""}

        <!-- Music Settings (show only for music_overlay layout) -->
        ${"music_overlay"===r.layout_style?this._renderMusicSettingsSection(r,t,n,o,s):""}

        <!-- Name Settings -->
        ${this._renderNameSettingsSection(r,t,o,s)}

        <!-- Data Items Builder -->
        ${this._renderDataItemsBuilder(r,t,n,o,s)}

        <!-- Associated Entities (show for layouts that use them) -->
        ${["banner","music_overlay","horizontal_detailed"].includes(r.layout_style)?this._renderAssociatedEntitiesSection(r,t,n,o,s):""}

        <!-- Layout & Spacing -->
        ${this._renderLayoutSpacingSection(r,t,o,s)}
      </div>
    `}_renderPersonEntitySection(e,t,n,o,i){return a.qy`
      ${this.renderSettingsSection((0,r.kg)("editor.modules.people.person_entity",i,"Person Entity"),(0,r.kg)("editor.modules.people.person_entity_desc",i,"Select the person entity to display"),[])}
      <div style="margin-bottom: 24px;">
        ${this.renderEntityPickerWithVariables(t,n,"entity",e.person_entity||"",t=>{t!==e.person_entity&&(o({person_entity:t}),this.triggerPreviewUpdate())},["person"],(0,r.kg)("editor.modules.people.person",i,"Person"))}
      </div>
    `}_renderLayoutStyleSection(e,t,n,o){return a.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.modules.people.layout_style",o,"Layout Style")}
        </div>
        ${this.renderSegmentedField("",(0,r.kg)("editor.modules.people.layout_style_desc",o,"Choose how the person information is displayed"),e.layout_style,[{value:"compact",label:"Compact Card",icon:"mdi:card-account-details"},{value:"banner",label:"Banner",icon:"mdi:image-area"},{value:"horizontal_compact",label:"Horizontal Compact",icon:"mdi:view-sequential"},{value:"horizontal_detailed",label:"Horizontal Detailed",icon:"mdi:view-list"},{value:"header",label:"Header",icon:"mdi:page-layout-header"},{value:"music_overlay",label:"Music Overlay",icon:"mdi:music"}].map(e=>({value:e.value,label:e.label,icon:e.icon})),e=>{n({layout_style:e}),this.triggerPreviewUpdate()})}
      </div>
    `}_renderAvatarSettingsSection(e,t,n,o){var i,s;const l=e.avatar_settings||this.createDefault().avatar_settings,d=["banner","horizontal_detailed","header","music_overlay"].includes(e.layout_style),c=[{name:"show_avatar",label:(0,r.kg)("editor.modules.people.show_avatar",o,"Show Avatar"),selector:{boolean:{}}}];return d&&c.push({name:"show_location_badge",label:(0,r.kg)("editor.modules.people.show_location_badge",o,"Show Location Badge"),selector:{boolean:{}}},{name:"show_battery_badge",label:(0,r.kg)("editor.modules.people.show_battery_badge",o,"Show Battery Badge"),selector:{boolean:{}}}),a.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.modules.people.avatar_settings",o,"Avatar Settings")}
        </div>

        <!-- Element Visibility Toggles -->
        ${this.renderFieldSection((0,r.kg)("editor.modules.people.visibility",o,"Visibility"),"",t,Object.assign({show_avatar:!1!==e.show_avatar},d?{show_location_badge:!1!==e.show_location_badge,show_battery_badge:!1!==e.show_battery_badge}:{}),c,e=>{n(e.detail.value),this.triggerPreviewUpdate()})}

        <!-- Avatar Size -->
        ${this.renderSliderField((0,r.kg)("editor.modules.people.avatar_size",o,"Avatar Size"),"",null!==(i=l.size)&&void 0!==i?i:80,80,40,200,4,e=>{n({avatar_settings:Object.assign(Object.assign({},l),{size:e})}),this.triggerPreviewUpdate()},"px")}

        <!-- Border Width -->
        ${this.renderSliderField((0,r.kg)("editor.modules.people.border_width",o,"Border Width"),"",null!==(s=l.border_width)&&void 0!==s?s:3,3,0,10,1,e=>{n({avatar_settings:Object.assign(Object.assign({},l),{border_width:e})}),this.triggerPreviewUpdate()},"px")}

        <!-- Use State Color -->
        ${this.renderFieldSection((0,r.kg)("editor.modules.people.use_state_color",o,"Use State-Based Border Color"),(0,r.kg)("editor.modules.people.use_state_color_desc",o,"Change border color based on home/away status"),t,{use_state_color:!1!==l.use_state_color},[{name:"use_state_color",selector:{boolean:{}}}],e=>{n({avatar_settings:Object.assign(Object.assign({},l),{use_state_color:e.detail.value.use_state_color})}),this.triggerPreviewUpdate()})}

        ${l.use_state_color?a.qy`
              <div class="color-row">
                <div class="color-field">
                  <div class="field-title">
                    ${(0,r.kg)("editor.modules.people.home_color",o,"Home Color")}
                  </div>
                  <ultra-color-picker
                    .value=${l.state_home_color||"#4CAF50"}
                    .defaultValue=${"#4CAF50"}
                    .hass=${t}
                    @value-changed=${e=>{n({avatar_settings:Object.assign(Object.assign({},l),{state_home_color:e.detail.value})}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
                <div class="color-field">
                  <div class="field-title">
                    ${(0,r.kg)("editor.modules.people.away_color",o,"Away Color")}
                  </div>
                  <ultra-color-picker
                    .value=${l.state_away_color||"#FF5722"}
                    .defaultValue=${"#FF5722"}
                    .hass=${t}
                    @value-changed=${e=>{n({avatar_settings:Object.assign(Object.assign({},l),{state_away_color:e.detail.value})}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              </div>
            `:a.qy`
              <div class="field-container">
                <div class="field-title">
                  ${(0,r.kg)("editor.modules.people.border_color",o,"Border Color")}
                </div>
                <ultra-color-picker
                  .value=${l.border_color||"var(--primary-color)"}
                  .defaultValue=${"var(--primary-color)"}
                  .hass=${t}
                  @value-changed=${e=>{n({avatar_settings:Object.assign(Object.assign({},l),{border_color:e.detail.value})}),this.triggerPreviewUpdate()}}
                ></ultra-color-picker>
              </div>
            `}

        <!-- Status Badge -->
        ${this.renderFieldSection((0,r.kg)("editor.modules.people.show_status_badge",o,"Show Status Badge"),(0,r.kg)("editor.modules.people.show_status_badge_desc",o,"Show home/away indicator on avatar"),t,{show_status_badge:!1!==l.show_status_badge},[{name:"show_status_badge",selector:{boolean:{}}}],e=>{n({avatar_settings:Object.assign(Object.assign({},l),{show_status_badge:e.detail.value.show_status_badge})}),this.triggerPreviewUpdate()})}

        ${l.show_status_badge?this.renderSegmentedField((0,r.kg)("editor.modules.people.badge_position",o,"Badge Position"),"",l.status_badge_position||"bottom-right",[{value:"top-left",label:(0,r.kg)("editor.modules.people.badge_top_left",o,"Top Left"),icon:"mdi:arrow-top-left"},{value:"top-right",label:(0,r.kg)("editor.modules.people.badge_top_right",o,"Top Right"),icon:"mdi:arrow-top-right"},{value:"bottom-left",label:(0,r.kg)("editor.modules.people.badge_bottom_left",o,"Bottom Left"),icon:"mdi:arrow-bottom-left"},{value:"bottom-right",label:(0,r.kg)("editor.modules.people.badge_bottom_right",o,"Bottom Right"),icon:"mdi:arrow-bottom-right"}],e=>{n({avatar_settings:Object.assign(Object.assign({},l),{status_badge_position:e})}),this.triggerPreviewUpdate()}):""}
      </div>
    `}_renderBannerSettingsSection(e,t,n,o,i){var s,l,d,c,p,g,u,m,_,v,b;const h=e.banner_settings||this.createDefault().banner_settings;return a.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.modules.people.banner_settings",i,"Banner Settings")}
        </div>

        <!-- Background Type -->
        <div class="field-container">
          <div class="field-title">
            ${(0,r.kg)("editor.modules.people.background_type",i,"Background Type")}
          </div>
          <div class="button-group">
            ${["image","gradient","color","entity"].map(e=>a.qy`
                <button
                  class="option-btn ${h.background_type===e?"active":""}"
                  @click=${()=>{o({banner_settings:Object.assign(Object.assign({},h),{background_type:e})}),this.triggerPreviewUpdate()}}
                >
                  ${e.charAt(0).toUpperCase()+e.slice(1)}
                </button>
              `)}
          </div>
        </div>

        ${"image"===h.background_type?a.qy`
              <div class="field-container">
                <ha-form
                  .hass=${t}
                  .data=${{image:h.background_image||""}}
                  .schema=${[{name:"image",label:(0,r.kg)("editor.modules.people.background_image",i,"Image URL"),selector:{text:{}}}]}
                  .computeLabel=${e=>e.label}
                  @value-changed=${e=>{o({banner_settings:Object.assign(Object.assign({},h),{background_image:e.detail.value.image})}),this.triggerPreviewUpdate()}}
                ></ha-form>
              </div>
            `:""}
        ${"gradient"===h.background_type?a.qy`
              <div class="color-row">
                <div class="color-field">
                  <div class="field-title">Start Color</div>
                  <ultra-color-picker
                    .value=${h.gradient_start||"#667eea"}
                    .defaultValue=${"#667eea"}
                    .hass=${t}
                    @value-changed=${e=>{o({banner_settings:Object.assign(Object.assign({},h),{gradient_start:e.detail.value})}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
                <div class="color-field">
                  <div class="field-title">End Color</div>
                  <ultra-color-picker
                    .value=${h.gradient_end||"#764ba2"}
                    .defaultValue=${"#764ba2"}
                    .hass=${t}
                    @value-changed=${e=>{o({banner_settings:Object.assign(Object.assign({},h),{gradient_end:e.detail.value})}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              </div>
            `:""}
        ${"color"===h.background_type?a.qy`
              <div class="field-container">
                <div class="field-title">Background Color</div>
                <ultra-color-picker
                  .value=${h.background_color||"#667eea"}
                  .defaultValue=${"#667eea"}
                  .hass=${t}
                  @value-changed=${e=>{o({banner_settings:Object.assign(Object.assign({},h),{background_color:e.detail.value})}),this.triggerPreviewUpdate()}}
                ></ultra-color-picker>
              </div>
            `:""}
        ${"entity"===h.background_type?a.qy`
              <div class="field-container">
                ${this.renderEntityPickerWithVariables(t,n,"entity",h.background_entity||"",e=>{o({banner_settings:Object.assign(Object.assign({},h),{background_entity:e})}),this.triggerPreviewUpdate()},void 0,(0,r.kg)("editor.modules.people.background_entity",i,"Entity with Picture"))}
              </div>
            `:""}

        <!-- Banner Height -->
        ${this.renderSliderField((0,r.kg)("editor.modules.people.banner_height",i,"Banner Height"),"",null!==(s=h.banner_height)&&void 0!==s?s:120,120,60,300,10,e=>{o({banner_settings:Object.assign(Object.assign({},h),{banner_height:e})}),this.triggerPreviewUpdate()},"px")}

        <!-- Blur Amount -->
        ${this.renderSliderField((0,r.kg)("editor.modules.people.blur_amount",i,"Blur Amount"),"",null!==(l=h.background_blur)&&void 0!==l?l:0,0,0,20,1,e=>{o({banner_settings:Object.assign(Object.assign({},h),{background_blur:e})}),this.triggerPreviewUpdate()},"px")}

        <!-- Banner Border Radius -->
        <div class="field-container">
          <div class="field-title-row">
            <span class="field-title">
              ${(0,r.kg)("editor.modules.people.banner_border_radius",i,"Banner Border Radius")}
            </span>
            <button
              class="link-corners-btn ${!1!==h.corners_linked?"linked":""}"
              @click=${()=>{if(!1===h.corners_linked){const e=h.border_radius||0;o({banner_settings:Object.assign(Object.assign({},h),{corners_linked:!0,border_radius_top_left:e,border_radius_top_right:e,border_radius_bottom_left:e,border_radius_bottom_right:e})})}else o({banner_settings:Object.assign(Object.assign({},h),{corners_linked:!1})});this.triggerPreviewUpdate()}}
              title="${!1!==h.corners_linked?"Unlink corners":"Link all corners"}"
            >
              <ha-icon
                icon="${!1!==h.corners_linked?"mdi:link":"mdi:link-off"}"
              ></ha-icon>
            </button>
          </div>

          ${!1!==h.corners_linked?a.qy`
                <!-- All corners linked - single slider -->
                ${this.renderSliderField((0,r.kg)("editor.modules.people.border_radius",i,"Border Radius"),"",null!==(d=h.border_radius)&&void 0!==d?d:0,0,0,48,1,e=>{o({banner_settings:Object.assign(Object.assign({},h),{border_radius:e,border_radius_top_left:e,border_radius_top_right:e,border_radius_bottom_left:e,border_radius_bottom_right:e})}),this.triggerPreviewUpdate()},"px")}
              `:a.qy`
                <!-- Individual corner controls -->
                <div class="corner-radius-grid">
                  <!-- Top Left -->
                  <div class="corner-control top-left">
                    <span class="corner-label">TL</span>
                    <input
                      type="number"
                      class="corner-input"
                      min="0"
                      max="48"
                      value="${null!==(p=null!==(c=h.border_radius_top_left)&&void 0!==c?c:h.border_radius)&&void 0!==p?p:0}"
                      @input=${e=>{const t=Number(e.target.value);isNaN(t)||(o({banner_settings:Object.assign(Object.assign({},h),{border_radius_top_left:t})}),this.triggerPreviewUpdate())}}
                    />
                  </div>
                  <!-- Top Right -->
                  <div class="corner-control top-right">
                    <span class="corner-label">TR</span>
                    <input
                      type="number"
                      class="corner-input"
                      min="0"
                      max="48"
                      value="${null!==(u=null!==(g=h.border_radius_top_right)&&void 0!==g?g:h.border_radius)&&void 0!==u?u:0}"
                      @input=${e=>{const t=Number(e.target.value);isNaN(t)||(o({banner_settings:Object.assign(Object.assign({},h),{border_radius_top_right:t})}),this.triggerPreviewUpdate())}}
                    />
                  </div>
                  <!-- Bottom Left -->
                  <div class="corner-control bottom-left">
                    <span class="corner-label">BL</span>
                    <input
                      type="number"
                      class="corner-input"
                      min="0"
                      max="48"
                      value="${null!==(_=null!==(m=h.border_radius_bottom_left)&&void 0!==m?m:h.border_radius)&&void 0!==_?_:0}"
                      @input=${e=>{const t=Number(e.target.value);isNaN(t)||(o({banner_settings:Object.assign(Object.assign({},h),{border_radius_bottom_left:t})}),this.triggerPreviewUpdate())}}
                    />
                  </div>
                  <!-- Bottom Right -->
                  <div class="corner-control bottom-right">
                    <span class="corner-label">BR</span>
                    <input
                      type="number"
                      class="corner-input"
                      min="0"
                      max="48"
                      value="${null!==(b=null!==(v=h.border_radius_bottom_right)&&void 0!==v?v:h.border_radius)&&void 0!==b?b:0}"
                      @input=${e=>{const t=Number(e.target.value);isNaN(t)||(o({banner_settings:Object.assign(Object.assign({},h),{border_radius_bottom_right:t})}),this.triggerPreviewUpdate())}}
                    />
                  </div>
                </div>
              `}
        </div>
      </div>
    `}_renderMusicSettingsSection(e,t,n,o,i){var s,l;return a.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.modules.people.music_settings",i,"Music Settings")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
          ${(0,r.kg)("editor.modules.people.music_settings_desc",i,"Configure music/media display options")}
        </div>

        <!-- Music Toggles -->
        ${this.renderFieldSection((0,r.kg)("editor.modules.people.music_display",i,"Display Options"),"",t,{music_show_progress:!1!==e.music_show_progress,music_show_album_art:!1!==e.music_show_album_art,music_blur_background:!1!==e.music_blur_background},[{name:"music_show_progress",label:"Show Progress Bar",selector:{boolean:{}}},{name:"music_show_album_art",label:"Show Album Art",selector:{boolean:{}}},{name:"music_blur_background",label:"Blur Background",selector:{boolean:{}}}],e=>{o(e.detail.value),this.triggerPreviewUpdate()})}

        <!-- Album Art Blur Amount -->
        ${this.renderSliderField("Album Art Blur","",null!==(s=e.music_album_blur)&&void 0!==s?s:5,5,0,20,1,e=>{o({music_album_blur:e}),this.triggerPreviewUpdate()},"px")}

        <!-- Album Art Opacity -->
        ${this.renderSliderField("Album Art Opacity","",null!==(l=e.music_album_opacity)&&void 0!==l?l:75,75,0,100,5,e=>{o({music_album_opacity:e}),this.triggerPreviewUpdate()},"%")}

        <!-- Media Player Entity -->
        ${this.renderEntityPickerWithVariables(t,n,"entity",e.media_player_entity||"",e=>{o({media_player_entity:e}),this.triggerPreviewUpdate()},["media_player"],"Media Player Entity")}
      </div>
    `}_renderNameSettingsSection(e,t,n,o){var i;const s=e.name_settings||this.createDefault().name_settings;return a.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.modules.people.name_settings",o,"Name Settings")}
        </div>

        <!-- Show Name -->
        ${this.renderFieldSection((0,r.kg)("editor.modules.people.show_name",o,"Show Name"),"",t,{show_name:!1!==s.show},[{name:"show_name",selector:{boolean:{}}}],e=>{n({name_settings:Object.assign(Object.assign({},s),{show:e.detail.value.show_name})}),this.triggerPreviewUpdate()})}

        ${s.show?a.qy`
              <!-- Custom Name -->
              ${this.renderFieldSection((0,r.kg)("editor.modules.people.custom_name",o,"Custom Name"),(0,r.kg)("editor.modules.people.custom_name_desc",o,"Leave empty to use friendly name"),t,{custom_name:s.custom_name||""},[{name:"custom_name",selector:{text:{}}}],e=>{n({name_settings:Object.assign(Object.assign({},s),{custom_name:e.detail.value.custom_name})}),this.triggerPreviewUpdate()})}

              <!-- Font Size -->
              ${this.renderSliderField((0,r.kg)("editor.modules.people.name_font_size",o,"Font Size"),"",null!==(i=s.font_size)&&void 0!==i?i:18,18,12,36,1,e=>{n({name_settings:Object.assign(Object.assign({},s),{font_size:e})}),this.triggerPreviewUpdate()},"px")}

              <!-- Name Color -->
              <div class="field-container">
                <div class="field-title">
                  ${(0,r.kg)("editor.modules.people.name_color",o,"Name Color")}
                </div>
                <ultra-color-picker
                  .value=${s.color||"var(--primary-text-color)"}
                  .defaultValue=${"var(--primary-text-color)"}
                  .hass=${t}
                  @value-changed=${e=>{n({name_settings:Object.assign(Object.assign({},s),{color:e.detail.value})}),this.triggerPreviewUpdate()}}
                ></ultra-color-picker>
              </div>
            `:""}
      </div>
    `}_renderDataItemsBuilder(e,t,n,o,i){const s=this._getDataItemsForLayout(e);return a.qy`
      <div
        class="settings-section data-items-section"
        data-uc-role="pane"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.modules.people.data_items",i,"Data Items")}
          <span class="layout-badge">${e.layout_style}</span>
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
          ${(0,r.kg)("editor.modules.people.data_items_desc",i,"Drag to reorder, click to configure — items are saved per layout style")}
        </div>

        <!-- Data Items List -->
        <div class="data-items-list">
          ${s.map((a,r)=>this._renderDataItemRow(a,r,e,t,n,o,i))}
        </div>

        <!-- Add Data Item Button -->
        <div class="add-item-container">
          <div class="add-item-dropdown">
            ${this.renderUcForm(t,{_add_data_item:""},[{name:"_add_data_item",label:(0,r.kg)("editor.modules.people.add_data_item",i,"+ Add Data Item"),selector:{select:{mode:"dropdown",options:[{value:"location",label:(0,r.kg)("editor.modules.people.data_item.location",i,"Location")},{value:"battery",label:(0,r.kg)("editor.modules.people.data_item.battery",i,"Battery")},{value:"time_info",label:(0,r.kg)("editor.modules.people.data_item.time_info",i,"Time Info")},{value:"media",label:(0,r.kg)("editor.modules.people.data_item.media",i,"Media")},{value:"sensor",label:(0,r.kg)("editor.modules.people.data_item.sensor",i,"Sensor")},{value:"device_state",label:(0,r.kg)("editor.modules.people.data_item.device_state",i,"Device State")},{value:"attribute",label:(0,r.kg)("editor.modules.people.data_item.attribute",i,"Attribute")},{value:"toggle",label:(0,r.kg)("editor.modules.people.data_item.toggle",i,"Toggle")}]}}}],t=>{const n=t.detail.value._add_data_item;n&&this._addDataItem(e,n,o)},!0)}
          </div>
        </div>
      </div>
    `}_renderDataItemRow(e,t,n,o,i,r,s){return a.qy`
      <ha-expansion-panel
        .outlined=${!0}
        class="data-item-panel ${this._draggedItemIndex===t?"dragging":""} ${this._dragOverIndex===t?"drag-over":""}"
      >
        <div
          slot="header"
          class="data-item-header"
          draggable="true"
          @dragstart=${e=>this._onDataItemDragStart(e,t)}
          @dragover=${e=>this._onDataItemDragOver(e,t)}
          @dragend=${()=>this._onDataItemDragEnd()}
          @drop=${e=>this._onDataItemDrop(e,t,n,r)}
        >
          <div class="drag-handle" @click=${e=>e.stopPropagation()}>
            <ha-icon icon="mdi:drag"></ha-icon>
          </div>
          <div class="item-icon">
            <ha-icon icon="${e.icon||{location:"mdi:map-marker",battery:"mdi:battery",time_info:"mdi:clock-outline",media:"mdi:music",sensor:"mdi:gauge",device_state:"mdi:wifi",attribute:"mdi:code-tags",toggle:"mdi:toggle-switch"}[e.type]}"></ha-icon>
          </div>
          <div class="item-info">
            <div class="item-type">${{location:"Location",battery:"Battery",time_info:"Time Info",media:"Media",sensor:"Sensor",device_state:"Device State",attribute:"Attribute",toggle:"Toggle"}[e.type]}</div>
            <div class="item-label">${e.label||this._getDefaultItemLabel(e,o)}</div>
          </div>
          <button
            class="item-action-btn delete"
            @click=${e=>{e.stopPropagation(),this._removeDataItem(n,t,r)}}
            title="Delete"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
        <div class="data-item-content">
          ${this._renderDataItemConfig(e,t,n,o,r,s)}
        </div>
      </ha-expansion-panel>
    `}_renderDataItemConfig(e,t,n,o,i,r){var s,l;return a.qy`
      <!-- Type-specific settings (Entity first) -->
      ${this._renderTypeSpecificConfig(e,t,n,o,void 0,i,r)}

      <!-- Icon and Label settings -->
      <ha-form
        .hass=${o}
        .data=${{icon:e.icon||"",label:e.label||""}}
        .schema=${[{name:"icon",label:"Custom Icon",selector:{icon:{}}},{name:"label",label:"Custom Label",selector:{text:{}}}]}
        .computeLabel=${e=>e.label}
        @value-changed=${e=>{this._updateDataItem(n,t,e.detail.value,i)}}
      ></ha-form>

      <!-- Toggle switches -->
      <ha-form
        .hass=${o}
        .data=${{show_icon:!1!==e.show_icon,show_label:!0===e.show_label,show_value:!1!==e.show_value}}
        .schema=${[{name:"show_icon",label:"Show Icon",selector:{boolean:{}}},{name:"show_label",label:"Show Label",selector:{boolean:{}}},{name:"show_value",label:"Show Value",selector:{boolean:{}}}]}
        .computeLabel=${e=>e.label}
        @value-changed=${e=>{this._updateDataItem(n,t,e.detail.value,i)}}
      ></ha-form>

      <!-- Styling section -->
      <div class="styling-section">
        <div class="section-subtitle">Styling</div>

        <!-- Icon Color -->
        <div class="color-row">
          <span class="color-label">Icon Color</span>
          <ultra-color-picker
            .hass=${o}
            .value=${e.icon_color||"var(--secondary-text-color)"}
            @value-changed=${e=>{this._updateDataItem(n,t,{icon_color:e.detail.value},i)}}
          ></ultra-color-picker>
        </div>

        <!-- Value Color -->
        <div class="color-row">
          <span class="color-label">Value Color</span>
          <ultra-color-picker
            .hass=${o}
            .value=${e.value_color||"var(--primary-text-color)"}
            @value-changed=${e=>{this._updateDataItem(n,t,{value_color:e.detail.value},i)}}
          ></ultra-color-picker>
        </div>

        <!-- Label Color -->
        <div class="color-row">
          <span class="color-label">Label Color</span>
          <ultra-color-picker
            .hass=${o}
            .value=${e.label_color||"var(--secondary-text-color)"}
            @value-changed=${e=>{this._updateDataItem(n,t,{label_color:e.detail.value},i)}}
          ></ultra-color-picker>
        </div>

        <!-- Icon Size -->
        ${this.renderSliderField("Icon Size","",null!==(s=e.icon_size)&&void 0!==s?s:18,18,12,48,1,e=>{this._updateDataItem(n,t,{icon_size:e},i)},"px")}

        <!-- Font Size -->
        ${this.renderSliderField("Font Size","",null!==(l=e.font_size)&&void 0!==l?l:14,14,10,32,1,e=>{this._updateDataItem(n,t,{font_size:e},i)},"px")}
      </div>
    `}_renderTypeSpecificConfig(e,t,n,o,i,r,s){switch(e.type){case"sensor":case"device_state":case"toggle":return a.qy`
          <div class="config-row">
            ${this.renderEntityPickerWithVariables(o,i,"entity",e.entity||"",e=>this._updateDataItem(n,t,{entity:e},r),void 0,"Entity")}
          </div>
        `;case"attribute":return a.qy`
          <div class="config-row">
            ${this.renderEntityPickerWithVariables(o,i,"entity",e.entity||"",e=>this._updateDataItem(n,t,{entity:e},r),void 0,"Entity")}
            ${this.renderFieldSection("Attribute Name","",o,{attribute:e.attribute||""},[{name:"attribute",selector:{text:{}}}],e=>this._updateDataItem(n,t,e.detail.value,r))}
          </div>
        `;case"time_info":return a.qy`
          <div class="config-row">
            <ha-form
              .hass=${o}
              .data=${{time_format:e.time_format||"relative"}}
              .schema=${[{name:"time_format",label:"Time Format",selector:{select:{options:[{value:"relative",label:"Relative (e.g., 2 hours ago)"},{value:"absolute",label:"Absolute (e.g., 2:30 PM)"},{value:"duration",label:"Duration (e.g., 2h 30m)"}]}}}]}
              .computeLabel=${e=>e.label}
              @value-changed=${e=>{this._updateDataItem(n,t,e.detail.value,r)}}
            ></ha-form>
          </div>
        `;default:return a.qy``}}_onDataItemDragStart(e,t){this._draggedItemIndex=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",String(t)))}_onDataItemDragOver(e,t){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._dragOverIndex=t}_onDataItemDragEnd(){this._draggedItemIndex=null,this._dragOverIndex=null}_onDataItemDrop(e,t,n,a){e.preventDefault();const o=this._draggedItemIndex;if(null===o||o===t)return void this._onDataItemDragEnd();const i=[...this._getDataItemsForLayout(n)],[r]=i.splice(o,1);i.splice(t,0,r),this._setDataItemsForLayout(n,i,a),this.triggerPreviewUpdate(),this._onDataItemDragEnd()}_addDataItem(e,t,n){const a={id:this.generateId("item"),type:t,show_icon:!0,show_label:!0,show_value:!0,icon:{location:"mdi:map-marker",battery:"mdi:battery",time_info:"mdi:clock-outline",media:"mdi:music",sensor:"mdi:gauge",device_state:"mdi:wifi",attribute:"mdi:code-tags",toggle:"mdi:toggle-switch"}[t]},o=[...this._getDataItemsForLayout(e),a];this._setDataItemsForLayout(e,o,n),this.triggerPreviewUpdate()}_removeDataItem(e,t,n){const a=[...this._getDataItemsForLayout(e)];a.splice(t,1),this._setDataItemsForLayout(e,a,n),this.triggerPreviewUpdate()}_updateDataItem(e,t,n,a){const o=[...this._getDataItemsForLayout(e)];o[t]=Object.assign(Object.assign({},o[t]),n),this._setDataItemsForLayout(e,o,a),this.triggerPreviewUpdate()}_getDefaultItemLabel(e,t){var n;if(e.entity){const a=t.states[e.entity];return(null===(n=null==a?void 0:a.attributes)||void 0===n?void 0:n.friendly_name)||e.entity}return{location:"Location",battery:"Battery",time_info:"At location",media:"Now playing",sensor:"Sensor",device_state:"Device",attribute:"Attribute",toggle:"Toggle"}[e.type]}_renderAssociatedEntitiesSection(e,t,n,o,i){return a.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.modules.people.associated_entities",i,"Associated Entities")}
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
          ${(0,r.kg)("editor.modules.people.associated_entities_desc",i,"Link additional entities for battery and media display")}
        </div>

        <div class="field-container">
          ${this.renderEntityPickerWithVariables(t,n,"battery_entity",e.battery_entity||"",e=>{o({battery_entity:e}),this.triggerPreviewUpdate()},["sensor","device_tracker"],(0,r.kg)("editor.modules.people.battery_entity",i,"Battery Entity"))}
          ${this.renderEntityPickerWithVariables(t,n,"media_player_entity",e.media_player_entity||"",e=>{o({media_player_entity:e}),this.triggerPreviewUpdate()},["media_player"],(0,r.kg)("editor.modules.people.media_player",i,"Media Player"))}
        </div>
      </div>
    `}_renderLayoutSpacingSection(e,t,n,o){var i,s,l;return a.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ${(0,r.kg)("editor.modules.people.layout_spacing",o,"Layout & Spacing")}
        </div>

        <!-- Gap -->
        ${this.renderSliderField((0,r.kg)("editor.modules.people.gap",o,"Gap"),"",null!==(i=e.gap)&&void 0!==i?i:12,12,0,48,2,e=>{n({gap:e}),this.triggerPreviewUpdate()},"px")}

        ${"horizontal_detailed"!==e.layout_style&&"music_overlay"!==e.layout_style?a.qy`
              <!-- Data Items Gap -->
              ${this.renderSliderField((0,r.kg)("editor.modules.people.data_items_gap",o,"Data Items Gap"),"",null!==(s=e.data_items_gap)&&void 0!==s?s:8,8,0,32,2,e=>{n({data_items_gap:e}),this.triggerPreviewUpdate()},"px")}

              <!-- Data Area Height -->
              ${this.renderSliderField((0,r.kg)("editor.modules.people.data_area_height",o,"Data Area Height"),"Set to 0 for auto height",null!==(l=e.data_area_height)&&void 0!==l?l:0,0,0,200,4,e=>{n({data_area_height:e}),this.triggerPreviewUpdate()},"px")}

              <!-- Data Items Direction -->
              ${this.renderSegmentedField((0,r.kg)("editor.modules.people.data_items_direction",o,"Data Items Direction"),"",e.data_items_direction||"row",[{value:"row",label:(0,r.kg)("editor.modules.people.direction_row",o,"Row"),icon:"mdi:arrow-right"},{value:"column",label:(0,r.kg)("editor.modules.people.direction_column",o,"Column"),icon:"mdi:arrow-down"}],e=>{n({data_items_direction:e}),this.triggerPreviewUpdate()})}
            `:""}

        <!-- Alignment - only for compact and banner layouts -->
        ${"compact"===e.layout_style||"banner"===e.layout_style?this.renderSegmentedField((0,r.kg)("editor.modules.people.alignment",o,"Alignment"),"",e.alignment||"center",[{value:"left",label:(0,r.kg)("editor.modules.people.align_left",o,"Left"),icon:"mdi:format-align-left"},{value:"center",label:(0,r.kg)("editor.modules.people.align_center",o,"Center"),icon:"mdi:format-align-center"},{value:"right",label:(0,r.kg)("editor.modules.people.align_right",o,"Right"),icon:"mdi:format-align-right"}],e=>{n({alignment:e}),this.triggerPreviewUpdate()}):""}
      </div>
    `}renderPreview(e,t,n,a){var o;const i=e,s=(null===(o=null==t?void 0:t.locale)||void 0===o?void 0:o.language)||"en";if(!i.person_entity)return this.renderGradientErrorState((0,r.kg)("editor.people.error_no_entity",s,"Select Person Entity"),(0,r.kg)("editor.people.error_no_entity_desc",s,"Choose a person entity in the General tab"));const l=t.states[i.person_entity];if(!l)return this.renderGradientErrorState((0,r.kg)("editor.people.error_not_found",s,"Entity Not Found"),i.person_entity);const d=this.createGestureHandlers(i.id,{tap_action:i.tap_action,hold_action:i.hold_action,double_tap_action:i.double_tap_action,entity:i.person_entity,module:i},t,n);let c;switch(i.layout_style){case"banner":c=this._renderBannerLayout(i,t,l,d,n);break;case"horizontal_compact":c=this._renderHorizontalCompactLayout(i,t,l,d,n);break;case"horizontal_detailed":c=this._renderHorizontalDetailedLayout(i,t,l,d,n);break;case"header":c=this._renderHeaderLayout(i,t,l,d,n);break;case"music_overlay":c=this._renderMusicOverlayLayout(i,t,l,d,n);break;default:c=this._renderCompactLayout(i,t,l,d,n)}return this.wrapWithAnimation(c,i,t)}_renderCompactLayout(e,t,n,o,i){const r=e.name_settings,s="home"===n.state,l=this.buildDesignStyles(e,t),d=this.getHoverEffectClass(e);return a.qy`
      <style>
        ${this._getPreviewStyles()}
      </style>
      <div
        class="people-module people-module--compact ${d}"
        style="gap: ${e.gap}px; align-items: ${e.alignment}; ${this.buildStyleString(l)}"
        @pointerdown=${o.onPointerDown}
        @pointermove=${o.onPointerMove}
        @pointerup=${o.onPointerUp}
        @pointerleave=${o.onPointerLeave}
        @pointercancel=${o.onPointerCancel}
      >
        ${!1!==e.show_avatar?this._renderAvatar(e,t,n,s):""}
        ${r.show?this._renderName(e,t,n):""}
        ${this._renderDataItems(e,t,n,i)}
      </div>
    `}_renderBannerLayout(e,t,n,o,i){var r,s,l,d;const c=e.banner_settings||this.createDefault().banner_settings,p="home"===n.state,g=this._getBannerBackground(c,t),u=c.border_radius||0,m=null!==(r=c.border_radius_top_left)&&void 0!==r?r:u,_=null!==(s=c.border_radius_top_right)&&void 0!==s?s:u,v=null!==(l=c.border_radius_bottom_left)&&void 0!==l?l:0,b=`${m}px ${_}px ${null!==(d=c.border_radius_bottom_right)&&void 0!==d?d:0}px ${v}px`,h=this.buildDesignStyles(e,t),y=this.getHoverEffectClass(e);return a.qy`
      <style>
        ${this._getPreviewStyles()}
      </style>
      <div
        class="people-module people-module--banner ${y}"
        style="border-radius: ${b}; ${this.buildStyleString(h)}"
        @pointerdown=${o.onPointerDown}
        @pointermove=${o.onPointerMove}
        @pointerup=${o.onPointerUp}
        @pointerleave=${o.onPointerLeave}
        @pointercancel=${o.onPointerCancel}
      >
        <div
          class="people-banner"
          style="
            ${g}
            height: ${c.banner_height||120}px;
            filter: blur(${c.background_blur||0}px);
          "
        ></div>
        ${c.overlay_color?a.qy`<div
              class="people-banner-overlay"
              style="background: ${c.overlay_color}; opacity: ${(c.overlay_opacity||30)/100};"
            ></div>`:""}
        <div class="people-banner-content" style="gap: ${e.gap}px;">
          <div class="people-banner-side">
            ${!1!==e.show_location_badge?this._renderLocationBadge(e,t,n):""}
          </div>
          ${!1!==e.show_avatar?this._renderAvatar(e,t,n,p):""}
          <div class="people-banner-side">
            ${!1!==e.show_battery_badge?this._renderBatteryBadge(e,t):""}
          </div>
        </div>
        <div class="people-banner-info" style="text-align: ${e.alignment};">
          ${e.name_settings.show?this._renderName(e,t,n):""}
          ${this._renderDataItems(e,t,n,i)}
        </div>
      </div>
    `}_renderHorizontalCompactLayout(e,t,n,o,i){const r="home"===n.state,s=this.buildDesignStyles(e,t),l=this.getHoverEffectClass(e);return a.qy`
      <style>
        ${this._getPreviewStyles()}
      </style>
      <div
        class="people-module people-module--horizontal-compact ${l}"
        style="gap: ${e.gap}px; ${this.buildStyleString(s)}"
        @pointerdown=${o.onPointerDown}
        @pointermove=${o.onPointerMove}
        @pointerup=${o.onPointerUp}
        @pointerleave=${o.onPointerLeave}
        @pointercancel=${o.onPointerCancel}
      >
        ${!1!==e.show_avatar?this._renderAvatar(e,t,n,r):""}
        <div class="people-info-column">
          <div class="people-info-header">
            ${e.name_settings.show?this._renderName(e,t,n):""}
          </div>
          ${this._renderDataItems(e,t,n,i)}
        </div>
      </div>
    `}_renderHorizontalDetailedLayout(e,t,n,o,i){const r="home"===n.state,s=this.buildDesignStyles(e,t),l=this.getHoverEffectClass(e);return a.qy`
      <style>
        ${this._getPreviewStyles()}
      </style>
      <div
        class="people-module people-module--horizontal-detailed ${l}"
        style="gap: ${e.gap}px; ${this.buildStyleString(s)}"
        @pointerdown=${o.onPointerDown}
        @pointermove=${o.onPointerMove}
        @pointerup=${o.onPointerUp}
        @pointerleave=${o.onPointerLeave}
        @pointercancel=${o.onPointerCancel}
      >
        ${!1!==e.show_avatar?this._renderAvatar(e,t,n,r):""}
        <div class="people-detailed-info">
          ${e.name_settings.show||!1!==e.show_location_badge?a.qy`
                <div class="people-detailed-header">
                  ${e.name_settings.show?this._renderName(e,t,n):""}
                  ${!1!==e.show_location_badge?this._renderLocationBadge(e,t,n):""}
                </div>
              `:""}
          <div class="people-detailed-items">
            ${this._renderDataItemsList(e,t,n,i)}
          </div>
        </div>
      </div>
    `}_renderHeaderLayout(e,t,n,o,i){const r="home"===n.state,s=this.buildDesignStyles(e,t),l=this.getHoverEffectClass(e);return a.qy`
      <style>
        ${this._getPreviewStyles()}
      </style>
      <div
        class="people-module people-module--header ${l}"
        style="${this.buildStyleString(s)}"
        @pointerdown=${o.onPointerDown}
        @pointermove=${o.onPointerMove}
        @pointerup=${o.onPointerUp}
        @pointerleave=${o.onPointerLeave}
        @pointercancel=${o.onPointerCancel}
      >
        ${e.header_show_badges&&"top"===e.header_badges_position?a.qy`<div class="people-header-badges">
              ${this._renderHeaderBadges(e,t,n)}
            </div>`:""}
        <div class="people-header-main" style="gap: ${e.gap}px;">
          ${!1!==e.show_avatar?this._renderAvatar(e,t,n,r):""}
          <div class="people-header-info">
            ${e.name_settings.show?this._renderName(e,t,n):""}
            ${!1===e.show_location_badge||e.header_show_badges?"":this._renderLocationText(e,t,n)}
          </div>
        </div>
        ${e.header_show_badges&&"bottom"===e.header_badges_position?a.qy`<div class="people-header-badges">
              ${this._renderHeaderBadges(e,t,n)}
            </div>`:""}
        <div class="people-header-items" style="gap: ${e.data_items_gap}px;">
          ${this._renderDataItems(e,t,n,i)}
        </div>
      </div>
    `}_renderMusicOverlayLayout(e,t,n,o,i){var r,s,l;const d="home"===n.state,c=e.media_player_entity?t.states[e.media_player_entity]:null,p="playing"===(null==c?void 0:c.state),g=null===(r=null==c?void 0:c.attributes)||void 0===r?void 0:r.entity_picture,u=this.buildDesignStyles(e,t),m=this.getHoverEffectClass(e);return a.qy`
      <style>
        ${this._getPreviewStyles()}
      </style>
      <div
        class="people-module people-module--music-overlay ${p?"playing":""} ${m}"
        style="${this.buildStyleString(u)}"
        @pointerdown=${o.onPointerDown}
        @pointermove=${o.onPointerMove}
        @pointerup=${o.onPointerUp}
        @pointerleave=${o.onPointerLeave}
        @pointercancel=${o.onPointerCancel}
      >
        ${!1!==e.music_blur_background&&g?a.qy`<div
              class="people-music-blur-bg"
              style="background-image: url(${this._resolveEntityPicture(g,t)}); filter: blur(${null!==(s=e.music_album_blur)&&void 0!==s?s:8}px); opacity: ${(null!==(l=e.music_album_opacity)&&void 0!==l?l:75)/100};"
            ></div>`:""}
        <div class="people-music-header">
          ${this._renderHeaderBadges(e,t,n)}
        </div>
        <div class="people-music-content" style="gap: ${e.gap}px;">
          ${!1!==e.show_avatar?this._renderAvatar(e,t,n,d):""}
          ${p&&c?this._renderMusicInfo(e,c,t):e.name_settings.show?this._renderName(e,t,n):""}
        </div>
        ${p&&e.music_show_progress&&c?this._renderMusicProgress(c):""}
      </div>
    `}_renderAvatar(e,t,n,o){var i;const r=e.avatar_settings,s=null===(i=n.attributes)||void 0===i?void 0:i.entity_picture,l=r.use_state_color?o?r.state_home_color:r.state_away_color:r.border_color,d=r.custom_image||(r.show_entity_picture&&s?this._resolveEntityPicture(s,t):null);return a.qy`
      <div
        class="people-avatar"
        style="
          width: ${r.size}px;
          height: ${r.size}px;
          border: ${r.border_width}px solid ${l};
        "
      >
        ${d?a.qy`<img
              src="${d}"
              alt="Avatar"
              style="object-fit: ${r.image_fit||"cover"}"
            />`:a.qy`<ha-icon
              icon="${r.fallback_icon||"mdi:account"}"
              style="--mdc-icon-size: ${.6*r.size}px;"
            ></ha-icon>`}
        ${r.show_status_badge?a.qy`
              <div
                class="people-avatar-badge people-avatar-badge--${r.status_badge_position}"
                style="background: ${o?r.status_badge_home_color:r.status_badge_away_color};"
              >
                <ha-icon icon="${o?"mdi:home":"mdi:walk"}"></ha-icon>
              </div>
            `:""}
      </div>
    `}_renderName(e,t,n){var o;const i=e.name_settings,r=i.custom_name||(i.use_friendly_name?null===(o=n.attributes)||void 0===o?void 0:o.friendly_name:n.entity_id.split(".")[1]);return a.qy`
      <div
        class="people-name"
        style="
          font-size: ${i.font_size}px;
          font-weight: ${i.font_weight};
          color: ${i.color||"var(--primary-text-color)"};
          text-align: ${i.alignment||"center"};
        "
      >
        ${r}
      </div>
    `}_renderDataItems(e,t,n,o){const i=this._getDataItemsForLayout(e);if(!i||0===i.length)return a.qy``;const r=e.data_area_height?`height: ${e.data_area_height}px; overflow-y: auto;`:"";return a.qy`
      <div
        class="people-data-items people-data-items--${e.data_items_direction}"
        style="gap: ${e.data_items_gap}px; ${r}"
      >
        ${i.map(a=>this._renderDataItem(a,e,t,n,o))}
      </div>
    `}_renderDataItemsList(e,t,n,o){const i=this._getDataItemsForLayout(e);return i&&0!==i.length?a.qy`
      <div class="people-data-list">
        ${i.map(a=>this._renderDataItemRow_Preview(a,e,t,n,o))}
      </div>
    `:a.qy``}_renderDataItem(e,t,n,o,i){const r=this._getDataItemValue(e,t,n,o),s=e.icon||this._getDefaultItemIcon(e.type),l=this._getDefaultItemLabel(e,n),d=e.label||l,c=!1!==e.show_icon,p=!0===e.show_label,g=!1!==e.show_value;return a.qy`
      <div class="people-data-item" style="font-size: ${e.font_size||14}px;">
        ${c?a.qy`<ha-icon
              icon="${s}"
              style="color: ${e.icon_color||"var(--secondary-text-color)"}; --mdc-icon-size: ${e.icon_size||18}px;"
            ></ha-icon>`:""}
        ${p?a.qy`<span
              class="people-data-item-label"
              style="color: ${e.label_color||"var(--secondary-text-color)"}"
              >${d}:</span
            >`:""}
        ${g?a.qy`<span
              class="people-data-item-value"
              style="color: ${e.value_color||"var(--primary-text-color)"}"
              >${r||"N/A"}</span
            >`:""}
      </div>
    `}_renderDataItemRow_Preview(e,t,n,o,i){var r;const s=this._getDataItemValue(e,t,n,o),l=e.icon||this._getDefaultItemIcon(e.type);if("toggle"===e.type&&e.entity){const t=n.states[e.entity],o="on"===(null==t?void 0:t.state);return a.qy`
        <div class="people-data-row">
          <div class="people-data-row-left">
            ${!1!==e.show_icon?a.qy`<ha-icon
                  icon="${l}"
                  style="color: ${e.icon_color||"var(--secondary-text-color)"};"
                ></ha-icon>`:""}
            <span>${e.label||(null===(r=null==t?void 0:t.attributes)||void 0===r?void 0:r.friendly_name)||"Toggle"}</span>
          </div>
          <ha-switch
            .checked=${o}
            @change=${t=>{t.stopPropagation();const a=o?"turn_off":"turn_on";n.callService("homeassistant",a,{entity_id:e.entity})}}
          ></ha-switch>
        </div>
      `}return a.qy`
      <div class="people-data-row">
        <div class="people-data-row-left">
          ${!1!==e.show_icon?a.qy`<ha-icon
                icon="${l}"
                style="color: ${e.icon_color||"var(--secondary-text-color)"};"
              ></ha-icon>`:""}
          ${!1!==e.show_label?a.qy`<span>${e.label||this._getDefaultItemLabel(e,n)}</span>`:""}
        </div>
        ${!1!==e.show_value?a.qy`<span class="people-data-row-value">${s||"N/A"}</span>`:""}
      </div>
    `}_renderLocationBadge(e,t,n){const o=this._formatLocation(n.state),i=e.location_settings;return a.qy`
      <div class="people-location-badge">
        ${i.show_icon?a.qy`<ha-icon
              icon="${i.icon||"mdi:map-marker"}"
              style="color: ${i.icon_color||"var(--secondary-text-color)"};"
            ></ha-icon>`:""}
        <span style="color: ${i.color||"var(--secondary-text-color)"};"
          >${o}</span
        >
      </div>
    `}_renderLocationText(e,t,n){const o=this._formatLocation(n.state),i=e.location_settings;return i.show?a.qy`
      <div
        class="people-location-text"
        style="font-size: ${i.font_size}px; color: ${i.color||"var(--secondary-text-color)"};"
      >
        ${o} ${i.show_duration?this._renderDurationText(n):""}
      </div>
    `:a.qy``}_renderDurationText(e){const t=new Date(e.last_changed),n=(new Date).getTime()-t.getTime(),o=Math.floor(n/6e4),i=Math.floor(o/60);let r="";return r=i>0?`for ${i}h ${o%60}m`:o>0?`for ${o}m`:"just arrived",a.qy`<span class="people-duration">${r}</span>`}_renderBatteryBadge(e,t){var n,o,i,r;if(!e.battery_entity)return a.qy``;const s=t.states[e.battery_entity];if(!s)return a.qy``;const l=null!==(r=null!==(o=null===(n=s.attributes)||void 0===n?void 0:n.battery_level)&&void 0!==o?o:null===(i=s.attributes)||void 0===i?void 0:i.battery)&&void 0!==r?r:parseFloat(s.state);if(isNaN(l))return a.qy``;const d=this._getBatteryIcon(l),c=this._getBatteryColor(l);return a.qy`
      <div class="people-battery-badge" style="color: ${c};">
        <ha-icon icon="${d}"></ha-icon>
        <span>${Math.round(l)}%</span>
      </div>
    `}_renderHeaderBadges(e,t,n){const o="home"===n.state,i=!1!==e.show_location_badge,r=!1!==e.show_battery_badge&&e.battery_entity;return i||r?a.qy`
      <div class="people-header-badges-row">
        ${i?a.qy`<div class="people-badge ${o?"home":"away"}">
              <ha-icon icon="${o?"mdi:home":"mdi:walk"}"></ha-icon>
            </div>`:""}
        ${r?this._renderBatteryBadge(e,t):""}
      </div>
    `:a.qy``}_renderMusicInfo(e,t,n){var o,i;const r=(null===(o=t.attributes)||void 0===o?void 0:o.media_title)||"Unknown",s=(null===(i=t.attributes)||void 0===i?void 0:i.media_artist)||"";return a.qy`
      <div class="people-music-info">
        <ha-icon icon="mdi:music-note"></ha-icon>
        <div class="people-music-text">
          <span class="people-music-title">${r}</span>
          ${s?a.qy`<span class="people-music-artist">${s}</span>`:""}
        </div>
      </div>
    `}_renderMusicProgress(e){var t,n;const o=((null===(t=e.attributes)||void 0===t?void 0:t.media_position)||0)/((null===(n=e.attributes)||void 0===n?void 0:n.media_duration)||100)*100;return a.qy`
      <div class="people-music-progress">
        <div class="people-music-progress-bar" style="width: ${o}%;"></div>
      </div>
    `}_getDataItemValue(e,t,n,a){var o,r,s,l,d,c,p;switch(e.type){case"location":return this._formatLocation(a.state);case"battery":if(!t.battery_entity)return"N/A";const g=n.states[t.battery_entity];if(!g)return"N/A";const u=null!==(l=null!==(r=null===(o=g.attributes)||void 0===o?void 0:o.battery_level)&&void 0!==r?r:null===(s=g.attributes)||void 0===s?void 0:s.battery)&&void 0!==l?l:g.state;return`${Math.round(parseFloat(u))}%`;case"time_info":return this._formatTimeInfo(a,e.time_format||"relative");case"media":if(!t.media_player_entity)return"N/A";const m=n.states[t.media_player_entity];if(!m||"playing"!==m.state)return"Not playing";const _=(null===(d=m.attributes)||void 0===d?void 0:d.media_title)||"Unknown",v=null===(c=m.attributes)||void 0===c?void 0:c.media_artist;return v?`${_} - ${v}`:_;case"sensor":case"device_state":return e.entity&&n.states[e.entity]?(0,i.formatEntityState)(n,e.entity):"N/A";case"attribute":if(!e.entity||!e.attribute)return"N/A";const b=n.states[e.entity];if(!b)return"N/A";const h=null===(p=b.attributes)||void 0===p?void 0:p[e.attribute];return void 0!==h?String(h):"N/A";case"toggle":if(!e.entity)return"N/A";const y=n.states[e.entity];return y?y.state:"N/A";default:return"N/A"}}_getDefaultItemIcon(e){return{location:"mdi:map-marker",battery:"mdi:battery",time_info:"mdi:clock-outline",media:"mdi:music",sensor:"mdi:gauge",device_state:"mdi:wifi",attribute:"mdi:code-tags",toggle:"mdi:toggle-switch"}[e]}_formatLocation(e){return"home"===e?"Home":"not_home"===e?"Away":e.charAt(0).toUpperCase()+e.slice(1).replace(/_/g," ")}_formatTimeInfo(e,t){const n=new Date(e.last_changed),a=new Date;switch(t){case"absolute":return n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});case"duration":{const e=a.getTime()-n.getTime(),t=Math.floor(e/6e4),o=Math.floor(t/60);return o>0?`${o}h ${t%60}m`:`${t}m`}default:{const e=a.getTime()-n.getTime(),t=Math.floor(e/6e4),o=Math.floor(t/60);if(o>24){const e=Math.floor(o/24);return`${e} day${e>1?"s":""} ago`}return o>0?`${o} hour${o>1?"s":""} ago`:t>0?`${t} minute${t>1?"s":""} ago`:"Just now"}}}_getBatteryIcon(e){return e>=90?"mdi:battery":e>=80?"mdi:battery-90":e>=70?"mdi:battery-80":e>=60?"mdi:battery-70":e>=50?"mdi:battery-60":e>=40?"mdi:battery-50":e>=30?"mdi:battery-40":e>=20?"mdi:battery-30":e>=10?"mdi:battery-20":"mdi:battery-10"}_getBatteryColor(e){return e>=50?"#4CAF50":e>=20?"#FF9800":"#F44336"}_getBannerBackground(e,t){var n;switch(e.background_type){case"image":return`background-image: url(${e.background_image}); background-size: cover; background-position: center;`;case"gradient":return`background: linear-gradient(${(e.gradient_direction||"to-bottom-right").replace("to-","to ").replace("-"," ")}, ${e.gradient_start}, ${e.gradient_end});`;case"color":return`background: ${e.background_color};`;case"entity":if(e.background_entity){const a=t.states[e.background_entity],o=null===(n=null==a?void 0:a.attributes)||void 0===n?void 0:n.entity_picture;if(o)return`background-image: url(${this._resolveEntityPicture(o,t)}); background-size: cover; background-position: center;`}return"background: var(--primary-color);";default:return""}}_resolveEntityPicture(e,t){return e?e.startsWith("http")||e.startsWith("data:")?e:e.startsWith("/")?`${(t.hassUrl?t.hassUrl():"").replace(/\/$/,"")}${e}`:e:""}validate(e){const t=[],n=e;return n.person_entity||t.push("Person entity is required"),["compact","banner","horizontal_compact","horizontal_detailed","header","music_overlay"].includes(n.layout_style)||t.push("Invalid layout style"),{valid:0===t.length,errors:t}}getStyles(){return`\n      ${o.m.getSliderStyles()}\n\n      .layout-style-grid {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 8px;\n      }\n\n      .layout-style-option {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 4px;\n        padding: 12px 8px;\n        border: 2px solid var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        cursor: pointer;\n        transition: all 0.2s ease;\n      }\n\n      .layout-style-option:hover {\n        border-color: var(--primary-color);\n      }\n\n      .layout-style-option.selected {\n        background: rgba(var(--rgb-primary-color), 0.1);\n        border-color: var(--primary-color);\n      }\n\n      .layout-style-option ha-icon {\n        --mdc-icon-size: 24px;\n        color: var(--primary-text-color);\n      }\n\n      .layout-style-option span {\n        font-size: 11px;\n        text-align: center;\n      }\n\n      .button-group {\n        display: flex;\n        gap: 4px;\n        flex-wrap: wrap;\n      }\n\n      .option-btn {\n        padding: 8px 12px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-6, 6px);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        cursor: pointer;\n        font-size: 12px;\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        transition: all 0.2s ease;\n      }\n\n      .option-btn:hover {\n        border-color: var(--primary-color);\n      }\n\n      .option-btn.active {\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        border-color: var(--primary-color);\n      }\n\n      .option-btn ha-icon {\n        --mdc-icon-size: 16px;\n      }\n\n      .position-grid {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        gap: 8px;\n      }\n\n      .position-option {\n        padding: 8px;\n        text-align: center;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-6, 6px);\n        cursor: pointer;\n        font-size: 12px;\n        text-transform: capitalize;\n        transition: all 0.2s ease;\n      }\n\n      .position-option:hover {\n        border-color: var(--primary-color);\n      }\n\n      .position-option.selected {\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        border-color: var(--primary-color);\n      }\n\n      .color-row {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin-bottom: 12px;\n      }\n\n      .color-field {\n        flex: 1;\n      }\n\n      .color-label {\n        font-size: 13px;\n        color: var(--primary-text-color);\n      }\n\n      .slider-row {\n        margin-bottom: 12px;\n      }\n\n      .slider-label {\n        display: block;\n        font-size: 13px;\n        color: var(--primary-text-color);\n        margin-bottom: 8px;\n      }\n\n      .layout-badge {\n        display: inline-block;\n        padding: 2px 8px;\n        background: rgba(var(--rgb-primary-color), 0.15);\n        color: var(--primary-color);\n        border-radius: var(--uc-r-12, 12px);\n        font-size: 10px;\n        font-weight: 600;\n        text-transform: uppercase;\n        margin-left: 8px;\n        vertical-align: middle;\n      }\n\n      .section-subtitle {\n        font-size: 12px;\n        font-weight: 600;\n        color: var(--primary-color);\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n        margin-bottom: 12px;\n      }\n\n      .styling-section {\n        margin-top: 16px;\n        padding-top: 12px;\n        border-top: 1px solid var(--divider-color);\n      }\n\n      /* Data Items Builder */\n      .data-items-section {\n        background: var(--uc-pane-bg, var(--secondary-background-color)); box-shadow: var(--uc-pane-shadow, none);\n      }\n\n      .data-items-list {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        margin-bottom: 12px;\n      }\n\n      ha-expansion-panel.data-item-panel {\n        --ha-card-border-radius: var(--uc-r-8, 8px);\n        --expansion-panel-summary-padding: 0;\n        /* Horizontal-only padding on the variable so the collapsed .container\n           (height: 0) does not still leak vertical padding below the row. */\n        --expansion-panel-content-padding: 0 12px;\n        margin-bottom: 8px;\n      }\n\n      ha-expansion-panel.data-item-panel::part(summary) {\n        padding: 0;\n        min-height: unset;\n      }\n\n      /* When the panel IS expanded, give the content vertical breathing room\n         via ::part(content) — this only applies to the visible content slot,\n         not the height-animated .container. */\n      ha-expansion-panel.data-item-panel::part(content) {\n        padding: 12px;\n      }\n\n      ha-expansion-panel.data-item-panel.dragging {\n        opacity: 0.5;\n      }\n\n      ha-expansion-panel.data-item-panel.drag-over {\n        outline: 2px dashed var(--primary-color);\n        outline-offset: -2px;\n      }\n\n      .data-item-header {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 10px 12px;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      .drag-handle {\n        cursor: grab;\n        color: var(--secondary-text-color);\n        padding: 4px;\n        flex-shrink: 0;\n      }\n\n      .drag-handle:active {\n        cursor: grabbing;\n      }\n\n      .item-icon {\n        width: 32px;\n        height: 32px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: rgba(var(--rgb-primary-color), 0.1);\n        border-radius: var(--uc-r-6, 6px);\n        color: var(--primary-color);\n        flex-shrink: 0;\n      }\n\n      .item-icon ha-icon {\n        --mdc-icon-size: 18px;\n      }\n\n      .item-info {\n        flex: 1;\n        min-width: 0;\n      }\n\n      .item-type {\n        font-size: 13px;\n        font-weight: 500;\n        color: var(--primary-text-color);\n      }\n\n      .item-label {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .item-action-btn {\n        width: 28px;\n        height: 28px;\n        padding: 0;\n        border: none;\n        background: transparent;\n        border-radius: var(--uc-r-4, 4px);\n        cursor: pointer;\n        color: var(--secondary-text-color);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: all 0.2s ease;\n        flex-shrink: 0;\n      }\n\n      .item-action-btn:hover {\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n      }\n\n      .item-action-btn.delete:hover {\n        background: rgba(244, 67, 54, 0.1);\n        color: #f44336;\n      }\n\n      .item-action-btn ha-icon {\n        --mdc-icon-size: 18px;\n      }\n\n      .data-item-content {\n        padding-top: 8px;\n      }\n\n      .field-title-row {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin-bottom: 8px;\n      }\n\n      .link-corners-btn {\n        width: 32px;\n        height: 32px;\n        padding: 0;\n        border: 1px solid var(--divider-color);\n        background: transparent;\n        border-radius: var(--uc-r-6, 6px);\n        cursor: pointer;\n        color: var(--secondary-text-color);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: all 0.2s ease;\n      }\n\n      .link-corners-btn:hover {\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n      }\n\n      .link-corners-btn.linked {\n        background: rgba(var(--rgb-primary-color), 0.1);\n        border-color: var(--primary-color);\n        color: var(--primary-color);\n      }\n\n      .link-corners-btn ha-icon {\n        --mdc-icon-size: 18px;\n      }\n\n      .corner-radius-grid {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 8px;\n        padding: 12px;\n        background: var(--secondary-background-color);\n        border-radius: var(--uc-r-8, 8px);\n      }\n\n      .corner-control {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n\n      .corner-control.top-left { justify-content: flex-start; }\n      .corner-control.top-right { justify-content: flex-end; }\n      .corner-control.bottom-left { justify-content: flex-start; }\n      .corner-control.bottom-right { justify-content: flex-end; }\n\n      .corner-label {\n        font-size: 11px;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        width: 20px;\n        text-align: center;\n      }\n\n      .corner-input {\n        width: 60px;\n        padding: 6px 8px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-4, 4px);\n        background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background)));\n        color: var(--primary-text-color);\n        font-size: 13px;\n        text-align: center;\n      }\n\n      .corner-input:focus {\n        outline: none;\n        border-color: var(--primary-color);\n      }\n\n      .add-item-container {\n        margin-top: 8px;\n      }\n\n      /* Tighten the embedded ha-form / ha-select so the section doesn't\n         get a giant empty gap below the "+ Add Data Item" dropdown. */\n      .add-item-container ha-form {\n        display: block;\n      }\n      .add-item-container ha-form .field-section,\n      .add-item-container ha-form .field-section ha-selector,\n      .add-item-container ha-form ha-select {\n        margin-bottom: 0 !important;\n        padding-bottom: 0 !important;\n      }\n      .add-item-container ha-form ha-select {\n        --mdc-text-field-fill-color: transparent;\n      }\n\n      .add-item-select {\n        width: 100%;\n        padding: 10px 12px;\n        border: 2px dashed var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        background: transparent;\n        color: var(--primary-text-color);\n        font-size: 14px;\n        cursor: pointer;\n        transition: all 0.2s ease;\n      }\n\n      .add-item-select:hover,\n      .add-item-select:focus {\n        border-color: var(--primary-color);\n        outline: none;\n      }\n\n      ${this._getPreviewStyles()}\n    `}_getPreviewStyles(){return"\n      /* Base People Module Styles */\n      .people-module {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* Background filter support - use pseudo-element to blur background without blurring content */\n      .people-module[style*=\"--bg-filter\"]::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: var(--bg-color, transparent);\n        background-image: var(--bg-image, none);\n        background-size: var(--bg-size, cover);\n        background-position: var(--bg-position, center);\n        background-repeat: var(--bg-repeat, no-repeat);\n        filter: var(--bg-filter);\n        border-radius: inherit;\n        z-index: -1;\n        pointer-events: none;\n      }\n\n      /* Avatar Styles */\n      .people-avatar {\n        position: relative;\n        border-radius: 50%;\n        overflow: visible;\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background)));\n      }\n\n      .people-avatar img {\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        object-fit: cover;\n      }\n\n      .people-avatar ha-icon {\n        color: var(--secondary-text-color);\n      }\n\n      .people-avatar-badge {\n        position: absolute;\n        width: 24px;\n        height: 24px;\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: 2px solid var(--card-background-color, white);\n      }\n\n      .people-avatar-badge ha-icon {\n        --mdc-icon-size: 14px;\n        color: white;\n      }\n\n      .people-avatar-badge--top-left { top: -4px; left: -4px; }\n      .people-avatar-badge--top-right { top: -4px; right: -4px; }\n      .people-avatar-badge--bottom-left { bottom: -4px; left: -4px; }\n      .people-avatar-badge--bottom-right { bottom: -4px; right: -4px; }\n\n      /* Name Styles */\n      .people-name {\n        width: 100%;\n      }\n\n      /* Data Items Styles */\n      .people-data-items {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n      }\n\n      .people-data-items--row {\n        flex-direction: row;\n      }\n\n      .people-data-items--column {\n        flex-direction: column;\n        align-items: center;\n      }\n\n      .people-data-item {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n      }\n\n      .people-data-item ha-icon {\n        flex-shrink: 0;\n      }\n\n      .people-data-item-label {\n        font-size: 12px;\n        display: inline-block;\n      }\n\n      .people-data-item-value {\n        font-weight: 500;\n        display: inline-block;\n      }\n\n      /* Data List Styles (for detailed layout) */\n      .people-data-list {\n        width: 100%;\n      }\n\n      .people-data-row {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 8px 0;\n        border-bottom: 1px solid var(--divider-color);\n      }\n\n      .people-data-row:last-child {\n        border-bottom: none;\n      }\n\n      .people-data-row-left {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n\n      .people-data-row-left ha-icon {\n        --mdc-icon-size: 20px;\n      }\n\n      .people-data-row-value {\n        font-weight: 500;\n      }\n\n      /* Location Badge */\n      .people-location-badge,\n      .people-battery-badge {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 13px;\n      }\n\n      .people-location-badge ha-icon,\n      .people-battery-badge ha-icon {\n        --mdc-icon-size: 18px;\n      }\n\n      .people-location-text {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n\n      .people-duration {\n        opacity: 0.7;\n      }\n\n      /* Compact Layout */\n      .people-module--compact {\n        padding: 16px;\n        text-align: center;\n      }\n\n      /* Banner Layout */\n      .people-module--banner {\n        position: relative;\n        overflow: hidden;\n        padding: 0;\n      }\n\n      .people-banner {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        z-index: 0;\n      }\n\n      .people-banner-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        z-index: 1;\n        height: inherit;\n      }\n\n      .people-banner-content {\n        position: relative;\n        z-index: 2;\n        display: flex;\n        align-items: flex-end;\n        justify-content: center;\n        padding: 16px;\n        padding-top: 60px;\n      }\n\n      .people-banner-side {\n        flex: 1;\n        display: flex;\n        justify-content: center;\n      }\n\n      .people-banner-info {\n        position: relative;\n        z-index: 2;\n        padding: 16px;\n        background: transparent;\n      }\n\n      /* Horizontal Compact Layout */\n      .people-module--horizontal-compact {\n        flex-direction: row;\n        align-items: center;\n        padding: 12px 16px;\n      }\n\n      .people-info-column {\n        flex: 1;\n        min-width: 0;\n      }\n\n      .people-info-header {\n        margin-bottom: 4px;\n      }\n\n      /* Horizontal Detailed Layout */\n      .people-module--horizontal-detailed {\n        flex-direction: row;\n        align-items: flex-start;\n        padding: 16px;\n      }\n\n      .people-detailed-info {\n        flex: 1;\n        min-width: 0;\n      }\n\n      .people-detailed-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin-bottom: 12px;\n      }\n\n      .people-detailed-items {\n        width: 100%;\n      }\n\n      /* Header Layout */\n      .people-module--header {\n        padding: 12px 16px;\n      }\n\n      .people-header-badges {\n        width: 100%;\n        margin-bottom: 8px;\n      }\n\n      .people-header-badges-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        justify-content: flex-end;\n      }\n\n      .people-badge {\n        width: 24px;\n        height: 24px;\n        border-radius: 50%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .people-badge ha-icon {\n        --mdc-icon-size: 14px;\n        color: white;\n      }\n\n      .people-badge.home {\n        background: #4CAF50;\n      }\n\n      .people-badge.away {\n        background: #FF5722;\n      }\n\n      .people-header-main {\n        display: flex;\n        align-items: center;\n        width: 100%;\n      }\n\n      .people-header-info {\n        flex: 1;\n        min-width: 0;\n      }\n\n      .people-header-items {\n        display: flex;\n        flex-wrap: wrap;\n        margin-top: 12px;\n      }\n\n      /* Music Overlay Layout */\n      .people-module--music-overlay {\n        position: relative;\n        overflow: hidden;\n        padding: 16px;\n        background: transparent;\n      }\n\n      .people-music-blur-bg {\n        position: absolute;\n        top: -20px;\n        left: -20px;\n        right: -20px;\n        bottom: -20px;\n        background-size: cover;\n        background-position: center;\n        /* filter and opacity applied via inline style for dynamic control */\n        z-index: 0;\n      }\n\n      .people-music-header {\n        position: relative;\n        z-index: 1;\n        display: flex;\n        justify-content: flex-end;\n        margin-bottom: 8px;\n      }\n\n      .people-music-content {\n        position: relative;\n        z-index: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      .people-music-info {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 8px 12px;\n        background: rgba(0, 0, 0, 0.3);\n        border-radius: var(--uc-r-20, 20px);\n        margin-top: 8px;\n      }\n\n      .people-music-info ha-icon {\n        --mdc-icon-size: 16px;\n        color: white;\n      }\n\n      .people-music-text {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .people-music-title {\n        font-size: 13px;\n        font-weight: 500;\n        color: white;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 150px;\n      }\n\n      .people-music-artist {\n        font-size: 11px;\n        color: rgba(255, 255, 255, 0.8);\n      }\n\n      .people-music-progress {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 3px;\n        background: rgba(255, 255, 255, 0.2);\n      }\n\n      .people-music-progress-bar {\n        height: 100%;\n        background: var(--primary-color);\n        transition: width 1s linear;\n      }\n    "}}}};