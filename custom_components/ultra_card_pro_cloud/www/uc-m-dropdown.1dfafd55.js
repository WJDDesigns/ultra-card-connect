export const __webpack_esm_ids__=[5322];export const __webpack_esm_modules__={3815(e,t,o){o.d(t,{UltraDropdownModule:()=>f});var n=o(2618),i=o(6478),r=o(7475),s=o(8938),a=o(9957),l=o(5320),d=o(5155),c=o(9327),p=o(9286),u=o(1172),m=o(1001),h=o(3361);function g(e){return null==e||/^[\s\u2800]*$/.test(e)}function v(e,t){const o=Math.min(e.left,t.left),n=Math.min(e.top,t.top),i=Math.max(e.right,t.right),r=Math.max(e.bottom,t.bottom);return{left:o,top:n,right:i,bottom:r,width:i-o,height:r-n}}o(7921);const y=["options","display","label","name","icon","icon_color","use_state_color","mode","value"];class f extends r.m{constructor(){super(...arguments),this.metadata={type:"dropdown",title:"Dropdown",description:"Interactive dropdown selector with Home Assistant actions",author:"WJD Designs",version:"1.0.0",icon:"mdi:menu-down",category:"interactive",tags:["dropdown","select","menu","scene","service","interactive"]},this.expandedOptions=new Set,this.dropdownOpenStates=new Map,this.currentSelection=new Map,this.clickOutsideHandler=null,this.clickOutsideKeydownHandler=null,this.scrollHandler=null,this.resizeHandler=null,this.portaledDropdowns=new Map,this.portaledDropdownTriggers=new Map,this.portalOrphanSweep=0,this.scrollListenerParents=new Map,this.portaledDropdownListeners=new Map,this.activeScrollHandlers=new Set,this.moduleContexts=new Map,this.chevronClickHandling=new Set,this.draggedIndex=null}createDefault(e,t){return{id:e||this.generateId("dropdown"),type:"dropdown",source_mode:"manual",source_entity:void 0,placeholder:"Choose an option...",options:[{id:this.generateId("option"),label:"Turn On Lights",action:{action:"perform-action",service:"light.turn_on",target:{entity_id:["light.living_room"]}}},{id:this.generateId("option"),label:"Turn Off Lights",action:{action:"perform-action",service:"light.turn_off",target:{entity_id:["light.living_room"]}}}],entity_option_customization:{},current_selection:"Turn On Lights",track_state:!0,closed_title_mode:"last_chosen",closed_title_entity:void 0,closed_title_custom:"",unified_template_mode:!1,unified_template:"",control_icon:"mdi:chevron-down",control_alignment:"apart",control_icon_side:"right",menu_direction:"auto",visible_items:5,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[],enable_hover_effect:!1,hover_background_color:"var(--primary-color)"}}getOptionsFromEntity(e,t,o){var n;if(!e.source_entity||!t)return[];const i=this.resolveEntity(e.source_entity,o)||e.source_entity,r=t.states[i];if(!r)return[];const s=null===(n=r.attributes)||void 0===n?void 0:n.options;return Array.isArray(s)?s:[]}formatOptionLabel(e,t,o){if(null==e)return"";if(t&&o.formatEntityState)try{const n=Object.assign(Object.assign({},t),{state:e}),i=o.formatEntityState(n,e);if(i&&i!==e)return i}catch(e){}return String(e).replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase())}getCurrentStateFromEntity(e,t,o){if(!e.source_entity||!t)return;const n=this.resolveEntity(e.source_entity,o)||e.source_entity,i=t.states[n];return i?i.state:void 0}renderEntitySourcePreview(e,t,o,r){const s=this.getOptionsFromEntity(e,t,r),a=this.getCurrentStateFromEntity(e,t,r);return 0===s.length?n.qy`
        <div style="font-size: 12px; color: var(--secondary-text-color); font-style: italic;">
          ${(0,i.kg)("editor.dropdown.no_options_found",o,"No options found for this entity")}
        </div>
      `:n.qy`
      <div style="font-size: 12px; margin-top: 8px;">
        <div style="font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color);">
          ${(0,i.kg)("editor.dropdown.available_options",o,"Available Options")}
          (${s.length}):
        </div>
        <div style="color: var(--secondary-text-color); line-height: 1.6;">
          ${s.map((e,t)=>n.qy`<div style="display: flex; align-items: center; gap: 6px;">
                <span style="color: var(--primary-color);">•</span>
                <span
                  style="${e===a?"font-weight: 600; color: var(--primary-color);":""}"
                  >${e}</span
                >
                ${e===a?n.qy`<span style="font-size: 10px; opacity: 0.7;">(current)</span>`:""}
              </div>`)}
        </div>
      </div>
    `}renderGeneralTab(e,t,o,r){var s,a,l,d;const c=e,p=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en",u=(e,t)=>{const o=c.options.map(o=>o.id===e?Object.assign(Object.assign({},o),t):o);r({options:o}),this.triggerPreviewUpdate()},m=(e,t)=>{const o=[...c.options],[n]=o.splice(e,1);o.splice(t,0,n),r({options:o}),this.triggerPreviewUpdate()},h=e=>{const t=c.options.filter(t=>t.id!==e);r({options:t}),this.triggerPreviewUpdate()},g=e=>{const t=c.options.find(t=>t.id===e);if(t){const o=Object.assign(Object.assign({},t),{id:this.generateId("option"),label:`${t.label} (Copy)`}),n=c.options.findIndex(t=>t.id===e),i=[...c.options.slice(0,n+1),o,...c.options.slice(n+1)];r({options:i}),this.triggerPreviewUpdate()}};return n.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Source Configuration -->
        <div class="settings-section">
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,i.kg)("editor.dropdown.source.title",p,"Dropdown Source")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,i.kg)("editor.dropdown.source.desc",p,"Choose whether to manually define options or use a Select or Input Select entity.")}
          </div>

          <!-- Source Mode Selection -->
          <div style="margin-bottom: 16px;">
            ${this.renderFieldSection((0,i.kg)("editor.dropdown.source_mode.title",p,"Source Mode"),(0,i.kg)("editor.dropdown.source_mode.desc",p,"Manual: Define custom options with actions. Entity: Use options from a Select or Input Select entity."),t,{source_mode:c.source_mode||"manual"},[this.selectField("source_mode",[{value:"manual",label:(0,i.kg)("editor.dropdown.source_mode.manual",p,"Manual Options")},{value:"entity",label:(0,i.kg)("editor.dropdown.source_mode.entity",p,"Entity Source")}])],e=>{const t=e.detail.value.source_mode;t!==(c.source_mode||"manual")&&(r({source_mode:t}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
          </div>

        <!-- Entity Picker (shown when source_mode is 'entity', or when unified template
             mode is enabled — template option actions need a source_entity even in manual mode) -->
        ${"entity"===c.source_mode||c.unified_template_mode?n.qy`
                <div style="margin-bottom: 16px;">
                  ${this.renderConditionalFieldsGroup((0,i.kg)("editor.dropdown.entity_source_config",p,"Entity Source Configuration"),n.qy`
                      ${this.renderFieldSection((0,i.kg)("editor.dropdown.source_entity.title",p,"Source Entity"),(0,i.kg)("editor.dropdown.source_entity.desc",p,"Select or Input Select entity to use as the source for dropdown options."),t,{source_entity:c.source_entity||""},[{name:"source_entity",label:"",selector:{entity:"entity"===c.source_mode?{domain:["input_select","select"]}:{}}}],e=>{const t=e.detail.value.source_entity;t!==(c.source_entity||"")&&(r({source_entity:t}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
                      ${c.source_entity?n.qy`
                            <div
                              style="margin-top: 12px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.05); border-radius: var(--uc-r-4, 4px); border-left: 3px solid var(--primary-color);"
                            >
                              <div
                                style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 8px;"
                              >
                                ${(0,i.kg)("editor.dropdown.entity_source_info",p,"Options will be automatically populated from the entity. The dropdown will display the current state and update the entity when an option is selected.")}
                              </div>
                              ${this.renderEntitySourcePreview(c,t,p,o)}
                            </div>
                          `:""}
                    `)}
                </div>
              `:""}
        </div>

        <!-- Basic Settings (only show for manual mode or when no entity is selected) -->
        ${"manual"===c.source_mode?n.qy`
              <div class="settings-section">
                <div
                  class="section-title"
                  style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
                >
                  ${(0,i.kg)("editor.dropdown.basic.title",p,"Basic Settings")}
                </div>
                <div
                  style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
                >
                  ${(0,i.kg)("editor.dropdown.basic.desc",p,"Configure the dropdown appearance and behavior.")}
                </div>

                <!-- Keep Selection State -->
                ${this.renderFieldSection((0,i.kg)("editor.dropdown.keep_selection_state.title",p,"Keep Selection State"),(0,i.kg)("editor.dropdown.keep_selection_state.desc",p,"Remember and display the last selected option (recommended for scene selectors)"),t,{track_state:null===(a=c.track_state)||void 0===a||a},[this.booleanField("track_state")],e=>{r({track_state:e.detail.value.track_state}),this.triggerPreviewUpdate()})}

                <!-- Closed Dropdown Title Configuration -->
                <div style="margin-bottom: 16px;">
                  ${this.renderFieldSection((0,i.kg)("editor.dropdown.closed_title_mode.title",p,"Closed Dropdown Title"),(0,i.kg)("editor.dropdown.closed_title_mode.desc",p,"Choose what the dropdown displays when closed."),t,{closed_title_mode:c.closed_title_mode||"last_chosen"},[this.selectField("closed_title_mode",[{value:"last_chosen",label:(0,i.kg)("editor.dropdown.closed_title_mode.last_chosen",p,"Last Chosen")},{value:"entity_state",label:(0,i.kg)("editor.dropdown.closed_title_mode.entity_state",p,"Entity State")},{value:"custom",label:(0,i.kg)("editor.dropdown.closed_title_mode.custom",p,"Custom")},{value:"first_option",label:(0,i.kg)("editor.dropdown.closed_title_mode.first_option",p,"First Option")}])],e=>{const t=e.detail.value.closed_title_mode;t!==(c.closed_title_mode||"last_chosen")&&(r({closed_title_mode:t}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}
                </div>

                <!-- Conditional fields based on closed_title_mode -->
                ${"entity_state"===c.closed_title_mode?n.qy`
                      <div style="margin-bottom: 16px;">
                        ${this.renderConditionalFieldsGroup((0,i.kg)("editor.dropdown.closed_title_entity_config",p,"Entity State Configuration"),n.qy`
                            ${this.renderEntityPickerWithVariables(t,o,"closed_title_entity",c.closed_title_entity||"",e=>{e!==c.closed_title_entity&&(r({closed_title_entity:e}),setTimeout(()=>this.triggerPreviewUpdate(),50))},void 0,(0,i.kg)("editor.dropdown.closed_title_entity.title",p,"Entity"))}
                          `)}
                      </div>
                    `:""}
                ${"custom"===c.closed_title_mode?n.qy`
                      <div style="margin-bottom: 16px;">
                        ${this.renderConditionalFieldsGroup((0,i.kg)("editor.dropdown.closed_title_custom_config",p,"Custom Text Configuration"),this.renderFieldSection((0,i.kg)("editor.dropdown.closed_title_custom.title",p,"Custom Text"),(0,i.kg)("editor.dropdown.closed_title_custom.desc",p,"Custom text to display when dropdown is closed."),t,{closed_title_custom:c.closed_title_custom||""},[this.textField("closed_title_custom")],e=>{r({closed_title_custom:e.detail.value.closed_title_custom}),this.triggerPreviewUpdate()}))}
                      </div>
                    `:""}

                <!-- Placeholder (only show when track_state is disabled) -->
                ${c.track_state?"":n.qy`
                      <div style="margin-bottom: 16px;">
                        ${this.renderFieldSection((0,i.kg)("editor.dropdown.placeholder.title",p,"Placeholder"),(0,i.kg)("editor.dropdown.placeholder.desc",p,"Text shown when no option is selected."),t,{placeholder:c.placeholder||""},[this.textField("placeholder")],e=>{r({placeholder:e.detail.value.placeholder}),this.triggerPreviewUpdate()})}
                      </div>
                    `}
              </div>

              <!-- Unified Template Section -->
              ${"manual"===c.source_mode?n.qy`
                    <div
                      class="settings-section"
                      style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 24px;"
                    >
                      <div
                        class="section-title"
                        style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 8px; letter-spacing: 0.5px;"
                      >
                        ${(0,i.kg)("editor.dropdown.unified_template_section.title",p,"Template Mode")}
                      </div>
                      ${this.renderSettingsSection("","",[{title:(0,i.kg)("editor.dropdown.unified_template_section.enable",p,"Enable Template Mode"),description:(0,i.kg)("editor.dropdown.unified_template_section.desc",p,"Use a single Jinja2 template to generate all dropdown options with icons, labels, and colors. Return a JSON array of option objects. When enabled, manual options are replaced by template-generated options."),hass:t,data:{unified_template_mode:c.unified_template_mode||!1},schema:[this.booleanField("unified_template_mode")],onChange:e=>{r({unified_template_mode:e.detail.value.unified_template_mode}),this.triggerPreviewUpdate()}}])}

                      ${c.unified_template_mode?n.qy`
                            <div 
                              class="template-content"
                              @mousedown=${e=>{const t=e.target;t.closest("ultra-template-editor")||t.closest(".cm-editor")||e.stopPropagation()}}
                              @dragstart=${e=>e.stopPropagation()}
                            >
                              <ultra-template-editor
                                .hass=${t}
                                .value=${c.unified_template||""}
                                .placeholder=${'[\n  {"label": "Heating", "icon": "mdi:fire", "icon_color": "#FF5722"},\n  {"label": "Cooling", "icon": "mdi:snowflake", "icon_color": "#2196F3"},\n  {"label": "Auto", "icon": "mdi:autorenew", "icon_color": "#4CAF50"}\n]'}
                                .minHeight=${200}
                                .maxHeight=${500}
                                @value-changed=${e=>{r({unified_template:e.detail.value}),this.triggerPreviewUpdate()}}
                              ></ultra-template-editor>
                              ${this.renderTemplateKeyWarning(c.unified_template,y,p)}
                              <div class="template-help">
                                <p><strong>Template must return a JSON array of options:</strong></p>
                                <code
                                  style="display: block; background: var(--code-editor-background-color, #1e1e1e); padding: 12px; border-radius: var(--uc-r-4, 4px); font-size: 11px; margin-top: 8px;"
                                >
                                  [<br />
                                  &nbsp;&nbsp;{"label": "Option 1", "icon": "mdi:home", "icon_color": "blue"},<br />
                                  &nbsp;&nbsp;{"label": "Option 2", "icon": "mdi:car", "icon_color": "red"},<br />
                                  &nbsp;&nbsp;{"label": "Option 3", "icon": "mdi:star"}<br />
                                  ]
                                </code>
                                <p style="margin-top: 12px;"><strong>Example - Ecobee Climate Modes (with actions):</strong></p>
                                <code
                                  style="display: block; background: var(--code-editor-background-color, #1e1e1e); padding: 12px; border-radius: var(--uc-r-4, 4px); font-size: 11px; margin-top: 8px;"
                                >
                                  {% set modes = state_attr('climate.ecobee', 'hvac_modes') | default(['off', 'heat', 'cool', 'auto', 'heat_cool']) %}<br />
                                  [<br />
                                  {% for mode in modes %}<br />
                                  &nbsp;&nbsp;{<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;"label": "{% if mode == 'heat' %}Heating{% elif mode == 'cool' %}Cooling{% elif mode == 'auto' %}Auto{% elif mode == 'heat_cool' %}Heat/Cool{% else %}Off{% endif %}",<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;"icon": "{% if mode == 'heat' %}mdi:fire{% elif mode == 'cool' %}mdi:snowflake{% elif mode == 'auto' %}mdi:autorenew{% elif mode == 'heat_cool' %}mdi:thermostat{% else %}mdi:thermostat-off{% endif %}",<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;"icon_color": "{% if mode == 'heat' %}#FF5722{% elif mode == 'cool' %}#2196F3{% elif mode == 'auto' %}#4CAF50{% elif mode == 'heat_cool' %}#FF9800{% else %}#9E9E9E{% endif %}",<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;"mode": "{{ mode }}"<br />
                                  &nbsp;&nbsp;}{% if not loop.last %},{% endif %}<br />
                                  {% endfor %}<br />
                                  ]
                                </code>
                                <p style="margin-top: 12px;">
                                  <strong>Important:</strong> To enable actions (clicking options to change HVAC mode), you must:
                                </p>
                                <ul style="margin-top: 8px; padding-left: 20px;">
                                  <li>Include a <code>"mode"</code> field in each option with the actual HVAC mode value (e.g., "heat", "cool", "auto")</li>
                                  <li>Set a <code>source_entity</code> in the Entity Source Configuration section (even if Source Mode is Manual)</li>
                                  <li>When an option is clicked, it will automatically call <code>climate.set_hvac_mode</code> service</li>
                                </ul>
                                <p style="margin-top: 12px;">
                                  <strong>Note:</strong> When Unified Template is enabled, manually configured options are ignored. The template dynamically generates all options with their icons, labels, and colors. The selected option's display automatically uses the properties from the template-generated options.
                                </p>
                                <p style="margin-top: 12px;">
                                  <strong>Optional Display Key:</strong> You can include a <code>"display"</code> key in your template result to customize what shows when the dropdown is closed. The template's <code>"display"</code> key takes priority over the "Closed Dropdown Title" configuration setting.
                                </p>
                                <p style="margin-top: 12px;"><strong>Example with display key:</strong></p>
                                <code
                                  style="display: block; background: var(--code-editor-background-color, #1e1e1e); padding: 12px; border-radius: var(--uc-r-4, 4px); font-size: 11px; margin-top: 8px;"
                                >
                                  {% set mode = states("climate.ecobee") %}<br />
                                  {% set modes = state_attr('climate.ecobee', 'hvac_modes') | default(['off', 'heat', 'cool', 'auto', 'heat_cool']) %}<br />
                                  {<br />
                                  &nbsp;&nbsp;"options": [<br />
                                  {% for m in modes %}<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;{"label": "{% if m == 'heat' %}Heating{% elif m == 'cool' %}Cooling{% elif m == 'auto' %}Auto{% else %}Off{% endif %}", "icon": "mdi:fire", "mode": "{{ m }}"}{% if not loop.last %},{% endif %}<br />
                                  {% endfor %}<br />
                                  &nbsp;&nbsp;],<br />
                                  &nbsp;&nbsp;"display": {<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;"label": "{% if mode == 'heat' %}🔥 Heating{% elif mode == 'cool' %}❄️ Cooling{% elif mode == 'auto' %}🔄 Auto{% else %}Off{% endif %}",<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;"icon": "{% if mode == 'heat' %}mdi:fire{% elif mode == 'cool' %}mdi:snowflake{% elif mode == 'auto' %}mdi:autorenew{% else %}mdi:thermostat-off{% endif %}",<br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;"icon_color": "{% if mode == 'heat' %}#FF5722{% elif mode == 'cool' %}#2196F3{% elif mode == 'auto' %}#4CAF50{% else %}#9E9E9E{% endif %}"<br />
                                  &nbsp;&nbsp;}<br />
                                  }
                                </code>
                              </div>
                            </div>
                          `:""}
                    </div>
                  `:""}

              <!-- Dropdown Options -->
              <div class="settings-section">
                <div
                  class="section-title"
                  style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
                >
                  ${(0,i.kg)("editor.dropdown.options.title",p,"Dropdown Options")}
                </div>

                <div class="options-list">
                  ${c.options.map((e,r)=>n.qy`
                      <div
                        class="option-item"
                        style="margin-bottom: 24px; background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); border: 1px solid var(--divider-color); overflow: hidden;"
                        data-option-id="${e.id}"
                        data-option-index="${r}"
                        @dragover=${e=>this.handleDragOver(e)}
                        @dragenter=${e=>this.handleDragEnter(e)}
                        @dragleave=${e=>this.handleDragLeave(e)}
                        @drop=${e=>this.handleDrop(e,r,m)}
                      >
                        <div
                          class="option-header"
                          style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: rgba(var(--rgb-primary-color), 0.05); border-bottom: 1px solid var(--divider-color); cursor: pointer;"
                          @click=${e=>this.toggleHeader(e)}
                        >
                          <div style="display: flex; align-items: center; gap: 12px;">
                            <div
                              class="drag-handle"
                              style="padding: 8px; margin: -8px; cursor: grab; border-radius: var(--uc-r-4, 4px); transition: background-color 0.2s ease;"
                              draggable="true"
                              @dragstart=${e=>this.handleDragStart(e,r)}
                              @dragend=${e=>this.handleDragEnd(e)}
                              @click=${e=>e.stopPropagation()}
                              @mousedown=${e=>e.stopPropagation()}
                              .title=${(0,i.kg)("editor.dropdown.drag_option",p,"Drag to reorder")}
                              @mouseenter=${e=>{e.target.style.backgroundColor="rgba(var(--rgb-primary-color), 0.1)"}}
                              @mouseleave=${e=>{e.target.style.backgroundColor="transparent"}}
                            >
                              <ha-icon
                                icon="mdi:drag"
                                style="color: var(--secondary-text-color); pointer-events: none;"
                              ></ha-icon>
                            </div>
                            <div style="font-weight: 600; color: var(--primary-text-color);">
                              ${e.label||(0,i.kg)("editor.dropdown.option_number",p,"Option {number}").replace("{number}",(r+1).toString())}
                            </div>
                          </div>
                          <div style="display: flex; align-items: center; gap: 8px;">
                            <ha-icon-button
                              @click=${t=>{t.stopPropagation(),g(e.id)}}
                              .title=${(0,i.kg)("editor.dropdown.duplicate_option",p,"Duplicate option")}
                            >
                              <ha-icon icon="mdi:content-duplicate"></ha-icon>
                            </ha-icon-button>
                            <ha-icon-button
                              @click=${t=>{t.stopPropagation(),h(e.id)}}
                              .title=${(0,i.kg)("editor.dropdown.remove_option",p,"Remove option")}
                              .disabled=${c.options.length<=1}
                            >
                              <ha-icon icon="mdi:delete"></ha-icon>
                            </ha-icon-button>
                            <ha-icon
                              class="expand-caret"
                              icon="mdi:chevron-down"
                              style="color: var(--secondary-text-color); transition: transform 0.2s ease; transform: ${this.expandedOptions.has(e.id)?"rotate(180deg)":"rotate(0deg)"}; cursor: pointer; padding: 8px; margin: -8px;"
                              @click=${e=>{e.stopPropagation(),e.preventDefault();const t=e.target,o=t.closest(".option-item"),n=null==o?void 0:o.querySelector(".option-content");if(o&&n&&t){const e=o.getAttribute("data-option-id")||"";this.expandedOptions.has(e)?(this.expandedOptions.delete(e),n.style.display="none",t.style.transform="rotate(0deg)"):(this.expandedOptions.add(e),n.style.display="block",t.style.transform="rotate(180deg)")}}}
                            ></ha-icon>
                          </div>
                        </div>

                        <div
                          class="option-content"
                          style="padding: 16px; display: ${this.expandedOptions.has(e.id)?"block":"none"};"
                        >
                          ${this.renderOptionConfiguration(e,t,p,u,o)}
                        </div>
                      </div>
                    `)}
                </div>

                <div style="margin-top: 16px; text-align: center;">
                  <ha-button @click=${()=>{const e=this.generateId("option"),t={id:e,label:`Option ${c.options.length+1}`,action:{action:"more-info",entity:""}};this.expandedOptions.add(e),r({options:[...c.options,t]}),this.triggerPreviewUpdate()}}>
                    <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
                    ${(0,i.kg)("editor.dropdown.add_option",p,"Add Option")}
                  </ha-button>
                </div>
              </div>
            `:n.qy`
              <div class="settings-section">
                <div
                  class="section-title"
                  style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
                >
                  ${(0,i.kg)("editor.dropdown.basic.title",p,"Basic Settings")}
                </div>
                <div
                  style="text-align: center; padding: 32px; color: var(--secondary-text-color); background: rgba(var(--rgb-primary-color), 0.05); border-radius: var(--uc-r-8, 8px);"
                >
                  <ha-icon
                    icon="mdi:link-variant"
                    style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"
                  ></ha-icon>
                  <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">
                    ${(0,i.kg)("editor.dropdown.entity_mode_active",p,"Entity Source Mode Active")}
                  </div>
                  <div style="font-size: 14px; line-height: 1.4;">
                    ${(0,i.kg)("editor.dropdown.entity_mode_desc",p,"Options are automatically managed by the selected entity. The dropdown will display the current state and update the entity when an option is selected.")}
                  </div>
                </div>
              </div>
            `}
        <!-- Control Icon & Alignment -->
        <div class="settings-section">
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,i.kg)("editor.dropdown.control_icon.section_title",p,"Dropdown Control Icon")}
          </div>
          <div
            style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 16px; opacity: 0.8; line-height: 1.4;"
          >
            ${(0,i.kg)("editor.dropdown.control_icon.section_desc",p,"Customize the dropdown chevron icon and how it aligns with the selected value.")}
          </div>

          ${this.renderFieldSection((0,i.kg)("editor.dropdown.control_icon.label",p,"Control Icon"),(0,i.kg)("editor.dropdown.control_icon.label_desc",p,"Select the icon that indicates the dropdown toggle state."),t,{control_icon:c.control_icon||"mdi:chevron-down"},[this.iconField("control_icon")],e=>{const t=e.detail.value.control_icon;t!==c.control_icon&&(r({control_icon:t&&t.trim()?t:void 0}),setTimeout(()=>this.triggerPreviewUpdate(),50))})}

          <div style="margin-top: 24px;">
            ${this.renderSegmentedField((0,i.kg)("editor.dropdown.control_alignment.mode",p,"Alignment Mode"),"",c.control_alignment||"apart",[{value:"center",label:(0,i.kg)("editor.common.center",p,"Center"),icon:"mdi:align-horizontal-center"},{value:"apart",label:(0,i.kg)("editor.common.apart",p,"Apart"),icon:"mdi:arrow-left-right"}],e=>{r({control_alignment:e}),this.triggerPreviewUpdate()})}
          </div>

          <div style="margin-top: 16px;">
            ${this.renderSegmentedField((0,i.kg)("editor.dropdown.control_alignment.icon_side",p,"Icon Side"),"",c.control_icon_side||"right",[{value:"left",label:(0,i.kg)("editor.common.left",p,"Left"),icon:"mdi:arrow-left"},{value:"right",label:(0,i.kg)("editor.common.right",p,"Right"),icon:"mdi:arrow-right"}],e=>{r({control_icon_side:e}),this.triggerPreviewUpdate()})}
          </div>

          <div style="margin-top: 16px;">
            ${this.renderFieldSection((0,i.kg)("editor.dropdown.menu_direction.title",p,"Menu Direction"),(0,i.kg)("editor.dropdown.menu_direction.desc",p,"Choose how the dropdown opens: auto picks best fit, or force up/down."),t,{menu_direction:c.menu_direction||"auto"},[this.selectField("menu_direction",[{value:"auto",label:(0,i.kg)("editor.dropdown.menu_direction.auto",p,"Auto")},{value:"up",label:(0,i.kg)("editor.dropdown.menu_direction.up",p,"Up")},{value:"down",label:(0,i.kg)("editor.dropdown.menu_direction.down",p,"Down")}])],e=>{const t=e.detail.value.menu_direction||"auto";r({menu_direction:t}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>

          <!-- Visible Items Configuration -->
          <div style="margin-top: 24px;">
            <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
              ${(0,i.kg)("editor.dropdown.visible_items.title",p,"Visible Items")}
            </div>
            <div
              class="field-description"
              style="font-size: 13px; color: var(--secondary-text-color); margin-bottom: 12px; opacity: 0.8; line-height: 1.4;"
            >
              ${(0,i.kg)("editor.dropdown.visible_items.desc",p,"Number of items visible in the dropdown before scrolling (1-20).")}
            </div>
            <div style="display: flex; align-items: center; gap: 16px;">
              <ha-slider
                .min=${1}
                .max=${20}
                .step=${1}
                .value=${null!==(l=c.visible_items)&&void 0!==l?l:5}
                @change=${e=>{const t=e.target,o=parseInt(t.value,10);!isNaN(o)&&o>=1&&o<=20&&(r({visible_items:o}),setTimeout(()=>this.triggerPreviewUpdate(),50))}}
                style="flex: 1; --mdc-theme-primary: var(--primary-color);"
              ></ha-slider>
              <span style="min-width: 40px; text-align: center; font-weight: 600; color: var(--primary-color); font-size: 18px;">
                ${null!==(d=c.visible_items)&&void 0!==d?d:5}
              </span>
            </div>
          </div>
        </div>
      </div>
    `}handleDragStart(e,t){var o;if(this.draggedIndex=t,e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.toString());const n=e.target.closest(".option-item");if(null==n?void 0:n.querySelector(".option-header")){const i=document.createElement("div"),r=(null===(o=null==n?void 0:n.querySelector(".option-header div:nth-child(1) div:nth-child(2)"))||void 0===o?void 0:o.textContent)||`Option ${t+1}`;i.innerHTML=`\n          <div style="\n            display: flex; \n            align-items: center; \n            gap: 8px; \n            padding: 8px 12px;\n            background: var(--primary-color);\n            color: var(--text-primary-color, #fff);\n            border-radius: var(--uc-r-6, 6px);\n            font-size: 14px;\n            font-weight: 600;\n            box-shadow: 0 4px 12px rgba(0,0,0,0.3);\n            white-space: nowrap;\n            max-width: 200px;\n            transform: rotate(2deg);\n          ">\n            <ha-icon icon="mdi:drag" style="color: var(--text-primary-color, #fff); font-size: 16px;"></ha-icon>\n            <span>${(0,u.escapeHtml)(r)}</span>\n          </div>\n        `,i.style.position="absolute",i.style.top="-1000px",i.style.left="-1000px",i.style.zIndex="10000",i.style.pointerEvents="none",document.body.appendChild(i),e.dataTransfer.setDragImage(i,100,20),setTimeout(()=>{document.body.contains(i)&&document.body.removeChild(i)},0)}}const n=e.target.closest(".option-item");n&&n.classList.add("dragging")}handleDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move")}handleDragEnter(e){e.preventDefault();const t=e.currentTarget;t&&!t.classList.contains("dragging")&&(t.style.borderTop="3px solid var(--primary-color)",t.style.backgroundColor="rgba(var(--rgb-primary-color), 0.1)")}handleDragLeave(e){const t=e.currentTarget;t&&(t.style.borderTop="",t.style.backgroundColor="")}handleDrop(e,t,o){e.preventDefault();const n=e.currentTarget;n.style.borderTop="",n.style.backgroundColor="",null!==this.draggedIndex&&this.draggedIndex!==t&&o(this.draggedIndex,t),document.querySelectorAll(".option-item").forEach(e=>{e.style.borderTop="",e.style.backgroundColor="",e.classList.remove("dragging")}),this.draggedIndex=null}handleDragEnd(e){var t;const o=null===(t=e.target)||void 0===t?void 0:t.closest(".option-item");o&&o.classList.remove("dragging"),document.querySelectorAll(".option-item").forEach(e=>{e.style.borderTop=""}),this.draggedIndex=null}toggleHeader(e){const t=e.currentTarget.closest(".option-item");if(!t)return;const o=t.getAttribute("data-option-id")||"";if(!o)return;const n=t.querySelector(".option-content"),i=t.querySelector(".expand-caret");this.expandedOptions.has(o)?this.expandedOptions.delete(o):this.expandedOptions.add(o),n&&i&&(this.expandedOptions.has(o)?(n.style.display="block",i.style.transform="rotate(180deg)"):(n.style.display="none",i.style.transform="rotate(0deg)"))}toggleOptionExpanded(e){this.expandedOptions.has(e)?this.expandedOptions.delete(e):this.expandedOptions.add(e);const t=document.querySelector(`[data-option-id="${e}"]`);if(t){const o=t.querySelector(".option-content"),n=t.querySelector(".expand-caret");if(o&&n){const t=this.expandedOptions.has(e);o.style.display=t?"block":"none",n.style.transform=t?"rotate(180deg)":"rotate(0deg)"}}}renderOptionConfiguration(e,t,o,r,s){return n.qy`
      <!-- Basic Option Settings -->
      <div class="field-group" style="margin-bottom: 12px;">
        ${this.renderFieldSection((0,i.kg)("editor.dropdown.option.label",o,"Label"),(0,i.kg)("editor.dropdown.option.label_desc",o,"Display text for this option"),t,{label:e.label||""},[this.textField("label")],t=>r(e.id,{label:t.detail.value.label}))}
      </div>

      <div class="field-group" style="margin-bottom: 12px;">
        ${this.renderFieldSection((0,i.kg)("editor.dropdown.option.icon",o,"Icon"),(0,i.kg)("editor.dropdown.option.icon_desc",o,"Optional icon for this option (e.g., mdi:lightbulb)"),t,{icon:e.icon||""},[this.iconField("icon")],t=>r(e.id,t.detail.value))}
      </div>

      ${e.icon?n.qy`
            <div class="field-group" style="margin-bottom: 12px;">
              ${this.renderFieldSection((0,i.kg)("editor.dropdown.option.use_state_color",o,"Use State Color"),(0,i.kg)("editor.dropdown.option.use_state_color_desc",o,"Use the entity state color for the icon (overrides custom color)"),t,{use_state_color:e.use_state_color||!1},[this.booleanField("use_state_color")],t=>r(e.id,{use_state_color:t.detail.value.use_state_color}))}

              ${e.use_state_color?n.qy`
                    <div
                      style="text-align: center; padding: 16px; color: var(--secondary-text-color); font-style: italic; background: rgba(var(--rgb-primary-color), 0.05); border-radius: var(--uc-r-4, 4px);"
                    >
                      ${(0,i.kg)("editor.dropdown.option.state_color_enabled",o,"Icon will use entity state color automatically")}
                    </div>
                  `:n.qy`
                    <div class="field-group">
                      <ultra-color-picker
                        .label=${(0,i.kg)("editor.dropdown.option.icon_color",o,"Icon Color")}
                        .value=${e.icon_color||"var(--primary-color)"}
                        .defaultValue=${"var(--primary-color)"}
                        .hass=${t}
                        @value-changed=${t=>r(e.id,{icon_color:t.detail.value})}
                      ></ultra-color-picker>
                    </div>
                  `}
            </div>
          `:""}

      <!-- Action Configuration -->
      <div class="field-group" style="margin-bottom: 12px;">
        <div
          style="font-size: 16px; font-weight: 600; margin-bottom: 8px; color: var(--primary-text-color);"
        >
          ${(0,i.kg)("editor.dropdown.option.action",o,"Action")}
        </div>
        <div style="color: var(--secondary-text-color); font-size: 13px; margin-bottom: 12px;">
          ${(0,i.kg)("editor.dropdown.option.action_desc",o,"What happens when this option is selected")}
        </div>
        ${this.renderUcForm(t,{action_config:e.action},[{name:"action_config",label:"",selector:{ui_action:{actions:["more-info","toggle","navigate","url","perform-action","assist"]}}}],t=>{var o;const n=null===(o=t.detail.value)||void 0===o?void 0:o.action_config;n&&JSON.stringify(e.action||{})!==JSON.stringify(n||{})&&(r(e.id,{action:n}),setTimeout(()=>{this.triggerPreviewUpdate()},50))},!1)}
      </div>

      ${"more-info"===e.action.action?n.qy`
            <div class="field-group" style="margin-bottom: 12px;">
              ${this.renderConditionalFieldsGroup((0,i.kg)("editor.dropdown.option.more_info_config",o,"More Info Configuration"),n.qy`
                  <div class="field-group">
                    ${this.renderEntityPickerWithVariables(t,s,"entity",e.action.entity||"",t=>{t!==e.action.entity&&r(e.id,{action:Object.assign(Object.assign({},e.action),{entity:t})})},void 0,(0,i.kg)("editor.dropdown.option.more_info_entity",o,"Entity"))}
                  </div>
                `)}
            </div>
          `:""}
      ${"toggle"===e.action.action?n.qy`
            <div class="field-group" style="margin-bottom: 12px;">
              ${this.renderConditionalFieldsGroup((0,i.kg)("editor.dropdown.option.toggle_config",o,"Toggle Configuration"),n.qy`
                  <div class="field-group">
                    ${this.renderEntityPickerWithVariables(t,s,"entity",e.action.entity||"",t=>{t!==e.action.entity&&r(e.id,{action:Object.assign(Object.assign({},e.action),{entity:t})})},void 0,(0,i.kg)("editor.dropdown.option.toggle_entity",o,"Entity"))}
                  </div>
                `)}
            </div>
          `:""}
    `}renderActionsTab(){return n.qy`
      <div style="text-align: center; padding: 40px; color: var(--secondary-text-color);">
        <ha-icon
          icon="mdi:information-outline"
          style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"
        ></ha-icon>
        <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">
          Actions Configured Per Option
        </div>
        <div style="font-size: 14px; line-height: 1.4;">
          Actions for this dropdown are configured individually for each option in the General tab.
          Each dropdown option can have its own action (More Info, Toggle, Navigate, etc.).
        </div>
      </div>
    `}renderLogicTab(e,t,o,n){return s.X.render(e,t,e=>n(e))}renderPreview(e,t,o,r){var s,a,p,u,h,v,y;const f=e,w=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en";this.moduleContexts.set(f.id,{module:f,hass:t,config:o});const b=f,_=b.color||"var(--primary-text-color)",x=b.font_size||14,k=b.background_color||"var(--uc-pane-bg, var(--secondary-background-color))",$=b.border_color||"var(--divider-color)",S=b.border_radius||4,E=((b.padding_top||b.padding_bottom||b.padding_left||b.padding_right)&&(b.padding_top,b.padding_right,b.padding_bottom,b.padding_left),(b.margin_top||b.margin_bottom||b.margin_left||b.margin_right)&&(b.margin_top,b.margin_right,b.margin_bottom,b.margin_left),b.background_color,b.border_radius,b.border_style&&"none"!==b.border_style&&(b.border_width,b.border_style,b.border_color),(b.box_shadow_h||b.box_shadow_v||b.box_shadow_blur||b.box_shadow_spread)&&(b.box_shadow_h,b.box_shadow_v,b.box_shadow_blur,b.box_shadow_spread,b.box_shadow_color),b.width||"100%"),O=b.height||"auto",C=b.max_width||"none",D=b.max_height||"none",P=b.min_width||"auto",H=b.min_height||"auto",T=b.font_family||"inherit",A=b.font_weight||"normal",L=b.text_align||"left",F=f.control_icon||"mdi:chevron-down",z=f.control_alignment||"apart",q=f.control_icon_side||"right",I="center"===z?"center":"space-between",M="center"===z?"12px":"0",N="left"===q?2:1,U="left"===q?1:2,R="apart"===z?"1 1 auto":"0 1 auto",W="apart"===z?"100%":"auto",j="apart"===z&&"left"===q,K="center"===z?"center":j?"flex-end":"flex-start",Y="center"===z?"center":j?"right":"left",B=44*(null!==(a=f.visible_items)&&void 0!==a?a:5),G=`\n      width: ${this.addPixelUnit(E)};\n      max-width: ${this.addPixelUnit(C)};\n      min-width: ${this.addPixelUnit(P)};\n      height: ${this.addPixelUnit(O)};\n      max-height: ${this.addPixelUnit(D)};\n      min-height: ${this.addPixelUnit(H)};\n      font-size: ${this.addPixelUnit(x.toString())};\n      font-family: ${T};\n      font-weight: ${A};\n      text-align: ${L};\n      color: ${_};\n      background: ${k};\n      border: 1px solid ${$};\n      border-radius: ${this.addPixelUnit(S.toString())};\n      padding: 8px 12px;\n      display: flex;\n      align-items: center;\n      justify-content: ${I};\n      gap: ${M};\n      cursor: pointer;\n      transition: all 0.2s ease;\n      box-sizing: border-box;\n    `,J="entity"===f.source_mode;if(J&&(!f.source_entity||""===f.source_entity.trim()))return this.renderGradientErrorState((0,i.kg)("editor.dropdown.error_no_entity",w,"Configure Source Entity"),(0,i.kg)("editor.dropdown.error_no_entity_desc",w,"Select a source entity in the General tab"),"mdi:format-list-bulleted");if(!(J||f.options&&0!==f.options.length||f.unified_template_mode&&f.unified_template))return this.renderGradientErrorState((0,i.kg)("editor.dropdown.error_no_options",w,"Add Options"),(0,i.kg)("editor.dropdown.error_no_options_desc",w,"Configure dropdown options in the General tab or enable Unified Template"),"mdi:format-list-bulleted");const X="entity"===f.source_mode&&f.source_entity,V=f.unified_template_mode&&f.unified_template;let Z,Q,ee,te,oe=[],ne=null;if(X){const e=this.resolveEntity(f.source_entity,o)||f.source_entity,n=this.getOptionsFromEntity(f,t,o),i=this.getCurrentStateFromEntity(f,t,o),r=t.states[e];oe=n.map(e=>{var o,n,i,s,a,l;return{label:this.formatOptionLabel(e,r,t),value:e,icon:null===(n=null===(o=f.entity_option_customization)||void 0===o?void 0:o[e])||void 0===n?void 0:n.icon,icon_color:null===(s=null===(i=f.entity_option_customization)||void 0===i?void 0:i[e])||void 0===s?void 0:s.icon_color,use_state_color:null===(l=null===(a=f.entity_option_customization)||void 0===a?void 0:a[e])||void 0===l?void 0:l.use_state_color}});const s=this.formatOptionLabel(i,r,t);if(Z=s,void 0!==i&&r){const e=oe.find(e=>e.value===i),n=null==e?void 0:e.icon,r=e?this.getOptionIconColor(e,t,f,o):void 0;ne={label:s||i,icon:n,icon_color:r}}}else if(V){!this._templateService&&t?this._templateService=new l.I(t):this._templateService&&t&&this._templateService.updateHass(t);const e=(0,d.KD)(f.unified_template,t,o),n=this._hashString(e),i=`unified_dropdown_${f.id}_${n}`;if(t.__uvc_template_strings||(t.__uvc_template_strings={}),this._templateService){const n=(0,c.pL)(f.source_entity||"",t,{entity:f.source_entity}),r=(0,c.jh)(f.source_entity||"",t);this._templateService.subscribeToTemplate(e,i,()=>{"undefined"!=typeof window&&this.triggerPreviewUpdate()},n,o,r),t.callApi&&t.callApi("POST","template",{template:e}).then(e=>{t.__uvc_template_strings||(t.__uvc_template_strings={}),t.__uvc_template_strings[i]=e,"undefined"!=typeof window&&this.triggerPreviewUpdate()}).catch(e=>{console.error("Error evaluating template initially:",e)})}const r=null===(p=null==t?void 0:t.__uvc_template_strings)||void 0===p?void 0:p[i];if(r)try{const e=String(r).trim();let t=null;t=e.startsWith("{")&&e.endsWith("}")?JSON.parse(e):e.startsWith("[")&&e.endsWith("]")?{options:JSON.parse(e)}:{options:e.split(/[,\n]/).map(e=>e.trim()).filter(e=>e).map(e=>({label:e}))},t&&t.options&&Array.isArray(t.options)&&(oe=t.options.map((e,t)=>({label:String(e.label||e.name||`Option ${t+1}`),icon:e.icon?String(e.icon):void 0,icon_color:e.icon_color?String(e.icon_color):void 0,use_state_color:e.use_state_color||!1,mode:e.mode||e.value||e.label}))),t&&t.display&&(ee=t.display.label||t.display.name||"",Q=t.display.icon,te=t.display.icon_color)}catch(e){console.error("Error parsing unified template:",e),console.error("Template result:",r),oe=(null===(u=f.options)||void 0===u?void 0:u.map(e=>({label:e.label,icon:e.icon,icon_color:e.icon_color,use_state_color:e.use_state_color})))||[]}else oe=(null===(h=f.options)||void 0===h?void 0:h.map(e=>({label:e.label,icon:e.icon,icon_color:e.icon_color,use_state_color:e.use_state_color})))||[];if(f.track_state){const e=f.id,t=this.currentSelection.get(e)||f.current_selection;Z=t}}else if(oe=f.options.map(e=>({label:e.label,id:e.id,icon:e.icon,icon_color:e.icon_color,use_state_color:e.use_state_color})),f.track_state){const e=f.id,t=this.currentSelection.get(e)||f.current_selection;Z=t}let ie=oe.find(e=>e.label===Z);if(!ie&&oe.length>0&&(X||f.track_state)&&(ie=oe[0],!X)){const e=f.id;this.currentSelection.set(e,ie.label)}const re=!X&&!f.track_state,se=f.placeholder||"Choose an option...",ae=X&&(!f.closed_title_mode||"last_chosen"===f.closed_title_mode||"entity_state"===f.closed_title_mode),le=(null===(v=f.design)||void 0===v||v.hover_effect,this.getHoverEffectClass(e)),de=this.buildStyleString(this.buildDesignStyles(e,t));let ce,pe,ue;if(void 0===ee||""===ee)switch(f.closed_title_mode||"last_chosen"){case"last_chosen":const e=this.getStoredSelection(f.id),n=this.currentSelection.get(f.id),i=f.current_selection;e&&!n&&this.currentSelection.set(f.id,e);const r=e||n||i;if(r){let e=oe.find(e=>e.label===r);!e&&X&&(e=oe.find(e=>e.value===r)),e&&(ce=e.label,pe=e.icon,ue=e.icon_color)}!ce&&oe.length>0&&(ce=oe[0].label,pe=oe[0].icon,ue=oe[0].icon_color);break;case"entity_state":if(f.closed_title_entity&&t){const e=this.resolveEntity(f.closed_title_entity,o)||f.closed_title_entity,n=t.states[e];if(n){const e=null===(y=n.attributes)||void 0===y?void 0:y.friendly_name,t=n.state.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase());ce=e?`${e}: ${t}`:t}else ce="Entity not found"}else ce="No entity selected";break;case"custom":ce=f.closed_title_custom||"Please select...";break;case"first_option":oe.length>0?(ce=oe[0].label,pe=oe[0].icon,ue=oe[0].icon_color):ce="No options"}const me=(void 0===ee||""===ee)&&!ae&&g(ce)&&!pe,he=me?`${G}; width: max-content; min-width: 0; padding: 8px 2px; gap: 0; position: relative;`:G,ge=me&&ce?n.qy`<span
            class="uc-blank-title-reach"
            aria-hidden="true"
            style="position: absolute; top: 0; bottom: 0; ${"left"===f.control_icon_side?"left: 100%; padding-left: 12px;":"right: 100%; padding-right: 12px;"} display: flex; align-items: center; white-space: pre; color: transparent; cursor: pointer; pointer-events: auto;"
            >${ce}</span
          >`:"";return this.wrapWithAnimation(n.qy`
      <style>
        ${this.getStyles()}
      </style>
      <div
        class="dropdown-module-container ${le}"
        data-module-id="${f.id}"
        data-preview-context="${r||"dashboard"}"
        style="${de}"
      >
        <div
          class="dropdown-module-preview"
          style="display: flex; flex-direction: column; align-items: flex-start; position: relative; z-index: 1;"
        >
          <div style="position: relative; width: 100%; z-index: 1;">
            <div class="custom-dropdown" style="position: relative;">
              <div
                class="dropdown-selected ${me?"uc-blank-closed-title":""}"
                data-uc-role="pane"
                style="${he}"
                tabindex="0"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded="${this.dropdownOpenStates.get(f.id)?"true":"false"}"
                @keydown=${e=>this.handleTriggerKeydown(e,f.id,r)}
                @click=${e=>{const t=e.target,o=e.composedPath().some(e=>{var t,o,n,i;return(null===(o=null===(t=null==e?void 0:e.classList)||void 0===t?void 0:t.contains)||void 0===o?void 0:o.call(t,"dropdown-chevron-container"))||(null===(i=null===(n=null==e?void 0:e.classList)||void 0===n?void 0:n.contains)||void 0===i?void 0:i.call(n,"dropdown-chevron"))})||t.classList.contains("dropdown-chevron-container")||t.closest(".dropdown-chevron-container");if(o)return;const n=f.id,i=!this.dropdownOpenStates.get(n),s=e.currentTarget.querySelector(".dropdown-chevron");s&&(s.style.transition="none",s.style.transform=i?"rotate(180deg)":"rotate(0deg)",requestAnimationFrame(()=>{s.style.transition="transform 0.2s ease"})),this.toggleDropdown(e,n,r)}}
              >
                <div
                  class="dropdown-selection"
                  style="display: flex; align-items: center; gap: 8px; order: ${N}; flex: ${R}; min-width: 0; width: ${W}; justify-content: ${K}; text-align: ${Y};"
                >
                  ${(()=>{if(void 0!==ee&&""!==ee){const e=Q,t=ee,o=te||"var(--primary-color)";return n.qy`
                        ${e?n.qy`<ha-icon
                              icon="${e}"
                              style="color: ${o};"
                            ></ha-icon>`:""}
                        <span>${t}</span>
                      `}if(ae&&(null==ne?void 0:ne.label))return n.qy`
                        ${ne.icon?n.qy`<ha-icon
                              icon="${ne.icon}"
                              style="color: ${ne.icon_color||"var(--primary-color)"};"
                            ></ha-icon>`:""}
                        <span>${ne.label}</span>
                      `;if(void 0!==ce){const e=pe,t=ce,o=ue||"var(--primary-color)";return!e&&g(t)?"":n.qy`
                        ${e?n.qy`<ha-icon
                              icon="${e}"
                              style="color: ${o};"
                            ></ha-icon>`:""}
                        ${g(t)?"":n.qy`<span>${t}</span>`}
                      `}if(re)return n.qy`<span style="color: var(--secondary-text-color);"
                          >${se}</span
                        >`;if(oe.length>0){const e=oe[0];return n.qy`
                        ${e.icon?n.qy`<ha-icon
                              icon="${e.icon}"
                              style="color: ${this.getOptionIconColor(e,t,f,o)};"
                            ></ha-icon>`:""}
                        <span>${e.label}</span>
                      `}return n.qy`<span style="color: var(--secondary-text-color);">No options</span>`})()}
                </div>
                <div
                  class="dropdown-chevron-container"
                  style="display: flex; align-items: center; cursor: pointer; padding: 4px; margin: -4px; order: ${U}; flex-shrink: 0;"
                  @click=${e=>{var t;e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault();const o=f.id;if(this.chevronClickHandling.has(o))return;this.chevronClickHandling.add(o);const n=!this.dropdownOpenStates.get(o),i=e.currentTarget.querySelector(".dropdown-chevron");i&&(i.style.transition="none",i.style.transform=n?"rotate(180deg)":"rotate(0deg)",requestAnimationFrame(()=>{i.style.transition="transform 0.2s ease"}));const s=e.currentTarget.closest(".dropdown-module-container"),a=null===(t=null==s?void 0:s.dataset)||void 0===t?void 0:t.previewContext;this.toggleDropdown(e,o,a||r),setTimeout(()=>{this.chevronClickHandling.delete(o)},100)}}
                >
                  <ha-icon
                    class="dropdown-chevron"
                    icon="${F}"
                    style="color: var(--secondary-text-color); transition: transform 0.2s ease; transform: ${this.dropdownOpenStates.get(f.id)?"rotate(180deg)":"rotate(0deg)"}; pointer-events: none;"
                  ></ha-icon>
                </div>
                ${ge}
              </div>

              <div
                class="dropdown-options"
                data-uc-role="pane"
                role="listbox"
                style="position: fixed !important; top: auto; left: auto; right: auto; background: var(--uc-pane-bg, var(--card-background-color)); border: var(--uc-pane-border, 1px solid var(--divider-color)); border-radius: var(--uc-r-4, 4px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: ${m.Mu.DROPDOWN_MENU} !important; display: none; pointer-events: none; visibility: hidden; max-height: ${B}px; overflow-y: auto; overflow-x: hidden; color: ${_}; font-size: ${this.addPixelUnit(x.toString())}; font-family: ${T}; font-weight: ${A};"
                @scroll=${e=>{e.stopPropagation(),e.stopImmediatePropagation()}}
                @wheel=${e=>{e.stopPropagation(),e.stopImmediatePropagation()}}
                @touchmove=${e=>{e.stopPropagation(),e.stopImmediatePropagation()}}
              >
                ${re?n.qy`
                      <div
                        class="dropdown-option"
                        role="option"
                        tabindex="-1"
                        aria-selected="false"
                        style="padding: 12px; cursor: pointer; border-bottom: 1px solid var(--divider-color); color: inherit; font-size: inherit; font-family: inherit; font-weight: inherit;"
                        @keydown=${e=>this.handleOptionKeydown(e,f.id)}
                        @click=${e=>{this.selectOption("",f),this.closeDropdown(e,f.id)}}
                      >
                        <span
                          style="color: var(--secondary-text-color); font-size: inherit; font-family: inherit; font-weight: inherit;"
                          >${se}</span
                        >
                      </div>
                    `:""}
                ${oe.map(e=>n.qy`
                    <div
                      class="dropdown-option"
                      role="option"
                      tabindex="-1"
                      aria-selected="${(null==ie?void 0:ie.label)===e.label?"true":"false"}"
                      style="padding: 12px; cursor: pointer; border-bottom: 1px solid var(--divider-color); display: flex; align-items: center; gap: 8px; transition: background-color 0.2s ease; color: inherit; font-size: inherit; font-family: inherit; font-weight: inherit;"
                      @keydown=${e=>this.handleOptionKeydown(e,f.id)}
                      @click=${n=>{if(J){const n=e.value||e.label;this.updateEntitySelection(f,n,t,o),this.selectOption(e.label,f)}else{if(f.track_state){const i=f.id;this.currentSelection.set(i,e.label),this.selectOption(e.label,f);const r=n.target.closest(".dropdown-module-container");if(r){const n=r.querySelector(".dropdown-selected span:last-child");n&&(n.textContent=e.label);const i=r.querySelector(".dropdown-selected > div");if(i){const n=i.querySelector("ha-icon");if(e.icon)if(n)n.setAttribute("icon",e.icon),n.style.color=this.getOptionIconColor(e,t,f,o);else{const n=document.createElement("ha-icon");n.setAttribute("icon",e.icon),n.style.color=this.getOptionIconColor(e,t,f,o),n.style.marginRight="8px",i.insertBefore(n,i.firstChild)}else n&&n.remove()}}}const i=(e.id?f.options.find(t=>t.id===e.id):void 0)||f.options.find(t=>t.label===e.label);if(i)this.selectOption(e.label,f),this.executeOptionAction(i,t,n.currentTarget||void 0,o,f);else if(V&&e.mode){const n=this.resolveEntity(f.source_entity,o)||f.source_entity;n&&n.startsWith("climate.")?(this.selectOption(e.label,f),t.callService("climate","set_hvac_mode",{entity_id:n,hvac_mode:e.mode}).catch(e=>{console.error("Failed to set HVAC mode:",e)})):this.selectOption(e.label,f)}else this.selectOption(e.label,f)}this.closeDropdown(n,f.id)}}
                      @mouseenter=${e=>{e.target.style.backgroundColor="rgba(var(--rgb-primary-color), 0.1)"}}
                      @mouseleave=${e=>{e.target.style.backgroundColor="transparent"}}
                    >
                      ${e.icon?n.qy`<ha-icon
                            icon="${e.icon}"
                            style="color: ${this.getOptionIconColor(e,t,f,o)};"
                          ></ha-icon>`:""}
                      <span>${e.label}</span>
                    </div>
                  `)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `,e,t)}getOptionIconColor(e,t,o,n){var i;if(e.use_state_color&&o.source_entity&&t){const e=this.resolveEntity(o.source_entity,n)||o.source_entity,r=t.states[e];if(r){const t=null===(i=r.attributes)||void 0===i?void 0:i.rgb_color;if(t&&Array.isArray(t)&&3===t.length)return`rgb(${t[0]}, ${t[1]}, ${t[2]})`;const o=e.split(".")[0],n=r.state;switch(o){case"light":return"on"===n?"#FFA500":"#666666";case"switch":return"on"===n?"#4CAF50":"#666666";case"binary_sensor":return"on"===n?"#F44336":"#4CAF50";case"sensor":return"#2196F3";default:return"on"===n||"open"===n||"active"===n?"var(--primary-color)":"#666666"}}}return e.icon_color||"var(--primary-color)"}async updateEntitySelection(e,t,o,n){if(!e.source_entity||!o)return;const i=this.resolveEntity(e.source_entity,n)||e.source_entity,r=i.split(".")[0];try{await o.callService(r,"select_option",{entity_id:i,option:t})}catch(e){console.error("Failed to update entity selection:",e)}}getIconColor(e,t){var o;if(e.use_state_color&&e.action.entity&&t){const n=t.states[e.action.entity];if(n){const t=null===(o=n.attributes)||void 0===o?void 0:o.rgb_color;if(t&&Array.isArray(t)&&3===t.length)return`rgb(${t[0]}, ${t[1]}, ${t[2]})`;const i=e.action.entity.split(".")[0],r=n.state;switch(i){case"light":return"on"===r?"#FFA500":"#666666";case"switch":return"on"===r?"#4CAF50":"#666666";case"binary_sensor":return"on"===r?"#F44336":"#4CAF50";case"sensor":return"#2196F3";default:return"on"===r||"open"===r||"active"===r?"var(--primary-color)":"#666666"}}}return e.icon_color||"var(--primary-color)"}resolveMenuDirection(e,t,o){const n=(null==e?void 0:e.menu_direction)||"auto";if("up"===n||"down"===n)return n;const i=window.innerHeight-t.bottom,r=t.top;return i>=o||i>=r?"down":"up"}positionDropdownFromTrigger(e,t,o,n){e.style.position="fixed",e.style.right="auto";const{left:i,width:r}=this.resolveMenuHorizontalPlacement(e,t);if(e.style.left=i-o.left+"px",e.style.width=`${r}px`,t.width<160&&r>t.width?e.style.minWidth=`${r}px`:e.style.minWidth="","up"===n){const n=Math.max(0,void 0!==o.bottom?o.bottom-t.top-1:window.innerHeight-t.top+o.top-1);e.style.bottom=`${n}px`,e.style.top="auto",e.style.transformOrigin="bottom center"}else{const n=Math.max(0,t.bottom-o.top-0);e.style.top=`${n}px`,e.style.bottom="auto",e.style.transformOrigin="top center"}}resolveMenuHorizontalPlacement(e,t){var o;const n=t.width,i=n<160?function(e,t=0){const o={display:e.style.display,visibility:e.style.visibility,position:e.style.position,left:e.style.left,top:e.style.top,width:e.style.width,maxWidth:e.style.maxWidth,height:e.style.height,maxHeight:e.style.maxHeight,overflow:e.style.overflow,overflowX:e.style.overflowX,overflowY:e.style.overflowY},n=[];try{e.style.display="block",e.style.visibility="hidden",e.style.position="fixed",e.style.left="0px",e.style.top="0px",e.style.width="max-content",e.style.maxWidth="none",e.style.height="auto",e.style.maxHeight="none",e.style.overflow="visible",e.style.overflowX="visible",e.style.overflowY="visible",e.offsetWidth,e.querySelectorAll(".dropdown-option").forEach(e=>{const t=e;n.push({el:t,whiteSpace:t.style.whiteSpace}),t.style.whiteSpace="nowrap"});let o=Math.max(e.scrollWidth||0,e.offsetWidth||0),i=0;return e.querySelectorAll(".dropdown-option").forEach(e=>{const t=e;o=Math.max(o,t.scrollWidth||0,t.offsetWidth||0);const n=t.querySelector("ha-icon");n&&n.getBoundingClientRect().width<8&&(i=24)}),i&&t>0&&t<=48&&(o+=i),o}finally{n.forEach(({el:e,whiteSpace:t})=>{e.style.whiteSpace=t}),e.style.display=o.display,e.style.visibility=o.visibility,e.style.position=o.position,e.style.left=o.left,e.style.top=o.top,e.style.width=o.width,e.style.maxWidth=o.maxWidth,e.style.height=o.height,e.style.maxHeight=o.maxHeight,e.style.overflow=o.overflow,e.style.overflowX=o.overflowX,e.style.overflowY=o.overflowY}}(e,null!==(o=t.controlWidth)&&void 0!==o?o:n):0;return function(e,t,o,n){if(t>=160||o<=t)return{left:e,width:t};let i=Math.min(o,280);n>0&&(i=Math.min(i,Math.max(t,n-16)));let r=e+t/2-i/2;if(n>0){const e=n-8-i;r=Math.max(8,Math.min(r,e))}return{left:Math.round(r),width:Math.ceil(i)}}(t.left,n,i,"undefined"!=typeof window?window.innerWidth:0)}getMenuAnchorRect(e){const t=e.getBoundingClientRect(),o=e.querySelector(".uc-blank-title-reach"),n=null==o?void 0:o.getBoundingClientRect();if(!n||n.width<=0)return t;const i=function(e,t){var o;const n=e.getRootNode(),i=n instanceof ShadowRoot?n:e.closest("ultra-card")||e.ownerDocument.body,r=e.ownerDocument,s=e.closest(".dropdown-module-container")||e,a=r.createRange();let l=null;const d=e=>{e.width<=0||e.height<=0||!function(e,t){const o=e.left+e.width/2,n=e.top+e.height/2;return o>=t.left&&o<=t.right&&n>=t.top&&n<=t.bottom}(e,t)||(l=l?v(l,e):e)},c=r.createTreeWalker(i,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{acceptNode:e=>s.contains(e)?NodeFilter.FILTER_REJECT:e instanceof Element&&e.matches("ha-icon, ha-state-icon, ha-svg-icon, svg, img")?(d(e.getBoundingClientRect()),NodeFilter.FILTER_REJECT):e.nodeType===Node.TEXT_NODE?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(let e=c.nextNode();e;e=c.nextNode())if(!g(null!==(o=e.textContent)&&void 0!==o?o:"")){a.selectNodeContents(e);for(const e of Array.from(a.getClientRects()))d(e)}return a.detach(),l}(e,n);return Object.assign(Object.assign({},v(t,null!=i?i:n)),{controlWidth:t.width})}measureFixedContainingBlock(e){const t={display:e.style.display,left:e.style.left,top:e.style.top,bottom:e.style.bottom,animation:e.style.animation};e.style.position="fixed",e.style.display="block",e.style.animation="none",e.style.left="0px",e.style.top="0px",e.style.bottom="auto";const o=e.getBoundingClientRect();e.style.top="auto",e.style.bottom="0px";const n=e.getBoundingClientRect();return Object.assign(e.style,t),{left:o.left||0,top:o.top||0,bottom:n.bottom||window.innerHeight}}getFixedHostRect(e){if(!e||e===document.body||e===document.documentElement)return{left:0,top:0};const t=e.getBoundingClientRect();return{left:t.left||0,top:t.top||0}}applyDropdownOpenAnimation(e,t){const o="up"===t?"uc-dropdown-grow-up":"uc-dropdown-grow-down";e.style.animation="none",requestAnimationFrame(()=>{e.style.animation=`${o} 140ms ease-out`})}toggleDropdown(e,t,o){var n,i,r;let s=null,a=null,l=t||"default";const d="live"===o||"ha-preview"===o;if(e){const t=e.target;a=t.classList.contains("dropdown-selected")?t:t.closest(".dropdown-selected");const o=t.closest(".custom-dropdown"),i=t.closest(".dropdown-module-container");(null===(n=null==i?void 0:i.dataset)||void 0===n?void 0:n.moduleId)&&(l=i.dataset.moduleId),s=null==o?void 0:o.querySelector(".dropdown-options")}else{const e=document.querySelector(`.dropdown-module-container[data-module-id="${l}"]`);s=null==e?void 0:e.querySelector(".dropdown-options"),a=null==e?void 0:e.querySelector(".dropdown-selected")}const c=!this.dropdownOpenStates.get(l);if(c&&this.dropdownOpenStates.forEach((e,t)=>{e&&t!==l&&this.closeDropdown(void 0,t)}),this.dropdownOpenStates.set(l,c),null==a||a.setAttribute("aria-expanded",String(c)),s)if(c)if(a){const e=this.getMenuAnchorRect(a),t=this.moduleContexts.get(l),o=44*(null!==(r=null===(i=null==t?void 0:t.module)||void 0===i?void 0:i.visible_items)&&void 0!==r?r:5),n=this.resolveMenuDirection(null==t?void 0:t.module,e,o);if(d){const{zIndex:t}=(0,h.I)(a,m.Mu.DROPDOWN_MENU);s.style.display="block",s.style.pointerEvents="auto",s.style.visibility="visible",this.positionDropdownFromTrigger(s,e,this.measureFixedContainingBlock(s),n),s.style.zIndex=t.toString(),s.style.maxHeight=`${o}px`,this.applyDropdownOpenAnimation(s,n),this.setupClickOutsideHandler(s,a,l),this.setupScrollAndResizeHandlers(l)}else{const{host:t,zIndex:i}=(0,h.I)(a,m.Mu.DROPDOWN_MENU);let r=this.portaledDropdowns.get(l);r&&r.parentElement!==t&&(this.destroyPortaledDropdown(l),r=void 0),r?r.innerHTML=s.innerHTML:(r=s.cloneNode(!0),r.id=`portaled-dropdown-${l}`,r.dataset.instanceId=l,t.appendChild(r),this.portaledDropdowns.set(l,r)),this.attachPortaledDropdownHandlers(r,l);const d=this.getFixedHostRect(t);r.style.display="block",r.style.pointerEvents="auto",r.style.visibility="visible",this.positionDropdownFromTrigger(r,e,d,n),r.style.zIndex=i.toString(),r.style.maxHeight=`${o}px`,this.applyDropdownOpenAnimation(r,n),r.style.overflowY="auto",r.style.overflowX="hidden",s.style.display="none",s.style.pointerEvents="none",s.style.visibility="hidden",this.portaledDropdownTriggers.set(l,a),this.setupClickOutsideHandler(r,a,l),this.setupScrollAndResizeHandlers(l),this.startPortalOrphanSweep()}}else s.style.display="block",s.style.pointerEvents="auto",s.style.visibility="visible";else d?(s.style.display="none",s.style.pointerEvents="none",s.style.visibility="hidden",this.removeClickOutsideHandler(),this.removeScrollAndResizeHandlers(l)):(this.destroyPortaledDropdown(l),s.style.display="none",s.style.pointerEvents="none",s.style.visibility="hidden",this.removeClickOutsideHandler(),this.removeScrollAndResizeHandlers(l))}closeDropdown(e,t){var o,n;let i=t||"default",r=null;e&&(r=e.target.closest(".dropdown-module-container"),(null===(o=null==r?void 0:r.dataset)||void 0===o?void 0:o.moduleId)&&(i=r.dataset.moduleId)),this.dropdownOpenStates.set(i,!1),this.updateChevronRotationInstant(i,!1,r||void 0);const s=document.querySelector(`.dropdown-module-container[data-module-id="${i}"] .dropdown-options`);s&&"none"!==s.style.display&&(s.style.display="none",s.style.pointerEvents="none",s.style.visibility="hidden"),null===(n=this.getTriggerElement(i))||void 0===n||n.setAttribute("aria-expanded","false"),this.destroyPortaledDropdown(i),this.removeClickOutsideHandler(),this.removeScrollAndResizeHandlers(i),this.removePortaledDropdownListeners(i)}setupClickOutsideHandler(e,t,o){this.removeClickOutsideHandler(),this.clickOutsideHandler=n=>{const i=n.target;if(!(i instanceof Node))return;const r=n.composedPath(),s=r.some(e=>{var t,o,n,i;return(null===(o=null===(t=null==e?void 0:e.classList)||void 0===t?void 0:t.contains)||void 0===o?void 0:o.call(t,"dropdown-chevron-container"))||(null===(i=null===(n=null==e?void 0:e.classList)||void 0===n?void 0:n.contains)||void 0===i?void 0:i.call(n,"dropdown-chevron"))}),a=i===e||e.contains(i)||r.some(t=>t===e||(null==t?void 0:t.nodeType)===Node.ELEMENT_NODE&&e.contains(t)),l=i===t||t.contains(i)||r.some(e=>e===t);if(a||l||s)return;this.dropdownOpenStates.set(o,!1),t.setAttribute("aria-expanded","false");const d=t.closest(".dropdown-module-container");this.updateChevronRotationInstant(o,!1,d||void 0),this.portaledDropdowns.get(o)===e?this.destroyPortaledDropdown(o):(e.style.display="none",e.style.pointerEvents="none",e.style.visibility="hidden"),this.removeClickOutsideHandler(),this.removeScrollAndResizeHandlers(o)},this.clickOutsideKeydownHandler=e=>{"Escape"===e.key&&this.closeDropdown(void 0,o)},document.addEventListener("pointerdown",this.clickOutsideHandler,!0),document.addEventListener("click",this.clickOutsideHandler,!0),document.addEventListener("keydown",this.clickOutsideKeydownHandler,!0)}removeClickOutsideHandler(){this.clickOutsideHandler&&(document.removeEventListener("pointerdown",this.clickOutsideHandler,!0),document.removeEventListener("click",this.clickOutsideHandler,!0),this.clickOutsideHandler=null),this.clickOutsideKeydownHandler&&(document.removeEventListener("keydown",this.clickOutsideKeydownHandler,!0),this.clickOutsideKeydownHandler=null)}setupScrollAndResizeHandlers(e){this.activeScrollHandlers.add(e),this.scrollHandler||(this.scrollHandler=e=>{Array.from(this.dropdownOpenStates.entries()).filter(([e,t])=>t).map(([e])=>e).forEach(t=>{const o=this.portaledDropdowns.get(t),n=e.target;if(n!==document&&n!==window&&n&&n!==document.documentElement&&n!==document.body){if(n instanceof HTMLElement){const n=e.composedPath(),i=o||document.querySelector(`.dropdown-module-container[data-module-id="${t}"] .dropdown-options`);if(i&&n.some(e=>e===i||e.nodeType===Node.ELEMENT_NODE&&i.contains(e)))return;this.closeDropdown(void 0,t)}}else this.closeDropdown(void 0,t)})},window.addEventListener("scroll",this.scrollHandler,{passive:!0,capture:!0}),document.addEventListener("scroll",this.scrollHandler,{passive:!0,capture:!0}),document.addEventListener("touchmove",this.scrollHandler,{passive:!0,capture:!0})),this.resizeHandler||(this.resizeHandler=()=>{this.activeScrollHandlers.forEach(e=>{this.updatePortaledDropdownPosition(e)})},window.addEventListener("resize",this.resizeHandler,{passive:!0})),this.removeParentScrollListeners(e);const t=this.portaledDropdownTriggers.get(e),o=[];if(t){let n=t.parentElement,i=0;for(;n&&i<5;){const t=t=>{const o=t.composedPath(),n=this.portaledDropdowns.get(e);n&&(o.some(e=>e===n||e.nodeType===Node.ELEMENT_NODE&&n.contains(e))||this.closeDropdown(void 0,e))};n.addEventListener("scroll",t,{passive:!0,capture:!0}),o.push({el:n,handler:t}),n=n.parentElement,i++}}this.scrollListenerParents.set(e,o)}removeParentScrollListeners(e){const t=this.scrollListenerParents.get(e);t&&(t.forEach(({el:e,handler:t})=>{e.removeEventListener("scroll",t,{capture:!0})}),this.scrollListenerParents.delete(e))}destroyPortaledDropdown(e){var t;this.removePortaledDropdownListeners(e),this.removeScrollAndResizeHandlers(e),null===(t=this.portaledDropdowns.get(e))||void 0===t||t.remove(),this.portaledDropdowns.delete(e),this.portaledDropdownTriggers.delete(e),this.stopPortalOrphanSweepIfIdle()}stopPortalOrphanSweepIfIdle(){this.portalOrphanSweep&&0===this.portaledDropdowns.size&&(clearInterval(this.portalOrphanSweep),this.portalOrphanSweep=0)}startPortalOrphanSweep(){this.portalOrphanSweep||(this.portalOrphanSweep=window.setInterval(()=>{var e;for(const t of Array.from(this.portaledDropdowns.keys()))(null===(e=this.portaledDropdownTriggers.get(t))||void 0===e?void 0:e.isConnected)||(this.dropdownOpenStates.set(t,!1),this.destroyPortaledDropdown(t),this.removeClickOutsideHandler());this.stopPortalOrphanSweepIfIdle()},400))}removePortaledDropdownListeners(e){const t=this.portaledDropdownListeners.get(e);t&&(t.el.removeEventListener("wheel",t.wheel,{capture:!0}),t.el.removeEventListener("touchmove",t.touchmove,{capture:!0}),t.el.removeEventListener("scroll",t.scroll),this.portaledDropdownListeners.delete(e))}removeScrollAndResizeHandlers(e){e?(this.activeScrollHandlers.delete(e),this.removeParentScrollListeners(e),0===this.activeScrollHandlers.size&&(this.scrollHandler&&(window.removeEventListener("scroll",this.scrollHandler,{capture:!0}),document.removeEventListener("scroll",this.scrollHandler,{capture:!0}),document.removeEventListener("touchmove",this.scrollHandler,{capture:!0}),this.scrollHandler=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null))):(this.activeScrollHandlers.clear(),Array.from(this.scrollListenerParents.keys()).forEach(e=>this.removeParentScrollListeners(e)),this.scrollHandler&&(window.removeEventListener("scroll",this.scrollHandler,{capture:!0}),document.removeEventListener("scroll",this.scrollHandler,{capture:!0}),document.removeEventListener("touchmove",this.scrollHandler,{capture:!0}),this.scrollHandler=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null))}updatePortaledDropdownPosition(e){var t,o;const n=this.portaledDropdowns.get(e),i=this.portaledDropdownTriggers.get(e);if(n&&i&&"block"===n.style.display)try{const r=this.getMenuAnchorRect(i),s=this.moduleContexts.get(e),a=44*(null!==(o=null===(t=null==s?void 0:s.module)||void 0===t?void 0:t.visible_items)&&void 0!==o?o:5),l=this.resolveMenuDirection(null==s?void 0:s.module,r,a),d=n.parentElement,c=this.getFixedHostRect(d);this.positionDropdownFromTrigger(n,r,c,l)}catch(e){console.error("Error updating dropdown position:",e)}}updateChevronRotation(e,t,o){if(o){const e=o.querySelector(".dropdown-chevron");if(e)return void(e.style.transform=t?"rotate(180deg)":"rotate(0deg)")}const n=document.querySelector(`.dropdown-module-container[data-module-id="${e}"]`);if(n){const e=n.querySelector(".dropdown-chevron");e&&(e.style.transform=t?"rotate(180deg)":"rotate(0deg)")}}updateChevronRotationInstant(e,t,o){if(o){const e=o.querySelector(".dropdown-chevron");if(e)return e.style.transition="none",e.style.transform=t?"rotate(180deg)":"rotate(0deg)",void requestAnimationFrame(()=>{e.style.transition="transform 0.2s ease"})}const n=document.querySelector(`.dropdown-module-container[data-module-id="${e}"]`);if(n){const e=n.querySelector(".dropdown-chevron");e&&(e.style.transition="none",e.style.transform=t?"rotate(180deg)":"rotate(0deg)",requestAnimationFrame(()=>{e.style.transition="transform 0.2s ease"}))}}getTriggerElement(e){return this.portaledDropdownTriggers.get(e)||document.querySelector(`.dropdown-module-container[data-module-id="${e}"] .dropdown-selected`)}focusFirstOption(e){var t;const o=[this.portaledDropdowns.get(e)||null,document.querySelector(`.dropdown-module-container[data-module-id="${e}"] .dropdown-options`)];for(const e of o)if(e&&"block"===e.style.display)return void(null===(t=e.querySelector(".dropdown-option"))||void 0===t||t.focus())}handleOptionKeydown(e,t){var o,n,i,r;const s=e.currentTarget,a=s.parentElement;if(!a)return;const l=Array.from(a.querySelectorAll(".dropdown-option")),d=l.indexOf(s);if("ArrowDown"===e.key)e.preventDefault(),e.stopPropagation(),null===(o=l[Math.min(d+1,l.length-1)])||void 0===o||o.focus();else if("ArrowUp"===e.key)e.preventDefault(),e.stopPropagation(),null===(n=l[Math.max(d-1,0)])||void 0===n||n.focus();else if("Home"===e.key)e.preventDefault(),e.stopPropagation(),null===(i=l[0])||void 0===i||i.focus();else if("End"===e.key)e.preventDefault(),e.stopPropagation(),null===(r=l[l.length-1])||void 0===r||r.focus();else if("Enter"===e.key||" "===e.key){e.preventDefault(),e.stopPropagation();const o=this.getTriggerElement(t);s.click(),null==o||o.focus()}else if("Escape"===e.key){e.preventDefault();const o=this.getTriggerElement(t);this.closeDropdown(void 0,t),null==o||o.focus()}}handleTriggerKeydown(e,t,o){const n=this.dropdownOpenStates.get(t)||!1;"Enter"===e.key||" "===e.key||"ArrowDown"===e.key&&!n?(e.preventDefault(),e.stopPropagation(),this.toggleDropdown(e,t,o),this.updateChevronRotationInstant(t,!n,e.currentTarget.closest(".dropdown-module-container")||void 0),n||requestAnimationFrame(()=>this.focusFirstOption(t))):"Escape"===e.key&&n&&(e.preventDefault(),this.closeDropdown(e,t),e.currentTarget.focus())}attachPortaledDropdownHandlers(e,t){var o;const n=this.moduleContexts.get(t);if(!n)return void console.error("No module context found for",t);const{module:i,hass:r,config:s}=n,a="entity"===i.source_mode&&i.source_entity,l=i.unified_template_mode&&i.unified_template,c=t=>{const o=t.target;(o===e||e.contains(o))&&t.stopPropagation()},p=e=>{e.stopPropagation(),e.stopImmediatePropagation()},u=e=>{e.stopPropagation(),e.stopImmediatePropagation()};this.removePortaledDropdownListeners(t),e.addEventListener("wheel",p,{passive:!0,capture:!0}),e.addEventListener("touchmove",u,{passive:!0,capture:!0}),e.addEventListener("scroll",c,{passive:!0}),this.portaledDropdownListeners.set(t,{el:e,wheel:p,touchmove:u,scroll:c});const m=e.querySelectorAll(".dropdown-option");if(a){const e=this.getOptionsFromEntity(i,r,s);m.forEach((o,n)=>{const a=o.cloneNode(!0);o.replaceWith(a),a.addEventListener("click",o=>{o.stopPropagation();const a=e[n];if(a){const e=this.resolveEntity(i.source_entity,s)||i.source_entity;if(!e)return;const o=r.states[e],n=this.formatOptionLabel(a,o,r);this.updateEntitySelection(i,a,r,s),this.selectOption(n,i),this.closeDropdown(void 0,t)}}),a.addEventListener("keydown",e=>this.handleOptionKeydown(e,t)),a.addEventListener("mouseenter",()=>{a.style.backgroundColor="rgba(var(--rgb-primary-color), 0.1)"}),a.addEventListener("mouseleave",()=>{a.style.backgroundColor="transparent"})})}else if(l){const e=(0,d.KD)(i.unified_template,r,s),n=this._hashString(e),a=`unified_dropdown_${i.id}_${n}`,l=null===(o=null==r?void 0:r.__uvc_template_strings)||void 0===o?void 0:o[a];let c=[];if(l)try{const e=String(l).trim();let t=null;e.startsWith("{")&&e.endsWith("}")?t=JSON.parse(e):e.startsWith("[")&&e.endsWith("]")&&(t={options:JSON.parse(e)}),t&&t.options&&Array.isArray(t.options)&&(c=t.options.map(e=>({label:String(e.label||e.name||"Option"),mode:e.mode||e.value})))}catch(e){console.error("Error parsing template in portaled handler:",e)}m.forEach((e,o)=>{const n=e.cloneNode(!0);e.replaceWith(n);const a=c[o];n.addEventListener("click",e=>{if(e.stopPropagation(),a){i.track_state&&this.currentSelection.set(t,a.label),this.selectOption(a.label,i);const e=this.resolveEntity(i.source_entity,s)||i.source_entity;a.mode&&e&&e.startsWith("climate.")&&r.callService("climate","set_hvac_mode",{entity_id:e,hvac_mode:a.mode}).catch(e=>{console.error("Failed to set HVAC mode:",e)}),this.closeDropdown(void 0,t)}}),n.addEventListener("keydown",e=>this.handleOptionKeydown(e,t)),n.addEventListener("mouseenter",()=>{n.style.backgroundColor="rgba(var(--rgb-primary-color), 0.1)"}),n.addEventListener("mouseleave",()=>{n.style.backgroundColor="transparent"})})}else{const e=i.options;m.forEach((o,n)=>{const a=i.track_state?n:n-1;if(a<0){const e=o.cloneNode(!0);return o.replaceWith(e),e.addEventListener("click",e=>{e.stopPropagation(),this.selectOption("",i),this.closeDropdown(void 0,t)}),void e.addEventListener("keydown",e=>this.handleOptionKeydown(e,t))}const l=e[a];if(!l)return;const d=o.cloneNode(!0);o.replaceWith(d),d.addEventListener("click",e=>{e.stopPropagation(),i.track_state&&this.currentSelection.set(t,l.label),this.selectOption(l.label,i),this.executeOptionAction(l,r,d,s,i),this.closeDropdown(void 0,t)}),d.addEventListener("keydown",e=>this.handleOptionKeydown(e,t)),d.addEventListener("mouseenter",()=>{d.style.backgroundColor="rgba(var(--rgb-primary-color), 0.1)"}),d.addEventListener("mouseleave",()=>{d.style.backgroundColor="transparent"})})}}getStoredSelection(e){try{return(0,p.bi)(`ultra_card_dropdown_selection_${e}`)}catch(e){return console.error("Error reading from localStorage:",e),null}}setStoredSelection(e,t){try{(0,p.FX)(`ultra_card_dropdown_selection_${e}`,t)}catch(e){console.error("Error writing to localStorage:",e)}}selectOption(e,t){"entity"!==t.source_mode&&("last_chosen"!==t.closed_title_mode&&t.closed_title_mode||this.setStoredSelection(t.id,e))}executeOptionAction(e,t,n,i,r){var s,l,d,c;if(!1!==(null==i?void 0:i.haptic_feedback)&&Promise.resolve().then(()=>o(8153)).then(({forwardHaptic:e})=>{e("selection")}),"more-info"===e.action.action&&e.action.entity){const t=this.resolveEntity(e.action.entity,i)||e.action.entity,o=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});return void(n?n.dispatchEvent(o):(document.dispatchEvent(o),window.dispatchEvent(o)))}const p=e.action.entity||(null===(s=e.action.service_data)||void 0===s?void 0:s.entity_id)||(null===(l=e.action.data)||void 0===l?void 0:l.entity_id)||(Array.isArray(null===(d=e.action.target)||void 0===d?void 0:d.entity_id)?e.action.target.entity_id[0]:null===(c=e.action.target)||void 0===c?void 0:c.entity_id)||void 0,u=this.resolveEntity(p,i)||p,m=Object.assign(Object.assign({},e.action),{entity:u||e.action.entity});a.K.handleAction(m,t,n||document.body,i,u,r)}addPixelUnit(e){return e?"auto"===e||"none"===e||"inherit"===e?e:/^\d+$/.test(e)?`${e}px`:/^[\d\s]+$/.test(e)?e.split(" ").map(e=>e.trim()?`${e}px`:e).join(" "):e:e}styleObjectToCss(e){return Object.entries(e).map(([e,t])=>`${e.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${t}`).join("; ")}_hashString(e){let t=0;for(let o=0;o<e.length;o+=1)t=(t<<5)-t+e.charCodeAt(o),t|=0;return Math.abs(t)}validate(e){const t=e,o=[...super.validate(e).errors];return"entity"===t.source_mode?t.source_entity&&t.source_entity.trim():t.options&&t.options.length>0&&t.options.forEach((e,t)=>{if((e.label&&""!==e.label.trim()||e.action)&&e.action)switch(e.action.action){case"more-info":case"toggle":e.action.entity||o.push(`Option ${t+1}: Entity is required for ${e.action.action} action`);break;case"navigate":e.action.navigation_path||o.push(`Option ${t+1}: Navigation path is required for navigate action`);break;case"url":e.action.url_path||o.push(`Option ${t+1}: URL is required for url action`);break;case"perform-action":e.action.perform_action||e.action.service||o.push(`Option ${t+1}: Service is required for perform-action`)}}),{valid:0===o.length,errors:o}}getStyles(){return`\n      .dropdown-module-container {\n        width: 100%;\n        box-sizing: border-box;\n        position: relative;\n        pointer-events: none;\n        isolation: isolate;\n        overflow: visible !important;\n      }\n\n      .dropdown-module-preview {\n        width: 100%;\n        position: relative;\n        overflow: visible !important;\n        pointer-events: none;\n      }\n\n      /* label styles removed */\n\n      /* Fix dropdown width in preview */\n      .dropdown-module-container select,\n      .dropdown-module-container ha-select {\n        width: 100% !important;\n        max-width: 100% !important;\n        box-sizing: border-box !important;\n        pointer-events: auto !important;\n      }\n\n      /* Custom dropdown styling - allow Global Design tab to override */\n      .custom-dropdown {\n        position: relative;\n        width: inherit;\n        height: inherit;\n        overflow: visible !important;\n        pointer-events: none;\n        z-index: 1;\n      }\n\n      /* Ensure preview containers allow overflow for dropdowns */\n      .dropdown-module-container[data-preview-context="live"],\n      .dropdown-module-container[data-preview-context="ha-preview"] {\n        overflow: visible !important;\n      }\n\n      .dropdown-module-container[data-preview-context="live"] .dropdown-module-preview,\n      .dropdown-module-container[data-preview-context="ha-preview"] .dropdown-module-preview {\n        overflow: visible !important;\n      }\n\n      .dropdown-selection:empty {\n        display: none !important;\n      }\n\n      .dropdown-selected.uc-blank-closed-title {\n        width: max-content !important;\n        min-width: 0 !important;\n        padding-left: 2px !important;\n        padding-right: 2px !important;\n        gap: 0 !important;\n      }\n\n      .dropdown-selected.uc-blank-closed-title .dropdown-selection {\n        display: none !important;\n        width: 0 !important;\n        min-width: 0 !important;\n        flex: 0 0 0 !important;\n        overflow: hidden !important;\n        margin: 0 !important;\n        padding: 0 !important;\n      }\n\n      .dropdown-selected {\n        cursor: pointer;\n        user-select: none;\n        pointer-events: auto;\n        /* Allow all design properties to be inherited */\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: inherit;\n        color: inherit;\n        background: inherit;\n        border: inherit;\n        border-radius: inherit;\n        text-align: inherit;\n        width: inherit;\n        height: inherit;\n        max-width: inherit;\n        max-height: inherit;\n        min-width: inherit;\n        min-height: inherit;\n      }\n\n      .dropdown-selected:hover {\n        background: rgba(var(--rgb-primary-color), 0.05) !important;\n      }\n\n      .dropdown-selected:focus-visible,\n      .dropdown-option:focus-visible {\n        outline: 2px solid var(--primary-color);\n        outline-offset: -2px;\n      }\n\n      .dropdown-selected .uc-blank-title-reach {\n        pointer-events: auto;\n      }\n\n      .dropdown-selected * {\n        pointer-events: none;\n      }\n\n      .dropdown-chevron-container {\n        cursor: pointer;\n        pointer-events: auto;\n        flex-shrink: 0;\n        user-select: none;\n      }\n\n      .dropdown-chevron-container * {\n        pointer-events: none;\n      }\n\n      .dropdown-chevron {\n        pointer-events: none;\n        flex-shrink: 0;\n      }\n\n      .dropdown-options {\n        position: fixed !important;\n        z-index: ${m.Mu.DROPDOWN_MENU} !important;\n        background: var(--uc-pane-bg, var(--card-background-color)) !important;\n        border: 1px solid var(--divider-color) !important;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;\n        border-radius: inherit;\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: inherit;\n        pointer-events: none !important;\n        visibility: hidden !important;\n        overflow-y: auto !important;\n        overflow-x: hidden !important;\n        -webkit-overflow-scrolling: touch;\n        overscroll-behavior: contain;\n        scrollbar-width: thin;\n        scrollbar-color: var(--divider-color) var(--secondary-background-color);\n      }\n\n      @keyframes uc-dropdown-grow-down {\n        from {\n          opacity: 0;\n          transform: translateY(-4px) scaleY(0.92);\n        }\n        to {\n          opacity: 1;\n          transform: translateY(0) scaleY(1);\n        }\n      }\n\n      @keyframes uc-dropdown-grow-up {\n        from {\n          opacity: 0;\n          transform: translateY(4px) scaleY(0.92);\n        }\n        to {\n          opacity: 1;\n          transform: translateY(0) scaleY(1);\n        }\n      }\n\n      /* Preview contexts - use fixed positioning with higher z-index */\n      /* Need to be above popup content (1001) and popup tabs (2000) */\n      .dropdown-module-container[data-preview-context="live"] .dropdown-options,\n      .dropdown-module-container[data-preview-context="ha-preview"] .dropdown-options {\n        position: fixed !important;\n        z-index: ${m.Mu.GRAPH_TOOLTIP} !important;\n      }\n\n      .dropdown-options[style*="display: block"] {\n        pointer-events: auto !important;\n        visibility: visible !important;\n      }\n\n      /* Ensure scrollbar is visible and functional */\n      .dropdown-options::-webkit-scrollbar {\n        width: 10px;\n        height: 10px;\n      }\n\n      .dropdown-options::-webkit-scrollbar-track {\n        background: var(--secondary-background-color);\n        border-radius: var(--uc-r-4, 4px);\n      }\n\n      .dropdown-options::-webkit-scrollbar-thumb {\n        background: var(--divider-color);\n        border-radius: var(--uc-r-4, 4px);\n        cursor: pointer;\n        -webkit-user-select: none;\n        user-select: none;\n      }\n\n      .dropdown-options::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color);\n      }\n\n      .dropdown-options::-webkit-scrollbar-thumb:active {\n        background: var(--primary-color);\n        opacity: 0.8;\n      }\n\n      /* Ensure scrollbar is clickable and draggable */\n      .dropdown-options[style*="display: block"]::-webkit-scrollbar-thumb {\n        pointer-events: auto !important;\n      }\n\n      .dropdown-option {\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: inherit;\n        color: inherit;\n        text-align: inherit;\n      }\n\n      .dropdown-option:hover {\n        background: rgba(var(--rgb-primary-color), 0.1) !important;\n      }\n\n      .dropdown-option:last-child {\n        border-bottom: none !important;\n      }\n\n      /* Enable pointer events only on interactive elements */\n      .dropdown-module-container .dropdown-selected,\n      .dropdown-module-container .dropdown-chevron-container,\n      .dropdown-module-container .dropdown-option {\n        pointer-events: auto;\n      }\n\n\n      /* Remove the ::before pseudo-element that was blocking clicks */\n      /* This was extending beyond the container and intercepting pointer events */\n\n      /* Let HA handle dropdown positioning naturally */\n\n      /* Style dropdown items with icons */\n      .dropdown-module-container mwc-list-item ha-icon {\n        margin-right: 8px !important;\n        color: var(--primary-color) !important;\n      }\n\n      .dropdown-module-container mwc-list-item span {\n        display: flex !important;\n        align-items: center !important;\n      }\n\n      .options-list {\n        max-height: 400px;\n        overflow-y: auto;\n      }\n\n      .option-item {\n        transition: all 0.2s ease;\n        position: relative;\n        cursor: default;\n      }\n\n      .option-item:hover {\n        background: rgba(var(--rgb-primary-color), 0.05);\n      }\n\n      .option-item[draggable="true"] {\n        cursor: grab;\n      }\n\n      .option-item:active {\n        cursor: grabbing;\n      }\n\n      .option-item.dragging {\n        opacity: 0.7;\n        transform: rotate(2deg) scale(0.95);\n        box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n        z-index: 100;\n        position: relative;\n      }\n\n      .drag-handle {\n        transition: all 0.2s ease;\n      }\n\n      .drag-handle:strong {\n        background: rgba(var(--rgb-primary-color), 0.15) !important;\n        transform: scale(1.1);\n      }\n\n      .drag-handle:active {\n        cursor: grabbing !important;\n        transform: scale(0.95);\n      }\n\n      .option-header {\n        user-select: none;\n        transition: background-color 0.2s ease;\n      }\n\n      .option-header:hover {\n        background: rgba(var(--rgb-primary-color), 0.1) !important;\n      }\n\n      .option-header ha-icon[icon="mdi:drag"] {\n        transition: color 0.2s ease;\n      }\n\n      .option-header:hover ha-icon[icon="mdi:drag"] {\n        color: var(--primary-color) !important;\n      }\n\n      .expand-caret {\n        transition: transform 0.2s ease !important;\n      }\n\n      .option-content {\n        transition: all 0.3s ease;\n        overflow: hidden;\n      }\n\n      .option-content.collapsed {\n        display: none !important;\n      }\n\n      /* Simplified form styling - let HA handle dropdowns */\n      .option-item ha-form,\n      .field-group ha-form {\n        position: relative;\n      }\n\n      /* Conditional fields grouping */\n      .conditional-fields-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n        animation: slideInFromLeft 0.3s ease-out;\n      }\n\n      .conditional-fields-group:hover {\n        background: rgba(var(--rgb-primary-color), 0.12);\n      }\n\n      .conditional-fields-header {\n        background: rgba(var(--rgb-primary-color), 0.15);\n        padding: 12px 16px;\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-color);\n        border-bottom: 1px solid rgba(var(--rgb-primary-color), 0.2);\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n      }\n\n      .conditional-fields-content {\n        padding: 16px;\n      }\n\n      .conditional-fields-content > .field-title:first-child {\n        margin-top: 0 !important;\n      }\n\n      @keyframes slideInFromLeft {\n        from {\n          opacity: 0;\n          transform: translateX(-10px);\n        }\n        to {\n          opacity: 1;\n          transform: translateX(0);\n        }\n      }\n\n      /* Settings section styling */\n      .settings-section {\n        background: var(--secondary-background-color);\n        border-radius: var(--uc-r-8, 8px);\n        padding: 16px;\n        margin-bottom: 32px;\n        position: relative;\n      }\n\n      .section-title {\n        font-size: 18px !important;\n        font-weight: 700 !important;\n        text-transform: uppercase !important;\n        color: var(--primary-color) !important;\n        margin-bottom: 16px !important;\n        padding-bottom: 0 !important;\n        border-bottom: none !important;\n        letter-spacing: 0.5px !important;\n      }\n\n      .field-title {\n        font-size: 16px !important;\n        font-weight: 600 !important;\n        color: var(--primary-text-color) !important;\n        margin-bottom: 4px !important;\n      }\n\n      .field-description {\n        font-size: 13px !important;\n        color: var(--secondary-text-color) !important;\n        margin-bottom: 12px !important;\n        opacity: 0.8 !important;\n        line-height: 1.4 !important;\n      }\n\n      .field-group {\n        margin-bottom: 16px;\n        position: relative;\n      }\n    `}}},3361(e,t,o){o.d(t,{I:()=>i});var n=o(1001);function i(e,t=n.Mu.DROPDOWN_MENU){var o;const i=null===(o=null==e?void 0:e.closest)||void 0===o?void 0:o.call(e,".ultra-popup-portal");return i instanceof HTMLElement?{host:i,zIndex:n.Mu.GRAPH_TOOLTIP}:{host:document.body,zIndex:t}}}};