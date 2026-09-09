export const __webpack_esm_ids__=[7921];export const __webpack_esm_modules__={7921(e,t,r){var a=r(2618),o=r(4791),i=r(4748),s=r(1001),n=r(6477),l=function(e,t,r,a){var o,i=arguments.length,s=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,a);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};const c=["transparent","#000000","#333333","#666666","#999999","#CCCCCC","#FFFFFF","#FF0000","#FF3333","#FF6666","#FF9999","#FFCCCC","#FF6600","#FF8833","#FFAA66","#FFCC99","#FFE6CC","#FFFF00","#FFFF33","#FFFF66","#FFFF99","#FFFFCC","#00FF00","#33FF33","#66FF66","#99FF99","#CCFFCC","#0000FF","#3333FF","#6666FF","#9999FF","#CCCCFF","#9900FF","#AA33FF","#BB66FF","#CC99FF","#DDCCFF","var(--primary-color)","var(--accent-color)","var(--error-color)","var(--warning-color)","var(--success-color)","var(--info-color)","var(--primary-text-color)","var(--secondary-text-color)","var(--disabled-text-color)","var(--divider-color)"],d=[{name:"Sunset",value:"linear-gradient(90deg, #FF6B6B 0%, #FFE66D 50%, #FF6B6B 100%)"},{name:"Ocean",value:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{name:"Rainbow",value:"linear-gradient(90deg, #ff0000 0%, #ff7f00 14%, #ffff00 28%, #00ff00 42%, #0000ff 56%, #4b0082 70%, #9400d3 84%, #ff0000 100%)"},{name:"Fire",value:"linear-gradient(45deg, #ff0000 0%, #ff6600 33%, #ffcc00 66%, #ffff66 100%)"},{name:"Forest",value:"linear-gradient(180deg, #134e5e 0%, #71b280 100%)"},{name:"Sky",value:"linear-gradient(to bottom, #87CEEB 0%, #98D8E8 50%, #B0E0E6 100%)"},{name:"Purple Haze",value:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{name:"Mint",value:"linear-gradient(120deg, #a1ffce 0%, #faffd1 100%)"},{name:"Peach",value:"linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%)"},{name:"Cool Blues",value:"linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)"},{name:"Warm Reds",value:"linear-gradient(135deg, #f12711 0%, #f5af19 100%)"},{name:"Neon Glow",value:"radial-gradient(circle, rgba(120, 119, 198, 1) 0%, rgba(255, 119, 198, 1) 50%, rgba(255, 119, 198, 0) 100%)"}];let p=class extends a.WF{constructor(){super(...arguments),this.disabled=!1,this._currentValue=void 0,this._showPalette=!1,this._textInputValue=void 0,this._favoriteColors=[],this._transparency=100}connectedCallback(){var e;super.connectedCallback();const t=null!==(e=this._documentClickHandler)&&void 0!==e?e:this._documentClickHandler=this._handleDocumentClick.bind(this);document.addEventListener("click",t,!0),i.m.refreshFromStorage(),this.hass&&i.m.setHass(this.hass),this._favoritesUnsubscribe=i.m.subscribe(e=>{this._favoriteColors=e,this.requestUpdate()})}firstUpdated(){this._currentValue=this.value,this._textInputValue=this.value,this._transparency=this._extractTransparency(this.value)}disconnectedCallback(){super.disconnectedCallback(),this._documentClickHandler&&document.removeEventListener("click",this._documentClickHandler,!0),this._favoritesUnsubscribe&&(this._favoritesUnsubscribe(),this._favoritesUnsubscribe=void 0)}_handleDocumentClick(e){var t,r,a;if(!this._showPalette)return;const o=null===(r=(t=e).composedPath)||void 0===r?void 0:r.call(t);if(o&&o.includes(this))return;const i=e.target;(null===(a=this.shadowRoot)||void 0===a?void 0:a.contains(i))||i instanceof HTMLInputElement&&"color"===i.type||i instanceof HTMLElement&&i.closest('[role="dialog"], .prompt, .modal')||(this._showPalette=!1)}updated(e){e.has("hass")&&this.hass&&i.m.setHass(this.hass),e.has("value")&&(this._currentValue=this.value,this._textInputValue=this.value,this._transparency=this._extractTransparency(this.value))}_togglePalette(e){e.stopPropagation(),this.disabled||(this._showPalette||(this._currentValue=this.value,this._textInputValue=this.value,this._transparency=this._extractTransparency(this.value)),this._showPalette=!this._showPalette)}_selectColor(e,t){t.stopPropagation();const r=this._applyTransparency(e,this._transparency);this._currentValue=r,this._textInputValue=r,this.value=r;const a=new CustomEvent("value-changed",{detail:{value:r},bubbles:!0,composed:!0});this.dispatchEvent(a),this.requestUpdate()}_applyColorSelection(){this.value=this._currentValue,this._showPalette=!1;const e=new CustomEvent("value-changed",{detail:{value:this._currentValue},bubbles:!0,composed:!0});this.dispatchEvent(e),this.requestUpdate()}_handleNativeColorChange(e){e.stopPropagation();const t=e.target.value,r=this._applyTransparency(t,this._transparency);this._currentValue=r,this._textInputValue=r,this.value=r;const a=new CustomEvent("value-changed",{detail:{value:r},bubbles:!0,composed:!0});this.dispatchEvent(a),this.requestUpdate()}_handleTextInputChange(e){const t=e.target;this._textInputValue=t.value}_handleTextInputKeyDown(e){"Enter"===e.key?(e.preventDefault(),this._applyTextInputValue()):"Escape"===e.key&&(e.preventDefault(),this._textInputValue=this._currentValue,this._showPalette=!1)}_applyTextInputValue(){if(void 0!==this._textInputValue&&this._isValidColor(this._textInputValue)){this._currentValue=this._textInputValue,this.value=this._textInputValue,this._transparency=this._extractTransparency(this._textInputValue);const e=new CustomEvent("value-changed",{detail:{value:this._textInputValue},bubbles:!0,composed:!0});this.dispatchEvent(e),this._showPalette=!1,this.requestUpdate()}}_isValidColor(e){if(!e)return!1;if((0,n.bn)(e)){if(!/^(linear-gradient|radial-gradient|conic-gradient|repeating-linear-gradient|repeating-radial-gradient|repeating-conic-gradient)\s*\(/i.test(e.trim()))return!1;let t=0;for(const r of e)if("("===r&&t++,")"===r&&t--,t<0)return!1;return 0===t}return[/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8})$/,/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/,/^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)$/,/^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/,/^hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*[\d.]+\s*\)$/,/^var\(--[\w-]+(?:\s*,\s*[^()]*(?:\([^()]*\)[^()]*)*)?\)$/].some(t=>t.test(e))||["transparent","aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"].includes(e.toLowerCase())}_resetToDefault(){const e=this.defaultValue||"";this._currentValue=e;const t=new CustomEvent("value-changed",{detail:{value:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}_addToFavorites(){const e=this._currentValue||this.value;if(!e||i.m.hasColor(e))return;const t=this._showPalette;setTimeout(()=>{const r=prompt("Enter a name for this color:",this._getColorDisplayName(e));r&&r.trim()?(i.m.addFavorite(r.trim(),e),this._showPalette=t,this.requestUpdate()):this._showPalette=t},10)}_getColorDisplayName(e){var t;const r={"#ff0000":"Red","#00ff00":"Green","#0000ff":"Blue","#ffff00":"Yellow","#ff00ff":"Magenta","#00ffff":"Cyan","#000000":"Black","#ffffff":"White","#808080":"Gray","#ffa500":"Orange","#800080":"Purple","#ffc0cb":"Pink"},a=e.toLowerCase();if(r[a])return r[a];if(e.startsWith("var(--")){const r=null===(t=e.match(/var\(--([^)]+)\)/))||void 0===t?void 0:t[1];if(r)return r.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase())}return e}_getDisplayValue(){return this._currentValue&&""!==this._currentValue?this._currentValue:this.defaultValue||""}_getColorForNativeInput(){const e=this._getDisplayValue();if("transparent"===e)return"#ffffff";if((0,n.bn)(e))return"#000000";if(e.startsWith("var(--")){const t=this._resolveCSSColor(e);if(t&&t.startsWith("rgb")){const e=t.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[\d.]+)?\s*\)/);if(e){const[t,r,a,o]=e,i=e=>e.toString(16).padStart(2,"0");return`#${i(parseInt(r))}${i(parseInt(a))}${i(parseInt(o))}`}}return e.includes("--primary-color")?"#03a9f4":e.includes("--primary-text-color")?"#ffffff":"#000000"}if(e.startsWith("rgba")){const t=e.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)/);if(t){const[e,r,a,o]=t,i=e=>e.toString(16).padStart(2,"0");return`#${i(parseInt(r))}${i(parseInt(a))}${i(parseInt(o))}`}}if(e.startsWith("rgb(")){const t=e.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);if(t){const[e,r,a,o]=t,i=e=>e.toString(16).padStart(2,"0");return`#${i(parseInt(r))}${i(parseInt(a))}${i(parseInt(o))}`}}return e.startsWith("#")?e:"#000000"}_isDefaultValue(){return!this._currentValue||""===this._currentValue||this._currentValue===this.defaultValue}_getContrastColor(e){const t=this._getContrastTheme(e);return"light"===t?"#000000":"dark"===t?"#ffffff":"var(--primary-text-color)"}_getContrastTheme(e){if(!e||"transparent"===e)return null;if(e.startsWith("var(")||(0,n.bn)(e))return"dark";let t=0,r=0,a=0;if(e.startsWith("#")){const o=e.replace("#",""),i=o.length;6===i||8===i?(t=parseInt(o.substr(0,2),16),r=parseInt(o.substr(2,2),16),a=parseInt(o.substr(4,2),16)):3===i&&(t=parseInt(o[0]+o[0],16),r=parseInt(o[1]+o[1],16),a=parseInt(o[2]+o[2],16))}else{const o=e.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);o&&(t=parseInt(o[1],10),r=parseInt(o[2],10),a=parseInt(o[3],10))}return(.299*t+.587*r+.114*a)/255>.5?"light":"dark"}_resolveCSSColor(e){if(!e)return e;const t=e.trim();if(t.startsWith("#")||t.startsWith("rgb"))return t;try{const e=document.createElement("span");e.style.backgroundColor=t,document.body.appendChild(e);const r=getComputedStyle(e).backgroundColor;return e.remove(),r&&"rgba(0, 0, 0, 0)"!==r?r:t}catch(e){return t}}_extractTransparency(e){if(!e)return 100;if((0,n.bn)(e))return 100;const t=e.startsWith("var(--")?this._resolveCSSColor(e):e,r=t.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/);if(r){const e=r[4]?parseFloat(r[4]):1;return Math.round(100*e)}if(t.match(/^#[0-9A-Fa-f]{8}$/)){const e=parseInt(t.substring(7,9),16)/255;return Math.round(100*e)}const a=t.match(/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([\d.]+))?\s*\)/);if(a){const e=a[4]?parseFloat(a[4]):1;return Math.round(100*e)}return"transparent"===t?0:100}_hexToRgb(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}_getBaseColor(e){if(!e)return"#000000";if((0,n.bn)(e))return e;let t=e;if(e.startsWith("var(--")&&(t=this._resolveCSSColor(e),t===e||t.startsWith("var(--")))return e;const r=t.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*[\d.]+)?\s*\)/);if(r){const[e,t,a,o]=r,i=e=>parseInt(e).toString(16).padStart(2,"0");return`#${i(t)}${i(a)}${i(o)}`}if(t.match(/^#[0-9A-Fa-f]{8}$/))return t.substring(0,7);const a=t.match(/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*[\d.]+)?\s*\)/);if(a){const[e,t,r,o]=a;return`hsl(${t}, ${r}%, ${o}%)`}return"transparent"===t?"#FFFFFF":t}_applyTransparency(e,t){if((0,n.bn)(e))return e;if(100===t)return e;if(0===t)return"transparent";const r=(t/100).toFixed(2);let a=e;if(e.startsWith("var(--")&&(a=this._resolveCSSColor(e),a===e||a.startsWith("var(--")))return e;if(a.startsWith("#")){const e=this._hexToRgb(a);if(e)return`rgba(${e.r}, ${e.g}, ${e.b}, ${r})`}const o=a.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*[\d.]+\s*\)/);if(o){const[e,t,a,i]=o;return`rgba(${t}, ${a}, ${i}, ${r})`}const i=a.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);if(i){const[e,t,a,o]=i;return`rgba(${t}, ${a}, ${o}, ${r})`}const s=a.match(/hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/);if(s){const[e,t,a,o]=s;return`hsla(${t}, ${a}%, ${o}%, ${r})`}const l=a.match(/hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*[\d.]+\s*\)/);if(l){const[e,t,a,o]=l;return`hsla(${t}, ${a}%, ${o}%, ${r})`}const c=this._resolveCSSColor(a);return c!==a?this._applyTransparency(c,t):e}_handleTransparencyChange(e){const t=e.target,r=parseInt(t.value,10);this._transparency=r;const a=this._getBaseColor(this._currentValue),o=this._applyTransparency(a,r);this._currentValue=o,this._textInputValue=o,this.value=o;const i=new CustomEvent("value-changed",{detail:{value:o},bubbles:!0,composed:!0});this.dispatchEvent(i),this.requestUpdate()}render(){const e=this._getDisplayValue(),t=this._getColorForNativeInput(),r=(0,n.bn)(e);return a.qy`
      <div class="ultra-color-picker-container">
        ${this.label?a.qy`<label class="color-label">${this.label}</label>`:""}

        <div class="color-picker-wrapper">
          <!-- Main trigger input field -->
          <div
            class="color-input-field ${this.disabled?"disabled":""} ${r?"gradient-mode":""}"
            style="${r?`background: ${e}; color: ${this._getContrastColor(e)};`:`background-color: ${e}; color: ${this._getContrastColor(e)};`}"
            @click=${this._togglePalette}
            tabindex="0"
            role="button"
            aria-label="Open color palette"
            @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._togglePalette(e))}}
          >
            <span class="color-value ${r?"gradient-text":""}"
              >${e}</span
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
                        .value=${t}
                        @change=${this._handleNativeColorChange}
                        @click=${e=>e.stopPropagation()}
                        @focus=${e=>e.stopPropagation()}
                        @blur=${e=>e.stopPropagation()}
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
                      @click=${e=>e.stopPropagation()}
                      @focus=${e=>e.stopPropagation()}
                      placeholder="e.g. #ff0000, rgb(255,0,0), linear-gradient(90deg, red, blue), var(--primary-color)"
                      spellcheck="false"
                    />
                    <button
                      class="apply-text-btn ${this._isValidColor(this._textInputValue||"")?"":"disabled"}"
                      @click=${e=>{e.stopPropagation(),this._applyTextInputValue()}}
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
                            @click=${e=>e.stopPropagation()}
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
                  ${c.map(e=>a.qy`
                      <div
                        class="color-swatch ${this._currentValue===e?"selected":""}"
                        style="background-color: ${e}"
                        @click=${t=>this._selectColor(e,t)}
                        title="${e}"
                      ></div>
                    `)}
                </div>

                <!-- Gradient Presets Section -->
                <div class="gradient-presets-section">
                  <div class="gradient-presets-header">
                    <label class="gradient-presets-label">Gradient Presets</label>
                  </div>
                  <div class="gradient-presets-grid">
                    ${d.map(e=>a.qy`
                        <div
                          class="gradient-preset-swatch ${this._currentValue===e.value?"selected":""}"
                          style="background: ${e.value}"
                          @click=${t=>this._selectColor(e.value,t)}
                          title="${e.name}"
                        >
                          <span class="gradient-preset-name">${e.name}</span>
                        </div>
                      `)}
                  </div>
                </div>

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
                          ${this._favoriteColors.map(e=>a.qy`
                              <div
                                class="favorite-swatch ${this._currentValue===e.color?"selected":""}"
                                style="background: ${e.color}"
                                @click=${t=>this._selectColor(e.color,t)}
                                title="${e.name} (${e.color})"
                              >
                                <span class="favorite-preset-name contrast-${this._getContrastTheme(e.color)||"dark"}">${e.name}</span>
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
        color: var(--primary-text-color);
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
    `}};l([(0,o.MZ)({attribute:!1})],p.prototype,"hass",void 0),l([(0,o.MZ)()],p.prototype,"value",void 0),l([(0,o.MZ)()],p.prototype,"label",void 0),l([(0,o.MZ)()],p.prototype,"defaultValue",void 0),l([(0,o.MZ)({type:Boolean})],p.prototype,"disabled",void 0),l([(0,o.wk)()],p.prototype,"_currentValue",void 0),l([(0,o.wk)()],p.prototype,"_showPalette",void 0),l([(0,o.wk)()],p.prototype,"_textInputValue",void 0),l([(0,o.wk)()],p.prototype,"_favoriteColors",void 0),l([(0,o.wk)()],p.prototype,"_transparency",void 0),p=l([(0,o.EM)("ultra-color-picker")],p)}};