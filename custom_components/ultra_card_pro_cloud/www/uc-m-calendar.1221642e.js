export const __webpack_esm_ids__=[4535];export const __webpack_esm_modules__={245(e,n,t){t.d(n,{UltraCalendarModule:()=>M});var a=t(2618),r=t(935),i=t(3307),o=t(9957),l=t(5147),d=t(8938);t(3534);class c{constructor(e){this._cache=new Map,this._cacheTTL=3e5,e&&(this._cacheTTL=e)}async fetchEvents(e,n,t,a){const r=this.generateCacheKey(n,t,a),i=this._cache.get(r);if(i&&Date.now()-i.timestamp<this._cacheTTL)return i.events;const o=n.map(n=>this.fetchCalendarEvents(e,n,t,a)),l=await Promise.allSettled(o);let d=[];return l.forEach((e,t)=>{"fulfilled"===e.status?d=d.concat(e.value):console.warn(`Calendar module: Failed to fetch events for ${n[t].entity}`,e.reason)}),d.sort((e,n)=>e.start.getTime()-n.start.getTime()),this._cache.set(r,{events:d,timestamp:Date.now()}),d}async fetchCalendarEvents(e,n,t,a){if(!n.entity||!(null==e?void 0:e.callApi))return[];try{const r=this.formatDateForApi(t),i=this.formatDateForApi(a),o=await e.callApi("GET",`calendars/${n.entity}?start=${encodeURIComponent(r)}&end=${encodeURIComponent(i)}`);return Array.isArray(o)?o.map(e=>this.processEvent(e,n)):[]}catch(e){throw console.error(`Calendar module: Error fetching ${n.entity}:`,e),e}}processEvent(e,n){const t=this.parseEventDate(e.start),a=this.parseEventDate(e.end),r=this.isAllDayEvent(e),i=this.isMultiDayEvent(t,a,r);return{id:e.uid||`${n.entity}-${t.getTime()}-${e.summary}`,calendarId:n.id,calendarColor:n.color||"#03a9f4",calendarName:n.name||this.getCalendarDisplayName(n.entity),summary:e.summary||"Untitled Event",description:e.description,location:e.location,start:t,end:a,isAllDay:r,isMultiDay:i,raw:e}}parseEventDate(e){return"string"==typeof e?new Date(e):e.dateTime?new Date(e.dateTime):e.date?new Date(e.date+"T00:00:00"):new Date}isAllDayEvent(e){const n=e.start,t=e.end;if("object"==typeof n&&"date"in n&&!("dateTime"in n))return!0;if("string"==typeof n&&"string"==typeof t){const e=new Date(n),a=new Date(t);if(0===e.getHours()&&0===e.getMinutes()&&0===a.getHours()&&0===a.getMinutes())return!0}return!1}isMultiDayEvent(e,n,t){const a=new Date(e);a.setHours(0,0,0,0);const r=new Date(n);return r.setHours(0,0,0,0),t&&r.setDate(r.getDate()-1),r.getTime()>a.getTime()}getCalendarDisplayName(e){const n=e.replace("calendar.","").replace(/_/g," ");return n.charAt(0).toUpperCase()+n.slice(1)}formatDateForApi(e){return e.toISOString()}generateCacheKey(e,n,t){return`${e.map(e=>`${e.entity}~${e.id}~${e.color||""}~${e.name||""}`).sort().join("|")}:${n.toISOString()}:${t.toISOString()}`}clearCache(){this._cache.clear()}setCacheTTL(e){this._cacheTTL=e}static groupByDay(e){const n=new Map;return e.forEach(e=>{const t=c.getDateKey(e.start);n.has(t)||n.set(t,[]),n.get(t).push(e)}),n}static groupByWeek(e,n="sunday"){const t=new Map;return e.forEach(e=>{const a=c.getWeekKey(e.start,n);t.has(a)||t.set(a,[]),t.get(a).push(e)}),t}static groupByMonth(e){const n=new Map;return e.forEach(e=>{const t=c.getMonthKey(e.start);n.has(t)||n.set(t,[]),n.get(t).push(e)}),n}static getEventsForDate(e,n){const t=c.getDateKey(n),a=new Date(n);a.setHours(0,0,0,0);const r=new Date(n);return r.setHours(23,59,59,999),e.filter(e=>c.getDateKey(e.start)===t||!!(e.isMultiDay&&e.start<=r&&e.end>a))}static getDateKey(e){const n=String(e.getMonth()+1).padStart(2,"0"),t=String(e.getDate()).padStart(2,"0");return`${e.getFullYear()}-${n}-${t}`}static getWeekKey(e,n){const t=e.getFullYear(),a=c.getWeekNumber(e,n);return`${t}-W${String(a).padStart(2,"0")}`}static getMonthKey(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}`}static getWeekNumber(e,n){const t=new Date(e);t.setHours(0,0,0,0);const a=new Date(t.getFullYear(),0,1),r="monday"===n?1:"saturday"===n?6:0,i=Math.floor((t.getTime()-a.getTime())/864e5);return Math.ceil((i+a.getDay()+1-r)/7)}static getWeekDays(e,n="sunday"){const t=[],a=new Date(e);let r=a.getDay()-("monday"===n?1:"saturday"===n?6:0);r<0&&(r+=7),a.setDate(a.getDate()-r),a.setHours(0,0,0,0);for(let e=0;e<7;e++)t.push(new Date(a)),a.setDate(a.getDate()+1);return t}static getMonthDays(e,n,t="sunday"){const a=[],r=new Date(e,n,1),i=new Date(e,n+1,0),o="monday"===t?1:"saturday"===t?6:0;let l=r.getDay()-o;l<0&&(l+=7);for(let t=l;t>0;t--){const r=new Date(e,n,1-t);a.push({date:r,currentMonth:!1})}for(let t=1;t<=i.getDate();t++){const r=new Date(e,n,t);a.push({date:r,currentMonth:!0})}const d=42-a.length;for(let t=1;t<=d;t++){const r=new Date(e,n+1,t);a.push({date:r,currentMonth:!1})}return a}static isSameDay(e,n){return e.getFullYear()===n.getFullYear()&&e.getMonth()===n.getMonth()&&e.getDate()===n.getDate()}static isToday(e){return c.isSameDay(e,new Date)}static formatDuration(e,n){const t=n.getTime()-e.getTime(),a=Math.round(t/6e4);if(a<60)return`${a}m`;const r=Math.floor(a/60),i=a%60;return 0===i?`${r}h`:`${r}h ${i}m`}static formatRelativeTime(e,n){const t=new Date,a=e.getTime()-t.getTime(),r=Math.round(a/6e4),i=Math.round(a/36e5),o=Math.round(a/864e5);return a<0?r>-60?`${Math.abs(r)}m ago`:i>-24?`${Math.abs(i)}h ago`:`${Math.abs(o)}d ago`:r<60?`in ${r}m`:i<24?`in ${i}h`:`in ${o}d`}}function s(e){return!1!==e.show_event_location}function p(e){return e.icon?a.qy`<ha-icon class="uc-calendar-ev-icon" icon=${e.icon}></ha-icon>`:a.s6}function u(e){var n,t;return e.module.language||(null===(t=null===(n=e.hass)||void 0===n?void 0:n.locale)||void 0===t?void 0:t.language)||"en"}function h(e,n,t="cell"){var r;const i=null===(r=e.weather)||void 0===r?void 0:r.get(c.getDateKey(n));if(!i)return a.s6;const o=!1!==e.module.weather_show_temperature&&void 0!==i.high?void 0!==i.low&&"cell"!==t?`${Math.round(i.high)}° / ${Math.round(i.low)}°`:`${Math.round(i.high)}°`:"";return a.qy`<span class="uc-calendar-weather uc-calendar-weather--${t}" title=${i.condition}>
    <ha-icon icon=${i.icon}></ha-icon>${o?a.qy`<span class="uc-calendar-weather-temp">${o}</span>`:a.s6}
  </span>`}function v(e,n){const t=u(e),a=(0,r.kg)("editor.calendar.all_day",t,"All day");if(n.isMultiDay){const r=e=>e.toLocaleDateString(t,{day:"numeric",month:"short"});if(n.isAllDay){const e=new Date(n.end);return e.setDate(e.getDate()-1),`${a} · ${r(n.start)} – ${r(e)}`}return`${r(n.start)} ${e.formatTime(n.start)} – ${r(n.end)} ${e.formatTime(n.end)}`}return n.isAllDay?a:!1!==e.module.show_end_time?`${e.formatTime(n.start)} – ${e.formatTime(n.end)}`:e.formatTime(n.start)}function _(e,n,t){const i=u(e);return a.qy`
    <div class="uc-calendar-details-header">
      <span>${n.toLocaleDateString(i,{weekday:"long",day:"numeric",month:"long"})}</span>
      <span class="uc-calendar-details-header-end">
        ${h(e,n,"inline")}
        ${t?a.qy`<button
              class="uc-calendar-details-close"
              type="button"
              aria-label=${(0,r.kg)("editor.calendar.close",i,"Close")}
              @click=${e=>{e.stopPropagation(),t()}}
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </button>`:a.s6}
      </span>
    </div>
    ${function(e,n){const{module:t,onEventClick:i}=e,o=u(e);return 0===n.length?a.qy`<div class="uc-calendar-details-empty">
      ${(0,r.kg)("editor.calendar.no_events_day",o,"No events")}
    </div>`:a.qy`${n.map(n=>{var l;return a.qy`
      <div
        class="uc-calendar-details-event"
        @click=${e=>{e.stopPropagation(),i(n)}}
      >
        <div class="uc-calendar-details-accent" style="background: ${n.calendarColor};"></div>
        <div class="uc-calendar-details-body">
          <div class="uc-calendar-details-title">${p(n)}${n.summary}</div>
          ${!1!==t.show_event_time?a.qy`<div class="uc-calendar-details-meta">
                <ha-icon icon="mdi:clock-outline"></ha-icon>
                <span>${v(e,n)}</span>
              </div>`:a.s6}
          ${s(t)&&n.location?a.qy`<div class="uc-calendar-details-meta">
                <ha-icon icon="mdi:map-marker"></ha-icon>
                <span>${f(t,n.location,x(t,n.location))}</span>
              </div>`:a.s6}
          ${t.show_event_description&&n.description?a.qy`<div class="uc-calendar-details-desc">${n.description}</div>`:a.s6}
          ${!1!==t.show_calendar_name?a.qy`<div class="uc-calendar-details-cal">
                <span class="uc-calendar-details-dot" style="background: ${n.calendarColor};"></span>
                ${n.calendarName}
              </div>`:a.s6}
        </div>
        ${(null===(l=e.isEventEditable)||void 0===l?void 0:l.call(e,n))?a.qy`<ha-icon
              class="uc-calendar-details-edit"
              icon="mdi:pencil-outline"
              title=${(0,r.kg)("editor.calendar.edit_event",o,"Edit event")}
            ></ha-icon>`:a.s6}
      </div>
    `})}`}(e,c.getEventsForDate(e.events,n))}
  `}function m(e){return a.qy`
    <div class="uc-calendar-empty">
      <ha-icon icon="mdi:calendar-blank"></ha-icon>
      <span>${e}</span>
    </div>
  `}function g(e){return 3===(e=e.replace("#","")).length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),`${parseInt(e.substring(0,2),16)}, ${parseInt(e.substring(2,4),16)}, ${parseInt(e.substring(4,6),16)}`}function w(e){const n=e.replace("#","");return(.299*parseInt(n.substring(0,2),16)+.587*parseInt(n.substring(2,4),16)+.114*parseInt(n.substring(4,6),16))/255>.5?"#000000":"#ffffff"}function y(e,n){return e.length<=n?e:e.substring(0,n-3)+"..."}function f(e,n,t){const r=function(e,n){const t=encodeURIComponent(n.trim());if(!t)return null;switch(e){case"google":return`https://www.google.com/maps/search/?api=1&query=${t}`;case"apple":return`https://maps.apple.com/?q=${t}`;case"osm":return`https://www.openstreetmap.org/search?query=${t}`;case"waze":return`https://waze.com/ul?q=${t}&navigate=yes`;default:return null}}(e.location_link,n);return r?a.qy`<a
    class="uc-calendar-location-link"
    href=${r}
    target="_blank"
    rel="noopener noreferrer"
    @click=${e=>e.stopPropagation()}
    @pointerdown=${e=>e.stopPropagation()}
    >${t}</a
  >`:a.qy`${t}`}function b(e){const n=e.split(/,|\n/).map(e=>e.trim()).filter(Boolean);return n.length>1?n.slice(0,-1).join(", "):e}function x(e,n){return e.remove_location_country?b(n):n}var $=t(2318),k=/*#__PURE__*/t(9308),D=/*#__PURE__*/t(1001);const S=["month","week","day"],T=["month","week","day"],F=["show_event_time","show_end_time","show_event_location","show_event_description","show_event_icon","show_calendar_name"],C={month:["show_event_time","show_end_time","show_event_location","show_event_description","show_calendar_name"],week:[],day:["show_event_time","show_end_time","show_event_location","show_event_description"],compact_list:["show_event_time","show_end_time","show_event_location","show_event_description","show_event_icon"],table:["show_end_time","show_event_description"],grid:["show_event_time","show_end_time","show_event_location","show_event_description","show_calendar_name"]};function q(e){const n=e.trim(),t=n.match(/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i);return t?"#"+[t[1],t[2],t[3]].map(e=>Math.min(255,Number(e)).toString(16).padStart(2,"0")).join(""):n}const E={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",exceptional:"mdi:alert-circle-outline",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant"},P=e=>String(e).padStart(2,"0"),z=e=>`${e.getFullYear()}-${P(e.getMonth()+1)}-${P(e.getDate())}`,U=e=>`${P(e.getHours())}:${P(e.getMinutes())}`,A=e=>new Date(e.replace(" ","T")).toISOString().replace(/\.\d{3}Z$/,"Z");class M extends i.m{constructor(){super(...arguments),this.metadata={type:"calendar",title:"Calendar",description:"Display calendar events with multiple view options",author:"WJD Designs",version:"1.0.0",icon:"mdi:calendar-month",category:"data",tags:["calendar","events","schedule","agenda","planner","pro"]},this._calendarService=null,this._states=new Map,this._fetches=new Map,this._shown=new Map,this._ruleCache=new WeakMap,this._hass=null,this._refreshInterval=null,this._clockTimer=null,this._clockLastUse=0,this._scrollContainer=null,this._scrollState={canScrollUp:!1,canScrollDown:!1},this._scrollAmount=100,this._scrollContainerId=`cal-scroll-${Math.random().toString(36).substring(2,9)}`}createDefault(e,n){const t={id:this.generateId("cal_entity"),entity:"",name:"",color:"#03a9f4",visible:!0};return{id:e||this.generateId("calendar"),type:"calendar",calendars:[t],view_type:"compact_list",days_to_show:7,title:"",show_title:!1,title_font_size:"20px",title_color:"var(--primary-text-color)",show_title_separator:!1,title_separator_color:"var(--divider-color)",title_separator_width:"1px",compact_events_to_show:5,compact_show_all_day_events:!0,compact_hide_empty_days:!1,compact_show_nav_buttons:!0,show_week_numbers:"none",first_day_of_week:"sunday",month_show_event_count:!0,month_event_display:"titles",month_show_day_details:!0,show_navigation:!0,week_start_hour:0,week_end_hour:24,week_time_interval:60,day_start_hour:0,day_end_hour:24,day_time_interval:60,table_show_date_column:!0,table_show_time_column:!0,table_show_calendar_column:!0,table_show_location_column:!0,table_show_duration_column:!1,grid_columns:2,grid_card_height:"auto",show_event_time:!0,show_end_time:!0,show_event_location:!0,show_event_description:!1,show_event_icon:!0,time_24h:!1,remove_location_country:!1,max_event_title_length:0,show_past_events:!1,date_vertical_alignment:"top",weekday_font_size:"12px",weekday_color:"var(--secondary-text-color)",day_font_size:"24px",day_color:"var(--primary-text-color)",show_month:!1,month_font_size:"12px",month_color:"var(--secondary-text-color)",event_font_size:"14px",event_color:"var(--primary-text-color)",time_font_size:"12px",time_color:"var(--secondary-text-color)",time_icon_size:"14px",location_font_size:"12px",location_color:"var(--secondary-text-color)",location_icon_size:"14px",description_font_size:"12px",description_color:"var(--secondary-text-color)",event_background_opacity:0,vertical_line_width:"3px",accent_color:"var(--primary-color)",row_spacing:"8px",event_spacing:"4px",additional_card_spacing:"0px",show_day_separator:!1,day_separator_width:"1px",day_separator_color:"var(--divider-color)",show_week_separator:!1,week_separator_width:"1px",week_separator_color:"var(--divider-color)",month_separator_width:"1px",month_separator_color:"var(--divider-color)",tap_action_expand:!1,refresh_interval:15,filter_keywords:[],filter_mode:"exclude",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},event_tap_action:{action:"more-info"},enable_hover_effect:!1,hover_background_color:""}}validate(e){const n=e,t=[...super.validate(e).errors];return n.calendars&&0!==n.calendars.length?n.calendars.some(e=>e.entity&&""!==e.entity.trim())||t.push("At least one calendar must have an entity selected"):t.push("At least one calendar entity must be configured"),{valid:0===t.length,errors:t}}renderActionsTab(e,n,t,a){return l.A.render(e,n,e=>a(e))}renderOtherTab(e,n,t,a){return d.X.render(e,n,e=>a(e))}renderGeneralTab(e,n,t,r){var i;const o=e,l=(null===(i=null==n?void 0:n.locale)||void 0===i?void 0:i.language)||"en";return a.qy`
      ${this.injectUcFormStyles()}
      <style>
        ${this.getEditorStyles()}
      </style>

      <!-- Calendar Selection Section -->
      ${this.renderCalendarSelectionSection(o,n,r,l)}

      <!-- View Configuration Section -->
      ${this.renderViewConfigSection(o,n,r,l)}

      <!-- Event Display Options Section (all views) -->
      ${this.renderEventDisplaySection(o,n,r,l)}

      <!-- One section per view the card offers -->
      ${this.renderPerViewSections(o,n,r,l)}

      <!-- Event Rules Section -->
      ${this.renderEventRulesSection(o,n,r,l)}

      <!-- Styling Section -->
      ${this.renderStylingSection(o,n,r,l)}

      <!-- Advanced Options Section -->
      ${this.renderAdvancedSection(o,n,r,l)}
    `}renderCalendarSelectionSection(e,n,t,i){const o=e.calendars||[];return a.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,r.kg)("editor.calendar.calendars_section",i,"Calendar Entities")}
        </div>
        <div class="section-description">
          ${(0,r.kg)("editor.calendar.calendars_desc",i,"Add calendar entities to display. Each calendar can have a custom color.")}
        </div>

        <div class="calendar-list">
          ${o.map((l,d)=>a.qy`
              <div class="calendar-item">
                <div class="calendar-item-header">
                  <div class="calendar-color-preview" style="background: ${l.color||"#03a9f4"}">
                  </div>
                  <span class="calendar-item-title">
                    ${l.name||l.entity||`Calendar ${d+1}`}
                  </span>
                  <div class="calendar-item-actions">
                    <ha-icon-button
                      @click=${()=>this.toggleCalendarVisibility(d,e,t)}
                      title="${!1!==l.visible?"Hide":"Show"}"
                    >
                      <ha-icon
                        icon="${!1!==l.visible?"mdi:eye":"mdi:eye-off"}"
                      ></ha-icon>
                    </ha-icon-button>
                    ${o.length>1?a.qy`
                          <ha-icon-button
                            @click=${()=>this.removeCalendar(d,e,t)}
                            title="Remove"
                          >
                            <ha-icon icon="mdi:delete"></ha-icon>
                          </ha-icon-button>
                        `:""}
                  </div>
                </div>

                <div class="calendar-item-content">
                  <!-- Entity Picker -->
                  <div class="field-row">
                    ${this.renderEntityPickerWithVariables(n,void 0,"entity",l.entity||"",n=>this.updateCalendarEntity(d,"entity",n,e,t),["calendar"],"Entity")}
                    <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
                      Select a Home Assistant calendar entity to show events from.
                    </div>
                  </div>

                  <!-- Custom Name -->
                  <div class="field-row">
                    <div class="field-title">Display Name (optional)</div>
                    <ha-form
                      .hass=${n}
                      .data=${{name:l.name||""}}
                      .schema=${[{name:"name",selector:{text:{}}}]}
                      .computeLabel=${()=>""}
                      @value-changed=${n=>this.updateCalendarEntity(d,"name",n.detail.value.name,e,t)}
                    ></ha-form>
                  </div>

                  <!-- Color Picker -->
                  <div class="field-row">
                    <div class="field-title">Calendar Color</div>
                    <ultra-color-picker
                      .value=${l.color||"#03a9f4"}
                      .defaultValue=${"#03a9f4"}
                      .hass=${n}
                      @value-changed=${n=>this.updateCalendarEntity(d,"color",n.detail.value,e,t)}
                    ></ultra-color-picker>
                  </div>

                  ${e.show_calendar_filter&&"person"===e.calendar_filter_group?a.qy`
                        <div class="field-row">
                          ${this.renderEntityPickerWithVariables(n,void 0,"person",l.person||"",n=>this.updateCalendarEntity(d,"person",n,e,t),["person"],(0,r.kg)("editor.calendar.calendar_person",i,"Person"))}
                          <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
                            ${(0,r.kg)("editor.calendar.calendar_person_desc",i,"Whose calendar this is. The header filter groups calendars by person; calendars without a person show under Shared.")}
                          </div>
                        </div>
                      `:""}
                </div>
              </div>
            `)}
        </div>

        <button class="add-calendar-btn" @click=${()=>this.addCalendar(e,t)}>
          <ha-icon icon="mdi:plus"></ha-icon>
          ${(0,r.kg)("editor.calendar.add_calendar",i,"Add Calendar")}
        </button>
      </div>
    `}renderViewConfigSection(e,n,t,i){const o=[{value:"month",label:(0,r.kg)("editor.calendar.view_month",i,"Month")},{value:"week",label:(0,r.kg)("editor.calendar.view_week",i,"Week")},{value:"day",label:(0,r.kg)("editor.calendar.view_day",i,"Day")},{value:"compact_list",label:(0,r.kg)("editor.calendar.view_list",i,"List")},{value:"table",label:(0,r.kg)("editor.calendar.view_table",i,"Table")},{value:"grid",label:(0,r.kg)("editor.calendar.view_grid",i,"Grid")}];return a.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,r.kg)("editor.calendar.view_config",i,"View Configuration")}
        </div>
        <div class="section-description">
          ${(0,r.kg)("editor.calendar.view_config_desc",i,"Configure the calendar view layout and date range.")}
        </div>

        <!-- View Type -->
        ${this.renderFieldSection("View Type","Select how events are displayed",n,{view_type:e.view_type||"compact_list"},[this.selectField("view_type",[{value:"compact_list",label:"Compact List"},{value:"month",label:"Month"},{value:"week",label:"Week"},{value:"day",label:"Day"},{value:"table",label:"Table"},{value:"grid",label:"Grid"}])],e=>{t({view_type:e.detail.value.view_type}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        <!-- Days to Show (month / week / day show the dates you page to) -->
        ${this._offeredViews(e).every(e=>S.includes(e))?"":this.renderSliderField((0,r.kg)("editor.calendar.days_to_show",i,"Days to Show"),(0,r.kg)("editor.calendar.days_to_show_desc",i,"Number of days the List, Table and Grid views show events for."),e.days_to_show||7,7,1,365,1,e=>t({days_to_show:e}),"")}

        <!-- Header controls -->
        ${this.renderFieldSection((0,r.kg)("editor.calendar.show_navigation",i,"Previous / next buttons"),(0,r.kg)("editor.calendar.show_navigation_desc",i,"Arrows in the header to page through months, weeks or days (month, week and day views)."),n,{show_navigation:!1!==e.show_navigation},[this.booleanField("show_navigation")],e=>{t({show_navigation:e.detail.value.show_navigation}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.show_view_switcher",i,"View switcher"),(0,r.kg)("editor.calendar.show_view_switcher_desc",i,"Buttons in the header to switch between views."),n,{show_view_switcher:!!e.show_view_switcher},[this.booleanField("show_view_switcher")],e=>{t({show_view_switcher:e.detail.value.show_view_switcher}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${e.show_view_switcher?this.renderFieldSection((0,r.kg)("editor.calendar.available_views",i,"Views to offer"),(0,r.kg)("editor.calendar.available_views_desc",i,"Which views the switcher shows, e.g. only Week and Day. The card opens on View Type when it is in this list."),n,{available_views:this._switcherViews(e)},[{name:"available_views",selector:{select:{multiple:!0,mode:"list",options:o}}}],e=>{const n=o.map(e=>e.value),a=(e.detail.value.available_views||[]).filter(e=>n.includes(e)).sort((e,t)=>n.indexOf(e)-n.indexOf(t));t({available_views:a.length?a:void 0}),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.show_add_event",i,"Add event button"),(0,r.kg)("editor.calendar.show_add_event_desc",i,"A + button in the header to create an event. Only calendars that accept new events (e.g. Local Calendar, Google, CalDAV) are offered."),n,{show_add_event:!!e.show_add_event},[this.booleanField("show_add_event")],e=>{t({show_add_event:e.detail.value.show_add_event}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.allow_edit_events",i,"Edit events"),(0,r.kg)("editor.calendar.allow_edit_events_desc",i,"Tap an event to change or delete it. Works with calendars that allow it (e.g. Local Calendar); events from other calendars keep the event tap action."),n,{allow_edit_events:!!e.allow_edit_events},[this.booleanField("allow_edit_events")],e=>{t({allow_edit_events:e.detail.value.allow_edit_events}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.show_calendar_filter",i,"Calendar filter"),(0,r.kg)("editor.calendar.show_calendar_filter_desc",i,"Chips in the header to show or hide calendars. The choice is remembered on each device."),n,{show_calendar_filter:!!e.show_calendar_filter},[this.booleanField("show_calendar_filter")],e=>{t({show_calendar_filter:e.detail.value.show_calendar_filter}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${e.show_calendar_filter?this.renderFieldSection((0,r.kg)("editor.calendar.calendar_filter_group",i,"Filter by"),(0,r.kg)("editor.calendar.calendar_filter_group_desc",i,"One chip per calendar, or one per person (set the person on each calendar above)."),n,{calendar_filter_group:e.calendar_filter_group||"calendar"},[this.selectField("calendar_filter_group",[{value:"calendar",label:(0,r.kg)("editor.calendar.filter_by_calendar",i,"Calendar")},{value:"person",label:(0,r.kg)("editor.calendar.filter_by_person",i,"Person")}])],e=>{t({calendar_filter_group:e.detail.value.calendar_filter_group}),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}

        <!-- Weather -->
        <div class="field-row" style="margin-bottom: 16px;">
          ${this.renderEntityPickerWithVariables(n,void 0,"weather_entity",e.weather_entity||"",e=>{t({weather_entity:e||void 0}),setTimeout(()=>this.triggerPreviewUpdate(),50)},["weather"],(0,r.kg)("editor.calendar.weather_entity",i,"Weather forecast (optional)"))}
          <div class="field-description" style="font-size: 13px !important; font-weight: 400 !important; margin-top: 4px; color: var(--secondary-text-color);">
            ${(0,r.kg)("editor.calendar.weather_entity_desc",i,"Shows the daily forecast on upcoming days.")}
          </div>
        </div>

        ${e.weather_entity?this.renderFieldSection((0,r.kg)("editor.calendar.weather_show_temperature",i,"Show temperature"),(0,r.kg)("editor.calendar.weather_show_temperature_desc",i,"Show the high (and low) temperature next to the weather icon."),n,{weather_show_temperature:!1!==e.weather_show_temperature},[this.booleanField("weather_show_temperature")],e=>{t({weather_show_temperature:e.detail.value.weather_show_temperature}),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.header_info",i,"Time and weather in header"),(0,r.kg)("editor.calendar.header_info_desc",i,"Show the current time and / or the current weather in the top right corner. Weather uses the forecast entity above."),n,{header_info:e.header_info||"none"},[this.selectField("header_info",[{value:"none",label:(0,r.kg)("editor.calendar.header_info_none",i,"Off")},{value:"time",label:(0,r.kg)("editor.calendar.header_info_time",i,"Time")},{value:"weather",label:(0,r.kg)("editor.calendar.header_info_weather",i,"Weather")},{value:"time_weather",label:(0,r.kg)("editor.calendar.header_info_time_weather",i,"Time and weather")}])],e=>{t({header_info:e.detail.value.header_info}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        <!-- Title Configuration -->
        ${this.renderFieldSection("Show Title","Display a title above the calendar",n,{show_title:e.show_title||!1},[this.booleanField("show_title")],e=>t({show_title:e.detail.value.show_title}))}

        ${e.show_title?a.qy`
              <div>
                
                  ${this.renderFieldSection("Title Text","Custom title for the calendar",n,{title:e.title||""},[this.textField("title")],e=>t({title:e.detail.value.title}))}

                  ${this.renderFieldSection("Show Title Separator","Display a line below the title",n,{show_title_separator:e.show_title_separator||!1},[this.booleanField("show_title_separator")],e=>t({show_title_separator:e.detail.value.show_title_separator}))}

                  ${e.show_title_separator?a.qy`
                        <div class="color-row" style="margin-top: 16px;">
                          <div class="color-field">
                            <div class="field-title">Separator Color</div>
                            <ultra-color-picker
                              .value=${e.title_separator_color||"var(--divider-color)"}
                              .defaultValue=${"var(--divider-color)"}
                              .hass=${n}
                              @value-changed=${e=>t({title_separator_color:e.detail.value})}
                            ></ultra-color-picker>
                          </div>
                        </div>
                      `:""}
                
              </div>
            `:""}

      </div>
    `}_offeredViews(e){const n=new Set([e.view_type||"compact_list"]);return e.show_view_switcher&&this._switcherViews(e).forEach(e=>n.add(e)),["month","week","day","compact_list","table","grid"].filter(e=>n.has(e))}_viewLabel(e,n){return{month:(0,r.kg)("editor.calendar.section_month",n,"Month view"),week:(0,r.kg)("editor.calendar.section_week",n,"Week view"),day:(0,r.kg)("editor.calendar.section_day",n,"Day view"),compact_list:(0,r.kg)("editor.calendar.section_list",n,"List view"),table:(0,r.kg)("editor.calendar.section_table",n,"Table view"),grid:(0,r.kg)("editor.calendar.section_grid",n,"Grid view")}[e]}renderPerViewSections(e,n,t,i){return a.qy`${this._offeredViews(e).map(o=>a.qy`
        <div class="settings-section per-view-section">
          <div class="section-title">${this._viewLabel(o,i)}</div>
          <div class="section-description">
            ${(0,r.kg)("editor.calendar.section_view_desc",i,"Settings that only change this view.")}
          </div>
          ${this.renderViewSpecificOptions(o,e,n,t,i)}
          ${this.renderViewEventDisplay(o,e,n,t,i)}
        </div>
      `)}`}renderViewSpecificOptions(e,n,t,r,i){switch(e){case"compact_list":return this.renderCompactListOptions(n,t,r,i);case"month":return this.renderMonthViewOptions(n,t,r,i);case"week":return this.renderWeekViewOptions(n,t,r,i);case"day":return this.renderDayViewOptions(n,t,r,i);case"table":return this.renderTableViewOptions(n,t,r,i);case"grid":return this.renderGridViewOptions(n,t,r,i);default:return a.qy``}}_eventDisplayLabels(e){return{show_event_time:{title:(0,r.kg)("editor.calendar.show_event_time",e,"Show Event Time"),desc:(0,r.kg)("editor.calendar.show_event_time_desc",e,"Display the start time of events")},show_end_time:{title:(0,r.kg)("editor.calendar.show_end_time",e,"Show End Time"),desc:(0,r.kg)("editor.calendar.show_end_time_desc",e,"Display the end time of events")},show_event_location:{title:(0,r.kg)("editor.calendar.show_location",e,"Show Location"),desc:(0,r.kg)("editor.calendar.show_location_desc",e,"Display event location")},show_event_description:{title:(0,r.kg)("editor.calendar.show_description",e,"Show Description"),desc:(0,r.kg)("editor.calendar.show_description_desc",e,"Display event description")},show_event_icon:{title:(0,r.kg)("editor.calendar.show_event_icon",e,"Show Event Icon"),desc:(0,r.kg)("editor.calendar.show_event_icon_desc",e,"Display a clock icon next to event times")},show_calendar_name:{title:(0,r.kg)("editor.calendar.show_calendar_name",e,"Show Calendar Name"),desc:(0,r.kg)("editor.calendar.show_calendar_name_desc",e,"Show which calendar an event is from, under the event in the day details and grid cards")}}}_setSharedEventDisplay(e,n,t,a){const r=!!t,i={[n]:r};if(e.event_display_per_view&&e.view_event_display){const t=void 0===e[n]?this._eventDisplayDefault(n):!!e[n],a=Object.assign({},e.view_event_display);let o=!1;for(const e of Object.keys(a)){const i=a[e];!i||void 0!==i[n]&&i[n]!==t||i[n]===r||(a[e]=Object.assign(Object.assign({},i),{[n]:r}),o=!0)}o&&(i.view_event_display=a)}a(i),setTimeout(()=>this.triggerPreviewUpdate(),50)}_eventDisplayDefault(e){return"show_event_description"!==e}renderViewEventDisplay(e,n,t,i,o){var l;const d=C[e];if(!d.length)return a.s6;const c=!!n.event_display_per_view,s=(null===(l=n.view_event_display)||void 0===l?void 0:l[e])||{},p=this._eventDisplayLabels(o),u=e=>{const t=c&&void 0!==s[e]?s[e]:n[e];return void 0===t?this._eventDisplayDefault(e):!!t};return a.qy`
      <div class="view-options-group per-view-event-display ${c?"":"locked"}">
        <div class="view-options-title">
          ${(0,r.kg)("editor.calendar.event_display",o,"Event Display")}
        </div>
        ${c?a.s6:a.qy`<div class="per-view-locked-note">
              <ha-icon icon="mdi:lock-outline"></ha-icon>
              <span>
                ${(0,r.kg)("editor.calendar.per_view_locked",o,'Set for all views in Event Display above. Turn on "Different settings per view" there to change them here.')}
              </span>
            </div>`}
        ${d.map(a=>this.renderFieldSection(p[a].title,p[a].desc,t,{[a]:u(a)},[this.booleanField(a)],t=>{if(!c)return;const r=Object.assign(Object.assign({},n.view_event_display||{}),{[e]:Object.assign(Object.assign({},s),{[a]:!!t.detail.value[a]})});i({view_event_display:r}),setTimeout(()=>this.triggerPreviewUpdate(),50)}))}
      </div>
    `}renderCompactListOptions(e,n,t,r){var i;return a.qy`
      <div class="view-options-group">
        <div class="view-options-title">Compact List Options</div>

        ${this.renderFieldSection("Auto-fit to Height","Show as many events as fit within a specified height instead of limiting by count",n,{compact_auto_fit_height:e.compact_auto_fit_height||!1},[this.booleanField("compact_auto_fit_height")],e=>{t({compact_auto_fit_height:e.detail.value.compact_auto_fit_height}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${e.compact_auto_fit_height?a.qy`
              <div>
                
                  ${this.renderFieldSection("Container Height","Height of the events container (e.g., 300px, 50vh, 100%)",n,{compact_height:e.compact_height||"300px"},[this.textField("compact_height")],e=>{t({compact_height:e.detail.value.compact_height}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

                  ${this.renderFieldSection("Overflow Behavior","How to handle events that exceed the container height",n,{compact_overflow:e.compact_overflow||"scroll"},[this.selectField("compact_overflow",[{value:"scroll",label:"Scrollable"},{value:"hidden",label:"Clip (hidden)"}])],e=>{t({compact_overflow:e.detail.value.compact_overflow}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

                  ${"hidden"===e.compact_overflow?this.renderFieldSection("Show Navigation Buttons","Display up/down buttons to scroll through clipped events",n,{compact_show_nav_buttons:!1!==e.compact_show_nav_buttons},[this.booleanField("compact_show_nav_buttons")],e=>{t({compact_show_nav_buttons:e.detail.value.compact_show_nav_buttons}),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}
                
              </div>
            `:this.renderSliderField("Events to Show","Maximum number of events to display (0 for unlimited)",null!==(i=e.compact_events_to_show)&&void 0!==i?i:5,5,0,100,1,e=>t({compact_events_to_show:e}),"")}

        ${this.renderFieldSection("Show All-Day Events","Include all-day events in the list",n,{compact_show_all_day_events:!1!==e.compact_show_all_day_events},[this.booleanField("compact_show_all_day_events")],e=>t({compact_show_all_day_events:e.detail.value.compact_show_all_day_events}))}

        ${this.renderFieldSection("Hide Empty Days","Do not show days without events",n,{compact_hide_empty_days:e.compact_hide_empty_days||!1},[this.booleanField("compact_hide_empty_days")],e=>t({compact_hide_empty_days:e.detail.value.compact_hide_empty_days}))}

        ${this.renderFieldSection("Enable Expand/Collapse","Allow tapping to expand or collapse event details",n,{tap_action_expand:e.tap_action_expand||!1},[this.booleanField("tap_action_expand")],e=>t({tap_action_expand:e.detail.value.tap_action_expand}))}
      </div>
    `}renderMonthViewOptions(e,n,t,i){return a.qy`
      <div class="view-options-group">
        <div class="view-options-title">Month View Options</div>

        ${this.renderFieldSection("Show Week Numbers","Display week numbers on the left side",n,{show_week_numbers:e.show_week_numbers||"none"},[this.selectField("show_week_numbers",[{value:"none",label:"None"},{value:"iso",label:"ISO (Monday start)"},{value:"us",label:"US (Sunday start)"}])],e=>{t({show_week_numbers:e.detail.value.show_week_numbers}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${this.renderFieldSection("First Day of Week","Which day starts the week",n,{first_day_of_week:e.first_day_of_week||"sunday"},[this.selectField("first_day_of_week",[{value:"sunday",label:"Sunday"},{value:"monday",label:"Monday"},{value:"saturday",label:"Saturday"}])],e=>{t({first_day_of_week:e.detail.value.first_day_of_week}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.month_event_display",i,"Events in days"),(0,r.kg)("editor.calendar.month_event_display_desc",i,"Show colored dots, or event names with their start time."),n,{month_event_display:e.month_event_display||"dots"},[this.selectField("month_event_display",[{value:"dots",label:(0,r.kg)("editor.calendar.month_event_display_dots",i,"Dots")},{value:"titles",label:(0,r.kg)("editor.calendar.month_event_display_titles",i,"Event names")}])],e=>{t({month_event_display:e.detail.value.month_event_display}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.month_show_day_details",i,"Tap a day to see its events"),(0,r.kg)("editor.calendar.month_show_day_details_desc",i,"Lists the day's events under the month with name, time (or all day) and location. Off: tapping a day runs the event tap action."),n,{month_show_day_details:!1!==e.month_show_day_details},[this.booleanField("month_show_day_details")],e=>{t({month_show_day_details:e.detail.value.month_show_day_details}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${!1!==e.month_show_day_details?this.renderSegmentedField((0,r.kg)("editor.calendar.month_day_details_mode",i,"Show the day's events"),(0,r.kg)("editor.calendar.month_day_details_mode_desc",i,"Under the month grid, or in a popup over the dashboard."),e.month_day_details_mode||"below",[{value:"below",label:(0,r.kg)("editor.calendar.month_day_details_below",i,"Under the month")},{value:"popup",label:(0,r.kg)("editor.calendar.month_day_details_popup",i,"Popup")}],e=>{t({month_day_details_mode:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)}):a.s6}

        ${"titles"===e.month_event_display?this.renderFieldSection((0,r.kg)("editor.calendar.month_title_fit",i,"Long event names"),(0,r.kg)("editor.calendar.month_title_fit_desc",i,'Cut off long names with "…", or wrap them onto more lines so the whole name shows.'),n,{month_title_fit:e.month_title_fit||"truncate"},[this.selectField("month_title_fit",[{value:"truncate",label:(0,r.kg)("editor.calendar.month_title_fit_truncate",i,"Cut off")},{value:"wrap",label:(0,r.kg)("editor.calendar.month_title_fit_wrap",i,"Wrap")}])],e=>{t({month_title_fit:e.detail.value.month_title_fit}),setTimeout(()=>this.triggerPreviewUpdate(),50)}):""}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.month_show_event_count",i,"Show Event Count"),"titles"===e.month_event_display?(0,r.kg)("editor.calendar.month_show_event_count_titles_desc",i,"A small number next to the date shows how many events the day has."):(0,r.kg)("editor.calendar.month_show_event_count_dots_desc",i,'Show up to three coloured dots per day, plus "+N" for more.'),n,{month_show_event_count:!1!==e.month_show_event_count},[this.booleanField("month_show_event_count")],e=>{t({month_show_event_count:e.detail.value.month_show_event_count}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
      </div>
    `}renderWeekViewOptions(e,n,t,r){var i,o,l;return a.qy`
      <div class="view-options-group">
        <div class="view-options-title">Week View Options</div>

        ${this.renderSliderField("Start Hour","First hour to display (0-23)",null!==(i=e.week_start_hour)&&void 0!==i?i:0,0,0,23,1,e=>t({week_start_hour:e}),"h")}

        ${this.renderSliderField("End Hour","Last hour to display (1-24)",null!==(o=e.week_end_hour)&&void 0!==o?o:24,24,1,24,1,e=>t({week_end_hour:e}),"h")}

        ${this.renderFieldSection("Time Interval","Time slot interval in minutes",n,{week_time_interval:String(null!==(l=e.week_time_interval)&&void 0!==l?l:60)},[this.selectField("week_time_interval",[{value:"15",label:"15 minutes"},{value:"30",label:"30 minutes"},{value:"60",label:"1 hour"}])],e=>{t({week_time_interval:parseInt(e.detail.value.week_time_interval,10)}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
      </div>
    `}renderDayViewOptions(e,n,t,r){var i,o,l;return a.qy`
      <div class="view-options-group">
        <div class="view-options-title">Day View Options</div>

        ${this.renderSliderField("Start Hour","First hour to display (0-23)",null!==(i=e.day_start_hour)&&void 0!==i?i:0,0,0,23,1,e=>t({day_start_hour:e}),"h")}

        ${this.renderSliderField("End Hour","Last hour to display (1-24)",null!==(o=e.day_end_hour)&&void 0!==o?o:24,24,1,24,1,e=>t({day_end_hour:e}),"h")}

        ${this.renderFieldSection("Time Interval","Time slot interval in minutes",n,{day_time_interval:String(null!==(l=e.day_time_interval)&&void 0!==l?l:60)},[this.selectField("day_time_interval",[{value:"15",label:"15 minutes"},{value:"30",label:"30 minutes"},{value:"60",label:"1 hour"}])],e=>{t({day_time_interval:parseInt(e.detail.value.day_time_interval,10)}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
      </div>
    `}renderTableViewOptions(e,n,t,r){return a.qy`
      <div class="view-options-group">
        <div class="view-options-title">Table View Options</div>

        ${this.renderFieldSection("Show Date Column","Display the date column",n,{table_show_date_column:!1!==e.table_show_date_column},[this.booleanField("table_show_date_column")],e=>t({table_show_date_column:e.detail.value.table_show_date_column}))}

        ${this.renderFieldSection("Show Time Column","Display the time column",n,{table_show_time_column:!1!==e.table_show_time_column},[this.booleanField("table_show_time_column")],e=>t({table_show_time_column:e.detail.value.table_show_time_column}))}

        ${this.renderFieldSection("Show Calendar Column","Display the calendar indicator column",n,{table_show_calendar_column:!1!==e.table_show_calendar_column},[this.booleanField("table_show_calendar_column")],e=>t({table_show_calendar_column:e.detail.value.table_show_calendar_column}))}

        ${this.renderFieldSection("Show Location Column","Display the location column",n,{table_show_location_column:!1!==e.table_show_location_column},[this.booleanField("table_show_location_column")],e=>t({table_show_location_column:e.detail.value.table_show_location_column}))}

        ${this.renderFieldSection("Show Duration Column","Display the duration column",n,{table_show_duration_column:e.table_show_duration_column||!1},[this.booleanField("table_show_duration_column")],e=>t({table_show_duration_column:e.detail.value.table_show_duration_column}))}
      </div>
    `}renderGridViewOptions(e,n,t,r){var i;return a.qy`
      <div class="view-options-group">
        <div class="view-options-title">Grid View Options</div>

        ${this.renderSliderField("Columns","Number of columns in the grid",null!==(i=e.grid_columns)&&void 0!==i?i:2,2,1,6,1,e=>t({grid_columns:e}),"")}

        ${this.renderFieldSection("Card Height","Height of each event card (e.g., auto, 100px, 150px)",n,{grid_card_height:e.grid_card_height||"auto"},[this.textField("grid_card_height")],e=>{t({grid_card_height:e.detail.value.grid_card_height}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
      </div>
    `}renderEventDisplaySection(e,n,t,i){return a.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,r.kg)("editor.calendar.event_display",i,"Event Display")}
        </div>
        <div class="section-description">
          ${(0,r.kg)("editor.calendar.event_display_desc",i,"Configure what information is shown for each event.")}
        </div>

        ${this.renderFieldSection((0,r.kg)("editor.calendar.event_display_per_view",i,"Different settings per view"),e.event_display_per_view?(0,r.kg)("editor.calendar.event_display_per_view_on",i,"Each view section below has its own time, location and description settings. The settings here are the starting values."):(0,r.kg)("editor.calendar.event_display_per_view_off",i,"Off: the settings here apply to every view. On: set them separately in each view section below."),n,{event_display_per_view:!!e.event_display_per_view},[this.booleanField("event_display_per_view")],n=>{const a=!!n.detail.value.event_display_per_view,r={event_display_per_view:a};if(a){const n=Object.assign({},e.view_event_display||{});for(const t of this._offeredViews(e)){const a=Object.assign({},n[t]||{});for(const n of C[t])void 0===a[n]&&(a[n]=void 0===e[n]?this._eventDisplayDefault(n):!!e[n]);n[t]=a}r.view_event_display=n}t(r),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.show_event_time",i,"Show Event Time"),(0,r.kg)("editor.calendar.show_event_time_desc",i,"Display the start time of events"),n,{show_event_time:!1!==e.show_event_time},[this.booleanField("show_event_time")],n=>this._setSharedEventDisplay(e,"show_event_time",n.detail.value.show_event_time,t))}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.show_end_time",i,"Show End Time"),(0,r.kg)("editor.calendar.show_end_time_desc",i,"Display the end time of events"),n,{show_end_time:!1!==e.show_end_time},[this.booleanField("show_end_time")],n=>this._setSharedEventDisplay(e,"show_end_time",n.detail.value.show_end_time,t))}

        ${this.renderFieldSection("24-Hour Time Format","Use 24-hour time format instead of AM/PM",n,{time_24h:e.time_24h||!1},[this.booleanField("time_24h")],e=>t({time_24h:e.detail.value.time_24h}))}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.show_location",i,"Show Location"),(0,r.kg)("editor.calendar.show_location_desc",i,"Display event location"),n,{show_event_location:!1!==e.show_event_location},[this.booleanField("show_event_location")],n=>this._setSharedEventDisplay(e,"show_event_location",n.detail.value.show_event_location,t))}

        ${!1!==e.show_event_location?this.renderFieldSection("Remove Country from Location","Strip country name from displayed locations",n,{remove_location_country:e.remove_location_country||!1},[this.booleanField("remove_location_country")],e=>t({remove_location_country:e.detail.value.remove_location_country})):""}

        ${!1!==e.show_event_location?this.renderSegmentedField((0,r.kg)("editor.calendar.location_link",i,"Open location in"),(0,r.kg)("editor.calendar.location_link_desc",i,"Make the location tappable so it opens in a maps app."),e.location_link||"none",[{value:"none",label:(0,r.kg)("editor.calendar.location_link_none",i,"Off")},{value:"google",label:"Google Maps"},{value:"apple",label:"Apple Maps"},{value:"osm",label:"OpenStreetMap"},{value:"waze",label:"Waze"}],e=>t({location_link:e})):""}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.show_description",i,"Show Description"),(0,r.kg)("editor.calendar.show_description_desc",i,"Display event description"),n,{show_event_description:e.show_event_description||!1},[this.booleanField("show_event_description")],n=>this._setSharedEventDisplay(e,"show_event_description",n.detail.value.show_event_description,t))}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.show_calendar_name",i,"Show Calendar Name"),(0,r.kg)("editor.calendar.show_calendar_name_desc",i,"Show which calendar an event is from, under the event in the day details and grid cards"),n,{show_calendar_name:!1!==e.show_calendar_name},[this.booleanField("show_calendar_name")],n=>this._setSharedEventDisplay(e,"show_calendar_name",n.detail.value.show_calendar_name,t))}

        ${this.renderFieldSection((0,r.kg)("editor.calendar.show_event_icon",i,"Show Event Icon"),(0,r.kg)("editor.calendar.show_event_icon_desc",i,"Display a clock icon next to event times"),n,{show_event_icon:!1!==e.show_event_icon},[this.booleanField("show_event_icon")],e=>t({show_event_icon:e.detail.value.show_event_icon}))}

        ${this.renderFieldSection("Show Past Events","Include events that have already ended today",n,{show_past_events:e.show_past_events||!1},[this.booleanField("show_past_events")],e=>t({show_past_events:e.detail.value.show_past_events}))}
      </div>
    `}renderStylingSection(e,n,t,i){var o;return a.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,r.kg)("editor.calendar.styling",i,"Styling")}
        </div>
        <div class="section-description">
          ${(0,r.kg)("editor.calendar.styling_desc",i,"Customize colors, fonts, and spacing for the calendar display.")}
        </div>

        <!-- Title Styling -->
        ${e.show_title?a.qy`
              <div class="styling-subsection">
                <div class="subsection-title">Title Styling</div>

                <div class="color-row">
                  <div class="color-field">
                    <div class="field-title">Title Color</div>
                    <ultra-color-picker
                      .value=${e.title_color||"var(--primary-text-color)"}
                      .defaultValue=${"var(--primary-text-color)"}
                      .hass=${n}
                      @value-changed=${e=>t({title_color:e.detail.value})}
                    ></ultra-color-picker>
                  </div>
                </div>

                ${this.renderFieldSection("Title Font Size","Size of the title text",n,{title_font_size:e.title_font_size||"20px"},[this.textField("title_font_size")],e=>t({title_font_size:e.detail.value.title_font_size}))}
              </div>
            `:""}

        <!-- Date Column Styling -->
        <div class="styling-subsection">
          <div class="subsection-title">Date Column</div>

          ${this.renderFieldSection("Date Alignment","Vertical alignment of date column",n,{date_vertical_alignment:e.date_vertical_alignment||"top"},[this.selectField("date_vertical_alignment",[{value:"top",label:"Top"},{value:"middle",label:"Middle"},{value:"bottom",label:"Bottom"}])],e=>{t({date_vertical_alignment:e.detail.value.date_vertical_alignment}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          <div class="color-row">
            <div class="color-field">
              <div class="field-title">Weekday Color</div>
              <ultra-color-picker
                .value=${e.weekday_color||"var(--secondary-text-color)"}
                .defaultValue=${"var(--secondary-text-color)"}
                .hass=${n}
                @value-changed=${e=>t({weekday_color:e.detail.value})}
              ></ultra-color-picker>
            </div>
            <div class="color-field">
              <div class="field-title">Day Number Color</div>
              <ultra-color-picker
                .value=${e.day_color||"var(--primary-text-color)"}
                .defaultValue=${"var(--primary-text-color)"}
                .hass=${n}
                @value-changed=${e=>t({day_color:e.detail.value})}
              ></ultra-color-picker>
            </div>
          </div>

          ${this.renderFieldSection("Show Month","Display month name with date",n,{show_month:e.show_month||!1},[this.booleanField("show_month")],e=>t({show_month:e.detail.value.show_month}))}

          ${e.show_month?a.qy`
                <div>
                  
                    <div class="color-row">
                      <div class="color-field">
                        <div class="field-title">Month Color</div>
                        <ultra-color-picker
                          .value=${e.month_color||"var(--secondary-text-color)"}
                          .defaultValue=${"var(--secondary-text-color)"}
                          .hass=${n}
                          @value-changed=${e=>t({month_color:e.detail.value})}
                        ></ultra-color-picker>
                      </div>
                    </div>
                  
                </div>
              `:""}
        </div>

        <!-- Event Styling -->
        <div class="styling-subsection">
          <div class="subsection-title">Event Styling</div>

          <div class="color-row">
            <div class="color-field">
              <div class="field-title">Event Text Color</div>
              <ultra-color-picker
                .value=${e.event_color||"var(--primary-text-color)"}
                .defaultValue=${"var(--primary-text-color)"}
                .hass=${n}
                @value-changed=${e=>t({event_color:e.detail.value})}
              ></ultra-color-picker>
            </div>
            <div class="color-field">
              <div class="field-title">Time Text Color</div>
              <ultra-color-picker
                .value=${e.time_color||"var(--secondary-text-color)"}
                .defaultValue=${"var(--secondary-text-color)"}
                .hass=${n}
                @value-changed=${e=>t({time_color:e.detail.value})}
              ></ultra-color-picker>
            </div>
          </div>

          <div class="color-row">
            <div class="color-field">
              <div class="field-title">Location Text Color</div>
              <ultra-color-picker
                .value=${e.location_color||"var(--secondary-text-color)"}
                .defaultValue=${"var(--secondary-text-color)"}
                .hass=${n}
                @value-changed=${e=>t({location_color:e.detail.value})}
              ></ultra-color-picker>
            </div>
            <div class="color-field">
              <div class="field-title">Description Text Color</div>
              <ultra-color-picker
                .value=${e.description_color||"var(--secondary-text-color)"}
                .defaultValue=${"var(--secondary-text-color)"}
                .hass=${n}
                @value-changed=${e=>t({description_color:e.detail.value})}
              ></ultra-color-picker>
            </div>
          </div>

          ${this.renderSliderField("Event Background Opacity","Background opacity for event items (0-100)",null!==(o=e.event_background_opacity)&&void 0!==o?o:0,0,0,100,1,e=>t({event_background_opacity:e}),"%")}

          ${this.renderFieldSection("Accent Line Width","Width of the calendar color accent line (e.g., 3px)",n,{vertical_line_width:e.vertical_line_width||"3px"},[this.textField("vertical_line_width")],e=>{t({vertical_line_width:e.detail.value.vertical_line_width}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <!-- Spacing -->
        <div class="styling-subsection">
          <div class="subsection-title">Spacing</div>

          ${this.renderFieldSection("Row Spacing","Space between day rows (e.g., 8px)",n,{row_spacing:e.row_spacing||"8px"},[this.textField("row_spacing")],e=>{t({row_spacing:e.detail.value.row_spacing}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${this.renderFieldSection("Event Spacing","Space between events (e.g., 4px)",n,{event_spacing:e.event_spacing||"4px"},[this.textField("event_spacing")],e=>{t({event_spacing:e.detail.value.event_spacing}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
        </div>

        <!-- Separators -->
        <div class="styling-subsection">
          <div class="subsection-title">Separators</div>

          <!-- Day Separator -->
          ${this.renderFieldSection("Show Day Separators","Display lines between day rows",n,{show_day_separator:e.show_day_separator||!1},[this.booleanField("show_day_separator")],e=>{t({show_day_separator:e.detail.value.show_day_separator}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${e.show_day_separator?a.qy`
                <div>
                  
                    <div class="separator-row">
                      <div class="separator-field">
                        <div class="field-title">Day Separator Color</div>
                        <ultra-color-picker
                          .value=${e.day_separator_color||"var(--divider-color)"}
                          .defaultValue=${"var(--divider-color)"}
                          .hass=${n}
                          @value-changed=${e=>{t({day_separator_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                        ></ultra-color-picker>
                      </div>
                    </div>
                  
                </div>
              `:""}

          <!-- Week Separator -->
          ${this.renderFieldSection("Show Week Separators","Display lines between week boundaries",n,{show_week_separator:e.show_week_separator||!1},[this.booleanField("show_week_separator")],e=>{t({show_week_separator:e.detail.value.show_week_separator}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}

          ${e.show_week_separator?a.qy`
                <div>
                  
                    <div class="separator-row">
                      <div class="separator-field">
                        <div class="field-title">Week Separator Color</div>
                        <ultra-color-picker
                          .value=${e.week_separator_color||"var(--divider-color)"}
                          .defaultValue=${"var(--divider-color)"}
                          .hass=${n}
                          @value-changed=${e=>{t({week_separator_color:e.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                        ></ultra-color-picker>
                      </div>
                    </div>
                  
                </div>
              `:""}
        </div>
      </div>
    `}renderAdvancedSection(e,n,t,i){var o,l;return a.qy`
      <div class="settings-section">
        <div class="section-title">
          ${(0,r.kg)("editor.calendar.advanced",i,"Advanced Options")}
        </div>
        <div class="section-description">
          ${(0,r.kg)("editor.calendar.advanced_desc",i,"Configure refresh interval and event filtering.")}
        </div>

        ${this.renderSliderField("Refresh Interval (minutes)","How often to refresh calendar events (0 to disable)",null!==(o=e.refresh_interval)&&void 0!==o?o:15,15,0,1440,1,e=>t({refresh_interval:e}),"min")}

        ${this.renderSliderField("Max Event Title Length","Truncate event titles to this length (0 for no limit)",null!==(l=e.max_event_title_length)&&void 0!==l?l:0,0,0,500,1,e=>t({max_event_title_length:e}),"")}
      </div>
    `}renderEventRulesSection(e,n,t,i){const o=e.event_rules||[],l=(e,n)=>(0,r.kg)(`editor.calendar.${e}`,i,n),d=(e,n)=>{const a=[...o];a[e]=Object.assign(Object.assign({},a[e]),n),t({event_rules:a}),setTimeout(()=>this.triggerPreviewUpdate(),50)};return a.qy`
      <div class="settings-section">
        <div class="section-title">${l("event_rules","Event Rules")}</div>
        <div class="section-description">
          ${l("event_rules_desc","Give events a new name, an icon or their own colour when their name matches, e.g. waste collection days from a city calendar. The first matching rule wins.")}
        </div>
        <div class="calendar-list">
          ${o.map((e,r)=>a.qy`
              <div class="calendar-item">
                <div class="calendar-item-header">
                  <div class="calendar-color-preview" style="background: ${e.color||"transparent"}; border: 1px solid var(--divider-color);"></div>
                  ${e.icon?a.qy`<ha-icon icon=${e.icon} style="--mdc-icon-size: 18px;"></ha-icon>`:a.s6}
                  <span class="calendar-item-title">
                    ${e.match?`${e.match}${e.rename?` → ${e.rename}`:""}`:`${l("event_rule","Rule")} ${r+1}`}
                  </span>
                  <div class="calendar-item-actions">
                    <ha-icon-button
                      @click=${()=>{const e=[...o];e.splice(r,1),t({event_rules:e.length?e:void 0}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                      title=${l("remove","Remove")}
                    >
                      <ha-icon icon="mdi:delete"></ha-icon>
                    </ha-icon-button>
                  </div>
                </div>
                <div class="calendar-item-content">
                  ${this.renderFieldSection(l("event_rule_match","Event name contains"),l("event_rule_match_desc","Text to look for in the event name. Upper and lower case do not matter."),n,{match:e.match||""},[this.textField("match")],e=>d(r,{match:e.detail.value.match||""}))}
                  ${this.renderFieldSection(l("event_rule_mode","Match"),"",n,{match_mode:e.match_mode||"contains"},[this.selectField("match_mode",[{value:"contains",label:l("event_rule_mode_contains","Name contains the text")},{value:"exact",label:l("event_rule_mode_exact","Name is exactly the text")}])],e=>d(r,{match_mode:e.detail.value.match_mode}))}
                  ${this.renderFieldSection(l("event_rule_rename","Show as"),l("event_rule_rename_desc","New name for matching events. Leave empty to keep the name."),n,{rename:e.rename||""},[this.textField("rename")],e=>d(r,{rename:e.detail.value.rename||void 0}))}
                  ${this.renderFieldSection(l("event_rule_icon","Icon"),l("event_rule_icon_desc","Shown before the event name."),n,{icon:e.icon||""},[{name:"icon",selector:{icon:{}}}],e=>d(r,{icon:e.detail.value.icon||void 0}))}
                  <div class="field-row">
                    <div class="field-title">${l("event_rule_color","Colour")}</div>
                    <ultra-color-picker
                      .value=${e.color||""}
                      .defaultValue=${""}
                      .hass=${n}
                      @value-changed=${e=>d(r,{color:e.detail.value||void 0})}
                    ></ultra-color-picker>
                  </div>
                </div>
              </div>
            `)}
        </div>
        <button
          class="add-calendar-btn"
          @click=${()=>{t({event_rules:[...o,{id:this.generateId("cal_rule"),match:""}]})}}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
          ${l("add_event_rule","Add rule")}
        </button>
      </div>
    `}addCalendar(e,n){var t;const a={id:this.generateId("cal_entity"),entity:"",name:"",color:this.getNextCalendarColor((null===(t=e.calendars)||void 0===t?void 0:t.length)||0),visible:!0};n({calendars:[...e.calendars||[],a]})}removeCalendar(e,n,t){const a=[...n.calendars||[]];a.splice(e,1),t({calendars:a})}updateCalendarEntity(e,n,t,a,r){const i=[...a.calendars||[]];i[e]&&(i[e]=Object.assign(Object.assign({},i[e]),{[n]:t}),r({calendars:i}),setTimeout(()=>this.triggerPreviewUpdate(),50))}toggleCalendarVisibility(e,n,t){const a=[...n.calendars||[]];a[e]&&(a[e]=Object.assign(Object.assign({},a[e]),{visible:!(!1!==a[e].visible)}),t({calendars:a}),setTimeout(()=>this.triggerPreviewUpdate(),50))}getNextCalendarColor(e){const n=["#03a9f4","#ff6c92","#43a047","#ff9800","#9c27b0","#00bcd4","#f44336","#8bc34a"];return n[e%n.length]}getEditorStyles(){return"\n      .settings-section {\n        background: var(--secondary-background-color);\n        border-radius: var(--uc-r-8, 8px);\n        padding: 16px;\n        margin-bottom: 24px;\n      }\n\n      .section-title {\n        font-size: 18px;\n        font-weight: 700;\n        text-transform: uppercase;\n        color: var(--primary-color);\n        color: color-mix(in srgb, var(--primary-color) 60%, var(--primary-text-color));\n        margin-bottom: 8px;\n        letter-spacing: 0.5px;\n      }\n\n      .section-description {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        margin-bottom: 16px;\n        opacity: 0.8;\n        line-height: 1.4;\n      }\n\n      .calendar-list {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        margin-bottom: 16px;\n      }\n\n      .calendar-item {\n        background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background)));\n        border-radius: var(--uc-r-8, 8px);\n        overflow: hidden;\n        border: 1px solid var(--divider-color);\n      }\n\n      .calendar-item-header {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        padding: 12px;\n        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);\n        border-bottom: 1px solid var(--divider-color);\n      }\n\n      .calendar-color-preview {\n        width: 24px;\n        height: 24px;\n        border-radius: 50%;\n        flex-shrink: 0;\n      }\n\n      .calendar-item-title {\n        flex: 1;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .calendar-item-actions {\n        display: flex;\n        gap: 4px;\n      }\n\n      .calendar-item-content {\n        padding: 16px;\n        display: flex;\n        flex-direction: column;\n        gap: 16px;\n      }\n\n      .field-row {\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n      }\n\n      .field-title {\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n\n      .add-calendar-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        width: 100%;\n        padding: 12px;\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        font-size: 14px;\n        font-weight: 600;\n        cursor: pointer;\n        transition: all 0.2s ease;\n      }\n\n      .add-calendar-btn:hover {\n        opacity: 0.9;\n        transform: translateY(-1px);\n      }\n\n      .view-options-group {\n        margin-top: 24px;\n        padding: 16px;\n        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);\n        border-radius: var(--uc-r-8, 8px);\n        border-left: 4px solid var(--primary-color);\n      }\n\n      .view-options-title {\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-color);\n        margin-bottom: 16px;\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n      }\n\n      /* The view section header already names the view. */\n      .per-view-section > .view-options-group:not(.per-view-event-display) > .view-options-title {\n        display: none;\n      }\n\n      .per-view-event-display.locked .field-section,\n      .per-view-event-display.locked .field-row {\n        opacity: 0.45;\n        pointer-events: none;\n      }\n\n      .per-view-locked-note {\n        display: flex;\n        gap: 8px;\n        align-items: flex-start;\n        font-size: 13px;\n        line-height: 1.4;\n        color: var(--secondary-text-color);\n        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);\n        border-radius: 6px;\n        padding: 8px 10px;\n        margin-bottom: 12px;\n      }\n\n      .per-view-locked-note ha-icon {\n        --mdc-icon-size: 18px;\n        flex: 0 0 auto;\n        color: var(--primary-color);\n      }\n\n      .styling-subsection {\n        margin-top: 24px;\n        padding-top: 16px;\n        border-top: 1px solid var(--divider-color);\n      }\n\n      .styling-subsection:first-of-type {\n        margin-top: 0;\n        padding-top: 0;\n        border-top: none;\n      }\n\n      .subsection-title {\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        margin-bottom: 16px;\n      }\n\n      .color-row {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n        gap: 16px;\n        margin-bottom: 16px;\n      }\n\n      .color-field {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n      }\n\n      .separator-row {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        gap: 16px;\n        margin-bottom: 16px;\n      }\n\n      .separator-field {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n      }\n\n      .conditional-fields-group {\n        margin-top: 16px;\n        border-left: 4px solid var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.08);\n        border-radius: 0 var(--uc-r-8, 8px) var(--uc-r-8, 8px) 0;\n        overflow: hidden;\n        transition: all 0.2s ease;\n        animation: slideInFromLeft 0.3s ease-out;\n      }\n\n      .conditional-fields-content {\n        padding: 16px;\n      }\n\n      @keyframes slideInFromLeft {\n        from {\n          opacity: 0;\n          transform: translateX(-10px);\n        }\n        to {\n          opacity: 1;\n          transform: translateX(0);\n        }\n      }\n\n      @media (max-width: 600px) {\n        .color-row,\n        .separator-row {\n          grid-template-columns: 1fr;\n        }\n      }\n    "}renderPreview(e,n,t,i){var o;const l=e,d=l.language||(null===(o=null==n?void 0:n.locale)||void 0===o?void 0:o.language)||"en";this._hass=n;const s=this._resolvedCalendars(l,t),p=this._stateFor(l.id);if(this._restoreUiState(l.id,p),0===s.length)return this.renderGradientErrorState((0,r.kg)("editor.calendar.error_no_calendars",d,"Configure Calendars"),(0,r.kg)("editor.calendar.error_no_calendars_desc",d,"Select at least one calendar entity in the General tab"));this._calendarService||(this._calendarService=new c);const u=this._activeView(l,p),h=p.anchor||new Date,v=this._viewRange(l,u,h),_=this.fetchEventsIfNeeded(l,n,s,v,u),m=`${l.id}|${i||"card"}`,g=this._shown.get(m),w=0===_.lastFetch&&g&&g.lastFetch>0?g:_;_.lastFetch>0&&this._shown.set(m,_);const y=l.compact_auto_fit_height&&"hidden"===l.compact_overflow&&!1!==l.compact_show_nav_buttons;y&&setTimeout(()=>this.findAndSetupScrollContainer(),50);const f=this._hiddenCalendarIds(l,s,p),b=this._applyEventRules(l,w.events),x=f.size?b.filter(e=>!f.has(e.calendarId)):b,$=Object.assign({module:Object.assign(Object.assign({},this._effectiveModule(l,u)),{view_type:u}),hass:n,events:x,loading:w.loading,error:w.error,expanded:p.expanded,onEventClick:e=>this.handleEventClick(e,l,n,s),isEventEditable:l.allow_edit_events?e=>null!==this._editFeatures(e,n,s):void 0,onExpandToggle:()=>this.handleExpandToggle(l.id),formatTime:e=>this.formatTime(e,l),formatDate:e=>this.formatDate(e,l,n),anchorDate:h,weather:this._weatherByDay(l,n),selectedDateKey:p.selectedDateKey,onDaySelect:e=>{const n=c.getDateKey(e);p.selectedDateKey=p.selectedDateKey===n?void 0:n,p.selectedSurface=m,this.triggerPreviewUpdate(!0)},onDayOpen:this._switcherViews(l).includes("day")&&l.show_view_switcher?e=>{p.view="day",p.baseView=l.view_type||"compact_list",p.anchor=new Date(e),this._saveUiState(l.id,p),this.triggerPreviewUpdate(!0)}:void 0},y?{scrollState:this._scrollState,onScrollUp:()=>this.handleScrollUp(),onScrollDown:()=>this.handleScrollDown(),scrollContainerId:this._scrollContainerId}:{}),k=this.buildStyleString(this.buildDesignStyles(e,n)),D=this.getHoverEffectClass(e),S=$.module,T="month"!==u||!1===S.month_show_day_details||"popup"!==S.month_day_details_mode||!p.selectedDateKey||p.form||void 0!==p.selectedSurface&&p.selectedSurface!==m?void 0:new Date(`${p.selectedDateKey}T00:00:00`),F=()=>{p.selectedDateKey=void 0,this._syncDayPopupPortal(l.id,null),this.triggerPreviewUpdate(!0)},C="live"===i||"ha-preview"===i,q=!!T&&C;if(!C){const e=T?{context:$,date:T,styles:this.getPreviewStyles(l),onClose:F}:null;(e||M._dayPopupPortals.has(l.id))&&queueMicrotask(()=>this._syncDayPopupPortal(l.id,e))}return this.wrapWithAnimation(a.qy`
      <style>
        ${this.getPreviewStyles(l)}
      </style>
      <div class="uc-calendar-container ${D}" style="${k}">
        ${l.show_title&&l.title?a.qy`
              <div
                class="uc-calendar-title ${l.show_title_separator?"with-separator":""}"
                style="
                  font-size: ${l.title_font_size||"20px"};
                  color: ${l.title_color||"var(--primary-text-color)"};
                  ${l.show_title_separator?`border-bottom: ${l.title_separator_width||"1px"} solid ${l.title_separator_color||"var(--divider-color)"};`:""}
                "
              >
                ${l.title}
              </div>
            `:""}
        ${this._renderToolbar(l,n,s,p,u,h,v,d)}
        ${this._renderFilterChips(l,n,s,p,d)}
        ${p.form?this._renderAddForm(l,n,s,p,d):this.renderCalendarView($,0===w.lastFetch)}
        ${q&&T?this._renderDayPopupOverlay($,T,F):a.s6}
      </div>
    `,e,n)}_renderDayPopupOverlay(e,n,t){return a.qy`
      <div
        class="uc-calendar-popup-backdrop"
        @click=${e=>{e.stopPropagation(),t()}}
      >
        <div
          class="uc-calendar-popup uc-calendar-details"
          role="dialog"
          aria-modal="true"
          data-uc-role="pane"
          @click=${e=>e.stopPropagation()}
        >
          ${_(e,n,t)}
        </div>
      </div>
    `}_syncDayPopupPortal(e,n){if("undefined"==typeof document)return;const t=M._dayPopupPortals,r=t.get(e);if(!n)return void(r&&(r.cleanup(),t.delete(e),M._dayPopupClose.delete(e)));M._dayPopupClose.set(e,n.onClose);let i=r&&r.el.isConnected?r.el:void 0;if(!i){null==r||r.cleanup();const n=document.createElement("div");n.className="uc-calendar-popup-portal",n.style.position="fixed",n.style.inset="0",n.style.zIndex=`${D.Mu.DIALOG_OVERLAY}`,(0,k.e)(n);const o=()=>{var n;return null===(n=M._dayPopupClose.get(e))||void 0===n?void 0:n()},l=e=>{"Escape"===e.key&&o()};document.addEventListener("keydown",l),window.addEventListener("location-changed",o),window.addEventListener("popstate",o);const d=()=>{document.removeEventListener("keydown",l),window.removeEventListener("location-changed",o),window.removeEventListener("popstate",o),(0,a.XX)(a.s6,n),n.remove()};document.body.appendChild(n),t.set(e,{el:n,cleanup:d}),i=n}(0,a.XX)(a.qy`<style>
          ${n.styles}
        </style>
        ${this._renderDayPopupOverlay(n.context,n.date,n.onClose)}`,i)}_switcherViews(e){const n=(e.available_views||[]).filter(Boolean);return n.length?n:T}_activeView(e,n){const t=e.view_type||"compact_list";if(null!==n.baseView&&n.baseView!==t&&(n.view=null,n.baseView=null),!e.show_view_switcher)return t;const a=this._switcherViews(e);return n.view&&a.includes(n.view)?n.view:a.includes(t)?t:a[0]}_viewRange(e,n,t){const a=e.first_day_of_week||"sunday";if("month"===n){const e=c.getMonthDays(t.getFullYear(),t.getMonth(),a),n=new Date(e[0].date),r=new Date(e[e.length-1].date);return r.setDate(r.getDate()+1),{start:n,end:r}}if("week"===n){const e=c.getWeekDays(t,a),n=new Date(e[6]);return n.setDate(n.getDate()+1),{start:e[0],end:n}}if("day"===n){const e=new Date(t);e.setHours(0,0,0,0);const n=new Date(e);return n.setDate(n.getDate()+1),{start:e,end:n}}const r=new Date;e.show_past_events||r.setHours(0,0,0,0);const i=new Date(r);return i.setDate(i.getDate()+(e.days_to_show||7)),{start:r,end:i}}_step(e,n,t,a){const r=new Date(n.anchor||new Date);"month"===t?(r.setDate(1),r.setMonth(r.getMonth()+a)):"week"===t?r.setDate(r.getDate()+7*a):r.setDate(r.getDate()+a),n.anchor=r,n.selectedDateKey=void 0,this.triggerPreviewUpdate(!0)}_viewTitle(e,n,t,a){if("month"===e)return n.toLocaleDateString(a,{month:"long",year:"numeric"});if("week"===e){const e=new Date(t.end);return e.setDate(e.getDate()-1),`${t.start.toLocaleDateString(a,{day:"numeric",month:"short"})} – ${e.toLocaleDateString(a,{day:"numeric",month:"short",year:"numeric"})}`}return n.toLocaleDateString(a,{weekday:"long",day:"numeric",month:"long"})}_uiStorageKey(e){return`uc-calendar-ui-${e}`}_restoreUiState(e,n){var t;if(!n.restored){n.restored=!0;try{const a=null===(t=window.localStorage)||void 0===t?void 0:t.getItem(this._uiStorageKey(e));if(!a)return;const r=JSON.parse(a);r.view&&r.base&&(n.view=r.view,n.baseView=r.base),Array.isArray(r.hidden)&&(n.hidden=new Set(r.hidden))}catch(e){}}}_saveUiState(e,n){var t;try{null===(t=window.localStorage)||void 0===t||t.setItem(this._uiStorageKey(e),JSON.stringify({view:n.view,base:n.baseView,hidden:[...n.hidden]}))}catch(e){}}_weatherByDay(e,n){var t;const a=(e.weather_entity||"").trim();if(!a||!n)return;const r=this.resolveEntity(a)||a;if(!(null===(t=n.states)||void 0===t?void 0:t[r]))return;const i=(0,$.eq)(n,r,"daily",()=>this.triggerPreviewUpdate(!0)),o=new Map;for(const e of i){const t=(0,$.P$)(e.datetime);if(!t||o.has(t))continue;const a=String(e.condition||"");o.set(t,{condition:n.localize&&n.localize(`component.weather.entity_component._.state.${a}`)||a,icon:E[a]||"mdi:weather-cloudy",high:"number"==typeof e.temperature?e.temperature:void 0,low:"number"==typeof e.templow?e.templow:void 0})}return o.size?o:void 0}_renderHeaderInfo(e,n){var t,r,i;const o=e.header_info||"none";if("none"===o)return a.s6;const l="time"===o||"time_weather"===o,d="weather"===o||"time_weather"===o;let c=a.s6;if(d){const o=(e.weather_entity||"").trim(),l=o?this.resolveEntity(o)||o:"",d=l?null===(t=null==n?void 0:n.states)||void 0===t?void 0:t[l]:void 0;if(d){const e=String(d.state||""),t=null===(r=d.attributes)||void 0===r?void 0:r.temperature,o=String((null===(i=d.attributes)||void 0===i?void 0:i.temperature_unit)||"°"),l=n.localize&&n.localize(`component.weather.entity_component._.state.${e}`)||e;c=a.qy`<span class="uc-calendar-header-weather" title=${l}>
          <ha-icon icon=${E[e]||"mdi:weather-cloudy"}></ha-icon>
          ${"number"==typeof t?a.qy`<span>${Math.round(t)}${o.startsWith("°")?"°":` ${o}`}</span>`:a.s6}
        </span>`}}return l&&this._ensureClockTick(),l||c!==a.s6?a.qy`<div class="uc-calendar-header-info">
      ${l?a.qy`<span class="uc-calendar-header-time">${this.formatTime(new Date,e)}</span>`:a.s6}
      ${c}
    </div>`:a.s6}_ensureClockTick(){this._clockLastUse=Date.now(),this._clockTimer||(this._clockTimer=setInterval(()=>{if(Date.now()-this._clockLastUse>12e4)return this._clockTimer&&clearInterval(this._clockTimer),void(this._clockTimer=null);this.triggerPreviewUpdate(!1,!0)},3e4))}_writableCalendars(e,n){return n.filter(n=>{var t,a,r;return!!(1&Number((null===(r=null===(a=null===(t=null==e?void 0:e.states)||void 0===t?void 0:t[n.entity])||void 0===a?void 0:a.attributes)||void 0===r?void 0:r.supported_features)||0))})}_editFeatures(e,n,t){var a,r,i,o;if(!(null===(a=null==e?void 0:e.raw)||void 0===a?void 0:a.uid))return null;const l=t.find(n=>n.id===e.calendarId);if(!(null==l?void 0:l.entity))return null;const d=Number((null===(o=null===(i=null===(r=null==n?void 0:n.states)||void 0===r?void 0:r[l.entity])||void 0===i?void 0:i.attributes)||void 0===o?void 0:o.supported_features)||0),c=!!(4&d),s=!!(2&d);return c||s?{entity:l.entity,canUpdate:c,canDelete:s}:null}_openEditForm(e,n,t,a){const r=this._editFeatures(e,t,a);if(!r)return!1;const i=this._stateFor(n.id),o=e.raw;let l=new Date(e.end);return e.isAllDay&&(l.setDate(l.getDate()-1),l<e.start&&(l=new Date(e.start))),i.form={calendar:r.entity,summary:o.summary||"",allDay:e.isAllDay,startDate:z(e.start),startTime:U(e.start),endDate:z(l),endTime:U(l),location:o.location||"",description:o.description||"",saving:!1,error:"",edit:{uid:o.uid,recurrenceId:o.recurrence_id||void 0,rrule:o.rrule||void 0,canUpdate:r.canUpdate,canDelete:r.canDelete,range:"",confirmDelete:!1}},i.selectedDateKey=void 0,this._syncDayPopupPortal(n.id,null),this.triggerPreviewUpdate(!0),!0}async _deleteEvent(e,n){var t;const a=e.form,r=null==a?void 0:a.edit;if(a&&r&&!a.saving){a.saving=!0,a.error="",this.triggerPreviewUpdate(!0);try{const i={type:"calendar/event/delete",entity_id:a.calendar,uid:r.uid};r.recurrenceId&&(i.recurrence_id=r.recurrenceId,i.recurrence_range=r.range),await n.callWS(i),e.form=null,null===(t=this._calendarService)||void 0===t||t.clearCache(),this._fetches.clear()}catch(e){a.saving=!1,r.confirmDelete=!1,a.error=String((null==e?void 0:e.message)||e||"Error")}this.triggerPreviewUpdate(!0)}}_renderToolbar(e,n,t,i,o,l,d,c){const s=S.includes(o),p=s&&!1!==e.show_navigation,u=e.show_view_switcher?this._switcherViews(e):[],h=!!e.show_add_event&&this._writableCalendars(n,t).length>0,v=this._renderHeaderInfo(e,n);if(!s&&u.length<2&&!h&&v===a.s6)return a.s6;const _=new Date,m=_>=d.start&&_<d.end,g={month:{label:(0,r.kg)("editor.calendar.view_month",c,"Month"),icon:"mdi:calendar-month"},week:{label:(0,r.kg)("editor.calendar.view_week",c,"Week"),icon:"mdi:calendar-week"},day:{label:(0,r.kg)("editor.calendar.view_day",c,"Day"),icon:"mdi:calendar-today"},compact_list:{label:(0,r.kg)("editor.calendar.view_list",c,"List"),icon:"mdi:format-list-bulleted"},table:{label:(0,r.kg)("editor.calendar.view_table",c,"Table"),icon:"mdi:table"},grid:{label:(0,r.kg)("editor.calendar.view_grid",c,"Grid"),icon:"mdi:view-grid"}};return a.qy`
      <div class="uc-calendar-toolbar-wrap" @pointerdown=${e=>e.stopPropagation()}>
      <div class="uc-calendar-toolbar">
        <div class="uc-calendar-toolbar-side uc-calendar-toolbar-start">
          ${u.length>1?a.qy`
                <div class="uc-calendar-switcher" role="tablist">
                  ${u.map(n=>a.qy`
                      <button
                        class="uc-calendar-switch-btn ${n===o?"active":""}"
                        role="tab"
                        aria-selected=${n===o?"true":"false"}
                        title=${g[n].label}
                        @click=${t=>{t.stopPropagation(),i.view=n,i.baseView=e.view_type||"compact_list",i.selectedDateKey=void 0,this._saveUiState(e.id,i),this.triggerPreviewUpdate(!0)}}
                      >
                        ${g[n].label}
                      </button>
                    `)}
                </div>
              `:a.s6}
        </div>
        ${s?a.qy`
              <div class="uc-calendar-toolbar-center">
                ${p?a.qy`<button
                      class="uc-calendar-icon-btn"
                      title=${(0,r.kg)("editor.calendar.previous",c,"Previous")}
                      aria-label=${(0,r.kg)("editor.calendar.previous",c,"Previous")}
                      @click=${n=>{n.stopPropagation(),this._step(e,i,o,-1)}}
                    >
                      <ha-icon icon="mdi:chevron-left"></ha-icon>
                    </button>`:a.s6}
                <span class="uc-calendar-month-name uc-calendar-toolbar-title">
                  ${this._viewTitle(o,l,d,c)}
                </span>
                ${p?a.qy`<button
                      class="uc-calendar-icon-btn"
                      title=${(0,r.kg)("editor.calendar.next",c,"Next")}
                      aria-label=${(0,r.kg)("editor.calendar.next",c,"Next")}
                      @click=${n=>{n.stopPropagation(),this._step(e,i,o,1)}}
                    >
                      <ha-icon icon="mdi:chevron-right"></ha-icon>
                    </button>`:a.s6}
              </div>
            `:a.qy`<div class="uc-calendar-toolbar-center"></div>`}
        <div class="uc-calendar-toolbar-side uc-calendar-toolbar-end">
          ${v}
          ${p&&!m?a.qy`<button
                class="uc-calendar-pill-btn"
                @click=${e=>{e.stopPropagation(),i.anchor=null,i.selectedDateKey=void 0,this.triggerPreviewUpdate(!0)}}
              >
                ${(0,r.kg)("editor.calendar.today",c,"Today")}
              </button>`:a.s6}
          ${h?a.qy`<button
                class="uc-calendar-icon-btn uc-calendar-add-btn"
                title=${(0,r.kg)("editor.calendar.add_event",c,"Add event")}
                aria-label=${(0,r.kg)("editor.calendar.add_event",c,"Add event")}
                @click=${a=>{a.stopPropagation(),this._openAddForm(e,n,t,i)}}
              >
                <ha-icon icon="mdi:plus"></ha-icon>
              </button>`:a.s6}
        </div>
      </div>
      </div>
    `}_filterGroups(e,n,t,a){var i,o,l;if("person"===e.calendar_filter_group){const e=new Map;for(const d of t){const t=(d.person||"").trim(),c=t?this.resolveEntity(t)||t:"",s=c?`person:${c}`:"person:__none";let p=e.get(s);if(!p){const t=c?null===(i=null==n?void 0:n.states)||void 0===i?void 0:i[c]:void 0;p={key:s,label:c?String((null===(o=null==t?void 0:t.attributes)||void 0===o?void 0:o.friendly_name)||c.replace(/^person\./,"").replace(/_/g," ")):(0,r.kg)("editor.calendar.filter_shared",a,"Shared"),color:d.color||"#03a9f4",picture:(null===(l=null==t?void 0:t.attributes)||void 0===l?void 0:l.entity_picture)||void 0,calendarIds:[]},e.set(s,p)}p.calendarIds.push(d.id)}return[...e.values()].sort((e,n)=>"person:__none"===e.key?1:"person:__none"===n.key?-1:0)}return t.map(e=>{var t,a,r;return{key:`cal:${e.id}`,label:e.name||String((null===(r=null===(a=null===(t=null==n?void 0:n.states)||void 0===t?void 0:t[e.entity])||void 0===a?void 0:a.attributes)||void 0===r?void 0:r.friendly_name)||"")||e.entity.replace(/^calendar\./,"").replace(/_/g," "),color:e.color||"#03a9f4",calendarIds:[e.id]}})}_hiddenCalendarIds(e,n,t){const a=new Set;if(!e.show_calendar_filter||0===t.hidden.size)return a;for(const r of this._filterGroups(e,this._hass,n,"en"))t.hidden.has(r.key)&&r.calendarIds.forEach(e=>a.add(e));return a}_renderFilterChips(e,n,t,r,i){if(!e.show_calendar_filter||r.form)return a.s6;const o=this._filterGroups(e,n,t,i);return o.length<2?a.s6:a.qy`
      <div class="uc-calendar-filter" @pointerdown=${e=>e.stopPropagation()}>
        ${o.map(n=>{const t=r.hidden.has(n.key);return a.qy`
            <button
              class="uc-calendar-chip ${t?"off":""}"
              style="--uc-cal-chip: ${n.color};"
              aria-pressed=${t?"false":"true"}
              @click=${a=>{a.stopPropagation(),t?r.hidden.delete(n.key):r.hidden.add(n.key),this._saveUiState(e.id,r),this.triggerPreviewUpdate(!0)}}
            >
              ${n.picture?a.qy`<img class="uc-calendar-chip-avatar" src=${n.picture} alt="" />`:a.qy`<span class="uc-calendar-chip-dot"></span>`}
              <span>${n.label}</span>
            </button>
          `})}
      </div>
    `}_openAddForm(e,n,t,a){var r;const i=this._writableCalendars(n,t),o=a.selectedDateKey?new Date(`${a.selectedDateKey}T00:00:00`):new Date(a.anchor||new Date),l=new Date,d=new Date(o);c.isSameDay(o,l)?d.setHours(l.getHours()+1,0,0,0):d.setHours(9,0,0,0);const s=new Date(d.getTime()+36e5);a.form={calendar:(null===(r=i[0])||void 0===r?void 0:r.entity)||"",summary:"",allDay:!1,startDate:z(d),startTime:U(d),endDate:z(s),endTime:U(s),location:"",description:"",saving:!1,error:""},this.triggerPreviewUpdate(!0)}async _saveEvent(e,n,t,a){var i;const o=t.form;if(!o||o.saving)return;if(o.error="",!o.summary.trim())return o.error=(0,r.kg)("editor.calendar.error_title_required",a,"Enter a title."),void this.triggerPreviewUpdate(!0);if(!o.calendar)return o.error=(0,r.kg)("editor.calendar.error_no_writable",a,"None of these calendars can take new events."),void this.triggerPreviewUpdate(!0);const l={summary:o.summary.trim()};if(o.allDay){const e=new Date(`${o.startDate}T00:00:00`),n=new Date(`${o.endDate||o.startDate}T00:00:00`);if(Number.isNaN(e.getTime())||Number.isNaN(n.getTime())||n<e)return o.error=(0,r.kg)("editor.calendar.error_end_before_start",a,"The end must be after the start."),void this.triggerPreviewUpdate(!0);const t=new Date(n);t.setDate(t.getDate()+1),l.start_date=z(e),l.end_date=z(t)}else{const e=new Date(`${o.startDate}T${o.startTime||"00:00"}:00`),n=new Date(`${o.endDate||o.startDate}T${o.endTime||"00:00"}:00`);if(Number.isNaN(e.getTime())||Number.isNaN(n.getTime())||n<=e)return o.error=(0,r.kg)("editor.calendar.error_end_before_start",a,"The end must be after the start."),void this.triggerPreviewUpdate(!0);l.start_date_time=`${z(e)} ${U(e)}:00`,l.end_date_time=`${z(n)} ${U(n)}:00`}o.location.trim()&&(l.location=o.location.trim()),o.description.trim()&&(l.description=o.description.trim()),o.saving=!0,this.triggerPreviewUpdate(!0);try{o.edit?await n.callWS(this._updateMessage(o,o.edit,l)):await n.callService("calendar","create_event",l,{entity_id:o.calendar}),t.form=null,null===(i=this._calendarService)||void 0===i||i.clearCache(),this._fetches.clear()}catch(e){o.saving=!1,o.error=String((null==e?void 0:e.message)||e||"Error")}this.triggerPreviewUpdate(!0)}_updateMessage(e,n,t){const a={summary:t.summary,dtstart:e.allDay?t.start_date:A(String(t.start_date_time)),dtend:e.allDay?t.end_date:A(String(t.end_date_time)),location:e.location.trim(),description:e.description.trim()};!n.rrule||n.recurrenceId&&""===n.range||(a.rrule=n.rrule);const r={type:"calendar/event/update",entity_id:e.calendar,uid:n.uid,event:a};return n.recurrenceId&&(r.recurrence_id=n.recurrenceId,r.recurrence_range=n.range),r}_renderAddForm(e,n,t,i,o){const l=i.form;if(!l)return a.qy``;const d=this._writableCalendars(n,t),c=(e,n)=>(0,r.kg)(`editor.calendar.${e}`,o,n),s=e=>e.stopPropagation(),p=e=>n=>{l[e]=n.target.value},u=e=>{var t,a,r;return e.name||String((null===(r=null===(a=null===(t=null==n?void 0:n.states)||void 0===t?void 0:t[e.entity])||void 0===a?void 0:a.attributes)||void 0===r?void 0:r.friendly_name)||e.entity)},h=l.edit,v=!!h&&!h.canUpdate,_=h?t.find(e=>e.entity===l.calendar):void 0;return a.qy`
      <form
        class="uc-calendar-form"
        data-uc-role="pane"
        @click=${s}
        @pointerdown=${s}
        @keydown=${s}
        @submit=${t=>{t.preventDefault(),this._saveEvent(e,n,i,o)}}
      >
        <div class="uc-calendar-form-title">
          ${h?c("edit_event","Edit event"):c("add_event","Add event")}
        </div>
        ${h&&_?a.qy`<div class="uc-calendar-form-calname">
              <span class="uc-calendar-details-dot" style="background: ${_.color||"#03a9f4"};"></span>
              ${u(_)}
            </div>`:a.s6}
        ${(null==h?void 0:h.recurrenceId)?a.qy`<label class="uc-calendar-form-field">
              <span>${c("edit_repeat_scope","Repeating event: apply to")}</span>
              <select
                .value=${h.range}
                @change=${e=>{h.range="THISANDFUTURE"===e.target.value?"THISANDFUTURE":""}}
              >
                <option value="" ?selected=${""===h.range}>${c("edit_scope_this","Only this event")}</option>
                <option value="THISANDFUTURE" ?selected=${"THISANDFUTURE"===h.range}>
                  ${c("edit_scope_future","This and following events")}
                </option>
              </select>
            </label>`:a.s6}
        <fieldset class="uc-calendar-form-fields" ?disabled=${v}>
        ${!h&&d.length>1?a.qy`<label class="uc-calendar-form-field">
              <span>${c("form_calendar","Calendar")}</span>
              <select
                .value=${l.calendar}
                @change=${e=>{l.calendar=e.target.value}}
              >
                ${d.map(e=>a.qy`<option value=${e.entity} ?selected=${e.entity===l.calendar}>${u(e)}</option>`)}
              </select>
            </label>`:a.s6}
        <label class="uc-calendar-form-field">
          <span>${c("form_title","Title")}</span>
          <input type="text" .value=${l.summary} @input=${p("summary")} required />
        </label>
        <label class="uc-calendar-form-check">
          <input
            type="checkbox"
            .checked=${l.allDay}
            @change=${e=>{l.allDay=e.target.checked,this.triggerPreviewUpdate(!0)}}
          />
          <span>${c("all_day","All day")}</span>
        </label>
        <div class="uc-calendar-form-row">
          <label class="uc-calendar-form-field">
            <span>${c("form_start","Start")}</span>
            <input type="date" .value=${l.startDate} @input=${p("startDate")} @change=${e=>{const n=l.startDate;p("startDate")(e),(!l.endDate||l.endDate<l.startDate||l.endDate===n)&&(l.endDate=l.startDate,this.triggerPreviewUpdate(!0))}} />
          </label>
          ${l.allDay?a.s6:a.qy`<label class="uc-calendar-form-field">
                <span>&nbsp;</span>
                <input type="time" .value=${l.startTime} @input=${p("startTime")} />
              </label>`}
        </div>
        <div class="uc-calendar-form-row">
          <label class="uc-calendar-form-field">
            <span>${c("form_end","End")}</span>
            <input type="date" .value=${l.endDate} @input=${p("endDate")} />
          </label>
          ${l.allDay?a.s6:a.qy`<label class="uc-calendar-form-field">
                <span>&nbsp;</span>
                <input type="time" .value=${l.endTime} @input=${p("endTime")} />
              </label>`}
        </div>
        <label class="uc-calendar-form-field">
          <span>${c("form_location","Location")}</span>
          <input type="text" .value=${l.location} @input=${p("location")} />
        </label>
        <label class="uc-calendar-form-field">
          <span>${c("form_description","Description")}</span>
          <textarea rows="2" .value=${l.description} @input=${p("description")}></textarea>
        </label>
        </fieldset>
        ${v?a.qy`<div class="uc-calendar-form-note">
              ${c("edit_delete_only","This calendar can delete events but not change them.")}
            </div>`:a.s6}
        ${l.error?a.qy`<div class="uc-calendar-form-error">${l.error}</div>`:a.s6}
        ${(null==h?void 0:h.confirmDelete)?a.qy`<div class="uc-calendar-form-actions confirm">
              <span class="uc-calendar-form-confirm-text">
                ${h.recurrenceId&&"THISANDFUTURE"===h.range?c("delete_confirm_future","Delete this and the following events?"):c("delete_confirm","Delete this event?")}
              </span>
              <button
                type="button"
                class="uc-calendar-pill-btn"
                @click=${e=>{e.stopPropagation(),h.confirmDelete=!1,this.triggerPreviewUpdate(!0)}}
              >
                ${c("cancel","Cancel")}
              </button>
              <button
                type="button"
                class="uc-calendar-pill-btn danger"
                ?disabled=${l.saving}
                @click=${e=>{e.stopPropagation(),this._deleteEvent(i,n)}}
              >
                ${l.saving?c("deleting","Deleting…"):c("delete","Delete")}
              </button>
            </div>`:a.qy`<div class="uc-calendar-form-actions">
              ${(null==h?void 0:h.canDelete)?a.qy`<button
                    type="button"
                    class="uc-calendar-pill-btn danger start"
                    ?disabled=${l.saving}
                    @click=${e=>{e.stopPropagation(),h.confirmDelete=!0,this.triggerPreviewUpdate(!0)}}
                  >
                    ${c("delete","Delete")}
                  </button>`:a.s6}
              <button
                type="button"
                class="uc-calendar-pill-btn"
                @click=${e=>{e.stopPropagation(),i.form=null,this.triggerPreviewUpdate(!0)}}
              >
                ${c("cancel","Cancel")}
              </button>
              ${v?a.s6:a.qy`<button type="submit" class="uc-calendar-pill-btn primary" ?disabled=${l.saving}>
                    ${l.saving?c("saving","Saving…"):c("save","Save")}
                  </button>`}
            </div>`}
      </form>
    `}_stateFor(e){let n=this._states.get(e);return n||(n={expanded:!1,view:null,baseView:null,anchor:null,selectedDateKey:void 0,hidden:new Set,form:null,restored:!1},this._states.set(e,n)),n}_effectiveModule(e,n){var t;if(!e.event_display_per_view)return e;const a=null===(t=e.view_event_display)||void 0===t?void 0:t[n];if(!a)return e;const r=Object.assign({},e);for(const e of F)void 0!==a[e]&&(r[e]=a[e]);return r}_applyEventRules(e,n){const t=(e.event_rules||[]).filter(e=>(e.match||"").trim());if(!t.length||!n.length)return n;const a=JSON.stringify(t),r=this._ruleCache.get(n);if(r&&r.key===a)return r.result;const i=n.map(e=>{var n;const a=(e.summary||"").trim().toLowerCase(),r=t.find(e=>{const n=e.match.trim().toLowerCase();return"exact"===e.match_mode?a===n:a.includes(n)});return r?Object.assign(Object.assign({},e),{summary:(null===(n=r.rename)||void 0===n?void 0:n.trim())?r.rename.trim():e.summary,calendarColor:r.color?q(r.color):e.calendarColor,icon:r.icon||e.icon}):e});return this._ruleCache.set(n,{key:a,result:i}),i}_resolvedCalendars(e,n){return(e.calendars||[]).map(e=>{const t=(e.entity||"").trim(),a=t?this.resolveEntity(t,n)||t:"";return Object.assign(Object.assign({},e),{entity:a})}).filter(e=>""!==e.entity&&!1!==e.visible)}renderCalendarView(e,n=!0){if(e.loading&&n)return this.renderLoadingState();if(e.error)return this.renderErrorState(e.error);switch(e.module.view_type||"compact_list"){case"compact_list":default:return function(e){const{module:n,events:t,expanded:r,onEventClick:i,onExpandToggle:o,formatTime:l,scrollState:d,onScrollUp:u,onScrollDown:v,scrollContainerId:_}=e;if(0===t.length)return m("No upcoming events");const w=c.groupByDay(t),x=Array.from(w.entries()).sort(([e],[n])=>new Date(e).getTime()-new Date(n).getTime()),$=n.compact_hide_empty_days?x.filter(([,e])=>e.length>0):x,k=n.compact_auto_fit_height&&n.compact_height,D=k?1/0:n.compact_events_to_show||5;let S=0,T=!1;const F=[];for(const[e,t]of $){if(!r&&!k&&S>=D){T=!0;break}const a=!1!==n.compact_show_all_day_events?t:t.filter(e=>!e.isAllDay),i=r||k?a:a.slice(0,D-S);(i.length>0||!n.compact_hide_empty_days)&&(F.push({dateKey:e,events:i}),S+=i.length),!k&&a.length>i.length&&(T=!0)}const C=k?`height: ${n.compact_height}; overflow-y: ${n.compact_overflow||"scroll"};`:"",q=k&&"hidden"===n.compact_overflow&&n.compact_show_nav_buttons;return a.qy`
    <div class="uc-calendar-compact-wrapper ${q?"with-nav-buttons":""}">
      ${q&&(null==d?void 0:d.canScrollUp)?a.qy`
            <button 
              class="uc-calendar-nav-btn uc-calendar-nav-up" 
              @click=${u}
              aria-label="Scroll up"
            >
              <ha-icon icon="mdi:chevron-up"></ha-icon>
            </button>
          `:""}
      
      <div 
        class="uc-calendar-compact ${k?"auto-fit-height":""}" 
        style="${C}"
        data-calendar-scroll-container="${_||""}"
      >
        ${F.map(({dateKey:t,events:r})=>{const o=new Date(t+"T00:00:00"),d=c.isToday(o);return a.qy`
            <div class="uc-calendar-day-row ${d?"today":""}">
              <div class="uc-calendar-date-col">
                <span class="uc-calendar-weekday">
                  ${o.toLocaleDateString(n.language||void 0,{weekday:"short"})}
                </span>
                <span class="uc-calendar-day-num">${o.getDate()}</span>
                ${n.show_month?a.qy`
                      <span class="uc-calendar-month">
                        ${o.toLocaleDateString(n.language||void 0,{month:"short"})}
                      </span>
                    `:""}
                ${h(e,o,"cell")}
              </div>
              <div class="uc-calendar-events-col">
                ${r.length>0?r.map(e=>function(e,n,t,r){const i=(n.event_background_opacity||0)/100,o=i>0?`rgba(${g(e.calendarColor)}, ${i})`:"transparent";return a.qy`
    <div
      class="uc-calendar-event"
      style="background: ${o};"
      @click=${()=>r(e)}
    >
      <div
        class="uc-calendar-event-accent"
        style="background: ${e.calendarColor};"
      ></div>
      <div class="uc-calendar-event-content">
        <div class="uc-calendar-event-title">
          ${p(e)}${n.max_event_title_length&&n.max_event_title_length>0?y(e.summary,n.max_event_title_length):e.summary}
        </div>
        
        ${!1!==n.show_event_time?a.qy`
              <div class="uc-calendar-event-time">
                ${!1!==n.show_event_icon?a.qy`<ha-icon icon="mdi:clock-outline"></ha-icon>`:""}
                ${e.isAllDay?"All day":!1!==n.show_end_time?`${t(e.start)} - ${t(e.end)}`:t(e.start)}
              </div>
            `:""}
        
        ${s(n)&&e.location?a.qy`
              <div class="uc-calendar-event-location">
                <ha-icon icon="mdi:map-marker"></ha-icon>
                ${f(n,e.location,n.remove_location_country?b(e.location):e.location)}
              </div>
            `:""}
        
        ${n.show_event_description&&e.description?a.qy`
              <div class="uc-calendar-event-description">
                ${e.description}
              </div>
            `:""}
      </div>
    </div>
  `}(e,n,l,i)):a.qy`<div class="uc-calendar-no-events-day">No events</div>`}
              </div>
            </div>
          `})}
        
        ${!k&&n.tap_action_expand&&T?a.qy`
              <button class="uc-calendar-expand-btn" @click=${o}>
                <ha-icon icon="${r?"mdi:chevron-up":"mdi:chevron-down"}"></ha-icon>
                ${r?"Show less":"Show more"}
              </button>
            `:""}
      </div>

      ${q&&(null==d?void 0:d.canScrollDown)?a.qy`
            <button 
              class="uc-calendar-nav-btn uc-calendar-nav-down" 
              @click=${v}
              aria-label="Scroll down"
            >
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
          `:""}
    </div>
  `}(e);case"month":return function(e){var n;const{module:t,events:r,hass:i}=e,o=(u(e),e.anchorDate||new Date),l=c.getMonthDays(o.getFullYear(),o.getMonth(),t.first_day_of_week||"sunday"),d=function(e,n){const t=[],a=new Date(2024,0,7),r="monday"===e?1:"saturday"===e?6:0;for(let e=0;e<7;e++){const i=new Date(a);i.setDate(i.getDate()+r+e),t.push(i.toLocaleDateString(n,{weekday:"short"}))}return t}(t.first_day_of_week||"sunday",t.language||(null===(n=null==i?void 0:i.locale)||void 0===n?void 0:n.language)),s="titles"===t.month_event_display,v=!1!==t.month_show_day_details,m="popup"===t.month_day_details_mode,g=v?e.selectedDateKey:void 0,w=g?l.find(e=>c.getDateKey(e.date)===g):void 0,y=!1!==t.month_show_event_count,f=!1!==t.show_event_time,b="wrap"===t.month_title_fit;return a.qy`
    <div class="uc-calendar-month-view">
      <!-- Weekday Headers -->
      <div class="uc-calendar-month-header ${t.show_week_numbers&&"none"!==t.show_week_numbers?"with-week-numbers":""}">
        ${t.show_week_numbers&&"none"!==t.show_week_numbers?a.qy`<div class="uc-calendar-weekday-header uc-calendar-week-num-header"></div>`:""}
        ${d.map(e=>a.qy`<div class="uc-calendar-weekday-header">${e}</div>`)}
      </div>

      <!-- Calendar Grid -->
      <div class="uc-calendar-month-grid ${t.show_week_numbers&&"none"!==t.show_week_numbers?"with-week-numbers":""}">
        ${l.map((n,i)=>{const o=c.getEventsForDate(r,n.date),l=c.isToday(n.date),d=c.getDateKey(n.date),u=t.show_week_numbers&&"none"!==t.show_week_numbers&&i%7==0;return a.qy`
            ${u?a.qy`
                  <div class="uc-calendar-week-number">
                    ${c.getWeekNumber(n.date,"iso"===t.show_week_numbers?"monday":"sunday")}
                  </div>
                `:""}
            <div
              class="uc-calendar-day-cell ${l?"today":""} ${n.currentMonth?"":"other-month"} ${g===d?"selected":""} ${s?"with-titles":""} ${s&&b?"wrap-titles":""}"
              data-uc-role="pane"
              @click=${t=>{t.stopPropagation(),v&&e.onDaySelect?e.onDaySelect(n.date):o[0]&&e.onEventClick(o[0])}}
            >
              <div class="uc-calendar-day-cell-top">
                <div class="uc-calendar-day-cell-numwrap">
                  <div class="uc-calendar-day-cell-num">${n.date.getDate()}</div>
                  ${s&&y&&o.length>0?a.qy`<span class="uc-calendar-day-cell-count">${o.length}</span>`:a.s6}
                </div>
                ${h(e,n.date,"cell")}
              </div>
              ${o.length>0?s?a.qy`
                      <div class="uc-calendar-day-cell-titles">
                        ${o.slice(0,3).map(n=>a.qy`
                            <div
                              class="uc-calendar-day-cell-title ${n.isAllDay?"all-day":""}"
                              style="--uc-cal-ev: ${n.calendarColor};"
                              title="${n.summary}"
                            >
                              ${n.isAllDay||!f?a.s6:a.qy`<span class="uc-calendar-day-cell-time">${e.formatTime(n.start)}</span>`}
                              ${p(n)}<span class="uc-calendar-day-cell-name">${n.summary}</span>
                            </div>
                          `)}
                        ${o.length>3?a.qy`<span class="uc-calendar-day-cell-more">+${o.length-3}</span>`:""}
                      </div>
                    `:a.qy`
                      <div class="uc-calendar-day-cell-events">
                        ${y?o.slice(0,3).map(e=>a.qy`
                                <div
                                  class="uc-calendar-day-cell-dot"
                                  style="background: ${e.calendarColor};"
                                  title="${e.summary}"
                                ></div>
                              `):""}
                        ${o.length>3?a.qy`<span class="uc-calendar-day-cell-more">+${o.length-3}</span>`:""}
                      </div>
                    `:""}
            </div>
          `})}
      </div>

      ${w&&!m?a.qy`<div class="uc-calendar-details" data-uc-role="pane">
            ${_(e,w.date)}
          </div>`:a.s6}
    </div>
  `}(e);case"week":return function(e){var n,t;const{module:i,events:o,hass:l,formatTime:d}=e,s=u(e),_=c.getWeekDays(e.anchorDate||new Date,i.first_day_of_week||"sunday"),m=null!==(n=i.week_start_hour)&&void 0!==n?n:0,y=null!==(t=i.week_end_hour)&&void 0!==t?t:24,f=i.week_time_interval||60,b=[];for(let e=m;e<y;e++)for(let n=0;n<60;n+=f){const t=new Date;t.setHours(e,n,0,0),b.push(t)}return a.qy`
    <div class="uc-calendar-week-view">
      <!-- Week Header -->
      <div class="uc-calendar-week-header" data-uc-role="pane">
        <div class="uc-calendar-week-time-col"></div>
        ${_.map(n=>{var t;const r=c.isToday(n);return a.qy`
            <div
              class="uc-calendar-week-day-header ${r?"today":""} ${e.onDayOpen?"clickable":""}"
              @click=${t=>{e.onDayOpen&&(t.stopPropagation(),e.onDayOpen(n))}}
            >
              <span class="uc-calendar-week-day-name">
                ${n.toLocaleDateString(i.language||(null===(t=null==l?void 0:l.locale)||void 0===t?void 0:t.language),{weekday:"short"})}
              </span>
              <span class="uc-calendar-week-day-num">${n.getDate()}</span>
              ${h(e,n,"header")}
            </div>
          `})}
      </div>

      <!-- All-day events row -->
      <div class="uc-calendar-week-allday-row">
        <div class="uc-calendar-week-time-col">
          <span class="uc-calendar-time-label">${(0,r.kg)("editor.calendar.all_day",s,"All day")}</span>
        </div>
        ${_.map(n=>{const t=c.getEventsForDate(o,n).filter(e=>e.isAllDay);return a.qy`
            <div class="uc-calendar-week-allday-cell">
              ${t.map(n=>a.qy`
                  <div
                    class="uc-calendar-week-allday-event"
                    style="background: ${n.calendarColor}; color: ${w(n.calendarColor)};"
                    title=${n.summary}
                    @click=${t=>{t.stopPropagation(),e.onEventClick(n)}}
                  >
                    ${p(n)}${n.summary}
                  </div>
                `)}
            </div>
          `})}
      </div>

      <!-- Time Grid -->
      <div class="uc-calendar-week-grid">
        ${b.map(n=>a.qy`
          <div class="uc-calendar-week-row">
            <div class="uc-calendar-week-time-col">
              <span class="uc-calendar-time-label">${d(n)}</span>
            </div>
            ${_.map(t=>{const r=new Date(t);r.setHours(n.getHours(),n.getMinutes(),0,0);const i=new Date(r);i.setMinutes(i.getMinutes()+f);const l=new Date(t);l.setHours(m,0,0,0);const d=o.filter(e=>{if(e.isAllDay)return!1;if(!(e.start<i&&e.end>r))return!1;const n=e.start>l?e.start:l;return n>=r&&n<i});return a.qy`
                <div class="uc-calendar-week-cell">
                  ${d.map(n=>a.qy`
                      <div
                        class="uc-calendar-week-event"
                        style="border-left-color: ${n.calendarColor}; background: rgba(${g(n.calendarColor)}, 0.15);"
                        title="${n.summary} · ${v(e,n)}${n.location?` · ${n.location}`:""}"
                        @click=${t=>{t.stopPropagation(),e.onEventClick(n)}}
                      >
                        <span class="uc-calendar-week-event-title">${p(n)}${n.summary}</span>
                      </div>
                    `)}
                </div>
              `})}
          </div>
        `)}
      </div>
    </div>
  `}(e);case"day":return function(e){var n,t,i;const{module:o,events:l,formatTime:d,onEventClick:v}=e,_=u(e),m=new Date(e.anchorDate||new Date);m.setHours(0,0,0,0);const b=c.getEventsForDate(l,m),$=null!==(n=o.day_start_hour)&&void 0!==n?n:0,k=null!==(t=o.day_end_hour)&&void 0!==t?t:24,D=o.day_time_interval||60,S=b.filter(e=>e.isAllDay),T=b.filter(e=>!e.isAllDay),F=[];for(let e=$;e<k;e++)for(let n=0;n<60;n+=D){const t=new Date(m);t.setHours(e,n,0,0),F.push(t)}return a.qy`
    <div class="uc-calendar-day-view">
      ${(null===(i=e.weather)||void 0===i?void 0:i.has(c.getDateKey(m)))?a.qy`<div class="uc-calendar-day-weather-row">${h(e,m,"inline")}</div>`:a.s6}

      <!-- All-day events -->
      ${S.length>0?a.qy`
            <div class="uc-calendar-day-allday">
              <div class="uc-calendar-day-allday-label">${(0,r.kg)("editor.calendar.all_day",_,"All day")}</div>
              <div class="uc-calendar-day-allday-events">
                ${S.map(e=>a.qy`
                    <div
                      class="uc-calendar-day-allday-event"
                      style="background: ${e.calendarColor}; color: ${w(e.calendarColor)};"
                      @click=${n=>{n.stopPropagation(),v(e)}}
                    >
                      ${p(e)}${e.summary}
                    </div>
                  `)}
              </div>
            </div>
          `:""}

      <!-- Time Grid -->
      <div class="uc-calendar-day-grid">
        ${F.map(e=>{const n=new Date(e),t=new Date(n);t.setMinutes(t.getMinutes()+D);const r=new Date(m);r.setHours($,0,0,0);const i=T.filter(e=>{if(!(e.start<t&&e.end>n))return!1;const a=e.start>r?e.start:r;return a>=n&&a<t});return a.qy`
            <div class="uc-calendar-day-row">
              <div class="uc-calendar-day-time-col">
                <span class="uc-calendar-time-label">${d(e)}</span>
              </div>
              <div class="uc-calendar-day-events-col">
                ${i.map(e=>a.qy`
                    <div
                      class="uc-calendar-day-event"
                      style="border-left: 3px solid ${e.calendarColor}; background: rgba(${g(e.calendarColor)}, 0.1);"
                      @click=${n=>{n.stopPropagation(),v(e)}}
                    >
                      <div class="uc-calendar-day-event-title">${p(e)}${e.summary}</div>
                      ${!1!==o.show_event_time?a.qy`<div class="uc-calendar-day-event-time">
                            ${!1!==o.show_end_time?`${d(e.start)} - ${d(e.end)}`:d(e.start)}
                          </div>`:a.s6}
                      ${o.show_event_description&&e.description?a.qy`<div class="uc-calendar-day-event-desc">${y(e.description,120)}</div>`:a.s6}
                      ${s(o)&&e.location?a.qy`
                            <div class="uc-calendar-day-event-location">
                              <ha-icon icon="mdi:map-marker"></ha-icon>
                              ${f(o,e.location,x(o,e.location))}
                            </div>
                          `:""}
                    </div>
                  `)}
              </div>
            </div>
          `})}
      </div>
    </div>
  `}(e);case"table":return function(e){const{module:n,events:t,formatTime:r,onEventClick:i}=e;return 0===t.length?m("No upcoming events"):a.qy`
    <div class="uc-calendar-table-container">
      <table class="uc-calendar-table">
        <thead>
          <tr>
            ${!1!==n.table_show_calendar_column?a.qy`<th class="uc-calendar-table-color"></th>`:""}
            ${!1!==n.table_show_date_column?a.qy`<th>Date</th>`:""}
            ${!1!==n.table_show_time_column?a.qy`<th>Time</th>`:""}
            <th>Event</th>
            ${!1!==n.table_show_location_column?a.qy`<th>Location</th>`:""}
            ${n.table_show_duration_column?a.qy`<th>Duration</th>`:""}
          </tr>
        </thead>
        <tbody>
          ${t.map(e=>a.qy`
              <tr @click=${()=>i(e)}>
                ${!1!==n.table_show_calendar_column?a.qy`
                      <td class="uc-calendar-table-color">
                        <div
                          class="uc-calendar-table-color-bar"
                          style="background: ${e.calendarColor};"
                        ></div>
                      </td>
                    `:""}
                ${!1!==n.table_show_date_column?a.qy`
                      <td>
                        ${e.start.toLocaleDateString(n.language||void 0,{weekday:"short",month:"short",day:"numeric"})}
                      </td>
                    `:""}
                ${!1!==n.table_show_time_column?a.qy`
                      <td>
                        ${e.isAllDay?"All day":!1!==n.show_end_time?`${r(e.start)} - ${r(e.end)}`:r(e.start)}
                      </td>
                    `:""}
                <td>
                  <div class="uc-calendar-table-event-title">${p(e)}${e.summary}</div>
                  ${n.show_event_description&&e.description?a.qy`<div class="uc-calendar-table-event-desc">${e.description}</div>`:""}
                </td>
                ${!1!==n.table_show_location_column?a.qy`<td>
                      ${e.location?f(n,e.location,x(n,e.location)):"-"}
                    </td>`:""}
                ${n.table_show_duration_column?a.qy`<td>${c.formatDuration(e.start,e.end)}</td>`:""}
              </tr>
            `)}
        </tbody>
      </table>
    </div>
  `}(e);case"grid":return function(e){const{module:n,events:t,formatTime:r,onEventClick:i}=e;return 0===t.length?m("No upcoming events"):a.qy`
    <div
      class="uc-calendar-grid"
      style="grid-template-columns: repeat(${n.grid_columns||2}, 1fr);"
    >
      ${t.map(e=>a.qy`
          <div
            class="uc-calendar-grid-card"
            data-uc-role="pane"
            style="border-top: 3px solid ${e.calendarColor}; ${"auto"!==n.grid_card_height?`height: ${n.grid_card_height};`:""}"
            @click=${()=>i(e)}
          >
            <div class="uc-calendar-grid-card-header">
              <div class="uc-calendar-grid-card-date">
                ${e.start.toLocaleDateString(n.language||void 0,{weekday:"short",month:"short",day:"numeric"})}
              </div>
            </div>
            <div class="uc-calendar-grid-card-body">
              <div class="uc-calendar-grid-card-title">${p(e)}${e.summary}</div>
              ${!1!==n.show_event_time?a.qy`
                    <div class="uc-calendar-grid-card-time">
                      <ha-icon icon="mdi:clock-outline"></ha-icon>
                      ${e.isAllDay?"All day":!1!==n.show_end_time?`${r(e.start)} - ${r(e.end)}`:r(e.start)}
                    </div>
                  `:""}
              ${s(n)&&e.location?a.qy`
                    <div class="uc-calendar-grid-card-location">
                      <ha-icon icon="mdi:map-marker"></ha-icon>
                      ${n.remove_location_country?b(e.location):e.location}
                    </div>
                  `:""}
              ${n.show_event_description&&e.description?a.qy`
                    <div class="uc-calendar-grid-card-desc">
                      ${y(e.description,100)}
                    </div>
                  `:""}
            </div>
            ${!1!==n.show_calendar_name?a.qy`<div
                  class="uc-calendar-grid-card-calendar"
                  style="color: ${e.calendarColor};"
                >
                  ${e.calendarName}
                </div>`:a.s6}
          </div>
        `)}
    </div>
  `}(e)}}renderLoadingState(){return a.qy`
      <div class="uc-calendar-loading">
        <div class="uc-calendar-spinner"></div>
        <span>Loading events...</span>
      </div>
    `}renderErrorState(e){return a.qy`
      <div class="uc-calendar-error">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        <span>${e}</span>
      </div>
    `}fetchEventsIfNeeded(e,n,t,a,r){const i=Date.now(),o=60*(e.refresh_interval||15)*1e3,l=S.includes(r),d=JSON.stringify([e.id,t.map(e=>[e.id,e.entity,e.color||"",e.name||""]),l?[c.getDateKey(a.start),c.getDateKey(a.end)]:e.days_to_show||7,!!e.show_past_events,l]);let s=this._fetches.get(d);if(!s)for(s={events:[],loading:!1,error:null,lastFetch:0},this._fetches.set(d,s);this._fetches.size>40;){const e=this._fetches.keys().next().value;if(void 0===e)break;this._fetches.delete(e)}if(s.loading)return s;if(s.lastFetch>0&&i-s.lastFetch<o)return s;if(0===t.length)return s.events=[],s.lastFetch=i,s;s.loading=!0,s.error=null;const p=s;return this._calendarService.fetchEvents(n,t,a.start,a.end).then(n=>{p.events=e.show_past_events||l?n:n.filter(e=>e.end>new Date),p.error=null}).catch(e=>{console.error("Calendar module: Failed to fetch events",e),p.error="Failed to load calendar events"}).finally(()=>{p.loading=!1,p.lastFetch=Date.now(),this.triggerPreviewUpdate()}),s}handleEventClick(e,n,t,a=[]){if(!e)return;if(n.allow_edit_events&&this._openEditForm(e,n,t,a))return;if(n.tap_action_expand){const e=this._stateFor(n.id);return e.expanded=!e.expanded,void this.triggerPreviewUpdate()}const r=n.event_tap_action||{action:"more-info"};if("more-info"===r.action){const n=a.find(n=>n.id===e.calendarId);(null==n?void 0:n.entity)&&o.K.handleAction(Object.assign(Object.assign({},r),{entity:n.entity}),t,void 0,void 0,n.entity)}else o.K.handleAction(r,t)}handleExpandToggle(e){const n=this._stateFor(e);n.expanded=!n.expanded,this.triggerPreviewUpdate()}findAndSetupScrollContainer(){const e=document.querySelector(`[data-calendar-scroll-container="${this._scrollContainerId}"]`);e&&e!==this._scrollContainer&&(this._scrollContainer=e,e.addEventListener("scroll",()=>this.updateScrollState()),this.updateScrollState())}updateScrollState(){if(!this._scrollContainer)return;const{scrollTop:e,scrollHeight:n,clientHeight:t}=this._scrollContainer,a=e>0,r=e+t<n-1;a===this._scrollState.canScrollUp&&r===this._scrollState.canScrollDown||(this._scrollState={canScrollUp:a,canScrollDown:r},this.triggerPreviewUpdate())}handleScrollUp(){this._scrollContainer&&(this._scrollContainer.scrollBy({top:-this._scrollAmount,behavior:"smooth"}),setTimeout(()=>this.updateScrollState(),200))}handleScrollDown(){this._scrollContainer&&(this._scrollContainer.scrollBy({top:this._scrollAmount,behavior:"smooth"}),setTimeout(()=>this.updateScrollState(),200))}formatTime(e,n){const t={hour:"numeric",minute:"2-digit",hour12:!n.time_24h};return e.toLocaleTimeString(n.language||void 0,t)}formatDate(e,n,t){var a;const r=n.language||(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",i=e.toLocaleDateString(r,{weekday:"short"}),o=e.getDate();return n.show_month?`${i} ${e.toLocaleDateString(r,{month:"short"})} ${o}`:`${i} ${o}`}getPreviewStyles(e){return`\n      .uc-calendar-container {\n        width: 100%;\n        font-family: var(--ha-card-header-font-family, inherit);\n        padding-top: 4px;\n      }\n\n      .uc-calendar-title {\n        font-weight: 600;\n        margin-bottom: 16px;\n        padding-bottom: 0;\n      }\n\n      .uc-calendar-title.with-separator {\n        padding-bottom: 12px;\n        margin-bottom: 16px;\n      }\n\n      .uc-calendar-loading {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 12px;\n        padding: 32px;\n        color: var(--secondary-text-color);\n      }\n\n      .uc-calendar-spinner {\n        width: 24px;\n        height: 24px;\n        border: 3px solid var(--divider-color);\n        border-top-color: var(--primary-color);\n        border-radius: 50%;\n        animation: uc-cal-spin 1s linear infinite;\n      }\n\n      @keyframes uc-cal-spin {\n        to { transform: rotate(360deg); }\n      }\n\n      .uc-calendar-error {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        padding: 16px;\n        background: rgba(var(--rgb-error-color, 244, 67, 54), 0.1);\n        border-radius: var(--uc-r-8, 8px);\n        color: var(--error-color);\n      }\n\n      .uc-calendar-error ha-icon {\n        --mdc-icon-size: 24px;\n      }\n\n      /* Compact List View Styles */\n      .uc-calendar-compact {\n        display: flex;\n        flex-direction: column;\n        gap: ${e.row_spacing||"8px"};\n        border: none;\n      }\n\n      /* Auto-fit to height mode */\n      .uc-calendar-compact.auto-fit-height {\n        /* Scrollbar styling */\n        scrollbar-width: thin;\n        scrollbar-color: var(--primary-color) transparent;\n        /* Ensure flex children don't shrink - they should maintain natural height */\n        flex-wrap: nowrap;\n      }\n\n      /* Day rows must not shrink when in auto-fit mode */\n      .uc-calendar-compact.auto-fit-height > .uc-calendar-day-row {\n        flex-shrink: 0;\n      }\n\n      .uc-calendar-compact.auto-fit-height::-webkit-scrollbar {\n        width: 6px;\n      }\n\n      .uc-calendar-compact.auto-fit-height::-webkit-scrollbar-track {\n        background: transparent;\n        border-radius: var(--uc-r-3, 3px);\n      }\n\n      .uc-calendar-compact.auto-fit-height::-webkit-scrollbar-thumb {\n        background: var(--primary-color);\n        border-radius: var(--uc-r-3, 3px);\n      }\n\n      .uc-calendar-compact.auto-fit-height::-webkit-scrollbar-thumb:hover {\n        background: var(--primary-color-dark, var(--primary-color));\n      }\n\n      .uc-calendar-compact > * {\n        border-top: none;\n      }\n\n      .uc-calendar-day-row {\n        display: flex;\n        gap: 16px;\n        padding-bottom: ${e.row_spacing||"8px"};\n        border: none !important;\n        border-top: none !important;\n        border-bottom: none !important;\n      }\n\n      .uc-calendar-day-row:not(:last-child) {\n        border-bottom: ${e.show_day_separator?`${e.day_separator_width||"1px"} solid ${e.day_separator_color||"var(--divider-color)"} !important`:"none !important"};\n      }\n\n      .uc-calendar-day-row:first-child {\n        border-top: none !important;\n        padding-top: 0;\n      }\n\n      .uc-calendar-date-col {\n        flex: 0 0 60px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: ${"middle"===e.date_vertical_alignment?"center":"bottom"===e.date_vertical_alignment?"flex-end":"flex-start"};\n      }\n\n      .uc-calendar-weekday {\n        font-size: ${e.weekday_font_size||"12px"};\n        color: ${e.weekday_color||"var(--secondary-text-color)"};\n        text-transform: uppercase;\n        font-weight: 500;\n      }\n\n      .uc-calendar-day-num {\n        font-size: ${e.day_font_size||"24px"};\n        color: ${e.day_color||"var(--primary-text-color)"};\n        font-weight: 600;\n        line-height: 1.2;\n      }\n\n      .uc-calendar-month {\n        font-size: ${e.month_font_size||"12px"};\n        color: ${e.month_color||"var(--secondary-text-color)"};\n        text-transform: uppercase;\n      }\n\n      .uc-calendar-events-col {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        gap: ${e.event_spacing||"4px"};\n        min-width: 0;\n      }\n\n      .uc-calendar-event {\n        display: flex;\n        align-items: flex-start;\n        gap: 12px;\n        padding: 8px;\n        border-radius: var(--uc-r-6, 6px);\n        cursor: pointer;\n        transition: background 0.2s ease;\n      }\n\n      .uc-calendar-event:hover {\n        background: rgba(var(--rgb-primary-color), 0.1);\n      }\n\n      .uc-calendar-event-accent {\n        width: ${e.vertical_line_width||"3px"};\n        min-height: 100%;\n        border-radius: var(--uc-r-2, 2px);\n        flex-shrink: 0;\n        align-self: stretch;\n      }\n\n      .uc-calendar-event-content {\n        flex: 1;\n        min-width: 0;\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n      }\n\n      .uc-calendar-event-title {\n        font-size: ${e.event_font_size||"14px"};\n        color: ${e.event_color||"var(--primary-text-color)"};\n        font-weight: 500;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .uc-calendar-event-time {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: ${e.time_font_size||"12px"};\n        color: ${e.time_color||"var(--secondary-text-color)"};\n      }\n\n      .uc-calendar-event-time ha-icon {\n        --mdc-icon-size: ${e.time_icon_size||"14px"};\n      }\n\n      .uc-calendar-event-location {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: ${e.location_font_size||"12px"};\n        color: ${e.location_color||"var(--secondary-text-color)"};\n      }\n\n      .uc-calendar-location-link {\n        color: inherit;\n        text-decoration: underline;\n        text-decoration-style: dotted;\n        text-underline-offset: 2px;\n      }\n\n      .uc-calendar-event-location ha-icon {\n        --mdc-icon-size: ${e.location_icon_size||"14px"};\n      }\n\n      .uc-calendar-event-description {\n        font-size: ${e.description_font_size||"12px"};\n        color: ${e.description_color||"var(--secondary-text-color)"};\n        white-space: pre-wrap;\n        word-break: break-word;\n      }\n\n      .uc-calendar-no-events {\n        padding: 16px;\n        text-align: center;\n        color: var(--secondary-text-color);\n        font-style: italic;\n      }\n\n      .uc-calendar-expand-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 8px;\n        padding: 8px 16px;\n        margin-top: 8px;\n        background: var(--primary-color);\n        color: var(--text-primary-color);\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        cursor: pointer;\n        font-size: 13px;\n        font-weight: 500;\n        transition: opacity 0.2s ease;\n      }\n\n      .uc-calendar-expand-btn:hover {\n        opacity: 0.9;\n      }\n\n      /* Scroll Navigation Wrapper and Buttons */\n      .uc-calendar-compact-wrapper {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n      }\n\n      .uc-calendar-compact-wrapper.with-nav-buttons {\n        /* Ensure buttons don't overlap content */\n      }\n\n      .uc-calendar-nav-btn {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 100%;\n        padding: 8px;\n        background: linear-gradient(\n          to bottom,\n          rgba(var(--rgb-primary-color, 3, 169, 244), 0.15),\n          rgba(var(--rgb-primary-color, 3, 169, 244), 0.05)\n        );\n        border: none;\n        border-radius: var(--uc-r-8, 8px);\n        cursor: pointer;\n        transition: all 0.2s ease;\n        color: var(--primary-color);\n        margin: 4px 0;\n      }\n\n      .uc-calendar-nav-up {\n        background: linear-gradient(\n          to bottom,\n          rgba(var(--rgb-primary-color, 3, 169, 244), 0.05),\n          rgba(var(--rgb-primary-color, 3, 169, 244), 0.15)\n        );\n        margin-bottom: 8px;\n      }\n\n      .uc-calendar-nav-down {\n        margin-top: 8px;\n      }\n\n      .uc-calendar-nav-btn:hover {\n        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.25);\n        transform: scale(1.01);\n      }\n\n      .uc-calendar-nav-btn:active {\n        transform: scale(0.98);\n      }\n\n      .uc-calendar-nav-btn ha-icon {\n        --mdc-icon-size: 24px;\n        transition: transform 0.2s ease;\n      }\n\n      .uc-calendar-nav-btn:hover ha-icon {\n        transform: translateY(-2px);\n      }\n\n      .uc-calendar-nav-down:hover ha-icon {\n        transform: translateY(2px);\n      }\n\n      /* Month View Styles */\n      .uc-calendar-month-view {\n        width: 100%;\n      }\n\n      .uc-calendar-month-header {\n        display: grid;\n        grid-template-columns: repeat(7, 1fr);\n        gap: 2px;\n        margin-bottom: 8px;\n      }\n\n      .uc-calendar-weekday-header {\n        text-align: center;\n        font-size: 12px;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        padding: 8px 4px;\n      }\n\n      .uc-calendar-month-grid {\n        display: grid;\n        grid-template-columns: repeat(7, 1fr);\n        gap: 2px;\n      }\n\n      /* Painted calendar surfaces announce data-uc-role="pane" in calendar-module-views.ts */\n      .uc-calendar-day-cell[data-uc-role="pane"],\n      .uc-calendar-day-cell {\n        min-height: 60px;\n        padding: 4px;\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border-radius: var(--uc-r-4, 4px);\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        box-shadow: var(--uc-pane-shadow, none);\n        cursor: pointer;\n        transition: background 0.2s ease;\n      }\n\n      .uc-calendar-day-cell:hover {\n        background: rgba(var(--rgb-primary-color), 0.1);\n      }\n\n      .uc-calendar-day-cell.today {\n        border-color: var(--primary-color);\n        background: rgba(var(--rgb-primary-color), 0.1);\n      }\n\n      .uc-calendar-day-cell.other-month {\n        opacity: 0.5;\n      }\n\n      .uc-calendar-day-cell-num {\n        font-size: 14px;\n        font-weight: 500;\n        color: var(--primary-text-color);\n        margin-bottom: 4px;\n      }\n\n      .uc-calendar-day-cell-events {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 2px;\n      }\n\n      .uc-calendar-day-cell-dot {\n        width: 6px;\n        height: 6px;\n        border-radius: 50%;\n      }\n\n      /* Table View Styles */\n      .uc-calendar-table {\n        width: 100%;\n        border-collapse: collapse;\n      }\n\n      .uc-calendar-table th {\n        text-align: left;\n        padding: 12px 8px;\n        font-size: 12px;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        border-bottom: 2px solid var(--divider-color);\n        text-transform: uppercase;\n      }\n\n      .uc-calendar-table td {\n        padding: 12px 8px;\n        font-size: 14px;\n        color: var(--primary-text-color);\n        border-bottom: 1px solid var(--divider-color);\n        vertical-align: top;\n      }\n\n      .uc-calendar-table tr:hover td {\n        background: rgba(var(--rgb-primary-color), 0.05);\n      }\n\n      .uc-calendar-table-color {\n        width: 4px;\n        padding: 0 !important;\n      }\n\n      .uc-calendar-table-color-bar {\n        width: 4px;\n        height: 100%;\n        border-radius: var(--uc-r-2, 2px);\n      }\n\n      /* Grid View Styles */\n      .uc-calendar-grid {\n        display: grid;\n        grid-template-columns: repeat(${e.grid_columns||2}, 1fr);\n        gap: 12px;\n      }\n\n      .uc-calendar-grid-card {\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border-radius: var(--uc-r-8, 8px);\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        box-shadow: var(--uc-pane-shadow, none);\n        overflow: hidden;\n        cursor: pointer;\n        transition: transform 0.2s ease, box-shadow 0.2s ease;\n      }\n\n      .uc-calendar-grid-card:hover {\n        transform: translateY(-2px);\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n      }\n\n      .uc-calendar-grid-card-header {\n        padding: 12px;\n        border-bottom: 1px solid var(--divider-color);\n      }\n\n      .uc-calendar-grid-card-body {\n        padding: 12px;\n      }\n\n      .uc-calendar-grid-card-title {\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        margin-bottom: 8px;\n      }\n\n      .uc-calendar-grid-card-time {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        display: flex;\n        align-items: center;\n        gap: 6px;\n      }\n\n      /* Empty State */\n      .uc-calendar-empty {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 12px;\n        padding: 32px;\n        color: var(--secondary-text-color);\n        text-align: center;\n      }\n\n      .uc-calendar-empty ha-icon {\n        --mdc-icon-size: 48px;\n        opacity: 0.5;\n      }\n\n      .uc-calendar-no-events-day {\n        padding: 8px;\n        color: var(--secondary-text-color);\n        font-style: italic;\n        font-size: 13px;\n      }\n\n      /* Month View Additional Styles */\n      .uc-calendar-month-view-header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-bottom: 16px;\n      }\n\n      .uc-calendar-month-name {\n        font-size: 18px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        text-transform: capitalize;\n      }\n\n      .uc-calendar-month-header.with-week-numbers {\n        grid-template-columns: 40px repeat(7, 1fr);\n      }\n\n      .uc-calendar-month-grid.with-week-numbers {\n        grid-template-columns: 40px repeat(7, 1fr);\n      }\n\n      .uc-calendar-week-number {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        font-weight: 500;\n      }\n\n      .uc-calendar-week-num-header {\n        width: 40px;\n      }\n\n      .uc-calendar-day-cell-more {\n        font-size: 10px;\n        color: var(--secondary-text-color);\n        margin-left: 2px;\n      }\n\n      /* Week View Styles */\n      .uc-calendar-week-view {\n        display: flex;\n        flex-direction: column;\n        overflow-x: auto;\n      }\n\n      .uc-calendar-week-header {\n        display: grid;\n        grid-template-columns: 60px repeat(7, 1fr);\n        gap: 4px;\n        margin-bottom: 8px;\n        position: sticky;\n        top: 0;\n        background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background)));\n        border: var(--uc-pane-border, none);\n        box-shadow: var(--uc-pane-shadow, none);\n        z-index: 1;\n      }\n\n      .uc-calendar-week-time-col {\n        width: 60px;\n        text-align: right;\n        padding-right: 8px;\n      }\n\n      .uc-calendar-week-day-header {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 8px 4px;\n        border-radius: var(--uc-r-8, 8px);\n      }\n\n      .uc-calendar-week-day-header.today {\n        background: rgba(var(--rgb-primary-color), 0.15);\n      }\n\n      .uc-calendar-week-day-name {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        text-transform: uppercase;\n      }\n\n      .uc-calendar-week-day-num {\n        font-size: 18px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n\n      .uc-calendar-week-allday-row {\n        display: grid;\n        grid-template-columns: 60px repeat(7, 1fr);\n        gap: 4px;\n        margin-bottom: 8px;\n        padding-bottom: 8px;\n        border-bottom: 2px solid var(--divider-color);\n      }\n\n      .uc-calendar-week-allday-cell {\n        display: flex;\n        flex-direction: column;\n        gap: 2px;\n        min-height: 24px;\n      }\n\n      .uc-calendar-week-allday-event {\n        padding: 2px 6px;\n        border-radius: var(--uc-r-4, 4px);\n        font-size: 11px;\n        font-weight: 500;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        cursor: pointer;\n      }\n\n      .uc-calendar-week-grid {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .uc-calendar-week-row {\n        display: grid;\n        grid-template-columns: 60px repeat(7, 1fr);\n        gap: 4px;\n        min-height: 40px;\n      }\n\n      .uc-calendar-week-cell {\n        border-top: 1px solid var(--divider-color);\n        padding: 2px;\n        position: relative;\n      }\n\n      .uc-calendar-week-event {\n        padding: 2px 6px;\n        border-radius: var(--uc-r-4, 4px);\n        font-size: 11px;\n        border-left: 3px solid;\n        margin-bottom: 2px;\n        cursor: pointer;\n        overflow: hidden;\n      }\n\n      .uc-calendar-week-event-title {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      /* Day View Styles */\n      .uc-calendar-day-view {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .uc-calendar-day-header {\n        padding: 12px 0;\n        margin-bottom: 16px;\n        border-bottom: 2px solid var(--primary-color);\n      }\n\n      .uc-calendar-day-view-title {\n        font-size: 18px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n\n      .uc-calendar-day-allday {\n        display: flex;\n        gap: 12px;\n        padding: 12px;\n        background: rgba(var(--rgb-primary-color), 0.05);\n        border-radius: var(--uc-r-8, 8px);\n        margin-bottom: 16px;\n      }\n\n      .uc-calendar-day-allday-label {\n        flex: 0 0 60px;\n        font-size: 12px;\n        font-weight: 600;\n        color: var(--secondary-text-color);\n        text-transform: uppercase;\n      }\n\n      .uc-calendar-day-allday-events {\n        flex: 1;\n        display: flex;\n        flex-wrap: wrap;\n        gap: 8px;\n      }\n\n      .uc-calendar-day-allday-event {\n        padding: 6px 12px;\n        border-radius: var(--uc-r-6, 6px);\n        font-size: 13px;\n        font-weight: 500;\n        cursor: pointer;\n      }\n\n      .uc-calendar-day-grid {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .uc-calendar-day-row {\n        display: flex;\n        min-height: 48px;\n        border-top: 1px solid var(--divider-color);\n      }\n\n      .uc-calendar-day-time-col {\n        flex: 0 0 60px;\n        padding-right: 12px;\n        text-align: right;\n      }\n\n      .uc-calendar-day-events-col {\n        flex: 1;\n        padding: 4px 0;\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n      }\n\n      .uc-calendar-day-event {\n        padding: 8px 12px;\n        border-radius: var(--uc-r-6, 6px);\n        cursor: pointer;\n        transition: transform 0.2s ease;\n      }\n\n      .uc-calendar-day-event:hover {\n        transform: translateX(4px);\n      }\n\n      .uc-calendar-day-event-title {\n        font-size: 14px;\n        font-weight: 500;\n        color: var(--primary-text-color);\n        margin-bottom: 4px;\n      }\n\n      .uc-calendar-day-event-time {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n      }\n\n      .uc-calendar-day-event-location {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-top: 4px;\n      }\n\n      .uc-calendar-day-event-location ha-icon {\n        --mdc-icon-size: 14px;\n      }\n\n      /* Table View Additional Styles */\n      .uc-calendar-table-container {\n        overflow-x: auto;\n      }\n\n      .uc-calendar-table-event-title {\n        font-weight: 500;\n        color: var(--primary-text-color);\n      }\n\n      .uc-calendar-table-event-desc {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-top: 4px;\n      }\n\n      .uc-calendar-table tr {\n        cursor: pointer;\n      }\n\n      /* Grid View Additional Styles */\n      .uc-calendar-grid-card-date {\n        font-size: 12px;\n        font-weight: 500;\n        color: var(--secondary-text-color);\n        text-transform: uppercase;\n      }\n\n      .uc-calendar-grid-card-location {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-top: 4px;\n      }\n\n      .uc-calendar-grid-card-location ha-icon {\n        --mdc-icon-size: 14px;\n      }\n\n      .uc-calendar-grid-card-desc {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-top: 8px;\n        line-height: 1.4;\n      }\n\n      .uc-calendar-grid-card-calendar {\n        padding: 8px 12px;\n        font-size: 11px;\n        font-weight: 600;\n        text-transform: uppercase;\n        border-top: 1px solid var(--divider-color);\n      }\n\n      .uc-calendar-grid-card-time ha-icon {\n        --mdc-icon-size: 14px;\n      }\n\n      /* Header toolbar: view switcher | ‹ title › | today + add */\n      .uc-calendar-toolbar-wrap {\n        container: uc-calendar / inline-size;\n        width: 100%;\n      }\n\n      .uc-calendar-toolbar {\n        display: grid;\n        grid-template-columns: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);\n        align-items: center;\n        gap: 8px;\n        margin-bottom: 12px;\n      }\n\n      .uc-calendar-toolbar-side {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        min-width: 0;\n      }\n\n      .uc-calendar-toolbar-end {\n        justify-content: flex-end;\n      }\n\n      .uc-calendar-toolbar-center {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 4px;\n        min-width: 0;\n      }\n\n      .uc-calendar-toolbar-title {\n        text-align: center;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        padding: 0 4px;\n      }\n\n      .uc-calendar-icon-btn,\n      .uc-calendar-pill-btn,\n      .uc-calendar-switch-btn,\n      .uc-calendar-chip {\n        font: inherit;\n        color: var(--primary-text-color);\n        background: none;\n        border: none;\n        cursor: pointer;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      .uc-calendar-icon-btn {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 32px;\n        height: 32px;\n        flex: 0 0 32px;\n        border-radius: 50%;\n        transition: background 0.15s ease;\n      }\n\n      .uc-calendar-icon-btn ha-icon {\n        --mdc-icon-size: 22px;\n      }\n\n      .uc-calendar-icon-btn:hover,\n      .uc-calendar-pill-btn:hover {\n        background: rgba(var(--rgb-primary-text-color, 255, 255, 255), 0.08);\n      }\n\n      .uc-calendar-add-btn {\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n\n      .uc-calendar-add-btn:hover {\n        background: var(--primary-color);\n        filter: brightness(1.1);\n      }\n\n      .uc-calendar-pill-btn {\n        padding: 5px 12px;\n        border-radius: 16px;\n        border: 1px solid var(--divider-color);\n        font-size: 13px;\n        font-weight: 500;\n        white-space: nowrap;\n      }\n\n      .uc-calendar-pill-btn.primary {\n        background: var(--primary-color);\n        border-color: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n\n      .uc-calendar-pill-btn[disabled] {\n        opacity: 0.6;\n        cursor: default;\n      }\n\n      .uc-calendar-switcher {\n        display: inline-flex;\n        padding: 2px;\n        border-radius: 16px;\n        background: rgba(var(--rgb-primary-text-color, 255, 255, 255), 0.06);\n        border: 1px solid var(--divider-color);\n        flex: 0 0 auto;\n      }\n\n      .uc-calendar-switch-btn {\n        padding: 4px 10px;\n        border-radius: 14px;\n        font-size: 12px;\n        font-weight: 500;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n      }\n\n      .uc-calendar-switch-btn.active {\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n\n      /* Calendar / person filter chips */\n      .uc-calendar-filter {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 6px;\n        margin: -4px 0 12px;\n      }\n\n      .uc-calendar-chip {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        padding: 3px 10px 3px 6px;\n        border-radius: 14px;\n        font-size: 12px;\n        font-weight: 500;\n        border: 1px solid var(--uc-cal-chip);\n        background: color-mix(in srgb, var(--uc-cal-chip) 18%, transparent);\n        text-transform: capitalize;\n      }\n\n      .uc-calendar-chip.off {\n        background: none;\n        border-color: var(--divider-color);\n        color: var(--secondary-text-color);\n        opacity: 0.7;\n      }\n\n      .uc-calendar-chip-dot {\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        background: var(--uc-cal-chip);\n      }\n\n      .uc-calendar-chip.off .uc-calendar-chip-dot {\n        background: none;\n        border: 2px solid var(--uc-cal-chip);\n        box-sizing: border-box;\n      }\n\n      .uc-calendar-chip-avatar {\n        width: 18px;\n        height: 18px;\n        border-radius: 50%;\n        object-fit: cover;\n      }\n\n      .uc-calendar-chip.off .uc-calendar-chip-avatar {\n        filter: grayscale(1);\n      }\n\n      /* Weather on days */\n      .uc-calendar-weather {\n        display: inline-flex;\n        align-items: center;\n        gap: 2px;\n        color: var(--secondary-text-color);\n        font-size: 11px;\n        line-height: 1;\n        white-space: nowrap;\n      }\n\n      .uc-calendar-weather ha-icon {\n        --mdc-icon-size: 16px;\n      }\n\n      .uc-calendar-weather--inline {\n        font-size: 13px;\n        gap: 4px;\n      }\n\n      .uc-calendar-weather--inline ha-icon {\n        --mdc-icon-size: 20px;\n      }\n\n      .uc-calendar-weather--header {\n        justify-content: center;\n        margin-top: 2px;\n      }\n\n      .uc-calendar-date-col .uc-calendar-weather {\n        margin-top: 4px;\n      }\n\n      .uc-calendar-day-weather-row {\n        display: flex;\n        justify-content: center;\n        margin-bottom: 8px;\n      }\n\n      /* Month cells: number + weather, event names */\n      .uc-calendar-day-cell {\n        min-width: 0;\n        overflow: hidden;\n      }\n\n      .uc-calendar-day-cell-top {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: flex-start;\n        justify-content: space-between;\n        gap: 0 2px;\n      }\n\n      .uc-calendar-day-cell-top .uc-calendar-weather {\n        margin-left: auto;\n      }\n\n      .uc-calendar-day-cell-numwrap {\n        display: flex;\n        align-items: center;\n        min-width: 0;\n      }\n\n      .uc-calendar-day-cell-top .uc-calendar-weather ha-icon {\n        --mdc-icon-size: 14px;\n      }\n\n      .uc-calendar-day-cell.selected {\n        outline: 2px solid var(--primary-color);\n        outline-offset: -2px;\n      }\n\n      .uc-calendar-day-cell-titles {\n        display: flex;\n        flex-direction: column;\n        gap: 2px;\n        min-width: 0;\n      }\n\n      .uc-calendar-day-cell-title {\n        display: flex;\n        gap: 3px;\n        align-items: baseline;\n        min-width: 0;\n        font-size: 11px;\n        line-height: 1.3;\n        padding: 1px 4px;\n        border-radius: 3px;\n        border-left: 2px solid var(--uc-cal-ev);\n        background: color-mix(in srgb, var(--uc-cal-ev) 16%, transparent);\n        color: var(--primary-text-color);\n      }\n\n      .uc-calendar-day-cell-title.all-day {\n        background: var(--uc-cal-ev);\n        color: #fff;\n        border-left-color: transparent;\n      }\n\n      .uc-calendar-day-cell-time {\n        flex: 0 0 auto;\n        opacity: 0.75;\n        font-variant-numeric: tabular-nums;\n      }\n\n      .uc-calendar-day-cell-name {\n        min-width: 0;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      .uc-calendar-day-cell.wrap-titles .uc-calendar-day-cell-title {\n        flex-wrap: wrap;\n        align-items: flex-start;\n      }\n\n      .uc-calendar-day-cell.wrap-titles .uc-calendar-day-cell-name {\n        white-space: normal;\n        overflow: visible;\n        overflow-wrap: break-word;\n        hyphens: auto;\n      }\n\n      .uc-calendar-day-cell-count {\n        flex: 0 0 auto;\n        min-width: 16px;\n        height: 16px;\n        padding: 0 4px;\n        box-sizing: border-box;\n        border-radius: 8px;\n        font-size: 10px;\n        font-weight: 600;\n        line-height: 16px;\n        text-align: center;\n        color: var(--text-primary-color, #fff);\n        background: var(--primary-color);\n        margin-left: 3px;\n      }\n\n      .uc-calendar-ev-icon {\n        --mdc-icon-size: 1.1em;\n        flex: 0 0 auto;\n        margin-right: 3px;\n        vertical-align: -0.15em;\n      }\n\n      .uc-calendar-day-event-desc {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-top: 2px;\n      }\n\n      .uc-calendar-header-info {\n        display: inline-flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 13px;\n        font-weight: 500;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n      }\n\n      .uc-calendar-header-time {\n        font-variant-numeric: tabular-nums;\n      }\n\n      .uc-calendar-header-weather {\n        display: inline-flex;\n        align-items: center;\n        gap: 3px;\n        color: var(--secondary-text-color);\n      }\n\n      .uc-calendar-header-weather ha-icon {\n        --mdc-icon-size: 18px;\n      }\n\n      .uc-calendar-form-field option,\n      .uc-calendar-form-field optgroup {\n        background-color: var(--card-background-color, var(--ha-card-background, #1c1c1c));\n        color: var(--primary-text-color);\n      }\n\n      .uc-calendar-week-day-header.clickable {\n        cursor: pointer;\n      }\n\n      /* Selected day's events */\n      .uc-calendar-details {\n        margin-top: 12px;\n        padding: 12px;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n      }\n\n      .uc-calendar-details-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 8px;\n        font-weight: 600;\n        font-size: 15px;\n        color: var(--primary-text-color);\n        margin-bottom: 8px;\n      }\n\n      .uc-calendar-details-empty {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n        font-style: italic;\n      }\n\n      .uc-calendar-details-event {\n        display: flex;\n        gap: 10px;\n        padding: 8px 0;\n        cursor: pointer;\n      }\n\n      .uc-calendar-details-event + .uc-calendar-details-event {\n        border-top: 1px solid var(--divider-color);\n      }\n\n      .uc-calendar-details-edit {\n        --mdc-icon-size: 18px;\n        flex: 0 0 auto;\n        align-self: center;\n        color: var(--secondary-text-color);\n      }\n\n      .uc-calendar-details-accent {\n        width: 4px;\n        border-radius: 2px;\n        flex: 0 0 4px;\n      }\n\n      .uc-calendar-details-body {\n        min-width: 0;\n        flex: 1;\n      }\n\n      .uc-calendar-details-title {\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        margin-bottom: 2px;\n        overflow-wrap: anywhere;\n      }\n\n      .uc-calendar-details-meta {\n        display: flex;\n        align-items: flex-start;\n        gap: 6px;\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-top: 2px;\n        overflow-wrap: anywhere;\n      }\n\n      .uc-calendar-details-meta ha-icon {\n        --mdc-icon-size: 14px;\n        flex: 0 0 14px;\n      }\n\n      .uc-calendar-details-desc {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        margin-top: 4px;\n        white-space: pre-line;\n      }\n\n      .uc-calendar-details-cal {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 11px;\n        color: var(--secondary-text-color);\n        margin-top: 4px;\n        text-transform: capitalize;\n      }\n\n      .uc-calendar-details-dot {\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n      }\n\n      .uc-calendar-details-header-end {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n      }\n\n      .uc-calendar-details-close {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 32px;\n        height: 32px;\n        margin: -6px -6px -6px 0;\n        padding: 0;\n        border: none;\n        border-radius: 50%;\n        background: transparent;\n        color: var(--secondary-text-color);\n        cursor: pointer;\n      }\n\n      .uc-calendar-details-close:hover {\n        background: rgba(127, 127, 127, 0.15);\n        color: var(--primary-text-color);\n      }\n\n      .uc-calendar-details-close ha-icon {\n        --mdc-icon-size: 20px;\n      }\n\n      /* Day details popup */\n      .uc-calendar-container {\n        position: relative;\n      }\n\n      .uc-calendar-popup-backdrop {\n        position: fixed;\n        inset: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 16px;\n        box-sizing: border-box;\n        background: rgba(0, 0, 0, 0.5);\n        animation: uc-calendar-popup-fade 0.15s ease-out;\n      }\n\n      .uc-calendar-container > .uc-calendar-popup-backdrop {\n        position: absolute;\n        z-index: 5;\n        border-radius: var(--ha-card-border-radius, 12px);\n      }\n\n      .uc-calendar-popup.uc-calendar-details {\n        margin: 0;\n        width: min(420px, 100%);\n        max-height: min(80vh, 100%);\n        overflow-y: auto;\n        box-sizing: border-box;\n        padding: 16px;\n        border-radius: var(--ha-card-border-radius, 12px);\n        background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background, #1c1c1c)));\n        backdrop-filter: blur(12px);\n        border: 1px solid var(--divider-color);\n        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n        font-family: var(--ha-card-header-font-family, inherit);\n      }\n\n      @keyframes uc-calendar-popup-fade {\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n      }\n\n      /* Add event form */\n      .uc-calendar-form {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        padding: 14px;\n        border-radius: var(--uc-r-8, 8px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n      }\n\n      .uc-calendar-form-title {\n        font-size: 16px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n\n      .uc-calendar-form-row {\n        display: flex;\n        gap: 8px;\n      }\n\n      .uc-calendar-form-row > * {\n        flex: 1 1 0;\n        min-width: 0;\n      }\n\n      .uc-calendar-form-field {\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n        font-size: 12px;\n        color: var(--secondary-text-color);\n      }\n\n      .uc-calendar-form-field input,\n      .uc-calendar-form-field select,\n      .uc-calendar-form-field textarea {\n        font: inherit;\n        font-size: 14px;\n        color: var(--primary-text-color);\n        background: var(--input-fill-color, rgba(var(--rgb-primary-text-color, 255, 255, 255), 0.05));\n        border: 1px solid var(--divider-color);\n        border-radius: 6px;\n        padding: 8px 10px;\n        width: 100%;\n        box-sizing: border-box;\n        color-scheme: light dark;\n      }\n\n      .uc-calendar-form-field input:focus,\n      .uc-calendar-form-field select:focus,\n      .uc-calendar-form-field textarea:focus {\n        outline: none;\n        border-color: var(--primary-color);\n      }\n\n      .uc-calendar-form-check {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        font-size: 14px;\n        color: var(--primary-text-color);\n        cursor: pointer;\n      }\n\n      .uc-calendar-form-check input {\n        width: 18px;\n        height: 18px;\n        accent-color: var(--primary-color);\n      }\n\n      .uc-calendar-form-error {\n        font-size: 13px;\n        color: var(--error-color, #db4437);\n      }\n\n      .uc-calendar-form-actions {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        flex-wrap: wrap;\n        gap: 8px;\n      }\n\n      .uc-calendar-form-actions .start {\n        margin-right: auto;\n      }\n\n      .uc-calendar-form-confirm-text {\n        margin-right: auto;\n        font-size: 14px;\n        color: var(--primary-text-color);\n      }\n\n      .uc-calendar-pill-btn.danger {\n        color: var(--error-color, #db4437);\n        border-color: var(--error-color, #db4437);\n      }\n\n      .uc-calendar-form-actions.confirm .uc-calendar-pill-btn.danger {\n        background: var(--error-color, #db4437);\n        color: #fff;\n      }\n\n      .uc-calendar-form-fields {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        border: 0;\n        margin: 0;\n        padding: 0;\n        min-width: 0;\n      }\n\n      .uc-calendar-form-fields[disabled] {\n        opacity: 0.7;\n      }\n\n      .uc-calendar-form-calname {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 13px;\n        color: var(--secondary-text-color);\n      }\n\n      .uc-calendar-form-note {\n        font-size: 13px;\n        color: var(--secondary-text-color);\n      }\n\n      /* Narrow cards: switcher drops below the title row */\n      @container uc-calendar (max-width: 440px) {\n        .uc-calendar-toolbar {\n          grid-template-columns: 1fr auto;\n        }\n\n        .uc-calendar-toolbar-start {\n          grid-column: 1 / -1;\n          grid-row: 2;\n          justify-content: center;\n        }\n\n        .uc-calendar-toolbar-start:empty {\n          display: none;\n        }\n\n        .uc-calendar-toolbar-center {\n          justify-content: flex-start;\n        }\n\n      }\n\n      /* Responsive adjustments */\n      @media (max-width: 600px) {\n        .uc-calendar-week-header,\n        .uc-calendar-week-allday-row,\n        .uc-calendar-week-row {\n          grid-template-columns: 50px repeat(7, 1fr);\n        }\n\n        .uc-calendar-week-time-col,\n        .uc-calendar-day-time-col {\n          width: 50px;\n          flex: 0 0 50px;\n        }\n\n        .uc-calendar-day-cell {\n          min-height: 48px;\n        }\n\n        .uc-calendar-grid {\n          grid-template-columns: 1fr !important;\n        }\n      }\n    `}getStyles(){return`${i.m.getSliderStyles()}${this.getPreviewStyles({})}`}}M._dayPopupPortals=new Map,M._dayPopupClose=new Map},9308(e,n,t){t.d(n,{e:()=>i});const a=["hass-more-info","hass-action","show-dialog","hass-notification"],r="_ucHaEventForwarder";function i(e){if(e[r])return;const n=n=>{const t=document.querySelector("home-assistant");t&&!t.contains(e)&&(n.stopPropagation(),t.dispatchEvent(new CustomEvent(n.type,{detail:n.detail,bubbles:!0,composed:!0})))};for(const t of a)e.addEventListener(t,n);e.addEventListener("context-request",o),e[r]=n}function o(e){var n;const t=e.currentTarget,a=document.querySelector("home-assistant");if(!a||a.contains(t))return;const r=e;e.stopPropagation();const i=new Event("context-request",{bubbles:!0,composed:!0});Object.assign(i,{context:r.context,callback:r.callback,subscribe:r.subscribe,contextTarget:null!==(n=r.contextTarget)&&void 0!==n?n:e.composedPath()[0]}),a.dispatchEvent(i)}},2318(e,n,t){t.d(n,{P$:()=>d,eq:()=>o,z6:()=>l});var a=t(9482);const r=new Map,i={daily:["forecast","forecast_daily","daily","forecasts"],hourly:["forecast_hourly","hourly"]};function o(e,n,t,o=()=>(0,a.dd)({source:"module-update",immediate:!0})){var l,d,c;if(!e||!n)return[];const s=function(e,n){if(e)for(const t of i[n]){const n=e[t];if(Array.isArray(n)&&n.length>0)return n}}(null===(d=null===(l=e.states)||void 0===l?void 0:l[n])||void 0===d?void 0:d.attributes,t);if(s)return s;const p=`${n}|${t}`,u=r.get(p);if(!(u&&Date.now()-u.fetchedAt<9e5)&&!(null==u?void 0:u.fetching)&&e.callWS&&(null===(c=e.states)||void 0===c?void 0:c[n])){const a={slots:(null==u?void 0:u.slots)||[],fetchedAt:(null==u?void 0:u.fetchedAt)||0,fetching:!0};r.set(p,a),e.callWS({type:"call_service",domain:"weather",service:"get_forecasts",service_data:{type:t},target:{entity_id:n},return_response:!0}).then(e=>{var t,a;const i=(null===(a=null===(t=null==e?void 0:e.response)||void 0===t?void 0:t[n])||void 0===a?void 0:a.forecast)||[];r.set(p,{slots:i,fetchedAt:Date.now(),fetching:!1}),o()}).catch(()=>{r.set(p,{slots:a.slots,fetchedAt:Date.now(),fetching:!1})})}return(null==u?void 0:u.slots)||[]}function l(e){if(e)for(const n of[...r.keys()])n.startsWith(`${e}|`)&&r.delete(n);else r.clear()}function d(e){const n=new Date(e);if(Number.isNaN(n.getTime()))return"";const t=String(n.getMonth()+1).padStart(2,"0"),a=String(n.getDate()).padStart(2,"0");return`${n.getFullYear()}-${t}-${a}`}}};