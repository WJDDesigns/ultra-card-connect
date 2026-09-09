export const __webpack_esm_ids__=[3102];export const __webpack_esm_modules__={8927(e,t,i){i.d(t,{UltraBooleanInputModule:()=>s});var o=i(2618),r=i(6478),n=i(7475),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this.metadata={type:"boolean_input",title:"Boolean Input",description:"Toggle switch linked to input_boolean and switch entities",author:"WJD Designs",version:"1.0.0",icon:"mdi:toggle-switch-outline",category:"input",tags:["boolean","toggle","switch","input","form","helper","interactive"]}}createDefault(e,t){return{id:e||this.generateId("boolean_input"),type:"boolean_input",toggle_style:"switch",content_alignment:"none",show_label:!0,label:"",show_entity_name:!1,show_state_text:!0,on_text:"",off_text:"",font_size:14,text_color:"var(--primary-text-color)",on_color:"var(--primary-color)",off_color:"var(--disabled-color, #bdbdbd)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getToggleStyleOptions(e){return[{value:"switch",label:(0,r.kg)("editor.boolean_input.style_options.switch",e,"Switch")},{value:"checkbox",label:(0,r.kg)("editor.boolean_input.style_options.checkbox",e,"Checkbox")},{value:"pill",label:(0,r.kg)("editor.boolean_input.style_options.pill",e,"Pill Toggle")}]}getAlignmentOptions(e){return[{value:"none",label:(0,r.kg)("editor.common.none",e,"None")},{value:"left",label:(0,r.kg)("editor.common.left",e,"Left")},{value:"center",label:(0,r.kg)("editor.common.center",e,"Center")},{value:"right",label:(0,r.kg)("editor.common.right",e,"Right")}]}renderGeneralTab(e,t,i,n){var l,a;const s=e,d=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.boolean_input.entity.title",d,"Entity Configuration"),(0,r.kg)("editor.boolean_input.entity.desc",d,"Link to a Home Assistant Input Boolean or switch entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",s.entity||"",e=>{n({entity:e}),this.triggerPreviewUpdate()},["input_boolean","switch"],(0,r.kg)("editor.boolean_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.boolean_input.appearance.title",d,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.boolean_input.appearance.desc",d,"Configure the toggle style and labels.")}
          </div>

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.boolean_input.toggle_style",d,"Toggle Style"),(0,r.kg)("editor.boolean_input.toggle_style_desc",d,"Visual style of the toggle"),t,{toggle_style:s.toggle_style||"switch"},[this.selectField("toggle_style",this.getToggleStyleOptions(d))],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
          ${this.renderFieldSection((0,r.kg)("editor.boolean_input.content_alignment",d,"Alignment"),(0,r.kg)("editor.boolean_input.content_alignment_desc",d,"Align the control row inside the module"),t,{content_alignment:s.content_alignment||"none"},[this.selectField("content_alignment",this.getAlignmentOptions(d))],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.boolean_input.label",d,"Label"),(0,r.kg)("editor.boolean_input.label_desc",d,"Label displayed beside the toggle"),t,{label:s.label||""},[{name:"label",selector:{text:{}}}],e=>n(e.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.boolean_input.show_label",d,"Show Label"),(0,r.kg)("editor.boolean_input.show_label_desc",d,"Display the label"),t,{show_label:!1!==s.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${"pill"!==(s.toggle_style||"switch")?this.renderFieldSection((0,r.kg)("editor.boolean_input.show_entity_name",d,"Show Entity Name"),(0,r.kg)("editor.boolean_input.show_entity_name_desc",d,"Display the entity name beside the control (switch/checkbox)"),t,{show_entity_name:!0===s.show_entity_name},[{name:"show_entity_name",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}
          ${this.renderFieldSection((0,r.kg)("editor.boolean_input.show_state_text",d,"Show State Text"),(0,r.kg)("editor.boolean_input.show_state_text_desc",d,"Display On/Off text beside the toggle"),t,{show_state_text:!1!==s.show_state_text},[{name:"show_state_text",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${!1!==s.show_state_text?o.qy`
            ${this.renderFieldSection((0,r.kg)("editor.boolean_input.on_text",d,"On Text"),(0,r.kg)("editor.boolean_input.on_text_desc",d,"Custom text for the On state (default: On)"),t,{on_text:s.on_text||""},[{name:"on_text",selector:{text:{}}}],e=>n(e.detail.value))}
            ${this.renderFieldSection((0,r.kg)("editor.boolean_input.off_text",d,"Off Text"),(0,r.kg)("editor.boolean_input.off_text_desc",d,"Custom text for the Off state (default: Off)"),t,{off_text:s.off_text||""},[{name:"off_text",selector:{text:{}}}],e=>n(e.detail.value))}
          `:""}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.boolean_input.styling.title",d,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.boolean_input.font_size",d,"Font Size"),(0,r.kg)("editor.boolean_input.font_size_desc",d,"Font size in pixels"),null!==(a=s.font_size)&&void 0!==a?a:14,14,10,24,1,e=>n({font_size:e}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.boolean_input.on_color",d,"On Color")}
              .value=${s.on_color||"var(--primary-color)"}
              @color-changed=${e=>{n({on_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.boolean_input.off_color",d,"Off Color")}
              .value=${s.off_color||"var(--disabled-color, #bdbdbd)"}
              @color-changed=${e=>{n({off_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.boolean_input.text_color",d,"Text Color")}
              .value=${s.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>{n({text_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return l.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return a.X.render(e,t,e=>o(e))}getStyles(){return n.m.getSliderStyles()}renderPreview(e,t,i){var n,l,a,s,d,c;const p=e,u=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";if(!(null===(l=p.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",u,"Configure Entity"),(0,r.kg)("editor.boolean_input.error_configure_entity_desc",u,"Select an Input Boolean entity in the General tab"),"mdi:toggle-switch-outline");const g=null===(a=null==t?void 0:t.states)||void 0===a?void 0:a[p.entity];if(!g)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",u,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const _="on"===g.state,b=p.design||{},h=null!==(s=p.font_size)&&void 0!==s?s:14,v=p.text_color||"var(--primary-text-color)",m=p.text_color||"var(--secondary-text-color)",y=p.on_color||"var(--primary-color)",x=p.off_color||"var(--disabled-color, #bdbdbd)",$=p.toggle_style||"switch",f=p.content_alignment||"none",w=!1!==p.show_label&&!!p.label,k=!0===p.show_entity_name,S=!1!==p.show_state_text,T=p.on_text||"On",z=p.off_text||"Off",C="none"===f?"":`justify-content:${"center"===f?"center":"right"===f?"flex-end":"flex-start"};width:100%;`,F="center"===f?"text-align:center;":"right"===f?"text-align:right;":"",E=(this._buildContainerStyles(b),this.getHoverEffectClass(e)),D=this.buildStyleString(this.buildDesignStyles(e,t)),P=p.id,U=()=>{if(!p.entity||!t)return;const e=p.entity.split(".")[0];t.callService(e,"toggle",{entity_id:p.entity})},A=_?y:x;return"checkbox"===$?this.wrapWithAnimation(o.qy`
        <style>
          .bool-cb-row-${P} { display:flex; align-items:center; gap:12px; cursor:pointer; }
          .bool-cb-box-${P} { width:22px; height:22px; border-radius:var(--uc-r-4, 4px); border:2px solid ${A};
            display:flex; align-items:center; justify-content:center; transition:all .2s; flex-shrink:0;
            background:${_?A:"transparent"}; }
          .bool-cb-box-${P} ha-icon { --mdc-icon-size:16px; color:#fff; opacity:${_?"1":"0"}; transition:opacity .2s; }
          .bool-cb-name { font-size:${h}px; color:${v}; }
          .bool-state-text { font-size:${Math.max(11,h-2)}px; color:${m}; }
          .bool-top-label { font-size:12px; font-weight:500; color:${m}; margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${E}" style="${D}">
          ${w?o.qy`<div class="bool-top-label" style="${F}">${p.label}</div>`:""}
          <div class="bool-cb-row-${P}" style="${C}" @click=${U}>
            <div class="bool-cb-box-${P}"><ha-icon icon="mdi:check"></ha-icon></div>
            ${k?o.qy`<span class="bool-cb-name">${(null===(d=g.attributes)||void 0===d?void 0:d.friendly_name)||p.entity}</span>`:""}
            ${S?o.qy`<span class="bool-state-text">${_?T:z}</span>`:""}
          </div>
        </div>
      `,e,t):"pill"===$?this.wrapWithAnimation(o.qy`
        <style>
          .bool-pill-row-${P} { display:flex; align-items:center; gap:12px; }
          .bool-pill-${P} { display:flex; border-radius:var(--uc-r-20, 20px); overflow:hidden; border:1px solid var(--divider-color); }
          .bool-pill-btn-${P} { padding:8px 20px; border:none; cursor:pointer; font-size:${h}px;
            font-family:inherit; transition:all .2s; background:transparent; color:${v}; }
          .bool-pill-btn-${P}.active { background:${A}; color:#fff; font-weight:500; }
          .bool-pill-btn-${P}:not(.active):hover { background:rgba(var(--rgb-primary-text-color,0,0,0),.05); }
          .bool-pill-label { font-size:${h}px; color:${v}; flex:1; }
          .bool-top-label { font-size:12px; font-weight:500; color:${m}; margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${E}" style="${D}">
          ${w?o.qy`<div class="bool-top-label" style="${F}">${p.label}</div>`:""}
          <div class="bool-pill-row-${P}" style="${C}">
            <div class="bool-pill-${P}">
              <button class="bool-pill-btn-${P} ${_?"":"active"}" @click=${()=>{_&&U()}}>${z}</button>
              <button class="bool-pill-btn-${P} ${_?"active":""}" @click=${()=>{_||U()}}>${T}</button>
            </div>
          </div>
        </div>
      `,e,t):this.wrapWithAnimation(o.qy`
      <style>
        .bool-sw-row-${P} { display:flex; align-items:center; gap:12px; cursor:pointer; }
        .bool-sw-track-${P} { width:48px; height:26px; border-radius:var(--uc-r-13, 13px); position:relative;
          background:${A}; transition:background .3s; flex-shrink:0; }
        .bool-sw-thumb-${P} { width:22px; height:22px; border-radius:50%; background:#fff;
          position:absolute; top:2px; left:${_?"24px":"2px"}; transition:left .3s;
          box-shadow:0 1px 3px rgba(0,0,0,.3); }
        .bool-sw-name { font-size:${h}px; color:${v}; }
        .bool-state-text { font-size:${Math.max(11,h-2)}px; color:${m}; }
        .bool-top-label { font-size:12px; font-weight:500; color:${m}; margin-bottom:6px; padding-left:2px; }
      </style>
      <div class="${E}" style="${D}">
        ${w?o.qy`<div class="bool-top-label" style="${F}">${p.label}</div>`:""}
        <div class="bool-sw-row-${P}" style="${C}" @click=${U}>
          <div class="bool-sw-track-${P}"><div class="bool-sw-thumb-${P}"></div></div>
          ${k?o.qy`<span class="bool-sw-name">${(null===(c=g.attributes)||void 0===c?void 0:c.friendly_name)||p.entity}</span>`:""}
          ${S?o.qy`<span class="bool-state-text">${_?T:z}</span>`:""}
        </div>
      </div>
    `,e,t)}_buildContainerStyles(e){return{width:"100%",height:"auto",padding:e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:"0",margin:e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:"0",background:e.background_color||"transparent","border-radius":e.border_radius||"0",border:e.border_style&&"none"!==e.border_style?`${e.border_width||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}:${t}`).join(";")}}},719(e,t,i){i.d(t,{UltraButtonInputModule:()=>p});var o=i(2618),r=i(6478),n=i(7475),l=i(5147),a=i(8938),s=i(4830),d=i(6831),c=i(5646);i(7921);class p extends n.m{constructor(){super(...arguments),this._rippleTimers=new Map,this.metadata={type:"button_input",title:"Button Input",description:"Press button linked to input_button helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:gesture-tap-button",category:"input",tags:["button","press","input","form","helper","interactive","trigger"]}}createDefault(e,t){return{id:e||this.generateId("button_input"),type:"button_input",button_label:"",button_icon:"",button_style:"theme",font_size:14,text_color:"#ffffff",button_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getButtonStyleOptions(e){return[...d.xz.map(e=>{return{value:e,label:(t=e,t.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase()))};var t}),{value:"filled",label:(0,r.kg)("editor.button_input.style_options.filled",e,"Filled")},{value:"outlined",label:(0,r.kg)("editor.button_input.style_options.outlined",e,"Outlined")},{value:"text",label:(0,r.kg)("editor.button_input.style_options.text",e,"Text Only")}]}renderGeneralTab(e,t,i,n){var l,a;const s=e,d=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.button_input.entity.title",d,"Entity Configuration"),(0,r.kg)("editor.button_input.entity.desc",d,"Link to a Home Assistant Input Button helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",s.entity||"",e=>{n({entity:e}),this.triggerPreviewUpdate()},["input_button"],(0,r.kg)("editor.button_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.button_input.appearance.title",d,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.button_input.appearance.desc",d,"Configure the button label, icon, and style.")}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.button_input.button_label",d,"Button Label"),(0,r.kg)("editor.button_input.button_label_desc",d,"Text displayed on the button (uses entity name if empty)"),t,{button_label:s.button_label||""},[{name:"button_label",selector:{text:{}}}],e=>n(e.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.button_input.button_icon",d,"Icon"),(0,r.kg)("editor.button_input.button_icon_desc",d,"Icon displayed on the button"),t,{button_icon:s.button_icon||""},[{name:"button_icon",selector:{icon:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.button_input.button_style",d,"Button Style"),(0,r.kg)("editor.button_input.button_style_desc",d,"Visual style of the button. Theme inherits the card theme control recipe."),t,{button_style:s.button_style||"theme"},[this.selectField("button_style",this.withThemeInheritOption(d,i,"button_input","button_style","flat",this.getButtonStyleOptions(d)))],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.button_input.styling.title",d,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.button_input.font_size",d,"Font Size"),(0,r.kg)("editor.button_input.font_size_desc",d,"Font size in pixels"),null!==(a=s.font_size)&&void 0!==a?a:14,14,10,24,1,e=>n({font_size:e}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.button_input.button_color",d,"Button Color")}
              .value=${s.button_color||"var(--primary-color)"}
              @color-changed=${e=>{n({button_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.button_input.text_color",d,"Text Color")}
              .value=${s.text_color||"#ffffff"}
              @color-changed=${e=>n({text_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return l.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return a.X.render(e,t,e=>o(e))}getStyles(){return n.m.getSliderStyles()}renderPreview(e,t,i){var n,l,a,p,u;const g=e,_=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";if(!(null===(l=g.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",_,"Configure Entity"),(0,r.kg)("editor.button_input.error_configure_entity_desc",_,"Select an Input Button entity in the General tab"),"mdi:gesture-tap-button");const b=null===(a=null==t?void 0:t.states)||void 0===a?void 0:a[g.entity];if(!b)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",_,"Entity Not Found"),`Entity "${g.entity}" is not available`,"mdi:alert-circle-outline");g.design;const h=null!==(p=g.font_size)&&void 0!==p?p:14,v=g.text_color||"#ffffff",m=g.button_color||"var(--primary-color)",y=(0,s.NS)(i,"button_input","button_style",g.button_style,"flat"),x=(0,c.Hv)(y),$=g.button_label||(null===(u=b.attributes)||void 0===u?void 0:u.friendly_name)||"Press",f=g.button_icon||"",w=this.getHoverEffectClass(e),k=this.buildStyleString(this.buildDesignStyles(e,t)),S=g.id,T=(0,c.oV)(y,{background:m,textColor:v,hasCustomTextColor:!!g.text_color}),z=(0,d._0)(x,"control");return this.wrapWithAnimation(o.qy`
      <style>
        .btn-input-${S} {
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          padding:12px 24px; border-radius:var(--uc-r-8, 8px); cursor:pointer; font-size:${h}px;
          font-family:inherit; font-weight:500; transition:all .2s; position:relative;
          overflow:hidden; width:100%; box-sizing:border-box;
          --mdc-icon-size:${Math.min(24,h+4)}px;
          ${T}
        }
        .btn-input-${S}:hover { opacity:.9; transform:translateY(-1px); box-shadow:0 2px 8px rgba(0,0,0,.15); }
        .btn-input-${S}:active { transform:translateY(0); opacity:.8; }
        .btn-input-${S} .ripple {
          position:absolute; border-radius:50%; background:rgba(255,255,255,.4);
          transform:scale(0); animation:btn-ripple-${S} .5s ease-out; pointer-events:none;
        }
        @keyframes btn-ripple-${S} { to { transform:scale(4); opacity:0; } }
      </style>
      <div class="${w}" style="${k}">
        <button
          class="btn-input-${S}"
          data-uc-surface="${z["data-uc-surface"]}"
          data-uc-role="${z["data-uc-role"]}"
          @click=${e=>{g.entity&&t&&t.callService("input_button","press",{entity_id:g.entity});const i=e.currentTarget,o=i.getBoundingClientRect(),r=e,n=document.createElement("span");n.className="ripple";const l=Math.max(o.width,o.height);n.style.cssText=`width:${l}px;height:${l}px;left:${r.clientX-o.left-l/2}px;top:${r.clientY-o.top-l/2}px;`,i.appendChild(n);const a=setTimeout(()=>n.remove(),500);this._rippleTimers.set(S,a)}}>
          ${f?o.qy`<ha-icon icon="${f}"></ha-icon>`:""}
          <span>${$}</span>
        </button>
      </div>
    `,e,t)}_buildContainerStyles(e){return{width:"100%",height:"auto",padding:e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:"0",margin:e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:"0",background:e.background_color||"transparent","border-radius":e.border_radius||"0",border:e.border_style&&"none"!==e.border_style?`${e.border_width||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}:${t}`).join(";")}}},6126(e,t,i){i.d(t,{UltraColorInputModule:()=>s});var o=i(2618),r=i(6478),n=i(7475),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this._debounceTimers=new Map,this.metadata={type:"color_input",title:"Color Input",description:"Color picker linked to input_text or light entities",author:"WJD Designs",version:"1.0.0",icon:"mdi:palette",category:"input",tags:["color","picker","input","form","helper","interactive","rgb","hex"]}}createDefault(e,t){return{id:e||this.generateId("color_input"),type:"color_input",color_mode:"hex",show_label:!0,label:"",show_hex_input:!0,show_preview:!0,preview_size:40,font_size:14,text_color:"var(--primary-text-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getColorModeOptions(e){return[{value:"hex",label:(0,r.kg)("editor.color_input.mode_options.hex",e,"Hex (Input Text)")},{value:"light_rgb",label:(0,r.kg)("editor.color_input.mode_options.light_rgb",e,"Light RGB Color")}]}renderGeneralTab(e,t,i,n){var l,a,s;const d=e,c=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en",p="light_rgb"===d.color_mode,u=p?["light"]:["input_text"];return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.color_input.mode.title",c,"Color Mode")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.color_input.mode.desc",c,"Choose how the color value is stored.")}
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.color_input.color_mode",c,"Color Mode"),(0,r.kg)("editor.color_input.color_mode_desc",c,"Hex stores to Input Text, Light RGB controls a light entity"),t,{color_mode:d.color_mode||"hex"},[this.selectField("color_mode",this.getColorModeOptions(c))],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
        </div>

        ${this.renderSettingsSection((0,r.kg)("editor.color_input.entity.title",c,"Entity Configuration"),(0,r.kg)("editor.color_input.entity.desc",c,p?"Select a light entity to control.":"Select an Input Text entity to store the hex color."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",d.entity||"",e=>{n({entity:e}),this.triggerPreviewUpdate()},u,(0,r.kg)("editor.color_input.entity_field",c,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.color_input.display.title",c,"Display")}</div>

          ${this.renderFieldSection((0,r.kg)("editor.color_input.label",c,"Label"),(0,r.kg)("editor.color_input.label_desc",c,"Label above the color picker"),t,{label:d.label||""},[{name:"label",selector:{text:{}}}],e=>n(e.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.color_input.show_label",c,"Show Label"),(0,r.kg)("editor.color_input.show_label_desc",c,"Display the label"),t,{show_label:!1!==d.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${this.renderFieldSection((0,r.kg)("editor.color_input.show_hex_input",c,"Show Hex Input"),(0,r.kg)("editor.color_input.show_hex_input_desc",c,"Display a text field with the hex value"),t,{show_hex_input:!1!==d.show_hex_input},[{name:"show_hex_input",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.color_input.styling.title",c,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.color_input.preview_size",c,"Preview Size"),(0,r.kg)("editor.color_input.preview_size_desc",c,"Size of the color preview swatch"),null!==(a=d.preview_size)&&void 0!==a?a:40,40,24,80,2,e=>{n({preview_size:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}
          ${this.renderSliderField((0,r.kg)("editor.color_input.font_size",c,"Font Size"),(0,r.kg)("editor.color_input.font_size_desc",c,"Font size in pixels"),null!==(s=d.font_size)&&void 0!==s?s:14,14,10,24,1,e=>n({font_size:e}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.color_input.text_color",c,"Text Color")}
              .value=${d.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>n({text_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return l.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return a.X.render(e,t,e=>o(e))}getStyles(){return n.m.getSliderStyles()}renderPreview(e,t,i){var n,l,a,s,d,c;const p=e,u=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";if(!(null===(l=p.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",u,"Configure Entity"),(0,r.kg)("editor.color_input.error_configure_entity_desc",u,"Select an entity in the General tab"),"mdi:palette");const g=null===(a=null==t?void 0:t.states)||void 0===a?void 0:a[p.entity];if(!g)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",u,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const _="light_rgb"===p.color_mode;let b;if(_){const e=null===(s=g.attributes)||void 0===s?void 0:s.rgb_color;b=e?`#${e.map(e=>e.toString(16).padStart(2,"0")).join("")}`:"#ffffff"}else{const e=g.state||"#000000";b=e.startsWith("#")?e:`#${e}`}const h=p.design||{},v=null!==(d=p.font_size)&&void 0!==d?d:14,m=p.text_color||"var(--primary-text-color)",y=!1!==p.show_label&&!!p.label,x=!1!==p.show_hex_input,$=(p.show_preview,null!==(c=p.preview_size)&&void 0!==c?c:40),f=(this._buildContainerStyles(h),this.getHoverEffectClass(e)),w=this.buildStyleString(this.buildDesignStyles(e,t)),k=p.id,S=e=>{const i=this._debounceTimers.get(k);i&&clearTimeout(i),this._debounceTimers.set(k,setTimeout(()=>{if(p.entity&&t)if(_){const i=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16);t.callService("light","turn_on",{entity_id:p.entity,rgb_color:[i,o,r]})}else t.callService("input_text","set_value",{entity_id:p.entity,value:e})},150))};return this.wrapWithAnimation(o.qy`
      <style>
        .clr-row-${k} { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
        .clr-swatch-${k} {
          position:relative; width:${$}px; height:${$}px; flex-shrink:0;
          border-radius:var(--uc-r-10, 10px); cursor:pointer; overflow:hidden;
          border:2px solid var(--divider-color); transition:border-color .2s, box-shadow .2s;
          background:${b};
        }
        .clr-swatch-${k}:hover { border-color:var(--primary-color); box-shadow:0 0 0 2px rgba(var(--rgb-primary-color,3,169,244),.25); }
        .clr-swatch-${k} input {
          position:absolute; inset:0; width:100%; height:100%; opacity:0; cursor:pointer;
          border:none; padding:0; -webkit-appearance:none;
        }
        .clr-hex-input-${k} { flex:1; min-width:80px; padding:10px 12px; border:1px solid var(--divider-color);
          border-radius:var(--uc-r-8, 8px); background:transparent; font-size:${v}px; color:${m};
          font-family:monospace; outline:none; transition:border-color .2s; }
        .clr-hex-input-${k}:focus { border-color:var(--primary-color); box-shadow:0 0 0 1px var(--primary-color); }
        .clr-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:6px; padding-left:2px; }
      </style>
      <div class="${f}" style="${w}">
        ${y?o.qy`<div class="clr-label">${p.label}</div>`:""}
        <div class="clr-row-${k}">
          <div class="clr-swatch-${k}">
            <input type="color" .value=${b} @input=${e=>{const t=e.target;S(t.value)}} />
          </div>
          ${x?o.qy`<input class="clr-hex-input-${k}" type="text" .value=${b}
            placeholder="#000000" @change=${e=>{let t=e.target.value.trim();t.startsWith("#")||(t=`#${t}`),/^#[0-9a-fA-F]{6}$/.test(t)&&S(t)}} />`:""}
        </div>
      </div>
    `,e,t)}_buildContainerStyles(e){return{width:"100%",height:"auto",padding:e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:"0",margin:e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:"0",background:e.background_color||"transparent","border-radius":e.border_radius||"0",border:e.border_style&&"none"!==e.border_style?`${e.border_width||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}:${t}`).join(";")}}},9959(e,t,i){i.d(t,{UltraCounterInputModule:()=>s});var o=i(2618),r=i(6478),n=i(7475),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this.metadata={type:"counter_input",title:"Counter Input",description:"Counter with increment, decrement, and reset linked to counter helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:counter",category:"input",tags:["counter","increment","decrement","input","form","helper","interactive"]}}createDefault(e,t){return{id:e||this.generateId("counter_input"),type:"counter_input",show_label:!0,label:"",show_reset:!0,counter_style:"inline",font_size:24,text_color:"var(--primary-text-color)",button_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getCounterStyleOptions(e){return[{value:"inline",label:(0,r.kg)("editor.counter_input.style_options.inline",e,"Inline (- value +)")},{value:"stacked",label:(0,r.kg)("editor.counter_input.style_options.stacked",e,"Stacked (buttons below)")},{value:"compact",label:(0,r.kg)("editor.counter_input.style_options.compact",e,"Compact (small)")}]}renderGeneralTab(e,t,i,n){var l,a;const s=e,d=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.counter_input.entity.title",d,"Entity Configuration"),(0,r.kg)("editor.counter_input.entity.desc",d,"Link to a Home Assistant counter helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",s.entity||"",e=>{n({entity:e}),this.triggerPreviewUpdate()},["counter"],(0,r.kg)("editor.counter_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.counter_input.appearance.title",d,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.counter_input.appearance.desc",d,"Configure layout and display options.")}
          </div>

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.counter_input.counter_style",d,"Layout Style"),(0,r.kg)("editor.counter_input.counter_style_desc",d,"How the counter and buttons are arranged"),t,{counter_style:s.counter_style||"inline"},[this.selectField("counter_style",this.getCounterStyleOptions(d))],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.counter_input.label",d,"Label"),(0,r.kg)("editor.counter_input.label_desc",d,"Label displayed above the counter"),t,{label:s.label||""},[{name:"label",selector:{text:{}}}],e=>n(e.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.counter_input.show_label",d,"Show Label"),(0,r.kg)("editor.counter_input.show_label_desc",d,"Display the label"),t,{show_label:!1!==s.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${this.renderFieldSection((0,r.kg)("editor.counter_input.show_reset",d,"Show Reset Button"),(0,r.kg)("editor.counter_input.show_reset_desc",d,"Display a reset button"),t,{show_reset:!1!==s.show_reset},[{name:"show_reset",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.counter_input.styling.title",d,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.counter_input.font_size",d,"Value Font Size"),(0,r.kg)("editor.counter_input.font_size_desc",d,"Font size of the counter value"),null!==(a=s.font_size)&&void 0!==a?a:24,24,14,48,1,e=>n({font_size:e}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.counter_input.button_color",d,"Button Color")}
              .value=${s.button_color||"var(--primary-color)"}
              @color-changed=${e=>{n({button_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.counter_input.text_color",d,"Text Color")}
              .value=${s.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>n({text_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return l.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return a.X.render(e,t,e=>o(e))}getStyles(){return n.m.getSliderStyles()}renderPreview(e,t,i){var n,l,a,s,d,c;const p=e,u=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";if(!(null===(l=p.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",u,"Configure Entity"),(0,r.kg)("editor.counter_input.error_configure_entity_desc",u,"Select a counter entity in the General tab"),"mdi:counter");const g=null===(a=null==t?void 0:t.states)||void 0===a?void 0:a[p.entity];if(!g)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",u,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const _=parseInt(g.state,10)||0,b=null!==(d=null===(s=g.attributes)||void 0===s?void 0:s.step)&&void 0!==d?d:1,h=p.design||{},v=null!==(c=p.font_size)&&void 0!==c?c:24,m=p.text_color||"var(--primary-text-color)",y=p.button_color||"var(--primary-color)",x=p.counter_style||"inline",$=!1!==p.show_label&&!!p.label,f=!1!==p.show_reset,w=(this._buildContainerStyles(h),this.getHoverEffectClass(e)),k=this.buildStyleString(this.buildDesignStyles(e,t)),S=p.id,T=()=>{p.entity&&t&&t.callService("counter","increment",{entity_id:p.entity})},z=()=>{p.entity&&t&&t.callService("counter","decrement",{entity_id:p.entity})},C=()=>{p.entity&&t&&t.callService("counter","reset",{entity_id:p.entity})},F="compact"===x?32:44,E="compact"===x?18:22;return this.wrapWithAnimation(o.qy`
      <style>
        .cnt-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:8px; padding-left:2px; }
        .cnt-btn-${S} {
          display:flex; align-items:center; justify-content:center; width:${F}px; height:${F}px;
          border-radius:50%; border:none; cursor:pointer; background:${y}; color:#fff;
          transition:all .15s; --mdc-icon-size:${E}px; flex-shrink:0;
        }
        .cnt-btn-${S}:hover { opacity:.85; transform:scale(1.05); }
        .cnt-btn-${S}:active { transform:scale(.95); }
        .cnt-btn-${S}.reset { background:transparent; color:var(--secondary-text-color); border:1px solid var(--divider-color); }
        .cnt-btn-${S}.reset:hover { color:${y}; border-color:${y}; }
        .cnt-value-${S} { font-size:${v}px; font-weight:700; color:${m}; font-variant-numeric:tabular-nums;
          min-width:${2*v}px; text-align:center; line-height:1; }
        .cnt-step { font-size:11px; color:var(--secondary-text-color); opacity:.6; }
        .cnt-inline-${S} { display:flex; align-items:center; justify-content:center; gap:${"compact"===x?"12px":"20px"}; }
        .cnt-stacked-${S} { display:flex; flex-direction:column; align-items:center; gap:12px; }
        .cnt-stacked-btns { display:flex; align-items:center; gap:12px; }
      </style>
      <div class="${w}" style="${k}">
        ${$?o.qy`<div class="cnt-label">${p.label}</div>`:""}
        ${"stacked"===x?o.qy`
          <div class="cnt-stacked-${S}">
            <div class="cnt-value-${S}">${_}</div>
            <div class="cnt-stacked-btns">
              <button class="cnt-btn-${S}" @click=${z}><ha-icon icon="mdi:minus"></ha-icon></button>
              ${f?o.qy`<button class="cnt-btn-${S} reset" @click=${C}><ha-icon icon="mdi:refresh"></ha-icon></button>`:""}
              <button class="cnt-btn-${S}" @click=${T}><ha-icon icon="mdi:plus"></ha-icon></button>
            </div>
          </div>
        `:o.qy`
          <div class="cnt-inline-${S}">
            <button class="cnt-btn-${S}" @click=${z}><ha-icon icon="mdi:minus"></ha-icon></button>
            <div style="display:flex;flex-direction:column;align-items:center;">
              <span class="cnt-value-${S}">${_}</span>
              ${1!==b?o.qy`<span class="cnt-step">step: ${b}</span>`:""}
            </div>
            <button class="cnt-btn-${S}" @click=${T}><ha-icon icon="mdi:plus"></ha-icon></button>
            ${f?o.qy`<button class="cnt-btn-${S} reset" @click=${C}><ha-icon icon="mdi:refresh"></ha-icon></button>`:""}
          </div>
        `}
      </div>
    `,e,t)}_buildContainerStyles(e){return{width:"100%",height:"auto",padding:e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:"4px 0",margin:e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:"0",background:e.background_color||"transparent","border-radius":e.border_radius||"0",border:e.border_style&&"none"!==e.border_style?`${e.border_width||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}:${t}`).join(";")}}},1244(e,t,i){i.d(t,{UltraDatetimeInputModule:()=>s});var o=i(2618),r=i(6478),n=i(7475),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this.metadata={type:"datetime_input",title:"Date/Time Input",description:"Date and time picker linked to input_datetime helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:calendar-clock",category:"input",tags:["date","time","datetime","input","form","helper","interactive","calendar"]}}createDefault(e,t){return{id:e||this.generateId("datetime_input"),type:"datetime_input",display_mode_datetime:"auto",show_label:!0,label:"",font_size:16,text_color:"var(--primary-text-color)",focus_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getDisplayModeOptions(e){return[{value:"auto",label:(0,r.kg)("editor.datetime_input.display_mode_options.auto",e,"Auto (from entity)")},{value:"date",label:(0,r.kg)("editor.datetime_input.display_mode_options.date",e,"Date Only")},{value:"time",label:(0,r.kg)("editor.datetime_input.display_mode_options.time",e,"Time Only")},{value:"datetime",label:(0,r.kg)("editor.datetime_input.display_mode_options.datetime",e,"Date & Time")}]}resolveDisplayMode(e,t){var i,o;const r=e.display_mode_datetime||"auto";if("auto"===r&&t)return{showDate:!1!==(null===(i=t.attributes)||void 0===i?void 0:i.has_date),showTime:!1!==(null===(o=t.attributes)||void 0===o?void 0:o.has_time)};switch(r){case"date":return{showDate:!0,showTime:!1};case"time":return{showDate:!1,showTime:!0};default:return{showDate:!0,showTime:!0}}}renderGeneralTab(e,t,i,n){var l,a,s;const d=e,c=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";return d.entity&&(null===(a=null==t?void 0:t.states)||void 0===a||a[d.entity]),o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Entity Configuration -->
        ${this.renderSettingsSection((0,r.kg)("editor.datetime_input.entity.title",c,"Entity Configuration"),(0,r.kg)("editor.datetime_input.entity.desc",c,"Link to a Home Assistant Input Datetime helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",d.entity||"",e=>{n({entity:e}),this.triggerPreviewUpdate()},["input_datetime"],(0,r.kg)("editor.datetime_input.entity_field",c,"Entity"))}
        </div>

        <!-- Display Configuration -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.datetime_input.display.title",c,"Display Configuration")}
          </div>
          <div
            class="section-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,r.kg)("editor.datetime_input.display.desc",c,"Configure which pickers to show and how they appear.")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,r.kg)("editor.datetime_input.display_mode_datetime",c,"Display Mode"),(0,r.kg)("editor.datetime_input.display_mode_datetime_desc",c,"Which pickers to show. Auto detects from the entity."),t,{display_mode_datetime:d.display_mode_datetime||"auto"},[this.selectField("display_mode_datetime",this.getDisplayModeOptions(c))],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.datetime_input.label",c,"Label"),(0,r.kg)("editor.datetime_input.label_desc",c,"Label displayed above the picker fields"),t,{label:d.label||""},[{name:"label",selector:{text:{}}}],e=>n(e.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.datetime_input.show_label",c,"Show Label"),(0,r.kg)("editor.datetime_input.show_label_desc",c,"Display the label above the pickers"),t,{show_label:!1!==d.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <!-- Styling -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.datetime_input.styling.title",c,"Styling")}
          </div>

          ${this.renderSliderField((0,r.kg)("editor.datetime_input.font_size",c,"Font Size"),(0,r.kg)("editor.datetime_input.font_size_desc",c,"Font size of the date/time inputs in pixels"),null!==(s=d.font_size)&&void 0!==s?s:16,16,10,32,1,e=>n({font_size:e}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.datetime_input.text_color",c,"Text Color")}
              .value=${d.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>{n({text_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.datetime_input.focus_color",c,"Focus/Accent Color")}
              .value=${d.focus_color||"var(--primary-color)"}
              @color-changed=${e=>{n({focus_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return l.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return a.X.render(e,t,e=>o(e))}getStyles(){return`\n      ${n.m.getSliderStyles()}\n    `}renderPreview(e,t,i,n){var l,a,s,d,c;const p=e,u=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";if(!p.entity||!p.entity.trim())return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",u,"Configure Entity"),(0,r.kg)("editor.datetime_input.error_configure_entity_desc",u,"Select an Input Datetime entity in the General tab"),"mdi:calendar-clock");const g=null===(a=null==t?void 0:t.states)||void 0===a?void 0:a[p.entity];if(!g)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",u,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const{showDate:_,showTime:b}=this.resolveDisplayMode(p,g),h=this.getDateValue(g),v=this.getTimeValue(g),m=p.design||{},y=null!==(s=p.font_size)&&void 0!==s?s:16,x=p.text_color||"var(--primary-text-color)",$=p.focus_color||"var(--primary-color)",f=!1!==p.show_label&&!!p.label,w=p.label||"",k=((m.padding_top||m.padding_bottom||m.padding_left||m.padding_right)&&(m.padding_top,m.padding_right,m.padding_bottom,m.padding_left),(m.margin_top||m.margin_bottom||m.margin_left||m.margin_right)&&(m.margin_top,m.margin_right,m.margin_bottom,m.margin_left),m.background_color,this.getBackgroundImageCss(Object.assign(Object.assign({},p),m),t),m.border_radius,m.border_style&&"none"!==m.border_style&&(m.border_width,m.border_style,m.border_color),(m.box_shadow_h||m.box_shadow_v||m.box_shadow_blur||m.box_shadow_spread)&&(m.box_shadow_h,m.box_shadow_v,m.box_shadow_blur,m.box_shadow_spread,m.box_shadow_color),m.hover_effect,this.getHoverEffectClass(e)),S=this.buildStyleString(this.buildDesignStyles(e,t)),T=e=>{const t=e.currentTarget.querySelector("input");if(t&&"function"==typeof t.showPicker)try{t.showPicker()}catch(e){}},z=p.id;return this.wrapWithAnimation(o.qy`
      <style>
        .datetime-input-wrapper-${z} {
          display: flex;
          gap: 12px;
          align-items: stretch;
          flex-wrap: wrap;
        }
        .datetime-input-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--secondary-text-color);
          margin-bottom: 6px;
          padding-left: 2px;
        }
        .datetime-input-sublabel {
          font-size: 11px;
          color: var(--secondary-text-color);
          opacity: 0.6;
          flex-shrink: 0;
          min-width: 35px;
          align-self: center;
        }
        .datetime-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          min-width: 0;
        }
        .datetime-picker-field-${z} {
          position: relative;
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
          border: 1px solid var(--divider-color);
          border-radius: var(--uc-r-8, 8px);
          background: transparent;
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }
        .datetime-picker-field-${z}:focus-within {
          border-color: ${$};
          box-shadow: 0 0 0 1px ${$};
        }
        .datetime-picker-field-${z}:hover {
          border-color: ${$};
        }
        .datetime-picker-field-${z} input {
          flex: 1;
          min-width: 0;
          border: none;
          outline: none;
          background: transparent;
          padding: 10px 12px;
          font-size: ${y}px;
          color: ${x};
          font-family: inherit;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
        }
        .datetime-picker-field-${z} input::-webkit-calendar-picker-indicator {
          display: none;
        }
        .datetime-picker-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          color: var(--secondary-text-color);
          opacity: 0.7;
          flex-shrink: 0;
          --mdc-icon-size: 20px;
          pointer-events: none;
        }
      </style>
      <div
        class="datetime-input-module-container ${k}"
        style="${S}"
      >
        ${f?o.qy`<div class="datetime-input-label">${w}</div>`:""}
        <div class="datetime-input-wrapper-${z}">
          ${_?o.qy`
                <div class="datetime-input-row">
                  ${_&&b?o.qy`<span class="datetime-input-sublabel">${(0,r.kg)("editor.datetime_input.date_label",(null===(d=null==t?void 0:t.locale)||void 0===d?void 0:d.language)||"en","Date")}</span>`:""}
                  <div class="datetime-picker-field-${z}" @click=${T}>
                    <span class="datetime-picker-icon">
                      <ha-icon icon="mdi:calendar"></ha-icon>
                    </span>
                    <input
                      type="date"
                      .value=${h}
                      @change=${e=>{const i=e.target;i.value&&this.setEntityDatetime(p.entity,i.value,void 0,g,t)}}
                    />
                  </div>
                </div>
              `:""}
          ${b?o.qy`
                <div class="datetime-input-row">
                  ${_&&b?o.qy`<span class="datetime-input-sublabel">${(0,r.kg)("editor.datetime_input.time_label",(null===(c=null==t?void 0:t.locale)||void 0===c?void 0:c.language)||"en","Time")}</span>`:""}
                  <div class="datetime-picker-field-${z}" @click=${T}>
                    <span class="datetime-picker-icon">
                      <ha-icon icon="mdi:clock-outline"></ha-icon>
                    </span>
                    <input
                      type="time"
                      .value=${v}
                      @change=${e=>{const i=e.target;i.value&&this.setEntityDatetime(p.entity,void 0,i.value,g,t)}}
                    />
                  </div>
                </div>
              `:""}
        </div>
      </div>
    `,e,t)}getDateValue(e){if(!e)return"";const t=e.attributes;if((null==t?void 0:t.year)&&(null==t?void 0:t.month)&&(null==t?void 0:t.day))return`${String(t.year).padStart(4,"0")}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`;const i=e.state;if(i&&i.includes("-")){const e=i.split(" ")[0]||i.split("T")[0]||i;if(/^\d{4}-\d{2}-\d{2}/.test(e))return e.substring(0,10)}return""}getTimeValue(e){if(!e)return"";const t=e.attributes;if(void 0!==(null==t?void 0:t.hour)&&void 0!==(null==t?void 0:t.minute))return`${String(t.hour).padStart(2,"0")}:${String(t.minute).padStart(2,"0")}:${void 0!==t.second?String(t.second).padStart(2,"0"):"00"}`;const i=e.state;if(i){const e=i.includes(" ")?i.split(" ")[1]:i.includes("T")?i.split("T")[1]:/^\d{2}:\d{2}/.test(i)?i:"";if(e&&/^\d{2}:\d{2}/.test(e))return e.substring(0,8)}return""}async setEntityDatetime(e,t,i,o,r){var n,l;if(!e||!r)return;const a=!1!==(null===(n=null==o?void 0:o.attributes)||void 0===n?void 0:n.has_date),s=!1!==(null===(l=null==o?void 0:o.attributes)||void 0===l?void 0:l.has_time),d={entity_id:e};if(a&&s){const e=t||this.getDateValue(o),r=i||this.getTimeValue(o);e&&r?d.datetime=`${e} ${r}`:e?d.date=e:r&&(d.time=r)}else if(a&&t)d.date=t;else{if(!s||!i)return;d.time=i}try{await r.callService("input_datetime","set_datetime",d)}catch(t){console.error(`[DatetimeInput] Failed to set datetime for ${e}:`,t)}}styleObjectToCss(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${t}`).join("; ")}}},908(e,t,i){i.d(t,{UltraNumberInputModule:()=>s});var o=i(2618),r=i(6478),n=i(7475),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this._debounceTimers=new Map,this._localValues=new Map,this._localValueTimers=new Map,this.metadata={type:"number_input",title:"Number Input",description:"Number input field linked to input_number helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:numeric",category:"input",tags:["number","input","form","helper","interactive","stepper"]}}createDefault(e,t){return{id:e||this.generateId("number_input"),type:"number_input",input_appearance:"outlined",show_label:!0,label:"",show_stepper:!0,show_unit:!0,font_size:16,text_color:"var(--primary-text-color)",focus_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getAppearanceOptions(e){return[{value:"outlined",label:(0,r.kg)("editor.number_input.appearance_options.outlined",e,"Outlined")},{value:"filled",label:(0,r.kg)("editor.number_input.appearance_options.filled",e,"Filled")},{value:"underlined",label:(0,r.kg)("editor.number_input.appearance_options.underlined",e,"Underlined")}]}renderGeneralTab(e,t,i,n){var l,a;const s=e,d=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.number_input.entity.title",d,"Entity Configuration"),(0,r.kg)("editor.number_input.entity.desc",d,"Link to a Home Assistant Input Number helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",s.entity||"",e=>{n({entity:e}),this.triggerPreviewUpdate()},["input_number","number"],(0,r.kg)("editor.number_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.number_input.appearance.title",d,"Appearance")}
          </div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
            ${(0,r.kg)("editor.number_input.appearance.desc",d,"Configure how the number input field looks.")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,r.kg)("editor.number_input.input_appearance",d,"Input Style"),(0,r.kg)("editor.number_input.input_appearance_desc",d,"Visual style of the input field"),t,{input_appearance:s.input_appearance||"outlined"},[this.selectField("input_appearance",this.getAppearanceOptions(d))],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.number_input.label",d,"Label"),(0,r.kg)("editor.number_input.label_desc",d,"Label displayed above the input field"),t,{label:s.label||""},[{name:"label",selector:{text:{}}}],e=>n(e.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.number_input.show_label",d,"Show Label"),(0,r.kg)("editor.number_input.show_label_desc",d,"Display the label above the input"),t,{show_label:!1!==s.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.number_input.controls.title",d,"Controls")}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.number_input.show_stepper",d,"Show +/- Buttons"),(0,r.kg)("editor.number_input.show_stepper_desc",d,"Display increment/decrement stepper buttons"),t,{show_stepper:!1!==s.show_stepper},[{name:"show_stepper",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.number_input.show_unit",d,"Show Unit"),(0,r.kg)("editor.number_input.show_unit_desc",d,"Display the unit of measurement"),t,{show_unit:!1!==s.show_unit},[{name:"show_unit",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.number_input.styling.title",d,"Styling")}</div>

          ${this.renderSliderField((0,r.kg)("editor.number_input.font_size",d,"Font Size"),(0,r.kg)("editor.number_input.font_size_desc",d,"Font size of the input text in pixels"),null!==(a=s.font_size)&&void 0!==a?a:16,16,10,32,1,e=>n({font_size:e}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.number_input.text_color",d,"Text Color")}
              .value=${s.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>n({text_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.number_input.focus_color",d,"Focus/Accent Color")}
              .value=${s.focus_color||"var(--primary-color)"}
              @color-changed=${e=>n({focus_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return l.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return a.X.render(e,t,e=>o(e))}getStyles(){return`${n.m.getSliderStyles()}`}renderPreview(e,t,i,n){var l,a,s,d,c,p,u,g,_,b,h;const v=e,m=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";if(!(null===(a=v.entity)||void 0===a?void 0:a.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",m,"Configure Entity"),(0,r.kg)("editor.number_input.error_configure_entity_desc",m,"Select an Input Number entity in the General tab"),"mdi:numeric");const y=null===(s=null==t?void 0:t.states)||void 0===s?void 0:s[v.entity];if(!y)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",m,"Entity Not Found"),`Entity "${v.entity}" is not available`,"mdi:alert-circle-outline");const x=this._localValues.get(v.id),$=void 0!==x?x:parseFloat(y.state)||0,f=null!==(c=null===(d=y.attributes)||void 0===d?void 0:d.min)&&void 0!==c?c:0,w=null!==(u=null===(p=y.attributes)||void 0===p?void 0:p.max)&&void 0!==u?u:100,k=null!==(_=null===(g=y.attributes)||void 0===g?void 0:g.step)&&void 0!==_?_:1,S=(null===(b=y.attributes)||void 0===b?void 0:b.unit_of_measurement)||"",T=v.design||{},z=v.input_appearance||"outlined",C=null!==(h=v.font_size)&&void 0!==h?h:16,F=v.text_color||"var(--primary-text-color)",E=v.focus_color||"var(--primary-color)",D=!1!==v.show_stepper,P=!1!==v.show_unit&&!!S,U=!1!==v.show_label&&!!v.label,A=(this.buildContainerStyles(T),this.getHoverEffectClass(e)),I=this.buildStyleString(this.buildDesignStyles(e,t)),O=v.id,q=e=>{const i=Math.min(w,Math.max(f,parseFloat(e.toFixed(10))));this._localValues.set(O,i);const o=this._debounceTimers.get(O);o&&clearTimeout(o);const r=this._localValueTimers.get(O);r&&clearTimeout(r),this._debounceTimers.set(O,setTimeout(()=>{this.callEntityService(v.entity,i,t),this._localValueTimers.set(O,setTimeout(()=>{this._localValues.delete(O)},1e3))},300))};let j="1px solid var(--divider-color)",V="transparent",L="";"filled"===z?(V="var(--input-fill-color, rgba(var(--rgb-primary-text-color, 0,0,0), 0.05))",j="none",L="border-bottom: 2px solid var(--divider-color);"):"underlined"===z&&(V="transparent",j="none",L="border-bottom: 2px solid var(--divider-color); border-radius: 0 !important;");const M=v.id;return this.wrapWithAnimation(o.qy`
      <style>
        .num-wrap-${M} {
          display: flex; align-items: center; background: ${V};
          border: ${j}; border-radius: var(--uc-r-8, 8px); ${L}
          transition: border-color .2s, box-shadow .2s; overflow: hidden;
        }
        .num-wrap-${M}:focus-within {
          border-color: ${E};
          ${"outlined"===z?`box-shadow: 0 0 0 1px ${E};`:""}
          ${"outlined"!==z?`border-bottom-color: ${E};`:""}
        }
        .num-field-${M} {
          flex: 1; border: none; outline: none; background: transparent;
          padding: 12px; font-size: ${C}px; color: ${F};
          font-family: inherit; min-width: 0; text-align: center;
          -moz-appearance: textfield;
        }
        .num-field-${M}::-webkit-inner-spin-button,
        .num-field-${M}::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        .num-step-btn {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 100%; min-height: 44px; cursor: pointer;
          color: var(--primary-text-color); background: transparent;
          border: none; flex-shrink: 0; transition: background .15s;
          --mdc-icon-size: 20px;
        }
        .num-step-btn:hover { background: rgba(var(--rgb-primary-text-color, 0,0,0), .06); }
        .num-step-btn:active { background: rgba(var(--rgb-primary-text-color, 0,0,0), .12); }
        .num-unit { font-size: ${Math.max(12,C-2)}px; color: var(--secondary-text-color);
          padding-right: 12px; flex-shrink: 0; }
        .num-label { font-size: 12px; font-weight: 500; color: var(--secondary-text-color);
          margin-bottom: 6px; padding-left: 2px; }
      </style>
      <div class="number-input-container ${A}" style="${I}">
        ${U?o.qy`<div class="num-label">${v.label}</div>`:""}
        <div class="num-wrap-${M}">
          ${D?o.qy`
            <button class="num-step-btn" @click=${()=>q($-k)}>
              <ha-icon icon="mdi:minus"></ha-icon>
            </button>`:""}
          <input class="num-field-${M}" type="number"
            .value=${String($)} min=${f} max=${w} step=${k}
            @input=${e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||q(i)}} />
          ${P?o.qy`<span class="num-unit">${S}</span>`:""}
          ${D?o.qy`
            <button class="num-step-btn" @click=${()=>q($+k)}>
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>`:""}
        </div>
      </div>
    `,e,t)}async callEntityService(e,t,i){if(!e||!i)return;const o=e.split(".")[0];try{await i.callService(o,"set_value",{entity_id:e,value:t})}catch(t){console.error(`[NumberInput] Failed to set value for ${e}:`,t)}}buildContainerStyles(e){return{width:"100%",height:"auto",padding:e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:"0",margin:e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:"0",background:e.background_color||"transparent","border-radius":e.border_radius||"0",border:e.border_style&&"none"!==e.border_style?`${e.border_width||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}styleObjectToCss(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${t}`).join("; ")}}},5151(e,t,i){i.d(t,{UltraSelectInputModule:()=>s});var o=i(2618),r=i(6478),n=i(7475),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this.metadata={type:"select_input",title:"Select Input",description:"Dropdown or chip selector linked to input_select helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:form-dropdown",category:"input",tags:["select","dropdown","input","form","helper","interactive","options"]}}createDefault(e,t){return{id:e||this.generateId("select_input"),type:"select_input",select_style:"dropdown",show_label:!0,label:"",font_size:14,text_color:"var(--primary-text-color)",active_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getStyleOptions(e){return[{value:"dropdown",label:(0,r.kg)("editor.select_input.style_options.dropdown",e,"Dropdown")},{value:"segmented",label:(0,r.kg)("editor.select_input.style_options.segmented",e,"Segmented Buttons")},{value:"chips",label:(0,r.kg)("editor.select_input.style_options.chips",e,"Chips / Pills")}]}renderGeneralTab(e,t,i,n){var l,a;const s=e,d=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.select_input.entity.title",d,"Entity Configuration"),(0,r.kg)("editor.select_input.entity.desc",d,"Link to a Home Assistant Input Select or select entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",s.entity||"",e=>{n({entity:e}),this.triggerPreviewUpdate()},["input_select","select"],(0,r.kg)("editor.select_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.select_input.appearance.title",d,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.select_input.appearance.desc",d,"Choose how the options are displayed.")}
          </div>

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.select_input.select_style",d,"Selection Style"),(0,r.kg)("editor.select_input.select_style_desc",d,"How options are presented to the user"),t,{select_style:s.select_style||"dropdown"},[this.selectField("select_style",this.getStyleOptions(d))],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.select_input.label",d,"Label"),(0,r.kg)("editor.select_input.label_desc",d,"Label displayed above the selector"),t,{label:s.label||""},[{name:"label",selector:{text:{}}}],e=>n(e.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.select_input.show_label",d,"Show Label"),(0,r.kg)("editor.select_input.show_label_desc",d,"Display the label"),t,{show_label:!1!==s.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.select_input.styling.title",d,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.select_input.font_size",d,"Font Size"),(0,r.kg)("editor.select_input.font_size_desc",d,"Font size in pixels"),null!==(a=s.font_size)&&void 0!==a?a:14,14,10,24,1,e=>n({font_size:e}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.select_input.active_color",d,"Active/Selected Color")}
              .value=${s.active_color||"var(--primary-color)"}
              @color-changed=${e=>{n({active_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.select_input.text_color",d,"Text Color")}
              .value=${s.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>n({text_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return l.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return a.X.render(e,t,e=>o(e))}getStyles(){return n.m.getSliderStyles()}renderPreview(e,t,i){var n,l,a,s,d;const c=e,p=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";if(!(null===(l=c.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",p,"Configure Entity"),(0,r.kg)("editor.select_input.error_configure_entity_desc",p,"Select an Input Select entity in the General tab"),"mdi:form-dropdown");const u=null===(a=null==t?void 0:t.states)||void 0===a?void 0:a[c.entity];if(!u)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",p,"Entity Not Found"),`Entity "${c.entity}" is not available`,"mdi:alert-circle-outline");const g=(null===(s=u.attributes)||void 0===s?void 0:s.options)||[],_=u.state||"",b=c.design||{},h=null!==(d=c.font_size)&&void 0!==d?d:14,v=c.text_color||"var(--primary-text-color)",m=c.active_color||"var(--primary-color)",y=c.select_style||"dropdown",x=!1!==c.show_label&&!!c.label,$=(this._buildContainerStyles(b),this.getHoverEffectClass(e)),f=this.buildStyleString(this.buildDesignStyles(e,t)),w=c.id,k=e=>{if(!c.entity||!t)return;const i=c.entity.split(".")[0];t.callService(i,"select_option",{entity_id:c.entity,option:e})};return"segmented"===y?this.wrapWithAnimation(o.qy`
        <style>
          .sel-seg-${w} { display:flex; border-radius:var(--uc-r-8, 8px); overflow:hidden; border:1px solid var(--divider-color); }
          .sel-seg-btn-${w} { flex:1; padding:10px 12px; border:none; background:transparent; cursor:pointer;
            font-size:${h}px; color:${v}; font-family:inherit; transition:all .2s;
            border-right:1px solid var(--divider-color); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
          .sel-seg-btn-${w}:last-child { border-right:none; }
          .sel-seg-btn-${w}.active { background:${m}; color:#fff; font-weight:500; }
          .sel-seg-btn-${w}:not(.active):hover { background:rgba(var(--rgb-primary-text-color,0,0,0),.05); }
          .sel-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${$}" style="${f}">
          ${x?o.qy`<div class="sel-label">${c.label}</div>`:""}
          <div class="sel-seg-${w}">
            ${g.map(e=>o.qy`
              <button class="sel-seg-btn-${w} ${e===_?"active":""}" @click=${()=>k(e)}>${e}</button>
            `)}
          </div>
        </div>
      `,e,t):"chips"===y?this.wrapWithAnimation(o.qy`
        <style>
          .sel-chips-${w} { display:flex; flex-wrap:wrap; gap:8px; }
          .sel-chip-${w} { padding:8px 16px; border-radius:var(--uc-r-20, 20px); border:1px solid var(--divider-color);
            background:transparent; cursor:pointer; font-size:${h}px; color:${v};
            font-family:inherit; transition:all .2s; white-space:nowrap; }
          .sel-chip-${w}.active { background:${m}; color:#fff; border-color:${m}; font-weight:500; }
          .sel-chip-${w}:not(.active):hover { border-color:${m}; }
          .sel-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${$}" style="${f}">
          ${x?o.qy`<div class="sel-label">${c.label}</div>`:""}
          <div class="sel-chips-${w}">
            ${g.map(e=>o.qy`
              <button class="sel-chip-${w} ${e===_?"active":""}" @click=${()=>k(e)}>${e}</button>
            `)}
          </div>
        </div>
      `,e,t):this.wrapWithAnimation(o.qy`
      <style>
        .sel-dd-wrap-${w} { position:relative; }
        .sel-dd-${w} { width:100%; padding:12px; font-size:${h}px; color:${v}; font-family:inherit;
          background:transparent; border:1px solid var(--divider-color); border-radius:var(--uc-r-8, 8px); cursor:pointer;
          appearance:none; -webkit-appearance:none; outline:none; transition:border-color .2s, box-shadow .2s; }
        .sel-dd-${w}:focus { border-color:${m}; box-shadow:0 0 0 1px ${m}; }
        .sel-dd-arrow { position:absolute; right:12px; top:50%; transform:translateY(-50%); pointer-events:none;
          color:var(--secondary-text-color); --mdc-icon-size:20px; }
        .sel-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:6px; padding-left:2px; }
      </style>
      <div class="${$}" style="${f}">
        ${x?o.qy`<div class="sel-label">${c.label}</div>`:""}
        <div class="sel-dd-wrap-${w}">
          <select class="sel-dd-${w}" .value=${_} @change=${e=>k(e.target.value)}>
            ${g.map(e=>o.qy`<option value=${e} ?selected=${e===_}>${e}</option>`)}
          </select>
          <span class="sel-dd-arrow"><ha-icon icon="mdi:chevron-down"></ha-icon></span>
        </div>
      </div>
    `,e,t)}_buildContainerStyles(e){return{width:"100%",height:"auto",padding:e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:"0",margin:e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:"0",background:e.background_color||"transparent","border-radius":e.border_radius||"0",border:e.border_style&&"none"!==e.border_style?`${e.border_width||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}:${t}`).join(";")}}},28(e,t,i){i.d(t,{UltraSliderInputModule:()=>s});var o=i(2618),r=i(6478),n=i(7475),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this._localValues=new Map,this._localValueTimers=new Map,this._draggingIds=new Set,this.metadata={type:"slider_input",title:"Slider Input",description:"Range slider linked to input_number helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:tune-variant",category:"input",tags:["slider","range","number","input","form","helper","interactive"]}}createDefault(e,t){return{id:e||this.generateId("slider_input"),type:"slider_input",show_label:!0,label:"",show_value:!0,show_min_max:!1,show_unit:!0,slider_height:8,slider_color:"var(--primary-color)",track_color:"var(--divider-color)",thumb_size:20,font_size:14,text_color:"var(--primary-text-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderGeneralTab(e,t,i,n){var l,a,s,d;const c=e,p=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.slider_input.entity.title",p,"Entity Configuration"),(0,r.kg)("editor.slider_input.entity.desc",p,"Link to a Home Assistant Input Number helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",c.entity||"",e=>{n({entity:e}),this.triggerPreviewUpdate()},["input_number","number"],(0,r.kg)("editor.slider_input.entity_field",p,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.slider_input.display.title",p,"Display")}</div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
            ${(0,r.kg)("editor.slider_input.display.desc",p,"Configure what information to show with the slider.")}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.slider_input.label",p,"Label"),(0,r.kg)("editor.slider_input.label_desc",p,"Label displayed above the slider"),t,{label:c.label||""},[{name:"label",selector:{text:{}}}],e=>n(e.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.slider_input.show_label",p,"Show Label"),(0,r.kg)("editor.slider_input.show_label_desc",p,"Display the label"),t,{show_label:!1!==c.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.slider_input.show_value",p,"Show Value"),(0,r.kg)("editor.slider_input.show_value_desc",p,"Display the current numeric value"),t,{show_value:!1!==c.show_value},[{name:"show_value",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.slider_input.show_min_max",p,"Show Min/Max"),(0,r.kg)("editor.slider_input.show_min_max_desc",p,"Display min and max values at the ends"),t,{show_min_max:!0===c.show_min_max},[{name:"show_min_max",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.slider_input.show_unit",p,"Show Unit"),(0,r.kg)("editor.slider_input.show_unit_desc",p,"Display the unit of measurement"),t,{show_unit:!1!==c.show_unit},[{name:"show_unit",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.slider_input.styling.title",p,"Styling")}</div>

          ${this.renderSliderField((0,r.kg)("editor.slider_input.slider_height",p,"Track Height"),(0,r.kg)("editor.slider_input.slider_height_desc",p,"Height of the slider track in pixels"),null!==(a=c.slider_height)&&void 0!==a?a:8,8,2,24,1,e=>{n({slider_height:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}

          ${this.renderSliderField((0,r.kg)("editor.slider_input.thumb_size",p,"Thumb Size"),(0,r.kg)("editor.slider_input.thumb_size_desc",p,"Size of the slider thumb in pixels"),null!==(s=c.thumb_size)&&void 0!==s?s:20,20,12,36,1,e=>{n({thumb_size:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}

          ${this.renderSliderField((0,r.kg)("editor.slider_input.font_size",p,"Font Size"),(0,r.kg)("editor.slider_input.font_size_desc",p,"Font size of labels and value"),null!==(d=c.font_size)&&void 0!==d?d:14,14,10,28,1,e=>n({font_size:e}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.slider_input.slider_color",p,"Slider Color")}
              .value=${c.slider_color||"var(--primary-color)"}
              @color-changed=${e=>{n({slider_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.slider_input.track_color",p,"Track Color")}
              .value=${c.track_color||"var(--divider-color)"}
              @color-changed=${e=>{n({track_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.slider_input.text_color",p,"Text Color")}
              .value=${c.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>n({text_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return l.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return a.X.render(e,t,e=>o(e))}getStyles(){return`${n.m.getSliderStyles()}`}renderPreview(e,t,i,n){var l,a,s,d,c,p,u,g,_,b,h,v,m;const y=e,x=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";if(!(null===(a=y.entity)||void 0===a?void 0:a.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",x,"Configure Entity"),(0,r.kg)("editor.slider_input.error_configure_entity_desc",x,"Select an Input Number entity in the General tab"),"mdi:tune-variant");const $=null===(s=null==t?void 0:t.states)||void 0===s?void 0:s[y.entity];if(!$)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",x,"Entity Not Found"),`Entity "${y.entity}" is not available`,"mdi:alert-circle-outline");const f=this._localValues.get(y.id),w=void 0!==f?f:parseFloat($.state)||0,k=null!==(c=null===(d=$.attributes)||void 0===d?void 0:d.min)&&void 0!==c?c:0,S=null!==(u=null===(p=$.attributes)||void 0===p?void 0:p.max)&&void 0!==u?u:100,T=null!==(_=null===(g=$.attributes)||void 0===g?void 0:g.step)&&void 0!==_?_:1,z=(null===(b=$.attributes)||void 0===b?void 0:b.unit_of_measurement)||"",C=y.design||{},F=null!==(h=y.font_size)&&void 0!==h?h:14,E=y.text_color||"var(--primary-text-color)",D=y.slider_color||"var(--primary-color)",P=y.track_color||"var(--divider-color)",U=null!==(v=y.slider_height)&&void 0!==v?v:8,A=null!==(m=y.thumb_size)&&void 0!==m?m:20,I=!1!==y.show_label&&!!y.label,O=!1!==y.show_value,q=!0===y.show_min_max,j=!1!==y.show_unit&&!!z,V=S>k?(w-k)/(S-k)*100:0,L=(this.buildContainerStyles(C),this.getHoverEffectClass(e)),M=this.buildStyleString(this.buildDesignStyles(e,t)),G=y.id,W=Number.isInteger(T)?w.toFixed(0):w.toFixed(1),N=y.id;return this.wrapWithAnimation(o.qy`
      <style>
        .si-container-${N} { width: 100%; }
        .si-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
        .si-label { font-size: ${F}px; font-weight: 500; color: ${E}; }
        .si-value { font-size: ${F}px; font-weight: 600; color: ${E}; }
        .si-track-wrap { position: relative; width: 100%; height: ${Math.max(A,U+8)}px;
          display: flex; align-items: center; }
        .si-range-${N} {
          -webkit-appearance: none; appearance: none; width: 100%; height: ${U}px;
          background: linear-gradient(to right, ${D} ${V}%, ${P} ${V}%);
          border-radius: ${U/2}px; outline: none; cursor: pointer; margin: 0;
        }
        .si-range-${N}::-webkit-slider-thumb {
          -webkit-appearance: none; width: ${A}px; height: ${A}px;
          border-radius: 50%; background: ${D}; cursor: pointer;
          box-shadow: 0 1px 4px rgba(0,0,0,.3); border: 2px solid white;
          transition: transform .15s ease;
        }
        .si-range-${N}::-webkit-slider-thumb:hover { transform: scale(1.15); }
        .si-range-${N}::-moz-range-thumb {
          width: ${A}px; height: ${A}px; border-radius: 50%;
          background: ${D}; cursor: pointer; border: 2px solid white;
          box-shadow: 0 1px 4px rgba(0,0,0,.3);
        }
        .si-range-${N}::-moz-range-track {
          height: ${U}px; background: ${P};
          border-radius: ${U/2}px; border: none;
        }
        .si-range-${N}::-moz-range-progress {
          height: ${U}px; background: ${D};
          border-radius: ${U/2}px;
        }
        .si-minmax { display: flex; justify-content: space-between; margin-top: 4px;
          font-size: ${Math.max(10,F-2)}px; color: var(--secondary-text-color); opacity: .7; }
      </style>
      <div class="si-container-${N} ${L}" style="${M}">
        ${I||O?o.qy`
          <div class="si-header">
            ${I?o.qy`<span class="si-label">${y.label}</span>`:o.qy`<span></span>`}
            ${O?o.qy`<span class="si-value">${W}${j?` ${z}`:""}</span>`:""}
          </div>
        `:""}
        <div class="si-track-wrap">
          <input class="si-range-${N}" type="range"
            min=${k} max=${S} step=${T} .value=${String(w)}
            @input=${e=>{const t=e.target,i=parseFloat(t.value);isNaN(i)||(this._localValues.set(G,i),this._draggingIds.add(G))}} @change=${e=>{const i=e.target,o=parseFloat(i.value);if(isNaN(o))return;this._draggingIds.delete(G),this._localValues.set(G,o);const r=this._localValueTimers.get(G);r&&clearTimeout(r),this.callEntityService(y.entity,o,t),this._localValueTimers.set(G,setTimeout(()=>{this._localValues.delete(G)},1e3))}} />
        </div>
        ${q?o.qy`
          <div class="si-minmax">
            <span>${k}${j?` ${z}`:""}</span>
            <span>${S}${j?` ${z}`:""}</span>
          </div>
        `:""}
      </div>
    `,e,t)}async callEntityService(e,t,i){if(!e||!i)return;const o=e.split(".")[0];try{await i.callService(o,"set_value",{entity_id:e,value:t})}catch(t){console.error(`[SliderInput] Failed to set value for ${e}:`,t)}}buildContainerStyles(e){return{width:"100%",height:"auto",padding:e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${e.padding_top||"0px"} ${e.padding_right||"0px"} ${e.padding_bottom||"0px"} ${e.padding_left||"0px"}`:"4px 0",margin:e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${e.margin_top||"0px"} ${e.margin_right||"0px"} ${e.margin_bottom||"0px"} ${e.margin_left||"0px"}`:"0",background:e.background_color||"transparent","border-radius":e.border_radius||"0",border:e.border_style&&"none"!==e.border_style?`${e.border_width||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}styleObjectToCss(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${t}`).join("; ")}}},9362(e,t,i){i.d(t,{UltraTextInputModule:()=>s});var o=i(2618),r=i(6478),n=i(7475),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this._debounceTimers=new Map,this._localValues=new Map,this._localValueTimers=new Map,this.metadata={type:"text_input",title:"Text Input",description:"Text input field linked to input_text helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:form-textbox",category:"input",tags:["text","input","form","helper","interactive"]}}createDefault(e,t){return{id:e||this.generateId("text_input"),type:"text_input",placeholder:"Enter text...",input_appearance:"outlined",show_clear_button:!0,show_character_count:!1,show_label:!0,label:"",font_size:16,text_color:"var(--primary-text-color)",focus_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getAppearanceOptions(e){return[{value:"outlined",label:(0,r.kg)("editor.text_input.appearance_options.outlined",e,"Outlined")},{value:"filled",label:(0,r.kg)("editor.text_input.appearance_options.filled",e,"Filled")},{value:"underlined",label:(0,r.kg)("editor.text_input.appearance_options.underlined",e,"Underlined")}]}renderGeneralTab(e,t,i,n){var l,a,s,d;const c=e,p=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";return c.entity&&(null===(a=null==t?void 0:t.states)||void 0===a||a[c.entity]),o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Entity Configuration -->
        ${this.renderSettingsSection((0,r.kg)("editor.text_input.entity.title",p,"Entity Configuration"),(0,r.kg)("editor.text_input.entity.desc",p,"Link to a Home Assistant Input Text helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(t,i,"entity",c.entity||"",e=>{n({entity:e}),this.triggerPreviewUpdate()},["input_text"],(0,r.kg)("editor.text_input.entity_field",p,"Entity"))}
        </div>

        <!-- Appearance Configuration -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.text_input.appearance.title",p,"Appearance")}
          </div>
          <div
            class="section-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,r.kg)("editor.text_input.appearance.desc",p,"Configure how the text input field looks.")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,r.kg)("editor.text_input.input_appearance",p,"Input Style"),(0,r.kg)("editor.text_input.input_appearance_desc",p,"Visual style of the input field"),t,{input_appearance:c.input_appearance||"outlined"},[this.selectField("input_appearance",this.getAppearanceOptions(p))],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.text_input.placeholder",p,"Placeholder"),(0,r.kg)("editor.text_input.placeholder_desc",p,"Placeholder text shown when the field is empty"),t,{placeholder:c.placeholder||""},[{name:"placeholder",selector:{text:{}}}],e=>n(e.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.label",p,"Label"),(0,r.kg)("editor.text_input.label_desc",p,"Label displayed above the input field"),t,{label:c.label||""},[{name:"label",selector:{text:{}}}],e=>n(e.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.show_label",p,"Show Label"),(0,r.kg)("editor.text_input.show_label_desc",p,"Display the label above the input"),t,{show_label:!1!==c.show_label},[{name:"show_label",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.multiline",p,"Multiline"),(0,r.kg)("editor.text_input.multiline_desc",p,"Allow multiple lines of text (textarea)"),t,{multiline:!0===c.multiline},[{name:"multiline",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${c.multiline?this.renderSliderField((0,r.kg)("editor.text_input.rows",p,"Rows"),(0,r.kg)("editor.text_input.rows_desc",p,"Number of visible text rows"),null!==(s=c.rows)&&void 0!==s?s:4,4,2,12,1,e=>{n({rows:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}
        </div>

        <!-- Icons & Controls -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.text_input.controls.title",p,"Icons & Controls")}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.text_input.prefix_icon",p,"Prefix Icon"),(0,r.kg)("editor.text_input.prefix_icon_desc",p,"Icon displayed at the start of the input field"),t,{prefix_icon:c.prefix_icon||""},[{name:"prefix_icon",selector:{icon:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.suffix_icon",p,"Suffix Icon"),(0,r.kg)("editor.text_input.suffix_icon_desc",p,"Icon displayed at the end of the input field"),t,{suffix_icon:c.suffix_icon||""},[{name:"suffix_icon",selector:{icon:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.show_clear_button",p,"Show Clear Button"),(0,r.kg)("editor.text_input.show_clear_button_desc",p,"Show a button to clear the input field"),t,{show_clear_button:!1!==c.show_clear_button},[{name:"show_clear_button",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.show_character_count",p,"Show Character Count"),(0,r.kg)("editor.text_input.show_character_count_desc",p,"Display a character counter below the input"),t,{show_character_count:!0===c.show_character_count},[{name:"show_character_count",selector:{boolean:{}}}],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <!-- Styling -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.text_input.styling.title",p,"Styling")}
          </div>

          ${this.renderSliderField((0,r.kg)("editor.text_input.font_size",p,"Font Size"),(0,r.kg)("editor.text_input.font_size_desc",p,"Font size of the input text in pixels"),null!==(d=c.font_size)&&void 0!==d?d:16,16,10,32,1,e=>n({font_size:e}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.text_input.text_color",p,"Text Color")}
              .value=${c.text_color||"var(--primary-text-color)"}
              @color-changed=${e=>{n({text_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.text_input.focus_color",p,"Focus/Accent Color")}
              .value=${c.focus_color||"var(--primary-color)"}
              @color-changed=${e=>{n({focus_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(e,t,i,o){return l.A.render(e,t,e=>o(e))}renderOtherTab(e,t,i,o){return a.X.render(e,t,e=>o(e))}getStyles(){return`\n      ${n.m.getSliderStyles()}\n    `}renderPreview(e,t,i,n){var l,a,s,d,c,p;const u=e,g=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";if(!u.entity||!u.entity.trim())return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",g,"Configure Entity"),(0,r.kg)("editor.text_input.error_configure_entity_desc",g,"Select an Input Text entity in the General tab"),"mdi:form-textbox");const _=null===(a=null==t?void 0:t.states)||void 0===a?void 0:a[u.entity];if(!_)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",g,"Entity Not Found"),`Entity "${u.entity}" is not available`,"mdi:alert-circle-outline");const b=this._localValues.get(u.id),h=void 0!==b?b:_.state||"",v=null===(s=_.attributes)||void 0===s?void 0:s.max,m=(null===(d=_.attributes)||void 0===d?void 0:d.mode)||"text",y=u.design||{},x=u.input_appearance||"outlined",$=null!==(c=u.font_size)&&void 0!==c?c:16,f=u.text_color||"var(--primary-text-color)",w=u.focus_color||"var(--primary-color)",k=u.placeholder||"",S=!1!==u.show_clear_button,T=!0===u.show_character_count,z=!1!==u.show_label&&!!u.label,C=u.label||"",F=((y.padding_top||y.padding_bottom||y.padding_left||y.padding_right)&&(y.padding_top,y.padding_right,y.padding_bottom,y.padding_left),(y.margin_top||y.margin_bottom||y.margin_left||y.margin_right)&&(y.margin_top,y.margin_right,y.margin_bottom,y.margin_left),y.background_color,this.getBackgroundImageCss(Object.assign(Object.assign({},u),y),t),y.border_radius,y.border_style&&"none"!==y.border_style&&(y.border_width,y.border_style,y.border_color),(y.box_shadow_h||y.box_shadow_v||y.box_shadow_blur||y.box_shadow_spread)&&(y.box_shadow_h,y.box_shadow_v,y.box_shadow_blur,y.box_shadow_spread,y.box_shadow_color),y.hover_effect,this.getHoverEffectClass(e)),E=this.buildStyleString(this.buildDesignStyles(e,t)),D=!0===u.multiline,P=null!==(p=u.rows)&&void 0!==p?p:4,U="password"===m?"password":"text",A=u.id,I=()=>{const e=this._localValueTimers.get(A);e&&clearTimeout(e);const t=this._debounceTimers.get(A);t&&clearTimeout(t)},O=e=>{const i=e.target.value;this._localValues.set(A,i),I(),this._debounceTimers.set(A,setTimeout(()=>{this.setEntityValue(u.entity,i,t),this._localValueTimers.set(A,setTimeout(()=>{this._localValues.delete(A)},1e3))},300))};let q="",j="",V="";switch(x){case"filled":j="var(--input-fill-color, rgba(var(--rgb-primary-text-color, 0,0,0), 0.05))",q="none",V="border-bottom: 2px solid var(--divider-color);";break;case"underlined":j="transparent",q="none",V="border-bottom: 2px solid var(--divider-color); border-radius: 0 !important;";break;default:j="transparent",q="1px solid var(--divider-color)",V=""}const L=u.id;return this.wrapWithAnimation(o.qy`
      <style>
        .text-input-wrapper-${L} {
          position: relative;
          display: flex;
          align-items: ${D?"flex-start":"center"};
          background: ${j};
          border: ${q};
          border-radius: var(--uc-r-8, 8px);
          ${V}
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }
        .text-input-wrapper-${L}:focus-within {
          border-color: ${w};
          ${"outlined"===x?`box-shadow: 0 0 0 1px ${w};`:""}
          ${"underlined"===x||"filled"===x?`border-bottom-color: ${w};`:""}
        }
        .text-input-field-${L} {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          padding: 12px;
          font-size: ${$}px;
          color: ${f};
          font-family: inherit;
          min-width: 0;
        }
        .text-input-field-${L}::placeholder {
          color: var(--secondary-text-color);
          opacity: 0.6;
        }
        textarea.text-input-field-${L} {
          resize: vertical;
          line-height: 1.5;
        }
        .text-input-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 8px;
          color: var(--secondary-text-color);
          flex-shrink: 0;
          --mdc-icon-size: 20px;
        }
        .text-input-clear-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 8px;
          cursor: pointer;
          color: var(--secondary-text-color);
          opacity: 0.6;
          transition: opacity 0.2s ease;
          flex-shrink: 0;
          background: none;
          border: none;
          --mdc-icon-size: 18px;
        }
        .text-input-clear-btn:hover {
          opacity: 1;
        }
        .text-input-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--secondary-text-color);
          margin-bottom: 6px;
          padding-left: 2px;
        }
        .text-input-char-count {
          font-size: 11px;
          color: var(--secondary-text-color);
          margin-top: 4px;
          text-align: right;
          padding-right: 4px;
          opacity: 0.7;
        }
      </style>
      <div
        class="text-input-module-container ${F}"
        style="${E}"
      >
        ${z?o.qy`<div class="text-input-label">${C}</div>`:""}
        <div class="text-input-wrapper-${L}">
          ${u.prefix_icon?o.qy`<div class="text-input-icon" style="${D?"padding-top: 12px;":""}">
                <ha-icon icon="${u.prefix_icon}"></ha-icon>
              </div>`:""}
          ${D?o.qy`<textarea
                class="text-input-field-${L}"
                rows=${P}
                .value=${h}
                placeholder="${k}"
                @input=${O}
              ></textarea>`:o.qy`<input
                class="text-input-field-${L}"
                type="${U}"
                .value=${h}
                placeholder="${k}"
                @input=${O}
              />`}
          ${S&&h?o.qy`<button class="text-input-clear-btn" style="${D?"padding-top: 10px; align-self: flex-start;":""}" @click=${e=>{e.stopPropagation(),I(),this._debounceTimers.delete(A),this._localValues.set(A,""),this.setEntityValue(u.entity,"",t),this._localValueTimers.set(A,setTimeout(()=>{this._localValues.delete(A)},1e3))}}>
                <ha-icon icon="mdi:close-circle"></ha-icon>
              </button>`:""}
          ${u.suffix_icon?o.qy`<div class="text-input-icon" style="${D?"padding-top: 12px;":""}">
                <ha-icon icon="${u.suffix_icon}"></ha-icon>
              </div>`:""}
        </div>
        ${T?o.qy`<div class="text-input-char-count">
              ${h.length}${v?` / ${v}`:""}
            </div>`:""}
      </div>
    `,e,t)}async setEntityValue(e,t,i){if(e&&i)try{await i.callService("input_text","set_value",{entity_id:e,value:t})}catch(t){console.error(`[TextInput] Failed to set value for ${e}:`,t)}}styleObjectToCss(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${t}`).join("; ")}}},5646(e,t,i){i.d(t,{Hv:()=>n,eJ:()=>l,oV:()=>a});var o=i(6831);const r={filled:"flat",outlined:"outline",text:"minimal"};function n(e){var t;return e&&"theme"!==e?null!==(t=r[e])&&void 0!==t?t:e:"flat"}function l(e){return"minimal"===n(e)||"text"===e}function a(e,t){return Object.entries(function(e,t){const i=n(e),r={background:t.background,hasCustomTextColor:t.hasCustomTextColor,blur:t.blur},a=(0,o.bT)(i,r);return l(e)?Object.assign(Object.assign({},a),{background:"transparent",border:"none",boxShadow:"none",color:t.textColor||t.background}):!t.textColor||"flat"!==i&&"filled"!==e?a:Object.assign(Object.assign({},a),{color:t.textColor})}(e,t)).map(([e,t])=>`${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}: ${t}`).join("; ")}}};