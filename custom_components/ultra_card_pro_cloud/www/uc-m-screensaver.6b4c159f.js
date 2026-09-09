export const __webpack_esm_ids__=[6924];export const __webpack_esm_modules__={380(e,n,t){t.d(n,{UltraScreensaverModule:()=>u});var s=t(2618),i=t(6478),r=t(7475);function a(e){return String(e).padStart(2,"0")}function o(e,n){if(n)return`${a(e.getHours())}:${a(e.getMinutes())}`;const t=e.getHours(),s=t<12;return`${t%12||12}:${a(e.getMinutes())} ${s?"AM":"PM"}`}function l(e,n){return e.toLocaleDateString(n,{weekday:"short",month:"short",day:"numeric"}).toUpperCase()}function c(e){var n;return e&&null!==(n={sunny:"mdi:weather-sunny","clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",partlycloudy:"mdi:weather-partly-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:alert-circle-outline"}[e])&&void 0!==n?n:"mdi:weather-partly-cloudy"}const d={classic:"Classic",minimal:"Minimal",neon:"Neon",retro:"Retro",frosted:"Frosted Glass",photo_corner:"Photo Corner",sunrise:"Sunrise",dark_luxe:"Dark Luxe",split:"Split",ambient:"Ambient"};class u extends r.m{constructor(){super(...arguments),this._active=!1,this._idleTimer=null,this._clockTimer=null,this._slideshowTimer=null,this._slideIndex=0,this._now=new Date,this._initialized=!1,this._resetHandler=null,this._currentModule=null,this._currentHass=null,this._currentConfig=void 0,this._portal=null,this._lastManualDismissAt=0,this._prevEntityState=null,this.handlesOwnDesignStyles=!0,this.metadata={type:"screensaver",title:"Screensaver",description:"Kiosk screensaver that activates after idle with clock, weather, and image slideshow",author:"WJD Designs",version:"1.0.0",icon:"mdi:television-play",category:"media",tags:["screensaver","kiosk","clock","slideshow","idle","pro","premium"]}}createDefault(e,n){return{id:e||this.generateId("screensaver"),type:"screensaver",idle_timeout:60,show_clock:!0,clock_24h:!1,show_date:!0,show_weather:!0,weather_entity:"",image_urls:[],image_interval:10,activation_entity:"",trigger_buffer:5,overlay_style:"classic",overlay_opacity:90,overlay_color:"#000000",tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const n=[];return e.id||n.push("Module ID is required"),{valid:0===n.length,errors:n}}_resetIdleTimer(e){this._idleTimer&&clearTimeout(this._idleTimer),this._idleTimer=setTimeout(()=>this._activateFromIdle(),1e3*e)}_activateFromIdle(){var e,n;if(this._active)return;const t=Math.max(1e4,1e3*(null!==(n=null===(e=this._currentModule)||void 0===e?void 0:e.idle_timeout)&&void 0!==n?n:60));if(this._lastManualDismissAt>0&&Date.now()-this._lastManualDismissAt<t){const e=t-(Date.now()-this._lastManualDismissAt);return void this._resetIdleTimer(e/1e3)}this._doActivate()}_activateFromEntity(){var e,n;if(this._active)return;const t=Math.max(0,1e3*(null!==(n=null===(e=this._currentModule)||void 0===e?void 0:e.trigger_buffer)&&void 0!==n?n:5));this._lastManualDismissAt>0&&Date.now()-this._lastManualDismissAt<t||this._doActivate()}_doActivate(){this._active=!0,this._slideIndex=0,this._createPortal(),this._startClockTick(),this._startSlideshow(),this.triggerPreviewUpdate(!0)}_dismiss(){var e,n;if(!this._active)return;this._active=!1,this._lastManualDismissAt=Date.now(),this._destroyPortal(),this._stopSlideshow(),this._stopClockTick();const t=Math.max(10,null!==(n=null===(e=this._currentModule)||void 0===e?void 0:e.idle_timeout)&&void 0!==n?n:60);this._resetIdleTimer(t),this.triggerPreviewUpdate(!0)}_dismissFromEntity(){this._active&&(this._active=!1,this._destroyPortal(),this._stopSlideshow(),this._stopClockTick(),this.triggerPreviewUpdate(!0))}_startClockTick(){this._clockTimer&&clearInterval(this._clockTimer),this._clockTimer=setInterval(()=>{this._now=new Date,this._active&&this._updatePortal()},1e3)}_stopClockTick(){this._clockTimer&&(clearInterval(this._clockTimer),this._clockTimer=null)}_startSlideshow(){var e,n,t,s;this._slideshowTimer&&clearInterval(this._slideshowTimer);const i=null!==(n=null===(e=this._currentModule)||void 0===e?void 0:e.image_urls)&&void 0!==n?n:[];if(i.length<2)return;const r=1e3*(null!==(s=null===(t=this._currentModule)||void 0===t?void 0:t.image_interval)&&void 0!==s?s:10);this._slideshowTimer=setInterval(()=>{this._slideIndex=(this._slideIndex+1)%i.length,this._active&&this._updatePortal()},r)}_stopSlideshow(){this._slideshowTimer&&(clearInterval(this._slideshowTimer),this._slideshowTimer=null)}_initListeners(e){if(!this._initialized){this._initialized=!0,this._resetHandler=()=>{this._active||this._resetIdleTimer(e)};for(const e of u.ACTIVITY_EVENTS)document.addEventListener(e,this._resetHandler,{passive:!0});this._resetIdleTimer(e)}}destroy(){if(this._resetHandler){for(const e of u.ACTIVITY_EVENTS)document.removeEventListener(e,this._resetHandler);this._resetHandler=null}this._idleTimer&&(clearTimeout(this._idleTimer),this._idleTimer=null),this._stopClockTick(),this._stopSlideshow(),this._destroyPortal(),this._active=!1,this._initialized=!1}_createPortal(){this._portal||(this._portal=document.createElement("div"),this._portal.setAttribute("data-uc-screensaver",""),document.body.appendChild(this._portal),this._updatePortal())}_updatePortal(){this._portal&&this._currentModule&&this._currentHass&&(0,s.XX)(this._buildOverlay(this._currentModule,this._currentHass,this._currentConfig),this._portal)}_destroyPortal(){this._portal&&((0,s.XX)(s.s6,this._portal),this._portal.remove(),this._portal=null)}_buildOverlay(e,n,t){var r,d,u,p,v,h,g,m,_;const y=(null===(r=null==n?void 0:n.locale)||void 0===r?void 0:r.language)||"en",f=!!e.clock_24h,b=this._now,x=o(b,f),w=function(e,n){return e.toLocaleDateString(n,{weekday:"long",month:"long",day:"numeric"})}(b,y),k=l(b,y),$=null!==(d=e.image_urls)&&void 0!==d?d:[],q=$.length>0?$[this._slideIndex%$.length]:null,S=q?`linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('${q}') center/cover no-repeat`:"none",z=e.weather_entity?this.resolveEntity(e.weather_entity,t)||e.weather_entity:null,T=z?null===(u=null==n?void 0:n.states)||void 0===u?void 0:u[z]:null,M=null==T?void 0:T.state,I=null===(p=null==T?void 0:T.attributes)||void 0===p?void 0:p.temperature,C=null!==(h=null===(v=null==T?void 0:T.attributes)||void 0===v?void 0:v.temperature_unit)&&void 0!==h?h:null!==(_=null===(m=null===(g=null==n?void 0:n.config)||void 0===g?void 0:g.unit_system)||void 0===m?void 0:m.temperature)&&void 0!==_?_:"°C",E=!1!==e.show_weather&&!!M,A=e.overlay_color||"#000000",D=e.overlay_style||"classic",B=q?s.qy`<div class="uc-ss-bg-img" style="background:${S};"></div>`:s.s6,P=s.qy`
      <div class="uc-ss-hint">
        ${(0,i.kg)("editor.screensaver.tap_to_dismiss",y,"Tap anywhere to dismiss")}
      </div>`,N=$.length>1?s.qy`
      <div class="uc-ss-dots" aria-hidden="true">
        ${$.map((e,n)=>s.qy`
          <span class="uc-ss-dot ${n===this._slideIndex?"uc-ss-dot--active":""}"></span>`)}
      </div>`:s.s6,F=(e="rgba(255,255,255,0.9)",n=28)=>E?s.qy`
      <div class="uc-ss-weather">
        <ha-icon icon="${c(M)}"
          style="--mdc-icon-size:${n}px; color:${e};"></ha-icon>
        ${void 0!==I?s.qy`<span class="uc-ss-weather__temp" style="color:${e};">
              ${Math.round(Number(I))}${C}</span>`:s.s6}
      </div>`:s.s6;let H,O="",L="";switch(D){case"minimal":O="uc-ss-minimal",L=q?`background:${S}`:"background-color:rgba(0,0,0,0.18)",H=s.qy`${B}
          <div class="uc-ss-minimal-content">
            ${!1!==e.show_date?s.qy`<div class="uc-ss-minimal-date">${k}</div>`:s.s6}
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-minimal-clock">${x}</div>`:s.s6}
          </div>${P}`;break;case"neon":O="uc-ss-neon",L="",H=s.qy`<div class="uc-ss-content">
          ${!1!==e.show_clock?s.qy`<div class="uc-ss-neon-clock">${x}</div>`:s.s6}
          ${!1!==e.show_date?s.qy`<div class="uc-ss-neon-date">${k}</div>`:s.s6}
          ${F("#00d4ff",24)}${P}${N}</div>`;break;case"retro":{O="uc-ss-retro",L="";const n=f?s.s6:s.qy`<span class="uc-ss-retro-ampm">${b.getHours()<12?"AM":"PM"}</span>`;H=s.qy`<div class="uc-ss-scanlines"></div>
          <div class="uc-ss-content">
            <div class="uc-ss-retro-clock">
              <span>${f?`${a(b.getHours())}:${a(b.getMinutes())}:${a(b.getSeconds())}`:`${b.getHours()%12||12}:${a(b.getMinutes())}:${a(b.getSeconds())}`}</span>${n}</div>
            ${!1!==e.show_date?s.qy`
              <div class="uc-ss-retro-date">
                ${b.getFullYear()}.${a(b.getMonth()+1)}.${a(b.getDate())}</div>`:s.s6}
            ${E?s.qy`
              <div class="uc-ss-retro-weather">&gt;&nbsp;${null==M?void 0:M.toUpperCase()}
                ${void 0!==I?s.qy`&nbsp;/&nbsp;${Math.round(Number(I))}${C}`:s.s6}
              </div>`:s.s6}
            ${P}${N}</div>`;break}case"frosted":O="uc-ss-frosted",L="background-color:rgba(0,0,0,0.45)",H=s.qy`${B}
          <div class="uc-ss-frosted-panel">
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-clock">${x}</div>`:s.s6}
            ${!1!==e.show_date?s.qy`<div class="uc-ss-date">${w}</div>`:s.s6}
            ${F()}${N}</div>${P}`;break;case"photo_corner":O="uc-ss-photo-corner",L=q?`background:${S}`:"background-color:rgba(0,0,0,0.12)",H=s.qy`${B}
          ${E?s.qy`
            <div class="uc-ss-corner-weather">
              <ha-icon icon="${c(M)}"
                style="--mdc-icon-size:20px; color:rgba(255,255,255,0.85);"></ha-icon>
              ${void 0!==I?s.qy`<span class="uc-ss-corner-temp">${Math.round(Number(I))}${C}</span>`:s.s6}</div>`:s.s6}
          <div class="uc-ss-corner-content">
            ${!1!==e.show_date?s.qy`<div class="uc-ss-corner-date">${k}</div>`:s.s6}
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-corner-clock">${x}</div>`:s.s6}
          </div>${P}${N}`;break;case"sunrise":O="uc-ss-sunrise",L="",H=s.qy`<div class="uc-ss-content">
          ${!1!==e.show_clock?s.qy`<div class="uc-ss-sunrise-clock">${x}</div>`:s.s6}
          ${!1!==e.show_date?s.qy`<div class="uc-ss-sunrise-date">${w}</div>`:s.s6}
          ${F("rgba(255,255,255,0.92)",28)}${P}${N}</div>`;break;case"dark_luxe":O="uc-ss-dark-luxe",L="",H=s.qy`<div class="uc-ss-content">
          ${!1!==e.show_clock?s.qy`<div class="uc-ss-luxe-clock">${x}</div>`:s.s6}
          <div class="uc-ss-luxe-rule"></div>
          ${!1!==e.show_date?s.qy`<div class="uc-ss-luxe-date">${k}</div>`:s.s6}
          ${E?s.qy`
            <div class="uc-ss-luxe-weather">
              <ha-icon icon="${c(M)}"
                style="--mdc-icon-size:18px; color:#c9a84c;"></ha-icon>
              ${void 0!==I?s.qy`<span style="color:#c9a84c;">${Math.round(Number(I))}${C}</span>`:s.s6}</div>`:s.s6}
          ${P}${N}</div>`;break;case"split":O="uc-ss-split",L=q?`background:${S}`:`background-color:${A}`,H=s.qy`${B}
          <div class="uc-ss-split-left">
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-split-clock">${x}</div>`:s.s6}
          </div>
          <div class="uc-ss-split-divider"></div>
          <div class="uc-ss-split-right">
            ${!1!==e.show_date?s.qy`<div class="uc-ss-split-date">${w}</div>`:s.s6}
            ${F("rgba(255,255,255,0.85)",22)}${P}${N}</div>`;break;case"ambient":O="uc-ss-ambient",L="",H=s.qy`
          <div class="uc-ss-orb uc-ss-orb--1"></div>
          <div class="uc-ss-orb uc-ss-orb--2"></div>
          <div class="uc-ss-orb uc-ss-orb--3"></div>
          <div class="uc-ss-content">
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-ambient-clock">${x}</div>`:s.s6}
            ${!1!==e.show_date?s.qy`<div class="uc-ss-ambient-date">${w}</div>`:s.s6}
            ${F("rgba(255,255,255,0.8)",26)}${P}${N}</div>`;break;default:O="uc-ss-classic",L=q?`background:${S}`:`background-color:${A}`,H=s.qy`${B}
          <div class="uc-ss-content">
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-clock">${x}</div>`:s.s6}
            ${!1!==e.show_date?s.qy`<div class="uc-ss-date">${w}</div>`:s.s6}
            ${F()}${P}${N}</div>`}return s.qy`
      <style>${this._overlayStyles()}</style>
      <div
        class="uc-ss-overlay ${O}"
        style="${L}"
        role="dialog"
        aria-modal="true"
        tabindex="0"
        aria-label="${(0,i.kg)("editor.screensaver.overlay_label",y,"Screensaver — tap to dismiss")}"
        @click=${()=>this._dismiss()}
        @keydown=${e=>{"Escape"!==e.key&&"Enter"!==e.key&&" "!==e.key||this._dismiss()}}
      >${H}</div>`}_buildPreviewBox(e,n,t,i){var r,u,p,v,h,g,m,_,y,f,b,x,w,k,$,q,S,z;const T=e.overlay_style||"classic",M=d[T],I=this._now,C=!!e.clock_24h,E=o(I,C),A=l(I,i),D=null!==(r=e.image_urls)&&void 0!==r?r:[],B=D.length>0?D[this._slideIndex%D.length]:null,P=e.weather_entity?this.resolveEntity(e.weather_entity,t)||e.weather_entity:null,N=P?null===(u=null==n?void 0:n.states)||void 0===u?void 0:u[P]:null,F=null==N?void 0:N.state,H=null===(p=null==N?void 0:N.attributes)||void 0===p?void 0:p.temperature,O=null!==(h=null===(v=null==N?void 0:N.attributes)||void 0===v?void 0:v.temperature_unit)&&void 0!==h?h:null!==(_=null===(m=null===(g=null==n?void 0:n.config)||void 0===g?void 0:g.unit_system)||void 0===m?void 0:m.temperature)&&void 0!==_?_:"°C",L=!1!==e.show_weather&&!!F,U=e.overlay_color||"#000000",V=B?`linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('${B}') center/cover no-repeat`:"none",j=L?s.qy`
      <div class="uc-ss-pv-weather">
        <ha-icon icon="${c(F)}" style="--mdc-icon-size:16px;"></ha-icon>
        ${void 0!==H?s.qy`<span>${Math.round(Number(H))}${O}</span>`:s.s6}
      </div>
    `:s.s6;return"classic"===T?s.qy`
        <div class="uc-ss-pv-scene" style="background:${U}; ${B?`background:${V};`:""}">
          ${this._pvBadge(M,this._active)} ${this._pvSecondaryBadge(null!==(y=e.idle_timeout)&&void 0!==y?y:60)}
          <div class="uc-ss-pv-center">
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-pv-clock">${E}</div>`:s.s6}
            ${!1!==e.show_date?s.qy`<div class="uc-ss-pv-date">${A}</div>`:s.s6}
            ${j}
          </div>
        </div>
      `:"minimal"===T?s.qy`
        <div class="uc-ss-pv-scene" style="background:${B?V:"rgba(0,0,0,0.55)"};">
          ${this._pvBadge(M,this._active)} ${this._pvSecondaryBadge(null!==(f=e.idle_timeout)&&void 0!==f?f:60)}
          <div class="uc-ss-pv-corner-bl">
            ${!1!==e.show_date?s.qy`<div class="uc-ss-pv-date" style="font-size:.55rem; letter-spacing:.1em;">${A}</div>`:s.s6}
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-pv-clock" style="font-size:2.8rem; font-weight:100; line-height:.9;">${E}</div>`:s.s6}
          </div>
        </div>
      `:"neon"===T?s.qy`
        <div class="uc-ss-pv-scene" style="background:#0a0a0a;">
          ${this._pvBadge(M,this._active)} ${this._pvSecondaryBadge(null!==(b=e.idle_timeout)&&void 0!==b?b:60)}
          <div class="uc-ss-pv-center">
            ${!1!==e.show_clock?s.qy`
              <div class="uc-ss-pv-clock" style="
                color:#00d4ff;
                text-shadow: 0 0 8px #00d4ff, 0 0 24px #00d4ff, 0 0 50px #0077ff;">
                ${E}
              </div>
            `:s.s6}
            ${!1!==e.show_date?s.qy`
              <div class="uc-ss-pv-date" style="color:#00aaff; opacity:.65; letter-spacing:.14em;">${A}</div>
            `:s.s6}
          </div>
        </div>
      `:"retro"===T?s.qy`
        <div class="uc-ss-pv-scene" style="background:#030c00; font-family:'Courier New',monospace; overflow:hidden;">
          <div style="position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.18) 2px,rgba(0,0,0,0.18) 4px);pointer-events:none;z-index:1;"></div>
          ${this._pvBadge(M,this._active)} ${this._pvSecondaryBadge(null!==(x=e.idle_timeout)&&void 0!==x?x:60)}
          <div class="uc-ss-pv-center" style="position:relative;z-index:2;">
            ${!1!==e.show_clock?s.qy`
              <div class="uc-ss-pv-clock" style="
                color:#39ff14;
                font-family:'Courier New',monospace;
                text-shadow:0 0 8px #39ff14,0 0 20px rgba(57,255,20,.4);">
                ${function(e,n){return n?`${a(e.getHours())}:${a(e.getMinutes())}:${a(e.getSeconds())}`:`${e.getHours()%12||12}:${a(e.getMinutes())}:${a(e.getSeconds())}`}(I,C)}
              </div>
            `:s.s6}
            ${!1!==e.show_date?s.qy`
              <div class="uc-ss-pv-date" style="color:#39ff14;opacity:.6;font-family:'Courier New',monospace;letter-spacing:.1em;">
                ${I.getFullYear()}.${a(I.getMonth()+1)}.${a(I.getDate())}
              </div>
            `:s.s6}
          </div>
        </div>
      `:"frosted"===T?s.qy`
        <div class="uc-ss-pv-scene" style="background:${B?V:"linear-gradient(135deg,#1a1a2e,#2d2d4e)"}; align-items:center; justify-content:center;">
          ${this._pvBadge(M,this._active)} ${this._pvSecondaryBadge(null!==(w=e.idle_timeout)&&void 0!==w?w:60)}
          <div style="
            position:relative; z-index:1;
            padding:18px 28px;
            border-radius:var(--uc-r-16, 16px);
            background:rgba(255,255,255,0.07);
            backdrop-filter:blur(20px) saturate(1.5);
            -webkit-backdrop-filter:blur(20px) saturate(1.5);
            border:1px solid rgba(255,255,255,0.13);
            box-shadow:0 4px 24px rgba(0,0,0,0.35);
            display:flex; flex-direction:column; align-items:center; gap:6px;">
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-pv-clock">${E}</div>`:s.s6}
            ${!1!==e.show_date?s.qy`<div class="uc-ss-pv-date">${A}</div>`:s.s6}
            ${j}
          </div>
        </div>
      `:"photo_corner"===T?s.qy`
        <div class="uc-ss-pv-scene" style="background:${B?V:"linear-gradient(135deg,#111,#2a2a2a)"};">
          ${this._pvBadge(M,this._active)} ${this._pvSecondaryBadge(null!==(k=e.idle_timeout)&&void 0!==k?k:60)}
          ${L?s.qy`
            <div style="position:absolute;top:10px;right:12px;z-index:2;display:flex;align-items:center;gap:4px;color:rgba(255,255,255,.8);font-size:.7rem;">
              <ha-icon icon="${c(F)}" style="--mdc-icon-size:14px;"></ha-icon>
              ${void 0!==H?s.qy`${Math.round(Number(H))}${O}`:s.s6}
            </div>
          `:s.s6}
          <div class="uc-ss-pv-corner-bl">
            ${!1!==e.show_date?s.qy`<div class="uc-ss-pv-date" style="font-size:.55rem; letter-spacing:.1em;">${A}</div>`:s.s6}
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-pv-clock" style="font-size:2.6rem; font-weight:200; line-height:.9;">${E}</div>`:s.s6}
          </div>
        </div>
      `:"sunrise"===T?s.qy`
        <div class="uc-ss-pv-scene" style="background:linear-gradient(-45deg,#ff9a3c,#ff6b35,#ff3d5a,#9b1b30,#6a0572);">
          ${this._pvBadge(M,this._active)} ${this._pvSecondaryBadge(null!==($=e.idle_timeout)&&void 0!==$?$:60)}
          <div class="uc-ss-pv-center">
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-pv-clock" style="color:rgba(255,255,255,.97);">${E}</div>`:s.s6}
            ${!1!==e.show_date?s.qy`<div class="uc-ss-pv-date" style="color:rgba(255,255,255,.8);">${A}</div>`:s.s6}
            ${j}
          </div>
        </div>
      `:"dark_luxe"===T?s.qy`
        <div class="uc-ss-pv-scene" style="background:#0a0a08;">
          ${this._pvBadge(M,this._active)} ${this._pvSecondaryBadge(null!==(q=e.idle_timeout)&&void 0!==q?q:60)}
          <div class="uc-ss-pv-center">
            ${!1!==e.show_clock?s.qy`
              <div class="uc-ss-pv-clock" style="color:#c9a84c; text-shadow:0 0 30px rgba(201,168,76,.2);">${E}</div>
            `:s.s6}
            <div style="width:36px;height:1px;background:linear-gradient(90deg,transparent,#c9a84c,transparent);margin:2px auto;"></div>
            ${!1!==e.show_date?s.qy`
              <div class="uc-ss-pv-date" style="color:rgba(201,168,76,.6); letter-spacing:.18em;">${A}</div>
            `:s.s6}
            ${L?s.qy`
              <div class="uc-ss-pv-weather" style="color:#c9a84c;">
                <ha-icon icon="${c(F)}" style="--mdc-icon-size:14px;"></ha-icon>
                ${void 0!==H?s.qy`<span>${Math.round(Number(H))}${O}</span>`:s.s6}
              </div>
            `:s.s6}
          </div>
        </div>
      `:"split"===T?s.qy`
        <div class="uc-ss-pv-scene" style="background:${U}; flex-direction:row; ${B?`background:${V};`:""}">
          ${this._pvBadge(M,this._active)} ${this._pvSecondaryBadge(null!==(S=e.idle_timeout)&&void 0!==S?S:60)}
          <div style="flex:1.3; display:flex; align-items:center; justify-content:center; padding:12px 8px 12px 16px;">
            ${!1!==e.show_clock?s.qy`<div class="uc-ss-pv-clock" style="font-size:2.2rem; white-space:nowrap;">${E}</div>`:s.s6}
          </div>
          <div style="width:1px; align-self:stretch; background:linear-gradient(180deg,transparent,rgba(255,255,255,.18),transparent); margin:16px 0; flex-shrink:0;"></div>
          <div style="flex:1; display:flex; flex-direction:column; align-items:flex-start; justify-content:center; padding:12px 16px 12px 10px; gap:6px;">
            ${!1!==e.show_date?s.qy`<div class="uc-ss-pv-date" style="font-size:.65rem; text-align:left;">${A}</div>`:s.s6}
            ${j}
          </div>
        </div>
      `:s.qy`
      <div class="uc-ss-pv-scene" style="background:linear-gradient(-45deg,#0d0d1a,#1a0d2e,#0d1a2e,#2e0d1a); overflow:hidden;">
        <div style="position:absolute; width:180px; height:180px; border-radius:50%; background:radial-gradient(circle,rgba(124,58,237,.5),transparent 70%); top:-20%; left:-10%; filter:blur(40px); pointer-events:none;"></div>
        <div style="position:absolute; width:220px; height:220px; border-radius:50%; background:radial-gradient(circle,rgba(14,165,233,.45),transparent 70%); bottom:-25%; right:-10%; filter:blur(50px); pointer-events:none;"></div>
        <div style="position:absolute; width:140px; height:140px; border-radius:50%; background:radial-gradient(circle,rgba(236,72,153,.45),transparent 70%); top:30%; left:55%; filter:blur(35px); pointer-events:none;"></div>
        ${this._pvBadge(M,this._active)} ${this._pvSecondaryBadge(null!==(z=e.idle_timeout)&&void 0!==z?z:60)}
        <div class="uc-ss-pv-center" style="position:relative; z-index:1;">
          ${!1!==e.show_clock?s.qy`
            <div class="uc-ss-pv-clock" style="text-shadow:0 0 40px rgba(124,58,237,.4);">${E}</div>
          `:s.s6}
          ${!1!==e.show_date?s.qy`
            <div class="uc-ss-pv-date" style="color:rgba(255,255,255,.55);">${A}</div>
          `:s.s6}
          ${j}
        </div>
      </div>
    `}_pvBadge(e,n){return s.qy`
      <div class="uc-ss-pv-badge ${n?"uc-ss-pv-badge--live":""}">
        ${n?s.qy`<span class="uc-ss-pv-live-dot"></span>`:s.s6}
        ${n?"LIVE":e}
      </div>
    `}_pvSecondaryBadge(e){return s.qy`
      <div class="uc-ss-pv-timer-badge">
        <ha-icon icon="mdi:timer-outline" style="--mdc-icon-size:11px;"></ha-icon>
        ${e}s
      </div>
    `}_isOnlyModule(e){var n,t,s,i;const r=null===(n=null==e?void 0:e.layout)||void 0===n?void 0:n.rows;if(!(null==r?void 0:r.length))return!0;let a=0;for(const e of r)for(const n of null!==(t=e.columns)&&void 0!==t?t:[])if(a+=null!==(i=null===(s=n.modules)||void 0===s?void 0:s.length)&&void 0!==i?i:0,a>1)return!1;return a<=1}renderPreview(e,n,t,r){var a,o,l,c,d;const u=e,p=(null===(a=null==n?void 0:n.locale)||void 0===a?void 0:a.language)||"en";this._currentModule=u,this._currentHass=n,this._currentConfig=t;const v=u.activation_entity?this.resolveEntity(u.activation_entity,t)||u.activation_entity:null,h=v&&null!==(c=null===(l=null===(o=null==n?void 0:n.states)||void 0===o?void 0:o[v])||void 0===l?void 0:l.state)&&void 0!==c?c:null;if(v){const e="on"===this._prevEntityState,n="on"===h;!n||e||this._active?!n&&e&&this._active&&this._dismissFromEntity():this._activateFromEntity()}this._prevEntityState=h,this._initListeners(null!==(d=u.idle_timeout)&&void 0!==d?d:60),this._active&&this._updatePortal();const g=this.getHoverEffectClass(e);return"ha-preview"===r?s.qy`
      <style>${this.getStyles()}</style>
      <div class="uc-ss-card ${g}">
        ${this._buildPreviewBox(u,n,t,p)}
        ${this._active?s.qy`
          <div class="uc-ss-card-footer" data-uc-role="pane">
            <span class="uc-ss-card-footer__label">
              ${(0,i.kg)("editor.screensaver.active_label",p,"Screensaver active")}
            </span>
            <button type="button" class="uc-ss-card-footer__btn"
              @click=${e=>{e.stopPropagation(),this._dismiss()}}>
              ${(0,i.kg)("editor.screensaver.dismiss",p,"Dismiss")}
            </button>
          </div>
        `:s.s6}
      </div>
    `:this._active?s.qy`
        <style>${this.getStyles()}</style>
        <div class="uc-ss-card-footer uc-ss-card-footer--standalone" data-uc-role="pane">
          <span class="uc-ss-card-footer__label">
            ${(0,i.kg)("editor.screensaver.active_label",p,"Screensaver active")}
          </span>
          <button type="button" class="uc-ss-card-footer__btn"
            @click=${e=>{e.stopPropagation(),this._dismiss()}}>
            ${(0,i.kg)("editor.screensaver.dismiss",p,"Dismiss")}
          </button>
        </div>
      `:this._isOnlyModule(t)?s.qy`<style>:host { display:none !important; }</style>`:s.qy``}renderGeneralTab(e,n,t,r){var a,o,l,c,u,p,v;const h=e,g=(null===(a=null==n?void 0:n.locale)||void 0===a?void 0:a.language)||"en",m=Object.keys(d).map(e=>({value:e,label:d[e]})),_=!["neon","retro","sunrise","dark_luxe","ambient"].includes(null!==(o=h.overlay_style)&&void 0!==o?o:"classic");return s.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">

        <!-- ── STYLE ───────────────────────────────────────── -->
        ${this.renderSettingsSection((0,i.kg)("editor.screensaver.style_section",g,"Style"),(0,i.kg)("editor.screensaver.style_desc",g,"Visual theme for the screensaver overlay."),[{title:(0,i.kg)("editor.screensaver.overlay_style",g,"Style"),description:"",hass:n,data:{overlay_style:h.overlay_style||"classic"},schema:[this.selectField("overlay_style",m)],onChange:e=>{var n;r({overlay_style:(null===(n=e.detail.value)||void 0===n?void 0:n.overlay_style)||"classic"}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}])}

        <!-- ── ACTIVATION ──────────────────────────────────── -->
        ${this.renderSettingsSection((0,i.kg)("editor.screensaver.timing_section",g,"Activation"),(0,i.kg)("editor.screensaver.timing_desc",g,"When the screensaver should appear."),[])}
        ${this.renderSliderField((0,i.kg)("editor.screensaver.idle_timeout",g,"Idle timeout"),(0,i.kg)("editor.screensaver.idle_timeout_desc",g,"Seconds of inactivity before activating"),null!==(l=h.idle_timeout)&&void 0!==l?l:60,60,30,600,5,e=>r({idle_timeout:e}),"s")}

        <!-- ── ACTIVATION ENTITY ───────────────────────────── -->
        ${this.renderSettingsSection((0,i.kg)("editor.screensaver.entity_section",g,"Activation Entity (optional)"),(0,i.kg)("editor.screensaver.entity_desc",g,'A binary_sensor that forces the screensaver on when its state is "on".'),[])}
        <div style="margin-bottom:16px;">
          ${this.renderEntityPickerWithVariables(n,t,"activation_entity",h.activation_entity||"",e=>r({activation_entity:e}),["binary_sensor"],(0,i.kg)("editor.screensaver.activation_entity",g,"Activation entity (optional)"))}
        </div>
        ${this.renderSliderField((0,i.kg)("editor.screensaver.trigger_buffer",g,"Trigger buffer"),(0,i.kg)("editor.screensaver.trigger_buffer_desc",g,"Seconds to wait after a manual dismiss before the entity can re-trigger"),null!==(c=h.trigger_buffer)&&void 0!==c?c:5,5,0,60,1,e=>r({trigger_buffer:e}),"s")}

        <!-- ── CLOCK ───────────────────────────────────────── -->
        ${this.renderSettingsSection((0,i.kg)("editor.screensaver.clock_section",g,"Clock & Date"),"",[{title:(0,i.kg)("editor.screensaver.show_clock",g,"Show clock"),description:"",hass:n,data:{show_clock:!1!==h.show_clock},schema:[this.booleanField("show_clock")],onChange:e=>{var n,t;return r({show_clock:null===(t=null===(n=e.detail.value)||void 0===n?void 0:n.show_clock)||void 0===t||t})}},{title:(0,i.kg)("editor.screensaver.clock_24h",g,"24-hour format"),description:(0,i.kg)("editor.screensaver.clock_24h_desc",g,"Use 24h time instead of AM/PM"),hass:n,data:{clock_24h:!!h.clock_24h},schema:[this.booleanField("clock_24h")],onChange:e=>{var n,t;return r({clock_24h:null!==(t=null===(n=e.detail.value)||void 0===n?void 0:n.clock_24h)&&void 0!==t&&t})}},{title:(0,i.kg)("editor.screensaver.show_date",g,"Show date"),description:"",hass:n,data:{show_date:!1!==h.show_date},schema:[this.booleanField("show_date")],onChange:e=>{var n,t;return r({show_date:null===(t=null===(n=e.detail.value)||void 0===n?void 0:n.show_date)||void 0===t||t})}}])}

        <!-- ── WEATHER ─────────────────────────────────────── -->
        ${this.renderSettingsSection((0,i.kg)("editor.screensaver.weather_section",g,"Weather"),"",[{title:(0,i.kg)("editor.screensaver.show_weather",g,"Show weather"),description:"",hass:n,data:{show_weather:!1!==h.show_weather},schema:[this.booleanField("show_weather")],onChange:e=>{var n,t;return r({show_weather:null===(t=null===(n=e.detail.value)||void 0===n?void 0:n.show_weather)||void 0===t||t})}}])}
        ${!1!==h.show_weather?s.qy`
          <div style="margin-bottom:24px;">
            ${this.renderEntityPickerWithVariables(n,t,"weather_entity",h.weather_entity||"",e=>r({weather_entity:e}),["weather"],(0,i.kg)("editor.screensaver.weather_entity",g,"Weather entity"))}
          </div>
        `:s.s6}

        <!-- ── OVERLAY (only for styles that use it) ───────── -->
        ${_?s.qy`
          ${this.renderSettingsSection((0,i.kg)("editor.screensaver.overlay_section",g,"Overlay"),(0,i.kg)("editor.screensaver.overlay_desc",g,"Background colour and opacity."),[{title:(0,i.kg)("editor.screensaver.overlay_color",g,"Overlay color"),description:"",hass:n,data:{overlay_color:h.overlay_color||"#000000"},schema:[{name:"overlay_color",selector:{color_rgb:{}}}],onChange:e=>{var n;const t=null===(n=e.detail.value)||void 0===n?void 0:n.overlay_color;t&&r({overlay_color:t})}}])}
          ${this.renderSliderField((0,i.kg)("editor.screensaver.overlay_opacity",g,"Overlay opacity"),"",null!==(u=h.overlay_opacity)&&void 0!==u?u:90,90,0,100,5,e=>r({overlay_opacity:e}),"%")}
        `:s.s6}

        <!-- ── IMAGE SLIDESHOW ─────────────────────────────── -->
        ${this.renderSettingsSection((0,i.kg)("editor.screensaver.images_section",g,"Image Slideshow (optional)"),(0,i.kg)("editor.screensaver.images_desc",g,"One URL per line to cycle as the screensaver background."),[])}
        ${this.renderFieldSection((0,i.kg)("editor.screensaver.image_urls",g,"Image URLs"),(0,i.kg)("editor.screensaver.image_urls_desc",g,"https:// or /local/ paths, one per line"),n,{image_urls_text:(null!==(p=h.image_urls)&&void 0!==p?p:[]).join("\n")},[{name:"image_urls_text",selector:{text:{multiline:!0}}}],e=>{var n,t;const s=(null!==(t=null===(n=e.detail.value)||void 0===n?void 0:n.image_urls_text)&&void 0!==t?t:"").split("\n").map(e=>e.trim()).filter(Boolean);r({image_urls:s})})}
        ${this.renderSliderField((0,i.kg)("editor.screensaver.image_interval",g,"Image interval"),"",null!==(v=h.image_interval)&&void 0!==v?v:10,10,3,120,1,e=>r({image_interval:e}),"s")}

      </div>
    `}getStyles(){return"\n      /* ── Card wrapper ──────────────────────────────────────────────── */\n      .uc-ss-card {\n        display: flex;\n        flex-direction: column;\n        gap: 0;\n        border-radius: var(--uc-r-14, 14px);\n        overflow: hidden;\n        box-sizing: border-box;\n        border: 1px solid color-mix(in srgb, var(--divider-color) 35%, transparent);\n      }\n\n      /* ── Preview scene box ─────────────────────────────────────────── */\n      .uc-ss-pv-scene {\n        position: relative;\n        width: 100%;\n        height: 180px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        box-sizing: border-box;\n      }\n\n      /* Center content column */\n      .uc-ss-pv-center {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 6px;\n        z-index: 1;\n        pointer-events: none;\n        user-select: none;\n      }\n\n      /* Bottom-left content column (minimal, photo_corner) */\n      .uc-ss-pv-corner-bl {\n        position: absolute;\n        bottom: 18px;\n        left: 22px;\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n        z-index: 1;\n        pointer-events: none;\n        user-select: none;\n      }\n\n      /* Clock text */\n      .uc-ss-pv-clock {\n        font-size: 2.6rem;\n        font-weight: 200;\n        letter-spacing: -0.03em;\n        color: rgba(255,255,255,0.95);\n        line-height: 1;\n        font-variant-numeric: tabular-nums;\n        text-shadow: 0 2px 20px rgba(0,0,0,0.5);\n      }\n\n      /* Date text */\n      .uc-ss-pv-date {\n        font-size: 0.65rem;\n        font-weight: 500;\n        letter-spacing: 0.08em;\n        text-transform: uppercase;\n        color: rgba(255,255,255,0.6);\n      }\n\n      /* Weather row */\n      .uc-ss-pv-weather {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        font-size: 0.75rem;\n        font-weight: 400;\n        color: rgba(255,255,255,0.75);\n        pointer-events: none;\n      }\n\n      /* Style name badge — top-left */\n      .uc-ss-pv-badge {\n        position: absolute;\n        top: 10px;\n        left: 12px;\n        z-index: 10;\n        display: inline-flex;\n        align-items: center;\n        gap: 5px;\n        padding: 3px 9px;\n        border-radius: 999px;\n        background: rgba(0,0,0,0.45);\n        backdrop-filter: blur(6px);\n        -webkit-backdrop-filter: blur(6px);\n        border: 1px solid rgba(255,255,255,0.12);\n        font-size: 0.62rem;\n        font-weight: 700;\n        letter-spacing: 0.06em;\n        text-transform: uppercase;\n        color: rgba(255,255,255,0.75);\n        pointer-events: none;\n        user-select: none;\n      }\n      .uc-ss-pv-badge--live {\n        background: rgba(220,38,38,0.6);\n        border-color: rgba(255,100,100,0.35);\n        color: #fff;\n      }\n      .uc-ss-pv-live-dot {\n        width: 6px;\n        height: 6px;\n        border-radius: 50%;\n        background: #ff4444;\n        box-shadow: 0 0 6px #ff4444;\n        animation: uc-ss-pv-blink 1.2s ease-in-out infinite;\n        flex-shrink: 0;\n      }\n      @keyframes uc-ss-pv-blink { 0%,100%{opacity:1} 50%{opacity:.3} }\n\n      /* Idle timer badge — top-right */\n      .uc-ss-pv-timer-badge {\n        position: absolute;\n        top: 10px;\n        right: 12px;\n        z-index: 10;\n        display: inline-flex;\n        align-items: center;\n        gap: 3px;\n        padding: 3px 8px;\n        border-radius: 999px;\n        background: rgba(0,0,0,0.4);\n        backdrop-filter: blur(6px);\n        -webkit-backdrop-filter: blur(6px);\n        border: 1px solid rgba(255,255,255,0.1);\n        font-size: 0.6rem;\n        font-weight: 600;\n        color: rgba(255,255,255,0.55);\n        pointer-events: none;\n        user-select: none;\n      }\n\n      /* ── Active footer bar ─────────────────────────────────────────── */\n      .uc-ss-card-footer--standalone {\n        border-radius: var(--uc-r-12, 12px);\n        border-top: none;\n      }\n      .uc-ss-card-footer {\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        padding: 8px 14px;\n        background: color-mix(in srgb, var(--primary-color) 8%, var(--uc-pane-bg, var(--card-background-color, var(--ha-card-background)))); border: var(--uc-pane-border, none); box-shadow: var(--uc-pane-shadow, none);\n        border-top: 1px solid color-mix(in srgb, var(--primary-color) 20%, transparent);\n      }\n      .uc-ss-card-footer__label {\n        flex: 1;\n        font-size: 0.78rem;\n        font-weight: 600;\n        color: var(--primary-color);\n        letter-spacing: 0.02em;\n      }\n      .uc-ss-card-footer__btn {\n        font: inherit;\n        font-size: 0.72rem;\n        font-weight: 700;\n        padding: 4px 12px;\n        border-radius: 999px;\n        cursor: pointer;\n        border: 1.5px solid color-mix(in srgb, var(--primary-color) 45%, transparent);\n        background: transparent;\n        color: var(--primary-color);\n        transition: background 0.12s;\n      }\n      .uc-ss-card-footer__btn:hover {\n        background: color-mix(in srgb, var(--primary-color) 12%, transparent);\n      }\n    "}_overlayStyles(){return"\n      /* ── Base overlay ──────────────────────────────────────────────── */\n      .uc-ss-overlay {\n        position: fixed;\n        inset: 0;\n        width: 100vw;\n        height: 100vh;\n        z-index: 9800;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        outline: none;\n        overflow: hidden;\n        font-family: system-ui, -apple-system, sans-serif;\n        animation: uc-ss-fadein 0.5s ease forwards;\n      }\n      @keyframes uc-ss-fadein { from { opacity:0; } to { opacity:1; } }\n      @media (prefers-reduced-motion: reduce) { .uc-ss-overlay { animation: none; } }\n\n      .uc-ss-bg-img {\n        position: absolute;\n        inset: 0;\n        background-size: cover;\n        background-position: center;\n        pointer-events: none;\n      }\n\n      /* Shared content column */\n      .uc-ss-content {\n        position: relative;\n        z-index: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 12px;\n        text-align: center;\n        padding: 32px;\n        pointer-events: none;\n        user-select: none;\n      }\n\n      /* Shared weather row */\n      .uc-ss-weather {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        pointer-events: none;\n      }\n      .uc-ss-weather__temp {\n        font-size: 1.4rem;\n        font-weight: 300;\n        letter-spacing: -0.02em;\n      }\n\n      /* Shared dismiss hint */\n      .uc-ss-hint {\n        margin-top: 16px;\n        font-size: 0.72rem;\n        font-weight: 500;\n        color: rgba(255,255,255,0.35);\n        letter-spacing: 0.07em;\n        text-transform: uppercase;\n        pointer-events: none;\n        user-select: none;\n        animation: uc-ss-hint-pulse 3s ease-in-out infinite;\n      }\n      @keyframes uc-ss-hint-pulse { 0%,100%{opacity:.35} 50%{opacity:.6} }\n      @media (prefers-reduced-motion: reduce) { .uc-ss-hint { animation: none; } }\n\n      /* Shared slideshow dots */\n      .uc-ss-dots { display:flex; gap:6px; margin-top:8px; pointer-events:none; }\n      .uc-ss-dot {\n        width:6px; height:6px; border-radius:50%;\n        background:rgba(255,255,255,0.3);\n        transition: background .3s, transform .3s;\n      }\n      .uc-ss-dot--active { background:rgba(255,255,255,0.9); transform:scale(1.3); }\n\n      /* Shared clock/date base */\n      .uc-ss-clock {\n        font-size: clamp(3rem, 12vw, 7rem);\n        font-weight: 200;\n        letter-spacing: -0.04em;\n        color: rgba(255,255,255,0.95);\n        line-height: 1;\n        text-shadow: 0 2px 32px rgba(0,0,0,0.4);\n        font-feature-settings: \"tnum\";\n        font-variant-numeric: tabular-nums;\n      }\n      .uc-ss-date {\n        font-size: clamp(0.875rem, 2.5vw, 1.375rem);\n        font-weight: 400;\n        color: rgba(255,255,255,0.7);\n        letter-spacing: 0.04em;\n        text-transform: uppercase;\n        text-shadow: 0 1px 12px rgba(0,0,0,0.3);\n      }\n\n      /* ═══════════════════════════════════════════════════════════════\n         1 ─ CLASSIC  (dark overlay, centered)\n         ═══════════════════════════════════════════════════════════════ */\n      /* uses base .uc-ss-clock / .uc-ss-date */\n\n      /* ═══════════════════════════════════════════════════════════════\n         2 ─ MINIMAL  (huge clock bottom-left)\n         ═══════════════════════════════════════════════════════════════ */\n      .uc-ss-minimal {\n        align-items: flex-end;\n        justify-content: flex-start;\n      }\n      .uc-ss-minimal-content {\n        position: relative;\n        z-index: 1;\n        padding: 40px 48px;\n        pointer-events: none;\n        user-select: none;\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n      }\n      .uc-ss-minimal-date {\n        font-size: clamp(0.7rem, 1.8vw, 1rem);\n        font-weight: 500;\n        color: rgba(255,255,255,0.55);\n        letter-spacing: 0.12em;\n        text-transform: uppercase;\n      }\n      .uc-ss-minimal-clock {\n        font-size: clamp(4rem, 16vw, 10rem);\n        font-weight: 100;\n        letter-spacing: -0.05em;\n        color: rgba(255,255,255,0.9);\n        line-height: 0.9;\n        text-shadow: 0 4px 40px rgba(0,0,0,0.3);\n        font-variant-numeric: tabular-nums;\n      }\n\n      /* ═══════════════════════════════════════════════════════════════\n         3 ─ NEON  (black bg, cyan glow)\n         ═══════════════════════════════════════════════════════════════ */\n      .uc-ss-neon { background: #0a0a0a !important; }\n      .uc-ss-neon-clock {\n        font-size: clamp(3rem, 13vw, 8rem);\n        font-weight: 300;\n        letter-spacing: -0.02em;\n        color: #00d4ff;\n        line-height: 1;\n        font-variant-numeric: tabular-nums;\n        text-shadow:\n          0 0 8px #00d4ff,\n          0 0 25px #00d4ff,\n          0 0 55px #00aaff,\n          0 0 90px #0077ff;\n        animation: uc-ss-neon-flicker 9s ease-in-out infinite;\n      }\n      @keyframes uc-ss-neon-flicker {\n        0%,90%,100% { opacity:1; }\n        91%          { opacity:.75; }\n        93%          { opacity:1; }\n        95%          { opacity:.8; }\n        97%          { opacity:1; }\n      }\n      @media (prefers-reduced-motion: reduce) { .uc-ss-neon-clock { animation:none; } }\n      .uc-ss-neon-date {\n        font-size: clamp(0.75rem, 2vw, 1.2rem);\n        font-weight: 500;\n        letter-spacing: 0.18em;\n        text-transform: uppercase;\n        color: #00aaff;\n        opacity: 0.7;\n        text-shadow: 0 0 12px #00aaff;\n      }\n\n      /* ═══════════════════════════════════════════════════════════════\n         4 ─ RETRO  (green terminal, scanlines)\n         ═══════════════════════════════════════════════════════════════ */\n      .uc-ss-retro {\n        background: #030c00 !important;\n        font-family: 'Courier New', Courier, monospace !important;\n      }\n      .uc-ss-scanlines {\n        position: absolute;\n        inset: 0;\n        background: repeating-linear-gradient(\n          0deg,\n          transparent 0px, transparent 2px,\n          rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px\n        );\n        pointer-events: none;\n        z-index: 2;\n      }\n      .uc-ss-retro .uc-ss-content { font-family: 'Courier New', Courier, monospace; }\n      .uc-ss-retro-clock {\n        font-size: clamp(2.5rem, 10vw, 6rem);\n        font-weight: 400;\n        letter-spacing: 0.06em;\n        color: #39ff14;\n        line-height: 1;\n        text-shadow: 0 0 10px #39ff14, 0 0 25px rgba(57,255,20,0.4);\n        font-variant-numeric: tabular-nums;\n      }\n      .uc-ss-retro-ampm {\n        font-size: 0.4em;\n        opacity: 0.8;\n        margin-left: 8px;\n        vertical-align: middle;\n      }\n      .uc-ss-retro-date {\n        font-size: clamp(0.85rem, 2.2vw, 1.4rem);\n        letter-spacing: 0.12em;\n        color: #39ff14;\n        opacity: 0.65;\n        text-shadow: 0 0 8px rgba(57,255,20,0.5);\n      }\n      .uc-ss-retro-weather {\n        font-size: clamp(0.75rem, 1.8vw, 1.1rem);\n        letter-spacing: 0.1em;\n        color: #39ff14;\n        opacity: 0.55;\n      }\n\n      /* ═══════════════════════════════════════════════════════════════\n         5 ─ FROSTED  (glass panel)\n         ═══════════════════════════════════════════════════════════════ */\n      .uc-ss-frosted-panel {\n        position: relative;\n        z-index: 1;\n        padding: 40px 52px;\n        border-radius: 28px;\n        background: rgba(255,255,255,0.07);\n        backdrop-filter: blur(28px) saturate(1.6);\n        -webkit-backdrop-filter: blur(28px) saturate(1.6);\n        border: 1px solid rgba(255,255,255,0.14);\n        box-shadow: 0 8px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 12px;\n        pointer-events: none;\n        user-select: none;\n      }\n\n      /* ═══════════════════════════════════════════════════════════════\n         6 ─ PHOTO CORNER  (content bottom-left)\n         ═══════════════════════════════════════════════════════════════ */\n      .uc-ss-photo-corner {\n        align-items: flex-end;\n        justify-content: flex-start;\n      }\n      .uc-ss-corner-content {\n        position: relative;\n        z-index: 1;\n        padding: 32px 40px;\n        pointer-events: none;\n        user-select: none;\n      }\n      .uc-ss-corner-clock {\n        font-size: clamp(3.5rem, 14vw, 9rem);\n        font-weight: 200;\n        letter-spacing: -0.04em;\n        color: #fff;\n        line-height: 1;\n        text-shadow: 0 2px 24px rgba(0,0,0,0.6);\n        font-variant-numeric: tabular-nums;\n      }\n      .uc-ss-corner-date {\n        font-size: clamp(0.7rem, 1.8vw, 1rem);\n        font-weight: 600;\n        letter-spacing: 0.12em;\n        text-transform: uppercase;\n        color: rgba(255,255,255,0.7);\n        margin-bottom: 6px;\n        text-shadow: 0 1px 10px rgba(0,0,0,0.5);\n      }\n      .uc-ss-corner-weather {\n        position: absolute;\n        top: 28px;\n        right: 32px;\n        z-index: 1;\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        pointer-events: none;\n      }\n      .uc-ss-corner-temp {\n        font-size: 1.1rem;\n        font-weight: 300;\n        color: rgba(255,255,255,0.85);\n        text-shadow: 0 1px 10px rgba(0,0,0,0.5);\n      }\n\n      /* ═══════════════════════════════════════════════════════════════\n         7 ─ SUNRISE  (warm animated gradient)\n         ═══════════════════════════════════════════════════════════════ */\n      .uc-ss-sunrise {\n        background: linear-gradient(-45deg, #ff9a3c, #ff6b35, #ff3d5a, #c0392b, #9b1b30, #6a0572);\n        background-size: 400% 400%;\n        animation: uc-ss-sunrise-shift 14s ease infinite, uc-ss-fadein 0.5s ease forwards;\n      }\n      @keyframes uc-ss-sunrise-shift {\n        0%   { background-position: 0% 50%; }\n        50%  { background-position: 100% 50%; }\n        100% { background-position: 0% 50%; }\n      }\n      @media (prefers-reduced-motion: reduce) { .uc-ss-sunrise { animation: uc-ss-fadein 0.5s ease forwards; } }\n      .uc-ss-sunrise-clock {\n        font-size: clamp(3rem, 13vw, 8rem);\n        font-weight: 300;\n        letter-spacing: -0.03em;\n        color: rgba(255,255,255,0.97);\n        line-height: 1;\n        text-shadow: 0 2px 30px rgba(0,0,0,0.25);\n        font-variant-numeric: tabular-nums;\n      }\n      .uc-ss-sunrise-date {\n        font-size: clamp(0.875rem, 2.4vw, 1.35rem);\n        font-weight: 400;\n        letter-spacing: 0.06em;\n        text-transform: uppercase;\n        color: rgba(255,255,255,0.8);\n      }\n\n      /* ═══════════════════════════════════════════════════════════════\n         8 ─ DARK LUXE  (near-black, gold)\n         ═══════════════════════════════════════════════════════════════ */\n      .uc-ss-dark-luxe { background: #0a0a08 !important; }\n      .uc-ss-luxe-clock {\n        font-size: clamp(3.5rem, 14vw, 9rem);\n        font-weight: 200;\n        letter-spacing: -0.02em;\n        color: #c9a84c;\n        line-height: 1;\n        text-shadow: 0 2px 40px rgba(201,168,76,0.25);\n        font-variant-numeric: tabular-nums;\n      }\n      .uc-ss-luxe-rule {\n        width: 48px;\n        height: 1px;\n        background: linear-gradient(90deg, transparent, #c9a84c, transparent);\n        margin: 2px 0;\n        border: none;\n      }\n      .uc-ss-luxe-date {\n        font-size: clamp(0.7rem, 2vw, 1.1rem);\n        font-weight: 500;\n        letter-spacing: 0.22em;\n        text-transform: uppercase;\n        color: rgba(201,168,76,0.65);\n      }\n      .uc-ss-luxe-weather {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        font-size: 0.9rem;\n        font-weight: 400;\n        letter-spacing: 0.06em;\n        margin-top: 4px;\n        pointer-events: none;\n      }\n\n      /* ═══════════════════════════════════════════════════════════════\n         9 ─ SPLIT  (left: clock, right: date + weather)\n         ═══════════════════════════════════════════════════════════════ */\n      .uc-ss-split {\n        flex-direction: row !important;\n        align-items: stretch;\n      }\n      .uc-ss-split-left {\n        flex: 1.4;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 48px 32px 48px 48px;\n        position: relative;\n        z-index: 1;\n        pointer-events: none;\n        user-select: none;\n      }\n      .uc-ss-split-clock {\n        font-size: clamp(2.5rem, 9vw, 6.5rem);\n        font-weight: 200;\n        letter-spacing: -0.04em;\n        color: rgba(255,255,255,0.95);\n        line-height: 1;\n        text-shadow: 0 2px 32px rgba(0,0,0,0.4);\n        font-variant-numeric: tabular-nums;\n        word-break: keep-all;\n        white-space: nowrap;\n      }\n      .uc-ss-split-divider {\n        width: 1px;\n        align-self: stretch;\n        background: linear-gradient(180deg, transparent, rgba(255,255,255,0.2), transparent);\n        margin: 40px 0;\n        flex-shrink: 0;\n        pointer-events: none;\n      }\n      .uc-ss-split-right {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: center;\n        padding: 48px 48px 48px 32px;\n        gap: 14px;\n        position: relative;\n        z-index: 1;\n        pointer-events: none;\n        user-select: none;\n      }\n      .uc-ss-split-date {\n        font-size: clamp(0.9rem, 2.4vw, 1.5rem);\n        font-weight: 300;\n        color: rgba(255,255,255,0.8);\n        letter-spacing: 0.02em;\n        line-height: 1.4;\n      }\n      /* override weather alignment for split */\n      .uc-ss-split .uc-ss-weather { align-self: flex-start; }\n      .uc-ss-split .uc-ss-hint    { align-self: flex-start; margin-top: 8px; }\n      .uc-ss-split .uc-ss-dots    { align-self: flex-start; }\n\n      /* ═══════════════════════════════════════════════════════════════\n         10 ─ AMBIENT  (animated gradient + floating orbs)\n         ═══════════════════════════════════════════════════════════════ */\n      .uc-ss-ambient {\n        background: linear-gradient(-45deg, #0d0d1a, #1a0d2e, #0d1a2e, #1a1a0d, #2e0d1a);\n        background-size: 500% 500%;\n        animation: uc-ss-ambient-shift 16s ease infinite, uc-ss-fadein 0.5s ease forwards;\n      }\n      @keyframes uc-ss-ambient-shift {\n        0%   { background-position: 0% 50%; }\n        50%  { background-position: 100% 50%; }\n        100% { background-position: 0% 50%; }\n      }\n      @media (prefers-reduced-motion: reduce) { .uc-ss-ambient { animation: uc-ss-fadein 0.5s ease forwards; } }\n      .uc-ss-orb {\n        position: absolute;\n        border-radius: 50%;\n        filter: blur(70px);\n        opacity: 0;\n        animation: uc-ss-orb-appear 1s ease forwards, uc-ss-orb-float linear infinite;\n        pointer-events: none;\n      }\n      @keyframes uc-ss-orb-appear { from { opacity:0; } to { opacity:0.35; } }\n      @keyframes uc-ss-orb-float {\n        0%,100% { transform: translate(0,0) scale(1); }\n        33%     { transform: translate(40px,-30px) scale(1.06); }\n        66%     { transform: translate(-25px,20px) scale(0.94); }\n      }\n      .uc-ss-orb--1 {\n        width: 380px; height: 380px;\n        background: radial-gradient(circle, #7c3aed, transparent 70%);\n        top: -8%; left: -6%;\n        animation-duration: 1s, 22s;\n      }\n      .uc-ss-orb--2 {\n        width: 480px; height: 480px;\n        background: radial-gradient(circle, #0ea5e9, transparent 70%);\n        bottom: -12%; right: -8%;\n        animation-duration: 1s, 28s;\n        animation-delay: 0.2s, 0s;\n      }\n      .uc-ss-orb--3 {\n        width: 300px; height: 300px;\n        background: radial-gradient(circle, #ec4899, transparent 70%);\n        top: 35%; left: 55%;\n        animation-duration: 1s, 19s;\n        animation-delay: 0.4s, 5s;\n      }\n      .uc-ss-ambient-clock {\n        font-size: clamp(3rem, 12vw, 7.5rem);\n        font-weight: 200;\n        letter-spacing: -0.04em;\n        color: rgba(255,255,255,0.92);\n        line-height: 1;\n        font-variant-numeric: tabular-nums;\n        text-shadow: 0 0 60px rgba(124,58,237,0.4);\n      }\n      .uc-ss-ambient-date {\n        font-size: clamp(0.875rem, 2.4vw, 1.35rem);\n        font-weight: 300;\n        color: rgba(255,255,255,0.6);\n        letter-spacing: 0.06em;\n        text-transform: uppercase;\n      }\n    "}}u.ACTIVITY_EVENTS=["pointermove","pointerdown","keydown","touchstart"]}};