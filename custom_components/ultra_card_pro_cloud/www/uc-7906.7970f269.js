export const __webpack_esm_ids__=[7906];export const __webpack_esm_modules__={7906(t,e,i){i.r(e),i.d(e,{HubAccountTab:()=>w});var a=i(2618),o=i(4791),r=i(9978),s=i(378),n=i(7568),c=i(1793),l=i(8690);function d(t,e){const i=new Blob([JSON.stringify((0,c.nF)(t),(t,e)=>"bot_challenge"===t?void 0:e,2)],{type:"application/json"}),a=URL.createObjectURL(i),o=document.createElement("a");o.href=a,o.download=e||`ultra-card-connect-diagnostics-${(new Date).toISOString().replace(/[:.]/g,"-")}.json`,o.rel="noopener",document.body.appendChild(o),o.click(),setTimeout(()=>{o.remove(),URL.revokeObjectURL(a)},1e3)}const p="https://ultracard.io/wp-json/ultra-card/v1";function h(t,e){return t?`${{USD:"$",EUR:"€",GBP:"£"}[e||""]||`${e||""} `}${t}`:"—"}function g(t){if(!t)return"—";const e=new Date(t.includes("T")?t:t.replace(" ","T"));return Number.isNaN(e.getTime())?t:e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}let u=null,b=null;function m(){u=null}var v=i(7475),y=i(4847),f=function(t,e,i,a){var o,r=arguments.length,s=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,a);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let x=class extends a.WF{constructor(){super(...arguments),this.auth=null,this.cloudUser=null,this._toastMsg="",this._cloudUser=null,this._snapshotSettingsOpen=!1,this._ssEnabled=!1,this._ssTime="03:00",this._ssTimezone="UTC",this._ssLoading=!1,this._snapshotsListOpen=!1,this._snapshotsList=[],this._snapshotsLoading=!1,this._creatingSnapshot=!1,this._snapshotsSummaryLoaded=!1}updated(t){var e,i,a,o;if(t.has("hass")&&this.hass){const t=s.xd.checkIntegrationAuth(this.hass);this._cloudUser=t,t&&s.xd.setIntegrationUser(t,this.hass)}((null===(e=this.auth)||void 0===e?void 0:e.authenticated)&&"pro"===(null===(i=this.auth)||void 0===i?void 0:i.subscription_tier)||"pro"===(null===(o=null===(a=this.cloudUser)||void 0===a?void 0:a.subscription)||void 0===o?void 0:o.tier))&&this.hass&&!this._snapshotsSummaryLoaded&&!this._snapshotsLoading&&this._loadSnapshotsList()}_showToast(t){this._toastMsg=t,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>this._toastMsg="",2500)}render(){var t,e,i,o,r,s;const n=!!(null===(t=this.auth)||void 0===t?void 0:t.authenticated)||!!this.cloudUser,c=!!(null===(e=this.auth)||void 0===e?void 0:e.authenticated)&&"pro"===(null===(i=this.auth)||void 0===i?void 0:i.subscription_tier)||!(null===(o=this.auth)||void 0===o?void 0:o.authenticated)&&"pro"===(null===(s=null===(r=this.cloudUser)||void 0===r?void 0:r.subscription)||void 0===s?void 0:s.tier);return n?a.qy`
      ${c?a.qy`
            ${this._renderDashboardTools()}
            ${this._renderProSettings()}
            ${this._renderProSupport()}
          `:a.qy`
            ${this._renderUpgradePrompt()}
            ${this._renderFeaturesGrid()}
          `}

      <div class="toast ${this._toastMsg?"show":""}">${this._toastMsg}</div>
    `:a.s6}_renderDashboardTools(){return a.qy`
      <div class="tools-section">
        <div class="section-header">
          <div class="header-icon" style="background:linear-gradient(135deg,#e91e63,#f06292);">
            <ha-icon icon="mdi:view-dashboard"></ha-icon>
          </div>
          <div class="header-content">
            <h3>Dashboard Pro Tools</h3>
            <p>Manage entire dashboard snapshots</p>
          </div>
        </div>
        <div class="tools-grid">
          <button class="tool-card" @click=${this._handleExportDashboard}>
            <div class="tool-icon export"><ha-icon icon="mdi:export"></ha-icon></div>
            <div class="tool-content"><h4>Export Dashboard</h4><p>Download entire dashboard</p></div>
          </button>
          <button class="tool-card" @click=${this._handleImportDashboard}>
            <div class="tool-icon import"><ha-icon icon="mdi:import"></ha-icon></div>
            <div class="tool-content"><h4>Import Dashboard</h4><p>Load dashboard from file</p></div>
          </button>
          <button class="tool-card" ?disabled=${this._creatingSnapshot} @click=${this._handleCreateSnapshot}>
            <div class="tool-icon snapshot"><ha-icon icon="mdi:camera-plus"></ha-icon></div>
            <div class="tool-content"><h4>${this._creatingSnapshot?"Creating…":"Create Snapshot"}</h4><p>Manual dashboard snapshot</p></div>
          </button>
          <button class="tool-card" @click=${this._handleViewSnapshots}>
            <div class="tool-icon history"><ha-icon icon="mdi:history"></ha-icon></div>
            <div class="tool-content"><h4>View Snapshots</h4><p>${this._snapshotsListOpen?"Hide snapshot list":"Browse all snapshots"}</p></div>
          </button>
          <button class="tool-card" @click=${this._handleSnapshotSettings}>
            <div class="tool-icon settings"><ha-icon icon="mdi:cog"></ha-icon></div>
            <div class="tool-content"><h4>Snapshot Settings</h4><p>${this._snapshotSettingsOpen?"Close settings":"Configure auto-snapshots"}</p></div>
          </button>
        </div>

        ${this._renderSnapshotSummary()}

        ${this._snapshotsListOpen?this._renderSnapshotsList():""}
        ${this._snapshotSettingsOpen?this._renderSnapshotSettingsPanel():""}
      </div>
    `}_renderSnapshotSummary(){const t=this._snapshotsList,e=t.filter(t=>"manual"===t.type).length,i=t.filter(t=>"auto"===t.type).length,o=t.length>0?t.slice().sort((t,e)=>(e.created_timestamp||0)-(t.created_timestamp||0))[0]:null,r=o?this._formatSnapshotDate(o.created||o.date||""):null;return a.qy`
      <div class="snapshot-summary">
        <div class="snapshot-summary-row">
          <span class="snapshot-summary-label">
            <ha-icon icon="mdi:camera"></ha-icon>
            Manual
          </span>
          <span class="snapshot-summary-value">${e}</span>
        </div>
        <div class="snapshot-summary-row">
          <span class="snapshot-summary-label">
            <ha-icon icon="mdi:clock-outline"></ha-icon>
            Auto
          </span>
          <span class="snapshot-summary-value">${i}</span>
        </div>
        <div class="snapshot-summary-row snapshot-summary-latest">
          <span class="snapshot-summary-label">
            <ha-icon icon="mdi:clock-check-outline"></ha-icon>
            Latest
          </span>
          <span class="snapshot-summary-value">${null!=r?r:"No snapshots yet"}</span>
        </div>
      </div>
    `}_renderSnapshotsList(){return this._snapshotsLoading?a.qy`<div class="ss-panel" style="text-align:center;padding:24px;"><ha-icon icon="mdi:loading" class="spinning" style="--mdc-icon-size:24px;color:var(--primary-color);"></ha-icon><br/>Loading snapshots…</div>`:0===this._snapshotsList.length?a.qy`<div class="ss-panel" style="text-align:center;"><ha-icon icon="mdi:camera-off" style="--mdc-icon-size:32px;color:var(--secondary-text-color);opacity:0.5;"></ha-icon><p style="margin:8px 0 0;color:var(--secondary-text-color);font-size:13px;">No snapshots yet. Create your first one above.</p></div>`:a.qy`
      <div class="snapshots-list">
        ${this._snapshotsList.map(t=>a.qy`
          <div class="snapshot-item">
            <div class="snapshot-icon ${"auto"===t.type?"auto":"manual"}">
              <ha-icon icon=${"auto"===t.type?"mdi:clock-outline":"mdi:camera"}></ha-icon>
            </div>
            <div class="snapshot-info">
              <h5>${"auto"===t.type?"Auto Snapshot":"Manual Snapshot"}</h5>
              <p>${this._formatSnapshotDate(t.created||t.date||"")}</p>
            </div>
            <div class="snapshot-meta">
              <span class="card-count">${t.card_count||"?"} cards</span>
            </div>
          </div>
        `)}
      </div>
    `}_renderSnapshotSettingsPanel(){return this._ssLoading?a.qy`<div class="ss-panel" style="text-align:center;padding:24px;"><ha-icon icon="mdi:loading" class="spinning" style="--mdc-icon-size:24px;color:var(--primary-color);"></ha-icon><br/>Loading settings…</div>`:a.qy`
      <div class="ss-panel">
        <h4><ha-icon icon="mdi:clock-check-outline"></ha-icon> Auto-Snapshot Schedule</h4>

        <div class="ss-row">
          <span class="ss-label">Enabled</span>
          <ha-switch
            .checked=${this._ssEnabled}
            @change=${t=>this._ssEnabled=t.target.checked}
          ></ha-switch>
        </div>

        <div class="ss-row">
          <span class="ss-label">Time</span>
          <input
            type="time"
            class="ss-input"
            .value=${this._ssTime}
            @input=${t=>this._ssTime=t.target.value}
          />
        </div>

        <div class="ss-row">
          <span class="ss-label">Timezone</span>
          <select
            class="ss-input"
            .value=${this._ssTimezone}
            @change=${t=>this._ssTimezone=t.target.value}
          >
            ${["UTC","America/New_York","America/Chicago","America/Denver","America/Los_Angeles","America/Phoenix","America/Anchorage","Pacific/Honolulu","Europe/London","Europe/Paris","Europe/Berlin","Europe/Rome","Asia/Tokyo","Asia/Shanghai","Asia/Kolkata","Australia/Sydney"].map(t=>a.qy`<option value=${t} ?selected=${this._ssTimezone===t}>${t.replace(/_/g," ")}</option>`)}
          </select>
        </div>

        <div class="ss-actions">
          <button class="ss-save-btn" ?disabled=${this._ssLoading} @click=${this._saveSnapshotSettings}>
            <ha-icon icon="mdi:content-save" style="--mdc-icon-size:16px;"></ha-icon>
            Save Settings
          </button>
          <button class="ss-cancel-btn" @click=${()=>this._snapshotSettingsOpen=!1}>
            Cancel
          </button>
        </div>
      </div>
    `}_renderProSettings(){return a.qy`
      <div class="tools-section" style="border:2px solid var(--primary-color);">
        <div class="section-header">
          <div class="header-icon"><ha-icon icon="mdi:cog"></ha-icon></div>
          <div class="header-content">
            <h3>Pro Settings</h3>
            <p>Exclusive settings for Ultra Card Pro subscribers</p>
          </div>
        </div>
        <div class="pro-setting-item">
          <div class="setting-icon-wrap">
            <ha-icon icon="mdi:card-remove-outline"></ha-icon>
          </div>
          <div class="setting-body">
            <h4>Start with Empty Card</h4>
            <p>When adding a new Ultra Card, start with an empty layout instead of the default text and image modules</p>
          </div>
          <div class="setting-toggle">
            <ha-switch
              .checked=${this._getSkipDefaultModules()}
              @change=${this._handleSkipDefaultModulesChange}
            ></ha-switch>
          </div>
        </div>
      </div>
    `}_renderProSupport(){return a.qy`
      <div class="tools-section">
        <div class="section-header">
          <div class="header-icon" style="background:#5865F2;">
            <ha-icon icon="mdi:forum"></ha-icon>
          </div>
          <div class="header-content">
            <h3>Pro Support</h3>
            <p>Priority support for Pro subscribers</p>
          </div>
        </div>
        <div class="discord-card">
          <div class="discord-icon">
            <ha-icon icon="mdi:forum"></ha-icon>
          </div>
          <div class="discord-body">
            <h4>Chat with Us on Discord</h4>
            <p>Get direct priority support, share feedback, and connect with the Ultra Card community.</p>
          </div>
          <a
            class="discord-btn"
            href="https://discord.com/users/915385171396689921"
            target="_blank"
            rel="noopener"
          >
            <ha-icon icon="mdi:chat"></ha-icon>
            Message Me
          </a>
        </div>
      </div>
    `}_renderUpgradePrompt(){return a.qy`
      <div class="upgrade-card">
        <div class="upgrade-icon">
          <ha-icon icon="mdi:star-shooting"></ha-icon>
        </div>
        <h3>Unlock Pro Features</h3>
        <p>Get export, import, manual backups, dashboard snapshots, and more for all your cards.</p>
        <ul class="features-checklist">
          <li><ha-icon icon="mdi:check"></ha-icon> Export & import full card configs</li>
          <li><ha-icon icon="mdi:check"></ha-icon> 30 manual backups across all cards</li>
          <li><ha-icon icon="mdi:check"></ha-icon> Dashboard snapshots & auto-snapshots</li>
          <li><ha-icon icon="mdi:check"></ha-icon> Name your cards and backups</li>
          <li><ha-icon icon="mdi:check"></ha-icon> Priority support</li>
        </ul>
        <a
          class="upgrade-btn"
          href=${"https://ultracard.io/product/ultra-card-pro/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ha-icon icon="mdi:star"></ha-icon>
          Upgrade to Pro
        </a>
      </div>
    `}_renderFeaturesGrid(){return a.qy`
      <div class="tools-section">
        <div class="section-header">
          <div class="header-icon" style="background:linear-gradient(135deg,#f093fb,#f5576c);">
            <ha-icon icon="mdi:flash"></ha-icon>
          </div>
          <div class="header-content">
            <h3>Pro Features</h3>
            <p>Available when editing your cards</p>
          </div>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon sync"><ha-icon icon="mdi:sync"></ha-icon></div>
            <div class="feature-info"><h4>Cloud Sync</h4><p>Sync card configs across all your devices automatically</p></div>
          </div>
          <div class="feature-card">
            <div class="feature-icon backup"><ha-icon icon="mdi:cloud-upload"></ha-icon></div>
            <div class="feature-info"><h4>Cloud Backups</h4><p>Manual and automatic backups with version history</p></div>
          </div>
          <div class="feature-card">
            <div class="feature-icon presets"><ha-icon icon="mdi:palette"></ha-icon></div>
            <div class="feature-info"><h4>Pro Modules</h4><p>Access exclusive premium modules and templates</p></div>
          </div>
          <div class="feature-card">
            <div class="feature-icon support"><ha-icon icon="mdi:face-agent"></ha-icon></div>
            <div class="feature-info"><h4>Priority Support</h4><p>Get help faster with priority support access</p></div>
          </div>
        </div>
      </div>
    `}_getSkipDefaultModules(){try{return"true"===localStorage.getItem("ultra-card-skip-default-modules")}catch(t){return!1}}_handleSkipDefaultModulesChange(t){const e=t.target.checked;try{localStorage.setItem("ultra-card-skip-default-modules",String(e)),this._showToast(e?"New cards will start empty":"New cards will use default modules")}catch(t){}}_handleExportDashboard(){var t,e,i,a,o;try{const r=null===(i=null===(e=null===(t=this.hass)||void 0===t?void 0:t.panels)||void 0===e?void 0:e.lovelace)||void 0===i?void 0:i.config,s={views:(null==r?void 0:r.views)||[],dashboard_path:(null==r?void 0:r.dashboard_path)||"default",exported_at:(new Date).toISOString(),exported_by:(null===(a=this.auth)||void 0===a?void 0:a.display_name)||(null===(o=this.auth)||void 0===o?void 0:o.username)||"Unknown"},n=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),c=URL.createObjectURL(n),l=document.createElement("a");l.href=c,l.download=`dashboard-export-${Date.now()}.json`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(c),this._showToast("Dashboard exported")}catch(t){console.error("Dashboard export failed:",t),this._showToast("Failed to export dashboard")}}_handleImportDashboard(){const t=document.createElement("input");t.type="file",t.accept=".json",t.onchange=async t=>{var e;try{const i=null===(e=t.target.files)||void 0===e?void 0:e[0];if(!i)return;const a=await i.text(),o=JSON.parse(a);if(!o.views||!Array.isArray(o.views))return void this._showToast("Invalid dashboard file");this._showToast(`Read ${o.views.length} views — use HA raw editor to apply`)}catch(t){console.error("Dashboard import failed:",t),this._showToast("Failed to read dashboard file")}},t.click()}_ensureSnapshotInit(){v.A.initialize(this.hass,"https://ultracard.io")}async _handleCreateSnapshot(){var t;this._creatingSnapshot=!0;try{this._ensureSnapshotInit();const e=await v.A.createSnapshot(),i=(null===(t=null==e?void 0:e.snapshot_data)||void 0===t?void 0:t.card_count)||0;this._showToast(`Snapshot created (${i} card${1!==i?"s":""})`),await this._loadSnapshotsList()}catch(t){console.error("Snapshot failed:",t),this._showToast((null==t?void 0:t.message)||"Failed to create snapshot")}finally{this._creatingSnapshot=!1}}async _handleViewSnapshots(){this._snapshotsListOpen?this._snapshotsListOpen=!1:(this._snapshotsListOpen=!0,await this._loadSnapshotsList())}async _loadSnapshotsList(){this._snapshotsLoading=!0;try{this._ensureSnapshotInit(),this._snapshotsList=await v.A.listSnapshots(20)}catch(t){console.error("List snapshots failed:",t),this._showToast((null==t?void 0:t.message)||"Failed to load snapshots"),this._snapshotsList=[]}finally{this._snapshotsLoading=!1,this._snapshotsSummaryLoaded=!0}}async _handleSnapshotSettings(){if(this._snapshotSettingsOpen)this._snapshotSettingsOpen=!1;else{this._ssLoading=!0,this._snapshotSettingsOpen=!0;try{this._ensureSnapshotInit();const t=await v.A.getSettings();this._ssEnabled=t.enabled,this._ssTime=t.time||"03:00",this._ssTimezone=t.timezone||Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch(t){console.error("Failed to load settings:",t),this._showToast((null==t?void 0:t.message)||"Failed to load snapshot settings")}finally{this._ssLoading=!1}}}async _saveSnapshotSettings(){this._ssLoading=!0;try{this._ensureSnapshotInit(),await v.A.updateSettings({enabled:this._ssEnabled,time:this._ssTime,timezone:this._ssTimezone}),this._ssEnabled?y.D.start():y.D.stop(),this._showToast("Snapshot settings saved"),this._snapshotSettingsOpen=!1}catch(t){console.error("Failed to save settings:",t),this._showToast((null==t?void 0:t.message)||"Failed to save settings")}finally{this._ssLoading=!1}}_formatSnapshotDate(t){try{return new Date(t).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch(e){return t}}};x.styles=[r.z,a.AH`
      :host {
        display: block;
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .spinning {
        animation: spin 1s linear infinite;
      }

      /* Integration status card */
      .integration-status {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        padding: 20px;
        border-radius: 14px;
        margin-bottom: 24px;
      }

      .integration-status.authenticated {
        background: linear-gradient(135deg, rgba(76, 175, 80, 0.08), rgba(76, 175, 80, 0.02));
        border: 1px solid rgba(76, 175, 80, 0.2);
      }

      .integration-status.not-configured {
        background: linear-gradient(135deg, rgba(255, 152, 0, 0.08), rgba(255, 152, 0, 0.02));
        border: 1px solid rgba(255, 152, 0, 0.2);
      }

      .integration-status.not-installed {
        background: linear-gradient(135deg, rgba(var(--rgb-primary-color, 3, 169, 244), 0.06), transparent);
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
      }

      .status-icon-wrap {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .status-icon-wrap.success {
        background: rgba(76, 175, 80, 0.15);
      }

      .status-icon-wrap.success ha-icon {
        color: #4caf50;
        --mdc-icon-size: 24px;
      }

      .status-icon-wrap.warning {
        background: rgba(255, 152, 0, 0.15);
      }

      .status-icon-wrap.warning ha-icon {
        color: #ff9800;
        --mdc-icon-size: 24px;
      }

      .status-icon-wrap.info {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
      }

      .status-icon-wrap.info ha-icon {
        color: var(--primary-color);
        --mdc-icon-size: 24px;
      }

      .status-body {
        flex: 1;
        min-width: 0;
      }

      .status-body h4 {
        margin: 0 0 4px 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .status-body p {
        margin: 0 0 4px 0;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }

      .status-body a {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
      }

      .status-body a:hover {
        text-decoration: underline;
      }

      .status-note {
        font-size: 12px;
        opacity: 0.7;
        margin-top: 6px;
      }

      /* Pro Banner */
      .pro-banner {
        position: relative;
        padding: 28px;
        border-radius: 16px;
        margin-bottom: 24px;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .pro-banner::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0.12;
        background: radial-gradient(circle at 80% 20%, white 0%, transparent 60%);
      }

      .pro-banner.pro {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white;
        box-shadow: 0 8px 24px rgba(245, 87, 108, 0.3);
      }

      .pro-banner.free {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        box-shadow: 0 8px 24px rgba(102, 126, 234, 0.25);
      }

      .pro-banner.disconnected {
        background: linear-gradient(135deg, #546e7a 0%, #37474f 100%);
        color: white;
        box-shadow: 0 8px 24px rgba(84, 110, 122, 0.25);
      }

      .banner-icon-wrap {
        width: 56px;
        height: 56px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .banner-icon-wrap ha-icon {
        --mdc-icon-size: 30px;
        color: white;
      }

      .banner-content {
        flex: 1;
        position: relative;
        z-index: 1;
      }

      .banner-content h3 {
        margin: 0;
        font-size: 22px;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .banner-content h3 ha-icon {
        --mdc-icon-size: 22px;
      }

      .banner-content p {
        margin: 4px 0 0;
        font-size: 14px;
        opacity: 0.9;
      }

      .banner-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 18px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.5px;
        position: relative;
        z-index: 1;
      }

      .banner-badge ha-icon {
        --mdc-icon-size: 16px;
      }

      .banner-side {
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
        z-index: 1;
      }

      .banner-upgrade-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 42px;
        padding: 0 18px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.96);
        color: #5b46b1;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
        white-space: nowrap;
        box-shadow: 0 10px 24px rgba(24, 35, 52, 0.18);
      }

      .banner-upgrade-btn:hover {
        background: white;
        transform: translateY(-1px);
      }

      .banner-upgrade-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      @media (max-width: 720px) {
        .pro-banner {
          flex-direction: column;
          align-items: stretch;
        }

        .banner-side {
          flex-direction: column;
          align-items: stretch;
        }

        .banner-badge,
        .banner-upgrade-btn {
          justify-content: center;
        }
      }

      /* Account card */
      .account-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 24px;
        margin-bottom: 24px;
      }

      .account-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.04));
        font-size: 14px;
      }

      .account-row:last-child {
        border-bottom: none;
      }

      .account-label {
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .account-value {
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .tier-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 3px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .tier-badge.pro {
        background: linear-gradient(135deg, #f093fb, #f5576c);
        color: white;
      }

      .tier-badge.free {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
        color: var(--secondary-text-color);
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
      }

      .status-dot.active {
        background: #4caf50;
        box-shadow: 0 0 6px rgba(76, 175, 80, 0.4);
      }

      .status-dot.inactive {
        background: var(--disabled-text-color, #999);
      }

      /* Pro tools section */
      .tools-section {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 24px;
        margin-bottom: 24px;
      }

      .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 12px;
      }

      @media (max-width: 600px) {
        .tools-grid {
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }
      }

      .tool-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 10px;
        padding: 20px 14px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        font: inherit;
        color: inherit;
      }

      .tool-card:hover {
        border-color: var(--primary-color);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
      }

      .tool-card:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }

      .tool-icon {
        width: 44px;
        height: 44px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .tool-icon ha-icon {
        --mdc-icon-size: 22px;
        color: white;
      }

      .tool-icon.export { background: linear-gradient(135deg, #2196f3, #42a5f5); }
      .tool-icon.import { background: linear-gradient(135deg, #4caf50, #66bb6a); }
      .tool-icon.backup { background: linear-gradient(135deg, #ff9800, #ffb74d); }
      .tool-icon.restore { background: linear-gradient(135deg, #9c27b0, #ba68c8); }
      .tool-icon.history { background: linear-gradient(135deg, #607d8b, #90a4ae); }
      .tool-icon.snapshot { background: linear-gradient(135deg, #e91e63, #f06292); }
      .tool-icon.settings { background: linear-gradient(135deg, #795548, #a1887f); }

      .tool-content h4 {
        margin: 0;
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .tool-content p {
        margin: 2px 0 0;
        font-size: 11px;
        color: var(--secondary-text-color);
        line-height: 1.3;
      }

      /* Snapshot summary below dashboard tools */
      .snapshot-summary {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 16px 24px;
        margin-top: 16px;
        padding: 14px 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        border-radius: 10px;
        font-size: 13px;
      }

      .snapshot-summary-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .snapshot-summary-label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .snapshot-summary-label ha-icon {
        --mdc-icon-size: 18px;
        color: var(--primary-color);
      }

      .snapshot-summary-value {
        color: var(--primary-text-color);
        font-weight: 600;
      }

      .snapshot-summary-latest .snapshot-summary-value {
        font-weight: 500;
        font-size: 12px;
      }

      /* Status info bars */
      .tools-status {
        margin-top: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 500;
      }

      .tools-status.info {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.06);
        color: var(--primary-color);
      }

      .tools-status.warning {
        background: rgba(255, 152, 0, 0.08);
        color: #f57c00;
      }

      .tools-status.success {
        background: rgba(76, 175, 80, 0.08);
        color: #4caf50;
      }

      .tools-status ha-icon {
        --mdc-icon-size: 16px;
        flex-shrink: 0;
      }

      /* Upgrade prompt for free users */
      .upgrade-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 2px solid var(--primary-color);
        border-radius: 16px;
        padding: 28px;
        margin-bottom: 24px;
        text-align: center;
      }

      .upgrade-icon {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(240, 147, 251, 0.12), rgba(245, 87, 108, 0.12));
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 16px;
      }

      .upgrade-icon ha-icon {
        --mdc-icon-size: 32px;
        color: #f5576c;
      }

      .upgrade-card h3 {
        margin: 0 0 8px 0;
        font-size: 20px;
        font-weight: 700;
        color: var(--primary-text-color);
      }

      .upgrade-card > p {
        margin: 0 0 20px 0;
        font-size: 14px;
        color: var(--secondary-text-color);
        line-height: 1.5;
      }

      .features-checklist {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: left;
        max-width: 380px;
        margin: 0 auto 24px;
      }

      .features-checklist li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        color: var(--primary-text-color);
        list-style: none;
      }

      .features-checklist li ha-icon {
        --mdc-icon-size: 18px;
        color: #4caf50;
        flex-shrink: 0;
      }

      .upgrade-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 14px 32px;
        border: none;
        border-radius: 12px;
        background: linear-gradient(135deg, #f093fb, #f5576c);
        color: white;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
      }

      .upgrade-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(245, 87, 108, 0.35);
        filter: brightness(1.05);
      }

      .upgrade-btn ha-icon {
        --mdc-icon-size: 20px;
      }

      /* Not installed CTA */
      .install-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 16px;
        padding: 32px;
        text-align: center;
        margin-bottom: 24px;
      }

      .install-card .cta-icon {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
      }

      .install-card .cta-icon ha-icon {
        --mdc-icon-size: 36px;
        color: var(--primary-color);
      }

      .install-card h3 {
        margin: 0 0 8px 0;
        font-size: 20px;
        font-weight: 700;
        color: var(--primary-text-color);
      }

      .install-card > p {
        margin: 0 0 8px 0;
        font-size: 14px;
        color: var(--secondary-text-color);
        line-height: 1.5;
        max-width: 480px;
        margin-left: auto;
        margin-right: auto;
      }

      .benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 12px;
        margin: 24px 0;
        text-align: left;
      }

      .benefit-item {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 12px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border-radius: 10px;
      }

      .benefit-item ha-icon {
        --mdc-icon-size: 20px;
        color: #4caf50;
        margin-top: 1px;
        flex-shrink: 0;
      }

      .benefit-item strong {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin-bottom: 2px;
      }

      .benefit-item span {
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.3;
      }

      .install-steps {
        text-align: left;
        max-width: 420px;
        margin: 0 auto 24px;
        padding: 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border-radius: 10px;
      }

      .install-steps h5 {
        margin: 0 0 10px 0;
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .install-steps ol {
        margin: 0;
        padding-left: 20px;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.8;
      }

      .install-steps ol strong {
        color: var(--primary-text-color);
      }

      .cta-buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .cta-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        border-radius: 10px;
        font-weight: 600;
        font-size: 14px;
        text-decoration: none;
        transition: all 0.2s ease;
        cursor: pointer;
        border: none;
      }

      .cta-btn.primary {
        background: var(--primary-color);
        color: white;
      }

      .cta-btn.primary:hover {
        filter: brightness(1.1);
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      }

      .cta-btn.secondary {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        color: var(--primary-text-color);
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      }

      .cta-btn.secondary:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }

      .cta-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      /* Features grid */
      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 280px));
        justify-content: center;
        gap: 14px;
      }

      .feature-card {
        display: flex;
        align-items: flex-start;
        gap: 14px;
        padding: 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border-radius: 12px;
        transition: all 0.2s ease;
      }

      .feature-card:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      }

      .feature-icon {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .feature-icon ha-icon {
        --mdc-icon-size: 20px;
        color: white;
      }

      .feature-icon.sync { background: linear-gradient(135deg, #2196f3, #42a5f5); }
      .feature-icon.backup { background: linear-gradient(135deg, #ff9800, #ffb74d); }
      .feature-icon.presets { background: linear-gradient(135deg, #e91e63, #f06292); }
      .feature-icon.support { background: linear-gradient(135deg, #4caf50, #66bb6a); }

      .feature-info h4 {
        margin: 0;
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .feature-info p {
        margin: 2px 0 0;
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }

      /* Pro settings */
      .pro-setting-item {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        padding: 16px;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
        border-radius: 10px;
        transition: all 0.2s ease;
      }

      .pro-setting-item:hover {
        background: var(--divider-color, rgba(0, 0, 0, 0.06));
      }

      .setting-icon-wrap {
        width: 44px;
        height: 44px;
        min-width: 44px;
        background: linear-gradient(135deg, var(--primary-color, #03a9f4), #0288d1);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 3px 8px rgba(3, 169, 244, 0.25);
      }

      .setting-icon-wrap ha-icon {
        --mdc-icon-size: 24px;
        color: white;
      }

      .setting-body {
        flex: 1;
        min-width: 0;
      }

      .setting-body h4 {
        margin: 0 0 4px 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .setting-body p {
        margin: 0;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }

      .setting-toggle {
        padding-top: 4px;
      }

      /* Discord support section */
      .discord-card {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 20px;
        background: linear-gradient(135deg, rgba(88, 101, 242, 0.08), rgba(88, 101, 242, 0.02));
        border: 1px solid rgba(88, 101, 242, 0.2);
        border-radius: 14px;
        transition: all 0.2s ease;
      }

      .discord-card:hover {
        border-color: rgba(88, 101, 242, 0.4);
        box-shadow: 0 4px 16px rgba(88, 101, 242, 0.1);
      }

      .discord-icon {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        background: #5865F2;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        box-shadow: 0 4px 12px rgba(88, 101, 242, 0.3);
      }

      .discord-icon ha-icon {
        --mdc-icon-size: 26px;
        color: white;
      }

      .discord-body {
        flex: 1;
        min-width: 0;
      }

      .discord-body h4 {
        margin: 0 0 4px;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .discord-body p {
        margin: 0;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }

      .discord-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 10px 20px;
        background: #5865F2;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.2s ease;
        flex-shrink: 0;
        white-space: nowrap;
      }

      .discord-btn:hover {
        background: #4752C4;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(88, 101, 242, 0.35);
      }

      .discord-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      /* Snapshot settings inline panel */
      .ss-panel {
        margin-top: 16px;
        padding: 20px;
        background: var(--secondary-background-color, rgba(0,0,0,0.03));
        border-radius: 12px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.08));
        animation: fadeSlideIn 0.2s ease-out;
      }

      .ss-panel h4 {
        margin: 0 0 16px 0;
        font-size: 15px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-text-color);
      }

      .ss-panel h4 ha-icon { --mdc-icon-size: 20px; color: var(--primary-color); }

      .ss-row {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 14px;
      }

      .ss-row:last-child { margin-bottom: 0; }

      .ss-label {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        min-width: 80px;
      }

      .ss-input {
        padding: 8px 12px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        border-radius: 8px;
        background: var(--primary-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
        outline: none;
        box-sizing: border-box;
      }

      .ss-input:focus { border-color: var(--primary-color); }

      select.ss-input {
        cursor: pointer;
        min-width: 160px;
      }

      .ss-actions {
        display: flex;
        gap: 8px;
        margin-top: 16px;
      }

      .ss-save-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 18px;
        border: none;
        border-radius: 8px;
        background: var(--primary-color);
        color: white;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .ss-save-btn:hover:not(:disabled) { filter: brightness(1.1); }
      .ss-save-btn:disabled { opacity: 0.5; cursor: not-allowed; }

      .ss-cancel-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 18px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        border-radius: 8px;
        background: transparent;
        color: var(--secondary-text-color);
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .ss-cancel-btn:hover { border-color: var(--primary-color); color: var(--primary-color); }

      /* Snapshot list panel */
      .snapshots-list {
        margin-top: 16px;
        animation: fadeSlideIn 0.2s ease-out;
      }

      .snapshot-item {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 16px;
        background: var(--secondary-background-color, rgba(0,0,0,0.03));
        border-radius: 10px;
        margin-bottom: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.06));
        transition: all 0.2s ease;
      }

      .snapshot-item:hover {
        border-color: var(--primary-color);
      }

      .snapshot-icon {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .snapshot-icon.manual { background: linear-gradient(135deg, #e91e63, #f06292); }
      .snapshot-icon.auto { background: linear-gradient(135deg, #4caf50, #66bb6a); }

      .snapshot-icon ha-icon { --mdc-icon-size: 20px; color: white; }

      .snapshot-info { flex: 1; min-width: 0; }
      .snapshot-info h5 { margin: 0; font-size: 14px; font-weight: 600; color: var(--primary-text-color); }
      .snapshot-info p { margin: 2px 0 0; font-size: 12px; color: var(--secondary-text-color); }

      .snapshot-meta {
        text-align: right;
        font-size: 12px;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }

      .snapshot-meta .card-count {
        font-weight: 600;
        color: var(--primary-color);
      }
    `],f([(0,o.MZ)({attribute:!1})],x.prototype,"auth",void 0),f([(0,o.MZ)({attribute:!1})],x.prototype,"hass",void 0),f([(0,o.MZ)({attribute:!1})],x.prototype,"cloudUser",void 0),f([(0,o.wk)()],x.prototype,"_toastMsg",void 0),f([(0,o.wk)()],x.prototype,"_cloudUser",void 0),f([(0,o.wk)()],x.prototype,"_snapshotSettingsOpen",void 0),f([(0,o.wk)()],x.prototype,"_ssEnabled",void 0),f([(0,o.wk)()],x.prototype,"_ssTime",void 0),f([(0,o.wk)()],x.prototype,"_ssTimezone",void 0),f([(0,o.wk)()],x.prototype,"_ssLoading",void 0),f([(0,o.wk)()],x.prototype,"_snapshotsListOpen",void 0),f([(0,o.wk)()],x.prototype,"_snapshotsList",void 0),f([(0,o.wk)()],x.prototype,"_snapshotsLoading",void 0),f([(0,o.wk)()],x.prototype,"_creatingSnapshot",void 0),x=f([(0,o.EM)("hub-pro-tab")],x);var _=function(t,e,i,a){var o,r=arguments.length,s=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,a);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let w=class extends a.WF{constructor(){super(...arguments),this.auth=null,this.cloudUser=null,this._formMode="signin",this._username="",this._password="",this._email="",this._displayName="",this._loading=!1,this._error="",this._autoConfigNote="",this._syncStatus=null,this._syncCounts={colors:0,variables:0,presets:0,favorites:0},this._diagLoading=!1,this._diagError="",this._diagReport=null,this._billing=null,this._billingLoading=!1,this._billingError="",this._view="overview",this._billingRequested=!1}connectedCallback(){super.connectedCallback(),this._syncStatus=n.Q.getSyncStatus(),this._refreshCounts(),this._syncListener=t=>{this._syncStatus=t,this._refreshCounts()},n.Q.addListener(this._syncListener)}disconnectedCallback(){super.disconnectedCallback(),this._syncListener&&n.Q.removeListener(this._syncListener)}_refreshCounts(){var t,e,i,a;try{const o=JSON.parse(null!==(t=localStorage.getItem("ultra-card-favorite-colors"))&&void 0!==t?t:"[]"),r=JSON.parse(null!==(e=localStorage.getItem("ultra-card-custom-variables"))&&void 0!==e?e:"[]"),s=JSON.parse(null!==(i=localStorage.getItem("ultra-card-favorites"))&&void 0!==i?i:"[]"),n=JSON.parse(null!==(a=localStorage.getItem("ultra-card-presets"))&&void 0!==a?a:"[]");this._syncCounts={colors:Array.isArray(o)?o.length:0,variables:Array.isArray(r)?r.length:0,favorites:Array.isArray(s)?s.length:0,presets:Array.isArray(n)?n.length:0}}catch(t){this._syncCounts={colors:0,variables:0,presets:0,favorites:0}}}_formatSyncTime(t){if(!t)return"Never";const e=Date.now()-t.getTime();return e<6e4?"Just now":e<36e5?`${Math.floor(e/6e4)}m ago`:e<864e5?`${Math.floor(e/36e5)}h ago`:t.toLocaleDateString()}get _effectiveUser(){return s.xd.checkIntegrationAuth(this.hass)||this.cloudUser}_switchFormMode(t){this._formMode=t,this._error="",this._autoConfigNote=""}async _handleSignIn(t){t.preventDefault();const e=this._username.trim();if(e&&this._password){this._loading=!0,this._error="",this._autoConfigNote="";try{m(),await s.xd.loginViaHass(this.hass,e,this._password),this._username="",this._password=""}catch(t){this._error=(0,c.hc)(t instanceof Error?t.message:"","Login failed")}finally{this._loading=!1}}else this._error="Please enter your email and password"}async _handleRegister(t){if(t.preventDefault(),this._error="",this._autoConfigNote="",this._username.trim()&&this._email.trim()){this._loading=!0;try{const t=await s.xd.registerViaHass(this.hass,this._username.trim(),this._email.trim(),this._displayName.trim());this._username="",this._email="",this._displayName="",this._autoConfigNote=t||"Account created. Check your email inbox, junk, or spam for the ultracard.io message to finish setting your password, then come back here to sign in."}catch(t){this._error=t instanceof Error?t.message:"Registration failed. Please try again."}finally{this._loading=!1}}else this._error="Please fill in all required fields."}async _handleLogout(){m(),await s.xd.logoutViaHass(this.hass)}updated(){!this._billingRequested&&this._effectiveUser&&this._isHaAdmin()&&(this._billingRequested=!0,this._loadBilling())}async _loadBilling(){this._billingLoading=!0,this._billingError="";try{this._billing=await async function(){return u&&Date.now()-u.at<6e5?u.value:b||(b=async function(){var t;const[e,i]=await Promise.all([s.xd.authenticatedFetch(`${p}/subscription`),s.xd.authenticatedFetch(`${p}/subscription/invoices`)]);if(!e.ok){const t=e.status;throw new Error(0===t?"Billing details are unavailable right now":401===t||403===t?"Billing details require a Home Assistant administrator":`Billing details could not be loaded (HTTP ${t})`)}const a=await e.json();let o=[];if(i.ok){const t=await i.json();o=Array.isArray(null==t?void 0:t.invoices)?t.invoices:[]}return{tier:(null==a?void 0:a.tier)||"free",status:(null==a?void 0:a.status)||"unknown",woocommerce:null!==(t=null==a?void 0:a.woocommerce)&&void 0!==t?t:null,invoices:o}}().then(t=>(u={at:Date.now(),value:t},t)).finally(()=>{b=null}),b)}()}catch(t){this._billingError=t instanceof Error?t.message:"Could not load billing details"}finally{this._billingLoading=!1}}_billingStatusClass(t){const e=(t||"").toLowerCase();return["active","completed","paid","processing"].includes(e)?"ok":["on-hold","pending","pending-cancel"].includes(e)?"warn":["cancelled","expired","failed","refunded"].includes(e)?"bad":""}_renderBilling(){var t,e,i;const o=null===(t=this._billing)||void 0===t?void 0:t.woocommerce,r=null!==(i=null===(e=this._billing)||void 0===e?void 0:e.invoices)&&void 0!==i?i:[];if(!this._billingLoading&&!this._billingError&&!o&&0===r.length)return a.s6;const s="lifetime"===(null==o?void 0:o.billing_period)||"lifetime"===(null==o?void 0:o.status)?"":(null==o?void 0:o.billing_interval)&&"1"!==o.billing_interval?`every ${o.billing_interval} ${o.billing_period||"month"}s`:`/ ${(null==o?void 0:o.billing_period)||"month"}`,n=!(!o||"lifetime"!==o.billing_period&&"lifetime"!==o.status&&!o.lifetime);return a.qy`
      <div class="account-card">
        <h3>
          <ha-icon icon="mdi:credit-card-outline"></ha-icon>
          Billing
        </h3>
        ${this._billingLoading?a.qy`<p class="billing-note">Loading billing details…</p>`:this._billingError?a.qy`<p class="billing-note">
                ${this._billingError} —
                <a href="https://ultracard.io/my-account/" target="_blank" rel="noopener noreferrer">
                  manage billing at ultracard.io
                </a>
              </p>`:a.qy`
                ${o?a.qy`
                      <div class="billing-rows">
                        <div class="billing-row">
                          <span class="billing-label">Plan</span>
                          <span class="billing-value">
                            ${n?"Ultra Card Pro · Lifetime":`Ultra Card Pro · ${h(o.total,o.currency)} ${s}`}
                          </span>
                        </div>
                        <div class="billing-row">
                          <span class="billing-label">Status</span>
                          <span class="billing-pill ${this._billingStatusClass(n?"active":o.status)}">
                            ${n?"lifetime":o.status||"unknown"}
                          </span>
                        </div>
                        ${n?a.qy`
                              <div class="billing-row">
                                <span class="billing-label">Billing</span>
                                <span class="billing-value">For the life of Ultra Card</span>
                              </div>
                            `:a.qy`
                              <div class="billing-row">
                                <span class="billing-label">Next payment</span>
                                <span class="billing-value"
                                  >${g(o.next_payment_date)}</span
                                >
                              </div>
                            `}
                        <div class="billing-row">
                          <span class="billing-label">${n?"Since":"Last payment"}</span>
                          <span class="billing-value"
                            >${g(n&&o.start_date||o.last_payment_date)}</span
                          >
                        </div>
                        ${!n&&o.payment_method_title?a.qy`
                              <div class="billing-row">
                                <span class="billing-label">Payment method</span>
                                <span class="billing-value">${o.payment_method_title}</span>
                              </div>
                            `:a.s6}
                      </div>
                    `:a.s6}
                ${r.length>0?a.qy`
                      <div class="billing-invoices">
                        <div class="billing-invoices-title">Recent invoices</div>
                        ${r.slice(0,6).map(t=>a.qy`
                            <div class="billing-row invoice">
                              <span class="billing-value">${g(t.date)}</span>
                              <span class="billing-pill ${this._billingStatusClass(t.status)}">
                                ${t.status}
                              </span>
                              <span class="billing-value">${h(t.total,t.currency)}</span>
                              ${t.invoice_url?a.qy`
                                    <a
                                      class="billing-link"
                                      href=${t.invoice_url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      View
                                    </a>
                                  `:a.qy`<span></span>`}
                            </div>
                          `)}
                      </div>
                    `:a.s6}
                <div class="billing-actions">
                  ${(null==o?void 0:o.view_subscription_url)&&!n?a.qy`
                        <a
                          class="billing-btn"
                          href=${o.view_subscription_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ha-icon icon="mdi:autorenew"></ha-icon>
                          Manage subscription
                        </a>
                      `:a.s6}
                  ${n?a.s6:a.qy`
                        <a
                          class="billing-btn"
                          href="https://ultracard.io/pricing/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ha-icon icon="mdi:infinity"></ha-icon>
                          Go Lifetime
                        </a>
                      `}
                  <a
                    class="billing-btn"
                    href="https://ultracard.io/my-account/orders/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ha-icon icon="mdi:receipt"></ha-icon>
                    Order history
                  </a>
                </div>
                <p class="billing-note">
                  ${n?"Lifetime has no renewals. Pro stays yours for the life of Ultra Card.":"Payment changes and cancellations are completed securely on ultracard.io. Every Pro payment counts toward Lifetime."}
                </p>
              `}
      </div>
    `}async _runDiagnostics(t){if(this._isHaAdmin()){this._diagLoading=!0,this._diagError="";try{const e=await async function(t,e={}){if(!(null==t?void 0:t.callApi))throw new Error("Home Assistant API unavailable");const i=!1!==e.runConnectivity;try{const e=await t.callApi("POST","ultra_card_pro_cloud/diagnostics",{run_connectivity:i});return(0,c.nF)(Object.assign(Object.assign({},e),{source:"api",ultra_card_version:"3.14.2",connect_info:(0,l.fu)(t)}))}catch(e){const i=function(t){var e,i,a,o,r,s,n;const c=(0,l.fu)(t),d=null===(e=null==t?void 0:t.states)||void 0===e?void 0:e[l.$f],p=(null==d?void 0:d.attributes)||{},h="connected"===(null==d?void 0:d.state)&&!0===p.authenticated,g={generated_at:(new Date).toISOString(),source:"client_fallback",ultra_card_version:"3.14.2",capabilities:Object.assign({},c.capabilities||{}),connect_info:c,error:c.outdated?"Ultra Card Connect needs updating (required 1.6.0+). Sensor handshake and /diagnostics are missing on this install.":"Diagnostics API unavailable; report built from the auth sensor only.",entries:[{capabilities:Object.assign({},c.capabilities||{}),entry:{domain:"ultra_card_pro_cloud",has_username:Boolean(p.username)},coordinator:{authenticated:h,username:null!==(i=p.username)&&void 0!==i?i:null,email_redacted:"string"==typeof p.email&&p.email.includes("@")?`${String(p.email).slice(0,1)}***@${String(p.email).split("@")[1]}`:"",subscription_tier:null!==(a=p.subscription_tier)&&void 0!==a?a:null,subscription_status:null!==(o=p.subscription_status)&&void 0!==o?o:null,needs_reauth:Boolean(p.needs_reauth),last_poll:null!==(r=p.last_poll)&&void 0!==r?r:null,connected_at:null!==(s=p.connected_at)&&void 0!==s?s:null,token_present:!!h&&null,sensor_state:null!==(n=null==d?void 0:d.state)&&void 0!==n?n:null},connectivity:null}],panel:{manifest_present:!1}};return c.integrationVersion&&(g.integration_version=c.integrationVersion,g.entries[0].integration_version=c.integrationVersion),g}(t),a=function(t){var e,i,a,o,r;const s=t,n=null!==(i=null!==(e=null==s?void 0:s.status)&&void 0!==e?e:null==s?void 0:s.status_code)&&void 0!==i?i:null===(a=null==s?void 0:s.response)||void 0===a?void 0:a.status,l="string"==typeof(null===(o=null==s?void 0:s.body)||void 0===o?void 0:o.error)&&s.body.error||"string"==typeof(null===(r=null==s?void 0:s.body)||void 0===r?void 0:r.message)&&s.body.message||null;return 404===n?"Connect diagnostics API not found (404). Update Ultra Card Connect to 1.6.0+ and restart Home Assistant.":403===n?"Only Home Assistant administrators can run Connect diagnostics.":l?(0,c.hc)(l,l):"string"==typeof(null==s?void 0:s.message)&&s.message.trim()?(0,c.hc)(s.message,s.message):n?`Diagnostics request failed (${n})`:"Failed to load diagnostics"}(e);throw Object.assign(new Error(a),{code:"connect_diagnostics_unavailable",fallback:i,cause:e})}}(this.hass,{runConnectivity:!0});this._diagReport=e,t&&d(e)}catch(e){const i=null==e?void 0:e.fallback;i&&(this._diagReport=i,t&&d(i)),this._diagError=e instanceof Error?e.message:"Failed to load diagnostics"}finally{this._diagLoading=!1}}else this._diagError="Only Home Assistant administrators can run Connect diagnostics."}_renderDiagnostics(){var t,e,i,o,r;const s=(0,l.fu)(this.hass),n=this._effectiveUser,d=(null===(e=null===(t=this._diagReport)||void 0===t?void 0:t.entries)||void 0===e?void 0:e[0])||{},p=d.coordinator||{},h=d.connectivity||{},g="boolean"==typeof p.authenticated?p.authenticated:Boolean(n),u=!0===p.token_present?"Present (server-side)":!1===p.token_present?"Missing":g?"Managed by Connect":"Missing",b=!0===h.api||!0===h.bot_challenge||Array.isArray(h.errors)&&h.errors.length>0,m=h.api?"OK":h.bot_challenge?"Temporarily unavailable":(null===(i=h.errors)||void 0===i?void 0:i.length)?"Failed":"api"===(null===(o=this._diagReport)||void 0===o?void 0:o.source)?"Not tested":this._diagReport?"Unavailable (update Connect)":"Not tested yet",v=[{label:"Connect version",value:s.integrationVersion||(null===(r=this._diagReport)||void 0===r?void 0:r.integration_version)||(s.installed?"pre-1.6.0 (update required)":"not installed"),ok:s.installed?!s.outdated:void 0},{label:"Card version",value:"3.14.2"},{label:"Signed in",value:g?"Yes":"No",ok:!!g||void 0},{label:"Token",value:u,ok:!!g||void 0},{label:"Cloud reachability",value:m,ok:b?!0===h.api:void 0},{label:"Last success",value:"number"==typeof p.last_successful_age_seconds?`${Math.round(p.last_successful_age_seconds)}s ago`:p.last_poll||p.connected_at||"—"}],y=this._isHaAdmin();return a.qy`
      <div class="account-card">
        <h3>
          <ha-icon icon="mdi:stethoscope"></ha-icon>
          Connect diagnostics
        </h3>
        <p class="card-lead">
          Check authentication, cloud reachability, and integration version. Downloads never include
          passwords or JWT tokens.
        </p>
        <div class="diag-tiles">
          ${v.map(t=>a.qy`
              <div class="diag-tile">
                <div class="diag-tile-label">${t.label}</div>
                <div class="diag-tile-value ${!0===t.ok?"ok":!1===t.ok?"bad":""}">
                  ${!0===t.ok?a.qy`<ha-icon icon="mdi:check-circle"></ha-icon>`:!1===t.ok?a.qy`<ha-icon icon="mdi:alert-circle"></ha-icon>`:a.s6}
                  <span>${t.value}</span>
                </div>
              </div>
            `)}
        </div>
        ${this._diagError?a.qy`<div class="error-message diag-error">
              ${(0,c.hc)(this._diagError,this._diagError)}
            </div>`:""}
        ${h.bot_challenge||p.last_error?a.qy`<div class="error-message diag-error">
              ${(0,c.hc)(h.bot_challenge?(h.errors||[]).join(" "):p.last_error,c.Fv)}
            </div>`:""}
        <div class="diag-actions">
          <button
            class="sync-now-btn"
            ?disabled=${this._diagLoading||!y}
            title=${y?"":"Only Home Assistant administrators can run diagnostics"}
            @click=${()=>this._runDiagnostics(!1)}
          >
            <ha-icon
              icon="mdi:${this._diagLoading?"loading":"refresh"}"
              class="${this._diagLoading?"spin":""}"
            ></ha-icon>
            ${this._diagLoading?"Running…":"Run diagnostics"}
          </button>
          <button
            class="sync-now-btn"
            ?disabled=${this._diagLoading||!y}
            title=${y?"":"Only Home Assistant administrators can download diagnostics"}
            @click=${()=>this._runDiagnostics(!0)}
          >
            <ha-icon icon="mdi:download"></ha-icon>
            Download report
          </button>
        </div>
      </div>
    `}_isHaAdmin(){var t,e;return Boolean(null===(e=null===(t=this.hass)||void 0===t?void 0:t.user)||void 0===e?void 0:e.is_admin)}_renderAdminNotice(){return this._isHaAdmin()?a.s6:a.qy`
      <div class="admin-notice" role="note">
        <ha-icon icon="mdi:shield-account-outline"></ha-icon>
        <div>
          <strong>Home Assistant administrator required</strong>
          <p>
            Shared sign-in, cloud sync, and uploads through Ultra Card Connect are managed by
            HA administrators only. You can still use Hub presets, colors, and documentation.
          </p>
        </div>
      </div>
    `}render(){const t=this._effectiveUser;return t?this._renderAuthenticated(t):s.xd.isIntegrationInstalled(this.hass)?this._renderUnauthenticated():this._renderSetupGuide()}_renderSetupGuide(){return a.qy`
      <div class="account-card">
        <h3>
          <ha-icon icon="mdi:connection"></ha-icon>
          Connect Ultra Card
        </h3>
        <p class="card-lead">
          Ultra Card uses the <strong>Ultra Card Connect</strong> integration to securely
          store your account credentials in Home Assistant, so your login persists across
          any device and browser, with no local storage needed.
        </p>
        <div class="setup-steps">
          <div class="setup-step">
            <ha-icon icon="mdi:numeric-1-circle"></ha-icon>
            <span>Install <strong>Ultra Card Connect</strong> via HACS → Integrations</span>
          </div>
          <div class="setup-step">
            <ha-icon icon="mdi:numeric-2-circle"></ha-icon>
            <span>Add it under <strong>Settings → Integrations → Add Integration</strong>, or click below</span>
          </div>
          <div class="setup-step">
            <ha-icon icon="mdi:numeric-3-circle"></ha-icon>
            <span>Come back here to sign in. Your account stays signed in until you sign out</span>
          </div>
        </div>
        <a class="setup-cta" href="/config/integrations/integration/ultra_card_pro_cloud">
          <ha-icon icon="mdi:plus-circle"></ha-icon>
          Set Up Integration
        </a>
      </div>
      ${this._renderDiagnostics()}
    `}_renderAuthenticated(t){var e,i;const o="pro"===(null===(e=t.subscription)||void 0===e?void 0:e.tier)&&"active"===(null===(i=t.subscription)||void 0===i?void 0:i.status),r="tools"!==this._view||o?this._view:"overview",s=[{key:"overview",label:"Overview",icon:"mdi:account-circle"},...o?[{key:"tools",label:"Pro Tools",icon:"mdi:tools"}]:[],{key:"diagnostics",label:"Diagnostics",icon:"mdi:stethoscope"}];return a.qy`
      ${this._renderAdminNotice()}
      <div class="account-subnav" role="tablist" aria-label="Account sections">
        ${s.map(t=>a.qy`
            <button
              role="tab"
              aria-selected=${r===t.key?"true":"false"}
              class=${r===t.key?"active":""}
              @click=${()=>{this._view=t.key}}
            >
              <ha-icon icon=${t.icon}></ha-icon>
              ${t.label}
            </button>
          `)}
      </div>
      ${"overview"===r?this._renderOverview(t,o):"tools"===r?a.qy`<hub-pro-tab
              .hass=${this.hass}
              .auth=${this.auth}
              .cloudUser=${this.cloudUser}
            ></hub-pro-tab>`:this._renderDiagnostics()}
    `}_renderOverview(t,e){var i;return a.qy`
      <div class="account-card">
        <h3>
          <ha-icon icon="mdi:account-circle"></ha-icon>
          Account
        </h3>
        <div class="user-info">
          <div class="user-info-row">
            <ha-icon icon="mdi:account"></ha-icon>
            <span>${t.displayName||t.username}</span>
          </div>
          <div class="user-info-row">
            <ha-icon icon="mdi:email-outline"></ha-icon>
            <span>${t.email}</span>
          </div>
          ${null!=(null===(i=this.auth)||void 0===i?void 0:i.subscription_expires)?a.qy`
                <div class="user-info-row">
                  <ha-icon icon="mdi:calendar-refresh"></ha-icon>
                  <span>
                    Renews
                    ${new Date(1e3*this.auth.subscription_expires).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}
                  </span>
                </div>
              `:a.s6}
          <div class="tier-badge ${e?"pro":"free"}">
            ${e?a.qy`<ha-icon icon="mdi:star" style="--mdc-icon-size:14px"></ha-icon>`:""}
            ${e?"Pro":"Free"}
          </div>
        </div>

        ${this._renderSyncStats(e)}

        ${e?a.qy`
              <div class="manage-link">
                <a href="https://ultracard.io/dashboard/" target="_blank" rel="noopener noreferrer">
                  Manage account at ultracard.io
                </a>
              </div>
            `:a.s6}

        <button class="logout-btn" @click=${this._handleLogout}>Sign out</button>
      </div>
      ${this._renderBilling()}
      ${e?a.s6:a.qy`<hub-pro-tab
            .hass=${this.hass}
            .auth=${this.auth}
            .cloudUser=${this.cloudUser}
          ></hub-pro-tab>`}
    `}_renderSyncStats(t){var e,i,o,r;const s=this._syncStatus,c=null!==(e=null==s?void 0:s.isSyncing)&&void 0!==e&&e,l=this._formatSyncTime(null!==(i=null==s?void 0:s.lastColorsSync)&&void 0!==i?i:null),d=this._formatSyncTime(null!==(o=null==s?void 0:s.lastVariablesSync)&&void 0!==o?o:null),p=this._formatSyncTime(null!==(r=null==s?void 0:s.lastFavoritesSync)&&void 0!==r?r:null),h=[...n.Q.isColorSyncAvailable()?[{icon:"mdi:palette",label:"Colors",count:this._syncCounts.colors,lastSync:l}]:[],{icon:"mdi:variable",label:"Variables",count:this._syncCounts.variables,lastSync:d},{icon:"mdi:heart",label:"Favorites",count:this._syncCounts.favorites,lastSync:p},{icon:"mdi:view-dashboard",label:"Presets",count:this._syncCounts.presets,lastSync:"—",proOnly:!1}];return a.qy`
      <div class="sync-stats-section">
        <div class="sync-stats-header">
          <span class="sync-stats-title">
            <ha-icon icon="mdi:cloud-sync"></ha-icon>
            Cloud Sync
          </span>
          <span class="sync-stats-badge ${t?"pro":"free"}">
            ${t?"Pro":"Free"}
          </span>
        </div>

        <div class="sync-stats-grid">
          ${h.map(({icon:t,label:e,count:i,lastSync:o})=>a.qy`
            <div class="sync-stat-card">
              <div class="sync-stat-icon">
                <ha-icon icon=${t}></ha-icon>
              </div>
              <div class="sync-stat-body">
                <div class="sync-stat-count">${i}</div>
                <div class="sync-stat-label">${e}</div>
                ${"—"!==o?a.qy`
                  <div class="sync-stat-time">
                    <ha-icon icon="mdi:clock-outline"></ha-icon>
                    ${o}
                  </div>
                `:""}
              </div>
            </div>
          `)}
        </div>

        <button
          class="sync-now-btn"
          ?disabled=${c}
          @click=${async()=>{await n.Q.syncAll(),this._refreshCounts()}}
        >
          <ha-icon icon="mdi:${c?"loading":"cloud-upload"}" class="${c?"spin":""}"></ha-icon>
          ${c?"Syncing…":"Sync Now"}
        </button>
      </div>
    `}_renderUnauthenticated(){return a.qy`
      ${this._renderAdminNotice()}
      <div class="account-card">
        <h3>
          <ha-icon icon="mdi:login"></ha-icon>
          Sign in or create an account
        </h3>
        <p class="form-note form-lead">
          Sign in to cloud-save favorites and presets. Upgrade to Pro for full features.
        </p>

        <div class="form-tabs">
          <button
            class="${"signin"===this._formMode?"active":""}"
            @click=${()=>this._switchFormMode("signin")}
          >
            Sign In
          </button>
          <button
            class="${"register"===this._formMode?"active":""}"
            @click=${()=>this._switchFormMode("register")}
          >
            Create account
          </button>
        </div>

        ${"signin"===this._formMode?this._renderSignInForm():this._renderRegisterForm()}
      </div>
      ${this._renderDiagnostics()}
    `}_renderSignInForm(){return a.qy`
      <form class="form-section" @submit=${this._handleSignIn}>
        <div class="form-field">
          <label for="account-signin-username">Username or email</label>
          <input
            id="account-signin-username"
            type="text"
            .value=${this._username}
            @input=${t=>{this._username=t.target.value,this._error=""}}
            autocomplete="username"
            ?disabled=${this._loading}
          />
        </div>
        <div class="form-field">
          <label for="account-signin-password">Password</label>
          <input
            id="account-signin-password"
            type="password"
            .value=${this._password}
            @input=${t=>{this._password=t.target.value,this._error=""}}
            autocomplete="current-password"
            ?disabled=${this._loading}
          />
        </div>
        <p class="form-note">
          <a href="https://ultracard.io/wp-login.php?action=lostpassword" target="_blank" rel="noopener">
            Forgot password?
          </a>
        </p>
        ${this._error?a.qy`<p class="form-error">${this._error}</p>`:""}
        ${this._autoConfigNote?a.qy`<p class="form-note">${this._autoConfigNote}</p>`:""}
        <button type="submit" class="form-submit" ?disabled=${this._loading}>
          ${this._loading?a.qy`<ha-icon icon="mdi:loading" class="spinning"></ha-icon> Signing in…`:a.qy`<ha-icon icon="mdi:login"></ha-icon> Sign In`}
        </button>
      </form>
    `}_renderRegisterForm(){return a.qy`
      <form class="form-section" @submit=${this._handleRegister}>
        <div class="register-notice">
          <ha-icon icon="mdi:cloud-check"></ha-icon>
          <span>
            Create a free account to cloud-sync your Favorites, Colors &amp; Variables across devices.
            After you register, we will email you from ultracard.io so you can set your password.
          </span>
        </div>
        <div class="form-field">
          <label for="account-reg-display">Display name</label>
          <input
            id="account-reg-display"
            type="text"
            .value=${this._displayName}
            @input=${t=>{this._displayName=t.target.value,this._error="",this._autoConfigNote=""}}
            autocomplete="name"
          />
        </div>
        <div class="form-field">
          <label for="account-reg-email">Email</label>
          <input
            id="account-reg-email"
            type="email"
            .value=${this._email}
            @input=${t=>{this._email=t.target.value,this._error="",this._autoConfigNote=""}}
            autocomplete="email"
          />
        </div>
        <div class="form-field">
          <label for="account-reg-username">Username</label>
          <input
            id="account-reg-username"
            type="text"
            .value=${this._username}
            @input=${t=>{this._username=t.target.value,this._error="",this._autoConfigNote=""}}
            autocomplete="username"
          />
        </div>
        ${this._error?a.qy`<p class="form-error">${this._error}</p>`:""}
        ${this._autoConfigNote?a.qy`<p class="form-note">${this._autoConfigNote}</p>`:""}
        <button
          type="submit"
          class="form-submit-btn"
          ?disabled=${this._loading||!this._username.trim()||!this._email.trim()}
        >
          ${this._loading?a.qy`<ha-icon icon="mdi:loading" class="spin"></ha-icon> Creating account…`:a.qy`<ha-icon icon="mdi:email-fast"></ha-icon> Create Account`}
        </button>
      </form>
    `}};w.styles=[r.z,a.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
        padding-bottom: 60px;
      }

      .account-card {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 24px;
        margin-bottom: 24px;
      }

      .account-card h3 {
        margin: 0 0 16px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .account-card h3 ha-icon {
        --mdc-icon-size: 20px;
        color: var(--primary-color);
      }

      .form-tabs {
        display: flex;
        gap: 0;
        margin-bottom: 20px;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
      }

      .form-tabs button {
        padding: 10px 16px;
        border: none;
        background: none;
        color: var(--secondary-text-color);
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        margin-bottom: -1px;
        transition: color 0.2s ease;
      }

      .form-tabs button:hover {
        color: var(--primary-text-color);
      }

      .form-tabs button.active {
        color: var(--primary-color);
        border-bottom-color: var(--primary-color);
      }

      .form-section {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .form-field {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .form-field label {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .form-field input {
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
        background: var(--card-background-color);
        color: var(--primary-text-color);
        font-size: 14px;
        box-sizing: border-box;
      }

      .form-field input:focus {
        outline: none;
        border-color: var(--primary-color);
      }

      .form-submit {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 18px;
        border-radius: 8px;
        border: none;
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        font: inherit;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 4px;
        transition: filter 0.15s ease;
      }

      .form-submit:hover:not(:disabled) {
        filter: brightness(1.08);
      }

      .form-submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .form-submit ha-icon {
        --mdc-icon-size: 18px;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .spinning {
        animation: spin 0.8s linear infinite;
      }

      .form-error {
        font-size: 13px;
        color: var(--error-color, #db4437);
        margin-top: 4px;
      }

      .form-note {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }

      .form-note a {
        color: var(--primary-color);
        text-decoration: none;
      }

      .form-note a:hover {
        text-decoration: underline;
      }

      .user-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .user-info-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .user-info-row ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }

      .tier-badge {
        display: inline-flex;
        align-items: center;
        align-self: flex-start;
        gap: 4px;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.02em;
        margin-top: 8px;
      }

      .tier-badge.pro {
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: #fff;
      }

      .tier-badge.free {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.12);
        color: var(--primary-color);
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      }

      .upgrade-section {
        margin-top: 24px;
        padding-top: 24px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
      }

      .upgrade-section h4 {
        margin: 0 0 12px 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .upgrade-section p {
        margin: 0 0 16px 0;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.5;
      }

      .upgrade-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 20px;
        border-radius: 8px;
        border: none;
        background: linear-gradient(135deg, #f5576c, #f093fb);
        color: white;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: opacity 0.15s ease;
      }

      .upgrade-btn:hover {
        opacity: 0.95;
      }

      .upgrade-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      .manage-link {
        font-size: 13px;
        margin-top: 12px;
      }

      .manage-link a {
        color: var(--primary-color);
        text-decoration: none;
      }

      .admin-notice {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 14px 16px;
        margin-bottom: 20px;
        border-radius: 12px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);
        font-size: 13px;
        line-height: 1.5;
        color: var(--primary-text-color);
      }

      .admin-notice ha-icon {
        --mdc-icon-size: 22px;
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 2px;
      }

      .admin-notice strong {
        display: block;
        margin-bottom: 4px;
        font-size: 14px;
      }

      .admin-notice p {
        margin: 0;
        color: var(--secondary-text-color);
      }

      /* Password strength meter */
      .strength-meter {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 6px;
      }

      .strength-bar {
        display: flex;
        gap: 3px;
        flex: 1;
      }

      .strength-segment {
        height: 4px;
        flex: 1;
        border-radius: 2px;
        background: var(--divider-color, rgba(0, 0, 0, 0.12));
        transition: background 0.25s ease;
      }

      .strength-label {
        font-size: 11px;
        font-weight: 600;
        min-width: 58px;
        text-align: right;
        transition: color 0.2s ease;
      }

      /* Register notice */
      .register-notice {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.07);
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.2);
        border-radius: 8px;
        padding: 12px 14px;
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.5;
      }

      .register-notice ha-icon {
        --mdc-icon-size: 16px;
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 1px;
      }

      .form-submit-outline {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 18px;
        border-radius: 8px;
        border: 1px solid var(--primary-color);
        background: none;
        color: var(--primary-color);
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 4px;
        transition: all 0.15s ease;
      }

      .form-submit-outline:hover {
        background: var(--primary-color);
        color: white;
      }

      .form-submit-outline ha-icon {
        --mdc-icon-size: 18px;
      }

      .form-submit-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        padding: 11px 18px;
        border-radius: 8px;
        border: none;
        background: var(--primary-color);
        color: white;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        margin-top: 4px;
        transition: opacity 0.15s ease;
      }

      .form-submit-btn:hover:not(:disabled) {
        opacity: 0.88;
      }

      .form-submit-btn:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }

      .form-submit-btn ha-icon {
        --mdc-icon-size: 18px;
      }

      .spin {
        animation: spin 0.8s linear infinite;
      }

      .manage-link a:hover {
        text-decoration: underline;
      }

      .logout-btn {
        margin-top: 16px;
        padding: 8px 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: transparent;
        color: var(--secondary-text-color);
        font-size: 13px;
        cursor: pointer;
      }

      .logout-btn:hover {
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
        color: var(--primary-text-color);
      }

      /* Card description under an h3 */
      .card-lead {
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.55;
        margin: 0 0 16px;
      }

      /* Diagnostics tiles */
      .diag-tiles {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        margin-bottom: 16px;
      }

      .diag-tile {
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 10px;
        padding: 10px 12px;
        background: var(--secondary-background-color, transparent);
        min-width: 0;
      }

      .diag-tile-label {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        font-weight: 600;
      }

      .diag-tile-value {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
        overflow-wrap: anywhere;
      }

      .diag-tile-value ha-icon {
        --mdc-icon-size: 16px;
        flex-shrink: 0;
      }

      .diag-tile-value.ok {
        color: var(--success-color, #4caf50);
      }

      .diag-tile-value.bad {
        color: var(--error-color, #f44336);
      }

      .diag-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .diag-actions .sync-now-btn {
        width: auto;
        padding: 8px 14px;
      }

      .diag-error {
        margin-bottom: 12px;
      }

      /* Setup guide */
      .setup-steps {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .setup-step {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-size: 13px;
        line-height: 1.5;
      }

      .setup-step ha-icon {
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 1px;
        --mdc-icon-size: 20px;
      }

      .setup-cta {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 20px;
        padding: 9px 16px;
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        border-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        text-decoration: none;
        transition: filter 0.15s ease;
      }

      .setup-cta:hover {
        filter: brightness(1.08);
      }

      .setup-cta ha-icon {
        --mdc-icon-size: 16px;
      }

      .form-lead {
        margin: 0 0 16px 0;
      }

      /* ── Sync Stats ─────────────────────────────────────────────────────── */
      .sync-stats-section {
        margin: 16px 0 4px;
        padding: 14px;
        border-radius: 10px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.05);
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
      }

      .sync-stats-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
      }

      .sync-stats-title {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .sync-stats-title ha-icon {
        --mdc-icon-size: 16px;
        color: var(--primary-color);
      }

      .sync-stats-badge {
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 2px 8px;
        border-radius: 20px;
      }

      .sync-stats-badge.pro {
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: white;
      }

      .sync-stats-badge.free {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
        color: var(--primary-color);
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
      }

      .sync-stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 8px;
        margin-bottom: 12px;
      }

      .sync-stat-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 10px 6px 8px;
        border-radius: 8px;
        background: var(--card-background-color, var(--ha-card-background));
        border: 1px solid var(--divider-color, rgba(0,0,0,0.08));
        text-align: center;
        min-width: 0;
      }

      .sync-stat-icon ha-icon {
        --mdc-icon-size: 20px;
        color: var(--primary-color);
        opacity: 0.8;
      }

      .sync-stat-count {
        font-size: 22px;
        font-weight: 700;
        color: var(--primary-text-color);
        line-height: 1;
      }

      .sync-stat-label {
        font-size: 11px;
        font-weight: 500;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }

      .sync-stat-time {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        font-size: 10px;
        color: var(--secondary-text-color);
        opacity: 0.7;
        margin-top: 2px;
      }

      .sync-stat-time ha-icon {
        --mdc-icon-size: 11px;
      }

      .sync-now-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        width: 100%;
        padding: 8px 12px;
        border-radius: 7px;
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
        color: var(--primary-color);
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .sync-now-btn:hover:not(:disabled) {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.18);
      }

      .sync-now-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .sync-now-btn ha-icon {
        --mdc-icon-size: 16px;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .spin {
        animation: spin 0.8s linear infinite;
      }

      .account-subnav {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 20px;
      }

      .account-subnav button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        border-radius: 20px;
        background: transparent;
        color: var(--secondary-text-color);
        font: inherit;
        font-size: 13px;
        cursor: pointer;
        white-space: nowrap;
      }

      .account-subnav button ha-icon {
        --mdc-icon-size: 16px;
      }

      .account-subnav button:hover {
        border-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.4);
        color: var(--primary-text-color);
      }

      .account-subnav button.active {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
        border-color: rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
        color: var(--primary-color);
        font-weight: 600;
      }

      .billing-rows {
        margin-bottom: 4px;
      }

      .billing-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 9px 0;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
        font-size: 13px;
      }

      .billing-row.invoice {
        display: grid;
        grid-template-columns: 1.4fr auto 1fr auto;
        justify-items: start;
      }

      .billing-row.invoice > :nth-child(3) {
        justify-self: end;
      }

      .billing-row.invoice > :last-child {
        justify-self: end;
      }

      .billing-label {
        color: var(--secondary-text-color);
      }

      .billing-value {
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .billing-pill {
        padding: 2px 10px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 700;
        text-transform: capitalize;
        background: rgba(158, 158, 158, 0.15);
        color: var(--secondary-text-color);
      }

      .billing-pill.ok {
        background: rgba(76, 175, 80, 0.15);
        color: #4caf50;
      }

      .billing-pill.warn {
        background: rgba(255, 152, 0, 0.15);
        color: #ff9800;
      }

      .billing-pill.bad {
        background: rgba(244, 67, 54, 0.12);
        color: #f44336;
      }

      .billing-invoices {
        margin-top: 14px;
      }

      .billing-invoices-title {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
      }

      .billing-link {
        font-size: 12px;
        font-weight: 600;
        color: var(--primary-color);
        text-decoration: none;
      }

      .billing-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 16px;
      }

      .billing-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        border-radius: 7px;
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.3);
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
        color: var(--primary-color);
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
      }

      .billing-btn ha-icon {
        --mdc-icon-size: 16px;
      }

      .billing-note {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin: 12px 0 0;
        line-height: 1.5;
      }
    `],_([(0,o.MZ)({attribute:!1})],w.prototype,"hass",void 0),_([(0,o.MZ)({attribute:!1})],w.prototype,"auth",void 0),_([(0,o.MZ)({attribute:!1})],w.prototype,"cloudUser",void 0),_([(0,o.wk)()],w.prototype,"_formMode",void 0),_([(0,o.wk)()],w.prototype,"_username",void 0),_([(0,o.wk)()],w.prototype,"_password",void 0),_([(0,o.wk)()],w.prototype,"_email",void 0),_([(0,o.wk)()],w.prototype,"_displayName",void 0),_([(0,o.wk)()],w.prototype,"_loading",void 0),_([(0,o.wk)()],w.prototype,"_error",void 0),_([(0,o.wk)()],w.prototype,"_autoConfigNote",void 0),_([(0,o.wk)()],w.prototype,"_syncStatus",void 0),_([(0,o.wk)()],w.prototype,"_syncCounts",void 0),_([(0,o.wk)()],w.prototype,"_diagLoading",void 0),_([(0,o.wk)()],w.prototype,"_diagError",void 0),_([(0,o.wk)()],w.prototype,"_diagReport",void 0),_([(0,o.wk)()],w.prototype,"_billing",void 0),_([(0,o.wk)()],w.prototype,"_billingLoading",void 0),_([(0,o.wk)()],w.prototype,"_billingError",void 0),_([(0,o.wk)()],w.prototype,"_view",void 0),w=_([(0,o.EM)("hub-account-tab")],w)},7568(t,e,i){var a=i(378),o=i(9286),r=i(3045);const s="ultra-card-reviews",n="Color sync is not available yet — your colors are saved on this device only.";class c{constructor(){this._syncStatus={isEnabled:!1,lastSync:null,isSyncing:!1,pendingChanges:0,conflicts:[],lastFavoritesSync:null,lastColorsSync:null,lastVariablesSync:null},this._listeners=new Set,this._pendingChanges=new Map,this._loadSyncStatus(),this._loadPendingChanges(),this._setupAuthListener()}getSyncStatus(){return Object.assign({},this._syncStatus)}async setSyncEnabled(t){this._syncStatus.isEnabled=t,this._saveSyncStatus(),this._notifyListeners(),t&&a.xd.isAuthenticated()&&await this.syncAll()}async syncAll(){if(!a.xd.isAuthenticated())throw new Error("Cannot sync: not authenticated");this._syncStatus.isSyncing=!0,this._notifyListeners();try{const[t,e,i,a]=await Promise.all([this.syncFavorites(),this.syncFavoriteColors(),this.syncReviews(),this.syncVariables()]);return this._syncStatus.lastSync=new Date,this._syncStatus.pendingChanges=0,this._clearPendingChanges(),{favorites:t,colors:e,reviews:i,variables:a}}finally{this._syncStatus.isSyncing=!1,this._saveSyncStatus(),this._notifyListeners()}}async syncFavorites(){if(!a.xd.isAuthenticated())throw new Error("Cannot sync favorites: not authenticated");const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const e=this._getLocalFavorites(),i=await this._fetchRemoteFavorites(),{merged:a,conflicts:o}=await this._mergeFavorites(e,i),s=await this._uploadFavorites(a.filter(t=>t._needsUpload)),n=await this._downloadFavorites(a.filter(t=>t._needsDownload));t.success=!0,t.synced=s.length+n.length,t.conflicts=o.length,this._syncStatus.conflicts=[...this._syncStatus.conflicts,...o],this._syncStatus.lastFavoritesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),r.v&&console.log(`✅ Favorites sync completed: ${t.synced} synced, ${t.conflicts} conflicts`)}catch(e){console.error("❌ Favorites sync failed:",e),t.errors.push(e instanceof Error?e.message:"Unknown error")}return t}isColorSyncAvailable(){return!1}async syncFavoriteColors(){if(!a.xd.isAuthenticated())throw new Error("Cannot sync colors: not authenticated");return{success:!1,synced:0,conflicts:0,errors:[n],lastSync:(new Date).toISOString()}}async syncVariables(){const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{if(!a.xd.isAuthenticated())throw new Error("Not authenticated");const e=(0,o.bi)("ultra-card-custom-variables"),i=e?JSON.parse(e):[],s=await a.xd.authenticatedFetch(`${c.API_BASE}/custom-variables`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({variables:i})});if(s.ok){const e=await s.json();(null==e?void 0:e.variables)&&(0,o.FX)("ultra-card-custom-variables",JSON.stringify(e.variables)),t.success=!0,t.synced=i.length,this._syncStatus.lastVariablesSync=new Date,this._saveSyncStatus(),this._notifyListeners(),r.v&&console.log(`✅ Variables sync completed: ${t.synced} variables`)}else t.errors.push(`Variables sync failed: ${s.status} ${s.statusText}`),console.warn(`❌ Variables sync failed: ${s.status} ${s.statusText}`)}catch(e){const i=e instanceof Error?e.message:"Unknown error";console.warn("❌ Variables sync failed:",i),t.errors.push(i)}return t}async syncReviews(){if(!this._canSync())throw new Error("Cannot sync reviews: not authenticated");const t={success:!1,synced:0,conflicts:0,errors:[],lastSync:(new Date).toISOString()};try{const e=this._getLocalReviews(),i=await this._fetchRemoteReviews(),{merged:a,conflicts:o}=await this._mergeReviews(e,i),r=await this._uploadReviews(a.filter(t=>t._needsUpload)),s=await this._downloadReviews(a.filter(t=>t._needsDownload));t.success=!1,t.errors.push("Review sync is not implemented yet."),t.synced=r.length+s.length,t.conflicts=o.length}catch(e){console.error("❌ Reviews sync failed:",e),t.errors.push(e instanceof Error?e.message:"Unknown error")}return t}queueChange(t,e,i){if("color"===t&&!this.isColorSyncAvailable())return;const a=`${t}-${e}-${Date.now()}`;this._pendingChanges.set(a,{type:t,action:e,data:i,timestamp:Date.now()}),this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners(),this._canSync()&&navigator.onLine&&this._processPendingChanges().catch(console.error)}async resolveConflict(t,e){switch(this._syncStatus.conflicts=this._syncStatus.conflicts.filter(e=>e!==t),e){case"local":await this._uploadConflictResolution(t,t.local);break;case"remote":await this._downloadConflictResolution(t,t.remote);break;case"merge":const e=await this._mergeConflictData(t);await this._uploadConflictResolution(t,e)}this._saveSyncStatus(),this._notifyListeners()}addListener(t){this._listeners.add(t)}removeListener(t){this._listeners.delete(t)}_canSync(){return this._syncStatus.isEnabled&&a.xd.isAuthenticated()}_setupAuthListener(){a.xd.addListener(t=>{t?(this._syncStatus.isEnabled=!0,this._saveSyncStatus()):(this._syncStatus.isEnabled=!1,this._syncStatus.conflicts=[],this._clearPendingChanges(),this._saveSyncStatus()),this._notifyListeners()})}_notifyListeners(){this._listeners.forEach(t=>{try{t(this._syncStatus)}catch(t){console.error("Error in sync listener:",t)}})}_getLocalFavorites(){try{const t=(0,o.bi)("ultra-card-favorites");return t?JSON.parse(t):[]}catch(t){return[]}}async _fetchRemoteFavorites(){const t=await a.xd.authenticatedFetch(`${c.API_BASE}/favorites`);if(!t.ok)throw new Error(`Failed to fetch favorites: ${t.statusText}`);return t.json()}async _uploadFavorites(t){const e=[];for(const i of t)try{const t=await a.xd.authenticatedFetch(`${c.API_BASE}/favorites`,{method:"POST",body:JSON.stringify({name:i.name,description:i.description,row_data:JSON.stringify(i.row),tags:i.tags})});t.ok&&e.push(await t.json())}catch(t){console.error("Failed to upload favorite:",t)}return e}async _downloadFavorites(t){const e=t.map(t=>{let e=null;try{e=t.row_data?JSON.parse(t.row_data):null}catch(t){e=null}return{id:t.id,name:t.name,description:t.description,row:e,created:t.created,tags:t.tags}});if(0===e.length)return[];const i=this._getLocalFavorites(),a=new Map(i.filter(t=>t&&"string"==typeof t.id).map(t=>[t.id,t]));for(const t of e)a.set(t.id,Object.assign(Object.assign({},a.get(t.id)),t));const r=Array.from(a.values());if(r.length<i.length)return console.error("[UltraCard] Favorites merge would drop entries; keeping local store untouched."),[];(0,o.FX)("ultra-card-favorites",JSON.stringify(r));try{window.dispatchEvent(new CustomEvent("ultra-card-favorites-changed"))}catch(t){}return e}async _mergeFavorites(t,e){const i=[],a=[],o=new Map(e.map(t=>[t.id,t])),r=new Map(t.map(t=>[t.id,t]));for(const e of t){const t=o.get(e.id);if(t){const o=new Date(e.created||0).getTime(),r=new Date(t.updated).getTime();Math.abs(o-r)>1e3&&a.push({type:"favorite",local:e,remote:t,field:"updated"}),i.push(o>r?e:Object.assign(Object.assign({},this._convertCloudFavorite(t)),{_needsDownload:o<r}))}else i.push(Object.assign(Object.assign({},e),{_needsUpload:!0}))}for(const t of e)r.has(t.id)||i.push(Object.assign(Object.assign({},this._convertCloudFavorite(t)),{_needsDownload:!0}));return{merged:i,conflicts:a}}_convertCloudFavorite(t){let e=null;try{t.row_data?e="string"==typeof t.row_data?JSON.parse(t.row_data):t.row_data:t.data&&(e=t.data)}catch(t){e=null}return{id:t.id,name:t.name,description:t.description,row:e,created:t.created,tags:t.tags}}_getLocalColors(){try{const t=(0,o.bi)("ultra-card-favorite-colors");return t?JSON.parse(t):[]}catch(t){return[]}}async _fetchRemoteColors(){const t=await a.xd.authenticatedFetch(`${c.API_BASE}/colors`);if(!t.ok)throw new Error(`Failed to fetch colors: ${t.statusText}`);return t.json()}async _uploadColors(t){return[]}async _downloadColors(t){return[]}async _mergeColors(t,e){return{merged:[],conflicts:[]}}static _toWordPressPresetId(t){return String(t).replace(/^wp-/,"")}async submitReview(t,e){if(!a.xd.isAuthenticated())throw new Error("Authentication required to submit reviews");const i=c._toWordPressPresetId(t);if(!/^\d+$/.test(i))throw new Error("This preset cannot be rated.");const o=await a.xd.authenticatedFetch(`${c.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:i,rating:e})});if(!o.ok){const t=await o.json().catch(()=>({message:"Submit failed"}));throw new Error(t.message||`HTTP ${o.status}`)}const r=await o.json();return this._saveLocalReview(r),r}async uploadPresetPhoto(t){if(!a.xd.isAuthenticated())throw new Error("Authentication required to upload photos");const e=new FormData;e.append("photo",t,t.name);const i=`${c.API_BASE}/media`,o=await a.xd.authenticatedFetch(i,{method:"POST",body:e});if(!o.ok){const t=await o.json().catch(()=>null),e=(null==t?void 0:t.data)&&"object"==typeof t.data&&null!==t.data&&"message"in t.data?String(t.data.message):"",i="string"==typeof(null==t?void 0:t.message)&&t.message||"string"==typeof(null==t?void 0:t.error)&&t.error||e||`Upload failed (HTTP ${o.status})`;throw new Error(i)}return o.json()}async submitPreset(t,e,i,o){var r;if(!a.xd.isAuthenticated())throw new Error("Authentication required to submit presets");const s=new FormData;s.append("name",t.name),s.append("description",t.description),s.append("category",t.category),s.append("shortcode",t.shortcode),(null===(r=t.tags)||void 0===r?void 0:r.length)&&s.append("tags",t.tags.join(",")),t.source&&s.append("source",t.source),t.integrations&&s.append("integrations",t.integrations),t.card_settings&&Object.keys(t.card_settings).length>0&&s.append("card_settings",JSON.stringify(t.card_settings)),t.custom_variables&&t.custom_variables.length>0&&s.append("custom_variables",JSON.stringify(t.custom_variables)),o&&o>0&&s.append("featured_image_id",String(o)),(null==i?void 0:i.length)?i.forEach(t=>s.append("photo_ids[]",String(t))):(null==e?void 0:e.length)&&e.forEach((t,e)=>s.append(`photos[${e}]`,t,t.name));const n=await a.xd.authenticatedFetch(`${c.API_BASE}/presets`,{method:"POST",body:s});if(!n.ok){const t=await n.json().catch(()=>({message:"Submit failed"}));throw new Error(t.message||`HTTP ${n.status}`)}return n.json()}async fetchPresetCategories(){try{const t=await fetch(`${c.API_BASE}/preset-categories`);if(t.ok){const e=await t.json();if(Array.isArray(e)&&e.length>0)return e}}catch(t){}return[{value:"layout",label:"Layout"},{value:"content",label:"Content"},{value:"data",label:"Data"},{value:"interactive",label:"Controls"},{value:"input",label:"Inputs"},{value:"media",label:"Media"}]}getUserReview(t){const e=a.xd.getCurrentUser();if(!e)return null;const i=c._toWordPressPresetId(t),o=Number(e.id),r=this._getLocalReviews().find(t=>String(t.preset_id)===i&&Number(t.user_id)===o);return null!=r?r:null}async loadUserReviewsFromServer(){if(a.xd.isAuthenticated())try{const t=await this._fetchRemoteReviews(),e=a.xd.getCurrentUser();if(!e)return;const i=Number(e.id);for(const e of t)Number(e.user_id)===i&&this._saveLocalReview(Object.assign(Object.assign({},e),{preset_id:String(e.preset_id)}))}catch(t){console.warn("Could not load user reviews from server:",t)}}_getLocalReviews(){try{const t=(0,o.bi)(s);return t?JSON.parse(t):[]}catch(t){return[]}}_saveLocalReview(t){const e=this._getLocalReviews(),i=String(t.preset_id),a=Number(t.user_id),r=Object.assign(Object.assign({},t),{preset_id:i}),n=e.findIndex(t=>String(t.preset_id)===i&&Number(t.user_id)===a);n>=0?e[n]=r:e.push(r);try{(0,o.FX)(s,JSON.stringify(e))}catch(t){console.error("Failed to save review locally:",t)}}async _fetchRemoteReviews(){const t=await a.xd.authenticatedFetch(`${c.API_BASE}/reviews`);if(!t.ok)throw new Error(`Failed to fetch reviews: ${t.statusText}`);return t.json()}async _uploadReviews(t){const e=[];for(const i of t)try{const t=await a.xd.authenticatedFetch(`${c.API_BASE}/reviews`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preset_id:i.preset_id,rating:i.rating,comment:i.comment})});if(t.ok){const i=await t.json();e.push(i),this._saveLocalReview(i)}}catch(t){console.error("Failed to upload review:",t)}return e}async _downloadReviews(t){return[]}async _mergeReviews(t,e){return{merged:[],conflicts:[]}}async _uploadConflictResolution(t,e){}async _downloadConflictResolution(t,e){}async _mergeConflictData(t){return t.local}async _processPendingChanges(){if(0!==this._pendingChanges.size){for(const[t,e]of this._pendingChanges)try{await this._processChange(e),this._pendingChanges.delete(t)}catch(e){console.error(`Failed to process change ${t}:`,e)}this._syncStatus.pendingChanges=this._pendingChanges.size,this._savePendingChanges(),this._notifyListeners()}}async _processChange(t){switch(t.type){case"favorite":"create"===t.action&&await this._uploadFavorites([t.data]);break;case"color":throw new Error(n);case"review":"create"===t.action&&await this._uploadReviews([t.data])}}_loadSyncStatus(){try{const t=(0,o.bi)(c.SYNC_STATUS_KEY);if(t){const e=JSON.parse(t);this._syncStatus=Object.assign(Object.assign(Object.assign({},this._syncStatus),e),{lastSync:e.lastSync?new Date(e.lastSync):null,lastFavoritesSync:e.lastFavoritesSync?new Date(e.lastFavoritesSync):null,lastColorsSync:e.lastColorsSync?new Date(e.lastColorsSync):null,lastVariablesSync:e.lastVariablesSync?new Date(e.lastVariablesSync):null,isSyncing:!1})}}catch(t){console.error("Failed to load sync status:",t)}}_saveSyncStatus(){var t,e,i,a,r,s,n;try{(0,o.FX)(c.SYNC_STATUS_KEY,JSON.stringify(Object.assign(Object.assign({},this._syncStatus),{lastSync:null===(t=this._syncStatus.lastSync)||void 0===t?void 0:t.toISOString(),lastFavoritesSync:null!==(i=null===(e=this._syncStatus.lastFavoritesSync)||void 0===e?void 0:e.toISOString())&&void 0!==i?i:null,lastColorsSync:null!==(r=null===(a=this._syncStatus.lastColorsSync)||void 0===a?void 0:a.toISOString())&&void 0!==r?r:null,lastVariablesSync:null!==(n=null===(s=this._syncStatus.lastVariablesSync)||void 0===s?void 0:s.toISOString())&&void 0!==n?n:null})))}catch(t){console.error("Failed to save sync status:",t)}}_loadPendingChanges(){try{const t=(0,o.bi)(c.PENDING_CHANGES_KEY);if(t){const e=JSON.parse(t);this._pendingChanges=new Map(Object.entries(e)),this._syncStatus.pendingChanges=this._pendingChanges.size}}catch(t){console.error("Failed to load pending changes:",t)}}_savePendingChanges(){try{const t=Object.fromEntries(this._pendingChanges);(0,o.FX)(c.PENDING_CHANGES_KEY,JSON.stringify(t))}catch(t){console.error("Failed to save pending changes:",t)}}_clearPendingChanges(){this._pendingChanges.clear();try{(0,o.Pw)(c.PENDING_CHANGES_KEY)}catch(t){console.error("Failed to clear pending changes:",t)}}}c.API_BASE="https://ultracard.io/wp-json/ultra-card/v1",c.SYNC_STATUS_KEY="ultra-card-sync-status",c.PENDING_CHANGES_KEY="ultra-card-pending-changes";const l=new c;i.d(e,["Q",0,l])},9286(t,e,i){function a(t){try{return localStorage.getItem(t)}catch(t){return null}}function o(t,e){try{return localStorage.setItem(t,e),!0}catch(t){return!1}}function r(t){try{localStorage.removeItem(t)}catch(t){}}i.d(e,{FX:()=>o,Pw:()=>r,bi:()=>a})}};