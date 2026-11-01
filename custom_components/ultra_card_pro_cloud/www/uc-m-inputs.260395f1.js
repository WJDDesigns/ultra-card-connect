export const __webpack_esm_ids__=[3102];export const __webpack_esm_modules__={8927(t,e,i){i.d(e,{UltraBooleanInputModule:()=>s});var o=i(2618),r=i(6478),n=i(3307),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this.metadata={type:"boolean_input",title:"Boolean Input",description:"Toggle switch linked to input_boolean and switch entities",author:"WJD Designs",version:"1.0.0",icon:"mdi:toggle-switch-outline",category:"input",tags:["boolean","toggle","switch","input","form","helper","interactive"]}}createDefault(t,e){return{id:t||this.generateId("boolean_input"),type:"boolean_input",toggle_style:"switch",content_alignment:"none",show_label:!0,label:"",show_entity_name:!1,show_state_text:!0,on_text:"",off_text:"",font_size:14,text_color:"var(--primary-text-color)",on_color:"var(--primary-color)",off_color:"var(--disabled-color, #bdbdbd)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getToggleStyleOptions(t){return[{value:"switch",label:(0,r.kg)("editor.boolean_input.style_options.switch",t,"Switch")},{value:"checkbox",label:(0,r.kg)("editor.boolean_input.style_options.checkbox",t,"Checkbox")},{value:"pill",label:(0,r.kg)("editor.boolean_input.style_options.pill",t,"Pill Toggle")}]}getAlignmentOptions(t){return[{value:"none",label:(0,r.kg)("editor.common.none",t,"None")},{value:"left",label:(0,r.kg)("editor.common.left",t,"Left")},{value:"center",label:(0,r.kg)("editor.common.center",t,"Center")},{value:"right",label:(0,r.kg)("editor.common.right",t,"Right")}]}renderGeneralTab(t,e,i,n){var l,a;const s=t,d=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.boolean_input.entity.title",d,"Entity Configuration"),(0,r.kg)("editor.boolean_input.entity.desc",d,"Link to a Home Assistant Input Boolean or switch entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",s.entity||"",t=>{n({entity:t}),this.triggerPreviewUpdate()},["input_boolean","switch"],(0,r.kg)("editor.boolean_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.boolean_input.appearance.title",d,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.boolean_input.appearance.desc",d,"Configure the toggle style and labels.")}
          </div>

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.boolean_input.toggle_style",d,"Toggle Style"),(0,r.kg)("editor.boolean_input.toggle_style_desc",d,"Visual style of the toggle"),e,{toggle_style:s.toggle_style||"switch"},[this.selectField("toggle_style",this.getToggleStyleOptions(d))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
          ${this.renderFieldSection((0,r.kg)("editor.boolean_input.content_alignment",d,"Alignment"),(0,r.kg)("editor.boolean_input.content_alignment_desc",d,"Align the control row inside the module"),e,{content_alignment:s.content_alignment||"none"},[this.selectField("content_alignment",this.getAlignmentOptions(d))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.boolean_input.label",d,"Label"),(0,r.kg)("editor.boolean_input.label_desc",d,"Label displayed beside the toggle"),e,{label:s.label||""},[{name:"label",selector:{text:{}}}],t=>n(t.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.boolean_input.show_label",d,"Show Label"),(0,r.kg)("editor.boolean_input.show_label_desc",d,"Display the label"),e,{show_label:!1!==s.show_label},[{name:"show_label",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${"pill"!==(s.toggle_style||"switch")?this.renderFieldSection((0,r.kg)("editor.boolean_input.show_entity_name",d,"Show Entity Name"),(0,r.kg)("editor.boolean_input.show_entity_name_desc",d,"Display the entity name beside the control (switch/checkbox)"),e,{show_entity_name:!0===s.show_entity_name},[{name:"show_entity_name",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}
          ${this.renderFieldSection((0,r.kg)("editor.boolean_input.show_state_text",d,"Show State Text"),(0,r.kg)("editor.boolean_input.show_state_text_desc",d,"Display On/Off text beside the toggle"),e,{show_state_text:!1!==s.show_state_text},[{name:"show_state_text",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${!1!==s.show_state_text?o.qy`
            ${this.renderFieldSection((0,r.kg)("editor.boolean_input.on_text",d,"On Text"),(0,r.kg)("editor.boolean_input.on_text_desc",d,"Custom text for the On state (default: On)"),e,{on_text:s.on_text||""},[{name:"on_text",selector:{text:{}}}],t=>n(t.detail.value))}
            ${this.renderFieldSection((0,r.kg)("editor.boolean_input.off_text",d,"Off Text"),(0,r.kg)("editor.boolean_input.off_text_desc",d,"Custom text for the Off state (default: Off)"),e,{off_text:s.off_text||""},[{name:"off_text",selector:{text:{}}}],t=>n(t.detail.value))}
          `:""}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.boolean_input.styling.title",d,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.boolean_input.font_size",d,"Font Size"),(0,r.kg)("editor.boolean_input.font_size_desc",d,"Font size in pixels"),null!==(a=s.font_size)&&void 0!==a?a:14,14,10,24,1,t=>n({font_size:t}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.boolean_input.on_color",d,"On Color")}
              .value=${s.on_color||"var(--primary-color)"}
              @color-changed=${t=>{n({on_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.boolean_input.off_color",d,"Off Color")}
              .value=${s.off_color||"var(--disabled-color, #bdbdbd)"}
              @color-changed=${t=>{n({off_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.boolean_input.text_color",d,"Text Color")}
              .value=${s.text_color||"var(--primary-text-color)"}
              @color-changed=${t=>{n({text_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return a.X.render(t,e,t=>o(t))}getStyles(){return n.m.getSliderStyles()}renderPreview(t,e,i){var n,l,a,s,d,c;const p=t,u=(null===(n=null==e?void 0:e.locale)||void 0===n?void 0:n.language)||"en";if(!(null===(l=p.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",u,"Configure Entity"),(0,r.kg)("editor.boolean_input.error_configure_entity_desc",u,"Select an Input Boolean entity in the General tab"),"mdi:toggle-switch-outline");const g=null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[p.entity];if(!g)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",u,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const _="on"===g.state,b=p.design||{},h=null!==(s=p.font_size)&&void 0!==s?s:14,v=p.text_color||"var(--primary-text-color)",m=p.text_color||"var(--secondary-text-color)",y=p.on_color||"var(--primary-color)",x=p.off_color||"var(--disabled-color, #bdbdbd)",$=p.toggle_style||"switch",f=p.content_alignment||"none",w=!1!==p.show_label&&!!p.label,k=!0===p.show_entity_name,S=!1!==p.show_state_text,T=p.on_text||"On",z=p.off_text||"Off",F="none"===f?"":`justify-content:${"center"===f?"center":"right"===f?"flex-end":"flex-start"};width:100%;`,C="center"===f?"text-align:center;":"right"===f?"text-align:right;":"",E=(this._buildContainerStyles(b),this.getHoverEffectClass(t)),D=this.buildStyleString(this.buildDesignStyles(t,e)),P=p.id,U=()=>{if(!p.entity||!e)return;const t=p.entity.split(".")[0];e.callService(t,"toggle",{entity_id:p.entity})},I=_?y:x;return"checkbox"===$?this.wrapWithAnimation(o.qy`
        <style>
          .bool-cb-row-${P} { display:flex; align-items:center; gap:12px; cursor:pointer; }
          .bool-cb-box-${P} { width:22px; height:22px; border-radius:var(--uc-r-4, 4px); border:2px solid ${I};
            display:flex; align-items:center; justify-content:center; transition:all .2s; flex-shrink:0;
            background:${_?I:"transparent"}; }
          .bool-cb-box-${P} ha-icon { --mdc-icon-size:16px; color:#fff; opacity:${_?"1":"0"}; transition:opacity .2s; }
          .bool-cb-name { font-size:${h}px; color:${v}; }
          .bool-state-text { font-size:${Math.max(11,h-2)}px; color:${m}; }
          .bool-top-label { font-size:12px; font-weight:500; color:${m}; margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${E}" style="${D}">
          ${w?o.qy`<div class="bool-top-label" style="${C}">${p.label}</div>`:""}
          <div class="bool-cb-row-${P}" style="${F}" @click=${U}>
            <div class="bool-cb-box-${P}"><ha-icon icon="mdi:check"></ha-icon></div>
            ${k?o.qy`<span class="bool-cb-name">${(null===(d=g.attributes)||void 0===d?void 0:d.friendly_name)||p.entity}</span>`:""}
            ${S?o.qy`<span class="bool-state-text">${_?T:z}</span>`:""}
          </div>
        </div>
      `,t,e):"pill"===$?this.wrapWithAnimation(o.qy`
        <style>
          .bool-pill-row-${P} { display:flex; align-items:center; gap:12px; }
          .bool-pill-${P} { display:flex; border-radius:var(--uc-r-20, 20px); overflow:hidden; border:1px solid var(--divider-color); }
          .bool-pill-btn-${P} { padding:8px 20px; border:none; cursor:pointer; font-size:${h}px;
            font-family:inherit; transition:all .2s; background:transparent; color:${v}; }
          .bool-pill-btn-${P}.active { background:${I}; color:#fff; font-weight:500; }
          .bool-pill-btn-${P}:not(.active):hover { background:rgba(var(--rgb-primary-text-color,0,0,0),.05); }
          .bool-pill-label { font-size:${h}px; color:${v}; flex:1; }
          .bool-top-label { font-size:12px; font-weight:500; color:${m}; margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${E}" style="${D}">
          ${w?o.qy`<div class="bool-top-label" style="${C}">${p.label}</div>`:""}
          <div class="bool-pill-row-${P}" style="${F}">
            <div class="bool-pill-${P}">
              <button class="bool-pill-btn-${P} ${_?"":"active"}" @click=${()=>{_&&U()}}>${z}</button>
              <button class="bool-pill-btn-${P} ${_?"active":""}" @click=${()=>{_||U()}}>${T}</button>
            </div>
          </div>
        </div>
      `,t,e):this.wrapWithAnimation(o.qy`
      <style>
        .bool-sw-row-${P} { display:flex; align-items:center; gap:12px; cursor:pointer; }
        .bool-sw-track-${P} { width:48px; height:26px; border-radius:var(--uc-r-13, 13px); position:relative;
          background:${I}; transition:background .3s; flex-shrink:0; }
        .bool-sw-thumb-${P} { width:22px; height:22px; border-radius:50%; background:#fff;
          position:absolute; top:2px; left:${_?"24px":"2px"}; transition:left .3s;
          box-shadow:0 1px 3px rgba(0,0,0,.3); }
        .bool-sw-name { font-size:${h}px; color:${v}; }
        .bool-state-text { font-size:${Math.max(11,h-2)}px; color:${m}; }
        .bool-top-label { font-size:12px; font-weight:500; color:${m}; margin-bottom:6px; padding-left:2px; }
      </style>
      <div class="${E}" style="${D}">
        ${w?o.qy`<div class="bool-top-label" style="${C}">${p.label}</div>`:""}
        <div class="bool-sw-row-${P}" style="${F}" @click=${U}>
          <div class="bool-sw-track-${P}"><div class="bool-sw-thumb-${P}"></div></div>
          ${k?o.qy`<span class="bool-sw-name">${(null===(c=g.attributes)||void 0===c?void 0:c.friendly_name)||p.entity}</span>`:""}
          ${S?o.qy`<span class="bool-state-text">${_?T:z}</span>`:""}
        </div>
      </div>
    `,t,e)}_buildContainerStyles(t){return{width:"100%",height:"auto",padding:t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:"0",margin:t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:"0",background:t.background_color||"transparent","border-radius":t.border_radius||"0",border:t.border_style&&"none"!==t.border_style?`${t.border_width||"1px"} ${t.border_style} ${t.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(t){return Object.entries(t).map(([t,e])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}:${e}`).join(";")}}},719(t,e,i){i.d(e,{UltraButtonInputModule:()=>p});var o=i(2618),r=i(6478),n=i(3307),l=i(5147),a=i(8938),s=i(4830),d=i(6831),c=i(5646);i(7921);class p extends n.m{constructor(){super(...arguments),this._rippleTimers=new Map,this.metadata={type:"button_input",title:"Button Input",description:"Press button linked to input_button helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:gesture-tap-button",category:"input",tags:["button","press","input","form","helper","interactive","trigger"]}}createDefault(t,e){return{id:t||this.generateId("button_input"),type:"button_input",button_label:"",button_icon:"",button_style:"theme",font_size:14,text_color:"#ffffff",button_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getButtonStyleOptions(t){return[...d.xz.map(t=>{return{value:t,label:(e=t,e.replace(/[-_]/g," ").replace(/\b\w/g,t=>t.toUpperCase()))};var e}),{value:"filled",label:(0,r.kg)("editor.button_input.style_options.filled",t,"Filled")},{value:"outlined",label:(0,r.kg)("editor.button_input.style_options.outlined",t,"Outlined")},{value:"text",label:(0,r.kg)("editor.button_input.style_options.text",t,"Text Only")}]}renderGeneralTab(t,e,i,n){var l,a;const s=t,d=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.button_input.entity.title",d,"Entity Configuration"),(0,r.kg)("editor.button_input.entity.desc",d,"Link to a Home Assistant Input Button helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",s.entity||"",t=>{n({entity:t}),this.triggerPreviewUpdate()},["input_button"],(0,r.kg)("editor.button_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.button_input.appearance.title",d,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.button_input.appearance.desc",d,"Configure the button label, icon, and style.")}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.button_input.button_label",d,"Button Label"),(0,r.kg)("editor.button_input.button_label_desc",d,"Text displayed on the button (uses entity name if empty)"),e,{button_label:s.button_label||""},[{name:"button_label",selector:{text:{}}}],t=>n(t.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.button_input.button_icon",d,"Icon"),(0,r.kg)("editor.button_input.button_icon_desc",d,"Icon displayed on the button"),e,{button_icon:s.button_icon||""},[{name:"button_icon",selector:{icon:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.button_input.button_style",d,"Button Style"),(0,r.kg)("editor.button_input.button_style_desc",d,"Visual style of the button. Theme inherits the card theme control recipe."),e,{button_style:s.button_style||"theme"},[this.selectField("button_style",this.withThemeInheritOption(d,i,"button_input","button_style","flat",this.getButtonStyleOptions(d)))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.button_input.styling.title",d,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.button_input.font_size",d,"Font Size"),(0,r.kg)("editor.button_input.font_size_desc",d,"Font size in pixels"),null!==(a=s.font_size)&&void 0!==a?a:14,14,10,24,1,t=>n({font_size:t}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.button_input.button_color",d,"Button Color")}
              .value=${s.button_color||"var(--primary-color)"}
              @color-changed=${t=>{n({button_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.button_input.text_color",d,"Text Color")}
              .value=${s.text_color||"#ffffff"}
              @color-changed=${t=>n({text_color:t.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return a.X.render(t,e,t=>o(t))}getStyles(){return n.m.getSliderStyles()}renderPreview(t,e,i){var n,l,a,p,u;const g=t,_=(null===(n=null==e?void 0:e.locale)||void 0===n?void 0:n.language)||"en";if(!(null===(l=g.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",_,"Configure Entity"),(0,r.kg)("editor.button_input.error_configure_entity_desc",_,"Select an Input Button entity in the General tab"),"mdi:gesture-tap-button");const b=null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[g.entity];if(!b)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",_,"Entity Not Found"),`Entity "${g.entity}" is not available`,"mdi:alert-circle-outline");g.design;const h=null!==(p=g.font_size)&&void 0!==p?p:14,v=g.text_color||"#ffffff",m=g.button_color||"var(--primary-color)",y=(0,s.NS)(i,"button_input","button_style",g.button_style,"flat"),x=(0,c.Hv)(y),$=g.button_label||(null===(u=b.attributes)||void 0===u?void 0:u.friendly_name)||"Press",f=g.button_icon||"",w=this.getHoverEffectClass(t),k=this.buildStyleString(this.buildDesignStyles(t,e)),S=g.id,T=(0,c.oV)(y,{background:m,textColor:v,hasCustomTextColor:!!g.text_color}),z=(0,d._0)(x,"control");return this.wrapWithAnimation(o.qy`
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
          @click=${t=>{g.entity&&e&&e.callService("input_button","press",{entity_id:g.entity});const i=t.currentTarget,o=i.getBoundingClientRect(),r=t,n=document.createElement("span");n.className="ripple";const l=Math.max(o.width,o.height);n.style.cssText=`width:${l}px;height:${l}px;left:${r.clientX-o.left-l/2}px;top:${r.clientY-o.top-l/2}px;`,i.appendChild(n);const a=setTimeout(()=>n.remove(),500);this._rippleTimers.set(S,a)}}>
          ${f?o.qy`<ha-icon icon="${f}"></ha-icon>`:""}
          <span>${$}</span>
        </button>
      </div>
    `,t,e)}_buildContainerStyles(t){return{width:"100%",height:"auto",padding:t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:"0",margin:t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:"0",background:t.background_color||"transparent","border-radius":t.border_radius||"0",border:t.border_style&&"none"!==t.border_style?`${t.border_width||"1px"} ${t.border_style} ${t.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(t){return Object.entries(t).map(([t,e])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}:${e}`).join(";")}}},6126(t,e,i){i.d(e,{UltraColorInputModule:()=>s});var o=i(2618),r=i(6478),n=i(3307),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this._debounceTimers=new Map,this.metadata={type:"color_input",title:"Color Input",description:"Color picker linked to input_text or light entities",author:"WJD Designs",version:"1.0.0",icon:"mdi:palette",category:"input",tags:["color","picker","input","form","helper","interactive","rgb","hex"]}}createDefault(t,e){return{id:t||this.generateId("color_input"),type:"color_input",color_mode:"hex",show_label:!0,label:"",show_hex_input:!0,show_preview:!0,preview_size:40,font_size:14,text_color:"var(--primary-text-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getColorModeOptions(t){return[{value:"hex",label:(0,r.kg)("editor.color_input.mode_options.hex",t,"Hex (Input Text)")},{value:"light_rgb",label:(0,r.kg)("editor.color_input.mode_options.light_rgb",t,"Light RGB Color")}]}renderGeneralTab(t,e,i,n){var l,a,s;const d=t,c=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en",p="light_rgb"===d.color_mode,u=p?["light"]:["input_text"];return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.color_input.mode.title",c,"Color Mode")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.color_input.mode.desc",c,"Choose how the color value is stored.")}
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.color_input.color_mode",c,"Color Mode"),(0,r.kg)("editor.color_input.color_mode_desc",c,"Hex stores to Input Text, Light RGB controls a light entity"),e,{color_mode:d.color_mode||"hex"},[this.selectField("color_mode",this.getColorModeOptions(c))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
        </div>

        ${this.renderSettingsSection((0,r.kg)("editor.color_input.entity.title",c,"Entity Configuration"),(0,r.kg)("editor.color_input.entity.desc",c,p?"Select a light entity to control.":"Select an Input Text entity to store the hex color."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",d.entity||"",t=>{n({entity:t}),this.triggerPreviewUpdate()},u,(0,r.kg)("editor.color_input.entity_field",c,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.color_input.display.title",c,"Display")}</div>

          ${this.renderFieldSection((0,r.kg)("editor.color_input.label",c,"Label"),(0,r.kg)("editor.color_input.label_desc",c,"Label above the color picker"),e,{label:d.label||""},[{name:"label",selector:{text:{}}}],t=>n(t.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.color_input.show_label",c,"Show Label"),(0,r.kg)("editor.color_input.show_label_desc",c,"Display the label"),e,{show_label:!1!==d.show_label},[{name:"show_label",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${this.renderFieldSection((0,r.kg)("editor.color_input.show_hex_input",c,"Show Hex Input"),(0,r.kg)("editor.color_input.show_hex_input_desc",c,"Display a text field with the hex value"),e,{show_hex_input:!1!==d.show_hex_input},[{name:"show_hex_input",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.color_input.styling.title",c,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.color_input.preview_size",c,"Preview Size"),(0,r.kg)("editor.color_input.preview_size_desc",c,"Size of the color preview swatch"),null!==(a=d.preview_size)&&void 0!==a?a:40,40,24,80,2,t=>{n({preview_size:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}
          ${this.renderSliderField((0,r.kg)("editor.color_input.font_size",c,"Font Size"),(0,r.kg)("editor.color_input.font_size_desc",c,"Font size in pixels"),null!==(s=d.font_size)&&void 0!==s?s:14,14,10,24,1,t=>n({font_size:t}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.color_input.text_color",c,"Text Color")}
              .value=${d.text_color||"var(--primary-text-color)"}
              @color-changed=${t=>n({text_color:t.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return a.X.render(t,e,t=>o(t))}getStyles(){return n.m.getSliderStyles()}renderPreview(t,e,i){var n,l,a,s,d,c;const p=t,u=(null===(n=null==e?void 0:e.locale)||void 0===n?void 0:n.language)||"en";if(!(null===(l=p.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",u,"Configure Entity"),(0,r.kg)("editor.color_input.error_configure_entity_desc",u,"Select an entity in the General tab"),"mdi:palette");const g=null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[p.entity];if(!g)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",u,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const _="light_rgb"===p.color_mode;let b;if(_){const t=null===(s=g.attributes)||void 0===s?void 0:s.rgb_color;b=t?`#${t.map(t=>t.toString(16).padStart(2,"0")).join("")}`:"#ffffff"}else{const t=g.state||"#000000";b=t.startsWith("#")?t:`#${t}`}const h=p.design||{},v=null!==(d=p.font_size)&&void 0!==d?d:14,m=p.text_color||"var(--primary-text-color)",y=!1!==p.show_label&&!!p.label,x=!1!==p.show_hex_input,$=(p.show_preview,null!==(c=p.preview_size)&&void 0!==c?c:40),f=(this._buildContainerStyles(h),this.getHoverEffectClass(t)),w=this.buildStyleString(this.buildDesignStyles(t,e)),k=p.id,S=t=>{const i=this._debounceTimers.get(k);i&&clearTimeout(i),this._debounceTimers.set(k,setTimeout(()=>{if(p.entity&&e)if(_){const i=parseInt(t.slice(1,3),16),o=parseInt(t.slice(3,5),16),r=parseInt(t.slice(5,7),16);e.callService("light","turn_on",{entity_id:p.entity,rgb_color:[i,o,r]})}else e.callService("input_text","set_value",{entity_id:p.entity,value:t})},150))};return this.wrapWithAnimation(o.qy`
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
            <input type="color" .value=${b} @input=${t=>{const e=t.target;S(e.value)}} />
          </div>
          ${x?o.qy`<input class="clr-hex-input-${k}" type="text" .value=${b}
            placeholder="#000000" @change=${t=>{let e=t.target.value.trim();e.startsWith("#")||(e=`#${e}`),/^#[0-9a-fA-F]{6}$/.test(e)&&S(e)}} />`:""}
        </div>
      </div>
    `,t,e)}_buildContainerStyles(t){return{width:"100%",height:"auto",padding:t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:"0",margin:t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:"0",background:t.background_color||"transparent","border-radius":t.border_radius||"0",border:t.border_style&&"none"!==t.border_style?`${t.border_width||"1px"} ${t.border_style} ${t.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(t){return Object.entries(t).map(([t,e])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}:${e}`).join(";")}}},9959(t,e,i){i.d(e,{UltraCounterInputModule:()=>s});var o=i(2618),r=i(6478),n=i(3307),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this.metadata={type:"counter_input",title:"Counter Input",description:"Counter with increment, decrement, and reset linked to counter helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:counter",category:"input",tags:["counter","increment","decrement","input","form","helper","interactive"]}}createDefault(t,e){return{id:t||this.generateId("counter_input"),type:"counter_input",show_label:!0,label:"",show_reset:!0,counter_style:"inline",font_size:24,text_color:"var(--primary-text-color)",button_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getCounterStyleOptions(t){return[{value:"inline",label:(0,r.kg)("editor.counter_input.style_options.inline",t,"Inline (- value +)")},{value:"stacked",label:(0,r.kg)("editor.counter_input.style_options.stacked",t,"Stacked (buttons below)")},{value:"compact",label:(0,r.kg)("editor.counter_input.style_options.compact",t,"Compact (small)")}]}renderGeneralTab(t,e,i,n){var l,a;const s=t,d=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.counter_input.entity.title",d,"Entity Configuration"),(0,r.kg)("editor.counter_input.entity.desc",d,"Link to a Home Assistant counter helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",s.entity||"",t=>{n({entity:t}),this.triggerPreviewUpdate()},["counter"],(0,r.kg)("editor.counter_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.counter_input.appearance.title",d,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.counter_input.appearance.desc",d,"Configure layout and display options.")}
          </div>

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.counter_input.counter_style",d,"Layout Style"),(0,r.kg)("editor.counter_input.counter_style_desc",d,"How the counter and buttons are arranged"),e,{counter_style:s.counter_style||"inline"},[this.selectField("counter_style",this.getCounterStyleOptions(d))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.counter_input.label",d,"Label"),(0,r.kg)("editor.counter_input.label_desc",d,"Label displayed above the counter"),e,{label:s.label||""},[{name:"label",selector:{text:{}}}],t=>n(t.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.counter_input.show_label",d,"Show Label"),(0,r.kg)("editor.counter_input.show_label_desc",d,"Display the label"),e,{show_label:!1!==s.show_label},[{name:"show_label",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${this.renderFieldSection((0,r.kg)("editor.counter_input.show_reset",d,"Show Reset Button"),(0,r.kg)("editor.counter_input.show_reset_desc",d,"Display a reset button"),e,{show_reset:!1!==s.show_reset},[{name:"show_reset",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.counter_input.styling.title",d,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.counter_input.font_size",d,"Value Font Size"),(0,r.kg)("editor.counter_input.font_size_desc",d,"Font size of the counter value"),null!==(a=s.font_size)&&void 0!==a?a:24,24,14,48,1,t=>n({font_size:t}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.counter_input.button_color",d,"Button Color")}
              .value=${s.button_color||"var(--primary-color)"}
              @color-changed=${t=>{n({button_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.counter_input.text_color",d,"Text Color")}
              .value=${s.text_color||"var(--primary-text-color)"}
              @color-changed=${t=>n({text_color:t.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return a.X.render(t,e,t=>o(t))}getStyles(){return n.m.getSliderStyles()}renderPreview(t,e,i){var n,l,a,s,d,c;const p=t,u=(null===(n=null==e?void 0:e.locale)||void 0===n?void 0:n.language)||"en";if(!(null===(l=p.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",u,"Configure Entity"),(0,r.kg)("editor.counter_input.error_configure_entity_desc",u,"Select a counter entity in the General tab"),"mdi:counter");const g=null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[p.entity];if(!g)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",u,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const _=parseInt(g.state,10)||0,b=null!==(d=null===(s=g.attributes)||void 0===s?void 0:s.step)&&void 0!==d?d:1,h=p.design||{},v=null!==(c=p.font_size)&&void 0!==c?c:24,m=p.text_color||"var(--primary-text-color)",y=p.button_color||"var(--primary-color)",x=p.counter_style||"inline",$=!1!==p.show_label&&!!p.label,f=!1!==p.show_reset,w=(this._buildContainerStyles(h),this.getHoverEffectClass(t)),k=this.buildStyleString(this.buildDesignStyles(t,e)),S=p.id,T=()=>{p.entity&&e&&e.callService("counter","increment",{entity_id:p.entity})},z=()=>{p.entity&&e&&e.callService("counter","decrement",{entity_id:p.entity})},F=()=>{p.entity&&e&&e.callService("counter","reset",{entity_id:p.entity})},C="compact"===x?32:44,E="compact"===x?18:22;return this.wrapWithAnimation(o.qy`
      <style>
        .cnt-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:8px; padding-left:2px; }
        .cnt-btn-${S} {
          display:flex; align-items:center; justify-content:center; width:${C}px; height:${C}px;
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
              ${f?o.qy`<button class="cnt-btn-${S} reset" @click=${F}><ha-icon icon="mdi:refresh"></ha-icon></button>`:""}
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
            ${f?o.qy`<button class="cnt-btn-${S} reset" @click=${F}><ha-icon icon="mdi:refresh"></ha-icon></button>`:""}
          </div>
        `}
      </div>
    `,t,e)}_buildContainerStyles(t){return{width:"100%",height:"auto",padding:t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:"4px 0",margin:t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:"0",background:t.background_color||"transparent","border-radius":t.border_radius||"0",border:t.border_style&&"none"!==t.border_style?`${t.border_width||"1px"} ${t.border_style} ${t.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(t){return Object.entries(t).map(([t,e])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}:${e}`).join(";")}}},1244(t,e,i){i.d(e,{UltraDatetimeInputModule:()=>s});var o=i(2618),r=i(6478),n=i(3307),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this.metadata={type:"datetime_input",title:"Date/Time Input",description:"Date and time picker linked to input_datetime helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:calendar-clock",category:"input",tags:["date","time","datetime","input","form","helper","interactive","calendar"]}}createDefault(t,e){return{id:t||this.generateId("datetime_input"),type:"datetime_input",display_mode_datetime:"auto",show_label:!0,label:"",font_size:16,text_color:"var(--primary-text-color)",focus_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getDisplayModeOptions(t){return[{value:"auto",label:(0,r.kg)("editor.datetime_input.display_mode_options.auto",t,"Auto (from entity)")},{value:"date",label:(0,r.kg)("editor.datetime_input.display_mode_options.date",t,"Date Only")},{value:"time",label:(0,r.kg)("editor.datetime_input.display_mode_options.time",t,"Time Only")},{value:"datetime",label:(0,r.kg)("editor.datetime_input.display_mode_options.datetime",t,"Date & Time")}]}resolveDisplayMode(t,e){var i,o;const r=t.display_mode_datetime||"auto";if("auto"===r&&e)return{showDate:!1!==(null===(i=e.attributes)||void 0===i?void 0:i.has_date),showTime:!1!==(null===(o=e.attributes)||void 0===o?void 0:o.has_time)};switch(r){case"date":return{showDate:!0,showTime:!1};case"time":return{showDate:!1,showTime:!0};default:return{showDate:!0,showTime:!0}}}renderGeneralTab(t,e,i,n){var l,a,s;const d=t,c=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";return d.entity&&(null===(a=null==e?void 0:e.states)||void 0===a||a[d.entity]),o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Entity Configuration -->
        ${this.renderSettingsSection((0,r.kg)("editor.datetime_input.entity.title",c,"Entity Configuration"),(0,r.kg)("editor.datetime_input.entity.desc",c,"Link to a Home Assistant Input Datetime helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",d.entity||"",t=>{n({entity:t}),this.triggerPreviewUpdate()},["input_datetime"],(0,r.kg)("editor.datetime_input.entity_field",c,"Entity"))}
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
            ${this.renderFieldSection((0,r.kg)("editor.datetime_input.display_mode_datetime",c,"Display Mode"),(0,r.kg)("editor.datetime_input.display_mode_datetime_desc",c,"Which pickers to show. Auto detects from the entity."),e,{display_mode_datetime:d.display_mode_datetime||"auto"},[this.selectField("display_mode_datetime",this.getDisplayModeOptions(c))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.datetime_input.label",c,"Label"),(0,r.kg)("editor.datetime_input.label_desc",c,"Label displayed above the picker fields"),e,{label:d.label||""},[{name:"label",selector:{text:{}}}],t=>n(t.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.datetime_input.show_label",c,"Show Label"),(0,r.kg)("editor.datetime_input.show_label_desc",c,"Display the label above the pickers"),e,{show_label:!1!==d.show_label},[{name:"show_label",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <!-- Styling -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.datetime_input.styling.title",c,"Styling")}
          </div>

          ${this.renderSliderField((0,r.kg)("editor.datetime_input.font_size",c,"Font Size"),(0,r.kg)("editor.datetime_input.font_size_desc",c,"Font size of the date/time inputs in pixels"),null!==(s=d.font_size)&&void 0!==s?s:16,16,10,32,1,t=>n({font_size:t}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.datetime_input.text_color",c,"Text Color")}
              .value=${d.text_color||"var(--primary-text-color)"}
              @color-changed=${t=>{n({text_color:t.detail.value})}}
            ></ultra-color-picker>
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.datetime_input.focus_color",c,"Focus/Accent Color")}
              .value=${d.focus_color||"var(--primary-color)"}
              @color-changed=${t=>{n({focus_color:t.detail.value})}}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return a.X.render(t,e,t=>o(t))}getStyles(){return`\n      ${n.m.getSliderStyles()}\n    `}renderPreview(t,e,i,n){var l,a,s,d,c;const p=t,u=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";if(!p.entity||!p.entity.trim())return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",u,"Configure Entity"),(0,r.kg)("editor.datetime_input.error_configure_entity_desc",u,"Select an Input Datetime entity in the General tab"),"mdi:calendar-clock");const g=null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[p.entity];if(!g)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",u,"Entity Not Found"),`Entity "${p.entity}" is not available`,"mdi:alert-circle-outline");const{showDate:_,showTime:b}=this.resolveDisplayMode(p,g),h=this.getDateValue(g),v=this.getTimeValue(g),m=p.design||{},y=null!==(s=p.font_size)&&void 0!==s?s:16,x=p.text_color||"var(--primary-text-color)",$=p.focus_color||"var(--primary-color)",f=!1!==p.show_label&&!!p.label,w=p.label||"",k=((m.padding_top||m.padding_bottom||m.padding_left||m.padding_right)&&(m.padding_top,m.padding_right,m.padding_bottom,m.padding_left),(m.margin_top||m.margin_bottom||m.margin_left||m.margin_right)&&(m.margin_top,m.margin_right,m.margin_bottom,m.margin_left),m.background_color,this.getBackgroundImageCss(Object.assign(Object.assign({},p),m),e),m.border_radius,m.border_style&&"none"!==m.border_style&&(m.border_width,m.border_style,m.border_color),(m.box_shadow_h||m.box_shadow_v||m.box_shadow_blur||m.box_shadow_spread)&&(m.box_shadow_h,m.box_shadow_v,m.box_shadow_blur,m.box_shadow_spread,m.box_shadow_color),m.hover_effect,this.getHoverEffectClass(t)),S=this.buildStyleString(this.buildDesignStyles(t,e)),T=t=>{const e=t.currentTarget.querySelector("input");if(e&&"function"==typeof e.showPicker)try{e.showPicker()}catch(t){}},z=p.id;return this.wrapWithAnimation(o.qy`
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
                  ${_&&b?o.qy`<span class="datetime-input-sublabel">${(0,r.kg)("editor.datetime_input.date_label",(null===(d=null==e?void 0:e.locale)||void 0===d?void 0:d.language)||"en","Date")}</span>`:""}
                  <div class="datetime-picker-field-${z}" @click=${T}>
                    <span class="datetime-picker-icon">
                      <ha-icon icon="mdi:calendar"></ha-icon>
                    </span>
                    <input
                      type="date"
                      .value=${h}
                      @change=${t=>{const i=t.target;i.value&&this.setEntityDatetime(p.entity,i.value,void 0,g,e)}}
                    />
                  </div>
                </div>
              `:""}
          ${b?o.qy`
                <div class="datetime-input-row">
                  ${_&&b?o.qy`<span class="datetime-input-sublabel">${(0,r.kg)("editor.datetime_input.time_label",(null===(c=null==e?void 0:e.locale)||void 0===c?void 0:c.language)||"en","Time")}</span>`:""}
                  <div class="datetime-picker-field-${z}" @click=${T}>
                    <span class="datetime-picker-icon">
                      <ha-icon icon="mdi:clock-outline"></ha-icon>
                    </span>
                    <input
                      type="time"
                      .value=${v}
                      @change=${t=>{const i=t.target;i.value&&this.setEntityDatetime(p.entity,void 0,i.value,g,e)}}
                    />
                  </div>
                </div>
              `:""}
        </div>
      </div>
    `,t,e)}getDateValue(t){if(!t)return"";const e=t.attributes;if((null==e?void 0:e.year)&&(null==e?void 0:e.month)&&(null==e?void 0:e.day))return`${String(e.year).padStart(4,"0")}-${String(e.month).padStart(2,"0")}-${String(e.day).padStart(2,"0")}`;const i=t.state;if(i&&i.includes("-")){const t=i.split(" ")[0]||i.split("T")[0]||i;if(/^\d{4}-\d{2}-\d{2}/.test(t))return t.substring(0,10)}return""}getTimeValue(t){if(!t)return"";const e=t.attributes;if(void 0!==(null==e?void 0:e.hour)&&void 0!==(null==e?void 0:e.minute))return`${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${void 0!==e.second?String(e.second).padStart(2,"0"):"00"}`;const i=t.state;if(i){const t=i.includes(" ")?i.split(" ")[1]:i.includes("T")?i.split("T")[1]:/^\d{2}:\d{2}/.test(i)?i:"";if(t&&/^\d{2}:\d{2}/.test(t))return t.substring(0,8)}return""}async setEntityDatetime(t,e,i,o,r){var n,l;if(!t||!r)return;const a=!1!==(null===(n=null==o?void 0:o.attributes)||void 0===n?void 0:n.has_date),s=!1!==(null===(l=null==o?void 0:o.attributes)||void 0===l?void 0:l.has_time),d={entity_id:t};if(a&&s){const t=e||this.getDateValue(o),r=i||this.getTimeValue(o);t&&r?d.datetime=`${t} ${r}`:t?d.date=t:r&&(d.time=r)}else if(a&&e)d.date=e;else{if(!s||!i)return;d.time=i}try{await r.callService("input_datetime","set_datetime",d)}catch(e){console.error(`[DatetimeInput] Failed to set datetime for ${t}:`,e)}}}},908(t,e,i){i.d(e,{UltraNumberInputModule:()=>s});var o=i(2618),r=i(6478),n=i(3307),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this._debounceTimers=new Map,this._localValues=new Map,this._localValueTimers=new Map,this.metadata={type:"number_input",title:"Number Input",description:"Number input field linked to input_number helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:numeric",category:"input",tags:["number","input","form","helper","interactive","stepper"]}}createDefault(t,e){return{id:t||this.generateId("number_input"),type:"number_input",input_appearance:"outlined",show_label:!0,label:"",show_stepper:!0,show_unit:!0,font_size:16,text_color:"var(--primary-text-color)",focus_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getAppearanceOptions(t){return[{value:"outlined",label:(0,r.kg)("editor.number_input.appearance_options.outlined",t,"Outlined")},{value:"filled",label:(0,r.kg)("editor.number_input.appearance_options.filled",t,"Filled")},{value:"underlined",label:(0,r.kg)("editor.number_input.appearance_options.underlined",t,"Underlined")}]}renderGeneralTab(t,e,i,n){var l,a;const s=t,d=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.number_input.entity.title",d,"Entity Configuration"),(0,r.kg)("editor.number_input.entity.desc",d,"Link to a Home Assistant Input Number helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",s.entity||"",t=>{n({entity:t}),this.triggerPreviewUpdate()},["input_number","number"],(0,r.kg)("editor.number_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.number_input.appearance.title",d,"Appearance")}
          </div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
            ${(0,r.kg)("editor.number_input.appearance.desc",d,"Configure how the number input field looks.")}
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,r.kg)("editor.number_input.input_appearance",d,"Input Style"),(0,r.kg)("editor.number_input.input_appearance_desc",d,"Visual style of the input field"),e,{input_appearance:s.input_appearance||"outlined"},[this.selectField("input_appearance",this.getAppearanceOptions(d))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.number_input.label",d,"Label"),(0,r.kg)("editor.number_input.label_desc",d,"Label displayed above the input field"),e,{label:s.label||""},[{name:"label",selector:{text:{}}}],t=>n(t.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.number_input.show_label",d,"Show Label"),(0,r.kg)("editor.number_input.show_label_desc",d,"Display the label above the input"),e,{show_label:!1!==s.show_label},[{name:"show_label",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.number_input.controls.title",d,"Controls")}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.number_input.show_stepper",d,"Show +/- Buttons"),(0,r.kg)("editor.number_input.show_stepper_desc",d,"Display increment/decrement stepper buttons"),e,{show_stepper:!1!==s.show_stepper},[{name:"show_stepper",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.number_input.show_unit",d,"Show Unit"),(0,r.kg)("editor.number_input.show_unit_desc",d,"Display the unit of measurement"),e,{show_unit:!1!==s.show_unit},[{name:"show_unit",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.number_input.styling.title",d,"Styling")}</div>

          ${this.renderSliderField((0,r.kg)("editor.number_input.font_size",d,"Font Size"),(0,r.kg)("editor.number_input.font_size_desc",d,"Font size of the input text in pixels"),null!==(a=s.font_size)&&void 0!==a?a:16,16,10,32,1,t=>n({font_size:t}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.number_input.text_color",d,"Text Color")}
              .value=${s.text_color||"var(--primary-text-color)"}
              @color-changed=${t=>n({text_color:t.detail.value})}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.number_input.focus_color",d,"Focus/Accent Color")}
              .value=${s.focus_color||"var(--primary-color)"}
              @color-changed=${t=>n({focus_color:t.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return a.X.render(t,e,t=>o(t))}getStyles(){return`${n.m.getSliderStyles()}`}renderPreview(t,e,i,n){var l,a,s,d,c,p,u,g,_,b,h;const v=t,m=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";if(!(null===(a=v.entity)||void 0===a?void 0:a.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",m,"Configure Entity"),(0,r.kg)("editor.number_input.error_configure_entity_desc",m,"Select an Input Number entity in the General tab"),"mdi:numeric");const y=null===(s=null==e?void 0:e.states)||void 0===s?void 0:s[v.entity];if(!y)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",m,"Entity Not Found"),`Entity "${v.entity}" is not available`,"mdi:alert-circle-outline");const x=this._localValues.get(v.id),$=void 0!==x?x:parseFloat(y.state)||0,f=null!==(c=null===(d=y.attributes)||void 0===d?void 0:d.min)&&void 0!==c?c:0,w=null!==(u=null===(p=y.attributes)||void 0===p?void 0:p.max)&&void 0!==u?u:100,k=null!==(_=null===(g=y.attributes)||void 0===g?void 0:g.step)&&void 0!==_?_:1,S=(null===(b=y.attributes)||void 0===b?void 0:b.unit_of_measurement)||"",T=v.design||{},z=v.input_appearance||"outlined",F=null!==(h=v.font_size)&&void 0!==h?h:16,C=v.text_color||"var(--primary-text-color)",E=v.focus_color||"var(--primary-color)",D=!1!==v.show_stepper,P=!1!==v.show_unit&&!!S,U=!1!==v.show_label&&!!v.label,I=(this.buildContainerStyles(T),this.getHoverEffectClass(t)),A=this.buildStyleString(this.buildDesignStyles(t,e)),q=v.id,O=t=>{const i=Math.min(w,Math.max(f,parseFloat(t.toFixed(10))));this._localValues.set(q,i);const o=this._debounceTimers.get(q);o&&clearTimeout(o);const r=this._localValueTimers.get(q);r&&clearTimeout(r),this._debounceTimers.set(q,setTimeout(()=>{this.callEntityService(v.entity,i,e),this._localValueTimers.set(q,setTimeout(()=>{this._localValues.delete(q)},1e3))},300))};let V="1px solid var(--divider-color)",L="transparent",j="";"filled"===z?(L="var(--input-fill-color, rgba(var(--rgb-primary-text-color, 0,0,0), 0.05))",V="none",j="border-bottom: 2px solid var(--divider-color);"):"underlined"===z&&(L="transparent",V="none",j="border-bottom: 2px solid var(--divider-color); border-radius: 0 !important;");const M=v.id;return this.wrapWithAnimation(o.qy`
      <style>
        .num-wrap-${M} {
          display: flex; align-items: center; background: ${L};
          border: ${V}; border-radius: var(--uc-r-8, 8px); ${j}
          transition: border-color .2s, box-shadow .2s; overflow: hidden;
        }
        .num-wrap-${M}:focus-within {
          border-color: ${E};
          ${"outlined"===z?`box-shadow: 0 0 0 1px ${E};`:""}
          ${"outlined"!==z?`border-bottom-color: ${E};`:""}
        }
        .num-field-${M} {
          flex: 1; border: none; outline: none; background: transparent;
          padding: 12px; font-size: ${F}px; color: ${C};
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
        .num-unit { font-size: ${Math.max(12,F-2)}px; color: var(--secondary-text-color);
          padding-right: 12px; flex-shrink: 0; }
        .num-label { font-size: 12px; font-weight: 500; color: var(--secondary-text-color);
          margin-bottom: 6px; padding-left: 2px; }
      </style>
      <div class="number-input-container ${I}" style="${A}">
        ${U?o.qy`<div class="num-label">${v.label}</div>`:""}
        <div class="num-wrap-${M}">
          ${D?o.qy`
            <button class="num-step-btn" @click=${()=>O($-k)}>
              <ha-icon icon="mdi:minus"></ha-icon>
            </button>`:""}
          <input class="num-field-${M}" type="number"
            .value=${String($)} min=${f} max=${w} step=${k}
            @input=${t=>{const e=t.target,i=parseFloat(e.value);isNaN(i)||O(i)}} />
          ${P?o.qy`<span class="num-unit">${S}</span>`:""}
          ${D?o.qy`
            <button class="num-step-btn" @click=${()=>O($+k)}>
              <ha-icon icon="mdi:plus"></ha-icon>
            </button>`:""}
        </div>
      </div>
    `,t,e)}async callEntityService(t,e,i){if(!t||!i)return;const o=t.split(".")[0];try{await i.callService(o,"set_value",{entity_id:t,value:e})}catch(e){console.error(`[NumberInput] Failed to set value for ${t}:`,e)}}buildContainerStyles(t){return{width:"100%",height:"auto",padding:t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:"0",margin:t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:"0",background:t.background_color||"transparent","border-radius":t.border_radius||"0",border:t.border_style&&"none"!==t.border_style?`${t.border_width||"1px"} ${t.border_style} ${t.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}}},5151(t,e,i){i.d(e,{UltraSelectInputModule:()=>s});var o=i(2618),r=i(6478),n=i(3307),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this.metadata={type:"select_input",title:"Select Input",description:"Dropdown or chip selector linked to input_select helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:form-dropdown",category:"input",tags:["select","dropdown","input","form","helper","interactive","options"]}}createDefault(t,e){return{id:t||this.generateId("select_input"),type:"select_input",select_style:"dropdown",show_label:!0,label:"",font_size:14,text_color:"var(--primary-text-color)",active_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getStyleOptions(t){return[{value:"dropdown",label:(0,r.kg)("editor.select_input.style_options.dropdown",t,"Dropdown")},{value:"segmented",label:(0,r.kg)("editor.select_input.style_options.segmented",t,"Segmented Buttons")},{value:"chips",label:(0,r.kg)("editor.select_input.style_options.chips",t,"Chips / Pills")}]}renderGeneralTab(t,e,i,n){var l,a;const s=t,d=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.select_input.entity.title",d,"Entity Configuration"),(0,r.kg)("editor.select_input.entity.desc",d,"Link to a Home Assistant Input Select or select entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",s.entity||"",t=>{n({entity:t}),this.triggerPreviewUpdate()},["input_select","select"],(0,r.kg)("editor.select_input.entity_field",d,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.select_input.appearance.title",d,"Appearance")}</div>
          <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:16px;opacity:.8;line-height:1.4;">
            ${(0,r.kg)("editor.select_input.appearance.desc",d,"Choose how the options are displayed.")}
          </div>

          <div class="field-group" style="margin-bottom:16px;">
            ${this.renderFieldSection((0,r.kg)("editor.select_input.select_style",d,"Selection Style"),(0,r.kg)("editor.select_input.select_style_desc",d,"How options are presented to the user"),e,{select_style:s.select_style||"dropdown"},[this.selectField("select_style",this.getStyleOptions(d))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.select_input.label",d,"Label"),(0,r.kg)("editor.select_input.label_desc",d,"Label displayed above the selector"),e,{label:s.label||""},[{name:"label",selector:{text:{}}}],t=>n(t.detail.value))}
          ${this.renderFieldSection((0,r.kg)("editor.select_input.show_label",d,"Show Label"),(0,r.kg)("editor.select_input.show_label_desc",d,"Display the label"),e,{show_label:!1!==s.show_label},[{name:"show_label",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.select_input.styling.title",d,"Styling")}</div>
          ${this.renderSliderField((0,r.kg)("editor.select_input.font_size",d,"Font Size"),(0,r.kg)("editor.select_input.font_size_desc",d,"Font size in pixels"),null!==(a=s.font_size)&&void 0!==a?a:14,14,10,24,1,t=>n({font_size:t}),"px")}
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.select_input.active_color",d,"Active/Selected Color")}
              .value=${s.active_color||"var(--primary-color)"}
              @color-changed=${t=>{n({active_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom:16px;">
            <ultra-color-picker .label=${(0,r.kg)("editor.select_input.text_color",d,"Text Color")}
              .value=${s.text_color||"var(--primary-text-color)"}
              @color-changed=${t=>n({text_color:t.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return a.X.render(t,e,t=>o(t))}getStyles(){return n.m.getSliderStyles()}renderPreview(t,e,i){var n,l,a,s,d;const c=t,p=(null===(n=null==e?void 0:e.locale)||void 0===n?void 0:n.language)||"en";if(!(null===(l=c.entity)||void 0===l?void 0:l.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",p,"Configure Entity"),(0,r.kg)("editor.select_input.error_configure_entity_desc",p,"Select an Input Select entity in the General tab"),"mdi:form-dropdown");const u=null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[c.entity];if(!u)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",p,"Entity Not Found"),`Entity "${c.entity}" is not available`,"mdi:alert-circle-outline");const g=(null===(s=u.attributes)||void 0===s?void 0:s.options)||[],_=u.state||"",b=null==e?void 0:e.formatEntityState,h=t=>{if("function"!=typeof b)return t;try{return b(u,t)||t}catch(e){return t}},v=c.design||{},m=null!==(d=c.font_size)&&void 0!==d?d:14,y=c.text_color||"var(--primary-text-color)",x=c.active_color||"var(--primary-color)",$=c.select_style||"dropdown",f=!1!==c.show_label&&!!c.label,w=(this._buildContainerStyles(v),this.getHoverEffectClass(t)),k=this.buildStyleString(this.buildDesignStyles(t,e)),S=c.id,T=t=>{if(!c.entity||!e)return;const i=c.entity.split(".")[0];e.callService(i,"select_option",{entity_id:c.entity,option:t})};return"segmented"===$?this.wrapWithAnimation(o.qy`
        <style>
          .sel-seg-${S} { display:flex; border-radius:var(--uc-r-8, 8px); overflow:hidden; border:1px solid var(--divider-color); }
          .sel-seg-btn-${S} { flex:1; padding:10px 12px; border:none; background:transparent; cursor:pointer;
            font-size:${m}px; color:${y}; font-family:inherit; transition:all .2s;
            border-right:1px solid var(--divider-color); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
          .sel-seg-btn-${S}:last-child { border-right:none; }
          .sel-seg-btn-${S}.active { background:${x}; color:#fff; font-weight:500; }
          .sel-seg-btn-${S}:not(.active):hover { background:rgba(var(--rgb-primary-text-color,0,0,0),.05); }
          .sel-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${w}" style="${k}">
          ${f?o.qy`<div class="sel-label">${c.label}</div>`:""}
          <div class="sel-seg-${S}">
            ${g.map(t=>o.qy`
              <button class="sel-seg-btn-${S} ${t===_?"active":""}" @click=${()=>T(t)}>${h(t)}</button>
            `)}
          </div>
        </div>
      `,t,e):"chips"===$?this.wrapWithAnimation(o.qy`
        <style>
          .sel-chips-${S} { display:flex; flex-wrap:wrap; gap:8px; }
          .sel-chip-${S} { padding:8px 16px; border-radius:var(--uc-r-20, 20px); border:1px solid var(--divider-color);
            background:transparent; cursor:pointer; font-size:${m}px; color:${y};
            font-family:inherit; transition:all .2s; white-space:nowrap; }
          .sel-chip-${S}.active { background:${x}; color:#fff; border-color:${x}; font-weight:500; }
          .sel-chip-${S}:not(.active):hover { border-color:${x}; }
          .sel-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:6px; padding-left:2px; }
        </style>
        <div class="${w}" style="${k}">
          ${f?o.qy`<div class="sel-label">${c.label}</div>`:""}
          <div class="sel-chips-${S}">
            ${g.map(t=>o.qy`
              <button class="sel-chip-${S} ${t===_?"active":""}" @click=${()=>T(t)}>${h(t)}</button>
            `)}
          </div>
        </div>
      `,t,e):this.wrapWithAnimation(o.qy`
      <style>
        .sel-dd-wrap-${S} { position:relative; }
        .sel-dd-${S} { width:100%; padding:12px; font-size:${m}px; color:${y}; font-family:inherit;
          background:transparent; border:1px solid var(--divider-color); border-radius:var(--uc-r-8, 8px); cursor:pointer;
          appearance:none; -webkit-appearance:none; outline:none; transition:border-color .2s, box-shadow .2s; }
        .sel-dd-${S}:focus { border-color:${x}; box-shadow:0 0 0 1px ${x}; }
        /* The open list is drawn by the browser; give it the theme's colours so options stay readable. */
        .sel-dd-${S} option { background:var(--primary-background-color, #fff); color:var(--primary-text-color); }
        .sel-dd-arrow { position:absolute; right:12px; top:50%; transform:translateY(-50%); pointer-events:none;
          color:var(--secondary-text-color); --mdc-icon-size:20px; }
        .sel-label { font-size:12px; font-weight:500; color:var(--secondary-text-color); margin-bottom:6px; padding-left:2px; }
      </style>
      <div class="${w}" style="${k}">
        ${f?o.qy`<div class="sel-label">${c.label}</div>`:""}
        <div class="sel-dd-wrap-${S}">
          <select class="sel-dd-${S}" .value=${_} @change=${t=>T(t.target.value)}>
            ${g.map(t=>o.qy`<option value=${t} ?selected=${t===_}>${h(t)}</option>`)}
          </select>
          <span class="sel-dd-arrow"><ha-icon icon="mdi:chevron-down"></ha-icon></span>
        </div>
      </div>
    `,t,e)}_buildContainerStyles(t){return{width:"100%",height:"auto",padding:t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:"0",margin:t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:"0",background:t.background_color||"transparent","border-radius":t.border_radius||"0",border:t.border_style&&"none"!==t.border_style?`${t.border_width||"1px"} ${t.border_style} ${t.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}_css(t){return Object.entries(t).map(([t,e])=>`${t.replace(/([A-Z])/g,"-$1").toLowerCase()}:${e}`).join(";")}}},28(t,e,i){i.d(e,{UltraSliderInputModule:()=>s});var o=i(2618),r=i(6478),n=i(3307),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this._localValues=new Map,this._localValueTimers=new Map,this._draggingIds=new Set,this.metadata={type:"slider_input",title:"Slider Input",description:"Range slider linked to input_number helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:tune-variant",category:"input",tags:["slider","range","number","input","form","helper","interactive"]}}createDefault(t,e){return{id:t||this.generateId("slider_input"),type:"slider_input",show_label:!0,label:"",show_value:!0,show_min_max:!1,show_unit:!0,slider_height:8,slider_color:"var(--primary-color)",track_color:"var(--divider-color)",thumb_size:20,font_size:14,text_color:"var(--primary-text-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderGeneralTab(t,e,i,n){var l,a,s,d;const c=t,p=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        ${this.renderSettingsSection((0,r.kg)("editor.slider_input.entity.title",p,"Entity Configuration"),(0,r.kg)("editor.slider_input.entity.desc",p,"Link to a Home Assistant Input Number helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",c.entity||"",t=>{n({entity:t}),this.triggerPreviewUpdate()},["input_number","number"],(0,r.kg)("editor.slider_input.entity_field",p,"Entity"))}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.slider_input.display.title",p,"Display")}</div>
          <div style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;">
            ${(0,r.kg)("editor.slider_input.display.desc",p,"Configure what information to show with the slider.")}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.slider_input.label",p,"Label"),(0,r.kg)("editor.slider_input.label_desc",p,"Label displayed above the slider"),e,{label:c.label||""},[{name:"label",selector:{text:{}}}],t=>n(t.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.slider_input.show_label",p,"Show Label"),(0,r.kg)("editor.slider_input.show_label_desc",p,"Display the label"),e,{show_label:!1!==c.show_label},[{name:"show_label",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.slider_input.show_value",p,"Show Value"),(0,r.kg)("editor.slider_input.show_value_desc",p,"Display the current numeric value"),e,{show_value:!1!==c.show_value},[{name:"show_value",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.slider_input.show_min_max",p,"Show Min/Max"),(0,r.kg)("editor.slider_input.show_min_max_desc",p,"Display min and max values at the ends"),e,{show_min_max:!0===c.show_min_max},[{name:"show_min_max",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.slider_input.show_unit",p,"Show Unit"),(0,r.kg)("editor.slider_input.show_unit_desc",p,"Display the unit of measurement"),e,{show_unit:!1!==c.show_unit},[{name:"show_unit",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.slider_input.styling.title",p,"Styling")}</div>

          ${this.renderSliderField((0,r.kg)("editor.slider_input.slider_height",p,"Track Height"),(0,r.kg)("editor.slider_input.slider_height_desc",p,"Height of the slider track in pixels"),null!==(a=c.slider_height)&&void 0!==a?a:8,8,2,24,1,t=>{n({slider_height:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}

          ${this.renderSliderField((0,r.kg)("editor.slider_input.thumb_size",p,"Thumb Size"),(0,r.kg)("editor.slider_input.thumb_size_desc",p,"Size of the slider thumb in pixels"),null!==(s=c.thumb_size)&&void 0!==s?s:20,20,12,36,1,t=>{n({thumb_size:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}

          ${this.renderSliderField((0,r.kg)("editor.slider_input.font_size",p,"Font Size"),(0,r.kg)("editor.slider_input.font_size_desc",p,"Font size of labels and value"),null!==(d=c.font_size)&&void 0!==d?d:14,14,10,28,1,t=>n({font_size:t}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.slider_input.slider_color",p,"Slider Color")}
              .value=${c.slider_color||"var(--primary-color)"}
              @color-changed=${t=>{n({slider_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.slider_input.track_color",p,"Track Color")}
              .value=${c.track_color||"var(--divider-color)"}
              @color-changed=${t=>{n({track_color:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
            ></ultra-color-picker>
          </div>
          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.slider_input.text_color",p,"Text Color")}
              .value=${c.text_color||"var(--primary-text-color)"}
              @color-changed=${t=>n({text_color:t.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return a.X.render(t,e,t=>o(t))}getStyles(){return`${n.m.getSliderStyles()}`}renderPreview(t,e,i,n){var l,a,s,d,c,p,u,g,_,b,h,v,m;const y=t,x=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";if(!(null===(a=y.entity)||void 0===a?void 0:a.trim()))return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",x,"Configure Entity"),(0,r.kg)("editor.slider_input.error_configure_entity_desc",x,"Select an Input Number entity in the General tab"),"mdi:tune-variant");const $=null===(s=null==e?void 0:e.states)||void 0===s?void 0:s[y.entity];if(!$)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",x,"Entity Not Found"),`Entity "${y.entity}" is not available`,"mdi:alert-circle-outline");const f=this._localValues.get(y.id),w=void 0!==f?f:parseFloat($.state)||0,k=null!==(c=null===(d=$.attributes)||void 0===d?void 0:d.min)&&void 0!==c?c:0,S=null!==(u=null===(p=$.attributes)||void 0===p?void 0:p.max)&&void 0!==u?u:100,T=null!==(_=null===(g=$.attributes)||void 0===g?void 0:g.step)&&void 0!==_?_:1,z=(null===(b=$.attributes)||void 0===b?void 0:b.unit_of_measurement)||"",F=y.design||{},C=null!==(h=y.font_size)&&void 0!==h?h:14,E=y.text_color||"var(--primary-text-color)",D=y.slider_color||"var(--primary-color)",P=y.track_color||"var(--divider-color)",U=null!==(v=y.slider_height)&&void 0!==v?v:8,I=null!==(m=y.thumb_size)&&void 0!==m?m:20,A=!1!==y.show_label&&!!y.label,q=!1!==y.show_value,O=!0===y.show_min_max,V=!1!==y.show_unit&&!!z,L=S>k?(w-k)/(S-k)*100:0,j=(this.buildContainerStyles(F),this.getHoverEffectClass(t)),M=this.buildStyleString(this.buildDesignStyles(t,e)),G=y.id,W=Number.isInteger(T)?w.toFixed(0):w.toFixed(1),N=y.id;return this.wrapWithAnimation(o.qy`
      <style>
        .si-container-${N} { width: 100%; }
        .si-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
        .si-label { font-size: ${C}px; font-weight: 500; color: ${E}; }
        .si-value { font-size: ${C}px; font-weight: 600; color: ${E}; }
        .si-track-wrap { position: relative; width: 100%; height: ${Math.max(I,U+8)}px;
          display: flex; align-items: center; }
        .si-range-${N} {
          -webkit-appearance: none; appearance: none; width: 100%; height: ${U}px;
          background: linear-gradient(to right, ${D} ${L}%, ${P} ${L}%);
          border-radius: ${U/2}px; outline: none; cursor: pointer; margin: 0;
        }
        .si-range-${N}::-webkit-slider-thumb {
          -webkit-appearance: none; width: ${I}px; height: ${I}px;
          border-radius: 50%; background: ${D}; cursor: pointer;
          box-shadow: 0 1px 4px rgba(0,0,0,.3); border: 2px solid white;
          transition: transform .15s ease;
        }
        .si-range-${N}::-webkit-slider-thumb:hover { transform: scale(1.15); }
        .si-range-${N}::-moz-range-thumb {
          width: ${I}px; height: ${I}px; border-radius: 50%;
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
          font-size: ${Math.max(10,C-2)}px; color: var(--secondary-text-color); opacity: .7; }
      </style>
      <div class="si-container-${N} ${j}" style="${M}">
        ${A||q?o.qy`
          <div class="si-header">
            ${A?o.qy`<span class="si-label">${y.label}</span>`:o.qy`<span></span>`}
            ${q?o.qy`<span class="si-value">${W}${V?` ${z}`:""}</span>`:""}
          </div>
        `:""}
        <div class="si-track-wrap">
          <input class="si-range-${N}" type="range"
            min=${k} max=${S} step=${T} .value=${String(w)}
            @input=${t=>{const e=t.target,i=parseFloat(e.value);isNaN(i)||(this._localValues.set(G,i),this._draggingIds.add(G))}} @change=${t=>{const i=t.target,o=parseFloat(i.value);if(isNaN(o))return;this._draggingIds.delete(G),this._localValues.set(G,o);const r=this._localValueTimers.get(G);r&&clearTimeout(r),this.callEntityService(y.entity,o,e),this._localValueTimers.set(G,setTimeout(()=>{this._localValues.delete(G)},1e3))}} />
        </div>
        ${O?o.qy`
          <div class="si-minmax">
            <span>${k}${V?` ${z}`:""}</span>
            <span>${S}${V?` ${z}`:""}</span>
          </div>
        `:""}
      </div>
    `,t,e)}async callEntityService(t,e,i){if(!t||!i)return;const o=t.split(".")[0];try{await i.callService(o,"set_value",{entity_id:t,value:e})}catch(e){console.error(`[SliderInput] Failed to set value for ${t}:`,e)}}buildContainerStyles(t){return{width:"100%",height:"auto",padding:t.padding_top||t.padding_bottom||t.padding_left||t.padding_right?`${t.padding_top||"0px"} ${t.padding_right||"0px"} ${t.padding_bottom||"0px"} ${t.padding_left||"0px"}`:"4px 0",margin:t.margin_top||t.margin_bottom||t.margin_left||t.margin_right?`${t.margin_top||"0px"} ${t.margin_right||"0px"} ${t.margin_bottom||"0px"} ${t.margin_left||"0px"}`:"0",background:t.background_color||"transparent","border-radius":t.border_radius||"0",border:t.border_style&&"none"!==t.border_style?`${t.border_width||"1px"} ${t.border_style} ${t.border_color||"var(--divider-color)"}`:"none","box-sizing":"border-box"}}}},9362(t,e,i){i.d(e,{UltraTextInputModule:()=>s});var o=i(2618),r=i(6478),n=i(3307),l=i(5147),a=i(8938);i(7921);class s extends n.m{constructor(){super(...arguments),this._debounceTimers=new Map,this._localValues=new Map,this._localValueTimers=new Map,this.metadata={type:"text_input",title:"Text Input",description:"Text input field linked to input_text helpers",author:"WJD Designs",version:"1.0.0",icon:"mdi:form-textbox",category:"input",tags:["text","input","form","helper","interactive"]}}createDefault(t,e){return{id:t||this.generateId("text_input"),type:"text_input",placeholder:"Enter text...",input_appearance:"outlined",show_clear_button:!0,show_character_count:!1,show_label:!0,label:"",font_size:16,text_color:"var(--primary-text-color)",focus_color:"var(--primary-color)",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getAppearanceOptions(t){return[{value:"outlined",label:(0,r.kg)("editor.text_input.appearance_options.outlined",t,"Outlined")},{value:"filled",label:(0,r.kg)("editor.text_input.appearance_options.filled",t,"Filled")},{value:"underlined",label:(0,r.kg)("editor.text_input.appearance_options.underlined",t,"Underlined")}]}renderGeneralTab(t,e,i,n){var l,a,s,d;const c=t,p=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";return c.entity&&(null===(a=null==e?void 0:e.states)||void 0===a||a[c.entity]),o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Entity Configuration -->
        ${this.renderSettingsSection((0,r.kg)("editor.text_input.entity.title",p,"Entity Configuration"),(0,r.kg)("editor.text_input.entity.desc",p,"Link to a Home Assistant Input Text helper entity."),[])}
        <div style="margin-bottom: 24px;">
          ${this.renderEntityPickerWithVariables(e,i,"entity",c.entity||"",t=>{n({entity:t}),this.triggerPreviewUpdate()},["input_text"],(0,r.kg)("editor.text_input.entity_field",p,"Entity"))}
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
            ${this.renderFieldSection((0,r.kg)("editor.text_input.input_appearance",p,"Input Style"),(0,r.kg)("editor.text_input.input_appearance_desc",p,"Visual style of the input field"),e,{input_appearance:c.input_appearance||"outlined"},[this.selectField("input_appearance",this.getAppearanceOptions(p))],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.text_input.placeholder",p,"Placeholder"),(0,r.kg)("editor.text_input.placeholder_desc",p,"Placeholder text shown when the field is empty"),e,{placeholder:c.placeholder||""},[{name:"placeholder",selector:{text:{}}}],t=>n(t.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.label",p,"Label"),(0,r.kg)("editor.text_input.label_desc",p,"Label displayed above the input field"),e,{label:c.label||""},[{name:"label",selector:{text:{}}}],t=>n(t.detail.value))}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.show_label",p,"Show Label"),(0,r.kg)("editor.text_input.show_label_desc",p,"Display the label above the input"),e,{show_label:!1!==c.show_label},[{name:"show_label",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.multiline",p,"Multiline"),(0,r.kg)("editor.text_input.multiline_desc",p,"Allow multiple lines of text (textarea)"),e,{multiline:!0===c.multiline},[{name:"multiline",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${c.multiline?this.renderSliderField((0,r.kg)("editor.text_input.rows",p,"Rows"),(0,r.kg)("editor.text_input.rows_desc",p,"Number of visible text rows"),null!==(s=c.rows)&&void 0!==s?s:4,4,2,12,1,t=>{n({rows:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}
        </div>

        <!-- Icons & Controls -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.text_input.controls.title",p,"Icons & Controls")}
          </div>

          ${this.renderFieldSection((0,r.kg)("editor.text_input.prefix_icon",p,"Prefix Icon"),(0,r.kg)("editor.text_input.prefix_icon_desc",p,"Icon displayed at the start of the input field"),e,{prefix_icon:c.prefix_icon||""},[{name:"prefix_icon",selector:{icon:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.suffix_icon",p,"Suffix Icon"),(0,r.kg)("editor.text_input.suffix_icon_desc",p,"Icon displayed at the end of the input field"),e,{suffix_icon:c.suffix_icon||""},[{name:"suffix_icon",selector:{icon:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.show_clear_button",p,"Show Clear Button"),(0,r.kg)("editor.text_input.show_clear_button_desc",p,"Show a button to clear the input field"),e,{show_clear_button:!1!==c.show_clear_button},[{name:"show_clear_button",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection((0,r.kg)("editor.text_input.show_character_count",p,"Show Character Count"),(0,r.kg)("editor.text_input.show_character_count_desc",p,"Display a character counter below the input"),e,{show_character_count:!0===c.show_character_count},[{name:"show_character_count",selector:{boolean:{}}}],t=>{n(t.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <!-- Styling -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,r.kg)("editor.text_input.styling.title",p,"Styling")}
          </div>

          ${this.renderSliderField((0,r.kg)("editor.text_input.font_size",p,"Font Size"),(0,r.kg)("editor.text_input.font_size_desc",p,"Font size of the input text in pixels"),null!==(d=c.font_size)&&void 0!==d?d:16,16,10,32,1,t=>n({font_size:t}),"px")}

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.text_input.text_color",p,"Text Color")}
              .value=${c.text_color||"var(--primary-text-color)"}
              @color-changed=${t=>{n({text_color:t.detail.value})}}
            ></ultra-color-picker>
          </div>

          <div class="field-group" style="margin-bottom: 16px;">
            <ultra-color-picker
              .label=${(0,r.kg)("editor.text_input.focus_color",p,"Focus/Accent Color")}
              .value=${c.focus_color||"var(--primary-color)"}
              @color-changed=${t=>{n({focus_color:t.detail.value})}}
            ></ultra-color-picker>
          </div>
        </div>
      </div>
    `}renderActionsTab(t,e,i,o){return l.A.render(t,e,t=>o(t))}renderOtherTab(t,e,i,o){return a.X.render(t,e,t=>o(t))}getStyles(){return`\n      ${n.m.getSliderStyles()}\n    `}renderPreview(t,e,i,n){var l,a,s,d,c,p;const u=t,g=(null===(l=null==e?void 0:e.locale)||void 0===l?void 0:l.language)||"en";if(!u.entity||!u.entity.trim())return this.renderGradientErrorState((0,r.kg)("editor.common.error_configure_entity",g,"Configure Entity"),(0,r.kg)("editor.text_input.error_configure_entity_desc",g,"Select an Input Text entity in the General tab"),"mdi:form-textbox");const _=null===(a=null==e?void 0:e.states)||void 0===a?void 0:a[u.entity];if(!_)return this.renderGradientErrorState((0,r.kg)("editor.common.error_entity_not_found",g,"Entity Not Found"),`Entity "${u.entity}" is not available`,"mdi:alert-circle-outline");const b=this._localValues.get(u.id),h=void 0!==b?b:_.state||"",v=null===(s=_.attributes)||void 0===s?void 0:s.max,m=(null===(d=_.attributes)||void 0===d?void 0:d.mode)||"text",y=u.design||{},x=u.input_appearance||"outlined",$=null!==(c=u.font_size)&&void 0!==c?c:16,f=u.text_color||"var(--primary-text-color)",w=u.focus_color||"var(--primary-color)",k=u.placeholder||"",S=!1!==u.show_clear_button,T=!0===u.show_character_count,z=!1!==u.show_label&&!!u.label,F=u.label||"",C=((y.padding_top||y.padding_bottom||y.padding_left||y.padding_right)&&(y.padding_top,y.padding_right,y.padding_bottom,y.padding_left),(y.margin_top||y.margin_bottom||y.margin_left||y.margin_right)&&(y.margin_top,y.margin_right,y.margin_bottom,y.margin_left),y.background_color,this.getBackgroundImageCss(Object.assign(Object.assign({},u),y),e),y.border_radius,y.border_style&&"none"!==y.border_style&&(y.border_width,y.border_style,y.border_color),(y.box_shadow_h||y.box_shadow_v||y.box_shadow_blur||y.box_shadow_spread)&&(y.box_shadow_h,y.box_shadow_v,y.box_shadow_blur,y.box_shadow_spread,y.box_shadow_color),y.hover_effect,this.getHoverEffectClass(t)),E=this.buildStyleString(this.buildDesignStyles(t,e)),D=!0===u.multiline,P=null!==(p=u.rows)&&void 0!==p?p:4,U="password"===m?"password":"text",I=u.id,A=()=>{const t=this._localValueTimers.get(I);t&&clearTimeout(t);const e=this._debounceTimers.get(I);e&&clearTimeout(e)},q=t=>{const i=t.target.value;this._localValues.set(I,i),A(),this._debounceTimers.set(I,setTimeout(()=>{this.setEntityValue(u.entity,i,e),this._localValueTimers.set(I,setTimeout(()=>{this._localValues.delete(I)},1e3))},300))};let O="",V="",L="";switch(x){case"filled":V="var(--input-fill-color, rgba(var(--rgb-primary-text-color, 0,0,0), 0.05))",O="none",L="border-bottom: 2px solid var(--divider-color);";break;case"underlined":V="transparent",O="none",L="border-bottom: 2px solid var(--divider-color); border-radius: 0 !important;";break;default:V="transparent",O="1px solid var(--divider-color)",L=""}const j=u.id;return this.wrapWithAnimation(o.qy`
      <style>
        .text-input-wrapper-${j} {
          position: relative;
          display: flex;
          align-items: ${D?"flex-start":"center"};
          background: ${V};
          border: ${O};
          border-radius: var(--uc-r-8, 8px);
          ${L}
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }
        .text-input-wrapper-${j}:focus-within {
          border-color: ${w};
          ${"outlined"===x?`box-shadow: 0 0 0 1px ${w};`:""}
          ${"underlined"===x||"filled"===x?`border-bottom-color: ${w};`:""}
        }
        .text-input-field-${j} {
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
        .text-input-field-${j}::placeholder {
          color: var(--secondary-text-color);
          opacity: 0.6;
        }
        textarea.text-input-field-${j} {
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
        class="text-input-module-container ${C}"
        style="${E}"
      >
        ${z?o.qy`<div class="text-input-label">${F}</div>`:""}
        <div class="text-input-wrapper-${j}">
          ${u.prefix_icon?o.qy`<div class="text-input-icon" style="${D?"padding-top: 12px;":""}">
                <ha-icon icon="${u.prefix_icon}"></ha-icon>
              </div>`:""}
          ${D?o.qy`<textarea
                class="text-input-field-${j}"
                rows=${P}
                .value=${h}
                placeholder="${k}"
                @input=${q}
              ></textarea>`:o.qy`<input
                class="text-input-field-${j}"
                type="${U}"
                .value=${h}
                placeholder="${k}"
                @input=${q}
              />`}
          ${S&&h?o.qy`<button class="text-input-clear-btn" style="${D?"padding-top: 10px; align-self: flex-start;":""}" @click=${t=>{t.stopPropagation(),A(),this._debounceTimers.delete(I),this._localValues.set(I,""),this.setEntityValue(u.entity,"",e),this._localValueTimers.set(I,setTimeout(()=>{this._localValues.delete(I)},1e3))}}>
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
    `,t,e)}async setEntityValue(t,e,i){if(t&&i)try{await i.callService("input_text","set_value",{entity_id:t,value:e})}catch(e){console.error(`[TextInput] Failed to set value for ${t}:`,e)}}}},5646(t,e,i){i.d(e,{Hv:()=>n,eJ:()=>l,oV:()=>a});var o=i(6831);const r={filled:"flat",outlined:"outline",text:"minimal"};function n(t){var e;return t&&"theme"!==t?null!==(e=r[t])&&void 0!==e?e:t:"flat"}function l(t){return"minimal"===n(t)||"text"===t}function a(t,e){return Object.entries(function(t,e){const i=n(t),r={background:e.background,hasCustomTextColor:e.hasCustomTextColor,blur:e.blur},a=(0,o.bT)(i,r);return l(t)?Object.assign(Object.assign({},a),{background:"transparent",border:"none",boxShadow:"none",color:e.textColor||e.background}):!e.textColor||"flat"!==i&&"filled"!==t?a:Object.assign(Object.assign({},a),{color:e.textColor})}(t,e)).map(([t,e])=>`${t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}: ${e}`).join("; ")}}};