export const __webpack_esm_ids__=[6219];export const __webpack_esm_modules__={4865(e,t,o){var r=o(3038),n=o(4959),i=o(1172),a=o(9457);const s=!!window.__UC_DEBUG,l=new class{constructor(){this.container=null,this.mappings=new Map}show(e,t,o,r,n){s&&console.log("🎬 Simple Entity Mapper show called"),s&&console.log("📋 Entity references:",o),s&&console.log("📋 References length:",o.length),s&&console.log("📋 References details:",JSON.stringify(o,null,2)),this.hass=e,this.onApplyCallback=r,this.onCancelCallback=n,this.initializeMappings(o),this.createDialog(t)}initializeMappings(e){if(s&&console.log("🔧 Initializing mappings..."),s&&console.log("🔧 References to process:",e),this.mappings.clear(),!e||0===e.length)return void console.warn("⚠️ No entity references provided!");const t=Object.keys(this.hass.states);s&&console.log("📊 Available entities count:",t.length),e.forEach((e,o)=>{if(!e||!e.entityId)return void console.warn("⚠️ Invalid reference:",e);const i=(0,n.Z)(this.hass,e.entityId),a=i||this.getDomain(e.entityId),l=void 0!==this.hass.states[e.entityId],c=this.rowNeedsUserPick(e.entityId);let d=e.entityId;if(c&&i){const t=e.entityId.startsWith("$")?e.entityId.slice(1).replace(/\./g,"_"):e.entityId.replace(/\./g,"_");d=`${i}.${t||"entity"}`}let p=r.entityMapper.suggestEntities(d,t);c&&i&&0===p.length&&(p=t.filter(e=>e.startsWith(`${i}.`)).sort().slice(0,15));const u=`${e.entityId}__${e.locations[0]}`;let h;h=l?e.entityId:c&&p.length>0?p[0]:"",s&&console.log(`🔍 Processing entity reference ${o}: ${e.entityId} at ${e.locations[0]}`,{domain:a,inferredDomain:i,exists:l,needsPick:c,moduleType:e.moduleType,suggestionsCount:p.length,suggestions:p.slice(0,3)}),this.mappings.set(u,{original:e.entityId,mapped:h,suggestions:p,domain:a,context:e.context,moduleType:e.moduleType,location:e.locations[0]})}),s&&console.log("✅ Mappings initialized:",Array.from(this.mappings.entries()))}createDialog(e){var t;this.container&&this.container.parentNode&&(this.container.parentNode.removeChild(this.container),this.container=null),this.container=document.createElement("div"),this.container.className="uc-simple-entity-mapper";const o=this.buildDialogHTML(e);this.container.innerHTML=o,this.findOverlayHost().appendChild(this.container),(0,a.w)(this.container),setTimeout(()=>{if(this.container){this.container.removeAttribute("inert"),this.container.style.zIndex="9999999",this.container.querySelectorAll("*").forEach(e=>{e.removeAttribute("inert")}),this.container.style.pointerEvents="auto";const e=this.container.querySelector(".dialog-backdrop");e&&(e.style.pointerEvents="auto");const t=this.container.querySelector(".dialog-container");t&&(t.style.pointerEvents="auto"),s&&console.log("🎆 Dialog made interactive - removed inert attributes")}},100),this.bindEvents(),s&&console.log("✅ Dialog created and events bound"),s&&console.log("📍 Dialog parent:",null===(t=this.container)||void 0===t?void 0:t.parentElement)}findOverlayHost(){const e=t=>{const o=Array.from(t.querySelectorAll("dialog, ha-dialog, mwc-dialog"));for(const e of o)if(Boolean(e.open)||e.hasAttribute("open")||e.classList.contains("open")||"false"===e.getAttribute("aria-hidden"))return e;const r=Array.from(t.querySelectorAll("*"));for(const t of r)if(t.shadowRoot){const o=e(t.shadowRoot);if(o)return o}return null};return e(document)||document.body}buildDialogHTML(e){const t=this.getSummary();s&&console.log("🔧 Building dialog HTML"),s&&console.log("🔧 Mappings size:",this.mappings.size),s&&console.log("🔧 Summary:",t);let o="";return this.mappings.forEach((e,t)=>{const r=this.rowNeedsUserPick(e.original)?`Keep placeholder (invalid until mapped): ${e.original}`:`Keep original: ${e.original}`,n=[`<option value="${(0,i.escapeHtml)(e.original)}">${(0,i.escapeHtml)(r)}</option>`];e.suggestions.length>0&&(n.push('<optgroup label="Suggested matches">'),e.suggestions.forEach(t=>{const o=e.mapped===t?"selected":"";n.push(`<option value="${(0,i.escapeHtml)(t)}" ${o}>${(0,i.escapeHtml)(t)}</option>`)}),n.push("</optgroup>"));const a=Object.keys(this.hass.states),s=e.domain?a.filter(t=>t.startsWith(e.domain+".")).filter(t=>t!==e.original&&!e.suggestions.includes(t)).sort():[];if(s.length>0){const t=e.domain.charAt(0).toUpperCase()+e.domain.slice(1).replace(/_/g," ");n.push(`<optgroup label="All ${(0,i.escapeHtml)(t)} entities">`),s.forEach(t=>{const o=e.mapped===t?"selected":"";n.push(`<option value="${(0,i.escapeHtml)(t)}" ${o}>${(0,i.escapeHtml)(t)}</option>`)}),n.push("</optgroup>")}else if(!e.domain){const t=a.filter(t=>t!==e.original&&!e.suggestions.includes(t)).sort().slice(0,1500);t.length>0&&(n.push('<optgroup label="All entities (search in list)">'),t.forEach(t=>{const o=e.mapped===t?"selected":"";n.push(`<option value="${(0,i.escapeHtml)(t)}" ${o}>${(0,i.escapeHtml)(t)}</option>`)}),n.push("</optgroup>"))}o+=`\n        <div class="entity-row">\n          <div class="entity-info">\n            <div class="entity-original">${(0,i.escapeHtml)(e.original)}</div>\n            ${e.context?`<div class="entity-context">${(0,i.escapeHtml)(e.context)}</div>`:""}\n            <div class="entity-tags">\n              <span class="entity-domain">${(0,i.escapeHtml)(e.domain)}</span>\n              ${e.moduleType?`<span class="entity-module-type">${(0,i.escapeHtml)(e.moduleType)}</span>`:""}\n            </div>\n          </div>\n          <div class="entity-picker">\n            <select class="entity-select" data-unique-key="${(0,i.escapeHtml)(t)}" data-original="${(0,i.escapeHtml)(e.original)}">\n              ${n.join("")}\n            </select>\n          </div>\n        </div>\n      `}),`\n      <div class="dialog-backdrop">\n        <div class="dialog-container">\n          <div class="dialog-header">\n            <h2>${(0,i.escapeHtml)(e)}</h2>\n            <p>${t.total} entities detected</p>\n          </div>\n          \n          <div class="dialog-content">\n          <div class="bulk-actions">\n            <button type="button" id="auto-map-btn" class="bulk-btn">Auto-Map Similar</button>\n            <button type="button" id="keep-all-btn" class="bulk-btn">Use Original Entities</button>\n            <button type="button" id="clear-all-btn" class="bulk-btn">Clear All</button>\n          </div>\n            \n            <div class="entity-list">\n              ${o}\n            </div>\n            \n            <div class="summary">\n              <p id="summary-text">${t.mapped} mapped, ${t.unmapped} unmapped of ${t.total} total</p>\n            </div>\n          </div>\n          \n          <div class="dialog-footer">\n            <button type="button" id="cancel-btn" class="dialog-btn">Cancel</button>\n            <button type="button" id="apply-btn" class="dialog-btn primary" ${t.unmapped>0?"disabled":""}>Apply Preset</button>\n          </div>\n        </div>\n      </div>\n      \n      <style>\n        .uc-simple-entity-mapper {\n          position: fixed;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          z-index: 999999 !important;\n          pointer-events: auto !important;\n          /* Neutralize UA [popover] styles (container is promoted to the top layer) */\n          margin: 0;\n          border: 0;\n          padding: 0;\n          width: auto;\n          height: auto;\n          max-width: none;\n          max-height: none;\n          overflow: visible;\n          background: transparent;\n          color: inherit;\n        }\n        \n        .dialog-backdrop {\n          position: fixed;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background: rgba(0, 0, 0, 0.7);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          padding: 20px;\n          z-index: 999999 !important;\n          pointer-events: auto !important;\n        }\n        \n        .dialog-container {\n          background: var(--card-background-color, #fff);\n          border-radius: 12px;\n          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n          max-width: 800px;\n          width: 100%;\n          max-height: 90vh;\n          display: flex;\n          flex-direction: column;\n          position: relative;\n          z-index: 999999 !important;\n          pointer-events: auto !important;\n        }\n        \n        .dialog-header {\n          padding: 24px;\n          border-bottom: 1px solid var(--divider-color, #e0e0e0);\n        }\n        \n        .dialog-header h2 {\n          margin: 0 0 8px;\n          font-size: 20px;\n          color: var(--primary-text-color);\n        }\n        \n        .dialog-header p {\n          margin: 0;\n          font-size: 14px;\n          color: var(--secondary-text-color);\n        }\n        \n        .dialog-content {\n          padding: 20px 24px;\n          overflow-y: auto;\n          flex: 1;\n        }\n        \n        .bulk-actions {\n          display: flex;\n          gap: 12px;\n          margin-bottom: 20px;\n        }\n        \n        .bulk-btn {\n          padding: 8px 16px;\n          border-radius: 8px;\n          border: 1px solid var(--divider-color);\n          background: var(--card-background-color);\n          color: var(--primary-text-color);\n          cursor: pointer;\n          font-size: 14px;\n          pointer-events: auto !important;\n          position: relative;\n          z-index: 1;\n        }\n        \n        .bulk-btn:hover {\n          background: var(--primary-color);\n          color: var(--text-primary-color, #fff);\n          border-color: var(--primary-color);\n        }\n        \n        .entity-list {\n          display: flex;\n          flex-direction: column;\n          gap: 16px;\n        }\n        \n        .entity-row {\n          display: flex;\n          gap: 16px;\n          padding: 16px;\n          border-radius: 8px;\n          background: var(--secondary-background-color, #f5f5f5);\n          border: 1px solid var(--divider-color);\n        }\n        \n        .entity-info {\n          flex: 1;\n        }\n        \n        .entity-original {\n          font-size: 14px;\n          font-weight: 500;\n          color: var(--primary-text-color);\n          font-family: monospace;\n        }\n        \n        .entity-context {\n          font-size: 12px;\n          color: var(--secondary-text-color);\n          margin-top: 4px;\n        }\n        \n        .entity-tags {\n          display: flex;\n          gap: 4px;\n          margin-top: 4px;\n          flex-wrap: wrap;\n        }\n        \n        .entity-domain,\n        .entity-module-type {\n          display: inline-block;\n          padding: 2px 8px;\n          border-radius: 4px;\n          font-size: 11px;\n          font-weight: 500;\n        }\n        \n        .entity-domain {\n          background: var(--primary-color);\n          color: var(--text-primary-color, #fff);\n        }\n\n        .entity-module-type {\n          background: var(--accent-color, #ff9800);\n          color: var(--text-primary-color, #fff);\n          text-transform: capitalize;\n        }\n        \n        .entity-picker {\n          flex: 1;\n        }\n        \n        .entity-select {\n          width: 100%;\n          padding: 8px 12px;\n          border-radius: 8px;\n          border: 1px solid var(--divider-color);\n          background: var(--card-background-color);\n          color: var(--primary-text-color);\n          font-size: 14px;\n          cursor: pointer;\n          pointer-events: auto !important;\n          position: relative;\n          z-index: 1;\n        }\n        \n        .entity-select:focus {\n          outline: 2px solid var(--primary-color);\n          outline-offset: 2px;\n        }\n        \n        .summary {\n          margin-top: 20px;\n          padding: 16px;\n          border-radius: 8px;\n          background: var(--primary-color);\n          color: var(--text-primary-color, #fff);\n        }\n\n        .summary p {\n          margin: 0;\n          font-size: 14px;\n          font-weight: 500;\n        }\n        \n        .dialog-footer {\n          padding: 16px 24px;\n          border-top: 1px solid var(--divider-color);\n          display: flex;\n          justify-content: flex-end;\n          gap: 12px;\n        }\n        \n        .dialog-btn {\n          padding: 10px 24px;\n          border-radius: 8px;\n          border: none;\n          font-size: 14px;\n          font-weight: 500;\n          cursor: pointer;\n          background: var(--secondary-background-color);\n          color: var(--primary-text-color);\n          pointer-events: auto !important;\n          position: relative;\n          z-index: 1;\n        }\n        \n        .dialog-btn:hover {\n          background: var(--divider-color);\n        }\n        \n        .dialog-btn.primary {\n          background: var(--primary-color);\n          color: var(--text-primary-color, #fff);\n        }\n        \n        .dialog-btn.primary:hover {\n          opacity: 0.9;\n        }\n        \n        .dialog-btn:disabled {\n          opacity: 0.5;\n          cursor: not-allowed;\n        }\n      </style>\n    `}bindEvents(){if(!this.container)return;const e=this.container.querySelector("#auto-map-btn"),t=this.container.querySelector("#keep-all-btn"),o=this.container.querySelector("#clear-all-btn"),r=this.container.querySelector("#cancel-btn"),n=this.container.querySelector("#apply-btn");e&&(e.onclick=e=>{e.stopPropagation(),e.preventDefault(),s&&console.log("🚀 Auto-map button clicked!"),this.handleAutoMap()}),t&&(t.onclick=e=>{e.stopPropagation(),e.preventDefault(),s&&console.log("🔒 Keep all unmapped button clicked!"),this.handleKeepAllUnmapped()}),o&&(o.onclick=e=>{e.stopPropagation(),e.preventDefault(),s&&console.log("🧹 Clear all button clicked!"),this.handleClearAll()}),r&&(r.onclick=e=>{e.stopPropagation(),e.preventDefault(),s&&console.log("❌ Cancel button clicked!"),this.handleCancel()}),n&&(n.onclick=e=>{e.stopPropagation(),e.preventDefault(),s&&console.log("✅ Apply button clicked!"),this.handleApply()});const i=this.container.querySelectorAll(".entity-select");s&&console.log(`🔧 Binding events to ${i.length} dropdowns`),i.forEach((e,t)=>{const o=e.dataset.uniqueKey,r=e.dataset.original;s&&console.log(`🔧 Binding dropdown ${t}: ${r} (key: ${o})`),e.addEventListener("change",e=>{e.stopPropagation(),e.preventDefault();const t=e.target,o=t.dataset.uniqueKey;o&&(s&&console.log("🎉 Dropdown changed via addEventListener:",o,"to",t.value),this.handleMappingChange(o,t.value))}),e.onchange=e=>{e.stopPropagation(),e.preventDefault();const t=e.target,o=t.dataset.uniqueKey;o&&(s&&console.log("🎉 Dropdown changed via onchange:",o,"to",t.value),this.handleMappingChange(o,t.value))},e.onclick=e=>{s&&console.log("🔍 Dropdown clicked:",r)}}),s&&console.log("✅ All events bound using direct property assignment")}handleAutoMap(){s&&console.log("🤖 Auto-map button handler called!");let e=0;this.mappings.forEach((t,o)=>{t.suggestions.length>0&&(s&&console.log(`🔄 Auto-mapping ${o} to ${t.suggestions[0]}`),t.mapped=t.suggestions[0],e++)}),s&&console.log(`✅ Auto-map completed: ${e} entities mapped`),this.updateUI()}handleKeepAllUnmapped(){s&&console.log("🔒 Keep all unmapped button clicked!");let e=0;this.mappings.forEach(t=>{s&&console.log(`🔒 Resetting ${t.original} to original value`),t.mapped=t.original,e++}),s&&console.log(`✅ Keep all unmapped completed: ${e} entities reset to original`),this.updateUI()}handleClearAll(){this.mappings.forEach(e=>{s&&console.log(`🧹 Clearing mapping for ${e.original}`),e.mapped=""}),s&&console.log("✅ Clear all completed"),this.updateUI()}handleMappingChange(e,t){s&&console.log(`🔄 handleMappingChange called: ${e} -> ${t}`);const o=this.mappings.get(e);o?(o.mapped=t,s&&console.log("✅ Updated mapping state:",o),this.updateUI()):(console.error("❌ No state found for:",e),s&&console.log("📋 Current mappings:",Array.from(this.mappings.keys())))}handleCancel(){s&&console.log("🔄 Calling cancel callback");const e=this.onCancelCallback;this.close(),e&&e()}handleApply(){const e=[];this.mappings.forEach(t=>{t.mapped&&t.mapped!==t.original&&this.hass.states[t.mapped]&&(e.push({original:t.original,mapped:t.mapped,domain:t.domain||this.getDomain(t.mapped)}),s&&console.log(`📝 Adding mapping: ${t.original} → ${t.mapped} (at ${t.location})`))}),s&&console.log("📋 Final mappings to apply:",e);const t=this.onApplyCallback;this.close(),t&&t(e)}updateUI(){if(!this.container)return;this.mappings.forEach((e,t)=>{const o=this.container.querySelector(`[data-unique-key="${t}"]`);o&&(o.value=e.mapped)});const e=this.getSummary(),t=this.container.querySelector("#summary-text");t&&(t.textContent=`${e.mapped} mapped, ${e.unmapped} unmapped of ${e.total} total`);const o=this.container.querySelector("#apply-btn");o&&(o.disabled=e.unmapped>0)}rowNeedsUserPick(e){return e.startsWith("$")||!!e&&!this.hass.states[e]}getSummary(){let e=0,t=0;return this.mappings.forEach(o=>{const r=this.rowNeedsUserPick(o.original),n=o.mapped,i=!(!n||!this.hass.states[n]);let a=!1;a=r?i&&n!==o.original:i,a?e++:t++}),{total:this.mappings.size,mapped:e,unmapped:t}}getDomain(e){const t=e.split(".");return t.length>1?t[0]:""}close(){s&&console.log("🚪 Closing dialog"),this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.mappings.clear(),this.onApplyCallback=void 0,this.onCancelCallback=void 0}};o.d(t,["n",0,l])},2659(e,t,o){o.d(t,{UltraLightModule:()=>f});var r=o(2618),n=o(6478),i=o(7475),a=(o(7921),o(4791)),s=o(1001),l=function(e,t,o,r){var n,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,o,a):n(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a};class c{static rgbToHs(e,t,o){e/=255,t/=255,o/=255;const r=Math.max(e,t,o),n=Math.min(e,t,o);let i=0;const a=0===r?0:(r-n)/r;if(r!==n){switch(r){case e:i=(t-o)/(r-n)+(t<o?6:0);break;case t:i=(o-e)/(r-n)+2;break;case o:i=(e-t)/(r-n)+4}i/=6}return[Math.round(360*i),Math.round(100*a)]}static hsToRgb(e,t){e/=360,t/=100;const o=Math.floor(6*e),r=6*e-o,n=1*(1-t),i=1*(1-r*t),a=1*(1-(1-r)*t);let s,l,c;switch(o%6){case 0:[s,l,c]=[1,a,n];break;case 1:[s,l,c]=[i,1,n];break;case 2:[s,l,c]=[n,1,a];break;case 3:[s,l,c]=[n,i,1];break;case 4:[s,l,c]=[a,n,1];break;case 5:[s,l,c]=[1,n,i];break;default:[s,l,c]=[0,0,0]}return[Math.round(255*s),Math.round(255*l),Math.round(255*c)]}static rgbToXy(e,t,o){t/=255,o/=255;const r=.4124*(e=(e/=255)>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(o=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92),n=.2126*e+.7152*t+.0722*o,i=r+n+(.0193*e+.1192*t+.9505*o);return 0===i?[.3127,.329]:[Math.round(r/i*1e4)/1e4,Math.round(n/i*1e4)/1e4]}static xyToRgb(e,t,o=1){const r=o/t*e,n=o/t*(1-e-t);let i=3.2406*r+-1.5372*o+-.4986*n,a=-.9689*r+1.8758*o+.0415*n,s=.0557*r+-.204*o+1.057*n;return i=i<=.0031308?12.92*i:1.055*Math.pow(i,1/2.4)-.055,a=a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055,s=s<=.0031308?12.92*s:1.055*Math.pow(s,1/2.4)-.055,i=Math.max(0,Math.min(1,i)),a=Math.max(0,Math.min(1,a)),s=Math.max(0,Math.min(1,s)),[Math.round(255*i),Math.round(255*a),Math.round(255*s)]}static rgbToHex(e,t,o){return"#"+[e,t,o].map(e=>{const t=e.toString(16);return 1===t.length?"0"+t:t}).join("")}static hexToRgb(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}static kelvinToMired(e){return Math.round(1e6/e)}static miredToKelvin(e){return Math.round(1e6/e)}static miredToRgb(e){const t=this.miredToKelvin(e);return this.kelvinToRgb(t)}static kelvinToRgb(e){let t,o,r;const n=e/100;return n<=66?t=255:(t=n-60,t=329.698727446*Math.pow(t,-.1332047592),t=Math.max(0,Math.min(255,t))),n<=66?(o=n,o=99.4708025861*Math.log(o)-161.1195681661):(o=n-60,o=288.1221695283*Math.pow(o,-.0755148492)),o=Math.max(0,Math.min(255,o)),n>=66?r=255:n<=19?r=0:(r=n-10,r=138.5177312231*Math.log(r)-305.0447927307,r=Math.max(0,Math.min(255,r))),[Math.round(t),Math.round(o),Math.round(r)]}}let d=class extends r.WF{constructor(){super(...arguments),this.mode="hs",this.min_mireds=153,this.max_mireds=500,this.disabled=!1,this.rgbww_mode=!1,this.enable_color=!0,this.enable_color_temp=!0,this._isDragging=!1,this._currentRgb=[255,255,255],this._currentHs=[0,0],this._currentXy=[.3127,.329],this._currentColorTemp=333,this._ignoringNextEffectChange=!1,this._processingEffectChange=!1,this._effectDropdownOpen=!1,this._effectSearchTerm="",this._filteredEffects=[],this._focusedInput=null,this._lastChangedMode=null,this.handleClickOutside=e=>{var t;const o=e.composedPath(),r=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".custom-select-container");r&&!o.includes(r)&&(this._effectDropdownOpen=!1,this._effectSearchTerm="",this.requestUpdate())}}firstUpdated(){this.updateCurrentValues(),document.addEventListener("click",this.handleClickOutside)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.handleClickOutside)}updated(e){(e.has("rgb_color")||e.has("hs_color")||e.has("xy_color")||e.has("color_temp"))&&this.updateCurrentValues(),(e.has("enable_color")||e.has("enable_color_temp"))&&(this.enable_color||"hs"!==this.mode&&"rgb"!==this.mode&&"xy"!==this.mode||(this.enable_color_temp&&!this.rgbww_mode?this.mode="color_temp":this.mode="effect"),this.enable_color_temp||"color_temp"!==this.mode||this.rgbww_mode||(this.enable_color?this.mode="hs":this.mode="effect"))}updateCurrentValues(){const e="xy"===this._lastChangedMode&&("xy-x"===this._focusedInput||"xy-y"===this._focusedInput),t="hs"===this._lastChangedMode&&("hs-hue"===this._focusedInput||"hs-sat"===this._focusedInput);this.rgb_color?(this._currentRgb=[...this.rgb_color],t||(this._currentHs=c.rgbToHs(this.rgb_color[0],this.rgb_color[1],this.rgb_color[2])),e||(this._currentXy=c.rgbToXy(this.rgb_color[0],this.rgb_color[1],this.rgb_color[2]))):this.hs_color?(t||(this._currentHs=[...this.hs_color]),this._currentRgb=c.hsToRgb(this._currentHs[0],this._currentHs[1]),e||(this._currentXy=c.rgbToXy(this._currentRgb[0],this._currentRgb[1],this._currentRgb[2]))):this.xy_color?(e||(this._currentXy=[...this.xy_color]),this._currentRgb=c.xyToRgb(this._currentXy[0],this._currentXy[1]),t||(this._currentHs=c.rgbToHs(this._currentRgb[0],this._currentRgb[1],this._currentRgb[2]))):this.color_temp&&(this._currentRgb=c.miredToRgb(this.color_temp),t||(this._currentHs=c.rgbToHs(this._currentRgb[0],this._currentRgb[1],this._currentRgb[2])),e||(this._currentXy=c.rgbToXy(this._currentRgb[0],this._currentRgb[1],this._currentRgb[2]))),this.color_temp&&(this._currentColorTemp=this.color_temp),this.enable_color||(this._currentRgb=[255,255,255],this._currentHs=[0,0],this._currentXy=[.3127,.329])}fireColorChanged(e){let t=this.mode;!this.rgbww_mode||"hs"!==this.mode&&"rgb"!==this.mode&&"xy"!==this.mode||(t="rgbww");const o={mode:t,rgbww_mode:this.rgbww_mode};"effect"===t?o.effect=this.effect:"rgbww"===t?(this.enable_color?(o.rgb_color=this._currentRgb,o.hs_color=this._currentHs,o.xy_color=this._currentXy):(o.rgb_color=[255,255,255],o.hs_color=[0,0],o.xy_color=[.3127,.329]),this.enable_color_temp&&(o.color_temp=this._currentColorTemp),o.effect=""):"color_temp"===t?(this.enable_color_temp&&(o.color_temp=this._currentColorTemp),this.enable_color||(o.rgb_color=[255,255,255],o.hs_color=[0,0],o.xy_color=[.3127,.329]),o.effect=""):"hs"!==t&&"rgb"!==t&&"xy"!==t||(this.enable_color?(o.rgb_color=this._currentRgb,o.hs_color=this._currentHs,o.xy_color=this._currentXy):(o.rgb_color=[255,255,255],o.hs_color=[0,0],o.xy_color=[.3127,.329]),this.enable_color_temp&&this.rgbww_mode&&(o.color_temp=this._currentColorTemp),o.effect=""),Object.assign(o,e),this.enable_color||o.rgb_color?!this.enable_color&&o.rgb_color&&(o.rgb_color=[255,255,255],o.hs_color=[0,0],o.xy_color=[.3127,.329]):"color_temp"===t||this.enable_color_temp&&!this.enable_color?(o.rgb_color=[255,255,255],o.hs_color=[0,0],o.xy_color=[.3127,.329]):(delete o.rgb_color,delete o.hs_color,delete o.xy_color),this.enable_color_temp||delete o.color_temp;const r=new CustomEvent("color-changed",{detail:o});this.dispatchEvent(r)}handleUltraColorPickerChange(e){if(this.disabled||!this.enable_color)return;const t=e.detail.value;if(t.startsWith("rgba")||t.startsWith("rgb")){const e=t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(e){const t=parseInt(e[1]),o=parseInt(e[2]),r=parseInt(e[3]);this._currentRgb=[t,o,r],this._currentHs=c.rgbToHs(t,o,r),this._currentXy=c.rgbToXy(t,o,r),this.fireColorChanged({rgb_color:this._currentRgb,hs_color:this._currentHs,xy_color:this._currentXy,mode:"rgb"})}}else this.handleHexChange(t)}handleTestPreset(){const e=new CustomEvent("test-preset",{detail:{mode:this.mode,rgb_color:this.rgb_color,hs_color:this.hs_color,xy_color:this.xy_color,color_temp:this.color_temp,effect:this.effect},bubbles:!0,composed:!0});this.dispatchEvent(e)}handleColorWheelClick(e){if(this.disabled||!this.enable_color)return;const t=e.currentTarget.getBoundingClientRect(),o=t.width/2,r=t.height/2,n=e.clientX-t.left-o,i=e.clientY-t.top-r,a=Math.sqrt(n*n+i*i),s=Math.min(t.width,t.height)/2-3,l=Math.min(a,s);let d=Math.atan2(i,n)*(180/Math.PI);d+=90,d<0&&(d+=360),d>=360&&(d-=360);const p=100*Math.min(l/s,1);this._currentHs=[Math.round(d),Math.round(p)],this._currentRgb=c.hsToRgb(d,p),this._currentXy=c.rgbToXy(this._currentRgb[0],this._currentRgb[1],this._currentRgb[2]),this.fireColorChanged({rgb_color:this._currentRgb,hs_color:this._currentHs,xy_color:this._currentXy,mode:"hs"})}handleRgbChange(e,t){if(this.disabled||!this.enable_color)return;const o=[...this._currentRgb];o[e]=Math.max(0,Math.min(255,t)),this._currentRgb=o,this._currentHs=c.rgbToHs(o[0],o[1],o[2]),this._currentXy=c.rgbToXy(o[0],o[1],o[2]),this.fireColorChanged({rgb_color:this._currentRgb,hs_color:this._currentHs,xy_color:this._currentXy,mode:"rgb"})}handleHexChange(e){if(this.disabled||!this.enable_color)return;const t=c.hexToRgb(e);t&&(this._currentRgb=t,this._currentHs=c.rgbToHs(t[0],t[1],t[2]),this._currentXy=c.rgbToXy(t[0],t[1],t[2]),this.fireColorChanged({rgb_color:this._currentRgb,hs_color:this._currentHs,xy_color:this._currentXy,mode:"rgb"}))}handleHsChange(e,t){if(this.disabled||!this.enable_color)return;const o=[...this._currentHs];0===e?o[0]=Math.max(0,Math.min(360,t)):o[1]=Math.max(0,Math.min(100,t)),this._currentHs=o,this._currentRgb=c.hsToRgb(o[0],o[1]),this._currentXy=c.rgbToXy(this._currentRgb[0],this._currentRgb[1],this._currentRgb[2]),this._lastChangedMode="hs",this.fireColorChanged({rgb_color:this._currentRgb,hs_color:this._currentHs,xy_color:this._currentXy,mode:"hs"})}handleXyChange(e,t){if(this.disabled||!this.enable_color)return;const o=[...this._currentXy];o[e]=Math.max(0,Math.min(1,t)),this._currentXy=o,this._currentRgb=c.xyToRgb(o[0],o[1]),this._currentHs=c.rgbToHs(this._currentRgb[0],this._currentRgb[1],this._currentRgb[2]),this._lastChangedMode="xy",this.fireColorChanged({rgb_color:this._currentRgb,hs_color:this._currentHs,xy_color:this._currentXy,mode:"xy"})}handleColorTempChange(e){!this.disabled&&this.enable_color_temp&&(this._currentColorTemp=Math.max(this.min_mireds,Math.min(this.max_mireds,e)),this.rgbww_mode?this.fireColorChanged({rgb_color:this._currentRgb,hs_color:this._currentHs,xy_color:this._currentXy,color_temp:this._currentColorTemp,mode:"rgbww"}):this.fireColorChanged({color_temp:this._currentColorTemp,mode:"color_temp"}))}handleEffectsTabClick(){this.disabled||(this.mode="effect",this.requestUpdate())}handleEffectSelectionSimple(e){this.disabled||(this._effectDropdownOpen=!1,this._effectSearchTerm="",this.effect=e,e&&""!==e.trim()?(this.mode="effect",this.fireColorChanged({effect:e,mode:"effect"})):(this.mode="hs",this.fireColorChanged({effect:"",mode:"hs"})))}updateFilteredEffects(){const e=this._effectSearchTerm.toLowerCase();this._filteredEffects=(this.effect_list||[]).filter(t=>t.toLowerCase().includes(e))}handleEffectSearch(e){const t=e.target;this._effectSearchTerm=t.value,this.updateFilteredEffects()}toggleEffectDropdown(){this.disabled||(this._effectDropdownOpen=!this._effectDropdownOpen,this._effectDropdownOpen&&(this.updateFilteredEffects(),setTimeout(()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".effect-search");t&&t.focus()},100)),this.requestUpdate())}handleEffectChange(e){if(!this.disabled)if(this._ignoringNextEffectChange)this._ignoringNextEffectChange=!1;else if(!this._processingEffectChange){this._processingEffectChange=!0;try{const t=e||"";this.effect=t,t&&""!==t.trim()?this.fireColorChanged({effect:t,mode:"effect"}):this.fireColorChanged({effect:"",mode:"hs"})}catch(e){console.error("🎬 Error in handleEffectChange:",e)}finally{this._processingEffectChange=!1}}}getColorWheelPickerPosition(){const[e,t]=this._currentHs,o=(e-90)*Math.PI/180,r=t/100*45;return{x:50+Math.cos(o)*r,y:50+Math.sin(o)*r}}render(){const e=this.getColorWheelPickerPosition(),t=c.rgbToHex(this._currentRgb[0],this._currentRgb[1],this._currentRgb[2]),o=c.miredToKelvin(this._currentColorTemp);return r.qy`
      <div class="light-color-picker ${this.disabled?"disabled":""}">
        <!-- Debug Info -->

        <!-- Color Control Toggles (moved above tabs) -->
        <div
          class="color-control-toggles"
          style="background: rgba(var(--rgb-primary-color), 0.05); border-radius: 8px; padding: 16px; margin-bottom: 20px; border: 1px solid rgba(var(--rgb-primary-color), 0.1);"
        >
          <div style="font-weight: 600; margin-bottom: 16px; color: var(--primary-text-color); font-size: 16px;">
            Color Control Options
          </div>

          <!-- Send Color Values Toggle -->
          <div
            style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;"
          >
            <div style="flex: 1;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <ha-icon icon="mdi:palette" style="color: var(--primary-color); --mdc-icon-size: 20px;"></ha-icon>
                <div style="font-size: 14px; font-weight: 500; color: var(--primary-text-color);">
                  Send Color Values
                </div>
              </div>
              <div style="font-size: 12px; color: var(--secondary-text-color); margin-left: 28px; line-height: 1.4;">
                Choose specific colors (red, blue, green, etc.)
              </div>
            </div>
            <ha-switch
              .checked=${this.enable_color}
              @change=${e=>{const t=e.target.checked;this.enable_color=t,this.dispatchEvent(new CustomEvent("enable-color-changed",{detail:{value:t},bubbles:!0,composed:!0})),t||(this._currentRgb=[255,255,255],this._currentHs=[0,0],this._currentXy=[.3127,.329],"hs"!==this.mode&&"rgb"!==this.mode&&"xy"!==this.mode||(this.enable_color_temp&&!this.rgbww_mode?this.mode="color_temp":this.mode="effect")),this.requestUpdate(),this.fireColorChanged({})}}
            ></ha-switch>
          </div>

          <!-- Send Temperature Toggle -->
          <div
            style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;"
          >
            <div style="flex: 1;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                <ha-icon icon="mdi:thermometer" style="color: var(--primary-color); --mdc-icon-size: 20px;"></ha-icon>
                <div style="font-size: 14px; font-weight: 500; color: var(--primary-text-color);">
                  Send Temperature
                </div>
              </div>
              <div style="font-size: 12px; color: var(--secondary-text-color); margin-left: 28px; line-height: 1.4;">
                Choose warm white or cool white light
              </div>
            </div>
            <ha-switch
              .checked=${this.enable_color_temp}
              @change=${e=>{const t=e.target.checked;this.enable_color_temp=t,this.dispatchEvent(new CustomEvent("enable-color-temp-changed",{detail:{value:t},bubbles:!0,composed:!0})),t||"color_temp"!==this.mode||(this.enable_color?this.mode="hs":this.mode="effect"),this.requestUpdate(),this.fireColorChanged({})}}
            ></ha-switch>
          </div>

          <!-- What Will Be Sent Preview -->
          <div
            style="background: rgba(var(--rgb-primary-color), 0.08); border-radius: 6px; padding: 12px; margin-top: 12px; border-top: 1px solid rgba(var(--rgb-primary-color), 0.1);"
          >
            <div style="font-size: 12px; font-weight: 500; color: var(--primary-text-color); margin-bottom: 8px;">
              What will be sent:
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px;">
              ${this.enable_color?r.qy`
                    <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--primary-text-color);">
                      <ha-icon icon="mdi:check-circle" style="color: var(--success-color); --mdc-icon-size: 16px;"></ha-icon>
                      <span>Color values (RGB/HS/XY)</span>
                    </div>
                  `:r.qy`
                    <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--secondary-text-color); opacity: 0.6;">
                      <ha-icon icon="mdi:close-circle" style="--mdc-icon-size: 16px;"></ha-icon>
                      <span>Color values (RGB will be white)</span>
                    </div>
                  `}
              ${this.enable_color_temp?r.qy`
                    <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--primary-text-color);">
                      <ha-icon icon="mdi:check-circle" style="color: var(--success-color); --mdc-icon-size: 16px;"></ha-icon>
                      <span>Temperature (MIRED)</span>
                    </div>
                  `:r.qy`
                    <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--secondary-text-color); opacity: 0.6;">
                      <ha-icon icon="mdi:close-circle" style="--mdc-icon-size: 16px;"></ha-icon>
                      <span>Temperature (not sent)</span>
                    </div>
                  `}
            </div>
          </div>

          <!-- Empty State Message -->
          ${this.enable_color||this.enable_color_temp?"":r.qy`
                <div
                  style="background: rgba(var(--rgb-warning-color), 0.1); border-radius: 6px; padding: 12px; margin-top: 12px; border: 1px solid rgba(var(--rgb-warning-color), 0.2);"
                >
                  <div style="display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--warning-color);">
                    <ha-icon icon="mdi:information" style="--mdc-icon-size: 16px;"></ha-icon>
                    <span>Enable at least one option above to configure light settings</span>
                  </div>
                </div>
              `}
        </div>

        <!-- Color Mode Tabs (shown based on toggle states) -->
        ${this.enable_color||this.enable_color_temp||"effect"===this.mode?r.qy`
              <div class="color-mode-tabs">
                ${this.enable_color?r.qy`
                      <button
                        class="mode-tab ${"hs"===this.mode||"rgb"===this.mode||"xy"===this.mode?"active":""}"
                        @click=${()=>{"hs"!==this.mode&&"rgb"!==this.mode&&"xy"!==this.mode&&(this.mode="hs",this.fireColorChanged({rgb_color:this._currentRgb,hs_color:this._currentHs,xy_color:this._currentXy,mode:"hs"}))}}
                        .disabled=${this.disabled}
                      >
                        Color
                      </button>
                    `:""}
                ${this.enable_color_temp&&!this.rgbww_mode?r.qy`
                      <button
                        class="mode-tab ${"color_temp"===this.mode?"active":""}"
                        @click=${()=>{"color_temp"!==this.mode&&(this.mode="color_temp",this.fireColorChanged({color_temp:this._currentColorTemp,mode:"color_temp"}))}}
                        .disabled=${this.disabled}
                      >
                        White
                      </button>
                    `:""}
                <button
                  class="mode-tab ${"effect"===this.mode?"active":""}"
                  @click=${()=>{"effect"!==this.mode&&(this.mode="effect",this.fireColorChanged({effect:this.effect,mode:"effect"}))}}
                  .disabled=${this.disabled}
                  style="position: relative; z-index: 10;"
                >
                  Effects
                </button>
              </div>
            `:""}

        <!-- Color Controls -->
        ${"hs"===this.mode?r.qy`
              <div class="color-controls ${this.rgbww_mode?"rgbww-controls":""}">
                <!-- Color Wheel -->
                <div class="color-wheel-section">
                  <div
                    class="color-wheel"
                    style="${this.enable_color?"":"opacity: 0.5; pointer-events: none;"}"
                    @click=${this.handleColorWheelClick}
                    @mousedown=${e=>{!this.disabled&&this.enable_color&&(this._isDragging=!0,this.handleColorWheelClick(e))}}
                    @mousemove=${e=>{this._isDragging&&!this.disabled&&this.enable_color&&this.handleColorWheelClick(e)}}
                    @mouseup=${()=>this._isDragging=!1}
                    @mouseleave=${()=>this._isDragging=!1}
                  >
                    <div
                      class="color-wheel-picker"
                      style="left: ${e.x}%; top: ${e.y}%;"
                    ></div>
                  </div>
                </div>

                <!-- Color Values -->
                <div class="color-values">
                  <!-- RGB Values -->
                  <div class="rgb-section">
                    <div class="section-title">RGB Values</div>
                    <div class="rgb-inputs">
                      <div class="rgb-input-group">
                        <label>Red</label>
                        <input
                          type="text"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          min="0"
                          max="255"
                          .value=${"rgb-0"===this._focusedInput?void 0:this._currentRgb[0].toString()}
                          .disabled=${this.disabled||!this.enable_color}
                          @focus=${e=>{this._focusedInput="rgb-0";const t=e.target,o=t.value;requestAnimationFrame(()=>{t.value=o})}}
                          @blur=${()=>{this._focusedInput=null,setTimeout(()=>{this._lastChangedMode=null},100)}}
                          @input=${e=>{}}
                          @change=${e=>{const t=e.target,o=parseInt(t.value)||0,r=Math.max(0,Math.min(255,o));t.value=r.toString(),this.handleRgbChange(0,r)}}
                          @keydown=${e=>{const t=e.key>="0"&&e.key<="9";["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Tab","Enter","Home","End"].includes(e.key)||t||e.ctrlKey||e.metaKey||e.preventDefault()}}
                        />
                      </div>
                      <div class="rgb-input-group">
                        <label>Green</label>
                        <input
                          type="text"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          min="0"
                          max="255"
                          .value=${"rgb-1"===this._focusedInput?void 0:this._currentRgb[1].toString()}
                          .disabled=${this.disabled||!this.enable_color}
                          @focus=${e=>{this._focusedInput="rgb-1";const t=e.target,o=t.value;requestAnimationFrame(()=>{t.value=o})}}
                          @blur=${()=>{this._focusedInput=null,setTimeout(()=>{this._lastChangedMode=null},100)}}
                          @input=${e=>{}}
                          @change=${e=>{const t=e.target,o=parseInt(t.value)||0,r=Math.max(0,Math.min(255,o));t.value=r.toString(),this.handleRgbChange(1,r)}}
                          @keydown=${e=>{const t=e.key>="0"&&e.key<="9";["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Tab","Enter","Home","End"].includes(e.key)||t||e.ctrlKey||e.metaKey||e.preventDefault()}}
                        />
                      </div>
                      <div class="rgb-input-group">
                        <label>Blue</label>
                        <input
                          type="text"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          min="0"
                          max="255"
                          .value=${"rgb-2"===this._focusedInput?void 0:this._currentRgb[2].toString()}
                          .disabled=${this.disabled||!this.enable_color}
                          @focus=${e=>{this._focusedInput="rgb-2";const t=e.target,o=t.value;requestAnimationFrame(()=>{t.value=o})}}
                          @blur=${()=>{this._focusedInput=null,setTimeout(()=>{this._lastChangedMode=null},100)}}
                          @input=${e=>{}}
                          @change=${e=>{const t=e.target,o=parseInt(t.value)||0,r=Math.max(0,Math.min(255,o));t.value=r.toString(),this.handleRgbChange(2,r)}}
                          @keydown=${e=>{const t=e.key>="0"&&e.key<="9";["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Tab","Enter","Home","End"].includes(e.key)||t||e.ctrlKey||e.metaKey||e.preventDefault()}}
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Color Picker -->
                  <div class="color-picker-section">
                    <div class="section-title">Color Picker</div>
                    <ultra-color-picker
                      .hass=${this.hass}
                      .value=${t}
                      .disabled=${!this.enable_color}
                      @value-changed=${this.handleUltraColorPickerChange}
                    ></ultra-color-picker>
                  </div>

                  <!-- HS Values -->
                  <div class="hs-section">
                    <div class="section-title">HS Values</div>
                    <div class="hs-inputs">
                      <div class="hs-input-group">
                        <label>H (Hue)</label>
                        <input
                          type="text"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          min="0"
                          max="360"
                          .value=${"hs-hue"===this._focusedInput?void 0:this._currentHs[0].toString()}
                          .disabled=${this.disabled||!this.enable_color}
                          @focus=${e=>{this._focusedInput="hs-hue";const t=e.target,o=t.value;requestAnimationFrame(()=>{t.value=o})}}
                          @blur=${()=>{this._focusedInput=null,setTimeout(()=>{this._lastChangedMode=null},100)}}
                          @input=${e=>{}}
                          @change=${e=>{const t=e.target,o=parseFloat(t.value)||0,r=Math.max(0,Math.min(360,o));t.value=r.toString(),this.handleHsChange(0,r)}}
                          @paste=${e=>{var t;e.preventDefault();const o=(null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))||"",r=parseFloat(o)||0,n=Math.max(0,Math.min(360,r));e.target.value=n.toString(),this.handleHsChange(0,n)}}
                          @keydown=${e=>{const t=e.key>="0"&&e.key<="9"||"-"===e.key||"."===e.key;["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Tab","Enter","Home","End"].includes(e.key)||t||e.ctrlKey||e.metaKey||e.preventDefault()}}
                        />
                        <span class="unit">°</span>
                      </div>
                      <div class="hs-input-group">
                        <label>S (Sat)</label>
                        <input
                          type="text"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          min="0"
                          max="100"
                          .value=${"hs-sat"===this._focusedInput?void 0:this._currentHs[1].toString()}
                          .disabled=${this.disabled||!this.enable_color}
                          @focus=${e=>{this._focusedInput="hs-sat";const t=e.target,o=t.value;requestAnimationFrame(()=>{t.value=o})}}
                          @blur=${()=>{this._focusedInput=null,setTimeout(()=>{this._lastChangedMode=null},100)}}
                          @input=${e=>{}}
                          @change=${e=>{const t=e.target,o=parseFloat(t.value)||0,r=Math.max(0,Math.min(100,o));t.value=r.toString(),this.handleHsChange(1,r)}}
                          @paste=${e=>{var t;e.preventDefault();const o=(null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))||"",r=parseFloat(o)||0,n=Math.max(0,Math.min(100,r));e.target.value=n.toString(),this.handleHsChange(1,n)}}
                          @keydown=${e=>{const t=e.key>="0"&&e.key<="9"||"-"===e.key||"."===e.key;["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Tab","Enter","Home","End"].includes(e.key)||t||e.ctrlKey||e.metaKey||e.preventDefault()}}
                        />
                        <span class="unit">%</span>
                      </div>
                    </div>
                  </div>

                  <!-- XY Values -->
                  <div class="xy-section">
                    <div class="section-title">XY Values</div>
                    <div class="xy-inputs">
                      <div class="xy-input-group">
                        <label>X</label>
                        <input
                          type="text"
                          inputmode="decimal"
                          pattern="[0-9.]*"
                          min="0"
                          max="1"
                          step="0.0001"
                          .value=${"xy-x"===this._focusedInput?void 0:this._currentXy[0].toString()}
                          .disabled=${this.disabled||!this.enable_color}
                          @focus=${e=>{this._focusedInput="xy-x";const t=e.target,o=t.value;requestAnimationFrame(()=>{t.value=o})}}
                          @blur=${()=>{this._focusedInput=null,setTimeout(()=>{this._lastChangedMode=null},100)}}
                          @input=${e=>{}}
                          @change=${e=>{const t=e.target,o=parseFloat(t.value)||0,r=Math.max(0,Math.min(1,o)),n=r.toFixed(4).replace(/\.?0+$/,"");t.value=n,this.handleXyChange(0,r)}}
                          @paste=${e=>{var t;e.preventDefault();const o=(null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))||"",r=parseFloat(o)||0,n=Math.max(0,Math.min(1,r)),i=e.target,a=n.toFixed(4).replace(/\.?0+$/,"");i.value=a,this.handleXyChange(0,n)}}
                          @keydown=${e=>{const t=e.key>="0"&&e.key<="9"||"-"===e.key||"."===e.key;["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Tab","Enter","Home","End"].includes(e.key)||t||e.ctrlKey||e.metaKey||e.preventDefault()}}
                        />
                      </div>
                      <div class="xy-input-group">
                        <label>Y</label>
                        <input
                          type="text"
                          inputmode="decimal"
                          pattern="[0-9.]*"
                          min="0"
                          max="1"
                          step="0.0001"
                          .value=${"xy-y"===this._focusedInput?void 0:this._currentXy[1].toString()}
                          .disabled=${this.disabled||!this.enable_color}
                          @focus=${e=>{this._focusedInput="xy-y";const t=e.target,o=t.value;requestAnimationFrame(()=>{t.value=o})}}
                          @blur=${()=>{this._focusedInput=null,setTimeout(()=>{this._lastChangedMode=null},100)}}
                          @input=${e=>{}}
                          @change=${e=>{const t=e.target,o=parseFloat(t.value)||0,r=Math.max(0,Math.min(1,o)),n=r.toFixed(4).replace(/\.?0+$/,"");t.value=n,this.handleXyChange(1,r)}}
                          @paste=${e=>{var t;e.preventDefault();const o=(null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text"))||"",r=parseFloat(o)||0,n=Math.max(0,Math.min(1,r)),i=e.target,a=n.toFixed(4).replace(/\.?0+$/,"");i.value=a,this.handleXyChange(1,n)}}
                          @keydown=${e=>{const t=e.key>="0"&&e.key<="9"||"-"===e.key||"."===e.key;["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Tab","Enter","Home","End"].includes(e.key)||t||e.ctrlKey||e.metaKey||e.preventDefault()}}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- RGBWW White Temperature Balance (shown when rgbww_mode is enabled) -->
              ${this.rgbww_mode?r.qy`
                    <div class="rgbww-divider">
                      <div class="divider-line"></div>
                      <span class="divider-label">White Temperature Balance</span>
                      <div class="divider-line"></div>
                    </div>
                    <div class="rgbww-temp-controls">
                      <div class="color-temp-slider-container">
                        <div class="temp-labels">
                          <span>Warm</span>
                          <span>${o}K</span>
                          <span>Cool</span>
                        </div>
                        <input
                          type="range"
                          min=${this.min_mireds}
                          max=${this.max_mireds}
                          step="1"
                          .value=${this._currentColorTemp}
                          .disabled=${this.disabled||!this.enable_color_temp}
                          @input=${e=>{const t=e.target;this.handleColorTempChange(parseInt(t.value))}}
                          class="color-temp-slider"
                          style="direction: rtl; ${this.enable_color_temp?"":"opacity: 0.5;"}"
                        />
                        <div class="kelvin-markers">
                          <span>2000K</span>
                          <span>3000K</span>
                          <span>4000K</span>
                          <span>5000K</span>
                          <span>6500K</span>
                        </div>
                      </div>

                      <!-- Mired Input -->
                      <div class="mired-input-group">
                        <label>Mired</label>
                        <input
                          type="text"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          min=${this.min_mireds}
                          max=${this.max_mireds}
                          .value=${"mired-rgbww"===this._focusedInput?void 0:this._currentColorTemp.toString()}
                          .disabled=${this.disabled||!this.enable_color_temp}
                          @focus=${e=>{this._focusedInput="mired-rgbww";const t=e.target,o=t.value;requestAnimationFrame(()=>{t.value=o})}}
                          @blur=${()=>{this._focusedInput=null,setTimeout(()=>{this._lastChangedMode=null},100)}}
                          @input=${e=>{}}
                          @change=${e=>{const t=e.target,o=parseInt(t.value)||this._currentColorTemp,r=Math.max(this.min_mireds,Math.min(this.max_mireds,o));t.value=r.toString(),this.handleColorTempChange(r)}}
                          @keydown=${e=>{const t=e.key>="0"&&e.key<="9";["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Tab","Enter","Home","End"].includes(e.key)||t||e.ctrlKey||e.metaKey||e.preventDefault()}}
                        />
                      </div>
                    </div>
                  `:""}
            `:""}

        <!-- Color Temperature Controls -->
        ${"color_temp"===this.mode?r.qy`
              <div class="color-temp-controls">
                <div class="color-temp-section">
                  <div class="section-title">Color Temperature</div>
                  <div class="color-temp-slider-container">
                    <div class="temp-labels">
                      <span>Warm</span>
                      <span>${o}K</span>
                      <span>Cool</span>
                    </div>
                    <input
                      type="range"
                      min=${this.min_mireds}
                      max=${this.max_mireds}
                      step="1"
                      .value=${this._currentColorTemp}
                      .disabled=${this.disabled||!this.enable_color_temp}
                      @input=${e=>{const t=e.target;this.handleColorTempChange(parseInt(t.value))}}
                      class="color-temp-slider"
                      style="direction: rtl; ${this.enable_color_temp?"":"opacity: 0.5;"}"
                    />
                    <div class="kelvin-markers">
                      <span>2000K</span>
                      <span>3000K</span>
                      <span>4000K</span>
                      <span>5000K</span>
                      <span>6500K</span>
                    </div>
                  </div>

                  <!-- Mired Input -->
                  <div class="mired-input-group">
                    <label>Mired</label>
                    <input
                      type="text"
                      inputmode="numeric"
                      pattern="[0-9]*"
                      min=${this.min_mireds}
                      max=${this.max_mireds}
                      .value=${"mired"===this._focusedInput?void 0:this._currentColorTemp.toString()}
                      .disabled=${this.disabled||!this.enable_color_temp}
                      @focus=${e=>{this._focusedInput="mired";const t=e.target,o=t.value;requestAnimationFrame(()=>{t.value=o})}}
                      @blur=${()=>{this._focusedInput=null,setTimeout(()=>{this._lastChangedMode=null},100)}}
                      @input=${e=>{}}
                      @change=${e=>{const t=e.target,o=parseInt(t.value)||this._currentColorTemp,r=Math.max(this.min_mireds,Math.min(this.max_mireds,o));t.value=r.toString(),this.handleColorTempChange(r)}}
                      @keydown=${e=>{const t=e.key>="0"&&e.key<="9";["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Tab","Enter","Home","End"].includes(e.key)||t||e.ctrlKey||e.metaKey||e.preventDefault()}}
                    />
                  </div>
                </div>
              </div>
            `:""}

        <!-- Effects Controls -->
        ${"effect"===this.mode?this.effect_list&&this.effect_list.length>0?r.qy``:r.qy` <div
                style="padding: 16px; background: rgba(var(--rgb-warning-color), 0.1); border-radius: 8px; text-align: center;"
              >
                <ha-icon
                  icon="mdi:information-outline"
                  style="--mdc-icon-size: 24px; color: var(--warning-color); margin-bottom: 8px;"
                ></ha-icon>
                <div style="font-weight: 500; color: var(--warning-color); margin-bottom: 8px;">
                  No Shared Effects Available
                </div>
                <div style="font-size: 14px; color: var(--secondary-text-color); line-height: 1.4;">
                  The selected lighting devices don't have any effects in common.<br />
                  Try selecting devices of the same type for shared effects.
                </div>
              </div>`:""}
        ${"effect"===this.mode&&this.effect_list&&this.effect_list.length>0?r.qy`
              <div class="effects-controls">
                <div class="effects-section">
                  <div class="section-title">Light Effects</div>
                  <div class="effects-dropdown">
                    <div class="custom-select-container">
                      <!-- Selected Effect Display -->
                      <div
                        class="custom-select-trigger ${this._effectDropdownOpen?"open":""}"
                        @click=${e=>{e.stopPropagation(),this.toggleEffectDropdown()}}
                        .disabled=${this.disabled}
                      >
                        <span class="selected-effect"> ${this.effect||"No Effect"} </span>
                        <ha-icon
                          icon="mdi:chevron-down"
                          class="dropdown-arrow ${this._effectDropdownOpen?"rotated":""}"
                        ></ha-icon>
                      </div>

                      <!-- Searchable Dropdown -->
                      ${this._effectDropdownOpen?r.qy`
                            <div class="custom-dropdown-menu">
                              <!-- Search Input -->
                              <div class="search-container">
                                <input
                                  type="text"
                                  class="effect-search"
                                  placeholder="Search effects..."
                                  .value=${this._effectSearchTerm}
                                  @input=${this.handleEffectSearch}
                                  @click=${e=>e.stopPropagation()}
                                />
                                <ha-icon icon="mdi:magnify" class="search-icon"></ha-icon>
                              </div>

                              <!-- Effect Options -->
                              <div class="effect-options">
                                <div
                                  class="effect-option ${this.effect?"":"selected"}"
                                  @click=${()=>this.handleEffectSelectionSimple("")}
                                >
                                  <span>No Effect</span>
                                </div>
                                ${(this._filteredEffects.length>0?this._filteredEffects:this.effect_list||[]).map(e=>r.qy`
                                    <div
                                      class="effect-option ${this.effect===e?"selected":""}"
                                      @click=${()=>this.handleEffectSelectionSimple(e)}
                                    >
                                      <span>${e}</span>
                                    </div>
                                  `)}
                                ${this.effect_list&&0!==this.effect_list.length||""!==this._effectSearchTerm?"":r.qy`
                                      <div
                                        class="effect-option"
                                        @click=${()=>this.handleEffectSelectionSimple("colorloop")}
                                      >
                                        <span>Color Loop (Common)</span>
                                      </div>
                                      <div
                                        class="effect-option"
                                        @click=${()=>this.handleEffectSelectionSimple("random")}
                                      >
                                        <span>Random (Common)</span>
                                      </div>
                                    `}
                                ${this._effectSearchTerm&&0===this._filteredEffects.length?r.qy` <div class="no-results">No effects found</div> `:""}
                              </div>
                            </div>
                          `:""}
                    </div>
                  </div>

                  <div
                    class="effect-description"
                    style="margin-top: 12px; padding: 12px; background: rgba(var(--rgb-primary-color), 0.05); border-radius: 4px; font-size: 12px; color: var(--secondary-text-color);"
                  >
                    Effects create dynamic lighting patterns and will override any color settings.
                  </div>
                </div>
              </div>
            `:""}

        <!-- Test Preset Button -->
        <div class="test-preset-section" style="margin-top: 16px;">
          <button
            class="test-preset-btn"
            @click=${this.handleTestPreset}
            .disabled=${this.disabled}
            style="
            width: 100%;
            padding: 12px 16px;
            background: var(--primary-color);
            color: var(--text-primary-color);
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            opacity: ${this.disabled?"0.5":"1"};
          "
            onmouseover="this.style.background = 'var(--primary-color)'; this.style.opacity = '0.9';"
            onmouseout="this.style.background = 'var(--primary-color)'; this.style.opacity = '1';"
          >
            🎨 Test Preset
          </button>
        </div>
      </div>
    `}static get styles(){return r.AH`
      :host {
        display: block;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        /* min-width: 0 lets us shrink below the inner grids' intrinsic content
           width — critical inside narrow module editor panes. NOTE: do NOT add
           overflow: hidden here — nested ultra-color-picker dropdowns and
           cheatsheet popovers need to escape this element. */
        min-width: 0;
      }

      .light-color-picker {
        background: var(--card-background-color);
        border-radius: 8px;
        padding: 16px;
        border: 1px solid var(--divider-color);
        /* Box-sizing + max-width ensure the inner padding doesn't push us
           past the host's width in narrow module editor panes. */
        max-width: 100%;
        box-sizing: border-box;
      }

      .light-color-picker.disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      .color-mode-tabs {
        display: flex;
        gap: 4px;
        margin-bottom: 16px;
        background: var(--secondary-background-color);
        border-radius: 6px;
        padding: 4px;
      }

      .mode-tab {
        flex: 1;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        background: transparent;
        color: var(--secondary-text-color);
        cursor: pointer;
        font-weight: 500;
        transition: all 0.2s ease;
      }

      .mode-tab.active {
        background: var(--primary-color);
        color: var(--text-primary-color);
      }

      .mode-tab:hover:not(.active):not(:disabled) {
        background: rgba(var(--rgb-primary-color), 0.1);
        color: var(--primary-text-color);
      }

      .color-controls {
        display: flex;
        gap: 20px;
        align-items: flex-start;
        /* Allow children to shrink inside narrow editor panels (the module editor
           sidebar is typically ~340-420px wide, well below the @media 600px
           breakpoint that flips us to column layout). */
        flex-wrap: wrap;
        max-width: 100%;
        box-sizing: border-box;
      }

      .color-wheel-section {
        flex-shrink: 0;
      }

      .color-wheel {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: conic-gradient(
          from 0deg,
          hsl(0, 100%, 50%),
          hsl(60, 100%, 50%),
          hsl(120, 100%, 50%),
          hsl(180, 100%, 50%),
          hsl(240, 100%, 50%),
          hsl(300, 100%, 50%),
          hsl(360, 100%, 50%)
        );
        position: relative;
        cursor: crosshair;
        border: 3px solid var(--card-background-color);
        box-shadow: 0 0 0 1px var(--divider-color);
        box-sizing: border-box;
        transition: all 0.2s ease;
      }

      .color-wheel:hover {
        box-shadow: 0 0 0 2px var(--primary-color);
        transform: scale(1.02);
      }

      .color-wheel-picker {
        width: 12px;
        height: 12px;
        background: white;
        border: 2px solid #333;
        border-radius: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        pointer-events: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      }

      .color-values {
        flex: 1 1 220px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        /* Critical: without min-width: 0, the flex item refuses to shrink below
           its inner grid's intrinsic content width, which pushes Green / S(Sat) /
           Y inputs off the right edge of the editor panel. */
        min-width: 0;
        max-width: 100%;
        box-sizing: border-box;
      }

      .section-title {
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin-bottom: 8px;
      }

      .rgb-inputs {
        display: grid;
        /* minmax(0, 1fr) lets each column shrink below its intrinsic content
           size when the editor panel is narrow — without this the 3 columns
           keep their natural min-content width and overflow the right edge. */
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
      }

      .rgb-input-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .rgb-input-group label {
        font-size: 12px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .rgb-input-group input {
        padding: 6px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        font-size: 12px;
        text-align: center;
        /* Make the input fill its grid cell instead of using its intrinsic
           browser-default width (which is wider than narrow cells). */
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
      }

      .rgb-input-group input:focus {
        outline: none;
        border-color: var(--primary-color);
      }

      .color-picker-section {
        background: var(--secondary-background-color);
        border-radius: 8px;
        padding: 16px;
        /* Match the rest of the color-values children — never grow past the
           narrow editor pane. */
        max-width: 100%;
        box-sizing: border-box;
      }

      .hs-inputs,
      .xy-inputs {
        display: grid;
        /* Same minmax(0, 1fr) trick as .rgb-inputs — keeps both columns
           inside the editor panel's available width. */
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
      }

      .hs-input-group,
      .xy-input-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
        position: relative;
      }

      .hs-input-group label,
      .xy-input-group label {
        font-size: 12px;
        color: var(--secondary-text-color);
        font-weight: 500;
      }

      .hs-input-group input,
      .xy-input-group input {
        padding: 6px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        font-size: 12px;
        text-align: center;
        font-family: monospace;
        /* Match rgb-input-group: fill the grid cell and never widen past it. */
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
      }

      .hs-input-group input:focus,
      .xy-input-group input:focus {
        outline: none;
        border-color: var(--primary-color);
      }

      .hs-input-group .unit {
        position: absolute;
        right: 8px;
        bottom: 10px;
        font-size: 10px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }

      .color-temp-controls {
        width: 100%;
      }

      .color-temp-slider-container {
        background: var(--secondary-background-color);
        border-radius: 8px;
        padding: 16px;
      }

      .temp-labels {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .color-temp-slider {
        width: 100%;
        height: 8px;
        border-radius: 4px;
        outline: none;
        appearance: none;
        background: linear-gradient(to right, #ffb366, #fff2e6, #cce6ff);
        cursor: pointer;
        margin-bottom: 8px;
      }

      .color-temp-slider::-webkit-slider-thumb {
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
        border: 2px solid white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      }

      .color-temp-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary-color);
        cursor: pointer;
        border: 2px solid white;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      }

      .kelvin-markers {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      .mired-input-group {
        margin-top: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .mired-input-group label {
        font-size: 12px;
        color: var(--secondary-text-color);
        font-weight: 500;
        min-width: 50px;
      }

      .mired-input-group input {
        flex: 1;
        padding: 6px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        font-size: 12px;
        text-align: center;
      }

      .mired-input-group input:focus {
        outline: none;
        border-color: var(--primary-color);
      }

      .effects-controls {
        width: 100%;
      }

      .effects-section {
        background: var(--secondary-background-color);
        border-radius: 8px;
        padding: 16px;
      }

      .effects-dropdown {
        width: 100%;
        max-width: 100%;
        overflow: visible !important;
        z-index: ${s.Mu.DROPDOWN_SELECT};
      }

      /* Custom Searchable Dropdown Styles */
      .custom-select-container {
        position: relative;
        width: 100%;
        z-index: ${s.Mu.DROPDOWN_SELECT};
      }

      .custom-select-trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
        font-family: inherit;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
      }

      .custom-select-trigger:hover {
        border-color: var(--primary-color);
        box-shadow: 0 2px 8px rgba(var(--rgb-primary-color), 0.1);
      }

      .custom-select-trigger.open {
        border-color: var(--primary-color);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        box-shadow: 0 2px 8px rgba(var(--rgb-primary-color), 0.15);
      }

      .custom-select-trigger[disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .selected-effect {
        flex: 1;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .dropdown-arrow {
        transition: transform 0.2s ease;
        color: var(--secondary-text-color);
        --mdc-icon-size: 20px;
      }

      .dropdown-arrow.rotated {
        transform: rotate(180deg);
      }

      .custom-dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--card-background-color);
        border: 1px solid var(--primary-color);
        border-top: none;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: ${s.Mu.DROPDOWN_MENU} !important;
        max-height: 300px;
        overflow: hidden;
      }

      .search-container {
        position: relative;
        padding: 12px;
        border-bottom: 1px solid var(--divider-color);
      }

      .effect-search {
        width: 100%;
        padding: 8px 12px 8px 36px;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        font-family: inherit;
        font-size: 14px;
        box-sizing: border-box;
      }

      .effect-search:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 1px var(--primary-color);
      }

      .search-icon {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--secondary-text-color);
        --mdc-icon-size: 16px;
        pointer-events: none;
      }

      .effect-options {
        max-height: 200px;
        overflow-y: auto;
      }

      .effect-option {
        padding: 10px 16px;
        cursor: pointer;
        transition: background-color 0.15s ease;
        border-bottom: 1px solid var(--divider-color);
      }

      .effect-option:last-child {
        border-bottom: none;
      }

      .effect-option:hover {
        background: var(--secondary-background-color);
      }

      .effect-option.selected {
        background: rgba(var(--rgb-primary-color), 0.1);
        color: var(--primary-color);
        font-weight: 500;
      }

      .effect-option span {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .no-results {
        padding: 16px;
        text-align: center;
        color: var(--secondary-text-color);
        font-style: italic;
      }

      .effect-select {
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box;
      }

      .effect-select ha-select {
        width: 100% !important;
        max-width: 100% !important;
      }

      .effect-description {
        margin-top: 12px;
        padding: 12px;
        background: rgba(var(--rgb-primary-color), 0.05);
        border-radius: 4px;
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.4;
      }

      /* RGBWW Combined Mode Styles */
      .rgbww-controls {
        margin-bottom: 16px;
      }

      .rgbww-divider {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 20px 0;
        color: var(--primary-text-color);
      }

      .rgbww-divider .divider-line {
        flex: 1;
        height: 1px;
        background: linear-gradient(to right, transparent, var(--divider-color), transparent);
      }

      .rgbww-divider .divider-label {
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-color);
        white-space: nowrap;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .rgbww-temp-controls {
        background: rgba(var(--rgb-primary-color), 0.05);
        border-radius: 8px;
        padding: 16px;
        border: 1px solid rgba(var(--rgb-primary-color), 0.1);
      }

      /* Responsive design */
      @media (max-width: 600px) {
        .color-controls {
          flex-direction: column;
          gap: 16px;
        }

        .color-wheel {
          width: 100px;
          height: 100px;
        }

        .rgb-inputs {
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .rgbww-divider .divider-label {
          font-size: 11px;
        }
      }
    `}};l([(0,a.MZ)({attribute:!1})],d.prototype,"hass",void 0),l([(0,a.MZ)()],d.prototype,"rgb_color",void 0),l([(0,a.MZ)()],d.prototype,"hs_color",void 0),l([(0,a.MZ)()],d.prototype,"xy_color",void 0),l([(0,a.MZ)()],d.prototype,"color_temp",void 0),l([(0,a.MZ)()],d.prototype,"effect",void 0),l([(0,a.MZ)()],d.prototype,"effect_speed",void 0),l([(0,a.MZ)()],d.prototype,"effect_intensity",void 0),l([(0,a.MZ)()],d.prototype,"effect_reverse",void 0),l([(0,a.MZ)()],d.prototype,"effect_list",void 0),l([(0,a.MZ)()],d.prototype,"mode",void 0),l([(0,a.MZ)()],d.prototype,"min_mireds",void 0),l([(0,a.MZ)()],d.prototype,"max_mireds",void 0),l([(0,a.MZ)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,a.MZ)({type:Boolean})],d.prototype,"rgbww_mode",void 0),l([(0,a.MZ)({type:Boolean})],d.prototype,"enable_color",void 0),l([(0,a.MZ)({type:Boolean})],d.prototype,"enable_color_temp",void 0),l([(0,a.wk)()],d.prototype,"_isDragging",void 0),l([(0,a.wk)()],d.prototype,"_currentRgb",void 0),l([(0,a.wk)()],d.prototype,"_currentHs",void 0),l([(0,a.wk)()],d.prototype,"_currentXy",void 0),l([(0,a.wk)()],d.prototype,"_currentColorTemp",void 0),l([(0,a.wk)()],d.prototype,"_ignoringNextEffectChange",void 0),l([(0,a.wk)()],d.prototype,"_processingEffectChange",void 0),l([(0,a.wk)()],d.prototype,"_effectDropdownOpen",void 0),l([(0,a.wk)()],d.prototype,"_effectSearchTerm",void 0),l([(0,a.wk)()],d.prototype,"_filteredEffects",void 0),l([(0,a.wk)()],d.prototype,"_focusedInput",void 0),l([(0,a.wk)()],d.prototype,"_lastChangedMode",void 0),d=l([(0,a.EM)("uc-light-color-picker")],d);var p=o(4865),u=o(2063),h=o(4830),g=o(6831),m=o(5646);class b{static rgbToHex(e,t,o){return"#"+[e,t,o].map(e=>{const t=e.toString(16);return 1===t.length?"0"+t:t}).join("")}static hexToRgb(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}static rgbToHsv(e,t,o){e/=255,t/=255,o/=255;const r=Math.max(e,t,o),n=Math.min(e,t,o);let i=0;const a=r,s=r-n,l=0===r?0:s/r;if(r!==n){switch(r){case e:i=(t-o)/s+(t<o?6:0);break;case t:i=(o-e)/s+2;break;case o:i=(e-t)/s+4}i/=6}return[Math.round(360*i),Math.round(100*l),Math.round(100*a)]}static hsvToRgb(e,t,o){e/=360,t/=100,o/=100;const r=Math.floor(6*e),n=6*e-r,i=o*(1-t),a=o*(1-n*t),s=o*(1-(1-n)*t);let l,c,d;switch(r%6){case 0:[l,c,d]=[o,s,i];break;case 1:[l,c,d]=[a,o,i];break;case 2:[l,c,d]=[i,o,s];break;case 3:[l,c,d]=[i,a,o];break;case 4:[l,c,d]=[s,i,o];break;case 5:[l,c,d]=[o,i,a];break;default:[l,c,d]=[0,0,0]}return[Math.round(255*l),Math.round(255*c),Math.round(255*d)]}static rgbToXy(e,t,o){t/=255,o/=255;const r=.4124*(e=(e/=255)>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(o=o>.04045?Math.pow((o+.055)/1.055,2.4):o/12.92),n=.2126*e+.7152*t+.0722*o,i=r+n+(.0193*e+.1192*t+.9505*o);return 0===i?[.3127,.329]:[r/i,n/i]}static xyToRgb(e,t,o=1){const r=o/t*e,n=o/t*(1-e-t);let i=3.2406*r+-1.5372*o+-.4986*n,a=-.9689*r+1.8758*o+.0415*n,s=.0557*r+-.204*o+1.057*n;return i=i<=.0031308?12.92*i:1.055*Math.pow(i,1/2.4)-.055,a=a<=.0031308?12.92*a:1.055*Math.pow(a,1/2.4)-.055,s=s<=.0031308?12.92*s:1.055*Math.pow(s,1/2.4)-.055,i=Math.max(0,Math.min(1,i)),a=Math.max(0,Math.min(1,a)),s=Math.max(0,Math.min(1,s)),[Math.round(255*i),Math.round(255*a),Math.round(255*s)]}static kelvinToMired(e){return Math.round(1e6/e)}static miredToKelvin(e){return Math.round(1e6/e)}static calculateWwCwMix(e,t,o){const r=(Math.max(t,Math.min(o,e))-t)/(o-t);return{ww:Math.round(255*(1-r)),cw:Math.round(255*r)}}}class f extends i.m{constructor(){super(...arguments),this.metadata={type:"light",title:"Light Control",description:"Advanced light control with color, brightness, and effects",author:"WJD Designs",version:"1.0.0",icon:"mdi:lightbulb",category:"interactive",tags:["light","color","brightness","control","smart"]},this.expandedPresets=new Set,this.draggedPresetIndex=null}createDefault(e,t){return{id:e||this.generateId("light"),type:"light",presets:[{id:this.generateId("preset"),name:"My Preset",action:"turn_on",entities:[],brightness:255,rgb_color:[255,255,255],effect:"",effect_speed:128,effect_intensity:128,effect_reverse:!1,text_color:"var(--text-primary-color)",icon_color:"var(--primary-color)",button_color:"var(--primary-color)",use_light_color_for_icon:!1,use_light_color_for_button:!0,use_icon_color_for_text:!1,smart_color:!0,button_style:"theme",show_label:!0,border_radius:8,enable_color:!0,enable_color_temp:!0}],layout:"buttons",button_alignment:"center",allow_wrapping:!0,button_gap:.8,columns:3,show_labels:!0,button_style:"theme",default_transition_time:.5,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}getButtonStyleOptions(e){return[...g.xz.map(e=>{return{value:e,label:(t=e,t.replace(/[-_]/g," ").replace(/\b\w/g,e=>e.toUpperCase()))};var t}),{value:"filled",label:"Filled (solid background)"},{value:"outlined",label:"Outlined (border only)"},{value:"text",label:"Text (minimal style)"}]}getSupportedColorModes(e,t){const o=t.states[e];return o&&o.attributes.supported_color_modes?o.attributes.supported_color_modes:["onoff"]}hasRgbwwSupport(e,t){return!(!e||0===e.length)&&e.some(e=>{const o=t.states[e],r=(null==o?void 0:o.attributes.supported_color_modes)||[],n=r.some(e=>"rgbww"===e||"rgbcct"===e||"rgbww_color"===e),i=r.some(e=>"xy"===e||"hs"===e||"rgb"===e),a=r.includes("color_temp");return n||i&&a})}getCurrentColorMode(e,t){const o=t.states[e];return(null==o?void 0:o.attributes.color_mode)||"onoff"}getEffectList(e,t){const o=t.states[e];return(null==o?void 0:o.attributes.effect_list)||[]}findSimilarEffect(e,t){const o=e.toLowerCase(),r=t.find(e=>e.toLowerCase()===o);if(r)return r;const n=t.find(e=>{const t=e.toLowerCase();return t.includes(o)||o.includes(t)});if(n)return n;const i={colorloop:["rainbow","color_loop","colorloop"],rainbow:["colorloop","rainbow","color_loop"],strobe:["blink","flash","strobe"],blink:["strobe","flash","blink"],breathe:["fade","breathing","breathe"],fade:["breathe","breathing","fade"],solid:["static","solid","none"]}[o]||[];for(const e of i){const o=t.find(t=>t.toLowerCase().includes(e));if(o)return o}return null}getCommonSupportedEffects(e,t){if(0===e.length)return["colorloop","random"];const o=e.map(e=>this.getEffectList(e,t));if(1===o.length)return o[0];const r=o.reduce((e,t)=>e.filter(e=>t.some(t=>e.toLowerCase()===t.toLowerCase())));if(0===r.length){const e=[],t=["colorloop","color_loop","rainbow","strobe","flash","blink","fade","breathe","breathing","solid","static"];for(const r of t)for(const t of o){const n=t.find(e=>e.toLowerCase().includes(r.toLowerCase()));n&&!e.includes(n)&&o.every(e=>e.some(e=>e.toLowerCase().includes(r.toLowerCase())||e.toLowerCase()===n.toLowerCase()))&&e.push(n)}return 0===e.length?["colorloop","strobe","fade"]:e}return r}getColorTempRange(e,t){const o=t.states[e];return{min:(null==o?void 0:o.attributes.min_mireds)||153,max:(null==o?void 0:o.attributes.max_mireds)||500}}getPresetColorTempRange(e,t){const o=e.entities||[];if(0===o.length)return{min:153,max:500};let r=153,n=500;for(const e of o){const o=t.states[e];o&&(r=Math.max(r,o.attributes.min_mireds||153),n=Math.min(n,o.attributes.max_mireds||500))}return r<n?{min:r,max:n}:{min:153,max:500}}async callLightService(e,t,o,r){try{await r.callService("light",e,Object.assign({entity_id:t},o))}catch(r){console.error(`Failed to call light.${e} for ${t}:`,r),console.error("Service data was:",o);const n=new CustomEvent("hass-notification",{detail:{message:`Failed to control light ${t}: ${r}`}});document.dispatchEvent(n)}finally{this.triggerPreviewUpdate(!0)}}renderGeneralTab(e,t,o,i){var a,s,l;const c=e,d=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";return r.qy`
      ${this.injectUcFormStyles()}
      <div class="general-tab">
        <!-- Preset Configuration -->
        <div class="presets-configuration">
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,n.kg)("editor.light.section_presets",d,"Light Presets")}
          </div>
          <div class="field-description" style="margin-bottom: 16px;">
            ${(0,n.kg)("editor.light.section_presets_desc",d,"Configure light presets with specific colors, brightness, and effects. Each preset can control different entities.")}
          </div>

          ${(c.presets||[]).map((e,r)=>this.renderPresetEditor(e,r,c,t,i,o))}

          <button
            class="add-preset-btn"
            @click=${()=>this.addPreset(c,i)}
            style="width: 100%; padding: 12px; border: 2px dashed var(--primary-color); background: transparent; color: var(--primary-color); border-radius: var(--uc-r-8, 8px); cursor: pointer; font-size: 14px; font-weight: 500; margin-top: 16px;"
          >
            ${(0,n.kg)("editor.light.add_preset",d,"+ Add New Preset")}
          </button>
        </div>

        <!-- Layout Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px; margin-top: 32px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            ${(0,n.kg)("editor.light.section_layout",d,"Layout Configuration")}
          </div>
          <div class="field-description" style="margin-bottom: 16px;">
            Configure how preset buttons are arranged and displayed
          </div>

          <!-- Layout Style -->
          ${this.renderFieldSection("Layout Style","Choose the overall arrangement style for preset buttons",t,{layout:c.layout||"buttons"},[this.selectField("layout",[{value:"buttons",label:"Flexible Buttons"},{value:"grid",label:"Grid Layout"}])],e=>{const t=e.detail.value.layout;t!==c.layout&&(i({layout:t}),this.triggerPreviewUpdate())})}

          <!-- Button Alignment -->
          ${this.renderFieldSection("Button Alignment","Choose how buttons are aligned within the container",t,{button_alignment:c.button_alignment||"center"},[this.selectField("button_alignment",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"space-between",label:"Space Between"},{value:"space-around",label:"Space Around"},{value:"space-evenly",label:"Space Evenly"}])],e=>{const t=e.detail.value.button_alignment;t!==c.button_alignment&&(i({button_alignment:t}),this.triggerPreviewUpdate())})}
          </div>
        </div>

        <!-- Allow Wrapping Toggle -->
        ${this.renderSettingsSection((0,n.kg)("editor.light.section_wrapping",d,"Button Wrapping"),(0,n.kg)("editor.light.section_wrapping_desc",d,"Control whether buttons wrap to the next line"),[{title:"Allow Button Wrapping",description:"Allow buttons to wrap to the next line when they exceed the container width",hass:t,data:{allow_wrapping:null===(s=c.allow_wrapping)||void 0===s||s},schema:[this.booleanField("allow_wrapping")],onChange:e=>{i({allow_wrapping:e.detail.value.allow_wrapping}),this.triggerPreviewUpdate()}}])}

        <!-- Gap Configuration -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            Gap Configuration
          </div>

          ${this.renderSliderField("Gap Between Buttons","Set the spacing between preset buttons (in rem units)",c.button_gap||.8,.8,0,5,.1,e=>{i({button_gap:e}),this.triggerPreviewUpdate()},"rem")}
        </div>
        ${"grid"===c.layout?r.qy`
                <div
                  class="settings-section"
                  style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
                >
                  <div
                    class="section-title"
                    style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
                  >
                    Grid Settings
                  </div>
                  <div class="field-description" style="margin-bottom: 16px;">
                    Configure grid layout options
                  </div>

                  ${this.renderFieldSection("Columns","Number of columns in grid layout",t,{columns:c.columns||3},[this.selectField("columns",[{value:"1",label:"1 Column"},{value:"2",label:"2 Columns"},{value:"3",label:"3 Columns"},{value:"4",label:"4 Columns"},{value:"5",label:"5 Columns"},{value:"6",label:"6 Columns"}])],e=>{const t=Number(e.detail.value.columns);isNaN(t)||t===c.columns||(i({columns:t}),this.triggerPreviewUpdate())})}
                </div>
              `:""}

        <!-- Global Settings -->
        <div
          class="settings-section"
          style="background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); padding: 16px; margin-bottom: 16px;"
        >
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            Global Settings
          </div>
          <div class="field-description" style="margin-bottom: 16px;">
            Settings that apply to all presets
          </div>

          ${this.renderSliderField("Default Transition Time","Default transition time for all presets (can be overridden per preset)",null!==(l=c.default_transition_time)&&void 0!==l?l:.5,.5,0,10,.1,e=>{e!==c.default_transition_time&&(i({default_transition_time:e}),this.triggerPreviewUpdate())},"s")}

          ${this.renderFieldSection("Button Style","Default visual style for preset buttons. Theme inherits the card theme control recipe. Per-preset styles can override this.",t,{button_style:c.button_style||"theme"},[this.selectField("button_style",this.withThemeInheritOption(d,o,"light","button_style","flat",this.getButtonStyleOptions(d)))],e=>{i({button_style:e.detail.value.button_style}),setTimeout(()=>this.triggerPreviewUpdate(),50)})}
          </div>
        </div>

        <!-- Preset Configuration -->
        <div class="presets-configuration">
          <div
            class="section-title"
            style="font-size: 18px; font-weight: 700; text-transform: uppercase; color: var(--primary-color); margin-bottom: 16px; letter-spacing: 0.5px;"
          >
            Light Presets
          </div>
          <div class="field-description" style="margin-bottom: 16px;">
            Configure light presets with specific colors, brightness, and effects. Each preset can
            control different entities.
          </div>

          ${(c.presets||[]).map((e,r)=>this.renderPresetEditor(e,r,c,t,i,o))}

          <button
            class="add-preset-btn"
            @click=${()=>this.addPreset(c,i)}
            style="width: 100%; padding: 12px; border: 2px dashed var(--primary-color); background: transparent; color: var(--primary-color); border-radius: var(--uc-r-8, 8px); cursor: pointer; font-size: 14px; font-weight: 500; margin-top: 16px;"
          >
            + Add New Preset
          </button>
        </div>
      </div>
    `}renderOtherTab(e,t,o,i){var a,s,l;const c=e,d=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en";return r.qy`
      <div class="other-tab">
        <!-- Import/Export Presets -->
        ${this.renderSettingsSection((0,n.kg)("editor.light.section_import_export",d,"Import/Export"),(0,n.kg)("editor.light.section_import_export_desc",d,"Save and share your preset configurations"),[{title:"Export Presets",description:"Export all presets as JSON for backup or sharing",hass:t,data:{export_ready:(c.presets||[]).length>0},schema:[{name:"export_ready",label:"Export Configuration",selector:{action:{text:"Export JSON"}}}],onChange:()=>this.exportPresets(c)},{title:"Import Presets",description:"Import presets from JSON configuration",hass:t,data:{import_data:""},schema:[{name:"import_data",label:"Paste JSON Configuration",selector:{text:{multiline:!0,placeholder:"Paste exported JSON here..."}}}],onChange:e=>this.importPresets(e.detail.value.import_data,c,i,t)}])}

        <!-- Advanced Options -->
        ${this.renderSettingsSection((0,n.kg)("editor.light.section_advanced",d,"Advanced Options"),(0,n.kg)("editor.light.section_advanced_desc",d,"Fine-tune module behavior"),[{title:"Confirm Actions",description:"Show confirmation dialog before applying presets",hass:t,data:{confirm_actions:null!==(s=c.confirm_actions)&&void 0!==s&&s},schema:[this.booleanField("confirm_actions")],onChange:e=>{i({confirm_actions:e.detail.value.confirm_actions}),this.triggerPreviewUpdate()}},{title:"Show Status Feedback",description:"Show visual feedback when presets are applied",hass:t,data:{show_feedback:null===(l=c.show_feedback)||void 0===l||l},schema:[this.booleanField("show_feedback")],onChange:e=>{i({show_feedback:e.detail.value.show_feedback}),this.triggerPreviewUpdate()}}])}
      </div>
    `}renderPresetEditor(e,t,o,n,i,a){const s=()=>{const e=[...o.presets||[]];e.splice(t,1),i({presets:e}),this.triggerPreviewUpdate()},l=()=>{const t=Object.assign(Object.assign({},e),{id:this.generateId("preset"),name:`${e.name} Copy`}),r=[...o.presets||[],t];i({presets:r}),this.triggerPreviewUpdate()},c=(e,t)=>{const r=[...o.presets||[]],[n]=r.splice(e,1);r.splice(t,0,n),i({presets:r}),this.triggerPreviewUpdate()};return r.qy`
      <div
        class="preset-item"
        style="margin-bottom: 24px; background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); border: 1px solid var(--divider-color); overflow: hidden;"
        data-preset-id="${e.id}"
        data-preset-index="${t}"
        @dragover=${e=>this.handlePresetDragOver(e)}
        @dragenter=${e=>this.handlePresetDragEnter(e)}
        @dragleave=${e=>this.handlePresetDragLeave(e)}
        @drop=${e=>this.handlePresetDrop(e,t,c)}
      >
        <div
          class="preset-header"
          style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: rgba(var(--rgb-primary-color), 0.05); border-bottom: 1px solid var(--divider-color); cursor: pointer;"
          @click=${e=>this.togglePresetHeader(e)}
        >
          <div style="display: flex; align-items: center; gap: 12px;">
            <div
              class="drag-handle"
              style="padding: 8px; margin: -8px; cursor: grab; border-radius: var(--uc-r-4, 4px); transition: background-color 0.2s ease;"
              draggable="true"
              @dragstart=${e=>this.handlePresetDragStart(e,t)}
              @dragend=${e=>this.handlePresetDragEnd(e)}
              @click=${e=>e.stopPropagation()}
              @mousedown=${e=>e.stopPropagation()}
              .title=${"Drag to reorder"}
              @mouseenter=${e=>{e.target.style.backgroundColor="rgba(var(--rgb-primary-color), 0.1)"}}
              @mouseleave=${e=>{e.target.style.backgroundColor="transparent"}}
            >
              <ha-icon
                icon="mdi:drag"
                style="color: var(--secondary-text-color); pointer-events: none;"
              ></ha-icon>
            </div>
            <div style="font-weight: 600; color: var(--primary-text-color);">
              ${e.name||`Preset ${t+1}`}
            </div>
            ${e.icon?r.qy`<ha-icon icon="${e.icon}" style="color: var(--primary-color);"></ha-icon>`:""}
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <ha-icon-button
              @click=${e=>{e.stopPropagation(),l()}}
              .title=${"Duplicate preset"}
            >
              <ha-icon icon="mdi:content-duplicate"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              @click=${e=>{e.stopPropagation(),s()}}
              .title=${"Delete preset"}
              .disabled=${(o.presets||[]).length<=1}
            >
              <ha-icon icon="mdi:delete"></ha-icon>
            </ha-icon-button>
            <ha-icon
              class="expand-caret"
              icon="mdi:chevron-down"
              style="color: var(--secondary-text-color); transition: transform 0.2s ease; transform: ${this.expandedPresets.has(e.id)?"rotate(180deg)":"rotate(0deg)"}; cursor: pointer; padding: 8px; margin: -8px;"
              @click=${e=>{e.stopPropagation();const t=e.target,o=t.closest(".preset-item"),r=null==o?void 0:o.querySelector(".preset-content");if(o&&r&&t){const e=o.getAttribute("data-preset-id")||"";this.expandedPresets.has(e)?(this.expandedPresets.delete(e),r.style.display="none",t.style.transform="rotate(0deg)"):(this.expandedPresets.add(e),r.style.display="block",t.style.transform="rotate(180deg)")}}}
            ></ha-icon>
          </div>
        </div>

        <div
          class="preset-content"
          style="padding: 16px; display: ${this.expandedPresets.has(e.id)?"block":"none"};"
        >
          ${this.renderPresetConfiguration(e,n,r=>{const n=[...o.presets||[]];n[t]=Object.assign(Object.assign({},e),r),i({presets:n}),this.triggerPreviewUpdate()},o,a)}
        </div>
      </div>
    `}renderPresetConfiguration(e,t,o,n,i){var a,s,l,c,d,p;return r.qy`
      <!-- Action Selection -->
      <div class="field-group" style="margin-bottom: 16px;">
        ${this.renderFieldSection("Preset Action","Choose what this preset should do",t,{action:e.action||"turn_on"},[this.selectField("action",[{value:"turn_on",label:"Turn On (with settings)"},{value:"turn_off",label:"Turn Off"},{value:"toggle",label:"Toggle"}])],e=>o({action:e.detail.value.action}))}
      </div>

      <!-- Preset Name -->
      <div class="field-group" style="margin-bottom: 16px;">
        <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
          Preset Name
        </div>
        <div class="field-description" style="margin-bottom: 12px;">
          Display name for this preset
        </div>
        <ha-textfield
          .value=${e.name||""}
          placeholder="Enter preset name"
          @input=${e=>{var t;const r=e.target,n=(null===(t=r.shadowRoot)||void 0===t?void 0:t.querySelector("input"))||r,i=r.value,a=n.selectionStart,s=n.selectionEnd;o({name:i}),requestAnimationFrame(()=>{n&&"number"==typeof a&&(r.value=i,n.value=i,n.setSelectionRange(a,s||a))}),setTimeout(()=>{n&&"number"==typeof a&&(r.value=i,n.value=i,n.setSelectionRange(a,s||a))},0),setTimeout(()=>{n&&"number"==typeof a&&(r.value=i,n.value=i,n.setSelectionRange(a,s||a))},10)}}
          style="width: 100%; --mdc-theme-primary: var(--primary-color);"
        ></ha-textfield>
      </div>

      <!-- Preset Icon -->
      <div class="field-group" style="margin-bottom: 16px;">
        <div class="field-title" style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">
          Preset Icon
        </div>
        <div class="field-description" style="margin-bottom: 12px;">
          Optional icon for this preset (e.g., mdi:lightbulb)
        </div>
        ${this.renderUcForm(t,{icon:e.icon||""},[this.iconField("icon")],e=>o(e.detail.value),!1)}
      </div>

      <!-- Entity Selection -->
      <div class="field-group" style="margin-bottom: 16px;">
        ${this.renderFieldSection("Target Entities","Select which lights this preset will control",t,{entities:e.entities||[]},[{name:"entities",selector:{entity:{domain:["light","group"],multiple:!0}}}],e=>o({entities:e.detail.value.entities}))}

        ${"turn_off"!==(e.action||"turn_on")?r.qy`
                <!-- Light Controls: Color, White, Effects & Test -->
                <div class="light-controls-section" style="margin-top: 20px; margin-bottom: 20px;">
                  <div
                    style="font-weight: 600; margin-bottom: 16px; color: var(--primary-text-color); font-size: 16px;"
                  >
                    Light Controls
                  </div>

                  <uc-light-color-picker
                    .hass=${t}
                    .rgb_color=${e.rgb_color}
                    .hs_color=${e.hs_color}
                    .xy_color=${e.xy_color}
                    .color_temp=${e.color_temp}
                    .effect=${e.effect}
                    .effect_speed=${e.effect_speed}
                    .effect_intensity=${e.effect_intensity}
                    .effect_reverse=${e.effect_reverse}
                    .effect_list=${this.getCommonSupportedEffects(e.entities||[],t)}
                    .mode=${"effect"===this.getPresetLightMode(e)?"effect":this.getPresetColorMode(e)}
                    .min_mireds=${this.getPresetColorTempRange(e,t).min}
                    .max_mireds=${this.getPresetColorTempRange(e,t).max}
                    .rgbww_mode=${this.hasRgbwwSupport(e.entities||[],t)}
                    .enable_color=${null===(a=e.enable_color)||void 0===a||a}
                    .enable_color_temp=${null===(s=e.enable_color_temp)||void 0===s||s}
                    @color-changed=${e=>{const t=e.detail,r={};"effect"===t.mode?(r.effect=t.effect||"",r.color_temp=void 0,r.rgb_color=void 0,r.hs_color=void 0,r.xy_color=void 0,r.rgbw_color=void 0,r.rgbww_color=void 0,r.white=void 0):"rgbww"===t.mode?(r.rgb_color=t.rgb_color,r.hs_color=t.hs_color,r.xy_color=t.xy_color,r.color_temp=t.color_temp,r.effect=""):"color_temp"===t.mode?(r.color_temp=t.color_temp,r.rgb_color=void 0,r.hs_color=void 0,r.xy_color=void 0,r.rgbw_color=void 0,r.rgbww_color=void 0,r.white=void 0,r.effect=""):(r.rgb_color=t.rgb_color,r.hs_color=t.hs_color,r.xy_color=t.xy_color,r.color_temp=void 0,r.rgbw_color=void 0,r.rgbww_color=void 0,r.white=void 0,r.effect=""),o(r)}}
                    @enable-color-changed=${e=>{o({enable_color:e.detail.value})}}
                    @enable-color-temp-changed=${e=>{o({enable_color_temp:e.detail.value})}}
                    @test-preset=${()=>{this.applyPreset(e,n,t,i)}}
                  ></uc-light-color-picker>
                </div>
              `:""}

        <!-- Button Style (moved here from global settings) -->
        <div
          style="margin-top: 16px; background: rgba(var(--rgb-accent-color), 0.05); border-radius: var(--uc-r-6, 6px); padding: 12px;"
        >
          <div style="font-weight: 500; margin-bottom: 12px; color: var(--primary-text-color);">
            Button Appearance
          </div>

          ${this.renderFieldSection("Button Style","Visual style for this preset button. Theme inherits the card theme control recipe.",t,{button_style:e.button_style||n.button_style||"theme"},[this.selectField("button_style",this.withThemeInheritOption((null===(l=null==t?void 0:t.locale)||void 0===l?void 0:l.language)||"en",i,"light","button_style","flat",this.getButtonStyleOptions((null===(c=null==t?void 0:t.locale)||void 0===c?void 0:c.language)||"en")))],e=>o({button_style:e.detail.value.button_style}))}

          <!-- Border Radius (hidden for text-like / minimal styles) -->
          ${(0,m.eJ)(e.button_style||n.button_style||"filled")?"":r.qy`
                  <div style="margin-top: 12px;">
                    ${this.renderSliderField("Border Radius","Adjust button roundness (0 = square, 50 = circle)",e.border_radius||8,8,0,50,1,e=>o({border_radius:e}),"px")}
                  </div>
                `}

          ${this.renderFieldSection("Show Label","Display preset name on this button",t,{show_label:null===(d=e.show_label)||void 0===d||d},[this.booleanField("show_label")],e=>o({show_label:e.detail.value.show_label}))}
        </div>
      </div>

      ${"turn_off"!==(e.action||"turn_on")?r.qy`
              <!-- Light Controls Section -->
              <div class="light-controls-section" style="margin-top: 20px;">
                <div
                  style="font-weight: 600; margin-bottom: 16px; color: var(--primary-text-color); font-size: 16px;"
                >
                  Light Controls
                </div>

                <!-- Brightness Control -->
                <div class="brightness-control" style="margin-bottom: 20px;">
                  ${this.renderSliderField("Brightness","",e.brightness?Math.round(e.brightness/255*100):100,100,1,100,1,e=>o({brightness:Math.round(e/100*255)}),"%")}
                </div>

                <!-- Visual Customization -->
                <div
                  class="visual-customization"
                  style="margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--divider-color);"
                ></div>
              </div>
            `:r.qy`
              <div
                style="padding: 20px; text-align: center; color: var(--secondary-text-color); background: var(--secondary-background-color); border-radius: var(--uc-r-8, 8px); font-style: italic; margin-top: 20px;"
              >
                Light controls are not available for "Turn Off" action
              </div>
            `}

      ${"turn_off"!==(e.action||"turn_on")?r.qy`
          <div
            style="font-weight: 600; margin-bottom: 16px; color: var(--primary-text-color); font-size: 16px;"
          >
            Visual Customization
          </div>

          <!-- Smart Color Toggles -->
          <div
            class="smart-color-toggles"
            style="margin-bottom: 16px; background: rgba(var(--rgb-primary-color), 0.05); border-radius: var(--uc-r-6, 6px); padding: 12px;"
          >
            <div style="font-weight: 500; margin-bottom: 12px; color: var(--primary-text-color);">
              Smart Color Options
            </div>

            <!-- Smart Contrast Mode (Top Priority) -->
            ${this.renderFieldSection("Smart Contrast Mode","Auto-contrast text & icon (white/black) based on button background",t,{smart_color:null===(p=e.smart_color)||void 0===p||p},[this.booleanField("smart_color")],e=>o({smart_color:e.detail.value.smart_color}))}

            <!-- Use Light Color for Icon (disabled if smart contrast is on) -->
            <div style="${e.smart_color?"opacity: 0.5; pointer-events: none;":""}">
              ${this.renderFieldSection("Use Light Color for Icon","Icon color matches the preset's light color",t,{use_light_color_for_icon:e.use_light_color_for_icon||!1},[this.booleanField("use_light_color_for_icon")],t=>{e.smart_color||o({use_light_color_for_icon:t.detail.value.use_light_color_for_icon})})}
            </div>

            <!-- Use Light Color for Button (disabled if smart contrast is on) -->
            <div style="${e.smart_color?"opacity: 0.5; pointer-events: none;":""}">
              ${this.renderFieldSection("Use Light Color for Button","Button background matches the preset's light color",t,{use_light_color_for_button:e.use_light_color_for_button||!1},[this.booleanField("use_light_color_for_button")],t=>{e.smart_color||o({use_light_color_for_button:t.detail.value.use_light_color_for_button})})}
            </div>

            <!-- Use Icon Color for Text (disabled if smart contrast is on) -->
            <div style="${e.smart_color?"opacity: 0.5; pointer-events: none;":""}">
              ${this.renderFieldSection("Use Icon Color for Text","Text color matches the icon color",t,{use_icon_color_for_text:e.use_icon_color_for_text||!1},[this.booleanField("use_icon_color_for_text")],t=>{e.smart_color||o({use_icon_color_for_text:t.detail.value.use_icon_color_for_text})})}
            </div>
          </div>

          <!-- Custom Colors (only show when smart contrast is disabled) -->
          ${e.smart_color?r.qy`
                  <div
                    style="text-align: center; padding: 24px; color: var(--secondary-text-color); font-style: italic; background: rgba(var(--rgb-primary-color), 0.05); border-radius: var(--uc-r-6, 6px);"
                  >
                    Smart Contrast Mode is enabled - colors are automatically optimized
                  </div>
                `:r.qy`
                  <div
                    class="custom-colors"
                    style="display: flex; flex-direction: column; gap: 16px;"
                  >
                    <!-- Text Color -->
                    ${e.use_icon_color_for_text?r.qy`
                          <div class="color-field disabled">
                            <div
                              style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: var(--secondary-text-color);"
                            >
                              Text Color
                            </div>
                            <div
                              style="padding: 20px; text-align: center; color: var(--secondary-text-color); font-style: italic; background: var(--secondary-background-color); border-radius: var(--uc-r-4, 4px);"
                            >
                              Using icon color
                            </div>
                          </div>
                        `:r.qy`
                          <div class="color-field">
                            <div
                              style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: var(--primary-text-color);"
                            >
                              Text Color
                            </div>
                            <ultra-color-picker
                              .hass=${t}
                              .value=${e.text_color||"var(--primary-text-color)"}
                              @value-changed=${e=>o({text_color:e.detail.value})}
                            ></ultra-color-picker>
                          </div>
                        `}

                    <!-- Icon Color -->
                    ${e.use_light_color_for_icon?r.qy`
                          <div class="color-field disabled">
                            <div
                              style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: var(--secondary-text-color);"
                            >
                              Icon Color
                            </div>
                            <div
                              style="padding: 20px; text-align: center; color: var(--secondary-text-color); font-style: italic; background: var(--secondary-background-color); border-radius: var(--uc-r-4, 4px);"
                            >
                              Using light color
                            </div>
                          </div>
                        `:r.qy`
                          <div class="color-field">
                            <div
                              style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: var(--primary-text-color);"
                            >
                              Icon Color
                            </div>
                            <ultra-color-picker
                              .hass=${t}
                              .value=${e.icon_color||"var(--primary-color)"}
                              @value-changed=${e=>o({icon_color:e.detail.value})}
                            ></ultra-color-picker>
                          </div>
                        `}

                    <!-- Button Color -->
                    ${e.use_light_color_for_button?r.qy`
                          <div class="color-field disabled">
                            <div
                              style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: var(--secondary-text-color);"
                            >
                              Button Color
                            </div>
                            <div
                              style="padding: 20px; text-align: center; color: var(--secondary-text-color); font-style: italic; background: var(--secondary-background-color); border-radius: var(--uc-r-4, 4px);"
                            >
                              Using light color
                            </div>
                          </div>
                        `:r.qy`
                          <div class="color-field">
                            <div
                              style="font-size: 14px; font-weight: 500; margin-bottom: 8px; color: var(--primary-text-color);"
                            >
                              Button Color
                            </div>
                            <ultra-color-picker
                              .hass=${t}
                              .value=${e.button_color||"var(--primary-color)"}
                              @value-changed=${e=>o({button_color:e.detail.value})}
                            ></ultra-color-picker>
                          </div>
                        `}
                  </div>
                `}
        </div>
            `:""}

        <!-- Advanced Settings -->
        <div
          class="advanced-settings"
          style="margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--divider-color);"
        >
          <div style="font-weight: 500; margin-bottom: 12px; color: var(--primary-text-color);">
            Advanced Settings
          </div>
          ${this.renderSliderField("Transition Time (seconds)","Override default transition time for this preset",e.transition_time||n.default_transition_time||.5,n.default_transition_time||.5,0,10,.1,e=>o({transition_time:e}),"s")}
        </div>

        <!-- Test Preset -->
        <div
          style="margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--divider-color);"
        >
          <button
            @click=${()=>this.applyPreset(e,n,t)}
            style="width: 100%; padding: 12px; background: var(--primary-color); color: var(--text-primary-color); border: none; border-radius: var(--uc-r-6, 6px); cursor: pointer; font-weight: 500; font-size: 14px;"
            .disabled=${!e.entities||0===e.entities.length}
          >
            <ha-icon icon="mdi:play" style="margin-right: 8px;"></ha-icon>
            Test Preset
          </button>
        </div>
      </div>
    `}handlePresetDragStart(e,t){this.draggedPresetIndex=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.toString()));const o=e.target.closest(".preset-item");o&&o.classList.add("dragging")}handlePresetDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move")}handlePresetDragEnter(e){e.preventDefault();const t=e.currentTarget;t&&!t.classList.contains("dragging")&&(t.style.borderTop="3px solid var(--primary-color)",t.style.backgroundColor="rgba(var(--rgb-primary-color), 0.1)")}handlePresetDragLeave(e){const t=e.currentTarget;t&&(t.style.borderTop="",t.style.backgroundColor="")}handlePresetDrop(e,t,o){e.preventDefault();const r=e.currentTarget;r.style.borderTop="",r.style.backgroundColor="",null!==this.draggedPresetIndex&&this.draggedPresetIndex!==t&&o(this.draggedPresetIndex,t),document.querySelectorAll(".preset-item").forEach(e=>{e.style.borderTop="",e.style.backgroundColor="",e.classList.remove("dragging")}),this.draggedPresetIndex=null}handlePresetDragEnd(e){var t;const o=null===(t=e.target)||void 0===t?void 0:t.closest(".preset-item");o&&o.classList.remove("dragging"),document.querySelectorAll(".preset-item").forEach(e=>{e.style.borderTop=""}),this.draggedPresetIndex=null}togglePresetHeader(e){const t=e.currentTarget.closest(".preset-item");if(!t)return;const o=t.getAttribute("data-preset-id")||"";if(!o)return;const r=t.querySelector(".preset-content"),n=t.querySelector(".expand-caret");this.expandedPresets.has(o)?this.expandedPresets.delete(o):this.expandedPresets.add(o),r&&n&&(this.expandedPresets.has(o)?(r.style.display="block",n.style.transform="rotate(180deg)"):(r.style.display="none",n.style.transform="rotate(0deg)"))}togglePresetExpanded(e){const t=document.querySelector(`[data-preset-id="${e}"]`);if(t){const o=t.querySelector(".preset-content"),r=t.querySelector(".expand-caret");o&&r&&(this.expandedPresets.has(e)?(this.expandedPresets.delete(e),o.style.display="none",r.style.transform="rotate(0deg)"):(this.expandedPresets.add(e),o.style.display="block",r.style.transform="rotate(180deg)"))}}addPreset(e,t){const o=this.generateId("preset"),r={id:o,name:`Preset ${(e.presets||[]).length+1}`,action:"turn_on",entities:[],brightness:255,hs_color:[0,0],text_color:"var(--text-primary-color)",icon_color:"var(--primary-color)",button_color:"var(--primary-color)",use_light_color_for_icon:!1,use_light_color_for_button:!0,use_icon_color_for_text:!1,smart_color:!0,button_style:"theme",show_label:!0,border_radius:8,enable_color:!0,enable_color_temp:!0};this.expandedPresets.add(o),t({presets:[...e.presets||[],r]}),this.triggerPreviewUpdate()}getPresetColorMode(e){if((e.rgb_color||e.hs_color||e.xy_color)&&void 0!==e.color_temp){if(e.hs_color)return"hs";if(e.rgb_color)return"rgb";if(e.xy_color)return"xy"}return e.color_temp?"color_temp":e.hs_color?"hs":e.xy_color?"xy":e.rgb_color?"rgb":"hs"}getPresetLightMode(e){return e.effect&&""!==e.effect.trim()?"effect":e.color_temp?"white":(e.rgb_color||e.hs_color||e.xy_color,"color")}exportPresets(e){const t={presets:e.presets||[],exported_at:(new Date).toISOString(),version:"1.0"},o=JSON.stringify(t,null,2),r=new Blob([o],{type:"application/json"}),n=URL.createObjectURL(r),i=document.createElement("a");i.href=n,i.download="ultra-card-light-presets.json",i.click(),URL.revokeObjectURL(n)}importPresets(e,t,o,r){try{if(!e.trim())return;const n=JSON.parse(e);if(n.presets&&Array.isArray(n.presets)){const e=n.presets.map(e=>Object.assign(Object.assign({},e),{id:this.generateId("preset")})),i=this._detectLightPresetEntities(e);if(i.length>0&&r)this._showLightPresetMappingDialog(e,i,t,o,r);else{o({presets:[...t.presets||[],...e]}),this.triggerPreviewUpdate();const r=new CustomEvent("hass-notification",{detail:{message:`Successfully imported ${e.length} presets`}});document.dispatchEvent(r)}}}catch(e){const t=new CustomEvent("hass-notification",{detail:{message:"Failed to import presets: Invalid JSON format"}});document.dispatchEvent(t)}}_detectLightPresetEntities(e){const t=new Map;return e.forEach((e,o)=>{e.entities&&Array.isArray(e.entities)&&e.entities.forEach((r,n)=>{var i;if(t.has(r)){const a=t.get(r);a.locations.push(`presets[${o}].entities[${n}]`),e.name&&!(null===(i=a.context)||void 0===i?void 0:i.includes(e.name))&&(a.context=a.context?`${a.context}, ${e.name}`:e.name)}else t.set(r,{entityId:r,locations:[`presets[${o}].entities[${n}]`],moduleType:"light",context:e.name})})}),Array.from(t.values())}_showLightPresetMappingDialog(e,t,o,r,n){n&&p.n.show(n,"Map Entities for Light Presets",t,t=>{console.log("✅ Apply light preset mappings:",t);const n=this._applyMappingsToLightPresets(e,t),i=[...o.presets||[],...n];r({presets:i}),this.triggerPreviewUpdate();const a=new CustomEvent("hass-notification",{detail:{message:`Successfully imported ${n.length} presets with ${t.length} entity mapping(s)`}});document.dispatchEvent(a)},()=>{console.log("❌ Cancel light preset mapping");const t=[...o.presets||[],...e];r({presets:t}),this.triggerPreviewUpdate();const n=new CustomEvent("hass-notification",{detail:{message:`Successfully imported ${e.length} presets`}});document.dispatchEvent(n)})}_applyMappingsToLightPresets(e,t){if(0===t.length)return e;const o=new Map;return t.forEach(e=>o.set(e.original,e.mapped)),e.map(e=>{var t;return Object.assign(Object.assign({},e),{entities:(null===(t=e.entities)||void 0===t?void 0:t.map(e=>o.get(e)||e))||[]})})}async applyPreset(e,t,r,n){var i,a,s;if(t.confirm_actions&&!await u.W.confirm("Apply Preset",`Apply preset "${e.name}"?`,{confirmText:"Apply"}))return;if(!1!==(null==n?void 0:n.haptic_feedback)){const{forwardHaptic:e}=await Promise.resolve().then(()=>o(8153));e("medium")}const l=e.entities||[];if(0===l.length){const e=new CustomEvent("hass-notification",{detail:{message:"No entities configured for this preset"}});return void document.dispatchEvent(e)}const c=e.action||"turn_on";for(const o of l){const l=this.resolveEntity(o,n)||o;if("turn_off"===c){await this.callLightService("turn_off",l,{},r);continue}const d={},p=r.states[l],u="wled"===(null==p?void 0:p.attributes.integration)||"wled"===(null==p?void 0:p.attributes.device_class)||(null==p?void 0:p.attributes.effect_list)&&p.attributes.effect_list.length>50||(null==p?void 0:p.entity_id)&&p.entity_id.toLowerCase().includes("wled")||(null==p?void 0:p.attributes.friendly_name)&&p.attributes.friendly_name.toLowerCase().includes("wled")||(null==p?void 0:p.attributes.friendly_name)&&p.attributes.friendly_name.toLowerCase().includes("glorb"),h=e.transition_time||t.default_transition_time;!(h&&h>0)||u&&e.effect&&""!==e.effect.trim()||(d.transition=h),void 0!==e.brightness&&(d.brightness=e.brightness);const g=null===(i=e.enable_color)||void 0===i||i,m=null===(a=e.enable_color_temp)||void 0===a||a,b=g&&(void 0!==e.rgb_color||void 0!==e.hs_color||void 0!==e.xy_color),f=m&&void 0!==e.color_temp,v=void 0!==e.white,y=void 0!==e.rgbw_color,x=void 0!==e.rgbww_color,_=e.effect&&""!==e.effect.trim();if(b&&f&&!_){const t=Object.assign({},d);g?void 0!==e.rgb_color?t.rgb_color=e.rgb_color:void 0!==e.hs_color?t.hs_color=e.hs_color:void 0!==e.xy_color?t.xy_color=e.xy_color:t.rgb_color=[255,255,255]:t.rgb_color=[255,255,255],delete t.color_temp,delete t.white,delete t.rgbw_color,delete t.rgbww_color,u&&(t.effect="Solid");const o=Object.assign({},d);if(m&&e.color_temp&&(o.color_temp_kelvin=Math.round(1e6/e.color_temp)),delete o.rgb_color,delete o.hs_color,delete o.xy_color,delete o.rgbw_color,delete o.rgbww_color,delete o.white,u&&(o.effect="Solid"),"toggle"===c&&"on"===(null===(s=r.states[l])||void 0===s?void 0:s.state)){await this.callLightService("turn_off",l,{},r);continue}const n="turn_on";g&&await this.callLightService(n,l,t,r),m&&(g&&await new Promise(e=>setTimeout(e,100)),await this.callLightService(n,l,o,r));continue}const w=Object.assign({},e);if(_||(x?(delete w.rgb_color,delete w.hs_color,delete w.xy_color,delete w.color_temp,delete w.rgbw_color,delete w.white):y?(delete w.rgb_color,delete w.hs_color,delete w.xy_color,delete w.color_temp,delete w.white):v?(delete w.rgb_color,delete w.hs_color,delete w.xy_color,delete w.color_temp):f&&b?(delete w.rgb_color,delete w.hs_color,delete w.xy_color):b&&delete w.white),e.effect&&""!==e.effect.trim())if(this.getEffectList(l,r).includes(e.effect))d.effect=e.effect,delete d.rgb_color,delete d.hs_color,delete d.xy_color,delete d.color_temp,delete d.rgbw_color,delete d.rgbww_color,delete d.white,u&&delete d.transition;else{const t=this.getEffectList(l,r),o=this.findSimilarEffect(e.effect,t);o&&(d.effect=o,delete d.rgb_color,delete d.hs_color,delete d.xy_color,delete d.color_temp,delete d.rgbw_color,delete d.rgbww_color,delete d.white)}else void 0!==w.color_temp&&!b&&m?d.color_temp_kelvin=Math.round(1e6/w.color_temp):u&&void 0!==w.rgb_color&&g?(d.rgb_color=w.rgb_color,d.effect="Solid"):void 0!==w.hs_color&&g?(d.hs_color=w.hs_color,u&&(d.effect="Solid")):void 0!==w.xy_color&&g?(d.xy_color=w.xy_color,u&&(d.effect="Solid")):void 0!==w.rgb_color&&g?(d.rgb_color=w.rgb_color,u&&(d.effect="Solid")):void 0!==w.rgbw_color?d.rgbw_color=w.rgbw_color:void 0!==w.rgbww_color?d.rgbww_color=w.rgbww_color:void 0!==w.white&&(d.white=w.white);const k="toggle"===c?"toggle":"turn_on";await this.callLightService(k,l,d,r)}if(!1!==t.show_feedback){const t=new CustomEvent("hass-notification",{detail:{message:`Applied preset "${e.name}" to ${l.length} ${1===l.length?"entity":"entities"}`}});document.dispatchEvent(t)}}deletePreset(e,t,o){const r=[...t.presets||[]];r.splice(e,1),o({presets:r}),this.triggerPreviewUpdate()}renderPreview(e,t,o,n){var i,a;const s=e,l=s.presets||[],c=this.getHoverEffectClass(e),d=this.buildStyleString(this.buildDesignStyles(e,t));if(0===l.length)return r.qy`
        <div class="light-module-container ${c}" data-uc-role="pane" style="${d}">
          <div class="no-presets-preview">
            <ha-icon icon="mdi:lightbulb-group"></ha-icon>
            <div>No presets configured</div>
            <div class="config-hint">Add presets in the General tab</div>
          </div>
        </div>
      `;const p=l.filter(e=>e.entities&&e.entities.length>0),u=l.filter(e=>!e.entities||0===e.entities.length);if(0===p.length&&l.length>0){const e=u.map((e,t)=>e.name||`Preset ${t+1}`).join(", ");return r.qy`
        <div class="light-module-container ${c}" data-uc-role="pane" style="${d}">
          <div class="ultra-config-needed">
            <div class="ultra-config-gradient"></div>
            <div class="ultra-config-content">
              <ha-icon icon="mdi:lightbulb-alert-outline"></ha-icon>
              <div class="ultra-config-text">
                <div class="ultra-config-title">Configure Entities</div>
                <div class="ultra-config-subtitle">${e}</div>
              </div>
            </div>
          </div>
        </div>
      `}const h=s.layout||"buttons",g=null===(i=s.show_labels)||void 0===i||i,m=s.button_style||"theme",b=s.columns||3,f=s.button_alignment||"center",v=null===(a=s.allow_wrapping)||void 0===a||a,y=s.button_gap||.8;let x="";x="grid"===h?`\n        display: grid;\n        grid-template-columns: repeat(${b}, 1fr);\n        grid-auto-flow: ${!1===v?"column":"row"};\n        gap: ${y}rem;\n      `:`\n        display: flex;\n        flex-wrap: ${v?"wrap":"nowrap"};\n        justify-content: ${this.getJustifyContent(f)};\n        align-items: center;\n        gap: ${y}rem;\n      `;const _=u.length>0?r.qy`
            <div class="ultra-config-banner">
              <div class="ultra-config-banner-gradient"></div>
              <div class="ultra-config-banner-content">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                <span
                  >${u.length} preset${u.length>1?"s":""} need
                  configuration</span
                >
              </div>
            </div>
          `:"";return this.wrapWithAnimation(r.qy`
      <div class="light-module-container ${c}" data-uc-role="pane" style="${d}">
        ${_}
        <div class="presets-container ${h}" style="${x}">
          ${p.map(e=>this.renderPresetButton(e,s,t,g,m,o))}
        </div>
      </div>
    `,e,t)}getPaddingCSS(e){return e.padding_top||e.padding_bottom||e.padding_left||e.padding_right?`${this.addPixelUnit(e.padding_top)||"8px"} ${this.addPixelUnit(e.padding_right)||"8px"} ${this.addPixelUnit(e.padding_bottom)||"8px"} ${this.addPixelUnit(e.padding_left)||"8px"}`:"16px"}getMarginCSS(e){return e.margin_top||e.margin_bottom||e.margin_left||e.margin_right?`${this.addPixelUnit(e.margin_top)||"0"} ${this.addPixelUnit(e.margin_right)||"0"} ${this.addPixelUnit(e.margin_bottom)||"0"} ${this.addPixelUnit(e.margin_left)||"0"}`:"0"}getBackgroundCSS(e){return e.background_color||"var(--card-background-color)"}getBackgroundImageCSS(e,t,o){if("url"===e.background_image_type&&e.background_image)return`url(${e.background_image})`;if("entity"===e.background_image_type&&e.background_image_entity){const r=this.resolveEntity(e.background_image_entity,o)||e.background_image_entity,n=t.states[r];if(n&&n.attributes.entity_picture)return`url(${n.attributes.entity_picture})`}return"none"}getBorderCSS(e){return e.border_style&&"none"!==e.border_style?`${this.addPixelUnit(e.border_width)||"1px"} ${e.border_style} ${e.border_color||"var(--divider-color)"}`:"none"}addPixelUnit(e){return e?"auto"===e||"none"===e||"inherit"===e?e:/^\d+$/.test(e)?`${e}px`:/^[\d\s]+$/.test(e)?e.split(" ").map(e=>e.trim()?`${e}px`:e).join(" "):e:e}styleObjectToCss(e){return Object.entries(e).map(([e,t])=>`${this.camelToKebab(e)}: ${t}`).join("; ")}camelToKebab(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}getJustifyContent(e){switch(e){case"left":return"flex-start";case"center":default:return"center";case"right":return"flex-end";case"space-between":return"space-between";case"space-around":return"space-around";case"space-evenly":return"space-evenly"}}getDefaultIconForAction(e){switch(e){case"turn_off":return"mdi:lightbulb-off";case"toggle":return"mdi:lightbulb-auto";default:return"mdi:lightbulb"}}renderPresetButton(e,t,o,n,i,a){var s,l;const c=e.entities&&e.entities.length>0,d=(0,h.NS)(a,"light","button_style",e.button_style||t.button_style||i,"flat"),p=(0,m.Hv)(d),u=null!==(s=e.show_label)&&void 0!==s?s:n,b=this.getPresetColors(e,o,d),f=null!==(l=e.border_radius)&&void 0!==l?l:8,v=(0,m.oV)(d,{background:b.buttonColor,textColor:b.textColor,hasCustomTextColor:!!e.text_color||!!e.smart_color}),y=(0,g._0)(p,"control"),x=`\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      padding: 12px 16px;\n      border-radius: ${f}px;\n      cursor: pointer;\n      font-size: 14px;\n      font-weight: 500;\n      transition: all 0.2s ease;\n      min-height: 48px;\n      position: relative;\n      overflow: hidden;\n      box-sizing: border-box;\n      ${v}\n    `;return r.qy`
      <div class="preset-button-container">
        <button
          class="preset-button ${d} ${c?"":"disabled"}"
          data-uc-surface="${y["data-uc-surface"]}"
          data-uc-role="${y["data-uc-role"]}"
          @click=${c?()=>this.applyPreset(e,t,o,a):void 0}
          style="
            ${x}
            ${c?"":"opacity: 0.5; cursor: not-allowed;"}
          "
          title="${c?`Apply preset: ${e.name}`:"No entities configured"}"
        >
          <ha-icon
            icon="${e.icon||this.getDefaultIconForAction(e.action)}"
            style="color: ${b.iconColor};"
          ></ha-icon>
          ${u?r.qy`<span class="preset-label">${e.name}</span>`:""}
        </button>
      </div>
    `}getPresetColors(e,t,o){const r=this.getPresetColorPreview(e);let n,i;n=e.use_light_color_for_icon&&r?r:e.icon_color||"var(--primary-color)";const a=o||e.button_style||"filled",s=(0,m.Hv)(a),l=(0,m.eJ)(a),c="outlined"===a||"outline"===s;let d;if(i=l||c?e.button_color||r||"var(--primary-color)":e.use_light_color_for_button&&r?r:e.button_color||r||"var(--primary-color)",e.smart_color){const e=this.getContrastColor(i);d=e,n=e}else d=l?e.use_icon_color_for_text?n:e.text_color||r||n:c?e.use_icon_color_for_text?n:e.text_color||r||i:e.use_icon_color_for_text?n:e.text_color||"var(--text-primary-color)";return{textColor:d,iconColor:n,buttonColor:i}}getContrastColor(e){if(e.startsWith("var(")||e.includes("gradient"))return"white";let t=0,o=0,r=0;if(e.startsWith("#")){const n=b.hexToRgb(e);n&&([t,o,r]=n)}else if(e.startsWith("rgb(")){const n=e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);n&&(t=parseInt(n[1]),o=parseInt(n[2]),r=parseInt(n[3]))}return(.299*t+.587*o+.114*r)/255>.5?"black":"white"}getCurrentLightColor(e){if(!e||!e.attributes)return null;if(e.attributes.rgb_color&&Array.isArray(e.attributes.rgb_color))return`rgb(${e.attributes.rgb_color.join(",")})`;if(e.attributes.hs_color&&Array.isArray(e.attributes.hs_color)){const[t,o]=e.attributes.hs_color;return`rgb(${b.hsvToRgb(t,o,100).join(",")})`}if(e.attributes.xy_color&&Array.isArray(e.attributes.xy_color)){const[t,o]=e.attributes.xy_color;return`rgb(${b.xyToRgb(t,o).join(",")})`}if(e.attributes.color_temp||e.attributes.color_temp_kelvin){const t=e.attributes.color_temp_kelvin||b.miredToKelvin(e.attributes.color_temp);return t<3e3?"#ffb366":t>5e3?"#cce6ff":"#fff2e6"}return null}getPresetColorPreview(e){if(e.rgb_color)return`rgb(${e.rgb_color.join(",")})`;if(e.hs_color)return`rgb(${b.hsvToRgb(e.hs_color[0],e.hs_color[1],100).join(",")})`;if(e.xy_color)return`rgb(${b.xyToRgb(e.xy_color[0],e.xy_color[1]).join(",")})`;if(e.color_temp){const t=b.miredToKelvin(e.color_temp);return t<3e3?"#ffb366":t>5e3?"#cce6ff":"#fff2e6"}return e.effect?"linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ff0000)":null}validatePreset(e){var t,o;const r=[];if(e.name&&""!==e.name.trim()||r.push("Preset name is required"),e.entities&&0!==e.entities.length||r.push("At least one entity must be selected for each preset"),"turn_off"!==(e.action||"turn_on")){const n=null===(t=e.enable_color)||void 0===t||t,i=null===(o=e.enable_color_temp)||void 0===o||o,a=void 0!==e.brightness,s=e.effect&&""!==e.effect.trim();n&&(void 0!==e.rgb_color||void 0!==e.hs_color||e.xy_color),i&&e.color_temp,n||i||a||s||r.push("At least one of the following must be enabled: Color, Color Temperature, Brightness, or Effect")}return r}validate(e){const t=e,o=[...super.validate(e).errors];return(t.presets||[]).forEach((e,t)=>{(e.name&&""!==e.name.trim()||e.entities&&e.entities.length>0)&&this.validatePreset(e).filter(e=>!e.includes("At least one entity must be selected")&&!e.includes("At least one light setting")).forEach(e=>{o.push(`Preset ${t+1}: ${e}`)})}),void 0!==t.default_transition_time&&null!==t.default_transition_time&&(t.default_transition_time<0||t.default_transition_time>10)&&o.push("Default transition time must be between 0 and 10 seconds"),"grid"===t.layout&&t.columns&&(t.columns<1||t.columns>6)&&o.push("Grid columns must be between 1 and 6"),{valid:0===o.length,errors:o}}getStyles(){return`\n      ${i.m.getSliderStyles()}\n      .light-module-container {\n        padding: 16px;\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border: var(--uc-pane-border, none);\n        box-shadow: var(--uc-pane-shadow, none);\n        border-radius: var(--uc-r-8, 8px);\n      }\n\n      .no-presets-preview {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 32px;\n        color: var(--secondary-text-color);\n        text-align: center;\n      }\n\n      .no-presets-preview ha-icon {\n        font-size: 48px;\n        margin-bottom: 16px;\n        opacity: 0.5;\n      }\n\n      .config-hint {\n        font-size: 12px;\n        opacity: 0.7;\n        margin-top: 8px;\n      }\n\n      /* Ultra Card Modern Gradient Error State */\n      .ultra-config-needed {\n        position: relative;\n        padding: 16px;\n        border-radius: var(--uc-r-12, 12px);\n        overflow: hidden;\n        backdrop-filter: blur(10px);\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n      }\n\n      .ultra-config-gradient {\n        position: absolute;\n        inset: 0;\n        background: linear-gradient(135deg, \n          rgba(168, 85, 247, 0.15) 0%, \n          rgba(236, 72, 153, 0.15) 50%, \n          rgba(59, 130, 246, 0.15) 100%);\n        z-index: 0;\n      }\n\n      .ultra-config-content {\n        position: relative;\n        z-index: 1;\n        display: flex;\n        align-items: center;\n        gap: 12px;\n      }\n\n      .ultra-config-content ha-icon {\n        flex-shrink: 0;\n        color: var(--primary-color);\n        --mdc-icon-size: 24px;\n      }\n\n      .ultra-config-text {\n        flex: 1;\n        min-width: 0;\n      }\n\n      .ultra-config-title {\n        font-size: 14px;\n        font-weight: 600;\n        color: var(--primary-text-color);\n        margin-bottom: 2px;\n      }\n\n      .ultra-config-subtitle {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        opacity: 0.8;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      /* Compact Warning Banner */\n      .ultra-config-banner {\n        position: relative;\n        padding: 10px 14px;\n        border-radius: var(--uc-r-8, 8px);\n        overflow: hidden;\n        margin-bottom: 12px;\n        backdrop-filter: blur(10px);\n      }\n\n      .ultra-config-banner-gradient {\n        position: absolute;\n        inset: 0;\n        background: linear-gradient(135deg, \n          rgba(168, 85, 247, 0.12) 0%, \n          rgba(236, 72, 153, 0.12) 100%);\n        z-index: 0;\n      }\n\n      .ultra-config-banner-content {\n        position: relative;\n        z-index: 1;\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        font-size: 12px;\n        color: var(--primary-text-color);\n      }\n\n      .ultra-config-banner-content ha-icon {\n        flex-shrink: 0;\n        color: var(--primary-color);\n        --mdc-icon-size: 18px;\n      }\n\n      .presets-container {\n        /* Base container - specific layout styles applied inline */\n      }\n\n      .presets-container.buttons {\n        /* Flexible button layout - styles applied inline */\n      }\n\n      .presets-container.grid {\n        /* Grid layout - styles applied inline */\n      }\n\n\n      .preset-button-container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 8px;\n      }\n\n      /* Preset button styles - work in both card and editor contexts */\n      .preset-button,\n      .module-preview .preset-button,\n      .light-module-container .preset-button {\n        display: flex !important;\n        align-items: center !important;\n        justify-content: center !important;\n        gap: 8px !important;\n        padding: 12px 16px !important;\n        border-radius: var(--uc-r-8, 8px) !important;\n        border: none !important;\n        cursor: pointer !important;\n        font-size: 14px !important;\n        font-weight: 500 !important;\n        transition: all 0.2s ease !important;\n        min-height: 48px !important;\n        position: relative !important;\n        overflow: hidden !important;\n        box-sizing: border-box !important;\n      }\n\n      .preset-button ha-icon,\n      .module-preview .preset-button ha-icon,\n      .light-module-container .preset-button ha-icon {\n        font-size: 20px !important;\n      }\n\n      .preset-button.filled,\n      .module-preview .preset-button.filled,\n      .light-module-container .preset-button.filled {\n        border: 2px solid transparent !important;\n      }\n\n      .preset-button.filled:hover:not(.disabled),\n      .module-preview .preset-button.filled:hover:not(.disabled),\n      .light-module-container .preset-button.filled:hover:not(.disabled) {\n        transform: translateY(-2px) !important;\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;\n        filter: brightness(1.1) !important;\n      }\n\n      .preset-button.outlined,\n      .module-preview .preset-button.outlined,\n      .light-module-container .preset-button.outlined {\n        background: transparent !important;\n        border: 2px solid !important;\n      }\n\n      .preset-button.outlined:hover:not(.disabled),\n      .module-preview .preset-button.outlined:hover:not(.disabled),\n      .light-module-container .preset-button.outlined:hover:not(.disabled) {\n        filter: brightness(1.1) !important;\n      }\n\n      .preset-button.text,\n      .module-preview .preset-button.text,\n      .light-module-container .preset-button.text {\n        background: transparent !important;\n        border: 2px solid transparent !important;\n      }\n\n      .preset-button.text:hover:not(.disabled),\n      .module-preview .preset-button.text:hover:not(.disabled),\n      .light-module-container .preset-button.text:hover:not(.disabled) {\n        background: rgba(var(--rgb-primary-color), 0.1) !important;\n      }\n\n      .preset-button.disabled,\n      .module-preview .preset-button.disabled,\n      .light-module-container .preset-button.disabled {\n        opacity: 0.5 !important;\n        cursor: not-allowed !important;\n      }\n\n      .preset-label {\n        font-size: 13px;\n        font-weight: 500;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 120px;\n      }\n\n      .preset-name {\n        font-size: 12px;\n        color: var(--secondary-text-color);\n        text-align: center;\n        max-width: 80px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      /* Layout-specific styles */\n      .presets-container.icons .preset-button {\n        width: 56px;\n        height: 56px;\n        border-radius: 50%;\n        padding: 0;\n      }\n\n      .presets-container.icons .preset-button ha-icon {\n        font-size: 24px;\n      }\n\n      .presets-container.list .preset-button-container {\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n        width: 100%;\n        gap: 12px;\n      }\n\n      .presets-container.list .preset-button {\n        flex: 1;\n        justify-content: flex-start;\n        text-align: left;\n        min-height: 56px;\n      }\n\n      .presets-container.list .preset-name {\n        flex: 1;\n        text-align: left;\n        max-width: none;\n        font-size: 14px;\n        color: var(--primary-text-color);\n      }\n\n      /* Preset editor styles (mimicking dropdown module) */\n      .preset-item {\n        transition: all 0.2s ease;\n        position: relative;\n        cursor: default;\n      }\n\n      .preset-item:hover {\n        background: rgba(var(--rgb-primary-color), 0.05);\n      }\n\n      .preset-item.dragging {\n        opacity: 0.7;\n        transform: rotate(2deg) scale(0.95);\n        box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n        z-index: ${s.Mu.POPUP_TABS+10};\n        position: relative;\n      }\n\n      .preset-header {\n        user-select: none;\n        transition: background-color 0.2s ease;\n      }\n\n      .preset-header:hover {\n        background: rgba(var(--rgb-primary-color), 0.1) !important;\n      }\n\n      .drag-handle {\n        transition: all 0.2s ease;\n      }\n\n      .drag-handle:hover {\n        background: rgba(var(--rgb-primary-color), 0.15) !important;\n        transform: scale(1.1);\n      }\n\n      .drag-handle:active {\n        cursor: grabbing !important;\n        transform: scale(0.95);\n      }\n\n      .expand-caret {\n        transition: transform 0.2s ease !important;\n      }\n\n      .preset-content {\n        transition: all 0.3s ease;\n        overflow: hidden;\n      }\n\n      /* Light control styles */\n      .light-controls-section {\n        background: rgba(var(--rgb-primary-color), 0.02);\n        border-radius: var(--uc-r-8, 8px);\n        padding: 16px;\n        border: 1px solid rgba(var(--rgb-primary-color), 0.1);\n      }\n\n      .brightness-control,\n      .color-picker-section,\n      .effects-control {\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border-radius: var(--uc-r-6, 6px);\n        padding: 12px;\n        border: var(--uc-pane-border, 1px solid var(--divider-color));\n        box-shadow: var(--uc-pane-shadow, none);\n      }\n\n      /* Brightness slider styling */\n      .brightness-slider {\n        flex: 1;\n        height: 6px;\n        background: linear-gradient(to right, #333, #fff);\n        border-radius: var(--uc-r-3, 3px);\n        outline: none;\n        appearance: none;\n        cursor: pointer;\n      }\n\n      .brightness-slider::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        height: 20px;\n        width: 20px;\n        border-radius: 50%;\n        background: var(--primary-color);\n        cursor: pointer;\n        border: 2px solid white;\n        box-shadow: 0 2px 6px rgba(0,0,0,0.2);\n      }\n\n      .brightness-slider::-moz-range-thumb {\n        height: 20px;\n        width: 20px;\n        border-radius: 50%;\n        background: var(--primary-color);\n        cursor: pointer;\n        border: 2px solid white;\n        box-shadow: 0 2px 6px rgba(0,0,0,0.2);\n      }\n\n      .color-preview {\n        margin-top: 8px;\n        display: flex;\n        align-items: center;\n        gap: 8px;\n      }\n\n      .color-preview div {\n        width: 32px;\n        height: 32px;\n        border-radius: var(--uc-r-4, 4px);\n        border: 1px solid var(--divider-color);\n      }\n\n      /* Responsive design */\n      @media (max-width: 600px) {\n        .presets-container.buttons,\n        .presets-container.icons {\n          justify-content: center;\n        }\n\n        .presets-container.grid {\n          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));\n        }\n\n        .preset-button {\n          min-width: 80px;\n        }\n\n        .preset-label {\n          max-width: 70px;\n        }\n      }\n\n      /* Animation for smooth transitions */\n      .preset-button {\n        transition: all 0.2s ease;\n      }\n\n      .preset-button:active:not(.disabled) {\n        transform: scale(0.95);\n      }\n\n      .presets-container {\n        animation: fadeIn 0.3s ease-out;\n      }\n\n      @keyframes fadeIn {\n        from {\n          opacity: 0;\n          transform: translateY(10px);\n        }\n        to {\n          opacity: 1;\n          transform: translateY(0);\n        }\n      }\n\n      /* Visual customization styles */\n      .visual-customization {\n        background: rgba(var(--rgb-primary-color), 0.02);\n        border-radius: var(--uc-r-8, 8px);\n        padding: 16px;\n        border: 1px solid rgba(var(--rgb-primary-color), 0.1);\n      }\n\n      .smart-color-toggles {\n        background: rgba(var(--rgb-primary-color), 0.05);\n        border-radius: var(--uc-r-6, 6px);\n        padding: 12px;\n        margin-bottom: 16px;\n      }\n\n      .custom-colors {\n        display: flex;\n        flex-direction: column;\n        gap: 16px;\n      }\n\n      .color-field {\n        background: var(--uc-pane-bg, var(--card-background-color));\n        border-radius: var(--uc-r-6, 6px);\n        padding: 12px;\n        border: 1px solid var(--divider-color);\n      }\n\n      .color-field.disabled {\n        background: var(--secondary-background-color);\n        opacity: 0.7;\n      }\n\n      /* Gap control styles (from horizontal module) */\n      .gap-control-container {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n      }\n\n      .gap-slider {\n        flex: 1;\n        height: 6px;\n        background: var(--divider-color);\n        border-radius: var(--uc-r-3, 3px);\n        outline: none;\n        appearance: none;\n        -webkit-appearance: none;\n        cursor: pointer;\n        transition: all 0.2s ease;\n      }\n\n      .gap-slider::-webkit-slider-thumb {\n        appearance: none;\n        -webkit-appearance: none;\n        width: 20px;\n        height: 20px;\n        background: var(--primary-color);\n        border-radius: 50%;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n      }\n\n      .gap-slider::-moz-range-thumb {\n        width: 20px;\n        height: 20px;\n        background: var(--primary-color);\n        border-radius: 50%;\n        cursor: pointer;\n        border: none;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n      }\n\n      .gap-slider:hover {\n        background: var(--primary-color);\n        opacity: 0.7;\n      }\n\n      .gap-slider:hover::-webkit-slider-thumb {\n        transform: scale(1.1);\n      }\n\n      .gap-slider:hover::-moz-range-thumb {\n        transform: scale(1.1);\n      }\n\n      .gap-input {\n        width: 48px !important;\n        max-width: 48px !important;\n        min-width: 48px !important;\n        padding: 4px 6px !important;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-4, 4px);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        font-size: 13px;\n        text-align: center;\n        transition: all 0.2s ease;\n        flex-shrink: 0;\n        box-sizing: border-box;\n      }\n\n      .gap-input:focus {\n        outline: none;\n        border-color: var(--primary-color);\n        box-shadow: 0 0 0 2px rgba(var(--rgb-primary-color), 0.2);\n      }\n\n      .reset-btn {\n        width: 36px;\n        height: 36px;\n        padding: 0;\n        border: 1px solid var(--divider-color);\n        border-radius: var(--uc-r-4, 4px);\n        background: var(--secondary-background-color);\n        color: var(--primary-text-color);\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: all 0.2s ease;\n        flex-shrink: 0;\n      }\n\n      .reset-btn:hover {\n        background: var(--primary-color);\n        color: var(--text-primary-color);\n        border-color: var(--primary-color);\n      }\n\n      .reset-btn ha-icon {\n        font-size: 16px;\n      }\n\n      /* Responsive design for color fields */\n      @media (max-width: 600px) {\n        .custom-colors {\n          gap: 12px;\n        }\n\n        .presets-container.buttons {\n          justify-content: center;\n        }\n\n        .gap-control-container {\n          flex-direction: column;\n          align-items: stretch;\n          gap: 8px;\n        }\n\n        .gap-input {\n          width: 100% !important;\n          max-width: 100% !important;\n          min-width: 100% !important;\n        }\n      }\n    `}}},2063(e,t,o){var r=o(1001);const n=new class{confirm(e,t,o={}){return new Promise(r=>{const{destructive:n=!1,confirmText:i="Confirm",cancelText:a="Cancel"}=o,{overlay:s,style:l}=this._buildOverlay();s.innerHTML='\n        <div class="uc-cd-backdrop"></div>\n        <div class="uc-cd-panel" role="dialog" aria-modal="true" aria-labelledby="uc-cd-title">\n          <h2 class="uc-cd-title" id="uc-cd-title"></h2>\n          <p class="uc-cd-message"></p>\n          <div class="uc-cd-actions"></div>\n        </div>\n      ',s.querySelector(".uc-cd-title").textContent=e,s.querySelector(".uc-cd-message").textContent=t;const c=s.querySelector(".uc-cd-actions"),d=this._makeButton(a,!1,n),p=this._makeButton(i,!0,n);c.appendChild(d),c.appendChild(p);let u=!1;const h=e=>{u||(u=!0,document.removeEventListener("keydown",g),l.remove(),s.remove(),r(e))},g=e=>{if("Escape"===e.key)return e.preventDefault(),void h(!1);if("Enter"===e.key){const t=document.activeElement;if(t===d)return e.preventDefault(),void h(!1);if(t===p)return e.preventDefault(),void h(!0);if(n)return;e.preventDefault(),h(!0)}};s.querySelector(".uc-cd-backdrop").addEventListener("click",()=>h(!1)),d.addEventListener("click",()=>h(!1)),p.addEventListener("click",()=>h(!0)),document.body.appendChild(s),document.addEventListener("keydown",g),requestAnimationFrame(()=>(n?d:p).focus())})}prompt(e,t,o=""){return new Promise(r=>{const{overlay:n,style:i}=this._buildOverlay();n.innerHTML='\n        <div class="uc-cd-backdrop"></div>\n        <div class="uc-cd-panel" role="dialog" aria-modal="true" aria-labelledby="uc-cd-title">\n          <h2 class="uc-cd-title" id="uc-cd-title"></h2>\n          <p class="uc-cd-message"></p>\n          <input class="uc-cd-input" type="text" />\n          <div class="uc-cd-actions"></div>\n        </div>\n      ',n.querySelector(".uc-cd-title").textContent=e,n.querySelector(".uc-cd-message").textContent=t;const a=n.querySelector(".uc-cd-input");a.value=o;const s=n.querySelector(".uc-cd-actions"),l=this._makeButton("Cancel",!1,!1),c=this._makeButton("OK",!0,!1);s.appendChild(l),s.appendChild(c);let d=!1;const p=e=>{d||(d=!0,document.removeEventListener("keydown",u),i.remove(),n.remove(),r(e))},u=e=>{"Escape"===e.key&&(e.preventDefault(),p(null)),"Enter"===e.key&&(e.preventDefault(),p(a.value.trim()||null))};n.querySelector(".uc-cd-backdrop").addEventListener("click",()=>p(null)),l.addEventListener("click",()=>p(null)),c.addEventListener("click",()=>p(a.value.trim()||null)),document.body.appendChild(n),document.addEventListener("keydown",u),requestAnimationFrame(()=>a.focus())})}_makeButton(e,t,o){const r=document.createElement("button");return r.type="button",r.className=t?"uc-cd-btn primary":"uc-cd-btn secondary",t&&o&&r.classList.add("destructive"),r.textContent=e,r}_buildOverlay(){const e=document.createElement("div");e.className="uc-cd-overlay";const t=document.createElement("style");return t.textContent=`\n      .uc-cd-overlay {\n        position: fixed;\n        inset: 0;\n        z-index: ${r.Mu.DIALOG_OVERLAY};\n        display: grid;\n        place-items: center;\n      }\n      .uc-cd-backdrop {\n        position: absolute;\n        inset: 0;\n        background: rgba(0, 0, 0, 0.5);\n      }\n      .uc-cd-panel {\n        position: relative;\n        width: min(92vw, 480px);\n        border-radius: 12px;\n        background: var(--card-background-color, #1f1f1f);\n        color: var(--primary-text-color);\n        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);\n        padding: 20px 20px 16px;\n      }\n      .uc-cd-title {\n        margin: 0 0 8px;\n        font-size: 18px;\n        font-weight: 600;\n        line-height: 1.3;\n        color: var(--primary-text-color);\n      }\n      .uc-cd-message {\n        margin: 0 0 16px;\n        font-size: 14px;\n        line-height: 1.5;\n        color: var(--secondary-text-color);\n      }\n      .uc-cd-input {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 8px 10px;\n        margin-bottom: 16px;\n        border: 1px solid var(--divider-color);\n        border-radius: 6px;\n        background: var(--secondary-background-color, #2b2b2b);\n        color: var(--primary-text-color);\n        font-size: 14px;\n        outline: none;\n      }\n      .uc-cd-input:focus {\n        border-color: var(--primary-color);\n      }\n      .uc-cd-actions {\n        display: flex;\n        justify-content: flex-end;\n        gap: 8px;\n      }\n      .uc-cd-btn {\n        border-radius: 6px;\n        min-height: 36px;\n        padding: 0 16px;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        transition: opacity 0.15s ease;\n      }\n      .uc-cd-btn:hover { opacity: 0.85; }\n      .uc-cd-btn.secondary {\n        border: 1px solid var(--divider-color);\n        background: transparent;\n        color: var(--primary-text-color);\n      }\n      .uc-cd-btn.primary {\n        border: 1px solid var(--primary-color);\n        background: var(--primary-color);\n        color: var(--text-primary-color, #fff);\n      }\n      .uc-cd-btn.primary.destructive {\n        border-color: var(--error-color, #f44336);\n        background: var(--error-color, #f44336);\n        color: #fff;\n      }\n    `,document.head.appendChild(t),{overlay:e,style:t}}};o.d(t,["W",0,n])},3038(e,t,o){const r=new class{constructor(){this._actionKeys=new Set(["tap_action","hold_action","double_tap_action","left_tap_action","left_hold_action","left_double_tap_action","right_tap_action","right_hold_action","right_double_tap_action","inactive_tap_action"])}applyMappingToLayout(e,t){if(!e||!e.rows||0===t.length)return e;const o=new Map;return t.forEach(e=>o.set(e.original,e.mapped)),Object.assign(Object.assign({},e),{rows:e.rows.map(e=>this._mapRow(e,o))})}applyMappingToRow(e,t){if(!e||0===t.length)return e;const o=new Map;return t.forEach(e=>o.set(e.original,e.mapped)),this._mapRow(e,o)}reverseMappings(e){return e.map(e=>({original:e.mapped,mapped:e.original,domain:e.domain}))}suggestEntities(e,t){if(!e||0===t.length)return[];const o=this._getDomain(e),r=this._getEntityName(e);return t.map(t=>({entityId:t,score:this._calculateMatchScore(e,r,o,t)})).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).slice(0,10).map(e=>e.entityId)}_calculateMatchScore(e,t,o,r){const n=this._getDomain(r),i=this._getEntityName(r);let a=0;return o!==n?0:(a+=80,t===i?100:(a+=20*(1-this._levenshteinDistance(t,i)/Math.max(t.length,i.length)),a))}_levenshteinDistance(e,t){const o=e.toLowerCase(),r=t.toLowerCase(),n=[];for(let e=0;e<=o.length;e++){let t=e;for(let i=0;i<=r.length;i++)if(0===e)n[i]=i;else if(i>0){let a=n[i-1];o.charAt(e-1)!==r.charAt(i-1)&&(a=Math.min(Math.min(a,t),n[i])+1),n[i-1]=t,t=a}e>0&&(n[r.length]=t)}return n[r.length]}_mapRow(e,t){var o;return Object.assign(Object.assign({},e),{columns:(null===(o=e.columns)||void 0===o?void 0:o.map(e=>this._mapColumn(e,t)))||[]})}_mapColumn(e,t){var o;return Object.assign(Object.assign({},e),{modules:(null===(o=e.modules)||void 0===o?void 0:o.map(e=>this._mapModule(e,t)))||[]})}_mapModule(e,t){var o,r;if(!e||!e.type)return e;let n=e;switch(e.type){case"icon":n=this._mapIconModule(e,t);break;case"info":n=this._mapInfoModule(e,t);break;case"bar":n=this._mapBarModule(e,t);break;case"camera":n=this._mapCameraModule(e,t);break;case"light":n=this._mapLightModule(e,t);break;case"horizontal":n=this._mapHorizontalModule(e,t);break;case"vertical":n=this._mapVerticalModule(e,t);break;case"stack":case"grid_layout":case"flip_card":case"drawer":case"scroll_row":case"state_switcher":{const r=e;n=Object.assign(Object.assign({},r),{modules:null===(o=r.modules)||void 0===o?void 0:o.map(e=>this._mapModule(e,t))});break}case"map":n=this._mapMapModule(e,t);break;case"slider":n=this._mapSliderModule(e,t);break;case"image":n=this._mapImageModule(e,t);break;default:if("entity"in e&&"string"==typeof e.entity){const o=e.entity;if(t.has(o)){const i=null!==(r=t.get(o))&&void 0!==r?r:o;n=Object.assign(Object.assign({},e),{entity:i})}}}return this._mapActionEntitiesInObject(n,t)}_mapIconModule(e,t){var o;return Object.assign(Object.assign({},e),{icons:null===(o=e.icons)||void 0===o?void 0:o.map(e=>Object.assign(Object.assign({},e),{entity:t.get(e.entity)||e.entity}))})}_mapInfoModule(e,t){var o;return Object.assign(Object.assign({},e),{info_entities:null===(o=e.info_entities)||void 0===o?void 0:o.map(e=>Object.assign(Object.assign({},e),{entity:t.get(e.entity)||e.entity}))})}_mapBarModule(e,t){return Object.assign(Object.assign({},e),{entity:t.get(e.entity)||e.entity})}_mapCameraModule(e,t){return Object.assign(Object.assign({},e),{entity:t.get(e.entity)||e.entity})}_mapImageModule(e,t){const o=Object.assign({},e);return e.entity&&(o.entity=t.get(e.entity)||e.entity),e.image_entity&&(o.image_entity=t.get(e.image_entity)||e.image_entity),e.single_entity&&(o.single_entity=t.get(e.single_entity)||e.single_entity),o}_mapLightModule(e,t){var o;return Object.assign(Object.assign({},e),{presets:null===(o=e.presets)||void 0===o?void 0:o.map(e=>{var o;return Object.assign(Object.assign({},e),{entities:(null===(o=e.entities)||void 0===o?void 0:o.map(e=>t.get(e)||e))||[]})})})}_mapHorizontalModule(e,t){var o;return Object.assign(Object.assign({},e),{modules:null===(o=e.modules)||void 0===o?void 0:o.map(e=>this._mapModule(e,t))})}_mapVerticalModule(e,t){var o;return Object.assign(Object.assign({},e),{modules:null===(o=e.modules)||void 0===o?void 0:o.map(e=>this._mapModule(e,t))})}_mapMapModule(e,t){var o;return Object.assign(Object.assign({},e),{markers:null===(o=e.markers)||void 0===o?void 0:o.map(e=>Object.assign(Object.assign({},e),{entity:e.entity&&t.get(e.entity)||e.entity}))})}_mapSliderModule(e,t){var o;return Object.assign(Object.assign({},e),{modules:null===(o=e.modules)||void 0===o?void 0:o.map(e=>this._mapModule(e,t))})}_mapActionEntitiesInObject(e,t){if(Array.isArray(e))return e.map(e=>this._mapActionEntitiesInObject(e,t));if(!e||"object"!=typeof e)return e;const o=e,r=Object.assign({},o);for(const[e,n]of Object.entries(o))this._actionKeys.has(e)&&n&&"object"==typeof n?r[e]=this._mapActionConfig(n,t):r[e]=this._mapActionEntitiesInObject(n,t);return r}_mapActionConfig(e,t){const o=Object.assign({},e);"string"==typeof o.entity&&(o.entity=t.get(o.entity)||o.entity);const r=o.target;if(r&&"object"==typeof r&&!Array.isArray(r)){const e=Object.assign({},r),n=e.entity_id;"string"==typeof n?e.entity_id=t.get(n)||n:Array.isArray(n)&&(e.entity_id=n.map(e=>"string"==typeof e&&t.get(e)||e)),o.target=e}return o}_getDomain(e){const t=e.split(".");return t.length>1?t[0]:""}_getEntityName(e){const t=e.split(".");return t.length>1?t.slice(1).join("."):e}};o.d(t,["entityMapper",0,r])},5646(e,t,o){o.d(t,{Hv:()=>i,eJ:()=>a,oV:()=>s});var r=o(6831);const n={filled:"flat",outlined:"outline",text:"minimal"};function i(e){var t;return e&&"theme"!==e?null!==(t=n[e])&&void 0!==t?t:e:"flat"}function a(e){return"minimal"===i(e)||"text"===e}function s(e,t){return Object.entries(function(e,t){const o=i(e),n={background:t.background,hasCustomTextColor:t.hasCustomTextColor,blur:t.blur},s=(0,r.bT)(o,n);return a(e)?Object.assign(Object.assign({},s),{background:"transparent",border:"none",boxShadow:"none",color:t.textColor||t.background}):!t.textColor||"flat"!==o&&"filled"!==e?s:Object.assign(Object.assign({},s),{color:t.textColor})}(e,t)).map(([e,t])=>`${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}: ${t}`).join("; ")}},4959(e,t,o){function r(e,t){if(!t||!(null==e?void 0:e.states))return;const o=e.states;if(o[t]){const e=t.split(".");return e.length>1?e[0]:void 0}if(t.includes(".")){const e=t.split(".")[0];return e&&!e.startsWith("$")?e:void 0}if(t.startsWith("$")){const e=t.slice(1);if(!e)return;const r=`${e}.`;if(Object.keys(o).some(e=>e.startsWith(r)))return e}}function n(e){return`uc_wiz_${e.replace(/[^a-zA-Z0-9_]/g,"_")||"entity"}`}function i(e,t){if(!(null==t?void 0:t.length))return null;const o=new Set,i=[];for(const a of t){const s=a.entityId;if(!s||o.has(s))continue;o.add(s);const l=r(e,s),c=t.filter(e=>e.entityId===s).map(e=>e.context).filter(e=>Boolean(e)),d=Array.from(new Set(c)),p=d.length>0?d.join(" · "):`Used in ${a.moduleType} module(s) in this preset`;i.push(Object.assign(Object.assign({id:n(s),label:s.startsWith("$")?`Variable: ${s}`:s,description:p,type:"entity",required:!0},l?{entityDomain:l}:{}),{targetEntityIds:[s]}))}return i.length?{steps:[{id:"map_entities",title:"Map entities",description:"Choose Home Assistant entities for each placeholder. Custom variables (names starting with $) must be mapped to a real entity.",fields:i}]}:null}o.d(t,{Z:()=>r,q:()=>i})},9457(e,t,o){function r(e){const t=e.showPopover;if("function"==typeof t){e.hasAttribute("popover")||e.setAttribute("popover","manual");try{e.matches(":popover-open")||t.call(e)}catch(t){e.removeAttribute("popover")}}}o.d(t,{w:()=>r})}};