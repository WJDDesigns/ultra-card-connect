export const __webpack_esm_ids__=[6095];export const __webpack_esm_modules__={5040(e,i,a){a.d(i,{UltraLivingCanvasModule:()=>v});var t=a(2618),r=a(7475),o=a(5147),n=a(8938),s=a(378),d=a(6478),l=a(3351);a(7921);const c=[{value:"aurora",labelKey:"editor.living_canvas.preset_aurora",fallback:"Aurora"},{value:"plasma",labelKey:"editor.living_canvas.preset_plasma",fallback:"Plasma"},{value:"particles",labelKey:"editor.living_canvas.preset_particles",fallback:"Particles"},{value:"mesh",labelKey:"editor.living_canvas.preset_mesh",fallback:"Mesh gradient"}];class v extends r.m{constructor(){super(...arguments),this.metadata={type:"living_canvas",title:"Living Canvas",description:"View-wide WebGL background art (like Dynamic Weather), with presets and optional entity drivers",author:"WJD Designs",version:"1.0.0",icon:"mdi:palette-swatch",category:"media",tags:["pro","premium","canvas","webgl","animated","art","ambient","three"]}}createDefault(e,i){return{id:e||this.generateId("living_canvas"),type:"living_canvas",enabled:!0,position:"background",opacity:100,enable_on_mobile:!0,preset:"aurora",speed:1,intensity:70,respect_reduced_motion:!0,quality:"medium",driver_entity_a:"",driver_entity_b:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const i=e,a=[...super.validate(e).errors];i.preset&&!["aurora","plasma","particles","mesh"].includes(i.preset)&&a.push("Invalid Living Canvas preset");const t=i.speed;void 0!==t&&(t<.25||t>3)&&a.push("Living Canvas speed must be between 0.25 and 3");const r=i.intensity;void 0!==r&&(r<0||r>100)&&a.push("Living Canvas intensity must be 0–100");const o=i.opacity;return void 0!==o&&(o<0||o>100)&&a.push("Living Canvas opacity must be 0–100"),{valid:0===a.length,errors:a}}renderActionsTab(e,i,a,t){return o.A.render(e,i,e=>t(e))}renderOtherTab(e,i,a,t){return n.X.render(e,i,e=>t(e))}renderGeneralTab(e,i,a,r){var o,n,v,g,p,u;const m=e,b=(null===(o=null==i?void 0:i.locale)||void 0===o?void 0:o.language)||"en",h=s.xd.checkIntegrationAuth(i);return"pro"===(null===(n=null==h?void 0:h.subscription)||void 0===n?void 0:n.tier)&&"active"===(null===(v=null==h?void 0:h.subscription)||void 0===v?void 0:v.status)?t.qy`
      <div class="uc-living-canvas-settings">
        ${this.injectUcFormStyles()}
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
        >
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <ha-icon
              icon="mdi:palette-swatch"
              style="color: var(--primary-color); --mdi-icon-size: 32px;"
            ></ha-icon>
            <div>
              <div style="font-size: 18px; font-weight: 700;">
                ${(0,d.kg)("editor.living_canvas.title",b,"Living Canvas")} (Pro)
              </div>
              <div style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.45;">
                ${(0,d.kg)("editor.living_canvas.intro",b,"Renders as a full-view WebGL layer (like Dynamic Weather), not inside the card. Adjust canvas opacity and colors so the dashboard stays readable.")}
              </div>
            </div>
          </div>
          <div
            style="padding: 12px; background: rgba(var(--rgb-info-color), 0.1); border-radius: var(--uc-r-6, 6px); border-left: 4px solid var(--info-color); font-size: 12px; line-height: 1.45;"
          >
            ${(0,d.kg)("editor.living_canvas.view_note",b,"Only one winning module runs per view (logic + order). Open the live dashboard to see the effect; the preview below is a summary.")}
          </div>
        </div>

        ${this.renderSettingsSection("","",[{title:(0,d.kg)("editor.living_canvas.enable",b,"Enable Living Canvas"),description:(0,d.kg)("editor.living_canvas.enable_desc",b,"Turn the view-wide canvas on or off"),hass:i,data:{enabled:!1!==m.enabled},schema:[this.booleanField("enabled")],onChange:e=>{r(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px;"
          >
            ${(0,d.kg)("editor.living_canvas.display_section",b,"Display")}
          </div>
          ${this.renderFieldSection((0,d.kg)("editor.living_canvas.position",b,"Position"),(0,d.kg)("editor.living_canvas.position_desc",b,"Background sits above the static background module but behind cards; foreground draws on top of cards."),i,{position:m.position||"background"},[this.selectField("position",[{value:"background",label:(0,d.kg)("editor.living_canvas.position_bg",b,"Background (behind cards)")},{value:"foreground",label:(0,d.kg)("editor.living_canvas.position_fg",b,"Foreground (above cards)")}])],e=>r(e.detail.value))}
          ${this.renderSliderField((0,d.kg)("editor.living_canvas.canvas_opacity",b,"Canvas Opacity"),(0,d.kg)("editor.living_canvas.canvas_opacity_desc",b,"Fades only the WebGL canvas (default 100%). Does not change your Ultra Card or other cards on the view."),null!==(g=m.opacity)&&void 0!==g?g:100,100,0,100,1,e=>{isNaN(e)||r({opacity:e})},"%")}
        </div>

        ${this.renderFieldSection((0,d.kg)("editor.living_canvas.preset",b,"Preset"),(0,d.kg)("editor.living_canvas.preset_desc",b,"Choose a visual style"),i,{preset:m.preset||"aurora"},[this.selectField("preset",c.map(e=>({value:e.value,label:(0,d.kg)(e.labelKey,b,e.fallback)})))],e=>{r(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${(()=>{const e=m.preset||"aurora",a=(0,l.Bw)(e);return t.qy`
            <div
              class="settings-section"
              style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
            >
              <div
                class="section-title"
                style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px;"
              >
                ${(0,d.kg)("editor.living_canvas.colors_section",b,"Colors")}
              </div>
              <div
                style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; line-height: 1.45;"
              >
                ${(0,d.kg)("editor.living_canvas.colors_section_desc",b,"Each preset has a default palette. Override colors here (hex, theme vars, or favorites). Changing preset updates the suggested defaults in the pickers.")}
              </div>
              <div style="margin-bottom: 16px;">
                <div class="field-title" style="font-size: 14px; font-weight: 600; margin-bottom: 6px;">
                  ${(0,d.kg)("editor.living_canvas.color_background",b,"Background / base")}
                </div>
                <ultra-color-picker
                  .label=${(0,d.kg)("editor.living_canvas.color_background",b,"Background / base")}
                  .value=${m.canvas_color_background||""}
                  .defaultValue=${a.background}
                  .hass=${i}
                  @value-changed=${e=>{r({canvas_color_background:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                ></ultra-color-picker>
              </div>
              <div style="margin-bottom: 16px;">
                <div class="field-title" style="font-size: 14px; font-weight: 600; margin-bottom: 6px;">
                  ${(0,d.kg)("editor.living_canvas.color_primary",b,"Primary accent")}
                </div>
                <ultra-color-picker
                  .label=${(0,d.kg)("editor.living_canvas.color_primary",b,"Primary accent")}
                  .value=${m.canvas_color_primary||""}
                  .defaultValue=${a.primary}
                  .hass=${i}
                  @value-changed=${e=>{r({canvas_color_primary:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                ></ultra-color-picker>
              </div>
              <div style="margin-bottom: 8px;">
                <div class="field-title" style="font-size: 14px; font-weight: 600; margin-bottom: 6px;">
                  ${(0,d.kg)("editor.living_canvas.color_secondary",b,"Secondary accent")}
                </div>
                <ultra-color-picker
                  .label=${(0,d.kg)("editor.living_canvas.color_secondary",b,"Secondary accent")}
                  .value=${m.canvas_color_secondary||""}
                  .defaultValue=${a.secondary}
                  .hass=${i}
                  @value-changed=${e=>{r({canvas_color_secondary:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                ></ultra-color-picker>
              </div>
            </div>
          `})()}

        ${this.renderFieldSection((0,d.kg)("editor.living_canvas.speed",b,"Speed"),(0,d.kg)("editor.living_canvas.speed_desc",b,"Animation speed (0.25–3)"),i,{speed:null!==(p=m.speed)&&void 0!==p?p:1},[this.numberField("speed",.25,3,.05)],e=>{r(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${this.renderFieldSection((0,d.kg)("editor.living_canvas.intensity",b,"Intensity"),(0,d.kg)("editor.living_canvas.intensity_desc",b,"Brightness of the effect (0–100)"),i,{intensity:null!==(u=m.intensity)&&void 0!==u?u:70},[this.numberField("intensity",0,100,1)],e=>{r(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${this.renderFieldSection((0,d.kg)("editor.living_canvas.quality",b,"Quality"),(0,d.kg)("editor.living_canvas.quality_desc",b,"Pixel ratio cap for performance"),i,{quality:m.quality||"medium"},[this.selectField("quality",[{value:"low",label:(0,d.kg)("editor.living_canvas.quality_low",b,"Low")},{value:"medium",label:(0,d.kg)("editor.living_canvas.quality_medium",b,"Medium")},{value:"high",label:(0,d.kg)("editor.living_canvas.quality_high",b,"High")}])],e=>{r(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(!0),50)})}

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px;"
          >
            ${(0,d.kg)("editor.living_canvas.mobile_section",b,"Mobile")}
          </div>
          ${this.renderSettingsSection("","",[{title:(0,d.kg)("editor.living_canvas.enable_on_mobile",b,"Enable on mobile"),description:(0,d.kg)("editor.living_canvas.enable_on_mobile_desc",b,"When off, the canvas is hidden on small screens to save battery"),hass:i,data:{enable_on_mobile:!1!==m.enable_on_mobile},schema:[this.booleanField("enable_on_mobile")],onChange:e=>r(e.detail.value)}])}
        </div>

        ${this.renderSettingsSection((0,d.kg)("editor.living_canvas.accessibility",b,"Accessibility"),"",[{title:(0,d.kg)("editor.living_canvas.respect_reduced_motion",b,"Respect reduced motion"),description:(0,d.kg)("editor.living_canvas.respect_reduced_motion_desc",b,"When the OS requests reduced motion, the canvas is hidden for this view"),hass:i,data:{respect_reduced_motion:!1!==m.respect_reduced_motion},schema:[this.booleanField("respect_reduced_motion")],onChange:e=>r(e.detail.value)}])}

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
        >
          <div
            style="font-size: 16px; font-weight: 600; margin-bottom: 10px; color: var(--primary-color);"
          >
            ${(0,d.kg)("editor.living_canvas.drivers_heading",b,"Optional drivers")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 10px; line-height: 1.5;"
          >
            ${(0,d.kg)("editor.living_canvas.drivers_help",b,"Drivers feed live entity values into the shader as two extra 0–1 controls (Driver A and Driver B).")}
          </div>
          <div
            style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 20px; line-height: 1.55; padding: 10px 12px; background: rgba(var(--rgb-primary-color), 0.06); border-radius: var(--uc-r-6, 6px);"
          >
            ${(0,d.kg)("editor.living_canvas.drivers_detail",b,"How it works: each frame we read the selected entity state. Numbers between 0 and 1 are used as-is. Numbers from 0–100 are divided by 100. on/off map to 1 and 0. Other numbers are softly mapped so graphs still react. Each preset uses A/B differently (glow mix, line weight, color accents). Leave a driver empty to disable it.")}
          </div>
          <div style="margin-bottom: 24px;">
            ${this.renderEntityPickerWithVariables(i,a,"driver_entity_a",m.driver_entity_a||"",e=>r({driver_entity_a:e}),void 0,(0,d.kg)("editor.living_canvas.driver_a",b,"Driver A"))}
          </div>
          <div style="margin-bottom: 8px;">
            ${this.renderEntityPickerWithVariables(i,a,"driver_entity_b",m.driver_entity_b||"",e=>r({driver_entity_b:e}),void 0,(0,d.kg)("editor.living_canvas.driver_b",b,"Driver B"))}
          </div>
        </div>
      </div>
    `:this._renderProLockUI(b)}_renderProLockUI(e){return t.qy`
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
          style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 320px;"
        >
          ${(0,d.kg)("editor.living_canvas.pro_description",e,"Living Canvas is a Pro feature: a full-view WebGL background with presets and optional entity drivers. Upgrade to use it like Dynamic Weather.")}
        </div>
        <a
          href="https://ultracard.io/pro"
          target="_blank"
          rel="noopener noreferrer"
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
    `}renderPreview(e,i,a,r){var o,n;const s=e,l=(null===(o=null==i?void 0:i.locale)||void 0===o?void 0:o.language)||"en",v=(()=>{if("dashboard"===r)return!0;try{return"1"===new URLSearchParams(window.location.search).get("edit")}catch(e){return!1}})();if("live"===r||"ha-preview"===r||"dashboard"===r||v){const a=c.find(e=>e.value===(s.preset||"aurora")),r=a?(0,d.kg)(a.labelKey,l,a.fallback):s.preset||"aurora";return this.wrapWithAnimation(t.qy`
        <div
          style="padding: 16px; text-align: center; color: var(--secondary-text-color); font-style: italic; background: rgba(var(--rgb-primary-color), 0.05); border-radius: var(--uc-r-8, 8px); border: 2px dashed var(--divider-color);"
        >
          <ha-icon
            icon="mdi:palette-swatch"
            style="--mdi-icon-size: 48px; color: var(--primary-color); margin-bottom: 8px;"
          ></ha-icon>
          <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">
            ${(0,d.kg)("editor.living_canvas.title",l,"Living Canvas")}
          </div>
          <div style="font-size: 12px;">
            ${!1===s.enabled?(0,d.kg)("editor.living_canvas.preview_disabled",l,"Disabled"):`${(0,d.kg)("editor.living_canvas.preview_preset",l,"Preset")}: ${r} · ${"foreground"===(s.position||"background")?(0,d.kg)("editor.living_canvas.position_fg",l,"Foreground"):(0,d.kg)("editor.living_canvas.position_bg",l,"Background")} · ${(0,d.kg)("editor.living_canvas.preview_opacity",l,"Canvas opacity")} ${null!==(n=s.opacity)&&void 0!==n?n:100}%`}
          </div>
          <div style="font-size: 11px; margin-top: 8px; opacity: 0.75; line-height: 1.4;">
            ${(0,d.kg)("editor.living_canvas.preview_hint",l,"Rendered as a full-view layer. Open the dashboard to see it; registration uses this card instance.")}
          </div>
        </div>
      `,e,i)}return t.qy``}getStyles(){return`\n      ${r.m.getSliderStyles()}\n    `}}},3351(e,i,a){a.d(i,{Bw:()=>s,ZC:()=>n});var t=a(6477);const r={aurora:{background:"#0a101a",primary:"#26e68c",secondary:"#7358f2"},plasma:{background:"#070b14",primary:"#66c2ff",secondary:"#ff8866"},particles:{background:"#050812",primary:"#eaf0ff",secondary:"#5599ff"},mesh:{background:"#1a3060",primary:"#e08561",secondary:"#5c8ce8"}};function o(e){const i=e.trim().replace(/^#/,"");if(3===i.length){const e=parseInt(i[0]+i[0],16)/255,a=parseInt(i[1]+i[1],16)/255,t=parseInt(i[2]+i[2],16)/255;return[e,a,t].some(e=>Number.isNaN(e))?null:[e,a,t]}if(i.length>=6){const e=parseInt(i.slice(0,2),16)/255,a=parseInt(i.slice(2,4),16)/255,t=parseInt(i.slice(4,6),16)/255;return[e,a,t].some(e=>Number.isNaN(e))?null:[e,a,t]}return null}function n(e,i,a){var r;const n=o(a)||[.04,.06,.1],s=(i||"").trim();if(!s||"transparent"===s||(0,t.bn)(s))return n;if(s.startsWith("#"))return o(s)||n;if(!(null==e?void 0:e.body))return n;try{const i=e.createElement("span");i.style.cssText="position:absolute;left:-9999px;top:0;visibility:hidden;pointer-events:none;color:"+s,e.body.appendChild(i);const a=(null===(r=e.defaultView)||void 0===r?void 0:r.getComputedStyle(i).color)||"";i.remove();const t=a.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/i);if(t){const e=parseFloat(t[1]),i=parseFloat(t[2]),a=parseFloat(t[3]);return[e,i,a].some(e=>Number.isNaN(e))?n:Math.max(e,i,a)>1.001?[e/255,i/255,a/255]:[e,i,a]}}catch(e){}return n}function s(e){return r[e||"aurora"]||r.aurora}}};