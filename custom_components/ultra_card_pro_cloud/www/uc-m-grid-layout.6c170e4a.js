export const __webpack_esm_ids__=[4476];export const __webpack_esm_modules__={5283(e,i,t){t.d(i,{UltraGridLayoutModule:()=>u});var n=t(2618),o=t(6214),l=t(3307),a=t(8414),d=t(8938),r=t(6478),s=t(1091);class u extends l.m{constructor(){super(...arguments),this.metadata={type:"grid_layout",title:"Grid Layout",description:"True CSS-grid container with per-child column and row spans",author:"WJD Designs",version:"1.0.0",icon:"mdi:view-grid-plus",category:"layout",tags:["layout","grid","container","span","columns","responsive","masonry"]}}createDefault(e,i){return{id:e||this.generateId("grid_layout"),type:"grid_layout",modules:[],column_mode:"fixed",columns:2,min_column_width:"140px",gap:12,dense_packing:!1,item_alignment:"stretch",mobile_breakpoint:600,mobile_columns:1,item_spans:{},tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderGeneralTab(e,i,t,o){var l,d,s,u,g,m,c,p;const _=e,h=(null===(l=null==i?void 0:i.locale)||void 0===l?void 0:l.language)||"en",v=_.column_mode||"fixed",y=null!==(d=_.columns)&&void 0!==d?d:2;return n.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- Grid Configuration -->
        ${this.renderSettingsSection((0,r.kg)("editor.grid_layout.config.title",h,"Grid Configuration"),(0,r.kg)("editor.grid_layout.config.desc",h,"Configure the grid tracks. Children placed in this container flow into the grid cells."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSegmentedField((0,r.kg)("editor.grid_layout.config.column_mode",h,"Column Mode"),(0,r.kg)("editor.grid_layout.config.column_mode_desc",h,"Fixed uses an exact column count. Auto Fit fills the width with as many columns as fit."),v,[{value:"fixed",label:(0,r.kg)("editor.grid_layout.config.fixed",h,"Fixed Columns"),icon:"mdi:view-column"},{value:"auto-fit",label:(0,r.kg)("editor.grid_layout.config.auto_fit",h,"Auto Fit"),icon:"mdi:arrow-expand-horizontal"}],e=>o({column_mode:e}))}
          ${"fixed"===v?this.renderSliderField((0,r.kg)("editor.grid_layout.config.columns",h,"Columns"),(0,r.kg)("editor.grid_layout.config.columns_desc",h,"Number of equal-width columns in the grid."),y,2,1,6,1,e=>o({columns:e}),""):this.renderFieldSection((0,r.kg)("editor.grid_layout.config.min_width",h,"Minimum Column Width"),(0,r.kg)("editor.grid_layout.config.min_width_desc",h,"Smallest allowed column width (e.g. 140px). Columns are added or removed to fit."),i,{min_column_width:_.min_column_width||"140px"},[this.textField("min_column_width")],e=>{o({min_column_width:e.detail.value.min_column_width}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection((0,r.kg)("editor.grid_layout.config.item_alignment",h,"Item Alignment"),(0,r.kg)("editor.grid_layout.config.item_alignment_desc",h,"Vertical alignment of items within their grid cell."),i,{item_alignment:_.item_alignment||"stretch"},[this.selectField("item_alignment",[{value:"stretch",label:(0,r.kg)("editor.common.stretch",h,"Stretch")},{value:"start",label:(0,r.kg)("editor.common.top",h,"Top")},{value:"center",label:(0,r.kg)("editor.common.center",h,"Center")},{value:"end",label:(0,r.kg)("editor.common.bottom",h,"Bottom")}])],e=>{o({item_alignment:e.detail.value.item_alignment}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection((0,r.kg)("editor.grid_layout.config.dense",h,"Dense Packing"),(0,r.kg)("editor.grid_layout.config.dense_desc",h,"Backfill gaps left by spanning items (masonry-like packing)."),i,{dense_packing:_.dense_packing||!1},[this.booleanField("dense_packing")],e=>{o({dense_packing:e.detail.value.dense_packing}),this.triggerPreviewUpdate()})}
        </div>

        <!-- Spacing -->
        ${this.renderSettingsSection((0,r.kg)("editor.grid_layout.spacing.title",h,"Spacing"),(0,r.kg)("editor.grid_layout.spacing.desc",h,"Gaps between grid cells."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSliderField((0,r.kg)("editor.grid_layout.spacing.gap",h,"Column Gap"),"",null!==(s=_.gap)&&void 0!==s?s:12,12,0,48,1,e=>o({gap:e}))}
          ${this.renderSliderField((0,r.kg)("editor.grid_layout.spacing.row_gap",h,"Row Gap"),(0,r.kg)("editor.grid_layout.spacing.row_gap_desc",h,"Follows the column gap until changed."),null!==(g=null!==(u=_.row_gap)&&void 0!==u?u:_.gap)&&void 0!==g?g:12,null!==(m=_.gap)&&void 0!==m?m:12,0,48,1,e=>o({row_gap:e}))}
        </div>

        <!-- Responsive -->
        ${this.renderSettingsSection((0,r.kg)("editor.grid_layout.responsive.title",h,"Responsive"),(0,r.kg)("editor.grid_layout.responsive.desc",h,"Collapse the grid on small screens."),[{title:(0,r.kg)("editor.grid_layout.responsive.mobile_columns",h,"Mobile Columns"),description:(0,r.kg)("editor.grid_layout.responsive.mobile_columns_desc",h,"Column count used below the breakpoint. Item spans are reset on mobile."),hass:i,data:{mobile_columns:String(null!==(c=_.mobile_columns)&&void 0!==c?c:1)},schema:[this.selectField("mobile_columns",[{value:"0",label:(0,r.kg)("editor.grid_layout.responsive.off",h,"Off")},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"}])],onChange:e=>{o({mobile_columns:Number(e.detail.value.mobile_columns)}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.grid_layout.responsive.breakpoint",h,"Mobile Breakpoint (px)"),description:(0,r.kg)("editor.grid_layout.responsive.breakpoint_desc",h,"Viewport width below which the mobile column count applies."),hass:i,data:{mobile_breakpoint:null!==(p=_.mobile_breakpoint)&&void 0!==p?p:600},schema:[this.numberField("mobile_breakpoint",320,1280,10)],onChange:e=>{o({mobile_breakpoint:e.detail.value.mobile_breakpoint}),this.triggerPreviewUpdate()}}])}

        <!-- Item Spans -->
        ${this.renderSettingsSection((0,r.kg)("editor.grid_layout.spans.title",h,"Item Spans"),(0,r.kg)("editor.grid_layout.spans.desc",h,"Let individual children span multiple columns or rows."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${0===(_.modules||[]).length?n.qy`
                <div
                  style="font-size: 13px; color: var(--secondary-text-color); font-style: italic; padding: 8px 4px;"
                >
                  ${(0,r.kg)("editor.grid_layout.spans.empty",h,"Add modules to this grid in the layout builder first, then configure their spans here.")}
                </div>
              `:(_.modules||[]).map((e,t)=>{var n,l,d;const r=(0,a.oD)().getModuleMetadata(e.type),s=e.name||(null==r?void 0:r.title)||e.type,u=(null===(n=_.item_spans)||void 0===n?void 0:n[e.id])||{},g="fixed"===v?Math.max(y,1):4,m=e=>Array.from({length:e},(e,i)=>({value:String(i+1),label:String(i+1)}));return this.renderFieldSection(`${t+1}. ${s}`,"",i,{col_span:String(Math.min(null!==(l=u.columns)&&void 0!==l?l:1,g)),row_span:String(null!==(d=u.rows)&&void 0!==d?d:1)},[this.selectField("col_span",m(g)),this.selectField("row_span",m(4))],i=>{var t,n,l,a;const d=Number(null!==(n=null!==(t=i.detail.value.col_span)&&void 0!==t?t:u.columns)&&void 0!==n?n:1),r=Number(null!==(a=null!==(l=i.detail.value.row_span)&&void 0!==l?l:u.rows)&&void 0!==a?a:1),s=Object.assign({},_.item_spans||{});s[e.id]={columns:d,rows:r},o({item_spans:s}),this.triggerPreviewUpdate()})})}
          ${(_.modules||[]).length>0?n.qy`
                <div
                  style="font-size: 12px; color: var(--secondary-text-color); opacity: 0.8; padding: 4px;"
                >
                  ${(0,r.kg)("editor.grid_layout.spans.hint",h,"The first select is column span, the second is row span.")}
                </div>
              `:""}
        </div>
      </div>
    `}renderPreview(e,i,t,l){var a,d,u,g,m,c;const p=e,_=(null===(a=null==i?void 0:i.locale)||void 0===a?void 0:a.language)||"en",h=p.modules&&p.modules.length>0,v="live"===l||"ha-preview"===l,y=h?p.modules.filter(e=>(0,s.tG)(e,i)):[],b=h&&0===y.length;if(b&&!v)return n.qy``;const w=p.column_mode||"fixed",f=Math.max(null!==(d=p.columns)&&void 0!==d?d:2,1),k=null!==(u=p.gap)&&void 0!==u?u:12,x=null!==(g=p.row_gap)&&void 0!==g?g:k,$="auto-fit"===w?`repeat(auto-fit, minmax(min(${p.min_column_width||"140px"}, 100%), 1fr))`:`repeat(${f}, minmax(0, 1fr))`,S=this.buildDesignStyles(e,i),F=Object.assign(Object.assign({},S),{display:"grid",gridTemplateColumns:$,columnGap:`${k}px`,rowGap:`${x}px`,gridAutoFlow:p.dense_packing?"row dense":"row",alignItems:p.item_alignment||"stretch",boxSizing:"border-box",maxWidth:S.maxWidth||"100%"}),C=this.createGestureHandlers(p.id,{tap_action:p.tap_action,hold_action:p.hold_action,double_tap_action:p.double_tap_action,module:p},i,t,s.fC),P=p.tap_action&&"nothing"!==p.tap_action.action||p.hold_action&&"nothing"!==p.hold_action.action||p.double_tap_action&&"nothing"!==p.double_tap_action.action,G=this.getHoverEffectClass(e),M=`uc-grid-${p.id.replace(/[^a-zA-Z0-9_-]/g,"")}`,q=null!==(m=p.mobile_breakpoint)&&void 0!==m?m:600,A=null!==(c=p.mobile_columns)&&void 0!==c?c:1,U=A>0&&q>0?`\n          @media (max-width: ${q}px) {\n            #${M} {\n              grid-template-columns: repeat(${A}, minmax(0, 1fr)) !important;\n            }\n            #${M} > .grid-layout-item {\n              grid-column: auto !important;\n              grid-row: auto !important;\n            }\n          }\n        `:"";return this.wrapWithAnimation(n.qy`
        ${U?n.qy`<style>${U}</style>`:""}
        <div
          id="${M}"
          class="grid-layout-preview ${G}"
          style="${this.buildStyleString(F)}; cursor: ${P?"pointer":"default"};"
          @pointerdown=${P?C.onPointerDown:null}
          @pointermove=${P?C.onPointerMove:null}
          @pointerup=${P?C.onPointerUp:null}
          @pointercancel=${P?C.onPointerCancel:null}
          @pointerleave=${P?C.onPointerLeave:null}
        >
          ${y.length>0?(0,o.u)(y,e=>e.id||e.type,e=>{var o,a,d,r;const u=null===(o=p.item_spans)||void 0===o?void 0:o[e.id],g="fixed"===w?Math.min(null!==(a=null==u?void 0:u.columns)&&void 0!==a?a:1,f):null!==(d=null==u?void 0:u.columns)&&void 0!==d?d:1,m=null!==(r=null==u?void 0:u.rows)&&void 0!==r?r:1,c=`${g>1?`grid-column: span ${g};`:""} ${m>1?`grid-row: span ${m};`:""}`;return n.qy`
                    <div
                      class="grid-layout-item"
                      style="min-width: 0; box-sizing: border-box; ${c}"
                    >
                      ${(0,s.zU)(e,i,t,l)}
                    </div>
                  `}):n.qy`
                <div class="empty-layout-message" style="grid-column: 1 / -1;">
                  ${b?n.qy`
                        <span
                          >${(0,r.kg)("editor.grid_layout.empty.all_hidden",_,"All modules hidden by logic")}</span
                        >
                      `:n.qy`
                        <span
                          >${(0,r.kg)("editor.grid_layout.empty.no_modules",_,"No modules added yet")}</span
                        >
                        <small
                          >${(0,r.kg)("editor.grid_layout.empty.add_modules",_,"Add modules in the layout builder to see them in the grid")}</small
                        >
                      `}
                </div>
              `}
        </div>
      `,e,i)}renderLogicTab(e,i,t,n){return d.X.render(e,i,e=>n(e))}getStyles(){return`\n      .grid-layout-preview {\n        transition: all 0.2s ease;\n      }\n\n      .grid-layout-item {\n        pointer-events: auto;\n      }\n\n      .grid-layout-preview .empty-layout-message {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 4px;\n        color: var(--secondary-text-color);\n        font-style: italic;\n        text-align: center;\n        width: 100%;\n        padding: 20px;\n      }\n\n      .grid-layout-preview .empty-layout-message span {\n        font-size: 14px;\n        font-weight: 500;\n      }\n\n      .grid-layout-preview .empty-layout-message small {\n        font-size: 12px;\n        opacity: 0.8;\n      }\n\n      ${l.m.getSliderStyles()}\n    `}}}};