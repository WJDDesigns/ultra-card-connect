/*! For license information please see uc-m-camera.7973cf92.js.LICENSE.txt */
export const __webpack_esm_ids__=[4576];export const __webpack_esm_modules__={3072(e,t,i){var o=i(2618),n=i(4791),r=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};class a extends o.WF{constructor(){super(...arguments),this.value="",this.type="text",this.placeholder="",this.label="",this.helper="",this.multiline=!1,this.rows=3,this.disabled=!1}focus(e){var t;null===(t=this._input)||void 0===t||t.focus(e)}_onInput(e){this.value=e.target.value}render(){var e,t,i,n,r,a,s;const l=this.multiline?o.qy`<textarea
          class="uc-tf-input"
          .value=${null!==(e=this.value)&&void 0!==e?e:""}
          rows=${this.rows}
          placeholder=${this.placeholder||o.s6}
          aria-label=${this.label||this.placeholder||o.s6}
          ?disabled=${this.disabled}
          @input=${this._onInput}
        ></textarea>`:o.qy`<input
          class="uc-tf-input"
          .value=${null!==(t=this.value)&&void 0!==t?t:""}
          type=${this.type||"text"}
          placeholder=${this.placeholder||o.s6}
          min=${null!==(i=this.min)&&void 0!==i?i:o.s6}
          max=${null!==(n=this.max)&&void 0!==n?n:o.s6}
          step=${null!==(r=this.step)&&void 0!==r?r:o.s6}
          inputmode=${null!==(a=this.inputmode)&&void 0!==a?a:o.s6}
          maxlength=${null!==(s=this.maxlength)&&void 0!==s?s:o.s6}
          aria-label=${this.label||this.placeholder||o.s6}
          ?disabled=${this.disabled}
          @input=${this._onInput}
        />`;return o.qy`
      ${this.label?o.qy`<label class="uc-tf-label">${this.label}</label>`:o.s6}
      <div class="uc-tf-wrap ${this.multiline?"multiline":""}">
        <slot name="leadingIcon"></slot>
        ${l}
        <slot name="suffix"></slot>
      </div>
      ${this.helper?o.qy`<div class="uc-tf-helper">${this.helper}</div>`:o.s6}
    `}}a.styles=o.AH`
    :host {
      display: inline-block;
      box-sizing: border-box;
      min-width: 0;
    }
    .uc-tf-label {
      display: block;
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 4px;
    }
    .uc-tf-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      box-sizing: border-box;
      width: 100%;
      min-height: 48px;
      padding: 0 12px;
      border-radius: var(--ha-border-radius-sm, 4px) var(--ha-border-radius-sm, 4px) 0 0;
      background: var(
        --input-fill-color,
        var(--secondary-background-color, rgba(127, 127, 127, 0.08))
      );
      border-bottom: 1px solid
        var(--input-idle-line-color, var(--divider-color, rgba(127, 127, 127, 0.4)));
      transition: border-color 0.15s ease;
    }
    .uc-tf-wrap.multiline {
      align-items: flex-start;
      padding: 10px 12px;
    }
    .uc-tf-wrap:focus-within {
      border-bottom: 2px solid var(--primary-color);
    }
    :host([disabled]) .uc-tf-wrap {
      opacity: 0.5;
    }
    .uc-tf-input {
      flex: 1 1 auto;
      min-width: 0;
      width: 100%;
      border: none;
      outline: none;
      background: transparent;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 16px;
      line-height: 1.4;
      padding: 12px 0;
      box-sizing: border-box;
    }
    .uc-tf-input:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }
    textarea.uc-tf-input {
      padding: 0;
      resize: vertical;
      font-family: var(--code-font-family, monospace);
      font-size: 14px;
    }
    .uc-tf-input::placeholder {
      color: var(--secondary-text-color);
      opacity: 0.7;
    }
    ::slotted([slot='leadingIcon']) {
      color: var(--secondary-text-color);
      --mdc-icon-size: 20px;
      flex: 0 0 auto;
    }
    ::slotted([slot='suffix']) {
      color: var(--secondary-text-color);
      flex: 0 0 auto;
    }
    .uc-tf-helper {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin: 4px 12px 0;
    }
  `,r([(0,n.MZ)()],a.prototype,"value",void 0),r([(0,n.MZ)()],a.prototype,"type",void 0),r([(0,n.MZ)()],a.prototype,"placeholder",void 0),r([(0,n.MZ)()],a.prototype,"label",void 0),r([(0,n.MZ)()],a.prototype,"helper",void 0),r([(0,n.MZ)()],a.prototype,"min",void 0),r([(0,n.MZ)()],a.prototype,"max",void 0),r([(0,n.MZ)()],a.prototype,"step",void 0),r([(0,n.MZ)()],a.prototype,"inputmode",void 0),r([(0,n.MZ)({type:Number})],a.prototype,"maxlength",void 0),r([(0,n.MZ)({type:Boolean})],a.prototype,"multiline",void 0),r([(0,n.MZ)({type:Number})],a.prototype,"rows",void 0),r([(0,n.MZ)({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0),r([(0,n.P)(".uc-tf-input")],a.prototype,"_input",void 0),customElements.get("uc-textfield")||customElements.define("uc-textfield",a)},3909(e,t,i){var o=i(2618),n=i(4791),r=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let a=class extends o.WF{constructor(){super(...arguments),this.value="",this.options=[],this.label="",this.description="",this.disabled=!1}_select(e){this.disabled||e===this.value||this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e},bubbles:!0,composed:!0}))}_resolveColumns(){var e,t;if(this.columns&&this.columns>0)return this.columns;const i=null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0;return 4===i?2:6===i?3:8===i?4:9===i?3:void 0}render(){const e=Array.isArray(this.options)?this.options:[],t=this._resolveColumns(),i=t?`--uc-seg-cols: ${t};`:"";return o.qy`
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
    `}};a.styles=o.AH`
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
      color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color));
    }
    .uc-seg-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .uc-seg-btn ha-icon {
      flex-shrink: 0;
      --mdc-icon-size: 18px;
    }
  `,r([(0,n.MZ)({type:String})],a.prototype,"value",void 0),r([(0,n.MZ)({type:Array})],a.prototype,"options",void 0),r([(0,n.MZ)({type:String})],a.prototype,"label",void 0),r([(0,n.MZ)({type:String})],a.prototype,"description",void 0),r([(0,n.MZ)({type:Boolean})],a.prototype,"disabled",void 0),r([(0,n.MZ)({type:Number})],a.prototype,"columns",void 0),a=r([(0,n.EM)("ultra-segmented")],a)},7627(e,t,i){i.d(t,{UltraCameraModule:()=>L});var o=i(2618),n=i(1299),r=i(7610),a=i(3496),s=i(3307),l=i(8465),c=i(5147),d=i(8938),p=i(9957),m=i(935),u=/*#__PURE__*/i(1001),h=i(5320),g=/*#__PURE__*/i(9327),v=/*#__PURE__*/i(5121),f=i(5155),b=/*#__PURE__*/i(3361),y=i(64);const _=new Set(["on","open","opening","detected","home","playing","true"]),x=e=>e.split(".")[0]||"",w=(e,t)=>{var i;const o=null===(i=null==e?void 0:e.attributes)||void 0===i?void 0:i[t];return"string"==typeof o&&o?o:void 0};function k(e){return"boolean"==typeof e.confirm?e.confirm:"lock"===x(e.entity)}function $(e,t){return!!t&&("lock"===x(e)?"unlocked"===t.state||"open"===t.state||"opening"===t.state:_.has(t.state))}function S(e,t){var i,o;if(e.icon)return e.icon;const n=null==t?void 0:t.state;switch(x(e.entity)){case"lock":return"jammed"===n?"mdi:lock-alert":"locking"===n||"unlocking"===n?"mdi:lock-clock":"locked"===n?"mdi:lock":"mdi:lock-open-variant";case"cover":return"garage"===(null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.device_class)?"closed"===n?"mdi:garage":"mdi:garage-open":"gate"===(null===(o=null==t?void 0:t.attributes)||void 0===o?void 0:o.device_class)?"closed"===n?"mdi:gate":"mdi:gate-open":"closed"===n?"mdi:window-shutter":"mdi:window-shutter-open";case"light":return"mdi:lightbulb";case"siren":return"mdi:bullhorn";case"button":case"input_button":return w(t,"icon")||"mdi:gesture-tap-button";default:return w(t,"icon")||"mdi:gesture-tap"}}function T(e,t){return e.label||w(t,"friendly_name")||e.entity}var C=i(9179),E=i(6003),z=i(3580),F=i(3297);const A=["entity","visible","overlay_text","overlay_color"],M=16/9;class L extends s.m{constructor(){super(...arguments),this._runtime=new Map,this._triggerMemory=new Map,this._fullscreenCloseTimers=new Map,this._playerRefs=new Map,this.metadata={type:"camera",title:"Camera",description:"Display live camera feeds with comprehensive control options",author:"WJD Designs",version:"1.0.0",icon:"mdi:camera",category:"content",tags:["camera","live","feed","security","surveillance"]}}_observeTrigger(e,t,i){const o=`${e}|${i}`,n=function(e,t){if(!t||!(null==e?void 0:e.states))return;const i=e.states[t];return i?"event"===x(t)?i.state:`${i.state}@${i.last_changed||""}`:void 0}(t,i),r=this._triggerMemory.get(o);if(!r)return this._triggerMemory.set(o,{key:n}),{firstSight:!0,changed:!1};const a=r.key!==n,s=r.key;return a&&(r.key=n,r.seenAt=Date.now()),Object.assign(Object.assign({firstSight:!1,changed:a},void 0!==s?{previousKey:s}:{}),void 0!==r.seenAt?{seenAt:r.seenAt}:{})}createDefault(e,t){return{id:e||this.generateId("camera"),type:"camera",entity:"",camera_name:"",show_name:!0,name_position:"top-left",tap_opens_fullscreen:!1,aspect_ratio_linked:!0,aspect_ratio_value:1.778,image_fit:"cover",crop_left:0,crop_top:0,crop_right:0,crop_bottom:0,show_controls:!1,show_audio_button:!0,view_mode:"auto",refresh_interval:10,audio_enabled:!1,live_trigger_entity:"",live_trigger_hold:60,action_buttons:[],action_buttons_position:"bottom-center",image_quality:"high",rotation:0,show_unavailable:!0,fallback_image:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},unified_template_mode:!1,unified_template:"",design:{width:"100%",max_width:"500px",border_radius:"20px"},display_mode:"always",display_conditions:[]}}renderGeneralTab(e,t,i,n){var r,a,s;const c=e,d=(null===(r=t.locale)||void 0===r?void 0:r.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="camera-module-settings">
        <!-- Camera Configuration Section -->
        ${this.renderSettingsSection((0,m.kg)("editor.camera.config.title",d,"Camera Configuration"),(0,m.kg)("editor.camera.config.desc",d,"Configure the camera entity and display settings."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",c.entity||"",e=>{n({entity:e}),this.triggerPreviewUpdate()},["camera"],(0,m.kg)("editor.camera.entity",d,"Camera Entity"))}
        </div>

        <!-- Camera Name Settings with toggle in header -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,m.kg)("editor.camera.show_name",d,"Show Camera Name"),"",t,{show_name:!1!==c.show_name},[this.booleanField("show_name")],e=>{n({show_name:e.detail.value.show_name}),this.triggerPreviewUpdate()})}
          ${!1!==c.show_name?o.qy`
                  <div class="field-group" style="margin-bottom: 16px;">
                    ${this.renderFieldSection((0,m.kg)("editor.camera.name",d,"Camera Name"),(0,m.kg)("editor.camera.name_desc",d,"Custom name for the camera. Leave empty to use entity name."),t,{camera_name:c.camera_name||""},[this.textField("camera_name")],e=>n(e.detail.value))}
                  </div>

                  <div class="field-group" style="margin-bottom: 16px;">
                    ${this.renderFieldSection((0,m.kg)("editor.camera.name_position.title",d,"Name Position"),(0,m.kg)("editor.camera.name_position.desc",d,"Choose where the camera name appears as an overlay on the camera image."),t,{name_position:c.name_position||"top-left"},[this.selectField("name_position",[{value:"top-left",label:(0,m.kg)("editor.camera.name_position.options.top_left",d,"Top Left")},{value:"top-right",label:(0,m.kg)("editor.camera.name_position.options.top_right",d,"Top Right")},{value:"center",label:(0,m.kg)("editor.camera.name_position.options.center",d,"Center")},{value:"bottom-left",label:(0,m.kg)("editor.camera.name_position.options.bottom_left",d,"Bottom Left")},{value:"bottom-right",label:(0,m.kg)("editor.camera.name_position.options.bottom_right",d,"Bottom Right")},{value:"top-middle",label:(0,m.kg)("editor.camera.name_position.options.top_middle",d,"Top Middle")},{value:"bottom-middle",label:(0,m.kg)("editor.camera.name_position.options.bottom_middle",d,"Bottom Middle")}])],e=>{e.detail.value.name_position!==(c.name_position||"top-left")&&n(e.detail.value)})}
                  </div>
                `:o.qy`
                  <div
                    style="text-align: center; padding: 20px; color: var(--secondary-text-color); font-style: italic;"
                  >
                    ${(0,m.kg)("editor.camera.show_name_toggle.enable_toggle_desc",d,"Enable the toggle above to configure camera name display")}
                  </div>
                `}
        </div>

        <!-- Tap to Open Fullscreen Settings -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          ${this.renderFieldSection((0,m.kg)("editor.camera.tap_opens_fullscreen",d,"Tap Camera Opens Fullscreen"),"",t,{tap_opens_fullscreen:!0===c.tap_opens_fullscreen},[this.booleanField("tap_opens_fullscreen")],e=>{n({tap_opens_fullscreen:e.detail.value.tap_opens_fullscreen}),this.triggerPreviewUpdate()})}

          <div
            class="field-description"
            style="margin-bottom: 16px; color: var(--secondary-text-color); font-style: italic; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-6, 6px); border-left: 4px solid var(--primary-color);"
          >
            <ha-icon icon="mdi:information" style="font-size: 14px; margin-right: 6px;"></ha-icon>
            ${(0,m.kg)("editor.camera.tap_opens_fullscreen_desc",d,"When enabled, tapping anywhere on the camera will open it in fullscreen mode.")}
          </div>

          <!-- Open fullscreen by itself when an entity fires (doorbell ring) -->
          ${this.renderFieldSection((0,m.kg)("editor.camera.fullscreen_trigger.title",d,"Open Fullscreen When"),(0,m.kg)("editor.camera.fullscreen_trigger.desc",d,"Open this camera in fullscreen by itself when this entity turns on or fires, such as a doorbell ring. It opens on dashboards that are showing this card."),t,{fullscreen_trigger_entity:c.fullscreen_trigger_entity||""},[this.entityField("fullscreen_trigger_entity",["event","binary_sensor","input_boolean","switch"])],e=>{n({fullscreen_trigger_entity:e.detail.value.fullscreen_trigger_entity||""})})}
          ${c.fullscreen_trigger_entity?o.qy`
                  <div style="margin: 16px 0;">
                    ${this.renderFieldSection((0,m.kg)("editor.camera.fullscreen_trigger_close.title",d,"Close After (seconds)"),(0,m.kg)("editor.camera.fullscreen_trigger_close.desc",d,"Close the fullscreen view by itself after this many seconds. Set 0 to keep it open until closed."),t,{fullscreen_trigger_close:null!==(a=c.fullscreen_trigger_close)&&void 0!==a?a:60},[l.Q.createSchemaItem("fullscreen_trigger_close",{number:{min:0,max:3600,mode:"box"}})],e=>n({fullscreen_trigger_close:e.detail.value.fullscreen_trigger_close}))}
                  </div>
                  ${(0,C.h)(c.fullscreen_trigger_users,t,e=>n({fullscreen_trigger_users:e}),{title:(0,m.kg)("editor.camera.fullscreen_trigger_users.title",d,"Open Fullscreen For"),desc:(0,m.kg)("editor.camera.fullscreen_trigger_users.desc",d,"Choose which Home Assistant users get the fullscreen view. Everyone else still sees the camera as normal."),mode:(0,m.kg)("editor.camera.fullscreen_trigger_users.mode",d,"Who gets fullscreen"),selfWarning:(0,m.kg)("editor.camera.fullscreen_trigger_users.self_warning",d,"It will not open fullscreen for you while signed in as this user.")})}
                  ${(0,E.k)(c.fullscreen_trigger_skip_devices||[],e=>n({fullscreen_trigger_skip_devices:e}),d,{title:(0,m.kg)("editor.camera.fullscreen_trigger_devices.title",d,"Don't Open Fullscreen On"),desc:(0,m.kg)("editor.camera.fullscreen_trigger_devices.desc",d,"Skip the fullscreen view on these screen sizes, for example to open it on a wall tablet but not on phones."),summary:(0,m.kg)("editor.camera.fullscreen_trigger_devices.summary",d,"Fullscreen will not open on:")})}
                `:""}
        </div>

        <!-- Action Buttons -->
        ${this._renderActionButtonsEditor(c,t,n)}

        <!-- Display Settings Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-top: 32px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,m.kg)("editor.camera.display.title",d,"Display Settings")}
          </div>

          <!-- Stream Mode Selector -->
          <div style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,m.kg)("editor.camera.view_mode.title",d,"Stream Mode"),(0,m.kg)("editor.camera.view_mode.desc",d,"Auto: still images refreshed every 10 seconds, exactly like Home Assistant picture cards. Live: a continuous stream. Snapshot: still images on your own refresh interval."),t,{view_mode:c.view_mode||"auto"},[this.selectField("view_mode",[{value:"auto",label:(0,m.kg)("editor.camera.view_mode.options.auto",d,"Auto (HA Default)")},{value:"live",label:(0,m.kg)("editor.camera.view_mode.options.live",d,"Always Live")},{value:"snapshot",label:(0,m.kg)("editor.camera.view_mode.options.snapshot",d,"Snapshot Only")}])],e=>{e.detail.value.view_mode!==(c.view_mode||"auto")&&n(e.detail.value)})}
          </div>

          <!-- Go live while an entity is on (doorbell ring, motion) -->
          ${"live"!==(c.view_mode||"auto")?o.qy`
                  <div style="margin-bottom: 16px;">
                    ${this.renderFieldSection((0,m.kg)("editor.camera.live_trigger.title",d,"Go Live When"),(0,m.kg)("editor.camera.live_trigger.desc",d,"Switch to a live stream while this entity is on, such as a doorbell ring, motion sensor or toggle helper. Event entities go live each time they fire."),t,{live_trigger_entity:c.live_trigger_entity||""},[this.entityField("live_trigger_entity",["event","binary_sensor","input_boolean","switch"])],e=>{n({live_trigger_entity:e.detail.value.live_trigger_entity||""}),this.triggerPreviewUpdate()})}
                  </div>
                  ${c.live_trigger_entity?o.qy`
                          <div style="margin-bottom: 16px;">
                            ${this.renderFieldSection((0,m.kg)("editor.camera.live_trigger_hold.title",d,"Stay Live For (seconds)"),(0,m.kg)("editor.camera.live_trigger_hold.desc",d,"How long the stream stays live after the entity turns off or the event fires. Range: 0-3600 seconds."),t,{live_trigger_hold:null!==(s=c.live_trigger_hold)&&void 0!==s?s:60},[l.Q.createSchemaItem("live_trigger_hold",{number:{min:0,max:3600,mode:"box"}})],e=>n({live_trigger_hold:e.detail.value.live_trigger_hold}))}
                          </div>
                        `:""}
                `:""}

          <!-- Live stream options -->
          ${"live"===(c.view_mode||"auto")?o.qy`
                  <div style="margin-bottom: 16px;">
                    ${this.renderFieldSection((0,m.kg)("editor.camera.audio_enabled.title",d,"Enable Audio"),(0,m.kg)("editor.camera.audio_enabled.desc",d,"Start the stream unmuted where the browser allows it. Browsers block unmuted autoplay until you interact with the page, so the stream may start muted until you use the sound button."),t,{audio_enabled:!0===c.audio_enabled},[this.booleanField("audio_enabled")],e=>{n(e.detail.value),this.triggerPreviewUpdate()})}
                  </div>

                  <div style="margin-bottom: 16px;">
                    ${this.renderFieldSection((0,m.kg)("editor.camera.show_audio_button.title",d,"Sound Button"),(0,m.kg)("editor.camera.show_audio_button.desc",d,"Show a mute/unmute button over the stream."),t,{show_audio_button:!1!==c.show_audio_button},[this.booleanField("show_audio_button")],e=>{n(e.detail.value),this.triggerPreviewUpdate()})}
                  </div>

                  <div style="margin-bottom: 16px;">
                    ${this.renderFieldSection((0,m.kg)("editor.camera.show_mode_badge.title",d,"Live / Snapshot Badge"),(0,m.kg)("editor.camera.show_mode_badge.desc",d,"Show a small badge in the top corner saying whether the camera is streaming live or showing still snapshots."),t,{show_mode_badge:!0===c.show_mode_badge},[this.booleanField("show_mode_badge")],e=>{n(e.detail.value),this.triggerPreviewUpdate()})}
                  </div>

                  <div style="margin-bottom: 16px;">
                    ${this.renderFieldSection((0,m.kg)("editor.camera.show_controls.title",d,"Player Controls"),(0,m.kg)("editor.camera.show_controls.desc",d,"Show the browser's native video controls on the stream."),t,{show_controls:!0===c.show_controls},[this.booleanField("show_controls")],e=>{n(e.detail.value),this.triggerPreviewUpdate()})}
                  </div>
                `:""}

          <!-- Image Fit -->
          <div style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,m.kg)("editor.camera.image_fit.title",d,"Image Fit"),(0,m.kg)("editor.camera.image_fit.desc",d,"How the feed fills the frame. Cover crops to fill, Contain shows the whole frame with bars, Fill stretches to the frame."),t,{image_fit:c.image_fit||"cover"},[this.selectField("image_fit",[{value:"cover",label:(0,m.kg)("editor.camera.image_fit.options.cover",d,"Cover")},{value:"contain",label:(0,m.kg)("editor.camera.image_fit.options.contain",d,"Contain")},{value:"fill",label:(0,m.kg)("editor.camera.image_fit.options.fill",d,"Fill")}])],e=>{e.detail.value.image_fit!==(c.image_fit||"cover")&&(n(e.detail.value),this.triggerPreviewUpdate())})}
          </div>

          <!-- Refresh Interval (only for Snapshot mode) -->
          ${"snapshot"===(c.view_mode||"auto")?o.qy`
                  <div style="margin-top: 24px;">
                    ${this.renderConditionalFieldsGroup((0,m.kg)("editor.camera.snapshot_refresh.section_title",d,"Snapshot Refresh Settings"),o.qy`
                        ${l.Q.renderField((0,m.kg)("editor.camera.refresh_interval.title",d,"Refresh Interval (seconds)"),(0,m.kg)("editor.camera.refresh_interval.desc",d,"How often to refresh the camera snapshot automatically. Range: 1-300 seconds."),t,{refresh_interval:c.refresh_interval||10},[l.Q.createSchemaItem("refresh_interval",{number:{min:1,max:300,mode:"box"}})],e=>n({refresh_interval:e.detail.value.refresh_interval}))}
                      `)}
                  </div>
                `:""}

          <!-- Dimensions Section -->
          <div style="margin-bottom: 32px;">
            <div
              class="field-title"
              style="font-size: 18px; font-weight: 700; margin-bottom: 8px; color: var(--primary-color);"
            >
              ${(0,m.kg)("editor.camera.dimensions.title",d,"Dimensions")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-6, 6px); border-left: 4px solid var(--primary-color);"
            >
              <ha-icon icon="mdi:information" style="font-size: 14px; margin-right: 6px;"></ha-icon>
              ${(0,m.kg)("editor.camera.dimensions.responsive_note",d,"Camera now uses responsive sizing by default (100% width). Use the Design tab for full control over dimensions, or adjust these fallback pixel dimensions for specific use cases.")}
            </div>

            <style>
              .aspect-ratio-link-btn {
                width: 40px;
                height: 40px;
                padding: 0;
                border: 2px solid var(--divider-color);
                border-radius: 50%;
                background: var(--secondary-background-color);
                color: var(--primary-text-color);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
                flex-shrink: 0;
                margin: 0 auto;
                position: relative;
              }

              .aspect-ratio-link-btn.linked {
                border-color: var(--primary-color);
                background: var(--primary-color);
                color: var(--text-primary-color, #fff);
                transform: scale(1.05);
              }

              .aspect-ratio-link-btn:hover {
                transform: scale(1.1);
                border-color: var(--primary-color);
              }

              .aspect-ratio-link-btn.linked:hover {
                background: var(--primary-color);
                opacity: 0.9;
              }

              .aspect-ratio-link-btn ha-icon {
                font-size: 20px;
                transition: transform 0.2s ease;
              }

              .dimensions-container {
                display: flex;
                flex-direction: column;
                gap: 16px;
              }

              .dimension-group {
                display: flex;
                flex-direction: column;
                gap: 8px;
              }
            </style>

            <div class="dimensions-container">
              <div class="dimension-group">
                ${this.renderSliderField((0,m.kg)("editor.camera.width",d,"Width"),(0,m.kg)("editor.camera.width_desc",d,"Set the width of the camera display. Range: 100–1000px"),c.width||320,320,100,1e3,1,e=>this._handleDimensionChange(c,"width",e,n),"px")}
              </div>

              <!-- Link/Unlink Button -->
              <div style="display: flex; justify-content: center; margin: 8px 0;">
                <button
                  class="aspect-ratio-link-btn ${!1!==c.aspect_ratio_linked?"linked":""}"
                  @click=${()=>{const e=!c.aspect_ratio_linked,t={aspect_ratio_linked:e};if(e){const e=c.width||320,i=c.height||180;t.aspect_ratio_value=e/i}n(t)}}
                  title="${!1!==c.aspect_ratio_linked?(0,m.kg)("editor.camera.unlink_aspect",d,"Unlink aspect ratio"):(0,m.kg)("editor.camera.link_aspect",d,"Link aspect ratio")}"
                >
                  <ha-icon
                    icon="${!1!==c.aspect_ratio_linked?"mdi:link-variant":"mdi:link-variant-off"}"
                  ></ha-icon>
                </button>
              </div>

              <div class="dimension-group">
                ${this.renderSliderField((0,m.kg)("editor.camera.height",d,"Height"),(0,m.kg)("editor.camera.height_desc",d,"Set the height of the camera display. Range: 100–1000px"),c.height||180,180,100,1e3,1,e=>this._handleDimensionChange(c,"height",e,n),"px")}
              </div>
            </div>

            ${!1!==c.aspect_ratio_linked?o.qy`
                    <div
                      style="margin-top: 12px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-8, 8px); border-left: 4px solid var(--primary-color);"
                    >
                      <div
                        style="font-size: 13px; color: var(--primary-color); font-weight: 500; margin-bottom: 4px;"
                      >
                        <ha-icon
                          icon="mdi:link-variant"
                          style="font-size: 14px; margin-right: 6px;"
                        ></ha-icon>
                        ${(0,m.kg)("editor.camera.aspect_linked.title",d,"Aspect Ratio Linked")}
                      </div>
                      <div
                        style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                      >
                        ${(0,m.kg)("editor.camera.aspect_linked.desc",d,"Dimensions maintain {ratio}:1 ratio. Adjusting one dimension automatically updates the other to maintain proportions.").replace("{ratio}",`${(1*(c.aspect_ratio_value||1.778)).toFixed(2)}`)}
                      </div>
                    </div>
                  `:o.qy`
                    <div
                      style="margin-top: 12px; padding: 12px; background: rgba(var(--rgb-secondary-text-color), 0.1); border-radius: var(--uc-r-8, 8px); border-left: 4px solid var(--secondary-text-color);"
                    >
                      <div
                        style="font-size: 13px; color: var(--secondary-text-color); font-weight: 500; margin-bottom: 4px;"
                      >
                        <ha-icon
                          icon="mdi:link-variant-off"
                          style="font-size: 14px; margin-right: 6px;"
                        ></ha-icon>
                        ${(0,m.kg)("editor.camera.aspect_independent.title",d,"Independent Dimensions")}
                      </div>
                      <div
                        style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                      >
                        ${(0,m.kg)("editor.camera.aspect_independent.desc",d,"Width and height can be adjusted independently. Click the link button above to maintain aspect ratio.")}
                      </div>
                    </div>
                  `}
          </div>

          <!-- Rotation Field -->
          <div class="dimension-group" style="margin-top: 16px;">
            ${this.renderSliderField((0,m.kg)("editor.camera.rotation",d,"Rotation"),(0,m.kg)("editor.camera.rotation_desc",d,"Rotate the camera image clockwise (0–360 degrees)."),c.rotation||0,0,0,360,1,e=>{n({rotation:e})},"°")}
          </div>
        </div>

        <!-- Crop & Position Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,m.kg)("editor.camera.crop.title",d,"Crop & Position")}
          </div>
          <div
            class="field-description"
            style="margin-bottom: 20px; color: var(--secondary-text-color); font-style: italic;"
          >
            ${(0,m.kg)("editor.camera.crop.desc",d,"Adjust the crop and position of the camera view. Useful for focusing on specific areas or removing unwanted edges.")}
          </div>

          <div style="display: flex; flex-direction: column; gap: 20px;">
            <!-- Left Crop -->
            ${this.renderSliderField((0,m.kg)("editor.camera.crop.left_title",d,"Left Crop"),(0,m.kg)("editor.camera.crop.left_desc",d,"Crop from the left edge. Higher values show less of the left side."),c.crop_left||0,0,0,50,1,e=>{n({crop_left:e})},"%")}

            <!-- Right Crop -->
            ${this.renderSliderField((0,m.kg)("editor.camera.crop.right_title",d,"Right Crop"),(0,m.kg)("editor.camera.crop.right_desc",d,"Crop from the right edge. Higher values show less of the right side."),c.crop_right||0,0,0,50,1,e=>{n({crop_right:e})},"%")}

            <!-- Top Crop -->
            ${this.renderSliderField((0,m.kg)("editor.camera.crop.top_title",d,"Top Crop"),(0,m.kg)("editor.camera.crop.top_desc",d,"Crop from the top edge. Higher values show less of the top area."),c.crop_top||0,0,0,50,1,e=>{n({crop_top:e})},"%")}

            <!-- Bottom Crop -->
            ${this.renderSliderField((0,m.kg)("editor.camera.crop.bottom_title",d,"Bottom Crop"),(0,m.kg)("editor.camera.crop.bottom_desc",d,"Crop from the bottom edge. Higher values show less of the bottom area."),c.crop_bottom||0,0,0,50,1,e=>{n({crop_bottom:e})},"%")}
          </div>

          <!-- Crop Status -->
          ${(c.crop_left||0)+(c.crop_top||0)+(c.crop_right||0)+(c.crop_bottom||0)>0?o.qy`
                  <div
                    style="margin-top: 16px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-8, 8px); border-left: 4px solid var(--primary-color);"
                  >
                    <div
                      style="font-size: 13px; color: var(--primary-color); font-weight: 500; margin-bottom: 4px;"
                    >
                      <ha-icon
                        icon="mdi:crop"
                        style="font-size: 14px; margin-right: 6px;"
                      ></ha-icon>
                      ${(0,m.kg)("editor.camera.crop.active_applied",d,"Active Crops Applied")}
                    </div>
                    <div
                      style="font-size: 12px; color: var(--secondary-text-color); line-height: 1.4;"
                    >
                      L: ${c.crop_left||0}% | T: ${c.crop_top||0}% | R:
                      ${c.crop_right||0}% | B: ${c.crop_bottom||0}%
                    </div>
                  </div>
                `:""}

          <!-- Reset All Crops Button -->
          <div style="margin-top: 20px; text-align: center;">
            <button
              style="
                padding: 8px 16px;
                border: 1px solid var(--primary-color);
                border-radius: var(--uc-r-6, 6px);
                background: transparent;
                color: var(--primary-color);
                cursor: pointer;
                font-size: 13px;
                font-weight: 500;
                transition: all 0.2s ease;
              "
              @click=${()=>n({crop_left:0,crop_top:0,crop_right:0,crop_bottom:0})}
              @mouseover=${e=>{const t=e.target;t.style.background="var(--primary-color)",t.style.color="white"}}
              @mouseout=${e=>{const t=e.target;t.style.background="transparent",t.style.color="var(--primary-color)"}}
            >
              <ha-icon icon="mdi:crop-free" style="margin-right: 6px; font-size: 14px;"></ha-icon>
              ${(0,m.kg)("editor.camera.crop.reset_all",d,"Reset All Crops")}
            </button>
          </div>
        </div>

        <!-- Link configuration intentionally omitted for Camera module per design guidelines -->

        <!-- Unified Template Section -->
        <div class="template-section">
          <div class="template-header">
            <div class="switch-container">
              <div class="switch-label-row">
                <label class="switch-label"
                  >${(0,m.kg)("editor.camera.unified_template.toggle",d,"Template Mode")}</label
                >
                <button
                  class="help-btn"
                  style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                  title="${(0,m.kg)("editor.camera.unified_template.cheatsheet",d,"Template cheatsheet")}"
                  @click=${e=>{e.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"camera"}}))}}
                >
                  <ha-icon
                    icon="mdi:help-circle"
                    style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"
                  ></ha-icon>
                </button>
              </div>
              ${this.renderUcForm(t,{unified_template_mode:c.unified_template_mode||!1},[this.booleanField("unified_template_mode")],e=>n({unified_template_mode:e.detail.value.unified_template_mode}))}
            </div>
            <div class="template-description">
              ${(0,m.kg)("editor.camera.unified_template.desc",d,"Return JSON: entity, visible, overlay_text, overlay_color — or a plain entity_id string.")}
            </div>
          </div>

          ${c.unified_template_mode?o.qy`
                  <div
                    class="template-content"
                    @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
                    @dragstart=${e=>e.stopPropagation()}
                    @insert-snippet=${e=>{var t,i,o;const n=e.currentTarget.querySelector("ultra-template-editor");null===(t=null==n?void 0:n.insertAtCursor)||void 0===t||t.call(n,null!==(o=null===(i=e.detail)||void 0===i?void 0:i.value)&&void 0!==o?o:"")}}
                  >
                    <ultra-template-editor
                      .hass=${t}
                      .value=${c.unified_template||""}
                      .placeholder=${"{\n  \"entity\": \"{{ 'camera.outdoor' if is_state('weather.home', 'sunny') else 'camera.indoor' }}\"\n}"}
                      .minHeight=${100}
                      .maxHeight=${300}
                      @value-changed=${e=>{n({unified_template:e.detail.value})}}
                    ></ultra-template-editor>
                    ${this.renderTemplateKeyWarning(c.unified_template,A,d)}
                  </div>
                `:""}
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return c.A.render(e,t,e=>o(e))}renderPreview(e,t,i,r){var a,s,l;const c=e,d=c,p=(null===(a=t.locale)||void 0===a?void 0:a.language)||"en";this._hass=t;const u=!!c.unified_template_mode&&!(!c.unified_template||!String(c.unified_template).trim());if(!(u||c.entity&&""!==c.entity.trim()))return this.renderGradientErrorState((0,m.kg)("editor.camera.error_no_entity",p,"Select Camera Entity"),(0,m.kg)("editor.camera.error_no_entity_desc",p,"Choose a camera entity in the General tab"),"mdi:camera-outline");if(u&&!String(c.unified_template).trim())return this.renderGradientErrorState((0,m.kg)("editor.camera.error_no_template",p,"Configure Template"),(0,m.kg)("editor.camera.error_no_template_desc",p,"Enter unified template in the General tab"),"mdi:camera-outline");const b=d.design||{};let y,w,k,$;if(c.unified_template_mode&&c.unified_template&&(!this._templateService&&t?this._templateService=new h.I(t):this._templateService&&t&&this._templateService.updateHass(t),t)){t.__uvc_template_strings||(t.__uvc_template_strings={});const e=(0,f.KD)(c.unified_template,t,i),o=this._hashString(e),n=`unified_camera_${c.id}_${o}`;if(this._templateService){const o=(0,g.pL)(c.entity||"",t,{camera_name:c.camera_name,live_view:c.live_view}),r=(0,g.jh)(c.entity||"",t);this._templateService.subscribeToTemplate(e,n,()=>{"undefined"!=typeof window&&this.triggerPreviewUpdate()},o,i,r)}const r=null===(s=t.__uvc_template_strings)||void 0===s?void 0:s[n];if(r&&""!==String(r).trim()){const e=(0,v.cv)(r);if(!(0,v.HD)(e)){const t=(0,v.B8)(e)||e.entity;t&&(y=t),void 0!==e.visible&&(w=e.visible),e.overlay_text&&(k=e.overlay_text),e.overlay_color&&($=e.overlay_color)}}}if(!1===w)return o.qy``;let S=y||c.entity;const T=this._runtimeFor(c.id),C=c.view_mode||"auto",E="live"===C?{live:!1}:function(e,t,i,o=Date.now(),n){if(!t||!(null==e?void 0:e.states))return{live:!1};const r=e.states[t];if(!r||"unavailable"===r.state||"unknown"===r.state)return{live:!1};const a=1e3*Math.max(0,Number.isFinite(i)?i:60);if("event"===x(t)){const e=null!=n?n:Date.parse(r.state);if(!Number.isFinite(e))return{live:!1};const t=e+a;return t>o?{live:!0,until:t}:{live:!1}}if(_.has(r.state))return{live:!0};const s=null!=n?n:r.last_changed?Date.parse(r.last_changed):NaN;if(!Number.isFinite(s))return{live:!1};const l=s+a;return l>o?{live:!0,until:l}:{live:!1}}(t,c.live_trigger_entity,c.live_trigger_hold,Date.now(),c.live_trigger_entity?this._observeTrigger(`live:${c.id}`,t,c.live_trigger_entity).seenAt:void 0);this._scheduleTriggerExpiry(T,E.until);const z=E.live?"live":C,F="live"===z;T.renderedLive=F,this._isEditorOpen()?(S&&this._scheduleCameraUpdate(S,F,c,t),S=null!==(l=T.appliedEntity)&&void 0!==l?l:S):S&&this._isValidCameraEntity(t,S)&&(T.appliedEntity=S,T.appliedLive=F);const A=S?t.states[S]:null,L=!A||"unavailable"===A.state;T.renderedEntity=S,this._checkFullscreenTrigger(c,t);const q=`${c.id}|${S||"none"}|${z}|${T.streamEpoch||0}`;F&&this._ensureVisibilityListener();const O=k||c.camera_name||(A?A.attributes.friendly_name||A.entity_id:"Camera"),D={width:"100%",maxWidth:"100%",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"left"===b.alignment?"flex-start":"right"===b.alignment?"flex-end":"center",justifyContent:"center",color:b.color||this.getTextColor(d),fontFamily:b.font_family||this.getTextFont(d),fontSize:b.font_size?"number"==typeof b.font_size?`${b.font_size}px`:b.font_size:this.getTextSize(d),fontWeight:b.font_weight||this.getTextWeight(d),textTransform:b.text_transform||void 0,letterSpacing:b.letter_spacing||void 0,lineHeight:b.line_height||void 0,textShadow:b.text_shadow||void 0},P=this._clampCrop(c.crop_left),R=this._clampCrop(c.crop_right),I=this._clampCrop(c.crop_top),U=this._clampCrop(c.crop_bottom),H=Math.max(1,100-P-R),j=Math.max(1,100-I-U),B=P>0||R>0||I>0||U>0,W=b.height&&""!==b.height&&"auto"!==b.height,N=c.width||320,V=c.height||180,X=(!1!==c.aspect_ratio_linked&&(c.aspect_ratio_value||0)>0?c.aspect_ratio_value:N/V)||M,Z=X*H/j,G=this._resolveFitMode(c.image_fit),Y=c.rotation||0,K={display:"block",position:"absolute",top:B?`${(-I/j*100).toFixed(4)}%`:"0",left:B?`${(-P/H*100).toFixed(4)}%`:"0",width:B?`${(1e4/H).toFixed(4)}%`:"100%",height:B?`${(1e4/j).toFixed(4)}%`:"100%",transform:0!==Y?`rotate(${Y}deg)`:void 0,objectFit:G},Q={width:b.width||`${Math.max(50,N*H/100).toFixed(0)}px`,height:W?b.height:void 0,aspectRatio:W?void 0:Z.toFixed(4),maxWidth:b.max_width||void 0,minWidth:b.min_width||void 0,maxHeight:b.max_height||void 0,minHeight:b.min_height||void 0,position:"relative",overflow:b.overflow||"hidden",borderRadius:b.border_radius||"0px",background:b.background_color||"transparent",backgroundImage:this.getBackgroundImageWithDesign(b,d,t)||void 0,border:this.getBorderWithDesign(b,d)||void 0,padding:"0",margin:this.getMarginWithDesign(b,d),boxShadow:b.box_shadow||void 0,backdropFilter:b.backdrop_filter||void 0,clipPath:b.clip_path||void 0,"--video-max-height":"100%"},J=c.name_position||"top-left",ee=this.getCameraNamePositionStyles(J,d,b,$),te=F&&this._isAudioActive(c),ie=F&&!1!==c.show_audio_button,oe=!0===c.show_mode_badge?o.qy`<div class="camera-mode-badge ${F?"live":"snapshot"}">
            <span class="camera-mode-badge-dot"></span>
            ${F?(0,m.kg)("editor.camera.mode_badge.live",p,"Live"):(0,m.kg)("editor.camera.mode_badge.snapshot",p,"Snapshot")}
          </div>`:"",ne=!1!==c.show_name?o.qy`<div
            class="camera-name-overlay"
            style="${this.buildStyleString(ee)}"
          >
            ${O}
          </div>`:"",re=`font-weight: ${b.font_weight||this.getTextWeight(d)}; font-size: ${b.font_size?"number"==typeof b.font_size?`${b.font_size}px`:b.font_size:this.getTextSize(d)};`,ae=`font-size: ${"number"==typeof b.font_size?`${Math.max(10,b.font_size-2)}px`:this.getSmallTextSize(d)}; margin-top: 4px; opacity: 0.9;`,se=e=>this.buildStyleString({position:"absolute",inset:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:e,color:b.color||this.getTextColor(d),fontFamily:b.font_family||this.getTextFont(d)}),le=o.qy`
      <div
        class="camera-module-container"
        data-uc-camera-id="${c.id}"
        style="${this.buildStyleString(D)}"
      >
        <div class="camera-image-container" style="${this.buildStyleString(Q)}">
          ${S?L?o.qy`
                    <div
                      class="camera-unavailable"
                      style="${se("var(--error-color, #f44336)")}"
                    >
                      ${c.fallback_image?o.qy`
                              <img
                                src=${c.fallback_image}
                                alt="Fallback"
                                style="width: 100%; height: 100%; object-fit: ${G};"
                              />
                            `:o.qy`
                              <ha-icon
                                icon="mdi:camera-off"
                                style="font-size: 48px; margin-bottom: 8px;"
                              ></ha-icon>
                              <span style="${re}"
                                >${(0,m.kg)("editor.camera.unavailable",p,"Camera Unavailable")}</span
                              >
                              <span style="${ae}">${S}</span>
                            `}
                    </div>
                    ${ne}
                  `:o.qy`
                    ${(0,n.D)(q,this._renderPlayer(c,t,{cameraEntity:S,stateObj:A,viewMode:z,mediaStyles:K,fitMode:G,sourceRatio:X,audioActive:te,state:T}))}
                    ${ne} ${oe}
                    ${ie?o.qy`
                            <button
                              type="button"
                              class="camera-audio-toggle ${te?"active":"muted"}"
                              title="${te?(0,m.kg)("editor.camera.audio.mute",p,"Mute"):(0,m.kg)("editor.camera.audio.unmute",p,"Unmute")}"
                              aria-label="${te?(0,m.kg)("editor.camera.audio.mute",p,"Mute"):(0,m.kg)("editor.camera.audio.unmute",p,"Unmute")}"
                              @mousedown=${e=>e.stopPropagation()}
                              @touchstart=${e=>e.stopPropagation()}
                              @click=${e=>this._toggleAudio(e,c)}
                            >
                              <ha-icon
                                icon="${te?"mdi:volume-high":"mdi:volume-off"}"
                              ></ha-icon>
                            </button>
                          `:""}
                  `:o.qy`
                  <div
                    class="camera-unavailable"
                    style="${se("var(--warning-color, #ff9800)")}"
                  >
                    <ha-icon
                      icon="mdi:camera-plus"
                      style="font-size: 48px; margin-bottom: 8px;"
                    ></ha-icon>
                    <span style="${re}"
                      >${(0,m.kg)("editor.camera.error_no_entity",p,"Select Camera Entity")}</span
                    >
                    <span style="${ae}"
                      >${(0,m.kg)("editor.camera.error_no_entity_desc",p,"Choose a camera entity in the General tab")}</span
                    >
                  </div>
                  ${ne}
                `}
          ${this._renderActionBar(c,t,ie)}
        </div>
      </div>
    `,ce=this.getHoverEffectClass(e),de=this.buildStyleString(this.buildDesignStyles(e,t)),pe=this.hasActiveLink(c)?o.qy`<div
          class="camera-module-clickable ${ce}"
          style="${de}"
          @click=${e=>this.handleClick(e,c,t)}
          @dblclick=${e=>this.handleDoubleClick(e,c,t)}
          @mousedown=${e=>this.handleMouseDown(e,c,t)}
          @mouseup=${e=>this.handleMouseUp(e,c,t)}
          @mouseleave=${e=>this.handleMouseLeave(e,c,t)}
          @touchstart=${e=>this.handleTouchStart(e,c,t)}
          @touchend=${e=>this.handleTouchEnd(e,c,t)}
        >
          ${le}
        </div>`:o.qy`<div class="camera-module-container ${ce}" style="${de}">
          ${le}
        </div>`;return this.wrapWithAnimation(pe,e,t)}_renderActionButtonsEditor(e,t,i){var n;const r=(null===(n=t.locale)||void 0===n?void 0:n.language)||"en",a=e.action_buttons||[],s=e=>{i({action_buttons:e}),this.triggerPreviewUpdate()},l=(e,t)=>s(a.map((i,o)=>o===e?Object.assign(Object.assign({},i),t):i));return o.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
      >
        <div class="section-title" style="margin-bottom: 8px;">
          ${(0,m.kg)("editor.camera.action_buttons.title",r,"Action Buttons")}
        </div>
        <div class="field-description">
          ${(0,m.kg)("editor.camera.action_buttons.desc",r,"Buttons over the feed that also show in fullscreen, such as unlocking the front door. Locks unlock or lock, covers open or close, buttons and scripts run, and anything else toggles.")}
        </div>

        ${a.map((e,i)=>o.qy`
            <div
              style="border: 1px solid var(--divider-color); border-radius: var(--uc-r-8, 8px); padding: 12px; margin-bottom: 12px;"
            >
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div class="field-title" style="margin: 0;">
                  ${(0,m.kg)("editor.camera.action_buttons.button",r,"Button")} ${i+1}
                </div>
                <button
                  type="button"
                  class="uc-cam-ed-icon-btn"
                  title=${(0,m.kg)("editor.camera.action_buttons.remove",r,"Remove button")}
                  aria-label=${(0,m.kg)("editor.camera.action_buttons.remove",r,"Remove button")}
                  @click=${()=>(e=>s(a.filter((t,i)=>i!==e)))(i)}
                >
                  <ha-icon icon="mdi:delete-outline"></ha-icon>
                </button>
              </div>
              ${this.renderFieldSection((0,m.kg)("editor.camera.action_buttons.entity",r,"Entity"),"",t,{entity:e.entity||""},[this.entityField("entity")],e=>l(i,{entity:e.detail.value.entity||""}))}
              ${this.renderFieldSection((0,m.kg)("editor.camera.action_buttons.icon",r,"Icon"),(0,m.kg)("editor.camera.action_buttons.icon_desc",r,"Leave empty to follow the entity, such as an open or closed lock."),t,{icon:e.icon||""},[this.iconField("icon")],e=>l(i,{icon:e.detail.value.icon||void 0}))}
              ${this.renderFieldSection((0,m.kg)("editor.camera.action_buttons.label",r,"Label"),(0,m.kg)("editor.camera.action_buttons.label_desc",r,"Shown in fullscreen and as the tooltip. Leave empty to use the entity name."),t,{label:e.label||""},[this.textField("label")],e=>l(i,{label:e.detail.value.label||void 0}))}
              ${this.renderFieldSection((0,m.kg)("editor.camera.action_buttons.confirm",r,"Tap Twice to Confirm"),(0,m.kg)("editor.camera.action_buttons.confirm_desc",r,"Ask for a second tap before running, so a stray tap cannot unlock a door. On by default for locks."),t,{confirm:k(e)},[this.booleanField("confirm")],e=>l(i,{confirm:e.detail.value.confirm}))}
            </div>
          `)}

        <button type="button" class="uc-cam-ed-btn" @click=${()=>s([...a,{id:this.generateId("camera_action"),entity:""}])}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${(0,m.kg)("editor.camera.action_buttons.add",r,"Add Button")}
        </button>

        ${a.length?o.qy`
                <div style="margin-top: 16px;">
                  ${this.renderFieldSection((0,m.kg)("editor.camera.action_buttons.position",r,"Button Position"),"",t,{action_buttons_position:e.action_buttons_position||"bottom-center"},[this.selectField("action_buttons_position",[{value:"bottom-left",label:(0,m.kg)("editor.camera.name_position.options.bottom_left",r,"Bottom Left")},{value:"bottom-center",label:(0,m.kg)("editor.camera.name_position.options.bottom_middle",r,"Bottom Middle")},{value:"bottom-right",label:(0,m.kg)("editor.camera.name_position.options.bottom_right",r,"Bottom Right")}])],t=>{const o=t.detail.value.action_buttons_position;o!==(e.action_buttons_position||"bottom-center")&&(i({action_buttons_position:o}),this.triggerPreviewUpdate())})}
                </div>
              `:""}
      </div>
    `}_scheduleTriggerExpiry(e,t){e.triggerUntil!==t&&(e.triggerTimer&&clearTimeout(e.triggerTimer),e.triggerTimer=void 0,e.triggerUntil=t,void 0!==t&&(e.triggerTimer=setTimeout(()=>{e.triggerTimer=void 0,e.triggerUntil=void 0,this.triggerPreviewUpdate(!0,!0)},Math.max(0,t-Date.now())+250)))}_checkFullscreenTrigger(e,t){var i;const o=e.fullscreen_trigger_entity;if(!o)return;const n=this._observeTrigger(`fullscreen:${e.id}`,t,o);if(!n.firstSight&&!n.changed)return;const r=function(e,t){if(!t||!(null==e?void 0:e.states))return{};const i=e.states[t];if(!i||"unavailable"===i.state||"unknown"===i.state)return{};if("event"===x(t)){const e=Date.parse(i.state);return Number.isFinite(e)?{key:i.state,firedAt:e}:{}}if(!_.has(i.state))return{};const o=i.last_changed?Date.parse(i.last_changed):NaN;return Object.assign({key:`on@${i.last_changed||""}`},Number.isFinite(o)?{firedAt:o}:{})}(t,o);if(!(n.firstSight?function(e,t,i,o=Date.now()){return!!e.key&&(i?void 0!==e.firedAt&&o-e.firedAt<=6e4:e.key!==t)}(r,void 0,!0):r.key))return;if(this._isEditorOpen())return;if(!function(e,t){var i;if(!(null===(i=null==e?void 0:e.users)||void 0===i?void 0:i.length))return!0;if(!t)return!1;const o=e.users.includes(t);return"hide"===e.mode?!o:o}(e.fullscreen_trigger_users,null===(i=null==t?void 0:t.user)||void 0===i?void 0:i.id))return;const a=e.fullscreen_trigger_skip_devices||[];a.length&&a.includes(z.Ij.getCurrentBreakpoint())||setTimeout(()=>{var t;const i=this.createFullscreenModal(e),o=this._fullscreenCloseTimers.get(e.id);o&&clearTimeout(o),this._fullscreenCloseTimers.delete(e.id);const n=null!==(t=e.fullscreen_trigger_close)&&void 0!==t?t:60;i&&Number.isFinite(n)&&n>0&&this._fullscreenCloseTimers.set(e.id,setTimeout(()=>{this._fullscreenCloseTimers.delete(e.id),i()},1e3*n))},0)}_appHass(){var e;return null===(e=document.querySelector("home-assistant"))||void 0===e?void 0:e.hass}_validActionButtons(e){return(e.action_buttons||[]).filter(e=>!!(null==e?void 0:e.entity))}_renderActionBar(e,t,i=!1){var n;const r=this._validActionButtons(e);if(!r.length)return"";const a=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",s=this._runtimeFor(e.id),l=e.action_buttons_position||"bottom-center",c=e=>e.stopPropagation();return o.qy`
      <div class="camera-action-bar ${l} ${i?"has-audio":""}">
        ${r.map(i=>{var n;const r=null===(n=null==t?void 0:t.states)||void 0===n?void 0:n[i.entity],l=s.confirmButton===i.id,d=T(i,r),p=l?(0,m.kg)("editor.camera.action_buttons.tap_again",a,"Tap again to confirm"):d;return o.qy`
            <button
              type="button"
              class="camera-action-btn ${$(i.entity,r)?"active":""} ${l?"confirming":""}"
              title=${p}
              aria-label=${p}
              @mousedown=${c}
              @mouseup=${c}
              @touchstart=${c}
              @touchend=${c}
              @dblclick=${c}
              @click=${t=>this._onActionButton(t,e,i)}
            >
              <ha-icon icon=${S(i,r)}></ha-icon>
              ${l?o.qy`<span class="camera-action-confirm"
                      >${(0,m.kg)("editor.camera.action_buttons.tap_again",a,"Tap again to confirm")}</span
                    >`:""}
            </button>
          `})}
      </div>
    `}_onActionButton(e,t,i){e.stopPropagation(),e.preventDefault();const o=this._runtimeFor(t.id);if(o.confirmTimer&&clearTimeout(o.confirmTimer),o.confirmTimer=void 0,k(i)&&o.confirmButton!==i.id)return o.confirmButton=i.id,o.confirmTimer=setTimeout(()=>{o.confirmButton=void 0,o.confirmTimer=void 0,this.triggerPreviewUpdate(!0,!0)},4e3),void this.triggerPreviewUpdate(!0,!0);o.confirmButton=void 0,this.triggerPreviewUpdate(!0,!0),this._runAction(i)}_runAction(e){const t=this._hass||this._appHass();t&&(Promise.resolve().then(()=>i(1212)).then(({forwardHaptic:e})=>e("light")),async function(e,t){var i;const o=null===(i=e.states)||void 0===i?void 0:i[t.entity],{domain:n,service:r}=function(e,t){const i=x(e);return"automation"===i?{domain:i,service:"trigger"}:"script"===i?{domain:i,service:"turn_on"}:(0,y.Z0)(e,t)}(t.entity,o);await e.callService(n,r,{entity_id:t.entity})}(t,e).catch(t=>{a.f.error(t instanceof Error&&t.message?t.message:`Could not run ${e.entity}`)}))}_buildFullscreenActionBar(e,t){const i=this._validActionButtons(e);if(!i.length)return;const o=document.createElement("div");let n,r;o.className="camera-fullscreen-actions",o.style.cssText=`\n      position: absolute !important;\n      left: 50% !important;\n      bottom: calc(24px + env(safe-area-inset-bottom, 0px)) !important;\n      transform: translateX(-50%) !important;\n      display: flex !important;\n      gap: 12px !important;\n      flex-wrap: wrap !important;\n      justify-content: center !important;\n      max-width: calc(100vw - 32px) !important;\n      z-index: ${t} !important;\n    `;const a=()=>this._appHass()||this._hass,s=()=>{var e,t;return(null===(t=null===(e=a())||void 0===e?void 0:e.locale)||void 0===t?void 0:t.language)||"en"},l=i.map(e=>{const t=document.createElement("button");t.type="button",t.style.cssText="\n        display: inline-flex !important;\n        align-items: center !important;\n        gap: 8px !important;\n        min-height: 52px !important;\n        padding: 0 20px !important;\n        border-radius: 26px !important;\n        border: 2px solid rgba(255,255,255,0.6) !important;\n        color: white !important;\n        font-size: 16px !important;\n        font-weight: 500 !important;\n        font-family: inherit !important;\n        cursor: pointer !important;\n        backdrop-filter: blur(6px) !important;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;\n        transition: background 0.2s ease !important;\n      ";const i=document.createElement("ha-icon");i.style.cssText="--mdc-icon-size: 26px; pointer-events: none;";const o=document.createElement("span");return o.style.pointerEvents="none",t.append(i,o),t.addEventListener("click",t=>{if(t.stopPropagation(),t.preventDefault(),r&&clearTimeout(r),r=void 0,k(e)&&n!==e.id)return n=e.id,r=setTimeout(()=>{n=void 0,c()},4e3),void c();n=void 0,c(),this._runAction(e)}),{button:e,el:t,icon:i,text:o}}),c=()=>{var e;const t=a();for(const i of l){const o=null===(e=null==t?void 0:t.states)||void 0===e?void 0:e[i.button.entity],r=n===i.button.id;i.icon.icon=S(i.button,o),i.text.textContent=r?(0,m.kg)("editor.camera.action_buttons.tap_again",s(),"Tap again to confirm"):T(i.button,o);const a=r?"rgba(244,67,54,0.85)":$(i.button.entity,o)?"rgba(255,152,0,0.85)":"rgba(0,0,0,0.7)";i.el.style.setProperty("background",a,"important"),i.el.setAttribute("aria-label",i.text.textContent||"")}};l.forEach(e=>o.appendChild(e.el)),c();const d=setInterval(c,1e3);return{element:o,dispose:()=>{clearInterval(d),r&&clearTimeout(r)}}}_renderPlayer(e,t,i){const{cameraEntity:n,stateObj:a,viewMode:s,mediaStyles:l,fitMode:c,sourceRatio:d,audioActive:p}=i,m=this.buildStyleString(l),u=this._playerRef(e.id);return"live"===s?(this._ensureStallWatch(e.id),o.qy`
        <ha-camera-stream
          ${(0,r.K)(u)}
          class="camera-image"
          style="${m}"
          .hass=${t}
          .stateObj=${a}
          .fitMode=${c}
          .muted=${!p}
          .controls=${!0===e.show_controls}
          @load=${()=>this._syncAudio(e)}
        ></ha-camera-stream>
      `):(this._stopStallWatch(i.state),"snapshot"===s?(this._ensureSnapshot(e,n),o.qy`
        <img
          ${(0,r.K)(u)}
          class="camera-image"
          style="${m}"
          alt=${n}
          src=${i.state.snapshotSrc||""}
          @error=${()=>this._onSnapshotError(e,n)}
        />
      `):o.qy`
      <hui-image
        ${(0,r.K)(u)}
        class="camera-image"
        style="${m}"
        .hass=${t}
        .cameraImage=${n}
        .cameraView=${"auto"}
        .fitMode=${c}
        .aspectRatio=${`${d.toFixed(4)}:1`}
      ></hui-image>
    `)}_ensureStallWatch(e){const t=this._runtimeFor(e);t.stallTimer||this._isEditorOpen()||(t.stallTimer=setInterval(()=>this._checkStreamStall(e),1e4))}_stopStallWatch(e){e.stallTimer&&clearInterval(e.stallTimer),e.stallTimer=void 0,e.stallVideo=void 0,e.stallLastTime=void 0,e.stallSince=void 0}_checkStreamStall(e){const t=this._runtime.get(e);if(!(null==t?void 0:t.renderedLive))return;const i=q(t.player),o=Date.now(),n=function(e,t,i,o,n=3e4){var r;if(o||!t||t.paused&&t.controls)return{rebuild:!1,progressed:!1};const a=t.currentTime,s=e.video===t;if(!s||void 0===e.lastTime||a!==e.lastTime)return{video:t,lastTime:a,since:i,rebuild:!1,progressed:s&&void 0!==e.lastTime};const l=null!==(r=e.since)&&void 0!==r?r:i;return{video:e.video,lastTime:a,since:l,rebuild:i-l>=n,progressed:!1}}({video:t.stallVideo,lastTime:t.stallLastTime,since:t.stallSince},i,o,"undefined"!=typeof document&&document.hidden,3e4*2**Math.min(t.stallRebuilds||0,4));n.progressed&&(t.stallRebuilds=0),t.stallVideo=n.video,t.stallLastTime=n.lastTime,t.stallSince=n.since,n.rebuild&&(this._stopStallWatch(t),t.stallRebuilds=(t.stallRebuilds||0)+1,t.streamEpoch=(t.streamEpoch||0)+1,this.triggerPreviewUpdate(!0,!0))}_runtimeFor(e){let t=this._runtime.get(e);return t||(t={},this._runtime.set(e,t)),t}_playerRef(e){let t=this._playerRefs.get(e);return t||(t=t=>{this._runtimeFor(e).player=t,t||setTimeout(()=>{var t;(null===(t=this._runtime.get(e))||void 0===t?void 0:t.player)||(this._clearTimers(e),this._runtime.delete(e),this._playerRefs.delete(e))},0)},this._playerRefs.set(e,t)),t}_clearTimers(e){const t=this._runtime.get(e);t&&(t.snapshotTimer&&(clearInterval(t.snapshotTimer),t.snapshotTimer=void 0),this._stopStallWatch(t),t.updateTimer&&(clearTimeout(t.updateTimer),t.updateTimer=void 0),t.clickTimeout&&(clearTimeout(t.clickTimeout),t.clickTimeout=void 0),t.holdTimeout&&(clearTimeout(t.holdTimeout),t.holdTimeout=void 0),t.triggerTimer&&(clearTimeout(t.triggerTimer),t.triggerTimer=void 0,t.triggerUntil=void 0),t.confirmTimer&&(clearTimeout(t.confirmTimer),t.confirmTimer=void 0,t.confirmButton=void 0))}_clampCrop(e){return"number"==typeof e&&isFinite(e)?Math.min(49,Math.max(0,e)):0}_resolveFitMode(e){switch(e){case"contain":case"scale-down":return"contain";case"fill":return"fill";default:return"cover"}}_isEditorOpen(){try{return!!document.querySelector("hui-dialog-edit-card, hui-card-edit-mode")}catch(e){return!1}}_isValidCameraEntity(e,t){var i;if(!e||!t)return!1;const o=null===(i=e.states)||void 0===i?void 0:i[t];return!!o&&"camera"===t.split(".")[0]&&"unavailable"!==o.state&&"unknown"!==o.state}_scheduleCameraUpdate(e,t,i,o){const n=this._runtimeFor(i.id);n.appliedEntity===e&&n.appliedLive===t||(n.pendingProps={entity:e,live:t},n.updateTimer&&clearTimeout(n.updateTimer),n.updateTimer=setTimeout(()=>{n.updateTimer=void 0;const e=n.pendingProps;e&&this._isValidCameraEntity(o,e.entity)&&(n.appliedEntity=e.entity,n.appliedLive=e.live,n.pendingProps=void 0,this.triggerPreviewUpdate())},200))}_ensureSnapshot(e,t){const i=this._runtimeFor(e.id),o=1e3*Math.min(300,Math.max(1,e.refresh_interval||10));i.snapshotEntity!==t&&(i.snapshotEntity=t,i.snapshotSrc=void 0,i.snapshotTimer&&(clearInterval(i.snapshotTimer),i.snapshotTimer=void 0)),i.snapshotSrc||this._refreshSnapshot(e.id,t,!1),i.snapshotTimer&&i.snapshotIntervalMs!==o&&(clearInterval(i.snapshotTimer),i.snapshotTimer=void 0),i.snapshotTimer||(i.snapshotIntervalMs=o,i.snapshotTimer=setInterval(()=>this._refreshSnapshot(e.id,t,!0),o)),this._ensureVisibilityListener()}_refreshSnapshot(e,t,i){var o,n;const r=this._runtime.get(e),a=this._hass;if(!r||!a)return;if(i&&"undefined"!=typeof document&&document.hidden)return;const s=null===(o=a.states)||void 0===o?void 0:o[t],l=null===(n=null==s?void 0:s.attributes)||void 0===n?void 0:n.entity_picture;if(!l)return void this._resolveSignedSnapshot(e,t);const c="function"==typeof a.hassUrl?a.hassUrl(l):l,d=`${c}${c.includes("?")?"&":"?"}_uc=${Date.now()}`;i?this._swapSnapshot(e,t,d,!0):r.snapshotSrc=d}_swapSnapshot(e,t,i,o){const n=this._runtime.get(e);if(!n)return;const r=n.player;if(!(r instanceof HTMLImageElement)||"undefined"==typeof Image)return n.snapshotSrc=i,void this.triggerPreviewUpdate();const a=new Image;a.onload=()=>{const t=this._runtime.get(e);t&&t.player===r&&(t.snapshotSrc=i,r.src=i)},a.onerror=()=>{o&&this._resolveSignedSnapshot(e,t)},a.src=i}async _resolveSignedSnapshot(e,t){const i=this._runtime.get(e),o=this._hass;if(i&&o&&!i.snapshotInFlight){i.snapshotInFlight=!0;try{const i=await o.callWS({type:"auth/sign_path",path:`/api/camera_proxy/${t}`});if(!(null==i?void 0:i.path))return;const n="function"==typeof o.hassUrl?o.hassUrl(i.path):i.path;this._swapSnapshot(e,t,`${n}${n.includes("?")?"&":"?"}_uc=${Date.now()}`,!1)}catch(e){}finally{i.snapshotInFlight=!1}}}_onSnapshotError(e,t){const i=this._runtimeFor(e.id);if(e.fallback_image){const t=i.player;return void(t instanceof HTMLImageElement&&t.src!==e.fallback_image&&(t.src=e.fallback_image))}this._resolveSignedSnapshot(e.id,t)}_ensureVisibilityListener(){this._visibilityListener||"undefined"==typeof document||(this._visibilityListener=()=>{if(document.hidden)return void(this._hiddenAt=Date.now());const e=void 0!==this._hiddenAt&&Date.now()-this._hiddenAt>=3e4;this._hiddenAt=void 0;let t=!1;this._runtime.forEach((i,o)=>{i.snapshotTimer&&i.snapshotEntity&&this._resolveSignedSnapshot(o,i.snapshotEntity),e&&i.renderedLive&&(i.streamEpoch=(i.streamEpoch||0)+1,t=!0)}),t&&this.triggerPreviewUpdate(!0,!0)},document.addEventListener("visibilitychange",this._visibilityListener))}renderLogicTab(e,t,i,o){return d.X.render(e,t,e=>o(e))}validate(e){const t=e,i=[...super.validate(e).errors];return"snapshot"===t.view_mode&&t.refresh_interval&&(t.refresh_interval<1||t.refresh_interval>300)&&i.push("Refresh interval must be between 1 and 300 seconds for snapshot mode"),t.border_radius&&isNaN(Number(t.border_radius))&&i.push("Border radius must be a number"),void 0!==t.rotation&&null!==t.rotation&&(isNaN(Number(t.rotation))||t.rotation<0||t.rotation>360)&&i.push("Rotation must be a number between 0 and 360 degrees"),t.tap_action&&t.tap_action.action&&i.push(...this.validateAction(t.tap_action)),t.hold_action&&t.hold_action.action&&i.push(...this.validateAction(t.hold_action)),t.double_tap_action&&t.double_tap_action.action&&i.push(...this.validateAction(t.double_tap_action)),{valid:0===i.length,errors:i}}handleClick(e,t,i,o){e.preventDefault();const n=this._runtimeFor(t.id);n.clickTimeout&&clearTimeout(n.clickTimeout),t.double_tap_action&&"nothing"!==t.double_tap_action.action?n.clickTimeout=setTimeout(()=>{n.clickTimeout=void 0,this.handleTapAction(e,t,i,o)},300):this.handleTapAction(e,t,i,o)}handleDoubleClick(e,t,i,o){e.preventDefault();const n=this._runtimeFor(t.id);n.clickTimeout&&(clearTimeout(n.clickTimeout),n.clickTimeout=void 0),this.handleDoubleAction(e,t,i,o)}handleMouseDown(e,t,i,o){const n=this._runtimeFor(t.id);n.isHolding=!1,n.holdTimeout=setTimeout(()=>{n.isHolding=!0,this.handleHoldAction(e,t,i,o)},500)}handleMouseUp(e,t,i){const o=this._runtimeFor(t.id);o.holdTimeout&&(clearTimeout(o.holdTimeout),o.holdTimeout=void 0)}handleMouseLeave(e,t,i){const o=this._runtimeFor(t.id);o.holdTimeout&&(clearTimeout(o.holdTimeout),o.holdTimeout=void 0),o.isHolding=!1}handleTouchStart(e,t,i,o){this.handleMouseDown(e,t,i,o)}handleTouchEnd(e,t,i){this.handleMouseUp(e,t,i)}handleTapAction(e,t,i,o){if(!this._runtimeFor(t.id).isHolding)if(!0!==t.tap_opens_fullscreen)if(t.tap_action){const n="default"===t.tap_action.action?{action:"more-info",entity:t.entity}:t.tap_action;p.K.handleAction(n,i,e.target,o,t.entity,t)}else t.entity&&p.K.handleAction({action:"more-info",entity:t.entity},i,e.target,o,t.entity,t);else this.handleFullscreenClick(e,t,o)}handleHoldAction(e,t,i,o){t.hold_action&&"nothing"!==t.hold_action.action&&p.K.handleAction(t.hold_action,i,e.target,o,t.entity,t)}handleDoubleAction(e,t,i,o){t.double_tap_action&&"nothing"!==t.double_tap_action.action&&p.K.handleAction(t.double_tap_action,i,e.target,o,t.entity,t)}handleFullscreenClick(e,t,o){e.stopPropagation(),e.preventDefault(),!1!==(null==o?void 0:o.haptic_feedback)&&Promise.resolve().then(()=>i(1212)).then(({forwardHaptic:e})=>{e("medium")});const n=e.currentTarget||e.target;this.createFullscreenModal(t,n)}_resolveFullscreenHost(e){var t;const i=(null===(t=null==e?void 0:e.closest)||void 0===t?void 0:t.call(e,".ultra-popup-portal"))?u.Mu.GRAPH_TOOLTIP:u.Mu.CAMERA_FULLSCREEN_OVERLAY,o=document.querySelector("home-assistant");return(null==o?void 0:o.shadowRoot)?{host:o.shadowRoot,zIndex:i}:{host:(0,b.I)(e,i).host,zIndex:i}}createFullscreenModal(e,t){var i,o,n,r,s,l,c;document.querySelectorAll('[id^="ultra-camera-fullscreen-"]').forEach(e=>{var t,i,o;return null!==(o=null===(i=(t=e)._ultraClose)||void 0===i?void 0:i.call(t))&&void 0!==o?o:e.remove()});const d=document.querySelector("home-assistant");null===(i=null==d?void 0:d.shadowRoot)||void 0===i||i.querySelectorAll('[id^="ultra-camera-fullscreen-"]').forEach(e=>{var t,i,o;return null!==(o=null===(i=(t=e)._ultraClose)||void 0===i?void 0:i.call(t))&&void 0!==o?o:e.remove()});const{host:p,zIndex:m}=this._resolveFullscreenHost(t),h=m>=u.Mu.GRAPH_TOOLTIP?m:m+1,g=(null===(o=this._runtime.get(e.id))||void 0===o?void 0:o.renderedEntity)||e.entity;if(!g)return void a.f.error("No camera entity available");const v="ultra-camera-fullscreen-"+Date.now(),f=document.createElement("div");f.id=v,f.style.cssText=`\n      position: fixed !important;\n      top: 0 !important;\n      left: 0 !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      background: rgba(0,0,0,0.95) !important;\n      z-index: ${m} !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      backdrop-filter: blur(10px) !important;\n      touch-action: none !important;\n      user-select: none !important;\n      -webkit-user-select: none !important;\n      -webkit-touch-callout: none !important;\n    `;const b=document.createElement("div");b.style.cssText="\n      position: relative !important;\n      width: 100vw !important;\n      height: 100vh !important;\n      overflow: hidden !important;\n      background: black !important;\n    ";const y=document.createElement("div");y.id=v+"-camera-container",y.style.cssText="\n      width: 100% !important;\n      height: 100% !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      min-height: 300px !important;\n      touch-action: none !important;\n      user-select: none !important;\n    ";const _=document.createElement("button");if(_.innerHTML="✕",_.style.cssText=`\n      position: absolute !important;\n      top: 20px !important;\n      right: 20px !important;\n      width: 50px !important;\n      height: 50px !important;\n      border: 3px solid rgba(255,255,255,0.7) !important;\n      background: rgba(0,0,0,0.8) !important;\n      color: white !important;\n      font-size: 30px !important;\n      font-weight: bold !important;\n      cursor: pointer !important;\n      border-radius: 50% !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      z-index: ${h} !important;\n      backdrop-filter: blur(4px) !important;\n      box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;\n      font-family: Arial, sans-serif !important;\n      line-height: 1 !important;\n      transition: all 0.2s ease !important;\n    `,!1!==e.show_name){const t=document.createElement("div");t.style.cssText="\n        position: absolute !important;\n        top: 20px !important;\n        left: 20px !important;\n        padding: 10px 16px !important;\n        background: rgba(0,0,0,0.8) !important;\n        color: white !important;\n        border-radius: var(--uc-r-8, 8px) !important;\n        font-size: 16px !important;\n        font-weight: 500 !important;\n        backdrop-filter: blur(4px) !important;\n        text-shadow: 0 1px 2px rgba(0,0,0,0.8) !important;\n        border: 1px solid rgba(255,255,255,0.2) !important;\n        box-shadow: 0 2px 8px rgba(0,0,0,0.4) !important;\n      ",t.textContent=e.camera_name||g,b.appendChild(t)}b.appendChild(y),b.appendChild(_);const x=this._buildFullscreenActionBar(e,h);x&&b.appendChild(x.element),f.appendChild(b),p.appendChild(f);const w=new AbortController,k=()=>{w.abort();const e=f._restoreViewport;e&&e(),S.disconnect(),null==x||x.dispose(),y.replaceChildren(),f.remove(),document.removeEventListener("keydown",E),document.body.style.overflow=""};f._ultraClose=k;const $=()=>{f.removeAttribute("inert"),_.removeAttribute("inert"),f.style.pointerEvents="auto",_.style.pointerEvents="auto",_.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),k()},!0),f.addEventListener("click",e=>{e.target===f&&(e.stopPropagation(),e.preventDefault(),k())},!0)};$(),setTimeout($,100);const S=new MutationObserver(e=>{e.forEach(e=>{if("attributes"===e.type&&"inert"===e.attributeName){const t=e.target;t!==f&&t!==_||(t.removeAttribute("inert"),t.style.pointerEvents="auto")}})});S.observe(f,{attributes:!0}),S.observe(_,{attributes:!0});const T=this._hass||(null===(n=document.querySelector("home-assistant"))||void 0===n?void 0:n.hass);let C=!1;if(T){const t=document.createElement("ha-camera-stream");t.setAttribute("data-camera-fullscreen",g),t.hass=T,t.stateObj=null===(r=T.states)||void 0===r?void 0:r[g],t.fitMode="contain",t.muted=!0,t.controls=!0===e.show_controls,t.style.cssText="\n        width: 100vw !important;\n        height: 100vh !important;\n        display: block !important;\n        --video-max-height: 100vh !important;\n        transition: transform 0.2s ease !important;\n        cursor: grab !important;\n        touch-action: none !important;\n      ",y.replaceChildren(t),(0,F.Bc)(t,y,w.signal);const i=document.createElement("button");i.type="button",i.className="camera-fullscreen-audio",i.textContent="🔇",i.setAttribute("aria-label","Toggle audio"),i.style.cssText=`\n        position: absolute !important;\n        top: 20px !important;\n        right: 84px !important;\n        width: 50px !important;\n        height: 50px !important;\n        border: 3px solid rgba(255,255,255,0.7) !important;\n        background: rgba(0,0,0,0.8) !important;\n        color: white !important;\n        font-size: 22px !important;\n        cursor: pointer !important;\n        border-radius: 50% !important;\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        z-index: ${h} !important;\n        backdrop-filter: blur(4px) !important;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;\n        line-height: 1 !important;\n      `,i.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),C=!C,t.muted=!C,i.textContent=C?"🔊":"🔇";const o=this._findVideoElement(t);o&&(o.muted=!C,o.volume=C?1:0,o.paused&&o.play().catch(()=>{}))}),b.appendChild(i)}else{const e=null===(l=null===(s=this._hass)||void 0===s?void 0:s.states)||void 0===l?void 0:l[g],t=document.createElement("img");t.src=(null===(c=null==e?void 0:e.attributes)||void 0===c?void 0:c.entity_picture)||"",t.style.cssText="\n        width: 100vw !important;\n        height: 100vh !important;\n        display: block !important;\n        object-fit: contain !important;\n        cursor: grab !important;\n        touch-action: none !important;\n      ",y.replaceChildren(t),(0,F.Bc)(t,y,w.signal)}const E=e=>{"Escape"===e.key&&k()};document.addEventListener("keydown",E),document.body.style.overflow="hidden";const z=document.querySelector('meta[name="viewport"]'),A=(null==z?void 0:z.content)||"";return z&&(z.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),f._restoreViewport=()=>{z&&(z.content=A)},()=>{f.isConnected&&k()}}_handleDimensionChange(e,t,i,o){const n={};if(!1!==e.aspect_ratio_linked){const o=e.aspect_ratio_value||1.778;"width"===t?(n.width=i,n.height=Math.round(i/o)):(n.height=i,n.width=Math.round(i*o)),n.width&&(n.width<100||n.width>1e3)&&(n.width=Math.max(100,Math.min(1e3,n.width)),n.height=Math.round(n.width/o)),n.height&&(n.height<100||n.height>1e3)&&(n.height=Math.max(100,Math.min(1e3,n.height)),n.width=Math.round(n.height*o))}else n[t]=i;o(n)}getCameraNamePositionStyles(e,t,i={},o){const n={position:"absolute",padding:"6px 12px",background:"rgba(0, 0, 0, 0.7)",color:o||i.color||this.getTextColor(t),fontSize:i.font_size?"number"==typeof i.font_size?`${i.font_size}px`:i.font_size:this.getTextSize(t),fontWeight:i.font_weight||this.getTextWeight(t),fontFamily:i.font_family||this.getTextFont(t),borderRadius:"4px",zIndex:"0",pointerEvents:"none",backdropFilter:"blur(4px)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",textShadow:i.text_shadow||"0 1px 2px rgba(0, 0, 0, 0.8)",transition:"all 0.2s ease",boxSizing:"border-box"};switch(i.text_transform&&(n.textTransform=i.text_transform),i.letter_spacing&&(n.letterSpacing=i.letter_spacing),i.line_height&&(n.lineHeight=i.line_height),e){case"top-left":default:return Object.assign(Object.assign({},n),{top:"8px",left:"8px",maxWidth:"calc(100% - 16px)"});case"top-right":return Object.assign(Object.assign({},n),{top:"8px",right:"8px",maxWidth:"calc(100% - 16px)"});case"top-middle":return Object.assign(Object.assign({},n),{top:"8px",left:"50%",transform:"translateX(-50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"center":return Object.assign(Object.assign({},n),{top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"bottom-left":return Object.assign(Object.assign({},n),{bottom:"8px",left:"8px",maxWidth:"calc(100% - 16px)"});case"bottom-middle":return Object.assign(Object.assign({},n),{bottom:"8px",left:"50%",transform:"translateX(-50%)",textAlign:"center",maxWidth:"calc(100% - 24px)"});case"bottom-right":return Object.assign(Object.assign({},n),{bottom:"8px",right:"8px",maxWidth:"calc(100% - 16px)"})}}_hashString(e){let t=0;for(let i=0;i<e.length;i+=1)t=(t<<5)-t+e.charCodeAt(i),t|=0;return Math.abs(t)}hasActiveLink(e){const t=e.tap_action&&"nothing"!==e.tap_action.action,i=e.hold_action&&"nothing"!==e.hold_action.action,o=e.double_tap_action&&"nothing"!==e.double_tap_action.action,n=!0===e.tap_opens_fullscreen;return t||i||o||n||!!e.entity}_isAudioActive(e){const t=this._runtimeFor(e.id);if(void 0!==t.audioOverride)return t.audioOverride;if(!0!==e.audio_enabled)return!1;const i=null===navigator||void 0===navigator?void 0:navigator.userActivation;return!!i&&!0===i.hasBeenActive}_toggleAudio(e,t){e.preventDefault(),e.stopPropagation();const i=this._runtimeFor(t.id);i.renderedLive&&(i.audioOverride=!this._isAudioActive(t),this._syncAudio(t),this.triggerPreviewUpdate(!0))}_syncAudio(e){const t=this._runtime.get(e.id);if(!(null==t?void 0:t.renderedLive))return;const i=t.player;if(!i)return;const o=this._isAudioActive(e);i.muted=!o;const n=this._findVideoElement(i);n&&(n.muted=!o,n.volume=o?1:0,n.playsInline=!0,n.paused&&n.play().catch(()=>{o&&(t.audioOverride=!1,i.muted=!0,n.muted=!0,n.volume=0,n.play().catch(()=>{}),this.triggerPreviewUpdate(!0))}))}_findVideoElement(e){const t=[e],i=new Set;for(;t.length;){const e=t.shift();if(!e||i.has(e))continue;if(i.add(e),e instanceof HTMLVideoElement)return e;const o=e.shadowRoot;o&&t.push(o),t.push(...Array.from(e.children))}return null}getTextColor(e){return e.text_color||"white"}getTextSize(e){const t=e.text_size||14;return"number"==typeof t?`${t}px`:t}getSmallTextSize(e){const t=e.text_size||14;return`${"number"==typeof t?Math.max(10,t-2):12}px`}getTextWeight(e){return e.text_weight||"500"}getTextFont(e){return e.text_font||'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'}getPaddingWithDesign(e,t){return e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:this.getPaddingCSS(t)}getMarginWithDesign(e,t){return e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:this.getMarginCSS(t)}getBorderWithDesign(e,t){return e.border_width&&e.border_style&&e.border_color?`${e.border_width} ${e.border_style} ${e.border_color}`:this.getBorderCSS(t)}getBackgroundImageWithDesign(e,t,i){return"url"===e.background_image_type&&e.background_image?`url('${e.background_image}')`:"entity"===e.background_image_type&&e.background_image_entity&&i.states[e.background_image_entity]?`url('/api/camera_proxy/${e.background_image_entity}')`:this.getBackgroundImageCSS(t,i)}getPaddingCSS(e){return e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${this.addPixelUnit(e.padding_top)||"0px"} ${this.addPixelUnit(e.padding_right)||"0px"} ${this.addPixelUnit(e.padding_bottom)||"0px"} ${this.addPixelUnit(e.padding_left)||"0px"}`:"0"}getMarginCSS(e){return e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${this.addPixelUnit(e.margin_top)||"0px"} ${this.addPixelUnit(e.margin_right)||"0px"} ${this.addPixelUnit(e.margin_bottom)||"0px"} ${this.addPixelUnit(e.margin_left)||"0px"}`:"0"}getBackgroundCSS(e){return e.background_color||"transparent"}getBackgroundImageCSS(e,t){return"url"===e.background_image_type&&e.background_image?`url('${e.background_image}')`:"entity"===e.background_image_type&&e.background_image_entity&&t.states[e.background_image_entity]?`url('/api/camera_proxy/${e.background_image_entity}')`:""}getBorderCSS(e){return e.border_width&&e.border_style&&e.border_color?`${e.border_width} ${e.border_style} ${e.border_color}`:""}validateAction(e){const t=[];return"navigate"!==e.action||e.navigation_path||t.push("Navigation path is required for navigate action"),"call-service"!==e.action||e.service&&e.service_data||t.push("Service and service data are required for call-service action"),t}getStyles(){return`\n      .camera-module-container {\n        width: 100%;\n        box-sizing: border-box;\n        transition: all 0.3s ease;\n      }\n      \n      .camera-name-overlay {\n        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);\n        backdrop-filter: blur(4px);\n        -webkit-backdrop-filter: blur(4px);\n        transition: all 0.2s ease;\n        box-sizing: border-box;\n        word-break: break-word;\n        hyphens: auto;\n      }\n      \n      /* Ensure camera name doesn't overflow container boundaries */\n      .camera-image-container > .camera-name-overlay {\n        contain: layout style;\n      }\n      \n      .camera-image-container {\n        position: relative;\n        overflow: hidden;\n        margin: 0 auto;\n        flex-shrink: 0;\n        display: block;\n        transition: width 0.3s ease, height 0.3s ease;\n      }\n\n      /*\n       * The stage owns the frame; the player fills it absolutely. Home Assistant's players size\n       * their internal <video>/<img> against these, so both need a definite box.\n       */\n      .camera-image {\n        position: absolute;\n        inset: 0;\n        transition: opacity 0.3s ease;\n      }\n\n      .camera-mode-badge {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        z-index: 12;\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 3px 8px;\n        border-radius: 999px;\n        background: rgba(0, 0, 0, 0.55);\n        color: #fff;\n        font-size: 11px;\n        font-weight: 600;\n        letter-spacing: 0.04em;\n        text-transform: uppercase;\n        line-height: 1.4;\n        pointer-events: none;\n      }\n      .camera-mode-badge-dot {\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        background: rgba(255, 255, 255, 0.7);\n      }\n      .camera-mode-badge.live .camera-mode-badge-dot {\n        background: #e53935;\n        animation: camera-live-pulse 1.6s ease-in-out infinite;\n      }\n      @keyframes camera-live-pulse {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.35; }\n      }\n      .camera-audio-toggle {\n        position: absolute;\n        bottom: 10px;\n        right: 10px;\n        width: 30px;\n        height: 30px;\n        border: none;\n        background: none;\n        color: rgba(255, 255, 255, 0.8);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        z-index: 12;\n        padding: 0;\n        transition: color 0.2s ease, transform 0.2s ease;\n        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);\n      }\n\n      .camera-audio-toggle ha-icon {\n        pointer-events: none;\n        font-size: 20px;\n      }\n\n      .camera-audio-toggle:hover {\n        color: rgba(255, 255, 255, 0.95);\n        transform: scale(1.05);\n      }\n\n      .camera-audio-toggle.active,\n      .camera-audio-toggle.muted {\n        color: rgba(255, 255, 255, 0.9);\n      }\n      \n      .camera-action-bar {\n        position: absolute;\n        bottom: 10px;\n        z-index: 12;\n        display: flex;\n        gap: 8px;\n        max-width: calc(100% - 20px);\n        flex-wrap: wrap;\n      }\n      .camera-action-bar.bottom-left {\n        left: 10px;\n      }\n      .camera-action-bar.bottom-right {\n        right: 10px;\n      }\n      .camera-action-bar.bottom-right.has-audio {\n        right: 48px;\n      }\n      .camera-action-bar.bottom-center {\n        left: 50%;\n        transform: translateX(-50%);\n        justify-content: center;\n      }\n\n      .camera-action-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        min-width: 40px;\n        height: 40px;\n        padding: 0 8px;\n        border: none;\n        border-radius: 20px;\n        background: rgba(0, 0, 0, 0.55);\n        color: #fff;\n        cursor: pointer;\n        backdrop-filter: blur(6px);\n        -webkit-backdrop-filter: blur(6px);\n        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);\n        font: inherit;\n        font-size: 13px;\n        font-weight: 500;\n        transition: background 0.2s ease, transform 0.15s ease;\n      }\n\n      .camera-action-btn ha-icon {\n        --mdc-icon-size: 22px;\n        pointer-events: none;\n      }\n\n      .camera-action-btn:hover {\n        transform: scale(1.05);\n      }\n\n      .camera-action-btn:focus-visible {\n        outline: 2px solid #fff;\n        outline-offset: 2px;\n      }\n\n      .camera-action-btn.active {\n        background: color-mix(in srgb, var(--warning-color, #ff9800) 85%, transparent);\n      }\n\n      .camera-action-btn.confirming {\n        background: color-mix(in srgb, var(--error-color, #f44336) 85%, transparent);\n        padding: 0 12px;\n      }\n\n      .camera-action-confirm {\n        white-space: nowrap;\n        pointer-events: none;\n      }\n\n      .camera-unavailable {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        background-color: var(--disabled-color, #f5f5f5);\n        color: var(--secondary-text-color);\n        text-align: center;\n        padding: 8px;\n        box-sizing: border-box;\n        transition: all 0.3s ease;\n      }\n      \n      .camera-module-clickable {\n        cursor: pointer;\n        transition: transform 0.2s ease;\n      }\n      \n      .camera-module-clickable:hover {\n        transform: scale(1.02);\n      }\n      \n      .camera-module-clickable:active {\n        transform: scale(0.98);\n      }\n\n      .uc-cam-ed-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 8px 14px;\n        border: 1px solid var(--primary-color);\n        border-radius: var(--uc-r-8, 8px);\n        background: transparent;\n        color: var(--primary-color);\n        font: inherit;\n        font-weight: 500;\n        cursor: pointer;\n      }\n      .uc-cam-ed-btn:hover {\n        background: rgba(var(--rgb-primary-color), 0.08);\n      }\n      .uc-cam-ed-icon-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 36px;\n        height: 36px;\n        border: none;\n        border-radius: 50%;\n        background: transparent;\n        color: var(--secondary-text-color);\n        cursor: pointer;\n      }\n      .uc-cam-ed-icon-btn:hover {\n        color: var(--error-color, #f44336);\n        background: rgba(var(--rgb-primary-color), 0.08);\n      }\n\n      /* Standard field styling */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n     \n        margin-bottom: 4px !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)) !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n\n      /* Conditional fields grouping */\n      .conditional-fields-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n        animation: slideInFromLeft 0.3s ease-out;\n      }\n\n      @keyframes slideInFromLeft {\n        from {\n          opacity: 0;\n          transform: translateX(-10px);\n        }\n        to {\n          opacity: 1;\n          transform: translateX(0);\n        }\n      }\n\n      /* Global design responsive text */\n      .camera-module-container * {\n        transition: font-size 0.3s ease, color 0.3s ease, font-weight 0.3s ease;\n      }\n\n      /* Enhanced animations for global design changes */\n      @keyframes textSizeChange {\n        0% { transform: scale(1); }\n        50% { transform: scale(1.02); }\n        100% { transform: scale(1); }\n      }\n\n      .camera-module-container.design-updating {\n        animation: textSizeChange 0.3s ease;\n      }\n\n      /* Gap control styles - Standardized Slider Pattern */\n      ${s.m.getSliderStyles()}\n    `}}function q(e,t=0){var i,o;if(!e||t>4)return;if("undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement)return e;const n=[];e.shadowRoot&&n.push(e.shadowRoot),n.push(e);for(const r of n){const n=null===(i=r.querySelector)||void 0===i?void 0:i.call(r,"video");if(n)return n;const a=null===(o=r.querySelectorAll)||void 0===o?void 0:o.call(r,"ha-hls-player, ha-web-rtc-player, ha-camera-stream");for(const i of Array.from(a||[])){if(i===e)continue;const o=q(i,t+1);if(o)return o}}}},6003(e,t,i){i.d(t,{k:()=>r});var o=i(2618),n=i(935);function r(e,t,i,r){var a,s,l;const c=i=>{const o=e.includes(i)?e.filter(e=>e!==i):[...e,i];t(o.length>0?o:void 0)};return o.qy`
    <div
      class="settings-section"
      style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 16px; border-left: 3px solid var(--primary-color);"
    >
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <ha-icon icon="mdi:responsive" style="color: var(--primary-color);"></ha-icon>
        <span style="font-size: 16px; font-weight: 700; color: var(--primary-text-color);">
          ${null!==(a=null==r?void 0:r.title)&&void 0!==a?a:(0,n.kg)("editor.logic.hide_on_devices",i,"Hide on Devices")}
        </span>
      </div>
      <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
        ${null!==(s=null==r?void 0:r.desc)&&void 0!==s?s:(0,n.kg)("editor.logic.hide_on_devices_desc",i,"Hide this element on specific screen sizes. Use this to create different layouts for different devices.")}
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
        <label
          style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: var(--card-background-color); border-radius: 6px; cursor: pointer; border: 1px solid ${e.includes("desktop")?"var(--primary-color)":"var(--divider-color)"}; transition: all 0.2s ease;"
        >
          <ha-checkbox
            .checked=${e.includes("desktop")}
            @change=${()=>c("desktop")}
          ></ha-checkbox>
          <ha-icon
            icon="mdi:monitor"
            style="color: ${e.includes("desktop")?"var(--primary-color)":"var(--secondary-text-color)"}; --mdc-icon-size: 20px;"
          ></ha-icon>
          <div style="flex: 1;">
            <div style="font-weight: 500; font-size: 13px;">Desktop</div>
            <div style="font-size: 11px; color: var(--secondary-text-color);">≥1381px</div>
          </div>
        </label>
        <label
          style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: var(--card-background-color); border-radius: 6px; cursor: pointer; border: 1px solid ${e.includes("laptop")?"var(--primary-color)":"var(--divider-color)"}; transition: all 0.2s ease;"
        >
          <ha-checkbox
            .checked=${e.includes("laptop")}
            @change=${()=>c("laptop")}
          ></ha-checkbox>
          <ha-icon
            icon="mdi:laptop"
            style="color: ${e.includes("laptop")?"var(--primary-color)":"var(--secondary-text-color)"}; --mdc-icon-size: 20px;"
          ></ha-icon>
          <div style="flex: 1;">
            <div style="font-weight: 500; font-size: 13px;">Laptop</div>
            <div style="font-size: 11px; color: var(--secondary-text-color);">1025-1380px</div>
          </div>
        </label>
        <label
          style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: var(--card-background-color); border-radius: 6px; cursor: pointer; border: 1px solid ${e.includes("tablet")?"var(--primary-color)":"var(--divider-color)"}; transition: all 0.2s ease;"
        >
          <ha-checkbox
            .checked=${e.includes("tablet")}
            @change=${()=>c("tablet")}
          ></ha-checkbox>
          <ha-icon
            icon="mdi:tablet"
            style="color: ${e.includes("tablet")?"var(--primary-color)":"var(--secondary-text-color)"}; --mdc-icon-size: 20px;"
          ></ha-icon>
          <div style="flex: 1;">
            <div style="font-weight: 500; font-size: 13px;">Tablet</div>
            <div style="font-size: 11px; color: var(--secondary-text-color);">601-1024px</div>
          </div>
        </label>
        <label
          style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: var(--card-background-color); border-radius: 6px; cursor: pointer; border: 1px solid ${e.includes("mobile")?"var(--primary-color)":"var(--divider-color)"}; transition: all 0.2s ease;"
        >
          <ha-checkbox
            .checked=${e.includes("mobile")}
            @change=${()=>c("mobile")}
          ></ha-checkbox>
          <ha-icon
            icon="mdi:cellphone"
            style="color: ${e.includes("mobile")?"var(--primary-color)":"var(--secondary-text-color)"}; --mdc-icon-size: 20px;"
          ></ha-icon>
          <div style="flex: 1;">
            <div style="font-weight: 500; font-size: 13px;">Mobile</div>
            <div style="font-size: 11px; color: var(--secondary-text-color);">≤600px</div>
          </div>
        </label>
      </div>
      ${e.length>0?o.qy`
              <div
                style="margin-top: 12px; padding: 8px 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: 4px; font-size: 12px; color: var(--primary-color);"
              >
                <ha-icon
                  icon="mdi:information-outline"
                  style="--mdc-icon-size: 14px; vertical-align: middle; margin-right: 4px;"
                ></ha-icon>
                ${null!==(l=null==r?void 0:r.summary)&&void 0!==l?l:"This element will be hidden on:"}
                ${e.map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(", ")}
              </div>
            `:""}
    </div>
  `}},9179(e,t,i){i.d(t,{h:()=>l});var o=i(2618),n=i(935);const r=new class{constructor(){this._users=null,this._loading=!1,this._lastHassRef=null,this._listeners=new Set,this._fallbackOnly=!1}subscribe(e){return this._listeners.add(e),()=>this._listeners.delete(e)}_notify(){this._listeners.forEach(e=>{try{e()}catch(e){}}),"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("uc-ha-users-loaded",{bubbles:!0,composed:!0}))}_fromHassUser(e){const t=null==e?void 0:e.user;return(null==t?void 0:t.id)?[{id:String(t.id),name:String(t.name||t.id),is_active:!0,is_owner:!!t.is_owner}]:[]}getUsers(e){var t,i,o;if(!e)return[];if(this._lastHassRef!==e&&this._users&&(null===(i=null===(t=this._lastHassRef)||void 0===t?void 0:t.user)||void 0===i?void 0:i.id)!==(null===(o=null==e?void 0:e.user)||void 0===o?void 0:o.id)&&(this._users=null,this._fallbackOnly=!1),this._lastHassRef=e,this._users)return this._users;const n=this._fromHassUser(e);return this._loading||this._fetch(e,n),n}isFallbackOnly(){return this._fallbackOnly}async _fetch(e,t){this._loading=!0;try{const i=e.callWS;if("function"!=typeof i)return this._users=t,this._fallbackOnly=!0,void this._notify();const o=await i({type:"config/auth/list"}),n=(Array.isArray(o)?o:Array.isArray(null==o?void 0:o.users)?o.users:[]).map(e=>{var t;return{id:String(null!==(t=e.id)&&void 0!==t?t:""),name:String(e.name||e.username||e.id||""),is_active:!1!==e.is_active,is_owner:!!e.is_owner}}).filter(e=>!!e.id&&!1!==e.is_active);n.length>0?(this._users=n,this._fallbackOnly=!1):(this._users=t,this._fallbackOnly=!0),this._notify()}catch(e){this._users=t,this._fallbackOnly=!0,this._notify()}finally{this._loading=!1}}clearCache(){this._users=null,this._loading=!1,this._lastHassRef=null,this._fallbackOnly=!1}};var a=i(230);function s(e,t){if("everyone"!==e&&0!==t.length)return{mode:"hide"===e?"hide":"show",users:[...t]}}function l(e,t,i,l){var c,d,p,m,u,h;const g=(null===(c=null==t?void 0:t.locale)||void 0===c?void 0:c.language)||"en",v=function(e){return(null==e?void 0:e.users)&&0!==e.users.length?"hide"===e.mode?"hide":"show":"everyone"}(e),f=new Set((null==e?void 0:e.users)||[]),b=r.getUsers(t),y=r.isFallbackOnly(),_=null===(d=null==t?void 0:t.user)||void 0===d?void 0:d.id;t&&a.S.setHass(t);const x="everyone"!==v&&!!t&&!a.S.evaluateUserVisibility(e||void 0),w=e=>{const t=e.trim();if(!t)return;const o=new Set(f);o.add(t),i(s("everyone"===v?"show":v,[...o]))};return o.qy`
    <div
      class="settings-section uc-user-visibility-section"
      style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 16px; border-left: 3px solid var(--primary-color);"
    >
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <ha-icon icon="mdi:account-eye" style="color: var(--primary-color);"></ha-icon>
        <span style="font-size: 16px; font-weight: 700; color: var(--primary-text-color);">
          ${null!==(p=null==l?void 0:l.title)&&void 0!==p?p:(0,n.kg)("editor.logic.user_visibility.title",g,"Visible to Users")}
        </span>
      </div>
      <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;">
        ${null!==(m=null==l?void 0:l.desc)&&void 0!==m?m:(0,n.kg)("editor.logic.user_visibility.desc",g,"Show or hide this element for specific Home Assistant users. Same idea as Lovelace card Visibility → User.")}
      </div>

      <div class="field-container uc-ultra-field-wrap" style="margin-bottom: 12px;">
        <ultra-segmented
          .label=${null!==(u=null==l?void 0:l.mode)&&void 0!==u?u:(0,n.kg)("editor.logic.user_visibility.mode",g,"Who can see this")}
          .description=${""}
          .value=${v}
          .options=${[{value:"everyone",label:(0,n.kg)("editor.logic.user_visibility.everyone",g,"Everyone"),icon:"mdi:account-group"},{value:"show",label:(0,n.kg)("editor.logic.user_visibility.show_only",g,"Show only for"),icon:"mdi:account-check"},{value:"hide",label:(0,n.kg)("editor.logic.user_visibility.hide_for",g,"Hide for"),icon:"mdi:account-off"}]}
          .columns=${3}
          @value-changed=${t=>{var o;(t=>{var o;if("everyone"===t)return void i(void 0);const n=(null===(o=null==e?void 0:e.users)||void 0===o?void 0:o.length)?[...e.users]:_?[_]:[];i(s(t,n))})((null===(o=t.detail)||void 0===o?void 0:o.value)||"everyone")}}
        ></ultra-segmented>
      </div>

      ${"everyone"!==v?o.qy`
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${0===b.length?o.qy`
                    <div
                      style="font-size: 13px; color: var(--secondary-text-color); font-style: italic;"
                    >
                      ${(0,n.kg)("editor.logic.user_visibility.no_users",g,"No users available yet. Enter a user ID below.")}
                    </div>
                  `:b.map(e=>o.qy`
                      <label
                        style="display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: var(--card-background-color); border-radius: 6px; cursor: pointer; border: 1px solid ${f.has(e.id)?"var(--primary-color)":"var(--divider-color)"};"
                      >
                        <ha-checkbox
                          .checked=${f.has(e.id)}
                          @change=${()=>(e=>{const t=new Set(f);t.has(e)?t.delete(e):t.add(e),i(s("everyone"===v?"show":v,[...t]))})(e.id)}
                        ></ha-checkbox>
                        <ha-icon
                          icon="mdi:account"
                          style="color: ${f.has(e.id)?"var(--primary-color)":"var(--secondary-text-color)"}; --mdc-icon-size: 20px;"
                        ></ha-icon>
                        <div style="flex: 1; min-width: 0;">
                          <div style="font-weight: 500; font-size: 13px;">
                            ${e.name}
                            ${e.id===_?o.qy`<span
                                  style="margin-left: 6px; font-size: 11px; color: var(--primary-color); font-weight: 600;"
                                  >${(0,n.kg)("editor.logic.user_visibility.you",g,"(you)")}</span
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

              ${y?o.qy`
                    <div style="margin-top: 4px;" class="uc-user-vis-manual-wrap">
                      <div
                        style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 6px;"
                      >
                        ${(0,n.kg)("editor.logic.user_visibility.manual_id_desc",g,"Could not load the full user list (admin permission may be required). Add other users by ID:")}
                      </div>
                      <div style="display: flex; gap: 8px;">
                        <uc-textfield
                          class="uc-user-vis-manual-input"
                          style="flex: 1;"
                          .label=${(0,n.kg)("editor.logic.user_visibility.manual_id",g,"User ID")}
                          .placeholder=${"581fca7f…"}
                          @keydown=${e=>{if("Enter"===e.key){const t=e.target;w(t.value||""),t.value=""}}}
                        ></uc-textfield>
                        <button
                          type="button"
                          style="padding: 0 14px; border: 1px solid var(--primary-color); background: none; color: var(--primary-color); border-radius: 6px; cursor: pointer;"
                          @click=${e=>{const t=e.currentTarget.closest(".uc-user-vis-manual-wrap"),i=null==t?void 0:t.querySelector(".uc-user-vis-manual-input");w((null==i?void 0:i.value)||""),i&&(i.value="")}}
                        >
                          ${(0,n.kg)("editor.logic.user_visibility.add",g,"Add")}
                        </button>
                      </div>
                    </div>
                  `:o.s6}

              ${x?o.qy`
                    <div
                      style="margin-top: 8px; padding: 8px 12px; background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.15); border-radius: 4px; font-size: 12px; color: var(--warning-color, #ff9800);"
                    >
                      <ha-icon
                        icon="mdi:alert-outline"
                        style="--mdc-icon-size: 14px; vertical-align: middle; margin-right: 4px;"
                      ></ha-icon>
                      ${null!==(h=null==l?void 0:l.selfWarning)&&void 0!==h?h:(0,n.kg)("editor.logic.user_visibility.self_hidden_warning",g,"You will not see this on the live dashboard while signed in as this user. Card Settings still keep the editor preview visible so you can keep editing.")}
                    </div>
                  `:o.s6}
            </div>
          `:o.s6}
    </div>
  `}i(3909),i(3072)},8465(e,t,i){i.d(t,{Q:()=>r,w:()=>a});var o=i(2618);let n=!1;class r{static findForm(e){return"undefined"==typeof document?null:document.getElementById(e)}static renderCleanForm(e,t,i,a){const s=`clean-form-${Math.random().toString(36).substr(2,9)}`;return setTimeout(()=>{const e=r.findForm(s);e&&(r.setupFormObserver(e,s),r.aggressiveCleanup(e))},0),setTimeout(()=>{const e=r.findForm(s);e&&r.aggressiveCleanup(e)},100),o.qy`
      <div class="ultra-clean-form" id="${s}">
        <ha-form
          .hass=${e}
          .data=${t}
          .schema=${i}
          .computeLabel=${()=>""}
          .computeDescription=${()=>""}
          @value-changed=${e=>{n||(n=!0,requestAnimationFrame(()=>{n=!1}),a(e),requestAnimationFrame(()=>{const e=document.getElementById(s);e&&r.aggressiveCleanup(e)}))}}
        ></ha-form>
      </div>
    `}static setupFormObserver(e,t){var i;r.activeObservers.has(t)&&(null===(i=r.activeObservers.get(t))||void 0===i||i.disconnect());const o=new MutationObserver(i=>{let o=!1;i.forEach(e=>{"childList"===e.type&&e.addedNodes.forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(o=!0)})}),o&&!r.cleanupQueue.has(t)&&(r.cleanupQueue.add(t),setTimeout(()=>{r.aggressiveCleanup(e),r.cleanupQueue.delete(t)},10))});o.observe(e,{childList:!0,subtree:!0,characterData:!0}),r.activeObservers.set(t,o),setTimeout(()=>{"undefined"!=typeof document&&document.contains(e)||(o.disconnect(),r.activeObservers.delete(t))},3e4)}static aggressiveCleanup(e){var t;if(!e)return;const i=["action","entity","template_mode","icon","name","value","text","url","path","attribute","state","condition","enabled","disabled","template","unified_template","unified_template_mode","mode","type","size","color","style","width","height","radius","opacity","service","data","latitude","longitude","navigation_path","show_icon","label","button"],o=e.querySelector("ha-form");if(!o)return;const n=document.createTreeWalker(o,NodeFilter.SHOW_TEXT,null),r=[];let a;for(;a=n.nextNode();){const e=null===(t=a.textContent)||void 0===t?void 0:t.trim().toLowerCase();e&&i.includes(e)&&r.push(a)}r.forEach(e=>{var t;const i=e.parentElement;if(i){const o=i.querySelector("input, select, ha-entity-picker, ha-selector, mwc-select, mwc-textfield");e.textContent&&e.textContent.trim().length<30&&(o||(null===(t=i.parentElement)||void 0===t?void 0:t.querySelector("input, select, ha-entity-picker, ha-selector")))&&e.remove()}}),o.querySelectorAll("*").forEach(e=>{var t,o;const n=null===(t=e.textContent)||void 0===t?void 0:t.trim().toLowerCase();n&&i.includes(n)&&0===e.children.length&&(null===(o=e.parentElement)||void 0===o?void 0:o.querySelector("input, select, ha-entity-picker, ha-selector"))&&(e.style.cssText="display: none !important; visibility: hidden !important; opacity: 0 !important; height: 0 !important; width: 0 !important; margin: 0 !important; padding: 0 !important;")}),['div[role="group"] > div:first-child:not([class])','div[role="group"] > span:first-child:not([class])',".mdc-form-field__label",".mdc-text-field__label",".mdc-select__label","label:not([for])","div:not([class]):not([id])","span:not([class]):not([id])"].forEach(e=>{try{o.querySelectorAll(e).forEach(e=>{var t;const o=null===(t=e.textContent)||void 0===t?void 0:t.trim().toLowerCase();o&&i.includes(o)&&(e.style.cssText="display: none !important;")})}catch(e){}}),o.querySelectorAll('[class*="mdc-"]').forEach(e=>{var t;const o=null===(t=e.textContent)||void 0===t?void 0:t.trim().toLowerCase();o&&i.includes(o)&&0===e.children.length&&(e.classList.contains("mdc-floating-label")||e.classList.contains("mdc-form-field__label")||e.classList.contains("mdc-text-field__label"))&&(e.style.cssText="display: none !important;")}),setTimeout(()=>{var e;if("undefined"==typeof document)return;const t=document.createTreeWalker(o,NodeFilter.SHOW_TEXT,null),n=[];let r;for(;r=t.nextNode();){const t=null===(e=r.textContent)||void 0===e?void 0:e.trim().toLowerCase();t&&i.includes(t)&&n.push(r)}n.forEach(e=>{e.parentNode&&(e.textContent="")})},50)}static getCleanFormStyles(){return"\n      /* Ultra-aggressive label hiding */\n      .ultra-clean-form ha-form label,\n      .ultra-clean-form ha-form .label,\n      .ultra-clean-form ha-form .mdc-floating-label,\n      .ultra-clean-form ha-form .mdc-text-field__label,\n      .ultra-clean-form ha-form .mdc-select__label,\n      .ultra-clean-form ha-form .mdc-form-field__label,\n      .ultra-clean-form ha-form .ha-form-label,\n      .ultra-clean-form ha-form .mdc-notched-outline__leading,\n      .ultra-clean-form ha-form .mdc-notched-outline__notch,\n      .ultra-clean-form ha-form .mdc-notched-outline__trailing,\n      .ultra-clean-form ha-form .mdc-line-ripple {\n        display: none !important;\n        visibility: hidden !important;\n        opacity: 0 !important;\n        height: 0 !important;\n        width: 0 !important;\n        margin: 0 !important;\n        padding: 0 !important;\n        font-size: 0 !important;\n        line-height: 0 !important;\n      }\n\n      /* Override any existing label styles completely */\n      .ultra-clean-form label,\n      .ultra-clean-form .ultra-clean-form label *,\n      .ultra-clean-form ha-form label,\n      .ultra-clean-form ha-form label * {\n        display: none !important;\n        visibility: hidden !important;\n        opacity: 0 !important;\n        height: 0 !important;\n        width: 0 !important;\n        margin: 0 !important;\n        padding: 0 !important;\n        border: none !important;\n        outline: none !important;\n        background: none !important;\n        font-size: 0 !important;\n        line-height: 0 !important;\n        position: absolute !important;\n        left: -9999px !important;\n        top: -9999px !important;\n        z-index: -1 !important;\n        pointer-events: none !important;\n      }\n\n      /* Hide any text that could be a redundant label */\n      .ultra-clean-form ha-form div:not([class]):not([id]),\n      .ultra-clean-form ha-form span:not([class]):not([id]),\n      .ultra-clean-form ha-form p:not([class]):not([id]) {\n        font-size: 0 !important;\n        line-height: 0 !important;\n        color: transparent !important;\n        height: 0 !important;\n        overflow: hidden !important;\n      }\n\n      /* Make sure form inputs still work */\n      .ultra-clean-form ha-form input,\n      .ultra-clean-form ha-form select,\n      .ultra-clean-form ha-form textarea,\n      .ultra-clean-form ha-form ha-entity-picker,\n      .ultra-clean-form ha-form ha-icon-picker,\n      .ultra-clean-form ha-form ha-selector,\n      .ultra-clean-form ha-form .mdc-text-field,\n      .ultra-clean-form ha-form .mdc-select,\n      .ultra-clean-form ha-form .mdc-switch {\n        font-size: 14px !important;\n        line-height: normal !important;\n        color: var(--primary-text-color) !important;\n        height: auto !important;\n        width: auto !important;\n        margin-top: 0 !important;\n        border-radius: 8px !important;\n      }\n\n      /* Ensure dropdowns work */\n      .ultra-clean-form ha-form .mdc-select__selected-text,\n      .ultra-clean-form ha-form .mdc-select__dropdown-icon {\n        font-size: 14px !important;\n        color: var(--primary-text-color) !important;\n        opacity: 1 !important;\n        height: auto !important;\n        width: auto !important;\n      }\n\n      /* Style field titles and descriptions consistently */\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n       \n        margin-bottom: 4px !important;\n        display: block !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        display: block !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        color: var(--primary-color) !important;\n        color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)) !important;\n        text-transform: uppercase !important;\n        letter-spacing: 0.5px !important;\n      }\n    "}static cleanupRedundantLabels(e){r.aggressiveCleanup(e)}static renderField(e,t,i,n,a,s){return o.qy`
      <div class="form-field-container">
        <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
          ${e}
        </div>
        <div
          class="field-description"
          style="font-size: 13px; font-weight: 400; margin-bottom: 12px; color: var(--secondary-text-color);"
        >
          ${t}
        </div>
        ${r.renderCleanForm(i,n,a,s)}
      </div>
    `}static createSchemaItem(e,t){return{name:e,selector:t}}static renderSection(e,t,i){return o.qy`
      <div
        class="settings-section"
        style="background: var(--secondary-background-color); border-radius: 8px; padding: 16px; margin-bottom: 32px;"
      >
        <div
          class="section-title"
          style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
        >
          ${e}
        </div>
        ${t?o.qy`
              <div
                class="field-description"
                style="font-size: 13px; font-weight: 400; margin-bottom: 16px; color: var(--secondary-text-color);"
              >
                ${t}
              </div>
            `:""}
        ${i.map(e=>o.qy`
            <div style="margin-bottom: 16px;">
              ${r.renderField(e.title,e.description,e.hass,e.data,e.schema,e.onChange)}
            </div>
          `)}
      </div>
    `}static injectCleanFormStyles(){return o.qy`
      <style>
        ${r.getCleanFormStyles()}
      </style>
    `}}function a(e){const t=e.detail;if(t&&"string"==typeof t.value)return t.value;const i=e.target;return i&&"string"==typeof i.value?i.value:void 0}r.activeObservers=new Map,r.cleanupQueue=new Set},3297(e,t,i){i.d(t,{Bc:()=>a,HE:()=>s});var o=i(3496),n=/*#__PURE__*/i(3361),r=/*#__PURE__*/i(1001);function a(e,t,i){const o=i?{signal:i}:{};let n=1,r=0,a=0,s=0,l=!1,c=!1,d=0,p=0,m=0,u=0;const h=()=>{e.style.transform=`translate(${r}px, ${a}px) scale(${n})`,e.style.transformOrigin="center center",e.style.transition=l||c?"none":"transform 0.2s ease"},g=(e,t)=>{const i=e.clientX-t.clientX,o=e.clientY-t.clientY;return Math.sqrt(i*i+o*o)};t.addEventListener("touchstart",e=>{e.touches.length>1&&e.preventDefault()},{passive:!1}),t.addEventListener("touchmove",e=>{e.touches.length>1&&e.preventDefault()},{passive:!1});const v=()=>{if(n>1){const{maxX:t,maxY:i}=(()=>{const t=e.getBoundingClientRect(),i=t.width*n,o=t.height*n;return{maxX:Math.max(0,(i-window.innerWidth)/2),maxY:Math.max(0,(o-window.innerHeight)/2)}})();r=Math.max(-t,Math.min(t,r)),a=Math.max(-i,Math.min(i,a))}};e.addEventListener("touchstart",e=>{2===e.touches.length?(e.preventDefault(),e.stopPropagation(),l=!0,s=g(e.touches[0],e.touches[1])):1===e.touches.length&&n>1&&(m=e.touches[0].clientX,u=e.touches[0].clientY)},{passive:!1}),e.addEventListener("touchmove",e=>{if(l&&2===e.touches.length){e.preventDefault(),e.stopPropagation();const t=g(e.touches[0],e.touches[1]);s>0&&(n*=t/s,n=Math.max(1,Math.min(6,n)),n>1&&v(),h()),s=t}else if(1===e.touches.length&&n>1){e.preventDefault();const t=e.touches[0].clientX-m,i=e.touches[0].clientY-u;r+=t,a+=i,v(),h(),m=e.touches[0].clientX,u=e.touches[0].clientY}},{passive:!1}),e.addEventListener("touchend",t=>{0===t.touches.length?(l=!1,n<1.02&&(n=1,r=0,a=0),h(),e.style.cursor=n>1?"grab":"default"):1===t.touches.length&&l&&(l=!1,n<1.02&&(n=1,r=0,a=0),h())}),e.addEventListener("touchcancel",()=>{l=!1,n<1.02&&(n=1,r=0,a=0),h(),e.style.cursor=n>1?"grab":"default"}),e.addEventListener("mousedown",t=>{n>1&&(t.preventDefault(),c=!0,d=t.clientX,p=t.clientY,e.style.cursor="grabbing")}),document.addEventListener("mousemove",e=>{if(c&&n>1){e.preventDefault();const t=e.clientX-d,i=e.clientY-p;r+=t,a+=i,v(),h(),d=e.clientX,p=e.clientY}},o),document.addEventListener("mouseup",()=>{c&&(c=!1,n<1.02&&(n=1,r=0,a=0,h()),e.style.cursor=n>1?"grab":"default")},o),e.addEventListener("wheel",t=>{t.preventDefault();const i=t.deltaY>0?-.15:.15;n=Math.max(1,Math.min(6,n+i)),n<1.02?(n=1,r=0,a=0):n>1&&v(),h(),e.style.cursor=n>1?"grab":"default"},{passive:!1});let f=0;e.addEventListener("touchend",t=>{const i=Date.now(),o=i-f;if(o<300&&o>0&&0===t.touches.length)if(n>1)n=1,r=0,a=0,h(),e.style.cursor="default";else{const i=t.changedTouches[0],o=e.getBoundingClientRect(),s=i.clientX-o.left-o.width/2,l=i.clientY-o.top-o.height/2;n=2.5,r=-s*(n-1),a=-l*(n-1),v(),h(),e.style.cursor="grab"}f=i})}function s(e,t){var i,s,l;const c=t.entity;if(!c)return void o.f.error("No camera entity available");document.querySelectorAll('[id^="ultra-camera-fullscreen-"]').forEach(e=>{var t,i,o;return null!==(o=null===(i=(t=e)._ultraClose)||void 0===i?void 0:i.call(t))&&void 0!==o?o:e.remove()});const d=document.querySelector("home-assistant");null===(i=null==d?void 0:d.shadowRoot)||void 0===i||i.querySelectorAll('[id^="ultra-camera-fullscreen-"]').forEach(e=>{var t,i,o;return null!==(o=null===(i=(t=e)._ultraClose)||void 0===i?void 0:i.call(t))&&void 0!==o?o:e.remove()});const{host:p,zIndex:m}=function(e){var t;const i=(null===(t=null==e?void 0:e.closest)||void 0===t?void 0:t.call(e,".ultra-popup-portal"))?r.Mu.GRAPH_TOOLTIP:r.Mu.CAMERA_FULLSCREEN_OVERLAY,o=document.querySelector("home-assistant");return(null==o?void 0:o.shadowRoot)?{host:o.shadowRoot,zIndex:i}:{host:(0,n.I)(e,i).host,zIndex:i}}(t.anchor),u=m>=r.Mu.GRAPH_TOOLTIP?m:m+1,h="ultra-camera-fullscreen-"+Date.now(),g=document.createElement("div");g.id=h,g.style.cssText=`\n    position: fixed !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    background: rgba(0,0,0,0.95) !important;\n    z-index: ${m} !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    backdrop-filter: blur(10px) !important;\n    touch-action: none !important;\n    user-select: none !important;\n    -webkit-user-select: none !important;\n    -webkit-touch-callout: none !important;\n  `;const v=document.createElement("div");v.style.cssText="\n    position: relative !important;\n    width: 100vw !important;\n    height: 100vh !important;\n    overflow: hidden !important;\n    background: black !important;\n  ";const f=document.createElement("div");f.id=h+"-camera-container",f.style.cssText="\n    width: 100% !important;\n    height: 100% !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    min-height: 300px !important;\n    touch-action: none !important;\n    user-select: none !important;\n  ";const b=document.createElement("button");if(b.innerHTML="✕",b.style.cssText=`\n    position: absolute !important;\n    top: 20px !important;\n    right: 20px !important;\n    width: 50px !important;\n    height: 50px !important;\n    border: 3px solid rgba(255,255,255,0.7) !important;\n    background: rgba(0,0,0,0.8) !important;\n    color: white !important;\n    font-size: 30px !important;\n    font-weight: bold !important;\n    cursor: pointer !important;\n    border-radius: 50% !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    z-index: ${u} !important;\n    backdrop-filter: blur(4px) !important;\n    box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;\n    font-family: Arial, sans-serif !important;\n    line-height: 1 !important;\n    transition: all 0.2s ease !important;\n  `,!1!==t.showName){const e=document.createElement("div");e.style.cssText="\n      position: absolute !important;\n      top: 20px !important;\n      left: 20px !important;\n      padding: 10px 16px !important;\n      background: rgba(0,0,0,0.8) !important;\n      color: white !important;\n      border-radius: var(--uc-r-8, 8px) !important;\n      font-size: 16px !important;\n      font-weight: 500 !important;\n      backdrop-filter: blur(4px) !important;\n      text-shadow: 0 1px 2px rgba(0,0,0,0.8) !important;\n      border: 1px solid rgba(255,255,255,0.2) !important;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.4) !important;\n    ",e.textContent=t.name||c,v.appendChild(e)}v.appendChild(f),v.appendChild(b),g.appendChild(v),p.appendChild(g);const y=new AbortController,_=()=>{y.abort();const e=g._restoreViewport;e&&e(),w.disconnect(),f.replaceChildren(),g.remove(),document.removeEventListener("keydown",S),document.body.style.overflow=""};g._ultraClose=_;const x=()=>{g.removeAttribute("inert"),b.removeAttribute("inert"),g.style.pointerEvents="auto",b.style.pointerEvents="auto",b.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),_()},!0),g.addEventListener("click",e=>{e.target===g&&(e.stopPropagation(),e.preventDefault(),_())},!0)};x(),setTimeout(x,100);const w=new MutationObserver(e=>{e.forEach(e=>{if("attributes"===e.type&&"inert"===e.attributeName){const t=e.target;t!==g&&t!==b||(t.removeAttribute("inert"),t.style.pointerEvents="auto")}})});w.observe(g,{attributes:!0}),w.observe(b,{attributes:!0});const k=t.hass||e||(null===(s=document.querySelector("home-assistant"))||void 0===s?void 0:s.hass);let $=!1;if(k){const e=document.createElement("ha-camera-stream");e.setAttribute("data-camera-fullscreen",c),e.hass=k,e.stateObj=null===(l=k.states)||void 0===l?void 0:l[c],e.fitMode="contain",e.muted=!0,e.controls=!0===t.showControls,e.style.cssText="\n      width: 100vw !important;\n      height: 100vh !important;\n      display: block !important;\n      --video-max-height: 100vh !important;\n      transition: transform 0.2s ease !important;\n      cursor: grab !important;\n      touch-action: none !important;\n    ",f.replaceChildren(e),a(e,f,y.signal);const i=document.createElement("button");i.type="button",i.className="camera-fullscreen-audio",i.textContent="🔇",i.setAttribute("aria-label","Toggle audio"),i.style.cssText=`\n      position: absolute !important;\n      top: 20px !important;\n      right: 84px !important;\n      width: 50px !important;\n      height: 50px !important;\n      border: 3px solid rgba(255,255,255,0.7) !important;\n      background: rgba(0,0,0,0.8) !important;\n      color: white !important;\n      font-size: 22px !important;\n      cursor: pointer !important;\n      border-radius: 50% !important;\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center !important;\n      z-index: ${u} !important;\n      backdrop-filter: blur(4px) !important;\n      box-shadow: 0 4px 12px rgba(0,0,0,0.6) !important;\n      line-height: 1 !important;\n    `,i.addEventListener("click",t=>{t.stopPropagation(),t.preventDefault(),$=!$,e.muted=!$,i.textContent=$?"🔊":"🔇";const o=function(e){const t=[e],i=new Set;for(;t.length;){const e=t.shift();if(!e||i.has(e))continue;if(i.add(e),e instanceof HTMLVideoElement)return e;const o=e.shadowRoot;o&&t.push(o),t.push(...Array.from(e.children))}return null}(e);o&&(o.muted=!$,o.volume=$?1:0,o.paused&&o.play().catch(()=>{}))}),v.appendChild(i)}else{const e=document.createElement("img");e.src="",e.style.cssText="\n      width: 100vw !important;\n      height: 100vh !important;\n      display: block !important;\n      object-fit: contain !important;\n      cursor: grab !important;\n      touch-action: none !important;\n    ",f.replaceChildren(e),a(e,f,y.signal)}const S=e=>{"Escape"===e.key&&_()};document.addEventListener("keydown",S),document.body.style.overflow="hidden";const T=document.querySelector('meta[name="viewport"]'),C=(null==T?void 0:T.content)||"";T&&(T.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),g._restoreViewport=()=>{T&&(T.content=C)}}},3361(e,t,i){i.d(t,{I:()=>n});var o=/*#__PURE__*/i(1001);function n(e,t=o.Mu.DROPDOWN_MENU){var i;const n=null===(i=null==e?void 0:e.closest)||void 0===i?void 0:i.call(e,".ultra-popup-portal");return n instanceof HTMLElement?{host:n,zIndex:o.Mu.GRAPH_TOOLTIP}:{host:document.body,zIndex:t}}},1299(e,t,i){i.d(t,{D:()=>a});var o=i(6752),n=/*#__PURE__*/i(7804),r=i(8504);const a=(0,n.u$)(class extends n.WL{constructor(){super(...arguments),this.key=o.s6}render(e,t){return this.key=e,t}update(e,[t,i]){return t!==this.key&&((0,r.mY)(e),this.key=t),i}})}};