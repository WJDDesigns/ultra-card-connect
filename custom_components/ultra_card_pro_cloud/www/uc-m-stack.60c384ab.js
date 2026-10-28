export const __webpack_esm_ids__=[8819];export const __webpack_esm_modules__={564(e,t,i){i.d(t,{UltraStackModule:()=>b});var a=i(2618),o=i(6214),r=i(3307),n=i(1091),c=i(8414),l=i(8938),s=i(6478),d=i(230),p=i(378),u=i(2034),h=i(361),g=i(6477),v=i(5064);const m=[{anchor:"top-left",icon:"mdi:arrow-top-left",label:"Top left"},{anchor:"top-center",icon:"mdi:arrow-up",label:"Top center"},{anchor:"top-right",icon:"mdi:arrow-top-right",label:"Top right"},{anchor:"middle-left",icon:"mdi:arrow-left",label:"Middle left"},{anchor:"center",icon:"mdi:circle-medium",label:"Center"},{anchor:"middle-right",icon:"mdi:arrow-right",label:"Middle right"},{anchor:"bottom-left",icon:"mdi:arrow-bottom-left",label:"Bottom left"},{anchor:"bottom-center",icon:"mdi:arrow-down",label:"Bottom center"},{anchor:"bottom-right",icon:"mdi:arrow-bottom-right",label:"Bottom right"}],y=[{value:"16:9",icon:"mdi:rectangle-outline",label:"16 : 9"},{value:"4:3",icon:"mdi:rectangle-outline",label:"4 : 3"},{value:"3:2",icon:"mdi:rectangle-outline",label:"3 : 2"},{value:"1:1",icon:"mdi:square-outline",label:"1 : 1"},{value:"2:3",icon:"mdi:crop-portrait",label:"2 : 3"},{value:"auto",icon:"mdi:arrow-expand-vertical",label:"Auto"}],_=[{id:"hero",icon:"mdi:image-text",label:"Hero",description:"Full image background with title overlay"},{id:"camera_badge",icon:"mdi:cctv",label:"Camera + badge",description:"Camera feed with corner status icon"},{id:"clock_weather",icon:"mdi:weather-sunny-alert",label:"Clock + weather",description:"Side-by-side ambient widgets"},{id:"media",icon:"mdi:music",label:"Media",description:"Album art with media controls"}];function k(e){return["image","video_bg","camera","background","living_canvas","dynamic_weather"].includes(e)?{anchor:"center",width:"100%",height:"auto",offset_x:"0px",offset_y:"0px"}:{anchor:"center",width:"auto",height:"auto",offset_x:"0px",offset_y:"0px"}}class b extends r.m{constructor(){super(...arguments),this.metadata={type:"stack",title:"Stack Overlay",description:"Layer modules on top of each other with anchor-based absolute positioning",author:"WJD Designs",version:"1.0.0",icon:"mdi:layers",category:"layout",tags:["layout","stack","overlay","absolute","layer","z-index","anchor","hero"]},this._stackSelectedLayerIndices=new Map,this._stackLayerDrag=null,this._stackLayerDragWindowMove=e=>{const t=this._stackLayerDrag;if(!t||e.pointerId!==t.pointerId)return;const i=t.previewEl;if(!i.isConnected)return;const a=i.getBoundingClientRect();if(a.width<1||a.height<1)return;const o=Math.max(0,Math.min(a.width,e.clientX-a.left)),r=Math.max(0,Math.min(a.height,e.clientY-a.top)),n=`${Math.round(o)}px`,c=`${Math.round(r)}px`;t.pending={offset_x:n,offset_y:c},this._applyStackLayerDragLivePreview(t,n,c)},this._stackLayerDragWindowEnd=e=>{const t=this._stackLayerDrag;t&&e.pointerId===t.pointerId&&(null!==t.rafId&&(cancelAnimationFrame(t.rafId),t.rafId=null),t.pending&&t.updateFn(t.moduleIndex,this._buildStackDragCommitPatch(t)),this._stackLayerDrag=null,this._detachStackLayerDragWindowListeners())}}_getStackSelectedLayerIndex(e){var t;return null!==(t=this._stackSelectedLayerIndices.get(e))&&void 0!==t?t:0}_setStackSelectedLayerIndex(e,t){this._stackSelectedLayerIndices.set(e,t)}_buildStackDragCommitPatch(e){const t=e.pending,i={anchor:e.anchor,offset_x:t.offset_x,offset_y:t.offset_y};if(e.sizeToContent&&(i.width="fit-content",i.height="auto"),"top-left"===e.anchor)return i;const a=this._findStackLayerWrapperEl(e.previewEl,e.moduleIndex),o=null==a?void 0:a.querySelector(":scope > .stack-layer-child");if(!a||!o)return i.anchor="top-left",i;a.style.alignItems="flex-start",a.style.justifyContent="flex-start",a.style.padding=`${t.offset_y} 0px 0px ${t.offset_x}`,e.sizeToContent&&(o.style.width="fit-content",o.style.height="auto");const r=a.getBoundingClientRect(),n=o.getBoundingClientRect();if(r.width<1||r.height<1)return i.anchor="top-left",i;let c,l;return c=e.anchor.endsWith("left")?n.left-r.left:e.anchor.endsWith("right")?r.right-n.right:2*(n.left+n.width/2-r.left)-r.width,l=e.anchor.startsWith("top")?n.top-r.top:e.anchor.startsWith("bottom")?r.bottom-n.bottom:2*(n.top+n.height/2-r.top)-r.height,i.offset_x=`${Math.max(0,Math.round(c))}px`,i.offset_y=`${Math.max(0,Math.round(l))}px`,i}_applyStackLayerDragLivePreview(e,t,i){null===e.rafId&&(e.rafId=requestAnimationFrame(()=>{e.rafId=null;const a=this._findStackLayerWrapperEl(e.previewEl,e.moduleIndex);if(a&&(a.style.alignItems="flex-start",a.style.justifyContent="flex-start",a.style.padding=`${i} 0px 0px ${t}`,e.sizeToContent)){const e=a.querySelector(":scope > .stack-layer-child");e&&(e.style.width="fit-content",e.style.height="auto")}}))}_findStackLayerWrapperEl(e,t){var i;return null!==(i=e.querySelectorAll(":scope > .stack-layer-wrapper")[t])&&void 0!==i?i:null}_attachStackLayerDragWindowListeners(){window.addEventListener("pointermove",this._stackLayerDragWindowMove,{capture:!0}),window.addEventListener("pointerup",this._stackLayerDragWindowEnd,{capture:!0}),window.addEventListener("pointercancel",this._stackLayerDragWindowEnd,{capture:!0})}_detachStackLayerDragWindowListeners(){window.removeEventListener("pointermove",this._stackLayerDragWindowMove,{capture:!0}),window.removeEventListener("pointerup",this._stackLayerDragWindowEnd,{capture:!0}),window.removeEventListener("pointercancel",this._stackLayerDragWindowEnd,{capture:!0})}createDefault(e,t){return{id:e||this.generateId("stack"),type:"stack",modules:[],aspect_ratio:"16:9",clip_overflow:!0,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){var t;const i=e,a=[...super.validate(e).errors];if(null===(t=i.modules)||void 0===t?void 0:t.length)for(const e of i.modules)if("stack"===e.type){a.push("Stack Overlay cannot contain another Stack Overlay module.");break}return{valid:0===a.length,errors:a}}_onStackLayerDragDown(e,t,i,a){var o;if("ha-preview"!==this._currentPreviewContext)return;const r=this._stackDragUpdateFn;if(!r)return;const n=e.currentTarget;if(!n)return;const c=n.closest(".stack-preview-content"),l=null==a?void 0:a.width,s=!l||"auto"===l;if(!c)return;const d=this._stackDragSelectFn;if(this._getStackSelectedLayerIndex(i)!==t)return e.stopPropagation(),void(d&&d(t));e.stopPropagation(),e.preventDefault(),d&&d(t),this._stackLayerDrag&&this._detachStackLayerDragWindowListeners(),this._stackLayerDrag={pointerId:e.pointerId,moduleIndex:t,previewEl:c,pending:null,rafId:null,sizeToContent:s,anchor:null!==(o=null==a?void 0:a.anchor)&&void 0!==o?o:"center",updateFn:r},this._attachStackLayerDragWindowListeners()}renderLogicTab(e,t,i,a){return l.X.render(e,t,e=>a(e))}renderGeneralTab(e,t,i,o){var r;const n=e,c=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en",l=n.modules||[];let d=this._getStackSelectedLayerIndex(n.id);d>=l.length&&(d=Math.max(0,l.length-1),this._setStackSelectedLayerIndex(n.id,d));const p=l[d],u=e=>{o({modules:e}),this.triggerPreviewUpdate()};this._stackDragUpdateFn=(e,t)=>{const i=l.map((i,a)=>a===e?Object.assign(Object.assign({},i),{stack_layer:Object.assign(Object.assign({},i.stack_layer),t)}):i);u(i)},this._stackDragSelectFn=e=>{this._setStackSelectedLayerIndex(n.id,e),this.triggerPreviewUpdate(!0)};const h=n.aspect_ratio||"16:9";return a.qy`
      ${this.injectUcFormStyles()}
      ${this._renderStackEditorStyles()}

      <div class="module-general-settings">
        ${0===l.length?this._renderPresetsSection(c,e=>this._applyStackPreset(e,t,e=>{u(e),this._setStackSelectedLayerIndex(n.id,0)})):""}

        <!-- Container -->
        <div class="uc-stack-section">
          <div class="uc-stack-section-title">
            ${(0,s.kg)("editor.stack.container.title",c,"Container")}
          </div>
          <div class="uc-stack-section-desc">
            ${(0,s.kg)("editor.stack.container.desc",c,"Aspect ratio or fixed height defines the overlay area.")}
          </div>

          <div class="uc-stack-field-label">
            ${(0,s.kg)("editor.stack.aspect_ratio",c,"Aspect ratio")}
          </div>
          <div class="uc-stack-aspect-grid">
            ${y.map(e=>a.qy`
                <button
                  type="button"
                  class="uc-stack-chip ${h===e.value?"active":""}"
                  data-uc-role="pane"
                  @click=${()=>{o({aspect_ratio:e.value}),this.triggerPreviewUpdate()}}
                >
                  <ha-icon icon="${e.icon}"></ha-icon>
                  <span>${e.label}</span>
                </button>
              `)}
          </div>

          ${this.renderFieldSection((0,s.kg)("editor.stack.height",c,"Height (optional)"),(0,s.kg)("editor.stack.height_desc",c,"When set (e.g. 280px, 40vh), overrides aspect ratio height."),t,{h:n.height||""},[this.textField("h")],e=>{const t=(e.detail.value.h||"").trim();o({height:t||void 0}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection((0,s.kg)("editor.stack.clip",c,"Clip overflow"),(0,s.kg)("editor.stack.clip_desc",c,"Hide content outside rounded bounds."),t,{clip:!1!==n.clip_overflow},[this.booleanField("clip")],e=>{o({clip_overflow:e.detail.value.clip}),this.triggerPreviewUpdate()})}
        </div>

        <!-- Layers -->
        <div class="uc-stack-section">
          <div class="uc-stack-section-title">
            ${(0,s.kg)("editor.stack.layers.title",c,"Layers")}
          </div>
          <div class="uc-stack-section-desc">
            ${(0,s.kg)("editor.stack.layers.desc",c,"Layers are stacked bottom (first) to top (last). Click a row to edit its position.")}
          </div>

          ${0===l.length?a.qy`
                <div class="uc-stack-empty">
                  <ha-icon icon="mdi:layers-outline"></ha-icon>
                  <div class="uc-stack-empty-title">
                    ${(0,s.kg)("editor.stack.layers.empty_title",c,"No layers yet")}
                  </div>
                  <div class="uc-stack-empty-desc">
                    ${(0,s.kg)("editor.stack.layers.empty_desc",c,"Drag modules into this stack from the layout tree, or pick a Quick start preset above. New layers default to the center of the card so you can offset them in any direction.")}
                  </div>
                </div>
              `:a.qy`
                <div class="uc-stack-layer-list">
                  ${l.map((e,t)=>this._renderLayerRow(e,t,l,u,c,n.id))}
                </div>
              `}
        </div>

        <!-- Layer position (only when something is selected) -->
        ${p?this._renderLayerPositionSection(p,d,c,t,e=>{if(!p)return;const t=l.map((t,i)=>i===d?Object.assign(Object.assign({},t),{stack_layer:Object.assign(Object.assign({},t.stack_layer),e)}):t);u(t)},l.length>1?()=>{if(!p)return;const e=p.stack_layer||{},t=e.anchor||"center",i=l.map(i=>{var a,o;return Object.assign(Object.assign({},i),{stack_layer:Object.assign(Object.assign({},i.stack_layer),{anchor:t,offset_x:null!==(a=e.offset_x)&&void 0!==a?a:"0px",offset_y:null!==(o=e.offset_y)&&void 0!==o?o:"0px"})})});u(i)}:void 0):""}
      </div>
    `}_renderStackEditorStyles(){return a.qy`
      <style>
        .uc-stack-section {
          background: var(--secondary-background-color);
          border-radius: var(--uc-r-8, 8px);
          padding: 16px;
          margin-bottom: 24px;
        }
        .uc-stack-section-title {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--primary-color);
          color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color));
          margin-bottom: 4px;
          letter-spacing: 0.5px;
        }
        .uc-stack-section-desc {
          font-size: 13px;
          color: var(--secondary-text-color);
          opacity: 0.85;
          line-height: 1.4;
          margin-bottom: 16px;
        }
        .uc-stack-field-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--primary-text-color);
          margin-bottom: 8px;
        }

        /* Aspect ratio / preset chips */
        .uc-stack-aspect-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
          gap: 8px;
          margin-bottom: 24px;
        }
        .uc-stack-apply-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          min-height: 36px;
          padding: 6px 12px;
          background: var(--uc-pane-bg, var(--card-background-color));
          color: var(--primary-text-color);
          border: 1px solid var(--divider-color);
          border-radius: var(--uc-r-8, 8px);
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        }
        .uc-stack-apply-all:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }
        .uc-stack-apply-all ha-icon {
          --mdc-icon-size: 18px;
        }
        .uc-stack-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 12px 8px;
          background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);
          color: var(--primary-text-color);
          border: 2px solid var(--divider-color);
          border-radius: var(--uc-r-8, 8px);
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.15s ease;
        }
        .uc-stack-chip ha-icon {
          --mdc-icon-size: 22px;
          color: var(--secondary-text-color);
        }
        .uc-stack-chip:hover {
          border-color: var(--primary-color);
        }
        .uc-stack-chip.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: var(--text-primary-color, #fff);
        }
        .uc-stack-chip.active ha-icon {
          color: var(--text-primary-color, #fff);
        }

        /* Preset cards */
        .uc-stack-preset-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
        }
        .uc-stack-preset-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          padding: 14px;
          background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);
          border: var(--uc-pane-border, 1px solid var(--divider-color));
          border-radius: var(--uc-r-8, 8px);
          cursor: pointer;
          text-align: left;
          transition: all 0.15s ease;
        }
        .uc-stack-preset-card:hover {
          border-color: var(--primary-color);
          background: rgba(var(--rgb-primary-color), 0.04);
        }
        .uc-stack-preset-card ha-icon {
          --mdc-icon-size: 24px;
          color: var(--primary-color);
        }
        .uc-stack-preset-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--primary-text-color);
        }
        .uc-stack-preset-desc {
          font-size: 12px;
          color: var(--secondary-text-color);
          line-height: 1.3;
        }

        /* Layer list */
        .uc-stack-layer-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }
        .uc-stack-layer-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);
          border: 2px solid var(--divider-color);
          border-radius: var(--uc-r-8, 8px);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .uc-stack-layer-row:hover {
          border-color: var(--primary-color);
        }
        .uc-stack-layer-row.selected {
          border-color: var(--primary-color);
          background: rgba(var(--rgb-primary-color), 0.08);
        }
        .uc-stack-layer-row.hidden {
          opacity: 0.55;
        }
        .uc-stack-layer-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--uc-r-6, 6px);
          background: rgba(var(--rgb-primary-color), 0.12);
          color: var(--primary-color);
          flex-shrink: 0;
        }
        .uc-stack-layer-icon ha-icon {
          --mdc-icon-size: 20px;
        }
        .uc-stack-layer-titles {
          flex: 1;
          min-width: 0;
        }
        .uc-stack-layer-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--primary-text-color);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .uc-stack-layer-sub {
          font-size: 11px;
          color: var(--secondary-text-color);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .uc-stack-layer-actions {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .uc-stack-layer-actions ha-icon-button {
          --mdc-icon-button-size: 36px;
          --mdc-icon-size: 18px;
          color: var(--secondary-text-color);
        }
        .uc-stack-layer-actions ha-icon-button[disabled] {
          opacity: 0.3;
        }
        .uc-stack-layer-actions ha-icon-button.delete:hover {
          color: var(--error-color);
        }

        /* Anchor grid */
        .uc-stack-anchor-grid {
          display: grid;
          grid-template-columns: repeat(3, 56px);
          grid-template-rows: repeat(3, 56px);
          gap: 6px;
          margin-bottom: 20px;
        }
        .uc-stack-anchor-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);
          border: 2px solid var(--divider-color);
          border-radius: var(--uc-r-8, 8px);
          cursor: pointer;
          color: var(--secondary-text-color);
          transition: all 0.15s ease;
        }
        .uc-stack-anchor-cell ha-icon {
          --mdc-icon-size: 24px;
        }
        .uc-stack-anchor-cell:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }
        .uc-stack-anchor-cell.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: var(--text-primary-color, #fff);
        }

        /* Empty state */
        .uc-stack-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 32px 16px;
          background: var(--uc-pane-bg, var(--card-background-color));
          border: 1px dashed var(--divider-color);
          border-radius: var(--uc-r-8, 8px);
          margin-bottom: 16px;
          text-align: center;
        }
        .uc-stack-empty ha-icon {
          --mdc-icon-size: 40px;
          color: var(--secondary-text-color);
          opacity: 0.6;
        }
        .uc-stack-empty-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--primary-text-color);
        }
        .uc-stack-empty-desc {
          font-size: 13px;
          color: var(--secondary-text-color);
          line-height: 1.4;
          max-width: 280px;
        }

        /* Two-column inline fields */
        .uc-stack-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
      </style>
    `}_renderPresetsSection(e,t){return a.qy`
      <div class="uc-stack-section">
        <div class="uc-stack-section-title">
          ${(0,s.kg)("editor.stack.presets.title",e,"Quick start")}
        </div>
        <div class="uc-stack-section-desc">
          ${(0,s.kg)("editor.stack.presets.desc",e,"Pick a starting point — you can edit, reorder, and remove layers afterwards.")}
        </div>
        <div class="uc-stack-preset-grid">
          ${_.map(i=>a.qy`
              <button
                type="button"
                class="uc-stack-preset-card"
                data-uc-role="pane"
                @click=${()=>t(i.id)}
              >
                <ha-icon icon="${i.icon}"></ha-icon>
                <div class="uc-stack-preset-title">
                  ${(0,s.kg)(`editor.stack.preset.${i.id}`,e,i.label)}
                </div>
                <div class="uc-stack-preset-desc">
                  ${(0,s.kg)(`editor.stack.preset.${i.id}_desc`,e,i.description)}
                </div>
              </button>
            `)}
        </div>
      </div>
    `}_renderLayerRow(e,t,i,o,r,n){var l;const d=(0,c.oD)().getModuleMetadata(e.type),p=(null==d?void 0:d.title)||e.type,u="never"===e.display_mode,h=this._getStackSelectedLayerIndex(n)===t,g=`${((null===(l=e.stack_layer)||void 0===l?void 0:l.anchor)||"center").replace("-"," ")} · ${(0,s.kg)("editor.stack.layer_z",r,"layer")} ${t+1}`;return a.qy`
      <div
        class="uc-stack-layer-row ${h?"selected":""} ${u?"hidden":""}"
        data-uc-role="pane"
        @click=${()=>{this._setStackSelectedLayerIndex(n,t),this.triggerPreviewUpdate()}}
      >
        <div class="uc-stack-layer-icon">
          <ha-icon icon="${(null==d?void 0:d.icon)||"mdi:shape"}"></ha-icon>
        </div>
        <div class="uc-stack-layer-titles">
          <div class="uc-stack-layer-title">${p}</div>
          <div class="uc-stack-layer-sub">${g}</div>
        </div>
        <div class="uc-stack-layer-actions">
          <ha-icon-button
            .label=${(0,s.kg)("editor.stack.layer.visibility",r,"Toggle visibility")}
            @click=${e=>{e.stopPropagation();const a=i.map((e,i)=>i===t?Object.assign(Object.assign({},e),{display_mode:"never"===e.display_mode?"always":"never"}):e);o(a)}}
          >
            <ha-icon icon="${u?"mdi:eye-off":"mdi:eye"}"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            .label=${(0,s.kg)("editor.stack.layer.up",r,"Move up")}
            ?disabled=${0===t}
            @click=${e=>{if(e.stopPropagation(),t<=0)return;const a=[...i];[a[t-1],a[t]]=[a[t],a[t-1]],this._setStackSelectedLayerIndex(n,t-1),o(a)}}
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            .label=${(0,s.kg)("editor.stack.layer.down",r,"Move down")}
            ?disabled=${t>=i.length-1}
            @click=${e=>{if(e.stopPropagation(),t>=i.length-1)return;const a=[...i];[a[t+1],a[t]]=[a[t],a[t+1]],this._setStackSelectedLayerIndex(n,t+1),o(a)}}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            class="delete"
            .label=${(0,s.kg)("editor.stack.layer.delete",r,"Remove layer")}
            @click=${e=>{e.stopPropagation();const a=i.filter((e,i)=>i!==t);this._setStackSelectedLayerIndex(n,Math.max(0,t-1)),o(a)}}
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}_renderLayerPositionSection(e,t,i,o,r,n){var l,d,p,u,h;const g=(0,c.oD)().getModuleMetadata(e.type),v=(null==g?void 0:g.title)||e.type,y=e.stack_layer||{},_=y.anchor||"center";return a.qy`
      <div class="uc-stack-section">
        <div class="uc-stack-section-title">
          ${(0,s.kg)("editor.stack.layer.position.title",i,"Layer position")}
        </div>
        <div class="uc-stack-section-desc">
          ${(0,s.kg)("editor.stack.layer.position.desc",i,"Editing layer")} ${t+1} ·
          ${v}
        </div>

        <div class="uc-stack-field-label">
          ${(0,s.kg)("editor.stack.layer.anchor",i,"Anchor point")}
        </div>
        <div class="uc-stack-anchor-grid">
          ${m.map(e=>a.qy`
              <button
                type="button"
                class="uc-stack-anchor-cell ${_===e.anchor?"active":""}"
                data-uc-role="pane"
                title="${(0,s.kg)(`editor.stack.anchor.${e.anchor}`,i,e.label)}"
                @click=${()=>r({anchor:e.anchor})}
              >
                <ha-icon icon="${e.icon}"></ha-icon>
              </button>
            `)}
        </div>

        ${n?a.qy`
              <button
                type="button"
                class="uc-stack-apply-all"
                data-uc-role="pane"
                @click=${()=>n()}
              >
                <ha-icon icon="mdi:layers-triple"></ha-icon>
                ${(0,s.kg)("editor.stack.layer.apply_all",i,"Use this anchor for all layers")}
              </button>
              <div class="uc-stack-section-desc" style="margin-top:4px;">
                ${(0,s.kg)("editor.stack.layer.apply_all_desc",i,"Each layer has its own anchor. This copies the anchor and offsets above to every layer.")}
              </div>
            `:""}

        <div class="uc-stack-field-label">
          ${(0,s.kg)("editor.stack.layer.offset",i,"Offset from anchor")}
        </div>
        <div class="uc-stack-two-col">
          ${this.renderFieldSection((0,s.kg)("editor.stack.layer.offset_x",i,"Offset X"),"",o,{ox:null!==(l=y.offset_x)&&void 0!==l?l:"0px"},[this.textField("ox")],e=>r({offset_x:e.detail.value.ox}))}
          ${this.renderFieldSection((0,s.kg)("editor.stack.layer.offset_y",i,"Offset Y"),"",o,{oy:null!==(d=y.offset_y)&&void 0!==d?d:"0px"},[this.textField("oy")],e=>r({offset_y:e.detail.value.oy}))}
        </div>

        <div class="uc-stack-field-label" style="margin-top:8px;">
          ${(0,s.kg)("editor.stack.layer.size",i,"Size")}
        </div>
        <div class="uc-stack-two-col">
          ${this.renderFieldSection((0,s.kg)("editor.stack.layer.width",i,"Width"),"",o,{w:null!==(p=y.width)&&void 0!==p?p:"auto"},[this.textField("w")],e=>r({width:e.detail.value.w}))}
          ${this.renderFieldSection((0,s.kg)("editor.stack.layer.height",i,"Height"),"",o,{h:null!==(u=y.height)&&void 0!==u?u:"auto"},[this.textField("h")],e=>r({height:e.detail.value.h}))}
        </div>

        ${this.renderSliderField((0,s.kg)("editor.stack.layer.opacity",i,"Opacity"),"",void 0!==y.opacity?Number(y.opacity):1,1,0,1,.05,e=>r({opacity:e}),"")}
        ${this.renderFieldSection((0,s.kg)("editor.stack.layer.z_index",i,"Z-index override"),(0,s.kg)("editor.stack.layer.z_desc",i,"Leave empty to use layer list order (bottom to top)."),o,{z:null!==(h=y.z_index_override)&&void 0!==h?h:""},[this.textField("z")],e=>{var t;const i=String(null!==(t=e.detail.value.z)&&void 0!==t?t:"").trim(),a=""===i?void 0:parseInt(i,10);r({z_index_override:Number.isFinite(a)?a:void 0})})}
      </div>
    `}getStyles(){return`\n      ${r.m.getSliderStyles()}\n      .stack-module-preview { box-sizing: border-box; }\n      .stack-preview-content { box-sizing: border-box; position: relative; }\n      .stack-preview-content[style*="--bg-filter"]::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        background-color: var(--bg-color, transparent);\n        background-image: var(--bg-image, none);\n        background-size: var(--bg-size, cover);\n        background-position: var(--bg-position, center);\n        background-repeat: var(--bg-repeat, no-repeat);\n        filter: var(--bg-filter);\n        border-radius: inherit;\n        z-index: -1;\n        pointer-events: none;\n      }\n      .stack-preview-content[style*="cursor: pointer"] .stack-layer-wrapper {\n        pointer-events: none !important;\n      }\n      .stack-preview-content[style*="cursor: pointer"] .stack-layer-child {\n        pointer-events: none !important;\n      }\n      .stack-preview-content[style*="cursor: pointer"] .stack-drag-handle {\n        pointer-events: auto !important;\n      }\n      .stack-layer-wrapper { box-sizing: border-box; }\n      .stack-layer-child { box-sizing: border-box; }\n      .stack-drag-handle {\n        position: absolute;\n        inset: 0;\n        z-index: 10000;\n        /* Non-selected handles act as click-to-select hotspots only. */\n        cursor: pointer;\n        touch-action: none;\n        box-sizing: border-box;\n        pointer-events: auto;\n      }\n      .stack-drag-handle.selected {\n        /* Only the selected layer is draggable. */\n        cursor: move;\n        outline: 2px dashed var(--primary-color);\n        outline-offset: -2px;\n      }\n      .stack-drag-handle.selected::after {\n        content: '';\n        position: absolute;\n        bottom: 4px;\n        right: 4px;\n        width: 10px;\n        height: 10px;\n        background: var(--primary-color);\n        border-radius: var(--uc-r-2, 2px);\n        opacity: 0.8;\n      }\n      /* The inner module rendered inside a stack layer should fully fill the\n         layer's child box. Without this, child modules that compute their own\n         small fixed dimensions (e.g. image module's default 200px height)\n         leave large empty space inside the layer. */\n      .stack-layer-child > * {\n        flex: 1 1 auto;\n        width: 100%;\n        height: 100%;\n        max-width: 100%;\n        max-height: 100%;\n        min-width: 0;\n        min-height: 0;\n      }\n      /* Inside an image module nested in a stack, the img should fill the\n         layer-child's available area while preserving its aspect ratio (the\n         image module's object-fit controls cover vs contain). */\n      .stack-layer-child .image-module-container,\n      .stack-layer-child .image-module-preview {\n        width: 100% !important;\n        height: 100% !important;\n        max-width: 100% !important;\n        max-height: 100% !important;\n      }\n      .stack-layer-child .image-module-preview > div {\n        width: 100% !important;\n        height: 100% !important;\n      }\n      .stack-layer-child .image-module-preview img {\n        width: 100% !important;\n        height: 100% !important;\n        max-width: 100% !important;\n        max-height: 100% !important;\n      }\n      /* Button modules hardcode several intermediate wrappers. Force the full\n         chain (animation wrapper → container → preview → button) to fill the\n         layer so height:100% on a layer/design size resolves against the\n         Stack Overlay's definite height (#132). */\n      .stack-layer-child .module-animation-wrapper,\n      .stack-layer-child .button-module-container,\n      .stack-layer-child .button-module-preview {\n        width: 100% !important;\n        height: 100% !important;\n        max-width: 100% !important;\n        max-height: 100% !important;\n        min-height: 0 !important;\n        box-sizing: border-box;\n      }\n      .stack-layer-child .button-module-preview {\n        display: flex !important;\n        align-items: stretch !important;\n      }\n      .stack-layer-child .ultra-button {\n        width: 100% !important;\n        height: 100% !important;\n        align-self: stretch;\n        box-sizing: border-box;\n      }\n    `}renderPreview(e,t,i,r){var n,c,l,p,u,v,m;const y=e;this._currentConfig=i,this._currentPreviewContext=r;const _=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",k=y,b=Object.assign(Object.assign({},k),k.design||{}),x=y.modules&&y.modules.length>0,f=b.background_filter&&"none"!==b.background_filter,w=f?{styles:{}}:(0,g.U9)({color:b.background_color,fallback:"transparent",image:this.getBackgroundImageCss(b,t),imageSize:b.background_size||"cover",imagePosition:b.background_position||"center",imageRepeat:b.background_repeat||"no-repeat"}),$=b.border_radius||k.border_radius||(void 0!==(null===(c=b.border)||void 0===c?void 0:c.radius)?b.border.radius:void 0)||(void 0!==(null===(l=k.border)||void 0===l?void 0:l.radius)?k.border.radius:void 0),S=!1!==y.clip_overflow,L=b.overflow,z=S||L&&"visible"!==L?L&&"visible"!==L?L:S||$&&"0"!==String($)&&"0px"!==String($)?"hidden":L||"visible":"visible",D=this.getPaddingCss(b),M=this.getMarginCss(b),I=(y.height||"").trim(),O=y.aspect_ratio||"16:9",P=!I&&"auto"!==O,j=!!I||P,C=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},D?{padding:D}:{padding:"0px"}),M?{margin:M}:{}),w.styles),{border:b.border_width||(null===(p=b.border)||void 0===p?void 0:p.width)||b.border_color||(null===(u=b.border)||void 0===u?void 0:u.color)||b.border_style&&"none"!==b.border_style||(null===(v=b.border)||void 0===v?void 0:v.style)&&"none"!==b.border.style?this.getBorderCss(b):"none",borderRadius:this._addPixelUnit(String($||""))||"0"}),j?{}:{position:b.position||(b.z_index,"relative")}),{zIndex:b.z_index||"auto"}),f?{isolation:"isolate"}:{}),j?{}:{width:b.width||"100%",height:b.height||void 0}),{maxWidth:b.max_width||void 0,minWidth:b.min_width||void 0,maxHeight:b.max_height||void 0,boxShadow:b.box_shadow||void 0,backdropFilter:b.backdrop_filter||void 0,clipPath:b.clip_path||void 0,display:"block",overflow:z,boxSizing:"border-box"});if(f){const e=this.getBackgroundImageCss(b,t);e&&"none"!==e&&(C["--bg-image"]=e),b.background_color&&(C["--bg-color"]=b.background_color),C["--bg-size"]=b.background_size||"cover",C["--bg-position"]=b.background_position||"center",C["--bg-repeat"]=b.background_repeat||"no-repeat",C["--bg-filter"]=b.background_filter,C.position="relative"}const F=null===(m=y.design)||void 0===m?void 0:m.css_variable_prefix;if(F){const e=(0,h.E)(F,y.design);Object.assign(C,e)}const W=this.createGestureHandlers(y.id,{tap_action:y.tap_action,hold_action:y.hold_action,double_tap_action:y.double_tap_action,entity:y.entity,module:y},t,i),E=y.tap_action&&"nothing"!==y.tap_action.action||y.hold_action&&"nothing"!==y.hold_action.action||y.double_tap_action&&"nothing"!==y.double_tap_action.action,q=this.getHoverEffectClass(e),T=this.buildDesignStyles(e,t),U=new Set(["border","borderRadius","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","background","backgroundColor","backgroundImage","backgroundSize","backgroundPosition","backgroundRepeat","boxShadow","backdropFilter","webkitBackdropFilter","clipPath","overflow","isolation","filter","margin","marginTop","marginBottom","marginLeft","marginRight"]),A=Object.fromEntries(Object.entries(T).filter(([e])=>!U.has(e))),B=this.buildStyleString(A),R=P?function(e){switch(e){case"16:9":default:return"56.25%";case"4:3":return"75%";case"3:2":return"66.6667%";case"1:1":return"100%";case"2:3":return"150%"}}(O):"0",H=I?`width:100%;position:relative;height:${I};`:P?"width:100%;position:relative;":"width:100%;position:relative;min-height:120px;",N=j?"position:absolute;inset:0;":"",Q=j?"":"min-height:120px;";return this.wrapWithAnimation(a.qy`
        <div class="stack-module-preview ${q}" style="${B}">
          <div class="stack-outer" style="${H}">
            ${P&&!I?a.qy`<div style="width:100%;padding-top:${R};pointer-events:none;"></div>`:""}
            <div
              class="stack-preview-content"
              style="${Q}${this.buildStyleString(C)};${N}cursor:${E?"pointer":"default"};${E?"pointer-events:auto;":""}"
              @pointerdown=${E?W.onPointerDown:null}
              @pointermove=${E?W.onPointerMove:null}
              @pointerup=${E?W.onPointerUp:null}
              @pointercancel=${E?W.onPointerCancel:null}
              @pointerleave=${E?W.onPointerLeave:null}
            >
              ${x?(()=>{var e;d.S.setHass(t);const n=null!==(e=y.modules)&&void 0!==e?e:[],c=n.filter(e=>{var t,i,a,o;const r=e,n=d.S.evaluateModuleVisibility(r),c=d.S.evaluateLogicProperties({logic_entity:null===(t=null==r?void 0:r.design)||void 0===t?void 0:t.logic_entity,logic_attribute:null===(i=null==r?void 0:r.design)||void 0===i?void 0:i.logic_attribute,logic_operator:null===(a=null==r?void 0:r.design)||void 0===a?void 0:a.logic_operator,logic_value:null===(o=null==r?void 0:r.design)||void 0===o?void 0:o.logic_value});return n&&c});return(0,o.u)(c,e=>e.id||e.type,(e,o)=>{const c=e.design||{},l=!!(c.transform_perspective||c.transform_rotate_x||c.transform_rotate_y||c.transform_rotate_z),d=n.indexOf(e),p=function(e,t,i){var a,o,r;const n=null!==(a=null==e?void 0:e.anchor)&&void 0!==a?a:"center",c=null!==(o=null==e?void 0:e.offset_x)&&void 0!==o?o:"0px",l=null!==(r=null==e?void 0:e.offset_y)&&void 0!==r?r:"0px",s=null==e?void 0:e.width,d=null==e?void 0:e.height,p=s&&"auto"!==s?s:"100%",u=d&&"auto"!==d?d:"auto",h=void 0!==(null==e?void 0:e.opacity)&&null!==(null==e?void 0:e.opacity)?Number(e.opacity):1,g=Number.isFinite(h)?Math.min(1,Math.max(0,h)):1,v=void 0!==(null==e?void 0:e.z_index_override)&&null!==(null==e?void 0:e.z_index_override)?e.z_index_override:t;let m="center",y="center",_="0px",k="0px",b="0px",x="0px";n.startsWith("top")?(y="flex-start",b=l):n.startsWith("bottom")?(y="flex-end",x=l):(y="center",b=l),n.endsWith("left")?(m="flex-start",_=c):n.endsWith("right")?(m="flex-end",k=c):(m="center",_=c);return{wrapper:["position:absolute","inset:0","display:flex",`align-items:${y}`,`justify-content:${m}`,`padding:${b} ${k} ${x} ${_}`,`opacity:${g}`,`z-index:${v}`,"pointer-events:none","box-sizing:border-box","overflow:visible"].join(";"),child:[`width:${p}`,`height:${u}`,(null==i?void 0:i.allowChildOverflow)?"max-width:none":"max-width:100%",(null==i?void 0:i.allowChildOverflow)?"max-height:none":"max-height:100%","min-width:0","min-height:0","pointer-events:auto","box-sizing:border-box",`overflow:${(null==i?void 0:i.allowChildOverflow)?"visible":"hidden"}`,"display:flex","align-items:stretch","justify-content:stretch"].join(";")}}(e.stack_layer,(d>=0?d:o)+1,{allowChildOverflow:l}),u="ha-preview"===r&&"function"==typeof this._stackDragUpdateFn&&d>=0,h=this._getStackSelectedLayerIndex(y.id)===d;return a.qy`
                          <div class="stack-layer-wrapper" style="${p.wrapper}">
                            <div class="stack-layer-child" style="${p.child}">
                              ${this._renderStackChild(e,t,k,i,r)}
                            </div>
                            ${u?a.qy`
                                  <div
                                    class="stack-drag-handle ${h?"selected":""}"
                                    title="${h?(0,s.kg)("editor.stack.layer.drag_hint",_,"Drag to move this layer"):(0,s.kg)("editor.stack.layer.select_hint",_,"Click to select this layer")}"
                                    @pointerdown=${t=>{const i=e.stack_layer;this._onStackLayerDragDown(t,d,y.id,i)}}
                                  ></div>
                                `:""}
                          </div>
                        `})})():a.qy`
                    <div
                      class="empty-layout-message"
                      style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--secondary-text-color);font-style:italic;text-align:center;padding:16px;"
                    >
                      <span style="font-size:14px;font-weight:500;"
                        >${(0,s.kg)("editor.stack.empty",_,"No layers yet")}</span
                      >
                      <small style="font-size:12px;opacity:0.8;"
                        >${(0,s.kg)("editor.stack.empty_hint",_,"Drag modules into this stack from the layout tree, or pick a Quick start preset")}</small
                      >
                    </div>
                  `}
            </div>
          </div>
        </div>
      `,e,t)}_applyStackPreset(e,t,i){const a=(0,c.oD)(),o=e=>Promise.all(e.map(e=>a.ensureModuleLoaded(e)));"hero"!==e?"camera_badge"!==e?"clock_weather"!==e?"media"===e&&o(["image","media_player"]).then(()=>{const e=a.getModule("image").createDefault(void 0,t),o=a.getModule("media_player").createDefault(void 0,t);e.stack_layer=k("image"),o.stack_layer=k("media_player"),i([e,o])}):o(["animated_clock","animated_weather"]).then(()=>{const e=a.getModule("animated_clock").createDefault(void 0,t),o=a.getModule("animated_weather").createDefault(void 0,t);e.stack_layer=k("animated_clock"),o.stack_layer=k("animated_weather"),i([e,o])}):o(["camera","icon"]).then(()=>{const e=a.getModule("camera").createDefault(void 0,t),o=a.getModule("icon").createDefault(void 0,t);e.stack_layer=k("camera"),o.stack_layer=k("icon"),i([e,o])}):o(["image","text"]).then(()=>{const e=a.getModule("image").createDefault(void 0,t),o=a.getModule("text").createDefault(void 0,t);o.text="Title",e.stack_layer=k("image"),o.stack_layer=k("text"),i([e,o])})}_renderStackChild(e,t,i,o,r){var l,s,h,g,m,y,_,k,b,x,f,w;const $=this.applyLayoutDesignToChild(e,i);d.S.setHass(t);const S=$,L=d.S.evaluateModuleVisibility(S),z=d.S.evaluateLogicProperties({logic_entity:null===(l=null==S?void 0:S.design)||void 0===l?void 0:l.logic_entity,logic_attribute:null===(s=null==S?void 0:S.design)||void 0===s?void 0:s.logic_attribute,logic_operator:null===(h=null==S?void 0:S.design)||void 0===h?void 0:h.logic_operator,logic_value:null===(g=null==S?void 0:S.design)||void 0===g?void 0:g.logic_value});if(!L||!z)return a.qy``;const D=(0,c.oD)().getModule($.type);if(!D)return u.E.renderModuleLoadingState($);const M=(null===(y=null===(m=D.metadata)||void 0===m?void 0:m.tags)||void 0===y?void 0:y.includes("pro"))||(null===(k=null===(_=D.metadata)||void 0===_?void 0:_.tags)||void 0===k?void 0:k.includes("premium"))||!1;let I=!1;const O=p.xd.checkIntegrationAuth(t);if("pro"===(null===(b=null==O?void 0:O.subscription)||void 0===b?void 0:b.tier)&&"active"===(null===(x=null==O?void 0:O.subscription)||void 0===x?void 0:x.status))I=!0;else if(p.xd.isAuthenticated()){const e=p.xd.getCurrentUser();"pro"===(null===(f=null==e?void 0:e.subscription)||void 0===f?void 0:f.tier)&&"active"===(null===(w=null==e?void 0:e.subscription)||void 0===w?void 0:w.status)&&(I=!0)}const P=M&&!I,j=(0,v.l8)($),C=D.renderPreview(j,t,o,r);return P?a.qy`
        <div class="pro-module-locked" style="position: relative;">
          ${C}
          <div
            class="pro-module-overlay"
            style="
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
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
              class="pro-module-message"
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
              <div style="font-size: 11px; font-weight: 600; line-height: 1.2;">Pro Module</div>
            </div>
          </div>
        </div>
      `:(0,n.vZ)($,t,C)}applyLayoutDesignToChild(e,t){const i=Object.assign({},e),a=e.design||{};return void 0!==a.margin_top||void 0!==a.margin_bottom||void 0!==a.margin_left||void 0!==a.margin_right||void 0!==e.margin_top||void 0!==e.margin_bottom||void 0!==e.margin_left||void 0!==e.margin_right||(i.margin_top="0",i.margin_bottom="0",i.margin_left="0",i.margin_right="0"),t.color&&(i.color=t.color),t.font_size&&(i.font_size=t.font_size),t.font_family&&(i.font_family=t.font_family),t.font_weight&&(i.font_weight=t.font_weight),t.text_align&&(i.text_align=t.text_align),t.line_height&&(i.line_height=t.line_height),t.letter_spacing&&(i.letter_spacing=t.letter_spacing),t.text_transform&&(i.text_transform=t.text_transform),t.font_style&&(i.font_style=t.font_style),t.white_space&&(i.white_space=t.white_space),t.text_shadow_h&&(i.text_shadow_h=t.text_shadow_h),t.text_shadow_v&&(i.text_shadow_v=t.text_shadow_v),t.text_shadow_blur&&(i.text_shadow_blur=t.text_shadow_blur),t.text_shadow_color&&(i.text_shadow_color=t.text_shadow_color),t.box_shadow_h&&(i.box_shadow_h=t.box_shadow_h),t.box_shadow_v&&(i.box_shadow_v=t.box_shadow_v),t.box_shadow_blur&&(i.box_shadow_blur=t.box_shadow_blur),t.box_shadow_spread&&(i.box_shadow_spread=t.box_shadow_spread),t.box_shadow_color&&(i.box_shadow_color=t.box_shadow_color),t.animation_type&&(i.animation_type=t.animation_type),t.animation_entity&&(i.animation_entity=t.animation_entity),t.animation_trigger_type&&(i.animation_trigger_type=t.animation_trigger_type),t.animation_attribute&&(i.animation_attribute=t.animation_attribute),t.animation_state&&(i.animation_state=t.animation_state),t.intro_animation&&(i.intro_animation=t.intro_animation),t.outro_animation&&(i.outro_animation=t.outro_animation),t.animation_duration&&(i.animation_duration=t.animation_duration),t.animation_delay&&(i.animation_delay=t.animation_delay),t.animation_timing&&(i.animation_timing=t.animation_timing),i}}}};