/*! For license information please see uc-4676.02b50358.js.LICENSE.txt */
export const __webpack_esm_ids__=[23,1172,4676];export const __webpack_esm_modules__={4676(e,t,r){r.r(t),r.d(t,{HubDocsTab:()=>D});var n=r(2618),s=r(4791),i=r(6781),o=r(23),l=r(9978),a=r(1172),c=r(6752);const{I:h}=c.ge;var p=r(7804);const u=(e,t)=>{const r=e._$AN;if(void 0===r)return!1;for(const e of r)e._$AO?.(t,!1),u(e,t);return!0},d=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===r?.size)},g=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),f(t)}};function b(e){void 0!==this._$AN?(d(this),this._$AM=e,g(this)):this._$AM=e}function k(e,t=!1,r=0){const n=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(t)if(Array.isArray(n))for(let e=r;e<n.length;e++)u(n[e],!1),d(n[e]);else null!=n&&(u(n,!1),d(n));else u(this,e)}const f=e=>{e.type==p.OA.CHILD&&(e._$AP??=k,e._$AQ??=b)};class x extends p.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),g(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(u(this,e),d(this))}setValue(e){if((()=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class m{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class w{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const v=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,_=1073741823,y=(0,p.u$)(class extends x{constructor(){super(...arguments),this._$Cwt=_,this._$Cbt=[],this._$CK=new m(this),this._$CX=new w}render(...e){return e.find(e=>!v(e))??c.c0}update(e,t){const r=this._$Cbt;let n=r.length;this._$Cbt=t;const s=this._$CK,i=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const o=t[e];if(!v(o))return this._$Cwt=e,o;e<n&&o===r[e]||(this._$Cwt=_,n=0,Promise.resolve(o).then(async e=>{for(;i.get();)await i.get();const t=s.deref();if(void 0!==t){const r=t._$Cbt.indexOf(o);r>-1&&r<t._$Cwt&&(t._$Cwt=r,t.setValue(e))}}))}return c.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});var $=r(6478);const S="/hacsfiles/Ultra-Card/assets/Ultra.jpg";var A=r(9879);let T,R;var z=r(821),C=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o};let P=class extends n.WF{render(){var e,t;const s=(null===(t=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===t?void 0:t.language)||"en";return n.qy`
      <div class="about-tab">
        <div class="about-logo-container">
          <img
            src="${y(null!=T?T:T?Promise.resolve(T):(R||(R=r.ei(3002,()=>import("./uc-default-image.7ae9b424.js")).then(()=>r(6900)).then(e=>T=e.DEFAULT_VEHICLE_IMAGE_BASE64).catch(e=>{throw R=void 0,(0,A.Sn)(e,"default image"),e})),R),"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")}"
            alt="Ultra Card"
            class="about-logo"
            @error=${e=>{const t=e.currentTarget;t&&t.src!==S&&(t.src=S)}}
          />
        </div>

        <div class="about-developed-by">
          ${(0,$.kg)("editor.about.developed_by",s,"Developed by")}
          <a href="https://wjddesigns.com" target="_blank" rel="noopener">WJD Designs</a>
        </div>

        <div class="about-description">
          <p>
            ${(0,$.kg)("editor.about.desc1",s,"A powerful modular card builder for Home Assistant")}
          </p>
          <p>
            ${(0,$.kg)("editor.about.desc2",s,"Create custom layouts with a professional page-builder interface")}
          </p>
          <p>
            ${(0,$.kg)("editor.about.desc3",s,"Modular layout system with conditional logic and professional design tools")}
          </p>
        </div>

        <div class="about-buttons">
          <a
            href="https://discord.gg/6xVgHxzzBV"
            target="_blank"
            rel="noopener"
            class="about-button discord"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" class="about-button-icon">
              <path
                fill="currentColor"
                d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
              />
            </svg>
            ${(0,$.kg)("editor.about.join_discord",s,"Join Our Discord")}
          </a>

          <a
            href="https://github.com/WJDDesigns/Ultra-Card"
            target="_blank"
            rel="noopener"
            class="about-button github"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" class="about-button-icon">
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
            ${(0,$.kg)("editor.about.github_repo",s,"Check Out Our Github")}
          </a>

          <button type="button" class="about-button docs" @click=${()=>(0,z.DC)("home")}>
            <ha-icon icon="mdi:book-open-variant"></ha-icon>
            ${(0,$.kg)("editor.about.hub_docs",s,"Documentation in Ultra Card Hub")}
          </button>
        </div>

        <div class="support-section">
          <h3>${(0,$.kg)("editor.about.support_title",s,"Support Ultra Card")}</h3>
          <p>
            ${(0,$.kg)("editor.about.support_desc",s,"Your generous tips fuel the development of amazing features for this card! Without support from users like you, continued innovation wouldn't be possible.")}
          </p>

          <a
            href="https://www.paypal.com/ncp/payment/NLHALFSPA7PUS"
            target="_blank"
            rel="noopener"
            class="about-button paypal"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" class="about-button-icon">
              <path
                fill="currentColor"
                d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.555.493l-1.07 6.781a.382.382 0 0 0 .378.44h3.613a.896.896 0 0 0 .884-.764l.035-.234.65-4.135.041-.29a.896.896 0 0 1 .884-.763h.557c3.748 0 6.68-1.526 7.534-5.942.356-1.846.174-3.388-.777-4.471z"
              />
            </svg>
            ${(0,$.kg)("editor.about.leave_tip",s,"LEAVE A TIP (PAYPAL)")}
          </a>
        </div>

        <div class="version-info">
          <p>${(0,$.kg)("editor.about.version",s,"Version")} ${"3.13.2"}</p>
        </div>
      </div>
    `}};P.styles=n.AH`
    .about-tab {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px;
      max-width: 600px;
      margin: 0 auto;
      color: var(--primary-text-color);
    }

    .about-logo-container {
      margin-bottom: 24px;
    }

    .about-logo {
      max-width: 300px;
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    }

    .about-developed-by {
      font-size: 1.2em;
      margin-bottom: 24px;
      color: var(--secondary-text-color);
      text-align: center;
    }

    .about-developed-by a {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: bold;
    }

    .about-developed-by a:hover {
      text-decoration: underline;
    }

    .about-description {
      text-align: center;
      margin-bottom: 32px;
    }

    .about-description p {
      margin: 8px 0;
      color: var(--secondary-text-color);
      line-height: 1.5;
    }

    .about-buttons {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      max-width: 300px;
      margin-bottom: 32px;
    }

    .about-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 20px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s ease;
      color: white;
      border: none;
      font-size: 14px;
    }

    .about-button svg {
      margin-right: 8px;
      fill: currentColor;
    }

    .about-button.discord {
      background-color: #5865f2;
    }

    .about-button.github {
      background-color: #24292e;
    }

    .about-button.docs {
      background-color: var(--primary-color);
      color: var(--text-primary-color, #fff);
      cursor: pointer;
    }

    .about-button.paypal {
      background-color: #0070ba;
    }

    .about-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .support-section {
      text-align: center;
      margin-bottom: 32px;
      padding: 24px;
      background: var(--secondary-background-color);
      border-radius: 12px;
      width: 100%;
      max-width: 500px;
    }

    .support-section h3 {
      color: var(--primary-color);
      margin: 0 0 16px 0;
      font-size: 1.5em;
    }

    .support-section p {
      color: var(--secondary-text-color);
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .version-info {
      text-align: center;
      color: var(--secondary-text-color);
      font-size: 0.9em;
    }

    .version-info p {
      margin: 4px 0;
    }
  `,C([(0,s.MZ)({attribute:!1})],P.prototype,"hass",void 0),P=C([(0,s.EM)("ultra-about-tab")],P);var E=function(e,t,r,n){var s,i=arguments.length,o=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,r,o):s(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o};const I="/ultra_card_pro_cloud_panel/docs",L="https://github.com/WJDDesigns/Ultra-Card/wiki",B="ultra_card_hub_docs_slug",q="__about";o.marked.setOptions({gfm:!0,breaks:!0});let D=class extends n.WF{constructor(){super(...arguments),this.initialSlug="",this._index=null,this._searchIndex=[],this._selectedSlug="home",this._pageHtml="",this._pageToc=[],this._loading=!0,this._error=null,this._search="",this._openSections=new Set,this._keydownHandler=e=>{var t,r,n,s;if("/"!==e.key)return;const i=null===(r=null===(t=e.target)||void 0===t?void 0:t.tagName)||void 0===r?void 0:r.toLowerCase();if("input"===i||"textarea"===i||(null===(n=e.target)||void 0===n?void 0:n.isContentEditable))return;e.preventDefault();const o=null===(s=this.renderRoot)||void 0===s?void 0:s.querySelector(".docs-search");null==o||o.focus()}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._keydownHandler);const e=localStorage.getItem(B);this.initialSlug?this._selectedSlug=this.initialSlug:e&&(this._selectedSlug=e),this.reload()}updated(e){e.has("initialSlug")&&this.initialSlug&&this.openSlug(this.initialSlug)}disconnectedCallback(){document.removeEventListener("keydown",this._keydownHandler),super.disconnectedCallback()}reload(){this._loadIndex(!0)}_docsBundleStale(){var e,t;const r=null===(e=this._index)||void 0===e?void 0:e.synced_at,n=null===(t=this._index)||void 0===t?void 0:t.wiki_last_commit_at;if(!r||!n)return!1;const s=new Date(r).getTime(),i=new Date(n).getTime();return!Number.isNaN(s)&&!Number.isNaN(i)&&i>s+6e4}async openSlug(e){this._index?await this._loadPage(e):this._selectedSlug=e}_cacheBust(){return`t=${Date.now()}`}async _loadIndex(e=!1){var t,r,n,s;this._loading=!0,this._error=null;try{const i=e?this._cacheBust():"v=1",[o,l]=await Promise.all([fetch(`${I}/index.json?${i}`),fetch(`${I}/search-index.json?${i}`)]);if(!o.ok)throw new Error(`Documentation index not found (${o.status})`);const a=await o.json();this._index=a,l.ok&&(this._searchIndex=await l.json()),this._initOpenSections(a.sections);const c=this.initialSlug||(this._selectedSlug===q||a.pages.some(e=>e.slug===this._selectedSlug)?this._selectedSlug:null!==(s=null!==(r=null===(t=a.pages.find(e=>"home"===e.slug))||void 0===t?void 0:t.slug)&&void 0!==r?r:null===(n=a.pages[0])||void 0===n?void 0:n.slug)&&void 0!==s?s:"home");await this._loadPage(c)}catch(e){this._error=e instanceof Error?e.message:String(e),this._loading=!1}}_initOpenSections(e){const t=new Set;null==e||e.forEach((e,r)=>{r<3&&t.add(e.title)}),this._openSections=t}_pageBySlug(e){var t;return null===(t=this._index)||void 0===t?void 0:t.pages.find(t=>t.slug===e)}_titleForSlug(e){var t,r;return null!==(r=null===(t=this._pageBySlug(e))||void 0===t?void 0:t.title)&&void 0!==r?r:e}async _loadPage(e){if(e===q)return this._selectedSlug=q,this._pageHtml="",this._pageToc=[],this._error=null,this._loading=!1,void localStorage.setItem(B,q);const t=this._pageBySlug(e);if(!t)return this._pageHtml="",this._pageToc=[],void(this._loading=!1);this._loading=!0,this._selectedSlug=e,localStorage.setItem(B,e);try{const e=await fetch(`${I}/${t.file}?${this._cacheBust()}`);if(!e.ok)throw new Error(`Failed to load ${t.title}`);const r=await e.text(),n=o.marked.parse(r),s=(new DOMParser).parseFromString(n,"text/html");this._pageToc=this._buildTocFromDoc(s);const i=s.body.innerHTML;this._pageHtml=(0,a.sanitizeMarkdownHtml)(i,!0),this._error=null}catch(e){this._error=e instanceof Error?e.message:String(e),this._pageHtml="",this._pageToc=[]}finally{this._loading=!1}}_buildTocFromDoc(e){const t=[];return e.querySelectorAll("h2, h3").forEach((e,r)=>{var n;const s=(null===(n=e.textContent)||void 0===n?void 0:n.trim())||"";if(!s)return;const i=`uc-toc-${r}`;e.id=i,t.push({id:i,text:s,level:"H2"===e.tagName?2:3})}),t}_onContentClick(e){const t=e.target.closest("a");if(!t)return;const r=(t.getAttribute("href")||"").match(/^#uc-doc-(.+)$/);r&&(e.preventDefault(),this._loadPage(r[1]))}_scrollToToc(e){var t;const r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(".docs-content"),n=null==r?void 0:r.querySelector(`#${e}`);null==n||n.scrollIntoView({behavior:"smooth",block:"start"})}_searchResults(){const e=this._search.trim().toLowerCase();return!e||e.length<2?[]:this._searchIndex.filter(t=>`${t.title} ${t.excerpt} ${t.headings.join(" ")}`.toLowerCase().includes(e)).slice(0,12)}_toggleSection(e,t){const r=new Set(this._openSections);t?r.add(e):r.delete(e),this._openSections=r}_renderNavSections(){var e,t,r;const s=null===(e=this._index)||void 0===e?void 0:e.sections;return(null==s?void 0:s.length)?s.map(e=>{var t;return n.qy`
        <details
          class="docs-section"
          ?open=${this._openSections.has(e.title)}
          @toggle=${t=>{const r=t.target;this._toggleSection(e.title,r.open)}}
        >
          <summary>${e.title}</summary>
          <div class="docs-nav">
            ${e.slugs.map(e=>this._renderNavButton(e))}
            ${null===(t=e.subsections)||void 0===t?void 0:t.map(e=>n.qy`
                <p class="docs-subsection-label">${e.title}</p>
                ${e.slugs.map(e=>this._renderNavButton(e))}
              `)}
          </div>
        </details>
      `}):(null!==(r=null===(t=this._index)||void 0===t?void 0:t.pages)&&void 0!==r?r:[]).map(e=>this._renderNavButton(e.slug))}_renderNavButton(e){return n.qy`
      <button
        class=${this._selectedSlug===e?"active":""}
        @click=${()=>{this._loadPage(e)}}
      >
        ${this._titleForSlug(e)}
      </button>
    `}_formatSyncedAt(e){if(!e)return"unknown";try{return new Date(e).toLocaleString()}catch(t){return null!=e?e:"unknown"}}render(){var e,t,r,s;if(this._error&&!this._index)return n.qy`
        <div class="docs-error">
          <p>${this._error}</p>
          <p><a href=${L} target="_blank" rel="noopener">View docs on GitHub Wiki</a></p>
        </div>
      `;const o=this._searchResults(),l=this._search.trim().length>=2;return n.qy`
      <div class="docs-toolbar">
        <button ?disabled=${this._loading} @click=${()=>this.reload()}>
          <ha-icon icon="mdi:refresh"></ha-icon>
          Refresh
        </button>
      </div>

      ${this._docsBundleStale()?n.qy`
            <div class="docs-stale-banner" role="status">
              The GitHub wiki has newer edits than this bundled copy (wiki
              ${this._formatSyncedAt(null===(e=this._index)||void 0===e?void 0:e.wiki_last_commit_at)}, bundle
              ${this._formatSyncedAt(null===(t=this._index)||void 0===t?void 0:t.synced_at)}). Content is still usable; a
              future Connect release will refresh the bundle.
            </div>
          `:n.s6}

      <div class="docs-layout">
        <aside class="docs-sidebar">
          <h2>Documentation</h2>
          <div class="docs-search-hint">Press <kbd>/</kbd> to focus search</div>
          <input
            class="docs-search"
            type="search"
            placeholder="Search docs…"
            .value=${this._search}
            @input=${e=>{this._search=e.target.value}}
          />
          ${l?n.qy`
                ${o.map(e=>n.qy`
                    <div
                      class="search-hit"
                      @click=${()=>{this._search="",this._loadPage(e.slug)}}
                    >
                      <div class="search-hit-title">${e.title}</div>
                      <div class="search-hit-excerpt">${e.excerpt}</div>
                    </div>
                  `)}
                ${0===o.length?n.qy`<div class="docs-empty">No matches</div>`:n.s6}
              `:n.qy`
                <nav aria-label="Documentation pages">
                  ${this._renderNavSections()}
                  <div class="docs-nav" style="margin-top:8px;">
                    <button
                      class=${this._selectedSlug===q?"active":""}
                      @click=${()=>{this._loadPage(q)}}
                    >
                      About Ultra Card
                    </button>
                  </div>
                </nav>
              `}
          <div class="docs-meta">
            Synced from
            <a href=${L} target="_blank" rel="noopener">Ultra Card Wiki</a><br />
            Last sync: ${this._formatSyncedAt(null===(r=this._index)||void 0===r?void 0:r.synced_at)}
            ${(null===(s=this._index)||void 0===s?void 0:s.wiki_last_commit_at)?n.qy` · Wiki commit: ${this._formatSyncedAt(this._index.wiki_last_commit_at)}`:n.s6}<br />
            <a href=${L} target="_blank" rel="noopener">Edit on GitHub</a>
          </div>
        </aside>

        <div class="docs-main">
          ${this._pageToc.length>0?n.qy`
                <div class="docs-toc">
                  ${this._pageToc.map(e=>n.qy`
                      <button @click=${()=>this._scrollToToc(e.id)}>
                        ${e.text}
                      </button>
                    `)}
                </div>
              `:n.s6}
          <article class="docs-content" aria-live="polite" @click=${this._onContentClick}>
            ${this._selectedSlug===q?n.qy`<ultra-about-tab .hass=${this.hass}></ultra-about-tab>`:this._loading?n.qy`<div class="docs-empty">Loading…</div>`:this._error?n.qy`<div class="docs-error">${this._error}</div>`:n.qy`<div class="docs-markdown">${(0,i._)(this._pageHtml)}</div>`}
          </article>
        </div>
      </div>
    `}};D.styles=[l.z,n.AH`
      :host {
        display: block;
        animation: fadeSlideIn 0.3s ease-out;
      }

      .docs-layout {
        display: grid;
        grid-template-columns: minmax(220px, 300px) 1fr;
        gap: 20px;
        min-height: 420px;
      }

      @media (max-width: 900px) {
        .docs-layout {
          grid-template-columns: 1fr;
        }
      }

      .docs-sidebar {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 16px;
        max-height: 70vh;
        overflow: auto;
      }

      .docs-sidebar h2 {
        margin: 0 0 12px;
        font-size: 16px;
        font-weight: 700;
      }

      .docs-search {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 12px;
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: var(--primary-background-color);
        color: var(--primary-text-color);
        font-size: 13px;
      }

      .docs-section {
        margin-bottom: 8px;
      }

      .docs-section summary {
        cursor: pointer;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--secondary-text-color);
        padding: 6px 4px;
        list-style: none;
      }

      .docs-section summary::-webkit-details-marker {
        display: none;
      }

      .docs-section[open] summary {
        color: var(--primary-color);
      }

      .docs-subsection-label {
        font-size: 11px;
        font-weight: 600;
        color: var(--secondary-text-color);
        padding: 8px 10px 4px;
        margin: 0;
      }

      .docs-nav button {
        display: block;
        width: 100%;
        text-align: left;
        padding: 7px 10px;
        margin-bottom: 2px;
        border: none;
        border-radius: 8px;
        background: transparent;
        color: var(--primary-text-color);
        font-size: 13px;
        cursor: pointer;
      }

      .docs-nav button:hover {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      }

      .docs-nav button.active {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
        color: var(--primary-color);
        font-weight: 600;
      }

      .search-hit {
        padding: 8px 10px;
        border-radius: 8px;
        cursor: pointer;
        margin-bottom: 4px;
      }

      .search-hit:hover {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      }

      .search-hit-title {
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .search-hit-excerpt {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        line-height: 1.4;
      }

      .docs-meta {
        margin-top: 16px;
        padding-top: 12px;
        border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        font-size: 11px;
        color: var(--secondary-text-color);
        line-height: 1.5;
      }

      .docs-meta a {
        color: var(--primary-color);
      }

      .docs-main {
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-width: 0;
      }

      .docs-toc {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 0 4px;
      }

      .docs-toc button {
        font-size: 12px;
        padding: 4px 10px;
        border-radius: 16px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        color: var(--secondary-text-color);
        cursor: pointer;
      }

      .docs-toc button:hover {
        border-color: var(--primary-color);
        color: var(--primary-color);
      }

      .docs-content {
        background: var(--ha-card-background, var(--card-background-color));
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        border-radius: 14px;
        padding: 24px 28px;
        max-height: 70vh;
        overflow: auto;
      }

      .docs-content :is(h1, h2, h3, h4) {
        color: var(--primary-text-color);
        margin-top: 1.2em;
        margin-bottom: 0.5em;
        scroll-margin-top: 12px;
      }

      .docs-content h1:first-child {
        margin-top: 0;
      }

      .docs-content p,
      .docs-content li {
        color: var(--primary-text-color);
        line-height: 1.65;
        font-size: 14px;
      }

      .docs-content a {
        color: var(--primary-color);
        cursor: pointer;
      }

      .docs-content pre {
        background: var(--code-editor-background-color, rgba(0, 0, 0, 0.06));
        padding: 12px;
        border-radius: 8px;
        overflow-x: auto;
        font-size: 13px;
      }

      .docs-toolbar {
        display: flex;
        justify-content: flex-end;
      }

      .docs-toolbar button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        border-radius: 20px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
        color: var(--secondary-text-color);
        cursor: pointer;
        font-size: 12px;
      }

      .docs-empty,
      .docs-error {
        padding: 32px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .docs-error {
        color: var(--error-color, #f44336);
      }

      .docs-stale-banner {
        margin-bottom: 12px;
        padding: 10px 14px;
        border-radius: 10px;
        font-size: 13px;
        line-height: 1.45;
        background: rgba(255, 152, 0, 0.1);
        border: 1px solid rgba(255, 152, 0, 0.25);
        color: var(--primary-text-color);
      }

      .docs-search-hint {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin: 4px 0 8px;
      }
    `],E([(0,s.MZ)({attribute:!1})],D.prototype,"hass",void 0),E([(0,s.MZ)({type:String})],D.prototype,"initialSlug",void 0),E([(0,s.wk)()],D.prototype,"_index",void 0),E([(0,s.wk)()],D.prototype,"_searchIndex",void 0),E([(0,s.wk)()],D.prototype,"_selectedSlug",void 0),E([(0,s.wk)()],D.prototype,"_pageHtml",void 0),E([(0,s.wk)()],D.prototype,"_pageToc",void 0),E([(0,s.wk)()],D.prototype,"_loading",void 0),E([(0,s.wk)()],D.prototype,"_error",void 0),E([(0,s.wk)()],D.prototype,"_search",void 0),E([(0,s.wk)()],D.prototype,"_openSections",void 0),D=E([(0,s.EM)("hub-docs-tab")],D)},1172(e,t,r){r.r(t),r.d(t,{escapeHtml:()=>u,sanitizeMarkdownHtml:()=>c,sanitizePresetHtml:()=>h,sanitizeRichTextHtml:()=>p,stripCssFetches:()=>o});var n=r(9418);const s=["script","iframe","object","embed","form","input","button","textarea","select","option"],i=/url\s*\(|image-set\s*\(|-moz-binding|behavior\s*:|@import/i;function o(e){return e&&i.test(e)?e.split(";").filter(e=>e.includes(":")&&!i.test(e)).map(e=>e.trim()).filter(Boolean).join("; "):e}let l=!1;function a(e,t){l=!e;try{return t()}finally{l=!1}}function c(e,t,r){const i=!1!==(null==r?void 0:r.trusted);return a(i,()=>n.A.sanitize(e,{USE_PROFILES:{html:!0},FORBID_TAGS:t&&i?s:[...s,"style"],FORCE_BODY:t}))}function h(e){return a(!1,()=>n.A.sanitize(e,{USE_PROFILES:{html:!0},FORBID_TAGS:[...s,"style"]}))}function p(e,t){return a(!1!==(null==t?void 0:t.trusted),()=>n.A.sanitize(e,{ALLOWED_TAGS:["p","br","strong","b","em","i","u","s","span","a","mark"],ALLOWED_ATTR:["style","href","target","rel","class","data-color"]}))}function u(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}n.A.addHook("afterSanitizeAttributes",e=>{var t;if(!l)return;const r=e,n=null===(t=r.getAttribute)||void 0===t?void 0:t.call(r,"style");if(!n)return;const s=o(n);s!==n&&(s?r.setAttribute("style",s):r.removeAttribute("style"))})},7804(e,t,r){r.d(t,{WL:()=>n});class n{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}r.d(t,["OA",0,{ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},"u$",0,e=>(...t)=>({_$litDirective$:e,values:t})])},6781(e,t,r){r.d(t,{_:()=>o});var n=r(6752),s=r(7804);class i extends s.WL{constructor(e){if(super(e),this.it=n.s6,e.type!==s.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.s6||null==e)return this._t=void 0,this.it=e;if(e===n.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;const o=(0,s.u$)(i)},23(e,t,r){function n(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}r.r(t),r.d(t,{Hooks:()=>pe,Lexer:()=>le,Marked:()=>ue,Parser:()=>he,Renderer:()=>ae,TextRenderer:()=>ce,Tokenizer:()=>oe,defaults:()=>s,getDefaults:()=>n,lexer:()=>_e,marked:()=>ge,options:()=>be,parse:()=>we,parseInline:()=>me,parser:()=>ve,setOptions:()=>ke,use:()=>fe,walkTokens:()=>xe});var s={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};function i(e){s=e}var o={exec:()=>null};function l(e,t=""){let r="string"==typeof e?e:e.source,n={replace:(e,t)=>{let s="string"==typeof t?t:t.source;return s=s.replace(a.caret,"$1"),r=r.replace(e,s),n},getRegex:()=>new RegExp(r,t)};return n}var a={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},c=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,h=/(?:[*+-]|\d{1,9}[.)])/,p=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,u=l(p).replace(/bull/g,h).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),d=l(p).replace(/bull/g,h).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),g=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,b=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,k=l(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",b).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),f=l(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,h).getRegex(),x="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",m=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,w=l("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",m).replace("tag",x).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),v=l(g).replace("hr",c).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x).getRegex(),_={blockquote:l(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",v).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:k,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:c,html:w,lheading:u,list:f,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:v,table:o,text:/^[^\n]+/},y=l("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",c).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x).getRegex(),$={..._,lheading:d,table:y,paragraph:l(g).replace("hr",c).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",y).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",x).getRegex()},S={..._,html:l("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",m).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:o,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:l(g).replace("hr",c).replace("heading"," *#{1,6} *[^\n]").replace("lheading",u).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},A=/^( {2,}|\\)\n(?!\s*$)/,T=/[\p{P}\p{S}]/u,R=/[\s\p{P}\p{S}]/u,z=/[^\s\p{P}\p{S}]/u,C=l(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,R).getRegex(),P=/(?!~)[\p{P}\p{S}]/u,E=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,I=l(E,"u").replace(/punct/g,T).getRegex(),L=l(E,"u").replace(/punct/g,P).getRegex(),B="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",q=l(B,"gu").replace(/notPunctSpace/g,z).replace(/punctSpace/g,R).replace(/punct/g,T).getRegex(),D=l(B,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,P).getRegex(),H=l("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,z).replace(/punctSpace/g,R).replace(/punct/g,T).getRegex(),O=l(/\\(punct)/,"gu").replace(/punct/g,T).getRegex(),N=l(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),M=l(m).replace("(?:--\x3e|$)","--\x3e").getRegex(),Z=l("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",M).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),j=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`[^`]*`|[^\[\]\\`])*?/,G=l(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",j).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),U=l(/^!?\[(label)\]\[(ref)\]/).replace("label",j).replace("ref",b).getRegex(),F=l(/^!?\[(ref)\](?:\[\])?/).replace("ref",b).getRegex(),W={_backpedal:o,anyPunctuation:O,autolink:N,blockSkip:/\[[^\[\]]*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g,br:A,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:o,emStrongLDelim:I,emStrongRDelimAst:q,emStrongRDelimUnd:H,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:G,nolink:F,punctuation:C,reflink:U,reflinkSearch:l("reflink|nolink(?!\\()","g").replace("reflink",U).replace("nolink",F).getRegex(),tag:Z,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:o},Q={...W,link:l(/^!?\[(label)\]\((.*?)\)/).replace("label",j).getRegex(),reflink:l(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",j).getRegex()},V={...W,emStrongRDelimAst:D,emStrongLDelim:L,url:l(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Y={...V,br:l(A).replace("{2,}","*").getRegex(),text:l(V.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},X={normal:_,gfm:$,pedantic:S},J={normal:W,gfm:V,breaks:Y,pedantic:Q},K={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ee=e=>K[e];function te(e,t){if(t){if(a.escapeTest.test(e))return e.replace(a.escapeReplace,ee)}else if(a.escapeTestNoEncode.test(e))return e.replace(a.escapeReplaceNoEncode,ee);return e}function re(e){try{e=encodeURI(e).replace(a.percentDecode,"%")}catch{return null}return e}function ne(e,t){let r=e.replace(a.findPipe,(e,t,r)=>{let n=!1,s=t;for(;--s>=0&&"\\"===r[s];)n=!n;return n?"|":" |"}).split(a.splitPipe),n=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(a.slashPipe,"|");return r}function se(e,t,r){let n=e.length;if(0===n)return"";let s=0;for(;s<n;){let i=e.charAt(n-s-1);if(i!==t||r){if(i===t||!r)break;s++}else s++}return e.slice(0,n-s)}function ie(e,t,r,n,s){let i=t.href,o=t.title||null,l=e[1].replace(s.other.outputLinkReplace,"$1");n.state.inLink=!0;let a={type:"!"===e[0].charAt(0)?"image":"link",raw:r,href:i,title:o,text:l,tokens:n.inlineTokens(l)};return n.state.inLink=!1,a}var oe=class{options;rules;lexer;constructor(e){this.options=e||s}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:se(e,"\n")}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],r=function(e,t,r){let n=e.match(r.other.indentCodeCompensation);if(null===n)return t;let s=n[1];return t.split("\n").map(e=>{let t=e.match(r.other.beginningSpace);if(null===t)return e;let[n]=t;return n.length>=s.length?e.slice(s.length):e}).join("\n")}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=se(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:se(t[0],"\n")}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=se(t[0],"\n").split("\n"),r="",n="",s=[];for(;e.length>0;){let t,i=!1,o=[];for(t=0;t<e.length;t++)if(this.rules.other.blockquoteStart.test(e[t]))o.push(e[t]),i=!0;else{if(i)break;o.push(e[t])}e=e.slice(t);let l=o.join("\n"),a=l.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}\n${l}`:l,n=n?`${n}\n${a}`:a;let c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(a,s,!0),this.lexer.state.top=c,0===e.length)break;let h=s.at(-1);if("code"===h?.type)break;if("blockquote"===h?.type){let t=h,i=t.raw+"\n"+e.join("\n"),o=this.blockquote(i);s[s.length-1]=o,r=r.substring(0,r.length-t.raw.length)+o.raw,n=n.substring(0,n.length-t.text.length)+o.text;break}if("list"===h?.type){let t=h,i=t.raw+"\n"+e.join("\n"),o=this.list(i);s[s.length-1]=o,r=r.substring(0,r.length-h.raw.length)+o.raw,n=n.substring(0,n.length-t.raw.length)+o.raw,e=i.substring(s.at(-1).raw.length).split("\n");continue}}return{type:"blockquote",raw:r,tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r=t[1].trim(),n=r.length>1,s={type:"list",raw:"",ordered:n,start:n?+r.slice(0,-1):"",loose:!1,items:[]};r=n?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=n?r:"[*+-]");let i=this.rules.other.listItemRegex(r),o=!1;for(;e;){let r=!1,n="",l="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;n=t[0],e=e.substring(n.length);let a=t[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),c=e.split("\n",1)[0],h=!a.trim(),p=0;if(this.options.pedantic?(p=2,l=a.trimStart()):h?p=t[1].length+1:(p=t[2].search(this.rules.other.nonSpaceChar),p=p>4?1:p,l=a.slice(p),p+=t[1].length),h&&this.rules.other.blankLine.test(c)&&(n+=c+"\n",e=e.substring(c.length+1),r=!0),!r){let t=this.rules.other.nextBulletRegex(p),r=this.rules.other.hrRegex(p),s=this.rules.other.fencesBeginRegex(p),i=this.rules.other.headingBeginRegex(p),o=this.rules.other.htmlBeginRegex(p);for(;e;){let u,d=e.split("\n",1)[0];if(c=d,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),u=c):u=c.replace(this.rules.other.tabCharGlobal,"    "),s.test(c)||i.test(c)||o.test(c)||t.test(c)||r.test(c))break;if(u.search(this.rules.other.nonSpaceChar)>=p||!c.trim())l+="\n"+u.slice(p);else{if(h||a.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||s.test(a)||i.test(a)||r.test(a))break;l+="\n"+c}!h&&!c.trim()&&(h=!0),n+=d+"\n",e=e.substring(d.length+1),a=u.slice(p)}}s.loose||(o?s.loose=!0:this.rules.other.doubleBlankLine.test(n)&&(o=!0));let u,d=null;this.options.gfm&&(d=this.rules.other.listIsTask.exec(l),d&&(u="[ ] "!==d[0],l=l.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:n,task:!!d,checked:u,loose:!1,text:l,tokens:[]}),s.raw+=n}let l=s.items.at(-1);if(!l)return;l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd(),s.raw=s.raw.trimEnd();for(let e=0;e<s.items.length;e++)if(this.lexer.state.top=!1,s.items[e].tokens=this.lexer.blockTokens(s.items[e].text,[]),!s.loose){let t=s.items[e].tokens.filter(e=>"space"===e.type),r=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw));s.loose=r}if(s.loose)for(let e=0;e<s.items.length;e++)s.items[e].loose=!0;return s}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:r,title:n}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let r=ne(t[1]),n=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===n.length){for(let e of n)this.rules.other.tableAlignRight.test(e)?i.align.push("right"):this.rules.other.tableAlignCenter.test(e)?i.align.push("center"):this.rules.other.tableAlignLeft.test(e)?i.align.push("left"):i.align.push(null);for(let e=0;e<r.length;e++)i.header.push({text:r[e],tokens:this.lexer.inline(r[e]),header:!0,align:i.align[e]});for(let e of s)i.rows.push(ne(e,i.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:i.align[t]})));return i}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=se(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(t[1]))return-1;let r=0;for(let n=0;n<e.length;n++)if("\\"===e[n])n++;else if(e[n]===t[0])r++;else if(e[n]===t[1]&&(r--,r<0))return n;return r>0?-2:-1}(t[2],"()");if(-2===e)return;if(e>-1){let r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],n="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(r);e&&(r=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(r=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?r.slice(1):r.slice(1,-1)),ie(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=t[(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return ie(r,e,r[0],this.lexer,this.rules)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrongLDelim.exec(e);if(!(!n||n[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!n[1]&&!n[2]||!r||this.rules.inline.punctuation.exec(r))){let r,s,i=[...n[0]].length-1,o=i,l=0,a="*"===n[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(a.lastIndex=0,t=t.slice(-1*e.length+i);null!=(n=a.exec(t));){if(r=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!r)continue;if(s=[...r].length,n[3]||n[4]){o+=s;continue}if((n[5]||n[6])&&i%3&&!((i+s)%3)){l+=s;continue}if(o-=s,o>0)continue;s=Math.min(s,s+o+l);let t=[...n[0]][0].length,a=e.slice(0,i+n.index+t+s);if(Math.min(i,s)%2){let e=a.slice(1,-1);return{type:"em",raw:a,text:e,tokens:this.lexer.inlineTokens(e)}}let c=a.slice(2,-2);return{type:"strong",raw:a,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(e),n=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return r&&n&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,r;return"@"===t[2]?(e=t[1],r="mailto:"+e):(e=t[1],r=e),{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,r;if("@"===t[2])e=t[0],r="mailto:"+e;else{let n;do{n=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??""}while(n!==t[0]);e=t[0],r="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},le=class e{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||s,this.options.tokenizer=this.options.tokenizer||new oe,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:a,block:X.normal,inline:J.normal};this.options.pedantic?(t.block=X.pedantic,t.inline=J.pedantic):this.options.gfm&&(t.block=X.gfm,this.options.breaks?t.inline=J.breaks:t.inline=J.gfm),this.tokenizer.rules=t}static get rules(){return{block:X,inline:J}}static lex(t,r){return new e(r).lex(t)}static lexInline(t,r){return new e(r).inlineTokens(t)}lex(e){e=e.replace(a.carriageReturn,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],r=!1){for(this.options.pedantic&&(e=e.replace(a.tabCharGlobal,"    ").replace(a.spaceLine,""));e;){let n;if(this.options.extensions?.block?.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))continue;if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length);let r=t.at(-1);1===n.raw.length&&void 0!==r?r.raw+="\n":t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length);let r=t.at(-1);"paragraph"===r?.type||"text"===r?.type?(r.raw+=(r.raw.endsWith("\n")?"":"\n")+n.raw,r.text+="\n"+n.text,this.inlineQueue.at(-1).src=r.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length);let r=t.at(-1);"paragraph"===r?.type||"text"===r?.type?(r.raw+=(r.raw.endsWith("\n")?"":"\n")+n.raw,r.text+="\n"+n.raw,this.inlineQueue.at(-1).src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title},t.push(n));continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}let s=e;if(this.options.extensions?.startBlock){let t,r=1/0,n=e.slice(1);this.options.extensions.startBlock.forEach(e=>{t=e.call({lexer:this},n),"number"==typeof t&&t>=0&&(r=Math.min(r,t))}),r<1/0&&r>=0&&(s=e.substring(0,r+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){let i=t.at(-1);r&&"paragraph"===i?.type?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+n.raw,i.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(n),r=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length);let r=t.at(-1);"text"===r?.type?(r.raw+=(r.raw.endsWith("\n")?"":"\n")+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(n);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r=e,n=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(n=this.tokenizer.rules.inline.reflinkSearch.exec(r));)e.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(n=this.tokenizer.rules.inline.anyPunctuation.exec(r));)r=r.slice(0,n.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(n=this.tokenizer.rules.inline.blockSkip.exec(r));)r=r.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let s=!1,i="";for(;e;){let n;if(s||(i=""),s=!1,this.options.extensions?.inline?.some(r=>!!(n=r.call({lexer:this},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)))continue;if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length);let r=t.at(-1);"text"===n.type&&"text"===r?.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,i)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}let o=e;if(this.options.extensions?.startInline){let t,r=1/0,n=e.slice(1);this.options.extensions.startInline.forEach(e=>{t=e.call({lexer:this},n),"number"==typeof t&&t>=0&&(r=Math.min(r,t))}),r<1/0&&r>=0&&(o=e.substring(0,r+1))}if(n=this.tokenizer.inlineText(o)){e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(i=n.raw.slice(-1)),s=!0;let r=t.at(-1);"text"===r?.type?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return t}},ae=class{options;parser;constructor(e){this.options=e||s}space(e){return""}code({text:e,lang:t,escaped:r}){let n=(t||"").match(a.notSpaceStart)?.[0],s=e.replace(a.endingNewline,"")+"\n";return n?'<pre><code class="language-'+te(n)+'">'+(r?s:te(s,!0))+"</code></pre>\n":"<pre><code>"+(r?s:te(s,!0))+"</code></pre>\n"}blockquote({tokens:e}){return`<blockquote>\n${this.parser.parse(e)}</blockquote>\n`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>\n`}hr(e){return"<hr>\n"}list(e){let t=e.ordered,r=e.start,n="";for(let t=0;t<e.items.length;t++){let r=e.items[t];n+=this.listitem(r)}let s=t?"ol":"ul";return"<"+s+(t&&1!==r?' start="'+r+'"':"")+">\n"+n+"</"+s+">\n"}listitem(e){let t="";if(e.task){let r=this.checkbox({checked:!!e.checked});e.loose?"paragraph"===e.tokens[0]?.type?(e.tokens[0].text=r+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=r+" "+te(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):t+=r+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>\n`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>\n`}table(e){let t="",r="";for(let t=0;t<e.header.length;t++)r+=this.tablecell(e.header[t]);t+=this.tablerow({text:r});let n="";for(let t=0;t<e.rows.length;t++){let s=e.rows[t];r="";for(let e=0;e<s.length;e++)r+=this.tablecell(s[e]);n+=this.tablerow({text:r})}return n&&(n=`<tbody>${n}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+n+"</table>\n"}tablerow({text:e}){return`<tr>\n${e}</tr>\n`}tablecell(e){let t=this.parser.parseInline(e.tokens),r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+t+`</${r}>\n`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${te(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:r}){let n=this.parser.parseInline(r),s=re(e);if(null===s)return n;let i='<a href="'+(e=s)+'"';return t&&(i+=' title="'+te(t)+'"'),i+=">"+n+"</a>",i}image({href:e,title:t,text:r,tokens:n}){n&&(r=this.parser.parseInline(n,this.parser.textRenderer));let s=re(e);if(null===s)return te(r);let i=`<img src="${e=s}" alt="${r}"`;return t&&(i+=` title="${te(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:te(e.text)}},ce=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},he=class e{options;renderer;textRenderer;constructor(e){this.options=e||s,this.options.renderer=this.options.renderer||new ae,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ce}static parse(t,r){return new e(r).parse(t)}static parseInline(t,r){return new e(r).parseInline(t)}parse(e,t=!0){let r="";for(let n=0;n<e.length;n++){let s=e[n];if(this.options.extensions?.renderers?.[s.type]){let e=s,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(!1!==t||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(e.type)){r+=t||"";continue}}let i=s;switch(i.type){case"space":r+=this.renderer.space(i);continue;case"hr":r+=this.renderer.hr(i);continue;case"heading":r+=this.renderer.heading(i);continue;case"code":r+=this.renderer.code(i);continue;case"table":r+=this.renderer.table(i);continue;case"blockquote":r+=this.renderer.blockquote(i);continue;case"list":r+=this.renderer.list(i);continue;case"html":r+=this.renderer.html(i);continue;case"def":r+=this.renderer.def(i);continue;case"paragraph":r+=this.renderer.paragraph(i);continue;case"text":{let s=i,o=this.renderer.text(s);for(;n+1<e.length&&"text"===e[n+1].type;)s=e[++n],o+="\n"+this.renderer.text(s);r+=t?this.renderer.paragraph({type:"paragraph",raw:o,text:o,tokens:[{type:"text",raw:o,text:o,escaped:!0}]}):o;continue}default:{let e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return r}parseInline(e,t=this.renderer){let r="";for(let n=0;n<e.length;n++){let s=e[n];if(this.options.extensions?.renderers?.[s.type]){let e=this.options.extensions.renderers[s.type].call({parser:this},s);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=e||"";continue}}let i=s;switch(i.type){case"escape":case"text":r+=t.text(i);break;case"html":r+=t.html(i);break;case"link":r+=t.link(i);break;case"image":r+=t.image(i);break;case"strong":r+=t.strong(i);break;case"em":r+=t.em(i);break;case"codespan":r+=t.codespan(i);break;case"br":r+=t.br(i);break;case"del":r+=t.del(i);break;default:{let e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return r}},pe=class{options;block;constructor(e){this.options=e||s}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?le.lex:le.lexInline}provideParser(){return this.block?he.parse:he.parseInline}},ue=class{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=he;Renderer=ae;TextRenderer=ce;Lexer=le;Tokenizer=oe;Hooks=pe;constructor(...e){this.use(...e)}walkTokens(e,t){let r=[];for(let n of e)switch(r=r.concat(t.call(this,n)),n.type){case"table":{let e=n;for(let n of e.header)r=r.concat(this.walkTokens(n.tokens,t));for(let n of e.rows)for(let e of n)r=r.concat(this.walkTokens(e.tokens,t));break}case"list":{let e=n;r=r.concat(this.walkTokens(e.items,t));break}default:{let e=n;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(n=>{let s=e[n].flat(1/0);r=r.concat(this.walkTokens(s,t))}):e.tokens&&(r=r.concat(this.walkTokens(e.tokens,t)))}}return r}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let r={...e};if(r.async=this.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw new Error("extension name required");if("renderer"in e){let r=t.renderers[e.name];t.renderers[e.name]=r?function(...t){let n=e.renderer.apply(this,t);return!1===n&&(n=r.apply(this,t)),n}:e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");let r=t[e.level];r?r.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),r.extensions=t),e.renderer){let t=this.defaults.renderer||new ae(this.defaults);for(let r in e.renderer){if(!(r in t))throw new Error(`renderer '${r}' does not exist`);if(["options","parser"].includes(r))continue;let n=r,s=e.renderer[n],i=t[n];t[n]=(...e)=>{let r=s.apply(t,e);return!1===r&&(r=i.apply(t,e)),r||""}}r.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new oe(this.defaults);for(let r in e.tokenizer){if(!(r in t))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;let n=r,s=e.tokenizer[n],i=t[n];t[n]=(...e)=>{let r=s.apply(t,e);return!1===r&&(r=i.apply(t,e)),r}}r.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new pe;for(let r in e.hooks){if(!(r in t))throw new Error(`hook '${r}' does not exist`);if(["options","block"].includes(r))continue;let n=r,s=e.hooks[n],i=t[n];pe.passThroughHooks.has(r)?t[n]=e=>{if(this.defaults.async&&pe.passThroughHooksRespectAsync.has(r))return Promise.resolve(s.call(t,e)).then(e=>i.call(t,e));let n=s.call(t,e);return i.call(t,n)}:t[n]=(...e)=>{let r=s.apply(t,e);return!1===r&&(r=i.apply(t,e)),r}}r.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,n=e.walkTokens;r.walkTokens=function(e){let r=[];return r.push(n.call(this,e)),t&&(r=r.concat(t.call(this,e))),r}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return le.lex(e,t??this.defaults)}parser(e,t){return he.parse(e,t??this.defaults)}parseMarkdown(e){return(t,r)=>{let n={...r},s={...this.defaults,...n},i=this.onError(!!s.silent,!!s.async);if(!0===this.defaults.async&&!1===n.async)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||null===t)return i(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);let o=s.hooks?s.hooks.provideLexer():e?le.lex:le.lexInline,l=s.hooks?s.hooks.provideParser():e?he.parse:he.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(t):t).then(e=>o(e,s)).then(e=>s.hooks?s.hooks.processAllTokens(e):e).then(e=>s.walkTokens?Promise.all(this.walkTokens(e,s.walkTokens)).then(()=>e):e).then(e=>l(e,s)).then(e=>s.hooks?s.hooks.postprocess(e):e).catch(i);try{s.hooks&&(t=s.hooks.preprocess(t));let e=o(t,s);s.hooks&&(e=s.hooks.processAllTokens(e)),s.walkTokens&&this.walkTokens(e,s.walkTokens);let r=l(e,s);return s.hooks&&(r=s.hooks.postprocess(r)),r}catch(e){return i(e)}}}onError(e,t){return r=>{if(r.message+="\nPlease report this to https://github.com/markedjs/marked.",e){let e="<p>An error occurred:</p><pre>"+te(r.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(r);throw r}}},de=new ue;function ge(e,t){return de.parse(e,t)}ge.options=ge.setOptions=function(e){return de.setOptions(e),ge.defaults=de.defaults,i(ge.defaults),ge},ge.getDefaults=n,ge.defaults=s,ge.use=function(...e){return de.use(...e),ge.defaults=de.defaults,i(ge.defaults),ge},ge.walkTokens=function(e,t){return de.walkTokens(e,t)},ge.parseInline=de.parseInline,ge.Parser=he,ge.parser=he.parse,ge.Renderer=ae,ge.TextRenderer=ce,ge.Lexer=le,ge.lexer=le.lex,ge.Tokenizer=oe,ge.Hooks=pe,ge.parse=ge;var be=ge.options,ke=ge.setOptions,fe=ge.use,xe=ge.walkTokens,me=ge.parseInline,we=ge,ve=he.parse,_e=le.lex}};