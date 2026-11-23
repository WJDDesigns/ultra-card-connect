export const __webpack_esm_ids__=[3141];export const __webpack_esm_modules__={6816(e,r,o){o.d(r,{UltraScrollRowModule:()=>d});var l=o(2618),t=o(6214),n=o(3307),a=o(8938),s=o(935),i=o(1091);class d extends n.m{constructor(){super(...arguments),this.metadata={type:"scroll_row",title:"Scroll Row",description:"Horizontally scrollable row with snap points and next-item peek",author:"WJD Designs",version:"1.0.0",icon:"mdi:gesture-swipe-horizontal",category:"layout",tags:["layout","scroll","row","snap","carousel","swipe","horizontal","container"]}}createDefault(e,r){return{id:e||this.generateId("scroll_row"),type:"scroll_row",modules:[],item_width:"42%",gap:12,snap_align:"start",show_scrollbar:!1,show_arrows:!1,fade_edges:!1,display_mode:"always",display_conditions:[]}}renderGeneralTab(e,r,o,t){var n,a;const i=e,d=(null===(n=null==r?void 0:r.locale)||void 0===n?void 0:n.language)||"en";return l.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- Items -->
        ${this.renderSettingsSection((0,s.kg)("editor.scroll_row.items.title",d,"Items"),(0,s.kg)("editor.scroll_row.items.desc",d,"Sizing and spacing of the items in the row. Widths under 100% let the next item peek in from the edge."),[],l.qy`
          ${this.renderUnitAwareSliderField((0,s.kg)("editor.scroll_row.items.width",d,"Item Width"),(0,s.kg)("editor.scroll_row.items.width_desc",d,"Percentage of the row (e.g. 42%) or a fixed width (e.g. 140px)."),i.item_width||"42%","42%",10,100,1,"%","42%",e=>t({item_width:void 0===e?void 0:"number"==typeof e?`${e}%`:e}))}
          ${this.renderSliderField((0,s.kg)("editor.scroll_row.items.gap",d,"Gap Between Items"),"",null!==(a=i.gap)&&void 0!==a?a:12,12,0,48,1,e=>t({gap:e}))}
          ${this.renderSegmentedField((0,s.kg)("editor.scroll_row.items.snap",d,"Snap Alignment"),(0,s.kg)("editor.scroll_row.items.snap_desc",d,"Where items settle when scrolling stops."),i.snap_align||"start",[{value:"start",label:(0,s.kg)("editor.common.left",d,"Left"),icon:"mdi:format-horizontal-align-left"},{value:"center",label:(0,s.kg)("editor.common.center",d,"Center"),icon:"mdi:format-horizontal-align-center"},{value:"none",label:(0,s.kg)("editor.scroll_row.items.no_snap",d,"No Snap"),icon:"mdi:gesture-swipe-horizontal"}],e=>t({snap_align:e}))}
          `)}

        <!-- Appearance -->
        ${this.renderSettingsSection((0,s.kg)("editor.scroll_row.appearance.title",d,"Appearance"),"",[{title:(0,s.kg)("editor.scroll_row.appearance.scrollbar",d,"Show Scrollbar"),description:"",hass:r,data:{show_scrollbar:i.show_scrollbar||!1},schema:[this.booleanField("show_scrollbar")],onChange:e=>{t({show_scrollbar:e.detail.value.show_scrollbar}),this.triggerPreviewUpdate()}},{title:(0,s.kg)("editor.scroll_row.appearance.arrows",d,"Show Scroll Arrows"),description:(0,s.kg)("editor.scroll_row.appearance.arrows_desc",d,"Overlay arrows for scrolling with a mouse."),hass:r,data:{show_arrows:i.show_arrows||!1},schema:[this.booleanField("show_arrows")],onChange:e=>{t({show_arrows:e.detail.value.show_arrows}),this.triggerPreviewUpdate()}},{title:(0,s.kg)("editor.scroll_row.appearance.fade",d,"Fade Edges"),description:(0,s.kg)("editor.scroll_row.appearance.fade_desc",d,"Fade out content at the row edges to hint at more items."),hass:r,data:{fade_edges:i.fade_edges||!1},schema:[this.booleanField("fade_edges")],onChange:e=>{t({fade_edges:e.detail.value.fade_edges}),this.triggerPreviewUpdate()}}])}
      </div>
    `}renderPreview(e,r,o,n){var a,d;const c=e,p=(null===(a=null==r?void 0:r.locale)||void 0===a?void 0:a.language)||"en",w=c.modules&&c.modules.length>0,g="live"===n||"ha-preview"===n,h=w?c.modules.filter(e=>(0,i.tG)(e,r)):[],m=w&&0===h.length;if(m&&!g)return l.qy``;const u=null!==(d=c.gap)&&void 0!==d?d:12,_=c.item_width||"42%",b=c.snap_align||"start",y=this.buildDesignStyles(e,r),f=this.getHoverEffectClass(e),v=(e,r)=>{var o;e.stopPropagation();const l=null===(o=e.currentTarget.closest(".scroll-row-wrapper"))||void 0===o?void 0:o.querySelector(".scroll-row-scroller");l&&l.scrollBy({left:r*l.clientWidth*.8,behavior:"smooth"})};return this.wrapWithAnimation(l.qy`
        <div class="scroll-row-wrapper ${f}" style="${this.buildStyleString(y)}">
          <div
            class="scroll-row-scroller ${c.show_scrollbar?"":"hide-scrollbar"} ${c.fade_edges?"fade-edges":""}"
            style="gap: ${u}px; ${"none"!==b?"scroll-snap-type: x mandatory;":""}"
          >
            ${h.length>0?(0,t.u)(h,e=>e.id||e.type,e=>l.qy`
                    <div
                      class="scroll-row-item"
                      style="flex: 0 0 ${_}; ${"none"!==b?`scroll-snap-align: ${b};`:""}"
                    >
                      ${(0,i.zU)(e,r,o,n)}
                    </div>
                  `):l.qy`
                  <div class="empty-layout-message" style="flex: 1 0 100%;">
                    ${m?l.qy`<span
                          >${(0,s.kg)("editor.scroll_row.empty.all_hidden",p,"All modules hidden by logic")}</span
                        >`:l.qy`
                          <span
                            >${(0,s.kg)("editor.scroll_row.empty.no_modules",p,"No modules added yet")}</span
                          >
                          <small
                            >${(0,s.kg)("editor.scroll_row.empty.add_modules",p,"Add modules in the layout builder to see them in this row")}</small
                          >
                        `}
                  </div>
                `}
          </div>
          ${c.show_arrows&&h.length>0?l.qy`
                <button
                  type="button"
                  class="scroll-row-arrow scroll-row-arrow-left"
                  data-uc-role="pane"
                  aria-label="Scroll left"
                  @click=${e=>v(e,-1)}
                >
                  <ha-icon icon="mdi:chevron-left"></ha-icon>
                </button>
                <button
                  type="button"
                  class="scroll-row-arrow scroll-row-arrow-right"
                  data-uc-role="pane"
                  aria-label="Scroll right"
                  @click=${e=>v(e,1)}
                >
                  <ha-icon icon="mdi:chevron-right"></ha-icon>
                </button>
              `:""}
        </div>
      `,e,r)}renderLogicTab(e,r,o,l){return a.X.render(e,r,e=>l(e))}getStyles(){return`\n      .scroll-row-wrapper {\n        position: relative;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      .scroll-row-scroller {\n        display: flex;\n        overflow-x: auto;\n        overflow-y: hidden;\n        -webkit-overflow-scrolling: touch;\n        overscroll-behavior-x: contain;\n        scrollbar-width: thin;\n      }\n\n      .scroll-row-scroller.hide-scrollbar {\n        scrollbar-width: none;\n        -ms-overflow-style: none;\n      }\n\n      .scroll-row-scroller.hide-scrollbar::-webkit-scrollbar {\n        display: none;\n      }\n\n      .scroll-row-scroller.fade-edges {\n        mask-image: linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%);\n        -webkit-mask-image: linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%);\n        /* Room as wide as the fade at both ends, so the first and last items can\n           scroll fully clear of it instead of staying half faded (issue #286). */\n        padding-inline: 24px;\n        scroll-padding-inline: 24px;\n        box-sizing: border-box;\n      }\n\n      .scroll-row-item {\n        min-width: 0;\n        box-sizing: border-box;\n      }\n\n      .scroll-row-arrow {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        width: 32px;\n        height: 32px;\n        border: var(--uc-pane-border, none);\n        border-radius: 50%;\n        background: var(--uc-pane-bg, var(--card-background-color, #fff));\n        color: var(--primary-text-color);\n        box-shadow: var(--uc-pane-shadow, 0 2px 8px rgba(0, 0, 0, 0.25));\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        opacity: 0;\n        transition: opacity 0.15s ease;\n        z-index: 2;\n      }\n\n      .scroll-row-wrapper:hover .scroll-row-arrow {\n        opacity: 0.92;\n      }\n\n      .scroll-row-arrow-left {\n        left: 4px;\n      }\n\n      .scroll-row-arrow-right {\n        right: 4px;\n      }\n\n      .scroll-row-wrapper .empty-layout-message {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 4px;\n        color: var(--secondary-text-color);\n        font-style: italic;\n        text-align: center;\n        padding: 20px;\n      }\n\n      .scroll-row-wrapper .empty-layout-message span {\n        font-size: 14px;\n        font-weight: 500;\n      }\n\n      .scroll-row-wrapper .empty-layout-message small {\n        font-size: 12px;\n        opacity: 0.8;\n      }\n\n      ${n.m.getSliderStyles()}\n    `}}}};