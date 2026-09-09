export const __webpack_esm_ids__=[8099];export const __webpack_esm_modules__={3658(e,t,i){i.d(t,{UltraBadgeOfHonorModule:()=>s});var o=i(2618),n=i(7475),r=i(5147),a=i(8938),l=i(378),d=i(6478);i(7921);class s extends n.m{constructor(){super(...arguments),this.metadata={type:"badge_of_honor",title:"Badge of Honor",description:"Animated Pro membership badge with rotating text and gradient effects",author:"WJD Designs",version:"1.0.0",icon:"mdi:certificate",category:"content",tags:["badge","pro","premium","certificate","animated"]}}createDefault(e,t){return{id:e||this.generateId("badge_of_honor"),type:"badge_of_honor",badge_text:"Ultra Card Pro • ",badge_text_repeat:4,badge_size:120,inner_badge_ratio:.6,gradient_color_1:"#4ecdc4",gradient_color_2:"#44a8b3",gradient_color_3:"#7c5ce0",gradient_color_4:"#6366f1",rotation_speed:10,rotation_direction:"clockwise",enable_color_shift:!0,color_shift_speed:8,enable_glow:!0,glow_intensity:.4,enable_pulse:!1,pulse_speed:2,inner_content_type:"icon",inner_icon:"mdi:crown",inner_text:"PRO",inner_image_url:"",inner_background_type:"gradient",inner_background_color:"#1a1a2e",inner_text_color:"#ffffff",inner_icon_color:"#ffffff",text_font_size:10,text_font_weight:700,text_letter_spacing:2,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},enable_hover_effect:!0,hover_scale:1.05,display_mode:"always",display_conditions:[]}}renderActionsTab(e,t,i,o){return r.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return a.X.render(e,t,e=>o(e))}renderGeneralTab(e,t,i,n){var r,a,d;const s=e,c=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en",g=l.xd.checkIntegrationAuth(t);return"pro"===(null===(a=null==g?void 0:g.subscription)||void 0===a?void 0:a.tier)&&"active"===(null===(d=null==g?void 0:g.subscription)||void 0===d?void 0:d.status)?o.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getEditorStyles()}
      </style>

      <!-- Size & Layout Section -->
      ${this.renderSizeSection(s,t,n,c)}

      <!-- Colors Section -->
      ${this.renderColorsSection(s,t,n,c)}

      <!-- Animation Section -->
      ${this.renderAnimationSection(s,t,n,c)}

      <!-- Inner Content Section -->
      ${this.renderInnerContentSection(s,t,n,c)}
    `:this.renderProLockUI(c)}renderProLockUI(e){return o.qy`
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
          ${(0,d.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
        <div
          style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 300px;"
        >
          ${(0,d.kg)("editor.pro.badge_description",e,"Badge of Honor is an exclusive Pro feature that displays a beautiful animated badge celebrating your Ultra Card Pro membership.")}
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
          ${(0,d.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
        </a>
      </div>
    `}renderSizeSection(e,t,i,n){return o.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px;"
        >
          ${(0,d.kg)("editor.badge.size_title",n,"SIZE & LAYOUT")}
        </div>

        <!-- Badge Size -->
        <div class="field-container" style="margin-bottom: 16px;">
          ${this.renderSliderField((0,d.kg)("editor.badge.badge_size",n,"Badge Size"),(0,d.kg)("editor.badge.badge_size_desc",n,"Overall size of the badge in pixels"),e.badge_size||120,120,60,300,10,e=>{i({badge_size:e})})}
        </div>

        <!-- Inner Badge Ratio -->
        <div class="field-container">
          ${this.renderSliderField((0,d.kg)("editor.badge.inner_ratio",n,"Inner Badge Ratio"),(0,d.kg)("editor.badge.inner_ratio_desc",n,"Size of inner circle relative to outer (0.4 - 0.8)"),e.inner_badge_ratio||.6,.6,.4,.8,.05,e=>{i({inner_badge_ratio:e})},"")}
        </div>
      </div>
    `}renderColorsSection(e,t,i,n){return o.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px;"
        >
          ${(0,d.kg)("editor.badge.colors_title",n,"GRADIENT COLORS")}
        </div>
        <div
          class="section-description"
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;"
        >
          ${(0,d.kg)("editor.badge.colors_desc",n,"Set the gradient colors that shift around the badge ring. The colors will smoothly transition creating a beautiful animated effect.")}
        </div>

        <!-- Color Pickers Grid -->
        <div
          style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 16px;"
        >
          <div class="field-group">
            <div class="field-title" style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
              ${(0,d.kg)("editor.badge.color_1",n,"Color 1 (Teal)")}
            </div>
            <ultra-color-picker
              .label=${""}
              .value=${e.gradient_color_1||"#4ecdc4"}
              .defaultValue=${"#4ecdc4"}
              .hass=${t}
              @value-changed=${e=>i({gradient_color_1:e.detail.value})}
            ></ultra-color-picker>
          </div>
          <div class="field-group">
            <div class="field-title" style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
              ${(0,d.kg)("editor.badge.color_2",n,"Color 2 (Blue-Teal)")}
            </div>
            <ultra-color-picker
              .label=${""}
              .value=${e.gradient_color_2||"#44a8b3"}
              .defaultValue=${"#44a8b3"}
              .hass=${t}
              @value-changed=${e=>i({gradient_color_2:e.detail.value})}
            ></ultra-color-picker>
          </div>
          <div class="field-group">
            <div class="field-title" style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
              ${(0,d.kg)("editor.badge.color_3",n,"Color 3 (Purple)")}
            </div>
            <ultra-color-picker
              .label=${""}
              .value=${e.gradient_color_3||"#7c5ce0"}
              .defaultValue=${"#7c5ce0"}
              .hass=${t}
              @value-changed=${e=>i({gradient_color_3:e.detail.value})}
            ></ultra-color-picker>
          </div>
          <div class="field-group">
            <div class="field-title" style="font-size: 14px; font-weight: 600; margin-bottom: 8px;">
              ${(0,d.kg)("editor.badge.color_4",n,"Color 4 (Indigo)")}
            </div>
            <ultra-color-picker
              .label=${""}
              .value=${e.gradient_color_4||"#6366f1"}
              .defaultValue=${"#6366f1"}
              .hass=${t}
              @value-changed=${e=>i({gradient_color_4:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>

        <!-- Inner Background Color -->
        <div class="field-group" style="margin-bottom: 16px;">
          <div class="field-title" style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">
            ${(0,d.kg)("editor.badge.inner_bg",n,"Inner Background Type")}
          </div>
          <div
            class="field-description"
            style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
          >
            ${(0,d.kg)("editor.badge.inner_bg_desc",n,"Background style for the inner circle")}
          </div>
          ${this.renderUcForm(t,{inner_background_type:e.inner_background_type||"gradient"},[this.selectField("inner_background_type",[{value:"gradient",label:(0,d.kg)("editor.badge.bg_gradient",n,"Gradient")},{value:"solid",label:(0,d.kg)("editor.badge.bg_solid",n,"Solid Color")},{value:"transparent",label:(0,d.kg)("editor.badge.bg_transparent",n,"Transparent")}])],t=>{const o=t.detail.value.inner_background_type;o!==e.inner_background_type&&i({inner_background_type:o})},!1)}
        </div>

        ${"solid"===e.inner_background_type?o.qy`
              <div class="field-group">
                <div
                  class="field-title"
                  style="font-size: 14px; font-weight: 600; margin-bottom: 8px;"
                >
                  ${(0,d.kg)("editor.badge.inner_color",n,"Inner Background Color")}
                </div>
                <ultra-color-picker
                  .label=${""}
                  .value=${e.inner_background_color||"#1a1a2e"}
                  .defaultValue=${"#1a1a2e"}
                  .hass=${t}
                  @value-changed=${e=>i({inner_background_color:e.detail.value})}
                ></ultra-color-picker>
              </div>
            `:""}
      </div>
    `}renderAnimationSection(e,t,i,n){return o.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px;"
        >
          ${(0,d.kg)("editor.badge.animation_title",n,"ANIMATION")}
        </div>

        <!-- Rotation Speed -->
        <div class="field-container" style="margin-bottom: 16px;">
          ${this.renderSliderField((0,d.kg)("editor.badge.rotation_speed",n,"Rotation Speed"),(0,d.kg)("editor.badge.rotation_speed_desc",n,"Time in seconds for one full rotation (lower = faster)"),e.rotation_speed||10,10,3,30,1,e=>{i({rotation_speed:e})},"s")}
        </div>

        <!-- Rotation Direction -->
        <div class="field-group" style="margin-bottom: 16px;">
          <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
            ${(0,d.kg)("editor.badge.rotation_direction",n,"Rotation Direction")}
          </div>
          ${this.renderUcForm(t,{rotation_direction:e.rotation_direction||"clockwise"},[this.selectField("rotation_direction",[{value:"clockwise",label:(0,d.kg)("editor.badge.clockwise",n,"Clockwise")},{value:"counter-clockwise",label:(0,d.kg)("editor.badge.counter_clockwise",n,"Counter-Clockwise")}])],t=>{const o=t.detail.value.rotation_direction;o!==e.rotation_direction&&i({rotation_direction:o})},!1)}
        </div>

        <!-- Color Shift Toggle -->
        ${this.renderFieldSection((0,d.kg)("editor.badge.color_shift",n,"Color Shift Animation"),(0,d.kg)("editor.badge.color_shift_desc",n,"Animate gradient colors shifting around the ring"),t,{enable_color_shift:!1!==e.enable_color_shift},[this.booleanField("enable_color_shift")],e=>i({enable_color_shift:e.detail.value.enable_color_shift}))}

        ${!1!==e.enable_color_shift?o.qy`
              <div class="field-container" style="margin-bottom: 16px;">
                ${this.renderSliderField((0,d.kg)("editor.badge.color_shift_speed",n,"Color Shift Speed"),(0,d.kg)("editor.badge.color_shift_speed_desc",n,"Time in seconds for full color cycle"),e.color_shift_speed||8,8,2,20,1,e=>{i({color_shift_speed:e})},"s")}
              </div>
            `:""}

        <!-- Glow Effect Toggle -->
        ${this.renderFieldSection((0,d.kg)("editor.badge.glow",n,"Glow Effect"),(0,d.kg)("editor.badge.glow_desc",n,"Add a soft glow around the badge"),t,{enable_glow:!1!==e.enable_glow},[this.booleanField("enable_glow")],e=>i({enable_glow:e.detail.value.enable_glow}))}

        ${!1!==e.enable_glow?o.qy`
              <div class="field-container" style="margin-bottom: 16px;">
                ${this.renderSliderField((0,d.kg)("editor.badge.glow_intensity",n,"Glow Intensity"),"",e.glow_intensity||.4,.4,.1,1,.1,e=>{i({glow_intensity:e})},"")}
              </div>
            `:""}

        <!-- Pulse Effect Toggle -->
        ${this.renderFieldSection((0,d.kg)("editor.badge.pulse",n,"Pulse Effect"),(0,d.kg)("editor.badge.pulse_desc",n,"Add a subtle pulsing animation"),t,{enable_pulse:e.enable_pulse||!1},[this.booleanField("enable_pulse")],e=>i({enable_pulse:e.detail.value.enable_pulse}))}

        ${e.enable_pulse?o.qy`
              <div class="field-container" style="margin-top: 16px;">
                ${this.renderSliderField((0,d.kg)("editor.badge.pulse_speed",n,"Pulse Speed"),"",e.pulse_speed||2,2,.5,5,.5,e=>{i({pulse_speed:e})},"s")}
              </div>
            `:""}
      </div>
    `}renderInnerContentSection(e,t,i,n){return o.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px;"
        >
          ${(0,d.kg)("editor.badge.inner_content_title",n,"INNER CONTENT")}
        </div>
        <div
          class="section-description"
          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;"
        >
          ${(0,d.kg)("editor.badge.inner_content_desc",n,"Choose what to display in the center of the badge.")}
        </div>

        <!-- Inner Content Type -->
        <div class="field-group" style="margin-bottom: 16px;">
          <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
            ${(0,d.kg)("editor.badge.inner_type",n,"Content Type")}
          </div>
          ${this.renderUcForm(t,{inner_content_type:e.inner_content_type||"icon"},[this.selectField("inner_content_type",[{value:"icon",label:(0,d.kg)("editor.badge.type_icon",n,"Icon")},{value:"text",label:(0,d.kg)("editor.badge.type_text",n,"Text")},{value:"image",label:(0,d.kg)("editor.badge.type_image",n,"Image")}])],t=>{const o=t.detail.value.inner_content_type;o!==e.inner_content_type&&i({inner_content_type:o})},!1)}
        </div>

        <!-- Icon Content -->
        ${"icon"!==e.inner_content_type&&e.inner_content_type?"":o.qy`
              <div class="field-group" style="margin-bottom: 16px;">
                <div
                  class="field-title"
                  style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                >
                  ${(0,d.kg)("editor.badge.inner_icon",n,"Icon")}
                </div>
                <ha-form
                  .hass=${t}
                  .data=${{inner_icon:e.inner_icon||"mdi:crown"}}
                  .schema=${[{name:"inner_icon",selector:{icon:{}},label:""}]}
                  @value-changed=${e=>i({inner_icon:e.detail.value.inner_icon})}
                ></ha-form>
              </div>
              <div class="field-group">
                <div
                  class="field-title"
                  style="font-size: 14px; font-weight: 600; margin-bottom: 8px;"
                >
                  ${(0,d.kg)("editor.badge.icon_color",n,"Icon Color")}
                </div>
                <ultra-color-picker
                  .label=${""}
                  .value=${e.inner_icon_color||"#ffffff"}
                  .defaultValue=${"#ffffff"}
                  .hass=${t}
                  @value-changed=${e=>i({inner_icon_color:e.detail.value})}
                ></ultra-color-picker>
              </div>
            `}

        <!-- Text Content -->
        ${"text"===e.inner_content_type?o.qy`
              <div class="field-group" style="margin-bottom: 16px;">
                <div
                  class="field-title"
                  style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                >
                  ${(0,d.kg)("editor.badge.inner_text",n,"Text")}
                </div>
                <ha-form
                  .hass=${t}
                  .data=${{inner_text:e.inner_text||"PRO"}}
                  .schema=${[{name:"inner_text",selector:{text:{}},label:""}]}
                  @value-changed=${e=>i({inner_text:e.detail.value.inner_text})}
                ></ha-form>
              </div>
              <div class="field-group">
                <div
                  class="field-title"
                  style="font-size: 14px; font-weight: 600; margin-bottom: 8px;"
                >
                  ${(0,d.kg)("editor.badge.text_color",n,"Text Color")}
                </div>
                <ultra-color-picker
                  .label=${""}
                  .value=${e.inner_text_color||"#ffffff"}
                  .defaultValue=${"#ffffff"}
                  .hass=${t}
                  @value-changed=${e=>i({inner_text_color:e.detail.value})}
                ></ultra-color-picker>
              </div>
            `:""}

        <!-- Image Content -->
        ${"image"===e.inner_content_type?o.qy`
              <div class="field-group">
                <div
                  class="field-title"
                  style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                >
                  ${(0,d.kg)("editor.badge.inner_image",n,"Image URL")}
                </div>
                <div
                  class="field-description"
                  style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
                >
                  ${(0,d.kg)("editor.badge.inner_image_desc",n,"Enter a URL or local path to an image")}
                </div>
                <ha-form
                  .hass=${t}
                  .data=${{inner_image_url:e.inner_image_url||""}}
                  .schema=${[{name:"inner_image_url",selector:{text:{}},label:""}]}
                  @value-changed=${e=>i({inner_image_url:e.detail.value.inner_image_url})}
                ></ha-form>
              </div>
            `:""}
      </div>
    `}renderPreview(e,t,i,n){var r;const a=e,l=this.buildStyleString(this.buildDesignStyles(e,t)),d=this.getHoverEffectClass(e),s=a.badge_size||120,c=s*(a.inner_badge_ratio||.6),g=(s-c)/2,p=a.gradient_color_1||"#4ecdc4",_=a.gradient_color_2||"#44a8b3",f=a.gradient_color_3||"#7c5ce0",b=a.gradient_color_4||"#6366f1",u=a.rotation_speed||10,m="counter-clockwise"===a.rotation_direction?"reverse":"normal",v=a.color_shift_speed||8,h=a.glow_intensity||.4,x=a.pulse_speed||2,$=Math.max(7,Math.min(12,.075*s)),y=e.id||"badge",k=s/2-g/2,w=(Math.PI,a.inner_content_type||"icon"),S=a.inner_icon||"mdi:crown",z=a.inner_text||"PRO",C=a.inner_image_url||"",I=a.inner_background_type||"gradient",P=a.inner_background_color||"#1a1a2e",T=a.inner_text_color||"#ffffff",F=a.inner_icon_color||"#ffffff";let R="";return R="gradient"===I?`background: linear-gradient(135deg, ${p}22 0%, ${f}22 100%); backdrop-filter: blur(10px);`:"solid"===I?`background: ${P};`:"background: transparent;",this.wrapWithAnimation(o.qy`
      <style>
        @keyframes badge-rotate-${y} {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Smooth lava lamp - continuous rotation */
        @keyframes badge-lava-spin-${y} {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes badge-pulse-${y} {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }

        @keyframes badge-glow-pulse-${y} {
          0%, 100% {
            filter: blur(0px);
            opacity: 1;
          }
          50% {
            filter: blur(2px);
            opacity: 0.9;
          }
        }

        .badge-of-honor-container-${y} {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: ${s}px;
          height: ${s}px;
          margin: 0 auto;
          ${a.enable_pulse?`animation: badge-pulse-${y} ${x}s ease-in-out infinite;`:""}
        }

        .badge-outer-ring-${y} {
          position: absolute;
          width: ${s}px;
          height: ${s}px;
          border-radius: 50%;
          overflow: hidden;
          ${!1!==a.enable_glow?`box-shadow: 0 0 ${.15*s*h}px ${p}90, 0 0 ${.25*s*h}px ${_}70, 0 0 ${.4*s*h}px ${f}50;`:""}
        }

        .badge-gradient-layer-${y} {
          position: absolute;
          width: 140%;
          height: 140%;
          top: -20%;
          left: -20%;
          background: conic-gradient(
            from 0deg,
            ${p},
            ${_},
            ${f},
            ${b},
            ${p}
          );
          ${!1!==a.enable_color_shift?`animation: badge-lava-spin-${y} ${v}s linear infinite;`:""}
        }

        .badge-text-ring-${y} {
          position: absolute;
          width: ${s}px;
          height: ${s}px;
          animation: badge-rotate-${y} ${u}s linear infinite;
          animation-direction: ${m};
        }

        .badge-text-ring-${y} svg {
          width: 100%;
          height: 100%;
        }

        .badge-text-ring-${y} textPath {
          fill: white;
          font-size: ${$}px;
          font-weight: ${600};
          letter-spacing: ${2}px;
          text-transform: uppercase;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }

        .badge-inner-circle-${y} {
          position: absolute;
          width: ${c}px;
          height: ${c}px;
          border-radius: 50%;
          ${R}
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          border: 2px solid rgba(255,255,255,0.1);
        }

        .badge-inner-content-${y} {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-inner-content-${y} ha-icon {
          color: ${F};
          --mdc-icon-size: ${.5*c}px;
        }

        .badge-inner-content-${y} .inner-text {
          color: ${T};
          font-size: ${.35*c}px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .badge-inner-content-${y} .inner-image {
          width: ${.7*c}px;
          height: ${.7*c}px;
          object-fit: contain;
          border-radius: 50%;
        }

        .badge-of-honor-wrapper-${y} {
          transition: transform 0.3s ease;
          cursor: ${"nothing"!==(null===(r=a.tap_action)||void 0===r?void 0:r.action)?"pointer":"default"};
        }

        .badge-of-honor-wrapper-${y}:hover {
          transform: scale(${!1!==a.enable_hover_effect?a.hover_scale||1.05:1});
        }
      </style>

      <div class="badge-of-honor-wrapper-${y} ${d}" style="${l}">
        <div class="badge-of-honor-container-${y}">
          <!-- Outer gradient ring with glow -->
          <div class="badge-outer-ring-${y}">
            <div class="badge-gradient-layer-${y}"></div>
          </div>

          <!-- Rotating text ring -->
          <div class="badge-text-ring-${y}">
            <svg viewBox="0 0 ${s} ${s}">
              <defs>
                <path
                  id="badge-text-path-${y}"
                  d="M ${s/2}, ${s/2} m -${k}, 0 a ${k},${k} 0 1,1 ${2*k},0 a ${k},${k} 0 1,1 -${2*k},0"
                  fill="none"
                />
              </defs>
              <text textLength="${Math.floor(2*Math.PI*k*.98)}" lengthAdjust="spacing">
                <textPath href="#badge-text-path-${y}" startOffset="0%">
                  ${"ULTRA CARD PRO  •  ULTRA CARD PRO  •  "}
                </textPath>
              </text>
            </svg>
          </div>

          <!-- Inner circle with content -->
          <div class="badge-inner-circle-${y}">
            <div class="badge-inner-content-${y}">
              ${"icon"!==w&&w?"":o.qy`<ha-icon icon="${S}"></ha-icon>`}
              ${"text"===w?o.qy`<span class="inner-text">${z}</span>`:""}
              ${"image"===w&&C?o.qy`<img class="inner-image" src="${C}" alt="Badge" />`:""}
            </div>
          </div>
        </div>
      </div>
    `,e,t)}validate(e){const t=e,i=[...super.validate(e).errors];return t.badge_size&&(t.badge_size<60||t.badge_size>300)&&i.push("Badge size must be between 60 and 300 pixels"),t.inner_badge_ratio&&(t.inner_badge_ratio<.4||t.inner_badge_ratio>.8)&&i.push("Inner badge ratio must be between 0.4 and 0.8"),t.rotation_speed&&(t.rotation_speed<3||t.rotation_speed>30)&&i.push("Rotation speed must be between 3 and 30 seconds"),{valid:0===i.length,errors:i}}getEditorStyles(){return`\n      .settings-section {\n        background: var(--secondary-background-color);\n        border-radius: var(--uc-r-8, 8px);\n        padding: 16px;\n        margin-bottom: 16px;\n      }\n\n      .section-title {\n        font-size: 18px;\n        font-weight: 700;\n        text-transform: uppercase;\n        color: var(--primary-color);\n        margin-bottom: 16px;\n        letter-spacing: 0.5px;\n      }\n\n      .section-description {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        margin-bottom: 16px;\n      }\n\n      .field-title {\n        font-size: 16px;\n        font-weight: 600;\n        margin-bottom: 4px;\n      }\n\n      .field-description {\n        font-size: 13px;\n        font-weight: 400;\n        margin-bottom: 12px;\n        color: var(--secondary-text-color);\n      }\n\n      .field-group {\n        margin-bottom: 16px;\n      }\n\n      .field-container {\n        margin-bottom: 16px;\n      }\n\n      ${n.m.getSliderStyles()}\n    `}getStyles(){return"\n      .badge-of-honor-wrapper {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        height: 100%;\n      }\n    "}}}};