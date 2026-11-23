/*! For license information please see ultra-card-panel.js.LICENSE.txt */
var e={935(e,t,r){r.d(t,{yV:()=>S,kg:()=>P,BT:()=>k});var o=r(9879);let n="",i=!1;function s(e,t){if(!function(){if(i)return!0;try{const e=r.u;return r.u=t=>{const r=e(t);return n?`${r}${r.includes("?")?"&":"?"}${n}`:r},i=!0,!0}catch(e){return!1}}())return t();n=`uc_retry=${e}-${Date.now().toString(36)}`;try{return t()}finally{n=""}}const a={en:()=>r.e(1543).then(()=>r(2778)),ca:()=>r.e(2198).then(()=>r(6243)),cs:()=>r.e(7364).then(()=>r(3241)),da:()=>r.e(3751).then(()=>r(2302)),de:()=>r.e(931).then(()=>r(626)),"en-GB":()=>r.e(4351).then(()=>r(2678)),es:()=>r.e(4866).then(()=>r(8847)),fr:()=>r.e(3258).then(()=>r(4699)),it:()=>r.e(969).then(()=>r(7444)),nb:()=>r.e(6722).then(()=>r(8835)),nl:()=>r.e(1948).then(()=>r(3485)),nn:()=>r.e(9150).then(()=>r(9751)),no:()=>r.e(1959).then(()=>r(4614)),pl:()=>r.e(6870).then(()=>r(7951)),sv:()=>r.e(4377).then(()=>r(260)),zh:()=>r.e(4420).then(()=>r(6349))},l={en:()=>r.e(5259).then(()=>r(4501)),ca:()=>r.e(1920).then(()=>r(8982)),cs:()=>r.e(5858).then(()=>r(7680)),da:()=>r.e(1771).then(()=>r(4809)),de:()=>r.e(5367).then(()=>r(1437)),"en-GB":()=>r.e(3411).then(()=>r(6753)),es:()=>r.e(2508).then(()=>r(9810)),fr:()=>r.e(5348).then(()=>r(7614)),it:()=>r.e(2593).then(()=>r(3475)),nb:()=>r.e(1212).then(()=>r(5014)),nl:()=>r.e(730).then(()=>r(7044)),nn:()=>r.e(5432).then(()=>r(8282)),no:()=>r.e(2619).then(()=>r(3249)),pl:()=>r.e(5088).then(()=>r(4834)),sv:()=>r.e(2865).then(()=>r(115)),zh:()=>r.e(3250).then(()=>r(340))},c="en",d="uc-locale-loaded",u={},h=new Map,p=new Map;let b=[1500,5e3];const f=e=>new Promise(t=>setTimeout(t,e));function g(e){const t=p.get(e);return void 0!==t&&Date.now()-t<6e4}async function m(e,t=a){let r;for(let o=0;o<=b.length;o++){o>0&&await f(b[o-1]);try{return await(0===o?t[e]():s(o,t[e]))}catch(e){r=e}}throw r}function v(e){return e.includes("-")||e.includes("_")?e.split(/[-_]/)[0]:e}function _(e){if(!e)return;if(a[e])return e;const t=v(e);return t!==e&&a[t]?t:void 0}function y(e){return e&&"object"==typeof e.default&&e.default||e}function x(e){const t=_(e);if(t&&$&&E(t),!t||u[t]||g(t))return Promise.resolve();const r=h.get(t);if(r)return r;const n=m(t).then(e=>{u[t]=y(e),h.delete(t),p.delete(t),"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent(d,{detail:{lang:t}}))}).catch(e=>{h.delete(t),p.set(t,Date.now()),(0,o.Sn)(e,`locale ${t}`,{notify:!1})});return h.set(t,n),n}Object.freeze(Object.keys(a));const w={},A=new Map;let $=!1;function E(e){const t=`${e}:editor`;if(w[e]||!l[e]||g(t))return Promise.resolve();const r=A.get(e);if(r)return r;const n=m(e,l).then(r=>{w[e]=y(r),A.delete(e),p.delete(t),"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent(d,{detail:{lang:e}}))}).catch(r=>{A.delete(e),p.set(t,Date.now()),(0,o.Sn)(r,`locale ${e} (editor)`,{notify:!1})});return A.set(e,n),n}function S(e){$=!0;const t=new Set([c,...Object.keys(u),...h.keys()]),r=e?_(e):void 0;return r&&t.add(r),Promise.all([...t].map(e=>E(e))).then(()=>{})}function k(e){if("undefined"==typeof window)return()=>{};const t=t=>{var r,o;return e(null!==(o=null===(r=t.detail)||void 0===r?void 0:r.lang)&&void 0!==o?o:"")};return window.addEventListener(d,t),()=>window.removeEventListener(d,t)}function T(e,t){if(!e)return;const r=t.split(".").reduce((e,t)=>{if(null!==e&&"object"==typeof e)return e[t]},e);return"string"==typeof r?r:void 0}function C(e,t){var r;try{return null!==(r=T(u[t],e))&&void 0!==r?r:T(w[t],e)}catch(e){return}}function P(e,t,r){t&&!function(e){const t=_(e);return!t||!!u[t]}(t)&&x(t),u[c]||h.has(c)||g(c)||x(c);let o=C(e,t);if(o)return o;const n=v(t);if(n&&n!==t&&(o=C(e,n),o))return o;if(n!==c){const t=C(e,c);if(t)return t}return r||e}},821(e,t,r){r.d(t,{DC:()=>d,nL:()=>n});const o="hub-navigate-tab";function n(e,t){e.dispatchEvent(new CustomEvent(o,{detail:t,bubbles:!0,composed:!0}))}const i="ultra_card_hub_pending_docs_slug",s="modules-overview",a="/ultra-card-hub";let l=null;function c(e){window.location.pathname!==e&&(history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0})))}async function d(e,t){var r;if(t&&!(null===(r=t.panels)||void 0===r?void 0:r["ultra-card-hub"]))return void window.open("https://github.com/WJDDesigns/Ultra-Card/wiki","_blank","noopener");const o=function(e,t){return!t||t.has(e)?e:e.startsWith("module-")&&t.has(s)?s:t.has("home")?"home":e}(e,await(l||(l=fetch("/ultra_card_pro_cloud_panel/docs/index.json?v=1").then(e=>e.ok?e.json():null).then(e=>(null==e?void 0:e.pages)?new Set(e.pages.map(e=>String(e.slug||"")).filter(Boolean)):null).catch(()=>null).then(e=>(e||(l=null),e))),d=l,new Promise(e=>{const t=setTimeout(()=>e(null),1500);d.then(r=>{clearTimeout(t),e(r)},()=>{clearTimeout(t),e(null)})})));var d,u;try{localStorage.setItem(i,o),localStorage.setItem("ultra_card_hub_tab","docs")}catch(e){}if(u={tab:"docs",slug:o},"undefined"!=typeof document&&n(document,u),"undefined"==typeof window||window.location.pathname===a)return;if(function(){var e,t;const r=window;return!(!r.externalApp&&!(null===(t=null===(e=r.webkit)||void 0===e?void 0:e.messageHandlers)||void 0===t?void 0:t.getExternalAuth))}())return void c(a);const h=window.open(a,"_blank");if(h)try{h.opener=null}catch(e){}else c(a)}r.d(t,["eo",0,i,"zP",0,o])},9978(e,t,r){const o=r(2618).AH`
  :host {
    display: flex;
    flex-direction: column;
    /* Prevent the host itself from scrolling — only .hub-content should scroll */
    overflow: hidden;
    background: var(--primary-background-color);
    color: var(--primary-text-color);
    box-sizing: border-box;

    /* Hub design tokens — every tab reads these so surfaces, radii and
       borders stay consistent. All fall back to HA theme variables. */
    --uc-hub-primary-rgb: var(--rgb-primary-color, 3, 169, 244);
    --uc-hub-surface: var(--ha-card-background, var(--card-background-color, #fff));
    --uc-hub-surface-2: var(--secondary-background-color, rgba(0, 0, 0, 0.03));
    --uc-hub-border: var(--divider-color, rgba(0, 0, 0, 0.08));
    --uc-hub-radius-lg: var(--ha-card-border-radius, 14px);
    --uc-hub-radius-md: 10px;
    --uc-hub-radius-sm: 8px;
    --uc-hub-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --uc-hub-shadow-md: 0 6px 20px rgba(0, 0, 0, 0.08);
    --uc-hub-content-max: 1440px;
    --uc-hub-focus-ring: 0 0 0 3px rgba(var(--uc-hub-primary-rgb), 0.35);
  }

  :where(button, [role='tab'], a, input, select, textarea):focus-visible {
    outline: none;
    box-shadow: var(--uc-hub-focus-ring);
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  .hub-container {
    display: flex;
    flex-direction: column;
    /* Must fill host and be bounded so inner scroll works */
    flex: 1;
    min-height: 0;
    /* Clip any overflow so the page itself never scrolls */
    overflow: hidden;
    box-sizing: border-box;
  }

  .hub-header {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px 10px;
    gap: 12px;
    min-height: 60px;
    box-sizing: border-box;
    /* Prevent header from ever growing or scrolling away */
    overflow: hidden;
    background: var(--uc-hub-surface);
  }

  .hub-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 0;
  }

  .hub-brand-mark {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: linear-gradient(
      135deg,
      var(--primary-color),
      var(--accent-color, var(--primary-color))
    );
    box-shadow: 0 2px 6px rgba(var(--uc-hub-primary-rgb), 0.3);
  }

  .hub-brand-mark ha-icon {
    --mdc-icon-size: 20px;
  }

  .hub-brand-text {
    display: flex;
    flex-direction: column;
    min-width: 0;
    line-height: 1.15;
  }

  .hub-header h1 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: var(--primary-text-color);
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hub-brand-sub {
    font-size: 12px;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }

  @media (max-width: 870px) {
    .hub-header {
      padding: 8px 12px 8px 8px;
      gap: 8px;
      min-height: 56px;
    }
    .hub-header h1 {
      font-size: 18px;
    }
    .hub-brand-mark {
      width: 32px;
      height: 32px;
      border-radius: 9px;
    }
    .hub-brand-sub {
      display: none;
    }
  }

  .hub-account-chip {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px 6px 8px;
    border-radius: 999px;
    background: var(--uc-hub-surface-2);
    border: 1px solid var(--uc-hub-border);
    color: var(--primary-text-color);
    font: inherit;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease;
    flex-shrink: 0;
    max-width: 260px;
  }

  .hub-account-chip span:first-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hub-account-chip:hover {
    border-color: rgba(var(--uc-hub-primary-rgb), 0.5);
    background: rgba(var(--uc-hub-primary-rgb), 0.06);
  }

  .hub-account-chip ha-icon {
    --mdc-icon-size: 20px;
    color: var(--primary-color);
  }

  .hub-tier-badge {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .hub-tier-badge.pro {
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.15);
    color: var(--primary-color);
  }

  .hub-tier-badge.free {
    background: rgba(158, 158, 158, 0.15);
    color: var(--secondary-text-color);
  }

  .hub-sign-in-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    border-radius: 999px;
    border: none;
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    font: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: filter 0.15s ease, transform 0.15s ease;
    flex-shrink: 0;
  }

  .hub-sign-in-btn:hover {
    filter: brightness(1.08);
  }

  .hub-sign-in-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  .hub-tabs {
    flex-shrink: 0;
  }

  .hub-content {
    flex: 1;
    min-height: 0;
    /* Only this region scrolls — vertically only */
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 24px;
    box-sizing: border-box;
  }

  /* Centre content on very wide screens so cards don't stretch edge to edge. */
  .hub-page {
    width: 100%;
    max-width: var(--uc-hub-content-max);
    margin: 0 auto;
  }

  /* Shared buttons */
  .hub-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: var(--uc-hub-radius-sm);
    border: 1px solid var(--uc-hub-border);
    background: var(--uc-hub-surface);
    color: var(--primary-text-color);
    font: inherit;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.2;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease,
      filter 0.15s ease;
  }

  .hub-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  .hub-btn:hover:not(:disabled) {
    border-color: rgba(var(--uc-hub-primary-rgb), 0.5);
    color: var(--primary-color);
  }

  .hub-btn:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  .hub-btn--primary {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .hub-btn--primary:hover:not(:disabled) {
    color: var(--text-primary-color, #fff);
    border-color: var(--primary-color);
    filter: brightness(1.08);
  }

  .hub-btn--outline {
    background: transparent;
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  .hub-btn--outline:hover:not(:disabled) {
    background: rgba(var(--uc-hub-primary-rgb), 0.08);
  }

  .hub-btn--ghost {
    background: transparent;
    border-color: transparent;
    color: var(--secondary-text-color);
  }

  .hub-btn--ghost:hover:not(:disabled) {
    background: var(--uc-hub-surface-2);
    border-color: transparent;
    color: var(--primary-text-color);
  }

  .hub-btn--sm {
    padding: 5px 10px;
    font-size: 12px;
  }

  .hub-btn .spin {
    animation: hubSpin 1s linear infinite;
  }

  /* Sync banner — shared by Favorites, Colors and Variables */
  .sync-banner {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-radius: var(--uc-hub-radius-md);
    margin-bottom: 16px;
    font-size: 13px;
    background: var(--uc-hub-surface);
    border: 1px solid var(--uc-hub-border);
  }

  .sync-banner ha-icon {
    --mdc-icon-size: 20px;
    flex-shrink: 0;
    color: var(--secondary-text-color);
  }

  .sync-banner-guest {
    background: rgba(var(--uc-hub-primary-rgb), 0.06);
    border-color: rgba(var(--uc-hub-primary-rgb), 0.18);
  }

  .sync-banner-guest ha-icon {
    color: var(--primary-color);
  }

  .sync-banner-active {
    background: rgba(76, 175, 80, 0.07);
    border-color: rgba(76, 175, 80, 0.22);
  }

  .sync-banner-active ha-icon {
    color: var(--success-color, #4caf50);
  }

  .sync-banner-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .sync-banner-body strong {
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .sync-banner-body span {
    color: var(--secondary-text-color);
    font-size: 12px;
    line-height: 1.4;
  }

  .sync-banner-btn {
    flex-shrink: 0;
    padding: 6px 12px;
    border-radius: var(--uc-hub-radius-sm);
    border: 1px solid var(--primary-color);
    background: none;
    color: var(--primary-color);
    font: inherit;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
  }

  .sync-banner-btn:hover:not(:disabled) {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  .sync-banner-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    .sync-banner {
      flex-wrap: wrap;
    }
    .sync-banner-btn {
      margin-left: 32px;
    }
  }

  /* Page-level toolbar (search + filters + actions) */
  .hub-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
  }

  .hub-search {
    flex: 1;
    min-width: 200px;
    max-width: 360px;
    position: relative;
  }

  .hub-search input {
    width: 100%;
    padding: 10px 14px 10px 40px;
    border: 1px solid var(--uc-hub-border);
    border-radius: var(--uc-hub-radius-md);
    background: var(--uc-hub-surface);
    color: var(--primary-text-color);
    font: inherit;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    box-sizing: border-box;
  }

  .hub-search input:focus {
    border-color: var(--primary-color);
    box-shadow: var(--uc-hub-focus-ring);
  }

  .hub-search ha-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
    pointer-events: none;
  }

  /* Stat tiles */
  .stat-tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }

  .stat-tile {
    padding: 14px 16px;
    background: var(--uc-hub-surface-2);
    border: 1px solid var(--uc-hub-border);
    border-radius: var(--uc-hub-radius-md);
  }

  .stat-tile-value {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.15;
    color: var(--primary-text-color);
    font-variant-numeric: tabular-nums;
  }

  .stat-tile-label {
    margin-top: 4px;
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  .stat-tile-value.ok {
    color: var(--success-color, #4caf50);
  }

  .stat-tile-value.bad {
    color: var(--error-color, #f44336);
  }

  @keyframes hubSpin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Shared loading placeholder (centered spinner + label) */
  .hub-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 48px 24px;
    color: var(--secondary-text-color);
    font-size: 14px;
    text-align: center;
  }

  .hub-loading ha-icon {
    --mdc-icon-size: 32px;
    color: var(--primary-color);
    animation: hubSpin 1s linear infinite;
  }

  /* Section cards (used by pro tab, etc.) */
  .hub-section {
    background: var(--uc-hub-surface);
    border-radius: var(--uc-hub-radius-lg);
    border: 1px solid var(--uc-hub-border);
    box-shadow: var(--uc-hub-shadow-sm);
    padding: 24px;
    margin-bottom: 20px;
  }

  .hub-section:last-child {
    margin-bottom: 0;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  }

  .header-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color, var(--primary-color)));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .header-icon ha-icon {
    --mdc-icon-size: 24px;
    color: white;
  }

  .header-content h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .header-content p {
    margin: 4px 0 0 0;
    font-size: 13px;
    color: var(--secondary-text-color);
  }

  /* Empty states */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 60px 24px;
    color: var(--secondary-text-color);
  }

  .empty-state-icon {
    width: 72px;
    height: 72px;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    background: rgba(var(--uc-hub-primary-rgb), 0.1);
    border: 1px solid rgba(var(--uc-hub-primary-rgb), 0.18);
  }

  .empty-state-icon ha-icon {
    --mdc-icon-size: 36px;
    color: var(--primary-color);
  }

  .empty-state .hub-btn {
    margin-top: 18px;
  }

  .empty-state h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .empty-state p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    max-width: 400px;
    color: var(--secondary-text-color);
  }

  .empty-state .empty-hint {
    margin-top: 6px;
    font-size: 12px;
    opacity: 0.7;
  }

  /* Grids */
  .grid-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
  }

  @media (max-width: 870px) {
    .grid-cards {
      grid-template-columns: 1fr;
    }
    .hub-content {
      padding: 12px;
    }
    .hub-section {
      padding: 16px;
    }
  }

  /* Action buttons (small icon buttons) */
  .action-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
    border-radius: 8px;
    color: var(--secondary-text-color);
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 0;
  }

  .action-btn:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
  }

  .action-btn.delete:hover {
    border-color: var(--error-color, #f44336);
    color: var(--error-color, #f44336);
    background: rgba(244, 67, 54, 0.08);
  }

  .action-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  /* Toast notification */
  .toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: var(--primary-text-color);
    color: var(--primary-background-color);
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    z-index: 999;
    opacity: 0;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .toast.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  /* Section title standalone */
  .section-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-text-color);
    margin: 0 0 16px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Filter chips */
  .filter-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
  }

  .filter-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    background: var(--ha-card-background, var(--card-background-color));
    color: var(--secondary-text-color);
    transition: all 0.2s ease;
    user-select: none;
  }

  .filter-chip:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  .filter-chip.active {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
    border-color: var(--primary-color);
  }

  .filter-chip ha-icon {
    --mdc-icon-size: 16px;
  }

  /* Tab intro blurb (what this tab is for) */
  .hub-tab-blurb {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 14px;
    margin-bottom: 16px;
    background: rgba(var(--uc-hub-primary-rgb), 0.06);
    border: 1px solid rgba(var(--uc-hub-primary-rgb), 0.15);
    border-radius: var(--uc-hub-radius-md);
    font-size: 13px;
    color: var(--secondary-text-color);
    line-height: 1.45;
  }

  .hub-tab-blurb ha-icon {
    --mdc-icon-size: 20px;
    color: var(--primary-color);
    flex-shrink: 0;
    margin-top: 1px;
  }

  .hub-tab-blurb p {
    margin: 0;
  }

  .hub-tab-blurb strong {
    color: var(--primary-text-color);
  }

  .hub-tab-blurb code {
    background: var(--uc-hub-surface-2);
    border: 1px solid var(--uc-hub-border);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    font-family: var(--code-font-family, 'SF Mono', 'Fira Code', monospace);
  }

  /* Animations */
  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;r.d(t,["z",0,o])},378(e,t,r){r.d(t,{xd:()=>f});var o=r(3045);class n{constructor(){this._sessionId=null,this._isEnabled=!1,this._listeners=new Set,this._deviceId=this._getOrCreateDeviceId(),this._sessionId=this._loadSessionId()}isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1,this.stopPolling(),o.v&&console.log("📴 Cloud session sync disabled")}async createSession(e,t){if(!this._isEnabled)return o.v&&console.log("📝 Cloud session sync disabled, skipping session creation"),null;try{o.v&&console.log("🔄 Creating cloud session...");const r=await fetch(`${n.API_BASE}/ultra-card/v1/session/create`,{method:"POST",headers:{Authorization:`Bearer ${e.token}`,"Content-Type":"application/json"},body:JSON.stringify({device_id:this._deviceId,device_name:this._getDeviceName(),user_id:e.id,ha_user_id:t})});if(!r.ok)throw new Error(`Session creation failed: ${r.status}`);const i=await r.json();if(i.success&&i.session_id)return this._sessionId=i.session_id,this._saveSessionId(i.session_id),i.session_id;throw new Error("Invalid session response")}catch(e){return console.warn("⚠️ Failed to create cloud session, using local-only mode:",e),null}}async getCurrentSession(e,t){var r;if(!this._isEnabled)return null;try{o.v&&console.log("🔄 Checking for active cloud session...");const i={"Content-Type":"application/json"};t&&(i.Authorization=`Bearer ${t}`);let s=`${n.API_BASE}/ultra-card/v1/session/current`;e&&(s+=`?ha_user_id=${encodeURIComponent(e)}`);const a=await fetch(s,{method:"GET",headers:i,credentials:"include"});if(!a.ok){if(404===a.status)return o.v&&console.log("📭 No active cloud session found"),null;if(401===a.status)return o.v&&console.log("🔐 Not authenticated, cannot retrieve session"),null;throw new Error(`Session fetch failed: ${a.status}`)}const l=await a.json();return l.success&&(null===(r=l.session)||void 0===r?void 0:r.user)?(this._sessionId=l.session.session_id,this._saveSessionId(l.session.session_id),l.session.user):null}catch(e){return console.warn("⚠️ Failed to fetch cloud session:",e),null}}async validateSession(e){if(!this._isEnabled||!this._sessionId)return!0;try{const t=await fetch(`${n.API_BASE}/ultra-card/v1/session/validate`,{method:"POST",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},body:JSON.stringify({session_id:this._sessionId})});if(!t.ok)return!1;const r=await t.json();return r.success&&!0===r.valid}catch(e){return console.warn("⚠️ Session validation failed:",e),!0}}async invalidateSession(e){if(this._isEnabled)try{o.v&&console.log("🔄 Invalidating cloud session..."),await fetch(`${n.API_BASE}/ultra-card/v1/session/logout`,{method:"DELETE",headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"}}),this._clearSessionId()}catch(e){console.warn("⚠️ Failed to invalidate cloud session:",e)}}startPolling(e,t){this._isEnabled&&(this.stopPolling(),o.v&&console.log("🔄 Starting session validation polling"),this._pollTimer=window.setInterval(async()=>{await this.validateSession(e)||(console.warn("⚠️ Session invalidated remotely, logging out"),this.stopPolling(),t())},n.POLL_INTERVAL))}stopPolling(){this._pollTimer&&(clearInterval(this._pollTimer),this._pollTimer=void 0)}addListener(e){this._listeners.add(e)}removeListener(e){this._listeners.delete(e)}_getOrCreateDeviceId(){try{let e=localStorage.getItem(n.DEVICE_ID_KEY);return e||(e=`device_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,localStorage.setItem(n.DEVICE_ID_KEY,e)),e}catch(e){return`device_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}}_getDeviceName(){const e=navigator.userAgent;let t="Unknown Browser",r="Unknown OS";return e.includes("Chrome")?t="Chrome":e.includes("Safari")?t="Safari":e.includes("Firefox")?t="Firefox":e.includes("Edge")&&(t="Edge"),e.includes("Windows")?r="Windows":e.includes("Mac")?r="macOS":e.includes("Linux")?r="Linux":e.includes("Android")?r="Android":e.includes("iOS")&&(r="iOS"),`${t} on ${r}`}_loadSessionId(){try{return localStorage.getItem(n.SESSION_ID_KEY)}catch(e){return null}}_saveSessionId(e){try{localStorage.setItem(n.SESSION_ID_KEY,e)}catch(e){console.error("Failed to save session ID:",e)}}_clearSessionId(){try{localStorage.removeItem(n.SESSION_ID_KEY),this._sessionId=null}catch(e){console.error("Failed to clear session ID:",e)}}}n.API_BASE="https://ultracard.io/wp-json",n.SESSION_ID_KEY="ultra-card-session-id",n.POLL_INTERVAL=3e4,n.DEVICE_ID_KEY="ultra-card-device-id";const i=new n;var s=/*#__PURE__*/r(8690),a=/*#__PURE__*/r(1793);const l=15e3,c=6e4;class d extends Error{constructor(e){super(`Ultra Card Cloud did not respond within ${Math.round(e/1e3)}s. Please try again.`),this.name="UcCloudTimeoutError"}}function u(e,t){let r;return Promise.race([e,new Promise((e,o)=>{r=setTimeout(()=>o(new d(t)),t)})]).finally(()=>clearTimeout(r))}async function h(e,t,r){const o=new AbortController,n=setTimeout(()=>o.abort(),r),i=t.signal;i&&(i.aborted?o.abort():i.addEventListener("abort",()=>o.abort(),{once:!0}));try{return await fetch(e,Object.assign(Object.assign({},t),{signal:o.signal}))}catch(e){if("AbortError"===(null==e?void 0:e.name)&&!(null==i?void 0:i.aborted))throw new d(r);throw e}finally{clearTimeout(n)}}function p(e){const t=e.replace(/[^\x20-\x7E]+/g,"_").replace(/[\\/:*?"<>|]/g,"_").trim()||"upload.png";return t.length>180?t.slice(0,180):t}class b{constructor(){this._currentUser=null,this._listeners=new Set,this._integrationHass=null,this._isNotifying=!1;try{"undefined"!=typeof localStorage&&localStorage.removeItem(b.STORAGE_KEY)}catch(e){}}checkIntegrationAuth(e){var t,r;try{const o="sensor.ultra_card_pro_cloud_authentication_status",n=null===(t=null==e?void 0:e.states)||void 0===t?void 0:t[o];if(!n)return null;if("connected"!==n.state||!(null===(r=n.attributes)||void 0===r?void 0:r.authenticated))return null;const i=n.attributes;return{id:i.user_id,username:i.username||"",email:i.email||"",displayName:i.display_name||i.username||"",token:"",expiresAt:0,subscription:{tier:i.subscription_tier||"free",status:i.subscription_status||"expired",expires:i.subscription_expires,features:i.features||{auto_backups:"pro"===i.subscription_tier,snapshots_enabled:"pro"===i.subscription_tier,snapshot_limit:"pro"===i.subscription_tier?10:0,backup_retention_days:90},snapshot_count:0,snapshot_limit:"pro"===i.subscription_tier?10:0}}}catch(e){return console.debug("No Ultra Card Connect integration found:",e),null}}isIntegrationInstalled(e){var t;try{const r="sensor.ultra_card_pro_cloud_authentication_status";return!!(null===(t=null==e?void 0:e.states)||void 0===t?void 0:t[r])}catch(e){return!1}}async autoRegisterIntegration(e,t,r){var o,n;if(!(null==e?void 0:e.connection))return;const i=e.callApi,s=e.callWS;if("function"!=typeof i)return;const a=null===(o=null==e?void 0:e.states)||void 0===o?void 0:o["sensor.ultra_card_pro_cloud_authentication_status"];if("connected"!==(null==a?void 0:a.state)||!(null===(n=null==a?void 0:a.attributes)||void 0===n?void 0:n.authenticated))try{let e;const o="function"==typeof s?await s({type:"config_entries/get",domain:"ultra_card_pro_cloud"}):[],n=Array.isArray(o)&&o.length>0?o[0]:null;if(n){const o=await i("POST","config/config_entries/flow",{handler:"ultra_card_pro_cloud",show_advanced_options:!1,entry_id:n.entry_id});if(e=null==o?void 0:o.flow_id,!e)return;await i("POST",`config/config_entries/flow/${e}`,{next_step:"sign_in"}),await i("POST",`config/config_entries/flow/${e}`,{username:t,password:r})}else{const o=await i("POST","config/config_entries/flow",{handler:"ultra_card_pro_cloud",show_advanced_options:!1});if(e=null==o?void 0:o.flow_id,!e)return;await i("POST",`config/config_entries/flow/${e}`,{next_step:"sign_in"}),await i("POST",`config/config_entries/flow/${e}`,{username:t,password:r})}return}catch(e){return console.debug("Auto-register integration failed:",e),"Could not auto-configure. You can add the integration manually in Settings → Integrations."}}getCurrentUser(){return this._currentUser}setIntegrationUser(e,t){var r,o;t||console.warn("[UltraCard] setIntegrationUser called without hass; cloud requests using integration auth will fail."),(null===(r=this._currentUser)||void 0===r?void 0:r.email)!==e.email||(null===(o=this._currentUser)||void 0===o?void 0:o.token)!==e.token?(this._integrationHass=(null==e?void 0:e.token)?null:null!=t?t:null,this._setCurrentUser(e)):!e.token&&t&&(this._integrationHass=t)}isAuthenticated(){return!!this._currentUser&&(this._currentUser.token&&this._currentUser.token,!0)}shouldRefreshToken(){return this._shouldRefreshToken()}async loginViaHass(e,t,r){let o;try{o=await e.callApi("POST","ultra_card_pro_cloud/login",{username:t,password:r})}catch(e){const t=new Error(function(e){if(!e)return"";if("string"==typeof e)return(0,a.hc)(e,e);const t=e,r=t.body;if("string"==typeof r&&r.trim())return(0,a.hc)(r);if(r&&"object"==typeof r){const{error:e,message:t}=r;if("string"==typeof e&&e.trim())return(0,a.hc)(e);if("string"==typeof t&&t.trim())return(0,a.hc)(t)}return"string"==typeof t.message&&t.message.trim()?(0,a.hc)(t.message):"string"==typeof t.error&&t.error.trim()?(0,a.hc)(t.error):""}(e)||"Authentication failed");throw t.cause=e,t}if(!(null==o?void 0:o.success)||!(null==o?void 0:o.user))throw new Error((0,a.hc)(null==o?void 0:o.error,"Authentication failed"));const n=this._sensorAttrsToCloudUser(o.user);return this._integrationHass=e,this._setCurrentUser(n),n}async registerViaHass(e,t,r,o){var n,i;try{const n=await e.callApi("POST","ultra_card_pro_cloud/register",{username:t,email:r,display_name:o||t});if(!(null==n?void 0:n.success))throw new Error((null==n?void 0:n.error)||"Registration failed");return(null==n?void 0:n.message)||"Account created. Check your email inbox, junk, or spam for the ultracard.io message to finish setting your password."}catch(e){const t=(null===(n=null==e?void 0:e.body)||void 0===n?void 0:n.message)||(null===(i=null==e?void 0:e.body)||void 0===i?void 0:i.error)||(null==e?void 0:e.message)||"Registration failed";throw new Error(t)}}async logoutViaHass(e){try{await e.callApi("POST","ultra_card_pro_cloud/logout",{})}catch(e){}this._setCurrentUser(null),this._clearStorage(),this._clearAutoRefresh(),this._notifyListeners()}_sensorAttrsToCloudUser(e){return{id:e.user_id||0,username:e.username||"",email:e.email||"",displayName:e.display_name||e.username||"",token:"",expiresAt:0,subscription:{tier:e.subscription_tier||"free",status:e.subscription_status||"active",expires:e.subscription_expires,features:{auto_backups:"pro"===e.subscription_tier,snapshots_enabled:"pro"===e.subscription_tier,snapshot_limit:"pro"===e.subscription_tier?10:0,backup_retention_days:90},snapshot_count:0,snapshot_limit:"pro"===e.subscription_tier?10:0}}}async login(e){throw new Error("Direct browser login is no longer supported. Install Ultra Card Connect and sign in from the Hub Account tab.")}async register(e){throw new Error("Direct browser registration is no longer supported. Use the Hub Account tab (Ultra Card Connect).")}async refreshToken(e=0){throw new Error("Browser token refresh is no longer supported. Ultra Card Connect refreshes tokens on the server.")}async logout(){this._setCurrentUser(null),this._clearStorage(),this._clearAutoRefresh();try{i.stopPolling()}catch(e){}}getAuthHeader(){return this.isAuthenticated()&&this._currentUser.token?`Bearer ${this._currentUser.token}`:null}async authenticatedFetch(e,t={}){var r,o,n,i,a;if(!this.isAuthenticated())throw new Error("Not authenticated");if(!this._currentUser.token&&this._integrationHass){const i=(t.method||"GET").toUpperCase();if(t.body instanceof FormData){const n=t.body;if(function(e){for(const[,t]of e.entries())if(t instanceof File)return!0;return!1}(n)){if(!e.includes("/ultra-card/v1/media")&&!e.endsWith("/ultra-card/v1/media"))throw new Error("This request includes files and is not supported through Home Assistant integration auth.");const t=await h("/api/ultra_card_pro_cloud/media_upload",{method:"POST",body:n,credentials:"same-origin"},c);if(404===t.status){const t=(0,s.fu)(this._integrationHass);if(t.installed&&(t.outdated||!(0,s.p0)(this._integrationHass,"media_upload")))throw(0,s.ft)(this._integrationHass,"Media upload")||new Error("Media upload requires an updated Ultra Card Connect integration. Please update Connect and try again.");const o=function(e){for(const[t,r]of e.entries())if(r instanceof File)return{fieldName:t,file:r};return null}(n);if(!o)throw new Error("No file in FormData");const i=await(a=o.file,new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const t=r.result,o=t.indexOf(",");e(o>=0?t.slice(o+1):t)},r.onerror=()=>{var e;return t(null!==(e=r.error)&&void 0!==e?e:new Error("read failed"))},r.readAsDataURL(a)})),l=this._integrationHass.callApi;if("function"!=typeof l)throw new Error("Integration proxy unavailable");const d=await u(l("POST","ultra_card_pro_cloud/proxy",{method:"POST",url:e,body:{__media_upload_b64:{field:"photo",filename:p(o.file.name),content_type:o.file.type||"application/octet-stream",data:i}}}),c),h=null!==(r=null==d?void 0:d._status)&&void 0!==r?r:0,b=null==d?void 0:d._body;return{ok:h>=200&&h<300,status:h,json:()=>Promise.resolve(b),text:()=>Promise.resolve("string"==typeof b?b:JSON.stringify(b))}}return t}const d=function(e){var t;const r={};for(const[o,n]of e.entries()){if(n instanceof File)continue;const e=n;if(o.endsWith("[]")){const n=o.slice(0,-2),i=null!==(t=r[n])&&void 0!==t?t:[];i.push(e),r[n]=i}else if(void 0!==r[o]){const t=r[o];Array.isArray(t)?t.push(e):r[o]=[t,e]}else r[o]=e}return Array.isArray(r.photo_ids)&&(r.photo_ids=r.photo_ids.map(e=>parseInt(e,10))),r}(n),b=this._integrationHass.callApi;if("function"!=typeof b)throw new Error("Integration proxy unavailable");const f=await u(b("POST","ultra_card_pro_cloud/proxy",{method:i,url:e,body:d}),l),g=null!==(o=null==f?void 0:f._status)&&void 0!==o?o:0,m=null==f?void 0:f._body;return{ok:g>=200&&g<300,status:g,json:()=>Promise.resolve(m),text:()=>Promise.resolve("string"==typeof m?m:JSON.stringify(m))}}let d;if(void 0!==t.body&&null!==t.body&&(d=t.body,"string"==typeof d))try{d=JSON.parse(d)}catch(e){}const b=this._integrationHass.callApi;if("function"!=typeof b)throw new Error("Integration proxy unavailable");const f=await u(b("POST","ultra_card_pro_cloud/proxy",{method:i,url:e,body:void 0!==d?d:null}),l),g=null!==(n=null==f?void 0:f._status)&&void 0!==n?n:0,m=null==f?void 0:f._body;return{ok:g>=200&&g<300,status:g,json:()=>Promise.resolve(m),text:()=>Promise.resolve("string"==typeof m?m:JSON.stringify(m))}}const d=this.getAuthHeader();if(!d)throw new Error("Not authenticated");const b=t.body instanceof FormData,f={Authorization:d};b||(f["Content-Type"]="application/json");const g=b?c:l,m=await h(e,Object.assign(Object.assign({},t),{headers:Object.assign(Object.assign({},t.headers),f)}),g);if(401===m.status&&(null===(i=this._currentUser)||void 0===i?void 0:i.refreshToken))try{await this.refreshToken();const r=this.getAuthHeader();if(r){const o={Authorization:r};return b||(o["Content-Type"]="application/json"),h(e,Object.assign(Object.assign({},t),{headers:Object.assign(Object.assign({},t.headers),o)}),g)}}catch(e){throw new Error("Authentication expired. Please login again.")}return m}addListener(e){this._listeners.add(e)}removeListener(e){this._listeners.delete(e)}_createUserFromAuth(e){const t=e.expires_in?Date.now()+1e3*e.expires_in:Date.now()+b.DEFAULT_TOKEN_TTL;return{id:e.user_id,username:e.user_nicename,email:e.user_email,displayName:e.user_display_name,avatar:e.avatar_url,token:e.token,refreshToken:e.refresh_token,expiresAt:t}}_setCurrentUser(e){e||(this._integrationHass=null),this._currentUser=e,this._notifyListeners()}_notifyListeners(){if(!this._isNotifying){this._isNotifying=!0;try{this._listeners.forEach(e=>{try{e(this._currentUser)}catch(e){console.error("Error in auth listener:",e)}})}finally{this._isNotifying=!1}}}_shouldRefreshToken(){return!!this._currentUser&&Date.now()>=this._currentUser.expiresAt-b.REFRESH_THRESHOLD}_clearAutoRefresh(){this._refreshTimer&&(clearTimeout(this._refreshTimer),this._refreshTimer=void 0)}async _fetchSubscriptionData(e){try{const t=await fetch(`${b.API_BASE}/ultra-card/v1/subscription`,{method:"GET",headers:{Authorization:`Bearer ${e.token}`,"Content-Type":"application/json"}});if(t.ok){const r=await t.json();e.subscription=r}else console.warn("⚠️ Failed to fetch subscription, defaulting to free tier"),e.subscription={tier:"free",status:"active",features:{auto_backups:!0,snapshots_enabled:!1,snapshot_limit:0,backup_retention_days:30},snapshot_count:0,snapshot_limit:0}}catch(t){console.error("❌ Error fetching subscription:",t),e.subscription={tier:"free",status:"active",features:{auto_backups:!0,snapshots_enabled:!1,snapshot_limit:0,backup_retention_days:30},snapshot_count:0,snapshot_limit:0}}}_loadFromStorage(){try{const e=localStorage.getItem(b.STORAGE_KEY);if(e){const t=JSON.parse(e);this._isValidStoredUser(t)?this._currentUser=t:this._clearStorage()}}catch(e){console.error("❌ Failed to load auth from storage:",e),this._clearStorage()}}_clearStorage(){try{localStorage.removeItem(b.STORAGE_KEY)}catch(e){console.error("❌ Failed to clear auth storage:",e)}}_isValidStoredUser(e){if(!e)return console.warn("❌ Validation failed: user is null/undefined"),!1;const t={"user exists":!!e,"id is number":"number"==typeof e.id,"username is string":"string"==typeof e.username,"email is string":"string"==typeof e.email,"displayName is string":"string"==typeof e.displayName},r=Object.entries(t).filter(([e,t])=>!t).map(([e])=>e);return r.length>0?(console.warn("❌ Validation failed. Failed checks:",r),console.warn("   User data:",JSON.stringify(e,null,2)),!1):void 0!==e.token&&"string"!=typeof e.token?(console.warn("❌ Validation failed: token exists but is not a string"),!1):void 0===e.expiresAt||"number"==typeof e.expiresAt||(console.warn("❌ Validation failed: expiresAt exists but is not a number"),!1)}}b.API_BASE="https://ultracard.io/wp-json",b.JWT_ENDPOINT="/jwt-auth/v1",b.STORAGE_KEY="ultra-card-cloud-auth",b.REFRESH_THRESHOLD=3e5,b.DEFAULT_TOKEN_TTL=6048e5;const f=new b},8690(e,t,r){r.d(t,{Jd:()=>c,Jo:()=>a,ft:()=>d,fu:()=>s,p0:()=>l});const o="sensor.ultra_card_pro_cloud_authentication_status",n="1.6.0";function i(e){if(!e||"string"!=typeof e)return null;const t=e.trim().split(/[-+]/)[0].split(".").map(e=>Number.parseInt(e,10));if(t.length<1||t.some(e=>Number.isNaN(e)))return null;for(;t.length<3;)t.push(0);return t.slice(0,3)}function s(e){const t=function(e){var t;return(null===(t=null==e?void 0:e.states)||void 0===t?void 0:t[o])||null}(e);if(!t)return{installed:!1,integrationVersion:null,capabilities:{},outdated:!1,reason:null};const r=t.attributes||{},s=r.integration_version,a="string"==typeof s&&s.trim()?s.trim():null;let l={};const c=r.capabilities;if(c&&"object"==typeof c&&!Array.isArray(c)&&(l=Object.assign({},c)),!a)return{installed:!0,integrationVersion:null,capabilities:l,outdated:!0,reason:"missing_version"};const d=function(e,t){const r=i(e),o=i(t);if(!r&&!o)return 0;if(!r)return-1;if(!o)return 1;for(let e=0;e<3;e++)if(r[e]!==o[e])return r[e]-o[e];return 0}(a,n)<0;return{installed:!0,integrationVersion:a,capabilities:l,outdated:d,reason:d?"below_minimum":null}}function a(e){return s(e).installed}function l(e,t){const r=s(e);return!(!r.installed||r.outdated)&&!0===r.capabilities[t]}function c(e,t){const r=s(e);return r.installed&&r.outdated?t?`${t} requires Ultra Card Connect ${n} or newer. Please update the Ultra Card Connect integration.`:"Update Ultra Card Connect to continue. This feature needs Connect 1.6.0 or newer.":null}function d(e,t){const r=c(e,t);if(!r)return null;const o=new Error(r);return o.code="connect_outdated",o}r.d(t,["$f",0,o])},3496(e,t,r){var o=/*#__PURE__*/r(1001);const n="uc-toast-live-region",i=new class{constructor(){this._container=null}_ensureContainer(){if(this._container&&document.body.contains(this._container))return this._container;let e=document.getElementById(n);return e||(e=document.createElement("div"),e.id=n,e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-atomic","false"),e.style.cssText=`\n        position: fixed;\n        top: 16px;\n        right: 16px;\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        z-index: ${o.Mu.TOAST_NOTIFICATION};\n        pointer-events: none;\n      `,document.body.appendChild(e)),this._container=e,e}show(e,t,r){var o,n;const i="string"==typeof e?{message:e,type:null!=t?t:"info",duration:null!=r?r:3e3}:e,s=null!==(o=i.type)&&void 0!==o?o:"info",a=null!==(n=i.duration)&&void 0!==n?n:3e3,l=this._ensureContainer();"error"===s?(l.setAttribute("role","alert"),l.setAttribute("aria-live","assertive")):(l.setAttribute("role","status"),l.setAttribute("aria-live","polite"));const c=document.createElement("div");c.setAttribute("aria-atomic","true"),c.textContent=i.message;const d=()=>{c.style.opacity="0",c.style.transform="translateX(40px)",setTimeout(()=>{c.remove(),0===l.children.length&&(l.setAttribute("role","status"),l.setAttribute("aria-live","polite"))},260)};if(i.action){const e=document.createElement("button");e.type="button",e.textContent=i.action.label,e.style.cssText="\n        margin-left: 12px;\n        padding: 4px 10px;\n        border: 1px solid rgba(255,255,255,0.7);\n        border-radius: 6px;\n        background: rgba(255,255,255,0.15);\n        color: inherit;\n        font: inherit;\n        font-weight: 600;\n        cursor: pointer;\n      ",e.addEventListener("click",()=>{var e;d(),null===(e=i.action)||void 0===e||e.onClick()}),c.appendChild(e)}const u="success"===s?"var(--success-color, #4caf50)":"error"===s?"var(--error-color, #f44336)":"warning"===s?"var(--warning-color, #ff9800)":"var(--primary-color, #03a9f4)";c.style.cssText=`\n      padding: 10px 20px;\n      background: ${u};\n      color: white;\n      border-radius: 8px;\n      font-size: 13px;\n      font-weight: 500;\n      box-shadow: 0 4px 12px rgba(0,0,0,0.25);\n      pointer-events: auto;\n      opacity: 0;\n      transform: translateX(40px);\n      transition: opacity 0.25s ease, transform 0.25s ease;\n      max-width: 360px;\n      word-break: break-word;\n    `,l.appendChild(c),requestAnimationFrame(()=>{c.style.opacity="1",c.style.transform="translateX(0)"}),a>0&&setTimeout(d,a)}success(e,t){this.show(e,"success",t)}error(e,t){this.show(e,"error",null!=t?t:4e3)}info(e,t){this.show(e,"info",t)}warning(e,t){this.show(e,"warning",t)}};r.d(t,["f",0,i])},9879(e,t,r){r.d(t,{Sn:()=>l});var o=r(3496);const n=[/Failed to fetch dynamically imported module/i,/error loading dynamically imported module/i,/Importing a module script failed/i,/Failed to load module script/i,/Loading (?:CSS )?chunk [\w.-]+ failed/i,/ChunkLoadError/i,/^Load failed$/i,/NetworkError when attempting to fetch resource/i];let i=!1;async function s(e){if("undefined"!=typeof navigator&&!1===navigator.onLine)return"offline";if("function"!=typeof fetch)return"unknown";const t=async e=>{var t;try{const r="undefined"!=typeof AbortController?new AbortController:void 0,o=r?setTimeout(()=>r.abort(),4e3):void 0,n=await fetch(e,{method:"HEAD",cache:"no-store",credentials:"same-origin",signal:null!==(t=null==r?void 0:r.signal)&&void 0!==t?t:null});return o&&clearTimeout(o),n.status}catch(e){return}},o=function(e){var t;const r=null==e?void 0:e.message;if("string"!=typeof r)return;const o=r.match(/(https?:\/\/\S+|\/\S+\.js\S*)/);return null===(t=null==o?void 0:o[1])||void 0===t?void 0:t.replace(/[).,]+$/,"")}(e);if(o){const e=await t(o);return 404===e||410===e?"version-skew":void 0===e?"offline":"unknown"}const n=(()=>{try{return new URL("ultra-card.js",r.p).toString()}catch(e){return}})();if(!n)return"unknown";const i=await t(n);return void 0===i?"offline":i>=200&&i<400?"version-skew":"unknown"}function a(){try{window.location.reload()}catch(e){}}function l(e,t,r={}){return!(!function(e){if(!e)return!1;const t=e;if("ChunkLoadError"===t.name||"CSS_CHUNK_LOAD_FAILED"===t.code)return!0;const r="string"==typeof t.message?t.message:"string"==typeof e?e:"";return!!r&&n.some(e=>e.test(r))}(e)||"undefined"!=typeof window&&"undefined"!=typeof document&&(!1===r.notify?(s(e).then(r=>{console.warn(`[UltraCard] Chunk load failed (${t}): ${r}. The card keeps working with its built-in English text. If this persists after a reload, redownload Ultra Card in HACS / Marketplace so every uc-*.js file is present next to ultra-card.js.`,e)}),0):i?(console.warn(`[UltraCard] Chunk load failed (${t}); reload pending.`,e),0):(i=!0,s(e).then(r=>{console.warn(`[UltraCard] Chunk load failed (${t}): ${r}.`,e),function(e){const t=document.querySelector("home-assistant");if(t)try{return void t.dispatchEvent(new CustomEvent("hass-notification",{bubbles:!0,composed:!0,detail:{id:"ultra-card-chunk-load",message:e,duration:-1,dismissable:!0,action:{text:"Reload",action:a}}}))}catch(e){}o.f.show({message:e,type:"warning",duration:0,action:{label:"Reload",onClick:a}})}(function(e){switch(e){case"version-skew":return"Ultra Card was updated. Reload the page to finish.";case"offline":return"Ultra Card could not load part of this card. Check your connection and reload.";default:return"Ultra Card could not load part of this card. Reload the page to try again."}}(r))}),0)))}},3045(e,t,r){const o=(()=>{try{if(window.__UC_DEBUG)return!0;const e=localStorage.getItem("uc_debug");return"1"===e||"true"===e}catch(e){return!1}})();r.d(t,["v",0,o])},1793(e,t,r){r.d(t,{hc:()=>s,nF:()=>a});const o="Can't reach Ultra Card cloud right now. Please try again in a few minutes.",n=["siteground","anti-bot","sg-captcha","sgcaptcha","bot-protection","bot protection","javascript challenge","exempt /wp-json","/wp-json/","robot challenge"];function i(e){const t=e.toLowerCase();return n.some(e=>t.includes(e))}function s(e,t=o){return"string"==typeof e&&e.trim()?i(e)?o:e.trim():t}function a(e){if("string"==typeof e)return i(e)?o:e;if(Array.isArray(e))return e.map(e=>a(e));if(e&&"object"==typeof e){const t={};for(const[r,o]of Object.entries(e))t[r]=a(o);return t}return e}r.d(t,["Fv",0,o])},1001(e,t,r){r.d(t,["Mu",0,{BASE_CONTENT:0,MODULE_CONTENT:1,MODULE_OVERLAY:2,MODULE_BACKGROUND:3,MODULE_DECORATIVE:5,MODULE_INTERACTIVE:8,CARD_BACKGROUND:10,CARD_CONTROLS:20,NATIVE_CARD_ABOVE_NAV:25,CARD_TOOLTIP:30,EDITOR_CONTENT:100,STICKY_HEADERS:400,EDITOR_TABS:500,EDITOR_NOTIFICATIONS:600,MODULE_POPUP_OVERLAY:1e3,MODULE_POPUP_CONTENT:1001,LAYOUT_CHILD_POPUP:1002,SELECTOR_POPUP:1003,RESIZE_HANDLE:1004,POPUP_STICKY_ELEMENTS:1005,POPUP_TABS:2e3,DROPDOWN_SELECT:5e3,DROPDOWN_MENU:5001,COLOR_PICKER_CONTAINER:0,COLOR_PICKER_PALETTE:5003,AUTOCOMPLETE:5004,CONTEXT_MENU:5005,DIALOG_OVERLAY:8e3,DIALOG_CONTENT:8001,TOAST_NOTIFICATION:8500,GRAPH_TOOLTIP:2147483647,CAMERA_FULLSCREEN_OVERLAY:1e4,CAMERA_FULLSCREEN_CONTENT:10001,FULLSCREEN_EDITOR:10002}])},842(e,t,r){r.d(t,{mN:()=>E,AH:()=>l,W3:()=>w,Ec:()=>A});const o=globalThis,n=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class a{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(t,e))}return e}toString(){return this.cssText}}const l=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new a(r,e,i)},c=(e,t)=>{if(n)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const r of t){const t=document.createElement("style"),n=o.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=r.cssText,e.appendChild(t)}},d=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:u,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:b,getOwnPropertySymbols:f,getPrototypeOf:g}=Object,m=globalThis,v=m.trustedTypes,_=v?v.emptyScript:"",y=m.reactiveElementPolyfillSupport,x=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},A=(e,t)=>!u(e,t),$={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&h(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:n}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const i=o?.call(this);n?.call(this,t),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...b(e),...f(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){const n=(void 0!==r.converter?.toAttribute?r.converter:w).toAttribute(t,r.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=r.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=o;const i=n.fromAttribute(t,e.type);this[o]=i??this._$Ej?.get(o)??i,this._$Em=null}}requestUpdate(e,t,r,o=!1,n){if(void 0!==e){const i=this.constructor;if(!1===o&&(n=this[e]),r??=i.getPropertyOptions(e),!((r.hasChanged??A)(n,t)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:n},i){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==n||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[x("elementProperties")]=new Map,E[x("finalized")]=new Map,y?.({ReactiveElement:E}),(m.reactiveElementVersions??=[]).push("2.1.2")},6752(e,t,r){const o=globalThis,n=e=>e,i=o.trustedTypes,s=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,a="$lit$",l=`lit$${Math.random().toFixed(9).slice(2)}$`,c="?"+l,d=`<${c}>`,u=document,h=()=>u.createComment(""),p=e=>null===e||"object"!=typeof e&&"function"!=typeof e,b=Array.isArray,f=e=>b(e)||"function"==typeof e?.[Symbol.iterator],g="[ \t\n\f\r]",m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,y=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),x=/'/g,w=/"/g,A=/^(?:script|style|textarea|title)$/i,$=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),E=$(1),S=($(2),$(3),Symbol.for("lit-noChange")),k=Symbol.for("lit-nothing"),T=new WeakMap,C=u.createTreeWalker(u,129);function P(e,t){if(!b(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s?s.createHTML(t):t}const O=(e,t)=>{const r=e.length-1,o=[];let n,i=2===t?"<svg>":3===t?"<math>":"",s=m;for(let t=0;t<r;t++){const r=e[t];let c,u,h=-1,p=0;for(;p<r.length&&(s.lastIndex=p,u=s.exec(r),null!==u);)p=s.lastIndex,s===m?"!--"===u[1]?s=v:void 0!==u[1]?s=_:void 0!==u[2]?(A.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=y):void 0!==u[3]&&(s=y):s===y?">"===u[0]?(s=n??m,h=-1):void 0===u[1]?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=void 0===u[3]?y:'"'===u[3]?w:x):s===w||s===x?s=y:s===v||s===_?s=m:(s=y,n=void 0);const b=s===y&&e[t+1].startsWith("/>")?" ":"";i+=s===m?r+d:h>=0?(o.push(c),r.slice(0,h)+a+r.slice(h)+l+b):r+l+(-2===h?t:b)}return[P(e,i+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class U{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,s=0;const d=e.length-1,u=this.parts,[p,b]=O(e,t);if(this.el=U.createElement(p,r),C.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=C.nextNode())&&u.length<d;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(a)){const t=b[s++],r=o.getAttribute(e).split(l),i=/([.?@])?(.*)/.exec(t);u.push({type:1,index:n,name:i[2],strings:r,ctor:"."===i[1]?R:"?"===i[1]?z:"@"===i[1]?j:D}),o.removeAttribute(e)}else e.startsWith(l)&&(u.push({type:6,index:n}),o.removeAttribute(e));if(A.test(o.tagName)){const e=o.textContent.split(l),t=e.length-1;if(t>0){o.textContent=i?i.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],h()),C.nextNode(),u.push({type:2,index:++n});o.append(e[t],h())}}}else if(8===o.nodeType)if(o.data===c)u.push({type:2,index:n});else{let e=-1;for(;-1!==(e=o.data.indexOf(l,e+1));)u.push({type:7,index:n}),e+=l.length-1}n++}}static createElement(e,t){const r=u.createElement("template");return r.innerHTML=e,r}}function I(e,t,r=e,o){if(t===S)return t;let n=void 0!==o?r._$Co?.[o]:r._$Cl;const i=p(t)?void 0:t._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),void 0===i?n=void 0:(n=new i(e),n._$AT(e,r,o)),void 0!==o?(r._$Co??=[])[o]=n:r._$Cl=n),void 0!==n&&(t=I(e,n._$AS(e,t.values),n,o)),t}class N{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??u).importNode(t,!0);C.currentNode=o;let n=C.nextNode(),i=0,s=0,a=r[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new L(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new H(n,this,e)),this._$AV.push(t),a=r[++s]}i!==a?.index&&(n=C.nextNode(),i++)}return C.currentNode=u,o}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),p(e)?e===k||null==e||""===e?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==S&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):f(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&p(this._$AH)?this._$AA.nextSibling.data=e:this.T(u.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=U.createElement(P(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new N(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=T.get(e.strings);return void 0===t&&T.set(e.strings,t=new U(e)),t}k(e){b(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new L(this.O(h()),this.O(h()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=n(e).nextSibling;n(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=k}_$AI(e,t=this,r,o){const n=this.strings;let i=!1;if(void 0===n)e=I(this,e,t,0),i=!p(e)||e!==this._$AH&&e!==S,i&&(this._$AH=e);else{const o=e;let s,a;for(e=n[0],s=0;s<n.length-1;s++)a=I(this,o[r+s],t,s),a===S&&(a=this._$AH[s]),i||=!p(a)||a!==this._$AH[s],a===k?e=k:e!==k&&(e+=(a??"")+n[s+1]),this._$AH[s]=a}i&&!o&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class R extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}}class z extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}}class j extends D{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??k)===S)return;const r=this._$AH,o=e===k&&r!==k||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==k&&(r===k||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class H{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const M={M:a,P:l,A:c,C:1,L:O,R:N,D:f,V:I,I:L,H:D,N:z,U:j,B:R,F:H},V=o.litHtmlPolyfillSupport;V?.(U,L),(o.litHtmlVersions??=[]).push("3.3.2"),r.d(t,["XX",0,(e,t,r)=>{const o=r?.renderBefore??t;let n=o._$litPart$;if(void 0===n){const e=r?.renderBefore??null;o._$litPart$=n=new L(t.insertBefore(h(),e),e,void 0,r??{})}return n._$AI(e),n},"c0",0,S,"ge",0,M,"qy",0,E,"s6",0,k])},4791(e,t,r){r.d(t,{EM:()=>o,MZ:()=>a,wk:()=>l});const o=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var n=r(842);const i={attribute:!0,type:String,converter:n.W3,reflect:!1,hasChanged:n.Ec},s=(e=i,t,r)=>{const{kind:o,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(void 0===s&&globalThis.litPropertyMetadata.set(n,s=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),"accessor"===o){const{name:o}=r;return{set(r){const n=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,n,e,!0,r)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=r;return function(r){const n=this[o];t.call(this,r),this.requestUpdate(o,n,e,!0,r)}}throw Error("Unsupported decorator location: "+o)};function a(e){return(t,r)=>"object"==typeof r?s(e,t,r):((e,t,r)=>{const o=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}function l(e){return a({...e,state:!0,attribute:!1})}},2618(e,t,r){r.d(t,{WF:()=>s,AH:()=>o.AH,qy:()=>n.qy,c0:()=>n.c0,s6:()=>n.s6});var o=r(842),n=r(6752);const i=globalThis;class s extends o.mN{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,n.XX)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return n.c0}}s._$litElement$=!0,s.finalized=!0,i.litElementHydrateSupport?.({LitElement:s});const a=i.litElementPolyfillSupport;a?.({LitElement:s}),(i.litElementVersions??=[]).push("4.2.2")}};const t={};function r(o){const n=t[o];if(void 0!==n)return n.exports;const i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.m=e,r.d=(e,t)=>{if(Array.isArray(t))for(var o=0;o<t.length;){var n=t[o++],i=t[o++],s=0===i?{enumerable:!0,value:t[o++]}:{enumerable:!0,get:i};r.o(e,n)||Object.defineProperty(e,n,s)}else for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>{const t=[];return r.f.j(e,t),Promise.all(t)},r.u=e=>"uc-"+({730:"locale-nl-editor",931:"locale-de",969:"locale-it",1212:"locale-nb-editor",1543:"locale-en",1771:"locale-da-editor",1920:"locale-ca-editor",1948:"locale-nl",1959:"locale-no",2198:"locale-ca",2508:"locale-es-editor",2593:"locale-it-editor",2619:"locale-no-editor",2865:"locale-sv-editor",3002:"default-image",3250:"locale-zh-editor",3258:"locale-fr",3411:"locale-en-GB-editor",3751:"locale-da",4351:"locale-en-GB",4377:"locale-sv",4420:"locale-zh",4866:"locale-es",5088:"locale-pl-editor",5259:"locale-en-editor",5348:"locale-fr-editor",5367:"locale-de-editor",5432:"locale-nn-editor",5858:"locale-cs-editor",5877:"vendor-pako",6722:"locale-nb",6870:"locale-pl",7364:"locale-cs",9150:"locale-nn"}[e]||e)+"."+{23:"bef92fb6",185:"f1369d42",323:"9d8dca03",730:"dc95651d",931:"b5be4b0c",969:"4fc1bcda",1172:"7ac11546",1212:"9d917948",1543:"785e2a24",1771:"dbe28640",1883:"0e5233a3",1920:"1fa5829e",1948:"896e9a56",1959:"4b8acc19",2198:"ee882fbf",2508:"05aad7a9",2593:"96476c81",2619:"ee159392",2865:"e33bb9d8",3002:"7ae9b424",3250:"80a9b7ac",3258:"75ea5c5d",3411:"fa0cfabb",3751:"fe53304b",4351:"237020cf",4377:"a34db20a",4420:"64f7260d",4480:"ad4dcba8",4847:"cbd8c0ae",4866:"66a1b298",5088:"b1c64dc6",5259:"bc00638e",5348:"d70db519",5367:"5258133e",5432:"ead6cfdb",5691:"79865dff",5858:"beeb5cc8",5877:"0961e8a0",6597:"f886ac0b",6722:"1f21d180",6870:"9e364978",7364:"bfa932b0",8097:"feb3b949",8306:"8935adf5",8612:"81ffe8ca",8840:"dfd0a294",9034:"354bc06f",9142:"a59aeb36",9150:"05af2c18",9418:"eadbb130",9753:"f052ed04"}[e]+".js",r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{let e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:|[?#].*$/g,"").replace(/\/[^/]+$/,"/"),r.p=e})(),(()=>{const e={5491:0},t=t=>{let{__webpack_esm_ids__:o,__webpack_esm_modules__:n,__webpack_esm_runtime__:i}=t;var s,a,l=0;for(s in n)r.o(n,s)&&(r.m[s]=n[s]);for(i&&i(r);l<o.length;l++)a=o[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0};r.f.j=(o,n)=>{let i=r.o(e,o)?e[o]:void 0;if(0!==i)if(i)n.push(i[1]);else{let s=import("./"+r.u(o)).then(t,t=>{throw 0!==e[o]&&(e[o]=void 0),t});s=Promise.race([s,new Promise(t=>i=e[o]=[t])]),n.push(i[1]=s)}}})();try{const e=r.p;"string"==typeof e&&e.length>0&&!e.endsWith("/")&&(r.p=e.replace(/[?#].*$/,"").replace(/\/[^/]*$/,"/"))}catch(e){}var o=r(2618),n=r(4791),i=r(9978),s=r(378),a=r(935),l=r(9879),c=/*#__PURE__*/r(821);let d=!1;var u=function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s};d||"undefined"==typeof document||(d=!0,document.addEventListener("keydown",function(e){if("Enter"!==e.key&&" "!==e.key)return;if(e.defaultPrevented||e.repeat)return;const t=e.composedPath()[0];t instanceof HTMLElement&&t.hasAttribute("data-uc-activate")&&(e.preventDefault(),t.click())})),(0,a.yV)();const h="ultra_card_hub_tab",p={dashboard:()=>r.e(185).then(()=>r(185)),account:()=>Promise.all([r.e(4847),r.e(9034)]).then(()=>r(9034)),favorites:()=>r.e(8612).then(()=>r(8612)),presets:()=>Promise.all([r.e(5877),r.e(9418),r.e(8306),r.e(5691),r.e(4480),r.e(9142)]).then(()=>r(3378)),themes:()=>Promise.all([r.e(8306),r.e(323)]).then(()=>r(4235)),colors:()=>r.e(8840).then(()=>r(8840)),variables:()=>r.e(9753).then(()=>r(9753)),templates:()=>r.e(6597).then(()=>r(6597)),docs:()=>Promise.all([r.e(9418),r.e(8097)]).then(()=>r(8097))},b=[{key:"dashboard",labelKey:"hub.groups.home",icon:"mdi:home"},{key:"favorites",labelKey:"hub.tabs.favorites",icon:"mdi:heart"},{key:"presets",labelKey:"hub.tabs.presets",icon:"mdi:palette"},{key:"themes",labelKey:"hub.tabs.themes",icon:"mdi:palette-swatch"},{key:"colors",labelKey:"hub.tabs.colors",icon:"mdi:eyedropper-variant"},{key:"variables",labelKey:"hub.tabs.variables",icon:"mdi:variable"},{key:"templates",labelKey:"hub.tabs.templates",icon:"mdi:code-tags"},{key:"account",labelKey:"hub.tabs.account",icon:"mdi:account-circle"},{key:"docs",labelKey:"hub.tabs.docs",icon:"mdi:book-open-page-variant"}];function f(e){return e?"pro"===e?"account":"about"===e?"docs":b.some(t=>t.key===e)?e:null:null}class g extends o.WF{constructor(){super(...arguments),this._activeTab="dashboard",this._pendingDocsSlug="",this._pendingPresetsView="",this._pendingThemesView="",this._proAuth=null,this._cloudUser=null,this._narrow=window.matchMedia("(max-width: 870px)").matches,this._loadedTabs=new Set,this._showShortcuts=!1,this._tabLoadPromises=new Map,this._hubKeydownHandler=e=>{var t,r,o;if("?"!==e.key)return;const n=null===(r=null===(t=e.target)||void 0===t?void 0:t.tagName)||void 0===r?void 0:r.toLowerCase();"input"===n||"textarea"===n||(null===(o=e.target)||void 0===o?void 0:o.isContentEditable)||(e.preventDefault(),this._showShortcuts=!this._showShortcuts)},this._onMqlChange=e=>{this._narrow=e.matches},this._onTabStripKeydown=e=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;const t=b.findIndex(e=>e.key===this._activeTab);if(t<0)return;let r=t;r="ArrowLeft"===e.key?(t-1+b.length)%b.length:"ArrowRight"===e.key?(t+1)%b.length:"Home"===e.key?0:b.length-1,e.preventDefault();const o=b[r].key;this._selectTab(o),this.updateComplete.then(()=>{var e;const t=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(`#hub-tab-${o}`);null==t||t.focus(),null==t||t.scrollIntoView({block:"nearest",inline:"nearest"})})}}connectedCallback(){super.connectedCallback(),this._restoreNavState(),this._mql=window.matchMedia("(max-width: 870px)"),this._mql.addEventListener("change",this._onMqlChange),this._updateProState(),this._cloudUser=s.xd.getCurrentUser(),this._authListener=e=>{this._cloudUser=e},s.xd.addListener(this._authListener),this._localeUnsub=(0,a.BT)(()=>this.requestUpdate()),this.addEventListener(c.zP,this._onNavigateTab),document.addEventListener(c.zP,this._onNavigateTab),document.addEventListener("keydown",this._hubKeydownHandler)}disconnectedCallback(){var e,t;super.disconnectedCallback(),null===(e=this._localeUnsub)||void 0===e||e.call(this),this._localeUnsub=void 0,null===(t=this._mql)||void 0===t||t.removeEventListener("change",this._onMqlChange),this._mql=void 0,this._authListener&&(s.xd.removeListener(this._authListener),this._authListener=void 0),this.removeEventListener(c.zP,this._onNavigateTab),document.removeEventListener(c.zP,this._onNavigateTab),document.removeEventListener("keydown",this._hubKeydownHandler)}_restoreNavState(){try{const e=f(localStorage.getItem(h));e&&(this._activeTab=e);const t=localStorage.getItem(c.eo);t&&(this._pendingDocsSlug=t,localStorage.removeItem(c.eo))}catch(e){}}_persistNavState(){try{localStorage.setItem(h,this._activeTab)}catch(e){}}_onNavigateTab(e){const t=e.detail;if(!(null==t?void 0:t.tab))return;const r={};t.slug&&(r.docsSlug=t.slug),t.presetsView&&(r.presetsView=t.presetsView),t.themesView&&(r.themesView=t.themesView),this._selectTab(t.tab,r)}_selectTab(e,t){var r;this._activeTab=null!==(r=f(e))&&void 0!==r?r:"dashboard",(null==t?void 0:t.docsSlug)&&(this._pendingDocsSlug=t.docsSlug),(null==t?void 0:t.presetsView)&&(this._pendingPresetsView=t.presetsView),(null==t?void 0:t.themesView)&&(this._pendingThemesView=t.themesView),this._persistNavState(),this._onTabActivated(this._activeTab)}_onTabActivated(e){"presets"===e&&this._refreshPresetsTab(),"docs"===e&&this._refreshDocsTab()}async _refreshPresetsTab(){const{ucPresetsService:e}=await Promise.all([r.e(5877),r.e(5691),r.e(1883)]).then(()=>r(5691));e.ensureWordPressLoaded(),await e.refreshWordPressPresets(),await Promise.all([r.e(5877),r.e(9418),r.e(8306),r.e(5691),r.e(4480),r.e(9142)]).then(()=>r(3378)),requestAnimationFrame(()=>{var e,t;const r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector("hub-presets-tab");null===(t=null==r?void 0:r.refresh)||void 0===t||t.call(r)})}async _refreshDocsTab(){const e=this._pendingDocsSlug;await Promise.all([r.e(9418),r.e(8097)]).then(()=>r(8097)),requestAnimationFrame(()=>{var t,r;const o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector("hub-docs-tab");e&&(null==o?void 0:o.openSlug)?(o.openSlug(e),this._pendingDocsSlug=""):null===(r=null==o?void 0:o.reload)||void 0===r||r.call(o)})}updated(e){var t;if(e.has("hass")&&this._updateProState(),e.has("_activeTab")){const e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(`#hub-tab-${this._activeTab}`);null==e||e.scrollIntoView({block:"nearest",inline:"nearest"})}}_updateProState(){var e;if(!(null===(e=this.hass)||void 0===e?void 0:e.states))return void(this._proAuth=null);const t=this.hass.states["sensor.ultra_card_pro_cloud_authentication_status"];if(!t)return void(this._proAuth=null);const r=t.attributes;this._proAuth={authenticated:"connected"===t.state&&!!(null==r?void 0:r.authenticated),user_id:null==r?void 0:r.user_id,username:null==r?void 0:r.username,email:null==r?void 0:r.email,display_name:null==r?void 0:r.display_name,subscription_tier:null==r?void 0:r.subscription_tier,subscription_status:null==r?void 0:r.subscription_status,subscription_expires:null==r?void 0:r.subscription_expires};const o=s.xd.checkIntegrationAuth(this.hass);o&&s.xd.setIntegrationUser(o,this.hass)}_toggleSidebar(){this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0}))}_renderAccountChip(){var e,t;const r=(null===(e=this._proAuth)||void 0===e?void 0:e.authenticated)?{name:this._proAuth.display_name||this._proAuth.username||"Account",tier:this._proAuth.subscription_tier}:this._cloudUser?{name:this._cloudUser.displayName||this._cloudUser.username||"Account",tier:null===(t=this._cloudUser.subscription)||void 0===t?void 0:t.tier}:null;if(r){const e="pro"===r.tier;return o.qy`
        <button
          class="hub-account-chip"
          @click=${()=>this._selectTab("account")}
          title="View account"
          aria-label="View account"
        >
          <ha-icon icon="mdi:account-circle"></ha-icon>
          <span>Hi, ${r.name}</span>
          <span class="hub-tier-badge ${e?"pro":"free"}">
            ${e?o.qy`<ha-icon icon="mdi:star" style="--mdc-icon-size:10px"></ha-icon>`:""}
            ${e?"PRO":"Free"}
          </span>
        </button>
      `}return o.qy`
      <button
        class="hub-sign-in-btn"
        @click=${()=>this._selectTab("account")}
        aria-label="Sign in"
      >
        <ha-icon icon="mdi:login"></ha-icon>
        Sign In
      </button>
    `}_ensureTabLoaded(e){if(this._loadedTabs.has(e))return;let t=this._tabLoadPromises.get(e);if(!t){const r=p[e];t=(r?r():Promise.resolve()).then(()=>{this._loadedTabs=new Set(this._loadedTabs),this._loadedTabs.add(e),this._tabLoadPromises.delete(e),this.requestUpdate()}).catch(t=>{this._tabLoadPromises.delete(e),(0,l.Sn)(t,`hub tab ${e}`)}),this._tabLoadPromises.set(e,t)}}_renderTabContent(){var e,t,r;const n=this._activeTab,i=null!==(r=null===(t=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===t?void 0:t.language)&&void 0!==r?r:"en";if(this._ensureTabLoaded(n),!this._loadedTabs.has(n))return o.qy`
        <div class="tab-loading" aria-busy="true">
          <ha-icon icon="mdi:loading"></ha-icon>
          <span>${(0,a.kg)("hub.loading",i,"Loading…")}</span>
        </div>
      `;switch(n){case"dashboard":default:return o.qy`<hub-dashboard-tab .hass=${this.hass}></hub-dashboard-tab>`;case"account":return o.qy`<hub-account-tab
          .hass=${this.hass}
          .auth=${this._proAuth}
          .cloudUser=${this._cloudUser}
        ></hub-account-tab>`;case"favorites":return o.qy`<hub-favorites-tab></hub-favorites-tab>`;case"presets":return o.qy`<hub-presets-tab
          .hass=${this.hass}
          .initialView=${this._pendingPresetsView||"browse"}
          @presets-view-applied=${()=>{this._pendingPresetsView=""}}
        ></hub-presets-tab>`;case"themes":return o.qy`<hub-themes-tab
          .hass=${this.hass}
          .initialView=${this._pendingThemesView||"browse"}
          @themes-view-applied=${()=>{this._pendingThemesView=""}}
        ></hub-themes-tab>`;case"colors":return o.qy`<hub-colors-tab .hass=${this.hass}></hub-colors-tab>`;case"variables":return o.qy`<hub-variables-tab .hass=${this.hass}></hub-variables-tab>`;case"templates":return o.qy`<hub-templates-tab></hub-templates-tab>`;case"docs":return o.qy`<hub-docs-tab
          .hass=${this.hass}
          .initialSlug=${this._pendingDocsSlug}
        ></hub-docs-tab>`}}render(){var e,t,r;const n=null!==(r=null===(t=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===t?void 0:t.language)&&void 0!==r?r:"en";return o.qy`
      <div class="hub-container">
        <header class="hub-header ${this._narrow?"hub-header--narrow":""}">
          ${this._narrow?o.qy`
                <button
                  class="mobile-menu-btn"
                  @click=${this._toggleSidebar}
                  aria-label="Toggle sidebar"
                >
                  <ha-icon icon="mdi:menu"></ha-icon>
                </button>
              `:""}
          <div class="hub-brand">
            <div class="hub-brand-mark" aria-hidden="true">
              <ha-icon icon="mdi:cards"></ha-icon>
            </div>
            <div class="hub-brand-text">
              <h1>Ultra Card</h1>
              <span class="hub-brand-sub">${(0,a.kg)("hub.subtitle",n,"Hub")}</span>
            </div>
          </div>
          ${this._renderAccountChip()}
        </header>

        <nav class="hub-nav" aria-label="Hub navigation">
          <div class="tab-strip" role="tablist" @keydown=${this._onTabStripKeydown}>
            ${b.map(e=>o.qy`
                <button
                  role="tab"
                  id="hub-tab-${e.key}"
                  aria-selected=${this._activeTab===e.key?"true":"false"}
                  aria-controls="hub-tabpanel-${e.key}"
                  tabindex=${this._activeTab===e.key?"0":"-1"}
                  class=${this._activeTab===e.key?"active":""}
                  @click=${()=>this._selectTab(e.key)}
                >
                  <ha-icon icon=${e.icon}></ha-icon>
                  ${(0,a.kg)(e.labelKey,n,e.key)}
                </button>
              `)}
          </div>
        </nav>

        <div
          class="hub-content"
          role="tabpanel"
          id="hub-tabpanel-${this._activeTab}"
          aria-labelledby="hub-tab-${this._activeTab}"
        >
          <div class="hub-page">${this._renderTabContent()}</div>
        </div>
      </div>

      ${this._showShortcuts?o.qy`
            <div
              class="shortcuts-backdrop"
              role="dialog"
              aria-label="Keyboard shortcuts"
              @click=${()=>{this._showShortcuts=!1}}
            >
              <div class="shortcuts-panel" @click=${e=>e.stopPropagation()}>
                <h2>Keyboard shortcuts</h2>
                <ul>
                  <li><span>Toggle this help</span><kbd>?</kbd></li>
                  <li><span>Focus docs search (Docs tab)</span><kbd>/</kbd></li>
                </ul>
                <button
                  type="button"
                  class="close"
                  @click=${()=>{this._showShortcuts=!1}}
                >
                  Close
                </button>
              </div>
            </div>
          `:o.s6}
    `}}g.styles=[i.z,o.AH`
      .hub-nav {
        display: flex;
        flex-direction: column;
        gap: 0;
        flex-shrink: 0;
        border-bottom: 1px solid var(--uc-hub-border);
        background: var(--uc-hub-surface);
        box-shadow: var(--uc-hub-shadow-sm);
        position: relative;
        z-index: 1;
      }

      .tab-strip {
        display: flex;
        gap: 2px;
        padding: 0 16px;
        overflow-x: auto;
        scrollbar-width: none;
      }

      .tab-strip::-webkit-scrollbar {
        display: none;
      }

      .tab-strip button {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 14px;
        border: none;
        background: none;
        color: var(--secondary-text-color);
        font: inherit;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        border-radius: 8px 8px 0 0;
        transition: color 0.15s ease, background 0.15s ease;
      }

      .tab-strip button::after {
        content: '';
        position: absolute;
        left: 10px;
        right: 10px;
        bottom: 0;
        height: 2px;
        border-radius: 2px 2px 0 0;
        background: var(--primary-color);
        opacity: 0;
        transform: scaleX(0.6);
        transition: opacity 0.15s ease, transform 0.2s ease;
      }

      .tab-strip button:hover {
        color: var(--primary-text-color);
        background: var(--uc-hub-surface-2);
      }

      .tab-strip button.active {
        color: var(--primary-color);
        font-weight: 600;
      }

      .tab-strip button.active::after {
        opacity: 1;
        transform: scaleX(1);
      }

      .tab-strip button ha-icon {
        --mdc-icon-size: 18px;
      }

      @media (max-width: 870px) {
        .tab-strip {
          padding: 0 8px;
        }
        .tab-strip button {
          padding: 10px 12px;
          font-size: 13px;
        }
      }

      .mobile-menu-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        border: none;
        background: none;
        color: var(--primary-text-color);
        cursor: pointer;
        border-radius: 50%;
        padding: 0;
        margin-left: -8px;
      }

      .hub-header--narrow {
        padding: 8px 12px 8px 8px;
        gap: 8px;
      }

      .tab-loading {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 48px 24px;
        color: var(--secondary-text-color);
        font-size: 14px;
      }

      .tab-loading ha-icon {
        --mdc-icon-size: 24px;
        margin-right: 8px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      .shortcuts-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.45);
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
      }

      .shortcuts-panel {
        max-width: 400px;
        width: 100%;
        background: var(--ha-card-background, var(--card-background-color));
        border-radius: 14px;
        padding: 20px 24px;
        border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      }

      .shortcuts-panel h2 {
        margin: 0 0 12px;
        font-size: 18px;
      }

      .shortcuts-panel ul {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 14px;
        color: var(--secondary-text-color);
      }

      .shortcuts-panel li {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        padding: 8px 0;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
      }

      .shortcuts-panel kbd {
        font-family: inherit;
        padding: 2px 8px;
        border-radius: 6px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        font-size: 12px;
      }

      .shortcuts-panel button.close {
        margin-top: 16px;
        width: 100%;
        padding: 10px;
        border-radius: 8px;
        border: none;
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        cursor: pointer;
        font: inherit;
      }
    `],u([(0,n.MZ)({attribute:!1})],g.prototype,"hass",void 0),u([(0,n.wk)()],g.prototype,"_activeTab",void 0),u([(0,n.wk)()],g.prototype,"_pendingDocsSlug",void 0),u([(0,n.wk)()],g.prototype,"_pendingPresetsView",void 0),u([(0,n.wk)()],g.prototype,"_pendingThemesView",void 0),u([(0,n.wk)()],g.prototype,"_proAuth",void 0),u([(0,n.wk)()],g.prototype,"_cloudUser",void 0),u([(0,n.wk)()],g.prototype,"_narrow",void 0),u([(0,n.wk)()],g.prototype,"_loadedTabs",void 0),u([(0,n.wk)()],g.prototype,"_showShortcuts",void 0),customElements.get("ultra-card-panel")||customElements.define("ultra-card-panel",g);export{g as UltraCardPanel};