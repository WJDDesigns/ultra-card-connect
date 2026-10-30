export const __webpack_esm_ids__=[2852];export const __webpack_esm_modules__={9305(e,t,r){r.d(t,{UltraRssFeedModule:()=>y});var s=r(2618),i=r(3307),n=r(6478);r(7921);const o=new Map,a=e=>((null==e?void 0:e.textContent)||"").trim();function l(e,...t){for(const r of t)for(const t of Array.from(e.children))if(t.localName===r||t.nodeName===r)return t;return null}function d(e,t){return Array.from(e.children).filter(e=>e.localName===t||e.nodeName===t)}function c(e){var t;if(!e)return"";if(!/[<&]/.test(e))return e.replace(/\s+/g," ").trim();try{return((null===(t=(new DOMParser).parseFromString(e,"text/html").body)||void 0===t?void 0:t.textContent)||"").replace(/\s+/g," ").trim()}catch(t){return e.replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim()}}function u(e){var t;if(!e||!/<img/i.test(e))return"";try{return(null===(t=(new DOMParser).parseFromString(e,"text/html").querySelector("img"))||void 0===t?void 0:t.getAttribute("src"))||""}catch(e){return""}}function m(e){if(!e)return 0;const t=Date.parse(e);return Number.isFinite(t)?t:0}function p(e,t){const r=(e||"").trim();if(!r)return"";try{const e=t?new URL(r,t):new URL(r);return"http:"===e.protocol||"https:"===e.protocol?e.href:""}catch(e){return""}}function h(e){for(const t of["thumbnail","content"])for(const r of Array.from(e.getElementsByTagName("*"))){if(r.localName!==t)continue;if(!(r.namespaceURI||"").includes("search.yahoo.com/mrss")&&!r.nodeName.startsWith("media:"))continue;const e=r.getAttribute("url")||"",s=r.getAttribute("medium")||"",i=r.getAttribute("type")||"";if(e&&("thumbnail"===t||"image"===s||i.startsWith("image/")||/\.(jpe?g|png|gif|webp|avif)(\?|$)/i.test(e)))return e}for(const t of d(e,"enclosure")){const e=t.getAttribute("type")||"",r=t.getAttribute("url")||"";if(r&&(e.startsWith("image/")||/\.(jpe?g|png|gif|webp|avif)(\?|$)/i.test(r)))return r}const t=Array.from(e.children).find(e=>"image"===e.localName&&e.getAttribute("href"));return t&&t.getAttribute("href")||""}function f(e,t){const r=(e||"").trim();if(!r)return null;if(r.startsWith("{"))return function(e,t){let r;try{r=JSON.parse(e)}catch(e){return null}if(!r||"object"!=typeof r||!Array.isArray(r.items))return null;const s=String(r.title||""),i=r.items.map((e,r)=>{var i,n;const o=String(e.content_html||""),a=p(String(e.url||e.external_url||""),t);return{id:String(null!==(n=null!==(i=e.id)&&void 0!==i?i:a)&&void 0!==n?n:r),title:c(String(e.title||"")),link:a,summary:c(String(e.summary||e.content_text||o)),image:p(String(e.image||e.banner_image||u(o)),t),published:m(String(e.date_published||e.date_modified||"")),source:s}});return{title:s,items:i}}(r,t);let s;try{s=(new DOMParser).parseFromString(r,"application/xml")}catch(e){return null}if(s.getElementsByTagName("parsererror").length>0)return null;const i=s.documentElement;if(!i)return null;if("feed"===i.localName){const e=c(a(l(i,"title"))),r=d(i,"entry").map((r,s)=>{const i=d(r,"link"),n=i.find(e=>"alternate"===(e.getAttribute("rel")||"alternate"))||i[0],o=p((null==n?void 0:n.getAttribute("href"))||"",t),f=a(l(r,"content")),g=a(l(r,"summary"))||f;return{id:a(l(r,"id"))||o||String(s),title:c(a(l(r,"title"))),link:o,summary:c(g),image:p(h(r)||u(f||g),t),published:m(a(l(r,"published"))||a(l(r,"updated"))),source:e}});return{title:e,items:r}}const n=(i.localName,l(i,"channel")),o=c(a(n?l(n,"title"):null)),f="rss"===i.localName?n:i;if(!f)return null;const g=d(f,"item").map((e,r)=>{const s=a(l(e,"encoded")),i=a(l(e,"description")),n=p(a(l(e,"link")),t);return{id:a(l(e,"guid"))||n||String(r),title:c(a(l(e,"title"))),link:n,summary:c(i||s),image:p(h(e)||u(s||i),t),published:m(a(l(e,"pubDate"))||a(l(e,"date"))),source:o}});return"rss"!==i.localName&&"RDF"!==i.localName&&0===g.length?null:{title:o,items:g}}function g(e){e?o.delete(p(e)||e):o.clear()}const _="__all__";function b(e,t){return(e.feed_options||[]).find(e=>e.url===t)||{url:t}}function v(e){try{return new URL(e).hostname.replace(/^www\./,"")}catch(t){return e}}class y extends i.m{constructor(){super(...arguments),this._activeTab=new Map,this.metadata={type:"rss_feed",title:"RSS Feed",description:"Latest headlines from RSS, Atom or JSON feeds, merged newest first",author:"WJD Designs",version:"1.0.0",icon:"mdi:rss",category:"content",tags:["rss","atom","feed","news","headlines","blog","podcast","content"]}}createDefault(e,t){return{id:e||this.generateId("rss_feed"),type:"rss_feed",title:"",show_title:!0,feeds:[],max_items:6,refresh_minutes:30,layout:"list",show_image:!0,show_summary:!0,summary_lines:2,show_date:!0,show_source:!0,open_in:"new_tab",include_keywords:[],exclude_keywords:[],max_age_days:0,tap_action:{action:"nothing"},hold_action:{action:"nothing"},double_tap_action:{action:"nothing"},display_mode:"always",display_conditions:[]}}validate(e){const t=[];return e.id||t.push("Module ID is required"),e.type||t.push("Module type is required"),{valid:0===t.length,errors:t}}renderGeneralTab(e,t,r,o){var a,l,d,c,u,m;const p=e,h=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",f=(e,t)=>(0,n.kg)(`editor.rss_feed.${e}`,h,t),_=e=>{o(e),this.triggerPreviewUpdate()},b=p.layout||"list";return s.qy`
      ${this.injectUcFormStyles()}
      <div class="module-general-settings">
        <div class="settings-section">
          <div class="section-title">${f("feeds_section","Feeds")}</div>
          ${this.renderChipListField(f("feeds","Feed addresses"),f("feeds_desc","Paste an RSS, Atom or JSON Feed link and press Enter. Add several to merge them, newest first."),t,p.feeds||[],e=>{const t=e.map(e=>e.trim()).filter(Boolean);_({feeds:t})},{mode:"free-text",placeholder:"https://example.com/feed.xml"})}
          ${this.renderSliderField(f("max_items","Number of items"),f("max_items_desc","How many headlines to show."),null!==(l=p.max_items)&&void 0!==l?l:6,6,1,30,1,e=>_({max_items:e}),"")}
          ${this.renderSliderField(f("refresh_minutes","Refresh every"),f("refresh_minutes_desc","How often to check the feeds for new items."),null!==(d=p.refresh_minutes)&&void 0!==d?d:30,30,5,240,5,e=>_({refresh_minutes:e}),(0,n.kg)("editor.irrigation.unit_min",h," min"))}
          <button
            type="button"
            class="uc-rss-ed-btn"
            @click=${()=>{for(const e of p.feeds||[])g(e);this.triggerPreviewUpdate(!0)}}
          >
            <ha-icon icon="mdi:refresh"></ha-icon>
            ${f("refresh_now","Refresh now")}
          </button>
        </div>

        <div class="settings-section">
          <div class="section-title">${f("display_section","Display")}</div>
          ${this.renderFieldSection(f("title","Title"),f("title_desc","Leave empty to use the feed name."),t,{title:p.title||""},[this.textField("title")],e=>_({title:e.detail.value.title}))}
          ${this.renderFieldSection(f("show_title","Show title"),"",t,{show_title:!1!==p.show_title},[this.booleanField("show_title")],e=>_({show_title:e.detail.value.show_title}))}
          ${this.renderSegmentedField(f("layout","Layout"),f("layout_desc","List with thumbnails, compact headlines only, or large image cards."),b,[{value:"list",label:f("layout_list","List"),icon:"mdi:view-list"},{value:"compact",label:f("layout_compact","Compact"),icon:"mdi:format-list-bulleted"},{value:"cards",label:f("layout_cards","Cards"),icon:"mdi:view-grid"},{value:"ticker",label:f("layout_ticker","Ticker"),icon:"mdi:ticket-outline"}],e=>_({layout:e}))}
          ${"ticker"===b?this.renderSliderField(f("ticker_speed","Ticker speed"),f("ticker_speed_desc","Seconds each headline takes to scroll past. Lower is faster."),null!==(c=p.ticker_speed)&&void 0!==c?c:8,8,3,30,1,e=>_({ticker_speed:e}),f("unit_seconds"," s")):s.s6}
          ${this.renderFieldSection(f("show_image","Show images"),f("show_image_desc","The picture the feed gives for each item, when it has one."),t,{show_image:!1!==p.show_image},[this.booleanField("show_image")],e=>_({show_image:e.detail.value.show_image}))}
          ${this.renderFieldSection(f("show_summary","Show summary"),"",t,{show_summary:!1!==p.show_summary},[this.booleanField("show_summary")],e=>_({show_summary:e.detail.value.show_summary}))}
          ${!1!==p.show_summary&&"compact"!==b?this.renderSliderField(f("summary_lines","Summary lines"),f("summary_lines_desc","Longer summaries are cut off after this many lines."),null!==(u=p.summary_lines)&&void 0!==u?u:2,2,1,8,1,e=>_({summary_lines:e}),""):s.s6}
          ${this.renderFieldSection(f("show_date","Show time"),f("show_date_desc","How long ago each item was published."),t,{show_date:!1!==p.show_date},[this.booleanField("show_date")],e=>_({show_date:e.detail.value.show_date}))}
          ${this.renderFieldSection(f("show_source","Show feed name"),f("show_source_desc","Useful when you merge several feeds."),t,{show_source:!1!==p.show_source},[this.booleanField("show_source")],e=>_({show_source:e.detail.value.show_source}))}
          ${this.renderSegmentedField(f("open_in","Tapping a headline"),"",p.open_in||"new_tab",[{value:"new_tab",label:f("open_new_tab","Opens a new tab")},{value:"same_tab",label:f("open_same_tab","Opens here")},{value:"none",label:f("open_none","Does nothing")}],e=>_({open_in:e}))}
          ${this.renderColorField(f("accent_color","Accent color"),f("accent_color_desc","Used for the icon and the feed name."),t,p.accent_color||"","",e=>_({accent_color:e}))}
        </div>

        <div class="settings-section">
          <div class="section-title">${f("tabs_section","Feeds as tabs")}</div>
          ${this.renderFieldSection(f("feed_tabs","Show a tab for each feed"),f("feed_tabs_desc","Switch between your feeds instead of seeing them merged."),t,{feed_tabs:!!p.feed_tabs},[this.booleanField("feed_tabs")],e=>_({feed_tabs:e.detail.value.feed_tabs}))}
          ${p.feed_tabs?this.renderFieldSection(f("feed_tabs_all",'Add an "All" tab'),f("feed_tabs_all_desc","First tab shows every feed merged, newest first."),t,{feed_tabs_all:!1!==p.feed_tabs_all},[this.booleanField("feed_tabs_all")],e=>_({feed_tabs_all:e.detail.value.feed_tabs_all})):s.s6}
          ${(p.feeds||[]).length?s.qy`<div class="field-description" style="margin: 4px 0 8px;">
                  ${f("feed_options_desc","Give each feed its own name, icon and color. Used on the tabs and as the feed name on items. Arrows change the order.")}
                </div>
                ${(p.feeds||[]).map((e,r,s)=>this._renderFeedOptionsRow(p,e,r,s.length,t,_,f))}`:s.s6}
        </div>

        <div class="settings-section">
          <div class="section-title">${f("filter_section","Filter")}</div>
          ${this.renderChipListField(f("include_keywords","Only show items with"),f("include_keywords_desc","Leave empty to show everything. Matches the title and summary."),t,p.include_keywords||[],e=>_({include_keywords:e}),{mode:"free-text"})}
          ${this.renderChipListField(f("exclude_keywords","Hide items with"),f("exclude_keywords_desc","Items that mention any of these words are hidden."),t,p.exclude_keywords||[],e=>_({exclude_keywords:e}),{mode:"free-text",variant:"exclude"})}
          ${this.renderSliderField(f("max_age_days","Hide items older than"),f("max_age_days_desc","0 shows items of any age."),null!==(m=p.max_age_days)&&void 0!==m?m:0,0,0,60,1,e=>_({max_age_days:e}),f("unit_days"," days"))}
        </div>
      </div>
      <style>
        .uc-rss-ed-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          min-height: 36px;
          padding: 0 14px;
          border: 1px solid var(--divider-color);
          border-radius: 8px;
          background: transparent;
          color: var(--primary-text-color);
          font: inherit;
          cursor: pointer;
        }
        .uc-rss-ed-btn ha-icon {
          --mdc-icon-size: 18px;
        }
        .uc-rss-ed-feed {
          border: 1px solid var(--divider-color);
          border-radius: 10px;
          padding: 10px 12px 2px;
          margin-bottom: 10px;
        }
        .uc-rss-ed-feed-head {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
          font-size: 13px;
          color: var(--secondary-text-color);
        }
        .uc-rss-ed-feed-head span {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .uc-rss-ed-icon-btn {
          border: none;
          background: none;
          color: var(--primary-text-color);
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          display: inline-flex;
        }
        .uc-rss-ed-icon-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }
        .uc-rss-ed-icon-btn ha-icon {
          --mdc-icon-size: 18px;
        }
        ${i.m.getSliderStyles()}
      </style>
    `}_renderFeedOptionsRow(e,t,r,i,n,o,a){const l=b(e,t),d=r=>{const s=(e.feed_options||[]).filter(e=>e.url!==t);o({feed_options:[...s,Object.assign(Object.assign(Object.assign({},l),r),{url:t})]})},c=t=>{const s=[...e.feeds||[]],i=r+t;i<0||i>=s.length||([s[r],s[i]]=[s[i],s[r]],o({feeds:s}))};return s.qy`
      <div class="uc-rss-ed-feed">
        <div class="uc-rss-ed-feed-head">
          <ha-icon icon=${l.icon||"mdi:rss"} style="--mdc-icon-size:18px; color:${l.color||"inherit"}"></ha-icon>
          <span title=${t}>${t}</span>
          <button
            type="button"
            class="uc-rss-ed-icon-btn"
            ?disabled=${0===r}
            title=${a("move_up","Move up")}
            @click=${()=>c(-1)}
          >
            <ha-icon icon="mdi:arrow-up"></ha-icon>
          </button>
          <button
            type="button"
            class="uc-rss-ed-icon-btn"
            ?disabled=${r===i-1}
            title=${a("move_down","Move down")}
            @click=${()=>c(1)}
          >
            <ha-icon icon="mdi:arrow-down"></ha-icon>
          </button>
        </div>
        ${this.renderFieldSection(a("feed_label","Name"),"",n,{label:l.label||""},[this.textField("label")],e=>d({label:e.detail.value.label}))}
        ${this.renderFieldSection(a("feed_icon","Icon"),"",n,{icon:l.icon||""},[this.iconField("icon")],e=>d({icon:e.detail.value.icon}))}
        ${this.renderColorField(a("feed_color","Color"),"",n,l.color||"","",e=>d({color:e}))}
      </div>
    `}_renderTabs(e,t,r,i,o){const a=[];return!1!==e.feed_tabs_all&&a.push({key:_,label:(0,n.kg)("editor.rss_feed.tab_all",o,"All"),icon:"mdi:rss",color:""}),t.forEach((t,s)=>{var i,n,o;const l=b(e,t);a.push({key:t,label:(null===(i=l.label)||void 0===i?void 0:i.trim())||(null===(o=null===(n=r[s])||void 0===n?void 0:n.feed)||void 0===o?void 0:o.title)||v(t),icon:l.icon||"",color:l.color||""})}),s.qy`
      <div class="uc-rss-tabs" role="tablist">
        ${a.map(t=>s.qy`<button
            type="button"
            role="tab"
            class="uc-rss-tab ${t.key===i?"active":""}"
            aria-selected=${t.key===i?"true":"false"}
            style=${t.color?`--uc-rss-tab-color:${t.color}`:""}
            @click=${r=>{r.stopPropagation(),this._activeTab.set(e.id,t.key),this.triggerPreviewUpdate(!0)}}
          >
            ${t.icon?s.qy`<ha-icon icon=${t.icon}></ha-icon>`:s.s6}
            <span>${t.label}</span>
          </button>`)}
      </div>
    `}_renderTicker(e,t){var r;const i=Math.max(3,Math.min(30,null!==(r=e.ticker_speed)&&void 0!==r?r:8)),n=Math.max(6,t.length*i),o=r=>s.qy`<div class="uc-rss-ticker-run" aria-hidden=${r?"true":s.s6}>
      ${t.map(t=>s.qy`<a
          class="uc-rss-ticker-item"
          href=${t.link||s.s6}
          tabindex=${r?"-1":s.s6}
          rel="noopener noreferrer"
          @click=${r=>t.link?this._open(r,e,t):r.preventDefault()}
        >
          ${!1!==e.show_source&&t.source?s.qy`<span class="uc-rss-source">${t.source}</span>`:s.s6}
          <span>${t.title||t.link}</span>
        </a>`)}
    </div>`;return s.qy`<div class="uc-rss-ticker" style="--uc-rss-ticker-duration:${n}s">
      <div class="uc-rss-ticker-track">${o(!1)}${o(!0)}</div>
    </div>`}_errorText(e,t,r){switch(e){case"cors":return(0,n.kg)("editor.rss_feed.error_cors",r,"This site does not let the browser read its feed. Update Ultra Card Connect so it can load the feed for you.");case"blocked":return(0,n.kg)("editor.rss_feed.error_blocked",r,"Ultra Card Connect would not load this address. Only public http and https feeds work.");case"http":return(0,n.kg)("editor.rss_feed.error_http",r,"The site answered with an error ({status}).").replace("{status}",t||"?");case"parse":return(0,n.kg)("editor.rss_feed.error_parse",r,"That address is not an RSS, Atom or JSON feed.");default:return(0,n.kg)("editor.rss_feed.error_network",r,"The feed could not be loaded.")}}_open(e,t,r){const s=t.open_in||"new_tab";"none"!==s&&r.link&&(e.stopPropagation(),e.preventDefault(),"same_tab"===s?window.location.assign(r.link):window.open(r.link,"_blank","noopener"))}_renderItem(e,t,r,i,n){var o;const a=!1!==e.show_image&&"compact"!==r&&!!t.image,l=!1!==e.show_summary&&"compact"!==r&&!!t.summary,d=Math.max(1,Math.min(8,null!==(o=e.summary_lines)&&void 0!==o?o:2)),c=!1!==e.show_date?function(e,t,r=Date.now()){if(!e)return"";const s=Math.round((e-r)/1e3),i=Math.abs(s);let n;try{n=new Intl.RelativeTimeFormat(t||"en",{numeric:"auto"})}catch(e){n=new Intl.RelativeTimeFormat("en",{numeric:"auto"})}return i<60?n.format(Math.round(s),"second"):i<3600?n.format(Math.round(s/60),"minute"):i<86400?n.format(Math.round(s/3600),"hour"):i<604800?n.format(Math.round(s/86400),"day"):new Date(e).toLocaleDateString(t||void 0,{day:"numeric",month:"short"})}(t.published,i,n):"",u=!1!==e.show_source?t.source:"",m="none"!==(e.open_in||"new_tab")&&!!t.link;return s.qy`
      <a
        class="uc-rss-item ${m?"clickable":""}"
        href=${m?t.link:s.s6}
        target=${m&&"new_tab"===(e.open_in||"new_tab")?"_blank":s.s6}
        rel="noopener noreferrer"
        @click=${r=>m?this._open(r,e,t):r.preventDefault()}
      >
        ${a?s.qy`<img
              class="uc-rss-img"
              src=${t.image}
              alt=""
              loading="lazy"
              referrerpolicy="no-referrer"
              @error=${e=>e.target.style.display="none"}
            />`:s.s6}
        <div class="uc-rss-body">
          <div class="uc-rss-headline">${t.title||t.link}</div>
          ${l?s.qy`<div class="uc-rss-summary" style="-webkit-line-clamp:${d};line-clamp:${d}">
                ${t.summary}
              </div>`:s.s6}
          ${u||c?s.qy`<div class="uc-rss-meta">
                ${u?s.qy`<span class="uc-rss-source">${u}</span>`:s.s6}
                ${u&&c?s.qy`<span aria-hidden="true">·</span>`:s.s6}
                ${c?s.qy`<span>${c}</span>`:s.s6}
              </div>`:s.s6}
        </div>
      </a>
    `}renderPreview(e,t,r,i){var a,l,d,c,u,m;const h=e,g=(null===(a=null==t?void 0:t.locale)||void 0===a?void 0:a.language)||"en",v=(h.feeds||[]).map(e=>e.trim()).filter(e=>!!p(e));if(!v.length)return s.qy`
        <div class="uc-rss-empty">
          ${this.renderGradientErrorState((0,n.kg)("editor.rss_feed.empty_title",g,"Add a feed"),(0,n.kg)("editor.rss_feed.empty_desc",g,"Paste an RSS or Atom feed link in the General tab."),"mdi:rss")}
        </div>
      `;const y=6e4*Math.max(5,null!==(l=h.refresh_minutes)&&void 0!==l?l:30),w=v.map(e=>function(e,t,r){const s=p(t);if(!s)return{loading:!1,error:"parse"};let i=o.get(s);return(!i||Date.now()-i.fetchedAt>Math.max(6e4,r))&&!(null==i?void 0:i.pending)&&e&&(i=i||{fetchedAt:0},i.pending=async function(e,t){const r=o.get(t)||{fetchedAt:0};try{let s=null,i=null;const n=await async function(e,t){var r,s;const i=null==e?void 0:e.callApi;if("function"!=typeof i)return null;try{const r=await i.call(e,"GET",`ultra_card_pro_cloud/feed?url=${encodeURIComponent(t)}`);return r&&"object"==typeof r?{ok:!!r.ok,status:Number(r.status)||0,body:"string"==typeof r.body?r.body:""}:null}catch(e){const t=e||{},i=Number(null!==(s=null!==(r=t.status_code)&&void 0!==r?r:t.status)&&void 0!==s?s:0);return 400===i||403===i?{ok:!1,status:i,body:String(t.error||""),refused:!0}:null}}(e,t);if(null==n?void 0:n.refused)return r.error="blocked",void(r.errorDetail=n.body||String(n.status));if((null==n?void 0:n.ok)&&(s=n.body,i=f(s,t)),!i){const e=await async function(e){let t;try{t=await fetch(e,{credentials:"omit",cache:"no-cache"})}catch(e){return null}return t.ok?{ok:!0,status:t.status,body:await t.text()}:{ok:!1,status:t.status,body:""}}(t);if(null==e?void 0:e.ok)s=e.body,i=f(s,t);else if(!s)return void(n&&!n.ok?(r.error="http",r.errorDetail=n.status?String(n.status):n.body):e?(r.error="http",r.errorDetail=String(e.status)):r.error="cors")}if(!i)return void(r.error="parse");r.feed=i,r.error=void 0,r.errorDetail=void 0}catch(e){r.error="network"}finally{r.fetchedAt=Date.now(),r.pending=void 0,o.set(t,r),function(){if("undefined"!=typeof window)try{window.dispatchEvent(new CustomEvent("ultra-card-template-update",{detail:{source:"rss-feed"}}))}catch(e){}}()}}(e,s),o.set(s,i)),{feed:null==i?void 0:i.feed,error:null==i?void 0:i.error,errorDetail:null==i?void 0:i.errorDetail,loading:!!(null==i?void 0:i.pending)&&!(null==i?void 0:i.feed)}}(t,e,y)),x=Date.now(),k=!!h.feed_tabs&&v.length>1;let $=this._activeTab.get(h.id)||"";k&&$!==_&&!v.includes($)&&($=!1!==h.feed_tabs_all?_:v[0]);const S=v.map((e,t)=>({url:e,state:w[t]})).filter(e=>!k||$===_||e.url===$),F=function(e,t,r=Date.now()){const s=new Set,i=[],n=(t.include||[]).map(e=>e.toLowerCase().trim()).filter(Boolean),o=(t.exclude||[]).map(e=>e.toLowerCase().trim()).filter(Boolean),a=t.maxAgeDays&&t.maxAgeDays>0?r-864e5*t.maxAgeDays:0;for(const{feed:t,label:r}of e)if(t)for(const e of t.items){const t=e.link||e.id;if(t&&s.has(t))continue;const l=`${e.title} ${e.summary}`.toLowerCase();n.length&&!n.some(e=>l.includes(e))||o.some(e=>l.includes(e))||a&&e.published&&e.published<a||(t&&s.add(t),i.push(r?Object.assign(Object.assign({},e),{source:r}):e))}return i.sort((e,t)=>t.published-e.published),i.slice(0,Math.max(1,t.maxItems))}(S.map(e=>{var t;return{feed:e.state.feed,label:(null===(t=b(h,e.url).label)||void 0===t?void 0:t.trim())||void 0}}),{maxItems:null!==(d=h.max_items)&&void 0!==d?d:6,include:h.include_keywords,exclude:h.exclude_keywords,maxAgeDays:h.max_age_days},x),A=S.some(e=>e.state.loading),D=S.map(e=>e.state).find(e=>e.error&&!e.feed),q=h.layout||"list",M=h.accent_color?`--uc-rss-accent:${h.accent_color};`:"",N=this.buildStyleString(this.buildDesignStyles(e,t)),T=this.getHoverEffectClass(e),C=1===v.length?null===(u=null===(c=w[0])||void 0===c?void 0:c.feed)||void 0===u?void 0:u.title:"",L=(null===(m=h.title)||void 0===m?void 0:m.trim())||C||(0,n.kg)("editor.rss_feed.default_title",g,"News");let O;return O=F.length&&"ticker"===q?this._renderTicker(h,F):F.length?s.qy`<div class="uc-rss-items ${q}">
        ${F.map(e=>this._renderItem(h,e,q,g,x))}
      </div>`:A?s.qy`<div class="uc-rss-status">
        <ha-icon icon="mdi:loading" class="spin"></ha-icon>
        ${(0,n.kg)("editor.rss_feed.loading",g,"Loading feed…")}
      </div>`:D?s.qy`<div class="uc-rss-status error">
        <ha-icon icon="mdi:rss-off"></ha-icon>
        <span>${this._errorText(D.error,D.errorDetail,g)}</span>
      </div>`:s.qy`<div class="uc-rss-status">
        ${(0,n.kg)("editor.rss_feed.no_items",g,"No items match right now.")}
      </div>`,s.qy`
      <div class="uc-rss ${T}" data-uc-role="pane" style="${M}${N}">
        ${this.wrapWithAnimation(s.qy`
            ${!1!==h.show_title?s.qy`<div class="uc-rss-head">
                  <ha-icon icon="mdi:rss"></ha-icon>
                  <span>${L}</span>
                </div>`:s.s6}
            ${k?this._renderTabs(h,v,w,$,g):s.s6}
            ${O}
          `,e,t)}
      </div>
    `}getStyles(){return"\n      .uc-rss {\n        --uc-rss-accent-resolved: var(--uc-rss-accent, var(--primary-color));\n        box-sizing: border-box;\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        padding: 14px;\n        border-radius: var(--uc-r-12, 12px);\n        background: var(--uc-pane-bg, var(--card-background-color));\n        color: var(--primary-text-color);\n        min-width: 0;\n      }\n      .uc-rss-head { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 16px; min-width: 0; }\n      .uc-rss-head ha-icon { color: var(--uc-rss-accent-resolved); --mdc-icon-size: 22px; flex-shrink: 0; }\n      .uc-rss-head span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n      .uc-rss-items { display: flex; flex-direction: column; gap: 4px; min-width: 0; }\n      .uc-rss-items.cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));\n        gap: 10px;\n      }\n      .uc-rss-item {\n        display: flex;\n        gap: 12px;\n        align-items: flex-start;\n        padding: 8px;\n        margin: 0 -8px;\n        border-radius: 10px;\n        color: inherit;\n        text-decoration: none;\n        min-width: 0;\n      }\n      .uc-rss-item.clickable { cursor: pointer; }\n      .uc-rss-item.clickable:hover { background: color-mix(in srgb, var(--primary-text-color) 6%, transparent); }\n      .uc-rss-item:focus-visible { outline: 2px solid var(--uc-rss-accent-resolved); outline-offset: 1px; }\n      .uc-rss-img {\n        width: 72px;\n        height: 72px;\n        object-fit: cover;\n        border-radius: 8px;\n        flex-shrink: 0;\n        background: var(--secondary-background-color);\n      }\n      .uc-rss-body { display: flex; flex-direction: column; gap: 4px; min-width: 0; flex: 1; }\n      .uc-rss-headline { font-weight: 600; font-size: 14px; line-height: 1.35; overflow-wrap: anywhere; }\n      .uc-rss-summary {\n        font-size: 13px;\n        line-height: 1.4;\n        color: var(--secondary-text-color);\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        overflow: hidden;\n      }\n      .uc-rss-meta { display: flex; flex-wrap: wrap; gap: 6px; font-size: 12px; color: var(--secondary-text-color); }\n      .uc-rss-source { color: var(--uc-rss-accent-resolved); font-weight: 500; }\n      .uc-rss-items.compact .uc-rss-item { padding: 6px 8px; }\n      .uc-rss-items.compact .uc-rss-body { flex-direction: row; align-items: baseline; justify-content: space-between; gap: 10px; }\n      .uc-rss-items.compact .uc-rss-headline { font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; }\n      .uc-rss-items.compact .uc-rss-meta { flex-shrink: 0; flex-wrap: nowrap; }\n      .uc-rss-items.compact .uc-rss-source { display: none; }\n      .uc-rss-items.cards .uc-rss-item {\n        flex-direction: column;\n        gap: 8px;\n        margin: 0;\n        padding: 0 0 10px;\n        background: var(--secondary-background-color);\n        overflow: hidden;\n      }\n      .uc-rss-items.cards .uc-rss-img { width: 100%; height: auto; aspect-ratio: 16 / 9; border-radius: 0; }\n      .uc-rss-items.cards .uc-rss-body { padding: 0 10px; }\n      .uc-rss-items.cards .uc-rss-item:not(:has(.uc-rss-img)) .uc-rss-body { padding-top: 10px; }\n      .uc-rss-status { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--secondary-text-color); padding: 6px 0; }\n      .uc-rss-status.error ha-icon { color: var(--warning-color, #ffa600); flex-shrink: 0; }\n      .uc-rss-status .spin { animation: uc-rss-spin 1s linear infinite; }\n      @keyframes uc-rss-spin { to { transform: rotate(360deg); } }\n      .uc-rss-tabs { display: flex; gap: 6px; overflow-x: auto; scrollbar-width: none; padding-bottom: 2px; }\n      .uc-rss-tabs::-webkit-scrollbar { display: none; }\n      .uc-rss-tab {\n        --uc-rss-tab-c: var(--uc-rss-tab-color, var(--uc-rss-accent-resolved));\n        display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;\n        padding: 6px 12px; border-radius: 999px; cursor: pointer;\n        border: 1px solid color-mix(in srgb, var(--uc-rss-tab-c) 35%, var(--divider-color));\n        background: transparent; color: var(--primary-text-color); font: inherit; font-size: 13px;\n      }\n      .uc-rss-tab ha-icon { --mdc-icon-size: 16px; color: var(--uc-rss-tab-c); }\n      .uc-rss-tab.active { background: color-mix(in srgb, var(--uc-rss-tab-c) 18%, transparent); border-color: var(--uc-rss-tab-c); font-weight: 600; }\n      .uc-rss-ticker { overflow: hidden; min-width: 0; mask-image: linear-gradient(90deg, transparent, #000 24px, #000 calc(100% - 24px), transparent); }\n      .uc-rss-ticker-track { display: flex; width: max-content; animation: uc-rss-ticker var(--uc-rss-ticker-duration, 40s) linear infinite; }\n      .uc-rss-ticker:hover .uc-rss-ticker-track { animation-play-state: paused; }\n      .uc-rss-ticker-run { display: flex; flex-shrink: 0; }\n      .uc-rss-ticker-item {\n        display: inline-flex; align-items: baseline; gap: 8px; white-space: nowrap;\n        padding: 4px 28px 4px 0; color: inherit; text-decoration: none; font-weight: 500; font-size: 14px;\n      }\n      .uc-rss-ticker-item::after { content: '•'; margin-left: 20px; color: var(--secondary-text-color); }\n      @keyframes uc-rss-ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }\n      @media (prefers-reduced-motion: reduce) {\n        .uc-rss-ticker { overflow-x: auto; mask-image: none; }\n        .uc-rss-ticker-track { animation: none; }\n        .uc-rss-ticker-run[aria-hidden='true'] { display: none; }\n      }\n    "}}}};