export const __webpack_esm_ids__=[1540];export const __webpack_esm_modules__={1540(e,t,i){i.d(t,{UltraExternalCardModule:()=>w,cleanupExternalCardCache:()=>f});var o=i(2618),r=i(7610),n=i(3794),a=i(7095),d=i(3307),s=i(1078),c=i(3962),l=i(382),p=i(3045),u=/*#__PURE__*/i(6461),g=/*#__PURE__*/i(8711),v=i(5147),h=i(935);const m=new Map,y=new Map,_=new Map,b=new Map;function f(e){const t=m.get(e);t&&(clearTimeout(t),m.delete(e));const i=[];y.forEach((t,o)=>{o.startsWith(`${e}-`)&&i.push(o)}),i.forEach(e=>y.delete(e)),_.delete(e),b.delete(e)}function x(e){const t=null==e?void 0:e.action;return!!t&&"nothing"!==t&&"none"!==t&&"default"!==t}class w extends d.m{constructor(){super(...arguments),this.metadata={type:"external_card",icon:"mdi:card-bulleted",title:"3rd Party Card",description:"Embed any 3rd party Home Assistant card",category:"interactive",author:"Ultra Card",version:"1.0.0",tags:["external","integration","3rd-party"]}}createDefault(){return{id:`external-card-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:"external_card",card_type:"",card_config:{},name:"",display_conditions:[]}}renderActionsTab(e,t,i,r){var n;const a=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";return o.qy`
      <div
        class="uc-external-card-actions-note"
        style="font-size: 13px; line-height: 1.4; color: var(--secondary-text-color); background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 12px 16px; margin-bottom: 16px;"
      >
        ${(0,h.kg)("editor.external_card.actions_note",a,"Leave these on Nothing to keep the card's own buttons and controls. Once you set an action (or a popup uses this card as its trigger), Ultra Card handles taps on this card instead.")}
      </div>
      ${v.A.render(e,t,e=>r(e))}
    `}hasNativeEditor(e){if(!e)return!1;const t=`${e}-editor`,i=customElements.get(t);return void 0!==i&&!(i.prototype instanceof HTMLUnknownElement)}_hasConfigChanged(e,t){var i,o,r,n;return!(!e&&!t)&&(!e||!t||JSON.stringify(e)!==JSON.stringify(t)&&(e.entity!==t.entity||e.entity_id!==t.entity_id||(null===(i=e.settings)||void 0===i?void 0:i.entity)!==(null===(o=t.settings)||void 0===o?void 0:o.entity)||(null===(r=e.data)||void 0===r||r.entity,null===(n=t.data)||void 0===n||n.entity),!0))}renderGeneralTab(e,t,i,n){if(!e.card_type){const t="Custom YAML Card"===e.name;return o.qy`
        ${this.injectUcFormStyles()}
        <div class="external-card-general-tab">
          <div class="settings-section" style="text-align: center; padding: 40px 20px;">
            <ha-icon 
              icon="${t?"mdi:code-braces":"mdi:information-outline"}" 
              style="font-size: 48px; color: var(--primary-color); opacity: 0.7; margin-bottom: 16px;"
            ></ha-icon>
            <p style="font-size: 16px; font-weight: 600; color: var(--primary-text-color); margin-bottom: 8px;">
              ${t?"Paste Your Card Configuration":"No Card Type Set"}
            </p>
            <p style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px;">
              ${t?"Use the YAML tab to paste any valid Lovelace card configuration.":"Switch to the YAML tab to configure the card type."}
            </p>
            <div style="background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-8, 8px); padding: 16px; text-align: left; font-family: monospace; font-size: 13px; max-width: 320px; margin: 0 auto;">
              <div style="color: var(--secondary-text-color); margin-bottom: 8px; font-family: inherit; font-size: 12px;">Example configuration:</div>
              <div style="color: var(--primary-text-color);">type: custom:webrtc-camera</div>
              <div style="color: var(--primary-text-color);">url: rtsp://user:pass@ip:554/stream</div>
            </div>
          </div>
        </div>
      `}const a=e.card_type&&e.card_type.startsWith("hui-");if(!a&&!this.hasNativeEditor(e.card_type))return null;let d;if(a)d=e.name||e.card_type||"Native HA Card";else{const t=e.card_type?s.Mb.getCardInfo(e.card_type):null;d=(null==t?void 0:t.name)||e.card_type||"External Card"}return o.qy`
      ${this.injectUcFormStyles()}
      <div class="external-card-general-tab">
        <div class="settings-section">
          <div
            class="section-title"
            style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); text-transform: uppercase;"
          >
            USING ${d.toUpperCase()}'S NATIVE EDITOR
          </div>
          <div
            class="section-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;"
          >
            Configure this 3rd party card using its native configuration interface.
          </div>
          <div class="native-editor-container" ${(0,r.K)(i=>{if(!i||!e.card_type)return;const o=`${e.card_type}-editor`,r=`${e.id}-${e.card_type}`;let a=y.get(r);const d=!a||a.tagName.toLowerCase()!==o,l=a&&!i.contains(a);if(d){const d=[];y.forEach((t,i)=>{i.startsWith(`${e.id}-`)&&i!==r&&d.push(i)}),d.forEach(e=>y.delete(e));try{if(a=document.createElement(o),!a||a instanceof HTMLUnknownElement)return y.delete(r),void(i.innerHTML='\n              <div style="padding: 40px; text-align: center; color: var(--secondary-text-color);">\n                <ha-icon icon="mdi:information-outline" style="font-size: 48px; opacity: 0.5; margin-bottom: 16px;"></ha-icon>\n                <p style="font-size: 14px; margin-bottom: 8px;">This card does not have a visual editor.</p>\n                <p style="font-size: 13px; opacity: 0.8;">Use the YAML tab to configure this card.</p>\n              </div>\n            ');let d=null;a.addEventListener("config-changed",i=>{if(i.stopPropagation(),i.stopImmediatePropagation(),i.detail&&i.detail.config){const o={};e.card_config&&Object.keys(e.card_config).forEach(t=>{const i=t.toLowerCase().replace(/[-\s]/g,"_");("card_mod"===i||i.startsWith("card_mod_"))&&(o[t]=e.card_config[t])});const r=Object.assign(Object.assign({},i.detail.config),o),a=JSON.stringify(r);if(b.get(e.id)===a)return;if(!this._hasConfigChanged(e.card_config||{},r))return;b.set(e.id,a),d=Object.assign({},r);const s=`${e.id}-live`;c.G.updateConfig(s,Object.assign({type:e.card_type},r),t);const l=m.get(e.id);l&&clearTimeout(l),_.set(e.id,!0);const p=window.setTimeout(()=>{d&&(n({card_config:d}),d=null),m.delete(e.id),setTimeout(()=>{_.set(e.id,!1)},200)},600);m.set(e.id,p)}}),y.set(r,a),i.innerHTML="",i.appendChild(a)}catch(e){return console.error("Failed to create native editor:",e),y.delete(r),void(i.innerHTML='\n            <div style="padding: 40px; text-align: center; color: var(--error-color);">\n              <ha-icon icon="mdi:alert-circle" style="font-size: 48px; opacity: 0.5; margin-bottom: 16px;"></ha-icon>\n              <p style="font-size: 14px; margin-bottom: 8px;">Failed to load editor</p>\n              <p style="font-size: 13px; opacity: 0.8;">Use the YAML tab to configure this card.</p>\n            </div>\n          ')}}else l&&(i.innerHTML="",i.appendChild(a));if(!i.hasAttribute("data-uc-events-attached")){i.setAttribute("data-uc-events-attached","true");const e=e=>{e.stopPropagation()};i.addEventListener("keydown",e,!1),i.addEventListener("keyup",e,!1),i.addEventListener("keypress",e,!1),i.addEventListener("input",e,!1),i.addEventListener("change",e,!1),i.addEventListener("focus",e,!1),i.addEventListener("blur",e,!1),i.addEventListener("click",e,!1),i.addEventListener("mousedown",e,!1),i.addEventListener("mouseup",e,!1),i.addEventListener("pointerdown",e,!1),i.addEventListener("pointerup",e,!1)}_.get(e.id)||((i,o)=>{try{const r=o.contains(i);t.lovelace&&(i.lovelace=t.lovelace);const n=function(e){if(!e||"object"!=typeof e)return e;const t=Object.assign({},e);return Object.keys(t).forEach(e=>{const i=e.toLowerCase().replace(/[-\s]/g,"_");("card_mod"===i||i.startsWith("card_mod_"))&&delete t[e]}),t}(e.card_config||{});e.card_type&&e.card_type.startsWith("hui-")&&n&&"object"==typeof n&&(n.type=(0,s.pd)(e.card_type));const a=JSON.stringify(i.config||{})!==JSON.stringify(n);if(!_.get(e.id)&&(!r||a)){i.hass=t,_.set(e.id,!0);try{"function"==typeof i.setConfig?i.setConfig(n):i.config=n}finally{setTimeout(()=>_.set(e.id,!1),50)}}i.hass=t}catch(e){console.error("Failed to update cached editor:",e)}})(a,i)})}></div>
        </div>
      </div>
    `}renderYamlTab(e,t,i,r){let n;try{const t=e.card_config||{};n=l.Ay.dump(t,{indent:2,lineWidth:-1,noRefs:!0,sortKeys:!1,flowLevel:-1,styles:{"!!null":"empty"}}),n=n.replace(/^\|\s*\n/,"")}catch(e){console.error("[UC] Failed to convert config to YAML:",e),n="# Error converting config to YAML\n"}return o.qy`
      ${this.injectUcFormStyles()}
      <div class="external-card-yaml-tab" style="width: 100%; height: 100%; display: block;">
        <div class="settings-section" style="width: 100%; height: 100%; display: block;">
          <div
            class="section-title"
            style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color)); text-transform: uppercase;"
          >
            CARD CONFIGURATION (YAML)
          </div>
          <div
            class="section-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;"
          >
            Edit the card's configuration directly in YAML format. Changes are applied
            automatically.
          </div>
          <div 
            class="yaml-editor-container" 
            style="width: 100%; display: block;"
            @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
            @dragstart=${e=>e.stopPropagation()}
          >
            <ultra-template-editor
              .hass=${t}
              .value=${n}
              .placeholder=${"type: custom:webrtc-camera\nurl: rtsp://user:pass@192.168.1.100:554/stream\n\n# Or any other card:\ntype: custom:button-card\nentity: sensor.example\nname: Example Card"}
              .minHeight=${300}
              .maxHeight=${600}
              @value-changed=${t=>{var i,o;const n=null===(o=null===(i=t.target)||void 0===i?void 0:i.closest(".yaml-editor-container"))||void 0===o?void 0:o.querySelector(".uc-yaml-parse-error");try{const i=l.Ay.load(t.detail.value);if(n&&(n.style.display="none",n.textContent=""),i&&"object"==typeof i&&i.type){let t=i.type;"string"==typeof t&&t.startsWith("custom:")&&(t=t.substring(7)),e.card_type!==t?(p.v&&console.log("[UC External Card] YAML type detected, updating card_type:",t),r({card_type:t,card_config:i})):r({card_config:i})}else r({card_config:i})}catch(e){if(console.error("Invalid YAML in editor:",e),n){const t=e instanceof Error?e.message:String(e);n.textContent=`Invalid YAML: ${t}`,n.style.display="block"}}}}
            ></ultra-template-editor>
            <div
              class="uc-yaml-parse-error"
              style="display: none; margin-top: 8px; padding: 8px 10px; color: var(--error-color, #db4437); font-size: 13px; font-family: monospace; white-space: pre-wrap; border: 1px solid var(--error-color, #db4437); border-radius: var(--uc-r-6, 6px); background: rgba(219, 68, 55, 0.08);"
            ></div>
          </div>
        </div>
      </div>
    `}renderPreview(e,t,i,d){var l,p,v,h,m,y,_,b,f,w,k,C,$,E,z,L,U,A,M,T,q,O,P,S,j,N,Y,I,H,W,F,G,D,R,J,K,B,V,Q;const X=e,Z={padding_top:null===(l=X.design)||void 0===l?void 0:l.padding_top,padding_bottom:null===(p=X.design)||void 0===p?void 0:p.padding_bottom,padding_left:null===(v=X.design)||void 0===v?void 0:v.padding_left,padding_right:null===(h=X.design)||void 0===h?void 0:h.padding_right,margin_top:null===(m=X.design)||void 0===m?void 0:m.margin_top,margin_bottom:null===(y=X.design)||void 0===y?void 0:y.margin_bottom,margin_left:null===(_=X.design)||void 0===_?void 0:_.margin_left,margin_right:null===(b=X.design)||void 0===b?void 0:b.margin_right,background_color:null===(f=X.design)||void 0===f?void 0:f.background_color,background_image:null===(w=X.design)||void 0===w?void 0:w.background_image,background_image_type:null===(k=X.design)||void 0===k?void 0:k.background_image_type,background_image_entity:null===(C=X.design)||void 0===C?void 0:C.background_image_entity,background_size:null===($=X.design)||void 0===$?void 0:$.background_size,background_position:null===(E=X.design)||void 0===E?void 0:E.background_position,background_repeat:null===(z=X.design)||void 0===z?void 0:z.background_repeat,border_style:null===(L=X.design)||void 0===L?void 0:L.border_style,border_width:null===(U=X.design)||void 0===U?void 0:U.border_width,border_color:null===(A=X.design)||void 0===A?void 0:A.border_color,border_radius:null===(M=X.design)||void 0===M?void 0:M.border_radius,box_shadow_h:null===(T=X.design)||void 0===T?void 0:T.box_shadow_h,box_shadow_v:null===(q=X.design)||void 0===q?void 0:q.box_shadow_v,box_shadow_blur:null===(O=X.design)||void 0===O?void 0:O.box_shadow_blur,box_shadow_spread:null===(P=X.design)||void 0===P?void 0:P.box_shadow_spread,box_shadow_color:null===(S=X.design)||void 0===S?void 0:S.box_shadow_color,position:null===(j=X.design)||void 0===j?void 0:j.position,top:null===(N=X.design)||void 0===N?void 0:N.top,bottom:null===(Y=X.design)||void 0===Y?void 0:Y.bottom,left:null===(I=X.design)||void 0===I?void 0:I.left,right:null===(H=X.design)||void 0===H?void 0:H.right,z_index:null===(W=X.design)||void 0===W?void 0:W.z_index,width:null===(F=X.design)||void 0===F?void 0:F.width,height:null===(G=X.design)||void 0===G?void 0:G.height,max_width:null===(D=X.design)||void 0===D?void 0:D.max_width,max_height:null===(R=X.design)||void 0===R?void 0:R.max_height,min_width:null===(J=X.design)||void 0===J?void 0:J.min_width,min_height:null===(K=X.design)||void 0===K?void 0:K.min_height,overflow:null===(B=X.design)||void 0===B?void 0:B.overflow,clip_path:null===(V=X.design)||void 0===V?void 0:V.clip_path,backdrop_filter:null===(Q=X.design)||void 0===Q?void 0:Q.backdrop_filter},ee={padding:Z.padding_top||Z.padding_bottom||Z.padding_left||Z.padding_right||X.padding_top||X.padding_bottom||X.padding_left||X.padding_right?`${this.addPixelUnit(Z.padding_top||X.padding_top)||"0px"} ${this.addPixelUnit(Z.padding_right||X.padding_right)||"0px"} ${this.addPixelUnit(Z.padding_bottom||X.padding_bottom)||"0px"} ${this.addPixelUnit(Z.padding_left||X.padding_left)||"0px"}`:"0px",margin:Z.margin_top||Z.margin_bottom||Z.margin_left||Z.margin_right||X.margin_top||X.margin_bottom||X.margin_left||X.margin_right?`${Z.margin_top||X.margin_top||"0px"} ${Z.margin_right||X.margin_right||"0px"} ${Z.margin_bottom||X.margin_bottom||"0px"} ${Z.margin_left||X.margin_left||"0px"}`:"0",background:Z.background_color||X.background_color||"transparent",backgroundImage:this.getBackgroundImageCSS(Object.assign(Object.assign({},X),Z),t,i),backgroundSize:Z.background_size||X.background_size||"cover",backgroundPosition:Z.background_position||X.background_position||"center",backgroundRepeat:Z.background_repeat||X.background_repeat||"no-repeat",border:(Z.border_style||X.border_style)&&"none"!==(Z.border_style||X.border_style)?`${Z.border_width||X.border_width||"1px"} ${Z.border_style||X.border_style} ${Z.border_color||X.border_color||"var(--divider-color)"}`:"none",borderRadius:this.addPixelUnit(Z.border_radius||X.border_radius)||"0",position:Z.position||X.position||"relative",top:Z.top||X.top||"auto",bottom:Z.bottom||X.bottom||"auto",left:Z.left||X.left||"auto",right:Z.right||X.right||"auto",zIndex:Z.z_index||X.z_index||"auto",width:Z.width||X.width||"100%",height:Z.height||X.height||"auto",maxWidth:Z.max_width||X.max_width||"none",maxHeight:Z.max_height||X.max_height||"none",minWidth:Z.min_width||X.min_width||"none",minHeight:Z.min_height||X.min_height||"auto",overflow:Z.overflow||X.overflow||"visible",clipPath:Z.clip_path||X.clip_path||"none",backdropFilter:Z.backdrop_filter||X.backdrop_filter||"none",boxShadow:(Z.box_shadow_h||X.box_shadow_h)&&(Z.box_shadow_v||X.box_shadow_v)?`${Z.box_shadow_h||X.box_shadow_h||"0"} ${Z.box_shadow_v||X.box_shadow_v||"0"} ${Z.box_shadow_blur||X.box_shadow_blur||"0"} ${Z.box_shadow_spread||X.box_shadow_spread||"0"} ${Z.box_shadow_color||X.box_shadow_color||"rgba(0,0,0,0.1)"}`:"none",boxSizing:"border-box",display:"flex",flexDirection:"column"};if(!e.card_type){const t="Custom YAML Card"===e.name;return o.qy`
        <div class="external-card-module-container" style=${this.styleObjectToCss(ee)}>
          <div class="external-card-placeholder" data-uc-role="pane">
            <div class="ultra-card-logo">
              <ha-icon
                icon="${t?"mdi:code-braces":"mdi:card-multiple"}"
                style="--mdc-icon-size: 48px; color: var(--primary-color);"
              ></ha-icon>
            </div>
            <p class="card-title">${t?"Custom YAML Card":"Ultra Card"}</p>
            <p class="subtitle">${t?"Paste your card configuration":"No 3rd party card selected"}</p>
            <p class="instruction">${t?"Go to the YAML tab and paste any valid Lovelace card configuration":"Click edit to choose and configure a custom card"}</p>
            ${t?o.qy`
              <div style="margin-top: 12px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.1); border-radius: var(--uc-r-8, 8px); font-size: 12px; font-family: monospace; text-align: left; max-width: 280px;">
                <div style="color: var(--secondary-text-color); margin-bottom: 4px;">Example:</div>
                <div style="color: var(--primary-text-color);">type: custom:webrtc-camera</div>
                <div style="color: var(--primary-text-color);">url: rtsp://...</div>
              </div>
            `:""}
          </div>
        </div>
      `}if(!e.card_config||Object.keys(e.card_config).length<=1){const t=s.Mb.hasCardEditor(e.card_type),i=e.name||e.card_type.replace("custom:","").replace("-"," ").replace(/\b\w/g,e=>e.toUpperCase());return o.qy`
        <div class="external-card-module-container" style=${this.styleObjectToCss(ee)}>
          <div class="external-card-placeholder" data-uc-role="pane">
            <div class="ultra-card-logo">
              <ha-icon
                icon="mdi:card-multiple"
                style="--mdc-icon-size: 48px; color: var(--primary-color);"
              ></ha-icon>
            </div>
            <p class="card-title">${i}</p>
            <p class="subtitle">3rd Party Card Ready</p>
            ${t?o.qy`<p class="instruction">Use the settings below to set up this card</p>`:o.qy`<p class="instruction">
                  Please use the YAML editor below to configure this card
                </p>`}
          </div>
        </div>
      `}const te=e.card_type.startsWith("custom:")?e.card_type.substring(7):e.card_type;if(!s.Mb.isCardAvailable(te))return o.qy`
        <div class="external-card-module-container" style=${this.styleObjectToCss(ee)}>
          <div class="external-card-error">
            <div class="ultra-card-logo">
              <ha-icon
                icon="mdi:alert-circle"
                style="--mdc-icon-size: 48px; color: var(--error-color);"
              ></ha-icon>
            </div>
            <p class="card-title">Card Not Found</p>
            <p class="subtitle">${e.card_type}</p>
            <p class="instruction">This card is not installed on your system</p>
          </div>
        </div>
      `;const ie=i=>{if(!(i&&i instanceof HTMLElement))return;let o=e.id;"live"===d?o=`${e.id}-live`:"ha-preview"===d&&(o=`${e.id}-ha-preview`);const r=i.firstElementChild,n=i._ucInitialized===o,a=c.G.hasContainer(o);if(n&&r&&a){if(t){const i=Object.assign({type:e.card_type},e.card_config||{});c.G.getContainer(o,e.card_type,i,t)}return}if(a&&!r){const r=Object.assign({type:e.card_type},e.card_config||{}),n=c.G.getContainer(o,e.card_type,r,t);return i.appendChild(n),void(i._ucInitialized=o)}const s=Object.assign({type:e.card_type},e.card_config||{}),l=c.G.getContainer(o,e.card_type,s,t);r!==l&&(r&&i.removeChild(r),i.appendChild(l),a||setTimeout(()=>{l&&window.dispatchEvent(new Event("resize"))},100));const p=e.card_type.startsWith("custom:")?e.card_type.substring(7):e.card_type;if(p.includes("apexcharts")){const e=l.querySelector(p);e&&(setTimeout(()=>{e.isConnected&&t&&(e.hass=t,"function"==typeof e.requestUpdate&&e.requestUpdate(),window.dispatchEvent(new Event("resize")))},100),setTimeout(()=>{e.isConnected&&t&&(e.hass=t,"function"==typeof e.requestUpdate&&e.requestUpdate(),window.dispatchEvent(new Event("resize")))},300),setTimeout(()=>{e.isConnected&&t&&(e.hass=t,"function"==typeof e.requestUpdate&&e.requestUpdate(),window.dispatchEvent(new Event("resize")))},600))}if(p.includes("webrtc-camera")||p.includes("webrtc")){const i=l.firstElementChild;i&&(setTimeout(()=>{i.isConnected&&t&&(i.hass=t,setTimeout(()=>{if("function"==typeof i.setConfig)try{const t=Object.assign({type:"custom:webrtc-camera"},e.card_config||{});i.setConfig(t)}catch(e){}if("function"==typeof i.play)try{i.play()}catch(e){}},50),"function"==typeof i.requestUpdate&&i.requestUpdate(),"function"==typeof i.refresh&&i.refresh(),window.dispatchEvent(new Event("resize")))},200),setTimeout(()=>{if(i.isConnected&&t){if(i.hass=t,"function"==typeof i.play)try{i.play()}catch(e){}"function"==typeof i.requestUpdate&&i.requestUpdate(),"function"==typeof i.refresh&&i.refresh(),window.dispatchEvent(new Event("resize"))}},500),setTimeout(()=>{if(i.isConnected&&t){if(i.hass=t,"function"==typeof i.play)try{i.play()}catch(e){}"function"==typeof i.requestUpdate&&i.requestUpdate(),"function"==typeof i.refresh&&i.refresh(),window.dispatchEvent(new Event("resize"))}},1e3),setTimeout(()=>{if(i.isConnected&&t){if(i.hass=t,"function"==typeof i.play)try{i.play()}catch(e){}"function"==typeof i.requestUpdate&&i.requestUpdate(),window.dispatchEvent(new Event("resize"))}},2e3))}i._ucInitialized=o},oe=this.getHoverEffectClass(e),re=this.buildStyleString(this.buildDesignStyles(e,t)),ne=function(e,t){return x(e.tap_action)||x(e.hold_action)||x(e.double_tap_action)||function(e,t){if(!e)return!1;if((0,u.iR)(e))return!0;let i=!1;return(0,g.d$)(null==t?void 0:t.layout,t=>{const o=t;"popup"===o.type&&"module"===o.trigger_type&&o.trigger_module_id===e&&(i=!0)}),i}(e.id,t)}(e,i),ae=ne?JSON.stringify([e.tap_action,e.hold_action,e.double_tap_action,e.confirm_action,e.close_popup_after_action]):"",de=()=>{if(!ne)return"";const r=this.createGestureHandlers(`external-card-${e.id}`,{tap_action:e.tap_action||{action:"nothing"},hold_action:e.hold_action||{action:"nothing"},double_tap_action:e.double_tap_action||{action:"nothing"},module:e},t,i);return o.qy`
        <div
          class="uc-external-card-tap-layer"
          style="position: absolute; inset: 0; z-index: 2; cursor: pointer; background: transparent; border-radius: inherit; touch-action: pan-x pan-y; -webkit-tap-highlight-color: transparent; outline-offset: -2px;"
          role="button"
          tabindex="0"
          aria-label=${e.name||e.card_type}
          @pointerdown=${r.onPointerDown}
          @pointermove=${r.onPointerMove}
          @pointerup=${r.onPointerUp}
          @pointerleave=${r.onPointerLeave}
          @pointercancel=${r.onPointerCancel}
          @keydown=${r.onKeyDown}
          @click=${e=>e.stopPropagation()}
        ></div>
      `};return this.wrapWithAnimation(o.qy`${(0,a.a)([e.id,e.card_type,ae],()=>o.qy`
        <div class="external-card-module-container ${oe}" style="display: flex; flex-direction: column; ${ne?"position: relative; ":""}${re}">
          ${(0,n.P)(o.qy`
            <div
              ${(0,r.K)(ie)}
              class="external-card-container uc-external-card"
              style="
              width: 100%;
              display: flex;
              flex-direction: column;
              flex: 1 1 auto;
              min-width: 0;
              min-height: 0;
            "
              @click=${e=>e.stopPropagation()}
            >
              <!-- Isolated container will be mounted here -->
            </div>
          `)}
          ${de()}
        </div>
      `)}`,e,t)}getBackgroundImageCSS(e,t,i){var o,r;if(!e.background_image_type||"none"===e.background_image_type)return"none";switch(e.background_image_type){case"upload":case"url":if(e.background_image)return`url("${e.background_image}")`;break;case"entity":{const n=this.resolveEntity(e.background_image_entity,i);if(n&&(null==t?void 0:t.states[n])){const e=t.states[n];let i="";if((null===(o=e.attributes)||void 0===o?void 0:o.entity_picture)?i=e.attributes.entity_picture:(null===(r=e.attributes)||void 0===r?void 0:r.image)?i=e.attributes.image:e.state&&"string"==typeof e.state&&(e.state.startsWith("/")||e.state.startsWith("http"))&&(i=e.state),i)return`url("${i}")`}break}}return"none"}static get styles(){return o.AH`
      /* Outer design container that applies design properties */
      .external-card-module-container {
        width: 100%;
        box-sizing: border-box;
        overflow-anchor: none; /* Prevent scroll anchoring on mobile when cards update */
      }

      /* Container works in both flex and grid layouts */
      .external-card-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto; /* For flex parent contexts (horizontal layouts) */
        min-width: 0; /* Allow flex shrinking below content size */
        min-height: 0; /* Allow flex shrinking below content size */
        overflow-anchor: none; /* Prevent scroll anchoring on mobile when cards update */
        isolation: isolate; /* Create new stacking context to prevent flicker */
        contain: layout; /* Contain layout changes within this element */
      }

      /* Child cards fill the container */
      .external-card-container > * {
        width: 100%;
        min-width: 0; /* Allow shrinking */
        flex: 1 1 auto; /* Let cards participate in flex */
        will-change: transform; /* Optimize repaints during updates */
        backface-visibility: hidden; /* Prevent flicker during redraws */
      }

      /* Unique class for targeting 3rd party cards separately */
      .uc-external-card {
        /* Can be styled via Design tab */
      }

      /* Placeholder styles for when card isn't configured */
      .external-card-placeholder,
      .external-card-error {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 32px 24px;
        text-align: center;
        color: var(--secondary-text-color);
        background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background)));
        border-radius: var(--ha-card-border-radius, 12px);
        border: var(--uc-pane-border, 1px dashed var(--divider-color));
        box-shadow: var(--uc-pane-shadow, none);
        min-height: 180px;
        gap: 12px;
      }

      .external-card-error {
        border-color: var(--error-color);
        color: var(--error-color);
      }

      .ultra-card-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        background: rgba(var(--rgb-primary-color), 0.1);
        border-radius: var(--uc-r-16, 16px);
        margin-bottom: 8px;
      }

      .card-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin: 0 0 4px 0;
      }

      .external-card-placeholder p,
      .external-card-error p {
        margin: 0;
        font-size: 14px;
      }

      .external-card-placeholder .subtitle,
      .external-card-error .subtitle {
        font-size: 13px;
        opacity: 0.8;
        margin: 0 0 8px 0;
      }

      .external-card-placeholder .instruction,
      .external-card-error .instruction {
        font-size: 12px;
        opacity: 0.7;
        margin: 0;
        font-style: italic;
      }

      .external-card-error .card-type {
        font-family: monospace;
        font-size: 13px;
        opacity: 0.9;
      }

      /* General tab wrapper - must allow overflow for dropdown menus */
      .external-card-general-tab {
        width: 100%;
        overflow: visible;
        position: relative;
      }
      
      .external-card-general-tab .settings-section {
        overflow: visible;
        position: relative;
      }
      
      /* Native editor container */
      .native-editor-container {
        min-height: 200px;
        overflow: visible; /* Allow dropdown menus to render outside container */
        position: relative;
      }
      
      /* Ensure 3rd party card editor dropdowns render above other content */
      .native-editor-container ha-select,
      .native-editor-container mwc-select,
      .native-editor-container ha-combo-box {
        position: relative;
        z-index: 100;
      }
      
      /* Allow dropdown menus from embedded editors to render properly */
      .native-editor-container ha-select::part(menu),
      .native-editor-container mwc-select::part(menu),
      .native-editor-container .mdc-menu-surface,
      .native-editor-container mwc-menu-surface,
      .native-editor-container mwc-menu {
        z-index: 9999 !important;
        position: fixed !important;
      }

      /* YAML tab styling */
      .external-card-yaml-tab {
        width: 100%;
        height: 100%;
        display: block;
        overflow: visible;
      }

      .external-card-yaml-tab .settings-section {
        width: 100%;
        height: 100%;
        display: block;
      }

      .yaml-editor-container {
        width: 100%;
        display: block;
        position: relative;
        z-index: 1;
      }

      .yaml-textarea {
        position: relative;
        z-index: 10;
        pointer-events: auto;
        cursor: text !important;
        user-select: text !important;
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
      }

      .yaml-textarea:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
      }

      .yaml-editor-fallback {
        width: 100%;
        display: block;
        position: relative;
        z-index: 1;
      }
    `}}}};