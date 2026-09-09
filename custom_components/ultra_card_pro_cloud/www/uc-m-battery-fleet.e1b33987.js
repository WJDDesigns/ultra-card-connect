/*! For license information please see uc-m-battery-fleet.e1b33987.js.LICENSE.txt */
export const __webpack_esm_ids__=[9735];export const __webpack_esm_modules__={5868(e,t,n){var r=n(2618),i=n(4791),o=n(1299),a=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let l=class extends r.WF{constructor(){super(...arguments),this.values=[],this.label="",this.description="",this.placeholder="",this.variant="primary",this.mode="free-text",this._entityPickerKey=0,this._entityFilter=e=>{const t=this.entityDomains;if(!(null==t?void 0:t.length))return!0;const n=("string"==typeof e?e:(null==e?void 0:e.entity_id)||"").split(".")[0]||"";return t.includes(n)}}_emit(e){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e},bubbles:!0,composed:!0}))}_remove(e){const t=(this.values||[]).filter(t=>t!==e);this._emit(t)}_addFreeText(e){const t=e.trim();if(!t)return;const n=[...this.values||[]];n.includes(t)||(n.push(t),this._emit(n))}_renderSelectAdd(){const e=new Set(this.values||[]),t=(this.selectOptions||[]).filter(t=>!e.has(t.value));return r.qy`
      <div class="uc-cl-select-add">
        <select
          class="uc-cl-select"
          aria-label=${this.selectAddLabel||"Add"}
          @change=${e=>{const t=e.target,n=t.value;if(t.value="",!n)return;const r=[...this.values||[]];r.includes(n)||(r.push(n),this._emit(r))}}
        >
          <option value="">${this.selectAddLabel||this.placeholder||"Add…"}</option>
          ${t.map(e=>r.qy`<option value=${e.value}>${e.label}</option>`)}
        </select>
      </div>
    `}_onEntityPicked(e){e.stopPropagation();const t=e.detail;let n="";const r=null==t?void 0:t.value;if("string"==typeof r?n=r.trim():r&&"object"==typeof r&&"string"==typeof r.entity&&(n=String(r.entity).trim()),!n)return;const i=[...this.values||[]];i.includes(n)||(i.push(n),this._entityPickerKey+=1,this._emit(i))}render(){const e=this.values||[],t="exclude"===this.variant;return r.qy`
      ${this.label?r.qy`<span class="uc-cl-label">${this.label}</span>`:r.s6}
      ${this.description?r.qy`<span class="uc-cl-desc">${this.description}</span>`:r.s6}
      <div class="uc-cl-chips">
        ${e.map(e=>r.qy`
            <div class="uc-cl-chip ${t?"exclude":""}" title=${e}>
              <span class="uc-cl-chip-label">${e}</span>
              <ha-icon
                class="uc-cl-chip-remove"
                icon="mdi:close"
                @click=${()=>this._remove(e)}
              ></ha-icon>
            </div>
          `)}
      </div>
      ${"entity"===this.mode&&this.hass?(0,o.D)(this._entityPickerKey,r.qy`
              <ha-entity-picker
                .hass=${this.hass}
                .value=""
                .label=${this.placeholder||"Add entity"}
                .entityFilter=${this._entityFilter}
                @value-changed=${this._onEntityPicked}
              ></ha-entity-picker>
            `):"select"===this.mode?this._renderSelectAdd():r.qy`
            <div class="uc-cl-input-row">
              <input
                class="uc-cl-input"
                type="text"
                placeholder=${this.placeholder}
                @keydown=${e=>{"Enter"===e.key&&(e.preventDefault(),this._addFreeText(e.target.value),e.target.value="")}}
              />
              <button
                type="button"
                class="uc-cl-add"
                title="Add"
                @click=${e=>{const t=e.target.closest(".uc-cl-input-row"),n=null==t?void 0:t.querySelector("input");n&&(this._addFreeText(n.value),n.value="")}}
              >
                <ha-icon icon="mdi:plus"></ha-icon>
              </button>
            </div>
          `}
    `}};l.styles=r.AH`
    :host {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
    .uc-cl-label {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-bottom: 4px;
      display: block;
    }
    .uc-cl-desc {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin-bottom: 12px;
      opacity: 0.85;
      line-height: 1.4;
      display: block;
    }
    .uc-cl-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
      min-height: 8px;
    }
    .uc-cl-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-radius: 16px;
      font-size: 13px;
      max-width: 100%;
      position: relative;
      transition: padding 0.15s ease;
    }
    .uc-cl-chip.exclude {
      background: var(--error-color);
    }
    .uc-cl-chip:hover {
      padding-right: 30px;
    }
    .uc-cl-chip-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 220px;
    }
    .uc-cl-chip-remove {
      cursor: pointer;
      font-size: 16px;
      opacity: 0;
      position: absolute;
      right: 8px;
      transition: opacity 0.15s ease;
      --mdc-icon-size: 16px;
    }
    .uc-cl-chip:hover .uc-cl-chip-remove {
      opacity: 1;
    }
    .uc-cl-input-row {
      display: flex;
      gap: 8px;
      align-items: stretch;
    }
    .uc-cl-input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
      font-size: 14px;
    }
    .uc-cl-add {
      padding: 8px 14px;
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .uc-cl-add ha-icon {
      --mdc-icon-size: 20px;
    }
    .uc-cl-select-add {
      display: flex;
    }
    .uc-cl-select {
      flex: 1;
      padding: 10px 12px;
      border: 2px dashed var(--divider-color);
      border-radius: 8px;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 14px;
      cursor: pointer;
      appearance: none;
      -webkit-appearance: none;
      background-image: linear-gradient(
        45deg,
        transparent 50%,
        var(--secondary-text-color) 50%
      ),
      linear-gradient(135deg, var(--secondary-text-color) 50%, transparent 50%);
      background-position:
        calc(100% - 18px) 50%,
        calc(100% - 12px) 50%;
      background-size: 6px 6px, 6px 6px;
      background-repeat: no-repeat;
      padding-right: 32px;
    }
    .uc-cl-select:hover,
    .uc-cl-select:focus {
      border-color: var(--primary-color);
      outline: none;
    }
  `,a([(0,i.MZ)({attribute:!1})],l.prototype,"hass",void 0),a([(0,i.MZ)({type:Array})],l.prototype,"values",void 0),a([(0,i.MZ)({type:String})],l.prototype,"label",void 0),a([(0,i.MZ)({type:String})],l.prototype,"description",void 0),a([(0,i.MZ)({type:String})],l.prototype,"placeholder",void 0),a([(0,i.MZ)({type:String})],l.prototype,"variant",void 0),a([(0,i.MZ)({type:String})],l.prototype,"mode",void 0),a([(0,i.MZ)({type:Array})],l.prototype,"entityDomains",void 0),a([(0,i.MZ)({type:Array})],l.prototype,"selectOptions",void 0),a([(0,i.MZ)({type:String})],l.prototype,"selectAddLabel",void 0),a([(0,i.wk)()],l.prototype,"_entityPickerKey",void 0),l=a([(0,i.EM)("ultra-chip-list")],l)},421(e,t,n){var r=n(2618),i=n(4791),o=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let a=class extends r.WF{constructor(){super(...arguments),this.label="",this.description="",this.value="",this.disabled=!1}_onChange(e){var t,n;const r=null!==(n=null===(t=e.detail)||void 0===t?void 0:t.value)&&void 0!==n?n:"";this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:r},bubbles:!0,composed:!0}))}render(){return r.qy`
      ${this.label?r.qy`<span class="uc-if-label">${this.label}</span>`:r.s6}
      ${this.description?r.qy`<span class="uc-if-desc">${this.description}</span>`:r.s6}
      <ha-icon-picker
        .hass=${this.hass}
        .value=${this.value||""}
        ?disabled=${this.disabled}
        @value-changed=${this._onChange}
      ></ha-icon-picker>
    `}};a.styles=r.AH`
    :host {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
    .uc-if-label {
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-bottom: 4px;
      display: block;
    }
    .uc-if-desc {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin-bottom: 12px;
      opacity: 0.85;
      line-height: 1.4;
      display: block;
    }
    ha-icon-picker {
      display: block;
      width: 100%;
      --mdc-theme-primary: var(--primary-color);
    }
  `,o([(0,i.MZ)({attribute:!1})],a.prototype,"hass",void 0),o([(0,i.MZ)({type:String})],a.prototype,"label",void 0),o([(0,i.MZ)({type:String})],a.prototype,"description",void 0),o([(0,i.MZ)({type:String})],a.prototype,"value",void 0),o([(0,i.MZ)({type:Boolean})],a.prototype,"disabled",void 0),a=o([(0,i.EM)("ultra-icon-field")],a)},3909(e,t,n){var r=n(2618),i=n(4791),o=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a};let a=class extends r.WF{constructor(){super(...arguments),this.value="",this.options=[],this.label="",this.description="",this.disabled=!1}_select(e){this.disabled||e===this.value||this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:e},bubbles:!0,composed:!0}))}_resolveColumns(){var e,t;if(this.columns&&this.columns>0)return this.columns;const n=null!==(t=null===(e=this.options)||void 0===e?void 0:e.length)&&void 0!==t?t:0;return 4===n?2:6===n?3:8===n?4:9===n?3:void 0}render(){const e=Array.isArray(this.options)?this.options:[],t=this._resolveColumns(),n=t?`--uc-seg-cols: ${t};`:"";return r.qy`
      ${this.label?r.qy`<span class="uc-seg-label">${this.label}</span>`:r.s6}
      ${this.description?r.qy`<span class="uc-seg-desc">${this.description}</span>`:r.s6}
      <div
        class="uc-seg-row ${t?"uc-seg-grid":""}"
        style=${n}
        role="tablist"
      >
        ${e.map(e=>r.qy`
            <button
              type="button"
              class="uc-seg-btn"
              role="tab"
              aria-selected=${this.value===e.value}
              ?data-active=${this.value===e.value}
              ?disabled=${this.disabled}
              @click=${()=>this._select(e.value)}
            >
              ${e.icon?r.qy`<ha-icon icon=${e.icon}></ha-icon>`:r.s6}
              <span>${e.label}</span>
            </button>
          `)}
      </div>
    `}};a.styles=r.AH`
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
  `,o([(0,i.MZ)({type:String})],a.prototype,"value",void 0),o([(0,i.MZ)({type:Array})],a.prototype,"options",void 0),o([(0,i.MZ)({type:String})],a.prototype,"label",void 0),o([(0,i.MZ)({type:String})],a.prototype,"description",void 0),o([(0,i.MZ)({type:Boolean})],a.prototype,"disabled",void 0),o([(0,i.MZ)({type:Number})],a.prototype,"columns",void 0),a=o([(0,i.EM)("ultra-segmented")],a)},7318(e,t,n){n.d(t,{UltraBatteryFleetModule:()=>q});var r=n(2618),i=n(7475),o=n(6478),a=n(3488),l=n(1671),s=n(6673);const c=new s.p,d=new Set(["unavailable","unknown","none","","null"]),u={manual:0,sensor:1,attribute:2,binary_sensor:3};function p(e){if(null==e)return null;const t=String(e).trim().toLowerCase();if(d.has(t))return null;const n=Number(e);return Number.isFinite(n)?n:null}function h(e){return Math.max(0,Math.min(100,e))}function g(e){const t=e.indexOf(".");return-1===t?e:e.slice(t+1)}function y(e){const t=e.indexOf(".");return-1===t?"":e.slice(0,t)}function b(e){let t=g(e).toLowerCase();return t=t.replace(/_battery_level$/,"").replace(/_battery_percent(age)?$/,"").replace(/_battery_state$/,"").replace(/_battery$/,"").replace(/_batterylevel$/,""),t.replace(/[^a-z0-9]/g,"")}function f(e){const t=e.trim(),n=t.replace(/\s+battery(\s+(level|percentage|percent|state))?$/i,"");return n.length>=2?n:t}function v(e,t){if(null===e)return"mdi:battery-unknown";const n=10*Math.round(h(e)/10);return t?`mdi:battery-charging-${Math.max(10,n)}`:n<=0?"mdi:battery-alert-variant-outline":n>=100?"mdi:battery":`mdi:battery-${n}`}function _(e,t,n,r){var i;if(t){if(!0===t.is_charging)return!0;if(!0===t.battery_charging)return!0;if(!0===t.charging)return!0;const e=null!==(i=t.battery_status)&&void 0!==i?i:t.charging_status;if("string"==typeof e&&/charg/i.test(e)&&!/not\s*charg|discharg/i.test(e))return!0}const o=n.deviceOf(e);if(o&&r.byDevice.get(o))return!0;const a=b(e);return!!a&&!0===r.byBase.get(a)}function m(e,t){const n=null==e?void 0:e.states;if(!n||!e)return[];const r=e,i=(0,s.W)(t);return c.read(i,[n,r.entities,r.devices,r.areas],i,()=>function(e,t){var n,r,i;const o=e.states,a=(null==t?void 0:t.discovery_mode)||"auto",l=function(e){const t=null!=e?e:void 0,n=null==t?void 0:t.entities,r=null==t?void 0:t.devices,i=null==t?void 0:t.areas,o=!!i&&Object.keys(i).length>0,a=new Map,l=e=>{const t=null==n?void 0:n[e],r=null==t?void 0:t.device_id;return"string"==typeof r&&r?r:void 0};return{deviceOf:l,areaOf:e=>{if(a.has(e))return a.get(e);let t;try{const o=null==n?void 0:n[e];let a="string"==typeof(null==o?void 0:o.area_id)?o.area_id:void 0;if(!a){const t=l(e),n=t?null==r?void 0:r[t]:void 0;"string"==typeof(null==n?void 0:n.area_id)&&(a=n.area_id)}if(a){const e=null==i?void 0:i[a];t={id:a,name:(null==e?void 0:e.name)||a}}}catch(e){t=void 0}return a.set(e,t),t},hasAreas:o}}(e),s=function(e,t){var n,r,i;const o=new Map,a=new Map;for(const l of Object.keys(e)){if(!l.startsWith("binary_sensor."))continue;const s=e[l];if(!s)continue;if("battery_charging"!==(null===(n=s.attributes)||void 0===n?void 0:n.device_class)&&!/_(battery_)?charging$/.test(g(l)))continue;const c="on"===s.state,d=t.deviceOf(l);d&&o.set(d,null!==(r=o.get(d))&&void 0!==r&&r||c);const u=b(l.replace(/_(battery_)?charging$/,""));u&&a.set(u,null!==(i=a.get(u))&&void 0!==i&&i||c)}return{byDevice:o,byBase:a}}(o,l),c=new Set(((null==t?void 0:t.hidden_entities)||[]).map(e=>String(e).trim()).filter(Boolean)),d=((null==t?void 0:t.exclude_patterns)||[]).map(e=>String(e).trim().toLowerCase()).filter(Boolean),m=new Set(((null==t?void 0:t.area_filter)||[]).map(e=>String(e).trim()).filter(Boolean)),x=(e,t)=>{if(c.has(e))return!0;if(0===d.length)return!1;const n=e.toLowerCase(),r=t.toLowerCase();return d.some(e=>n.includes(e)||r.includes(e))},w=new Map;if("auto"!==a)for(const e of(null==t?void 0:t.entities)||[]){const t=((null==e?void 0:e.entity)||"").trim();t&&w.set(t,e)}const k=[];for(const[e,t]of w){const a=o[e];if(!a)continue;const c=a.attributes,d=p(a.state),u=p(null==c?void 0:c.battery_level);let g,b=null;null!==d?b=h(d):null!==u?(b=h(u),g="battery_level"):"binary_sensor"===y(e)&&(b="on"===a.state?0:"off"===a.state?100:null);const m=_(e,c,l,s),x=l.areaOf(e);k.push({entityId:e,name:(null===(n=t.label)||void 0===n?void 0:n.trim())||f(String((null==c?void 0:c.friendly_name)||e)),level:b,icon:(null===(r=t.icon)||void 0===r?void 0:r.trim())||v(b,m),areaId:null==x?void 0:x.id,areaName:null==x?void 0:x.name,batteryType:(null===(i=t.battery_type)||void 0===i?void 0:i.trim())||void 0,source:"manual",attribute:g,charging:m})}if("manual"!==a){const e=!1!==(null==t?void 0:t.include_battery_level_attribute),n=!0===(null==t?void 0:t.include_binary_sensors);for(const t of Object.keys(o)){if(w.has(t))continue;const r=o[t];if(!r)continue;const i=r.attributes,a=String((null==i?void 0:i.friendly_name)||t);if(x(t,a))continue;const c=y(t),d=null==i?void 0:i.device_class;let u,g=null,b=null;if("sensor"===c&&"battery"===d){const e=p(r.state);if(null===e)continue;g=h(e),b="sensor"}else if(n&&"binary_sensor"===c&&"battery"===d){if("on"!==r.state&&"off"!==r.state)continue;g="on"===r.state?0:100,b="binary_sensor"}else if(e){const e=p(null==i?void 0:i.battery_level);if(null===e)continue;g=h(e),b="attribute",u="battery_level"}if(null===b)continue;const $=l.areaOf(t);if(m.size>0&&(!$||!m.has($.id)))continue;const S=_(t,i,l,s);k.push({entityId:t,name:f(a),level:g,icon:v(g,S),areaId:null==$?void 0:$.id,areaName:null==$?void 0:$.name,source:b,attribute:u,charging:S})}}return function(e,t){const n=new Map;for(const r of e){const e=t.deviceOf(r.entityId)||`name:${b(r.entityId)}`,i=n.get(e);i?i.push(r):n.set(e,[r])}const r=new Set;for(const e of n.values()){let t=Number.POSITIVE_INFINITY;for(const n of e)t=Math.min(t,u[n.source]);for(const n of e)u[n.source]===t&&r.add(n.entityId)}const i=new Set;return e.filter(e=>!(!r.has(e.entityId)||i.has(e.entityId)||(i.add(e.entityId),0)))}(k,l)}(e,t))}function x(e,t){return"binary_sensor"===e.source?function(e){if(!e)return[];const t=[];for(const n of e)"on"===n.state?t.push({t:n.t,v:0}):"off"===n.state&&t.push({t:n.t,v:100});return t}(t):e.attribute?(0,l.f0)(t,{attribute:e.attribute}):(0,l.f0)(t)}function w(e,t){if(e.length<=t)return[...e];const n=[],r=(e.length-1)/(t-1);for(let i=0;i<t;i++){const t=e[Math.round(i*r)];t&&n.push(t)}return n}function k(e,t,n){return null===e?0:e<=t?100:e<=n?50+(n-e)/Math.max(n-t,1)*50:50*(1-(e-n)/Math.max(100-n,1))}function $(e,t){if(null===e)return 0;if(e<=0)return 100;const n=Math.max(t,1);return 100*Math.exp(-e/n)}function S(e,t){if(!1===(null==t?void 0:t.predict))return{kind:"off"};if("charging"===e.status)return{kind:"charging"};if("none"===e.confidence||null===e.daysRemaining)return{kind:"gathering"};const n=e.daysRemaining;return n<=.75?{kind:"now"}:n<14?{kind:"days",value:Math.max(1,Math.round(n))}:n<60?{kind:"weeks",value:Math.max(2,Math.round(n/7))}:n<183?{kind:"months",value:Math.max(2,Math.round(n/30.44))}:{kind:"beyond"}}function M(e){if(null===e.ratePerDay||"none"===e.confidence)return null;const t=e.ratePerDay;return t>=10?Math.round(t):Math.round(10*t)/10}n(5868),n(3909),n(421),n(7921);class q extends i.m{constructor(){super(...arguments),this.metadata={type:"battery_fleet",title:"Battery Fleet",description:"Ranked battery health with drain-rate analysis and replacement predictions",author:"WJD Designs",version:"1.0.0",icon:"mdi:battery-heart-variant",category:"data",tags:["pro","premium","battery","fleet","prediction","maintenance","devices","forecast"]},this._expandedRows=new Set,this._discovered=new Map}createDefault(e,t){return{id:e||this.generateId("battery_fleet"),type:"battery_fleet",discovery_mode:"auto",entities:[],exclude_patterns:[],hidden_entities:[],include_battery_level_attribute:!0,include_binary_sensors:!1,area_filter:[],history_days:14,predict_replacement:!0,replacement_floor:5,min_confidence_hours:12,title:"",show_title:!0,layout:"table",sort_mode:"urgency",max_items:25,group_by_area:!1,show_summary_bar:!0,show_sparkline:!0,show_drain_rate:!0,show_eta:!0,show_charging_indicator:!0,show_only_problems:!1,critical_threshold:10,low_threshold:25,urgent_days:14,critical_color:"",low_color:"",ok_color:"",charging_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=[...super.validate(e).errors],n=e;return"manual"!==n.discovery_mode||n.entities&&0!==n.entities.length||t.push((0,o.kg)("editor.battery_fleet.error_manual_empty","en","Add at least one battery entity, or switch discovery to Auto or Both.")),"number"==typeof n.critical_threshold&&"number"==typeof n.low_threshold&&n.critical_threshold>n.low_threshold&&t.push((0,o.kg)("editor.battery_fleet.error_thresholds","en","The critical threshold must be lower than the low threshold.")),{valid:0===t.length,errors:t}}getRuntimeEntityIds(e){const t=e,n=new Set(this._discovered.get(t.id)||[]);for(const e of t.entities||[])(null==e?void 0:e.entity)&&n.add(e.entity);return[...n]}renderGeneralTab(e,t,n,i){var l;const s=e,c=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";if(!(0,a.gf)(t))return(0,a.b5)(c,(0,o.kg)("editor.battery_fleet.pro_description",c,"Battery Fleet reads recorder history to measure how fast every battery in your home is draining, then ranks them by how soon they need replacing."));const d=s.discovery_mode||"auto",u="manual"!==d,p="auto"!==d;return r.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getStyles()}
      </style>
      <div class="module-general-settings">
        ${this._renderDevicesSection(s,t,n,i,c,u,p)}
        ${this._renderPredictionSection(s,t,i,c)}
        ${this._renderDisplaySection(s,t,i,c)}
        ${this._renderThresholdsSection(s,t,i,c)}
        ${this._renderColorsSection(s,t,i,c)}
      </div>
    `}_renderDevicesSection(e,t,n,i,a,l,s){return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,o.kg)("editor.battery_fleet.devices_section",a,"Devices")}
        </div>
        <div class="uc-bf-section-desc">
          ${(0,o.kg)("editor.battery_fleet.devices_section_desc",a,"Auto-discovery finds every battery in Home Assistant with no configuration. Switch to Manual to curate the list yourself.")}
        </div>

        ${this.renderSegmentedField((0,o.kg)("editor.battery_fleet.discovery_mode",a,"Discovery"),(0,o.kg)("editor.battery_fleet.discovery_mode_desc",a,"Auto scans Home Assistant, Manual uses only the list below, Both merges them."),e.discovery_mode||"auto",[{value:"auto",label:(0,o.kg)("editor.battery_fleet.mode_auto",a,"Auto"),icon:"mdi:auto-fix"},{value:"manual",label:(0,o.kg)("editor.battery_fleet.mode_manual",a,"Manual"),icon:"mdi:format-list-bulleted"},{value:"both",label:(0,o.kg)("editor.battery_fleet.mode_both",a,"Both"),icon:"mdi:set-merge"}],e=>{i({discovery_mode:e||"auto"}),this.triggerPreviewUpdate()},3)}
        ${l?this._renderDiscoveryPreview(e,t,a):r.s6}
        ${l?this._renderAutoOptions(e,t,i,a):r.s6}
        ${s?this._renderManualRows(e,t,n,i,a):r.s6}
      </div>
    `}_renderDiscoveryPreview(e,t,n){let i=[];try{i=m(t,e)}catch(e){i=[]}const a=i.filter(e=>"manual"!==e.source),l=a.slice(0,8),s=a.length-l.length;return 0===a.length?r.qy`
        <div class="uc-bf-panel uc-bf-panel--empty" data-uc-role="pane">
          <div class="uc-bf-panel-head">
            <ha-icon icon="mdi:battery-off-outline"></ha-icon>
            <span
              >${(0,o.kg)("editor.battery_fleet.found_none",n,"No batteries discovered yet")}</span
            >
          </div>
          <div class="uc-bf-panel-body">
            ${(0,o.kg)("editor.battery_fleet.found_none_desc",n,"Nothing matched. Try turning on battery_level attributes or battery binary sensors below, relax your exclude patterns, or add entities manually.")}
          </div>
        </div>
      `:r.qy`
      <div class="uc-bf-panel" data-uc-role="pane">
        <div class="uc-bf-panel-head">
          <ha-icon icon="mdi:battery-heart-variant"></ha-icon>
          <span
            >${(0,o.kg)("editor.battery_fleet.found_count",n,"Found {count} batteries").replace("{count}",String(a.length))}</span
          >
        </div>
        <div class="uc-bf-preview-chips">
          ${l.map(e=>r.qy`
              <span class="uc-bf-preview-chip" title="${e.entityId}">
                <ha-icon icon="${e.icon}"></ha-icon>
                <span class="uc-bf-preview-chip-name">${e.name}</span>
                <span class="uc-bf-preview-chip-pct"
                  >${null===e.level?"—":`${Math.round(e.level)}%`}</span
                >
              </span>
            `)}
          ${s>0?r.qy`<span class="uc-bf-preview-more"
                >${(0,o.kg)("editor.battery_fleet.found_more",n,"+{count} more").replace("{count}",String(s))}</span
              >`:r.s6}
        </div>
      </div>
    `}_renderAutoOptions(e,t,n,i){const a=function(e){const t=null!=e?e:void 0,n=null==t?void 0:t.areas;if(!n)return[];const r=[];for(const[e,t]of Object.entries(n))e&&r.push({value:e,label:(null==t?void 0:t.name)||e});return r.sort((e,t)=>e.label.localeCompare(t.label,void 0,{sensitivity:"base"}))}(t),l=(e.hidden_entities||[]).length;return r.qy`
      ${this.renderSettingsSection("","",[{title:(0,o.kg)("editor.battery_fleet.include_attribute",i,"Include battery_level attributes"),description:(0,o.kg)("editor.battery_fleet.include_attribute_desc",i,"Picks up vacuums, phones, trackers and other devices that report their battery as an attribute instead of a sensor."),hass:t,data:{include_battery_level_attribute:!1!==e.include_battery_level_attribute},schema:[this.booleanField("include_battery_level_attribute")],onChange:e=>{var t;n({include_battery_level_attribute:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.include_battery_level_attribute)}),this.triggerPreviewUpdate()}},{title:(0,o.kg)("editor.battery_fleet.include_binary",i,"Include battery binary sensors"),description:(0,o.kg)("editor.battery_fleet.include_binary_desc",i,'Devices that only report "low" or "OK". They show as 0% or 100% and cannot be predicted.'),hass:t,data:{include_binary_sensors:!0===e.include_binary_sensors},schema:[this.booleanField("include_binary_sensors")],onChange:e=>{var t;n({include_binary_sensors:!0===(null===(t=e.detail.value)||void 0===t?void 0:t.include_binary_sensors)}),this.triggerPreviewUpdate()}}])}
      ${this.renderChipListField((0,o.kg)("editor.battery_fleet.exclude_patterns",i,"Exclude patterns"),(0,o.kg)("editor.battery_fleet.exclude_patterns_desc",i,"Any battery whose entity id or name contains one of these words is skipped. Case-insensitive."),t,e.exclude_patterns||[],e=>{n({exclude_patterns:e.map(e=>e.trim().toLowerCase()).filter(Boolean)}),this.triggerPreviewUpdate()},{mode:"free-text",variant:"exclude",placeholder:(0,o.kg)("editor.battery_fleet.exclude_placeholder",i,"e.g. test, spare, backup")})}
      ${a.length>0?this.renderChipListField((0,o.kg)("editor.battery_fleet.area_filter",i,"Limit to areas"),(0,o.kg)("editor.battery_fleet.area_filter_desc",i,"Leave empty to include every area. Devices with no area are excluded once a filter is set."),t,(e.area_filter||[]).slice(),e=>{n({area_filter:e}),this.triggerPreviewUpdate()},{mode:"select",selectOptions:a,selectAddLabel:(0,o.kg)("editor.battery_fleet.area_add",i,"Add area")}):r.s6}
      ${this.renderChipListField((0,o.kg)("editor.battery_fleet.hidden_entities",i,"Dismissed devices"),l>0?(0,o.kg)("editor.battery_fleet.hidden_entities_desc",i,"{count} device(s) dismissed from the card. Remove a chip to bring one back.").replace("{count}",String(l)):(0,o.kg)("editor.battery_fleet.hidden_entities_empty",i,"Nothing dismissed. Use the × on a row in the live preview to hide a device."),t,e.hidden_entities||[],e=>{n({hidden_entities:e}),this.triggerPreviewUpdate()},{mode:"entity",variant:"exclude"})}
      ${l>0?r.qy`
            <div class="uc-bf-inline-action">
              <button
                type="button"
                class="uc-bf-btn uc-bf-btn--ghost"
                @click=${()=>{n({hidden_entities:[]}),this.triggerPreviewUpdate()}}
              >
                <ha-icon icon="mdi:eye-refresh-outline"></ha-icon>
                ${(0,o.kg)("editor.battery_fleet.restore_all",i,"Restore all dismissed")}
              </button>
            </div>
          `:r.s6}
    `}_renderManualRows(e,t,n,i,a){const l=e.entities||[];return r.qy`
      <div class="uc-bf-subhead">
        ${(0,o.kg)("editor.battery_fleet.manual_heading",a,"Manual batteries")}
      </div>
      <div class="uc-bf-subdesc">
        ${(0,o.kg)("editor.battery_fleet.manual_heading_desc",a,"Add any entity that reports a battery percentage. Expand a row to set a friendly label, icon and battery type.")}
      </div>

      ${0===l.length?r.qy`
            <div class="uc-bf-panel uc-bf-panel--empty" data-uc-role="pane">
              <div class="uc-bf-panel-body">
                ${(0,o.kg)("editor.battery_fleet.manual_empty",a,"No manual batteries yet. Add one below.")}
              </div>
            </div>
          `:l.map((r,o)=>this._renderManualRow(r,o,e,t,n,i,a))}

      <button
        type="button"
        class="uc-bf-btn uc-bf-btn--block"
        @click=${()=>{const t=[...e.entities||[]],n={id:this.generateId("bf_ent"),entity:""};t.push(n),this._expandedRows.add(n.id),i({entities:t}),this.triggerPreviewUpdate()}}
      >
        <ha-icon icon="mdi:plus"></ha-icon>
        ${(0,o.kg)("editor.battery_fleet.add_entity",a,"Add battery")}
      </button>
    `}_renderManualRow(e,t,n,i,a,l,s){var c,d,u,p;const h=this._expandedRows.has(e.id),g=e.entity?null===(c=null==i?void 0:i.states)||void 0===c?void 0:c[e.entity]:void 0,y=(null===(d=e.label)||void 0===d?void 0:d.trim())||(null===(u=null==g?void 0:g.attributes)||void 0===u?void 0:u.friendly_name)||e.entity||"",b=[];e.entity&&b.push(e.entity),(null===(p=e.battery_type)||void 0===p?void 0:p.trim())&&b.push(e.battery_type.trim());const f=e=>{const r=[...n.entities||[]],i=r[t];i&&(r[t]=Object.assign(Object.assign({},i),e),l({entities:r}),this.triggerPreviewUpdate())};return r.qy`
      <div class="entity-row" data-uc-role="pane">
        <ha-icon class="uc-bf-row-icon" icon=${e.icon||"mdi:battery-outline"}></ha-icon>
        <div class="entity-info ${e.entity?"":"empty"}">
          <div class="uc-bf-row-title">
            ${y||(0,o.kg)("editor.battery_fleet.row_no_entity",s,"No entity selected")}
          </div>
          ${b.length>0?r.qy`<div class="uc-bf-row-sub">${b.join(" · ")}</div>`:r.s6}
        </div>
        <ha-icon
          class="expand-icon ${h?"expanded":""}"
          icon="mdi:chevron-down"
          role="button"
          tabindex="0"
          title=${(0,o.kg)("editor.battery_fleet.row_edit",s,"Edit this battery")}
          @click=${()=>{h?this._expandedRows.delete(e.id):this._expandedRows.add(e.id),this.triggerPreviewUpdate(!0)}}
        ></ha-icon>
        <ha-icon
          class="delete-icon"
          icon="mdi:delete-outline"
          role="button"
          tabindex="0"
          title=${(0,o.kg)("editor.battery_fleet.row_delete",s,"Remove this battery")}
          @click=${()=>{const r=[...n.entities||[]];r.splice(t,1),this._expandedRows.delete(e.id),l({entities:r}),this.triggerPreviewUpdate()}}
        ></ha-icon>
      </div>

      ${h?r.qy`
            <div class="uc-bf-row-body">
              ${this.renderEntityPickerWithVariables(i,a,`bf_entity_${e.id}`,e.entity||"",e=>f({entity:e}),void 0,(0,o.kg)("editor.battery_fleet.row_entity",s,"Entity"))}
              ${this.renderFieldSection((0,o.kg)("editor.battery_fleet.row_label",s,"Label"),(0,o.kg)("editor.battery_fleet.row_label_desc",s,"Leave blank to use the entity name."),i,{label:e.label||""},[this.textField("label")],e=>{var t,n;return f({label:null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.label)&&void 0!==n?n:""})})}
              ${this.renderIconField((0,o.kg)("editor.battery_fleet.row_icon",s,"Icon"),(0,o.kg)("editor.battery_fleet.row_icon_desc",s,"Leave blank to use a battery icon that follows the level."),i,e.icon||"",e=>f({icon:e}))}
              ${this.renderFieldSection((0,o.kg)("editor.battery_fleet.row_battery_type",s,"Battery type"),(0,o.kg)("editor.battery_fleet.row_battery_type_desc",s,'A note for shopping day, e.g. "CR2032 x2" or "AA x4".'),i,{battery_type:e.battery_type||""},[this.textField("battery_type")],e=>{var t,n;return f({battery_type:null!==(n=null===(t=e.detail.value)||void 0===t?void 0:t.battery_type)&&void 0!==n?n:""})})}
            </div>
          `:r.s6}
    `}_renderPredictionSection(e,t,n,i){var a,l,s,c;const d=!1!==e.predict_replacement;return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,o.kg)("editor.battery_fleet.prediction_section",i,"Prediction")}
        </div>
        <div class="uc-bf-section-desc">
          ${(0,o.kg)("editor.battery_fleet.prediction_section_desc",i,'Predictions are measured from recorder history, not guessed. A battery needs a day or two of recorded drain before an estimate appears — until then the card honestly says "gathering data".')}
        </div>

        ${this.renderSettingsSection("","",[{title:(0,o.kg)("editor.battery_fleet.predict_replacement",i,"Predict replacement dates"),description:(0,o.kg)("editor.battery_fleet.predict_replacement_desc",i,"Measure each battery’s drain rate and project when it will need changing."),hass:t,data:{predict_replacement:d},schema:[this.booleanField("predict_replacement")],onChange:e=>{var t;n({predict_replacement:!1!==(null===(t=e.detail.value)||void 0===t?void 0:t.predict_replacement)}),this.triggerPreviewUpdate()}}])}
        ${d?this.renderConditionalFieldsGroup((0,o.kg)("editor.battery_fleet.prediction_tuning",i,"Prediction tuning"),r.qy`
                ${this.renderSliderField((0,o.kg)("editor.battery_fleet.history_days",i,"History window"),(0,o.kg)("editor.battery_fleet.history_days_desc",i,"How far back to read the recorder. Longer windows smooth out noise but cost more to load."),null!==(a=e.history_days)&&void 0!==a?a:14,14,1,30,1,e=>{n({history_days:e}),this.triggerPreviewUpdate()},(0,o.kg)("editor.battery_fleet.unit_days",i," days"))}
                ${this.renderSliderField((0,o.kg)("editor.battery_fleet.replacement_floor",i,"Replacement floor"),(0,o.kg)("editor.battery_fleet.replacement_floor_desc",i,'The percentage you consider "dead". Predictions count down to this, not to zero.'),null!==(l=e.replacement_floor)&&void 0!==l?l:5,5,0,30,1,e=>{n({replacement_floor:e}),this.triggerPreviewUpdate()},"%")}
                ${this.renderSliderField((0,o.kg)("editor.battery_fleet.min_confidence_hours",i,"Minimum evidence"),(0,o.kg)("editor.battery_fleet.min_confidence_hours_desc",i,"How many hours of observed draining are required before any estimate is shown. Lower values give faster but shakier predictions."),null!==(s=e.min_confidence_hours)&&void 0!==s?s:12,12,1,72,1,e=>{n({min_confidence_hours:e}),this.triggerPreviewUpdate()},(0,o.kg)("editor.battery_fleet.unit_hours",i," h"))}
                ${this.renderSliderField((0,o.kg)("editor.battery_fleet.urgent_days",i,"Urgent window"),(0,o.kg)("editor.battery_fleet.urgent_days_desc",i,"A battery projected to die within this many days is flagged urgent and sorted to the top."),null!==(c=e.urgent_days)&&void 0!==c?c:14,14,1,90,1,e=>{n({urgent_days:e}),this.triggerPreviewUpdate()},(0,o.kg)("editor.battery_fleet.unit_days",i," days"))}
              `):r.s6}
      </div>
    `}_renderDisplaySection(e,t,n,i){var a;return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,o.kg)("editor.battery_fleet.display_section",i,"Display")}
        </div>

        ${this.renderSegmentedField((0,o.kg)("editor.battery_fleet.layout",i,"Layout"),(0,o.kg)("editor.battery_fleet.layout_desc",i,"Table is the dense planning view, Cards is a tile grid, Compact is one line each."),e.layout||"table",[{value:"table",label:(0,o.kg)("editor.battery_fleet.layout_table",i,"Table"),icon:"mdi:table"},{value:"cards",label:(0,o.kg)("editor.battery_fleet.layout_cards",i,"Cards"),icon:"mdi:view-grid-outline"},{value:"compact",label:(0,o.kg)("editor.battery_fleet.layout_compact",i,"Compact"),icon:"mdi:format-list-text"}],e=>{n({layout:e||"table"}),this.triggerPreviewUpdate()},3)}
        ${this.renderSegmentedField((0,o.kg)("editor.battery_fleet.sort_mode",i,"Sort by"),(0,o.kg)("editor.battery_fleet.sort_mode_desc",i,"Urgency blends the current level with how fast it is falling."),e.sort_mode||"urgency",[{value:"urgency",label:(0,o.kg)("editor.battery_fleet.sort_urgency",i,"Urgency"),icon:"mdi:alert-decagram-outline"},{value:"level",label:(0,o.kg)("editor.battery_fleet.sort_level",i,"Level"),icon:"mdi:battery-30"},{value:"drain_rate",label:(0,o.kg)("editor.battery_fleet.sort_drain",i,"Drain rate"),icon:"mdi:trending-down"},{value:"name",label:(0,o.kg)("editor.battery_fleet.sort_name",i,"Name"),icon:"mdi:sort-alphabetical-ascending"}],e=>{n({sort_mode:e||"urgency"}),this.triggerPreviewUpdate()},2)}
        ${this.renderSliderField((0,o.kg)("editor.battery_fleet.max_items",i,"Maximum devices"),(0,o.kg)("editor.battery_fleet.max_items_desc",i,"How many devices to list. The summary bar always counts the whole fleet."),null!==(a=e.max_items)&&void 0!==a?a:25,25,1,100,1,e=>{n({max_items:e}),this.triggerPreviewUpdate()},"")}
        ${this.renderFieldSection((0,o.kg)("editor.battery_fleet.title",i,"Title"),(0,o.kg)("editor.battery_fleet.title_desc",i,'Header shown above the list. Leave blank for "Battery Fleet".'),t,{title:e.title||""},[this.textField("title")],e=>{var t,r;n({title:null!==(r=null===(t=e.detail.value)||void 0===t?void 0:t.title)&&void 0!==r?r:""}),this.triggerPreviewUpdate()})}
        ${this.renderSettingsSection("","",[this._toggle(t,n,"show_title",!1!==e.show_title,(0,o.kg)("editor.battery_fleet.show_title",i,"Show title"),(0,o.kg)("editor.battery_fleet.show_title_desc",i,"Display the header row.")),this._toggle(t,n,"show_summary_bar",!1!==e.show_summary_bar,(0,o.kg)("editor.battery_fleet.show_summary_bar",i,"Show fleet summary"),(0,o.kg)("editor.battery_fleet.show_summary_bar_desc",i,"The one-line roll-up with counts and the most urgent device.")),this._toggle(t,n,"show_eta",!1!==e.show_eta,(0,o.kg)("editor.battery_fleet.show_eta",i,"Show replacement estimate"),(0,o.kg)("editor.battery_fleet.show_eta_desc",i,'The "replace in ~12 days" column. Hidden automatically when there is not enough data.')),this._toggle(t,n,"show_drain_rate",!1!==e.show_drain_rate,(0,o.kg)("editor.battery_fleet.show_drain_rate",i,"Show drain rate"),(0,o.kg)("editor.battery_fleet.show_drain_rate_desc",i,"Percentage lost per day, measured from history.")),this._toggle(t,n,"show_sparkline",!1!==e.show_sparkline,(0,o.kg)("editor.battery_fleet.show_sparkline",i,"Show sparkline"),(0,o.kg)("editor.battery_fleet.show_sparkline_desc",i,"A tiny history graph per device. Skipped when there are too few samples.")),this._toggle(t,n,"show_charging_indicator",!1!==e.show_charging_indicator,(0,o.kg)("editor.battery_fleet.show_charging_indicator",i,"Show charging indicator"),(0,o.kg)("editor.battery_fleet.show_charging_indicator_desc",i,"Flag rechargeable devices that are charging right now and exclude them from urgency.")),this._toggle(t,n,"group_by_area",!0===e.group_by_area,(0,o.kg)("editor.battery_fleet.group_by_area",i,"Group by area"),(0,o.kg)("editor.battery_fleet.group_by_area_desc",i,"Split the list into area headings. Devices with no area are listed last.")),this._toggle(t,n,"show_only_problems",!0===e.show_only_problems,(0,o.kg)("editor.battery_fleet.show_only_problems",i,"Only show problems"),(0,o.kg)("editor.battery_fleet.show_only_problems_desc",i,"Hide healthy batteries so the card is empty when there is nothing to do."))])}
      </div>
    `}_toggle(e,t,n,r,i,o){const a=String(n);return{title:i,description:o,hass:e,data:{[a]:r},schema:[this.booleanField(a)],onChange:e=>{var n;t({[a]:!0===(null===(n=e.detail.value)||void 0===n?void 0:n[a])}),this.triggerPreviewUpdate()}}}_renderThresholdsSection(e,t,n,i){var a,l;return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,o.kg)("editor.battery_fleet.thresholds_section",i,"Thresholds")}
        </div>
        <div class="uc-bf-section-desc">
          ${(0,o.kg)("editor.battery_fleet.thresholds_section_desc",i,"Levels at or below these values are coloured and counted as problems.")}
        </div>
        ${this.renderSliderField((0,o.kg)("editor.battery_fleet.critical_threshold",i,"Critical"),(0,o.kg)("editor.battery_fleet.critical_threshold_desc",i,"At or below this percentage a battery is critical."),null!==(a=e.critical_threshold)&&void 0!==a?a:10,10,0,50,1,e=>{n({critical_threshold:e}),this.triggerPreviewUpdate()},"%")}
        ${this.renderSliderField((0,o.kg)("editor.battery_fleet.low_threshold",i,"Low"),(0,o.kg)("editor.battery_fleet.low_threshold_desc",i,"At or below this percentage a battery is low. Must be above the critical threshold."),null!==(l=e.low_threshold)&&void 0!==l?l:25,25,0,75,1,e=>{n({low_threshold:e}),this.triggerPreviewUpdate()},"%")}
      </div>
    `}_renderColorsSection(e,t,n,i){const a=[["critical_color",(0,o.kg)("editor.battery_fleet.color_critical",i,"Critical"),(0,o.kg)("editor.battery_fleet.color_critical_desc",i,"Batteries at or below the critical threshold."),"var(--error-color)"],["low_color",(0,o.kg)("editor.battery_fleet.color_low",i,"Low"),(0,o.kg)("editor.battery_fleet.color_low_desc",i,"Batteries at or below the low threshold."),"var(--warning-color)"],["ok_color",(0,o.kg)("editor.battery_fleet.color_ok",i,"Healthy"),(0,o.kg)("editor.battery_fleet.color_ok_desc",i,"Batteries with nothing to worry about."),"var(--success-color)"],["charging_color",(0,o.kg)("editor.battery_fleet.color_charging",i,"Charging"),(0,o.kg)("editor.battery_fleet.color_charging_desc",i,"Rechargeable devices currently charging."),"var(--info-color)"],["text_color",(0,o.kg)("editor.battery_fleet.color_text",i,"Text"),(0,o.kg)("editor.battery_fleet.color_text_desc",i,"Device names and percentages."),"var(--primary-text-color)"],["secondary_text_color",(0,o.kg)("editor.battery_fleet.color_secondary",i,"Secondary text"),(0,o.kg)("editor.battery_fleet.color_secondary_desc",i,"Drain rates, estimates and captions."),"var(--secondary-text-color)"],["card_background_color",(0,o.kg)("editor.battery_fleet.color_card_bg",i,"Row background"),(0,o.kg)("editor.battery_fleet.color_card_bg_desc",i,"Background behind each device row or tile."),"var(--card-background-color)"]];return r.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,o.kg)("editor.battery_fleet.colors_section",i,"Colors")}
        </div>
        ${a.map(([r,i,o,a])=>this.renderColorField(i,o,t,String(e[String(r)]||""),a,e=>{n({[String(r)]:e}),this.triggerPreviewUpdate()}))}
      </div>
    `}renderPreview(e,t,n,r){var i;const a=e,l=(null===(i=null==t?void 0:t.locale)||void 0===i?void 0:i.language)||"en";try{return this._renderPreviewBody(a,t,n,r,l)}catch(e){return this.renderGradientErrorState((0,o.kg)("editor.battery_fleet.err_render",l,"Battery Fleet could not render"),String((null==e?void 0:e.message)||e),"mdi:battery-alert-variant-outline")}}_renderPreviewBody(e,t,n,i,a){var s,c,d;if(!(null==t?void 0:t.states))return this.renderGradientErrorState((0,o.kg)("editor.battery_fleet.err_ha",a,"Waiting for Home Assistant"),(0,o.kg)("editor.battery_fleet.err_ha_desc",a,"Connecting to entity states…"),"mdi:battery-heart-variant");const u=m(t,e);if(this._discovered.set(e.id,u.map(e=>e.entityId)),0===u.length)return this._renderNoDevicesState(e,a);const p=!1!==e.predict_replacement||!1!==e.show_sparkline,h=Math.max(1,Math.min(30,null!==(s=e.history_days)&&void 0!==s?s:14));let g,y=!1,b=null;if(p){const n=function(e){return e.length<=80?e.map(e=>e.entityId):[...e].sort((e,t)=>{var n,r;return(null!==(n=e.level)&&void 0!==n?n:101)-(null!==(r=t.level)&&void 0!==r?r:101)}).slice(0,80).map(e=>e.entityId)}(u),r=function(e){return e.some(e=>!!e.attribute)}(u),i=Date.now(),o=l.ur.query(t,{key:`battery_fleet:${e.id}:${h}:${r?"attr":"state"}:${n.join(",")}`,entityIds:n,startMs:i-864e5*h,endMs:i,ttlMs:6e5,withAttributes:r},()=>this.triggerPreviewUpdate());g=o.data,y=o.loading&&0===o.fetchedAt,b=o.error}const f=function(e,t,n){var r,i,o,a,s,c,d;const u=!1!==(null==n?void 0:n.predict_replacement),p=Math.max(0,Math.min(90,null!==(r=null==n?void 0:n.replacement_floor)&&void 0!==r?r:5)),h=Math.max(1,null!==(i=null==n?void 0:n.min_confidence_hours)&&void 0!==i?i:12),g=Math.max(1,null!==(o=null==n?void 0:n.urgent_days)&&void 0!==o?o:14),y=null!==(a=null==n?void 0:n.critical_threshold)&&void 0!==a?a:10,b=null!==(s=null==n?void 0:n.low_threshold)&&void 0!==s?s:25,f=!1!==(null==n?void 0:n.show_charging_indicator),v=[];for(const n of e){const e=x(n,null==t?void 0:t.get(n.entityId)),r=e.length>=3?(0,l.Hv)(e,{floor:p}):null,i=e.length>=2?e[e.length-1].t-e[0].t:0,o=null!==(c=null==r?void 0:r.coverage)&&void 0!==c?c:0,a=i*o/36e5,s=null!==(d=null==r?void 0:r.ratePerHour)&&void 0!==d?d:0;let _=s>0?24*s:null;null!==_&&_<.05&&(_=null);const m=n.charging||f&&!0===(null==r?void 0:r.charging);let S="none";null!==_&&a>=h&&(S=a<2*h||o<.2?"low":a<4*h||o<.5?"medium":"high");let M,q=null,P=null;if(u&&"none"!==S&&null!==_&&null!==n.level){const e=n.level-p;q=e<=0?0:Math.min(e/_,3650),P=Date.now()+864e5*q}M=null===n.level?"unknown":m&&f?"charging":n.level<=y?"critical":n.level<=b?"low":"ok";const z=k(n.level,y,b),A=u?$(q,g):0;let C=.75*Math.max(z,A)+.25*Math.min(z,A);null===n.level?C=-1:m&&f&&(C*=.25),v.push(Object.assign(Object.assign({},n),{charging:m,ratePerDay:_,daysRemaining:q,replaceBy:P,confidence:S,urgency:C,status:M,series:w(e,48),observedHours:a,coverage:o}))}return v}(u,g,e),v=function(e,t){var n;const r=Math.max(1,null!==(n=null==t?void 0:t.urgent_days)&&void 0!==n?n:14),i={total:e.length,critical:0,low:0,ok:0,charging:0,unknown:0,replacingThisMonth:0,urgent:0,predicted:0,mostUrgent:null};for(const t of e){switch(t.status){case"critical":i.critical++;break;case"low":i.low++;break;case"charging":i.charging++;break;case"unknown":i.unknown++;break;default:i.ok++}"none"!==t.confidence&&i.predicted++,null!==t.daysRemaining&&"charging"!==t.status&&(t.daysRemaining<=30&&i.replacingThisMonth++,t.daysRemaining<=r&&i.urgent++),(!i.mostUrgent||t.urgency>i.mostUrgent.urgency)&&(i.mostUrgent=t)}return i.mostUrgent&&i.mostUrgent.urgency<=0&&(i.mostUrgent=null),i}(f,e),_=!0===e.show_only_problems?f.filter(t=>function(e,t){var n;const r=Math.max(1,null!==(n=null==t?void 0:t.urgent_days)&&void 0!==n?n:14);return"critical"===e.status||"low"===e.status||"unknown"===e.status||"charging"!==e.status&&null!==e.daysRemaining&&e.daysRemaining<=r}(t,e)):f,S=function(e,t){const n=[...e];switch(t){case"level":n.sort((e,t)=>{var n,r;return(null!==(n=e.level)&&void 0!==n?n:101)-(null!==(r=t.level)&&void 0!==r?r:101)||e.name.localeCompare(t.name)});break;case"name":n.sort((e,t)=>e.name.localeCompare(t.name,void 0,{sensitivity:"base"}));break;case"drain_rate":n.sort((e,t)=>{var n,r;return(null!==(n=t.ratePerDay)&&void 0!==n?n:-1)-(null!==(r=e.ratePerDay)&&void 0!==r?r:-1)||e.name.localeCompare(t.name)});break;default:n.sort((e,t)=>{var n,r;return t.urgency-e.urgency||(null!==(n=e.level)&&void 0!==n?n:101)-(null!==(r=t.level)&&void 0!==r?r:101)})}return n}(_,e.sort_mode||"urgency"),M=S.slice(0,Math.max(1,null!==(c=e.max_items)&&void 0!==c?c:25)),q=this._colors(e),P=this.buildStyleString(this.buildDesignStyles(e,t)),z=this.getHoverEffectClass(e),A="live"===i,C=0===_.length?this._renderAllClearState(e,v,a,q):"cards"===e.layout?this._renderCards(e,M,t,n,q,a,y,A):"compact"===e.layout?this._renderCompact(e,M,t,n,q,a,y,A):this._renderTable(e,M,t,n,q,a,y,A),F=!0===e.group_by_area&&_.length>0?this._renderGrouped(e,M,t,n,q,a,y,A):null;return r.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div class="uc-bf-root ${z}" style="${P}">
        ${this.wrapWithAnimation(r.qy`
            ${!1!==e.show_title?r.qy`
                  <div class="uc-bf-title" style="color:${q.text};">
                    <ha-icon icon="mdi:battery-heart-variant"></ha-icon>
                    <span
                      >${(null===(d=e.title)||void 0===d?void 0:d.trim())||(0,o.kg)("editor.battery_fleet.default_title",a,"Battery Fleet")}</span
                    >
                  </div>
                `:r.s6}
            ${!1!==e.show_summary_bar?this._renderSummaryBar(e,v,q,a,y):r.s6}
            ${b?r.qy`
                  <div class="uc-bf-notice uc-bf-notice--warn">
                    <ha-icon icon="mdi:database-alert-outline"></ha-icon>
                    <span
                      >${(0,o.kg)("editor.battery_fleet.err_history",a,"Recorder history is unavailable, so levels are shown without predictions.")}</span
                    >
                  </div>
                `:r.s6}
            ${null!=F?F:C} ${this._renderFooter(e,v,q,a,h,y)}
          `,e,t)}
      </div>
    `}_renderNoDevicesState(e,t){return"manual"===(e.discovery_mode||"auto")?this.renderGradientErrorState((0,o.kg)("editor.battery_fleet.empty_manual",t,"Add your batteries"),(0,o.kg)("editor.battery_fleet.empty_manual_desc",t,"Manual discovery is on but the list is empty. Add entities in the General tab, or switch discovery to Auto."),"mdi:battery-heart-variant"):this.renderGradientErrorState((0,o.kg)("editor.battery_fleet.empty_auto",t,"No batteries found"),(0,o.kg)("editor.battery_fleet.empty_auto_desc",t,"Nothing in Home Assistant reports a battery level. Try enabling battery_level attributes or binary sensors, or relax the exclude patterns."),"mdi:battery-off-outline")}_renderAllClearState(e,t,n,i){return r.qy`
      <div class="uc-bf-allclear" style="--uc-bf-accent:${i.ok};">
        <ha-icon icon="mdi:check-decagram-outline" style="color:${i.ok};"></ha-icon>
        <div class="uc-bf-allclear-text">
          <div class="uc-bf-allclear-title" style="color:${i.text};">
            ${(0,o.kg)("editor.battery_fleet.all_clear",n,"Every battery is healthy")}
          </div>
          <div class="uc-bf-allclear-sub" style="color:${i.secondary};">
            ${(0,o.kg)("editor.battery_fleet.all_clear_desc",n,"{count} device(s) checked, nothing needs attention.").replace("{count}",String(t.total))}
          </div>
        </div>
      </div>
    `}_renderSummaryBar(e,t,n,i,a){const l=[];l.push(r.qy`<span class="uc-bf-sum-part" style="color:${n.text};font-weight:700;"
        >${(0,o.kg)("editor.battery_fleet.sum_total",i,"{count} batteries").replace("{count}",String(t.total))}</span
      >`),t.critical>0&&l.push(r.qy`<span class="uc-bf-sum-part" style="color:${n.critical};font-weight:700;"
          >${(0,o.kg)("editor.battery_fleet.sum_critical",i,"{count} critical").replace("{count}",String(t.critical))}</span
        >`),t.low>0&&l.push(r.qy`<span class="uc-bf-sum-part" style="color:${n.low};font-weight:600;"
          >${(0,o.kg)("editor.battery_fleet.sum_low",i,"{count} low").replace("{count}",String(t.low))}</span
        >`),!1!==e.predict_replacement&&t.replacingThisMonth>0&&l.push(r.qy`<span class="uc-bf-sum-part" style="color:${n.secondary};"
          >${(0,o.kg)("editor.battery_fleet.sum_month",i,"{count} need replacing this month").replace("{count}",String(t.replacingThisMonth))}</span
        >`),0===t.critical&&0===t.low&&l.push(r.qy`<span class="uc-bf-sum-part" style="color:${n.ok};font-weight:600;"
          >${(0,o.kg)("editor.battery_fleet.sum_all_ok",i,"all healthy")}</span
        >`);const s=t.mostUrgent,c=s&&function(e,t){var n;if(!e)return!1;if("critical"===e.status||"low"===e.status)return!0;if("charging"===e.status)return!1;const r=Math.max(1,null!==(n=null==t?void 0:t.urgent_days)&&void 0!==n?n:14),i=Math.max(r,30);return null!==e.daysRemaining&&e.daysRemaining<=i}(s,e)?r.qy`
            <div class="uc-bf-sum-urgent" style="color:${n.secondary};">
              <ha-icon
                icon="mdi:alert-decagram-outline"
                style="color:${this._statusColor(s.status,n)};"
              ></ha-icon>
              <span class="uc-bf-sum-urgent-text">
                ${(0,o.kg)("editor.battery_fleet.sum_most_urgent",i,"Most urgent: {name}").replace("{name}",s.name)}
                ${null!==s.level?r.qy`<span
                      style="color:${this._statusColor(s.status,n)};font-weight:700;"
                      >${Math.round(s.level)}%</span
                    >`:r.s6}
                ${!1!==e.show_eta?r.qy`<span
                      >·
                      ${this._etaText(S(s,{predict:!1!==e.predict_replacement}),i,!1)}</span
                    >`:r.s6}
              </span>
            </div>
          `:r.s6;return r.qy`
      <div class="uc-bf-summary" style="background:${n.bg};border-color:var(--divider-color);">
        <div class="uc-bf-sum-line">
          ${l.map((e,t)=>0===t?e:r.qy`<span class="uc-bf-sum-dot">·</span>${e}`)}
          ${a?r.qy`<span class="uc-bf-sum-dot">·</span
                ><span class="uc-bf-sum-part uc-bf-loading-text" style="color:${n.secondary};"
                  >${(0,o.kg)("editor.battery_fleet.loading_history",i,"reading history…")}</span
                >`:r.s6}
        </div>
        ${c}
      </div>
    `}_renderFooter(e,t,n,i,a,l){return!1===e.predict_replacement?r.s6:l?r.qy`<div class="uc-bf-footer" style="color:${n.secondary};">
        ${(0,o.kg)("editor.battery_fleet.footer_loading",i,"Reading {days} days of recorder history…").replace("{days}",String(a))}
      </div>`:0===t.total?r.s6:r.qy`
      <div class="uc-bf-footer" style="color:${n.secondary};">
        ${(0,o.kg)("editor.battery_fleet.footer_basis",i,"Predictions from {days} days of history · {ready} of {total} devices have enough data").replace("{days}",String(a)).replace("{ready}",String(t.predicted)).replace("{total}",String(t.total))}
      </div>
    `}_renderGrouped(e,t,n,i,a,l,s,c){const d=function(e){const t=new Map;for(const n of e){const e=n.areaId||"__none__";let r=t.get(e);r||(r={areaId:n.areaId||null,areaName:n.areaName||null,items:[]},t.set(e,r)),r.items.push(n)}return[...t.values()].sort((e,t)=>null===e.areaId?1:null===t.areaId?-1:(e.areaName||"").localeCompare(t.areaName||"",void 0,{sensitivity:"base"}))}(t);return r.qy`
      <div class="uc-bf-groups">
        ${d.map(t=>r.qy`
            <div class="uc-bf-group">
              <div class="uc-bf-group-head" style="color:${a.secondary};">
                <ha-icon
                  icon=${t.areaId?"mdi:texture-box":"mdi:help-rhombus-outline"}
                ></ha-icon>
                <span
                  >${t.areaName||(0,o.kg)("editor.battery_fleet.no_area",l,"No area")}</span
                >
                <span class="uc-bf-group-count">${t.items.length}</span>
              </div>
              ${"cards"===e.layout?this._renderCards(e,t.items,n,i,a,l,s,c):"compact"===e.layout?this._renderCompact(e,t.items,n,i,a,l,s,c):this._renderTable(e,t.items,n,i,a,l,s,c)}
            </div>
          `)}
      </div>
    `}_renderTable(e,t,n,i,a,l,s,c){return r.qy`
      <div class="uc-bf-table">
        ${t.map(t=>{const d=this._statusColor(t.status,a),u=this._rowGestures(e,t,n,i,"table"),p=M(t),h=S(t,{predict:!1!==e.predict_replacement});return r.qy`
            <div
              class="uc-bf-row"
              style="background:${a.bg};"
              @pointerdown=${u.onPointerDown}
              @pointermove=${u.onPointerMove}
              @pointerup=${u.onPointerUp}
              @pointerleave=${u.onPointerLeave}
              @pointercancel=${u.onPointerCancel}
            >
              <ha-icon class="uc-bf-row-lead" icon=${t.icon} style="color:${d};"></ha-icon>

              <div class="uc-bf-row-main">
                <div class="uc-bf-row-name" style="color:${a.text};" title="${t.entityId}">
                  ${t.name} ${this._chargingBadge(e,t,a)}
                  ${t.batteryType?r.qy`<span class="uc-bf-battery-type" style="color:${a.secondary};"
                        >${t.batteryType}</span
                      >`:r.s6}
                </div>
                ${this._levelBar(t,d)}
              </div>

              <div class="uc-bf-cell uc-bf-pct" style="color:${a.text};">
                ${null===t.level?"—":`${Math.round(t.level)}%`}
              </div>

              ${!1!==e.show_drain_rate?r.qy`
                    <div class="uc-bf-cell uc-bf-col-drain" style="color:${a.secondary};">
                      ${s?r.qy`<span class="uc-bf-skel uc-bf-skel--sm"></span>`:null===p?r.qy`<span class="uc-bf-muted">—</span>`:(0,o.kg)("editor.battery_fleet.rate_per_day",l,"{rate}%/day").replace("{rate}",String(p))}
                    </div>
                  `:r.s6}
              ${!1!==e.show_eta?r.qy`
                    <div
                      class="uc-bf-cell uc-bf-col-eta"
                      style="color:${this._etaColor(h,t,a)};"
                      title=${this._confidenceTitle(t,l)}
                    >
                      ${s?r.qy`<span class="uc-bf-skel uc-bf-skel--md"></span>`:this._etaText(h,l,!0)}
                    </div>
                  `:r.s6}
              ${!1!==e.show_sparkline?r.qy`
                    <div class="uc-bf-col-spark">
                      ${s?r.qy`<span class="uc-bf-skel uc-bf-skel--md"></span>`:this._sparkline(t.series,d)}
                    </div>
                  `:r.s6}
              ${this._dismissButton(e,t,c,l)}
            </div>
          `})}
      </div>
    `}_renderCards(e,t,n,i,a,l,s,c){return r.qy`
      <div class="uc-bf-cards">
        ${t.map(t=>{const d=this._statusColor(t.status,a),u=this._rowGestures(e,t,n,i,"card"),p=S(t,{predict:!1!==e.predict_replacement}),h=M(t);return r.qy`
            <div
              class="uc-bf-card"
              style="background:${a.bg};--uc-bf-accent:${d};"
              @pointerdown=${u.onPointerDown}
              @pointermove=${u.onPointerMove}
              @pointerup=${u.onPointerUp}
              @pointerleave=${u.onPointerLeave}
              @pointercancel=${u.onPointerCancel}
            >
              <div class="uc-bf-card-top">
                ${this._levelRing(t,d,a)}
                ${this._dismissButton(e,t,c,l)}
              </div>
              <div class="uc-bf-card-name" style="color:${a.text};" title="${t.entityId}">
                ${t.name}${this._chargingBadge(e,t,a)}
              </div>
              ${!1!==e.show_eta?r.qy`
                    <div
                      class="uc-bf-card-eta"
                      style="color:${this._etaColor(p,t,a)};"
                      title=${this._confidenceTitle(t,l)}
                    >
                      ${s?r.qy`<span class="uc-bf-skel uc-bf-skel--md"></span>`:this._etaText(p,l,!1)}
                    </div>
                  `:r.s6}
              ${!1===e.show_drain_rate||s||null===h?r.s6:r.qy`
                    <div class="uc-bf-card-rate" style="color:${a.secondary};">
                      ${(0,o.kg)("editor.battery_fleet.rate_per_day",l,"{rate}%/day").replace("{rate}",String(h))}
                    </div>
                  `}
              ${!1===e.show_sparkline||s?r.s6:r.qy`<div class="uc-bf-card-spark">${this._sparkline(t.series,d)}</div>`}
              ${t.batteryType?r.qy`<div class="uc-bf-card-type" style="color:${a.secondary};">
                    ${t.batteryType}
                  </div>`:r.s6}
            </div>
          `})}
      </div>
    `}_renderCompact(e,t,n,i,o,a,l,s){return r.qy`
      <div class="uc-bf-compact">
        ${t.map(t=>{const c=this._statusColor(t.status,o),d=this._rowGestures(e,t,n,i,"compact"),u=S(t,{predict:!1!==e.predict_replacement});return r.qy`
            <div
              class="uc-bf-compact-row"
              @pointerdown=${d.onPointerDown}
              @pointermove=${d.onPointerMove}
              @pointerup=${d.onPointerUp}
              @pointerleave=${d.onPointerLeave}
              @pointercancel=${d.onPointerCancel}
            >
              <span class="uc-bf-compact-pct" style="color:${c};--uc-bf-accent:${c};">
                ${null===t.level?"—":`${Math.round(t.level)}%`}
              </span>
              <span
                class="uc-bf-compact-name"
                style="color:${o.text};"
                title="${t.entityId}"
              >
                ${t.name}${this._chargingBadge(e,t,o)}
              </span>
              ${!1!==e.show_eta?r.qy`
                    <span
                      class="uc-bf-compact-eta"
                      style="color:${this._etaColor(u,t,o)};"
                      title=${this._confidenceTitle(t,a)}
                    >
                      ${l?r.qy`<span class="uc-bf-skel uc-bf-skel--sm"></span>`:this._etaText(u,a,!0)}
                    </span>
                  `:r.s6}
              ${this._dismissButton(e,t,s,a)}
            </div>
          `})}
      </div>
    `}_levelBar(e,t){const n=null===e.level?0:Math.max(0,Math.min(100,e.level));return r.qy`
      <div
        class="uc-bf-bar"
        role="progressbar"
        aria-valuenow=${Math.round(n)}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="uc-bf-bar-fill" style="width:${n}%;background:${t};"></div>
      </div>
    `}_levelRing(e,t,n){const i=2*Math.PI*40,o=(null===e.level?0:Math.max(0,Math.min(100,e.level)))/100*i;return r.qy`
      <div class="uc-bf-ring">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle
            cx="50"
            cy="50"
            r=${40}
            fill="none"
            stroke="rgba(127,127,127,0.22)"
            stroke-width="9"
          ></circle>
          <circle
            cx="50"
            cy="50"
            r=${40}
            fill="none"
            stroke=${t}
            stroke-width="9"
            stroke-linecap="round"
            stroke-dasharray="${o} ${i}"
            transform="rotate(-90 50 50)"
          ></circle>
        </svg>
        <div class="uc-bf-ring-value" style="color:${n.text};">
          ${null===e.level?"—":Math.round(e.level)}<span
            class="uc-bf-ring-unit"
            style="color:${n.secondary};"
            >${null===e.level?"":"%"}</span
          >
        </div>
      </div>
    `}_sparkline(e,t){if(!e||e.length<3)return r.s6;let n=1/0,i=-1/0,o=1/0,a=-1/0;for(const t of e)t.t<n&&(n=t.t),t.t>i&&(i=t.t),t.v<o&&(o=t.v),t.v>a&&(a=t.v);const l=i-n;if(!Number.isFinite(l)||l<=0)return r.s6;const s=Math.max(a-o,5),c=e.map(e=>{const t=2+(e.t-n)/l*56,r=18-(e.v-o)/s*16;return`${t.toFixed(1)},${r.toFixed(1)}`}).join(" ");return r.qy`
      <svg
        class="uc-bf-spark"
        viewBox="0 0 ${60} ${20}"
        width=${60}
        height=${20}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polyline
          points=${c}
          fill="none"
          stroke=${t}
          stroke-width="1.6"
          stroke-linejoin="round"
          stroke-linecap="round"
          opacity="0.9"
        ></polyline>
      </svg>
    `}_chargingBadge(e,t,n){return!1!==e.show_charging_indicator&&t.charging?r.qy`<ha-icon
      class="uc-bf-charging"
      icon="mdi:lightning-bolt"
      style="color:${n.charging};"
    ></ha-icon>`:r.s6}_dismissButton(e,t,n,i){if(!n)return r.s6;const a="manual"===t.source;return r.qy`
      <button
        type="button"
        class="uc-bf-dismiss"
        title=${a?(0,o.kg)("editor.battery_fleet.dismiss_manual",i,"Remove from the manual list"):(0,o.kg)("editor.battery_fleet.dismiss_auto",i,"Hide this device from the card")}
        aria-label=${a?(0,o.kg)("editor.battery_fleet.dismiss_manual",i,"Remove from the manual list"):(0,o.kg)("editor.battery_fleet.dismiss_auto",i,"Hide this device from the card")}
        @click=${n=>{n.preventDefault(),n.stopPropagation(),this._dismiss(e,t)}}
        @pointerdown=${e=>e.stopPropagation()}
        @pointerup=${e=>e.stopPropagation()}
      >
        <ha-icon icon="mdi:close"></ha-icon>
      </button>
    `}_dismiss(e,t){const n="manual"===t.source?{entities:(e.entities||[]).filter(e=>e.entity!==t.entityId)}:{hidden_entities:(e.hidden_entities||[]).includes(t.entityId)?[...e.hidden_entities||[]]:[...e.hidden_entities||[],t.entityId]};window.dispatchEvent(new CustomEvent("uc-module-patch-by-id",{bubbles:!0,composed:!0,detail:{moduleId:e.id,updates:n}})),this.triggerPreviewUpdate(!0)}_rowGestures(e,t,n,r,i){var o;return this.createGestureHandlers(`${e.id}-${t.entityId}-${i}`,{tap_action:(null===(o=e.tap_action)||void 0===o?void 0:o.action)&&"nothing"!==e.tap_action.action?Object.assign(Object.assign({},e.tap_action),{entity:t.entityId}):{action:"more-info",entity:t.entityId},hold_action:e.hold_action,double_tap_action:e.double_tap_action,entity:t.entityId,module:e},n,r,[".uc-bf-dismiss"])}_colors(e){var t,n,r,i,o,a,l;return{critical:(null===(t=e.critical_color)||void 0===t?void 0:t.trim())||"var(--error-color)",low:(null===(n=e.low_color)||void 0===n?void 0:n.trim())||"var(--warning-color)",ok:(null===(r=e.ok_color)||void 0===r?void 0:r.trim())||"var(--success-color)",charging:(null===(i=e.charging_color)||void 0===i?void 0:i.trim())||"var(--info-color, var(--primary-color))",text:(null===(o=e.text_color)||void 0===o?void 0:o.trim())||"var(--primary-text-color)",secondary:(null===(a=e.secondary_text_color)||void 0===a?void 0:a.trim())||"var(--secondary-text-color)",bg:(null===(l=e.card_background_color)||void 0===l?void 0:l.trim())||"var(--card-background-color)"}}_statusColor(e,t){switch(e){case"critical":return t.critical;case"low":return t.low;case"charging":return t.charging;case"unknown":return t.secondary;default:return t.ok}}_etaColor(e,t,n){return"charging"===e.kind?n.charging:"now"===e.kind?n.critical:"days"===e.kind?null!==t.daysRemaining&&t.daysRemaining<=7?n.critical:n.low:(e.kind,n.secondary)}_etaText(e,t,n){switch(e.kind){case"charging":return(0,o.kg)("editor.battery_fleet.eta_charging",t,"charging");case"gathering":return n?(0,o.kg)("editor.battery_fleet.eta_gathering_short",t,"gathering…"):(0,o.kg)("editor.battery_fleet.eta_gathering",t,"gathering data");case"now":return n?(0,o.kg)("editor.battery_fleet.eta_now_short",t,"now"):(0,o.kg)("editor.battery_fleet.eta_now",t,"replace now");case"days":return n?(0,o.kg)("editor.battery_fleet.eta_days_short",t,"~{n}d").replace("{n}",String(e.value)):1===e.value?(0,o.kg)("editor.battery_fleet.eta_day_one",t,"replace in about a day"):(0,o.kg)("editor.battery_fleet.eta_days",t,"replace in ~{n} days").replace("{n}",String(e.value));case"weeks":return n?(0,o.kg)("editor.battery_fleet.eta_weeks_short",t,"~{n}w").replace("{n}",String(e.value)):(0,o.kg)("editor.battery_fleet.eta_weeks",t,"~{n} weeks").replace("{n}",String(e.value));case"months":return n?(0,o.kg)("editor.battery_fleet.eta_months_short",t,"~{n}mo").replace("{n}",String(e.value)):(0,o.kg)("editor.battery_fleet.eta_months",t,"~{n} months").replace("{n}",String(e.value));case"beyond":return n?(0,o.kg)("editor.battery_fleet.eta_beyond_short",t,"6mo+"):(0,o.kg)("editor.battery_fleet.eta_beyond",t,"over 6 months");default:return""}}_confidenceTitle(e,t){if("none"===e.confidence)return(0,o.kg)("editor.battery_fleet.conf_none",t,"Not enough recorded drain yet to make an honest estimate.");const n=Math.round(e.observedHours),r="high"===e.confidence?(0,o.kg)("editor.battery_fleet.conf_high",t,"High confidence"):"medium"===e.confidence?(0,o.kg)("editor.battery_fleet.conf_medium",t,"Medium confidence"):(0,o.kg)("editor.battery_fleet.conf_low",t,"Low confidence");return(0,o.kg)("editor.battery_fleet.conf_basis",t,"{label} — measured from {hours} h of observed discharge.").replace("{label}",r).replace("{hours}",String(n))}getStyles(){return`\n      ${i.m.getSliderStyles()}\n\n      /* ── Editor ─────────────────────────────────────────────────────────── */\n      .uc-bf-section-desc {\n        font-size: 13px;\n        line-height: 1.5;\n        color: var(--secondary-text-color);\n        margin: -8px 0 16px;\n      }\n      .uc-bf-subhead {\n        font-size: 14px;\n        font-weight: 700;\n        color: var(--primary-text-color);\n        margin: 20px 0 4px;\n      }\n      .uc-bf-subdesc {\n        font-size: 12px;\n        line-height: 1.5;\n        color: var(--secondary-text-color);\n        margin-bottom: 12px;\n      }\n      .uc-bf-panel {\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        border-radius: var(--uc-r-10, 10px);\n        padding: 12px 14px;\n        margin-bottom: 16px;\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n      }\n      .uc-bf-panel--empty {\n        border-style: dashed;\n      }\n      .uc-bf-panel-head {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 14px;\n        font-weight: 700;\n        color: var(--primary-text-color);\n      }\n      .uc-bf-panel-head ha-icon {\n        color: var(--primary-color);\n        --mdc-icon-size: 20px;\n      }\n      .uc-bf-panel-body {\n        font-size: 12px;\n        line-height: 1.5;\n        color: var(--secondary-text-color);\n        margin-top: 6px;\n      }\n      .uc-bf-preview-chips {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 6px;\n        margin-top: 10px;\n      }\n      .uc-bf-preview-chip {\n        display: inline-flex;\n        align-items: center;\n        gap: 5px;\n        max-width: 190px;\n        padding: 4px 9px;\n        border-radius: var(--uc-r-14, 14px);\n        background: var(--uc-pane-bg, var(--secondary-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        font-size: 12px;\n        color: var(--primary-text-color);\n      }\n      .uc-bf-preview-chip ha-icon {\n        --mdc-icon-size: 15px;\n        color: var(--primary-color);\n        flex-shrink: 0;\n      }\n      .uc-bf-preview-chip-name {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-bf-preview-chip-pct {\n        font-weight: 700;\n        flex-shrink: 0;\n        opacity: 0.75;\n      }\n      .uc-bf-preview-more {\n        display: inline-flex;\n        align-items: center;\n        padding: 4px 9px;\n        font-size: 12px;\n        color: var(--secondary-text-color);\n      }\n      .uc-bf-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        padding: 10px 16px;\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        font-size: 14px;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n        transition: filter 0.15s ease;\n      }\n      .uc-bf-btn:hover {\n        filter: brightness(1.1);\n      }\n      .uc-bf-btn:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n      }\n      .uc-bf-btn--block {\n        width: 100%;\n        margin-top: 8px;\n      }\n      .uc-bf-btn--ghost {\n        background: transparent;\n        color: var(--primary-color);\n        border: 1px solid var(--divider-color);\n      }\n      .uc-bf-inline-action {\n        margin: -4px 0 16px;\n      }\n      .entity-row {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        padding: 10px 12px;\n        background: var(--uc-pane-bg, var(--card-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 8px;\n      }\n      .entity-row .uc-bf-row-icon {\n        color: var(--primary-color);\n        --mdc-icon-size: 22px;\n        flex-shrink: 0;\n      }\n      .entity-info {\n        flex: 1;\n        min-width: 0;\n      }\n      .entity-info.empty .uc-bf-row-title {\n        color: var(--secondary-text-color);\n        font-style: italic;\n      }\n      .uc-bf-row-title {\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-bf-row-sub {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        margin-top: 2px;\n      }\n      .expand-icon {\n        cursor: pointer;\n        color: var(--primary-color);\n        flex-shrink: 0;\n        transition: transform 0.2s ease;\n      }\n      .expand-icon.expanded {\n        transform: rotate(180deg);\n      }\n      .delete-icon {\n        cursor: pointer;\n        color: var(--error-color);\n        flex-shrink: 0;\n      }\n      .expand-icon:focus-visible,\n      .delete-icon:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 2px;\n        border-radius: var(--uc-r-4, 4px);\n      }\n      .uc-bf-row-body {\n        padding: 14px;\n        margin: -4px 0 12px;\n        background: rgba(var(--rgb-primary-color), 0.05);\n        border-left: 3px solid var(--primary-color);\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n      }\n\n      /* ── Preview ────────────────────────────────────────────────────────── */\n      .uc-bf-root {\n        box-sizing: border-box;\n        width: 100%;\n      }\n      .uc-bf-root * {\n        box-sizing: border-box;\n      }\n      .uc-bf-title {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 16px;\n        font-weight: 700;\n        margin-bottom: 10px;\n      }\n      .uc-bf-title ha-icon {\n        --mdc-icon-size: 20px;\n        opacity: 0.85;\n      }\n      .uc-bf-summary {\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-10, 10px);\n        padding: 10px 12px;\n        margin-bottom: 10px;\n      }\n      .uc-bf-sum-line {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: baseline;\n        gap: 6px;\n        font-size: 13px;\n        line-height: 1.4;\n      }\n      .uc-bf-sum-dot {\n        opacity: 0.45;\n      }\n      .uc-bf-sum-urgent {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        margin-top: 6px;\n        font-size: 12px;\n        min-width: 0;\n      }\n      .uc-bf-sum-urgent ha-icon {\n        --mdc-icon-size: 16px;\n        flex-shrink: 0;\n      }\n      .uc-bf-sum-urgent-text {\n        min-width: 0;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-bf-notice {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 8px 10px;\n        border-radius: var(--uc-r-8, 8px);\n        font-size: 12px;\n        margin-bottom: 10px;\n      }\n      .uc-bf-notice--warn {\n        background: rgba(var(--rgb-warning-color, 255, 165, 0), 0.12);\n        color: var(--warning-color);\n      }\n      .uc-bf-notice ha-icon {\n        --mdc-icon-size: 18px;\n        flex-shrink: 0;\n      }\n      .uc-bf-footer {\n        font-size: 11px;\n        line-height: 1.4;\n        margin-top: 8px;\n        opacity: 0.85;\n      }\n      .uc-bf-groups {\n        display: flex;\n        flex-direction: column;\n        gap: 14px;\n      }\n      .uc-bf-group-head {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 11px;\n        font-weight: 700;\n        letter-spacing: 0.06em;\n        text-transform: uppercase;\n        margin-bottom: 6px;\n      }\n      .uc-bf-group-head ha-icon {\n        --mdc-icon-size: 15px;\n      }\n      .uc-bf-group-count {\n        margin-left: auto;\n        opacity: 0.7;\n        font-weight: 600;\n        letter-spacing: 0;\n      }\n\n      /* Table */\n      .uc-bf-table {\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n      }\n      .uc-bf-row {\n        position: relative;\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        padding: 7px 10px;\n        border-radius: var(--uc-r-9, 9px);\n        cursor: pointer;\n        transition: filter 0.15s ease;\n      }\n      .uc-bf-row:hover {\n        filter: brightness(1.06);\n      }\n      .uc-bf-row-lead {\n        flex: 0 0 auto;\n        --mdc-icon-size: 22px;\n      }\n      .uc-bf-row-main {\n        flex: 1 1 auto;\n        min-width: 0;\n      }\n      .uc-bf-row-name {\n        display: flex;\n        align-items: center;\n        gap: 5px;\n        font-size: 13.5px;\n        font-weight: 600;\n        line-height: 1.3;\n        min-width: 0;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-bf-battery-type {\n        font-size: 10.5px;\n        font-weight: 500;\n        opacity: 0.85;\n        flex-shrink: 0;\n      }\n      .uc-bf-charging {\n        --mdc-icon-size: 14px;\n        flex-shrink: 0;\n      }\n      .uc-bf-bar {\n        height: 5px;\n        border-radius: var(--uc-r-3, 3px);\n        background: rgba(127, 127, 127, 0.22);\n        overflow: hidden;\n        margin-top: 5px;\n      }\n      .uc-bf-bar-fill {\n        height: 100%;\n        border-radius: var(--uc-r-3, 3px);\n        transition: width 0.3s ease;\n      }\n      .uc-bf-cell {\n        flex: 0 0 auto;\n        text-align: right;\n        font-size: 12px;\n        line-height: 1.2;\n        white-space: nowrap;\n      }\n      .uc-bf-pct {\n        flex-basis: 40px;\n        font-size: 13px;\n        font-weight: 700;\n      }\n      .uc-bf-col-drain {\n        flex-basis: 58px;\n      }\n      .uc-bf-col-eta {\n        flex-basis: 74px;\n        font-weight: 600;\n      }\n      .uc-bf-col-spark {\n        flex: 0 0 60px;\n        height: 20px;\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n      }\n      .uc-bf-spark {\n        display: block;\n        overflow: visible;\n      }\n      .uc-bf-muted {\n        opacity: 0.5;\n      }\n\n      /* Cards */\n      .uc-bf-cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));\n        gap: 10px;\n      }\n      .uc-bf-card {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 4px;\n        padding: 12px 10px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-12, 12px);\n        text-align: center;\n        cursor: pointer;\n        transition: filter 0.15s ease;\n      }\n      /* Status tint drawn as a translucent overlay. Appending an alpha suffix to\n         the colour string would break the moment it is a CSS variable. */\n      .uc-bf-card::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        border-radius: inherit;\n        border: 1px solid var(--uc-bf-accent, transparent);\n        opacity: 0.45;\n        pointer-events: none;\n      }\n      .uc-bf-card:hover {\n        filter: brightness(1.06);\n      }\n      .uc-bf-card-top {\n        position: relative;\n        width: 100%;\n        display: flex;\n        justify-content: center;\n      }\n      .uc-bf-ring {\n        position: relative;\n        width: 64px;\n        height: 64px;\n      }\n      .uc-bf-ring svg {\n        width: 100%;\n        height: 100%;\n        display: block;\n      }\n      .uc-bf-ring-value {\n        position: absolute;\n        inset: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 17px;\n        font-weight: 800;\n        letter-spacing: -0.02em;\n      }\n      .uc-bf-ring-unit {\n        font-size: 10px;\n        font-weight: 600;\n        margin-left: 1px;\n      }\n      .uc-bf-card-name {\n        font-size: 12.5px;\n        font-weight: 600;\n        line-height: 1.25;\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 4px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        margin-top: 4px;\n      }\n      .uc-bf-card-eta {\n        font-size: 11.5px;\n        font-weight: 600;\n        line-height: 1.3;\n      }\n      .uc-bf-card-rate,\n      .uc-bf-card-type {\n        font-size: 10.5px;\n        line-height: 1.3;\n      }\n      .uc-bf-card-spark {\n        margin-top: 4px;\n        height: 20px;\n      }\n\n      /* Compact */\n      .uc-bf-compact {\n        display: flex;\n        flex-direction: column;\n      }\n      .uc-bf-compact-row {\n        position: relative;\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 5px 2px;\n        border-bottom: 1px solid var(--divider-color);\n        cursor: pointer;\n      }\n      .uc-bf-compact-row:last-child {\n        border-bottom: none;\n      }\n      .uc-bf-compact-pct {\n        position: relative;\n        isolation: isolate;\n        flex: 0 0 auto;\n        min-width: 40px;\n        text-align: center;\n        padding: 2px 6px;\n        border-radius: var(--uc-r-6, 6px);\n        font-size: 11.5px;\n        font-weight: 700;\n      }\n      .uc-bf-compact-pct::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        z-index: -1;\n        border-radius: inherit;\n        background: var(--uc-bf-accent, transparent);\n        opacity: 0.15;\n      }\n      .uc-bf-compact-name {\n        flex: 1 1 auto;\n        min-width: 0;\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 13px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-bf-compact-eta {\n        flex: 0 0 auto;\n        font-size: 11.5px;\n        font-weight: 600;\n        white-space: nowrap;\n      }\n\n      /* All-clear */\n      .uc-bf-allclear {\n        position: relative;\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        padding: 16px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-12, 12px);\n      }\n      .uc-bf-allclear::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        border-radius: inherit;\n        border: 1px solid var(--uc-bf-accent, transparent);\n        opacity: 0.4;\n        pointer-events: none;\n      }\n      .uc-bf-allclear ha-icon {\n        --mdc-icon-size: 28px;\n        flex-shrink: 0;\n      }\n      .uc-bf-allclear-title {\n        font-size: 14px;\n        font-weight: 700;\n      }\n      .uc-bf-allclear-sub {\n        font-size: 12px;\n        margin-top: 2px;\n      }\n\n      /* Dismiss control */\n      .uc-bf-dismiss {\n        position: absolute;\n        top: 2px;\n        right: 2px;\n        width: 22px;\n        height: 22px;\n        padding: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: none;\n        border-radius: 50%;\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border: var(--uc-pane-border, none);\n        box-shadow: var(--uc-pane-shadow, none);\n        color: var(--error-color);\n        cursor: pointer;\n        opacity: 0;\n        transition: opacity 0.15s ease;\n      }\n      .uc-bf-dismiss ha-icon {\n        --mdc-icon-size: 15px;\n      }\n      .uc-bf-row:hover .uc-bf-dismiss,\n      .uc-bf-card:hover .uc-bf-dismiss,\n      .uc-bf-compact-row:hover .uc-bf-dismiss,\n      .uc-bf-dismiss:focus-visible {\n        opacity: 1;\n      }\n      .uc-bf-dismiss:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: 1px;\n      }\n\n      /* Loading placeholders */\n      .uc-bf-skel {\n        display: inline-block;\n        height: 9px;\n        border-radius: var(--uc-r-4, 4px);\n        background: linear-gradient(\n          90deg,\n          rgba(127, 127, 127, 0.14) 25%,\n          rgba(127, 127, 127, 0.28) 50%,\n          rgba(127, 127, 127, 0.14) 75%\n        );\n        background-size: 200% 100%;\n        animation: uc-bf-shimmer 1.4s ease-in-out infinite;\n        vertical-align: middle;\n      }\n      .uc-bf-skel--sm {\n        width: 34px;\n      }\n      .uc-bf-skel--md {\n        width: 52px;\n      }\n      .uc-bf-loading-text {\n        font-style: italic;\n        opacity: 0.8;\n      }\n      @keyframes uc-bf-shimmer {\n        0% {\n          background-position: 200% 0;\n        }\n        100% {\n          background-position: -200% 0;\n        }\n      }\n\n      /* Narrow screens: drop the two widest optional columns rather than\n         squeezing the device name into nothing. */\n      @media (max-width: 480px) {\n        .uc-bf-root .uc-bf-col-drain,\n        .uc-bf-root .uc-bf-col-spark {\n          display: none !important;\n        }\n        .uc-bf-root .uc-bf-col-eta {\n          flex-basis: 62px;\n          font-size: 11px;\n        }\n        .uc-bf-root .uc-bf-cards {\n          grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));\n        }\n        .uc-bf-root .uc-bf-dismiss {\n          opacity: 1;\n        }\n      }\n    `}}},1671(e,t,n){n.d(t,{CY:()=>s,EA:()=>c,Hv:()=>d,SM:()=>u,Z_:()=>p,f0:()=>l});const r=Object.freeze({data:new Map,loading:!1,fetchedAt:0,error:null});function i(e){var t,n,r,i;if(null==e||"object"!=typeof e)return null;const o=e;if(void 0!==o.s&&(void 0!==o.lu||void 0!==o.lc)){const e=Number(null!==(t=o.lu)&&void 0!==t?t:o.lc);return Number.isFinite(e)?{t:1e3*e,state:String(o.s),attributes:null!==(n=o.a)&&void 0!==n?n:null}:null}if(void 0!==o.state){const e=null!==(r=o.last_changed)&&void 0!==r?r:o.last_updated,t=e?new Date(String(e)).getTime():NaN;return Number.isFinite(t)?{t,state:String(o.state),attributes:null!==(i=o.attributes)&&void 0!==i?i:null}:null}return null}const o=new class{constructor(){this._cache=new Map}query(e,t,n){var i;if(!e||0===t.entityIds.length)return r;const o=null!==(i=t.ttlMs)&&void 0!==i?i:3e5,a=this._cache.get(t.key),l=Date.now();(!a||l-a.fetchedAt>o)&&!(null==a?void 0:a.inflight)&&this._startFetch(e,t,n);const s=this._cache.get(t.key);return s?{data:s.data,loading:s.loading,fetchedAt:s.fetchedAt,error:s.error}:r}async fetch(e,t){var n,r;return e&&0!==t.entityIds.length?(await this._startFetch(e,t),null!==(r=null===(n=this._cache.get(t.key))||void 0===n?void 0:n.data)&&void 0!==r?r:new Map):new Map}invalidate(e){this._cache.delete(e)}clear(){this._cache.clear()}_startFetch(e,t,n){const r=this._cache.get(t.key);if(null==r?void 0:r.inflight)return r.inflight;const i=null!=r?r:{data:new Map,fetchedAt:0,loading:!1,error:null,inflight:null};i.loading=!0,this._cache.set(t.key,i);const o=this._doFetch(e,t).then(e=>{i.data=e,i.fetchedAt=Date.now(),i.error=null}).catch(e=>{i.error=e instanceof Error?e.message:String(e),i.fetchedAt=Date.now()}).finally(()=>{if(i.loading=!1,i.inflight=null,n)try{n()}catch(e){}});return i.inflight=o,o}async _doFetch(e,t){const n=t.entityIds.filter(e=>!!e);if(0===n.length)return new Map;const r=new Date(t.startMs).toISOString(),o=new Date(t.endMs).toISOString(),a=!t.withAttributes;let l={};try{l=await e.callWS({type:"history/history_during_period",start_time:r,end_time:o,entity_ids:n,include_start_time_state:!0,significant_changes_only:!1,minimal_response:!1,no_attributes:a})}catch(t){const i=await e.callApi("GET",`history/period/${r}`,{filter_entity_id:n.join(","),end_time:o});if(l={},Array.isArray(i))for(const e of i)if(Array.isArray(e)&&e.length>0){const t=e[0];(null==t?void 0:t.entity_id)&&(l[t.entity_id]=e)}}const s=new Map;for(const[e,t]of Object.entries(l)){if(!Array.isArray(t)||0===t.length)continue;const n=[];for(const e of t){const t=i(e);t&&n.push(t)}n.length>0&&(n.sort((e,t)=>e.t-t.t),s.set(e,n))}return s}},a=new Set(["unavailable","unknown","none","","null"]);function l(e,t){var n;if(!e||0===e.length)return[];const r=null==t?void 0:t.attribute,i=[];for(const t of e){const e=r?null===(n=t.attributes)||void 0===n?void 0:n[r]:t.state;if(null==e)continue;const o=String(e).trim().toLowerCase();if(a.has(o))continue;const l=Number(e);Number.isFinite(l)&&i.push({t:t.t,v:l})}return i}function s(e,t,n){if(0===e.length)return null;if(1===e.length)return e[0].v;const r=null!=t?t:e[0].t,i=null!=n?n:e[e.length-1].t;if(i<=r)return e[e.length-1].v;let o=0,a=0;for(let t=0;t<e.length;t++){const n=e[t],l=Math.max(n.t,r),s=Math.min(t+1<e.length?e[t+1].t:i,i)-l;s<=0||(o+=n.v*s,a+=s)}return a<=0?e[e.length-1].v:o/a}function c(e,t,n,r){if(0===e.length)return null;if(1===e.length)return e[0].v;const i=null!=n?n:e[0].t,o=null!=r?r:e[e.length-1].t,a=[];let l=0;for(let t=0;t<e.length;t++){const n=e[t],r=Math.max(n.t,i),s=Math.min(t+1<e.length?e[t+1].t:o,o)-r;s<=0||(a.push({v:n.v,ms:s}),l+=s)}if(0===a.length||l<=0)return e[e.length-1].v;a.sort((e,t)=>e.v-t.v);const s=l*Math.min(Math.max(t,0),1);let c=0;for(const e of a)if(c+=e.ms,c>=s)return e.v;return a[a.length-1].v}function d(e,t){var n,r;if(e.length<3)return null;const i=null!==(n=null==t?void 0:t.floor)&&void 0!==n?n:0,o=null!==(r=null==t?void 0:t.riseToleranceUnits)&&void 0!==r?r:1,a=[];let l=[e[0]];for(let t=1;t<e.length;t++){const n=e[t-1],r=e[t];r.v-n.v>o?(l.length>=2&&a.push(l),l=[r]):l.push(r)}if(l.length>=2&&a.push(l),0===a.length)return null;let s=0,c=0;for(const e of a){const t=e[0],n=e[e.length-1],r=t.v-n.v,i=n.t-t.t;i<=0||r<=0||(s+=r,c+=i)}const d=e[e.length-1].t-e[0].t,u=d>0?Math.min(c/d,1):0,p=(a[a.length-1],e.length>=2&&e[e.length-1].v-e[e.length-2].v>o);if(c<=0||s<=0)return{ratePerHour:0,msToEmpty:null,coverage:u,charging:p};const h=s/c*36e5,g=e[e.length-1].v-i;return{ratePerHour:h,msToEmpty:h>0&&g>0?g/h*36e5:null,coverage:u,charging:p}}function u(e,t){var n,r,i,o;if(e.length<2)return[];const a=t.startThreshold,l=null!==(n=t.stopThreshold)&&void 0!==n?n:.5*a,s=null!==(r=t.settleMs)&&void 0!==r?r:18e4,c=null!==(i=t.minDurationMs)&&void 0!==i?i:3e5,d=null!==(o=t.endMs)&&void 0!==o?o:e[e.length-1].t,u=[];let p=null,h=null,g=0,y=0,b=0,f=0,v=0;const _=e=>{if(null===p)return;const t=e-p;t>=c&&u.push({startMs:p,endMs:e,durationMs:t,peak:g,mean:b>0?y/b:g,areaHours:y/36e5}),p=null,h=null,g=0,y=0,b=0};for(let t=0;t<e.length;t++){const n=e[t],r=t+1<e.length?e[t+1].t:d,i=Math.max(r-n.t,0);null!==p?(g=Math.max(g,n.v),n.v<l?(null===h&&(h=n.t,f=y,v=b),y+=n.v*i,b+=i,r-h>=s&&(y=f,b=v,_(h))):(h=null,y+=n.v*i,b+=i)):n.v>=a&&(p=n.t,g=n.v,y=n.v*i,b=i,h=null)}return null!==p&&(null!==h?(y=f,b=v,_(h)):_(d)),u}function p(e,t,n){var r,i;if(!e||!t)return null;const o=null===(r=e.states)||void 0===r?void 0:r[t];if(!o)return null;const l=n?null===(i=o.attributes)||void 0===i?void 0:i[n]:o.state;if(null==l)return null;if(a.has(String(l).trim().toLowerCase()))return null;const s=Number(l);return Number.isFinite(s)?s:null}n.d(t,["ur",0,o])},3488(e,t,n){n.d(t,{SB:()=>s,b5:()=>l,gf:()=>a});var r=n(2618),i=n(378),o=n(6478);function a(e){var t,n,r,o;if(!e)return!1;try{const a=i.xd.checkIntegrationAuth(e);if("pro"===(null===(t=null==a?void 0:a.subscription)||void 0===t?void 0:t.tier)&&"active"===(null===(n=null==a?void 0:a.subscription)||void 0===n?void 0:n.status))return!0;if(i.xd.isAuthenticated()){const e=i.xd.getCurrentUser();if("pro"===(null===(r=null==e?void 0:e.subscription)||void 0===r?void 0:r.tier)&&"active"===(null===(o=null==e?void 0:e.subscription)||void 0===o?void 0:o.status))return!0}}catch(e){return!1}return!1}function l(e,t){return r.qy`
    <div
      class="pro-lock-container"
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 32px;
        text-align: center;
        background: var(--secondary-background-color);
        border-radius: 12px;
        margin: 16px;
      "
    >
      <ha-icon
        icon="mdi:lock"
        style="color: var(--primary-color); --mdc-icon-size: 48px; margin-bottom: 16px;"
      ></ha-icon>
      <div style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">
        ${(0,o.kg)("editor.pro.feature_locked",e,"Pro Feature")}
      </div>
      <div
        style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 340px; line-height: 1.5;"
      >
        ${t}
      </div>
      <a
        href="https://ultracard.io/pro"
        target="_blank"
        rel="noopener noreferrer"
        style="
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: var(--primary-color);
          color: var(--text-primary-color, white);
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
        "
      >
        <ha-icon icon="mdi:crown" style="--mdc-icon-size: 20px;"></ha-icon>
        ${(0,o.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
      </a>
    </div>
  `}function s(e,t){return r.qy`
    <div
      style="
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 20px;
        border-radius: 12px;
        background: var(--secondary-background-color);
        border: 1px dashed var(--divider-color);
      "
    >
      <ha-icon
        icon="mdi:lock"
        style="color: var(--primary-color); --mdc-icon-size: 28px;"
      ></ha-icon>
      <div style="min-width: 0;">
        <div style="font-weight: 700; color: var(--primary-text-color);">${t}</div>
        <div style="font-size: 12px; color: var(--secondary-text-color);">
          ${(0,o.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
      </div>
    </div>
  `}},6673(e,t,n){n.d(t,{W:()=>i,p:()=>r});class r{constructor(e=32){this._cache=new Map,this._limit=e}read(e,t,n,r){const i=this._cache.get(e);if(i&&i.key===n&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(i.deps,t))return i.value;const o=r();if(this._cache.set(e,{deps:t,key:n,value:o}),this._cache.size>this._limit){const e=this._cache.keys().next().value;void 0!==e&&this._cache.delete(e)}return o}forget(e){this._cache.delete(e)}clear(){this._cache.clear()}}function i(...e){try{return JSON.stringify(e)}catch(e){return`__unserializable__${Math.random()}`}}},1299(e,t,n){n.d(t,{D:()=>a});var r=n(6752),i=n(7804),o=n(8504);const a=(0,i.u$)(class extends i.WL{constructor(){super(...arguments),this.key=r.s6}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&((0,o.mY)(e),this.key=t),n}})}};