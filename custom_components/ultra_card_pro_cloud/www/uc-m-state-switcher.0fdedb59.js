export const __webpack_esm_ids__=[6068];export const __webpack_esm_modules__={1091(t,i,e){e.d(i,{tG:()=>d,zU:()=>c});var n=e(2618),a=e(8414),o=e(230),s=e(378),r=e(2034),l=e(5064);function d(t,i){var e,n,a,s;o.S.setHass(i);const r=t,l=o.S.evaluateModuleVisibility(r),d=o.S.evaluateLogicProperties({logic_entity:null===(e=null==r?void 0:r.design)||void 0===e?void 0:e.logic_entity,logic_attribute:null===(n=null==r?void 0:r.design)||void 0===n?void 0:n.logic_attribute,logic_operator:null===(a=null==r?void 0:r.design)||void 0===a?void 0:a.logic_operator,logic_value:null===(s=null==r?void 0:r.design)||void 0===s?void 0:s.logic_value});return l&&d}function c(t,i,e,o){var c,h,u,m,g,v,p,w,f,y,_,b;if(!d(t,i))return n.qy``;const k=function(t){const i=t.design||{};return void 0!==i.margin_top||void 0!==i.margin_bottom||void 0!==i.margin_left||void 0!==i.margin_right||void 0!==t.margin_top||void 0!==t.margin_bottom||void 0!==t.margin_left||void 0!==t.margin_right?t:Object.assign(Object.assign({},t),{margin_top:"0",margin_bottom:"0",margin_left:"0",margin_right:"0"})}(t),x=(0,a.oD)().getModule(k.type);if(!x)return r.E.renderModuleLoadingState(k);const S=!(!(null===(h=null===(c=x.metadata)||void 0===c?void 0:c.tags)||void 0===h?void 0:h.includes("pro"))&&!(null===(m=null===(u=x.metadata)||void 0===u?void 0:u.tags)||void 0===m?void 0:m.includes("premium")))&&!function(t){var i,e,n,a;const o=s.xd.checkIntegrationAuth(t);if("pro"===(null===(i=null==o?void 0:o.subscription)||void 0===i?void 0:i.tier)&&"active"===(null===(e=null==o?void 0:o.subscription)||void 0===e?void 0:e.status))return!0;if(s.xd.isAuthenticated()){const t=s.xd.getCurrentUser();if("pro"===(null===(n=null==t?void 0:t.subscription)||void 0===n?void 0:n.tier)&&"active"===(null===(a=null==t?void 0:t.subscription)||void 0===a?void 0:a.status))return!0}return!1}(i),$=(0,l.l8)(k),z=x.renderPreview($,i,e,o);if(S)return n.qy`
      <div class="pro-module-locked" style="position: relative;">
        ${z}
        <div
          class="pro-module-overlay"
          style="
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--uc-r-12, 12px);
            z-index: 10;
          "
        >
          <div
            style="
              text-align: center;
              color: white;
              padding: 6px;
              max-width: 95%;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 4px;
            "
          >
            <ha-icon icon="mdi:lock" style="font-size: 20px; flex-shrink: 0;"></ha-icon>
            <div style="font-size: 11px; font-weight: 600; line-height: 1.2; white-space: nowrap;">
              Pro Module
            </div>
          </div>
        </div>
      </div>
    `;const q=k,F=q.animation_type||(null===(g=q.design)||void 0===g?void 0:g.animation_type);if(F&&"none"!==F){const t=q.animation_duration||(null===(v=q.design)||void 0===v?void 0:v.animation_duration)||"2s",e=q.animation_delay||(null===(p=q.design)||void 0===p?void 0:p.animation_delay)||"0s",a=q.animation_timing||(null===(w=q.design)||void 0===w?void 0:w.animation_timing)||"ease",o=q.animation_entity||(null===(f=q.design)||void 0===f?void 0:f.animation_entity),s=q.animation_trigger_type||(null===(y=q.design)||void 0===y?void 0:y.animation_trigger_type)||"state",r=q.animation_attribute||(null===(_=q.design)||void 0===_?void 0:_.animation_attribute),l=q.animation_state||(null===(b=q.design)||void 0===b?void 0:b.animation_state);let d=!1;if(o){if(l&&i&&i.states[o]){const t=i.states[o];d="attribute"===s&&r?String(t.attributes[r])===l:t.state===l}}else d=!0;if(d)return n.qy`
        <div
          class="module-animation-wrapper animation-${F}"
          style="
            --animation-duration: ${t};
            --animation-delay: ${e};
            --animation-timing: ${a};
          "
        >
          ${z}
        </div>
      `}return z}e.d(i,["fC",0,["button","input","select","textarea","a[href]","ha-switch","ha-slider","ha-control-slider","ha-control-select",'[role="button"]','[role="slider"]','[role="switch"]']])},4997(t,i,e){e.d(i,{UltraStateSwitcherModule:()=>c});var n=e(2618),a=e(6214),o=e(7475),s=e(8414),r=e(8938),l=e(6478),d=e(1091);class c extends o.m{constructor(){super(...arguments),this.metadata={type:"state_switcher",title:"State Switcher",description:"Shows exactly one child at a time — the first whose logic conditions match",author:"WJD Designs",version:"1.0.0",icon:"mdi:swap-horizontal-bold",category:"layout",tags:["layout","switcher","conditional","state","container","transition"]}}createDefault(t,i){return{id:t||this.generateId("state_switcher"),type:"state_switcher",modules:[],transition:"fade",transition_duration:300,fallback_mode:"none",display_mode:"always",display_conditions:[]}}renderGeneralTab(t,i,e,a){var o,r;const d=t,c=(null===(o=null==i?void 0:i.locale)||void 0===o?void 0:o.language)||"en",h=d.modules||[],u=(0,s.oD)();return n.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- How it works -->
        ${this.renderSettingsSection((0,l.kg)("editor.state_switcher.how.title",c,"How It Works"),(0,l.kg)("editor.state_switcher.how.desc",c,"Add modules to this container, then give each one display conditions in its Logic tab. The switcher shows only the FIRST child whose conditions match — top to bottom. A child without conditions always matches, so put a default last."),[])}

        <!-- Children overview -->
        ${h.length>0?n.qy`
              <div
                class="settings-section"
                style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
              >
                <div
                  class="section-title"
                  style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
                >
                  ${(0,l.kg)("editor.state_switcher.order.title",c,"Match Order")}
                </div>
                ${h.map((t,i)=>{const e=u.getModuleMetadata(t.type),a=t.name||(null==e?void 0:e.title)||t.type,o=(t.display_conditions||[]).length>0&&void 0!==t.display_mode&&"always"!==t.display_mode;return n.qy`
                    <div
                      style="display: flex; align-items: center; gap: 10px; padding: 8px 4px; border-bottom: 1px solid var(--divider-color); font-size: 13px;"
                    >
                      <span
                        style="min-width: 20px; height: 20px; border-radius: 50%; background: var(--primary-color); color: var(--text-primary-color, #fff); display: inline-flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700;"
                        >${i+1}</span
                      >
                      <ha-icon
                        icon="${(null==e?void 0:e.icon)||"mdi:puzzle"}"
                        style="--mdc-icon-size: 18px; color: var(--secondary-text-color);"
                      ></ha-icon>
                      <span style="flex: 1; color: var(--primary-text-color);">${a}</span>
                      <span
                        style="font-size: 12px; color: ${o?"var(--success-color, #4caf50)":"var(--warning-color, #ff9800)"};"
                      >
                        ${o?(0,l.kg)("editor.state_switcher.order.has_conditions",c,"Has conditions"):(0,l.kg)("editor.state_switcher.order.always",c,"Always matches")}
                      </span>
                    </div>
                  `})}
              </div>
            `:""}

        <!-- Fallback -->
        ${this.renderSettingsSection((0,l.kg)("editor.state_switcher.fallback.title",c,"Fallback"),(0,l.kg)("editor.state_switcher.fallback.desc",c,"What to show when no child conditions match."),[{title:(0,l.kg)("editor.state_switcher.fallback.mode",c,"Fallback Mode"),description:"",hass:i,data:{fallback_mode:d.fallback_mode||"none"},schema:[this.selectField("fallback_mode",[{value:"none",label:(0,l.kg)("editor.state_switcher.fallback.none",c,"Show nothing")},{value:"first",label:(0,l.kg)("editor.state_switcher.fallback.first",c,"Show first child")},{value:"last",label:(0,l.kg)("editor.state_switcher.fallback.last",c,"Show last child")}])],onChange:t=>{a({fallback_mode:t.detail.value.fallback_mode}),this.triggerPreviewUpdate()}}])}

        <!-- Transition -->
        ${this.renderSettingsSection((0,l.kg)("editor.state_switcher.transition.title",c,"Transition"),(0,l.kg)("editor.state_switcher.transition.desc",c,"Animation when the visible child changes."),[{title:(0,l.kg)("editor.state_switcher.transition.type",c,"Transition"),description:"",hass:i,data:{transition:d.transition||"fade"},schema:[this.selectField("transition",[{value:"none",label:(0,l.kg)("editor.common.none",c,"None")},{value:"fade",label:(0,l.kg)("editor.state_switcher.transition.fade",c,"Fade")},{value:"slide_left",label:(0,l.kg)("editor.state_switcher.transition.slide_left",c,"Slide Left")},{value:"slide_right",label:(0,l.kg)("editor.state_switcher.transition.slide_right",c,"Slide Right")},{value:"slide_up",label:(0,l.kg)("editor.state_switcher.transition.slide_up",c,"Slide Up")},{value:"slide_down",label:(0,l.kg)("editor.state_switcher.transition.slide_down",c,"Slide Down")},{value:"scale",label:(0,l.kg)("editor.state_switcher.transition.scale",c,"Scale")}])],onChange:t=>{a({transition:t.detail.value.transition}),this.triggerPreviewUpdate()}}])}
        <div style="margin-top: -16px; margin-bottom: 32px;">
          ${this.renderSliderField((0,l.kg)("editor.state_switcher.transition.duration",c,"Transition Duration"),"",null!==(r=d.transition_duration)&&void 0!==r?r:300,300,0,1500,50,t=>a({transition_duration:t}),"ms")}
        </div>
      </div>
    `}renderPreview(t,i,e,o){var s,r;const c=t,h=(null===(s=null==i?void 0:i.locale)||void 0===s?void 0:s.language)||"en",u=c.modules||[],m="live"===o||"ha-preview"===o;let g=u.find(t=>(0,d.tG)(t,i));if(!g&&u.length>0){const t=c.fallback_mode||"none";"first"===t?g=u[0]:"last"===t&&(g=u[u.length-1])}if(0===u.length)return m?n.qy`
        <div class="state-switcher-empty">
          <span>${(0,l.kg)("editor.state_switcher.empty.no_modules",h,"No modules added yet")}</span>
          <small
            >${(0,l.kg)("editor.state_switcher.empty.add_modules",h,"Add modules in the layout builder, then set each one’s display conditions in its Logic tab")}</small
          >
        </div>
      `:n.qy``;if(!g)return m?n.qy`
        <div class="state-switcher-empty">
          <span
            >${(0,l.kg)("editor.state_switcher.empty.no_match",h,"No child conditions match right now")}</span
          >
          <small
            >${(0,l.kg)("editor.state_switcher.empty.no_match_hint",h,"Set Fallback Mode to show a default, or add a child without conditions as the last item")}</small
          >
        </div>
      `:n.qy``;const v=c.transition||"fade",p=null!==(r=c.transition_duration)&&void 0!==r?r:300,w=this.buildDesignStyles(t,i),f=this.getHoverEffectClass(t);return this.wrapWithAnimation(n.qy`
        <div
          class="state-switcher-container ${f}"
          style="${this.buildStyleString(w)}; --switch-duration: ${p}ms;"
        >
          ${(0,a.u)([g],t=>t.id||t.type,t=>n.qy`
              <div class="state-switcher-active ${"none"!==v?`uc-switch-${v}`:""}">
                ${(0,d.zU)(t,i,e,o)}
              </div>
            `)}
        </div>
      `,t,i)}renderLogicTab(t,i,e,n){return r.X.render(t,i,t=>n(t))}getStyles(){return`\n      .state-switcher-container {\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      .state-switcher-active {\n        min-width: 0;\n      }\n\n      @keyframes uc-switch-fade-in {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }\n\n      @keyframes uc-switch-slide-left-in {\n        from { opacity: 0; transform: translateX(24px); }\n        to { opacity: 1; transform: translateX(0); }\n      }\n\n      @keyframes uc-switch-slide-right-in {\n        from { opacity: 0; transform: translateX(-24px); }\n        to { opacity: 1; transform: translateX(0); }\n      }\n\n      @keyframes uc-switch-slide-up-in {\n        from { opacity: 0; transform: translateY(24px); }\n        to { opacity: 1; transform: translateY(0); }\n      }\n\n      @keyframes uc-switch-slide-down-in {\n        from { opacity: 0; transform: translateY(-24px); }\n        to { opacity: 1; transform: translateY(0); }\n      }\n\n      @keyframes uc-switch-scale-in {\n        from { opacity: 0; transform: scale(0.92); }\n        to { opacity: 1; transform: scale(1); }\n      }\n\n      .uc-switch-fade {\n        animation: uc-switch-fade-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .uc-switch-slide_left {\n        animation: uc-switch-slide-left-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .uc-switch-slide_right {\n        animation: uc-switch-slide-right-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .uc-switch-slide_up {\n        animation: uc-switch-slide-up-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .uc-switch-slide_down {\n        animation: uc-switch-slide-down-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .uc-switch-scale {\n        animation: uc-switch-scale-in var(--switch-duration, 300ms) ease both;\n      }\n\n      .state-switcher-empty {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 4px;\n        color: var(--secondary-text-color);\n        font-style: italic;\n        text-align: center;\n        width: 100%;\n        padding: 20px;\n        box-sizing: border-box;\n      }\n\n      .state-switcher-empty span {\n        font-size: 14px;\n        font-weight: 500;\n      }\n\n      .state-switcher-empty small {\n        font-size: 12px;\n        opacity: 0.8;\n      }\n\n      ${o.m.getSliderStyles()}\n    `}}}};