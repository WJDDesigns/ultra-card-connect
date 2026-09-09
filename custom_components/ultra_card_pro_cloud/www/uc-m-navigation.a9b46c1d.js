export const __webpack_esm_ids__=[4515];export const __webpack_esm_modules__={3917(e,i,t){var a=t(2618),n=t(4791),o=function(e,i,t,a){var n,o=arguments.length,l=o<3?i:null===a?a=Object.getOwnPropertyDescriptor(i,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,i,t,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(o<3?n(l):o>3?n(i,t,l):n(i,t))||l);return o>3&&l&&Object.defineProperty(i,t,l),l};let l=class extends a.WF{constructor(){super(...arguments),this.value="",this.label="Navigation Target",this.disabled=!1}_valueChanged(e){const i=e.detail.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:i},bubbles:!0,composed:!0}))}render(){return a.qy`
      <div class="navigation-picker">
        ${this.label?a.qy`<label class="label">${this.label}</label>`:""}
        ${this.helper?a.qy`<div class="helper">${this.helper}</div>`:""}

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this.value}
          .disabled=${this.disabled}
          @value-changed=${this._valueChanged}
        ></ha-selector>
      </div>
    `}};l.styles=a.AH`
    :host {
      display: block;
    }

    .navigation-picker {
      width: 100%;
    }

    .label {
      display: block;
      font-weight: 500;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }

    .helper {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
    }

    ha-selector {
      width: 100%;
      display: block;
    }
  `,o([(0,n.MZ)({attribute:!1})],l.prototype,"hass",void 0),o([(0,n.MZ)()],l.prototype,"value",void 0),o([(0,n.MZ)()],l.prototype,"label",void 0),o([(0,n.MZ)()],l.prototype,"helper",void 0),o([(0,n.MZ)({type:Boolean})],l.prototype,"disabled",void 0),l=o([(0,n.EM)("ultra-navigation-picker")],l)},9009(e,i,t){var a=t(2618),n=t(4791),o=t(8153),l=function(e,i,t,a){var n,o=arguments.length,l=o<3?i:null===a?a=Object.getOwnPropertyDescriptor(i,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,i,t,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(l=(o<3?n(l):o>3?n(i,t,l):n(i,t))||l);return o>3&&l&&Object.defineProperty(i,t,l),l};let s=class extends a.WF{static get styles(){return a.AH`
      ha-entity-picker {
        width: 100%;
        display: block;
      }
    `}render(){return a.qy`
      <ha-entity-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value||""}
        .entityFilter=${this.entityFilter}
        @value-changed=${this._valueChanged}
        allow-custom-entity
      ></ha-entity-picker>
    `}_valueChanged(e){e.stopPropagation();const i=e.detail.value;i!==this.value&&(this.value=i,(0,o.rC)(this,"value-changed",{value:i}))}};l([(0,n.MZ)({attribute:!1})],s.prototype,"hass",void 0),l([(0,n.MZ)()],s.prototype,"label",void 0),l([(0,n.MZ)()],s.prototype,"value",void 0),l([(0,n.MZ)()],s.prototype,"entityFilter",void 0),s=l([(0,n.EM)("ultra-card-entity-picker")],s)},6106(e,i,t){t.d(i,{UltraNavigationModule:()=>c});var a=t(2618),n=t(7475),o=t(766),l=t(6478),s=t(2133),r=(t(7921),t(3917),t(9009),t(4830));const d=[{id:"uc_modern",name:"UC Modern",description:"Clean modern style with rounded buttons and subtle shadows"},{id:"uc_minimal",name:"UC Minimal",description:"Minimal flat design with sharp edges"},{id:"uc_ios_glass",name:"iOS Glass",description:"iOS-style glassmorphism with heavy blur and vibrancy"},{id:"uc_material",name:"Material Design",description:"Material Design 3 elevated surface with tonal colors"},{id:"uc_floating",name:"Floating Pill",description:"Floating pill design with maximum border radius"},{id:"uc_docked",name:"Docked Bar",description:"Edge-to-edge bar without border radius"},{id:"uc_neumorphic",name:"Neumorphic",description:"Soft UI with light and dark shadows"},{id:"uc_gradient",name:"Gradient",description:"Colorful gradient background"},{id:"uc_sidebar",name:"Sidebar",description:"Vertical sidebar optimized for left/right positions"},{id:"uc_compact",name:"Compact",description:"Ultra-compact with smaller icons and tight spacing"}];class c extends n.m{constructor(){super(...arguments),this.metadata={type:"navigation",title:"Navigation",description:"Add a global navigation bar with routes, popups, and media player controls",author:"WJD Designs",version:"1.0.0",icon:"mdi:compass-outline",category:"layout",tags:["navigation","navbar","menu","routes","layout"]},this._expandedRoutes=new Set,this._expandedSpecialItems=new Set,this._draggedItem=null}createDefault(e,i){return{id:e||this.generateId("navigation"),type:"navigation",nav_routes:[{id:this.generateId("nav-route"),icon:"mdi:home",label:"Home",url:"/lovelace/home"}],nav_scope:"all_views",nav_style:"theme",nav_desktop:{mode:"floating",show_labels:!0,min_width:768,position:"bottom"},nav_mobile:{mode:"docked",show_labels:!1,position:"bottom"},nav_layout:{},nav_haptic:{url:!1,tap_action:!0,hold_action:!0,double_tap_action:!0},nav_media_player:{enabled:!1,entity:"",display_mode:"icon_click",album_cover_background:!1,icon_position:"end",widget_position:"above",desktop_position:"bottom-center"},nav_collapse:{enabled:!1,mode:"handle",start_collapsed:!0,remember_state:!0},nav_styles:"",nav_template:"",display_mode:"always",display_conditions:[]}}buildUnifiedNavItems(e){var i,t;const a=[];if((e.nav_routes||[]).forEach((e,i)=>{a.push({type:"route",id:e.id,data:e,position:i})}),(e.nav_stacks||[]).forEach((i,t)=>{a.push({type:"stack",id:i.id,data:i,position:(e.nav_routes||[]).length+t})}),null===(i=e.nav_media_player)||void 0===i?void 0:i.enabled){const i=null===(t=e.nav_media_player)||void 0===t?void 0:t.icon_position;let n=a.length;"start"===i?n=0:"end"===i?n=a.length:"number"==typeof i&&(n=i),a.push({type:"media_player",id:"__media_player__",position:n})}a.sort((e,i)=>e.position-i.position);const n=[];return a.forEach(e=>{n.push(e),"stack"===e.type&&e.data&&(e.data.children||[]).forEach(i=>{n.push({type:"stack_child",id:i.id,data:i,position:-1,parentStackId:e.id})})}),n}renderGeneralTab(e,i,t,s){var r,c,v,p,g,u,h,_,b,m,y,f,k,x,w,$,O,j,S,I,U,P,C,T,A,E,D,z,R,q,M,L,F,N,H,B,W,J,V,Z,G,K,Y,Q,X,ee,ie,te,ae,ne,oe,le,se,re,de,ce,ve,pe,ge,ue,he,_e,be,me;const ye=this.resolveNavigationConfig(e,t),fe=ye.nav_routes||[],ke=(null===(r=null==i?void 0:i.locale)||void 0===r?void 0:r.language)||"en",xe=e.nav_style,we=this.withThemeInheritOption(ke,t,"navigation","nav_style","uc_modern",d.map(e=>({value:e.id,label:`${e.name} - ${e.description}`}))),$e=this.buildUnifiedNavItems(ye);return a.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${n.m.getSliderStyles()}
        ${this.getEditorStyles()}
      </style>

      <div class="module-settings">
        <!-- Edit Mode Info Banner -->
        <div class="info-box" style="margin-bottom: 16px;">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <span
            >${(0,l.kg)("editor.navigation.edit_mode_banner",ke,"Changes preview live in the navbar below. Close this editor to interact with the navbar.")}</span
          >
        </div>

        <!-- Paths Section -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,l.kg)("editor.navigation.section_items",ke,"NAVIGATION ITEMS")}
          </div>
          <div class="section-description">
            ${(0,l.kg)("editor.navigation.section_items_desc",ke,"Configure and reorder items that appear in your navbar. Drag to reorder. Drag paths onto a stack to add them as children.")}
          </div>

          <div class="routes-list" id="nav-items-list">
            ${$e.map((e,a)=>{var n,o,r;if("route"===e.type&&e.data){const n=fe.findIndex(i=>i.id===e.id);return this.renderRouteRow(e.data,n,fe,i,ye,s,a,$e.length,void 0,t)}if("stack_child"===e.type&&e.data&&e.parentStackId)return this.renderRouteRow(e.data,-1,[],i,ye,s,a,$e.length,e.parentStackId,t);if("stack"===e.type&&e.data){const t=ye.nav_stacks||[],n=t.findIndex(i=>i.id===e.id);return this.renderStackRow(e.data,n,t,i,ye,s,a,$e.length)}if("media_player"===e.type){const e=(null===(n=ye.nav_media_player)||void 0===n?void 0:n.entity)&&""!==(null===(o=ye.nav_media_player)||void 0===o?void 0:o.entity);return this.renderSpecialItemRow("media_player","mdi:music",(0,l.kg)("editor.navigation.media_player",ke,"Media Player"),e&&(null===(r=ye.nav_media_player)||void 0===r?void 0:r.entity)?ye.nav_media_player.entity:(0,l.kg)("editor.navigation.media_player_entity_required",ke,"Click to select entity (required)"),a,$e.length,ye,i,s,t)}return""})}
          </div>

          <div style="display: flex; gap: 12px;">
            <button
              class="add-entity-btn"
              style="flex: 1;"
              @click=${()=>{const e=this.createDefaultRoute();this._expandedRoutes.add(e.id),s({nav_routes:[...fe,e]})}}
            >
              <ha-icon icon="mdi:plus"></ha-icon>
              ${(0,l.kg)("editor.navigation.add_path",ke,"Add Path")}
            </button>
            <button
              class="add-entity-btn"
              style="flex: 1;"
              @click=${()=>{const e=ye.nav_stacks||[],i=this.createDefaultStack();this._expandedRoutes.add(i.id),s({nav_stacks:[...e,i]})}}
            >
              <ha-icon icon="mdi:view-sequential"></ha-icon>
              ${(0,l.kg)("editor.navigation.add_stack",ke,"Add Stack")}
            </button>
          </div>
        </div>

        <!-- Special Items Section -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,l.kg)("editor.navigation.section_special",ke,"SPECIAL ITEMS")}
          </div>
          <div class="section-description">
            ${(0,l.kg)("editor.navigation.section_special_desc",ke,"Enable special navbar items. When enabled, they appear in the items list above for reordering.")}
          </div>

          ${this.renderFieldSection((0,l.kg)("editor.navigation.media_player_icon",ke,"Media Player Icon"),(0,l.kg)("editor.navigation.media_player_icon_desc",ke,"Show a media player icon in the navbar"),i,{nav_media_player_enabled:!0===(null===(c=ye.nav_media_player)||void 0===c?void 0:c.enabled)},[this.booleanField("nav_media_player_enabled")],e=>s({nav_media_player:Object.assign(Object.assign({},ye.nav_media_player),{enabled:e.detail.value.nav_media_player_enabled})}))}
        </div>

        <!-- Style Section -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,l.kg)("editor.navigation.section_style",ke,"NAVBAR STYLE")}
          </div>

          ${o.U.renderFieldSection((0,l.kg)("editor.navigation.visual_preset",ke,"Visual Preset"),(0,l.kg)("editor.navigation.visual_preset_desc",ke,"Choose a visual style preset for your navbar."),i,{nav_style:xe||"theme"},[o.U.select("nav_style",we)],e=>{s({nav_style:e.detail.value.nav_style})})}

          <div class="color-field" style="margin-top: 16px;">
            <div class="field-title">
              ${(0,l.kg)("editor.navigation.dock_color",ke,"Dock Color")}
            </div>
            <div class="field-description">
              ${(0,l.kg)("editor.navigation.dock_color_desc",ke,"Custom accent color for the dock background. For glass styles this tints the glass.")}
            </div>
            <ultra-color-picker
              .hass=${i}
              .value=${ye.nav_dock_color||""}
              @value-changed=${e=>s({nav_dock_color:e.detail.value})}
            ></ultra-color-picker>
          </div>

          <div class="color-field" style="margin-top: 12px;">
            <div class="field-title">
              ${(0,l.kg)("editor.navigation.icon_color",ke,"Icon Color")}
            </div>
            <div class="field-description">
              ${(0,l.kg)("editor.navigation.icon_color_desc",ke,"Custom color for navbar icons. Overrides the default icon color from the style preset.")}
            </div>
            <ultra-color-picker
              .hass=${i}
              .value=${ye.nav_icon_color||""}
              @value-changed=${e=>s({nav_icon_color:e.detail.value})}
            ></ultra-color-picker>
          </div>
        </div>

        <!-- Visibility Scope Section -->
        <div class="settings-section">
          <div class="section-title">
            ${(0,l.kg)("editor.navigation.section_visibility",ke,"VISIBILITY")}
          </div>

          ${o.U.renderFieldSection((0,l.kg)("editor.navigation.nav_scope",ke,"Show Navigation On"),(0,l.kg)("editor.navigation.nav_scope_desc",ke,"Control where this navbar appears."),i,{nav_scope:ye.nav_scope||"all_views"},[o.U.select("nav_scope",[{value:"all_views",label:(0,l.kg)("editor.navigation.scope_all_views",ke,"All views (global)")},{value:"current_view",label:(0,l.kg)("editor.navigation.scope_current_view",ke,"Current view only")}])],e=>{s({nav_scope:e.detail.value.nav_scope})})}

          <div class="info-box" style="margin-top: 8px;">
            <ha-icon icon="mdi:information"></ha-icon>
            <span>
              <strong>${(0,l.kg)("editor.navigation.scope_all_label",ke,"All views:")}</strong>
              ${(0,l.kg)("editor.navigation.scope_all_info",ke,"Navbar appears on every view in your dashboard.")}<br />
              <strong
                >${(0,l.kg)("editor.navigation.scope_current_label",ke,"Current view:")}</strong
              >
              ${(0,l.kg)("editor.navigation.scope_current_info",ke,"Navbar only appears on the view where this card is placed.")}
            </span>
          </div>

          <div
            class="info-box"
            style="margin-top: 8px; border-left-color: var(--warning-color); background: rgba(var(--rgb-warning-color), 0.1);"
          >
            <ha-icon icon="mdi:alert" style="color: var(--warning-color);"></ha-icon>
            <span>
              <strong>${(0,l.kg)("editor.navigation.note_label",ke,"Note:")}</strong>
              ${(0,l.kg)("editor.navigation.global_navbar_warning",ke,'Only one global navbar can be active at a time. If you have multiple navbars set to "All views", only the first registered one will be displayed. Use "Current view only" for navbars on specific pages.')}
            </span>
          </div>
        </div>

        <!-- Desktop Configuration Section -->
        ${this.renderSettingsSection((0,l.kg)("editor.navigation.section_desktop",ke,"DESKTOP MODE"),(0,l.kg)("editor.navigation.section_desktop_desc",ke,"Configure navbar appearance and behavior on desktop devices."),[{title:(0,l.kg)("editor.navigation.mode",ke,"Mode"),description:(0,l.kg)("editor.navigation.desktop_mode_desc",ke,"Choose floating (centered with margins) or docked (edge-to-edge)."),hass:i,data:{mode:(null===(v=ye.nav_desktop)||void 0===v?void 0:v.mode)||"floating"},schema:[o.U.select("mode",[{value:"floating",label:(0,l.kg)("editor.navigation.mode_floating",ke,"Floating")},{value:"docked",label:(0,l.kg)("editor.navigation.mode_docked",ke,"Docked")}])],onChange:e=>{s({nav_desktop:Object.assign(Object.assign({},ye.nav_desktop),{mode:e.detail.value.mode})})}},{title:(0,l.kg)("editor.navigation.position",ke,"Position"),description:(0,l.kg)("editor.navigation.desktop_position_desc",ke,"Where the navbar appears on desktop."),hass:i,data:{position:(null===(p=ye.nav_desktop)||void 0===p?void 0:p.position)||"bottom"},schema:[o.U.select("position",[{value:"bottom",label:(0,l.kg)("editor.navigation.position_bottom",ke,"Bottom")},{value:"top",label:(0,l.kg)("editor.navigation.position_top",ke,"Top")},{value:"left",label:(0,l.kg)("editor.navigation.position_left",ke,"Left")},{value:"right",label:(0,l.kg)("editor.navigation.position_right",ke,"Right")}])],onChange:e=>{s({nav_desktop:Object.assign(Object.assign({},ye.nav_desktop),{position:e.detail.value.position})})}},{title:(0,l.kg)("editor.navigation.show_labels",ke,"Show Labels"),description:(0,l.kg)("editor.navigation.desktop_show_labels_desc",ke,"Control label visibility on desktop."),hass:i,data:{show_labels:"boolean"==typeof(null===(g=ye.nav_desktop)||void 0===g?void 0:g.show_labels)?ye.nav_desktop.show_labels?"true":"false":null!==(h=null===(u=ye.nav_desktop)||void 0===u?void 0:u.show_labels)&&void 0!==h?h:"false"},schema:[o.U.select("show_labels",[{value:"false",label:(0,l.kg)("editor.navigation.labels_hidden",ke,"Hidden")},{value:"true",label:(0,l.kg)("editor.navigation.labels_icons",ke,"Icons & Labels")},{value:"text_only",label:(0,l.kg)("editor.navigation.labels_text_only",ke,"Text only (no icons)")}])],onChange:e=>{const i=e.detail.value.show_labels,t="true"===i||"false"!==i&&i;s({nav_desktop:Object.assign(Object.assign({},ye.nav_desktop),{show_labels:t})})}},{title:(0,l.kg)("editor.navigation.item_alignment",ke,"Item Alignment"),description:(0,l.kg)("editor.navigation.item_alignment_desc",ke,"How items are distributed within the dock."),hass:i,data:{alignment:(null===(_=ye.nav_desktop)||void 0===_?void 0:_.alignment)||"center"},schema:[o.U.select("alignment",[{value:"center",label:(0,l.kg)("editor.navigation.align_center",ke,"Center")},{value:"start",label:(0,l.kg)("editor.navigation.align_start",ke,"Start")},{value:"end",label:(0,l.kg)("editor.navigation.align_end",ke,"End")},{value:"space-between",label:(0,l.kg)("editor.navigation.align_space_between",ke,"Space Between")},{value:"space-around",label:(0,l.kg)("editor.navigation.align_space_around",ke,"Space Around")}])],onChange:e=>{s({nav_desktop:Object.assign(Object.assign({},ye.nav_desktop),{alignment:e.detail.value.alignment})})}}])}

        ${this.renderSliderField((0,l.kg)("editor.navigation.min_width",ke,"Min Width"),(0,l.kg)("editor.navigation.min_width_desc",ke,"Viewport width (px) that switches to desktop mode."),null!==(m=null===(b=ye.nav_desktop)||void 0===b?void 0:b.min_width)&&void 0!==m?m:768,768,320,2560,1,e=>s({nav_desktop:Object.assign(Object.assign({},ye.nav_desktop),{min_width:e})}),"px")}

        <!-- Desktop Offset Slider -->
        <div class="field-group" style="margin: 16px 0; padding: 0 16px;">
          <div>
            <div
              class="field-title"
              style="font-size: 14px; font-weight: 600; margin-bottom: 4px;"
            >
              ${(0,l.kg)("editor.navigation.desktop_offset",ke,"Desktop Offset")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color);"
            >
              ${(0,l.kg)("editor.navigation.offset_desc",ke,"Distance from screen edge (px). Pushes the dock away from the edge.")}
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px;">
            <ha-slider
              style="flex: 1;"
              .min=${0}
              .max=${100}
              .step=${1}
              .value=${null!==(f=null===(y=ye.nav_desktop)||void 0===y?void 0:y.offset)&&void 0!==f?f:"floating"===(null===(k=ye.nav_desktop)||void 0===k?void 0:k.mode)?16:0}
              @change=${e=>s({nav_desktop:Object.assign(Object.assign({},ye.nav_desktop),{offset:parseInt(e.target.value,10)})})}
            ></ha-slider>
            <span style="min-width: 40px; text-align: center; font-weight: 600;">
              ${null!==(w=null===(x=ye.nav_desktop)||void 0===x?void 0:x.offset)&&void 0!==w?w:"floating"===(null===($=ye.nav_desktop)||void 0===$?void 0:$.mode)?16:0}px
            </span>
          </div>
        </div>

        <!-- Mobile Configuration Section -->
        ${this.renderSettingsSection((0,l.kg)("editor.navigation.section_mobile",ke,"MOBILE MODE"),(0,l.kg)("editor.navigation.section_mobile_desc",ke,"Configure navbar appearance and behavior on mobile devices."),[{title:(0,l.kg)("editor.navigation.mode",ke,"Mode"),description:(0,l.kg)("editor.navigation.mobile_mode_desc",ke,"Choose docked (default) or floating (desktop-like)."),hass:i,data:{mode:(null===(O=ye.nav_mobile)||void 0===O?void 0:O.mode)||"docked"},schema:[o.U.select("mode",[{value:"docked",label:(0,l.kg)("editor.navigation.mode_docked",ke,"Docked")},{value:"floating",label:(0,l.kg)("editor.navigation.mode_floating",ke,"Floating")}])],onChange:e=>{s({nav_mobile:Object.assign(Object.assign({},ye.nav_mobile),{mode:e.detail.value.mode})})}},{title:(0,l.kg)("editor.navigation.position",ke,"Position"),description:(0,l.kg)("editor.navigation.mobile_position_desc",ke,"Where the navbar appears on mobile."),hass:i,data:{position:(null===(j=ye.nav_mobile)||void 0===j?void 0:j.position)||"bottom"},schema:[o.U.select("position",[{value:"bottom",label:(0,l.kg)("editor.navigation.position_bottom",ke,"Bottom")},{value:"top",label:(0,l.kg)("editor.navigation.position_top",ke,"Top")},{value:"left",label:(0,l.kg)("editor.navigation.position_left",ke,"Left")},{value:"right",label:(0,l.kg)("editor.navigation.position_right",ke,"Right")}])],onChange:e=>{s({nav_mobile:Object.assign(Object.assign({},ye.nav_mobile),{position:e.detail.value.position})})}},{title:(0,l.kg)("editor.navigation.show_labels",ke,"Show Labels"),description:(0,l.kg)("editor.navigation.mobile_show_labels_desc",ke,"Control label visibility on mobile."),hass:i,data:{show_labels:"boolean"==typeof(null===(S=ye.nav_mobile)||void 0===S?void 0:S.show_labels)?ye.nav_mobile.show_labels?"true":"false":null!==(U=null===(I=ye.nav_mobile)||void 0===I?void 0:I.show_labels)&&void 0!==U?U:"false"},schema:[o.U.select("show_labels",[{value:"false",label:(0,l.kg)("editor.navigation.labels_hidden",ke,"Hidden")},{value:"true",label:(0,l.kg)("editor.navigation.labels_icons",ke,"Icons & Labels")},{value:"text_only",label:(0,l.kg)("editor.navigation.labels_text_only",ke,"Text only (no icons)")}])],onChange:e=>{const i=e.detail.value.show_labels;s({nav_mobile:Object.assign(Object.assign({},ye.nav_mobile),{show_labels:"true"===i||"false"!==i&&i})})}},{title:(0,l.kg)("editor.navigation.item_alignment",ke,"Item Alignment"),description:(0,l.kg)("editor.navigation.item_alignment_desc",ke,"How items are distributed within the dock."),hass:i,data:{alignment:(null===(P=ye.nav_mobile)||void 0===P?void 0:P.alignment)||"center"},schema:[o.U.select("alignment",[{value:"center",label:(0,l.kg)("editor.navigation.align_center",ke,"Center")},{value:"start",label:(0,l.kg)("editor.navigation.align_start",ke,"Start")},{value:"end",label:(0,l.kg)("editor.navigation.align_end",ke,"End")},{value:"space-between",label:(0,l.kg)("editor.navigation.align_space_between",ke,"Space Between")},{value:"space-around",label:(0,l.kg)("editor.navigation.align_space_around",ke,"Space Around")}])],onChange:e=>{s({nav_mobile:Object.assign(Object.assign({},ye.nav_mobile),{alignment:e.detail.value.alignment})})}}])}

        <!-- Mobile Offset Slider -->
        <div class="field-group" style="margin: 16px 0; padding: 0 16px;">
          <div>
            <div
              class="field-title"
              style="font-size: 14px; font-weight: 600; margin-bottom: 4px;"
            >
              ${(0,l.kg)("editor.navigation.mobile_offset",ke,"Mobile Offset")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color);"
            >
              ${(0,l.kg)("editor.navigation.offset_desc",ke,"Distance from screen edge (px). Pushes the dock away from the edge.")}
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px;">
            <ha-slider
              style="flex: 1;"
              .min=${0}
              .max=${100}
              .step=${1}
              .value=${null!==(T=null===(C=ye.nav_mobile)||void 0===C?void 0:C.offset)&&void 0!==T?T:"floating"===(null===(A=ye.nav_mobile)||void 0===A?void 0:A.mode)?16:0}
              @change=${e=>s({nav_mobile:Object.assign(Object.assign({},ye.nav_mobile),{offset:parseInt(e.target.value,10)})})}
            ></ha-slider>
            <span style="min-width: 40px; text-align: center; font-weight: 600;">
              ${null!==(D=null===(E=ye.nav_mobile)||void 0===E?void 0:E.offset)&&void 0!==D?D:"floating"===(null===(z=ye.nav_mobile)||void 0===z?void 0:z.mode)?16:0}px
            </span>
          </div>
        </div>

        <!-- Icon Spacing Section -->
        <div class="field-group" style="margin: 16px 0; padding: 0 16px;">
          <div>
            <div
              class="field-title"
              style="font-size: 14px; font-weight: 600; margin-bottom: 4px;"
            >
              ${(0,l.kg)("editor.navigation.icon_spacing",ke,"Icon Spacing")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color);"
            >
              ${(0,l.kg)("editor.navigation.icon_spacing_desc",ke,"Gap between icons in the dock (px).")}
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px;">
            <ha-slider
              style="flex: 1;"
              .min=${0}
              .max=${32}
              .step=${1}
              .value=${null!==(q=null===(R=ye.nav_layout)||void 0===R?void 0:R.icon_gap)&&void 0!==q?q:8}
              @change=${e=>s({nav_layout:Object.assign(Object.assign({},ye.nav_layout),{icon_gap:parseInt(e.target.value,10)})})}
            ></ha-slider>
            <span style="min-width: 40px; text-align: center; font-weight: 600;">
              ${null!==(L=null===(M=ye.nav_layout)||void 0===M?void 0:M.icon_gap)&&void 0!==L?L:8}px
            </span>
          </div>
        </div>

        <!-- Collapse & Auto-Hide Section -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
          >
            ${(0,l.kg)("editor.navigation.section_collapse",ke,"COLLAPSE & AUTO-HIDE")}
          </div>
          <div
            class="section-description"
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px;"
          >
            ${(0,l.kg)("editor.navigation.section_collapse_desc",ke,"Hide the navbar to free up dashboard space. Choose an edge handle, icon rail, or hide-on-scroll. Collapse and auto-hide are mutually exclusive.")}
          </div>

          ${o.U.renderFieldSection((0,l.kg)("editor.navigation.collapse_enable",ke,"Enable Collapse"),(0,l.kg)("editor.navigation.collapse_enable_desc",ke,"Allow the navbar to collapse and expand on demand."),i,{enabled:null!==(N=null===(F=ye.nav_collapse)||void 0===F?void 0:F.enabled)&&void 0!==N&&N},[o.U.boolean("enabled")],e=>{const i=e.detail.value.enabled;s(Object.assign({nav_collapse:Object.assign(Object.assign({},ye.nav_collapse||{}),{enabled:i})},i?{nav_autohide:Object.assign(Object.assign({},ye.nav_autohide||{}),{enabled:!1})}:{})),this.triggerPreviewUpdate()})}

          ${(null===(H=ye.nav_collapse)||void 0===H?void 0:H.enabled)?a.qy`
                ${this.renderSegmentedField((0,l.kg)("editor.navigation.collapse_mode",ke,"Collapse Mode"),(0,l.kg)("editor.navigation.collapse_mode_desc",ke,"How the navbar collapses and reappears."),(null===(B=ye.nav_collapse)||void 0===B?void 0:B.mode)||"handle",[{value:"handle",label:(0,l.kg)("editor.navigation.collapse_mode_handle",ke,"Edge Handle"),icon:"mdi:menu"},{value:"rail",label:(0,l.kg)("editor.navigation.collapse_mode_rail",ke,"Icon Rail"),icon:"mdi:view-column-outline"},{value:"scroll",label:(0,l.kg)("editor.navigation.collapse_mode_scroll",ke,"Hide on Scroll"),icon:"mdi:gesture-swipe-vertical"}],e=>{s({nav_collapse:Object.assign(Object.assign({},ye.nav_collapse||{}),{mode:e})}),this.triggerPreviewUpdate()})}

                ${o.U.renderFieldSection((0,l.kg)("editor.navigation.start_collapsed",ke,"Start Collapsed"),(0,l.kg)("editor.navigation.start_collapsed_desc",ke,"Begin collapsed when no saved preference exists."),i,{start_collapsed:!1!==(null===(W=ye.nav_collapse)||void 0===W?void 0:W.start_collapsed)},[o.U.boolean("start_collapsed")],e=>{s({nav_collapse:Object.assign(Object.assign({},ye.nav_collapse||{}),{start_collapsed:e.detail.value.start_collapsed})}),this.triggerPreviewUpdate()})}

                ${"scroll"!==((null===(J=ye.nav_collapse)||void 0===J?void 0:J.mode)||"handle")?o.U.renderFieldSection((0,l.kg)("editor.navigation.remember_state",ke,"Remember State"),(0,l.kg)("editor.navigation.remember_state_desc",ke,"Persist collapsed/expanded across reloads."),i,{remember_state:!1!==(null===(V=ye.nav_collapse)||void 0===V?void 0:V.remember_state)},[o.U.boolean("remember_state")],e=>{s({nav_collapse:Object.assign(Object.assign({},ye.nav_collapse||{}),{remember_state:e.detail.value.remember_state})}),this.triggerPreviewUpdate()}):""}

                ${"handle"===((null===(Z=ye.nav_collapse)||void 0===Z?void 0:Z.mode)||"handle")||"rail"===((null===(G=ye.nav_collapse)||void 0===G?void 0:G.mode)||"handle")?a.qy`
                      ${this.renderIconField((0,l.kg)("editor.navigation.handle_icon",ke,"Handle Icon"),(0,l.kg)("editor.navigation.handle_icon_desc",ke,"Icon shown on the edge tab when collapsed."),i,(null===(K=ye.nav_collapse)||void 0===K?void 0:K.handle_icon)||"mdi:menu",e=>{s({nav_collapse:Object.assign(Object.assign({},ye.nav_collapse||{}),{handle_icon:e})}),this.triggerPreviewUpdate()})}
                      ${this.renderSliderField((0,l.kg)("editor.navigation.handle_size",ke,"Handle Size"),(0,l.kg)("editor.navigation.handle_size_desc",ke,"Size of the edge tab in pixels."),null!==(Q=null===(Y=ye.nav_collapse)||void 0===Y?void 0:Y.handle_size)&&void 0!==Q?Q:40,40,24,64,1,e=>{s({nav_collapse:Object.assign(Object.assign({},ye.nav_collapse||{}),{handle_size:e})}),this.triggerPreviewUpdate()},"px")}
                      ${this.renderSliderField((0,l.kg)("editor.navigation.handle_position",ke,"Handle Position"),(0,l.kg)("editor.navigation.handle_position_desc",ke,"Position of the handle along the edge (percent)."),null!==(ee=null===(X=ye.nav_collapse)||void 0===X?void 0:X.handle_position)&&void 0!==ee?ee:50,50,10,90,1,e=>{s({nav_collapse:Object.assign(Object.assign({},ye.nav_collapse||{}),{handle_position:e})}),this.triggerPreviewUpdate()},"%")}
                      ${o.U.renderFieldSection((0,l.kg)("editor.navigation.backdrop",ke,"Backdrop"),(0,l.kg)("editor.navigation.backdrop_desc",ke,"Dim the dashboard behind an expanded lateral navbar. Defaults on for left/right."),i,{backdrop:void 0===(null===(ie=ye.nav_collapse)||void 0===ie?void 0:ie.backdrop)||ye.nav_collapse.backdrop},[o.U.boolean("backdrop")],e=>{s({nav_collapse:Object.assign(Object.assign({},ye.nav_collapse||{}),{backdrop:e.detail.value.backdrop})}),this.triggerPreviewUpdate()})}
                      ${o.U.renderFieldSection((0,l.kg)("editor.navigation.close_on_navigate",ke,"Close on Navigate"),(0,l.kg)("editor.navigation.close_on_navigate_desc",ke,"Collapse the navbar after tapping a route."),i,{close_on_navigate:!1!==(null===(te=ye.nav_collapse)||void 0===te?void 0:te.close_on_navigate)},[o.U.boolean("close_on_navigate")],e=>{s({nav_collapse:Object.assign(Object.assign({},ye.nav_collapse||{}),{close_on_navigate:e.detail.value.close_on_navigate})}),this.triggerPreviewUpdate()})}
                    `:""}

                ${"rail"===((null===(ae=ye.nav_collapse)||void 0===ae?void 0:ae.mode)||"handle")?this.renderSliderField((0,l.kg)("editor.navigation.rail_size",ke,"Rail Size"),(0,l.kg)("editor.navigation.rail_size_desc",ke,"Width/height of the collapsed icon rail in pixels."),null!==(oe=null===(ne=ye.nav_collapse)||void 0===ne?void 0:ne.rail_size)&&void 0!==oe?oe:56,56,40,96,1,e=>{s({nav_collapse:Object.assign(Object.assign({},ye.nav_collapse||{}),{rail_size:e})}),this.triggerPreviewUpdate()},"px"):""}

                ${"scroll"===((null===(le=ye.nav_collapse)||void 0===le?void 0:le.mode)||"handle")?this.renderSliderField((0,l.kg)("editor.navigation.scroll_threshold",ke,"Scroll Threshold"),(0,l.kg)("editor.navigation.scroll_threshold_desc",ke,"Pixels scrolled before the navbar hides or reappears."),null!==(re=null===(se=ye.nav_collapse)||void 0===se?void 0:se.scroll_threshold)&&void 0!==re?re:24,24,8,120,1,e=>{s({nav_collapse:Object.assign(Object.assign({},ye.nav_collapse||{}),{scroll_threshold:e})}),this.triggerPreviewUpdate()},"px"):""}
              `:""}

          ${(null===(de=ye.nav_collapse)||void 0===de?void 0:de.enabled)?a.qy`
                <div
                  style="font-size: 13px; color: var(--secondary-text-color); padding: 8px 0 0;"
                >
                  ${(0,l.kg)("editor.navigation.autohide_disabled_by_collapse",ke,"Auto-hide is unavailable while collapse is enabled. Disable collapse to use auto-hide.")}
                </div>
              `:a.qy`
                ${o.U.renderFieldSection((0,l.kg)("editor.navigation.autohide_enable",ke,"Enable Auto-Hide"),(0,l.kg)("editor.navigation.autohide_enable_desc",ke,"macOS-style: hide after idle, reveal on edge hover. Desktop mouse only."),i,{enabled:null!==(ve=null===(ce=ye.nav_autohide)||void 0===ce?void 0:ce.enabled)&&void 0!==ve&&ve},[o.U.boolean("enabled")],e=>{s({nav_autohide:Object.assign(Object.assign({},ye.nav_autohide||{}),{enabled:e.detail.value.enabled})}),this.triggerPreviewUpdate()})}
                ${(null===(pe=ye.nav_autohide)||void 0===pe?void 0:pe.enabled)?this.renderSliderField((0,l.kg)("editor.navigation.autohide_delay",ke,"Hide Delay"),(0,l.kg)("editor.navigation.autohide_delay_desc",ke,"Seconds of inactivity before the navbar hides."),null!==(ue=null===(ge=ye.nav_autohide)||void 0===ge?void 0:ge.delay)&&void 0!==ue?ue:3,3,1,15,.5,e=>{s({nav_autohide:Object.assign(Object.assign({},ye.nav_autohide||{}),{delay:e})}),this.triggerPreviewUpdate()},"s"):""}
              `}
        </div>

        <!-- Haptics Section -->
        ${this.renderSettingsSection((0,l.kg)("editor.navigation.section_haptics",ke,"HAPTIC FEEDBACK"),(0,l.kg)("editor.navigation.section_haptics_desc",ke,"Configure haptic feedback for interactions."),[{title:(0,l.kg)("editor.navigation.haptics_enable",ke,"Enable Haptics"),description:(0,l.kg)("editor.navigation.haptics_enable_desc",ke,"Master toggle for all navbar haptic feedback."),hass:i,data:{enabled:!1!==ye.nav_haptic},schema:[o.U.boolean("enabled")],onChange:e=>{s({nav_haptic:!!e.detail.value.enabled})}},...!1===ye.nav_haptic?[]:[{title:(0,l.kg)("editor.navigation.haptics_url",ke,"URL Navigation"),description:(0,l.kg)("editor.navigation.haptics_url_desc",ke,"Trigger haptic when navigating to a URL."),hass:i,data:{url:null!==(he=this.getHapticConfig(ye).url)&&void 0!==he&&he},schema:[o.U.boolean("url")],onChange:e=>{s({nav_haptic:Object.assign(Object.assign({},this.getHapticConfig(ye)),{url:e.detail.value.url})})}},{title:(0,l.kg)("editor.navigation.haptics_tap",ke,"Tap Action"),description:(0,l.kg)("editor.navigation.haptics_tap_desc",ke,"Trigger haptic on tap."),hass:i,data:{tap_action:null===(_e=this.getHapticConfig(ye).tap_action)||void 0===_e||_e},schema:[o.U.boolean("tap_action")],onChange:e=>{s({nav_haptic:Object.assign(Object.assign({},this.getHapticConfig(ye)),{tap_action:e.detail.value.tap_action})})}},{title:(0,l.kg)("editor.navigation.haptics_hold",ke,"Hold Action"),description:(0,l.kg)("editor.navigation.haptics_hold_desc",ke,"Trigger haptic on hold."),hass:i,data:{hold_action:null===(be=this.getHapticConfig(ye).hold_action)||void 0===be||be},schema:[o.U.boolean("hold_action")],onChange:e=>{s({nav_haptic:Object.assign(Object.assign({},this.getHapticConfig(ye)),{hold_action:e.detail.value.hold_action})})}},{title:(0,l.kg)("editor.navigation.haptics_double_tap",ke,"Double Tap"),description:(0,l.kg)("editor.navigation.haptics_double_tap_desc",ke,"Trigger haptic on double tap."),hass:i,data:{double_tap_action:null===(me=this.getHapticConfig(ye).double_tap_action)||void 0===me||me},schema:[o.U.boolean("double_tap_action")],onChange:e=>{s({nav_haptic:Object.assign(Object.assign({},this.getHapticConfig(ye)),{double_tap_action:e.detail.value.double_tap_action})})}}]])}
      </div>
    `}getStyles(){return`${n.m.getSliderStyles()}`}renderPreview(e,i,t,n){var o,l,r;const d=this.resolveNavigationConfig(e,t),c=(()=>{if("live"===n||"ha-preview"===n)return!1;try{return"1"===new URLSearchParams(window.location.search).get("edit")}catch(e){return!1}})(),v=(()=>{try{return"1"===new URLSearchParams(window.location.search).get("edit")}catch(e){return!1}})();if("live"===n||"ha-preview"===n||c){const t=(null===(o=d.nav_routes)||void 0===o?void 0:o.length)||0,c=(null===(l=d.nav_media_player)||void 0===l?void 0:l.enabled)&&(null===(r=d.nav_media_player)||void 0===r?void 0:r.entity),p=!1,g=v&&"live"===n,u=g&&s.ucNavigationService.isEditModePreviewExpanded();return this.wrapWithAnimation(a.qy`
        <div
          style="
            padding: 24px;
            text-align: center;
            background: rgba(var(--rgb-primary-color), 0.1);
            border: 2px dashed var(--primary-color);
            border-radius: var(--uc-r-8, 8px);
          "
        >
          <ha-icon
            icon="mdi:compass-outline"
            style="color: var(--primary-color); --mdc-icon-size: 48px; margin-bottom: 8px; display: block;"
          ></ha-icon>
          <div style="font-weight: 600; color: var(--primary-color); margin-bottom: 4px;">
            Navigation Module
          </div>
          <div style="font-size: 12px; color: var(--secondary-text-color); opacity: 0.8;">
            ${t} path${1!==t?"s":""}
            ${c?" • Media Player":""} ${p?" • Settings":""}
          </div>
          <div
            style="font-size: 11px; color: var(--secondary-text-color); margin-top: 8px; opacity: 0.7;"
          >
            ${"all_views"===d.nav_scope?"Global (all views)":"Current view only"}
          </div>
          <div
            style="font-size: 10px; color: var(--secondary-text-color); margin-top: 12px; opacity: 0.6; font-style: italic;"
          >
            ${g?u?"Dock preview is visible on the dashboard behind this editor.":"The dock is hidden in edit mode so the Save button stays accessible.":"The navbar overlays the dashboard. Exit edit mode to see it in place."}
          </div>
          ${g?a.qy`
                <style>
                  @keyframes uc-dock-btn-pulse {
                    0% { box-shadow: 0 0 0 0 rgba(var(--rgb-primary-color), 0.5); }
                    70% { box-shadow: 0 0 0 8px rgba(var(--rgb-primary-color), 0); }
                    100% { box-shadow: 0 0 0 0 rgba(var(--rgb-primary-color), 0); }
                  }
                </style>
                <button
                  type="button"
                  @click=${()=>{s.ucNavigationService.toggleEditModePreview(!u)}}
                  style="
                    margin-top: 14px;
                    padding: 6px 16px;
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--primary-color);
                    background: rgba(var(--rgb-primary-color), 0.15);
                    border: 1px solid var(--primary-color);
                    border-radius: var(--uc-r-18, 18px);
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    transition: background 0.2s ease;
                    animation: uc-dock-btn-pulse 2s ease-in-out 3;
                  "
                >
                  <ha-icon
                    icon="${u?"mdi:eye-off":"mdi:eye"}"
                    style="--mdc-icon-size: 16px;"
                  ></ha-icon>
                  ${u?"Hide dock preview":"Preview dock"}
                </button>
              `:""}
        </div>
      `,e,i)}return a.qy``}validate(e){var i;const t=e,a=[...super.validate(e).errors];return t.nav_routes&&0!==t.nav_routes.length||a.push("At least one navigation route is required."),null===(i=t.nav_routes)||void 0===i||i.forEach(e=>{const i=!!e.tap_action||!!e.hold_action||!!e.double_tap_action;e.url||i||a.push(`Route "${e.label||e.id}" must have a URL or an action.`)}),{valid:0===a.length,errors:a}}resolveNavigationConfig(e,i){var t,a,n;const o=(0,r.NS)(i,"navigation","nav_style",e.nav_style,"uc_modern");if(!i)return o===e.nav_style?e:Object.assign(Object.assign({},e),{nav_style:o});const l=null===(t=e.nav_template)||void 0===t?void 0:t.trim(),s=l&&i.nav_templates?i.nav_templates[l]:void 0,d=e.nav_routes&&e.nav_routes.length>0?e.nav_routes:(null==s?void 0:s.nav_routes)||[];return Object.assign(Object.assign({},e),{nav_style:o,nav_routes:d,nav_desktop:Object.assign(Object.assign({},(null==s?void 0:s.nav_desktop)||{}),e.nav_desktop||{}),nav_mobile:Object.assign(Object.assign({},(null==s?void 0:s.nav_mobile)||{}),e.nav_mobile||{}),nav_layout:Object.assign(Object.assign({},(null==s?void 0:s.nav_layout)||{}),e.nav_layout||{}),nav_haptic:null!==(a=e.nav_haptic)&&void 0!==a?a:null==s?void 0:s.nav_haptic,nav_media_player:Object.assign(Object.assign({},(null==s?void 0:s.nav_media_player)||{}),e.nav_media_player||{}),nav_styles:null!==(n=e.nav_styles)&&void 0!==n?n:null==s?void 0:s.nav_styles,nav_autohide:Object.assign(Object.assign({},(null==s?void 0:s.nav_autohide)||{}),e.nav_autohide||{}),nav_collapse:Object.assign(Object.assign({},(null==s?void 0:s.nav_collapse)||{}),e.nav_collapse||{})})}createDefaultRoute(){return{id:this.generateId("nav-route"),icon:"mdi:home-outline",label:"New Path",url:""}}createDefaultStack(){return{id:this.generateId("nav-stack"),icon:"mdi:dots-horizontal",label:"More",open_mode:"click",orientation:"auto",children:[]}}handleUnifiedReorder(e,i,t,a){var n;const o=this.buildUnifiedNavItems(t);if(e===i||e<0||i<0)return;const l=o[e],s=o[i];if(!l)return;const r=this._draggedItem;if(!r)return;const d=[...t.nav_routes||[]],c=(t.nav_stacks||[]).map(e=>Object.assign(Object.assign({},e),{children:[...e.children||[]]}));let v=(null===(n=t.nav_media_player)||void 0===n?void 0:n.icon_position)||"end";if("stack_child"===r.type&&r.parentStackId&&s&&"stack_child"!==s.type){const e=c.find(e=>e.id===r.parentStackId);if(!e)return;const i=e.children.findIndex(e=>e.id===r.id);if(i<0)return;const[t]=e.children.splice(i,1);let n=d.length;if("route"===s.type){const e=d.findIndex(e=>e.id===s.id);e>=0&&(n=e)}return d.splice(n,0,t),void a({nav_routes:d,nav_stacks:c})}if("stack_child"===r.type&&r.parentStackId&&"stack_child"===(null==s?void 0:s.type)&&s.parentStackId===r.parentStackId){const e=c.find(e=>e.id===r.parentStackId);if(!e)return;const i=e.children.findIndex(e=>e.id===r.id),t=e.children.findIndex(e=>e.id===s.id);if(i<0||t<0)return;const[n]=e.children.splice(i,1);return e.children.splice(t,0,n),void a({nav_stacks:c})}if("stack_child"===r.type&&r.parentStackId&&"stack_child"===(null==s?void 0:s.type)&&s.parentStackId!==r.parentStackId){const e=c.find(e=>e.id===r.parentStackId),i=c.find(e=>e.id===s.parentStackId);if(!e||!i)return;const t=e.children.findIndex(e=>e.id===r.id);if(t<0)return;const[n]=e.children.splice(t,1),o=i.children.findIndex(e=>e.id===s.id);return i.children.splice(o>=0?o:i.children.length,0,n),void a({nav_stacks:c})}const p=o.filter(e=>"stack_child"!==e.type),g=p.findIndex(e=>e.id===l.id),u=p.findIndex(e=>e.id===(null==s?void 0:s.id));if(g<0||u<0||g===u)return;const h=[...p],[_]=h.splice(g,1);h.splice(u,0,_);const b=[],m=[];let y=0;h.forEach(e=>{"route"===e.type&&e.data?(b.push(e.data),y++):"stack"===e.type&&e.data?(m.push(e.data),y++):"media_player"===e.type&&(v=y)});const f=b.length+m.length;"number"==typeof v&&(0===v?v="start":v>=f&&(v="end")),a({nav_routes:b,nav_stacks:m,nav_media_player:Object.assign(Object.assign({},t.nav_media_player),{icon_position:v})})}handleDropOnStack(e,i,t){const a=this._draggedItem;if(!a)return;if("stack"===a.type||"media_player"===a.type)return;if("stack_child"===a.type&&a.parentStackId===e)return;const n=[...i.nav_routes||[]],o=(i.nav_stacks||[]).map(e=>Object.assign(Object.assign({},e),{children:[...e.children||[]]})),l=o.find(i=>i.id===e);if(!l)return;let s=null;if("route"===a.type){const e=n.findIndex(e=>e.id===a.id);if(e<0)return;[s]=n.splice(e,1)}else if("stack_child"===a.type&&a.parentStackId){const e=o.find(e=>e.id===a.parentStackId);if(!e)return;const i=e.children.findIndex(e=>e.id===a.id);if(i<0)return;[s]=e.children.splice(i,1)}s&&(l.children.push(s),t({nav_routes:n,nav_stacks:o})),this._draggedItem=null}renderSpecialItemRow(e,i,t,n,o,l,s,r,d,c){const v="__media_player__",p=this._expandedSpecialItems.has(v);return a.qy`
      <div
        class="entity-row special-item ${p?"expanded":""}" data-uc-role="pane"
        draggable="true"
        @dragstart=${i=>{this._draggedItem={type:e,id:v,visualIndex:o},i.dataTransfer&&(i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",JSON.stringify({type:e,visualIndex:o}))),i.currentTarget.classList.add("dragging")}}
        @dragend=${e=>{this._draggedItem=null,e.currentTarget.classList.remove("dragging"),document.querySelectorAll(".entity-row.drag-over").forEach(e=>e.classList.remove("drag-over"))}}
        @dragover=${e=>{e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.currentTarget.classList.add("drag-over")}}
        @dragleave=${e=>{e.currentTarget.classList.remove("drag-over")}}
        @drop=${e=>{e.preventDefault(),e.currentTarget.classList.remove("drag-over"),this._draggedItem&&this._draggedItem.visualIndex!==o&&(this.handleUnifiedReorder(this._draggedItem.visualIndex,o,s,d),this._draggedItem=null)}}
      >
        <div class="entity-header" @click=${()=>{p?this._expandedSpecialItems.delete(v):this._expandedSpecialItems.add(v),d({})}}>
          <div class="drag-handle" @click=${e=>e.stopPropagation()}>
            <ha-icon
              icon="mdi:drag"
              style="--mdc-icon-size: 20px; color: var(--secondary-text-color);"
            ></ha-icon>
          </div>
          <div class="entity-info">
            <ha-icon
              icon="${i}"
              class="entity-icon"
              style="color: var(--primary-color);"
            ></ha-icon>
            <div class="entity-name">${t}</div>
            <div class="entity-detail">${n}</div>
          </div>
          <div class="entity-actions" @click=${e=>e.stopPropagation()}>
            <span class="special-badge">Media</span>
            <ha-icon
              icon="${p?"mdi:chevron-up":"mdi:chevron-down"}"
              class="expand-icon"
            ></ha-icon>
          </div>
        </div>

        ${p&&"media_player"===e?a.qy`
              <div class="entity-expanded">
                ${this.renderMediaPlayerExpandedSettings(s,r,d,c)}
              </div>
            `:""}
      </div>
    `}getInactiveTapActionCategory(e){const i=null==e?void 0:e.inactive_tap_action;return i?"nothing"===i.action?"nothing":"navigate"!==i.action||i.navigation_path?"navigate"===i.action?"navigate":"url"===i.action?"url":"open-popup"===i.action?"open-popup":"toggle"===i.action?"toggle":"more-info"===i.action?"more-info":"assist"===i.action?"assist":("perform-action"===i.action||i.action,"perform-action"):"navigate":"play"}renderMediaPlayerExpandedSettings(e,i,t,n){var l,s,r,d,c,v,p;const g=e.nav_media_player||{},u=g.display_mode||"icon_click",h=g.entity&&""!==g.entity,_=this.getInactiveTapActionCategory(g),b=e=>{t({nav_media_player:Object.assign(Object.assign({},g),{inactive_tap_action:Object.assign(Object.assign({},g.inactive_tap_action||{}),e)})})},m=(()=>{const e=g.inactive_tap_action||{};return Object.assign(Object.assign(Object.assign({action:e.perform_action||e.service||""},e.data?{data:e.data}:{}),e.service_data?{data:e.service_data}:{}),e.target?{target:e.target}:{})})();return a.qy`
      ${h?"":a.qy`
            <div
              class="info-box"
              style="background: var(--warning-color, orange); color: var(--text-primary-color); padding: 12px; border-radius: var(--uc-r-8, 8px); margin-bottom: 16px;"
            >
              ⚠️ <strong>Entity Required:</strong> Select a media player entity below for the icon
              to appear in the navbar.
            </div>
          `}
      ${o.U.renderFieldSection("Entity","Media player entity to display.",i,{entity:g.entity||""},[o.U.entity("entity",["media_player"])],e=>{t({nav_media_player:Object.assign(Object.assign({},g),{entity:e.detail.value.entity})})})}
      ${o.U.renderFieldSection("Interaction Mode","How the media player widget opens.",i,{display_mode:u},[o.U.select("display_mode",[{value:"icon_hover",label:"Expand on hover"},{value:"icon_click",label:"Expand on click"}])],e=>{t({nav_media_player:Object.assign(Object.assign({},g),{display_mode:e.detail.value.display_mode})})})}
      ${o.U.renderFieldSection("Widget Position","Where the expanded widget appears relative to the icon.",i,{widget_position:g.widget_position||"above"},[o.U.select("widget_position",[{value:"above",label:"Above icon"},{value:"below",label:"Below icon"}])],e=>{t({nav_media_player:Object.assign(Object.assign({},g),{widget_position:e.detail.value.widget_position})})})}
      ${o.U.renderFieldSection("Desktop Position","Where the media player widget appears on desktop.",i,{desktop_position:g.desktop_position||"bottom-center"},[o.U.select("desktop_position",[{value:"bottom-center",label:"Bottom Center"},{value:"bottom-left",label:"Bottom Left"},{value:"bottom-right",label:"Bottom Right"},{value:"top-center",label:"Top Center"},{value:"top-left",label:"Top Left"},{value:"top-right",label:"Top Right"}])],e=>{t({nav_media_player:Object.assign(Object.assign({},g),{desktop_position:e.detail.value.desktop_position})})})}
      ${o.U.renderFieldSection("Album Cover Background","Use album art as blurred background for the widget.",i,{album_cover_background:null!==(l=g.album_cover_background)&&void 0!==l&&l},[o.U.boolean("album_cover_background")],e=>{t({nav_media_player:Object.assign(Object.assign({},g),{album_cover_background:e.detail.value.album_cover_background})})})}

      <!-- Inactive Tap Action (idle/off/unavailable only) -->
      <div class="field-group-title" style="margin-top: 16px; margin-bottom: 8px;">Inactive Tap Action</div>
      ${o.U.renderFieldSection("","When the media player is idle, off, or unavailable, tapping the icon can do something other than start playback.",i,{inactive_action_category:_},[o.U.select("inactive_action_category",[{value:"play",label:"Play (default)"},{value:"nothing",label:"Do nothing"},{value:"open-popup",label:"Open popup"},{value:"navigate",label:"Navigate"},{value:"url",label:"Open URL"},{value:"more-info",label:"More info"},{value:"toggle",label:"Toggle"},{value:"perform-action",label:"Perform action"},{value:"assist",label:"Assist"}])],e=>{var i,a;const n=null===(a=null===(i=e.detail)||void 0===i?void 0:i.value)||void 0===a?void 0:a.inactive_action_category;n&&n!==_&&(e=>{var i,a,n,o,l,s,r,d;switch(e){case"play":const{inactive_tap_action:e}=g,c=function(e,i){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&i.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)i.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]])}return t}(g,["inactive_tap_action"]);t({nav_media_player:Object.assign({},c)});break;case"nothing":t({nav_media_player:Object.assign(Object.assign({},g),{inactive_tap_action:{action:"nothing"}})});break;case"navigate":t({nav_media_player:Object.assign(Object.assign({},g),{inactive_tap_action:{action:"navigate",navigation_path:(null===(i=g.inactive_tap_action)||void 0===i?void 0:i.navigation_path)||""}})});break;case"url":t({nav_media_player:Object.assign(Object.assign({},g),{inactive_tap_action:{action:"url",url_path:(null===(a=g.inactive_tap_action)||void 0===a?void 0:a.url_path)||""}})});break;case"open-popup":t({nav_media_player:Object.assign(Object.assign({},g),{inactive_tap_action:{action:"open-popup",popup_id:(null===(n=g.inactive_tap_action)||void 0===n?void 0:n.popup_id)||""}})});break;case"toggle":t({nav_media_player:Object.assign(Object.assign({},g),{inactive_tap_action:{action:"toggle",entity:(null===(o=g.inactive_tap_action)||void 0===o?void 0:o.entity)||g.entity||""}})});break;case"more-info":t({nav_media_player:Object.assign(Object.assign({},g),{inactive_tap_action:{action:"more-info",entity:(null===(l=g.inactive_tap_action)||void 0===l?void 0:l.entity)||g.entity||""}})});break;case"assist":t({nav_media_player:Object.assign(Object.assign({},g),{inactive_tap_action:{action:"assist",pipeline_id:null===(s=g.inactive_tap_action)||void 0===s?void 0:s.pipeline_id,start_listening:null!==(d=null===(r=g.inactive_tap_action)||void 0===r?void 0:r.start_listening)&&void 0!==d&&d}})});break;case"perform-action":t({nav_media_player:Object.assign(Object.assign({},g),{inactive_tap_action:Object.assign(Object.assign({},g.inactive_tap_action||{}),{action:"perform-action"})})})}})(n)})}
      ${"navigate"===_?a.qy`
            <div class="field-container" style="margin-top: 8px;">
              <div class="field-title">Path</div>
              <ultra-navigation-picker
                .hass=${i}
                .value=${(null===(s=g.inactive_tap_action)||void 0===s?void 0:s.navigation_path)||""}
                label=""
                @value-changed=${e=>b({navigation_path:e.detail.value})}
              ></ultra-navigation-picker>
            </div>
          `:""}
      ${"url"===_?a.qy`
            <div style="margin-top: 8px;">
              ${o.U.renderFieldSection("URL","External website to open (e.g., https://google.com).",i,{url_path:(null===(r=g.inactive_tap_action)||void 0===r?void 0:r.url_path)||""},[o.U.text("url_path")],e=>{var i,t,a;return b({url_path:null!==(a=null===(t=null===(i=e.detail)||void 0===i?void 0:i.value)||void 0===t?void 0:t.url_path)&&void 0!==a?a:""})})}
            </div>
          `:""}
      ${"open-popup"===_&&n?a.qy`
            <div class="field-container" style="margin-top: 8px;">
              <div class="field-title">Popup</div>
              ${(()=>{var e;const i=this.getPopupModules(n);return 0===i.length?a.qy`
                    <div class="info-box" style="padding: 12px; border-radius: var(--uc-r-8, 8px);">
                      No popup modules found. Add a Popup module to this card first.
                    </div>
                  `:a.qy`
                  <ha-select
                    style="width: 100%;"
                    .value=${(null===(e=g.inactive_tap_action)||void 0===e?void 0:e.popup_id)||""}
                    @selected=${e=>{e.stopPropagation(),b({action:"open-popup",popup_id:e.target.value})}}
                    @closed=${e=>e.stopPropagation()}
                  >
                    ${i.map(e=>a.qy`<mwc-list-item value="${e.value}">${e.label}</mwc-list-item>`)}
                  </ha-select>
                `})()}
            </div>
          `:""}
      ${"toggle"===_||"more-info"===_?a.qy`
            <div class="field-container" style="margin-top: 8px;">
              <div class="field-title">Entity</div>
              ${this.renderEntityPickerWithVariables(i,n,"entity",(null===(d=g.inactive_tap_action)||void 0===d?void 0:d.entity)||g.entity||"",e=>b({entity:e}),void 0,"Entity")}
            </div>
          `:""}
      ${"assist"===_?a.qy`
            <div class="field-container" style="margin-top: 8px;">
              <ha-form
                .hass=${i}
                .data=${{pipeline_id:null===(c=g.inactive_tap_action)||void 0===c?void 0:c.pipeline_id,start_listening:null!==(p=null===(v=g.inactive_tap_action)||void 0===v?void 0:v.start_listening)&&void 0!==p&&p}}
                .schema=${[{name:"pipeline_id",selector:{assist_pipeline:{include_last_used:!0}}},{name:"start_listening",selector:{boolean:{}}}]}
                .computeLabel=${()=>""}
                @value-changed=${e=>{e.stopPropagation();const i=e.detail.value||{};b({action:"assist",pipeline_id:i.pipeline_id,start_listening:i.start_listening})}}
              ></ha-form>
            </div>
          `:""}
      ${"perform-action"===_?a.qy`
            <div class="nav-action-perform-action" style="margin-top: 8px;">
              <div class="field-title">Action</div>
              <ha-service-control
                .hass=${i}
                .value=${m}
                @value-changed=${e=>{var i;e.stopPropagation();const a=(null===(i=e.detail)||void 0===i?void 0:i.value)||{},n=Object.assign(Object.assign({},g.inactive_tap_action||{}),{action:"perform-action",perform_action:a.action||"",target:a.target,data:a.data});a.data||delete n.data,t({nav_media_player:Object.assign(Object.assign({},g),{inactive_tap_action:n})})}}
              ></ha-service-control>
            </div>
          `:""}
    `}renderRouteRow(e,i,t,n,l,s,r,d,c,v){var p;const g=this._expandedRoutes.has(e.id),u=!!c,h=e.label||(u?"Stack Item":`Path ${i+1}`),_=e.icon||"mdi:compass-outline",b=null!=r?r:i,m=i=>{if(u){const t=(l.nav_stacks||[]).map(t=>t.id!==c?t:Object.assign(Object.assign({},t),{children:(t.children||[]).map(t=>t.id===e.id?Object.assign(Object.assign({},t),i):t)}));s({nav_stacks:t})}else{const a=t.map(t=>t.id===e.id?Object.assign(Object.assign({},t),i):t);s({nav_routes:a})}},y=u?(null===(p=(l.nav_stacks||[]).find(e=>e.id===c))||void 0===p?void 0:p.label)||"Stack":"";return a.qy`
      <div
        class="entity-row ${g?"expanded":""} ${u?"stack-child-row":""}"
        draggable="true"
        @dragstart=${i=>{this._draggedItem={type:u?"stack_child":"route",id:e.id,visualIndex:b,parentStackId:c},i.dataTransfer&&(i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",JSON.stringify({type:u?"stack_child":"route",id:e.id,visualIndex:b,parentStackId:c}))),i.currentTarget.classList.add("dragging")}}
        @dragend=${e=>{this._draggedItem=null,e.currentTarget.classList.remove("dragging"),document.querySelectorAll(".entity-row.drag-over").forEach(e=>e.classList.remove("drag-over"))}}
        @dragover=${e=>{e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.currentTarget.classList.add("drag-over")}}
        @dragleave=${e=>{e.currentTarget.classList.remove("drag-over")}}
        @drop=${e=>{e.preventDefault(),e.currentTarget.classList.remove("drag-over"),this._draggedItem&&this._draggedItem.visualIndex!==b&&(this.handleUnifiedReorder(this._draggedItem.visualIndex,b,l,s),this._draggedItem=null)}}
        style="${u?"margin-left: 24px; border-left: 2px solid var(--accent-color); border-radius: 0 var(--uc-r-12, 12px) var(--uc-r-12, 12px) 0;":""}"
      >
        <div class="entity-header" @click=${()=>{g?this._expandedRoutes.delete(e.id):this._expandedRoutes.add(e.id),s({})}}>
          <div class="drag-handle" @click=${e=>e.stopPropagation()}>
            <ha-icon
              icon="mdi:drag"
              style="--mdc-icon-size: 20px; color: var(--secondary-text-color);"
            ></ha-icon>
          </div>
          <div class="entity-info">
            <ha-icon icon="${_}" class="entity-icon"></ha-icon>
            <div class="entity-name">
              ${u?a.qy`<span
                      style="font-size: 10px; color: var(--accent-color); font-weight: 600; text-transform: uppercase;"
                      >${y} ›</span
                    >
                    ${h}`:h}
            </div>
            ${e.url?a.qy` <div class="entity-detail">${e.url}</div> `:""}
          </div>
          <div class="entity-actions" @click=${e=>e.stopPropagation()}>
            <button class="entity-action-btn duplicate" @click=${()=>{const a=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{id:this.generateId("nav-route"),label:`${e.label||(u?"Stack Item":`Path ${i+1}`)} (Copy)`});if(u){const i=(l.nav_stacks||[]).map(i=>{if(i.id!==c)return i;const t=[...i.children||[]],n=t.findIndex(i=>i.id===e.id);return t.splice(n+1,0,a),Object.assign(Object.assign({},i),{children:t})});s({nav_stacks:i})}else{const i=[...t],n=i.findIndex(i=>i.id===e.id);i.splice(n+1,0,a),s({nav_routes:i})}}} title="Duplicate">
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </button>
            <button class="entity-action-btn delete" @click=${()=>{if(this._expandedRoutes.delete(e.id),u){const i=(l.nav_stacks||[]).map(i=>i.id!==c?i:Object.assign(Object.assign({},i),{children:(i.children||[]).filter(i=>i.id!==e.id)}));s({nav_stacks:i})}else{const i=t.filter(i=>i.id!==e.id);s({nav_routes:i})}}} title="Delete">
              <ha-icon icon="mdi:delete"></ha-icon>
            </button>
            <ha-icon
              icon="${g?"mdi:chevron-up":"mdi:chevron-down"}"
              class="expand-icon"
            ></ha-icon>
          </div>
        </div>

        ${g?a.qy`
              <div class="entity-expanded">
                ${o.U.renderFieldSection("Label","Text shown below the icon in the navbar.",n,{label:e.label||""},[o.U.text("label")],e=>m({label:e.detail.value.label}))}

                ${this.renderActionEditor(e,n,v||{},m)}
                ${this.renderActionEditor(e,n,v||{},m,"hold_action")}
                ${this.renderActionEditor(e,n,v||{},m,"double_tap_action")}

                ${o.U.renderFieldSection("Icon","Material Design icon for this path.",n,{icon:e.icon||""},[o.U.icon("icon")],e=>m({icon:e.detail.value.icon}))}

                <div class="color-field">
                  <div class="field-title">Icon Color</div>
                  <div class="field-description">Custom color for the icon.</div>
                  <ultra-color-picker
                    .hass=${n}
                    .value=${e.icon_color||""}
                    @value-changed=${e=>m({icon_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>

                ${o.U.renderFieldSection("Selected Icon (Optional)","Different icon shown when this path is active.",n,{icon_selected:e.icon_selected||""},[o.U.icon("icon_selected")],e=>m({icon_selected:e.detail.value.icon_selected}))}

                <div class="color-field">
                  <div class="field-title">Selected Color</div>
                  <div class="field-description">Color when path is active.</div>
                  <ultra-color-picker
                    .hass=${n}
                    .value=${e.selected_color||""}
                    @value-changed=${e=>m({selected_color:e.detail.value})}
                  ></ultra-color-picker>
                </div>

                ${o.U.renderFieldSection("Image URL (Optional)","Use custom image instead of icon (e.g., user avatar).",n,{image:e.image||""},[o.U.text("image")],e=>m({image:e.detail.value.image}))}
                ${o.U.renderFieldSection("Selected Image URL (Optional)","Different image shown when path is active.",n,{image_selected:e.image_selected||""},[o.U.text("image_selected")],e=>m({image_selected:e.detail.value.image_selected}))}

                <!-- Notification Settings -->
                <div
                  style="margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--divider-color);"
                >
                  <div class="field-group-title">Notifications</div>
                  ${this.renderNotificationEditor(e,n,m,v)}
                </div>
              </div>
            `:""}
      </div>
    `}renderStackRow(e,i,t,n,l,s,r,d){const c=this._expandedRoutes.has(e.id),v=e.label||`Stack ${i+1}`,p=e.icon||"mdi:dots-horizontal",g=null!=r?r:i,u=e.children||[],h=i=>{const a=t.map(t=>t.id===e.id?Object.assign(Object.assign({},t),i):t);s({nav_stacks:a})};return a.qy`
      <div
        class="entity-row stack-row ${c?"expanded":""}"
        draggable="true"
        @dragstart=${i=>{this._draggedItem={type:"stack",id:e.id,visualIndex:g},i.dataTransfer&&(i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/plain",JSON.stringify({type:"stack",id:e.id,visualIndex:g}))),i.currentTarget.classList.add("dragging")}}
        @dragend=${e=>{this._draggedItem=null,e.currentTarget.classList.remove("dragging"),document.querySelectorAll(".entity-row.drag-over, .stack-drop-zone.drag-over").forEach(e=>e.classList.remove("drag-over"))}}
        @dragover=${e=>{e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.currentTarget.classList.add("drag-over")}}
        @dragleave=${e=>{e.currentTarget.classList.remove("drag-over")}}
        @drop=${e=>{e.preventDefault(),e.currentTarget.classList.remove("drag-over"),this._draggedItem&&this._draggedItem.visualIndex!==g&&(this.handleUnifiedReorder(this._draggedItem.visualIndex,g,l,s),this._draggedItem=null)}}
        style="border: 2px solid var(--accent-color); border-radius: var(--uc-r-12, 12px);"
      >
        <div class="entity-header" @click=${()=>{c?this._expandedRoutes.delete(e.id):this._expandedRoutes.add(e.id),s({})}}>
          <div class="drag-handle" @click=${e=>e.stopPropagation()}>
            <ha-icon
              icon="mdi:drag"
              style="--mdc-icon-size: 20px; color: var(--secondary-text-color);"
            ></ha-icon>
          </div>
          <div class="entity-info">
            <ha-icon
              icon="${p}"
              class="entity-icon"
              style="color: var(--accent-color);"
            ></ha-icon>
            <div class="entity-name">
              <span style="color: var(--accent-color);">Stack:</span> ${v}
            </div>
            <div class="entity-detail">
              ${u.length} item${1!==u.length?"s":""} · Drag paths here to add
            </div>
          </div>
          <div class="entity-actions" @click=${e=>e.stopPropagation()}>
            <button
              class="entity-action-btn duplicate"
              @click=${()=>{const a=(u||[]).map(e=>Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{id:this.generateId("nav-route")})),n=Object.assign(Object.assign({},JSON.parse(JSON.stringify(e))),{id:this.generateId("nav-stack"),label:`${e.label||`Stack ${i+1}`} (Copy)`,children:a}),o=[...t],l=o.findIndex(i=>i.id===e.id);o.splice(l+1,0,n),s({nav_stacks:o})}}
              title="Duplicate stack"
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </button>
            <button
              class="entity-action-btn delete"
              @click=${()=>{const i=[...u],a=t.filter(i=>i.id!==e.id);this._expandedRoutes.delete(e.id),s({nav_routes:[...l.nav_routes||[],...i],nav_stacks:a})}}
              title="Delete stack (items are moved to top level)"
            >
              <ha-icon icon="mdi:delete"></ha-icon>
            </button>
            <ha-icon
              icon="${c?"mdi:chevron-up":"mdi:chevron-down"}"
              class="expand-icon"
            ></ha-icon>
          </div>
        </div>

        <!-- Drop zone for adding items to this stack -->
        <div
          class="stack-drop-zone"
          @dragover=${i=>{i.preventDefault(),i.stopPropagation();const t=this._draggedItem;t&&("route"===t.type||"stack_child"===t.type&&t.parentStackId!==e.id)&&(i.dataTransfer&&(i.dataTransfer.dropEffect="move"),i.currentTarget.classList.add("drag-over"))}}
          @dragleave=${e=>{e.currentTarget.classList.remove("drag-over")}}
          @drop=${i=>{i.preventDefault(),i.stopPropagation(),i.currentTarget.classList.remove("drag-over"),this.handleDropOnStack(e.id,l,s)}}
          style="
            padding: 8px 16px;
            border-top: 1px dashed var(--divider-color);
            text-align: center;
            font-size: 12px;
            color: var(--secondary-text-color);
            transition: all 0.2s ease;
          "
        >
          <ha-icon
            icon="mdi:tray-arrow-down"
            style="--mdc-icon-size: 16px; margin-right: 4px;"
          ></ha-icon>
          Drop paths here to add to stack
        </div>

        ${c?a.qy`
              <div class="entity-expanded">
                ${o.U.renderFieldSection("Label","Text shown below the stack icon in the navbar.",n,{label:e.label||""},[o.U.text("label")],e=>h({label:e.detail.value.label}))}
                ${o.U.renderFieldSection("Icon","Material Design icon for this stack.",n,{icon:e.icon||""},[o.U.icon("icon")],e=>h({icon:e.detail.value.icon}))}

                <div class="field-container">
                  <div class="field-title">Open Mode</div>
                  <div class="field-description">
                    Choose how the stack opens to show child items.
                  </div>
                  <ha-select
                    style="width: 100%;"
                    .value=${e.open_mode||"click"}
                    @selected=${e=>{e.stopPropagation(),h({open_mode:e.target.value})}}
                    @closed=${e=>e.stopPropagation()}
                  >
                    <mwc-list-item value="click">Click to open</mwc-list-item>
                    <mwc-list-item value="hover">Hover to open</mwc-list-item>
                  </ha-select>
                </div>

                <div class="field-container">
                  <div class="field-title">Stack Orientation</div>
                  <div class="field-description">
                    Direction child items are displayed. Auto will show vertically for horizontal
                    navbars and horizontally for vertical navbars.
                  </div>
                  <ha-select
                    style="width: 100%;"
                    .value=${e.orientation||"auto"}
                    @selected=${e=>{e.stopPropagation(),h({orientation:e.target.value})}}
                    @closed=${e=>e.stopPropagation()}
                  >
                    <mwc-list-item value="auto">Auto (opposite of navbar)</mwc-list-item>
                    <mwc-list-item value="vertical">Vertical</mwc-list-item>
                    <mwc-list-item value="horizontal">Horizontal</mwc-list-item>
                  </ha-select>
                </div>

                <div class="info-box" style="margin-top: 16px;">
                  <ha-icon icon="mdi:information-outline"></ha-icon>
                  <span>
                    Drag paths from the list above into this stack, or drag children out to eject
                    them back to the top level. Children appear indented below this stack in the
                    items list.
                  </span>
                </div>
              </div>
            `:""}
      </div>
    `}getPopupModules(e){var i;const t=[];if(!(null===(i=null==e?void 0:e.layout)||void 0===i?void 0:i.rows))return t;const a=e=>{var i,n;if(e&&Array.isArray(e))for(const o of e)if(o.columns&&Array.isArray(o.columns))for(const e of o.columns)e.modules&&a(e.modules);else{if("popup"===o.type){const e=o,a=(null===(i=e.title_text)||void 0===i?void 0:i.trim())||(null===(n=e.name)||void 0===n?void 0:n.trim())||`Popup (${e.id.slice(-6)})`;t.push({value:e.id,label:a})}o.modules&&Array.isArray(o.modules)&&a(o.modules)}};return a(e.layout.rows),t}getActionCategory(e,i="tap_action"){const t=e[i],a="tap_action"===i,n=null==t?void 0:t.action;return n&&"default"!==n?"navigate"===n?"navigate":"url"===n?"url":"open-popup"===n?"open-popup":"toggle"===n?"toggle":"more-info"===n?"more-info":"assist"===n?"assist":"perform-action"===n||"call-service"===n?"perform-action":"nothing"===n?a?"nothing":"none":"perform-action":a?"navigate":"none"}renderActionEditor(e,i,t,n,l="tap_action"){var s;const r="tap_action"===l,d=e[l],c=e=>n({[l]:e}),v=this.getActionCategory(e,l),p=(()=>{var e;const i=d||{},t=i.perform_action||i.service||"",a=null!==(e=i.data)&&void 0!==e?e:i.service_data,n=i.target;return Object.assign(Object.assign({action:t},a?{data:a}:{}),n?{target:n}:{})})(),g=r?"Action Type":"hold_action"===l?"Hold Action":"Double Tap Action",u=r?"What happens when this icon is tapped.":"hold_action"===l?"Optional action when this icon is pressed and held.":"Optional action when this icon is double-tapped.",h=[...r?[]:[{value:"none",label:"None (disabled)"}],{value:"navigate",label:"Navigate to Path"},{value:"url",label:"Open External URL"},{value:"open-popup",label:"Open Popup"},{value:"toggle",label:"Toggle Entity"},{value:"more-info",label:"More Info"},{value:"perform-action",label:"Perform Action"},{value:"assist",label:"Assist"},...r?[{value:"nothing",label:"No Action"}]:[]];return a.qy`
      <!-- Action Type -->
      <!-- Raw ha-select (same pattern as every other dropdown in this module):
           the ha-form select wrapper let the internal menu's "closed" event
           bubble into the surrounding editor, which made the dropdown appear
           stuck on its current value (issue #92). -->
      <div class="field-container">
        <div class="field-title">${g}</div>
        <div class="field-description">${u}</div>
        <ha-select
          style="width: 100%;"
          .value=${v}
          @selected=${e=>{var i;e.stopPropagation();const t=null===(i=e.target)||void 0===i?void 0:i.value;t&&t!==v&&(e=>{switch(e){case"none":c(void 0);break;case"navigate":c(r?void 0:{action:"navigate",navigation_path:(null==d?void 0:d.navigation_path)||""});break;case"url":c({action:"url",url_path:(null==d?void 0:d.url_path)||""});break;case"open-popup":c({action:"open-popup",popup_id:(null==d?void 0:d.popup_id)||""});break;case"toggle":c({action:"toggle",entity:(null==d?void 0:d.entity)||""});break;case"more-info":c({action:"more-info",entity:(null==d?void 0:d.entity)||""});break;case"assist":c({action:"assist",pipeline_id:null==d?void 0:d.pipeline_id,start_listening:null==d?void 0:d.start_listening});break;case"perform-action":c(Object.assign(Object.assign({},d||{}),{action:"perform-action"}));break;case"nothing":c({action:"nothing"})}})(t)}}
          @closed=${e=>e.stopPropagation()}
        >
          ${h.map(e=>a.qy`<mwc-list-item value="${e.value}">${e.label}</mwc-list-item>`)}
        </ha-select>
      </div>

      <!-- Navigate: Path picker -->
      ${"navigate"===v?a.qy`
            <div class="field-container">
              <div class="field-title">Path</div>
              <div class="field-description">
                Select a dashboard view, or type a full URL (http/https) to open externally.
              </div>
              <ultra-navigation-picker
                .hass=${i}
                .value=${(r?e.url:null==d?void 0:d.navigation_path)||""}
                label=""
                @value-changed=${e=>r?n({url:e.detail.value}):c({action:"navigate",navigation_path:e.detail.value})}
              ></ultra-navigation-picker>
            </div>
          `:""}

      <!-- URL: Text field -->
      ${"url"===v?a.qy`
            ${o.U.renderFieldSection("URL","External website to open (e.g., https://google.com).",i,{url_path:(null==d?void 0:d.url_path)||""},[o.U.text("url_path")],e=>{var i,t,a;const n=null!==(a=null===(t=null===(i=e.detail)||void 0===i?void 0:i.value)||void 0===t?void 0:t.url_path)&&void 0!==a?a:"";c(Object.assign(Object.assign({},d),{action:"url",url_path:n}))})}
            ${o.U.renderFieldSection("Open In Same Tab","Replace the current page instead of opening a new browser tab.",i,{url_target:"_self"===(null==d?void 0:d.url_target)},[o.U.boolean("url_target")],e=>{var i,t,a;const n=null!==(a=null===(t=null===(i=e.detail)||void 0===i?void 0:i.value)||void 0===t?void 0:t.url_target)&&void 0!==a&&a,o=Object.assign(Object.assign({},d),{action:"url"});n?o.url_target="_self":delete o.url_target,c(o)})}
          `:""}

      <!-- Open Popup: Popup picker -->
      ${"open-popup"===v?a.qy`
            <div class="field-container">
              <div class="field-title">Popup</div>
              <div class="field-description">
                Select a popup module from this card to open when tapped.
              </div>
              ${(()=>{const e=this.getPopupModules(t);return 0===e.length?a.qy`
                    <div
                      class="info-box"
                      style="background: var(--warning-color, orange); color: var(--text-primary-color); padding: 12px; border-radius: var(--uc-r-8, 8px);"
                    >
                      No popup modules found. Add a Popup module to this card first.
                    </div>
                  `:a.qy`
                  <ha-select
                    style="width: 100%;"
                    .value=${(null==d?void 0:d.popup_id)||""}
                    @selected=${e=>{e.stopPropagation(),c(Object.assign(Object.assign({},d),{action:"open-popup",popup_id:e.target.value}))}}
                    @closed=${e=>e.stopPropagation()}
                  >
                    ${e.map(e=>a.qy`<mwc-list-item value="${e.value}">${e.label}</mwc-list-item>`)}
                  </ha-select>
                `})()}
            </div>
          `:""}

      <!-- Toggle / More Info: Entity picker -->
      ${"toggle"===v||"more-info"===v?a.qy`
            <div class="field-container">
              <div class="field-title">Entity</div>
              <div class="field-description">
                ${"toggle"===v?"Select the entity to toggle.":"Select the entity to show more info for."}
              </div>
              ${this.renderEntityPickerWithVariables(i,t,"entity",(null==d?void 0:d.entity)||"",e=>c(Object.assign(Object.assign({},d||{}),{action:v,entity:e})),void 0,"Entity")}
            </div>
          `:""}

      <!-- Assist: Pipeline picker -->
      ${"assist"===v?a.qy`
            <div class="field-container">
              <div class="field-title">Assist</div>
              <div class="field-description">
                Choose the Assist pipeline and whether to start listening.
              </div>
              <ha-form
                .hass=${i}
                .data=${{pipeline_id:null==d?void 0:d.pipeline_id,start_listening:null!==(s=null==d?void 0:d.start_listening)&&void 0!==s&&s}}
                .schema=${[{name:"pipeline_id",selector:{assist_pipeline:{include_last_used:!0}}},{name:"start_listening",selector:{boolean:{}}}]}
                .computeLabel=${e=>e.label||""}
                @value-changed=${e=>{e.stopPropagation();const i=e.detail.value||{};c(Object.assign(Object.assign({},d||{}),{action:"assist",pipeline_id:i.pipeline_id,start_listening:i.start_listening}))}}
              ></ha-form>
            </div>
          `:""}

      <!-- Perform Action: Service picker -->
      ${"perform-action"===v?a.qy`
            <div class="nav-action-perform-action">
              <div class="field-container">
                <div class="field-title">Action</div>
                <div class="field-description">
                  Choose the service to call and optional target/data.
                </div>
                <ha-service-control
                  .hass=${i}
                  .value=${p}
                  @value-changed=${e=>{var i;e.stopPropagation();const t=(null===(i=e.detail)||void 0===i?void 0:i.value)||{},a=Object.assign(Object.assign({},d||{}),{action:"perform-action",perform_action:t.action||"",target:t.target,data:t.data});t.data||delete a.data,a.service_data&&delete a.service_data,a.service&&delete a.service,c(a)}}
                ></ha-service-control>
              </div>
            </div>
          `:""}
    `}renderNotificationEditor(e,i,t,n){var o;const l=e.badge||{},s=l.mode||"static",r=e=>{t({badge:Object.assign(Object.assign({},l),e)})};return a.qy`
      <div class="field-container">
        <div class="field-title">Notification Source</div>
        <div class="field-description">Choose how to determine the notification count.</div>
        <ha-select
          style="width: 100%;"
          .value=${s}
          @selected=${e=>{e.stopPropagation(),r({mode:e.target.value})}}
          @closed=${e=>e.stopPropagation()}
        >
          <mwc-list-item value="static">Static value</mwc-list-item>
          <mwc-list-item value="entity">Entity state</mwc-list-item>
          <mwc-list-item value="template">Template</mwc-list-item>
        </ha-select>
      </div>

      ${"static"===s?a.qy`
            <div class="info-box" style="margin-bottom: 12px;">
              <ha-icon icon="mdi:information-outline"></ha-icon>
              <span>Enter a fixed number or text to show in the notification badge.</span>
            </div>
            <div class="field-container">
              <div class="field-title">Count / Text</div>
              <ha-textfield
                style="width: 100%;"
                .value=${l.count||""}
                placeholder="5"
                @input=${e=>r({count:e.target.value})}
                @click=${e=>e.stopPropagation()}
              ></ha-textfield>
            </div>
          `:""}
      ${"entity"===s?a.qy`
            <div class="info-box" style="margin-bottom: 12px;">
              <ha-icon icon="mdi:information-outline"></ha-icon>
              <span
                >Pull the notification count directly from an entity's state or attribute. Great for
                counters, sensors, or any numeric entity.</span
              >
            </div>
            <div class="field-container">
              <div class="field-title">Entity</div>
              ${this.renderEntityPickerWithVariables(i,n,"entity",l.entity||"",e=>r({entity:e}),void 0,"Entity")}
            </div>
            <div class="field-container">
              <div class="field-title">Attribute (Optional)</div>
              <div class="field-description">
                Use a specific attribute instead of the entity state.
              </div>
              <ha-textfield
                style="width: 100%;"
                .value=${l.entity_attribute||""}
                placeholder="e.g., unread_count"
                @input=${e=>r({entity_attribute:e.target.value})}
                @click=${e=>e.stopPropagation()}
              ></ha-textfield>
            </div>
          `:""}
      ${"template"===s?a.qy`
            <div class="info-box" style="margin-bottom: 12px;">
              <ha-icon icon="mdi:information-outline"></ha-icon>
              <span
                >Use a JavaScript template for advanced logic. Access hass, states, and user
                objects. Return a number or string.</span
              >
            </div>
            <div class="field-container">
              <div class="field-title">Count Template</div>
              <div class="field-description">
                Example: return states['sensor.notifications'].state;
              </div>
              <ha-textfield
                style="width: 100%;"
                multiline
                rows="3"
                .value=${l.count_template||"[[[ return 0; ]]]"}
                placeholder="[[[ return hass.states['sensor.example'].state; ]]]"
                @input=${e=>r({count_template:e.target.value})}
                @click=${e=>e.stopPropagation()}
              ></ha-textfield>
            </div>
          `:""}

      ${this.renderFieldSection("Hide When Zero","Hide the badge when the count is 0 or empty.",i,{hide_when_zero:null===(o=l.hide_when_zero)||void 0===o||o},[this.booleanField("hide_when_zero")],e=>r({hide_when_zero:e.detail.value.hide_when_zero}))}

      <div class="entity-fields-grid" style="margin-top: 16px;">
        <div class="field-container">
          <div class="field-title">Badge Color</div>
          <ultra-color-picker
            .value=${l.color||"red"}
            @value-changed=${e=>r({color:e.detail.value})}
          ></ultra-color-picker>
        </div>
        <div class="field-container">
          <div class="field-title">Text Color</div>
          <ultra-color-picker
            .value=${l.text_color||l.textColor||"#ffffff"}
            @value-changed=${e=>r({text_color:e.detail.value,textColor:void 0})}
          ></ultra-color-picker>
        </div>
      </div>
    `}renderBooleanModeSelect(e,i){return a.qy`
      <ha-select
        style="width: 100%;"
        .value=${e}
        @selected=${e=>{const t=e.target.value;"auto"===t&&i(void 0),"true"===t&&i(!0),"false"===t&&i(!1),"template"===t&&i("[[[ return true; ]]]")}}
      >
        <mwc-list-item value="auto">Auto</mwc-list-item>
        <mwc-list-item value="true">Always True</mwc-list-item>
        <mwc-list-item value="false">Always False</mwc-list-item>
        <mwc-list-item value="template">JS Template</mwc-list-item>
      </ha-select>
    `}getBooleanMode(e){return"boolean"==typeof e?e?"true":"false":"string"==typeof e?"template":"auto"}getHapticConfig(e){return!1===e.nav_haptic?{url:!1,tap_action:!1,hold_action:!1,double_tap_action:!1}:!0!==e.nav_haptic&&e.nav_haptic?e.nav_haptic:{url:!1,tap_action:!0,hold_action:!0,double_tap_action:!0}}getEditorStyles(){return"\n      .module-settings {\n        padding-bottom: 24px;\n      }\n      .settings-section {\n        background: var(--secondary-background-color);\n        border-radius: var(--uc-r-12, 12px);\n        padding: 20px;\n        margin-bottom: 24px;\n      }\n      .section-title {\n        font-size: 16px;\n        font-weight: 700;\n        color: var(--primary-color);\n        margin-bottom: 8px;\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n      }\n      .section-description {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        margin-bottom: 20px;\n        line-height: 1.4;\n      }\n      .info-box {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        padding: 12px;\n        background: rgba(var(--rgb-info-color), 0.1);\n        border-radius: var(--uc-r-8, 8px);\n        border-left: 4px solid var(--info-color);\n        font-size: 13px;\n        color: var(--primary-text-color);\n      }\n      .info-box ha-icon {\n        color: var(--info-color);\n        --mdc-icon-size: 20px;\n      }\n      .add-entity-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        width: 100%;\n        padding: 12px;\n        border: 1px dashed var(--primary-color);\n        border-radius: var(--uc-r-10, 10px);\n        background: none;\n        color: var(--primary-color);\n        cursor: pointer;\n        font-size: 14px;\n        font-weight: 600;\n        transition: all 0.2s;\n      }\n      .add-entity-btn:hover {\n        background: rgba(var(--rgb-primary-color), 0.08);\n      }\n      .routes-list {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        margin-bottom: 16px;\n      }\n      .entity-row {\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-10, 10px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        overflow: hidden;\n        transition: all 0.2s;\n      }\n      .entity-row:hover {\n        border-color: var(--primary-color);\n      }\n      .entity-row.expanded {\n        border-color: var(--primary-color);\n        box-shadow: 0 4px 12px rgba(var(--rgb-primary-color), 0.15);\n      }\n      .entity-row.dragging {\n        opacity: 0.5;\n        border: 2px dashed var(--primary-color);\n      }\n      .entity-row.drag-over {\n        border: 2px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.05);\n      }\n      .entity-row.stack-child-row {\n        background: rgba(var(--rgb-accent-color, var(--rgb-primary-color)), 0.03);\n      }\n      .entity-row.stack-child-row:hover {\n        border-color: var(--accent-color);\n      }\n      .stack-drop-zone.drag-over {\n        background: rgba(var(--rgb-accent-color, var(--rgb-primary-color)), 0.15) !important;\n        color: var(--accent-color) !important;\n        font-weight: 600;\n        border-top-color: var(--accent-color) !important;\n      }\n      .entity-row.special-item {\n        border-left: 3px solid var(--primary-color);\n      }\n      .special-badge {\n        font-size: 10px;\n        padding: 2px 8px;\n        background: rgba(var(--rgb-primary-color), 0.15);\n        color: var(--primary-color);\n        border-radius: var(--uc-r-10, 10px);\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.3px;\n      }\n      .entity-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: 12px 14px;\n        cursor: pointer;\n        user-select: none;\n        gap: 8px;\n      }\n      .drag-handle {\n        cursor: grab;\n        padding: 4px;\n        display: flex;\n        align-items: center;\n        opacity: 0.5;\n        transition: opacity 0.2s;\n      }\n      .drag-handle:hover {\n        opacity: 1;\n      }\n      .drag-handle:active {\n        cursor: grabbing;\n      }\n      .entity-info {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        flex: 1;\n        min-width: 0;\n      }\n      .entity-icon {\n        --mdc-icon-size: 22px;\n        color: var(--primary-color);\n        flex-shrink: 0;\n      }\n      .entity-name {\n        font-weight: 600;\n        font-size: 14px;\n        color: var(--primary-text-color);\n      }\n      .entity-detail {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-left: 8px;\n      }\n      .entity-actions {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        flex-shrink: 0;\n      }\n      .entity-action-btn {\n        border: none;\n        background: none;\n        padding: 6px;\n        cursor: pointer;\n        border-radius: var(--uc-r-6, 6px);\n        color: var(--secondary-text-color);\n        transition: all 0.2s;\n      }\n      .entity-action-btn:hover {\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n      }\n      .entity-action-btn.delete:hover {\n        color: var(--error-color);\n      }\n      .entity-action-btn.duplicate:hover {\n        color: var(--accent-color);\n      }\n      .expand-icon {\n        --mdc-icon-size: 20px;\n        color: var(--secondary-text-color);\n        transition: transform 0.2s;\n      }\n      .entity-row.expanded .expand-icon {\n        transform: rotate(180deg);\n      }\n      .entity-expanded {\n        padding: 16px;\n        border-top: 1px solid var(--divider-color);\n        background: var(--secondary-background-color);\n      }\n      .entity-field-group {\n        margin-bottom: 20px;\n      }\n      .entity-field-group:last-child {\n        margin-bottom: 0;\n      }\n      .field-group-title {\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        margin-bottom: 12px;\n        padding-bottom: 8px;\n        border-bottom: 1px solid var(--divider-color);\n      }\n      .entity-fields-grid {\n        display: grid;\n        gap: 12px;\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n      }\n      .field-container {\n        margin-bottom: 12px;\n      }\n      /* Perform Action: hide HA action type dropdown and show only action fields */\n      .nav-action-perform-action ha-selector-ui-action ha-select,\n      .nav-action-perform-action ha-form .label,\n      .nav-action-perform-action ha-form label,\n      .nav-action-perform-action ha-form .mdc-floating-label,\n      .nav-action-perform-action ha-selector-ui-action::part(select),\n      .nav-action-perform-action ha-selector-ui-action::part(action) {\n        display: none;\n      }\n      .nav-action-perform-action ha-selector-ui-action {\n        margin-top: 0;\n      }\n      .field-title {\n        font-size: 13px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        margin-bottom: 6px;\n      }\n      .field-description {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        line-height: 1.4;\n        margin-bottom: 8px;\n      }\n      .compact-item-row {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        padding: 8px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 8px;\n        background: var(--uc-pane-bg, var(--card-background-color));\n      }\n      .color-field {\n        margin-bottom: 16px;\n      }\n    "}}}};