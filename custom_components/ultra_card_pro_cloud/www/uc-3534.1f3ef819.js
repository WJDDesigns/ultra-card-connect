export const __webpack_esm_ids__=[3534];export const __webpack_esm_modules__={3534(t,e,r){var a=r(2618),o=r(4791),i=r(4748),s=/*#__PURE__*/r(1001),n=/*#__PURE__*/r(6477),l=r(935),c=r(5721),d=r(766),p=function(t,e,r,a){var o,i=arguments.length,s=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,a);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};const u=["=","!=",">",">=","<","<=","contains","not_contains","has_value","no_value"];let h=class extends a.WF{constructor(){super(...arguments),this.noGradients=!1}_t(t,e){return(0,l.kg)(`editor.state_color.${t}`,(0,l.Bs)(),e)}_emit(t){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}_rules(){var t;return Array.isArray(null===(t=this.value)||void 0===t?void 0:t.rules)?this.value.rules:[]}_setRules(t){this._emit(Object.assign(Object.assign({},this.value),{rules:t}))}_updateRule(t,e){const r=[...this._rules()];r[t]=Object.assign(Object.assign({},r[t]),e),this._setRules(r)}_updateCondition(t,e,r){const a=[...this._rules()[t].conditions||[]];a[e]=Object.assign(Object.assign({},a[e]),r),this._updateRule(t,{conditions:a})}_moveRule(t,e){const r=[...this._rules()],a=t+e;if(a<0||a>=r.length)return;const[o]=r.splice(t,1);r.splice(a,0,o),this._setRules(r)}_stop(t){t.stopPropagation()}_form(t,e,r){return a.qy`<ha-form
      .hass=${this.hass}
      .data=${t}
      .schema=${e}
      .computeLabel=${()=>""}
      @value-changed=${t=>{t.stopPropagation(),r(t.detail.value)}}
    ></ha-form>`}_renderCondition(t,e,r,o){var i;const s=t.type||"entity_state",n=t.operator||"=",l="has_value"!==n&&"no_value"!==n,c=[{value:"entity_state",label:this._t("type_state","Entity state")},{value:"entity_attribute",label:this._t("type_attribute","Entity attribute")},{value:"template",label:this._t("type_template","Template")}];return a.qy`
      <div class="condition">
        <div class="condition-row">
          <div class="grow">
            ${this._form({type:s},[{name:"type",selector:{select:{options:c,mode:"dropdown"}}}],t=>{if(t.type===s)return;const a="template"===t.type?{type:"template",template:"",entity:void 0,attribute:void 0}:{type:t.type,operator:"=",value:""};this._updateCondition(e,r,a)})}
          </div>
          ${o?a.qy`<button
                class="icon-btn danger"
                type="button"
                title=${this._t("remove_condition","Remove condition")}
                @click=${()=>{const t=this._rules()[e];this._updateRule(e,{conditions:t.conditions.filter((t,e)=>e!==r)})}}
              >
                <ha-icon icon="mdi:close"></ha-icon>
              </button>`:a.s6}
        </div>
        ${"template"===s?a.qy`<div @value-changed=${this._stop}>
              <ultra-template-editor
                .hass=${this.hass}
                .value=${t.template||""}
                .placeholder=${"{{ is_state('climate.bedroom', 'heat') }}"}
                .minHeight=${60}
                .maxHeight=${200}
                @value-changed=${t=>{t.stopPropagation(),this._updateCondition(e,r,{template:t.detail.value})}}
              ></ultra-template-editor>
            </div>`:a.qy`
              ${this._form({entity:t.entity||""},[{name:"entity",selector:{entity:{}}}],t=>this._updateCondition(e,r,{entity:t.entity||""}))}
              ${"entity_attribute"===s?a.qy`<div class="sub-label">${this._t("attribute","Attribute")}</div>
                    ${this._form({attribute:t.attribute||""},[{name:"attribute",selector:t.entity?{attribute:{entity_id:t.entity}}:{text:{}}}],t=>this._updateCondition(e,r,{attribute:t.attribute||""}))}`:a.s6}
              <div class="condition-row">
                <div class="op">
                  ${this._form({operator:n},[{name:"operator",selector:{select:{options:u.map(t=>({value:t,label:t})),mode:"dropdown"}}}],t=>this._updateCondition(e,r,{operator:t.operator}))}
                </div>
                ${l?a.qy`<div class="grow">
                      ${this._form({value:null!==(i=t.value)&&void 0!==i?i:""},[d.U.conditionValue("value",this.hass,t)],t=>{var a;return this._updateCondition(e,r,{value:null!==(a=t.value)&&void 0!==a?a:""})})}
                    </div>`:a.s6}
              </div>
            `}
      </div>
    `}_renderRule(t,e,r,o){const i=t.conditions||[],s="any"===t.match?"any":"every";return a.qy`
      <div class="rule ${e===o?"active":""}">
        <div class="rule-head">
          <span class="rule-title">
            ${this._t("rule","Rule")} ${e+1}
            ${e===o?a.qy`<span class="badge">${this._t("active_now","Active now")}</span>`:a.s6}
          </span>
          <span class="rule-actions">
            <button class="icon-btn" type="button" title=${this._t("move_up","Move up")}
              ?disabled=${0===e} @click=${()=>this._moveRule(e,-1)}>
              <ha-icon icon="mdi:arrow-up"></ha-icon>
            </button>
            <button class="icon-btn" type="button" title=${this._t("move_down","Move down")}
              ?disabled=${e===r-1} @click=${()=>this._moveRule(e,1)}>
              <ha-icon icon="mdi:arrow-down"></ha-icon>
            </button>
            <button class="icon-btn danger" type="button" title=${this._t("remove_rule","Remove rule")}
              @click=${()=>this._setRules(this._rules().filter((t,r)=>r!==e))}>
              <ha-icon icon="mdi:trash-can-outline"></ha-icon>
            </button>
          </span>
        </div>

        <div class="sub-label">${this._t("use_color","Use this color")}</div>
        <ultra-color-picker
          .hass=${this.hass}
          .value=${t.color}
          ?no-gradients=${this.noGradients}
          no-state
          @value-changed=${t=>{t.stopPropagation(),this._updateRule(e,{color:t.detail.value})}}
        ></ultra-color-picker>

        <div class="when-row">
          <span class="sub-label">${this._t("when","When")}</span>
          ${i.length>1?a.qy`<div class="match">
                ${this._form({match:s},[{name:"match",selector:{select:{options:[{value:"every",label:this._t("match_every","all of these are true")},{value:"any",label:this._t("match_any","any of these is true")}],mode:"dropdown"}}}],t=>this._updateRule(e,{match:t.match}))}
              </div>`:a.s6}
        </div>
        ${i.map((t,r)=>this._renderCondition(t,e,r,i.length>1))}
        <button
          class="add-btn small"
          type="button"
          @click=${()=>this._updateRule(e,{conditions:[...i,(0,c.EQ)()]})}
        >
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("add_condition","Add condition")}
        </button>
      </div>
    `}render(){if(!this.value)return a.qy``;const t=this._rules(),e=(0,c.lP)(this.value,this.hass),r=this.hass?t.findIndex(t=>t&&t.color===e&&e!==this.value.fallback):-1;return a.qy`
      <div class="editor">
        <div class="hint">
          ${this._t("hint","The first rule that matches sets the color. If none match, the color below is used.")}
        </div>
        ${t.map((e,a)=>this._renderRule(e,a,t.length,r))}
        <button class="add-btn" type="button" @click=${()=>this._setRules([...t,(0,c.HC)()])}>
          <ha-icon icon="mdi:plus"></ha-icon>${this._t("add_rule","Add rule")}
        </button>

        <div class="sub-label otherwise">${this._t("entity_color","Otherwise use an entity's own color")}</div>
        <div class="hint">
          ${this._t("entity_color_desc","Optional. Pick a light or other entity to follow its color (for example the bulb's RGB color). Leave empty to skip.")}
        </div>
        ${this._form({entity_color:this.value.entity_color||""},[{name:"entity_color",selector:{entity:{}}}],t=>{const e=Object.assign({},this.value);t.entity_color?e.entity_color=t.entity_color:delete e.entity_color,this._emit(e)})}

        <div class="sub-label otherwise">
          ${this.value.entity_color?this._t("otherwise_missing","If that entity is unavailable, use"):this._t("otherwise","Otherwise use")}
        </div>
        <ultra-color-picker
          .hass=${this.hass}
          .value=${this.value.fallback||""}
          ?no-gradients=${this.noGradients}
          no-state
          @value-changed=${t=>{t.stopPropagation(),this._emit(Object.assign(Object.assign({},this.value),{fallback:t.detail.value}))}}
        ></ultra-color-picker>
      </div>
    `}};h.styles=a.AH`
    :host {
      display: block;
    }
    .editor {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 8px;
    }
    .hint {
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .rule {
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: var(--card-background-color);
    }
    .rule.active {
      border-color: var(--primary-color);
    }
    .rule-head,
    .condition-row,
    .when-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .rule-head {
      justify-content: space-between;
    }
    .rule-title {
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .badge {
      font-size: 11px;
      font-weight: 500;
      padding: 1px 6px;
      border-radius: 10px;
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
    }
    .rule-actions {
      display: inline-flex;
      gap: 2px;
    }
    .grow,
    .match {
      flex: 1;
      min-width: 0;
    }
    .op {
      flex: 0 0 120px;
    }
    .condition {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 8px;
      border-radius: 6px;
      background: var(--secondary-background-color);
    }
    .sub-label {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
    }
    .otherwise {
      margin-top: 4px;
    }
    .icon-btn {
      background: none;
      border: none;
      padding: 4px;
      cursor: pointer;
      color: var(--secondary-text-color);
      display: inline-flex;
      --mdc-icon-size: 18px;
    }
    .icon-btn[disabled] {
      opacity: 0.35;
      cursor: default;
    }
    .icon-btn.danger {
      color: var(--error-color);
    }
    .add-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      align-self: flex-start;
      padding: 6px 10px;
      border: 1px dashed var(--primary-color);
      border-radius: 6px;
      background: none;
      color: var(--primary-color);
      cursor: pointer;
      font: inherit;
      --mdc-icon-size: 18px;
    }
    .add-btn.small {
      padding: 4px 8px;
      font-size: 13px;
    }
  `,p([(0,o.MZ)({attribute:!1})],h.prototype,"hass",void 0),p([(0,o.MZ)({attribute:!1})],h.prototype,"value",void 0),p([(0,o.MZ)({type:Boolean,attribute:"no-gradients"})],h.prototype,"noGradients",void 0),h=p([(0,o.EM)("uc-state-color-editor")],h);var g=function(t,e,r,a){var o,i=arguments.length,s=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,a);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s};const b=["transparent","#000000","#333333","#666666","#999999","#CCCCCC","#FFFFFF","#FF0000","#FF3333","#FF6666","#FF9999","#FFCCCC","#FF6600","#FF8833","#FFAA66","#FFCC99","#FFE6CC","#FFFF00","#FFFF33","#FFFF66","#FFFF99","#FFFFCC","#00FF00","#33FF33","#66FF66","#99FF99","#CCFFCC","#0000FF","#3333FF","#6666FF","#9999FF","#CCCCFF","#9900FF","#AA33FF","#BB66FF","#CC99FF","#DDCCFF","var(--primary-color)","var(--accent-color)","var(--error-color)","var(--warning-color)","var(--success-color)","var(--info-color)","var(--primary-text-color)","var(--secondary-text-color)","var(--disabled-text-color)","var(--divider-color)"],v=[{name:"Sunset",value:"linear-gradient(90deg, #FF6B6B 0%, #FFE66D 50%, #FF6B6B 100%)"},{name:"Ocean",value:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{name:"Rainbow",value:"linear-gradient(90deg, #ff0000 0%, #ff7f00 14%, #ffff00 28%, #00ff00 42%, #0000ff 56%, #4b0082 70%, #9400d3 84%, #ff0000 100%)"},{name:"Fire",value:"linear-gradient(45deg, #ff0000 0%, #ff6600 33%, #ffcc00 66%, #ffff66 100%)"},{name:"Forest",value:"linear-gradient(180deg, #134e5e 0%, #71b280 100%)"},{name:"Sky",value:"linear-gradient(to bottom, #87CEEB 0%, #98D8E8 50%, #B0E0E6 100%)"},{name:"Purple Haze",value:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{name:"Mint",value:"linear-gradient(120deg, #a1ffce 0%, #faffd1 100%)"},{name:"Peach",value:"linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)"},{name:"Cool Blues",value:"linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)"},{name:"Warm Reds",value:"linear-gradient(135deg, #f12711 0%, #f5af19 100%)"},{name:"Neon Glow",value:"radial-gradient(circle, rgba(120, 119, 198, 1) 0%, rgba(255, 119, 198, 1) 50%, rgba(255, 119, 198, 0) 100%)"}];let f=class extends a.WF{constructor(){super(...arguments),this.disabled=!1,this.noGradients=!1,this.noState=!1,this._currentValue=void 0,this._showPalette=!1,this._textInputValue=void 0,this._favoriteColors=[],this._transparency=100}connectedCallback(){var t;super.connectedCallback();const e=null!==(t=this._documentClickHandler)&&void 0!==t?t:this._documentClickHandler=this._handleDocumentClick.bind(this);document.addEventListener("click",e,!0),i.m.refreshFromStorage(),this.hass&&i.m.setHass(this.hass),this._favoritesUnsubscribe=i.m.subscribe(t=>{this._favoriteColors=t,this.requestUpdate()})}get _stringValue(){const t=this.value;return(0,c.Vc)(t)?t.fallback||void 0:"string"==typeof t?t:void 0}firstUpdated(){this._currentValue=this._stringValue,this._textInputValue=this._stringValue,this._transparency=this._extractTransparency(this._stringValue)}disconnectedCallback(){super.disconnectedCallback(),this._documentClickHandler&&document.removeEventListener("click",this._documentClickHandler,!0),this._favoritesUnsubscribe&&(this._favoritesUnsubscribe(),this._favoritesUnsubscribe=void 0)}_handleDocumentClick(t){var e,r,a;if(!this._showPalette)return;const o=null===(r=(e=t).composedPath)||void 0===r?void 0:r.call(e);if(o&&o.includes(this))return;const i=t.target;(null===(a=this.shadowRoot)||void 0===a?void 0:a.contains(i))||i instanceof HTMLInputElement&&"color"===i.type||i instanceof HTMLElement&&i.closest('[role="dialog"], .prompt, .modal')||(this._showPalette=!1)}updated(t){t.has("hass")&&this.hass&&i.m.setHass(this.hass),t.has("value")&&(this._currentValue=this._stringValue,this._textInputValue=this._stringValue,this._transparency=this._extractTransparency(this._stringValue))}_togglePalette(t){t.stopPropagation(),this.disabled||(this._showPalette||(this._currentValue=this._stringValue,this._textInputValue=this._stringValue,this._transparency=this._extractTransparency(this._stringValue)),this._showPalette=!this._showPalette)}_selectColor(t,e){e.stopPropagation();const r=this._applyTransparency(t,this._transparency);this._currentValue=r,this._textInputValue=r,this.value=r;const a=new CustomEvent("value-changed",{detail:{value:r},bubbles:!0,composed:!0});this.dispatchEvent(a),this.requestUpdate()}_applyColorSelection(){this.value=this._currentValue,this._showPalette=!1;const t=new CustomEvent("value-changed",{detail:{value:this._currentValue},bubbles:!0,composed:!0});this.dispatchEvent(t),this.requestUpdate()}_handleNativeColorChange(t){t.stopPropagation();const e=t.target.value,r=this._applyTransparency(e,this._transparency);this._currentValue=r,this._textInputValue=r,this.value=r;const a=new CustomEvent("value-changed",{detail:{value:r},bubbles:!0,composed:!0});this.dispatchEvent(a),this.requestUpdate()}_handleTextInputChange(t){const e=t.target;this._textInputValue=e.value}_handleTextInputKeyDown(t){"Enter"===t.key?(t.preventDefault(),this._applyTextInputValue()):"Escape"===t.key&&(t.preventDefault(),this._textInputValue=this._currentValue,this._showPalette=!1)}_applyTextInputValue(){if(void 0!==this._textInputValue&&this._isValidColor(this._textInputValue)){this._currentValue=this._textInputValue,this.value=this._textInputValue,this._transparency=this._extractTransparency(this._textInputValue);const t=new CustomEvent("value-changed",{detail:{value:this._textInputValue},bubbles:!0,composed:!0});this.dispatchEvent(t),this._showPalette=!1,this.requestUpdate()}}_isValidColor(t){if(!t)return!1;if((0,n.bn)(t)){if(!/^(linear-gradient|radial-gradient|conic-gradient|repeating-linear-gradient|repeating-radial-gradient|repeating-conic-gradient)\s*\(/i.test(t.trim()))return!1;let e=0;for(const r of t)if("("===r&&e++,")"===r&&e--,e<0)return!1;return 0===e}return[/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8})$/,/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/,/^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)$/,/^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/,/^hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*[\d.]+\s*\)$/,/^var\(--[\w-]+(?:\s*,\s*[^()]*(?:\([^()]*\)[^()]*)*)?\)$/].some(e=>e.test(t))||["transparent","aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"].includes(t.toLowerCase())}_resetToDefault(){const t=this.defaultValue||"";this._currentValue=t;const e=new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_addToFavorites(){const t=this._currentValue||this._stringValue;if(!t||i.m.hasColor(t))return;const e=this._showPalette;setTimeout(()=>{const r=prompt("Enter a name for this color:",this._getColorDisplayName(t));r&&r.trim()?(i.m.addFavorite(r.trim(),t),this._showPalette=e,this.requestUpdate()):this._showPalette=e},10)}_getColorDisplayName(t){var e;const r={"#ff0000":"Red","#00ff00":"Green","#0000ff":"Blue","#ffff00":"Yellow","#ff00ff":"Magenta","#00ffff":"Cyan","#000000":"Black","#ffffff":"White","#808080":"Gray","#ffa500":"Orange","#800080":"Purple","#ffc0cb":"Pink"},a=t.toLowerCase();if(r[a])return r[a];if(t.startsWith("var(--")){const r=null===(e=t.match(/var\(--([^)]+)\)/))||void 0===e?void 0:e[1];if(r)return r.replace(/-/g," ").replace(/\b\w/g,t=>t.toUpperCase())}return t}_getDisplayValue(){return this._currentValue&&""!==this._currentValue?this._currentValue:this.defaultValue||""}_getColorForNativeInput(){const t=this._getDisplayValue();if("transparent"===t)return"#ffffff";if((0,n.bn)(t))return"#000000";if(t.startsWith("var(--")){const e=this._resolveCSSColor(t);if(e&&e.startsWith("rgb")){const t=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[\d.]+)?\s*\)/);if(t){const[e,r,a,o]=t,i=t=>t.toString(16).padStart(2,"0");return`#${i(parseInt(r))}${i(parseInt(a))}${i(parseInt(o))}`}}return t.includes("--primary-color")?"#03a9f4":t.includes("--primary-text-color")?"#ffffff":"#000000"}if(t.startsWith("rgba")){const e=t.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)/);if(e){const[t,r,a,o]=e,i=t=>t.toString(16).padStart(2,"0");return`#${i(parseInt(r))}${i(parseInt(a))}${i(parseInt(o))}`}}if(t.startsWith("rgb(")){const e=t.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);if(e){const[t,r,a,o]=e,i=t=>t.toString(16).padStart(2,"0");return`#${i(parseInt(r))}${i(parseInt(a))}${i(parseInt(o))}`}}return t.startsWith("#")?t:"#000000"}_isDefaultValue(){return!this._currentValue||""===this._currentValue||this._currentValue===this.defaultValue}_getContrastColor(t){const e=this._getContrastTheme(t);return"light"===e?"#000000":"dark"===e?"#ffffff":"var(--primary-text-color)"}_getContrastTheme(t){let e=t;if(!e||"transparent"===e)return null;if((0,n.bn)(e))return"dark";if((!e.startsWith("#")&&!e.startsWith("rgb")||e.includes("var("))&&(e=this._resolveCSSColor(e),!e.startsWith("rgb")))return null;const r=e.match(/rgba\([^)]*,\s*([\d.]+)\s*\)/);if(r&&parseFloat(r[1])<.5)return null;let a=0,o=0,i=0;if(e.startsWith("#")){const t=e.replace("#",""),r=t.length;6===r||8===r?(a=parseInt(t.substr(0,2),16),o=parseInt(t.substr(2,2),16),i=parseInt(t.substr(4,2),16)):3===r&&(a=parseInt(t[0]+t[0],16),o=parseInt(t[1]+t[1],16),i=parseInt(t[2]+t[2],16))}else{const t=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);t&&(a=parseInt(t[1],10),o=parseInt(t[2],10),i=parseInt(t[3],10))}return(.299*a+.587*o+.114*i)/255>.5?"light":"dark"}_resolveCSSColor(t){if(!t)return t;const e=t.trim();if((e.startsWith("#")||e.startsWith("rgb"))&&!e.includes("var("))return e;try{const t=document.createElement("span");t.style.backgroundColor=e,(this.shadowRoot||document.body).appendChild(t);const r=getComputedStyle(t).backgroundColor;return t.remove(),r&&"rgba(0, 0, 0, 0)"!==r?r:e}catch(t){return e}}_extractTransparency(t){if(!t)return 100;if((0,n.bn)(t))return 100;const e=t.startsWith("var(--")?this._resolveCSSColor(t):t,r=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/);if(r){const t=r[4]?parseFloat(r[4]):1;return Math.round(100*t)}if(e.match(/^#[0-9A-Fa-f]{8}$/)){const t=parseInt(e.substring(7,9),16)/255;return Math.round(100*t)}const a=e.match(/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([\d.]+))?\s*\)/);if(a){const t=a[4]?parseFloat(a[4]):1;return Math.round(100*t)}return"transparent"===e?0:100}_hexToRgb(t){const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}_getBaseColor(t){if(!t)return"#000000";if((0,n.bn)(t))return t;let e=t;if(t.startsWith("var(--")&&(e=this._resolveCSSColor(t),e===t||e.startsWith("var(--")))return t;const r=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[\d.]+)?\s*\)/);if(r){const[t,e,a,o]=r,i=t=>parseInt(t).toString(16).padStart(2,"0");return`#${i(e)}${i(a)}${i(o)}`}if(e.match(/^#[0-9A-Fa-f]{8}$/))return e.substring(0,7);const a=e.match(/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*[\d.]+)?\s*\)/);if(a){const[t,e,r,o]=a;return`hsl(${e}, ${r}%, ${o}%)`}return"transparent"===e?"#FFFFFF":e}_applyTransparency(t,e){if((0,n.bn)(t))return t;if(100===e)return t;if(0===e)return"transparent";const r=(e/100).toFixed(2);let a=t;if(t.startsWith("var(--")&&(a=this._resolveCSSColor(t),a===t||a.startsWith("var(--")))return t;if(a.startsWith("#")){const t=this._hexToRgb(a);if(t)return`rgba(${t.r}, ${t.g}, ${t.b}, ${r})`}const o=a.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)/);if(o){const[t,e,a,i]=o;return`rgba(${e}, ${a}, ${i}, ${r})`}const i=a.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);if(i){const[t,e,a,o]=i;return`rgba(${e}, ${a}, ${o}, ${r})`}const s=a.match(/hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/);if(s){const[t,e,a,o]=s;return`hsla(${e}, ${a}%, ${o}%, ${r})`}const l=a.match(/hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*[\d.]+\s*\)/);if(l){const[t,e,a,o]=l;return`hsla(${e}, ${a}%, ${o}%, ${r})`}const c=this._resolveCSSColor(a);return c!==a?this._applyTransparency(c,e):t}_handleTransparencyChange(t){const e=t.target,r=parseInt(e.value,10);this._transparency=r;const a=this._getBaseColor(this._currentValue),o=this._applyTransparency(a,r);this._currentValue=o,this._textInputValue=o,this.value=o;const i=new CustomEvent("value-changed",{detail:{value:o},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate()}_emitValue(t){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}_switchToState(t){var e,r;t.stopPropagation(),this.disabled||(this._showPalette=!1,this._emitValue((0,c.qE)(null!==(r=null!==(e=this._stringValue)&&void 0!==e?e:this.defaultValue)&&void 0!==r?r:"")))}_switchToSingle(t){t.stopPropagation(),this.disabled||this._emitValue(this._stringValue||"")}_renderStateMode(t){const e=(0,l.Bs)(),r=(0,c.lP)(t,this.hass)||this.defaultValue||"transparent",o=(t.rules||[]).length;return a.qy`
      <div class="ultra-color-picker-container">
        ${this.label?a.qy`<label class="color-label">${this.label}</label>`:""}
        <div class="color-picker-wrapper">
          <div class="color-input-field state-mode ${this.disabled?"disabled":""}">
            <span class="state-swatch" style="background: ${r};"></span>
            <ha-icon icon="mdi:state-machine" class="state-icon"></ha-icon>
            <span class="color-value"
              >${(0,l.kg)("editor.state_color.summary",e,"By state")} ·
              ${o}
              ${1===o?(0,l.kg)("editor.state_color.rule_one",e,"rule"):(0,l.kg)("editor.state_color.rule_many",e,"rules")}${t.entity_color?a.qy` · ${(0,l.kg)("editor.state_color.entity_color_short",e,"entity color")}`:""}</span
            >
          </div>
          <div class="reset-button-wrapper">
            <ha-icon-button
              class="reset-button"
              .disabled=${this.disabled}
              @click=${this._switchToSingle}
              .title=${(0,l.kg)("editor.state_color.use_single",e,"Use a single color")}
            >
              <ha-icon icon="mdi:palette"></ha-icon>
            </ha-icon-button>
          </div>
        </div>
        <uc-state-color-editor
          .hass=${this.hass}
          .value=${t}
          ?no-gradients=${this.noGradients}
          @value-changed=${t=>{t.stopPropagation(),this._emitValue(t.detail.value)}}
        ></uc-state-color-editor>
      </div>
    `}render(){if((0,c.Vc)(this.value))return this._renderStateMode(this.value);const t=this._getDisplayValue(),e=this._getColorForNativeInput(),r=(0,n.bn)(t);return a.qy`
      <div class="ultra-color-picker-container">
        ${this.label?a.qy`<label class="color-label">${this.label}</label>`:""}

        <div class="color-picker-wrapper">
          <!-- Main trigger input field -->
          <div
            class="color-input-field ${this.disabled?"disabled":""} ${r?"gradient-mode":""}"
            style="${r?`background: ${t}; color: ${this._getContrastColor(t)};`:`background-color: ${t}; color: ${this._getContrastColor(t)};`}"
            @click=${this._togglePalette}
            tabindex="0"
            role="button"
            aria-label="Open color palette"
            @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._togglePalette(t))}}
          >
            <span class="color-value ${r?"gradient-text":""}"
              >${t}</span
            >
            ${r?a.qy`<ha-icon icon="mdi:gradient" class="gradient-icon"></ha-icon>`:""}
            <ha-icon
              icon="mdi:chevron-${this._showPalette?"up":"down"}"
              class="dropdown-icon"
            ></ha-icon>
          </div>

          <!-- Reset button -->
          <div class="reset-button-wrapper">
            <ha-icon-button
              class="reset-button ${this._isDefaultValue()?"disabled":""}"
              .disabled=${this._isDefaultValue()}
              @click=${this._resetToDefault}
              .title=${"Reset to default"}
            >
              <ha-icon icon="mdi:refresh"></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        <!-- Accordion-style palette -->
        ${this._showPalette?a.qy`
              <div class="color-palette-accordion">
                ${this.noState?"":a.qy`<button class="state-mode-btn" type="button" @click=${this._switchToState}>
                      <ha-icon icon="mdi:state-machine"></ha-icon>
                      <span
                        >${(0,l.kg)("editor.state_color.by_state",(0,l.Bs)(),"Color by entity state")}</span
                      >
                    </button>`}
                <!-- Text Input Section -->
                <div class="text-input-section">
                  <div class="input-header">
                    <label class="input-label">Type color value:</label>
                    <div class="native-picker-wrapper">
                      <button
                        class="native-picker-btn"
                        type="button"
                        title="Open native color picker"
                      >
                        <ha-icon icon="mdi:eyedropper"></ha-icon>
                      </button>
                      <input
                        id="native-color-input"
                        type="color"
                        .value=${e}
                        @change=${this._handleNativeColorChange}
                        @click=${t=>t.stopPropagation()}
                        @focus=${t=>t.stopPropagation()}
                        @blur=${t=>t.stopPropagation()}
                        class="native-color-overlay"
                        title="Open native color picker"
                      />
                    </div>
                  </div>

                  <div class="text-input-wrapper">
                    <input
                      type="text"
                      class="color-text-input ${this._isValidColor(this._textInputValue||"")?"valid":"invalid"}"
                      .value=${this._textInputValue||""}
                      @input=${this._handleTextInputChange}
                      @keydown=${this._handleTextInputKeyDown}
                      @click=${t=>t.stopPropagation()}
                      @focus=${t=>t.stopPropagation()}
                      placeholder="e.g. #ff0000, rgb(255,0,0), linear-gradient(90deg, red, blue), var(--primary-color)"
                      spellcheck="false"
                    />
                    <button
                      class="apply-text-btn ${this._isValidColor(this._textInputValue||"")?"":"disabled"}"
                      @click=${t=>{t.stopPropagation(),this._applyTextInputValue()}}
                      .disabled=${!this._isValidColor(this._textInputValue||"")}
                      type="button"
                      title="Apply color"
                    >
                      <ha-icon icon="mdi:check"></ha-icon>
                    </button>
                  </div>
                </div>

                <!-- Opacity Slider Section -->
                ${(0,n.bn)(this._currentValue||"")?a.qy`
                      <div class="gradient-info-section">
                        <ha-icon icon="mdi:information" class="info-icon"></ha-icon>
                        <span class="gradient-info-text">
                          Opacity slider is disabled for gradients. Use rgba() colors within your
                          gradient for transparency.
                        </span>
                      </div>
                    `:a.qy`
                      <div class="transparency-section">
                        <div class="transparency-header">
                          <label class="transparency-label">Opacity:</label>
                          <span class="transparency-value">${this._transparency}%</span>
                        </div>
                        <div class="transparency-slider-wrapper">
                          <input
                            type="range"
                            class="transparency-slider"
                            min="0"
                            max="100"
                            step="1"
                            .value=${this._transparency.toString()}
                            @input=${this._handleTransparencyChange}
                            @click=${t=>t.stopPropagation()}
                            title="Adjust opacity (100% = fully opaque, 0% = fully transparent)"
                          />
                          <div class="transparency-track">
                            <div
                              class="transparency-preview"
                              style="background: linear-gradient(to right, 
                                transparent 0%, 
                                ${this._getBaseColor(this._currentValue)} 100%
                              );"
                            ></div>
                          </div>
                        </div>
                      </div>
                    `}

                <!-- Color Palette Grid -->
                <div class="palette-grid">
                  ${b.map(t=>a.qy`
                      <div role="button" tabindex="0" data-uc-activate
                        class="color-swatch ${this._currentValue===t?"selected":""}"
                        style="background-color: ${t}"
                        @click=${e=>this._selectColor(t,e)}
                        title="${t}"
                      ></div>
                    `)}
                </div>

                <!-- Gradient Presets Section -->
                ${this.noGradients?"":a.qy`<div class="gradient-presets-section">
                  <div class="gradient-presets-header">
                    <label class="gradient-presets-label"
                          >${(0,l.kg)("editor.color_picker.gradient_presets",(0,l.Bs)(),"Gradient Presets")}</label
                        >
                  </div>
                  <div class="gradient-presets-grid">
                    ${v.map(t=>a.qy`
                        <div role="button" tabindex="0" data-uc-activate
                          class="gradient-preset-swatch ${this._currentValue===t.value?"selected":""}"
                          style="background: ${t.value}"
                          @click=${e=>this._selectColor(t.value,e)}
                          title="${t.name}"
                        >
                          <span class="gradient-preset-name">${t.name}</span>
                        </div>
                      `)}
                  </div>
                </div>`}

                <!-- Favorites Section (always visible so users can add favorites) -->
                <div class="favorites-section">
                  <div class="favorites-header">
                    <label class="favorites-label">Favorite Colors</label>
                    ${this._currentValue&&!i.m.hasColor(this._currentValue)?a.qy`
                          <button
                            class="add-favorite-btn"
                            @click=${this._addToFavorites}
                            title="Add current color to favorites"
                            type="button"
                          >
                            <ha-icon icon="mdi:heart-plus"></ha-icon>
                          </button>
                        `:""}
                  </div>

                  ${this._favoriteColors.length>0?a.qy`
                        <div class="favorites-grid">
                          ${this._favoriteColors.map(t=>a.qy`
                              <div role="button" tabindex="0" data-uc-activate
                                class="favorite-swatch ${this._currentValue===t.color?"selected":""}"
                                style="background: ${t.color}"
                                @click=${e=>this._selectColor(t.color,e)}
                                title="${t.name} (${t.color})"
                              >
                                <span class="favorite-preset-name contrast-${this._getContrastTheme(t.color)||"dark"}">${t.name}</span>
                              </div>
                            `)}
                        </div>
                      `:a.qy`
                        <div class="no-favorites">
                          <span>No favorite colors yet</span>
                          <small>Select a color and click the heart to add it</small>
                        </div>
                      `}
                </div>
              </div>
            `:""}
      </div>
    `}static get styles(){return a.AH`
      .ultra-color-picker-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        max-width: 100%;
        position: relative;
        box-sizing: border-box;
        /* Remove z-index to prevent creating stacking context that blocks dropdown menus */
        z-index: auto;
      }

      .color-label {
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
        margin-bottom: 4px;
      }

      .color-picker-wrapper {
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        min-width: 0;
        /* Allow palette dropdown to overflow vertically, but clip horizontally */
        overflow-x: hidden;
        overflow-y: visible;
        /* Remove z-index to prevent blocking dropdown menus from other components */
        z-index: auto;
      }

      .color-input-field {
        flex: 1 1 0%;
        min-width: 0;
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-family: var(--code-font-family, monospace);
        font-size: 14px;
        cursor: pointer;
        user-select: none;
        transition: all 0.2s ease;
        min-height: 36px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
      }

      .color-input-field:hover:not(.disabled) {
        border-color: var(--primary-color);
        background: var(--primary-color-light, rgba(33, 150, 243, 0.1));
      }

      .color-input-field:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb, 33, 150, 243), 0.2);
      }

      .color-input-field.disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: var(--disabled-color, #f5f5f5);
        color: var(--disabled-text-color);
      }

      .color-value {
        flex: 1 1 0%;
        min-width: 0;
        /* Inherits the contrast colour the field picks for its swatch. */
        color: inherit;
        font-family: var(--code-font-family, monospace);
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .color-input-field.gradient-mode {
        background-size: cover;
        background-position: center;
      }

      .color-value.gradient-text {
        text-shadow:
          0 0 4px rgba(0, 0, 0, 0.7),
          0 0 8px rgba(0, 0, 0, 0.5);
      }

      .gradient-icon {
        --mdc-icon-size: 18px;
        color: var(--primary-color);
        margin-left: 4px;
        margin-right: 4px;
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
      }

      .dropdown-icon {
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        transition: transform 0.2s ease;
        margin-left: 8px;
      }

      .color-input-field.state-mode {
        justify-content: flex-start;
        gap: 8px;
        cursor: default;
        font-family: inherit;
      }

      .color-input-field.state-mode:hover {
        background: var(--card-background-color, #fff);
        border-color: var(--divider-color);
      }

      .state-swatch {
        width: 18px;
        height: 18px;
        border-radius: 4px;
        border: 1px solid var(--divider-color);
        flex: 0 0 18px;
      }

      .state-icon {
        --mdc-icon-size: 18px;
        color: var(--primary-color);
      }

      .state-mode-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 12px;
        padding: 8px 10px;
        border: 1px dashed var(--primary-color);
        border-radius: 6px;
        background: none;
        color: var(--primary-color);
        font: inherit;
        font-size: 14px;
        cursor: pointer;
        --mdc-icon-size: 18px;
      }

      .state-mode-btn:hover {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      }

      .reset-button-wrapper {
        width: 40px;
        height: 40px;
        flex: 0 0 40px;
        flex-shrink: 0;
        box-sizing: border-box;
        overflow: hidden;
        contain: size layout style;
      }

      .reset-button {
        --mdc-icon-button-size: 40px;
        --mdc-icon-size: 20px;
        --mdc-theme-primary: var(--primary-color);
        border-radius: 6px;
        transition: all 0.2s ease;
        box-sizing: border-box;
      }

      .reset-button:not(.disabled):hover {
        background: rgba(var(--primary-color-rgb, 33, 150, 243), 0.1);
        transform: rotate(180deg);
        transform-origin: center center;
      }

      .reset-button ha-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        transform-origin: center center;
      }

      .reset-button.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .reset-button.disabled ha-icon {
        color: var(--disabled-text-color);
      }

      .color-palette-accordion {
        margin-top: 12px;
        background: var(--card-background-color, white);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 16px;
        width: 100%;
        box-sizing: border-box;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        animation: expandDown 0.2s ease-out;
        position: relative;
        z-index: ${s.Mu.COLOR_PICKER_PALETTE};
      }

      @keyframes expandDown {
        from {
          opacity: 0;
          transform: scaleY(0.8);
          transform-origin: top;
        }
        to {
          opacity: 1;
          transform: scaleY(1);
          transform-origin: top;
        }
      }

      .text-input-section {
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--divider-color);
        width: 100%;
        box-sizing: border-box;
      }

      .input-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
      }

      .input-label {
        display: block;
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .text-input-wrapper {
        display: flex;
        gap: 8px;
        align-items: stretch;
        width: 100%;
        box-sizing: border-box;
      }

      .color-text-input {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
        font-family: var(--code-font-family, 'Courier New', monospace);
        font-size: 14px;
        transition: all 0.2s ease;
        outline: none;
        box-sizing: border-box;
        min-width: 0;
        width: 100%;
      }

      .color-text-input:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb, 33, 150, 243), 0.2);
      }

      .color-text-input.valid {
        border-color: var(--success-color, #4caf50);
      }

      .color-text-input.invalid {
        border-color: var(--error-color, #f44336);
      }

      .apply-text-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 12px;
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease;
        min-width: 44px;
      }

      .apply-text-btn:hover:not(.disabled) {
        background: var(--primary-color-dark, var(--primary-color));
        transform: scale(1.05);
      }

      .apply-text-btn.disabled {
        background: var(--disabled-color, #cccccc);
        color: var(--disabled-text-color);
        cursor: not-allowed;
        opacity: 0.6;
      }

      .apply-text-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      /* Opacity Slider Section */
      .transparency-section {
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--divider-color);
      }

      /* Gradient Info Section */
      .gradient-info-section {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        margin-bottom: 16px;
        background: rgba(var(--primary-color-rgb, 33, 150, 243), 0.1);
        border-radius: 6px;
        border: 1px solid rgba(var(--primary-color-rgb, 33, 150, 243), 0.2);
      }

      .gradient-info-section .info-icon {
        --mdc-icon-size: 20px;
        color: var(--primary-color);
        flex-shrink: 0;
      }

      .gradient-info-text {
        font-size: 13px;
        color: var(--primary-text-color);
        line-height: 1.4;
      }

      .transparency-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
      }

      .transparency-label {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .transparency-value {
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-color);
        font-family: var(--code-font-family, monospace);
      }

      .transparency-slider-wrapper {
        position: relative;
        width: 100%;
        height: 32px;
        margin-bottom: 8px;
      }

      .transparency-track {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 8px;
        transform: translateY(-50%);
        border-radius: 4px;
        overflow: hidden;
        pointer-events: none;
        border: 1px solid var(--divider-color);
        background:
          linear-gradient(45deg, #ccc 25%, transparent 25%),
          linear-gradient(-45deg, #ccc 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #ccc 75%),
          linear-gradient(-45deg, transparent 75%, #ccc 75%);
        background-size: 8px 8px;
        background-position:
          0 0,
          0 4px,
          4px -4px,
          -4px 0px;
      }

      .transparency-preview {
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }

      .transparency-slider {
        position: relative;
        width: 100%;
        height: 8px;
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        outline: none;
        cursor: pointer;
        z-index: ${s.Mu.MODULE_CONTENT};
        margin: 0;
        padding: 12px 0;
      }

      /* Webkit/Chrome slider thumb */
      .transparency-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        border: 3px solid white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .transparency-slider::-webkit-slider-thumb:hover {
        transform: scale(1.2);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
      }

      .transparency-slider::-webkit-slider-thumb:active {
        transform: scale(1.1);
        background: var(--primary-color-dark, var(--primary-color));
      }

      /* Firefox slider thumb */
      .transparency-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        border: 3px solid white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .transparency-slider::-moz-range-thumb:hover {
        transform: scale(1.2);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
      }

      .transparency-slider::-moz-range-thumb:active {
        transform: scale(1.1);
        background: var(--primary-color-dark, var(--primary-color));
      }

      /* Firefox track (hide default track) */
      .transparency-slider::-moz-range-track {
        background: transparent;
        border: none;
      }

      .palette-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(32px, 1fr));
        gap: 8px;
        margin-bottom: 0;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
      }

      .color-swatch {
        width: 28px;
        height: 28px;
        border-radius: 4px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: all 0.2s ease;
        position: relative;
      }

      .color-swatch:hover {
        transform: scale(1.1);
        border-color: var(--primary-color);
      }

      .color-swatch.selected {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb, 33, 150, 243), 0.3);
      }

      .color-swatch[style*='var(--'] {
        position: relative;
      }

      .color-swatch[style*='var(--']:after {
        content: 'T';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
        font-weight: bold;
        /* Fixed dark text + white halo stays readable over any swatch color in both themes */
        color: #212121;
        text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
      }

      /* Transparent swatch styling */
      .color-swatch[style*='transparent'] {
        background:
          linear-gradient(45deg, #ccc 25%, transparent 25%),
          linear-gradient(-45deg, #ccc 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #ccc 75%),
          linear-gradient(-45deg, transparent 75%, #ccc 75%);
        background-size: 8px 8px;
        background-position:
          0 0,
          0 4px,
          4px -4px,
          -4px 0px;
        position: relative;
      }

      .color-swatch[style*='transparent']:after {
        content: '∅';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 14px;
        font-weight: bold;
        /* Fixed dark text + white halo stays readable over the light checkerboard in both themes */
        color: #212121;
        text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
      }

      .native-picker-wrapper {
        position: relative;
        display: inline-block;
      }

      .native-picker-btn {
        background: none;
        border: none;
        padding: 8px;
        border-radius: 6px;
        cursor: pointer;
        color: var(--primary-color);
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 36px;
        height: 36px;
        pointer-events: none; /* Let clicks pass through to the overlay */
      }

      .native-picker-btn:hover {
        background: rgba(var(--primary-color-rgb, 33, 150, 243), 0.1);
        transform: scale(1.1);
      }

      .native-picker-btn ha-icon {
        --mdc-icon-size: 18px;
        transition: transform 0.2s ease;
      }

      .native-color-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
        border: none;
        background: transparent;
        z-index: ${s.Mu.MODULE_CONTENT};
        border-radius: 6px;
      }

      .native-color-overlay::-webkit-color-swatch-wrapper {
        padding: 0;
        border: none;
        border-radius: 6px;
      }

      .native-color-overlay::-webkit-color-swatch {
        border: none;
        border-radius: 6px;
      }

      .native-picker-wrapper:hover .native-picker-btn {
        background: rgba(var(--primary-color-rgb, 33, 150, 243), 0.1);
        transform: scale(1.1);
      }

      /* Gradient Presets Section */
      .gradient-presets-section {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid var(--divider-color);
      }

      .gradient-presets-header {
        margin-bottom: 12px;
      }

      .gradient-presets-label {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .gradient-presets-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 8px;
        margin-bottom: 0;
      }

      .gradient-preset-swatch {
        height: 40px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        /* No border: gradient fills to edge; ring only via box-shadow on hover/selected to avoid edge clipping */
      }

      .gradient-preset-swatch:hover {
        transform: scale(1.05);
        box-shadow: inset 0 0 0 2px var(--primary-color), 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      .gradient-preset-swatch.selected {
        box-shadow: inset 0 0 0 2px var(--primary-color), 0 0 0 3px rgba(var(--primary-color-rgb, 33, 150, 243), 0.3);
      }

      .gradient-preset-name {
        font-size: 11px;
        font-weight: 600;
        color: white;
        text-shadow:
          0 1px 3px rgba(0, 0, 0, 0.8),
          0 0 8px rgba(0, 0, 0, 0.6);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 2px 6px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 3px;
      }

      /* Favorites Section */
      .favorites-section {
        margin-top: 16px;
        padding-top: 16px;
        padding-bottom: 8px;
        border-top: 1px solid var(--divider-color);
        overflow: visible;
      }

      .favorites-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
      }

      .favorites-label {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .add-favorite-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        background: none;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        color: var(--primary-color);
        transition: all 0.2s ease;
      }

      .add-favorite-btn:hover {
        background: rgba(var(--primary-color-rgb, 33, 150, 243), 0.1);
        transform: scale(1.1);
      }

      .add-favorite-btn ha-icon {
        --mdc-icon-size: 16px;
      }

      .favorites-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 8px;
        margin-bottom: 0;
        width: 100%;
        box-sizing: border-box;
      }

      .favorite-swatch {
        height: 40px;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        /* No border: color fills to edge; ring via box-shadow on hover/selected to avoid edge clipping */
      }

      .favorite-swatch:hover {
        transform: scale(1.05);
        box-shadow: inset 0 0 0 2px var(--primary-color), 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      .favorite-swatch.selected {
        box-shadow: inset 0 0 0 2px var(--primary-color), 0 0 0 3px rgba(var(--primary-color-rgb, 33, 150, 243), 0.3);
      }

      .favorite-swatch .favorite-preset-name {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 2px 6px;
        border-radius: 3px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* Dark swatch: light text, dark pill (works in light and dark HA themes) */
      .favorite-swatch .favorite-preset-name.contrast-dark {
        color: #ffffff;
        background: rgba(0, 0, 0, 0.4);
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.5);
      }

      /* Light swatch: dark text, light pill (readable on coral, mint, etc.) */
      .favorite-swatch .favorite-preset-name.contrast-light {
        color: #000000;
        background: rgba(255, 255, 255, 0.55);
        text-shadow: 0 0 1px rgba(255, 255, 255, 0.9), 0 1px 2px rgba(0, 0, 0, 0.25);
      }

      .no-favorites {
        text-align: center;
        padding: 16px;
        color: var(--secondary-text-color);
      }

      .no-favorites span {
        display: block;
        font-size: 14px;
        margin-bottom: 4px;
      }

      .no-favorites small {
        font-size: 12px;
        opacity: 0.7;
      }

      @media (max-width: 768px) {
        .color-picker-wrapper {
          gap: 8px;
        }

        .color-input-field {
          font-size: 13px;
          padding: 6px 10px;
        }

        .color-palette-accordion {
          padding: 12px;
        }

        .palette-grid {
          grid-template-columns: repeat(auto-fit, minmax(28px, 1fr));
          gap: 6px;
        }

        .color-swatch {
          width: 28px;
          height: 28px;
        }

        .gradient-presets-grid {
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 6px;
        }

        .gradient-preset-swatch {
          height: 35px;
        }

        .gradient-preset-name {
          font-size: 10px;
          padding: 1px 4px;
        }

        .favorites-grid {
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 6px;
        }

        .favorite-swatch {
          height: 35px;
        }

        .favorite-preset-name {
          font-size: 10px;
          padding: 1px 4px;
        }

        .input-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }

        .text-input-wrapper {
          flex-direction: column;
          gap: 8px;
        }

        .color-text-input {
          font-size: 13px;
          padding: 8px 10px;
        }

        .apply-text-btn {
          width: 100%;
          justify-content: center;
        }
      }

      /* Extra small screens - further optimize text input */
      @media (max-width: 480px) {
        .color-text-input {
          font-size: 12px;
          padding: 6px 8px;
        }

        .color-text-input::placeholder {
          font-size: 11px;
        }
      }
    `}};g([(0,o.MZ)({attribute:!1})],f.prototype,"hass",void 0),g([(0,o.MZ)({attribute:!1})],f.prototype,"value",void 0),g([(0,o.MZ)()],f.prototype,"label",void 0),g([(0,o.MZ)()],f.prototype,"defaultValue",void 0),g([(0,o.MZ)({type:Boolean})],f.prototype,"disabled",void 0),g([(0,o.MZ)({type:Boolean,attribute:"no-gradients"})],f.prototype,"noGradients",void 0),g([(0,o.MZ)({type:Boolean,attribute:"no-state"})],f.prototype,"noState",void 0),g([(0,o.wk)()],f.prototype,"_currentValue",void 0),g([(0,o.wk)()],f.prototype,"_showPalette",void 0),g([(0,o.wk)()],f.prototype,"_textInputValue",void 0),g([(0,o.wk)()],f.prototype,"_favoriteColors",void 0),g([(0,o.wk)()],f.prototype,"_transparency",void 0),f=g([(0,o.EM)("ultra-color-picker")],f)}};