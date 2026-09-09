export const __webpack_esm_ids__=[8815];export const __webpack_esm_modules__={4300(i,t,e){e.d(t,{UltraFlipCardModule:()=>d});var n=e(2618),a=e(7475),r=e(8938),o=e(6478),l=e(1091);class d extends a.m{constructor(){super(...arguments),this.metadata={type:"flip_card",title:"Flip Card",description:"Two-sided container that flips between a front and back face",author:"WJD Designs",version:"1.0.0",icon:"mdi:rotate-3d-variant",category:"layout",tags:["layout","flip","card","container","3d","front","back","reveal"]},this._flipStates=new Map}createDefault(i,t){return{id:i||this.generateId("flip_card"),type:"flip_card",modules:[],flip_trigger:"tap",flip_direction:"horizontal",flip_duration:600,display_mode:"always",display_conditions:[]}}renderGeneralTab(i,t,e,a){var r,l;const d=i,s=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en",c=d.flip_trigger||"tap";return n.qy`
      ${this.injectUcFormStyles()}

      <div class="module-general-settings">
        <!-- How it works -->
        ${this.renderSettingsSection((0,o.kg)("editor.flip_card.faces.title",s,"Card Faces"),(0,o.kg)("editor.flip_card.faces.desc",s,"The first module added to this container is the front face; the second is the back face. Use a Vertical Layout as a face to show multiple modules on one side."),[])}

        <!-- Flip Behavior -->
        ${this.renderSettingsSection((0,o.kg)("editor.flip_card.behavior.title",s,"Flip Behavior"),(0,o.kg)("editor.flip_card.behavior.desc",s,"Choose what causes the card to flip to its back face."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSegmentedField((0,o.kg)("editor.flip_card.behavior.trigger",s,"Flip Trigger"),"",c,[{value:"tap",label:(0,o.kg)("editor.flip_card.behavior.tap",s,"Tap"),icon:"mdi:gesture-tap"},{value:"hover",label:(0,o.kg)("editor.flip_card.behavior.hover",s,"Hover"),icon:"mdi:cursor-default-click-outline"},{value:"entity",label:(0,o.kg)("editor.flip_card.behavior.entity",s,"Entity"),icon:"mdi:link-variant"}],i=>a({flip_trigger:i}))}
          ${"entity"===c?n.qy`
                ${this.renderFieldSection((0,o.kg)("editor.flip_card.behavior.entity_field",s,"Entity"),(0,o.kg)("editor.flip_card.behavior.entity_field_desc",s,"The card shows the back face while this entity matches the value below."),t,{flip_entity:d.flip_entity||""},[this.entityField("flip_entity")],i=>{a({flip_entity:i.detail.value.flip_entity}),this.triggerPreviewUpdate()})}
                ${this.renderFieldSection((0,o.kg)("editor.flip_card.behavior.attribute",s,"Attribute (optional)"),(0,o.kg)("editor.flip_card.behavior.attribute_desc",s,"Leave empty to match against the entity state."),t,{flip_attribute:d.flip_attribute||""},[this.textField("flip_attribute")],i=>{a({flip_attribute:i.detail.value.flip_attribute}),this.triggerPreviewUpdate()})}
                ${this.renderFieldSection((0,o.kg)("editor.flip_card.behavior.value",s,"Show Back When Value Is"),"",t,{flip_value:d.flip_value||""},[this.textField("flip_value")],i=>{a({flip_value:i.detail.value.flip_value}),this.triggerPreviewUpdate()})}
              `:""}
        </div>

        <!-- Animation -->
        ${this.renderSettingsSection((0,o.kg)("editor.flip_card.animation.title",s,"Animation"),(0,o.kg)("editor.flip_card.animation.desc",s,"Style and speed of the flip."),[])}
        <div style="margin-top: -24px; margin-bottom: 32px;">
          ${this.renderSegmentedField((0,o.kg)("editor.flip_card.animation.direction",s,"Flip Direction"),"",d.flip_direction||"horizontal",[{value:"horizontal",label:(0,o.kg)("editor.flip_card.animation.horizontal",s,"Horizontal"),icon:"mdi:axis-z-rotate-clockwise"},{value:"vertical",label:(0,o.kg)("editor.flip_card.animation.vertical",s,"Vertical"),icon:"mdi:axis-x-rotate-clockwise"}],i=>a({flip_direction:i}))}
          ${this.renderSliderField((0,o.kg)("editor.flip_card.animation.duration",s,"Flip Duration"),"",null!==(l=d.flip_duration)&&void 0!==l?l:600,600,100,2e3,50,i=>a({flip_duration:i}),"ms")}
        </div>
      </div>
    `}renderPreview(i,t,e,a){var r,d;const s=i,c=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en",p=s.modules||[],u=p[0],v=p[1],f=s.flip_trigger||"tap",g=s.flip_direction||"horizontal",h=null!==(d=s.flip_duration)&&void 0!==d?d:600;let _=!1;if("entity"===f){const i=s.flip_entity;if(i&&void 0!==s.flip_value&&(null==t?void 0:t.states[i])){const e=t.states[i],n=s.flip_attribute?e.attributes[s.flip_attribute]:e.state;_=this._stateOrAttributeEquals(n,String(s.flip_value))}}else"tap"===f&&(_=this._flipStates.get(s.id)||!1);const m=this.buildDesignStyles(i,t),b=this.getHoverEffectClass(i),y="horizontal"===g?"rotateY":"rotateX",k="tap"===f?i=>{var t;const e=i.target;(null===(t=null==e?void 0:e.closest)||void 0===t?void 0:t.call(e,'button, input, select, textarea, a[href], ha-switch, ha-slider, [role="button"], [role="slider"], [role="switch"]'))||(this._flipStates.set(s.id,!this._flipStates.get(s.id)),this.triggerPreviewUpdate(!0))}:null,x=(i,r)=>i?(0,l.zU)(i,t,e,a):n.qy`
        <div class="flip-card-empty-face">
          <ha-icon icon="mdi:card-plus-outline"></ha-icon>
          <span>
            ${"front"===r?(0,o.kg)("editor.flip_card.empty.front",c,"Add a module for the front face"):(0,o.kg)("editor.flip_card.empty.back",c,"Add a second module for the back face")}
          </span>
        </div>
      `;return this.wrapWithAnimation(n.qy`
        <div
          class="flip-card-container ${b} ${"hover"===f?"flip-on-hover":""} ${_?"is-flipped":""} flip-${g}"
          style="${this.buildStyleString(m)}; --flip-duration: ${h}ms; ${"tap"===f?"cursor: pointer;":""}"
          @click=${k}
        >
          <div class="flip-card-inner" style="--flip-rotate: ${y}(180deg);">
            <div class="flip-card-face flip-card-front">${x(u,"front")}</div>
            <div class="flip-card-face flip-card-back" style="transform: ${y}(180deg);">
              ${x(v,"back")}
            </div>
          </div>
        </div>
      `,i,t)}renderLogicTab(i,t,e,n){return r.X.render(i,t,i=>n(i))}getStyles(){return`\n      .flip-card-container {\n        perspective: 1000px;\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      .flip-card-inner {\n        display: grid;\n        width: 100%;\n        transform-style: preserve-3d;\n        transition: transform var(--flip-duration, 600ms) cubic-bezier(0.4, 0.2, 0.2, 1);\n      }\n\n      .flip-card-container.is-flipped .flip-card-inner,\n      .flip-card-container.flip-on-hover:hover .flip-card-inner {\n        transform: var(--flip-rotate, rotateY(180deg));\n      }\n\n      /* Both faces occupy the same grid cell so the container sizes to the tallest face */\n      .flip-card-face {\n        grid-area: 1 / 1;\n        backface-visibility: hidden;\n        -webkit-backface-visibility: hidden;\n        min-width: 0;\n        box-sizing: border-box;\n      }\n\n      .flip-card-empty-face {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 6px;\n        min-height: 80px;\n        padding: 16px;\n        border: 1px dashed var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        color: var(--secondary-text-color);\n        font-size: 13px;\n        font-style: italic;\n        text-align: center;\n      }\n\n      .flip-card-empty-face ha-icon {\n        --mdc-icon-size: 22px;\n        opacity: 0.7;\n      }\n\n      ${a.m.getSliderStyles()}\n    `}}},1091(i,t,e){e.d(t,{tG:()=>s,zU:()=>c});var n=e(2618),a=e(8414),r=e(230),o=e(378),l=e(2034),d=e(5064);function s(i,t){var e,n,a,o;r.S.setHass(t);const l=i,d=r.S.evaluateModuleVisibility(l),s=r.S.evaluateLogicProperties({logic_entity:null===(e=null==l?void 0:l.design)||void 0===e?void 0:e.logic_entity,logic_attribute:null===(n=null==l?void 0:l.design)||void 0===n?void 0:n.logic_attribute,logic_operator:null===(a=null==l?void 0:l.design)||void 0===a?void 0:a.logic_operator,logic_value:null===(o=null==l?void 0:l.design)||void 0===o?void 0:o.logic_value});return d&&s}function c(i,t,e,r){var c,p,u,v,f,g,h,_,m,b,y,k;if(!s(i,t))return n.qy``;const x=function(i){const t=i.design||{};return void 0!==t.margin_top||void 0!==t.margin_bottom||void 0!==t.margin_left||void 0!==t.margin_right||void 0!==i.margin_top||void 0!==i.margin_bottom||void 0!==i.margin_left||void 0!==i.margin_right?i:Object.assign(Object.assign({},i),{margin_top:"0",margin_bottom:"0",margin_left:"0",margin_right:"0"})}(i),w=(0,a.oD)().getModule(x.type);if(!w)return l.E.renderModuleLoadingState(x);const S=!(!(null===(p=null===(c=w.metadata)||void 0===c?void 0:c.tags)||void 0===p?void 0:p.includes("pro"))&&!(null===(v=null===(u=w.metadata)||void 0===u?void 0:u.tags)||void 0===v?void 0:v.includes("premium")))&&!function(i){var t,e,n,a;const r=o.xd.checkIntegrationAuth(i);if("pro"===(null===(t=null==r?void 0:r.subscription)||void 0===t?void 0:t.tier)&&"active"===(null===(e=null==r?void 0:r.subscription)||void 0===e?void 0:e.status))return!0;if(o.xd.isAuthenticated()){const i=o.xd.getCurrentUser();if("pro"===(null===(n=null==i?void 0:i.subscription)||void 0===n?void 0:n.tier)&&"active"===(null===(a=null==i?void 0:i.subscription)||void 0===a?void 0:a.status))return!0}return!1}(t),$=(0,d.l8)(x),z=w.renderPreview($,t,e,r);if(S)return n.qy`
      <div class="pro-module-locked" style="position: relative;">
        ${z}
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
    `;const F=x,U=F.animation_type||(null===(f=F.design)||void 0===f?void 0:f.animation_type);if(U&&"none"!==U){const i=F.animation_duration||(null===(g=F.design)||void 0===g?void 0:g.animation_duration)||"2s",e=F.animation_delay||(null===(h=F.design)||void 0===h?void 0:h.animation_delay)||"0s",a=F.animation_timing||(null===(_=F.design)||void 0===_?void 0:_.animation_timing)||"ease",r=F.animation_entity||(null===(m=F.design)||void 0===m?void 0:m.animation_entity),o=F.animation_trigger_type||(null===(b=F.design)||void 0===b?void 0:b.animation_trigger_type)||"state",l=F.animation_attribute||(null===(y=F.design)||void 0===y?void 0:y.animation_attribute),d=F.animation_state||(null===(k=F.design)||void 0===k?void 0:k.animation_state);let s=!1;if(r){if(d&&t&&t.states[r]){const i=t.states[r];s="attribute"===o&&l?String(i.attributes[l])===d:i.state===d}}else s=!0;if(s)return n.qy`
        <div
          class="module-animation-wrapper animation-${U}"
          style="
            --animation-duration: ${i};
            --animation-delay: ${e};
            --animation-timing: ${a};
          "
        >
          ${z}
        </div>
      `}return z}e.d(t,["fC",0,["button","input","select","textarea","a[href]","ha-switch","ha-slider","ha-control-slider","ha-control-select",'[role="button"]','[role="slider"]','[role="switch"]']])}};