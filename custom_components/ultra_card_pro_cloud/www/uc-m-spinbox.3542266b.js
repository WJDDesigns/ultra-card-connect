export const __webpack_esm_ids__=[8940];export const __webpack_esm_modules__={8891(e,t,i){i.d(t,{UltraSpinboxModule:()=>b});var o=i(2618),n=i(6478),l=i(7475),a=i(5147),s=i(8938),r=i(5320),u=i(9327),d=i(5121),c=i(5155),p=(i(7921),i(6831)),v=i(4830);const m=["value","value_color","button_background_color","button_text_color"];class b extends l.m{constructor(){super(...arguments),this._templateInputDebounce=null,this._lastTouchTime=0,this._optimisticValues=new Map,this.metadata={type:"spinbox",title:"Spinbox",description:"Number input with increment/decrement buttons",author:"WJD Designs",version:"1.0.0",icon:"mdi:numeric",category:"interactive",tags:["spinbox","number","increment","decrement","input","stepper"]}}createDefault(e,t){return{id:e||this.generateId("spinbox"),type:"spinbox",min_value:0,max_value:100,step:1,value:50,layout:"horizontal",show_value:!0,value_position:"center",show_unit:!1,unit:"",button_style:"theme",button_shape:"rounded",button_size:40,button_spacing:12,button_gap:8,increment_icon:"mdi:plus",decrement_icon:"mdi:minus",button_background_color:"var(--primary-color)",button_text_color:"white",value_color:"var(--primary-text-color)",value_font_size:18,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[],unified_template_mode:!1,unified_template:""}}getButtonStyles(e){return[{value:"flat",label:(0,n.kg)("editor.spinbox.styles.flat",e,"Flat (Default)")},{value:"glossy",label:(0,n.kg)("editor.spinbox.styles.glossy",e,"Glossy")},{value:"embossed",label:(0,n.kg)("editor.spinbox.styles.embossed",e,"Embossed")},{value:"inset",label:(0,n.kg)("editor.spinbox.styles.inset",e,"Inset")},{value:"gradient-overlay",label:(0,n.kg)("editor.spinbox.styles.gradient_overlay",e,"Gradient Overlay")},{value:"neon-glow",label:(0,n.kg)("editor.spinbox.styles.neon_glow",e,"Neon Glow")},{value:"outline",label:(0,n.kg)("editor.spinbox.styles.outline",e,"Outline")},{value:"glass",label:(0,n.kg)("editor.spinbox.styles.glass",e,"Glass")},{value:"metallic",label:(0,n.kg)("editor.spinbox.styles.metallic",e,"Metallic")},{value:"neumorphic",label:(0,n.kg)("editor.spinbox.styles.neumorphic",e,"Neumorphic")}]}getButtonShapeOptions(e){return[{value:"rounded",label:(0,n.kg)("editor.spinbox.shapes.rounded",e,"Rounded Square (Default)")},{value:"square",label:(0,n.kg)("editor.spinbox.shapes.square",e,"Square")},{value:"circle",label:(0,n.kg)("editor.spinbox.shapes.circle",e,"Circle")}]}getLayoutOptions(e){return[{value:"horizontal",label:(0,n.kg)("editor.spinbox.layout_options.horizontal",e,"Horizontal")},{value:"vertical",label:(0,n.kg)("editor.spinbox.layout_options.vertical",e,"Vertical")}]}getValuePositionOptions(e){return[{value:"center",label:(0,n.kg)("editor.spinbox.value_position_options.center",e,"Center (Between Buttons)")},{value:"top",label:(0,n.kg)("editor.spinbox.value_position_options.top",e,"Top (Above Both Buttons)")},{value:"bottom",label:(0,n.kg)("editor.spinbox.value_position_options.bottom",e,"Bottom (Below Both Buttons)")},{value:"left",label:(0,n.kg)("editor.spinbox.value_position_options.left",e,"Left (Before Buttons)")},{value:"right",label:(0,n.kg)("editor.spinbox.value_position_options.right",e,"Right (After Buttons)")}]}getStyles(){return`\n      ${l.m.getSliderStyles()}\n    `}renderGeneralTab(e,t,i,l){var a,s,r,u,d,c,p,v,b,_,g;const h=e,x=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",y=e=>{l(e),this.triggerPreviewUpdate()};return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Entity Configuration -->
        ${this.renderSettingsSection((0,n.kg)("editor.spinbox.entity.title",x,"Entity Configuration"),(0,n.kg)("editor.spinbox.entity.desc",x,"Optional: Link to a Home Assistant entity for synced values (e.g., Input Number, climate temperature)."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",h.entity||"",e=>{y({entity:e}),this.triggerPreviewUpdate()},void 0,(0,n.kg)("editor.spinbox.entity_field",x,"Entity"))}
        </div>

        <!-- Value Configuration -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.spinbox.value.title",x,"Value Configuration")}
          </div>
          <div class="section-description" style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
            ${(0,n.kg)("editor.spinbox.value.desc",x,"Configure the numeric range, step size, and default value.")}
          </div>

          ${this.renderSliderField((0,n.kg)("editor.spinbox.min_value",x,"Minimum Value"),(0,n.kg)("editor.spinbox.min_value_desc",x,"The minimum allowed value"),null!==(s=h.min_value)&&void 0!==s?s:0,0,0,1e3,1,e=>y({min_value:e}),"")}
          ${this.renderSliderField((0,n.kg)("editor.spinbox.max_value",x,"Maximum Value"),(0,n.kg)("editor.spinbox.max_value_desc",x,"The maximum allowed value"),null!==(r=h.max_value)&&void 0!==r?r:100,100,0,1e3,1,e=>y({max_value:e}),"")}
          ${this.renderSliderField((0,n.kg)("editor.spinbox.step",x,"Step Size"),(0,n.kg)("editor.spinbox.step_desc",x,"How much the value changes with each button press"),null!==(u=h.step)&&void 0!==u?u:1,1,0,100,1,e=>y({step:e}),"")}
          ${this.renderSliderField((0,n.kg)("editor.spinbox.value",x,"Default Value"),(0,n.kg)("editor.spinbox.value_desc",x,"The initial value (only used when no entity is linked)"),null!==(d=h.value)&&void 0!==d?d:50,50,0,1e3,1,e=>y({value:e}),"")}
        </div>

        <!-- Display Configuration -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.spinbox.display.title",x,"Display Configuration")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.spinbox.layout_title",x,"Layout"),(0,n.kg)("editor.spinbox.layout_desc",x,"Arrangement of buttons and value"),t,{layout:h.layout||"horizontal"},[this.selectField("layout",this.getLayoutOptions(x))],e=>{e.detail.value.layout!==(h.layout||"horizontal")&&(y(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          </div>

          ${this.renderFieldSection((0,n.kg)("editor.spinbox.show_value",x,"Show Value"),(0,n.kg)("editor.spinbox.show_value_desc",x,"Display the current numeric value"),t,{show_value:null===(c=h.show_value)||void 0===c||c},[this.booleanField("show_value")],e=>y({show_value:e.detail.value.show_value}))}

          ${h.show_value?o.qy`
                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,n.kg)("editor.spinbox.value_position_title",x,"Value Position"),(0,n.kg)("editor.spinbox.value_position_desc",x,"Where to display the value relative to buttons"),t,{value_position:h.value_position||"center"},[this.selectField("value_position",this.getValuePositionOptions(x))],e=>{e.detail.value.value_position!==(h.value_position||"center")&&(y(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
                </div>
              `:""}

          ${this.renderFieldSection((0,n.kg)("editor.spinbox.show_unit",x,"Show Unit"),(0,n.kg)("editor.spinbox.show_unit_desc",x,"Display a unit label (e.g., °C, %)"),t,{show_unit:null!==(p=h.show_unit)&&void 0!==p&&p},[this.booleanField("show_unit")],e=>y({show_unit:e.detail.value.show_unit}))}

          ${h.show_unit?o.qy`
                <div class="field-group" style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,n.kg)("editor.spinbox.unit",x,"Unit"),(0,n.kg)("editor.spinbox.unit_desc",x,"Unit to display (e.g., °C, %, km)"),t,{unit:h.unit||""},[this.textField("unit")],e=>y(e.detail.value))}
                </div>
              `:""}
        </div>

        <!-- Button Configuration -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,n.kg)("editor.spinbox.buttons.title",x,"Button Configuration")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.spinbox.button_style",x,"Button Style"),(0,n.kg)("editor.spinbox.button_style_desc",x,"Visual style for buttons"),t,{button_style:h.button_style||"theme"},[this.selectField("button_style",this.withThemeInheritOption(x,i,"spinbox","button_style","flat",this.getButtonStyles(x)))],e=>{e.detail.value.button_style!==(h.button_style||"theme")&&(y(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.spinbox.button_shape",x,"Button Shape"),(0,n.kg)("editor.spinbox.button_shape_desc",x,"Shape of the buttons"),t,{button_shape:h.button_shape||"rounded"},[this.selectField("button_shape",this.getButtonShapeOptions(x))],e=>{e.detail.value.button_shape!==(h.button_shape||"rounded")&&(y(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderSliderField((0,n.kg)("editor.spinbox.button_size",x,"Button Size"),(0,n.kg)("editor.spinbox.button_size_desc",x,"Size of the buttons in pixels (width and height)"),null!==(v=h.button_size)&&void 0!==v?v:40,40,10,200,1,e=>y({button_size:e}),"px")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderSliderField((0,n.kg)("editor.spinbox.button_spacing",x,"Value Spacing"),(0,n.kg)("editor.spinbox.button_spacing_desc",x,"Space between buttons and value display in pixels"),null!==(b=h.button_spacing)&&void 0!==b?b:12,12,0,100,1,e=>y({button_spacing:e}),"px")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderSliderField((0,n.kg)("editor.spinbox.button_gap",x,"Button Gap"),(0,n.kg)("editor.spinbox.button_gap_desc",x,"Space between increment and decrement buttons in pixels"),null!==(_=h.button_gap)&&void 0!==_?_:8,8,0,100,1,e=>y({button_gap:e}),"px")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.spinbox.increment_icon",x,"Increment Icon"),(0,n.kg)("editor.spinbox.increment_icon_desc",x,"Icon for the increment button (e.g., mdi:plus, mdi:chevron-up)"),t,{increment_icon:h.increment_icon||"mdi:plus"},[this.iconField("increment_icon")],e=>y(e.detail.value))}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,n.kg)("editor.spinbox.decrement_icon",x,"Decrement Icon"),(0,n.kg)("editor.spinbox.decrement_icon_desc",x,"Icon for the decrement button (e.g., mdi:minus, mdi:chevron-down)"),t,{decrement_icon:h.decrement_icon||"mdi:minus"},[this.iconField("decrement_icon")],e=>y(e.detail.value))}
          </div>

          <!-- Button Colors -->
          <div class="color-controls" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,n.kg)("editor.spinbox.button_background_color",x,"Button Background")}
              .value=${h.button_background_color||"var(--primary-color)"}
              .defaultValue=${"var(--primary-color)"}
              .hass=${t}
              @value-changed=${e=>y({button_background_color:e.detail.value})}
            ></ultra-color-picker>
          </div>

          <div class="color-controls">
            <ultra-color-picker
              .label=${(0,n.kg)("editor.spinbox.button_text_color",x,"Button Icon Color")}
              .value=${h.button_text_color||"white"}
              .defaultValue=${"white"}
              .hass=${t}
              @value-changed=${e=>y({button_text_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>

        <!-- Value Display Styling -->
        ${h.show_value?o.qy`
              <div class="settings-section">
                <div class="section-title">
                  ${(0,n.kg)("editor.spinbox.value_style.title",x,"Value Display Styling")}
                </div>

                <div class="color-controls" style="margin-bottom: 16px;">
                  <ultra-color-picker
                    .label=${(0,n.kg)("editor.spinbox.value_color",x,"Value Color")}
                    .value=${h.value_color||"var(--primary-text-color)"}
                    .defaultValue=${"var(--primary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>y({value_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>

                <div class="field-group">
                  ${this.renderSliderField((0,n.kg)("editor.spinbox.value_font_size",x,"Value Font Size"),(0,n.kg)("editor.spinbox.value_font_size_desc",x,"Font size for the value display (in pixels)"),null!==(g=h.value_font_size)&&void 0!==g?g:18,18,8,100,1,e=>y({value_font_size:e}),"px")}
                </div>
              </div>
            `:""}

        <!-- Unified template -->
        <div style="margin-top: 16px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="font-size:16px;font-weight:600;">${(0,n.kg)("editor.spinbox.unified_template.toggle",x,"Template Mode")}</span>
              <button
                type="button"
                class="help-btn"
                style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                title="${(0,n.kg)("editor.spinbox.unified_template.cheatsheet",x,"Template cheatsheet")}"
                @click=${e=>{e.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"spinbox"}}))}}
              >
                <ha-icon icon="mdi:help-circle" style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"></ha-icon>
              </button>
            </div>
            ${this.renderUcForm(t,{unified_template_mode:h.unified_template_mode||!1},[this.booleanField("unified_template_mode")],e=>y({unified_template_mode:e.detail.value.unified_template_mode}))}
          </div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; line-height: 1.5;">
            ${(0,n.kg)("editor.spinbox.unified_template.desc",x,"JSON with value, button_background_color, button_text_color, value_color — or a plain numeric Jinja result.")}
          </div>
          ${h.unified_template_mode?o.qy`
                <div
                  style="margin-top: 12px;"
                  @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
                  @dragstart=${e=>e.stopPropagation()}
                >
                  <ultra-template-editor
                    .hass=${t}
                    .value=${h.unified_template||""}
                    .placeholder=${'{\n  "value": "{{ states(\'input_number.temp\') | float }}",\n  "value_color": "var(--primary-text-color)"\n}'}
                    .minHeight=${120}
                    .maxHeight=${360}
                    @value-changed=${e=>y({unified_template:e.detail.value})}
                  ></ultra-template-editor>
                  ${this.renderTemplateKeyWarning(h.unified_template,m,x)}
                </div>
              `:""}
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){const n=e;return a.A.render(n,t,e=>o(e))}renderLogicTab(e,t,i,o){return s.X.render(e,t,e=>o(e))}renderPreview(e,t,i,l){var a,s,m,b,_,g,h,x;const y=e,f=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",$=y.entity?this.resolveEntity(y.entity,i):void 0;let k,w,S,F;if(y.unified_template_mode&&y.unified_template&&(!this._templateService&&t?this._templateService=new r.I(t):this._templateService&&t&&this._templateService.updateHass(t),t)){t.__uvc_template_strings||(t.__uvc_template_strings={});const e=(0,c.KD)(y.unified_template,t,i),o=this._hashString(e),n=`unified_spinbox_${y.id}_${o}`;if(this._templateService){const o=(0,u.pL)($||"",t,{value:y.value,min_value:y.min_value,max_value:y.max_value}),l=(0,u.jh)($||"",t);this._templateService.subscribeToTemplate(e,n,()=>{"undefined"!=typeof window&&this.triggerPreviewUpdate()},o,i,l)}const l=null===(s=t.__uvc_template_strings)||void 0===s?void 0:s[n];if(l&&""!==String(l).trim()){const e=(0,d.cv)(l);if(!(0,d.HD)(e)){if(void 0!==e.value){const t="number"==typeof e.value?e.value:parseFloat(String(e.value));isNaN(t)||(k=t)}else{const t=(0,d.lR)(e);void 0===t||isNaN(t)||(k=t)}e.button_background_color&&(w=e.button_background_color),e.button_text_color&&(S=e.button_text_color),e.value_color&&(F=e.value_color)}}}let T=void 0!==k?k:null!==(m=y.value)&&void 0!==m?m:50,N="";if(void 0===k&&$&&t){const e=t.states[$];if(N=$.split(".")[0],e)if("climate"===N)if(void 0!==(null===(b=e.attributes)||void 0===b?void 0:b.temperature)){const t=parseFloat(String(e.attributes.temperature));isNaN(t)||(T=t)}else{const t=parseFloat(e.state);isNaN(t)||(T=t)}else{const t=parseFloat(e.state);isNaN(t)||(T=t)}}{const e=this._optimisticValues.get(y.id);void 0!==e&&(T=e.value)}T=Math.max(y.min_value,Math.min(y.max_value,T));const z=y.design||{},V=w||z.button_background_color||y.button_background_color||"var(--primary-color)",M=S||z.button_text_color||y.button_text_color||"white",q=(0,v.NS)(i,"spinbox","button_style",y.button_style,"flat"),B=null!==(_=y.button_size)&&void 0!==_?_:40,C=y.button_shape||"rounded",P=null!==(g=y.button_spacing)&&void 0!==g?g:12,D=null!==(h=y.button_gap)&&void 0!==h?h:8;let I="8px";"circle"===C?I="50%":"square"===C&&(I="0");const U=`\n      background: ${V};\n      color: ${M};\n      padding: 0;\n      border-radius: ${I};\n      cursor: pointer;\n      transition: all 0.2s ease;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-width: ${B}px;\n      min-height: ${B}px;\n      width: ${B}px;\n      height: ${B}px;\n      border: none;\n     ${(0,p.bL)(q,{background:V,hasCustomTextColor:!1})}`,E=F||z.value_color||y.value_color||"var(--primary-text-color)",O=z.value_font_size||y.value_font_size||18,A=`\n      color: ${E};\n      font-size: ${O}px;\n      font-weight: 600;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-width: 60px;\n    `,H=()=>{var e;const o=this._optimisticValues.get(y.id);if(void 0!==o)return o.value;const n=this._getEntityNumericValue(y,t,i);return void 0!==n?n:null!==(e=y.value)&&void 0!==e?e:50},j=e=>{if(e.stopPropagation(),"click"===e.type&&e.timeStamp-(this._lastTouchTime||0)<500)return;"touchend"===e.type&&(this._lastTouchTime=e.timeStamp,e.preventDefault());const i=e.target.closest(".spinbox-button");{const e=Math.max(y.min_value,Math.min(y.max_value,H())),i=Math.min(y.max_value,e+y.step);i!==e&&(this._setOptimisticValue(y.id,i,!$),$&&t&&this.callEntityService($,i,t,N),this.triggerPreviewUpdate(!0))}i&&(i.blur(),requestAnimationFrame(()=>{i.blur()}))},L=e=>{if(e.stopPropagation(),"click"===e.type&&e.timeStamp-(this._lastTouchTime||0)<500)return;"touchend"===e.type&&(this._lastTouchTime=e.timeStamp,e.preventDefault());const i=e.target.closest(".spinbox-button");{const e=Math.max(y.min_value,Math.min(y.max_value,H())),i=Math.max(y.min_value,e-y.step);i!==e&&(this._setOptimisticValue(y.id,i,!$),$&&t&&this.callEntityService($,i,t,N),this.triggerPreviewUpdate(!0))}i&&(i.blur(),requestAnimationFrame(()=>{i.blur()}))},G=(null===(x=y.design)||void 0===x||x.hover_effect,this.getHoverEffectClass(e)),W=this.buildStyleString(this.buildDesignStyles(e,t)),J="vertical"===y.layout,R=!1!==y.show_value,K=y.value_position||"center",X=y.show_unit&&y.unit,Q=R?o.qy`
          <div class="spinbox-value" style="${A}">
            ${T.toFixed(this.getDecimalPlaces(y.step))}${X?o.qy`<span style="margin-left: 4px; font-size: ${.8*O}px;"
                  >${y.unit}</span
                >`:""}
          </div>
        `:"",Y=o.qy`
      <button
        class="spinbox-button decrement ${G}"
        data-uc-surface="${q}"
        data-uc-role="control"
        style="${U}"
        aria-label="${(0,n.kg)("editor.spinbox.decrease",f,"Decrease")}"
        @click=${L}
        @touchend=${L}
        ?disabled=${T<=y.min_value}
      >
        <ha-icon icon="${y.decrement_icon||"mdi:minus"}"></ha-icon>
      </button>
    `,Z=o.qy`
      <button
        class="spinbox-button increment ${G}"
        data-uc-surface="${q}"
        data-uc-role="control"
        style="${U}"
        aria-label="${(0,n.kg)("editor.spinbox.increase",f,"Increase")}"
        @click=${j}
        @touchend=${j}
        ?disabled=${T>=y.max_value}
      >
        <ha-icon icon="${y.increment_icon||"mdi:plus"}"></ha-icon>
      </button>
    `,ee=D>=0,te=P>=0,ie=ee?`display: flex; gap: ${D}px; ${J?"flex-direction: column;":"flex-direction: row;"}`:"display: flex; "+(J?"flex-direction: column;":"flex-direction: row;");return this.wrapWithAnimation(o.qy`
      <style>
        .spinbox-button {
          flex-shrink: 0;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
          -webkit-user-select: none;
          user-select: none;
          outline: none;
        }
        .spinbox-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        /* Hover effects only on devices that support hover */
        @media (hover: hover) {
          .spinbox-button:not(:disabled):hover {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        /* Active state for touch feedback on mobile */
        .spinbox-button:not(:disabled):active {
          opacity: 0.8;
          transform: scale(1.05);
        }
        /* Aggressively remove focus state on mobile/touch devices */
        @media (hover: none) {
          .spinbox-button:not(:disabled):focus {
            outline: none !important;
            opacity: 1 !important;
            transform: scale(1) !important;
          }
          .spinbox-button:not(:disabled):focus:active {
            opacity: 0.8;
            transform: scale(1.05);
          }
          /* Ensure hover state is cleared on touch devices */
          .spinbox-button:not(:disabled):hover {
            opacity: 1;
            transform: scale(1);
          }
        }
        /* Clear focus state after touch ends - global rule */
        .spinbox-button:not(:disabled):focus:not(:active) {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
        /* Prevent sticky focus on touch end */
        .spinbox-button:focus-visible {
          outline: none;
        }
        /* Ensure no visual changes on focus for touch devices */
        @media (pointer: coarse) {
          .spinbox-button:focus {
            outline: none !important;
            opacity: 1 !important;
            transform: scale(1) !important;
          }
        }
      </style>
      <div class="spinbox-module-container ${G}" style="${W}">
        <div
          class="spinbox-container"
          style="display: flex; align-items: center; justify-content: center;"
        >
          ${(()=>{const e=o.qy`
        <div style="${ie}">
          ${J?o.qy` <div style="${ee?"":`margin-bottom: ${D}px;`}">
                  ${Z}
                </div>
                <div>${Y}</div>`:o.qy` <div style="${ee?"":`margin-right: ${D}px;`}">
                  ${Y}
                </div>
                <div>${Z}</div>`}
        </div>
      `,t=te?`gap: ${P}px;`:"";switch(K){case"top":return o.qy`
            <div
              style="display: flex; flex-direction: column; align-items: center; ${t}"
            >
              <div style="${te?"":`margin-bottom: ${P}px;`}">
                ${Q}
              </div>
              ${e}
            </div>
          `;case"bottom":return o.qy`
            <div
              style="display: flex; flex-direction: column; align-items: center; ${t}"
            >
              <div style="${te?"":`margin-bottom: ${P}px;`}">
                ${e}
              </div>
              ${Q}
            </div>
          `;case"left":return o.qy`
            <div style="display: flex; flex-direction: row; align-items: center; ${t}">
              <div style="${te?"":`margin-right: ${P}px;`}">
                ${Q}
              </div>
              ${e}
            </div>
          `;case"right":return o.qy`
            <div style="display: flex; flex-direction: row; align-items: center; ${t}">
              <div style="${te?"":`margin-right: ${P}px;`}">
                ${e}
              </div>
              ${Q}
            </div>
          `;default:return J?o.qy`
              <div
                style="display: flex; flex-direction: column; align-items: center; ${t}"
              >
                <div style="${te?"":`margin-bottom: ${P}px;`}">
                  ${Z}
                </div>
                <div style="${te?"":`margin-bottom: ${P}px;`}">
                  ${Q}
                </div>
                ${Y}
              </div>
            `:o.qy`
              <div style="display: flex; flex-direction: row; align-items: center; ${t}">
                <div style="${te?"":`margin-right: ${P}px;`}">
                  ${Y}
                </div>
                <div style="${te?"":`margin-right: ${P}px;`}">
                  ${Q}
                </div>
                ${Z}
              </div>
            `}})()}
        </div>
      </div>
    `,e,t)}async callEntityService(e,t,i,o){var n,l,a,s,r;const u=o||e.split(".")[0],d=i.states[e];let c="",p={};try{switch(u){case"input_number":case"number":{let i=t;const o=null==d?void 0:d.attributes,n=parseFloat(null==o?void 0:o.min),l=parseFloat(null==o?void 0:o.max),a=parseFloat(null==o?void 0:o.step);if(!isNaN(a)&&a>0){const e=isNaN(n)?0:n;i=Math.round((i-e)/a)*a+e,i=parseFloat(i.toFixed(6))}isNaN(n)||(i=Math.max(n,i)),isNaN(l)||(i=Math.min(l,i)),c=`${u}.set_value`,p={entity_id:e,value:i};break}case"climate":{c="climate.set_temperature";let i=t;const o=null==d?void 0:d.attributes,u=parseFloat(null==o?void 0:o.min_temp),v=parseFloat(null==o?void 0:o.max_temp),m=parseFloat(null==o?void 0:o.target_temp_step);if(!isNaN(m)&&m>0){const e=isNaN(u)?0:u;i=Math.round((i-e)/m)*m+e,i=parseFloat(i.toFixed(6))}isNaN(u)||(i=Math.max(u,i)),isNaN(v)||(i=Math.min(v,i));const b=null==d?void 0:d.state,_=void 0!==(null===(n=null==d?void 0:d.attributes)||void 0===n?void 0:n.target_temp_high),g=void 0!==(null===(l=null==d?void 0:d.attributes)||void 0===l?void 0:l.target_temp_low);if(p={entity_id:e},"heat_cool"===b&&(_||g)){const e=null===(a=null==d?void 0:d.attributes)||void 0===a?void 0:a.temperature,t=null===(s=null==d?void 0:d.attributes)||void 0===s?void 0:s.target_temp_high,o=null===(r=null==d?void 0:d.attributes)||void 0===r?void 0:r.target_temp_low;if(void 0!==e&&void 0!==t&&void 0!==o){Math.abs(i-t)<Math.abs(i-o)?(p.target_temp_high=i,p.target_temp_low=o):(p.target_temp_low=i,p.target_temp_high=t)}else p.target_temp_high=i+2,p.target_temp_low=i-2}else p.temperature=i;break}default:return void console.warn(`[Spinbox] Unsupported entity domain: ${u}`)}await i.callService(c.split(".")[0],c.split(".")[1],p)}catch(t){console.error(`[Spinbox] Failed to call service for ${e}:`,t),console.error("[Spinbox] Service data was:",p)}}_getEntityNumericValue(e,t,i){var o;if(!e.entity||!t)return;const n=this.resolveEntity(e.entity,i);if(!n)return;const l=t.states[n];if(!l)return;if("climate"===n.split(".")[0]&&void 0!==(null===(o=l.attributes)||void 0===o?void 0:o.temperature)){const e=parseFloat(String(l.attributes.temperature));if(!isNaN(e))return e}const a=parseFloat(l.state);return isNaN(a)?void 0:a}_setOptimisticValue(e,t,i=!1){const o=this._optimisticValues.get(e);(null==o?void 0:o.timer)&&clearTimeout(o.timer);const n=i?null:setTimeout(()=>{this._optimisticValues.delete(e),this.triggerPreviewUpdate()},b.OPTIMISTIC_TIMEOUT_MS);this._optimisticValues.set(e,{value:t,timer:n})}getDecimalPlaces(e){const t=e.toString();return t.includes(".")?t.split(".")[1].length:0}_hashString(e){let t=0;for(let i=0;i<e.length;i+=1)t=(t<<5)-t+e.charCodeAt(i),t|=0;return t}}b.OPTIMISTIC_TIMEOUT_MS=1500}};