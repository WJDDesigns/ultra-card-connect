export const __webpack_esm_ids__=[6068];export const __webpack_esm_modules__={4997(t,e,i){i.d(e,{UltraStateSwitcherModule:()=>d});var n=i(2618),a=i(6214),s=i(3307),o=i(8414),r=i(8938),l=i(6478),c=i(1091);class d extends s.m{constructor(){super(...arguments),this.metadata={type:"state_switcher",title:"State Switcher",description:"Shows exactly one child at a time — the first whose logic conditions match",author:"WJD Designs",version:"1.0.0",icon:"mdi:swap-horizontal-bold",category:"layout",tags:["layout","switcher","conditional","state","container","transition"]}}createDefault(t,e){return{id:t||this.generateId("state_switcher"),type:"state_switcher",modules:[],transition:"fade",transition_duration:300,fallback_mode:"none",display_mode:"always",display_conditions:[]}}renderGeneralTab(t,e,i,a){var s,r;const c=t,d=(null===(s=null==e?void 0:e.locale)||void 0===s?void 0:s.language)||"en",h=c.modules||[],m=(0,o.oD)();return n.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- How it works -->
        ${this.renderSettingsSection((0,l.kg)("editor.state_switcher.how.title",d,"How It Works"),(0,l.kg)("editor.state_switcher.how.desc",d,"Add modules to this container, then give each one display conditions in its Logic tab. The switcher shows only the FIRST child whose conditions match — top to bottom. A child without conditions always matches, so put a default last."),[])}

        <!-- Children overview -->
        ${h.length>0?n.qy`
              <div
                class="settings-section"
                style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
              >
                <div
                  class="section-title"
                  style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
                >
                  ${(0,l.kg)("editor.state_switcher.order.title",d,"Match Order")}
                </div>
                ${h.map((t,e)=>{const i=m.getModuleMetadata(t.type),a=t.name||(null==i?void 0:i.title)||t.type,s=(t.display_conditions||[]).length>0&&void 0!==t.display_mode&&"always"!==t.display_mode;return n.qy`
                    <div
                      style="display: flex; align-items: center; gap: 10px; padding: 8px 4px; border-bottom: 1px solid var(--divider-color); font-size: 13px;"
                    >
                      <span
                        style="min-width: 20px; height: 20px; border-radius: 50%; background: var(--primary-color); color: var(--text-primary-color, #fff); display: inline-flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700;"
                        >${e+1}</span
                      >
                      <ha-icon
                        icon="${(null==i?void 0:i.icon)||"mdi:puzzle"}"
                        style="--mdc-icon-size: 18px; color: var(--secondary-text-color);"
                      ></ha-icon>
                      <span style="flex: 1; color: var(--primary-text-color);">${a}</span>
                      <span
                        style="font-size: 12px; color: color-mix(in srgb, ${s?"var(--success-color, #4caf50)":"var(--warning-color, #ff9800)"} 60%, var(--primary-text-color));"
                      >
                        ${s?(0,l.kg)("editor.state_switcher.order.has_conditions",d,"Has conditions"):(0,l.kg)("editor.state_switcher.order.always",d,"Always matches")}
                      </span>
                    </div>
                  `})}
              </div>
            `:""}

        <!-- Fallback -->
        ${this.renderSettingsSection((0,l.kg)("editor.state_switcher.fallback.title",d,"Fallback"),(0,l.kg)("editor.state_switcher.fallback.desc",d,"What to show when no child conditions match."),[{title:(0,l.kg)("editor.state_switcher.fallback.mode",d,"Fallback Mode"),description:"",hass:e,data:{fallback_mode:c.fallback_mode||"none"},schema:[this.selectField("fallback_mode",[{value:"none",label:(0,l.kg)("editor.state_switcher.fallback.none",d,"Show nothing")},{value:"first",label:(0,l.kg)("editor.state_switcher.fallback.first",d,"Show first child")},{value:"last",label:(0,l.kg)("editor.state_switcher.fallback.last",d,"Show last child")}])],onChange:t=>{a({fallback_mode:t.detail.value.fallback_mode}),this.triggerPreviewUpdate()}}])}

        <!-- Transition -->
        ${this.renderSettingsSection((0,l.kg)("editor.state_switcher.transition.title",d,"Transition"),(0,l.kg)("editor.state_switcher.transition.desc",d,"Animation when the visible child changes."),[{title:(0,l.kg)("editor.state_switcher.transition.type",d,"Transition"),description:"",hass:e,data:{transition:c.transition||"fade"},schema:[this.selectField("transition",[{value:"none",label:(0,l.kg)("editor.common.none",d,"None")},{value:"fade",label:(0,l.kg)("editor.state_switcher.transition.fade",d,"Fade")},{value:"slide_left",label:(0,l.kg)("editor.state_switcher.transition.slide_left",d,"Slide Left")},{value:"slide_right",label:(0,l.kg)("editor.state_switcher.transition.slide_right",d,"Slide Right")},{value:"slide_up",label:(0,l.kg)("editor.state_switcher.transition.slide_up",d,"Slide Up")},{value:"slide_down",label:(0,l.kg)("editor.state_switcher.transition.slide_down",d,"Slide Down")},{value:"scale",label:(0,l.kg)("editor.state_switcher.transition.scale",d,"Scale")}])],onChange:t=>{a({transition:t.detail.value.transition}),this.triggerPreviewUpdate()}}])}
        <div style="margin-top: -16px; margin-bottom: 32px;">
          ${this.renderSliderField((0,l.kg)("editor.state_switcher.transition.duration",d,"Transition Duration"),"",null!==(r=c.transition_duration)&&void 0!==r?r:300,300,0,1500,50,t=>a({transition_duration:t}),"ms")}
        </div>
      </div>
    `}renderPreview(t,e,i,s){var o,r;const d=t,h=(null===(o=null==e?void 0:e.locale)||void 0===o?void 0:o.language)||"en",m=d.modules||[],w="live"===s||"ha-preview"===s;let p=m.find(t=>(0,c.tG)(t,e));if(!p&&m.length>0){const t=d.fallback_mode||"none";"first"===t?p=m[0]:"last"===t&&(p=m[m.length-1])}if(0===m.length)return w?n.qy`
        <div class="state-switcher-empty">
          <span>${(0,l.kg)("editor.state_switcher.empty.no_modules",h,"No modules added yet")}</span>
          <small
            >${(0,l.kg)("editor.state_switcher.empty.add_modules",h,"Add modules in the layout builder, then set each one’s display conditions in its Logic tab")}</small
          >
        </div>
      `:n.qy``;if(!p)return w?n.qy`
        <div class="state-switcher-empty">
          <span
            >${(0,l.kg)("editor.state_switcher.empty.no_match",h,"No child conditions match right now")}</span
          >
          <small
            >${(0,l.kg)("editor.state_switcher.empty.no_match_hint",h,"Set Fallback Mode to show a default, or add a child without conditions as the last item")}</small
          >
        </div>
      `:n.qy``;const u=d.transition||"fade",g=null!==(r=d.transition_duration)&&void 0!==r?r:300,y=this.buildDesignStyles(t,e),f=this.getHoverEffectClass(t);return this.wrapWithAnimation(n.qy`
        <div
          class="state-switcher-container ${f}"
          style="${this.buildStyleString(y)}; --switch-duration: ${g}ms;"
        >
          ${(0,a.u)([p],t=>t.id||t.type,t=>n.qy`
              <div class="state-switcher-active ${"none"!==u?`uc-switch-${u}`:""}">
                ${(0,c.zU)(t,e,i,s)}
              </div>
            `)}
        </div>
      `,t,e)}renderLogicTab(t,e,i,n){return r.X.render(t,e,t=>n(t))}getStyles(){return`\n      .state-switcher-container {\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      .state-switcher-active {\n        min-width: 0;\n      }\n\n      @keyframes uc-switch-fade-in {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }\n\n      @keyframes uc-switch-slide-left-in {\n        from { opacity: 0; transform: translateX(24px); }\n        to { opacity: 1; transform: translateX(0); }\n      }\n\n      @keyframes uc-switch-slide-right-in {\n        from { opacity: 0; transform: translateX(-24px); }\n        to { opacity: 1; transform: translateX(0); }\n      }\n\n      @keyframes uc-switch-slide-up-in {\n        from { opacity: 0; transform: translateY(24px); }\n        to { opacity: 1; transform: translateY(0); }\n      }\n\n      @keyframes uc-switch-slide-down-in {\n        from { opacity: 0; transform: translateY(-24px); }\n        to { opacity: 1; transform: translateY(0); }\n      }\n\n      @keyframes uc-switch-scale-in {\n        from { opacity: 0; transform: scale(0.92); }\n        to { opacity: 1; transform: scale(1); }\n      }\n\n      .uc-switch-fade {\n        animation: uc-switch-fade-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .uc-switch-slide_left {\n        animation: uc-switch-slide-left-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .uc-switch-slide_right {\n        animation: uc-switch-slide-right-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .uc-switch-slide_up {\n        animation: uc-switch-slide-up-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .uc-switch-slide_down {\n        animation: uc-switch-slide-down-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .uc-switch-scale {\n        animation: uc-switch-scale-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .state-switcher-empty {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 4px;\n        color: var(--secondary-text-color);\n        font-style: italic;\n        text-align: center;\n        width: 100%;\n        padding: 20px;\n        box-sizing: border-box;\n      }\n\n      .state-switcher-empty span {\n        font-size: 14px;\n        font-weight: 500;\n      }\n\n      .state-switcher-empty small {\n        font-size: 12px;\n        opacity: 0.8;\n      }\n\n      ${s.m.getSliderStyles()}\n    `}}}};