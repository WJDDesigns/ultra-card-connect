export const __webpack_esm_ids__=[8828];export const __webpack_esm_modules__={7203(e,t,i){i.d(t,{FB:()=>l.FB});var o=i(2618),a=i(4791),r=i(6214),n=i(1001),l=(i(7921),i(6740)),s=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let d=class extends o.WF{constructor(){super(...arguments),this.stops=(0,l.FB)(),this.barSize="regular",this.barRadius="round",this.barStyle="flat",this._draggedIndex=null,this._colorPickerOpen=!1,this._colorPickerStopId=null,this._colorPickerCurrentColor="#000000"}render(){const e=[...this.stops].sort((e,t)=>e.position-t.position);return o.qy`
      <!-- Action Buttons -->
      <div class="buttons-row">
        <button class="add-button" @click=${this._addStop}>
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          Add Stop
        </button>
        <button class="reset-button" @click=${this._resetStops}>
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
          </svg>
          Reset
        </button>
      </div>

      <!-- Gradient Stops List -->
      <div class="stops-list ${null!==this._draggedIndex?"drag-active":""}">
        ${(0,r.u)(e,e=>e.id,(t,i)=>this._renderStopItem(t,i,e.length))}
      </div>

      <!-- Color Picker Popup -->
      ${this._colorPickerOpen?o.qy`
            <div class="color-picker-overlay" @click=${this._closeColorPicker}>
              <div class="color-picker-popup" @click=${e=>e.stopPropagation()}>
                <div class="color-picker-header">
                  <h3>Choose Color</h3>
                  <button class="close-btn" @click=${this._closeColorPicker}>×</button>
                </div>
                <ultra-color-picker
                  .value=${this._colorPickerCurrentColor}
                  .defaultValue=${this._colorPickerCurrentColor}
                  @value-changed=${this._handleColorPickerChange}
                ></ultra-color-picker>
              </div>
            </div>
          `:""}
    `}_renderStopItem(e,t,i){const a=this._draggedIndex===t,r=i>2;return o.qy`
      <div
        class="stop-item ${a?"dragging":""}"
        draggable="true"
        @dragstart=${e=>this._handleDragStart(e,t)}
        @dragend=${this._handleDragEnd}
        @dragover=${this._handleDragOver}
        @drop=${e=>this._handleDrop(e,t)}
      >
        <!-- Drag Handle -->
        <div class="drag-handle">
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M9 3h2v2H9V3zm4 0h2v2h-2V3zM9 7h2v2H9V7zm4 0h2v2h-2V7zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2zm-4 4h2v2H9v-2zm4 0h2v2h-2v-2z"
            />
          </svg>
        </div>

        <!-- Color Preview & Picker -->
        <div
          class="color-preview color-circle"
          style="background-color: ${e.color}; cursor: pointer;"
          @click=${()=>this._openColorPicker(e.id,e.color)}
        ></div>

        <!-- Percentage Input -->
        <input
          type="number"
          class="percentage-input"
          .value=${e.position.toString()}
          min="0"
          max="100"
          @input=${t=>this._onPositionInput(e.id,t)}
          @change=${()=>this._commitStops()}
          @blur=${()=>this._commitStops()}
        />

        <!-- Stop Info -->
        <div class="stop-info">
          <span>${e.position}%</span>
        </div>

        <!-- Delete Button -->
        <button
          class="delete-button"
          ?disabled=${!r}
          @click=${()=>this._deleteStop(e.id)}
          title=${r?"Delete stop":"At least two stops are required"}
        >
          <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        </button>
      </div>
    `}_addStop(){const e=(0,l.E9)(this.stops);this.stops=[...this.stops,e],this._notifyChange()}_resetStops(){this.stops=(0,l.FB)(),(0,l.cw)(),this._notifyChange(),this._dispatchResetEvent()}_deleteStop(e){this.stops.length<=2||(this.stops=this.stops.filter(t=>t.id!==e),this._notifyChange())}_handleColorChange(e,t){this.stops=this.stops.map(i=>i.id===e?Object.assign(Object.assign({},i),{color:t}):i),this._notifyChange()}_openColorPicker(e,t){this._colorPickerStopId=e,this._colorPickerCurrentColor=t,this._colorPickerOpen=!0}_closeColorPicker(){this._colorPickerOpen=!1,this._colorPickerStopId=null}_handleColorPickerChange(e){this._colorPickerStopId&&(this._handleColorChange(this._colorPickerStopId,e.detail.value),this._colorPickerCurrentColor=e.detail.value)}_onPositionInput(e,t){const i=t.target.value;if(""===i||"-"===i||"."===i)return;const o=Number.parseFloat(i);Number.isNaN(o)||this._handlePositionChange(e,o)}_handlePositionChange(e,t){const i=Math.max(0,Math.min(100,t)),o=this.stops.map(t=>t.id===e?Object.assign(Object.assign({},t),{position:i}):t);o.every((e,t)=>{var i;return e.position===(null===(i=this.stops[t])||void 0===i?void 0:i.position)})||(this.stops=o,this._notifyChange())}_commitStops(){this.stops=this.stops.map(e=>Object.assign(Object.assign({},e),{position:Math.max(0,Math.min(100,e.position))})),this._notifyChange()}_notifyChange(){this.dispatchEvent(new CustomEvent("gradient-changed",{detail:{stops:this.stops},bubbles:!0,composed:!0}))}_dispatchResetEvent(){this.dispatchEvent(new CustomEvent("gradient-stop-reset",{bubbles:!0,composed:!0}))}_handleDragStart(e,t){this._draggedIndex=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/html",t.toString()))}_handleDragEnd(){this._draggedIndex=null}_handleDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move")}_handleDrop(e,t){if(e.preventDefault(),null===this._draggedIndex||this._draggedIndex===t)return;const i=[...this.stops].sort((e,t)=>e.position-t.position),o=i[this._draggedIndex],a=i[t];this.stops=this.stops.map(e=>e.id===o.id?Object.assign(Object.assign({},e),{position:a.position}):e.id===a.id?Object.assign(Object.assign({},e),{position:o.position}):e),this._draggedIndex=null,this._notifyChange()}};d.styles=o.AH`
    :host {
      display: block;
      width: 100%;
      font-family: var(--mdc-typography-body1-font-family, Roboto, sans-serif);
    }

    .gradient-preview {
      width: 100%;
      height: 16px;
      border-radius: 8px;
      border: 1px solid var(--divider-color);
      margin-bottom: 16px;
      position: relative;
      overflow: hidden;
      background-color: var(--card-background-color, #1c1c1c);
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .gradient-preview-fill {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      position: relative;
    }

    /* Bar size variants to match actual card bars */
    .gradient-preview.bar-size-thin {
      height: 8px;
      border-radius: 4px;
    }

    .gradient-preview.bar-size-regular {
      height: 16px;
      border-radius: 8px;
    }

    .gradient-preview.bar-size-thick {
      height: 24px;
      border-radius: 12px;
    }

    .gradient-preview.bar-size-thiccc {
      height: 32px;
      border-radius: 16px;
    }

    /* Bar radius variants to match actual card bars */
    .gradient-preview.bar-radius-square {
      border-radius: 0;
    }

    .gradient-preview.bar-radius-round {
      /* Uses default border-radius from size classes */
    }

    .gradient-preview.bar-radius-rounded-square.bar-size-thin {
      border-radius: 2px;
    }

    .gradient-preview.bar-radius-rounded-square.bar-size-regular {
      border-radius: 4px;
    }

    .gradient-preview.bar-radius-rounded-square.bar-size-thick {
      border-radius: 6px;
    }

    .gradient-preview.bar-radius-rounded-square.bar-size-thiccc {
      border-radius: 8px;
    }

    .buttons-row {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
    }

    .add-button,
    .reset-button {
      flex: 1;
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s ease;
    }

    .add-button {
      background: var(--primary-color);
      color: var(--text-primary-color);
    }

    .add-button:hover {
      background: var(--primary-color);
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .reset-button {
      background: var(--secondary-color, #666);
      color: white;
    }

    .reset-button:hover {
      background: var(--secondary-color, #666);
      opacity: 0.9;
      transform: translateY(-1px);
    }

    .stops-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .stop-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: var(--card-background-color, #1c1c1c);
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      transition: all 0.2s ease;
    }

    .stop-item:hover {
      border-color: var(--primary-color);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .stop-item.dragging {
      opacity: 0.7;
      transform: scale(1.02);
      z-index: ${n.Mu.MODULE_POPUP_CONTENT};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .drag-handle {
      width: 20px;
      height: 20px;
      cursor: grab;
      color: var(--secondary-text-color);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drag-handle:hover {
      color: var(--primary-text-color);
    }

    .drag-handle:active {
      cursor: grabbing;
    }

    .color-preview {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid var(--divider-color);
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }

    .color-preview:hover {
      border-color: var(--primary-color);
      transform: scale(1.1);
    }

    .percentage-input {
      width: 80px;
      padding: 8px 12px;
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      text-align: center;
      font-weight: 500;
    }

    .percentage-input:focus {
      border-color: var(--primary-color);
      outline: none;
      box-shadow: 0 0 0 2px rgba(var(--rgb-primary-color), 0.2);
    }

    .stop-info {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--secondary-text-color);
      font-size: 14px;
    }

    .delete-button {
      width: 32px;
      height: 32px;
      border: none;
      background: transparent;
      cursor: pointer;
      color: var(--secondary-text-color);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .delete-button:hover {
      background: rgba(var(--rgb-error-color, 244, 67, 54), 0.1);
      color: var(--error-color, #f44336);
    }

    .delete-button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .icon {
      width: 18px;
      height: 18px;
    }

    /* Drag and drop styling */
    .stops-list.drag-active .stop-item:not(.dragging) {
      transition: transform 0.2s ease;
    }

    /* Color Circle Styling */
    .color-circle {
      border: 3px solid var(--divider-color);
      transition: all 0.2s ease;
    }

    .color-circle:hover {
      border-color: var(--primary-color);
      transform: scale(1.15);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    /* Color Picker Popup */
    .color-picker-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: ${n.Mu.MODULE_POPUP_CONTENT};
      backdrop-filter: blur(2px);
    }

    .color-picker-popup {
      background: var(--card-background-color);
      border-radius: 12px;
      padding: 24px;
      max-width: 400px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      border: 1px solid var(--divider-color);
    }

    .color-picker-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--divider-color);
    }

    .color-picker-header h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: var(--secondary-text-color);
      padding: 4px;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .close-btn:hover {
      background: var(--divider-color);
      color: var(--primary-text-color);
    }
  `,s([(0,a.MZ)({type:Array})],d.prototype,"stops",void 0),s([(0,a.MZ)({type:String})],d.prototype,"barSize",void 0),s([(0,a.MZ)({type:String})],d.prototype,"barRadius",void 0),s([(0,a.MZ)({type:String})],d.prototype,"barStyle",void 0),s([(0,a.wk)()],d.prototype,"_draggedIndex",void 0),s([(0,a.wk)()],d.prototype,"_colorPickerOpen",void 0),s([(0,a.wk)()],d.prototype,"_colorPickerStopId",void 0),s([(0,a.wk)()],d.prototype,"_colorPickerCurrentColor",void 0),d=s([(0,a.EM)("uc-gradient-editor")],d)},3909(e,t,i){var o=i(2618),a=i(4791),r=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let n=class extends o.WF{constructor(){super(...arguments),this.value="",this.options=[],this.label="",this.description="",this.disabled=!1}_select(e){this.disabled||e===this.value||this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e},bubbles:!0,composed:!0}))}_resolveColumns(){var e,t;if(this.columns&&this.columns>0)return this.columns;const i=null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0;return 4===i?2:6===i?3:8===i?4:9===i?3:void 0}render(){const e=Array.isArray(this.options)?this.options:[],t=this._resolveColumns(),i=t?`--uc-seg-cols: ${t};`:"";return o.qy`
      ${this.label?o.qy`<span class="uc-seg-label">${this.label}</span>`:o.s6}
      ${this.description?o.qy`<span class="uc-seg-desc">${this.description}</span>`:o.s6}
      <div
        class="uc-seg-row ${t?"uc-seg-grid":""}"
        style=${i}
        role="tablist"
      >
        ${e.map(e=>o.qy`
            <button
              type="button"
              class="uc-seg-btn"
              role="tab"
              aria-selected=${this.value===e.value}
              ?data-active=${this.value===e.value}
              ?disabled=${this.disabled}
              @click=${()=>this._select(e.value)}
            >
              ${e.icon?o.qy`<ha-icon icon=${e.icon}></ha-icon>`:o.s6}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `}};n.styles=o.AH`
    :host {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
    .uc-seg-label {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
      /* Match the same gap that field-description leaves above its control so
         the title doesn't visually hug the first segmented button. */
      margin: 0 0 12px 0;
      display: block;
    }
    .uc-seg-desc {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin: 0 0 12px 0;
      opacity: 0.85;
      line-height: 1.4;
      display: block;
    }
    /* When a label is present, the description sits right under it; tighten the
       label-to-description gap so the description still reads as a sub-line. */
    .uc-seg-label + .uc-seg-desc {
      margin-top: -8px;
    }
    .uc-seg-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .uc-seg-row.uc-seg-grid {
      display: grid;
      grid-template-columns: repeat(var(--uc-seg-cols, 2), minmax(0, 1fr));
      gap: 8px;
    }
    .uc-seg-btn {
      flex: 1 1 auto;
      min-width: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px 12px;
      border: 2px solid var(--divider-color);
      border-radius: 10px;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: border-color 0.15s ease, background 0.15s ease, color 0.15s ease;
    }
    .uc-seg-btn:hover:not([data-active]):not(:disabled) {
      border-color: var(--primary-color);
      background: rgba(var(--rgb-primary-color), 0.06);
    }
    .uc-seg-btn[data-active] {
      border-color: var(--primary-color);
      background: rgba(var(--rgb-primary-color), 0.12);
      color: var(--primary-color);
    }
    .uc-seg-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .uc-seg-btn ha-icon {
      flex-shrink: 0;
      --mdc-icon-size: 18px;
    }
  `,r([(0,a.MZ)({type:String})],n.prototype,"value",void 0),r([(0,a.MZ)({type:Array})],n.prototype,"options",void 0),r([(0,a.MZ)({type:String})],n.prototype,"label",void 0),r([(0,a.MZ)({type:String})],n.prototype,"description",void 0),r([(0,a.MZ)({type:Boolean})],n.prototype,"disabled",void 0),r([(0,a.MZ)({type:Number})],n.prototype,"columns",void 0),n=r([(0,a.EM)("ultra-segmented")],n)},1929(e,t,i){i.r(t),i.d(t,{UltraBarModuleSettings:()=>p,renderBarGeneralTab:()=>m});var o=i(2618),a=i(6231),r=i(5514),n=(i(7921),i(7203)),l=i(4791),s=i(6478),d=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.tapAction={action:"nothing"},this.holdAction={action:"nothing"},this.doubleTapAction={action:"nothing"},this._tapAction={action:"nothing"},this._holdAction={action:"nothing"},this._doubleTapAction={action:"nothing"}}willUpdate(e){e.has("tapAction")&&(this._tapAction=this.tapAction||{action:"nothing"}),e.has("holdAction")&&(this._holdAction=this.holdAction||{action:"nothing"}),e.has("doubleTapAction")&&(this._doubleTapAction=this.doubleTapAction||{action:"nothing"})}_fireUpdate(e){this.dispatchEvent(new CustomEvent("actions-changed",{detail:{side:this.side,updates:e},bubbles:!0,composed:!0}))}_handleTapActionChanged(e){e.stopPropagation();const t=`${this.side}_tap_action`,i=e.detail.value[t];this._tapAction=i,this.requestUpdate(),this._fireUpdate({[`${this.side}_tap_action`]:i})}_handleHoldActionChanged(e){e.stopPropagation();const t=`${this.side}_hold_action`,i=e.detail.value[t];this._holdAction=i,this.requestUpdate(),this._fireUpdate({[`${this.side}_hold_action`]:i})}_handleDoubleTapActionChanged(e){e.stopPropagation();const t=`${this.side}_double_tap_action`,i=e.detail.value[t];this._doubleTapAction=i,this.requestUpdate(),this._fireUpdate({[`${this.side}_double_tap_action`]:i})}render(){var e;if(!this.hass)return o.qy``;const t=(null===(e=this.hass.locale)||void 0===e?void 0:e.language)||"en",i="left"===this.side?"left":"right",a=`${this.side}_tap_action`,r=`${this.side}_hold_action`,n=`${this.side}_double_tap_action`;return o.qy`
      <div class="section-title">
        ${(0,s.kg)(`editor.bar.${i}.actions`,t,("left"===this.side?"Left":"Right")+" Side Actions")}
      </div>
      <div class="section-description">
        ${(0,s.kg)(`editor.bar.${i}.actions_desc`,t,`Configure what happens when tapping the ${this.side} side info`)}
      </div>

      <div class="action-field">
        <ha-form
          .hass=${this.hass}
          .data=${{[a]:this._tapAction}}
          .schema=${[{name:a,selector:{ui_action:{}}}]}
          .computeLabel=${()=>this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")}
          @value-changed=${this._handleTapActionChanged}
        ></ha-form>
      </div>

      <div class="action-field">
        <ha-form
          .hass=${this.hass}
          .data=${{[r]:this._holdAction}}
          .schema=${[{name:r,selector:{ui_action:{}}}]}
          .computeLabel=${()=>this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")}
          @value-changed=${this._handleHoldActionChanged}
        ></ha-form>
      </div>

      <div class="action-field">
        <ha-form
          .hass=${this.hass}
          .data=${{[n]:this._doubleTapAction}}
          .schema=${[{name:n,selector:{ui_action:{}}}]}
          .computeLabel=${()=>this.hass.localize("ui.panel.lovelace.editor.card.generic.double_tap_action")}
          @value-changed=${this._handleDoubleTapActionChanged}
        ></ha-form>
      </div>
    `}};c.styles=o.AH`
    :host {
      display: block;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);
    }

    .section-title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 8px;
      color: var(--primary-color);
    }

    .section-description {
      font-size: 12px;
      margin-bottom: 12px;
      color: var(--secondary-text-color);
    }

    .action-field {
      margin-bottom: 12px;
    }

    .action-field:last-child {
      margin-bottom: 0;
    }
  `,d([(0,l.MZ)({attribute:!1})],c.prototype,"hass",void 0),d([(0,l.MZ)({attribute:!1})],c.prototype,"side",void 0),d([(0,l.MZ)({attribute:!1})],c.prototype,"tapAction",void 0),d([(0,l.MZ)({attribute:!1})],c.prototype,"holdAction",void 0),d([(0,l.MZ)({attribute:!1})],c.prototype,"doubleTapAction",void 0),d([(0,l.wk)()],c.prototype,"_tapAction",void 0),d([(0,l.wk)()],c.prototype,"_holdAction",void 0),d([(0,l.wk)()],c.prototype,"_doubleTapAction",void 0),c=d([(0,l.EM)("bar-side-actions")],c);var g=i(4830);class p extends a.UltraBarModule{renderGeneralTabContent(e,t,i,r){var l,d,c,p,m,u,_,v;const h=e,b=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en",y=(0,g.NS)(i,"bar","bar_style",h.bar_style,"flat"),f=this.normalizeBoolean(h.show_percentage,!0),x=this.normalizeBoolean(h.show_value,!1),k="difference"===h.percentage_type&&h.entity&&!(null===(d=null==t?void 0:t.states)||void 0===d?void 0:d[h.entity])?"":h.entity||"",w=[this.selectField("percentage_type",[{value:"entity",label:(0,s.kg)("editor.bar.perc_type.entity",b,"Entity (0-100)")},{value:"attribute",label:(0,s.kg)("editor.bar.perc_type.attribute",b,"Entity Attribute")},{value:"difference",label:(0,s.kg)("editor.bar.perc_type.difference",b,"Difference")},{value:"time_progress",label:(0,s.kg)("editor.bar.perc_type.time_progress",b,"Time Progress (Real-time)")},{value:"range",label:(0,s.kg)("editor.bar.perc_type.range",b,"Range (Start to End)")}])];return o.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        <!-- Bar Settings (single settings-section box wraps everything below
             through to just before "Bar Appearance" so the percentage type,
             configuration sub-modes, Bar Percentage Entity, and Limit Value Entity
             are all visually contained — no floating outside-the-box items). -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
          >
            ${(0,s.kg)("editor.bar.bar_settings.title",b,"Bar Settings")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,s.kg)("editor.bar.bar_settings.desc",b,"Configure how the bar percentage is calculated and displayed.")}
          </div>
          <div class="field-group percentage-type-group" style="margin-bottom: 16px;">
          ${this.renderFieldSection((0,s.kg)("editor.bar.percentage_type.title",b,"Percentage Type"),(0,s.kg)("editor.bar.percentage_type.desc",b,"Choose how the bar percentage is calculated"),t,{percentage_type:h.percentage_type||"entity"},w,e=>{var i,o;const a=null===(i=e.detail.value)||void 0===i?void 0:i.percentage_type;if(void 0===a||a===h.percentage_type)return;const n={percentage_type:a};"entity"!==a&&"template"!==a&&(n.percentage_template=""),"difference"===a&&h.entity&&!(null===(o=null==t?void 0:t.states)||void 0===o?void 0:o[h.entity])&&(n.entity=""),r(n)})}
        </div>

          <!-- Entity Attribute Fields -->
          ${"attribute"===h.percentage_type?this.renderConditionalFieldsGroup((0,s.kg)("editor.bar.attr_config.title",b,"Entity Attribute Configuration"),o.qy`
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                    >
                      ${(0,s.kg)("editor.bar.attr_config.desc",b,"Configure entity attribute settings")}
                    </div>
                    ${this.renderEntityPickerWithVariables(t,i,"percentage_attribute_entity",h.percentage_attribute_entity||"",e=>r({percentage_attribute_entity:e}),void 0,(0,s.kg)("editor.bar.attr_config.attribute_entity",b,"Attribute Entity"))}
                    ${this.renderFieldSection((0,s.kg)("editor.bar.attr_config.attribute_name",b,"Attribute Name"),(0,s.kg)("editor.bar.attr_config.attribute_name_desc",b,'Enter the name of the attribute that contains the percentage value (e.g., "battery_level")'),t,{percentage_attribute_name:h.percentage_attribute_name||""},[this.textField("percentage_attribute_name")],e=>r({percentage_attribute_name:e.detail.value.percentage_attribute_name}))}
                  `):""}

          <!-- Difference Fields -->
          ${"difference"===h.percentage_type?this.renderConditionalFieldsGroup((0,s.kg)("editor.bar.diff_config.title",b,"Difference Calculation Configuration"),o.qy`
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                    >
                      ${(0,s.kg)("editor.bar.diff_config.desc",b,"Configure difference calculation settings")}
                    </div>
                    ${this.renderEntityPickerWithVariables(t,i,"percentage_current_entity",h.percentage_current_entity||"",e=>r({percentage_current_entity:e}),void 0,(0,s.kg)("editor.bar.diff_config.current_entity",b,"Current Value Entity"))}
                    ${this.renderEntityPickerWithVariables(t,i,"percentage_total_entity",h.percentage_total_entity||"",e=>r({percentage_total_entity:e}),void 0,(0,s.kg)("editor.bar.diff_config.total_entity",b,"Total Value Entity"))}
                  `):""}

          <!-- Time Progress Fields -->
          ${"time_progress"===h.percentage_type?this.renderConditionalFieldsGroup((0,s.kg)("editor.bar.time_progress_config.title",b,"Time Progress Configuration"),o.qy`
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                    >
                      ${(0,s.kg)("editor.bar.time_progress_config.desc",b,"Configure real-time progress between two timestamp entities. Updates smoothly in the browser without backend load.")}
                    </div>
                    ${this.renderEntityPickerWithVariables(t,i,"time_progress_start_entity",h.time_progress_start_entity||"",e=>r({time_progress_start_entity:e}),void 0,(0,s.kg)("editor.bar.time_progress_config.start_entity",b,"Start Timestamp Entity"))}
                    ${this.renderEntityPickerWithVariables(t,i,"time_progress_end_entity",h.time_progress_end_entity||"",e=>r({time_progress_end_entity:e}),void 0,(0,s.kg)("editor.bar.time_progress_config.end_entity",b,"End Timestamp Entity"))}
                    ${this.renderSettingsSection("","",[{title:(0,s.kg)("editor.bar.time_progress_config.direction",b,"Progress Direction"),description:(0,s.kg)("editor.bar.time_progress_config.direction_desc",b,"Forward shows elapsed time from start to now. Backward shows remaining time from now to end."),hass:t,data:{time_progress_direction:h.time_progress_direction||"forward"},schema:[this.selectField("time_progress_direction",[{value:"forward",label:(0,s.kg)("editor.bar.time_progress.forward",b,"Forward (Elapsed)")},{value:"backward",label:(0,s.kg)("editor.bar.time_progress.backward",b,"Backward (Remaining)")}])],onChange:e=>r(e.detail.value)}])}
                    ${this.renderSliderField((0,s.kg)("editor.bar.time_progress_config.update_interval",b,"Update Interval (ms)"),(0,s.kg)("editor.bar.time_progress_config.update_interval_desc",b,"How often to update the progress bar in milliseconds. Default: 1000 (1 second). Lower values = smoother but more CPU usage."),h.time_progress_update_interval||1e3,1e3,100,1e4,100,e=>r({time_progress_update_interval:e}),"ms")}
                  `):""}

          <!-- Range Mode Configuration -->
          ${"range"===h.percentage_type?this.renderConditionalFieldsGroup((0,s.kg)("editor.bar.range_config.title",b,"Range Configuration"),o.qy`
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                    >
                      ${(0,s.kg)("editor.bar.range_config.desc",b,"Configure the start and end values for the range visualization.")}
                    </div>
                    ${this.renderEntityPickerWithVariables(t,i,"range_start_entity",h.range_start_entity||"",e=>r({range_start_entity:e}),void 0,(0,s.kg)("editor.bar.range_config.start_entity",b,"Range Start Entity"))}
                    ${this.renderFieldSection((0,s.kg)("editor.bar.range_config.start_attribute",b,"Start Attribute (Optional)"),(0,s.kg)("editor.bar.range_config.start_attribute_desc",b,"If the value is in an attribute, enter the attribute name here."),t,{range_start_attribute:h.range_start_attribute||""},[this.textField("range_start_attribute")],e=>r({range_start_attribute:e.detail.value.range_start_attribute}))}
                    ${this.renderEntityPickerWithVariables(t,i,"range_end_entity",h.range_end_entity||"",e=>r({range_end_entity:e}),void 0,(0,s.kg)("editor.bar.range_config.end_entity",b,"Range End Entity"))}
                    ${this.renderFieldSection((0,s.kg)("editor.bar.range_config.end_attribute",b,"End Attribute (Optional)"),(0,s.kg)("editor.bar.range_config.end_attribute_desc",b,"If the value is in an attribute, enter the attribute name here."),t,{range_end_attribute:h.range_end_attribute||""},[this.textField("range_end_attribute")],e=>r({range_end_attribute:e.detail.value.range_end_attribute}))}

                    <!-- Current Value Marker (Optional) -->
                    <div
                      style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 16px; border-left: 3px solid var(--warning-color);"
                    >
                      <div
                        style="font-size: 14px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"
                      >
                        <ha-icon
                          icon="mdi:map-marker"
                          style="color: var(--warning-color);"
                        ></ha-icon>
                        ${(0,s.kg)("editor.bar.range_config.current_marker_title",b,"Current Value Marker (Optional)")}
                      </div>
                      <div
                        style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 16px;"
                      >
                        ${(0,s.kg)("editor.bar.range_config.current_marker_desc",b,"Optionally show a marker indicating the current/average value within the range.")}
                      </div>

                      <div style="margin-bottom: 16px;">
                        ${this.renderEntityPickerWithVariables(t,i,"range_current_entity",h.range_current_entity||"",e=>r({range_current_entity:e}),void 0,(0,s.kg)("editor.bar.range_config.current_entity",b,"Current Value Entity"))}
                      </div>
                      ${this.renderSettingsSection("","",[{title:(0,s.kg)("editor.bar.range_config.current_attribute",b,"Current Attribute (Optional)"),description:(0,s.kg)("editor.bar.range_config.current_attribute_desc",b,"If the value is in an attribute, enter the attribute name here."),hass:t,data:{range_current_attribute:h.range_current_attribute||""},schema:[this.textField("range_current_attribute")],onChange:e=>r({range_current_attribute:e.detail.value.range_current_attribute})}])}

                      <div style="margin-top: 16px;">
                        <div
                          style="font-size: 13px; font-weight: 500; color: var(--primary-text-color); margin-bottom: 8px;"
                        >
                          ${(0,s.kg)("editor.bar.range_config.current_color",b,"Marker Color")}
                        </div>
                        <ultra-color-picker
                          .hass=${t}
                          .value=${h.range_current_color||"var(--accent-color)"}
                          @value-changed=${e=>r({range_current_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>
                    </div>
                  `):""}

          <!-- Manual Min/Max Range Configuration -->
          ${o.qy`
            <div
              style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 16px; border-left: 3px solid var(--primary-color);"
            >
              <div
                style="font-size: 14px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"
              >
                <ha-icon
                  icon="mdi:arrow-expand-horizontal"
                  style="color: var(--primary-color);"
                ></ha-icon>
                ${(0,s.kg)("editor.bar.range.title",b,"Value Range (Min/Max)")}
              </div>
              <div
                style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 16px;"
              >
                ${"difference"===h.percentage_type?(0,s.kg)("editor.bar.range.desc_difference",b,"Override the visible range. Enter values in the same unit as your entities (e.g. km). Leave blank to auto-detect from the Total Entity."):(0,s.kg)("editor.bar.range.desc",b,"Override auto-detected range with numbers. For dynamic min/max or labels, enable the unified template (value_min, value_max, left_label, right_label).")}
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <!-- Min Value -->
                ${this.renderFieldSection((0,s.kg)("editor.bar.range.min",b,"Minimum"),"",t,{percentage_min:void 0!==h.percentage_min?String(h.percentage_min):""},[this.textField("percentage_min")],e=>{const t=(e.detail.value.percentage_min||"").trim();clearTimeout(this._templateInputDebounce),this._templateInputDebounce=setTimeout(()=>{if(""===t)r({percentage_min:void 0});else{let e=t;e.includes(",")&&!e.includes(".")&&(e=e.replace(",","."));const i=parseFloat(e);r({percentage_min:isNaN(i)?void 0:i})}this.triggerPreviewUpdate()},300)})}

                <!-- Max Value -->
                ${this.renderFieldSection((0,s.kg)("editor.bar.range.max",b,"Maximum"),"",t,{percentage_max:void 0!==h.percentage_max?String(h.percentage_max):""},[this.textField("percentage_max")],e=>{const t=(e.detail.value.percentage_max||"").trim();clearTimeout(this._templateInputDebounce),this._templateInputDebounce=setTimeout(()=>{if(""===t)r({percentage_max:void 0});else{let e=t;e.includes(",")&&!e.includes(".")&&(e=e.replace(",","."));const i=parseFloat(e);r({percentage_max:isNaN(i)?void 0:i})}this.triggerPreviewUpdate()},300)})}
              </div>
            </div>
          `}

          <!-- Bar Percentage Entity (shown for entity mode and as optional fallback for difference mode) -->
          ${h.percentage_type&&"entity"!==h.percentage_type&&"difference"!==h.percentage_type?"":o.qy`
                  <div style="margin-top: 24px;">
                    ${this.renderEntityPickerWithVariables(t,i,"entity",k,e=>r({entity:e}),["sensor","input_number"],"difference"===h.percentage_type?(0,s.kg)("editor.bar.entity.fallback_title",b,"Fallback Entity (optional)"):(0,s.kg)("editor.bar.entity.title",b,"Bar Percentage Entity"))}
                    ${h.entity||"difference"===h.percentage_type?o.qy`
                          <div
                            class="field-description"
                            style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);"
                          >
                            ${"difference"===h.percentage_type?(0,s.kg)("editor.bar.entity.fallback_desc",b,"Optional fallback entity for text/labels. Difference mode uses Current and Total entities for bar calculation."):(0,s.kg)("editor.bar.entity.desc_present",b,"The entity that provides the percentage value for the bar.")}
                          </div>
                        `:o.qy`
                          <div
                            style="color: var(--warning-color); font-size: 12px; margin-top: 4px; font-style: italic;"
                          >
                            <ha-icon
                              icon="mdi:information-outline"
                              style="font-size: 14px; margin-right: 4px;"
                            ></ha-icon>
                            ${(0,s.kg)("editor.bar.entity.no_entity_warning",b,"No entity selected - Please choose a sensor with values between 0-100")}
                          </div>
                        `}
                  </div>
                `}

          <!-- Limit Value Entity -->
          <div style="margin-top: 24px;">
            ${this.renderEntityPickerWithVariables(t,i,"limit_entity",h.limit_entity||"",e=>r({limit_entity:e}),void 0,(0,s.kg)("editor.bar.limit_entity.title",b,"Limit Value Entity (optional)"))}
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);"
            >
              ${(0,s.kg)("editor.bar.limit_entity.desc",b,"Optional: Add a vertical indicator line on the bar (e.g. charge limit for EV battery).")}
            </div>
          </div>
        </div>
        </div>

        <!-- Bar Appearance Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,s.kg)("editor.bar.appearance.title",b,"Bar Appearance")}
          </div>

          <!-- Bar Style -->
          <div class="field-group" style="margin-bottom: 16px;">
            <div
              class="field-title"
              style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 4px;"
            >
              ${(0,s.kg)("editor.bar.appearance.style",b,"Bar Style")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
            >
              ${(0,s.kg)("editor.bar.appearance.style_desc",b,"Choose the visual style of the progress bar.")}
            </div>
            ${this.renderUcForm(t,{bar_style:h.bar_style||"theme"},[this.selectField("bar_style",this.withThemeInheritOption(b,i,"bar","bar_style","flat",[{value:"flat",label:(0,s.kg)("editor.bar.appearance.style_flat",b,"Flat (Default)")},{value:"glossy",label:(0,s.kg)("editor.bar.appearance.style_glossy",b,"Glossy")},{value:"embossed",label:(0,s.kg)("editor.bar.appearance.style_embossed",b,"Embossed")},{value:"inset",label:(0,s.kg)("editor.bar.appearance.style_inset",b,"Inset")},{value:"gradient-overlay",label:(0,s.kg)("editor.bar.appearance.style_gradient",b,"Gradient Overlay")},{value:"neon-glow",label:(0,s.kg)("editor.bar.appearance.style_neon",b,"Neon Glow")},{value:"outline",label:(0,s.kg)("editor.bar.appearance.style_outline",b,"Outline")},{value:"glass",label:(0,s.kg)("editor.bar.appearance.style_glass",b,"Glass")},{value:"metallic",label:(0,s.kg)("editor.bar.appearance.style_metallic",b,"Metallic")},{value:"neumorphic",label:(0,s.kg)("editor.bar.appearance.style_neumorphic",b,"Neumorphic")},{value:"dashed",label:(0,s.kg)("editor.bar.appearance.style_dashed",b,"Dashed")},{value:"dots",label:(0,s.kg)("editor.bar.appearance.style_dots",b,"Dots")},{value:"minimal",label:(0,s.kg)("editor.bar.appearance.style_minimal",b,"Minimal")}]))],e=>{const t=e.detail.value.bar_style;t!==(h.bar_style||"theme")&&(r({bar_style:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
          </div>

          <!-- Bar Fill Direction -->
          <div class="field-group" style="margin-bottom: 24px;">
            <div
              class="field-title"
              style="font-size: 16px !important; font-weight: 600 !important;"
            >
              ${(0,s.kg)("editor.bar.appearance.direction",b,"Fill Direction")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
            >
              ${(0,s.kg)("editor.bar.appearance.direction_desc",b,"Choose which direction the bar fills from as the value increases.")}
            </div>
            <div
              style="display: flex; gap: 8px; justify-content: flex-start; flex-wrap: wrap;"
            >
              <button
                type="button"
                style="padding: 8px 12px; border: 2px solid ${"left-to-right"===(h.bar_direction||"left-to-right")?"var(--primary-color)":"var(--divider-color)"}; background: ${"left-to-right"===(h.bar_direction||"left-to-right")?"var(--primary-color)":"transparent"}; color: ${"left-to-right"===(h.bar_direction||"left-to-right")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                @click=${()=>r({bar_direction:"left-to-right"})}
              >
                <ha-icon
                  icon="mdi:arrow-right"
                  style="font-size: 16px; flex-shrink: 0;"
                ></ha-icon>
                <span
                  style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                  >${(0,s.kg)("editor.bar.appearance.left_to_right",b,"Left to Right")}</span
                >
              </button>
              <button
                type="button"
                style="padding: 8px 12px; border: 2px solid ${"right-to-left"===(h.bar_direction||"left-to-right")?"var(--primary-color)":"var(--divider-color)"}; background: ${"right-to-left"===(h.bar_direction||"left-to-right")?"var(--primary-color)":"transparent"}; color: ${"right-to-left"===(h.bar_direction||"left-to-right")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                @click=${()=>r({bar_direction:"right-to-left"})}
              >
                <ha-icon
                  icon="mdi:arrow-left"
                  style="font-size: 16px; flex-shrink: 0;"
                ></ha-icon>
                <span
                  style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                  >${(0,s.kg)("editor.bar.appearance.right_to_left",b,"Right to Left")}</span
                >
              </button>
            </div>
          </div>

          <!-- Bar Height -->
          ${this.renderSliderField((0,s.kg)("editor.bar.appearance.height",b,"Bar Height"),(0,s.kg)("editor.bar.appearance.height_desc",b,"Adjust the thickness of the progress bar in pixels."),null!==(c=h.height)&&void 0!==c?c:20,20,8,60,2,e=>{r({height:e})},"px")}

          <!-- Border Radius -->
          ${this.renderSliderField((0,s.kg)("editor.bar.appearance.border_radius",b,"Border Radius"),(0,s.kg)("editor.bar.appearance.border_radius_desc",b,"Control the rounded corners of the bar."),null!==(p=h.border_radius)&&void 0!==p?p:10,10,0,50,1,e=>{r({border_radius:e})},"px")}

          <!-- Bar Width -->
          ${this.renderSliderField((0,s.kg)("editor.bar.appearance.width",b,"Bar Width"),(0,s.kg)("editor.bar.appearance.width_desc",b,"Set the width of the bar as a percentage of the container."),h.bar_width||100,100,10,100,5,e=>{r({bar_width:e})},"%")}

          <!-- Bar Alignment with Icons -->
          ${(h.bar_width||100)<100?o.qy`
                  <div class="field-group" style="margin-bottom: 16px;">
                    <div
                      class="field-title"
                      style="font-size: 16px !important; font-weight: 600 !important;"
                    >
                      ${(0,s.kg)("editor.bar.appearance.alignment",b,"Bar Alignment")}
                    </div>
                    <div
                      class="field-description"
                      style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                    >
                      ${(0,s.kg)("editor.bar.appearance.alignment_desc",b,"Choose how to align the bar when it's less than 100% width.")}
                    </div>
                    <div
                      style="display: flex; gap: 8px; justify-content: flex-start; flex-wrap: wrap;"
                    >
                      <button
                        type="button"
                        style="padding: 8px 12px; border: 2px solid ${"left"===(h.bar_alignment||"center")?"var(--primary-color)":"var(--divider-color)"}; background: ${"left"===(h.bar_alignment||"center")?"var(--primary-color)":"transparent"}; color: ${"left"===(h.bar_alignment||"center")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                        @click=${()=>r({bar_alignment:"left"})}
                      >
                        <ha-icon
                          icon="mdi:format-align-left"
                          style="font-size: 16px; flex-shrink: 0;"
                        ></ha-icon>
                        <span
                          style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                          >${(0,s.kg)("editor.common.left",b,"Left")}</span
                        >
                      </button>
                      <button
                        type="button"
                        style="padding: 8px 12px; border: 2px solid ${"center"===(h.bar_alignment||"center")?"var(--primary-color)":"var(--divider-color)"}; background: ${"center"===(h.bar_alignment||"center")?"var(--primary-color)":"transparent"}; color: ${"center"===(h.bar_alignment||"center")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                        @click=${()=>r({bar_alignment:"center"})}
                      >
                        <ha-icon
                          icon="mdi:format-align-center"
                          style="font-size: 16px; flex-shrink: 0;"
                        ></ha-icon>
                        <span
                          style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                          >${(0,s.kg)("editor.common.center",b,"Center")}</span
                        >
                      </button>
                      <button
                        type="button"
                        style="padding: 8px 12px; border: 2px solid ${"right"===(h.bar_alignment||"center")?"var(--primary-color)":"var(--divider-color)"}; background: ${"right"===(h.bar_alignment||"center")?"var(--primary-color)":"transparent"}; color: ${"right"===(h.bar_alignment||"center")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                        @click=${()=>r({bar_alignment:"right"})}
                      >
                        <ha-icon
                          icon="mdi:format-align-right"
                          style="font-size: 16px; flex-shrink: 0;"
                        ></ha-icon>
                        <span
                          style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                          >${(0,s.kg)("editor.common.right",b,"Right")}</span
                        >
                      </button>
                    </div>
                  </div>
                `:""}

          <!-- Label Alignment -->
          ${h.left_enabled||h.right_enabled?o.qy`
                  <div class="field-group">
                    <div
                      class="field-title"
                      style="font-size: 16px !important; font-weight: 600 !important;"
                    >
                      ${(0,s.kg)("editor.bar.labels.alignment",b,"Label Alignment")}
                    </div>
                    <div
                      class="field-description"
                      style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                    >
                      ${(0,s.kg)("editor.bar.labels.alignment_desc",b,"Control how the left and right side labels are positioned.")}
                    </div>
                    ${this.renderUcForm(t,{label_alignment:h.label_alignment||"space-between"},[this.selectField("label_alignment",[{value:"left",label:(0,s.kg)("editor.common.left",b,"Left")},{value:"center",label:(0,s.kg)("editor.common.center",b,"Center")},{value:"right",label:(0,s.kg)("editor.common.right",b,"Right")},{value:"space-between",label:(0,s.kg)("editor.common.space_between",b,"Space Between")}])],e=>{const t=e.detail.value.label_alignment;t!==(h.label_alignment||"space-between")&&(r({label_alignment:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                  </div>
                `:""}

          <!-- Glass Blur Amount (only show when glass style is selected) -->
          ${"glass"===y?o.qy`
                  <div class="field-container" style="margin-bottom: 24px;">
                    ${this.renderSliderField((0,s.kg)("editor.bar.appearance.glass_blur",b,"Glass Blur"),(0,s.kg)("editor.bar.appearance.glass_blur_desc",b,"Adjust the blur intensity of the glass effect."),h.glass_blur_amount||8,8,0,20,1,e=>{r({glass_blur_amount:e})},"px")}
                  </div>
                `:""}
        </div>

        <!-- Scale/Tick Marks Configuration Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,s.kg)("editor.bar.scale.title",b,"Scale / Tick Marks"),(0,s.kg)("editor.bar.scale.desc",b,"Add tick marks and labels along the bar to show the scale. Useful for visualizing ranges like temperature or time."),t,{show_scale:h.show_scale||!1},[this.booleanField("show_scale")],e=>r({show_scale:e.detail.value.show_scale}))}

          ${h.show_scale?o.qy`
                  <!-- Scale Divisions -->
                  <div class="field-group" style="margin-bottom: 16px;">
                    <div
                      class="field-title"
                      style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                    >
                      ${(0,s.kg)("editor.bar.scale.divisions",b,"Number of Divisions")}
                    </div>
                    <div
                      class="field-description"
                      style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                    >
                      ${(0,s.kg)("editor.bar.scale.divisions_desc",b,"How many segments to divide the scale into (e.g., 4 = marks at 0%, 25%, 50%, 75%, 100%).")}
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <ha-slider
                        style="flex: 1;"
                        .min=${2}
                        .max=${20}
                        .step=${1}
                        .value=${h.scale_divisions||5}
                        @change=${e=>r({scale_divisions:parseInt(e.target.value,10)})}
                      ></ha-slider>
                      <span style="min-width: 30px; text-align: center; font-weight: 600;">
                        ${h.scale_divisions||5}
                      </span>
                    </div>
                  </div>

                  <!-- Show Labels Toggle -->
                  <div class="field-group" style="margin-bottom: 16px;">
                    ${this.renderFieldSection((0,s.kg)("editor.bar.scale.show_labels",b,"Show Labels"),(0,s.kg)("editor.bar.scale.show_labels_desc",b,"Display numeric values at each tick mark."),t,{scale_show_labels:!1!==h.scale_show_labels},[this.booleanField("scale_show_labels")],e=>r({scale_show_labels:e.detail.value.scale_show_labels}))}
                    ${!1!==h.scale_show_labels?o.qy`
                          <!-- Label Size -->
                          <div class="field-group" style="margin-bottom: 16px;">
                            <div
                              class="field-title"
                              style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                            >
                              ${(0,s.kg)("editor.bar.scale.label_size",b,"Label Size")}
                            </div>
                            <div style="display: flex; align-items: center; gap: 12px;">
                              <ha-slider
                                style="flex: 1;"
                                .min=${8}
                                .max=${16}
                                .step=${1}
                                .value=${h.scale_label_size||10}
                                @change=${e=>r({scale_label_size:parseInt(e.target.value,10)})}
                              ></ha-slider>
                              <span style="min-width: 40px; text-align: center; font-weight: 600;">
                                ${h.scale_label_size||10}px
                              </span>
                            </div>
                          </div>

                          <!-- Label Color -->
                          <div class="field-group" style="margin-bottom: 16px;">
                            <div
                              class="field-title"
                              style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                            >
                              ${(0,s.kg)("editor.bar.scale.label_color",b,"Label Color")}
                            </div>
                            <ultra-color-picker
                              .hass=${t}
                              .value=${h.scale_label_color||""}
                              .placeholder=${"var(--secondary-text-color)"}
                              @value-changed=${e=>r({scale_label_color:e.detail.value})}
                            ></ultra-color-picker>
                          </div>
                        `:""}
                    ${this.renderFieldSection((0,s.kg)("editor.bar.scale.clamp_edge_labels",b,"Clamp Edge Labels Inward"),(0,s.kg)("editor.bar.scale.clamp_edge_labels_desc",b,"Slightly nudge the first and last labels inward to reduce clipping on tight layouts."),t,{scale_clamp_edge_labels:this.normalizeBoolean(h.scale_clamp_edge_labels,!0)},[this.booleanField("scale_clamp_edge_labels")],e=>r({scale_clamp_edge_labels:this.normalizeBoolean(e.detail.value.scale_clamp_edge_labels,!0)}))}
                    ${this.renderFieldSection((0,s.kg)("editor.bar.scale.mobile_options_enabled",b,"Enable Mobile Label Options"),(0,s.kg)("editor.bar.scale.mobile_options_enabled_desc",b,"Apply mobile-specific label behavior below the configured viewport width."),t,{scale_mobile_options_enabled:this.normalizeBoolean(h.scale_mobile_options_enabled,!1)},[this.booleanField("scale_mobile_options_enabled")],e=>r({scale_mobile_options_enabled:this.normalizeBoolean(e.detail.value.scale_mobile_options_enabled,!1)}))}
                    ${this.normalizeBoolean(h.scale_mobile_options_enabled,!1)?o.qy`
                          <div class="field-group" style="margin-bottom: 16px;">
                            <div
                              class="field-title"
                              style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                            >
                              ${(0,s.kg)("editor.bar.scale.mobile_breakpoint",b,"Mobile Breakpoint")}
                            </div>
                            <div
                              class="field-description"
                              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                            >
                              ${(0,s.kg)("editor.bar.scale.mobile_breakpoint_desc",b,"Apply mobile label options when viewport width is at or below this value.")}
                            </div>
                            <div style="display: flex; align-items: center; gap: 12px;">
                              <ha-slider
                                style="flex: 1;"
                                .min=${320}
                                .max=${640}
                                .step=${10}
                                .value=${h.scale_mobile_breakpoint||420}
                                @change=${e=>r({scale_mobile_breakpoint:parseInt(e.target.value,10)})}
                              ></ha-slider>
                              <span style="min-width: 52px; text-align: center; font-weight: 600;">
                                ${h.scale_mobile_breakpoint||420}px
                              </span>
                            </div>
                          </div>

                          ${this.renderFieldSection((0,s.kg)("editor.bar.scale.mobile_reduce_density",b,"Reduce Label Density on Mobile"),(0,s.kg)("editor.bar.scale.mobile_reduce_density_desc",b,"Hide every second label on mobile to prevent overlap while keeping all ticks."),t,{scale_mobile_reduce_label_density:this.normalizeBoolean(h.scale_mobile_reduce_label_density,!1)},[this.booleanField("scale_mobile_reduce_label_density")],e=>r({scale_mobile_reduce_label_density:this.normalizeBoolean(e.detail.value.scale_mobile_reduce_label_density,!1)}))}
                          ${this.renderFieldSection((0,s.kg)("editor.bar.scale.mobile_abbreviate_labels",b,"Abbreviate Labels on Mobile"),(0,s.kg)("editor.bar.scale.mobile_abbreviate_labels_desc",b,"Shorten numeric labels on mobile (e.g. 1200 -> 1.2k, 700 km -> 700)."),t,{scale_mobile_abbreviate_labels:this.normalizeBoolean(h.scale_mobile_abbreviate_labels,!1)},[this.booleanField("scale_mobile_abbreviate_labels")],e=>r({scale_mobile_abbreviate_labels:this.normalizeBoolean(e.detail.value.scale_mobile_abbreviate_labels,!1)}))}
                        `:""}

                    <!-- Tick Color -->
                    <div class="field-group" style="margin-bottom: 16px;">
                      <div
                        class="field-title"
                        style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                      >
                        ${(0,s.kg)("editor.bar.scale.tick_color",b,"Tick Color")}
                      </div>
                      <ultra-color-picker
                        .hass=${t}
                        .value=${h.scale_tick_color||""}
                        .placeholder=${"var(--divider-color)"}
                        @value-changed=${e=>r({scale_tick_color:e.detail.value})}
                      ></ultra-color-picker>
                    </div>

                    <!-- Custom Tick Positions -->
                    <div class="field-group" style="margin-bottom: 16px;">
                      <div
                        class="field-title"
                        style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                      >
                        ${(0,s.kg)("editor.bar.scale.custom_ticks",b,"Custom Tick Positions")}
                      </div>
                      <div
                        class="field-description"
                        style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                      >
                        ${(0,s.kg)("editor.bar.scale.custom_ticks_desc",b,"Comma-separated values in your entity's unit. Overrides the number of divisions (e.g. 10,20,30,40). Leave blank to use evenly spaced divisions.")}
                      </div>
                      ${this.renderUcForm(t,{scale_custom_ticks:h.scale_custom_ticks||""},[this.textField("scale_custom_ticks")],e=>r({scale_custom_ticks:e.detail.value.scale_custom_ticks}))}
                    </div>

                    <!-- Custom Tick Labels -->
                    ${(null===(m=h.scale_custom_ticks)||void 0===m?void 0:m.trim())?o.qy`
                          <div class="field-group" style="margin-bottom: 16px;">
                            <div
                              class="field-title"
                              style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                            >
                              ${(0,s.kg)("editor.bar.scale.custom_labels",b,"Custom Tick Labels")}
                            </div>
                            <div
                              class="field-description"
                              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                            >
                              ${(0,s.kg)("editor.bar.scale.custom_labels_desc",b,'Optional comma-separated labels matching each custom tick (e.g. Reserve,1/4,1/2,3/4,Full). Leave a slot empty to show that tick’s numeric value, or enter "-" (a single dash) to hide that tick’s label while keeping its tick mark.')}
                            </div>
                            ${this.renderUcForm(t,{scale_custom_labels:h.scale_custom_labels||""},[this.textField("scale_custom_labels")],e=>r({scale_custom_labels:e.detail.value.scale_custom_labels}))}
                            <div
                              style="font-size: 12px; font-style: italic; color: var(--secondary-text-color); margin-top: 6px; line-height: 1.4;"
                            >
                              ${(0,s.kg)("editor.bar.scale.custom_labels_hint",b,'Tip: use "-" in any slot to hide that tick’s label. Accepted hide tokens: -, _, none, {none}, hide.')}
                            </div>
                          </div>
                        `:""}

                    <!-- Scale Position -->
                    <div class="field-group" style="margin-bottom: 0;">
                      <div
                        class="field-title"
                        style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                      >
                        ${(0,s.kg)("editor.bar.scale.position",b,"Scale Position")}
                      </div>
                      <div
                        class="field-description"
                        style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                      >
                        ${(0,s.kg)("editor.bar.scale.position_desc",b,"Position the scale above or below the bar.")}
                      </div>
                      <div style="display: flex; gap: 8px;">
                        <button
                          type="button"
                          style="padding: 8px 16px; border: 2px solid ${"above"===h.scale_position?"var(--primary-color)":"var(--divider-color)"}; background: ${"above"===h.scale_position?"var(--primary-color)":"transparent"}; color: ${"above"===h.scale_position?"var(--text-primary-color)":"var(--primary-text-color)"}; border-radius: 8px; cursor: pointer; font-weight: 500; display: flex; align-items: center; gap: 6px;"
                          @click=${()=>r({scale_position:"above"})}
                        >
                          <ha-icon icon="mdi:arrow-up" style="--mdc-icon-size: 16px;"></ha-icon>
                          ${(0,s.kg)("editor.bar.scale.position_above",b,"Above")}
                        </button>
                        <button
                          type="button"
                          style="padding: 8px 16px; border: 2px solid ${"above"!==h.scale_position?"var(--primary-color)":"var(--divider-color)"}; background: ${"above"!==h.scale_position?"var(--primary-color)":"transparent"}; color: ${"above"!==h.scale_position?"var(--text-primary-color)":"var(--primary-text-color)"}; border-radius: 8px; cursor: pointer; font-weight: 500; display: flex; align-items: center; gap: 6px;"
                          @click=${()=>r({scale_position:"below"})}
                        >
                          <ha-icon icon="mdi:arrow-down" style="--mdc-icon-size: 16px;"></ha-icon>
                          ${(0,s.kg)("editor.bar.scale.position_below",b,"Below")}
                        </button>
                      </div>
                    </div>
                  </div>
                `:o.qy`
                  <div
                    style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                  >
                    ${(0,s.kg)("editor.bar.scale.enable_toggle",b,"Enable the toggle above to configure scale settings")}
                  </div>
                `}
        </div>

        <!-- Minimal Style Icon Configuration Section -->
        ${"minimal"===y?o.qy`
                <div
                  class="settings-section"
                  style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
                >
                  <div
                    class="section-title"
                    style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
                  >
                    ${(0,s.kg)("editor.bar.minimal.icon_config",b,"Minimal Style Icon")}
                  </div>

                  <!-- Enable Icon Toggle -->
                  ${this.renderFieldSection((0,s.kg)("editor.bar.minimal.icon_enabled",b,"Enable Icon"),(0,s.kg)("editor.bar.minimal.icon_enabled_desc",b,"Enable icon display to replace or enhance the dot indicator in minimal bar style."),t,{minimal_icon_enabled:h.minimal_icon_enabled||!1},[this.booleanField("minimal_icon_enabled")],e=>r({minimal_icon_enabled:e.detail.value.minimal_icon_enabled}))}
                  ${h.minimal_icon_enabled?o.qy`
                        ${this.renderIconField((0,s.kg)("editor.bar.minimal.icon",b,"Icon"),(0,s.kg)("editor.bar.minimal.icon_desc",b,"Select the icon to display (e.g., mdi:battery)."),t,h.minimal_icon||"",e=>r({minimal_icon:e}))}

                        <!-- Icon Display Mode -->
                        <div class="field-group" style="margin-bottom: 16px;">
                          <div
                            class="field-title"
                            style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 4px;"
                          >
                            ${(0,s.kg)("editor.bar.minimal.icon_mode",b,"Display Mode")}
                          </div>
                          <div
                            class="field-description"
                            style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 8px;"
                          >
                            ${(0,s.kg)("editor.bar.minimal.icon_mode_desc",b,"Choose how the icon is displayed with the dot.")}
                          </div>
                          ${this.renderUcForm(t,{minimal_icon_mode:h.minimal_icon_mode||"icon-in-dot"},[this.selectField("minimal_icon_mode",[{value:"dot-only",label:(0,s.kg)("editor.bar.minimal.mode_dot_only",b,"Dot Only")},{value:"icon-only",label:(0,s.kg)("editor.bar.minimal.mode_icon_only",b,"Icon Only")},{value:"icon-in-dot",label:(0,s.kg)("editor.bar.minimal.mode_icon_in_dot",b,"Icon in Dot")}])],e=>{const t=e.detail.value.minimal_icon_mode;t!==(h.minimal_icon_mode||"icon-in-dot")&&(r({minimal_icon_mode:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                        </div>

                        <!-- Icon Size Auto Toggle -->
                        ${this.renderFieldSection((0,s.kg)("editor.bar.minimal.icon_size_auto",b,"Auto Size"),(0,s.kg)("editor.bar.minimal.icon_size_auto_desc",b,"Automatically scale icon size based on bar height."),t,{minimal_icon_size_auto:!1!==h.minimal_icon_size_auto},[this.booleanField("minimal_icon_size_auto")],e=>r({minimal_icon_size_auto:e.detail.value.minimal_icon_size_auto}))}

                        <!-- Manual Icon Size (only if auto is disabled) -->
                        ${!1===h.minimal_icon_size_auto?o.qy`
                              ${this.renderSliderField((0,s.kg)("editor.bar.minimal.icon_size",b,"Icon Size"),(0,s.kg)("editor.bar.minimal.icon_size_desc",b,"Manually set the icon size in pixels."),h.minimal_icon_size||24,24,8,48,1,e=>{r({minimal_icon_size:e})},"px")}
                            `:""}

                        <!-- Use Dot Color Toggle -->
                        ${this.renderFieldSection((0,s.kg)("editor.bar.minimal.use_dot_color",b,"Use Dot Color"),(0,s.kg)("editor.bar.minimal.use_dot_color_desc",b,"Use the dot color (including gradient colors) for the icon."),t,{minimal_icon_use_dot_color:!1!==h.minimal_icon_use_dot_color},[this.booleanField("minimal_icon_use_dot_color")],e=>r({minimal_icon_use_dot_color:e.detail.value.minimal_icon_use_dot_color}))}

                        <!-- Custom Icon Color (only if use_dot_color is false) -->
                        ${!1===h.minimal_icon_use_dot_color?o.qy`
                              <div class="field-container" style="margin-bottom: 16px;">
                                <div class="field-title">
                                  ${(0,s.kg)("editor.bar.minimal.icon_color",b,"Icon Color")}
                                </div>
                                <div class="field-description">
                                  ${(0,s.kg)("editor.bar.minimal.icon_color_desc",b,"Set a custom color for the icon.")}
                                </div>
                                <ultra-color-picker
                                  style="width: 100%;"
                                  .value=${h.minimal_icon_color||""}
                                  .defaultValue=${"var(--primary-color)"}
                                  .hass=${t}
                                  @value-changed=${e=>r({minimal_icon_color:e.detail.value})}
                                ></ultra-color-picker>
                              </div>
                            `:""}
                      `:o.qy`
                        <div
                          style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                        >
                          ${(0,s.kg)("editor.bar.minimal.enable_toggle",b,"Enable the toggle above to configure icon settings")}
                        </div>
                      `}
                </div>
              `:""}

        <!-- Percentage Text Display Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,s.kg)("editor.bar.text_display.title",b,"Text Display"),(0,s.kg)("editor.bar.text_display.desc",b,"Control the visibility and appearance of text values shown directly on the bar. For difference and template modes, you can choose to display raw entity values instead of percentages."),t,{show_percentage:f},[this.booleanField("show_percentage")],e=>{const t=this.normalizeBoolean(e.detail.value.show_percentage,!0);r(Object.assign({show_percentage:t},t?{}:{show_value:!1}))})}

          ${f?o.qy`
                  <!-- Display Type Toggle - Only show for difference and template types -->
                  ${"difference"===h.percentage_type?o.qy`
                        ${this.renderFieldSection((0,s.kg)("editor.bar.text_display.show_value",b,"Show Value Instead of Percentage"),(0,s.kg)("editor.bar.text_display.show_value_desc",b,'When enabled, shows the actual entity value instead of percentage. Useful for displaying raw sensor values like "45 kWh" instead of "75%".'),t,{show_value:x},[this.booleanField("show_value")],e=>r({show_value:this.normalizeBoolean(e.detail.value.show_value,!1)}))}
                      `:""}
                  ${this.renderSliderField((0,s.kg)("editor.bar.text_display.text_size",b,"Text Size"),(0,s.kg)("editor.bar.text_display.text_size_desc",b,"Adjust the size of the text displayed on the bar."),h.percentage_text_size||14,14,8,100,1,e=>{r({percentage_text_size:e})},"px")}
                  <div class="field-group" style="margin-bottom: 16px;">
                    <div class="field-title">
                      ${(0,s.kg)("editor.bar.text_display.text_alignment",b,"Text Alignment")}
                    </div>
                    ${this.renderUcForm(t,{percentage_text_alignment:h.percentage_text_alignment||"center"},[this.selectField("percentage_text_alignment",[{value:"left",label:(0,s.kg)("editor.common.left",b,"Left")},{value:"center",label:(0,s.kg)("editor.common.center",b,"Center")},{value:"right",label:(0,s.kg)("editor.common.right",b,"Right")},{value:"follow-fill",label:(0,s.kg)("editor.bar.text_display.follow_fill",b,"Follow Fill")}])],e=>{const t=e.detail.value.percentage_text_alignment;t!==(h.percentage_text_alignment||"center")&&(r({percentage_text_alignment:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                  </div>

                  <!-- Text Formatting -->
                  <div class="field-container" style="margin-bottom: 16px;">
                    <div class="field-title">
                      ${(0,s.kg)("editor.bar.text_display.text_formatting",b,"Text Formatting")}
                    </div>
                    <div class="field-description">
                      ${(0,s.kg)("editor.bar.text_display.text_formatting_desc",b,"Apply formatting styles to the percentage text.")}
                    </div>
                    <div class="format-buttons" style="display: flex; gap: 8px; flex-wrap: wrap;">
                      <button
                        class="format-btn ${h.percentage_text_bold?"active":""}"
                        @click=${()=>r({percentage_text_bold:!h.percentage_text_bold})}
                        style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${h.percentage_text_bold?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${h.percentage_text_bold?"var(--text-primary-color)":"var(--primary-text-color)"};"
                        title="Bold"
                      >
                        <ha-icon icon="mdi:format-bold"></ha-icon>
                      </button>
                      <button
                        class="format-btn ${h.percentage_text_italic?"active":""}"
                        @click=${()=>r({percentage_text_italic:!h.percentage_text_italic})}
                        style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${h.percentage_text_italic?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${h.percentage_text_italic?"var(--text-primary-color)":"var(--primary-text-color)"};"
                        title="Italic"
                      >
                        <ha-icon icon="mdi:format-italic"></ha-icon>
                      </button>
                      <button
                        class="format-btn ${h.percentage_text_strikethrough?"active":""}"
                        @click=${()=>r({percentage_text_strikethrough:!h.percentage_text_strikethrough})}
                        style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${h.percentage_text_strikethrough?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${h.percentage_text_strikethrough?"var(--text-primary-color)":"var(--primary-text-color)"};"
                        title="Strikethrough"
                      >
                        <ha-icon icon="mdi:format-strikethrough"></ha-icon>
                      </button>
                    </div>
                  </div>

                  <!-- Text Color -->
                  <div class="field-container" style="margin-bottom: 16px;">
                    <div class="field-title">
                      ${(0,s.kg)("editor.bar.colors.text_color",b,"Text Color")}
                    </div>
                    <div class="field-description">
                      ${(0,s.kg)("editor.bar.colors.text_color_desc",b,"Choose the color for the text displayed on the bar.")}
                    </div>
                    <ultra-color-picker
                      style="width: 100%;"
                      .value=${h.percentage_text_color||""}
                      .defaultValue=${"var(--primary-text-color)"}
                      .hass=${t}
                      @value-changed=${e=>r({percentage_text_color:e.detail.value})}
                    ></ultra-color-picker>
                  </div>
                `:""}
        </div>

        <!-- Unified Template Section (wrapped in a settings-section box so the
             title, help button, toggle and template editor are visually contained
             alongside every other module section). -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="switch-container"
            style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px;"
          >
            <div
              class="switch-label-row"
              style="display:flex;align-items:center;gap:8px;"
            >
              <span class="switch-label" style="font-size:16px;font-weight:600;white-space:nowrap;">
                ${(0,s.kg)("editor.bar.unified_template.toggle",b,"Template Mode")}
              </span>
              <button
                type="button"
                class="help-btn"
                style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                title="${(0,s.kg)("editor.bar.unified_template.cheatsheet",b,"Template cheatsheet")}"
                @click=${e=>{e.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"bar"}}))}}
              >
                <ha-icon icon="mdi:help-circle" style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"></ha-icon>
              </button>
            </div>
            ${this.renderUcForm(t,{unified_template_mode:h.unified_template_mode||!1},[this.booleanField("unified_template_mode")],e=>r({unified_template_mode:e.detail.value.unified_template_mode}))}
          </div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; line-height: 1.5;">
            ${(0,s.kg)("editor.bar.unified_template.desc",b,"One Jinja template returning JSON: value, label, color, left_label, right_label, value_min, value_max, ticks.")}
          </div>
          ${h.unified_template_mode?o.qy`
                  <div
                    style="margin-top:12px;"
                    @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
                    @dragstart=${e=>e.stopPropagation()}
                    @insert-snippet=${e=>{var t,i,o;const a=e.currentTarget.querySelector("ultra-template-editor");null===(t=null==a?void 0:a.insertAtCursor)||void 0===t||t.call(a,null!==(o=null===(i=e.detail)||void 0===i?void 0:i.value)&&void 0!==o?o:"")}}
                  >
                    <ultra-template-editor
                      .hass=${t}
                      .value=${h.unified_template||""}
                      .placeholder=${'{\n  "value": "{{ states(\'sensor.battery_level\') | float }}",\n  "label": "{{ friendly_name }}"\n}'}
                      .minHeight=${120}
                      .maxHeight=${400}
                      @value-changed=${e=>r({unified_template:e.detail.value})}
                    ></ultra-template-editor>
                    ${this.renderTemplateKeyWarning(h.unified_template,a.A,b)}
                  </div>
                `:""}
        </div>

        <!-- Left Side Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,s.kg)("editor.bar.left.title",b,"Left Side"),"",t,{left_enabled:h.left_enabled||!1},[this.booleanField("left_enabled")],e=>{const t=e.detail.value.left_enabled;r(t?{left_enabled:!0,left_title:h.left_title||"Fuel",left_entity:h.left_entity||"",left_title_size:h.left_title_size||14,left_value_size:h.left_value_size||14,left_title_color:h.left_title_color||"var(--primary-text-color)",left_value_color:h.left_value_color||"var(--primary-text-color)"}:{left_enabled:!1,left_title:"",left_entity:""})})}

          <div
            class="field-description"
            style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 16px;"
          >
            ${(0,s.kg)("editor.bar.left.desc",b,"Configure the title and entity value displayed on the left side of the bar. This is useful for showing labels like 'Range' or 'Battery' along with their values.")}
          </div>

          ${h.left_enabled?o.qy`
                  <div class="field-group" style="margin-bottom: 16px;">
                    <ha-form
                      .hass=${t}
                      .data=${{left_title:h.left_title||""}}
                      .schema=${[{name:"left_title",selector:{text:{}},label:""}]}
                      .computeLabel=${()=>""}
                      @value-changed=${e=>r({left_title:e.detail.value.left_title})}
                    ></ha-form>
                  </div>

                  <!-- Left Entity (value source) -->
                  <div class="field-group" style="margin-bottom: 16px;">
                    <ha-form
                      .hass=${t}
                      .data=${{left_entity:h.left_entity||""}}
                      .schema=${[{name:"left_entity",selector:{entity:{}},label:""}]}
                      .computeLabel=${()=>""}
                      @value-changed=${e=>r({left_entity:e.detail.value.left_entity})}
                    ></ha-form>
                  </div>

                  ${this.renderSliderField((0,s.kg)("editor.bar.left.title_size",b,"Title Size"),"",h.left_title_size||14,14,8,32,1,e=>{r({left_title_size:e})},"px")}
                  ${this.renderSliderField((0,s.kg)("editor.bar.left.value_size",b,"Value Size"),"",h.left_value_size||14,14,8,32,1,e=>{r({left_value_size:e})},"px")}
                  <!-- Left Side Actions (isolated component) -->
                  <bar-side-actions
                    .hass=${t}
                    .side=${"left"}
                    .tapAction=${h.left_tap_action}
                    .holdAction=${h.left_hold_action}
                    .doubleTapAction=${h.left_double_tap_action}
                    @actions-changed=${e=>{e.stopPropagation(),r(e.detail.updates)}}
                  ></bar-side-actions>
                `:o.qy`
                  <div
                    style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                  >
                    ${(0,s.kg)("editor.bar.left.enable_toggle",b,"Enable the toggle above to configure left side settings")}
                  </div>
                `}
        </div>

        <!-- Right Side Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,s.kg)("editor.bar.right.title",b,"Right Side"),"",t,{right_enabled:h.right_enabled||!1},[this.booleanField("right_enabled")],e=>{const t=e.detail.value.right_enabled;r(t?{right_enabled:!0,right_title:h.right_title||"Range",right_entity:h.right_entity||"",right_title_size:h.right_title_size||14,right_value_size:h.right_value_size||14,right_title_color:h.right_title_color||"var(--primary-text-color)",right_value_color:h.right_value_color||"var(--primary-text-color)"}:{right_enabled:!1,right_title:"",right_entity:""})})}

          <div
            class="field-description"
            style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 16px;"
          >
            ${(0,s.kg)("editor.bar.right.desc",b,"Configure the title and entity value displayed on the right side of the bar. This is ideal for complementary information like 'Time to Full' or secondary measurements.")}
          </div>

          ${h.right_enabled?o.qy`
                  <div class="field-group" style="margin-bottom: 16px;">
                    <ha-form
                      .hass=${t}
                      .data=${{right_title:h.right_title||""}}
                      .schema=${[{name:"right_title",selector:{text:{}},label:""}]}
                      .computeLabel=${()=>""}
                      @value-changed=${e=>r({right_title:e.detail.value.right_title})}
                    ></ha-form>
                  </div>
                  <div class="field-group" style="margin-bottom: 16px;">
                    <ha-form
                      .hass=${t}
                      .data=${{right_entity:h.right_entity||""}}
                      .schema=${[{name:"right_entity",selector:{entity:{}},label:""}]}
                      .computeLabel=${()=>""}
                      @value-changed=${e=>r({right_entity:e.detail.value.right_entity})}
                    ></ha-form>
                  </div>

                  ${this.renderSliderField((0,s.kg)("editor.bar.right.title_size",b,"Title Size"),"",h.right_title_size||14,14,8,32,1,e=>{r({right_title_size:e})},"px")}
                  ${this.renderSliderField((0,s.kg)("editor.bar.right.value_size",b,"Value Size"),"",h.right_value_size||14,14,8,32,1,e=>{r({right_value_size:e})},"px")}
                  <!-- Right Side Actions (isolated component) -->
                  <bar-side-actions
                    .hass=${t}
                    .side=${"right"}
                    .tapAction=${h.right_tap_action}
                    .holdAction=${h.right_hold_action}
                    .doubleTapAction=${h.right_double_tap_action}
                    @actions-changed=${e=>{e.stopPropagation(),r(e.detail.updates)}}
                  ></bar-side-actions>
                `:o.qy`
                  <div
                    style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                  >
                    ${(0,s.kg)("editor.bar.right.enable_toggle",b,"Enable the toggle above to configure right side settings")}
                  </div>
                `}
        </div>

        <!-- Colors Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,s.kg)("editor.bar.colors.title",b,"Colors")}
          </div>

          
          <div class="field-group" style="margin-bottom: 24px;">
            <div
              class="colors-grid"
              style="display: grid; grid-template-columns: 1fr; gap: 16px;"
            >
              <div class="color-item">
                <div
                  class="field-title"
                  style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                >
                  ${(0,s.kg)("editor.bar.colors.bar_color",b,"Bar Color")}
                </div>
                <ultra-color-picker style="width: 100%;"
                  .value=${h.bar_color||""}
                  .defaultValue=${"var(--primary-color)"}
                  .hass=${t}
                  @value-changed=${e=>r({bar_color:e.detail.value})}
                ></ultra-color-picker>
              </div>

              <div class="color-item">
                <div
                  class="field-title"
                  style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                >
                  ${(0,s.kg)("editor.bar.colors.background_color",b,"Background Color")}
                </div>
                <ultra-color-picker style="width: 100%;"
                  .value=${h.bar_background_color||""}
                  .defaultValue=${"transparent"}
                  .hass=${t}
                  @value-changed=${e=>r({bar_background_color:e.detail.value})}
                ></ultra-color-picker>
              </div>

              <div class="color-item">
                <div
                  class="field-title"
                  style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                >
                  ${(0,s.kg)("editor.bar.colors.border_color",b,"Border Color")}
                </div>
                <ultra-color-picker style="width: 100%;"
                  .value=${h.bar_border_color||""}
                  .defaultValue=${"var(--divider-color)"}
                  .hass=${t}
                  @value-changed=${e=>r({bar_border_color:e.detail.value})}
                ></ultra-color-picker>
              </div>

              <div class="color-item">
                <div
                  class="field-title"
                  style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                >
                  ${(0,s.kg)("editor.bar.colors.limit_indicator",b,"Limit Indicator")}
                </div>
                <ultra-color-picker style="width: 100%;"
                  .value=${h.limit_color||""}
                  .defaultValue=${"var(--warning-color)"}
                  .hass=${t}
                  @value-changed=${e=>r({limit_color:e.detail.value})}
                ></ultra-color-picker>
              </div>


              ${"minimal"===y?o.qy`
                      <div class="color-item">
                        <div
                          class="field-title"
                          style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                        >
                          ${(0,s.kg)("editor.bar.colors.dot_color",b,"Dot Color")}
                        </div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${h.dot_color||""}
                          .defaultValue=${"var(--primary-color)"}
                          .hass=${t}
                          @value-changed=${e=>r({dot_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>
                    `:""}
            </div>
          </div>

          <!-- Minimal Style Icon Configuration -->
          ${"minimal"===y?o.qy`
                  ${this.renderFieldSection((0,s.kg)("editor.bar.minimal.icon_enabled",b,"Enable Icon"),(0,s.kg)("editor.bar.minimal.icon_enabled_desc",b,"Show an icon on the minimal bar indicator"),t,{minimal_icon_enabled:h.minimal_icon_enabled||!1},[this.booleanField("minimal_icon_enabled")],e=>r({minimal_icon_enabled:e.detail.value.minimal_icon_enabled}))}
                  ${h.minimal_icon_enabled?o.qy`
                        <!-- Icon Selection -->
                        <div class="field-group" style="margin-top: 16px;">
                          ${this.renderFieldSection((0,s.kg)("editor.bar.minimal.icon",b,"Icon"),(0,s.kg)("editor.bar.minimal.icon_desc",b,"Choose an icon to display (e.g., mdi:battery)"),t,{minimal_icon:h.minimal_icon||""},[this.iconField("minimal_icon")],e=>r(e.detail.value))}
                        </div>

                        <!-- Icon Display Mode -->
                        <div class="field-group" style="margin-top: 16px;">
                          ${this.renderFieldSection((0,s.kg)("editor.bar.minimal.icon_mode",b,"Display Mode"),(0,s.kg)("editor.bar.minimal.icon_mode_desc",b,"How to display the icon"),t,{minimal_icon_mode:h.minimal_icon_mode||"icon-in-dot"},[this.selectField("minimal_icon_mode",[{value:"dot-only",label:(0,s.kg)("editor.bar.minimal.mode_dot_only",b,"Dot Only")},{value:"icon-only",label:(0,s.kg)("editor.bar.minimal.mode_icon_only",b,"Icon Only")},{value:"icon-in-dot",label:(0,s.kg)("editor.bar.minimal.mode_icon_in_dot",b,"Icon in Dot")}])],e=>{r(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                        </div>

                        <!-- Icon Size Controls -->
                        ${this.renderFieldSection((0,s.kg)("editor.bar.minimal.icon_size_auto",b,"Auto-Scale Icon"),(0,s.kg)("editor.bar.minimal.icon_size_auto_desc",b,"Automatically scale icon with bar height"),t,{minimal_icon_size_auto:!1!==h.minimal_icon_size_auto},[this.booleanField("minimal_icon_size_auto")],e=>r({minimal_icon_size_auto:e.detail.value.minimal_icon_size_auto}))}
                        ${!1===h.minimal_icon_size_auto?o.qy`
                              ${this.renderSliderField((0,s.kg)("editor.bar.minimal.icon_size",b,"Icon Size"),(0,s.kg)("editor.bar.minimal.icon_size_desc",b,"Custom icon size in pixels"),h.minimal_icon_size||24,24,8,48,2,e=>{r({minimal_icon_size:e})},"px")}
                            `:""}

                        <!-- Icon Color Controls -->
                        ${this.renderFieldSection((0,s.kg)("editor.bar.minimal.use_dot_color",b,"Use Dot Color"),(0,s.kg)("editor.bar.minimal.use_dot_color_desc",b,"Use the dot color for the icon (matches gradient)"),t,{minimal_icon_use_dot_color:!1!==h.minimal_icon_use_dot_color},[this.booleanField("minimal_icon_use_dot_color")],e=>r({minimal_icon_use_dot_color:e.detail.value.minimal_icon_use_dot_color}))}
                        ${!1===h.minimal_icon_use_dot_color?o.qy`
                              <div class="field-container" style="margin-top: 16px;">
                                <div class="field-title">
                                  ${(0,s.kg)("editor.bar.minimal.icon_color",b,"Icon Color")}
                                </div>
                                <div class="field-description">
                                  ${(0,s.kg)("editor.bar.minimal.icon_color_desc",b,"Custom color for the icon")}
                                </div>
                                <ultra-color-picker
                                  style="width: 100%;"
                                  .value=${h.minimal_icon_color||""}
                                  .defaultValue=${"var(--primary-color)"}
                                  .hass=${t}
                                  @value-changed=${e=>r({minimal_icon_color:e.detail.value})}
                                ></ultra-color-picker>
                              </div>
                            `:""}
                      `:""}
                `:""}

          <!-- Left Side Colors -->
          ${h.left_enabled?o.qy`
                  <div class="field-group" style="margin-bottom: 24px;">
                    <div
                      class="field-title"
                      style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px; color: var(--primary-color);"
                    >
                      ${(0,s.kg)("editor.bar.colors.left_side",b,"Left Side Colors")}
                    </div>
                    <div
                      class="colors-grid"
                      style="display: grid; grid-template-columns: 1fr; gap: 16px;"
                    >
                      <div class="color-item">
                        <div
                          class="field-title"
                          style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                        >
                          ${(0,s.kg)("editor.bar.colors.title_color",b,"Title Color")}
                        </div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${h.left_title_color||""}
                          .defaultValue=${"var(--primary-text-color)"}
                          .hass=${t}
                          @value-changed=${e=>r({left_title_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>

                      <div class="color-item">
                        <div
                          class="field-title"
                          style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                        >
                          ${(0,s.kg)("editor.bar.colors.value_color",b,"Value Color")}
                        </div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${h.left_value_color||""}
                          .defaultValue=${"var(--primary-text-color)"}
                          .hass=${t}
                          @value-changed=${e=>r({left_value_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>
                    </div>
                  </div>
                `:""}

          <!-- Right Side Colors -->
          ${h.right_enabled?o.qy`
                  <div class="field-group">
                    <div
                      class="field-title"
                      style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px; color: var(--primary-color);"
                    >
                      ${(0,s.kg)("editor.bar.colors.right_side",b,"Right Side Colors")}
                    </div>
                    <div
                      class="colors-grid"
                      style="display: grid; grid-template-columns: 1fr; gap: 16px;"
                    >
                      <div class="color-item">
                        <div
                          class="field-title"
                          style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                        >
                          ${(0,s.kg)("editor.bar.colors.title_color",b,"Title Color")}
                        </div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${h.right_title_color||""}
                          .defaultValue=${"var(--primary-text-color)"}
                          .hass=${t}
                          @value-changed=${e=>r({right_title_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>

                      <div class="color-item">
                        <div
                          class="field-title"
                          style="font-size: 14px !important; font-weight: 600 !important; margin-bottom: 8px;"
                        >
                          ${(0,s.kg)("editor.bar.colors.value_color",b,"Value Color")}
                        </div>
                        <ultra-color-picker
                          style="width: 100%;"
                          .value=${h.right_value_color||""}
                          .defaultValue=${"var(--primary-text-color)"}
                          .hass=${t}
                          @value-changed=${e=>r({right_value_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>
                    </div>
                  </div>
                `:""}
        </div>

        <!-- Gradient Mode -->
        <div class="settings-section" style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 16px;">
          ${this.renderFieldSection((0,s.kg)("editor.bar.gradient.title",b,"Gradient Mode"),(0,s.kg)("editor.bar.gradient.desc",b,"Apply a color gradient to the bar fill. When enabled, choose how the gradient is displayed and customize the color stops below."),t,{use_gradient:h.use_gradient||!1},[this.booleanField("use_gradient")],e=>{const t=e.detail.value.use_gradient,i={use_gradient:t};!t||h.gradient_stops&&0!==h.gradient_stops.length||(i.gradient_stops=(0,n.FB)(),i.gradient_display_mode=h.gradient_display_mode||"full"),r(i)})}

          ${h.use_gradient?o.qy`
                  <div class="field-group" style="margin-bottom: 12px;">
                    ${this.renderUcForm(t,{gradient_display_mode:h.gradient_display_mode||"full"},[this.selectField("gradient_display_mode",[{value:"full",label:(0,s.kg)("editor.bar.gradient.full",b,"Full")},{value:"cropped",label:(0,s.kg)("editor.bar.gradient.cropped",b,"Cropped")},{value:"value-based",label:(0,s.kg)("editor.bar.gradient.value_based",b,"Value-Based")}])],e=>{const t=e.detail.value.gradient_display_mode;t!==(h.gradient_display_mode||"full")&&(r({gradient_display_mode:t}),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                  </div>
                  <uc-gradient-editor
                    .stops=${h.gradient_stops||(0,n.FB)()}
                    .barSize=${this.getBarSizeFromHeight(null!==(u=h.height)&&void 0!==u?u:20)}
                    .barRadius=${this.getBarRadiusFromStyle(h.border_radius||10)}
                    .barStyle=${h.bar_style||"flat"}
                    @gradient-changed=${e=>{r({gradient_stops:e.detail.stops})}}
                  ></uc-gradient-editor>
                `:""}
        </div>

        <!-- Bar Animation -->
        <div class="settings-section" style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 16px;">
          ${this.renderFieldSection((0,s.kg)("editor.bar.animation.title",b,"Bar Animation"),(0,s.kg)("editor.bar.animation.desc",b,"Animate the bar fill using presets like charging stripes, pulse, shimmer, and more. You can trigger animations based on an entity's state or attribute, and optionally override the animation when another condition is met."),t,{bar_animation_enabled:h.bar_animation_enabled||!1},[this.booleanField("bar_animation_enabled")],e=>r({bar_animation_enabled:e.detail.value.bar_animation_enabled}))}
          ${h.bar_animation_enabled?o.qy`
                  <div class="conditional-fields-group" style="margin: 16px 0;">
                    <div class="conditional-fields-header">
                      ${(0,s.kg)("editor.bar.animation.trigger.title",b,"Animation Trigger")}
                    </div>
                    <div class="conditional-fields-content">
                      <div
                        style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                      >
                        ${(0,s.kg)("editor.bar.animation.trigger.desc",b,"Select an entity to watch and define the value + animation to apply when it matches.")}
                      </div>
                      ${this.renderEntityPickerWithVariables(t,i,"bar_animation_entity",h.bar_animation_entity||"",e=>r({bar_animation_entity:e}),void 0,(0,s.kg)("editor.common.entity",b,"Entity"))}
                      ${this.renderSettingsSection("","",[{title:(0,s.kg)("editor.bar.animation.trigger.type",b,"Trigger Type"),description:(0,s.kg)("editor.bar.animation.trigger.type_desc",b,"Choose whether to compare the entity state or an attribute"),hass:t,data:{bar_animation_trigger_type:h.bar_animation_trigger_type||"state"},schema:[this.selectField("bar_animation_trigger_type",[{value:"state",label:(0,s.kg)("editor.common.state",b,"State")},{value:"attribute",label:(0,s.kg)("editor.common.attribute",b,"Attribute")}])],onChange:e=>r(e.detail.value)},..."attribute"===(h.bar_animation_trigger_type||"state")?[{title:(0,s.kg)("editor.common.attribute_name",b,"Attribute Name"),description:(0,s.kg)("editor.bar.animation.trigger.attribute_name_desc",b,"Name of the attribute to compare (e.g., charging_status)"),hass:t,data:{bar_animation_attribute:h.bar_animation_attribute||""},schema:[this.textField("bar_animation_attribute")],onChange:e=>r({bar_animation_attribute:e.detail.value.bar_animation_attribute})}]:[],...(h.bar_animation_entity||"").trim()?[{title:(0,s.kg)("editor.bar.animation.trigger.match_value",b,"Match Value"),description:(0,s.kg)("editor.bar.animation.trigger.match_value_desc",b,"Text to compare against the state or attribute (comparison is string-based)."),hass:t,data:{bar_animation_value:h.bar_animation_value||""},schema:[this.textField("bar_animation_value")],onChange:e=>r({bar_animation_value:e.detail.value.bar_animation_value})}]:[],{title:(0,s.kg)("editor.bar.animation.type",b,"Animation Type"),description:(0,s.kg)("editor.bar.animation.type_desc",b,"Select how the bar should animate when triggered."),hass:t,data:{bar_animation_type:h.bar_animation_type||"none"},schema:[this.selectField("bar_animation_type",[{value:"none",label:(0,s.kg)("editor.common.none",b,"None")},{value:"charging",label:(0,s.kg)("editor.bar.animation.types.charging",b,"Charging (Diagonal Lines)")},{value:"pulse",label:(0,s.kg)("editor.bar.animation.types.pulse",b,"Pulse")},{value:"blinking",label:(0,s.kg)("editor.bar.animation.types.blinking",b,"Blinking")},{value:"bouncing",label:(0,s.kg)("editor.bar.animation.types.bouncing",b,"Bouncing")},{value:"glow",label:(0,s.kg)("editor.bar.animation.types.glow",b,"Glow")},{value:"rainbow",label:(0,s.kg)("editor.bar.animation.types.rainbow",b,"Rainbow")},{value:"bubbles",label:(0,s.kg)("editor.bar.animation.types.bubbles",b,"Bubbles")},{value:"fill",label:(0,s.kg)("editor.bar.animation.types.fill",b,"Fill")},{value:"ripple",label:(0,s.kg)("editor.bar.animation.types.ripple",b,"Ripple")},{value:"traffic",label:(0,s.kg)("editor.bar.animation.types.traffic",b,"Traffic (Barber Pole)")},{value:"heartbeat",label:(0,s.kg)("editor.bar.animation.types.heartbeat",b,"Heartbeat")},{value:"flicker",label:(0,s.kg)("editor.bar.animation.types.flicker",b,"Flicker")},{value:"shimmer",label:(0,s.kg)("editor.bar.animation.types.shimmer",b,"Shimmer")},{value:"vibrate",label:(0,s.kg)("editor.bar.animation.types.vibrate",b,"Vibrate")}])],onChange:e=>r(e.detail.value)},{title:(0,s.kg)("editor.bar.animation.direction",b,"Animation Direction"),description:(0,s.kg)("editor.bar.animation.direction_desc",b,"Choose a fixed direction, or derive direction from a sensor value."),hass:t,data:{bar_animation_direction:h.bar_animation_direction||"normal"},schema:[this.selectField("bar_animation_direction",[{value:"normal",label:(0,s.kg)("editor.bar.animation.direction_modes.normal",b,"Normal")},{value:"reverse",label:(0,s.kg)("editor.bar.animation.direction_modes.reverse",b,"Reverse")},{value:"sensor",label:(0,s.kg)("editor.bar.animation.direction_modes.sensor",b,"From Sensor")}])],onChange:e=>r(e.detail.value)},..."sensor"===(h.bar_animation_direction||"normal")?[{title:(0,s.kg)("editor.bar.animation.direction_entity",b,"Direction Sensor"),description:(0,s.kg)("editor.bar.animation.direction_entity_desc",b,"Negative values reverse the animation. Positive values keep normal direction."),hass:t,data:{bar_animation_direction_entity:h.bar_animation_direction_entity||""},schema:[{name:"bar_animation_direction_entity",selector:{entity:{}}}],onChange:e=>r({bar_animation_direction_entity:e.detail.value.bar_animation_direction_entity})},{title:(0,s.kg)("editor.bar.animation.direction_attribute",b,"Direction Attribute (Optional)"),description:(0,s.kg)("editor.bar.animation.direction_attribute_desc",b,"Read this attribute instead of entity state when deriving direction."),hass:t,data:{bar_animation_direction_attribute:h.bar_animation_direction_attribute||""},schema:[this.textField("bar_animation_direction_attribute")],onChange:e=>r({bar_animation_direction_attribute:e.detail.value.bar_animation_direction_attribute})}]:[],{title:(0,s.kg)("editor.bar.animation.speed_mode",b,"Animation Speed Source"),description:(0,s.kg)("editor.bar.animation.speed_mode_desc",b,"Use a fixed speed value, or derive speed from a sensor."),hass:t,data:{bar_animation_speed_mode:h.bar_animation_speed_mode||"fixed"},schema:[this.selectField("bar_animation_speed_mode",[{value:"fixed",label:(0,s.kg)("editor.bar.animation.speed_modes.fixed",b,"Fixed")},{value:"sensor",label:(0,s.kg)("editor.bar.animation.speed_modes.sensor",b,"From Sensor")}])],onChange:e=>r(e.detail.value)},{title:(0,s.kg)("editor.bar.animation.speed",b,"Base Speed"),description:(0,s.kg)("editor.bar.animation.speed_desc",b,"1 = default speed. Higher values animate faster."),hass:t,data:{bar_animation_speed:Number(null!==(_=h.bar_animation_speed)&&void 0!==_?_:1)||1},schema:[this.numberField("bar_animation_speed",.1,20,.1)],onChange:e=>r({bar_animation_speed:e.detail.value.bar_animation_speed})},..."sensor"===(h.bar_animation_speed_mode||"fixed")?[{title:(0,s.kg)("editor.bar.animation.speed_entity",b,"Speed Sensor"),description:(0,s.kg)("editor.bar.animation.speed_entity_desc",b,"Entity whose numeric value controls animation speed."),hass:t,data:{bar_animation_speed_entity:h.bar_animation_speed_entity||""},schema:[{name:"bar_animation_speed_entity",selector:{entity:{}}}],onChange:e=>r({bar_animation_speed_entity:e.detail.value.bar_animation_speed_entity})},{title:(0,s.kg)("editor.bar.animation.speed_attribute",b,"Speed Attribute (Optional)"),description:(0,s.kg)("editor.bar.animation.speed_attribute_desc",b,"Read this attribute instead of entity state when deriving speed."),hass:t,data:{bar_animation_speed_attribute:h.bar_animation_speed_attribute||""},schema:[this.textField("bar_animation_speed_attribute")],onChange:e=>r({bar_animation_speed_attribute:e.detail.value.bar_animation_speed_attribute})},{title:(0,s.kg)("editor.bar.animation.speed_multiplier",b,"Sensor Multiplier"),description:(0,s.kg)("editor.bar.animation.speed_multiplier_desc",b,"Scales sensor values before converting to animation speed."),hass:t,data:{bar_animation_speed_multiplier:Number(null!==(v=h.bar_animation_speed_multiplier)&&void 0!==v?v:1)||1},schema:[this.numberField("bar_animation_speed_multiplier",0,1e3,.1)],onChange:e=>r({bar_animation_speed_multiplier:e.detail.value.bar_animation_speed_multiplier})}]:[]])}
                    </div>
                  </div>

                  <div class="conditional-fields-group" style="margin: 16px 0;">
                    <div class="conditional-fields-header">
                      ${(0,s.kg)("editor.bar.animation.override.title",b,"Action Animation Override")}
                    </div>
                    <div class="conditional-fields-content">
                      <div
                        style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                      >
                        ${(0,s.kg)("editor.bar.animation.override.desc",b,"Select an Action Entity and state to define when this animation should override the regular animation")}
                      </div>
                      ${this.renderEntityPickerWithVariables(t,i,"bar_animation_override_entity",h.bar_animation_override_entity||"",e=>r({bar_animation_override_entity:e}),void 0,(0,s.kg)("editor.common.entity",b,"Entity"))}
                      ${this.renderSettingsSection("","",[{title:(0,s.kg)("editor.bar.animation.trigger.type",b,"Trigger Type"),description:(0,s.kg)("editor.bar.animation.override.type_desc",b,"Compare the entity state or one of its attributes"),hass:t,data:{bar_animation_override_trigger_type:h.bar_animation_override_trigger_type||"state"},schema:[this.selectField("bar_animation_override_trigger_type",[{value:"state",label:(0,s.kg)("editor.common.state",b,"State")},{value:"attribute",label:(0,s.kg)("editor.common.attribute",b,"Attribute")}])],onChange:e=>{e.detail.value.bar_animation_override_trigger_type!==(h.bar_animation_override_trigger_type||"state")&&r(e.detail.value)}},..."attribute"===(h.bar_animation_override_trigger_type||"state")?[{title:(0,s.kg)("editor.common.attribute_name",b,"Attribute Name"),description:(0,s.kg)("editor.bar.animation.override.attribute_name_desc",b,"Name of the attribute to compare"),hass:t,data:{bar_animation_override_attribute:h.bar_animation_override_attribute||""},schema:[this.textField("bar_animation_override_attribute")],onChange:e=>r({bar_animation_override_attribute:e.detail.value.bar_animation_override_attribute})}]:[],{title:(0,s.kg)("editor.bar.animation.override.match_value",b,"Override Match Value"),description:(0,s.kg)("editor.bar.animation.override.match_value_desc",b,"String comparison against state or attribute"),hass:t,data:{bar_animation_override_value:h.bar_animation_override_value||""},schema:[this.textField("bar_animation_override_value")],onChange:e=>r({bar_animation_override_value:e.detail.value.bar_animation_override_value})},{title:(0,s.kg)("editor.bar.animation.override.type",b,"Override Animation Type"),description:(0,s.kg)("editor.bar.animation.override.type_desc",b,"Animation to use when override condition matches."),hass:t,data:{bar_animation_override_type:h.bar_animation_override_type||"none"},schema:[this.selectField("bar_animation_override_type",[{value:"none",label:(0,s.kg)("editor.common.none",b,"None")},{value:"charging",label:(0,s.kg)("editor.bar.animation.types.charging",b,"Charging (Diagonal Lines)")},{value:"pulse",label:(0,s.kg)("editor.bar.animation.types.pulse",b,"Pulse")},{value:"blinking",label:(0,s.kg)("editor.bar.animation.types.blinking",b,"Blinking")},{value:"bouncing",label:(0,s.kg)("editor.bar.animation.types.bouncing",b,"Bouncing")},{value:"glow",label:(0,s.kg)("editor.bar.animation.types.glow",b,"Glow")},{value:"rainbow",label:(0,s.kg)("editor.bar.animation.types.rainbow",b,"Rainbow")},{value:"bubbles",label:(0,s.kg)("editor.bar.animation.types.bubbles",b,"Bubbles")},{value:"fill",label:(0,s.kg)("editor.bar.animation.types.fill",b,"Fill")},{value:"ripple",label:(0,s.kg)("editor.bar.animation.types.ripple",b,"Ripple")},{value:"traffic",label:(0,s.kg)("editor.bar.animation.types.traffic",b,"Traffic (Barber Pole)")},{value:"heartbeat",label:(0,s.kg)("editor.bar.animation.types.heartbeat",b,"Heartbeat")},{value:"flicker",label:(0,s.kg)("editor.bar.animation.types.flicker",b,"Flicker")},{value:"shimmer",label:(0,s.kg)("editor.bar.animation.types.shimmer",b,"Shimmer")},{value:"vibrate",label:(0,s.kg)("editor.bar.animation.types.vibrate",b,"Vibrate")}])],onChange:e=>r(e.detail.value)}])}
                    </div>
                  </div>
                `:""}
        </div>

        <!-- Action Animation Override removed as standalone: now included inside Bar Animation section above -->
      </div>
    `}}function m(e,t,i,o,a){return p.prototype.renderGeneralTabContent.call(e,t,i,o,a)}(0,r.t)(a.UltraBarModule,p)},1218(e,t,i){i.r(t),i.d(t,{UltraButtonModuleSettings:()=>l,renderButtonGeneralTab:()=>s});var o=i(2618),a=i(940),r=i(5514),n=i(6478);i(7921);class l extends a.UltraButtonModule{getButtonStyles(e){return[{value:"flat",label:(0,n.kg)("editor.button.styles.flat",e,"Flat (Default)")},{value:"glossy",label:(0,n.kg)("editor.button.styles.glossy",e,"Glossy")},{value:"embossed",label:(0,n.kg)("editor.button.styles.embossed",e,"Embossed")},{value:"inset",label:(0,n.kg)("editor.button.styles.inset",e,"Inset")},{value:"gradient-overlay",label:(0,n.kg)("editor.button.styles.gradient_overlay",e,"Gradient Overlay")},{value:"neon-glow",label:(0,n.kg)("editor.button.styles.neon_glow",e,"Neon Glow")},{value:"outline",label:(0,n.kg)("editor.button.styles.outline",e,"Outline")},{value:"glass",label:(0,n.kg)("editor.button.styles.glass",e,"Glass")},{value:"metallic",label:(0,n.kg)("editor.button.styles.metallic",e,"Metallic")},{value:"neumorphic",label:(0,n.kg)("editor.button.styles.neumorphic",e,"Neumorphic")}]}getAlignmentOptions(e){return[{value:"left",label:(0,n.kg)("editor.button.align.left",e,"Left")},{value:"center",label:(0,n.kg)("editor.button.align.center",e,"Center")},{value:"right",label:(0,n.kg)("editor.button.align.right",e,"Right")},{value:"justify",label:(0,n.kg)("editor.button.align.justify",e,"Justify (Full Width)")}]}getIconPositionOptions(e){return[{value:"before",label:(0,n.kg)("editor.button.icon.before",e,"Before Text")},{value:"after",label:(0,n.kg)("editor.button.icon.after",e,"After Text")}]}renderGeneralTabContent(e,t,i,a){var r;const l=e,s=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Basic Settings -->
        ${this.renderSettingsSection((0,n.kg)("editor.button.basic.title",s,"Basic Settings"),(0,n.kg)("editor.button.basic.desc",s,"Configure the button appearance and text content."),[{title:(0,n.kg)("editor.button.text.title",s,"Button Text"),description:(0,n.kg)("editor.button.text.desc",s,"Text to display on the button (leave blank for icon-only)."),hass:t,data:l,schema:[this.textField("label")],onChange:e=>{a(e.detail.value),this.triggerPreviewUpdate()}},{title:(0,n.kg)("editor.button.style.title",s,"Button Style"),description:(0,n.kg)("editor.button.style.desc",s,"Visual style of the button"),hass:t,data:{style:l.style||"theme"},schema:[this.selectField("style",this.withThemeInheritOption(s,i,"button","style","flat",this.getButtonStyles(s)))],onChange:e=>{e.detail.value.style!==(l.style||"theme")&&(a(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}},{title:(0,n.kg)("editor.button.alignment.title",s,"Alignment"),description:(0,n.kg)("editor.button.alignment.desc",s,"How the button is aligned within its container"),hass:t,data:{alignment:l.alignment||"center"},schema:[this.selectField("alignment",this.getAlignmentOptions(s))],onChange:e=>{e.detail.value.alignment!==(l.alignment||"center")&&(a(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}

        <!-- Icon Settings -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.button.icon.title",s,"Icon Settings")}
          </div>

          <!-- Icon Field - Always visible -->
          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.button.icon_field",s,"Icon"),(0,n.kg)("editor.button.icon_desc",s,"Icon to display (e.g., mdi:home). Selecting an icon will automatically enable icon display."),t,{icon:l.icon||""},[this.iconField("icon")],e=>{const t=e.detail.value;t.icon&&t.icon.trim()?(t.show_icon=!0,l.icon_position||(t.icon_position="before")):t.icon&&t.icon.trim()||(t.show_icon=!1),a(t),this.triggerPreviewUpdate()})}
          </div>

          ${l.show_icon&&l.icon?o.qy`
                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,n.kg)("editor.button.icon_position",s,"Icon Position"),(0,n.kg)("editor.button.icon_position_desc",s,"Position of the icon relative to text"),t,{icon_position:l.icon_position||"before"},[this.selectField("icon_position",this.getIconPositionOptions(s))],e=>{e.detail.value.icon_position!==(l.icon_position||"before")&&(a(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))})}
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  ${this.renderSliderField((0,n.kg)("editor.button.icon_size",s,"Icon Size"),(0,n.kg)("editor.button.icon_size_desc",s,"Size of the icon in pixels"),"number"==typeof l.icon_size?l.icon_size:parseInt(String(l.icon_size||"24").replace("px",""))||24,24,12,64,1,e=>{a({icon_size:`${e}px`}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                </div>
              `:""}
        </div>

        <!-- Colors -->
        <div class="settings-section">
          <div class="section-title">${(0,n.kg)("editor.button.colors.title",s,"Colors")}</div>

          <!-- Entity-based Background Color Toggle -->
          <div class="field-group" style="margin-top: 16px; margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.button.use_entity_color",s,"Use Entity Color"),(0,n.kg)("editor.button.use_entity_color_desc",s,"Change button background color based on entity state"),t,{use_entity_color:l.use_entity_color||!1},[this.booleanField("use_entity_color")],e=>{const t=e.detail.value.use_entity_color;a({use_entity_color:t,background_color_entity:t?l.background_color_entity:""}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${l.use_entity_color?o.qy`
                <!-- Entity Picker -->
                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderEntityPickerWithVariables(t,i,"background_color_entity",l.background_color_entity||"",e=>{a({background_color_entity:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},void 0,(0,n.kg)("editor.button.background_color_entity",s,"Entity"))}
                </div>

                <!-- State Colors Mapping -->
                <div class="field-group" style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 8px;"
                  >
                    ${(0,n.kg)("editor.button.state_colors",s,"State Colors")}
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
                  >
                    ${(0,n.kg)("editor.button.state_colors_desc",s,"Optional: Map specific entity states to colors (e.g., on: green, off: gray). If not set, will use entity RGB color or state-based defaults.")}
                  </div>
                  ${this.renderStateColorsEditor(l.background_state_colors||{},t,s,e=>{a({background_state_colors:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                </div>
              `:o.qy`
                <!-- Static Background Color -->
                <div class="color-controls">
                  <ultra-color-picker
                    .label=${(0,n.kg)("editor.button.colors.background",s,"Background Color")}
                    .value=${l.background_color||"var(--primary-color)"}
                    .defaultValue=${"var(--primary-color)"}
                    .hass=${t}
                    @value-changed=${e=>{a({background_color:e.detail.value}),this.triggerPreviewUpdate()}}
                  ></ultra-color-picker>
                </div>
              `}

          <!-- Text Color (always visible) -->
          <div class="color-controls" style="margin-top: 16px;">
            <ultra-color-picker
              .label=${(0,n.kg)("editor.button.colors.text",s,"Text Color")}
              .value=${l.text_color||"white"}
              .defaultValue=${"white"}
              .hass=${t}
              @value-changed=${e=>{a({text_color:e.detail.value}),this.triggerPreviewUpdate()}}
            ></ultra-color-picker>
          </div>
        </div>

        <!-- Actions Setup Guide -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.button.actions.title",s,"Button Actions")}
          </div>
          <div
            class="section-description"
            style="margin-bottom: 16px; color: var(--secondary-text-color); font-size: 14px;"
          >
            ${(0,n.kg)("editor.button.actions.desc",s,"Configure what happens when users tap, hold, or double-tap this button.")}
          </div>
          <ha-button
            raised
            style="width: 100%; --mdc-theme-primary: var(--primary-color);"
            @click=${()=>{const e=new CustomEvent("switch-to-actions-tab",{bubbles:!0,composed:!0,detail:{tab:"actions"}});document.dispatchEvent(e)}}
          >
            <ha-icon icon="mdi:gesture-tap" slot="icon"></ha-icon>
            ${(0,n.kg)("editor.button.actions.setup",s,"Set up button actions")}
          </ha-button>
        </div>
      </div>
    `}renderStateColorsEditor(e,t,i,a){return o.qy`
      <div class="state-color-editor">
        ${Object.entries(e).map(([i,r])=>o.qy`
            <div
              class="state-color-row"
              style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; min-width: 0; overflow: hidden;"
            >
              <input
                type="text"
                class="state-color-input"
                placeholder="State (e.g., on, off)"
                .value=${i}
                style="flex: 0 0 120px; padding: 8px; border: 1px solid var(--divider-color); border-radius: 4px; background: var(--secondary-background-color); color: var(--primary-text-color); flex-shrink: 0;"
                @input=${t=>{const o=t.target.value,n=Object.assign({},e);delete n[i],o.trim()&&(n[o.trim()]=r),a(n)}}
              />
              <div style="flex: 1; min-width: 0; overflow: hidden;">
                <ultra-color-picker
                  .label=${""}
                  .value=${r}
                  .defaultValue=${"gray"}
                  .hass=${t}
                  style="width: 100%;"
                  @value-changed=${t=>{const o=Object.assign(Object.assign({},e),{[i]:t.detail.value});a(o)}}
                ></ultra-color-picker>
              </div>
              <ha-icon
                icon="mdi:delete"
                style="cursor: pointer; color: var(--error-color); margin-left: 8px; flex-shrink: 0;"
                @click=${()=>{const t=Object.assign({},e);delete t[i],a(t)}}
              ></ha-icon>
            </div>
          `)}
        <button
          class="add-state-color-btn"
          style="margin-top: 8px; padding: 8px 16px; background: var(--primary-color); color: var(--text-primary-color, #fff); border: none; border-radius: 4px; cursor: pointer; font-size: 14px;"
          @click=${()=>{const t=Object.assign(Object.assign({},e),{new_state:"gray"});a(t)}}
        >
          <ha-icon icon="mdi:plus" style="margin-right: 4px;"></ha-icon>
          ${(0,n.kg)("editor.button.add_state_color",i,"Add State Color")}
        </button>
      </div>
    `}}function s(e,t,i,o,a){return l.prototype.renderGeneralTabContent.call(e,t,i,o,a)}(0,r.t)(a.UltraButtonModule,l)},1510(e,t,i){i.r(t),i.d(t,{UltraHorizontalModuleSettings:()=>l,renderHorizontalGeneralTab:()=>s});var o=i(2618),a=i(4512),r=i(5514),n=i(6478);i(7921);class l extends a.UltraHorizontalModule{renderGeneralTabContent(e,t,i,a){var r;const l=e,s=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- Layout Configuration Section -->
        ${this.renderSettingsSection((0,n.kg)("editor.horizontal.layout.title",s,"Layout Configuration"),(0,n.kg)("editor.horizontal.layout.desc",s,"Configure how items are arranged horizontally within the container."),[{title:(0,n.kg)("editor.horizontal.alignment.horizontal",s,"Horizontal Alignment"),description:(0,n.kg)("editor.horizontal.alignment.horizontal_desc",s,"Choose how items are aligned horizontally within the container."),hass:t,data:l,schema:[this.selectField("alignment",[{value:"left",label:(0,n.kg)("editor.common.left",s,"Left")},{value:"center",label:(0,n.kg)("editor.common.center",s,"Center")},{value:"right",label:(0,n.kg)("editor.common.right",s,"Right")},{value:"space-between",label:(0,n.kg)("editor.common.space_between",s,"Space Between")},{value:"space-around",label:(0,n.kg)("editor.common.space_around",s,"Space Around")},{value:"justify",label:(0,n.kg)("editor.common.justify",s,"Justify")}])],onChange:e=>{e.detail.value.alignment!==l.alignment&&(a(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))}}])}
        ${this.renderSettingsSection("","",[{title:(0,n.kg)("editor.horizontal.alignment.vertical",s,"Vertical Alignment"),description:(0,n.kg)("editor.horizontal.alignment.vertical_desc",s,"Choose how items are aligned vertically within the container."),hass:t,data:{vertical_alignment:l.vertical_alignment||""},schema:[this.selectField("vertical_alignment",[{value:"",label:(0,n.kg)("editor.common.default",s,"Default")},{value:"top",label:(0,n.kg)("editor.common.top",s,"Top")},{value:"center",label:(0,n.kg)("editor.common.center",s,"Center")},{value:"bottom",label:(0,n.kg)("editor.common.bottom",s,"Bottom")},{value:"stretch",label:(0,n.kg)("editor.common.stretch",s,"Stretch")},{value:"baseline",label:(0,n.kg)("editor.common.baseline",s,"Baseline")}])],onChange:e=>{var t;const i=null===(t=e.detail.value)||void 0===t?void 0:t.vertical_alignment;if(void 0===i)return;const o=""===i?void 0:i;o!==l.vertical_alignment&&(a({vertical_alignment:o}),setTimeout(()=>this.triggerPreviewUpdate(),50))}}])}

        <!-- Allow Wrapping Toggle -->
        ${this.renderSettingsSection((0,n.kg)("editor.horizontal.wrapping.title",s,"Allow Wrapping"),(0,n.kg)("editor.horizontal.wrapping.desc",s,"Allow items to wrap to the next line when they exceed the container width."),[{title:"",description:"",hass:t,data:{wrap:l.wrap||!1},schema:[this.booleanField("wrap")],onChange:e=>{a({wrap:e.detail.value.wrap}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        <!-- Gap Between Items Field with Custom Slider -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,n.kg)("editor.horizontal.gap.title",s,"Gap Configuration")}
          </div>

          <div style="margin-bottom: 24px;">
            ${(()=>{const e=l.gap_unit||"rem",i="px"===e,o=i?8:.7,r=void 0!==l.gap&&null!==l.gap?l.gap:o,d=i?-100:-10,c=i?100:10,g=i?1:.1;return this.renderGapWithUnitField((0,n.kg)("editor.horizontal.gap.between_items",s,"Gap Between Items"),(0,n.kg)("editor.horizontal.gap.desc",s,"Set the spacing between horizontal items. Use negative values to overlap items."),t,r,o,d,c,g,e,[{value:"px",label:"px"},{value:"rem",label:"rem"},{value:"em",label:"em"},{value:"%",label:"%"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}],e=>a({gap:e}),(t,i)=>{const o=(l=i,(r=e)===(n=t)?l:((e,t)=>"px"===t||"%"===t||"vw"===t||"vh"===t?e:Math.round(e/16*10)/10)((s=l,"px"===(d=r)||"%"===d||"vw"===d||"vh"===d?s:16*s),n));var r,n,l,s,d;a({gap:o,gap_unit:t})})})()}
          </div>
        </div>
      </div>
    `}}function s(e,t,i,o,a){return l.prototype.renderGeneralTabContent.call(e,t,i,o,a)}(0,r.t)(a.UltraHorizontalModule,l)},6007(e,t,i){i.r(t),i.d(t,{UltraIconModuleSettings:()=>d,renderIconGeneralTab:()=>c});var o=i(2618),a=i(6323),r=i(5514),n=i(6478),l=i(9179),s=i(571);i(7921);class d extends a.UltraIconModule{_formValue(e,t){var i,o,a,r;return null!==(a=null===(o=null===(i=e.detail)||void 0===i?void 0:i.value)||void 0===o?void 0:o[t])&&void 0!==a?a:null===(r=e.detail)||void 0===r?void 0:r[t]}renderGeneralTabContent(e,t,i,r){var s,d;const c=e,g=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings icon-module-general-settings">
        <!-- Module-Wide Size Controls -->
        <div class="settings-section" style="margin-bottom: 32px;">
          <div class="section-title">SIZE CONTROLS</div>
          <div class="section-description" style="margin-bottom: 16px;">
            Control the default text and icon sizes for this module. Design tab overrides these
            settings.
          </div>

          <!-- Text Size Control -->
          <div class="field-container" style="margin-bottom: 16px;">
            ${this.renderSliderField(`Text Size (${c.text_size||16}px)`,"Default size for all text elements (name, state)",c.text_size||16,16,10,48,1,e=>{const t=c.icons.map(t=>Object.assign(Object.assign({},t),{text_size:e,active_text_size:e,inactive_text_size:e}));r({text_size:e,icons:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          <!-- Icon Size Control -->
          <div class="field-container" style="margin-bottom: 16px;">
            ${this.renderSliderField(`Icon Size (${c.icon_size||24}px)`,"Default size for all icons",c.icon_size||24,24,12,64,1,e=>{const t=c.icons.map(t=>Object.assign(Object.assign({},t),{icon_size:e,active_icon_size:e,inactive_icon_size:e}));r({icon_size:e,icons:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
        </div>

        <!-- Layout Controls -->
        <div class="settings-section" style="margin-bottom: 32px;">
          <div class="section-title">${(0,n.kg)("editor.icon.layout.title",g,"LAYOUT")}</div>
          <div class="section-description" style="margin-bottom: 16px;">
            ${(0,n.kg)("editor.icon.layout.desc",g,"Control how icons are arranged in the grid.")}
          </div>

          <div class="field-container" style="margin-bottom: 16px;">
            ${this.renderSliderField((0,n.kg)("editor.icon.layout.columns",g,"Columns"),(0,n.kg)("editor.icon.layout.columns_desc",g,"Number of icons per row"),c.columns||3,3,1,6,1,e=>{r({columns:e})},"")}
          </div>

          <div class="field-container" style="margin-bottom: 16px;">
            ${this.renderSliderField((0,n.kg)("editor.icon.layout.gap",g,"Gap"),(0,n.kg)("editor.icon.layout.gap_desc",g,"Spacing between icons"),null!==(d=c.gap)&&void 0!==d?d:16,16,0,50,1,e=>{r({gap:e})})}
          </div>

          ${this.renderFieldSection((0,n.kg)("editor.icon.layout.alignment",g,"Alignment"),(0,n.kg)("editor.icon.layout.alignment_desc",g,"Horizontal alignment of the icon grid"),t,{alignment:c.alignment||"center"},[this.selectField("alignment",[{value:"left",label:(0,n.kg)("editor.icon.layout.align_left",g,"Left")},{value:"center",label:(0,n.kg)("editor.icon.layout.align_center",g,"Center")},{value:"right",label:(0,n.kg)("editor.icon.layout.align_right",g,"Right")},{value:"space-between",label:(0,n.kg)("editor.icon.layout.align_space_between",g,"Space Between")},{value:"space-around",label:(0,n.kg)("editor.icon.layout.align_space_around",g,"Space Around")}])],e=>{const t=e.detail.value.alignment;t&&t!==(c.alignment||"center")&&(r({alignment:t}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          ${this.renderFieldSection((0,n.kg)("editor.icon.layout.allow_wrap",g,"Allow Wrapping"),(0,n.kg)("editor.icon.layout.allow_wrap_desc",g,"Allow icons to wrap onto new rows when they exceed the column count"),t,{allow_wrap:!1!==c.allow_wrap},[this.booleanField("allow_wrap")],e=>{r({allow_wrap:e.detail.value.allow_wrap}),this.triggerPreviewUpdate()})}
          ${this.renderSegmentedField((0,n.kg)("editor.icon.layout.icon_position",g,"Icon Position"),(0,n.kg)("editor.icon.layout.icon_position_desc",g,"Position the icon relative to the name and state (left, top, right, or bottom)"),c.icon_position||"top",[{value:"left",label:(0,n.kg)("editor.icon.layout.pos_left",g,"Left"),icon:"mdi:arrow-left"},{value:"top",label:(0,n.kg)("editor.icon.layout.pos_top",g,"Top"),icon:"mdi:arrow-up"},{value:"right",label:(0,n.kg)("editor.icon.layout.pos_right",g,"Right"),icon:"mdi:arrow-right"},{value:"bottom",label:(0,n.kg)("editor.icon.layout.pos_bottom",g,"Bottom"),icon:"mdi:arrow-down"}],e=>r({icon_position:e}),2)}
          ${this.renderSegmentedField((0,n.kg)("editor.icon.layout.content_distribution",g,"Content Distribution"),(0,n.kg)("editor.icon.layout.content_distribution_desc",g,"Control how the icon and text are distributed inside each item"),c.content_distribution||"normal",[{value:"normal",label:(0,n.kg)("editor.icon.layout.dist_normal",g,"Normal"),icon:"mdi:format-align-left"},{value:"space-between",label:(0,n.kg)("editor.icon.layout.dist_space_between",g,"Space Between"),icon:"mdi:arrow-left-right"},{value:"space-around",label:(0,n.kg)("editor.icon.layout.dist_space_around",g,"Space Around"),icon:"mdi:arrow-expand-horizontal"},{value:"space-evenly",label:(0,n.kg)("editor.icon.layout.dist_space_evenly",g,"Space Evenly"),icon:"mdi:arrow-expand-all"}],e=>r({content_distribution:e}),2)}
          <div
            style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;"
          >
            ${this.renderSegmentedField((0,n.kg)("editor.icon.layout.overall_alignment",g,"Overall Alignment"),(0,n.kg)("editor.icon.layout.overall_alignment_desc",g,"Align each item within its grid cell"),c.overall_alignment||"center",[{value:"left",label:(0,n.kg)("editor.icon.layout.align_left",g,"Left"),icon:"mdi:format-align-left"},{value:"center",label:(0,n.kg)("editor.icon.layout.align_center",g,"Center"),icon:"mdi:format-align-center"},{value:"right",label:(0,n.kg)("editor.icon.layout.align_right",g,"Right"),icon:"mdi:format-align-right"}],e=>r({overall_alignment:e}))}
            ${this.renderSegmentedField((0,n.kg)("editor.icon.layout.name_alignment",g,"Text Alignment"),(0,n.kg)("editor.icon.layout.name_alignment_desc",g,"Align the name and state text within the item"),c.name_alignment||"center",[{value:"start",label:(0,n.kg)("editor.icon.layout.text_start",g,"Start"),icon:"mdi:format-align-left"},{value:"center",label:(0,n.kg)("editor.icon.layout.text_center",g,"Center"),icon:"mdi:format-align-center"},{value:"end",label:(0,n.kg)("editor.icon.layout.text_end",g,"End"),icon:"mdi:format-align-right"}],e=>r({name_alignment:e}))}
          </div>
        </div>

        ${c.icons.map((e,s)=>{var d,p;return o.qy`
            <ha-expansion-panel
              .outlined=${!0}
              .expanded=${1===c.icons.length}
              class="icon-item-panel ${this._draggedIconIndex===s?"dragging":""} ${this._dragOverIconIndex===s?"drag-over":""}"
            >
              <div
                slot="header"
                class="icon-item-header"
                draggable="true"
                @dragstart=${e=>this._onIconDragStart(e,s)}
                @dragover=${e=>this._onIconDragOver(e,s)}
                @dragend=${()=>this._onIconDragEnd()}
                @drop=${e=>this._onIconDrop(e,s,c,r)}
              >
                <div class="icon-item-drag-handle" @click=${e=>e.stopPropagation()}>
                  <ha-icon icon="mdi:drag"></ha-icon>
                </div>
                <div class="icon-item-badge">
                  <ha-icon icon="${this._iconHeaderIcon(e,t)}"></ha-icon>
                </div>
                <div class="icon-item-info">
                  <div class="icon-item-title">
                    ${this._iconHeaderTitle(e,s,t,g)}
                  </div>
                  <div class="icon-item-subtitle">
                    ${this._iconHeaderSubtitle(e,s,g)}
                  </div>
                </div>
                <button
                  class="remove-icon-btn"
                  ?disabled=${c.icons.length<=1}
                  style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; padding: 0; border: 1px solid var(--divider-color); border-radius: 6px; background: transparent; color: var(--error-color); cursor: pointer; flex-shrink: 0;"
                  title="${(0,n.kg)("editor.icon.remove_icon",g,"Remove Icon")}"
                  @click=${e=>{e.stopPropagation(),this._removeIcon(c,s,r)}}
                >
                  <ha-icon icon="mdi:delete" style="--mdc-icon-size: 18px;"></ha-icon>
                </button>
              </div>
              <div class="icon-settings-container">
                <!-- Internal Name (editor-only organizational label) -->
                <div class="field-container" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,n.kg)("editor.icon.internal_name",g,"Name"),(0,n.kg)("editor.icon.internal_name_desc",g,"Editor-only label to keep icons organized. Never shown on the card."),t,{internal_name:e.internal_name||""},[this.textField("internal_name")],e=>{this._updateIcon(c,s,{internal_name:e.detail.value.internal_name},r)})}
                </div>

                ${(0,l.h)(e.user_visibility,t,e=>{this._updateIcon(c,s,{user_visibility:e},r)})}

                <!-- Icon Mode Selector -->
                <div class="settings-section" style="margin-bottom: 24px;">
                  <div class="section-title">
                    ${(0,n.kg)("editor.icon.icon_mode.title",g,"ICON MODE")}
                  </div>
                  <div
                    class="section-description"
                    style="margin-bottom: 16px; font-size: 13px; color: var(--secondary-text-color); opacity: 0.8;"
                  >
                    ${(0,n.kg)("editor.icon.icon_mode.desc",g,"Choose between an entity-connected icon or a static standalone icon")}
                  </div>
                  <div style="display: flex; gap: 8px;">
                    <button
                      style="
                      flex: 1;
                      padding: 12px 16px;
                      border: 2px solid ${"entity"===(e.icon_mode||"entity")?"var(--primary-color)":"var(--divider-color)"};
                      border-radius: 8px;
                      background: ${"entity"===(e.icon_mode||"entity")?"var(--primary-color)":"transparent"};
                      color: ${"entity"===(e.icon_mode||"entity")?"var(--text-primary-color, #fff)":"var(--primary-text-color)"};
                      font-weight: 500;
                      cursor: pointer;
                      transition: all 0.2s ease;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      gap: 8px;
                    "
                      @click=${()=>{this._updateIcon(c,s,{icon_mode:"entity"},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                    >
                      <ha-icon icon="mdi:link-variant" style="--mdc-icon-size: 20px;"></ha-icon>
                      ${(0,n.kg)("editor.icon.icon_mode.entity",g,"Entity-Based")}
                    </button>
                    <button
                      style="
                      flex: 1;
                      padding: 12px 16px;
                      border: 2px solid ${"static"===e.icon_mode?"var(--primary-color)":"var(--divider-color)"};
                      border-radius: 8px;
                      background: ${"static"===e.icon_mode?"var(--primary-color)":"transparent"};
                      color: ${"static"===e.icon_mode?"var(--text-primary-color, #fff)":"var(--primary-text-color)"};
                      font-weight: 500;
                      cursor: pointer;
                      transition: all 0.2s ease;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      gap: 8px;
                    "
                      @click=${()=>{this._updateIcon(c,s,{icon_mode:"static"},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                    >
                      <ha-icon icon="mdi:image-outline" style="--mdc-icon-size: 20px;"></ha-icon>
                      ${(0,n.kg)("editor.icon.icon_mode.static",g,"Static")}
                    </button>
                  </div>
                </div>

                ${"static"===e.icon_mode?o.qy`
                      <!-- Static Icon Configuration -->
                      ${this._renderStaticIconSettings(e,s,c,t,g,r)}
                    `:o.qy`
                      <!-- Entity Configuration (single settings-section box with title,
                         entity picker, and active/inactive state fields all inside) -->
                      <div
                        class="settings-section"
                        style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
                      >
                        <div
                          class="section-title"
                          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
                        >
                          ${(0,n.kg)("editor.icon.entity_config.title",g,"Entity Configuration")}
                        </div>
                        <div
                          style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                        >
                          ${(0,n.kg)("editor.icon.entity_config.desc",g,"Configure the entity and active/inactive states")}
                        </div>
                        ${this.renderEntityPickerWithVariables(t,i,"entity",e.entity||"",o=>this._handleEntitySelection(e,s,c,o,t,r,i),void 0,(0,n.kg)("editor.icon.entity",g,"Entity"))}
                        ${this.renderFieldSection((0,n.kg)("editor.icon.inactive_state",g,"Inactive State"),(0,n.kg)("editor.icon.inactive_state_desc",g,'State value considered "inactive" (leave blank to use actual entity state)'),t,{inactive_state:e.inactive_state||""},[this.textField("inactive_state")],e=>this._updateIcon(c,s,{inactive_state:e.detail.value.inactive_state},r))}
                        ${this.renderFieldSection((0,n.kg)("editor.icon.active_state",g,"Active State"),(0,n.kg)("editor.icon.active_state_desc",g,'State value considered "active" (leave blank to use actual entity state)'),t,{active_state:e.active_state||""},[this.textField("active_state")],e=>this._updateIcon(c,s,{active_state:e.detail.value.active_state},r))}
                      </div>

                      <!-- Attributes Section -->
                      <div class="settings-section" style="margin-bottom: 24px;">
                        <div class="section-title">
                          ${(0,n.kg)("editor.icon.attributes_section.title",g,"ATTRIBUTES")}
                        </div>
                        <div
                          class="section-description"
                          style="margin-bottom: 16px; font-size: 13px; color: var(--secondary-text-color); opacity: 0.8;"
                        >
                          ${(0,n.kg)("editor.icon.attributes_section.desc",g,"Select entity attributes to use instead of the main entity state for determining active/inactive conditions")}
                        </div>

                        <!-- Display Attribute (simple override) -->
                        <div class="field-container" style="margin-bottom: 16px;">
                          <div class="field-title">
                            ${(0,n.kg)("editor.icon.display_attribute",g,"Display Attribute")}
                          </div>
                          <div class="field-description">
                            ${(0,n.kg)("editor.icon.display_attribute_desc",g,"Select an attribute to display instead of the entity state. For separate active/inactive attributes, use the options below.")}
                          </div>
                          ${this.renderUcForm(t,{display_attribute:e.display_attribute||""},[this.selectField("display_attribute",this._getEntityAttributes(e.entity,t,i))],e=>{const t=e.detail.value.display_attribute;t!==(c.icons[s].display_attribute||"")&&(this._updateIcon(c,s,{display_attribute:t},r),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                        </div>

                        <!-- Inactive Attribute -->
                        <div class="field-container" style="margin-bottom: 16px;">
                          <div class="field-title">
                            ${(0,n.kg)("editor.icon.inactive_attribute",g,"Inactive Attribute")}
                          </div>
                          <div class="field-description">
                            ${(0,n.kg)("editor.icon.inactive_attribute_desc",g,'Entity attribute to check for inactive state (e.g., "condition" for weather)')}
                          </div>
                          ${this.renderUcForm(t,{inactive_attribute:e.inactive_attribute||""},[this.selectField("inactive_attribute",this._getEntityAttributes(e.entity,t,i))],e=>{const t=e.detail.value.inactive_attribute;t!==(c.icons[s].inactive_attribute||"")&&(this._updateIcon(c,s,{inactive_attribute:t},r),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                        </div>

                        <!-- Active Attribute -->
                        <div class="field-container">
                          <div class="field-title">
                            ${(0,n.kg)("editor.icon.active_attribute",g,"Active Attribute")}
                          </div>
                          <div class="field-description">
                            ${(0,n.kg)("editor.icon.active_attribute_desc",g,'Entity attribute to check for active state (e.g., "condition" for weather)')}
                          </div>
                          ${this.renderUcForm(t,{active_attribute:e.active_attribute||""},[this.selectField("active_attribute",this._getEntityAttributes(e.entity,t,i))],e=>{const t=e.detail.value.active_attribute;t!==(c.icons[s].active_attribute||"")&&(this._updateIcon(c,s,{active_attribute:t},r),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
                        </div>
                      </div>

                      <!-- Icon Section -->
                      <div class="settings-section" style="margin-bottom: 24px;">
                        <div class="section-title">
                          <span>${(0,n.kg)("editor.icon.icon_section.title",g,"Icon")}</span>
                        </div>
                        ${this.renderFieldSection((0,n.kg)("editor.icon.icon_section.show_icon",g,"Show Icon"),"",t,{show_icon_enabled:!1!==e.show_icon_when_active&&!1!==e.show_icon_when_inactive},[this.booleanField("show_icon_enabled")],e=>{const t=e.detail.value.show_icon_enabled;this._updateIcon(c,s,{show_icon_when_active:t,show_icon_when_inactive:t},r)})}
                        ${this.renderFieldSection((0,n.kg)("editor.icon.icon_section.show_entity_picture",g,"Show Entity Picture"),(0,n.kg)("editor.icon.icon_section.show_entity_picture_desc",g,"When enabled, entity_picture replaces the configured icon when available."),t,{show_entity_picture:!1!==e.show_entity_picture},[this.booleanField("show_entity_picture")],e=>{this._updateIcon(c,s,{show_entity_picture:e.detail.value.show_entity_picture},r)})}
                        ${!1!==e.show_icon_when_active||!1!==e.show_icon_when_inactive?o.qy`
                              <!-- Inactive Icon Section -->
                              <div style="margin-top: 16px;">
                                <details
                                  data-uc-role="pane" style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--uc-pane-bg, var(--card-background-color));"
                                  @toggle=${e=>{const t=e.target,i=t.querySelector("ha-icon");i&&(i.style.transform=t.open?"rotate(90deg)":"rotate(0deg)")}}
                                >
                                  <summary
                                    style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                  >
                                    <ha-icon
                                      icon="mdi:chevron-right"
                                      style="transition: transform 0.2s;"
                                    ></ha-icon>
                                    ${(0,n.kg)("editor.icon.inactive_icon",g,"Inactive Icon")}
                                  </summary>
                                  <div style="padding: 16px;">
                                    ${this.renderSettingsSection((0,n.kg)("editor.icon.inactive_icon_config",g,"Inactive Icon Configuration"),(0,n.kg)("editor.icon.inactive_icon_config_desc",g,"Configure the inactive icon settings"),[{title:(0,n.kg)("editor.icon.inactive_icon",g,"Inactive Icon"),description:(0,n.kg)("editor.icon.inactive_icon_desc",g,"Icon to show when inactive"),hass:t,data:{icon_inactive:e.icon_inactive||""},schema:[this.iconField("icon_inactive")],onChange:e=>this._updateIconWithLockSync(c,s,"icon_inactive",e.detail.value.icon_inactive,r)}])}

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.inactive_icon_color",g,"Inactive Icon Color")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.icon_color_inactive",g,"Color when inactive")}
                                      </div>
                                      <ultra-color-picker
                                        .value=${e.inactive_icon_color||"var(--secondary-text-color)"}
                                        @value-changed=${e=>this._debouncedUpdateIconWithLockSync(c,s,"inactive_icon_color",e.detail.value,r,50)}
                                      ></ultra-color-picker>
                                    </div>

                                    ${this.renderFieldSection((0,n.kg)("editor.icon.use_state_color_inactive",g,"Use State Color"),(0,n.kg)("editor.icon.use_state_color_inactive_desc",g,"Use the entity state color (RGB attributes) for inactive icon color"),t,{use_state_color_for_inactive_icon:e.use_state_color_for_inactive_icon||!1},[this.booleanField("use_state_color_for_inactive_icon")],e=>this._updateIcon(c,s,{use_state_color_for_inactive_icon:e.detail.value.use_state_color_for_inactive_icon},r))}
                                    ${this.renderSettingsSection((0,n.kg)("editor.icon.background_section.title",g,"Inactive Background"),(0,n.kg)("editor.icon.background_section.desc",g,"Configure the inactive background settings"),[{title:(0,n.kg)("editor.icon.inactive_icon_background",g,"Inactive Background Shape"),description:(0,n.kg)("editor.icon.background_shape_inactive",g,"Background shape when inactive"),hass:t,data:{inactive_icon_background:e.inactive_icon_background||"none"},schema:[this.selectField("inactive_icon_background",[{value:"none",label:"None"},{value:"circle",label:"Circle"},{value:"square",label:"Square"},{value:"rounded-square",label:"Rounded Square"}])],onChange:e=>{const t=this._formValue(e,"inactive_icon_background");if(void 0===t)return;const i=String(t);if(i===(c.icons[s].inactive_icon_background||"none"))return;const o={inactive_icon_background:i};i&&"none"!==i&&(o.inactive_icon_background_color="var(--divider-color)"),this._updateIcon(c,s,o,r)}}])}

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.inactive_icon_background_color",g,"Inactive Background Color")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.background_color_inactive",g,"Background color when inactive")}
                                      </div>
                                      <ultra-color-picker
                                        .value=${e.inactive_icon_background_color||"transparent"}
                                        @value-changed=${e=>this._debouncedUpdateIconWithLockSync(c,s,"inactive_icon_background_color",e.detail.value,r,50)}
                                      ></ultra-color-picker>
                                    </div>

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.inactive_icon_background_padding",g,"Inactive Background Padding")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.background_padding_inactive",g,"Padding between icon and background when inactive")}
                                      </div>
                                      ${this._renderSizeControl(c,s,r,"inactive_icon_background_padding",null!==(d=e.inactive_icon_background_padding)&&void 0!==d?d:8,0,50,8)}
                                    </div>

                                    <div class="field-container">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.inactive_icon_size",g,"Inactive Icon Size")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.icon_size_inactive",g,"Icon size when inactive")}
                                      </div>
                                      ${this._renderSizeControl(c,s,r,"inactive_icon_size",e.inactive_icon_size||26,0,200,26)}
                                    </div>
                                  </div>
                                </details>
                              </div>

                              <!-- Active Icon Section -->
                              <div style="margin-top: 16px;">
                                <details
                                  style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--uc-pane-bg, var(--card-background-color));"
                                  @toggle=${e=>{const t=e.target,i=t.querySelector("ha-icon");i&&(i.style.transform=t.open?"rotate(90deg)":"rotate(0deg)")}}
                                >
                                  <summary
                                    style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                  >
                                    <ha-icon
                                      icon="mdi:chevron-right"
                                      style="transition: transform 0.2s;"
                                    ></ha-icon>
                                    ${(0,n.kg)("editor.icon.active_icon",g,"Active Icon")}
                                  </summary>
                                  <div style="padding: 16px;">
                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.active_icon",g,"Active Icon")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.active_icon_desc",g,"Icon to show when active")}
                                      </div>
                                      ${this._renderFieldWithLock(c,s,r,"active_icon_locked","icon_active","icon_inactive",e.icon_active||e.icon_inactive||"","icon",t)}
                                    </div>

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.active_icon_color",g,"Active Icon Color")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.icon_color_active",g,"Color when active")}
                                      </div>
                                      ${this._renderFieldWithLock(c,s,r,"active_icon_color_locked","active_icon_color","inactive_icon_color",e.active_icon_color||"var(--primary-color)","color",t)}
                                    </div>

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.use_state_color_active",g,"Use State Color")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.use_state_color_active_desc",g,"Use the entity state color (RGB attributes) for active icon color")}
                                      </div>
                                      ${this._renderFieldWithLock(c,s,r,"active_state_color_locked","use_state_color_for_active_icon","use_state_color_for_inactive_icon",e.use_state_color_for_active_icon||!1,"toggle",t)}
                                    </div>

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.active_icon_background",g,"Active Background Shape")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.background_shape_active",g,"Background shape when active")}
                                      </div>
                                      ${this._renderFieldWithLock(c,s,r,"active_icon_background_locked","active_icon_background","inactive_icon_background",e.active_icon_background||"none","select",t,[{value:"none",label:"None"},{value:"circle",label:"Circle"},{value:"square",label:"Square"},{value:"rounded-square",label:"Rounded Square"}])}
                                    </div>

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.active_icon_background_color",g,"Active Background Color")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.background_color_active",g,"Background color when active")}
                                      </div>
                                      ${this._renderFieldWithLock(c,s,r,"active_icon_background_color_locked","active_icon_background_color","inactive_icon_background_color",e.active_icon_background_color||"transparent","color",t)}
                                    </div>

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.active_icon_background_padding",g,"Active Background Padding")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.background_padding_active",g,"Padding between icon and background when active")}
                                      </div>
                                      ${this._renderSizeControlWithLock(c,s,r,"active_icon_background_padding_locked","active_icon_background_padding","inactive_icon_background_padding",null!==(p=e.active_icon_background_padding)&&void 0!==p?p:8,0,50,8)}
                                    </div>

                                    <div class="field-container">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.active_icon_size",g,"Active Icon Size")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.icon_size_active",g,"Icon size when active")}
                                      </div>
                                      ${this._renderSizeControlWithLock(c,s,r,"icon_size","active_icon_size","inactive_icon_size",e.active_icon_size||26,0,200,26)}
                                    </div>
                                  </div>
                                </details>
                              </div>
                            `:""}
                      </div>

                      <!-- Name Section -->
                      <div class="settings-section" style="margin-bottom: 24px;">
                        <div class="section-title">
                          <span>${(0,n.kg)("editor.icon.name_section.title",g,"Name")}</span>
                        </div>
                        ${this.renderFieldSection((0,n.kg)("editor.icon.name_section.show_name",g,"Show Name"),"",t,{show_name_enabled:!1!==e.show_name_when_active&&!1!==e.show_name_when_inactive},[this.booleanField("show_name_enabled")],e=>{const t=e.detail.value.show_name_enabled;this._updateIcon(c,s,{show_name_when_active:t,show_name_when_inactive:t},r)})}
                        ${!1!==e.show_name_when_active||!1!==e.show_name_when_inactive?o.qy`
                              <!-- Inactive Name Section -->
                              <div style="margin-top: 16px;">
                                <details
                                  style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--uc-pane-bg, var(--card-background-color));"
                                  @toggle=${e=>{const t=e.target,i=t.querySelector("ha-icon");i&&(i.style.transform=t.open?"rotate(90deg)":"rotate(0deg)")}}
                                >
                                  <summary
                                    style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                  >
                                    <ha-icon
                                      icon="mdi:chevron-right"
                                      style="transition: transform 0.2s;"
                                    ></ha-icon>
                                    ${(0,n.kg)("editor.icon.inactive_name",g,"Inactive Name")}
                                  </summary>
                                  <div style="padding: 16px;">
                                    ${this.renderSettingsSection((0,n.kg)("editor.icon.inactive_name_config",g,"Inactive Name Configuration"),(0,n.kg)("editor.icon.inactive_name_config_desc",g,"Configure the inactive name settings"),[{title:(0,n.kg)("editor.icon.custom_inactive_name",g,"Custom Inactive Name"),description:(0,n.kg)("editor.icon.custom_inactive_name_desc",g,"Override entity name when inactive (leave empty to use entity name)"),hass:t,data:{custom_inactive_name_text:e.custom_inactive_name_text||""},schema:[this.textField("custom_inactive_name_text")],onChange:e=>this._updateIcon(c,s,{custom_inactive_name_text:e.detail.value.custom_inactive_name_text},r)}])}

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.inactive_name_color",g,"Inactive Name Color")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.name_color_inactive",g,"Name color when inactive")}
                                      </div>
                                      <ultra-color-picker
                                        .value=${e.inactive_name_color||"var(--primary-text-color)"}
                                        @value-changed=${e=>this._debouncedUpdateIconWithLockSync(c,s,"inactive_name_color",e.detail.value,r,50)}
                                      ></ultra-color-picker>
                                    </div>

                                    <div class="field-container">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.inactive_name_size",g,"Inactive Name Size")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.name_size_inactive",g,"Name text size when inactive")}
                                      </div>
                                      ${this._renderSizeControl(c,s,r,"inactive_text_size",e.inactive_text_size||14,0,50,14)}
                                    </div>
                                  </div>
                                </details>
                              </div>

                              <!-- Active Name Section -->
                              <div style="margin-top: 16px;">
                                <details
                                  style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--uc-pane-bg, var(--card-background-color));"
                                  @toggle=${e=>{const t=e.target,i=t.querySelector("ha-icon");i&&(i.style.transform=t.open?"rotate(90deg)":"rotate(0deg)")}}
                                >
                                  <summary
                                    style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                  >
                                    <ha-icon
                                      icon="mdi:chevron-right"
                                      style="transition: transform 0.2s;"
                                    ></ha-icon>
                                    ${(0,n.kg)("editor.icon.active_name",g,"Active Name")}
                                  </summary>
                                  <div style="padding: 16px;">
                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.custom_active_name",g,"Custom Active Name")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.custom_active_name_desc",g,"Override entity name when active (leave empty to use entity name)")}
                                      </div>
                                      ${this._renderFieldWithLock(c,s,r,"active_name_locked","custom_active_name_text","custom_inactive_name_text",e.custom_active_name_text||"","text",t)}
                                    </div>

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.active_name_color",g,"Active Name Color")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.name_color_active",g,"Name color when active")}
                                      </div>
                                      ${this._renderFieldWithLock(c,s,r,"active_name_color_locked","active_name_color","inactive_name_color",e.active_name_color||"var(--primary-text-color)","color",t)}
                                    </div>

                                    <div class="field-container">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.active_name_size",g,"Active Name Size")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.name_size_active",g,"Name text size when active")}
                                      </div>
                                      ${this._renderSizeControlWithLock(c,s,r,"text_size","active_text_size","inactive_text_size",e.active_text_size||e.inactive_text_size||14,0,50,12)}
                                    </div>
                                  </div>
                                </details>
                              </div>
                            `:""}
                      </div>

                      <!-- State Section -->
                      <div class="settings-section" style="margin-bottom: 24px;">
                        <div class="section-title">
                          <span>${(0,n.kg)("editor.icon.state_section.title",g,"State")}</span>
                        </div>
                        ${this.renderFieldSection((0,n.kg)("editor.icon.state_section.show_state",g,"Show State"),"",t,{show_state_enabled:!1!==e.show_state_when_active&&!1!==e.show_state_when_inactive},[this.booleanField("show_state_enabled")],e=>{const t=e.detail.value.show_state_enabled;this._updateIcon(c,s,{show_state_when_active:t,show_state_when_inactive:t},r)})}
                        ${!1!==e.show_state_when_active||!1!==e.show_state_when_inactive?o.qy`
                              <!-- Inactive State Section -->
                              <div style="margin-top: 16px;">
                                <details
                                  style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--uc-pane-bg, var(--card-background-color));"
                                  @toggle=${e=>{const t=e.target,i=t.querySelector("ha-icon");i&&(i.style.transform=t.open?"rotate(90deg)":"rotate(0deg)")}}
                                >
                                  <summary
                                    style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                  >
                                    <ha-icon
                                      icon="mdi:chevron-right"
                                      style="transition: transform 0.2s;"
                                    ></ha-icon>
                                    ${(0,n.kg)("editor.icon.inactive_state",g,"Inactive State")}
                                  </summary>
                                  <div style="padding: 16px;">
                                    ${this.renderSettingsSection((0,n.kg)("editor.icon.inactive_state_config",g,"Inactive State Configuration"),(0,n.kg)("editor.icon.inactive_state_config_desc",g,"Configure the inactive state settings"),[{title:(0,n.kg)("editor.icon.custom_inactive_state",g,"Custom Inactive State"),description:(0,n.kg)("editor.icon.custom_inactive_state_desc",g,"Custom text when inactive (leave empty to use actual state)"),hass:t,data:{custom_inactive_state_text:e.custom_inactive_state_text||""},schema:[this.textField("custom_inactive_state_text")],onChange:e=>this._updateIcon(c,s,{custom_inactive_state_text:e.detail.value.custom_inactive_state_text},r)}])}

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.inactive_state_color",g,"Inactive State Color")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.state_color_inactive",g,"State color when inactive")}
                                      </div>
                                      <ultra-color-picker
                                        .value=${e.inactive_state_color||"var(--secondary-text-color)"}
                                        @value-changed=${e=>this._debouncedUpdateIconWithLockSync(c,s,"inactive_state_color",e.detail.value,r,50)}
                                      ></ultra-color-picker>
                                    </div>

                                    <div class="field-container">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.inactive_state_size",g,"Inactive State Size")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.state_size_inactive",g,"State text size when inactive")}
                                      </div>
                                      ${this._renderSizeControl(c,s,r,"inactive_state_size",e.inactive_state_size||10,0,50,10)}
                                    </div>
                                  </div>
                                </details>
                              </div>

                              <!-- Active State Section -->
                              <div style="margin-top: 16px;">
                                <details
                                  style="border: 1px solid var(--divider-color); border-radius: 8px; background: var(--uc-pane-bg, var(--card-background-color));"
                                  @toggle=${e=>{const t=e.target,i=t.querySelector("ha-icon");i&&(i.style.transform=t.open?"rotate(90deg)":"rotate(0deg)")}}
                                >
                                  <summary
                                    style="padding: 16px; font-size: 16px; font-weight: 600; color: var(--primary-color); cursor: pointer; background: var(--secondary-background-color); border-radius: 8px 8px 0 0; display: flex; align-items: center; gap: 8px;"
                                  >
                                    <ha-icon
                                      icon="mdi:chevron-right"
                                      style="transition: transform 0.2s;"
                                    ></ha-icon>
                                    ${(0,n.kg)("editor.icon.active_state",g,"Active State")}
                                  </summary>
                                  <div style="padding: 16px;">
                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.custom_active_state",g,"Custom Active State")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.custom_active_state_desc",g,"Custom text when active (leave empty to use actual state)")}
                                      </div>
                                      ${this._renderFieldWithLock(c,s,r,"active_state_locked","custom_active_state_text","custom_inactive_state_text",e.custom_active_state_text||"","text",t)}
                                    </div>

                                    <div class="field-container" style="margin-bottom: 16px;">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.active_state_color",g,"Active State Color")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.state_color_active",g,"State color when active")}
                                      </div>
                                      ${this._renderFieldWithLock(c,s,r,"active_state_color_locked","active_state_color","inactive_state_color",e.active_state_color||"var(--secondary-text-color)","color",t)}
                                    </div>

                                    <div class="field-container">
                                      <div class="field-title">
                                        ${(0,n.kg)("editor.icon.active_state_size",g,"Active State Size")}
                                      </div>
                                      <div class="field-description">
                                        ${(0,n.kg)("editor.icon.state_size_active",g,"State text size when active")}
                                      </div>
                                      ${this._renderSizeControlWithLock(c,s,r,"state_size","active_state_size","inactive_state_size",e.active_state_size||10,0,50,10)}
                                    </div>
                                  </div>
                                </details>
                              </div>
                            `:""}
                      </div>

                      <!-- Unified Template Section -->
                      <div class="template-section" style="margin-bottom: 24px;">
                        <div class="template-header">
                          <div class="switch-container">
                            <div class="switch-label-row">
                              <label class="switch-label"
                                >${(0,n.kg)("editor.icon.unified_template_section.title",g,"Template Mode")}</label
                              >
                              <button
                                class="help-btn"
                                style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                                title="${(0,n.kg)("editor.icon.template_cheatsheet",g,"Template Cheatsheet")}"
                                @click=${e=>{e.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{detail:{module:"icon"},bubbles:!0,composed:!0}))}}
                              >
                                <ha-icon
                                  icon="mdi:help-circle"
                                  style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"
                                ></ha-icon>
                              </button>
                            </div>
                            ${this.renderUcForm(t,{unified_template_mode:e.unified_template_mode||!1},[this.booleanField("unified_template_mode")],e=>this._updateIcon(c,s,{unified_template_mode:e.detail.value.unified_template_mode},r))}
                          </div>
                          <div class="template-description">
                            ${(0,n.kg)("editor.icon.unified_template_section.desc",g,"Use Jinja2 templates to control icon and color dynamically. Return simple string for icon-only, or JSON object for multiple properties. Uses entity context variables (entity, state, name, attributes) for seamless entity remapping.")}
                          </div>
                        </div>

                        ${e.unified_template_mode?o.qy`
                              <!-- Ignore Entity State Config Toggle -->
                              <div
                                style="margin-bottom: 16px; padding: 12px; background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.1); border-radius: 8px; border-left: 4px solid var(--warning-color, #FF9800);"
                              >
                                ${this.renderFieldSection((0,n.kg)("editor.icon.ignore_entity_state",g,"Ignore Entity State Config"),(0,n.kg)("editor.icon.ignore_entity_state_desc",g,"When enabled, entity state settings above will be ignored and template will control active/inactive state for animations"),t,{ignore_entity_state_config:e.ignore_entity_state_config||!1},[this.booleanField("ignore_entity_state_config")],e=>this._updateIcon(c,s,{ignore_entity_state_config:e.detail.value.ignore_entity_state_config},r))}
                              </div>

                              <div
                                class="template-content"
                                @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
                                @dragstart=${e=>e.stopPropagation()}
                                @insert-snippet=${e=>{var t,i,o;const a=e.currentTarget.querySelector("ultra-template-editor");null===(t=null==a?void 0:a.insertAtCursor)||void 0===t||t.call(a,null!==(o=null===(i=e.detail)||void 0===i?void 0:i.value)&&void 0!==o?o:"")}}
                              >
                                <ultra-template-editor
                                  .hass=${t}
                                  .value=${e.unified_template||""}
                                  .placeholder=${'{% set level = state | int %}\n{\n  "icon": "mdi:battery-{{ (level / 10) | round(0) * 10 }}",\n  "icon_color": "{% if level <= 20 %}red{% else %}green{% endif %}"\n}'}
                                  .minHeight=${200}
                                  .maxHeight=${500}
                                  @value-changed=${e=>{this._updateIcon(c,s,{unified_template:e.detail.value},r)}}
                                ></ultra-template-editor>
                                ${this.renderTemplateKeyWarning(e.unified_template,a.c,g)}
                                <div class="template-help">
                                  <p><strong>Return simple string for icon-only:</strong></p>
                                  <ul>
                                    <li><code>mdi:fire</code> → Changes icon only</li>
                                    <li>
                                      <code
                                        >{% if state|int > 25 %}mdi:fire{% else %}mdi:snowflake{%
                                        endif %}</code
                                      >
                                    </li>
                                  </ul>
                                  <p><strong>Return JSON for multiple properties:</strong></p>
                                  <ul>
                                    <li>
                                      <code>{ "icon": "mdi:fire", "icon_color": "#FF0000" }</code>
                                    </li>
                                    <li>
                                      Available properties: <code>icon</code>,
                                      <code>icon_color</code>, <code>name</code>,
                                      <code>name_color</code>, <code>state_text</code>,
                                      <code>state_color</code>,
                                      <code>container_background_color</code>, <code>active</code>
                                    </li>
                                  </ul>
                                  <p>
                                    <strong
                                      >Entity context variables (no need to hardcode entity
                                      ID):</strong
                                    >
                                  </p>
                                  <ul>
                                    <li><code>entity</code> → Entity ID (${e.entity})</li>
                                    <li><code>state</code> → Current state value</li>
                                    <li><code>name</code> → Entity name</li>
                                    <li><code>attributes</code> → All entity attributes</li>
                                    <li><code>unit</code> → Unit of measurement</li>
                                    <li>
                                      <code>domain</code> → Entity domain (e.g., 'sensor', 'light')
                                    </li>
                                    <li><code>device_class</code> → Device class</li>
                                  </ul>
                                  <p><strong>Example - Works with ANY battery entity:</strong></p>
                                  <code
                                    style="display: block; background: var(--code-editor-background-color, #1e1e1e); padding: 12px; border-radius: 4px; font-size: 11px;"
                                  >
                                    {% set level = state | int %}<br />
                                    {<br />
                                    &nbsp;&nbsp;"icon": "mdi:battery-{{ (level / 10) | round(0) * 10
                                    }}",<br />
                                    &nbsp;&nbsp;"icon_color": "{% if level <= 20 %}#FF0000{% elif
                                    level <= 50 %}#FF8800{% else %}#00CC00{% endif %}"<br />
                                    }
                                  </code>
                                </div>
                              </div>
                            `:""}
                      </div>

                      <!-- Icon Animation Section -->
                      ${this.renderSettingsSection((0,n.kg)("editor.icon.animation_section.title",g,"Icon Animation"),(0,n.kg)("editor.icon.animation_section.desc",g,"Configure animations for active and inactive states"),[{title:(0,n.kg)("editor.icon.active_animation",g,"Active Animation"),description:(0,n.kg)("editor.icon.active_animation_desc",g,"Animation when icon is active"),hass:t,data:{active_icon_animation:e.active_icon_animation||"none"},schema:[this.selectField("active_icon_animation",[{value:"none",label:(0,n.kg)("editor.icon.animation_none",g,"None")},{value:"pulse",label:(0,n.kg)("editor.icon.animation_pulse",g,"Pulse")},{value:"spin",label:(0,n.kg)("editor.icon.animation_spin",g,"Spin")},{value:"bounce",label:(0,n.kg)("editor.icon.animation_bounce",g,"Bounce")},{value:"flash",label:(0,n.kg)("editor.icon.animation_flash",g,"Flash")},{value:"shake",label:(0,n.kg)("editor.icon.animation_shake",g,"Shake")},{value:"vibrate",label:(0,n.kg)("editor.icon.animation_vibrate",g,"Vibrate")},{value:"rotate-left",label:(0,n.kg)("editor.icon.animation_rotate_left",g,"Rotate Left")},{value:"rotate-right",label:(0,n.kg)("editor.icon.animation_rotate_right",g,"Rotate Right")},{value:"fade",label:(0,n.kg)("editor.icon.animation_fade",g,"Fade")},{value:"scale",label:(0,n.kg)("editor.icon.animation_scale",g,"Scale")},{value:"tada",label:(0,n.kg)("editor.icon.animation_tada",g,"Tada")}])],onChange:e=>{const t=this._formValue(e,"active_icon_animation");if(void 0===t)return;const i=String(t);i!==(c.icons[s].active_icon_animation||"none")&&(this._updateIcon(c,s,{active_icon_animation:i},r),setTimeout(()=>{this.triggerPreviewUpdate()},50))}},{title:(0,n.kg)("editor.icon.inactive_animation",g,"Inactive Animation"),description:(0,n.kg)("editor.icon.inactive_animation_desc",g,"Animation when icon is inactive"),hass:t,data:{inactive_icon_animation:e.inactive_icon_animation||"none"},schema:[this.selectField("inactive_icon_animation",[{value:"none",label:(0,n.kg)("editor.icon.animation_none",g,"None")},{value:"pulse",label:(0,n.kg)("editor.icon.animation_pulse",g,"Pulse")},{value:"spin",label:(0,n.kg)("editor.icon.animation_spin",g,"Spin")},{value:"bounce",label:(0,n.kg)("editor.icon.animation_bounce",g,"Bounce")},{value:"flash",label:(0,n.kg)("editor.icon.animation_flash",g,"Flash")},{value:"shake",label:(0,n.kg)("editor.icon.animation_shake",g,"Shake")},{value:"vibrate",label:(0,n.kg)("editor.icon.animation_vibrate",g,"Vibrate")},{value:"rotate-left",label:(0,n.kg)("editor.icon.animation_rotate_left",g,"Rotate Left")},{value:"rotate-right",label:(0,n.kg)("editor.icon.animation_rotate_right",g,"Rotate Right")},{value:"fade",label:(0,n.kg)("editor.icon.animation_fade",g,"Fade")},{value:"scale",label:(0,n.kg)("editor.icon.animation_scale",g,"Scale")},{value:"tada",label:(0,n.kg)("editor.icon.animation_tada",g,"Tada")}])],onChange:e=>{const t=this._formValue(e,"inactive_icon_animation");if(void 0===t)return;const i=String(t);i!==(c.icons[s].inactive_icon_animation||"none")&&(this._updateIcon(c,s,{inactive_icon_animation:i},r),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}
                    `}
              </div>
            </ha-expansion-panel>
          `})}

        <!-- Add Icon -->
        <button
          class="add-icon-btn"
          style="width: 100%; padding: 12px; border: 2px dashed var(--divider-color); border-radius: 8px; background: transparent; color: var(--primary-text-color); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: 500; transition: all 0.2s ease;"
          @click=${()=>this._addIcon(c,r)}
        >
          <ha-icon icon="mdi:plus" style="--mdc-icon-size: 20px;"></ha-icon>
          ${(0,n.kg)("editor.icon.add_icon",g,"Add Icon")}
        </button>
      </div>
    `}_renderStaticIconSettings(e,t,i,a,r,l){var s;return o.qy`
      <!-- Static Icon Settings -->
      <div class="settings-section" style="margin-bottom: 24px;">
        <div class="section-title">
          ${(0,n.kg)("editor.icon.static_icon_settings.title",r,"ICON SETTINGS")}
        </div>
        <div
          class="section-description"
          style="margin-bottom: 16px; font-size: 13px; color: var(--secondary-text-color); opacity: 0.8;"
        >
          ${(0,n.kg)("editor.icon.static_icon_settings.desc",r,"Configure the appearance of this static icon")}
        </div>

        <!-- Icon Picker -->
        <div class="field-container" style="margin-bottom: 16px;">
          <div class="field-title">${(0,n.kg)("editor.icon.icon",r,"Icon")}</div>
          <div class="field-description">
            ${(0,n.kg)("editor.icon.icon_desc",r,"Select an MDI icon")}
          </div>
          ${this.renderUcForm(a,{icon_inactive:e.icon_inactive||"mdi:star"},[this.iconField("icon_inactive")],e=>{const o=e.detail.value.icon_inactive;this._updateIcon(i,t,{icon_inactive:o,icon_active:o},l),setTimeout(()=>this.triggerPreviewUpdate(),50)},!1)}
        </div>

        <!-- Icon Size -->
        <div class="field-container" style="margin-bottom: 16px;">
          <div class="field-title">${(0,n.kg)("editor.icon.icon_size",r,"Icon Size")}</div>
          <div class="field-description">
            ${(0,n.kg)("editor.icon.icon_size_desc",r,"Size of the icon in pixels")}
          </div>
          ${this._renderSizeControl(i,t,l,"inactive_icon_size",e.inactive_icon_size||26,0,100,26)}
        </div>

        <!-- Icon Color -->
        <div class="field-container" style="margin-bottom: 16px;">
          <div class="field-title">${(0,n.kg)("editor.icon.icon_color",r,"Icon Color")}</div>
          <div class="field-description">
            ${(0,n.kg)("editor.icon.icon_color_desc",r,"Color of the icon")}
          </div>
          <ultra-color-picker
            .value=${e.inactive_icon_color||"var(--primary-color)"}
            @value-changed=${e=>{this._updateIcon(i,t,{inactive_icon_color:e.detail.value,active_icon_color:e.detail.value},l),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
          ></ultra-color-picker>
        </div>

        <!-- Background Shape -->
        <div class="field-container" style="margin-bottom: 16px;">
          <div class="field-title">
            ${(0,n.kg)("editor.icon.background_shape",r,"Background Shape")}
          </div>
          <div class="field-description">
            ${(0,n.kg)("editor.icon.background_shape_desc",r,"Shape behind the icon")}
          </div>
          ${this.renderUcForm(a,{inactive_icon_background:e.inactive_icon_background||"none"},[this.selectField("inactive_icon_background",[{value:"none",label:(0,n.kg)("editor.icon.shape_none",r,"None")},{value:"circle",label:(0,n.kg)("editor.icon.shape_circle",r,"Circle")},{value:"square",label:(0,n.kg)("editor.icon.shape_square",r,"Square")},{value:"rounded-square",label:(0,n.kg)("editor.icon.shape_rounded",r,"Rounded Square")}])],e=>{const o=this._formValue(e,"inactive_icon_background");if(void 0===o)return;const a=String(o);if(a===(i.icons[t].inactive_icon_background||"none"))return;const r={inactive_icon_background:a,active_icon_background:a};a&&"none"!==a&&(r.inactive_icon_background_color="var(--divider-color)",r.active_icon_background_color="var(--divider-color)"),this._updateIcon(i,t,r,l),setTimeout(()=>this.triggerPreviewUpdate(),50)},!1)}
        </div>

        <!-- Background Color (only show if background shape is not 'none') -->
        ${e.inactive_icon_background&&"none"!==e.inactive_icon_background?o.qy`
              <div class="field-container" style="margin-bottom: 16px;">
                <div class="field-title">
                  ${(0,n.kg)("editor.icon.background_color",r,"Background Color")}
                </div>
                <div class="field-description">
                  ${(0,n.kg)("editor.icon.background_color_desc",r,"Color of the background shape")}
                </div>
                <ultra-color-picker
                  .value=${e.inactive_icon_background_color||"var(--divider-color)"}
                  @value-changed=${e=>{this._updateIcon(i,t,{inactive_icon_background_color:e.detail.value,active_icon_background_color:e.detail.value},l),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                ></ultra-color-picker>
              </div>

              <!-- Background Padding -->
              <div class="field-container" style="margin-bottom: 16px;">
                <div class="field-title">
                  ${(0,n.kg)("editor.icon.background_padding",r,"Background Padding")}
                </div>
                <div class="field-description">
                  ${(0,n.kg)("editor.icon.background_padding_desc",r,"Distance from the icon to the background edge")}
                </div>
                ${this._renderBackgroundPaddingControl(i,t,l,null!==(s=e.inactive_icon_background_padding)&&void 0!==s?s:8)}
              </div>
            `:""}

        <!-- Animation -->
        <div class="field-container" style="margin-bottom: 16px;">
          <div class="field-title">${(0,n.kg)("editor.icon.animation",r,"Animation")}</div>
          <div class="field-description">
            ${(0,n.kg)("editor.icon.animation_desc",r,"Continuous animation for the icon")}
          </div>
          ${this.renderUcForm(a,{inactive_icon_animation:e.inactive_icon_animation||"none"},[this.selectField("inactive_icon_animation",[{value:"none",label:(0,n.kg)("editor.icon.animation_none",r,"None")},{value:"pulse",label:(0,n.kg)("editor.icon.animation_pulse",r,"Pulse")},{value:"spin",label:(0,n.kg)("editor.icon.animation_spin",r,"Spin")},{value:"bounce",label:(0,n.kg)("editor.icon.animation_bounce",r,"Bounce")},{value:"flash",label:(0,n.kg)("editor.icon.animation_flash",r,"Flash")},{value:"shake",label:(0,n.kg)("editor.icon.animation_shake",r,"Shake")},{value:"vibrate",label:(0,n.kg)("editor.icon.animation_vibrate",r,"Vibrate")},{value:"rotate-left",label:(0,n.kg)("editor.icon.animation_rotate_left",r,"Rotate Left")},{value:"rotate-right",label:(0,n.kg)("editor.icon.animation_rotate_right",r,"Rotate Right")},{value:"fade",label:(0,n.kg)("editor.icon.animation_fade",r,"Fade")},{value:"scale",label:(0,n.kg)("editor.icon.animation_scale",r,"Scale")},{value:"tada",label:(0,n.kg)("editor.icon.animation_tada",r,"Tada")}])],e=>{const o=this._formValue(e,"inactive_icon_animation");if(void 0===o)return;const a=String(o);a!==(i.icons[t].inactive_icon_animation||"none")&&(this._updateIcon(i,t,{inactive_icon_animation:a,active_icon_animation:a},l),setTimeout(()=>this.triggerPreviewUpdate(),50))},!1)}
        </div>

        <!-- Hover Effect -->
        ${this.renderFieldSection((0,n.kg)("editor.icon.hover_effect",r,"Hover Effect"),(0,n.kg)("editor.icon.hover_effect_desc",r,"Enable hover animation on mouse over"),a,{enable_hover_effect:e.enable_hover_effect||!1},[this.booleanField("enable_hover_effect")],e=>{this._updateIcon(i,t,{enable_hover_effect:e.detail.value.enable_hover_effect},l),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
      </div>
    `}_addIcon(e,t){const i={id:this.generateId("icon-item"),icon_mode:"entity",entity:"weather.forecast_home",name:"",icon_inactive:"mdi:weather-partly-cloudy",icon_active:"mdi:weather-partly-cloudy",inactive_state:"",active_state:"",inactive_attribute:"",active_attribute:"",display_attribute:"",custom_inactive_state_text:"",custom_active_state_text:"",custom_inactive_name_text:"",custom_active_name_text:"",use_entity_color_for_icon:!1,use_state_color_for_inactive_icon:!1,use_state_color_for_active_icon:!1,color_inactive:"var(--secondary-text-color)",color_active:"var(--primary-color)",inactive_icon_color:"var(--secondary-text-color)",active_icon_color:"var(--primary-color)",inactive_name_color:"var(--primary-text-color)",active_name_color:"var(--primary-text-color)",inactive_state_color:"var(--secondary-text-color)",active_state_color:"var(--secondary-text-color)",show_name_when_inactive:!0,show_state_when_inactive:!0,show_icon_when_inactive:!0,show_name_when_active:!0,show_state_when_active:!0,show_icon_when_active:!0,show_entity_picture:!0,show_state:!0,show_name:!0,icon_size:26,text_size:14,name_icon_gap:8,name_state_gap:2,icon_state_gap:4,active_icon_size:26,inactive_icon_size:26,active_text_size:14,inactive_text_size:14,state_size:14,active_state_size:14,inactive_state_size:14,icon_background:"none",use_entity_color_for_icon_background:!1,icon_background_color:"transparent",active_icon_background:"none",inactive_icon_background:"none",active_icon_background_color:"transparent",inactive_icon_background_color:"transparent",icon_background_padding:8,inactive_icon_background_padding:8,active_icon_background_padding:8,active_icon_background_padding_locked:!0,icon_size_locked:!0,text_size_locked:!0,state_size_locked:!0,active_icon_locked:!0,active_icon_color_locked:!1,active_icon_background_locked:!0,active_icon_background_color_locked:!0,active_name_locked:!0,active_name_color_locked:!0,active_state_locked:!1,active_state_color_locked:!0,inactive_icon_animation:"none",active_icon_animation:"none",show_units:!0,vertical_alignment:"center",container_width:void 0,container_background_shape:"none",container_background_color:"#808080",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},click_action:"toggle",double_click_action:"none",hold_action_legacy:"none",navigation_path:"",url:"",service:"",service_data:{},unified_template_mode:!1,unified_template:"",ignore_entity_state_config:!1};t({icons:[...e.icons,i]}),this.triggerPreviewUpdate()}_removeIcon(e,t,i){e.icons.length<=1||(i({icons:e.icons.filter((e,i)=>i!==t)}),this.triggerPreviewUpdate())}_iconHeaderTitle(e,t,i,o){var a,r,l;const s=(0,n.kg)("editor.icon.icon_row_title",o,"Icon {number}").replace("{number}",String(t+1));return e.internal_name?e.internal_name:"static"===e.icon_mode?e.icon_inactive||s:e.name||e.entity&&(null===(l=null===(r=null===(a=null==i?void 0:i.states)||void 0===a?void 0:a[e.entity])||void 0===r?void 0:r.attributes)||void 0===l?void 0:l.friendly_name)||e.entity||s}_iconHeaderSubtitle(e,t,i){const o=(0,n.kg)("editor.icon.icon_row_title",i,"Icon {number}").replace("{number}",String(t+1));return"static"===e.icon_mode?`${o} · ${(0,n.kg)("editor.icon.icon_mode.static",i,"Static")}`:e.entity?`${o} · ${e.entity}`:o}_iconHeaderIcon(e,t){var i,o,a;return e.icon_inactive||e.entity&&(null===(a=null===(o=null===(i=null==t?void 0:t.states)||void 0===i?void 0:i[e.entity])||void 0===o?void 0:o.attributes)||void 0===a?void 0:a.icon)||"mdi:shape-outline"}_onIconDragStart(e,t){this._draggedIconIndex=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",String(t)))}_onIconDragOver(e,t){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._dragOverIconIndex=t}_onIconDragEnd(){this._draggedIconIndex=null,this._dragOverIconIndex=null}_onIconDrop(e,t,i,o){e.preventDefault();const a=this._draggedIconIndex;if(null===a||a===t)return void this._onIconDragEnd();const r=[...i.icons],[n]=r.splice(a,1);r.splice(t,0,n),o({icons:r}),this.triggerPreviewUpdate(),this._onIconDragEnd()}_updateIcon(e,t,i,o){o({icons:e.icons.map((e,o)=>o===t?Object.assign(Object.assign({},e),i):e)}),this.triggerPreviewUpdate()}_syncPrimaryEntityActions(e,t,i){const o=e=>e&&"object"==typeof e?e.target?e:"more-info"===e.action||"toggle"===e.action||"default"===e.action?Object.assign(Object.assign({},e),{entity:i}):e:e,a=void 0!==t.tap_action?t.tap_action:e.tap_action,r=void 0!==t.hold_action?t.hold_action:e.hold_action,n=void 0!==t.double_tap_action?t.double_tap_action:e.double_tap_action,l=o(a),s=o(r),d=o(n);l!==e.tap_action&&(t.tap_action=l),s!==e.hold_action&&(t.hold_action=s),d!==e.double_tap_action&&(t.double_tap_action=d)}_handleEntitySelection(e,t,i,o,a,r,n){const l={entity:o},d=this.resolveEntity(o,n)||o;if(d&&(null==a?void 0:a.states[d])){const e=s.s.getEntityIcon(d,a);e&&(l.icon_inactive=e,!1!==i.icons[t].active_icon_locked&&(l.icon_active=e))}if(d&&this._isBinaryEntity(d)){const e=i.icons[t];e.active_state||e.inactive_state||(l.active_state="on",l.inactive_state="off")}if(o){const e=e=>e&&"object"==typeof e?e.target?e:"more-info"===e.action||"toggle"===e.action||"default"===e.action?Object.assign(Object.assign({},e),{entity:o}):e:e,a=i.icons[t],r=e(null==a?void 0:a.tap_action),n=e(null==a?void 0:a.hold_action),s=e(null==a?void 0:a.double_tap_action);r!==(null==a?void 0:a.tap_action)&&(l.tap_action=r),n!==(null==a?void 0:a.hold_action)&&(l.hold_action=n),s!==(null==a?void 0:a.double_tap_action)&&(l.double_tap_action=s)}const c={icons:i.icons.map((e,i)=>i===t?Object.assign(Object.assign({},e),l):e)};0===t&&o&&this._syncPrimaryEntityActions(i,c,o),r(c),setTimeout(()=>{try{this.triggerPreviewUpdate()}catch(e){}window.dispatchEvent(new CustomEvent("ultra-card-actions-refresh",{detail:{moduleId:i.id},bubbles:!0,composed:!0}))},50);const g=`${e.entity}_attributes`,p=`${o}_attributes`;this._attributeCache.delete(g),this._attributeCache.delete(p)}_debouncedUpdateIcon(e,t,i,o,a=100){this._updateTimeout&&clearTimeout(this._updateTimeout),this._updateTimeout=setTimeout(()=>{this._updateIcon(e,t,i,o)},a)}_updateIconWithLockSync(e,t,i,o,a){const r=e.icons[t],n={[i]:o},l={icon_inactive:{active:"icon_active",lock:"active_icon_locked"},inactive_icon_size:{active:"active_icon_size",lock:"icon_size_locked"},inactive_text_size:{active:"active_text_size",lock:"text_size_locked"},inactive_state_size:{active:"active_state_size",lock:"state_size_locked"},inactive_icon_color:{active:"active_icon_color",lock:"active_icon_color_locked"},inactive_name_color:{active:"active_name_color",lock:"active_name_color_locked"},inactive_state_color:{active:"active_state_color",lock:"active_state_color_locked"},inactive_icon_background:{active:"active_icon_background",lock:"active_icon_background_locked"},inactive_icon_background_color:{active:"active_icon_background_color",lock:"active_icon_background_color_locked"},use_state_color_for_inactive_icon:{active:"use_state_color_for_active_icon",lock:"active_state_color_locked"}}[i];l&&!1!==r[l.lock]&&(n[l.active]=o),this._updateIcon(e,t,n,a)}_debouncedUpdateIconWithLockSync(e,t,i,o,a,r=50){this._updateTimeout&&clearTimeout(this._updateTimeout),this._updateTimeout=setTimeout(()=>{this._updateIconWithLockSync(e,t,i,o,a)},r)}_renderSizeControl(e,t,i,o,a,r,n,l){return this.renderSliderField("","",a,l,r,n,1,a=>{this._updateIconWithLockSync(e,t,o,a,i)})}_renderBackgroundPaddingControl(e,t,i,o){return this.renderSliderField("","",o,8,0,50,1,o=>{this._updateIcon(e,t,{inactive_icon_background_padding:o,active_icon_background_padding:o,icon_background_padding:o},i),setTimeout(()=>this.triggerPreviewUpdate(),50)})}_renderFieldWithLock(e,t,i,a,r,n,l,s,d,c){const g=e.icons[t],p=!1!==g[a],m=p&&g[n]||l;return o.qy`
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="flex: 1;">
          ${"icon"===s?o.qy`
                <div
                  style="opacity: ${p?"0.5":"1"}; pointer-events: ${p?"none":"auto"};"
                >
                  ${this.renderUcForm(d,{[r]:m},[this.iconField(r)],o=>{if(!p){const a=this._formValue(o,r);if(void 0===a)return;this._updateIcon(e,t,{[r]:a},i)}},!1)}
                </div>
              `:"color"===s?o.qy`
                  <ultra-color-picker
                    .value=${m}
                    .disabled=${p}
                    @value-changed=${o=>{if(!p){const a=o.detail&&"value"in o.detail?o.detail.value:void 0;if(void 0===a)return;this._updateIcon(e,t,{[r]:a},i)}}}
                  ></ultra-color-picker>
                `:"select"===s?o.qy`
                    <div
                      style="opacity: ${p?"0.5":"1"}; pointer-events: ${p?"none":"auto"};"
                    >
                      ${this.renderUcForm(d,{[r]:m},[this.selectField(r,c||[])],o=>{const a=this._formValue(o,r);if(void 0===a)return;const n=String(a);n!==g[r]&&this._updateIcon(e,t,{[r]:n},i)},!1)}
                    </div>
                  `:"toggle"===s?o.qy`
                      <div
                        style="opacity: ${p?"0.5":"1"}; pointer-events: ${p?"none":"auto"};"
                      >
                        ${this.renderUcForm(d,{[r]:!!m},[this.booleanField(r)],o=>{p||this._updateIcon(e,t,{[r]:!!o.detail.value[r]},i)})}
                      </div>
                    `:o.qy`
                      <div
                        style="opacity: ${p?"0.5":"1"}; pointer-events: ${p?"none":"auto"};"
                      >
                        ${this.renderUcForm(d,{[r]:m},[this.textField(r)],o=>{const a=this._formValue(o,r);if(void 0===a)return;const n="string"==typeof a?a:String(a);n!==g[r]&&this._updateIcon(e,t,{[r]:n},i)},!1)}
                      </div>
                    `}
        </div>
        <button
          class="lock-btn ${p?"locked":"unlocked"}"
          @click=${()=>{const o=!p,l={[a]:o};o&&(l[r]=g[n]),this._updateIcon(e,t,l,i)}}
          title="${p?"Unlock to customize this field independently":"Lock to inherit from inactive state"}"
        >
          <ha-icon icon="${p?"mdi:lock":"mdi:lock-open"}"></ha-icon>
        </button>
      </div>
    `}_renderSizeControlWithLock(e,t,i,a,r,n,l,s,d,c){const g=e.icons[t],p=`${a}_locked`,m=!1!==g[p],u=m?g[n]||c:l;return o.qy`
      <div class="gap-control-container" style="display: flex; align-items: center; gap: 12px;">
        <ha-slider
          class="uc-ha-slider"
          style="flex: 1;"
          labeled
          pin
          .min=${s}
          .max=${d}
          .step=${1}
          .value=${u}
          .disabled=${m}
          @change=${o=>{if(m)return;const a=Number(o.target.value);isNaN(a)||this._updateIcon(e,t,{[r]:a},i)}}
        ></ha-slider>
        <input
          type="number"
          class="gap-input"
          min="${s}"
          max="${d}"
          step="1"
          .value="${u}"
          .disabled=${m}
          @input=${o=>{if(!m){const a=o.target,n=Number(a.value);!isNaN(n)&&n>=s&&n<=d&&this._updateIcon(e,t,{[r]:n},i)}}}
          @keydown=${o=>{if(!m&&("ArrowUp"===o.key||"ArrowDown"===o.key)){o.preventDefault();const a=o.target,n=Number(a.value)||c,l="ArrowUp"===o.key?1:-1,g=Math.max(s,Math.min(d,n+l));this._updateIcon(e,t,{[r]:g},i)}}}
        />
        <button
          class="reset-btn"
          type="button"
          @click=${()=>{m||this._updateIcon(e,t,{[r]:c},i)}}
          title="Reset to default (${c})"
          .disabled=${m}
        >
          <ha-icon icon="mdi:refresh"></ha-icon>
        </button>
        <button
          class="lock-btn ${m?"locked":"unlocked"}"
          @click=${()=>{const o=!m,a={[p]:o};o&&(a[r]=g[n]||c),this._updateIcon(e,t,a,i)}}
          title="${m?"Unlock to set different sizes for active/inactive":"Lock to use same size for both states"}"
        >
          <ha-icon icon="${m?"mdi:lock":"mdi:lock-open"}"></ha-icon>
        </button>
      </div>
    `}}function c(e,t,i,o,a){return d.prototype.renderGeneralTabContent.call(e,t,i,o,a)}(0,r.t)(a.UltraIconModule,d)},7275(e,t,i){i.r(t),i.d(t,{UltraImageModuleSettings:()=>l,renderImageGeneralTab:()=>s});var o=i(2618),a=i(33),r=i(5514),n=i(6478);i(7921);class l extends a.UltraImageModule{renderGeneralTabContent(e,t,i,a){var r;const l=e,s=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        <!-- Image Settings (source type + type-specific fields in one card) -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px; max-width: 100%; box-sizing: border-box;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid var(--primary-color); letter-spacing: 0.5px;"
          >
            ${(0,n.kg)("editor.image.settings",s,"Image Settings")}
          </div>
          ${this.renderSegmentedField((0,n.kg)("editor.image.source_type",s,"Image Source Type"),(0,n.kg)("editor.image.source_type_desc",s,"Choose how you want to specify the image source."),l.image_type||"default",[{value:"default",label:(0,n.kg)("editor.image.source.default",s,"Default Image"),icon:"mdi:image-outline"},{value:"url",label:(0,n.kg)("editor.image.source.url",s,"Image URL"),icon:"mdi:link-variant"},{value:"upload",label:(0,n.kg)("editor.image.source.upload",s,"Upload Image"),icon:"mdi:upload"},{value:"entity",label:(0,n.kg)("editor.image.source.entity",s,"Entity Image"),icon:"mdi:account-circle"},{value:"attribute",label:(0,n.kg)("editor.image.source.attribute",s,"Entity Attribute"),icon:"mdi:code-braces"}],e=>{e!==(l.image_type||"default")&&(a({image_type:e}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          ${"url"===l.image_type?o.qy`
                <div style="margin-top: 8px;">
                  ${this.renderFieldSection((0,n.kg)("editor.image.image_url",s,"Image URL"),(0,n.kg)("editor.image.image_url_desc",s,"Enter the direct URL to the image you want to display."),t,{image_url:l.image_url||""},[this.textField("image_url")],e=>{a({image_url:e.detail.value.image_url}),this.triggerPreviewUpdate()})}
                </div>
              `:""}
          ${"upload"===l.image_type?o.qy`
                <div style="margin-top: 8px;">
                  ${this.renderFileField((0,n.kg)("editor.image.upload",s,"Upload Image"),(0,n.kg)("editor.image.upload_desc",s,"Click to upload an image file from your device."),t,l.image_url||"",e=>{a(e?{image_url:e,image_type:"upload"}:{image_url:""}),this.triggerPreviewUpdate()},"image/*",{chooseFile:(0,n.kg)("editor.image.upload_choose",s,"Choose file"),clear:(0,n.kg)("editor.image.upload_clear",s,"Remove file")})}
                </div>
              `:""}
          ${"entity"===l.image_type?o.qy`
                <div style="margin-top: 8px;">
                  ${this.renderEntityPickerWithVariables(t,i,"image_entity",l.image_entity||"",e=>{e!==l.image_entity&&(a({image_entity:e}),this.triggerPreviewUpdate())},void 0,(0,n.kg)("editor.image.entity",s,"Entity"))}
                  <div class="field-description">
                    ${(0,n.kg)("editor.image.entity_desc",s,"Select an entity that has an image (e.g., person, camera entities).")}
                  </div>
                </div>
              `:""}
          ${"attribute"===l.image_type?o.qy`
                <div style="margin-top: 8px;">
                  ${this.renderEntityPickerWithVariables(t,i,"image_entity",l.image_entity||"",e=>{e!==l.image_entity&&(a({image_entity:e}),this.triggerPreviewUpdate())},void 0,(0,n.kg)("editor.image.entity",s,"Entity"))}
                  <div class="field-description">
                    ${(0,n.kg)("editor.image.attribute_entity_desc",s,"Select an entity that contains an image URL in one of its attributes.")}
                  </div>
                  ${this.renderFieldSection((0,n.kg)("editor.image.attribute_name",s,"Attribute Name"),(0,n.kg)("editor.image.attribute_name_desc",s,"Enter the attribute path (dot notation supported, e.g., vehicle_data.vehicleDetails.generalDashboard)."),t,{image_attribute:l.image_attribute||""},[this.textField("image_attribute")],e=>{a({image_attribute:e.detail.value.image_attribute}),this.triggerPreviewUpdate()})}
                </div>
              `:""}
        </div>

        <!-- Size & Display Settings -->
        ${this.renderSettingsSection((0,n.kg)("editor.image.size_title",s,"Size & Display"),"",[{title:(0,n.kg)("editor.image.width",s,"Width"),description:(0,n.kg)("editor.image.width_desc",s,"Set the width (supports px, %, em, rem, vw, vh, etc.)."),hass:t,data:{width:l.width||"100%"},schema:[this.textField("width")],onChange:e=>a({width:e.detail.value.width})},{title:(0,n.kg)("editor.image.height",s,"Height"),description:(0,n.kg)("editor.image.height_desc",s,"Set the height (supports px, %, em, rem, vw, vh, etc.)."),hass:t,data:{height:l.height||"200px"},schema:[this.textField("height")],onChange:e=>a({height:e.detail.value.height})},{title:(0,n.kg)("editor.image.aspect_ratio",s,"Aspect Ratio"),description:(0,n.kg)("editor.image.aspect_ratio_desc",s,"Set the aspect ratio of the image container."),hass:t,data:{aspect_ratio:l.aspect_ratio||"auto"},schema:[this.selectField("aspect_ratio",[{value:"auto",label:(0,n.kg)("editor.image.aspect.auto",s,"Auto (use height setting)")},{value:"1/1",label:(0,n.kg)("editor.image.aspect.square",s,"Square (1:1)")},{value:"4/3",label:(0,n.kg)("editor.image.aspect.standard",s,"Standard (4:3)")},{value:"3/2",label:(0,n.kg)("editor.image.aspect.photo",s,"Photo (3:2)")},{value:"16/9",label:(0,n.kg)("editor.image.aspect.widescreen",s,"Widescreen (16:9)")},{value:"21/9",label:(0,n.kg)("editor.image.aspect.ultrawide",s,"Ultrawide (21:9)")},{value:"2/3",label:(0,n.kg)("editor.image.aspect.portrait",s,"Portrait (2:3)")},{value:"9/16",label:(0,n.kg)("editor.image.aspect.mobile",s,"Mobile (9:16)")}])],onChange:e=>{const t=e.detail.value.aspect_ratio;t!==(l.aspect_ratio||"auto")&&(a({aspect_ratio:t}),setTimeout(()=>this.triggerPreviewUpdate(),50))}},{title:(0,n.kg)("editor.image.crop_fit",s,"Crop & Fit"),description:(0,n.kg)("editor.image.crop_fit_desc",s,"Control how the image fits within its container."),hass:t,data:{object_fit:l.object_fit||"cover"},schema:[this.selectField("object_fit",[{value:"cover",label:(0,n.kg)("editor.image.fit.cover",s,"Cover (crop to fill)")},{value:"contain",label:(0,n.kg)("editor.image.fit.contain",s,"Contain (fit entire image)")},{value:"fill",label:(0,n.kg)("editor.image.fit.fill",s,"Fill (stretch to fit)")},{value:"scale-down",label:(0,n.kg)("editor.image.fit.scale_down",s,"Scale Down")},{value:"none",label:(0,n.kg)("editor.image.fit.none",s,"None (original size)")}])],onChange:e=>{const t=e.detail.value.object_fit;t!==(l.object_fit||"cover")&&(a({object_fit:t}),setTimeout(()=>this.triggerPreviewUpdate(),50))}},{title:(0,n.kg)("editor.image.border_radius",s,"Border Radius"),description:(0,n.kg)("editor.image.border_radius_desc",s,"Control the rounded corners of the image."),hass:t,data:{border_radius:l.border_radius||8},schema:[this.numberField("border_radius",0,64,1)],onChange:e=>a({border_radius:e.detail.value.border_radius})}])}

        <!-- Filters -->
        ${this.renderSettingsSection((0,n.kg)("editor.image.filters",s,"Filters"),"",[{title:(0,n.kg)("editor.image.filter.blur",s,"Blur"),description:(0,n.kg)("editor.image.filter.blur_desc",s,"Apply a blur effect to your image."),hass:t,data:{filter_blur:l.filter_blur||0},schema:[this.numberField("filter_blur",0,20,1)],onChange:e=>a({filter_blur:e.detail.value.filter_blur})},{title:(0,n.kg)("editor.image.filter.brightness",s,"Brightness (%)"),description:(0,n.kg)("editor.image.filter.brightness_desc",s,"Adjust the brightness of your image."),hass:t,data:{filter_brightness:l.filter_brightness||100},schema:[this.numberField("filter_brightness",0,200,1)],onChange:e=>a({filter_brightness:e.detail.value.filter_brightness})},{title:(0,n.kg)("editor.image.filter.contrast",s,"Contrast (%)"),description:(0,n.kg)("editor.image.filter.contrast_desc",s,"Modify the contrast of your image."),hass:t,data:{filter_contrast:l.filter_contrast||100},schema:[this.numberField("filter_contrast",0,200,1)],onChange:e=>a({filter_contrast:e.detail.value.filter_contrast})},{title:(0,n.kg)("editor.image.filter.saturation",s,"Saturation (%)"),description:(0,n.kg)("editor.image.filter.saturation_desc",s,"Adjust the saturation of your image."),hass:t,data:{filter_saturate:l.filter_saturate||100},schema:[this.numberField("filter_saturate",0,200,1)],onChange:e=>a({filter_saturate:e.detail.value.filter_saturate})},{title:(0,n.kg)("editor.image.rotation",s,"Rotation (°)"),description:(0,n.kg)("editor.image.rotation_desc",s,"Rotate the image clockwise (0-360 degrees)."),hass:t,data:{rotation:l.rotation||0},schema:[this.numberField("rotation",0,360,1)],onChange:e=>a({rotation:e.detail.value.rotation})}])}
        ${l.hover_enabled?o.qy`
              ${this.renderSettingsSection((0,n.kg)("editor.image.hover.title",s,"Hover Effects"),"",[{title:(0,n.kg)("editor.image.hover.effect_type",s,"Effect Type"),description:(0,n.kg)("editor.image.hover.effect_type_desc",s,"Choose the type of hover effect."),hass:t,data:{effect:l.hover_effect||"scale"},schema:[this.selectField("effect",[{value:"scale",label:(0,n.kg)("editor.image.hover.scale",s,"Scale (zoom in/out)")},{value:"rotate",label:(0,n.kg)("editor.image.hover.rotate",s,"Rotate")},{value:"fade",label:(0,n.kg)("editor.image.hover.fade",s,"Fade (opacity change)")},{value:"blur",label:(0,n.kg)("editor.image.hover.blur",s,"Blur")},{value:"brightness",label:(0,n.kg)("editor.image.hover.brightness",s,"Brightness")},{value:"glow",label:(0,n.kg)("editor.image.hover.glow",s,"Glow (box shadow)")},{value:"slide",label:(0,n.kg)("editor.image.hover.slide",s,"Slide (translate)")}])],onChange:e=>{const t=e.detail.value.effect;t!==(l.hover_effect||"scale")&&(a({hover_effect:t}),setTimeout(()=>this.triggerPreviewUpdate(),50))}}])}
                          label: localize('editor.image.hover.glow', lang, 'Glow (box shadow)'),
                        },
                        {
                          value: 'slide',
                          label: localize('editor.image.hover.slide', lang, 'Slide (translate)'),
                        },
                      ]),
                    ],
                    (e: CustomEvent) => {
                      const next = e.detail.value.effect;
                      const prev = imageModule.hover_effect || 'scale';
                      if (next === prev) return;
                      updateModule({ hover_effect: next });
                      // Trigger re-render to update dropdown UI
                      setTimeout(() => {
                        this.triggerPreviewUpdate();
                      }, 50);
                    }
                  )}
                </div>

                ${"scale"===l.hover_effect?this.renderFieldSection((0,n.kg)("editor.image.hover.scale_amount",s,"Scale (%)"),(0,n.kg)("editor.image.hover.scale_amount_desc",s,"Adjust the scale of the image on hover."),t,{scale:l.hover_scale||105},[this.numberField("scale",50,200,1)],e=>a({hover_scale:e.detail.value.scale})):""}
                ${"rotate"===l.hover_effect?this.renderFieldSection((0,n.kg)("editor.image.hover.rotate_amount",s,"Rotation (°)"),(0,n.kg)("editor.image.hover.rotate_amount_desc",s,"Rotate the image on hover."),t,{rotate:l.hover_rotate||5},[this.numberField("rotate",-45,45,1)],e=>a({hover_rotate:e.detail.value.rotate})):""}
                ${"fade"===l.hover_effect?this.renderFieldSection((0,n.kg)("editor.image.hover.opacity",s,"Opacity (%)"),(0,n.kg)("editor.image.hover.opacity_desc",s,"Change the opacity of the image on hover."),t,{opacity:l.hover_opacity||90},[this.numberField("opacity",0,100,1)],e=>a({hover_opacity:e.detail.value.opacity})):""}
                ${"blur"===l.hover_effect?this.renderFieldSection((0,n.kg)("editor.image.hover.blur_amount",s,"Blur (px)"),(0,n.kg)("editor.image.hover.blur_amount_desc",s,"Apply a blur effect to the image on hover."),t,{blur:l.hover_blur||2},[this.numberField("blur",0,20,1)],e=>a({hover_blur:e.detail.value.blur})):""}
                ${"brightness"===l.hover_effect?this.renderFieldSection((0,n.kg)("editor.image.hover.brightness_amount",s,"Brightness (%)"),(0,n.kg)("editor.image.hover.brightness_amount_desc",s,"Adjust the brightness of the image on hover."),t,{brightness:l.hover_brightness||110},[this.numberField("brightness",0,200,1)],e=>a({hover_brightness:e.detail.value.brightness})):""}
                ${"glow"===l.hover_effect?this.renderFieldSection((0,n.kg)("editor.image.hover.glow_intensity",s,"Glow Intensity"),(0,n.kg)("editor.image.hover.glow_intensity_desc",s,"Choose the intensity of the glow effect on hover."),t,{shadow:l.hover_shadow||"medium"},[this.selectField("shadow",[{value:"light",label:(0,n.kg)("editor.image.hover.glow_light",s,"Light Glow")},{value:"medium",label:(0,n.kg)("editor.image.hover.glow_medium",s,"Medium Glow")},{value:"heavy",label:(0,n.kg)("editor.image.hover.glow_heavy",s,"Heavy Glow")},{value:"custom",label:(0,n.kg)("editor.image.hover.glow_custom",s,"Custom Shadow")}])],e=>{const t=e.detail.value.shadow;t!==(l.hover_shadow||"medium")&&(a({hover_shadow:t}),setTimeout(()=>this.triggerPreviewUpdate(),50))}):""}
                ${"slide"===l.hover_effect?o.qy`
                        ${this.renderFieldSection((0,n.kg)("editor.image.hover.translate_x",s,"Horizontal (px)"),(0,n.kg)("editor.image.hover.translate_x_desc",s,"Translate the image horizontally on hover."),t,{translate_x:l.hover_translate_x||0},[this.numberField("translate_x",-100,100,1)],e=>a({hover_translate_x:e.detail.value.translate_x}))}
                        ${this.renderFieldSection((0,n.kg)("editor.image.hover.translate_y",s,"Vertical (px)"),(0,n.kg)("editor.image.hover.translate_y_desc",s,"Translate the image vertically on hover."),t,{translate_y:l.hover_translate_y||0},[this.numberField("translate_y",-100,100,1)],e=>a({hover_translate_y:e.detail.value.translate_y}))}
                      `:""}
            `:""}
      </div>
    `}}function s(e,t,i,o,a){return l.prototype.renderGeneralTabContent.call(e,t,i,o,a)}(0,r.t)(a.UltraImageModule,l)},4634(e,t,i){i.r(t),i.d(t,{UltraInfoModuleSettings:()=>s,renderInfoGeneralTab:()=>d});var o=i(2618),a=i(5308),r=i(5514),n=i(6478),l=i(571);i(7921);class s extends a.UltraInfoModule{renderGeneralTabContent(e,t,i,r){var l,s,d;const c=e,g=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en",p=this.createDefault().info_entities[0];c.info_entities&&0!==c.info_entities.length||(c.info_entities=[Object.assign({},p)],r({info_entities:c.info_entities}));let m=c.info_entities[0]?Object.assign(Object.assign({},p),c.info_entities[0]):p;return m=Object.assign(Object.assign({},m),{icon_position:m.icon_position||"left",overall_alignment:m.overall_alignment||"center",icon_alignment:m.icon_alignment||"center",name_alignment:m.name_alignment||"start",state_alignment:m.state_alignment||"start",name_value_layout:m.name_value_layout||"vertical",name_value_order:m.name_value_order||"name-first",name_value_gap:void 0!==m.name_value_gap?m.name_value_gap:2,content_distribution:m.content_distribution||"normal"}),o.qy`
      ${this.injectUcFormStyles()}
      <style>
        /* Layout & Positioning button active styles */
        .control-btn.active {
          border: none !important;
          background: var(--primary-color) !important;
          color: var(--text-primary-color, #fff) !important;
          border-radius: 2px !important;
        }

        .apply-size-btn {
          margin-top: 8px;
          width: 100%;
          padding: 8px 10px;
          border: 1px solid var(--divider-color);
          border-radius: 6px;
          background: var(--uc-pane-bg, var(--card-background-color));
          color: var(--primary-text-color);
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .apply-size-btn:hover {
          border-color: var(--primary-color);
          background: color-mix(in srgb, var(--primary-color) 12%, transparent);
        }
      </style>
      <div class="module-general-settings" data-uc-role="pane">
        <!-- Entity Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,n.kg)("editor.info.entity_section.title",g,"ENTITY CONFIGURATION")}
          </div>

          <div style="margin-bottom: 16px;">
            ${this.renderEntityPickerWithVariables(t,i,"entity",m.entity||"",e=>{var i,o;e!==((null===(o=null===(i=c.info_entities)||void 0===i?void 0:i[0])||void 0===o?void 0:o.entity)||"")&&(this._handleEntityChange(c,0,e,t,r),setTimeout(()=>this.triggerPreviewUpdate(),50))},void 0,(0,n.kg)("editor.info.entity",g,"Entity"))}
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);"
            >
              ${(0,n.kg)("editor.info.entity_desc",g,"Select the entity whose state, icon, and attributes will be displayed.")}
            </div>
          </div>
        </div>

        <!-- Icon Settings -->
        <div
          class="settings-section icon-settings"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,n.kg)("editor.info.icon_section.title",g,"Icon Settings")}
          </div>

          <div style="margin-bottom: 16px;">
            <ha-form
              .hass=${t}
              .data=${{show_icon:!1!==m.show_icon}}
              .schema=${[{name:"show_icon",label:(0,n.kg)("editor.info.show_icon",g,"Show Icon"),description:(0,n.kg)("editor.info.show_icon_desc",g,"Display an icon next to the entity value"),selector:{boolean:{}}}]}
              .computeLabel=${e=>e.label||e.name}
              .computeDescription=${e=>e.description||""}
              @value-changed=${e=>{this._updateEntity(c,0,{show_icon:e.detail.value.show_icon},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ha-form>
          </div>

          ${!1!==m.show_icon?o.qy`
                <div style="margin-bottom: 16px;">
                  <ha-form
                    .hass=${t}
                    .data=${{icon:m.icon||""}}
                    .schema=${[{name:"icon",label:(0,n.kg)("editor.info.icon",g,"Icon"),description:(0,n.kg)("editor.info.icon_desc",g,"Choose an icon to display"),selector:{icon:{}}}]}
                    .computeLabel=${e=>e.label||e.name}
                    .computeDescription=${e=>e.description||""}
                    @value-changed=${e=>{var t,i;const o=e.detail.value.icon;o!==((null===(i=null===(t=c.info_entities)||void 0===t?void 0:t[0])||void 0===i?void 0:i.icon)||"")&&(this._updateEntity(c,0,{icon:o},r),setTimeout(()=>this.triggerPreviewUpdate(),50))}}
                  ></ha-form>
                </div>

                ${this.renderFieldSection((0,n.kg)("editor.info.icon_section.show_entity_picture",g,"Show Entity Picture"),(0,n.kg)("editor.info.icon_section.show_entity_picture_desc",g,"When enabled, entity_picture replaces the configured icon when available."),t,{show_entity_picture:!1!==m.show_entity_picture},[this.booleanField("show_entity_picture")],e=>{this._updateEntity(c,0,{show_entity_picture:e.detail.value.show_entity_picture},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
                  >
                    ${(0,n.kg)("editor.info.icon_color",g,"Icon Color")}
                  </div>
                  <ultra-color-picker
                    .value=${m.icon_color||""}
                    .defaultValue=${"var(--primary-color)"}
                    .hass=${t}
                    @value-changed=${e=>{this._updateEntity(c,0,{icon_color:e.detail.value},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ultra-color-picker>
                </div>
              `:""}
        </div>

        <!-- Name Settings -->
        <div
          class="settings-section name-settings"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,n.kg)("editor.info.name_section.title",g,"Name Settings")}
          </div>

          <div style="margin-bottom: 16px;">
            <ha-form
              .hass=${t}
              .data=${{show_name:!1!==m.show_name}}
              .schema=${[{name:"show_name",label:(0,n.kg)("editor.info.show_name",g,"Show Name"),description:(0,n.kg)("editor.info.show_name_desc",g,"Display the entity name above the value"),selector:{boolean:{}}}]}
              .computeLabel=${e=>e.label||e.name}
              .computeDescription=${e=>e.description||""}
              @value-changed=${e=>{this._updateEntity(c,0,{show_name:e.detail.value.show_name},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ha-form>
          </div>

          ${!1!==m.show_name?o.qy`
                <div style="margin-bottom: 16px;">
                  <ha-form
                    .hass=${t}
                    .data=${{name:null!==(d=null===(s=c.info_entities[0])||void 0===s?void 0:s.name)&&void 0!==d?d:""}}
                    .schema=${[{name:"name",label:(0,n.kg)("editor.info.custom_name",g,"Custom Name"),description:(0,n.kg)("editor.info.custom_name_desc",g,"Override the entity name with a custom name"),selector:{text:{}}}]}
                    .computeLabel=${e=>e.label||e.name}
                    .computeDescription=${e=>e.description||""}
                    @value-changed=${e=>{this._updateEntity(c,0,{name:e.detail.value.name},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ha-form>
                </div>

                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
                  >
                    ${(0,n.kg)("editor.info.name_color",g,"Name Color")}
                  </div>
                  <ultra-color-picker
                    .value=${m.name_color||""}
                    .defaultValue=${"var(--secondary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>{this._updateEntity(c,0,{name_color:e.detail.value},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ultra-color-picker>
                </div>
              `:""}
        </div>

        <!-- State Settings -->
        <div
          class="settings-section state-settings"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,n.kg)("editor.info.state_section.title",g,"State Settings")}
          </div>

          <div style="margin-bottom: 16px;">
            <ha-form
              .hass=${t}
              .data=${{show_state:!1!==m.show_state}}
              .schema=${[{name:"show_state",label:(0,n.kg)("editor.info.show_state",g,"Show State"),description:(0,n.kg)("editor.info.show_state_desc",g,"Display the entity state/value"),selector:{boolean:{}}}]}
              .computeLabel=${e=>e.label||e.name}
              .computeDescription=${e=>e.description||""}
              @value-changed=${e=>{this._updateEntity(c,0,{show_state:e.detail.value.show_state},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ha-form>
          </div>

          ${!1!==m.show_state?o.qy`
                <div style="margin-bottom: 16px;">
                  <ha-form
                    .hass=${t}
                    .data=${{show_units:!1!==m.show_units}}
                    .schema=${[{name:"show_units",label:(0,n.kg)("editor.info.show_units",g,"Show Units"),description:(0,n.kg)("editor.info.show_units_desc",g,"Display the unit of measurement (if available)"),selector:{boolean:{}}}]}
                    .computeLabel=${e=>e.label||e.name}
                    .computeDescription=${e=>e.description||""}
                    @value-changed=${e=>{this._updateEntity(c,0,{show_units:e.detail.value.show_units},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ha-form>
                </div>

                <div class="field-container" style="margin-bottom: 16px;">
                  <div class="field-title">
                    ${(0,n.kg)("editor.info.display_attribute",g,"Display Attribute")}
                  </div>
                  <div class="field-description">
                    ${(0,n.kg)("editor.info.display_attribute_desc",g,"Show an entity attribute instead of the main state")}
                  </div>
                  ${this.renderUcForm(t,{attribute:m.attribute||""},[this.selectField("attribute",this._getEntityAttributes(m.entity,t))],e=>{var t;const i=e.detail.value.attribute;i!==((null===(t=c.info_entities[0])||void 0===t?void 0:t.attribute)||"")&&(this._updateEntity(c,0,{attribute:i},r),setTimeout(()=>this.triggerPreviewUpdate(),50))},!1)}
                </div>
              `:""}
          ${!1!==m.show_state?o.qy`
                <div style="margin-bottom: 16px;">
                  <div
                    class="field-title"
                    style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
                  >
                    ${(0,n.kg)("editor.info.state_color",g,"State Color")}
                  </div>
                  <ultra-color-picker
                    .value=${m.state_color||""}
                    .defaultValue=${"var(--primary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>{this._updateEntity(c,0,{state_color:e.detail.value},r),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                  ></ultra-color-picker>
                </div>
              `:""}
        </div>

        <!-- Name & Value Layout Section (always shown) -->
        <div
          class="settings-section name-value-layout-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,n.kg)("editor.info.name_value_layout.title",g,"Name & Value Layout")}
          </div>

          <div class="field-group" style="margin-bottom: 24px;">
            <div
              class="field-title"
              style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
            >
              ${(0,n.kg)("editor.info.name_value_layout.orientation",g,"Layout Direction")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
            >
              ${!1===m.show_icon?(0,n.kg)("editor.info.name_value_layout.orientation_desc",g,"Choose how to display the name and value"):"left"===m.icon_position||"right"===m.icon_position?(0,n.kg)("editor.info.name_value_layout.orientation_desc_with_icon",g,"Choose how to arrange the name and value beside the icon"):(0,n.kg)("editor.info.name_value_layout.orientation_desc_vertical_icon",g,"Arrange name and value (horizontal places them on one line)")}
            </div>
            ${this.renderSegmentedField("","",m.name_value_layout||"vertical",[{value:"vertical",label:"Vertical",icon:"mdi:arrow-up-down"},{value:"horizontal",label:"Horizontal",icon:"mdi:arrow-left-right"}],e=>{this._updateEntity(c,0,{name_value_layout:e},r),setTimeout(()=>this.triggerPreviewUpdate(),200)})}
          </div>

          <div class="field-group" style="margin-bottom: 24px;">
            <div
              class="field-title"
              style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
            >
              ${(0,n.kg)("editor.info.name_value_order",g,"Name & Value Order")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
            >
              ${"horizontal"===(m.name_value_layout||"vertical")?(0,n.kg)("editor.info.name_value_order_desc_horizontal",g,"Which one comes first on the line"):(0,n.kg)("editor.info.name_value_order_desc_vertical",g,"Which one sits on top of the other")}
            </div>
            ${this.renderSegmentedField("","",m.name_value_order||"name-first",[{value:"name-first",label:(0,n.kg)("editor.info.name_first",g,"Name First"),icon:"mdi:format-text"},{value:"value-first",label:(0,n.kg)("editor.info.value_first",g,"Value First"),icon:"mdi:numeric"}],e=>{this._updateEntity(c,0,{name_value_order:e},r),setTimeout(()=>this.triggerPreviewUpdate(),200)})}
          </div>

          <div class="field-container" style="margin-bottom: 24px;">
            ${this.renderSliderField((0,n.kg)("editor.info.name_value_gap",g,"Name & Value Gap"),(0,n.kg)("editor.info.name_value_gap_desc",g,"Space between the name and value in pixels"),void 0!==m.name_value_gap?m.name_value_gap:2,2,0,32,1,e=>{this._updateEntity(c,0,{name_value_gap:e},r),setTimeout(()=>this.triggerPreviewUpdate(),200)})}
          </div>
        </div>

        <!-- Unified Template Section -->
        <div class="template-section" style="margin-bottom: 24px;">
          <div class="template-header">
            <div class="switch-container">
              <div class="switch-label-row">
                <label class="switch-label"
                  >${(0,n.kg)("editor.info.unified_template_section.title",g,"Template Mode")}</label
                >
                <button
                  class="help-btn"
                  style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                  title="${(0,n.kg)("editor.info.template_cheatsheet",g,"Template Cheatsheet")}"
                  @click=${e=>{e.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{detail:{module:"info"},bubbles:!0,composed:!0}))}}
                >
                  <ha-icon
                    icon="mdi:help-circle"
                    style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"
                  ></ha-icon>
                </button>
              </div>
              ${this.renderUcForm(t,{unified_template_mode:m.unified_template_mode||!1},[this.booleanField("unified_template_mode")],e=>this._updateEntity(c,0,{unified_template_mode:e.detail.value.unified_template_mode},r))}
            </div>
            <div class="template-description">
              ${(0,n.kg)("editor.info.unified_template_section.desc",g,"Use Jinja2 templates to control icon and color dynamically. Uses entity context variables for seamless entity remapping.")}
            </div>
          </div>

          ${m.unified_template_mode?o.qy`
                <div
                  class="template-content"
                  @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
                  @dragstart=${e=>e.stopPropagation()}
                  @insert-snippet=${e=>{var t,i,o;const a=e.currentTarget.querySelector("ultra-template-editor");null===(t=null==a?void 0:a.insertAtCursor)||void 0===t||t.call(a,null!==(o=null===(i=e.detail)||void 0===i?void 0:i.value)&&void 0!==o?o:"")}}
                >
                  <ultra-template-editor
                    .hass=${t}
                    .value=${m.unified_template||""}
                    .placeholder=${'{\n  "icon": "{% if state|int > 25 %}mdi:fire{% else %}mdi:snowflake{% endif %}",\n  "icon_color": "{% if state|int > 25 %}red{% else %}blue{% endif %}"\n}'}
                    .minHeight=${200}
                    .maxHeight=${500}
                    @value-changed=${e=>{this._updateEntity(c,0,{unified_template:e.detail.value},r)}}
                  ></ultra-template-editor>
                  ${this.renderTemplateKeyWarning(m.unified_template,a.R,g)}
                  <div class="template-help">
                    <p><strong>Entity context variables available:</strong></p>
                    <ul>
                      <li>
                        <code>entity</code>, <code>state</code>, <code>name</code>,
                        <code>attributes</code>, <code>unit</code>, <code>domain</code>
                      </li>
                    </ul>
                    <p><strong>Return JSON for multiple properties:</strong></p>
                    <ul>
                      <li>
                        Supported keys: <code>icon</code>, <code>icon_color</code>,
                        <code>name</code>, <code>name_color</code>, <code>state_text</code>,
                        <code>state_color</code>, <code>container_background_color</code>
                      </li>
                    </ul>
                    <code
                      style="display: block; background: var(--code-editor-background-color, #1e1e1e); padding: 12px; border-radius: 4px; font-size: 11px;"
                    >
                      {<br />
                      &nbsp;&nbsp;"icon": "{% if state|int > 25 %}mdi:fire{% else %}mdi:snowflake{%
                      endif %}",<br />
                      &nbsp;&nbsp;"icon_color": "red",<br />
                      &nbsp;&nbsp;"state_text": "{{ state }} {{ unit }}"<br />
                      }
                    </code>
                  </div>
                </div>
              `:""}
        </div>

        <!-- Size Settings -->
        <div
          class="settings-section size-settings"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,n.kg)("editor.info.size_section.title",g,"Size Settings")}
          </div>
          <div
            class="field-description"
            style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
          >
            ${(0,n.kg)("editor.info.size_section.desc",g,"These controls affect the selected entity only.")}
          </div>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            ${!1!==m.show_icon?o.qy`
                  <div class="field-container" style="margin-bottom: 24px;">
                    ${this.renderSliderField((0,n.kg)("editor.info.icon_size",g,"Icon Size"),(0,n.kg)("editor.info.icon_size_desc",g,"Size of the icon in pixels"),Number(m.icon_size)||26,26,12,48,1,e=>{this._updateEntity(c,0,{icon_size:e},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                  </div>
                `:""}
            ${!1!==m.show_name?o.qy`
                  <div class="field-container" style="margin-bottom: 24px;">
                    ${this.renderSliderField((0,n.kg)("editor.info.name_size",g,"Name Size"),(0,n.kg)("editor.info.name_size_desc",g,"Size of the entity name text in pixels"),m.name_size||12,12,8,32,1,e=>{this._updateEntity(c,0,{name_size:e},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                  </div>
                `:""}

            <div class="field-container" style="margin-bottom: 24px;">
              ${this.renderSliderField((0,n.kg)("editor.info.value_size",g,"Value Size"),(0,n.kg)("editor.info.value_size_desc",g,"Size of the entity value text in pixels"),m.text_size||14,14,8,32,1,e=>{this._updateEntity(c,0,{text_size:e},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            </div>

            ${!1!==m.show_icon?o.qy`
                  <div class="field-container" style="margin-bottom: 24px;">
                    ${this.renderSliderField((0,n.kg)("editor.info.icon_gap",g,"Icon Gap"),(0,n.kg)("editor.info.icon_gap_desc",g,"Space between the icon and content in pixels"),m.icon_gap||8,8,0,32,1,e=>{this._updateEntity(c,0,{icon_gap:e},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
                  </div>
                `:""}
          </div>
        </div>

        <!-- Layout & Positioning Section -->
        <div
          class="settings-section layout-positioning-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-top: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px !important; font-weight: 700 !important; text-transform: uppercase !important; color: var(--primary-color); margin-bottom: 16px; border-bottom: 2px solid var(--primary-color); padding-bottom: 8px;"
          >
            ${(0,n.kg)("editor.info.layout_section.title",g,"Layout & Positioning")}
          </div>

          <!-- Allow Wrap Toggle -->
          <div class="field-group" style="margin-bottom: 24px;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="flex: 1;">
                <div
                  class="field-title"
                  style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 4px;"
                >
                  ${(0,n.kg)("editor.info.allow_wrap",g,"Allow Wrapping")}
                </div>
                <div
                  class="field-description"
                  style="font-size: 13px !important; font-weight: 400 !important; color: var(--secondary-text-color); opacity: 0.8; line-height: 1.4;"
                >
                  ${(0,n.kg)("editor.info.allow_wrap_desc",g,"Allow grid items to wrap to new rows when they exceed the container width")}
                </div>
              </div>
              <div style="margin-left: 16px;">
                ${this.renderUcForm(t,{allow_wrap:!1!==c.allow_wrap},[this.booleanField("allow_wrap")],e=>{r({allow_wrap:e.detail.value.allow_wrap}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
              </div>
            </div>
          </div>

          <!-- Icon Position -->
          <div class="field-group" style="margin-bottom: 24px;">
            <div
              class="field-title"
              style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
            >
              ${(0,n.kg)("editor.info.icon_position",g,"Icon Position")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
            >
              ${(0,n.kg)("editor.info.icon_position_desc",g,"Position the icon relative to the content (left, top, right, or bottom)")}
            </div>
            ${this.renderSegmentedField("","",m.icon_position||"left",[{value:"left",label:"Left",icon:"mdi:arrow-left"},{value:"top",label:"Top",icon:"mdi:arrow-up"},{value:"right",label:"Right",icon:"mdi:arrow-right"},{value:"bottom",label:"Bottom",icon:"mdi:arrow-down"}],e=>{this._updateEntity(c,0,{icon_position:e},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          <!-- Content Distribution -->
          <div class="field-group" style="margin-bottom: 24px;">
            <div
              class="field-title"
              style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
            >
              ${(0,n.kg)("editor.info.content_distribution",g,"Content Distribution")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
            >
              ${(0,n.kg)("editor.info.content_distribution_desc",g,"Control how icon and content are distributed along the main axis")}
            </div>
            ${this.renderSegmentedField("","",m.content_distribution||"normal",[{value:"normal",label:"Normal",icon:"mdi:format-align-left"},{value:"space-between",label:"Space Between",icon:"mdi:arrow-left-right"},{value:"space-around",label:"Space Around",icon:"mdi:arrow-expand-horizontal"},{value:"space-evenly",label:"Space Evenly",icon:"mdi:arrow-expand-all"}],e=>{this._updateEntity(c,0,{content_distribution:e},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          <!-- Overall Alignment and Name Alignment Side by Side -->
          <div
            style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; margin-bottom: 24px;"
          >
            <!-- Overall Alignment -->
            <div class="field-group">
              <div
                class="field-title"
                style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
              >
                ${(0,n.kg)("editor.info.overall_alignment",g,"Overall Alignment")}
              </div>
              <div
                class="field-description"
                style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
              >
                ${(0,n.kg)("editor.info.overall_alignment_desc",g,"Align the entire info item within its container")}
              </div>
              ${this.renderSegmentedField("","",m.overall_alignment||"center",[{value:"left",label:"Left",icon:"mdi:format-align-left"},{value:"center",label:"Center",icon:"mdi:format-align-center"},{value:"right",label:"Right",icon:"mdi:format-align-right"}],e=>{this._updateEntity(c,0,{overall_alignment:e},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            </div>

            <!-- Name Alignment -->
            <div class="field-group">
              <div
                class="field-title"
                style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
              >
                ${(0,n.kg)("editor.info.name_alignment",g,"Name Alignment")}
              </div>
              <div
                class="field-description"
                style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
              >
                ${(0,n.kg)("editor.info.name_alignment_desc",g,"Align the name text within its container")}
              </div>
              ${this.renderSegmentedField("","",m.name_alignment||"start",[{value:"start",label:"Start",icon:"mdi:format-align-left"},{value:"center",label:"Center",icon:"mdi:format-align-center"},{value:"end",label:"End",icon:"mdi:format-align-right"}],e=>{this._updateEntity(c,0,{name_alignment:e},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            </div>
          </div>

          <!-- Icon Alignment and State Alignment Side by Side -->
          <div
            style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;"
          >
            <!-- Icon Alignment -->
            <div class="field-group">
              <div
                class="field-title"
                style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
              >
                ${(0,n.kg)("editor.info.icon_alignment",g,"Icon Alignment")}
              </div>
              <div
                class="field-description"
                style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
              >
                ${(0,n.kg)("editor.info.icon_alignment_desc",g,"Align the icon along the cross axis")}
              </div>
              ${this.renderSegmentedField("","",m.icon_alignment||"center",[{value:"start",label:"Start",icon:"mdi:format-align-left"},{value:"center",label:"Center",icon:"mdi:format-align-center"},{value:"end",label:"End",icon:"mdi:format-align-right"}],e=>{this._updateEntity(c,0,{icon_alignment:e},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            </div>

            <!-- State Alignment -->
            <div class="field-group">
              <div
                class="field-title"
                style="font-size: 16px !important; font-weight: 600 !important; margin-bottom: 12px;"
              >
                ${(0,n.kg)("editor.info.state_alignment",g,"State Alignment")}
              </div>
              <div
                class="field-description"
                style="font-size: 13px !important; font-weight: 400 !important; margin-bottom: 12px; color: var(--secondary-text-color);"
              >
                ${(0,n.kg)("editor.info.state_alignment_desc",g,"Align the state/value text within its container")}
              </div>
              ${this.renderSegmentedField("","",m.state_alignment||"start",[{value:"start",label:"Start",icon:"mdi:format-align-left"},{value:"center",label:"Center",icon:"mdi:format-align-center"},{value:"end",label:"End",icon:"mdi:format-align-right"}],e=>{this._updateEntity(c,0,{state_alignment:e},r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            </div>
          </div>
        </div>
      </div>
    `}_syncPrimaryEntityActions(e,t,i){const o=e=>e&&"object"==typeof e?e.target?e:"more-info"===e.action||"toggle"===e.action||"default"===e.action?Object.assign(Object.assign({},e),{entity:i}):e:e,a=void 0!==t.tap_action?t.tap_action:e.tap_action,r=void 0!==t.hold_action?t.hold_action:e.hold_action,n=void 0!==t.double_tap_action?t.double_tap_action:e.double_tap_action,l=o(a),s=o(r),d=o(n);l!==e.tap_action&&(t.tap_action=l),s!==e.hold_action&&(t.hold_action=s),d!==e.double_tap_action&&(t.double_tap_action=d)}_handleEntityChange(e,t,i,o,a){var r;const n={entity:i};if(i&&(null==o?void 0:o.states[i])){const e=(null===(r=o.states[i].attributes)||void 0===r?void 0:r.friendly_name)||i.split(".").pop()||"",t=l.s.getEntityIcon(i,o);n.name=e,t&&(n.icon=t)}const s={info_entities:e.info_entities.map((e,i)=>i===t?Object.assign(Object.assign({},e),n):e)};i&&(null==o?void 0:o.states[i])&&(!e.tap_action||"nothing"===e.tap_action.action||"default"===e.tap_action.action||"more-info"===e.tap_action.action)&&(s.tap_action={action:"default",entity:i}),0===t&&i&&this._syncPrimaryEntityActions(e,s,i),a(s),setTimeout(()=>{window.dispatchEvent(new CustomEvent("ultra-card-actions-refresh",{detail:{moduleId:e.id},bubbles:!0,composed:!0}))},50)}_updateEntity(e,t,i,o){if(!e.info_entities||0===e.info_entities.length){const t=this.createDefault().info_entities[0];return e.info_entities=[Object.assign(Object.assign({},t),i)],void o({info_entities:e.info_entities})}if(t>=e.info_entities.length){const i=this.createDefault().info_entities[0];for(;e.info_entities.length<=t;)e.info_entities.push(Object.assign({},i))}o({info_entities:e.info_entities.map((e,o)=>o===t?Object.assign(Object.assign({},e),i):e)})}}function d(e,t,i,o,a){return s.prototype.renderGeneralTabContent.call(e,t,i,o,a)}(0,r.t)(a.UltraInfoModule,s)},905(e,t,i){i.r(t),i.d(t,{UltraSeparatorModuleSettings:()=>l,renderSeparatorGeneralTab:()=>s});var o=i(2618),a=i(4985),r=i(5514),n=i(6478);i(7921);class l extends a.UltraSeparatorModule{renderGeneralTabContent(e,t,i,a){var r;const l=e,s=(null===(r=t.locale)||void 0===r?void 0:r.language)||"en";return"var(--divider-color)"!==l.color&&"var(--divider-color, #cccccc)"!==l.color||a({color:"#cccccc"}),o.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        <!-- Separator Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,n.kg)("editor.separator.config.title",s,"Separator Configuration")}
          </div>

          <!-- Separator Style -->
          <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
            ${(0,n.kg)("editor.separator.style.title",s,"Separator Style")}
          </div>
          <div
            class="field-description"
            style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
          >
            ${(0,n.kg)("editor.separator.style.desc",s,"Choose the visual style of the separator line.")}
          </div>
          ${this.renderUcForm(t,{separator_style:l.separator_style},[this.selectField("separator_style",[{value:"line",label:(0,n.kg)("editor.separator.options.solid",s,"Solid Line")},{value:"double_line",label:(0,n.kg)("editor.separator.options.double",s,"Double Line")},{value:"dotted",label:(0,n.kg)("editor.separator.options.dotted",s,"Dotted Line")},{value:"double_dotted",label:(0,n.kg)("editor.separator.options.double_dotted",s,"Double Dotted")},{value:"shadow",label:(0,n.kg)("editor.separator.options.shadow",s,"Shadow")},{value:"blank",label:(0,n.kg)("editor.separator.options.blank",s,"Blank Space")}])],e=>{e.detail.value.separator_style!==l.separator_style&&(a(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}

          <!-- Orientation -->
          <div
            class="field-title"
            style="font-size: 16px; font-weight: 600; margin-bottom: 4px; margin-top: 24px;"
          >
            ${(0,n.kg)("editor.separator.orientation.title",s,"Orientation")}
          </div>
          <div
            class="field-description"
            style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
          >
            ${(0,n.kg)("editor.separator.orientation.desc",s,"Choose whether the separator runs horizontally or vertically.")}
          </div>
          ${this.renderUcForm(t,{orientation:l.orientation},[this.selectField("orientation",[{value:"horizontal",label:(0,n.kg)("editor.separator.orientation.horizontal",s,"Horizontal")},{value:"vertical",label:(0,n.kg)("editor.separator.orientation.vertical",s,"Vertical")}])],e=>{e.detail.value.orientation!==l.orientation&&(a(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
        </div>

        <!-- Appearance Configuration -->
        ${"blank"!==l.separator_style?o.qy`
              <div
                class="settings-section"
                style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
              >
                <div
                  class="section-title"
                  style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
                >
                  ${(0,n.kg)("editor.separator.appearance.title",s,"Appearance")}
                </div>

                <!-- Thickness -->
                <div class="field-container" style="margin-bottom: 24px;">
                  ${this.renderSliderField((0,n.kg)("editor.separator.thickness",s,"Thickness (px)"),(0,n.kg)("editor.separator.thickness_desc",s,"Thickness of the separator line."),l.thickness||1,1,1,20,1,e=>{a({thickness:e})})}
                </div>

                <!-- Width/Height based on orientation -->
                ${"shadow"===l.separator_style||"blank"===l.separator_style?o.qy``:"vertical"===l.orientation?this.renderUnitAwareSliderField((0,n.kg)("editor.separator.height",s,"Height"),(0,n.kg)("editor.separator.height_desc",s,'Height of the separator. Use pixels (e.g., "300px") or percentage (e.g., "50%").'),l.height_px,"300px",50,600,10,"px","300px or 50%",e=>a({height_px:e})):this.renderUnitAwareSliderField((0,n.kg)("editor.separator.width",s,"Width"),(0,n.kg)("editor.separator.width_desc",s,'Width of the separator. Use percentage (e.g., "100%") or pixels (e.g., "200px").'),l.width_percent,100,10,100,5,"%","100% or 200px",e=>a({width_percent:e}))}

                <!-- Color -->
                <div class="field-group">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                  >
                    ${(0,n.kg)("editor.separator.color.title",s,"Color")}
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
                  >
                    ${(0,n.kg)("editor.separator.color.desc",s,"Color of the separator line.")}
                  </div>
                  <ultra-color-picker
                    .label=${""}
                    .value=${l.color||"#cccccc"}
                    .defaultValue=${"#cccccc"}
                    .hass=${t}
                    @value-changed=${e=>a({color:e.detail.value})}
                  ></ultra-color-picker>
                </div>
              </div>
            `:""}
        ${"blank"!==l.separator_style?o.qy` <!-- Text in Separator -->
              <div
                class="settings-section"
                style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
              >
                ${this.renderFieldSection((0,n.kg)("editor.separator.show_title",s,"Show Title"),(0,n.kg)("editor.separator.show_title_desc",s,"Add text in the middle of the separator line (e.g., ------ Text ------)"),t,{show_title:l.show_title||!1},[this.booleanField("show_title")],e=>a({show_title:e.detail.value.show_title}))}
                ${l.show_title?o.qy`
                      <!-- Text Content -->
                      <div class="field-group" style="margin-bottom: 16px;">
                        <div
                          class="field-title"
                          style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                        >
                          ${(0,n.kg)("editor.separator.text_content.title",s,"Text Content")}
                        </div>
                        <div
                          class="field-description"
                          style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
                        >
                          ${(0,n.kg)("editor.separator.text_content.desc",s,"Text to display in the middle of the separator.")}
                        </div>
                        <ha-form
                          .hass=${t}
                          .data=${{title:l.title||""}}
                          .schema=${[{name:"title",selector:{text:{}},label:""}]}
                          @value-changed=${e=>a({title:e.detail.value.title})}
                        ></ha-form>
                      </div>

                      <!-- Font Size -->
                      <div class="field-container" style="margin-bottom: 24px;">
                        ${this.renderSliderField((0,n.kg)("editor.separator.font_size",s,"Font Size"),(0,n.kg)("editor.separator.font_size_desc",s,"Size of the text in pixels."),l.title_size||14,14,8,48,1,e=>{a({title_size:e})})}
                      </div>

                      <!-- Text Color -->
                      <div class="field-group" style="margin-bottom: 16px;">
                        <div
                          class="field-title"
                          style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                        >
                          ${(0,n.kg)("editor.separator.text_color.title",s,"Text Color")}
                        </div>
                        <div
                          class="field-description"
                          style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
                        >
                          ${(0,n.kg)("editor.separator.text_color.desc",s,"Color of the separator text.")}
                        </div>
                        <ultra-color-picker
                          .label=${""}
                          .value=${l.title_color||""}
                          .defaultValue=${"var(--secondary-text-color)"}
                          .hass=${t}
                          @value-changed=${e=>a({title_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>

                      <!-- Text Formatting -->
                      <div class="field-group">
                        <div
                          class="field-title"
                          style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                        >
                          ${(0,n.kg)("editor.separator.text_format.title",s,"Text Formatting")}
                        </div>
                        <div
                          class="field-description"
                          style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
                        >
                          ${(0,n.kg)("editor.separator.text_format.desc",s,"Apply formatting styles to the separator text.")}
                        </div>
                        <div
                          class="format-buttons"
                          style="display: flex; gap: 8px; flex-wrap: wrap;"
                        >
                          <button
                            class="format-btn ${l.title_bold?"active":""}"
                            @click=${()=>a({title_bold:!l.title_bold})}
                            style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${l.title_bold?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${l.title_bold?"white":"var(--primary-text-color)"};"
                            title=${(0,n.kg)("editor.separator.text_format.bold",s,"Bold")}
                          >
                            <ha-icon icon="mdi:format-bold"></ha-icon>
                          </button>
                          <button
                            class="format-btn ${l.title_italic?"active":""}"
                            @click=${()=>a({title_italic:!l.title_italic})}
                            style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${l.title_italic?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${l.title_italic?"white":"var(--primary-text-color)"};"
                            title=${(0,n.kg)("editor.separator.text_format.italic",s,"Italic")}
                          >
                            <ha-icon icon="mdi:format-italic"></ha-icon>
                          </button>
                          <button
                            class="format-btn ${l.title_underline?"active":""}"
                            @click=${()=>a({title_underline:!l.title_underline})}
                            style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${l.title_underline?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${l.title_underline?"white":"var(--primary-text-color)"};"
                            title=${(0,n.kg)("editor.separator.text_format.underline",s,"Underline")}
                          >
                            <ha-icon icon="mdi:format-underline"></ha-icon>
                          </button>
                          <button
                            class="format-btn ${l.title_uppercase?"active":""}"
                            @click=${()=>a({title_uppercase:!l.title_uppercase})}
                            style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${l.title_uppercase?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${l.title_uppercase?"white":"var(--primary-text-color)"};"
                            title=${(0,n.kg)("editor.separator.text_format.uppercase",s,"Uppercase")}
                          >
                            <ha-icon icon="mdi:format-letter-case-upper"></ha-icon>
                          </button>
                          <button
                            class="format-btn ${l.title_strikethrough?"active":""}"
                            @click=${()=>a({title_strikethrough:!l.title_strikethrough})}
                            style="padding: 8px; border: 1px solid var(--divider-color, #cccccc); border-radius: 4px; background: ${l.title_strikethrough?"var(--primary-color)":"var(--secondary-background-color)"}; cursor: pointer; transition: all 0.2s ease; color: ${l.title_strikethrough?"white":"var(--primary-text-color)"};"
                            title=${(0,n.kg)("editor.separator.text_format.strikethrough",s,"Strikethrough")}
                          >
                            <ha-icon icon="mdi:format-strikethrough"></ha-icon>
                          </button>
                        </div>
                      </div>
                    `:o.qy`
                      <div
                        style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                      >
                        ${(0,n.kg)("editor.separator.show_title_toggle.enable_toggle_desc",s,"Enable the toggle above to configure title settings")}
                      </div>
                    `}
              </div>`:o.qy`
              <!-- Spacer (Blank) Thickness Control -->
              <div
                class="settings-section"
                style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
              >
                <div
                  class="section-title"
                  style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
                >
                  ${(0,n.kg)("editor.separator.spacer.title",s,"Spacer Height")}
                </div>
                <div class="field-container" style="margin-bottom: 24px;">
                  ${this.renderSliderField((0,n.kg)("editor.separator.height",s,"Height (px)"),(0,n.kg)("editor.separator.height_desc",s,"Controls the visual gap for Blank Space."),l.thickness||1,1,1,300,1,e=>{a({thickness:e})})}
                </div>
              </div>
            `}
      </div>
    `}}function s(e,t,i,o,a){return l.prototype.renderGeneralTabContent.call(e,t,i,o,a)}(0,r.t)(a.UltraSeparatorModule,l)},8249(e,t,i){i.r(t),i.d(t,{UltraTextModuleSettings:()=>s,renderTextGeneralTab:()=>d});var o=i(2618),a=i(509),r=i(5514),n=i(6478),l=i(766);i(7921);class s extends a.UltraTextModule{renderGeneralTabContent(e,t,i,r){var s,d,c;const g=e,p=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        <!-- Module-Wide Size Controls -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
          >
            SIZE CONTROLS
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            Control the default sizes for this module. Design tab overrides these settings.
          </div>

          <!-- Text Size Control -->
          ${this.renderSliderField((0,n.kg)("editor.text.text_size",p,"Text Size"),"Default size for text content",null!==(d=g.text_size)&&void 0!==d?d:16,16,10,48,1,e=>{r({text_size:e})},"px")}

          <!-- Icon Size Control (only shown when icon is configured) -->
          ${g.icon&&""!==g.icon.trim()?this.renderSliderField((0,n.kg)("editor.text.icon_size",p,"Icon Size"),"Size of the icon",null!==(c=g.icon_size)&&void 0!==c?c:24,24,12,64,1,e=>{r({icon_size:e})},"px"):""}
        </div>

        <!-- Content Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,n.kg)("editor.text.content_section.title",p,"Content Configuration")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,n.kg)("editor.text.rich_text_content_section.desc",p,"Use the toolbar to format your text with bold, italic, colors, links and more.")}
          </div>

          ${g.unified_template_mode?o.qy`
                <div
                  style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; padding: 12px; background: var(--divider-color); border-radius: 8px;"
                >
                  ${(0,n.kg)("editor.text.unified_replaces_content",p,"Rich text is hidden while Unified Template Mode is on. Turn it off to edit static content, or use the unified template JSON for dynamic text.")}
                </div>
              `:(()=>{const e=g.design||{},t=g,i={},a=e.font_weight||t.font_weight;a&&(i.fontWeight=a);const n=e.font_style||t.font_style;n&&"inherit"!==n&&(i.fontStyle=n);const l=e.text_transform||t.text_transform;l&&"none"!==l&&(i.textTransform=l);const s=e.text_decoration||t.text_decoration;s&&"none"!==s&&(i.textDecoration=s);const d=e.font_family||t.font_family;d&&"inherit"!==d&&(i.fontFamily=d);const c=e.line_height||t.line_height;c&&"inherit"!==c&&(i.lineHeight=c);const p=e.letter_spacing||t.letter_spacing;p&&"inherit"!==p&&(i.letterSpacing=p);const m=e.color||g.color;m&&"inherit"!==m&&(i.color=m);const u=e.font_size&&"string"==typeof e.font_size&&""!==e.font_size.trim()?/[a-zA-Z%]/.test(e.font_size)?e.font_size:`${e.font_size}px`:void 0!==t.font_size?`${t.font_size}px`:void 0!==g.text_size?`${g.text_size}px`:void 0;return u&&(i.fontSize=u),o.qy`
                  <div
                    @mousedown=${e=>{const t=e.target;t.closest("ultra-wysiwyg-editor")||t.closest(".ProseMirror")||e.stopPropagation()}}
                    @dragstart=${e=>e.stopPropagation()}
                  >
                    <ultra-wysiwyg-editor
                      .content=${this._getEffectiveRichContent(g)}
                      .placeholder=${"Start typing..."}
                      .editorStyles=${i}
                      @content-changed=${e=>{r({rich_text_content:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                    ></ultra-wysiwyg-editor>
                  </div>
                `})()}
        </div>

        <!-- Icon Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,n.kg)("editor.text.icon_section.title",p,"Icon Configuration")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,n.kg)("editor.text.icon_section.desc",p,"Choose an icon to display alongside the text content.")}
          </div>

          ${l.U.renderFieldSection((0,n.kg)("editor.text.icon",p,"Icon"),(0,n.kg)("editor.text.icon_desc",p,"Choose an icon to display alongside the text. Leave empty for no icon."),t,{icon:g.icon||""},[this.iconField("icon")],e=>r(e.detail.value))}
          ${g.icon&&""!==g.icon.trim()?o.qy`
                <div style="margin-top: 24px;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                  >
                    ${(0,n.kg)("editor.text.icon_position",p,"Icon Position")}
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; font-weight: 400; margin-bottom: 12px;"
                  >
                    ${(0,n.kg)("editor.text.icon_position_desc",p,"Choose where to position the icon relative to the text.")}
                  </div>
                  <div
                    style="display: flex; gap: 8px; justify-content: flex-start; flex-wrap: wrap;"
                  >
                    <button
                      type="button"
                      style="padding: 8px 12px; border: 2px solid ${"before"===(g.icon_position||"before")?"var(--primary-color)":"var(--divider-color)"}; background: ${"before"===(g.icon_position||"before")?"var(--primary-color)":"transparent"}; color: ${"before"===(g.icon_position||"before")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                      @click=${()=>r({icon_position:"before"})}
                    >
                      <ha-icon
                        icon="mdi:format-align-left"
                        style="font-size: 16px; flex-shrink: 0;"
                      ></ha-icon>
                      <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                        >${(0,n.kg)("editor.text.before_text",p,"Before Text")}</span
                      >
                    </button>
                    <button
                      type="button"
                      style="padding: 8px 12px; border: 2px solid ${"after"===(g.icon_position||"before")?"var(--primary-color)":"var(--divider-color)"}; background: ${"after"===(g.icon_position||"before")?"var(--primary-color)":"transparent"}; color: ${"after"===(g.icon_position||"before")?"white":"var(--primary-text-color)"}; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 4px; flex: 1; min-width: 0; box-sizing: border-box;"
                      @click=${()=>r({icon_position:"after"})}
                    >
                      <ha-icon
                        icon="mdi:format-align-right"
                        style="font-size: 16px; flex-shrink: 0;"
                      ></ha-icon>
                      <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                        >${(0,n.kg)("editor.text.after_text",p,"After Text")}</span
                      >
                    </button>
                  </div>
                </div>
              `:""}
        </div>

        <!-- Color Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,n.kg)("editor.text.color_section.title",p,"Color Configuration")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,n.kg)("editor.text.color_section.desc",p,"Configure the text and icon colors for this module.")}
          </div>

          <!-- Text Color -->
          <div class="field-container" style="margin-bottom: 24px;">
            <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
              ${(0,n.kg)("editor.text.text_color",p,"Text Color")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px;"
            >
              ${(0,n.kg)("editor.text.text_color_desc",p,"Choose the color for the text content.")}
            </div>
            <ultra-color-picker
              .value=${g.color||""}
              .defaultValue=${"var(--primary-text-color)"}
              .hass=${t}
              @value-changed=${e=>r({color:e.detail.value})}
            ></ultra-color-picker>
          </div>

          <!-- Icon Color (only show if icon is selected) -->
          ${g.icon&&""!==g.icon.trim()?o.qy`
                <div>
                  <div class="field-container">
                    <div
                      class="field-title"
                      style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                    >
                      ${(0,n.kg)("editor.text.icon_color",p,"Icon Color")}
                    </div>
                    <div
                      class="field-description"
                      style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px;"
                    >
                      ${(0,n.kg)("editor.text.icon_color_desc",p,"Choose the color for the icon.")}
                    </div>
                    <ultra-color-picker
                      .value=${g.icon_color||""}
                      .defaultValue=${"var(--primary-color)"}
                      .hass=${t}
                      @value-changed=${e=>r({icon_color:e.detail.value})}
                    ></ultra-color-picker>
                  </div>
                </div>
              `:""}
        </div>

        <!-- Unified Template Section -->
        <div class="template-section" style="margin-top: 24px; margin-bottom: 24px;">
          <div class="template-header">
            <div class="switch-container">
              <div class="switch-label-row">
                <label class="switch-label"
                  >${(0,n.kg)("editor.text.unified_template_section.toggle",p,"Template Mode")}</label
                >
                <button
                  class="help-btn"
                  style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                  title="${(0,n.kg)("editor.text.template_cheatsheet",p,"Template Cheatsheet")}"
                  @click=${e=>{e.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{detail:{module:"text"},bubbles:!0,composed:!0}))}}
                >
                  <ha-icon
                    icon="mdi:help-circle"
                    style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"
                  ></ha-icon>
                </button>
              </div>
              ${this.renderUcForm(t,{unified_template_mode:g.unified_template_mode||!1},[this.booleanField("unified_template_mode")],e=>r({unified_template_mode:e.detail.value.unified_template_mode}))}
            </div>
            <div class="template-description">
              ${(0,n.kg)("editor.text.unified_template_section.desc",p,"Return JSON with content, color, and optional container_background_color. Plain Jinja strings are treated as dynamic text. HTML tags in the output are shown as text, so style it with color rather than markup.")}
            </div>
          </div>

          ${g.unified_template_mode?o.qy`
                <div
                  class="template-content"
                  style="margin-top: 12px;"
                  @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
                  @dragstart=${e=>e.stopPropagation()}
                  @insert-snippet=${e=>{var t,i,o;const a=e.currentTarget.querySelector("ultra-template-editor");null===(t=null==a?void 0:a.insertAtCursor)||void 0===t||t.call(a,null!==(o=null===(i=e.detail)||void 0===i?void 0:i.value)&&void 0!==o?o:"")}}
                >
                  <ultra-template-editor
                    .hass=${t}
                    .value=${g.unified_template||""}
                    .placeholder=${'{\n  "content": "{{ states(\'sensor.example\') }}",\n  "color": "var(--primary-text-color)"\n}'}
                    .minHeight=${120}
                    .maxHeight=${360}
                    @value-changed=${e=>{r({unified_template:e.detail.value})}}
                  ></ultra-template-editor>
                  ${this.renderTemplateKeyWarning(g.unified_template,a.A,p)}
                </div>
              `:""}
        </div>

        <!-- Text Alignment moved to Design tab per spec -->
      </div>
    `}}function d(e,t,i,o,a){return s.prototype.renderGeneralTabContent.call(e,t,i,o,a)}(0,r.t)(a.UltraTextModule,s)},708(e,t,i){i.r(t),i.d(t,{UltraVerticalModuleSettings:()=>l,renderVerticalGeneralTab:()=>s});var o=i(2618),a=i(4442),r=i(5514),n=i(6478);i(7921);class l extends a.UltraVerticalModule{renderGeneralTabContent(e,t,i,a){var r;const l=e,s=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- Layout Configuration Section -->
        ${this.renderSettingsSection((0,n.kg)("editor.vertical.layout.title",s,"Layout Configuration"),(0,n.kg)("editor.vertical.layout.desc",s,"Configure alignment and spacing for items in a single column."),[{title:(0,n.kg)("editor.vertical.alignment.horizontal",s,"Horizontal Alignment"),description:(0,n.kg)("editor.vertical.alignment.horizontal_desc",s,"Choose how items are aligned horizontally within the column."),hass:t,data:{horizontal_alignment:l.horizontal_alignment||"stretch"},schema:[this.selectField("horizontal_alignment",[{value:"left",label:(0,n.kg)("editor.common.left",s,"Left")},{value:"center",label:(0,n.kg)("editor.common.center",s,"Center")},{value:"right",label:(0,n.kg)("editor.common.right",s,"Right")},{value:"stretch",label:(0,n.kg)("editor.common.stretch",s,"Stretch")}])],onChange:e=>{e.detail.value.horizontal_alignment!==(l.horizontal_alignment||"stretch")&&(a(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}},{title:(0,n.kg)("editor.vertical.alignment.vertical",s,"Vertical Distribution"),description:(0,n.kg)("editor.vertical.alignment.vertical_desc",s,"How items are distributed along the vertical axis."),hass:t,data:{alignment:l.alignment||"center"},schema:[this.selectField("alignment",[{value:"top",label:(0,n.kg)("editor.common.top",s,"Top")},{value:"center",label:(0,n.kg)("editor.common.center",s,"Center")},{value:"bottom",label:(0,n.kg)("editor.common.bottom",s,"Bottom")},{value:"space-between",label:(0,n.kg)("editor.common.space_between",s,"Space Between")},{value:"space-around",label:(0,n.kg)("editor.common.space_around",s,"Space Around")}])],onChange:e=>{e.detail.value.alignment!==(l.alignment||"center")&&(a(e.detail.value),setTimeout(()=>{this.triggerPreviewUpdate()},50))}}])}

        <!-- Gap Between Items Field with Custom Slider -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,n.kg)("editor.vertical.gap.title",s,"Gap Configuration")}
          </div>

          ${(()=>{const e=l.gap_unit||"rem",i="px"===e,r=i?8:1.2,d=void 0!==l.gap&&null!==l.gap?Number(l.gap):r,c=i?-100:-10,g=i?100:10,p=i?1:.1,m="space-between"===l.alignment||"space-around"===l.alignment;return o.qy`
              <div
                style="margin-bottom: 8px; ${m?"opacity: 0.5; pointer-events: none;":""}"
              >
                ${this.renderGapWithUnitField((0,n.kg)("editor.vertical.gap.between_items",s,"Gap Between Items"),(0,n.kg)("editor.vertical.gap.desc",s,"Set the spacing between vertical items. Use negative values to overlap items. Note: Gap is disabled when using Space Between or Space Around distribution."),t,d,r,c,g,p,e,[{value:"px",label:"px"},{value:"rem",label:"rem"},{value:"em",label:"em"},{value:"%",label:"%"},{value:"vw",label:"vw"},{value:"vh",label:"vh"}],e=>a({gap:e}),(t,i)=>{const o=(l=i,(r=e)===(n=t)?l:((e,t)=>"px"===t||"%"===t||"vw"===t||"vh"===t?e:Math.round(e/16*10)/10)((s=l,"px"===(d=r)||"%"===d||"vw"===d||"vh"===d?s:16*s),n));var r,n,l,s,d;a({gap:o,gap_unit:t})})}
              </div>
            `})()}
        </div>
      </div>
    `}}function s(e,t,i,o,a){return l.prototype.renderGeneralTabContent.call(e,t,i,o,a)}(0,r.t)(a.UltraVerticalModule,l)},571(e,t,i){i.d(t,{s:()=>o});class o{static getEntityIcon(e,t){if("object"==typeof e&&null!==e&&!Array.isArray(e)){const i=e.entity_id;if("string"==typeof i&&i)e=i;else if(null==t?void 0:t.states)for(const[i,o]of Object.entries(t.states))if(o===e){e=i;break}if("string"!=typeof e)return this._getEnhancedIconForEntity("unknown",e)}if(!e||!(null==t?void 0:t.states[e]))return null;const i=t.states[e];return this._getHomeAssistantComputedIcon(e,i,t)||this._getEnhancedIconForEntity(e,i)}static _getHomeAssistantComputedIcon(e,t,i){var o,a,r,n,l;if(null===(o=t.attributes)||void 0===o?void 0:o.icon)return t.attributes.icon;try{if(null===(r=null===(a=window.customCards)||void 0===a?void 0:a.helpers)||void 0===r?void 0:r.stateIcon){const e=window.customCards.helpers.stateIcon(t);if(e)return e}const o=[window.stateIcon,window.computeStateIcon,window.computeEntityIcon,null===(n=window.hassIcons)||void 0===n?void 0:n.stateIcon,null===(l=window.hassIcons)||void 0===l?void 0:l.computeStateIcon,i.stateIcon,i.computeStateIcon,i.computeEntityIcon];for(const e of o)if("function"==typeof e)try{const i=e(t);if(i)return i}catch(e){}if(i.entities&&i.entities[e]){const t=i.entities[e];if(t.icon)return t.icon}if(e.startsWith("weather.")){const e={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:weather-exceptional"},i=t.state;if(e[i])return e[i]}}catch(e){console.debug("Failed to compute HA icon, falling back to enhanced detection:",e)}return null}static _getEnhancedIconForEntity(e,t){var i,o,a;const r=e.split(".")[0],n=e.split(".")[1]||"",l=null===(i=t.attributes)||void 0===i?void 0:i.device_class,s=null===(o=t.attributes)||void 0===o?void 0:o.unit_of_measurement,d=(null===(a=t.attributes)||void 0===a?void 0:a.friendly_name)||"",c=t.state,g=n.toLowerCase(),p=d.toLowerCase();return this._isBatteryRelated(g,p,l,s)?this._isChargingRelated(g,p)?this._getChargingBatteryIcon(c,s):this._getBatteryIcon(c,s):this._isTemperatureRelated(g,p,l,s)?"mdi:thermometer":this._isHumidityRelated(g,p,l,s)?"mdi:water-percent":this._isPowerRelated(g,p,l,s)?"mdi:flash":this._isSignalRelated(g,p)?"mdi:wifi":"binary_sensor"===r&&this._isDoorWindowRelated(g,p)?"on"===c?"mdi:door-open":"mdi:door-closed":"binary_sensor"===r&&this._isMotionRelated(g,p)?"on"===c?"mdi:motion-sensor":"mdi:motion-sensor-off":this._isIlluminanceRelated(g,p,l,s)?"mdi:brightness-5":this._isPressureRelated(g,p,l,s)?"mdi:gauge":this._getDefaultIconForDomain(r,l,c)}static _isBatteryRelated(e,t,i,o){return"battery"===i||e.includes("battery")||e.includes("charge")||e.includes("power_level")||t.includes("battery")||t.includes("charge")||"%"===o}static _isChargingRelated(e,t){return["charging","charge_target","charging_target","charge_limit"].some(i=>e.includes(i)||t.toLowerCase().includes(i))}static _getBatteryIcon(e,t){const i=parseFloat(e);return isNaN(i)?"mdi:battery-unknown":i>=95?"mdi:battery":i>=85?"mdi:battery-90":i>=75?"mdi:battery-80":i>=65?"mdi:battery-70":i>=55?"mdi:battery-60":i>=45?"mdi:battery-50":i>=35?"mdi:battery-40":i>=25?"mdi:battery-30":i>=15?"mdi:battery-20":i>=5?"mdi:battery-10":"mdi:battery-alert"}static _getChargingBatteryIcon(e,t){const i=parseFloat(e);return isNaN(i)?"mdi:battery-charging":i>=95?"mdi:battery-charging-100":i>=85?"mdi:battery-charging-90":i>=75?"mdi:battery-charging-80":i>=65?"mdi:battery-charging-70":i>=55?"mdi:battery-charging-60":i>=45?"mdi:battery-charging-50":i>=35?"mdi:battery-charging-40":i>=25?"mdi:battery-charging-30":i>=15?"mdi:battery-charging-20":i>=5?"mdi:battery-charging-10":"mdi:battery-charging-outline"}static _isTemperatureRelated(e,t,i,o){return"temperature"===i||e.includes("temp")||t.includes("temperature")||"°C"===o||"°F"===o||"K"===o}static _isHumidityRelated(e,t,i,o){return"humidity"===i||e.includes("humidity")||t.includes("humidity")||"%"===o&&(e.includes("humid")||t.includes("humid"))}static _isPowerRelated(e,t,i,o){return"power"===i||"energy"===i||e.includes("power")||e.includes("energy")||e.includes("consumption")||"W"===o||"kW"===o||"kWh"===o||"Wh"===o}static _isSignalRelated(e,t){return["signal","rssi","wifi","network"].some(i=>e.includes(i)||t.toLowerCase().includes(i))}static _isDoorWindowRelated(e,t){return["door","window","gate"].some(i=>e.includes(i)||t.toLowerCase().includes(i))}static _isMotionRelated(e,t){return["motion","movement","occupancy","presence"].some(i=>e.includes(i)||t.toLowerCase().includes(i))}static _isIlluminanceRelated(e,t,i,o){return"illuminance"===i||e.includes("illuminance")||e.includes("brightness")||e.includes("lux")||"lx"===o||"lux"===o}static _isPressureRelated(e,t,i,o){return"pressure"===i||e.includes("pressure")||t.includes("pressure")||"hPa"===o||"mbar"===o||"Pa"===o||"psi"===o}static _getDefaultIconForDomain(e,t,i){return{alarm_control_panel:"mdi:shield",automation:"mdi:robot",binary_sensor:"mdi:radiobox-blank",button:"mdi:button-pointer",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",cover:"mdi:window-shutter",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",humidifier:"mdi:air-humidifier",input_boolean:"mdi:toggle-switch",input_button:"mdi:button-pointer",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:form-textbox",light:"mdi:lightbulb",lock:"mdi:lock",media_player:"mdi:speaker",number:"mdi:ray-vertex",person:"mdi:account",plant:"mdi:flower",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:script-text",select:"mdi:format-list-bulleted",sensor:"mdi:eye",siren:"mdi:bullhorn",sun:"mdi:white-balance-sunny",switch:"mdi:toggle-switch",timer:"mdi:timer",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:"mdi:weather-partly-cloudy",zone:"mdi:map-marker"}[e]||"mdi:eye"}}},9179(e,t,i){i.d(t,{h:()=>s});var o=i(2618),a=i(6478);const r=new class{constructor(){this._users=null,this._loading=!1,this._lastHassRef=null,this._listeners=new Set,this._fallbackOnly=!1}subscribe(e){return this._listeners.add(e),()=>this._listeners.delete(e)}_notify(){this._listeners.forEach(e=>{try{e()}catch(e){}}),"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("uc-ha-users-loaded",{bubbles:!0,composed:!0}))}_fromHassUser(e){const t=null==e?void 0:e.user;return(null==t?void 0:t.id)?[{id:String(t.id),name:String(t.name||t.id),is_active:!0,is_owner:!!t.is_owner}]:[]}getUsers(e){var t,i,o;if(!e)return[];if(this._lastHassRef!==e&&this._users&&(null===(i=null===(t=this._lastHassRef)||void 0===t?void 0:t.user)||void 0===i?void 0:i.id)!==(null===(o=null==e?void 0:e.user)||void 0===o?void 0:o.id)&&(this._users=null,this._fallbackOnly=!1),this._lastHassRef=e,this._users)return this._users;const a=this._fromHassUser(e);return this._loading||this._fetch(e,a),a}isFallbackOnly(){return this._fallbackOnly}async _fetch(e,t){this._loading=!0;try{const i=e.callWS;if("function"!=typeof i)return this._users=t,this._fallbackOnly=!0,void this._notify();const o=await i({type:"config/auth/list"}),a=(Array.isArray(o)?o:Array.isArray(null==o?void 0:o.users)?o.users:[]).map(e=>{var t;return{id:String(null!==(t=e.id)&&void 0!==t?t:""),name:String(e.name||e.username||e.id||""),is_active:!1!==e.is_active,is_owner:!!e.is_owner}}).filter(e=>!!e.id&&!1!==e.is_active);a.length>0?(this._users=a,this._fallbackOnly=!1):(this._users=t,this._fallbackOnly=!0),this._notify()}catch(e){this._users=t,this._fallbackOnly=!0,this._notify()}finally{this._loading=!1}}clearCache(){this._users=null,this._loading=!1,this._lastHassRef=null,this._fallbackOnly=!1}};var n=i(230);function l(e,t){if("everyone"!==e&&0!==t.length)return{mode:"hide"===e?"hide":"show",users:[...t]}}function s(e,t,i){var s,d;const c=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",g=function(e){return(null==e?void 0:e.users)&&0!==e.users.length?"hide"===e.mode?"hide":"show":"everyone"}(e),p=new Set((null==e?void 0:e.users)||[]),m=r.getUsers(t),u=r.isFallbackOnly(),_=null===(d=null==t?void 0:t.user)||void 0===d?void 0:d.id;t&&n.S.setHass(t);const v="everyone"!==g&&!!t&&!n.S.evaluateUserVisibility(e||void 0),h=e=>{const t=e.trim();if(!t)return;const o=new Set(p);o.add(t),i(l("everyone"===g?"show":g,[...o]))};return o.qy`
    <div
      class="settings-section uc-user-visibility-section"
      style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 16px; border-left: 3px solid var(--primary-color);"
    >
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <ha-icon icon="mdi:account-eye" style="color: var(--primary-color);"></ha-icon>
        <span style="font-size: 16px; font-weight: 700; color: var(--primary-text-color);">
          ${(0,a.kg)("editor.logic.user_visibility.title",c,"Visible to Users")}
        </span>
      </div>
      <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
        ${(0,a.kg)("editor.logic.user_visibility.desc",c,"Show or hide this element for specific Home Assistant users. Same idea as Lovelace card Visibility → User.")}
      </div>

      <div class="field-container uc-ultra-field-wrap" style="margin-bottom: 12px;">
        <ultra-segmented
          .label=${(0,a.kg)("editor.logic.user_visibility.mode",c,"Who can see this")}
          .description=${""}
          .value=${g}
          .options=${[{value:"everyone",label:(0,a.kg)("editor.logic.user_visibility.everyone",c,"Everyone"),icon:"mdi:account-group"},{value:"show",label:(0,a.kg)("editor.logic.user_visibility.show_only",c,"Show only for"),icon:"mdi:account-check"},{value:"hide",label:(0,a.kg)("editor.logic.user_visibility.hide_for",c,"Hide for"),icon:"mdi:account-off"}]}
          .columns=${3}
          @value-changed=${t=>{var o;(t=>{var o;if("everyone"===t)return void i(void 0);const a=(null===(o=null==e?void 0:e.users)||void 0===o?void 0:o.length)?[...e.users]:_?[_]:[];i(l(t,a))})((null===(o=t.detail)||void 0===o?void 0:o.value)||"everyone")}}
        ></ultra-segmented>
      </div>

      ${"everyone"!==g?o.qy`
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${0===m.length?o.qy`
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); font-style: italic;"
                    >
                      ${(0,a.kg)("editor.logic.user_visibility.no_users",c,"No users available yet. Enter a user ID below.")}
                    </div>
                  `:m.map(e=>o.qy`
                      <label
                        style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: var(--card-background-color); border-radius: 6px; cursor: pointer; border: 1px solid ${p.has(e.id)?"var(--primary-color)":"var(--divider-color)"};"
                      >
                        <ha-checkbox
                          .checked=${p.has(e.id)}
                          @change=${()=>(e=>{const t=new Set(p);t.has(e)?t.delete(e):t.add(e),i(l("everyone"===g?"show":g,[...t]))})(e.id)}
                        ></ha-checkbox>
                        <ha-icon
                          icon="mdi:account"
                          style="color: ${p.has(e.id)?"var(--primary-color)":"var(--secondary-text-color)"}; --mdc-icon-size: 20px;"
                        ></ha-icon>
                        <div style="flex: 1; min-width: 0;">
                          <div style="font-weight: 500; font-size: 13px;">
                            ${e.name}
                            ${e.id===_?o.qy`<span
                                  style="margin-left: 6px; font-size: 11px; color: var(--primary-color); font-weight: 600;"
                                  >${(0,a.kg)("editor.logic.user_visibility.you",c,"(you)")}</span
                                >`:o.s6}
                          </div>
                          <div
                            style="font-size: 11px; color: var(--secondary-text-color); overflow: hidden; text-overflow: ellipsis;"
                          >
                            ${e.id}
                          </div>
                        </div>
                      </label>
                    `)}

              ${u?o.qy`
                    <div style="margin-top: 4px;" class="uc-user-vis-manual-wrap">
                      <div
                        style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 6px;"
                      >
                        ${(0,a.kg)("editor.logic.user_visibility.manual_id_desc",c,"Could not load the full user list (admin permission may be required). Add other users by ID:")}
                      </div>
                      <div style="display: flex; gap: 8px;">
                        <ha-textfield
                          class="uc-user-vis-manual-input"
                          style="flex: 1;"
                          .label=${(0,a.kg)("editor.logic.user_visibility.manual_id",c,"User ID")}
                          .placeholder=${"581fca7f…"}
                          @keydown=${e=>{if("Enter"===e.key){const t=e.target;h(t.value||""),t.value=""}}}
                        ></ha-textfield>
                        <button
                          type="button"
                          style="padding: 0 14px; border: 1px solid var(--primary-color); background: none; color: var(--primary-color); border-radius: 6px; cursor: pointer;"
                          @click=${e=>{const t=e.currentTarget.closest(".uc-user-vis-manual-wrap"),i=null==t?void 0:t.querySelector(".uc-user-vis-manual-input");h((null==i?void 0:i.value)||""),i&&(i.value="")}}
                        >
                          ${(0,a.kg)("editor.logic.user_visibility.add",c,"Add")}
                        </button>
                      </div>
                    </div>
                  `:o.s6}

              ${v?o.qy`
                    <div
                      style="margin-top: 8px; padding: 8px 12px; background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.15); border-radius: 4px; font-size: 12px; color: var(--warning-color, #ff9800);"
                    >
                      <ha-icon
                        icon="mdi:alert-outline"
                        style="--mdc-icon-size: 14px; vertical-align: middle; margin-right: 4px;"
                      ></ha-icon>
                      ${(0,a.kg)("editor.logic.user_visibility.self_hidden_warning",c,"You will not see this on the live dashboard while signed in as this user. Card Settings still keep the editor preview visible so you can keep editing.")}
                    </div>
                  `:o.s6}
            </div>
          `:o.s6}
    </div>
  `}i(3909)}};