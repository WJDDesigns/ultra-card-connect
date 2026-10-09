export const __webpack_esm_ids__=[6193];export const __webpack_esm_modules__={3883(n,e,t){function r(n,e,t){if(!e||!(null==n?void 0:n.callService))return;const r=e.split(".")[0];try{"button"===r?n.callService("button","press",{entity_id:e}):"switch"===r||"input_boolean"===r?n.callService(r,"toggle",{entity_id:e}):"light"===r?n.callService("light","toggle",{entity_id:e}):"script"===r?n.callService("script","turn_on",{entity_id:e}):"select"===r&&null!=(null==t?void 0:t.option)?n.callService("select","select_option",{entity_id:e,option:t.option}):"number"===r&&null!=(null==t?void 0:t.value)?n.callService("number","set_value",{entity_id:e,value:t.value}):"fan"===r&&null!=(null==t?void 0:t.percentage)&&n.callService("fan","set_percentage",{entity_id:e,percentage:t.percentage})}catch(n){}}function i(n,e){return{onPause:()=>r(n,e.controls.pauseEntityId),onResume:()=>r(n,e.controls.resumeEntityId),onStop:()=>r(n,e.controls.stopEntityId),onLight:()=>r(n,e.controls.lightEntityId),onSpeed:t=>r(n,e.controls.speedEntityId,{option:t}),onFan:(e,t)=>r(n,e.entityId,{percentage:t}),onNozzleTarget:t=>r(n,e.controls.nozzleTargetEntityId,{value:t}),onBedTarget:t=>r(n,e.controls.bedTargetEntityId,{value:t}),onMoreInfo:n=>{const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:n}});document.body.dispatchEvent(e)}}}t.d(e,{f:()=>i,p:()=>r})},6278(n,e,t){t.d(e,{D0:()=>f,Y0:()=>b});var r=t(2618),i=t(6658);const a={h2:{w:240,h:300,anchors:{nozzle:{x:.5,y:.515},bed:{x:.5,y:.81},chamber:{x:.27,y:.62},screen:{x:.295,y:.132},fan:{x:.775,y:.5},progress:{x:.79,y:.132}}},enclosed_corexy:{w:240,h:260,anchors:{nozzle:{x:.5,y:.535},bed:{x:.5,y:.825},chamber:{x:.27,y:.65},screen:{x:.27,y:.13},fan:{x:.78,y:.53},progress:{x:.8,y:.13}}},bedslinger:{w:240,h:260,anchors:{nozzle:{x:.5,y:.465},bed:{x:.5,y:.76},screen:{x:.235,y:.855},fan:{x:.79,y:.33},progress:{x:.8,y:.855}}},generic:{w:240,h:260,anchors:{nozzle:{x:.5,y:.535},bed:{x:.5,y:.825},screen:{x:.27,y:.13},fan:{x:.78,y:.53},progress:{x:.8,y:.13}}}};function o(){return r.JW`
    <defs>
      <linearGradient id="ucb-pillar" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#eef0f3"/>
        <stop offset="0.45" stop-color="#c9ccd3"/>
        <stop offset="1" stop-color="#8f939c"/>
      </linearGradient>
      <linearGradient id="ucb-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2a2d34"/>
        <stop offset="1" stop-color="#15171b"/>
      </linearGradient>
      <linearGradient id="ucb-band" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#141519"/>
        <stop offset="1" stop-color="#090a0c"/>
      </linearGradient>
      <linearGradient id="ucb-glass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.16"/>
        <stop offset="0.35" stop-color="#ffffff" stop-opacity="0.04"/>
        <stop offset="0.6" stop-color="#ffffff" stop-opacity="0"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity="0.06"/>
      </linearGradient>
      <linearGradient id="ucb-interior" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#101216"/>
        <stop offset="1" stop-color="#060708"/>
      </linearGradient>
      <linearGradient id="ucb-metal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#6a6e78"/>
        <stop offset="1" stop-color="#3a3d45"/>
      </linearGradient>
      <linearGradient id="ucb-light-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#fafbfc"/>
        <stop offset="1" stop-color="#d4d7dd"/>
      </linearGradient>
      <radialGradient id="ucb-chamber-glow" cx="0.5" cy="0" r="0.9">
        <stop offset="0" stop-color="#fff6dc" stop-opacity="0.35"/>
        <stop offset="1" stop-color="#fff6dc" stop-opacity="0"/>
      </radialGradient>
      <filter id="ucb-soft" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.6"/>
      </filter>
      <filter id="ucb-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
  `}function s(n,e,t,i){const a=i=>r.JW`
    <path
      d="M ${n} ${e} m 0 ${.15*-t} q ${.55*t} ${.75*-t} ${.1*t} ${.95*-t} q ${.45*-t} ${.35*t} ${.1*-t} ${.95*t} z"
      transform="rotate(${i} ${n} ${e})"
    />
  `;return r.JW`
    <g class="ucb-fan-housing">
      <circle cx=${n} cy=${e} r=${t+3} fill="#0d0e11" stroke="#3a3d46" stroke-width="1"/>
      <g
        class="ucb-fan-blades"
        fill=${i}
        opacity="0.85"
        style="transform-origin:${n}px ${e}px;transform-box:view-box;"
      >
        ${a(0)}${a(120)}${a(240)}
      </g>
      <circle cx=${n} cy=${e} r=${.28*t} fill="#22252c" stroke="#4b4f59" stroke-width="0.8"/>
    </g>
  `}function c(n,e,t,i){const a=34,o=n-17;return r.JW`
    <g class="ucb-toolhead">
      <rect x=${o} y=${e} width=${34} height=${a} rx="5" fill="#2b2e36" stroke="#4d5160" stroke-width="1"/>
      <rect x=${o+4} y=${e+4} width=${26} height=${17} rx="3" fill="#3b3f4a"/>
      <rect x=${o+8} y=${e+8} width=${18} height="3" rx="1.5" fill="#5c6170"/>
      <circle cx=${n} cy=${e+a-8} r="2.2" fill=${t} class="ucb-led"/>
      <path
        d="M ${n-6} ${e+a} L ${n+6} ${e+a} L ${n+2.5} ${e+a+9} L ${n-2.5} ${e+a+9} Z"
        fill="#d0d3da" stroke="#9a9ea8" stroke-width="0.6"
        class="ucb-nozzle ${i?"hot":""}"
        filter=${i?"url(#ucb-glow)":r.s6}
      />
      ${i?r.JW`<circle cx=${n} cy=${e+a+10} r="4" fill="#ff9a3c" opacity="0.55" filter="url(#ucb-soft)"/>`:r.s6}
    </g>
  `}function l(n,e,t,i){if(null==t||t<=0)return r.JW``;const a=Math.max(3,Math.min(100,t)/100*46);return r.JW`
    <g class="ucb-object">
      <rect x=${n-20} y=${e-a} width=${40} height=${a} rx="2.5" fill=${i} opacity="0.9"/>
      <rect x=${n-20} y=${e-a} width=${40} height="2" fill="#ffffff" opacity="0.35"/>
      <rect x=${n-20} y=${e-a} width="3" height=${a} fill="#000" opacity="0.18"/>
    </g>
  `}function p(n,e,t,i,a){return r.JW`
    <g class="ucb-bed">
      <rect x=${n} y=${e} width=${t} height="6" rx="1.5" fill="#1d1f25" stroke="#3a3d46" stroke-width="0.8"/>
      <rect x=${n+2} y=${e-3} width=${t-4} height="4" rx="1" fill="#33363f"/>
      <rect x=${n-4} y=${e+6} width=${t+8} height="7" rx="2" fill="url(#ucb-metal)"/>
      ${a?r.JW`
            <rect x=${n+6} y=${e+6} width=${t-12} height="10" rx="3" fill="#cfe6ff" opacity="0.18" filter="url(#ucb-soft)"/>
            <rect x=${n+10} y=${e+8} width=${t-20} height="3" rx="1.5" fill="#eef7ff" opacity="1" filter="url(#ucb-glow)"/>
          `:r.s6}
      <rect x=${n+10} y=${e-3.5} width=${t-20} height="1" fill=${i} opacity="0.25"/>
    </g>
  `}function d(n,e,t,i){return r.JW`
    <g class="ucb-screen">
      <rect x=${n} y=${e} width=${t} height=${i} rx="4" fill="#0b0c10" stroke="#34373f" stroke-width="1"/>
      <rect x=${n+2} y=${e+2} width=${t-4} height=${i-4} rx="3" fill="#16181e"/>
      <circle cx=${n+.62*t} cy=${e+i/2} r=${.3*i} fill="none" stroke="#3f434d" stroke-width="1.2"/>
      <circle cx=${n+.62*t} cy=${e+i/2} r=${.11*i} fill="#3f434d"/>
      <rect x=${n+6} y=${e+7} width="12" height="2.4" rx="1.2" fill="#3f434d"/>
      <rect x=${n+6} y=${e+13} width="8" height="2.4" rx="1.2" fill="#3f434d"/>
      <rect x=${n+6} y=${e+19} width="10" height="2.4" rx="1.2" fill="#3f434d"/>
    </g>
  `}function u(n,e,t,i){const a=[];for(let o=0;o<=t;o+=4)a.push(r.JW`<line x1=${n+o} y1=${e} x2=${n+o} y2=${e+i} stroke="#22252c" stroke-width="1.4"/>`);return r.JW`<g class="ucb-grille">${a}</g>`}function h(n,e,t,a,o={}){var s;const c=o.entityId?n=>(0,i.Mx)(n,o.entityId):void 0;return r.qy`
    <div
      class="uc-bambu-hotspot ${o.glow?"glow":""} ${c?"is-clickable":""}"
      style="left:${100*t}%;top:${100*a}%;--hotspot-accent:${o.accent||"var(--primary-color)"};--i:${null!==(s=o.index)&&void 0!==s?s:0}"
      role=${c?"button":r.s6}
      tabindex=${c?"0":r.s6}
      @click=${c}
    >
      <span class="hs-value">${e}</span>
      <span class="hs-label">${n}</span>
    </div>
  `}function f(n,e={}){const t=n.modelFamily||"enclosed_corexy",f=function(n){return a[n||"generic"]||a.generic}(t),b=f.anchors,g=e.accent||"var(--primary-color, #03a9f4)",m=(0,i.Ro)(n.nozzleTemp,n.nozzleTarget),x=(0,i.Ro)(n.bedTemp,n.bedTarget),y=e.animation||"full",$="printing"===n.status||"preparing"===n.status,v=n.fans.filter(n=>null!=n.percent),w=v.length?Math.max(0,...v.map(n=>n.percent||0)):$?60:0,k=w>0;return r.qy`
    <div
      class="uc-bambu-stage anim-${y} ${k?"fan-on":""} ${$?"printing":""} ${e.compact?"compact":""} ${n.status}"
      style="aspect-ratio:${f.w}/${f.h};${k?`--fan-duration:${Math.max(.35,2.4-w/50)}s;`:""}"
    >
      ${function(n,e={}){const t=e.accent||"var(--primary-color, #03a9f4)";if(e.customImage)return r.qy`<img class="uc-bambu-photo" src=${e.customImage} alt="" loading="lazy" />`;const i={accent:t,model:e.model,progress:e.progress,printing:!0===e.printing,lightOn:e.lightOn,heating:!0===e.heating,fanOn:!0===e.fanOn},a=n||"enclosed_corexy";return"bedslinger"===a?function(n){return r.JW`
    <svg class="uc-bambu-svg" viewBox="0 0 ${240} ${260}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      ${o()}
      <ellipse cx=${120} cy="252" rx="104" ry="5" fill="#000" opacity="0.3" filter="url(#ucb-soft)"/>

      <!-- base -->
      <rect x="28" y="196" width="184" height="46" rx="8" fill="url(#ucb-light-body)" stroke="#b8bcc4" stroke-width="1"/>
      <rect x="32" y="200" width="176" height="3" rx="1.5" fill="#fff" opacity="0.8"/>
      <rect x="28" y="236" width="184" height="6" rx="3" fill="#9a9ea8"/>
      <!-- front screen (bottom-left) -->
      ${d(38,208,44,22)}
      <text x="158" y="224" text-anchor="end" fill="#6f737c" font-size="12" font-weight="700" font-family="Inter, system-ui, sans-serif" letter-spacing="1.2">${n.model||""}</text>

      <!-- Z pillars -->
      <rect x="54" y="30" width="16" height="170" rx="4" fill="url(#ucb-light-body)" stroke="#b8bcc4" stroke-width="1"/>
      <rect x="170" y="30" width="16" height="170" rx="4" fill="url(#ucb-light-body)" stroke="#b8bcc4" stroke-width="1"/>
      <rect x="57" y="34" width="2" height="162" rx="1" fill="#fff" opacity="0.7"/>
      <rect x="173" y="34" width="2" height="162" rx="1" fill="#fff" opacity="0.7"/>

      <!-- top crossbar -->
      <rect x="50" y="28" width="140" height="14" rx="5" fill="url(#ucb-light-body)" stroke="#b8bcc4" stroke-width="1"/>

      <!-- X rail -->
      <rect x="62" y="74" width="116" height="8" rx="2" fill="url(#ucb-metal)"/>
      <rect x="62" y="75" width="116" height="1.5" fill="#8a8e98" opacity="0.6"/>

      ${c(120,62,n.accent,!!n.heating)}

      <!-- part fan on toolhead side -->
      ${s(190,86,8,n.accent)}

      <!-- bed -->
      ${l(120,184,n.printing?n.progress:null,n.accent)}
      ${p(52,184,136,n.accent,!1)}
      <rect x="66" y="197" width="108" height="3" rx="1.5" fill="#15171c"/>

    </svg>
  `}(i):"h2"===a?function(n){const e=188,t=172,i=198;return r.JW`
    <svg class="uc-bambu-svg" viewBox="0 0 ${240} ${300}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      ${o()}
      <ellipse cx=${120} cy="293" rx="104" ry="5" fill="#000" opacity="0.35" filter="url(#ucb-soft)"/>

      <!-- side pillars -->
      <rect x="6" y="16" width="22" height="272" rx="9" fill="url(#ucb-pillar)"/>
      <rect x="212" y="16" width="22" height="272" rx="9" fill="url(#ucb-pillar)"/>
      <rect x="9" y="20" width="3" height="262" rx="1.5" fill="#fff" opacity="0.45"/>
      <rect x="215" y="20" width="3" height="262" rx="1.5" fill="#fff" opacity="0.45"/>

      <!-- body -->
      <rect x=${26} y="8" width=${e} height="286" rx="7" fill="url(#ucb-body)" stroke="#33363e" stroke-width="1"/>
      <rect x="106" y="2" width="28" height="9" rx="2.5" fill="#0b0c0f"/>

      <!-- top control band -->
      <rect x=${26} y="8" width=${e} height="64" rx="7" fill="url(#ucb-band)"/>
      <rect x=${26} y="66" width=${e} height="6" fill="#0b0c0f"/>
      <line x1=${26} y1="72" x2=${214} y2="72" stroke="#3a3d46" stroke-width="0.8"/>
      ${d(40,20,62,40)}
      <text x="160" y="45" text-anchor="end" fill="#a6a9b1" font-size="13" font-weight="700" font-family="Inter, system-ui, sans-serif" letter-spacing="1.2">${n.model||""}</text>

      <!-- interior -->
      <rect x=${34} y=${78} width=${t} height=${i} rx="3" fill="url(#ucb-interior)"/>
      ${n.lightOn?r.JW`<rect x=${34} y=${78} width=${t} height=${i} fill="url(#ucb-chamber-glow)"/>`:r.s6}
      <rect x=${42} y=${82} width=${156} height="3" rx="1.5" fill="#fff" opacity=${n.lightOn?"0.7":"0.1"} filter=${n.lightOn?"url(#ucb-glow)":r.s6}/>

      <!-- gantry -->
      <rect x=${42} y="98" width=${156} height="7" rx="2" fill="url(#ucb-metal)"/>
      <rect x=${42} y="99" width=${156} height="1.5" fill="#8a8e98" opacity="0.6"/>
      <rect x=${40} y=${88} width="6" height="70" rx="2" fill="#23262d"/>
      <rect x=${194} y=${88} width="6" height="70" rx="2" fill="#23262d"/>

      ${c(120,92,n.accent,!!n.heating)}

      <!-- chamber fan / grille -->
      ${u(178,122,22,56)}
      ${s(186,150,9,n.accent)}

      <!-- purge chute / aux -->
      <rect x=${48} y="128" width="18" height="30" rx="3" fill="#1a1c22" stroke="#2f323a" stroke-width="0.8"/>

      <!-- bed -->
      ${l(120,208,n.printing?n.progress:null,n.accent)}
      ${p(48,208,144,n.accent,!0)}
      <rect x="116" y="222" width="8" height="40" fill="#15171c"/>

      <!-- glass + frame -->
      <rect x=${34} y=${78} width=${t} height=${i} rx="3" fill="url(#ucb-glass)"/>
      <rect x=${34} y=${78} width=${t} height=${i} rx="3" fill="none" stroke="#3c3f48" stroke-width="1.2"/>
      <rect x="198" y="160" width="6" height="40" rx="3" fill="#9a9ea8"/>
      <rect x="199" y="162" width="1.5" height="36" rx="0.75" fill="#fff" opacity="0.5"/>

      <!-- base -->
      <rect x=${26} y="284" width=${e} height="10" rx="3" fill="#0b0c0f"/>
    </svg>
  `}(i):function(n){const e=212,t=180,i=168;return r.JW`
    <svg class="uc-bambu-svg" viewBox="0 0 ${240} ${260}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      ${o()}
      <ellipse cx=${120} cy="253" rx="108" ry="5" fill="#000" opacity="0.35" filter="url(#ucb-soft)"/>

      <!-- body -->
      <rect x=${14} y="10" width=${e} height="238" rx="10" fill="url(#ucb-body)" stroke="#33363e" stroke-width="1"/>
      <rect x=${17} y="13" width="3" height="232" rx="1.5" fill="#fff" opacity="0.08"/>
      <rect x=${220} y="13" width="3" height="232" rx="1.5" fill="#000" opacity="0.3"/>

      <!-- top band with screen + camera bump -->
      <rect x=${14} y="10" width=${e} height="52" rx="10" fill="url(#ucb-band)"/>
      <rect x=${14} y="54" width=${e} height="8" fill="#0b0c0f"/>
      <line x1=${14} y1="62" x2=${226} y2="62" stroke="#3a3d46" stroke-width="0.8"/>
      ${d(36,18,56,34)}
      <rect x="112" y="4" width="16" height="7" rx="2" fill="#0b0c0f"/>
      <circle cx="120" cy="7.5" r="2" fill="#2f3239"/>
      <text x="160" y="40" text-anchor="end" fill="#a6a9b1" font-size="12" font-weight="700" font-family="Inter, system-ui, sans-serif" letter-spacing="1.2">${n.model||""}</text>

      <!-- interior -->
      <rect x=${30} y=${66} width=${t} height=${i} rx="3" fill="url(#ucb-interior)"/>
      ${n.lightOn?r.JW`<rect x=${30} y=${66} width=${t} height=${i} fill="url(#ucb-chamber-glow)"/>`:r.s6}
      <rect x=${38} y=${70} width=${164} height="3" rx="1.5" fill="#fff" opacity=${n.lightOn?"0.7":"0.1"} filter=${n.lightOn?"url(#ucb-glow)":r.s6}/>

      <!-- gantry -->
      <rect x=${38} y="86" width=${164} height="7" rx="2" fill="url(#ucb-metal)"/>
      <rect x=${38} y="87" width=${164} height="1.5" fill="#8a8e98" opacity="0.6"/>
      <rect x=${36} y=${76} width="6" height="60" rx="2" fill="#23262d"/>
      <rect x=${198} y=${76} width="6" height="60" rx="2" fill="#23262d"/>

      ${c(120,80,n.accent,!!n.heating)}

      ${u(180,110,20,52)}
      ${s(187,138,8.5,n.accent)}

      <rect x=${42} y="112" width="16" height="26" rx="3" fill="#1a1c22" stroke="#2f323a" stroke-width="0.8"/>

      ${l(120,192,n.printing?n.progress:null,n.accent)}
      ${p(44,192,152,n.accent,!1)}
      <rect x="116" y="205" width="8" height="26" fill="#15171c"/>

      <rect x=${30} y=${66} width=${t} height=${i} rx="3" fill="url(#ucb-glass)"/>
      <rect x=${30} y=${66} width=${t} height=${i} rx="3" fill="none" stroke="#3c3f48" stroke-width="1.2"/>
      <rect x="200" y="136" width="5" height="34" rx="2.5" fill="#9a9ea8"/>

      <rect x=${14} y="240" width=${e} height="8" rx="3" fill="#0b0c0f"/>
    </svg>
  `}(i)}(t,{accent:g,customImage:e.customImage,model:n.model,progress:n.progress,printing:$,lightOn:n.lightOn,heating:m,fanOn:k})}
      ${!1!==e.showTemps?r.qy`
            ${h("Nozzle",null==n.nozzleTemp?"—":`${Math.round(n.nozzleTemp)}°`,b.nozzle.x,b.nozzle.y,{accent:"#ff9800",glow:m&&"off"!==y,entityId:n.refs.nozzleTemp,index:1})}
            ${h("Bed",null==n.bedTemp?"—":`${Math.round(n.bedTemp)}°`,b.bed.x,b.bed.y,{accent:"#e91e63",glow:x&&"off"!==y,entityId:n.refs.bedTemp,index:2})}
            ${b.chamber&&null!=n.chamberTemp?h("Chamber",`${Math.round(n.chamberTemp)}°`,b.chamber.x,b.chamber.y,{accent:"#2196f3",entityId:n.refs.chamberTemp,index:3}):r.s6}
          `:r.s6}
      ${e.compact?r.s6:r.qy`<div
            class="uc-bambu-screen ${n.refs.status?"is-clickable":""}"
            style="left:${100*b.screen.x}%;top:${100*b.screen.y}%;--i:0"
            @click=${n.refs.status?e=>(0,i.Mx)(e,n.refs.status):void 0}
          >
            <span class="screen-status">${n.statusRaw||n.status}</span>
            ${null!=n.progress?r.qy`<span class="screen-pct">${Math.round(n.progress)}%</span>`:r.s6}
          </div>`}
      ${!e.compact&&!1!==e.showProgress&&null!=n.progress&&b.progress?r.qy`<div
            class="uc-bambu-progress-badge ${n.refs.progress?"is-clickable":""}"
            style="left:${100*b.progress.x}%;top:${100*b.progress.y}%;--i:4"
            @click=${n.refs.progress?e=>(0,i.Mx)(e,n.refs.progress):void 0}
          >
            ${Math.round(n.progress)}%
          </div>`:r.s6}
    </div>
  `}function b(n,e={}){var t;const a=e.model||"",o=/\bHT\b/i.test(a)||/external/i.test(a),s=null!==(t=e.slotCount)&&void 0!==t?t:o?Math.max(1,n.length):4,c=Array.from({length:s},(e,t)=>n[t]||null),l=/lite/i.test(a);return r.qy`
    <div
      class="uc-bambu-ams ${l?"lite":""} ${e.compact?"compact":""} ${1===s?"single":""}"
      style="--ams-slots:${s}"
    >
      <div class="ams-lid"></div>
      ${e.name?r.qy`<div class="ams-name" title=${e.name}>${e.name}</div>`:r.s6}
      <div class="ams-body">
        ${c.map((n,e)=>{if(!n)return r.qy`<div class="ams-slot empty"><span class="slot-num">${e+1}</span></div>`;const t=n.empty?"rgba(127,127,127,0.22)":n.color||"#888",a=n.entityId?e=>(0,i.Mx)(e,n.entityId):void 0;return r.qy`
            <div
              class="ams-slot ${n.active?"active":""} ${n.empty?"empty":""} ${a?"is-clickable":""}"
              role=${a?"button":r.s6}
              tabindex=${a?"0":r.s6}
              title=${n.name||n.type||`Slot ${e+1}`}
              @click=${a}
            >
              <div class="spool" style="--c:${t}">
                <div class="spool-ring"></div>
                <div class="spool-inner"></div>
              </div>
              <span class="mat">${n.empty?"Empty":n.type||"—"}</span>
              ${null!=n.remain&&n.remain>=0?r.qy`<span class="remain">${Math.round(n.remain)}%</span>`:r.s6}
            </div>
          `})}
      </div>
      ${null!=e.humidityIndex?r.qy`<div
            class="ams-hum ${e.humidityEntityId?"is-clickable":""}"
            title="Humidity index"
            @click=${e.humidityEntityId?n=>(0,i.Mx)(n,e.humidityEntityId):void 0}
          >
            <ha-icon icon="mdi:water-percent"></ha-icon>${e.humidityIndex}
          </div>`:r.s6}
    </div>
  `}a.h2.anchors,a.enclosed_corexy.anchors,a.bedslinger.anchors,a.generic.anchors},6658(n,e,t){function r(n,e){if(!e)return;n.stopPropagation();const t=n.currentTarget||n.target,r=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}});(t||document.body).dispatchEvent(r)}t.d(e,{$J:()=>m,Ey:()=>g,Mx:()=>r,Rh:()=>h,Ro:()=>$,SP:()=>d,ST:()=>u,WX:()=>y,gc:()=>b,nD:()=>x,zG:()=>f});const i=new Set(["printing","running","print","busy","operational_printing"]),a=new Set(["paused","pause","pausing"]),o=new Set(["idle","operational","standby","ready","off","none","unknown","init"]),s=new Set(["finished","finish","complete","completed","done","success"]),c=new Set(["error","failed","failure","fault","cancelled","canceled"]),l=new Set(["offline","unavailable","unknown","disconnected"]),p=new Set(["preparing","prepare","slicing","heating","calibrating","homing","loading"]);function d(n,e=!0){if(!e)return"offline";if(null==n||""===n)return"unknown";const t=String(n).trim().toLowerCase().replace(/[\s-]+/g,"_");return!l.has(t)||"offline"!==t&&"unavailable"!==t&&"disconnected"!==t?i.has(t)?"printing":a.has(t)?"paused":s.has(t)?"finished":c.has(t)?"error":p.has(t)?"preparing":o.has(t)?"idle":t.includes("pause")?"paused":t.includes("print")||"auto_bed_leveling"===t||t.includes("heat")?"preparing":"idle"===t?"idle":"unknown":"offline"}function u(n){switch(n){case"printing":return"var(--success-color, #4caf50)";case"paused":return"var(--warning-color, #ff9800)";case"error":return"var(--error-color, #f44336)";case"finished":return"var(--primary-color, #03a9f4)";case"preparing":return"var(--info-color, #2196f3)";case"offline":return"var(--disabled-text-color, #9e9e9e)";default:return"var(--secondary-text-color, #9e9e9e)"}}function h(n){switch(n){case"printing":return"Printing";case"paused":return"Paused";case"idle":return"Idle";case"finished":return"Finished";case"error":return"Error";case"offline":return"Offline";case"preparing":return"Preparing";default:return"Unknown"}}function f(n){if(!n)return null;const e=n.trim().replace(/^#/,"");if(!/^[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/.test(e))return null;const t=e.slice(0,6);return 8===e.length&&0===parseInt(e.slice(6,8),16)||"000000"===t&&8===e.length&&"00"===e.slice(6,8)?null:`#${t.toUpperCase()}`}function b(n){if(null==n||!Number.isFinite(n)||n<0)return"—";const e=Math.round(n);if(e<60)return`${e}m`;const t=Math.floor(e/60),r=e%60;return 0===r?`${t}h`:`${t}h ${r}m`}function g(n){if(!n)return"—";const e=new Date(n);return Number.isNaN(e.getTime())?String(n):e.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}function m(n){if(null==n||""===n||"unavailable"===n||"unknown"===n)return null;const e="number"==typeof n?n:parseFloat(String(n));return Number.isFinite(e)?e:null}function x(n,e){if(null==n||""===n||"unavailable"===n||"unknown"===n)return null;if("string"==typeof n&&n.includes(":")){const e=n.split(":").map(n=>parseInt(n,10));if(e.some(n=>!Number.isFinite(n)))return null;if(3===e.length)return 60*e[0]+e[1]+e[2]/60;if(2===e.length)return 60*e[0]+e[1]}const t=m(n);if(null==t)return null;const r=(e||"").toLowerCase();return r.includes("hour")||"h"===r?60*t:r.includes("sec")?t/60:t}function y(n="printer",e="3D Printer"){return{id:n,name:e,online:!1,status:"offline",progress:null,currentLayer:null,totalLayers:null,remainingMinutes:null,nozzleTemp:null,nozzleTarget:null,bedTemp:null,bedTarget:null,chamberTemp:null,chamberTarget:null,fans:[],trays:[],externalSpools:[],hms:[],controls:{},refs:{},entityIds:[]}}function $(n,e){return null!=n&&null!=e&&e>30&&n<e-2}},4726(n,e,t){t.d(e,["Y",0,"\n  .uc-printer-root {\n    color: var(--primary-text-color);\n    font-family: var(--ha-font-family-body, inherit);\n    --uc-printer-radius: 12px;\n    --uc-printer-gap: 10px;\n    box-sizing: border-box;\n  }\n\n  /* ---------------------------------------------------------------------- */\n  /* Style presets. Every preset except \"theme\" paints its own surface so    */\n  /* the choice is visible regardless of the surrounding card theme.         */\n  /* ---------------------------------------------------------------------- */\n  .uc-printer-root.style-dark,\n  .uc-printer-root.style-light,\n  .uc-printer-root.style-glass,\n  .uc-printer-root.style-carbon {\n    padding: 14px;\n    border-radius: 16px;\n    background: var(--uc-printer-surface);\n    border: 1px solid var(--uc-printer-border);\n    color: var(--uc-printer-text);\n    --primary-text-color: var(--uc-printer-text);\n    --secondary-text-color: var(--uc-printer-text-2);\n  }\n  .uc-printer-root.style-dark {\n    --uc-printer-surface: #1a1c23;\n    --uc-printer-surface-2: #242730;\n    --uc-printer-border: rgba(255,255,255,0.08);\n    --uc-printer-text: #f2f3f7;\n    --uc-printer-text-2: rgba(242,243,247,0.7);\n    --card-background-color: #1a1c23;\n  }\n  .uc-printer-root.style-light {\n    --uc-printer-surface: #f4f5f8;\n    --uc-printer-surface-2: #ffffff;\n    --uc-printer-border: rgba(0,0,0,0.08);\n    --uc-printer-text: #1b1d23;\n    --uc-printer-text-2: rgba(27,29,35,0.65);\n    --card-background-color: #f4f5f8;\n    box-shadow: 0 1px 2px rgba(0,0,0,0.06);\n  }\n  .uc-printer-root.style-glass {\n    --uc-printer-surface: linear-gradient(160deg, rgba(60,66,84,0.55), rgba(24,26,34,0.55));\n    --uc-printer-surface-2: rgba(255,255,255,0.07);\n    --uc-printer-border: rgba(255,255,255,0.16);\n    --uc-printer-text: #f6f7fb;\n    --uc-printer-text-2: rgba(246,247,251,0.7);\n    --uc-printer-hole: rgba(22,24,32,0.92);\n    --card-background-color: rgba(30,32,40,0.6);\n    backdrop-filter: blur(14px) saturate(140%);\n    -webkit-backdrop-filter: blur(14px) saturate(140%);\n    box-shadow: inset 0 1px 0 rgba(255,255,255,0.12);\n  }\n  .uc-printer-root.style-carbon {\n    --uc-printer-surface:\n      repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 6px),\n      repeating-linear-gradient(-45deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 6px),\n      #101216;\n    --uc-printer-surface-2: #1a1d24;\n    --uc-printer-border: rgba(255,255,255,0.07);\n    --uc-printer-text: #e9ebf0;\n    --uc-printer-text-2: rgba(233,235,240,0.65);\n    --card-background-color: #101216;\n  }\n  .uc-printer-root.style-theme {\n    --uc-printer-surface: var(--ha-card-background, var(--card-background-color));\n    --uc-printer-surface-2: var(--secondary-background-color);\n    --uc-printer-border: var(--divider-color);\n    --uc-printer-text: var(--primary-text-color);\n    --uc-printer-text-2: var(--secondary-text-color);\n  }\n\n  /* Anything backed by an entity opens more-info. Feedback is a hover lift,\n     not a press-shrink. */\n  .uc-printer-root .is-clickable {\n    cursor: pointer;\n    transition:\n      transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1),\n      box-shadow 0.18s ease,\n      filter 0.18s ease,\n      background 0.18s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n  @media (hover: hover) {\n    .uc-printer-root .is-clickable:hover {\n      transform: translateY(-1px);\n      filter: brightness(1.08);\n      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);\n    }\n  }\n  .uc-printer-root .is-clickable:focus-visible {\n    outline: 2px solid var(--primary-color);\n    outline-offset: 2px;\n  }\n  /* Inline text spans shouldn't cast shadows */\n  .uc-printer-root span.is-clickable:hover,\n  .uc-printer-root .job-name.is-clickable:hover { box-shadow: none; transform: none; }\n\n  .uc-printer-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    margin-bottom: 10px;\n  }\n  .uc-printer-header .title {\n    font-weight: 700;\n    font-size: 1.05rem;\n    letter-spacing: 0.02em;\n  }\n\n  .uc-printer-status-pill {\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    padding: 3px 10px;\n    border-radius: 999px;\n    font-size: 0.75rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    background: color-mix(in srgb, var(--uc-status-color) 18%, transparent);\n    color: var(--uc-status-color);\n  }\n  .uc-printer-status-pill .dot {\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: var(--uc-status-color);\n    box-shadow: 0 0 6px var(--uc-status-color);\n  }\n\n  .uc-printer-progress-bar {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n  }\n  .uc-printer-progress-bar .track {\n    flex: 1;\n    height: 8px;\n    border-radius: 999px;\n    background: rgba(127,127,127,0.2);\n    overflow: hidden;\n  }\n  .uc-printer-progress-bar .fill {\n    height: 100%;\n    border-radius: inherit;\n    background: linear-gradient(90deg, var(--primary-color), var(--success-color, #4caf50));\n    transition: width 0.4s ease;\n  }\n  .uc-printer-progress-bar .pct {\n    font-size: 0.8rem;\n    font-weight: 600;\n    min-width: 2.5em;\n    text-align: right;\n  }\n  .uc-printer-progress-bar.compact .track { height: 5px; }\n\n  .uc-printer-progress-ring {\n    position: relative;\n    display: inline-grid;\n    place-items: center;\n    border-radius: 50%;\n  }\n  .uc-printer-progress-ring .ring-label {\n    position: absolute;\n    font-size: 0.75rem;\n    font-weight: 700;\n  }\n  .uc-printer-progress-ring .ring-fill {\n    transition: stroke-dashoffset 0.5s ease;\n  }\n\n  /* Temps: chips share the row equally so 2 or 3 chips always fill it */\n  .uc-printer-temps {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--uc-printer-gap);\n  }\n  .uc-printer-temp-chip {\n    flex: 1 1 0;\n    min-width: 72px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2px;\n    padding: 8px 10px;\n    border-radius: var(--uc-printer-radius);\n    background: var(--uc-printer-surface-2, var(--secondary-background-color));\n    border: 1px solid var(--uc-printer-border, var(--divider-color));\n  }\n  .uc-printer-temp-chip.heating {\n    box-shadow: 0 0 12px color-mix(in srgb, var(--uc-temp-accent, #ff9800) 45%, transparent);\n  }\n  .uc-printer-temp-chip ha-icon {\n    --mdc-icon-size: 18px;\n    color: var(--uc-temp-accent, var(--primary-color));\n  }\n  .uc-printer-temp-chip .temp-value {\n    font-weight: 700;\n    font-size: 0.95rem;\n  }\n  .uc-printer-temp-chip .temp-target {\n    font-weight: 400;\n    opacity: 0.65;\n    font-size: 0.8em;\n  }\n  .uc-printer-temp-chip .temp-label,\n  .uc-printer-temp-chip .temp-sub {\n    font-size: 0.65rem;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    opacity: 0.7;\n  }\n\n  .uc-printer-stat {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 10px;\n    border-radius: var(--uc-printer-radius);\n    background: var(--uc-printer-surface-2, var(--secondary-background-color));\n    border: 1px solid var(--uc-printer-border, var(--divider-color));\n  }\n  .uc-printer-stat ha-icon {\n    --mdc-icon-size: 20px;\n    color: var(--uc-stat-accent, var(--primary-color));\n  }\n  .uc-printer-stat .stat-value { font-weight: 700; font-size: 0.95rem; }\n  .uc-printer-stat .stat-label { font-size: 0.7rem; opacity: 0.7; }\n\n  /* Stat + controls share a row; each fills its half */\n  .uc-printer-row {\n    display: flex;\n    gap: var(--uc-printer-gap);\n    align-items: stretch;\n    flex-wrap: wrap;\n  }\n  .uc-printer-row > * { flex: 1 1 160px; min-width: 0; }\n  .uc-printer-row > .uc-printer-controls {\n    justify-content: flex-end;\n    padding: 4px 8px;\n    border-radius: var(--uc-printer-radius);\n    background: var(--uc-printer-surface-2, var(--secondary-background-color));\n    border: 1px solid var(--uc-printer-border, var(--divider-color));\n  }\n  .uc-printer-row > .uc-printer-controls .ctrl {\n    background: var(--uc-printer-surface, var(--uc-pane-bg, var(--card-background-color)));\n  }\n\n  .uc-printer-spool {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 4px;\n    border-radius: 8px;\n  }\n  .uc-printer-spool.active svg {\n    filter: drop-shadow(0 0 6px var(--spool-color));\n  }\n  .uc-printer-spool .spool-label {\n    font-size: 0.65rem;\n    text-align: center;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    opacity: 0.8;\n  }\n  .uc-printer-spool .spool-active-dot {\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: var(--success-color, #4caf50);\n    box-shadow: 0 0 6px var(--success-color, #4caf50);\n  }\n\n  .uc-printer-ams-strip {\n    display: flex;\n    align-items: flex-end;\n    gap: 10px;\n    flex-wrap: wrap;\n  }\n  .uc-printer-ams-strip .ams-humidity {\n    display: inline-flex;\n    align-items: center;\n    gap: 2px;\n    font-size: 0.75rem;\n    opacity: 0.8;\n  }\n  .uc-printer-ams-strip .ams-humidity ha-icon { --mdc-icon-size: 14px; }\n\n  /* Print job: full-width panel */\n  .uc-printer-job {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 10px 12px;\n    border-radius: var(--uc-printer-radius);\n    background: var(--uc-printer-surface-2, var(--secondary-background-color));\n    border: 1px solid var(--uc-printer-border, var(--divider-color));\n  }\n  .uc-printer-job .job-thumb {\n    width: 56px;\n    height: 56px;\n    flex-shrink: 0;\n    border-radius: 10px;\n    object-fit: cover;\n    background: rgba(0,0,0,0.3);\n  }\n  .uc-printer-job .job-meta {\n    min-width: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n  }\n  .uc-printer-job .job-name {\n    font-weight: 600;\n    font-size: 0.9rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .uc-printer-job .job-row {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px 14px;\n    font-size: 0.75rem;\n    opacity: 0.75;\n  }\n  .uc-printer-job .job-row .is-clickable:hover { opacity: 1; text-decoration: underline; }\n\n  .uc-printer-controls {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: 6px;\n  }\n  .uc-printer-controls .ctrl {\n    display: inline-grid;\n    place-items: center;\n    width: 40px;\n    height: 40px;\n    border-radius: 10px;\n    border: 1px solid var(--uc-printer-border, var(--divider-color));\n    background: var(--uc-printer-surface-2, var(--secondary-background-color));\n    color: var(--primary-text-color);\n    cursor: pointer;\n    padding: 0;\n  }\n  .uc-printer-controls .ctrl:disabled {\n    opacity: 0.35;\n    cursor: not-allowed;\n  }\n  .uc-printer-controls .ctrl.danger { color: var(--error-color, #f44336); }\n  .uc-printer-controls .ctrl.on {\n    background: color-mix(in srgb, var(--warning-color, #ffc107) 25%, transparent);\n    color: var(--warning-color, #ffc107);\n  }\n  .uc-printer-controls .ctrl.active {\n    background: color-mix(in srgb, var(--primary-color) 30%, transparent);\n    border-color: var(--primary-color);\n  }\n  .uc-printer-controls .ctrl ha-icon { --mdc-icon-size: 20px; pointer-events: none; }\n  .uc-printer-controls .speed-group {\n    display: flex;\n    gap: 4px;\n    margin-left: auto;\n  }\n  .uc-printer-controls .ctrl.speed { width: 34px; height: 34px; }\n\n  /* Fans: icon spins about its own center */\n  .uc-printer-fans { display: flex; flex-direction: column; gap: 6px; }\n  .uc-printer-fans .fan-row {\n    display: grid;\n    grid-template-columns: 22px minmax(70px, 1fr) 1fr auto;\n    align-items: center;\n    gap: 8px;\n    padding: 2px 4px;\n    margin: 0 -4px;\n    border-radius: 8px;\n  }\n  .uc-printer-fans .fan-icon-wrap {\n    display: inline-grid;\n    place-items: center;\n    width: 22px;\n    height: 22px;\n    line-height: 0;\n  }\n  .uc-printer-fans .fan-icon-wrap ha-icon {\n    --mdc-icon-size: 18px;\n    display: block;\n    width: 18px;\n    height: 18px;\n    transform-origin: 50% 50%;\n    will-change: transform;\n  }\n  .uc-printer-fans .fan-icon-wrap.spinning ha-icon {\n    animation: uc-fan-spin var(--fan-duration, 1s) linear infinite;\n  }\n  .uc-printer-fans .fan-label { font-size: 0.8rem; }\n  .uc-printer-fans .fan-bar {\n    height: 6px;\n    border-radius: 999px;\n    background: rgba(127,127,127,0.2);\n    overflow: hidden;\n  }\n  .uc-printer-fans .fan-bar .fill {\n    height: 100%;\n    background: var(--success-color, #4caf50);\n  }\n  .uc-printer-fans .fan-pct {\n    font-size: 0.75rem;\n    font-weight: 600;\n    min-width: 2.5em;\n    text-align: right;\n  }\n  .uc-printer-fans input[type=\"range\"] { grid-column: 1 / -1; width: 100%; }\n\n  /* Camera: 16:9 by default; .fill stretches to the container (grid cells) */\n  .uc-printer-camera {\n    position: relative;\n    border-radius: var(--uc-printer-radius);\n    overflow: hidden;\n    background: #000;\n    aspect-ratio: 16 / 9;\n    width: 100%;\n    display: block;\n  }\n  .uc-printer-camera.fill {\n    aspect-ratio: auto;\n    height: 100%;\n    min-height: 150px;\n  }\n  .uc-printer-camera uc-printer-snapshot {\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    inset: 0;\n  }\n  .uc-printer-camera uc-printer-snapshot.is-error::after {\n    content: 'Snapshot unavailable';\n    position: absolute;\n    inset: 0;\n    display: grid;\n    place-items: center;\n    font-size: 0.8rem;\n    opacity: 0.6;\n    background: var(--uc-printer-surface-2, #222);\n  }\n  .uc-printer-camera ha-camera-stream {\n    display: block;\n    position: absolute;\n    inset: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none; /* let the wrapper own the click → more-info */\n  }\n  .uc-printer-camera .cam-live {\n    position: absolute;\n    left: 8px;\n    top: 8px;\n    display: inline-flex;\n    align-items: center;\n    gap: 5px;\n    padding: 2px 7px;\n    border-radius: 999px;\n    background: rgba(0,0,0,0.55);\n    color: #fff;\n    font-size: 0.62rem;\n    font-weight: 700;\n    letter-spacing: 0.06em;\n  }\n  .uc-printer-camera .cam-live .dot {\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    background: #ff3b30;\n    box-shadow: 0 0 6px #ff3b30;\n    animation: uc-led-pulse 1.6s ease-in-out infinite;\n  }\n  .uc-printer-camera .cam-expand {\n    position: absolute;\n    right: 8px;\n    bottom: 8px;\n    width: 28px;\n    height: 28px;\n    border-radius: 8px;\n    display: grid;\n    place-items: center;\n    background: rgba(0,0,0,0.55);\n    color: #fff;\n    opacity: 0;\n    transition: opacity 0.15s ease;\n    pointer-events: none;\n  }\n  .uc-printer-camera .cam-expand ha-icon { --mdc-icon-size: 16px; }\n  .uc-printer-camera:hover .cam-expand { opacity: 1; }\n  .uc-printer-camera.empty {\n    display: grid;\n    place-items: center;\n    align-content: center;\n    gap: 4px;\n    opacity: 0.6;\n    font-size: 0.85rem;\n    background: var(--uc-printer-surface-2, #222);\n  }\n  .uc-printer-camera.empty.fill { aspect-ratio: auto; }\n\n  .uc-printer-details { display: flex; flex-direction: column; gap: 4px; }\n  .uc-printer-details .detail-row {\n    display: flex;\n    justify-content: space-between;\n    gap: 12px;\n    font-size: 0.8rem;\n    padding: 4px 2px;\n    border-bottom: 1px solid var(--uc-printer-border, rgba(127,127,127,0.15));\n    border-radius: 4px;\n  }\n  .uc-printer-details .detail-row:last-child { border-bottom: none; }\n  .uc-printer-details .detail-label { opacity: 0.7; }\n  .uc-printer-details .detail-value { font-weight: 600; text-align: right; }\n  .uc-printer-details .detail-row.accent .detail-value {\n    color: var(--warning-color, #ffc107);\n  }\n\n  /* ---------------------------------------------------------------------- */\n  /* Illustration stage + overlays (shared by Bambu and generic modules)     */\n  /* ---------------------------------------------------------------------- */\n  .uc-bambu-stage {\n    position: relative;\n    width: 100%;\n    max-width: 320px;\n    margin: 0 auto;\n    container-type: inline-size;\n    /* aspect-ratio is set inline to match the SVG viewBox */\n  }\n\n  /* Overlays shrink with the stage so small tiles stay legible */\n  @container (max-width: 240px) {\n    .uc-bambu-hotspot { padding: 3px 7px; min-width: 44px; }\n    .uc-bambu-hotspot .hs-value { font-size: 0.68rem; }\n    .uc-bambu-hotspot .hs-label { font-size: 0.5rem; }\n    .uc-bambu-screen { padding: 2px 6px; min-width: 48px; }\n    .uc-bambu-screen .screen-pct { font-size: 0.75rem; }\n    .uc-bambu-progress-badge { width: 34px; height: 34px; font-size: 0.62rem; }\n  }\n  @container (max-width: 180px) {\n    .uc-bambu-hotspot { padding: 2px 6px; min-width: 0; }\n    .uc-bambu-hotspot .hs-label { display: none; }\n    .uc-bambu-screen,\n    .uc-bambu-progress-badge { display: none; }\n  }\n\n  /* Explicit compact mode (farm tiles) */\n  .uc-bambu-stage.compact .uc-bambu-hotspot {\n    padding: 2px 6px;\n    min-width: 0;\n    background: rgba(10, 12, 18, 0.9);\n  }\n  .uc-bambu-stage.compact .uc-bambu-hotspot .hs-value { font-size: 0.66rem; }\n  .uc-bambu-stage.compact .uc-bambu-hotspot .hs-label { display: none; }\n  .uc-bambu-stage .uc-bambu-svg,\n  .uc-bambu-stage .uc-bambu-photo {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n    display: block;\n  }\n  /* Overlays pop in (staggered via --i) and lift on hover; the centering\n     translate is part of every transform so they never jump. */\n  .uc-bambu-hotspot,\n  .uc-bambu-screen,\n  .uc-bambu-progress-badge {\n    /* 'backwards' holds the hidden start during the stagger delay, then hands\n       control back to normal styles so :hover transforms still apply. */\n    animation: uc-overlay-in 0.42s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;\n    animation-delay: calc(var(--i, 0) * 70ms);\n    transition: transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.18s ease;\n  }\n  @media (hover: hover) {\n    .uc-printer-root .uc-bambu-hotspot.is-clickable:hover,\n    .uc-printer-root .uc-bambu-screen.is-clickable:hover,\n    .uc-printer-root .uc-bambu-progress-badge.is-clickable:hover {\n      transform: translate(-50%, -50%) scale(1.07);\n      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);\n      filter: none;\n    }\n  }\n  .uc-bambu-stage.anim-off .uc-bambu-hotspot,\n  .uc-bambu-stage.anim-off .uc-bambu-screen,\n  .uc-bambu-stage.anim-off .uc-bambu-progress-badge { animation: none; }\n\n  .uc-bambu-hotspot {\n    position: absolute;\n    transform: translate(-50%, -50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 4px 9px;\n    border-radius: 999px;\n    background: rgba(10, 12, 18, 0.86);\n    border: 1px solid color-mix(in srgb, var(--hotspot-accent) 55%, transparent);\n    backdrop-filter: blur(6px);\n    min-width: 52px;\n    color: #fff;\n    z-index: 2;\n  }\n  .uc-bambu-hotspot.glow {\n    box-shadow: 0 0 14px color-mix(in srgb, var(--hotspot-accent) 55%, transparent);\n  }\n  .uc-bambu-hotspot .hs-value {\n    font-weight: 700;\n    font-size: 0.75rem;\n    color: var(--hotspot-accent);\n    line-height: 1.1;\n  }\n  .uc-bambu-hotspot .hs-label {\n    font-size: 0.55rem;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    opacity: 0.75;\n  }\n  .uc-bambu-screen {\n    position: absolute;\n    transform: translate(-50%, -50%);\n    background: rgba(6, 8, 12, 0.92);\n    border: 1px solid rgba(255,255,255,0.08);\n    border-radius: 5px;\n    padding: 3px 8px;\n    text-align: center;\n    min-width: 56px;\n    max-width: 30%;\n    color: #e8eaf0;\n    line-height: 1.15;\n    z-index: 2;\n  }\n  .uc-bambu-screen .screen-status {\n    display: block;\n    font-size: 0.55rem;\n    text-transform: capitalize;\n    opacity: 0.8;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .uc-bambu-screen .screen-pct {\n    font-weight: 700;\n    font-size: 0.85rem;\n    color: var(--primary-color);\n  }\n  .uc-bambu-progress-badge {\n    position: absolute;\n    transform: translate(-50%, -50%);\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    display: grid;\n    place-items: center;\n    font-weight: 700;\n    font-size: 0.72rem;\n    color: #fff;\n    background: rgba(10,12,18,0.9);\n    border: 2px solid var(--primary-color);\n    z-index: 2;\n  }\n\n  /* Fan blades spin about the hub (origin is set inline per fan in SVG units) */\n  .uc-bambu-stage.anim-full.fan-on .ucb-fan-blades,\n  .uc-bambu-stage.anim-subtle.fan-on .ucb-fan-blades {\n    animation: uc-fan-spin var(--fan-duration, 1s) linear infinite;\n  }\n  .uc-bambu-stage.anim-subtle.fan-on .ucb-fan-blades {\n    animation-duration: calc(var(--fan-duration, 1s) * 2);\n  }\n  .uc-bambu-stage.anim-off .ucb-fan-blades { animation: none; }\n\n  /* Toolhead sweeps while printing */\n  .uc-bambu-stage .ucb-toolhead {\n    transform-box: fill-box;\n    transform-origin: center;\n  }\n  .uc-bambu-stage.anim-full.printing .ucb-toolhead {\n    animation: uc-toolhead-sweep 3.2s ease-in-out infinite alternate;\n  }\n  .uc-bambu-stage.anim-full .ucb-led {\n    animation: uc-led-pulse 2.4s ease-in-out infinite;\n  }\n  .uc-bambu-stage .ucb-nozzle.hot { fill: #ffb266; }\n\n  @keyframes uc-fan-spin {\n    to { transform: rotate(360deg); }\n  }\n  @keyframes uc-toolhead-sweep {\n    from { transform: translateX(-26px); }\n    to { transform: translateX(26px); }\n  }\n  @keyframes uc-led-pulse {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0.35; }\n  }\n  @keyframes uc-overlay-in {\n    from { opacity: 0; transform: translate(-50%, -50%) scale(0.72); }\n    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    .uc-printer-fans .fan-icon-wrap.spinning ha-icon,\n    .uc-bambu-stage .ucb-fan-blades,\n    .uc-bambu-stage .ucb-toolhead,\n    .uc-bambu-stage .ucb-led,\n    .uc-bambu-hotspot,\n    .uc-bambu-screen,\n    .uc-bambu-progress-badge { animation: none !important; }\n    .uc-printer-root .is-clickable { transition: none; }\n    .uc-printer-progress-bar .fill,\n    .uc-printer-progress-ring .ring-fill { transition: none; }\n  }\n\n  .uc-printer-root.anim-off .fan-icon-wrap.spinning ha-icon { animation: none; }\n"])},6603(n,e,t){t.d(e,{B5:()=>u,F3:()=>f,FC:()=>b,IW:()=>g,RG:()=>y,Sq:()=>p,fN:()=>d,hv:()=>l,k:()=>x,k3:()=>c,wy:()=>h});var r=t(2618),i=t(6658);function a(n){return null!=n&&Number.isFinite(n)?Math.max(0,Math.min(100,n)):0}function o(n){return n?{cls:"is-clickable",handler:e=>(0,i.Mx)(e,n),role:"button",tabindex:"0"}:{cls:"",handler:void 0,role:r.s6,tabindex:r.s6}}function s(n){if(n)return e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n(e))}}function c(n,e,t){const a=(0,i.ST)(n),c=e&&"unknown"===n?e:(0,i.Rh)(n),l=o(t);return r.qy`
    <span
      class="uc-printer-status-pill ${l.cls}"
      style="--uc-status-color: ${a}"
      role=${l.role}
      tabindex=${l.tabindex}
      @click=${l.handler}
      @keydown=${s(l.handler)}
    >
      <span class="dot"></span>${c}
    </span>
  `}function l(n,e={}){const t=a(n),i=o(e.entityId);return r.qy`
    <div
      class="uc-printer-progress-bar ${e.compact?"compact":""} ${i.cls}"
      role=${i.role}
      tabindex=${i.tabindex}
      @click=${i.handler}
      @keydown=${s(i.handler)}
    >
      <div class="track">
        <div class="fill" style="width: ${t}%"></div>
      </div>
      ${!1!==e.showLabel?r.qy`<span class="pct">${null==n?"—":`${Math.round(t)}%`}</span>`:r.s6}
    </div>
  `}function p(n,e=56,t=5,i){const c=a(n),l=(e-t)/2,p=2*Math.PI*l,d=p-c/100*p,u=o(i);return r.qy`
    <div
      class="uc-printer-progress-ring ${u.cls}"
      style="width:${e}px;height:${e}px;"
      role=${u.role}
      tabindex=${u.tabindex}
      @click=${u.handler}
      @keydown=${s(u.handler)}
    >
      ${r.JW`
        <svg viewBox="0 0 ${e} ${e}" width=${e} height=${e}>
          <circle
            cx=${e/2}
            cy=${e/2}
            r=${l}
            fill="none"
            stroke="rgba(127,127,127,0.22)"
            stroke-width=${t}
          />
          <circle
            class="ring-fill"
            cx=${e/2}
            cy=${e/2}
            r=${l}
            fill="none"
            stroke="var(--primary-color, #03a9f4)"
            stroke-width=${t}
            stroke-linecap="round"
            stroke-dasharray=${p}
            stroke-dashoffset=${d}
            transform="rotate(-90 ${e/2} ${e/2})"
          />
        </svg>
      `}
      <span class="ring-label">${null==n?"—":`${Math.round(c)}%`}</span>
    </div>
  `}function d(n,e,t,a={}){const c=(0,i.Ro)(e,t),l=null==e?"—":`${Math.round(e)}°`,p=null!=t&&t>0?` / ${Math.round(t)}°`:"",d=o(a.entityId);return r.qy`
    <div
      class="uc-printer-temp-chip ${c?"heating":""} ${d.cls}"
      style=${a.accent?`--uc-temp-accent: ${a.accent}`:r.s6}
      role=${d.role}
      tabindex=${d.tabindex}
      @click=${d.handler}
      @keydown=${s(d.handler)}
    >
      ${a.icon?r.qy`<ha-icon .icon=${a.icon}></ha-icon>`:r.qy`<span class="temp-label">${n}</span>`}
      <span class="temp-value">${l}<span class="temp-target">${p}</span></span>
      ${a.icon?r.qy`<span class="temp-sub">${n}</span>`:r.s6}
    </div>
  `}function u(n,e,t={}){const i=o(t.entityId);return r.qy`
    <div
      class="uc-printer-stat ${i.cls}"
      style=${t.accent?`--uc-stat-accent: ${t.accent}`:r.s6}
      role=${i.role}
      tabindex=${i.tabindex}
      @click=${i.handler}
      @keydown=${s(i.handler)}
    >
      ${t.icon?r.qy`<ha-icon .icon=${t.icon}></ha-icon>`:r.s6}
      <div class="stat-body">
        <div class="stat-value">${e}</div>
        <div class="stat-label">${n}</div>
      </div>
    </div>
  `}function h(n,e={}){var t;const i=null!==(t=e.size)&&void 0!==t?t:44,c=null!=n.remain&&n.remain>=0?a(n.remain):null,l=n.empty?"rgba(127,127,127,0.25)":n.color||"#888888",p=.38*i,d=2*Math.PI*p,u=null==c?0:d-c/100*d,h=o(n.entityId);return r.qy`
    <div
      class="uc-printer-spool ${n.active?"active":""} ${n.empty?"empty":""} ${h.cls}"
      title=${n.name||n.type||`Slot ${n.slot}`}
      style="--spool-color: ${l}; width:${i}px;"
      role=${h.role}
      tabindex=${h.tabindex}
      @click=${h.handler}
      @keydown=${s(h.handler)}
    >
      ${r.JW`
        <svg viewBox="0 0 ${i} ${i}" width=${i} height=${i}>
          <circle cx=${i/2} cy=${i/2} r=${p} fill=${l} opacity="0.9" />
          <circle
            cx=${i/2}
            cy=${i/2}
            r=${.35*p}
            fill="var(--uc-printer-surface, var(--card-background-color, #1a1a1a))"
          />
          ${null!=c?r.JW`
                <circle
                  cx=${i/2}
                  cy=${i/2}
                  r=${p+3}
                  fill="none"
                  stroke="rgba(127,127,127,0.2)"
                  stroke-width="3"
                />
                <circle
                  cx=${i/2}
                  cy=${i/2}
                  r=${p+3}
                  fill="none"
                  stroke=${l}
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-dasharray=${d}
                  stroke-dashoffset=${u}
                  transform="rotate(-90 ${i/2} ${i/2})"
                />
              `:r.s6}
        </svg>
      `}
      ${!1!==e.showLabel?r.qy`<span class="spool-label">${n.empty?"Empty":n.type||n.name||"—"}</span>`:r.s6}
      ${n.active?r.qy`<span class="spool-active-dot"></span>`:r.s6}
    </div>
  `}function f(n,e,t={}){var a;const s=null!=n.currentLayer&&null!=n.totalLayers?`${n.currentLayer} / ${n.totalLayers}`:null!=n.currentLayer?String(n.currentLayer):"—";let c;if(!1!==t.showThumbnail&&n.coverImageEntityId&&e){const t=e.states[n.coverImageEntityId];c=null===(a=null==t?void 0:t.attributes)||void 0===a?void 0:a.entity_picture}const l=o(n.refs.taskName),p=o(n.refs.layer),d=o(n.refs.remaining),u=o(n.refs.endTime),h=o(n.coverImageEntityId);return r.qy`
    <div class="uc-printer-job">
      ${c?r.qy`<img
            class="job-thumb ${h.cls}"
            src=${c}
            alt=""
            loading="lazy"
            @click=${h.handler}
          />`:r.s6}
      <div class="job-meta">
        <div class="job-name ${l.cls}" @click=${l.handler}>
          ${n.taskName||n.fileName||"—"}
        </div>
        <div class="job-row">
          <span class=${p.cls} @click=${p.handler}>Layer ${s}</span>
          <span class=${d.cls} @click=${d.handler}>
            ${(0,i.gc)(n.remainingMinutes)} left
          </span>
          ${n.endTime?r.qy`<span class=${u.cls} @click=${u.handler}>
                ETA ${(0,i.Ey)(n.endTime)}
              </span>`:r.s6}
        </div>
      </div>
    </div>
  `}function b(n,e,t={}){const a="printing"===n.status||"preparing"===n.status,o="paused"===n.status,s=a||o;return r.qy`
    <div class="uc-printer-controls">
      ${n.controls.pauseEntityId?r.qy`<button
            class="ctrl"
            ?disabled=${!a}
            title="Pause"
            @click=${()=>{var n;return null===(n=e.onPause)||void 0===n?void 0:n.call(e)}}
          >
            <ha-icon icon="mdi:pause"></ha-icon>
          </button>`:r.s6}
      ${n.controls.resumeEntityId?r.qy`<button
            class="ctrl"
            ?disabled=${!o}
            title="Resume"
            @click=${()=>{var n;return null===(n=e.onResume)||void 0===n?void 0:n.call(e)}}
          >
            <ha-icon icon="mdi:play"></ha-icon>
          </button>`:r.s6}
      ${n.controls.stopEntityId?r.qy`<button
            class="ctrl danger"
            ?disabled=${!s}
            title="Stop"
            @click=${()=>{var n;(!1===t.confirmStop||window.confirm("Stop the current print?"))&&(null===(n=e.onStop)||void 0===n||n.call(e))}}
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </button>`:r.s6}
      ${!1!==t.showLight&&n.controls.lightEntityId?r.qy`<button
            class="ctrl ${n.lightOn?"on":""}"
            title="Chamber light"
            @click=${()=>{var n;return null===(n=e.onLight)||void 0===n?void 0:n.call(e)}}
            @contextmenu=${e=>{e.preventDefault(),(0,i.Mx)(e,n.controls.lightEntityId)}}
          >
            <ha-icon icon="mdi:lightbulb"></ha-icon>
          </button>`:r.s6}
      ${!1!==t.showSpeed&&n.controls.speedEntityId?r.qy`<div class="speed-group">
            ${["silent","standard","sport","ludicrous"].map(t=>r.qy`<button
                class="ctrl speed ${n.speedProfile===t?"active":""}"
                title=${t}
                @click=${()=>{var n;return null===(n=e.onSpeed)||void 0===n?void 0:n.call(e,t)}}
              >
                ${"silent"===t?r.qy`<ha-icon icon="mdi:turtle"></ha-icon>`:"standard"===t?r.qy`<ha-icon icon="mdi:speedometer-medium"></ha-icon>`:"sport"===t?r.qy`<ha-icon icon="mdi:speedometer"></ha-icon>`:r.qy`<ha-icon icon="mdi:rocket-launch"></ha-icon>`}
              </button>`)}
          </div>`:r.s6}
    </div>
  `}function g(n,e,t={}){return n.length?r.qy`
    <div class="uc-printer-fans">
      ${n.map(n=>{const i=a(n.percent),c=o(n.entityId);return r.qy`
          <div
            class="fan-row ${c.cls}"
            role=${c.role}
            tabindex=${c.tabindex}
            @click=${c.handler}
            @keydown=${s(c.handler)}
          >
            <span
              class="fan-icon-wrap ${i>0?"spinning":""}"
              style=${i>0?`--fan-duration: ${Math.max(.4,2.6-i/45)}s`:r.s6}
            >
              <ha-icon icon="mdi:fan"></ha-icon>
            </span>
            <span class="fan-label">${n.label}</span>
            <div class="fan-bar"><div class="fill" style="width:${i}%"></div></div>
            <span class="fan-pct">${null==n.percent?"—":`${Math.round(i)}%`}</span>
            ${t.editable&&n.controllable?r.qy`<input
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  .value=${String(i)}
                  @click=${n=>n.stopPropagation()}
                  @change=${t=>{var r;t.stopPropagation();const i=parseInt(t.target.value,10);null===(r=e.onFan)||void 0===r||r.call(e,n,i)}}
                />`:r.s6}
          </div>
        `})}
    </div>
  `:r.qy``}class m extends HTMLElement{constructor(){super(),this._base="",this._refresh=10,this._img=document.createElement("img"),this._img.alt="",this._img.loading="lazy",this._img.decoding="async",this._img.style.cssText="width:100%;height:100%;object-fit:cover;display:block;",this._img.addEventListener("error",()=>this.classList.add("is-error")),this._img.addEventListener("load",()=>this.classList.remove("is-error"))}set base(n){n!==this._base&&(this._base=n,this._paint())}set refresh(n){const e=Math.max(1,Number(n)||10);e!==this._refresh&&(this._refresh=e,this._arm())}connectedCallback(){this._img.isConnected||this.appendChild(this._img),this._paint(),this._arm()}disconnectedCallback(){this._timer&&window.clearInterval(this._timer),this._timer=void 0}_arm(){this._timer&&window.clearInterval(this._timer),this.isConnected&&(this._timer=window.setInterval(()=>this._paint(),1e3*this._refresh))}_paint(){if(!this._base)return;const n=this._base.includes("?")?"&":"?";this._img.src=`${this._base}${n}_uc=${Date.now()}`}}function x(n,e,t={}){var i;const a=t.fill?"fill":"";if(!n||!e)return r.qy`<div class="uc-printer-camera empty ${a}">
      <ha-icon icon="mdi:cctv-off"></ha-icon><span>No camera</span>
    </div>`;const c=n.states[e],l=function(n,e){var t,r;if(!n||!e)return;const i=n.states[e];if(!i)return;const a=null===(t=i.attributes)||void 0===t?void 0:t.entity_picture;if(a)return a;if("camera"===e.split(".")[0]){const n=null===(r=i.attributes)||void 0===r?void 0:r.access_token;return n?`/api/camera_proxy/${e}?token=${encodeURIComponent(n)}`:`/api/camera_proxy/${e}`}}(n,e),p=o(e);if(!c||!l)return r.qy`<div
      class="uc-printer-camera empty ${a} ${p.cls}"
      role=${p.role}
      tabindex=${p.tabindex}
      @click=${p.handler}
      @keydown=${s(p.handler)}
    >
      <ha-icon icon="mdi:cctv-off"></ha-icon><span>Camera unavailable</span>
    </div>`;const d="live"===t.mode&&e.startsWith("camera.");return r.qy`
    <div
      class="uc-printer-camera ${a} ${d?"live":""} ${p.cls}"
      title=${t.alt||"Open camera"}
      role=${p.role}
      tabindex=${p.tabindex}
      @click=${p.handler}
      @keydown=${s(p.handler)}
    >
      ${d?r.qy`<ha-camera-stream
            .hass=${n}
            .stateObj=${c}
            .fitMode=${"cover"}
            .muted=${!0}
            .controls=${!1}
          ></ha-camera-stream>
            <span class="cam-live"><span class="dot"></span>LIVE</span>`:r.qy`<uc-printer-snapshot
            .base=${l}
            .refresh=${null!==(i=t.refreshSeconds)&&void 0!==i?i:10}
          ></uc-printer-snapshot>`}
      <span class="cam-expand"><ha-icon icon="mdi:arrow-expand"></ha-icon></span>
    </div>
  `}function y(n){return r.qy`
    <div class="uc-printer-details">
      ${n.map(n=>{const e=o(n.entityId);return r.qy`
          <div
            class="detail-row ${n.accent?"accent":""} ${e.cls}"
            role=${e.role}
            tabindex=${e.tabindex}
            @click=${e.handler}
            @keydown=${s(e.handler)}
          >
            <span class="detail-label">${n.label}</span>
            <span class="detail-value">${n.value}</span>
          </div>
        `})}
    </div>
  `}"undefined"==typeof customElements||customElements.get("uc-printer-snapshot")||customElements.define("uc-printer-snapshot",m)}};