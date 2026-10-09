export const __webpack_esm_ids__=[9266];export const __webpack_esm_modules__={9511(t,e,n){var r=n(2618),i=n(4791),a=n(1371),o=n(6585),s=n(5230),l=n(7404),d=n(7967),c=n(5874);const u=["if","elif","else","endif","for","endfor","in","is","not","and","or","true","false","none","True","False","None","set","endset","block","endblock","macro","endmacro","call","endcall","filter","endfilter"],p=["abs","attr","batch","capitalize","center","default","dictsort","escape","filesizeformat","first","float","forceescape","format","groupby","indent","int","join","last","length","list","lower","map","max","min","pprint","random","reject","rejectattr","replace","reverse","round","safe","select","selectattr","slice","sort","string","striptags","sum","title","tojson","trim","truncate","unique","upper","urlencode","urlize","wordcount","wordwrap","xmlattr","as_timestamp","timestamp_custom","timestamp_local","timestamp_utc","is_defined","regex_match","regex_replace","regex_search","regex_findall","distance","closest","expand","device_entities","integration_entities","area_entities","area_devices","slugify"],m=["states","state_attr","is_state","is_state_attr","has_value","states.domain","now","today_at","utcnow","as_datetime","as_local","as_timestamp","device_id","device_attr","is_device_attr","area_id","area_name","area_entities","area_devices","integration_entities","device_entities","closest","distance","expand","log","sin","cos","tan","sqrt","e","pi","max","min","float","int","bool","round"];function h(t){return t&&t.states?Object.keys(t.states).map(e=>({label:e,type:"variable",detail:t.states[e].attributes.friendly_name||"entity",info:`State: ${t.states[e].state}`})):[]}function _(){return p.map(t=>({label:t,type:"function",detail:"filter",apply:t}))}(0,l.et)([...u.map(t=>({label:t,type:"keyword"})),...p.map(t=>({label:t,type:"function",detail:"filter"})),...m.map(t=>({label:t,type:"function",detail:"HA function",apply:t.endsWith(")")?t:`${t}()`}))]),c.Tg.define({startState:()=>({inBlock:!1,inVariable:!1}),token:(t,e)=>{if(t.match("{{"))return e.inVariable=!0,"bracket";if(t.match("}}"))return e.inVariable=!1,"bracket";if(t.match("{%"))return e.inBlock=!0,"bracket";if(t.match("%}"))return e.inBlock=!1,"bracket";if(t.match("{#"))return t.skipToEnd(),"comment";if(e.inBlock||e.inVariable){if(t.match(/\b(if|elif|else|endif|for|endfor|in|is|not|and|or|true|false|none)\b/i))return"keyword";if(t.match(/\b(states|state_attr|is_state|now|as_timestamp)\b/))return"function";if(t.match(/"([^"\\]|\\.)*"/)||t.match(/'([^'\\]|\\.)*'/))return"string";if(t.match(/\b\d+(\.\d+)?\b/))return"number";if(t.match("|"))return"operator"}return t.next(),null}});var g,f=n(1001),y=function(t,e,n,r){var i,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,n,o):i(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o};let v=g=class extends r.WF{constructor(){super(...arguments),this.value="",this.placeholder="",this.minHeight=100,this.maxHeight=400,this._isUpdating=!1,this._userIsTyping=!1}static get styles(){return r.AH`
      :host {
        display: block;
        width: 100%;
      }

      .editor-container {
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        overflow: hidden;
        background: var(--code-editor-background-color, var(--card-background-color));
      }

      .cm-editor {
        font-family: 'Courier New', Consolas, Monaco, monospace;
        font-size: 13px;
      }

      .cm-scroller {
        overflow: auto;
      }

      .cm-content {
        padding: 8px 0;
      }

      .cm-line {
        padding: 0 8px;
      }

      /* Theme integration with Home Assistant */
      .cm-editor.cm-focused {
        outline: 2px solid var(--primary-color);
        outline-offset: -1px;
      }

      /* Autocomplete styling - force proper z-index and colors */
      .cm-tooltip-autocomplete {
        background: var(--card-background-color) !important;
        border: 1px solid var(--divider-color) !important;
        border-radius: 4px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2) !important;
        z-index: ${f.Mu.AUTOCOMPLETE} !important;
      }

      .cm-tooltip.cm-tooltip-autocomplete > ul {
        background: var(--card-background-color) !important;
      }

      .cm-tooltip.cm-tooltip-autocomplete > ul > li {
        color: var(--primary-text-color) !important;
        background: transparent !important;
      }

      .cm-tooltip.cm-tooltip-autocomplete > ul > li[aria-selected] {
        background: var(--primary-color) !important;
        color: var(--text-primary-color, white) !important;
      }

      .cm-completionLabel {
        color: var(--primary-text-color) !important;
      }

      .cm-completionDetail {
        color: var(--secondary-text-color) !important;
        font-style: italic;
        opacity: 0.8;
      }

      .cm-completionInfo {
        background: var(--secondary-background-color) !important;
        border: 1px solid var(--divider-color) !important;
        color: var(--primary-text-color) !important;
      }

      /* Syntax highlighting for light theme */
      :host-context([data-theme='light']) .cm-editor,
      .cm-editor {
        --cm-keyword: #0000ff;
        --cm-function: #795e26;
        --cm-variable: #001080;
        --cm-string: #a31515;
        --cm-number: #098658;
        --cm-comment: #008000;
        --cm-operator: #000000;
        --cm-bracket: #0431fa;
        --cm-property: #001080;
        --cm-atom: #0000ff;
        color: var(--primary-text-color);
      }

      /* Syntax highlighting for dark theme */
      :host-context([data-theme='dark']) .cm-editor,
      :host([theme='dark']) .cm-editor {
        --cm-keyword: #569cd6;
        --cm-function: #dcdcaa;
        --cm-variable: #9cdcfe;
        --cm-string: #ce9178;
        --cm-number: #b5cea8;
        --cm-comment: #6a9955;
        --cm-operator: #d4d4d4;
        --cm-bracket: #ffd700;
        --cm-property: #9cdcfe;
        --cm-atom: #569cd6;
        color: var(--primary-text-color);
      }

      .cm-keyword {
        color: var(--cm-keyword);
        font-weight: bold;
      }

      .cm-function {
        color: var(--cm-function);
      }

      .cm-variableName {
        color: var(--cm-variable);
      }

      .cm-string {
        color: var(--cm-string);
      }

      .cm-number {
        color: var(--cm-number);
      }

      .cm-comment {
        color: var(--cm-comment);
        font-style: italic;
      }

      .cm-operator {
        color: var(--cm-operator);
      }

      .cm-bracket {
        color: var(--cm-bracket);
      }

      .cm-propertyName {
        color: var(--cm-property);
      }

      .cm-atom {
        color: var(--cm-atom);
      }

      /* Placeholder styling */
      .cm-placeholder {
        color: var(--secondary-text-color);
        opacity: 0.6;
      }

      /* Selection */
      .cm-selectionBackground {
        background: var(--primary-color) !important;
        opacity: 0.3;
      }

      .cm-focused .cm-selectionBackground {
        background: var(--primary-color) !important;
        opacity: 0.3;
      }

      /* Cursor - make it highly visible */
      .cm-cursor,
      .cm-cursor-primary {
        border-left: 2px solid var(--primary-text-color) !important;
        border-left-color: var(--primary-text-color) !important;
        margin-left: -1px;
      }

      .cm-focused .cm-cursor,
      .cm-focused .cm-cursor-primary {
        border-left: 2px solid var(--primary-color) !important;
        border-left-color: var(--primary-color) !important;
      }

      /* Active line */
      .cm-activeLine {
        background: var(--secondary-background-color);
      }

      /* Gutters */
      .cm-gutters {
        background: var(--secondary-background-color);
        border-right: 1px solid var(--divider-color);
        color: var(--secondary-text-color);
      }

      .cm-lineNumbers .cm-gutterElement {
        padding: 0 8px;
      }
    `}firstUpdated(t){super.firstUpdated(t),this._initializeEditor()}updated(t){if(super.updated(t),!this._isUpdating&&!this._userIsTyping){if(t.has("value")&&this._editor){const t=this._editor.state.doc.toString(),e=this._editor.hasFocus;if(t!==this.value&&!e&&!this._userIsTyping){this._isUpdating=!0;const e=this._editor.state.selection.main;this._editor.dispatch({changes:{from:0,to:t.length,insert:this.value},selection:e.from<=this.value.length?e:void 0}),this._isUpdating=!1}}if(t.has("hass")&&this._editor&&this.hass){const e=t.get("hass");if(!(e&&Object.keys(e.states||{}).length===Object.keys(this.hass.states||{}).length||this._editor.hasFocus||this._userIsTyping)){const t=this._editor.hasFocus,e=this._editor.state.selection.main;this._reinitializeEditor(),t&&e&&requestAnimationFrame(()=>{this._editor&&e.from<=this._editor.state.doc.length&&(this._editor.focus(),this._editor.dispatch({selection:{anchor:e.from,head:e.to}}))})}}}}disconnectedCallback(){super.disconnectedCallback(),this._destroyEditor()}_initializeEditor(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".editor-container");if(!e)return;const n=[a.Lz.lineWrapping,a.w4.of([...s.pw,s.Yc]),(0,d.Q2)(),(0,l.yU)({override:this.hass?[(i=this.hass,t=>{const e=t.matchBefore(/[\w.]+/);if(!e)return null;const n=t.state.doc.toString(),r=t.pos,a=n.substring(0,r),o=(n.substring(r),a.lastIndexOf("{{")>a.lastIndexOf("}}")),s=a.lastIndexOf("{%")>a.lastIndexOf("%}");if(!o&&!s&&e.from===e.to)return null;const l=[],d=e.text;if(/states\(['"]?$/.test(a)||/is_state\(['"]?$/.test(a))l.push(...h(i));else if(/state_attr\(['"][^'"]*['"],\s*['"]?$/.test(a)){const t=a.match(/state_attr\(['"]([^'"]+)['"]/);t&&t[1]&&l.push(...function(t,e){if(!t||!t.states||!t.states[e])return[];const n=t.states[e];return Object.keys(n.attributes||{}).map(t=>({label:t,type:"property",detail:"attribute",info:`${String(n.attributes[t])}`}))}(i,t[1]))}else/\|\s*\w*$/.test(a)?l.push(..._()):/states\.\w*$/.test(a)?l.push(...function(t){if(!t||!t.states)return[];const e=new Set;return Object.keys(t.states).forEach(t=>{const n=t.split(".")[0];e.add(n)}),Array.from(e).map(t=>({label:t,type:"namespace",detail:"domain"}))}(i)):/^[\w]+\.[\w]*$/.test(d)||/['"][\w]+\.[\w]*$/.test(a)?l.push(...h(i)):(s&&l.push(...u.map(t=>({label:t,type:"keyword"}))),l.push(...m.map(t=>({label:t,type:"function",detail:"HA function",apply:t.includes("(")?t:`${t}()`})),...h(i),..._()));const c=Array.from(new Map(l.map(t=>[t.label,t])).values());return{from:e.from,to:e.to,options:c,validFor:/^[\w.]*$/}})]:[],activateOnTyping:!0,maxRenderedOptions:20,closeOnBlur:!1}),a.Lz.contentAttributes.of({"aria-placeholder":this.placeholder}),a.Lz.updateListener.of(t=>{if(t.docChanged){this._userIsTyping=!0;const e=t.state.doc.toString();e===this.value||this._isUpdating||(this.value=e,requestAnimationFrame(()=>{this._dispatchValueChanged(e),setTimeout(()=>{this._userIsTyping=!1},150)}))}}),a.Lz.focusChangeEffect.of((t,e)=>(e&&(this._userIsTyping=!0),null)),a.Lz.theme({"&":{minHeight:`${this.minHeight}px`,maxHeight:`${this.maxHeight}px`},".cm-scroller":{overflow:"auto"},".cm-content":{caretColor:"var(--primary-color)"},".cm-cursor, .cm-dropCursor":{borderLeftColor:"var(--primary-color)"}}),a.Lz.domEventHandlers({keydown:t=>(t.stopPropagation(),t.stopImmediatePropagation(),!1),keypress:t=>(t.stopPropagation(),t.stopImmediatePropagation(),!1)})],r=o.$t.create({doc:this.value,extensions:n});var i;this._editor=new a.Lz({state:r,parent:e})}_reinitializeEditor(){this._destroyEditor(),this._initializeEditor()}_destroyEditor(){this._editor&&(this._editor.destroy(),this._editor=void 0)}_dispatchValueChanged(t){var e;!(null===(e=this._editor)||void 0===e?void 0:e.hasFocus)&&t.trim()&&t.includes("{{")&&!t.includes("}}")||t.includes("}}")&&!t.includes("{{")||this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}insertAtCursor(t){if(!this._editor)return;const e=this._editor.state.selection.main.head;this._editor.dispatch({changes:{from:e,insert:t},selection:{anchor:e+t.length,head:e+t.length}}),this._editor.focus()}focus(){var t;if(this._editor){const e=this._findScrollContainer(),n=null!==(t=null==e?void 0:e.scrollTop)&&void 0!==t?t:0;this._editor.focus(),e&&requestAnimationFrame(()=>{e.scrollTop=n})}}_findScrollContainer(){return g._findScrollableAncestor(this)}static _findScrollableAncestor(t){let e=t;for(;e;){const t=window.getComputedStyle(e);if("auto"===t.overflowY||"scroll"===t.overflowY||"auto"===t.overflow||"scroll"===t.overflow)return e;e=e.parentElement}return document.documentElement}_handleKeyDown(t){t.stopPropagation(),t.stopImmediatePropagation()}_handleKeyPress(t){t.stopPropagation(),t.stopImmediatePropagation()}render(){return r.qy`
      <div
        class="editor-container"
        @keydown=${this._handleKeyDown}
        @keypress=${this._handleKeyPress}
        @click=${t=>{var e;if(this._editor){const t=this._findScrollContainer(),n=null!==(e=null==t?void 0:t.scrollTop)&&void 0!==e?e:0;requestAnimationFrame(()=>{this._editor&&!this._editor.hasFocus&&(this._editor.focus(),t&&requestAnimationFrame(()=>{t.scrollTop=n}))})}}}
        @mousedown=${t=>{var e;if(this._editor){const t=this._findScrollContainer(),n=null!==(e=null==t?void 0:t.scrollTop)&&void 0!==e?e:0;setTimeout(()=>{this._editor&&!this._editor.hasFocus&&(this._editor.focus(),t&&requestAnimationFrame(()=>{t.scrollTop=n}))},0)}}}
      ></div>
    `}};y([(0,i.MZ)({attribute:!1})],v.prototype,"hass",void 0),y([(0,i.MZ)({type:String})],v.prototype,"value",void 0),y([(0,i.MZ)({type:String})],v.prototype,"placeholder",void 0),y([(0,i.MZ)({type:Number})],v.prototype,"minHeight",void 0),y([(0,i.MZ)({type:Number})],v.prototype,"maxHeight",void 0),y([(0,i.wk)()],v.prototype,"_editor",void 0),v=g=y([(0,i.EM)("ultra-template-editor")],v)},786(t,e,n){n.d(e,{UltraTrainModule:()=>N});var r=n(2618),i=n(7475),a=n(6478),o=n(5147),s=n(8938),l=n(3488),d=n(5320),c=n(5155);n(7921),n(9511);const u="#22c55e",p="#f59e0b",m="#ef4444",h="#ffb300",_=["expected_at","expected_departure_time","expected_departure","departure_time_actual","estimated_time","estimated_departure","estimated","real_time","realtime_departure","expected","actual_time","actual_departure","rt_departure","departure_actual"],g=["planned_time","departure_time_planned","scheduled_departure","scheduled_time","scheduled","aimed_departure_time","planned","departure_time","departure","due_at","time","depart","start_time","departure_planned"],f=["due_in","due_in_min","minutes_until_departure","departure_minutes","minutes","due"],y=["delay","delayed_time","departure_delay","delay_minutes","delay_min","number_of_minutes_delayed","delay_seconds","late","delay_time"],v=["departure_state","status","train_status","state","realtime_state"],x=["cancelled","canceled","is_cancelled","is_canceled"],b=["destination","destination_name","direction","headsign","to","arrival_station","end_station","towards"],w=["line","line_name","route","route_short_name","train_type","product","product_filter","transport_mode","operator_name","train_number","vehicle_id","category","line_number"],k=["platform","track","departure_platform_actual","departure_platform_planned","stop_position","quay"],$=["other_info","other_information","deviation","deviations","remarks","message","info","note","disruption"],S=["departures","next_departures","next_trains","trains","next","connections","upcoming","journeys","services","items"],T=t=>t.toLowerCase().replace(/[\s-]+/g,"_");function z(t){const e=new Map;for(const[n,r]of Object.entries(t))e.set(T(n),r);return e}function C(t,e,n=""){for(const r of e){const e=t.get(n+r);if(null!=e&&""!==e&&"unknown"!==e&&"unavailable"!==e)return e}}const M=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/;function D(t,e){if(t instanceof Date)return Number.isNaN(t.getTime())?null:t;if("number"==typeof t)return Number.isFinite(t)?t>1e12?new Date(t):t>1e9?new Date(1e3*t):new Date(e.getTime()+6e4*t):null;if("string"!=typeof t)return null;const n=t.trim();if(!n)return null;const r=M.exec(n);if(r){const t=new Date(e);return t.setHours(Number(r[1]),Number(r[2]),r[3]?Number(r[3]):0,0),t.getTime()<e.getTime()-108e5&&t.setDate(t.getDate()+1),t}if(/^-?\d+(\.\d+)?$/.test(n))return D(Number(n),e);const i=new Date(n);return!Number.isNaN(i.getTime())&&/\d{4}-\d{2}-\d{2}/.test(n)||!Number.isNaN(i.getTime())&&/\d/.test(n)?i:null}function A(t,e="",n=""){if(null==t||"boolean"==typeof t)return null;const r=/second|_s$|^s$|sec/.test(e.toLowerCase())||/^(s|sec|seconds?)$/i.test(n);if("number"==typeof t)return Number.isFinite(t)?r?t/60:t:null;const i=String(t).trim().toLowerCase(),a=/^(\d+):(\d{2}):(\d{2})$/.exec(i);if(a)return 60*Number(a[1])+Number(a[2])+Number(a[3])/60;const o=parseFloat(i);return Number.isNaN(o)?null:/sec/.test(i)||r&&!/min/.test(i)?o/60:/\bh(our)?s?\b/.test(i)&&!/min/.test(i)?60*o:o}function q(t){if(!0===t)return"cancelled";if("string"!=typeof t)return"unknown";const e=t.toLowerCase();return/cancel|annull|inställ|geannuleerd|ausfall|supprim/.test(e)?"cancelled":/delay|late|försen|vertraag|verspät|retard|ritardo/.test(e)?"delayed":/on[_ ]?time|punctual|scheduled|planned|i tid|op tijd|pünktlich|à l'heure|in orario/.test(e)?"on_time":"unknown"}const E=t=>!0===t||/^(true|on|yes|1)$/i.test(String(null!=t?t:""));function P(t,e,n="",r){const i=z(t);let a=D(C(i,g,n),e),o=D(C(i,_,n),e);if(!a&&!o){const t=C(i,f,n);void 0!==t&&(o=D(Number(t),e))}if(a||o||void 0===r||(a=D(r,e)),!a&&!o)return null;let s=0;for(const t of y){const e=C(i,[t],n);if(void 0===e)continue;if("boolean"==typeof e){e&&a&&o?s=Math.max(0,(o.getTime()-a.getTime())/6e4):e&&(s=1);break}const r=A(e,t);if(null!==r){s=Math.max(0,r);break}}!s&&a&&o&&(s=Math.max(0,(o.getTime()-a.getTime())/6e4));let l=q(C(i,v,n));E(C(i,x,n))&&(l="cancelled");const d=t=>null==t?void 0:String(t).trim()||void 0,c=C(i,$,n),u=Array.isArray(c)?c.map(t=>"object"==typeof t&&t?Object.values(t).join(" "):String(t)).join(" · "):d(c);return{planned:a,expected:o,delayMin:s,status:l,destination:d(C(i,b,n)),line:d(C(i,w,n)),platform:d(C(i,k,n)),note:u&&"none"!==u.toLowerCase()?u:void 0,color:d(C(i,["color","colour"],n))}}function j(t,e,n){var r;const i=null===(r=null==t?void 0:t.states)||void 0===r?void 0:r[e];if(!i)return[];const a=i.attributes||{},o=z(a),s=[],l="unknown"!==i.state&&"unavailable"!==i.state&&"none"!==i.state;let d=l?i.state:void 0;if(l&&/^-?\d+(\.\d+)?$/.test(i.state)){const t=String(a.unit_of_measurement||"").toLowerCase(),e=Number(i.state);d=t&&/^(s|sec|seconds?)$/.test(t)?e/60:e}const c=P(a,n,"",d);for(const t of S){const e=C(o,[t]);if(Array.isArray(e)&&e.length){for(const t of e){if(!t||"object"!=typeof t)continue;const e=P(t,n);e&&s.push(e)}break}}const u=t=>{var e,n,r;return Math.round((null!==(r=null===(n=null!==(e=t.expected)&&void 0!==e?e:t.planned)||void 0===n?void 0:n.getTime())&&void 0!==r?r:NaN)/3e4)},p=new Set(s.map(u));if(c&&!p.has(u(c))&&(s.unshift(c),p.add(u(c))),C(o,["next_due_at","next_due_in","next_expected_at","next_departure","next_departure_time"])){const t=P(a,n,"next_");t&&!p.has(u(t))&&s.push(t)}return s}class N extends i.m{constructor(){super(...arguments),this.metadata={type:"train",title:"Train Departures",description:"Animated departure board with the next trains as status-colored icons, live countdown, delays, and an LED dot-matrix style",author:"WJD Designs",version:"1.0.0",icon:"mdi:train",category:"data",tags:["train","departures","transit","public transport","commute","timetable","station","animated","pro","premium"]},this._tickTimer=null}createDefault(t){return{id:t||this.generateId("train"),type:"train",source:"entities",departure_entities:[],template:"",name:"",icon:"",layout:"standard",board_style:"modern",status_entity:"",delay_entity:"",cancelled_entity:"",info_entity:"",max_departures:3,delay_threshold:1,imminent_minutes:5,time_format:"auto",show_name:!0,show_countdown:!0,show_times:!0,show_status:!0,show_details:!0,show_info:!0,show_track:!0,enable_animations:!0,on_time_color:"",delayed_color:"",cancelled_color:"",led_color:"",text_color:"",secondary_text_color:"",card_background_color:"",tap_action:{action:"more-info"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}renderActionsTab(t,e,n,r){return o.A.render(t,e,t=>r(t))}renderOtherTab(t,e,n,r){return s.X.render(t,e,t=>r(t))}renderGeneralTab(t,e,n,i){var o;const s=t,d=(null===(o=null==e?void 0:e.locale)||void 0===o?void 0:o.language)||"en";if(!(0,l.gf)(e))return(0,l.b5)(d,(0,a.kg)("editor.train.pro_description",d,"The Train module turns your departure sensors into an animated departure board: the next trains as status-colored icons, a live countdown, delays and cancellations, and an LED dot-matrix style."));const c=s.source||"entities",_="led"===(s.board_style||"modern"),g=(t,a,o,l)=>r.qy`
      <div style="margin-bottom: 12px;">
        ${this.renderEntityPickerWithVariables(e,n,t,s[t]||"",e=>{i({[t]:e}),setTimeout(()=>this.triggerPreviewUpdate(),50)},l,a)}
        <div style="font-size:0.78rem; color:var(--secondary-text-color); margin-top:3px; padding-left:2px;">
          ${o}
        </div>
      </div>
    `,f=(t,n,r="")=>({title:n,description:r,hass:e,data:{[t]:!1!==s[t]},schema:[this.booleanField(t)],onChange:e=>{var n,r;i({[t]:null===(r=null===(n=e.detail.value)||void 0===n?void 0:n[t])||void 0===r||r}),this.triggerPreviewUpdate()}}),y=(t,n,r,a,o,l,d)=>{var c;return{title:n,description:r,hass:e,data:{[t]:null!==(c=s[t])&&void 0!==c?c:d},schema:[this.numberField(t,a,o,l)],onChange:e=>{var n,r;i({[t]:null!==(r=null===(n=e.detail.value)||void 0===n?void 0:n[t])&&void 0!==r?r:d}),this.triggerPreviewUpdate()}}},v=(t,n,r)=>this.renderColorField(n,"",e,s[t]||"",r,e=>{i({[t]:e}),this.triggerPreviewUpdate()});return r.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        ${this.renderSettingsSection((0,a.kg)("editor.train.source_section",d,"Departures"),(0,a.kg)("editor.train.source_section_desc",d,"Pick the sensors that hold your departures, or write a template that returns them as JSON."),[])}
        ${this.renderSegmentedField((0,a.kg)("editor.train.source",d,"Source"),(0,a.kg)("editor.train.source_desc",d,"Entities reads departure sensors directly. Template lets you shape the departures yourself."),c,[{value:"entities",label:(0,a.kg)("editor.train.source_entities",d,"Entities"),icon:"mdi:database-marker"},{value:"template",label:(0,a.kg)("editor.train.source_template",d,"Template"),icon:"mdi:code-braces"}],t=>{i({source:t}),this.triggerPreviewUpdate()})}
        ${"template"===c?r.qy`
              <div
                style="margin-bottom:16px;"
                @mousedown=${t=>{const e=t.target;e.closest("ultra-template-editor")||e.closest(".cm-editor")||t.stopPropagation()}}
                @dragstart=${t=>t.stopPropagation()}
                @insert-snippet=${t=>{var e,n,r;const i=t.currentTarget.querySelector("ultra-template-editor");null===(e=null==i?void 0:i.insertAtCursor)||void 0===e||e.call(i,null!==(r=null===(n=t.detail)||void 0===n?void 0:n.value)&&void 0!==r?r:"")}}
              >
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
                  <div style="font-size:14px;font-weight:600;">
                    ${(0,a.kg)("editor.train.template",d,"Departures template")}
                  </div>
                  <button
                    type="button"
                    class="help-btn"
                    style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;background:var(--primary-color, #03a9f4);border:none;color:var(--text-primary-color, #fff);cursor:pointer;border-radius:50%;line-height:0;"
                    title="${(0,a.kg)("editor.train.template_cheatsheet",d,"Template cheatsheet")}"
                    @click=${t=>{t.currentTarget.dispatchEvent(new CustomEvent("uc-open-template-cheatsheet",{bubbles:!0,composed:!0,detail:{module:"train"}}))}}
                  >
                    <ha-icon icon="mdi:help-circle" style="--mdc-icon-size:18px;width:18px;height:18px;"></ha-icon>
                  </button>
                </div>
                <div style="font-size:13px;color:var(--secondary-text-color);margin-bottom:10px;line-height:1.5;">
                  ${(0,a.kg)("editor.train.template_desc",d,"Return a JSON array, next train first. Each item may have time, expected, delay (minutes), status (on_time / delayed / cancelled), destination, line, platform, note, and color.")}
                </div>
                <ultra-template-editor
                  .hass=${e}
                  .value=${s.template||""}
                  .placeholder=${'[\n  {% for t in state_attr(\'sensor.my_station\', \'departures\') %}\n  {\n    "time": "{{ t.scheduled }}",\n    "expected": "{{ t.estimated }}",\n    "status": "{{ \'cancelled\' if t.cancelled else (\'delayed\' if t.delay > 0 else \'on_time\') }}",\n    "destination": "{{ t.destination }}",\n    "platform": "{{ t.platform }}"\n  }{{ "," if not loop.last }}\n  {% endfor %}\n]'}
                  .minHeight=${180}
                  .maxHeight=${480}
                  @value-changed=${t=>{i({template:t.detail.value}),setTimeout(()=>this.triggerPreviewUpdate(),50)}}
                ></ultra-template-editor>
              </div>
            `:this.renderChipListField((0,a.kg)("editor.train.departure_entities",d,"Departure sensors"),(0,a.kg)("editor.train.departure_entities_desc",d,"One sensor per train, next train first. A sensor whose attributes carry a list of departures is expanded automatically."),e,s.departure_entities||[],t=>{i({departure_entities:t}),this.triggerPreviewUpdate()},{mode:"entity",placeholder:(0,a.kg)("editor.train.departure_entities_placeholder",d,"Add a departure sensor"),entityDomains:["sensor"]})}

        ${this.renderSettingsSection((0,a.kg)("editor.train.appearance_section",d,"Route"),(0,a.kg)("editor.train.appearance_section_desc",d,"How the board is titled and laid out."),[{title:(0,a.kg)("editor.train.name",d,"Route name"),description:(0,a.kg)("editor.train.name_desc",d,'For example "Triangeln – Trelleborg C". Leave blank to use the first sensor name.'),hass:e,data:{name:s.name||""},schema:[this.textField("name")],onChange:t=>{var e,n;i({name:null!==(n=null===(e=t.detail.value)||void 0===e?void 0:e.name)&&void 0!==n?n:""}),this.triggerPreviewUpdate()}}])}
        ${this.renderIconField((0,a.kg)("editor.train.icon",d,"Icon override"),(0,a.kg)("editor.train.icon_desc",d,"Shown next to the countdown. Leave blank for the timer icon."),e,s.icon||"",t=>{i({icon:t}),this.triggerPreviewUpdate()})}
        ${this.renderSegmentedField((0,a.kg)("editor.train.layout",d,"Layout"),(0,a.kg)("editor.train.layout_desc",d,"Standard puts the route on the left and the trains on the right; compact is a single row."),s.layout||"standard",[{value:"standard",label:(0,a.kg)("editor.train.layout_standard",d,"Standard"),icon:"mdi:view-agenda-outline"},{value:"compact",label:(0,a.kg)("editor.train.layout_compact",d,"Compact"),icon:"mdi:view-stream-outline"}],t=>{i({layout:t}),this.triggerPreviewUpdate()})}
        ${this.renderSegmentedField((0,a.kg)("editor.train.board_style",d,"Style"),(0,a.kg)("editor.train.board_style_desc",d,"Modern follows your theme. LED board is a dark dot-matrix departure display."),s.board_style||"modern",[{value:"modern",label:(0,a.kg)("editor.train.style_modern",d,"Modern"),icon:"mdi:card-outline"},{value:"led",label:(0,a.kg)("editor.train.style_led",d,"LED board"),icon:"mdi:dots-grid"}],t=>{i({board_style:t}),this.triggerPreviewUpdate()})}

        ${this.renderSettingsSection((0,a.kg)("editor.train.realtime_section",d,"Next Train Realtime"),(0,a.kg)("editor.train.realtime_section_desc",d,"All optional. Some integrations publish the next train's realtime state as separate sensors (Trafikverket, for example). Link them here and they color the first train."),[])}
        ${g("status_entity",(0,a.kg)("editor.train.status_entity",d,"Departure state"),(0,a.kg)("editor.train.status_entity_desc",d,"Sensor reporting on time, delayed, or cancelled"),["sensor","binary_sensor","input_select","input_text"])}
        ${g("delay_entity",(0,a.kg)("editor.train.delay_entity",d,"Delay"),(0,a.kg)("editor.train.delay_entity_desc",d,"Minutes or seconds late; the unit is read from the sensor"),["sensor","input_number","number"])}
        ${g("cancelled_entity",(0,a.kg)("editor.train.cancelled_entity",d,"Cancelled"),(0,a.kg)("editor.train.cancelled_entity_desc",d,"On when the next train is cancelled"),["binary_sensor","sensor","input_boolean"])}
        ${g("info_entity",(0,a.kg)("editor.train.info_entity",d,"Deviations / info"),(0,a.kg)("editor.train.info_entity_desc",d,"Free-text sensor shown as a ticker under the board"),["sensor","input_text"])}

        ${this.renderSettingsSection((0,a.kg)("editor.train.display_section",d,"Display"),(0,a.kg)("editor.train.display_section_desc",d,"Choose what the board shows."),[y("max_departures",(0,a.kg)("editor.train.max_departures",d,"Trains to show"),(0,a.kg)("editor.train.max_departures_desc",d,"The next train is always the largest"),1,6,1,3),f("show_name",(0,a.kg)("editor.train.show_name",d,"Show route name")),f("show_countdown",(0,a.kg)("editor.train.show_countdown",d,"Show countdown"),(0,a.kg)("editor.train.show_countdown_desc",d,'"Departs in 23 min" for the next train that is running')),f("show_status",(0,a.kg)("editor.train.show_status",d,"Show status"),(0,a.kg)("editor.train.show_status_desc",d,"On time, delayed by, or cancelled")),f("show_details",(0,a.kg)("editor.train.show_details",d,"Show details"),(0,a.kg)("editor.train.show_details_desc",d,"Line, destination, and platform when the sensor provides them")),f("show_times",(0,a.kg)("editor.train.show_times",d,"Show departure times")),f("show_track",(0,a.kg)("editor.train.show_track",d,"Show track"),(0,a.kg)("editor.train.show_track_desc",d,"Railway track under the trains")),f("show_info",(0,a.kg)("editor.train.show_info",d,"Show deviations ticker")),f("enable_animations",(0,a.kg)("editor.train.animations",d,"Enable animations"),(0,a.kg)("editor.train.animations_desc",d,"Headlights, rolling track, and the imminent-departure pulse"))])}
        ${this.renderSegmentedField((0,a.kg)("editor.train.time_format",d,"Time format"),"",s.time_format||"auto",[{value:"auto",label:(0,a.kg)("editor.train.time_auto",d,"Auto"),icon:"mdi:earth"},{value:"24",label:(0,a.kg)("editor.train.time_24",d,"24h"),icon:"mdi:clock-time-eight-outline"},{value:"12",label:(0,a.kg)("editor.train.time_12",d,"12h"),icon:"mdi:clock-time-four-outline"}],t=>{i({time_format:t}),this.triggerPreviewUpdate()})}

        ${this.renderSettingsSection((0,a.kg)("editor.train.behaviour_section",d,"Thresholds"),(0,a.kg)("editor.train.behaviour_section_desc",d,"When a train counts as delayed and when the next one lights up."),[y("delay_threshold",(0,a.kg)("editor.train.delay_threshold",d,"Delayed from (minutes)"),(0,a.kg)("editor.train.delay_threshold_desc",d,"Shorter delays are still shown as on time"),0,30,1,1),y("imminent_minutes",(0,a.kg)("editor.train.imminent_minutes",d,"Leaving soon (minutes)"),(0,a.kg)("editor.train.imminent_minutes_desc",d,"Within this window the next train pulses and its headlights come on"),0,60,1,5)])}

        ${this.renderSettingsSection((0,a.kg)("editor.train.colors_section",d,"Colors"),(0,a.kg)("editor.train.colors_section_desc",d,"Each train takes the color of its status."),[])}
        ${v("on_time_color",(0,a.kg)("editor.train.on_time_color",d,"On time"),u)}
        ${v("delayed_color",(0,a.kg)("editor.train.delayed_color",d,"Delayed"),p)}
        ${v("cancelled_color",(0,a.kg)("editor.train.cancelled_color",d,"Cancelled"),m)}
        ${_?v("led_color",(0,a.kg)("editor.train.led_color",d,"LED text color"),h):r.qy`
              ${v("text_color",(0,a.kg)("editor.train.text_color",d,"Text color"),"var(--primary-text-color)")}
              ${v("secondary_text_color",(0,a.kg)("editor.train.secondary_text_color",d,"Secondary text color"),"var(--secondary-text-color)")}
              ${v("card_background_color",(0,a.kg)("editor.train.card_bg",d,"Card background"),"var(--card-background-color)")}
            `}
      </div>
    `}_collect(t,e,n,r){var i,a,o,s,l,u;const p=t=>t?this.resolveEntity(t,n)||t:void 0,m=null!==(i=t.delay_threshold)&&void 0!==i?i:1;let h,_,g=[];if("template"===(t.source||"entities")){const i=(t.template||"").trim();if(!i)return{departures:[]};this._templateService?this._templateService.updateHass(e):this._templateService=new d.I(e),e.__uvc_template_strings||(e.__uvc_template_strings={});const s=(0,c.KD)(i,e,n),l=`train_${t.id}_${function(t){let e=0;for(let n=0;n<t.length;n+=1)e=(e<<5)-e+t.charCodeAt(n)&4294967295;return Math.abs(e).toString(36)}(s)}`;this._templateService.subscribeToTemplate(s,l,()=>this.triggerPreviewUpdate(),{},n);const u=null!==(a=this._templateService.getLastResult(l))&&void 0!==a?a:null===(o=e.__uvc_template_strings)||void 0===o?void 0:o[l];if(null==u||""===u)return null;try{const t=function(t,e){let n=t;if("string"==typeof t){const e=t.trim();if(!e)return{departures:[]};try{n=JSON.parse(e)}catch(t){throw new Error("not json")}}let r,i,a=[];if(Array.isArray(n))a=n;else if(n&&"object"==typeof n){const t=n,e=C(z(t),S);a=Array.isArray(e)?e:[t],"string"==typeof t.name&&(r=t.name),"string"!=typeof t.route||r||(r=t.route),"string"==typeof t.note&&(i=t.note),"string"!=typeof t.info||i||(i=t.info)}return{departures:a.map(t=>t&&"object"==typeof t?P(t,e):null).filter(t=>!!t),name:r,note:i}}(u,r);g=t.departures,h=t.name,_=t.note}catch(t){return{departures:[],error:"template"}}}else{const n=(t.departure_entities||[]).map(p).filter(t=>!!t);for(const t of n)g.push(...j(e,t,r));const i=n[0]?e.states[n[0]]:void 0;i&&(h=function(t){return t.replace(/\s*[-–—:]?\s*(next\s+)?(departure|departures|departure\s+time|avgång|vertrek|abfahrt)\s*$/i,"").trim()}(String((null===(s=i.attributes)||void 0===s?void 0:s.friendly_name)||n[0])))}if(g=function(t,e){const n=t=>{var e,n,r;return null!==(r=null===(n=null!==(e=t.expected)&&void 0!==e?e:t.planned)||void 0===n?void 0:n.getTime())&&void 0!==r?r:Number.MAX_SAFE_INTEGER};return t.map(t=>{const n=Object.assign({},t);return!n.expected&&n.planned&&(n.expected=n.delayMin>0?new Date(n.planned.getTime()+6e4*n.delayMin):n.planned),!n.planned&&n.expected&&(n.planned=n.delayMin>0?new Date(n.expected.getTime()-6e4*n.delayMin):n.expected),"cancelled"!==n.status&&(n.delayMin>=e?n.status="delayed":"delayed"===n.status&&(n.status="on_time")),n}).sort((t,e)=>n(t)-n(e))}(g,m),g.length){const n=g[0],r=p(t.status_entity),i=p(t.delay_entity),a=p(t.cancelled_entity);if(i&&e.states[i]){const t=e.states[i],r=A(t.state,"",String((null===(l=t.attributes)||void 0===l?void 0:l.unit_of_measurement)||""));null!==r&&(n.delayMin=Math.max(0,r),n.planned&&(n.expected=new Date(n.planned.getTime()+6e4*n.delayMin)),n.status=n.delayMin>=m?"delayed":"on_time")}if(r&&e.states[r]){const t=q(e.states[r].state);"unknown"!==t&&(n.status=t)}a&&e.states[a]&&E(e.states[a].state)&&(n.status="cancelled")}const f=p(t.info_entity);if(f&&e.states[f]){const t=e.states[f].state;t&&!/^(unknown|unavailable|none|null|\[\]|)$/i.test(t.trim())&&(_=t)}return _||(_=null===(u=g.find(t=>t.note))||void 0===u?void 0:u.note),{departures:g,name:h,note:_}}renderPreview(t,e,n,i){var o,s,l,d,c,_,g,f,y;const v=t,x=(null===(o=null==e?void 0:e.locale)||void 0===o?void 0:o.language)||"en",b=new Date,w="led"===(v.board_style||"modern"),k="compact"===(v.layout||"standard"),$=!1!==v.enable_animations;if(!("template"===(v.source||"entities")?(v.template||"").trim():(v.departure_entities||[]).length>0)||!e)return r.qy`
        <style>${this.getStyles()}</style>
        ${this.renderGradientErrorState((0,a.kg)("editor.train.config_needed",x,"Add a departure sensor"),(0,a.kg)("editor.train.config_needed_desc",x,"Pick your train sensors or a template in the General tab"),"mdi:train")}
      `;this._ensureTick();const S=this._collect(v,e,n,b),T=v.led_color||h,z=w?T:v.text_color||"var(--primary-text-color)",C=w?`color-mix(in srgb, ${T} 62%, transparent)`:v.secondary_text_color||"var(--secondary-text-color)",M=w?v.card_background_color||"#0e0f12":v.card_background_color||"var(--uc-pane-bg, var(--card-background-color))",D=t=>t.color||("cancelled"===t.status?v.cancelled_color||m:"delayed"===t.status?v.delayed_color||p:v.on_time_color||u),A=this.buildStyleString(this.buildDesignStyles(t,e)),q=this.getHoverEffectClass(t),E=(v.departure_entities||[])[0],P=this.createGestureHandlers(v.id,{tap_action:(null===(s=v.tap_action)||void 0===s?void 0:s.action)?Object.assign(Object.assign({},v.tap_action),{entity:E}):{action:E?"more-info":"nothing",entity:E},hold_action:v.hold_action,double_tap_action:v.double_tap_action,entity:E,module:v},e,n),j=n=>r.qy`
      <style>${this.getStyles()}</style>
      <div
        class="uc-train ${w?"uc-train--led":""} ${k?"uc-train--compact":""} ${q}"
        data-uc-role="pane"
        style="--uc-train-led:${T};--uc-train-text:${z};--uc-train-secondary:${C};--uc-train-bg:${M};background:${M};${A}"
        @pointerdown=${P.onPointerDown}
        @pointermove=${P.onPointerMove}
        @pointerup=${P.onPointerUp}
        @pointerleave=${P.onPointerLeave}
        @pointercancel=${P.onPointerCancel}
      >
        ${this.wrapWithAnimation(n,t,e)}
      </div>
    `,N=(t,e,n,i=!1)=>j(r.qy`
      <div class="uc-train__empty">
        <ha-icon icon="${t}" class="${i?"uc-train--spin":""}" style="--mdc-icon-size:22px;color:${C};"></ha-icon>
        <div>
          <div class="uc-train__led-text" style="color:${z};font-weight:600;">${e}</div>
          <div class="uc-train__led-solid" style="color:${C};font-size:12px;">${n}</div>
        </div>
      </div>
    `);if(null===S)return N("mdi:loading",(0,a.kg)("editor.train.loading",x,"Reading timetable"),(0,a.kg)("editor.train.loading_desc",x,"Waiting for the template result"),!0);if(S.error)return N("mdi:alert-circle-outline",(0,a.kg)("editor.train.template_error",x,"Template must return JSON"),(0,a.kg)("editor.train.template_error_desc",x,'Return an array of departures, for example [{"time": "11:11", "status": "on_time"}]'));const F=Math.max(1,Math.min(6,Math.round(null!==(l=v.max_departures)&&void 0!==l?l:3))),L=S.departures.slice(0,F),O=(null===(d=v.name)||void 0===d?void 0:d.trim())||S.name||(0,a.kg)("editor.train.default_name",x,"Next departures");if(!L.length)return N("mdi:train-variant",O,(0,a.kg)("editor.train.no_departures",x,"No departures right now"));const U=null!==(c=L.find(t=>"cancelled"!==t.status))&&void 0!==c?c:L[0],I=null!==(_=U.expected)&&void 0!==_?_:U.planned,H=I?Math.round((I.getTime()-b.getTime())/6e4):null,W=null!==(g=v.imminent_minutes)&&void 0!==g?g:5,R=null!==H&&H<=W&&H>=-1&&"cancelled"!==U.status,J=(()=>{if("cancelled"===U.status)return(0,a.kg)("editor.train.state_cancelled",x,"Cancelled");if(null===H)return"";if(H<=0&&H>=-1)return(0,a.kg)("editor.train.departing_now",x,"Departing now");if(H<-1)return(0,a.kg)("editor.train.departed",x,"Departed");if(H>=120){const t=Math.floor(H/60),e=H%60;return(0,a.kg)("editor.train.departs_in_hours",x,"Departs in {h}h {m}m").replace("{h}",String(t)).replace("{m}",String(e).padStart(2,"0"))}return(0,a.kg)("editor.train.departs_in",x,"Departs in {n} min").replace("{n}",String(H))})(),B=t=>{switch(t.status){case"cancelled":return(0,a.kg)("editor.train.state_cancelled",x,"Cancelled");case"delayed":return t.delayMin>=1?(0,a.kg)("editor.train.state_delayed_by",x,"Delayed {n} min").replace("{n}",String(Math.round(t.delayMin))):(0,a.kg)("editor.train.state_delayed",x,"Delayed");case"on_time":return(0,a.kg)("editor.train.state_on_time",x,"On time");default:return(0,a.kg)("editor.train.state_scheduled",x,"Scheduled")}},G=t=>t?this._formatTime(t,e,v,x):"—",V=[U.line,U.destination,U.platform?(0,a.kg)("editor.train.platform",x,"Platform {p}").replace("{p}",U.platform):void 0].filter(Boolean).join(" · "),X=D(U),Z=v.icon||"mdi:timer-outline",K=k?34:56,Y=!1!==v.show_track,Q=r.qy`
      <div class="uc-train__row">
        ${L.map((t,e)=>{var n;const i=(t=>Math.round(K*Math.max(.58,1-.19*t)))(e),a=D(t),o=t===U,s=o&&R,l="cancelled"===t.status,d=Y?Math.round(18*i/64):0,c=G(null!==(n=t.expected)&&void 0!==n?n:t.planned),u="delayed"===t.status&&t.planned&&t.expected&&t.planned.getTime()!==t.expected.getTime()?G(t.planned):null,p=e+1,m=`${B(t)}${t.destination?` · ${t.destination}`:""}${t.platform?` · ${t.platform}`:""}`;return r.qy`
            <div
              class="uc-train__icon ${s&&$?"uc-train__icon--imminent":""} ${l?"uc-train__icon--cancelled":""}"
              style="grid-column:${p};width:${i}px;height:${i+d}px;color:${a};--uc-tsz:${i}px;"
              title="${m}"
            >
              ${this._trainSvg(v.id,e,i,a,w,s,l,"delayed"===t.status&&t.delayMin>=1&&i>=44?`+${Math.round(t.delayMin)}`:null)}
              ${Y?r.qy`
                    <!-- Track as a tilted plane: near edge (bottom) wide, far edge (under the wheels) narrow. -->
                    <div class="uc-train__bed" style="height:${d}px;" aria-hidden="true">
                      <div class="uc-train__rails ${$&&!l?"uc-train__rails--roll":""}"></div>
                    </div>
                  `:r.s6}
            </div>
            ${!1!==v.show_times?r.qy`
                  <div class="uc-train__stop-time" style="grid-column:${p};" title="${m}">
                    <div
                      class="uc-train__time ${k?"uc-train__led-solid":"uc-train__led-text"} ${l?"uc-train__time--cancelled":""}"
                      style="color:${w?T:o?z:C};font-size:${k?12:Math.max(12,Math.round(.29*i))}px;"
                    >
                      ${c}
                    </div>
                    ${u&&!k?r.qy`<div class="uc-train__planned" style="color:${C};">${u}</div>`:r.s6}
                  </div>
                `:r.s6}
          `})}
      </div>
    `,tt=$&&(null!==(y=null===(f=S.note)||void 0===f?void 0:f.length)&&void 0!==y?y:0)>42,et=!1!==v.show_info&&S.note?r.qy`
            <div class="uc-train__info ${tt?"uc-train__info--scroll":""}" style="color:${w?T:C};">
              <ha-icon icon="mdi:information-outline" style="--mdc-icon-size:14px;flex-shrink:0;"></ha-icon>
              <div class="uc-train__ticker">
                <span class="uc-train__ticker-text uc-train__led-solid ${tt?"uc-train__ticker-text--scroll":""}">${S.note}</span>
              </div>
            </div>
          `:r.s6;return j(k?r.qy`
        <div class="uc-train__compact">
          <ha-icon icon="${v.icon||"mdi:train"}" class="${R&&$?"uc-train--pulse":""}" style="color:${X};--mdc-icon-size:24px;flex-shrink:0;"></ha-icon>
          <div class="uc-train__compact-main">
            ${!1!==v.show_name?r.qy`<div class="uc-train__name uc-train__led-text" style="color:${z};">${O}</div>`:r.s6}
            ${!1!==v.show_countdown||!1!==v.show_status?r.qy`
                  <div class="uc-train__sub uc-train__led-solid" style="color:${C};">
                    ${!1!==v.show_countdown?r.qy`<span style="color:${R?X:z};font-weight:600;">${J}</span>`:r.s6}
                    ${!1!==v.show_status&&"cancelled"!==U.status?r.qy`<span style="color:${X};"> · ${B(U)}</span>`:r.s6}
                  </div>
                `:r.s6}
          </div>
          ${Q}
        </div>
        ${et}
      `:r.qy`
      <div class="uc-train__body">
        <div class="uc-train__left">
          ${!1!==v.show_name?r.qy`<div class="uc-train__name uc-train__led-text" style="color:${z};">${O}</div>`:r.s6}
          ${!1!==v.show_countdown?r.qy`
                <div class="uc-train__countdown ${R&&$?"uc-train__countdown--soon":""}">
                  <span class="uc-train__badge ${w?"uc-train__badge--led":""}" style="--uc-badge:${X};">
                    <ha-icon icon="${Z}" style="--mdc-icon-size:18px;"></ha-icon>
                  </span>
                  <span class="uc-train__countdown-text uc-train__led-text" style="color:${z};">${J}</span>
                </div>
              `:r.s6}
          ${!1!==v.show_status||!1!==v.show_details&&V?r.qy`
                <div class="uc-train__meta uc-train__led-solid" style="color:${C};">
                  ${!1!==v.show_status?r.qy`<span style="color:${X};font-weight:600;">${B(U)}</span>`:r.s6}
                  ${!1!==v.show_details&&V?r.qy`<span>${!1!==v.show_status?" · ":""}${V}</span>`:r.s6}
                </div>
              `:r.s6}
        </div>
        ${Q}
      </div>
      ${et}
    `)}_trainSvg(t,e,n,i,a,o,s,l){const d=`uct-${String(t).replace(/[^a-zA-Z0-9_-]/g,"")}-${e}`,c="var(--uc-train-bg, var(--card-background-color))",u=a?c:"color-mix(in srgb, #0b1020 82%, var(--card-background-color))",p=o?"#fff7cc":a?"rgba(255,247,204,0.7)":`color-mix(in srgb, #fff 55%, ${i})`,m=a?i:`color-mix(in srgb, ${i} 62%, #000)`,h=64/Math.max(16,n)*3;return r.JW`
      <svg viewBox="0 0 64 64" width="${n}" height="${n}" aria-hidden="true" class="uc-train-svg ${s?"uc-train-svg--cancelled":""}">
        <defs>
          <pattern id="${d}-dots" width="${h}" height="${h}" patternUnits="userSpaceOnUse">
            <circle cx="${h/2}" cy="${h/2}" r="${.34*h}" fill="#fff" />
          </pattern>
          <mask id="${d}-mask">
            <rect width="64" height="64" fill="url(#${d}-dots)" />
          </mask>
          <linearGradient id="${d}-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#fff" stop-opacity="0.22" />
            <stop offset="0.5" stop-color="#fff" stop-opacity="0" />
            <stop offset="1" stop-color="#000" stop-opacity="0.18" />
          </linearGradient>
        </defs>
        <g mask="${a?`url(#${d}-mask)`:"none"}">
          <!-- wheels seen head-on: a tread showing under each side of the bumper -->
          <rect x="11" y="53" width="8" height="11" rx="2.5" fill="${m}" style="${a?`stroke:${c};stroke-width:1.4`:""}" />
          <rect x="45" y="53" width="8" height="11" rx="2.5" fill="${m}" style="${a?`stroke:${c};stroke-width:1.4`:""}" />
          <!-- bumper -->
          <rect x="7" y="48" width="50" height="7" rx="3.5" fill="${i}" />
          <!-- body -->
          <rect x="10" y="4" width="44" height="45" rx="13" fill="${i}" />
          ${a?r.JW`<rect x="7" y="48.2" width="50" height="1.6" style="fill:${c}" />`:r.JW`<rect x="10" y="4" width="44" height="45" rx="13" fill="url(#${d}-body)" />`}
          <!-- roof marker light -->
          <rect x="28" y="7" width="8" height="3" rx="1.5" fill="${a?"rgba(255,247,204,0.6)":"rgba(255,255,255,0.35)"}" />
          <!-- windows -->
          <rect x="15" y="13" width="15" height="15" rx="4" style="fill:${u}" />
          <rect x="34" y="13" width="15" height="15" rx="4" style="fill:${u}" />
          ${a?r.JW`
              <!-- lit panes: dim pixels inside the dark frames -->
              <rect x="18" y="16" width="9" height="9" rx="2" fill="rgba(255,247,204,0.16)" />
              <rect x="37" y="16" width="9" height="9" rx="2" fill="rgba(255,247,204,0.16)" />
            `:r.JW`
              <rect x="17" y="15" width="5" height="4" rx="1.5" fill="rgba(255,255,255,0.18)" />
              <rect x="36" y="15" width="5" height="4" rx="1.5" fill="rgba(255,255,255,0.18)" />
            `}
          <!-- door seam + headlights -->
          <rect x="31" y="31" width="2" height="13" rx="1" style="fill:${a?c:"rgba(0,0,0,0.22)"}" />
          ${a?r.JW`
              <circle cx="21" cy="38" r="5.4" style="fill:${c}" />
              <circle cx="43" cy="38" r="5.4" style="fill:${c}" />
            `:r.s6}
          <circle cx="21" cy="38" r="4" fill="${p}" class="uc-train-lamp" />
          <circle cx="43" cy="38" r="4" fill="${p}" class="uc-train-lamp" />
        </g>
        ${s?r.JW`
            <g class="uc-train-x" stroke="${i}" stroke-width="4.5" stroke-linecap="round" opacity="0.95">
              <line x1="18" y1="18" x2="46" y2="46" />
              <line x1="46" y1="18" x2="18" y2="46" />
            </g>
          `:r.s6}
        ${l&&!a?r.JW`
            <g class="uc-train-badge" transform="translate(46 4)">
              <rect x="0" y="0" width="${8+6*l.length}" height="13" rx="6.5" fill="${i}" stroke="var(--card-background-color)" stroke-width="2" />
              <text x="${(8+6*l.length)/2}" y="9.6" text-anchor="middle" font-size="9" font-weight="800" font-family="inherit" fill="#fff">${l}</text>
            </g>
          `:r.s6}
      </svg>
    `}_formatTime(t,e,n,r){var i;const a=n.time_format||"auto",o=String((null===(i=e.locale)||void 0===i?void 0:i.time_format)||""),s="12"===a||"24"!==a&&("12"===o||"24"!==o&&void 0);try{const e={hour:!1===s?"2-digit":"numeric",minute:"2-digit"};return void 0!==s&&(e.hour12=s),new Intl.DateTimeFormat(r,e).format(t)}catch(e){return`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`}}_ensureTick(){this._tickTimer||(this._tickTimer=setInterval(()=>this.triggerPreviewUpdate(),3e4))}destroy(){this._tickTimer&&(clearInterval(this._tickTimer),this._tickTimer=null)}validate(t){const e=[],n=t;return t.id||e.push("Module ID is required"),t.type||e.push("Module type is required"),"template"===(n.source||"entities")?(n.template||"").trim()||e.push("Enter a departures template"):(n.departure_entities||[]).length||e.push("Add at least one departure sensor"),{valid:0===e.length,errors:e}}getStyles(){return'\n      .uc-train {\n        box-sizing: border-box;\n        padding: 14px 16px;\n        border-radius: var(--uc-r-12, 12px);\n        position: relative;\n        overflow: hidden;\n      }\n\n      /* ── LED board: dark panel, unlit dot grid, glowing dot-matrix text ── */\n      .uc-train--led {\n        background-image:\n          radial-gradient(circle, rgba(255,255,255,0.05) 34%, transparent 38%);\n        background-size: 2.6px 2.6px;\n        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 40px rgba(0,0,0,0.6);\n        font-family: "DotGothic16", "Menlo", "Consolas", ui-monospace, "SF Mono", monospace;\n      }\n      /* Large text is punched into dots; the pitch is fine enough (≈7 dots per\n         cap height) that the letterforms survive, and the glow fills the gaps. */\n      .uc-train--led .uc-train__led-text {\n        color: transparent !important;\n        /* Fat dots on a fine pitch: the letterforms stay connected enough to read\n           at 16px while the gaps still give the dot-matrix texture. */\n        background-image: radial-gradient(circle, var(--uc-led-dot, var(--uc-train-led)) 47%, transparent 55%);\n        background-size: 2.4px 2.4px;\n        -webkit-background-clip: text;\n        background-clip: text;\n        filter: drop-shadow(0 0 2px var(--uc-led-dot, var(--uc-train-led)));\n        font-weight: 800;\n        letter-spacing: 0.02em;\n      }\n      /* Small text stays solid so it is legible, with the same glow. */\n      .uc-train--led .uc-train__led-solid {\n        text-shadow: 0 0 4px currentColor;\n        font-weight: 700;\n      }\n      .uc-train--led .uc-train__name { font-size: 16px; }\n      .uc-train--led .uc-train__countdown-text { font-size: 16px; }\n      /* A tight bloom in the train\'s own colour (the icon carries it as its color);\n         a wide glow bled into the window gaps and flattened the shape. */\n      .uc-train--led .uc-train__icon { filter: drop-shadow(0 0 1.5px currentColor); }\n      .uc-train:not(.uc-train--led) .uc-train__icon { filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.32)); }\n      .uc-train--led .uc-train__badge--led {\n        background: transparent;\n        color: var(--uc-badge);\n        filter: drop-shadow(0 0 3px var(--uc-badge));\n      }\n\n      /* The trains wrap under the route text when the card is too narrow for both. */\n      .uc-train__body {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 12px;\n        flex-wrap: wrap;\n      }\n      .uc-train__left {\n        flex: 1 1 148px;\n        min-width: 0;\n        display: flex;\n        flex-direction: column;\n        gap: 6px;\n      }\n      .uc-train__name {\n        font-weight: 700;\n        font-size: 17px;\n        line-height: 1.2;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        /* Long route names wrap to a second line before we clip them. */\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 2;\n        overflow-wrap: anywhere;\n      }\n      .uc-train--compact .uc-train__name {\n        display: block;\n        white-space: nowrap;\n      }\n      .uc-train__countdown {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n        margin-top: 2px;\n        min-width: 0;\n      }\n      .uc-train__badge {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: 30px;\n        height: 30px;\n        border-radius: 50%;\n        background: color-mix(in srgb, var(--uc-badge) 16%, transparent);\n        color: var(--uc-badge);\n        flex-shrink: 0;\n      }\n      .uc-train__countdown-text {\n        font-size: 15px;\n        font-weight: 600;\n        white-space: nowrap;\n        min-width: 0;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-train__meta {\n        font-size: 12px;\n        line-height: 1.3;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      /* ── Trains ── */\n      .uc-train__row {\n        display: grid;\n        grid-template-rows: auto auto;\n        grid-auto-flow: column;\n        grid-auto-columns: auto;\n        column-gap: 14px;\n        row-gap: 4px;\n        align-items: end;\n        justify-items: center;\n        flex-shrink: 0;\n        margin-left: auto;\n        --uc-track-rail: color-mix(in srgb, var(--uc-train-secondary) 80%, transparent);\n        --uc-track-tie: color-mix(in srgb, var(--uc-train-secondary) 42%, transparent);\n      }\n      .uc-train--led .uc-train__row {\n        --uc-track-rail: color-mix(in srgb, var(--uc-train-led) 70%, transparent);\n        --uc-track-tie: color-mix(in srgb, var(--uc-train-led) 38%, transparent);\n      }\n      .uc-train__icon {\n        grid-row: 1;\n        position: relative;\n        align-self: end;\n        z-index: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n      /*\n       * The track is a plane lying on the ground, seen from slightly above: its\n       * far edge sits under the wheels and its near edge comes toward the viewer,\n       * so the rails fan out and the sleepers spread apart as they get closer.\n       * Real perspective (rotateX under a perspective container) does that for\n       * free, including foreshortening of the rolling animation.\n       */\n      .uc-train__bed {\n        position: relative;\n        width: 100%;\n        perspective: calc(var(--uc-tsz, 56px) * 1.4);\n        perspective-origin: 50% 0;\n      }\n      .uc-train__rails {\n        position: absolute;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 150%;\n        transform-origin: 50% 0;\n        transform: rotateX(60deg);\n        /* Two rails, centred on the wheel treads (x = 15/64 and 49/64 of the train). */\n        background: linear-gradient(\n          90deg,\n          transparent 21.6%,\n          var(--uc-track-rail) 21.6% 25.2%,\n          transparent 25.2% 74.8%,\n          var(--uc-track-rail) 74.8% 78.4%,\n          transparent 78.4%\n        );\n      }\n      .uc-train__rails::before {\n        content: \'\';\n        position: absolute;\n        inset: 0 11%;\n        background: repeating-linear-gradient(180deg, var(--uc-track-tie) 0 2px, transparent 2px 7px);\n        background-size: 100% 7px;\n        background-position: 0 0;\n      }\n      /* The train is heading toward the viewer, so the ground ahead of it (near\n         edge) runs up under the wheels: sleepers move one pitch away per loop. */\n      .uc-train__rails--roll::before { animation: uc-train-ties 0.6s linear infinite; }\n      @keyframes uc-train-ties {\n        from { background-position: 0 0; }\n        to { background-position: 0 -7px; }\n      }\n      /* On the LED board the track is punched into the same dot grid as the train. */\n      .uc-train--led .uc-train__bed {\n        -webkit-mask-image: radial-gradient(circle, #000 34%, transparent 42%);\n        mask-image: radial-gradient(circle, #000 34%, transparent 42%);\n        -webkit-mask-size: 3px 3px;\n        mask-size: 3px 3px;\n      }\n      .uc-train__icon--cancelled { opacity: 0.55; }\n      .uc-train__stop-time {\n        grid-row: 2;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        align-self: start;\n        min-width: 0;\n      }\n      .uc-train-svg { display: block; flex: 0 0 auto; overflow: visible; }\n      .uc-train__time {\n        font-weight: 700;\n        font-variant-numeric: tabular-nums;\n        white-space: nowrap;\n        line-height: 1.1;\n      }\n      .uc-train__time--cancelled { text-decoration: line-through; opacity: 0.7; }\n      /* Dotted text cannot show a strike-through (the line is punched too), so dim it instead. */\n      .uc-train--led .uc-train__led-text.uc-train__time--cancelled { text-decoration: none; opacity: 0.45; }\n      .uc-train__planned {\n        font-size: 10px;\n        text-decoration: line-through;\n        line-height: 1;\n        font-variant-numeric: tabular-nums;\n      }\n      .uc-train--led .uc-train__planned { text-decoration: none; opacity: 0.5; }\n\n      /* ── Compact ── */\n      .uc-train--compact { padding: 10px 14px; }\n      .uc-train__compact {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n      }\n      .uc-train__compact-main {\n        flex: 1 1 auto;\n        min-width: 0;\n        display: flex;\n        flex-direction: column;\n        gap: 2px;\n      }\n      .uc-train--compact .uc-train__name { font-size: 14px; }\n      .uc-train--led.uc-train--compact .uc-train__name { font-size: 15px; }\n      .uc-train__sub {\n        font-size: 12px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .uc-train--compact .uc-train__row { column-gap: 9px; row-gap: 2px; }\n\n      /* ── Info ticker ── */\n      .uc-train__info {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n        margin-top: 10px;\n        padding-top: 8px;\n        border-top: 1px solid color-mix(in srgb, currentColor 22%, transparent);\n        font-size: 12px;\n        min-width: 0;\n      }\n      .uc-train__ticker {\n        flex: 1;\n        min-width: 0;\n        overflow: hidden;\n        white-space: nowrap;\n      }\n      .uc-train__info--scroll .uc-train__ticker {\n        mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);\n        -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);\n      }\n      .uc-train__ticker-text { display: inline-block; text-overflow: ellipsis; overflow: hidden; max-width: 100%; vertical-align: bottom; }\n      .uc-train__ticker-text--scroll {\n        max-width: none;\n        overflow: visible;\n        padding-left: 100%;\n        animation: uc-train-ticker 14s linear infinite;\n      }\n      @keyframes uc-train-ticker {\n        from { transform: translateX(0); }\n        to { transform: translateX(-100%); }\n      }\n\n      .uc-train__empty {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        min-height: 44px;\n      }\n\n      /* ── Animations ── */\n      .uc-train__icon--imminent { animation: uc-train-bob 1.6s ease-in-out infinite; }\n      .uc-train__icon--imminent .uc-train-lamp { animation: uc-train-lamp 1.6s ease-in-out infinite; }\n      @keyframes uc-train-bob {\n        0%, 100% { transform: translateY(0); }\n        50% { transform: translateY(-2px); }\n      }\n      @keyframes uc-train-lamp {\n        0%, 100% { filter: drop-shadow(0 0 1px #fff7cc); opacity: 1; }\n        50% { filter: drop-shadow(0 0 5px #fff7cc) drop-shadow(0 0 9px #ffe38a); opacity: 0.85; }\n      }\n      .uc-train__countdown--soon .uc-train__countdown-text { animation: uc-train-blink 1.6s ease-in-out infinite; }\n      .uc-train--pulse { animation: uc-train-blink 1.6s ease-in-out infinite; }\n      @keyframes uc-train-blink {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.55; }\n      }\n      .uc-train--spin { animation: uc-train-spin 1s linear infinite; }\n      @keyframes uc-train-spin { to { transform: rotate(360deg); } }\n\n      @media (prefers-reduced-motion: reduce) {\n        .uc-train__rails--roll::before,\n        .uc-train__icon--imminent,\n        .uc-train__icon--imminent .uc-train-lamp,\n        .uc-train__countdown--soon .uc-train__countdown-text,\n        .uc-train--pulse,\n        .uc-train__ticker-text--scroll { animation: none; }\n      }\n    '}}},3488(t,e,n){n.d(e,{SB:()=>l,b5:()=>s,gf:()=>o});var r=n(2618),i=n(378),a=n(6478);function o(t){var e,n,r,a;if(!t)return!1;try{const o=i.xd.checkIntegrationAuth(t);if("pro"===(null===(e=null==o?void 0:o.subscription)||void 0===e?void 0:e.tier)&&"active"===(null===(n=null==o?void 0:o.subscription)||void 0===n?void 0:n.status))return!0;if(i.xd.isAuthenticated()){const t=i.xd.getCurrentUser();if("pro"===(null===(r=null==t?void 0:t.subscription)||void 0===r?void 0:r.tier)&&"active"===(null===(a=null==t?void 0:t.subscription)||void 0===a?void 0:a.status))return!0}}catch(t){return!1}return!1}function s(t,e){return r.qy`
    <div
      class="pro-lock-container"
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 32px;
        text-align: center;
        background: var(--secondary-background-color);
        border-radius: 12px;
        margin: 16px;
      "
    >
      <ha-icon
        icon="mdi:lock"
        style="color: var(--primary-color); --mdc-icon-size: 48px; margin-bottom: 16px;"
      ></ha-icon>
      <div style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">
        ${(0,a.kg)("editor.pro.feature_locked",t,"Pro Feature")}
      </div>
      <div
        style="font-size: 14px; color: var(--secondary-text-color); margin-bottom: 16px; max-width: 340px; line-height: 1.5;"
      >
        ${e}
      </div>
      <a
        href="https://ultracard.io/pro"
        target="_blank"
        rel="noopener noreferrer"
        style="
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: var(--primary-color);
          color: var(--text-primary-color, white);
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
        "
      >
        <ha-icon icon="mdi:crown" style="--mdc-icon-size: 20px;"></ha-icon>
        ${(0,a.kg)("editor.pro.upgrade_button",t,"Upgrade to Pro")}
      </a>
    </div>
  `}function l(t,e){return r.qy`
    <div
      style="
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 20px;
        border-radius: 12px;
        background: var(--secondary-background-color);
        border: 1px dashed var(--divider-color);
      "
    >
      <ha-icon
        icon="mdi:lock"
        style="color: var(--primary-color); --mdc-icon-size: 28px;"
      ></ha-icon>
      <div style="min-width: 0;">
        <div style="font-weight: 700; color: var(--primary-text-color);">${e}</div>
        <div style="font-size: 12px; color: var(--secondary-text-color);">
          ${(0,a.kg)("editor.pro.feature_locked",t,"Pro Feature")}
        </div>
      </div>
    </div>
  `}},1587(t,e,n){n.d(e,{z:()=>s});let r=[],i=[];function a(t){if(t<768)return!1;for(let e=0,n=r.length;;){let a=e+n>>1;if(t<r[a])n=a;else{if(!(t>=i[a]))return!0;e=a+1}if(e==n)return!1}}function o(t){return t>=127462&&t<=127487}function s(t,e,n=!0,r=!0){return(n?l:d)(t,e,r)}function l(t,e,n){if(e==t.length)return e;e&&u(t.charCodeAt(e))&&p(t.charCodeAt(e-1))&&e--;let r=c(t,e);for(e+=m(r);e<t.length;){let i=c(t,e);if(8205==r||8205==i||n&&a(i))e+=m(i),r=i;else{if(!o(i))break;{let n=0,r=e-2;for(;r>=0&&o(c(t,r));)n++,r-=2;if(n%2==0)break;e+=2}}}return e}function d(t,e,n){for(;e>0;){let r=l(t,e-2,n);if(r<e)return r;e--}return 0}function c(t,e){let n=t.charCodeAt(e);if(!p(n)||e+1==t.length)return n;let r=t.charCodeAt(e+1);return u(r)?r-56320+(n-55296<<10)+65536:n}function u(t){return t>=56320&&t<57344}function p(t){return t>=55296&&t<56320}function m(t){return t<65536?1:2}(()=>{let t="lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map(t=>t?parseInt(t,36):1);for(let e=0,n=0;e<t.length;e++)(e%2?i:r).push(n+=t[e])})()}};