export const __webpack_esm_ids__=[3141];export const __webpack_esm_modules__={1091(e,o,t){t.d(o,{tG:()=>d,zU:()=>c});var i=t(2618),r=t(8414),n=t(230),l=t(378),a=t(2034),s=t(5064);function d(e,o){var t,i,r,l;n.S.setHass(o);const a=e,s=n.S.evaluateModuleVisibility(a),d=n.S.evaluateLogicProperties({logic_entity:null===(t=null==a?void 0:a.design)||void 0===t?void 0:t.logic_entity,logic_attribute:null===(i=null==a?void 0:a.design)||void 0===i?void 0:i.logic_attribute,logic_operator:null===(r=null==a?void 0:a.design)||void 0===r?void 0:r.logic_operator,logic_value:null===(l=null==a?void 0:a.design)||void 0===l?void 0:l.logic_value});return s&&d}function c(e,o,t,n){var c,g,p,u,m,w,v,h,_,y,b,f;if(!d(e,o))return i.qy``;const x=function(e){const o=e.design||{};return void 0!==o.margin_top||void 0!==o.margin_bottom||void 0!==o.margin_left||void 0!==o.margin_right||void 0!==e.margin_top||void 0!==e.margin_bottom||void 0!==e.margin_left||void 0!==e.margin_right?e:Object.assign(Object.assign({},e),{margin_top:"0",margin_bottom:"0",margin_left:"0",margin_right:"0"})}(e),k=(0,r.oD)().getModule(x.type);if(!k)return a.E.renderModuleLoadingState(x);const $=!(!(null===(g=null===(c=k.metadata)||void 0===c?void 0:c.tags)||void 0===g?void 0:g.includes("pro"))&&!(null===(u=null===(p=k.metadata)||void 0===p?void 0:p.tags)||void 0===u?void 0:u.includes("premium")))&&!function(e){var o,t,i,r;const n=l.xd.checkIntegrationAuth(e);if("pro"===(null===(o=null==n?void 0:n.subscription)||void 0===o?void 0:o.tier)&&"active"===(null===(t=null==n?void 0:n.subscription)||void 0===t?void 0:t.status))return!0;if(l.xd.isAuthenticated()){const e=l.xd.getCurrentUser();if("pro"===(null===(i=null==e?void 0:e.subscription)||void 0===i?void 0:i.tier)&&"active"===(null===(r=null==e?void 0:e.subscription)||void 0===r?void 0:r.status))return!0}return!1}(o),S=(0,s.l8)(x),z=k.renderPreview(S,o,t,n);if($)return i.qy`
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
    `;const q=x,A=q.animation_type||(null===(m=q.design)||void 0===m?void 0:m.animation_type);if(A&&"none"!==A){const e=q.animation_duration||(null===(w=q.design)||void 0===w?void 0:w.animation_duration)||"2s",t=q.animation_delay||(null===(v=q.design)||void 0===v?void 0:v.animation_delay)||"0s",r=q.animation_timing||(null===(h=q.design)||void 0===h?void 0:h.animation_timing)||"ease",n=q.animation_entity||(null===(_=q.design)||void 0===_?void 0:_.animation_entity),l=q.animation_trigger_type||(null===(y=q.design)||void 0===y?void 0:y.animation_trigger_type)||"state",a=q.animation_attribute||(null===(b=q.design)||void 0===b?void 0:b.animation_attribute),s=q.animation_state||(null===(f=q.design)||void 0===f?void 0:f.animation_state);let d=!1;if(n){if(s&&o&&o.states[n]){const e=o.states[n];d="attribute"===l&&a?String(e.attributes[a])===s:e.state===s}}else d=!0;if(d)return i.qy`
        <div
          class="module-animation-wrapper animation-${A}"
          style="
            --animation-duration: ${e};
            --animation-delay: ${t};
            --animation-timing: ${r};
          "
        >
          ${z}
        </div>
      `}return z}t.d(o,["fC",0,["button","input","select","textarea","a[href]","ha-switch","ha-slider","ha-control-slider","ha-control-select",'[role="button"]','[role="slider"]','[role="switch"]']])},6816(e,o,t){t.d(o,{UltraScrollRowModule:()=>d});var i=t(2618),r=t(6214),n=t(7475),l=t(8938),a=t(6478),s=t(1091);class d extends n.m{constructor(){super(...arguments),this.metadata={type:"scroll_row",title:"Scroll Row",description:"Horizontally scrollable row with snap points and next-item peek",author:"WJD Designs",version:"1.0.0",icon:"mdi:gesture-swipe-horizontal",category:"layout",tags:["layout","scroll","row","snap","carousel","swipe","horizontal","container"]}}createDefault(e,o){return{id:e||this.generateId("scroll_row"),type:"scroll_row",modules:[],item_width:"42%",gap:12,snap_align:"start",show_scrollbar:!1,show_arrows:!1,fade_edges:!1,display_mode:"always",display_conditions:[]}}renderGeneralTab(e,o,t,r){var n,l;const s=e,d=(null===(n=null==o?void 0:o.locale)||void 0===n?void 0:n.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- Items -->
        ${this.renderSettingsSection((0,a.kg)("editor.scroll_row.items.title",d,"Items"),(0,a.kg)("editor.scroll_row.items.desc",d,"Sizing and spacing of the items in the row. Widths under 100% let the next item peek in from the edge."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderUnitAwareSliderField((0,a.kg)("editor.scroll_row.items.width",d,"Item Width"),(0,a.kg)("editor.scroll_row.items.width_desc",d,"Percentage of the row (e.g. 42%) or a fixed width (e.g. 140px)."),s.item_width||"42%","42%",10,100,1,"%","42%",e=>r({item_width:void 0===e?void 0:"number"==typeof e?`${e}%`:e}))}
          ${this.renderSliderField((0,a.kg)("editor.scroll_row.items.gap",d,"Gap Between Items"),"",null!==(l=s.gap)&&void 0!==l?l:12,12,0,48,1,e=>r({gap:e}))}
          ${this.renderSegmentedField((0,a.kg)("editor.scroll_row.items.snap",d,"Snap Alignment"),(0,a.kg)("editor.scroll_row.items.snap_desc",d,"Where items settle when scrolling stops."),s.snap_align||"start",[{value:"start",label:(0,a.kg)("editor.common.left",d,"Left"),icon:"mdi:format-horizontal-align-left"},{value:"center",label:(0,a.kg)("editor.common.center",d,"Center"),icon:"mdi:format-horizontal-align-center"},{value:"none",label:(0,a.kg)("editor.scroll_row.items.no_snap",d,"No Snap"),icon:"mdi:gesture-swipe-horizontal"}],e=>r({snap_align:e}))}
        </div>

        <!-- Appearance -->
        ${this.renderSettingsSection((0,a.kg)("editor.scroll_row.appearance.title",d,"Appearance"),"",[{title:(0,a.kg)("editor.scroll_row.appearance.scrollbar",d,"Show Scrollbar"),description:"",hass:o,data:{show_scrollbar:s.show_scrollbar||!1},schema:[this.booleanField("show_scrollbar")],onChange:e=>{r({show_scrollbar:e.detail.value.show_scrollbar}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.scroll_row.appearance.arrows",d,"Show Scroll Arrows"),description:(0,a.kg)("editor.scroll_row.appearance.arrows_desc",d,"Overlay arrows for scrolling with a mouse."),hass:o,data:{show_arrows:s.show_arrows||!1},schema:[this.booleanField("show_arrows")],onChange:e=>{r({show_arrows:e.detail.value.show_arrows}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.scroll_row.appearance.fade",d,"Fade Edges"),description:(0,a.kg)("editor.scroll_row.appearance.fade_desc",d,"Fade out content at the row edges to hint at more items."),hass:o,data:{fade_edges:s.fade_edges||!1},schema:[this.booleanField("fade_edges")],onChange:e=>{r({fade_edges:e.detail.value.fade_edges}),this.triggerPreviewUpdate()}}])}
      </div>
    `}renderPreview(e,o,t,n){var l,d;const c=e,g=(null===(l=null==o?void 0:o.locale)||void 0===l?void 0:l.language)||"en",p=c.modules&&c.modules.length>0,u="live"===n||"ha-preview"===n,m=p?c.modules.filter(e=>(0,s.tG)(e,o)):[],w=p&&0===m.length;if(w&&!u)return i.qy``;const v=null!==(d=c.gap)&&void 0!==d?d:12,h=c.item_width||"42%",_=c.snap_align||"start",y=this.buildDesignStyles(e,o),b=this.getHoverEffectClass(e),f=(e,o)=>{var t;e.stopPropagation();const i=null===(t=e.currentTarget.closest(".scroll-row-wrapper"))||void 0===t?void 0:t.querySelector(".scroll-row-scroller");i&&i.scrollBy({left:o*i.clientWidth*.8,behavior:"smooth"})};return this.wrapWithAnimation(i.qy`
        <div class="scroll-row-wrapper ${b}" style="${this.buildStyleString(y)}">
          <div
            class="scroll-row-scroller ${c.show_scrollbar?"":"hide-scrollbar"} ${c.fade_edges?"fade-edges":""}"
            style="gap: ${v}px; ${"none"!==_?"scroll-snap-type: x mandatory;":""}"
          >
            ${m.length>0?(0,r.u)(m,e=>e.id||e.type,e=>i.qy`
                    <div
                      class="scroll-row-item"
                      style="flex: 0 0 ${h}; ${"none"!==_?`scroll-snap-align: ${_};`:""}"
                    >
                      ${(0,s.zU)(e,o,t,n)}
                    </div>
                  `):i.qy`
                  <div class="empty-layout-message" style="flex: 1 0 100%;">
                    ${w?i.qy`<span
                          >${(0,a.kg)("editor.scroll_row.empty.all_hidden",g,"All modules hidden by logic")}</span
                        >`:i.qy`
                          <span
                            >${(0,a.kg)("editor.scroll_row.empty.no_modules",g,"No modules added yet")}</span
                          >
                          <small
                            >${(0,a.kg)("editor.scroll_row.empty.add_modules",g,"Add modules in the layout builder to see them in this row")}</small
                          >
                        `}
                  </div>
                `}
          </div>
          ${c.show_arrows&&m.length>0?i.qy`
                <button
                  type="button"
                  class="scroll-row-arrow scroll-row-arrow-left"
                  data-uc-role="pane"
                  aria-label="Scroll left"
                  @click=${e=>f(e,-1)}
                >
                  <ha-icon icon="mdi:chevron-left"></ha-icon>
                </button>
                <button
                  type="button"
                  class="scroll-row-arrow scroll-row-arrow-right"
                  data-uc-role="pane"
                  aria-label="Scroll right"
                  @click=${e=>f(e,1)}
                >
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </button>
              `:""}
        </div>
      `,e,o)}renderLogicTab(e,o,t,i){return l.X.render(e,o,e=>i(e))}getStyles(){return`\n      .scroll-row-wrapper {\n        position: relative;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      .scroll-row-scroller {\n        display: flex;\n        overflow-x: auto;\n        overflow-y: hidden;\n        -webkit-overflow-scrolling: touch;\n        overscroll-behavior-x: contain;\n        scrollbar-width: thin;\n      }\n\n      .scroll-row-scroller.hide-scrollbar {\n        scrollbar-width: none;\n        -ms-overflow-style: none;\n      }\n\n      .scroll-row-scroller.hide-scrollbar::-webkit-scrollbar {\n        display: none;\n      }\n\n      .scroll-row-scroller.fade-edges {\n        mask-image: linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%);\n        -webkit-mask-image: linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%);\n      }\n\n      .scroll-row-item {\n        min-width: 0;\n        box-sizing: border-box;\n      }\n\n      .scroll-row-arrow {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        width: 32px;\n        height: 32px;\n        border: var(--uc-pane-border, none);\n        border-radius: 50%;\n        background: var(--uc-pane-bg, var(--card-background-color, #fff));\n        color: var(--primary-text-color);\n        box-shadow: var(--uc-pane-shadow, 0 2px 8px rgba(0, 0, 0, 0.25));\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        opacity: 0;\n        transition: opacity 0.15s ease;\n        z-index: 2;\n      }\n\n      .scroll-row-wrapper:hover .scroll-row-arrow {\n        opacity: 0.92;\n      }\n\n      .scroll-row-arrow-left {\n        left: 4px;\n      }\n\n      .scroll-row-arrow-right {\n        right: 4px;\n      }\n\n      .scroll-row-wrapper .empty-layout-message {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 4px;\n        color: var(--secondary-text-color);\n        font-style: italic;\n        text-align: center;\n        padding: 20px;\n      }\n\n      .scroll-row-wrapper .empty-layout-message span {\n        font-size: 14px;\n        font-weight: 500;\n      }\n\n      .scroll-row-wrapper .empty-layout-message small {\n        font-size: 12px;\n        opacity: 0.8;\n      }\n\n      ${n.m.getSliderStyles()}\n    `}}}};