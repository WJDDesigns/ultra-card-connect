export const __webpack_esm_ids__=[4011];export const __webpack_esm_modules__={7722(e,i,t){t.d(i,{UltraMediaPlayerModule:()=>l});var a=t(2618),n=t(6478),r=t(7475),o=t(9957),s=t(1484);t(7921);class l extends r.m{constructor(){super(...arguments),this.metadata={type:"media_player",title:"Media Player",description:"Control media players with album art, progress bar, and playback controls",author:"WJD Designs",version:"1.0.0",icon:"mdi:music",category:"interactive",tags:["media","music","player","audio","video","spotify","chromecast","interactive"]},this._progressTimers=new Map,this._expandedModules=new Set,this._volumeDragState=new Map,this._extractedColors=new Map,this._lastMediaContentId=new Map}destroy(){this._progressTimers.forEach(e=>e.stop()),this._progressTimers.clear(),this._expandedModules.clear(),this._volumeDragState.clear(),this._extractedColors.clear(),this._lastMediaContentId.clear()}createDefault(e,i){let t="";if(null==i?void 0:i.states){const e=Object.keys(i.states).filter(e=>e.startsWith("media_player."));e.length>0&&(t=e[0])}return{id:e||this.generateId("media_player"),type:"media_player",entity:t,name:"",layout:"card",card_size:280,show_name:!0,show_album_art:!0,show_track_info:!0,show_progress:!0,show_duration:!0,show_controls:!0,show_volume:!0,show_source:!1,show_shuffle:!1,show_repeat:!1,show_sound_mode:!1,show_stop_button:!1,show_album_name:!0,enable_seek:!0,auto_hide_when_off:!1,expandable:!0,dynamic_colors:!1,blurred_background:!0,blur_amount:10,blur_opacity:.4,blur_expand:!0,animated_visuals:!1,visualizer_type:"rings",fallback_icon:"mdi:music",play_icon:"mdi:play",pause_icon:"mdi:pause",stop_icon:"mdi:stop",previous_icon:"mdi:skip-previous",next_icon:"mdi:skip-next",shuffle_icon:"mdi:shuffle",repeat_icon:"mdi:repeat",repeat_one_icon:"mdi:repeat-once",volume_muted_icon:"mdi:volume-off",volume_low_icon:"mdi:volume-low",volume_medium_icon:"mdi:volume-medium",volume_high_icon:"mdi:volume-high",progress_color:"var(--primary-color)",progress_background:"var(--divider-color)",button_color:"var(--primary-text-color)",button_active_color:"var(--primary-color)",album_art_border_radius:"8px",tap_action:{action:"more-info"},hold_action:{action:"default"},double_tap_action:{action:"default"}}}renderGeneralTab(e,i,t,r){var s;const l=e,d=(null===(s=null==i?void 0:i.locale)||void 0===s?void 0:s.language)||"en";return a.qy`
      ${this.injectUcFormStyles()}

      <!-- Entity Configuration -->
      ${this.renderSettingsSection((0,n.kg)("editor.media_player.section_entity",d,"Entity Configuration"),(0,n.kg)("editor.media_player.section_entity_desc",d,"Select the media player entity to control"),[])}
      <div style="margin-bottom: 24px;">
        ${this.renderEntityPickerWithVariables(i,t,"entity",l.entity||"",e=>{r({entity:e}),this.triggerPreviewUpdate()},["media_player"],(0,n.kg)("editor.media_player.entity",d,"Media Player Entity"))}
      </div>

      <!-- Layout Settings -->
      ${this.renderSettingsSection((0,n.kg)("editor.media_player.section_layout",d,"Layout"),(0,n.kg)("editor.media_player.section_layout_desc",d,"Choose the display layout"),[{title:"Layout Mode",description:"Compact: horizontal bar, Card: full display, Mini: single line",hass:i,data:{layout:l.layout||"compact"},schema:[this.selectField("layout",[{value:"compact",label:"Compact"},{value:"card",label:"Card"},{value:"mini",label:"Mini"}])],onChange:e=>{r({layout:e.detail.value.layout}),this.triggerPreviewUpdate()}}])}

      ${"card"===l.layout?a.qy`
            <div style="margin-top: 8px; margin-bottom: 16px;">
              ${this.renderSliderField("Album Art Size","Size of the album art in pixels (80-400)",l.card_size||280,280,80,400,10,e=>r({card_size:e}),"px")}
            </div>
          `:""}

      <!-- Display Options -->
      ${this.renderSettingsSection((0,n.kg)("editor.media_player.section_display",d,"Display Options"),(0,n.kg)("editor.media_player.section_display_desc",d,"Choose what elements to show"),[{title:"Show Album Art",description:"Display album artwork or fallback icon",hass:i,data:{show_album_art:!1!==l.show_album_art},schema:[this.booleanField("show_album_art")],onChange:e=>{r({show_album_art:e.detail.value.show_album_art}),this.triggerPreviewUpdate()}},{title:"Show Track Info",description:"Display track title and artist",hass:i,data:{show_track_info:!1!==l.show_track_info},schema:[this.booleanField("show_track_info")],onChange:e=>{r({show_track_info:e.detail.value.show_track_info}),this.triggerPreviewUpdate()}},{title:"Show Album Name",description:"Display album name (when available)",hass:i,data:{show_album_name:!1!==l.show_album_name},schema:[this.booleanField("show_album_name")],onChange:e=>{r({show_album_name:e.detail.value.show_album_name}),this.triggerPreviewUpdate()}},{title:"Show Progress Bar",description:"Display playback progress",hass:i,data:{show_progress:!1!==l.show_progress},schema:[this.booleanField("show_progress")],onChange:e=>{r({show_progress:e.detail.value.show_progress}),this.triggerPreviewUpdate()}},{title:"Show Duration",description:"Display current time / total duration",hass:i,data:{show_duration:!1!==l.show_duration},schema:[this.booleanField("show_duration")],onChange:e=>{r({show_duration:e.detail.value.show_duration}),this.triggerPreviewUpdate()}},{title:"Show Controls",description:"Display play/pause and skip controls",hass:i,data:{show_controls:!1!==l.show_controls},schema:[this.booleanField("show_controls")],onChange:e=>{r({show_controls:e.detail.value.show_controls}),this.triggerPreviewUpdate()}},{title:"Show Volume",description:"Display volume slider and mute button",hass:i,data:{show_volume:!1!==l.show_volume},schema:[this.booleanField("show_volume")],onChange:e=>{r({show_volume:e.detail.value.show_volume}),this.triggerPreviewUpdate()}},{title:"Show Stop Button",description:"Display a stop button alongside play/pause",hass:i,data:{show_stop_button:l.show_stop_button||!1},schema:[this.booleanField("show_stop_button")],onChange:e=>{r({show_stop_button:e.detail.value.show_stop_button}),this.triggerPreviewUpdate()}},{title:"Show Source Selector",description:"Display source/speaker selection dropdown",hass:i,data:{show_source:l.show_source||!1},schema:[this.booleanField("show_source")],onChange:e=>{r({show_source:e.detail.value.show_source}),this.triggerPreviewUpdate()}},{title:"Show Shuffle Button",description:"Display shuffle toggle button",hass:i,data:{show_shuffle:l.show_shuffle||!1},schema:[this.booleanField("show_shuffle")],onChange:e=>{r({show_shuffle:e.detail.value.show_shuffle}),this.triggerPreviewUpdate()}},{title:"Show Repeat Button",description:"Display repeat mode button",hass:i,data:{show_repeat:l.show_repeat||!1},schema:[this.booleanField("show_repeat")],onChange:e=>{r({show_repeat:e.detail.value.show_repeat}),this.triggerPreviewUpdate()}},{title:"Show Sound Mode",description:"Display sound mode selector (if supported)",hass:i,data:{show_sound_mode:l.show_sound_mode||!1},schema:[this.booleanField("show_sound_mode")],onChange:e=>{r({show_sound_mode:e.detail.value.show_sound_mode}),this.triggerPreviewUpdate()}}])}

      <!-- Behavior Settings -->
      ${this.renderSettingsSection((0,n.kg)("editor.media_player.section_behavior",d,"Behavior"),(0,n.kg)("editor.media_player.section_behavior_desc",d,"Control interactive behaviors"),[{title:"Enable Seek",description:"Allow clicking progress bar to seek",hass:i,data:{enable_seek:!1!==l.enable_seek},schema:[this.booleanField("enable_seek")],onChange:e=>{r({enable_seek:e.detail.value.enable_seek}),this.triggerPreviewUpdate()}},{title:"Auto-Hide When Off",description:"Hide module when media player is off or idle",hass:i,data:{auto_hide_when_off:l.auto_hide_when_off||!1},schema:[this.booleanField("auto_hide_when_off")],onChange:e=>{r({auto_hide_when_off:e.detail.value.auto_hide_when_off}),this.triggerPreviewUpdate()}},{title:"Expandable (Compact Mode)",description:"Allow expanding compact layout to show more controls",hass:i,data:{expandable:!1!==l.expandable},schema:[this.booleanField("expandable")],onChange:e=>{r({expandable:e.detail.value.expandable}),this.triggerPreviewUpdate()}}])}

      <!-- Visual Settings -->
      ${this.renderSettingsSection((0,n.kg)("editor.media_player.section_visual",d,"Visual"),(0,n.kg)("editor.media_player.section_visual_desc",d,"Customize the appearance"),[{title:"Blurred Background",description:"Use album art as a blurred, darkened background",hass:i,data:{blurred_background:!1!==l.blurred_background},schema:[this.booleanField("blurred_background")],onChange:e=>{r({blurred_background:e.detail.value.blurred_background}),this.triggerPreviewUpdate()}}])}

      <!-- Blur Settings (when blurred background is enabled) -->
      ${!1!==l.blurred_background?a.qy`
            <div style="margin-left: 16px; margin-bottom: 16px; padding-left: 12px; border-left: 3px solid var(--primary-color);">
              ${this.renderSliderField("Blur Amount","",l.blur_amount||10,10,5,60,1,e=>r({blur_amount:e}),"px")}
              ${this.renderSliderField("Blur Opacity","",Math.round(100*(l.blur_opacity||.4)),40,10,80,1,e=>r({blur_opacity:e/100}),"%")}
              ${this.renderFieldSection("Expand past card edges","",i,{blur_expand:!1!==l.blur_expand},[this.booleanField("blur_expand")],e=>{r({blur_expand:e.detail.value.blur_expand}),this.triggerPreviewUpdate()})}
            </div>
          `:""}

      ${this.renderSettingsSection("","",[{title:"Dynamic Colors",description:"Extract accent colors from album art for controls",hass:i,data:{dynamic_colors:l.dynamic_colors||!1},schema:[this.booleanField("dynamic_colors")],onChange:e=>{r({dynamic_colors:e.detail.value.dynamic_colors}),this.triggerPreviewUpdate()}},{title:"Animated Visuals",description:"Show animated visualizer behind album art when playing",hass:i,data:{animated_visuals:l.animated_visuals||!1},schema:[this.booleanField("animated_visuals")],onChange:e=>{r({animated_visuals:e.detail.value.animated_visuals}),this.triggerPreviewUpdate()}}])}

      <!-- Visualizer Type (when animated visuals is enabled) -->
      ${l.animated_visuals?a.qy`
            <div style="margin-left: 16px; margin-bottom: 16px; padding-left: 12px; border-left: 3px solid var(--primary-color);">
              ${this.renderFieldSection("Visualizer Type","",i,{visualizer_type:l.visualizer_type||"rings"},[this.selectField("visualizer_type",[{value:"rings",label:"Rings - Pulsing circles"},{value:"bars",label:"Bars - Vertical equalizer bars"},{value:"wave",label:"Wave - Oscillating sine wave"},{value:"dots",label:"Dots - Bouncing dot pattern"},{value:"spectrum",label:"Spectrum - Radial frequency bars"},{value:"pulse",label:"Pulse - Breathing glow effect"},{value:"orbit",label:"Orbit - Rotating particles"},{value:"spiral",label:"Spiral - Rotating spiral pattern"},{value:"equalizer",label:"Equalizer - Classic EQ visualization"},{value:"particles",label:"Particles - Floating particle field"}])],e=>{r({visualizer_type:e.detail.value.visualizer_type}),this.triggerPreviewUpdate()})}
            </div>
          `:""}


      <!-- Color Customization (when dynamic colors is disabled) -->
      ${l.dynamic_colors?"":a.qy`
            <div
              class="settings-section"
              style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
            >
              <div
                class="section-title"
                style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
              >
                COLOR CUSTOMIZATION
              </div>
              <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
                Customize colors for various elements
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                <div>
                  <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px;">Progress Bar Color</div>
                  <ultra-color-picker
                    .hass=${i}
                    .value=${l.progress_color||"var(--primary-color)"}
                    @color-changed=${e=>{r({progress_color:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
                <div>
                  <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px;">Progress Background</div>
                  <ultra-color-picker
                    .hass=${i}
                    .value=${l.progress_background||"var(--divider-color)"}
                    @color-changed=${e=>{r({progress_background:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
                <div>
                  <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px;">Button Color</div>
                  <ultra-color-picker
                    .hass=${i}
                    .value=${l.button_color||"var(--primary-text-color)"}
                    @color-changed=${e=>{r({button_color:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
                <div>
                  <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px;">Active Button Color</div>
                  <ultra-color-picker
                    .hass=${i}
                    .value=${l.button_active_color||"var(--primary-color)"}
                    @color-changed=${e=>{r({button_active_color:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              </div>
            </div>
          `}

      <!-- Icon Customization -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
        >
          ICON CUSTOMIZATION
        </div>
        <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
          Customize icons for controls and states
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
          ${this.renderFieldSection("Fallback Icon","Icon when no album art available",i,{fallback_icon:l.fallback_icon||"mdi:music"},[this.iconField("fallback_icon")],e=>{r({fallback_icon:e.detail.value.fallback_icon}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection("Play Icon","Icon for play button",i,{play_icon:l.play_icon||"mdi:play"},[this.iconField("play_icon")],e=>{r({play_icon:e.detail.value.play_icon}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection("Pause Icon","Icon for pause button",i,{pause_icon:l.pause_icon||"mdi:pause"},[this.iconField("pause_icon")],e=>{r({pause_icon:e.detail.value.pause_icon}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection("Previous Icon","Icon for previous track button",i,{previous_icon:l.previous_icon||"mdi:skip-previous"},[this.iconField("previous_icon")],e=>{r({previous_icon:e.detail.value.previous_icon}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection("Next Icon","Icon for next track button",i,{next_icon:l.next_icon||"mdi:skip-next"},[this.iconField("next_icon")],e=>{r({next_icon:e.detail.value.next_icon}),this.triggerPreviewUpdate()})}
        </div>

        <div style="margin-top: 16px;">
          ${this.renderFieldSection("Album Art Border Radius","Border radius for album art (e.g., 8px, 50%)",i,{album_art_border_radius:l.album_art_border_radius||"8px"},[this.textField("album_art_border_radius")],e=>{r({album_art_border_radius:e.detail.value.album_art_border_radius}),this.triggerPreviewUpdate()})}
        </div>
      </div>

      <!-- Link Configuration -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        ${o.K.render(i,{tap_action:l.tap_action||{action:"more-info"},hold_action:l.hold_action||{action:"default"},double_tap_action:l.double_tap_action||{action:"default"}},e=>{const i={};e.tap_action&&(i.tap_action=e.tap_action),e.hold_action&&(i.hold_action=e.hold_action),e.double_tap_action&&(i.double_tap_action=e.double_tap_action),r(i),this.triggerPreviewUpdate()},"Link Configuration")}
      </div>
    `}renderPreview(e,i,t,r){var o;const l=e,d=(null===(o=null==i?void 0:i.locale)||void 0===o?void 0:o.language)||"en",c=this.resolveEntity(l.entity,t),p=c?i.states[c]:void 0;if(!c||!p)return this.renderGradientErrorState((0,n.kg)("editor.media_player.error_no_entity",d,"Configure Entity"),(0,n.kg)("editor.media_player.error_no_entity_desc",d,"Select a media player entity in the General tab"),"mdi:music-off");const u=p.state;if(l.auto_hide_when_off&&("off"===u||"idle"===u||"unavailable"===u))return a.qy`<div class="media-player-hidden"></div>`;const m=this._progressTimers.get(l.id);m&&(m.stop(),this._progressTimers.delete(l.id)),"playing"===u&&!1!==l.show_progress&&this._progressTimers.set(l.id,(0,s.Y)(()=>{this._progressTimers.delete(l.id),this.triggerPreviewUpdate()},1e3));const v=this.getHoverEffectClass(e),h=this.buildStyleString(this.buildDesignStyles(e,i)),_=this.createGestureHandlers(l.id,{tap_action:l.tap_action,hold_action:l.hold_action,double_tap_action:l.double_tap_action,entity:c,module:l},i,t,[".mp-control-btn",".mp-volume-slider",".mp-progress-bar",".mp-source-select"]),y=(()=>{switch(l.layout){case"card":return this.renderCardLayout(l,i,p,t);case"mini":return this.renderMiniLayout(l,i,p,t);default:return this.renderCompactLayout(l,i,p,t)}})();return this.wrapWithAnimation(a.qy`<div
        class="${v}"
        style="${h}"
        @pointerdown=${_.onPointerDown}
        @pointermove=${_.onPointerMove}
        @pointerup=${_.onPointerUp}
        @pointerleave=${_.onPointerLeave}
        @pointercancel=${_.onPointerCancel}
      >
        ${y}
      </div>`,e,i)}renderCompactLayout(e,i,t,n){const r=this._expandedModules.has(e.id),o=t.state,s=t.attributes,l=this._resolveMediaPicture(s.entity_picture||s.entity_picture_local,i,t),d=e.dynamic_colors?this.getDynamicColorStyles(e,t):"";return a.qy`
      <style>
        ${this.getStyles()}
        ${d}
      </style>
      <div
        class="media-player-container media-player-compact ${e.dynamic_colors?"mp-dynamic-colors":""}"
        data-uc-role="pane"
      >
        <!-- Blurred Background -->
        ${!1!==e.blurred_background&&l?a.qy`<div class="mp-blurred-bg ${!1!==e.blur_expand?"mp-blur-expand":"mp-blur-contained"}" style="background-image: url('${l}'); filter: blur(${e.blur_amount||10}px); opacity: ${e.blur_opacity||.4};"></div>`:""}
        
        <!-- Main Row -->
        <div class="mp-compact-row">
          <!-- Album Art -->
          ${!1!==e.show_album_art?this.renderAlbumArt(e,i,t,48):""}

          <!-- Track Info -->
          <div class="mp-track-info">
            ${!1!==e.show_track_info?a.qy`
                  <div class="mp-track-title">${s.media_title||e.name||t.attributes.friendly_name||"No media"}</div>
                  <div class="mp-track-artist">${s.media_artist||s.app_name||o}</div>
                `:a.qy`
                  <div class="mp-track-title">${e.name||t.attributes.friendly_name}</div>
                  <div class="mp-track-artist">${o}</div>
                `}
          </div>

          <!-- Quick Controls -->
          ${!1!==e.show_controls?a.qy`
                <div class="mp-quick-controls">
                  ${this.renderPlayPauseButton(e,i,t)}
                  ${!1!==e.expandable?a.qy`
                        <button
                          class="mp-control-btn mp-expand-btn"
                          @click=${i=>this.toggleExpand(i,e.id)}
                          title="${r?"Collapse":"Expand"}"
                          aria-label="${r?"Collapse":"Expand"}"
                        >
                          <ha-icon icon="${r?"mdi:chevron-up":"mdi:chevron-down"}"></ha-icon>
                        </button>
                      `:""}
                </div>
              `:""}
        </div>

        <!-- Progress Bar (thin line at bottom) -->
        ${!1===e.show_progress||"playing"!==o&&"paused"!==o?"":this.renderProgressBar(e,i,t,!0)}

        <!-- Expanded Controls -->
        ${r?this.renderExpandedControls(e,i,t):""}
      </div>
    `}renderCardLayout(e,i,t,n){var r,o;const s=t.state,l=t.attributes,d=e.card_size||280,c=this._resolveMediaPicture(l.entity_picture||l.entity_picture_local,i,t),p=this.getDynamicColorStyles(e,t);return a.qy`
      <style>
        ${this.getStyles()}
        ${p}
      </style>
      <div
        class="media-player-container media-player-card ${e.dynamic_colors?"mp-dynamic-colors":""}"
        data-uc-role="pane"
      >
        <!-- Blurred Background -->
        ${!1!==e.blurred_background&&c?a.qy`<div class="mp-blurred-bg ${!1!==e.blur_expand?"mp-blur-expand":"mp-blur-contained"}" style="background-image: url('${c}'); filter: blur(${e.blur_amount||10}px); opacity: ${e.blur_opacity||.4};"></div>`:""}

        <!-- Player Name Header -->
        ${!1!==e.show_name&&(e.name||l.friendly_name)?a.qy`<div class="mp-card-name">${e.name||l.friendly_name}</div>`:""}

        <!-- Album Art with Visualizer -->
        <div class="mp-art-wrapper" style="width: ${d}px; height: ${d}px;">
          ${e.animated_visuals&&"playing"===s?this.renderVisualizer(e.visualizer_type||"rings"):""}
          ${!1!==e.show_album_art?this.renderAlbumArt(e,i,t,d,!0):""}
        </div>

        <!-- Track Info -->
        ${!1!==e.show_track_info?a.qy`
              <div class="mp-card-track-info">
                <div class="mp-card-title">${l.media_title||e.name||t.attributes.friendly_name||"No media"}</div>
                <div class="mp-card-artist">${l.media_artist||l.app_name||""}</div>
                ${!1!==e.show_album_name&&l.media_album_name?a.qy`<div class="mp-card-album">${l.media_album_name}</div>`:""}
              </div>
            `:""}

        <!-- Progress Bar -->
        ${!1===e.show_progress||"playing"!==s&&"paused"!==s?"":this.renderProgressBar(e,i,t,!1)}

        <!-- Control Buttons -->
        ${!1!==e.show_controls?a.qy`
              <div class="mp-card-controls">
                ${e.show_shuffle?this.renderShuffleButton(e,i,t):""}
                ${this.supportsFeature(t,16)?a.qy`
                      <button class="mp-control-btn" @click=${e=>this.handlePrevious(e,i,t)} title="Previous track" aria-label="Previous track">
                        <ha-icon icon="${e.previous_icon||"mdi:skip-previous"}"></ha-icon>
                      </button>
                    `:""}
                ${this.renderPlayPauseButton(e,i,t,!0)}
                ${e.show_stop_button&&this.supportsFeature(t,4096)?a.qy`
                      <button class="mp-control-btn" @click=${e=>this.handleStop(e,i,t)} title="Stop" aria-label="Stop">
                        <ha-icon icon="${e.stop_icon||"mdi:stop"}"></ha-icon>
                      </button>
                    `:""}
                ${this.supportsFeature(t,32)?a.qy`
                      <button class="mp-control-btn" @click=${e=>this.handleNext(e,i,t)} title="Next track" aria-label="Next track">
                        <ha-icon icon="${e.next_icon||"mdi:skip-next"}"></ha-icon>
                      </button>
                    `:""}
                ${e.show_repeat?this.renderRepeatButton(e,i,t):""}
              </div>
            `:""}

        <!-- Volume Control -->
        ${!1!==e.show_volume&&this.supportsFeature(t,4)?this.renderVolumeControl(e,i,t):""}

        <!-- Source Selector -->
        ${e.show_source&&this.supportsFeature(t,2048)&&(null===(r=t.attributes.source_list)||void 0===r?void 0:r.length)?this.renderSourceSelector(e,i,t):""}

        <!-- Sound Mode Selector -->
        ${e.show_sound_mode&&this.supportsFeature(t,65536)&&(null===(o=t.attributes.sound_mode_list)||void 0===o?void 0:o.length)?this.renderSoundModeSelector(e,i,t):""}
      </div>
    `}renderMiniLayout(e,i,t,n){t.state;const r=t.attributes;let o=e.name||r.friendly_name||"Media Player";return r.media_title&&(o=r.media_artist?`${r.media_title} - ${r.media_artist}`:r.media_title),a.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div class="media-player-container media-player-mini" data-uc-role="pane">
        ${!1!==e.show_album_art?this.renderAlbumArt(e,i,t,24):""}
        <div class="mp-mini-text" title="${o}">${o}</div>
        ${!1!==e.show_controls?this.renderPlayPauseButton(e,i,t):""}
      </div>
    `}renderAlbumArt(e,i,t,n,r=!1){const o=t.attributes,s=o.entity_picture||o.entity_picture_local,l=this._resolveMediaPicture(s,i,t),d=e.album_art_border_radius||"8px";return a.qy`
      <div
        class="mp-album-art ${r?"mp-album-art-card":""}"
        style="width: ${n}px; height: ${n}px; border-radius: ${d};"
      >
        ${l?a.qy`<img
              src="${l}"
              alt="Album Art"
              style="border-radius: ${d};"
            />`:a.qy`<ha-icon
              icon="${e.fallback_icon||"mdi:music"}"
              style="--mdc-icon-size: ${Math.floor(.5*n)}px;"
            ></ha-icon>`}
      </div>
    `}_resolveMediaPicture(e,i,t){if(!e)return"";let a=e;if(!a.startsWith("http")&&!a.startsWith("data:")){const e=null==i?void 0:i.hassUrl;if("function"==typeof e)try{a=e(a.startsWith("/")?a:`/${a}`)}catch(i){a=`${String(e()||"").replace(/\/$/,"")}${a.startsWith("/")?a:`/${a}`}`}}const n=(null==t?void 0:t.attributes)||{},r=n.media_content_id||n.media_title||(null==t?void 0:t.last_changed)||(null==t?void 0:t.last_updated)||"";if(r&&!a.includes("data:")){const e=a.includes("?")?"&":"?";a=`${a}${e}uc=${encodeURIComponent(String(r).slice(0,64))}`}return a}renderVisualizer(e){switch(e){case"rings":return a.qy`
          <div class="mp-visualizer mp-visualizer-rings">
            <div class="mp-viz-ring mp-ring-1"></div>
            <div class="mp-viz-ring mp-ring-2"></div>
            <div class="mp-viz-ring mp-ring-3"></div>
            <div class="mp-viz-ring mp-ring-4"></div>
          </div>
        `;case"bars":return a.qy`
          <div class="mp-visualizer mp-visualizer-bars">
            ${[...Array(20)].map((e,i)=>a.qy`<div class="mp-viz-bar" style="--bar-index: ${i};"></div>`)}
          </div>
        `;case"wave":return a.qy`
          <div class="mp-visualizer mp-visualizer-wave">
            <div class="mp-viz-wave-line mp-wave-1"></div>
            <div class="mp-viz-wave-line mp-wave-2"></div>
            <div class="mp-viz-wave-line mp-wave-3"></div>
          </div>
        `;case"dots":return a.qy`
          <div class="mp-visualizer mp-visualizer-dots">
            ${[...Array(16)].map((e,i)=>a.qy`<div class="mp-viz-dot" style="--dot-index: ${i};"></div>`)}
          </div>
        `;case"spectrum":return a.qy`
          <div class="mp-visualizer mp-visualizer-spectrum">
            ${[...Array(24)].map((e,i)=>a.qy`<div class="mp-viz-spectrum-bar" style="--spectrum-index: ${i};"></div>`)}
          </div>
        `;case"pulse":return a.qy`
          <div class="mp-visualizer mp-visualizer-pulse">
            <div class="mp-viz-pulse-core"></div>
            <div class="mp-viz-pulse-wave mp-pulse-1"></div>
            <div class="mp-viz-pulse-wave mp-pulse-2"></div>
            <div class="mp-viz-pulse-wave mp-pulse-3"></div>
          </div>
        `;case"orbit":return a.qy`
          <div class="mp-visualizer mp-visualizer-orbit">
            <div class="mp-viz-orbit-ring mp-orbit-1">
              <div class="mp-viz-orbit-dot"></div>
              <div class="mp-viz-orbit-dot mp-dot-2"></div>
            </div>
            <div class="mp-viz-orbit-ring mp-orbit-2">
              <div class="mp-viz-orbit-dot"></div>
              <div class="mp-viz-orbit-dot mp-dot-2"></div>
              <div class="mp-viz-orbit-dot mp-dot-3"></div>
            </div>
            <div class="mp-viz-orbit-ring mp-orbit-3">
              <div class="mp-viz-orbit-dot"></div>
              <div class="mp-viz-orbit-dot mp-dot-2"></div>
            </div>
          </div>
        `;case"spiral":return a.qy`
          <div class="mp-visualizer mp-visualizer-spiral">
            <div class="mp-viz-spiral-arm mp-spiral-1"></div>
            <div class="mp-viz-spiral-arm mp-spiral-2"></div>
            <div class="mp-viz-spiral-arm mp-spiral-3"></div>
            <div class="mp-viz-spiral-arm mp-spiral-4"></div>
          </div>
        `;case"equalizer":return a.qy`
          <div class="mp-visualizer mp-visualizer-equalizer">
            ${[...Array(24)].map((e,i)=>a.qy`<div class="mp-viz-eq-bar" style="--eq-index: ${i};"></div>`)}
          </div>
        `;case"particles":return a.qy`
          <div class="mp-visualizer mp-visualizer-particles">
            ${[...Array(40)].map((e,i)=>a.qy`<div class="mp-viz-particle" style="--particle-index: ${i}; --particle-total: 40;"></div>`)}
          </div>
        `;default:return a.qy``}}renderPlayPauseButton(e,i,t,n=!1){const r="playing"===t.state,o=r?e.pause_icon||"mdi:pause":e.play_icon||"mdi:play",s=!n&&e.button_active_color&&r?`color: ${e.button_active_color};`:"";return a.qy`
      <button
        class="mp-control-btn ${n?"mp-control-btn-large":""} ${r&&!n?"mp-btn-active":""}"
        @click=${e=>this.handlePlayPause(e,i,t)}
        style="${s}"
        title="${r?"Pause":"Play"}"
        aria-label="${r?"Pause":"Play"}"
      >
        <ha-icon icon="${o}"></ha-icon>
      </button>
    `}renderShuffleButton(e,i,t){if(!this.supportsFeature(t,32768))return a.qy``;const n=!0===t.attributes.shuffle;return a.qy`
      <button
        class="mp-control-btn ${n?"mp-btn-active":""}"
        @click=${e=>this.handleShuffle(e,i,t)}
        title="Shuffle ${n?"On":"Off"}"
        aria-label="Shuffle ${n?"On":"Off"}"
        style="${e.button_active_color&&n?`color: ${e.button_active_color};`:""}"
      >
        <ha-icon icon="${e.shuffle_icon||"mdi:shuffle"}"></ha-icon>
      </button>
    `}renderRepeatButton(e,i,t){if(!this.supportsFeature(t,262144))return a.qy``;const n=t.attributes.repeat||"off",r="off"!==n;let o=e.repeat_icon||"mdi:repeat";return"one"===n&&(o=e.repeat_one_icon||"mdi:repeat-once"),a.qy`
      <button
        class="mp-control-btn ${r?"mp-btn-active":""}"
        @click=${e=>this.handleRepeat(e,i,t)}
        title="Repeat: ${n}"
        aria-label="Repeat: ${n}"
        style="${e.button_active_color&&r?`color: ${e.button_active_color};`:""}"
      >
        <ha-icon icon="${o}"></ha-icon>
      </button>
    `}renderProgressBar(e,i,t,n){const r=this.getCurrentPosition(t),o=t.attributes.media_duration||0,s=o>0?r/o*100:0,l=e.progress_color||"var(--primary-color)",d=e.progress_background||"var(--divider-color)";return a.qy`
      <div class="mp-progress-container ${n?"mp-progress-compact":""}">
        ${n||!1===e.show_duration?"":a.qy`<span class="mp-time">${this.formatTime(r)}</span>`}
        <div
          class="mp-progress-bar"
          style="background: ${d};"
          @click=${!1!==e.enable_seek?e=>this.handleSeek(e,i,t,o):void 0}
        >
          <div class="mp-progress-fill" style="width: ${s}%; background: ${l};"></div>
        </div>
        ${n||!1===e.show_duration?"":a.qy`<span class="mp-time">${this.formatTime(o)}</span>`}
      </div>
    `}renderVolumeControl(e,i,t){var n;const r=null!==(n=t.attributes.volume_level)&&void 0!==n?n:.5,o=t.attributes.is_volume_muted,s=Math.round(100*r);let l=e.volume_high_icon||"mdi:volume-high";return o?l=e.volume_muted_icon||"mdi:volume-off":r<.33?l=e.volume_low_icon||"mdi:volume-low":r<.66&&(l=e.volume_medium_icon||"mdi:volume-medium"),a.qy`
      <div class="mp-volume-control">
        ${this.supportsFeature(t,8)?a.qy`
              <button
                class="mp-control-btn mp-volume-btn ${o?"mp-btn-muted":""}"
                @click=${e=>this.handleMuteToggle(e,i,t)}
                title="${o?"Unmute":"Mute"}"
                aria-label="${o?"Unmute":"Mute"}"
              >
                <ha-icon icon="${l}"></ha-icon>
              </button>
            `:a.qy`<ha-icon icon="${l}" class="mp-volume-icon"></ha-icon>`}
        <input
          type="range"
          class="mp-volume-slider"
          min="0"
          max="100"
          .value=${s}
          aria-label="Volume"
          @input=${e=>{var i;const t=e.target,a=parseInt(t.value,10);if(isNaN(a))return;t.style.setProperty("--progress",`${a}%`);const n=null===(i=t.parentElement)||void 0===i?void 0:i.querySelector(".mp-volume-value");n&&(n.textContent=`${a}%`)}}
          @change=${e=>this.handleVolumeChange(e,i,t)}
          style="--progress: ${s}%; --progress-color: ${e.progress_color||"var(--primary-color)"}; --bg-color: ${e.progress_background||"var(--divider-color)"};"
        />
        <span class="mp-volume-value">${s}%</span>
      </div>
    `}renderSourceSelector(e,i,t){var n,r;const o=t.attributes.source_list||[],s=t.attributes.source||"",l=(null===(n=t.entity_id)||void 0===n?void 0:n.includes("spotify"))||(null===(r=t.attributes.friendly_name)||void 0===r?void 0:r.toLowerCase().includes("spotify")),d=l?"mdi:spotify":"mdi:speaker";return a.qy`
      <div class="mp-source-selector">
        <ha-icon icon="${d}" class="mp-source-icon ${l?"mp-spotify-icon":""}"></ha-icon>
        <select
          class="mp-source-select"
          .value=${s}
          @change=${e=>this.handleSourceChange(e,i,t)}
        >
          ${o.map(e=>a.qy`<option value="${e}" ?selected=${e===s}>${e}</option>`)}
        </select>
      </div>
    `}renderSoundModeSelector(e,i,t){const n=t.attributes.sound_mode_list||[],r=t.attributes.sound_mode||"";return a.qy`
      <div class="mp-source-selector">
        <ha-icon icon="mdi:music-note" class="mp-source-icon"></ha-icon>
        <select
          class="mp-source-select"
          .value=${r}
          @change=${e=>this.handleSoundModeChange(e,i,t)}
        >
          ${n.map(e=>a.qy`<option value="${e}" ?selected=${e===r}>${e}</option>`)}
        </select>
      </div>
    `}renderExpandedControls(e,i,t){var n;return a.qy`
      <div class="mp-expanded-controls">
        <!-- Full Progress -->
        ${!1!==e.show_progress&&!1!==e.show_duration?this.renderProgressBar(e,i,t,!1):""}

        <!-- Control Row -->
        <div class="mp-expanded-row">
          ${e.show_shuffle?this.renderShuffleButton(e,i,t):""}
          ${this.supportsFeature(t,16)?a.qy`
                <button class="mp-control-btn" @click=${e=>this.handlePrevious(e,i,t)} title="Previous track" aria-label="Previous track">
                  <ha-icon icon="${e.previous_icon||"mdi:skip-previous"}"></ha-icon>
                </button>
              `:""}
          ${e.show_stop_button&&this.supportsFeature(t,4096)?a.qy`
                <button class="mp-control-btn" @click=${e=>this.handleStop(e,i,t)} title="Stop" aria-label="Stop">
                  <ha-icon icon="${e.stop_icon||"mdi:stop"}"></ha-icon>
                </button>
              `:""}
          ${this.supportsFeature(t,32)?a.qy`
                <button class="mp-control-btn" @click=${e=>this.handleNext(e,i,t)} title="Next track" aria-label="Next track">
                  <ha-icon icon="${e.next_icon||"mdi:skip-next"}"></ha-icon>
                </button>
              `:""}
          ${e.show_repeat?this.renderRepeatButton(e,i,t):""}
        </div>

        <!-- Volume -->
        ${!1!==e.show_volume&&this.supportsFeature(t,4)?this.renderVolumeControl(e,i,t):""}

        <!-- Source -->
        ${e.show_source&&this.supportsFeature(t,2048)&&(null===(n=t.attributes.source_list)||void 0===n?void 0:n.length)?this.renderSourceSelector(e,i,t):""}
      </div>
    `}_afterMediaControl(){this.triggerPreviewUpdate(!0)}async handlePlayPause(e,i,t){e.stopPropagation();const a=t.state,n=t.entity_id,r=t.attributes,o=n.includes("spotify");try{if("playing"===a)await i.callService("media_player","media_pause",{entity_id:n});else if("paused"===a)await i.callService("media_player","media_play",{entity_id:n});else if(o){const e=r.source,t=r.source_list||[];!e&&t.length>0&&(await i.callService("media_player","select_source",{entity_id:n,source:t[0]}),await new Promise(e=>setTimeout(e,250))),await i.callService("media_player","media_play",{entity_id:n})}else await i.callService("media_player","media_play",{entity_id:n})}finally{this._afterMediaControl()}}handleStop(e,i,t){e.stopPropagation(),i.callService("media_player","media_stop",{entity_id:t.entity_id}),this._afterMediaControl()}handlePrevious(e,i,t){e.stopPropagation(),i.callService("media_player","media_previous_track",{entity_id:t.entity_id}),this._afterMediaControl()}handleNext(e,i,t){e.stopPropagation(),i.callService("media_player","media_next_track",{entity_id:t.entity_id}),this._afterMediaControl()}handleShuffle(e,i,t){e.stopPropagation();const a=t.attributes.shuffle||!1;i.callService("media_player","shuffle_set",{entity_id:t.entity_id,shuffle:!a}),this._afterMediaControl()}handleRepeat(e,i,t){e.stopPropagation();let a="off";switch(t.attributes.repeat||"off"){case"off":a="all";break;case"all":a="one";break;case"one":a="off"}i.callService("media_player","repeat_set",{entity_id:t.entity_id,repeat:a}),this._afterMediaControl()}handleMuteToggle(e,i,t){e.stopPropagation();const a=t.attributes.is_volume_muted||!1;i.callService("media_player","volume_mute",{entity_id:t.entity_id,is_volume_muted:!a}),this._afterMediaControl()}handleVolumeChange(e,i,t){e.stopPropagation();const a=e.target,n=parseInt(a.value,10)/100;i.callService("media_player","volume_set",{entity_id:t.entity_id,volume_level:n}),this._afterMediaControl()}handleSeek(e,i,t,a){if(e.stopPropagation(),!a||!this.supportsFeature(t,2))return;const n=e.currentTarget.getBoundingClientRect(),r=(e.clientX-n.left)/n.width*a;i.callService("media_player","media_seek",{entity_id:t.entity_id,seek_position:r}),this._afterMediaControl()}handleSourceChange(e,i,t){e.stopPropagation();const a=e.target;i.callService("media_player","select_source",{entity_id:t.entity_id,source:a.value}),this._afterMediaControl()}handleSoundModeChange(e,i,t){e.stopPropagation();const a=e.target;i.callService("media_player","select_sound_mode",{entity_id:t.entity_id,sound_mode:a.value}),this._afterMediaControl()}toggleExpand(e,i){e.stopPropagation(),this._expandedModules.has(i)?this._expandedModules.delete(i):this._expandedModules.add(i),this.triggerPreviewUpdate(!0)}supportsFeature(e,i){return 0!==((e.attributes.supported_features||0)&i)}getDynamicColorStyles(e,i){const t=i.attributes,a=t.entity_picture||t.entity_picture_local,n=t.media_content_id||"",r=`${e.id}_${n}`;if(!a)return"";const o=this._extractedColors.get(r);return o?`\n        .media-player-container.mp-dynamic-colors {\n          --mp-dynamic-primary: ${o.primary};\n          --mp-dynamic-accent: ${o.accent};\n        }\n      `:(this._lastMediaContentId.get(e.id)!==n&&(this._lastMediaContentId.set(e.id,n),this.extractColorsFromImage(a,r)),"\n      .media-player-container.mp-dynamic-colors {\n        --mp-dynamic-primary: var(--primary-color);\n        --mp-dynamic-accent: var(--primary-color);\n      }\n    ")}async extractColorsFromImage(e,i){try{const t=new Image;t.crossOrigin="anonymous",t.onload=()=>{try{const e=document.createElement("canvas"),a=e.getContext("2d");if(!a)return;const n=50;e.width=n,e.height=n,a.drawImage(t,0,0,n,n);const r=a.getImageData(0,0,n,n).data,o=new Map;for(let e=0;e<r.length;e+=4){const i=r[e],t=r[e+1],a=r[e+2],n=Math.max(i,t,a),s=Math.min(i,t,a),l=(n+s)/2,d=0===n?0:(n-s)/n;if(l<40||l>220)continue;if(d<.2)continue;const c=32*Math.round(i/32),p=`${c},${32*Math.round(t/32)},${32*Math.round(a/32)}`,u=o.get(p);u?(u.count++,d>u.saturation&&(u.r=i,u.g=t,u.b=a,u.saturation=d)):o.set(p,{count:1,r:i,g:t,b:a,saturation:d})}let s={r:255,g:255,b:255,count:0,saturation:0},l=0;for(const e of o.values()){const i=e.count*(1+2*e.saturation);i>l&&(l=i,s=e)}const d=1.3,c=Math.min(255,Math.round(s.r*d)),p=Math.min(255,Math.round(s.g*d)),u=Math.min(255,Math.round(s.b*d));let m=c,v=p,h=u;(c+p+u)/3<120&&(m=Math.min(255,c+80),v=Math.min(255,p+80),h=Math.min(255,u+80));const _=`rgb(${m}, ${v}, ${h})`,y=`rgba(${m}, ${v}, ${h}, 0.6)`;this._extractedColors.set(i,{primary:_,accent:y}),this.triggerPreviewUpdate()}catch(e){}},t.onerror=()=>{},t.src=e}catch(e){}}getCurrentPosition(e){const i=e.attributes;if(!i.media_position||!i.media_position_updated_at)return 0;if("playing"!==e.state)return i.media_position||0;const t=new Date(i.media_position_updated_at).getTime(),a=(Date.now()-t)/1e3;return Math.min(i.media_position+a,i.media_duration||1/0)}formatTime(e){if(!e||e<0)return"0:00";const i=Math.floor(e/3600),t=Math.floor(e%3600/60),a=Math.floor(e%60);return i>0?`${i}:${t.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`:`${t}:${a.toString().padStart(2,"0")}`}validate(e){const i=e,t=[...super.validate(e).errors];return i.entity&&""!==i.entity.trim()||t.push("Media player entity is required"),i.layout&&!["compact","card","mini"].includes(i.layout)&&t.push("Invalid layout mode"),i.card_size&&(i.card_size<80||i.card_size>400)&&t.push("Card size must be between 80 and 400 pixels"),{valid:0===t.length,errors:t}}getStyles(){return`\n      ${r.m.getSliderStyles()}\n      /* Media Player Module Styles */\n      .media-player-container {\n        position: relative;\n        padding: 16px;\n        border-radius: var(--uc-r-12, 12px);\n        background: var(--uc-pane-bg, var(--card-background-color, var(--secondary-background-color)));\n        border: var(--uc-pane-border, none);\n        box-shadow: var(--uc-pane-shadow, none);\n        opacity: 0.9;\n        transition: all 0.3s ease;\n        overflow: visible;\n      }\n\n\n      .media-player-hidden {\n        display: none;\n      }\n\n      /* Blurred Album Art Background */\n      .mp-blurred-bg {\n        position: absolute;\n        background-size: cover;\n        background-position: center;\n        z-index: 0;\n      }\n\n      .mp-blurred-bg.mp-blur-expand {\n        inset: -20px;\n        transform: scale(1.2);\n      }\n\n      .mp-blurred-bg.mp-blur-contained {\n        inset: 0;\n        transform: scale(1.1);\n        border-radius: var(--uc-r-12, 12px);\n      }\n\n      /* Keep everything inside the card */\n      .media-player-container {\n        overflow: hidden;\n      }\n\n      .mp-blurred-bg::after {\n        content: '';\n        position: absolute;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.25);\n      }\n\n      /* Ensure content is above the blurred background */\n      .media-player-container > *:not(.mp-blurred-bg):not(.mp-visualizer-container) {\n        position: relative;\n        z-index: 2;\n      }\n\n      /* Dynamic Colors - applies when dynamic_colors is enabled */\n      .media-player-container.mp-dynamic-colors .mp-control-btn-large {\n        background: var(--mp-dynamic-primary, var(--primary-color));\n      }\n\n      .media-player-container.mp-dynamic-colors .mp-progress-fill {\n        background: var(--mp-dynamic-primary, var(--primary-color)) !important;\n      }\n\n      .media-player-container.mp-dynamic-colors .mp-volume-slider {\n        --progress-color: var(--mp-dynamic-primary, var(--primary-color));\n      }\n\n      .media-player-container.mp-dynamic-colors .mp-volume-slider::-webkit-slider-thumb {\n        background: var(--mp-dynamic-primary, var(--primary-color));\n      }\n\n      .media-player-container.mp-dynamic-colors .mp-volume-slider::-moz-range-thumb {\n        background: var(--mp-dynamic-primary, var(--primary-color));\n      }\n\n      .media-player-container.mp-dynamic-colors .mp-btn-active {\n        color: var(--mp-dynamic-primary, var(--primary-color)) !important;\n      }\n\n      .media-player-container.mp-dynamic-colors .mp-visualizer {\n        --visualizer-color: var(--mp-dynamic-primary, var(--primary-color));\n      }\n\n      /* ============================\n         ALBUM ART WRAPPER\n         ============================ */\n      .mp-art-wrapper {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n      }\n\n      /* ============================\n         ANIMATED VISUALIZERS\n         ============================ */\n      .mp-visualizer {\n        --visualizer-color: var(--mp-dynamic-primary, rgba(255, 255, 255, 0.8));\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 130%;\n        height: 130%;\n        z-index: 3;\n        pointer-events: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      /* === RINGS VISUALIZER === */\n      .mp-visualizer-rings .mp-viz-ring {\n        position: absolute;\n        border-radius: 50%;\n        border: 3px solid var(--visualizer-color);\n        opacity: 0;\n        animation: mp-viz-ring-pulse 2s ease-out infinite;\n      }\n\n      .mp-ring-1 { width: 70%; height: 70%; animation-delay: 0s; }\n      .mp-ring-2 { width: 85%; height: 85%; animation-delay: 0.4s; }\n      .mp-ring-3 { width: 100%; height: 100%; animation-delay: 0.8s; }\n      .mp-ring-4 { width: 115%; height: 115%; animation-delay: 1.2s; }\n\n      @keyframes mp-viz-ring-pulse {\n        0% { opacity: 0.9; transform: scale(0.85); }\n        50% { opacity: 0.5; }\n        100% { opacity: 0; transform: scale(1.1); }\n      }\n\n      /* === BARS VISUALIZER === */\n      .mp-visualizer-bars {\n        flex-wrap: nowrap;\n        justify-content: center;\n        align-items: center;\n        gap: 4px;\n      }\n\n      .mp-visualizer-bars .mp-viz-bar {\n        width: 8px;\n        height: 80px;\n        background: var(--visualizer-color);\n        border-radius: var(--uc-r-4, 4px);\n        animation: mp-viz-bar-bounce 0.5s ease-in-out infinite;\n        animation-delay: calc(var(--bar-index) * 0.04s);\n        opacity: 0.9;\n      }\n\n      @keyframes mp-viz-bar-bounce {\n        0%, 100% { transform: scaleY(0.3); opacity: 0.6; }\n        50% { transform: scaleY(1); opacity: 1; }\n      }\n\n      /* === WAVE VISUALIZER === */\n      .mp-visualizer-wave {\n        flex-direction: column;\n        justify-content: center;\n        gap: 15px;\n      }\n\n      .mp-viz-wave-line {\n        width: 90%;\n        height: 5px;\n        background: var(--visualizer-color);\n        border-radius: var(--uc-r-3, 3px);\n        animation: mp-viz-wave-flow 1.5s ease-in-out infinite;\n        opacity: 0.9;\n      }\n\n      .mp-wave-1 { animation-delay: 0s; }\n      .mp-wave-2 { animation-delay: 0.2s; opacity: 0.7; }\n      .mp-wave-3 { animation-delay: 0.4s; opacity: 0.5; }\n\n      @keyframes mp-viz-wave-flow {\n        0%, 100% { \n          transform: scaleX(0.4) translateX(-30%); \n          opacity: 0.4;\n        }\n        50% { \n          transform: scaleX(1) translateX(30%); \n          opacity: 1;\n        }\n      }\n\n      /* === DOTS VISUALIZER === */\n      .mp-visualizer-dots {\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        gap: 8px;\n        padding: 20px;\n      }\n\n      .mp-visualizer-dots .mp-viz-dot {\n        width: 14px;\n        height: 14px;\n        background: var(--visualizer-color);\n        border-radius: 50%;\n        animation: mp-viz-dot-bounce 0.8s ease-in-out infinite;\n        animation-delay: calc(var(--dot-index) * 0.07s);\n        box-shadow: 0 0 12px var(--visualizer-color);\n      }\n\n      @keyframes mp-viz-dot-bounce {\n        0%, 100% { \n          transform: scale(0.6);\n          opacity: 0.5;\n        }\n        50% { \n          transform: scale(1.3);\n          opacity: 1;\n        }\n      }\n\n      /* === SPECTRUM VISUALIZER === */\n      .mp-visualizer-spectrum .mp-viz-spectrum-bar {\n        position: absolute;\n        width: 5px;\n        background: var(--visualizer-color);\n        border-radius: var(--uc-r-3, 3px);\n        transform-origin: center bottom;\n        transform: rotate(calc(var(--spectrum-index) * 15deg)) translateY(-35%);\n        animation: mp-viz-spectrum-grow 0.8s ease-in-out infinite;\n        animation-delay: calc(var(--spectrum-index) * 0.04s);\n        opacity: 0.8;\n      }\n\n      @keyframes mp-viz-spectrum-grow {\n        0%, 100% { height: 25px; opacity: 0.5; }\n        50% { height: 70px; opacity: 1; }\n      }\n\n      /* === PULSE VISUALIZER === */\n      .mp-visualizer-pulse .mp-viz-pulse-core {\n        position: absolute;\n        width: 60%;\n        height: 60%;\n        background: radial-gradient(circle, var(--visualizer-color) 0%, transparent 70%);\n        border-radius: 50%;\n        animation: mp-viz-pulse-breathe 1.2s ease-in-out infinite;\n        opacity: 0.6;\n      }\n\n      .mp-visualizer-pulse .mp-viz-pulse-wave {\n        position: absolute;\n        width: 70%;\n        height: 70%;\n        border: 4px solid var(--visualizer-color);\n        border-radius: 50%;\n        animation: mp-viz-pulse-expand 2s ease-out infinite;\n      }\n\n      .mp-pulse-1 { animation-delay: 0s; }\n      .mp-pulse-2 { animation-delay: 0.6s; }\n      .mp-pulse-3 { animation-delay: 1.2s; }\n\n      @keyframes mp-viz-pulse-breathe {\n        0%, 100% { transform: scale(0.85); opacity: 0.5; }\n        50% { transform: scale(1.1); opacity: 0.8; }\n      }\n\n      @keyframes mp-viz-pulse-expand {\n        0% { transform: scale(0.8); opacity: 0.8; }\n        100% { transform: scale(1.5); opacity: 0; }\n      }\n\n      /* === ORBIT VISUALIZER === */\n      .mp-visualizer-orbit .mp-viz-orbit-ring {\n        position: absolute;\n        border: 3px solid var(--visualizer-color);\n        border-radius: 50%;\n        opacity: 0.4;\n        animation: mp-viz-orbit-spin linear infinite;\n      }\n\n      .mp-orbit-1 { width: 65%; height: 65%; animation-duration: 2s; border-style: dashed; }\n      .mp-orbit-2 { width: 82%; height: 82%; animation-duration: 3s; animation-direction: reverse; }\n      .mp-orbit-3 { width: 100%; height: 100%; animation-duration: 4s; border-style: dotted; }\n\n      .mp-viz-orbit-dot {\n        position: absolute;\n        top: 0;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        width: 14px;\n        height: 14px;\n        background: var(--visualizer-color);\n        border-radius: 50%;\n        opacity: 1;\n        box-shadow: 0 0 12px var(--visualizer-color);\n        animation: mp-viz-orbit-dot-pulse 1s ease-in-out infinite;\n      }\n\n      .mp-viz-orbit-dot.mp-dot-2 {\n        top: 50%;\n        left: 100%;\n        animation-delay: 0.3s;\n      }\n\n      .mp-viz-orbit-dot.mp-dot-3 {\n        top: 100%;\n        left: 50%;\n        animation-delay: 0.6s;\n      }\n\n      @keyframes mp-viz-orbit-spin {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n\n      @keyframes mp-viz-orbit-dot-pulse {\n        0%, 100% { transform: translateX(-50%) translateY(-50%) scale(0.8); opacity: 0.7; }\n        50% { transform: translateX(-50%) translateY(-50%) scale(1.3); opacity: 1; }\n      }\n\n      /* === SPIRAL VISUALIZER === */\n      .mp-visualizer-spiral .mp-viz-spiral-arm {\n        position: absolute;\n        border: 4px solid transparent;\n        border-top-color: var(--visualizer-color);\n        border-right-color: var(--visualizer-color);\n        border-radius: 50%;\n        opacity: 0.7;\n      }\n\n      .mp-spiral-1 { \n        width: 45%; \n        height: 45%; \n        animation: mp-viz-spiral-rotate 1s linear infinite;\n      }\n      .mp-spiral-2 { \n        width: 65%; \n        height: 65%; \n        animation: mp-viz-spiral-rotate 1.5s linear infinite reverse;\n      }\n      .mp-spiral-3 { \n        width: 85%; \n        height: 85%; \n        animation: mp-viz-spiral-rotate 2s linear infinite;\n      }\n      .mp-spiral-4 { \n        width: 105%; \n        height: 105%; \n        animation: mp-viz-spiral-rotate 2.5s linear infinite reverse;\n        opacity: 0.4;\n      }\n\n      @keyframes mp-viz-spiral-rotate {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n\n      /* === EQUALIZER VISUALIZER === */\n      .mp-visualizer-equalizer {\n        justify-content: center;\n        align-items: flex-end;\n        gap: 4px;\n        padding-bottom: 10%;\n      }\n\n      .mp-visualizer-equalizer .mp-viz-eq-bar {\n        width: 10px;\n        background: linear-gradient(to top, var(--visualizer-color) 0%, transparent 100%);\n        border-radius: var(--uc-r-5, 5px) var(--uc-r-5, 5px) 0 0;\n        animation: mp-viz-eq-bounce 0.4s ease-in-out infinite;\n        animation-delay: calc(var(--eq-index) * 0.03s);\n        opacity: 0.85;\n      }\n\n      @keyframes mp-viz-eq-bounce {\n        0%, 100% { height: 20px; }\n        30% { height: calc(30px + var(--eq-index) * 3px); }\n        50% { height: calc(80px + (var(--eq-index) - 12) * (var(--eq-index) - 12) * -0.8px); }\n        70% { height: calc(40px + var(--eq-index) * 2px); }\n      }\n\n      /* === PARTICLES VISUALIZER === */\n      .mp-visualizer-particles {\n        overflow: hidden;\n      }\n\n      .mp-visualizer-particles .mp-viz-particle {\n        position: absolute;\n        width: 8px;\n        height: 8px;\n        background: var(--visualizer-color);\n        border-radius: 50%;\n        opacity: 0;\n        box-shadow: 0 0 8px var(--visualizer-color);\n        animation: mp-viz-particle-rise 3s ease-in-out infinite;\n        animation-delay: calc(var(--particle-index) * 0.075s);\n        left: calc((var(--particle-index) / var(--particle-total)) * 100%);\n        bottom: 0;\n      }\n\n      @keyframes mp-viz-particle-rise {\n        0% {\n          transform: translateY(0) scale(0.5);\n          opacity: 0;\n        }\n        10% {\n          opacity: 1;\n        }\n        50% {\n          transform: translateY(-150px) scale(1);\n          opacity: 0.8;\n        }\n        100% {\n          transform: translateY(-300px) scale(0.3);\n          opacity: 0;\n        }\n      }\n\n      /* ============================\n         COMPACT LAYOUT\n         ============================ */\n      .media-player-compact .mp-compact-row {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n      }\n\n      .media-player-compact .mp-track-info {\n        flex: 1;\n        min-width: 0;\n        overflow: hidden;\n      }\n\n      .media-player-compact .mp-track-title {\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .media-player-compact .mp-track-artist {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .media-player-compact .mp-quick-controls {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n      }\n\n      /* ============================\n         CARD LAYOUT\n         ============================ */\n      .media-player-card {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 12px;\n        text-align: center;\n      }\n\n      .media-player-card .mp-card-name {\n        width: 100%;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        text-align: center;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .media-player-card .mp-card-track-info {\n        width: 100%;\n        padding: 0 8px;\n      }\n\n      .media-player-card .mp-card-title {\n        font-size: 16px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .media-player-card .mp-card-artist {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 2px;\n      }\n\n      .media-player-card .mp-card-album {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        opacity: 0.7;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 2px;\n        font-style: italic;\n      }\n\n      .media-player-card .mp-card-controls {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n      }\n\n      /* ============================\n         MINI LAYOUT\n         ============================ */\n      .media-player-mini {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 8px;\n      }\n\n      .media-player-mini .mp-mini-text {\n        flex: 1;\n        font-size: 13px;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      /* ============================\n         ALBUM ART\n         ============================ */\n      .mp-album-art {\n        position: relative;\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: var(--secondary-background-color);\n        overflow: hidden;\n        z-index: 2;\n      }\n\n      .mp-album-art img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n\n      .mp-album-art ha-icon {\n        color: var(--secondary-text-color);\n      }\n\n      .mp-album-art-card {\n        max-width: 100%;\n      }\n\n      /* ============================\n         CONTROL BUTTONS\n         ============================ */\n      .mp-control-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 36px;\n        height: 36px;\n        padding: 0;\n        border: none;\n        border-radius: 50%;\n        background: transparent;\n        color: var(--primary-text-color);\n        cursor: pointer;\n        transition: all 0.2s ease;\n      }\n\n      .mp-control-btn:hover {\n        background: var(--secondary-background-color);\n        color: var(--primary-color);\n      }\n\n      .mp-control-btn:active {\n        transform: scale(0.95);\n      }\n\n      .mp-control-btn.mp-btn-active {\n        color: var(--primary-color);\n      }\n\n      .mp-control-btn.mp-btn-muted {\n        color: var(--disabled-text-color);\n      }\n\n      .mp-control-btn-large {\n        width: 52px;\n        height: 52px;\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n\n      .mp-control-btn-large:hover {\n        background: var(--primary-color);\n        filter: brightness(1.1);\n        color: var(--text-primary-color, #fff);\n      }\n\n      .mp-control-btn-large ha-icon {\n        --mdc-icon-size: 28px;\n        color: var(--text-primary-color, #fff);\n        display: flex;\n      }\n\n      .mp-expand-btn {\n        width: 32px;\n        height: 32px;\n      }\n\n      /* ============================\n         PROGRESS BAR\n         ============================ */\n      .mp-progress-container {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        width: 100%;\n        padding: 4px 0;\n      }\n\n      .mp-progress-compact {\n        padding: 0;\n        margin-top: 8px;\n      }\n\n      .mp-progress-bar {\n        flex: 1;\n        height: 4px;\n        border-radius: var(--uc-r-2, 2px);\n        cursor: pointer;\n        overflow: hidden;\n        transition: height 0.2s ease;\n      }\n\n      .mp-progress-bar:hover {\n        height: 6px;\n      }\n\n      .mp-progress-compact .mp-progress-bar {\n        height: 3px;\n      }\n\n      .mp-progress-compact .mp-progress-bar:hover {\n        height: 4px;\n      }\n\n      .mp-progress-fill {\n        height: 100%;\n        border-radius: var(--uc-r-2, 2px);\n        transition: width 0.1s linear;\n      }\n\n      .mp-time {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        min-width: 35px;\n        text-align: center;\n      }\n\n      /* ============================\n         VOLUME CONTROL\n         ============================ */\n      .mp-volume-control {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        width: 100%;\n        padding: 4px 0;\n      }\n\n      .mp-volume-icon {\n        color: var(--secondary-text-color);\n        --mdc-icon-size: 20px;\n      }\n\n      .mp-volume-btn {\n        width: 32px;\n        height: 32px;\n      }\n\n      .mp-volume-slider {\n        flex: 1;\n        height: 4px;\n        -webkit-appearance: none;\n        appearance: none;\n        background: linear-gradient(\n          to right,\n          var(--progress-color, var(--primary-color)) 0%,\n          var(--progress-color, var(--primary-color)) var(--progress, 50%),\n          var(--bg-color, var(--divider-color)) var(--progress, 50%),\n          var(--bg-color, var(--divider-color)) 100%\n        );\n        border-radius: var(--uc-r-2, 2px);\n        cursor: pointer;\n      }\n\n      .mp-volume-slider::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background: var(--primary-color);\n        cursor: pointer;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n        transition: transform 0.1s ease;\n      }\n\n      .mp-volume-slider::-webkit-slider-thumb:hover {\n        transform: scale(1.2);\n      }\n\n      .mp-volume-slider::-moz-range-thumb {\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        background: var(--primary-color);\n        cursor: pointer;\n        border: none;\n        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n      }\n\n      .mp-volume-value {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        min-width: 35px;\n        text-align: right;\n      }\n\n      /* ============================\n         SOURCE/SOUND MODE SELECTOR\n         ============================ */\n      .mp-source-selector {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        width: 100%;\n        padding: 4px 0;\n      }\n\n      .mp-source-icon {\n        color: var(--secondary-text-color);\n        --mdc-icon-size: 20px;\n        flex-shrink: 0;\n      }\n\n      .mp-spotify-icon {\n        color: #1DB954;\n      }\n\n      .mp-source-select {\n        flex: 1;\n        padding: 6px 10px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-4, 4px);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        font-size: 13px;\n        cursor: pointer;\n        outline: none;\n      }\n\n      .mp-source-select:focus {\n        border-color: var(--primary-color);\n      }\n\n      /* ============================\n         EXPANDED CONTROLS\n         ============================ */\n      .mp-expanded-controls {\n        margin-top: 12px;\n        padding-top: 12px;\n        border-top: 1px solid var(--divider-color);\n        animation: mp-expand-in 0.2s ease-out;\n      }\n\n      @keyframes mp-expand-in {\n        from {\n          opacity: 0;\n          transform: translateY(-10px);\n        }\n        to {\n          opacity: 1;\n          transform: translateY(0);\n        }\n      }\n\n      .mp-expanded-row {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        margin: 8px 0;\n      }\n    `}}}};