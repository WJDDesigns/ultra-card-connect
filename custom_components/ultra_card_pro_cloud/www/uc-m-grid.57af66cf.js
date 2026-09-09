export const __webpack_esm_ids__=[5609];export const __webpack_esm_modules__={5372(e,t,i){i.d(t,{UltraGridModule:()=>m});var n=i(2618),o=i(7475),a=i(766),r=i(5147),l=i(8938),s=i(230),d=i(6673),c=(i(7921),i(4830));const u=[{id:"style_1",name:"Modern Stack",description:"Name above icon above state",category:"modern",showIcon:!0,showName:!0,showState:!0,layout:"vertical",defaultIconSize:32,defaultFontSize:12,defaultPadding:"16px",defaultBorderRadius:"12px",supportsVariableHeight:!0},{id:"style_2",name:"Minimalist",description:"Icon above state only",category:"modern",showIcon:!0,showName:!1,showState:!0,layout:"vertical",defaultIconSize:36,defaultFontSize:11,defaultPadding:"12px",defaultBorderRadius:"8px",supportsVariableHeight:!0},{id:"style_3",name:"Sidebar",description:"Icon left, name + state right",category:"modern",showIcon:!0,showName:!0,showState:!0,layout:"horizontal",defaultIconSize:28,defaultFontSize:13,defaultPadding:"12px",defaultBorderRadius:"10px",supportsVariableHeight:!1},{id:"style_4",name:"Badge Icon",description:"Large icon with floating state badge",category:"modern",showIcon:!0,showName:!1,showState:!0,layout:"icon-only",defaultIconSize:48,defaultFontSize:10,defaultPadding:"16px",defaultBorderRadius:"50%",supportsVariableHeight:!0},{id:"style_5",name:"Compact Row",description:"Icon + name horizontal, state below",category:"modern",showIcon:!0,showName:!0,showState:!0,layout:"vertical",defaultIconSize:24,defaultFontSize:12,defaultPadding:"10px",defaultBorderRadius:"8px",supportsVariableHeight:!0},{id:"style_6",name:"Icon Only",description:"Icon only, hover shows name",category:"minimal",showIcon:!0,showName:!1,showState:!1,layout:"icon-only",defaultIconSize:32,defaultFontSize:11,defaultPadding:"12px",defaultBorderRadius:"8px",supportsVariableHeight:!0},{id:"style_7",name:"Compact",description:"Icon + state, no name",category:"minimal",showIcon:!0,showName:!1,showState:!0,layout:"vertical",defaultIconSize:24,defaultFontSize:10,defaultPadding:"8px",defaultBorderRadius:"6px",supportsVariableHeight:!0},{id:"style_8",name:"Text Only",description:"Name + state, no icon",category:"minimal",showIcon:!1,showName:!0,showState:!0,layout:"vertical",defaultIconSize:0,defaultFontSize:13,defaultPadding:"12px",defaultBorderRadius:"8px",supportsVariableHeight:!0},{id:"style_9",name:"Ring Progress",description:"Circular icon with progress ring",category:"minimal",showIcon:!0,showName:!1,showState:!0,layout:"icon-only",defaultIconSize:40,defaultFontSize:11,defaultPadding:"8px",defaultBorderRadius:"50%",supportsVariableHeight:!0},{id:"style_10",name:"Corner Badge",description:"Square tile with corner state",category:"minimal",showIcon:!0,showName:!1,showState:!0,layout:"icon-only",defaultIconSize:28,defaultFontSize:9,defaultPadding:"12px",defaultBorderRadius:"8px",supportsVariableHeight:!0},{id:"style_11",name:"Card",description:"Card-like with shadow",category:"classic",showIcon:!0,showName:!0,showState:!0,layout:"vertical",defaultIconSize:32,defaultFontSize:12,defaultPadding:"16px",defaultBorderRadius:"12px",supportsVariableHeight:!0},{id:"style_12",name:"Button",description:"Button-style with border",category:"classic",showIcon:!0,showName:!0,showState:!1,layout:"horizontal",defaultIconSize:20,defaultFontSize:13,defaultPadding:"10px 16px",defaultBorderRadius:"24px",supportsVariableHeight:!1},{id:"style_13",name:"List Item",description:"List-style horizontal",category:"classic",showIcon:!0,showName:!0,showState:!0,layout:"horizontal",defaultIconSize:24,defaultFontSize:14,defaultPadding:"8px 12px",defaultBorderRadius:"4px",supportsVariableHeight:!1},{id:"style_14",name:"Badge",description:"Badge-style rounded",category:"classic",showIcon:!0,showName:!0,showState:!1,layout:"horizontal",defaultIconSize:16,defaultFontSize:12,defaultPadding:"6px 12px",defaultBorderRadius:"16px",supportsVariableHeight:!1},{id:"style_15",name:"Panel",description:"Panel with header bar",category:"classic",showIcon:!0,showName:!0,showState:!0,layout:"vertical",defaultIconSize:28,defaultFontSize:12,defaultPadding:"0",defaultBorderRadius:"8px",supportsVariableHeight:!0},{id:"style_16",name:"Glass",description:"Glass morphism effect",category:"advanced",showIcon:!0,showName:!0,showState:!0,layout:"vertical",defaultIconSize:32,defaultFontSize:12,defaultPadding:"16px",defaultBorderRadius:"16px",supportsVariableHeight:!0},{id:"style_17",name:"Gradient",description:"Gradient background overlay",category:"advanced",showIcon:!0,showName:!0,showState:!0,layout:"vertical",defaultIconSize:36,defaultFontSize:12,defaultPadding:"20px",defaultBorderRadius:"12px",supportsVariableHeight:!0},{id:"style_18",name:"Split",description:"Split-color design",category:"advanced",showIcon:!0,showName:!0,showState:!0,layout:"horizontal",defaultIconSize:28,defaultFontSize:12,defaultPadding:"0",defaultBorderRadius:"10px",supportsVariableHeight:!1},{id:"style_19",name:"Neumorphic",description:"Soft UI design",category:"advanced",showIcon:!0,showName:!0,showState:!0,layout:"vertical",defaultIconSize:32,defaultFontSize:12,defaultPadding:"16px",defaultBorderRadius:"16px",supportsVariableHeight:!0},{id:"style_20",name:"Accent Border",description:"Flat with accent border",category:"advanced",showIcon:!0,showName:!0,showState:!0,layout:"vertical",defaultIconSize:28,defaultFontSize:12,defaultPadding:"14px",defaultBorderRadius:"8px",supportsVariableHeight:!0}];function p(e){return u.find(t=>t.id===e)||u[0]}const g=new Set(["style_9","style_11","style_12","style_16","style_17","style_19","style_20"]);class m extends o.m{constructor(){super(...arguments),this._autoFilterMemo=new d.p,this.metadata={type:"grid",title:"Grid",description:"Display entities in a customizable grid layout with multiple styles",author:"WJD Designs",version:"1.0.0",icon:"mdi:view-grid",category:"data",tags:["grid","entities","dashboard","tiles","display"]},this._expandedEntities=new Set,this._draggedItem=null,this._currentPages=new Map,this._animationStartTimes=new Map,this._entityActionStates=new Map,this._gestureState=new Map}createDefault(e,t){return{id:e||this.generateId("grid"),type:"grid",entities:[],enable_auto_filter:!1,include_domains:[],exclude_domains:[],exclude_entities:[],include_keywords:[],exclude_keywords:[],grid_style:"theme",grid_display_mode:"grid",columns:4,rows:0,gap:12,sort_by:"name",sort_direction:"asc",max_items:15,enable_pagination:!1,items_per_page:12,pagination_style:"both",enable_load_animation:!0,load_animation:"fadeIn",grid_animation_duration:600,animation_stagger:100,global_icon_size:32,global_font_size:12,global_name_color:"var(--primary-text-color)",global_state_color:"var(--secondary-text-color)",global_icon_color:"var(--primary-color)",global_background_color:"var(--card-background-color)",global_border_radius:"12px",global_padding:"16px",global_border_width:0,global_border_color:"var(--divider-color)",global_on_color:"var(--state-active-color, #fdd835)",global_off_color:"var(--secondary-text-color)",global_unavailable_color:"var(--disabled-color, #bdbdbd)",glass_tint_color:"rgba(255, 255, 255, 0.1)",glass_blur_amount:10,glass_border_color:"rgba(255, 255, 255, 0.2)",gradient_start_color:"#6666FF",gradient_end_color:"#000070",gradient_direction:"to-bottom-right",panel_header_color:"var(--primary-color)",panel_header_text_color:"var(--text-primary-color, #fff)",split_left_color:"var(--primary-color)",split_right_color:"var(--card-background-color)",neumorphic_light_shadow:"rgba(255, 255, 255, 0.1)",neumorphic_dark_shadow:"rgba(0, 0, 0, 0.15)",accent_border_color:"var(--primary-color)",card_shadow_color:"rgba(0, 0, 0, 0.1)",tap_action:{action:"default"},hold_action:{action:"more-info"},double_tap_action:{action:"nothing"},enable_hover_effect:!0,hover_effect:"scale",hover_scale:1.05,display_mode:"always",display_conditions:[]}}validate(e){const t=e,i=[...super.validate(e).errors];return t.enable_auto_filter||t.entities&&0!==t.entities.length||i.push("At least one entity must be configured, or enable auto-filter"),(t.columns<1||t.columns>12)&&i.push("Columns must be between 1 and 12"),{valid:0===i.length,errors:i}}getAvailableDomains(e){if(!(null==e?void 0:e.states))return[];const t=new Set;return Object.keys(e.states).forEach(e=>{const i=e.split(".")[0];t.add(i)}),Array.from(t).sort()}getAutoFilteredIds(e,t){return this._autoFilterMemo.read(e.id,[t.states],(0,d.W)(e),()=>{let i=Object.keys(t.states);if(e.include_domains&&e.include_domains.length>0&&(i=i.filter(t=>e.include_domains.includes(t.split(".")[0]))),e.include_keywords&&e.include_keywords.length>0){const t=e.include_keywords.map(e=>e.toLowerCase());i=i.filter(e=>{const i=e.toLowerCase();return t.some(e=>i.includes(e))})}if(e.exclude_domains&&e.exclude_domains.length>0&&(i=i.filter(t=>!e.exclude_domains.includes(t.split(".")[0]))),e.exclude_keywords&&e.exclude_keywords.length>0){const t=e.exclude_keywords.map(e=>e.toLowerCase());i=i.filter(e=>{const i=e.toLowerCase();return!t.some(e=>i.includes(e))})}return e.exclude_entities&&e.exclude_entities.length>0&&(i=i.filter(t=>!e.exclude_entities.includes(t))),i})}getFilteredEntities(e,t){let i=[...e.entities||[]];if(e.enable_auto_filter&&(null==t?void 0:t.states)){const n=this.getAutoFilteredIds(e,t),o=new Set(i.map(e=>e.entity)),a=n.filter(e=>!o.has(e)).map(e=>({id:this.generateId("grid_entity"),entity:e}));i=[...i,...a]}return i=i.filter(e=>!e.hidden),i=i.filter(e=>!e.display_mode||"always"===e.display_mode||s.S.evaluateDisplayConditions(e.display_conditions||[],e.display_mode)),i}sortEntities(e,t,i,n){return[...e].sort((e,o)=>{var a,r,l,s;const d=null===(a=null==n?void 0:n.states)||void 0===a?void 0:a[e.entity],c=null===(r=null==n?void 0:n.states)||void 0===r?void 0:r[o.entity];let u=0;switch(t){case"name":const t=e.custom_name||(null===(l=null==d?void 0:d.attributes)||void 0===l?void 0:l.friendly_name)||e.entity,i=o.custom_name||(null===(s=null==c?void 0:c.attributes)||void 0===s?void 0:s.friendly_name)||o.entity;u=t.localeCompare(i);break;case"last_updated":u=((null==d?void 0:d.last_updated)?new Date(d.last_updated).getTime():0)-((null==c?void 0:c.last_updated)?new Date(c.last_updated).getTime():0);break;case"state":const n=(null==d?void 0:d.state)||"",a=(null==c?void 0:c.state)||"";u=n.localeCompare(a);break;case"domain":const r=e.entity.split(".")[0],p=o.entity.split(".")[0];u=r.localeCompare(p);break;default:u=0}return"desc"===i?-u:u})}getPaginatedEntities(e,t,i){if(!t.enable_pagination||t.items_per_page<=0)return{entities:e,currentPage:1,totalPages:1};const n=this._currentPages.get(i)||1,o=Math.ceil(e.length/t.items_per_page),a=(n-1)*t.items_per_page,r=a+t.items_per_page;return{entities:e.slice(a,r),currentPage:n,totalPages:o}}getEntityDisplayInfo(e,t,i){var n,o,a,r;const l=null===(n=null==t?void 0:t.states)||void 0===n?void 0:n[e.entity],s=e.custom_name||(null===(o=null==l?void 0:l.attributes)||void 0===o?void 0:o.friendly_name)||e.entity.split(".")[1]||e.entity,d=(null==l?void 0:l.state)||"unavailable",c=e.custom_icon||(null===(a=null==l?void 0:l.attributes)||void 0===a?void 0:a.icon)||this.getDefaultIcon(e.entity),u=["on","open","playing","home","active"].includes(d.toLowerCase());return{name:s,state:d,icon:c,isOn:u,isUnavailable:"unavailable"===d||"unknown"===d,entityPicture:e.custom_icon?null:(null===(r=null==l?void 0:l.attributes)||void 0===r?void 0:r.entity_picture)||null}}getDefaultIcon(e){return{light:"mdi:lightbulb",switch:"mdi:toggle-switch",sensor:"mdi:eye",binary_sensor:"mdi:checkbox-marked-circle",climate:"mdi:thermostat",cover:"mdi:window-shutter",fan:"mdi:fan",lock:"mdi:lock",media_player:"mdi:cast",vacuum:"mdi:robot-vacuum",camera:"mdi:video",automation:"mdi:robot",script:"mdi:script",scene:"mdi:palette",input_boolean:"mdi:toggle-switch-outline",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:form-textbox",person:"mdi:account",device_tracker:"mdi:crosshairs-gps",weather:"mdi:weather-partly-cloudy",sun:"mdi:white-balance-sunny",zone:"mdi:map-marker",timer:"mdi:timer",counter:"mdi:counter",alarm_control_panel:"mdi:shield-home",water_heater:"mdi:water-boiler",humidifier:"mdi:air-humidifier"}[e.split(".")[0]]||"mdi:help-circle"}getIconColor(e,t,i,n){var o,a,r;if(e.custom_color)return e.custom_color;if(e.state_colors){const t=null===(r=null===(a=null===(o=this._hass)||void 0===o?void 0:o.states)||void 0===a?void 0:a[e.entity])||void 0===r?void 0:r.state;if(t&&e.state_colors[t])return e.state_colors[t]}return i?n.global_unavailable_color||"var(--disabled-color)":t?n.global_on_color||n.global_icon_color||"var(--state-active-color)":n.global_off_color||n.global_icon_color||"var(--primary-color)"}getSmartDefaultAction(e,t){var i;const n=e.split(".")[0];if(null===(i=null==t?void 0:t.states)||void 0===i||i[e],["light","switch","fan","input_boolean","automation","script","scene","cover","lock","vacuum","media_player","climate","humidifier","water_heater"].includes(n))return{action:"toggle",entity:e};switch(n){case"button":case"input_button":return{action:"perform-action",perform_action:"button.press",target:{entity_id:e}};case"script":return{action:"perform-action",perform_action:"script.turn_on",target:{entity_id:e}};case"scene":return{action:"perform-action",perform_action:"scene.turn_on",target:{entity_id:e}};default:return{action:"more-info",entity:e}}}getGestureState(e){return this._gestureState.has(e)||this._gestureState.set(e,{holdTimeout:null,clickTimeout:null,isHolding:!1,clickCount:0,lastClickTime:0}),this._gestureState.get(e)}resolveAction(e,t,i,n){let o;if(t.override_actions&&("tap"===e&&t.tap_action?o=t.tap_action:"hold"===e&&t.hold_action?o=t.hold_action:"double_tap"===e&&t.double_tap_action&&(o=t.double_tap_action)),o||("tap"===e?o=i.tap_action:"hold"===e?o=i.hold_action:"double_tap"===e&&(o=i.double_tap_action)),"default"===(null==o?void 0:o.action)&&(o="tap"===e?this.getSmartDefaultAction(t.entity,n):{action:"more-info",entity:t.entity}),!o||"nothing"===o.action||"none"===o.action)return null;const a=Object.assign({},o);return"more-info"!==a.action&&"toggle"!==a.action||a.entity||(a.entity=t.entity),a}handleItemPointerDown(e,t,i,n){e.preventDefault();const o=this.getGestureState(t.id);o.isHolding=!1,o.holdTimeout=setTimeout(()=>{o.isHolding=!0;const a=this.resolveAction("hold",t,i,n);a&&this.handleModuleAction(a,n,e.target)},500)}handleItemPointerUp(e,t,i,n){e.preventDefault();const o=this.getGestureState(t.id);if(o.holdTimeout&&(clearTimeout(o.holdTimeout),o.holdTimeout=null),o.isHolding)return void(o.isHolding=!1);const a=Date.now();if(a-o.lastClickTime<300&&1===o.clickCount){o.clickTimeout&&(clearTimeout(o.clickTimeout),o.clickTimeout=null),o.clickCount=0;const a=this.resolveAction("double_tap",t,i,n);a&&this.handleModuleAction(a,n,e.target)}else o.clickCount=1,o.lastClickTime=a,o.clickTimeout=setTimeout(()=>{o.clickCount=0;const a=this.resolveAction("tap",t,i,n);a&&this.handleModuleAction(a,n,e.target)},300)}handleItemPointerCancel(e){const t=this.getGestureState(e.id);t.holdTimeout&&(clearTimeout(t.holdTimeout),t.holdTimeout=null),t.isHolding=!1}renderActionsTab(e,t,i,n){return r.A.render(e,t,e=>n(e))}renderOtherTab(e,t,i,n){return l.X.render(e,t,e=>n(e))}renderGeneralTab(e,t,i,o){var r,l,s,d;const g=e,m=(null===(r=null==t?void 0:t.locale)||void 0===r?void 0:r.language)||"en";this._hass=t;const v=(0,c.NS)(i,"grid","grid_style",g.grid_style,"style_1"),h=p(v),y=u.map(e=>({value:e.id,label:`${e.name} - ${e.description}`})),_=this.withThemeInheritOption(m,i,"grid","grid_style","style_1",y),b=p(v).supportsVariableHeight?[{value:"grid",label:"Regular Grid"},{value:"masonry",label:"Masonry"},{value:"metro",label:"Metro Tiles"}]:[{value:"grid",label:"Regular Grid"}],f=this.getAvailableDomains(t);return n.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getEditorStyles()}
      </style>

      <div class="module-settings">
        <!-- Entity Selection Section -->
        <div class="settings-section">
          <div class="section-title">ENTITIES</div>

          <div class="entity-rows-container">
            ${(g.entities||[]).map((e,i)=>this.renderEntityRow(e,i,g,t,o))}
          </div>

          <button
            class="add-entity-btn"
            @click=${()=>{const e={id:this.generateId("grid_entity"),entity:""};o({entities:[...g.entities||[],e]}),this._expandedEntities.add(e.id)}}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
            Add Entity
          </button>

          <!-- Auto Filter Toggle -->
          <div style="margin-top: 24px;">
            ${this.renderSettingsSection("","",[{title:"Enable Auto Filter",description:"Automatically include entities from selected domains.",hass:t,data:{enable_auto_filter:g.enable_auto_filter||!1},schema:[this.booleanField("enable_auto_filter")],onChange:e=>o({enable_auto_filter:e.detail.value.enable_auto_filter})}])}
          </div>

          ${g.enable_auto_filter?n.qy`
                <div class="conditional-group">
                  ${this.renderChipListField("Include Domains","Select domains to include in the grid.",t,g.include_domains||[],e=>o({include_domains:e}),{mode:"select",variant:"primary",selectAddLabel:"Add domain to include…",selectOptions:f.map(e=>({value:e,label:e}))})}

                  ${this.renderChipListField("Exclude Domains","Select domains to exclude from the grid.",t,g.exclude_domains||[],e=>o({exclude_domains:e}),{mode:"select",variant:"exclude",selectAddLabel:"Add domain to exclude…",selectOptions:f.map(e=>({value:e,label:e}))})}

                  ${this.renderChipListField("Include Keywords","Only show entities containing these words (case-insensitive).",t,g.include_keywords||[],e=>o({include_keywords:e}),{mode:"free-text",placeholder:"Type keyword and press Enter...",variant:"primary"})}

                  ${this.renderChipListField("Exclude Keywords","Hide entities containing these words (case-insensitive).",t,g.exclude_keywords||[],e=>o({exclude_keywords:e}),{mode:"free-text",placeholder:"Type keyword and press Enter...",variant:"exclude"})}

                  <!-- Entity Count Info -->
                  <div class="info-box">
                    <ha-icon icon="mdi:information"></ha-icon>
                    <span>
                      ${this.getFilteredEntities(g,t).length} entities match your filters
                    </span>
                  </div>
                </div>
              `:""}
        </div>

        <!-- Grid Style Section -->
        <div class="settings-section">
          <div class="section-title">GRID STYLE</div>

          ${a.U.renderFieldSection("Style Preset","Choose a visual style for your grid items.",t,{grid_style:g.grid_style||"theme"},[a.U.select("grid_style",_)],e=>{const t=e.detail.value.grid_style;if("theme"===t)return void o({grid_style:"theme"});const i=p(t),n=i.supportsVariableHeight||"grid"===g.grid_display_mode?{}:{grid_display_mode:"grid"};o(Object.assign({grid_style:t,global_icon_size:i.defaultIconSize,global_font_size:i.defaultFontSize,global_padding:i.defaultPadding,global_border_radius:i.defaultBorderRadius},n))})}

        </div>

        <!-- Layout Section -->
        <div class="settings-section">
          <div class="section-title">LAYOUT</div>

          ${a.U.renderFieldSection("Display Mode","How items are arranged in the grid.",t,{grid_display_mode:g.grid_display_mode||"grid"},[a.U.select("grid_display_mode",b)],e=>o({grid_display_mode:e.detail.value.grid_display_mode}))}

          ${this.renderSliderField("Columns","Number of columns in the grid (1–12).",g.columns||4,4,1,12,1,e=>{o({columns:e})},"")}

          ${this.renderSliderField("Mobile Columns","Columns on narrow screens (≤600px).",null!==(s=null!==(l=g.columns_mobile)&&void 0!==l?l:g.columns)&&void 0!==s?s:4,null!==(d=g.columns)&&void 0!==d?d:4,1,12,1,e=>{o({columns_mobile:e})},"")}

          ${this.renderSliderField("Gap","Space between grid items in pixels.",g.gap||12,12,0,32,2,e=>{o({gap:e})},"px")}
        </div>

        <!-- Sorting Section -->
        <div class="settings-section">
          <div class="section-title">SORTING & DISPLAY</div>

          ${a.U.renderFieldSection("Sort By","How to sort the grid items.",t,{sort_by:g.sort_by||"name"},[a.U.select("sort_by",[{value:"name",label:"Name"},{value:"last_updated",label:"Last Updated"},{value:"state",label:"State"},{value:"domain",label:"Domain"},{value:"custom",label:"Custom Order"}])],e=>o({sort_by:e.detail.value.sort_by}))}

          ${this.renderSettingsSection("","",[{title:"Invert Sort Order",description:"Reverse the sort direction.",hass:t,data:{sort_direction:"desc"===g.sort_direction},schema:[this.booleanField("sort_direction")],onChange:e=>o({sort_direction:e.detail.value.sort_direction?"desc":"asc"})}])}

          ${this.renderSliderField("Max Items","Maximum number of items to display (0 = All).",g.max_items||0,0,0,100,1,e=>{o({max_items:e})},"")}
        </div>

        <!-- Pagination Section -->
        <div class="settings-section">
          <div class="section-title">PAGINATION</div>

          ${this.renderSettingsSection("","",[{title:"Enable Pagination",description:"Show pagination controls.",hass:t,data:{enable_pagination:g.enable_pagination||!1},schema:[this.booleanField("enable_pagination")],onChange:e=>o({enable_pagination:e.detail.value.enable_pagination})}])}

          ${g.enable_pagination?n.qy`
                <div class="conditional-group">
                  ${a.U.renderFieldSection("Pagination Style","Type of pagination controls.",t,{pagination_style:g.pagination_style||"both"},[a.U.select("pagination_style",[{value:"numbers",label:"Page Numbers"},{value:"buttons",label:"Prev/Next Buttons"},{value:"both",label:"Both"}])],e=>o({pagination_style:e.detail.value.pagination_style}))}

                  ${this.renderSliderField("Items Per Page","Number of items per page.",g.items_per_page||12,12,4,48,4,e=>{o({items_per_page:e})},"")}
                </div>
              `:""}
        </div>

        <!-- Animation Section -->
        <div class="settings-section">
          <div class="section-title">ANIMATION</div>

          ${this.renderSettingsSection("","",[{title:"Enable Load Animation",description:"Animate items when they first appear.",hass:t,data:{enable_load_animation:!1!==g.enable_load_animation},schema:[this.booleanField("enable_load_animation")],onChange:e=>o({enable_load_animation:e.detail.value.enable_load_animation})}])}

          ${!1!==g.enable_load_animation?n.qy`
                <div class="conditional-group">
                  ${a.U.renderFieldSection("Animation Type","The animation effect for items.",t,{load_animation:g.load_animation||"fadeIn"},[a.U.select("load_animation",[{value:"none",label:"None"},{value:"fadeIn",label:"Fade In"},{value:"slideUp",label:"Slide Up"},{value:"slideDown",label:"Slide Down"},{value:"slideLeft",label:"Slide Left"},{value:"slideRight",label:"Slide Right"},{value:"zoomIn",label:"Zoom In"}])],e=>o({load_animation:e.detail.value.load_animation}))}

                  ${this.renderSliderField("Animation Duration","How long each animation takes.",g.grid_animation_duration||600,600,200,2e3,100,e=>{o({grid_animation_duration:e})},"ms")}

                  ${this.renderSliderField("Stagger Delay","Delay between each item's animation.",g.animation_stagger||100,100,0,300,10,e=>{o({animation_stagger:e})},"ms")}
                </div>
              `:""}
        </div>

        ${this.renderGridStylingSection(g,t,h,o)}
      </div>
    `}renderGridStylingSection(e,t,i,o){return n.qy`
      <!-- Icon Styling (if style shows icons) -->
      ${i.showIcon?n.qy`
            <div class="settings-section">
              <div class="section-title">ICON STYLING</div>

              ${this.renderSliderField("Icon Size","Size of icons in pixels.",e.global_icon_size||32,i.defaultIconSize,16,72,2,e=>{o({global_icon_size:e})},"px")}

              <div class="color-field">
                <div class="field-title">Icon Color (Default)</div>
                <div class="field-description">Default color for icons.</div>
                <ultra-color-picker
                  .hass=${t}
                  .value=${e.global_icon_color||"var(--primary-color)"}
                  @value-changed=${e=>{o({global_icon_color:e.detail.value})}}
                ></ultra-color-picker>
              </div>

              <div class="color-field">
                <div class="field-title">Active/On Color</div>
                <div class="field-description">Color when entity is on/active.</div>
                <ultra-color-picker
                  .hass=${t}
                  .value=${e.global_on_color||"var(--state-active-color)"}
                  @value-changed=${e=>{o({global_on_color:e.detail.value})}}
                ></ultra-color-picker>
              </div>

              <div class="color-field">
                <div class="field-title">Inactive/Off Color</div>
                <div class="field-description">Color when entity is off/inactive.</div>
                <ultra-color-picker
                  .hass=${t}
                  .value=${e.global_off_color||"var(--secondary-text-color)"}
                  @value-changed=${e=>{o({global_off_color:e.detail.value})}}
                ></ultra-color-picker>
              </div>

              <div class="color-field">
                <div class="field-title">Unavailable Color</div>
                <div class="field-description">Color when entity is unavailable.</div>
                <ultra-color-picker
                  .hass=${t}
                  .value=${e.global_unavailable_color||"var(--disabled-color)"}
                  @value-changed=${e=>{o({global_unavailable_color:e.detail.value})}}
                ></ultra-color-picker>
              </div>
            </div>
          `:""}

      <!-- Text Styling (if style shows name or state) -->
      ${i.showName||i.showState?n.qy`
            <div class="settings-section">
              <div class="section-title">TEXT STYLING</div>

              ${this.renderSliderField("Font Size","Base font size for text.",e.global_font_size||12,i.defaultFontSize,10,24,1,e=>{o({global_font_size:e})},"px")}

              ${i.showName?n.qy`
                    <div class="color-field">
                      <div class="field-title">Name Color</div>
                      <div class="field-description">Color for entity names.</div>
                      <ultra-color-picker
                        .hass=${t}
                        .value=${e.global_name_color||"var(--primary-text-color)"}
                        @value-changed=${e=>{o({global_name_color:e.detail.value})}}
                      ></ultra-color-picker>
                    </div>
                  `:""}

              ${i.showState?n.qy`
                    <div class="color-field">
                      <div class="field-title">State Color</div>
                      <div class="field-description">Color for state text.</div>
                      <ultra-color-picker
                        .hass=${t}
                        .value=${e.global_state_color||"var(--secondary-text-color)"}
                        @value-changed=${e=>{o({global_state_color:e.detail.value})}}
                      ></ultra-color-picker>
                    </div>
                  `:""}
            </div>
          `:""}

      <!-- Item Styling -->
      <div class="settings-section">
        <div class="section-title">ITEM STYLING</div>

        <div class="color-field">
          <div class="field-title">Item Background</div>
          <div class="field-description">Background color for grid items.</div>
          <ultra-color-picker
            .hass=${t}
            .value=${e.global_background_color||"var(--card-background-color)"}
            @value-changed=${e=>{o({global_background_color:e.detail.value})}}
          ></ultra-color-picker>
        </div>

        ${a.U.renderFieldSection("Border Radius","Corner rounding for items (e.g., 8px or 50% for circles).",t,{global_border_radius:e.global_border_radius||"12px"},[a.U.text("global_border_radius")],e=>o({global_border_radius:e.detail.value.global_border_radius}))}

        ${a.U.renderFieldSection("Item Padding","Inner spacing for items (e.g., 16px or 12px 16px).",t,{global_padding:e.global_padding||"16px"},[a.U.text("global_padding")],e=>o({global_padding:e.detail.value.global_padding}))}

        ${this.renderSliderField("Border Width","Border thickness in pixels.",e.global_border_width||0,0,0,4,1,e=>{o({global_border_width:e})},"px")}

        ${(e.global_border_width||0)>0?n.qy`
              <div class="color-field" style="margin-top: 12px;">
                <div class="field-title">Border Color</div>
                <div class="field-description">Color for item borders.</div>
                <ultra-color-picker
                  .hass=${t}
                  .value=${e.global_border_color||"var(--divider-color)"}
                  @value-changed=${e=>{o({global_border_color:e.detail.value})}}
                ></ultra-color-picker>
              </div>
            `:""}
      </div>

      <!-- Style-Specific Colors -->
      ${this.renderStyleSpecificColors(e,t,i,o)}

      <!-- Hover Effects -->
      <div class="settings-section">
        <div class="section-title">HOVER EFFECTS</div>

        ${this.renderSettingsSection("","",[{title:"Enable Hover Effect",description:"Add visual feedback on hover.",hass:t,data:{enable_hover_effect:!1!==e.enable_hover_effect},schema:[this.booleanField("enable_hover_effect")],onChange:e=>o({enable_hover_effect:e.detail.value.enable_hover_effect})}])}

        ${!1!==e.enable_hover_effect?n.qy`
              <div class="conditional-group">
                ${a.U.renderFieldSection("Hover Effect","Type of hover animation.",t,{hover_effect:e.hover_effect||"scale"},[a.U.select("hover_effect",[{value:"none",label:"None"},{value:"scale",label:"Scale"},{value:"glow",label:"Glow"},{value:"lift",label:"Lift"},{value:"color",label:"Color Change"}])],e=>o({hover_effect:e.detail.value.hover_effect}))}

                ${"scale"===e.hover_effect?n.qy`
                      ${this.renderSliderField("Scale Amount","How much to scale on hover.",e.hover_scale||1.05,1.05,1,1.2,.01,e=>{o({hover_scale:e})},"x")}
                    `:""}

                ${"color"===e.hover_effect?n.qy`
                      <div class="color-field">
                        <div class="field-title">Hover Background Color</div>
                        <div class="field-description">Background color on hover.</div>
                        <ultra-color-picker
                          .hass=${t}
                          .value=${e.hover_background_color||"var(--primary-color)"}
                          @value-changed=${e=>{o({hover_background_color:e.detail.value})}}
                        ></ultra-color-picker>
                      </div>
                    `:""}

                ${"glow"===e.hover_effect?n.qy`
                      <div class="color-field">
                        <div class="field-title">Glow Color</div>
                        <div class="field-description">Color of the glow effect.</div>
                        <ultra-color-picker
                          .hass=${t}
                          .value=${e.hover_glow_color||"var(--primary-color)"}
                          @value-changed=${e=>{o({hover_glow_color:e.detail.value})}}
                        ></ultra-color-picker>
                      </div>
                    `:""}
              </div>
            `:""}
      </div>
    `}renderEntitiesTab(e,t,i,o){var a;const r=e,l=(null===(a=null==t?void 0:t.locale)||void 0===a||a.language,this.getAvailableDomains(t));return n.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getEditorStyles()}
      </style>

      <div class="module-settings">
        <!-- Manual Entity Selection -->
        <div class="settings-section">
          <div class="section-title">ENTITIES</div>

          <div class="entity-rows-container">
            ${(r.entities||[]).map((e,i)=>this.renderEntityRow(e,i,r,t,o))}
          </div>

          <button
            class="add-entity-btn"
            @click=${()=>{const e={id:this.generateId("grid_entity"),entity:""};o({entities:[...r.entities||[],e]}),this._expandedEntities.add(e.id)}}
          >
            <ha-icon icon="mdi:plus"></ha-icon>
            Add Entity
          </button>
        </div>

        <!-- Auto Filter Section -->
        <div class="settings-section">
          <div class="section-title">AUTO FILTER</div>

          ${this.renderSettingsSection("","",[{title:"Enable Auto Filter",description:"Automatically include entities from selected domains.",hass:t,data:{enable_auto_filter:r.enable_auto_filter||!1},schema:[this.booleanField("enable_auto_filter")],onChange:e=>o({enable_auto_filter:e.detail.value.enable_auto_filter})}])}

          ${r.enable_auto_filter?n.qy`
                <div class="conditional-group">
                  ${this.renderChipListField("Include Domains","Select domains to include in the grid.",t,r.include_domains||[],e=>o({include_domains:e}),{mode:"select",variant:"primary",selectAddLabel:"Add domain to include…",selectOptions:l.map(e=>({value:e,label:e}))})}

                  ${this.renderChipListField("Exclude Domains","Select domains to exclude from the grid.",t,r.exclude_domains||[],e=>o({exclude_domains:e}),{mode:"select",variant:"exclude",selectAddLabel:"Add domain to exclude…",selectOptions:l.map(e=>({value:e,label:e}))})}

                  ${this.renderChipListField("Exclude Specific Entities","Exclude specific entities from the grid.",t,r.exclude_entities||[],e=>o({exclude_entities:e}),{mode:"entity",variant:"exclude",placeholder:"Add entity to exclude…"})}

                  <!-- Entity Count -->
                  <div class="info-box">
                    <ha-icon icon="mdi:information"></ha-icon>
                    <span>
                      ${this.getFilteredEntities(r,t).length} entities match your filters
                    </span>
                  </div>
                </div>
              `:""}
        </div>
      </div>
    `}renderEntityRow(e,t,i,o,r){var l,s,d;const c=this._expandedEntities.has(e.id),u=null===(l=null==o?void 0:o.states)||void 0===l?void 0:l[e.entity],p=e.custom_name||(null===(s=null==u?void 0:u.attributes)||void 0===s?void 0:s.friendly_name)||e.entity||"No entity";return n.qy`
      <div
        class="entity-row ${(null===(d=this._draggedItem)||void 0===d?void 0:d.id)===e.id?"dragging":""}"
        draggable="true"
        @dragstart=${t=>{var i;this._draggedItem=e,null===(i=t.dataTransfer)||void 0===i||i.setData("text/plain",e.id)}}
        @dragend=${()=>{this._draggedItem=null}}
        @dragover=${e=>{e.preventDefault(),e.currentTarget.classList.add("drag-over")}}
        @dragleave=${e=>{e.currentTarget.classList.remove("drag-over")}}
        @drop=${t=>{if(t.preventDefault(),t.currentTarget.classList.remove("drag-over"),this._draggedItem&&this._draggedItem.id!==e.id){const t=[...i.entities||[]],n=t.findIndex(e=>e.id===this._draggedItem.id),o=t.findIndex(t=>t.id===e.id);if(-1!==n&&-1!==o){const[e]=t.splice(n,1);t.splice(o,0,e),r({entities:t})}}}}
      >
        <ha-icon icon="mdi:drag" class="drag-handle"></ha-icon>
        <div class="entity-info ${e.entity?"":"no-entity"}">
          ${p}
        </div>
        <ha-icon
          icon="${c?"mdi:chevron-up":"mdi:chevron-down"}"
          class="expand-icon ${c?"expanded":""}"
          @click=${()=>{c?this._expandedEntities.delete(e.id):this._expandedEntities.add(e.id),this.triggerPreviewUpdate()}}
        ></ha-icon>
        <ha-icon
          icon="mdi:delete"
          class="delete-icon"
          @click=${()=>{r({entities:(i.entities||[]).filter(t=>t.id!==e.id)})}}
        ></ha-icon>
      </div>

      ${c?n.qy`
            <div class="entity-settings">
              ${a.U.renderFieldSection("Entity","Select the entity to display.",o,{entity:e.entity||""},[a.U.entity("entity")],t=>{const n=[...i.entities||[]],o=n.findIndex(t=>t.id===e.id);-1!==o&&(n[o]=Object.assign(Object.assign({},n[o]),{entity:t.detail.value.entity}),r({entities:n}))})}

              ${a.U.renderFieldSection("Custom Name","Override the entity display name.",o,{custom_name:e.custom_name||""},[a.U.text("custom_name")],t=>{const n=[...i.entities||[]],o=n.findIndex(t=>t.id===e.id);-1!==o&&(n[o]=Object.assign(Object.assign({},n[o]),{custom_name:t.detail.value.custom_name}),r({entities:n}))})}

              ${a.U.renderFieldSection("Custom Icon","Override the entity icon.",o,{custom_icon:e.custom_icon||""},[a.U.icon("custom_icon")],t=>{const n=[...i.entities||[]],o=n.findIndex(t=>t.id===e.id);-1!==o&&(n[o]=Object.assign(Object.assign({},n[o]),{custom_icon:t.detail.value.custom_icon}),r({entities:n}))})}

              <div class="color-field">
                <div class="field-title">Custom Color</div>
                <div class="field-description">Override the icon color.</div>
                <ultra-color-picker
                  .hass=${o}
                  .value=${e.custom_color||""}
                  @value-changed=${t=>{const n=[...i.entities||[]],o=n.findIndex(t=>t.id===e.id);-1!==o&&(n[o]=Object.assign(Object.assign({},n[o]),{custom_color:t.detail.value}),r({entities:n}))}}
                ></ultra-color-picker>
              </div>

              ${"metro"===i.grid_display_mode?n.qy`
                    ${a.U.renderFieldSection("Metro Size","Size of this tile in metro mode.",o,{metro_size:e.metro_size||"small"},[a.U.select("metro_size",[{value:"small",label:"Small (1x1)"},{value:"medium",label:"Medium (2x1)"},{value:"large",label:"Large (2x2)"}])],t=>{const n=[...i.entities||[]],o=n.findIndex(t=>t.id===e.id);-1!==o&&(n[o]=Object.assign(Object.assign({},n[o]),{metro_size:t.detail.value.metro_size}),r({entities:n}))})}
                  `:""}

              ${this.renderSettingsSection("","",[{title:"Override Actions",description:"Use custom actions for this item.",hass:o,data:{override_actions:e.override_actions||!1},schema:[this.booleanField("override_actions")],onChange:t=>{const n=t.detail.value.override_actions;n||this._entityActionStates.delete(e.id);const o=[...i.entities||[]],a=o.findIndex(t=>t.id===e.id);-1!==a&&(o[a]=Object.assign(Object.assign({},o[a]),{override_actions:n}),r({entities:o}))}}])}

              ${e.override_actions?(()=>{let t=this._entityActionStates.get(e.id);return t||(t={tap_action:e.tap_action||{action:"toggle"},hold_action:e.hold_action||{action:"more-info"},double_tap_action:e.double_tap_action||{action:"none"}},this._entityActionStates.set(e.id,t)),n.qy`
                    <div class="entity-actions-override">
                      <div class="entity-action-info">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        <span>Override the default domain-based actions for this entity.</span>
                      </div>
                      
                      <!-- Tap Action -->
                      <div class="entity-action-field">
                        <ha-form
                          .hass=${o}
                          .data=${{tap_action:t.tap_action}}
                          .schema=${[{name:"tap_action",selector:{ui_action:{}}}]}
                          .computeLabel=${()=>"Tap Action"}
                          @value-changed=${t=>{const n=t.detail.value.tap_action,o=this._entityActionStates.get(e.id)||{};o.tap_action=n,this._entityActionStates.set(e.id,o);const a=[...i.entities||[]],l=a.findIndex(t=>t.id===e.id);-1!==l&&(a[l]=Object.assign(Object.assign({},a[l]),{tap_action:n}),r({entities:a}))}}
                        ></ha-form>
                      </div>
                      
                      <!-- Hold Action -->
                      <div class="entity-action-field">
                        <ha-form
                          .hass=${o}
                          .data=${{hold_action:t.hold_action}}
                          .schema=${[{name:"hold_action",selector:{ui_action:{}}}]}
                          .computeLabel=${()=>"Hold Action"}
                          @value-changed=${t=>{const n=t.detail.value.hold_action,o=this._entityActionStates.get(e.id)||{};o.hold_action=n,this._entityActionStates.set(e.id,o);const a=[...i.entities||[]],l=a.findIndex(t=>t.id===e.id);-1!==l&&(a[l]=Object.assign(Object.assign({},a[l]),{hold_action:n}),r({entities:a}))}}
                        ></ha-form>
                      </div>
                      
                      <!-- Double Tap Action -->
                      <div class="entity-action-field">
                        <ha-form
                          .hass=${o}
                          .data=${{double_tap_action:t.double_tap_action}}
                          .schema=${[{name:"double_tap_action",selector:{ui_action:{}}}]}
                          .computeLabel=${()=>"Double Tap Action"}
                          @value-changed=${t=>{const n=t.detail.value.double_tap_action,o=this._entityActionStates.get(e.id)||{};o.double_tap_action=n,this._entityActionStates.set(e.id,o);const a=[...i.entities||[]],l=a.findIndex(t=>t.id===e.id);-1!==l&&(a[l]=Object.assign(Object.assign({},a[l]),{double_tap_action:n}),r({entities:a}))}}
                        ></ha-form>
                      </div>
                    </div>
                  `})():""}

              <!-- Spacer between sections -->
              <div class="entity-section-spacer"></div>

              <!-- Conditional Display Logic -->
              ${this.renderSettingsSection("","",[{title:"Conditional Display",description:"Control when this entity is shown based on conditions.",hass:o,data:{has_logic:e.display_mode&&"always"!==e.display_mode||!1},schema:[this.booleanField("has_logic")],onChange:t=>{const n=[...i.entities||[]],o=n.findIndex(t=>t.id===e.id);-1!==o&&(n[o]=Object.assign(Object.assign({},n[o]),{display_mode:t.detail.value.has_logic?"every":"always",display_conditions:t.detail.value.has_logic&&n[o].display_conditions||[]}),r({entities:n}))}}])}

              ${e.display_mode&&"always"!==e.display_mode?n.qy`
                    <div class="conditional-group">
                      ${a.U.renderFieldSection("Display Mode","When multiple conditions exist, show this entity if...",o,{display_mode:e.display_mode||"every"},[a.U.select("display_mode",[{value:"every",label:"EVERY condition is met"},{value:"any",label:"ANY condition is met"}])],t=>{const n=[...i.entities||[]],o=n.findIndex(t=>t.id===e.id);-1!==o&&(n[o]=Object.assign(Object.assign({},n[o]),{display_mode:t.detail.value.display_mode}),r({entities:n}))})}

                      <div class="entity-conditions-list">
                        <div style="display:flex; align-items:center; justify-content: space-between; margin-bottom: 12px;">
                          <div style="font-size: 14px; font-weight: 600;">Conditions</div>
                          <button
                            class="add-condition-btn"
                            @click=${()=>{const t=[...i.entities||[]],n=t.findIndex(t=>t.id===e.id);if(-1!==n){const e={id:`cond_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,type:"entity_state",entity:"",operator:"=",value:""};t[n]=Object.assign(Object.assign({},t[n]),{display_conditions:[...t[n].display_conditions||[],e]}),r({entities:t})}}}
                            style="display:flex; align-items:center; gap:6px; padding:4px 8px; border:1px dashed var(--primary-color); background:none; color:var(--primary-color); border-radius:var(--uc-r-4, 4px); cursor:pointer; font-size: 12px;"
                          >
                            <ha-icon icon="mdi:plus" style="--mdc-icon-size: 14px;"></ha-icon>
                            Add
                          </button>
                        </div>

                        ${0===(e.display_conditions||[]).length?n.qy`<div style="text-align: center; padding: 12px; color: var(--secondary-text-color); font-style: italic; font-size: 12px;">
                              No conditions. Add one to control visibility.
                            </div>`:""}

                        ${(e.display_conditions||[]).map((t,n)=>this.renderEntityCondition(e,t,n,i,o,r))}
                      </div>
                    </div>
                  `:""}
            </div>
          `:""}
    `}renderEntityCondition(e,t,i,o,r,l){const s=n=>{const a=[...o.entities||[]],r=a.findIndex(t=>t.id===e.id);if(-1!==r){const e=[...a[r].display_conditions||[]];e[i]=Object.assign(Object.assign({},t),n),a[r]=Object.assign(Object.assign({},a[r]),{display_conditions:e}),l({entities:a})}};return n.qy`
      <div class="entity-condition-item">
        <div class="entity-condition-header">
          <span class="entity-condition-label">Condition ${i+1}</span>
          <ha-icon
            icon="mdi:delete"
            class="entity-condition-delete"
            @click=${()=>{const t=[...o.entities||[]],n=t.findIndex(t=>t.id===e.id);if(-1!==n){const e=(t[n].display_conditions||[]).filter((e,t)=>t!==i);t[n]=Object.assign(Object.assign({},t[n]),{display_conditions:e}),l({entities:t})}}}
          ></ha-icon>
        </div>

        ${a.U.renderFieldSection("Type","",r,{type:t.type||"entity_state"},[a.U.select("type",[{value:"entity_state",label:"Entity State"},{value:"entity_attribute",label:"Entity Attribute"},{value:"template",label:"Template"},{value:"time",label:"Time Range"}])],e=>{const t=e.detail.value.type,i={type:t};"entity_state"===t?Object.assign(i,{entity:"",operator:"=",value:""}):"entity_attribute"===t?Object.assign(i,{entity:"",attribute:"",operator:"=",value:""}):"time"===t?Object.assign(i,{time_from:"00:00",time_to:"23:59"}):"template"===t&&Object.assign(i,{template:""}),s(i)})}

        ${"entity_state"!==t.type&&t.type?"":n.qy`
              ${a.U.renderFieldSection("Entity","",r,{entity:t.entity||""},[a.U.entity("entity")],e=>s(e.detail.value))}
              ${a.U.renderFieldSection("Operator","",r,{operator:t.operator||"="},[a.U.select("operator",[{value:"=",label:"="},{value:"!=",label:"!="},{value:">",label:">"},{value:">=",label:">="},{value:"<",label:"<"},{value:"<=",label:"<="},{value:"contains",label:"Contains"},{value:"not_contains",label:"Not Contains"},{value:"has_value",label:"Has Value"},{value:"no_value",label:"No Value"}])],e=>s(e.detail.value))}
              ${a.U.renderFieldSection("Value","",r,{value:t.value||""},[a.U.text("value")],e=>s(e.detail.value))}
            `}

        ${"entity_attribute"===t.type?n.qy`
              ${a.U.renderFieldSection("Entity","",r,{entity:t.entity||""},[a.U.entity("entity")],e=>s(e.detail.value))}
              ${a.U.renderFieldSection("Attribute","",r,{attribute:t.attribute||""},[a.U.text("attribute")],e=>s(e.detail.value))}
              ${a.U.renderFieldSection("Operator","",r,{operator:t.operator||"="},[a.U.select("operator",[{value:"=",label:"="},{value:"!=",label:"!="},{value:">",label:">"},{value:">=",label:">="},{value:"<",label:"<"},{value:"<=",label:"<="},{value:"contains",label:"Contains"},{value:"not_contains",label:"Not Contains"}])],e=>s(e.detail.value))}
              ${a.U.renderFieldSection("Value","",r,{value:t.value||""},[a.U.text("value")],e=>s(e.detail.value))}
            `:""}

        ${"time"===t.type?n.qy`
              ${a.U.renderFieldSection("From","Time in HH:MM format (e.g., 08:00)",r,{time_from:t.time_from||"00:00"},[a.U.text("time_from")],e=>s(e.detail.value))}
              ${a.U.renderFieldSection("To","Time in HH:MM format (e.g., 22:00)",r,{time_to:t.time_to||"23:59"},[a.U.text("time_to")],e=>s(e.detail.value))}
            `:""}

        ${"template"===t.type?n.qy`
              ${a.U.renderFieldSection("Template","Jinja2 template that evaluates to true/false",r,{template:t.template||""},[a.U.text("template")],e=>s(e.detail.value))}
            `:""}
      </div>
    `}renderStyleSpecificColors(e,t,i,o){const r=e.grid_style||"style_1",l="style_16"===r,s="style_17"===r,d="style_15"===r,c="style_18"===r,u="style_19"===r,p="style_20"===r,g="style_11"===r,m=l||s||d||c||u||p||g;return n.qy`
      <div class="settings-section">
        <div class="section-title">STYLE COLORS</div>
        <div class="style-info">
          <ha-icon icon="mdi:palette"></ha-icon>
          <span>Customize colors for the <strong>${i.name}</strong> style</span>
        </div>

        <!-- If no style-specific options, show info message -->
        ${m?"":n.qy`
          <div class="info-box" style="margin-top: 0;">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            <span>This style uses the standard colors from the sections above. Try <strong>Glass</strong>, <strong>Gradient</strong>, or <strong>Panel</strong> styles for additional color options.</span>
          </div>
        `}

        <!-- Glass Style (style_16) -->
        ${l?n.qy`
          <div class="color-field">
            <div class="field-title">Glass Tint Color</div>
            <div class="field-description">Background tint for the glass effect.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.glass_tint_color||"rgba(255, 255, 255, 0.1)"}
              @value-changed=${e=>{o({glass_tint_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>

          <div class="color-field">
            <div class="field-title">Glass Border Color</div>
            <div class="field-description">Border color for the glass effect.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.glass_border_color||"rgba(255, 255, 255, 0.2)"}
              @value-changed=${e=>{o({glass_border_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>

          ${this.renderSliderField("Blur Amount","Intensity of the blur effect.",e.glass_blur_amount||10,10,0,30,1,e=>{o({glass_blur_amount:e})},"px")}
        `:""}

        <!-- Gradient Style (style_17) -->
        ${s?n.qy`
          <div class="color-field">
            <div class="field-title">Gradient Start Color</div>
            <div class="field-description">Starting color of the gradient.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.gradient_start_color||"#6666FF"}
              @value-changed=${e=>{o({gradient_start_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>

          <div class="color-field">
            <div class="field-title">Gradient End Color</div>
            <div class="field-description">Ending color of the gradient.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.gradient_end_color||"#000070"}
              @value-changed=${e=>{o({gradient_end_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>

          ${a.U.renderFieldSection("Gradient Direction","Direction of the gradient flow.",t,{gradient_direction:e.gradient_direction||"to-bottom-right"},[a.U.select("gradient_direction",[{value:"to-bottom",label:"Top to Bottom"},{value:"to-right",label:"Left to Right"},{value:"to-bottom-right",label:"Diagonal (↘)"},{value:"to-bottom-left",label:"Diagonal (↙)"}])],e=>o({gradient_direction:e.detail.value.gradient_direction}))}
        `:""}

        <!-- Panel Style (style_15) -->
        ${d?n.qy`
          <div class="color-field">
            <div class="field-title">Header Background</div>
            <div class="field-description">Background color for the header bar.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.panel_header_color||"var(--primary-color)"}
              @value-changed=${e=>{o({panel_header_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>

          <div class="color-field">
            <div class="field-title">Header Text Color</div>
            <div class="field-description">Text color in the header bar.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.panel_header_text_color||"#ffffff"}
              @value-changed=${e=>{o({panel_header_text_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>
        `:""}

        <!-- Split Style (style_18) -->
        ${c?n.qy`
          <div class="color-field">
            <div class="field-title">Left Side Color</div>
            <div class="field-description">Color for the left side of the split.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.split_left_color||"var(--primary-color)"}
              @value-changed=${e=>{o({split_left_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>

          <div class="color-field">
            <div class="field-title">Right Side Color</div>
            <div class="field-description">Color for the right side of the split.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.split_right_color||"var(--card-background-color)"}
              @value-changed=${e=>{o({split_right_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>
        `:""}

        <!-- Neumorphic Style (style_19) -->
        ${u?n.qy`
          <div class="color-field">
            <div class="field-title">Light Shadow Color</div>
            <div class="field-description">Color for the light (highlight) shadow.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.neumorphic_light_shadow||"rgba(255, 255, 255, 0.1)"}
              @value-changed=${e=>{o({neumorphic_light_shadow:e.detail.value})}}
            ></ultra-color-picker>
          </div>

          <div class="color-field">
            <div class="field-title">Dark Shadow Color</div>
            <div class="field-description">Color for the dark shadow.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.neumorphic_dark_shadow||"rgba(0, 0, 0, 0.15)"}
              @value-changed=${e=>{o({neumorphic_dark_shadow:e.detail.value})}}
            ></ultra-color-picker>
          </div>
        `:""}

        <!-- Accent Border Style (style_20) -->
        ${p?n.qy`
          <div class="color-field">
            <div class="field-title">Accent Border Color</div>
            <div class="field-description">Color for the accent border on the left side.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.accent_border_color||"var(--primary-color)"}
              @value-changed=${e=>{o({accent_border_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>
        `:""}

        <!-- Card Style (style_11) -->
        ${g?n.qy`
          <div class="color-field">
            <div class="field-title">Shadow Color</div>
            <div class="field-description">Color for the card shadow.</div>
            <ultra-color-picker
              .hass=${t}
              .value=${e.card_shadow_color||"rgba(0, 0, 0, 0.1)"}
              @value-changed=${e=>{o({card_shadow_color:e.detail.value})}}
            ></ultra-color-picker>
          </div>
        `:""}
      </div>
    `}renderPreview(e,t,i,o){const a=(0,c.Gy)(e,i,"grid",{grid_style:"style_1"});this._hass=t;let r=this.getFilteredEntities(a,t);r=this.sortEntities(r,a.sort_by,a.sort_direction,t),a.max_items&&a.max_items>0&&(r=r.slice(0,a.max_items));const{entities:l,currentPage:s,totalPages:d}=this.getPaginatedEntities(r,a,a.id),u=p(a.grid_style||"style_1"),g=!1!==a.enable_load_animation&&"none"!==a.load_animation,m=this.buildGridStyles(a),v="metro"===a.grid_display_mode?this.calculateMetroSizes(l.length,a.columns||4):void 0;let h;"live"===o||"ha-preview"===o?h=Date.now():(this._animationStartTimes.has(a.id)||this._animationStartTimes.set(a.id,Date.now()),h=this._animationStartTimes.get(a.id));const y=this.getHoverEffectClass(e),_=this.buildStyleString(this.buildDesignStyles(e,t));return this.wrapWithAnimation(n.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div 
        class="uc-grid-container uc-grid-mode-${a.grid_display_mode||"grid"} ${y}" 
        data-mode="${a.grid_display_mode||"grid"}"
        data-animation-key="${h}"
        style="${m}; ${_}"
      >
        ${l.length>0?l.map((e,i)=>this.renderGridItem(e,i,a,t,u,g,v)):n.qy`
              <div class="grid-empty-state">
                <ha-icon icon="mdi:view-grid-plus"></ha-icon>
                <span>No entities configured</span>
              </div>
            `}
      </div>
      ${a.enable_pagination&&d>1?this.renderPaginationControls(s,d,a):""}
    `,e,t)}buildGridStyles(e){var t;const i=e.gap||12,n=e.columns||4,o=null!==(t=e.columns_mobile)&&void 0!==t?t:n;let a=`display: grid; gap: ${i}px; width: 100%; --uc-grid-columns: ${n}; --uc-grid-columns-mobile: ${o};`;switch(e.grid_display_mode){case"masonry":a+=`grid-template-columns: repeat(${n}, minmax(0, 1fr)); grid-auto-rows: 80px; grid-auto-flow: dense; align-items: stretch;`;break;case"metro":a+=`--uc-grid-metro-columns-mobile: ${2*o}; grid-template-columns: repeat(${2*n}, minmax(0, 1fr)); grid-auto-rows: 90px; grid-auto-flow: dense; align-items: stretch;`;break;default:a+=`grid-template-columns: repeat(${n}, minmax(0, 1fr));`}return a}calculateMetroSizes(e,t){const i=[],n=2*t;for(let t=0;t<e;t++)t%6==0&&e>3?i.push("large"):t%3==2?i.push("medium"):i.push("small");let o=0;const a=[0];for(let e=0;e<i.length;e++){const t="small"===i[e]?2:4;o+t>n?(a.push(e),o=t):o+=t,o===n&&(e<i.length-1&&a.push(e+1),o=0)}for(let e=0;e<a.length;e++){const t=a[e],o=e<a.length-1?a[e+1]:i.length;let r=0;for(let e=t;e<o;e++)r+="small"===i[e]?2:4;const l=n-r;if(l>0&&l<n)for(let e=t;e<o&&l>0;e++)if("small"===i[e]){const t=r+2;if(t<=n&&(i[e]="medium",r=t,r===n))break}}return i}renderGridItem(e,t,i,o,a,r,l){const{name:s,state:d,icon:c,isOn:u,isUnavailable:p,entityPicture:g}=this.getEntityDisplayInfo(e,o,i),m=this.getIconColor(e,u,p,i),v=this.buildItemStyles(e,i,a,u,p),h=r?this.buildAnimationStyles(i,t):"";let y="";"metro"===i.grid_display_mode?y=e.metro_size?`metro-${e.metro_size}`:l&&l[t]?`metro-${l[t]}`:"metro-small":"masonry"===i.grid_display_mode&&(t%5==0?y="masonry-extra-tall":t%3==0&&(y="masonry-tall"));const _=!1!==i.enable_hover_effect?`hover-${i.hover_effect||"scale"}`:"",b=this.resolveAction("tap",e,i,o),f=this.resolveAction("hold",e,i,o),x=this.resolveAction("double_tap",e,i,o),w=this.createGestureHandlers(`${i.id}_${e.id}`,{tap_action:null!=b?b:void 0,hold_action:null!=f?f:void 0,double_tap_action:null!=x?x:void 0,entity:e.entity,module:i},o,void 0);return n.qy`
      <div
        class="uc-grid-item grid-style-${i.grid_style} ${y} ${_}"
        data-uc-role="pane"
        style="${v}${h}"
        @pointerdown=${w.onPointerDown}
        @pointermove=${w.onPointerMove}
        @pointerup=${w.onPointerUp}
        @pointercancel=${w.onPointerCancel}
        @pointerleave=${w.onPointerLeave}
      >
        ${this.renderItemContent(e,i,a,s,d,c,m,g)}
      </div>
    `}buildItemStyles(e,t,i,n,o){const a=e.custom_background||(t.global_background_color&&"var(--card-background-color)"!==t.global_background_color?t.global_background_color:void 0),r=!a,l=a||"var(--uc-pane-bg, var(--card-background-color))",s=t.global_border_radius||i.defaultBorderRadius,d=t.global_padding||i.defaultPadding,c=t.global_border_width||0,u=t.global_border_color||"var(--divider-color)";let p=`background: ${l}; border-radius: ${s}; padding: ${d}; cursor: pointer; transition: all 0.2s ease;`;switch(c>0?p+=`border: ${c}px solid ${u};`:r&&!g.has(t.grid_style)&&(p+="border: var(--uc-pane-border, none);"),t.grid_style){case"style_11":p+=`box-shadow: 0 2px 8px ${t.card_shadow_color||"rgba(0, 0, 0, 0.1)"};`;break;case"style_15":case"style_18":break;case"style_16":const e=t.glass_tint_color||"rgba(255, 255, 255, 0.1)",i=t.glass_blur_amount||10;p+=`background: ${e}; backdrop-filter: blur(${i}px); -webkit-backdrop-filter: blur(${i}px); border: 1px solid ${t.glass_border_color||"rgba(255, 255, 255, 0.2)"};`;break;case"style_17":const o=t.gradient_start_color||"#6666FF",a=t.gradient_end_color||"#000070";p+=`background: linear-gradient(${(t.gradient_direction||"to-bottom-right").replace("to-","to ").replace("-"," ")}, ${o}, ${a}) !important;`;break;case"style_19":const r=t.neumorphic_light_shadow||"rgba(255, 255, 255, 0.1)";p+=`box-shadow: 6px 6px 12px ${t.neumorphic_dark_shadow||"rgba(0, 0, 0, 0.15)"}, -6px -6px 12px ${r};`;break;case"style_20":p+=`border-left: 3px solid ${n?t.accent_border_color||t.global_on_color||"var(--primary-color)":t.accent_border_color||"var(--divider-color)"};`}return p}buildAnimationStyles(e,t){if(!e.enable_load_animation||"none"===e.load_animation)return"";const i=e.grid_animation_duration||600,n=(e.animation_stagger||100)*t;return`opacity: 0; animation: grid-${e.load_animation||"fadeIn"} ${i}ms ease-out ${n}ms forwards;`}renderItemContent(e,t,i,o,a,r,l,s){const d=t.global_icon_size||i.defaultIconSize,c=t.global_font_size||i.defaultFontSize,u=t.global_name_color||"var(--primary-text-color)",p=t.global_state_color||"var(--secondary-text-color)",g=(e,t)=>s?n.qy`
          <div class="grid-item-picture" style="width: ${e}px; height: ${e}px;">
            <img src="${s}" alt="${o}" />
          </div>
        `:n.qy`<ha-icon icon="${r}" style="--mdc-icon-size: ${e}px; color: ${t};"></ha-icon>`;switch(i.layout){case"horizontal":return n.qy`
          <div class="grid-item-horizontal">
            ${i.showIcon?g(d,l):""}
            <div class="grid-item-text">
              ${i.showName?n.qy`<span class="grid-item-name" style="font-size: ${c}px; color: ${u};">${o}</span>`:""}
              ${i.showState?n.qy`<span class="grid-item-state" style="font-size: ${c-1}px; color: ${p};">${a}</span>`:""}
            </div>
          </div>
        `;case"icon-only":return n.qy`
          <div class="grid-item-icon-only">
            ${i.showIcon?g(d,l):""}
            ${i.showState&&"style_4"===t.grid_style?n.qy`<span class="grid-item-badge" style="font-size: ${c-2}px;">${a}</span>`:""}
            ${i.showState&&"style_10"===t.grid_style?n.qy`<span class="grid-item-corner-badge" style="font-size: ${c-3}px;">${a}</span>`:""}
            ${i.showState&&"style_9"===t.grid_style?n.qy`<span class="grid-item-ring-state" style="font-size: ${c}px;">${a}</span>`:""}
          </div>
        `;default:if("style_1"===t.grid_style)return n.qy`
            <div class="grid-item-vertical">
              ${i.showName?n.qy`<span class="grid-item-name" style="font-size: ${c}px; color: ${u}; margin-bottom: 8px;">${o}</span>`:""}
              ${i.showIcon?g(d,l):""}
              ${i.showState?n.qy`<span class="grid-item-state" style="font-size: ${c-1}px; color: ${p}; margin-top: 8px;">${a}</span>`:""}
            </div>
          `;if("style_5"===t.grid_style)return n.qy`
            <div class="grid-item-compact">
              <div class="grid-item-top-row">
                ${i.showIcon?g(d,l):""}
                ${i.showName?n.qy`<span class="grid-item-name" style="font-size: ${c}px; color: ${u};">${o}</span>`:""}
              </div>
              ${i.showState?n.qy`<span class="grid-item-state" style="font-size: ${c-1}px; color: ${p};">${a}</span>`:""}
            </div>
          `;if("style_15"===t.grid_style){const e=t.panel_header_color||l,g=t.panel_header_text_color||"var(--text-primary-color, white)";return n.qy`
            <div class="grid-item-panel">
              <div class="grid-item-panel-header" style="background: ${e};">
                ${i.showIcon?s?n.qy`<div class="grid-item-picture" style="width: ${d-4}px; height: ${d-4}px;"><img src="${s}" alt="${o}" /></div>`:n.qy`<ha-icon icon="${r}" style="--mdc-icon-size: ${d-4}px; color: ${g};"></ha-icon>`:""}
              </div>
              <div class="grid-item-panel-body" style="padding: 12px;">
                ${i.showName?n.qy`<span class="grid-item-name" style="font-size: ${c}px; color: ${u};">${o}</span>`:""}
                ${i.showState?n.qy`<span class="grid-item-state" style="font-size: ${c-1}px; color: ${p};">${a}</span>`:""}
              </div>
            </div>
          `}if("style_18"===t.grid_style){const e=t.split_left_color||l,g=t.split_right_color||"transparent";return n.qy`
            <div class="grid-item-split">
              <div class="grid-item-split-left" style="background: ${e}; padding: 16px;">
                ${i.showIcon?s?n.qy`<div class="grid-item-picture" style="width: ${d}px; height: ${d}px;"><img src="${s}" alt="${o}" /></div>`:n.qy`<ha-icon icon="${r}" style="--mdc-icon-size: ${d}px; color: var(--text-primary-color, white);"></ha-icon>`:""}
              </div>
              <div class="grid-item-split-right" style="background: ${g}; padding: 12px;">
                ${i.showName?n.qy`<span class="grid-item-name" style="font-size: ${c}px; color: ${u};">${o}</span>`:""}
                ${i.showState?n.qy`<span class="grid-item-state" style="font-size: ${c-1}px; color: ${p};">${a}</span>`:""}
              </div>
            </div>
          `}return n.qy`
            <div class="grid-item-vertical">
              ${i.showIcon?g(d,l):""}
              ${i.showName?n.qy`<span class="grid-item-name" style="font-size: ${c}px; color: ${u}; ${i.showIcon?"margin-top: 8px;":""}">${o}</span>`:""}
              ${i.showState?n.qy`<span class="grid-item-state" style="font-size: ${c-1}px; color: ${p}; margin-top: 4px;">${a}</span>`:""}
            </div>
          `}}renderPaginationControls(e,t,i){const o=i.pagination_style||"both",a="numbers"===o||"both"===o,r="buttons"===o||"both"===o;return n.qy`
      <div class="uc-grid-pagination">
        ${r?n.qy`
              <button
                class="pagination-btn"
                ?disabled=${e<=1}
                @click=${()=>{this._currentPages.set(i.id,e-1),this.triggerPreviewUpdate()}}
              >
                <ha-icon icon="mdi:chevron-left"></ha-icon>
              </button>
            `:""}
        ${a?n.qy`
              <div class="pagination-numbers">
                ${Array.from({length:t},(e,t)=>t+1).map(t=>n.qy`
                    <button
                      class="pagination-number ${t===e?"active":""}"
                      @click=${()=>{this._currentPages.set(i.id,t),this.triggerPreviewUpdate()}}
                    >
                      ${t}
                    </button>
                  `)}
              </div>
            `:""}
        ${r?n.qy`
              <button
                class="pagination-btn"
                ?disabled=${e>=t}
                @click=${()=>{this._currentPages.set(i.id,e+1),this.triggerPreviewUpdate()}}
              >
                <ha-icon icon="mdi:chevron-right"></ha-icon>
              </button>
            `:""}
      </div>
    `}getEditorStyles(){return`\n      .settings-section {\n        background: var(--secondary-background-color);\n        border-radius: var(--uc-r-8, 8px);\n        padding: 16px;\n        margin-bottom: 24px;\n      }\n      .section-title {\n        font-size: 18px;\n        font-weight: 700;\n        text-transform: uppercase;\n        color: var(--primary-color);\n        margin-bottom: 16px;\n        padding-bottom: 8px;\n        border-bottom: 2px solid var(--primary-color);\n        letter-spacing: 0.5px;\n      }\n      .field-container {\n        margin-bottom: 16px;\n      }\n      .field-title {\n        font-size: 16px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        margin-bottom: 4px;\n      }\n      .field-description {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        margin-bottom: 12px;\n        opacity: 0.8;\n        line-height: 1.4;\n      }\n      ${o.m.getSliderStyles()}\n      .conditional-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        padding: 16px;\n      }\n      .entity-rows-container {\n        margin-top: 16px;\n      }\n      .entity-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 12px;\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 8px;\n        cursor: move;\n        border: 1px solid var(--divider-color);\n        transition: all 0.2s ease;\n      }\n      .entity-row:hover {\n        border-color: var(--primary-color);\n      }\n      .entity-row.dragging {\n        opacity: 0.5;\n      }\n      .entity-row.drag-over {\n        border-top: 3px solid var(--primary-color);\n      }\n      .drag-handle {\n        cursor: grab;\n        color: var(--secondary-text-color);\n      }\n      .entity-info {\n        flex: 1;\n        font-size: 14px;\n        color: var(--primary-text-color);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .entity-info.no-entity {\n        color: var(--secondary-text-color);\n        font-style: italic;\n      }\n      .expand-icon {\n        cursor: pointer;\n        color: var(--primary-color);\n        transition: transform 0.2s ease;\n      }\n      .expand-icon.expanded {\n        transform: rotate(180deg);\n      }\n      .delete-icon {\n        cursor: pointer;\n        color: var(--error-color);\n      }\n      .entity-settings {\n        padding: 16px;\n        background: rgba(var(--rgb-primary-color), 0.05);\n        border-left: 3px solid var(--primary-color);\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        margin-bottom: 8px;\n        animation: slideDown 0.3s ease;\n      }\n      @keyframes slideDown {\n        from { opacity: 0; transform: translateY(-10px); }\n        to { opacity: 1; transform: translateY(0); }\n      }\n      .add-entity-btn {\n        width: 100%;\n        padding: 12px;\n        background: var(--primary-color);\n        color: var(--text-primary-color);\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        cursor: pointer;\n        font-size: 14px;\n        font-weight: 600;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        transition: all 0.2s ease;\n      }\n      .add-entity-btn:hover {\n        opacity: 0.9;\n      }\n      .chips-container {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n        margin-bottom: 12px;\n      }\n      .filter-chip {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 6px 12px;\n        background: var(--primary-color);\n        color: var(--text-primary-color);\n        border-radius: var(--uc-r-16, 16px);\n        font-size: 13px;\n        transition: all 0.2s ease;\n        position: relative;\n      }\n      .filter-chip.exclude-chip {\n        background: var(--error-color);\n      }\n      .filter-chip:hover {\n        opacity: 0.9;\n        padding-right: 32px;\n      }\n      .chip-remove-icon {\n        cursor: pointer;\n        font-size: 16px;\n        opacity: 0;\n        position: absolute;\n        right: 8px;\n        transition: opacity 0.2s ease;\n      }\n      .filter-chip:hover .chip-remove-icon {\n        opacity: 1;\n      }\n      .domain-select {\n        width: 100%;\n        padding: 10px 12px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        color: var(--primary-text-color);\n        font-size: 14px;\n        cursor: pointer;\n      }\n      .keyword-input-row {\n        margin-top: 8px;\n      }\n      .keyword-input {\n        width: 100%;\n        padding: 10px 12px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        color: var(--primary-text-color);\n        font-size: 14px;\n        box-sizing: border-box;\n      }\n      .keyword-input:focus {\n        outline: none;\n        border-color: var(--primary-color);\n      }\n      .keyword-input::placeholder {\n        color: var(--secondary-text-color);\n        opacity: 0.7;\n      }\n      .info-box {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 12px;\n        background: rgba(var(--rgb-primary-color), 0.1);\n        border-radius: var(--uc-r-8, 8px);\n        margin-top: 16px;\n        font-size: 13px;\n        color: var(--primary-color);\n      }\n      .style-info {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 12px;\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 16px;\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        border-left: 3px solid var(--primary-color);\n      }\n      .style-info ha-icon {\n        color: var(--primary-color);\n        --mdc-icon-size: 20px;\n      }\n      .style-info strong {\n        color: var(--primary-text-color);\n      }\n      .color-field {\n        margin-bottom: 16px;\n      }\n      .action-override-note {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 12px;\n        background: rgba(var(--rgb-info-color, 3, 169, 244), 0.1);\n        border-radius: var(--uc-r-8, 8px);\n        font-size: 13px;\n        color: var(--info-color, #03a9f4);\n        margin-top: 12px;\n      }\n      /* Entity Actions Override Styles */\n      .entity-actions-override {\n        margin-top: 16px;\n        padding: 16px;\n        background: rgba(var(--rgb-primary-color), 0.05);\n        border-radius: var(--uc-r-8, 8px);\n        border-left: 3px solid var(--primary-color);\n      }\n      .entity-action-info {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 10px 12px;\n        background: rgba(var(--rgb-info-color, 3, 169, 244), 0.1);\n        border-radius: var(--uc-r-6, 6px);\n        font-size: 12px;\n        color: var(--info-color, #03a9f4);\n        margin-bottom: 16px;\n      }\n      .entity-action-info ha-icon {\n        --mdc-icon-size: 18px;\n        flex-shrink: 0;\n      }\n      .entity-action-field {\n        margin-bottom: 16px;\n      }\n      .entity-action-field:last-child {\n        margin-bottom: 0;\n      }\n      .entity-action-field ha-form {\n        --ha-form-padding: 0;\n        display: block;\n        width: 100%;\n      }\n      /* Ensure action selectors can expand and show all fields */\n      .entity-action-field ha-selector,\n      .entity-action-field ha-selector-ui-action {\n        display: block;\n        width: 100%;\n      }\n      .entity-action-field ha-expansion-panel {\n        --expansion-panel-content-padding: 0 16px 16px;\n      }\n      /* Section Spacer */\n      .entity-section-spacer {\n        height: 24px;\n        margin: 8px 0;\n        border-bottom: 1px dashed var(--divider-color);\n      }\n      /* Entity Condition Styles */\n      .entity-conditions-list {\n        margin-top: 12px;\n      }\n      .add-condition-btn {\n        font-size: 12px;\n        transition: all 0.2s ease;\n      }\n      .add-condition-btn:hover {\n        background: var(--primary-color) !important;\n        color: var(--text-primary-color) !important;\n        border-style: solid !important;\n      }\n      .entity-condition-item {\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-6, 6px);\n        padding: 12px;\n        margin-bottom: 8px;\n        background: var(--uc-pane-bg, var(--card-background-color));\n        transition: all 0.2s ease;\n      }\n      .entity-condition-item:hover {\n        border-color: var(--primary-color);\n      }\n      .entity-condition-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin-bottom: 12px;\n        padding-bottom: 8px;\n        border-bottom: 1px solid var(--divider-color);\n      }\n      .entity-condition-label {\n        font-size: 12px;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n      }\n      .entity-condition-delete {\n        cursor: pointer;\n        color: var(--error-color);\n        --mdc-icon-size: 18px;\n        transition: transform 0.2s ease;\n      }\n      .entity-condition-delete:hover {\n        transform: scale(1.1);\n      }\n    `}getStyles(){return"\n      /* Grid Container */\n      .uc-grid-container {\n        width: 100%;\n        box-sizing: border-box;\n      }\n\n      /* Grid Container Mode Styles */\n      .uc-grid-container.uc-grid-mode-metro {\n        /* Metro uses dense packing to fill gaps */\n      }\n\n      .uc-grid-container.uc-grid-mode-masonry {\n        /* Masonry allows variable heights */\n        align-items: start;\n      }\n\n      /* Grid Item Base */\n      .uc-grid-item {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        box-sizing: border-box;\n        /* overflow hidden causes text cutoff - use visible but clip visual overflow */\n        overflow: visible;\n      }\n\n      /* In regular grid mode, items have equal height */\n      .uc-grid-mode-grid .uc-grid-item {\n        min-height: 80px;\n      }\n\n      /* In masonry mode, items span rows based on class */\n      .uc-grid-mode-masonry .uc-grid-item {\n        grid-row: span 1;\n        /* Don't force overflow hidden - let content determine height within row span */\n        min-height: auto;\n        height: 100%;\n      }\n\n      /* In metro mode, items have defined sizes via classes */\n      .uc-grid-mode-metro .uc-grid-item {\n        min-height: auto;\n        height: 100%;\n      }\n\n      /* Hover Effects */\n      .uc-grid-item.hover-scale:hover {\n        transform: scale(var(--hover-scale, 1.05));\n        z-index: 1;\n      }\n\n      .uc-grid-item.hover-glow:hover {\n        box-shadow: 0 0 20px var(--hover-glow-color, var(--primary-color));\n      }\n\n      .uc-grid-item.hover-lift:hover {\n        transform: translateY(-4px);\n        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n      }\n\n      .uc-grid-item.hover-color:hover {\n        background: var(--hover-background-color, var(--primary-color)) !important;\n      }\n\n      /* Metro Sizes - spans based on doubled column grid */\n      /* Small = 1 visual column (2 grid columns) */\n      .uc-grid-item.metro-small {\n        grid-column: span 2;\n        grid-row: span 1;\n        height: 100%;\n        min-width: 0;\n      }\n\n      /* Medium = 2 visual columns (4 grid columns) */\n      .uc-grid-item.metro-medium {\n        grid-column: span 4;\n        grid-row: span 1;\n        height: 100%;\n        min-width: 0;\n      }\n\n      /* Large = 2 visual columns, 2 rows tall */\n      .uc-grid-item.metro-large {\n        grid-column: span 4;\n        grid-row: span 2;\n        height: 100%;\n        min-width: 0;\n      }\n\n      /* Masonry varied heights - items fill their row span completely */\n      .uc-grid-item.masonry-tall {\n        grid-row: span 2;\n        height: 100%;\n      }\n\n      .uc-grid-item.masonry-extra-tall {\n        grid-row: span 3;\n        height: 100%;\n      }\n\n      /* Grid Item Content Layouts */\n      .grid-item-vertical {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        height: 100%;\n        gap: 4px;\n        padding: 8px;\n        box-sizing: border-box;\n      }\n\n      .grid-item-horizontal {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        gap: 12px;\n        width: 100%;\n        height: 100%;\n        padding: 8px;\n        box-sizing: border-box;\n      }\n\n      .grid-item-text {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        flex: 1;\n        min-width: 0;\n        overflow: hidden;\n      }\n\n      .grid-item-icon-only {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        width: 100%;\n        height: 100%;\n      }\n\n      /* Entity picture for person, camera, media_player entities */\n      .grid-item-picture {\n        border-radius: 50%;\n        overflow: hidden;\n        flex-shrink: 0;\n        background: var(--uc-pane-bg, var(--secondary-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      .grid-item-picture img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        display: block;\n      }\n\n      .grid-item-compact {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n        padding: 8px;\n        box-sizing: border-box;\n      }\n\n      .grid-item-top-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        margin-bottom: 4px;\n      }\n\n      /* Panel Style */\n      .grid-item-panel {\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      .grid-item-panel-header {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 12px;\n      }\n\n      .grid-item-panel-body {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        flex: 1;\n      }\n\n      /* Split Style */\n      .grid-item-split {\n        display: flex;\n        flex-direction: row;\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      .grid-item-split-left {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 40%;\n      }\n\n      .grid-item-split-right {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: center;\n        flex: 1;\n      }\n\n      /* Text Elements */\n      .grid-item-name {\n        font-weight: 500;\n        line-height: 1.3;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        /* Allow wrapping for longer names in metro/masonry but truncate in regular grid */\n        word-break: break-word;\n      }\n\n      /* Regular grid: single line with ellipsis */\n      .uc-grid-mode-grid .grid-item-name {\n        white-space: nowrap;\n      }\n\n      /* Metro/Masonry: allow wrapping for larger tiles */\n      .uc-grid-mode-metro .grid-item-name,\n      .uc-grid-mode-masonry .grid-item-name {\n        white-space: normal;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n      }\n\n      /* Large metro tiles can show more lines */\n      .uc-grid-mode-metro .metro-large .grid-item-name {\n        -webkit-line-clamp: 3;\n      }\n\n      .grid-item-state {\n        opacity: 0.8;\n        line-height: 1.3;\n        text-transform: capitalize;\n      }\n\n      /* Badge Styles */\n      .grid-item-badge {\n        position: absolute;\n        bottom: -4px;\n        right: -4px;\n        background: var(--primary-color);\n        color: var(--text-primary-color, white);\n        padding: 2px 6px;\n        border-radius: var(--uc-r-10, 10px);\n        font-weight: 600;\n        text-transform: capitalize;\n      }\n\n      .grid-item-corner-badge {\n        position: absolute;\n        top: 4px;\n        right: 4px;\n        font-size: 10px;\n        background: rgba(0, 0, 0, 0.5);\n        color: white;\n        padding: 2px 4px;\n        border-radius: var(--uc-r-4, 4px);\n        text-transform: capitalize;\n      }\n\n      .grid-item-ring-state {\n        position: absolute;\n        bottom: 8px;\n        left: 50%;\n        transform: translateX(-50%);\n        text-transform: capitalize;\n        color: var(--primary-text-color);\n        font-weight: 500;\n        white-space: nowrap;\n      }\n\n      /* Empty State */\n      .grid-empty-state {\n        grid-column: 1 / -1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        padding: 32px;\n        color: var(--secondary-text-color);\n        gap: 8px;\n      }\n\n      .grid-empty-state ha-icon {\n        --mdc-icon-size: 48px;\n        opacity: 0.5;\n      }\n\n      /* Pagination */\n      .uc-grid-pagination {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        margin-top: 16px;\n        padding: 8px;\n      }\n\n      .pagination-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 36px;\n        height: 36px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        color: var(--primary-text-color);\n        cursor: pointer;\n        transition: all 0.2s ease;\n      }\n\n      .pagination-btn:hover:not([disabled]) {\n        background: var(--primary-color);\n        color: var(--text-primary-color);\n        border-color: var(--primary-color);\n      }\n\n      .pagination-btn[disabled] {\n        opacity: 0.4;\n        cursor: not-allowed;\n      }\n\n      .pagination-numbers {\n        display: flex;\n        gap: 4px;\n      }\n\n      .pagination-number {\n        width: 32px;\n        height: 32px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-6, 6px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        color: var(--primary-text-color);\n        cursor: pointer;\n        font-size: 13px;\n        font-weight: 500;\n        transition: all 0.2s ease;\n      }\n\n      .pagination-number:hover {\n        border-color: var(--primary-color);\n      }\n\n      .pagination-number.active {\n        background: var(--primary-color);\n        color: var(--text-primary-color);\n        border-color: var(--primary-color);\n      }\n\n      /* Load Animations */\n      @keyframes grid-fadeIn {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }\n\n      @keyframes grid-slideUp {\n        from { opacity: 0; transform: translateY(20px); }\n        to { opacity: 1; transform: translateY(0); }\n      }\n\n      @keyframes grid-slideDown {\n        from { opacity: 0; transform: translateY(-20px); }\n        to { opacity: 1; transform: translateY(0); }\n      }\n\n      @keyframes grid-slideLeft {\n        from { opacity: 0; transform: translateX(20px); }\n        to { opacity: 1; transform: translateX(0); }\n      }\n\n      @keyframes grid-slideRight {\n        from { opacity: 0; transform: translateX(-20px); }\n        to { opacity: 1; transform: translateX(0); }\n      }\n\n      @keyframes grid-zoomIn {\n        from { opacity: 0; transform: scale(0.8); }\n        to { opacity: 1; transform: scale(1); }\n      }\n\n      /* Style-specific Overrides */\n      .grid-style-style_4 .grid-item-icon-only {\n        min-height: 60px;\n      }\n\n      .grid-style-style_6:hover::after {\n        content: attr(data-name);\n        position: absolute;\n        bottom: 100%;\n        left: 50%;\n        transform: translateX(-50%);\n        background: var(--tooltip-background-color, rgba(0, 0, 0, 0.9));\n        color: var(--tooltip-text-color, white);\n        padding: 4px 8px;\n        border-radius: var(--uc-r-4, 4px);\n        font-size: 12px;\n        white-space: nowrap;\n        pointer-events: none;\n        z-index: 10;\n      }\n\n      /* Ring Progress style - circular ring with icon inside */\n      .grid-style-style_9 {\n        position: relative;\n        aspect-ratio: 1 / 1 !important;\n        border-radius: 50% !important;\n        background: transparent !important;\n        border: 3px solid var(--primary-color) !important;\n        box-sizing: border-box;\n      }\n      \n      .grid-style-style_9 .grid-item-icon-only {\n        flex-direction: column;\n      }\n\n      .grid-style-style_12 {\n        border: 2px solid var(--divider-color) !important;\n      }\n\n      .grid-style-style_12:hover {\n        border-color: var(--primary-color) !important;\n      }\n\n      .grid-style-style_15 {\n        padding: 0 !important;\n        overflow: hidden;\n      }\n\n      /* Style 17 (Gradient) - background set via inline styles from buildItemStyles */\n      .grid-style-style_17 .grid-item-name,\n      .grid-style-style_17 .grid-item-state {\n        color: var(--text-primary-color, white);\n      }\n\n      .grid-style-style_18 {\n        padding: 0 !important;\n        overflow: hidden;\n      }\n\n      /* Responsive: use --uc-grid-columns-mobile (set on container) so mobile can show configured columns */\n      @media (max-width: 600px) {\n        .uc-grid-container.uc-grid-mode-grid,\n        .uc-grid-container.uc-grid-mode-masonry {\n          grid-template-columns: repeat(var(--uc-grid-columns-mobile, var(--uc-grid-columns, 4)), minmax(0, 1fr)) !important;\n        }\n\n        .uc-grid-container.uc-grid-mode-metro {\n          grid-template-columns: repeat(var(--uc-grid-metro-columns-mobile, 8), minmax(0, 1fr)) !important;\n        }\n\n        .uc-grid-item.metro-small {\n          grid-column: span 2;\n          grid-row: span 1;\n        }\n\n        .uc-grid-item.metro-medium,\n        .uc-grid-item.metro-large {\n          grid-column: span 4;\n          grid-row: span 1;\n        }\n\n        .uc-grid-item.masonry-tall,\n        .uc-grid-item.masonry-extra-tall {\n          grid-row: span 1;\n        }\n      }\n    "}}},6673(e,t,i){i.d(t,{W:()=>o,p:()=>n});class n{constructor(e=32){this._cache=new Map,this._limit=e}read(e,t,i,n){const o=this._cache.get(e);if(o&&o.key===i&&function(e,t){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}(o.deps,t))return o.value;const a=n();if(this._cache.set(e,{deps:t,key:i,value:a}),this._cache.size>this._limit){const e=this._cache.keys().next().value;void 0!==e&&this._cache.delete(e)}return a}forget(e){this._cache.delete(e)}clear(){this._cache.clear()}}function o(...e){try{return JSON.stringify(e)}catch(e){return`__unserializable__${Math.random()}`}}}};