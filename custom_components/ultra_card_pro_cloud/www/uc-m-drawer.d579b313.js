export const __webpack_esm_ids__=[5402];export const __webpack_esm_modules__={367(e,r,t){t.d(r,{UltraDrawerModule:()=>h});var i=t(2618),o=t(3307),n=t(8938),a=t(6478),d=t(1001),l=t(9308),c=t(5148),s=t(4290),g=t(1091),u=t(6477),p=t(3295);const b=new Map,w=new Map,_=new Map;class h extends o.m{constructor(){super(...arguments),this.metadata={type:"drawer",title:"Drawer",description:"Slide-in panel (side drawer or bottom sheet) opened by a trigger button",author:"WJD Designs",version:"1.0.0",icon:"mdi:page-layout-sidebar-left",category:"layout",tags:["layout","drawer","bottom-sheet","panel","slide","overlay","container"]},this._openStates=b,this._portals=w,this._closeTimers=_}closePortalsForModule(e){(e=>{var r;if(!b.get(e))return;b.set(e,!1);const t=w.get(e);if(!t)return;const i=t._ucDrawerKeydown;i&&document.removeEventListener("keydown",i);const o=_.get(e);o&&window.clearTimeout(o),null===(r=t._ucDrawerInertObserver)||void 0===r||r.disconnect(),t.remove(),w.delete(e),_.delete(e)})(e)}createDefault(e,r){return{id:e||this.generateId("drawer"),type:"drawer",modules:[],drawer_position:"right",drawer_title:"",show_close_button:!0,close_on_overlay_click:!0,trigger_style:"button",trigger_label:"Open",trigger_icon:"mdi:menu-open",trigger_alignment:"left",display_mode:"always",display_conditions:[]}}renderGeneralTab(e,r,t,o){var n,d,l,c,s;const g=e,u=(null===(n=null==r?void 0:r.locale)||void 0===n?void 0:n.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- Drawer Panel -->
        ${this.renderSettingsSection((0,a.kg)("editor.drawer.panel.title",u,"Drawer Panel"),(0,a.kg)("editor.drawer.panel.desc",u,"Where the drawer slides in from and how it looks. Modules added to this container appear inside the drawer."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSegmentedField((0,a.kg)("editor.drawer.panel.position",u,"Position"),"",g.drawer_position||"right",[{value:"left",label:(0,a.kg)("editor.common.left",u,"Left"),icon:"mdi:dock-left"},{value:"right",label:(0,a.kg)("editor.common.right",u,"Right"),icon:"mdi:dock-right"},{value:"top",label:(0,a.kg)("editor.common.top",u,"Top"),icon:"mdi:dock-top"},{value:"bottom",label:(0,a.kg)("editor.common.bottom",u,"Bottom"),icon:"mdi:dock-bottom"}],e=>o({drawer_position:e}))}
          ${this.renderFieldSection((0,a.kg)("editor.drawer.panel.size",u,"Panel Size"),(0,a.kg)("editor.drawer.panel.size_desc",u,"Width for left/right drawers, height for top/bottom (e.g. 340px, 50vh, 80%). Leave empty for the default."),r,{drawer_size:g.drawer_size||""},[this.textField("drawer_size")],e=>{o({drawer_size:e.detail.value.drawer_size}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection((0,a.kg)("editor.drawer.panel.title_field",u,"Drawer Title"),"",r,{drawer_title:g.drawer_title||""},[this.textField("drawer_title")],e=>{o({drawer_title:e.detail.value.drawer_title}),this.triggerPreviewUpdate()})}
          ${this.renderColorField((0,a.kg)("editor.drawer.panel.background",u,"Panel Background"),"",r,g.drawer_background||"","var(--card-background-color)",e=>o({drawer_background:e}))}
          ${this.renderFieldSection((0,a.kg)("editor.drawer.panel.close_button",u,"Show Close Button"),"",r,{show_close_button:!1!==g.show_close_button},[this.booleanField("show_close_button")],e=>{o({show_close_button:e.detail.value.show_close_button}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection((0,a.kg)("editor.drawer.panel.overlay_close",u,"Close On Overlay Click"),"",r,{close_on_overlay_click:!1!==g.close_on_overlay_click},[this.booleanField("close_on_overlay_click")],e=>{o({close_on_overlay_click:e.detail.value.close_on_overlay_click}),this.triggerPreviewUpdate()})}
        </div>

        <!-- Trigger -->
        ${this.renderSettingsSection((0,a.kg)("editor.drawer.trigger.title",u,"Trigger"),(0,a.kg)("editor.drawer.trigger.desc",u,"The button rendered in the card that opens the drawer."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSegmentedField((0,a.kg)("editor.drawer.trigger.style",u,"Trigger Style"),"",g.trigger_style||"button",[{value:"button",label:(0,a.kg)("editor.drawer.trigger.button",u,"Button"),icon:"mdi:gesture-tap-button"},{value:"icon",label:(0,a.kg)("editor.drawer.trigger.icon",u,"Icon Only"),icon:"mdi:circle-outline"}],e=>o({trigger_style:e}))}
          ${this.renderSegmentedField((0,a.kg)("editor.popup.trigger.alignment",u,"Alignment"),(0,a.kg)("editor.popup.trigger.alignment_help",u,"Align the trigger element to the left, center, or right."),g.trigger_alignment||"left",[{value:"left",label:(0,a.kg)("editor.common.left",u,"Left"),icon:"mdi:align-horizontal-left"},{value:"center",label:(0,a.kg)("editor.common.center",u,"Center"),icon:"mdi:align-horizontal-center"},{value:"right",label:(0,a.kg)("editor.common.right",u,"Right"),icon:"mdi:align-horizontal-right"}],e=>o({trigger_alignment:e}))}
          ${"button"===(g.trigger_style||"button")?this.renderFieldSection((0,a.kg)("editor.drawer.trigger.label",u,"Trigger Label"),"",r,{trigger_label:g.trigger_label||""},[this.textField("trigger_label")],e=>{o({trigger_label:e.detail.value.trigger_label}),this.triggerPreviewUpdate()}):""}
          ${this.renderIconField((0,a.kg)("editor.drawer.trigger.icon_field",u,"Trigger Icon"),"",r,g.trigger_icon||"mdi:menu-open",e=>o({trigger_icon:e}))}
          ${"icon"===(g.trigger_style||"button")?i.qy`
                ${this.renderSliderField((0,a.kg)("editor.drawer.trigger.icon_size",u,"Icon Size"),(0,a.kg)("editor.drawer.trigger.icon_size_desc",u,"Size of the trigger icon."),null!==(d=g.trigger_icon_size)&&void 0!==d?d:24,24,10,100,1,e=>o({trigger_icon_size:e}))}
                ${this.renderSegmentedField((0,a.kg)("editor.drawer.trigger.icon_background",u,"Icon Background"),(0,a.kg)("editor.drawer.trigger.icon_background_desc",u,"Shape drawn behind the icon, like the Icon module."),null!==(l=g.trigger_icon_background)&&void 0!==l?l:"circle",[{value:"none",label:(0,a.kg)("editor.drawer.trigger.icon_background_none",u,"None"),icon:"mdi:close"},{value:"circle",label:(0,a.kg)("editor.drawer.trigger.icon_background_circle",u,"Circle"),icon:"mdi:circle-outline"},{value:"rounded-square",label:(0,a.kg)("editor.drawer.trigger.icon_background_rounded",u,"Rounded"),icon:"mdi:square-rounded-outline"}],e=>o({trigger_icon_background:e}))}
                ${"none"!==(null!==(c=g.trigger_icon_background)&&void 0!==c?c:"circle")?this.renderSliderField((0,a.kg)("editor.drawer.trigger.icon_background_padding",u,"Icon Background Padding (1px)"),(0,a.kg)("editor.drawer.trigger.icon_background_padding_desc",u,"Space between the icon and the edge of its background."),null!==(s=g.trigger_icon_background_padding)&&void 0!==s?s:8,8,0,40,1,e=>o({trigger_icon_background_padding:e})):""}
              `:""}
          ${this.renderColorField((0,a.kg)("editor.drawer.trigger.bg",u,"Trigger Background"),"",r,g.trigger_background||g.trigger_icon_background_color||"","var(--primary-color)",e=>o({trigger_background:e,trigger_icon_background_color:e}))}
          ${this.renderColorField((0,a.kg)("editor.drawer.trigger.color",u,"Trigger Text/Icon Color"),"",r,g.trigger_color||"","var(--text-primary-color, #fff)",e=>o({trigger_color:e}))}
        </div>
      </div>
    `}renderPreview(e,r,t,o){var n,a,d;const l=e,c=l.trigger_style||"button",g={iconSize:l.trigger_icon_size,background:"icon"===c?null!==(n=l.trigger_icon_background)&&void 0!==n?n:"circle":void 0,backgroundColor:l.trigger_icon_background_color||l.trigger_background,backgroundPadding:l.trigger_icon_background_padding},b=function(e,r,t){if("icon"===e){const e=`${(0,s.VS)(t,42)}px`;r.width||(r.width=e),r.height||(r.height=e)}return r}(c,this.buildDesignStyles(e,r),g),w=l.trigger_alignment||"left",_="button"===c&&!b.width&&"left"!==w;"button"!==c||b.width||"left"!==w||(b.width="100%");const h=this.getHoverEffectClass(e),v=l.trigger_background||l.trigger_icon_background_color||"var(--primary-color)",m=l.trigger_color||"var(--text-primary-color, #fff)",y=l.trigger_icon_size||24,k="icon"===c?null!==(a=l.trigger_icon_background)&&void 0!==a?a:"circle":"none",{styles:f}=(0,u.U9)({color:v,fallback:"var(--primary-color)"}),x=this.buildStyleString(Object.assign(Object.assign(Object.assign({},"none"!==k?f:{background:"transparent"}),"none"!==k?{padding:`${null!==(d=l.trigger_icon_background_padding)&&void 0!==d?d:8}px`}:{padding:"0"}),{borderRadius:"circle"===k?"50%":"rounded-square"===k?"var(--uc-r-8, 8px)":"0"}));this._openStates.get(l.id)&&this._renderPortal(l,r,t,o);const $=()=>this._openDrawer(l,r,t,o);return this.wrapWithAnimation(i.qy`
        <div class="drawer-trigger-align" style="${(0,s.D1)(w,"left")}">
          <div
            class="drawer-trigger-wrapper ${h}${_?" drawer-trigger-hug":""}"
            style="${this.buildStyleString(b)}"
          >
            ${"icon"===c?i.qy`
                  <button
                    type="button"
                    class="drawer-trigger-icon-btn"
                    style="${x}"
                    aria-label="${l.drawer_title||l.trigger_label||"Open drawer"}"
                    @click=${$}
                  >
                    ${(0,p.ey)(l.trigger_icon||"mdi:menu-open",m,y)}
                  </button>
                `:i.qy`
                  <button
                    type="button"
                    class="drawer-trigger-btn"
                    style="${this.buildStyleString(f)}"
                    @click=${$}
                  >
                    ${l.trigger_icon?(0,p.ey)(l.trigger_icon,m,18):""}
                    <span style="${this.buildStyleString((0,u.TX)(m).styles)}"
                      >${l.trigger_label||"Open"}</span
                    >
                  </button>
                `}
          </div>
        </div>
      `,e,r)}_openDrawer(e,r,t,i){this._openStates.get(e.id)||(this._openStates.set(e.id,!0),this._renderPortal(e,r,t,i),requestAnimationFrame(()=>{requestAnimationFrame(()=>{const r=this._portals.get(e.id);null==r||r.classList.add("uc-drawer-open")})}),window.addEventListener("location-changed",()=>this._closeDrawer(e.id),{once:!0}))}_closeDrawer(e){if(!this._openStates.get(e))return;this._openStates.set(e,!1);const r=this._portals.get(e);if(!r)return;r.classList.remove("uc-drawer-open");const t=this._closeTimers.get(e);t&&window.clearTimeout(t),this._closeTimers.set(e,window.setTimeout(()=>{var t;const i=r._ucDrawerKeydown;i&&document.removeEventListener("keydown",i),null===(t=r._ucDrawerInertObserver)||void 0===t||t.disconnect(),r.remove(),this._portals.delete(e),this._closeTimers.delete(e)},280))}_renderPortal(e,r,t,o){var n;const s=(null===(n=null==r?void 0:r.locale)||void 0===n?void 0:n.language)||"en";let u=this._portals.get(e.id);const p=!u;if(!u){u=document.createElement("div"),u.id=`ultra-drawer-portal-${e.id}`,u.className="ultra-drawer-portal",u.style.position="fixed",u.style.inset="0",u.style.zIndex=`${d.Mu.DIALOG_OVERLAY}`,u.style.pointerEvents="auto",document.body.appendChild(u),this._portals.set(e.id,u),(0,l.e)(u);const r=r=>{"Escape"===r.key&&(r.stopPropagation(),this._closeDrawer(e.id))};document.addEventListener("keydown",r),u._ucDrawerKeydown=r;const t=new MutationObserver(()=>{u.hasAttribute("inert")&&u.removeAttribute("inert")});t.observe(u,{attributes:!0,attributeFilter:["inert"]}),u._ucDrawerInertObserver=t}u.removeAttribute("inert"),u.style.pointerEvents="auto";const b=e.drawer_position||"right",w="top"===b||"bottom"===b,_=e.drawer_size||(w?"45vh":"340px"),h=e.drawer_background||"var(--uc-pane-bg, var(--card-background-color))",v=e.modules||[],m={left:`top: 0; left: 0; bottom: 0; width: ${_}; max-width: 90vw; transform: translateX(-100%); border-radius: 0 var(--uc-r-16, 16px) var(--uc-r-16, 16px) 0;`,right:`top: 0; right: 0; bottom: 0; width: ${_}; max-width: 90vw; transform: translateX(100%); border-radius: var(--uc-r-16, 16px) 0 0 var(--uc-r-16, 16px);`,top:`top: 0; left: 0; right: 0; height: ${_}; max-height: 90vh; transform: translateY(-100%); border-radius: 0 0 var(--uc-r-16, 16px) var(--uc-r-16, 16px);`,bottom:`bottom: 0; left: 0; right: 0; height: ${_}; max-height: 90vh; transform: translateY(100%); border-radius: var(--uc-r-16, 16px) var(--uc-r-16, 16px) 0 0;`},y=i.qy`
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
          background: ${h};
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
        ${(0,c.J)(v)}
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
        style="${m[b]}"
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
          ${v.length>0?v.map(e=>i.qy`
                  <div class="uc-drawer-child">
                    ${(0,g.zU)(e,r,t,o)}
                  </div>
                `):i.qy`
                <div class="uc-drawer-empty">
                  ${(0,a.kg)("editor.drawer.preview.no_modules",s,"No modules added. Add modules to this drawer in the layout builder.")}
                </div>
              `}
        </div>
      </div>
    `;p&&(u.innerHTML=""),(0,i.XX)(y,u)}renderLogicTab(e,r,t,i){return n.X.render(e,r,e=>i(e))}getStyles(){return`\n      .drawer-trigger-align {\n        display: flex;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      .drawer-trigger-wrapper {\n        display: flex;\n        align-items: stretch;\n        box-sizing: border-box;\n      }\n\n      .drawer-trigger-wrapper.drawer-trigger-hug .drawer-trigger-btn {\n        width: auto;\n      }\n\n      .drawer-trigger-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        padding: 10px 18px;\n        border: none;\n        border-radius: var(--uc-r-10, 10px);\n        font-size: 14px;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n        transition: filter 0.15s ease, transform 0.1s ease;\n      }\n\n      .drawer-trigger-btn:hover {\n        filter: brightness(1.1);\n      }\n\n      .drawer-trigger-btn:active {\n        transform: scale(0.97);\n      }\n\n      .drawer-trigger-icon-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: none;\n        cursor: pointer;\n        background: transparent;\n        padding: 0;\n        line-height: 0;\n        transition: filter 0.15s ease, transform 0.1s ease;\n      }\n\n\n      .drawer-trigger-icon-btn:hover {\n        filter: brightness(1.1);\n      }\n\n      .drawer-trigger-icon-btn:active {\n        transform: scale(0.94);\n      }\n\n      ${o.m.getSliderStyles()}\n    `}}},5148(e,r,t){t.d(r,{J:()=>o});var i=t(8414);function o(e){const r=(0,i.oD)(),t=new Set,o=e=>{(e||[]).forEach(e=>{t.add(e.type);const r=e.modules;Array.isArray(r)&&o(r)})};o(e);let n="";return t.forEach(e=>{const t=r.getModule(e);(null==t?void 0:t.getStyles)&&(n+=t.getStyles())}),n}},9308(e,r,t){t.d(r,{e:()=>n});const i=["hass-more-info","hass-action","show-dialog","hass-notification"],o="_ucHaEventForwarder";function n(e){if(e[o])return;const r=r=>{const t=document.querySelector("home-assistant");t&&!t.contains(e)&&(r.stopPropagation(),t.dispatchEvent(new CustomEvent(r.type,{detail:r.detail,bubbles:!0,composed:!0})))};for(const t of i)e.addEventListener(t,r);e.addEventListener("context-request",a),e[o]=r}function a(e){var r;const t=e.currentTarget,i=document.querySelector("home-assistant");if(!i||i.contains(t))return;const o=e;e.stopPropagation();const n=new Event("context-request",{bubbles:!0,composed:!0});Object.assign(n,{context:o.context,callback:o.callback,subscribe:o.subscribe,contextTarget:null!==(r=o.contextTarget)&&void 0!==r?r:e.composedPath()[0]}),i.dispatchEvent(n)}},4290(e,r,t){function i(e,r="center"){return`display: flex; justify-content: ${(e=>{switch(e){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}})(null!=e?e:r)}; width: 100%; pointer-events: auto; box-sizing: border-box;`}function o(e={}){var r;const t=e.background||"none",i=["display: inline-flex","align-items: center","justify-content: center"];return"none"!==t&&i.push(`background: ${e.backgroundColor||"var(--secondary-background-color)"}`,`padding: ${null!==(r=e.backgroundPadding)&&void 0!==r?r:8}px`,"circle"===t?"border-radius: 50%":"border-radius: var(--uc-r-8, 8px)"),i.join("; ")}function n(e={},r){var t,i;return`--mdc-icon-size: ${null!==(i=null!==(t=e.iconSize)&&void 0!==t?t:null==r?void 0:r.size)&&void 0!==i?i:24}px; color: ${e.iconColor||(null==r?void 0:r.color)||"var(--primary-color)"}; display: flex;`}function a(e={},r=24){var t;if("number"==typeof e.iconSize&&e.iconSize>0){const r=e.background&&"none"!==e.background?2*(null!==(t=e.backgroundPadding)&&void 0!==t?t:8):0;return e.iconSize+r}return r}t.d(r,{D1:()=>i,JW:()=>o,rt:()=>n,VS:()=>a})}};