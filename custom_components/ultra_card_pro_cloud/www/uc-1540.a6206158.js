export const __webpack_esm_ids__=[1540];export const __webpack_esm_modules__={1540(e,t,i){i.d(t,{UltraExternalCardModule:()=>b,cleanupExternalCardCache:()=>_,invalidateExternalCardCache:()=>f});var o=i(2618),r=i(7610),a=i(3794),n=i(7095),d=i(7475),s=i(1078),l=i(3962),c=i(3767),p=(i(378),i(382));const u=new Map,g=new Map,v=new Map,h=new Map;let m=null,y=0;function f(){m=null,y=0}function _(e){const t=u.get(e);t&&(clearTimeout(t),u.delete(e));const i=[];g.forEach((t,o)=>{o.startsWith(`${e}-`)&&i.push(o)}),i.forEach(e=>g.delete(e)),v.delete(e),h.delete(e),f()}class b extends d.m{constructor(){super(...arguments),this.metadata={type:"external_card",icon:"mdi:card-bulleted",title:"3rd Party Card",description:"Embed any 3rd party Home Assistant card",category:"interactive",author:"Ultra Card",version:"1.0.0",tags:["external","integration","3rd-party"]}}createDefault(){return{id:`external-card-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:"external_card",card_type:"",card_config:{},name:"",display_conditions:[]}}hasNativeEditor(e){if(!e)return!1;const t=`${e}-editor`,i=customElements.get(t);return void 0!==i&&!(i.prototype instanceof HTMLUnknownElement)}_hasConfigChanged(e,t){var i,o,r,a;return!(!e&&!t)&&(!e||!t||JSON.stringify(e)!==JSON.stringify(t)&&(e.entity!==t.entity||e.entity_id!==t.entity_id||(null===(i=e.settings)||void 0===i?void 0:i.entity)!==(null===(o=t.settings)||void 0===o?void 0:o.entity)||(null===(r=e.data)||void 0===r||r.entity,null===(a=t.data)||void 0===a||a.entity),!0))}_handleRefreshLock(e,t,i,o){var r,a,n,d,s,l,p,u,g;e.stopPropagation();try{const e=Array.from(document.querySelectorAll("ultra-card")),v=(0,c.Vo)();for(const t of e){const e=null==t?void 0:t.config;if(!e)continue;const i=(null===(r=null==t?void 0:t.dataset)||void 0===r?void 0:r.ucInstanceId)||(0,c.yp)(e);try{c.O.register(i,v,e),null===(a=t.requestUpdate)||void 0===a||a.call(t)}catch(e){}}const h=c.O.evaluate(i);if(!h.isPro&&h.totalThirdParty<=5)return void(null===(n=this.requestUpdate)||void 0===n||n.call(this));const m=(null==this?void 0:this.host)||void 0;let y=(null===(d=null==m?void 0:m.dataset)||void 0===d?void 0:d.ucInstanceId)||(null==o?void 0:o.__ucInstanceId)||(0,c.yp)(o);const f=null===(l=(s=c.O).getCardIdForConfig)||void 0===l?void 0:l.call(s,o);f&&(y=f);const _=`${v}:${y}:${t.id}`;(null===(u=null===(p=h.allowedKeys)||void 0===p?void 0:p.has)||void 0===u?void 0:u.call(p,_))&&(null===(g=this.requestUpdate)||void 0===g||g.call(this))}catch(e){}}_extractTimestamp(e){const t=e.match(/external-card-(\d+)-/);return t?parseInt(t[1],10):0}_getAllExternalModules(e){var t;if(!(null===(t=null==e?void 0:e.layout)||void 0===t?void 0:t.rows))return[];const i=[];return e.layout.rows.forEach(e=>{e.columns.forEach(e=>{var t;null===(t=e.modules)||void 0===t||t.forEach(e=>{"external_card"===e.type&&i.push(e)})})}),i}async _refreshAllowedIdsCache(e){try{const{ucDashboardScannerService:t}=await Promise.resolve().then(()=>i(8980));t.initialize(e);const o=await t.scanAllDashboards(),r=[];o.cards.forEach(e=>{const t=e.config;t.layout&&t.layout.rows&&t.layout.rows.forEach(e=>{var t;null===(t=e.columns)||void 0===t||t.forEach(e=>{var t;null===(t=e.modules)||void 0===t||t.forEach(e=>{if("external_card"===e.type&&e.id){const t=this._extractTimestamp(e.id);r.push({id:e.id,timestamp:t})}})})})}),r.sort((e,t)=>e.timestamp-t.timestamp);const a=new Set(r.slice(0,5).map(e=>e.id));m=a,y=Date.now()}catch(e){console.error("[UC External Card] Failed to refresh allowed IDs cache:",e)}}_shouldLockModule(e,t,i){return null==t||t.editMode,!1}renderGeneralTab(e,t,i,a){if(!e.card_type){const t="Custom YAML Card"===e.name;return o.qy`
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
            style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: var(--primary-color); text-transform: uppercase;"
          >
            USING ${d.toUpperCase()}'S NATIVE EDITOR
          </div>
          <div
            class="section-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;"
          >
            Configure this 3rd party card using its native configuration interface.
          </div>
          <div class="native-editor-container" ${(0,r.K)(i=>{if(!i||!e.card_type)return;const o=`${e.card_type}-editor`,r=`${e.id}-${e.card_type}`;let n=g.get(r);const d=!n||n.tagName.toLowerCase()!==o,c=n&&!i.contains(n);if(d){const d=[];g.forEach((t,i)=>{i.startsWith(`${e.id}-`)&&i!==r&&d.push(i)}),d.forEach(e=>g.delete(e));try{if(n=document.createElement(o),!n||n instanceof HTMLUnknownElement)return g.delete(r),void(i.innerHTML='\n              <div style="padding: 40px; text-align: center; color: var(--secondary-text-color);">\n                <ha-icon icon="mdi:information-outline" style="font-size: 48px; opacity: 0.5; margin-bottom: 16px;"></ha-icon>\n                <p style="font-size: 14px; margin-bottom: 8px;">This card does not have a visual editor.</p>\n                <p style="font-size: 13px; opacity: 0.8;">Use the YAML tab to configure this card.</p>\n              </div>\n            ');let d=null;n.addEventListener("config-changed",i=>{if(i.stopPropagation(),i.stopImmediatePropagation(),i.detail&&i.detail.config){const o={};e.card_config&&Object.keys(e.card_config).forEach(t=>{const i=t.toLowerCase().replace(/[-\s]/g,"_");("card_mod"===i||i.startsWith("card_mod_"))&&(o[t]=e.card_config[t])});const r=Object.assign(Object.assign({},i.detail.config),o),n=JSON.stringify(r);if(h.get(e.id)===n)return;if(!this._hasConfigChanged(e.card_config||{},r))return;h.set(e.id,n),d=Object.assign({},r);const s=`${e.id}-live`;l.G.updateConfig(s,Object.assign({type:e.card_type},r),t);const c=u.get(e.id);c&&clearTimeout(c),v.set(e.id,!0);const p=window.setTimeout(()=>{d&&(a({card_config:d}),d=null),u.delete(e.id),setTimeout(()=>{v.set(e.id,!1)},200)},600);u.set(e.id,p)}}),g.set(r,n),i.innerHTML="",i.appendChild(n)}catch(e){return console.error("Failed to create native editor:",e),g.delete(r),void(i.innerHTML='\n            <div style="padding: 40px; text-align: center; color: var(--error-color);">\n              <ha-icon icon="mdi:alert-circle" style="font-size: 48px; opacity: 0.5; margin-bottom: 16px;"></ha-icon>\n              <p style="font-size: 14px; margin-bottom: 8px;">Failed to load editor</p>\n              <p style="font-size: 13px; opacity: 0.8;">Use the YAML tab to configure this card.</p>\n            </div>\n          ')}}else c&&(i.innerHTML="",i.appendChild(n));if(!i.hasAttribute("data-uc-events-attached")){i.setAttribute("data-uc-events-attached","true");const e=e=>{e.stopPropagation()};i.addEventListener("keydown",e,!1),i.addEventListener("keyup",e,!1),i.addEventListener("keypress",e,!1),i.addEventListener("input",e,!1),i.addEventListener("change",e,!1),i.addEventListener("focus",e,!1),i.addEventListener("blur",e,!1),i.addEventListener("click",e,!1),i.addEventListener("mousedown",e,!1),i.addEventListener("mouseup",e,!1),i.addEventListener("pointerdown",e,!1),i.addEventListener("pointerup",e,!1)}v.get(e.id)||((i,o)=>{try{const r=o.contains(i);t.lovelace&&(i.lovelace=t.lovelace);const a=function(e){if(!e||"object"!=typeof e)return e;const t=Object.assign({},e);return Object.keys(t).forEach(e=>{const i=e.toLowerCase().replace(/[-\s]/g,"_");("card_mod"===i||i.startsWith("card_mod_"))&&delete t[e]}),t}(e.card_config||{});e.card_type&&e.card_type.startsWith("hui-")&&a&&"object"==typeof a&&(a.type=(0,s.pd)(e.card_type));const n=JSON.stringify(i.config||{})!==JSON.stringify(a);if(!v.get(e.id)&&(!r||n)){i.hass=t,v.set(e.id,!0);try{"function"==typeof i.setConfig?i.setConfig(a):i.config=a}finally{setTimeout(()=>v.set(e.id,!1),50)}}i.hass=t}catch(e){console.error("Failed to update cached editor:",e)}})(n,i)})}></div>
        </div>
      </div>
    `}renderYamlTab(e,t,i,r){let a;try{const t=e.card_config||{};a=p.Ay.dump(t,{indent:2,lineWidth:-1,noRefs:!0,sortKeys:!1,flowLevel:-1,styles:{"!!null":"empty"}}),a=a.replace(/^\|\s*\n/,"")}catch(e){console.error("[UC] Failed to convert config to YAML:",e),a="# Error converting config to YAML\n"}return o.qy`
      ${this.injectUcFormStyles()}
      <div class="external-card-yaml-tab" style="width: 100%; height: 100%; display: block;">
        <div class="settings-section" style="width: 100%; height: 100%; display: block;">
          <div
            class="section-title"
            style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: var(--primary-color); text-transform: uppercase;"
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
              @value-changed=${t=>{var i,o;const a=null===(o=null===(i=t.target)||void 0===i?void 0:i.closest(".yaml-editor-container"))||void 0===o?void 0:o.querySelector(".uc-yaml-parse-error");try{const i=p.Ay.load(t.detail.value);if(a&&(a.style.display="none",a.textContent=""),i&&"object"==typeof i&&i.type){let t=i.type;"string"==typeof t&&t.startsWith("custom:")&&(t=t.substring(7)),e.card_type!==t?(console.log("[UC External Card] YAML type detected, updating card_type:",t),r({card_type:t,card_config:i})):r({card_config:i})}else r({card_config:i})}catch(e){if(console.error("Invalid YAML in editor:",e),a){const t=e instanceof Error?e.message:String(e);a.textContent=`Invalid YAML: ${t}`,a.style.display="block"}}}}
            ></ultra-template-editor>
            <div
              class="uc-yaml-parse-error"
              style="display: none; margin-top: 8px; padding: 8px 10px; color: var(--error-color, #db4437); font-size: 13px; font-family: monospace; white-space: pre-wrap; border: 1px solid var(--error-color, #db4437); border-radius: var(--uc-r-6, 6px); background: rgba(219, 68, 55, 0.08);"
            ></div>
          </div>
        </div>
      </div>
    `}renderPreview(e,t,i,d){var p,u,g,v,h,m,y,f,_,b,x,w,k,C,$,E,z,L,U,A,T,M,q,O,j,P,S,I,Y,N,H,W,F,D,G,R,J,K,B,V;const Z=e,Q={padding_top:null===(p=Z.design)||void 0===p?void 0:p.padding_top,padding_bottom:null===(u=Z.design)||void 0===u?void 0:u.padding_bottom,padding_left:null===(g=Z.design)||void 0===g?void 0:g.padding_left,padding_right:null===(v=Z.design)||void 0===v?void 0:v.padding_right,margin_top:null===(h=Z.design)||void 0===h?void 0:h.margin_top,margin_bottom:null===(m=Z.design)||void 0===m?void 0:m.margin_bottom,margin_left:null===(y=Z.design)||void 0===y?void 0:y.margin_left,margin_right:null===(f=Z.design)||void 0===f?void 0:f.margin_right,background_color:null===(_=Z.design)||void 0===_?void 0:_.background_color,background_image:null===(b=Z.design)||void 0===b?void 0:b.background_image,background_image_type:null===(x=Z.design)||void 0===x?void 0:x.background_image_type,background_image_entity:null===(w=Z.design)||void 0===w?void 0:w.background_image_entity,background_size:null===(k=Z.design)||void 0===k?void 0:k.background_size,background_position:null===(C=Z.design)||void 0===C?void 0:C.background_position,background_repeat:null===($=Z.design)||void 0===$?void 0:$.background_repeat,border_style:null===(E=Z.design)||void 0===E?void 0:E.border_style,border_width:null===(z=Z.design)||void 0===z?void 0:z.border_width,border_color:null===(L=Z.design)||void 0===L?void 0:L.border_color,border_radius:null===(U=Z.design)||void 0===U?void 0:U.border_radius,box_shadow_h:null===(A=Z.design)||void 0===A?void 0:A.box_shadow_h,box_shadow_v:null===(T=Z.design)||void 0===T?void 0:T.box_shadow_v,box_shadow_blur:null===(M=Z.design)||void 0===M?void 0:M.box_shadow_blur,box_shadow_spread:null===(q=Z.design)||void 0===q?void 0:q.box_shadow_spread,box_shadow_color:null===(O=Z.design)||void 0===O?void 0:O.box_shadow_color,position:null===(j=Z.design)||void 0===j?void 0:j.position,top:null===(P=Z.design)||void 0===P?void 0:P.top,bottom:null===(S=Z.design)||void 0===S?void 0:S.bottom,left:null===(I=Z.design)||void 0===I?void 0:I.left,right:null===(Y=Z.design)||void 0===Y?void 0:Y.right,z_index:null===(N=Z.design)||void 0===N?void 0:N.z_index,width:null===(H=Z.design)||void 0===H?void 0:H.width,height:null===(W=Z.design)||void 0===W?void 0:W.height,max_width:null===(F=Z.design)||void 0===F?void 0:F.max_width,max_height:null===(D=Z.design)||void 0===D?void 0:D.max_height,min_width:null===(G=Z.design)||void 0===G?void 0:G.min_width,min_height:null===(R=Z.design)||void 0===R?void 0:R.min_height,overflow:null===(J=Z.design)||void 0===J?void 0:J.overflow,clip_path:null===(K=Z.design)||void 0===K?void 0:K.clip_path,backdrop_filter:null===(B=Z.design)||void 0===B?void 0:B.backdrop_filter},X={padding:Q.padding_top||Q.padding_bottom||Q.padding_left||Q.padding_right||Z.padding_top||Z.padding_bottom||Z.padding_left||Z.padding_right?`${this.addPixelUnit(Q.padding_top||Z.padding_top)||"0px"} ${this.addPixelUnit(Q.padding_right||Z.padding_right)||"0px"} ${this.addPixelUnit(Q.padding_bottom||Z.padding_bottom)||"0px"} ${this.addPixelUnit(Q.padding_left||Z.padding_left)||"0px"}`:"0px",margin:Q.margin_top||Q.margin_bottom||Q.margin_left||Q.margin_right||Z.margin_top||Z.margin_bottom||Z.margin_left||Z.margin_right?`${Q.margin_top||Z.margin_top||"0px"} ${Q.margin_right||Z.margin_right||"0px"} ${Q.margin_bottom||Z.margin_bottom||"0px"} ${Q.margin_left||Z.margin_left||"0px"}`:"0",background:Q.background_color||Z.background_color||"transparent",backgroundImage:this.getBackgroundImageCSS(Object.assign(Object.assign({},Z),Q),t,i),backgroundSize:Q.background_size||Z.background_size||"cover",backgroundPosition:Q.background_position||Z.background_position||"center",backgroundRepeat:Q.background_repeat||Z.background_repeat||"no-repeat",border:(Q.border_style||Z.border_style)&&"none"!==(Q.border_style||Z.border_style)?`${Q.border_width||Z.border_width||"1px"} ${Q.border_style||Z.border_style} ${Q.border_color||Z.border_color||"var(--divider-color)"}`:"none",borderRadius:this.addPixelUnit(Q.border_radius||Z.border_radius)||"0",position:Q.position||Z.position||"relative",top:Q.top||Z.top||"auto",bottom:Q.bottom||Z.bottom||"auto",left:Q.left||Z.left||"auto",right:Q.right||Z.right||"auto",zIndex:Q.z_index||Z.z_index||"auto",width:Q.width||Z.width||"100%",height:Q.height||Z.height||"auto",maxWidth:Q.max_width||Z.max_width||"none",maxHeight:Q.max_height||Z.max_height||"none",minWidth:Q.min_width||Z.min_width||"none",minHeight:Q.min_height||Z.min_height||"auto",overflow:Q.overflow||Z.overflow||"visible",clipPath:Q.clip_path||Z.clip_path||"none",backdropFilter:Q.backdrop_filter||Z.backdrop_filter||"none",boxShadow:(Q.box_shadow_h||Z.box_shadow_h)&&(Q.box_shadow_v||Z.box_shadow_v)?`${Q.box_shadow_h||Z.box_shadow_h||"0"} ${Q.box_shadow_v||Z.box_shadow_v||"0"} ${Q.box_shadow_blur||Z.box_shadow_blur||"0"} ${Q.box_shadow_spread||Z.box_shadow_spread||"0"} ${Q.box_shadow_color||Z.box_shadow_color||"rgba(0,0,0,0.1)"}`:"none",boxSizing:"border-box",display:"flex",flexDirection:"column"};if(!e.card_type){const t="Custom YAML Card"===e.name;return o.qy`
        <div class="external-card-module-container" style=${this.styleObjectToCss(X)}>
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
        <div class="external-card-module-container" style=${this.styleObjectToCss(X)}>
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
      `}const ee=e.card_type.startsWith("custom:")?e.card_type.substring(7):e.card_type;if(!s.Mb.isCardAvailable(ee))return o.qy`
        <div class="external-card-module-container" style=${this.styleObjectToCss(X)}>
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
      `;const te=i=>{if(!(i&&i instanceof HTMLElement))return;let o=e.id;"live"===d?o=`${e.id}-live`:"ha-preview"===d&&(o=`${e.id}-ha-preview`);const r=i.firstElementChild,a=i._ucInitialized===o,n=l.G.hasContainer(o);if(a&&r&&n){if(t){const i=Object.assign({type:e.card_type},e.card_config||{});l.G.getContainer(o,e.card_type,i,t)}return}if(n&&!r){const r=Object.assign({type:e.card_type},e.card_config||{}),a=l.G.getContainer(o,e.card_type,r,t);return i.appendChild(a),void(i._ucInitialized=o)}const s=Object.assign({type:e.card_type},e.card_config||{}),c=l.G.getContainer(o,e.card_type,s,t);r!==c&&(r&&i.removeChild(r),i.appendChild(c),n||setTimeout(()=>{c&&window.dispatchEvent(new Event("resize"))},100));const p=e.card_type.startsWith("custom:")?e.card_type.substring(7):e.card_type;if(p.includes("apexcharts")){const e=c.querySelector(p);e&&(setTimeout(()=>{e.isConnected&&t&&(e.hass=t,"function"==typeof e.requestUpdate&&e.requestUpdate(),window.dispatchEvent(new Event("resize")))},100),setTimeout(()=>{e.isConnected&&t&&(e.hass=t,"function"==typeof e.requestUpdate&&e.requestUpdate(),window.dispatchEvent(new Event("resize")))},300),setTimeout(()=>{e.isConnected&&t&&(e.hass=t,"function"==typeof e.requestUpdate&&e.requestUpdate(),window.dispatchEvent(new Event("resize")))},600))}if(p.includes("webrtc-camera")||p.includes("webrtc")){const i=c.firstElementChild;i&&(setTimeout(()=>{i.isConnected&&t&&(i.hass=t,setTimeout(()=>{if("function"==typeof i.setConfig)try{const t=Object.assign({type:"custom:webrtc-camera"},e.card_config||{});i.setConfig(t)}catch(e){}if("function"==typeof i.play)try{i.play()}catch(e){}},50),"function"==typeof i.requestUpdate&&i.requestUpdate(),"function"==typeof i.refresh&&i.refresh(),window.dispatchEvent(new Event("resize")))},200),setTimeout(()=>{if(i.isConnected&&t){if(i.hass=t,"function"==typeof i.play)try{i.play()}catch(e){}"function"==typeof i.requestUpdate&&i.requestUpdate(),"function"==typeof i.refresh&&i.refresh(),window.dispatchEvent(new Event("resize"))}},500),setTimeout(()=>{if(i.isConnected&&t){if(i.hass=t,"function"==typeof i.play)try{i.play()}catch(e){}"function"==typeof i.requestUpdate&&i.requestUpdate(),"function"==typeof i.refresh&&i.refresh(),window.dispatchEvent(new Event("resize"))}},1e3),setTimeout(()=>{if(i.isConnected&&t){if(i.hass=t,"function"==typeof i.play)try{i.play()}catch(e){}"function"==typeof i.requestUpdate&&i.requestUpdate(),window.dispatchEvent(new Event("resize"))}},2e3))}i._ucInitialized=o};if(!d&&this._shouldLockModule(e,t,i)){const i=null!==(V=c.O.evaluate(t).totalThirdParty)&&void 0!==V?V:0;return o.qy`${(0,n.a)([e.id,e.card_type],()=>o.qy`
          <div
            class="external-card-module-container"
            style=${this.styleObjectToCss(X)}
          >
            <div
              class="pro-module-locked"
              style="position: relative; min-height: 200px; display: flex; align-items: center; justify-content: center;"
            >
              ${(0,a.P)(o.qy`
                <div
                  ${(0,r.K)(te)}
                  class="external-card-container uc-external-card"
                  style="
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  flex: 1 1 auto;
                  min-width: 0;
                  min-height: 0;
                  filter: blur(8px);
                  opacity: 0.5;
                  pointer-events: none;
                "
                >
                  <!-- Card will be mounted here -->
                </div>
              `)}
              <div
                class="pro-module-overlay"
                style="
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(8px);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: var(--uc-r-12, 12px);
                z-index: 10001;
                pointer-events: all;
                cursor: default;
                touch-action: manipulation;
              "
              >
                <div
                  class="pro-module-message"
                  style="
                  text-align: center;
                  color: white;
                  padding: 6px;
                  max-width: 95%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  gap: 4px;
                  pointer-events: all;
                "
                >
                  <ha-icon icon="mdi:lock" style="font-size: 20px; flex-shrink: 0;"></ha-icon>
                  <div
                    style="font-size: 10px; opacity: 0.9; line-height: 1.2; white-space: nowrap;"
                  >
                    ${i}/5 3rd Party Cards
                  </div>
                  <div
                    style="
                    margin-top: 6px;
                    font-size: 10px;
                    opacity: 0.7;
                    white-space: nowrap;
                  "
                  >
                    Refresh For Check
                  </div>
                </div>
              </div>
            </div>
          </div>
        `)}`}const ie=this.getHoverEffectClass(e),oe=this.buildStyleString(this.buildDesignStyles(e,t));return this.wrapWithAnimation(o.qy`${(0,n.a)([e.id,e.card_type],()=>o.qy`
        <div class="external-card-module-container ${ie}" style="display: flex; flex-direction: column; ${oe}">
          ${(0,a.P)(o.qy`
            <div
              ${(0,r.K)(te)}
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
      `)}`,e,t)}getBackgroundImageCSS(e,t,i){var o,r;if(!e.background_image_type||"none"===e.background_image_type)return"none";switch(e.background_image_type){case"upload":case"url":if(e.background_image)return`url("${e.background_image}")`;break;case"entity":{const a=this.resolveEntity(e.background_image_entity,i);if(a&&(null==t?void 0:t.states[a])){const e=t.states[a];let i="";if((null===(o=e.attributes)||void 0===o?void 0:o.entity_picture)?i=e.attributes.entity_picture:(null===(r=e.attributes)||void 0===r?void 0:r.image)?i=e.attributes.image:e.state&&"string"==typeof e.state&&(e.state.startsWith("/")||e.state.startsWith("http"))&&(i=e.state),i)return`url("${i}")`}break}}return"none"}styleObjectToCss(e){return Object.entries(e).map(([e,t])=>`${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}: ${t}`).join("; ")}addPixelUnit(e){return e?/^\d+$/.test(e)?`${e}px`:/^[\d\s]+$/.test(e)?e.split(" ").map(e=>e.trim()?`${e}px`:e).join(" "):e:e}static get styles(){return o.AH`
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