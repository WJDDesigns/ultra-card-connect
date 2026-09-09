export const __webpack_esm_ids__=[2783];export const __webpack_esm_modules__={8990(o,e,a){a.d(e,{UltraAnimatedClockModule:()=>c});var r=a(2618),t=a(7475),n=(a(7921),a(6478));var l=a(9766),i=a(7907);class c extends t.m{constructor(){super(...arguments),this.metadata={type:"animated_clock",title:"Animated Clock",description:"Beautiful flip clock with smooth animations",author:"WJD Designs",version:"1.0.0",icon:"mdi:clock-outline",category:"content",tags:["clock","time","pro","premium","animated","flip"]}}createDefault(o,e){return{id:o||this.generateId("animated_clock"),type:"animated_clock",time_format:"12",clock_style:"flip",update_frequency:"1",analog_show_seconds:!0,analog_smooth_seconds:!0,analog_show_hour_hand:!0,analog_show_minute_hand:!0,analog_show_hour_markers:!0,analog_show_center_dot:!0,analog_show_numbers:!1,analog_show_hour_ticks:!0,analog_show_minute_ticks:!0,analog_face_background_type:"color",analog_face_background_size:"cover",analog_face_background_position:"center",analog_face_background_repeat:"no-repeat",show_hours:!0,show_minutes:!0,show_seconds:!0,show_ampm:!0,show_separators:!0,show_labels:!0,show_prefix:!0,show_prompt:!0,show_command:!0,show_cursor:!0,clock_size:100,clock_color:"var(--primary-text-color)",clock_background:"var(--uc-pane-bg, var(--card-background-color))",flip_tile_color:"rgba(0, 0, 0, 0.5)",flip_hours_color:"var(--primary-text-color)",flip_minutes_color:"var(--primary-text-color)",flip_separator_color:"var(--primary-text-color)",flip_ampm_color:"var(--primary-text-color)",digital_background_color:"#000",digital_hours_color:"#ff3333",digital_minutes_color:"#ff3333",digital_seconds_color:"#ff3333",digital_separator_color:"#ff3333",digital_ampm_color:"#33ff33",digital_glow_color:"#ff0000",binary_hours_empty_color:"rgba(128, 128, 128, 0.2)",binary_hours_filled_color:"var(--primary-text-color)",binary_minutes_empty_color:"rgba(128, 128, 128, 0.2)",binary_minutes_filled_color:"var(--primary-text-color)",binary_seconds_empty_color:"rgba(128, 128, 128, 0.2)",binary_seconds_filled_color:"var(--primary-text-color)",binary_separator_color:"var(--primary-text-color)",binary_hours_label_color:"var(--primary-text-color)",binary_minutes_label_color:"var(--primary-text-color)",binary_seconds_label_color:"var(--primary-text-color)",minimal_hours_color:"var(--primary-text-color)",minimal_minutes_color:"var(--primary-text-color)",minimal_seconds_color:"var(--primary-text-color)",minimal_separator_color:"var(--primary-text-color)",minimal_ampm_color:"var(--primary-text-color)",retro_background_color:"linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",retro_hours_tile_color:"rgba(0, 0, 0, 0.3)",retro_minutes_tile_color:"rgba(0, 0, 0, 0.3)",retro_seconds_tile_color:"rgba(0, 0, 0, 0.3)",retro_separator_tile_color:"rgba(0, 0, 0, 0.3)",retro_hours_color:"#ffa500",retro_minutes_color:"#ffa500",retro_seconds_color:"#ffa500",retro_separator_color:"#ffa500",retro_ampm_color:"#00ff00",text_orientation:"horizontal",text_word_gap:8,text_prefix_color:"var(--primary-text-color)",text_prefix_size:38,text_hours_color:"var(--primary-text-color)",text_hours_size:48,text_minutes_color:"var(--primary-text-color)",text_minutes_size:48,text_ampm_color:"var(--primary-text-color)",text_ampm_size:24,neon_padding:24,neon_hours_color:"#00ffff",neon_minutes_color:"#00ffff",neon_seconds_color:"#00ffff",neon_separator_color:"#ff00ff",neon_ampm_color:"#00ff00",material_vertical_gap:8,material_background_color:"var(--card-background-color)",material_hours_color:"var(--primary-text-color)",material_minutes_color:"var(--primary-text-color)",material_seconds_color:"var(--primary-text-color)",material_separator_color:"var(--primary-text-color)",material_ampm_color:"var(--primary-text-color)",terminal_background_color:"#1e1e1e",terminal_line1_color:"#4ec9b0",terminal_line2_color:"#ce9178",terminal_cursor_color:"#4ec9b0",terminal_hours_color:"#d4d4d4",terminal_minutes_color:"#d4d4d4",terminal_seconds_color:"#d4d4d4",terminal_separator_color:"#d4d4d4",terminal_ampm_color:"#d4d4d4",terminal_vertical_spacing:8,terminal_line1_size:17,terminal_line2_size:17,terminal_output_size:38,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderGeneralTab(o,e,a,l){return function(o,e,a,l,i){var c;const s=e,d=(null===(c=a.locale)||void 0===c?void 0:c.language)||"en";return r.qy`
    ${o.injectUcFormStyles()}
    <style>${t.m.getSliderStyles()}</style>
    <div class="module-general-settings">
      <!-- ============================================ -->
      <!-- CLOCK CONFIGURATION SECTION -->
      <!-- ============================================ -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-12, 12px); padding: 20px; margin-bottom: 20px; border: 1px solid rgba(var(--rgb-primary-color), 0.12);"
      >
        <div
          class="section-title"
          style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;"
        >
          <ha-icon icon="mdi:clock-outline" style="color: var(--primary-color);"></ha-icon>
          ${(0,n.kg)("editor.animated_clock.config.title",d,"Clock Configuration")}
        </div>

        <!-- Clock Style -->
        ${o.renderFieldSection((0,n.kg)("editor.animated_clock.clock_style",d,"Clock Style"),(0,n.kg)("editor.animated_clock.clock_style_desc",d,"Choose from 10 different clock display styles"),a,{clock_style:s.clock_style||"flip"},[o.selectField("clock_style",[{value:"flip",label:"Flip Clock"},{value:"digital",label:"Digital LED"},{value:"analog",label:"Analog Clock"},{value:"binary",label:"Binary Clock"},{value:"minimal",label:"Minimal"},{value:"retro",label:"Retro 7-Segment"},{value:"word",label:"Text Clock"},{value:"neon",label:"Neon Glow"},{value:"material",label:"Material Design"},{value:"terminal",label:"Terminal/Console"}])],e=>{e.detail.value.clock_style!==s.clock_style&&(i(e.detail.value),setTimeout(()=>o.triggerPreviewUpdate(),50))})}

        <!-- Time Format (hidden for analog clock) -->
        ${"analog"!==s.clock_style?r.qy`
              <div style="margin-top: 16px;">
                ${o.renderFieldSection((0,n.kg)("editor.animated_clock.time_format",d,"Time Format"),(0,n.kg)("editor.animated_clock.time_format_desc",d,"12-hour or 24-hour time display"),a,{time_format:s.time_format||"12"},[o.selectField("time_format",[{value:"12",label:"12 Hour (AM/PM)"},{value:"24",label:"24 Hour"}])],e=>{e.detail.value.time_format!==s.time_format&&(i(e.detail.value),setTimeout(()=>o.triggerPreviewUpdate(),50))})}
              </div>
            `:""}

        <!-- Clock Size Slider -->
        <div style="margin-top: 16px;">
          ${o.renderSliderField((0,n.kg)("editor.animated_clock.clock_size",d,"Clock Size"),(0,n.kg)("editor.animated_clock.clock_size_desc",d,"Scale factor for clock size (0–200)"),s.clock_size||100,100,0,200,1,e=>{i({clock_size:e}),setTimeout(()=>o.triggerPreviewUpdate(),50)},"%")}
        </div>
      </div>

      <!-- ============================================ -->
      <!-- CLOCK CUSTOMIZATION SECTION -->
      <!-- ============================================ -->
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-12, 12px); padding: 20px; margin-bottom: 20px; border: 1px solid rgba(var(--rgb-primary-color), 0.12);"
      >
        <div
          class="section-title"
          style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;"
        >
          <ha-icon icon="mdi:palette" style="color: var(--primary-color);"></ha-icon>
          ${(0,n.kg)("editor.animated_clock.customization.title",d,"Clock Customization")}
        </div>

        ${function(o,e,a,t,l){const i=o.clock_style||"flip";return"analog"===i?r.qy`
      <!-- Hour Hand -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.analog_show_hour_hand",l,"Hour Hand"),"",e,{analog_show_hour_hand:!1!==o.analog_show_hour_hand},[t.booleanField("analog_show_hour_hand")],o=>{a({analog_show_hour_hand:o.detail.value.analog_show_hour_hand}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.analog_show_hour_hand?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.analog_hour_hand_color||o.clock_color||"var(--primary-text-color)"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({analog_hour_hand_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Minute Hand -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.analog_show_minute_hand",l,"Minute Hand"),"",e,{analog_show_minute_hand:!1!==o.analog_show_minute_hand},[t.booleanField("analog_show_minute_hand")],o=>{a({analog_show_minute_hand:o.detail.value.analog_show_minute_hand}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.analog_show_minute_hand?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.analog_minute_hand_color||o.clock_color||"var(--primary-text-color)"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({analog_minute_hand_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Second Hand -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.analog_show_seconds",l,"Second Hand"),"",e,{analog_show_seconds:!1!==o.analog_show_seconds},[t.booleanField("analog_show_seconds")],o=>{a({analog_show_seconds:o.detail.value.analog_show_seconds}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.analog_show_seconds?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.analog_second_hand_color||"#ff4444"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({analog_second_hand_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
                <!-- Smooth Seconds Toggle -->
                ${t.renderFieldSection((0,n.kg)("editor.animated_clock.analog_smooth_seconds",l,"Smooth Sweeping Motion"),"",e,{analog_smooth_seconds:!1!==o.analog_smooth_seconds},[t.booleanField("analog_smooth_seconds")],o=>{a({analog_smooth_seconds:o.detail.value.analog_smooth_seconds}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
              </div>
            `:""}
      </div>

      <!-- Hour Markers -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.analog_show_center_dot",l,"Center Dot"),"",e,{analog_show_hour_markers:!1!==o.analog_show_hour_markers},[t.booleanField("analog_show_hour_markers")],o=>{a({analog_show_hour_markers:o.detail.value.analog_show_hour_markers}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.analog_show_center_dot?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.analog_center_dot_color||o.clock_color||"var(--primary-text-color)"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({analog_center_dot_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Clock Numbers (1-12) -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_hours",l,"Hours"),"",e,{analog_show_numbers:!0===o.analog_show_numbers},[t.booleanField("analog_show_numbers")],o=>{a({analog_show_numbers:o.detail.value.analog_show_numbers}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_hours?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.neon_hours_color||"#00ffff"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({neon_hours_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Minutes -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_minutes",l,"Minutes"),"",e,{show_minutes:!1!==o.show_minutes},[t.booleanField("show_minutes")],o=>{a({show_minutes:o.detail.value.show_minutes}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_minutes?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.neon_minutes_color||"#00ffff"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({neon_minutes_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Seconds -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_seconds",l,"Seconds"),"",e,{show_seconds:!1!==o.show_seconds},[t.booleanField("show_seconds")],o=>{a({show_seconds:o.detail.value.show_seconds}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_seconds?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.neon_seconds_color||"#00ffff"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({neon_seconds_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Separators -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_separators",l,"Separators (:)"),"",e,{show_separators:!1!==o.show_separators},[t.booleanField("show_separators")],o=>{a({show_separators:o.detail.value.show_separators}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_separators?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.neon_separator_color||"#ff00ff"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({neon_separator_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- AM/PM (12-hour format only) -->
      ${"12"===o.time_format?r.qy`
            <div style="margin-bottom: 20px;">
              ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_ampm",l,"AM/PM"),"",e,{show_ampm:!1!==o.show_ampm},[t.booleanField("show_ampm")],o=>{a({show_ampm:o.detail.value.show_ampm}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
              ${!1!==o.show_ampm?r.qy`
                    <div style="margin-top: 8px; padding-left: 40px;">
                      <ultra-color-picker
                        .value="${o.neon_ampm_color||"#00ff00"}"
                        .hass="${e}"
                        @value-changed="${o=>{a({neon_ampm_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                        style="width: 100%; height: 40px;"
                      ></ultra-color-picker>
                    </div>
                  `:""}
            </div>
          `:""}
    `:"flip"===i?r.qy`
      <!-- Flip Tile Background Color -->
      <div style="margin-bottom: 20px;">
        <label
          style="display: block; font-size: 13px; font-weight: 500; color: var(--primary-text-color); margin-bottom: 6px;"
        >
          ${(0,n.kg)("editor.animated_clock.flip_tile_color",l,"Tile Background Color")}
        </label>
        <ultra-color-picker
          .value="${o.flip_tile_color||"rgba(0, 0, 0, 0.5)"}"
          .hass="${e}"
          @value-changed="${o=>{a({flip_tile_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
          style="width: 100%; height: 40px;"
        ></ultra-color-picker>
      </div>

      <div
        style="border-top: 1px solid var(--divider-color); padding-top: 20px; margin-top: 20px;"
      ></div>

      <!-- Hours -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_hours",l,"Hours"),"",e,{show_hours:!1!==o.show_hours},[t.booleanField("show_hours")],o=>{a({show_hours:o.detail.value.show_hours}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_hours?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.flip_hours_color||"var(--primary-text-color)"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({flip_hours_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Minutes -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_minutes",l,"Minutes"),"",e,{show_minutes:!1!==o.show_minutes},[t.booleanField("show_minutes")],o=>{a({show_minutes:o.detail.value.show_minutes}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_minutes?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.flip_minutes_color||"var(--primary-text-color)"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({flip_minutes_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Separators -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_separators",l,"Separators (:)"),"",e,{show_separators:!1!==o.show_separators},[t.booleanField("show_separators")],o=>{a({show_separators:o.detail.value.show_separators}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_separators?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.flip_separator_color||"var(--primary-text-color)"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({flip_separator_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- AM/PM (12-hour format only) -->
      ${"12"===o.time_format?r.qy`
            <div style="margin-bottom: 20px;">
              ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_ampm",l,"AM/PM"),"",e,{show_ampm:!1!==o.show_ampm},[t.booleanField("show_ampm")],o=>{a({show_ampm:o.detail.value.show_ampm}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
              ${!1!==o.show_ampm?r.qy`
                    <div style="margin-top: 8px; padding-left: 40px;">
                      <ultra-color-picker
                        .value="${o.flip_ampm_color||"var(--primary-text-color)"}"
                        .hass="${e}"
                        @value-changed="${o=>{a({flip_ampm_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                        style="width: 100%; height: 40px;"
                      ></ultra-color-picker>
                    </div>
                  `:""}
            </div>
          `:""}
    `:"digital"===i?r.qy`
      <!-- Clock Background Color -->
      <div style="margin-bottom: 20px;">
        <label
          style="display: block; font-size: 13px; font-weight: 500; color: var(--primary-text-color); margin-bottom: 6px;"
        >
          Clock Background Color
        </label>
        <ultra-color-picker
          .value="${o.digital_background_color||"#000"}"
          .hass="${e}"
          @value-changed="${o=>{a({digital_background_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
          style="width: 100%; height: 40px;"
        ></ultra-color-picker>
      </div>

      <div
        style="border-top: 1px solid var(--divider-color); padding-top: 20px; margin-top: 20px;"
      ></div>

      <!-- Hours -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_prompt",l,"Terminal Prompt"),"",e,{show_hours:!1!==o.show_hours},[t.booleanField("show_hours")],o=>{a({show_hours:o.detail.value.show_hours}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_prompt?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.terminal_line1_color||"#4ec9b0"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({terminal_line1_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Terminal Command -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_command",l,"Terminal Command"),"",e,{show_command:!1!==o.show_command},[t.booleanField("show_command")],o=>{a({show_command:o.detail.value.show_command}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_command?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.terminal_line2_color||"#ce9178"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({terminal_line2_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Hours -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_hours",l,"Hours"),"",e,{show_hours:!1!==o.show_hours},[t.booleanField("show_hours")],o=>{a({show_hours:o.detail.value.show_hours}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_hours?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.terminal_hours_color||"#d4d4d4"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({terminal_hours_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Minutes -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_minutes",l,"Minutes"),"",e,{show_minutes:!1!==o.show_minutes},[t.booleanField("show_minutes")],o=>{a({show_minutes:o.detail.value.show_minutes}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_minutes?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.terminal_minutes_color||"#d4d4d4"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({terminal_minutes_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Seconds -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_seconds",l,"Seconds"),"",e,{show_seconds:!1!==o.show_seconds},[t.booleanField("show_seconds")],o=>{a({show_seconds:o.detail.value.show_seconds}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_seconds?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.terminal_seconds_color||"#d4d4d4"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({terminal_seconds_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Separators -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_separators",l,"Separators (:)"),"",e,{show_separators:!1!==o.show_separators},[t.booleanField("show_separators")],o=>{a({show_separators:o.detail.value.show_separators}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_separators?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.terminal_separator_color||"#d4d4d4"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({terminal_separator_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- AM/PM (12-hour format only) -->
      ${"12"===o.time_format?r.qy`
            <div style="margin-bottom: 20px;">
              ${t.renderFieldSection("AM/PM","",e,{show_ampm:!1!==o.show_ampm},[t.booleanField("show_ampm")],o=>{a({show_ampm:o.detail.value.show_ampm}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
              ${!1!==o.show_ampm?r.qy`
                    <div style="margin-top: 8px; padding-left: 40px;">
                      <ultra-color-picker
                        .value="${o.terminal_ampm_color||"#d4d4d4"}"
                        .hass="${e}"
                        @value-changed="${o=>{a({terminal_ampm_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                        style="width: 100%; height: 40px;"
                      ></ultra-color-picker>
                    </div>
                  `:""}
            </div>
          `:""}

      <!-- Cursor -->
      <div style="margin-bottom: 20px;">
        ${t.renderFieldSection((0,n.kg)("editor.animated_clock.show_cursor",l,"Blinking Cursor"),"",e,{show_cursor:!1!==o.show_cursor},[t.booleanField("show_cursor")],o=>{a({show_cursor:o.detail.value.show_cursor}),setTimeout(()=>t.triggerPreviewUpdate(),50)})}
        ${!1!==o.show_cursor?r.qy`
              <div style="margin-top: 8px; padding-left: 40px;">
                <ultra-color-picker
                  .value="${o.terminal_cursor_color||"#4ec9b0"}"
                  .hass="${e}"
                  @value-changed="${o=>{a({terminal_cursor_color:o.detail.value}),setTimeout(()=>t.triggerPreviewUpdate(),50)}}"
                  style="width: 100%; height: 40px;"
                ></ultra-color-picker>
              </div>
            `:""}
      </div>
    `:r.qy`
    <div style="text-align: center; padding: 20px; color: var(--secondary-text-color);">
      Select a clock style to customize
    </div>
  `}(s,a,i,o,d)}
      </div>
    </div>
  `}(this,o,e,0,l)}renderPreview(o,e,a,t){const n=o,i=n,c=i.design||{},s=parseInt(n.update_frequency||"1");l.D.registerClock(n.id,s);const d=new Date,p=d.getHours(),_=p%12||12,m="24"===n.time_format?p:_,g=d.getMinutes(),u=d.getSeconds(),h=d.getMilliseconds(),v=p>=12?"PM":"AM";let k;switch(n.clock_style||"flip"){case"flip":default:k=this._renderFlipClock(m,g,v,n);break;case"digital":k=this._renderDigitalClock(m,g,u,v,n);break;case"analog":k=this._renderAnalogClock(m,g,u,h,e,n);break;case"binary":k=this._renderBinaryClock(p,g,u,n);break;case"minimal":k=this._renderMinimalClock(m,g,u,v,n);break;case"retro":k=this._renderRetroClock(m,g,u,v,n);break;case"word":k=this._renderTextClock(m,g,v,n);break;case"neon":k=this._renderNeonClock(m,g,u,v,n);break;case"material":k=this._renderMaterialClock(m,g,u,v,n);break;case"terminal":k=this._renderTerminalClock(m,g,u,v,n)}const x=this.createGestureHandlers(n.id,{tap_action:n.tap_action,hold_action:n.hold_action,double_tap_action:n.double_tap_action,entity:n.entity,module:n},e,a),y=n.tap_action&&"nothing"!==n.tap_action.action||n.hold_action&&"nothing"!==n.hold_action.action||n.double_tap_action&&"nothing"!==n.double_tap_action.action,f=this.buildStyleString(this.buildDesignStyles(o,e)),w=this.getHoverEffectClass(o),$=`display: flex; justify-content: center; align-items: center; flex-direction: column; box-sizing: border-box; cursor: ${y?"pointer":"default"};`;return(c.padding_top||c.padding_bottom||c.padding_left||c.padding_right||i.padding_top||i.padding_bottom||i.padding_left||i.padding_right)&&(this.addPixelUnit(c.padding_top||i.padding_top),this.addPixelUnit(c.padding_right||i.padding_right),this.addPixelUnit(c.padding_bottom||i.padding_bottom),this.addPixelUnit(c.padding_left||i.padding_left)),(c.margin_top||c.margin_bottom||c.margin_left||c.margin_right||i.margin_top||i.margin_bottom||i.margin_left||i.margin_right)&&(c.margin_top||i.margin_top,c.margin_right||i.margin_right,c.margin_bottom||i.margin_bottom,c.margin_left||i.margin_left),c.background_color||i.background_color,this.getBackgroundImageCSS(Object.assign(Object.assign({},i),c),e),c.background_size||i.background_size,c.background_position||i.background_position,c.background_repeat||i.background_repeat,(c.border_style||i.border_style)&&"none"!==(c.border_style||i.border_style)&&(c.border_width||i.border_width,c.border_style||i.border_style,c.border_color||i.border_color),this.addPixelUnit(c.border_radius||i.border_radius),c.position||i.position,c.top||i.top,c.bottom||i.bottom,c.left||i.left,c.right||i.right,c.z_index||i.z_index,c.width||i.width,c.height||i.height,c.max_width||i.max_width,c.max_height||i.max_height,c.min_width||i.min_width,c.min_height||i.min_height,c.box_shadow||i.box_shadow,c.backdrop_filter||i.backdrop_filter,c.clip_path||i.clip_path,c.overflow||i.overflow,this.wrapWithAnimation(r.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div
        class="${w}"
        style="${f}; ${$}"
        @pointerdown=${x.onPointerDown}
        @pointermove=${x.onPointerMove}
        @pointerup=${x.onPointerUp}
        @pointerleave=${x.onPointerLeave}
        @pointercancel=${x.onPointerCancel}
      >
        <div
          class="animated-clock-module-container"
          style="
            --clock-size: ${n.clock_size||50}px;
            --clock-size-value: ${n.clock_size||50};
            --clock-color: ${n.clock_color||"var(--primary-text-color)"};
            --clock-background: ${n.clock_background||"var(--uc-pane-bg, var(--card-background-color))"};
          "
        >
          ${k}
        </div>
      </div>
    `,o,e)}_renderFlipClock(o,e,a,t){const n=!1!==t.show_hours,l=!1!==t.show_minutes,i=!1!==t.show_ampm,c=!1!==t.show_separators,s=t.flip_tile_color||"rgba(0, 0, 0, 0.5)",d=t.flip_hours_color||t.clock_color||"var(--primary-text-color)",p=t.flip_minutes_color||t.clock_color||"var(--primary-text-color)",_=t.flip_separator_color||t.clock_color||"var(--primary-text-color)",m=t.flip_ampm_color||t.clock_color||"var(--primary-text-color)";return r.qy`
      <div class="flip-clock" style="--flip-tile-color: ${s};">
        ${n?r.qy`
              <div class="flip-unit">
                <div class="flip-digit-display" style="color: ${d};">
                  ${String(Math.floor(o/10))}
                </div>
              </div>
              <div class="flip-unit">
                <div class="flip-digit-display" style="color: ${d};">
                  ${String(o%10)}
                </div>
              </div>
            `:""}
        ${c&&n&&l?r.qy`<div class="flip-separator" style="color: ${_};">:</div>`:""}
        ${l?r.qy`
              <div class="flip-unit">
                <div class="flip-digit-display" style="color: ${p};">
                  ${String(Math.floor(e/10))}
                </div>
              </div>
              <div class="flip-unit">
                <div class="flip-digit-display" style="color: ${p};">
                  ${String(e%10)}
                </div>
              </div>
            `:""}
        ${"12"===t.time_format&&i?r.qy`<div class="flip-ampm" style="color: ${m};">${a}</div>`:""}
      </div>
    `}_renderDigitalClock(o,e,a,t,n){const l=!1!==n.show_hours,i=!1!==n.show_minutes,c=!1!==n.show_seconds,s=!1!==n.show_ampm,d=!1!==n.show_separators,p=String(o).padStart(2,"0"),_=String(e).padStart(2,"0"),m=String(a).padStart(2,"0"),g=n.digital_background_color||"#000",u=n.digital_hours_color||"#ff3333",h=n.digital_minutes_color||"#ff3333",v=n.digital_seconds_color||"#ff3333",k=n.digital_separator_color||"#ff3333",x=n.digital_ampm_color||"#33ff33";return r.qy`
      <div class="digital-clock">
        <div class="digital-display" style="background: ${g};">
          <span class="digital-time">
            ${l?r.qy`<span
                  style="color: ${u}; text-shadow: 0 0 10px ${u}, 0 0 20px ${u}, 0 0 30px ${u};"
                  >${p}</span
                >`:""}
            ${l&&i&&d?r.qy`<span
                  style="color: ${k}; text-shadow: 0 0 10px ${k}, 0 0 20px ${k}, 0 0 30px ${k};"
                  >:</span
                >`:""}
            ${i?r.qy`<span
                  style="color: ${h}; text-shadow: 0 0 10px ${h}, 0 0 20px ${h}, 0 0 30px ${h};"
                  >${_}</span
                >`:""}
            ${i&&c&&d?r.qy`<span
                  style="color: ${k}; text-shadow: 0 0 10px ${k}, 0 0 20px ${k}, 0 0 30px ${k};"
                  >:</span
                >`:""}
            ${c?r.qy`<span
                  style="color: ${v}; text-shadow: 0 0 10px ${v}, 0 0 20px ${v}, 0 0 30px ${v};"
                  >${m}</span
                >`:""}
          </span>
          ${"12"===n.time_format&&s?r.qy`<span
                class="digital-ampm"
                style="color: ${x}; text-shadow: 0 0 8px ${x}, 0 0 16px ${x};"
                >${t}</span
              >`:""}
        </div>
      </div>
    `}_renderAnalogClock(o,e,a,t,n,l){const c=!1!==l.analog_show_seconds,s=!1!==l.analog_smooth_seconds,d=!1!==l.analog_show_hour_hand,p=!1!==l.analog_show_minute_hand,_=!1!==l.analog_show_hour_markers,m=!1!==l.analog_show_center_dot,g=!0===l.analog_show_numbers,u=!0===l.analog_show_hour_ticks,h=!0===l.analog_show_minute_ticks,v=o%12,k=a+t/1e3,x=s?k:Math.floor(k),y=60*e+k,f=3600*v+60*e+k,w=l.analog_hour_hand_color||l.clock_color||"var(--primary-color)",$=l.analog_minute_hand_color||l.clock_color||"var(--primary-color)",b=l.analog_second_hand_color||"var(--error-color)",S=l.analog_hour_marker_color||l.clock_color||"var(--primary-text-color)",q=l.analog_center_dot_color||l.clock_color||"var(--error-color)",C=l.analog_numbers_color||l.clock_color||"var(--primary-text-color)",z=l.analog_hour_ticks_color||l.clock_color||"var(--primary-text-color)",T=l.analog_minute_ticks_color||l.clock_color||"var(--disabled-text-color)",M=l.analog_face_outline_color||l.clock_color||"var(--primary-text-color)",P=l.analog_face_background_color||l.clock_background||"var(--uc-pane-bg, var(--card-background-color))";let F="";const U=l.analog_face_background_type||"color";if("entity"===U&&l.analog_face_background_image_entity&&n){const o=n.states[l.analog_face_background_image_entity];o&&o.attributes.entity_picture&&(F=o.attributes.entity_picture)}else"upload"===U&&l.analog_face_background_image_upload?F=(0,i.VG)(n,l.analog_face_background_image_upload):"url"===U&&l.analog_face_background_image_url&&(F=l.analog_face_background_image_url);const A=l.analog_face_background_size||"cover",H=l.analog_face_background_position||"center",I=l.analog_face_background_repeat||"no-repeat";return r.qy`
      <div class="analog-clock">
        <div
          class="analog-clock-dial"
          style="
          --face-outline-color: ${M};
          --face-background-color: ${"color"===U?P:"transparent"};
          --marker-color: ${S};
          ${F?`\n            background-image: url('${F}');\n            background-size: ${A};\n            background-position: ${H};\n            background-repeat: ${I};\n          `:""}
        "
        >
          <!-- SVG for static elements (face, markers, numbers, ticks) -->
          <svg viewBox="0 0 200 200" class="analog-face-svg" xmlns="http://www.w3.org/2000/svg">
            <!-- Clock face circle (drawn first, appears in back) -->
            <circle cx="100" cy="100" r="93.5" class="clock-face-circle" />

            <!-- Hour markers -->
            ${_?[...Array(12)].map((o,e)=>{const a=(30*e-90)*(Math.PI/180),t=100+85*Math.cos(a),n=100+85*Math.sin(a),l=100+75*Math.cos(a),i=100+75*Math.sin(a);return r.qy`<line
                    x1="${t}"
                    y1="${n}"
                    x2="${l}"
                    y2="${i}"
                    class="hour-marker"
                  />`}):""}

            <!-- Clock numbers (1-12) - drawn last, appears on top -->
            ${g?[...Array(12)].map((o,e)=>{const a=0===e?12:e,t=(30*e-90)*(Math.PI/180),n=100+65*Math.cos(t),l=100+65*Math.sin(t);return r.qy`<text
                    x="${n}"
                    y="${l}"
                    font-size="22"
                    font-weight="900"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-family="Arial, sans-serif"
                    class="clock-number"
                    fill="${C}"
                    stroke="${P}"
                    stroke-width="0.5"
                    paint-order="stroke fill"
                    >${a}</text
                  >`}):""}
          </svg>

          <!-- Clock hands using CSS animations (HA native approach) -->
          ${d?r.qy`<div
                class="clock-hand clock-hand-hour"
                style="
                  background: ${w};
                  animation-delay: -${f}s;
                "
              ></div>`:""}
          ${p?r.qy`<div
                class="clock-hand clock-hand-minute"
                style="
                  background: ${$};
                  animation-delay: -${y}s;
                "
              ></div>`:""}
          ${c?r.qy`<div
                class="clock-hand clock-hand-second ${s?"":"step"}"
                style="
                  background: ${b};
                  animation-delay: -${x}s;
                "
              ></div>`:""}

          <!-- Center dot -->
          ${m?r.qy`<div class="clock-center-dot" style="background: ${q};"></div>`:""}

          <!-- Clock numbers as HTML elements (fallback) -->
          ${g?[...Array(12)].map((o,e)=>{const a=0===e?12:e,t=(30*e-90)*(Math.PI/180),n=50+32.5*Math.cos(t),l=50+32.5*Math.sin(t);return r.qy`<div
                  class="clock-number-html"
                  style="
                    left: ${n}%;
                    top: ${l}%;
                    color: ${C};
                  "
                >
                  ${a}
                </div>`}):""}

          <!-- Hour tick marks as HTML elements (12 major ticks) -->
          ${u?[...Array(12)].map((o,e)=>{const a=(30*e-90)*(Math.PI/180),t=50+44.75*Math.cos(a),n=50+44.75*Math.sin(a),l=30*e;return r.qy`<div
                  class="clock-hour-tick-html"
                  style="
                    left: ${t}%;
                    top: ${n}%;
                    transform: translate(-50%, -50%) rotate(${l}deg);
                    background: ${z};
                  "
                ></div>`}):""}

          <!-- Minute tick marks as HTML elements (48 minor ticks) -->
          ${h?[...Array(60)].map((o,e)=>{if(e%5==0)return"";const a=(6*e-90)*(Math.PI/180),t=50+45.25*Math.cos(a),n=50+45.25*Math.sin(a),l=6*e;return r.qy`<div
                  class="clock-minute-tick-html"
                  style="
                    left: ${t}%;
                    top: ${n}%;
                    transform: translate(-50%, -50%) rotate(${l}deg);
                    background: ${T};
                  "
                ></div>`}):""}
        </div>
      </div>
    `}_renderBinaryClock(o,e,a,t){const n=!1!==t.show_hours,l=!1!==t.show_minutes,i=!1!==t.show_seconds,c=!1!==t.show_labels,s=!1!==t.show_separators,d=(o,e=4)=>o.toString(2).padStart(e,"0").split(""),p=d(Math.floor(o/10),4),_=d(o%10,4),m=d(Math.floor(e/10),4),g=d(e%10,4),u=d(Math.floor(a/10),4),h=d(a%10,4),v=[],k=[],x=[];n&&(v.push(p,_),k.push("H","H"),x.push("hours","hours")),l&&(v.push(m,g),k.push("M","M"),x.push("minutes","minutes")),i&&(v.push(u,h),k.push("S","S"),x.push("seconds","seconds"));const y=t.binary_hours_empty_color||"rgba(128, 128, 128, 0.2)",f=t.binary_hours_filled_color||t.clock_color||"var(--primary-text-color)",w=t.binary_minutes_empty_color||"rgba(128, 128, 128, 0.2)",$=t.binary_minutes_filled_color||t.clock_color||"var(--primary-text-color)",b=t.binary_seconds_empty_color||"rgba(128, 128, 128, 0.2)",S=t.binary_seconds_filled_color||t.clock_color||"var(--primary-text-color)",q=t.binary_separator_color||t.clock_color||"var(--primary-text-color)",C=t.binary_hours_label_color||t.clock_color||"var(--primary-text-color)",z=t.binary_minutes_label_color||t.clock_color||"var(--primary-text-color)",T=t.binary_seconds_label_color||t.clock_color||"var(--primary-text-color)";return r.qy`
      <div class="binary-clock">
        ${v.map((o,e)=>{const a=s&&(n&&l&&1===e||l&&i&&e===(n?3:1)),t=x[e],d="hours"===t?y:"minutes"===t?w:b,p="hours"===t?f:"minutes"===t?$:S,_="hours"===t?C:"minutes"===t?z:T;return r.qy`
            <div class="binary-column">
              ${c?r.qy`<div class="binary-label" style="color: ${_};">
                    ${k[e]}
                  </div>`:""}
              ${o.map(o=>r.qy`
                  <div
                    class="binary-dot ${"1"===o?"active":""}"
                    style="${"1"===o?`background: ${p}; border-color: ${p}; box-shadow: 0 0 10px ${p};`:`background: ${d}; border-color: rgba(128, 128, 128, 0.3);`}"
                  ></div>
                `)}
            </div>
            ${a?r.qy`<div class="binary-separator" style="color: ${q};">:</div>`:""}
          `})}
      </div>
    `}_renderMinimalClock(o,e,a,t,n){const l=!1!==n.show_hours,i=!1!==n.show_minutes,c=!1!==n.show_seconds,s=!1!==n.show_ampm,d=!1!==n.show_separators,p=String(o).padStart(2,"0"),_=String(e).padStart(2,"0"),m=String(a).padStart(2,"0"),g=n.minimal_hours_color||n.clock_color||"var(--primary-text-color)",u=n.minimal_minutes_color||n.clock_color||"var(--primary-text-color)",h=n.minimal_seconds_color||n.clock_color||"var(--primary-text-color)",v=n.minimal_separator_color||n.clock_color||"var(--primary-text-color)",k=n.minimal_ampm_color||n.clock_color||"var(--primary-text-color)";return r.qy`
      <div class="minimal-clock">
        <div class="minimal-time">
          ${l?r.qy`<span style="color: ${g};">${p}</span>`:""}${d&&l&&i?r.qy`<span class="minimal-separator" style="color: ${v};">:</span>`:""}${i?r.qy`<span style="color: ${u};">${_}</span>`:""}${d&&i&&c?r.qy`<span class="minimal-separator" style="color: ${v};">:</span>`:""}${c?r.qy`<span style="color: ${h};">${m}</span>`:""}
        </div>
        ${"12"===n.time_format&&s?r.qy`<div class="minimal-ampm" style="color: ${k};">${t}</div>`:""}
      </div>
    `}_renderRetroClock(o,e,a,t,n){const l=!1!==n.show_hours,i=!1!==n.show_minutes,c=!1!==n.show_seconds,s=!1!==n.show_ampm,d=!1!==n.show_separators,p=String(o).padStart(2,"0"),_=String(e).padStart(2,"0"),m=String(a).padStart(2,"0"),g=n.retro_background_color||"linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",u=n.retro_hours_tile_color||"rgba(0, 0, 0, 0.3)",h=n.retro_minutes_tile_color||"rgba(0, 0, 0, 0.3)",v=n.retro_seconds_tile_color||"rgba(0, 0, 0, 0.3)",k=n.retro_separator_tile_color||"rgba(0, 0, 0, 0.3)",x=n.retro_hours_color||"#ffa500",y=n.retro_minutes_color||"#ffa500",f=n.retro_seconds_color||"#ffa500",w=n.retro_separator_color||"#ffa500",$=n.retro_ampm_color||"#00ff00",b=`0 0 5px ${x}, 0 0 10px ${x.replace("500","600")}`,S=`0 0 5px ${y}, 0 0 10px ${y.replace("500","600")}`,q=`0 0 5px ${f}, 0 0 10px ${f.replace("500","600")}`,C=`0 0 5px ${w}, 0 0 10px ${w.replace("500","600")}`;return r.qy`
      <div class="retro-clock">
        <div class="retro-display" style="background: ${g};">
          ${l?r.qy`
                <span
                  class="retro-digit"
                  style="background: ${u}; color: ${x}; text-shadow: ${b};"
                  >${p[0]}</span
                >
                <span
                  class="retro-digit"
                  style="background: ${u}; color: ${x}; text-shadow: ${b};"
                  >${p[1]}</span
                >
              `:""}
          ${d&&l&&i?r.qy`<span
                class="retro-colon"
                style="background: ${k}; color: ${w}; text-shadow: ${C};"
                >:</span
              >`:""}
          ${i?r.qy`
                <span
                  class="retro-digit"
                  style="background: ${h}; color: ${y}; text-shadow: ${S};"
                  >${_[0]}</span
                >
                <span
                  class="retro-digit"
                  style="background: ${h}; color: ${y}; text-shadow: ${S};"
                  >${_[1]}</span
                >
              `:""}
          ${d&&i&&c?r.qy`<span
                class="retro-colon"
                style="background: ${k}; color: ${w}; text-shadow: ${C};"
                >:</span
              >`:""}
          ${c?r.qy`
                <span
                  class="retro-digit"
                  style="background: ${v}; color: ${f}; text-shadow: ${q};"
                  >${m[0]}</span
                >
                <span
                  class="retro-digit"
                  style="background: ${v}; color: ${f}; text-shadow: ${q};"
                  >${m[1]}</span
                >
              `:""}
          ${"12"===n.time_format&&s?r.qy`<span
                class="retro-ampm"
                style="color: ${$}; text-shadow: 0 0 5px ${$.replace("ff00","cc00")};"
                >${t}</span
              >`:""}
        </div>
      </div>
    `}_renderTextClock(o,e,a,t){const n=!1!==t.show_hours,l=!1!==t.show_minutes,i=!1!==t.show_ampm,c=!1!==t.show_prefix,s=t.text_orientation||"horizontal",d=t.text_word_gap||8,p=t.text_prefix_color||"var(--primary-text-color)",_=t.text_hours_color||"var(--primary-text-color)",m=t.text_minutes_color||"var(--primary-text-color)",g=t.text_ampm_color||"var(--primary-text-color)",u=t.text_prefix_size||38,h=t.text_hours_size||48,v=t.text_minutes_size||48,k=t.text_ampm_size||24,x=["twelve","one","two","three","four","five","six","seven","eight","nine","ten","eleven"][o%12],y=0===e?"o'clock":e<10?`oh ${this._numberToWords(e)}`:this._numberToWords(e),f="vertical"===s;return r.qy`
      <div class="text-clock">
        <div
          class="text-display"
          style="
          flex-direction: ${f?"column":"row"};
          gap: calc(${d}px * var(--clock-scale));
        "
        >
          ${c?r.qy`<span
                class="text-word text-prefix"
                style="color: ${p}; font-size: calc(${u}px * var(--clock-scale));"
                >It is</span
              >`:""}
          ${n?r.qy`<span
                class="text-word text-hours"
                style="color: ${_}; font-size: calc(${h}px * var(--clock-scale));"
                >${x}</span
              >`:""}
          ${l?r.qy`<span
                class="text-word text-minutes"
                style="color: ${m}; font-size: calc(${v}px * var(--clock-scale));"
                >${y}</span
              >`:""}
          ${"12"===t.time_format&&i?r.qy`<span
                class="text-word text-ampm"
                style="color: ${g}; font-size: calc(${k}px * var(--clock-scale));"
                >${a}</span
              >`:""}
        </div>
      </div>
    `}_renderNeonClock(o,e,a,t,n){const l=!1!==n.show_hours,i=!1!==n.show_minutes,c=!1!==n.show_seconds,s=!1!==n.show_ampm,d=!1!==n.show_separators,p=n.neon_padding||24,_=n.neon_hours_color||"#00ffff",m=n.neon_minutes_color||"#00ffff",g=n.neon_seconds_color||"#00ffff",u=n.neon_separator_color||"#ff00ff",h=n.neon_ampm_color||"#00ff00",v=String(o).padStart(2,"0"),k=String(e).padStart(2,"0"),x=String(a).padStart(2,"0");return r.qy`
      <div class="neon-clock" style="padding: calc(${p}px * var(--clock-scale));">
        <div class="neon-display">
          ${l?r.qy`<span
                class="neon-digit"
                style="color: ${_}; text-shadow: 0 0 5px ${_}, 0 0 10px ${_}, 0 0 20px ${_}, 0 0 30px ${_}, 0 0 40px ${_};"
                >${v}</span
              >`:""}
          ${d&&l&&i?r.qy`<span
                class="neon-separator"
                style="color: ${u}; text-shadow: 0 0 5px ${u}, 0 0 10px ${u}, 0 0 20px ${u}, 0 0 30px ${u};"
                >:</span
              >`:""}
          ${i?r.qy`<span
                class="neon-digit"
                style="color: ${m}; text-shadow: 0 0 5px ${m}, 0 0 10px ${m}, 0 0 20px ${m}, 0 0 30px ${m}, 0 0 40px ${m};"
                >${k}</span
              >`:""}
          ${d&&i&&c?r.qy`<span
                class="neon-separator"
                style="color: ${u}; text-shadow: 0 0 5px ${u}, 0 0 10px ${u}, 0 0 20px ${u}, 0 0 30px ${u};"
                >:</span
              >`:""}
          ${c?r.qy`<span
                class="neon-digit"
                style="color: ${g}; text-shadow: 0 0 5px ${g}, 0 0 10px ${g}, 0 0 20px ${g}, 0 0 30px ${g}, 0 0 40px ${g};"
                >${x}</span
              >`:""}
          ${"12"===n.time_format&&s?r.qy`<span
                class="neon-ampm"
                style="color: ${h}; text-shadow: 0 0 5px ${h}, 0 0 10px ${h}, 0 0 20px ${h};"
                >${t}</span
              >`:""}
        </div>
      </div>
    `}_renderMaterialClock(o,e,a,t,n){const l=!1!==n.show_hours,i=!1!==n.show_minutes,c=!1!==n.show_seconds,s=!1!==n.show_ampm,d=!1!==n.show_separators,p=n.material_vertical_gap||8,_=String(o).padStart(2,"0"),m=String(e).padStart(2,"0"),g=String(a).padStart(2,"0"),u=n.material_background_color||n.clock_background||"var(--uc-pane-bg, var(--card-background-color))",h=n.material_hours_color||n.clock_color||"var(--primary-text-color)",v=n.material_minutes_color||n.clock_color||"var(--primary-text-color)",k=n.material_seconds_color||n.clock_color||"var(--primary-text-color)",x=n.material_separator_color||n.clock_color||"var(--primary-text-color)",y=n.material_ampm_color||n.clock_color||"var(--primary-text-color)";return r.qy`
      <div class="material-clock">
        <div
          class="material-card"
          data-uc-role="pane"
          style="gap: calc(${p}px * var(--clock-scale)); background: ${u};"
        >
          <div class="material-time">
            ${l?r.qy`<span style="color: ${h};">${_}</span>`:""}
            ${l&&i&&d?r.qy`<span style="color: ${x};">:</span>`:""}
            ${i?r.qy`<span style="color: ${v};">${m}</span>`:""}
          </div>
          ${c||"12"===n.time_format&&s?r.qy`
                <div class="material-seconds">
                  ${c?r.qy`<span style="color: ${k};">${g}</span>`:""}
                  ${"12"===n.time_format&&s?r.qy` <span style="color: ${y};">${t}</span>`:""}
                </div>
              `:""}
        </div>
      </div>
    `}_renderTerminalClock(o,e,a,t,n){const l=!1!==n.show_hours,i=!1!==n.show_minutes,c=!1!==n.show_seconds,s=!1!==n.show_ampm,d=!1!==n.show_separators,p=!1!==n.show_prompt,_=!1!==n.show_command,m=!1!==n.show_cursor,g=n.terminal_background_color||"#1e1e1e",u=n.terminal_line1_color||"#4ec9b0",h=n.terminal_line2_color||"#ce9178",v=n.terminal_cursor_color||"#4ec9b0",k=n.terminal_hours_color||"#d4d4d4",x=n.terminal_minutes_color||"#d4d4d4",y=n.terminal_seconds_color||"#d4d4d4",f=n.terminal_separator_color||"#d4d4d4",w=n.terminal_ampm_color||"#d4d4d4",$=n.terminal_vertical_spacing||8,b=n.terminal_line1_size||17,S=n.terminal_line2_size||17,q=n.terminal_output_size||38,C=String(o).padStart(2,"0"),z=String(e).padStart(2,"0"),T=String(a).padStart(2,"0");return r.qy`
      <div class="terminal-clock" data-uc-role="pane" style="background: ${g};">
        ${p?r.qy`<div
              class="terminal-prompt"
              style="font-size: calc(${b}px * var(--clock-scale)); color: ${u}; margin-bottom: calc(${$}px * var(--clock-scale));"
            >
              user@homeassistant:~$
            </div>`:""}
        ${_?r.qy`<div
              class="terminal-command"
              style="font-size: calc(${S}px * var(--clock-scale)); color: ${h}; margin-bottom: calc(${1.5*$}px * var(--clock-scale));"
            >
              date +"%T"
            </div>`:""}
        <div class="terminal-output" style="font-size: calc(${q}px * var(--clock-scale));">
          ${l?r.qy`<span style="color: ${k};">${C}</span>`:""}
          ${l&&i&&d?r.qy`<span style="color: ${f};">:</span>`:""}
          ${i?r.qy`<span style="color: ${x};">${z}</span>`:""}
          ${i&&c&&d?r.qy`<span style="color: ${f};">:</span>`:""}
          ${c?r.qy`<span style="color: ${y};">${T}</span>`:""}
          ${"12"===n.time_format&&s?r.qy` <span style="color: ${w};">${t}</span>`:""}
          ${m?r.qy`<span
                class="terminal-cursor"
                style="background: ${v}; width: calc(${.21*q}px * var(--clock-scale)); height: calc(${q}px * var(--clock-scale)); margin-left: calc(${.105*q}px * var(--clock-scale));"
              ></span>`:""}
        </div>
      </div>
    `}_numberToWords(o){const e=["","one","two","three","four","five","six","seven","eight","nine"],a=["","","twenty","thirty","forty","fifty"];if(o<10)return e[o];if(o<20)return["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"][o-10];if(o<60){const r=Math.floor(o/10),t=o%10;return 0===t?a[r]:`${a[r]} ${e[t]}`}return String(o)}objectToStyleString(o){return Object.entries(o).filter(([o,e])=>null!=e&&""!==e).map(([o,e])=>`${o.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${e}`).join("; ")}addPixelUnit(o){if(o)return"string"==typeof o&&(o.includes("px")||o.includes("%")||o.includes("em")||o.includes("rem")||o.includes("vh")||o.includes("vw"))?o:`${o}px`}getBackgroundImageCSS(o,e){const a=o.background_type||"color";if("entity"===a&&o.background_image_entity&&e){const a=e.states[o.background_image_entity];if(a&&a.attributes.entity_picture)return`url('${a.attributes.entity_picture}')`}else{if("upload"===a&&o.background_image_upload)return`url('${o.background_image_upload}')`;if("url"===a&&o.background_image_url)return`url('${o.background_image_url}')`}return""}getStyles(){return"\n      .animated-clock-module-container {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 0;\n        width: 100%;\n        min-height: 50px;\n        box-sizing: border-box;\n        overflow: visible;\n        --clock-scale: calc(var(--clock-size-value) / 115);\n      }\n\n      /* Ensure all clock styles fit within container and are responsive */\n      .flip-clock,\n      .digital-clock,\n      .analog-clock,\n      .binary-clock,\n      .minimal-clock,\n      .retro-clock,\n      .text-clock,\n      .neon-clock,\n      .material-clock,\n      .terminal-clock {\n        max-width: 100%;\n        width: auto;\n        transform-origin: center;\n        box-sizing: border-box;\n        overflow: visible;\n      }\n\n      /* ========== FLIP CLOCK ========== */\n      .flip-clock {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: calc(6px * var(--clock-scale));\n        max-width: 100%;\n        width: 100%;\n        flex-wrap: nowrap;\n      }\n\n      .flip-unit {\n        position: relative;\n        width: calc(56px * var(--clock-scale));\n        height: calc(77px * var(--clock-scale));\n        background: var(--flip-tile-color, rgba(0, 0, 0, 0.5));\n        border-radius: calc(8px * var(--clock-scale));\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\n        overflow: hidden;\n        flex-shrink: 1;\n        min-width: 0;\n      }\n\n      .flip-digit-display {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: calc(48px * var(--clock-scale));\n        font-weight: 700;\n        color: var(--clock-color);\n        line-height: 1;\n        overflow: hidden;\n        text-overflow: clip;\n      }\n\n      .flip-unit::before {\n        content: '';\n        position: absolute;\n        top: 50%;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: rgba(0, 0, 0, 0.2);\n        z-index: 1;\n      }\n\n      .flip-separator {\n        font-size: calc(48px * var(--clock-scale));\n        font-weight: 700;\n        color: var(--clock-color);\n        animation: blink 1s ease-in-out infinite;\n        flex-shrink: 1;\n        min-width: 0;\n      }\n\n      @keyframes blink {\n        0%, 49% { opacity: 1; }\n        50%, 100% { opacity: 0.3; }\n      }\n\n      .flip-ampm {\n        font-size: calc(19px * var(--clock-scale));\n        font-weight: 600;\n        color: var(--clock-color);\n        opacity: 0.9;\n        align-self: flex-end;\n        margin-bottom: calc(8px * var(--clock-scale));\n        margin-left: calc(4px * var(--clock-scale));\n        flex-shrink: 1;\n        min-width: 0;\n      }\n\n      /* ========== DIGITAL CLOCK ========== */\n      .digital-clock {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: calc(8px * var(--clock-scale));\n        max-width: 100%;\n      }\n\n      .digital-display {\n        display: flex;\n        align-items: center;\n        gap: calc(16px * var(--clock-scale));\n        background: #000;\n        padding: calc(24px * var(--clock-scale)) calc(32px * var(--clock-scale));\n        border-radius: calc(12px * var(--clock-scale));\n        box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(255, 0, 0, 0.3);\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* Editor preview-specific padding */\n      .preview-content .digital-display {\n        padding: calc(46px * var(--clock-scale)) calc(32px * var(--clock-scale));\n      }\n\n      .digital-time {\n        font-family: 'Courier New', monospace;\n        font-size: calc(64px * var(--clock-scale));\n        font-weight: bold;\n        color: #ff3333;\n        text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000;\n        letter-spacing: calc(6px * var(--clock-scale));\n      }\n\n      .digital-ampm {\n        font-family: 'Courier New', monospace;\n        font-size: calc(26px * var(--clock-scale));\n        font-weight: bold;\n        color: #33ff33;\n        text-shadow: 0 0 8px #00ff00, 0 0 16px #00ff00;\n      }\n\n      /* ========== ANALOG CLOCK (HA Native Approach) ========== */\n      .analog-clock {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        max-width: 100%;\n      }\n\n      .analog-clock-dial {\n        position: relative;\n        width: calc(192px * var(--clock-scale));\n        height: calc(192px * var(--clock-scale));\n        box-sizing: border-box;\n        overflow: hidden;\n        border-radius: 50%;\n        clip-path: circle(47.25% at 50% 50%);\n      }\n\n      .analog-face-svg {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        pointer-events: none;\n        z-index: 1;\n        overflow: hidden;\n      }\n\n      .clock-face-circle {\n        fill: var(--face-background-color);\n        stroke: var(--face-outline-color);\n        stroke-width: 2;\n      }\n\n      .hour-marker {\n        stroke: var(--marker-color);\n        stroke-width: 3;\n        stroke-linecap: round;\n        fill: none;\n        opacity: 1;\n      }\n\n      .tick-mark {\n        stroke-width: 2.5;\n        stroke-linecap: round;\n        fill: none;\n        opacity: 1;\n      }\n\n      /* Clock numbers - SVG text (may not render in some browsers) */\n      .clock-number {\n        font-family: Arial, sans-serif !important;\n        font-size: 22px !important;\n        font-weight: 900 !important;\n        text-anchor: middle !important;\n        dominant-baseline: middle !important;\n        pointer-events: none !important;\n        user-select: none !important;\n        opacity: 1 !important;\n        visibility: visible !important;\n        paint-order: stroke fill !important;\n      }\n\n      /* Clock numbers - HTML fallback (guaranteed to render) */\n      .clock-number-html {\n        position: absolute;\n        transform: translate(-50%, -50%);\n        font-family: Arial, -apple-system, BlinkMacSystemFont, sans-serif;\n        font-size: calc(18px * var(--clock-scale));\n        font-weight: 900;\n        pointer-events: none;\n        user-select: none;\n        z-index: 8;\n        text-shadow: \n          1px 1px 2px var(--face-background-color, rgba(0, 0, 0, 0.3)),\n          -1px -1px 2px var(--face-background-color, rgba(0, 0, 0, 0.3));\n      }\n\n      /* Hour tick marks - HTML elements (guaranteed to render) */\n      .clock-hour-tick-html {\n        position: absolute;\n        width: calc(3px * var(--clock-scale));\n        height: calc(8px * var(--clock-scale));\n        border-radius: var(--uc-r-1_5, 1.5px);\n        pointer-events: none;\n        z-index: 2;\n        opacity: 1;\n      }\n\n      /* Minute tick marks - HTML elements (smaller than hour ticks) */\n      .clock-minute-tick-html {\n        position: absolute;\n        width: calc(1.5px * var(--clock-scale));\n        height: calc(5px * var(--clock-scale));\n        border-radius: var(--uc-r-1, 1px);\n        pointer-events: none;\n        z-index: 2;\n        opacity: 1;\n      }\n\n      /* Clock hands using CSS animations (HA native approach) */\n      .clock-hand {\n        position: absolute;\n        left: 50%;\n        bottom: 50%;\n        transform-origin: 50% 100%;\n        transform: translate(-50%, 0) rotate(0deg);\n        border-radius: var(--uc-r-2, 2px);\n        will-change: transform;\n        animation-name: ha-clock-rotate;\n        animation-timing-function: linear;\n        animation-iteration-count: infinite;\n        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\n      }\n\n      .clock-hand-hour {\n        width: calc(4px * var(--clock-scale));\n        height: calc(48px * var(--clock-scale)); /* 25% of 192px */\n        z-index: 5;\n        animation-duration: 43200s; /* 12 hours */\n      }\n\n      .clock-hand-minute {\n        width: calc(3px * var(--clock-scale));\n        height: calc(67px * var(--clock-scale)); /* 35% of 192px */\n        opacity: 0.9;\n        z-index: 6;\n        animation-duration: 3600s; /* 60 minutes */\n      }\n\n      .clock-hand-second {\n        width: calc(2px * var(--clock-scale));\n        height: calc(81px * var(--clock-scale)); /* 42% of 192px */\n        opacity: 0.8;\n        z-index: 7;\n        animation-duration: 60s; /* 60 seconds */\n      }\n\n      .clock-hand-second.step {\n        animation-timing-function: steps(60, end);\n      }\n\n      .clock-center-dot {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: calc(8px * var(--clock-scale));\n        height: calc(8px * var(--clock-scale));\n        border-radius: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 10;\n      }\n\n      @keyframes ha-clock-rotate {\n        from {\n          transform: translate(-50%, 0) rotate(0deg);\n        }\n        to {\n          transform: translate(-50%, 0) rotate(360deg);\n        }\n      }\n\n      /* ========== BINARY CLOCK ========== */\n      .binary-clock {\n        display: flex;\n        align-items: center;\n        gap: calc(4px * var(--clock-scale));\n        max-width: 100%;\n        flex-wrap: nowrap;\n        justify-content: center;\n        overflow-x: auto;\n      }\n\n      .binary-column {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: calc(6px * var(--clock-scale));\n      }\n\n      .binary-label {\n        font-size: calc(14px * var(--clock-scale));\n        color: var(--clock-color);\n        opacity: 0.7;\n        font-weight: 600;\n        margin-bottom: calc(4px * var(--clock-scale));\n      }\n\n      .binary-dot {\n        width: calc(19px * var(--clock-scale));\n        height: calc(19px * var(--clock-scale));\n        border-radius: 50%;\n        background: rgba(128, 128, 128, 0.2);\n        border: 2px solid rgba(128, 128, 128, 0.3);\n        transition: all 0.2s ease;\n      }\n\n      .binary-dot.active {\n        background: var(--clock-color);\n        border-color: var(--clock-color);\n        box-shadow: 0 0 10px var(--clock-color);\n      }\n\n      .binary-separator {\n        font-size: calc(38px * var(--clock-scale));\n        color: var(--clock-color);\n        margin: 0 calc(4px * var(--clock-scale));\n        opacity: 0.5;\n      }\n\n      /* ========== MINIMAL CLOCK ========== */\n      .minimal-clock {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: calc(8px * var(--clock-scale));\n        max-width: 100%;\n      }\n\n      .minimal-time {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n        font-size: calc(48px * var(--clock-scale));\n        font-weight: 300;\n        color: var(--clock-color);\n        letter-spacing: calc(2px * var(--clock-scale));\n      }\n\n      .minimal-separator {\n        opacity: 0.5;\n        margin: 0 calc(4px * var(--clock-scale));\n      }\n\n      .minimal-ampm {\n        font-size: calc(17px * var(--clock-scale));\n        font-weight: 400;\n        color: var(--clock-color);\n        opacity: 0.7;\n        text-transform: uppercase;\n        letter-spacing: calc(3px * var(--clock-scale));\n      }\n\n      /* ========== RETRO CLOCK ========== */\n      .retro-clock {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        max-width: 100%;\n      }\n\n      .retro-display {\n        display: flex;\n        align-items: center;\n        gap: calc(4px * var(--clock-scale));\n        background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);\n        padding: calc(16px * var(--clock-scale)) calc(20px * var(--clock-scale));\n        border-radius: calc(4px * var(--clock-scale));\n        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);\n        max-width: 100%;\n        box-sizing: border-box;\n        flex-wrap: nowrap;\n        justify-content: center;\n        overflow-x: auto;\n      }\n\n      .retro-digit, .retro-colon {\n        font-family: 'Courier New', monospace;\n        font-size: calc(48px * var(--clock-scale));\n        font-weight: bold;\n        color: #ffa500;\n        text-shadow: 0 0 5px #ff8800, 0 0 10px #ff6600;\n        background: rgba(0, 0, 0, 0.3);\n        padding: calc(4px * var(--clock-scale)) calc(8px * var(--clock-scale));\n        border-radius: calc(2px * var(--clock-scale));\n      }\n\n      .retro-colon {\n        padding: calc(4px * var(--clock-scale)) calc(4px * var(--clock-scale));\n      }\n\n      .retro-ampm {\n        font-family: 'Courier New', monospace;\n        font-size: calc(19px * var(--clock-scale));\n        font-weight: bold;\n        color: #00ff00;\n        text-shadow: 0 0 5px #00cc00;\n        margin-left: calc(8px * var(--clock-scale));\n      }\n\n      /* ========== TEXT CLOCK ========== */\n      .text-clock {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        max-width: 100%;\n      }\n\n      .text-display {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-wrap: wrap;\n        max-width: 100%;\n      }\n\n      .text-word {\n        font-family: Georgia, serif;\n        font-size: calc(48px * var(--clock-scale));\n        font-weight: 600;\n        line-height: 1.4;\n        text-transform: capitalize;\n      }\n\n      .text-prefix {\n        font-size: calc(38px * var(--clock-scale));\n        font-weight: 400;\n        opacity: 0.7;\n        text-transform: lowercase;\n      }\n\n      .text-ampm {\n        font-size: calc(24px * var(--clock-scale));\n        opacity: 0.8;\n        text-transform: uppercase;\n      }\n\n      /* ========== NEON CLOCK ========== */\n      .neon-clock {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      .neon-display {\n        display: flex;\n        align-items: center;\n        gap: calc(8px * var(--clock-scale));\n        width: 100%;\n        max-width: 100%;\n        flex-wrap: nowrap;\n        justify-content: center;\n        box-sizing: border-box;\n      }\n\n      .neon-digit {\n        font-family: 'Arial Black', sans-serif;\n        font-size: calc(48px * var(--clock-scale));\n        font-weight: 900;\n        animation: neon-flicker 3s ease-in-out infinite;\n      }\n\n      .neon-separator {\n        font-family: 'Arial Black', sans-serif;\n        font-size: calc(48px * var(--clock-scale));\n        font-weight: 900;\n      }\n\n      .neon-ampm {\n        font-family: 'Arial Black', sans-serif;\n        font-size: calc(19px * var(--clock-scale));\n        font-weight: 900;\n      }\n\n      @keyframes neon-flicker {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.95; }\n        51% { opacity: 1; }\n        52% { opacity: 0.98; }\n      }\n\n      /* ========== MATERIAL CLOCK ========== */\n      .material-clock {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        max-width: 100%;\n      }\n\n      .material-card {\n        background: var(--clock-background);\n        border-radius: calc(16px * var(--clock-scale));\n        padding: calc(24px * var(--clock-scale)) calc(32px * var(--clock-scale));\n        box-shadow: \n          0 4px 6px rgba(0, 0, 0, 0.1),\n          0 1px 3px rgba(0, 0, 0, 0.08);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: calc(8px * var(--clock-scale));\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      .material-time {\n        font-family: 'Roboto', sans-serif;\n        font-size: calc(48px * var(--clock-scale));\n        font-weight: 300;\n        color: var(--clock-color);\n        letter-spacing: -1px;\n      }\n\n      .material-seconds {\n        font-family: 'Roboto', sans-serif;\n        font-size: calc(19px * var(--clock-scale));\n        font-weight: 400;\n        color: var(--clock-color);\n        opacity: 0.7;\n      }\n\n      /* ========== TERMINAL CLOCK ========== */\n      .terminal-clock {\n        font-family: 'Courier New', Consolas, monospace;\n        background: #1e1e1e;\n        padding: calc(20px * var(--clock-scale));\n        border-radius: calc(8px * var(--clock-scale));\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      .terminal-prompt {\n        font-weight: 400;\n      }\n\n      .terminal-command {\n        font-weight: 400;\n      }\n\n      .terminal-output {\n        font-weight: 600;\n        font-size: calc(38px * var(--clock-scale));\n      }\n\n      .terminal-cursor {\n        display: inline-block;\n        animation: cursor-blink 1s step-end infinite;\n      }\n\n      @keyframes cursor-blink {\n        0%, 50% { opacity: 1; }\n        51%, 100% { opacity: 0; }\n      }\n\n      /* ========== RESPONSIVE SIZING ========== */\n      /* Container-based uniform scaling instead of breakpoint layout changes */\n      @media (max-width: 768px) {\n        .animated-clock-module-container {\n          --container-scale: min(1, calc(100vw / 600));\n          transform: scale(var(--container-scale));\n          transform-origin: center center;\n        }\n      }\n\n    "}validate(o){const e=[];return{valid:0===e.length,errors:e}}}}};