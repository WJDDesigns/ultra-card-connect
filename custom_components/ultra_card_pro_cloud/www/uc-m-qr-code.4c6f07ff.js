export const __webpack_esm_ids__=[8794];export const __webpack_esm_modules__={3510(e,t,o){o.d(t,{UltraQrCodeModule:()=>C});var i=o(2618),r=o(7283),n=o.n(r),a=o(3307),l=o(5147),s=o(8938),d=o(378),c=o(6478),_=o(5320),u=o(5121),g=o(5155),p=o(7907);const m=e=>"string"==typeof e?e.trim():"";function h(e){return e.replace(/([\\;,:"])/g,"\\$1")}function v(e){return e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/([;,])/g,"\\$1")}function y(e,t=!0){const o=e.trim();return(t&&o.startsWith("+")?"+":"")+o.replace(/[^\d]/g,"")}function f(e,t,o){var i,r;const n=m(e),a=n?null==o?void 0:o[n]:void 0;if(a){const e=Number(null===(i=a.attributes)||void 0===i?void 0:i.latitude),t=Number(null===(r=a.attributes)||void 0===r?void 0:r.longitude);if(Number.isFinite(e)&&Number.isFinite(t))return`${e},${t}`;const o=m(a.state);if(o&&!["unknown","unavailable","home","not_home"].includes(o))return o}return m(t)}const b=e=>/^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/.test(e);function w(e){const t=e.trim();if(!t)return"";if(/^https?:\/\//i.test(t))return t;const o=t.match(/^spotify:(track|album|playlist|artist|episode|show):([A-Za-z0-9]+)/);return o?`https://open.spotify.com/${o[1]}/${o[2]}`:""}const $={instagram:"https://www.instagram.com/",facebook:"https://www.facebook.com/",x:"https://x.com/",threads:"https://www.threads.net/@",tiktok:"https://www.tiktok.com/@",youtube:"https://www.youtube.com/@",linkedin:"https://www.linkedin.com/in/",github:"https://github.com/"};function q(e,t,o){const i=t||{};switch(e){case"wifi":return function(e){const t=m(e.wifi_ssid);if(!t)return"";const o=e.wifi_security||"WPA";let i=`WIFI:T:${o};S:${h(t)};`;return"nopass"!==o&&(i+=`P:${h(e.wifi_password||"")};`),e.wifi_hidden&&(i+="H:true;"),`${i};`}(i);case"location":return function(e,t){const o=f(e.location_entity,e.location_query,t);if(!o)return"";const i=encodeURIComponent(o),r=e.map_zoom&&e.map_zoom>0?Math.round(Math.min(21,e.map_zoom)):void 0;switch(e.maps_provider||"google"){case"apple":return`https://maps.apple.com/?${b(o)?`ll=${i}&q=${i}`:`q=${i}`}${r?`&z=${r}`:""}`;case"osm":if(b(o)){const[e,t]=o.split(",").map(e=>e.trim());return`https://www.openstreetmap.org/?mlat=${e}&mlon=${t}#map=${r||16}/${e}/${t}`}return`https://www.openstreetmap.org/search?query=${i}`;default:return r&&b(o)?`https://www.google.com/maps/@?api=1&map_action=map&center=${i}&zoom=${r}`:`https://www.google.com/maps/search/?api=1&query=${i}`}}(i,o);case"route":return function(e,t){const o=f(e.route_destination_entity,e.route_destination,t);if(!o)return"";const i=f(e.route_origin_entity,e.route_origin,t),r=e.travel_mode||"driving";switch(e.maps_provider||"google"){case"apple":{const e="walking"===r?"w":"transit"===r?"r":"d";return`https://maps.apple.com/?daddr=${encodeURIComponent(o)}${i?`&saddr=${encodeURIComponent(i)}`:""}&dirflg=${e}`}case"osm":return`https://www.openstreetmap.org/directions?engine=${"walking"===r?"fossgis_osrm_foot":"bicycling"===r?"fossgis_osrm_bike":"fossgis_osrm_car"}&route=${encodeURIComponent(`${i};${o}`)}`;default:{let t=`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(o)}`;return i&&(t+=`&origin=${encodeURIComponent(i)}`),t+=`&travelmode=${r}`,e.start_navigation&&(t+="&dir_action=navigate"),t}}}(i,o);case"whatsapp":return function(e){const t=y(e.phone||"",!1),o=m(e.message);return t||o?`https://wa.me/${t}${o?`?text=${encodeURIComponent(o)}`:""}`:""}(i);case"phone":return function(e){const t=y(e.phone||"");return t?`tel:${t}`:""}(i);case"sms":return function(e){const t=y(e.phone||"");if(!t)return"";const o=m(e.message);return o?`SMSTO:${t}:${o}`:`SMSTO:${t}`}(i);case"email":return function(e){const t=m(e.email);if(!t)return"";const o=[];return m(e.email_subject)&&o.push(`subject=${encodeURIComponent(m(e.email_subject))}`),m(e.message)&&o.push(`body=${encodeURIComponent(m(e.message))}`),`mailto:${t}${o.length?`?${o.join("&")}`:""}`}(i);case"contact":return function(e,t){var o;const i=m(e.contact_entity)?null==t?void 0:t[m(e.contact_entity)]:void 0,r=m(e.contact_name)||m(null===(o=null==i?void 0:i.attributes)||void 0===o?void 0:o.friendly_name),n=m(e.contact_phone),a=m(e.contact_email);if(!r&&!n&&!a)return"";const l=["BEGIN:VCARD","VERSION:3.0"];if(r){const e=r.split(/\s+/),t=e.length>1?e[e.length-1]:"",o=e.length>1?e.slice(0,-1).join(" "):r;l.push(`N:${v(t||"")};${v(o||"")};;;`),l.push(`FN:${v(r)}`)}return m(e.contact_org)&&l.push(`ORG:${v(m(e.contact_org))}`),n&&l.push(`TEL;TYPE=CELL:${n}`),a&&l.push(`EMAIL:${a}`),m(e.contact_address)&&l.push(`ADR:;;${v(m(e.contact_address))};;;;`),m(e.contact_url)&&l.push(`URL:${m(e.contact_url)}`),l.push("END:VCARD"),l.join("\n")}(i,o);case"spotify":return function(e,t){var o,i;const r=m(e.spotify_entity),n=r?null==t?void 0:t[r]:void 0;if(n){const e=w(String(null!==(i=null===(o=n.attributes)||void 0===o?void 0:o.media_content_id)&&void 0!==i?i:""));if(e)return e}return w(e.spotify_url||"")}(i,o);case"social":return function(e){const t=m(e.social_username);if(!t)return"";if(/^https?:\/\//i.test(t))return t;const o=t.replace(/^@/,"");return`${$[e.social_platform||"instagram"]}${encodeURIComponent(o)}`}(i);default:return""}}o(7921);const k="uc-qr-data-ready",x=new Map,S=new Set,U=new Map,P=new Set;function z(e,t){var o;if(!e.logo_enabled)return"";const i=e.logo_image_type||"url";if("url"===i||"upload"===i){const o=e.logo_url||"";return o?t?(0,p.VG)(t,o):o:""}if(!t)return"";const r=e.logo_image_entity;if(!r||!t.states[r])return"";const n=t.states[r];if("entity"===i){const e=null===(o=n.attributes)||void 0===o?void 0:o.entity_picture;return e?(0,p.VG)(t,String(e)):n.state?(0,p.VG)(t,n.state):""}if("attribute"===i){const o=e.logo_image_attribute||"";if(!o)return"";const i=o.split(".");let r=n.attributes;for(const e of i){if(null==r||"object"!=typeof r){r=void 0;break}r=r[e]}return null!=r?(0,p.VG)(t,String(r)):""}return""}const F=["qr_content","content"],T=[{value:"text",label:"Text / URL"},{value:"wifi",label:"Wi-Fi"},{value:"location",label:"Map location"},{value:"route",label:"Map route"},{value:"whatsapp",label:"WhatsApp chat"},{value:"phone",label:"Phone call"},{value:"sms",label:"Text message (SMS)"},{value:"email",label:"Email"},{value:"contact",label:"Contact card"},{value:"spotify",label:"Spotify"},{value:"social",label:"Social profile"}];class C extends a.m{constructor(){super(...arguments),this.metadata={type:"qr_code",title:"QR Code",description:"Generate QR codes from URL, text, template, or entity state",author:"WJD Designs",version:"1.0.0",icon:"mdi:qrcode",category:"content",tags:["qr","qrcode","pro","premium","barcode"]}}createDefault(e,t){return{id:e||this.generateId("qr_code"),type:"qr_code",content_mode:"static",content_static:"https://www.home-assistant.io",unified_template_mode:!1,unified_template:"",size:200,alignment:"center",show_label:!1,label_text:"",label_below:!0,fg_color:"#000000",bg_color:"#ffffff",error_correction:"M",qr_margin:1,dot_style:"square",corner_square_style:"square",corner_dot_style:"square",logo_enabled:!1,logo_image_type:"url",logo_url:"",logo_image_entity:"",logo_image_attribute:"",logo_size:.25,logo_margin:2,logo_hide_bg_dots:!0,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderActionsTab(e,t,o,i){return l.A.render(e,t,e=>i(e))}renderOtherTab(e,t,o,i){return s.X.render(e,t,e=>i(e))}renderGeneralTab(e,t,o,r){var n,a,l,s,_,u,g,m,h;const v=e,y=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",f=d.xd.checkIntegrationAuth(t);return"pro"===(null===(a=null==f?void 0:f.subscription)||void 0===a?void 0:a.tier)&&"active"===(null===(l=null==f?void 0:f.subscription)||void 0===l?void 0:l.status)?i.qy`
      ${this.injectUcFormStyles()}

      <!-- Content type -->
      ${this.renderSettingsSection((0,c.kg)("editor.qr_code.content_type",y,"Type"),(0,c.kg)("editor.qr_code.content_type_desc",y,"What the code is for. Pick a type and fill in the fields; Ultra Card builds the code for you."),[{title:(0,c.kg)("editor.qr_code.content_type",y,"Type"),description:"",hass:t,data:{content_type:v.content_type||"text"},schema:[this.selectField("content_type",T.map(e=>({value:e.value,label:(0,c.kg)(`editor.qr_code.type_${e.value}`,y,e.label)})))],onChange:e=>{r({content_type:e.detail.value.content_type}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
      ${v.content_type&&"text"!==v.content_type?this._renderContentTypeFields(v,t,o,r,y):this._renderTextSourceFields(v,t,o,r,y)}

      <!-- Display -->
      ${this.renderSettingsSection((0,c.kg)("editor.qr_code.display_title",y,"Display"),"",[{title:(0,c.kg)("editor.qr_code.alignment",y,"Alignment"),description:"",hass:t,data:{alignment:v.alignment||"center"},schema:[this.selectField("alignment",[{value:"left",label:(0,c.kg)("editor.qr_code.align_left",y,"Left")},{value:"center",label:(0,c.kg)("editor.qr_code.align_center",y,"Center")},{value:"right",label:(0,c.kg)("editor.qr_code.align_right",y,"Right")}])],onChange:e=>{r({alignment:e.detail.value.alignment}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.qr_code.show_label",y,"Show label"),description:"",hass:t,data:{show_label:null!==(s=v.show_label)&&void 0!==s&&s},schema:[this.booleanField("show_label")],onChange:e=>{r({show_label:e.detail.value.show_label}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
      ${this.renderSliderField((0,c.kg)("editor.qr_code.size",y,"Size"),(0,c.kg)("editor.qr_code.size_desc",y,"Width and height in pixels"),null!==(_=v.size)&&void 0!==_?_:200,200,64,512,8,e=>{r({size:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}
      ${v.show_label?i.qy`
            ${this.renderFieldSection((0,c.kg)("editor.qr_code.label_text",y,"Label text"),"",t,{label_text:v.label_text||""},[this.textField("label_text")],e=>{r({label_text:e.detail.value.label_text}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
            ${this.renderFieldSection((0,c.kg)("editor.qr_code.label_below",y,"Label below QR"),"",t,{label_below:!1!==v.label_below},[this.booleanField("label_below")],e=>{r({label_below:e.detail.value.label_below}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          `:""}

      <!-- Style -->
      ${this.renderSettingsSection((0,c.kg)("editor.qr_code.style_title",y,"Style"),"",[{title:(0,c.kg)("editor.qr_code.dot_style",y,"Dot pattern"),description:(0,c.kg)("editor.qr_code.dot_style_desc",y,"Shape of each individual data module"),hass:t,data:{dot_style:v.dot_style||"square"},schema:[this.selectField("dot_style",[{value:"square",label:(0,c.kg)("editor.qr_code.dot_square",y,"Square")},{value:"dots",label:(0,c.kg)("editor.qr_code.dot_dots",y,"Dots")},{value:"rounded",label:(0,c.kg)("editor.qr_code.dot_rounded",y,"Rounded")},{value:"extra-rounded",label:(0,c.kg)("editor.qr_code.dot_extra_rounded",y,"Extra Rounded")},{value:"classy",label:(0,c.kg)("editor.qr_code.dot_classy",y,"Classy")},{value:"classy-rounded",label:(0,c.kg)("editor.qr_code.dot_classy_rounded",y,"Classy Rounded")}])],onChange:e=>{r({dot_style:e.detail.value.dot_style}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.qr_code.corner_square_style",y,"Corner squares"),description:(0,c.kg)("editor.qr_code.corner_square_desc",y,"Shape of the three large corner finder squares"),hass:t,data:{corner_square_style:v.corner_square_style||"square"},schema:[this.selectField("corner_square_style",[{value:"square",label:(0,c.kg)("editor.qr_code.cs_square",y,"Square")},{value:"dot",label:(0,c.kg)("editor.qr_code.cs_dot",y,"Dot")},{value:"extra-rounded",label:(0,c.kg)("editor.qr_code.cs_extra_rounded",y,"Extra Rounded")}])],onChange:e=>{r({corner_square_style:e.detail.value.corner_square_style}),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,c.kg)("editor.qr_code.corner_dot_style",y,"Corner dots"),description:(0,c.kg)("editor.qr_code.corner_dot_desc",y,"Shape of the small inner dots inside each corner square"),hass:t,data:{corner_dot_style:v.corner_dot_style||"square"},schema:[this.selectField("corner_dot_style",[{value:"square",label:(0,c.kg)("editor.qr_code.cd_square",y,"Square")},{value:"dot",label:(0,c.kg)("editor.qr_code.cd_dot",y,"Dot")}])],onChange:e=>{r({corner_dot_style:e.detail.value.corner_dot_style}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

      <!-- Logo -->
      ${this.renderSettingsSection((0,c.kg)("editor.qr_code.logo_title",y,"Logo / Icon"),"",[{title:(0,c.kg)("editor.qr_code.logo_enabled",y,"Show logo in center"),description:"",hass:t,data:{logo_enabled:null!==(u=v.logo_enabled)&&void 0!==u&&u},schema:[this.booleanField("logo_enabled")],onChange:e=>{r({logo_enabled:e.detail.value.logo_enabled}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
      ${v.logo_enabled?i.qy`
            ${this.renderFieldSection((0,c.kg)("editor.qr_code.logo_image_type",y,"Logo source"),(0,c.kg)("editor.qr_code.logo_image_type_desc",y,"Where to load the logo image from"),t,{logo_image_type:v.logo_image_type||"url"},[this.selectField("logo_image_type",[{value:"url",label:(0,c.kg)("editor.qr_code.logo_source_url",y,"Image URL")},{value:"upload",label:(0,c.kg)("editor.qr_code.logo_source_upload",y,"Upload Image")},{value:"entity",label:(0,c.kg)("editor.qr_code.logo_source_entity",y,"Entity Image")},{value:"attribute",label:(0,c.kg)("editor.qr_code.logo_source_attribute",y,"Entity Attribute")}])],e=>{r({logo_image_type:e.detail.value.logo_image_type}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

            ${"url"===(v.logo_image_type||"url")?i.qy`
                  ${this.renderFieldSection((0,c.kg)("editor.qr_code.logo_url",y,"Logo image URL"),(0,c.kg)("editor.qr_code.logo_url_desc",y,"Direct URL to a PNG, JPG, or SVG image. Use /local/ paths for best results."),t,{logo_url:v.logo_url||""},[this.textField("logo_url")],e=>{const t=e.detail.value.logo_url;if(t!==v.logo_url){U.delete(v.logo_url||""),U.delete(t);for(const e of[...x.keys()])e.includes("logo:")&&x.delete(e)}r({logo_url:t})})}
                  ${v.logo_url&&""===U.get(v.logo_url)?i.qy`
                        <div style="display:flex;align-items:flex-start;gap:8px;padding:10px 12px;margin-bottom:12px;background:rgba(var(--warning-color-int,255,152,0),0.12);border:1px solid var(--warning-color,#ff9800);border-radius:var(--uc-r-8, 8px);font-size:13px;">
                          <ha-icon icon="mdi:alert-outline" style="--mdi-icon-size:18px;color:var(--warning-color,#ff9800);flex-shrink:0;margin-top:1px;"></ha-icon>
                          <div>
                            <strong>${(0,c.kg)("editor.qr_code.cors_title",y,"Image blocked by CORS")}</strong><br/>
                            <span style="color:var(--secondary-text-color);">${(0,c.kg)("editor.qr_code.cors_hint",y,"Copy the image to /config/www/ and use /local/your-image.png instead.")}</span>
                          </div>
                        </div>
                      `:""}
                `:""}

            ${"upload"===(v.logo_image_type||"url")?this.renderFileField((0,c.kg)("editor.qr_code.logo_upload_label",y,"Upload logo image"),(0,c.kg)("editor.qr_code.logo_upload_desc",y,"Click to upload an image (PNG, JPG, GIF, WebP, AVIF, SVG…) from your device."),t,v.logo_url||"",e=>{if(e){U.delete(e),U.delete((0,p.VG)(t,e));for(const e of[...x.keys()])e.includes("logo:")&&x.delete(e);r({logo_url:e,logo_image_type:"upload"})}else U.delete(v.logo_url||""),r({logo_url:""});setTimeout(()=>this.triggerPreviewUpdate(),50)},"image/*"):""}

            ${"entity"===(v.logo_image_type||"url")?this.renderEntityPickerWithVariables(t,o,"logo_image_entity",v.logo_image_entity||"",e=>{e!==v.logo_image_entity&&U.delete(v.logo_url||""),r({logo_image_entity:e})},void 0,(0,c.kg)("editor.qr_code.logo_entity",y,"Entity")):""}

            ${"attribute"===(v.logo_image_type||"url")?i.qy`
                  ${this.renderEntityPickerWithVariables(t,o,"logo_image_entity",v.logo_image_entity||"",e=>{e!==v.logo_image_entity&&U.delete(v.logo_url||""),r({logo_image_entity:e})},void 0,(0,c.kg)("editor.qr_code.logo_entity",y,"Entity"))}
                  ${this.renderFieldSection((0,c.kg)("editor.qr_code.logo_attribute",y,"Attribute name"),(0,c.kg)("editor.qr_code.logo_attribute_desc",y,"Attribute path containing the image URL (dot notation supported)."),t,{logo_image_attribute:v.logo_image_attribute||""},[this.textField("logo_image_attribute")],e=>{U.delete(v.logo_url||""),r({logo_image_attribute:e.detail.value.logo_image_attribute||void 0})})}
                `:""}

            ${this.renderSliderField((0,c.kg)("editor.qr_code.logo_size",y,"Logo size"),(0,c.kg)("editor.qr_code.logo_size_desc",y,"Logo as a fraction of the QR code area (10–30%)."),Math.round(100*(null!==(g=v.logo_size)&&void 0!==g?g:.25)),25,10,30,5,e=>{r({logo_size:e/100}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"%")}
            ${this.renderSliderField((0,c.kg)("editor.qr_code.logo_margin",y,"Logo margin"),(0,c.kg)("editor.qr_code.logo_margin_desc",y,"Padding around the logo in pixels."),null!==(m=v.logo_margin)&&void 0!==m?m:2,2,0,8,1,e=>{r({logo_margin:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},"px")}
            ${"H"!==(v.error_correction||"M")?i.qy`
                  <div style="display:flex;align-items:flex-start;gap:8px;padding:10px 12px;margin-bottom:12px;background:rgba(var(--info-color-int,33,150,243),0.1);border:1px solid var(--info-color,#2196f3);border-radius:var(--uc-r-8, 8px);font-size:13px;">
                    <ha-icon icon="mdi:information-outline" style="--mdi-icon-size:18px;color:var(--info-color,#2196f3);flex-shrink:0;margin-top:1px;"></ha-icon>
                    <div>
                      <strong>${(0,c.kg)("editor.qr_code.logo_ec_tip_title",y,"Tip: use H error correction")}</strong><br/>
                      <span style="color:var(--secondary-text-color);">${(0,c.kg)("editor.qr_code.logo_ec_tip",y,"Set error correction to H (30%) in the Advanced section for the best logo clarity.")}</span>
                    </div>
                  </div>
                `:""}
            ${this.renderFieldSection((0,c.kg)("editor.qr_code.logo_hide_bg_dots",y,"Hide dots behind logo"),"",t,{logo_hide_bg_dots:!1!==v.logo_hide_bg_dots},[this.booleanField("logo_hide_bg_dots")],e=>{r({logo_hide_bg_dots:e.detail.value.logo_hide_bg_dots}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          `:""}

      <!-- Advanced -->
      <div class="settings-section" style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;">
        <div class="section-title">${(0,c.kg)("editor.qr_code.advanced_title",y,"Advanced")}</div>
        <div class="field-title" style="margin-top: 8px;">${(0,c.kg)("editor.qr_code.fg_color",y,"Foreground color")}</div>
        <ultra-color-picker
          .label="${""}"
          .value="${v.fg_color||"#000000"}"
          .defaultValue="${"#000000"}"
          .hass="${t}"
          @value-changed="${e=>{r({fg_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}"
        ></ultra-color-picker>
        <div class="field-title" style="margin-top: 16px;">${(0,c.kg)("editor.qr_code.bg_color",y,"Background color")}</div>
        <ultra-color-picker
          .label="${""}"
          .value="${v.bg_color||"#ffffff"}"
          .defaultValue="${"#ffffff"}"
          .hass="${t}"
          @value-changed="${e=>{r({bg_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}"
        ></ultra-color-picker>
        ${this.renderFieldSection((0,c.kg)("editor.qr_code.error_correction",y,"Error correction"),(0,c.kg)("editor.qr_code.error_correction_desc",y,"Higher = more damage tolerance, larger code"),t,{error_correction:v.error_correction||"M"},[this.selectField("error_correction",[{value:"L",label:"L (7%)"},{value:"M",label:"M (15%)"},{value:"Q",label:"Q (25%)"},{value:"H",label:"H (30%)"}])],e=>{r({error_correction:e.detail.value.error_correction}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        ${this.renderSliderField((0,c.kg)("editor.qr_code.quiet_zone",y,"Quiet zone (margin)"),(0,c.kg)("editor.qr_code.quiet_zone_desc",y,"Modules around the QR code (0–10)"),null!==(h=v.qr_margin)&&void 0!==h?h:1,1,0,10,1,e=>{r({qr_margin:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
      </div>
    `:this.renderProLockUI(y)}_hashString(e){let t=0;for(let o=0;o<e.length;o++)t=(t<<5)-t+e.charCodeAt(o),t&=t;return Math.abs(t).toString(36)}renderProLockUI(e){return i.qy`
      <div
        class="pro-lock-container"
        data-uc-role="pane"
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px;
          text-align: center;
          background: var(--uc-pane-bg, var(--secondary-background-color));
          border-radius: var(--uc-r-12, 12px);
          margin: 16px;
        "
      >
        <ha-icon
          icon="mdi:lock"
          style="color: var(--primary-color); --mdi-icon-size: 48px; margin-bottom: 16px;"
        ></ha-icon>
        <div style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">
          ${(0,c.kg)("editor.pro.feature_locked",e,"Pro Feature")}
        </div>
        <div
          style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 300px;"
        >
          ${(0,c.kg)("editor.qr_code.pro_description",e,"QR Code is a Pro feature that generates scannable QR codes from URLs, text, templates, or entity state.")}
        </div>
        <a
          href="https://ultracard.io/pro"
          target="_blank"
          style="
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: var(--primary-color);
            color: var(--text-primary-color, white);
            border-radius: var(--uc-r-8, 8px);
            text-decoration: none;
            font-weight: 600;
          "
        >
          <ha-icon icon="mdi:crown" style="--mdi-icon-size: 20px;"></ha-icon>
          ${(0,c.kg)("editor.pro.upgrade_button",e,"Upgrade to Pro")}
        </a>
      </div>
    `}_renderQrGenerating(e){var t;return i.qy`
      <div class="qr-code-module-preview qr-code-loading" style="text-align: center; padding: 24px; color: var(--secondary-text-color);">
        <ha-icon icon="mdi:loading" class="qr-code-spinner" style="--mdi-icon-size: 32px;"></ha-icon>
        <div style="margin-top: 8px; font-size: 14px;">${(0,c.kg)("editor.qr_code.generating",(null===(t=null==e?void 0:e.locale)||void 0===t?void 0:t.language)||"en","Generating QR...")}</div>
      </div>
    `}_renderTextSourceFields(e,t,o,r,n){return i.qy`
      ${this.renderSettingsSection((0,c.kg)("editor.qr_code.content_title",n,"Content"),(0,c.kg)("editor.qr_code.content_title_desc",n,"Configure the text or URL to encode."),[{title:(0,c.kg)("editor.qr_code.content_mode",n,"Source"),description:(0,c.kg)("editor.qr_code.content_mode_desc",n,"Where to get the text to encode"),hass:t,data:{content_mode:e.content_mode||"static"},schema:[this.selectField("content_mode",[{value:"static",label:(0,c.kg)("editor.qr_code.static",n,"Static URL / Text")},{value:"unified",label:(0,c.kg)("editor.qr_code.unified_template",n,"Unified template")},{value:"entity",label:(0,c.kg)("editor.qr_code.entity",n,"Entity State")}])],onChange:e=>{const t=e.detail.value.content_mode;r(Object.assign({content_mode:t,unified_template_mode:"unified"===t},"unified"!==t?{unified_template:""}:{})),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
      ${"static"===e.content_mode?this.renderFieldSection((0,c.kg)("editor.qr_code.static_content",n,"URL or text"),(0,c.kg)("editor.qr_code.static_desc",n,"Text or URL to encode in the QR code"),t,{content_static:e.content_static||""},[this.textField("content_static")],e=>{r({content_static:e.detail.value.content_static}),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}
      ${"unified"===e.content_mode||e.unified_template_mode?i.qy`
            <div>
              <div
                style="font-size: 13px; color: var(--secondary-text-color); margin: 8px 0 12px; display:flex; align-items:center; gap:8px; flex-wrap:wrap;"
              >
                <span
                  >${(0,c.kg)("editor.qr_code.unified_template_desc",n,'JSON with "qr_content" (URL or text to encode), or a plain Jinja string result.')}</span
                >
                <button
                  type="button"
                  class="help-btn"
                  style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                  title="${(0,c.kg)("editor.qr_code.unified_cheatsheet",n,"Template cheatsheet")}"
                  @click=${e=>{e.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"qr"}}))}}
                >
                  <ha-icon
                    icon="mdi:help-circle"
                    style="--mdc-icon-size:18px;width:18px;height:18px;color:var(--text-primary-color, #fff);"
                  ></ha-icon>
                </button>
              </div>
            <div
              style="margin-top: 12px;"
              @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
              @dragstart=${e=>e.stopPropagation()}
            >
              <ultra-template-editor
                .hass=${t}
                .value=${e.unified_template||""}
                .placeholder=${'{\n  "qr_content": "{{ states(\'sensor.door_lock\') }}"\n}'}
                .minHeight=${120}
                .maxHeight=${360}
                @value-changed=${e=>{r({unified_template:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
              ></ultra-template-editor>
              ${this.renderTemplateKeyWarning(e.unified_template,F,n)}
            </div>
            </div>
          `:""}
      ${"entity"===e.content_mode?i.qy`
            ${this.renderEntityPickerWithVariables(t,o,"content_entity",e.content_entity||"",e=>{r({content_entity:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},void 0,(0,c.kg)("editor.qr_code.entity_picker",n,"Entity"))}
            <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
              ${(0,c.kg)("editor.qr_code.entity_picker_desc",n,"Select an entity whose state (or attribute) will be encoded into the QR code.")}
            </div>
            ${this.renderFieldSection((0,c.kg)("editor.qr_code.attribute",n,"Attribute (optional)"),(0,c.kg)("editor.qr_code.attribute_desc",n,"Leave empty to use state; or e.g. friendly_name"),t,{content_attribute:e.content_attribute||""},[this.textField("content_attribute")],e=>{r({content_attribute:e.detail.value.content_attribute||void 0}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          `:""}
    `}_renderContentTypeFields(e,t,o,r,n){var a;const l=e.qr_data||{},s=e.content_type,d=t=>{r({qr_data:Object.assign(Object.assign({},e.qr_data||{}),t)}),setTimeout(()=>this.triggerPreviewUpdate(),50)},_=(e,t)=>(0,c.kg)(`editor.qr_code.${e}`,n,t),u=(e,o,i="",r=!1)=>this.renderFieldSection(o,i,t,{[e]:l[e]||""},[this.textField(e,r)],t=>d({[e]:t.detail.value[e]||void 0})),g=(e,o,i="")=>this.renderFieldSection(o,i,t,{[e]:!!l[e]},[this.booleanField(e)],t=>d({[e]:!!t.detail.value[e]})),p=(e,o,i,r)=>this.renderFieldSection(o,"",t,{[e]:i},[this.selectField(e,r)],t=>d({[e]:t.detail.value[e]})),m=(e,r,n,a)=>i.qy`
      ${this.renderEntityPickerWithVariables(t,o,e,l[e]||"",t=>d({[e]:t||void 0}),n,r)}
      <div
        class="field-description"
        style="font-size: 13px !important; font-weight: 400 !important; margin: 4px 0 16px; color: var(--secondary-text-color);"
      >
        ${a}
      </div>
    `,h=p("maps_provider",_("maps_provider","Maps app"),l.maps_provider||"google",[{value:"google",label:"Google Maps"},{value:"apple",label:"Apple Maps"},{value:"osm",label:"OpenStreetMap"}]),v=["person","device_tracker","zone","sensor"],y=_("place_entity_desc","Optional. Uses the entity location (person, tracker, zone). Leave empty to use the text below.");let f;switch(s){case"wifi":f=i.qy`
          ${u("wifi_ssid",_("wifi_ssid","Network name (SSID)"))}
          ${p("wifi_security",_("wifi_security","Security"),l.wifi_security||"WPA",[{value:"WPA",label:"WPA / WPA2 / WPA3"},{value:"WEP",label:"WEP"},{value:"nopass",label:_("wifi_open","None (open network)")}])}
          ${"nopass"!==l.wifi_security?u("wifi_password",_("wifi_password","Password")):""}
          ${g("wifi_hidden",_("wifi_hidden","Hidden network"))}
          <div class="field-description" style="font-size: 13px; color: var(--warning-color, #ff9800); margin-bottom: 16px;">
            ${_("wifi_password_note","The password is stored in the card config, so anyone who can edit the dashboard can read it.")}
          </div>
        `;break;case"location":f=i.qy`
          ${m("location_entity",_("location_entity","Location from entity"),v,y)}
          ${u("location_query",_("location_query","Address or coordinates"),_("location_query_desc",'For example "Alexanderplatz, Berlin" or "52.52,13.405".'))}
          ${h}
          ${this.renderFieldSection(_("map_zoom","Zoom (optional)"),_("map_zoom_desc","1 (world) to 21 (street). Works with coordinates."),t,{map_zoom:null!==(a=l.map_zoom)&&void 0!==a?a:""},[this.numberField("map_zoom",1,21,1)],e=>{const t=Number(e.detail.value.map_zoom);d({map_zoom:Number.isFinite(t)&&t>0?t:void 0})})}
        `;break;case"route":f=i.qy`
          ${m("route_origin_entity",_("route_origin_entity","Start from entity"),v,y)}
          ${u("route_origin",_("route_origin","Start address"),_("route_origin_desc","Leave empty to start where the phone is."))}
          ${m("route_destination_entity",_("route_destination_entity","Destination from entity"),v,y)}
          ${u("route_destination",_("route_destination","Destination address"))}
          ${p("travel_mode",_("travel_mode","Travel mode"),l.travel_mode||"driving",[{value:"driving",label:_("travel_driving","Driving")},{value:"walking",label:_("travel_walking","Walking")},{value:"bicycling",label:_("travel_bicycling","Cycling")},{value:"transit",label:_("travel_transit","Public transport")}])}
          ${h}
          ${"google"===(l.maps_provider||"google")?g("start_navigation",_("start_navigation","Start navigation straight away")):""}
        `;break;case"whatsapp":f=i.qy`
          ${u("phone",_("phone","Phone number"),_("phone_intl_desc","With country code, for example +49 151 2345678."))}
          ${u("message",_("message","Message (optional)"),"",!0)}
        `;break;case"phone":f=i.qy`${u("phone",_("phone","Phone number"))}`;break;case"sms":f=i.qy`
          ${u("phone",_("phone","Phone number"))}
          ${u("message",_("message","Message (optional)"),"",!0)}
        `;break;case"email":f=i.qy`
          ${u("email",_("email","Email address"))}
          ${u("email_subject",_("email_subject","Subject (optional)"))}
          ${u("message",_("message","Message (optional)"),"",!0)}
        `;break;case"contact":f=i.qy`
          ${m("contact_entity",_("contact_entity","Name from person"),["person"],_("contact_entity_desc","Optional. Uses the person name. Fill in the fields below for the rest."))}
          ${u("contact_name",_("contact_name","Name"))}
          ${u("contact_phone",_("contact_phone","Phone"))}
          ${u("contact_email",_("contact_email","Email"))}
          ${u("contact_org",_("contact_org","Company (optional)"))}
          ${u("contact_address",_("contact_address","Address (optional)"))}
          ${u("contact_url",_("contact_url","Website (optional)"))}
        `;break;case"spotify":f=i.qy`
          ${m("spotify_entity",_("spotify_entity","Media player"),["media_player"],_("spotify_entity_desc","Encodes what this Spotify player is playing right now. Needs the Spotify integration."))}
          ${u("spotify_url",_("spotify_url","Spotify link"),_("spotify_url_desc","Used when no player is set or nothing is playing. A share link or spotify: URI."))}
        `;break;case"social":f=i.qy`
          ${p("social_platform",_("social_platform","Platform"),l.social_platform||"instagram",[{value:"instagram",label:"Instagram"},{value:"facebook",label:"Facebook"},{value:"x",label:"X"},{value:"threads",label:"Threads"},{value:"tiktok",label:"TikTok"},{value:"youtube",label:"YouTube"},{value:"linkedin",label:"LinkedIn"},{value:"github",label:"GitHub"}])}
          ${u("social_username",_("social_username","Username"),_("social_username_desc","Your handle, or paste the full profile link."))}
        `;break;default:f=i.qy``}const b=q(s,l,null==t?void 0:t.states);return i.qy`
      ${f}
      <div
        class="field-description"
        style="font-size: 12px; color: var(--secondary-text-color); margin: 4px 0 24px; word-break: break-all;"
      >
        ${b?i.qy`${_("encoded_preview","Encodes:")} <code>${b}</code>`:_("fill_fields","Fill in the fields above to make the code.")}
      </div>
    `}_resolveContent(e,t,o){var i,r,n;if(e.content_type&&"text"!==e.content_type)return q(e.content_type,e.qr_data,null==t?void 0:t.states);const a="template"===e.content_mode&&e.content_template,l=!0===e.unified_template_mode||"unified"===e.content_mode||!!a,s=a?String(e.content_template):(e.unified_template||"").trim();if(l&&s&&t){const r=(0,g.KD)(s,t,o),n=this._hashString(r),a=`qr_unified_${e.id}_${n}`,l=null===(i=t.__uvc_template_strings)||void 0===i?void 0:i[a];if(null!=l){const e=(0,u.cv)(l);if(!(0,u.HD)(e)){const t=(0,u.ly)(e);if(t)return t.trim()}}try{new _.I(t).subscribeToTemplate(r,a,()=>{window.dispatchEvent(new CustomEvent(k))},{},o)}catch(e){}return""}const d=e.content_mode||"static";if("static"===d)return(e.content_static||"").trim()||"https://www.home-assistant.io";if("entity"===d&&e.content_entity&&(null===(r=null==t?void 0:t.states)||void 0===r?void 0:r[e.content_entity])){const o=t.states[e.content_entity];if(e.content_attribute){const t=null===(n=o.attributes)||void 0===n?void 0:n[e.content_attribute];return null!=t?String(t):""}return null!=o.state?String(o.state):""}return""}renderPreview(e,t,o,r){var a,l,s,d,_,u,g,p;const m=e,h="template"===m.content_mode&&m.content_template,v=!(m.content_type&&"text"!==m.content_type)&&(m.unified_template_mode||"unified"===m.content_mode||!!h)&&String(h||m.unified_template||"").trim().length>0,y=this._resolveContent(m,t,o),f=Math.min(512,Math.max(64,null!==(a=m.size)&&void 0!==a?a:200)),b=m.fg_color||"#000000",w=m.bg_color||"#ffffff",$=m.error_correction||"M",q=null!==(l=m.qr_margin)&&void 0!==l?l:1,F=m.alignment||"center",T=null!==(s=m.show_label)&&void 0!==s&&s,C=(m.label_text||"").trim(),R=!1!==m.label_below;let L,E=!1;const A=z(m,t);if(m.logo_enabled&&A){const e=U.get(A);void 0===e?function(e,t){var o,i;if(P.has(e))return;P.add(e);const r={};!((e.startsWith("http://")||e.startsWith("https://"))&&!e.startsWith(`${window.location.protocol}//${window.location.host}`))&&(null===(i=null===(o=null==t?void 0:t.auth)||void 0===o?void 0:o.data)||void 0===i?void 0:i.access_token)&&(r.Authorization=`Bearer ${t.auth.data.access_token}`),fetch(e,{mode:"cors",headers:r}).then(e=>{if(!e.ok)throw new Error(`HTTP ${e.status}`);return e.blob()}).then(e=>new Promise((t,o)=>{const i=new FileReader;i.onloadend=()=>t(i.result),i.onerror=o,i.readAsDataURL(e)})).then(t=>{U.set(e,t),P.delete(e);for(const e of[...x.keys()])e.includes("logo:pending")&&x.delete(e);window.dispatchEvent(new CustomEvent(k))}).catch(()=>{U.set(e,""),P.delete(e);for(const e of[...x.keys()])e.includes("logo:pending")&&x.delete(e);window.dispatchEvent(new CustomEvent(k))})}(A,t):""===e?E=!0:L=e}const W=function(e,t,o){var i,r,n;const a=e.size||200,l=e.fg_color||"#000000",s=e.bg_color||"#ffffff",d=e.error_correction||"M",c=null!==(i=e.qr_margin)&&void 0!==i?i:1,_=e.dot_style||"square",u=e.corner_square_style||"square",g=e.corner_dot_style||"square",p=z(e,o),m=e.logo_enabled&&p?`${function(e,t){if(!e.logo_enabled)return"nologo";const o=z(e,t);if(!o)return"nologo";const i=U.get(o);return void 0===i?"logo:pending":""===i?"logo:failed":"logo:loaded"}(e,o)}|${null!==(r=e.logo_size)&&void 0!==r?r:.25}|${null!==(n=e.logo_margin)&&void 0!==n?n:4}|${!1!==e.logo_hide_bg_dots}`:"nologo";return`${e.id}|${t}|${a}|${l}|${s}|${d}|${c}|${_}|${u}|${g}|${m}`}(m,y,t),M=x.get(W);if(!y&&!v)return i.qy`
        <div class="qr-code-module-preview qr-code-placeholder" style="text-align: center; padding: 24px; color: var(--secondary-text-color);">
          <ha-icon icon="mdi:qrcode" style="--mdi-icon-size: 48px; opacity: 0.5;"></ha-icon>
          <div style="margin-top: 8px; font-size: 14px;">${(0,c.kg)("editor.qr_code.no_content",(null===(d=null==t?void 0:t.locale)||void 0===d?void 0:d.language)||"en","Add content in General tab")}</div>
        </div>
      `;if(!M&&y){if(S.has(W))return this._renderQrGenerating(t);S.add(W);const e=()=>{S.delete(W),window.dispatchEvent(new CustomEvent(k))};return new(n())(Object.assign(Object.assign({width:f,height:f,data:y,margin:q},L?{image:L}:{}),{qrOptions:{errorCorrectionLevel:$},dotsOptions:{type:m.dot_style||"square",color:b},cornersSquareOptions:{type:m.corner_square_style||"square",color:b},cornersDotOptions:{type:m.corner_dot_style||"square",color:b},backgroundOptions:{color:w},imageOptions:{margin:L?null!==(_=m.logo_margin)&&void 0!==_?_:4:0,imageSize:L?null!==(u=m.logo_size)&&void 0!==u?u:.25:.4,hideBackgroundDots:!L||!1!==m.logo_hide_bg_dots,saveAsBlob:!0}})).getRawData("png").then(t=>{if(!t)return x.set(W,""),void e();const o=new FileReader;o.onloadend=()=>{x.set(W,o.result||""),e()},o.onerror=()=>{x.set(W,""),e()},o.readAsDataURL(t)}).catch(()=>{x.set(W,""),e()}),this._renderQrGenerating(t)}if(!M)return i.qy`
        <div class="qr-code-module-preview qr-code-placeholder" style="text-align: center; padding: 24px; color: var(--secondary-text-color);">
          <ha-icon icon="mdi:qrcode" style="--mdi-icon-size: 48px; opacity: 0.5;"></ha-icon>
        </div>
      `;const I=this.createGestureHandlers(e.id,{tap_action:m.tap_action,hold_action:m.hold_action,double_tap_action:m.double_tap_action,entity:void 0,module:m},t,o),D="center"===F?"margin-left: auto; margin-right: auto;":"right"===F?"margin-left: auto; margin-right: 0;":"margin-left: 0; margin-right: auto;",G=T&&C?i.qy`
            <div
              class="qr-code-label"
              style="font-size: 14px; color: var(--primary-text-color); margin-top: ${R?8:0}px; margin-bottom: ${R?0:8}px; text-align: center;"
            >
              ${C}
            </div>
          `:"",O=i.qy`
      <img
        src="${M}"
        alt="QR Code"
        width="${f}"
        height="${f}"
        style="display: block; ${D}"
      />
    `,j="url"===(m.logo_image_type||"url")&&(m.logo_url||"").startsWith("http")&&!m.logo_url.startsWith(`${window.location.protocol}//${window.location.host}`),N=E&&j?i.qy`
          <div
            class="qr-cors-warning"
            style="display:flex;align-items:center;gap:6px;padding:6px 10px;margin-top:6px;background:rgba(var(--warning-color-int,255,152,0),0.15);border:1px solid var(--warning-color,#ff9800);border-radius:var(--uc-r-6, 6px);font-size:12px;color:var(--primary-text-color);"
          >
            <ha-icon icon="mdi:alert-outline" style="--mdi-icon-size:16px;color:var(--warning-color,#ff9800);flex-shrink:0;"></ha-icon>
            <span>${(0,c.kg)("editor.qr_code.cors_error",(null===(g=null==t?void 0:t.locale)||void 0===g?void 0:g.language)||"en","Logo not loaded — the image server blocked cross-origin requests. Use a /local/ path or a CORS-enabled URL.")}</span>
          </div>
        `:"",Q=this.getHoverEffectClass(e),V=this.buildStyleString(this.buildDesignStyles(e,t));return this.wrapWithAnimation(i.qy`
      <div
        class="qr-code-module-preview ${Q}"
        @pointerdown="${I.onPointerDown}"
        @pointermove="${I.onPointerMove}"
        @pointerup="${I.onPointerUp}"
        @pointerleave="${I.onPointerLeave}"
        @pointercancel="${I.onPointerCancel}"
        @keydown="${I.onKeyDown}"
        role=${I.isActionable?"button":i.s6}
        tabindex=${I.isActionable?"0":i.s6}
        style="${V}; cursor: ${"nothing"!==(null===(p=m.tap_action)||void 0===p?void 0:p.action)?"pointer":"default"};"
      >
        ${R?O:G}
        ${R?G:O}
        ${N}
      </div>
    `,e,t)}validate(e){var t;const o=e,i=[...super.validate(e).errors],r=o.content_type&&"text"!==o.content_type?"structured":o.content_mode||"static";"static"!==r||(o.content_static||"").trim()||i.push("Static content is required when source is Static"),("unified"===r||"structured"!==r&&o.unified_template_mode)&&!String(o.unified_template||"").trim()&&i.push("Unified template is required when source is Unified template"),"entity"!==r||(o.content_entity||"").trim()||i.push("Entity is required when source is Entity");const n=null!==(t=o.size)&&void 0!==t?t:200;return(n<64||n>512)&&i.push("Size must be between 64 and 512"),{valid:0===i.length,errors:i}}getStyles(){return`\n      ${a.m.getSliderStyles()}\n      .qr-code-module-preview img {\n        display: block;\n      }\n      .qr-code-loading .qr-code-spinner,\n      .qr-code-loading ha-icon.qr-code-spinner {\n        animation: qr-spin 1s linear infinite;\n        display: inline-block;\n      }\n      @keyframes qr-spin {\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      }\n    `}}}};