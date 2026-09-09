export const __webpack_esm_ids__=[4476];export const __webpack_esm_modules__={5283(i,e,t){t.d(e,{UltraGridLayoutModule:()=>u});var n=t(2618),o=t(6214),l=t(7475),a=t(8414),d=t(8938),r=t(6478),s=t(1091);class u extends l.m{constructor(){super(...arguments),this.metadata={type:"grid_layout",title:"Grid Layout",description:"True CSS-grid container with per-child column and row spans",author:"WJD Designs",version:"1.0.0",icon:"mdi:view-grid-plus",category:"layout",tags:["layout","grid","container","span","columns","responsive","masonry"]}}createDefault(i,e){return{id:i||this.generateId("grid_layout"),type:"grid_layout",modules:[],column_mode:"fixed",columns:2,min_column_width:"140px",gap:12,dense_packing:!1,item_alignment:"stretch",mobile_breakpoint:600,mobile_columns:1,item_spans:{},tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderGeneralTab(i,e,t,o){var l,d,s,u,g,c,m,p;const v=i,_=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en",h=v.column_mode||"fixed",y=null!==(d=v.columns)&&void 0!==d?d:2;return n.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- Grid Configuration -->
        ${this.renderSettingsSection((0,r.kg)("editor.grid_layout.config.title",_,"Grid Configuration"),(0,r.kg)("editor.grid_layout.config.desc",_,"Configure the grid tracks. Children placed in this container flow into the grid cells."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSegmentedField((0,r.kg)("editor.grid_layout.config.column_mode",_,"Column Mode"),(0,r.kg)("editor.grid_layout.config.column_mode_desc",_,"Fixed uses an exact column count. Auto Fit fills the width with as many columns as fit."),h,[{value:"fixed",label:(0,r.kg)("editor.grid_layout.config.fixed",_,"Fixed Columns"),icon:"mdi:view-column"},{value:"auto-fit",label:(0,r.kg)("editor.grid_layout.config.auto_fit",_,"Auto Fit"),icon:"mdi:arrow-expand-horizontal"}],i=>o({column_mode:i}))}
          ${"fixed"===h?this.renderSliderField((0,r.kg)("editor.grid_layout.config.columns",_,"Columns"),(0,r.kg)("editor.grid_layout.config.columns_desc",_,"Number of equal-width columns in the grid."),y,2,1,6,1,i=>o({columns:i}),""):this.renderFieldSection((0,r.kg)("editor.grid_layout.config.min_width",_,"Minimum Column Width"),(0,r.kg)("editor.grid_layout.config.min_width_desc",_,"Smallest allowed column width (e.g. 140px). Columns are added or removed to fit."),e,{min_column_width:v.min_column_width||"140px"},[this.textField("min_column_width")],i=>{o({min_column_width:i.detail.value.min_column_width}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection((0,r.kg)("editor.grid_layout.config.item_alignment",_,"Item Alignment"),(0,r.kg)("editor.grid_layout.config.item_alignment_desc",_,"Vertical alignment of items within their grid cell."),e,{item_alignment:v.item_alignment||"stretch"},[this.selectField("item_alignment",[{value:"stretch",label:(0,r.kg)("editor.common.stretch",_,"Stretch")},{value:"start",label:(0,r.kg)("editor.common.top",_,"Top")},{value:"center",label:(0,r.kg)("editor.common.center",_,"Center")},{value:"end",label:(0,r.kg)("editor.common.bottom",_,"Bottom")}])],i=>{o({item_alignment:i.detail.value.item_alignment}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection((0,r.kg)("editor.grid_layout.config.dense",_,"Dense Packing"),(0,r.kg)("editor.grid_layout.config.dense_desc",_,"Backfill gaps left by spanning items (masonry-like packing)."),e,{dense_packing:v.dense_packing||!1},[this.booleanField("dense_packing")],i=>{o({dense_packing:i.detail.value.dense_packing}),this.triggerPreviewUpdate()})}
        </div>

        <!-- Spacing -->
        ${this.renderSettingsSection((0,r.kg)("editor.grid_layout.spacing.title",_,"Spacing"),(0,r.kg)("editor.grid_layout.spacing.desc",_,"Gaps between grid cells."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSliderField((0,r.kg)("editor.grid_layout.spacing.gap",_,"Column Gap"),"",null!==(s=v.gap)&&void 0!==s?s:12,12,0,48,1,i=>o({gap:i}))}
          ${this.renderSliderField((0,r.kg)("editor.grid_layout.spacing.row_gap",_,"Row Gap"),(0,r.kg)("editor.grid_layout.spacing.row_gap_desc",_,"Follows the column gap until changed."),null!==(g=null!==(u=v.row_gap)&&void 0!==u?u:v.gap)&&void 0!==g?g:12,null!==(c=v.gap)&&void 0!==c?c:12,0,48,1,i=>o({row_gap:i}))}
        </div>

        <!-- Responsive -->
        ${this.renderSettingsSection((0,r.kg)("editor.grid_layout.responsive.title",_,"Responsive"),(0,r.kg)("editor.grid_layout.responsive.desc",_,"Collapse the grid on small screens."),[{title:(0,r.kg)("editor.grid_layout.responsive.mobile_columns",_,"Mobile Columns"),description:(0,r.kg)("editor.grid_layout.responsive.mobile_columns_desc",_,"Column count used below the breakpoint. Item spans are reset on mobile."),hass:e,data:{mobile_columns:String(null!==(m=v.mobile_columns)&&void 0!==m?m:1)},schema:[this.selectField("mobile_columns",[{value:"0",label:(0,r.kg)("editor.grid_layout.responsive.off",_,"Off")},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"}])],onChange:i=>{o({mobile_columns:Number(i.detail.value.mobile_columns)}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.grid_layout.responsive.breakpoint",_,"Mobile Breakpoint (px)"),description:(0,r.kg)("editor.grid_layout.responsive.breakpoint_desc",_,"Viewport width below which the mobile column count applies."),hass:e,data:{mobile_breakpoint:null!==(p=v.mobile_breakpoint)&&void 0!==p?p:600},schema:[this.numberField("mobile_breakpoint",320,1280,10)],onChange:i=>{o({mobile_breakpoint:i.detail.value.mobile_breakpoint}),this.triggerPreviewUpdate()}}])}

        <!-- Item Spans -->
        ${this.renderSettingsSection((0,r.kg)("editor.grid_layout.spans.title",_,"Item Spans"),(0,r.kg)("editor.grid_layout.spans.desc",_,"Let individual children span multiple columns or rows."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${0===(v.modules||[]).length?n.qy`
                <div
                  style="font-size: 13px; color: var(--secondary-text-color); font-style: italic; padding: 8px 4px;"
                >
                  ${(0,r.kg)("editor.grid_layout.spans.empty",_,"Add modules to this grid in the layout builder first, then configure their spans here.")}
                </div>
              `:(v.modules||[]).map((i,t)=>{var n,l,d;const r=(0,a.oD)().getModuleMetadata(i.type),s=i.name||(null==r?void 0:r.title)||i.type,u=(null===(n=v.item_spans)||void 0===n?void 0:n[i.id])||{},g="fixed"===h?Math.max(y,1):4,c=i=>Array.from({length:i},(i,e)=>({value:String(e+1),label:String(e+1)}));return this.renderFieldSection(`${t+1}. ${s}`,"",e,{col_span:String(Math.min(null!==(l=u.columns)&&void 0!==l?l:1,g)),row_span:String(null!==(d=u.rows)&&void 0!==d?d:1)},[this.selectField("col_span",c(g)),this.selectField("row_span",c(4))],e=>{var t,n,l,a;const d=Number(null!==(n=null!==(t=e.detail.value.col_span)&&void 0!==t?t:u.columns)&&void 0!==n?n:1),r=Number(null!==(a=null!==(l=e.detail.value.row_span)&&void 0!==l?l:u.rows)&&void 0!==a?a:1),s=Object.assign({},v.item_spans||{});s[i.id]={columns:d,rows:r},o({item_spans:s}),this.triggerPreviewUpdate()})})}
          ${(v.modules||[]).length>0?n.qy`
                <div
                  style="font-size: 12px; color: var(--secondary-text-color); opacity: 0.8; padding: 4px;"
                >
                  ${(0,r.kg)("editor.grid_layout.spans.hint",_,"The first select is column span, the second is row span.")}
                </div>
              `:""}
        </div>
      </div>
    `}renderPreview(i,e,t,l){var a,d,u,g,c,m;const p=i,v=(null===(a=null==e?void 0:e.locale)||void 0===a?void 0:a.language)||"en",_=p.modules&&p.modules.length>0,h="live"===l||"ha-preview"===l,y=_?p.modules.filter(i=>(0,s.tG)(i,e)):[],b=_&&0===y.length;if(b&&!h)return n.qy``;const f=p.column_mode||"fixed",w=Math.max(null!==(d=p.columns)&&void 0!==d?d:2,1),x=null!==(u=p.gap)&&void 0!==u?u:12,k=null!==(g=p.row_gap)&&void 0!==g?g:x,$="auto-fit"===f?`repeat(auto-fit, minmax(min(${p.min_column_width||"140px"}, 100%), 1fr))`:`repeat(${w}, minmax(0, 1fr))`,S=this.buildDesignStyles(i,e),C=Object.assign(Object.assign({},S),{display:"grid",gridTemplateColumns:$,columnGap:`${x}px`,rowGap:`${k}px`,gridAutoFlow:p.dense_packing?"row dense":"row",alignItems:p.item_alignment||"stretch",boxSizing:"border-box",maxWidth:S.maxWidth||"100%"}),F=this.createGestureHandlers(p.id,{tap_action:p.tap_action,hold_action:p.hold_action,double_tap_action:p.double_tap_action,module:p},e,t,s.fC),M=p.tap_action&&"nothing"!==p.tap_action.action||p.hold_action&&"nothing"!==p.hold_action.action||p.double_tap_action&&"nothing"!==p.double_tap_action.action,P=this.getHoverEffectClass(i),q=`uc-grid-${p.id.replace(/[^a-zA-Z0-9_-]/g,"")}`,z=null!==(c=p.mobile_breakpoint)&&void 0!==c?c:600,G=null!==(m=p.mobile_columns)&&void 0!==m?m:1,A=G>0&&z>0?`\n          @media (max-width: ${z}px) {\n            #${q} {\n              grid-template-columns: repeat(${G}, minmax(0, 1fr)) !important;\n            }\n            #${q} > .grid-layout-item {\n              grid-column: auto !important;\n              grid-row: auto !important;\n            }\n          }\n        `:"";return this.wrapWithAnimation(n.qy`
        ${A?n.qy`<style>${A}</style>`:""}
        <div
          id="${q}"
          class="grid-layout-preview ${P}"
          style="${this.buildStyleString(C)}; cursor: ${M?"pointer":"default"};"
          @pointerdown=${M?F.onPointerDown:null}
          @pointermove=${M?F.onPointerMove:null}
          @pointerup=${M?F.onPointerUp:null}
          @pointercancel=${M?F.onPointerCancel:null}
          @pointerleave=${M?F.onPointerLeave:null}
        >
          ${y.length>0?(0,o.u)(y,i=>i.id||i.type,i=>{var o,a,d,r;const u=null===(o=p.item_spans)||void 0===o?void 0:o[i.id],g="fixed"===f?Math.min(null!==(a=null==u?void 0:u.columns)&&void 0!==a?a:1,w):null!==(d=null==u?void 0:u.columns)&&void 0!==d?d:1,c=null!==(r=null==u?void 0:u.rows)&&void 0!==r?r:1,m=`${g>1?`grid-column: span ${g};`:""} ${c>1?`grid-row: span ${c};`:""}`;return n.qy`
                    <div
                      class="grid-layout-item"
                      style="min-width: 0; box-sizing: border-box; ${m}"
                    >
                      ${(0,s.zU)(i,e,t,l)}
                    </div>
                  `}):n.qy`
                <div class="empty-layout-message" style="grid-column: 1 / -1;">
                  ${b?n.qy`
                        <span
                          >${(0,r.kg)("editor.grid_layout.empty.all_hidden",v,"All modules hidden by logic")}</span
                        >
                      `:n.qy`
                        <span
                          >${(0,r.kg)("editor.grid_layout.empty.no_modules",v,"No modules added yet")}</span
                        >
                        <small
                          >${(0,r.kg)("editor.grid_layout.empty.add_modules",v,"Add modules in the layout builder to see them in the grid")}</small
                        >
                      `}
                </div>
              `}
        </div>
      `,i,e)}renderLogicTab(i,e,t,n){return d.X.render(i,e,i=>n(i))}getStyles(){return`\n      .grid-layout-preview {\n        transition: all 0.2s ease;\n      }\n\n      .grid-layout-item {\n        pointer-events: auto;\n      }\n\n      .grid-layout-preview .empty-layout-message {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 4px;\n        color: var(--secondary-text-color);\n        font-style: italic;\n        text-align: center;\n        width: 100%;\n        padding: 20px;\n      }\n\n      .grid-layout-preview .empty-layout-message span {\n        font-size: 14px;\n        font-weight: 500;\n      }\n\n      .grid-layout-preview .empty-layout-message small {\n        font-size: 12px;\n        opacity: 0.8;\n      }\n\n      ${l.m.getSliderStyles()}\n    `}}},1091(i,e,t){t.d(e,{tG:()=>s,zU:()=>u});var n=t(2618),o=t(8414),l=t(230),a=t(378),d=t(2034),r=t(5064);function s(i,e){var t,n,o,a;l.S.setHass(e);const d=i,r=l.S.evaluateModuleVisibility(d),s=l.S.evaluateLogicProperties({logic_entity:null===(t=null==d?void 0:d.design)||void 0===t?void 0:t.logic_entity,logic_attribute:null===(n=null==d?void 0:d.design)||void 0===n?void 0:n.logic_attribute,logic_operator:null===(o=null==d?void 0:d.design)||void 0===o?void 0:o.logic_operator,logic_value:null===(a=null==d?void 0:d.design)||void 0===a?void 0:a.logic_value});return r&&s}function u(i,e,t,l){var u,g,c,m,p,v,_,h,y,b,f,w;if(!s(i,e))return n.qy``;const x=function(i){const e=i.design||{};return void 0!==e.margin_top||void 0!==e.margin_bottom||void 0!==e.margin_left||void 0!==e.margin_right||void 0!==i.margin_top||void 0!==i.margin_bottom||void 0!==i.margin_left||void 0!==i.margin_right?i:Object.assign(Object.assign({},i),{margin_top:"0",margin_bottom:"0",margin_left:"0",margin_right:"0"})}(i),k=(0,o.oD)().getModule(x.type);if(!k)return d.E.renderModuleLoadingState(x);const $=!(!(null===(g=null===(u=k.metadata)||void 0===u?void 0:u.tags)||void 0===g?void 0:g.includes("pro"))&&!(null===(m=null===(c=k.metadata)||void 0===c?void 0:c.tags)||void 0===m?void 0:m.includes("premium")))&&!function(i){var e,t,n,o;const l=a.xd.checkIntegrationAuth(i);if("pro"===(null===(e=null==l?void 0:l.subscription)||void 0===e?void 0:e.tier)&&"active"===(null===(t=null==l?void 0:l.subscription)||void 0===t?void 0:t.status))return!0;if(a.xd.isAuthenticated()){const i=a.xd.getCurrentUser();if("pro"===(null===(n=null==i?void 0:i.subscription)||void 0===n?void 0:n.tier)&&"active"===(null===(o=null==i?void 0:i.subscription)||void 0===o?void 0:o.status))return!0}return!1}(e),S=(0,r.l8)(x),C=k.renderPreview(S,e,t,l);if($)return n.qy`
      <div class="pro-module-locked" style="position: relative;">
        ${C}
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
    `;const F=x,M=F.animation_type||(null===(p=F.design)||void 0===p?void 0:p.animation_type);if(M&&"none"!==M){const i=F.animation_duration||(null===(v=F.design)||void 0===v?void 0:v.animation_duration)||"2s",t=F.animation_delay||(null===(_=F.design)||void 0===_?void 0:_.animation_delay)||"0s",o=F.animation_timing||(null===(h=F.design)||void 0===h?void 0:h.animation_timing)||"ease",l=F.animation_entity||(null===(y=F.design)||void 0===y?void 0:y.animation_entity),a=F.animation_trigger_type||(null===(b=F.design)||void 0===b?void 0:b.animation_trigger_type)||"state",d=F.animation_attribute||(null===(f=F.design)||void 0===f?void 0:f.animation_attribute),r=F.animation_state||(null===(w=F.design)||void 0===w?void 0:w.animation_state);let s=!1;if(l){if(r&&e&&e.states[l]){const i=e.states[l];s="attribute"===a&&d?String(i.attributes[d])===r:i.state===r}}else s=!0;if(s)return n.qy`
        <div
          class="module-animation-wrapper animation-${M}"
          style="
            --animation-duration: ${i};
            --animation-delay: ${t};
            --animation-timing: ${o};
          "
        >
          ${C}
        </div>
      `}return C}t.d(e,["fC",0,["button","input","select","textarea","a[href]","ha-switch","ha-slider","ha-control-slider","ha-control-select",'[role="button"]','[role="slider"]','[role="switch"]']])}};