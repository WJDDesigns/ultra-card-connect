export const __webpack_esm_ids__=[2751];export const __webpack_esm_modules__={3500(a,e,o){o.d(e,{UltraSolarAnalyticsModule:()=>u});var t=o(2618),r=o(6478),n=o(7475);function s(a,e){var o,t,r;if(!e)return null;const n=null===(o=null==a?void 0:a.states)||void 0===o?void 0:o[e];if(!n)return null;const s=parseFloat(n.state);return isNaN(s)?null:(null!==(r=null===(t=n.attributes)||void 0===t?void 0:t.unit_of_measurement)&&void 0!==r?r:"").toUpperCase().includes("KW")?1e3*s:s}function i(a,e){var o,t,r;if(!e)return null;const n=null===(o=null==a?void 0:a.states)||void 0===o?void 0:o[e];if(!n)return null;const s=parseFloat(n.state);if(isNaN(s))return null;const i=null!==(r=null===(t=n.attributes)||void 0===t?void 0:t.unit_of_measurement)&&void 0!==r?r:"";return i.toUpperCase().includes("WH")&&!i.toUpperCase().includes("KWH")?s/1e3:s}function l(a){return null===a?"—":Math.abs(a)>=1e3?`${(a/1e3).toFixed(2)} kW`:`${Math.round(a)} W`}function c(a){return null===a?"—":`${a.toFixed(2)} kWh`}function d(a,e,o){const r=2*Math.PI*40,n=a/100*r;return t.JW`
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="${40}" stroke="${o}" stroke-width="${8}" fill="none"/>
      <circle cx="50" cy="50" r="${40}"
        stroke="${e}"
        stroke-width="${8}"
        stroke-linecap="round"
        fill="none"
        stroke-dasharray="${r}"
        stroke-dashoffset="${r-n}"
        transform="rotate(-90 50 50)"
        style="transition: stroke-dashoffset 0.6s ease;"
      />
    </svg>
  `}class u extends n.m{constructor(){super(...arguments),this.handlesOwnDesignStyles=!0,this.metadata={type:"solar_analytics",title:"Solar Analytics",description:"Live solar power, grid balance, battery state, and daily energy totals in one glanceable widget",author:"WJD Designs",version:"1.0.0",icon:"mdi:solar-power-variant",category:"data",tags:["solar","energy","analytics","grid","battery","power","pro","premium"]}}createDefault(a,e){return{id:a||this.generateId("solar_analytics"),type:"solar_analytics",solar_entity:"",grid_entity:"",battery_entity:"",home_entity:"",solar_energy_entity:"",grid_import_entity:"",grid_export_entity:"",layout:"full",show_battery:!0,show_grid:!0,show_self_sufficiency:!0,show_today_totals:!0,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(a){var e;const o=[],t=a;return a.id||o.push("Module ID is required"),(null===(e=t.solar_entity)||void 0===e?void 0:e.trim())||o.push((0,r.kg)("editor.solar_analytics.error_solar","en","Select a solar power sensor")),{valid:0===o.length,errors:o}}renderGeneralTab(a,e,o,n){var s;const i=a,l=(null===(s=null==e?void 0:e.locale)||void 0===s?void 0:s.language)||"en",c=(a,r,s,l)=>t.qy`
      <div style="margin-bottom: 12px;">
        ${this.renderEntityPickerWithVariables(e,o,a,i[a]||"",e=>{n({[a]:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},l,r)}
        <div style="font-size:0.78rem; color:var(--secondary-text-color); margin-top:3px; padding-left:2px;">${s}</div>
      </div>
    `;return t.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">

        ${this.renderSettingsSection((0,r.kg)("editor.solar_analytics.live_section",l,"Live Power Sensors"),(0,r.kg)("editor.solar_analytics.live_desc",l,"Sensors reporting current power in W or kW."),[])}
        ${c("solar_entity",(0,r.kg)("editor.solar_analytics.solar_entity",l,"Solar power (W/kW)"),(0,r.kg)("editor.solar_analytics.solar_entity_desc",l,"Current solar panel output"),["sensor"])}
        ${c("grid_entity",(0,r.kg)("editor.solar_analytics.grid_entity",l,"Grid power (W/kW)"),(0,r.kg)("editor.solar_analytics.grid_entity_desc",l,"Positive = importing, negative = exporting"),["sensor"])}
        ${c("home_entity",(0,r.kg)("editor.solar_analytics.home_entity",l,"Home consumption (W/kW)"),(0,r.kg)("editor.solar_analytics.home_entity_desc",l,"Total home load"),["sensor"])}
        ${c("battery_entity",(0,r.kg)("editor.solar_analytics.battery_entity",l,"Battery SoC (%)"),(0,r.kg)("editor.solar_analytics.battery_entity_desc",l,"State of charge percentage"),["sensor"])}

        ${this.renderSettingsSection((0,r.kg)("editor.solar_analytics.energy_section",l,"Today's Energy Sensors"),(0,r.kg)("editor.solar_analytics.energy_desc",l,"Sensors accumulating today's totals in kWh (optional)."),[])}
        ${c("solar_energy_entity",(0,r.kg)("editor.solar_analytics.solar_energy_entity",l,"Solar today (kWh)"),(0,r.kg)("editor.solar_analytics.solar_energy_entity_desc",l,"Daily solar production"),["sensor"])}
        ${c("grid_import_entity",(0,r.kg)("editor.solar_analytics.grid_import_entity",l,"Grid import today (kWh)"),(0,r.kg)("editor.solar_analytics.grid_import_entity_desc",l,"Energy pulled from grid today"),["sensor"])}
        ${c("grid_export_entity",(0,r.kg)("editor.solar_analytics.grid_export_entity",l,"Grid export today (kWh)"),(0,r.kg)("editor.solar_analytics.grid_export_entity_desc",l,"Energy sent to grid today"),["sensor"])}

        ${this.renderSettingsSection((0,r.kg)("editor.solar_analytics.display_section",l,"Display"),(0,r.kg)("editor.solar_analytics.display_desc",l,"Choose what to show."),[{title:(0,r.kg)("editor.solar_analytics.show_battery",l,"Show battery"),description:(0,r.kg)("editor.solar_analytics.show_battery_desc",l,"Battery SoC ring and value"),hass:e,data:{show_battery:!1!==i.show_battery},schema:[this.booleanField("show_battery")],onChange:a=>{var e,o;return n({show_battery:null===(o=null===(e=a.detail.value)||void 0===e?void 0:e.show_battery)||void 0===o||o})}},{title:(0,r.kg)("editor.solar_analytics.show_grid",l,"Show grid"),description:(0,r.kg)("editor.solar_analytics.show_grid_desc",l,"Grid import/export power"),hass:e,data:{show_grid:!1!==i.show_grid},schema:[this.booleanField("show_grid")],onChange:a=>{var e,o;return n({show_grid:null===(o=null===(e=a.detail.value)||void 0===e?void 0:e.show_grid)||void 0===o||o})}},{title:(0,r.kg)("editor.solar_analytics.show_self_sufficiency",l,"Show self-sufficiency"),description:(0,r.kg)("editor.solar_analytics.show_self_sufficiency_desc",l,"Percentage of home load met by solar"),hass:e,data:{show_self_sufficiency:!1!==i.show_self_sufficiency},schema:[this.booleanField("show_self_sufficiency")],onChange:a=>{var e,o;return n({show_self_sufficiency:null===(o=null===(e=a.detail.value)||void 0===e?void 0:e.show_self_sufficiency)||void 0===o||o})}},{title:(0,r.kg)("editor.solar_analytics.show_today_totals",l,"Show today's totals"),description:(0,r.kg)("editor.solar_analytics.show_today_totals_desc",l,"Daily kWh summary row"),hass:e,data:{show_today_totals:!1!==i.show_today_totals},schema:[this.booleanField("show_today_totals")],onChange:a=>{var e,o;return n({show_today_totals:null===(o=null===(e=a.detail.value)||void 0===e?void 0:e.show_today_totals)||void 0===o||o})}}])}

        ${this.renderSettingsSection((0,r.kg)("editor.solar_analytics.layout_section",l,"Layout"),"",[{title:(0,r.kg)("editor.solar_analytics.layout",l,"Layout"),description:(0,r.kg)("editor.solar_analytics.layout_desc",l,"Full includes all gauges; compact shows a single row"),hass:e,data:{layout:i.layout||"full"},schema:[this.selectField("layout",[{value:"full",label:(0,r.kg)("editor.solar_analytics.layout_full",l,"Full")},{value:"compact",label:(0,r.kg)("editor.solar_analytics.layout_compact",l,"Compact")}])],onChange:a=>{var e;n({layout:(null===(e=a.detail.value)||void 0===e?void 0:e.layout)||"full"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

      </div>
    `}renderPreview(a,e,o,n){var u,_,g;const p=a,y=(null===(u=null==e?void 0:e.locale)||void 0===u?void 0:u.language)||"en",v=this.resolveEntity(p.solar_entity,o)||p.solar_entity;if(!v||!(null===(_=null==e?void 0:e.states)||void 0===_?void 0:_[v]))return t.qy`
        <style>${this.getStyles()}</style>
        <div
          class="uc-solar-wrapper"
          data-uc-role="pane"
          style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border-radius: var(--uc-r-16, 16px); overflow: hidden;"
        >
          ${this.renderGradientErrorState((0,r.kg)("editor.solar_analytics.config_needed",y,"Select a solar sensor"),(0,r.kg)("editor.solar_analytics.config_needed_desc",y,"Choose a solar power sensor in the General tab"),"mdi:solar-power-variant")}
        </div>
      `;const h=this.resolveEntity(p.grid_entity,o)||p.grid_entity,m=this.resolveEntity(p.battery_entity,o)||p.battery_entity,f=this.resolveEntity(p.home_entity,o)||p.home_entity,x=this.resolveEntity(p.solar_energy_entity,o)||p.solar_energy_entity,b=this.resolveEntity(p.grid_import_entity,o)||p.grid_import_entity,w=this.resolveEntity(p.grid_export_entity,o)||p.grid_export_entity,k=null!==(g=s(e,v))&&void 0!==g?g:0,$=s(e,h),S=s(e,f),z=function(a,e){var o;if(!e)return null;const t=null===(o=null==a?void 0:a.states)||void 0===o?void 0:o[e];if(!t)return null;const r=parseFloat(t.state);return isNaN(r)?null:Math.min(100,Math.max(0,r))}(e,m),W=i(e,x),q=i(e,b),C=i(e,w);let M=null;if(null!==W&&null!==C&&null!==q){const a=W-C,e=a+q;M=e>0?Math.min(100,Math.round(a/e*100)):0}else if(k>0&&null!==$){const a=k+Math.max(0,$);M=a>0?Math.min(100,Math.round(k/a*100)):0}const E=null!==$&&$<0,F=null===$?"—":$<0?`${(0,r.kg)("editor.solar_analytics.exporting",y,"Exporting")} ${l(-$)}`:`${(0,r.kg)("editor.solar_analytics.importing",y,"Importing")} ${l($)}`,P=E?"#22c55e":"#f59e0b",D=(()=>{const o=this.buildDesignStyles(a,e);return Object.entries(o).filter(([,a])=>null!=a&&""!==a).map(([a,e])=>`${a.replace(/([A-Z])/g,"-$1").toLowerCase()}: ${e}`).join("; ")})(),G=this.getHoverEffectClass(a);return"compact"===(p.layout||"full")?t.qy`
        <style>${this.getStyles()}</style>
        <div class="uc-solar-wrapper ${G}"
          data-uc-role="pane"
          style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none); border-radius: var(--uc-r-16, 16px); overflow: hidden; ${D}">
          ${this.wrapWithAnimation(t.qy`
            <div class="uc-solar uc-solar--compact">
              <div class="uc-solar-compact__kpi">
                <ha-icon icon="mdi:solar-power-variant" style="--mdc-icon-size:22px; color:#f59e0b;"></ha-icon>
                <span class="uc-solar-compact__val">${l(k)}</span>
                <span class="uc-solar-compact__label">${(0,r.kg)("editor.solar_analytics.solar",y,"Solar")}</span>
              </div>
              ${!1!==p.show_grid&&null!==$?t.qy`
                <div class="uc-solar-compact__sep"></div>
                <div class="uc-solar-compact__kpi">
                  <ha-icon icon="${E?"mdi:transmission-tower-export":"mdi:transmission-tower-import"}"
                    style="--mdc-icon-size:22px; color:${P};"></ha-icon>
                  <span class="uc-solar-compact__val" style="color:${P}">${l(Math.abs($))}</span>
                  <span class="uc-solar-compact__label">${E?(0,r.kg)("editor.solar_analytics.exporting",y,"Export"):(0,r.kg)("editor.solar_analytics.importing",y,"Import")}</span>
                </div>
              `:t.s6}
              ${!1!==p.show_battery&&null!==z?t.qy`
                <div class="uc-solar-compact__sep"></div>
                <div class="uc-solar-compact__kpi">
                  <ha-icon icon="${z>70?"mdi:battery-high":z>30?"mdi:battery-medium":"mdi:battery-low"}"
                    style="--mdc-icon-size:22px; color:#22c55e;"></ha-icon>
                  <span class="uc-solar-compact__val">${z}%</span>
                  <span class="uc-solar-compact__label">${(0,r.kg)("editor.solar_analytics.battery",y,"Battery")}</span>
                </div>
              `:t.s6}
            </div>
          `,a,e)}
        </div>
      `:t.qy`
      <style>${this.getStyles()}</style>
      <div class="uc-solar-wrapper ${G}"
        data-uc-role="pane"
        style="background: var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none); border-radius: var(--uc-r-20, 20px); overflow: hidden; ${D}">
        ${this.wrapWithAnimation(t.qy`
          <div class="uc-solar uc-solar--full">

            <!-- Header -->
            <div class="uc-solar__header">
              <ha-icon icon="mdi:solar-power-variant" style="--mdc-icon-size:20px; color:#f59e0b;"></ha-icon>
              <span class="uc-solar__header-title">
                ${(0,r.kg)("editor.solar_analytics.header",y,"Solar Overview")}
              </span>
            </div>

            <!-- Live KPI gauges row -->
            <div class="uc-solar__gauges">

              <!-- Solar gauge -->
              <div class="uc-solar-gauge">
                <div class="uc-solar-gauge__ring">
                  ${d(S?Math.min(100,Math.round(k/Math.max(k,S)*100)):100,"#f59e0b","color-mix(in srgb, #f59e0b 12%, var(--card-background-color, var(--ha-card-background)))")}
                  <div class="uc-solar-gauge__center">
                    <ha-icon icon="mdi:white-balance-sunny" style="--mdc-icon-size:20px; color:#f59e0b;"></ha-icon>
                  </div>
                </div>
                <div class="uc-solar-gauge__val">${l(k)}</div>
                <div class="uc-solar-gauge__label">${(0,r.kg)("editor.solar_analytics.solar",y,"Solar")}</div>
              </div>

              <!-- Self-sufficiency ring (centre) -->
              ${!1!==p.show_self_sufficiency&&null!==M?t.qy`
                <div class="uc-solar-gauge uc-solar-gauge--center">
                  <div class="uc-solar-gauge__ring uc-solar-gauge__ring--lg">
                    ${d(M,"#8b5cf6","color-mix(in srgb, #8b5cf6 12%, var(--card-background-color, var(--ha-card-background)))")}
                    <div class="uc-solar-gauge__center">
                      <span class="uc-solar-gauge__center-pct">${M}%</span>
                      <span class="uc-solar-gauge__center-sub">${(0,r.kg)("editor.solar_analytics.self",y,"Self")}</span>
                    </div>
                  </div>
                  <div class="uc-solar-gauge__label">${(0,r.kg)("editor.solar_analytics.self_sufficiency",y,"Self-Sufficiency")}</div>
                </div>
              `:t.s6}

              <!-- Battery gauge -->
              ${!1!==p.show_battery&&null!==z?t.qy`
                <div class="uc-solar-gauge">
                  <div class="uc-solar-gauge__ring">
                    ${d(z,"#22c55e","color-mix(in srgb, #22c55e 12%, var(--card-background-color, var(--ha-card-background)))")}
                    <div class="uc-solar-gauge__center">
                      <ha-icon icon="mdi:battery" style="--mdc-icon-size:20px; color:#22c55e;"></ha-icon>
                    </div>
                  </div>
                  <div class="uc-solar-gauge__val">${z}%</div>
                  <div class="uc-solar-gauge__label">${(0,r.kg)("editor.solar_analytics.battery",y,"Battery")}</div>
                </div>
              `:t.s6}
            </div>

            <!-- Grid status bar -->
            ${!1!==p.show_grid&&null!==$?t.qy`
              <div class="uc-solar__grid-bar" style="--grid-color:${P}">
                <ha-icon icon="${E?"mdi:transmission-tower-export":"mdi:transmission-tower-import"}"
                  style="--mdc-icon-size:18px; color:${P};"></ha-icon>
                <span class="uc-solar__grid-label">${F}</span>
                ${S?t.qy`
                  <span class="uc-solar__grid-home">
                    <ha-icon icon="mdi:home-lightning-bolt-outline" style="--mdc-icon-size:15px; color:var(--secondary-text-color);"></ha-icon>
                    ${l(S)}
                  </span>
                `:t.s6}
              </div>
            `:t.s6}

            <!-- Today's energy totals -->
            ${!1===p.show_today_totals||null===W&&null===q&&null===C?t.s6:t.qy`
              <div class="uc-solar__divider"></div>
              <div class="uc-solar__totals">
                <div class="uc-solar__totals-title">
                  ${(0,r.kg)("editor.solar_analytics.today",y,"Today")}
                </div>
                <div class="uc-solar__totals-row">
                  ${null!==W?t.qy`
                    <div class="uc-solar__total-item">
                      <ha-icon icon="mdi:solar-power" style="--mdc-icon-size:16px; color:#f59e0b;"></ha-icon>
                      <span>${c(W)}</span>
                      <span class="uc-solar__total-sub">${(0,r.kg)("editor.solar_analytics.produced",y,"Produced")}</span>
                    </div>
                  `:t.s6}
                  ${null!==q?t.qy`
                    <div class="uc-solar__total-item">
                      <ha-icon icon="mdi:transmission-tower-import" style="--mdc-icon-size:16px; color:#f59e0b;"></ha-icon>
                      <span>${c(q)}</span>
                      <span class="uc-solar__total-sub">${(0,r.kg)("editor.solar_analytics.imported",y,"Imported")}</span>
                    </div>
                  `:t.s6}
                  ${null!==C?t.qy`
                    <div class="uc-solar__total-item">
                      <ha-icon icon="mdi:transmission-tower-export" style="--mdc-icon-size:16px; color:#22c55e;"></ha-icon>
                      <span style="color:#22c55e">${c(C)}</span>
                      <span class="uc-solar__total-sub">${(0,r.kg)("editor.solar_analytics.exported",y,"Exported")}</span>
                    </div>
                  `:t.s6}
                </div>
              </div>
            `}

          </div>
        `,a,e)}
      </div>
    `}getStyles(){return"\n      .uc-solar-wrapper { box-sizing: border-box; }\n      .uc-solar { box-sizing: border-box; color: var(--primary-text-color); }\n\n      /* ═══ FULL ═══════════════════════════════════════════════════════ */\n      .uc-solar--full {\n        padding: 18px 18px 16px;\n        display: flex;\n        flex-direction: column;\n        gap: 14px;\n      }\n\n      /* Header */\n      .uc-solar__header {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n      .uc-solar__header-title {\n        font-size: 0.75rem;\n        font-weight: 700;\n        letter-spacing: 0.06em;\n        text-transform: uppercase;\n        color: var(--secondary-text-color);\n      }\n\n      /* Gauge row */\n      .uc-solar__gauges {\n        display: flex;\n        align-items: flex-end;\n        justify-content: center;\n        gap: 8px;\n      }\n      .uc-solar-gauge {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 6px;\n        flex: 1;\n      }\n      .uc-solar-gauge--center { flex: 1.5; }\n      .uc-solar-gauge__ring {\n        position: relative;\n        width: 80px;\n        height: 80px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .uc-solar-gauge__ring--lg {\n        width: 100px;\n        height: 100px;\n      }\n      .uc-solar-gauge__ring svg {\n        position: absolute;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n      }\n      .uc-solar-gauge__center {\n        position: relative;\n        z-index: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 1px;\n      }\n      .uc-solar-gauge__center-pct {\n        font-size: 1.25rem;\n        font-weight: 800;\n        color: #8b5cf6;\n        line-height: 1;\n      }\n      .uc-solar-gauge__center-sub {\n        font-size: 0.6rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.05em;\n        color: var(--secondary-text-color);\n      }\n      .uc-solar-gauge__val {\n        font-size: 0.875rem;\n        font-weight: 700;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n      }\n      .uc-solar-gauge__label {\n        font-size: 0.7rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.04em;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n      }\n\n      /* Grid status bar */\n      .uc-solar__grid-bar {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        padding: 8px 12px;\n        border-radius: var(--uc-r-10, 10px);\n        background: color-mix(in srgb, var(--grid-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        border: 1px solid color-mix(in srgb, var(--grid-color) 25%, transparent);\n      }\n      .uc-solar__grid-label {\n        flex: 1;\n        font-size: 0.8125rem;\n        font-weight: 600;\n        color: var(--primary-text-color);\n      }\n      .uc-solar__grid-home {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 0.78rem;\n        color: var(--secondary-text-color);\n        font-weight: 600;\n      }\n\n      /* Divider */\n      .uc-solar__divider {\n        height: 1px;\n        background: color-mix(in srgb, var(--divider-color) 50%, transparent);\n        margin: 0 -2px;\n      }\n\n      /* Today's totals */\n      .uc-solar__totals { display: flex; flex-direction: column; gap: 8px; }\n      .uc-solar__totals-title {\n        font-size: 0.7rem;\n        font-weight: 700;\n        letter-spacing: 0.06em;\n        text-transform: uppercase;\n        color: var(--secondary-text-color);\n      }\n      .uc-solar__totals-row { display: flex; gap: 6px; flex-wrap: wrap; }\n      .uc-solar__total-item {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 3px;\n        padding: 10px 6px;\n        border-radius: var(--uc-r-10, 10px);\n        background: color-mix(in srgb, var(--divider-color) 6%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background))));\n        border: 1px solid color-mix(in srgb, var(--divider-color) 30%, transparent);\n        font-size: 0.875rem;\n        font-weight: 700;\n        color: var(--primary-text-color);\n        min-width: 80px;\n      }\n      .uc-solar__total-sub {\n        font-size: 0.65rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.04em;\n        color: var(--secondary-text-color);\n      }\n\n      /* ═══ COMPACT ════════════════════════════════════════════════════ */\n      .uc-solar--compact { padding: 14px 16px; }\n      .uc-solar-compact__kpi {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 3px;\n        flex: 1;\n      }\n      /* Override: compact is a row of KPIs */\n      .uc-solar--compact {\n        display: flex;\n        align-items: stretch;\n        justify-content: space-around;\n        gap: 4px;\n      }\n      .uc-solar-compact__val {\n        font-size: 1rem;\n        font-weight: 800;\n        color: var(--primary-text-color);\n        white-space: nowrap;\n      }\n      .uc-solar-compact__label {\n        font-size: 0.65rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.04em;\n        color: var(--secondary-text-color);\n        white-space: nowrap;\n      }\n      .uc-solar-compact__sep {\n        width: 1px;\n        background: color-mix(in srgb, var(--divider-color) 50%, transparent);\n        align-self: stretch;\n        margin: 4px 0;\n      }\n    "}}}};