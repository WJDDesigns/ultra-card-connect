export const __webpack_esm_ids__=[5906];export const __webpack_esm_modules__={2997(e,t,o){o.d(t,{UltraCoverModule:()=>a});var i=o(2618),r=o(6478),n=o(7475);o(7921);class a extends n.m{constructor(){super(...arguments),this.handlesOwnDesignStyles=!0,this.metadata={type:"cover",title:"Cover Control",description:"Control blinds, garage doors, and shutters",author:"WJD Designs",version:"1.0.0",icon:"mdi:blinds",category:"interactive",tags:["cover","blinds","garage","shutters"]}}createDefault(e,t){return{id:e||this.generateId("cover"),type:"cover",entity:"",name:"",icon:"",show_title:!0,show_icon:!0,show_state:!0,show_position:!0,show_stop:!0,show_position_control:!0,layout:"standard",alignment:"center",show_tilt:!1,show_tilt_control:!1,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=[],o=e;return e.id||t.push("Module ID is required"),e.type&&"cover"===e.type||t.push("Module type must be cover"),!(!o.entity||!o.entity.trim())||t.push("Select a cover entity"),{valid:0===t.length,errors:t}}getLayoutOptions(e){return[{value:"compact",label:(0,r.kg)("editor.cover.layout_compact",e,"Compact")},{value:"standard",label:(0,r.kg)("editor.cover.layout_standard",e,"Standard")},{value:"buttons",label:(0,r.kg)("editor.cover.layout_buttons",e,"Buttons")}]}getAlignmentOptions(e){return[{value:"left",label:(0,r.kg)("editor.cover.alignment_left",e,"Left")},{value:"center",label:(0,r.kg)("editor.cover.alignment_center",e,"Center")},{value:"right",label:(0,r.kg)("editor.cover.alignment_right",e,"Right")}]}renderGeneralTab(e,t,o,n){var a,s,l;const d=e,c=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";return i.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Entity -->
        ${this.renderSettingsSection((0,r.kg)("editor.cover.entity_section",c,"Entity"),(0,r.kg)("editor.cover.entity_desc",c,"Select the cover to control (blinds, garage, shutters)."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,o,"entity",d.entity||"",e=>{n({entity:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},["cover"],(0,r.kg)("editor.cover.entity",c,"Cover entity"))}
        </div>

        <!-- Name & icon overrides -->
        ${this.renderSettingsSection((0,r.kg)("editor.cover.overrides_section",c,"Name & Icon"),(0,r.kg)("editor.cover.overrides_desc",c,"Optional overrides for the entity name and icon."),[{title:(0,r.kg)("editor.cover.name",c,"Name"),description:(0,r.kg)("editor.cover.name_desc",c,"Leave empty to use the entity name"),hass:t,data:{name:d.name||""},schema:[this.textField("name")],onChange:e=>{var t,o;n({name:null!==(o=null===(t=e.detail.value)||void 0===t?void 0:t.name)&&void 0!==o?o:""}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.cover.icon",c,"Icon"),description:(0,r.kg)("editor.cover.icon_desc",c,"Leave empty to use the entity icon"),hass:t,data:{icon:d.icon||""},schema:[this.iconField("icon")],onChange:e=>{var t,o;n({icon:null!==(o=null===(t=e.detail.value)||void 0===t?void 0:t.icon)&&void 0!==o?o:""}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        <!-- Display -->
        ${this.renderSettingsSection((0,r.kg)("editor.cover.display_section",c,"Display"),(0,r.kg)("editor.cover.display_desc",c,"Choose what to show on the card."),[{title:(0,r.kg)("editor.cover.show_title",c,"Show title"),description:(0,r.kg)("editor.cover.show_title_desc",c,"Display the cover name"),hass:t,data:{show_title:!1!==d.show_title},schema:[this.booleanField("show_title")],onChange:e=>{var t,o;n({show_title:null===(o=null===(t=e.detail.value)||void 0===t?void 0:t.show_title)||void 0===o||o}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.cover.show_icon",c,"Show icon"),description:(0,r.kg)("editor.cover.show_icon_desc",c,"Display the cover icon"),hass:t,data:{show_icon:!1!==d.show_icon},schema:[this.booleanField("show_icon")],onChange:e=>{var t,o;n({show_icon:null===(o=null===(t=e.detail.value)||void 0===t?void 0:t.show_icon)||void 0===o||o}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.cover.show_state",c,"Show state"),description:(0,r.kg)("editor.cover.show_state_desc",c,"Display open/closed/opening/closing"),hass:t,data:{show_state:!1!==d.show_state},schema:[this.booleanField("show_state")],onChange:e=>{var t,o;n({show_state:null===(o=null===(t=e.detail.value)||void 0===t?void 0:t.show_state)||void 0===o||o}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.cover.show_position",c,"Show position"),description:(0,r.kg)("editor.cover.show_position_desc",c,"Show position bar or percentage"),hass:t,data:{show_position:!1!==d.show_position},schema:[this.booleanField("show_position")],onChange:e=>{var t,o;n({show_position:null===(o=null===(t=e.detail.value)||void 0===t?void 0:t.show_position)||void 0===o||o}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.cover.show_position_control",c,"Show position slider"),description:(0,r.kg)("editor.cover.show_position_control_desc",c,"Allow setting position 0-100%"),hass:t,data:{show_position_control:!1!==d.show_position_control},schema:[this.booleanField("show_position_control")],onChange:e=>{var t,o;n({show_position_control:null===(o=null===(t=e.detail.value)||void 0===t?void 0:t.show_position_control)||void 0===o||o}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.cover.show_stop",c,"Show stop button"),description:(0,r.kg)("editor.cover.show_stop_desc",c,"Show stop button when supported"),hass:t,data:{show_stop:!1!==d.show_stop},schema:[this.booleanField("show_stop")],onChange:e=>{var t,o;n({show_stop:null===(o=null===(t=e.detail.value)||void 0===t?void 0:t.show_stop)||void 0===o||o}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        <!-- Layout -->
        ${this.renderSettingsSection((0,r.kg)("editor.cover.layout_section",c,"Layout"),(0,r.kg)("editor.cover.layout_desc",c,"How the controls are arranged."),[{title:(0,r.kg)("editor.cover.layout",c,"Layout style"),description:(0,r.kg)("editor.cover.layout_style_desc",c,"Compact, standard, or buttons only"),hass:t,data:{layout:d.layout||"standard"},schema:[this.selectField("layout",this.getLayoutOptions(c))],onChange:e=>{var t;n({layout:(null===(t=e.detail.value)||void 0===t?void 0:t.layout)||"standard"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.cover.alignment",c,"Alignment"),description:(0,r.kg)("editor.cover.alignment_desc",c,"Align content left, center, or right"),hass:t,data:{alignment:d.alignment||"center"},schema:[this.selectField("alignment",this.getAlignmentOptions(c))],onChange:e=>{var t;n({alignment:(null===(t=e.detail.value)||void 0===t?void 0:t.alignment)||"center"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        <!-- Advanced: Tilt & multi-cover -->
        <div class="settings-section" style="margin-top: 16px;">
          <div class="section-title" style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">
            ${(0,r.kg)("editor.cover.advanced_section",c,"Advanced")}
          </div>
          <div class="field-description" style="margin-bottom: 12px; color: var(--secondary-text-color);">
            ${(0,r.kg)("editor.cover.advanced_desc",c,"Tilt and multi-cover options.")}
          </div>
          ${this.renderFieldSection((0,r.kg)("editor.cover.show_tilt",c,"Show tilt"),(0,r.kg)("editor.cover.show_tilt_desc",c,"Show tilt state and controls when supported"),t,{show_tilt:null!==(s=d.show_tilt)&&void 0!==s&&s},[this.booleanField("show_tilt")],e=>{var t,o;n({show_tilt:null!==(o=null===(t=e.detail.value)||void 0===t?void 0:t.show_tilt)&&void 0!==o&&o}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${this.renderFieldSection((0,r.kg)("editor.cover.show_tilt_control",c,"Show tilt slider"),(0,r.kg)("editor.cover.show_tilt_control_desc",c,"Allow setting tilt position when supported"),t,{show_tilt_control:null!==(l=d.show_tilt_control)&&void 0!==l&&l},[this.booleanField("show_tilt_control")],e=>{var t,o;n({show_tilt_control:null!==(o=null===(t=e.detail.value)||void 0===t?void 0:t.show_tilt_control)&&void 0!==o&&o}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>
      </div>
    `}renderPreview(e,t,o,n){var a,s,l;const d=e,c=this.resolveEntity(d.entity,o)||d.entity,v=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";if(!c||!(null==t?void 0:t.states[c]))return i.qy`
        <div class="uc-cover-wrapper" style="border-radius: var(--uc-r-12, 12px); overflow: hidden;">
          ${this.renderGradientErrorState((0,r.kg)("editor.cover.config_needed",v,"Select a cover"),(0,r.kg)("editor.cover.config_needed_desc",v,"Choose a cover entity in the General tab"),"mdi:blinds")}
        </div>
      `;const p=t.states[c],g=p.attributes||{},h="number"==typeof g.supported_features?g.supported_features:0,u=!!(4&h),y=!!(8&h),_=!!(176&h),w=void 0!==g.current_position?Number(g.current_position):void 0,m=Number.isFinite(w)?w:void 0,b=void 0!==g.current_tilt_position?Number(g.current_tilt_position):void 0,$=Number.isFinite(b)?b:void 0,x=String(p.state),k=!1!==d.show_title,f=!1!==d.show_icon,S=!1!==d.show_state,C=!1!==d.show_position&&(u||void 0!==m),q=!1!==d.show_position_control&&u,P=!1!==d.show_stop&&y,T=!1!==d.show_tilt&&_,F=!1!==d.show_tilt_control&&_,z=d.layout||"standard",U=d.alignment||"center",O=(null===(s=d.name)||void 0===s?void 0:s.trim())||g.friendly_name||(null===(l=c.split(".").pop())||void 0===l?void 0:l.replace(/_/g," "))||"Cover",D=d.icon||g.icon||"mdi:blinds",N=()=>this.triggerPreviewUpdate(!0),A=()=>{t.callService("cover","open_cover",{entity_id:c}),N()},L=()=>{t.callService("cover","close_cover",{entity_id:c}),N()},j=()=>{t.callService("cover","stop_cover",{entity_id:c}),N()},E=e=>{t.callService("cover","set_cover_position",{entity_id:c,position:e}),N()},I=e=>{t.callService("cover","set_cover_tilt_position",{entity_id:c,tilt_position:e}),N()},G="opening"===x||"closing"===x,M=void 0!==m?m:"open"===x?100:0,W=(()=>{switch(x){case"open":return(0,r.kg)("editor.cover.state_open",v,"Open");case"closed":return(0,r.kg)("editor.cover.state_closed",v,"Closed");case"opening":return(0,r.kg)("editor.cover.state_opening",v,"Opening");case"closing":return(0,r.kg)("editor.cover.state_closing",v,"Closing");default:return x}})(),H="left"===U?"uc-cover-align-left":"right"===U?"uc-cover-align-right":"uc-cover-align-center",B="compact"===z?i.qy`
          <div class="uc-cover uc-cover-compact ${H}" style="padding: 12px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
            ${f?i.qy`<ha-icon icon="${D}" style="font-size: 28px; color: var(--primary-color);"></ha-icon>`:""}
            <div style="flex: 1; min-width: 0;">
              ${k?i.qy`<div style="font-weight: 600; font-size: 14px;">${O}</div>`:""}
              ${S?i.qy`<div style="font-size: 12px; color: var(--secondary-text-color);">${W}</div>`:""}
              ${C&&(void 0!==m||u)?i.qy`<div style="font-size: 12px;">${M}%</div>`:""}
            </div>
            <div style="display: flex; gap: 6px;">
              <ha-button dense @click=${A} ?disabled=${"open"===x||G}>
                ${(0,r.kg)("editor.cover.open",v,"Open")}
              </ha-button>
              ${P?i.qy`<ha-button dense outlined @click=${j} ?disabled=${!G}>${(0,r.kg)("editor.cover.stop",v,"Stop")}</ha-button>`:""}
              <ha-button dense @click=${L} ?disabled=${"closed"===x||G}>
                ${(0,r.kg)("editor.cover.close",v,"Close")}
              </ha-button>
            </div>
          </div>
        `:"buttons"===z?i.qy`
          <div class="uc-cover uc-cover-buttons ${H}" style="padding: 16px;">
            ${k||f?i.qy`
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; justify-content: ${"left"===U?"flex-start":"right"===U?"flex-end":"center"};">
                    ${f?i.qy`<ha-icon icon="${D}" style="font-size: 24px; color: var(--primary-color);"></ha-icon>`:""}
                    ${k?i.qy`<span style="font-weight: 600;">${O}</span>`:""}
                  </div>
                `:""}
            <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: ${"left"===U?"flex-start":"right"===U?"flex-end":"center"};">
              <ha-button @click=${A} ?disabled=${"open"===x||G}>
                ${(0,r.kg)("editor.cover.open",v,"Open")}
              </ha-button>
              ${P?i.qy`<ha-button outlined @click=${j} ?disabled=${!G}>${(0,r.kg)("editor.cover.stop",v,"Stop")}</ha-button>`:""}
              <ha-button @click=${L} ?disabled=${"closed"===x||G}>
                ${(0,r.kg)("editor.cover.close",v,"Close")}
              </ha-button>
            </div>
            ${q&&u?i.qy`
                  <div style="margin-top: 12px;">
                    <div style="font-size: 12px; margin-bottom: 4px; color: var(--secondary-text-color);">${(0,r.kg)("editor.cover.position",v,"Position")}</div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      aria-label=${(0,r.kg)("editor.cover.position",v,"Position")}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${String(M)}
                      .value=${String(M)}
                      @change=${e=>E(Number(e.target.value))}
                      style="width: 100%;"
                    />
                  </div>
                `:""}
            ${F&&_?i.qy`
                  <div style="margin-top: 12px;">
                    <div style="font-size: 12px; margin-bottom: 4px; color: var(--secondary-text-color);">${(0,r.kg)("editor.cover.tilt",v,"Tilt")}</div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      aria-label=${(0,r.kg)("editor.cover.tilt",v,"Tilt")}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${String(null!=$?$:0)}
                      .value=${String(null!=$?$:0)}
                      @change=${e=>I(Number(e.target.value))}
                      style="width: 100%;"
                    />
                  </div>
                `:""}
          </div>
        `:i.qy`
        <div class="uc-cover uc-cover-standard ${H}" style="padding: 16px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; justify-content: ${"left"===U?"flex-start":"right"===U?"flex-end":"center"};">
            ${f?i.qy`<ha-icon icon="${D}" style="font-size: 28px; color: var(--primary-color);"></ha-icon>`:""}
            <div>
              ${k?i.qy`<div style="font-weight: 600; font-size: 16px;">${O}</div>`:""}
              ${S?i.qy`<div style="font-size: 13px; color: var(--secondary-text-color);">${W}</div>`:""}
            </div>
          </div>
          ${C&&(u||void 0!==m)?i.qy`
                <div style="margin-bottom: 12px;">
                  <div style="height: 8px; background: var(--divider-color); border-radius: var(--uc-r-4, 4px); overflow: hidden;">
                    <div
                      style="height: 100%; width: ${M}%; background: var(--primary-color); border-radius: var(--uc-r-4, 4px); transition: width 0.2s;"
                    ></div>
                  </div>
                  ${q?i.qy`<div style="font-size: 12px; text-align: center; margin-top: 4px;">${M}%</div>`:""}
                </div>
              `:""}
          <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: ${"left"===U?"flex-start":"right"===U?"flex-end":"center"};">
            <ha-button @click=${A} ?disabled=${"open"===x||G}>
              ${(0,r.kg)("editor.cover.open",v,"Open")}
            </ha-button>
            ${P?i.qy`<ha-button outlined @click=${j} ?disabled=${!G}>${(0,r.kg)("editor.cover.stop",v,"Stop")}</ha-button>`:""}
            <ha-button @click=${L} ?disabled=${"closed"===x||G}>
              ${(0,r.kg)("editor.cover.close",v,"Close")}
            </ha-button>
          </div>
          ${q&&u?i.qy`
                <div style="margin-top: 12px;">
                  <div style="font-size: 12px; margin-bottom: 4px; color: var(--secondary-text-color);">${(0,r.kg)("editor.cover.position",v,"Position")}</div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    aria-label=${(0,r.kg)("editor.cover.position",v,"Position")}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow=${String(M)}
                    .value=${String(M)}
                    @change=${e=>E(Number(e.target.value))}
                    style="width: 100%;"
                  />
                </div>
              `:""}
          ${T&&_?i.qy`
                <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--divider-color);">
                  <div style="font-size: 12px; margin-bottom: 6px; color: var(--secondary-text-color);">${(0,r.kg)("editor.cover.tilt",v,"Tilt")}</div>
                  ${F?i.qy`
                        <input
                          type="range"
                          min="0"
                          max="100"
                          aria-label=${(0,r.kg)("editor.cover.tilt",v,"Tilt")}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-valuenow=${String(null!=$?$:0)}
                          .value=${String(null!=$?$:0)}
                          @change=${e=>I(Number(e.target.value))}
                          style="width: 100%;"
                        />
                      `:i.qy`
                        <div style="display: flex; gap: 8px;">
                          <ha-button dense outlined @click=${()=>{t.callService("cover","open_cover_tilt",{entity_id:c}),N()}}>${(0,r.kg)("editor.cover.open",v,"Open")}</ha-button>
                          <ha-button dense outlined @click=${()=>{t.callService("cover","close_cover_tilt",{entity_id:c}),N()}}>${(0,r.kg)("editor.cover.close",v,"Close")}</ha-button>
                        </div>
                      `}
                </div>
              `:""}
        </div>
      `,J=this.buildDesignStyles(e,t),R=Object.entries(J).filter(([,e])=>null!=e&&""!==e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${t}`).join("; "),V=this.getHoverEffectClass(e);return i.qy`
      <div class="uc-cover-wrapper ${V}" data-uc-role="pane" style="background: var(--uc-pane-bg, var(--card-background-color)); border-radius: var(--uc-r-12, 12px); overflow: hidden; ${R}">
        ${this.wrapWithAnimation(B,e,t)}
      </div>
    `}getStyles(){return`\n      ${n.m.getSliderStyles()}\n      .uc-cover-wrapper { box-sizing: border-box; }\n      .uc-cover-align-left { text-align: left; }\n      .uc-cover-align-center { text-align: center; }\n      .uc-cover-align-right { text-align: right; }\n      .uc-cover input[type="range"] {\n        -webkit-appearance: none;\n        appearance: none;\n        height: 6px;\n        background: var(--divider-color);\n        border-radius: var(--uc-r-3, 3px);\n      }\n      .uc-cover input[type="range"]::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        width: 18px;\n        height: 18px;\n        background: var(--primary-color);\n        border-radius: 50%;\n        cursor: pointer;\n      }\n      .uc-cover input[type="range"]::-moz-range-thumb {\n        width: 18px;\n        height: 18px;\n        background: var(--primary-color);\n        border-radius: 50%;\n        cursor: pointer;\n        border: none;\n      }\n    `}}}};