export const __webpack_esm_ids__=[1566];export const __webpack_esm_modules__={5183(e,t,i){i.d(t,{UltraSliderControlModule:()=>u});var o=i(2618),a=i(7475),n=i(9957),r=i(6478),l=i(571),s=i(9760),c=i(4830),d=i(6831);class u extends a.m{constructor(){super(...arguments),this.metadata={type:"slider_control",title:"Slider Control",description:"Interactive slider for controlling entity values",author:"WJD Designs",version:"1.0.0",icon:"mdi:tune-vertical",category:"interactive",tags:["slider","control","light","cover","fan","interactive","entity"]},this.dragState=new Map,this.expandedBars=new Set,this._dragFromHandle=!1,this.interactingBars=new Set,this.localSliderValues=new Map,this.sliderCooldowns=new Map,this.sliderTransitions=new Map}requestUpdate(){}cleanup(){this.sliderCooldowns.forEach(e=>{clearTimeout(e)}),this.sliderCooldowns.clear(),this.sliderTransitions.forEach(e=>{clearInterval(e)}),this.sliderTransitions.clear(),this.localSliderValues.clear(),this.interactingBars.clear()}createDefault(e,t){const i=[];if(null==t?void 0:t.states){const e=Object.keys(t.states),o=e.find(e=>e.startsWith("light.")),a=e.find(e=>e.startsWith("cover.")),n=e.find(e=>e.startsWith("fan.")),r=e.find(e=>e.startsWith("input_number.")),l=e.find(e=>e.startsWith("number."));if(o||a||n||r||l)if(o){const e=t.states[o];e&&(i.push({id:this.generateId("brightness"),type:"brightness",entity:o,min_value:0,max_value:100,step:1,slider_style:"theme",show_icon:!0,show_name:!0,show_value:!0,icon_position:"left",name_position:"left",value_position:"right",info_section_position:"left",outside_text_position:"left",outside_name_position:"top_left",outside_value_position:"bottom_left",invert_direction:!1}),e.attributes.rgb_color&&i.push({id:this.generateId("rgb"),type:"rgb",entity:o,min_value:0,max_value:100,step:1,slider_style:"theme",show_icon:!0,show_name:!0,show_value:!0,icon_position:"left",name_position:"left",value_position:"right",info_section_position:"left",outside_text_position:"left",outside_name_position:"top_left",outside_value_position:"bottom_left",invert_direction:!1}),(e.attributes.color_temp||e.attributes.color_temp_kelvin)&&i.push({id:this.generateId("color_temp"),type:"color_temp",entity:o,min_value:0,max_value:100,step:1,slider_style:"theme",show_icon:!0,show_name:!0,show_value:!0,icon_position:"left",name_position:"left",value_position:"right",info_section_position:"left",outside_text_position:"left",outside_name_position:"top_left",outside_value_position:"bottom_left",invert_direction:!1}))}else if(a)i.push({id:this.generateId("cover"),type:"numeric",entity:a,min_value:0,max_value:100,step:1,show_icon:!0,show_name:!0,show_value:!0,icon_position:"left",name_position:"left",value_position:"right",info_section_position:"left",outside_text_position:"left",outside_name_position:"top_left",outside_value_position:"bottom_left",invert_direction:!1});else if(n)i.push({id:this.generateId("fan"),type:"numeric",entity:n,min_value:0,max_value:100,step:1,show_icon:!0,show_name:!0,show_value:!0,icon_position:"left",name_position:"left",value_position:"right",info_section_position:"left",outside_text_position:"left",outside_name_position:"top_left",outside_value_position:"bottom_left",invert_direction:!1});else if(r){const e=t.states[r];i.push({id:this.generateId("input_number"),type:"numeric",entity:r,min_value:(null==e?void 0:e.attributes.min)||0,max_value:(null==e?void 0:e.attributes.max)||100,step:(null==e?void 0:e.attributes.step)||1,show_icon:!0,show_name:!0,show_value:!0,icon_position:"left",name_position:"left",value_position:"right",info_section_position:"left",outside_text_position:"left",outside_name_position:"top_left",outside_value_position:"bottom_left",invert_direction:!1})}}return{id:e||this.generateId("slider_control"),type:"slider_control",bars:i,orientation:"horizontal",layout_mode:"overlay",outside_text_position:"left",outside_name_position:"top_left",outside_value_position:"bottom_left",split_bar_position:"left",split_info_position:"right",split_bar_length:60,slider_style:"theme",slider_height:55,bar_spacing:8,slider_radius:"round",border_radius:10,slider_track_color:"",slider_fill_color:"var(--primary-color)",dynamic_fill_color:!1,glass_blur_amount:8,use_gradient:!1,gradient_stops:[],show_icon:!0,dynamic_icon:!0,icon_as_toggle:!0,icon_size:24,icon_color:"var(--primary-text-color)",auto_contrast:!0,show_name:!0,name_size:14,name_color:"var(--primary-text-color)",name_bold:!0,show_state:!1,state_size:12,state_color:"var(--secondary-text-color)",state_bold:!1,show_value:!0,value_size:14,value_color:"var(--primary-text-color)",value_suffix:"%",show_bar_label:!1,show_toggle:!1,toggle_position:"right",toggle_size:28,toggle_color_on:"var(--primary-color)",toggle_color_off:"rgba(var(--rgb-primary-text-color), 0.3)",show_color_picker:!1,color_picker_position:"below",color_picker_size:"medium",animate_on_change:!0,transition_duration:200,haptic_feedback:!0,invert_direction:!1,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},enable_hover_effect:!1,display_mode:"always",display_conditions:[]}}migrateFromLegacy(e,t){var i;const o=e;if(o.entity&&(!o.bars||0===o.bars.length)){const e=[];if(null===(i=null==t?void 0:t.states)||void 0===i?void 0:i[o.entity])if("light"===o.entity.split(".")[0]){const t=o.light_control_mode||"brightness";"brightness"!==t&&"both"!==t&&"all"!==t||e.push({id:this.generateId("brightness"),type:"brightness",entity:o.entity,name:o.name,min_value:o.min_value,max_value:o.max_value,step:o.step,slider_style:o.slider_style,slider_height:o.slider_height,slider_track_color:o.slider_track_color,slider_fill_color:o.slider_fill_color,dynamic_fill_color:o.dynamic_fill_color,show_icon:o.show_icon,show_name:o.show_name,show_value:o.show_value,icon:o.icon,icon_size:o.icon_size,icon_color:o.icon_color,dynamic_icon:o.dynamic_icon,icon_as_toggle:o.icon_as_toggle,name_size:o.name_size,name_color:o.name_color,name_bold:o.name_bold,value_size:o.value_size,value_color:o.value_color,value_suffix:o.value_suffix,auto_contrast:o.auto_contrast}),"rgb"!==t&&"both"!==t&&"all"!==t||e.push({id:this.generateId("rgb"),type:"rgb",entity:o.entity,min_value:o.min_value,max_value:o.max_value,step:o.step,slider_style:o.slider_style,slider_height:o.slider_height,slider_track_color:o.slider_track_color,slider_fill_color:o.slider_fill_color,dynamic_fill_color:o.dynamic_fill_color,show_icon:o.show_icon,show_name:o.show_name,show_value:o.show_value,icon:o.icon,icon_size:o.icon_size,icon_color:o.icon_color,dynamic_icon:o.dynamic_icon,icon_as_toggle:o.icon_as_toggle,name_size:o.name_size,name_color:o.name_color,name_bold:o.name_bold,value_size:o.value_size,value_color:o.value_color,value_suffix:o.value_suffix,auto_contrast:o.auto_contrast}),"color_temp"!==t&&"all"!==t||e.push({id:this.generateId("color_temp"),type:"color_temp",entity:o.entity,min_value:o.min_value,max_value:o.max_value,step:o.step,slider_style:o.slider_style,slider_height:o.slider_height,slider_track_color:o.slider_track_color,slider_fill_color:o.slider_fill_color,dynamic_fill_color:o.dynamic_fill_color,show_icon:o.show_icon,show_name:o.show_name,show_value:o.show_value,icon:o.icon,icon_size:o.icon_size,icon_color:o.icon_color,dynamic_icon:o.dynamic_icon,icon_as_toggle:o.icon_as_toggle,name_size:o.name_size,name_color:o.name_color,name_bold:o.name_bold,value_size:o.value_size,value_color:o.value_color,value_suffix:o.value_suffix,auto_contrast:o.auto_contrast})}else e.push({id:this.generateId("numeric"),type:"numeric",entity:o.entity,name:o.name,min_value:o.min_value,max_value:o.max_value,step:o.step,slider_style:o.slider_style,slider_height:o.slider_height,slider_track_color:o.slider_track_color,slider_fill_color:o.slider_fill_color,dynamic_fill_color:o.dynamic_fill_color,show_icon:o.show_icon,show_name:o.show_name,show_value:o.show_value,icon:o.icon,icon_size:o.icon_size,icon_color:o.icon_color,dynamic_icon:o.dynamic_icon,icon_as_toggle:o.icon_as_toggle,name_size:o.name_size,name_color:o.name_color,name_bold:o.name_bold,value_size:o.value_size,value_color:o.value_color,value_suffix:o.value_suffix,auto_contrast:o.auto_contrast});return Object.assign(Object.assign({},o),{bars:e,entity:o.entity,name:o.name,min_value:o.min_value,max_value:o.max_value,step:o.step,light_control_mode:o.light_control_mode})}return o}_addBar(e,t){return{id:this.generateId("bar"),type:e||"numeric",entity:t||"",min_value:0,max_value:100,step:1,show_icon:!0,show_name:!0,show_value:!0,icon_position:"left",name_position:"left",value_position:"right",info_section_position:"left",outside_text_position:"left",outside_name_position:"top_left",outside_value_position:"bottom_left",overlay_name_position:"top",overlay_value_position:"middle",overlay_icon_position:"bottom",content_position:"left",slider_style:"theme",dynamic_icon:!0,icon_as_toggle:!0,name_bold:!0,auto_contrast:!0,invert_direction:!1}}_deleteBar(e,t){return t.filter(t=>t.id!==e)}_duplicateBar(e){return Object.assign(Object.assign({},e),{id:this.generateId("bar"),name:e.name?`${e.name} (Copy)`:void 0})}_reorderBars(e,t,i){const o=[...e],[a]=o.splice(t,1);return o.splice(i,0,a),o}_detectBarType(e,t,i){var o;const a=this.resolveEntity(e,i)||e;if(!a||!(null===(o=null==t?void 0:t.states)||void 0===o?void 0:o[a]))return"numeric";const n=t.states[a],r=a.split(".")[0];return n.attributes.rgb_color?"rgb":n.attributes.color_temp||n.attributes.color_temp_kelvin?"color_temp":"light"===r&&void 0!==n.attributes.brightness?"brightness":"numeric"}_getBarGradient(e,t,i="horizontal"){const o="vertical"===i?"0deg":"90deg";switch(e.type){case"rgb":return"vertical"===i?"linear-gradient(0deg, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 16.67%, rgb(0, 255, 0) 33.33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 66.67%, rgb(255, 0, 255) 83.33%, rgb(255, 0, 0) 100%)":"linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 255, 0) 16.67%, rgb(0, 255, 0) 33.33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 66.67%, rgb(255, 0, 255) 83.33%, rgb(255, 0, 0) 100%)";case"color_temp":return`linear-gradient(${o}, rgb(255, 147, 41) 0%, rgb(255, 180, 112) 10%, rgb(255, 220, 177) 20%, rgb(255, 246, 213) 30%, rgb(255, 255, 255) 50%, rgb(230, 240, 255) 70%, rgb(208, 232, 255) 80%, rgb(169, 200, 255) 90%, rgb(130, 170, 255) 100%)`;case"red":return"rgb(255, 0, 0)";case"green":return"rgb(0, 255, 0)";case"blue":return"rgb(0, 0, 255)";default:return"var(--primary-color)"}}renderGeneralTab(e,t,i,a){var n;const r=e,l=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",s=r.layout_mode||"outside",c=e=>{a(e),this.triggerPreviewUpdate()};if(r.entity&&(!r.bars||0===r.bars.length)){const e=this.migrateFromLegacy(r,t);return c(e),o.qy`<div style="padding: 20px; text-align: center; color: var(--primary-color);">
        <ha-icon icon="mdi:refresh" style="font-size: 48px; margin-bottom: 12px;"></ha-icon>
        <div>Migrating to new multi-bar format...</div>
      </div>`}return o.qy`
      <div class="slider-control-general-tab">
        ${this.injectUcFormStyles()}
        <style>
          .slider-control-general-tab {
            padding: 8px;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .settings-section {
            background: var(--secondary-background-color);
            border-radius: var(--uc-r-8, 8px);
            padding: 16px;
          }
          .settings-section.layout-settings {
            order: 1;
          }
          .settings-section.slider-style {
            order: 2;
          }
          .settings-section.bars-configuration {
            order: 3;
          }
          .section-title {
            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--primary-color);
            margin-bottom: 16px;
            letter-spacing: 0.5px;
          }
          .field-container {
            margin-bottom: 16px;
          }
          .field-title {
            font-size: ${r.name_size||16}px;
            font-weight: 600;
            margin-bottom: 4px;
            color: var(--primary-text-color);
          }
          .field-description {
            font-size: 13px;
            color: var(--secondary-text-color);
            margin-bottom: 12px;
            opacity: 0.8;
            line-height: 1.4;
          }
          .conditional-fields-group {
            margin-top: 16px;
            border-left: 4px solid var(--primary-color);
            background: rgba(var(--rgb-primary-color), 0.08);
            border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;
            padding: 16px;
          }
          .bar-item {
            background: var(--uc-pane-bg, var(--card-background-color));
            border-radius: var(--uc-r-8, 8px);
            border: 1px solid var(--divider-color);
            margin-bottom: 12px;
            overflow: hidden;
          }
          .bar-header {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 12px 16px;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          .bar-header:hover {
            background: var(--secondary-background-color);
          }
          .bar-header.expanded {
            background: var(--secondary-background-color);
            border-bottom: 1px solid var(--divider-color);
          }
          /* Top row: drag handle + type badge + entity name + chevron.
             flex-wrap lets the entity name drop below the badge when the editor
             pane is very narrow rather than getting squeezed to 60px wide. */
          .bar-header-primary {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            flex-wrap: wrap;
          }
          /* Bottom row: visibility toggles (left) + duplicate/delete (right).
             space-between keeps the two clusters at opposite edges so they
             never feel jammed together. */
          .bar-header-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            flex-wrap: wrap;
          }
          .drag-handle {
            color: var(--secondary-text-color);
            cursor: grab;
            flex-shrink: 0;
          }
          .drag-handle:active {
            cursor: grabbing;
          }
          .bar-item.dragging {
            opacity: 0.5;
            transform: rotate(2deg);
          }
          .bar-item.drag-over {
            border-top: 2px solid var(--primary-color);
          }
          .bar-individual-controls {
            display: flex;
            gap: 8px;
            align-items: center;
          }
          .bar-individual-control {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            transition: all 0.2s ease;
            position: relative;
          }
          .bar-individual-control:hover {
            transform: scale(1.1);
          }
          .bar-individual-control.disabled {
            opacity: 0.5;
            pointer-events: none;
          }
          .bar-individual-control.active {
            background: var(--primary-color);
          }
          .bar-individual-control.active:hover {
            background: var(--primary-color-dark);
          }
          .bar-individual-control.inactive {
            background: var(--secondary-background-color);
          }
          .bar-individual-control.inactive:hover {
            background: var(--divider-color);
          }
          .bar-individual-control ha-icon {
            --mdc-icon-size: 16px;
            transition: color 0.2s ease;
          }
          .bar-individual-control.active ha-icon {
            color: var(--text-primary-color, #fff);
          }
          .bar-individual-control.inactive ha-icon {
            color: var(--secondary-text-color);
          }
          .bar-type-badge {
            padding: 4px 10px;
            border-radius: var(--uc-r-12, 12px);
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            min-width: 60px;
            text-align: center;
            flex-shrink: 0;
          }
          .bar-type-badge.numeric {
            background: #2196f3;
            color: white;
          }
          .bar-type-badge.brightness {
            background: #ff9800;
            color: white;
          }
          .bar-type-badge.rgb {
            background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff);
            color: white;
          }
          .bar-type-badge.color_temp {
            background: linear-gradient(45deg, #ff9329, #82aaff);
            color: white;
          }
          .bar-type-badge.red {
            background: #f44336;
            color: white;
          }
          .bar-type-badge.green {
            background: #4caf50;
            color: white;
          }
          .bar-type-badge.blue {
            background: #2196f3;
            color: white;
          }
          .bar-type-badge.attribute {
            background: #9c27b0;
            color: white;
          }
          .bar-label {
            flex: 1 1 auto;
            font-weight: 500;
            color: var(--primary-text-color);
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          /* Chevron pinned to the right edge of the primary row.
             margin-left: auto pushes it past whatever shrink happens to the
             label so it always anchors on the right. */
          .bar-expand-chevron {
            color: var(--secondary-text-color);
            margin-left: auto;
            flex-shrink: 0;
            transition: transform 0.2s ease;
          }
          .bar-actions {
            display: flex;
            gap: 8px;
            align-items: center;
          }
          .bar-action-button {
            background: none;
            border: none;
            color: var(--secondary-text-color);
            cursor: pointer;
            padding: 4px;
            border-radius: var(--uc-r-4, 4px);
            transition: all 0.2s;
          }
          .bar-action-button:hover {
            background: var(--secondary-background-color);
            color: var(--primary-text-color);
          }
          .bar-action-button.delete:hover {
            color: var(--error-color);
          }
          .bar-content {
            padding: 0 16px;
            max-height: 0;
            overflow: hidden;
            transition:
              max-height 0.3s ease-out,
              padding 0.2s ease-out,
              opacity 0.15s ease-out;
            opacity: 0;
          }
          .bar-content.expanded {
            padding: 16px;
            max-height: 2500px;
            overflow: visible;
            opacity: 1;
            transition:
              max-height 0.3s ease-in,
              padding 0.2s ease-in,
              opacity 0.15s ease-in;
          }
          .add-bar-button {
            width: 100%;
            padding: 12px;
            background: var(--primary-color);
            color: var(--text-primary-color, #fff);
            border: none;
            border-radius: var(--uc-r-8, 8px);
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.2s;
            margin-bottom: 16px;
          }
          .add-bar-button:hover {
            background: var(--primary-color-dark);
          }
        </style>

        <!-- BARS CONFIGURATION -->
        <div class="settings-section bars-configuration">
          <div class="section-title">BARS CONFIGURATION</div>

          <button
            class="add-bar-button"
            @click=${()=>{const e=this._addBar(),t=[...r.bars||[],e];c({bars:t}),this.expandedBars.add(e.id)}}
          >
            <ha-icon icon="mdi:plus" style="margin-right: 8px;"></ha-icon>
            Add Bar
          </button>

          ${(r.bars||[]).map((e,a)=>{var n,d,u,_,p,h,v,g,m,b,y,f,x,$,w,k,S,z,I,M,j,F,O,q,B,T,C,E,R,V,A,L;const P=this.resolveEntity(e.entity,i)||e.entity,N=null===(n=null==t?void 0:t.states)||void 0===n?void 0:n[P],D=(null===(d=null==N?void 0:N.attributes)||void 0===d?void 0:d.friendly_name)||e.entity,G=e.name||D,H=this.expandedBars.has(e.id);return!1!==e.show_icon&&r.show_icon,!1!==e.show_name&&r.show_name,!1!==e.show_value&&r.show_value,o.qy`
              <div
                class="bar-item"
                data-bar-id="${e.id}"
                draggable="true"
                @dragstart=${t=>{this._dragFromHandle?(this._dragFromHandle=!1,t.dataTransfer.setData("text/plain",e.id),t.dataTransfer.effectAllowed="move",t.currentTarget.classList.add("dragging")):t.preventDefault()}}
                @dragend=${e=>{this._dragFromHandle=!1,e.currentTarget.classList.remove("dragging")}}
                @dragover=${e=>{e.preventDefault(),e.dataTransfer.dropEffect="move",e.currentTarget.classList.add("drag-over")}}
                @dragleave=${e=>{e.currentTarget.classList.remove("drag-over")}}
                @drop=${t=>{t.preventDefault(),t.currentTarget.classList.remove("drag-over");const i=t.dataTransfer.getData("text/plain"),o=e.id;if(i!==o){const e=[...r.bars||[]],t=e.findIndex(e=>e.id===i),a=e.findIndex(e=>e.id===o);if(-1!==t&&-1!==a){const i=e.splice(t,1)[0];e.splice(a,0,i),c({bars:e})}}}}
              >
                <div
                  class="bar-header ${H?"expanded":""}"
                  @click=${t=>{const i=this.expandedBars.has(e.id);i?this.expandedBars.delete(e.id):this.expandedBars.add(e.id);const o=t.currentTarget,a=o.closest(".bar-item");if(a){const e=a.querySelector(".bar-content"),t=o.querySelector('ha-icon[icon^="mdi:chevron"]');i?(o.classList.remove("expanded"),null==e||e.classList.remove("expanded"),t&&t.setAttribute("icon","mdi:chevron-down")):(o.classList.add("expanded"),null==e||e.classList.add("expanded"),t&&t.setAttribute("icon","mdi:chevron-up"))}}}
                >
                  <!-- Primary row: drag handle + type badge + entity name + chevron -->
                  <div class="bar-header-primary">
                    <ha-icon
                      icon="mdi:drag-vertical"
                      class="drag-handle"
                      @click=${e=>e.stopPropagation()}
                      @mousedown=${()=>{this._dragFromHandle=!0}}
                      @touchstart=${()=>{this._dragFromHandle=!0}}
                    ></ha-icon>
                    <div class="bar-type-badge ${e.type}">${e.type}</div>
                    <div class="bar-label" title=${G}>${G}</div>
                    <ha-icon
                      class="bar-expand-chevron"
                      icon="mdi:chevron-${H?"up":"down"}"
                    ></ha-icon>
                  </div>

                  <!-- Controls row: visibility toggles (left) + duplicate/delete (right) -->
                  <div class="bar-header-controls">
                    <div class="bar-individual-controls">
                      <div
                        class="bar-individual-control ${!1!==e.show_icon?"active":"inactive"}"
                        @click=${t=>{t.stopPropagation();const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{show_icon:!e.show_icon})),c({bars:i})}}
                        title="Toggle icon visibility"
                      >
                        <ha-icon icon="mdi:lightbulb"></ha-icon>
                      </div>
                      <div
                        class="bar-individual-control ${!1!==e.show_name?"active":"inactive"}"
                        @click=${t=>{t.stopPropagation();const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{show_name:!e.show_name})),c({bars:i})}}
                        title="Toggle name visibility"
                      >
                        <ha-icon icon="mdi:text"></ha-icon>
                      </div>
                      <div
                        class="bar-individual-control ${!1!==e.show_value?"active":"inactive"}"
                        @click=${t=>{t.stopPropagation();const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{show_value:!e.show_value})),c({bars:i})}}
                        title="Toggle value visibility"
                      >
                        <ha-icon icon="mdi:numeric"></ha-icon>
                      </div>
                    </div>

                    <div class="bar-actions">
                      <button
                        class="bar-action-button"
                        @click=${t=>{t.stopPropagation();const i=this._duplicateBar(e),o=[...r.bars||[]];o.splice(a+1,0,i),c({bars:o})}}
                        title="Duplicate bar"
                      >
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                      </button>
                      <button
                        class="bar-action-button delete"
                        @click=${t=>{t.stopPropagation();const i=this._deleteBar(e.id,r.bars||[]);c({bars:i})}}
                        title="Delete bar"
                      >
                        <ha-icon icon="mdi:delete"></ha-icon>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="bar-content ${H?"expanded":""}">
                  ${this.renderEntityPickerWithVariables(t,i,"entity",e.entity||"",o=>{const a=[...r.bars||[]],n=a.findIndex(t=>t.id===e.id);if(-1!==n){a[n]=Object.assign(Object.assign({},a[n]),{entity:o});const e=this._detectBarType(o,t,i);a[n].type=e}c({bars:a})},void 0,"Entity")}
                  <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; margin-bottom: 8px; color: var(--secondary-text-color);">
                    Select the entity this slider controls (e.g. a light, input_number, or media player).
                  </div>
                  ${this.renderFieldSection("Bar Type","Type of slider bar (auto-detected)",t,{type:e.type},[this.selectField("type",[{value:"numeric",label:"Numeric"},{value:"brightness",label:"Brightness"},{value:"rgb",label:"RGB Color"},{value:"color_temp",label:"Color Temperature"},{value:"red",label:"Red Channel"},{value:"green",label:"Green Channel"},{value:"blue",label:"Blue Channel"},{value:"attribute",label:"Custom Attribute"}])],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{type:t.detail.value.type})),c({bars:i}),this.requestUpdate()})}
                  ${"attribute"===e.type?o.qy`
                        ${this.renderFieldSection("Attribute","Specific attribute to control (e.g., percentage, position, volume_level)",t,{attribute:e.attribute||"percentage"},[this.textField("attribute")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{attribute:t.detail.value.attribute})),c({bars:i})})}
                      `:""}
                  ${this.renderFieldSection("Name","Override the bar label (leave empty to use entity name)",t,{name:e.name||""},[this.textField("name")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{name:t.detail.value.name})),c({bars:i})})}
                  ${this.renderSliderField("Min Value","Minimum value for this bar",null!==(u=e.min_value)&&void 0!==u?u:0,0,0,1e3,1,t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{min_value:t})),c({bars:i})},"")}
                  ${this.renderSliderField("Max Value","Maximum value for this bar",null!==(_=e.max_value)&&void 0!==_?_:100,100,0,1e3,1,t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{max_value:t})),c({bars:i})},"")}
                  ${this.renderSliderField("Step","Step increment for value changes",null!==(p=e.step)&&void 0!==p?p:1,1,.1,100,.1,t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{step:t})),c({bars:i})},"")}
                  ${(()=>{const i=r.layout_mode||"overlay",a=r.orientation||"horizontal";let n=[];return"overlay"===i?n="horizontal"===a?[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}]:[{value:"bottom",label:"Bottom"},{value:"center",label:"Center"},{value:"top",label:"Top"}]:"split"===i?n="horizontal"===a?[{value:"left",label:"Left"},{value:"right",label:"Right"}]:[{value:"top",label:"Top"},{value:"bottom",label:"Bottom"}]:"outside"===i&&(n="horizontal"===a?[{value:"top_left",label:"Top Left"},{value:"top_center",label:"Top Center"},{value:"top_right",label:"Top Right"},{value:"bottom_left",label:"Bottom Left"},{value:"bottom_center",label:"Bottom Center"},{value:"bottom_right",label:"Bottom Right"}]:[{value:"left_top",label:"Left Top"},{value:"left_center",label:"Left Center"},{value:"left_bottom",label:"Left Bottom"},{value:"right_top",label:"Right Top"},{value:"right_center",label:"Right Center"},{value:"right_bottom",label:"Right Bottom"}]),o.qy`
                      <div
                        style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--divider-color);"
                      >
                        <div
                          style="font-size: 14px; font-weight: 600; color: var(--primary-color); margin-bottom: 12px;"
                        >
                          ELEMENT POSITIONING
                        </div>

                        ${!1!==e.show_icon&&!1!==r.show_icon?o.qy`
                              ${this.renderFieldSection("Icon Position","Position of the icon element",t,{icon_position:e.icon_position||"left"},[this.selectField("icon_position",n)],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{icon_position:t.detail.value.icon_position})),c({bars:i})})}
                            `:""}
                        ${!1!==e.show_name&&!1!==r.show_name?o.qy`
                              ${this.renderFieldSection("Name Position","Position of the name label",t,{name_position:e.name_position||"left"},[this.selectField("name_position",n)],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{name_position:t.detail.value.name_position})),c({bars:i})})}
                            `:""}
                        ${!1!==e.show_value&&!1!==r.show_value?o.qy`
                              ${this.renderFieldSection("Value Position","Position of the value display",t,{value_position:e.value_position||"right"},[this.selectField("value_position",n)],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{value_position:t.detail.value.value_position})),c({bars:i})})}
                            `:""}
                        ${"split"===i?o.qy`
                              ${this.renderFieldSection("Info Section Position","Position of the entire info section relative to the bar",t,{info_section_position:e.info_section_position||("horizontal"===a?"left":"top")},[this.selectField("info_section_position","horizontal"===a?[{value:"left",label:"Left"},{value:"right",label:"Right"}]:[{value:"top",label:"Top"},{value:"bottom",label:"Bottom"}])],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{info_section_position:t.detail.value.info_section_position})),c({bars:i})})}
                            `:""}
                      </div>
                    `})()}
                  ${"split"===r.layout_mode?o.qy`
                        ${this.renderSliderField("Bar Length","Percentage of space for bar (0-100%)",null!==(v=null!==(h=e.split_bar_length)&&void 0!==h?h:r.split_bar_length)&&void 0!==v?v:60,60,0,100,5,t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{split_bar_length:t})),c({bars:i})},"%")}
                      `:""}

                  <!-- Bar Slider Style -->
                  <div
                    style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--divider-color);"
                  >
                    <div
                      style="font-size: 14px; font-weight: 600; color: var(--primary-color); margin-bottom: 12px;"
                    >
                      SLIDER STYLE
                    </div>

                    ${this.renderFieldSection("Slider Style","Visual appearance of the slider",t,{slider_style:e.slider_style||"theme"},[this.selectField("slider_style",this.withThemeInheritOption(l,i,"slider_control","slider_style",r.slider_style&&"theme"!==r.slider_style?r.slider_style:"flat",[{value:"flat",label:"Flat"},{value:"glossy",label:"Glossy"},{value:"embossed",label:"Embossed"},{value:"inset",label:"Inset"},{value:"neon-glow",label:"Neon Glow"},{value:"outline",label:"Outline"},{value:"glass",label:"Glass"},{value:"metallic",label:"Metallic"},{value:"neumorphic",label:"Neumorphic"},{value:"minimal",label:"Minimal"}]))],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{slider_style:t.detail.value.slider_style})),c({bars:i}),this.requestUpdate()})}

                    ${this.renderSliderField("vertical"===r.orientation?"Slider Width":"Slider Height","vertical"===r.orientation?"Width of vertical bars in pixels":"Height of horizontal bars in pixels",e.slider_height||r.slider_height||40,40,20,200,5,t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{slider_height:t})),c({bars:i})},"px")}

                    ${this.renderFieldSection("Border Radius","Slider border radius style",t,{slider_radius:e.slider_radius||r.slider_radius||"round"},[this.selectField("slider_radius",[{value:"square",label:"Square"},{value:"round",label:"Round"},{value:"pill",label:"Pill"}])],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{slider_radius:t.detail.value.slider_radius})),c({bars:i})})}
                    ${"glass"===(e.slider_style||r.slider_style)?o.qy`
                          <div>
                            ${this.renderSliderField("Glass Blur Amount","Backdrop filter blur amount (0-20px)",e.glass_blur_amount||r.glass_blur_amount||8,8,0,20,1,t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{glass_blur_amount:t})),c({bars:i})},"px")}
                          </div>
                        `:""}

                    ${this.renderFieldSection("Invert Direction","Reverse min/max positions (useful for curtains)",t,{invert_direction:null!==(m=null!==(g=e.invert_direction)&&void 0!==g?g:r.invert_direction)&&void 0!==m&&m},[this.booleanField("invert_direction")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{invert_direction:t.detail.value.invert_direction})),c({bars:i})})}
                  </div>

                  ${"rgb"!==e.type&&"color_temp"!==e.type?o.qy`
                        <!-- Bar Slider Colors -->
                        <div
                          style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--divider-color);"
                        >
                          <div
                            style="font-size: 14px; font-weight: 600; color: var(--primary-color); margin-bottom: 12px;"
                          >
                            SLIDER COLORS
                          </div>

                          <div class="field-container">
                            <div class="field-title">Track Color</div>
                            <div class="field-description">
                              Background color (leave empty for auto: fill at 25% opacity)
                            </div>
                            <ultra-color-picker
                              .value=${e.slider_track_color||r.slider_track_color||""}
                              .defaultValue=${""}
                              .homeAssistant=${t}
                              @value-changed=${t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{slider_track_color:t.detail.value})),c({bars:i})}}
                            ></ultra-color-picker>
                          </div>

                          ${null!==(y=null!==(b=e.dynamic_fill_color)&&void 0!==b?b:r.dynamic_fill_color)&&void 0!==y&&y?o.qy``:o.qy`
                                <div class="field-container">
                                  <div class="field-title">Fill Color</div>
                                  <div class="field-description">
                                    Color of the filled portion of the slider
                                  </div>
                                  <ultra-color-picker
                                    .value=${e.slider_fill_color||r.slider_fill_color||""}
                                    .defaultValue=${"var(--primary-color)"}
                                    .homeAssistant=${t}
                                    @value-changed=${t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{slider_fill_color:t.detail.value})),c({bars:i})}}
                                  ></ultra-color-picker>
                                </div>
                              `}

                          ${this.renderFieldSection("Dynamic Fill Color","Use entity color (RGB lights, etc.)",t,{dynamic_fill_color:null!==(x=null!==(f=e.dynamic_fill_color)&&void 0!==f?f:r.dynamic_fill_color)&&void 0!==x&&x},[this.booleanField("dynamic_fill_color")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{dynamic_fill_color:t.detail.value.dynamic_fill_color})),c({bars:i})})}
                        </div>
                      `:""}

                  <!-- Bar Display Elements -->
                  <div
                    style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--divider-color);"
                  >
                    <div
                      style="font-size: 14px; font-weight: 600; color: var(--primary-color); margin-bottom: 12px;"
                    >
                      DISPLAY ELEMENTS
                    </div>

                    ${"overlay"===s?o.qy`
                          ${this.renderFieldSection("Auto Contrast","Automatically adjust text/icon color based on fill",t,{auto_contrast:null===(w=null!==($=e.auto_contrast)&&void 0!==$?$:r.auto_contrast)||void 0===w||w},[this.booleanField("auto_contrast")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{auto_contrast:t.detail.value.auto_contrast})),c({bars:i})})}
                        `:""}

                    <!-- Icon Settings -->
                    <div style="margin-bottom: 24px;">
                      ${this.renderFieldSection("Show Icon","Display an icon on the slider",t,{show_icon:null===(S=null!==(k=e.show_icon)&&void 0!==k?k:r.show_icon)||void 0===S||S},[this.booleanField("show_icon")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{show_icon:t.detail.value.show_icon})),c({bars:i})})}

                      ${!1!==(null!==(z=e.show_icon)&&void 0!==z?z:r.show_icon)?o.qy`
                            <div>
                              ${this.renderFieldSection("Icon","Icon to display (leave empty for entity icon)",t,{icon:e.icon||r.icon||""},[this.iconField("icon")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{icon:t.detail.value.icon})),c({bars:i})})}

                              ${this.renderFieldSection("Dynamic Icon","Use entity's default icon",t,{dynamic_icon:null===(M=null!==(I=e.dynamic_icon)&&void 0!==I?I:r.dynamic_icon)||void 0===M||M},[this.booleanField("dynamic_icon")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{dynamic_icon:t.detail.value.dynamic_icon})),c({bars:i})})}
                              ${this.renderFieldSection("Icon as Toggle","Click icon to toggle entity on/off (icon changes with state)",t,{icon_as_toggle:null===(F=null!==(j=e.icon_as_toggle)&&void 0!==j?j:r.icon_as_toggle)||void 0===F||F},[this.booleanField("icon_as_toggle")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{icon_as_toggle:t.detail.value.icon_as_toggle})),c({bars:i})})}

                              ${this.renderSliderField("Icon Size","Icon size in pixels",e.icon_size||r.icon_size||24,24,16,48,2,t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{icon_size:t})),c({bars:i})},"px")}

                              <div class="field-container">
                                <div class="field-title">Icon Color</div>
                                <div class="field-description">Color for the icon</div>
                                <ultra-color-picker
                                  .value=${e.icon_color||r.icon_color||""}
                                  .defaultValue=${"var(--primary-text-color)"}
                                  .homeAssistant=${t}
                                  @value-changed=${t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{icon_color:t.detail.value})),c({bars:i})}}
                                ></ultra-color-picker>
                              </div>
                            </div>
                          `:""}
                    </div>

                    <!-- Name Settings -->
                    <div style="margin-bottom: 24px;">
                      ${this.renderFieldSection("Show Name","Display entity name",t,{show_name:null===(q=null!==(O=e.show_name)&&void 0!==O?O:r.show_name)||void 0===q||q},[this.booleanField("show_name")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{show_name:t.detail.value.show_name})),c({bars:i})})}

                      ${!1!==(null!==(B=e.show_name)&&void 0!==B?B:r.show_name)?o.qy`
                            <div>
                              ${this.renderSliderField("Name Size","",e.name_size||r.name_size||14,14,10,24,1,t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{name_size:t})),c({bars:i})},"px")}

                              <div class="field-container">
                                <div class="field-title">Name Color</div>
                                <ultra-color-picker
                                  .value=${e.name_color||r.name_color||""}
                                  .defaultValue=${"var(--primary-text-color)"}
                                  .homeAssistant=${t}
                                  @value-changed=${t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{name_color:t.detail.value})),c({bars:i})}}
                                ></ultra-color-picker>
                              </div>

                              ${this.renderFieldSection("Bold","",t,{name_bold:null===(C=null!==(T=e.name_bold)&&void 0!==T?T:r.name_bold)||void 0===C||C},[this.booleanField("name_bold")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{name_bold:t.detail.value.name_bold})),c({bars:i})})}
                            </div>
                          `:""}
                    </div>

                    <!-- Value Settings -->
                    <div style="margin-bottom: 24px;">
                      ${this.renderFieldSection("Show Value","Display current numeric value",t,{show_value:null===(R=null!==(E=e.show_value)&&void 0!==E?E:r.show_value)||void 0===R||R},[this.booleanField("show_value")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{show_value:t.detail.value.show_value})),c({bars:i})})}
                      ${this.renderFieldSection("Show Bar Label","Display bar label (Brightness, RGB Color, etc.)",t,{show_bar_label:null===(A=null!==(V=e.show_bar_label)&&void 0!==V?V:r.show_bar_label)||void 0===A||A},[this.booleanField("show_bar_label")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{show_bar_label:t.detail.value.show_bar_label})),c({bars:i})})}

                      ${!1!==(null!==(L=e.show_value)&&void 0!==L?L:r.show_value)?o.qy`
                            <div>
                              ${this.renderSliderField("Value Size","",e.value_size||r.value_size||14,14,10,24,1,t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{value_size:t})),c({bars:i})},"px")}

                              <div class="field-container">
                                <div class="field-title">Value Color</div>
                                <ultra-color-picker
                                  .value=${e.value_color||r.value_color||""}
                                  .defaultValue=${"var(--primary-text-color)"}
                                  .homeAssistant=${t}
                                  @value-changed=${t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{value_color:t.detail.value})),c({bars:i})}}
                                ></ultra-color-picker>
                              </div>

                              ${this.renderFieldSection("Value Suffix","Text to append to value (e.g., %, °C, °F)",t,{value_suffix:e.value_suffix||r.value_suffix||""},[this.textField("value_suffix")],t=>{const i=[...r.bars||[]],o=i.findIndex(t=>t.id===e.id);-1!==o&&(i[o]=Object.assign(Object.assign({},i[o]),{value_suffix:t.detail.value.value_suffix})),c({bars:i})})}
                            </div>
                          `:""}
                    </div>
                  </div>
                </div>
              </div>
            `})}
        </div>

        <!-- LAYOUT SETTINGS -->
        <div class="settings-section layout-settings">
          <div class="section-title">LAYOUT SETTINGS</div>

          ${this.renderFieldSection("Orientation","Slider direction: horizontal or vertical",t,{orientation:r.orientation||"horizontal"},[this.selectField("orientation",[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}])],e=>c({orientation:e.detail.value.orientation}))}
          ${this.renderFieldSection("Layout Mode","How to position information relative to the slider",t,{layout_mode:r.layout_mode||"outside"},[this.selectField("layout_mode",[{value:"outside",label:"Outside (info beside slider)"},{value:"overlay",label:"Overlay (info on slider)"},{value:"split",label:"Split (adjustable ratio)"}])],e=>c({layout_mode:e.detail.value.layout_mode}))}
          ${"split"===r.layout_mode?o.qy`
                <div>
                  <div class="field-description">
                    Configure bar position and ratio inside each bar card below.
                  </div>
                </div>
              `:""}
        </div>

        ${this.renderSliderField("Bar Spacing","Spacing between multiple bars (negative values allowed for overlap)",r.bar_spacing||8,8,-20,40,2,e=>c({bar_spacing:e}),"px")}
      </div>
    `}renderActionsTab(e,t,i,a){const r=e;return o.qy`
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
          ${n.K.render(t,{tap_action:r.tap_action||{action:"nothing"},hold_action:r.hold_action||{action:"nothing"},double_tap_action:r.double_tap_action||{action:"nothing"}},e=>{const t={};e.tap_action&&(t.tap_action=e.tap_action),e.hold_action&&(t.hold_action=e.hold_action),e.double_tap_action&&(t.double_tap_action=e.double_tap_action),a(t),this.triggerPreviewUpdate()},"Link Configuration")}
        </div>
      </div>
    `}renderLogicTab(e,t,i,a){return o.qy``}_renderStateElement(e,t,i,a,n,r=!1){if(!0!==t.show_state||!i)return null;const l=(0,s.formatEntityState)(a,n)||i.state;return o.qy`
      <div
        class="uc-slider-state"
        style="
          font-size: ${t.state_size||12}px;
          color: ${t.state_color||"var(--secondary-text-color)"};
          font-weight: ${t.state_bold?"bold":"normal"};
          ${r?"writing-mode: vertical-rl; text-orientation: mixed;":""}
        "
      >
        ${l}
      </div>
    `}renderPreview(e,t,i,a){var n,s,u;const _=(0,c.Gy)(e,i,"slider_control",{slider_style:"flat",glass_blur_amount:8}),p=t,h=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";if(!_.bars||0===_.bars.length)return this.renderGradientErrorState((0,r.kg)("editor.slider_control.error_no_bars",h,"Add Bars"),(0,r.kg)("editor.slider_control.error_no_bars_desc",h,"Configure slider bars in the General tab"),"mdi:tune-vertical");const v=_.bars.filter(e=>e.entity&&""!==e.entity.trim()),g=_.bars.filter(e=>!e.entity||""===e.entity.trim());if(0===v.length&&g.length>0){const e=g.map((e,t)=>e.name||`Bar ${t+1}`).join(", ");return this.renderGradientErrorState((0,r.kg)("editor.slider_control.error_need_entities",h,"Bars Need Entities"),e,"mdi:tune-vertical")}const m=g.length>0?this.renderGradientWarningBanner(`${g.length>1?"bars":"bar"} need${1===g.length?"s":""} entities`,g.length):"",b=v,y=_.orientation||"horizontal",f=_.bar_spacing||8,x=_.layout_mode||"outside",$="vertical"===y,w=200,k=`uc-slider-layout uc-layout-${x} ${$?"uc-orientation-vertical":"uc-orientation-horizontal"}`,S="outside"===x,z=(e,t)=>{var a,n,r,s,u,h,v,g,m,b,f,$,k,S,z;const I=this.resolveEntity(e.entity,i)||e.entity,M=null===(a=null==p?void 0:p.states)||void 0===a?void 0:a[I];if(!M)return o.qy`
          <div
            style="padding: 12px; text-align: center; color: var(--error-color); background: var(--error-color); color: white; border-radius: var(--uc-r-8, 8px);"
          >
            <ha-icon icon="mdi:alert-circle" style="margin-right: 8px;"></ha-icon>
            Entity not found: ${e.entity}
          </div>
        `;const j=I.split(".")[0],F=e.name||M.attributes.friendly_name||I,O=("on"===M.state||M.state,!1!==e.show_icon&&!1!==_.show_icon),q=!1!==e.show_name&&!1!==_.show_name,B=!1!==e.show_value&&!1!==_.show_value;let T=0,C="0",E=0;if("brightness"===e.type){const e=M.attributes.brightness||0;T=Math.round(e/255*100),E=T,C=`${T}`}else if("rgb"===e.type){const e=M.attributes.color_mode,t=M.attributes.min_mireds||154,i=M.attributes.max_mireds||500;if("color_temp"===e||!M.attributes.rgb_color&&(M.attributes.color_temp||M.attributes.color_temp_kelvin)){const e=M.attributes.color_temp||(M.attributes.color_temp_kelvin?Math.round(1e6/M.attributes.color_temp_kelvin):t),[o,a,n]=this.colorTempToDisplayRGB(e,t,i),r=this.rgbToHue(o,a,n);E=Math.max(0,Math.min(100,r)),C=`rgb(${o}, ${a}, ${n})`}else{const e=M.attributes.rgb_color||[255,255,255],t=this.rgbToHue(e[0],e[1],e[2]);E=Math.max(0,Math.min(100,t)),C=`rgb(${e[0]}, ${e[1]}, ${e[2]})`}}else if("color_temp"===e.type){const e=M.attributes.min_mireds||154,t=M.attributes.max_mireds||500,i=M.attributes.color_mode;if(i&&["rgb","hs","xy","rgbw","rgbww"].includes(i)){const i=M.attributes.rgb_color;if(Array.isArray(i)&&3===i.length){const[o,,a]=i,n=e+Math.max(0,Math.min(1,(o-a+255)/510))*(t-e);E=Math.max(0,Math.min(100,(t-n)/(t-e)*100)),C=`~${Math.round(1e6/n)}K`}else{const i=M.attributes.color_temp||(M.attributes.color_temp_kelvin?Math.round(1e6/M.attributes.color_temp_kelvin):e);E=Math.max(0,Math.min(100,(t-i)/(t-e)*100)),C=`${Math.round(1e6/i)}K`}}else{const i=M.attributes.color_temp_kelvin,o=M.attributes.color_temp||(i?Math.round(1e6/i):e);E=Math.max(0,Math.min(100,(t-o)/(t-e)*100)),C=`${Math.round(1e6/o)}K`}}else if("red"===e.type){const e=M.attributes.rgb_color||[255,255,255];E=Math.max(0,Math.min(100,e[0]/255*100)),C=`${e[0]}`}else if("green"===e.type){const e=M.attributes.rgb_color||[255,255,255];E=Math.max(0,Math.min(100,e[1]/255*100)),C=`${e[1]}`}else if("blue"===e.type){const e=M.attributes.rgb_color||[255,255,255];E=Math.max(0,Math.min(100,e[2]/255*100)),C=`${e[2]}`}else{let t=0;if("attribute"===e.type&&e.attribute)t=parseFloat(M.attributes[e.attribute])||0;else if("media_player"===j){const e=parseFloat(M.attributes.volume_level);t=isNaN(e)?0:100*e}else t=parseFloat(M.state)||0;const i=null!==(n=e.min_value)&&void 0!==n?n:0;T=t,E=(t-i)/((null!==(r=e.max_value)&&void 0!==r?r:100)-i)*100,C=t.toFixed(1)}E=Math.max(0,Math.min(100,E));const R=`${e.entity}-${e.type}`;if((this.interactingBars.has(R)||this.localSliderValues.has(R))&&!this.interactingBars.has(R))if("off"===(null==M?void 0:M.state)||"closed"===(null==M?void 0:M.state))this.localSliderValues.delete(R);else{const e=null!==(s=this.localSliderValues.get(R))&&void 0!==s?s:E;Math.abs(e-E)<2&&this.localSliderValues.delete(R)}const V=(this.interactingBars.has(R)||this.localSliderValues.has(R))&&null!==(u=this.localSliderValues.get(R))&&void 0!==u?u:E,A=null!==(v=null!==(h=e.invert_direction)&&void 0!==h?h:_.invert_direction)&&void 0!==v&&v,L=A?100-V:V,P=this._getBarGradient(e,p,y),N="string"==typeof e.slider_fill_color?e.slider_fill_color.trim():"",D="string"==typeof _.slider_fill_color?_.slider_fill_color.trim():"",G="rgb"===e.type||"color_temp"===e.type,H=!G&&null!==(m=null!==(g=e.dynamic_fill_color)&&void 0!==g?g:_.dynamic_fill_color)&&void 0!==m&&m;let W=P;const U=null!==(f=null!==(b=e.use_gradient)&&void 0!==b?b:_.use_gradient)&&void 0!==f&&f,K=e.gradient_stops&&e.gradient_stops.length>0?e.gradient_stops:_.gradient_stops;if(!G&&U&&K&&K.length>=2){const e=[...K].sort((e,t)=>e.position-t.position).map(e=>`${e.color} ${e.position}%`).join(", ");W=`linear-gradient(${"vertical"===y?"0deg":"90deg"}, ${e})`}else H?W=this.resolveDynamicFillColor(e,M,P):!G&&N?W=N:!G&&D&&(W=D);const Y=W.includes("gradient"),X=G,J=!X&&Y,Q=Y,Z="vertical"===y,ee=Z&&"outside"===x,te=e.icon_size||_.icon_size||16,ie=O?te+12:0,oe=ee?Math.max(40,w-ie):w,ae=Z?"0deg":"90deg",ne=J?`background: ${W}; opacity: 1;`:`background: linear-gradient(${ae}, ${W} 0%, ${W} ${L}%, transparent ${L}%, transparent 100%); opacity: 0.8;`;e.overlay_name_position||_.overlay_name_position,e.overlay_value_position||_.overlay_value_position,e.overlay_icon_position||_.overlay_icon_position;let re=e.slider_track_color||_.slider_track_color;re||(re=Q?"rgba(var(--rgb-primary-color), 0.25)":W.startsWith("rgb(")?W.replace("rgb(","rgba(").replace(")",", 0.25)"):"rgba(var(--rgb-primary-color), 0.25)");const le=e.slider_height||_.slider_height||55,se=(0,c.NS)(i,"slider_control","slider_style",e.slider_style||_.slider_style,"flat"),ce=e.slider_radius||_.slider_radius||"round",de=e.glass_blur_amount||_.glass_blur_amount||8,ue=null===(k=null!==($=e.animate_on_change)&&void 0!==$?$:_.animate_on_change)||void 0===k||k;let _e="",pe="";const he=X?W:J?re:`linear-gradient(${ae}, ${W} 0%, ${W} ${L}%, ${re} ${L}%, ${re} 100%)`;let ve,ge="10px";"square"===ce?ge="0":"pill"===ce&&(ge=le/2+"px");{const e=(0,d.QD)(se,{trackColor:re,fill:W,baseBackground:he,borderRadius:ge,overlayFillSnippet:ne,glassBlur:de});_e=e.container,pe=e.overlay}J&&!pe&&(pe=ne);const me=(e,t)=>{const i=null==t?void 0:t.closest(".slider-track-container");if(!i)return;const o=i.querySelector(".slider-indicator");o&&(Z?o.style.top=`clamp(4px, ${100-e}%, calc(100% - 4px))`:o.style.left=`clamp(4px, ${e}%, calc(100% - 4px))`)},be=e=>{this.interactingBars.add(R),this.localSliderValues.delete(R),this.localSliderValues.set(R,V),this.localSliderValues=new Map(this.localSliderValues),me(L,e.target)},ye=e=>{this.interactingBars.delete(R)},fe="rgb"===e.type||"color_temp"===e.type,xe=(Z&&fe?15:0)+(Z&&fe?13:0),$e=`uc-slider-bar uc-layout-${x} uc-orientation-${y} uc-bar-type-${e.type}`,we=Z?`${le}px`:"100%",ke=Z?`${oe}px`:`${"minimal"===se?8:le}px`,Se="neon-glow"===se,ze=W;return o.qy`
        <div class="${$e}">
          ${!1!==_.show_bar_label&&"outside"!==x?o.qy`
                <div
                  class="uc-slider-label"
                  style="font-size: 11px; color: var(--secondary-text-color); text-transform: uppercase; font-weight: 600; margin-bottom: 4px;"
                >
                  ${F}
                </div>
              `:""}

          <div style="position: relative; ${Se?"overflow: visible;":""}">
            ${Se?o.qy`
                  <div
                    style="
                      position: absolute;
                      inset: 0;
                      background: ${ze};
                      border-radius: ${ge};
                      filter: blur(10px) saturate(1.5);
                      opacity: 0.6;
                      pointer-events: none;
                      z-index: 0;
                      transition: background 200ms ease;
                    "
                  ></div>
                `:""}
            <div
              class="slider-track-container uc-slider-track"
              data-uc-surface="${se}"
              data-uc-role="track"
              style="
                position: relative;
                height: ${ke};
                width: ${we};
                ${_e}
                transition: ${ue?`all ${e.transition_duration||_.transition_duration||200}ms ease`:"none"};
                overflow: ${"minimal"===se?"visible":"hidden"};
                ${"minimal"===se?"display: flex; align-items: center;":""}
                ${Z?"display: flex; justify-content: center; align-items: center;":""}
                --slider-height: ${le}px;
                ${Se?"z-index: 1;":""}
              "
            >
            ${pe&&!X?o.qy`
                  <div
                    style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  ${Z?`width: 100%; height: ${L}%;`:`height: 100%; width: ${L}%;`}
                  ${pe}
                  border-radius: ${ge};
                  pointer-events: none;
                  z-index: 1;
                  transition: ${ue?"width 80ms ease-out, height 80ms ease-out":"none"};
                "
                  ></div>
                `:""}

            <input
              type="range"
              min="0"
              max="100"
              step="${(()=>{var t,i,o;const a=null!==(t=e.min_value)&&void 0!==t?t:0,n=null!==(i=e.max_value)&&void 0!==i?i:100,r=null!==(o=e.step)&&void 0!==o?o:1,l=n-a;return l>0?r/l*100:1})()}"
              .value="${L}"
              aria-label="${F}"
              aria-valuemin="${null!==(S=e.min_value)&&void 0!==S?S:0}"
              aria-valuemax="${null!==(z=e.max_value)&&void 0!==z?z:100}"
              aria-valuenow="${(()=>{var t,i;const o=null!==(t=e.min_value)&&void 0!==t?t:0,a=null!==(i=e.max_value)&&void 0!==i?i:100;return Math.round(V/100*(a-o)+o)})()}"
              aria-valuetext="${C}${e.value_suffix||_.value_suffix||""}"
              @input=${t=>{const i=t.target,o=parseFloat(i.value),a=A?100-o:o;this.localSliderValues.set(R,a),this.localSliderValues=new Map(this.localSliderValues),me(A?100-a:a,t.target),ve&&clearTimeout(ve),ve=setTimeout(()=>{var t,i,o,n,r,l,s,c,d,u,h,v;try{if("light"===j){const t={entity_id:I};if("brightness"===e.type){const e=Math.round(a/100*255);t.brightness=e}else if("rgb"===e.type){const e=a/100,i=this.hsvToRgb(e,1,1);t.rgb_color=i}else if("red"===e.type){const e=Math.round(2.55*a),i=M.attributes.rgb_color||[255,255,255];t.rgb_color=[e,i[1],i[2]]}else if("green"===e.type){const e=Math.round(2.55*a),i=M.attributes.rgb_color||[255,255,255];t.rgb_color=[i[0],e,i[2]]}else if("blue"===e.type){const e=Math.round(2.55*a),i=M.attributes.rgb_color||[255,255,255];t.rgb_color=[i[0],i[1],e]}else if("color_temp"===e.type){const e=M.attributes.min_mireds||154,i=M.attributes.max_mireds||500,o=Math.round(i-a/100*(i-e));t.color_temp_kelvin=Math.round(1e6/o)}p.callService("light","turn_on",t)}else if("cover"===j)p.callService("cover","set_cover_position",{entity_id:I,position:Math.round(a)});else if("fan"===j)if("attribute"===e.type&&"percentage"===e.attribute){const n=null!==(t=e.min_value)&&void 0!==t?t:0,r=null!==(i=e.max_value)&&void 0!==i?i:100,l=null!==(o=e.step)&&void 0!==o?o:1;let s=a/100*(r-n)+n;s=Math.round(s/l)*l,s=Math.max(n,Math.min(r,s)),p.callService("fan","set_percentage",{entity_id:I,percentage:Math.round(s)})}else if("attribute"===e.type&&e.attribute){const t=null!==(n=e.min_value)&&void 0!==n?n:0,i=null!==(r=e.max_value)&&void 0!==r?r:100,o=null!==(l=e.step)&&void 0!==l?l:1;let s=a/100*(i-t)+t;s=Math.round(s/o)*o,s=Math.max(t,Math.min(i,s)),"volume_level"===e.attribute?p.callService("media_player","volume_set",{entity_id:I,volume_level:s/100}):console.warn(`No specific service handler for attribute: ${e.attribute}`)}else"numeric"!==e.type&&e.type||p.callService("fan","set_percentage",{entity_id:I,percentage:Math.round(a)});else if("media_player"===j){const t=null!==(s=e.min_value)&&void 0!==s?s:0,i=null!==(c=e.max_value)&&void 0!==c?c:100,o=null!==(d=e.step)&&void 0!==d?d:1;let n=a/100*(i-t)+t;o>0&&(n=Math.round(n/o)*o),n=Math.max(t,Math.min(i,n)),p.callService("media_player","volume_set",{entity_id:I,volume_level:Math.max(0,Math.min(1,n/100))})}else if("input_number"===j||"number"===j){const t=null!==(u=e.min_value)&&void 0!==u?u:0,i=null!==(h=e.max_value)&&void 0!==h?h:100;let o=a/100*(i-t)+t;const n=M.attributes,r=parseFloat(null==n?void 0:n.min),l=parseFloat(null==n?void 0:n.max),s=parseFloat(null==n?void 0:n.step),c=!isNaN(s)&&s>0?s:null!==(v=e.step)&&void 0!==v?v:1;if(c>0){const e=isNaN(r)?t:r;o=Math.round((o-e)/c)*c+e,o=parseFloat(o.toFixed(6))}isNaN(r)||(o=Math.max(r,o)),isNaN(l)||(o=Math.min(l,o)),p.callService(j,"set_value",{entity_id:I,value:o})}_.haptic_feedback&&"vibrate"in navigator&&navigator.vibrate(10)}catch(e){console.error("Failed to update entity:",e)}},200)}}
              @mousedown=${be}
              @mouseup=${ye}
              @touchstart=${be}
              @touchend=${ye}
              @touchcancel=${ye}
              @pointercancel=${ye}
              class="${"rgb"===e.type||"color_temp"===e.type?"gradient-slider "+(Z?"vertical-gradient-indicator":"horizontal-gradient-indicator"):"fill-slider"}"
              style="
                -webkit-appearance: none;
                appearance: none;
                width: ${Z?`${oe+xe}px`:"100%"};
                height: ${Z?fe?"32px":`${le}px`:"100%"};
                background: transparent;
                outline: none;
                cursor: pointer;
                position: absolute;
                top: ${Z?"50%":"0"};
                left: ${Z?"50%":"0"};
                z-index: 2;
                ${Z?"transform: translateX(-50%) translateY(-50%) rotate(270deg); transform-origin: center center;":""}
              "
            />

            ${fe?o.qy`
                  <div
                    class="slider-indicator ${Z?"vertical-indicator":"horizontal-indicator"}"
                    data-slider-key="${R}"
                    style="${Z?`top: clamp(4px, ${100-L}%, calc(100% - 4px));`:`left: clamp(4px, ${L}%, calc(100% - 4px));`};"
                  ></div>
                `:""}
            ${"overlay"===x?o.qy`
                  ${Z?(()=>{var t,i,a,n,r,s;const c=e.icon_position||"center",d=e.name_position||"center",u=e.value_position||"center",h=null===(i=null!==(t=e.auto_contrast)&&void 0!==t?t:_.auto_contrast)||void 0===i||i,v=L>50?"#000":"#fff",g=e.name_color||_.name_color||(h?v:"var(--primary-text-color)"),m=e.value_color||_.value_color||(h?v:"var(--primary-text-color)"),b=e.icon_color||_.icon_color||(h?v:"var(--primary-text-color)"),y=null===(n=null!==(a=e.icon_as_toggle)&&void 0!==a?a:_.icon_as_toggle)||void 0===n||n,f=y?async()=>{try{const e=I.split(".")[0],t="on"===(null==M?void 0:M.state)||"open"===(null==M?void 0:M.state);"light"===e?await p.callService("light",t?"turn_off":"turn_on",{entity_id:I}):"cover"===e?await p.callService("cover",t?"close_cover":"open_cover",{entity_id:I}):"fan"===e?await p.callService("fan",t?"turn_off":"turn_on",{entity_id:I}):"switch"===e&&await p.callService("switch",t?"turn_off":"turn_on",{entity_id:I}),this.localSliderValues.delete(R),this.localSliderValues=new Map(this.localSliderValues)}catch(e){console.error("Failed to toggle entity:",e)}}:void 0,x=[],$=[],w=[],k=O?o.qy`
                              <ha-icon
                                class="uc-slider-icon uc-overlay-info-item"
                                icon="${e.icon||_.icon||l.s.getEntityIcon(M,p)}"
                                style="
                              --mdc-icon-size: ${e.icon_size||_.icon_size||16}px;
                              color: ${b};
                              cursor: ${y?"pointer":"default"};
                              pointer-events: ${y?"auto":"none"};
                            "
                                @click=${f}
                              ></ha-icon>
                            `:null,S=q?o.qy`
                              <div
                                class="uc-slider-name uc-overlay-info-item"
                                style="
                              font-size: ${e.name_size||_.name_size||14}px;
                              color: ${g};
                              font-weight: ${null===(s=null!==(r=e.name_bold)&&void 0!==r?r:_.name_bold)||void 0===s||s?"bold":"normal"};
                              text-align: center;
                              writing-mode: vertical-rl;
                              text-orientation: mixed;
                            "
                              >
                                ${F}
                              </div>
                            `:null,z=B?o.qy`
                              <div
                                class="uc-slider-value uc-overlay-info-item"
                                style="
                              font-size: ${e.value_size||_.value_size||14}px;
                              color: ${m};
                              font-weight: 600;
                              text-align: center;
                            "
                              >
                                ${C}${"brightness"===e.type?e.value_suffix||_.value_suffix||"%":""}
                              </div>
                            `:null;k&&("top"===c?x.push(k):"bottom"===c?w.push(k):$.push(k)),S&&("top"===d?x.push(S):"bottom"===d?w.push(S):$.push(S)),z&&("top"===u?x.push(z):"bottom"===u?w.push(z):$.push(z));const j=this._renderStateElement(e,_,M,p,I);return j&&("top"===u?x.push(j):"bottom"===u?w.push(j):$.push(j)),o.qy`
                          <div
                            class="uc-overlay-info-container"
                            style="
                              position: absolute;
                              left: 50%;
                              transform: translateX(-50%);
                              pointer-events: none;
                              z-index: 3;
                              width: 100%;
                              top: 16px;
                              height: calc(100% - 32px);
                              display: grid;
                              grid-template-rows: auto 1fr auto;
                              justify-items: center;
                            "
                          >
                            <div
                              style="display: flex; flex-direction: column; align-items: center; gap: 4px;"
                            >
                              ${x}
                            </div>
                            <div
                              style="width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;"
                            >
                              ${$}
                            </div>
                            <div
                              style="display: flex; flex-direction: column; align-items: center; gap: 4px;"
                            >
                              ${w}
                            </div>
                          </div>
                        `})():o.qy`
                        <!-- Horizontal Overlay Layout with Individual Element Positioning -->
                        ${(()=>{var t,i,a,n,r,s;const c=e.icon_position||"left",d=e.name_position||"left",u=e.value_position||"right",h=null===(i=null!==(t=e.icon_as_toggle)&&void 0!==t?t:_.icon_as_toggle)||void 0===i||i,v=e.icon_size||_.icon_size||16,g=null===(n=null!==(a=e.auto_contrast)&&void 0!==a?a:_.auto_contrast)||void 0===n||n,m=g?L>50?"#000":"#fff":"",b=h?async()=>{try{const e=I.split(".")[0],t="on"===(null==M?void 0:M.state)||"open"===(null==M?void 0:M.state);"light"===e?await p.callService("light",t?"turn_off":"turn_on",{entity_id:I}):"cover"===e?await p.callService("cover",t?"close_cover":"open_cover",{entity_id:I}):"fan"===e?await p.callService("fan",t?"turn_off":"turn_on",{entity_id:I}):"switch"===e&&await p.callService("switch",t?"turn_off":"turn_on",{entity_id:I}),this.localSliderValues.delete(R),this.localSliderValues=new Map(this.localSliderValues)}catch(e){console.error("Failed to toggle entity:",e)}}:void 0,y=[],f=[],x=[],$=e.icon_color||_.icon_color||(g?m:"var(--primary-text-color)"),w=e.name_color||_.name_color||(g?m:"var(--primary-text-color)"),k=e.value_color||_.value_color||(g?m:"var(--primary-text-color)"),S=O?o.qy`
                                <ha-icon
                                  icon="${e.icon||_.icon||l.s.getEntityIcon(M,p)}"
                                  style="
                                    --mdc-icon-size: ${v}px;
                                    color: ${$};
                                    pointer-events: ${h?"auto":"none"};
                                    cursor: ${h?"pointer":"default"};
                                  "
                                  @click=${b}
                                ></ha-icon>
                              `:null,z=q?o.qy`
                                <div
                                  class="uc-slider-name"
                                  style="
                                    font-size: ${e.name_size||_.name_size||14}px;
                                    color: ${w};
                                    font-weight: ${null===(s=null!==(r=e.name_bold)&&void 0!==r?r:_.name_bold)||void 0===s||s?"bold":"normal"};
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    max-width: 150px;
                                  "
                                >
                                  ${F}
                                </div>
                              `:null,j=B?o.qy`
                                <div
                                  class="uc-slider-value"
                                  style="
                                    font-size: ${e.value_size||_.value_size||14}px;
                                    color: ${k};
                                    font-weight: 600;
                                  "
                                >
                                  ${C}${"brightness"===e.type?e.value_suffix||_.value_suffix||"%":""}
                                </div>
                              `:null;S&&("left"===c?y.push(S):"right"===c?x.push(S):f.push(S)),z&&("left"===d?y.push(z):"right"===d?x.push(z):f.push(z)),j&&("left"===u?y.push(j):"right"===u?x.push(j):f.push(j));const T=this._renderStateElement(e,_,M,p,I);return T&&("left"===u?y.push(T):"right"===u?x.push(T):f.push(T)),o.qy`
                            <div
                              style="position: absolute; inset: 0; pointer-events: none; z-index: 3;"
                            >
                              ${y.length?o.qy`
                                    <div
                                      style="
                                        position: absolute;
                                        left: 8px;
                                        top: 50%;
                                        transform: translateY(-50%);
                                        display: flex;
                                        align-items: center;
                                        gap: 8px;
                                      "
                                    >
                                      ${y}
                                    </div>
                                  `:""}
                              ${f.length?o.qy`
                                    <div
                                      style="
                                        position: absolute;
                                        left: 50%;
                                        top: 50%;
                                        transform: translate(-50%, -50%);
                                        display: flex;
                                        align-items: center;
                                        gap: 8px;
                                      "
                                    >
                                      ${f}
                                    </div>
                                  `:""}
                              ${x.length?o.qy`
                                    <div
                                      style="
                                        position: absolute;
                                        right: 8px;
                                        top: 50%;
                                        transform: translateY(-50%);
                                        display: flex;
                                        align-items: center;
                                        gap: 8px;
                                      "
                                    >
                                      ${x}
                                    </div>
                                  `:""}
                            </div>
                          `})()}
                      `}
                `:""}
          </div>
          </div>
        </div>
      `},I=b.map((e,t)=>z(e));let M;if("outside"===x){const e=b.map((e,t)=>{var a,n,r,s,c,d,u,h,v,g,m,b,y;const f=this.resolveEntity(e.entity,i)||e.entity,k=null===(a=null==p?void 0:p.states)||void 0===a?void 0:a[f],S=e.name||(null==k?void 0:k.attributes.friendly_name)||f;let I="0";if(k)switch(e.type){case"brightness":{const e=k.attributes.brightness||0;I=`${Math.round(e/255*100)}`;break}case"rgb":{const e=k.attributes.rgb_color||[255,255,255];I=`rgb(${e[0]}, ${e[1]}, ${e[2]})`;break}case"color_temp":{const e=k.attributes.color_mode;if(e&&["rgb","hs","xy","rgbw","rgbww"].includes(e)){const e=k.attributes.rgb_color;if(Array.isArray(e)&&3===e.length){const[t,,i]=e,o=Math.max(0,Math.min(1,(t-i+255)/510)),a=k.attributes.min_mireds||154,n=a+o*((k.attributes.max_mireds||500)-a);I=`~${Math.round(1e6/n)}K`}else{const e=k.attributes.color_temp_kelvin||(k.attributes.color_temp?Math.round(1e6/k.attributes.color_temp):6500);I=`${Math.round(e)}K`}}else{const e=k.attributes.color_temp_kelvin||(k.attributes.color_temp?Math.round(1e6/k.attributes.color_temp):6500);I=`${Math.round(e)}K`}break}case"red":case"green":case"blue":I=`${(k.attributes.rgb_color||[255,255,255])["red"===e.type?0:"green"===e.type?1:2]}`;break;case"attribute":if(e.attribute&&void 0!==k.attributes[e.attribute]){const t=parseFloat(k.attributes[e.attribute])||0;I=`${Math.round(t)}`,"percentage"===e.attribute&&(I+="%")}else I="0";break;default:I=`${k.state}`}const M=z(e),j=(!1!==e.show_icon&&_.show_icon,e.icon_size||_.icon_size||16);if($){const t=e.icon_position||"left_top",i=e.name_position||"left_top",a=e.value_position||"left_bottom",h=!1!==e.show_icon&&!1!==_.show_icon,v=!1!==e.show_name&&!1!==_.show_name,g=!1!==e.show_value&&!1!==_.show_value,m={left_top:[],left_center:[],left_bottom:[],right_top:[],right_center:[],right_bottom:[]},b=null===(r=null!==(n=e.icon_as_toggle)&&void 0!==n?n:_.icon_as_toggle)||void 0===r||r,y=`${e.entity}-${e.type}`,$=b?async()=>{try{const e=f.split(".")[0],t="on"===(null==k?void 0:k.state)||"open"===(null==k?void 0:k.state);"light"===e?await p.callService("light",t?"turn_off":"turn_on",{entity_id:f}):"cover"===e?await p.callService("cover",t?"close_cover":"open_cover",{entity_id:f}):"fan"===e&&await p.callService("fan",t?"turn_off":"turn_on",{entity_id:f}),this.localSliderValues.delete(y),this.localSliderValues=new Map(this.localSliderValues)}catch(e){console.error("Failed to toggle entity:",e)}}:void 0,z=e.icon_color||_.icon_color||((null===(c=null!==(s=e.dynamic_icon)&&void 0!==s?s:_.dynamic_icon)||void 0===c||c)&&(null==k?void 0:k.attributes.rgb_color)?`rgb(${k.attributes.rgb_color.join(",")})`:"var(--secondary-text-color)"),F=h?o.qy`
                <ha-icon
                  icon="${l.s.getEntityIcon(k,p)}"
                  style="
                --mdc-icon-size: ${j}px;
                color: ${z};
                cursor: ${b?"pointer":"default"};
                pointer-events: ${b?"auto":"none"};
              "
                  @click=${$}
                ></ha-icon>
              `:null,O=v?o.qy`
                <div
                  class="uc-slider-name"
                  style="
                writing-mode: vertical-rl;
                text-orientation: mixed;
                font-size: ${e.name_size||_.name_size||16}px;
                color: ${e.name_color||_.name_color||"var(--primary-text-color)"};
                font-weight: ${null===(u=null!==(d=e.name_bold)&&void 0!==d?d:_.name_bold)||void 0===u||u?"500":"normal"};
              "
                >
                  ${S}
                </div>
              `:null,q=g?o.qy`
                <div
                  class="uc-slider-value"
                  style="
                writing-mode: vertical-rl;
                text-orientation: mixed;
                font-size: ${e.value_size||_.value_size||14}px;
                color: ${e.value_color||_.value_color||"var(--secondary-text-color)"};
              "
                >
                  ${I}${"brightness"===e.type?e.value_suffix||_.value_suffix||"%":""}
                </div>
              `:null;F&&m[t]&&m[t].push(F),O&&m[i]&&m[i].push(O),q&&m[a]&&m[a].push(q);const B=this._renderStateElement(e,_,k,p,f,!0);B&&m[a]&&m[a].push(B);const T=m.left_top.length+m.left_center.length+m.left_bottom.length>0,C=m.right_top.length+m.right_center.length+m.right_bottom.length>0,E=w,R=e=>{const t=m[`${e}_top`],i=m[`${e}_center`],a=m[`${e}_bottom`];return t.length+i.length+a.length>0?o.qy`
              <div
                style="display: flex; flex-direction: column; height: ${E}px; justify-content: space-between;"
              >
                <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
                  ${t}
                </div>
                <div
                  style="display: flex; flex-direction: column; gap: 4px; align-items: center; justify-content: center; flex: 1;"
                >
                  ${i}
                </div>
                <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
                  ${a}
                </div>
              </div>
            `:o.qy``};return o.qy`
            <div
              class="uc-slider-item uc-layout-${x} uc-orientation-vertical uc-bar-type-${e.type}"
              style="display: flex; align-items: flex-start; justify-content: center; gap: 8px; height: ${w}px;"
            >
              ${T?R("left"):""}
              <div
                style="height: ${E}px; display: flex; align-items: center; justify-content: center;"
              >
                ${M}
              </div>
              ${C?R("right"):""}
            </div>
          `}{const t=e.icon_position||"top_left",i=e.name_position||"top_left",a=e.value_position||"top_right",n=!1!==e.show_icon&&!1!==_.show_icon,r=!1!==e.show_name&&!1!==_.show_name,s=!1!==e.show_value&&!1!==_.show_value,c={top_left:[],top_center:[],top_right:[],bottom_left:[],bottom_center:[],bottom_right:[]},d=null===(v=null!==(h=e.icon_as_toggle)&&void 0!==h?h:_.icon_as_toggle)||void 0===v||v,u=`${e.entity}-${e.type}`,$=d?async()=>{try{const e=f.split(".")[0],t="on"===(null==k?void 0:k.state)||"open"===(null==k?void 0:k.state);"light"===e?await p.callService("light",t?"turn_off":"turn_on",{entity_id:f}):"cover"===e?await p.callService("cover",t?"close_cover":"open_cover",{entity_id:f}):"fan"===e&&await p.callService("fan",t?"turn_off":"turn_on",{entity_id:f}),this.localSliderValues.delete(u),this.localSliderValues=new Map(this.localSliderValues)}catch(e){console.error("Failed to toggle entity:",e)}}:void 0,w=e.icon_color||_.icon_color||((null===(m=null!==(g=e.dynamic_icon)&&void 0!==g?g:_.dynamic_icon)||void 0===m||m)&&(null==k?void 0:k.attributes.rgb_color)?`rgb(${k.attributes.rgb_color.join(",")})`:"var(--secondary-text-color)"),z=n?o.qy`
                <ha-icon
                  icon="${l.s.getEntityIcon(k,p)}"
                  style="
                --mdc-icon-size: ${e.icon_size||_.icon_size||16}px;
                color: ${w};
                cursor: ${d?"pointer":"default"};
                pointer-events: ${d?"auto":"none"};
              "
                  @click=${$}
                ></ha-icon>
              `:null,j=r?o.qy`
                <div
                  class="uc-slider-name"
                  style="
                font-size: ${e.name_size||_.name_size||14}px;
                color: ${e.name_color||_.name_color||"var(--secondary-text-color)"};
                font-weight: ${null===(y=null!==(b=e.name_bold)&&void 0!==b?b:_.name_bold)||void 0===y||y?"600":"normal"};
                line-height: 1;
              "
                >
                  ${S}
                </div>
              `:null,F=s?o.qy`
                <div
                  class="uc-slider-value"
                  style="
                font-size: ${e.value_size||_.value_size||14}px;
                color: ${e.value_color||_.value_color||"var(--secondary-text-color)"};
                font-weight: 600;
              "
                >
                  ${I}${"brightness"===e.type?e.value_suffix||_.value_suffix||"%":""}
                </div>
              `:null;z&&c[t]&&c[t].push(z),j&&c[i]&&c[i].push(j),F&&c[a]&&c[a].push(F);const O=this._renderStateElement(e,_,k,p,f);O&&c[a]&&c[a].push(O);const q=c.top_left.length+c.top_center.length+c.top_right.length>0,B=c.bottom_left.length+c.bottom_center.length+c.bottom_right.length>0,T=e=>{const t=c[`${e}_left`],i=c[`${e}_center`],a=c[`${e}_right`];return t.length+i.length+a.length>0?o.qy`
              <div
                style="display: flex; justify-content: space-between; align-items: center; width: 100%; ${"top"===e?"margin-bottom: 4px;":"margin-top: 4px;"}"
              >
                <div style="display: flex; align-items: center; gap: 8px;">${t}</div>
                <div style="display: flex; align-items: center; gap: 8px;">${i}</div>
                <div style="display: flex; align-items: center; gap: 8px;">${a}</div>
              </div>
            `:o.qy``},C=o.qy`
            ${q?T("top"):""}
            ${B?T("bottom"):""}
          `;return o.qy`
            <div
              class="uc-slider-item uc-layout-${x} uc-orientation-horizontal uc-bar-type-${e.type}"
            >
              ${C}${M}
            </div>
          `}});M=o.qy`
        <div
          class="${k}"
          style="display: flex; flex-direction: ${$?"row":"column"}; width: 100%; gap: ${f}px; align-items: ${$?"flex-start":"stretch"};"
        >
          ${e}
        </div>
      `}else if("overlay"===x)M=o.qy`
        <div
          class="${k}"
          style="position: relative; ${$?"display: flex; flex-direction: column; align-items: center; justify-content: center;":""}"
        >
          <div
            class="uc-slider-items"
            style="display: flex; ${$?"flex-direction: row; gap: "+f+"px; justify-content: center; align-items: center;":"flex-direction: column; gap: "+f+"px;"} width: 100%;"
          >
            ${I}
          </div>
        </div>
      `;else{_.split_bar_position;const e=null!==(s=_.split_bar_length)&&void 0!==s?s:60,t=b.map((t,a)=>{var n,r;const s=this.resolveEntity(t.entity,i)||t.entity,c=null===(n=null==p?void 0:p.states)||void 0===n?void 0:n[s],d=t.name||(null==c?void 0:c.attributes.friendly_name)||s,u=t.info_section_position||($?"top":"left"),h=$?"bottom"===u?"left":"right":"right"===u?"left":"right",v=null!==(r=t.split_bar_length)&&void 0!==r?r:e,g=!1!==t.show_icon&&!1!==_.show_icon,m=!1!==t.show_name&&!1!==_.show_name,b=!1!==t.show_value&&!1!==_.show_value,y=$?100===v?"min-height: 200px; height: 100%;":`height: ${v}%; min-height: ${Math.floor(200*v/100)}px;`:`width: ${v}%;`,f=$?`height: ${100-v}%;`:`width: ${100-v}%;`,w=v<100;let k="0";if(c)switch(t.type){case"brightness":{const e=c.attributes.brightness||0;k=`${Math.round(e/255*100)}`;break}case"rgb":{const e=c.attributes.rgb_color||[255,255,255];k=`rgb(${e[0]}, ${e[1]}, ${e[2]})`;break}case"color_temp":{const e=c.attributes.color_mode;if(e&&["rgb","hs","xy","rgbw","rgbww"].includes(e)){const e=c.attributes.rgb_color;if(Array.isArray(e)&&3===e.length){const[t,,i]=e,o=Math.max(0,Math.min(1,(t-i+255)/510)),a=c.attributes.min_mireds||154,n=a+o*((c.attributes.max_mireds||500)-a);k=`~${Math.round(1e6/n)}K`}else{const e=c.attributes.color_temp_kelvin||(c.attributes.color_temp?Math.round(1e6/c.attributes.color_temp):6500);k=`${Math.round(e)}K`}}else{const e=c.attributes.color_temp_kelvin||(c.attributes.color_temp?Math.round(1e6/c.attributes.color_temp):6500);k=`${Math.round(e)}K`}break}case"red":case"green":case"blue":{const e=c.attributes.rgb_color||[255,255,255],i="red"===t.type?0:"green"===t.type?1:2;k=`${e[i]}`;break}case"attribute":if(t.attribute&&void 0!==c.attributes[t.attribute]){const e=parseFloat(c.attributes[t.attribute])||0;k=`${Math.round(e)}`,"percentage"===t.attribute&&(k+="%")}else k="0";break;default:k=`${c.state}`}const I=z(t),M=`uc-slider-item uc-layout-${x} ${$?"uc-orientation-vertical":"uc-orientation-horizontal"} uc-bar-type-${t.type}`,j=S&&$?"stretch":"center",F=()=>{var e,i,a,n,r,u;if(!w)return o.qy``;const h=null===(i=null!==(e=t.icon_as_toggle)&&void 0!==e?e:_.icon_as_toggle)||void 0===i||i,v=`${t.entity}-${t.type}`,y=h?async()=>{try{const e=s.split(".")[0],t="on"===(null==c?void 0:c.state)||"open"===(null==c?void 0:c.state);"light"===e?await p.callService("light",t?"turn_off":"turn_on",{entity_id:s}):"cover"===e?await p.callService("cover",t?"close_cover":"open_cover",{entity_id:s}):"fan"===e&&await p.callService("fan",t?"turn_off":"turn_on",{entity_id:s}),this.localSliderValues.delete(v),this.localSliderValues=new Map(this.localSliderValues)}catch(e){console.error("Failed to toggle entity:",e)}}:void 0,x=[],S=t.icon_color||_.icon_color||((null===(n=null!==(a=t.dynamic_icon)&&void 0!==a?a:_.dynamic_icon)||void 0===n||n)&&(null==c?void 0:c.attributes.rgb_color)?`rgb(${c.attributes.rgb_color.join(",")})`:"var(--primary-text-color)");g&&x.push(o.qy`
              <ha-icon
                icon="${l.s.getEntityIcon(c,p)}"
                style="
                  --mdc-icon-size: ${t.icon_size||_.icon_size||16}px;
                  color: ${S};
                  cursor: ${h?"pointer":"default"};
                  pointer-events: ${h?"auto":"none"};
                "
                @click=${y}
              ></ha-icon>
            `),m&&x.push(o.qy`
              <div
                class="uc-slider-name"
                style="
                  font-size: ${t.name_size||_.name_size||16}px;
                  color: ${t.name_color||_.name_color||"var(--primary-text-color)"};
                  font-weight: ${null===(u=null!==(r=t.name_bold)&&void 0!==r?r:_.name_bold)||void 0===u||u?"500":"normal"};
                "
              >
                ${d}
              </div>
            `),b&&x.push(o.qy`
              <div
                class="uc-slider-value"
                style="
                  font-size: ${t.value_size||_.value_size||14}px;
                  color: ${t.value_color||_.value_color||"var(--secondary-text-color)"};
                "
              >
                ${k}${"brightness"===t.type?t.value_suffix||_.value_suffix||"%":""}
              </div>
            `);const z=this._renderStateElement(t,_,c,p,s);return z&&x.push(z),o.qy`
            <div
              class="uc-slider-info"
              style="${f} display: flex; align-items: center; justify-content: center; ${$?"flex-direction: column; text-align: center;":"flex-direction: row;"} gap: 8px;"
            >
              ${x}
            </div>
          `};return o.qy`
          <div
            class="${M}"
            style="display: flex; align-items: ${j}; ${$?"flex-direction: column; height: 100%;":"width: 100%;"}"
          >
            ${"left"===h?o.qy`
                  ${F()}
                  <div
                    class="uc-slider-track-wrapper"
                    style="${y} ${$?"display: flex; justify-content: center; align-items: stretch;":""}"
                  >
                    ${I}
                  </div>
                `:o.qy`
                  <div
                    class="uc-slider-track-wrapper"
                    style="${y} ${$?"display: flex; justify-content: center; align-items: stretch;":""}"
                  >
                    ${I}
                  </div>
                  ${F()}
                `}
          </div>
        `});M=o.qy`
        <div
          class="${k}"
          style="display: flex; flex-direction: ${$?"row":"column"}; width: 100%; ${$?"height: 100%;":""} gap: ${f}px; align-items: ${"stretch"}; justify-content: ${$?"center":"stretch"};"
        >
          ${t}
        </div>
      `}const j=(null===(u=_.design)||void 0===u?void 0:u.background_color)||_.background_color||"",F=j?`background: ${j};`:"",O=b.some(e=>"neon-glow"===(0,c.NS)(i,"slider_control","slider_style",e.slider_style||_.slider_style,"flat"))?"overflow: visible;":S?"overflow: hidden;":"",q=this.getHoverEffectClass(e),B=this.buildStyleString(this.buildDesignStyles(e,t)),T=[_.tap_action,_.hold_action,_.double_tap_action].some(e=>e&&e.action&&"nothing"!==e.action),C=v[0]?this.resolveEntity(v[0].entity,i)||v[0].entity:void 0,E=T?this.createGestureHandlers(`slider-control-${_.id}`,{tap_action:_.tap_action,hold_action:_.hold_action,double_tap_action:_.double_tap_action,entity:C,module:_},t,i,[".slider-track-container",'input[type="range"]',"ha-icon"]):null,R=E?Object.assign(Object.assign({},E),{onPointerUp:e=>{this.interactingBars.size>0||E.onPointerUp(e)}}):null;return this.wrapWithAnimation(o.qy`
      <div
        class="slider-control-container ${k} ${q}" data-uc-role="pane"
        style="${B}; padding: 16px; position: relative; ${F} ${$?"display: flex; justify-content: center; align-items: center; min-height: 200px;":""} ${O}"
        @pointerdown=${null==R?void 0:R.onPointerDown}
        @pointermove=${null==R?void 0:R.onPointerMove}
        @pointerup=${null==R?void 0:R.onPointerUp}
        @pointerleave=${null==R?void 0:R.onPointerLeave}
        @pointercancel=${null==R?void 0:R.onPointerCancel}
      >
        ${m}
        <style>
          .slider-control-container input[type='range']::-webkit-slider-track {
            background: transparent;
            height: 100%;
          }
          .slider-control-container input[type='range']::-moz-range-track {
            background: transparent;
            height: 100%;
          }

          /* Fill sliders (brightness, numeric) - no thumb, just fill/empty cut line */
          .slider-control-container input.fill-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 0;
            height: 0;
            background: transparent;
            border: none;
            cursor: pointer;
          }
          .slider-control-container input.fill-slider::-moz-range-thumb {
            width: 0;
            height: 0;
            background: transparent;
            border: none;
            cursor: pointer;
          }

          /* Gradient slider thumb styling */
          .slider-control-container
            .slider-track-container
            input.gradient-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 1px;
            height: var(--slider-height, 55px);
            border: none;
            background: transparent;
            cursor: pointer;
            margin: 0;
            opacity: 0;
          }
          .slider-control-container
            .slider-track-container
            input.gradient-slider::-moz-range-thumb {
            width: 1px;
            height: var(--slider-height, 55px);
            border: none;
            background: transparent;
            cursor: pointer;
            margin: 0;
            opacity: 0;
          }

          .slider-control-container .slider-track-container .slider-indicator {
            position: absolute;
            background: rgba(0, 0, 0, 0.3);
            border: 2px solid #ffffff;
            border-radius: var(--uc-r-4, 4px);
            box-shadow:
              0 0 8px rgba(0, 0, 0, 0.5),
              inset 0 0 3px rgba(255, 255, 255, 0.2);
            pointer-events: none;
            will-change: top, left;
            transition:
              top 80ms ease-out,
              left 80ms ease-out;
            z-index: 3;
          }
          .slider-control-container .slider-track-container .slider-indicator.horizontal-indicator {
            width: 8px;
            height: var(--slider-height, 55px);
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .slider-control-container .slider-track-container .slider-indicator.vertical-indicator {
            height: 8px;
            width: var(--slider-height, 55px);
            left: 50%;
            transform: translate(-50%, -50%);
          }
        </style>

        ${M}
      </div>
    `,e,t)}resolveDynamicFillColor(e,t,i){if(!t||!t.attributes)return i;const o=t.attributes,a=o.color_mode,n=()=>{const e=o.color_temp||(o.color_temp_kelvin?Math.round(1e6/o.color_temp_kelvin):0);if(!e)return null;const t=o.min_mireds||154,i=o.max_mireds||500,[a,n,r]=this.colorTempToDisplayRGB(e,t,i);return`rgb(${a}, ${n}, ${r})`},r=()=>{if(Array.isArray(o.rgb_color)&&3===o.rgb_color.length){const[e,t,i]=o.rgb_color;return`rgb(${e}, ${t}, ${i})`}if(Array.isArray(o.hs_color)&&o.hs_color.length>=2){const[e,t]=o.hs_color,i=this.hsvToRgb((null!=e?e:0)%360/360,Math.max(0,Math.min(100,null!=t?t:100))/100,1);return`rgb(${i[0]}, ${i[1]}, ${i[2]})`}return null};return"color_temp"===a?n()||i:a&&["rgb","hs","xy","rgbw","rgbww"].includes(a)?r()||n()||i:r()||n()||("string"==typeof o.color&&o.color.trim()?o.color:i)}colorTempToDisplayRGB(e,t,i){const o=[[255,147,41],[255,180,112],[255,220,177],[255,246,213],[255,255,255],[230,240,255],[208,232,255],[169,200,255],[130,170,255]],a=Math.max(0,Math.min(1,(i-e)/(i-t)))*(o.length-1),n=Math.floor(a),r=Math.min(o.length-1,n+1),l=a-n;return[Math.round(o[n][0]+l*(o[r][0]-o[n][0])),Math.round(o[n][1]+l*(o[r][1]-o[n][1])),Math.round(o[n][2]+l*(o[r][2]-o[n][2]))]}rgbToHue(e,t,i){const o=e/255,a=t/255,n=i/255,r=Math.max(o,a,n),l=r-Math.min(o,a,n);if(0===l)return 0;let s=0;return s=r===o?(a-n)/l%6/6:r===a?((n-o)/l+2)/6:((o-a)/l+4)/6,s<0&&(s+=1),s>1&&(s-=1),100*s}hsvToRgb(e,t,i){const o=i*t,a=o*(1-Math.abs(6*e%2-1)),n=i-o;let r=0,l=0,s=0;return e<1/6?(r=o,l=a,s=0):e<2/6?(r=a,l=o,s=0):e<.5?(r=0,l=o,s=a):e<4/6?(r=0,l=a,s=o):e<5/6?(r=a,l=0,s=o):(r=o,l=0,s=a),[Math.round(255*(r+n)),Math.round(255*(l+n)),Math.round(255*(s+n))]}extractRgbFromColor(e){if(e.startsWith("#")){const t=e.substring(1);if(3===t.length)return[parseInt(t[0]+t[0],16),parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16)];if(6===t.length)return[parseInt(t.substring(0,2),16),parseInt(t.substring(2,4),16),parseInt(t.substring(4,6),16)]}const t=e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);if(t)return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])];const i=e.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);if(i)return[parseInt(i[1]),parseInt(i[2]),parseInt(i[3])];if(e.includes("gradient")){const t=e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);if(t)return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])];const i=e.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/);if(i){const e=i[1];return 3===e.length?[parseInt(e[0]+e[0],16),parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16)]:[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4,6),16)]}}return[33,150,243]}colorTemperatureToRGB(e){const t=e/100;let i,o,a;t<=66?(i=255,o=99.4708025861*Math.log(Math.max(1,t))-161.1195681661,a=t<=19?0:138.5177312231*Math.log(Math.max(1,t-10))-305.0447927307):(i=329.698727446*Math.pow(t-60,-.1332047592),o=288.1221695283*Math.pow(t-60,-.0755148492),a=255);const n=e=>Math.max(0,Math.min(255,Math.round(e)));return[n(i),n(o),n(a)]}validate(e){const t=e,i=[...super.validate(e).errors];return t.bars&&t.bars.length>0&&t.bars.forEach((e,t)=>{e.entity&&""!==e.entity.trim()&&void 0!==e.min_value&&void 0!==e.max_value&&e.min_value>=e.max_value&&i.push(`Bar ${t+1}: Min value must be less than max value`)}),t.slider_height&&(t.slider_height<20||t.slider_height>200)&&i.push("Slider height must be between 20 and 200 pixels"),{valid:0===i.length,errors:i}}getStyles(){return`\n      ${a.m.getSliderStyles()}\n      /* Placeholder for styles */\n    `}}},571(e,t,i){i.d(t,{s:()=>o});class o{static getEntityIcon(e,t){if("object"==typeof e&&null!==e&&!Array.isArray(e)){const i=e.entity_id;if("string"==typeof i&&i)e=i;else if(null==t?void 0:t.states)for(const[i,o]of Object.entries(t.states))if(o===e){e=i;break}if("string"!=typeof e)return this._getEnhancedIconForEntity("unknown",e)}if(!e||!(null==t?void 0:t.states[e]))return null;const i=t.states[e];return this._getHomeAssistantComputedIcon(e,i,t)||this._getEnhancedIconForEntity(e,i)}static _getHomeAssistantComputedIcon(e,t,i){var o,a,n,r,l;if(null===(o=t.attributes)||void 0===o?void 0:o.icon)return t.attributes.icon;try{if(null===(n=null===(a=window.customCards)||void 0===a?void 0:a.helpers)||void 0===n?void 0:n.stateIcon){const e=window.customCards.helpers.stateIcon(t);if(e)return e}const o=[window.stateIcon,window.computeStateIcon,window.computeEntityIcon,null===(r=window.hassIcons)||void 0===r?void 0:r.stateIcon,null===(l=window.hassIcons)||void 0===l?void 0:l.computeStateIcon,i.stateIcon,i.computeStateIcon,i.computeEntityIcon];for(const e of o)if("function"==typeof e)try{const i=e(t);if(i)return i}catch(e){}if(i.entities&&i.entities[e]){const t=i.entities[e];if(t.icon)return t.icon}if(e.startsWith("weather.")){const e={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:weather-exceptional"},i=t.state;if(e[i])return e[i]}}catch(e){console.debug("Failed to compute HA icon, falling back to enhanced detection:",e)}return null}static _getEnhancedIconForEntity(e,t){var i,o,a;const n=e.split(".")[0],r=e.split(".")[1]||"",l=null===(i=t.attributes)||void 0===i?void 0:i.device_class,s=null===(o=t.attributes)||void 0===o?void 0:o.unit_of_measurement,c=(null===(a=t.attributes)||void 0===a?void 0:a.friendly_name)||"",d=t.state,u=r.toLowerCase(),_=c.toLowerCase();return this._isBatteryRelated(u,_,l,s)?this._isChargingRelated(u,_)?this._getChargingBatteryIcon(d,s):this._getBatteryIcon(d,s):this._isTemperatureRelated(u,_,l,s)?"mdi:thermometer":this._isHumidityRelated(u,_,l,s)?"mdi:water-percent":this._isPowerRelated(u,_,l,s)?"mdi:flash":this._isSignalRelated(u,_)?"mdi:wifi":"binary_sensor"===n&&this._isDoorWindowRelated(u,_)?"on"===d?"mdi:door-open":"mdi:door-closed":"binary_sensor"===n&&this._isMotionRelated(u,_)?"on"===d?"mdi:motion-sensor":"mdi:motion-sensor-off":this._isIlluminanceRelated(u,_,l,s)?"mdi:brightness-5":this._isPressureRelated(u,_,l,s)?"mdi:gauge":this._getDefaultIconForDomain(n,l,d)}static _isBatteryRelated(e,t,i,o){return"battery"===i||e.includes("battery")||e.includes("charge")||e.includes("power_level")||t.includes("battery")||t.includes("charge")||"%"===o}static _isChargingRelated(e,t){return["charging","charge_target","charging_target","charge_limit"].some(i=>e.includes(i)||t.toLowerCase().includes(i))}static _getBatteryIcon(e,t){const i=parseFloat(e);return isNaN(i)?"mdi:battery-unknown":i>=95?"mdi:battery":i>=85?"mdi:battery-90":i>=75?"mdi:battery-80":i>=65?"mdi:battery-70":i>=55?"mdi:battery-60":i>=45?"mdi:battery-50":i>=35?"mdi:battery-40":i>=25?"mdi:battery-30":i>=15?"mdi:battery-20":i>=5?"mdi:battery-10":"mdi:battery-alert"}static _getChargingBatteryIcon(e,t){const i=parseFloat(e);return isNaN(i)?"mdi:battery-charging":i>=95?"mdi:battery-charging-100":i>=85?"mdi:battery-charging-90":i>=75?"mdi:battery-charging-80":i>=65?"mdi:battery-charging-70":i>=55?"mdi:battery-charging-60":i>=45?"mdi:battery-charging-50":i>=35?"mdi:battery-charging-40":i>=25?"mdi:battery-charging-30":i>=15?"mdi:battery-charging-20":i>=5?"mdi:battery-charging-10":"mdi:battery-charging-outline"}static _isTemperatureRelated(e,t,i,o){return"temperature"===i||e.includes("temp")||t.includes("temperature")||"°C"===o||"°F"===o||"K"===o}static _isHumidityRelated(e,t,i,o){return"humidity"===i||e.includes("humidity")||t.includes("humidity")||"%"===o&&(e.includes("humid")||t.includes("humid"))}static _isPowerRelated(e,t,i,o){return"power"===i||"energy"===i||e.includes("power")||e.includes("energy")||e.includes("consumption")||"W"===o||"kW"===o||"kWh"===o||"Wh"===o}static _isSignalRelated(e,t){return["signal","rssi","wifi","network"].some(i=>e.includes(i)||t.toLowerCase().includes(i))}static _isDoorWindowRelated(e,t){return["door","window","gate"].some(i=>e.includes(i)||t.toLowerCase().includes(i))}static _isMotionRelated(e,t){return["motion","movement","occupancy","presence"].some(i=>e.includes(i)||t.toLowerCase().includes(i))}static _isIlluminanceRelated(e,t,i,o){return"illuminance"===i||e.includes("illuminance")||e.includes("brightness")||e.includes("lux")||"lx"===o||"lux"===o}static _isPressureRelated(e,t,i,o){return"pressure"===i||e.includes("pressure")||t.includes("pressure")||"hPa"===o||"mbar"===o||"Pa"===o||"psi"===o}static _getDefaultIconForDomain(e,t,i){return{alarm_control_panel:"mdi:shield",automation:"mdi:robot",binary_sensor:"mdi:radiobox-blank",button:"mdi:button-pointer",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",cover:"mdi:window-shutter",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",humidifier:"mdi:air-humidifier",input_boolean:"mdi:toggle-switch",input_button:"mdi:button-pointer",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:form-textbox",light:"mdi:lightbulb",lock:"mdi:lock",media_player:"mdi:speaker",number:"mdi:ray-vertex",person:"mdi:account",plant:"mdi:flower",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:script-text",select:"mdi:format-list-bulleted",sensor:"mdi:eye",siren:"mdi:bullhorn",sun:"mdi:white-balance-sunny",switch:"mdi:toggle-switch",timer:"mdi:timer",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weather:"mdi:weather-partly-cloudy",zone:"mdi:map-marker"}[e]||"mdi:eye"}}}};