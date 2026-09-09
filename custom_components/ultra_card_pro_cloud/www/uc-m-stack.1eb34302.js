export const __webpack_esm_ids__=[8819];export const __webpack_esm_modules__={564(t,e,i){i.d(e,{UltraStackModule:()=>b});var a=i(2618),o=i(6214),r=i(7475),n=i(8414),c=i(8938),s=i(6478),l=i(230),d=i(378),p=i(2034),u=i(361),h=i(6477),g=i(5064);const v=[{anchor:"top-left",icon:"mdi:arrow-top-left",label:"Top left"},{anchor:"top-center",icon:"mdi:arrow-up",label:"Top center"},{anchor:"top-right",icon:"mdi:arrow-top-right",label:"Top right"},{anchor:"middle-left",icon:"mdi:arrow-left",label:"Middle left"},{anchor:"center",icon:"mdi:circle-medium",label:"Center"},{anchor:"middle-right",icon:"mdi:arrow-right",label:"Middle right"},{anchor:"bottom-left",icon:"mdi:arrow-bottom-left",label:"Bottom left"},{anchor:"bottom-center",icon:"mdi:arrow-down",label:"Bottom center"},{anchor:"bottom-right",icon:"mdi:arrow-bottom-right",label:"Bottom right"}],m=[{value:"16:9",icon:"mdi:rectangle-outline",label:"16 : 9"},{value:"4:3",icon:"mdi:rectangle-outline",label:"4 : 3"},{value:"3:2",icon:"mdi:rectangle-outline",label:"3 : 2"},{value:"1:1",icon:"mdi:square-outline",label:"1 : 1"},{value:"2:3",icon:"mdi:crop-portrait",label:"2 : 3"},{value:"auto",icon:"mdi:arrow-expand-vertical",label:"Auto"}],y=[{id:"hero",icon:"mdi:image-text",label:"Hero",description:"Full image background with title overlay"},{id:"camera_badge",icon:"mdi:cctv",label:"Camera + badge",description:"Camera feed with corner status icon"},{id:"clock_weather",icon:"mdi:weather-sunny-alert",label:"Clock + weather",description:"Side-by-side ambient widgets"},{id:"media",icon:"mdi:music",label:"Media",description:"Album art with media controls"}];function _(t){return["image","video_bg","camera","background","living_canvas","dynamic_weather"].includes(t)?{anchor:"center",width:"100%",height:"auto",offset_x:"0px",offset_y:"0px"}:{anchor:"center",width:"auto",height:"auto",offset_x:"0px",offset_y:"0px"}}class b extends r.m{constructor(){super(...arguments),this.metadata={type:"stack",title:"Stack Overlay",description:"Layer modules on top of each other with anchor-based absolute positioning",author:"WJD Designs",version:"1.0.0",icon:"mdi:layers",category:"layout",tags:["layout","stack","overlay","absolute","layer","z-index","anchor","hero"]},this._stackSelectedLayerIndices=new Map,this._stackLayerDrag=null,this._stackLayerDragWindowMove=t=>{const e=this._stackLayerDrag;if(!e||t.pointerId!==e.pointerId)return;const i=e.previewEl;if(!i.isConnected)return;const a=i.getBoundingClientRect();if(a.width<1||a.height<1)return;const o=Math.max(0,Math.min(a.width,t.clientX-a.left)),r=Math.max(0,Math.min(a.height,t.clientY-a.top)),n=`${Math.round(o)}px`,c=`${Math.round(r)}px`;e.pending={offset_x:n,offset_y:c},this._applyStackLayerDragLivePreview(e,n,c)},this._stackLayerDragWindowEnd=t=>{const e=this._stackLayerDrag;e&&t.pointerId===e.pointerId&&(null!==e.rafId&&(cancelAnimationFrame(e.rafId),e.rafId=null),e.pending&&e.updateFn(e.moduleIndex,this._buildStackDragCommitPatch(e)),this._stackLayerDrag=null,this._detachStackLayerDragWindowListeners())}}_getStackSelectedLayerIndex(t){var e;return null!==(e=this._stackSelectedLayerIndices.get(t))&&void 0!==e?e:0}_setStackSelectedLayerIndex(t,e){this._stackSelectedLayerIndices.set(t,e)}_buildStackDragCommitPatch(t){const e=t.pending,i={anchor:t.anchor,offset_x:e.offset_x,offset_y:e.offset_y};if(t.sizeToContent&&(i.width="fit-content",i.height="auto"),"top-left"===t.anchor)return i;const a=this._findStackLayerWrapperEl(t.previewEl,t.moduleIndex),o=null==a?void 0:a.querySelector(":scope > .stack-layer-child");if(!a||!o)return i.anchor="top-left",i;a.style.alignItems="flex-start",a.style.justifyContent="flex-start",a.style.padding=`${e.offset_y} 0px 0px ${e.offset_x}`,t.sizeToContent&&(o.style.width="fit-content",o.style.height="auto");const r=a.getBoundingClientRect(),n=o.getBoundingClientRect();if(r.width<1||r.height<1)return i.anchor="top-left",i;let c,s;return c=t.anchor.endsWith("left")?n.left-r.left:t.anchor.endsWith("right")?r.right-n.right:2*(n.left+n.width/2-r.left)-r.width,s=t.anchor.startsWith("top")?n.top-r.top:t.anchor.startsWith("bottom")?r.bottom-n.bottom:2*(n.top+n.height/2-r.top)-r.height,i.offset_x=`${Math.max(0,Math.round(c))}px`,i.offset_y=`${Math.max(0,Math.round(s))}px`,i}_applyStackLayerDragLivePreview(t,e,i){null===t.rafId&&(t.rafId=requestAnimationFrame(()=>{t.rafId=null;const a=this._findStackLayerWrapperEl(t.previewEl,t.moduleIndex);if(a&&(a.style.alignItems="flex-start",a.style.justifyContent="flex-start",a.style.padding=`${i} 0px 0px ${e}`,t.sizeToContent)){const t=a.querySelector(":scope > .stack-layer-child");t&&(t.style.width="fit-content",t.style.height="auto")}}))}_findStackLayerWrapperEl(t,e){var i;return null!==(i=t.querySelectorAll(":scope > .stack-layer-wrapper")[e])&&void 0!==i?i:null}_attachStackLayerDragWindowListeners(){window.addEventListener("pointermove",this._stackLayerDragWindowMove,{capture:!0}),window.addEventListener("pointerup",this._stackLayerDragWindowEnd,{capture:!0}),window.addEventListener("pointercancel",this._stackLayerDragWindowEnd,{capture:!0})}_detachStackLayerDragWindowListeners(){window.removeEventListener("pointermove",this._stackLayerDragWindowMove,{capture:!0}),window.removeEventListener("pointerup",this._stackLayerDragWindowEnd,{capture:!0}),window.removeEventListener("pointercancel",this._stackLayerDragWindowEnd,{capture:!0})}createDefault(t,e){return{id:t||this.generateId("stack"),type:"stack",modules:[],aspect_ratio:"16:9",clip_overflow:!0,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(t){var e;const i=t,a=[...super.validate(t).errors];if(null===(e=i.modules)||void 0===e?void 0:e.length)for(const t of i.modules)if("stack"===t.type){a.push("Stack Overlay cannot contain another Stack Overlay module.");break}return{valid:0===a.length,errors:a}}_onStackLayerDragDown(t,e,i,a){var o;if("ha-preview"!==this._currentPreviewContext)return;const r=this._stackDragUpdateFn;if(!r)return;const n=t.currentTarget;if(!n)return;const c=n.closest(".stack-preview-content"),s=null==a?void 0:a.width,l=!s||"auto"===s;if(!c)return;const d=this._stackDragSelectFn;if(this._getStackSelectedLayerIndex(i)!==e)return t.stopPropagation(),void(d&&d(e));t.stopPropagation(),t.preventDefault(),d&&d(e),this._stackLayerDrag&&this._detachStackLayerDragWindowListeners(),this._stackLayerDrag={pointerId:t.pointerId,moduleIndex:e,previewEl:c,pending:null,rafId:null,sizeToContent:l,anchor:null!==(o=null==a?void 0:a.anchor)&&void 0!==o?o:"center",updateFn:r},this._attachStackLayerDragWindowListeners()}renderLogicTab(t,e,i,a){return c.X.render(t,e,t=>a(t))}renderGeneralTab(t,e,i,o){var r;const n=t,c=(null===(r=null==e?void 0:e.locale)||void 0===r?void 0:r.language)||"en",l=n.modules||[];let d=this._getStackSelectedLayerIndex(n.id);d>=l.length&&(d=Math.max(0,l.length-1),this._setStackSelectedLayerIndex(n.id,d));const p=l[d],u=t=>{o({modules:t}),this.triggerPreviewUpdate()};this._stackDragUpdateFn=(t,e)=>{const i=l.map((i,a)=>a===t?Object.assign(Object.assign({},i),{stack_layer:Object.assign(Object.assign({},i.stack_layer),e)}):i);u(i)},this._stackDragSelectFn=t=>{this._setStackSelectedLayerIndex(n.id,t),this.triggerPreviewUpdate(!0)};const h=n.aspect_ratio||"16:9";return a.qy`
      ${this.injectUcFormStyles()}
      ${this._renderStackEditorStyles()}

      <div class="module-general-settings">
        ${0===l.length?this._renderPresetsSection(c,t=>this._applyStackPreset(t,e,t=>{u(t),this._setStackSelectedLayerIndex(n.id,0)})):""}

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
            ${m.map(t=>a.qy`
                <button
                  type="button"
                  class="uc-stack-chip ${h===t.value?"active":""}"
                  data-uc-role="pane"
                  @click=${()=>{o({aspect_ratio:t.value}),this.triggerPreviewUpdate()}}
                >
                  <ha-icon icon="${t.icon}"></ha-icon>
                  <span>${t.label}</span>
                </button>
              `)}
          </div>

          ${this.renderFieldSection((0,s.kg)("editor.stack.height",c,"Height (optional)"),(0,s.kg)("editor.stack.height_desc",c,"When set (e.g. 280px, 40vh), overrides aspect ratio height."),e,{h:n.height||""},[this.textField("h")],t=>{const e=(t.detail.value.h||"").trim();o({height:e||void 0}),this.triggerPreviewUpdate()})}
          ${this.renderFieldSection((0,s.kg)("editor.stack.clip",c,"Clip overflow"),(0,s.kg)("editor.stack.clip_desc",c,"Hide content outside rounded bounds."),e,{clip:!1!==n.clip_overflow},[this.booleanField("clip")],t=>{o({clip_overflow:t.detail.value.clip}),this.triggerPreviewUpdate()})}
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
                  ${l.map((t,e)=>this._renderLayerRow(t,e,l,u,c,n.id))}
                </div>
              `}
        </div>

        <!-- Layer position (only when something is selected) -->
        ${p?this._renderLayerPositionSection(p,d,c,e,t=>{if(!p)return;const e=l.map((e,i)=>i===d?Object.assign(Object.assign({},e),{stack_layer:Object.assign(Object.assign({},e.stack_layer),t)}):e);u(e)}):""}
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
    `}_renderPresetsSection(t,e){return a.qy`
      <div class="uc-stack-section">
        <div class="uc-stack-section-title">
          ${(0,s.kg)("editor.stack.presets.title",t,"Quick start")}
        </div>
        <div class="uc-stack-section-desc">
          ${(0,s.kg)("editor.stack.presets.desc",t,"Pick a starting point — you can edit, reorder, and remove layers afterwards.")}
        </div>
        <div class="uc-stack-preset-grid">
          ${y.map(i=>a.qy`
              <button
                type="button"
                class="uc-stack-preset-card"
                data-uc-role="pane"
                @click=${()=>e(i.id)}
              >
                <ha-icon icon="${i.icon}"></ha-icon>
                <div class="uc-stack-preset-title">
                  ${(0,s.kg)(`editor.stack.preset.${i.id}`,t,i.label)}
                </div>
                <div class="uc-stack-preset-desc">
                  ${(0,s.kg)(`editor.stack.preset.${i.id}_desc`,t,i.description)}
                </div>
              </button>
            `)}
        </div>
      </div>
    `}_renderLayerRow(t,e,i,o,r,c){var l;const d=(0,n.oD)().getModuleMetadata(t.type),p=(null==d?void 0:d.title)||t.type,u="never"===t.display_mode,h=this._getStackSelectedLayerIndex(c)===e,g=`${((null===(l=t.stack_layer)||void 0===l?void 0:l.anchor)||"center").replace("-"," ")} · ${(0,s.kg)("editor.stack.layer_z",r,"layer")} ${e+1}`;return a.qy`
      <div
        class="uc-stack-layer-row ${h?"selected":""} ${u?"hidden":""}"
        data-uc-role="pane"
        @click=${()=>{this._setStackSelectedLayerIndex(c,e),this.triggerPreviewUpdate()}}
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
            @click=${t=>{t.stopPropagation();const a=i.map((t,i)=>i===e?Object.assign(Object.assign({},t),{display_mode:"never"===t.display_mode?"always":"never"}):t);o(a)}}
          >
            <ha-icon icon="${u?"mdi:eye-off":"mdi:eye"}"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            .label=${(0,s.kg)("editor.stack.layer.up",r,"Move up")}
            ?disabled=${0===e}
            @click=${t=>{if(t.stopPropagation(),e<=0)return;const a=[...i];[a[e-1],a[e]]=[a[e],a[e-1]],this._setStackSelectedLayerIndex(c,e-1),o(a)}}
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            .label=${(0,s.kg)("editor.stack.layer.down",r,"Move down")}
            ?disabled=${e>=i.length-1}
            @click=${t=>{if(t.stopPropagation(),e>=i.length-1)return;const a=[...i];[a[e+1],a[e]]=[a[e],a[e+1]],this._setStackSelectedLayerIndex(c,e+1),o(a)}}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            class="delete"
            .label=${(0,s.kg)("editor.stack.layer.delete",r,"Remove layer")}
            @click=${t=>{t.stopPropagation();const a=i.filter((t,i)=>i!==e);this._setStackSelectedLayerIndex(c,Math.max(0,e-1)),o(a)}}
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}_renderLayerPositionSection(t,e,i,o,r){var c,l,d,p,u;const h=(0,n.oD)().getModuleMetadata(t.type),g=(null==h?void 0:h.title)||t.type,m=t.stack_layer||{},y=m.anchor||"center";return a.qy`
      <div class="uc-stack-section">
        <div class="uc-stack-section-title">
          ${(0,s.kg)("editor.stack.layer.position.title",i,"Layer position")}
        </div>
        <div class="uc-stack-section-desc">
          ${(0,s.kg)("editor.stack.layer.position.desc",i,"Editing layer")} ${e+1} ·
          ${g}
        </div>

        <div class="uc-stack-field-label">
          ${(0,s.kg)("editor.stack.layer.anchor",i,"Anchor point")}
        </div>
        <div class="uc-stack-anchor-grid">
          ${v.map(t=>a.qy`
              <button
                type="button"
                class="uc-stack-anchor-cell ${y===t.anchor?"active":""}"
                data-uc-role="pane"
                title="${(0,s.kg)(`editor.stack.anchor.${t.anchor}`,i,t.label)}"
                @click=${()=>r({anchor:t.anchor})}
              >
                <ha-icon icon="${t.icon}"></ha-icon>
              </button>
            `)}
        </div>

        <div class="uc-stack-field-label">
          ${(0,s.kg)("editor.stack.layer.offset",i,"Offset from anchor")}
        </div>
        <div class="uc-stack-two-col">
          ${this.renderFieldSection((0,s.kg)("editor.stack.layer.offset_x",i,"Offset X"),"",o,{ox:null!==(c=m.offset_x)&&void 0!==c?c:"0px"},[this.textField("ox")],t=>r({offset_x:t.detail.value.ox}))}
          ${this.renderFieldSection((0,s.kg)("editor.stack.layer.offset_y",i,"Offset Y"),"",o,{oy:null!==(l=m.offset_y)&&void 0!==l?l:"0px"},[this.textField("oy")],t=>r({offset_y:t.detail.value.oy}))}
        </div>

        <div class="uc-stack-field-label" style="margin-top:8px;">
          ${(0,s.kg)("editor.stack.layer.size",i,"Size")}
        </div>
        <div class="uc-stack-two-col">
          ${this.renderFieldSection((0,s.kg)("editor.stack.layer.width",i,"Width"),"",o,{w:null!==(d=m.width)&&void 0!==d?d:"auto"},[this.textField("w")],t=>r({width:t.detail.value.w}))}
          ${this.renderFieldSection((0,s.kg)("editor.stack.layer.height",i,"Height"),"",o,{h:null!==(p=m.height)&&void 0!==p?p:"auto"},[this.textField("h")],t=>r({height:t.detail.value.h}))}
        </div>

        ${this.renderSliderField((0,s.kg)("editor.stack.layer.opacity",i,"Opacity"),"",void 0!==m.opacity?Number(m.opacity):1,1,0,1,.05,t=>r({opacity:t}),"")}
        ${this.renderFieldSection((0,s.kg)("editor.stack.layer.z_index",i,"Z-index override"),(0,s.kg)("editor.stack.layer.z_desc",i,"Leave empty to use layer list order (bottom to top)."),o,{z:null!==(u=m.z_index_override)&&void 0!==u?u:""},[this.textField("z")],t=>{var e;const i=String(null!==(e=t.detail.value.z)&&void 0!==e?e:"").trim(),a=""===i?void 0:parseInt(i,10);r({z_index_override:Number.isFinite(a)?a:void 0})})}
      </div>
    `}getStyles(){return`\n      ${r.m.getSliderStyles()}\n      .stack-module-preview { box-sizing: border-box; }\n      .stack-preview-content { box-sizing: border-box; position: relative; }\n      .stack-preview-content[style*="--bg-filter"]::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        background-color: var(--bg-color, transparent);\n        background-image: var(--bg-image, none);\n        background-size: var(--bg-size, cover);\n        background-position: var(--bg-position, center);\n        background-repeat: var(--bg-repeat, no-repeat);\n        filter: var(--bg-filter);\n        border-radius: inherit;\n        z-index: -1;\n        pointer-events: none;\n      }\n      .stack-preview-content[style*="cursor: pointer"] .stack-layer-wrapper {\n        pointer-events: none !important;\n      }\n      .stack-preview-content[style*="cursor: pointer"] .stack-layer-child {\n        pointer-events: none !important;\n      }\n      .stack-preview-content[style*="cursor: pointer"] .stack-drag-handle {\n        pointer-events: auto !important;\n      }\n      .stack-layer-wrapper { box-sizing: border-box; }\n      .stack-layer-child { box-sizing: border-box; }\n      .stack-drag-handle {\n        position: absolute;\n        inset: 0;\n        z-index: 10000;\n        /* Non-selected handles act as click-to-select hotspots only. */\n        cursor: pointer;\n        touch-action: none;\n        box-sizing: border-box;\n        pointer-events: auto;\n      }\n      .stack-drag-handle.selected {\n        /* Only the selected layer is draggable. */\n        cursor: move;\n        outline: 2px dashed var(--primary-color);\n        outline-offset: -2px;\n      }\n      .stack-drag-handle.selected::after {\n        content: '';\n        position: absolute;\n        bottom: 4px;\n        right: 4px;\n        width: 10px;\n        height: 10px;\n        background: var(--primary-color);\n        border-radius: var(--uc-r-2, 2px);\n        opacity: 0.8;\n      }\n      /* The inner module rendered inside a stack layer should fully fill the\n         layer's child box. Without this, child modules that compute their own\n         small fixed dimensions (e.g. image module's default 200px height)\n         leave large empty space inside the layer. */\n      .stack-layer-child > * {\n        flex: 1 1 auto;\n        width: 100%;\n        height: 100%;\n        max-width: 100%;\n        max-height: 100%;\n        min-width: 0;\n        min-height: 0;\n      }\n      /* Inside an image module nested in a stack, the img should fill the\n         layer-child's available area while preserving its aspect ratio (the\n         image module's object-fit controls cover vs contain). */\n      .stack-layer-child .image-module-container,\n      .stack-layer-child .image-module-preview {\n        width: 100% !important;\n        height: 100% !important;\n        max-width: 100% !important;\n        max-height: 100% !important;\n      }\n      .stack-layer-child .image-module-preview > div {\n        width: 100% !important;\n        height: 100% !important;\n      }\n      .stack-layer-child .image-module-preview img {\n        width: 100% !important;\n        height: 100% !important;\n        max-width: 100% !important;\n        max-height: 100% !important;\n      }\n      /* Button modules hardcode several intermediate wrappers. Force the full\n         chain (animation wrapper → container → preview → button) to fill the\n         layer so height:100% on a layer/design size resolves against the\n         Stack Overlay's definite height (#132). */\n      .stack-layer-child .module-animation-wrapper,\n      .stack-layer-child .button-module-container,\n      .stack-layer-child .button-module-preview {\n        width: 100% !important;\n        height: 100% !important;\n        max-width: 100% !important;\n        max-height: 100% !important;\n        min-height: 0 !important;\n        box-sizing: border-box;\n      }\n      .stack-layer-child .button-module-preview {\n        display: flex !important;\n        align-items: stretch !important;\n      }\n      .stack-layer-child .ultra-button {\n        width: 100% !important;\n        height: 100% !important;\n        align-self: stretch;\n        box-sizing: border-box;\n      }\n    `}renderPreview(t,e,i,r){var n,c,d,p,g,v,m;const y=t;this._currentConfig=i,this._currentPreviewContext=r;const _=(null===(n=null==e?void 0:e.locale)||void 0===n?void 0:n.language)||"en",b=y,k=Object.assign(Object.assign({},b),b.design||{}),x=y.modules&&y.modules.length>0,f=k.background_filter&&"none"!==k.background_filter,w=f?{styles:{}}:(0,h.U9)({color:k.background_color,fallback:"transparent",image:this.getBackgroundImageCss(k,e),imageSize:k.background_size||"cover",imagePosition:k.background_position||"center",imageRepeat:k.background_repeat||"no-repeat"}),$=k.border_radius||b.border_radius||(void 0!==(null===(c=k.border)||void 0===c?void 0:c.radius)?k.border.radius:void 0)||(void 0!==(null===(d=b.border)||void 0===d?void 0:d.radius)?b.border.radius:void 0),S=!1!==y.clip_overflow,L=k.overflow,z=S||L&&"visible"!==L?L&&"visible"!==L?L:S||$&&"0"!==String($)&&"0px"!==String($)?"hidden":L||"visible":"visible",D=this.getPaddingCss(k),M=this.getMarginCss(k),I=(y.height||"").trim(),P=y.aspect_ratio||"16:9",C=!I&&"auto"!==P,O=!!I||C,j=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},D?{padding:D}:{padding:"0px"}),M?{margin:M}:{}),w.styles),{border:k.border_width||(null===(p=k.border)||void 0===p?void 0:p.width)||k.border_color||(null===(g=k.border)||void 0===g?void 0:g.color)||k.border_style&&"none"!==k.border_style||(null===(v=k.border)||void 0===v?void 0:v.style)&&"none"!==k.border.style?this.getBorderCss(k):"none",borderRadius:this._addPixelUnit(String($||""))||"0"}),O?{}:{position:k.position||(k.z_index,"relative")}),{zIndex:k.z_index||"auto"}),f?{isolation:"isolate"}:{}),O?{}:{width:k.width||"100%",height:k.height||void 0}),{maxWidth:k.max_width||void 0,minWidth:k.min_width||void 0,maxHeight:k.max_height||void 0,boxShadow:k.box_shadow||void 0,backdropFilter:k.backdrop_filter||void 0,clipPath:k.clip_path||void 0,display:"block",overflow:z,boxSizing:"border-box"});if(f){const t=this.getBackgroundImageCss(k,e);t&&"none"!==t&&(j["--bg-image"]=t),k.background_color&&(j["--bg-color"]=k.background_color),j["--bg-size"]=k.background_size||"cover",j["--bg-position"]=k.background_position||"center",j["--bg-repeat"]=k.background_repeat||"no-repeat",j["--bg-filter"]=k.background_filter,j.position="relative"}const F=null===(m=y.design)||void 0===m?void 0:m.css_variable_prefix;if(F){const t=(0,u.E)(F,y.design);Object.assign(j,t)}const W=this.createGestureHandlers(y.id,{tap_action:y.tap_action,hold_action:y.hold_action,double_tap_action:y.double_tap_action,entity:y.entity,module:y},e,i),E=y.tap_action&&"nothing"!==y.tap_action.action||y.hold_action&&"nothing"!==y.hold_action.action||y.double_tap_action&&"nothing"!==y.double_tap_action.action,q=this.getHoverEffectClass(t),T=this.buildDesignStyles(t,e),U=new Set(["border","borderRadius","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","background","backgroundColor","backgroundImage","backgroundSize","backgroundPosition","backgroundRepeat","boxShadow","backdropFilter","webkitBackdropFilter","clipPath","overflow","isolation","filter","margin","marginTop","marginBottom","marginLeft","marginRight"]),A=Object.fromEntries(Object.entries(T).filter(([t])=>!U.has(t))),B=this.buildStyleString(A),R=C?function(t){switch(t){case"16:9":default:return"56.25%";case"4:3":return"75%";case"3:2":return"66.6667%";case"1:1":return"100%";case"2:3":return"150%"}}(P):"0",H=I?`width:100%;position:relative;height:${I};`:C?"width:100%;position:relative;":"width:100%;position:relative;min-height:120px;",N=O?"position:absolute;inset:0;":"",Q=O?"":"min-height:120px;";return this.wrapWithAnimation(a.qy`
        <div class="stack-module-preview ${q}" style="${B}">
          <div class="stack-outer" style="${H}">
            ${C&&!I?a.qy`<div style="width:100%;padding-top:${R};pointer-events:none;"></div>`:""}
            <div
              class="stack-preview-content"
              style="${Q}${this.buildStyleString(j)};${N}cursor:${E?"pointer":"default"};${E?"pointer-events:auto;":""}"
              @pointerdown=${E?W.onPointerDown:null}
              @pointermove=${E?W.onPointerMove:null}
              @pointerup=${E?W.onPointerUp:null}
              @pointercancel=${E?W.onPointerCancel:null}
              @pointerleave=${E?W.onPointerLeave:null}
            >
              ${x?(()=>{var t;l.S.setHass(e);const n=null!==(t=y.modules)&&void 0!==t?t:[],c=n.filter(t=>{var e,i,a,o;const r=t,n=l.S.evaluateModuleVisibility(r),c=l.S.evaluateLogicProperties({logic_entity:null===(e=null==r?void 0:r.design)||void 0===e?void 0:e.logic_entity,logic_attribute:null===(i=null==r?void 0:r.design)||void 0===i?void 0:i.logic_attribute,logic_operator:null===(a=null==r?void 0:r.design)||void 0===a?void 0:a.logic_operator,logic_value:null===(o=null==r?void 0:r.design)||void 0===o?void 0:o.logic_value});return n&&c});return(0,o.u)(c,t=>t.id||t.type,(t,o)=>{const c=t.design||{},l=!!(c.transform_perspective||c.transform_rotate_x||c.transform_rotate_y||c.transform_rotate_z),d=n.indexOf(t),p=function(t,e,i){var a,o,r;const n=null!==(a=null==t?void 0:t.anchor)&&void 0!==a?a:"center",c=null!==(o=null==t?void 0:t.offset_x)&&void 0!==o?o:"0px",s=null!==(r=null==t?void 0:t.offset_y)&&void 0!==r?r:"0px",l=null==t?void 0:t.width,d=null==t?void 0:t.height,p=l&&"auto"!==l?l:"100%",u=d&&"auto"!==d?d:"auto",h=void 0!==(null==t?void 0:t.opacity)&&null!==(null==t?void 0:t.opacity)?Number(t.opacity):1,g=Number.isFinite(h)?Math.min(1,Math.max(0,h)):1,v=void 0!==(null==t?void 0:t.z_index_override)&&null!==(null==t?void 0:t.z_index_override)?t.z_index_override:e;let m="center",y="center",_="0px",b="0px",k="0px",x="0px";n.startsWith("top")?(y="flex-start",k=s):n.startsWith("bottom")?(y="flex-end",x=s):(y="center",k=s),n.endsWith("left")?(m="flex-start",_=c):n.endsWith("right")?(m="flex-end",b=c):(m="center",_=c);return{wrapper:["position:absolute","inset:0","display:flex",`align-items:${y}`,`justify-content:${m}`,`padding:${k} ${b} ${x} ${_}`,`opacity:${g}`,`z-index:${v}`,"pointer-events:none","box-sizing:border-box","overflow:visible"].join(";"),child:[`width:${p}`,`height:${u}`,(null==i?void 0:i.allowChildOverflow)?"max-width:none":"max-width:100%",(null==i?void 0:i.allowChildOverflow)?"max-height:none":"max-height:100%","min-width:0","min-height:0","pointer-events:auto","box-sizing:border-box",`overflow:${(null==i?void 0:i.allowChildOverflow)?"visible":"hidden"}`,"display:flex","align-items:stretch","justify-content:stretch"].join(";")}}(t.stack_layer,(d>=0?d:o)+1,{allowChildOverflow:l}),u="ha-preview"===r&&"function"==typeof this._stackDragUpdateFn&&d>=0,h=this._getStackSelectedLayerIndex(y.id)===d;return a.qy`
                          <div class="stack-layer-wrapper" style="${p.wrapper}">
                            <div class="stack-layer-child" style="${p.child}">
                              ${this._renderStackChild(t,e,b,i,r)}
                            </div>
                            ${u?a.qy`
                                  <div
                                    class="stack-drag-handle ${h?"selected":""}"
                                    title="${h?(0,s.kg)("editor.stack.layer.drag_hint",_,"Drag to move this layer"):(0,s.kg)("editor.stack.layer.select_hint",_,"Click to select this layer")}"
                                    @pointerdown=${e=>{const i=t.stack_layer;this._onStackLayerDragDown(e,d,y.id,i)}}
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
      `,t,e)}_applyStackPreset(t,e,i){const a=(0,n.oD)(),o=t=>Promise.all(t.map(t=>a.ensureModuleLoaded(t)));"hero"!==t?"camera_badge"!==t?"clock_weather"!==t?"media"===t&&o(["image","media_player"]).then(()=>{const t=a.getModule("image").createDefault(void 0,e),o=a.getModule("media_player").createDefault(void 0,e);t.stack_layer=_("image"),o.stack_layer=_("media_player"),i([t,o])}):o(["animated_clock","animated_weather"]).then(()=>{const t=a.getModule("animated_clock").createDefault(void 0,e),o=a.getModule("animated_weather").createDefault(void 0,e);t.stack_layer=_("animated_clock"),o.stack_layer=_("animated_weather"),i([t,o])}):o(["camera","icon"]).then(()=>{const t=a.getModule("camera").createDefault(void 0,e),o=a.getModule("icon").createDefault(void 0,e);t.stack_layer=_("camera"),o.stack_layer=_("icon"),i([t,o])}):o(["image","text"]).then(()=>{const t=a.getModule("image").createDefault(void 0,e),o=a.getModule("text").createDefault(void 0,e);o.text="Title",t.stack_layer=_("image"),o.stack_layer=_("text"),i([t,o])})}_renderStackChild(t,e,i,o,r){var c,s,u,h,v,m,y,_,b,k,x,f,w,$,S,L,z,D,M,I;const P=this.applyLayoutDesignToChild(t,i);l.S.setHass(e);const C=P,O=l.S.evaluateModuleVisibility(C),j=l.S.evaluateLogicProperties({logic_entity:null===(c=null==C?void 0:C.design)||void 0===c?void 0:c.logic_entity,logic_attribute:null===(s=null==C?void 0:C.design)||void 0===s?void 0:s.logic_attribute,logic_operator:null===(u=null==C?void 0:C.design)||void 0===u?void 0:u.logic_operator,logic_value:null===(h=null==C?void 0:C.design)||void 0===h?void 0:h.logic_value});if(!O||!j)return a.qy``;const F=(0,n.oD)().getModule(P.type);if(!F)return p.E.renderModuleLoadingState(P);const W=(null===(m=null===(v=F.metadata)||void 0===v?void 0:v.tags)||void 0===m?void 0:m.includes("pro"))||(null===(_=null===(y=F.metadata)||void 0===y?void 0:y.tags)||void 0===_?void 0:_.includes("premium"))||!1;let E=!1;const q=d.xd.checkIntegrationAuth(e);if("pro"===(null===(b=null==q?void 0:q.subscription)||void 0===b?void 0:b.tier)&&"active"===(null===(k=null==q?void 0:q.subscription)||void 0===k?void 0:k.status))E=!0;else if(d.xd.isAuthenticated()){const t=d.xd.getCurrentUser();"pro"===(null===(x=null==t?void 0:t.subscription)||void 0===x?void 0:x.tier)&&"active"===(null===(f=null==t?void 0:t.subscription)||void 0===f?void 0:f.status)&&(E=!0)}const T=W&&!E,U=(0,g.l8)(P),A=F.renderPreview(U,e,o,r);if(T)return a.qy`
        <div class="pro-module-locked" style="position: relative;">
          ${A}
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
      `;const B=P,R=B.animation_type||(null===(w=B.design)||void 0===w?void 0:w.animation_type);if(R&&"none"!==R){const t=B.animation_duration||(null===($=B.design)||void 0===$?void 0:$.animation_duration)||"2s",i=B.animation_delay||(null===(S=B.design)||void 0===S?void 0:S.animation_delay)||"0s",o=B.animation_timing||(null===(L=B.design)||void 0===L?void 0:L.animation_timing)||"ease",r=B.animation_entity||(null===(z=B.design)||void 0===z?void 0:z.animation_entity),n=B.animation_trigger_type||(null===(D=B.design)||void 0===D?void 0:D.animation_trigger_type)||"state",c=B.animation_attribute||(null===(M=B.design)||void 0===M?void 0:M.animation_attribute),s=B.animation_state||(null===(I=B.design)||void 0===I?void 0:I.animation_state);let l=!1;if(r){if(s&&e&&e.states[r]){const t=e.states[r];l="attribute"===n&&c?String(t.attributes[c])===s:t.state===s}}else l=!0;if(l)return a.qy`
          <div
            class="module-animation-wrapper animation-${R}"
            style="
              --animation-duration: ${t};
              --animation-delay: ${i};
              --animation-timing: ${o};
            "
          >
            ${A}
          </div>
        `}return A}applyLayoutDesignToChild(t,e){const i=Object.assign({},t),a=t.design||{};return void 0!==a.margin_top||void 0!==a.margin_bottom||void 0!==a.margin_left||void 0!==a.margin_right||void 0!==t.margin_top||void 0!==t.margin_bottom||void 0!==t.margin_left||void 0!==t.margin_right||(i.margin_top="0",i.margin_bottom="0",i.margin_left="0",i.margin_right="0"),e.color&&(i.color=e.color),e.font_size&&(i.font_size=e.font_size),e.font_family&&(i.font_family=e.font_family),e.font_weight&&(i.font_weight=e.font_weight),e.text_align&&(i.text_align=e.text_align),e.line_height&&(i.line_height=e.line_height),e.letter_spacing&&(i.letter_spacing=e.letter_spacing),e.text_transform&&(i.text_transform=e.text_transform),e.font_style&&(i.font_style=e.font_style),e.white_space&&(i.white_space=e.white_space),e.text_shadow_h&&(i.text_shadow_h=e.text_shadow_h),e.text_shadow_v&&(i.text_shadow_v=e.text_shadow_v),e.text_shadow_blur&&(i.text_shadow_blur=e.text_shadow_blur),e.text_shadow_color&&(i.text_shadow_color=e.text_shadow_color),e.box_shadow_h&&(i.box_shadow_h=e.box_shadow_h),e.box_shadow_v&&(i.box_shadow_v=e.box_shadow_v),e.box_shadow_blur&&(i.box_shadow_blur=e.box_shadow_blur),e.box_shadow_spread&&(i.box_shadow_spread=e.box_shadow_spread),e.box_shadow_color&&(i.box_shadow_color=e.box_shadow_color),e.animation_type&&(i.animation_type=e.animation_type),e.animation_entity&&(i.animation_entity=e.animation_entity),e.animation_trigger_type&&(i.animation_trigger_type=e.animation_trigger_type),e.animation_attribute&&(i.animation_attribute=e.animation_attribute),e.animation_state&&(i.animation_state=e.animation_state),e.intro_animation&&(i.intro_animation=e.intro_animation),e.outro_animation&&(i.outro_animation=e.outro_animation),e.animation_duration&&(i.animation_duration=e.animation_duration),e.animation_delay&&(i.animation_delay=e.animation_delay),e.animation_timing&&(i.animation_timing=e.animation_timing),i}}}};