/*! For license information please see uc-185.985655c2.js.LICENSE.txt */
export const __webpack_esm_ids__=[185,9286];export const __webpack_esm_modules__={5844(t,e,a){function o(t){if(null==t||""===t)return"Never";try{const e=t instanceof Date?t:new Date(t),a=e.getTime();if(Number.isNaN(a))return"Unknown";const o=Math.floor((Date.now()-a)/6e4);if(o<1)return"Just now";if(o<60)return`${o}m ago`;const r=Math.floor(o/60);return r<24?`${r}h ago`:e.toLocaleDateString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(t){return"Unknown"}}function r(t){if(null==t||""===t)return"";try{const e=t instanceof Date?t:new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch(t){return""}}a.d(e,{f:()=>o,s:()=>r})},185(t,e,a){a.r(e),a.d(e,{HubDashboardTab:()=>z});var o=a(2618),r=a(4791),i=a(6781),s=a(9978),n=a(8980),c=a(378),l=a(5650),d=a(9286);const h="--lovelace-background",u="--primary-background-color",p=new WeakMap,g=new WeakMap;function m(t){let e=t;for(;e;){if(e instanceof HTMLElement&&"hui-root"===e.localName)return e;const t=e.parentNode;e=t instanceof ShadowRoot?t.host:t}return null}function b(t){const e=p.get(t),a=e&&e.size?Array.from(e.values()).pop():void 0;a?(t.style.setProperty(h,a),/gradient\(|url\(/i.test(a)?t.style.removeProperty(u):t.style.setProperty(u,a),t.setAttribute("data-uc-theme-page","")):(t.style.removeProperty(h),t.style.removeProperty(u),t.removeAttribute("data-uc-theme-page"))}new class{claim(t,e){var a,o;if(!e)return void this.release(t);const r=null!==(o=null!==(a=m(t))&&void 0!==a?a:g.get(t))&&void 0!==o?o:null;if(!r)return;let i=p.get(r);i||(i=new Map,p.set(r,i)),i.get(t)!==e&&(i.set(t,e),g.set(t,r),b(r))}release(t){const e=g.get(t);if(!e)return;g.delete(t);const a=p.get(e);(null==a?void 0:a.delete(t))&&b(e)}current(t){const e=p.get(t);return e&&e.size?Array.from(e.values()).pop():void 0}};const v="ultra-card-sections-layout",f="uc-sections-layout-changed",_="--ha-view-sections-column-max-width",y="--ha-view-sections-column-gap",w="data-uc-sections-layout",x={mode:"default",column_max_width:500},$=[0,250,1e3];function k(t,e,a){return Math.min(a,Math.max(e,t))}function S(t){const e=t&&"object"==typeof t?t:{},a="full"===e.mode||"custom"===e.mode?e.mode:"default",o=Number(e.column_max_width),r=void 0===e.column_gap||null===e.column_gap||""===e.column_gap?NaN:Number(e.column_gap),i={mode:a,column_max_width:Number.isFinite(o)?Math.round(k(o,200,4e3)):500};return Number.isFinite(r)&&(i.column_gap=Math.round(k(r,0,200))),i}function A(){var t,e,a;if("undefined"==typeof document)return null;const o=document.querySelector("home-assistant"),r=null===(t=null==o?void 0:o.shadowRoot)||void 0===t?void 0:t.querySelector("home-assistant-main");return null!==(a=null===(e=null==r?void 0:r.shadowRoot)||void 0===e?void 0:e.querySelector("ha-panel-lovelace"))&&void 0!==a?a:null}function C(){var t,e;const a=null===(e=null===(t=A())||void 0===t?void 0:t.shadowRoot)||void 0===e?void 0:e.querySelector("hui-root");return a instanceof HTMLElement?a:null}const E=new class{constructor(){this._layout=Object.assign({},x),this._listeners=new Set,this._roots=new Set,this._syncTimers=[],this._resolverObserver=null,this._panelObserver=null,this._observedPanel=null,this._started=!1,this._loadFromStorage(),"undefined"!=typeof window&&(window.addEventListener("storage",t=>{t.key===v&&this._reloadExternal()}),window.addEventListener(f,t=>{var e;(null===(e=t.detail)||void 0===e?void 0:e.source)!==this&&this._reloadExternal()}))}_reloadExternal(){this._loadFromStorage(),this._repaintAll(),this._notify()}get(){return Object.assign({},this._layout)}set(t){const e=S(Object.assign(Object.assign({},this._layout),t));var a;e.mode===this._layout.mode&&e.column_max_width===this._layout.column_max_width&&e.column_gap===this._layout.column_gap||(this._layout=e,"default"===(a=e).mode&&void 0===a.column_gap?(0,d.Pw)(v):(0,d.FX)(v,JSON.stringify(e)),this._repaintAll(),this._notify(),"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent(f,{detail:{source:this}})))}reset(){this.set(Object.assign(Object.assign({},x),{column_gap:void 0}))}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}start(){if(this._started||"undefined"==typeof window)return;this._started=!0;const t=()=>this._scheduleSync();window.addEventListener("location-changed",t),window.addEventListener("popstate",t),document.addEventListener("visibilitychange",()=>{"visible"===document.visibilityState&&t()}),this._bootstrap(0)}_bootstrap(t){var e,a,o;const r=document.querySelector("home-assistant"),i=null===(e=null==r?void 0:r.shadowRoot)||void 0===e?void 0:e.querySelector("home-assistant-main"),s=null===(a=null==i?void 0:i.shadowRoot)||void 0===a?void 0:a.querySelector("partial-panel-resolver");s?(null===(o=this._resolverObserver)||void 0===o||o.disconnect(),this._resolverObserver=new MutationObserver(()=>this._sync()),this._resolverObserver.observe(s,{childList:!0,subtree:!0}),this._sync()):t<140&&window.setTimeout(()=>this._bootstrap(t+1),t<20?250:1e3)}touch(t){const e=m(t);e&&this._paint(e)}current(t){const e={};for(const a of[_,y]){const o=t.style.getPropertyValue(a);o&&(e[a]=o)}return e}_scheduleSync(){for(const t of this._syncTimers)clearTimeout(t);this._syncTimers=$.map(t=>window.setTimeout(()=>this._sync(),t))}_sync(){this._observePanel(A());const t=C();t&&this._paint(t)}_observePanel(t){var e;if(!t||t===this._observedPanel)return;const a=t.shadowRoot;a&&(null===(e=this._panelObserver)||void 0===e||e.disconnect(),this._observedPanel=t,this._panelObserver=new MutationObserver(()=>{const t=C();t&&this._paint(t)}),this._panelObserver.observe(a,{childList:!0}))}_paint(t){const e=function(t){if("default"===t.mode)return{};const e={[_]:"full"===t.mode?"100vw":`${t.column_max_width}px`};return void 0!==t.column_gap&&(e[y]=`${t.column_gap}px`),e}(this._layout);if(0===Object.keys(e).length)return t.style.removeProperty(_),t.style.removeProperty(y),t.removeAttribute(w),void this._roots.delete(t);for(const a of[_,y])e[a]?t.style.setProperty(a,e[a]):t.style.removeProperty(a);t.setAttribute(w,this._layout.mode),this._roots.add(t)}_repaintAll(){for(const t of Array.from(this._roots))t.isConnected?this._paint(t):this._roots.delete(t);const t=C();t&&this._paint(t)}_loadFromStorage(){const t=(0,d.bi)(v);if(t)try{this._layout=S(JSON.parse(t))}catch(t){this._layout=Object.assign({},x)}else this._layout=Object.assign({},x)}_notify(){for(const t of this._listeners)try{t()}catch(t){}}};var P=a(8690),L=a(821),T=a(5844),N=a(6478),F=function(t,e,a,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,a):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,o);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(i<3?r(s):i>3?r(e,a,s):r(e,a))||s);return i>3&&s&&Object.defineProperty(e,a,s),s};let z=class extends o.WF{constructor(){super(...arguments),this._stats=null,this._statsLoading=!0,this._statsError="",this._changelogBody="",this._changelogHtml="",this._changelogUrl="",this._changelogExpanded=!1,this._changelogLoading=!0,this._changelogError="",this._changelogTitle="",this._authorPresets=[],this._authorPresetsLoaded=!1,this._sectionsWidthTick=0}connectedCallback(){super.connectedCallback(),this._loadStats(),this._loadChangelog(),this._sectionsWidthUnsub=E.subscribe(()=>{this._sectionsWidthTick++}),this._authListener=()=>{this._loadAuthorPresets()},c.xd.addListener(this._authListener),this._loadAuthorPresets()}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._sectionsWidthUnsub)||void 0===t||t.call(this),this._sectionsWidthUnsub=void 0,this._authListener&&(c.xd.removeListener(this._authListener),this._authListener=void 0)}_lang(){var t,e,a;return null!==(a=null===(e=null===(t=this.hass)||void 0===t?void 0:t.locale)||void 0===e?void 0:e.language)&&void 0!==a?a:"en"}_t(t,e){return(0,N.kg)(t,this._lang(),e)}_renderSectionsWidth(){this._sectionsWidthTick;const t=E.get(),e=[{id:"default",label:this._t("hub.sections_width_default","Home Assistant default"),hint:this._t("hub.sections_width_default_hint","500px per column, centred")},{id:"full",label:this._t("hub.sections_width_full","Full width"),hint:this._t("hub.sections_width_full_hint","Sections columns and FreeSpace fill the whole screen")},{id:"custom",label:this._t("hub.sections_width_custom","Custom"),hint:this._t("hub.sections_width_custom_hint","Pick a max width per column")}],a=this._t("hub.sections_gap_placeholder","HA default (32)");return o.qy`
      <div class="sections-width">
        <div class="sections-width-text">
          <strong>${this._t("hub.sections_width","Sections & FreeSpace width")}</strong>
          <small>
            ${this._t("hub.sections_width_desc","Widen Sections columns and FreeSpace to fill the screen, or keep Home Assistant’s default centred layout. Applies to every dashboard in this browser. Masonry and Panel views are not affected.")}
          </small>
        </div>
        <div
          class="sections-width-modes"
          role="radiogroup"
          aria-label=${this._t("hub.sections_width","Sections & FreeSpace width")}
        >
          ${e.map(e=>o.qy`
              <button
                type="button"
                role="radio"
                class="mode ${t.mode===e.id?"active":""}"
                aria-checked=${t.mode===e.id?"true":"false"}
                @click=${()=>E.set({mode:e.id})}
              >
                <span class="mode-label">${e.label}</span>
                <span class="mode-hint">${e.hint}</span>
              </button>
            `)}
        </div>
        ${"default"!==t.mode?o.qy`
              <div class="sections-width-fields">
                ${"custom"===t.mode?o.qy`
                      <label class="field">
                        <span>${this._t("hub.sections_column_width","Max width per column (px)")}</span>
                        <input
                          type="number"
                          inputmode="numeric"
                          min=${200}
                          max=${4e3}
                          step="10"
                          .value=${String(t.column_max_width)}
                          @change=${t=>E.set({column_max_width:Number(t.target.value)})}
                        />
                      </label>
                    `:o.s6}
                <label class="field">
                  <span>${this._t("hub.sections_gap","Column gap and side padding (px)")}</span>
                  <input
                    type="number"
                    inputmode="numeric"
                    min=${0}
                    max=${200}
                    step="4"
                    placeholder=${a}
                    .value=${void 0===t.column_gap?"":String(t.column_gap)}
                    @change=${t=>{const e=t.target.value.trim();E.set({column_gap:""===e?void 0:Number(e)})}}
                  />
                </label>
              </div>
            `:o.s6}
      </div>
    `}async _loadAuthorPresets(){if(!c.xd.isAuthenticated())return this._authorPresets=[],void(this._authorPresetsLoaded=!0);try{this._authorPresets=await l.a.listMine()}catch(t){this._authorPresets=[]}finally{this._authorPresetsLoaded=!0}}_authorAttention(){let t=0,e=0;for(const a of this._authorPresets)"changes_requested"===a.review_status?e+=1:("pending"===a.review_status||a.has_pending_revision)&&(t+=1);return{awaiting:t,changes:e}}_openMyPresets(){(0,L.nL)(this,{tab:"presets",presetsView:"mine"})}_connectionStatus(){var t,e,a;const o=null===(e=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===e?void 0:e["sensor.ultra_card_pro_cloud_authentication_status"];if(!o)return{label:"Not configured",className:"unknown",detail:"Install Ultra Card Connect to sync your account and Pro features.",needsReauth:!1,lastPoll:"",subStatus:""};const r=null!==(a=o.attributes)&&void 0!==a?a:{},i=Boolean(r.needs_reauth),s=r.last_poll||"",n=r.subscription_status||"";return i?{label:"Reconfiguration needed",className:"warning",detail:"Ultra Card Connect needs updated credentials. Open the integration to reconfigure.",needsReauth:!0,lastPoll:s,subStatus:n}:"connected"===o.state?{label:"Connected",className:"connected",detail:`Signed in through Ultra Card Connect · ${"pro"===(r.subscription_tier||"free")?"Pro":"Free"} plan${n&&"active"!==n?` · ${n}`:""}.${s?` Last checked ${(0,T.f)(s)}.`:""}`,needsReauth:!1,lastPoll:s,subStatus:n}:{label:"Disconnected",className:"disconnected",detail:"Sign in again from the Account section or reconfigure the integration.",needsReauth:!1,lastPoll:s,subStatus:n}}_nav(t,e){e?(0,L.nL)(this,{tab:t,slug:e}):(0,L.nL)(this,{tab:t})}async _loadChangelog(){this._changelogLoading=!0,this._changelogError="",this._changelogBody="",this._changelogHtml="",this._changelogUrl="",this._changelogTitle="";const t=/beta|alpha/i.test("3.13.2");try{const e=await fetch("https://api.github.com/repos/WJDDesigns/Ultra-Card/releases?per_page=20",{headers:{Accept:"application/vnd.github.v3+json"}});if(!e.ok)throw new Error(`HTTP ${e.status}`);const a=await e.json(),o=t?a.find(t=>t.prerelease):a.find(t=>!t.prerelease);(null==o?void 0:o.body)?(this._changelogTitle=o.name||o.tag_name||"Changelog",this._changelogUrl=o.html_url||"",this._changelogBody=o.body,this._changelogHtml=await this._renderMarkdown(o.body)):this._changelogBody=t?"No beta release notes found.":"No stable release notes found."}catch(t){console.warn("Changelog fetch failed:",t),this._changelogError="Could not load release notes from GitHub."}finally{this._changelogLoading=!1}}async _renderMarkdown(t){try{const[{marked:e},{sanitizeMarkdownHtml:o}]=await Promise.all([a.e(23).then(()=>a(23)),Promise.all([a.e(9418),a.e(1172)]).then(()=>a(1172))]);return o(e.parse(t,{gfm:!0,breaks:!0,async:!1}),!1,{trusted:!1})}catch(t){return console.warn("Changelog markdown render failed:",t),""}}async _loadStats(){var t,e;if(this.hass){this._statsLoading=!0,this._statsError="";try{n.ucDashboardScannerService.initialize(this.hass);const a=await n.ucDashboardScannerService.scanAllDashboards();let o=1;try{const t=await this.hass.callWS({type:"lovelace/dashboards/list"});Array.isArray(t)&&(o=t.length+1)}catch(t){}this._stats={cardCount:a.card_count,viewCount:null!==(e=null===(t=a.views)||void 0===t?void 0:t.length)&&void 0!==e?e:0,dashboardCount:o}}catch(t){console.warn("Dashboard scan for stats failed:",t),this._statsError="Could not load dashboard stats.",this._stats=null}finally{this._statsLoading=!1}}else this._statsLoading=!1}render(){const t=this._authorAttention(),e=this._authorPresetsLoaded&&(t.awaiting>0||t.changes>0),a=/beta|alpha/i.test("3.13.2");return o.qy`
      <div class="welcome-hero">
        <div class="hero-mark" aria-hidden="true">
          <ha-icon icon="mdi:cards"></ha-icon>
        </div>
        <div class="hero-body">
          <span class="hero-eyebrow">
            <ha-icon icon="mdi:tag-outline"></ha-icon>
            Version ${"3.13.2"}${a?" · Beta":""}
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

      ${e?o.qy`
            <div class="author-prompt">
              <ha-icon icon="mdi:clipboard-text-clock-outline"></ha-icon>
              <div class="author-prompt-body">
                <p>
                  ${t.awaiting>0?this._t("hub.dashboard.presets_awaiting_review","{count} presets awaiting review").replace("{count}",String(t.awaiting)):o.s6}
                  ${t.awaiting>0&&t.changes>0?" · ":o.s6}
                  ${t.changes>0?this._t("hub.dashboard.presets_changes_requested","{count} with changes requested").replace("{count}",String(t.changes)):o.s6}
                </p>
                <button type="button" @click=${this._openMyPresets}>
                  <ha-icon icon="mdi:account-edit-outline"></ha-icon>
                  ${this._t("hub.dashboard.view_my_presets","View My Presets")}
                </button>
              </div>
            </div>
          `:o.s6}

      <div class="command-center">
        <div class="dash-card">
          <h3><ha-icon icon="mdi:cloud-sync"></ha-icon> Cloud connection</h3>
          ${(()=>{const t=this._connectionStatus();return o.qy`
              <div class="status-row">
                <span class="status-pill ${t.className}">${t.label}</span>
              </div>
              <p>${t.detail}</p>
              <div class="quick-links">
                <button class="hub-btn hub-btn--sm" @click=${()=>this._nav("account")}>
                  <ha-icon icon="mdi:account-cog"></ha-icon>
                  Account
                </button>
                ${t.needsReauth?o.qy`
                      <button
                        class="hub-btn hub-btn--sm hub-btn--outline"
                        @click=${()=>{window.location.href="/config/integrations/integration/ultra_card_pro_cloud"}}
                      >
                        <ha-icon icon="mdi:cog"></ha-icon>
                        Reconfigure
                      </button>
                    `:o.s6}
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
        <h3><ha-icon icon="mdi:arrow-expand-horizontal"></ha-icon> Layout width</h3>
        ${this._renderSectionsWidth()}
      </div>

      <div class="dash-card">
        <h3><ha-icon icon="mdi:vector-square"></ha-icon> FreeSpace</h3>
        ${(()=>{const t=(0,P.Jo)(this.hass);return o.qy`
            <div class="freespace-card">
              ${t?o.s6:o.qy`
                    <div class="freespace-warn">
                      <ha-icon icon="mdi:puzzle-outline"></ha-icon>
                      <span>
                        ${this._t("hub.freespace.needs_connect","Install Ultra Card Connect to unlock FreeSpace. Existing FreeSpace views still render without it.")}
                      </span>
                    </div>
                    <div class="quick-links">
                      <button
                        class="hub-btn hub-btn--sm hub-btn--outline"
                        @click=${()=>this._nav("docs","installation")}
                      >
                        <ha-icon icon="mdi:download"></ha-icon>
                        ${this._t("hub.freespace.install_connect","Install guide")}
                      </button>
                    </div>
                  `}
              <div class="freespace-row">
                <div class="freespace-text">
                  <strong>
                    ${t?this._t("hub.freespace.ready","FreeSpace is ready"):this._t("hub.freespace.title","FreeSpace")}
                  </strong>
                  <small>
                    ${this._t("hub.freespace.desc","A free-form dashboard layout: drag, resize, rotate, and layer any card anywhere. Looks like Home Assistant Sections, with full canvas freedom. Included with Ultra Card Connect.")}
                  </small>
                </div>
              </div>
              ${t?o.qy`
                    <ol class="freespace-steps">
                      <li>
                        ${this._t("hub.freespace.step1","Open a dashboard and tap Edit dashboard")}
                      </li>
                      <li>
                        ${this._t("hub.freespace.step2","Pencil the view → Layout → FreeSpace (Ultra Card)")}
                      </li>
                      <li>
                        ${this._t("hub.freespace.step3","Drag cards freely; use corner icons to rotate; layer them as you like")}
                      </li>
                    </ol>
                    <div class="quick-links">
                      <a
                        class="hub-btn hub-btn--sm hub-btn--outline"
                        href="https://ultracard.io/freespace/"
                        target="_blank"
                        rel="noopener"
                      >
                        <ha-icon icon="mdi:book-open-page-variant"></ha-icon>
                        ${this._t("hub.freespace.read_docs","FreeSpace docs")}
                      </a>
                    </div>
                  `:o.s6}
            </div>
          `})()}
      </div>

      <div class="dash-card">
        <h3><ha-icon icon="mdi:view-dashboard"></ha-icon> Your Home Assistant</h3>
        ${this._statsLoading?o.qy`<div class="stats-loading">Scanning all dashboards…</div>`:this._statsError?o.qy`<div class="stats-error">${this._statsError}</div>`:this._stats?o.qy`
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
                `:o.qy`<div class="stats-loading">No data</div>`}
      </div>

      <div class="dash-card">
        <h3>
          <ha-icon icon="mdi:new-box"></ha-icon>
          ${this._changelogTitle?/what'?s new/i.test(this._changelogTitle)?this._changelogTitle:`What's new · ${this._changelogTitle}`:"What's new"}
          <span class="h3-spacer"></span>
          ${this._changelogUrl?o.qy`<a href=${this._changelogUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub <ha-icon icon="mdi:open-in-new"></ha-icon>
              </a>`:o.s6}
        </h3>
        ${this._changelogLoading?o.qy`<div class="changelog-body-loading">Loading release notes…</div>`:this._changelogError?o.qy`<div class="changelog-body-error">${this._changelogError}</div>`:this._changelogHtml?o.qy`
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
                `:o.qy`<div class="changelog-plain">${this._changelogBody}</div>`}
      </div>
    `}};z.styles=[s.z,o.AH`
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

      .freespace-card {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .freespace-row {
        display: flex;
        align-items: flex-start;
        gap: 16px;
      }
      .freespace-text {
        flex: 1;
        min-width: 0;
      }
      .freespace-text strong {
        display: block;
        font-size: 15px;
        color: var(--primary-text-color);
      }
      .freespace-text small {
        display: block;
        margin-top: 4px;
        font-size: 13px;
        line-height: 1.4;
        color: var(--secondary-text-color);
      }
      .freespace-steps {
        margin: 0;
        padding-left: 18px;
        font-size: 13px;
        line-height: 1.5;
        color: var(--secondary-text-color);
      }
      .freespace-steps li {
        margin-bottom: 4px;
      }
      .freespace-warn {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 8px;
        background: rgba(var(--rgb-warning-color, 255, 152, 0), 0.12);
        color: var(--primary-text-color);
        font-size: 13px;
        line-height: 1.4;
      }
      .freespace-warn ha-icon {
        --mdc-icon-size: 18px;
        color: var(--warning-color, #ff9800);
        flex-shrink: 0;
        margin-top: 1px;
      }

      .sections-width {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .sections-width-text {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .sections-width-text strong {
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .sections-width-text small {
        font-size: 13px;
        line-height: 1.4;
        color: var(--secondary-text-color);
      }
      .sections-width-modes {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
      }
      .sections-width-modes .mode {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        padding: 10px 12px;
        text-align: left;
        font: inherit;
        color: var(--primary-text-color);
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        cursor: pointer;
        transition: border-color 0.15s ease, background 0.15s ease;
      }
      .sections-width-modes .mode:hover {
        border-color: var(--primary-color);
      }
      .sections-width-modes .mode:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
      }
      .sections-width-modes .mode.active {
        border-color: var(--primary-color);
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.1);
      }
      .sections-width-modes .mode-label {
        font-size: 13px;
        font-weight: 600;
      }
      .sections-width-modes .mode-hint {
        font-size: 11px;
        color: var(--secondary-text-color);
      }
      .sections-width-fields {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      .sections-width-fields .field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1 1 200px;
        min-width: 0;
      }
      .sections-width-fields .field span {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .sections-width-fields input {
        font: inherit;
        font-size: 13px;
        padding: 8px 10px;
        color: var(--primary-text-color);
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color);
        border-radius: 10px;
        outline: none;
      }
      .sections-width-fields input:focus-visible {
        border-color: var(--primary-color);
      }
      @media (max-width: 700px) {
        .sections-width-modes {
          grid-template-columns: 1fr;
        }
      }
    `],F([(0,r.MZ)({attribute:!1})],z.prototype,"hass",void 0),F([(0,r.wk)()],z.prototype,"_stats",void 0),F([(0,r.wk)()],z.prototype,"_statsLoading",void 0),F([(0,r.wk)()],z.prototype,"_statsError",void 0),F([(0,r.wk)()],z.prototype,"_changelogBody",void 0),F([(0,r.wk)()],z.prototype,"_changelogHtml",void 0),F([(0,r.wk)()],z.prototype,"_changelogUrl",void 0),F([(0,r.wk)()],z.prototype,"_changelogExpanded",void 0),F([(0,r.wk)()],z.prototype,"_changelogLoading",void 0),F([(0,r.wk)()],z.prototype,"_changelogError",void 0),F([(0,r.wk)()],z.prototype,"_changelogTitle",void 0),F([(0,r.wk)()],z.prototype,"_authorPresets",void 0),F([(0,r.wk)()],z.prototype,"_authorPresetsLoaded",void 0),F([(0,r.wk)()],z.prototype,"_sectionsWidthTick",void 0),z=F([(0,r.EM)("hub-dashboard-tab")],z)},8980(t,e,a){const o=new class{constructor(){this.hass=null}initialize(t){this.hass=t}async scanDashboard(){var t;if(!this.hass)throw new Error("Dashboard scanner not initialized with Home Assistant instance");try{const e=await this.getLovelaceConfig();if(!e)return this.createEmptySnapshot();const a=this.extractViews(e),o=[];for(const t of a){const a=this.scanViewForUltraCards(t,e);o.push(...a)}return{cards:o,views:a,scanned_at:(new Date).toISOString(),card_count:o.length,dashboard_path:null!==(t=this.getCurrentDashboardPath())&&void 0!==t?t:"default"}}catch(t){console.error("❌ Dashboard scan failed:",t);const e=t instanceof Error?t.message:String(t);throw new Error(`Failed to scan dashboard: ${e}`)}}async scanAllDashboards(){if(!this.hass)throw new Error("Dashboard scanner not initialized with Home Assistant instance");try{const t=await this.hass.callWS({type:"lovelace/dashboards/list"}),e=[],a=[];try{const t=await this.hass.callWS({type:"lovelace/config",url_path:null});if(t){const o=this.extractViews(t);a.push(...o);for(const a of o){const o=this.scanViewForUltraCards(a,t);e.push(...o)}}}catch(t){}if(Array.isArray(t))for(const o of t){const t=o.url_path||o.id;try{const o=await this.hass.callWS({type:"lovelace/config",url_path:t});if(o){const t=this.extractViews(o);a.push(...t);for(const a of t){const t=this.scanViewForUltraCards(a,o);e.push(...t)}}}catch(t){}}return{cards:e,views:a,scanned_at:(new Date).toISOString(),card_count:e.length,dashboard_path:"all"}}catch(t){console.error("❌ Global dashboard scan failed:",t);const e=t instanceof Error?t.message:String(t);throw new Error(`Failed to scan all dashboards: ${e}`)}}async getDashboardViews(){if(!this.hass)throw new Error("Dashboard scanner not initialized");try{const t=await this.getLovelaceConfig();return t?this.extractViews(t):[]}catch(t){return console.error("Failed to get dashboard views:",t),[]}}async scanView(t){if(!this.hass)throw new Error("Dashboard scanner not initialized");try{const e=await this.getLovelaceConfig();if(!e)return[];const a=this.extractViews(e).find(e=>e.id===t||e.path===t);return a?this.scanViewForUltraCards(a,e):(console.warn(`View ${t} not found`),[])}catch(e){return console.error(`Failed to scan view ${t}:`,e),[]}}getCurrentDashboardPath(){const t=window.location.pathname,e=t.match(/\/lovelace\/([^/]+)/);if(e)return e[1];if(["/ultra-card-hub","/config","/developer-tools","/hacs","/logbook","/history","/map","/energy","/todo"].some(e=>t.startsWith(e)))return null;const a=t.match(/^\/([^/]+)/);return a?a[1]:null}async getLovelaceConfig(){var t;if(!this.hass)return null;try{const e=this.getCurrentDashboardPath();try{const t=await this.hass.callWS({type:"lovelace/config",url_path:e});if(t)return t}catch(t){}try{const t=await this.hass.callWS({type:"lovelace/dashboards/list"});if(Array.isArray(t)){const a=e?t.find(t=>t.url_path===e||t.id===e):null;if(a){const t=await this.hass.callWS({type:"lovelace/config",url_path:a.url_path||a.id});if(t)return t}else try{const t=await this.hass.callWS({type:"lovelace/config",url_path:null});if(t)return t}catch(t){}}}catch(t){}const a=null===(t=document.querySelector("home-assistant"))||void 0===t?void 0:t.lovelace;if(a&&a.config)return a.config;const o=document.querySelector("hui-root");if(o){const t=o.lovelace;if(t&&t.config)return t.config}const r=document.querySelector("home-assistant");if(r&&r.lovelace&&r.lovelace.config)return r.lovelace.config;const i=document.querySelector("ha-panel-lovelace");if(i){const t=i.lovelace||i._lovelace;if(t&&t.config)return t.config}if(window.__lovelace){const t=window.__lovelace;if(t.config)return t.config}return null}catch(t){return console.error("❌ Error getting Lovelace config:",t),null}}extractViews(t){if(!t||!t.views)return[];const e=[];return t.views.forEach((t,a)=>{e.push({id:t.path||`view_${a}`,title:t.title||t.path||`View ${a+1}`,path:t.path||`${a}`,icon:t.icon,panel:t.panel||!1,theme:t.theme})}),e}scanViewForUltraCards(t,e){if(!e||!e.views)return[];const a=[],o=e.views.findIndex(e=>e.path&&e.path===t.path||e.title&&e.title===t.title);if(-1===o)return a;const r=e.views[o];return"sections"===r.type&&Array.isArray(r.sections)?(r.sections.forEach((e,o)=>{Array.isArray(e.cards)&&e.cards.forEach((e,r)=>{if(this.isUltraCard(e))a.push({config:e,card_index:a.length,view_id:t.id,view_title:t.title,view_path:t.path,card_name:e.card_name||`Ultra Card ${a.length+1}`,section_index:o,card_index_in_section:r});else{const i=this.findNestedUltraCards(e);i.length>0&&i.forEach(e=>{a.push({config:e,card_index:a.length,view_id:t.id,view_title:t.title,view_path:t.path,card_name:e.card_name||`Ultra Card ${a.length+1}`,section_index:o,card_index_in_section:r})})}})}),a):r.cards&&Array.isArray(r.cards)?(r.cards.forEach((e,o)=>{if(this.isUltraCard(e))a.push({config:e,card_index:o,view_id:t.id,view_title:t.title,view_path:t.path,card_name:e.card_name||`Ultra Card ${o+1}`});else{const r=this.findNestedUltraCards(e);r.length>0&&r.forEach(e=>{a.push({config:e,card_index:o,view_id:t.id,view_title:t.title,view_path:t.path,card_name:e.card_name||`Ultra Card ${o+1}`})})}}),a):a}isUltraCard(t){return!(!t||"object"!=typeof t)&&("custom:ultra-card"===t.type||"custom:ultra-vehicle-card"===t.type||t.layout&&t.layout.rows)}findNestedUltraCards(t){const e=[];return t&&"object"==typeof t?(Array.isArray(t.cards)&&t.cards.forEach(t=>{this.isUltraCard(t)?e.push(t):e.push(...this.findNestedUltraCards(t))}),t.card&&(this.isUltraCard(t.card)?e.push(t.card):e.push(...this.findNestedUltraCards(t.card))),e):e}createEmptySnapshot(){return{cards:[],views:[],scanned_at:(new Date).toISOString(),card_count:0}}async canScan(){if(!this.hass)return!1;try{return null!==await this.getLovelaceConfig()}catch(t){return!1}}async getDashboardStats(){try{const t=await this.getLovelaceConfig();if(!t||!t.views)return{total_views:0,total_cards:0,ultra_cards:0};const e=t.views;let a=0,o=0;return e.forEach(t=>{"sections"===t.type&&Array.isArray(t.sections)?t.sections.forEach(t=>{Array.isArray(t.cards)&&(a+=t.cards.length,o+=t.cards.filter(t=>this.isUltraCard(t)).length)}):Array.isArray(t.cards)&&(a+=t.cards.length,o+=t.cards.filter(t=>this.isUltraCard(t)).length)}),{total_views:e.length,total_cards:a,ultra_cards:o}}catch(t){return console.error("Failed to get dashboard stats:",t),{total_views:0,total_cards:0,ultra_cards:0}}}};a.d(e,["ucDashboardScannerService",0,o])},5650(t,e,a){var o=a(378);const r="https://ultracard.io/wp-json/ultra-card/v1";function i(t){if(null==t||"object"!=typeof t)return t;const e=t;return"_body"in e&&void 0!==e._body?i(e._body):"data"in e&&null!=e.data&&"object"==typeof e.data&&!("id"in e)?e.data:t}function s(t,e){if(!t||"object"!=typeof t)return e;const a=t;if("string"==typeof a.message&&a.message)return a.message;if("string"==typeof a.error&&a.error)return a.error;if(a.data&&"object"==typeof a.data&&null!==a.data&&"message"in a.data){const t=a.data.message;if("string"==typeof t&&t)return t}return e}function n(t){var e,a,o,r,s,n,c;const l=null!==(e=i(t))&&void 0!==e?e:{},d=Number(l.id);if(!Number.isFinite(d)||d<=0)throw new Error("Invalid preset response: missing id");const h=function(t){if(!Array.isArray(t))return;const e=t.map(t=>"number"==typeof t?t:Number(t)).filter(t=>Number.isFinite(t)&&t>0);return e.length?e:void 0}(l.photo_ids),u={id:d,name:String(null!==(a=l.name)&&void 0!==a?a:""),description:String(null!==(o=l.description)&&void 0!==o?o:""),category:String(null!==(r=l.category)&&void 0!==r?r:""),tags:(g=l.tags,Array.isArray(g)?g.map(t=>String(t)).filter(Boolean):"string"==typeof g&&g.trim()?g.split(",").map(t=>t.trim()).filter(Boolean):[]),shortcode:String(null!==(s=l.shortcode)&&void 0!==s?s:""),status:String(null!==(n=l.status)&&void 0!==n?n:"pending"),review_status:String(null!==(c=l.review_status)&&void 0!==c?c:"pending")||"pending",has_pending_revision:Boolean(l.has_pending_revision),gallery:(p=l.gallery,Array.isArray(p)?p.map(t=>String(t)).filter(Boolean):[]),downloads:Number(l.downloads)||0,rating:Number(l.rating)||0,rating_count:Number(l.rating_count)||0};var p,g;if("string"==typeof l.integrations&&(u.integrations=l.integrations),"string"==typeof l.moderator_note&&(u.moderator_note=l.moderator_note),void 0!==l.pending_revision&&(u.pending_revision=l.pending_revision&&"object"==typeof l.pending_revision?l.pending_revision:null),h&&(u.photo_ids=h),"string"==typeof l.featured_image&&l.featured_image&&(u.featured_image=l.featured_image),null!=l.featured_image_id&&Number.isFinite(Number(l.featured_image_id))){const t=Number(l.featured_image_id);t>0&&(u.featured_image_id=t)}return"string"==typeof l.preset_url&&(u.preset_url=l.preset_url),"string"==typeof l.submitted_at&&(u.submitted_at=l.submitted_at),"string"==typeof l.reviewed_at&&(u.reviewed_at=l.reviewed_at),null!=l.author_id&&Number.isFinite(Number(l.author_id))&&(u.author_id=Number(l.author_id)),u}async function c(t){return t.json().catch(()=>null)}const l=new class{async listMine(){if(!o.xd.isAuthenticated())throw new Error("Authentication required to list your presets");const t=await o.xd.authenticatedFetch(`${r}/presets/mine`);if(!t.ok){const e=s(await c(t),`Failed to load your presets (HTTP ${t.status})`),a=new Error(e);throw a.status=t.status,a}const e=i(await c(t));let a=[];if(Array.isArray(e))a=e;else if(e&&"object"==typeof e){const t=e;Array.isArray(t.presets)&&(a=t.presets)}return a.map(t=>n(t))}async get(t){if(!o.xd.isAuthenticated())throw new Error("Authentication required");const e=await o.xd.authenticatedFetch(`${r}/presets/${t}`);if(!e.ok){const t=await c(e);throw new Error(s(t,`Failed to load preset (HTTP ${e.status})`))}return n(await c(e))}async update(t,e){if(!o.xd.isAuthenticated())throw new Error("Authentication required to update presets");const a={};void 0!==e.name&&(a.name=e.name),void 0!==e.description&&(a.description=e.description),void 0!==e.category&&(a.category=e.category),void 0!==e.tags&&(a.tags=e.tags),void 0!==e.shortcode&&(a.shortcode=e.shortcode),void 0!==e.integrations&&(a.integrations=e.integrations),void 0!==e.featured_image_id&&(a.featured_image_id=e.featured_image_id),void 0!==e.photo_ids&&(a.photo_ids=e.photo_ids);const i=await o.xd.authenticatedFetch(`${r}/presets/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!i.ok){const t=await c(i);throw new Error(s(t,`Failed to update preset (HTTP ${i.status})`))}return n(await c(i))}async remove(t){if(!o.xd.isAuthenticated())throw new Error("Authentication required to delete presets");const e=await o.xd.authenticatedFetch(`${r}/presets/${t}`,{method:"DELETE"});if(!e.ok){const t=await c(e);throw new Error(s(t,`Failed to delete preset (HTTP ${e.status})`))}}async withdraw(t){if(!o.xd.isAuthenticated())throw new Error("Authentication required to withdraw presets");const e=await o.xd.authenticatedFetch(`${r}/presets/${t}/withdraw`,{method:"POST"});if(!e.ok){const t=await c(e);throw new Error(s(t,`Failed to withdraw preset (HTTP ${e.status})`))}return n(await c(e))}};a.d(e,["a",0,l])},9286(t,e,a){function o(t){try{return localStorage.getItem(t)}catch(t){return null}}function r(t,e){try{return localStorage.setItem(t,e),!0}catch(t){return!1}}function i(t){try{localStorage.removeItem(t)}catch(t){}}a.d(e,{FX:()=>r,Pw:()=>i,bi:()=>o})},7804(t,e,a){a.d(e,{WL:()=>o});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}a.d(e,["OA",0,{ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},"u$",0,t=>(...e)=>({_$litDirective$:t,values:e})])},6781(t,e,a){a.d(e,{_:()=>s});var o=a(6752),r=a(7804);class i extends r.WL{constructor(t){if(super(t),this.it=o.s6,t.type!==r.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===o.s6||null==t)return this._t=void 0,this.it=t;if(t===o.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;const s=(0,r.u$)(i)}};