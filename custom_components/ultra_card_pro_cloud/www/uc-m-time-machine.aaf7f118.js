export const __webpack_esm_ids__=[9078];export const __webpack_esm_modules__={3655(e,t,n){n.d(t,{UltraTimeMachineModule:()=>m});var i=n(2618),a=n(6478),r=n(7475),o=n(2202);const s=36e5,c=[{hours:1,label:"1h"},{hours:6,label:"6h"},{hours:24,label:"24h"},{hours:168,label:"7d"}],l=[{key:"lights",label:"Lights",color:"#ffb74d",domains:["light","switch"]},{key:"sensors",label:"Sensors",color:"#f06292",domains:["binary_sensor","cover"]},{key:"locks",label:"Locks",color:"#66bb6a",domains:["lock","alarm_control_panel"]},{key:"climate",label:"Climate",color:"#4fc3f7",domains:["climate","fan","humidifier","water_heater"]}],d={key:"other",label:"Other",color:"#b39ddb"},p=["#4fc3f7","#ffb74d","#66bb6a","#f06292"];class m extends r.m{constructor(){super(...arguments),this.metadata={type:"time_machine",title:"Time Machine",description:"Rewind the entire card with a draggable history timeline",author:"WJD Designs",version:"1.0.0",icon:"mdi:history",category:"data",tags:["time","history","scrubber","rewind","timeline","replay","pro","premium"]}}createDefault(e,t){return{id:e||this.generateId("time_machine"),type:"time_machine",mode:"dashboard",default_span_hours:24,show_span_presets:!0,show_event_markers:!0,show_playback:!0,auto_return_seconds:120,display_mode:"always",display_conditions:[]}}validate(e){const t=[];return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),{valid:0===t.length,errors:t}}renderGeneralTab(e,t,n,r){var o,s,l;const d=e,p=(null===(o=null==t?void 0:t.locale)||void 0===o?void 0:o.language)||"en",m=this._mode(d),u=[{value:"dashboard",icon:"mdi:view-dashboard-outline",title:(0,a.kg)("editor.time_machine.mode_dashboard",p,"Dashboard Timeline"),description:(0,a.kg)("editor.time_machine.mode_dashboard_desc",p,"Scrub the timeline and watch your dashboard rewind in real time — every Ultra Card in the current view follows, showing its history as you drag.")},{value:"card",icon:"mdi:chart-timeline-variant",title:(0,a.kg)("editor.time_machine.mode_card",p,"Card Timeline"),description:(0,a.kg)("editor.time_machine.mode_card_desc",p,"An independent history scrubber. Pick the entities you care about and explore their state history with built-in graphs, highs and lows, and details that follow the playhead. Nothing else on the page is affected.")}];return i.qy`
      ${this.injectUcFormStyles()}
      <style>
        .uc-tm-mode-picker {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }
        .uc-tm-mode-option {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px 14px;
          border: 2px solid var(--divider-color);
          border-radius: var(--uc-r-10, 10px);
          cursor: pointer;
          transition: border-color 0.15s ease, background 0.15s ease;
        }
        .uc-tm-mode-option:hover {
          border-color: var(--primary-color);
        }
        .uc-tm-mode-option.selected {
          border-color: var(--primary-color);
          background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        }
        .uc-tm-mode-option ha-icon {
          --mdc-icon-size: 22px;
          color: var(--secondary-text-color);
          margin-top: 2px;
          flex-shrink: 0;
        }
        .uc-tm-mode-option.selected ha-icon {
          color: var(--primary-color);
        }
        .uc-tm-mode-title {
          font-weight: 600;
          font-size: 14px;
          color: var(--primary-text-color);
          margin-bottom: 3px;
        }
        .uc-tm-mode-option.selected .uc-tm-mode-title {
          color: var(--primary-color);
        }
        .uc-tm-mode-desc {
          font-size: 12px;
          line-height: 1.45;
          color: var(--secondary-text-color);
        }
      </style>
      <div class="module-general-settings">
        <div class="uc-tm-mode-picker">
          ${u.map(e=>i.qy`
              <div
                class="uc-tm-mode-option ${m===e.value?"selected":""}"
                @click=${()=>{r({mode:e.value}),this.triggerPreviewUpdate()}}
              >
                <ha-icon icon="${e.icon}"></ha-icon>
                <div>
                  <div class="uc-tm-mode-title">${e.title}</div>
                  <div class="uc-tm-mode-desc">${e.description}</div>
                </div>
              </div>
            `)}
        </div>
        ${this.renderSettingsSection((0,a.kg)("editor.time_machine.entities_section",p,"Entities"),"card"===m?(0,a.kg)("editor.time_machine.entities_card_desc",p,"Pick the entities to graph and track on the timeline. Numeric sensors are drawn as graphs; everything else shows its state at the scrub position."):(0,a.kg)("editor.time_machine.entities_dashboard_desc",p,"The dashboard timeline automatically rewinds every entity used by the Ultra Cards in the view — no selection needed. Add extra entities here to also draw their event markers on the track."),[{title:"card"===m?(0,a.kg)("editor.time_machine.entities",p,"Entities"):(0,a.kg)("editor.time_machine.extra_entities",p,"Extra entities"),description:"card"===m?(0,a.kg)("editor.time_machine.entities_desc",p,"Their history powers the graphs, details, and event markers."):(0,a.kg)("editor.time_machine.extra_entities_desc",p,"Tracked in addition to the auto-discovered view entities."),hass:t,data:{extra_entities:d.extra_entities||[]},schema:[{name:"extra_entities",selector:{entity:{multiple:!0}}}],onChange:e=>{var t;r({extra_entities:(null===(t=e.detail.value)||void 0===t?void 0:t.extra_entities)||[]}),this.triggerPreviewUpdate()}}])}
        ${this.renderSegmentedField((0,a.kg)("editor.time_machine.default_span",p,"Default time range"),(0,a.kg)("editor.time_machine.default_span_desc",p,"How far back the timeline reaches when the card loads."),String(null!==(s=d.default_span_hours)&&void 0!==s?s:24),c.map(e=>({value:String(e.hours),label:e.label})),e=>{r({default_span_hours:Number(e)}),this.triggerPreviewUpdate()})}
        ${this.renderSettingsSection((0,a.kg)("editor.time_machine.display_section",p,"Scrubber controls"),(0,a.kg)("editor.time_machine.display_section_desc",p,"Choose which controls appear on the timeline."),[{title:(0,a.kg)("editor.time_machine.show_span_presets",p,"Time range presets"),description:(0,a.kg)("editor.time_machine.show_span_presets_desc",p,"Show the 1h / 6h / 24h / 7d range pills."),hass:t,data:{show_span_presets:!1!==d.show_span_presets},schema:[this.booleanField("show_span_presets")],onChange:e=>{var t,n;r({show_span_presets:null===(n=null===(t=e.detail.value)||void 0===t?void 0:t.show_span_presets)||void 0===n||n}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.time_machine.show_event_markers",p,"Event markers"),description:(0,a.kg)("editor.time_machine.show_event_markers_desc",p,"Draw a tick on the track for every entity state change."),hass:t,data:{show_event_markers:!1!==d.show_event_markers},schema:[this.booleanField("show_event_markers")],onChange:e=>{var t,n;r({show_event_markers:null===(n=null===(t=e.detail.value)||void 0===t?void 0:t.show_event_markers)||void 0===n||n}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.time_machine.show_playback",p,"Replay controls"),description:(0,a.kg)("editor.time_machine.show_playback_desc",p,"Show play/pause and step buttons to replay history."),hass:t,data:{show_playback:!1!==d.show_playback},schema:[this.booleanField("show_playback")],onChange:e=>{var t,n;r({show_playback:null===(n=null===(t=e.detail.value)||void 0===t?void 0:t.show_playback)||void 0===n||n}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.time_machine.show_chart",p,"Line graph"),description:(0,a.kg)("editor.time_machine.show_chart_desc",p,"Card Timeline: plot numeric entities as lines across the window."),hass:t,data:{show_chart:!1!==d.show_chart},schema:[this.booleanField("show_chart")],onChange:e=>{var t,n;r({show_chart:null===(n=null===(t=e.detail.value)||void 0===t?void 0:t.show_chart)||void 0===n||n}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.time_machine.show_lanes",p,"State ribbons"),description:(0,a.kg)("editor.time_machine.show_lanes_desc",p,"Card Timeline: show on/off ribbons for non-numeric entities."),hass:t,data:{show_lanes:!1!==d.show_lanes},schema:[this.booleanField("show_lanes")],onChange:e=>{var t,n;r({show_lanes:null===(n=null===(t=e.detail.value)||void 0===t?void 0:t.show_lanes)||void 0===n||n}),this.triggerPreviewUpdate()}},{title:(0,a.kg)("editor.time_machine.show_details",p,"Entity details"),description:(0,a.kg)("editor.time_machine.show_details_desc",p,"Card Timeline: show the per-entity value list under the graph."),hass:t,data:{show_details:!1!==d.show_details},schema:[this.booleanField("show_details")],onChange:e=>{var t,n;r({show_details:null===(n=null===(t=e.detail.value)||void 0===t?void 0:t.show_details)||void 0===n||n}),this.triggerPreviewUpdate()}}])}
        ${this.renderSliderField((0,a.kg)("editor.time_machine.auto_return",p,"Auto-return to live"),(0,a.kg)("editor.time_machine.auto_return_desc",p,"Seconds of inactivity before snapping back to live. 0 disables auto-return."),null!==(l=d.auto_return_seconds)&&void 0!==l?l:120,120,0,600,10,e=>{r({auto_return_seconds:e}),this.triggerPreviewUpdate()},"s")}
      </div>
    `}renderPreview(e,t,n,r){var l;const d=e,p=this._mode(d),m=(null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en";"card"===p&&this._ensureSelfSync(d,t);const u=o.U.getSnapshot(d.id),h=null!=u.scrubMs,v=Date.now(),g=u.spanHours*s,_=v-g,b=h?(u.scrubMs-_)/g*100:100,y=this.buildStyleString(this.buildDesignStyles(e,t)),x=new Set(d.hidden_entities||[]),w=e=>!x.has(e),f="card"===p&&!1!==d.show_chart?o.U.getNumericSeries(d.id,_,v).filter(e=>w(e.entityId)):[],k="card"===p&&!1!==d.show_lanes?o.U.getStateLanes(d.id,_,v).filter(e=>w(e.entityId)):[],$=!1!==d.show_event_markers&&u.hasHistory?o.U.getEventMarkers(d.id).filter(e=>e.t>=_&&e.t<=v&&w(e.entityId)):[],S=new Map;for(const e of $){const t=this._markerGroup(e.entityId);S.has(t.key)||S.set(t.key,t)}return i.qy`
      <div class="uc-time-machine ${h?"uc-tm-active":""}" style="${y}">
        <div class="uc-tm-header">
          <div class="uc-tm-status">
            <span class="uc-tm-dot ${h?"past":"live"}"></span>
            <div class="uc-tm-time">
              <span class="uc-tm-clock">
                ${h?i.qy`<span class="uc-tm-day">${this._formatDay(u.scrubMs,m)}</span>
                      ${this._formatClock(u.scrubMs,t)}`:(0,a.kg)("editor.time_machine.live",m,"Live")}
              </span>
              <span class="uc-tm-delta">
                ${h?this._formatDelta(v-u.scrubMs,m):u.registered&&u.entityCount>0?(0,a.kg)("editor.time_machine.tracking",m,"Tracking {count} entities").replace("{count}",String(u.entityCount)):(0,a.kg)("editor.time_machine.live_desc",m,"Showing current state")}
              </span>
            </div>
            ${u.loading?i.qy`<ha-circular-progress indeterminate size="small"></ha-circular-progress>`:""}
          </div>
          ${h?i.qy`
                <button
                  class="uc-tm-live-btn"
                  @click=${()=>o.U.returnToLive(d.id)}
                >
                  <ha-icon icon="mdi:fast-forward"></ha-icon>
                  ${(0,a.kg)("editor.time_machine.return_to_live",m,"Return to live")}
                </button>
              `:""}
        </div>

        ${"card"===p?i.qy`
              ${!1!==d.show_chart?this._renderChart(f,_,g,v,b,h):""}
              ${!1!==d.show_lanes?this._renderLanes(k,t,_,g,b,h):""}
              ${!1!==d.show_details?this._renderDetails(d,t,u,v):""}
            `:""}
        ${S.size>0&&!1!==d.show_event_markers?i.qy`
              <div class="uc-tm-legend">
                ${[...S.values()].map(e=>i.qy`
                    <span class="uc-tm-legend-item">
                      <span class="uc-tm-legend-dot" style="background: ${e.color}"></span>
                      ${e.label}
                    </span>
                  `)}
              </div>
            `:""}

        <div
          class="uc-tm-track"
          data-uc-role="pane"
          @pointerdown=${e=>this._onTrackPointerDown(e,d.id)}
          @pointermove=${e=>this._onTrackPointerMove(e,d.id)}
          @pointerup=${e=>this._onTrackPointerUp(e)}
          @pointercancel=${e=>this._onTrackPointerUp(e)}
        >
          ${this._renderTicks(u.spanHours)}
          ${$.map(e=>{var n,a,r;const o=(e.t-_)/g*100,s=(null===(r=null===(a=null===(n=null==t?void 0:t.states)||void 0===n?void 0:n[e.entityId])||void 0===a?void 0:a.attributes)||void 0===r?void 0:r.friendly_name)||e.entityId,c=this._markerGroup(e.entityId);return i.qy`
              <span
                class="uc-tm-marker"
                style="left: ${o}%; background: ${c.color}"
                title="${s}: ${e.state} · ${this._formatTime(e.t,t)}"
              ></span>
            `})}
          ${h?i.qy`<span class="uc-tm-shade" style="width: ${100-b}%"></span>`:""}
          <span class="uc-tm-playhead" style="left: ${b}%"></span>
          <span class="uc-tm-handle" style="left: ${b}%"></span>
        </div>

        <div class="uc-tm-axis">
          <span>${this._formatAxisLabel(u.spanHours)}</span>
          <span>${(0,a.kg)("editor.time_machine.now",m,"Now")}</span>
        </div>

        <div class="uc-tm-controls">
          ${!1!==d.show_span_presets?i.qy`
                <div class="uc-tm-spans">
                  ${c.map(e=>i.qy`
                      <button
                        class="uc-tm-span-btn ${u.spanHours===e.hours?"selected":""}"
                        @click=${()=>o.U.setSpan(d.id,e.hours)}
                      >
                        ${e.label}
                      </button>
                    `)}
                </div>
              `:""}
          ${!1!==d.show_playback?i.qy`
                <div class="uc-tm-playback">
                  <button
                    class="uc-tm-step-btn"
                    title=${(0,a.kg)("editor.time_machine.step_back",m,"Step back")}
                    @click=${()=>this._step(d.id,-36e5,h)}
                  >
                    −1h
                  </button>
                  <button
                    class="uc-tm-step-btn"
                    title=${(0,a.kg)("editor.time_machine.step_back",m,"Step back")}
                    @click=${()=>this._step(d.id,-9e5,h)}
                  >
                    −15m
                  </button>
                  <button
                    class="uc-tm-step-btn uc-tm-play-btn"
                    title=${(0,a.kg)("editor.time_machine.replay",m,"Replay history")}
                    @click=${()=>this._togglePlay(d.id,h,_)}
                  >
                    <ha-icon icon=${u.playing?"mdi:pause":"mdi:play"}></ha-icon>
                  </button>
                  <button
                    class="uc-tm-step-btn"
                    ?disabled=${!h}
                    title=${(0,a.kg)("editor.time_machine.step_forward",m,"Step forward")}
                    @click=${()=>this._step(d.id,9e5,h)}
                  >
                    +15m
                  </button>
                  <button
                    class="uc-tm-step-btn"
                    ?disabled=${!h}
                    title=${(0,a.kg)("editor.time_machine.step_forward",m,"Step forward")}
                    @click=${()=>this._step(d.id,s,h)}
                  >
                    +1h
                  </button>
                </div>
              `:""}
        </div>

        ${u.registered?0===u.entityCount?i.qy`
                <div class="uc-tm-hint">
                  ${"card"===p?(0,a.kg)("editor.time_machine.no_entities_card_hint",m,"Pick entities in the Time Machine settings to build a timeline with graphs and event markers."):(0,a.kg)("editor.time_machine.no_entities_hint",m,"Nothing to rewind yet — no entities found in this view. Add Ultra Cards with entity modules, or pick extra entities in the Time Machine settings.")}
                </div>
              `:"":i.qy`
              <div class="uc-tm-hint">
                ${(0,a.kg)("editor.time_machine.top_level_hint",m,"Place Time Machine directly in a card column (not nested inside a layout module) to enable card-wide rewind.")}
              </div>
            `}
      </div>
    `}_onTrackPointerDown(e,t){e.currentTarget.setPointerCapture(e.pointerId),e.preventDefault(),this._scrubFromPointer(e,t)}_onTrackPointerMove(e,t){e.currentTarget.hasPointerCapture(e.pointerId)&&this._scrubFromPointer(e,t)}_onTrackPointerUp(e){const t=e.currentTarget;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId)}_scrubFromPointer(e,t){const n=e.currentTarget.getBoundingClientRect();if(n.width<=0)return;const i=Math.min(1,Math.max(0,(e.clientX-n.left)/n.width)),a=o.U.getSnapshot(t),r=Date.now(),c=a.spanHours*s;o.U.scrubTo(t,i>=.995?null:r-c+i*c)}_mode(e){return"card"===e.mode||"dashboard"===e.mode?e.mode:"independent"===e.scope?"card":"dashboard"}_ensureSelfSync(e,t){t&&o.U.syncStandalone(e.id,t,e)}_renderChart(e,t,n,a,r,o){if(0===e.length)return i.qy`
        <div class="uc-tm-chart-wrap uc-tm-chart-empty">
          <span class="uc-tm-chart-empty-msg">No numeric history to graph yet</span>
        </div>
      `;const s=1e3,c=200,l=e.map((e,i)=>{const r=.12*(e.max-e.min)||1,o=e.min-r,l=e.max+r-o||1,d=[...e.points],m=d[d.length-1];m.t<a&&d.push({t:a,v:m.v});const u=d.map(e=>({x:Math.max(0,Math.min(s,(e.t-t)/n*s)),y:Math.max(0,Math.min(c,c-(e.v-o)/l*c))})),h=u.map((e,t)=>`${0===t?"M":"L"}${e.x.toFixed(1)},${e.y.toFixed(1)}`).join(" "),v=u[0];return{lineD:h,areaD:`${h} L${u[u.length-1].x.toFixed(1)},200 L${v.x.toFixed(1)},200 Z`,color:p[i%p.length]}});return i.qy`
      <div class="uc-tm-chart-wrap">
        ${i.JW`
          <svg
            class="uc-tm-chart"
            viewBox="0 0 ${s} ${c}"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="0" y1="${50}" x2="${s}" y2="${50}" class="uc-tm-chart-grid"></line>
            <line x1="0" y1="${100}" x2="${s}" y2="${100}" class="uc-tm-chart-grid"></line>
            <line x1="0" y1="${150}" x2="${s}" y2="${150}" class="uc-tm-chart-grid"></line>
            ${l.map(e=>i.JW`
                <path d="${e.areaD}" fill="${e.color}" opacity="0.12"></path>
                <path
                  d="${e.lineD}"
                  fill="none"
                  stroke="${e.color}"
                  stroke-width="3"
                  style="${"vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round"}"
                ></path>
              `)}
          </svg>
        `}
        <span class="uc-tm-chart-hi">${this._fmtNum(Math.max(...e.map(e=>e.max)))}</span>
        <span class="uc-tm-chart-lo">${this._fmtNum(Math.min(...e.map(e=>e.min)))}</span>
        ${o?i.qy`
              <span class="uc-tm-chart-shade" style="width: ${100-r}%"></span>
              <span class="uc-tm-chart-playhead" style="left: ${r}%"></span>
            `:""}
      </div>
    `}_renderLanes(e,t,n,a,r,o){return 0===e.length?"":i.qy`
      <div class="uc-tm-lanes">
        ${e.map(e=>{var s,c,l;const d=(null===(l=null===(c=null===(s=null==t?void 0:t.states)||void 0===s?void 0:s[e.entityId])||void 0===c?void 0:c.attributes)||void 0===l?void 0:l.friendly_name)||e.entityId,p=this._markerGroup(e.entityId).color;return i.qy`
            <div class="uc-tm-lane" title="${d}">
              <span class="uc-tm-lane-name">${d}</span>
              <span class="uc-tm-lane-track" data-uc-role="pane">
                ${e.segments.map(e=>{const t=(e.startMs-n)/a*100,r=(e.endMs-e.startMs)/a*100,o=this._isOffState(e.state);return i.qy`
                    <span
                      class="uc-tm-lane-seg ${o?"off":""}"
                      style="left: ${t}%; width: ${r}%; ${o?"":`background: ${p}`}"
                      title="${e.state}"
                    ></span>
                  `})}
                ${o?i.qy`<span
                      class="uc-tm-lane-playhead"
                      style="left: ${r}%"
                    ></span>`:""}
              </span>
            </div>
          `})}
      </div>
    `}_isOffState(e){return"off"===e||"closed"===e||"locked"===e||"idle"===e||"unavailable"===e||"unknown"===e||"not_home"===e}_renderDetails(e,t,n,a){var r;const c=o.U.getTrackedEntityIds(e.id);if(0===c.length)return"";const l=a-(o.U.getSnapshot(e.id).spanHours||24)*s,d=o.U.getNumericSeries(e.id,l,a),m=new Map(d.map((e,t)=>[e.entityId,Object.assign(Object.assign({},e),{index:t})])),u=null!==(r=n.scrubMs)&&void 0!==r?r:a;return i.qy`
      <div class="uc-tm-details">
        ${c.map(n=>{var a,r,s,c,l,d,h,v,g,_,b;const y=null===(a=null==t?void 0:t.states)||void 0===a?void 0:a[n],x=o.U.stateAt(e.id,n,u),w=(null===(r=null==y?void 0:y.attributes)||void 0===r?void 0:r.friendly_name)||n,f=m.get(n),k=f?p[f.index%p.length]:this._markerGroup(n).color,$=null!==(s=null==f?void 0:f.attribute)&&void 0!==s?s:null,S=null!==(c=null!=x?x:y)&&void 0!==c?c:null,D=null===$?null!==(l=null==S?void 0:S.state)&&void 0!==l?l:"—":null!==(v=null!==(h=null===(d=null==S?void 0:S.attributes)||void 0===d?void 0:d[$])&&void 0!==h?h:null==S?void 0:S.state)&&void 0!==v?v:"—",T=(null===(g=null==y?void 0:y.attributes)||void 0===g?void 0:g.unit_of_measurement)||($&&$.includes("temperature")?(null===(b=null===(_=null==t?void 0:t.config)||void 0===_?void 0:_.unit_system)||void 0===b?void 0:b.temperature)||"°":$&&$.includes("humidity")?"%":""),M=Number.parseFloat(String(D)),U=Number.isFinite(M)?`${this._fmtNum(M)}${T}`:String(D),P=null!==$&&(null==x?void 0:x.state)&&!Number.isFinite(Number.parseFloat(x.state))?x.state:"";return i.qy`
            <div class="uc-tm-detail">
              <span class="uc-tm-detail-dot" style="background: ${k}"></span>
              <span class="uc-tm-detail-name" title="${n}">${w}</span>
              ${P?i.qy`<span class="uc-tm-detail-note">${P}</span>`:""}
              <span class="uc-tm-detail-value">${U}</span>
              ${f?i.qy`
                    <span class="uc-tm-detail-range">
                      ▼ ${this._fmtNum(f.min)} ▲ ${this._fmtNum(f.max)}
                    </span>
                  `:""}
            </div>
          `})}
      </div>
    `}_fmtNum(e){const t=Math.round(10*e)/10;return Number.isInteger(t)?String(t):t.toFixed(1)}_step(e,t,n){n?o.U.stepBy(e,t):t<0&&o.U.scrubTo(e,Date.now()+t)}_togglePlay(e,t,n){t||o.U.scrubTo(e,n+1e3),o.U.togglePlayback(e)}_markerGroup(e){const t=e.split(".")[0];for(const e of l)if(e.domains.includes(t))return e;return d}_formatDay(e,t){const n=new Date(e),i=new Date;if(n.toDateString()===i.toDateString())return(0,a.kg)("editor.time_machine.today",t,"Today");const r=new Date(i);return r.setDate(r.getDate()-1),n.toDateString()===r.toDateString()?(0,a.kg)("editor.time_machine.yesterday",t,"Yesterday"):n.toLocaleDateString(t,{weekday:"short",month:"short",day:"numeric"})}_formatClock(e,t){var n;const i=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en";return new Date(e).toLocaleTimeString(i,{hour:"numeric",minute:"2-digit"})}_formatTime(e,t){var n;const i=new Date(e),a=(null===(n=null==t?void 0:t.locale)||void 0===n?void 0:n.language)||"en",r=(new Date).toDateString()===i.toDateString(),o=i.toLocaleTimeString(a,{hour:"numeric",minute:"2-digit"});return r?o:`${i.toLocaleDateString(a,{weekday:"short"})} ${o}`}_formatDelta(e,t){const n=Math.max(1,Math.round(e/6e4)),i=Math.floor(n/1440),r=Math.floor(n%1440/60),o=n%60;let s;return s=i>0?`${i}d ${r}h`:r>0?`${r}h ${o}m`:`${o}m`,(0,a.kg)("editor.time_machine.ago",t,"{time} ago").replace("{time}",s)}_formatAxisLabel(e){return e>=24?`−${Math.round(e/24)}d`:`−${e}h`}_renderTicks(e){const t=e>=24?12:e>=6?e:4,n=[];for(let e=1;e<t;e++)n.push(i.qy`<span class="uc-tm-tick" style="left: ${e/t*100}%"></span>`);return n}getStyles(){return`\n      .uc-time-machine {\n        box-sizing: border-box;\n        padding: 12px 16px;\n        border-radius: var(--uc-r-12, 12px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border: 1px solid var(--divider-color);\n        transition: border-color 0.2s ease;\n      }\n      .uc-time-machine.uc-tm-active {\n        border-color: var(--primary-color);\n      }\n      .uc-tm-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 12px;\n        margin-bottom: 10px;\n      }\n      .uc-tm-status {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        min-width: 0;\n      }\n      .uc-tm-dot {\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        flex-shrink: 0;\n      }\n      .uc-tm-dot.live {\n        background: var(--success-color, #4caf50);\n        animation: uc-tm-pulse 2s ease-in-out infinite;\n      }\n      .uc-tm-dot.past {\n        background: var(--primary-color);\n      }\n      @keyframes uc-tm-pulse {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.4; }\n      }\n      .uc-tm-time {\n        display: flex;\n        flex-direction: column;\n        min-width: 0;\n      }\n      .uc-tm-clock {\n        font-size: 18px;\n        font-weight: 700;\n        color: var(--primary-text-color);\n        line-height: 1.2;\n        white-space: nowrap;\n      }\n      .uc-time-machine.uc-tm-active .uc-tm-clock {\n        color: var(--primary-color);\n        font-size: 20px;\n      }\n      .uc-tm-day {\n        margin-right: 6px;\n      }\n      .uc-tm-chart-wrap {\n        position: relative;\n        height: 120px;\n        margin-bottom: 10px;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--secondary-background-color);\n        border: 1px solid var(--divider-color);\n        overflow: hidden;\n      }\n      .uc-tm-chart-empty {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .uc-tm-chart-empty-msg {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n      }\n      .uc-tm-chart {\n        display: block;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n      }\n      .uc-tm-chart-grid {\n        stroke: var(--divider-color);\n        stroke-width: 1;\n        vector-effect: non-scaling-stroke;\n        opacity: 0.6;\n      }\n      .uc-tm-chart-shade {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        background: var(--uc-pane-bg, var(--card-background-color));\n        opacity: 0.55;\n        pointer-events: none;\n      }\n      .uc-tm-chart-playhead {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        width: 2px;\n        margin-left: -1px;\n        background: var(--primary-color);\n        pointer-events: none;\n      }\n      .uc-tm-chart-hi,\n      .uc-tm-chart-lo {\n        position: absolute;\n        left: 6px;\n        font-size: 9px;\n        color: var(--secondary-text-color);\n        opacity: 0.9;\n        pointer-events: none;\n      }\n      .uc-tm-chart-hi {\n        top: 3px;\n      }\n      .uc-tm-chart-lo {\n        bottom: 3px;\n      }\n      .uc-tm-lanes {\n        display: flex;\n        flex-direction: column;\n        gap: 3px;\n        margin-bottom: 10px;\n      }\n      .uc-tm-lane {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n      .uc-tm-lane-name {\n        flex: 0 0 34%;\n        max-width: 34%;\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .uc-tm-lane-track {\n        position: relative;\n        flex: 1;\n        height: 12px;\n        border-radius: var(--uc-r-3, 3px);\n        background: var(--uc-pane-bg, var(--secondary-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        overflow: hidden;\n      }\n      .uc-tm-lane-seg {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        opacity: 0.85;\n      }\n      .uc-tm-lane-seg.off {\n        background: transparent;\n      }\n      .uc-tm-lane-playhead {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        width: 2px;\n        margin-left: -1px;\n        background: var(--primary-color);\n      }\n      .uc-tm-details {\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n        margin-bottom: 10px;\n      }\n      .uc-tm-detail-note {\n        font-size: 10px;\n        padding: 1px 6px;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--secondary-background-color);\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n      }\n      .uc-tm-detail {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 12px;\n        line-height: 1.4;\n        min-width: 0;\n      }\n      .uc-tm-detail-dot {\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        flex-shrink: 0;\n      }\n      .uc-tm-detail-name {\n        color: var(--secondary-text-color);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        flex: 1;\n        min-width: 0;\n      }\n      .uc-tm-detail-value {\n        font-weight: 600;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n      }\n      .uc-tm-detail-range {\n        font-size: 10px;\n        color: var(--secondary-text-color);\n        opacity: 0.85;\n        white-space: nowrap;\n      }\n      .uc-tm-legend {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        flex-wrap: wrap;\n        margin-bottom: 8px;\n      }\n      .uc-tm-legend-item {\n        display: inline-flex;\n        align-items: center;\n        gap: 5px;\n        font-size: 11px;\n        color: var(--secondary-text-color);\n      }\n      .uc-tm-legend-dot {\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        flex-shrink: 0;\n      }\n      .uc-tm-delta {\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n      }\n      .uc-tm-live-btn {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 6px 14px;\n        border: none;\n        border-radius: var(--uc-r-16, 16px);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        font-size: 12px;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n        white-space: nowrap;\n        flex-shrink: 0;\n      }\n      .uc-tm-live-btn ha-icon {\n        --mdc-icon-size: 15px;\n      }\n      .uc-tm-track {\n        position: relative;\n        height: 40px;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--uc-pane-bg, var(--secondary-background-color)); box-shadow: var(--uc-pane-shadow, none);\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        cursor: ew-resize;\n        touch-action: none;\n        user-select: none;\n        overflow: visible;\n      }\n      .uc-tm-tick {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        width: 1px;\n        background: var(--divider-color);\n        pointer-events: none;\n      }\n      .uc-tm-marker {\n        position: absolute;\n        top: 7px;\n        bottom: 7px;\n        width: 2px;\n        border-radius: var(--uc-r-1, 1px);\n        background: var(--accent-color, var(--warning-color, #ff9800));\n        opacity: 0.8;\n        pointer-events: none;\n      }\n      .uc-tm-shade {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        background: var(--primary-color);\n        opacity: 0.08;\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        pointer-events: none;\n      }\n      .uc-tm-playhead {\n        position: absolute;\n        top: -3px;\n        bottom: -3px;\n        width: 2px;\n        margin-left: -1px;\n        background: var(--primary-color);\n        pointer-events: none;\n      }\n      .uc-tm-handle {\n        position: absolute;\n        top: -8px;\n        width: 14px;\n        height: 14px;\n        margin-left: -7px;\n        border-radius: 50%;\n        background: var(--primary-color);\n        border: 2px solid var(--card-background-color);\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n        pointer-events: none;\n      }\n      .uc-tm-axis {\n        display: flex;\n        justify-content: space-between;\n        margin-top: 6px;\n        font-size: 10px;\n        color: var(--secondary-text-color);\n        opacity: 0.8;\n      }\n      .uc-tm-controls {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 12px;\n        margin-top: 8px;\n        flex-wrap: wrap;\n      }\n      .uc-tm-spans {\n        display: flex;\n        gap: 4px;\n      }\n      .uc-tm-span-btn {\n        padding: 4px 10px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-12, 12px);\n        background: transparent;\n        color: var(--secondary-text-color);\n        font-size: 11px;\n        font-weight: 600;\n        font-family: inherit;\n        cursor: pointer;\n      }\n      .uc-tm-span-btn.selected {\n        background: var(--primary-color);\n        border-color: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .uc-tm-playback {\n        display: flex;\n        gap: 4px;\n      }\n      .uc-tm-step-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        min-width: 34px;\n        height: 26px;\n        padding: 0 8px;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-6, 6px);\n        background: transparent;\n        color: var(--primary-text-color);\n        font-size: 11px;\n        font-weight: 600;\n        font-family: inherit;\n        white-space: nowrap;\n        cursor: pointer;\n      }\n      .uc-tm-step-btn ha-icon {\n        --mdc-icon-size: 16px;\n      }\n      .uc-tm-step-btn:disabled {\n        opacity: 0.35;\n        cursor: default;\n      }\n      .uc-tm-play-btn:not(:disabled) {\n        color: var(--primary-color);\n      }\n      .uc-tm-hint {\n        margin-top: 8px;\n        font-size: 11px;\n        color: var(--warning-color, #ff9800);\n        line-height: 1.4;\n      }\n      ${r.m.getSliderStyles()}\n    `}}}};