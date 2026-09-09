/*! For license information please see uc-1130.8904e7e7.js.LICENSE.txt */
export const __webpack_esm_ids__=[1130];export const __webpack_esm_modules__={5844(t,e,a){function r(t){if(null==t||""===t)return"Never";try{const e=t instanceof Date?t:new Date(t),a=e.getTime();if(Number.isNaN(a))return"Unknown";const r=Math.floor((Date.now()-a)/6e4);if(r<1)return"Just now";if(r<60)return`${r}m ago`;const o=Math.floor(r/60);return o<24?`${o}h ago`:e.toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(t){return"Unknown"}}function o(t){if(null==t||""===t)return"";try{const e=t instanceof Date?t:new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch(t){return""}}a.d(e,{f:()=>r,s:()=>o})},1130(t,e,a){a.r(e),a.d(e,{HubDashboardTab:()=>p});var r=a(2618),o=a(4791),i=a(6781),n=a(9978),s=a(8980),c=a(378),d=a(5650),l=a(821),h=a(5844),u=a(6478),g=function(t,e,a,r){var o,i=arguments.length,n=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(i<3?o(n):i>3?o(e,a,n):o(e,a))||n);return i>3&&n&&Object.defineProperty(e,a,n),n};let p=class extends r.WF{constructor(){super(...arguments),this._stats=null,this._statsLoading=!0,this._statsError="",this._changelogBody="",this._changelogHtml="",this._changelogUrl="",this._changelogExpanded=!1,this._changelogLoading=!0,this._changelogError="",this._changelogTitle="",this._authorPresets=[],this._authorPresetsLoaded=!1}connectedCallback(){super.connectedCallback(),this._loadStats(),this._loadChangelog(),this._authListener=()=>{this._loadAuthorPresets()},c.xd.addListener(this._authListener),this._loadAuthorPresets()}disconnectedCallback(){super.disconnectedCallback(),this._authListener&&(c.xd.removeListener(this._authListener),this._authListener=void 0)}_lang(){var t,e,a;return null!==(a=null===(e=null===(t=this.hass)||void 0===t?void 0:t.locale)||void 0===e?void 0:e.language)&&void 0!==a?a:"en"}_t(t,e){return(0,u.kg)(t,this._lang(),e)}async _loadAuthorPresets(){if(!c.xd.isAuthenticated())return this._authorPresets=[],void(this._authorPresetsLoaded=!0);try{this._authorPresets=await d.a.listMine()}catch(t){this._authorPresets=[]}finally{this._authorPresetsLoaded=!0}}_authorAttention(){let t=0,e=0;for(const a of this._authorPresets)"changes_requested"===a.review_status?e+=1:("pending"===a.review_status||a.has_pending_revision)&&(t+=1);return{awaiting:t,changes:e}}_openMyPresets(){(0,l.nL)(this,{tab:"presets",presetsView:"mine"})}_connectionStatus(){var t,e,a;const r=null===(e=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===e?void 0:e["sensor.ultra_card_pro_cloud_authentication_status"];if(!r)return{label:"Not configured",className:"unknown",detail:"Install Ultra Card Connect to sync your account and Pro features.",needsReauth:!1,lastPoll:"",subStatus:""};const o=null!==(a=r.attributes)&&void 0!==a?a:{},i=Boolean(o.needs_reauth),n=o.last_poll||"",s=o.subscription_status||"";return i?{label:"Reconfiguration needed",className:"warning",detail:"Ultra Card Connect needs updated credentials. Open the integration to reconfigure.",needsReauth:!0,lastPoll:n,subStatus:s}:"connected"===r.state?{label:"Connected",className:"connected",detail:`Signed in through Ultra Card Connect · ${"pro"===(o.subscription_tier||"free")?"Pro":"Free"} plan${s&&"active"!==s?` · ${s}`:""}.${n?` Last checked ${(0,h.f)(n)}.`:""}`,needsReauth:!1,lastPoll:n,subStatus:s}:{label:"Disconnected",className:"disconnected",detail:"Sign in again from the Account section or reconfigure the integration.",needsReauth:!1,lastPoll:n,subStatus:s}}_nav(t,e){e?(0,l.nL)(this,{tab:t,slug:e}):(0,l.nL)(this,{tab:t})}async _loadChangelog(){this._changelogLoading=!0,this._changelogError="",this._changelogBody="",this._changelogHtml="",this._changelogUrl="",this._changelogTitle="";const t=/beta|alpha/i.test("3.10.0");try{const e=await fetch("https://api.github.com/repos/WJDDesigns/Ultra-Card/releases?per_page=20",{headers:{Accept:"application/vnd.github.v3+json"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const a=await e.json(),r=t?a.find(t=>t.prerelease):a.find(t=>!t.prerelease);(null==r?void 0:r.body)?(this._changelogTitle=r.name||r.tag_name||"Changelog",this._changelogUrl=r.html_url||"",this._changelogBody=r.body,this._changelogHtml=await this._renderMarkdown(r.body)):this._changelogBody=t?"No beta release notes found.":"No stable release notes found."}catch(t){console.warn("Changelog fetch failed:",t),this._changelogError="Could not load release notes from GitHub."}finally{this._changelogLoading=!1}}async _renderMarkdown(t){try{const[{marked:e},{sanitizeMarkdownHtml:r}]=await Promise.all([a.e(23).then(()=>a(23)),Promise.all([a.e(9418),a.e(1172)]).then(()=>a(1172))]);return r(e.parse(t,{gfm:!0,breaks:!0,async:!1}),!1,{trusted:!1})}catch(t){return console.warn("Changelog markdown render failed:",t),""}}async _loadStats(){var t,e;if(this.hass){this._statsLoading=!0,this._statsError="";try{s.ucDashboardScannerService.initialize(this.hass);const a=await s.ucDashboardScannerService.scanAllDashboards();let r=1;try{const t=await this.hass.callWS({type:"lovelace/dashboards/list"});Array.isArray(t)&&(r=t.length+1)}catch(t){}this._stats={cardCount:a.card_count,viewCount:null!==(e=null===(t=a.views)||void 0===t?void 0:t.length)&&void 0!==e?e:0,dashboardCount:r}}catch(t){console.warn("Dashboard scan for stats failed:",t),this._statsError="Could not load dashboard stats.",this._stats=null}finally{this._statsLoading=!1}}else this._statsLoading=!1}render(){const t=this._authorAttention(),e=this._authorPresetsLoaded&&(t.awaiting>0||t.changes>0),a=/beta|alpha/i.test("3.10.0");return r.qy`
      <div class="welcome-hero">
        <div class="hero-mark" aria-hidden="true">
          <ha-icon icon="mdi:cards"></ha-icon>
        </div>
        <div class="hero-body">
          <span class="hero-eyebrow">
            <ha-icon icon="mdi:tag-outline"></ha-icon>
            Version ${"3.10.0"}${a?" · Beta":""}
          </span>
          <h2>Welcome to Ultra Card</h2>
          <p>
            Build beautiful, modular dashboards with the layout builder. Use presets, favorites,
            variables, and templates to create cards that fit your Home Assistant setup.
          </p>
          <div class="hero-actions">
            <button class="hub-btn hub-btn--primary" @click=${()=>this._nav("presets")}>
              <ha-icon icon="mdi:palette"></ha-icon>
              Browse presets
            </button>
            <button class="hub-btn" @click=${()=>this._nav("themes")}>
              <ha-icon icon="mdi:palette-swatch"></ha-icon>
              Themes
            </button>
            <button class="hub-btn" @click=${()=>this._nav("docs","quick-start")}>
              <ha-icon icon="mdi:rocket-launch-outline"></ha-icon>
              Quick start
            </button>
          </div>
        </div>
      </div>

      ${e?r.qy`
            <div class="author-prompt">
              <ha-icon icon="mdi:clipboard-text-clock-outline"></ha-icon>
              <div class="author-prompt-body">
                <p>
                  ${t.awaiting>0?this._t("hub.dashboard.presets_awaiting_review","{count} presets awaiting review").replace("{count}",String(t.awaiting)):r.s6}
                  ${t.awaiting>0&&t.changes>0?" · ":r.s6}
                  ${t.changes>0?this._t("hub.dashboard.presets_changes_requested","{count} with changes requested").replace("{count}",String(t.changes)):r.s6}
                </p>
                <button type="button" @click=${this._openMyPresets}>
                  <ha-icon icon="mdi:account-edit-outline"></ha-icon>
                  ${this._t("hub.dashboard.view_my_presets","View My Presets")}
                </button>
              </div>
            </div>
          `:r.s6}

      <div class="command-center">
        <div class="dash-card">
          <h3><ha-icon icon="mdi:cloud-sync"></ha-icon> Cloud connection</h3>
          ${(()=>{const t=this._connectionStatus();return r.qy`
              <div class="status-row">
                <span class="status-pill ${t.className}">${t.label}</span>
              </div>
              <p>${t.detail}</p>
              <div class="quick-links">
                <button class="hub-btn hub-btn--sm" @click=${()=>this._nav("account")}>
                  <ha-icon icon="mdi:account-cog"></ha-icon>
                  Account
                </button>
                ${t.needsReauth?r.qy`
                      <button
                        class="hub-btn hub-btn--sm hub-btn--outline"
                        @click=${()=>{window.location.href="/config/integrations/integration/ultra_card_pro_cloud"}}
                      >
                        <ha-icon icon="mdi:cog"></ha-icon>
                        Reconfigure
                      </button>
                    `:r.s6}
              </div>
            `})()}
        </div>

        <div class="dash-card">
          <h3><ha-icon icon="mdi:lightning-bolt"></ha-icon> Quick actions</h3>
          <p>Jump to library tools and documentation.</p>
          <div class="quick-links">
            <button class="hub-btn hub-btn--sm" @click=${()=>this._nav("favorites")}>
              <ha-icon icon="mdi:heart"></ha-icon>
              Favorites
            </button>
            <button class="hub-btn hub-btn--sm" @click=${()=>this._nav("colors")}>
              <ha-icon icon="mdi:eyedropper-variant"></ha-icon>
              Colors
            </button>
            <button class="hub-btn hub-btn--sm" @click=${()=>this._nav("variables")}>
              <ha-icon icon="mdi:variable"></ha-icon>
              Variables
            </button>
            <button class="hub-btn hub-btn--sm" @click=${()=>this._nav("docs","layout-system")}>
              <ha-icon icon="mdi:book-open-page-variant"></ha-icon>
              Layout docs
            </button>
            <button class="hub-btn hub-btn--sm" @click=${()=>this._nav("docs","installation")}>
              <ha-icon icon="mdi:download"></ha-icon>
              Install guide
            </button>
          </div>
        </div>
      </div>

      <div class="dash-card">
        <h3><ha-icon icon="mdi:view-dashboard"></ha-icon> Your Home Assistant</h3>
        ${this._statsLoading?r.qy`<div class="stats-loading">Scanning all dashboards…</div>`:this._statsError?r.qy`<div class="stats-error">${this._statsError}</div>`:this._stats?r.qy`
                  <div class="stat-tiles">
                    <div class="stat-tile">
                      <div class="stat-tile-value">${this._stats.dashboardCount}</div>
                      <div class="stat-tile-label">
                        Dashboard${1!==this._stats.dashboardCount?"s":""}
                      </div>
                    </div>
                    <div class="stat-tile">
                      <div class="stat-tile-value">${this._stats.viewCount}</div>
                      <div class="stat-tile-label">View${1!==this._stats.viewCount?"s":""}</div>
                    </div>
                    <div class="stat-tile">
                      <div class="stat-tile-value">${this._stats.cardCount}</div>
                      <div class="stat-tile-label">
                        Ultra Card${1!==this._stats.cardCount?"s":""}
                      </div>
                    </div>
                  </div>
                `:r.qy`<div class="stats-loading">No data</div>`}
      </div>

      <div class="dash-card">
        <h3>
          <ha-icon icon="mdi:new-box"></ha-icon>
          ${this._changelogTitle?/what'?s new/i.test(this._changelogTitle)?this._changelogTitle:`What's new · ${this._changelogTitle}`:"What's new"}
          <span class="h3-spacer"></span>
          ${this._changelogUrl?r.qy`<a href=${this._changelogUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub <ha-icon icon="mdi:open-in-new"></ha-icon>
              </a>`:r.s6}
        </h3>
        ${this._changelogLoading?r.qy`<div class="changelog-body-loading">Loading release notes…</div>`:this._changelogError?r.qy`<div class="changelog-body-error">${this._changelogError}</div>`:this._changelogHtml?r.qy`
                  <div class="changelog-body ${this._changelogExpanded?"expanded":""}">
                    ${(0,i._)(this._changelogHtml)}
                  </div>
                  <button
                    class="hub-btn hub-btn--ghost hub-btn--sm changelog-toggle"
                    @click=${()=>{this._changelogExpanded=!this._changelogExpanded}}
                  >
                    <ha-icon
                      icon=${this._changelogExpanded?"mdi:chevron-up":"mdi:chevron-down"}
                    ></ha-icon>
                    ${this._changelogExpanded?"Show less":"Show full release notes"}
                  </button>
                `:r.qy`<div class="changelog-plain">${this._changelogBody}</div>`}
      </div>
    `}};p.styles=[n.z,r.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
      }

      /* Hero */
      .welcome-hero {
        display: flex;
        align-items: center;
        gap: 24px;
        padding: 28px 28px;
        margin-bottom: 20px;
        background:
          radial-gradient(
            120% 140% at 100% 0%,
            rgba(var(--uc-hub-primary-rgb), 0.16),
            transparent 55%
          ),
          var(--uc-hub-surface);
        border: 1px solid var(--uc-hub-border);
        border-radius: var(--uc-hub-radius-lg);
        box-shadow: var(--uc-hub-shadow-sm);
        overflow: hidden;
      }

      .hero-mark {
        width: 64px;
        height: 64px;
        flex-shrink: 0;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: linear-gradient(
          135deg,
          var(--primary-color),
          var(--accent-color, var(--primary-color))
        );
        box-shadow: 0 6px 18px rgba(var(--uc-hub-primary-rgb), 0.35);
      }

      .hero-mark ha-icon {
        --mdc-icon-size: 34px;
      }

      .hero-body {
        flex: 1;
        min-width: 0;
      }

      .hero-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 8px;
        padding: 3px 10px;
        border-radius: 999px;
        background: rgba(var(--uc-hub-primary-rgb), 0.12);
        color: var(--primary-color);
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.01em;
      }

      .hero-eyebrow ha-icon {
        --mdc-icon-size: 14px;
      }

      .welcome-hero h2 {
        margin: 0 0 6px 0;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: var(--primary-text-color);
      }

      .welcome-hero p {
        margin: 0;
        font-size: 14px;
        color: var(--secondary-text-color);
        line-height: 1.55;
        max-width: 620px;
      }

      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 16px;
      }

      @media (max-width: 700px) {
        .welcome-hero {
          flex-direction: column;
          align-items: flex-start;
          padding: 20px;
          gap: 16px;
        }
        .hero-mark {
          width: 52px;
          height: 52px;
          border-radius: 14px;
        }
        .hero-mark ha-icon {
          --mdc-icon-size: 28px;
        }
        .welcome-hero h2 {
          font-size: 21px;
        }
      }

      /* Cards */
      .dash-card {
        background: var(--uc-hub-surface);
        border: 1px solid var(--uc-hub-border);
        border-radius: var(--uc-hub-radius-lg);
        box-shadow: var(--uc-hub-shadow-sm);
        padding: 20px 22px;
        margin-bottom: 20px;
        min-width: 0;
      }

      .dash-card h3 {
        margin: 0 0 14px 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .dash-card h3 ha-icon {
        --mdc-icon-size: 20px;
        color: var(--primary-color);
      }

      .dash-card h3 .h3-spacer {
        flex: 1;
      }

      .dash-card h3 a {
        font-size: 12px;
        font-weight: 500;
        color: var(--primary-color);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      .dash-card h3 a ha-icon {
        --mdc-icon-size: 14px;
      }

      .dash-card h3 a:hover {
        text-decoration: underline;
      }

      .stats-loading,
      .stats-error {
        padding: 12px 0;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      .stats-error {
        color: var(--error-color, #f44336);
      }

      .stat-tile-value {
        color: var(--primary-color);
      }

      /* Changelog */
      .changelog-body {
        font-size: 13.5px;
        color: var(--primary-text-color);
        line-height: 1.6;
        word-break: break-word;
        max-height: 360px;
        overflow: hidden;
        position: relative;
        transition: max-height 0.2s ease;
      }

      .changelog-body.expanded {
        max-height: none;
      }

      .changelog-body:not(.expanded)::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 72px;
        background: linear-gradient(to bottom, transparent, var(--uc-hub-surface));
        pointer-events: none;
      }

      .changelog-body :is(h1, h2, h3, h4) {
        margin: 18px 0 8px;
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .changelog-body :is(h1, h2, h3, h4):first-child {
        margin-top: 0;
      }

      .changelog-body p {
        margin: 0 0 10px;
      }

      .changelog-body ul,
      .changelog-body ol {
        margin: 0 0 10px;
        padding-left: 22px;
      }

      .changelog-body li {
        margin-bottom: 4px;
      }

      .changelog-body code {
        font-family: var(--code-font-family, 'SF Mono', 'Fira Code', monospace);
        font-size: 12px;
        padding: 1px 6px;
        border-radius: 4px;
        background: var(--uc-hub-surface-2);
        border: 1px solid var(--uc-hub-border);
      }

      .changelog-body pre {
        padding: 12px;
        border-radius: var(--uc-hub-radius-sm);
        background: var(--uc-hub-surface-2);
        border: 1px solid var(--uc-hub-border);
        overflow-x: auto;
      }

      .changelog-body pre code {
        border: none;
        background: none;
        padding: 0;
      }

      .changelog-body a {
        color: var(--primary-color);
        text-decoration: none;
      }

      .changelog-body a:hover {
        text-decoration: underline;
      }

      .changelog-body img {
        max-width: 100%;
        border-radius: var(--uc-hub-radius-sm);
      }

      .changelog-body hr {
        border: none;
        border-top: 1px solid var(--uc-hub-border);
        margin: 14px 0;
      }

      .changelog-toggle {
        margin-top: 10px;
      }

      .changelog-plain {
        white-space: pre-wrap;
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      .changelog-body-loading,
      .changelog-body-error {
        padding: 12px 0;
        color: var(--secondary-text-color);
        font-size: 13px;
      }

      .changelog-body-error {
        color: var(--error-color, #f44336);
      }

      /* Command centre */
      .command-center {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
        margin-bottom: 20px;
      }

      .command-center .dash-card {
        margin-bottom: 0;
      }

      .dash-card p {
        margin: 0 0 12px;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.5;
      }

      .status-row {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
      }

      .status-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 600;
      }

      .status-pill::before {
        content: '';
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: currentColor;
      }

      .status-pill.connected {
        background: rgba(76, 175, 80, 0.14);
        color: var(--success-color, #4caf50);
      }

      .status-pill.disconnected {
        background: rgba(244, 67, 54, 0.12);
        color: var(--error-color, #f44336);
      }

      .status-pill.unknown {
        background: rgba(158, 158, 158, 0.15);
        color: var(--secondary-text-color);
      }

      .status-pill.warning {
        background: rgba(255, 152, 0, 0.15);
        color: var(--warning-color, #ff9800);
      }

      .quick-links {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .author-prompt {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 14px 16px;
        margin-bottom: 24px;
        border-radius: 12px;
        border: 1px solid rgba(var(--rgb-primary-color, 3, 169, 244), 0.25);
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      }

      .author-prompt ha-icon {
        --mdc-icon-size: 22px;
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 2px;
      }

      .author-prompt-body {
        flex: 1;
        min-width: 0;
      }

      .author-prompt-body p {
        margin: 0 0 8px;
        font-size: 14px;
        line-height: 1.45;
        color: var(--primary-text-color);
      }

      .author-prompt-body button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        border-radius: 8px;
        border: 1px solid var(--primary-color);
        background: transparent;
        color: var(--primary-color);
        font-size: 12px;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
      }

      .author-prompt-body button:hover {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
      }
    `],g([(0,o.MZ)({attribute:!1})],p.prototype,"hass",void 0),g([(0,o.wk)()],p.prototype,"_stats",void 0),g([(0,o.wk)()],p.prototype,"_statsLoading",void 0),g([(0,o.wk)()],p.prototype,"_statsError",void 0),g([(0,o.wk)()],p.prototype,"_changelogBody",void 0),g([(0,o.wk)()],p.prototype,"_changelogHtml",void 0),g([(0,o.wk)()],p.prototype,"_changelogUrl",void 0),g([(0,o.wk)()],p.prototype,"_changelogExpanded",void 0),g([(0,o.wk)()],p.prototype,"_changelogLoading",void 0),g([(0,o.wk)()],p.prototype,"_changelogError",void 0),g([(0,o.wk)()],p.prototype,"_changelogTitle",void 0),g([(0,o.wk)()],p.prototype,"_authorPresets",void 0),g([(0,o.wk)()],p.prototype,"_authorPresetsLoaded",void 0),p=g([(0,o.EM)("hub-dashboard-tab")],p)},8980(t,e,a){const r=new class{constructor(){this.hass=null}initialize(t){this.hass=t}async scanDashboard(){var t;if(!this.hass)throw new Error("Dashboard scanner not initialized with Home Assistant instance");try{const e=await this.getLovelaceConfig();if(!e)return this.createEmptySnapshot();const a=this.extractViews(e),r=[];for(const t of a){const a=this.scanViewForUltraCards(t,e);r.push(...a)}return{cards:r,views:a,scanned_at:(new Date).toISOString(),card_count:r.length,dashboard_path:null!==(t=this.getCurrentDashboardPath())&&void 0!==t?t:"default"}}catch(t){console.error("❌ Dashboard scan failed:",t);const e=t instanceof Error?t.message:String(t);throw new Error(`Failed to scan dashboard: ${e}`)}}async scanAllDashboards(){if(!this.hass)throw new Error("Dashboard scanner not initialized with Home Assistant instance");try{const t=await this.hass.callWS({type:"lovelace/dashboards/list"}),e=[],a=[];try{const t=await this.hass.callWS({type:"lovelace/config",url_path:null});if(t){const r=this.extractViews(t);a.push(...r);for(const a of r){const r=this.scanViewForUltraCards(a,t);e.push(...r)}}}catch(t){}if(Array.isArray(t))for(const r of t){const t=r.url_path||r.id;try{const r=await this.hass.callWS({type:"lovelace/config",url_path:t});if(r){const t=this.extractViews(r);a.push(...t);for(const a of t){const t=this.scanViewForUltraCards(a,r);e.push(...t)}}}catch(t){}}return{cards:e,views:a,scanned_at:(new Date).toISOString(),card_count:e.length,dashboard_path:"all"}}catch(t){console.error("❌ Global dashboard scan failed:",t);const e=t instanceof Error?t.message:String(t);throw new Error(`Failed to scan all dashboards: ${e}`)}}async getDashboardViews(){if(!this.hass)throw new Error("Dashboard scanner not initialized");try{const t=await this.getLovelaceConfig();return t?this.extractViews(t):[]}catch(t){return console.error("Failed to get dashboard views:",t),[]}}async scanView(t){if(!this.hass)throw new Error("Dashboard scanner not initialized");try{const e=await this.getLovelaceConfig();if(!e)return[];const a=this.extractViews(e).find(e=>e.id===t||e.path===t);return a?this.scanViewForUltraCards(a,e):(console.warn(`View ${t} not found`),[])}catch(e){return console.error(`Failed to scan view ${t}:`,e),[]}}getCurrentDashboardPath(){const t=window.location.pathname,e=t.match(/\/lovelace\/([^/]+)/);if(e)return e[1];if(["/ultra-card-hub","/config","/developer-tools","/hacs","/logbook","/history","/map","/energy","/todo"].some(e=>t.startsWith(e)))return null;const a=t.match(/^\/([^/]+)/);return a?a[1]:null}async getLovelaceConfig(){var t;if(!this.hass)return null;try{const e=this.getCurrentDashboardPath();try{const t=await this.hass.callWS({type:"lovelace/config",url_path:e});if(t)return t}catch(t){}try{const t=await this.hass.callWS({type:"lovelace/dashboards/list"});if(Array.isArray(t)){const a=e?t.find(t=>t.url_path===e||t.id===e):null;if(a){const t=await this.hass.callWS({type:"lovelace/config",url_path:a.url_path||a.id});if(t)return t}else try{const t=await this.hass.callWS({type:"lovelace/config",url_path:null});if(t)return t}catch(t){}}}catch(t){}const a=null===(t=document.querySelector("home-assistant"))||void 0===t?void 0:t.lovelace;if(a&&a.config)return a.config;const r=document.querySelector("hui-root");if(r){const t=r.lovelace;if(t&&t.config)return t.config}const o=document.querySelector("home-assistant");if(o&&o.lovelace&&o.lovelace.config)return o.lovelace.config;const i=document.querySelector("ha-panel-lovelace");if(i){const t=i.lovelace||i._lovelace;if(t&&t.config)return t.config}if(window.__lovelace){const t=window.__lovelace;if(t.config)return t.config}return null}catch(t){return console.error("❌ Error getting Lovelace config:",t),null}}extractViews(t){if(!t||!t.views)return[];const e=[];return t.views.forEach((t,a)=>{e.push({id:t.path||`view_${a}`,title:t.title||t.path||`View ${a+1}`,path:t.path||`${a}`,icon:t.icon,panel:t.panel||!1,theme:t.theme})}),e}scanViewForUltraCards(t,e){if(!e||!e.views)return[];const a=[],r=e.views.findIndex(e=>e.path&&e.path===t.path||e.title&&e.title===t.title);if(-1===r)return a;const o=e.views[r];return"sections"===o.type&&Array.isArray(o.sections)?(o.sections.forEach((e,r)=>{Array.isArray(e.cards)&&e.cards.forEach((e,o)=>{if(this.isUltraCard(e))a.push({config:e,card_index:a.length,view_id:t.id,view_title:t.title,view_path:t.path,card_name:e.card_name||`Ultra Card ${a.length+1}`,section_index:r,card_index_in_section:o});else{const i=this.findNestedUltraCards(e);i.length>0&&i.forEach(e=>{a.push({config:e,card_index:a.length,view_id:t.id,view_title:t.title,view_path:t.path,card_name:e.card_name||`Ultra Card ${a.length+1}`,section_index:r,card_index_in_section:o})})}})}),a):o.cards&&Array.isArray(o.cards)?(o.cards.forEach((e,r)=>{if(this.isUltraCard(e))a.push({config:e,card_index:r,view_id:t.id,view_title:t.title,view_path:t.path,card_name:e.card_name||`Ultra Card ${r+1}`});else{const o=this.findNestedUltraCards(e);o.length>0&&o.forEach(e=>{a.push({config:e,card_index:r,view_id:t.id,view_title:t.title,view_path:t.path,card_name:e.card_name||`Ultra Card ${r+1}`})})}}),a):a}isUltraCard(t){return!(!t||"object"!=typeof t)&&("custom:ultra-card"===t.type||"custom:ultra-vehicle-card"===t.type||t.layout&&t.layout.rows)}findNestedUltraCards(t){const e=[];return t&&"object"==typeof t?(Array.isArray(t.cards)&&t.cards.forEach(t=>{this.isUltraCard(t)?e.push(t):e.push(...this.findNestedUltraCards(t))}),t.card&&(this.isUltraCard(t.card)?e.push(t.card):e.push(...this.findNestedUltraCards(t.card))),e):e}createEmptySnapshot(){return{cards:[],views:[],scanned_at:(new Date).toISOString(),card_count:0}}async canScan(){if(!this.hass)return!1;try{return null!==await this.getLovelaceConfig()}catch(t){return!1}}async getDashboardStats(){try{const t=await this.getLovelaceConfig();if(!t||!t.views)return{total_views:0,total_cards:0,ultra_cards:0};const e=t.views;let a=0,r=0;return e.forEach(t=>{"sections"===t.type&&Array.isArray(t.sections)?t.sections.forEach(t=>{Array.isArray(t.cards)&&(a+=t.cards.length,r+=t.cards.filter(t=>this.isUltraCard(t)).length)}):Array.isArray(t.cards)&&(a+=t.cards.length,r+=t.cards.filter(t=>this.isUltraCard(t)).length)}),{total_views:e.length,total_cards:a,ultra_cards:r}}catch(t){return console.error("Failed to get dashboard stats:",t),{total_views:0,total_cards:0,ultra_cards:0}}}};a.d(e,["ucDashboardScannerService",0,r])},5650(t,e,a){var r=a(378);const o="https://ultracard.io/wp-json/ultra-card/v1";function i(t){if(null==t||"object"!=typeof t)return t;const e=t;return"_body"in e&&void 0!==e._body?i(e._body):"data"in e&&null!=e.data&&"object"==typeof e.data&&!("id"in e)?e.data:t}function n(t,e){if(!t||"object"!=typeof t)return e;const a=t;if("string"==typeof a.message&&a.message)return a.message;if("string"==typeof a.error&&a.error)return a.error;if(a.data&&"object"==typeof a.data&&null!==a.data&&"message"in a.data){const t=a.data.message;if("string"==typeof t&&t)return t}return e}function s(t){var e,a,r,o,n,s,c;const d=null!==(e=i(t))&&void 0!==e?e:{},l=Number(d.id);if(!Number.isFinite(l)||l<=0)throw new Error("Invalid preset response: missing id");const h=function(t){if(!Array.isArray(t))return;const e=t.map(t=>"number"==typeof t?t:Number(t)).filter(t=>Number.isFinite(t)&&t>0);return e.length?e:void 0}(d.photo_ids),u={id:l,name:String(null!==(a=d.name)&&void 0!==a?a:""),description:String(null!==(r=d.description)&&void 0!==r?r:""),category:String(null!==(o=d.category)&&void 0!==o?o:""),tags:(p=d.tags,Array.isArray(p)?p.map(t=>String(t)).filter(Boolean):"string"==typeof p&&p.trim()?p.split(",").map(t=>t.trim()).filter(Boolean):[]),shortcode:String(null!==(n=d.shortcode)&&void 0!==n?n:""),status:String(null!==(s=d.status)&&void 0!==s?s:"pending"),review_status:String(null!==(c=d.review_status)&&void 0!==c?c:"pending")||"pending",has_pending_revision:Boolean(d.has_pending_revision),gallery:(g=d.gallery,Array.isArray(g)?g.map(t=>String(t)).filter(Boolean):[]),downloads:Number(d.downloads)||0,rating:Number(d.rating)||0,rating_count:Number(d.rating_count)||0};var g,p;if("string"==typeof d.integrations&&(u.integrations=d.integrations),"string"==typeof d.moderator_note&&(u.moderator_note=d.moderator_note),void 0!==d.pending_revision&&(u.pending_revision=d.pending_revision&&"object"==typeof d.pending_revision?d.pending_revision:null),h&&(u.photo_ids=h),"string"==typeof d.featured_image&&d.featured_image&&(u.featured_image=d.featured_image),null!=d.featured_image_id&&Number.isFinite(Number(d.featured_image_id))){const t=Number(d.featured_image_id);t>0&&(u.featured_image_id=t)}return"string"==typeof d.preset_url&&(u.preset_url=d.preset_url),"string"==typeof d.submitted_at&&(u.submitted_at=d.submitted_at),"string"==typeof d.reviewed_at&&(u.reviewed_at=d.reviewed_at),null!=d.author_id&&Number.isFinite(Number(d.author_id))&&(u.author_id=Number(d.author_id)),u}async function c(t){return t.json().catch(()=>null)}const d=new class{async listMine(){if(!r.xd.isAuthenticated())throw new Error("Authentication required to list your presets");const t=await r.xd.authenticatedFetch(`${o}/presets/mine`);if(!t.ok){const e=n(await c(t),`Failed to load your presets (HTTP ${t.status})`),a=new Error(e);throw a.status=t.status,a}const e=i(await c(t));let a=[];if(Array.isArray(e))a=e;else if(e&&"object"==typeof e){const t=e;Array.isArray(t.presets)&&(a=t.presets)}return a.map(t=>s(t))}async get(t){if(!r.xd.isAuthenticated())throw new Error("Authentication required");const e=await r.xd.authenticatedFetch(`${o}/presets/${t}`);if(!e.ok){const t=await c(e);throw new Error(n(t,`Failed to load preset (HTTP ${e.status})`))}return s(await c(e))}async update(t,e){if(!r.xd.isAuthenticated())throw new Error("Authentication required to update presets");const a={};void 0!==e.name&&(a.name=e.name),void 0!==e.description&&(a.description=e.description),void 0!==e.category&&(a.category=e.category),void 0!==e.tags&&(a.tags=e.tags),void 0!==e.shortcode&&(a.shortcode=e.shortcode),void 0!==e.integrations&&(a.integrations=e.integrations),void 0!==e.featured_image_id&&(a.featured_image_id=e.featured_image_id),void 0!==e.photo_ids&&(a.photo_ids=e.photo_ids);const i=await r.xd.authenticatedFetch(`${o}/presets/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!i.ok){const t=await c(i);throw new Error(n(t,`Failed to update preset (HTTP ${i.status})`))}return s(await c(i))}async remove(t){if(!r.xd.isAuthenticated())throw new Error("Authentication required to delete presets");const e=await r.xd.authenticatedFetch(`${o}/presets/${t}`,{method:"DELETE"});if(!e.ok){const t=await c(e);throw new Error(n(t,`Failed to delete preset (HTTP ${e.status})`))}}async withdraw(t){if(!r.xd.isAuthenticated())throw new Error("Authentication required to withdraw presets");const e=await r.xd.authenticatedFetch(`${o}/presets/${t}/withdraw`,{method:"POST"});if(!e.ok){const t=await c(e);throw new Error(n(t,`Failed to withdraw preset (HTTP ${e.status})`))}return s(await c(e))}};a.d(e,["a",0,d])},7804(t,e,a){a.d(e,{WL:()=>r});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}a.d(e,["OA",0,{ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},"u$",0,t=>(...e)=>({_$litDirective$:t,values:e})])},6781(t,e,a){a.d(e,{_:()=>n});var r=a(6752),o=a(7804);class i extends o.WL{constructor(t){if(super(t),this.it=r.s6,t.type!==o.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===r.s6||null==t)return this._t=void 0,this.it=t;if(t===r.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;const n=(0,o.u$)(i)}};