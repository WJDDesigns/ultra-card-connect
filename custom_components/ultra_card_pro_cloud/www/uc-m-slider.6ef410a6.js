export const __webpack_esm_ids__=[9970];export const __webpack_esm_modules__={6314(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i}).join("")},t.i=function(e,i,n,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);n&&a[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),i&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=i):p[2]=i),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},1354(e){e.exports=function(e){var t=e[1],i=e[3];if(!i)return t;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),r="/*# ".concat(o," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},5072(e){var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var r={},a=[],l=0;l<e.length;l++){var s=e[l],d=n.base?s[0]+n.base:s[0],p=r[d]||0,c="".concat(d," ").concat(p);r[d]=p+1;var u=i(c),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var g=o(h,n);n.byIndex=l,t.splice(l,0,{identifier:c,updater:g,references:1})}a.push(c)}return a}function o(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,o){var r=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var l=i(r[a]);t[l].references--}for(var s=n(e,o),d=0;d<r.length;d++){var p=i(r[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}r=s}}},7659(e){var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},540(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},5056(e,t,i){e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},7825(e){e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var o=void 0!==i.layer;o&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,o&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},1113(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},9011(e,t,i){i.d(t,{UltraSliderModule:()=>S});var n=i(2618),o=i(7610),r=i(7475),a=i(9957),l=i(8414),s=i(8938),d=i(6478),p=i(230),c=i(5064),u=i(3580),h=i(2034),g=i(378),v=(i(7921),i(1236)),m=i(7936),w=i(1193),b=i(3385),f=i(7083),y=i(5639),_=i(8832),x=i(2890);i(1583),i(3535),i(6709),i(7047),i(1547),v.A.use([b.A,f.A,_.A,m.A,w.A,x.A,y.A]);class ${static getInstance(e){return this.instances.get(e)}static setInstance(e,t){this.instances.set(e,t)}static destroyInstance(e){const t=this.instances.get(e);if(t){try{const e=t.el;e&&e._swiperResizeObserver&&(e._swiperResizeObserver.disconnect(),delete e._swiperResizeObserver),t.destroy(!0,!0)}catch(e){}this.instances.delete(e)}"undefined"!=typeof window&&delete window[`initSwiper_${e}`]}static cleanup(e){this.destroyInstance(e)}}$.instances=new Map;class S extends r.m{constructor(){super(...arguments),this.metadata={type:"slider",title:"Slider Layout",description:"Create interactive slideshows with multiple pages of modules",author:"WJD Designs",version:"1.0.0",icon:"mdi:view-carousel",category:"layout",tags:["layout","slider","carousel","slideshow","pages","swipe"]}}createDefault(e,t){const i=(0,l.oD)().getModule("pagebreak"),n=(null==i?void 0:i.createDefault(this.generateId("pagebreak"),t))||{id:this.generateId("pagebreak"),type:"pagebreak",display_mode:"always",display_conditions:[]};return{id:e||this.generateId("slider"),type:"slider",modules:[n],show_pagination:!0,pagination_style:"dots",pagination_position:void 0,pagination_color:"var(--primary-text-color)",pagination_active_color:"var(--primary-color)",pagination_size:12,pagination_overlay:!1,show_arrows:!0,arrow_position_offset:0,arrow_style:"circle",arrow_size:40,arrow_color:"var(--primary-text-color)",arrow_background_color:"rgba(0, 0, 0, 0.3)",prev_arrow_icon:"mdi:chevron-left",next_arrow_icon:"mdi:chevron-right",arrows_always_visible:!1,transition_effect:"slide",transition_speed:300,slider_direction:"horizontal",centered_slides:!0,auto_play:!1,auto_play_delay:3e3,pause_on_hover:!0,loop:!0,allow_swipe:!0,allow_keyboard:!0,allow_mousewheel:!1,auto_height:!0,slider_height:300,slider_width:"100%",gap:0,slides_per_view:1,space_between:0,vertical_alignment:"top",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderGeneralTab(e,t,i,o){var r,a,l,s,p,c,u,h,g,v,m;const w=e,b=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en",f=w.modules.filter(e=>"pagebreak"===e.type).length+1,y=w.modules.filter(e=>"pagebreak"!==e.type).length;return n.qy`
      <div class="slider-general-tab">
        ${this.injectUcFormStyles()}
        <style>
          .slider-general-tab {
            padding: 8px;
          }
          .inline-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
            padding-bottom: 0;
            border-bottom: none;
          }
          .inline-toggle .section-title {
            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--primary-color);
            letter-spacing: 0.5px;
            margin-bottom: 0;
          }
          .preview-note {
            background: var(--info-color, #2196f3);
            color: white;
            padding: 12px 16px;
            border-radius: var(--uc-r-8, 8px);
            margin-bottom: 24px;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: 14px;
            line-height: 1.5;
          }
          .preview-note ha-icon {
            flex-shrink: 0;
            margin-top: 2px;
          }
        </style>

        <!-- Preview Note -->
        <div class="preview-note">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <div>
            <strong>Note:</strong> Slider transitions may not appear in the Home Assistant
            Configuration Preview Window. To see transitions, check the
            <strong>Live Preview</strong> popup in the editor or view the card on your dashboard.
          </div>
        </div>

        <!-- SLIDER LAYOUT -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,d.kg)("editor.slider.section_layout",b,"SLIDER LAYOUT")}
          </div>

          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8;"
          >
            ${(0,d.kg)("editor.slider.pages_label",b,"Pages")}: ${f} &middot;
            ${(0,d.kg)("editor.slider.modules_label",b,"Modules")}: ${y}
          </div>

          ${this.renderFieldSection("Layout Direction","Horizontal or vertical slider orientation",t,{slider_direction:w.slider_direction||"horizontal"},[this.selectField("slider_direction",[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}])],e=>{const t=e.detail.value.slider_direction,i={slider_direction:t},n=w.pagination_position;"vertical"===t?"top"===n||"bottom"===n?i.pagination_position="right":n||(i.pagination_position="right"):"left"===n||"right"===n?i.pagination_position="bottom":n||(i.pagination_position="bottom"),"vertical"===t?(w.prev_arrow_icon&&"mdi:chevron-left"!==w.prev_arrow_icon||(i.prev_arrow_icon="mdi:chevron-up"),w.next_arrow_icon&&"mdi:chevron-right"!==w.next_arrow_icon||(i.next_arrow_icon="mdi:chevron-down")):(w.prev_arrow_icon&&"mdi:chevron-up"!==w.prev_arrow_icon||(i.prev_arrow_icon="mdi:chevron-left"),w.next_arrow_icon&&"mdi:chevron-down"!==w.next_arrow_icon||(i.next_arrow_icon="mdi:chevron-right")),o(i)})}

          ${(w.slides_per_view||1)>1?n.qy`
                ${this.renderFieldSection("Center Slider","Center active slide in the viewport (only available when Slides Per View > 1)",t,{centered_slides:null===(a=w.centered_slides)||void 0===a||a},[this.booleanField("centered_slides")],e=>o({centered_slides:e.detail.value.centered_slides}))}
              `:""}

          <div style="margin-bottom: 16px;">
            <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
              Slider Width
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
            >
              Width of the slider container (e.g., 100%, 400px)
            </div>
            <ha-textfield
              .value=${w.slider_width||"100%"}
              placeholder="100%"
              @input=${e=>{var t;const i=e.target,n=(null===(t=i.shadowRoot)||void 0===t?void 0:t.querySelector("input"))||i,r=i.value,a=n.selectionStart,l=n.selectionEnd;o({slider_width:r}),requestAnimationFrame(()=>{n&&"number"==typeof a&&(i.value=r,n.value=r,n.setSelectionRange(a,l||a))}),setTimeout(()=>{n&&"number"==typeof a&&(i.value=r,n.value=r,n.setSelectionRange(a,l||a))},0),setTimeout(()=>{n&&"number"==typeof a&&(i.value=r,n.value=r,n.setSelectionRange(a,l||a))},10)}}
              style="width: 100%; --mdc-theme-primary: var(--primary-color);"
            ></ha-textfield>
          </div>

          ${"vertical"!==w.slider_direction?this.renderFieldSection("Auto Height","Automatically adjust slider height to fit content on each page",t,{auto_height:null===(l=w.auto_height)||void 0===l||l},[this.booleanField("auto_height")],e=>o({auto_height:e.detail.value.auto_height})):n.qy`
                <div style="margin-bottom: 16px; opacity: 0.6;">
                  <div
                    class="field-title"
                    style="font-size: 16px; font-weight: 600; margin-bottom: 4px;"
                  >
                    ${(0,d.kg)("editor.slider.auto_height",b,"Auto Height")}
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 8px; opacity: 0.8; line-height: 1.4;"
                  >
                    ${(0,d.kg)("editor.slider.auto_height_vertical_note",b,"Not available for vertical sliders. Vertical sliders scroll within the fixed Slider Height set below.")}
                  </div>
                </div>
              `}

          ${"vertical"===w.slider_direction||null!==(s=w.auto_height)&&void 0!==s&&!s?this.renderSliderField("Slider Height","Fixed height for the slider in pixels",w.slider_height||("vertical"===w.slider_direction?400:300),"vertical"===w.slider_direction?400:300,50,1e3,10,e=>o({slider_height:e}),"px"):""}
          ${this.renderSliderField("Slides Per View","Number of slides visible at once",w.slides_per_view||1,1,1,10,1,e=>o({slides_per_view:e}),"")}
          ${this.renderSliderField("Space Between","Space between slides in pixels",w.space_between||0,0,0,100,5,e=>o({space_between:e}),"px")}
          ${this.renderSliderField((0,d.kg)("editor.slider.gap",b,"Gap"),(0,d.kg)("editor.slider.gap_desc",b,"Fallback spacing between slides in pixels, used when Space Between is 0"),w.gap||0,0,0,100,5,e=>o({gap:e}),"px")}
          ${(w.slides_per_view||1)>1?this.renderFieldSection("Vertical Alignment","Vertical alignment of content within slides",t,{vertical_alignment:w.vertical_alignment||"top"},[this.selectField("vertical_alignment",[{value:"top",label:"Top"},{value:"center",label:"Center"},{value:"bottom",label:"Bottom"},{value:"stretch",label:"Stretch"}])],e=>o({vertical_alignment:e.detail.value.vertical_alignment})):""}
        </div>

        <!-- PAGINATION -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div class="inline-toggle">
            <div class="section-title">
              ${(0,d.kg)("editor.slider.section_pagination",b,"PAGINATION")}
            </div>
          </div>
          ${this.renderFieldSection("Enable Pagination","",t,{show_pagination:null===(p=w.show_pagination)||void 0===p||p},[this.booleanField("show_pagination")],e=>o({show_pagination:e.detail.value.show_pagination}))}

          ${w.show_pagination?n.qy`
                ${this.renderFieldSection("Pagination Style","How pagination indicators are displayed",t,{pagination_style:w.pagination_style||"dots"},[this.selectField("pagination_style",[{value:"dots",label:"Dots"},{value:"dots-and-dash",label:"Dots and Dash"},{value:"dash-lines",label:"Dash Lines"},{value:"numbers",label:"Numbers"},{value:"fraction",label:"Fraction (1/5)"},{value:"progressbar",label:"Progress"},{value:"scrollbar",label:"Scrollbar"},{value:"dynamic",label:"Dynamic"}])],e=>o({pagination_style:e.detail.value.pagination_style}))}
                ${this.renderFieldSection("Pagination Overlay","When enabled, pagination overlays content. When disabled, pagination gets its own space.",t,{pagination_overlay:null!==(c=w.pagination_overlay)&&void 0!==c&&c},[this.booleanField("pagination_overlay")],e=>o({pagination_overlay:e.detail.value.pagination_overlay}))}
                ${this.renderFieldSection("Pagination Position","Where to show pagination indicators",t,{pagination_position:w.pagination_position||("vertical"===w.slider_direction?"right":"bottom")},[this.selectField("pagination_position",[..."vertical"===w.slider_direction?[{value:"left",label:"Left"},{value:"right",label:"Right"}]:[{value:"top",label:"Top"},{value:"bottom",label:"Bottom"}]])],e=>o({pagination_position:e.detail.value.pagination_position}))}
                ${this.renderSliderField("Pagination Size","Size of pagination indicators in pixels",w.pagination_size||12,12,6,30,1,e=>o({pagination_size:e}),"px")}
                <div style="margin-bottom: 16px;">
                  <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                    Pagination Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Color of inactive pagination indicators
                  </div>
                  <ultra-color-picker
                    .label=${"Pagination Color"}
                    .value=${w.pagination_color||"var(--primary-text-color)"}
                    .defaultValue=${"var(--primary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>o({pagination_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>
                <div style="margin-bottom: 16px;">
                  <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                    Active Pagination Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Color of the active pagination indicator
                  </div>
                  <ultra-color-picker
                    .label=${"Active Pagination Color"}
                    .value=${w.pagination_active_color||"var(--primary-color)"}
                    .defaultValue=${"var(--primary-color)"}
                    .hass=${t}
                    @value-changed=${e=>o({pagination_active_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>
              `:""}
        </div>

        <!-- NAVIGATION ARROWS -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div class="inline-toggle">
            <div class="section-title">
              ${(0,d.kg)("editor.slider.section_arrows",b,"NAVIGATION ARROWS")}
            </div>
          </div>
          ${this.renderFieldSection("Show Arrows","",t,{show_arrows:null===(u=w.show_arrows)||void 0===u||u},[this.booleanField("show_arrows")],e=>o({show_arrows:e.detail.value.show_arrows}))}

          ${w.show_arrows?n.qy`
                ${this.renderFieldSection("Arrows Always Visible","Keep arrows visible (otherwise show on hover)",t,{arrows_always_visible:w.arrows_always_visible||!1},[this.booleanField("arrows_always_visible")],e=>o({arrows_always_visible:e.detail.value.arrows_always_visible}))}
                ${this.renderSliderField("Arrow Position Offset","Offset arrows position: positive = more inside, negative = more outside (in pixels)",w.arrow_position_offset||0,0,-100,100,5,e=>o({arrow_position_offset:e}),"px")}
                <div style="margin-bottom: 16px;">
                  <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                    Arrow Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Color of the arrow icons
                  </div>
                  <ultra-color-picker
                    .label=${"Arrow Color"}
                    .value=${w.arrow_color||"var(--primary-text-color)"}
                    .defaultValue=${"var(--primary-text-color)"}
                    .hass=${t}
                    @value-changed=${e=>o({arrow_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>
                <div style="margin-bottom: 16px;">
                  <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                    Arrow Background Color
                  </div>
                  <div
                    class="field-description"
                    style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
                  >
                    Background color of the arrow buttons (not used for minimal style)
                  </div>
                  <ultra-color-picker
                    .label=${"Arrow Background Color"}
                    .value=${w.arrow_background_color||"rgba(0, 0, 0, 0.3)"}
                    .defaultValue=${"rgba(0, 0, 0, 0.3)"}
                    .hass=${t}
                    @value-changed=${e=>o({arrow_background_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>
                ${this.renderFieldSection("Arrow Style","Visual style of the arrows",t,{arrow_style:w.arrow_style||"circle"},[this.selectField("arrow_style",[{value:"default",label:"Default"},{value:"circle",label:"Circle"},{value:"square",label:"Square"},{value:"minimal",label:"Minimal"}])],e=>o({arrow_style:e.detail.value.arrow_style}))}
                ${this.renderSliderField("Arrow Size","Size of navigation arrows in pixels",w.arrow_size||40,40,20,80,5,e=>o({arrow_size:e}),"px")}
                ${this.renderFieldSection("Previous Arrow Icon","Icon for the previous arrow",t,{prev_arrow_icon:w.prev_arrow_icon||("vertical"===w.slider_direction?"mdi:chevron-up":"mdi:chevron-left")},[this.iconField("prev_arrow_icon")],e=>o({prev_arrow_icon:e.detail.value.prev_arrow_icon}))}
                ${this.renderFieldSection("Next Arrow Icon","Icon for the next arrow",t,{next_arrow_icon:w.next_arrow_icon||("vertical"===w.slider_direction?"mdi:chevron-down":"mdi:chevron-right")},[this.iconField("next_arrow_icon")],e=>o({next_arrow_icon:e.detail.value.next_arrow_icon}))}
              `:""}
        </div>

        <!-- TRANSITION & ANIMATION -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,d.kg)("editor.slider.section_transition",b,"TRANSITION & ANIMATION")}
          </div>

          ${this.renderFieldSection("Transition Effect","Animation style between slides",t,{transition_effect:w.transition_effect||"slide"},[this.selectField("transition_effect",[{value:"slide",label:"Slide"},{value:"fade",label:"Fade"}])],e=>o({transition_effect:e.detail.value.transition_effect}))}
          ${this.renderSliderField("Transition Speed","Transition duration in milliseconds",w.transition_speed||300,300,100,2e3,50,e=>o({transition_speed:e}),"ms")}
        </div>

        <!-- AUTO-PLAY -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div class="inline-toggle">
            <div class="section-title">
              ${(0,d.kg)("editor.slider.section_autoplay",b,"AUTO-PLAY")}
            </div>
          </div>
          ${this.renderFieldSection("Enable Auto-play","",t,{auto_play:w.auto_play||!1},[this.booleanField("auto_play")],e=>o({auto_play:e.detail.value.auto_play}))}

          ${w.auto_play?n.qy`
                ${this.renderSliderField("Auto-play Delay","Time between slides in milliseconds",w.auto_play_delay||3e3,3e3,1e3,1e4,500,e=>o({auto_play_delay:e}),"ms")}
                ${this.renderFieldSection("Pause on Hover","Pause auto-play when hovering over slider",t,{pause_on_hover:null===(h=w.pause_on_hover)||void 0===h||h},[this.booleanField("pause_on_hover")],e=>o({pause_on_hover:e.detail.value.pause_on_hover}))}
              `:""}
          ${this.renderFieldSection("Loop","Return to first slide after the last",t,{loop:null===(g=w.loop)||void 0===g||g},[this.booleanField("loop")],e=>o({loop:e.detail.value.loop}))}
        </div>

        <!-- INTERACTION -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,d.kg)("editor.slider.section_interaction",b,"INTERACTION")}
          </div>

          ${this.renderFieldSection("Allow Swipe","Enable touch/swipe gestures",t,{allow_swipe:null===(v=w.allow_swipe)||void 0===v||v},[this.booleanField("allow_swipe")],e=>o({allow_swipe:e.detail.value.allow_swipe}))}
          ${this.renderFieldSection("Allow Keyboard","Navigate with arrow keys",t,{allow_keyboard:null===(m=w.allow_keyboard)||void 0===m||m},[this.booleanField("allow_keyboard")],e=>o({allow_keyboard:e.detail.value.allow_keyboard}))}
          ${this.renderFieldSection("Allow Mousewheel","Navigate with mouse wheel",t,{allow_mousewheel:w.allow_mousewheel||!1},[this.booleanField("allow_mousewheel")],e=>o({allow_mousewheel:e.detail.value.allow_mousewheel}))}
        </div>

      </div>
    `}renderLogicTab(e,t,i,n){return s.X.render(e,t,n)}renderActionsTab(e,t,i,o){var r;const l=e,s=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";return n.qy`
      <div class="actions-tab">
        ${this.injectUcFormStyles()}
        <style>
          .actions-tab {
            padding: 8px;
          }
        </style>

        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; padding-bottom: 0; border-bottom: none; letter-spacing: 0.5px;"
          >
            ${(0,d.kg)("editor.slider.section_link_config",s,"LINK CONFIGURATION")}
          </div>

          ${a.K.render(t,{tap_action:l.tap_action||{action:"nothing"},hold_action:l.hold_action||{action:"nothing"},double_tap_action:l.double_tap_action||{action:"nothing"}},e=>{const t={};e.tap_action&&(t.tap_action=e.tap_action),e.hold_action&&(t.hold_action=e.hold_action),e.double_tap_action&&(t.double_tap_action=e.double_tap_action),o(t)},"Link Configuration")}
        </div>
      </div>
    `}renderSplitPreview(e,t){return this.renderPreview(e,t,{type:"ultra-card",layout:{rows:[]}},"live")}renderPreview(e,t,i,r){var a,s,d,m,w,b,f,y,_,x,S,z,A,k,I,C,F,E;const T=e,L=(0,l.oD)(),P=u.I.getEffectiveDesign(T.design,u.I.getCurrentBreakpoint()),q=T,N=[];let R=[];for(const e of T.modules)"pagebreak"!==e.type?R.push(e):R.length>0&&(N.push([...R]),R=[]);if(R.length>0?N.push([...R]):0===N.length&&N.push([]),0===N.length||1===N.length&&0===N[0].length)return n.qy`
        <div style="padding: 40px 20px; text-align: center; color: var(--secondary-text-color);">
          <ha-icon
            icon="mdi:view-carousel"
            style="font-size: 48px; opacity: 0.3; margin-bottom: 16px;"
          ></ha-icon>
          <div style="font-size: 16px; font-weight: 500; margin-bottom: 8px;">Slider is empty</div>
          <div style="font-size: 14px; opacity: 0.8;">
            Drag modules here to add content.<br />
            Use <strong>Page Break</strong> modules to separate slides.
          </div>
        </div>
      `;if("live"===r&&!N.some(e=>e.length>0))return n.qy`
          <div style="padding: 40px 20px; text-align: center; color: var(--secondary-text-color);">
            <ha-icon
              icon="mdi:view-carousel"
              style="font-size: 48px; opacity: 0.3; margin-bottom: 16px;"
            ></ha-icon>
            <div style="font-size: 16px; font-weight: 500; margin-bottom: 8px;">
              No content in slider
            </div>
            <div style="font-size: 14px; opacity: 0.8;">
              Add modules to the slider to see content here.
            </div>
          </div>
        `;const D=T.id,M=`swiper-${D.replace(/[^a-zA-Z0-9]/g,"-")}`;"undefined"!=typeof window&&(window[`initSwiper_${D}`]=e=>{const t=e.getAttribute("data-preview-context")||"dashboard",i=$.getInstance(D),n=e.swiper,o=e.getAttribute("data-swiper-init-context")||null;if((i||n)&&!(null==n?void 0:n.destroyed))if(o&&o!==t)i&&$.destroyInstance(D),n&&(n.destroy(!0,!0),delete e.swiper),e.removeAttribute("data-swiper-initialized"),e.removeAttribute("data-swiper-init-context");else if(o===t)return;if(e._swiperInitializing)return;e._swiperInitializing=!0,e.setAttribute("data-preview-context",t);const r="live"===t||"ha-preview"===t,a=r?100:0,l=r?10:2;let s=0;const d=()=>{var i,n,o,r,p,c,u,h,g;const m=e.closest(".ultra-slider-container"),w=`.swiper-pagination[data-slider-id="${D}"]`,b=`.swiper-scrollbar[data-slider-id="${D}"]`,f=null==m?void 0:m.querySelector(w),y=null==m?void 0:m.querySelector(b),_=e.querySelector(".swiper-button-next"),x=e.querySelector(".swiper-button-prev"),S=e.querySelectorAll(".swiper-slide").length,z=e;let A=z.offsetWidth;const k=z.offsetHeight;if(A>2e3&&"live"===t){if(m){const e=m.offsetWidth;if(e>0&&e<2e3)A=e;else{const e=parseInt(getComputedStyle(z).width)||0;A=e>0&&e<2e3?e:Math.min(window.innerWidth,800)}}else A=Math.min(window.innerWidth,800);z.style.maxWidth=`${A}px`,z.style.width=`${A}px`,m&&(m.style.maxWidth=`${A}px`)}if(0===S)return s++,s<l?void setTimeout(d,a*s):(console.error("[Slider] No slides found after retries:",D),e.removeAttribute("data-swiper-initialized"),void delete e._swiperInitializing);if(0===A||!X&&0===k){if(s++,s<l)return void setTimeout(d,a*s);console.warn("[Slider] Container has no dimensions after retries, initializing anyway:",D,{containerWidth:A,containerHeight:k,isVertical:X})}try{const a=this.mapConfigToSwiper(T,N.length,D);a.pagination&&f&&(a.pagination.el=f),a.scrollbar&&y&&(a.scrollbar.el=y),a.navigation&&_&&x&&(a.navigation.nextEl=_,a.navigation.prevEl=x);const l=new v.A(e,a);$.setInstance(D,l);const s=()=>{if(!l||l.destroyed||l.animating)return;const e=l,t=e.touchEventsData,i=Boolean(e.isTouched||(null==t?void 0:t.isTouched)),n=Boolean(e.isMoved||(null==t?void 0:t.isMoved));if(!i||!n)return;const o=e.slideToClosest;"function"==typeof o?o.call(e,l.params.speed,!0,!1):l.slideTo(l.activeIndex,l.params.speed)},d=()=>{requestAnimationFrame(()=>s())},b=()=>{window.removeEventListener("pointerup",d,!0),window.removeEventListener("pointercancel",d,!0),window.removeEventListener("touchend",d,!0),window.removeEventListener("touchcancel",d,!0)};window.addEventListener("pointerup",d,!0),window.addEventListener("pointercancel",d,!0),window.addEventListener("touchend",d,!0),window.addEventListener("touchcancel",d,!0),e.setAttribute("data-swiper-init-context",t);let S=A;if("live"===t){const t=e.offsetWidth;if(t>2e3){const t=null===(i=e.parentElement)||void 0===i?void 0:i.closest(".ultra-slider-container");if(t){const i=t.offsetWidth;if(i>0&&i<2e3)S=i;else{const t=parseInt(getComputedStyle(e).width)||0;S=t>0&&t<2e3?t:A>0&&A<2e3?A:Math.min(window.innerWidth,800)}}else S=A>0&&A<2e3?A:Math.min(window.innerWidth,800);e.style.maxWidth=`${S}px`,e.style.width=`${S}px`;const o=null===(n=e.parentElement)||void 0===n?void 0:n.closest(".ultra-slider-container");o&&(o.style.maxWidth=`${S}px`)}else S=t}(l.params.loop||l.params.rewind)&&(l.allowSlideNext=!0,l.allowSlidePrev=!0,l.on("navigationHide",()=>{l.allowSlideNext=!0,l.allowSlidePrev=!0,l.navigation&&l.navigation.update()}),l.on("reachEnd",()=>{l.allowSlideNext=!0,l.navigation&&l.navigation.update()}),l.on("reachBeginning",()=>{l.allowSlidePrev=!0,l.navigation&&l.navigation.update()})),l.updateSize(),l.updateSlides();const z=e.offsetWidth;"live"===t&&z>2e3&&(e.style.maxWidth=`${S}px`,e.style.width=`${S}px`,l.updateSize(),l.updateSlides()),S>0&&!X&&l.slides.forEach(e=>{e.offsetWidth>S&&(e.style.maxWidth=`${S}px`,e.style.width=`${S}px`)});const k=l.wrapperEl;k&&(k.style.transitionDuration=`${l.params.speed}ms`,k.style.transitionTimingFunction="ease",k.style.transitionProperty="transform"),l.slides.length,e.offsetWidth,null===(o=l.wrapperEl)||void 0===o||o.offsetWidth,getComputedStyle(l.wrapperEl).transform,getComputedStyle(l.wrapperEl).transition,getComputedStyle(l.wrapperEl).transitionDuration,l.wrapperEl.style.transition,l.getTranslate(),l.params.speed,Array.from(l.slides).slice(0,3).map((e,t)=>({index:t,width:e.offsetWidth,inlineWidth:e.style.width,computedWidth:getComputedStyle(e).width,transform:getComputedStyle(e).transform,isVisible:e.offsetWidth>0&&e.offsetHeight>0})),l.updateProgress(),null===(p=null===(r=l.pagination)||void 0===r?void 0:r.render)||void 0===p||p.call(r),null===(u=null===(c=l.pagination)||void 0===c?void 0:c.update)||void 0===u||u.call(c),null===(g=null===(h=l.navigation)||void 0===h?void 0:h.update)||void 0===g||g.call(h),l.update();const I=()=>{if("dynamic"!==T.pagination_style)return;const e=l.slides.length,t=l.activeIndex,i=null==m?void 0:m.querySelector(w);if(!i)return;const n=Array.from(i.querySelectorAll(".swiper-pagination-bullet"));let o=0,r=e-1;e<=3?(o=0,r=e-1):0===t?(o=0,r=2):1===t?(o=0,r=3):t===e-1?(o=Math.max(0,e-3),r=e-1):t===e-2?(o=Math.max(0,e-4),r=e-1):(o=Math.max(0,t-2),r=Math.min(e-1,t+2)),n.forEach((e,i)=>{const n=i>=o&&i<=r,a=Math.abs(i-t);n?(e.style.display="",e.classList.remove("swiper-pagination-bullet-active-main","swiper-pagination-bullet-active-prev","swiper-pagination-bullet-active-next","swiper-pagination-bullet-active-prev-prev","swiper-pagination-bullet-active-next-next"),0===a?(e.classList.add("swiper-pagination-bullet-active"),e.classList.add("swiper-pagination-bullet-active-main"),e.style.transform="scale(1.3)",e.style.opacity="1"):(e.classList.remove("swiper-pagination-bullet-active"),1===a?(i<t?e.classList.add("swiper-pagination-bullet-active-prev"):e.classList.add("swiper-pagination-bullet-active-next"),e.style.transform="scale(1)",e.style.opacity="0.7"):2===a?(i<t?e.classList.add("swiper-pagination-bullet-active-prev-prev"):e.classList.add("swiper-pagination-bullet-active-next-next"),e.style.transform="scale(0.6)",e.style.opacity="0.4"):(e.style.transform="scale(0.6)",e.style.opacity="0.4"))):e.style.display="none"})};"dynamic"===T.pagination_style&&setTimeout(()=>{I()},100);let C=!1;const F=()=>{var e;if(!l||l.destroyed||C)return;C=!0;const t=l.slides[l.activeIndex];if(!t)return void(C=!1);const i=t.querySelector(".slide-content");if(!i)return void(C=!1);const n=X&&i.offsetHeight||i.scrollHeight,o=l.wrapperEl,r=l.el;null===(e=T.auto_height)||void 0===e||e?(o&&(o.style.height=`${n}px`,o.style.transitionDuration=`${l.params.speed}ms`,o.style.transitionTimingFunction="ease",o.style.transitionProperty="transform"),r&&(r.style.transition="height 0.3s ease",r.style.height=`${n}px`),l.slides.forEach(e=>{e.style.height="auto",e.style.minHeight="0",X&&(e.style.width="100%",e.style.position="relative")}),C=!1):C=!1};let E=l.activeIndex;l.on("slideChange",()=>{var e;const t=l.activeIndex!==E;E=l.activeIndex,l.params.loop||l.params.rewind||(x&&x.classList.toggle("swiper-button-disabled",l.isBeginning),_&&_.classList.toggle("swiper-button-disabled",l.isEnd));const i="fade"===(T.transition_effect||"slide");null!==(e=T.auto_height)&&void 0!==e&&!e||i||!t||requestAnimationFrame(()=>{requestAnimationFrame(()=>{F()})}),t&&"dynamic"===T.pagination_style&&I(),t&&window.dispatchEvent(new CustomEvent("slider-state-changed",{bubbles:!0,composed:!0,detail:{sliderId:D,index:l.activeIndex}}))}),l.on("destroy",()=>{b()});const L=()=>{var e,t;if(!l||l.destroyed)return;const i="fade"===(T.transition_effect||"slide"),n=l.slides[l.activeIndex];if(!n)return;const o=n.querySelector(".slide-content");if(!o)return;const r=X&&o.offsetHeight||o.scrollHeight,a=l.wrapperEl,s=l.el;if(null!==(e=T.auto_height)&&void 0!==e&&!e||i){if(a&&(null!==(t=T.auto_height)&&void 0!==t&&!t||i)&&T.slider_height){const e=T.slider_height||300;a.style.height=`${e}px`,s&&(s.style.height=`${e}px`)}}else a&&(a.style.height=`${r}px`,a.style.transitionDuration=`${l.params.speed}ms`,a.style.transitionTimingFunction="ease",a.style.transitionProperty="transform"),s&&(s.style.transition="height 0.3s ease",s.style.height=`${r}px`),l.slides.forEach(e=>{e.style.height="auto",e.style.minHeight="0",X&&(e.style.width="100%",e.style.position="relative")});l.params.loop||l.params.rewind||(x&&x.classList.toggle("swiper-button-disabled",l.isBeginning),_&&_.classList.toggle("swiper-button-disabled",l.isEnd))};requestAnimationFrame(()=>{requestAnimationFrame(()=>{l&&!l.destroyed&&(l.updateSize(),l.updateSlides(),l.updateSlidesClasses(),l.slides.forEach(e=>{"slide"!==le&&"slide-left"!==le&&"slide-right"!==le||(X?e.style.height="":e.style.width="")}),l.update(),l.setTranslate(l.getTranslate()),L(),"live"===t&&requestAnimationFrame(()=>{l&&!l.destroyed&&(l.updateSize(),l.updateSlides(),l.updateSlidesClasses(),l.update())}),setTimeout(()=>{l&&!l.destroyed&&(L(),"live"===t&&(l.updateSize(),l.updateSlides(),l.update()))},"live"===t?200:100))})});const P="fade"===(T.transition_effect||"slide");let q=null;const R=new ResizeObserver(()=>{var e;!l||l.destroyed||null!==(e=T.auto_height)&&void 0!==e&&!e||P||(null!==q&&clearTimeout(q),q=window.setTimeout(()=>{requestAnimationFrame(()=>{if(l&&!l.destroyed){const e=l.slides[l.activeIndex],t=null==e?void 0:e.querySelector(".slide-content");if(t){const e="vertical"===T.slider_direction&&t.offsetHeight||t.scrollHeight,i=l.wrapperEl,n=l.el;i&&(i.style.height=`${e}px`,i.style.transitionDuration=`${l.params.speed}ms`,i.style.transitionTimingFunction="ease",i.style.transitionProperty="transform"),n&&(n.style.height=`${e}px`),l.slides.forEach(e=>{e.style.height="auto",e.style.minHeight="0"})}}})},100))});e.querySelectorAll(".slide-content").forEach(e=>{R.observe(e)}),e._swiperResizeObserver=R,delete e._swiperInitializing}catch(t){console.error("[Slider] Error initializing:",t),e.removeAttribute("data-swiper-initialized"),delete e._swiperInitializing}};r?setTimeout(d,a):requestAnimationFrame(()=>requestAnimationFrame(d))});const O=T.slides_per_view||1,W=T.vertical_alignment||"top",H=T.arrow_size||40,j=T.arrow_style||"default",V=T.arrow_position_offset||0,B=T.arrows_always_visible||!1,U="minimal"===j?`\n        width: ${H}px;\n        height: ${H}px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: none;\n        background: transparent !important;\n        transition: all 0.3s;\n        color: ${T.arrow_color||"white"};\n        opacity: ${B?"1":"0"};\n      `:"default"===j?`\n        width: ${H}px;\n        height: ${H}px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: none;\n        transition: all 0.3s;\n        opacity: ${B?"1":"0"};\n      `:`\n        width: ${H}px;\n        height: ${H}px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        border: none;\n        transition: all 0.3s;\n        background: ${T.arrow_background_color||"rgba(0, 0, 0, 0.5)"};\n        color: ${T.arrow_color||"white"};\n        border: ${"square"===j?"2px solid "+(T.arrow_color||"white"):"none"};\n        border-radius: ${"circle"===j?"50%":"square"===j?"4px":"0"};\n        opacity: ${B?"1":"0"};\n      `,Y=`${10+V}px`,G=`${10+V}px`,X="vertical"===T.slider_direction,K=T.slider_height||400,J=null!==(a=T.pagination_overlay)&&void 0!==a&&a,Z=T.pagination_position||(X?"right":"bottom"),Q=T.pagination_style||"dots",ee="numbers"===Q,te="scrollbar"===Q,ie=T.show_pagination&&!J&&!X,ne=ie?ee||te?32:16:0,oe=ie&&ee?80:0,re=J?20:0,ae=()=>n.qy`
        <div
          class="slider-pagination-row"
          data-slider-id="${D}"
          data-position="${Z}"
        >
          ${te?n.qy`
                <div class="swiper-scrollbar" data-slider-id="${D}"></div>
              `:n.qy`
                <div
                  class="swiper-pagination pagination-${Z}"
                  data-slider-id="${D}"
                ></div>
              `}
        </div>
      `,le=T.transition_effect||"slide",se="fade"===le,de=(P.border_style||q.border_style)&&"none"!==(P.border_style||q.border_style)?`${P.border_width||q.border_width||"1px"} ${P.border_style||q.border_style} ${P.border_color||q.border_color||"var(--divider-color)"}`:"none",pe=this.getHoverEffectClass(e),ce=this.buildStyleString(this.buildDesignStyles(e,t));let ue=!1;const he=g.xd.checkIntegrationAuth(t);if("pro"===(null===(s=null==he?void 0:he.subscription)||void 0===s?void 0:s.tier)&&"active"===(null===(d=null==he?void 0:he.subscription)||void 0===d?void 0:d.status))ue=!0;else if(g.xd.isAuthenticated()){const e=g.xd.getCurrentUser();"pro"===(null===(m=null==e?void 0:e.subscription)||void 0===m?void 0:m.tier)&&"active"===(null===(w=null==e?void 0:e.subscription)||void 0===w?void 0:w.status)&&(ue=!0)}const ge=e=>!!e&&!!e.action&&"nothing"!==e.action&&"default"!==e.action,ve=ge(T.tap_action)||ge(T.hold_action)||ge(T.double_tap_action),me=ve?this.createGestureHandlers(T.id,{tap_action:T.tap_action,hold_action:T.hold_action,double_tap_action:T.double_tap_action,entity:T.entity,module:T},t,i,[".swiper-button-prev",".swiper-button-next",".swiper-pagination",".swiper-scrollbar",".slider-pagination-row"]):null;return this.wrapWithAnimation(n.qy`
      <style>
        .ultra-slider-container {
          position: relative;
          width: ${T.slider_width||"100%"};
          ${X?`height: ${K}px;`:""}
          display: flex;
          flex-direction: ${X?"row":"column"};
          margin: 0 auto;
          overflow: ${"hidden"};
          border: ${de};
          ${"live"===r?"min-height: 0; max-height: none; max-width: 100%; overflow: hidden !important;":""}
        }
        .ultra-slider-container .swiper {
          width: 100% !important;
          max-width: 100% !important;
          height: ${X?`${K}px`:se?`${T.slider_height||K}px`:null===(b=T.auto_height)||void 0===b||b?"auto":`${T.slider_height||K}px`};
          position: relative;
          overflow: hidden !important;
          border: none;
          ${"live"===r?"min-height: 0; max-width: 100% !important; overflow: hidden !important;":""}
          touch-action: ${X?"pan-x":"pan-y"};
          /* CRITICAL: Ensure container doesn't clip slides during transition */
          ${"slide"===le||"slide-left"===le||"slide-right"===le?"\n          /* For slide effect, ensure overflow is hidden but slides can still be visible during transition */\n          ":""}
          ${"live"===r?"min-height: 0;":""}
          ${null===(f=T.auto_height)||void 0===f||f||!T.slider_height||X?"":`height: ${T.slider_height}px !important;`}
          /* Effects always need fixed height for proper rendering */
          ${se&&!X?`height: ${T.slider_height||K}px !important;`:""}
          /* Add padding for pagination when overlay is disabled (only applies when auto_height is true) */
          ${X||!T.show_pagination||null!==(y=T.auto_height)&&void 0!==y&&!y||J||ee||te?"":`\n            ${"top"===Z?"padding-top: 32px;":""}\n            ${"bottom"===Z?"padding-bottom: 32px;":""}\n          `}
          ${!X||!T.show_pagination||"scrollbar"===T.pagination_style||null!==(_=T.auto_height)&&void 0!==_&&!_||null!==(x=T.pagination_overlay)&&void 0!==x&&x?"":`\n            ${"left"===Z?"padding-left: 32px;":""}\n            ${"right"===Z?"padding-right: 32px;":""}\n          `}
        }
        .ultra-slider-container .swiper-wrapper {
          /* Swiper handles positioning - let Swiper control all transform/positioning */
          position: relative;
          z-index: 1;
          box-sizing: border-box;
          border: none;
          ${"live"===r?"min-height: 0;":""}
          /* CRITICAL: Don't override Swiper's width/height for effects - Swiper handles internally */
          ${"slide"===le||"slide-left"===le||"slide-right"===le?`\n          /* For slide effect, Swiper will set wrapper width inline to (slideWidth * slidesCount) */\n          width: auto !important;\n          display: flex;\n          flex-direction: ${X?"column":"row"};\n          flex-wrap: nowrap;\n          will-change: transform;\n          /* CRITICAL: Let Swiper handle ALL transitions - don't set any transition properties */\n          ${X?`height: ${null===(S=T.auto_height)||void 0===S||S?"auto":"100%"};`:null===(z=T.auto_height)||void 0===z||z?"height: auto;":`height: ${T.slider_height||K}px;`}\n          `:"\n          /* CRITICAL: For fade - let Swiper fully control wrapper */\n          /* Swiper sets fade effect to use absolute positioning internally */\n          width: 100%;\n          height: 100%;\n          "}
        }
        .ultra-slider-container .swiper-slide {
          /* Swiper handles slide positioning - different handling per effect type */
          box-sizing: border-box;
          padding: 0;
          border: none;
          ${"live"===r?"min-height: 0; overflow: hidden;":""}
          
          ${"slide"===le||"slide-left"===le||"slide-right"===le?`\n          /* SLIDE EFFECT: flexbox layout with transform transitions */\n          display: block;\n          flex-shrink: 0;\n          ${X?"\n            width: 100%;\n            height: auto;\n            min-height: 0;\n            position: relative;\n          ":`\n            width: 100%;\n            min-width: 0;\n            max-width: 100%;\n            height: ${null===(A=T.auto_height)||void 0===A||A?"auto":"100%"};\n          `}\n          overflow: ${null===(k=T.auto_height)||void 0===k||k?"visible":"hidden"};\n          `:"\n          /* FADE EFFECT: Swiper uses absolute positioning for crossfade */\n          /* Don't override width/height - let Swiper control positioning */\n          width: 100%;\n          height: 100%;\n          "}
        }
        /* Ensure slide content displays properly */
        .ultra-slider-container .swiper-slide > .slide-content {
          display: flex;
          flex-direction: column;
          /* CRITICAL: Constrain slide-content to slide width */
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          ${"live"===r?"max-width: 100% !important; overflow: hidden !important;":""}
        }
        .ultra-slider-container .slide-content {
          width: 100%;
          max-width: 100%;
          height: ${X?"auto":se?"100%":"fit-content"};
          display: flex;
          flex-direction: column;
          gap: 8px;
          overflow: ${se?"hidden":"visible"};
          box-sizing: border-box;
          flex: ${"0 0 auto"};
          border: none;
          /* Vertical alignment - only applies when slides_per_view > 1 */
          ${O>1?`justify-content: ${{top:"flex-start",center:"center",bottom:"flex-end",stretch:"stretch"}[W]};`:""}
          ${O>1&&"stretch"===W?"height: 100%;":""}
          ${"live"===r?"min-height: 0; max-width: 100% !important; overflow: hidden !important;":""}
        }
        .ultra-slider-container .slide-content > * {
          flex-shrink: 0;
          min-height: 0;
          height: auto;
          /* CRITICAL: Constrain child elements to slide width */
          max-width: 100%;
          box-sizing: border-box;
          ${"live"===r?"max-width: 100% !important; overflow: hidden;":""}
        }
        .ultra-slider-container .child-module-wrapper {
          overflow: visible;
          box-sizing: border-box;
          height: fit-content;
          flex: 0 0 auto;
          border: none;
          /* CRITICAL: Constrain child modules to slide width */
          width: 100% !important;
          max-width: 100% !important;
          ${"live"===r?"max-width: 100% !important; overflow: hidden !important;":""}
        }
        /* Ensure nested layout modules scale correctly within slider slides */
        .ultra-slider-container .swiper-slide .horizontal-module-preview,
        .ultra-slider-container .swiper-slide .vertical-module-preview,
        .ultra-slider-container .swiper-slide .slider-module {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box;
        }
        /* Ensure nested horizontal layout content scales correctly */
        .ultra-slider-container .swiper-slide .horizontal-preview-content {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box;
          /* When multiple slides visible, ensure flex children scale properly */
          ${O>1?"\n            flex-shrink: 1;\n            flex-basis: 0;\n          ":""}
        }
        /* Ensure nested horizontal layout children scale correctly */
        .ultra-slider-container .swiper-slide .horizontal-preview-content .child-module-preview {
          min-width: 0 !important;
          flex-shrink: 1 !important;
          box-sizing: border-box;
        }
        /* Ensure nested vertical layout content scales correctly */
        .ultra-slider-container .swiper-slide .vertical-preview-content {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box;
        }
        /* Ensure nested vertical layout children scale correctly */
        .ultra-slider-container .swiper-slide .vertical-preview-content .child-module-preview {
          min-width: 0 !important;
          flex-shrink: 1 !important;
          box-sizing: border-box;
        }
        /* Ensure nested slider modules scale correctly */
        .ultra-slider-container .swiper-slide .slider-module .ultra-slider-container {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          box-sizing: border-box;
        }
        .ultra-slider-container .swiper-button-prev,
        .ultra-slider-container .swiper-button-next {
          ${U}
          position: absolute;
          ${X?"\n            left: 50%;\n            transform: translateX(-50%);\n          ":"\n            top: 50%;\n            transform: translateY(-50%);\n          "}
          z-index: 10;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        .ultra-slider-container .swiper-button-prev {
          ${X?`\n            top: ${Y};\n          `:`\n            left: ${Y};\n          `}
        }
        .ultra-slider-container .swiper-button-next {
          ${X?`\n            bottom: ${G};\n            top: auto;\n          `:`\n            right: ${G};\n          `}
        }
        /* Hide disabled arrows when loop is off */
        .ultra-slider-container .swiper-button-disabled {
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        /* CRITICAL: Completely hide Swiper's default arrow content */
        .ultra-slider-container .swiper-button-prev *:not(ha-icon):not(ha-icon *),
        .ultra-slider-container .swiper-button-next *:not(ha-icon):not(ha-icon *) {
          display: none !important;
        }
        .ultra-slider-container .swiper-button-prev::before,
        .ultra-slider-container .swiper-button-prev::after,
        .ultra-slider-container .swiper-button-next::before,
        .ultra-slider-container .swiper-button-next::after {
          content: none !important;
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }
        /* Ensure ONLY our ha-icon is visible */
        .ultra-slider-container .swiper-button-prev ha-icon,
        .ultra-slider-container .swiper-button-next ha-icon {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          pointer-events: none;
          width: 100%;
          height: 100%;
        }
        /* Reset any Swiper default styling on navigation buttons */
        .ultra-slider-container .swiper-button-prev,
        .ultra-slider-container .swiper-button-next {
          font-family: inherit !important;
          font-size: inherit !important;
        }
        /* Show arrows on hover when not disabled */
        .ultra-slider-container:hover .swiper-button-prev:not(.swiper-button-disabled),
        .ultra-slider-container:hover .swiper-button-next:not(.swiper-button-disabled) {
          opacity: 1 !important;
        }
        .ultra-slider-container .swiper-button-prev:not(.swiper-button-disabled):hover,
        .ultra-slider-container .swiper-button-next:not(.swiper-button-disabled):hover {
          ${X?"\n            transform: translateX(-50%) scale(1.1) !important;\n          ":"\n            transform: translateY(-50%) scale(1.1) !important;\n          "}
        }
        /* CRITICAL: Completely hide disabled arrows */
        .ultra-slider-container .swiper-button-disabled,
        .ultra-slider-container .swiper-button-prev.swiper-button-disabled,
        .ultra-slider-container .swiper-button-next.swiper-button-disabled {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        /* Override any hover states for disabled arrows */
        .ultra-slider-container:hover .swiper-button-disabled,
        .ultra-slider-container:hover .swiper-button-prev.swiper-button-disabled,
        .ultra-slider-container:hover .swiper-button-next.swiper-button-disabled {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        /* Custom pagination styling */
        .ultra-slider-container .swiper-pagination {
          position: ${X||J||null!==(I=T.auto_height)&&void 0!==I&&!I?"absolute":"relative"};
          z-index: ${re};
          pointer-events: all;
          ${!X||"left"!==Z&&"right"!==Z?X?"\n                right: 10px;\n                top: 50%;\n                transform: translateY(-50%);\n                width: auto;\n                height: auto;\n                flex-direction: column;\n              ":J||null!==(C=T.auto_height)&&void 0!==C&&!C?"\n                bottom: 10px;\n                left: 50%;\n                transform: translateX(-50%);\n                width: auto;\n                height: auto;\n                pointer-events: all;\n              ":"\n                display: flex;\n                justify-content: center;\n                align-items: center;\n              ":""}
        }
        ${ie?`\n        .ultra-slider-container .slider-pagination-row {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          width: 100%;\n          gap: 8px;\n        }\n        .ultra-slider-container .slider-pagination-row[data-position='bottom'] {\n          margin-top: ${oe}px;\n        }\n        .ultra-slider-container .slider-pagination-row[data-position='top'] {\n          margin-bottom: ${ne}px;\n        }\n        .ultra-slider-container .slider-pagination-row .swiper-pagination,\n        .ultra-slider-container .slider-pagination-row .swiper-scrollbar {\n          position: relative !important;\n          transform: none !important;\n          left: auto !important;\n          right: auto !important;\n          top: auto !important;\n          bottom: auto !important;\n          width: 100%;\n          margin: 0;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        .ultra-slider-container .slider-pagination-row .swiper-scrollbar {\n          height: 8px;\n          background: ${T.pagination_color||"rgba(0, 0, 0, 0.1)"};\n          border-radius: var(--uc-r-4, 4px);\n        }\n        .ultra-slider-container .slider-pagination-row .swiper-scrollbar .swiper-scrollbar-drag {\n          background: ${T.pagination_active_color||"var(--primary-color)"};\n          border-radius: var(--uc-r-4, 4px);\n        }\n        `:""}
        /* Ensure pagination is visible when positioned on left/right (vertical sliders only) */
        ${!X||"left"!==Z&&"right"!==Z?"":"\n        /* Remove wrapper margin - padding handles spacing */\n        "}
        .ultra-slider-container .swiper-pagination-bullet {
          width: ${T.pagination_size||12}px;
          height: ${T.pagination_size||12}px;
          background: ${T.pagination_color||"var(--primary-text-color)"};
          opacity: 0.5;
          margin: ${X?"4px 0":"0 4px"};
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.3s;
          pointer-events: all;
          display: inline-block;
        }
        .ultra-slider-container .swiper-pagination-bullet-active {
          background: ${T.pagination_active_color||"var(--primary-color)"};
          opacity: 1;
          transform: scale(1.2);
        }
        /* Dynamic pagination styling - centered with tapering bullets */
        /* Note: These styles apply to ALL dynamic pagination, but will be overridden by conditional styles below */
        .ultra-slider-container .swiper-pagination-bullets-dynamic {
          overflow: hidden;
        }
        /* Custom styling for numbers pagination - only when using numbers style */
        ${"numbers"===T.pagination_style?`\n        .ultra-slider-container .swiper-pagination-bullet {\n          border: 2px solid ${T.pagination_color||"var(--primary-text-color)"};\n          background: transparent;\n          color: ${T.pagination_color||"var(--primary-text-color)"};\n        }\n        .ultra-slider-container .swiper-pagination-bullet-active {\n          border: 2px solid ${T.pagination_active_color||"var(--primary-color)"};\n          background: ${T.pagination_active_color||"var(--primary-color)"};\n          color: white;\n        }\n        `:""}
        /* Dots and Dash pagination styling */
        ${"dots-and-dash"===T.pagination_style?`\n        .ultra-slider-container .swiper-pagination-bullet {\n          width: ${T.pagination_size||12}px;\n          height: ${T.pagination_size||12}px;\n          background: ${T.pagination_color||"var(--primary-text-color)"};\n          opacity: 0.5;\n          margin: ${X?"4px 0":"0 4px"};\n          cursor: pointer;\n          border-radius: 50%;\n          transition: all 0.3s;\n        }\n        .ultra-slider-container .swiper-pagination-bullet-active {\n          width: ${2*(T.pagination_size||12)}px;\n          height: ${T.pagination_size||12}px;\n          background: ${T.pagination_active_color||"var(--primary-color)"};\n          opacity: 1;\n          border-radius: ${3*(T.pagination_size||12)/4}px;\n          transform: scale(1);\n        }\n        `:""}
        /* Dash Lines pagination styling */
        ${"dash-lines"===T.pagination_style?`\n        .ultra-slider-container .swiper-pagination-bullet {\n          width: ${2*(T.pagination_size||12)}px;\n          height: ${(T.pagination_size||12)/2}px;\n          background: ${T.pagination_color||"var(--primary-text-color)"};\n          opacity: 0.5;\n          margin: ${X?"4px 0":"0 4px"};\n          cursor: pointer;\n          border-radius: ${(T.pagination_size||12)/4}px;\n          transition: all 0.3s;\n        }\n        .ultra-slider-container .swiper-pagination-bullet-active {\n          width: ${2.5*(T.pagination_size||12)}px;\n          height: ${(T.pagination_size||12)/2}px;\n          background: ${T.pagination_active_color||"var(--primary-color)"};\n          opacity: 1;\n          border-radius: ${(T.pagination_size||12)/4}px;\n          transform: scale(1);\n        }\n        `:""}
        /* Dynamic pagination styling - active is largest, adjacent bullets are medium, outer bullets are smallest */
        /* Size progression: smallest (outer) -> medium (adjacent) -> largest (active) -> medium (adjacent) -> smallest (outer) */
        ${"dynamic"===T.pagination_style?`\n        .ultra-slider-container .swiper-pagination-bullets-dynamic {\n          overflow: visible !important;\n          width: auto !important;\n          text-align: center !important;\n          display: inline-block !important;\n          ${!X||"left"!==T.pagination_position&&"right"!==T.pagination_position?"\n              left: 50% !important;\n              transform: translateX(-50%) !important;\n              position: relative !important;\n            ":"\n              left: auto !important;\n              transform: none !important;\n              position: relative !important;\n            "}\n        }\n        /* Base style for all dynamic bullets - smallest size (outer bullets, 2 steps away) */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n          opacity: 0.4 !important;\n          transition: all 0.3s ease !important;\n          transform-origin: center center !important;\n          transform: scale(0.6) !important;\n          width: ${T.pagination_size||12}px !important;\n          height: ${T.pagination_size||12}px !important;\n        }\n        /* Override Swiper's default active bullet styles */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n          transform: scale(0.6) !important;\n          opacity: 0.4 !important;\n        }\n        /* Explicitly set outer bullets (2 steps away) to smallest size */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev,\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n          transform: scale(0.6) !important;\n          opacity: 0.4 !important;\n          width: ${T.pagination_size||12}px !important;\n          height: ${T.pagination_size||12}px !important;\n        }\n        /* Medium size (1 step away from active) - adjacent bullets */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev,\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n          transform: scale(1) !important;\n          opacity: 0.7 !important;\n          width: ${T.pagination_size||12}px !important;\n          height: ${T.pagination_size||12}px !important;\n        }\n        /* Largest size (active bullet) - must be last to override everything */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main,\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main.swiper-pagination-bullet-active {\n          transform: scale(1.3) !important;\n          opacity: 1 !important;\n          width: ${T.pagination_size||12}px !important;\n          height: ${T.pagination_size||12}px !important;\n        }\n        /* Ensure regular active bullets (without active-main class) don't get wrong scale */\n        .ultra-slider-container .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active:not(.swiper-pagination-bullet-active-main):not(.swiper-pagination-bullet-active-prev):not(.swiper-pagination-bullet-active-next) {\n          transform: scale(0.6) !important;\n        }\n        `:""}
        .ultra-slider-container .swiper-pagination-fraction {
          font-size: ${(T.pagination_size||12)+4}px;
          font-weight: 600;
          color: ${T.pagination_active_color||"var(--primary-color)"};
        }
        .ultra-slider-container .swiper-pagination-progressbar {
          position: absolute;
          ${X?"\n            width: 4px;\n            height: 100%;\n            top: 0;\n            left: auto;\n            right: 0;\n          ":`\n            height: ${(T.pagination_size||12)/2}px;\n            width: 100%;\n            bottom: 0;\n            top: auto;\n          `}
          background: ${T.pagination_color||"rgba(0, 0, 0, 0.2)"};
          border-radius: ${(T.pagination_size||12)/4}px;
        }
        .ultra-slider-container .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
          background: ${T.pagination_active_color||"var(--primary-color)"};
          ${X?"\n            width: 100%;\n            height: 0%;\n            top: 0;\n            left: 0;\n          ":"\n            width: 0%;\n            height: 100%;\n            top: 0;\n            left: 0;\n          "}
        }
        /* Custom pagination styling */
        .ultra-slider-container .swiper-pagination {
          position: ${X||J||null!==(F=T.auto_height)&&void 0!==F&&!F?"absolute":"relative"};
          z-index: ${re};
          pointer-events: all;
          ${X?"\n            right: 10px;\n            top: 50%;\n            transform: translateY(-50%);\n            width: auto;\n            height: auto;\n            flex-direction: column;\n          ":J||null!==(E=T.auto_height)&&void 0!==E&&!E?`\n            bottom: 10px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: auto;\n            height: auto;\n            z-index: ${re};\n            pointer-events: all;\n          `:"\n                display: flex;\n                justify-content: center;\n                align-items: center;\n          "}
        }
        /* Pagination position overrides - must come after base styles */
        .ultra-slider-container .swiper-pagination.pagination-top {
          top: 10px !important;
          bottom: auto !important;
          left: 50% !important;
          right: auto !important;
          transform: translateX(-50%) !important;
          position: absolute !important;
          ${X?"left: auto !important; right: 10px !important; top: 0 !important; transform: translateY(0) !important;":""}
        }
        /* Left and Right pagination for vertical sliders - rotated to match top/bottom styling */
        ${X?`\n        .ultra-slider-container .swiper-pagination.pagination-left {\n          left: 0 !important;\n          right: auto !important;\n          top: 50% !important;\n          bottom: auto !important;\n          transform: translateY(-50%) rotate(90deg) !important;\n          transform-origin: center center !important;\n          position: absolute !important;\n          width: auto !important;\n          height: auto !important;\n          display: flex !important;\n          flex-direction: row !important;\n          align-items: center !important;\n          z-index: ${re} !important;\n          padding-left: 10px;\n        }\n        .ultra-slider-container .swiper-pagination.pagination-left .swiper-pagination-bullet {\n          margin: 0 4px !important;\n          transform-origin: center center !important;\n        }\n        .ultra-slider-container .swiper-pagination.pagination-left .swiper-pagination-bullets-dynamic {\n          transform: none !important; /* Remove rotation from dynamic container, let parent handle it */\n        }\n        .ultra-slider-container .swiper-pagination.pagination-right {\n          left: auto !important;\n          right: 0 !important;\n          top: 50% !important;\n          bottom: auto !important;\n          transform: translateY(-50%) rotate(-90deg) !important;\n          transform-origin: center center !important;\n          position: absolute !important;\n          width: auto !important;\n          height: auto !important;\n          display: flex !important;\n          flex-direction: row !important;\n          align-items: center !important;\n          z-index: ${re} !important;\n          padding-right: 10px;\n        }\n        .ultra-slider-container .swiper-pagination.pagination-right .swiper-pagination-bullet {\n          margin: 0 4px !important;\n          transform-origin: center center !important;\n        }\n        .ultra-slider-container .swiper-pagination.pagination-right .swiper-pagination-bullets-dynamic {\n          transform: none !important; /* Remove rotation from dynamic container, let parent handle it */\n        }\n        `:""}
        .ultra-slider-container .swiper-pagination.pagination-bottom {
          top: auto !important;
          bottom: 10px !important;
          left: 50% !important;
          right: auto !important;
          transform: translateX(-50%) !important;
          position: absolute !important;
          z-index: ${re} !important;
          ${X?"left: auto !important; right: 10px !important; top: auto !important; bottom: 0 !important; transform: translateY(0) !important;":""}
        }
        /* Scrollbar styling */
        .ultra-slider-container .swiper-scrollbar {
          position: absolute;
          ${X?"\n            width: 8px;\n            height: 100%;\n            right: 0;\n            top: 0;\n            left: auto;\n          ":"\n            width: 100%;\n            height: 8px;\n            bottom: 0;\n            top: auto;\n          "}
          background: ${T.pagination_color||"rgba(0, 0, 0, 0.1)"};
          border-radius: var(--uc-r-4, 4px);
          z-index: ${re};
        }
        .ultra-slider-container .swiper-scrollbar-drag {
          background: ${T.pagination_active_color||"var(--primary-color)"};
          border-radius: var(--uc-r-4, 4px);
          ${X?"\n            width: 100%;\n          ":"\n            height: 100%;\n          "}
        }
        /* ===== EFFECT-SPECIFIC CSS ===== */
        /* FADE EFFECT: Swiper uses absolute positioning and opacity */
        /* Note: Swiper adds .swiper-fade class to the .swiper element, not the container */
        ${"fade"===le?`\n        .ultra-slider-container .swiper.swiper-fade .swiper-wrapper {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n        .ultra-slider-container .swiper.swiper-fade .swiper-slide {\n          position: absolute !important;\n          top: 0 !important;\n          left: 0 !important;\n          width: 100% !important;\n          height: 100% !important;\n          opacity: 0 !important;\n          transition: opacity ${T.transition_speed||300}ms ease !important;\n          pointer-events: none;\n          z-index: 1;\n        }\n        .ultra-slider-container .swiper.swiper-fade .swiper-slide-active {\n          opacity: 1 !important;\n          pointer-events: auto;\n          z-index: 2;\n        }\n        /* Ensure slide content fills the slide for fade effect */\n        .ultra-slider-container .swiper.swiper-fade .slide-content {\n          height: 100%;\n        }\n        `:""}
      </style>

      <div
        class="ultra-slider-container uc-module-container ${pe}"
        style="${ce}${ve?"; cursor: pointer;":""}"
        data-slider-id="${D}"
        @pointerdown=${me?me.onPointerDown:null}
        @pointermove=${me?me.onPointerMove:null}
        @pointerup=${me?me.onPointerUp:null}
        @pointercancel=${me?me.onPointerCancel:null}
        @pointerleave=${me?me.onPointerLeave:null}
      >
        ${ie&&"top"===Z?ae():""}
        <div
          class="swiper ${M}"
          data-preview-context="${r||"dashboard"}"
          ${(0,o.K)(e=>{if(!(e&&e instanceof HTMLElement))return;const t=e.getAttribute("data-preview-context")||"dashboard",i=e.hasAttribute("data-swiper-initialized"),n=e.getAttribute("data-swiper-init-context"),o=JSON.stringify({show_pagination:T.show_pagination,pagination_style:T.pagination_style,pagination_position:T.pagination_position,pagination_overlay:T.pagination_overlay,pagination_size:T.pagination_size,pagination_color:T.pagination_color,pagination_active_color:T.pagination_active_color,show_arrows:T.show_arrows,slider_direction:T.slider_direction,slides_per_view:T.slides_per_view,space_between:T.space_between,gap:T.gap,centered_slides:T.centered_slides,auto_height:T.auto_height,slider_height:T.slider_height,transition_effect:T.transition_effect,transition_speed:T.transition_speed,auto_play:T.auto_play,auto_play_delay:T.auto_play_delay,pause_on_hover:T.pause_on_hover,loop:T.loop,allow_swipe:T.allow_swipe,allow_keyboard:T.allow_keyboard,allow_mousewheel:T.allow_mousewheel,page_count:N.length}),r=e.getAttribute("data-config-hash"),a=r&&r!==o;if(i&&n===t&&!a&&e.swiper)return;const l=window[`initSwiper_${D}`];if(i&&(n!==t||a)){const t=e.swiper;t&&(t.destroy(!0,!0),delete e.swiper),$.destroyInstance(D),e.removeAttribute("data-swiper-init-context")}if(e.setAttribute("data-swiper-initialized","true"),e.setAttribute("data-config-hash",o),l)if("ha-preview"===t||"live"===t){const i="live"===t,n=i?2:1,o=i?40:30,r=(i=1)=>{const a=e.querySelectorAll(".swiper-slide").length,s=e.offsetWidth,d=e.offsetHeight;if(a>0&&(s>0||d>0))l(e);else if(i<o){const e=Math.min(100*i*n,1e3);setTimeout(()=>r(i+1),e)}else console.error("[Slider] Failed to initialize after max attempts:",{sliderId:D,context:t,slideCount:a,containerWidth:s,containerHeight:d}),e.removeAttribute("data-swiper-initialized")};setTimeout(()=>r(1),i?300:100)}else l(e);else console.error("[Slider] Initialization function not found for:",D,"context:",t)})}
        >
          <div class="swiper-wrapper">
            ${N.map(e=>n.qy`
                <div class="swiper-slide">
                  <div class="slide-content">
                    ${e.map(e=>{var o,a,l,s;const d=L.getModule(e.type);if(!d)return h.E.renderModuleLoadingState(e);if(!p.S.evaluateModuleVisibility(e))return"";if(((null===(a=null===(o=d.metadata)||void 0===o?void 0:o.tags)||void 0===a?void 0:a.includes("pro"))||(null===(s=null===(l=d.metadata)||void 0===l?void 0:l.tags)||void 0===s?void 0:s.includes("premium")))&&!ue)return n.qy`
                          <div class="child-module-wrapper" style="width: 100%;">
                            <div class="pro-module-locked" style="position: relative;">
                              ${d.renderPreview((0,c.l8)(e),t,i,r)}
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
                                z-index: 10;
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
                                "
                                >
                                  <ha-icon
                                    icon="mdi:lock"
                                    style="font-size: 20px; flex-shrink: 0;"
                                  ></ha-icon>
                                  <div
                                    style="font-size: 11px; font-weight: 600; line-height: 1.2; white-space: nowrap;"
                                  >
                                    Pro Module
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        `;const u=null==e?void 0:e.type;return"horizontal"===u||"vertical"===u||"slider"===u?n.qy`
                          <div class="child-module-wrapper" style="width: 100%;">
                            ${d.renderPreview((0,c.l8)(e),t,i,r)}
                          </div>
                        `:n.qy`
                        <div class="child-module-wrapper" style="width: 100%;">
                          ${d.renderPreview((0,c.l8)(e),t,i,r)}
                        </div>
                      `})}
                  </div>
                </div>
              `)}
          </div>

          ${T.show_pagination&&(J||X)?te?n.qy`
                  <div
                    class="swiper-scrollbar"
                    data-slider-id="${D}"
                  ></div>
                `:n.qy`
                  <div
                    class="swiper-pagination pagination-${Z}"
                    data-slider-id="${D}"
                  ></div>
                `:""}
          ${T.show_arrows?n.qy`
                <div class="swiper-button-prev">
                  <ha-icon
                    icon="${(()=>{const e=T.prev_arrow_icon||"mdi:chevron-left";return X?"mdi:chevron-left"===e?"mdi:chevron-up":e:"mdi:chevron-up"===e?"mdi:chevron-left":e})()}"
                  ></ha-icon>
                </div>
                <div class="swiper-button-next">
                  <ha-icon
                    icon="${(()=>{const e=T.next_arrow_icon||"mdi:chevron-right";return X?"mdi:chevron-right"===e?"mdi:chevron-down":e:"mdi:chevron-down"===e?"mdi:chevron-right":e})()}"
                  ></ha-icon>
                </div>
              `:""}
        </div>
        ${ie&&"top"!==Z?ae():""}
      </div>
    `,e,t)}mapConfigToSwiper(e,t,i){var n,o,r,a;const l=e.slides_per_view||1,s=e.space_between||e.gap||0;let d="horizontal";"vertical"===e.slider_direction&&(d="vertical");let p="slide",c={};const u=e.transition_effect||"slide";"fade"===u?(p="fade",c={fadeEffect:{crossFade:!0}}):("slide"===u||S.warnedLegacyEffects.has(u)||(S.warnedLegacyEffects.add(u),console.info(`[Ultra Card] Slider transition effect "${u}" is no longer supported and falls back to "slide".`)),p="slide","vertical"===e.slider_direction&&(d="vertical"));const h="fade"===p?1:l;let g=!1,v=!1;if(e.show_pagination){const t=`.swiper-pagination[data-slider-id="${i}"]`,n=`.swiper-scrollbar[data-slider-id="${i}"]`,o=e.pagination_style||"dots";"scrollbar"===o?v={el:n,draggable:!0}:(g={el:t,clickable:!0},"dots"===o||"dots-and-dash"===o||"dash-lines"===o?g.type="bullets":"numbers"===o?(g.type="bullets",g.renderBullet=(t,i)=>{const n=e.pagination_size||12,o=e.pagination_color||"var(--primary-text-color)",r=e.pagination_active_color||"var(--primary-color)",a=i.includes("active")?"white":o,l=i.includes("active")?r:"transparent";return`<div class="${i}" style="\n              min-width: ${2.5*n}px !important;\n              height: ${2.5*n}px !important;\n              display: inline-flex !important;\n              align-items: center !important;\n              justify-content: center !important;\n              border-radius: var(--uc-r-4, 4px) !important;\n              font-size: ${n+2}px !important;\n              line-height: 1 !important;\n              margin: 0 4px !important;\n              padding: 4px !important;\n              border: 2px solid ${o} !important;\n              background: ${l} !important;\n              color: ${a} !important;\n              opacity: 1 !important;\n              cursor: pointer !important;\n              font-weight: 600 !important;\n            ">${t+1}</div>`}):"fraction"===o?g.type="fraction":"progressbar"===o?g.type="progressbar":"dynamic"===o&&(g.type="bullets",g.dynamicBullets=!1,g.hideOnClick=!1))}const m=!!e.show_arrows&&{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"};let w=!1;e.auto_play&&(w={delay:e.auto_play_delay||3e3,disableOnInteraction:!1,pauseOnMouseEnter:null===(n=e.pause_on_hover)||void 0===n||n});const b=null===(o=e.loop)||void 0===o||o,f=b&&t>=2&&"slide"===p,y=!f&&b,_=e.transition_speed||300,x=Object.assign(Object.assign({direction:d,effect:p},c),{slidesPerView:h,slidesPerGroup:1,spaceBetween:s,loop:f,rewind:y,speed:_,pagination:g,scrollbar:v,navigation:m,autoplay:w,keyboard:!!e.allow_keyboard&&{enabled:!0,onlyInViewport:!0},mousewheel:!!e.allow_mousewheel&&{enabled:!0,forceToAxis:!0},allowTouchMove:null===(r=e.allow_swipe)||void 0===r||r,autoHeight:!1,centeredSlides:(null===(a=e.centered_slides)||void 0===a||a)&&h>1,observer:!0,observeParents:!0,observeSlideChildren:!0,preventClicks:!1,preventClicksPropagation:!1,touchStartPreventDefault:!1,passiveListeners:!0,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:'button, a, input, select, textarea, .popup-trigger, [role="button"]',touchEventsTarget:"wrapper"});return f&&(x.watchSlidesProgress=!0),x}validate(e){const t=e,i=[...super.validate(e).errors];return t.modules||i.push("Slider must have a modules array"),!1===t.auto_height&&t.slider_height&&(t.slider_height<50||t.slider_height>1e3)&&i.push("Slider height must be between 50 and 1000 pixels"),t.slides_per_view&&(t.slides_per_view<1||t.slides_per_view>10)&&i.push("Slides per view must be between 1 and 10"),{valid:0===i.length,errors:i}}getStyles(){return`${r.m.getSliderStyles()}`}}S.warnedLegacyEffects=new Set}};