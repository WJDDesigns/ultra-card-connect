export const __webpack_esm_ids__=[5402];export const __webpack_esm_modules__={367(e,r,t){t.d(r,{UltraDrawerModule:()=>p});var i=t(2618),o=t(7475),n=t(8414),a=t(8938),l=t(6478),d=t(1001),s=t(1091);const c=new Map,g=new Map,u=new Map;class p extends o.m{constructor(){super(...arguments),this.metadata={type:"drawer",title:"Drawer",description:"Slide-in panel (side drawer or bottom sheet) opened by a trigger button",author:"WJD Designs",version:"1.0.0",icon:"mdi:page-layout-sidebar-left",category:"layout",tags:["layout","drawer","bottom-sheet","panel","slide","overlay","container"]},this._openStates=c,this._portals=g,this._closeTimers=u}closePortalsForModule(e){(e=>{var r;if(!c.get(e))return;c.set(e,!1);const t=g.get(e);if(!t)return;const i=t._ucDrawerKeydown;i&&document.removeEventListener("keydown",i);const o=u.get(e);o&&window.clearTimeout(o),null===(r=t._ucDrawerInertObserver)||void 0===r||r.disconnect(),t.remove(),g.delete(e),u.delete(e)})(e)}createDefault(e,r){return{id:e||this.generateId("drawer"),type:"drawer",modules:[],drawer_position:"right",drawer_title:"",show_close_button:!0,close_on_overlay_click:!0,trigger_style:"button",trigger_label:"Open",trigger_icon:"mdi:menu-open",display_mode:"always",display_conditions:[]}}renderGeneralTab(e,r,t,o){var n;const a=e,d=(null===(n=null==r?void 0:r.locale)||void 0===n?void 0:n.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- Drawer Panel -->
        ${this.renderSettingsSection((0,l.kg)("editor.drawer.panel.title",d,"Drawer Panel"),(0,l.kg)("editor.drawer.panel.desc",d,"Where the drawer slides in from and how it looks. Modules added to this container appear inside the drawer."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSegmentedField((0,l.kg)("editor.drawer.panel.position",d,"Position"),"",a.drawer_position||"right",[{value:"left",label:(0,l.kg)("editor.common.left",d,"Left"),icon:"mdi:dock-left"},{value:"right",label:(0,l.kg)("editor.common.right",d,"Right"),icon:"mdi:dock-right"},{value:"top",label:(0,l.kg)("editor.common.top",d,"Top"),icon:"mdi:dock-top"},{value:"bottom",label:(0,l.kg)("editor.common.bottom",d,"Bottom"),icon:"mdi:dock-bottom"}],e=>o({drawer_position:e}))}
          ${this.renderFieldSection((0,l.kg)("editor.drawer.panel.size",d,"Panel Size"),(0,l.kg)("editor.drawer.panel.size_desc",d,"Width for left/right drawers, height for top/bottom (e.g. 340px, 50vh, 80%). Leave empty for the default."),r,{drawer_size:a.drawer_size||""},[this.textField("drawer_size")],e=>{o({drawer_size:e.detail.value.drawer_size}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection((0,l.kg)("editor.drawer.panel.title_field",d,"Drawer Title"),"",r,{drawer_title:a.drawer_title||""},[this.textField("drawer_title")],e=>{o({drawer_title:e.detail.value.drawer_title}),this.triggerPreviewUpdate()})}
          ${this.renderColorField((0,l.kg)("editor.drawer.panel.background",d,"Panel Background"),"",r,a.drawer_background||"","var(--card-background-color)",e=>o({drawer_background:e}))}
          ${this.renderFieldSection((0,l.kg)("editor.drawer.panel.close_button",d,"Show Close Button"),"",r,{show_close_button:!1!==a.show_close_button},[this.booleanField("show_close_button")],e=>{o({show_close_button:e.detail.value.show_close_button}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection((0,l.kg)("editor.drawer.panel.overlay_close",d,"Close On Overlay Click"),"",r,{close_on_overlay_click:!1!==a.close_on_overlay_click},[this.booleanField("close_on_overlay_click")],e=>{o({close_on_overlay_click:e.detail.value.close_on_overlay_click}),this.triggerPreviewUpdate()})}
        </div>

        <!-- Trigger -->
        ${this.renderSettingsSection((0,l.kg)("editor.drawer.trigger.title",d,"Trigger"),(0,l.kg)("editor.drawer.trigger.desc",d,"The button rendered in the card that opens the drawer."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSegmentedField((0,l.kg)("editor.drawer.trigger.style",d,"Trigger Style"),"",a.trigger_style||"button",[{value:"button",label:(0,l.kg)("editor.drawer.trigger.button",d,"Button"),icon:"mdi:gesture-tap-button"},{value:"icon",label:(0,l.kg)("editor.drawer.trigger.icon",d,"Icon Only"),icon:"mdi:circle-outline"}],e=>o({trigger_style:e}))}
          ${"button"===(a.trigger_style||"button")?this.renderFieldSection((0,l.kg)("editor.drawer.trigger.label",d,"Trigger Label"),"",r,{trigger_label:a.trigger_label||""},[this.textField("trigger_label")],e=>{o({trigger_label:e.detail.value.trigger_label}),this.triggerPreviewUpdate()}):""}
          ${this.renderIconField((0,l.kg)("editor.drawer.trigger.icon_field",d,"Trigger Icon"),"",r,a.trigger_icon||"mdi:menu-open",e=>o({trigger_icon:e}))}
          ${this.renderColorField((0,l.kg)("editor.drawer.trigger.bg",d,"Trigger Background"),"",r,a.trigger_background||"","var(--primary-color)",e=>o({trigger_background:e}))}
          ${this.renderColorField((0,l.kg)("editor.drawer.trigger.color",d,"Trigger Text/Icon Color"),"",r,a.trigger_color||"","var(--text-primary-color, #fff)",e=>o({trigger_color:e}))}
        </div>
      </div>
    `}renderPreview(e,r,t,o){const n=e,a=this.buildDesignStyles(e,r),l=this.getHoverEffectClass(e),d=n.trigger_style||"button",s=n.trigger_background||"var(--primary-color)",c=n.trigger_color||"var(--text-primary-color, #fff)";this._openStates.get(n.id)&&this._renderPortal(n,r,t,o);const g=()=>this._openDrawer(n,r,t,o);return this.wrapWithAnimation(i.qy`
        <div class="drawer-trigger-wrapper ${l}" style="${this.buildStyleString(a)}">
          ${"icon"===d?i.qy`
                <button
                  type="button"
                  class="drawer-trigger-icon-btn"
                  style="background: ${s}; color: ${c};"
                  aria-label="${n.drawer_title||n.trigger_label||"Open drawer"}"
                  @click=${g}
                >
                  <ha-icon
                    icon="${n.trigger_icon||"mdi:menu-open"}"
                    style="color: ${c};"
                  ></ha-icon>
                </button>
              `:i.qy`
                <button
                  type="button"
                  class="drawer-trigger-btn"
                  style="background: ${s}; color: ${c};"
                  @click=${g}
                >
                  ${n.trigger_icon?i.qy`<ha-icon
                        icon="${n.trigger_icon}"
                        style="color: ${c}; --mdc-icon-size: 18px;"
                      ></ha-icon>`:""}
                  <span>${n.trigger_label||"Open"}</span>
                </button>
              `}
        </div>
      `,e,r)}_openDrawer(e,r,t,i){this._openStates.get(e.id)||(this._openStates.set(e.id,!0),this._renderPortal(e,r,t,i),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const r=this._portals.get(e.id);null==r||r.classList.add("uc-drawer-open")})}),window.addEventListener("location-changed",()=>this._closeDrawer(e.id),{once:!0}))}_closeDrawer(e){if(!this._openStates.get(e))return;this._openStates.set(e,!1);const r=this._portals.get(e);if(!r)return;r.classList.remove("uc-drawer-open");const t=this._closeTimers.get(e);t&&window.clearTimeout(t),this._closeTimers.set(e,window.setTimeout(()=>{var t;const i=r._ucDrawerKeydown;i&&document.removeEventListener("keydown",i),null===(t=r._ucDrawerInertObserver)||void 0===t||t.disconnect(),r.remove(),this._portals.delete(e),this._closeTimers.delete(e)},280))}_collectChildStyles(e){const r=(0,n.oD)(),t=new Set,i=e=>{(e||[]).forEach(e=>{t.add(e.type);const r=e.modules;Array.isArray(r)&&i(r)})};i(e);let o="";return t.forEach(e=>{const t=r.getModule(e);(null==t?void 0:t.getStyles)&&(o+=t.getStyles())}),o}_renderPortal(e,r,t,o){var n;const a=(null===(n=null==r?void 0:r.locale)||void 0===n?void 0:n.language)||"en";let c=this._portals.get(e.id);const g=!c;if(!c){c=document.createElement("div"),c.id=`ultra-drawer-portal-${e.id}`,c.className="ultra-drawer-portal",c.style.position="fixed",c.style.inset="0",c.style.zIndex=`${d.Mu.DIALOG_OVERLAY}`,c.style.pointerEvents="auto",document.body.appendChild(c),this._portals.set(e.id,c);const r=r=>{"Escape"===r.key&&(r.stopPropagation(),this._closeDrawer(e.id))};document.addEventListener("keydown",r),c._ucDrawerKeydown=r;const t=new MutationObserver(()=>{c.hasAttribute("inert")&&c.removeAttribute("inert")});t.observe(c,{attributes:!0,attributeFilter:["inert"]}),c._ucDrawerInertObserver=t}c.removeAttribute("inert"),c.style.pointerEvents="auto";const u=e.drawer_position||"right",p="top"===u||"bottom"===u,v=e.drawer_size||(p?"45vh":"340px"),w=e.drawer_background||"var(--uc-pane-bg, var(--card-background-color))",_=e.modules||[],m={left:`top: 0; left: 0; bottom: 0; width: ${v}; max-width: 90vw; transform: translateX(-100%); border-radius: 0 var(--uc-r-16, 16px) var(--uc-r-16, 16px) 0;`,right:`top: 0; right: 0; bottom: 0; width: ${v}; max-width: 90vw; transform: translateX(100%); border-radius: var(--uc-r-16, 16px) 0 0 var(--uc-r-16, 16px);`,top:`top: 0; left: 0; right: 0; height: ${v}; max-height: 90vh; transform: translateY(-100%); border-radius: 0 0 var(--uc-r-16, 16px) var(--uc-r-16, 16px);`,bottom:`bottom: 0; left: 0; right: 0; height: ${v}; max-height: 90vh; transform: translateY(100%); border-radius: var(--uc-r-16, 16px) var(--uc-r-16, 16px) 0 0;`},h=i.qy`
      <style>
        .ultra-drawer-portal .uc-drawer-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity ${280}ms ease;
        }
        .ultra-drawer-portal.uc-drawer-open .uc-drawer-overlay {
          opacity: 1;
        }
        .ultra-drawer-portal .uc-drawer-panel {
          position: absolute;
          display: flex;
          flex-direction: column;
          background: ${w};
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
          transition: transform ${280}ms cubic-bezier(0.25, 0.8, 0.35, 1);
          overflow: hidden;
          box-sizing: border-box;
        }
        .ultra-drawer-portal.uc-drawer-open .uc-drawer-panel {
          transform: translate(0, 0) !important;
        }
        .ultra-drawer-portal .uc-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 14px 16px 8px 20px;
          flex-shrink: 0;
        }
        .ultra-drawer-portal .uc-drawer-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--primary-text-color);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .ultra-drawer-portal .uc-drawer-close {
          background: none;
          border: none;
          padding: 6px;
          border-radius: 50%;
          cursor: pointer;
          color: var(--secondary-text-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ultra-drawer-portal .uc-drawer-close:hover {
          background: var(--secondary-background-color);
          color: var(--primary-text-color);
        }
        .ultra-drawer-portal .uc-drawer-content {
          flex: 1;
          overflow-y: auto;
          padding: 8px 16px 16px 16px;
          -webkit-overflow-scrolling: touch;
        }
        .ultra-drawer-portal .uc-drawer-child {
          margin-bottom: 8px;
        }
        .ultra-drawer-portal .uc-drawer-empty {
          padding: 24px;
          text-align: center;
          color: var(--secondary-text-color);
          font-style: italic;
        }
        ${this._collectChildStyles(_)}
      </style>
      <div
        class="uc-drawer-overlay"
        @click=${()=>{!1!==e.close_on_overlay_click&&this._closeDrawer(e.id)}}
      ></div>
      <div
        class="uc-drawer-panel"
        data-uc-role="pane"
        role="dialog"
        aria-modal="true"
        aria-label="${e.drawer_title||"Drawer"}"
        style="${m[u]}"
      >
        ${e.drawer_title||!1!==e.show_close_button?i.qy`
              <div class="uc-drawer-header">
                <div class="uc-drawer-title">${e.drawer_title||""}</div>
                ${!1!==e.show_close_button?i.qy`
                      <button
                        type="button"
                        class="uc-drawer-close"
                        aria-label="Close"
                        @click=${()=>this._closeDrawer(e.id)}
                      >
                        <ha-icon icon="mdi:close"></ha-icon>
                      </button>
                    `:""}
              </div>
            `:""}
        <div class="uc-drawer-content">
          ${_.length>0?_.map(e=>i.qy`
                  <div class="uc-drawer-child">
                    ${(0,s.zU)(e,r,t,o)}
                  </div>
                `):i.qy`
                <div class="uc-drawer-empty">
                  ${(0,l.kg)("editor.drawer.preview.no_modules",a,"No modules added. Add modules to this drawer in the layout builder.")}
                </div>
              `}
        </div>
      </div>
    `;g&&(c.innerHTML=""),(0,i.XX)(h,c)}renderLogicTab(e,r,t,i){return a.X.render(e,r,e=>i(e))}getStyles(){return`\n      .drawer-trigger-wrapper {\n        display: flex;\n      }\n\n      .drawer-trigger-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        padding: 10px 18px;\n        border: none;\n        border-radius: var(--uc-r-10, 10px);\n        font-size: 14px;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n        transition: filter 0.15s ease, transform 0.1s ease;\n      }\n\n      .drawer-trigger-btn:hover {\n        filter: brightness(1.1);\n      }\n\n      .drawer-trigger-btn:active {\n        transform: scale(0.97);\n      }\n\n      .drawer-trigger-icon-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 42px;\n        height: 42px;\n        border: none;\n        border-radius: 50%;\n        cursor: pointer;\n        transition: filter 0.15s ease, transform 0.1s ease;\n      }\n\n      .drawer-trigger-icon-btn:hover {\n        filter: brightness(1.1);\n      }\n\n      .drawer-trigger-icon-btn:active {\n        transform: scale(0.94);\n      }\n\n      ${o.m.getSliderStyles()}\n    `}}},1091(e,r,t){t.d(r,{tG:()=>s,zU:()=>c});var i=t(2618),o=t(8414),n=t(230),a=t(378),l=t(2034),d=t(5064);function s(e,r){var t,i,o,a;n.S.setHass(r);const l=e,d=n.S.evaluateModuleVisibility(l),s=n.S.evaluateLogicProperties({logic_entity:null===(t=null==l?void 0:l.design)||void 0===t?void 0:t.logic_entity,logic_attribute:null===(i=null==l?void 0:l.design)||void 0===i?void 0:i.logic_attribute,logic_operator:null===(o=null==l?void 0:l.design)||void 0===o?void 0:o.logic_operator,logic_value:null===(a=null==l?void 0:l.design)||void 0===a?void 0:a.logic_value});return d&&s}function c(e,r,t,n){var c,g,u,p,v,w,_,m,h,b,y,f;if(!s(e,r))return i.qy``;const x=function(e){const r=e.design||{};return void 0!==r.margin_top||void 0!==r.margin_bottom||void 0!==r.margin_left||void 0!==r.margin_right||void 0!==e.margin_top||void 0!==e.margin_bottom||void 0!==e.margin_left||void 0!==e.margin_right?e:Object.assign(Object.assign({},e),{margin_top:"0",margin_bottom:"0",margin_left:"0",margin_right:"0"})}(e),k=(0,o.oD)().getModule(x.type);if(!k)return l.E.renderModuleLoadingState(x);const $=!(!(null===(g=null===(c=k.metadata)||void 0===c?void 0:c.tags)||void 0===g?void 0:g.includes("pro"))&&!(null===(p=null===(u=k.metadata)||void 0===u?void 0:u.tags)||void 0===p?void 0:p.includes("premium")))&&!function(e){var r,t,i,o;const n=a.xd.checkIntegrationAuth(e);if("pro"===(null===(r=null==n?void 0:n.subscription)||void 0===r?void 0:r.tier)&&"active"===(null===(t=null==n?void 0:n.subscription)||void 0===t?void 0:t.status))return!0;if(a.xd.isAuthenticated()){const e=a.xd.getCurrentUser();if("pro"===(null===(i=null==e?void 0:e.subscription)||void 0===i?void 0:i.tier)&&"active"===(null===(o=null==e?void 0:e.subscription)||void 0===o?void 0:o.status))return!0}return!1}(r),S=(0,d.l8)(x),D=k.renderPreview(S,r,t,n);if($)return i.qy`
      <div class="pro-module-locked" style="position: relative;">
        ${D}
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
    `;const F=x,T=F.animation_type||(null===(v=F.design)||void 0===v?void 0:v.animation_type);if(T&&"none"!==T){const e=F.animation_duration||(null===(w=F.design)||void 0===w?void 0:w.animation_duration)||"2s",t=F.animation_delay||(null===(_=F.design)||void 0===_?void 0:_.animation_delay)||"0s",o=F.animation_timing||(null===(m=F.design)||void 0===m?void 0:m.animation_timing)||"ease",n=F.animation_entity||(null===(h=F.design)||void 0===h?void 0:h.animation_entity),a=F.animation_trigger_type||(null===(b=F.design)||void 0===b?void 0:b.animation_trigger_type)||"state",l=F.animation_attribute||(null===(y=F.design)||void 0===y?void 0:y.animation_attribute),d=F.animation_state||(null===(f=F.design)||void 0===f?void 0:f.animation_state);let s=!1;if(n){if(d&&r&&r.states[n]){const e=r.states[n];s="attribute"===a&&l?String(e.attributes[l])===d:e.state===d}}else s=!0;if(s)return i.qy`
        <div
          class="module-animation-wrapper animation-${T}"
          style="
            --animation-duration: ${e};
            --animation-delay: ${t};
            --animation-timing: ${o};
          "
        >
          ${D}
        </div>
      `}return D}t.d(r,["fC",0,["button","input","select","textarea","a[href]","ha-switch","ha-slider","ha-control-slider","ha-control-select",'[role="button"]','[role="slider"]','[role="switch"]']])}};