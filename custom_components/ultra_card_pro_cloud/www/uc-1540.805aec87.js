export const __webpack_esm_ids__=[1540];export const __webpack_esm_modules__={1540(e,t,i){i.d(t,{UltraExternalCardModule:()=>y,cleanupExternalCardCache:()=>m});var o=i(2618),r=i(7610),a=i(3794),n=i(7095),d=i(3307),s=i(1078),c=i(3962),l=i(382),p=i(3045);const g=new Map,u=new Map,v=new Map,h=new Map;function m(e){const t=g.get(e);t&&(clearTimeout(t),g.delete(e));const i=[];u.forEach((t,o)=>{o.startsWith(`${e}-`)&&i.push(o)}),i.forEach(e=>u.delete(e)),v.delete(e),h.delete(e)}class y extends d.m{constructor(){super(...arguments),this.metadata={type:"external_card",icon:"mdi:card-bulleted",title:"3rd Party Card",description:"Embed any 3rd party Home Assistant card",category:"interactive",author:"Ultra Card",version:"1.0.0",tags:["external","integration","3rd-party"]}}createDefault(){return{id:`external-card-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:"external_card",card_type:"",card_config:{},name:"",display_conditions:[]}}hasNativeEditor(e){if(!e)return!1;const t=`${e}-editor`,i=customElements.get(t);return void 0!==i&&!(i.prototype instanceof HTMLUnknownElement)}_hasConfigChanged(e,t){var i,o,r,a;return!(!e&&!t)&&(!e||!t||JSON.stringify(e)!==JSON.stringify(t)&&(e.entity!==t.entity||e.entity_id!==t.entity_id||(null===(i=e.settings)||void 0===i?void 0:i.entity)!==(null===(o=t.settings)||void 0===o?void 0:o.entity)||(null===(r=e.data)||void 0===r||r.entity,null===(a=t.data)||void 0===a||a.entity),!0))}renderGeneralTab(e,t,i,a){if(!e.card_type){const t="Custom YAML Card"===e.name;return o.qy`
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
      `}const n=e.card_type&&e.card_type.startsWith("hui-");if(!n&&!this.hasNativeEditor(e.card_type))return null;let d;if(n)d=e.name||e.card_type||"Native HA Card";else{const t=e.card_type?s.Mb.getCardInfo(e.card_type):null;d=(null==t?void 0:t.name)||e.card_type||"External Card"}return o.qy`
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
          <div class="native-editor-container" ${(0,r.K)(i=>{if(!i||!e.card_type)return;const o=`${e.card_type}-editor`,r=`${e.id}-${e.card_type}`;let n=u.get(r);const d=!n||n.tagName.toLowerCase()!==o,l=n&&!i.contains(n);if(d){const d=[];u.forEach((t,i)=>{i.startsWith(`${e.id}-`)&&i!==r&&d.push(i)}),d.forEach(e=>u.delete(e));try{if(n=document.createElement(o),!n||n instanceof HTMLUnknownElement)return u.delete(r),void(i.innerHTML='\n              <div style="padding: 40px; text-align: center; color: var(--secondary-text-color);">\n                <ha-icon icon="mdi:information-outline" style="font-size: 48px; opacity: 0.5; margin-bottom: 16px;"></ha-icon>\n                <p style="font-size: 14px; margin-bottom: 8px;">This card does not have a visual editor.</p>\n                <p style="font-size: 13px; opacity: 0.8;">Use the YAML tab to configure this card.</p>\n              </div>\n            ');let d=null;n.addEventListener("config-changed",i=>{if(i.stopPropagation(),i.stopImmediatePropagation(),i.detail&&i.detail.config){const o={};e.card_config&&Object.keys(e.card_config).forEach(t=>{const i=t.toLowerCase().replace(/[-\s]/g,"_");("card_mod"===i||i.startsWith("card_mod_"))&&(o[t]=e.card_config[t])});const r=Object.assign(Object.assign({},i.detail.config),o),n=JSON.stringify(r);if(h.get(e.id)===n)return;if(!this._hasConfigChanged(e.card_config||{},r))return;h.set(e.id,n),d=Object.assign({},r);const s=`${e.id}-live`;c.G.updateConfig(s,Object.assign({type:e.card_type},r),t);const l=g.get(e.id);l&&clearTimeout(l),v.set(e.id,!0);const p=window.setTimeout(()=>{d&&(a({card_config:d}),d=null),g.delete(e.id),setTimeout(()=>{v.set(e.id,!1)},200)},600);g.set(e.id,p)}}),u.set(r,n),i.innerHTML="",i.appendChild(n)}catch(e){return console.error("Failed to create native editor:",e),u.delete(r),void(i.innerHTML='\n            <div style="padding: 40px; text-align: center; color: var(--error-color);">\n              <ha-icon icon="mdi:alert-circle" style="font-size: 48px; opacity: 0.5; margin-bottom: 16px;"></ha-icon>\n              <p style="font-size: 14px; margin-bottom: 8px;">Failed to load editor</p>\n              <p style="font-size: 13px; opacity: 0.8;">Use the YAML tab to configure this card.</p>\n            </div>\n          ')}}else l&&(i.innerHTML="",i.appendChild(n));if(!i.hasAttribute("data-uc-events-attached")){i.setAttribute("data-uc-events-attached","true");const e=e=>{e.stopPropagation()};i.addEventListener("keydown",e,!1),i.addEventListener("keyup",e,!1),i.addEventListener("keypress",e,!1),i.addEventListener("input",e,!1),i.addEventListener("change",e,!1),i.addEventListener("focus",e,!1),i.addEventListener("blur",e,!1),i.addEventListener("click",e,!1),i.addEventListener("mousedown",e,!1),i.addEventListener("mouseup",e,!1),i.addEventListener("pointerdown",e,!1),i.addEventListener("pointerup",e,!1)}v.get(e.id)||((i,o)=>{try{const r=o.contains(i);t.lovelace&&(i.lovelace=t.lovelace);const a=function(e){if(!e||"object"!=typeof e)return e;const t=Object.assign({},e);return Object.keys(t).forEach(e=>{const i=e.toLowerCase().replace(/[-\s]/g,"_");("card_mod"===i||i.startsWith("card_mod_"))&&delete t[e]}),t}(e.card_config||{});e.card_type&&e.card_type.startsWith("hui-")&&a&&"object"==typeof a&&(a.type=(0,s.pd)(e.card_type));const n=JSON.stringify(i.config||{})!==JSON.stringify(a);if(!v.get(e.id)&&(!r||n)){i.hass=t,v.set(e.id,!0);try{"function"==typeof i.setConfig?i.setConfig(a):i.config=a}finally{setTimeout(()=>v.set(e.id,!1),50)}}i.hass=t}catch(e){console.error("Failed to update cached editor:",e)}})(n,i)})}></div>
        </div>
      </div>
    `}renderYamlTab(e,t,i,r){let a;try{const t=e.card_config||{};a=l.Ay.dump(t,{indent:2,lineWidth:-1,noRefs:!0,sortKeys:!1,flowLevel:-1,styles:{"!!null":"empty"}}),a=a.replace(/^\|\s*\n/,"")}catch(e){console.error("[UC] Failed to convert config to YAML:",e),a="# Error converting config to YAML\n"}return o.qy`
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
              .value=${a}
              .placeholder=${"type: custom:webrtc-camera\nurl: rtsp://user:pass@192.168.1.100:554/stream\n\n# Or any other card:\ntype: custom:button-card\nentity: sensor.example\nname: Example Card"}
              .minHeight=${300}
              .maxHeight=${600}
              @value-changed=${t=>{var i,o;const a=null===(o=null===(i=t.target)||void 0===i?void 0:i.closest(".yaml-editor-container"))||void 0===o?void 0:o.querySelector(".uc-yaml-parse-error");try{const i=l.Ay.load(t.detail.value);if(a&&(a.style.display="none",a.textContent=""),i&&"object"==typeof i&&i.type){let t=i.type;"string"==typeof t&&t.startsWith("custom:")&&(t=t.substring(7)),e.card_type!==t?(p.v&&console.log("[UC External Card] YAML type detected, updating card_type:",t),r({card_type:t,card_config:i})):r({card_config:i})}else r({card_config:i})}catch(e){if(console.error("Invalid YAML in editor:",e),a){const t=e instanceof Error?e.message:String(e);a.textContent=`Invalid YAML: ${t}`,a.style.display="block"}}}}
            ></ultra-template-editor>
            <div
              class="uc-yaml-parse-error"
              style="display: none; margin-top: 8px; padding: 8px 10px; color: var(--error-color, #db4437); font-size: 13px; font-family: monospace; white-space: pre-wrap; border: 1px solid var(--error-color, #db4437); border-radius: var(--uc-r-6, 6px); background: rgba(219, 68, 55, 0.08);"
            ></div>
          </div>
        </div>
      </div>
    `}renderPreview(e,t,i,d){var l,p,g,u,v,h,m,y,f,_,b,x,w,k,C,$,E,z,L,U,A,M,T,q,O,S,j,P,Y,I,N,H,W,F,G,D,R,J,K;const B=e,V={padding_top:null===(l=B.design)||void 0===l?void 0:l.padding_top,padding_bottom:null===(p=B.design)||void 0===p?void 0:p.padding_bottom,padding_left:null===(g=B.design)||void 0===g?void 0:g.padding_left,padding_right:null===(u=B.design)||void 0===u?void 0:u.padding_right,margin_top:null===(v=B.design)||void 0===v?void 0:v.margin_top,margin_bottom:null===(h=B.design)||void 0===h?void 0:h.margin_bottom,margin_left:null===(m=B.design)||void 0===m?void 0:m.margin_left,margin_right:null===(y=B.design)||void 0===y?void 0:y.margin_right,background_color:null===(f=B.design)||void 0===f?void 0:f.background_color,background_image:null===(_=B.design)||void 0===_?void 0:_.background_image,background_image_type:null===(b=B.design)||void 0===b?void 0:b.background_image_type,background_image_entity:null===(x=B.design)||void 0===x?void 0:x.background_image_entity,background_size:null===(w=B.design)||void 0===w?void 0:w.background_size,background_position:null===(k=B.design)||void 0===k?void 0:k.background_position,background_repeat:null===(C=B.design)||void 0===C?void 0:C.background_repeat,border_style:null===($=B.design)||void 0===$?void 0:$.border_style,border_width:null===(E=B.design)||void 0===E?void 0:E.border_width,border_color:null===(z=B.design)||void 0===z?void 0:z.border_color,border_radius:null===(L=B.design)||void 0===L?void 0:L.border_radius,box_shadow_h:null===(U=B.design)||void 0===U?void 0:U.box_shadow_h,box_shadow_v:null===(A=B.design)||void 0===A?void 0:A.box_shadow_v,box_shadow_blur:null===(M=B.design)||void 0===M?void 0:M.box_shadow_blur,box_shadow_spread:null===(T=B.design)||void 0===T?void 0:T.box_shadow_spread,box_shadow_color:null===(q=B.design)||void 0===q?void 0:q.box_shadow_color,position:null===(O=B.design)||void 0===O?void 0:O.position,top:null===(S=B.design)||void 0===S?void 0:S.top,bottom:null===(j=B.design)||void 0===j?void 0:j.bottom,left:null===(P=B.design)||void 0===P?void 0:P.left,right:null===(Y=B.design)||void 0===Y?void 0:Y.right,z_index:null===(I=B.design)||void 0===I?void 0:I.z_index,width:null===(N=B.design)||void 0===N?void 0:N.width,height:null===(H=B.design)||void 0===H?void 0:H.height,max_width:null===(W=B.design)||void 0===W?void 0:W.max_width,max_height:null===(F=B.design)||void 0===F?void 0:F.max_height,min_width:null===(G=B.design)||void 0===G?void 0:G.min_width,min_height:null===(D=B.design)||void 0===D?void 0:D.min_height,overflow:null===(R=B.design)||void 0===R?void 0:R.overflow,clip_path:null===(J=B.design)||void 0===J?void 0:J.clip_path,backdrop_filter:null===(K=B.design)||void 0===K?void 0:K.backdrop_filter},Q={padding:V.padding_top||V.padding_bottom||V.padding_left||V.padding_right||B.padding_top||B.padding_bottom||B.padding_left||B.padding_right?`${this.addPixelUnit(V.padding_top||B.padding_top)||"0px"} ${this.addPixelUnit(V.padding_right||B.padding_right)||"0px"} ${this.addPixelUnit(V.padding_bottom||B.padding_bottom)||"0px"} ${this.addPixelUnit(V.padding_left||B.padding_left)||"0px"}`:"0px",margin:V.margin_top||V.margin_bottom||V.margin_left||V.margin_right||B.margin_top||B.margin_bottom||B.margin_left||B.margin_right?`${V.margin_top||B.margin_top||"0px"} ${V.margin_right||B.margin_right||"0px"} ${V.margin_bottom||B.margin_bottom||"0px"} ${V.margin_left||B.margin_left||"0px"}`:"0",background:V.background_color||B.background_color||"transparent",backgroundImage:this.getBackgroundImageCSS(Object.assign(Object.assign({},B),V),t,i),backgroundSize:V.background_size||B.background_size||"cover",backgroundPosition:V.background_position||B.background_position||"center",backgroundRepeat:V.background_repeat||B.background_repeat||"no-repeat",border:(V.border_style||B.border_style)&&"none"!==(V.border_style||B.border_style)?`${V.border_width||B.border_width||"1px"} ${V.border_style||B.border_style} ${V.border_color||B.border_color||"var(--divider-color)"}`:"none",borderRadius:this.addPixelUnit(V.border_radius||B.border_radius)||"0",position:V.position||B.position||"relative",top:V.top||B.top||"auto",bottom:V.bottom||B.bottom||"auto",left:V.left||B.left||"auto",right:V.right||B.right||"auto",zIndex:V.z_index||B.z_index||"auto",width:V.width||B.width||"100%",height:V.height||B.height||"auto",maxWidth:V.max_width||B.max_width||"none",maxHeight:V.max_height||B.max_height||"none",minWidth:V.min_width||B.min_width||"none",minHeight:V.min_height||B.min_height||"auto",overflow:V.overflow||B.overflow||"visible",clipPath:V.clip_path||B.clip_path||"none",backdropFilter:V.backdrop_filter||B.backdrop_filter||"none",boxShadow:(V.box_shadow_h||B.box_shadow_h)&&(V.box_shadow_v||B.box_shadow_v)?`${V.box_shadow_h||B.box_shadow_h||"0"} ${V.box_shadow_v||B.box_shadow_v||"0"} ${V.box_shadow_blur||B.box_shadow_blur||"0"} ${V.box_shadow_spread||B.box_shadow_spread||"0"} ${V.box_shadow_color||B.box_shadow_color||"rgba(0,0,0,0.1)"}`:"none",boxSizing:"border-box",display:"flex",flexDirection:"column"};if(!e.card_type){const t="Custom YAML Card"===e.name;return o.qy`
        <div class="external-card-module-container" style=${this.styleObjectToCss(Q)}>
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
        <div class="external-card-module-container" style=${this.styleObjectToCss(Q)}>
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
      `}const X=e.card_type.startsWith("custom:")?e.card_type.substring(7):e.card_type;if(!s.Mb.isCardAvailable(X))return o.qy`
        <div class="external-card-module-container" style=${this.styleObjectToCss(Q)}>
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
      `;const Z=i=>{if(!(i&&i instanceof HTMLElement))return;let o=e.id;"live"===d?o=`${e.id}-live`:"ha-preview"===d&&(o=`${e.id}-ha-preview`);const r=i.firstElementChild,a=i._ucInitialized===o,n=c.G.hasContainer(o);if(a&&r&&n){if(t){const i=Object.assign({type:e.card_type},e.card_config||{});c.G.getContainer(o,e.card_type,i,t)}return}if(n&&!r){const r=Object.assign({type:e.card_type},e.card_config||{}),a=c.G.getContainer(o,e.card_type,r,t);return i.appendChild(a),void(i._ucInitialized=o)}const s=Object.assign({type:e.card_type},e.card_config||{}),l=c.G.getContainer(o,e.card_type,s,t);r!==l&&(r&&i.removeChild(r),i.appendChild(l),n||setTimeout(()=>{l&&window.dispatchEvent(new Event("resize"))},100));const p=e.card_type.startsWith("custom:")?e.card_type.substring(7):e.card_type;if(p.includes("apexcharts")){const e=l.querySelector(p);e&&(setTimeout(()=>{e.isConnected&&t&&(e.hass=t,"function"==typeof e.requestUpdate&&e.requestUpdate(),window.dispatchEvent(new Event("resize")))},100),setTimeout(()=>{e.isConnected&&t&&(e.hass=t,"function"==typeof e.requestUpdate&&e.requestUpdate(),window.dispatchEvent(new Event("resize")))},300),setTimeout(()=>{e.isConnected&&t&&(e.hass=t,"function"==typeof e.requestUpdate&&e.requestUpdate(),window.dispatchEvent(new Event("resize")))},600))}if(p.includes("webrtc-camera")||p.includes("webrtc")){const i=l.firstElementChild;i&&(setTimeout(()=>{i.isConnected&&t&&(i.hass=t,setTimeout(()=>{if("function"==typeof i.setConfig)try{const t=Object.assign({type:"custom:webrtc-camera"},e.card_config||{});i.setConfig(t)}catch(e){}if("function"==typeof i.play)try{i.play()}catch(e){}},50),"function"==typeof i.requestUpdate&&i.requestUpdate(),"function"==typeof i.refresh&&i.refresh(),window.dispatchEvent(new Event("resize")))},200),setTimeout(()=>{if(i.isConnected&&t){if(i.hass=t,"function"==typeof i.play)try{i.play()}catch(e){}"function"==typeof i.requestUpdate&&i.requestUpdate(),"function"==typeof i.refresh&&i.refresh(),window.dispatchEvent(new Event("resize"))}},500),setTimeout(()=>{if(i.isConnected&&t){if(i.hass=t,"function"==typeof i.play)try{i.play()}catch(e){}"function"==typeof i.requestUpdate&&i.requestUpdate(),"function"==typeof i.refresh&&i.refresh(),window.dispatchEvent(new Event("resize"))}},1e3),setTimeout(()=>{if(i.isConnected&&t){if(i.hass=t,"function"==typeof i.play)try{i.play()}catch(e){}"function"==typeof i.requestUpdate&&i.requestUpdate(),window.dispatchEvent(new Event("resize"))}},2e3))}i._ucInitialized=o},ee=this.getHoverEffectClass(e),te=this.buildStyleString(this.buildDesignStyles(e,t));return this.wrapWithAnimation(o.qy`${(0,n.a)([e.id,e.card_type],()=>o.qy`
        <div class="external-card-module-container ${ee}" style="display: flex; flex-direction: column; ${te}">
          ${(0,a.P)(o.qy`
            <div
              ${(0,r.K)(Z)}
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
        </div>
      `)}`,e,t)}getBackgroundImageCSS(e,t,i){var o,r;if(!e.background_image_type||"none"===e.background_image_type)return"none";switch(e.background_image_type){case"upload":case"url":if(e.background_image)return`url("${e.background_image}")`;break;case"entity":{const a=this.resolveEntity(e.background_image_entity,i);if(a&&(null==t?void 0:t.states[a])){const e=t.states[a];let i="";if((null===(o=e.attributes)||void 0===o?void 0:o.entity_picture)?i=e.attributes.entity_picture:(null===(r=e.attributes)||void 0===r?void 0:r.image)?i=e.attributes.image:e.state&&"string"==typeof e.state&&(e.state.startsWith("/")||e.state.startsWith("http"))&&(i=e.state),i)return`url("${i}")`}break}}return"none"}static get styles(){return o.AH`
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