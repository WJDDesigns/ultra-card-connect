export const __webpack_esm_ids__=[1740];export const __webpack_esm_modules__={678(e,t,i){i.d(t,{UltraTimerModule:()=>h});var o=i(2618),n=i(7475),r=i(6478);const s="__ultraTimerStore__",a="__ultraTimerEntitySync__";function d(){const e=window;return e[s]||(e[s]=new Map),e[s]}function l(){const e=window;return e[a]||(e[a]=new Map),e[a]}function c(){window.dispatchEvent(new CustomEvent("ultra-card-template-update",{bubbles:!0,composed:!0}))}function u(e){const t=setInterval(()=>{const i=d().get(e);i&&i.interval_id===t?function(e){const t=d().get(e);if(t&&"running"===t.status&&(t.remaining_seconds=Math.max(0,t.remaining_seconds-1),c(),t.remaining_seconds<=0)){t.interval_id&&(clearInterval(t.interval_id),t.interval_id=void 0),t.status="expired";const e=t.on_expire;t.on_expire=void 0,e&&e(),c()}}(e):clearInterval(t)},1e3);return t}const v={getState:e=>d().get(e),start(e,t,i){const o=d(),n=o.get(e);(null==n?void 0:n.interval_id)&&clearInterval(n.interval_id);const r={status:"running",remaining_seconds:t,total_seconds:t,end_time:Date.now()+1e3*t,on_expire:i};r.interval_id=u(e),o.set(e,r),c()},pause(e){const t=d().get(e);t&&"running"===t.status&&(t.interval_id&&(clearInterval(t.interval_id),t.interval_id=void 0),t.status="paused",t.end_time=void 0,c())},resume(e){const t=d().get(e);t&&"paused"===t.status&&(t.status="running",t.end_time=Date.now()+1e3*t.remaining_seconds,t.interval_id=u(e),c())},reset(e){const t=d(),i=t.get(e);(null==i?void 0:i.interval_id)&&clearInterval(i.interval_id),t.delete(e),c()},dismiss(e){this.reset(e)},destroyTimer(e){const t=d(),i=t.get(e);(null==i?void 0:i.interval_id)&&(clearInterval(i.interval_id),i.interval_id=void 0),t.delete(e),l().delete(e)},snooze(e,t){const i=d().get(e),o=null==i?void 0:i.on_expire;(null==i?void 0:i.interval_id)&&clearInterval(i.interval_id),this.start(e,t,o)},syncFromEntity(e,t,i,o,n,r){var s;const a=l(),v=a.get(e);if(v&&v.haState===t&&v.lastChanged===o)return;a.set(e,{haState:t,lastChanged:o});const m=d(),g=m.get(e);if("active"===t){(null==g?void 0:g.interval_id)&&clearInterval(g.interval_id);const t=Math.round(i),o={status:"running",remaining_seconds:t,total_seconds:void 0!==r?Math.round(r):null==g?void 0:g.total_seconds,end_time:Date.now()+1e3*t,on_expire:n};o.interval_id=u(e),m.set(e,o),c()}else if("paused"===t){(null==g?void 0:g.interval_id)&&clearInterval(g.interval_id);const t={status:"paused",remaining_seconds:Math.round(i),total_seconds:void 0!==r?Math.round(r):null==g?void 0:g.total_seconds,on_expire:null!==(s=null==g?void 0:g.on_expire)&&void 0!==s?s:n};m.set(e,t),c()}else g&&"idle"!==g.status&&(g.interval_id&&clearInterval(g.interval_id),m.delete(e),c())}};i(7921);const m=[300,600,900,1800,3600];function g(e){const t=Math.floor(e/3600),i=Math.floor(e%3600/60),o=e%60;return t>0?`${String(t).padStart(2,"0")}:${String(i).padStart(2,"0")}:${String(o).padStart(2,"0")}`:`${String(i).padStart(2,"0")}:${String(o).padStart(2,"0")}`}function p(e){if(!e)return 0;const t=e.split(":").map(Number);return 3===t.length?3600*t[0]+60*t[1]+t[2]:2===t.length?60*t[0]+t[1]:t[0]||0}class h extends n.m{constructor(){super(...arguments),this.metadata={type:"timer",title:"Timer",description:"Countdown timer with optional action when time runs out",author:"WJD Designs",version:"1.0.0",icon:"mdi:timer-outline",category:"interactive",tags:["timer","countdown","kitchen","automation"]}}createDefault(e,t){return{id:e||this.generateId("timer"),type:"timer",title:"",icon:"mdi:timer-outline",duration_seconds:300,preset_durations:m,style:"circle",on_expire_action:{action:"nothing"},show_snooze_dismiss:!1,snooze_seconds:300,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getStyleOptions(e){return[{value:"circle",label:(0,r.kg)("editor.timer.style.circle",e,"Circle")},{value:"progress_bar",label:(0,r.kg)("editor.timer.style.progress_bar",e,"Progress Bar")},{value:"digital",label:(0,r.kg)("editor.timer.style.digital",e,"Digital")},{value:"background_fill",label:(0,r.kg)("editor.timer.style.background_fill",e,"Background Fill")}]}renderGeneralTab(e,t,i,n){var s,a,d,l;const c=e,u=(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en";return o.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Basic -->
        ${this.renderSettingsSection((0,r.kg)("editor.timer.basic.title",u,"Basic"),(0,r.kg)("editor.timer.basic.desc",u,"Title and icon for the timer."),[{title:(0,r.kg)("editor.timer.title",u,"Title"),description:(0,r.kg)("editor.timer.title_desc",u,"Optional label (e.g. Kitchen, Door close)"),hass:t,data:{title:c.title||""},schema:[this.textField("title")],onChange:e=>{n(Object.assign({},e.detail.value)),setTimeout(()=>this.triggerPreviewUpdate(),50)}},{title:(0,r.kg)("editor.timer.icon",u,"Icon"),description:(0,r.kg)("editor.timer.icon_desc",u,"Icon for the timer"),hass:t,data:{icon:c.icon||"mdi:timer-outline"},schema:[this.iconField("icon")],onChange:e=>{n(Object.assign({},e.detail.value)),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        <!-- Duration -->
        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.timer.duration.title",u,"Duration")}</div>
          <div class="section-description" style="margin-bottom: 16px; color: var(--secondary-text-color); font-size: 14px;">
            ${(0,r.kg)("editor.timer.duration.desc",u,"Default duration when Start is pressed.")}
          </div>
          ${this.renderFieldSection((0,r.kg)("editor.timer.duration_seconds",u,"Default duration (seconds)"),(0,r.kg)("editor.timer.duration_seconds_desc",u,"e.g. 300 = 5 minutes"),t,{duration_seconds:null!==(a=c.duration_seconds)&&void 0!==a?a:300},[this.numberField("duration_seconds",1,86400)],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          ${this.renderChipListField((0,r.kg)("editor.timer.preset_durations",u,"Preset durations (minutes)"),(0,r.kg)("editor.timer.preset_durations_desc",u,"Quick-start buttons shown when the timer is idle."),t,(null!==(d=c.preset_durations)&&void 0!==d?d:m).map(e=>String(e/60)),e=>{const t=e.map(e=>Math.round(60*parseFloat(e))).filter(e=>Number.isFinite(e)&&e>0);n({preset_durations:t})},{mode:"free-text",placeholder:(0,r.kg)("editor.timer.preset_placeholder",u,"Minutes (e.g. 10)")})}
        </div>

        <!-- When timer ends -->
        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.timer.on_expire.title",u,"When timer ends")}</div>
          <div class="section-description" style="margin-bottom: 16px; color: var(--secondary-text-color); font-size: 14px;">
            ${(0,r.kg)("editor.timer.on_expire.desc",u,"Action to run when the countdown reaches zero (e.g. turn off light, close cover).")}
          </div>
          <ha-form
            .hass=${t}
            .data=${{on_expire_action:c.on_expire_action||{action:"nothing"}}}
            .schema=${[{name:"on_expire_action",selector:{ui_action:{}}}]}
            .computeLabel=${e=>t.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)||"Action"}
            @value-changed=${e=>{var t;const i=null===(t=e.detail.value)||void 0===t?void 0:t.on_expire_action;i&&n({on_expire_action:i}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
          ></ha-form>
        </div>

        <!-- Display style -->
        ${this.renderFieldSection((0,r.kg)("editor.timer.style.title",u,"Display style"),(0,r.kg)("editor.timer.style.desc",u,"How the timer is shown"),t,{style:c.style||"circle"},[this.selectField("style",this.getStyleOptions(u))],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        <!-- Advanced -->
        <div class="settings-section">
          <div class="section-title">${(0,r.kg)("editor.timer.advanced.title",u,"Advanced")}</div>
          ${this.renderEntityPickerWithVariables(t,i,"timer_entity",c.timer_entity||"",e=>{n({timer_entity:e}),this.triggerPreviewUpdate()},void 0,(0,r.kg)("editor.timer.timer_entity",u,"Timer entity"))}
          <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; margin-bottom: 16px; color: var(--secondary-text-color);">
            ${(0,r.kg)("editor.timer.timer_entity_desc",u,"Optional: link a Home Assistant timer entity to sync start/stop/pause state with this countdown.")}
          </div>
          ${this.renderSettingsSection((0,r.kg)("editor.timer.show_snooze_dismiss",u,"Show Snooze / Dismiss when expired"),(0,r.kg)("editor.timer.show_snooze_dismiss_desc",u,"When the timer ends, show Snooze (restart) and Dismiss buttons."),[{title:"",description:"",hass:t,data:{show_snooze_dismiss:!!c.show_snooze_dismiss},schema:[this.booleanField("show_snooze_dismiss")],onChange:e=>{n({show_snooze_dismiss:e.detail.value.show_snooze_dismiss}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}
          ${c.show_snooze_dismiss?this.renderFieldSection((0,r.kg)("editor.timer.snooze_seconds",u,"Snooze duration (seconds)"),(0,r.kg)("editor.timer.snooze_seconds_desc",u,"Restart countdown for this many seconds when Snooze is tapped"),t,{snooze_seconds:null!==(l=c.snooze_seconds)&&void 0!==l?l:300},[this.numberField("snooze_seconds",1,3600)],e=>{n(e.detail.value),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}
        </div>
      </div>
    `}renderPreview(e,t,i,n){var s,a,d,l,c,u;const h=e,_=Math.max(1,null!==(s=h.duration_seconds)&&void 0!==s?s:300),y=null!==(a=h.preset_durations)&&void 0!==a?a:m,x=h.style||"circle",f=h.icon||"mdi:timer-outline",b=h.title||(0,r.kg)("editor.timer.default_title",(null===(d=null==t?void 0:t.locale)||void 0===d?void 0:d.language)||"en","Timer"),w=!!h.show_snooze_dismiss,k=null!==(l=h.snooze_seconds)&&void 0!==l?l:300,$=()=>{const o=h.on_expire_action,n=null==o?void 0:o.action;o&&"nothing"!==n&&"none"!==n&&this.handleModuleAction(o,t,void 0,i,void 0,e)};if(h.timer_entity&&t){const e=this.resolveEntity(h.timer_entity,i)||h.timer_entity,o=e?t.states[e]:void 0;if(o){const e=o.state,t=function(e){var t;let i=p(null!==(t=e.attributes.remaining)&&void 0!==t?t:"0:00:00");if("active"===e.state){const t=(Date.now()-new Date(e.last_changed).getTime())/1e3;i=Math.max(0,i-t)}return i}(o),i=p(o.attributes.duration);v.syncFromEntity(h.id,e,t,o.last_changed,$,i>0?i:void 0)}}const z=v.getState(h.id),S=null!==(c=null==z?void 0:z.status)&&void 0!==c?c:"idle",D=null!==(u=null==z?void 0:z.remaining_seconds)&&void 0!==u?u:0,M=e=>{v.start(h.id,e,$)},T=this.getHoverEffectClass(e),q=this.buildStyleString(this.buildDesignStyles(e,t)),F=(()=>{var e,i,n,s,a,d,l,c,u;if("expired"===S)return o.qy`
          <div class="uc-timer uc-timer-expired" style="padding: 16px; text-align: center;">
            <ha-icon icon="${f}" style="font-size: 48px; color: var(--primary-color); margin-bottom: 8px;"></ha-icon>
            <div class="uc-timer-title" style="font-size: 18px; font-weight: 600; margin-bottom: 4px;">${b}</div>
            <div style="font-size: 16px; color: var(--primary-color); margin-bottom: 16px;">
              ${(0,r.kg)("editor.timer.times_up",(null===(e=null==t?void 0:t.locale)||void 0===e?void 0:e.language)||"en","Time's up!")}
            </div>
            ${w?o.qy`
                  <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                    <ha-button
                      @click=${()=>{v.snooze(h.id,k)}}
                    >
                      ${(0,r.kg)("editor.timer.snooze",(null===(i=null==t?void 0:t.locale)||void 0===i?void 0:i.language)||"en","Snooze")}
                    </ha-button>
                    <ha-button
                      outlined
                      @click=${()=>v.dismiss(h.id)}
                    >
                      ${(0,r.kg)("editor.timer.dismiss",(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en","Dismiss")}
                    </ha-button>
                  </div>
                `:o.qy`
                  <ha-button outlined @click=${()=>v.dismiss(h.id)}>
                    ${(0,r.kg)("editor.timer.dismiss",(null===(s=null==t?void 0:t.locale)||void 0===s?void 0:s.language)||"en","Dismiss")}
                  </ha-button>
                `}
          </div>
        `;if("idle"===S)return o.qy`
          <div class="uc-timer uc-timer-idle" style="padding: 16px; text-align: center;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 12px;">
              <ha-icon icon="${f}" style="font-size: 28px; color: var(--primary-color);"></ha-icon>
              <span class="uc-timer-title" style="font-size: 16px; font-weight: 600;">${b}</span>
            </div>
            <div style="font-size: 24px; font-weight: 600; margin-bottom: 16px; color: var(--primary-text-color);">
              ${g(_)}
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; justify-content: center;">
              ${y.map(e=>o.qy`
                    <ha-button
                      dense
                      @click=${()=>M(e)}
                    >
                      ${e<3600?e/60+"m":e/3600+"h"}
                    </ha-button>
                  `)}
            </div>
            <ha-button raised style="width: 100%;" @click=${()=>M(_)}>
              ${(0,r.kg)("editor.timer.start",(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en","Start")}
            </ha-button>
          </div>
        `;const m=(null==z?void 0:z.total_seconds)&&z.total_seconds>0?z.total_seconds:_,p=m>0?1-D/m:0,$=100*Math.min(1,Math.max(0,p));return o.qy`
        <div class="uc-timer uc-timer-running" style="padding: 16px; text-align: center;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 8px;">
            <ha-icon icon="${f}" style="font-size: 24px; color: var(--primary-color);"></ha-icon>
            <span class="uc-timer-title" style="font-size: 14px; font-weight: 600;">${b}</span>
          </div>
          ${"paused"===S?o.qy`<div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">${(0,r.kg)("editor.timer.paused",(null===(d=null==t?void 0:t.locale)||void 0===d?void 0:d.language)||"en","Paused")}</div>`:""}

          ${"circle"===x?o.qy`
                <div style="position: relative; width: 120px; height: 120px; margin: 0 auto 16px;">
                  <svg viewBox="0 0 36 36" style="width: 100%; height: 100%; transform: rotate(-90deg);">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="var(--divider-color)" stroke-width="3" />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="var(--primary-color)"
                      stroke-width="3"
                      stroke-dasharray="${100} ${100}"
                      stroke-dashoffset="${100-$}"
                      stroke-linecap="round"
                      style="transition: stroke-dashoffset 0.3s ease;"
                    />
                  </svg>
                  <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 700; color: var(--primary-text-color);">
                    ${g(D)}
                  </div>
                </div>
              `:"progress_bar"===x?o.qy`
                  <div style="margin-bottom: 16px;">
                    <div style="font-size: 28px; font-weight: 700; color: var(--primary-color); margin-bottom: 8px;">
                      ${g(D)}
                    </div>
                    <div style="height: 12px; background: var(--divider-color); border-radius: var(--uc-r-6, 6px); overflow: hidden;">
                      <div
                        style="height: 100%; width: ${$}%; background: var(--primary-color); border-radius: var(--uc-r-6, 6px); transition: width 0.3s ease;"
                      ></div>
                    </div>
                  </div>
                `:"background_fill"===x?o.qy`
                    <div
                      style="
                        position: relative;
                        min-height: 80px;
                        border-radius: var(--uc-r-12, 12px);
                        background: var(--divider-color);
                        overflow: hidden;
                        margin-bottom: 16px;
                      "
                    >
                      <div
                        style="
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          right: 0;
                          height: ${$}%;
                          background: var(--primary-color);
                          opacity: 0.4;
                          transition: height 0.3s ease;
                        "
                      ></div>
                      <div style="position: relative; padding: 16px; font-size: 28px; font-weight: 700; color: var(--primary-text-color);">
                        ${g(D)}
                      </div>
                    </div>
                  `:o.qy`
                    <div style="font-size: 36px; font-weight: 700; color: var(--primary-color); margin-bottom: 16px; text-align: center;">
                      ${g(D)}
                    </div>
                  `}

          <div style="display: flex; gap: 8px; justify-content: center;">
            ${"running"===S?o.qy`
                  <ha-button outlined @click=${()=>v.pause(h.id)}>
                    ${(0,r.kg)("editor.timer.pause",(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en","Pause")}
                  </ha-button>
                `:o.qy`
                  <ha-button @click=${()=>v.resume(h.id)}>
                    ${(0,r.kg)("editor.timer.resume",(null===(c=null==t?void 0:t.locale)||void 0===c?void 0:c.language)||"en","Resume")}
                  </ha-button>
                `}
            <ha-button outlined @click=${()=>v.reset(h.id)}>
              ${(0,r.kg)("editor.timer.cancel",(null===(u=null==t?void 0:t.locale)||void 0===u?void 0:u.language)||"en","Cancel")}
            </ha-button>
          </div>
        </div>
      `})();return this.wrapWithAnimation(o.qy`
      <div class="uc-timer-wrapper ${T}" data-uc-role="pane" style="${q}; background: var(--uc-pane-bg, var(--card-background-color)); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none); border-radius: var(--uc-r-12, 12px); overflow: hidden;">
        ${F}
      </div>
    `,e,t)}validate(e){const t=[];e.id||t.push("Module ID is required"),e.type&&"timer"===e.type||t.push("Module type must be timer");const i=e;return void 0!==i.duration_seconds&&(i.duration_seconds<1||i.duration_seconds>86400)&&t.push("Duration must be between 1 and 86400 seconds"),{valid:0===t.length,errors:t}}}}};