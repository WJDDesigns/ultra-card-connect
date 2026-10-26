export const __webpack_esm_ids__=[8815];export const __webpack_esm_modules__={4300(i,e,t){t.d(e,{UltraFlipCardModule:()=>d});var a=t(2618),r=t(3307),n=t(8938),l=t(6478),o=t(1091);class d extends r.m{constructor(){super(...arguments),this.metadata={type:"flip_card",title:"Flip Card",description:"Two-sided container that flips between a front and back face",author:"WJD Designs",version:"1.0.0",icon:"mdi:rotate-3d-variant",category:"layout",tags:["layout","flip","card","container","3d","front","back","reveal"]},this._flipStates=new Map}createDefault(i,e){return{id:i||this.generateId("flip_card"),type:"flip_card",modules:[],flip_trigger:"tap",flip_direction:"horizontal",flip_duration:600,display_mode:"always",display_conditions:[]}}renderGeneralTab(i,e,t,r){var n,o;const d=i,c=(null===(n=null==e?void 0:e.locale)||void 0===n?void 0:n.language)||"en",s=d.flip_trigger||"tap";return a.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- How it works -->
        ${this.renderSettingsSection((0,l.kg)("editor.flip_card.faces.title",c,"Card Faces"),(0,l.kg)("editor.flip_card.faces.desc",c,"The first module added to this container is the front face; the second is the back face. Use a Vertical Layout as a face to show multiple modules on one side."),[])}

        <!-- Flip Behavior -->
        ${this.renderSettingsSection((0,l.kg)("editor.flip_card.behavior.title",c,"Flip Behavior"),(0,l.kg)("editor.flip_card.behavior.desc",c,"Choose what causes the card to flip to its back face."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSegmentedField((0,l.kg)("editor.flip_card.behavior.trigger",c,"Flip Trigger"),"",s,[{value:"tap",label:(0,l.kg)("editor.flip_card.behavior.tap",c,"Tap"),icon:"mdi:gesture-tap"},{value:"hover",label:(0,l.kg)("editor.flip_card.behavior.hover",c,"Hover"),icon:"mdi:cursor-default-click-outline"},{value:"entity",label:(0,l.kg)("editor.flip_card.behavior.entity",c,"Entity"),icon:"mdi:link-variant"}],i=>r({flip_trigger:i}))}
          ${"entity"===s?a.qy`
                ${this.renderFieldSection((0,l.kg)("editor.flip_card.behavior.entity_field",c,"Entity"),(0,l.kg)("editor.flip_card.behavior.entity_field_desc",c,"The card shows the back face while this entity matches the value below."),e,{flip_entity:d.flip_entity||""},[this.entityField("flip_entity")],i=>{r({flip_entity:i.detail.value.flip_entity}),this.triggerPreviewUpdate()})}
                ${this.renderFieldSection((0,l.kg)("editor.flip_card.behavior.attribute",c,"Attribute (optional)"),(0,l.kg)("editor.flip_card.behavior.attribute_desc",c,"Leave empty to match against the entity state."),e,{flip_attribute:d.flip_attribute||""},[this.textField("flip_attribute")],i=>{r({flip_attribute:i.detail.value.flip_attribute}),this.triggerPreviewUpdate()})}
                ${this.renderFieldSection((0,l.kg)("editor.flip_card.behavior.value",c,"Show Back When Value Is"),"",e,{flip_value:d.flip_value||""},[this.textField("flip_value")],i=>{r({flip_value:i.detail.value.flip_value}),this.triggerPreviewUpdate()})}
              `:""}
        </div>

        <!-- Animation -->
        ${this.renderSettingsSection((0,l.kg)("editor.flip_card.animation.title",c,"Animation"),(0,l.kg)("editor.flip_card.animation.desc",c,"Style and speed of the flip."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSegmentedField((0,l.kg)("editor.flip_card.animation.direction",c,"Flip Direction"),"",d.flip_direction||"horizontal",[{value:"horizontal",label:(0,l.kg)("editor.flip_card.animation.horizontal",c,"Horizontal"),icon:"mdi:axis-z-rotate-clockwise"},{value:"vertical",label:(0,l.kg)("editor.flip_card.animation.vertical",c,"Vertical"),icon:"mdi:axis-x-rotate-clockwise"}],i=>r({flip_direction:i}))}
          ${this.renderSliderField((0,l.kg)("editor.flip_card.animation.duration",c,"Flip Duration"),"",null!==(o=d.flip_duration)&&void 0!==o?o:600,600,100,2e3,50,i=>r({flip_duration:i}),"ms")}
        </div>
      </div>
    `}renderPreview(i,e,t,r){var n,d;const c=i,s=(null===(n=null==e?void 0:e.locale)||void 0===n?void 0:n.language)||"en",p=c.modules||[],f=p[0],h=p[1],v=c.flip_trigger||"tap",u=c.flip_direction||"horizontal",g=null!==(d=c.flip_duration)&&void 0!==d?d:600;let _=!1;if("entity"===v){const i=c.flip_entity;if(i&&void 0!==c.flip_value&&(null==e?void 0:e.states[i])){const t=e.states[i],a=c.flip_attribute?t.attributes[c.flip_attribute]:t.state;_=this._stateOrAttributeEquals(a,String(c.flip_value))}}else"tap"===v&&(_=this._flipStates.get(c.id)||!1);const b=this.buildDesignStyles(i,e),m=this.getHoverEffectClass(i),y="horizontal"===u?"rotateY":"rotateX",k="tap"===v?i=>{var e;const t=i.target;(null===(e=null==t?void 0:t.closest)||void 0===e?void 0:e.call(t,'button, input, select, textarea, a[href], ha-switch, ha-slider, [role="button"], [role="slider"], [role="switch"]'))||(this._flipStates.set(c.id,!this._flipStates.get(c.id)),this.triggerPreviewUpdate(!0))}:null,x=(i,n)=>i?(0,o.zU)(i,e,t,r):a.qy`
        <div class="flip-card-empty-face">
          <ha-icon icon="mdi:card-plus-outline"></ha-icon>
          <span>
            ${"front"===n?(0,l.kg)("editor.flip_card.empty.front",s,"Add a module for the front face"):(0,l.kg)("editor.flip_card.empty.back",s,"Add a second module for the back face")}
          </span>
        </div>
      `;return this.wrapWithAnimation(a.qy`
        <div
          class="flip-card-container ${m} ${"hover"===v?"flip-on-hover":""} ${_?"is-flipped":""} flip-${u}"
          style="${this.buildStyleString(b)}; --flip-duration: ${g}ms; ${"tap"===v?"cursor: pointer;":""}"
          @click=${k}
        >
          <div class="flip-card-inner" style="--flip-rotate: ${y}(180deg);">
            <div class="flip-card-face flip-card-front">${x(f,"front")}</div>
            <div class="flip-card-face flip-card-back" style="transform: ${y}(180deg);">
              ${x(h,"back")}
            </div>
          </div>
        </div>
      `,i,e)}renderLogicTab(i,e,t,a){return n.X.render(i,e,i=>a(i))}getStyles(){return`\n      .flip-card-container {\n        perspective: 1000px;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      .flip-card-inner {\n        display: grid;\n        width: 100%;\n        transform-style: preserve-3d;\n        transition: transform var(--flip-duration, 600ms) cubic-bezier(0.4, 0.2, 0.2, 1);\n      }\n\n      .flip-card-container.is-flipped .flip-card-inner,\n      .flip-card-container.flip-on-hover:hover .flip-card-inner {\n        transform: var(--flip-rotate, rotateY(180deg));\n      }\n\n      /* Both faces occupy the same grid cell so the container sizes to the tallest face */\n      .flip-card-face {\n        grid-area: 1 / 1;\n        backface-visibility: hidden;\n        -webkit-backface-visibility: hidden;\n        min-width: 0;\n        box-sizing: border-box;\n      }\n\n      .flip-card-empty-face {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        min-height: 80px;\n        padding: 16px;\n        border: 1px dashed var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        color: var(--secondary-text-color);\n        font-size: 13px;\n        font-style: italic;\n        text-align: center;\n      }\n\n      .flip-card-empty-face ha-icon {\n        --mdc-icon-size: 22px;\n        opacity: 0.7;\n      }\n\n      ${r.m.getSliderStyles()}\n    `}}}};