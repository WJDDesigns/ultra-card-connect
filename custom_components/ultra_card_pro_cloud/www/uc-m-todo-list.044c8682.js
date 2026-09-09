export const __webpack_esm_ids__=[3254];export const __webpack_esm_modules__={285(t,e,i){i.d(e,{UltraTodoListModule:()=>a});var o=i(2618),d=i(7475),r=i(6478),s=i(8938);i(7921);class a extends d.m{constructor(){super(...arguments),this.metadata={type:"todo_list",title:"To-Do List",description:"Show, check off, and add items on Home Assistant to-do lists",author:"WJD Designs",version:"1.0.0",icon:"mdi:checkbox-marked-outline",category:"data",tags:["todo","tasks","shopping","list","checklist","interactive"]},this._cache=new Map}createDefault(t){return{id:t||this.generateId("todo_list"),type:"todo_list",entity:"",title:"",show_title:!0,show_completed:!1,show_due_date:!0,enable_add_item:!0,max_items:25,accent_color:"",text_color:"",secondary_text_color:"",card_background_color:"",display_mode:"always",display_conditions:[]}}renderOtherTab(t,e,i,o){return s.X.render(t,e,t=>o(t))}renderGeneralTab(t,e,i,d){var s,a;const l=t,n=(null===(s=null==e?void 0:e.locale)||void 0===s?void 0:s.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,r.kg)("editor.todo_list.entity_section",n,"List"),(0,r.kg)("editor.todo_list.entity_section_desc",n,"Choose the to-do list to display."),[{title:(0,r.kg)("editor.todo_list.entity",n,"To-do entity"),description:(0,r.kg)("editor.todo_list.entity_desc",n,"Any todo entity — shopping lists, tasks, etc."),hass:e,data:{entity:l.entity||""},schema:[{name:"entity",selector:{entity:{domain:"todo"}}}],onChange:t=>{var e,i;d({entity:null!==(i=null===(e=t.detail.value)||void 0===e?void 0:e.entity)&&void 0!==i?i:""}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.todo_list.title",n,"Title override"),description:(0,r.kg)("editor.todo_list.title_desc",n,"Leave blank to use the list name."),hass:e,data:{title:l.title||""},schema:[this.textField("title")],onChange:t=>{d({title:t.detail.value.title}),this.triggerPreviewUpdate()}}])}
        ${this.renderSettingsSection((0,r.kg)("editor.todo_list.display_section",n,"Display"),(0,r.kg)("editor.todo_list.display_section_desc",n,"Choose what to show."),[{title:(0,r.kg)("editor.todo_list.show_title",n,"Show title"),description:"",hass:e,data:{show_title:!1!==l.show_title},schema:[this.booleanField("show_title")],onChange:t=>{d({show_title:t.detail.value.show_title}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.todo_list.show_completed",n,"Show completed items"),description:(0,r.kg)("editor.todo_list.show_completed_desc",n,"Completed items appear crossed out below active ones."),hass:e,data:{show_completed:!!l.show_completed},schema:[this.booleanField("show_completed")],onChange:t=>{d({show_completed:t.detail.value.show_completed}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.todo_list.show_due",n,"Show due dates"),description:"",hass:e,data:{show_due_date:!1!==l.show_due_date},schema:[this.booleanField("show_due_date")],onChange:t=>{d({show_due_date:t.detail.value.show_due_date}),this.triggerPreviewUpdate()}},{title:(0,r.kg)("editor.todo_list.enable_add",n,"Enable adding items"),description:(0,r.kg)("editor.todo_list.enable_add_desc",n,"Input field at the bottom when the list supports it."),hass:e,data:{enable_add_item:!1!==l.enable_add_item},schema:[this.booleanField("enable_add_item")],onChange:t=>{d({enable_add_item:t.detail.value.enable_add_item}),this.triggerPreviewUpdate()}}])}
        ${this.renderSliderField((0,r.kg)("editor.todo_list.max_items",n,"Max items"),(0,r.kg)("editor.todo_list.max_items_desc",n,"Maximum items to show."),null!==(a=l.max_items)&&void 0!==a?a:25,25,1,100,1,t=>{d({max_items:t}),this.triggerPreviewUpdate()},"")}
        ${this.renderColorField((0,r.kg)("editor.todo_list.accent_color",n,"Accent color"),(0,r.kg)("editor.todo_list.accent_color_desc",n,"Checkboxes and the add button."),e,l.accent_color||"","var(--primary-color)",t=>{d({accent_color:t}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,r.kg)("editor.todo_list.text_color",n,"Text color"),"",e,l.text_color||"","var(--primary-text-color)",t=>{d({text_color:t}),this.triggerPreviewUpdate()})}
        ${this.renderColorField((0,r.kg)("editor.todo_list.card_bg",n,"Card background"),"",e,l.card_background_color||"","var(--card-background-color)",t=>{d({card_background_color:t}),this.triggerPreviewUpdate()})}
      </div>
    `}renderPreview(t,e,i,d){var s,a,l;const n=t,c=(null===(s=null==e?void 0:e.locale)||void 0===s?void 0:s.language)||"en",_=this.resolveEntity(n.entity,i)||n.entity;if(!_||!(null==e?void 0:e.states[_]))return this.renderGradientErrorState((0,r.kg)("editor.todo_list.config_needed",c,"Select a to-do list"),(0,r.kg)("editor.todo_list.config_needed_desc",c,"Choose a todo entity in the General tab"),"mdi:checkbox-marked-outline");const h=e.states[_].attributes||{},p=h.supported_features||0,u=!(4&~p),g=!(1&~p),m=this._getItems(n,_,e),v=m.filter(t=>"completed"!==t.status),y=n.show_completed?m.filter(t=>"completed"===t.status):[],x=null!==(a=n.max_items)&&void 0!==a?a:25,w=[...v,...y].slice(0,x),b=n.accent_color||"var(--primary-color)",f=n.text_color||"var(--primary-text-color)",k=n.secondary_text_color||"var(--secondary-text-color)",$=n.card_background_color||"var(--uc-pane-bg, var(--card-background-color))",S=(null===(l=n.title)||void 0===l?void 0:l.trim())||h.friendly_name||_,C=this.buildStyleString(this.buildDesignStyles(t,e)),U=this.getHoverEffectClass(t);return o.qy`
      <div
        class="uc-todo-wrapper ${U}"
        data-uc-role="pane"
        style="padding:16px;border-radius:var(--uc-r-12, 12px);background:${$};${C}"
      >
        ${this.wrapWithAnimation(o.qy`
            ${!1!==n.show_title?o.qy`
                  <div
                    style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;"
                  >
                    <span style="color:${f};font-weight:700;">${S}</span>
                    <span style="color:${k};font-size:12px;font-weight:600;">
                      ${v.length}
                      ${(0,r.kg)("editor.todo_list.items_left",c,"left")}
                    </span>
                  </div>
                `:o.s6}
            ${0===w.length?o.qy`<div
                  style="color:${k};font-size:13px;text-align:center;padding:12px 0;"
                >
                  ${(0,r.kg)("editor.todo_list.empty",c,"Nothing to do — list is empty")}
                </div>`:o.qy`
                  <div style="display:flex;flex-direction:column;gap:4px;">
                    ${w.map(t=>this._renderItem(n,t,_,e,u,{accent:b,text:f,secondary:k,lang:c}))}
                  </div>
                `}
            ${!1!==n.enable_add_item&&g?o.qy`
                  <div style="display:flex;gap:8px;margin-top:12px;">
                    <input
                      type="text"
                      class="uc-todo-add-input"
                      style="flex:1;padding:8px 12px;border:1px solid var(--divider-color);border-radius:var(--uc-r-8, 8px);background:transparent;color:${f};font-size:13px;outline:none;"
                      placeholder=${(0,r.kg)("editor.todo_list.add_ph",c,"Add item…")}
                      @keydown=${t=>{"Enter"===t.key&&this._addItem(t.target,_,e)}}
                    />
                    <button
                      style="flex-shrink:0;width:36px;height:36px;border:none;border-radius:var(--uc-r-8, 8px);background:${b};color:var(--text-primary-color,#fff);cursor:pointer;display:flex;align-items:center;justify-content:center;"
                      title=${(0,r.kg)("editor.todo_list.add",c,"Add")}
                      @click=${t=>{var i;const o=null===(i=t.currentTarget.closest("div"))||void 0===i?void 0:i.querySelector("input");o&&this._addItem(o,_,e)}}
                    >
                      <ha-icon icon="mdi:plus" style="--mdc-icon-size:18px;"></ha-icon>
                    </button>
                  </div>
                `:o.s6}
          `,t,e)}
      </div>
    `}_renderItem(t,e,i,d,r,s){const a="completed"===e.status;return o.qy`
      <div style="display:flex;align-items:center;gap:10px;padding:6px 2px;">
        <button
          style="flex-shrink:0;width:20px;height:20px;border-radius:var(--uc-r-6, 6px);border:2px solid ${a?s.accent:"var(--divider-color)"};background:${a?s.accent:"transparent"};cursor:${r?"pointer":"default"};display:flex;align-items:center;justify-content:center;padding:0;"
          ?disabled=${!r}
          @click=${()=>{r&&(d.callService("todo","update_item",{entity_id:i,item:e.uid,status:a?"needs_action":"completed"}),e.status=a?"needs_action":"completed",this._invalidateSoon(t.id,i),this.triggerPreviewUpdate(!0))}}
        >
          ${a?o.qy`<ha-icon
                icon="mdi:check"
                style="--mdc-icon-size:14px;color:var(--text-primary-color,#fff);"
              ></ha-icon>`:o.s6}
        </button>
        <div style="flex:1;min-width:0;">
          <div
            style="color:${a?s.secondary:s.text};font-size:14px;${a?"text-decoration:line-through;opacity:0.7;":""}white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
          >
            ${e.summary}
          </div>
          ${!1!==t.show_due_date&&e.due?o.qy`<div style="color:${s.secondary};font-size:11px;margin-top:1px;">
                ${this._formatDue(e.due,s.lang)}
              </div>`:o.s6}
        </div>
      </div>
    `}_formatDue(t,e){try{const i=new Date(t.includes("T")?t:`${t}T00:00:00`);return new Intl.DateTimeFormat(e,Object.assign({weekday:"short",month:"short",day:"numeric"},t.includes("T")?{hour:"numeric",minute:"2-digit"}:{})).format(i)}catch(e){return t}}_addItem(t,e,i){const o=t.value.trim();if(!o)return;i.callService("todo","add_item",{entity_id:e,item:o}),t.value="";const d=`${e}`;this._invalidateSoon(d,e)}_invalidateSoon(t,e){setTimeout(()=>{this._cache.delete(e),this.triggerPreviewUpdate(!0)},500)}_getItems(t,e,i){const o=i.states[e],d=`${o.state}|${o.last_updated||""}`,r=this._cache.get(e);if(r&&r.fingerprint===d)return r.items;if(!(null==r?void 0:r.fetching)){const t={items:(null==r?void 0:r.items)||[],fingerprint:d,fetching:!0};this._cache.set(e,t),i.callWS({type:"call_service",domain:"todo",service:"get_items",target:{entity_id:e},return_response:!0}).then(t=>{var i,o;const r=(null===(o=null===(i=null==t?void 0:t.response)||void 0===i?void 0:i[e])||void 0===o?void 0:o.items)||[];this._cache.set(e,{items:r,fingerprint:d,fetching:!1}),this.triggerPreviewUpdate()}).catch(()=>{this._cache.set(e,{items:t.items,fingerprint:d,fetching:!1})})}return(null==r?void 0:r.items)||[]}validate(t){const e=[],i=t;return t.id||e.push("Module ID is required"),t.type||e.push("Module type is required"),i.entity||e.push("Select a todo entity"),{valid:0===e.length,errors:e}}getStyles(){return`\n      .uc-todo-wrapper { box-sizing: border-box; }\n      .uc-todo-add-input::placeholder { color: var(--secondary-text-color); opacity: 0.7; }\n      ${d.m.getSliderStyles()}\n    `}}}};